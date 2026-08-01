import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another, which sounds like an administrative accident and turned out to be the whole point.',
    'Both disciplines have spent the last three years being told that a machine can now do the thing they train people to do. Neither has a satisfying answer to the obvious follow-up: then what exactly is the human contribution, and how would you know if it disappeared?',
  ],
  zh: [
    '我在一所学校读翻译，在另一所读计算机。这听着像是选专业时出的岔子，后来却成了我做事的出发点。',
    '这三年里，两个专业都被反复告知同一件事，机器已经能做我们花四年学的那件事了。可紧接着的问题，两边都答不好。人到底还剩下什么贡献？万一这份贡献真的没了，你凭什么发现？',
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
        '2024 年我开始带两个 KET 小班，学生都是小学生，同一学期我还在上数据结构和翻译理论。每周手写一套练习，一套两小时上下，而我每周都心里没底：难度压不住，官方真题很快见底，剩下的话题又旧得让孩子提不起劲。',
        '这只是个再普通不过的老师抱怨。有意思的地方在于，我后来发现自己想要的并不是“生成得更快”。我想弄清的是**这份活里哪些部分是我的**，也就是那两个小时里哪些判断模型做不出来。这个问题是能测的，可几乎没人去测。于是我做了个工具，它存在的意义就是把答案记下来。',
        '到了翻译那边，等着我的还是同一个问题。我的专业教的是一门据说已经被机器翻译解决掉的手艺，而常见的辩护是人类译者更细腻。可这个说法没有任何东西可以拿来量。研究电影片名给了我一把尺子。把译者对文化图式做了什么归类，诊断和套用默认模式之间的差别就不再是各说各话。',
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
        '第一件是把说不清的概念变成能记录的东西。教师投入、文化敏感度、题目质量，这些词大家挥来挥去，谁也没给过定义。我的工作大半在那个不起眼的环节上，先想清楚什么才算证据，再把能采到它的东西做出来。',
        '第二件是必要时一个人把整套技术栈交付出来。登录鉴权、数据库结构、带类型修复的模型路由、导出 Word 和 PDF、上线部署。全栈本身没什么了不起，但没人用得起来的研究工具采不到任何数据。',
        '第三件是写给不同意我的人看。六年公开写作：十万级阅读的科技长文、词源随笔、校友专稿，还有一部短片。它教我最多的，是识别一个论证什么时候靠语气撑着而不是靠证据，包括我自己写的。',
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
        '我想继续待在这三个项目共同指向的位置上。做能让人的贡献显形的工具，然后真去做那些检验设计对不对的研究。我缺的是把后半段做扎实的训练，测量、实验设计，还有在样本量足以让统计量说得上话的规模上做学习分析。',
        '我作品集里最实在的短板就是证据。系统我做出来了，研究方案我也写好了，但还没真跑过。这是我最想补上的一块，也是我选择读研而不是再做一个产品的原因。',
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
    '收尾 PaperCraft 的评估方案，同时在找愿意参与的 KET / PET 老师。',
    '按三层方案给电影片名语料做编码。',
    '在读证据中心设计和项目反应理论的文献。',
  ],
};

export const COLOPHON: Paragraphs = {
  en: [
    'This site is a static Next.js build, deployed from GitHub Actions, with no analytics, no cookies and no third-party requests. Headings and body text are set in Newsreader, interface text in Instrument Sans, data in IBM Plex Mono.',
  ],
  zh: [
    '本站是 Next.js 静态构建，由 GitHub Actions 部署。没有统计脚本，没有 cookie，不向第三方发请求。标题和正文用 Newsreader，界面文字用 Instrument Sans，数据用 IBM Plex Mono。',
  ],
};
