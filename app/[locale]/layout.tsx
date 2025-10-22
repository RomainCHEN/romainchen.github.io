import { getTranslations, isValidLocale, type Locale } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  const t = getTranslations(locale);
  
  return {
    title: 'Romain Chen - Personal Blog',
    description: t.home.description,
    keywords: ['blog', 'technology', 'research', 'developer', 'Romain Chen'],
    authors: [{ name: 'Romain Chen' }],
    openGraph: {
      title: 'Romain Chen - Personal Blog',
      description: t.home.description,
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Romain Chen - Personal Blog',
      description: t.home.description,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar locale={locale} t={t} />
      <main className="flex-1">
        {children}
      </main>
      <Footer t={t} />
      <BackToTop />
    </div>
  );
}

