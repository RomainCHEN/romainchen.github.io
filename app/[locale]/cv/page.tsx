import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { CV_SECTIONS, CV_UPDATED, SKILLS } from '@/content/cv';
import { ROLE_LINE, SITE, SOCIAL, UI, path } from '@/content/site';
import { inline } from '@/lib/inline';
import { asLocale, localeParams } from '@/lib/locale';

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  return {
    title: UI.nav.cv[locale],
    description:
      locale === 'en'
        ? `Curriculum vitae of ${SITE.name}: dual degree in translation and computer science, research on human–AI complementarity in education, teaching, and writing.`
        : `${SITE.nameZh}的学术简历：翻译与计算机科学双学位、教育中人机互补方向的研究经历、教学经历、写作与传播作品，以及技能与获奖情况。`,
    alternates: { canonical: path(locale, 'cv') },
  };
}

export default async function CvPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);

  return (
    <>
      <header className="canvas pt-16 pb-10 sm:pt-24">
        <div className="field">
          <div className="col-margin">
            <p className="label" data-print="hide">
              {UI.nav.cv[locale]}
            </p>
            <p className="mt-3 font-mono text-2xs leading-relaxed text-muted">
              {UI.lastUpdated[locale]} {CV_UPDATED}
            </p>
          </div>
          <div className="col-body">
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              {SITE.name}
            </h1>
            <p className="mt-2 font-display text-xl text-muted">{SITE.nameZh}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">
              {ROLE_LINE[locale]}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-2xs text-muted">
              <a href={`mailto:${SITE.email}`} className="link-draw hover:text-ink">
                {SITE.email}
              </a>
              {/* Printed as the visible URL: a PDF that says only "LinkedIn" is
                  useless on paper. */}
              {SOCIAL.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw hover:text-ink"
                >
                  {s.href.replace('https://', '').replace('www.', '')}
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4" data-print="hide">
              <a
                href="/cv-zeming-chen.pdf"
                className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-sm text-paper transition-colors hover:border-accent hover:bg-accent"
              >
                {UI.downloadCv[locale]}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="/resume_zh.pdf"
                className="link-draw text-sm text-ink-soft hover:text-ink"
              >
                {UI.downloadCvZh[locale]}
              </a>
            </div>
          </div>
        </div>
      </header>

      {CV_SECTIONS.map((section, i) => (
        <Reveal as="section" key={section.id} className="canvas field py-8" delay={i * 30}>
          <div className="col-margin">
            <h2 className="sticky under-masthead label">{section.heading[locale]}</h2>
          </div>
          <div className="col-body border-t border-rule">
            {section.entries.map((entry) => (
              <div key={entry.title.en} className="border-b border-rule py-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="max-w-2xl font-display text-lg leading-snug text-ink text-pretty">
                    {entry.title[locale]}
                  </h3>
                  <p className="whitespace-nowrap font-mono text-2xs uppercase tracking-[0.1em] text-muted">
                    {entry.when[locale]}
                  </p>
                </div>

                {entry.org ? (
                  <p className="mt-1.5 max-w-2xl text-sm text-muted text-pretty">
                    {entry.org[locale]}
                    {entry.place ? ` · ${entry.place[locale]}` : ''}
                  </p>
                ) : null}

                {entry.points[locale].length > 0 ? (
                  <ul className="mt-3 max-w-2xl space-y-1.5">
                    {entry.points[locale].map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-3 shrink-0 bg-rule-strong"
                        />
                        <span className="text-pretty">{inline(point)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      ))}

      <Reveal as="section" className="canvas field py-8">
        <div className="col-margin">
          <h2 className="sticky under-masthead label">{SKILLS.heading[locale]}</h2>
        </div>
        <div className="col-body border-t border-rule pt-6">
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {SKILLS.groups.map((group) => (
              <div key={group.label.en}>
                <dt className="label">{group.label[locale]}</dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {group.items[locale].join(' · ')}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </>
  );
}
