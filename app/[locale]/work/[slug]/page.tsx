import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ReadingProgress } from '@/components/ReadingProgress';
import { Reveal } from '@/components/Reveal';
import { SectionRenderer, sectionId } from '@/components/SectionRenderer';
import { PROJECTS, getProject, projectNeighbours, projectSlugs } from '@/content/projects';
import { UI, path } from '@/content/site';
import { LOCALES } from '@/content/types';
import { figureBox } from '@/lib/figure';
import { asLocale } from '@/lib/locale';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => projectSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = asLocale(rawLocale);
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title}: ${project.subtitle[locale]}`,
    description: project.blurb[locale],
    alternates: { canonical: path(locale, 'work', slug) },
    openGraph: {
      title: project.title,
      description: project.blurb[locale],
      images: project.hero ? [{ url: project.hero.src }] : undefined,
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = asLocale(rawLocale);
  const project = getProject(slug);
  if (!project) notFound();

  const neighbours = projectNeighbours(slug);
  const heroBox = figureBox(project.hero?.w, project.hero?.h);
  const contents = project.sections
    .map((section, i) => ({ section, id: sectionId(section, i) }))
    .filter((entry) => 'heading' in entry.section && entry.section.heading)
    .map((entry) => ({
      id: entry.id,
      label: (entry.section as { heading: Record<string, string> }).heading[locale],
    }));

  return (
    <article>
      <ReadingProgress />

      {/* ------------------------------------------------------------------
          Title block. Set like a paper: number, title, subtitle, then the
          administrative facts in the margin where they belong.
         ------------------------------------------------------------------ */}
      <header className="canvas pt-14 pb-10 sm:pt-20">
        <div className="field">
          <div className="col-margin">
            <Link
              href={path(locale, 'work')}
              className="link-draw font-mono text-2xs uppercase tracking-[0.14em] text-muted hover:text-ink"
            >
              ← {UI.backToWork[locale]}
            </Link>
          </div>

          <div className="col-body">
            <p className="flex items-center gap-3 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              <span className="tnum">{project.index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              <span className="normal-case tracking-normal">{project.discipline[locale]}</span>
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-ink text-balance sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl measure-display font-display text-xl leading-snug text-ink-soft text-pretty sm:text-2xl">
              {project.subtitle[locale]}
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-rule pt-5">
              <div>
                <dt className="label">{UI.period[locale]}</dt>
                <dd className="mt-1.5 text-sm text-ink-soft">{project.period[locale]}</dd>
              </div>
              <div className="max-w-xs">
                <dt className="label">{UI.role[locale]}</dt>
                <dd className="mt-1.5 text-sm text-ink-soft">{project.role[locale]}</dd>
              </div>
            </dl>

            {project.links.length > 0 ? (
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.primary
                        ? 'inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-accent hover:border-accent'
                        : 'link-draw text-sm text-ink-soft hover:text-ink'
                    }
                  >
                    {link.label[locale]}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            ) : null}

            <ul className="mt-8 flex flex-wrap gap-x-2.5 gap-y-2">
              {project.tags.map((tag) => {
                const label = typeof tag === 'string' ? tag : tag[locale];
                return (
                  <li
                    key={typeof tag === 'string' ? tag : tag.en}
                    className="border border-rule px-2.5 py-1 font-mono text-2xs text-muted"
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------------
          Hero image
         ------------------------------------------------------------------ */}
      {project.hero ? (
        <Reveal className="canvas field pb-6">
          <div className="col-body">
            <div
              className="relative overflow-hidden border border-rule bg-paper-sunk"
              style={{ maxWidth: `${heroBox.width}px` }}
            >
              <Image
                src={project.hero.src}
                alt={project.hero.alt[locale]}
                width={project.hero.w ?? 2400}
                height={project.hero.h ?? 1500}
                priority
                sizes={heroBox.sizes}
                className="h-auto w-full"
              />
            </div>
            {project.hero.full ? (
              <p className="mt-3">
                <a
                  href={project.hero.full}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw font-mono text-2xs uppercase tracking-[0.12em] text-muted hover:text-ink"
                >
                  {UI.fullSize[locale]} ↗
                </a>
              </p>
            ) : null}
          </div>
        </Reveal>
      ) : null}

      {/* ------------------------------------------------------------------
          At a glance + contents
         ------------------------------------------------------------------ */}
      <section className="canvas py-12">
        <div className="field">
          <div className="col-margin">
            {contents.length > 0 ? (
              <nav aria-label={UI.contents[locale]} className="sticky under-masthead">
                <p className="label">{UI.contents[locale]}</p>
                <ol className="mt-3 space-y-2">
                  {contents.map((entry, i) => (
                    <li key={entry.id ?? i} className="flex gap-2.5 text-sm leading-snug">
                      <span className="font-mono text-2xs text-muted tnum">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <a href={`#${entry.id}`} className="link-draw text-muted hover:text-ink">
                        {entry.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
          </div>

          <div className="col-body">
            <p className="label">{UI.facts[locale]}</p>
            <dl className="mt-4 grid gap-px border border-rule bg-rule sm:grid-cols-2">
              {project.facts.map((fact) => (
                <div key={fact.label.en} className="bg-paper p-4">
                  <dt className="label">{fact.label[locale]}</dt>
                  <dd className="mt-2 font-display text-lg leading-snug text-ink text-pretty">
                    {fact.value[locale]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Body
         ------------------------------------------------------------------ */}
      {project.sections.map((section, i) => (
        <SectionRenderer key={i} section={section} index={i} locale={locale} />
      ))}

      {/* ------------------------------------------------------------------
          Neighbours
         ------------------------------------------------------------------ */}
      {neighbours && PROJECTS.length > 1 ? (
        <nav className="canvas mt-16 border-t border-rule pt-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <Link href={path(locale, 'work', neighbours.prev.slug)} className="group block">
              <p className="label">← {UI.prevProject[locale]}</p>
              <p className="mt-2 font-display text-xl text-ink">
                <span className="link-draw">{neighbours.prev.title}</span>
              </p>
            </Link>
            <Link
              href={path(locale, 'work', neighbours.next.slug)}
              className="group block sm:text-right"
            >
              <p className="label">{UI.nextProject[locale]} →</p>
              <p className="mt-2 font-display text-xl text-ink">
                <span className="link-draw">{neighbours.next.title}</span>
              </p>
            </Link>
          </div>
        </nav>
      ) : null}
    </article>
  );
}
