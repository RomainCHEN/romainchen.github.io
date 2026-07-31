'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { path } from '@/content/site';
import type { Locale, Project } from '@/content/types';

/**
 * The work index, set as a table of contents rather than a grid of cards.
 *
 * On a wide screen, pointing at an entry brings its screenshot and its facts
 * into the left margin and dims the others — the interaction a printed index
 * would have if it could. On narrow screens there is no margin, so each entry
 * simply carries its own thumbnail and nothing depends on hover.
 */
export function WorkIndex({ locale, projects }: { locale: Locale; projects: Project[] }) {
  /** What the pointer is on, which drives the dimming. Null until hovered. */
  const [hovered, setHovered] = useState<string | null>(null);
  /** What the margin shows: the first entry by default, so it is never blank. */
  const shown = hovered ?? projects[0]?.slug ?? null;
  const current = projects.find((p) => p.slug === shown) ?? null;

  return (
    <div className="field">
      <aside className="col-margin sticky under-masthead self-start" aria-hidden="true">
        <div className="relative aspect-4/3 w-full overflow-hidden border border-rule bg-paper-sunk">
          {projects.map((project) =>
            project.hero ? (
              <Image
                key={project.slug}
                src={project.hero.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 22vw, 0px"
                className={`object-cover object-left-top transition-opacity duration-500 ${
                  shown === project.slug ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : null,
          )}
          {current && !current.hero ? (
            <div className="absolute inset-0 flex items-end p-4">
              <p className="label">{current.discipline[locale]}</p>
            </div>
          ) : null}
        </div>

        <div className="mt-4 min-h-24 space-y-2">
          {current ? (
            <>
              <p className="label">{current.discipline[locale]}</p>
              <p className="font-mono text-2xs leading-relaxed text-muted">
                {current.period[locale]}
              </p>
              <p className="text-sm leading-relaxed text-muted text-pretty">
                {current.role[locale]}
              </p>
            </>
          ) : null}
        </div>
      </aside>

      <ol className="col-body" onMouseLeave={() => setHovered(null)}>
        {projects.map((project, i) => (
          <li key={project.slug} className={i === 0 ? '' : 'border-t border-rule'}>
            <Link
              href={path(locale, 'work', project.slug)}
              onMouseEnter={() => setHovered(project.slug)}
              onFocus={() => setHovered(project.slug)}
              className="group block py-8 transition-opacity duration-300 lg:py-10"
              style={{
                opacity: hovered && hovered !== project.slug ? 0.42 : 1,
              }}
            >
              <div className="flex items-start gap-5 sm:gap-8">
                <span className="mt-2 font-mono text-2xs text-muted tnum">{project.index}</span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                    <span className="link-draw">{project.title}</span>
                  </h3>
                  <p className="mt-2 max-w-xl font-display text-lg text-ink-soft text-pretty">
                    {project.subtitle[locale]}
                  </p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                    <span>{project.period[locale]}</span>
                    <span aria-hidden="true" className="h-2.5 w-px bg-rule-strong" />
                    <span className="normal-case tracking-normal">
                      {project.discipline[locale]}
                    </span>
                  </p>
                </div>

                {project.hero ? (
                  <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden border border-rule bg-paper-sunk sm:block lg:hidden">
                    <Image
                      src={project.hero.src}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover object-left-top"
                    />
                  </div>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
