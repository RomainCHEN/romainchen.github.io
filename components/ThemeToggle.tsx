'use client';

import { useCallback, useState, useSyncExternalStore } from 'react';
import { UI } from '@/content/site';
import type { Locale } from '@/content/types';

/**
 * Three states: follow the OS, or pin light, or pin dark.
 *
 * Most toggles strand a visitor whose OS switches at sunset with no way back to
 * "whatever the system says", so the cycle returns to auto. The stored value is
 * read through useSyncExternalStore rather than an effect, which keeps the
 * server render ('system') and the hydrated render consistent.
 */
type Mode = 'system' | 'light' | 'dark';

function subscribe(onChange: () => void) {
  // Only fires for changes made in another tab, which is exactly when we want it.
  window.addEventListener('storage', onChange);
  return () => window.removeEventListener('storage', onChange);
}

function readStored(): Mode {
  try {
    const value = localStorage.getItem('theme');
    return value === 'dark' || value === 'light' ? value : 'system';
  } catch {
    return 'system';
  }
}

function apply(mode: Mode) {
  const dark =
    mode === 'dark' ||
    (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  if (mode === 'system') localStorage.removeItem('theme');
  else localStorage.setItem('theme', mode);
}

const GLYPH: Record<Mode, string> = { system: '◐', light: '○', dark: '●' };
const READABLE: Record<Mode, string> = { system: 'auto', light: 'light', dark: 'dark' };

export function ThemeToggle({ locale }: { locale: Locale }) {
  const stored = useSyncExternalStore(subscribe, readStored, () => 'system' as Mode);
  const [override, setOverride] = useState<Mode | null>(null);
  const mode = override ?? stored;

  const cycle = useCallback(() => {
    const next: Mode = mode === 'system' ? 'light' : mode === 'light' ? 'dark' : 'system';
    setOverride(next);
    apply(next);
  }, [mode]);

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`${UI.toggleTheme[locale]}: ${READABLE[mode]}`}
      title={`${UI.toggleTheme[locale]}: ${READABLE[mode]}`}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-rule text-ink-soft transition-colors hover:border-rule-strong hover:text-ink"
    >
      <span aria-hidden="true" className="text-[0.7rem] leading-none">
        {GLYPH[mode]}
      </span>
    </button>
  );
}
