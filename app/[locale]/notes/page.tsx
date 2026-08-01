import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, UI, path } from '@/content/site';
import { asLocale, localeParams } from '@/lib/locale';
import { getNotes } from '@/lib/notes';

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  const notes = await getNotes(locale);
  return {
    title: UI.nav.writing[locale],
    alternates: { canonical: path(locale, 'notes') },
    // An empty section should not be in the index.
    robots: notes.length === 0 ? { index: false, follow: true } : undefined,
  };
}

export default async function NotesPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);
  const notes = await getNotes(locale);

  return (
    <section className="canvas pt-16 pb-24 sm:pt-24">
      <div className="field">
        <div className="col-margin">
          <h1 className="label">
            {UI.nav.writing[locale]}
            <span className="sr-only">: {SITE.name}</span>
          </h1>
        </div>

        <div className="col-body">
          {notes.length === 0 ? (
            <p className="font-display text-xl text-muted">{UI.writingEmpty[locale]}</p>
          ) : (
            <ol className="border-t border-rule">
              {notes.map((note) => (
                <li key={note.slug} className="border-b border-rule">
                  <Link
                    href={path(locale, 'notes', note.slug)}
                    className="group block py-7 transition-opacity hover:opacity-80"
                  >
                    <p className="font-mono text-2xs uppercase tracking-[0.12em] text-muted tnum">
                      {note.date}
                      {note.readingMinutes ? (
                        <span className="ml-3 normal-case tracking-normal">
                          {note.readingMinutes} min
                        </span>
                      ) : null}
                    </p>
                    <h2 className="mt-2 max-w-2xl font-display text-2xl leading-snug text-ink text-pretty">
                      <span className="link-draw">{note.title}</span>
                    </h2>
                    {note.summary ? (
                      <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">
                        {note.summary}
                      </p>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
