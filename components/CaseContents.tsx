'use client';

import { useEffect, useState } from 'react';

interface Entry {
  id: string | null;
  label: string;
}

/**
 * The case study's contents list, for the margin.
 *
 * It sits in a column that runs the full length of the article body, so
 * `sticky` keeps it beside the text all the way down, not only beside the
 * section it was declared in. The entry for the section being read is marked,
 * which is the one thing a reader halfway down a long page needs from it.
 */
export function CaseContents({ entries, label }: { entries: Entry[]; label: string }) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const targets = entries
      .map((e) => (e.id ? document.getElementById(e.id) : null))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    // A heading counts as current once it has passed the upper third of the
    // viewport; the last such heading wins. This reads naturally while
    // scrolling down and does not flicker between two short sections.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.33;
      let active: string | null = null;
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= line) active = el.id;
        else break;
      }
      setCurrent(active);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [entries]);

  // Set a size and a tone below the body text and kept to a narrow column, so
  // the list reads as furniture beside the article rather than a second column
  // of prose competing with it. Only the current entry is raised to ink.
  return (
    <nav
      aria-label={label}
      className="sticky under-masthead max-h-[calc(100dvh-var(--masthead-h)-6rem)] max-w-[13rem] overflow-y-auto no-scrollbar"
    >
      <p className="label">{label}</p>
      <ol className="mt-3 space-y-1.5 border-l border-rule">
        {entries.map((entry, i) => {
          const on = entry.id !== null && entry.id === current;
          return (
            <li key={entry.id ?? i} className="-ml-px">
              <a
                href={`#${entry.id}`}
                aria-current={on ? 'location' : undefined}
                className={`flex gap-2 border-l py-0.5 pl-3 text-2xs leading-relaxed transition-colors duration-200 ${
                  on
                    ? 'border-accent text-ink'
                    : 'border-transparent text-muted hover:text-ink-soft'
                }`}
              >
                <span className="font-mono text-2xs tnum">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-pretty">{entry.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
