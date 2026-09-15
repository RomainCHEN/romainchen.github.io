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
    zh: '量化评估教师与语言模型在教学任务中的协作分工',
  },
  blurb: {
    en: "A teacher-in-the-loop authoring tool for Cambridge KET/PET exercises, instrumented so that the teacher's remaining work becomes data.",
    zh: '一个面向剑桥 KET / PET 的出题工具，教师必须在环。他改了什么、改了多少，都被记录为数据。',
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
      value: { en: 'Instruments written, study not yet run', zh: '量表与流程已就绪，研究尚未开展' },
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
          '读计算机学位期间，我同时带着两个剑桥 KET 小班。每周手写一套练习，一套下来将近两个小时，写完之后我对结果始终没有把握。',
          '出问题的有三件事，都与快慢无关。难度控制不住，我照着比真考略易的目标去写，出来仍然偏了。官方真题数量有限，很快就用尽。现成话题又太陈旧，一篇讲给笔友写信的短文，九岁的孩子实在提不起兴趣。这三件事说到底都是学习动机层面的问题，只是看上去像是材料不够。',
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
          '最省事的做法，当然是做个输入框让模型直接吐题。可这么做没意思，输出看着像样就算成功，题目到底能不能用、老师还要补多少活，你什么也没弄明白。',
          '所以我换了个框法。值得研究的不是生成器，是模型和教师之间的**分工**。这分工得能测出来，才称得上一个设计主张，不然只是嘴上说说。PaperCraft 就是照这个想法做的出题工具，把两件平时看不见的事变成数据。教师改了多少，题目发到学生手里之后又表现如何。',
        ],
      },
      note: {
        en: 'This reframing is the whole project. Everything below follows from refusing to evaluate a generator by looking at its output.',
        zh: '这个转向就是整个项目的核心。后面所有设计都从同一个决定长出来，不看输出去评价一个生成器。',
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
          '人机互补在这里是个设计要求，不是口号。Holstein、McLaren 和 Aleven 讲过，课堂 AI 得围着教师和机器各自擅长的地方来设计。互补不能想当然，得靠实证一步步验出来。所以教师的裁决在管线上被做成一道绕不过的闸门，模型初稿和教师终稿差了多少，全记下来。',
          '第二条依据是证据中心的测评设计。Mislevy、Steinberg 和 Almond 把测评看成一条推理链，从看得见的行为一路推到关于能力的判断。所以系统存的是逐题作答和项目统计量，不存总分。你要说某道生成的题能用，得拿这道题自己的证据，笼统夸生成器不算数。',
          '证据还得赶得上用。Black 和 Wiliam 的工作，还有 Hattie 与 Timperley 关于反馈的研究，说的都是一件事，证据要在教学还来得及改的时候就回到教师手里。所以练习放在考前，不是考后。',
          '管线本身也是分段的，不是一整块。Wu、Terry 和 Cai 说明过，把大模型任务拆成能一段段检查的阶段，比一个巨型 prompt 更透明，也更好控。Amershi 那几位的人机交互准则又从交互这一层补上理由，系统能做什么、错了怎么改，都得让人看得见。',
        ],
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/draft-adjudication.webp',
      w: 1600,
      h: 633,
      alt: {
        en: 'The foot of a generated draft: the last two questions with the keyed option marked, a note field for what is wrong, a bar reporting how much of the text falls inside the A2 wordlist, and the approve, reject and regenerate controls.',
        zh: '一份生成初稿的底部：最后两道题与标出答案的选项、写错因的备注框、报告文本有多少落在 A2 词表内的横条，以及通过、退回、重新生成三个操作。',
      },
      caption: {
        en: 'The adjudication surface. Nothing reaches a classroom without an explicit approve, edit or reject decision, and rejection reasons are stored. This is a deliberate piece of friction: without a frozen pre-edit baseline, the teacher\'s contribution cannot be measured at all.',
        zh: '裁决界面。任何内容进入课堂之前，都必须经过一次明确的通过、修改或退回，退回的理由会被存档。这点阻力是刻意保留的，如果没有一份冻结的编辑前底稿，教师的贡献根本无从测量。',
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
          '出题不是丢出一个 prompt 就完事。它是一条分阶段、带类型约束、中间还留有一道人工闸门的链条，每个阶段为何存在，理由都摆得出来，也都可以被反驳。点选任意一个阶段看看。',
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
            en: 'In-context personalisation without fine-tuning. This is the mechanism behind the exploratory question of whether a teacher\'s own approval history reduces their later editing. The block is also placed where the provider can reuse it: everything invariant for one teacher and one part precedes the task line, so on the provider\'s own counters the second of two requests sharing a stable block returned 4,096 cached tokens of 4,336 where the earlier arrangement returned none. That is a cost and latency result, not a quality one.',
            zh: '不做微调，靠上下文实现个性化。它还要回答一个探索性问题，教师自己的通过记录，能否减少其后续的编辑量。这个区块还放在供应商能复用的位置，同一位教师、同一个题型里不变的部分统一排在任务行之前。按供应商自己的计数，两次共享稳定区块的请求，第二次命中了 4,336 个 token 中的 4,096，而旧排法一个都没命中。这只关乎成本与延迟，与题目质量无关。',
          },
        },
        {
          id: 'S3',
          title: { en: 'Construct-specialised instruction', zh: '构念专用指令集' },
          what: {
            en: 'One instruction set per Cambridge part, encoding published item-writing rules: paraphrase rather than lift distinctive vocabulary, build distractors by twisting text content, keep option sets to one word class.',
            zh: '每个剑桥考试部分配一套独立指令，把已公开的命题规则写入其中。特征词汇要改写，不能照搬；干扰项通过扭转原文内容来构造；一组选项限定在同一词类之内。',
          },
          why: {
            en: 'Non-experts systematically under-specify prompts, so the specification burden belongs in the system rather than in a teacher\'s free text. Boundary: this enforces content-validity constraints, not construct validity.',
            zh: '非专家写 prompt 往往过于笼统，这份规格化工作应由系统承担，而不该交给教师自己敲字。它的边界也很清楚，管的是内容效度，管不到构念效度。',
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
            zh: '把不声不响的格式错误转成可恢复、有记录的事件。一道结构损坏的题目，从此是一个数据点，而不是一桩无从追查的意外。',
          },
        },
        {
          id: 'S5',
          title: { en: 'Multimodal branch', zh: '多模态分支' },
          what: {
            en: 'Scene decomposition, image synthesis, then a vision model authors the writing task from the images it was given.',
            zh: '先拆分场景，再合成图像，然后让视觉模型依据拿到的这几张图去撰写作文题。',
          },
          why: {
            en: 'KET picture-story and picture-matching items require text and image to be mutually consistent. Writing the prompt from the generated image, rather than the reverse, is what keeps them aligned. Each panel\'s drawing time and every inspection are recorded, which is how one 126-second request was found to have spent 28, 69 and 8 seconds on its three panels and the remaining 21 on the checks between them; an average would have hidden that. Reordering the fallback providers cut the worst observed request from 230 seconds to 134.',
            zh: 'KET 看图写作和图片匹配题要求文字与图像彼此一致。先出图、再据图命题，若顺序颠倒，题干就容易与配图对不上。每一格的绘制耗时和每次检查都会记录。正因为如此，某次 126 秒的请求被发现三格分别用了 28、69 和 8 秒，中间三次检查占掉剩下的 21 秒，光看平均值看不出来。重排备用供应商之后，最差的一次请求从 230 秒降到 134 秒。',
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
            zh: '生成文本的 CEFR 等级控制本就不可靠，所以这道审计做成看得见的护栏，而非悄然拦截。10% 的容差是刻意保留的，专有名词和能产构词本就合理地落在基础词表之外。它能管到的仅是词是否在表内，句法难度、文化负载、认知需求一概管不到。',
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
            zh: '这是整个项目的度量基线，也是唯一强制教师在场的阶段。设计主张就这样落实进了架构之中。',
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
        en: 'A generated KET Part 7 picture story exercise as exported for the classroom: three sequential illustrations, the writing task and its hints.',
        zh: '一份已导出的 KET Part 7 看图写作练习，含三张连续插图、写作任务与提示。',
      },
      caption: {
        en: 'What actually comes out of the pipeline: a KET Part 7 picture story, exported ready to hand out. This is the multimodal branch. The images are synthesised first, then a vision model writes the task from the images it was given, because doing it the other way round produces prompts that do not match their own pictures.',
        zh: '这就是管线产出的东西，一份 KET Part 7 看图写作，导出即可发给学生。这条走的是多模态分支，先合成图像，再让视觉模型据图命题。若顺序颠倒，题干常常与配图对不上。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The other half of the system', zh: '系统的另一半' },
      body: {
        en: [
          'Generation is half the system. The other half reads the correction log rather than writing exercises: it runs offline, on a schedule or when the teacher asks for it. A pattern has to appear in at least three different exercises before it can become a candidate rule, counted by distinct generations rather than by events, because four option edits inside one exercise are one decision. The distiller receives the handbook specification for the part alongside the edits; without it, the most that can be induced is that some text changed.',
          'A candidate rule does not reach the teacher on the strength of its own reasoning. It goes to an audit that runs inside distillation on a different vendor\'s model at temperature zero, instructed to refute the rule rather than improve it, and required to name one of its grounds when it refuses. It can refuse or pass, never write, edit or apply. Silence is refusal, and an audit that is unreachable or truncated proposes nothing. Every rule stays attached to the teacher who accepted it rather than pooled across users.',
          'The third finding came from here. Given three arbitrary substitutions, in which nine became ten, red became blue and a park became a beach, the distiller induced a rule that factual details should be accurate and consistent with source information, reasoning that the teacher had corrected claims that were probably wrong.',
          'The evidence held three substitutions and nothing else: no source material, and nothing to say that any original value was wrong. The reason added to the evidence instead of reading it, and left alone the rule would have been injected into every later generation for that part. The audit refused it, on the ground that the rationale asserted a fact the evidence did not contain.',
          'Repeating the sound case three times gave the audit\'s reliability a shape worth stating. It accepted the rule in two runs and refused it in the third, on the ground that a consistent pattern of replacement could be a context-specific correction rather than a universal rule, which is a defensible reading of the same evidence rather than an error.',
          'It also turned out that the audit had been handed the changed values alone while the distiller was given the specification and the teacher\'s notes as well; supplied with the same bundle, three parts that had just produced three refusals produced three accepted proposals. What survives is the direction rather than the rate. Failing closed biases the step towards refusing, which is the right bias: refusing a sound rule costs a round of distillation, while admitting an unsound one puts an invented constraint into every later prompt.',
        ],
        zh: [
          '生成只是系统的一半。另一半读的是批改日志，不写题，按日程在离线跑，或者由教师点一下触发。一个模式要出现在至少三次**不同的生成**里才算候选规则，按生成次数计，不按事件计，因为同一道题里改了四处选项，那是一个决定。蒸馏器拿到的除了这些改动，还有该题型的手册规格；不给规格，能推出来的最多只是「有文字被改过」。',
          '候选规则不会凭自己的推理就送到教师面前。它要先过一道审计，审计跑在**另一家厂商**的模型上，温度 0，指令是证伪这条规则，而不是改进它，拒绝时必须指明用的是哪一条理由。它只能拒绝或通过，不能写、不能改、不能应用。沉默即拒绝，审计不可达或者返回被截断，就等于什么都没提。每条规则属于接受它的那位教师，不做跨用户合并。',
          '第三项发现就出在这里。三次任意替换，九变成十、红变成蓝、公园变成海滩，蒸馏器推出了一条「事实细节应当准确，并与原始信息一致」的规则，理由是教师改正了大概有误的说法。',
          '证据里只有那三次替换，没有原始材料，也没有任何地方说原来的值是错的。这条理由给证据添了东西，而不是去读它。放着不管，它会被注入该题型之后每一次生成。审计拒绝了它，理由是这条规则的说明断言了证据里并不存在的事实。',
          '同一条站得住的规则跑三次，审计的可靠性就有了形状。它两次接受，第三次拒绝，理由是「一致的替换模式也可能是特定情境下的修正，而非普遍规则」。这是对同一份证据的另一种读法，不是事实错误。',
          '还有一处也查了出来，审计当时只拿到改动的值，而蒸馏器手里还有规格和教师的备注；把蒸馏器那一整包交给它之后，三个刚刚连出三次拒绝的题型，给出了三条被接受的建议。站得住的是方向，不是那个比率。宁可失败在拒绝这一侧是对的。拒掉一条好规则只是多跑一轮蒸馏，放进一条坏规则，就是往之后每一次 prompt 里塞进一条凭空造出来的约束。',
        ],
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/learned-rules.webp',
      w: 1600,
      h: 867,
      alt: {
        en: 'The page headed "What the system has learned from you": a row of counters running from corrections recorded through proposals the audit refused to rules waiting for a decision, then the proposals themselves, each with the evidence it was induced from and a button to start or decline using it.',
        zh: '标题为「系统从你这里学到了什么」的页面：一排计数从记录的批改、变成建议、被审计拒绝，一直到等你决定的规则；下面是每条建议本身、它据以归纳的证据，以及开始使用或谢绝两个按钮。',
      },
      caption: {
        en: 'The offline half, seen from the teacher\'s side. Corrections are counted, recurring ones become proposals, and every proposal carries the evidence it was induced from and the exercises it came from. A proposal reaches this page only after an audit on a different vendor\'s model failed to refute it, and it changes nothing about future drafts until the teacher accepts it. The counters shown here belong to the demonstration account.',
        zh: '这就是离线的那一半，从教师这一侧看到的样子。批改被计数，反复出现的模式变成建议，每条建议都带着它据以归纳的证据，以及它来自哪几次练习。建议要走到这一页，得先通过一次证伪性的审计，审计跑在另一家厂商的模型上；在教师接受之前，它不会改变之后任何一份初稿。图中的计数属于演示账号。',
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
          '教师干预量在点下通过的那一刻就测好了。系统把冻结的模型初稿和教师终稿摆到一起，在规范化后的序列上算词级编辑距离，再用一组标记指明改动落在哪，语篇、题干、选项还是答案键。这些数据攒起来，回答的是哪些剑桥题型最费人工编辑，也就是模型**实际**弱在哪，而不是看着弱在哪。',
          '题目表现得等学生答完才有。系统会算通过率难度、点二列区分度、每个选项被选了几次，还有死干扰项标记，再拿教师当初要的难度跟实际观察到的难度比一比。这里只用经典测验理论。这个场景能预期的样本量，硬上项目反应理论就是装样子。',
          '出题成本和认知负荷，得靠一次对照才测得出来。用被试内配对设计，拿每位教师自己的手工流程当基线，再配上 SUS、NASA-TLX、内容质量量表和半结构化访谈。量表和流程都写好了，研究还没开跑。',
        ],
      },
      note: {
        en: 'Choosing classical test theory over IRT is a sample-size decision, not a shortcut. Reporting it as such is part of the work.',
        zh: '用经典测验理论而不用 IRT，是样本量逼出来的，跟图省事无关。把这一点讲明白，也是研究的一部分。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/analytics-item-analysis.webp',
      w: 1600,
      h: 922,
      alt: {
        en: 'The class analytics view for one shared paper: overall and per-item figures, a banner comparing the difficulty requested with the difficulty observed, and each question with its discrimination value and option counts.',
        zh: '某份练习的班级分析视图：整体与逐题的数字、把请求难度与观测难度并列的横幅，以及每道题的区分度值与各选项次数。',
      },
      caption: {
        en: 'Classical item analysis, computed from responses and shown per item: difficulty as the proportion correct, point-biserial discrimination, how often each option was chosen, and the distractors the class never picks. The banner is the comparison the design exists for, between the difficulty the teacher asked for and the difficulty the items turned out to have. Everything in this screenshot comes from demonstration responses the author entered; no student has taken part and no class has used the system.',
        zh: '经典项目分析，依据作答逐题算出：以通过率表示的难度、点二列区分度、各选项被选的次数，以及全班从不选它的死干扰项。上方那条横幅才是这个设计的重点，把教师当初要的难度和题目实际表现出的难度摆在一起。截图里的数据全部来自作者自己录入的演示作答，没有学生参与，也没有班级用过这套系统。',
      },
    },
    {
      kind: 'prose',
      heading: {
        en: 'Two failures the structural checks cannot see',
        zh: '结构性检查看不见的两类失败',
      },
      body: {
        en: [
          'The gates check shape, conformance to the published task, and lexis. None of them checks whether the answer is right, and that is where these items actually fail.',
          'The check built for it is behavioural rather than a rubric score: a solver is given each item with its key removed, and a challenger is asked to construct a reading on which each wrong option would be correct. A different answer means the key is contested, and a second defensible option means the item has two answers. Either model may decline to score, and a declined item is excluded rather than recorded as a pass.',
          'Over the part of the bank these checks can judge, two items were flagged and one of them is a genuine defect. The notice reads "Swimming club meeting on Friday at 4 pm. Bring your swimsuit." The options are that the club meets every Friday, that a swimsuit is needed, and that the meeting is in the afternoon, and the key is the second.',
          'The first option is properly wrong, because the notice says on Friday rather than every Friday. The third is also true, because 4 pm is the afternoon.',
          'Every gate passed the item, and none of them was wrong to: the schema saw three options and one key, the handbook check saw six notices, the vocabulary audit found every word inside A2, and the vision gate does not apply. What the item has is two defensible answers, which is a property of the whole item rather than of any single field.',
          'The larger finding is about the answer key across a set, which no per-question gate can look at. Across 33 generations of A2 Reading and Writing Part 4 produced on one day, 26 had one letter taking at least two thirds of the answers and 13 put all six answers on option A; over the 198 questions the split was 147 on A, 41 on B and 10 on C.',
          'A candidate who never read the passage and always answered A would have scored full marks on those 13. The schema, handbook and vocabulary gates all passed them, and all three were right to: each question was fine on its own.',
          'Two corrections followed. The prompt now asks for the key to be spread across the letters, and a fourth deterministic check counts them and reports to the teacher. The second measurement matters more, because it shows the first correction was not enough: over 12 generations of the same part after the rule was added, five keys were still skewed and two were still entirely on A, with 41 of 72 answers on A.',
          'The rule moved the distribution, from 74 per cent on A to 57, and from 39 per cent of exercises uniform to 17, and it did not remove the failure. A rule in a prompt is a request. Checking that it holds is a separate piece of work, and it is why the check now runs when the draft is generated rather than only after the teacher edits something.',
          'Building these produced a lesson about the instruments rather than the bank. The first runs of the answer-correctness check were measuring the check.',
          'An exercise was filed under the wrong item type, so the solver was asked questions a picture-story task does not have; an extractor kept a notice\'s stem without its text; a challenger returned a reading it had hedged itself; and an exclusion that was correct but silent kept every cloze item out of the count, while the count was read as covering the bank.',
          'The first three took the rate from 12 per cent to 2 per cent. The fourth is the sharper kind, because nothing was miscalculated: no check was running on those items at all, and no line of output said so. The scripts now print what they skip, and why.',
        ],
        zh: [
          '那几道闸门查的是结构、是不是手册里那个任务、词在不在表内，没有一道查答案对不对，而题目真正出错的地方恰恰在这里。',
          '为此做的检查是行为判断，不是评分：把答案键拿掉后交给求解器，再让挑战者去为每一个错误选项构造一种它也能成立的读法。求解器给出别的答案，说明这个键有争议。找得出第二个说得通的选项，说明这道题有两个答案。两边的模型都可以拒绝打分，拒绝的题目按排除处理，不计为通过。',
          '在这一类检查能判的那部分题库里，命中两处，其中一处是真缺陷。那道通知题写着「Swimming club meeting on Friday at 4 pm. Bring your swimsuit.」。选项是「俱乐部每周五都开」「要带泳衣」「活动在下午」三项，答案键是第二个。',
          '第一个确实错了，通知写的是「这个周五」，不是每周五。第三个同样成立，因为下午四点就是下午。',
          '三道闸门全放它过去了，而且都没有错：结构校验看到三个选项和一个键，手册闸门看到六条通知，词汇审计发现每个词都在 A2 之内，视觉闸门不适用。这道题的毛病是有两个都说得通的答案，这是整道题的性质，不是某个字段的性质。',
          '更大的一处发现跟整套题的答案键分布有关，这是逐题闸门看不到的。同一天生成的 33 份 A2 Reading and Writing Part 4 里，26 份有一个字母占了至少三分之二的答案。',
          '13 份把六个答案全放在 A 上。198 道题的分布是 A 147、B 41、C 10。这 13 份里，一个从不读文章、一路只选 A 的考生能拿满分。结构、手册、词汇三道闸门都放它们过去了，三道都没有错，因为每一道题单独看都没问题。',
          '随后做了两处修正。prompt 里加上了「答案键要在各字母间分散」的要求，同时增加第四道确定性检查来数它们，并把结果报给教师。第二次测量更有用，因为它说明第一次修正并不够：规则加进去之后，同一题型的 12 份生成里仍有 5 份偏斜、2 份全在 A，72 个答案里 41 个落在 A。',
          '规则确实推动了分布，A 的占比从 74% 降到 57%，整份题全部同一个字母的比例从 39% 降到 17%，但失败没有被消除。写在 prompt 里的规则只是一个请求，确认它有没有生效是另一件事，这也正是这道检查改在初稿生成时就跑，而不是等教师改过之后才跑的原因。',
          '做这些检查，学到的东西更多是关于检查本身，而不是关于题库。答案正确性检查最早几轮测的是它自己。',
          '有一道题存进了错误的题型，于是求解器拿到了一道看图写作根本没有的题。有一版提取器留下了通知的题干却丢了正文。有一个挑战者返回了它自己都没把握的读法。还有一处排除本身是对的，却不出声，整类完形填空一直没进计数，而那个数字读起来像是覆盖了全库。',
          '前三处把缺陷率从 12% 压到 2%。第四处性质更麻烦，因为没有任何东西算错，那些题目根本没有跑过检查，也没有一行输出说出来。现在脚本会打印它跳过了什么，以及为什么。',
        ],
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/draft-key-spread.webp',
      w: 1600,
      h: 878,
      alt: {
        en: 'The head of a generated A2 Reading Part 4 draft: a warning that every answer is A, so a candidate who always picks A would score full marks, above the draft header confirming the item matches the exam task and the completed reference passage.',
        zh: '一份生成的 A2 Reading Part 4 初稿的顶部：一条告警说明所有答案都是 A、一路选 A 的考生能拿满分；下面是确认该题符合考试任务要求的初稿抬头，以及填好空格的参考全文。',
      },
      caption: {
        en: 'What the checks catch that the gates cannot. This draft passed the schema, handbook and vocabulary gates, all of which judge a question on its own and were right to pass it. The warning is a fourth deterministic check, added after a day of generations in which 13 of 33 A2 Reading Part 4 papers put every answer on option A, and it runs when the draft is generated rather than after the teacher edits something. It reports and does not block.',
        zh: '闸门看不见、检查能抓住的东西。这份初稿通过了结构、手册和词汇三道闸门，这三道闸门都是逐题判断的，放它过去并没有判错。上面那条告警来自第四道确定性检查，是在发现某天 33 份 A2 Reading Part 4 里有 13 份把六个答案全放在 A 上之后加的；它改在初稿生成时运行，不等教师先改点什么。它只报告，不拦截。',
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
          '研究项目放进作品集，容易被夸大。所以这里索性把账摊开，系统做好了和评估做完了是两回事。',
        ],
      },
      items: [
        {
          label: { en: 'Authoring pipeline, 15 item types, exports', zh: '出题管线、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used to produce real classroom materials, including Word, PDF and slide export. Across the 215 generations whose trace includes the specification gate, 211 passed it on the first attempt and four after a repair, and none reached the teacher carrying an unresolved discrepancy.',
            zh: '已上线，并且真正用于产出课堂材料，支持导出 Word、PDF 和幻灯片。在 215 次带规格闸门的生成里，211 次一次通过、4 次修复后通过，没有一次带着未解决的偏差交给教师。',
          },
        },
        {
          label: { en: 'Learner practice loop', zh: '学生练习闭环' },
          state: 'shipped',
          detail: {
            en: 'Share codes, learner submission and per-question capture are live, closing the loop from authoring to response data.',
            zh: '分享码、学生提交、逐题数据采集均已上线，把从出题到作答数据这条链路接通了。',
          },
        },
        {
          label: { en: 'CEFR lexical audit', zh: 'CEFR 词汇审计' },
          state: 'shipped',
          detail: {
            en: 'Runs on every generated item and reports a compliance figure to the teacher. Comparing the pass flag either side of an edit turned out to be inert, because the published A2 list scores ordinary classroom prose at about 82 per cent, so nearly every real draft starts non-compliant and the flag can never change; the check reports a material drop in compliance with both figures quoted instead.',
            zh: '每道生成的题目都会跑一遍，并把合规率报给教师。拿通过标记做编辑前后对比，后来发现是失效的，因为 A2 词表给普通课堂散文打约 82 分，几乎每份真实初稿一上来就不合规，标记因此永远不会变；现在改成报告合规率的实质下降，并同时列出两个数字。',
          },
        },
        {
          label: { en: 'Answer-key spread check', zh: '答案键分布检查' },
          state: 'shipped',
          detail: {
            en: 'A fourth deterministic check runs when a draft is generated and warns the teacher when one option takes most of the key, which no per-question gate can look at. It reports and does not block.',
            zh: '第四道确定性检查在初稿生成时运行，某个选项占了大部分答案就告警，这是逐题闸门看不到的。它只报告，不拦截。',
          },
        },
        {
          label: { en: 'Answer-correctness check', zh: '答案正确性检查' },
          state: 'instrumented',
          detail: {
            en: 'A solver and a challenger judge each saved item with its key removed, so a key nobody else would choose and a second defensible answer both surface. Behavioural, not a rubric score. Two items were flagged and one is a genuine defect; the rate over the bank is a count attached to an existence proof rather than a measurement, because no item has been compared with teacher judgement.',
            zh: '把答案键拿掉之后交给求解器和挑战者各判一次，「没人会选的键」和「第二个也说得通的答案」都会浮出来。做的是行为判断，不是评分。命中两处，其中一处是真缺陷；但这个比率是带计数的存在性证明，不是质量测量，因为还没有任何题目跟教师的判断对过。',
          },
        },
        {
          label: { en: 'Personalised prompt assembly', zh: '个性化 prompt 装配' },
          state: 'shipped',
          detail: {
            en: 'The retrieval mechanism runs in production. Whether it reduces subsequent editing is an open question, because that comparison needs intervention data that does not exist yet.',
            zh: '检索机制已在生产环境运行。至于它究竟有没有减少后续的编辑量，目前尚无定论，因为这个对比所需的干预数据还不存在。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'Pre-edit drafts are frozen and the edit-distance computation is implemented. No teacher editing data has been collected, so no distribution across item types can be reported.',
            zh: '编辑前的初稿会被冻结，编辑距离的计算也已实现。但尚未采集到教师的编辑数据，因此还报不出各题型之间的分布。',
          },
        },
        {
          label: { en: 'Post-edit conformance comparison', zh: '后编辑一致性比对' },
          state: 'instrumented',
          detail: {
            en: 'After a teacher edits a draft, the conformance checks are re-run on their version and the teacher is told which check changed and by how much, so a disagreement between their edit and the bar the draft had to meet is recorded with both verdicts. Verified by driving the running application; no teacher has used it yet.',
            zh: '教师改完初稿之后，系统会拿他的版本重跑一致性检查，并告诉他哪一项变了、变了多少。教师的改动与初稿本该达到的标准之间的分歧，连同两个判定一起入日志。机制靠驱动真实应用验证过，尚无教师使用。',
          },
        },
        {
          label: { en: 'Classical item analysis', zh: '经典项目分析' },
          state: 'instrumented',
          detail: {
            en: 'Difficulty, discrimination and distractor analysis are implemented end to end. Awaiting a learner response pool large enough to say anything.',
            zh: '难度、区分度和干扰项分析已经端到端完成，现在等的是一个足够大的学生作答池，否则任何结论都站不住。',
          },
        },
        {
          label: { en: 'Teacher usability and efficacy study', zh: '教师可用性与效能研究' },
          state: 'designed',
          detail: {
            en: 'Protocol, consent, background questionnaire, task timing sheets, SUS, NASA-TLX, content-quality rubric and interview guide are all written. Data collection has not started.',
            zh: '实施流程、知情同意书、背景问卷、任务计时表、SUS、NASA-TLX、内容质量量表和访谈提纲都已写完，数据收集尚未开始。',
          },
        },
        {
          label: { en: 'Skill-level mastery diagnosis', zh: '技能层面的掌握度诊断' },
          state: 'instrumented',
          detail: {
            en: 'The class view reports the class rather than the teacher\'s material as a whole: facility overall and by Cambridge part, the questions fewer than half the class answered correctly across at least three attempts, any exercise whose observed difficulty departed from the band requested, and the practice the diagnosis recommends next. Built and running. No real class has used it, and the only responses behind the current figures are demonstration data.',
            zh: '班级视图报告的是某一个班，而不是这位教师的全部材料：整体与各部分的通过率、至少三次作答中半数以上答错的题目、观测难度偏离请求难度的练习，以及诊断推荐的下一步练习。已建成并在运行。尚无真实班级使用过，眼下这些数字背后只有演示数据。',
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
          '词汇审计查的只是词在不在表里。一段文本可以完全合规，却还是太难，因为句法、文化负载、认知需求它一概不管。我把数字摆出来，也标明了它管不到什么。要是评审说这道护栏比看上去窄，那他说得对。',
          '按考试部分把命题规则编进去，换来的是内容效度，构念效度还差得远。要证明这些题目真测到了剑桥各部分本该测的东西，得在一个远超本项目体量的作答池上拿到结构性证据。',
          '还有一点，干预度量能测准编辑的**幅度**，却测不准编辑的**分量**。答案键上改一个词，整道题就变了。语篇里重写一整句，反倒可能什么要紧的都没动。类型化的变更标记只算半个答案。所以变更类型的质性编码非做不可，光看数字会把人带偏。',
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
        en: 'Citations are left in the original. The full reference list is kept with the thesis working material.',
        zh: '文献条目保留原文，不做翻译。完整清单放在论文的工作材料里。',
      },
    },
  ],
};
