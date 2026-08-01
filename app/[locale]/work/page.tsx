import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { PROJECTS } from '@/content/projects';
import { SITE, UI, path } from '@/content/site';
import { asLocale, localeParams } from '@/lib/locale';
import type { L } from '@/content/types';

export function generateStaticParams() {
  return localeParams();
}

const INTRO: L<string[]> = {
  en: [
    'Three projects, one question: when a machine can produce a plausible version of the artefact, what exactly is the human contribution, and how would you know if it disappeared?',
    "One answers it from the teacher's side with edit distances, one from the translator's side with cultural schemas, one from the learner's side by refusing to generate before it has listened. Each page states plainly what has been built, what has been measured, and what has not.",
  ],
  zh: [
    '三个项目，一个问题：当机器已经能做出一个看起来像样的成品时，人的贡献到底是什么？万一它消失了，你凭什么发现？',
    '一个站在教师这边，用编辑距离回答；一个站在译者这边，用文化图式回答；一个站在学习者这边，靠“先听完再动笔”回答。每个页面都写清楚：哪些已经做出来了，哪些已经测过了，哪些还没有。',
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  return {
    title: UI.nav.work[locale],
    description: INTRO[locale][0],
    alternates: { canonical: path(locale, 'work') },
  };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);

  return (
    <>
      <header className="canvas pt-16 pb-14 sm:pt-24">
        <div className="field">
          <div className="col-margin">
            <h1 className="label">
              {UI.nav.work[locale]}
              <span className="sr-only">: {SITE.name}</span>
            </h1>
          </div>
          <div className="col-body">
            {INTRO[locale].map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-2xl font-display text-pretty ${
                  i === 0
                    ? 'text-2xl leading-snug text-ink sm:text-3xl'
                    : 'mt-6 text-lg leading-relaxed text-ink-soft'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </header>

      <div className="canvas">
        {PROJECTS.map((project, i) => (
          <Reveal
            as="article"
            key={project.slug}
            delay={i * 60}
            className="field border-t border-rule py-14 first:border-t-0 lg:py-20"
          >
            <div className="col-margin">
              <p className="font-display text-5xl leading-none text-rule-strong tnum">
                {project.index}
              </p>
              <p className="mt-5 font-mono text-2xs leading-relaxed text-muted">
                {project.period[locale]}
              </p>
              <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted text-pretty">
                {project.role[locale]}
              </p>
            </div>

            <div className="col-body">
              <p className="label">{project.discipline[locale]}</p>

              <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
                <Link href={path(locale, 'work', project.slug)} className="link-draw">
                  {project.title}
                </Link>
              </h2>

              <p className="mt-4 max-w-2xl font-display text-xl leading-snug text-ink-soft text-pretty">
                {project.subtitle[locale]}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">
                {project.blurb[locale]}
              </p>

              {project.hero ? (
                <Link
                  href={path(locale, 'work', project.slug)}
                  className="group mt-8 block overflow-hidden border border-rule bg-paper-sunk"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={project.hero.src}
                    alt=""
                    width={project.hero.w ?? 2400}
                    height={project.hero.h ?? 1500}
                    sizes="(min-width: 1024px) 44rem, 100vw"
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </Link>
              ) : null}

              <dl className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2">
                {project.facts.map((fact) => (
                  <div key={fact.label.en} className="bg-paper px-4 py-3.5">
                    <dt className="label">{fact.label[locale]}</dt>
                    <dd className="mt-1.5 text-sm leading-snug text-ink text-pretty">
                      {fact.value[locale]}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8">
                <Link
                  href={path(locale, 'work', project.slug)}
                  className="link-draw font-mono text-2xs uppercase tracking-[0.14em] text-ink"
                >
                  {UI.readCase[locale]} →
                </Link>
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
