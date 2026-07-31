# romain.is-a.dev

Personal academic site of Zeming (Romain) Chen — case studies, CV, and notes,
in English and Chinese. Static Next.js build deployed to GitHub Pages.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run build` | Static export into `out/` |
| `npm test` | Content integrity and bilingual parity tests |
| `npm run lint` | ESLint |
| `npm run qa` | Build, then audit every page: contrast, headings, alt text, overflow, console errors. Screenshots land in `.qa/` |
| `npm run review` | Build, then capture small screenshots of key views into `.review/` for eyeballing |
| `npm run cv` | Regenerate `public/cv-zeming-chen.pdf` and `CV.md` from `content/cv.ts` |
| `npm run assets` | Re-encode images in `assets-src/` and `public/work/`, regenerate the OG card and icons |
| `npm run check` | lint + test + build + qa |

## How content works

There is no CMS and no MDX for the case studies. Everything is typed data in
`content/`, authored bilingually side by side:

```
content/
├── types.ts              Section union type — the vocabulary a case study can use
├── site.ts               Identity, links, UI strings
├── about.ts              /about prose
├── cv.ts                 Single source for /cv, the PDF, and CV.md
├── projects.ts           Ordering and lookup
├── projects/
│   ├── papercraft.ts
│   ├── transcreation.ts
│   └── ielts-coach.ts
└── notes/
    └── <slug>.<en|zh>.md Markdown notes, one file per language
```

Every string is a `{ en, zh }` pair. `npm test` walks the whole content tree and
fails if either language is missing or if a paragraph array has a different
length in the two languages — which is how bilingual sites usually rot.

A case study is a list of sections. Adding one means picking a `kind` from
`content/types.ts`: `lede`, `prose`, `figure`, `metrics`, `pipeline`, `schemas`,
`evidence`, `table`, `quote`, `refs`. `SectionRenderer` decides how each is laid
out, so content files stay free of markup.

### Evidence labels

`kind: 'evidence'` sections state how much empirical backing each claim has:

| State | Meaning |
|---|---|
| `shipped` | Built, deployed, in real use |
| `instrumented` | Built and instrumented, no data collected yet |
| `designed` | Protocol and instruments written, study not run |
| `planned` | Specified, not built |

`tests/content.test.ts` pins the current state of several claims. If an edit
upgrades one — say, marking the teacher study as run — the test fails. That is
deliberate: overclaiming should require a conscious decision, not a typo.

### Adding a note

Create `content/notes/my-slug.en.md` and `content/notes/my-slug.zh.md` with
front matter:

```yaml
---
title: 'Title'
date: '2026-08-01'
summary: 'One or two sentences.'
---
```

The Notes link appears in the navigation only when at least one note exists.
Note that a static export cannot prerender `notes/[slug]` with zero notes, so if
you delete every note you must also delete `app/[locale]/notes/`. `npm test`
says so explicitly if it happens.

## Design notes

- Type: Newsreader for display and body, Instrument Sans for interface, IBM Plex
  Mono for data and labels. Body copy is set in the serif because the site is for
  reading.
- Colour: warm paper and ink, one earth-red signal colour, one slate blue held in
  reserve for diagrams. Semantic values live in `:root` / `.dark` in
  `app/globals.css` and are mapped into Tailwind through `@theme inline`.
- Layout: a 12-column field. Body text occupies columns 4–11; columns 1–3 are a
  real margin for years, notes and contents, the way a monograph is set.
- Motion: a 10px fade-up on first view, and nothing else. `prefers-reduced-motion`
  removes it; a `<noscript>` rule makes everything visible if JavaScript never
  runs.
- Dark mode follows the OS until the visitor overrides it, and the toggle cycles
  back to auto so they are never stranded.
- The `/cv` page is the source of the PDF. Print styles in `app/globals.css`
  collapse the screen scale to two A4 pages; there is no second document.

## Deployment

`.github/workflows/deploy.yml` runs lint, tests and the build on every pull
request, and deploys `out/` to GitHub Pages on push to `main`. It also asserts
that the export contains the pages it should, including `CNAME` and `.nojekyll`,
so a silent routing regression cannot ship.

The custom domain lives in `public/CNAME`.

## Privacy

No analytics, no cookies, no third-party requests. Fonts are self-hosted at build
time by `next/font`. To turn on Plausible later, set
`SITE.analytics.plausibleDomain` in `content/site.ts`; while it is empty no script
is emitted.
