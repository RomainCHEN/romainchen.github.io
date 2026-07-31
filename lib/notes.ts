import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import type { Locale } from '@/content/types';

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');

export interface Note {
  slug: string;
  locale: Locale;
  title: string;
  date: string;
  summary: string;
  html: string;
  readingMinutes: number;
}

interface NoteFile {
  slug: string;
  locale: Locale;
  file: string;
}

/**
 * Notes are plain Markdown, one file per language: `slug.en.md`, `slug.zh.md`.
 * The section disappears from navigation entirely when the directory is empty,
 * because an empty blog is worse than no blog.
 */
function listFiles(): NoteFile[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    .filter((name) => name.endsWith('.md'))
    .flatMap((name) => {
      const match = /^(.+)\.(en|zh)\.md$/.exec(name);
      if (!match) return [];
      return [{ slug: match[1], locale: match[2] as Locale, file: name }];
    });
}

/** Headings become their own anchor links; the id comes from rehype-slug. */
const AUTOLINK: AutolinkOptions = {
  behavior: 'wrap',
  properties: { className: ['no-underline'] },
};

async function render(markdown: string): Promise<string> {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, AUTOLINK)
    .use(rehypeStringify)
    .process(markdown);
  return String(processed);
}

function estimateMinutes(text: string, locale: Locale): number {
  // CJK reads by character count, Latin by word count. Both rounded up to 1.
  const count =
    locale === 'zh'
      ? (text.match(/[\u4e00-\u9fff]/g) ?? []).length
      : text.split(/\s+/).filter(Boolean).length;
  const perMinute = locale === 'zh' ? 400 : 220;
  return Math.max(1, Math.round(count / perMinute));
}

export async function getNotes(locale: Locale): Promise<Note[]> {
  const files = listFiles().filter((f) => f.locale === locale);

  const notes = await Promise.all(
    files.map(async ({ slug, file }) => {
      const raw = fs.readFileSync(path.join(NOTES_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        locale,
        title: String(data.title ?? slug),
        date: String(data.date ?? ''),
        summary: String(data.summary ?? ''),
        html: await render(content),
        readingMinutes: estimateMinutes(content, locale),
      } satisfies Note;
    }),
  );

  return notes.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getNote(locale: Locale, slug: string): Promise<Note | undefined> {
  const notes = await getNotes(locale);
  return notes.find((n) => n.slug === slug);
}

/** Slugs that exist in at least one language, for generateStaticParams. */
export function noteSlugs(): string[] {
  return [...new Set(listFiles().map((f) => f.slug))];
}

export function hasNotes(): boolean {
  return listFiles().length > 0;
}
