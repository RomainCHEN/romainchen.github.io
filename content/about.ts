import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another.',
    'AI arrived in force during my undergraduate years. The more I work with it and learn to use it well, the more I can make. The two disciplines let me look at it from both sides: the humanities for reading people, computer science for working inside the machine.',
  ],
  zh: [
    '我在两所大学分别修读翻译和计算机科学。',
    '我读本科的这几年，正赶上 AI 爆发。越是上手使用、越是研究如何用好，我能做成的事情就越多。文理两个专业让我能从两头看它：人文帮我读懂人，计算机让我明白机器怎样运转。',
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
        '这些问题几乎每位老师都遇到过。我更在意的是另一件事：在这套备课流程里，**哪些判断必须由我来做**，哪些可以交给模型。这个问题可以测量，却很少有人认真去测，于是我动手做了工具，把答案记录下来。',
        '在翻译研究里，我遇到的是同一个问题。外界认为机器翻译已能胜任这门专业的大部分工作，常见的回应是人工译者更有文化敏感度，但这种敏感度体现在哪里，一直缺少可以衡量的工具。电影片名研究提供了一种办法。把译者处理文化图式的方式逐一分类标注，哪些是专业判断，哪些只是沿用常规译法，就有了可以核查的依据。',
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
        '我擅长把模糊的概念转化为可以记录的数据。教师投入、文化敏感度、题目质量，这些词人人都在用，却很少有人明确定义。我的大部分工作，是先界定什么可以算作证据，再设计并搭建采集这些证据的工具。',
        '研究工具的工程我能一个人做完，包括身份认证、数据库设计、带类型修复的模型调用路由、Word 与 PDF 导出和部署。研究工具只有真正可用，才能采集到数据，所以我把工程实现视为研究的一部分。今年夏天，我在一家上市制造企业实习，在内网环境部署量化大模型。',
        '我还有六年面向公众写作的经历，写过阅读量逾十万的科技长文、词源随笔和校友专访，也拍过一部短片。这段经历让我习惯用证据支撑论点，也习惯把专业问题讲给领域之外的读者听。',
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
        '我现在做、将来也想继续做的，是以人为中心的人机交互研究。一方面设计人与 AI、与 agent 协作时用的界面和工具，一方面观察人在这种协作里怎样形成新的做事方式和学习方式。模型能做什么我关心，人在其中做了哪些判断、学到了什么，我同样关心。',
        '这类研究既需要把工具做好，也需要用严谨的方法检验设计是否有效。前一部分我已有一定积累，后一部分正是我希望在研究生阶段系统学习的内容，包括测量方法、实验设计，以及如何在较大样本上分析学习数据。',
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
    'PaperCraft 已完成：2 位教师参与试点后，结题报告于 2026 年 10 月提交，并整理成一篇 IEEE 格式的论文稿。',
    '广外的翻译学毕业论文刚刚起步，选题还没有最终确定。初步方向是：海报、剧情简介等多模态伴随文本，会怎样改变大模型对片名的处理。',
    '按三层标注方案编码电影片名语料。',
    '研读以证据为中心的设计（ECD）与项目反应理论（IRT）的相关文献。',
  ],
};
