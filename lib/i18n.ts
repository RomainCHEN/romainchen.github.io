import en from '@/locales/en.json';
import zh from '@/locales/zh.json';

export type Locale = 'en' | 'zh';

const translations = {
  en,
  zh,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === 'en' || locale === 'zh';
}

