import { LOCALES, type Locale } from '@/content/types';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Params for generateStaticParams on every [locale] route. */
export function localeParams(): { locale: Locale }[] {
  return LOCALES.map((locale) => ({ locale }));
}

/** Narrow the awaited route param, falling back to English on nonsense input. */
export function asLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : 'en';
}

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-Hans',
};
