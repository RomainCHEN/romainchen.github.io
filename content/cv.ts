import type { L } from './types';

export interface CvEntry {
  /** Left margin: dates, set in mono. */
  when: L;
  title: L;
  org?: L;
  place?: L;
  /** Bullet points. Keep to two or three; a CV is not a diary. */
  points: L<string[]>;
}

export interface CvSection {
  id: string;
  heading: L;
  entries: CvEntry[];
}

export const CV_UPDATED = '2026-08-01';

export const EDUCATION: CvSection = {
  id: 'education',
  heading: { en: 'Education', zh: '教育背景' },
  entries: [
    {
      when: { en: 'Sep 2023 – Jun 2027 (expected)', zh: '2023.09 – 2027.06（预计）' },
      title: {
        en: 'Dual Bachelor’s Degree: Translation Studies & Computer Science',
        zh: '双学士学位：翻译学 & 计算机科学',
      },
      org: {
        en: 'Guangdong University of Foreign Studies · Macao Polytechnic University',
        zh: '广东外语外贸大学 · 澳门理工大学',
      },
      place: { en: 'Guangzhou & Macao SAR, China', zh: '中国广州 / 澳门特别行政区' },
      points: {
        en: [
          'Translation Studies at GDUFS: contrastive translation (EN/ZH), fundamental translation, consecutive interpreting, English public speaking, modern Chinese.',
          'Computer Science at MPU: data structures and algorithms, database design, computer organisation, artificial intelligence, data science, business analytics, project management, programming in Python and Java.',
        ],
        zh: [
          '广外翻译学：英汉对比翻译、基础笔译、交替传译、英语公共演讲、现代汉语。',
          '澳门理工计算机科学：数据结构与算法、数据库设计、计算机组成原理、人工智能、数据科学、商业分析、项目管理、Python 与 Java 程序设计。',
        ],
      },
    },
  ],
};

export const RESEARCH: CvSection = {
  id: 'research',
  heading: { en: 'Research', zh: '研究经历' },
  entries: [
    {
      when: { en: 'May 2026 – present', zh: '2026.05 – 至今' },
      title: {
        en: 'PaperCraft: a teacher-in-the-loop LLM authoring tool for Cambridge KET/PET',
        zh: 'PaperCraft：面向剑桥 KET/PET 的教师在环 LLM 出题工具',
      },
      org: { en: 'Final year project, sole developer and research design', zh: '毕业设计，独立开发与研究设计' },
      points: {
        en: [
          'Designed a seven-stage generation pipeline with teacher adjudication as a hard gate, encoding published item-writing rules for 15 Cambridge item types and auditing generated text against CEFR A2/B1 wordlists.',
          'Instrumented the workflow so that teacher edit distance and classical item statistics (difficulty, point-biserial discrimination, distractor analysis) are captured as a by-product of normal use.',
          'Wrote the full evaluation protocol — paired task timing, SUS, NASA-TLX, content-quality rubric, semi-structured interview. Instruments are complete; data collection has not begun.',
        ],
        zh: [
          '设计了以教师裁决为硬性闸门的七阶段生成管线，为 15 种剑桥题型编码官方命题规则，并对生成文本按 CEFR A2/B1 词表进行审计。',
          '对工作流进行插桩，使教师编辑距离与经典项目统计量（难度、点二列区分度、干扰项分析）成为正常使用的副产物。',
          '撰写了完整评估方案——配对任务计时、SUS、NASA-TLX、内容质量量表、半结构化访谈。工具已完成，数据收集尚未开始。',
        ],
      },
    },
    {
      when: { en: 'Oct 2025 – present', zh: '2025.10 – 至今' },
      title: {
        en: 'Transcreation in the age of generative AI: human translators versus LLMs in film title translation',
        zh: '生成式 AI 时代的译创：电影片名翻译中的人工译者与大语言模型对比',
      },
      org: {
        en: 'Co-authored paper in preparation, three-person faculty-advised team',
        zh: '合著论文（写作中），三人团队，导师指导',
      },
      points: {
        en: [
          'Contributed the cognitive-linguistic framing: a three-tier analytical model separating translation strategy from cognitive operation from cultural schema, with four schema operations ordered by cognitive load.',
          'Built the literature synthesis across functionalist title translation, regional norm divergence within Greater China, the LLM translation paradigm shift and documented cultural bias in frontier models; verified every DOI field by field.',
          'Argued that reference-overlap metrics such as BLEU are structurally unsuited to transcreation because they penalise the divergence that constitutes expertise.',
        ],
        zh: [
          '贡献认知语言学框架：一个三层分析模型，将翻译策略、认知运作与文化图式区分开来，并按认知负荷排列四种图式操作。',
          '完成文献综述，涵盖功能主义片名翻译、大中华区内部规范差异、LLM 翻译范式转移与前沿模型的文化偏见，并逐字段核验全部 DOI。',
          '论证 BLEU 一类参考重叠指标在结构上不适用于译创，因为它们惩罚的恰恰是构成专业能力的那种偏离。',
        ],
      },
    },
  ],
};

