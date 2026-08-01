import { UI } from '@/content/site';
import type { Evidence, L, Locale } from '@/content/types';

const FILL: Record<Evidence, number> = {
  shipped: 4,
  instrumented: 3,
  designed: 2,
  planned: 1,
};

/**
 * A four-tick meter rather than a red/amber/green chip. Traffic lights imply a
 * value judgement, "planned" is not a failure, whereas a fill level reads as
 * what it is: how far along the evidence goes.
 */
function EvidenceMark({ state, label }: { state: Evidence; label: string }) {
  const fill = FILL[state];
  return (
    <span className="flex items-center gap-2.5 whitespace-nowrap">
      <span aria-hidden="true" className="flex items-center gap-0.5">
        {[1, 2, 3, 4].map((step) => (
          <span
            key={step}
            className={`h-1.5 w-2.5 ${step <= fill ? 'bg-accent' : 'bg-rule-strong'}`}
          />
        ))}
      </span>
      <span className="font-mono text-2xs uppercase tracking-[0.1em] text-muted">{label}</span>
    </span>
  );
}

export function EvidenceLedger({
  items,
  locale,
}: {
  items: { label: L; state: Evidence; detail: L }[];
  locale: Locale;
}) {
  return (
    <div className="mt-8">
      <p className="font-mono text-2xs leading-relaxed text-muted">
        {UI.evidenceLegend[locale]}
      </p>
      <ul className="mt-5 border-t border-rule">
        {items.map((item) => (
          <li key={item.label.en} className="border-b border-rule py-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <h3 className="font-display text-lg leading-snug text-ink">
                {item.label[locale]}
              </h3>
              <EvidenceMark
                state={item.state}
                label={UI.evidenceStates[item.state][locale]}
              />
            </div>
            <p className="mt-2 measure text-sm leading-relaxed text-ink-soft text-pretty">
              {item.detail[locale]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
