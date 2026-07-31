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
    zh: '把教师与语言模型之间的分工变成可测量的对象',
  },
  blurb: {
    en: 'A teacher-in-the-loop authoring tool for Cambridge KET/PET exercises, instrumented so that the teacher\'s remaining work becomes data.',
    zh: '一个面向剑桥 KET/PET 的"教师在环"出题工具，并把教师的剩余工作本身做成可采集的数据。',
  },
  period: { en: 'May 2026 – present', zh: '2026 年 5 月 – 至今' },
  role: {
    en: 'Sole developer and research design',
    zh: '独立开发与研究设计',
  },
  discipline: {
    en: 'Learning engineering · Human–AI interaction · Language assessment',
    zh: '学习工程 · 人机交互 · 语言测评',
  },
  tags: ['Next.js', 'TypeScript', 'Supabase', 'LLM pipeline', 'Psychometrics', 'CEFR'],
  hero: {
    src: '/work/papercraft/workspace-generate.webp',
    w: 1600,
    h: 1000,
    alt: {
      en: 'The PaperCraft authoring workspace, showing exercise type selection and generation controls.',
      zh: 'PaperCraft 出题工作区，展示题型选择与生成控制项。',
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
    { label: { en: 'Exam parts encoded', zh: '已编码考试部分' }, value: { en: '15 item types (KET 7 · PET 8)', zh: '15 种题型（KET 7 · PET 8）' } },
    { label: { en: 'Pipeline', zh: '生成管线' }, value: { en: '7 stages, one of them human', zh: '7 个阶段，其中一个是人' } },
    { label: { en: 'Wordlists', zh: '词表' }, value: { en: 'A2 2,318 · B1 4,444 headwords', zh: 'A2 2,318 · B1 4,444 个词目' } },
    { label: { en: 'Evaluation', zh: '实证评估' }, value: { en: 'Instruments written, study not yet run', zh: '工具已就绪，研究尚未开展' } },
  ],
  featured: true,
  sections: [
    {
      kind: 'lede',
      body: {
        en: [
          'I taught two small Cambridge KET classes — six students in total — while doing a computer science degree. Every week I spent about two hours writing one set of practice exercises by hand, and I was never confident in the result.',
          'Three things were wrong, and none of them was speed. Difficulty was not something I could control: I could aim for "a bit easier than the exam" and miss. Official past papers ran out fast, so the same texts came round again. And the topics that did exist were stale — students had no reason to care about them, which is a motivation problem dressed up as a materials problem.',
        ],
        zh: [
          '我一边读计算机学位，一边带两个剑桥 KET 小班——一共六个学生。每周我花大约两个小时手写一套练习，而且从来没有把握。',
          '出问题的有三件事，没有一件是"慢"。难度不可控：我可以瞄准"比真考稍简单"，然后打偏。官方真题很快用完，同样的语篇只能反复出现。而现有话题又太陈旧，学生没有理由在意它们——这本质上是学习动机问题，只是伪装成了材料问题。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The wrong version of this project', zh: '这个项目的错误版本' },
      body: {
        en: [
          'The obvious build is a prompt box that returns exam questions. I think that build is uninteresting, and worse, unfalsifiable: if the output looks plausible, you declare success, and you have learned nothing about whether the items work or about what the teacher still had to do.',
          'So I framed it differently. The interesting object is not the generator. It is the **division of labour** between the model and the teacher — and that division is only a design claim if you can measure it. PaperCraft is an authoring tool built so that two things which are usually invisible become data: how much the teacher had to change, and how the resulting items actually behave when learners answer them.',
        ],
        zh: [
          '最直观的做法是做一个输入框，让它返回考题。我认为这个版本既没意思，更糟的是不可反驳：只要输出看起来像样，你就宣布成功，而对于"这些题目到底能不能用"和"教师究竟还得做多少事"，你一无所知。',
          '所以我换了个框法。有意思的对象不是生成器，而是模型与教师之间的**分工**——而分工只有在可测量时才算得上一个设计主张。PaperCraft 这个出题工具的构造目标，是让两件平时不可见的事变成数据：教师改动了多少，以及这些题目在学生真正作答后表现如何。',
        ],
      },
      note: {
        en: 'This reframing is the whole project. Everything below follows from refusing to evaluate a generator by looking at its output.',
        zh: '这次重新框定就是项目的全部。下面的一切，都源于拒绝"靠看输出来评价生成器"。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the design is answerable to', zh: '这个设计要对什么负责' },
      body: {
        en: [
          '**Human–AI complementarity as a design requirement, not a slogan.** Holstein, McLaren and Aleven argue that classroom AI should be built around what teachers and machines are respectively good at, and that the complementarity has to be established empirically rather than assumed. In PaperCraft the teacher\'s adjudication is a hard gate in the pipeline, and the delta between the model draft and the teacher\'s version is recorded.',
          '**Evidence-centred assessment design.** Mislevy, Steinberg and Almond treat assessment as a chain of reasoning from observable behaviour to claims about competence. That is why the system stores item-level responses and computes item statistics instead of a total score: the claim "this generated item is usable" needs evidence about the item, not about the generator.',
          '**Formative use of the evidence.** Black and Wiliam, and later work on feedback by Hattie and Timperley, motivate returning per-question evidence to the teacher while instruction can still change — so practice is delivered before the exam, not after it.',
          '**Chained, inspectable steps.** Wu, Terry and Cai show that decomposing an LLM task into individually inspectable stages improves transparency and controllability over one monolithic prompt. Amershi and colleagues supply the interaction-level rationale for making system scope and correction paths visible.',
        ],
        zh: [
          '**人机互补是设计要求，不是口号。** Holstein、McLaren 与 Aleven 主张，课堂 AI 应当围绕教师与机器各自擅长的部分来设计，而这种互补性必须靠实证建立，不能假定。在 PaperCraft 中，教师的裁决是管线里的硬性闸门，并且模型初稿与教师终稿之间的差异会被记录下来。',
          '**证据中心的测评设计（ECD）。** Mislevy、Steinberg 与 Almond 把测评视为一条从可观察行为推向能力主张的推理链。这就是系统为什么存储逐题作答并计算项目统计量、而不是只记总分：要主张"这道生成的题目可用"，需要的是关于这道题的证据，而不是关于生成器的证据。',
          '**证据的形成性使用。** Black 与 Wiliam，以及后来 Hattie 与 Timperley 关于反馈的工作，支持在教学还能改变的时候就把逐题证据交回教师手里——因此练习发生在考试之前，而不是之后。',
          '**分阶段、可逐段检查。** Wu、Terry 与 Cai 的研究显示，把 LLM 任务拆解为可单独检查的阶段，比单个巨型 prompt 在透明度和可控性上更好。Amershi 等人的人机交互准则则提供了"让系统边界与纠错路径可见"的交互层依据。',
        ],
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/workspace-review.webp',
      w: 1600,
      h: 1000,
      wide: true,
      alt: {
        en: 'The review surface: a generated exercise shown beside its editing controls, with the approve, edit and reject decision.',
        zh: '审阅界面：生成的练习与编辑控件并列，附带通过、修改、退回三种裁决。',
      },
      caption: {
        en: 'The adjudication surface. Nothing reaches a classroom without an explicit approve / edit / reject decision, and rejection reasons are stored. This is a deliberate piece of friction: without a frozen pre-edit baseline, the teacher\'s contribution cannot be measured at all.',
        zh: '裁决界面。任何内容进入课堂前都必须经过明确的"通过 / 修改 / 退回"，且退回原因会被存档。这是有意保留的摩擦：如果没有被冻结的编辑前基线，教师的贡献根本无法度量。',
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
          '生成过程是一条分阶段、带类型约束、含人工闸门的链条，而不是一个 prompt。每个阶段的存在都有可被反驳的理由。点选任一阶段查看它的功能与设立原因。',
        ],
      },
      stages: [
        {
          id: 'S1',
          title: { en: 'Task specification', zh: '任务规格化' },
          what: {
            en: 'A validated request object: exam, part, topic, grammar focus, target difficulty.',
            zh: '一个经过校验的请求对象：考试、部分、话题、语法重点、目标难度。',
          },
          why: {
            en: 'Makes every generation reproducible and loggable. You cannot analyse what you did not record as structured input.',
            zh: '让每次生成可复现、可记录。没有作为结构化输入被记录下来的东西，是无法分析的。',
          },
        },
        {
          id: 'S2',
          title: { en: 'Personalised prompt assembly', zh: '个性化 prompt 装配' },
          what: {
            en: "Retrieves this teacher's preference summary, previously approved exemplars, and recent rejection reasons.",
            zh: '取回该教师的偏好摘要、此前已通过的范例，以及最近的退回原因。',
          },
          why: {
            en: 'In-context personalisation without fine-tuning. This is the mechanism behind the exploratory question of whether a teacher\'s own approval history reduces their later editing.',
            zh: '不做微调的上下文内个性化。这也是探索性问题——"教师自己的通过历史能否降低其后续编辑量"——所依赖的机制。',
          },
        },
        {
          id: 'S3',
          title: { en: 'Construct-specialised instruction', zh: '构念专用指令集' },
          what: {
            en: 'One instruction set per Cambridge part, encoding published item-writing rules: paraphrase rather than lift distinctive vocabulary, build distractors by twisting text content, keep option sets to one word class.',
            zh: '每个剑桥考试部分一套独立指令，编码官方命题规则：改写而非照搬特征词汇、用文本内容的扭转来构造干扰项、选项集限定在同一词类内。',
          },
          why: {
            en: 'Non-experts systematically under-specify prompts, so the specification burden belongs in the system rather than in a teacher\'s free text. Boundary: this enforces content-validity constraints, not construct validity.',
            zh: '非专家写 prompt 时会系统性地欠规格化，因此规格化负担应当落在系统里，而不是教师的自由文本里。边界：这只约束内容效度，不等于构念效度。',
          },
        },
        {
          id: 'S4',
          title: { en: 'Generation with typed repair', zh: '带类型修复的生成' },
          what: {
            en: 'Schema check, validator error re-injected into the prompt, bounded retries with model routing across providers.',
            zh: '结构校验；将校验错误重新注入 prompt；有上限的重试并在多个模型供应商之间路由。',
          },
          why: {
            en: 'Converts silent format defects into recoverable, logged events. A malformed item becomes a data point rather than a mystery.',
            zh: '把静默的格式缺陷转换成可恢复、可记录的事件。一道结构损坏的题目从此是一个数据点，而不是一个谜。',
          },
        },
        {
          id: 'S5',
          title: { en: 'Multimodal branch', zh: '多模态分支' },
          what: {
            en: 'Scene decomposition, image synthesis, then a vision model authors the writing task from the images it was given.',
            zh: '场景拆解 → 图像合成 → 由视觉模型基于这些图像撰写写作任务。',
          },
          why: {
            en: 'KET picture-story and picture-matching items require text and image to be mutually consistent. Writing the prompt from the generated image, rather than the reverse, is what keeps them aligned.',
            zh: 'KET 看图写作与图片匹配题要求文字与图像互相一致。先有图、再据图命题（而非相反），才能保证两者对齐。',
          },
        },
        {
          id: 'S6',
          title: { en: 'CEFR lexical audit', zh: 'CEFR 词汇审计' },
          what: {
            en: 'Content words checked against the level wordlist; up to 10% out-of-list is tolerated and the compliance figure is shown to the teacher.',
            zh: '实义词逐一比对该等级词表；允许最多 10% 超纲，并把合规率展示给教师。',
          },
          why: {
            en: 'CEFR-level control of generated text is unreliable, so the audit is a visible guardrail rather than a silent block. The 10% tolerance is deliberate: proper nouns and productive morphology legitimately fall outside a base wordlist. Boundary: lexical membership only — syntax, cultural load and cognitive demand are not assessed.',
            zh: '生成文本的 CEFR 等级控制并不可靠，所以这道审计是可见的护栏，而不是静默拦截。10% 的容差是刻意的：专有名词与能产构词本就合理地落在基础词表之外。边界：只看词汇归属——句法、文化负载与认知难度都未被评估。',
          },
        },
        {
          id: 'S7',
          title: { en: 'Teacher adjudication', zh: '教师裁决' },
          what: {
            en: 'Approve, edit or reject with a reason. The pristine model draft is frozen at this moment.',
            zh: '通过、修改，或带原因退回。模型的原始初稿在此刻被冻结。',
          },
          why: {
            en: 'This is the measurement baseline for the whole project. It is also the only stage a teacher is required to be present for, which is the design claim stated as an architecture.',
            zh: '这是整个项目的度量基线。它也是唯一强制要求教师在场的阶段——把设计主张直接写进了架构。',
          },
        },
      ],
    },
    {
      kind: 'figure',
      src: '/work/papercraft/paper-ket-picture-story.webp',
      w: 1130,
      h: 1600,
      alt: {
        en: 'A generated KET Part 7 picture story exercise as exported for the classroom: three sequential illustrations, the writing task, and a sample answer.',
        zh: '一份已生成并导出用于课堂的 KET Part 7 看图写作练习：三张连续插图、写作任务与参考答案。',
      },
      caption: {
        en: 'What actually comes out of the pipeline — a KET Part 7 picture story, exported ready to hand out. This is the multimodal branch: the images are synthesised first, then a vision model writes the task from the images it was given, because doing it the other way round produces prompts that do not match their own pictures.',
        zh: '管线真正产出的东西——一份 KET Part 7 看图写作，导出即可发放。这条是多模态分支：先合成图像，再由视觉模型基于这些图像撰写任务；反过来做的话，题干会和自己的配图对不上。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What is being measured, and how', zh: '究竟在测什么，怎么测' },
      body: {
        en: [
          '**Teacher intervention.** On approval, the frozen model draft and the teacher\'s final version are compared: word-level edit distance over a canonicalised serialisation, plus typed change flags for which part of the item moved — passage, stem, options, or key. The question this answers is which Cambridge item types consume the most human editing, which is a claim about where the model is actually weak rather than where it looks weak.',
          '**Item behaviour.** Once learners answer, the system computes proportion-correct difficulty, point-biserial discrimination, option choice counts and dead-distractor flags, and compares the difficulty the teacher requested with the difficulty observed. Classical test theory only — at a plausible sample size for this setting, item response theory would be pretending.',
          '**Authoring cost and load.** A paired within-subject design against each teacher\'s own manual baseline, with SUS and NASA-TLX alongside a content-quality rubric and a semi-structured interview. Instruments are written. The study has not been run.',
        ],
        zh: [
          '**教师干预量。** 通过时，被冻结的模型初稿与教师终稿进行比对：在规范化序列上的词级编辑距离，加上类型化的变更标记，指出题目的哪个部分被改动——语篇、题干、选项，还是答案键。它回答的问题是：哪些剑桥题型最消耗人工编辑。这是关于"模型实际弱在哪里"的主张，而不是"看起来弱在哪里"。',
          '**题目表现。** 学生作答后，系统计算通过率难度、点二列区分度、各选项选择频次与"死干扰项"标记，并把教师请求的难度与实际观察到的难度作对照。只用经典测验理论——在这个场景可预期的样本量下，做项目反应理论就是装样子。',
          '**出题成本与认知负荷。** 采用被试内配对设计，以每位教师自己的手工流程为基线，配合 SUS、NASA-TLX、内容质量量表与半结构化访谈。工具已经写好，研究尚未开展。',
        ],
      },
      note: {
        en: 'Choosing classical test theory over IRT is a sample-size decision, not a shortcut. Reporting it as such is part of the work.',
        zh: '选择经典测验理论而非 IRT 是一个样本量判断，不是偷懒。把这一点说清楚，本身就是研究工作的一部分。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/workspace-item-analysis.webp',
      w: 1600,
      h: 1000,
      wide: true,
      alt: {
        en: 'The item analysis view: per-item difficulty and discrimination with distractor choice counts.',
        zh: '项目分析视图：逐题难度与区分度，以及各干扰项的选择频次。',
      },
      caption: {
        en: 'Item analysis, built and wired to live response data. The screenshot shows the surface running against development data — the point of the view is that "usable item" becomes a question with an answer, per item, rather than an impression of the generator.',
        zh: '项目分析功能，已实现并接入真实作答数据。截图展示的是在开发数据上运行的界面——这个视图的意义在于：让"这道题可用吗"成为一个逐题可回答的问题，而不是对生成器的整体印象。',
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this actually stands', zh: '目前的真实进度' },
      intro: {
        en: [
          'Research projects are easy to oversell in a portfolio, so here is the ledger. A system that is built is not a system that has been evaluated, and the difference is the interesting part.',
        ],
        zh: [
          '研究项目在作品集里很容易被夸大，所以这里直接列账。已经构建的系统不等于已经被评估的系统，而这个差别恰恰是有意思的地方。',
        ],
      },
      items: [
        {
          label: { en: 'Authoring pipeline, 15 item types, exports', zh: '出题管线、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used to produce real classroom materials, including Word, PDF and slide export.',
            zh: '已部署，并用于产出真实课堂材料，含 Word、PDF 与幻灯片导出。',
          },
        },
        {
          label: { en: 'Learner practice loop', zh: '学生练习闭环' },
          state: 'shipped',
          detail: {
            en: 'Share codes, learner submission and per-question capture are live, closing the loop from authoring to response data.',
            zh: '分享码、学生提交与逐题数据采集均已上线，把"出题 → 作答数据"这条链路闭合。',
          },
        },
        {
          label: { en: 'CEFR lexical audit', zh: 'CEFR 词汇审计' },
          state: 'shipped',
          detail: {
            en: 'Runs on every generated item and reports a compliance figure to the teacher.',
            zh: '对每道生成题目运行，并向教师报告合规率。',
          },
        },
        {
          label: { en: 'Personalised prompt assembly', zh: '个性化 prompt 装配' },
          state: 'shipped',
          detail: {
            en: 'The retrieval mechanism runs in production. Whether it reduces subsequent editing is an open question — that comparison needs intervention data that does not exist yet.',
            zh: '检索机制已在生产环境运行。它是否真的降低了后续编辑量仍是开放问题——这个对比需要目前尚不存在的干预数据。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'Pre-edit drafts are frozen and the edit-distance computation is implemented. No teacher editing data has been collected, so no distribution across item types can be reported.',
            zh: '编辑前初稿已冻结，编辑距离计算已实现。尚未采集教师编辑数据，因此无法报告跨题型的分布。',
          },
        },
        {
          label: { en: 'Classical item analysis', zh: '经典项目分析' },
          state: 'instrumented',
          detail: {
            en: 'Difficulty, discrimination and distractor analysis are implemented end to end. Awaiting a learner response pool large enough to say anything.',
            zh: '难度、区分度与干扰项分析已端到端实现。等待一个足够大的学生作答池才能得出任何结论。',
          },
        },
        {
          label: { en: 'Teacher usability and efficacy study', zh: '教师可用性与效能研究' },
          state: 'designed',
          detail: {
            en: 'Protocol, consent, background questionnaire, task timing sheets, SUS, NASA-TLX, content-quality rubric and interview guide are all written. Data collection has not started.',
            zh: '实施流程、知情同意、背景问卷、任务计时表、SUS、NASA-TLX、内容质量量表与访谈提纲均已撰写完成。数据收集尚未开始。',
          },
        },
        {
          label: { en: 'Skill-level mastery diagnosis', zh: '技能层面的掌握度诊断' },
          state: 'planned',
          detail: {
            en: 'Mapping per-question evidence onto skill dimensions to recommend what to practise next. Specified, not built.',
            zh: '把逐题证据映射到技能维度，用于推荐下一步练习内容。已规划，尚未实现。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'What I would argue with', zh: '这个设计可被反驳的地方' },
      body: {
        en: [
          'The lexical audit checks wordlist membership. A text can be fully compliant and still be too hard, because syntax, cultural load and cognitive demand are untouched by it. I show the number and label what it does not cover, but a reviewer would be right to say the guardrail is narrower than it looks.',
          'Encoding item-writing rules per exam part buys content validity, not construct validity. Establishing that these items measure what Cambridge parts are meant to measure would need structural evidence on a much larger response pool than a project at this scale can produce.',
          'And the intervention metric measures edit *magnitude* well and edit *significance* poorly. Rewriting one word of a key changes the item completely; rewriting a sentence of a passage may change nothing that matters. The typed change flags are a partial answer, and the qualitative coding of change types is there because the number alone would mislead.',
        ],
        zh: [
          '词汇审计检查的是词表归属。一段文本可以完全合规却仍然过难，因为句法、文化负载与认知需求都不在它的覆盖范围内。我展示这个数字，同时标明它没有覆盖什么；但评审者若指出这道护栏比看起来更窄，他是对的。',
          '按考试部分编码命题规则买到的是内容效度，不是构念效度。要证明这些题目测到了剑桥各部分意图测量的东西，需要远大于本项目体量所能产出的作答池上的结构性证据。',
          '还有，干预度量能很好地测出编辑的**幅度**，却很难测出编辑的**分量**。改动答案键上的一个词就彻底改变了题目；重写语篇里的一整句话却可能什么都没改变。类型化变更标记只是部分答案，而变更类型的质性编码之所以存在，正是因为单看数字会误导人。',
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
        {
          text: 'Full reference list with resolved DOIs is maintained with the thesis working material.',
        },
      ],
    },
  ],
};
