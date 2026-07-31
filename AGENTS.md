# AGENTS.md

Personal academic site — static Next.js export to GitHub Pages (romain.is-a.dev).

## Commands

```bash
npm test          # content integrity + bilingual parity (vitest)
npm run lint      # eslint
npm run build     # static export to out/
npm run qa        # build, then per-page contrast / heading / alt / overflow audit
npm run check     # all of the above
npm run cv        # regenerate the CV PDF and CV.md from content/cv.ts
npm run assets    # re-encode images, OG card, icons
```

Run `npm run check` before proposing any change. `npm run qa` needs a local
Chrome; set `CHROME_PATH` if the default path in the script is wrong.

## Content rules

- All prose is bilingual `{ en, zh }`. Never add one language only — the tests
  fail, and that is intentional.
- Case-study content is typed data in `content/`, not markup. Pick a section
  `kind` from `content/types.ts`.
- **Never upgrade an evidence label without being asked.** `shipped`,
  `instrumented`, `designed` and `planned` mean specific things (see README), and
  `tests/content.test.ts` pins several of them. If a study has not been run, the
  site says so.
- Never state a study result — a SUS score, a sample size, a time saving —
  unless the owner has supplied the number. A test greps for this pattern.
- Never write first-person prose that will publish under the owner's name
  without asking. Draft it somewhere else and let him decide.
