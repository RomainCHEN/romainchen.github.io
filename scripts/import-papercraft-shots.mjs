#!/usr/bin/env node
/**
 * Encode the final PaperCraft screenshots for the case study.
 *
 *   node scripts/import-papercraft-shots.mjs <dir-with-research-pngs>
 *
 * The sources are the 2880×1800 captures published on the PaperCraft research
 * page (fyp.z-chen.dev/research), taken on 23 October 2026 from the final
 * build. They are kept at their full width, not run through the 1600px cap in
 * build-assets.mjs, because lib/figure.ts displays a figure at up to half its
 * pixel width and these need the resolution to stay sharp.
 *
 * Each entry may crop away empty margin so the interface fills the frame.
 */
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const src = process.argv[2];
if (!src) throw new Error('usage: node scripts/import-papercraft-shots.mjs <dir>');
const OUT = path.join(process.cwd(), 'public', 'work', 'papercraft');

/** name → source file, an optional crop in source pixels, and an optional width cap. */
const SHOTS = [
  { out: 'workspace-generate', from: 'workspace-generate-2026-10-23.png' },
  { out: 'workspace-review', from: 'workspace-review-2026-10-23.png' },
  { out: 'workspace-learned', from: 'workspace-learned-2026-10-23.png' },
  { out: 'workspace-item-analysis', from: 'workspace-item-analysis-2026-10-23.png' },
  { out: 'paper-picture-story', from: 'paper-ket-picture-story.png' },
  { out: 'slides-reveal', from: 'slides-reveal.png' },
];

await mkdir(OUT, { recursive: true });
for (const shot of SHOTS) {
  let img = sharp(path.join(src, shot.from));
  if (shot.crop) img = img.extract(shot.crop);
  if (shot.width) img = img.resize({ width: shot.width, withoutEnlargement: true });
  const file = path.join(OUT, `${shot.out}.webp`);
  const info = await img.webp({ quality: 84, effort: 6 }).toFile(file);
  const { size } = await stat(file);
  console.log(`${shot.out}.webp`.padEnd(32), `${info.width}×${info.height}`.padEnd(12), `${Math.round(size / 1024)} kB`);
}
