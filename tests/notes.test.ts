import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { getNote, getNotes, hasNotes, noteSlugs } from '@/lib/notes';
import { LOCALES } from '@/content/types';

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');

describe('notes', () => {
  /**
   * `output: export` cannot prerender a dynamic route with no params, so an
   * empty notes directory breaks `next build` with a confusing message. This
   * test turns that into a clear one.
   */
  it('has at least one note, or the static export of /notes/[slug] will fail', () => {
    expect(
      hasNotes(),
      'content/notes is empty. Either add a note, or delete app/[locale]/notes/ entirely — a dynamic route with zero params cannot be statically exported.',
    ).toBe(true);
  });

  it('provides every slug in both languages', async () => {
    for (const slug of noteSlugs()) {
      for (const locale of LOCALES) {
        const note = await getNote(locale, slug);
        expect(note, `${slug}.${locale}.md is missing`).toBeDefined();
      }
    }
  });

  it('gives every note a title, date and summary', async () => {
    for (const locale of LOCALES) {
      for (const note of await getNotes(locale)) {
        expect(note.title.length).toBeGreaterThan(4);
        expect(note.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(note.summary.length).toBeGreaterThan(10);
        expect(note.readingMinutes).toBeGreaterThan(0);
      }
    }
  });

  it('renders markdown to html with heading anchors', async () => {
    const notes = await getNotes('en');
    expect(notes.length).toBeGreaterThan(0);
    const html = notes[0].html;
    expect(html).toContain('<h2');
    expect(html).toContain('id=');
    expect(html).toContain('<p>');
  });

  it('sorts newest first', async () => {
    const dates = (await getNotes('en')).map((n) => n.date);
    expect([...dates].sort().reverse()).toEqual(dates);
  });

  it('only contains files matching slug.locale.md', () => {
    if (!fs.existsSync(NOTES_DIR)) return;
    const stray = fs
      .readdirSync(NOTES_DIR)
      .filter((name) => !name.startsWith('.'))
      .filter((name) => !/^.+\.(en|zh)\.md$/.test(name));
    expect(stray).toEqual([]);
  });
});
