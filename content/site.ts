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
  en: 'Translation × Computer Science. I design learning tools and instrument them as research objects.',
  zh: '翻译 × 计算机科学。我做学习工具，也把它们做成可以拿数据说话的研究对象。',
};

export const ROLE_LINE: L = {
  en: 'Undergraduate, dual degree in Translation and Computer Science, Guangdong University of Foreign Studies & Macao Polytechnic University',
  zh: '广东外语外贸大学（翻译学）× 澳门理工大学（计算机科学）双学位在读',
};

export const RESEARCH_INTERESTS: L<string>[] = [
  { en: 'Human–AI complementarity in education', zh: '教育中的人机互补' },
  { en: 'Learning analytics & psychometrics', zh: '学习分析与心理测量' },
  { en: 'Teacher-facing tools', zh: '面向教师的工具' },
  { en: 'Language assessment', zh: '语言测评' },
  { en: 'Human-centered AI', zh: '以人为本的人工智能' },
];

export const SOCIAL: { label: string; href: string; handle: string }[] = [
  { label: 'GitHub', href: 'https://github.com/RomainCHEN', handle: 'RomainCHEN' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zaamingcan', handle: 'zaamingcan' },
  { label: 'sspai', href: 'https://sspai.com/u/f60fywrz', handle: 'Matrix author' },
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
    writing: { en: 'Notes', zh: '随笔' },
  },
  skipToContent: { en: 'Skip to content', zh: '跳到主要内容' },
  toggleTheme: { en: 'Toggle colour scheme', zh: '切换配色' },
  switchLang: { en: '中文', zh: 'EN' },
  switchLangLabel: { en: 'Switch to Chinese', zh: 'Switch to English' },
  menu: { en: 'Menu', zh: '菜单' },
  selectedWork: { en: 'Selected work', zh: '精选作品' },
  allWork: { en: 'All work', zh: '全部作品' },
  readCase: { en: 'Read the case study', zh: '阅读案例研究' },
  contact: { en: 'Contact', zh: '联系' },
  elsewhere: { en: 'Elsewhere', zh: '其他平台' },
  interests: { en: 'Research interests', zh: '研究兴趣' },
  currently: { en: 'Currently', zh: '当前进展' },
  index: { en: 'Index', zh: '目录' },
  contents: { en: 'Contents', zh: '本页目录' },
  role: { en: 'Role', zh: '角色' },
  period: { en: 'Period', zh: '时间' },
  facts: { en: 'At a glance', zh: '概览' },
  nextProject: { en: 'Next', zh: '下一个' },
  prevProject: { en: 'Previous', zh: '上一个' },
  backToWork: { en: 'All work', zh: '返回作品列表' },
  downloadCv: { en: 'Download CV (PDF)', zh: '下载简历（PDF）' },
  downloadCvZh: { en: 'Chinese résumé (PDF)', zh: '中文简历（PDF）' },
  lastUpdated: { en: 'Last updated', zh: '最后更新' },
  builtWith: { en: 'Built with Next.js. Set in Newsreader and Instrument Sans.', zh: '用 Next.js 构建，Newsreader 与 Instrument Sans 排版。' },
  notFoundTitle: { en: 'No such page', zh: '页面不存在' },
  notFoundBody: {
    en: 'The address is wrong, or something moved. The index below still works.',
    zh: '地址不对，或者内容挪了位置。下面的目录还能用。',
  },
  evidenceLegend: {
    en: 'Every component below is labelled with how much empirical backing it has.',
    zh: '下面每一项都标了它现在有多少实证支撑。',
  },
  evidenceStates: {
    shipped: { en: 'In use', zh: '已在用' },
    instrumented: { en: 'Built, no data yet', zh: '做完了，还没数据' },
    designed: { en: 'Designed, not run', zh: '方案写好了，还没开跑' },
    planned: { en: 'Planned', zh: '计划中' },
  },
  cognitiveLoad: { en: 'Cognitive load', zh: '认知负荷' },
  sourceTitle: { en: 'Source title', zh: '原片名' },
  humanTitle: { en: 'Human translator', zh: '人工译者' },
  machineTitle: { en: 'Literal / LLM default', zh: '直译或模型默认输出' },
  what: { en: 'What it does', zh: '做什么' },
  why: { en: 'Why it matters for the research', zh: '对研究的意义' },
  writingEmpty: {
    en: 'Nothing published here yet.',
    zh: '这里还没有发表内容。',
  },
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
