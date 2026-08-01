#!/usr/bin/env node
/**
 * Visual and accessibility smoke check against the built static export.
 *
 * Serves out/ on a local port, walks every page in both languages at desktop
 * and phone widths, captures screenshots, and reports:
 *   - console errors and failed requests
 *   - images missing alt text
 *   - headings that skip a level
 *   - text/background contrast below WCAG AA for normal text
 *   - horizontal overflow (the usual cause of mobile scroll bugs)
 *
 * Not a substitute for looking at it, but it catches the things eyes miss.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { mkdir } from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const CHROME =
  process.env.CHROME_PATH ??
  `${process.env.HOME}/.cache/puppeteer/chrome/mac_arm-149.0.7827.22/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const ROOT = path.join(process.cwd(), 'out');
const SHOTS = path.join(process.cwd(), '.qa');
const PORT = 4321;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
      const candidates = [
        path.join(ROOT, url),
        path.join(ROOT, url, 'index.html'),
        path.join(ROOT, `${url.replace(/\/$/, '')}.html`),
      ];
      for (const file of candidates) {
        if (fs.existsSync(file) && fs.statSync(file).isFile()) {
          res.writeHead(200, { 'content-type': MIME[path.extname(file)] ?? 'application/octet-stream' });
          fs.createReadStream(file).pipe(res);
          return;
        }
      }
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end('not found');
    });
    server.listen(PORT, () => resolve(server));
  });
}

/* --------------------------------------------------------------------------
   In-page audits
   -------------------------------------------------------------------------- */
const AUDIT = () => {
  const problems = [];

  // Title and description. A duplicated site name means a page set a plain
  // title string where the root layout's template also appends it.
  const title = document.title;
  if (!title || title.length < 8) problems.push(`title too short: "${title}"`);
  const owner = 'Zeming (Romain) Chen';
  if (title.split(owner).length - 1 > 1) problems.push(`site name repeated in title: "${title}"`);
  const description = document
    .querySelector('meta[name="description"]')
    ?.getAttribute('content');
  // CJK says the same thing in far fewer characters, so the floor differs.
  const cjk = /[\u4e00-\u9fff]/.test(description ?? '');
  const floorLength = cjk ? 24 : 40;
  if (!description || description.length < floorLength) {
    problems.push(
      `missing or thin meta description (${description?.length ?? 0} < ${floorLength}): "${description ?? ''}"`,
    );
  }

  // Alt text
  document.querySelectorAll('img').forEach((img) => {
    if (!img.hasAttribute('alt')) problems.push(`img without alt: ${img.currentSrc || img.src}`);
  });

  // Heading order
  const levels = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) =>
    Number(h.tagName[1]),
  );
  const h1s = levels.filter((l) => l === 1).length;
  if (h1s !== 1) problems.push(`expected exactly one h1, found ${h1s}`);
  for (let i = 1; i < levels.length; i += 1) {
    if (levels[i] - levels[i - 1] > 1) {
      problems.push(`heading jumps h${levels[i - 1]} → h${levels[i]}`);
    }
  }

  // Contrast
  const parse = (value) => {
    const m = value.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const parts = m[1].split(',').map((n) => parseFloat(n));
    return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
  };
  const lum = ({ r, g, b }) => {
    const f = (c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const bgOf = (node) => {
    let el = node;
    while (el) {
      const bg = parse(getComputedStyle(el).backgroundColor);
      if (bg && bg.a > 0.5) return bg;
      el = el.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  };

  const seen = new Set();
  document.querySelectorAll('p,li,h1,h2,h3,h4,a,span,dt,dd,figcaption,cite,button').forEach((el) => {
    const text = el.textContent?.trim();
    if (!text || text.length < 3) return;
    if (el.querySelector('p,li,h1,h2,h3,h4,span,dt,dd')) return;
    const style = getComputedStyle(el);
    if (style.visibility === 'hidden' || style.display === 'none') return;
    const fg = parse(style.color);
    if (!fg) return;
    const bg = bgOf(el);
    const l1 = lum(fg);
    const l2 = lum(bg);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    const size = parseFloat(style.fontSize);
    const bold = Number(style.fontWeight) >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const floor = large ? 3 : 4.5;
    if (ratio < floor) {
      const key = `${style.color}|${size}`;
      if (seen.has(key)) return;
      seen.add(key);
      problems.push(
        `contrast ${ratio.toFixed(2)}:1 (need ${floor}), ${style.color} at ${size}px, "${text.slice(0, 42)}"`,
      );
    }
  });

  // Horizontal overflow, with the widest offending element named.
  const doc = document.documentElement;
  if (doc.scrollWidth > doc.clientWidth + 1) {
    const limit = doc.clientWidth;
    const culprits = [];
    document.querySelectorAll('*').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > limit + 1 || rect.right > limit + 1) {
        const style = getComputedStyle(el);
        if (style.position === 'fixed') return;
        culprits.push(
          `${el.tagName.toLowerCase()}${el.className ? `.${String(el.className).split(' ').slice(0, 3).join('.')}` : ''} w=${Math.round(rect.width)} right=${Math.round(rect.right)} overflow-x=${style.overflowX}`,
        );
      }
    });
    problems.push(
      `horizontal overflow: ${doc.scrollWidth} > ${doc.clientWidth}${
        culprits.length ? `, widest: ${culprits.slice(0, 4).join(' | ')}` : ''
      }`,
    );
  }

  return problems;
};

