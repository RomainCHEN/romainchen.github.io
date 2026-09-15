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
      value: { en: 'A model inside a harness; 7 stages, one of them human', zh: '模型套在 harness 里跑，7 个阶段，其中一个是人' },
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
          '读计算机学位期间我带着两个剑桥 KET 小班，自己出练习。有三件事一直不好办，都不是出题速度的问题：难度控制不住，真题很快用尽，现成的话题又太旧。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What kind of system this is', zh: '这是一个什么样的系统' },
      body: {
        en: [
          'PaperCraft is an agent system in a narrow sense: a language model placed inside a harness rather than used as a product. It is called in a defined sequence, held to a machine-checkable output shape, checked by ordinary code between the calls, and asked to repair a named failure instead of generating again in the hope of a better result. It writes exercises, induces rules from what the teacher changed, and hands each proposal to something built to refute it.',
          'Three parties decide, and the line between them is the design. The model writes and induces. Ordinary code settles what is decidable: whether a part has three options or four, whether the words are on the level\'s list, whether the answers are spread across the letters. The teacher settles what is a judgement about their own teaching, and no rule reaches a prompt without them.',
          'The claim this design makes about agent systems is how much it declines to decide. A model is asked to judge only where the question cannot be computed, which in this loop means whether two of a teacher\'s rules contradict each other; the rest of what it does is writing. Structure buys that control and brings failure modes of its own, such as a component that reads a frequency as an endorsement, and those are designed for rather than discovered later.',
        ],
        zh: [
          'PaperCraft 是一个范围很窄的 agent 系统。语言模型被放进一套 harness 里跑，调用顺序是固定的，输出必须是机器能校验的结构，两次调用之间由普通代码把关；出了问题，它不能重新生成一次碰运气，得照着已经点明的那一处去修。它负责写题，也从教师的改动里归纳规则，再把每条建议交给一道独立的审计去证伪。',
          '做决定的有三方，界线划在哪里，就是这套设计本身。模型只管写和归纳；凡是能判定的事都交给普通代码，比如一个部分有三个选项还是四个、词在不在该级别的词表内、答案在各字母之间是否分散。剩下的属于教学判断，交给教师；规则想进 prompt，必须先过他们这一关。',
          '这套设计对 agent 系统的主张是：它拒绝自己决定的事情足够多。只有算不出来的问题才交给模型判断，在这个回路里只有一件，就是两条规则是否互相矛盾；其余的它只管写。结构换来了这种控制，也带来了结构自己的毛病，比如某个组件会把「频率」当成「认可」。这些在设计时就考虑过了。',
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
        zh: '任何内容进入课堂前，都要有人在这里明确点一次通过或退回，退回的理由一并保留，教师的贡献因此可测。修改初稿在它上面的字段里进行，入口是初稿抬头右侧的 Edit。',
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
            zh: '让每次生成都能复现、能查。没记成结构化输入的东西，事后没法分析。',
          },
        },
        {
          id: 'S2',
          title: { en: 'Personalised prompt assembly', zh: '个性化 prompt 装配' },
          what: {
            en: "Retrieves this teacher's own material: the rules they approved, what usually needs fixing on this part, their earlier corrections, their usual topics and grammar, the reasons they rejected earlier drafts, and example exercises.",
            zh: '取回这位教师自己的材料：他接受的规则、这个题型上通常要改什么、他早先的改动、他常用的话题与语法、他退回初稿的理由，以及范例题。',
          },
          why: {
            en: 'Personalises in context, without fine-tuning, and orders the block so a provider can reuse it: everything invariant for this teacher and part precedes the task line, the only line that changes between drafts. The second of two requests sharing it returns 4,096 cached tokens of 4,336, where the earlier order returned none.',
            zh: '不做微调，个性化全靠上下文里带的材料，排列顺序也照复用来定：对他和这个题型不变的部分放在最前，任务行压在末尾，那是两次生成之间唯一会变的一行。两次共享这一段的请求，第二次命中 4,336 个 token 里的 4,096，旧排法一个都没命中。',
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
            zh: '非专家写的 prompt 往往太笼统，这份规格化的活该由系统承担，不该留给教师自己敲字。它能管住的只有内容效度，构念效度管不着。',
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
            en: 'Converts silent format defects into recoverable, logged events, so a malformed item is recorded instead of disappearing. The retry carries the validation error back with it, so the model repairs a named failure rather than being asked to try again and hope.',
            zh: '格式错误会留下一条可恢复、可查的记录，不再凭空消失。重试时把校验报错一并送回去，模型修的是一个被点明的失败，不是再赌一次。',
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
            en: 'KET picture-story and picture-matching items need text and image to agree. Writing the prompt from the generated image, and not the other way round, is what keeps them aligned.',
            zh: '看图写作和图片匹配题要求文字与图像一致。先出图、再据图命题，两者才不会对不上。',
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
            en: 'CEFR control of generated text is unreliable, so the audit is a visible guardrail rather than a silent block; the 10% tolerance covers proper nouns and productive morphology. It judges lexical membership only.',
            zh: '生成文本的 CEFR 等级控制本就不可靠，所以这道审计与其悄悄拦下，不如做成看得见的护栏；10% 的容差留给专有名词和能产构词。它只能判断词在不在表内。',
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
          'The prompt for a part is assembled rather than written by hand. Eight sections go into it, and six of them appear in every one of the fifteen item types. The section that decides item quality is the validity rules, the conditions an item must not fail. Every clause in it came from an item an examiner marked wrong, and the handbooks were then read line by line to establish which of those rules they actually state, because a handbook describes the task and not the ways an item fails.',
          'Two decisions shape the teacher\'s half of that assembly. Approved rules go in grouped by the stage of writing they govern, because the same rules as one flat list perform measurably worse; and the line about what usually needs fixing is a count computed by code rather than a model\'s estimate, because a model accepts a stated number almost without question.',
        ],
        zh: [
          '每道题的提示词都是拼出来的，没有一份手写。一份提示词分八段，其中六段十五种题型通用。真正决定题目质量的是「有效性规则」，它规定一道题不许违反什么。这些规则条条有来历，都来自判错的题，定完再逐条翻手册，看剑桥究竟写明了哪几条。手册只交代这个部分考什么，不管一道题会栽在哪里。',
          '属于教师的那一半有两个讲究。已通过的规则按它管的是写作哪一步分组放进提示词，同样一批规则平铺着给，效果会明显变差；「通常要改什么」那一行由代码数出来，不让模型估，因为摆在面前的数字，模型几乎照单全收。',
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
        zh: '这些计数由脚本从实际提示词里数出来，没有人手填。同一个脚本曾经报出三个 PET 题型完全没有有效性规则，其实有，只是标题写法它不认识。现在它按标题的形状来认，不再靠某个人碰巧见过的那几个写法。',
      },
    },
    {
      kind: 'exhibit',
      intro: {
        en: [
          'Two fragments, quoted from the source rather than described. The first is the distractor rule from the A2 Reading and Writing Part 1 prompt; the second keeps the three pictures of a picture story showing the same two children.',
        ],
        zh: [
          '下面两段直接从源码里引出，不做转述。第一段是 A2 Reading and Writing Part 1 提示词里的干扰项规则；第二段让三格看图故事始终画着同两个孩子。',
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
        en: 'Both are quoted as they stand. The second is what the picture branch looks like in practice: three images are three separate calls, so the two children have to be held fixed by hand, and the drawing model has to be told not to label the shop it was asked to draw.',
        zh: '两段都照原样引出。第二段是图形题那一支的实际样子：三张图是三次独立调用，两个孩子只能靠提示词固定住；同时还要明说，不许给它画的那间商店写上店名。',
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
        zh: '每次生成都留一份记录，教师随手就能打开：应用了他已接受的一条规则，写作耗时 2.5 秒，两道确定性检查都通过。这条管线要能被查，不能只靠相信，所以记录就摆在初稿上，不用去翻日志。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The other half of the system', zh: '系统的另一半' },
      body: {
        en: [
          'Generation is half of what this does. The other half reads the correction log instead of writing exercises, and runs offline on a schedule or when the teacher asks. A pattern has to recur in at least three distinct exercises before it becomes a candidate rule, counted by generations and not by events, because four option edits inside one exercise are one decision. The distiller also gets the handbook specification for that part, without which the most it can infer is that some text changed.',
          'A candidate rule does not reach the teacher on its own reasoning. It goes to an audit running inside distillation on a different vendor\'s model at temperature zero, told to refute the rule rather than improve it, and required to name a ground when it refuses. It can refuse or pass, never write, edit or apply. Silence is refusal, and an unreachable or truncated audit proposes nothing. Rules stay with the teacher who accepted them and are not pooled across users.',
          'Three substitutions written for a test, in which nine became ten, red became blue and a park became a beach, led the distiller to a rule that factual details should be accurate. The evidence held nothing but those substitutions, with no source material and nothing saying an original value was wrong. The audit refused it, because the rationale asserted a fact the evidence did not contain, and the case establishes the failure mode rather than its frequency.',
          'Run three times on a sound rule, the audit accepted it twice. What it is shown matters. Handed the changed values alone it refused rules that it accepted once the distiller\'s full bundle arrived, and three parts that had just produced three refusals then produced three accepted proposals. Refusing a sound rule costs a round of distillation; admitting an unsound one puts an invented constraint into every later prompt.',
          'Each new harness version carries the earlier ones forward verbatim. A rule the teacher retired stays retired and a proposal they have not answered stays pending, because nothing in the loop has standing to change a verdict they already gave. A defect where one refused proposal revoked every accepted rule is now a single function with a single test.',
        ],
        zh: [
          '生成只占这个系统的一半。另一半读批改日志，不写题，按日程离线运行，或者由教师手动触发。一个模式要出现在至少三次**不同的生成**里才算候选规则，数的是生成次数：同一道题里改了四处选项，也只算一个决定。蒸馏器拿到的除了改动，还有该题型的手册规格；没有规格，它最多只能推出「有文字被改过」。',
          '候选规则不能凭自己的推理走到教师面前，得先过一道审计。审计跑在**另一家厂商**的模型上，温度 0，收到的唯一指令是证伪这条规则，要拒绝就得说清理由。它只能拒绝或通过，不能写、不能改、不能应用。不出声就当拒绝；审计连不上、或者返回被截断，也等于什么都没提。规则只归接受它的那位教师，不在用户之间合并。',
          '测试用的三次替换，九变成十、红变成蓝、公园变成海滩，让蒸馏器推出一条「事实细节应当准确」的规则。证据里只有那三次替换，没有原始材料，也没有任何地方说原来的值是错的。审计拒绝了它，理由是这条规则的说明断言了证据里并不存在的事实。这一例能确立这个失败模式存在，但说明不了它有多常见。',
          '同一条站得住的规则跑三次，审计接受了两次。它看出什么很要紧：只给它改动的值时，它拒掉过一些规则；把蒸馏器手上那一整包交给它，同一条规则它就接受了，三个原本连出三次拒绝的题型给出了三条通过的建议。拒掉一条好规则只是多跑一轮蒸馏，放进一条坏规则，就是往之后每一次 prompt 里塞进一条凭空造出来的约束。',
          '每一次新的 harness 版本都逐字继承上一版。教师撤下的规则保持撤下，他没回答过的建议保持待定，因为回路里没有任何一环有资格改动他已经给出的裁决。曾经有一处缺陷，一条被拒的建议就让全部已接受的规则失效；现在这件事是一个函数、一个测试。',
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
      heading: { en: 'What is measured, and how two blind spots were closed', zh: '测什么，以及两个盲点是怎么补上的' },
      body: {
        en: [
          'Teacher intervention is measured at approval, by comparing the frozen draft with the teacher\'s version, as word-level edit distance plus typed flags for which part of the item moved. It is taken from the draft before the teacher touches it, so it describes the generator rather than the generator and the teacher\'s edits together. Item analysis from learner responses stays in the product as a view for the teacher, and is not offered as a result of the study.',
          'Authoring time and perceived workload are measured against each teacher\'s own manual workflow. The instruments are written; data collection has not started.',
          'No gate checks whether the answer is right, and one class of defect belongs to the whole set rather than to any single item, so no per-question gate can see it at all. Both reach a classroom. The expensive one is an item with two defensible answers: it reads correctly, and nothing catches it until a student argues for the option marked wrong and turns out to be right, at which point the lesson stops.',
          'Two fixes followed. A solver sees each item with its key removed, and a challenger builds a reading on which each wrong option would be correct; a declined item is excluded rather than counted as a pass. Separately, a fourth deterministic gate counts how the key is spread across a set and reports it to the teacher, behind a line in the prompt that asks for it.',
          'The first flagged two items, and one of them is a genuine defect. A notice about a Friday swim club at 4 pm is keyed to "bring your swimsuit", and "the meeting is in the afternoon" is also true. It passed all three gates, and all three were right to pass it.',
          'The second was the larger failure, and it is the part worth reporting in numbers. Across 33 generations of A2 Reading and Writing Part 4 in one day, 13 had put all six answers on option A, so a candidate who never read the passage scored full marks. Over 12 generations after the change the share on A fell only from 74 to 57 per cent, which is why this is counted rather than written into the prompt as a rule.',
          'Building that gate was work in itself. One fault took the reported defect rate from 12 per cent to 2 per cent, and a worse one was silent and correct, keeping every cloze item out of the count while the count was read as covering the bank.',
        ],
        zh: [
          '教师点下通过的那一刻，干预量就算出来了：拿冻结的初稿和教师终稿比，算词级编辑距离，再用一组标记标出改动落在哪一部分。比的是教师动手之前的那份初稿，所以它说的是生成器，不掺教师的改动。学生作答算出来的项目分析留在产品里，是给教师看的一个视图，不作为研究结果。',
          '出题耗时与主观负荷，拿每位教师自己的手工流程当基线来测。量表已经写好，数据收集尚未开始。',
          '没有哪道闸门查答案对不对；还有一类缺陷不属于某一道题，而属于整套题，逐题闸门根本看不到。这两类都会进到课堂。代价最大的是一道题有两个都说得通的答案：它读起来是对的，谁也发现不了，直到学生为那个被判错的选项争辩、而他是对的，课就停在那里。',
          '针对这两类做了两件事。求解器拿到的是去掉答案键的题目，挑战者则要为每一个错误选项构造一种它也能成立的读法；拒绝打分的题目按排除处理，不计为通过。另一件是增加第四道确定性检查，数一整套题的答案键分布并报给教师，同时在上游的 prompt 里加了一句相应的要求。',
          '前一件事标出了两道题，其中一道是真缺陷。一条通知写着周五下午四点有游泳俱乐部活动、要带泳衣，答案键取「要带泳衣」，可「活动在下午」同样成立。它通过了三道闸门，三道闸门都没有判错。',
          '后一件事才是更大的那处失败，也是值得用数字讲的一处。同一天生成的 33 份 A2 Reading and Writing Part 4 里，13 份把六个答案全放在 A 上，一路不读文章只选 A 的考生能拿满分。加上那条要求之后的 12 份生成里，A 的占比只从 74% 降到 57%，所以这件事要靠数，写进 prompt 当规则没有用。',
          '做这道检查本身就费了功夫。有一处把缺陷率从 12% 压到 2%；更麻烦的一处不出声而且本身是对的，整类完形填空都没进计数，而那个数字看起来覆盖了全库。',
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
        zh: '依据作答算出的项目分析，有难度、区分度、各选项被选次数，以及全班从不选的干扰项。上方横幅把教师当初要的难度和题目实际表现出的难度并列。作答数据是作者自己录入的演示数据，没有学生参与。',
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
          label: { en: 'Authoring and practice, 15 item types, exports', zh: '出题与练习、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used for classroom materials, with Word, PDF and slide export. Of the 215 traced generations, 211 passed the specification gate first time and four after a repair. Share codes, learner submission and per-question capture are live.',
            zh: '已上线并用于产出课堂材料，支持导出 Word、PDF 与幻灯片。215 次留有记录的生成中，211 次第一次就通过规格闸门、4 次修复后通过。分享码、学生提交、逐题数据采集均已上线。',
          },
        },
        {
          label: { en: 'Answer-correctness check', zh: '答案正确性检查' },
          state: 'instrumented',
          detail: {
            en: 'A solver and a challenger judge each saved item with its key removed, so a contested key and a second defensible answer both surface. Two items were flagged and one is a genuine defect; the rate over the bank is an existence proof, not a measurement, because no item has been compared with teacher judgement.',
            zh: '把答案键拿掉，交给求解器和挑战者各判一次，有争议的键和第二个说得通的答案都会浮出来。命中两处，其中一处是真缺陷。全库的比率只能算存在性证明，还不是质量测量，因为没有任何题目跟教师的判断对过。',
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
            en: 'Difficulty, discrimination and distractor analysis are implemented end to end and shown to the teacher. The responses so far are the author\'s own demonstration data; no student has taken part.',
            zh: '难度、区分度与干扰项分析已端到端完成，并展示给教师。目前的作答是作者自己录入的演示数据，没有学生参与。',
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
          '词汇审计查的只是词在不在表里，句法、文化负载、认知需求都不归它管，所以一段文本可以完全合规却依然太难。这道护栏比看上去窄。',
          '按考试部分编码命题规则，换来的只是内容效度；要证明这些题目真的测到了剑桥想测的东西，得有一个大得多的作答池。干预度量能测准改动的**幅度**，测不准**分量**：答案键上改一个词，整道题就变了；语篇里重写一整句，却可能什么要紧的都没动。',
        ],
      },
    },
  ],
};
