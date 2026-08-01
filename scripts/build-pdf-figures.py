#!/usr/bin/env python3
"""
Render the two transcreation figures from their source PDFs.

Why this script exists rather than a one-line image export:

`sips --resampleWidth` upscales a 72 dpi raster of a PDF instead of
re-rendering the vector content, which is how the first version of these
figures shipped blurry. PyMuPDF rasterises at a real dpi, so text stays sharp.

Sharpness was only half the problem. Both documents are dense: the corpus sheet
sets its cells at 5.5 and 6.6 pt on an A4 landscape page, and the poster runs
from 3.1 pt upwards on a 315 pt wide page. Displayed whole at any width the
layout allows, that text is six to nine CSS pixels tall and unreadable no matter
how cleanly it is rendered. So each figure is cropped to the region that carries
the argument, and the full sheet is exported separately for the "full size" link
in the caption.

The source PDFs are not in this repository. Point the constants below at them.

    python3 scripts/build-pdf-figures.py
"""

from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF is required: python3 -m pip install pymupdf")

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "work" / "transcreation"

POSTER = Path(os.environ.get("POSTER_PDF", ROOT.parent / "poster.pdf"))
CORPUS = Path(
    os.environ.get(
        "CORPUS_PDF",
        Path.home()
        / "Library/CloudStorage/OneDrive-mail.gdufs.edu.cn/Papers/电影标题翻译研究/Dataset1_C-E.pdf",
    )
)

# Crop boxes in PDF points, measured from the text coordinates on each page.
#
# Corpus sheet: the header row plus six data rows, and the four columns the
# comparison actually needs (source title, genre, official English release
# title, then the two model outputs). The rationale column and the poster
# thumbnails are cut because they push the type below reading size.
# Header sits at y=48 and rows repeat every 48 pt, so y=370 closes the sixth
# row cleanly. x=578 is the column rule before the rationale column, which
# keeps the right edge from cutting a cell in half.
# Show the whole page. An excerpt read as a broken screenshot rather than as a
# deliberate detail, and completeness matters more here than on-page legibility,
# which the full-size link covers.
CORPUS_CROP = None

# Poster: the title block, the bilingual subtitle and the first labelled
# category in full. The title spans x=53 to x=209, so the crop has to reach
# past it. Section 二 is clipped at the right edge on purpose, which reads as a
# detail rather than a whole, and y=146 stops just above the next heading
# instead of slicing through it.
POSTER_CROP = None

# (source, crop, dpi, output stem, trim, target width in px)
#
# Target widths are set from how large the figure is actually displayed, times
# two for a high-density screen, and no more. Rendering at 400 dpi and then
# shipping 4400 px for an 800 px slot is how the poster ended up as a 1.3 MB
# page weight for no visible benefit.
JOBS = [
    # The on-page figures are trimmed to their content so the frame is not
    # mostly paper margin. The -full variants are the zoom targets behind the
    # "full sheet" link, rendered high enough that the 5.5 pt cells and the
    # 3.1 pt poster body are actually readable.
    (CORPUS, CORPUS_CROP, 400, "corpus-dataset", True, 1800),
    (CORPUS, None, 700, "corpus-dataset-full", False, 5200),
    (POSTER, POSTER_CROP, 500, "course-poster", True, 1200),
    (POSTER, None, 700, "course-poster-full", False, 3100),
]


def render(src: Path, crop, dpi: int, stem: str, trim: bool, width: int) -> None:
    if not src.exists():
        sys.exit(f"missing source PDF: {src}")

    doc = fitz.open(src)
    page = doc[0]
    pix = page.get_pixmap(dpi=dpi, clip=crop)
    raw = OUT / f"{stem}.raw.png"
    pix.save(raw)
    doc.close()

    target = OUT / f"{stem}.webp"
    # sharp is already a dependency of the site, so reuse it for the encode
    # rather than adding a Python imaging stack.
    quality = "86" if trim else "72"
    pipeline = ".trim({threshold:6})" if trim else ""
    pipeline += f".resize({{width:{width},withoutEnlargement:true}})"
    subprocess.run(
        [
            "node",
            "-e",
            (
                "const sharp=require('sharp');"
                f"sharp({raw.as_posix()!r})"
                f"{pipeline}"
                f".webp({{quality:{quality},effort:6}})"
                f".toFile({target.as_posix()!r})"
                ".then(i=>console.log(`  ${i.width}x${i.height}`));"
            ),
        ],
        cwd=ROOT,
        check=True,
    )
    raw.unlink()
    size_kb = round(target.stat().st_size / 1024)
    print(f"{target.relative_to(ROOT)}  {size_kb} kB")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for src, crop, dpi, stem, trim, width in JOBS:
        print(f"{stem}: {src.name} @ {dpi} dpi -> {width}px" + (f" clip {crop}" if crop else " full page"))
        render(src, crop, dpi, stem, trim, width)


if __name__ == "__main__":
    main()
