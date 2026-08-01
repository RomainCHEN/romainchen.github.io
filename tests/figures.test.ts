import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { PROJECTS } from '@/content/projects';
import { figureBox } from '@/lib/figure';

const PUBLIC = path.join(process.cwd(), 'public');

/** Minimal WebP/PNG/JPEG header reader, so the test needs no image library. */
function dimensions(file: string): { w: number; h: number } | null {
  const buf = fs.readFileSync(file);

  // WebP: RIFF container, VP8/VP8L/VP8X chunks.
  if (buf.subarray(0, 4).toString('ascii') === 'RIFF' && buf.subarray(8, 12).toString('ascii') === 'WEBP') {
    const chunk = buf.subarray(12, 16).toString('ascii');
    if (chunk === 'VP8X') {
      return { w: (buf.readUIntLE(24, 3) & 0xffffff) + 1, h: (buf.readUIntLE(27, 3) & 0xffffff) + 1 };
    }
    if (chunk === 'VP8 ') {
      return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === 'VP8L') {
      const bits = buf.readUInt32LE(21);
      return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
    }
    return null;
  }

  // PNG
  if (buf.subarray(1, 4).toString('ascii') === 'PNG') {
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  }

  return null;
}

interface Entry {
  label: string;
  src: string;
  w?: number;
  h?: number;
  full?: string;
}

const ENTRIES: Entry[] = PROJECTS.flatMap((project) => [
  ...(project.hero
    ? [
        {
          label: `${project.slug} hero`,
          src: project.hero.src,
          w: project.hero.w,
          h: project.hero.h,
          full: project.hero.full,
        },
      ]
    : []),
  ...project.sections.flatMap((section, i) =>
    section.kind === 'figure'
      ? [
          {
            label: `${project.slug} figure ${i}`,
            src: section.src,
            w: section.w,
            h: section.h,
            full: section.full,
          },
        ]
      : [],
  ),
]);

describe('figures', () => {
  it('are all declared', () => {
    expect(ENTRIES.length).toBeGreaterThan(5);
  });

  /**
   * Stale dimensions are silent: the layout keeps working, it just sizes the
   * figure from numbers that no longer describe the file, which is how the
   * poster ended up displayed at 798px from a 1200px source. Assert instead.
   */
  it('declare the dimensions the files actually have', () => {
    const wrong: string[] = [];
    for (const entry of ENTRIES) {
      const file = path.join(PUBLIC, entry.src);
      expect(fs.existsSync(file), `${entry.label}: missing ${entry.src}`).toBe(true);
      const real = dimensions(file);
      expect(real, `${entry.label}: could not read ${entry.src}`).not.toBeNull();
      if (!real) continue;
      expect(entry.w, `${entry.label}: no w declared`).toBeDefined();
      expect(entry.h, `${entry.label}: no h declared`).toBeDefined();
      if (entry.w !== real.w || entry.h !== real.h) {
        wrong.push(`${entry.label}: declared ${entry.w}x${entry.h}, file is ${real.w}x${real.h}`);
      }
    }
    expect(wrong).toEqual([]);
  });

  it('never display wider than half their pixel width', () => {
    const soft = ENTRIES.filter((e) => e.w && figureBox(e.w, e.h).width > e.w / 2).map(
      (e) => `${e.label}: ${figureBox(e.w, e.h).width}px from a ${e.w}px file`,
    );
    expect(soft).toEqual([]);
  });

  it('keep every figure inside the height budget', () => {
    const tall = ENTRIES.filter((e) => {
      if (!e.w || !e.h) return false;
      const box = figureBox(e.w, e.h);
      return (box.width * e.h) / e.w > 580;
    }).map((e) => {
      const box = figureBox(e.w, e.h);
      return `${e.label}: ${Math.round((box.width * e.h!) / e.w!)}px tall`;
    });
    expect(tall).toEqual([]);
  });

  it('point full-size links at files that exist', () => {
    const missing = ENTRIES.filter((e) => e.full && !fs.existsSync(path.join(PUBLIC, e.full))).map(
      (e) => `${e.label}: ${e.full}`,
    );
    expect(missing).toEqual([]);
  });

  /** A frame that is mostly blank paper reads as a mistake. */
  it('are trimmed to their content', () => {
    // Checked by scripts/build-pdf-figures.py and the assets script at build
    // time; here we only assert nothing absurdly tall slipped through.
    const odd = ENTRIES.filter((e) => e.w && e.h && e.h / e.w > 2.2).map(
      (e) => `${e.label}: aspect ${(e.h! / e.w!).toFixed(2)}`,
    );
    expect(odd).toEqual([]);
  });
});
