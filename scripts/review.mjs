#!/usr/bin/env node
/**
 * Capture small viewport-sized screenshots of specific views for eyeballing.
 * Separate from qa.mjs, which audits; this one just looks.
 *
 *   node scripts/review.mjs
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
const OUT = path.join(process.cwd(), '.review');
const PORT = 4322;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.pdf': 'application/pdf',
};

const server = await new Promise((resolve) => {
  const s = http.createServer((req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
    for (const file of [path.join(ROOT, url), path.join(ROOT, url, 'index.html')]) {
      if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        res.writeHead(200, {
          'content-type': MIME[path.extname(file)] ?? 'application/octet-stream',
        });
        fs.createReadStream(file).pipe(res);
        return;
      }
    }
    res.writeHead(404).end('nope');
  });
  s.listen(PORT, () => resolve(s));
});

/** [label, route, selector to scroll to (or null for top), theme, width] */
const SHOTS = [
  ['home', '/en/', null, 'light', 1280],
  ['home-dark', '/en/', null, 'dark', 1280],
  ['home-phone', '/en/', null, 'light', 390],
  ['pipeline', '/en/work/papercraft/', '[role="tablist"]', 'light', 1280],
  ['evidence', '/en/work/papercraft/', 'h2#where-this-actually-stands', 'light', 1280],
  ['schemas', '/en/work/transcreation/', '[role="tablist"]', 'light', 1280],
  ['schemas-phone', '/en/work/transcreation/', '[role="tablist"]', 'light', 390],
  ['case-head', '/en/work/papercraft/', null, 'light', 1280],
  ['cv', '/en/cv/', null, 'light', 1280],
  ['about', '/en/about/', null, 'light', 1280],
  ['zh-home', '/zh/', null, 'light', 1280],
  ['zh-case', '/zh/work/papercraft/', 'h2', 'light', 1280],
  ['note', '/en/notes/two-hours/', null, 'light', 1280],
];

await mkdir(OUT, { recursive: true });
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--font-render-hinting=none'],
});

for (const [label, route, selector, theme, width] of SHOTS) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: width < 500 ? 760 : 860, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }]);
  await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'networkidle0' });

  if (selector) {
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: 'instant' });
      }
    }, selector);
  }
  await new Promise((r) => setTimeout(r, 700));

  await page.screenshot({ path: path.join(OUT, `${label}.png`) });
  console.log(`${label}.png`);
  await page.close();
}

await browser.close();
server.close();
console.log(`\n${SHOTS.length} shots in ${path.relative(process.cwd(), OUT)}/`);
