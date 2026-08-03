import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another, which sounds like an administrative accident and turned out to be the whole point.',
    'Both disciplines have spent the last three years being told that a machine can now do the thing they train people to do. Neither has a satisfying answer to the obvious follow-up: then what exactly is the human contribution, and how would you know if it disappeared?',
  ],
  zh: [
    '我读的是双学位，翻译在广外，计算机在澳门理工，两边各上一半课。当初这两个专业凑在一起纯属巧合，我也说不上什么规划，可后来发现自己真感兴趣的东西恰好都长在这两门中间。',
    '翻译课和计算机课上都有老师说过同样的话，说这些活儿机器现在也干得了。可人到底还剩下哪一部分，两边都讲不清楚。偏偏这一部分要是哪天悄悄没了，恐怕根本没人发现。',
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
        '2024 年我带了两个 KET 小班，一共六个孩子，自己那学期还在上数据结构和翻译理论。练习都是我手写的，一周一套，每套差不多两个小时，写完心里从来没底过。难度我压不住，本想着比真考容易一点，结果常常偏；官方真题又有限，很快就用完，剩下能挑的话题都太旧，孩子根本提不起兴趣。',
        '这种抱怨每个老师都会有，本身不值一提。可后来我慢慢想明白，我真正想省的其实不是时间。我更想弄清楚**那两个小时里，哪些判断只有我能做**，哪些模型也能替我做。这件事本来是测得出来的，偏偏几乎没人测。后来我干脆做了个工具，专门把这个答案记下来。',
        '翻译那边等我的还是同一个问题。我学的这门手艺，外面早有人说机器翻译已经做完了，系里最常见的回应就是"人比机器细腻"。细腻到底细在哪儿？谁都拿不出东西来量。研究电影片名之后我算是有了一把尺子，把译者在文化图式上动的手脚一条条归好类，再看哪些是真的诊断出来的、哪些只是套了默认答案，这样一比就有了依据，不用再靠嘴硬。',
      ],
    },
  },
  {
    heading: { en: 'What I am actually good at', zh: '我真正擅长的事' },
    body: {
      en: [
        'Turning a vague construct into something you can record. "Teacher effort", "cultural sensitivity", "item quality": these are the words people wave at each other without defining. Most of my work is the unglamorous step of deciding what would count as evidence, then building the thing that captures it.',
        'Shipping the whole stack alone when it comes to that. Auth, database schema, LLM routing with typed repair, export to Word and PDF, deployment. Full-stack work is not the point; a research instrument nobody can use produces no data. I spent this summer applying the same skills inside a listed manufacturer, running quantised models on its own network rather than someone else’s API.',
        'Writing for people who do not already agree with me. Six years of it: technology essays with six-figure readerships, etymology pieces, alumni features, a short film. What it taught me was to notice when an argument is being carried by tone rather than evidence, including my own.',
      ],
      zh: [
        '我比较拿得出手的一件事，是把说不清的概念变成能记录的东西。教师投入、文化敏感度、题目质量，人人都在用这些词，可谁也没说清楚它们到底指什么。我的活大半就耗在这一步，既不体面也不好看：得先想清楚什么才算证据，再把能采到它的东西一点点做出来。',
        '需要的时候我也能一个人把整套东西做完，登录鉴权、数据库结构、带类型修复的模型路由、导出 Word 和 PDF、上线部署。会全栈本身没什么了不起，可工具要是没人用得起来就一条数据也采不到，这才是我非得自己动手的原因。今年夏天我把这套本事换了个场景用，在一家上市公司的内网上跑量化后的开源模型，而不是调别人的 API。',
        '另外我习惯写给不同意我的人看。六年下来写过十万级阅读的科技长文，写过词源随笔和校友专稿，也拍过一部短片。写得久了眼睛变毒，一个论证到底靠语气撑着还是真有证据，我基本能看出来，看自己的也一样。',
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
        '三个项目其实指着同一个位置，我想继续待在那儿，一边做能让人的贡献显出形状的工具，一边真去跑研究，看设计到底站不站得住。我欠的是后半段的训练：测量怎么做、实验怎么设计、样本量够大之后该怎么分析。',
        '我作品集里真正的短板是证据。系统做出来了，研究方案也写好了，可一次都还没真跑过。这一块我最想补上，也是我想去读研而不是继续做产品的原因。',
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
    '在收尾 PaperCraft 的评估方案，同时找愿意参加的 KET / PET 老师。',
    '这个夏天在广东道氏技术的 IT 部实习，在企业内网部署量化后的开源模型，再给内部文档搭检索增强的知识库。',
    '在按三层方案给电影片名语料做编码。',
    '在读证据中心设计和项目反应理论的文献。',
  ],
};
