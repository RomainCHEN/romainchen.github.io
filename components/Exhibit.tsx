import type { Locale, Section } from '@/content/types';

type ExhibitSection = Extract<Section, { kind: 'exhibit' }>;

/**
 * Verbatim quotations out of the application source.
 *
 * The point of showing these rather than describing them is that a description
 * of a prompt is unfalsifiable. The text is reproduced as it is, in the
 * language it was written in, with the file it came from in the header, so a
 * reader can check the claim or copy the sentence into their own project.
 */
export function Exhibit({
  blocks,
  locale,
}: {
  blocks: ExhibitSection['blocks'];
  locale: Locale;
}) {
  return (
    <div className="space-y-5">
      {blocks.map((block) => (
        <figure key={`${block.source}:${block.label.en}`} className="border border-rule">
          <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule px-4 py-2.5">
            <span className="label">{block.label[locale]}</span>
            <span className="font-mono text-2xs text-muted">{block.source}</span>
          </figcaption>
          <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-3.5 font-mono text-xs leading-relaxed text-ink-soft">
            {block.text}
          </pre>
        </figure>
      ))}
    </div>
  );
}
