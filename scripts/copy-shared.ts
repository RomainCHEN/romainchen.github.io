/**
 * Shared by scripts/export-copy.ts and scripts/import-copy.ts: which content
 * roots hold the site's copy, how a bilingual value is found inside them, and
 * how an entry is written to and read back from the Markdown handoff file.
 */
import { PROJECTS } from '../content/projects';
import { ABOUT_BODY, ABOUT_LEDE, CURRENTLY } from '../content/about';
import { CV_SECTIONS, SKILLS, WRITING_MEDIA } from '../content/cv';
import { RESEARCH_INTERESTS, ROLE_LINE, TAGLINE, UI } from '../content/site';

export type Value = string | string[];
export type Pair = { trail: string; en: Value; zh: Value };

/** Root names as they appear at the head of every trail, with their data. */
export const ROOTS: Record<string, unknown> = {
  TAGLINE,
  ROLE_LINE,
  RESEARCH_INTERESTS,
  UI,
  ABOUT_LEDE,
  ABOUT_BODY,
  CURRENTLY,
  CV_SECTIONS,
  SKILLS,
  WRITING_MEDIA,
  projects: PROJECTS,
};

/** Every object with both an `en` and a `zh` key, in document order. */
export function pairs(value: unknown, trail: string, out: Pair[] = []): Pair[] {
  if (value === null || typeof value !== 'object') return out;
  if (Array.isArray(value)) {
    value.forEach((v, i) => pairs(v, `${trail}[${i}]`, out));
    return out;
  }
  const rec = value as Record<string, unknown>;
  if ('en' in rec && 'zh' in rec) {
    out.push({ trail, en: rec.en as Value, zh: rec.zh as Value });
    return out;
  }
  for (const [k, v] of Object.entries(rec)) pairs(v, `${trail}.${k}`, out);
  return out;
}

/** Every bilingual pair on the site, keyed by trail. */
export function currentPairs(): Map<string, Pair> {
  const all = new Map<string, Pair>();
  for (const [name, value] of Object.entries(ROOTS)) {
    for (const p of pairs(value, name)) all.set(p.trail, p);
  }
  return all;
}

/* -------------------------------------------------------------------------
   Markdown entry format

   One-line values:      - **EN**: text
                         - **ZH**: text
   Paragraph arrays:     **EN**, then a blockquote of numbered paragraphs.
   ------------------------------------------------------------------------- */

const EMPTY = '_（空）_';

export function render(value: Value): string {
  if (Array.isArray(value)) {
    if (value.length === 0) return EMPTY;
    return value.map((v, i) => `${i + 1}. ${v}`).join('\n\n');
  }
  return value;
}

export function quote(text: string): string {
  return text
    .split('\n')
    .map((l) => (l ? `> ${l}` : '>'))
    .join('\n');
}

export function block(heading: string, en: Value, zh: Value): string {
  if (Array.isArray(en)) {
    return `#### ${heading}\n\n**EN**\n\n${quote(render(en))}\n\n**ZH**\n\n${quote(render(zh))}\n`;
  }
  return `#### ${heading}\n\n- **EN**: ${render(en)}\n- **ZH**: ${render(zh)}\n`;
}

const HEAD = /^#### (?:`([^`]+)`|第 (\d+) 行)\s*$/;
const INLINE_FILE = /^### `([^`]+)`/;

function paragraphs(blockText: string): string[] {
  const body = blockText
    .trim()
    .split('\n')
    .map((l) => l.replace(/^> ?/, ''))
    .join('\n')
    .trim();
  if (body === EMPTY || body === '') return [];
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => p.replace(/^\d+\. /, ''));
}

/**
 * Reads a handoff file back. Content entries are keyed by trail; strings
 * written inline in page code are keyed `file:line`.
 */
export function parseCopy(markdown: string): Map<string, { en?: Value; zh?: Value }> {
  const lines = markdown.split('\n');
  const out = new Map<string, { en?: Value; zh?: Value }>();
  let inlineFile: string | null = null;
  let i = 0;
  while (i < lines.length) {
    const file = INLINE_FILE.exec(lines[i]);
    if (file) inlineFile = file[1];
    if (/^#{1,2} /.test(lines[i])) inlineFile = null;
    const head = HEAD.exec(lines[i]);
    if (!head) {
      i += 1;
      continue;
    }
    const key = head[1] ?? `${inlineFile}:${head[2]}`;
    i += 1;
    const body: string[] = [];
    // Any heading ends an entry, including a level-one title: files edited
    // in parts are often concatenated, and each part brings its own title.
    while (i < lines.length && !HEAD.test(lines[i]) && !/^#{1,3} /.test(lines[i])) {
      body.push(lines[i]);
      i += 1;
    }
    const text = body.join('\n');
    const en = /^- \*\*EN\*\*: ?(.*)$/m.exec(text);
    const zh = /^- \*\*ZH\*\*: ?(.*)$/m.exec(text);
    if (en || zh) {
      out.set(key, { en: en?.[1].trim(), zh: zh?.[1].trim() });
      continue;
    }
    const parts = text.split(/^\*\*(EN|ZH)\*\*\s*$/m);
    const entry: { en?: Value; zh?: Value } = {};
    for (let j = 1; j < parts.length - 1; j += 2) {
      entry[parts[j].toLowerCase() as 'en' | 'zh'] = paragraphs(parts[j + 1]);
    }
    out.set(key, entry);
  }
  return out;
}
