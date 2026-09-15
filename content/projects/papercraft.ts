import type { L, Project } from '../types';

/**
 * Exam and part names are the examination's own, so both languages carry the
 * same string rather than a translation.
 */
const same = (text: string): L => ({ en: text, zh: text });

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
    en: 'Where the model stops and the teacher starts, recorded item by item',
    zh: '模型到哪里为止、教师从哪里接手，逐题记录',
  },
  blurb: {
    en: "A teacher-in-the-loop authoring tool for Cambridge KET/PET exercises, instrumented so that the teacher's remaining work becomes data.",
    zh: '一个面向剑桥 KET / PET 的出题工具，教师始终参与其中，改了什么、改了多少都会被记录成数据。',
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
    src: '/work/papercraft/workspace-bank.webp',
    w: 2400,
    h: 1500,
    alt: {
      en: 'The PaperCraft exercise bank: a filterable list of saved exercises on the left, and an open draft on the right headed with its Cambridge part, its marks, and a verdict that it matches the exam task.',
      zh: 'PaperCraft 练习库：左侧是可筛选的已存练习列表，右侧打开的初稿标明了剑桥题型、分值，以及「符合考试任务要求」的判定。',
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
          'I taught two small Cambridge KET classes, six students in total, while doing a computer science degree. Every week I wrote one set of practice exercises, about two hours of work, and I was never sure the result was good enough.',
          'Three things were wrong, and speed was not one of them. I could not control difficulty: I aimed for "a bit easier than the exam" and missed. Past papers ran out, so the same texts came round again. The topics were stale, and a nine-year-old has no reason to care about writing to a pen pal.',
        ],
        zh: [
          '读计算机学位期间，我带着两个剑桥 KET 小班，一共六名学生。每周要写一套练习，大约两个小时，写完也不太确定够不够好。',
          '出问题的地方有三处，都不在速度上。难度控制不住，我照「比真考略易」的目标写，出来还是偏了。真题很有限，用不了多久就重复。现成的话题也旧，让孩子给笔友写信，九岁的学生提不起兴趣。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The wrong version of this project', zh: '这个项目的错误做法' },
      body: {
        en: [
          'The obvious build is a prompt box that returns exam questions, and it is unfalsifiable: plausible output counts as success, so nothing is learned about whether the items work or how much work the teacher still has to do.',
          'PaperCraft is built around the **division of labour** between the model and the teacher instead. That division is a design claim only if it can be measured, so the tool records two things: how much the teacher changed, and how the items behave once learners answer them.',
        ],
        zh: [
          '最直接的做法是给个输入框，让模型直接出题。可这条路没法证伪，输出看着像样就算成功，题目能不能用、教师还要补多少，都无从知道。',
          'PaperCraft 的落点是模型与教师之间的**分工**。分工要能测出来才算一个设计主张，所以工具记录两件事：教师改了多少，题目到了学生手里表现如何。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the design is answerable to', zh: '这个设计要对什么负责' },
      body: {
        en: [
          'Holstein, McLaren and Aleven argue that classroom AI should be built around what teachers and machines are each good at, and that the complementarity has to be established empirically. That is why the teacher\'s adjudication is a hard gate in the pipeline, and why the gap between the model draft and the teacher\'s version is recorded.',
          'Mislevy, Steinberg and Almond treat assessment as a chain of reasoning from observable behaviour to claims about competence. The system therefore stores item-level responses and computes item statistics rather than a total score, because the claim that a generated item is usable needs evidence about that item.',
          'Black and Wiliam, and later Hattie and Timperley, argue for returning per-question evidence while instruction can still change. That is why practice is delivered before the exam rather than after it.',
          'Wu, Terry and Cai show that decomposing an LLM task into separately inspectable stages improves transparency and controllability. Amershi and colleagues give the interaction-level case for making system scope and correction paths visible.',
        ],
        zh: [
          'Holstein、McLaren 和 Aleven 主张，课堂 AI 应围绕教师和机器各自擅长的事情来设计，而且互补要由实证确立。所以教师的裁决是管线上绕不过的一道闸门，模型初稿与教师终稿之间的差距也全部记录。',
          'Mislevy、Steinberg 和 Almond 把测评看成一条推理链，从可观察的行为推到关于能力的判断。系统因此存逐题作答、算项目统计量，不存总分，因为要说某道生成的题能用，得拿这道题自己的证据。',
          'Black 和 Wiliam，以及后来 Hattie 与 Timperley 关于反馈的研究，都主张把逐题证据在教学还来得及调整时送回教师手里。所以练习安排在考前，不在考后。',
          'Wu、Terry 和 Cai 说明，把大模型任务拆成可以逐段检查的阶段，透明度和可控性都更好。Amershi 等人的交互准则补充了另一层理由：系统能做什么、出错后怎么改，都应该让使用者看见。',
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
        en: 'The adjudication surface. Nothing reaches a classroom without an approve, edit or reject decision, and the reason for a rejection is stored with it. The friction is deliberate: without a frozen pre-edit baseline there is nothing to compare the teacher\'s version against.',
        zh: '裁决界面。任何内容进入课堂前都要过一次通过、修改或退回，退回的理由一并存档。这点阻力是刻意保留的：没有一份冻结的编辑前底稿，教师那一版就无从比较。',
      },
    },
    {
      kind: 'pipeline',
      heading: { en: 'The pipeline as a research object', zh: '把生成管线当作研究对象' },
      intro: {
        en: [
          'Generation runs as a staged, typed chain with a human gate. Each stage exists for a reason that can be argued with. Select a stage to see what it does and why it is there.',
        ],
        zh: [
          '出题是一条分阶段、带类型约束的链条，中间留了一道人工闸门。每个阶段为何存在，理由都摆得出来，也可以被反驳。点选任意一个阶段查看。',
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
            en: 'Makes every generation reproducible and loggable. Nothing that was not recorded as structured input can be analysed later.',
            zh: '让每次生成都可复现、可记录。没有记成结构化输入的东西，事后无法分析。',
          },
        },
        {
          id: 'S2',
          title: { en: 'Personalised prompt assembly', zh: '个性化 prompt 装配' },
          what: {
            en: "Retrieves this teacher's preference summary, previously approved exemplars, and recent rejection reasons.",
            zh: '取回这位教师的偏好摘要、先前通过的范例，以及最近的退回原因。',
          },
          why: {
            en: 'In-context personalisation without fine-tuning. Whether a teacher\'s own approval history reduces their later editing is an open question this mechanism makes answerable. The block also sits where the provider can reuse it: everything invariant for one teacher and one part precedes the task line, so on the provider\'s counters the second of two requests sharing a stable block returned 4,096 cached tokens of 4,336, where the earlier arrangement returned none. The saving is in cost and latency; item quality is unaffected.',
            zh: '不做微调，靠上下文实现个性化。教师自己的通过记录能否减少后续编辑量，这个机制让它成为可回答的问题。区块还放在供应商能复用的位置，同一位教师、同一个题型里不变的部分排在任务行之前；按供应商自己的计数，两次共享稳定区块的请求，第二次命中了 4,336 个 token 中的 4,096，旧排法一个都没命中。省下来的是成本与延迟，题目质量不受影响。',
          },
        },
        {
          id: 'S3',
          title: { en: 'Construct-specialised instruction', zh: '构念专用指令集' },
          what: {
            en: 'One instruction set per Cambridge part, encoding published item-writing rules: paraphrase rather than lift distinctive vocabulary, build distractors by twisting text content, keep option sets to one word class.',
            zh: '每个剑桥考试部分一套独立指令，写入已公开的命题规则：特征词汇要改写而不是照搬；干扰项通过扭转原文内容来构造；一组选项限定在同一词类内。',
          },
          why: {
            en: 'Non-experts under-specify prompts, so the specification belongs in the system rather than in a teacher\'s free text. Boundary: content-validity constraints only; construct validity is outside it.',
            zh: '非专家写 prompt 往往过于笼统，这份规格化工作应由系统承担，而不该交给教师自己敲字。边界：只管内容效度，构念效度不在其中。',
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
            en: 'Converts silent format defects into recoverable, logged events, so a malformed item is recorded instead of disappearing.',
            zh: '把不声不响的格式错误变成可恢复、有记录的事件，结构损坏的题目会被记下来，而不是消失。',
          },
        },
        {
          id: 'S5',
          title: { en: 'Multimodal branch', zh: '多模态分支' },
          what: {
            en: 'Scene decomposition, image synthesis, then a vision model authors the writing task from the images it was given.',
            zh: '先拆分场景，再合成图像，然后由视觉模型依据这几张图撰写作文题。',
          },
          why: {
            en: 'KET picture-story and picture-matching items need text and image to agree. Writing the prompt from the generated image, not the other way round, is what keeps them aligned. Each panel\'s drawing time and every inspection are recorded: one 126-second request spent 28, 69 and 8 seconds on its three panels, and the remaining 21 on the checks between them. Reordering the fallback providers cut the worst observed request from 230 seconds to 134.',
            zh: 'KET 看图写作和图片匹配题要求文字与图像一致，所以先出图，再由视觉模型据图命题，反过来题干就容易和配图对不上。每一格的绘制耗时和每次检查都会记录：某次 126 秒的请求里，三格分别用了 28、69 和 8 秒，中间三次检查占掉剩下的 21 秒。重排备用供应商之后，最差的一次请求从 230 秒降到 134 秒。',
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
            en: 'CEFR-level control of generated text is unreliable, so the audit is a visible guardrail rather than a silent block. The 10% tolerance is deliberate, because proper nouns and productive morphology fall outside a base wordlist. Boundary: lexical membership only, since syntax, cultural load and cognitive demand are not assessed.',
            zh: '生成文本的 CEFR 等级控制本就不可靠，所以这道审计做成看得见的护栏，而不是悄然拦截。10% 的容差是刻意的，专有名词和能产构词本就落在基础词表之外。边界：它只能判断词是否在表内，句法难度、文化负载、认知需求都不在其中。',
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
            en: 'The measurement baseline for the whole project, and the only stage a teacher has to be present for.',
            zh: '整个项目的度量基线，也是唯一要求教师在场的阶段。',
          },
        },
      ],
    },
    {
      kind: 'table',
      heading: { en: 'What each gate decides, and what it cannot see', zh: '每道闸门判定什么，看不见什么' },
      head: [
        { en: 'Gate', zh: '闸门' },
        { en: 'What it decides', zh: '判定什么' },
        { en: 'On failure', zh: '失败时' },
        { en: 'What it cannot see', zh: '看不见什么' },
      ],
      rows: [
        [
          { en: 'JSON schema', zh: '结构校验' },
          { en: 'Whether the answer has the required shape', zh: '答案的结构是否合规' },
          { en: 'Retry, up to three times', zh: '最多重试三次' },
          { en: 'Whether the exercise is the exam task', zh: '这道题是不是手册里那个任务' },
        ],
        [
          { en: 'Handbook specification', zh: '手册规格闸门' },
          { en: 'Whether it is the published task', zh: '是不是已公开的那个任务' },
          { en: 'Retry, then reported', zh: '重试，之后如实报告' },
          { en: 'Whether the answer is right', zh: '答案对不对' },
        ],
        [
          { en: 'CEFR vocabulary', zh: 'CEFR 词汇审计' },
          { en: 'Whether the words are on the level\'s list', zh: '词是否在该等级的词表内' },
          { en: 'Warn the teacher', zh: '向教师告警' },
          { en: 'Syntactic complexity', zh: '句法复杂度' },
        ],
        [
          { en: 'Vision inspection', zh: '视觉检查' },
          { en: 'Whether a picture is exam material', zh: '配图是否符合考试材料的样子' },
          { en: 'Redraw, fall back, or warn', zh: '重绘、降级，或者告警' },
          { en: 'Anything about the text', zh: '与文字有关的任何问题' },
        ],
        [
          { en: 'Answer key spread', zh: '答案键分布' },
          { en: 'Whether the key varies across the set', zh: '整套题的答案键是否有变化' },
          { en: 'Warn the teacher', zh: '向教师告警' },
          { en: 'Whether any single answer is right', zh: '任何一道题的答案对不对' },
        ],
      ],
      caption: {
        en: 'Transcribed from the checks as they run, so the table cannot drift from the implementation. The last column is the gap that a check on one question leaves behind.',
        zh: '按实际运行的检查转写，表格不会与实现脱节。最后一列是逐题检查留下的缺口。',
      },
    },
    {
      kind: 'table',
      heading: { en: 'Fifteen item types, two ways of marking', zh: '15 种题型，两种判分方式' },
      head: [
        { en: 'Exam', zh: '考试' },
        { en: 'Part', zh: '部分' },
        { en: 'Primary skill area', zh: '主要技能领域' },
        { en: 'Marking', zh: '判分方式' },
      ],
      rows: [
        [
          same('A2 Key'),
          same('P1 Notices'),
          { en: 'Reading · signs and short messages', zh: '阅读 · 标识与短消息' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('A2 Key'),
          same('P2 Matching'),
          { en: 'Reading · scanning and matching', zh: '阅读 · 略读与匹配' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('A2 Key'),
          same('P3 Reading MC'),
          { en: 'Reading · detailed comprehension', zh: '阅读 · 细节理解' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('A2 Key'),
          same('P4 Cloze MC'),
          { en: 'Vocabulary and collocation', zh: '词汇与搭配' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('A2 Key'),
          same('P5 Open cloze'),
          { en: 'Grammar · function words', zh: '语法 · 功能词' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('A2 Key'),
          same('P6 Email'),
          { en: 'Extended writing', zh: '写作' },
          { en: 'Teacher', zh: '教师手改' },
        ],
        [
          same('A2 Key'),
          same('P7 Picture story'),
          { en: 'Extended writing, image-based', zh: '写作，图片题' },
          { en: 'Teacher', zh: '教师手改' },
        ],
        [
          same('B1 Preliminary'),
          same('R1 Short texts'),
          { en: 'Reading · signs and short messages', zh: '阅读 · 标识与短消息' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('B1 Preliminary'),
          same('R2 Matching'),
          { en: 'Reading · scanning and matching', zh: '阅读 · 略读与匹配' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('B1 Preliminary'),
          same('R3 Reading MC'),
          { en: 'Reading · detailed comprehension', zh: '阅读 · 细节理解' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('B1 Preliminary'),
          same('R4 Gapped text'),
          { en: 'Reading · text cohesion', zh: '阅读 · 语篇衔接' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('B1 Preliminary'),
          same('R5 Cloze MC'),
          { en: 'Vocabulary and collocation', zh: '词汇与搭配' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('B1 Preliminary'),
          same('R6 Open cloze'),
          { en: 'Grammar · function words', zh: '语法 · 功能词' },
          { en: 'Automatic', zh: '自动判分' },
        ],
        [
          same('B1 Preliminary'),
          same('W1 Email'),
          { en: 'Extended writing', zh: '写作' },
          { en: 'Teacher', zh: '教师手改' },
        ],
        [
          same('B1 Preliminary'),
          same('W2 Article / Story'),
          { en: 'Extended writing', zh: '写作' },
          { en: 'Teacher', zh: '教师手改' },
        ],
      ],
      caption: {
        en: 'Eleven of the fifteen take lettered or short answers and are marked automatically, so item statistics can be computed for them. A teacher marks the four writing tasks, so no such statistic exists there, and the picture story is the only image-based item. The mapping is transcribed from the grading and diagnosis code.',
        zh: '15 种题型里，11 种是字母选项或短答，可以自动判分，因而能算出项目统计量。四个写作任务由教师评分，没有这类统计量；看图写作是其中唯一的图片题。映射转写自评分与技能诊断代码。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The other half of the system', zh: '系统的另一半' },
      body: {
        en: [
          'Generation is half of what this does. The other half reads the correction log instead of writing exercises; it runs offline on a schedule or when the teacher asks. A pattern has to recur in at least three different exercises before it can become a candidate rule, counted by distinct generations rather than by events, because four option edits inside one exercise are one decision. The distiller gets the handbook specification for the part along with the edits; without it, the most it can infer is that some text changed.',
          'A candidate rule does not reach the teacher on its own reasoning. It goes to an audit running inside distillation on a different vendor\'s model at temperature zero, told to refute the rule rather than improve it, and required to name a ground when it refuses. It can refuse or pass, never write, edit or apply. Silence is refusal, and an unreachable or truncated audit proposes nothing. Rules stay with the teacher who accepted them and are not pooled across users.',
          'Three arbitrary substitutions, in which nine became ten, red became blue and a park became a beach, led the distiller to a rule that factual details should be accurate and consistent with source information. Its reason was that the teacher had corrected claims that were probably wrong.',
          'The evidence held three substitutions and nothing else. There was no source material, and nothing saying any original value was wrong. Left alone, that rule would have been injected into every later generation for the part. The audit refused it because the rationale asserted a fact the evidence did not contain.',
          'Run three times on a sound rule, the audit accepted it twice and refused it once, on the ground that a consistent pattern of replacement could be a context-specific correction rather than a universal rule. That is a defensible reading of the same evidence.',
          'The audit had also been handed the changed values alone while the distiller had the specification and the teacher\'s notes. Given the distiller\'s bundle, three parts that had just produced three refusals produced three accepted proposals. Refusing a sound rule costs a round of distillation; admitting an unsound one puts an invented constraint into every later prompt.',
        ],
        zh: [
          '生成只占这个系统的一半。另一半读批改日志，不写题，按日程离线运行，或者由教师手动触发。一个模式要出现在至少三次**不同的生成**里才算候选规则，按生成次数计而不是按事件计，因为同一道题里改了四处选项，那是一个决定。蒸馏器拿到的除了改动，还有该题型的手册规格；不给规格，它能推出来的最多是「有文字被改过」。',
          '候选规则不会仅凭自己的推理送到教师面前，它要先过一道审计。审计跑在**另一家厂商**的模型上，温度 0，指令是证伪这条规则而非改进它，拒绝时必须指明用的是哪一条理由。它只能拒绝或通过，不能写、不能改、不能应用。沉默即拒绝，审计不可达或返回被截断，就等于什么都没提。规则属于接受它的那位教师，不做跨用户合并。',
          '三次任意替换，九变成十、红变成蓝、公园变成海滩，让蒸馏器推出一条「事实细节应当准确，并与原始信息一致」的规则，理由是教师改正了大概有误的说法。',
          '证据里只有那三次替换，没有原始材料，也没有任何地方说原来的值是错的。放着不管，这条规则会被注入该题型之后每一次生成。审计拒绝了它，理由是这条规则的说明断言了证据里并不存在的事实。',
          '同一条站得住的规则跑三次，审计两次接受、一次拒绝，理由是「一致的替换模式也可能是特定情境下的修正，而非普遍规则」。这是对同一份证据的另一种读法。',
          '审计当时只拿到改动的值，而蒸馏器手里还有规格和教师的备注；把蒸馏器那一整包交给它之后，三个刚连出三次拒绝的题型给出了三条被接受的建议。拒掉一条好规则只是多跑一轮蒸馏，放进一条坏规则，就是往之后每一次 prompt 里塞进一条凭空造出来的约束。',
        ],
      },
    },
    {
      kind: 'loops',
      heading: { en: 'One circuit, two halves', zh: '一个回路，两半分工' },
      intro: {
        en: [
          'The two halves form one circuit. While a draft is being made the work travels left to right; what the teacher changed travels back along the lower band, and an accepted rule re-enters at prompt assembly.',
        ],
        zh: [
          '两半合起来是一个回路。初稿的制作从左往右走，教师的改动沿下带回流，被接受的规则再从 prompt 装配处重新进入。',
        ],
      },
      alt: {
        en: 'Two bands. Online, per request: task specification, prompt assembly, generation, deterministic checks, then the teacher\'s decision. Offline, written right to left: the edit log feeds distillation, then the audit, then the teacher\'s decision, which returns as accepted rules to prompt assembly.',
        zh: '上下两条带。在线部分按请求推进，依次是任务规格化、prompt 装配、生成、确定性检查，再到教师裁决。离线部分自右向左，从批改日志进入蒸馏，再到审计与教师决定，最后以被接受的规则回到 prompt 装配。',
      },
      online: [
        {
          title: { en: 'Task specification', zh: '任务规格化' },
          detail: { en: 'exam · part · topic', zh: '考试 · 部分 · 话题' },
        },
        {
          title: { en: 'Prompt assembly', zh: 'prompt 装配' },
          detail: { en: 'this teacher\'s rules', zh: '这位教师的规则' },
        },
        {
          title: { en: 'Generation', zh: '生成' },
          detail: { en: 'typed repair · pictures', zh: '类型修复 · 配图' },
        },
        {
          title: { en: 'Checks', zh: '确定性检查' },
          detail: { en: 'schema · handbook · lexis', zh: '结构 · 手册 · 词表' },
          tone: 'check',
        },
        {
          title: { en: 'Teacher decides', zh: '教师裁决' },
          detail: { en: 'approve · edit · reject', zh: '通过 · 修改 · 退回' },
          tone: 'teacher',
        },
      ],
      offline: [
        {
          title: { en: 'Edit log', zh: '批改日志' },
          detail: { en: 'append-only', zh: '只追加' },
        },
        {
          title: { en: 'Distil', zh: '蒸馏' },
          detail: { en: 'three or more generations', zh: '至少三次生成' },
        },
        {
          title: { en: 'Audit', zh: '审计' },
          detail: { en: 'another vendor refutes', zh: '另一家厂商证伪' },
          tone: 'check',
        },
        {
          title: { en: 'Teacher accepts', zh: '教师决定' },
          detail: { en: 'per teacher, not pooled', zh: '按教师隔离' },
          tone: 'teacher',
        },
      ],
      bandLabels: {
        online: { en: 'Online · per request', zh: '在线 · 每次请求' },
        offline: { en: 'Offline · on a schedule or on demand', zh: '离线 · 按日程或按需' },
      },
      edgeLabels: {
        corrections: { en: 'every correction', zh: '每一次批改' },
        rules: { en: 'accepted rules', zh: '被接受的规则' },
        repair: { en: 'bounded repair', zh: '有上限的修复' },
      },
      caption: {
        en: 'Nothing in the lower band can write an exercise, and nothing in the upper band can settle a rule. The teacher appears once on each side, and that is where the two halves meet.',
        zh: '下带里的任何一环都写不了题，上带里的任何一环也决定不了规则。教师在两侧各出现一次，两半就在那里接上。',
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
        en: 'What the offline half shows the teacher. Recurring corrections become proposals, each carrying the evidence it was induced from and the exercises it came from, and nothing changes about later drafts until the teacher accepts one. The counters here belong to the demonstration account.',
        zh: '离线的那一半在教师这一侧的样子。反复出现的批改变成建议，每条建议都附上它据以归纳的证据，以及它来自哪几次练习；教师接受之前，之后的初稿不会有任何变化。图中的计数属于演示账号。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What is being measured, and how', zh: '到底在测什么，怎么测' },
      body: {
        en: [
          'Teacher intervention is measured at approval, by comparing the frozen model draft with the teacher\'s final version: word-level edit distance over a canonicalised serialisation, plus typed flags for which part of the item moved, whether that is the passage, the stem, the options or the key. Across item types this shows where the model is weak in practice, which is not always where it looks weak.',
          'Item behaviour is measured once learners answer. The system computes proportion-correct difficulty, point-biserial discrimination, option choice counts and dead-distractor flags, and compares the difficulty the teacher requested with the difficulty observed. Classical test theory only, because the sample size this setting can reach does not support item response theory.',
          'Authoring cost and load are measured against each teacher\'s own manual workflow, in a paired within-subject design with SUS and NASA-TLX alongside a content-quality rubric and a semi-structured interview. The instruments are written and the study has not been run.',
        ],
        zh: [
          '教师干预量在点下通过时测出：把冻结的模型初稿和教师终稿作比较，在规范化后的序列上算词级编辑距离，再用一组标记指出改动落在哪一部分，语篇、题干、选项还是答案键。按题型汇总，可以看出模型实际弱在哪，这和看上去弱的地方并不一致。',
          '题目表现得等学生作答之后才有。系统会算通过率难度、点二列区分度、各选项被选次数和死干扰项标记，并把教师当初要的难度与实际观察到的难度作比较。只用经典测验理论，因为这个场景能达到的样本量撑不起项目反应理论。',
          '出题成本与认知负荷以每位教师自己的手工流程为基线，用被试内配对设计来测，另配 SUS、NASA-TLX、内容质量量表和半结构化访谈。量表和流程已经写好，研究尚未开展。',
        ],
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
        en: 'Classical item analysis computed from responses: difficulty as the proportion correct, point-biserial discrimination, how often each option was chosen, and the distractors the class never picks. The banner compares the difficulty the teacher asked for with what the items turned out to be. Everything here comes from demonstration responses the author entered; no student has taken part and no class has used the system.',
        zh: '依据作答算出的经典项目分析：以通过率表示的难度、点二列区分度、各选项被选次数，以及全班从不选的干扰项。上方横幅把教师当初要的难度与题目实际表现出的难度并列。截图中的数据全部来自作者录入的演示作答，没有学生参与，也没有班级使用过这套系统。',
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
          'The gates check shape, conformance to the published task, and lexis. None of them checks whether the answer is right.',
          'A solver sees each item with its key removed, and a challenger is asked to construct a reading on which each wrong option would be correct. A different answer means the key is contested; a second defensible option means the item has two answers. Either model can decline to score, and a declined item is excluded rather than counted as a pass.',
          'Two items were flagged in the part of the bank these checks can judge, and one is a real defect. The notice reads "Swimming club meeting on Friday at 4 pm. Bring your swimsuit." The options are that the club meets every Friday, that a swimsuit is needed, and that the meeting is in the afternoon. The key is the second.',
          'The third option is also true, because 4 pm is the afternoon, so the item has two defensible answers. It passed the schema gate (three options, one key), the handbook gate (six notices) and the vocabulary gate (every word inside A2); the vision gate does not apply.',
          'The bigger finding is about the key across a whole set, which no per-question gate can look at. Across 33 generations of A2 Reading and Writing Part 4 on one day, 26 had one letter taking at least two thirds of the answers and 13 put all six on option A.',
          'Over the 198 questions the split was 147 on A, 41 on B and 10 on C, and on those 13 a candidate who never read the passage and always answered A scored full marks. Each question was fine on its own, which is why the schema, handbook and vocabulary gates passed them.',
          'Two corrections followed. The prompt now asks for the key to be spread, and a fourth deterministic check counts it and reports to the teacher. The second measurement matters more than the first, because it shows the prompt rule was not enough: over 12 generations of the same part afterwards, five keys were still skewed and two were still entirely on A, with 41 of 72 answers on A.',
          'The rule moved the distribution, from 74 per cent on A to 57, and from 39 per cent of papers uniform to 17. It did not remove the failure, which is why the check now runs when the draft is generated rather than only after the teacher edits something.',
          'Building the check taught more about the check than about the bank. One exercise was filed under the wrong item type, so the solver was asked questions a picture-story task does not have; one extractor kept a notice\'s stem without its text; and one challenger returned a reading it had hedged itself.',
          'A fourth fault was silent and correct, and it kept every cloze item out of the count while the count was read as covering the bank. The other three took the rate from 12 per cent to 2 per cent. This one is worse, because nothing was miscalculated and no line of output said so. The scripts now print what they skip.',
        ],
        zh: [
          '这几道闸门查的是结构、是不是手册里那个任务、词在不在表内，没有一道查答案对不对。',
          '求解器拿到的是去掉答案键的题目，挑战者则要为每一个错误选项构造一种它也能成立的读法。求解器给出别的答案，说明这个键有争议；找得出第二个说得通的选项，说明这道题有两个答案。两边都可以拒绝打分，拒绝的题目按排除处理，不计为通过。',
          '在这类检查能判的那部分题库里，命中两处，其中一处是真缺陷。通知题写着「Swimming club meeting on Friday at 4 pm. Bring your swimsuit.」。三个选项分别是「俱乐部每周五都开」「要带泳衣」「活动在下午」，答案键是第二个。',
          '第三个选项同样成立，因为下午四点就是下午，所以这道题有两个都说得通的答案。它通过了结构校验（三个选项、一个答案）、手册闸门（六条通知）和词汇审计（每个词都在 A2 内），视觉闸门不适用。',
          '更大的一处发现在整套题的答案键上，这是逐题闸门看不到的。同一天生成的 33 份 A2 Reading and Writing Part 4 里，26 份有一个字母占了至少三分之二的答案，13 份把六个答案全放在 A 上。',
          '198 道题的分布是 A 147、B 41、C 10。这 13 份里，从不读文章、一路只选 A 的考生能拿满分。每一道题单独看都没有问题，结构、手册、词汇三道闸门放它们过去并没有错。',
          '随后做了两处修正。prompt 里加上「答案键要在各字母间分散」的要求，并增加第四道确定性检查来数它们、把结果报给教师。第二次测量比第一次有用，因为它说明 prompt 里那条规则并不够：之后同一题型的 12 份生成里仍有 5 份偏斜、2 份全在 A，72 个答案里 41 个落在 A。',
          '规则推动了分布，A 的占比从 74% 降到 57%，整份题全部同一个字母的比例从 39% 降到 17%，但没有消除失败。这也是这道检查改在初稿生成时就跑、而不是等教师改过之后才跑的原因。',
          '做这道检查，学到的东西更多关于检查本身。有一道题存进了错误的题型，求解器因此被问了一道看图写作根本没有的题；有一版提取器留下了通知的题干却丢了正文；有一个挑战者返回了它自己都没把握的读法。',
          '第四处错误不出声而且本身是对的，整类完形填空都没进计数，而那个数字看起来覆盖了全库。另外三处把缺陷率从 12% 压到 2%。这一处更麻烦，因为没有任何东西算错，也没有一行输出说明它跳过了什么。脚本现在会打印被跳过的内容。',
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
        en: 'The warning is the fourth deterministic check, running on the draft before the teacher sees it. This one passed the schema, handbook and vocabulary gates, because each of them judges a single question.',
        zh: '上面那条告警来自第四道确定性检查，在教师看到之前就已经跑过。这份初稿通过了结构、手册和词汇三道闸门，因为这三道闸门判的都是单独一道题。',
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this actually stands', zh: '现在到了哪一步' },
      intro: {
        en: [
          'None of this has been evaluated with teachers yet.',
        ],
        zh: [
          '这些都还没有经过教师评估。',
        ],
      },
      items: [
        {
          label: { en: 'Authoring pipeline, 15 item types, exports', zh: '出题管线、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used to produce classroom materials, with Word, PDF and slide export. Of the 215 generations whose trace includes the specification gate, 211 passed on the first attempt and four after a repair; none reached the teacher carrying an unresolved discrepancy.',
            zh: '已上线并用于产出课堂材料，支持导出 Word、PDF 与幻灯片。215 次带规格闸门的生成中，211 次一次通过、4 次修复后通过，没有一次带着未解决的偏差交给教师。',
          },
        },
        {
          label: { en: 'Learner practice loop', zh: '学生练习闭环' },
          state: 'shipped',
          detail: {
            en: 'Share codes, learner submission and per-question capture are live.',
            zh: '分享码、学生提交、逐题数据采集均已上线。',
          },
        },
        {
          label: { en: 'CEFR lexical audit', zh: 'CEFR 词汇审计' },
          state: 'shipped',
          detail: {
            en: 'Reports a compliance figure on every generated item. Comparing the pass flag either side of an edit proved inert, because the published A2 list scores ordinary classroom prose at about 82 per cent, so almost every draft starts non-compliant and the flag can never change. The check now reports a material drop in compliance and quotes both figures.',
            zh: '每道生成的题目都会报出合规率。用通过标记做编辑前后对比是失效的，因为 A2 词表给普通课堂散文打约 82 分，几乎每份初稿一上来就不合规，标记永远不会变。检查现在改为报告合规率的实质下降，并同时列出两个数字。',
          },
        },
        {
          label: { en: 'Answer-key spread check', zh: '答案键分布检查' },
          state: 'shipped',
          detail: {
            en: 'A fourth deterministic check runs when a draft is generated and warns the teacher when one option takes most of the key, which no per-question gate can see. It reports and does not block.',
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
            en: 'The retrieval mechanism runs in production. Whether it reduces subsequent editing needs intervention data that does not exist yet.',
            zh: '检索机制已在生产环境运行。它是否减少后续编辑量，需要目前还不存在的干预数据才能回答。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'Pre-edit drafts are frozen and the edit-distance computation is implemented. No teacher editing data has been collected, so no distribution across item types can be reported.',
            zh: '编辑前的初稿会被冻结，编辑距离的计算也已实现。尚未采集到教师的编辑数据，因此还报不出各题型之间的分布。',
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
            en: 'Difficulty, discrimination and distractor analysis are implemented end to end. Awaiting a learner response pool large enough to support a conclusion.',
            zh: '难度、区分度与干扰项分析已端到端完成，等的是一个足以支撑结论的学生作答池。',
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
            en: 'The class view reports one class rather than the teacher\'s material as a whole: facility overall and by Cambridge part, the questions fewer than half the class answered correctly across at least three attempts, any exercise whose observed difficulty departed from the band requested, and the practice the diagnosis recommends next. Built and running. No real class has used it, and the only responses behind the current figures are demonstration data.',
            zh: '班级视图报告的是某一个班，而非这位教师的全部材料：整体与各部分的通过率、至少三次作答中半数以上答错的题目、观测难度偏离请求难度的练习，以及诊断推荐的下一步练习。已建成并在运行。尚无真实班级使用过，眼下这些数字背后只有演示数据。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'What I would argue with', zh: '这个设计里我自己也会质疑的地方' },
      body: {
        en: [
          'The lexical audit checks wordlist membership. A text can be fully compliant and still be too hard, because syntax, cultural load and cognitive demand are outside it. I show the number and label what it does not cover; a reviewer would be right to say the guardrail is narrower than it looks.',
          'Encoding item-writing rules per exam part buys content validity only. Showing that these items measure what Cambridge intends would need structural evidence from a far larger response pool than this project can produce.',
          'The intervention metric measures edit *magnitude* well and edit *significance* poorly. Rewriting one word of a key changes the item completely; rewriting a sentence of a passage may change nothing that matters. The typed change flags are a partial answer, and the qualitative coding exists because the number alone would mislead.',
        ],
        zh: [
          '词汇审计查的只是词在不在表里。一段文本可以完全合规，却依然太难，因为句法、文化负载、认知需求都不在它管辖范围内。我把数字摆出来，也标明了它管不到什么。评审若说这道护栏比看上去窄，那是对的。',
          '按考试部分编码命题规则，换来的只是内容效度。要证明这些题目测到了剑桥想测的东西，得有一个远超本项目体量的作答池来提供结构性证据。',
          '干预度量能测准编辑的**幅度**，却测不准编辑的**分量**。答案键上改一个词，整道题就变了；语篇里重写一整句，可能什么要紧的都没动。类型化的变更标记只算半个答案，变更类型的质性编码正是为了补上数字本身会带来的误导。',
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
        zh: '文献条目保留原文，完整清单存放在论文的工作材料中。',
      },
    },
  ],
};
