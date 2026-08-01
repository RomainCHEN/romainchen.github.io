import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ReadingProgress } from '@/components/ReadingProgress';
import { UI, path } from '@/content/site';
import { LOCALES } from '@/content/types';
import { asLocale } from '@/lib/locale';
import { getNote, noteSlugs } from '@/lib/notes';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => noteSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = asLocale(rawLocale);
  const note = await getNote(locale, slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: path(locale, 'notes', slug) },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = asLocale(rawLocale);
  const note = await getNote(locale, slug);
  if (!note) notFound();

  return (
    <article>
      <ReadingProgress />
      <div className="canvas field pt-14 pb-20 sm:pt-20">
        <div className="col-margin">
          <Link
            href={path(locale, 'notes')}
            className="link-draw sticky under-masthead font-mono text-2xs uppercase tracking-[0.14em] text-muted hover:text-ink"
          >
            ← {UI.nav.writing[locale]}
          </Link>
        </div>

        <div className="col-body">
          <p className="font-mono text-2xs uppercase tracking-[0.12em] text-muted tnum">
            {note.date}
            <span className="ml-3 normal-case tracking-normal">{note.readingMinutes} min</span>
          </p>
          <h1 className="mt-4 max-w-2xl measure-display font-display text-4xl leading-[1.12] text-ink text-balance">
            {note.title}
          </h1>
          {note.summary ? (
            <p className="mt-5 max-w-2xl measure-display font-display text-xl leading-relaxed text-ink-soft text-pretty">
              {note.summary}
            </p>
          ) : null}

          <div
            className="prose-body mt-10"
            // Markdown is authored in-repo and compiled at build time; no user
            // input reaches this string.
            dangerouslySetInnerHTML={{ __html: note.html }}
          />
        </div>
      </div>
    </article>
  );
}
