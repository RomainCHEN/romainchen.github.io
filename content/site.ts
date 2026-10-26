import type { L, Locale } from './types';

export const SITE = {
  url: 'https://romain.is-a.dev',
  name: 'Zeming (Romain) Chen',
  nameZh: '陈泽铭',
  email: 'contact@z-chen.dev',
  /**
   * Analytics is off until a domain is configured. Set this to a Plausible
   * (or self-hosted Umami) host and the script tag appears; leave it empty and
   * nothing is loaded, so the site ships with no third-party requests and no
   * cookie banner.
   */
  analytics: {
    plausibleDomain: '',
    plausibleHost: 'https://plausible.io',
  },
} as const;

export const TAGLINE: L = {
  en: 'Translation × Computer Science. From language, into the machine, and back to people.',
  zh: '翻译 × 计算机科学。从语言出发，深入机器，最终回归于人。',
};

export const ROLE_LINE: L = {
  en: 'Undergraduate, dual degree in Translation and Computer Science, Guangdong University of Foreign Studies & Macao Polytechnic University',
  zh: '广东外语外贸大学（翻译学）× 澳门理工大学（计算机科学）双学位本科在读',
};

export const RESEARCH_INTERESTS: L<string>[] = [
  { en: 'Human–AI complementarity in education', zh: '教育场景中的人机互补' },
  { en: 'Learning analytics', zh: '学习分析' },
  { en: 'Teacher-facing tools', zh: '教师端教学工具' },
  { en: 'Language assessment', zh: '语言测评' },
  { en: 'Human-centered AI', zh: '以人为本的人工智能' },
  { en: 'Agent design & evaluation', zh: 'Agent 设计与评估' },
  { en: 'Self-improving agent loops', zh: '自演进 Agent 闭环' },
];

export const SOCIAL: { label: string; href: string; handle: string }[] = [
  { label: 'GitHub', href: 'https://github.com/RomainCHEN', handle: 'RomainCHEN' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zaamingcan', handle: 'zaamingcan' },
  { label: 'sspai', href: 'https://sspai.com/u/f60fywrz', handle: 'Matrix 作者' },
  { label: 'Instagram', href: 'https://instagram.com/zaaming.can', handle: 'zaaming.can' },
];

/**
 * UI strings. Content strings live with their content; this dictionary is only
 * for chrome, navigation, buttons, labels.
 */
export const UI = {
  nav: {
    work: { en: 'Work', zh: '作品' },
    about: { en: 'About', zh: '关于' },
    cv: { en: 'CV', zh: '简历' },
  },
  skipToContent: { en: 'Skip to content', zh: '跳至正文' },
  toggleTheme: { en: 'Toggle colour scheme', zh: '切换配色' },
  switchLang: { en: '中文', zh: 'EN' },
  switchLangLabel: { en: 'Switch to Chinese', zh: 'Switch to English' },
  menu: { en: 'Menu', zh: '菜单' },
  selectedWork: { en: 'Selected work', zh: '精选作品' },
  allWork: { en: 'All work', zh: '全部作品' },
  readCase: { en: 'Read the case study', zh: '阅读项目详述' },
  contact: { en: 'Contact', zh: '联系' },
  elsewhere: { en: 'Elsewhere', zh: '其他平台' },
  interests: { en: 'Research interests', zh: '研究兴趣' },
  currently: { en: 'Currently', zh: '当前进展' },
  index: { en: 'Index', zh: '目录' },
  contents: { en: 'Contents', zh: '本页目录' },
  role: { en: 'Role', zh: '角色' },
  period: { en: 'Period', zh: '时间' },
  facts: { en: 'At a glance', zh: '概览' },
  nextProject: { en: 'Next', zh: '下一篇' },
  prevProject: { en: 'Previous', zh: '上一篇' },
  backToWork: { en: 'All work', zh: '返回作品列表' },
  downloadCv: { en: 'Download CV (PDF)', zh: '下载简历（PDF）' },
  downloadCvZh: { en: 'Chinese résumé (PDF)', zh: '中文简历（PDF）' },
  lastUpdated: { en: 'Last updated', zh: '最近更新' },
  notFoundTitle: { en: 'No such page', zh: '页面不存在' },
  notFoundBody: {
    en: 'The address is wrong, or something moved. The index below still works.',
    zh: '链接有误或页面已迁移，可通过下方目录继续浏览。',
  },
  evidenceLegend: {
    en: 'Every component below is labelled with how much empirical backing it has.',
    zh: '下方各项均标有目前的实证支撑程度。',
  },
  evidenceStates: {
    shipped: { en: 'In use', zh: '已投入使用' },
    piloted: { en: 'Small-scale result', zh: '已有小规模结果' },
    instrumented: { en: 'Built, no data yet', zh: '已建成，暂无数据' },
    collecting: { en: 'Running, no results yet', zh: '数据收集中，尚无结果' },
    designed: { en: 'Designed, not run', zh: '方案已定，尚未开展' },
    planned: { en: 'Planned', zh: '规划中' },
  },
  cognitiveLoad: { en: 'Cognitive load', zh: '认知负荷' },
  sourceTitle: { en: 'Source title', zh: '原片名' },
  humanTitle: { en: 'Human translator', zh: '人工译者' },
  machineTitle: { en: 'Literal / LLM default', zh: '字面直译 / 模型默认输出' },
  fullSize: { en: 'Full sheet', zh: '查看完整原图' },
  what: { en: 'What it does', zh: '功能说明' },
  why: { en: 'Why it matters for the research', zh: '研究考量' },
  scrollTable: { en: 'Scroll sideways', zh: '左右滑动查看' },
} as const;

export function t(dict: L, locale: Locale): string {
  return dict[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}

/** Locale-prefixed path helper. Trailing slash matches the export config. */
export function path(locale: Locale, ...segments: string[]): string {
  const parts = segments.filter(Boolean);
  return `/${locale}${parts.length ? `/${parts.join('/')}` : ''}/`;
}
