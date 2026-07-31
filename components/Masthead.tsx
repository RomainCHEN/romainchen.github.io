'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, UI, otherLocale, path } from '@/content/site';
import type { Locale } from '@/content/types';
import { ThemeToggle } from './ThemeToggle';

interface MastheadProps {
  locale: Locale;
  hasNotes: boolean;
}

export function Masthead({ locale, hasNotes }: MastheadProps) {
  const pathname = usePathname() ?? path(locale);
  const other = otherLocale(locale);

  const items = [
    { href: path(locale, 'work'), label: UI.nav.work[locale], seg: 'work' },
    { href: path(locale, 'about'), label: UI.nav.about[locale], seg: 'about' },
    { href: path(locale, 'cv'), label: UI.nav.cv[locale], seg: 'cv' },
    ...(hasNotes
      ? [{ href: path(locale, 'notes'), label: UI.nav.writing[locale], seg: 'notes' }]
      : []),
  ];

  /** Swap only the locale segment so the visitor stays on the same page. */
  const counterpart = (() => {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0) return path(other);
    parts[0] = other;
    return `/${parts.join('/')}/`;
  })();

  const active = (seg: string) => pathname.split('/').filter(Boolean)[1] === seg;

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      {/* Below sm the wordmark and the controls each get their own row: a name
          should not be truncated to make room for a nav. */}
      <div className="canvas flex h-[var(--masthead-h)] flex-col justify-center gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link href={path(locale)} className="flex items-baseline gap-2.5 whitespace-nowrap">
            <span className="font-display text-lg tracking-tight text-ink">
              Zeming <span className="text-muted">(Romain)</span> Chen
            </span>
            <span className="hidden font-display text-sm text-muted lg:inline" aria-hidden="true">
              {SITE.nameZh}
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:hidden">
            <Link
              href={counterpart}
              hrefLang={other}
              aria-label={UI.switchLangLabel[locale]}
              className="px-2 py-1.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
            >
              {UI.switchLang[locale]}
            </Link>
            <ThemeToggle locale={locale} />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav
            aria-label={UI.menu[locale]}
            className="no-scrollbar -mx-2.5 flex min-w-0 flex-1 items-center gap-1 overflow-x-auto px-2.5 sm:mx-0 sm:flex-none sm:px-0"
          >
            {items.map((item) => (
              <Link
                key={item.seg}
                href={item.href}
                aria-current={active(item.seg) ? 'page' : undefined}
                className="relative whitespace-nowrap px-2.5 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink aria-[current=page]:text-ink"
              >
                {item.label}
                {active(item.seg) ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2.5 -bottom-px h-px bg-accent"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <span aria-hidden="true" className="mx-1 hidden h-4 w-px bg-rule sm:block" />

          <div className="hidden items-center gap-1 sm:flex">
            <Link
              href={counterpart}
              hrefLang={other}
              aria-label={UI.switchLangLabel[locale]}
              className="px-2 py-1.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
            >
              {UI.switchLang[locale]}
            </Link>
            <ThemeToggle locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