export const TEACHING: CvSection = {
  id: 'teaching',
  heading: { en: 'Teaching', zh: '教学经历' },
  entries: [
    {
      when: { en: 'May 2024 – Sep 2025', zh: '2024.05 – 2025.09' },
      title: { en: 'Primary English Teacher, Cambridge KET', zh: '小学英语教师（剑桥 KET）' },
      org: { en: 'Guangzhou Bella Education Technology', zh: '广州贝拉教育科技有限公司' },
      place: { en: 'Guangzhou, China', zh: '中国广州' },
      points: {
        en: [
          'Taught two small KET classes and the New Concept English curriculum, authoring practice material by hand each week — roughly two hours per exercise set.',
          'That authoring burden, and the inability to control item difficulty with the small pool of official past papers available, is the problem PaperCraft was built to address.',
        ],
        zh: [
          '教授两个 KET 小班与新概念英语课程，每周手工编写练习材料——每套约两小时。',
          '正是这份出题负担，以及在官方真题极为有限的情况下无法控制题目难度的问题，催生了 PaperCraft。',
        ],
      },
    },
    {
      when: { en: 'Jan 2024 – Feb 2024', zh: '2024.01 – 2024.02' },
      title: { en: 'English Teaching Assistant, Middle School Division', zh: '英语助教（中学部）' },
      org: { en: 'New Oriental Education & Technology Group', zh: '新东方教育科技集团' },
      place: { en: 'Guangzhou, China', zh: '中国广州' },
      points: {
        en: [
          'Supported bilingual eloquence training for over 120 junior high students; graded assessments and ran one-to-one tutoring.',
        ],
        zh: ['协助 120 余名初中学生的双语口才训练；批改测评并进行一对一辅导。'],
      },
    },
  ],
};

export const EXPERIENCE: CvSection = {
  id: 'experience',
  heading: { en: 'Professional experience', zh: '实习与工作经历' },
  entries: [
    {
      when: { en: 'Apr 2025 – May 2025', zh: '2025.04 – 2025.05' },
      title: {
        en: 'Overseas Buyer Vlog Team, External Liaison Department',
        zh: '境外采购商 Vlog 工作组，对外联络部',
      },
      org: {
        en: 'China Foreign Trade Centre (Canton Fair)',
        zh: '中国对外贸易中心集团有限公司（广交会）',
      },
      place: { en: 'Guangzhou, China', zh: '中国广州' },
      points: {
        en: [
          'Ran the "My Canton Fair Experience" vlog project end to end: participant liaison, content planning, on-site filming and post-production.',
          'A video I produced passed 100,000 views on the Canton Fair’s official overseas social accounts; two cultural-promotion proposals I submitted were implemented.',
        ],
        zh: [
          '端到端负责"我的广交会体验"Vlog 项目：前期联络、内容策划、现场拍摄与后期剪辑。',
          '个人制作的视频在广交会官方境外社媒突破 10 万播放；提案的两个传统文化推广项目落地实施。',
        ],
      },
    },
  ],
};

export const WRITING_MEDIA: CvSection = {
  id: 'communication',
  heading: { en: 'Writing & communication', zh: '写作与传播' },
  entries: [
    {
      when: { en: 'Ongoing', zh: '持续进行' },
      title: { en: 'Contracted author, sspai Matrix', zh: '少数派 Matrix 签约作者' },
      points: {
        en: [
          'Long-form technology and digital-practice essays on a leading Chinese technology platform; over 150,000 cumulative reads.',
        ],
        zh: ['在国内主要科技媒体撰写技术与数字生活深度长文，累计阅读量超过 15 万。'],
      },
    },
    {
      when: { en: 'Ongoing', zh: '持续进行' },
      title: {
        en: 'Author, "Seriously Speaking English" (WeChat)',
        zh: '公众号「正经说英语」主笔',
      },
      points: {
        en: ['Essays on English etymology and historical linguistics for a subscriber audience.'],
        zh: ['面向订阅读者撰写英语词源与历史语言学文章。'],
      },
    },
    {
      when: { en: 'Dec 2023 – present', zh: '2023.12 – 至今' },
      title: {
        en: 'Director, News & Communication Department',
        zh: '新闻与传播部主任',
      },
      org: { en: 'GDUFS Alumni Affairs Office', zh: '广东外语外贸大学校友工作办公室' },
      points: {
        en: ['Produced alumni interviews and feature articles; hosted homecoming events.'],
        zh: ['产出校友访谈与专题报道；主持校友返校活动。'],
      },
    },
    {
      when: { en: 'Sep 2021 – Jun 2023', zh: '2021.09 – 2023.06' },
      title: {
        en: 'Founding Director, Media Convergence Department',
        zh: '融媒体中心创始主任',
      },
      org: { en: 'Youth League Committee', zh: '共青团委员会' },
      points: {
        en: [
          'Established a cloud-based media asset management system and supervised over 50 campus productions.',
          'Directed the short film "Transaction" (340,000+ views on Bilibili).',
        ],
        zh: [
          '建立云端媒资管理系统，监制 50 余部校园影视作品。',
          '执导短片《Transaction》（B 站播放量 34 万+）。',
        ],
      },
    },
  ],
};

