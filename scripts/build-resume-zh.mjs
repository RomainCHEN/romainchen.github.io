#!/usr/bin/env node
/**
 * 生成中文求职简历 public/resume-zh.pdf
 *
 *   node scripts/build-resume-zh.mjs
 *
 * 内容来自 scripts/resume-zh-data.mjs。这份文件和网站的英文学术 CV 是两套东西，
 * 读者不同，所以排版也不同：学术 CV 复用站点的版式与字体，求职简历按中文简历的
 * 惯例做单栏密排，日期右对齐，要点用加粗关键词打头，方便 HR 六秒扫描。
 *
 * 不放在 app/ 里是有意的：它不是站点的一个页面，不该进 sitemap，也不该被
 * 双语校验和中文文风审计当成散文来查。
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import { HEADER, SECTIONS, SKILLS, UPDATED } from './resume-zh-data.mjs';

const CHROME =
  process.env.CHROME_PATH ??
  `${process.env.HOME}/.cache/puppeteer/chrome/mac_arm-149.0.7827.22/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** 只支持 **加粗**，简历不需要更多标记。 */
const strong = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const entryHtml = (e) => `
  <article class="entry">
    <div class="row">
      <h3>${strong(e.title)}</h3>
      <span class="when">${esc(e.when)}</span>
    </div>
    ${
      e.meta || e.where
        ? `<p class="meta">${esc(e.meta)}${e.where ? `<span class="where">${esc(e.where)}</span>` : ''}</p>`
        : ''
    }
    ${
      e.points?.length
        ? `<ul>${e.points.map((p) => `<li>${strong(p)}</li>`).join('')}</ul>`
        : ''
    }
  </article>`;

/* 默认产出网站公开版，不含手机号。RESUME_PHONE=1 另出一份投递版。 */
const WITH_PHONE = process.env.RESUME_PHONE === '1';
const contacts = WITH_PHONE
  ? [HEADER.contacts[0], HEADER.phone, ...HEADER.contacts.slice(1)]
  : HEADER.contacts;

const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><title>${esc(HEADER.name)} 简历</title>
<style>
  @page { size: A4; margin: 0; }

  :root {
    --ink: #111111;
    --soft: #333333;
    --muted: #666666;
    --rule: #d4d4d4;
    --accent: #8d3624;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    /* 拉丁字体写在前面，中文由 PingFang 兜底，避免中文字形被拉丁字体拉变形。 */
    font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Heiti SC', sans-serif;
    color: var(--ink);
    font-size: 8.9pt;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
  }

  .page { padding: 10mm 13mm 14mm; }

  /* ---------- 头部 ---------- */
  header { padding-bottom: 5pt; border-bottom: 1.2pt solid var(--ink); }

  .namerow { display: flex; align-items: baseline; gap: 8pt; }

  h1 { font-size: 20pt; line-height: 1.1; letter-spacing: 0.04em; font-weight: 600; }

  .latin { font-size: 9.5pt; color: var(--muted); letter-spacing: 0.02em; }

  .target {
    margin-top: 3pt;
    font-size: 9.3pt;
    color: var(--accent);
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .contacts {
    margin-top: 4pt;
    display: flex;
    flex-wrap: wrap;
    gap: 2pt 14pt;
    font-size: 8.4pt;
    color: var(--soft);
  }

  .contacts b { color: var(--muted); font-weight: 400; margin-right: 3pt; }

  /* ---------- 分节 ---------- */
  section { margin-top: 5pt; }

  h2 {
    font-size: 9.4pt;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.16em;
    padding-bottom: 2pt;
    border-bottom: 0.6pt solid var(--rule);
  }

  .entry { margin-top: 3.5pt; break-inside: avoid; }

  .row { display: flex; align-items: baseline; justify-content: space-between; gap: 10pt; }

  h3 { font-size: 9.6pt; font-weight: 600; line-height: 1.35; }

  .when {
    flex: 0 0 auto;
    font-size: 8.3pt;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
  }

  .meta { font-size: 8.7pt; color: var(--muted); margin-top: 0.5pt; }

  .where::before { content: ' · '; }

  ul { list-style: none; margin-top: 2pt; }

  li {
    position: relative;
    padding-left: 9pt;
    color: var(--soft);
    margin-top: 1pt;
    text-align: justify;
  }

  /* 短横线比圆点更接近站点的观感，也不会在密排时糊成一片。 */
  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.52em;
    width: 4.5pt;
    height: 0.6pt;
    background: #999999;
  }

  li strong { color: var(--ink); font-weight: 600; }

  /* ---------- 技能表 ---------- */
  .skills { margin-top: 4pt; }

  .skillrow { display: flex; gap: 8pt; margin-top: 2pt; }

  .skillrow dt {
    flex: 0 0 34pt;
    color: var(--muted);
    letter-spacing: 0.1em;
    font-size: 8.4pt;
  }

  .skillrow dd { color: var(--soft); }

  /* 固定在页面底部。放在文档流里的话，它会因为差几 pt 装不下而单独顶出一页，
     那是这份简历第一次生成时真实发生过的事。 */
  footer {
    position: fixed;
    bottom: 7mm;
    left: 13mm;
    right: 13mm;
    padding-top: 3pt;
    border-top: 0.6pt solid var(--rule);
    font-size: 7.6pt;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
  }
