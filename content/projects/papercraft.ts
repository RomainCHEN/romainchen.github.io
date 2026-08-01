import type { Project } from '../types';

/**
 * PaperCraft. The spine of the portfolio.
 *
 * Evidence discipline: the system is built and running; the teacher evaluation
 * has not been run. Nothing on this page claims an empirical result. The
 * "evidence" section states the status of each research component explicitly.
 */
export const papercraft: Project = {
  slug: 'papercraft',
  index: '01',
  title: 'PaperCraft',
  subtitle: {
    en: 'Making the division of labour between a teacher and a language model measurable',
    zh: '把教师和语言模型之间的分工变成可以测量的东西',
  },
  blurb: {
    en: "A teacher-in-the-loop authoring tool for Cambridge KET/PET exercises, instrumented so that the teacher's remaining work becomes data.",
    zh: '一个面向剑桥 KET / PET 的出题工具。教师必须在环，而他改动了什么会被记录成数据。',
  },
  period: { en: 'May 2026 to present', zh: '2026 年 5 月至今' },
  role: {
    en: 'Sole developer and research design',
    zh: '独立开发，研究设计',
  },
  discipline: {
    en: 'Learning engineering · Human–AI interaction · Language assessment',
    zh: '学习工程 · 人机交互 · 语言测评',
  },
  tags: [
    'Next.js',
    'TypeScript',
    'Supabase',
    { en: 'LLM pipeline', zh: '大模型管线' },
    { en: 'Psychometrics', zh: '心理测量' },
    'CEFR',
  ],
  hero: {
    src: '/work/papercraft/workspace-generate.webp',
    w: 2400,
    h: 1500,
    alt: {
      en: 'The PaperCraft authoring workspace, showing exercise type selection and generation controls.',
      zh: 'PaperCraft 出题工作区，左侧是题型与语法点选择，右侧是生成区。',
    },
  },
  links: [
    { label: { en: 'Live system', zh: '在线系统' }, href: 'https://fyp.z-chen.dev/', primary: true },
    { label: { en: 'Design narrative', zh: '设计叙事页' }, href: 'https://fyp.z-chen.dev/research' },
    {
      label: { en: 'Early progress report', zh: '早期进度报告' },
      href: '/fyp_progress_report/index.html',
    },
  ],
  facts: [
    {
      label: { en: 'Exam parts encoded', zh: '已编码的考试部分' },
      value: { en: '15 item types (KET 7 · PET 8)', zh: '15 种题型（KET 7 种 · PET 8 种）' },
    },
    {
      label: { en: 'Pipeline', zh: '生成管线' },
      value: { en: '7 stages, one of them human', zh: '7 个阶段，其中一个是人' },
    },
    {
      label: { en: 'Wordlists', zh: '词表规模' },
      value: { en: 'A2 2,318 · B1 4,444 headwords', zh: 'A2 2,318 词 · B1 4,444 词' },
    },
    {
      label: { en: 'Evaluation', zh: '实证评估' },
      value: { en: 'Instruments written, study not yet run', zh: '量表与流程已就绪，研究还没开跑' },
    },
  ],
  featured: true,
  sections: [
    {
      kind: 'lede',
      body: {
        en: [
          'I taught two small Cambridge KET classes, six students in total, while doing a computer science degree. Every week I spent about two hours writing one set of practice exercises by hand, and I was never confident in the result.',
          'Three things were wrong, and none of them was speed. Difficulty was not something I could control: I could aim for "a bit easier than the exam" and miss. Official past papers ran out fast, so the same texts came round again. And the topics that did exist were stale, so students had no reason to care about them, which is a motivation problem dressed up as a materials problem.',
        ],
        zh: [
          '读计算机学位的同时，我带着两个剑桥 KET 小班，一共六个学生。每周花两小时左右手写一套练习，写完从来都不放心。',
          '出问题的有三件事，都跟慢没关系。头一件是难度压不住。我想让它比真考稍容易一点，结果照样偏。第二是官方真题很快见底，同一篇语篇只能反复用。第三是现成话题太旧，孩子没有理由在意。说到底这是学习动机的问题，只是看着像材料不够。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The wrong version of this project', zh: '这个项目的错误做法' },
      body: {
        en: [
          'The obvious build is a prompt box that returns exam questions. I think that build is uninteresting, and worse, unfalsifiable: if the output looks plausible, you declare success, and you have learned nothing about whether the items work or about what the teacher still had to do.',
          'So I framed it differently. The interesting object is not the generator. It is the **division of labour** between the model and the teacher, and that division is only a design claim if you can measure it. PaperCraft is an authoring tool built so that two things which are usually invisible become data: how much the teacher had to change, and how the resulting items actually behave when learners answer them.',
        ],
        zh: [
          '最顺手的做法是做一个输入框，让它吐出考题。我觉得这个版本没意思，更要紧的是它没法证伪。输出看着像样就算成功，可题目到底能不能用、教师还得补多少活，你一点都不知道。',
          '所以我换了个思路。真正有意思的对象是模型和教师之间的**分工**，不是生成器本身。而分工要能测出来，才算得上一个设计主张。PaperCraft 的构造目标，就是把两件平常看不见的事变成数据：教师改了多少，题目在学生作答之后表现如何。',
        ],
      },
      note: {
        en: 'This reframing is the whole project. Everything below follows from refusing to evaluate a generator by looking at its output.',
        zh: '这个项目的分量全在这次换思路上。后面所有的设计都从同一个决定出发，就是不靠看输出来评价生成器。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the design is answerable to', zh: '这个设计要对什么负责' },
      body: {
        en: [
          'Complementarity here is a requirement, not a slogan. Holstein, McLaren and Aleven argue that classroom AI should be built around what teachers and machines are respectively good at, and that the complementarity has to be established empirically rather than assumed. So the teacher\'s adjudication is a hard gate in the pipeline, and the delta between the model draft and the teacher\'s version is recorded.',
          'Evidence-centred design supplies the second commitment. Mislevy, Steinberg and Almond treat assessment as a chain of reasoning from observable behaviour to claims about competence, so the system stores item-level responses and computes item statistics rather than a total score. The claim "this generated item is usable" needs evidence about the item, not about the generator.',
          'The evidence then has to arrive in time to be useful. Black and Wiliam, and later work on feedback by Hattie and Timperley, argue for returning per-question evidence while instruction can still change. That is why practice is delivered before the exam rather than after it.',
          'Finally, the pipeline is chained rather than monolithic. Wu, Terry and Cai show that decomposing an LLM task into individually inspectable stages improves transparency and controllability, and Amershi and colleagues supply the interaction-level rationale for making system scope and correction paths visible.',
        ],
        zh: [
          '人机互补在这里是设计要求，不是口号。Holstein、McLaren 和 Aleven 主张，课堂 AI 应该围绕教师和机器各自擅长的部分来设计。互补不能假定，得靠实证确立。所以教师的裁决是管线上一道过不去的闸门，模型初稿和教师终稿之间的差值会被记下来。',
          '另一条依据是证据中心的测评设计。Mislevy、Steinberg 和 Almond 把测评看作一条推理链，从可观察的行为推向关于能力的主张。所以系统存的是逐题作答和项目统计量，不是一个总分。要说“这道生成的题目可用”，需要的是这道题的证据，不是生成器的证据。',
          '证据还得来得及用上。Black 与 Wiliam 的工作，加上 Hattie 和 Timperley 关于反馈的研究，都指向同一件事：证据要在教学还能调整时就交回教师手上。所以练习安排在考试之前。',
          '管线本身也是分段的，不是一整块。Wu、Terry 和 Cai 说明，把大模型任务拆成可逐段检查的阶段，比一个巨型 prompt 更透明也更可控；Amershi 等人的人机交互准则，则给出了“让系统边界和纠错路径可见”的交互层理由。',
        ],
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/workspace-review.webp',
      w: 2400,
      h: 1500,
      alt: {
        en: 'The review surface: a generated exercise shown beside its editing controls, with the approve, edit and reject decision.',
        zh: '审阅界面。生成的练习与编辑控件并列，下方是通过、修改、退回三个操作。',
      },
      caption: {
        en: 'The adjudication surface. Nothing reaches a classroom without an explicit approve, edit or reject decision, and rejection reasons are stored. This is a deliberate piece of friction: without a frozen pre-edit baseline, the teacher\'s contribution cannot be measured at all.',
        zh: '裁决界面。任何内容进课堂之前，都必须经过一次明确的通过、修改或退回，退回的理由会存档。这点阻力是故意留的。如果没有一份冻住的编辑前底稿，教师的贡献根本没法测。',
      },
    },
    {
      kind: 'pipeline',
      heading: { en: 'The pipeline as a research object', zh: '把生成管线当作研究对象' },
      intro: {
        en: [
          'Generation is a staged, typed chain with a human gate rather than one prompt. Each stage exists for a reason that can be argued with. Select a stage to see what it does and why it is there.',
        ],
        zh: [
          '生成不靠一个 prompt 完成。它是一条分阶段、带类型约束、中间有人工闸门的链条。每个阶段的存在都有可以被反驳的理由。点任意一个阶段，看它做什么、为什么要有它。',
        ],
      },
      stages: [
        {
          id: 'S1',
          title: { en: 'Task specification', zh: '任务规格化' },
          what: {
            en: 'A validated request object: exam, part, topic, grammar focus, target difficulty.',
            zh: '一个经过校验的请求对象，内含考试、部分、话题、语法重点和目标难度。',
          },
          why: {
            en: 'Makes every generation reproducible and loggable. You cannot analyse what you did not record as structured input.',
            zh: '让每次生成都可复现、可记录。没被记成结构化输入的东西，事后没法分析。',
          },
        },
        {
          id: 'S2',
          title: { en: 'Personalised prompt assembly', zh: '个性化 prompt 装配' },
          what: {
            en: "Retrieves this teacher's preference summary, previously approved exemplars, and recent rejection reasons.",
            zh: '取回这位教师的偏好摘要、之前通过的范例，以及最近的退回原因。',
          },
          why: {
            en: 'In-context personalisation without fine-tuning. This is the mechanism behind the exploratory question of whether a teacher\'s own approval history reduces their later editing.',
            zh: '不做微调，靠上下文实现个性化。还有个探索性问题要靠它来回答，就是教师自己的通过记录能不能减少他后续的编辑量。',
          },
        },
        {
          id: 'S3',
          title: { en: 'Construct-specialised instruction', zh: '构念专用指令集' },
          what: {
            en: 'One instruction set per Cambridge part, encoding published item-writing rules: paraphrase rather than lift distinctive vocabulary, build distractors by twisting text content, keep option sets to one word class.',
            zh: '每个剑桥考试部分配一套独立指令，把已公开的命题规则写进去。特征词汇要改写，不能照搬；干扰项靠扭转原文内容来造；一组选项限定在同一词类内。',
          },
          why: {
            en: 'Non-experts systematically under-specify prompts, so the specification burden belongs in the system rather than in a teacher\'s free text. Boundary: this enforces content-validity constraints, not construct validity.',
            zh: '非专家写 prompt 总是写得太笼统，所以这份规格化的活应该由系统来干，而不是丢给教师自己敲。它的边界也很清楚，约束的是内容效度，不等于构念效度。',
          },
        },
        {
          id: 'S4',
          title: { en: 'Generation with typed repair', zh: '带类型修复的生成' },
          what: {
            en: 'Schema check, validator error re-injected into the prompt, bounded retries with model routing across providers.',
            zh: '先做结构校验，把校验报错重新塞回 prompt，重试次数有上限，并在多家模型之间路由。',
          },
          why: {
            en: 'Converts silent format defects into recoverable, logged events. A malformed item becomes a data point rather than a mystery.',
            zh: '把不声不响的格式错误变成可恢复、有记录的事件。一道结构坏掉的题目，从此是一个数据点，不再是一桩悬案。',
          },
        },
        {
          id: 'S5',
          title: { en: 'Multimodal branch', zh: '多模态分支' },
          what: {
            en: 'Scene decomposition, image synthesis, then a vision model authors the writing task from the images it was given.',
            zh: '先拆分场景，再合成图像，然后让视觉模型基于拿到的这几张图去写作文题。',
          },
          why: {
            en: 'KET picture-story and picture-matching items require text and image to be mutually consistent. Writing the prompt from the generated image, rather than the reverse, is what keeps them aligned.',
            zh: 'KET 看图写作和图片匹配题要求文字和图互相对得上。先出图、再照着图命题，顺序反过来就容易文不对图。',
          },
        },
        {
          id: 'S6',
          title: { en: 'CEFR lexical audit', zh: 'CEFR 词汇审计' },
          what: {
            en: 'Content words checked against the level wordlist; up to 10% out-of-list is tolerated and the compliance figure is shown to the teacher.',
            zh: '实义词逐个比对该等级词表，允许最多 10% 超纲，并把合规率显示给教师。',
          },
          why: {
            en: 'CEFR-level control of generated text is unreliable, so the audit is a visible guardrail rather than a silent block. The 10% tolerance is deliberate: proper nouns and productive morphology legitimately fall outside a base wordlist. Boundary: lexical membership only, since syntax, cultural load and cognitive demand are not assessed.',
            zh: '生成文本的 CEFR 等级控制本来就不可靠，所以这道审计是看得见的护栏，不是悄悄拦截。10% 的容差是刻意留的，因为专有名词和能产构词本来就合理地落在基础词表之外。它能管的也就是词汇在不在表内，句法难度、文化负载、认知需求都不在里面。',
          },
        },
        {
          id: 'S7',
          title: { en: 'Teacher adjudication', zh: '教师裁决' },
          what: {
            en: 'Approve, edit or reject with a reason. The pristine model draft is frozen at this moment.',
            zh: '通过、修改，或者带原因退回。模型的原始初稿在这一刻被冻结。',
          },
          why: {
            en: 'This is the measurement baseline for the whole project. It is also the only stage a teacher is required to be present for, which is the design claim stated as an architecture.',
            zh: '这是整个项目的度量基线，也是唯一强制教师在场的阶段。设计主张就这样写进了架构里。',
          },
        },
      ],
    },
    {
      kind: 'figure',
      src: '/work/papercraft/paper-ket-picture-story.webp',
      w: 945,
      h: 667,
      alt: {
        en: 'A generated KET Part 7 picture story exercise as exported for the classroom: three sequential illustrations, the writing task, and a sample answer.',
        zh: '一份已导出的 KET Part 7 看图写作练习，含三张连续插图、写作任务和参考答案。',
      },
      caption: {
        en: 'What actually comes out of the pipeline: a KET Part 7 picture story, exported ready to hand out. This is the multimodal branch. The images are synthesised first, then a vision model writes the task from the images it was given, because doing it the other way round produces prompts that do not match their own pictures.',
        zh: '管线真正产出的东西就是这个，一份 KET Part 7 看图写作，导出就能发给学生。这条走的是多模态分支，先合成图像，再让视觉模型照着图写题目。反过来做，题干常常和自己的配图对不上。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What is being measured, and how', zh: '到底在测什么，怎么测' },
      body: {
        en: [
          'Teacher intervention is measured at the moment of approval: the frozen model draft and the teacher\'s final version are compared: word-level edit distance over a canonicalised serialisation, plus typed change flags for which part of the item moved, whether that is the passage, the stem, the options or the key. The question this answers is which Cambridge item types consume the most human editing, which is a claim about where the model is actually weak rather than where it looks weak.',
          'Item behaviour is measured once learners answer: the system computes proportion-correct difficulty, point-biserial discrimination, option choice counts and dead-distractor flags, and compares the difficulty the teacher requested with the difficulty observed. Classical test theory only: at a plausible sample size for this setting, item response theory would be pretending.',
          'Authoring cost and load are measured against practice: a paired within-subject design against each teacher\'s own manual baseline, with SUS and NASA-TLX alongside a content-quality rubric and a semi-structured interview. Instruments are written. The study has not been run.',
        ],
        zh: [
          '教师干预量在通过的那一刻测。系统把冻结的模型初稿和教师终稿放在一起比。它在规范化后的序列上算词级编辑距离，再用一组标记指出改动落在哪里，语篇、题干、选项还是答案键。它要回答的是哪些剑桥题型最耗人工编辑。这是在说模型**实际上**弱在哪里，而不是看起来弱在哪里。',
          '题目表现要等学生作答之后才能测。系统算通过率难度、点二列区分度、各选项的选择次数，以及死干扰项标记，再把教师当初要求的难度和实际观察到的难度放在一起比。只用经典测验理论。这个场景能预期的样本量下，上项目反应理论就是装样子。',
          '出题成本和认知负荷靠一次对照来测。被试内配对设计，以每位教师自己的手工流程作基线，配合 SUS、NASA-TLX、内容质量量表和半结构化访谈。工具已经写好，研究还没开跑。',
        ],
      },
      note: {
        en: 'Choosing classical test theory over IRT is a sample-size decision, not a shortcut. Reporting it as such is part of the work.',
        zh: '选经典测验理论而不选 IRT，是样本量决定的，不是图省事。这一点得讲清楚。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/workspace-item-analysis.webp',
      w: 2400,
      h: 1500,
      alt: {
        en: 'The item analysis view: per-item difficulty and discrimination with distractor choice counts.',
        zh: '项目分析视图，显示逐题的难度与区分度，以及各干扰项的选择次数。',
      },
      caption: {
        en: 'Item analysis, built and wired to live response data. The screenshot shows the surface running against development data. The point of the view is that "usable item" becomes a question with an answer, per item, rather than an impression of the generator.',
        zh: '项目分析已经做好，也接进了作答数据的链路；截图里跑的是开发数据。这个视图的意义在于，这道题能不能用变成了一个逐题可以回答的问题，而不是对生成器的整体印象。',
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this actually stands', zh: '现在到了哪一步' },
      intro: {
        en: [
          'Research projects are easy to oversell in a portfolio, so here is the ledger. A system that is built is not a system that has been evaluated, and the difference is the interesting part.',
        ],
        zh: [
          '研究项目在作品集里很容易被吹过头，所以这里直接摊开记账。做好的系统不等于评估过的系统，而这个差别才是有意思的地方。',
        ],
      },
      items: [
        {
          label: { en: 'Authoring pipeline, 15 item types, exports', zh: '出题管线、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used to produce real classroom materials, including Word, PDF and slide export.',
            zh: '已上线，并且真的用来产出课堂材料，支持导出 Word、PDF 和幻灯片。',
          },
        },
        {
          label: { en: 'Learner practice loop', zh: '学生练习闭环' },
          state: 'shipped',
          detail: {
            en: 'Share codes, learner submission and per-question capture are live, closing the loop from authoring to response data.',
            zh: '分享码、学生提交、逐题数据采集都已上线，把从出题到作答数据这条链路接上了。',
          },
        },
        {
          label: { en: 'CEFR lexical audit', zh: 'CEFR 词汇审计' },
          state: 'shipped',
          detail: {
            en: 'Runs on every generated item and reports a compliance figure to the teacher.',
            zh: '每道生成的题目都会跑一遍，并把合规率报给教师。',
          },
        },
        {
          label: { en: 'Personalised prompt assembly', zh: '个性化 prompt 装配' },
          state: 'shipped',
          detail: {
            en: 'The retrieval mechanism runs in production. Whether it reduces subsequent editing is an open question, because that comparison needs intervention data that does not exist yet.',
            zh: '检索机制已经在生产环境跑着。它究竟有没有减少后续编辑量还不知道，因为这个对比要用的干预数据目前还不存在。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'Pre-edit drafts are frozen and the edit-distance computation is implemented. No teacher editing data has been collected, so no distribution across item types can be reported.',
            zh: '编辑前的初稿会冻结，编辑距离的计算也实现了。但还没采到教师的编辑数据，所以报不出各题型之间的分布。',
          },
        },
        {
          label: { en: 'Classical item analysis', zh: '经典项目分析' },
          state: 'instrumented',
          detail: {
            en: 'Difficulty, discrimination and distractor analysis are implemented end to end. Awaiting a learner response pool large enough to say anything.',
            zh: '难度、区分度和干扰项分析已经端到端做完，还在等一个足够大的学生作答池，否则说什么都站不住。',
          },
        },
        {
          label: { en: 'Teacher usability and efficacy study', zh: '教师可用性与效能研究' },
          state: 'designed',
          detail: {
            en: 'Protocol, consent, background questionnaire, task timing sheets, SUS, NASA-TLX, content-quality rubric and interview guide are all written. Data collection has not started.',
            zh: '实施流程、知情同意书、背景问卷、任务计时表、SUS、NASA-TLX、内容质量量表、访谈提纲都写完了，数据收集还没开始。',
          },
        },
        {
          label: { en: 'Skill-level mastery diagnosis', zh: '技能层面的掌握度诊断' },
          state: 'planned',
          detail: {
            en: 'Mapping per-question evidence onto skill dimensions to recommend what to practise next. Specified, not built.',
            zh: '把逐题证据映射到技能维度，据此推荐下一步练什么。方案有了，还没做。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'What I would argue with', zh: '这个设计里我自己也会质疑的地方' },
      body: {
        en: [
          'The lexical audit checks wordlist membership. A text can be fully compliant and still be too hard, because syntax, cultural load and cognitive demand are untouched by it. I show the number and label what it does not cover, but a reviewer would be right to say the guardrail is narrower than it looks.',
          'Encoding item-writing rules per exam part buys content validity, not construct validity. Establishing that these items measure what Cambridge parts are meant to measure would need structural evidence on a much larger response pool than a project at this scale can produce.',
          'And the intervention metric measures edit *magnitude* well and edit *significance* poorly. Rewriting one word of a key changes the item completely; rewriting a sentence of a passage may change nothing that matters. The typed change flags are a partial answer, and the qualitative coding of change types is there because the number alone would mislead.',
        ],
        zh: [
          '词汇审计查的是词有没有在表里。一段文本可以完全合规却依然太难，因为句法、文化负载和认知需求它一概不管。我把数字摆出来，也标明了它管不到什么；但如果评审说这道护栏比看起来窄，那他说得对。',
          '按考试部分写入命题规则，换来的是内容效度，不是构念效度。要证明这些题目测到了剑桥各部分本来想测的东西，需要在一个远超本项目体量的作答池上拿到结构性证据。',
          '还有，干预度量能测准编辑的**幅度**，测不准编辑的**分量**。改答案键上的一个词，题目就全变了；重写语篇里的一整句，可能什么要紧的都没变。类型化的变更标记只是半个答案，而变更类型的质性编码之所以要做，就是因为单看数字会把人带偏。',
        ],
      },
    },
    {
      kind: 'refs',
      heading: { en: 'Grounding', zh: '理论依据' },
      items: [
        {
          text: 'Holstein, K., McLaren, B. M., & Aleven, V. Designing for complementarity: teacher and student needs for orchestration support in AI-enhanced classrooms.',
        },
        {
          text: 'Mislevy, R. J., Steinberg, L. S., & Almond, R. G. On the structure of educational assessments.',
        },
        { text: 'Black, P., & Wiliam, D. Assessment and classroom learning.' },
        { text: 'Hattie, J., & Timperley, H. The power of feedback.' },
        {
          text: 'Wu, T., Terry, M., & Cai, C. J. AI Chains: transparent and controllable human–AI interaction by chaining LLM prompts.',
        },
        { text: 'Amershi, S., et al. Guidelines for human–AI interaction.' },
      ],
      note: {
        en: 'Citations are left in the original. The full list, with every DOI resolved against Crossref, is kept with the thesis working material.',
        zh: '文献条目保留原文，不做翻译。完整清单以及逐条核对过 Crossref 的 DOI，都放在论文的工作材料里。',
      },
    },
  ],
};
