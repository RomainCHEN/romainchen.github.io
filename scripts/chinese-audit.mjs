#!/usr/bin/env node
/**
 * 中文文风检测。
 *
 * 依据 chinese-writing 规范（简单、人性化、清晰）把可机械检查的条目变成断言。
 * 判断不了的留给人，能判断的不靠记性。
 *
 *   node scripts/chinese-audit.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const CJK = '\\u4e00-\\u9fff';

const RULES = [
  {
    id: '填充短语',
    why: '开场白和拐杖词，删掉句子照样成立',
    test: (t) =>
      [...t.matchAll(/(值得注意的是|需要指出的是|首先，|其次，|最后，|总而言之|综上所述|不难看出|众所周知|事实上，|此外，)/g)].map(
        (m) => m[1],
      ),
  },
  {
    id: '中英文之间缺空格',
    why: '中文与英文、数字之间应有一个空格',
    test: (t) => {
      const hits = [];
      // 允许全角标点、括号紧贴，允许常见的紧贴单位
      const re = new RegExp(`([${CJK}])([A-Za-z0-9])|([A-Za-z0-9])([${CJK}])`, 'g');
      for (const m of t.matchAll(re)) {
        const seg = t.slice(Math.max(0, m.index - 4), m.index + 6);
        if (/[，。：；、（）「」“”？！%]/.test(m[0])) continue;
        hits.push(seg);
      }
      return hits;
    },
  },
  {
    id: '三段式节奏',
    why: '事实上的三项枚举没问题，但一段里连着出现两次就成了公式',
    test: (t) => {
      const matches = [...t.matchAll(new RegExp(`[${CJK}]{2,8}、[${CJK}]{2,8}(?:和|与|以及)[${CJK}]{2,8}`, 'g'))];
      // 同一串枚举里的重叠匹配算一次：四项枚举本来就合规，不该被当成两个三项。
      const distinct = [];
      let end = -1;
      for (const m of matches) {
        // 前后紧邻顿号，说明这只是更长枚举里的一段。四项、五项枚举本身合规，
        // 不该被切成两个「三项」来告警。
        const before = t[m.index - 1];
        const after = t[m.index + m[0].length];
        if (before === '、' || after === '、') continue;
        if (m.index > end) distinct.push(m[0]);
        end = m.index + m[0].length;
      }
      return distinct.length >= 2 ? distinct : [];
    },
  },
  {
    id: '否定式排比',
    why: '「不是……而是……」「不仅……而且……」是模板句式',
    test: (t) => [...t.matchAll(/(不仅仅?是[^。；]{0,24}(?:而是|而且)|不是[^。；]{0,20}而是)/g)].map((m) => m[1]),
  },
  {
    id: '系动词回避',
    why: '「作为……」代替「是」，读起来像公文',
    test: (t) => [...t.matchAll(new RegExp(`作为[${CJK}]{2,12}(?:，|的证明|的标志)`, 'g'))].map((m) => m[0]),
  },
  {
    id: '夸大意义',
    why: '让事实自己说话',
    test: (t) =>
      [...t.matchAll(/(标志着|奠定[了]?基础|开创性|里程碑|至关重要|意义深远|彰显[了]?|反映[了]出?|极大地)/g)].map((m) => m[1]),
  },
  {
    id: '被动堆叠',
    why: '一句里多个「被」，改用主动语态',
    test: (t) => {
      const n = (t.match(/被/g) ?? []).length;
      return n >= 3 ? [`出现 ${n} 次「被」`] : [];
    },
  },
  {
    id: '句子过长',
    why: '一句只讲一个意思；超过 60 字应拆开',
    test: (t) => {
      // 以英文为主的句子（正文是英文、只夹了中文片名）不按中文长度判断；
      // 含 · 或反引号的是表格里的并列项，不是句子。
      const cjkCount = (t.match(new RegExp(`[${CJK}]`, 'g')) ?? []).length;
      if (cjkCount / t.length < 0.3) return [];
      if (/[·`]/.test(t)) return [];
      return t
        .split(/[。！？；：]/)
        .map((s) => s.trim())
        .filter((s) => new RegExp(`[${CJK}]`).test(s) && s.length > 60)
        .map((s) => `${s.length} 字：${s.slice(0, 24)}…`);
    },
  },
  {
    id: '冒号滥用',
    why: '一段里多个冒号，通常是拿冒号代替把话说完；改成分句',
    test: (t) => {
      const n = (t.match(/：/g) ?? []).length;
      return n >= 2 ? [`出现 ${n} 个冒号`] : [];
    },
  },
  {
    id: '引号滥用',
    why: '通用术语和业内人都懂的概念不必加引号；只在把词当词讨论时用',
    test: (t) => {
      const terms = ['意译', '译创', '死干扰项', '人的贡献', '慢', '音乐', '细腻', '先采集'];
      return [...t.matchAll(/“([^”]{1,24})”/g)]
        .map((m) => m[1])
        .filter((q) => terms.includes(q))
        .map((q) => `“${q}”`);
    },
  },
  {
    id: '内联粗体标题',
    why: '段落以「**标签。**」开头，连续几段同一模板，是最容易被认出的 AI 结构',
    test: (t) => {
      const m = /^\*\*[^*]{2,40}\*\*/.exec(t.trim());
      return m ? [m[0]] : [];
    },
  },
  {
    id: '半角标点',
    why: '中文正文应使用全角标点',
    test: (t) => {
      const hits = [];
      const re = new RegExp(`[${CJK}]\\s*[,;:!?]|[,;:!?]\\s*[${CJK}]`, 'g');
      for (const m of t.matchAll(re)) hits.push(m[0]);
      return hits;
    },
  },
];

