import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { ABOUT_BODY, ABOUT_LEDE, COLOPHON, CURRENTLY } from '@/content/about';
import { TEACHING, WRITING_MEDIA } from '@/content/cv';
import { RESEARCH_INTERESTS, ROLE_LINE, SITE, SOCIAL, UI, path } from '@/content/site';
import { inline } from '@/lib/inline';
import { asLocale, localeParams } from '@/lib/locale';
import type { CvSection } from '@/content/cv';
import type { Locale } from '@/content/types';

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
    title: UI.nav.about[locale],
    description: ABOUT_LEDE[locale][0],
    alternates: { canonical: path(locale, 'about') },
  };
}

function EntryList({ section, locale }: { section: CvSection; locale: Locale }) {
  return (
    <div className="mt-6 border-t border-rule">
      {section.entries.map((entry) => (
        <div key={entry.title.en} className="border-b border-rule py-6">
          <p className="font-mono text-2xs uppercase tracking-[0.12em] text-muted">
            {entry.when[locale]}
          </p>
          <h3 className="mt-2 max-w-2xl font-display text-lg leading-snug text-ink text-pretty">
            {entry.title[locale]}
          </h3>
          {entry.org ? (
            <p className="mt-1 text-sm text-muted text-pretty">{entry.org[locale]}</p>
          ) : null}
          {entry.points[locale].length > 0 ? (
            <ul className="mt-3 max-w-2xl space-y-1.5">
              {entry.points[locale].map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-rule-strong" />
                  <span className="text-pretty">{inline(point)}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);

  return (
    <>
      <header className="canvas pt-16 pb-12 sm:pt-24">
        <div className="field">
          <Reveal className="col-margin" as="div">
            <div className="relative aspect-4/5 w-full max-w-[15rem] overflow-hidden border border-rule bg-paper-sunk">
              <Image
                src="/portrait.jpg"
                alt={
                  locale === 'en'
                    ? 'Portrait of Zeming (Romain) Chen'
                    : '陈泽铭的照片'
                }
                fill
                priority
                sizes="(min-width: 1024px) 15rem, 0px"
                className="object-cover object-[center_18%]"
              />
            </div>
            <p className="mt-4 font-mono text-2xs leading-relaxed text-muted">
              {SITE.name}
              <br />
              {SITE.nameZh}
            </p>
          </Reveal>

          <div className="col-body">
            <h1 className="label">
              {UI.nav.about[locale]}
              <span className="sr-only">: {SITE.name}</span>
            </h1>
            {ABOUT_LEDE[locale].map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-2xl font-display text-pretty ${
                  i === 0
                    ? 'mt-4 text-2xl leading-snug text-ink sm:text-3xl'
                    : 'mt-6 text-lg leading-relaxed text-ink-soft'
                }`}
              >
                {inline(paragraph)}
              </p>
            ))}

            <div className="mt-10 rule-tick pt-5">
              <p className="text-sm text-muted text-pretty">{ROLE_LINE[locale]}</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                {RESEARCH_INTERESTS.map((interest) => (
                  <li key={interest.en} className="text-sm text-ink-soft">
                    {interest[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {ABOUT_BODY.map((block, i) => (
        <Reveal as="section" key={block.heading.en} className="canvas field py-10" delay={i * 40}>
          <div className="col-body">
            <h2 className="mb-5 font-display text-2xl leading-tight text-ink sm:text-3xl">
              {block.heading[locale]}
            </h2>
            <div className="prose-body">
              {block.body[locale].map((paragraph, j) => (
                <p key={j}>{inline(paragraph)}</p>
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal as="section" className="canvas field py-10">
        <div className="col-margin">
          <p className="label">{UI.currently[locale]}</p>
        </div>
        <div className="col-body">
          <ul className="space-y-3 border-t border-rule pt-5">
            {CURRENTLY[locale].map((item, i) => (
              <li key={i} className="flex gap-3.5 text-base leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-accent" />
                <span className="max-w-2xl text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ------------------------------------------------------------------
          Teaching and communication. Kept deliberately separate from the case
          studies: this work shows range, but folding it into the research
          narrative would dilute it.
         ------------------------------------------------------------------ */}
      <Reveal as="section" className="canvas field py-10">
        <div className="col-body">
          <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
            {TEACHING.heading[locale]}
          </h2>
          <EntryList section={TEACHING} locale={locale} />
        </div>
      </Reveal>

      <Reveal as="section" className="canvas field py-10">
        <div className="col-body">
          <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
            {WRITING_MEDIA.heading[locale]}
          </h2>
          <EntryList section={WRITING_MEDIA} locale={locale} />
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {SOCIAL.filter((s) => s.label === 'sspai').map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-mono text-2xs uppercase tracking-[0.14em] text-ink"
              >
                {locale === 'en' ? 'Read on sspai' : '在少数派阅读'} →
              </a>
            ))}
            <Link
              href={path(locale, 'cv')}
              className="link-draw font-mono text-2xs uppercase tracking-[0.14em] text-ink"
            >
              {locale === 'en' ? 'Full CV' : '完整简历'} →
            </Link>
          </p>
        </div>
      </Reveal>

      <section className="canvas field py-10">
        <div className="col-body border-t border-rule pt-6">
          <p className="max-w-2xl font-mono text-2xs leading-relaxed text-muted">
            {COLOPHON[locale][0]}
          </p>
        </div>
      </section>
    </>
  );
}
