#!/usr/bin/env node
/**
 * Layout audit.
 *
 * qa.mjs checks whether a page is correct: contrast, headings, alt text,
 * overflow. This one checks whether it is *well set*, which is a different
 * question and the one that produced visible complaints:
 *
 *   - Does every block share one left edge? Mixed containers are what made
 *     figures look randomly offset.
 *   - Is any figure disproportionate, either taller than the budget or soft
 *     because it is displayed wider than half its pixel width?
 *   - Are measures within a readable range? Latin prose wants roughly 45 to 85
 *     characters a line; CJK wants fewer.
 *   - Is the vertical rhythm regular, or are there gaps big enough to read as
 *     mistakes?
 *   - Is the type scale actually a scale, or has it drifted into a dozen
 *     arbitrary sizes?
 *
 * Run against the built export:  node scripts/layout-audit.mjs
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import { SOFT_BY_NECESSITY } from '../lib/figure.ts';

const CHROME =
  process.env.CHROME_PATH ??
  `${process.env.HOME}/.cache/puppeteer/chrome/mac_arm-149.0.7827.22/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const ROOT = path.join(process.cwd(), 'out');
const PORT = 4413;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

const ROUTES = [
  '/en/',
  '/en/work/',
  '/en/work/papercraft/',
  '/en/work/transcreation/',
  '/en/work/ielts-coach/',
  '/en/about/',
  '/en/cv/',
  '/en/notes/two-hours/',
  '/zh/',
  '/zh/work/papercraft/',
  '/zh/work/transcreation/',
  '/zh/work/ielts-coach/',
  '/zh/about/',
  '/zh/cv/',
  '/zh/notes/two-hours/',
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440 },
  { name: 'laptop', width: 1180 },
  { name: 'tablet', width: 834 },
  { name: 'phone', width: 390 },
];

const AUDIT = (SOFT) => {
  const problems = [];
  const round = (n) => Math.round(n);

  /* ---------------------------------------------------------------- */
  /* Reference left edge: the prose column                            */
  /* ---------------------------------------------------------------- */
  // The body column is the page's spine; measure everything against it.
  const reference = document.querySelector('main .col-body') ?? document.querySelector('.prose-body');
  const refLeft = reference ? round(reference.getBoundingClientRect().left) : null;

  if (refLeft !== null) {
    // Every block that carries content should start on the same vertical line.
    const blocks = document.querySelectorAll(
      'figure, [role="tablist"], table, dl, ol, ul, blockquote, h2, .prose-body',
    );
    const offsets = new Map();
    for (const el of blocks) {
      const rect = el.getBoundingClientRect();
      if (rect.width < 40 || rect.height < 8) continue;
      // Skip anything living in the margin column or the page chrome.
      if (el.closest('header, footer, nav, aside, .col-margin')) continue;
      // List markers legitimately hang; measure the list box, not its bullets.
      const offset = round(rect.left) - refLeft;
      if (Math.abs(offset) > 3) {
        const key = `${el.tagName.toLowerCase()}${el.getAttribute('role') ? `[${el.getAttribute('role')}]` : ''} ${offset > 0 ? '+' : ''}${offset}`;
        offsets.set(key, (offsets.get(key) ?? 0) + 1);
      }
    }
    for (const [key, count] of offsets) {
      problems.push(`left edge drifts: ${key}px (${count}x)`);
    }
  }

  /* ---------------------------------------------------------------- */
  /* Figures: proportion and sharpness                                */
  /* ---------------------------------------------------------------- */
  for (const img of document.querySelectorAll('main img')) {
    const rect = img.getBoundingClientRect();
    if (rect.width < 24) continue;
    const name = (img.currentSrc || img.src).split('/').pop();
    if (img.naturalWidth && rect.width > 0) {
      const ratio = img.naturalWidth / rect.width;
      const allowed = SOFT.includes(name);
      if (ratio < 1.9 && !allowed) {
        problems.push(`soft image: ${name} ${round(rect.width)}px from ${img.naturalWidth}px (${ratio.toFixed(2)}x)`);
      }
      if (allowed && ratio < 1.35) {
        problems.push(`known-soft image is now too soft: ${name} (${ratio.toFixed(2)}x)`);
      }
    }
    if (rect.height > 620) {
      problems.push(`tall image: ${name} ${round(rect.height)}px`);
    }
    if (rect.width > window.innerWidth * 0.95 && window.innerWidth > 700) {
      problems.push(`image nearly full-bleed on a wide screen: ${name} ${round(rect.width)}px`);
    }
  }

  /* ---------------------------------------------------------------- */
  /* Measure: characters per line                                     */
  /* ---------------------------------------------------------------- */
  const probe = document.createElement('span');
  probe.style.visibility = 'hidden';
  probe.style.whiteSpace = 'pre';
  document.body.appendChild(probe);

  for (const el of document.querySelectorAll('main p, main li')) {
    const text = (el.textContent ?? '').trim();
    if (text.length < 60) continue;
    // Margin notes are narrow by design, and label rows are flex containers of
    // spans rather than running prose.
    if (el.closest('.col-margin, aside, nav, header, footer')) continue;
    // A list item that wraps a heading and a paragraph is a container, and its
    // concatenated text is not a line of prose.
    if (el.querySelector('p, h1, h2, h3, h4, ul, ol, dl')) continue;
    const style = getComputedStyle(el);
    if (style.display.includes('flex') || style.display.includes('grid')) continue;
    if (/mono/i.test(style.fontFamily) && text.length < 130) continue;
    const width = el.getBoundingClientRect().width;
    if (width < 40) continue;

    const cjk = /[\u4e00-\u9fff]/.test(text);
    probe.style.font = style.font;
    probe.textContent = cjk ? '汉字示例文本' : 'measuring the average character';
    const perChar = probe.getBoundingClientRect().width / probe.textContent.length;
    if (!perChar) continue;
    const chars = Math.round(width / perChar);
    // A line that does not wrap has no measure problem, however wide its box.
    if (text.length < chars * 1.15) continue;

    // Upper bound is about comfortable reading; the lower bound only matters
    // when there is room to spare, so it scales with the viewport.
    const max = cjk ? 42 : 82;
    const roomy = window.innerWidth > 700;
    const min = roomy ? (cjk ? 18 : 45) : 0;
    if (chars > max) problems.push(`measure too wide: ${chars} ${cjk ? 'CJK' : 'chars'} in ${Math.round(width)}px — "${text.slice(0, 26)}"`);
    if (min && chars < min) problems.push(`measure too narrow: ${chars} ${cjk ? 'CJK' : 'chars'} — "${text.slice(0, 26)}"`);
  }
  probe.remove();

  /* ---------------------------------------------------------------- */
  /* Vertical rhythm: gaps between consecutive sections               */
  /* ---------------------------------------------------------------- */
  const sections = [...document.querySelectorAll('main > section, main article > section')];
  for (let i = 1; i < sections.length; i += 1) {
    const prev = sections[i - 1].getBoundingClientRect();
    const next = sections[i].getBoundingClientRect();
    const gap = round(next.top - prev.bottom);
    if (gap > 190) problems.push(`gap of ${gap}px before section ${i}`);
  }

  /* ---------------------------------------------------------------- */
  /* Type scale: how many distinct sizes are in play                  */
  /* ---------------------------------------------------------------- */
  const sizes = new Set();
  for (const el of document.querySelectorAll('main p, main li, main h1, main h2, main h3, main dt, main dd, main figcaption, main span')) {
    const text = (el.textContent ?? '').trim();
    if (!text || el.children.length) continue;
    sizes.add(Math.round(parseFloat(getComputedStyle(el).fontSize) * 2) / 2);
  }
  if (sizes.size > 9) {
    problems.push(`type scale has ${sizes.size} sizes: ${[...sizes].sort((a, b) => a - b).join(', ')}`);
  }

  return problems;
};