/* ------------------------------------------------------------------ */
/* 收集：直接读源文件里的字符串字面量，避免 ESM 解析扩展名的麻烦，
   顺便也能抓到本该是英文的位置混进了中文的情况。                    */

const SOURCES = [
  'content/site.ts',
  'content/about.ts',
  'content/cv.ts',
  'content/projects/papercraft.ts',
  'content/projects/transcreation.ts',
  'content/projects/ielts-coach.ts',
  'app/[locale]/work/page.tsx',
];

const STRINGS = [];
const hasCJK = new RegExp(`[${CJK}]`);

for (const file of SOURCES) {
  const full = path.join(process.cwd(), file);
  if (!fs.existsSync(full)) continue;
  const src = fs.readFileSync(full, 'utf8');
  const lines = src.split('\n');
  lines.forEach((line, i) => {
    // 跳过注释
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
    for (const m of line.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)) {
      const text = (m[1] ?? m[2] ?? '').replace(/\\'/g, "'");
      if (text.length > 3 && hasCJK.test(text)) {
        STRINGS.push({ trail: `${file}:${i + 1}`, text });
      }
    }
  });
}

// 随笔正文
const NOTES = path.join(process.cwd(), 'content', 'notes');
if (fs.existsSync(NOTES)) {
  for (const f of fs.readdirSync(NOTES).filter((n) => n.endsWith('.zh.md'))) {
    const raw = fs.readFileSync(path.join(NOTES, f), 'utf8').replace(/^---[\s\S]*?---/, '');
    raw
      .split(/\n{2,}/)
      .map((s) => s.trim())
      .filter((s) => s && !s.startsWith('#'))
      .forEach((para, i) => STRINGS.push({ trail: `notes/${f}[${i}]`, text: para }));
  }
}

console.log(`检查 ${STRINGS.length} 段中文\n`);

const counts = new Map();
let total = 0;
for (const rule of RULES) {
  const hits = [];
  for (const { trail, text } of STRINGS) {
    for (const hit of rule.test(text)) hits.push({ trail, hit });
  }
  counts.set(rule.id, hits.length);
  total += hits.length;
  if (hits.length) {
    console.log(`✗ ${rule.id}（${hits.length} 处）— ${rule.why}`);
    for (const h of hits.slice(0, 8)) console.log(`    ${h.trail}: ${h.hit}`);
    if (hits.length > 8) console.log(`    … 另有 ${hits.length - 8} 处`);
    console.log('');
  }
}

console.log(total === 0 ? '中文文风检查通过' : `共 ${total} 处待处理`);
process.exit(total === 0 ? 0 : 1);
