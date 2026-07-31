#!/usr/bin/env node
/**
 * Build the static image assets and commit the results.
 *
 * Deliberately a one-off script rather than part of `next build`: GitHub Pages
 * builds should not depend on native image tooling, and these inputs change
 * about twice a year. Run `npm run assets` after replacing anything in
 * assets-src/ or public/work/.
 */
import { readdir, writeFile, unlink, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');

const INK = '#1b1a17';
const PAPER = '#fbfaf7';
const ACCENT = '#a6412b';
const MUTED = '#78746a';
const RULE = '#e3dfd6';

function kb(bytes) {
  return `${Math.round(bytes / 1024)} kB`;
}

/* ------------------------------------------------------------------------- */
/* Portrait                                                                   */
/* ------------------------------------------------------------------------- */
async function portrait() {
  const src = path.join(ROOT, 'assets-src', 'portrait-source.jpg');
  const out = path.join(PUBLIC, 'portrait.jpg');

  // The source is 2400×3600 and 5.4 MB. Displayed at 240 px wide, so 800 px
  // covers a 3× display with room to spare.
  await sharp(src)
    .resize({ width: 800, height: 1000, fit: 'cover', position: 'top' })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(out);

  const { size } = await stat(out);
  console.log(`portrait.jpg          ${kb(size)}`);
}

/* ------------------------------------------------------------------------- */
/* Screenshots → WebP                                                         */
/* ------------------------------------------------------------------------- */
async function screenshots() {
  const dirs = [
    path.join(PUBLIC, 'work', 'papercraft'),
    path.join(PUBLIC, 'work', 'ielts-coach'),
  ];

  for (const dir of dirs) {
    const files = await readdir(dir);
    for (const file of files) {
      if (!file.endsWith('.png')) continue;
      const input = path.join(dir, file);
      const output = input.replace(/\.png$/, '.webp');

      await sharp(input)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(output);

      const before = (await stat(input)).size;
      const after = (await stat(output)).size;
      await unlink(input);
      console.log(
        `${path.relative(PUBLIC, output).padEnd(38)}${kb(before)} → ${kb(after)}`,
      );
    }
  }
}

/* ------------------------------------------------------------------------- */
/* Open Graph card                                                            */
/* ------------------------------------------------------------------------- */
function ogSvg() {
  const serif = 'Newsreader, Iowan Old Style, Palatino, Georgia, serif';
  const sans = 'Instrument Sans, Helvetica Neue, Helvetica, Arial, sans-serif';
  const mono = 'IBM Plex Mono, SFMono-Regular, Menlo, monospace';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="56" y="56" width="1088" height="518" fill="none" stroke="${RULE}" stroke-width="2"/>
  <rect x="96" y="120" width="72" height="4" fill="${ACCENT}"/>
  <text x="96" y="108" font-family="${mono}" font-size="20" letter-spacing="3" fill="${MUTED}">ZEMING (ROMAIN) CHEN · 陈泽铭</text>
  <text x="96" y="216" font-family="${serif}" font-size="62" fill="${INK}">Translation × Computer Science.</text>
  <text x="96" y="292" font-family="${serif}" font-size="62" fill="${INK}">I design learning tools and</text>
  <text x="96" y="368" font-family="${serif}" font-size="62" fill="${INK}">instrument them as research objects.</text>
  <rect x="96" y="430" width="1008" height="1" fill="${RULE}"/>
  <text x="96" y="480" font-family="${sans}" font-size="24" fill="${MUTED}">Learning engineering · Human–AI interaction · Language assessment</text>
  <text x="96" y="522" font-family="${mono}" font-size="22" letter-spacing="2" fill="${INK}">romain.is-a.dev</text>
</svg>`;
}

async function openGraph() {
  const out = path.join(PUBLIC, 'og.png');
  await sharp(Buffer.from(ogSvg())).png({ compressionLevel: 9 }).toFile(out);
  const { size } = await stat(out);
  console.log(`og.png                ${kb(size)}`);
}

/* ------------------------------------------------------------------------- */
/* Icons                                                                      */
/* ------------------------------------------------------------------------- */
/**
 * The mark is a Z drawn as a filled polygon plus the four-tick meter that runs
 * through the site as a motif. Drawn as paths rather than text so it renders
 * identically wherever the script runs, with no font dependency.
 */
function iconSvg(bg = PAPER) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="${bg}"/>
  <path d="M138 132 H374 V186 L226 330 H374 V384 H138 V330 L286 186 H138 Z" fill="${INK}"/>
  <g fill="${ACCENT}">
    <rect x="138" y="410" width="44" height="10"/>
    <rect x="196" y="410" width="44" height="10"/>
    <rect x="254" y="410" width="44" height="10"/>
  </g>
  <rect x="312" y="410" width="44" height="10" fill="${RULE}"/>
</svg>`;
}

async function icons() {
  const svg = iconSvg();
  await writeFile(path.join(PUBLIC, 'icon.svg'), svg, 'utf8');

  await sharp(Buffer.from(svg)).resize(180, 180).png().toFile(path.join(PUBLIC, 'apple-touch-icon.png'));
  await sharp(Buffer.from(svg)).resize(32, 32).png().toFile(path.join(PUBLIC, 'icon-32.png'));
  await sharp(Buffer.from(svg)).resize(192, 192).png().toFile(path.join(PUBLIC, 'icon-192.png'));

  console.log('icon.svg, apple-touch-icon.png, icon-32.png, icon-192.png');
}

/* ------------------------------------------------------------------------- */
await portrait();
await screenshots();
await openGraph();
await icons();
console.log('\nassets built');
