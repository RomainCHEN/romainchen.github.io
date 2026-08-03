import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { PROJECTS } from '@/content/projects';
import { CV_SECTIONS, SKILLS, WRITING_MEDIA } from '@/content/cv';
import { ABOUT_BODY, ABOUT_LEDE, CURRENTLY } from '@/content/about';
import { RESEARCH_INTERESTS, ROLE_LINE, TAGLINE, UI } from '@/content/site';
import { LOCALES, type Locale } from '@/content/types';

/**
 * House style.
 *
 * The em dash and the Chinese 破折号 are the most recognisable tell of
 * machine-written prose, so they are banned outright and the ban is enforced
 * here rather than trusted to memory. Rewrite the sentence instead: a comma, a
 * colon, or two sentences will almost always read better.
 *
 * The en dash survives in two narrow roles only, as a compound joiner in
 * "Human–AI" and in numeric ranges, both of which are ordinary typography
 * rather than a stylistic habit.
 */

/** Every string reachable from the content modules, with a path for reporting. */
function walk(value: unknown, trail: string, out: { trail: string; text: string }[] = []) {
  if (typeof value === 'string') {
    out.push({ trail, text: value });
    return out;
  }
  if (value === null || typeof value !== 'object') return out;
  if (Array.isArray(value)) {
    value.forEach((item, i) => walk(item, `${trail}[${i}]`, out));
    return out;
  }
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    walk(child, `${trail}.${key}`, out);
  }
  return out;
}

const SOURCES: [string, unknown][] = [
  ['projects', PROJECTS],
  ['cv', CV_SECTIONS],
  ['cv.writing', WRITING_MEDIA],
  ['skills', SKILLS],
  ['about.lede', ABOUT_LEDE],
  ['about.body', ABOUT_BODY],
  ['about.currently', CURRENTLY],
  ['site.tagline', TAGLINE],
  ['site.role', ROLE_LINE],
  ['site.interests', RESEARCH_INTERESTS],
  ['site.ui', UI],
];

const ALL = SOURCES.flatMap(([name, value]) => walk(value, name));

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');
const NOTE_FILES = fs.existsSync(NOTES_DIR)
  ? fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.md'))
  : [];

describe('house style', () => {
  it('has strings to check', () => {
    expect(ALL.length).toBeGreaterThan(200);
  });

  it('uses no em dash anywhere in content', () => {
    const offenders = ALL.filter((s) => s.text.includes('\u2014')).map((s) => s.trail);
    expect(offenders).toEqual([]);
  });

  it('uses no em dash in the notes', () => {
    const offenders = NOTE_FILES.filter((file) =>
      fs.readFileSync(path.join(NOTES_DIR, file), 'utf8').includes('\u2014'),
    );
    expect(offenders).toEqual([]);
  });

  it('only allows the en dash as a compound joiner or a numeric range', () => {
    const bad: string[] = [];
    for (const { trail, text } of ALL) {
      for (const match of text.matchAll(/(.{0,12})\u2013(.{0,12})/g)) {
        const [, before, after] = match;
        const compound = /[A-Za-z]$/.test(before) && /^[A-Za-z]/.test(after);
        const range = /\d\s?$/.test(before) && /^\s?\d/.test(after);
        if (!compound && !range) bad.push(`${trail}: ...${match[0]}...`);
      }
    }
    expect(bad).toEqual([]);
  });

  /**
   * Chinese copy should read as Chinese, not as English with the words swapped.
   * These are the two mechanical tells that are cheap to catch: a Latin comma or
   * semicolon left inside a Chinese sentence, and the Chinese em dash.
   */
  describe('Chinese copy', () => {
    const zh = ALL.filter((s) => /\.zh(\.|\[|$)/.test(s.trail) || s.trail.endsWith('.zh'));

    it('is actually being checked', () => {
      expect(zh.length).toBeGreaterThan(80);
    });

    it('uses no 破折号', () => {
      const offenders = zh
        .filter((s) => s.text.includes('\u2014\u2014') || s.text.includes('\u2014'))
        .map((s) => s.trail);
      expect(offenders).toEqual([]);
    });

    it('does not leave Latin commas between Chinese characters', () => {
      const offenders = zh
        .filter((s) => /[\u4e00-\u9fff]\s*[,;]\s*[\u4e00-\u9fff]/.test(s.text))
        .map((s) => `${s.trail}: ${s.text.slice(0, 40)}`);
      expect(offenders).toEqual([]);
    });

    it('does not end a Chinese sentence with a Latin full stop', () => {
      const offenders = zh
        .filter((s) => /[\u4e00-\u9fff]\.$/.test(s.text.trim()))
        .map((s) => s.trail);
      expect(offenders).toEqual([]);
    });
  });

  /** A paragraph nobody will read is a paragraph that failed. */
  describe('readability', () => {
    function paragraphs(locale: Locale) {
      return ALL.filter((s) => s.trail.endsWith(`.${locale}[0]`) || s.trail.includes(`.${locale}[`));
    }

    it('keeps Chinese paragraphs under 220 characters', () => {
      const long = paragraphs('zh')
        .filter((s) => s.text.length > 220)
        .map((s) => `${s.trail} (${s.text.length})`);
      expect(long).toEqual([]);
    });

    it('keeps English paragraphs under 90 words', () => {
      const long = paragraphs('en')
        .filter((s) => s.text.split(/\s+/).filter(Boolean).length > 90)
        .map((s) => `${s.trail} (${s.text.split(/\s+/).length} words)`);
      expect(long).toEqual([]);
    });
  });

  it('covers both languages', () => {
    for (const locale of LOCALES) {
      expect(ALL.some((s) => s.trail.includes(`.${locale}`))).toBe(true);
    }
  });
});
