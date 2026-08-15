import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another, which sounds like an administrative accident and turned out to be the whole point.',
    'Both disciplines have spent the last three years being told that a machine can now do the thing they train people to do. Neither has a satisfying answer to the obvious follow-up: then what exactly is the human contribution, and how would you know if it disappeared?',
  ],
  zh: [
    '广外读翻译，澳门理工读计算机。双学位当初纯属偶然，到第三年才发现，自己感兴趣的问题刚好长在两门课中间。',
    '这几年翻译课和计算机课上都出现过同一句话，说这些活儿机器已经会干了。人还剩下哪一部分，两边的老师都说不太清楚。我更在意的是，假如这一部分某天真的没了，我们靠什么发现。',
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
        '2024 年我带过两个 KET 小班，一共六个孩子，那学期自己还在上数据结构和翻译理论。练习都是我一份份手写的，一周一套，一套两个小时。写完心里从来没底。难度压不准，本想比真考简单一点，出来常常偏；官方真题总量有限，用完就没了，剩下能挑的话题旧得连我自己都看不下去，孩子更别提。',
        '这种抱怨每个老师都有，不值一提。让我停下来的是另一件事，**那两个小时里，哪些判断只有我能做**，哪些换成模型也一样。这个问题本来测得出来，可几乎没人去测。我后来干脆做了个工具，就为了把答案记下来。',
        '翻译那边等着我的还是同一个问题。我学的这门手艺，外头早有人说机器翻译替掉了，系里最常听到的回应是人比机器细腻。细腻在哪儿，谁也拿不出东西来量。做电影片名之后我手上算是有了一把尺子，把译者在文化图式上动过的每一处分好类，再看哪些是真诊断出来的，哪些只是套了默认答案。这样一比就有依据，不用靠嘴硬。',
      ],
    },
  },
  {
    heading: { en: 'What I am actually good at', zh: '我拿得出手的部分' },
    body: {
      en: [
        'Turning a vague construct into something you can record. "Teacher effort", "cultural sensitivity", "item quality": these are the words people wave at each other without defining. Most of my work is the unglamorous step of deciding what would count as evidence, then building the thing that captures it.',
        'Shipping the whole stack alone when it comes to that. Auth, database schema, LLM routing with typed repair, export to Word and PDF, deployment. Full-stack work is not the point; a research instrument nobody can use produces no data. I spent this summer applying the same skills inside a listed manufacturer, running quantised models on its own network rather than someone else’s API.',
        'Writing for people who do not already agree with me. Six years of it: technology essays with six-figure readerships, etymology pieces, alumni features, a short film. What it taught me was to notice when an argument is being carried by tone rather than evidence, including my own.',
      ],
      zh: [
        '我手上比较硬的一项本事，是把说不清的概念变成能记录的东西。教师投入、文化敏感度、题目质量，这些词人人在用，问到底指什么就没人接得上。我的活大半耗在这一步，既不体面也不出彩，先想清楚什么才算证据，再把能采到它的东西一点点做出来。',
        '需要的时候我一个人也能把整套做完，登录鉴权、数据库结构、带类型修复的模型路由、导出 Word 和 PDF、上线部署。会全栈没什么了不起。可工具要是没人用得起来，一条数据也采不到，所以这些活我只能自己扛。今年夏天我把同一套本事换了个场地用，在一家上市公司的内网里跑量化后的开源模型，没去调别人的 API。',
        '还有一点，我习惯写给不同意我的人看。六年里写过十万阅读量的科技长文，写过词源随笔和校友专稿，也拍过一部短片。写久了眼睛变毒，一个论证是靠语气撑着还是真有证据，一眼能看出来，看自己的稿子也一样。',
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
        '三个项目其实都落在同一个位置上，我想接着待在那儿，一手做能把人的贡献记下来的工具，一手把研究跑起来，看设计站不站得住。我缺的是后半段的训练，测量怎么做，实验怎么设计，样本量上去之后数据该怎么读。',
        '作品集里最空的一格是证据。系统做出来了，研究方案也写好了，可到今天一次都没真跑过。这块我最想补上，去读研也是为了这个，再做一个产品补不上。',
      ],
    },
  },
];

export const CURRENTLY: L<string[]> = {
  en: [
    'Finishing the PaperCraft evaluation protocol and recruiting KET/PET teachers for the study.',
    'Interning in the IT department at Guangdong Dowstone this summer, deploying quantised open-source models on the company network and building a retrieval-augmented knowledge base over internal documents.',
    'Coding the film title corpus against the three-tier scheme.',
    'Reading on evidence-centred design and item response theory.',
  ],
  zh: [
    '在把 PaperCraft 的评估方案收尾，同时找愿意参加的 KET / PET 老师。',
    '这个夏天在广东道氏技术的 IT 部实习，在企业内网部署量化后的开源模型，再拿内部文档搭一个检索增强的知识库。',
    '按三层方案给电影片名语料做编码。',
    '在读证据中心设计和项目反应理论那一路的文献。',
  ],
};