</style></head>
<body><div class="page">
  <header>
    <div class="namerow">
      <h1>${esc(HEADER.name)}</h1>
      <span class="latin">${esc(HEADER.latin)}</span>
    </div>
    <p class="target">${esc(HEADER.target)}</p>
    <div class="contacts">
      ${contacts.map((c) => `<span><b>${esc(c.label)}</b>${esc(c.value)}</span>`).join('')}
    </div>
  </header>

  ${SECTIONS.map(
    (s) => `<section>
    <h2>${esc(s.heading)}</h2>
    ${s.entries.map(entryHtml).join('')}
  </section>`,
  ).join('')}

  <section>
    <h2>技能与证书</h2>
    <dl class="skills">
      ${SKILLS.map(
        (g) => `<div class="skillrow"><dt>${esc(g.label)}</dt><dd>${esc(g.value)}</dd></div>`,
      ).join('')}
    </dl>
  </section>

  <footer><span>${esc(HEADER.name)} · romain.is-a.dev</span><span>更新于 ${esc(UPDATED)}</span></footer>
</div></body></html>`;

/* 用本地 HTTP 服务而不是 data: URL，方便 Chrome 正常解析字体与布局。 */
const PORT = 4324;
const server = await new Promise((resolve) => {
  const s = http.createServer((_req, res) => {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(html);
  });
  s.listen(PORT, () => resolve(s));
});

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle0' });
await page.emulateMediaType('print');

const target = WITH_PHONE
  ? path.join(process.cwd(), 'resume-zh-private.pdf')
  : path.join(process.cwd(), 'public', 'resume-zh.pdf');
await page.pdf({ path: target, format: 'a4', printBackground: true, margin: 0 });

await browser.close();
server.close();

/* Chrome 会把整套 CJK 字体塞进去，一页简历因此有 600 kB 以上。qpdf 在的时候
   顺手压一遍对象流，压不了也不影响产物。 */
try {
  const { execFileSync } = await import('node:child_process');
  const tmp = `${target}.tmp`;
  execFileSync('qpdf', ['--object-streams=generate', '--stream-data=compress', target, tmp], {
    stdio: 'ignore',
  });
  fs.renameSync(tmp, target);
} catch {
  /* qpdf 不可用就保持原样 */
}

const { size } = fs.statSync(target);
console.log(`${path.relative(process.cwd(), target)}  ${Math.round(size / 1024)} kB`);
