/**
 * Exports every bilingual string on the site into one Markdown file, English
 * and Chinese side by side, for a copy editor working outside the codebase.
 *
 *   npm run copy -- [out.md]
 *
 * Each entry carries the source file and the path to the value inside it, so
 * an edit made in the Markdown can be carried back exactly. Content modules are
 * walked as data; the handful of strings written inline in page components are
 * read out of the source with the TypeScript parser and listed with their line.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { PROJECTS } from '../content/projects';
import { ABOUT_BODY, ABOUT_LEDE, CURRENTLY } from '../content/about';
import { CV_SECTIONS, SKILLS, WRITING_MEDIA } from '../content/cv';
import { RESEARCH_INTERESTS, ROLE_LINE, TAGLINE, UI } from '../content/site';

const ROOT = process.cwd();
const OUT = process.argv[2] ?? path.join(ROOT, 'site-copy.md');

type Pair = { trail: string; en: unknown; zh: unknown };

/** Every object with both an `en` and a `zh` key, in document order. */
function pairs(value: unknown, trail: string, out: Pair[] = []): Pair[] {
  if (value === null || typeof value !== 'object') return out;
  if (Array.isArray(value)) {
    value.forEach((v, i) => pairs(v, `${trail}[${i}]`, out));
    return out;
  }
  const rec = value as Record<string, unknown>;
  if ('en' in rec && 'zh' in rec) {
    out.push({ trail, en: rec.en, zh: rec.zh });
    return out;
  }
  for (const [k, v] of Object.entries(rec)) pairs(v, `${trail}.${k}`, out);
  return out;
}

/** Strings a project carries untranslated, such as its title, worth seeing in context. */
function plain(value: unknown, trail: string, out: { trail: string; text: string }[] = []) {
  if (typeof value === 'string') {
    out.push({ trail, text: value });
    return out;
  }
  if (value === null || typeof value !== 'object') return out;
  if (Array.isArray(value)) {
    value.forEach((v, i) => plain(v, `${trail}[${i}]`, out));
    return out;
  }
  const rec = value as Record<string, unknown>;
  if ('en' in rec && 'zh' in rec) return out;
  for (const [k, v] of Object.entries(rec)) plain(v, `${trail}.${k}`, out);
  return out;
}

/** A value as Markdown: paragraph arrays become numbered paragraphs. */
function render(value: unknown): string {
  if (Array.isArray(value)) {
    if (value.length === 0) return '_（空）_';
    return value.map((v, i) => `${i + 1}. ${String(v)}`).join('\n\n');
  }
  return String(value);
}

function quote(text: string): string {
  return text
    .split('\n')
    .map((l) => (l ? `> ${l}` : '>'))
    .join('\n');
}

function block(p: Pair): string {
  const multi = Array.isArray(p.en);
  if (multi) {
    return `#### \`${p.trail}\`\n\n**EN**\n\n${quote(render(p.en))}\n\n**ZH**\n\n${quote(render(p.zh))}\n`;
  }
  return `#### \`${p.trail}\`\n\n- **EN**: ${render(p.en)}\n- **ZH**: ${render(p.zh)}\n`;
}

/**
 * Strings written inside page components. The parser finds every pair of the
 * form `locale === 'en' ? '…' : '…'` and every `{ en: […], zh: […] }` object
 * literal declared in the file, so nothing depends on line numbers.
 */
