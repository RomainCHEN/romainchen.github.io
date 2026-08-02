import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another, which sounds like an administrative accident and turned out to be the whole point.',
    'Both disciplines have spent the last three years being told that a machine can now do the thing they train people to do. Neither has a satisfying answer to the obvious follow-up: then what exactly is the human contribution, and how would you know if it disappeared?',
  ],
  zh: [
    '我在一所学校读翻译，在另一所读计算机。当初看着像是志愿填报时出的岔子，后来才发现，我做的事全从这儿长出来。',
    '这三年里，我在两边听到的是同一句话：机器已经能做我们花四年学的这件事了。可紧接着该问的那个问题，两边都答不好。人到底还剩下什么？万一这份贡献真的没了，你凭什么发现？',
  ],
};

export const ABOUT_BODY: { heading: L; body: Paragraphs }[] = [
  {
    heading: { en: 'How I got here', zh: '我是怎么走到这一步的' },
    body: {
      en: [
        'I started teaching Cambridge KET to two small classes of primary students in 2024, while taking data structures and translation theory in the same term. Every week I hand-wrote a set of practice exercises, about two hours each, and every week I was uneasy about them. I could not control difficulty, official past papers ran out, and the topics were too stale for a child to care about.',
        'That is an unremarkable teacher complaint. What made it interesting was noticing that the thing I actually wanted was not faster generation. I wanted to know *which parts of the work were mine*, meaning which decisions in that two hours were the ones a model could not have made. That question is measurable, and almost nobody measures it. So I built a tool whose purpose is to record the answer.',
        'The same question was waiting for me in translation. My programme trains us in a craft that machine translation is supposed to have solved, and the defence usually offered, that human translators are more "sensitive", is a claim without an instrument. Working on film titles gave me one. Classify what the translator did to the cultural schema, and the difference between diagnosis and default pattern-matching stops being a matter of taste.',
      ],
      zh: [
        '2024 年我开始带两个 KET 小班，学生都是小学生；那个学期我自己还在上数据结构和翻译理论。练习每周手写一套，一套两小时上下，写完总是心里没底。难度压不住，官方真题很快见底，剩下的话题又旧得让孩子提不起劲。',
        '这种抱怨每个老师都有，不值一提。但我后来想明白，我要的其实不是生成得更快。我想知道**这份活里哪些部分是我的**，也就是那两个小时里，哪些判断模型做不出来。这件事是能测的，可几乎没人去测。于是我做了个工具，就是为了把答案记下来。',
        '到了翻译那边，等着我的还是同一个问题。我学的这门手艺，外面都说机器翻译已经把它做完了；系统里常见的辩护是人比机器细腻。可细腻这事，谁也拿不出东西来量。研究电影片名给了我一把尺子：先把译者在文化图式上做过哪些处理分类，再看谁是诊断出来的、谁是套了默认答案，这就有了判据，不用再靠嘴上争。',
      ],
    },
  },
  {
    heading: { en: 'What I am actually good at', zh: '我真正擅长的事' },
    body: {
      en: [
        'Turning a vague construct into something you can record. "Teacher effort", "cultural sensitivity", "item quality": these are the words people wave at each other without defining. Most of my work is the unglamorous step of deciding what would count as evidence, then building the thing that captures it.',
        'Shipping the whole stack alone when it comes to that. Auth, database schema, LLM routing with typed repair, export to Word and PDF, deployment. Full-stack work is not the point; a research instrument nobody can use produces no data.',
        'Writing for people who do not already agree with me. Six years of it: technology essays with six-figure readerships, etymology pieces, alumni features, a short film. What it taught me was to notice when an argument is being carried by tone rather than evidence, including my own.',
      ],
      zh: [
        '第一件是把说不清的概念变成能记录的东西。教师投入、文化敏感度、题目质量，这些词人人都在用，可谁也没说清它们到底指什么。我的活大半就在这一步上，不体面也不好看：先想清楚什么才算证据，再把能采到它的东西做出来。',
        '第二件是必要时一个人把整套东西做完。登录鉴权、数据库结构、带类型修复的模型路由、导出 Word 和 PDF、上线部署。会全栈本身没什么了不起，可工具要是没人用得起来，就一条数据也采不到。',
        '第三件是写给不同意我的人看。六年下来写过十万级阅读的科技长文、词源随笔、校友专稿，还拍过一部短片。写得久了，我最大的收获是能看出一个论证到底靠语气撑着还是靠证据，我自己写的也一样看。',
      ],
    },
  },
  {
    heading: { en: 'What I want to do next', zh: '接下来想做的事' },
    body: {
      en: [
        'I want to keep working at the junction these three projects share: designing tools that make a human contribution visible, and then actually running the studies that test whether the design was right. The part I am missing is the training to do the second half properly, meaning measurement, experimental design, and learning analytics at a scale where the statistics mean something.',
        'The honest gap in my portfolio is evidence. I have built systems and specified the studies; I have not yet run them. That is the thing I most want to fix, and it is why graduate study rather than another product.',
      ],
      zh: [
        '这三个项目其实指着同一个位置，我想继续待在那儿：做能让人的贡献显形的工具，然后真去做研究，看这个设计到底对不对。我缺的是把后半段做扎实的训练，测量、实验设计，以及在样本量够大、统计量说得上话的时候做学习分析。',
        '我作品集里真正的短板是证据。系统做出来了，研究方案也写好了，可还没真跑过。这一块我最想补上，也正因为如此，我选择去读研，而不是再做一个产品。',
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
    '在收尾 PaperCraft 的评估方案，同时找愿意参加的 KET / PET 老师。',
    '在按三层方案给电影片名语料做编码。',
    '在读证据中心设计和项目反应理论的文献。',
  ],
};

export const COLOPHON: Paragraphs = {
  en: [
    'This site is a static Next.js build, deployed from GitHub Actions, with no analytics, no cookies and no third-party requests. Headings and body text are set in Newsreader, interface text in Instrument Sans, data in IBM Plex Mono.',
  ],
  zh: [
    '本站用 Next.js 做静态构建，由 GitHub Actions 部署。没有统计脚本，没有 cookie，也不向第三方发请求。标题和正文用 Newsreader，界面文字用 Instrument Sans，数据用 IBM Plex Mono。',
  ],
};
