import { notFound } from 'next/navigation';
import { Masthead } from '@/components/Masthead';
import { Footer } from '@/components/Footer';
import { UI } from '@/content/site';
import { asLocale, isLocale, localeParams, HTML_LANG } from '@/lib/locale';
import { hasNotes } from '@/lib/notes';

export function generateStaticParams() {
  return localeParams();
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = asLocale(raw);
  const notes = hasNotes();

  return (
    // The <html> lang attribute is set on the root; this mirrors it onto the
    // subtree so screen readers switch voice on the Chinese pages.
    <div lang={HTML_LANG[locale]}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        {UI.skipToContent[locale]}
      </a>
      <Masthead locale={locale} hasNotes={notes} />
      <main id="main">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
