/**
 * Writes edited copy from a Markdown handoff file back into content/.
 *
 *   npm run copy:import -- edited.md [--only zh|en] [--skip trail,trail] [--dry]
 *
 * The file is the one `npm run copy` produces, edited outside the codebase.
 * Each entry is matched to its value by trail. Only entries whose text actually
 * changed are written, and each is replaced in the source by finding the exact
 * current string literal, so formatting, comments and everything not in the
 * file stay as they were. An entry whose current text cannot be found exactly
 * once in its source file is reported and left alone rather than guessed at.
 *
 * Strings written inline in page code (keyed by file and line) are listed but
 * never written: they sit next to logic and are edited by hand.
 */
import fs from 'node:fs';
import path from 'node:path';
import { currentPairs, parseCopy } from './copy-shared';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
if (!file) throw new Error('usage: npm run copy:import -- edited.md [--only zh|en] [--skip a,b] [--dry]');
const flag = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args[i + 1];
};
const only = flag('only') as 'en' | 'zh' | undefined;
const skip = new Set((flag('skip') ?? '').split(',').filter(Boolean));
const dry = args.includes('--dry');

/** Which source file holds a trail. */
function sourceOf(trail: string): string {
  const head = trail.split(/[.[]/)[0];
  if (head === 'projects') {
    const index = Number(/^projects\[(\d+)\]/.exec(trail)?.[1]);
    const slugs = ['papercraft', 'transcreation', 'ielts-coach'];
    return `content/projects/${slugs[index]}.ts`;
  }
  if (['TAGLINE', 'ROLE_LINE', 'RESEARCH_INTERESTS', 'UI'].includes(head)) return 'content/site.ts';
  if (['ABOUT_LEDE', 'ABOUT_BODY', 'CURRENTLY'].includes(head)) return 'content/about.ts';
  return 'content/cv.ts';
}

/** A TypeScript single-quoted literal for a string, as the content files write them. */
function literal(s: string): string {
  return `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

/** The forms a string may already take in source: single-quoted or double-quoted. */
function forms(s: string): string[] {
  return [literal(s), `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`];
}

const edited = parseCopy(fs.readFileSync(file, 'utf8'));
const current = currentPairs();
const sources = new Map<string, string>();
const read = (f: string) => {
  if (!sources.has(f)) sources.set(f, fs.readFileSync(path.join(ROOT, f), 'utf8'));
  return sources.get(f)!;
};

const applied: string[] = [];
const refused: string[] = [];
const inline: string[] = [];
let unchanged = 0;

for (const [trail, next] of edited) {
  if (!current.has(trail)) {
    if (/:\d+$/.test(trail)) inline.push(trail);
    else refused.push(`${trail}: not a field on the site`);
    continue;
  }
  if (skip.has(trail)) continue;
  const now = current.get(trail)!;
  for (const lang of ['en', 'zh'] as const) {
    if (only && lang !== only) continue;
    const want = next[lang];
    if (want === undefined) continue;
    const have = now[lang];
    const a: string[] = Array.isArray(have) ? have : [have];
    const b: string[] = Array.isArray(want) ? want : [want];
    if (Array.isArray(have) !== Array.isArray(want) || a.length !== b.length) {
      refused.push(`${trail}.${lang}: paragraph count ${a.length} → ${b.length}`);
      continue;
    }
    if (a.every((s, i) => s === b[i])) {
      unchanged += 1;
      continue;
    }
    const src = sourceOf(trail);
    let text = read(src);
    let ok = true;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] === b[i]) continue;
      const hit = forms(a[i]).find((f) => text.split(f).length === 2);
      if (!hit) {
        refused.push(`${trail}.${lang}[${i}]: current text not found exactly once in ${src}`);
        ok = false;
        break;
      }
      text = text.replace(hit, literal(b[i]));
    }
    if (ok) {
      sources.set(src, text);
      applied.push(`${trail}.${lang}`);
    }
  }
}

if (!dry) for (const [f, text] of sources) fs.writeFileSync(path.join(ROOT, f), text);

console.log(`${dry ? '[dry run] ' : ''}applied ${applied.length}, unchanged ${unchanged}, refused ${refused.length}`);
for (const r of refused) console.log(`  refused  ${r}`);
if (inline.length) console.log(`  inline strings are edited by hand: ${inline.join(', ')}`);
