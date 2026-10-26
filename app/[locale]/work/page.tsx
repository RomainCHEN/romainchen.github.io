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
    'In the age of AI, almost anyone can make something that works. These three projects ask what a person still adds: what the human gives the machine, and what is lost when that contribution goes. The more of this work I do, the more I find that a person and a machine together beat either alone.',
    "Each answers from a different side. The teacher's, measured in edit distance. The translator's, measured in cultural schemas. The learner's, in a tool that listens before it writes. Every page says what has been built, what has been measured, and what has not.",
  ],
  zh: [
    '在 AI 时代，几乎人人都能做出一个能用的东西。这三个项目追问的是，人在其中还能贡献什么：人给机器补上了什么，这份贡献一旦缺席会丢掉什么。做得越多，我越相信人和机器合作的结果，胜过任何一方单干。',
    '三个项目从三个角度回答这个问题：教师的角度，用编辑距离衡量；译者的角度，用文化图式衡量；学习者的角度，系统动笔之前会先听学习者讲。每一页都写明了哪些已经建成、哪些已经测过、哪些还没有测。',
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
          <div className="col-body">
            <h1 className="label mb-4">
              {UI.nav.work[locale]}
              <span className="sr-only">: {SITE.name}</span>
            </h1>
            {INTRO[locale].map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-2xl measure-display font-display text-pretty ${
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
            <div className="col-margin flex items-baseline gap-4 lg:block">
              <p className="font-display text-3xl leading-none text-muted tnum">
                {project.index}
              </p>
              <p className="font-mono text-2xs leading-relaxed text-muted lg:mt-4">
                {project.period[locale]}
              </p>
              <p className="mt-2 hidden max-w-[16rem] text-sm leading-relaxed text-muted text-pretty lg:block">
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

              <p className="mt-4 max-w-2xl measure-display font-display text-xl leading-snug text-ink-soft text-pretty">
                {project.subtitle[locale]}
              </p>

              <p className="mt-5 measure text-base leading-relaxed text-ink-soft text-pretty">
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
