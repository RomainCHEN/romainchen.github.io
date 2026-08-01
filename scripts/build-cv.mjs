#!/usr/bin/env node
/**
 * Produce the CV in two formats from the single source in content/cv.ts:
 *
 *   public/cv-zeming-chen.pdf   printed from the built /en/cv/ page
 *   CV.md                      plain Markdown, for pasting into forms
 *
 * Run after `npm run build`:  node scripts/build-cv.mjs
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { writeFile } from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const CHROME =
  process.env.CHROME_PATH ??
  `${process.env.HOME}/.cache/puppeteer/chrome/mac_arm-149.0.7827.22/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const ROOT = path.join(process.cwd(), 'out');
const PORT = 4323;

if (!fs.existsSync(ROOT)) {
  console.error('out/ not found, run `npm run build` first.');
  process.exit(1);
}

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

/* ------------------------------------------------------------------------- */
/* PDF                                                                       */
/* ------------------------------------------------------------------------- */
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox'],
});

const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
await page.goto(`http://127.0.0.1:${PORT}/en/cv/`, { waitUntil: 'networkidle0' });
await page.emulateMediaType('print');

const target = path.join(process.cwd(), 'public', 'cv-zeming-chen.pdf');
await page.pdf({
  path: target,
  format: 'a4',
  printBackground: false,
  margin: { top: '18mm', bottom: '16mm', left: '18mm', right: '18mm' },
  displayHeaderFooter: true,
  headerTemplate: '<div></div>',
  footerTemplate:
    '<div style="width:100%;font-family:Helvetica,Arial,sans-serif;font-size:7pt;color:#777;padding:0 18mm;display:flex;justify-content:space-between;"><span>Zeming (Romain) Chen · romain.is-a.dev</span><span class="pageNumber"></span></div>',
});

const { size } = fs.statSync(target);
console.log(`public/cv-zeming-chen.pdf  ${Math.round(size / 1024)} kB`);

await browser.close();
server.close();

/* ------------------------------------------------------------------------- */
/* Markdown                                                                  */
/* ------------------------------------------------------------------------- */
// Imported after the browser work so a Chrome failure does not block this.
const { CV_SECTIONS, CV_UPDATED, SKILLS } = await import('../content/cv.ts');
const { SITE, ROLE_LINE, SOCIAL, RESEARCH_INTERESTS } = await import('../content/site.ts');

const lines = [];
lines.push(`# ${SITE.name} (${SITE.nameZh})`, '');
lines.push(ROLE_LINE.en, '');
lines.push(
  [
    SITE.email,
    SITE.url.replace('https://', ''),
    ...SOCIAL.map((s) => `${s.label}: ${s.href.replace('https://', '')}`),
  ].join(' · '),
  '',
);
lines.push(`**Research interests**, ${RESEARCH_INTERESTS.map((i) => i.en).join(' · ')}`, '');

for (const section of CV_SECTIONS) {
  lines.push(`## ${section.heading.en}`, '');
  for (const entry of section.entries) {
    lines.push(`### ${entry.title.en}`);
    const meta = [entry.org?.en, entry.place?.en, entry.when.en].filter(Boolean).join(' · ');
    if (meta) lines.push(`*${meta}*`);
    lines.push('');
    for (const point of entry.points.en) lines.push(`- ${point}`);
    if (entry.points.en.length) lines.push('');
  }
}

lines.push(`## ${SKILLS.heading.en}`, '');
for (const group of SKILLS.groups) {
  lines.push(`**${group.label.en}**, ${group.items.en.join(' · ')}`, '');
}

lines.push('---', '', `*Last updated ${CV_UPDATED}.*`, '');

await writeFile(path.join(process.cwd(), 'CV.md'), lines.join('\n'), 'utf8');
console.log('CV.md');
