import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { PROJECTS, getProject, projectSlugs } from '@/content/projects';
import { CV_SECTIONS, SKILLS } from '@/content/cv';
import { ABOUT_BODY, ABOUT_LEDE, CURRENTLY } from '@/content/about';
import { RESEARCH_INTERESTS, SOCIAL, TAGLINE, UI } from '@/content/site';
import { LOCALES } from '@/content/types';

const PUBLIC = path.join(process.cwd(), 'public');

/**
 * Walks any nested content value looking for objects that carry both an `en`
 * and a `zh` key, and asserts neither side is empty. This is the guard against
 * the failure mode of a bilingual site: one language quietly drifting behind.
 */
function collectBilingual(
  value: unknown,
  trail: string,
  found: { trail: string; en: unknown; zh: unknown }[] = [],
): { trail: string; en: unknown; zh: unknown }[] {
  if (value === null || typeof value !== 'object') return found;

  if (Array.isArray(value)) {
    value.forEach((item, i) => collectBilingual(item, `${trail}[${i}]`, found));
    return found;
  }

  const record = value as Record<string, unknown>;
  const keys = Object.keys(record);
  if (keys.includes('en') && keys.includes('zh')) {
    found.push({ trail, en: record.en, zh: record.zh });
  }

  for (const key of keys) {
    collectBilingual(record[key], `${trail}.${key}`, found);
  }
  return found;
}

function isEmpty(value: unknown): boolean {
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return false; // empty arrays are allowed (e.g. award entries)
  return value === undefined || value === null;
}

describe('bilingual parity', () => {
  const sources: [string, unknown][] = [
    ['projects', PROJECTS],
    ['cv', CV_SECTIONS],
    ['skills', SKILLS],
    ['about.lede', ABOUT_LEDE],
    ['about.body', ABOUT_BODY],
    ['about.currently', CURRENTLY],
    ['site.tagline', TAGLINE],
    ['site.interests', RESEARCH_INTERESTS],
    ['site.ui', UI],
  ];

  for (const [name, value] of sources) {
    it(`${name} has both languages everywhere`, () => {
      const entries = collectBilingual(value, name);
      expect(entries.length).toBeGreaterThan(0);

      const missing = entries.filter((e) => isEmpty(e.en) || isEmpty(e.zh));
      expect(missing.map((m) => m.trail)).toEqual([]);
    });
  }

  it('paragraph arrays have the same number of paragraphs in both languages', () => {
    const entries = collectBilingual(PROJECTS, 'projects');
    const mismatched = entries
      .filter((e) => Array.isArray(e.en) && Array.isArray(e.zh))
      .filter((e) => (e.en as unknown[]).length !== (e.zh as unknown[]).length)
      .map((e) => e.trail);
    expect(mismatched).toEqual([]);
  });
});

describe('projects', () => {
  it('have unique slugs and indices', () => {
    expect(new Set(projectSlugs()).size).toBe(PROJECTS.length);
    expect(new Set(PROJECTS.map((p) => p.index)).size).toBe(PROJECTS.length);
  });

  it('resolve by slug', () => {
    for (const slug of projectSlugs()) {
      expect(getProject(slug)?.slug).toBe(slug);
    }
    expect(getProject('nope')).toBeUndefined();
  });

  it('reference images that exist on disk', () => {
    const missing: string[] = [];
    for (const project of PROJECTS) {
      const paths = [
        ...(project.hero ? [project.hero.src] : []),
        ...project.sections.flatMap((s) => (s.kind === 'figure' ? [s.src] : [])),
      ];
      for (const src of paths) {
        if (!fs.existsSync(path.join(PUBLIC, src))) missing.push(`${project.slug}: ${src}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it('only link out over https, or to a local file that exists', () => {
    const bad: string[] = [];
    for (const project of PROJECTS) {
      for (const link of project.links) {
        if (link.href.startsWith('https://')) continue;
        if (link.href.startsWith('/')) {
          const target = path.join(PUBLIC, link.href);
          if (!fs.existsSync(target)) bad.push(`${project.slug}: missing ${link.href}`);
          continue;
        }
        bad.push(`${project.slug}: ${link.href}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('give every figure a non-decorative alt text', () => {
    for (const project of PROJECTS) {
      for (const section of project.sections) {
        if (section.kind !== 'figure') continue;
        for (const locale of LOCALES) {
          expect(section.alt[locale].length).toBeGreaterThan(20);
        }
      }
    }
  });
});

/**
 * Honesty guards.
 *
 * These encode the evidence status confirmed with the site owner in July 2026.
 * If a future edit upgrades one of these claims, the test fails and forces the
 * change to be deliberate rather than accidental.
 */
describe('evidence claims', () => {
  function stateOf(slug: string, labelFragment: string) {
    const project = getProject(slug);
    const section = project?.sections.find((s) => s.kind === 'evidence');
    if (!section || section.kind !== 'evidence') return undefined;
    return section.items.find((item) => item.label.en.includes(labelFragment))?.state;
  }

  it('does not claim the PaperCraft teacher study has been run', () => {
    expect(stateOf('papercraft', 'usability and efficacy study')).toBe('designed');
  });

  it('does not claim intervention or item data exists', () => {
    expect(stateOf('papercraft', 'intervention metric')).toBe('instrumented');
    expect(stateOf('papercraft', 'item analysis')).toBe('instrumented');
  });

  it('does not claim IELTS Coach improves outcomes', () => {
    expect(stateOf('ielts-coach', 'improve retention or scores')).toBe('planned');
  });

  it('does not claim the transcreation comparison is complete', () => {
    expect(stateOf('transcreation', 'Human-machine comparison')).toBe('planned');
  });

  it('never states a number for an unrun study', () => {
    const forbidden = /SUS\s*(score|=|:)?\s*\d|\bn\s*=\s*[1-9]/i;
    for (const project of PROJECTS) {
      const text = JSON.stringify(project);
      expect(text, `${project.slug} appears to report study numbers`).not.toMatch(forbidden);
    }
  });
});

describe('social links', () => {
  it('are all https', () => {
    for (const link of SOCIAL) {
      expect(link.href.startsWith('https://'), link.href).toBe(true);
    }
  });
});
