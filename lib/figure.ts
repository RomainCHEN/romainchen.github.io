/**
 * Figure sizing, in one place.
 *
 * The first version of this site sized every figure by hand, which produced two
 * visible problems. Some figures sat in the full canvas and some in the body
 * column, so they had two different left edges and looked randomly offset. And
 * the widths were five ad hoc numbers, so one screenshot filled half the screen
 * while the next was a postage stamp.
 *
 * Now there is one rule, applied to every figure and every hero:
 *
 *   1. Everything shares the body column's left edge. One left margin on the
 *      page, for prose and pictures alike.
 *   2. Width never exceeds half the file's pixel width, so nothing is soft on a
 *      high-density screen.
 *   3. Height never exceeds MAX_HEIGHT, so a portrait scan cannot take over the
 *      viewport. For a tall image this is what decides the width.
 *   4. Whatever is left is capped by the column itself, in CSS, so it stays
 *      responsive.
 *
 * The consequence worth naming: a figure is only as large as its source and its
 * shape allow. A 760px screenshot displays at 380px and that is correct, not a
 * mistake to be corrected by stretching it.
 */

/** Tallest a figure may be, in CSS pixels. Roughly two thirds of a laptop viewport. */
const MAX_HEIGHT = 560;

/** Widest a figure may be, in CSS pixels, before the column takes over. */
const MAX_WIDTH = 880;

export interface FigureBox {
  /** Cap for the container's max-width, in CSS pixels. */
  width: number;
  /** For the sizes attribute. */
  sizes: string;
}

export function figureBox(w?: number, h?: number): FigureBox {
  // Without intrinsic dimensions, fall back to the column and let CSS decide.
  if (!w || !h) {
    return { width: MAX_WIDTH, sizes: `(min-width: ${MAX_WIDTH}px) ${MAX_WIDTH}px, 100vw` };
  }

  const sharpnessCap = Math.floor(w / 2);
  const heightCap = Math.round((MAX_HEIGHT * w) / h);
  const width = Math.min(MAX_WIDTH, sharpnessCap, heightCap);

  return { width, sizes: `(min-width: ${width}px) ${width}px, 100vw` };
}
