import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WorkIndex } from "@/components/WorkIndex";
import { PROJECTS } from "@/content/projects";
import { CURRENTLY } from "@/content/about";
import {
  RESEARCH_INTERESTS,
  ROLE_LINE,
  SITE,
  TAGLINE,
  UI,
  path,
} from "@/content/site";
import { asLocale, localeParams } from "@/lib/locale";

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
    // Absolute, or the root layout's template appends the name a second time.
    title: {
      absolute: `${SITE.name} · ${
        locale === "en"
          ? "learning tools as research objects"
          : "把学习工具做成研究对象"
      }`,
    },
    description: TAGLINE[locale],
    alternates: { canonical: path(locale) },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = asLocale((await params).locale);

  return (
    <>
      {/* ------------------------------------------------------------------
          Opening. One sentence, set as large as it can be read comfortably,
          then the facts that qualify it. No portrait, no buttons, the first
          thing a reader should get is the claim.
         ------------------------------------------------------------------ */}
      <section className="canvas pt-20 pb-24 sm:pt-28 lg:pt-36">
        <div className="field">
          <Reveal className="col-margin" as="div">
            <p className="label">
              {locale === "en" ? "Zeming (Romain) Chen" : "陈泽铭"}
            </p>
            <p className="mt-3 font-mono text-2xs leading-relaxed text-muted">
              {locale === "en" ? SITE.nameZh : SITE.name}
            </p>
          </Reveal>

          <div className="col-body">
            <Reveal>
              {/* The heading scales with its column so the discipline line always
                  fits on one line; the caps are the sizes it had before. The
                  factor is per language because the Latin line is wider. */}
              <div className="@container">
                <h1
                  className={`max-w-3xl font-display leading-[1.14] text-ink text-balance ${
                    locale === "zh"
                      ? "text-[min(1.875rem,10.5cqi)] sm:text-[min(2.25rem,10.5cqi)] lg:text-[min(3rem,10.5cqi)]"
                      : "text-[min(1.875rem,7cqi)] sm:text-[min(2.25rem,7cqi)] lg:text-[min(3rem,7cqi)]"
                  }`}
                >
                  {/* The discipline line sits on its own line and never breaks;
                    the sentence after it starts below. */}
                  {(() => {
                    const text = TAGLINE[locale];
                    const cut =
                      locale === "zh"
                        ? text.indexOf("。") + 1
                        : text.indexOf(". ") + 1;
                    return (
                      <>
                        <span
                          data-tagline-head
                          className="block whitespace-nowrap"
                        >
                          {text.slice(0, cut)}
                        </span>
                        <span
                          className={`block ${locale === "zh" ? "break-keep" : ""}`}
                        >
                          {text.slice(cut).trim()}
                        </span>
                      </>
                    );
                  })()}
                </h1>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-8 max-w-xl font-display text-lg text-ink-soft text-pretty">
                {ROLE_LINE[locale]}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 rule-tick pt-5">
                <p className="label">{UI.interests[locale]}</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {RESEARCH_INTERESTS.map((interest) => (
                    <li key={interest.en} className="text-sm text-ink-soft">
                      {interest[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Work
         ------------------------------------------------------------------ */}
      <section className="canvas pb-24" aria-labelledby="work-heading">
        <div className="field">
          <div className="col-body mb-4 flex items-baseline justify-between border-b border-rule pb-3">
            <h2 id="work-heading" className="label">
              {UI.selectedWork[locale]}
            </h2>
            <Link
              href={path(locale, "work")}
              className="link-draw font-mono text-2xs uppercase tracking-[0.14em] text-muted hover:text-ink"
            >
              {UI.allWork[locale]}
            </Link>
          </div>
        </div>
        <WorkIndex locale={locale} projects={PROJECTS} />
      </section>

      {/* ------------------------------------------------------------------
          Currently
         ------------------------------------------------------------------ */}
      <section className="canvas pb-8" aria-labelledby="currently-heading">
        <div className="field">
          <Reveal className="col-margin" as="div">
            <h2 id="currently-heading" className="label">
              {UI.currently[locale]}
            </h2>
          </Reveal>
          <Reveal className="col-body" as="div">
            <ul className="space-y-4 border-t border-rule pt-6">
              {CURRENTLY[locale].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="mt-2.5 h-px w-6 shrink-0 bg-accent"
                    aria-hidden="true"
                  />
                  <span className="max-w-xl font-display text-lg text-ink-soft text-pretty">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10">
              <Link
                href={path(locale, "about")}
                className="link-draw font-mono text-2xs uppercase tracking-[0.14em] text-ink"
              >
                {locale === "en" ? "More about me" : "了解更多"}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
