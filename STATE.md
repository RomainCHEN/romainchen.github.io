# Loop State — romain.is-a.dev

Last run: 2026-08-01 (site rebuild, human-directed)

## High Priority (loop is acting or waiting on human)

- **Waiting on human: review and merge `redesign` → `main`.** Draft PR opened.
  Full rebuild of the site: three case studies, bilingual EN/ZH, academic CV,
  notes section. Nothing deploys until the PR is merged.
- **Waiting on human: confirm role attribution on the transcreation paper.**
  The site currently states "Co-author, three-person faculty-advised team —
  cognitive-linguistic framing and literature synthesis". Inferred from the
  `认知语言学角度/czm/` folder and `选题启发(czm).docx`, not confirmed. Correct it
  before the site is shown to anyone.
- **Waiting on human: `content/notes/two-hours.{en,zh}.md`.** Drafted from the
  owner's own material as a starting point, published under the owner's byline.
  Rewrite or delete before merging. If deleted, `app/[locale]/notes/` must go
  too — `npm test` explains why.
- **Waiting on human: rotate the API keys in
  `FYP/dev/papercraft/PHASE2_MEMORY.md`.** The INTAKE form confirmed the file is
  not in a public repo but left the rotation box unchecked. Supabase service
  role key, DeepSeek, MiMo and SiliconFlow keys are in plaintext there. Out of
  scope for this repo; flagged because it is the highest-severity item found.

## Watch List

- Analytics is wired but off (`SITE.analytics.plausibleDomain` is empty). Set it
  when a Plausible or Umami account exists.
- `contact@z-chen.dev` is published on the site and in the CV PDF. Confirm the
  mailbox actually receives mail.
- `resume_zh.pdf` is the old job-seeking résumé, still linked from the Chinese CV
  page. Replace when an updated Chinese version exists.
- PaperCraft evidence labels will need upgrading from `instrumented` to
  `shipped` once the teacher study produces data. Tests pin the current values on
  purpose.
- Source screenshots for IELTS Coach are all under 800px, so that case study has
  no hero image. Larger captures would improve it.

## Recent Noise (ignored this run)

- Old repo cruft: 11 `FIX_*.md` / `DEPLOY_*.md` / `QUICK*.md` progress documents
  and 4 placeholder blog posts from the previous template. Deleted rather than
  triaged.
- `next lint` is gone in Next 16 and `eslint-config-next` moved to flat config.
  Fixed in passing; not worth an escalation.

## Post-Run Critique (from last run)

- Evidence discipline was the right call. The INTAKE form answers contained one
  internal contradiction (RQ1 marked "no data" while RQ4, whose dependent
  variable is RQ1's metric, was marked "has real data"). Asking rather than
  assuming avoided publishing an unsupportable claim; the conservative reading
  was used and flagged to the owner.
- Automated visual QA earned its cost: it caught a 4.47:1 contrast failure on the
  smallest type, three pages with no `h1`, and a 93px horizontal overflow on
  phones. None of those were visible to me by reading the code.
- Friction: the notes section cannot be statically exported with zero notes.
  Resolved with a seeded draft plus a test that explains the constraint, but the
  cleaner fix is to make the route optional at build time.
- Adjustment for next run: capture screenshots at viewport size rather than full
  page. Full-page captures of long case studies were large enough to interrupt
  the session, and sticky elements render mid-page in them anyway.

---
Run log: `loop-run-log.md`
