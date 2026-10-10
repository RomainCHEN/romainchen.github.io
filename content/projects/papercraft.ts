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
    zh: '面向剑桥 KET / PET 的出题工具，教师全程参与裁决，改动的内容与幅度都记录为数据。',
  },
  period: { en: 'May 2026 to present', zh: '2026 年 5 月至今' },
  role: {
    en: 'Sole developer and research design',
    zh: '独立开发与研究设计',
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
    { en: 'Human-in-the-loop', zh: '人在回路' },
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
      label: { en: 'Design', zh: '设计' },
      value: { en: 'A model inside a harness; 7 stages, one of them human', zh: '模型置于 harness 之中，7 个阶段，其中一个由人承担' },
    },
    {
      label: { en: 'Prompt', zh: '提示词' },
      value: { en: 'Eight sections; six on every part', zh: '八个段落，其中六段适用于每种题型' },
    },
    {
      label: { en: 'Checks', zh: '确定性检查' },
      value: { en: 'Five gates, none reads the answer', zh: '五道闸门，都不判定答案是否正确' },
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
          '读计算机学位期间我带两个剑桥 KET 小班，练习多半自己出。有三件事始终没能解决，都与出题速度无关：难度难以控制，真题很快用尽，可用的话题也已陈旧。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What kind of system this is', zh: '这是一个什么样的系统' },
      body: {
        en: [
          'PaperCraft is an agent system in a narrow sense: a language model inside a harness. It is called in a defined sequence, held to a machine-checkable output shape, checked by ordinary code between the calls, and asked to repair a named failure when one is found. It writes exercises, induces rules from what the teacher changed, and hands each proposal to something built to refute it.',
          'Three parties decide, and the line between them is the design. The model writes and induces. Ordinary code settles what is decidable: whether a part has three options or four, whether the words are on the level\'s list, whether the answers are spread across the letters. The teacher settles anything that is a judgement about their own teaching, and no rule reaches a prompt without them.',
          'What this design argues about agent systems is how much it declines to decide. The model judges only where the question cannot be computed, which in this loop means whether two of a teacher\'s rules contradict each other; everything else it does is writing. Structure buys that control and brings failure modes of its own, such as a component that reads a frequency as an endorsement, and the design anticipates those.',
        ],
        zh: [
          'PaperCraft 是一个界定很窄的 agent 系统，语言模型运行在一套 harness 之中。调用顺序固定，输出必须是机器可校验的结构，两次调用之间由普通代码把关；出错时它不能重新生成一次，只能针对已经指明的那一处修改。它负责写题，也从教师的改动中归纳规则，再把每条建议交给一道独立的审计去证伪。',
          '做决定的有三方，界线划在何处就是这套设计本身。模型负责写与归纳；凡是可判定的事交给普通代码，例如一个部分是三个选项还是四个、词是否在该级别的词表内、答案在各字母之间是否分散。其余属于教学判断，归教师所有，任何规则进入 prompt 之前都要经教师同意。',
          '这套设计对 agent 系统的主张，体现在它有多少决定不交给模型。只有无法计算的问题才由模型判断，在这个回路里只有一处，即两条规则是否互相矛盾；其余环节模型只负责写。结构带来了这种控制，也带来了结构自身的失效方式，例如某个组件会把出现频率当作认可。这些失效方式在设计阶段就已考虑在内。',
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
        en: 'Nothing reaches a classroom without an approve or reject recorded here, and the reason for a rejection is kept, which is what makes the teacher\'s contribution measurable. Editing the draft happens in the fields above, through the Edit control at the head of the panel.',
        zh: '任何内容进入课堂之前，都要在此处留下一次通过或退回的记录，退回的理由一并保存，教师的贡献因此可以计量。初稿的修改在上方的字段中完成，入口是初稿抬头右侧的 Edit。',
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
          '出题是一条分阶段、带类型约束的链条，中间设有一道人工闸门。点开任意阶段可以看到它做什么、为何存在。',
        ],
      },
      stages: [
        {
          id: 'S1',
          title: { en: 'Task specification', zh: '任务规格化' },
          what: {
            en: 'A validated request object: exam, part, topic, grammar focus, target difficulty.',
            zh: '一个经过校验的请求对象，包含考试、部分、话题、语法重点与目标难度。',
          },
          why: {
            en: 'Makes every generation reproducible and loggable. Later analysis can only reach what was recorded as structured input.',
            zh: '每次生成因此可复现、可追查。日后能分析的，只有当时记录为结构化输入的内容。',
          },
        },
        {
          id: 'S2',
          title: { en: 'Personalised prompt assembly', zh: '个性化 prompt 装配' },
          what: {
            en: "Retrieves this teacher's own material: the rules they approved, what usually needs fixing on this part, their earlier corrections, their usual topics and grammar, the reasons they rejected earlier drafts, and example exercises.",
            zh: '取回这位教师自己的材料：已接受的规则、这一题型上通常需要修改之处、早先的改动、常用的话题与语法、退回初稿的理由，以及范例题。',
          },
          why: {
            en: 'Personalises in context, without fine-tuning, and orders the block so a provider can reuse it: everything invariant for this teacher and part precedes the task line, the only line that changes between drafts. The second of two requests sharing it returns 4,096 cached tokens of 4,336, where the earlier order returned none.',
            zh: '不做微调，个性化依靠上下文携带的材料，排列顺序按缓存复用来定：对这位教师和这一题型固定不变的部分排在最前，任务行放在末尾，那是两次生成之间唯一变动的一行。共享这一段的两次请求，第二次在 4,336 个 token 中命中 4,096，旧的排列顺序一次都没有命中。',
          },
        },
        {
          id: 'S3',
          title: { en: 'Construct-specialised instruction', zh: '构念专用指令集' },
          what: {
            en: 'One instruction set per Cambridge part, encoding published item-writing rules: paraphrase rather than lift distinctive vocabulary, build distractors by twisting text content, keep option sets to one word class.',
            zh: '每个剑桥考试部分各有一套指令，写明已公开的命题规则：特征词汇改用同义表达，干扰项由原文内容的扭转构成，同一组选项限定在同一词类。',
          },
          why: {
            en: 'Non-experts under-specify prompts, so the system carries the specification and the teacher does not have to write it. These are content-validity constraints only; construct validity sits outside them.',
            zh: '非专家写出的 prompt 往往过于笼统，因此这部分规格由系统承担，不需要教师自己撰写。它约束的只有内容效度，构念效度不在范围之内。',
          },
        },
        {
          id: 'S4',
          title: { en: 'Generation with typed repair', zh: '带类型修复的生成' },
          what: {
            en: 'Schema check, validator error re-injected into the prompt, bounded retries with model routing across providers.',
            zh: '先做结构校验，将校验报错重新写回 prompt，重试次数设有上限，并在多家模型之间路由。',
          },
          why: {
            en: 'Converts silent format defects into recoverable, logged events, so a malformed item leaves a record. The retry carries the validation error back with it, so the model repairs a named failure.',
            zh: '格式错误转为可恢复、可追查的事件，结构不合规的题目会留下记录。重试时把校验报错一并送回，模型修的是一处已经指明的失败。',
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
            en: 'KET picture-story and picture-matching items need text and image to agree. Writing the prompt from the generated image is what keeps them aligned.',
            zh: '看图写作与图片匹配题要求文字与图像一致。先生成图像，再依图命题，两者才能对应。',
          },
        },
        {
          id: 'S6',
          title: { en: 'CEFR lexical audit', zh: 'CEFR 词汇审计' },
          what: {
            en: 'Content words checked against the level wordlist; up to 10% out-of-list is tolerated and the compliance figure is shown to the teacher.',
            zh: '实义词逐个比对该等级词表，允许最多 10% 超纲，并向教师显示合规率。',
          },
          why: {
            en: 'CEFR control of generated text is unreliable, so the audit warns the teacher instead of blocking silently; the 10% tolerance covers proper nouns and productive morphology. It judges lexical membership only.',
            zh: '生成文本的 CEFR 等级控制本来就不可靠，因此这道审计向教师显示结果，不作静默拦截；10% 的容差留给专有名词与能产构词。它只能判断词是否在表内。',
          },
        },
        {
          id: 'S7',
          title: { en: 'Teacher adjudication', zh: '教师裁决' },
          what: {
            en: 'Approve, edit or reject with a reason. The pristine model draft is frozen at this moment.',
            zh: '通过、修改，或者说明理由后退回。模型的原始初稿在这一刻冻结。',
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
          'Each part\'s prompt is assembled by code. Eight sections go into it, and six appear in every one of the fifteen item types. Item quality is decided by the validity rules, the conditions an item must not fail. Every clause in it came from an item an examiner marked wrong, and the handbooks were then read line by line to establish which of those rules they state, because a handbook describes the task and not the ways an item fails.',
          'Two decisions shape the teacher\'s half of that assembly. Approved rules go in grouped by the stage of writing they govern, because the same rules as one flat list perform measurably worse. The line about what usually needs fixing is a count computed by code, because a model accepts a stated number almost without question.',
        ],
        zh: [
          '每一种题型的提示词都由代码装配而成，没有一份出自手写。一份提示词分八段，其中六段为十五种题型通用。决定题目质量的是「有效性规则」，它规定一道题不得违反什么。规则条条有出处，均来自判为错题的实例，定稿后再逐条核对手册，确认剑桥明确写出了其中哪几条。手册说明的是这一部分考什么，不涉及一道题会在哪里失效。',
          '属于教师的那一半有两处取舍。已通过的规则按其约束的写作环节分组写入提示词，同一批规则平铺列出，效果会明显变差。「通常需要修改什么」那一行由代码统计得出，不交给模型估算，因为给定的数字模型几乎不加质疑地接受。',
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
          { en: 'The exact Cambridge part being written', zh: '正在生成的是剑桥的哪一个部分' },
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
          { en: 'The shape the answer must take', zh: '答案必须采用的结构' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Self-check', zh: '自检' },
          { en: 'What the model must verify before it answers', zh: '作答之前模型必须自己核对什么' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
      ],
      caption: {
        en: 'A script counts these from the live prompts when the report is built. That script once reported three PET parts had no validity rules at all; they had them, under headings it did not recognise. It now matches the shape of a heading, so a heading written a new way is still found.',
        zh: '这些计数在构建报告时由脚本从实际提示词中统计，并非人工填写。同一个脚本曾报告三个 PET 题型完全没有有效性规则，其实都有，只是标题写法不在它的识别范围内。现在它按标题的形式匹配，换一种写法也能找到。',
      },
    },
    {
      kind: 'exhibit',
      intro: {
        en: [
          'Two fragments, quoted from the source. The first is the distractor rule from the A2 Reading and Writing Part 1 prompt; the second keeps the three pictures of a picture story showing the same two children.',
        ],
        zh: [
          '以下两段直接引自源码。第一段是 A2 Reading and Writing Part 1 提示词中的干扰项规则；第二段用来让三格看图故事始终画着同样的两个孩子。',
        ],
      },
      blocks: [
        {
          label: { en: 'Distractor rules, A2 Reading Part 1', zh: 'A2 Reading Part 1 的干扰项规则' },
          source: 'src/lib/prompt-assembly.ts',
          text: '- Each of the two wrong options must reuse AT LEAST ONE word or idea that actually appears in the text, but recombine it into a meaning the text does NOT state.\n- Distractors must be plausible misreadings, never obviously unrelated (that makes the item too easy).\n- The correct option must reflect the STATED meaning, not a possible later outcome.\n- All 3 options must be similar in length and register so length gives nothing away.',
        },
        {
          label: {
            en: 'Character consistency, three-panel picture story',
            zh: '三格看图故事的人物一致性约束',
          },
          source: 'src/lib/image-generation.ts',
          text: 'Use the reference image ONLY as the guide for who the characters are and how they are drawn: identical faces, hairstyles, clothing and colours, same line weight, same plain white background with no colour wash or sepia tint. Do NOT copy the reference image\'s composition or framing. Draw ONE single new scene filling the whole frame, with no panels, frames, grids, dividing lines or numbers. Do not write any words, letters or numbers anywhere in the picture.',
        },
      ],
      caption: {
        en: 'The second is what the picture branch looks like in practice: three images are three separate calls, so the two children have to be held fixed by hand, and the drawing model has to be told not to label the shop it was asked to draw.',
        zh: '第二段是图像分支的实际样子：三张图来自三次独立调用，两个孩子只能靠提示词维持一致；还要特别交代，不要在它画出的那间商店上写店名。',
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
          { en: 'Whether the exercise is the exam task', zh: '这道题是否就是手册规定的任务' },
        ],
        [
          { en: 'Handbook specification', zh: '手册规格闸门' },
          { en: 'Whether it is the published task', zh: '是否为已公开的那个任务' },
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
          { en: 'Whether a picture is exam material', zh: '配图是否可作考试材料' },
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
        zh: '依实际运行的检查转写。最后一列是逐题检查留下的空白。',
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
        en: 'Every generation leaves a record the teacher can open: one accepted rule was applied, the writing took 2.5 seconds, and both deterministic checks passed. The pipeline is built to be audited, which is why the record sits on the draft and not only in a log.',
        zh: '每次生成都留下一份记录，教师可以直接打开：应用了已接受的一条规则，写作耗时 2.5 秒，两道确定性检查都通过。这条管线的设计前提是接受审查，所以记录就放在初稿上，不必翻查日志。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The other half of the system', zh: '系统的另一半' },
      body: {
        en: [
          'Generation is half of what this does. The other half reads the correction log, and runs offline on a schedule or when the teacher asks. A pattern has to recur in at least three distinct exercises before it becomes a candidate rule, counted by generations and not by events, because four option edits inside one exercise are one decision. The distiller also gets the handbook specification for that part; without it, the most it can infer is that some text changed.',
          'Every candidate rule passes an audit before it reaches the teacher. The audit runs inside distillation on a different vendor\'s model at temperature zero, told to refute the rule rather than improve it, and required to name a ground when it refuses. It can refuse or pass, never write, edit or apply. Silence is refusal, and an unreachable or truncated audit proposes nothing. Rules stay with the teacher who accepted them and are not pooled across users.',
          'Three substitutions written for a test, in which nine became ten, red became blue and a park became a beach, led the distiller to a rule that factual details should be accurate. The evidence held nothing but those substitutions, with no source material and nothing saying an original value was wrong. The audit refused it, because the rationale asserted a fact the evidence did not contain. One case establishes the failure mode and leaves its frequency open.',
          'Run three times on a sound rule, the audit accepted it twice. What it is shown matters. Handed the changed values alone it refused rules that it accepted once the distiller\'s full bundle arrived, and three parts that had just produced three refusals then produced three accepted proposals. Refusing a sound rule costs a round of distillation; admitting an unsound one puts an invented constraint into every later prompt.',
          'Each new harness version carries the earlier ones forward verbatim. A rule the teacher retired stays retired and a proposal they have not answered stays pending, because nothing in the loop has standing to change a verdict they already gave. A defect where one refused proposal revoked every accepted rule is now a single function with a single test.',
        ],
        zh: [
          '生成只占这个系统的一半。另一半读的是批改日志，离线运行，按日程触发或由教师手动触发。一个模式要在至少三次不同的生成中反复出现，才能成为候选规则，计数依据是生成次数：同一道题里改了四处选项，仍然只算一个决定。蒸馏器除了改动，还会拿到该题型的手册规格；没有规格，它最多只能推出文字有过改动。',
          '每条候选规则都要先过一道审计，才能送到教师面前。审计运行在另一家厂商的模型上，温度 0，收到的唯一指令是证伪这条规则，拒绝时必须给出依据。它只能拒绝或通过，不能写、不能改、不能应用。没有回应即视为拒绝；审计连不上或返回被截断，同样不产生任何建议。规则只归接受它的那位教师，不在用户之间汇总。',
          '为测试写的三次替换，九改成十、红改成蓝、公园改成海滩，让蒸馏器推出一条「事实细节应当准确」的规则。证据里只有这三次替换，既无原始材料，也没有任何一处说明原值是错的。审计拒绝了它，依据是该规则的说明断言了证据中并不存在的事实。单这一例可以确立失败模式存在，出现频率则仍是未知。',
          '同一条站得住的规则运行三次，审计接受了两次。给它看什么很关键：只给改动后的值时，它拒绝了一些规则；把蒸馏器手上的完整材料一并交给它，同一条规则就得到接受，原本连续三次遭拒的三个题型随之给出三条通过的建议。拒绝一条好规则只是多跑一轮蒸馏，放进一条坏规则，则会在此后每一次 prompt 中加入一条凭空生成的约束。',
          '每一个新的 harness 版本都逐字继承此前各版。教师撤下的规则保持撤下，尚未答复的建议保持待定，因为回路中没有任何一环有资格改动教师已经给出的裁决。此前有一处缺陷，一条遭拒的建议会使全部已接受的规则失效；现在这件事写成一个函数，由一个测试覆盖。',
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
          '两半合起来是一个回路。制作初稿时流程自左向右，教师的改动沿下方的带状路径回流，已接受的规则从 prompt 装配处重新进入。',
        ],
      },
      alt: {
        en: 'Two bands. Online, per request: task specification, prompt assembly, generation, deterministic checks, then the teacher\'s decision. Offline, written right to left: the edit log feeds distillation, then the audit, then the teacher\'s decision, which returns as accepted rules to prompt assembly.',
        zh: '上下两条带。在线部分按请求推进，依次是任务规格化、prompt 装配、生成、确定性检查，再到教师裁决。离线部分自右向左，从批改日志进入蒸馏，再到审计与教师决定，最后以已接受的规则回到 prompt 装配。',
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
        zh: '下方这条带上的任何一环都不能写题，上方这条带上的任何一环也不能裁定规则。教师在两侧各出现一次，两半就在那里相连。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/learned-rules.webp',
      w: 1600,
      h: 867,
      alt: {
        en: 'The page headed "What the system has learned from you": a row of counters running from corrections recorded through proposals the audit refused to rules waiting for a decision, then the proposals themselves, each with the evidence it was induced from and a button to start or decline using it.',
        zh: '标题是「系统从你这里学到了什么」的页面。一排计数依次是已记录的批改、已生成的建议、审计拒绝的建议，以及等待你决定的规则。下面是每条建议本身、它据以归纳的证据，以及开始使用和谢绝两个按钮。',
      },
      caption: {
        en: 'What the offline half shows the teacher. Nothing changes about later drafts until the teacher accepts a proposal, and each one carries the evidence it was induced from. The counters here belong to the demonstration account.',
        zh: '离线那一半呈现给教师的界面。教师接受之前，之后的初稿不会有任何变化；每条建议都附上它据以归纳的证据。图中的计数属于演示账号。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What is measured, and how two blind spots were closed', zh: '测什么，以及两个盲点是怎么补上的' },
      body: {
        en: [
          'Teacher intervention is measured at approval, by comparing the frozen draft with the teacher\'s version, as word-level edit distance plus typed flags for which part of the item moved. The frozen draft predates any edit, so the measure describes the generator alone. Item analysis from learner responses stays in the product as a view for the teacher, and is not offered as a result of the study.',
          'Authoring time and perceived workload are measured against each teacher\'s own manual workflow. The instruments are written; data collection has not started.',
          'No gate checks whether the answer is right, and one class of defect belongs to the whole set, so no per-question gate can see it at all. Both reach a classroom. The expensive one is an item with two defensible answers: it reads correctly, and nothing catches it until a student argues for the option marked wrong and turns out to be right, at which point the lesson stops.',
          'Two fixes followed. A solver sees each item with its key removed, and a challenger builds a reading on which each wrong option would be correct; a declined item is excluded from the count, never passed. Separately, a fourth deterministic gate counts how the key is spread across a set and reports it to the teacher, behind a line in the prompt that asks for it.',
          'The first flagged two items, and one of them is a genuine defect. A notice about a Friday swim club at 4 pm is keyed to "bring your swimsuit", and "the meeting is in the afternoon" is also true. It passed all three gates, and all three were right to pass it.',
          'The second failure was the larger one, and the one worth reporting in numbers. Across 33 generations of A2 Reading and Writing Part 4 in one day, 13 had put all six answers on option A, so a candidate who never read the passage scored full marks. Over 12 generations after the change the share on A fell only from 74 to 57 per cent, which is why the prompt line is not enough and a gate counts it.',
          'Building that gate was work in itself. One fault took the reported defect rate from 12 per cent to 2 per cent, and a worse one was silent and locally correct: it kept every cloze item out of the count while the count was read as covering the bank.',
        ],
        zh: [
          '教师点下通过时即计算干预量：将冻结的初稿与教师终稿比对，算出词级编辑距离，再用一组标记指出改动落在题目的哪一部分。参照的是教师动手之前的初稿，因此这个量只描述生成器本身。依学生作答算出的项目分析只在产品内供教师查看，不计入研究结果。',
          '出题耗时与主观负荷以每位教师自己的手工流程为基线测量。量表已经写好，数据收集尚未开始。',
          '没有哪道闸门判定答案是否正确；另有一类缺陷属于整套题而非单题，逐题闸门完全看不到。两类都会进入课堂。代价最大的是一道题有两个都说得通的答案，它读起来没有问题，一直无人察觉，直到学生为那个判为错的选项申辩，而他是对的，课就停在那里。',
          '针对这两类各做了一件事。求解器拿到的是去掉答案键的题目，挑战者为每一个错误选项构造一种能让它成立的读法；无法判定的题目作排除处理，不计为通过。另一件是增加第四道确定性检查，统计整套题的答案键分布并报给教师，同时在上游的 prompt 中加入一句相应要求。',
          '前一件标出了两道题，其中一道确是缺陷。一条通知写着周五下午四点有游泳俱乐部活动、要带泳衣，答案键取「要带泳衣」，而「活动在下午」同样成立。它通过了三道闸门，三道闸门各自的判断都没有错。',
          '后一件是更大的那处失败，也是值得用数字说明的一处。同一天生成的 33 份 A2 Reading and Writing Part 4 中，13 份把六个答案全放在 A 上，完全不读文章一律选 A 的考生即可得满分。加入那条要求之后的 12 份生成里，A 的占比只从 74% 降到 57%，所以 prompt 里的一句话不够，要由闸门来统计。',
          '做这道检查本身也费了些工夫。有一处错误把报出的缺陷率从 12% 降到 2%；更麻烦的一处不报错，单看也没算错，它把所有完形填空排除在计数之外，而那个数字看上去覆盖了全库。',
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
        en: 'Item analysis computed from responses: difficulty, discrimination, how often each option was chosen, and the distractors the class never picks. The banner compares the difficulty the teacher asked for with what the items turned out to be. The responses are the author\'s own demonstration data; no student has taken part.',
        zh: '依据作答算出的项目分析：难度、区分度、各选项被选的次数，以及全班从不选的干扰项。上方横幅将教师当初要求的难度与题目实际的难度并列。作答数据是作者自己录入的演示数据，没有学生参与。',
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
        zh: '那条告警来自第四道确定性检查，在教师看到初稿之前已经运行。',
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
          label: { en: 'Authoring and practice, 15 item types, exports', zh: '出题与练习、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used for classroom materials, with Word, PDF and slide export. Of the 215 traced generations, 211 passed the specification gate first time and four after a repair. Share codes, learner submission and per-question capture are live.',
            zh: '已上线并用于产出课堂材料，支持导出 Word、PDF 与幻灯片。215 次留有记录的生成中，211 次首次即通过规格闸门，另有 4 次经修复后通过。分享码、学生提交与逐题数据采集均已上线。',
          },
        },
        {
          label: { en: 'Answer-correctness check', zh: '答案正确性检查' },
          state: 'instrumented',
          detail: {
            en: 'A solver and a challenger judge each saved item with its key removed, so a contested key and a second defensible answer both surface. Two items were flagged and one is a genuine defect; the rate over the bank establishes that the defect exists, and measuring quality would need items compared with teacher judgement, which has not been done.',
            zh: '去掉答案键后，由求解器和挑战者各判一次，有争议的键与第二个说得通的答案都会显露出来。标出两处，其中一处确是缺陷。全库的比率只能说明这类缺陷确实存在。要测量质量，需要将题目与教师的判断逐一比对，这一步尚未开始。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'Pre-edit drafts are frozen and the edit-distance computation is implemented. No teacher editing data has been collected, so no distribution across item types can be reported.',
            zh: '编辑前的初稿会冻结保存，编辑距离的计算也已实现。教师的编辑数据尚未采集，因此还无法报告各题型之间的分布。',
          },
        },
        {
          label: { en: 'Classical item analysis', zh: '经典项目分析' },
          state: 'instrumented',
          detail: {
            en: 'Difficulty, discrimination and distractor analysis are implemented end to end and shown to the teacher. The responses so far are the author\'s own demonstration data; no student has taken part.',
            zh: '难度、区分度与干扰项分析已从数据到界面完整实现，并展示给教师。目前的作答是作者自己录入的演示数据，没有学生参与。',
          },
        },
        {
          label: { en: 'Teacher usability study', zh: '教师可用性研究' },
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
          '词汇审计只检查词是否在表内，句法、文化负载与认知需求都不在它的范围之内，所以一段文本可以完全合规而依然偏难。这道护栏比看上去要窄。',
          '按考试部分编码命题规则，换来的只是内容效度；要证明这些题目真的测到了剑桥想测的内容，需要一个大得多的作答池。干预度量能测准改动的**幅度**，测不准**分量**：答案键上改一个词，整道题就变了；语篇里重写一整句，可能什么要紧的都没动。',
        ],
      },
    },
  ],
};