function inlineFrom(file: string): { line: number; en: string; zh: string }[] {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const found: { line: number; en: string; zh: string }[] = [];
  const text = (n: ts.Node): string | null => {
    if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
    if (ts.isTemplateExpression(n)) return n.getText(sf).slice(1, -1);
    if (ts.isArrayLiteralExpression(n)) {
      const parts = n.elements.map(text);
      return parts.every((p) => p !== null) ? parts.map((p, i) => `${i + 1}. ${p}`).join('\n\n') : null;
    }
    return null;
  };
  const visit = (n: ts.Node) => {
    if (
      ts.isConditionalExpression(n) &&
      ts.isBinaryExpression(n.condition) &&
      n.condition.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken &&
      n.condition.left.getText(sf) === 'locale'
    ) {
      const which = text(n.condition.right);
      const a = text(n.whenTrue);
      const b = text(n.whenFalse);
      if (which && a !== null && b !== null) {
        const line = sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1;
        found.push(which === 'en' ? { line, en: a, zh: b } : { line, en: b, zh: a });
      }
    }
    if (ts.isObjectLiteralExpression(n)) {
      const get = (key: string) =>
        n.properties.find(
          (p): p is ts.PropertyAssignment =>
            ts.isPropertyAssignment(p) && p.name.getText(sf) === key,
        );
      const en = get('en');
      const zh = get('zh');
      if (en && zh && n.properties.length === 2) {
        const a = text(en.initializer);
        const b = text(zh.initializer);
        if (a !== null && b !== null) {
          const line = sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1;
          found.push({ line, en: a, zh: b });
        }
      }
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  // The same ternary also picks class names and separators per locale; those
  // are layout, not copy.
  const isClassList = (s: string) => /(^|\s)(sm|lg|max-w|text|break|whitespace)[:\-[]/.test(s);
  const isProse = (s: string) => /[A-Za-z一-鿿]{2}/.test(s) && !isClassList(s);
  return found.filter((f) => isProse(f.en) && isProse(f.zh));
}

const out: string[] = [];
let count = 0;
const section = (title: string, source: string, list: Pair[]) => {
  out.push(`## ${title}\n\n源文件：\`${source}\`\n`);
  for (const p of list) {
    out.push(block(p));
    count += 1;
  }
};

out.push(
  [
    '# 全站中英文文本对照',
    '',
    `导出时间：${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC（由 \`npm run copy\` 生成）`,
    '',
    '## 修改须知',
    '',
    '每一条的标题是它在源文件里的位置，例如 `projects[0].sections[3].body`。改完后按这个位置把文字放回对应文件；位置不要改，没改的条目可以原样留着。',
    '',
    '以下是站点的硬性规则，改写时必须遵守（`npm test` 和 `npm run zh` 会检查）：',
    '',
    '- 每条都要中英文齐全。段落数组（编号 1. 2. 3.）两种语言的段数必须相同。',
    '- 中英文都不用破折号（—— 或 —）。英文的短横 – 只用于 Human–AI 这类复合词和数字区间。',
    '- 中文用全角标点；中文与英文、数字之间留一个空格。',
    '- 中文单句不超过 85 字，一段不超过 220 字；英文一段不超过 90 个词。',
    '- 不要用「**加粗短语**。」开段。正文里的 `**…**` 是强调、`*…*` 是斜体、反引号是代码，保留这些标记。',
    '- 不改数字、统计量、引文、人名、片名，不新增研究结论或数据。证据状态（已投入使用、已有小规模结果等）不能升级。',
    '- 不写首页大字标语以外的口号式句子。',
    '',
    '`projects[*].sections[*].blocks` 里的英文是源码原文引用，不翻译、不改写，所以没有列出。',
    '',
  ].join('\n'),
);

section('站点通用：标语、身份、研究兴趣', 'content/site.ts', [
  ...pairs(TAGLINE, 'TAGLINE'),
  ...pairs(ROLE_LINE, 'ROLE_LINE'),
  ...pairs(RESEARCH_INTERESTS, 'RESEARCH_INTERESTS'),
]);

section('界面文字（导航、按钮、标签）', 'content/site.ts', pairs(UI, 'UI'));

section('About 页', 'content/about.ts', [
  ...pairs(ABOUT_LEDE, 'ABOUT_LEDE'),
  ...pairs(ABOUT_BODY, 'ABOUT_BODY'),
  ...pairs(CURRENTLY, 'CURRENTLY'),
]);

section('简历（网页版与 PDF 共用）', 'content/cv.ts', [
  ...pairs(CV_SECTIONS, 'CV_SECTIONS'),
  ...pairs(SKILLS, 'SKILLS'),
  ...pairs(WRITING_MEDIA, 'WRITING_MEDIA'),
]);

const PROJECT_FILES: Record<string, string> = {
  papercraft: 'content/projects/papercraft.ts',
  transcreation: 'content/projects/transcreation.ts',
  'ielts-coach': 'content/projects/ielts-coach.ts',
};

PROJECTS.forEach((project, i) => {
  const file = PROJECT_FILES[project.slug] ?? `content/projects/${project.slug}.ts`;
  out.push(`## 案例：${project.title}\n\n源文件：\`${file}\`\n`);
  const untranslated = plain(project, `projects[${i}]`).filter(
    (s) => /title$|\.(source|human|machine)$/.test(s.trail) && !/\.src$|href|slug/.test(s.trail),
  );
  if (untranslated.length) {
    out.push('不区分语言的字段（片名、标题等，仅供参考）：\n');
    out.push(untranslated.map((s) => `- \`${s.trail}\`: ${s.text}`).join('\n') + '\n');
  }
  for (const p of pairs(project, `projects[${i}]`)) {
    out.push(block(p));
    count += 1;
  }
});

const INLINE_FILES = [
  'app/[locale]/page.tsx',
  'app/[locale]/work/page.tsx',
  'app/[locale]/about/page.tsx',
  'app/[locale]/cv/page.tsx',
  'components/SchemaCases.tsx',
];

out.push('## 写在页面代码里的文字\n\n这些不在 `content/` 里，改的时候按文件和行号找。\n');
for (const file of INLINE_FILES) {
  const found = inlineFrom(file);
  if (!found.length) continue;
  out.push(`### \`${file}\`\n`);
  for (const f of found) {
    const multi = f.en.includes('\n');
    out.push(
      multi
        ? `#### 第 ${f.line} 行\n\n**EN**\n\n${quote(f.en)}\n\n**ZH**\n\n${quote(f.zh)}\n`
        : `#### 第 ${f.line} 行\n\n- **EN**: ${f.en}\n- **ZH**: ${f.zh}\n`,
    );
    count += 1;
  }
}

fs.writeFileSync(OUT, out.join('\n'));
console.log(`${count} entries → ${path.relative(ROOT, OUT) || OUT}`);
