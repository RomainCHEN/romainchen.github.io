'use client';

import { useRef, useState } from 'react';
import { UI } from '@/content/site';
import type { L, Locale } from '@/content/types';

interface Stage {
  id: string;
  title: L;
  what: L;
  why: L;
}

/**
 * The generation pipeline, presented as a tablist.
 *
 * A static diagram would need every stage's rationale on screen at once, which
 * is unreadable; a hover tooltip would be unusable on touch and invisible to
 * keyboards. A tablist with arrow-key navigation is the boring correct answer,
 * and it lets the stage rail double as a progress-style graphic.
 */
export function Pipeline({ stages, locale }: { stages: Stage[]; locale: Locale }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = stages[index];

  function onKeyDown(event: React.KeyboardEvent) {
    const last = stages.length - 1;
    let next: number | null = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = index === last ? 0 : index + 1;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;
    if (next === null) return;
    event.preventDefault();
    setIndex(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="mt-8">
      <div
        role="tablist"
        aria-label="Generation pipeline stages"
        onKeyDown={onKeyDown}
        className="no-scrollbar flex overflow-x-auto border-y border-rule"
      >
        {stages.map((stage, i) => {
          const selected = i === index;
          return (
            <button
              key={stage.id}
              ref={(node) => {
                tabs.current[i] = node;
              }}
              role="tab"
              type="button"
              id={`stage-tab-${stage.id}`}
              aria-selected={selected}
              aria-controls={`stage-panel-${stage.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={`group relative flex min-w-24 flex-1 flex-col items-start gap-1.5 border-r border-rule px-3 py-3.5 text-left last:border-r-0 transition-colors ${
                selected ? 'bg-paper-sunk' : 'hover:bg-paper-sunk/60'
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-px transition-colors ${
                  selected ? 'bg-accent' : 'bg-transparent'
                }`}
              />
              <span
                className={`font-mono text-2xs tracking-[0.1em] transition-colors ${
                  selected ? 'text-accent' : 'text-muted'
                }`}
              >
                {stage.id}
              </span>
              <span
                className={`text-xs leading-snug transition-colors ${
                  selected ? 'text-ink' : 'text-ink-soft'
                }`}
              >
                {stage.title[locale]}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`stage-panel-${active.id}`}
        aria-labelledby={`stage-tab-${active.id}`}
        tabIndex={0}
        className="grid gap-x-10 gap-y-6 pt-8 sm:grid-cols-2"
      >
        <div>
          <p className="label">{UI.what[locale]}</p>
          <p className="mt-2.5 font-display text-lg leading-relaxed text-ink text-pretty">
            {active.what[locale]}
          </p>
        </div>
        <div>
          <p className="label">{UI.why[locale]}</p>
          <p className="mt-2.5 font-display text-lg leading-relaxed text-ink-soft text-pretty">
            {active.why[locale]}
          </p>
        </div>
      </div>
    </div>
  );
}