export const AWARDS: CvSection = {
  id: 'awards',
  heading: { en: 'Awards & certifications', zh: '获奖与证书' },
  entries: [
    {
      when: { en: '2025', zh: '2025' },
      title: {
        en: 'First Place, CIUTI Short Video Contest',
        zh: 'CIUTI 短视频大赛一等奖',
      },
      org: {
        en: 'Theme: "The Power of Human Translation and Interpreting in the Age of AI"',
        zh: '主题：「人工智能时代人类翻译的力量」',
      },
      points: { en: [], zh: [] },
    },
    {
      when: { en: '2023', zh: '2023' },
      title: {
        en: 'Outstanding Volunteer, 5th World Media Summit',
        zh: '第五届世界媒体峰会「优秀志愿者」',
      },
      org: {
        en: 'VIP reception: customs assistance and cultural guidance for 100+ international media professionals',
        zh: 'VIP 接待：为 100 余名国际媒体从业者提供通关协助与文化引导',
      },
      points: { en: [], zh: [] },
    },
    {
      when: { en: '2023', zh: '2023' },
      title: {
        en: 'Third Prize, Communication University of China "Xiaobaiyang" Digital Arts Competition',
        zh: '中国传媒大学「小白杨」数字艺术大赛三等奖',
      },
      org: { en: 'Short film "Transaction"', zh: '短片《Transaction》' },
      points: { en: [], zh: [] },
    },
    {
      when: { en: '—', zh: '—' },
      title: { en: 'Google Analytics Certified · NCRE Level 3 (Linux)', zh: 'Google Analytics 认证 · 全国计算机等级考试三级（Linux）' },
      points: { en: [], zh: [] },
    },
  ],
};

export const SKILLS = {
  heading: { en: 'Skills', zh: '技能' } as L,
  groups: [
    {
      label: { en: 'Languages', zh: '语言' } as L,
      items: {
        en: ['Cantonese (native)', 'Mandarin (PSC Level 2-A)', 'English (TEM-4, working language)', 'Japanese (elementary)'],
        zh: ['粤语（母语）', '普通话（二级甲等）', '英语（专业四级，可作工作语言）', '日语（初级）'],
      } as L<string[]>,
    },
    {
      label: { en: 'Building', zh: '开发' } as L,
      items: {
        en: ['TypeScript', 'React / Next.js', 'Python', 'Java', 'Supabase / PostgreSQL', 'LLM pipelines & agent workflows'],
        zh: ['TypeScript', 'React / Next.js', 'Python', 'Java', 'Supabase / PostgreSQL', 'LLM 管线与 agent 工作流'],
      } as L<string[]>,
    },
    {
      label: { en: 'Analysis', zh: '分析' } as L,
      items: {
        en: ['SQL', 'R', 'Classical item analysis', 'BI tooling', 'Google Analytics'],
        zh: ['SQL', 'R', '经典项目分析', 'BI 工具', 'Google Analytics'],
      } as L<string[]>,
    },
    {
      label: { en: 'Production', zh: '内容生产' } as L,
      items: {
        en: ['Final Cut Pro', 'DaVinci Resolve', 'Long-form technical writing (EN/ZH)'],
        zh: ['Final Cut Pro', 'DaVinci Resolve', '中英长文写作'],
      } as L<string[]>,
    },
  ],
};

export const CV_SECTIONS: CvSection[] = [
  EDUCATION,
  RESEARCH,
  TEACHING,
  EXPERIENCE,
  WRITING_MEDIA,
  AWARDS,
];
