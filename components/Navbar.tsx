'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/lib/theme';
import MobileMenu from './MobileMenu';
import type { Locale } from '@/lib/i18n';

interface NavbarProps {
  locale: Locale;
  t: any;
}

export default function Navbar({ locale, t }: NavbarProps) {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  const navItems = [
    { name: t.nav.home, path: `/${locale}` },
    { name: t.nav.blog, path: `/${locale}/blog` },
    { name: t.nav.projects, path: `/${locale}/projects` },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href={`/${locale}`} 
            className="text-xl font-bold text-gray-900 dark:text-white transition-colors"
          >
            Romain Chen
          </Link>

          <div className="flex items-center gap-2 sm:gap-6">
            {/* Navigation Links */}
            <div className="hidden sm:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`/resume_${locale}.pdf`}
                download
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {t.nav.resume}
              </a>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            )}

            {/* Language Switch */}
            <button
              onClick={switchLocale}
              className="px-3 py-1 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            >
              {t.language.switch}
            </button>

            {/* Mobile Menu */}
            <MobileMenu locale={locale} t={t} />
          </div>
        </div>
      </div>
    </nav>
  );
}

