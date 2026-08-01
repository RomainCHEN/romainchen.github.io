# AGENTS.md

Personal academic site, static Next.js export to GitHub Pages (romain.is-a.dev).

## Commands

```bash
npm test          # content integrity + bilingual parity (vitest)
npm run lint      # eslint
npm run build     # static export to out/
npm run qa        # build, then per-page contrast / heading / alt / overflow audit
npm run layout    # build, then per-page alignment / measure / figure proportion audit
npm run zh        # Chinese style audit: filler, template sentences, long sentences, punctuation
npm run check     # all of the above
npm run cv        # regenerate the CV PDF and CV.md from content/cv.ts
npm run assets    # re-encode images, OG card, icons
```

Run `npm run check` before proposing any change. `npm run qa` needs a local
Chrome; set `CHROME_PATH` if the default path in the script is wrong.

## Layout rules

- Figure sizing lives in `lib/figure.ts`. Do not hand-set widths on figures; if
  one looks wrong, the rule or the source image is wrong.
- Declared `w`/`h` on a figure must match the file on disk. `npm test` asserts it.
- Cap line length with `.measure`, never with a pixel width.

## Content rules

- All prose is bilingual `{ en, zh }`. Never add one language only, the tests
  fail, and that is intentional.
- Case-study content is typed data in `content/`, not markup. Pick a section
  `kind` from `content/types.ts`.
- **Never upgrade an evidence label without being asked.** `shipped`,
  `instrumented`, `designed` and `planned` mean specific things (see README), and
  `tests/content.test.ts` pins several of them. If a study has not been run, the
  site says so.
- Never state a study result, a SUS score, a sample size, a time saving , 
  unless the owner has supplied the number. A test greps for this pattern.
- Never write first-person prose that will publish under the owner's name
  without asking. Draft it somewhere else and let him decide.

## Chinese style

`npm run zh` enforces what can be checked mechanically. It follows two published
guides: `chinese-writing` (simple, human, clear) and `humanizer-zh` (the
Wikipedia list of AI writing tells). The rules that matter most here:

- No em dash, and no 破折号.
- Do not open a paragraph with `**a bold label.**`. Several in a row is the most
  recognisable AI structure there is. Absorb the label into the sentence.
- Break sentences over 60 characters.
- Space between Chinese and Latin or digits. Full-width punctuation in Chinese.
- Avoid the 不是……而是…… template, filler openers, and 标志着 / 至关重要 /
  彰显 / 奠定基础.
- Watch for calques. 「教学法就住在那里」and「一件仪器」read as translations
  because they are; Chinese says it differently.
