#!/usr/bin/env node
/**
 * Render assets-src/terminal-session.html into the case-study figure.
 *
 * Kept as a script rather than a one-off so the plate can be regenerated when
 * the transcript changes, and so the transcript stays under version control
 * next to a note about where each line came from.
 */
import path from 'node:path';
import fs from 'node:fs';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const CHROME =
  process.env.CHROME_PATH ??
  `${process.env.HOME}/.cache/puppeteer/chrome/mac_arm-149.0.7827.22/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const SOURCE = path.join(process.cwd(), 'assets-src', 'terminal-session.html');
const OUT = path.join(process.cwd(), 'public', 'work', 'ielts-coach', 'terminal-session.webp');
const TEMP = '/tmp/terminal-session-raw.png';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--font-render-hinting=none'],
});

const page = await browser.newPage();
// deviceScaleFactor 2 against a 1100px frame gives a 2200px plate, which is
// twice the widest size the figure is ever displayed at.
await page.setViewport({ width: 1160, height: 900, deviceScaleFactor: 2 });
await page.goto(`file://${SOURCE}`, { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 700));

const frame = await page.$('.frame');
await frame.screenshot({ path: TEMP });
await browser.close();

await sharp(TEMP).webp({ quality: 88, effort: 6 }).toFile(OUT);
const meta = await sharp(OUT).metadata();
fs.unlinkSync(TEMP);

console.log(
  `${path.relative(process.cwd(), OUT)}  ${meta.width}x${meta.height}  ${Math.round(
    fs.statSync(OUT).size / 1024,
  )} kB`,
);
