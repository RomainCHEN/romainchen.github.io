import Image from 'next/image';
import { EvidenceLedger } from './EvidenceLedger';
import { Pipeline } from './Pipeline';
import { Reveal } from './Reveal';
import { SchemaCases } from './SchemaCases';
import { UI } from '@/content/site';
import { figureBox } from '@/lib/figure';
import { inline } from '@/lib/inline';
import type { Locale, Section } from '@/content/types';

/** Slug used for the in-page contents list in the margin. */
export function sectionId(section: Section, i: number): string | null {
  if ('heading' in section && section.heading) {
    return section.heading.en
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 48);
  }
  return `section-${i}`;
}

function Heading({ text, id }: { text: string; id: string | null }) {
  return (
    <h2
      id={id ?? undefined}
      className="mb-6 font-display text-2xl leading-tight text-ink sm:text-3xl"
    >
      {text}
    </h2>
  );
}

export function SectionRenderer({
  section,
  index,
  locale,
}: {
  section: Section;
  index: number;
  locale: Locale;
}) {
  const id = sectionId(section, index);

  switch (section.kind) {
    /* ------------------------------------------------------------------ */
    case 'lede':
      return (
        <Reveal as="section" className="canvas field pt-4 pb-16">
          <div className="col-body">
            {section.body[locale].map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-2xl measure-display font-display text-pretty ${
                  i === 0
                    ? 'text-xl leading-relaxed text-ink sm:text-2xl'
                    : 'mt-5 text-lg leading-relaxed text-ink-soft'
                }`}
              >
                {inline(paragraph)}
              </p>
            ))}
          </div>
        </Reveal>
      );

    /* ------------------------------------------------------------------ */
    case 'prose':
      return (
        <Reveal as="section" className="canvas field py-12">
          <div className="col-margin">
            {section.note ? (
              <aside className="sticky under-masthead border-l-2 border-accent pl-4">
                <p className="text-sm leading-relaxed text-muted text-pretty">
                  {inline(section.note[locale])}
                </p>
              </aside>
            ) : null}
          </div>
          <div className="col-body">
            {section.heading ? <Heading text={section.heading[locale]} id={id} /> : null}
            <div className="prose-body">
              {section.body[locale].map((paragraph, i) => (
                <p key={i}>{inline(paragraph)}</p>
              ))}
            </div>
          </div>
        </Reveal>
      );

    /* ------------------------------------------------------------------ */
    case 'figure': {
      const box = figureBox(section.w, section.h);

      return (
        <Reveal as="section" className="canvas field py-12">
          <figure className="col-body">
            <div
              className="relative overflow-hidden border border-rule bg-paper-sunk"
              style={{ maxWidth: `${box.width}px` }}
            >
              <Image
                src={section.src}
                alt={section.alt[locale]}
                width={section.w ?? 2400}
                height={section.h ?? 1500}
                sizes={box.sizes}
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 measure text-sm leading-relaxed text-muted text-pretty">
              {inline(section.caption[locale])}
              {section.full ? (
                <>
                  {' '}
                  <a
                    href={section.full}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw whitespace-nowrap font-mono text-2xs uppercase tracking-[0.12em] text-ink"
                  >
                    {UI.fullSize[locale]} ↗
                  </a>
                </>
              ) : null}
            </figcaption>
          </figure>
        </Reveal>
      );
    }

    /* ------------------------------------------------------------------ */
    case 'metrics':
      return (
        <Reveal as="section" className="canvas field py-12">
          <div className="col-body">
            {section.heading ? <Heading text={section.heading[locale]} id={id} /> : null}
            <dl className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
              {section.items.map((item) => (
                <div key={item.label.en} className="bg-paper p-5">
                  <dd className="font-display text-3xl text-ink tnum">
                    {item.value}
                    {item.unit ? (
                      <span className="ml-1 text-base text-muted">{item.unit[locale]}</span>
                    ) : null}
                  </dd>
                  <dt className="mt-2 text-sm text-ink-soft">{item.label[locale]}</dt>
                  {item.note ? (
                    <p className="mt-1.5 font-mono text-2xs leading-relaxed text-muted">
                      {item.note[locale]}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      );

    /* ------------------------------------------------------------------ */
    case 'pipeline':
      return (
        <Reveal as="section" className="canvas field py-12">
          <div className="col-body">
            <Heading text={section.heading[locale]} id={id} />
            <div className="prose-body">
              {section.intro[locale].map((paragraph, i) => (
                <p key={i}>{inline(paragraph)}</p>
              ))}
            </div>
            <Pipeline stages={section.stages} locale={locale} />
          </div>
        </Reveal>
      );

    /* ------------------------------------------------------------------ */
    case 'schemas':
      return (
        <Reveal as="section" className="canvas field py-12">
          <div className="col-body">
            <Heading text={section.heading[locale]} id={id} />
            <div className="prose-body">
              {section.intro[locale].map((paragraph, i) => (
                <p key={i}>{inline(paragraph)}</p>
              ))}
            </div>
            <SchemaCases cases={section.cases} locale={locale} />
          </div>
        </Reveal>
      );

    /* ------------------------------------------------------------------ */
    case 'evidence':
      return (
        <Reveal as="section" className="canvas field py-12">
          <div className="col-body">
            <Heading text={section.heading[locale]} id={id} />
            <div className="prose-body">
              {section.intro[locale].map((paragraph, i) => (
                <p key={i}>{inline(paragraph)}</p>
              ))}
            </div>
            <EvidenceLedger items={section.items} locale={locale} />
          </div>
        </Reveal>
      );

    /* ------------------------------------------------------------------ */
    case 'table':
      return (
        <Reveal as="section" className="canvas field py-12">
          <div className="col-body">
            {section.heading ? <Heading text={section.heading[locale]} id={id} /> : null}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr>
                    {section.head.map((cell) => (
                      <th
                        key={cell.en}
                        scope="col"
                        className="border-b border-rule-strong py-2.5 pr-6 font-mono text-2xs font-medium uppercase tracking-[0.12em] text-muted"
                      >
                        {cell[locale]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="border-b border-rule py-3 pr-6 align-top leading-relaxed text-ink-soft"
                        >
                          {inline(cell[locale])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.caption ? (
              <p className="mt-3 measure text-sm text-muted">{section.caption[locale]}</p>
            ) : null}
          </div>
        </Reveal>
      );

    /* ------------------------------------------------------------------ */
    case 'quote':
      return (
        <Reveal as="section" className="canvas field py-12">
          <blockquote className="col-body border-l-2 border-accent pl-6">
            <p className="max-w-2xl measure-display font-display text-xl leading-relaxed text-ink text-pretty">
              {inline(section.body[locale])}
            </p>
            {section.cite ? (
              <cite className="mt-3 block font-mono text-2xs not-italic text-muted">
                {section.cite[locale]}
              </cite>
            ) : null}
          </blockquote>
        </Reveal>
      );

    /* ------------------------------------------------------------------ */
    case 'refs':
      return (
        <Reveal as="section" className="canvas field py-12">
          <div className="col-body">
            <Heading text={section.heading[locale]} id={id} />
            <ol className="space-y-3 border-t border-rule pt-5">
              {section.items.map((item, i) => (
                <li key={i} className="flex measure gap-4 text-sm leading-relaxed text-ink-soft">
                  <span className="font-mono text-2xs text-muted tnum">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-draw hover:text-ink"
                      >
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      );
  }
}