/* --------------------------------------------------------------------------
   Run
   -------------------------------------------------------------------------- */
const PAGES = [];
for (const locale of ['en', 'zh']) {
  PAGES.push(
    `/${locale}/`,
    `/${locale}/work/`,
    `/${locale}/work/papercraft/`,
    `/${locale}/work/transcreation/`,
    `/${locale}/work/ielts-coach/`,
    `/${locale}/about/`,
    `/${locale}/cv/`,
    `/${locale}/notes/`,
    `/${locale}/notes/two-hours/`,
  );
}

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 1000, dpr: 2 },
  { name: 'phone', width: 390, height: 844, dpr: 2 },
];

const server = await serve();
await mkdir(SHOTS, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--font-render-hinting=none'],
});

let failures = 0;

for (const theme of ['light', 'dark']) {
  for (const viewport of VIEWPORTS) {
    // Screenshot every page on desktop light; elsewhere sample the key pages.
    const shotList =
      theme === 'light' && viewport.name === 'desktop'
        ? PAGES
        : PAGES.filter((p) => /\/(en|zh)\/$|papercraft|transcreation|about|cv/.test(p));

    for (const route of shotList) {
      const page = await browser.newPage();
      await page.setViewport({
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: viewport.dpr,
      });
      await page.emulateMediaFeatures([
        { name: 'prefers-color-scheme', value: theme },
        { name: 'prefers-reduced-motion', value: 'no-preference' },
      ]);

      const errors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(`console: ${msg.text()}`);
      });
      page.on('requestfailed', (req) => {
        // Next aborts route prefetches when they are no longer needed; that is
        // not a broken link.
        const reason = req.failure()?.errorText ?? '';
        if (reason.includes('ERR_ABORTED')) return;
        errors.push(`request failed (${reason}): ${req.url()}`);
      });
      page.on('pageerror', (err) => errors.push(`page error: ${err.message}`));

      await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'networkidle0' });
      // Let the reveal observers settle so screenshots are not mid-fade.
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise((r) => setTimeout(r, 350));
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise((r) => setTimeout(r, 250));

      const problems = await page.evaluate(AUDIT);
      const all = [...errors, ...problems];

      const label = `${theme}-${viewport.name}-${route.replace(/\//g, '_')}`;
      await page.screenshot({
        path: path.join(SHOTS, `${label}.png`),
        fullPage: theme === 'light' && viewport.name === 'desktop',
      });

      if (all.length) {
        failures += all.length;
        console.log(`\n✗ ${theme}/${viewport.name} ${route}`);
        for (const problem of all) console.log(`    ${problem}`);
      } else {
        console.log(`✓ ${theme}/${viewport.name} ${route}`);
      }

      await page.close();
    }
  }
}

await browser.close();
server.close();

console.log(`\n${failures === 0 ? 'no problems found' : `${failures} problem(s) found`}`);
console.log(`screenshots in ${path.relative(process.cwd(), SHOTS)}/`);
process.exit(failures === 0 ? 0 : 1);
