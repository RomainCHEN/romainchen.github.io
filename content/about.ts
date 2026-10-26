import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another.',
    'AI arrived in force during my undergraduate years. The more I work with it and learn to use it well, the more I can make. The two disciplines let me look at it from both sides: the humanities for reading people, computer science for working inside the machine.',
  ],
  zh: [
    '我目前在两所大学攻读双学位，一边学翻译，一边学计算机科学。',
    '本科这几年恰逢 AI 浪潮席卷而来。越是深入使用、摸清它的脾性，我能动手做出来的东西就越多。一文一理的双重背景让我得以从两端审视这项技术：人文训练教我读懂人心，计算机科学则带我深入机器内部。',
  ],
};

export const ABOUT_BODY: { heading: L; body: Paragraphs }[] = [
  {
    heading: { en: 'How I got here', zh: '研究的起点' },
    body: {
      en: [
        "In 2024 I was taking data structures and translation theory while teaching Cambridge KET to two small classes of primary students. Preparing a week's practice meant finding past papers, adapting items and assembling them into a set at the right level, and it took hours every week. Even then the difficulty was hard to pitch, past papers ran out, and the available topics rarely held a child's interest.",
        'Most teachers know these problems. The question I kept returning to was *which decisions in that process had to be mine*, and which a model could make. It can be measured, and seldom is, so I built a tool that records the answer.',
        'I met the same question in translation. My programme trains us in a craft that machine translation is supposed to have solved, and the usual reply, that human translators are more "sensitive", offers no way to measure it. Film titles gave me one. Once each title is classified by what the translator did to its cultural schema, a professional judgement and a default rendering can be told apart on the evidence.',
      ],
      zh: [
        '2024 年，我一边上着数据结构和翻译理论课，一边带两个小学剑桥 KET 小班。每周备课都要花上几个小时：找真题、改题目，再拼成一套难度合适的练习。即便花这么多工夫，深浅依然很难拿捏，真题越用越少，现成的话题也很难吸引小学生的注意力。',
        '这些痛点几乎每位老师都深有体会。但我一直在想：备课全流程里，**到底哪些判断非我不可**，哪些其实可以放手交给模型？这件事本可以量化，却很少有人真正去测，于是我自己写了一套工具来记录答案。',
        '学翻译时我也撞上了同样的疑问。外界常觉得机器翻译已经取代了我们苦练的手艺，而业内习惯拿「人工译者更具文化敏感度」来反驳，却说不出怎么衡量这种敏感度。电影片名给了我一个切入点：只要按译者处理文化图式的方式逐一分类标注，哪些体现了专业判断、哪些只是套用常规译法，就能凭证据区分开来。',
      ],
    },
  },
  {
    heading: { en: 'What I bring', zh: '能力与积累' },
    body: {
      en: [
        'I am good at turning a vague construct into something that can be recorded. "Teacher effort", "cultural sensitivity" and "item quality" are widely used and rarely defined. Much of my work is deciding what would count as evidence, then building the instrument that captures it.',
        'I can build a research instrument end to end on my own: authentication, database design, LLM routing with typed repair, Word and PDF export, deployment. An instrument has to be usable before it can collect data, so I treat the engineering as part of the research. This summer I used the same skills at a listed manufacturer, deploying quantised models on its internal network.',
        'I have also written for a general readership for six years: technology essays with six-figure readerships, etymology pieces, alumni features and a short film. That work taught me to back an argument with evidence, and to explain technical ideas to readers outside the field.',
      ],
      zh: [
        '我擅长把模糊的学术概念转化为可记录的具体指标。「教师投入」「文化敏感度」「题目质量」这类词人人挂在嘴边，却很少有人界定清楚。我的核心工作，就是先厘清什么才算有效的证据，再亲手搭建工具把它采集下来。',
        '我能独立完成研究工具从底层到上线的全栈开发，涵盖身份认证、数据库设计、带类型修复的大模型路由、Word 与 PDF 导出以及部署上线。工具必须先做到好用，才谈得上收集真实数据，因此我一直把工程实现视作研究本身的一部分。今年夏天，我也把这套技术带到一家上市制造企业，在其内网部署了量化大模型。',
        '我还面向大众读者写了六年文章，写过阅读量破十万的科技长文、英语词源随笔、校友人物特稿，也拍过一部短片。这些经历让我养成了拿证据说话的习惯，也学会了怎么把硬核的专业问题讲给外行听。',
      ],
    },
  },
  {
    heading: { en: 'What I want to do next', zh: '研究方向' },
    body: {
      en: [
        'My current work, and the work I want to pursue, is human-centred human–AI interaction: designing the interfaces and tools through which people work and learn with AI and agents, and studying the new ways of producing and learning that emerge from that collaboration. I care about what the model can do, and equally about what the person decides and learns along the way.',
        'This work needs tools that are built well and designs that are tested properly. I have experience with the first. The second is what I want graduate training for: measurement, experimental design, and the analysis of learning data at a scale where the statistics mean something.',
      ],
      zh: [
        '我目前在做、未来也希望深耕的方向，是以人为本的人机交互：设计供人与 AI 及 agent 协同工作和学习的界面与工具，并探究这种协作催生了哪些新的生产与学习方式。我关心模型能做到什么，也同样关心人在协作过程中做出了哪些判断、收获了什么成长。',
        '这类研究既要求工具本身工程扎实，又要求实验设计经得起推敲。前者我已经有不少实战积累。后者正是我希望在研究生阶段系统深造的，包括科学测量、实验设计，以及真正具有统计意义的规模化学习数据分析。',
      ],
    },
  },
];

export const CURRENTLY: L<string[]> = {
  en: [
    'PaperCraft is complete: the final report was submitted in October 2026, after a pilot with two teachers, and is written up as an IEEE-format manuscript.',
    'Starting my translation thesis at GDUFS. The topic is not settled yet; the working direction is how multimodal co-text, such as posters and synopses, changes a model\'s handling of film titles.',
    'Coding the film title corpus against the three-tier scheme.',
    'Reading on evidence-centred design and item response theory.',
  ],
  zh: [
    'PaperCraft 已于 2026 年 10 月结题：完成了两位教师参与的试点测试，已提交结题报告，并整理成一篇 IEEE 格式的论文手稿。',
    '广外的翻译学毕业论文刚刚起步，具体选题尚未最终敲定，初步打算研究海报、剧情简介等多模态伴随文本会如何影响大模型翻译电影片名。',
    '对照三层分类方案，对电影片名语料库进行编码标注。',
    '研读以证据为中心的设计（ECD）与项目反应理论（IRT）相关文献。',
  ],
};