/* ------------------------------------------------------------------ */
const server = await new Promise((resolve) => {
  const s = http.createServer((req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
    for (const file of [path.join(ROOT, url), path.join(ROOT, url, 'index.html')]) {
      if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        res.writeHead(200, { 'content-type': MIME[path.extname(file)] ?? 'application/octet-stream' });
        fs.createReadStream(file).pipe(res);
        return;
      }
    }
    res.writeHead(404).end('not found');
  });
  s.listen(PORT, () => resolve(s));
});

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--font-render-hinting=none'],
});

let total = 0;
for (const viewport of VIEWPORTS) {
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: viewport.width, height: 900, deviceScaleFactor: 1 });
    await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'networkidle0' });
    // Force lazy images in so their boxes can be measured.
    await page.evaluate(() => {
      for (const img of document.querySelectorAll('img')) img.loading = 'eager';
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise((r) => setTimeout(r, 900));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 250));

    const problems = await page.evaluate(AUDIT, Object.keys(SOFT_BY_NECESSITY));
    if (problems.length) {
      total += problems.length;
      console.log(`\n✗ ${viewport.name} ${route}`);
      for (const p of problems) console.log(`    ${p}`);
    }
    await page.close();
  }
}

await browser.close();
server.close();

console.log(
  total === 0
    ? `\nno layout problems across ${ROUTES.length} routes x ${VIEWPORTS.length} widths`
    : `\n${total} layout problem(s)`,
);
process.exit(total === 0 ? 0 : 1);
