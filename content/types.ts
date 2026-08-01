/**
 * Content model.
 *
 * Every piece of prose on this site is bilingual. Rather than sprinkling
 * translation keys through the components, content is authored as structured,
 * typed data with both languages side by side. That keeps the two versions
 * from drifting apart and lets a test assert parity.
 */

export const LOCALES = ['en', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

/** A value that exists in both languages. */
export type L<T = string> = Record<Locale, T>;

/** Paragraph runs, so prose blocks stay structured rather than one HTML blob. */
export type Paragraphs = L<string[]>;

/**
 * How much empirical backing a claim has. Used to label every research
 * component honestly: a system that is built is not a system that is
 * evaluated, and the site says so on the page rather than in a footnote.
 */
export type Evidence =
  /** Built, deployed, in real use. */
  | 'shipped'
  /** Built and instrumented, but no data collected yet. */
  | 'instrumented'
  /** Instruments and protocol written; study not yet run. */
  | 'designed'
  /** Specified in the roadmap, not built. */
  | 'planned';

export type Section =
  | { kind: 'prose'; heading?: L; body: Paragraphs; note?: L }
  | { kind: 'lede'; body: Paragraphs }
  | {
      kind: 'figure';
      src: string;
      alt: L;
      caption: L;
      /** Break out of the body column into the full canvas. */
      wide?: boolean;
      /** Intrinsic pixel size of the file. */
      w?: number;
      h?: number;
      /**
       * Largest size in CSS pixels the image is allowed to be displayed at.
       *
       * Keep this at or below half of `w`. A high-density screen asks for two
       * physical pixels per CSS pixel, so a 1600px file stretched across a
       * 1200px column is visibly soft, which is exactly how the first version
       * of this site shipped.
       */
      maxW?: number;
      /**
       * Path to a full-resolution version, linked from the caption.
       *
       * Use it when the figure is a crop of a dense document: the crop keeps the
       * type readable on the page, and this lets a reader who wants the whole
       * sheet go and get it.
       */
      full?: string;
    }
  | {
      kind: 'metrics';
      heading?: L;
      items: { value: string; unit?: L; label: L; note?: L }[];
    }
  | {
      kind: 'pipeline';
      heading: L;
      intro: Paragraphs;
      stages: { id: string; title: L; what: L; why: L }[];
    }
  | {
      kind: 'schemas';
      heading: L;
      intro: Paragraphs;
      cases: {
        operation: L;
        load: 1 | 2 | 3 | 4;
        source: string;
        human: string;
        machine: string;
        reading: L;
      }[];
    }
  | {
      kind: 'evidence';
      heading: L;
      intro: Paragraphs;
      items: { label: L; state: Evidence; detail: L }[];
    }
  | {
      kind: 'table';
      heading?: L;
      head: L[];
      rows: L[][];
      caption?: L;
    }
  | {
      kind: 'quote';
      body: L;
      cite?: L;
    }
  | {
      kind: 'refs';
      heading: L;
      items: { text: string; href?: string }[];
    };

export interface ProjectLink {
  label: L;
  href: string;
  /** Rendered as the primary action. */
  primary?: boolean;
}

export interface Project {
  slug: string;
  /** Two-digit index used as a typographic device in listings. */
  index: string;
  title: string;
  subtitle: L;
  /** One line, shown in the index list. */
  blurb: L;
  period: L;
  role: L;
  /** Short kicker describing the kind of work. */
  discipline: L;
  tags: string[];
  hero?: { src: string; alt: L; w?: number; h?: number; maxW?: number; full?: string };
  links: ProjectLink[];
  /** Headline facts, shown as a spec block at the top of the case study. */
  facts: { label: L; value: L }[];
  sections: Section[];
  /** Listed on the index page in reading order. */
  featured: boolean;
}
