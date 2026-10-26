import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another.',
    'AI arrived in force during my undergraduate years. The more I work with it and learn to use it well, the more I can make. The two disciplines let me look at it from both sides: the humanities for reading people, computer science for working inside the machine.',
  ],
  zh: [
    '我在两所大学分别修读翻译和计算机科学。',
    '我读本科这几年正赶上 AI 爆发，用得越多、越懂得怎么用好它，我能做成的事就越多。两个专业一文一理，人文让我读得懂人，计算机让我明白机器如何运转。',
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
        '2024 年，我一边修读数据结构和翻译理论，一边给两个剑桥 KET 小班上课。备课相当繁琐，每周都要找真题、改题目，再按难度组成一套练习。即便如此，难度仍不好把握，可用的真题有限，现成的话题也很难引起孩子的兴趣。',
        '这些问题几乎每位老师都遇到过。我更想知道，备课时**哪些判断必须由我来做**，哪些可以交给模型。这个问题测得出来，却很少有人认真测过，我便自己动手做了工具，把答案记录下来。',
        '翻译研究里也有同样的问题。不少人认为机器翻译已能胜任这门专业的大部分工作，常见的反驳是人工译者更有文化敏感度，可这种敏感度体现在哪里，一直没有办法衡量。电影片名研究给了我一个办法：把译者处理文化图式的方式逐一分类标注，哪些是专业判断、哪些只是沿用常规译法，就能拿证据来核对。',
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
        '我擅长把模糊的概念变成可以记录的数据。教师投入、文化敏感度、题目质量，这些词人人都在用，却很少有人说清它们指什么。我的大部分工作就是界定什么算证据，并为此设计、搭建采集工具。',
        '我能独立完成研究工具从设计到上线的全部工程，包括身份认证、数据库设计、带类型修复的模型调用路由、Word 与 PDF 导出和部署。工具真正好用，才能采集到数据，所以我把工程实现也当作研究的一部分。今年夏天，我在一家上市制造企业实习，在内网环境部署量化大模型。',
        '我给大众写作也有六年了，写过阅读量超过十万的科技长文，也写词源随笔和校友专访，还拍过一部短片。写作让我习惯拿证据说话，也习惯把专业问题讲给外行读者听。',
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
        '我现在做的是以人为中心的人机交互研究，今后也想继续做下去：设计人与 AI、与 agent 协作时使用的界面和工具，并观察人在协作中如何形成新的工作方式和学习方式。我既关心模型能做什么，也关心人在其中做了哪些判断、学到了什么。',
        '做这类研究，工具要做得好，设计是否有效也要用严谨的方法检验。前者我已有一些积累；后者是我想在研究生阶段系统学习的，包括测量方法、实验设计，以及大样本学习数据的分析。',
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
    'PaperCraft 已经结题。两位教师参加了试点，结题报告在 2026 年 10 月提交，并整理成了一篇 IEEE 格式的论文稿。',
    '广外的翻译学毕业论文刚刚起步，选题还没定下来，初步打算研究海报、剧情简介等多模态伴随文本如何影响大模型翻译片名。',
    '按三层标注方案编码电影片名语料。',
    '研读以证据为中心的设计（ECD）与项目反应理论（IRT）的相关文献。',
  ],
};
