'use client';

import { useRef, useState } from 'react';
import { UI } from '@/content/site';
import type { L, Locale } from '@/content/types';

interface SchemaCase {
  operation: L;
  load: 1 | 2 | 3 | 4;
  source: string;
  human: string;
  machine: string;
  reading: L;
}

function LoadMeter({ load, label }: { load: number; label: string }) {
  return (
    <span className="flex items-center gap-1" title={`${label}: ${load}/4`}>
      <span className="sr-only">{`${label} ${load} of 4`}</span>
      {[1, 2, 3, 4].map((step) => (
        <span
          key={step}
          aria-hidden="true"
          className={`h-2.5 w-1 ${step <= load ? 'bg-accent' : 'bg-rule-strong'}`}
        />
      ))}
    </span>
  );
}

/**
 * The four schema operations, side by side with the actual titles.
 *
 * The point of the interaction is comparison: the same slot shows what a human
 * did and what a default rendering produces, so the reader sees the divergence
 * rather than reading a description of it.
 */
export function SchemaCases({ cases, locale }: { cases: SchemaCase[]; locale: Locale }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = cases[index];
  const same = active.human === active.machine;

  function onKeyDown(event: React.KeyboardEvent) {
    const last = cases.length - 1;
    let next: number | null = null;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    if (next === null) return;
    event.preventDefault();
    setIndex(next);
    tabs.current[next]?.focus();
  }

  return (
    // Same 12-column field as the prose, so the operation list sits exactly in
    // the margin and the comparison sits exactly in the body column.
    <div className="field mt-8">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Cultural schema operations"
        onKeyDown={onKeyDown}
        className="col-span-full flex flex-col border-t border-rule lg:col-span-3 lg:col-start-1"
      >
        {cases.map((item, i) => {
          const selected = i === index;
          return (
            <button
              key={item.operation.en}
              ref={(node) => {
                tabs.current[i] = node;
              }}
              role="tab"
              type="button"
              id={`schema-tab-${i}`}
              aria-selected={selected}
              aria-controls={`schema-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={`flex items-center justify-between gap-3 border-b border-rule px-1 py-3.5 text-left transition-colors ${
                selected ? 'text-ink' : 'text-muted hover:text-ink-soft'
              }`}
            >
              <span className="flex flex-col gap-1">
                <span className="text-sm">{item.operation[locale]}</span>
                <span className="font-mono text-2xs text-muted">{item.source}</span>
              </span>
              <LoadMeter load={item.load} label={UI.cognitiveLoad[locale]} />
            </button>
          );
        })}
        <p className="mt-3 font-mono text-2xs leading-relaxed text-muted">
          {UI.cognitiveLoad[locale]} · 1–4
        </p>
      </div>

      <div
        role="tabpanel"
        id={`schema-panel-${index}`}
        aria-labelledby={`schema-tab-${index}`}
        tabIndex={0}
        className="col-span-full mt-10 lg:col-span-8 lg:col-start-4 lg:mt-0"
      >
        <div className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3">
          <div className="bg-paper p-4">
            <p className="label">{UI.sourceTitle[locale]}</p>
            <p className="mt-2 font-display text-xl text-ink">{active.source}</p>
          </div>
          <div className="bg-paper p-4">
            <p className="label text-accent">{UI.humanTitle[locale]}</p>
            <p className="mt-2 font-display text-xl text-ink">{active.human}</p>
          </div>
          <div className="bg-paper p-4">
            <p className="label">{UI.machineTitle[locale]}</p>
            <p className="mt-2 font-display text-xl text-muted">
              {active.machine}
              {same ? (
                <span className="ml-2 align-middle font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                  {locale === 'en' ? '= identical' : '= 一致'}
                </span>
              ) : null}
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-2xl font-display text-lg leading-relaxed text-ink-soft text-pretty">
          {active.reading[locale]}
        </p>
      </div>
    </div>
  );
}
