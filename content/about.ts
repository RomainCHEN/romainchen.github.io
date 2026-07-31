import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another, which sounds like an administrative accident and turned out to be the whole point.',
    'Both disciplines have spent the last three years being told that a machine can now do the thing they train people to do. Neither has a satisfying answer to the obvious follow-up: then what exactly is the human contribution, and how would you know if it disappeared?',
  ],
  zh: [
    '我在一所大学读翻译，在另一所读计算机。这听起来像是一次行政意外，结果却成了全部的重点。',
    '过去三年里，这两个学科都被反复告知：机器现在能做它们培养人去做的事了。而对于随之而来的显然问题，两边都没有令人满意的答案——那么人的贡献究竟是什么，以及如果它消失了，你怎么会知道？',
  ],
};

export const ABOUT_BODY: { heading: L; body: Paragraphs }[] = [
  {
    heading: { en: 'How I got here', zh: '我是怎么走到这里的' },
    body: {
      en: [
        'I started teaching Cambridge KET to two small classes of primary students in 2024, while taking data structures and translation theory in the same term. Every week I hand-wrote a set of practice exercises, about two hours each, and every week I was uneasy about them: I could not control difficulty, official past papers ran out, and the topics were too stale for a child to care about.',
        'That is an unremarkable teacher complaint. What made it interesting was noticing that the thing I actually wanted was not faster generation. I wanted to know *which parts of the work were mine* — which decisions in that two hours were the ones a model could not have made. That question is measurable, and almost nobody measures it. So I built a tool whose purpose is to record the answer.',
        'The same question was waiting for me in translation. My programme trains us in a craft that machine translation is supposed to have solved, and the defence usually offered — that human translators are more "sensitive" — is a claim without an instrument. Working on film titles gave me one: classify what the translator did to the cultural schema, and the difference between diagnosis and default pattern-matching stops being a matter of taste.',
      ],
      zh: [
        '2024 年我开始给两个小学生小班教剑桥 KET，同一学期还在上数据结构和翻译理论。每周我手写一套练习，每套约两小时，而每周我都不安：难度控制不了、官方真题很快用完、话题陈旧到孩子提不起兴趣。',
        '这只是一个平常的教师抱怨。真正有意思的地方在于我意识到：我想要的其实不是更快的生成，而是想知道**这份工作里哪些部分是我的**——那两个小时里，有哪些决定是模型做不出来的。这个问题是可测量的，而几乎没有人去测。于是我做了一个工具，它的目的就是把答案记录下来。',
        '同样的问题在翻译那边等着我。我的专业训练的是一门据说已经被机器翻译解决了的手艺，而通常给出的辩护——人类译者更"细腻"——是一个没有仪器的主张。研究电影片名给了我一件仪器：对译者在文化图式上做了什么进行分类，于此"诊断"与"默认模式匹配"之间的差别就不再是品味问题。',
      ],
    },
  },
  {
    heading: { en: 'What I am actually good at', zh: '我实际擅长什么' },
    body: {
      en: [
        '**Turning a vague construct into something you can record.** "Teacher effort", "cultural sensitivity", "item quality" — these are the words people wave at each other. Most of my work is the unglamorous step of deciding what would count as evidence, then building the thing that captures it.',
        '**Shipping the whole stack alone when necessary.** Auth, database schema, LLM routing with typed repair, export to Word and PDF, deployment. Not because full-stack work is the point, but because a research instrument that nobody can use produces no data.',
        '**Writing for people who do not already agree with me.** Six years of publishing — technology essays with six-figure readerships, etymology pieces, alumni features, a short film — has mostly taught me to notice when an argument is being carried by tone rather than evidence, including my own.',
      ],
      zh: [
        '**把模糊的构念变成可记录的东西。** "教师投入"、"文化敏感度"、"题目质量"——这些都是人们互相挥舞的词。我的工作大部分是那个不体面的步骤：决定什么才算证据，然后把采集它的东西做出来。',
        '**必要时独自交付整个技术栈。** 认证、数据库模式、带类型修复的 LLM 路由、导出 Word 与 PDF、部署上线。不是因为全栈本身重要，而是因为没人能用的研究仪器产不出数据。',
        '**为不同意我的人写作。** 六年的公开写作——六位数阅读量的科技长文、词源随笔、校友专稿、一部短片——主要教会我识别一个论证何时是靠语气而非证据在支撑，包括我自己的论证。',
      ],
    },
  },
  {
    heading: { en: 'What I want to do next', zh: '接下来想做什么' },
    body: {
      en: [
        'I want to keep working at the junction these three projects share: designing tools that make a human contribution visible, and then actually running the studies that test whether the design was right. The part I am missing is the training to do the second half properly — measurement, experimental design, learning analytics at a scale where the statistics mean something.',
        'The honest gap in my portfolio is evidence. I have built systems and specified the studies; I have not yet run them. That is the thing I most want to fix, and it is why graduate study rather than another product.',
      ],
      zh: [
        '我想继续在这三个项目共有的交叉点上工作：设计能让"人的贡献"变得可见的工具，然后真正去做检验设计是否正确的研究。我欠缺的是把后半部分做扎实的训练——测量、实验设计，以及在统计量真正有意义的规模上做学习分析。',
        '我作品集里诚实的短板就是实证证据。我构建了系统，也写好了研究方案，但还没有真正跑过它们。这是我最想补上的东西，也是我选择读研而不是再做一个产品的原因。',
      ],
    },
  },
];

export const CURRENTLY: L<string[]> = {
  en: [
    'Finishing the PaperCraft evaluation protocol and recruiting KET/PET teachers for the study.',
    'Coding the film title corpus against the three-tier scheme.',
    'Reading on evidence-centred design and item response theory.',
  ],
  zh: [
    '完成 PaperCraft 的评估方案，并为研究招募 KET/PET 教师。',
    '按三层编码方案标注电影片名语料。',
    '阅读证据中心设计与项目反应理论相关文献。',
  ],
};

export const COLOPHON: Paragraphs = {
  en: [
    'This site is a static Next.js build, deployed from GitHub Actions, with no analytics, no cookies and no third-party requests. Headings and body text are set in Newsreader, interface text in Instrument Sans, data in IBM Plex Mono.',
  ],
  zh: [
    '本站是 Next.js 静态构建，通过 GitHub Actions 部署，无统计脚本、无 cookie、无第三方请求。标题与正文使用 Newsreader，界面文字使用 Instrument Sans，数据使用 IBM Plex Mono。',
  ],
};
