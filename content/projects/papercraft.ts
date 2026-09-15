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
      label: { en: 'Prompt', zh: '提示词' },
      value: { en: 'Eight sections; six on every part', zh: '八段构成，六段每种题型都有' },
    },
    {
      label: { en: 'Checks', zh: '确定性检查' },
      value: { en: 'Five gates, none reads the answer', zh: '五道闸门，都不看答案对不对' },
    },
    {
      label: { en: 'Recorded runs', zh: '运行记录' },
      value: { en: '215 generations carry a trace', zh: '215 次生成留有可查记录' },
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
          'I taught two small Cambridge KET classes while doing a computer science degree, and wrote a set of practice exercises most weeks. Three things were wrong, and none of them was speed: I could not control difficulty, past papers ran out, and the topics were stale.',
        ],
        zh: [
          '读计算机学位期间我带着两个剑桥 KET 小班，自己出练习。出问题的地方有三处，都不在速度上：难度控制不住，真题很快用尽，现成的话题又太旧。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The wrong version of this project', zh: '这个项目的错误做法' },
      body: {
        en: [
          'A prompt box that returns exam questions is unfalsifiable. Plausible output counts as success, so nothing is learned about whether the items work or how much the teacher still has to do. PaperCraft records both, which makes the **division of labour** between model and teacher measurable instead of assumed.',
        ],
        zh: [
          '给个输入框让模型直接出题，这条路没法证伪：输出看着像样就算成功，题目能不能用、教师还要补多少，都无从知道。PaperCraft 把这两件事都记下来，模型与教师之间的**分工**因此可测，用不着谁先假定。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the design is answerable to', zh: '这个设计要对什么负责' },
      body: {
        en: [
          'Holstein, McLaren and Aleven argue that complementarity between teacher and machine has to be established empirically, so adjudication is a hard gate and the gap between draft and final version is recorded. Mislevy, Steinberg and Almond treat assessment as a chain of reasoning from observable behaviour to claims about competence, so the system keeps item-level responses rather than a total score.',
          'Black and Wiliam, and later Hattie and Timperley, argue that evidence has to arrive while teaching can still change, so practice comes before the exam. Wu, Terry and Cai, with Amershi and colleagues, give the case for a chained pipeline whose stages can each be inspected and corrected.',
        ],
        zh: [
          'Holstein、McLaren 和 Aleven 主张，教师与机器之间的互补要由实证确立，所以裁决是一道绕不过的闸门，初稿与终稿之间的差距全部记录。Mislevy、Steinberg 和 Almond 把测评看成一条从可观察行为推到能力判断的推理链，所以系统存逐题作答，不存总分。',
          'Black 和 Wiliam，以及后来 Hattie 与 Timperley 关于反馈的研究，都主张证据要在教学还来得及调整时送到教师手里，所以练习安排在考前。Wu、Terry 和 Cai 与 Amershi 等人则给出了分段管线的理由：每一段都能被检查、被纠正。',
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
        en: 'The adjudication surface. Nothing reaches a classroom without an approve, edit or reject decision, and the reason for a rejection is kept, which is what makes the teacher\'s contribution measurable.',
        zh: '裁决界面。任何内容进入课堂前，都要有人明确点一次通过、修改或退回，退回的理由一并保留。教师的贡献因此可测。',
      },
    },
    {
      kind: 'pipeline',
      heading: { en: 'The pipeline as a research object', zh: '把生成管线当作研究对象' },
      intro: {
        en: [
          'Generation runs as a staged, typed chain with a human gate. Select a stage to see what it does and why it is there.',
        ],
        zh: [
          '出题是一条分阶段、带类型约束的链条，中间留了一道人工闸门。点开任意一个阶段，看它做什么、为什么在那儿。',
        ],
      },
      stages: [
        {
          id: 'S1',
          title: { en: 'Task specification', zh: '任务规格化' },
          what: {
            en: 'A validated request object: exam, part, topic, grammar focus, target difficulty.',
            zh: '一个校验过的请求对象，装着考试、部分、话题、语法重点和目标难度。',
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
            en: 'Personalises in context, without fine-tuning. The part of the prompt that never changes for this teacher is placed where the provider can cache it: on the provider\'s counters, the second of two requests sharing that block returned 4,096 cached tokens of 4,336, where the earlier order returned none.',
            zh: '不做微调，个性化全靠上下文里带的材料。对这位教师永不改变的那部分提示词放在供应商能缓存的位置。按供应商自己的计数，两次共享同一区块的请求，第二次命中了 4,336 个 token 里的 4,096，旧排法一个都没命中。',
          },
        },
        {
          id: 'S3',
          title: { en: 'Construct-specialised instruction', zh: '构念专用指令集' },
          what: {
            en: 'One instruction set per Cambridge part, encoding published item-writing rules: paraphrase rather than lift distinctive vocabulary, build distractors by twisting text content, keep option sets to one word class.',
            zh: '每个剑桥考试部分一套独立指令，里面写着已公开的命题规则。特征词汇要换成同义说法，干扰项靠扭转原文内容造出来，一组选项限定在同一词类里。',
          },
          why: {
            en: 'Non-experts under-specify prompts, so the specification belongs in the system rather than in a teacher\'s free text. Boundary: content-validity constraints only; construct validity is outside it.',
            zh: '非专家写 prompt 往往太笼统，这份规格化的活该由系统做，不该留给教师自己敲字。它能管的只有内容效度，构念效度不在其中。',
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
            zh: '格式错误会留下一条可恢复、可查的记录，不再凭空消失。',
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
            en: 'KET picture-story and picture-matching items need text and image to agree. Writing the prompt from the generated image, not the other way round, is what keeps them aligned; reordering the fallback providers cut the worst observed request from 230 seconds to 134.',
            zh: '看图写作和图片匹配题要求文字与图像一致。先出图、再据图命题，两者才不会对不上。备用供应商重排过之后，最差的一次请求从 230 秒降到 134 秒。',
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
            zh: '生成文本的 CEFR 等级控制本就不可靠，所以这道审计与其悄悄拦下，不如做成看得见的护栏。10% 的容差是刻意的，专有名词和能产构词本来就落在基础词表外。它只能判断词在不在表内，句法难度、文化负载、认知需求都管不到。',
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
      kind: 'prose',
      heading: { en: 'How a prompt is built', zh: '提示词是怎么拼出来的' },
      body: {
        en: [
          'The prompt for a part is assembled rather than written by hand. Eight sections go into it, and six of them appear in every one of the fifteen item types. The section that decides item quality is the validity rules: the conditions an item must not fail. Every clause in it came from an item an examiner marked wrong, and the handbooks were then read line by line to establish which of those rules they actually state.',
          'The picture branch is where a prompt is most visibly written against failures that happened. It forbids storyboard frames, grids and panel numbers, because the model\'s default reading of a three-picture story is one composite image with the panels circled.',
          'It permits no text in the image, because a model asked to draw a shop will label it, and printed words turn a writing task into a reading task. The first panel also names the two children in unusual detail, down to age and hair colour, because an ambiguity there propagates into every later panel.',
        ],
        zh: [
          '一个题型的提示词靠拼装得来，没有一份是手写的。八段构成一份，其中六段在十五种题型里每份都有。真正决定题目质量的是「有效性规则」那一段，写的是一道题不许违反哪些条件。那一段里的每一条，都来自某道出过错的题，然后再逐行翻手册，确认剑桥到底写明了其中哪几条。',
          '图形题那一支最能看出，提示词是照着实际发生过的失败写的。它禁止分镜框、网格和面板编号，因为面对三张图的故事，模型的默认理解就是拼成一张合成图、还在上面画圈标号。',
          '它也不允许图上出现文字，因为让模型画一间商店，它会顺手把店名写上去，而画面里的字会把一道写作题变成阅读理解题。第一格还要求把两个孩子的年龄、发色写清楚，因为这一处含糊会传染到后面每一格。',
        ],
      },
    },
    {
      kind: 'table',
      heading: { en: 'The eight sections of a generation prompt', zh: '一道生成提示词的八个段落' },
      head: [
        { en: 'Section', zh: '段落' },
        { en: 'What it fixes', zh: '修的是' },
        { en: 'Parts using it', zh: '多少题型用' },
      ],
      rows: [
        [
          { en: 'Output contract', zh: '输出约定' },
          { en: 'Raw JSON only, no fences, no commentary', zh: '只出原始 JSON，不要代码围栏、不要解释' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Role', zh: '角色' },
          { en: 'The exact Cambridge part being written', zh: '正在生成的究竟是剑桥哪个部分' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Task focus', zh: '任务焦点' },
          { en: 'What the part tests, in the handbook\'s own words', zh: '这部分考什么，用手册自己的说法' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Text specification', zh: '文本规格' },
          { en: 'Length, register and structure of the passage', zh: '语篇的长度、语域与结构' },
          { en: '11 of 15', zh: '11 / 15' },
        ],
        [
          { en: 'Validity rules', zh: '有效性规则' },
          { en: 'How an item must not fail', zh: '一道题不得违反哪些条件' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Count assertion', zh: '数量断言' },
          { en: 'The exact number of items, stated twice', zh: '题目的确切数量，写两遍' },
          { en: '9 of 15', zh: '9 / 15' },
        ],
        [
          { en: 'JSON schema', zh: 'JSON 结构' },
          { en: 'The shape the answer must take', zh: '答案必须长成什么形状' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Self-check', zh: '自检' },
          { en: 'What the model must verify before it answers', zh: '作答之前模型必须自己核对什么' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
      ],
      caption: {
        en: 'Counted from the live prompts by a script when the report is built, not typed in by hand. That script is also the instrument that once reported three PET parts had no validity rules at all; they had them, under headings it did not recognise. It now matches the shape of a heading rather than a list of the headings someone happened to notice.',
        zh: '这些计数由脚本在写报告时从实际提示词里数出来，没有人手填。同一个脚本曾经报出三个 PET 题型完全没有有效性规则，其实有，只是标题写法它不认识。现在它按标题的形状匹配，不再依赖某个人碰巧见过的标题清单。',
      },
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
        en: 'Transcribed from the checks as they run. The last column is the gap a per-question check leaves.',
        zh: '按实际运行的检查转写。最后一列是逐题检查留下的缺口。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/generation-trace.webp',
      w: 1796,
      h: 358,
      alt: {
        en: 'The generation record for one exercise, opened from a draft: which accepted rules were applied, how many seconds the writing took, and two checks with their verdicts.',
        zh: '一份初稿上可打开的生成记录：应用了哪几条已接受的规则、写作花了多少秒，以及两道检查各自的结论。',
      },
      caption: {
        en: 'Every generation leaves a record, and the teacher can open it: one accepted rule was applied, the writing took 2.5 seconds, and both deterministic checks passed. The pipeline is built to be auditable rather than trusted, which is why the record sits on the draft and not only in a log.',
        zh: '每次生成都会留下记录，教师可以直接打开，看到应用了一条他已接受的规则、写作耗时 2.5 秒、两道确定性检查都通过。这条管线要能被查，不能只靠相信，所以记录就摆在初稿上，教师打开就能看到，不必去翻日志。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The other half of the system', zh: '系统的另一半' },
      body: {
        en: [
          'Generation is half of what this does. The other half reads the correction log instead of writing exercises; it runs offline on a schedule or when the teacher asks. A pattern has to recur in at least three different exercises before it can become a candidate rule, counted by distinct generations rather than by events, because four option edits inside one exercise are one decision. The distiller gets the handbook specification for the part along with the edits; without it, the most it can infer is that some text changed.',
          'A candidate rule does not reach the teacher on its own reasoning. It goes to an audit running inside distillation on a different vendor\'s model at temperature zero, told to refute the rule rather than improve it, and required to name a ground when it refuses. It can refuse or pass, never write, edit or apply. Silence is refusal, and an unreachable or truncated audit proposes nothing. Rules stay with the teacher who accepted them and are not pooled across users.',
          'Three arbitrary substitutions, in which nine became ten, red became blue and a park became a beach, led the distiller to a rule that factual details should be accurate. The evidence held nothing but those substitutions: no source material, and nothing saying any original value was wrong. The audit refused the rule, because its rationale asserted a fact the evidence did not contain.',
          'Run three times on a sound rule, the audit accepted it twice. It had also been handed the changed values alone while the distiller had the specification and the teacher\'s notes; given the distiller\'s bundle, three parts that had just produced three refusals produced three accepted proposals. Refusing a sound rule costs a round of distillation; admitting an unsound one puts an invented constraint into every later prompt.',
        ],
        zh: [
          '生成只占这个系统的一半。另一半读批改日志，不写题，按日程离线运行，或者由教师手动触发。一个模式要出现在至少三次**不同的生成**里才算候选规则，数的是生成次数；同一道题里改了四处选项，只算一个决定。蒸馏器拿到的除了改动，还有该题型的手册规格；不给规格，它最多只能推出「有文字被改过」。',
          '候选规则不会仅凭自己的推理送到教师面前，它要先过一道审计。审计跑在**另一家厂商**的模型上，温度 0，唯一收到的指令是证伪这条规则，拒绝时必须说清是哪一条理由。它只能拒绝或通过，不能写、不能改、不能应用。沉默即拒绝，审计不可达或返回被截断，就等于什么都没提。规则属于接受它的那位教师，不做跨用户合并。',
          '三次任意替换，九变成十、红变成蓝、公园变成海滩，让蒸馏器推出一条「事实细节应当准确」的规则。证据里只有那三次替换，没有原始材料，也没有任何地方说原来的值是错的。审计拒绝了它，理由是这条规则的说明断言了证据里并不存在的事实。',
          '同一条站得住的规则跑三次，审计接受了两次。它当时只拿到改动的值，而蒸馏器手里还有规格和教师的备注；把蒸馏器看到的那一整包交给它之后，三个刚连出三次拒绝的题型给出了三条被接受的建议。拒掉一条好规则只是多跑一轮蒸馏，放进一条坏规则，就是往之后每一次 prompt 里塞进一条凭空造出来的约束。',
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
        zh: '标题是「系统从你这里学到了什么」的页面。一排计数从记录的批改、变成建议、被审计拒绝，一直到等你决定的规则。下面是每条建议本身、它据以归纳的证据，以及开始使用和谢绝两个按钮。',
      },
      caption: {
        en: 'What the offline half shows the teacher. Nothing changes about later drafts until the teacher accepts a proposal, and each one carries the evidence it was induced from. The counters here belong to the demonstration account.',
        zh: '离线的那一半在教师这一侧的样子。教师接受之前，之后的初稿不会有任何变化；每条建议都附上它据以归纳的证据。图中的计数属于演示账号。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What is being measured, and how', zh: '到底在测什么，怎么测' },
      body: {
        en: [
          'Teacher intervention is measured at approval, by comparing the frozen draft with the teacher\'s version: word-level edit distance, plus typed flags for which part of the item moved. Item behaviour is measured once learners answer, as proportion-correct difficulty, point-biserial discrimination and option counts; the four writing tasks are marked by a teacher, so no such statistic exists for them. Together these show where the model is weak in practice, which is not always where it looks weak.',
          'Authoring cost and load are measured against each teacher\'s own manual workflow, in a paired within-subject design with SUS, NASA-TLX, a content-quality rubric and an interview. Only classical test theory is used, because the sample size this setting can reach does not support item response theory. The instruments are written; the study has not been run.',
        ],
        zh: [
          '教师干预量在点下通过那一刻就测出来了，把冻结的初稿和教师终稿比一比，算词级编辑距离，再用一组标记指出改动落在哪一部分。题目表现则要等学生作答之后才有，算的是通过率难度、点二列区分度和各选项次数。四个写作任务由教师评分，没有这类统计量。两者合起来，能看出模型实际弱在哪，这和看上去弱的地方并不一致。',
          '出题成本和认知负荷，拿每位教师自己的手工流程当基线，用被试内配对设计来测，另配 SUS、NASA-TLX、内容质量量表和访谈。只用经典测验理论，因为这个场景能达到的样本量撑不起项目反应理论。量表和流程已经写好，研究尚未开展。',
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
        zh: '某份练习的班级分析视图，有整体与逐题的数字、把请求难度与观测难度并列的横幅，以及每道题的区分度值和各选项次数。',
      },
      caption: {
        en: 'Classical item analysis computed from responses: difficulty, discrimination, how often each option was chosen, and the distractors the class never picks. The banner compares the difficulty the teacher asked for with what the items turned out to be. The responses are the author\'s own demonstration data; no student has taken part.',
        zh: '依据作答算出的经典项目分析，有难度、区分度、各选项被选次数，以及全班从不选的干扰项。上方横幅把教师当初要的难度和题目实际表现出的难度并列。作答数据是作者自己录入的演示数据，没有学生参与。',
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
          'A solver sees each item with its key removed, and a challenger constructs a reading on which each wrong option would be correct. A contested key and a second defensible answer both surface this way; a declined item is excluded rather than counted as a pass.',
          'One item in the bank is a real defect. The notice reads "Swimming club meeting on Friday at 4 pm. Bring your swimsuit." The key is that a swimsuit is needed, but "the meeting is in the afternoon" is also true, so the item has two defensible answers. It passed the schema, handbook and vocabulary gates, and all three were right to pass it.',
          'The larger failure is in the key across a whole set, which no per-question gate can look at. Across 33 generations of A2 Reading and Writing Part 4 on one day, 26 had one letter taking at least two thirds of the answers and 13 put all six on option A; over the 198 questions the split was 147 on A, 41 on B and 10 on C. On those 13, a candidate who always answered A scored full marks.',
          'The prompt now asks for the key to be spread, and a fourth deterministic check counts it and reports to the teacher. The second measurement is the useful one: over 12 further generations, five keys were still skewed, two were still entirely on A, and the share on A fell only from 74 per cent to 57. A rule in a prompt is a request; checking that it holds is separate work.',
          'Building the check taught more about the check than about the bank. One fault took the rate from 12 per cent to 2 per cent; a worse one was silent and correct, and kept every cloze item out of the count while the count was read as covering the bank. The scripts now print what they skip.',
        ],
        zh: [
          '这几道闸门查的是结构、是不是手册里那个任务、词在不在表内，没有一道查答案对不对。',
          '求解器拿到的是去掉答案键的题目，挑战者则要为每一个错误选项构造一种它也能成立的读法。有争议的键和第二个说得通的答案都会这样浮出来；拒绝打分的题目按排除处理，不计为通过。',
          '题库里有一道题是真缺陷。通知写着「Swimming club meeting on Friday at 4 pm. Bring your swimsuit.」。答案键是「要带泳衣」，但「活动在下午」同样成立，所以这道题有两个都说得通的答案。它通过了结构、手册和词汇三道闸门，三道闸门放它过去都没有判错。',
          '更大的一处失败在整套题的答案键上，这是逐题闸门看不到的。同一天生成的 33 份 A2 Reading and Writing Part 4 里，26 份有一个字母占了至少三分之二的答案，13 份把六个答案全放在 A 上；198 道题的分布是 A 147、B 41、C 10。这 13 份里，一路只选 A 的考生能拿满分。',
          'prompt 里加上了「答案键要在各字母间分散」的要求，并增加第四道确定性检查来数它们、把结果报给教师。有用的是第二次测量。之后 12 份生成里仍有 5 份偏斜、2 份全在 A，A 的占比只从 74% 降到 57%。写在 prompt 里的规则只是一个请求，确认它是否生效是另一件事。',
          '做这道检查，学到的东西更多关于检查本身。有一处把缺陷率从 12% 压到 2%；更麻烦的一处不出声而且本身是对的，整类完形填空都没进计数，而那个数字看起来覆盖了全库。脚本现在会打印被跳过的内容。',
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
        en: 'The warning is the fourth deterministic check, running before the teacher sees the draft.',
        zh: '上面那条告警来自第四道确定性检查，在教师看到初稿之前就已经跑过。',
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
            en: 'Deployed and used for classroom materials, with Word, PDF and slide export. Of the 215 traced generations, 211 passed the specification gate first time and four after a repair.',
            zh: '已上线并用于产出课堂材料，支持导出 Word、PDF 与幻灯片。215 次留有记录的生成中，211 次第一次就通过规格闸门、4 次修复后通过。',
          },
        },
        {
          label: { en: 'Learner practice loop', zh: '学生练习回路' },
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
            en: 'Reports a compliance figure on every item. Comparing the pass flag either side of an edit proved inert: the published A2 list scores ordinary classroom prose at about 82 per cent, so almost every draft starts non-compliant. It now reports a material drop instead.',
            zh: '每道生成的题目都会报出合规率。拿通过标记做编辑前后对比已经被证明没用，A2 词表给普通课堂散文打约 82 分，几乎每份初稿一上来就不合规。现在改为报告合规率的实质下降。',
          },
        },
        {
          label: { en: 'Answer-correctness check', zh: '答案正确性检查' },
          state: 'instrumented',
          detail: {
            en: 'A solver and a challenger judge each saved item with its key removed, so a contested key and a second defensible answer both surface. Two items were flagged and one is a genuine defect; the rate over the bank is an existence proof, not a measurement, because no item has been compared with teacher judgement.',
            zh: '把答案键拿掉后交给求解器和挑战者各判一次，有争议的键和第二个说得通的答案都会浮出来。命中两处，其中一处是真缺陷；全库的比率只能当存在性证明看，还算不上质量测量，因为还没有任何题目跟教师的判断对过。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'Pre-edit drafts are frozen and the edit-distance computation is implemented. No teacher editing data has been collected, so no distribution across item types can be reported.',
            zh: '编辑前的初稿会被冻结，编辑距离也算得出来。尚未采集到教师的编辑数据，因此还报不出各题型之间的分布。',
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
            en: 'Protocol, consent, questionnaire, timing sheets, SUS, NASA-TLX, rubric and interview guide are written. Data collection has not started.',
            zh: '实施流程、知情同意书、背景问卷、任务计时表、SUS、NASA-TLX、内容质量量表和访谈提纲都已写好，数据收集尚未开始。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'What I would argue with', zh: '这个设计里我自己也会质疑的地方' },
      body: {
        en: [
          'The lexical audit checks wordlist membership, so a text can be fully compliant and still too hard: syntax, cultural load and cognitive demand sit outside it. The guardrail is narrower than it looks.',
          'Encoding item-writing rules per exam part buys content validity only; showing that the items measure what Cambridge intends would need a far larger response pool. The intervention metric measures edit **magnitude** well and **significance** poorly: rewriting one word of a key changes the item completely, while rewriting a sentence of a passage may change nothing that matters.',
        ],
        zh: [
          '词汇审计查的只是词在不在表里，句法、文化负载、认知需求都不归它管，所以一段文本可以完全合规却依然太难。这道护栏比看上去窄。',
          '按考试部分编码命题规则，换来的只是内容效度；要证明这些题目测到了剑桥想测的东西，得有一个大得多的作答池。干预度量能测准编辑的**幅度**，却测不准**分量**。答案键上改一个词，整道题就变了；语篇里重写一整句，却可能什么要紧的都没动。',
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
        en: 'Citations keep their original form; the full list sits with the thesis working material.',
        zh: '文献条目保留原文，完整清单在论文的工作材料里。',
      },
    },
  ],
};
