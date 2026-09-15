import type { L, Paragraphs } from './types';

export const ABOUT_LEDE: Paragraphs = {
  en: [
    'I study translation at one university and computer science at another, which sounds like an administrative accident and turned out to be the whole point.',
    'Both disciplines have spent the last three years being told that a machine can now do the thing they train people to do. Neither has a satisfying answer to the obvious follow-up: then what exactly is the human contribution, and how would you know if it disappeared?',
  ],
  zh: [
    '我在一所大学读翻译，又在另一所读计算机。这个双学位当初近乎偶然，读到第三年才发现，我真正感兴趣的问题恰好长在两门学科的交界处。',
    '过去三年，翻译课和计算机课上反复出现同一种说法，说这些活儿机器现在都能做了。可人到底还剩下哪一部分贡献，两边的老师都答不上来。我更想追的是后半句：这部分贡献要是哪天真没了，我们凭什么发现。',
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
        '2024 年那学期，我一边上数据结构和翻译理论，一边带两个剑桥 KET 小班。练习都是我自己一份份手写的，一周一套，一套要两个小时。写完心里总是不踏实。难度不好拿捏，本想比真考略容易些，出来常常又偏了。官方真题就那么多，很快就用完。剩下能选的话题也旧，孩子提不起兴趣，连我自己都读不下去。',
        '这种抱怨每个老师都有，本不值一提。真正让我停下来的是另一件事。**那两个小时里，到底哪些判断只有我能做**，哪些换成模型也一样。这问题本来测得出来，却几乎没人去测。后来我干脆做了个工具，就为了把答案记下来。',
        '翻译这边，等着我的还是同一个问题。我学的这门手艺，外面早有人说机器翻译已经替代了。系里最常见的辩护是人比机器细腻，可细腻到底体现在哪，谁也拿不出能衡量的东西。做过电影片名之后，我总算有了一把尺子。把译者在文化图式上的每一处处理都归好类，哪些是真诊断，哪些只是套了默认答案，就不再是各说各话的事了。',
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
        '我比较拿得出手的一件事，是把说不清的概念做成能记录的东西。教师投入、文化敏感度、题目质量，这些词人人都在用，可一追问具体指什么，就没人接得上。我的活大半花在这一步上，既不体面也不显眼。先想清楚什么才算证据，再一点点做出能把它采下来的东西。',
        '真到要做，我一个人也能把整套系统啃下来。登录鉴权、数据库结构、带类型修复的模型路由、导出 Word 和 PDF、上线部署，都是自己来。会全栈本身没什么了不起。可研究工具要是没人用得起来，一条数据都采不到，所以这些活我只能自己扛。今年夏天我把同一套本事挪了个地方用，在一家上市公司的内网里自己跑开源模型，没去调别人的 API。',
        '还有一点，我习惯写给不认同我的人看。这么写了六年，有阅读量过十万的科技长文，有词源随笔，有校友专稿，还拍过一部短片。写久了眼睛会变尖。一个论证是靠语气在撑，还是真有证据，一眼就看得出来。看自己的稿子也一样。',
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
        '这三个项目其实落在同一个交点上，我想接着待在那儿。一手做工具，把人的贡献显出来，一手真把研究跑起来，看设计到底站不站得住。我缺的是后半段的训练。测量怎么做，实验怎么设计，样本量上去以后数据又该怎么读。',
        '作品集里最空的一格是证据。系统做出来了，研究方案也写好了，可到今天一次都还没真跑过。这是我最想补的一块，也是我去读研的理由。',
      ],
    },
  },
];

export const CURRENTLY: L<string[]> = {
  en: [
    'Finishing the PaperCraft evaluation protocol and recruiting KET/PET teachers for the study.',
    'Interning on the IT team at Guangdong Dowstone, working on on-premise LLM deployment and a document-retrieval knowledge base.',
    'Coding the film title corpus against the three-tier scheme.',
    'Reading on evidence-centred design and item response theory.',
  ],
  zh: [
    '推进 PaperCraft 评估方案的收尾工作，并招募有意向的 KET / PET 教师参与研究。',
    '在广东道氏技术 IT 部实习，负责本地大模型部署，并基于内部文档构建检索增强（RAG）知识库。',
    '基于三层标注方案，对电影片名语料进行编码。',
    '研读以证据为中心的设计（ECD）与项目反应理论（IRT）方向的文献。',
  ],
};
