import type { Project } from '../types';

/**
 * PaperCraft. The spine of the portfolio.
 *
 * Evidence discipline: the project finished in October 2026 with a final
 * report (submitted 24 October) and an IEEE-format manuscript drawn from it.
 * The teacher pilot ran with two teachers in three sessions, so its findings
 * are reported descriptively and without questionnaire scores. The rule-effect
 * results come from 40 paired offline generations per part, scored by model
 * judges and, for the two countable rules, by a part-of-speech tagger; the
 * closed-loop results come from simulated teachers. Each says so. The
 * "evidence" section states the status of each research component explicitly.
 */
export const papercraft: Project = {
  slug: 'papercraft',
  index: '01',
  title: 'PaperCraft',
  subtitle: {
    en: 'A teacher-in-the-loop LLM agent for Cambridge exam-item authoring',
    zh: '面向剑桥 KET/PET 考试的人工在环 LLM 辅助出题 Agent',
  },
  blurb: {
    en: "A teacher-in-the-loop authoring tool for Cambridge KET/PET exercises that keeps the teacher's corrections and turns the recurring ones into rules the teacher approves.",
    zh: '面向剑桥 KET / PET 的智能出题工具。系统会记录教师对初稿的每一处修改，将反复出现的修改提炼成规则，经教师确认后用于后续出题。',
  },
  period: { en: 'May to October 2026', zh: '2026 年 5 月至 10 月' },
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
    src: '/work/papercraft/system-loop.webp',
    w: 1913,
    h: 822,
    thumb: { src: '/work/papercraft/workspace-bank.webp', w: 2400, h: 1500 },
    alt: {
      en: 'The PaperCraft loop as one diagram: while the teacher waits, the model generates and code checks the draft before the teacher reads and edits it; what is kept is a frozen draft, the edits and the check verdicts; off the generation path, a second model distils and audits rules the teacher then decides on.',
      zh: 'PaperCraft 闭环全景图：在线生成时，模型写出初稿并经代码校验后再呈交教师审阅修改，系统同时保存冻结的原始初稿、修改记录与检查结论。在生成路径之外，另一组模型负责从批改记录中提炼并审计规则，最后交由教师拍板。',
    },
  },
  links: [
    { label: { en: 'Live system', zh: '在线系统' }, href: 'https://fyp.z-chen.dev/', primary: true },
    { label: { en: 'Design narrative', zh: '设计阐述' }, href: 'https://fyp.z-chen.dev/research' },
    {
      label: { en: 'Early progress report', zh: '早期进度报告' },
      href: '/fyp_progress_report/index.html',
    },
  ],
  facts: [
    {
      label: { en: 'Exam parts encoded', zh: '涵盖题型' },
      value: { en: '15 item types (KET 7 · PET 8)', zh: '15 种题型（KET 7 种 · PET 8 种）' },
    },
    {
      label: { en: 'Design', zh: '系统架构' },
      value: { en: 'A model inside a harness; 7 stages, one of them human', zh: '模型在受控框架（harness）内运行，七个环节中有一道由教师把关' },
    },
    {
      label: { en: 'Checks', zh: '质量检查' },
      value: { en: 'Seven on every draft, five of them plain code', zh: '每份初稿过七道检查，其中五道由代码直接完成' },
    },
    {
      label: { en: 'Specification check', zh: '规格检查' },
      value: { en: '360 of 373 drafts passed first time', zh: '373 份初稿中 360 份首次即通过' },
    },
    {
      label: { en: 'Teacher pilot', zh: '教师试点' },
      value: { en: 'Two teachers, three sessions, October 2026', zh: '2 位教师，3 轮测试，2026 年 10 月' },
    },
    {
      label: { en: 'Rule effect', zh: '规则效果' },
      value: {
        en: 'Two accepted rules changed drafts over 40 paired topics per part',
        zh: '在各题型 40 组配对话题上，两条已采纳规则改变了初稿输出',
      },
    },
  ],
  featured: true,
  sections: [
    {
      kind: 'lede',
      body: {
        en: [
          'I taught two small Cambridge KET classes while doing a computer science degree, and wrote a set of practice exercises most weeks. Three things were wrong, and none of them was speed: I could not control difficulty, past papers ran out, and the topics were stale.',
          'PaperCraft is the final-year project that came out of it, submitted as a final report in October 2026 and written up as a paper. It writes all fifteen Reading and Writing item types of A2 Key and B1 Preliminary, checks every draft in code against the published handbooks, records every correction the teacher makes, and turns corrections that recur into rules the teacher can accept, reword, refuse or withdraw. Two teachers piloted it, and their sessions changed the system in four places.',
          'The evaluation has two results. Over 40 paired topics per part, the two word-class rules the pilot teachers accepted changed what the generator wrote, and a part-of-speech tagger independent of every model agreed. With simulated teachers, an accepted rule ended the correcting for a standard the model can meet while it writes. A standard that only holds across a set of options, such as the key never being the longest option, did not move when written into the prompt, and needed a check in code.',
        ],
        zh: [
          '读计算机学位期间，我带过两个剑桥 KET 小班，每周大多要自己编一套练习题。当时困扰我的有三个问题，而且都跟出题快慢无关：难度拿捏不准、历年真题不够用、现成话题太陈旧。',
          'PaperCraft 正是由此诞生的毕业设计，于 2026 年 10 月提交结题报告并整理成论文。它覆盖 A2 Key 与 B1 Preliminary 读写卷的全部 15 种题型，每份初稿均由代码对照官方手册核查。系统会记录教师的每一处修改，把反复出现的改动提炼成规则，供教师采纳、改写、拒绝或随时撤回。两位教师参与了试点，试点暴露出的问题促使系统做了四处改进。',
          '评估得出了两项结果。在各题型 40 组配对话题上，试点教师采纳的两条词类规则切实改变了生成结果，独立于所有模型的词性标注器也印证了这一结论。在模拟教师测试中，只要是模型在逐空生成时能兼顾的标准，规则一经采纳，后续初稿便无需再改。但那些必须通盘比对整组选项才能判定的要求（如正确答案不能是最长选项），写进 prompt 毫无作用，必须靠代码检查把关。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What kind of system this is', zh: '这是一个怎样的系统' },
      body: {
        en: [
          'PaperCraft is an agent system built as a language model inside a harness. It is called in a defined sequence, held to a machine-checkable output shape, checked by ordinary code between the calls, and asked to repair a named failure when one is found. It writes exercises, induces rules from what the teacher changed, and hands each proposal to something built to refute it.',
          'Three parties decide, and the line between them is the design. The model writes and induces. Ordinary code settles what is decidable: whether a part has three options or four, whether the words are on the level\'s list, whether the answers are spread across the letters. The teacher settles anything that is a judgement about their own teaching, and no rule reaches a prompt without them.',
          'What this design argues about agent systems is how much it declines to hand to a model. Five of the seven checks on a draft are ordinary code, because handing a decidable question to something that can be fluently wrong adds a failure mode and nothing else. The models write, read, induce rules and try to refute them. When the pilot exposed gaps with two possible answers, the fix kept that division: a reader model judges each candidate gap, and code decides which gaps stay.',
        ],
        zh: [
          'PaperCraft 是一个运行在受控框架（harness）内的 agent 系统。模型按固定顺序调用，输出必须符合机器可校验的结构，两次调用之间由普通代码把关。一旦出错，模型只需针对指出的具体问题定向修复。它负责出题，也会从教师的修改记录中归纳规则，并将每条候选规则交给专门的审计模块去尝试推翻。',
          '系统的核心设计，在于划清模型、代码与教师三方的决策边界。模型负责写题和归纳规律。凡是有明确判定标准的事，一律交给普通代码，比如某部分该有三个还是四个选项、用词是否在对应级别词表内、答案在各字母上的分布是否均匀。涉及教学判断的事则全部交还给教师，未经教师同意，任何规则都不会写进 prompt。',
          '这套设计对 agent 系统的核心主张恰恰在于克制，尽量少让模型做决定。初稿的七道检查中有五道由普通代码完成，因为把本可明确判定的问题交给一个会一本正经说错话的模型，只会凭空多出一种出错方式。模型只负责写题、读题、归纳规则和反驳规则。试点暴露出完形填空「一空多解」的问题后，修复方案依然延续了这一分工：由阅读模型逐个评估候选空格，再由代码决定最终保留哪几个空。',
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
        zh: '生成初稿底部的操作区：展示最后两道题及标出的正确答案、填写问题原因的备注框、显示文本符合 A2 词表比例的进度条，以及通过、退回、重新生成三个按钮。',
      },
      caption: {
        en: 'Nothing reaches a classroom without an approve or reject recorded here, and the reason for a rejection is kept, which is what makes the teacher\'s contribution measurable. Editing the draft happens in the fields above, through the Edit control at the head of the panel.',
        zh: '任何题目进入课堂前，都必须在此留下通过或退回的记录，退回原因也会一并保存，教师投入了多少精力便由此量化。如需修改初稿内容，可通过面板右上角的 Edit 按钮在上方字段中直接编辑。',
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
          '出题流程是一条分阶段、带严格类型约束的链条，末端设有教师把关环节。点开下方任一阶段，即可查看其具体功能与设计考量。',
        ],
      },
      stages: [
        {
          id: 'S1',
          title: { en: 'Task specification', zh: '任务规格定义' },
          what: {
            en: 'A validated request object: exam, part, topic, grammar focus, target difficulty.',
            zh: '经校验的请求对象，包含考试级别、题型部分、话题、语法重点与目标难度。',
          },
          why: {
            en: 'Makes every generation reproducible and loggable. Later analysis can only reach what was recorded as structured input.',
            zh: '确保每次生成都可复现、可追查。后续分析能调取的，只有当时作为结构化输入记录下来的内容。',
          },
        },
        {
          id: 'S2',
          title: { en: 'Personalised prompt assembly', zh: '个性化 prompt 组装' },
          what: {
            en: "Retrieves this teacher's own material: the rules they approved, what usually needs fixing on this part, their earlier corrections, their usual topics and grammar, the reasons they rejected earlier drafts, and example exercises.",
            zh: '调取当前教师的专属材料：已采纳的规则、该题型常见的修改项、过往批改记录、常用话题与语法点、退回初稿的理由，以及参考样题。',
          },
          why: {
            en: 'Personalises in context, without fine-tuning, and orders the block so a provider can reuse it: everything invariant for this teacher and part precedes the task line, the only line that changes between drafts. The second of two requests sharing it returns 4,096 cached tokens of 4,336, where the earlier order returned none.',
            zh: '不做微调，仅靠上下文材料实现个性化，且段落顺序专门配合缓存复用：将该教师和题型下固定不变的部分放在最前，每次都会变动的具体任务行放在末尾。共用这段前缀的连续两次请求中，第二次在 4,336 个 token 里命中了 4,096 个缓存 token，而按原先的顺序排列时命中为零。',
          },
        },
        {
          id: 'S3',
          title: { en: 'Construct-specialised instruction', zh: '分题型命题指令' },
          what: {
            en: 'One instruction set per Cambridge part, encoding published item-writing rules: paraphrase rather than lift distinctive vocabulary, build distractors by twisting text content, keep option sets to one word class.',
            zh: '为每个剑桥题型配备专属指令集，将已公开的命题规则编码入内：特征词汇须作同义改写而非直接照搬，干扰项须基于原文信息改造，同一题的各选项必须限定在同一词类。',
          },
          why: {
            en: 'Non-experts under-specify prompts, so the system carries the specification and the teacher does not have to write it.',
            zh: '非测评专家手写的 prompt 往往过于笼统，因此这部分命题规格由系统内置，教师无需自行编写。',
          },
        },
        {
          id: 'S4',
          title: { en: 'Generation with typed repair', zh: '带类型修复的生成' },
          what: {
            en: 'Schema check, validator error re-injected into the prompt, bounded retries with model routing across providers.',
            zh: '先做数据结构校验，若报错则将校验错误重新注入 prompt 触发重试，设定重试上限，并支持在多家服务商的模型间自动路由。',
          },
          why: {
            en: 'Converts silent format defects into recoverable, logged events, so a malformed item leaves a record. The retry carries the validation error back with it, so the model repairs a named failure.',
            zh: '将原本静默发生的格式缺陷转化为可恢复、有日志可查的事件，让结构不合规的题目留下记录。重试时会把具体的校验报错一并送回，让模型针对已点明的错误定向修复。',
          },
        },
        {
          id: 'S5',
          title: { en: 'Multimodal branch', zh: '多模态分支' },
          what: {
            en: 'Scene decomposition, image synthesis, then a vision model authors the writing task from the images it was given.',
            zh: '先拆解场景并合成配图，再交由视觉模型依据实际生成的图像编写对应的作文题。',
          },
          why: {
            en: 'KET picture-story and picture-matching items need text and image to agree. Writing the prompt from the generated image is what keeps them aligned.',
            zh: 'KET 的看图写故事和图片匹配题要求图文严丝合缝。先出图、再照着生成好的图出题，图文才对得上。',
          },
        },
        {
          id: 'S6',
          title: { en: 'CEFR lexical audit', zh: 'CEFR 词汇审计' },
          what: {
            en: 'Content words checked against the level wordlist; up to 10% out-of-list is tolerated and the compliance figure is shown to the teacher.',
            zh: '将实义词逐一比对对应级别的官方词表，超纲词比例在 10% 以内视为可接受，并将具体的词汇合规率展示给教师。',
          },
          why: {
            en: 'CEFR control of generated text is unreliable, so the audit shows the teacher the figure and leaves the decision with them; the 10% tolerance covers proper nouns and topic vocabulary.',
            zh: '靠模型自己控制生成文本的 CEFR 词汇等级并不可靠，因此这道审计直接把合规率亮给教师，由教师拿主意；预留 10% 的容差是为了容纳专有名词与特定话题词汇。',
          },
        },
        {
          id: 'S7',
          title: { en: 'Teacher adjudication', zh: '教师裁决' },
          what: {
            en: 'Approve, edit or reject with a reason. The pristine model draft is frozen at this moment.',
            zh: '直接通过、修改后通过，或注明理由后退回。模型的原始初稿会在这一刻冻结存档。',
          },
          why: {
            en: 'The measurement baseline for the whole project, and the only stage a teacher has to be present for.',
            zh: '这是整个项目的度量基线，也是全流程中唯一需要教师亲自在场的环节。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'How a prompt is built', zh: 'prompt 如何组装' },
      body: {
        en: [
          'Each part\'s prompt is assembled by code. Eight sections go into it, and six appear in every one of the fifteen item types. Item quality is decided by the validity rules, the conditions an item must not fail. Each was checked line by line against both handbooks to establish which ones they state, and almost none are there, because a handbook describes the task and not the ways an item fails.',
          'Two decisions shape the teacher\'s half of that assembly. Approved rules go in grouped by the stage they govern, before writing, during it, or as a check afterwards, because a rule about the whole exercise cannot be satisfied by fixing one question later. The line about what usually needs fixing is a count computed by code, because a model accepts a stated number almost without question.',
        ],
        zh: [
          '每种题型的 prompt 均由代码动态拼接而成，没有一份是纯手写的。一份完整的 prompt 包含八个段落，其中六段在全部 15 种题型中通用。决定题目质量的是「有效性规则」，规定了一道题绝不能犯哪些错误。我曾把这些规则与两本官方手册逐行比对，看手册明文写出了哪几条，结果几乎一条都没有：手册只介绍题型考什么，不会交代一道题会在哪里出毛病。',
          '与教师相关的那一半组装逻辑有两处关键取舍。已采纳的规则按其约束的阶段分组写入 prompt，分为动笔前、写作中和写完后核对三类，因为涉及整套题全局分布的规则，没法靠事后单改某一道题来满足。「通常需要修改什么」那一行则直接填入代码统计出的真实频次，不让模型自己估算，因为模型对明确给出的数字几乎照单全收。',
        ],
      },
    },
    {
      kind: 'table',
      heading: { en: 'The eight sections of a generation prompt', zh: '生成 prompt 的八个组成部分' },
      head: [
        { en: 'Section', zh: '段落' },
        { en: 'What it fixes', zh: '规定内容' },
        { en: 'Parts using it', zh: '启用题型数' },
      ],
      rows: [
        [
          { en: 'Output contract', zh: '输出约定' },
          { en: 'Raw JSON only, no fences, no commentary', zh: '仅输出原始 JSON，严禁包含代码块标记与额外解释' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Role', zh: '角色设定' },
          { en: 'The exact Cambridge part being written', zh: '当前正在生成的剑桥考试具体部分' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Task focus', zh: '考查重点' },
          { en: 'What the part tests, in the handbook\'s own words', zh: '引用官方手册原话，说明该部分考查的能力' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Text specification', zh: '语篇规格' },
          { en: 'Length, register and structure of the passage', zh: '阅读短文的篇幅、语域与结构要求' },
          { en: '11 of 15', zh: '11 / 15' },
        ],
        [
          { en: 'Validity rules', zh: '有效性规则' },
          { en: 'How an item must not fail', zh: '一道合格题目不得违反的命题条件' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Count assertion', zh: '题量断言' },
          { en: 'The exact number of items, stated twice', zh: '题目的确切数量，写两遍' },
          { en: '9 of 15', zh: '9 / 15' },
        ],
        [
          { en: 'JSON schema', zh: 'JSON 结构' },
          { en: 'The shape the answer must take', zh: '输出结果必须遵循的数据结构' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
        [
          { en: 'Self-check', zh: '输出前自检' },
          { en: 'What the model must verify before it answers', zh: '模型在返回答案前必须自行核对的事项' },
          { en: '15 of 15', zh: '15 / 15' },
        ],
      ],
      caption: {
        en: 'A script counts these from the live prompts when the report is built. That script once reported three PET parts had no validity rules at all; they had them, under headings it did not recognise. It now matches the shape of a heading, so a heading written a new way is still found.',
        zh: '表中数字由脚本在构建报告时直接扫描线上 prompt 自动统计，而非人工填写。该脚本曾一度报告有三个 PET 题型完全没有有效性规则，其实规则都在，只是小标题换了写法导致脚本没认出来。如今脚本改为按标题格式特征匹配，换种写法也照样找得到。',
      },
    },
    {
      kind: 'exhibit',
      intro: {
        en: [
          'Two fragments, quoted from the source. The first is the distractor rule from the A2 Reading and Writing Part 1 prompt; the second keeps the three pictures of a picture story showing the same two children.',
        ],
        zh: [
          '以下两段直接引自系统源码。第一段是 A2 Reading and Writing Part 1 prompt 中的干扰项编写规则；第二段则用于在三格看图写故事中保持两名儿童的外观一致。',
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
        zh: '从第二段源码能看出图像分支在实际工程中的做法：三张配图由三次独立调用分别生成，要让两个孩子在三张图里长相一致，全靠在 prompt 中固定外貌细节；甚至还得专门叮嘱绘图模型一句，别在画出来的商店招牌上写店名。',
      },
    },
    {
      kind: 'table',
      heading: { en: 'What each check decides, and what it cannot see', zh: '七道检查各自的判定范围与盲区' },
      head: [
        { en: 'Check', zh: '检查项' },
        { en: 'What it decides', zh: '判定内容' },
        { en: 'On failure', zh: '未通过时的处理' },
        { en: 'What it cannot see', zh: '检查盲区' },
      ],
      rows: [
        [
          { en: 'JSON schema', zh: '结构校验' },
          { en: 'Whether the answer has the required shape', zh: '输出结果是否符合指定的数据结构' },
          { en: 'Retry, up to three times', zh: '最多自动重试三次' },
          { en: 'Whether the exercise is the exam task', zh: '题目内容是否符合手册规定的考试任务' },
        ],
        [
          { en: 'Handbook specification', zh: '手册规格核查' },
          { en: 'Whether it is the published task', zh: '是否符合官方手册公开的题型规格' },
          { en: 'Retry, then reported', zh: '先触发重试，仍失败则如实报告' },
          { en: 'Whether the answer is right', zh: '设定的参考答案是否正确' },
        ],
        [
          { en: 'CEFR vocabulary', zh: 'CEFR 词汇审计' },
          { en: 'Whether at least 90% of the words are on the level\'s list', zh: '实义词是否至少有 90% 在该等级词表内' },
          { en: 'Warn the teacher', zh: '向教师发出告警' },
          { en: 'Syntactic complexity', zh: '句法复杂度' },
        ],
        [
          { en: 'Vision inspection', zh: '视觉质量检查' },
          { en: 'Whether a picture is exam material', zh: '生成的配图是否可用作考试材料' },
          { en: 'Redraw, fall back, or warn', zh: '重绘、降级或告警' },
          { en: 'Anything about the text', zh: '任何与文字内容相关的问题' },
        ],
        [
          { en: 'Answer key spread', zh: '答案字母分布' },
          { en: 'Whether the key varies across the set', zh: '整套题的正确答案是否均匀分布在不同选项上' },
          { en: 'Letters rebalanced, then warn', zh: '先由代码重排选项字母，再告警' },
          { en: 'Whether any single answer is right', zh: '任何单道题本身的答案是否正确' },
        ],
        [
          { en: 'Answer against passage', zh: '答案与原文核对' },
          { en: 'Whether each gap\'s key is the word in the completed passage', zh: '每个空格的答案是否与完整原文里的词一致' },
          { en: 'Retry naming the gap, then warn', zh: '指明具体题号重试，仍失败则告警' },
          { en: 'Whether that word is the only defensible answer', zh: '该词是否为唯一说得通的答案' },
        ],
        [
          { en: 'Answer uniqueness (cloze)', zh: '答案唯一性（完形）' },
          { en: 'Whether a reader without the key reaches the key and only the key', zh: '不看答案的阅读模型能否填出且仅填出标准答案' },
          { en: 'One rewrite, then shown to the teacher', zh: '自动改写一次，仍存疑则交给教师' },
          { en: 'Whether its reading is a teacher\'s', zh: '它的读法是否与教师一致' },
        ],
      ],
      caption: {
        en: 'Transcribed from the checks as they run. Five are plain code; vision inspection and the cloze reader ask a model, and the reader was added after the pilot. The last column is what each check leaves to the teacher.',
        zh: '按实际运行的检查整理。五道是普通代码，视觉检查和完形阅读要调用模型，完形阅读是试点之后加的。最后一列是每道检查留给教师判断的部分。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/generation-trace.webp',
      w: 1796,
      h: 358,
      alt: {
        en: 'The generation record for one exercise, opened from a draft: which accepted rules were applied, how many seconds the writing took, and two checks with their verdicts.',
        zh: '一份初稿上可打开的生成记录：应用了哪几条已采纳的规则、写作耗时多少秒，以及两道检查各自的结论。',
      },
      caption: {
        en: 'Every generation leaves a record the teacher can open: one accepted rule was applied, the writing took 2.5 seconds, and both deterministic checks passed. The pipeline is built to be audited, which is why the record sits on the draft and not only in a log.',
        zh: '每次生成都会留一份记录，教师可以直接打开：这次用了一条已采纳的规则，写作花了 2.5 秒，两道确定性检查都过了。这条管线本来就是要让人检查的，所以记录就放在初稿上，不用去翻日志。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The other half of the system', zh: '系统的另一半' },
      body: {
        en: [
          'Generation is half of what this does. The other half reads the correction log, and runs offline every night or when the teacher presses Check for new rules now. A pattern has to recur in at least three distinct exercises before it becomes a candidate rule, counted by generations and not by events, because four option edits inside one exercise are one decision. The distiller also gets the handbook specification for that part; without it, the most it can infer is that some text changed.',
          'Rejected drafts count too. Written reasons on three rejected drafts form a pattern of their own, because a teacher who explains a rejection has corrected the draft as surely as one who edits it. The pilot is where that gap showed up.',
          'Every candidate rule passes an audit before it reaches the teacher. The audit runs on a different vendor\'s model, told to refute the rule and to name a ground when it refuses: equivalent substitutions, an edit that introduced an error, a fact the evidence lacks, a restated specification, a duplicate, a matter of taste. It can refuse or pass, never write, edit or apply, and an unreachable or truncated audit proposes nothing.',
          'Each proposal goes to three independent calls decided by majority, because at temperature zero two runs over the same eleven proposals disagreed on two. Rules stay with the teacher who accepted them and are not pooled across users.',
          'Three substitutions written for a test, in which nine became ten, red became blue and a park became a beach, led the distiller to a rule that factual details should be accurate. The evidence held nothing but those substitutions, with no source material and nothing saying an original value was wrong. The audit refused it, because the rationale asserted a fact the evidence did not contain. Treating frequency as endorsement is a known failure, and this is an instance.',
          'Both cases were run again on the final system, five times each. On the three substitutions the distiller proposed nothing four times, and the fifth proposal was refused by all three votes. The sound word-class rule passed in three runs and was refused in two, both times on a ground the evidence did not support. Refusing a sound rule costs a round of distillation; admitting an unsound one puts an invented constraint into every later prompt, so the audit is tuned to err the first way.',
          'A teacher can retire an accepted rule, which removes it from every later prompt. Each new rule version carries the earlier ones forward, so a retired rule stays retired and an unanswered proposal stays pending; nothing in the loop has standing to change a verdict the teacher already gave. One defect let a single refused proposal silently withdraw every accepted rule while seven browser tests passed, each asserting only on its own action. Its replacement builds a version from the one before and checks what survives.',
        ],
        zh: [
          '生成只是这个系统的一半。另一半读批改日志，离线运行，每晚自动跑一次，教师也可以在页面上手动启动。一个模式至少要在三次不同的生成里反复出现，才能成为候选规则。按生成次数算，是因为同一道题里改了四处选项，也只是一个决定。蒸馏器除了拿到改动，还会拿到这个题型的手册规格；没有规格，它最多只能看出文字被改过。',
          '退回的初稿也算数。三份退回初稿上写的理由，本身就能构成一个模式：教师写明为什么退回，和动手修改一样是在纠正初稿。这个漏洞是试点时发现的。',
          '每条候选规则都要先过一道审计，才会送到教师面前。审计用的是另一家厂商的模型，任务就是推翻这条规则。拒绝时必须写明依据，比如只是等价替换、改动本身带进了错误、证据里没有这回事、和手册规格重复、和已有规则重复，或者只是个人口味。审计只能拒绝或放行，不能写规则、改规则或者启用规则；连不上或者返回被截断时，什么建议也不提。',
          '每条建议都交给三次独立调用投票，少数服从多数。要投三次，是因为温度设为 0 时，同一批十一条建议跑两遍，有两条的结论正好相反。规则只属于采纳它的那位教师，不会在用户之间汇总。',
          '我为测试写了三处替换：九改成十，红改成蓝，公园改成海滩。蒸馏器据此推出一条「事实细节应当准确」的规则。可证据里只有这三处替换，没有原始材料，也没有哪里说原来的值是错的。审计拒绝了这条规则，理由是它的说明里断言了证据中根本没有的事实。文献早就提醒过，出现得多不等于被认可，这里就是一个实例。',
          '结题前，我在最终版本上把这两组材料各重跑了五次。三处替换那一组，蒸馏器有四次什么规则都没提，第五次提的规则被三票全部否决。站得住的那条规则要求同一空的选项词类一致，五次里通过三次，另外两次被拒，拒绝的理由证据都不支持。错拒一条好规则，代价是多做一轮蒸馏；错收一条坏规则，以后每次出题都会带上一条凭空编出来的约束。所以审计有意偏向前一种错误。',
          '已采纳的规则，教师随时可以撤下，撤下后它就不会再进入任何 prompt。每一版规则集都继承上一版，撤下的规则一直是撤下的，没答复的建议一直是待定的，回路里没有哪一环能改动教师已经做过的决定。有个缺陷就是这样查出来的：一条被拒的建议会悄悄撤掉所有已采纳的规则，可当时七个浏览器测试全都通过了，因为每个测试只检查自己那一步。换上的新测试会在上一版的基础上构建新版本，再检查哪些规则留了下来。',
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
          '两半合在一起是一个回路。做初稿时流程从左往右走，教师的改动沿着下面那条带子流回去，已采纳的规则在 prompt 装配那里重新接进来。',
        ],
      },
      alt: {
        en: 'Two bands. Online, per request: task specification, prompt assembly, generation, deterministic checks, then the teacher\'s decision. Offline, written right to left: the edit log feeds distillation, then the audit, then the teacher\'s decision, which returns as accepted rules to prompt assembly.',
        zh: '上下两条带。在线部分按请求推进，依次是任务规格化、prompt 装配、生成、确定性检查，再到教师裁决。离线部分自右向左，从批改日志进入蒸馏，再到审计与教师决定，最后以已采纳的规则回到 prompt 装配。',
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
        rules: { en: 'accepted rules', zh: '已采纳的规则' },
        repair: { en: 'bounded repair', zh: '有上限的修复' },
      },
      caption: {
        en: 'Nothing in the lower band can write an exercise, and nothing in the upper band can settle a rule. The teacher appears once on each side, and that is where the two halves meet.',
        zh: '下面那条带上没有哪一环能写题，上面那条带上也没有哪一环能决定规则。教师在两边各出现一次，两半就在那里接上。',
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
        zh: '这是离线那一半给教师看的界面。教师不采纳，后面的初稿就不会有任何变化；每条建议都附着它是根据哪些证据归纳出来的。图里的数字来自演示账号。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the checks caught, and what is recorded', zh: '检查查出了什么，记录了什么' },
      body: {
        en: [
          'Teacher intervention is recorded twice. An append-only event log keeps every edit as it is made, including edits later overwritten and edits on drafts that are rejected; a frozen copy of the model\'s draft gives the net difference at approval. The log has no update or delete policy, because a record that can be rewritten afterwards is not evidence.',
          'The structural checks cover shape. None of them asks whether an answer is right, and one class of defect belongs to the whole set, so no per-question check can see it. Both reach a classroom. The expensive one is an item with two defensible answers: it reads correctly, and nothing catches it until a student argues for the option marked wrong and turns out to be right, at which point the lesson stops.',
          'A solver sees each item with its key removed, and a challenger builds a reading on which each wrong option would be correct. Over 77 items in the bank they flagged two, and one is a genuine defect. A notice about a Friday swim club at 4 pm is keyed to "bring your swimsuit", and "the meeting is in the afternoon" is also true. It passed every structural check, and every check was right to pass it.',
          'A separate audit found four approved exercises that repeat an option, two of them repeating the key, so two letters carry the correct answer. Code now refuses a repeated option, and over the 79 exercises then saved it flagged exactly those four.',
          'The larger failure was in the answer key. On 11 September, 13 of 33 drafts of A2 Reading and Writing Part 4 had put all six answers on A, so a candidate who never read the passage scored full marks. A prompt line asking for a spread still left 41 of the next 72 answers on A: a prompt instruction is a request, not a check.',
          'Code now reassigns the letters after drafting, balanced and then shuffled, because an even rotation such as ABCABC is just as guessable. Of the 20 lettered drafts generated after that went live, none had a skewed key, and the 114 answers fell 33, 34, 30 and 17 across A to D.',
          'Building the checker was work in itself. Three faults in the first runs had raised the contested-key rate from 2 to 12 per cent, and a fourth was silent and locally correct: it skipped every cloze item and printed nothing, so the count read as covering the bank. The scripts now print what they skip, and why.',
          'The checks also read the teacher\'s version. As a teacher edits, the code checks run again and report only what changed against the untouched draft, including repairs, because an edit can create a second defensible answer as easily as a model can. Nothing blocks: the checks encode a specification and a word list, so a teacher who overrides one may be right. In the pilot the comparison recorded six disagreements, two of them substantive.',
        ],
        zh: [
          '教师的干预有两处记录。一处是只能追加的事件日志，每次修改当场写入，后来又被覆盖的修改、退回初稿上的修改都算在内。另一处是模型初稿的冻结副本，教师通过初稿时，拿它算出净改动。日志没有更新或删除的权限：事后还能改的记录，算不上证据。',
          '结构检查只管形式。没有一道检查判断答案对不对；还有一类缺陷出在整套题上，一道一道地查是查不出来的。这两类问题都会带进课堂。最要命的是一道题有两个都说得通的答案：读起来没毛病，一直没人发现，直到学生为被判错的选项申辩，而且有理，课只能停下来。',
          '求解器拿去掉答案的题目来做，挑战者则给每个错误选项找一种能让它成立的读法。题库 77 道题里，它们标出了两道，其中一道确实有问题。一则通知说周五下午四点游泳俱乐部集合，记得带泳衣，答案是「要带泳衣」，可「集合在下午」也对。这道题所有结构检查都过了，而且每道检查的判断都没错。',
          '另一次排查发现，四份已经通过的练习有重复选项，其中两份重复的正好是答案，两个字母都是正确答案。现在代码会拒收重复选项，在当时存下的 79 份练习上，它标出的恰好就是这四份。',
          '更大的问题在答案分布上。9 月 11 日生成的 33 份 A2 Reading and Writing Part 4 初稿里，有 13 份六个答案全是 A，考生不读文章、一律选 A 也能拿满分。在 prompt 里加上一句要求答案分散，接下来的 72 个答案里还是有 41 个是 A。写在 prompt 里的要求只是请求，不是检查。',
          '现在初稿写完后，由代码重新分配选项字母：均衡之后再打乱，因为 ABCABC 这样的轮换一样容易猜。这项改动上线后生成的 20 份带字母选项的初稿，答案分布没有一份失衡，114 个答案落在 A、B、C、D 上分别是 33、34、30、17 个。',
          '写检查程序本身就不轻松。头几轮运行有三处错误，把有争议答案的比例从 2% 抬到了 12%。第四处错误既不报错，局部结果也没算错：它跳过了所有完形填空，却一声不吭，那个计数看上去像是覆盖了整个题库。现在脚本会打印出跳过了什么、为什么跳过。',
          '这些检查也会复核教师的版本。教师修改时，代码检查重新跑一遍，只报告和原始初稿相比有变化的地方，修好的问题也会报，因为教师的改动一样可能弄出第二个说得通的答案。检查不拦任何操作：它们依据的只是规格和词表，教师否掉其中一项，说不定恰恰是对的。试点中这套比对记下了六处分歧，其中两处是实质性的。',
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
        zh: '某份练习的班级分析视图，包含整体与逐题的数字、一条将请求难度与观测难度并列的横幅，以及每道题的区分度与各选项被选次数。',
      },
      caption: {
        en: 'Item analysis computed from responses: difficulty, discrimination, how often each option was chosen, and the distractors the class never picks. The banner compares the difficulty the teacher asked for with what the items turned out to be. The responses are the author\'s own demonstration data; no student has taken part.',
        zh: '根据作答算出的项目分析：难度、区分度、每个选项被选了几次，以及全班从来不选的干扰项。上方横幅把教师当初要的难度和题目实际的难度放在一起。作答是作者自己录的演示数据，没有学生参与。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/draft-key-spread.webp',
      w: 1600,
      h: 878,
      alt: {
        en: 'The head of a generated A2 Reading Part 4 draft: a warning that every answer is A, so a candidate who always picks A would score full marks, above the draft header confirming the item matches the exam task and the completed reference passage.',
        zh: '一份 A2 Reading Part 4 生成初稿的顶部：一条告警说明所有答案都是 A、始终选 A 的考生即可得满分；下面是确认该题符合考试任务要求的初稿抬头，以及填好空格的参考全文。',
      },
      caption: {
        en: 'The warning comes from the answer-key check, which runs before the teacher sees the draft. Since this capture, code re-letters the options first, so a key like this one no longer reaches the teacher.',
        zh: '这条告警来自答案分布检查，教师看到初稿之前它就跑完了。这张截图之后，代码会先重排选项字母，教师已经不会再看到这样的答案分布。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Two teachers, three sessions', zh: '两位教师，三轮试点' },
      body: {
        en: [
          'Two practising teachers piloted the system in October 2026, each working alone from a study form: correct four drafts, ask once for rules, then generate two more. Teacher A, ten years in the classroom, worked in B1 Reading Part 5; Teacher B, four years, in A2 Reading and Writing Part 4, and came back the next day for the A2 open cloze. Nobody was present, so the event log, the written answers and the audit\'s votes are read together, none of them treated as the truth.',
          'Most corrections were to distractors. All 13 of Teacher A\'s edits replaced one; nine of Teacher B\'s 14 did, and three moved the key to an option already present. In all three sessions the written notes named items with more than one defensible answer, which is the fault the checks above exist to find.',
          'Each teacher was offered four rules and accepted all four, and the audit had passed all eight by three votes to none. Two of the rules came from the notes rather than the edits: six of Teacher A\'s seven notes said five of the six gaps tested verbs, and the distiller turned that into a rule to spread the gaps across word classes. No teacher refused a proposal, so a person never exercised the refusal path.',
          'The one usable answer on control was negative. Teacher A wrote that they had no direct say in which observations became rules, how the rules were worded, how they were ranked when they conflicted, or where they applied. Accepting or refusing a finished rule did not feel like control to a teacher who could not shape it, and that answer sets the next piece of work.',
          'The third session went differently. In 13 minutes Teacher B generated five open-cloze drafts, rejected four with a written reason each, and edited none. Every reason named the genre: the handbook sets an email, and the part\'s prompt said the text must never be one. That line sat in a section of the prompt the handbook audit had not covered. Distillation as it then stood learned nothing from a teacher who explained instead of editing, so it now reads rejected drafts too.',
          'Whether an accepted rule changes what the generator writes was tested offline. Each topic was generated twice, with the teacher\'s accepted rules and without them, and the two prompts were checked in code to differ by the rule block alone. The test began at 16 topics per part and was extended to 40, with the analysis fixed in a hashed file before the new drafts existed. A judge from another vendor scored each draft against each rule, and a second judge rescored the pairs the first called different (table below).',
        ],
        zh: [
          '2026 年 10 月，两位一线教师参加了试点。两人各自按研究表单操作：生成并修改四份初稿，让系统归纳一次规则、逐条决定要不要采纳，再生成两份。教师 A 教了十年书，试用的是 B1 Reading Part 5；教师 B 教了四年，试用的是 A2 Reading and Writing Part 4，第二天又做了一轮 A2 开放式完形。整个过程没有人在场，事件日志、书面回答和审计投票三样对照着看，哪一样都不当作定论。',
          '修改大多集中在干扰项上。教师 A 的 13 处修改都是换干扰项；教师 B 的 14 处里，9 处是换干扰项，3 处是把答案改成已有的另一个选项。三轮试点的书面记录都提到，有些题不止一个说得通的答案，前面那些检查要找的就是这类问题。',
          '系统给两位教师各提了四条规则，两人全部采纳，这八条也都以三比零通过了审计。其中两条来自书面记录，不是来自修改：教师 A 的七条记录里有六条说，六个空有五个考的是动词，蒸馏器据此归纳出「各空应覆盖不同词类」这条规则。两位教师一条建议都没拒绝过，所以拒绝这条路实际上还没有人走过。',
          '关于掌控感，唯一能用的回答是负面的。教师 A 写道，哪些观察会变成规则、规则怎么措辞、冲突时听哪一条、在哪里生效，自己都没有直接的发言权。规则写好了摆在面前，只能选采纳或拒绝；没法参与制定规则的教师，不会觉得这是掌控。下一步的工作就由这个回答定了。',
          '第三轮完全是另一回事。教师 B 在 13 分钟里生成了五份开放式完形初稿，退回四份，每份都写了理由，一个字也没改。每条理由说的都是文体：手册规定这一部分是电子邮件，这个题型的 prompt 却写着文本绝不能是邮件。这句话所在的段落，正好不在当初对照手册核查的范围里。那时的蒸馏只从修改里学，教师光写理由不动手改，它就无从归纳；现在蒸馏也会读退回的初稿。',
          '采纳的规则是否真的改变了生成结果，另做了离线测试。每个话题生成两次，一次带上教师已采纳的规则，一次不带，两份 prompt 先由代码确认只差规则那一段。测试最初每个题型只有 16 个话题，只能看出很大的效应，后来扩展到 40 个。新初稿生成之前，分析方案已写进一份记录了哈希值的文件。评判由另一家厂商的模型逐条打分，它判为有差异的配对，再交给第二个模型复评（见下表）。',
        ],
      },
    },
    {
      kind: 'table',
      heading: { en: 'Drafts following each accepted rule, off and on', zh: '每条已采纳规则关闭与开启时的遵循情况' },
      head: [
        { en: 'Teacher', zh: '教师' },
        { en: 'Accepted rule', zh: '已采纳的规则' },
        { en: 'Off', zh: '关闭' },
        { en: 'On', zh: '开启' },
        { en: 'p, Holm', zh: 'p（Holm 校正）' },
      ],
      rows: [
        [{ en: 'A', zh: 'A' }, { en: 'Spread the gaps over word classes', zh: '各空覆盖不同词类' }, { en: '7 / 40', zh: '7 / 40' }, { en: '36 / 40', zh: '36 / 40' }, { en: '< .001', zh: '< .001' }],
        [{ en: 'B', zh: 'B' }, { en: 'Vary the word classes tested', zh: '考查的词类要有变化' }, { en: '27 / 40', zh: '27 / 40' }, { en: '39 / 40', zh: '39 / 40' }, { en: '.003', zh: '.003' }],
        [{ en: 'A', zh: 'A' }, { en: 'Every distractor ruled out', zh: '每个干扰项都可排除' }, { en: '2 / 39', zh: '2 / 39' }, { en: '16 / 39', zh: '16 / 39' }, { en: '.003', zh: '.003' }],
        [{ en: 'B', zh: 'B' }, { en: 'Re-insert each option and check', zh: '把每个选项代回原文核对' }, { en: '1 / 39', zh: '1 / 39' }, { en: '10 / 39', zh: '10 / 39' }, { en: '.059', zh: '.059' }],
        [{ en: 'A', zh: 'A' }, { en: 'Distractors plausible, same class', zh: '干扰项合理且词类一致' }, { en: '31 / 40', zh: '31 / 40' }, { en: '33 / 40', zh: '33 / 40' }, { en: '1.00', zh: '1.00' }],
        [{ en: 'A', zh: 'A' }, { en: 'No option word repeated', zh: '选项词不重复' }, { en: '30 / 38', zh: '30 / 38' }, { en: '30 / 38', zh: '30 / 38' }, { en: '1.00', zh: '1.00' }],
        [{ en: 'B', zh: 'B' }, { en: 'Every distractor objectively wrong', zh: '每个干扰项都客观错误' }, { en: '6 / 40', zh: '6 / 40' }, { en: '9 / 40', zh: '9 / 40' }, { en: '1.00', zh: '1.00' }],
        [{ en: 'B', zh: 'B' }, { en: 'Options within A2 vocabulary', zh: '选项限于 A2 词汇' }, { en: '35 / 39', zh: '35 / 39' }, { en: '38 / 39', zh: '38 / 39' }, { en: '1.00', zh: '1.00' }],
      ],
      caption: {
        en: 'Scored by the first model judge, not by the teachers; p is the exact McNemar test, Holm-adjusted over the eight rules. The two word-class rules also hold on the pairs the second judge agreed with. The third row does not: the second judge agreed on one of its sixteen changed pairs. Denominators below 40 exclude pairs a judge left unscored.',
        zh: '由第一个评判模型打分，不是教师打分；p 为精确 McNemar 检验，按八条规则做 Holm 校正。只保留第二个评判模型意见一致的配对时，两条词类规则依然成立。第三行则不然，它的十六组变化中，第二个模型只认同一组。分母小于 40，是因为剔除了评判模型未打分的配对。',
      },
    },
    {
      kind: 'prose',
      body: {
        en: [
          'Both word-class rules can also be counted without a judge. A part-of-speech tagger, independent of the generator and of both judges, read the class of each keyed word: the mean number of verbs among the six keys fell from 4.00 to 0.60 and from 3.50 to 1.32, and in Teacher A\'s part the drafts with at least one grammar-word key rose from 8 of 37 to 37 of 37. The judge agreed with the tagger on 91 and 89 per cent of draft-arms.',
          'Counting also found what the judge missed. With the four rules on together, drafts with no repeated option word fell from 30 to 13 of 40. The likely cause is the word-class rule beside it: grammar-word gaps draw from a small closed set, so in, on and at recur from gap to gap. The conflict check did not flag the pair, and the interaction showed only when the rules ran together.',
          'The recent-work summary that also reaches the prompt was separated by generating the same topics again without it. For Teacher A it moved 8 drafts on its own; for Teacher B it showed no reliable shift, and once the rule was in force it added nothing for either. The rules account for almost all of the change.',
        ],
        zh: [
          '两条词类规则也可以不靠评判模型直接计数。词性标注器独立于生成模型和两个评判模型，逐个读取答案词的词类。六个答案中动词的平均个数，从 4.00 降到 0.60，从 3.50 降到 1.32。在教师 A 的题型里，至少有一个功能词答案的初稿从 37 份中的 8 份升到 37 份。评判模型与标注器的结论在 91% 和 89% 的初稿上一致。',
          '计数还发现了评判模型没有看到的问题。四条规则同时开启时，选项词不重复的初稿从 40 份中的 30 份降到 13 份。很可能是旁边那条词类规则造成的：功能词答案只能从很小的封闭词类里取，in、on、at 就会在不同空格之间反复出现。冲突检查没有标出这一对规则，这种相互影响只在规则一起运行时才显现。',
          'prompt 里还带着一段近期修改的摘要。为了把它和规则分开，同样的话题在去掉摘要后又生成了一遍。对教师 A，摘要单独就让 8 份初稿朝同一方向变化；对教师 B，看不出可靠的变化。规则生效之后，摘要对两人都不再有额外作用。变化几乎全部来自规则。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Closing the loop without a person in it', zh: '没有真人参与时，回路能否闭合' },
      body: {
        en: [
          'Whether accepted rules reduce a teacher\'s correcting over time needs several sessions per teacher, and the pilot had one per part. The mechanism\'s half of that question was measured offline, with simulated teachers: a model from a family the product never uses, holding a standard program code can count, and correcting a draft only when the count fails.',
          'D1, on B1 Reading Part 5, required at least two of the six keys to be grammar words. D2, on A2 Reading Part 3, forbade the key from being the longest option, the cue a candidate can follow without reading.',
          'Each corrected eight drafts, asked once for rules and accepted what the audit passed, as both pilot teachers had. Every later topic was then generated four ways: rules and summary, summary only, rules only, and neither. For D1, with the rule in force, the teacher corrected none of 32 later drafts, against 30 of 31 for a teacher who had refused it, and the summary alone changed one pair. For D2 the rule reached every prompt and 29 of 32 drafts still needed correcting, against 27 of 32 without it.',
          'The difference is where the standard lives. A model writing one gap at a time can meet a constraint on each gap, and cannot see the lengths of a set of options it has not finished writing. So the D2 rule was moved out of the prompt.',
          'On 16 frozen specifications, the rule as text left the cue unchanged, 31 of 84 questions against 32. As a blocking check in code that names the failing questions and spends the retry, it cut the cue to 17 of 84 at 2.8 times the model calls. As a warning it found the same questions at 1.25 calls without reducing them.',
          'Code can verify the property and point at the question, but it cannot write the longer distractor, and the model cannot always write it even when told. The product ships the warning by default and offers blocking per part.',
        ],
        zh: [
          '已采纳的规则能否让教师的修改量随时间下降，需要每位教师在同一题型上使用多轮，而试点中每个题型只有一轮。这个问题里属于机制的那一半，改用模拟教师离线测量。模拟教师由一个产品从未使用过的模型家族扮演，各自持有一条可由代码计数的标准，只在计数不达标时才修改初稿。',
          'D1 用 B1 Reading Part 5，要求六个答案中至少两个是功能词。D2 用 A2 Reading Part 3，规定答案不能是最长的选项，因为考生不读文章也能顺着这条线索猜对。',
          '两位模拟教师各修改八份初稿，请系统归纳一次规则，并采纳审计通过的规则，做法与两位试点教师相同。此后每个话题生成四个版本：规则加摘要、只有摘要、只有规则、两者都没有。D1 在规则生效后，后续 32 份初稿一份都不必再改；拒绝规则的教师面对同样的话题，31 份里有 30 份要改，只有摘要时仅一组配对有变化。D2 的规则进入了每一份 prompt，32 份初稿仍有 29 份要改，不带规则时是 27 份。',
          '区别在于标准作用在哪一层。模型一次写一个空，能满足针对单个空格的约束；一组选项还没写完，它就看不到各个选项的长度。于是 D2 的规则被移出 prompt。',
          '在 16 份冻结的题目规格上，规则写成文字时，线索毫无变化，84 道题里 31 道，不带规则时是 32 道。改成代码里的阻断检查后，检查会指明不合格的题并消耗一次重试，线索降到 84 道里的 17 道，模型调用次数是原来的 2.8 倍。改成告警时，只需 1.25 次调用就能找出同样的题，但不会减少它们。',
          '代码能核实这个性质，也能指出是哪一道题，却写不出那个更长的干扰项；就算明确告诉模型，它也未必写得出。产品默认采用告警，阻断模式可以按题型开启。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the pilot changed', zh: '试点之后改了什么' },
      body: {
        en: [
          'Each session was also a defect report, and four changes followed. Two late pilot drafts had six questions and fewer gaps, and one was approved unedited; a check now counts gaps against questions, and on replay it refuses exactly those two. The A2 open cloze now has to be an email with six different answers, and replayed over the third session\'s drafts the check refuses all five on genre and four for a repeated answer.',
          'The fault the notes named every time, a gap that more than one word fits, needed a different kind of check, and it is the one change that puts a model between a draft and the teacher. A reader given the draft without its key answers every gap. A disagreement with the key earns one rewrite, and what remains is shown to the teacher, who can add the reader\'s word as also accepted.',
          'For open cloze, moving the choice out of the prompt did better than rewording it. The generator writes ten candidate gaps, the reader judges each, and code keeps six it could fill only one way. Scored by an independent third model, the share of gaps another word could fill fell from 0.79 to 0.67 in A2 and from 0.71 to 0.48 in B1, with 10 of 13 differing pairs better. That is a direction, not a significant result (sign test p ≈ .09), at about ten seconds per draft.',
        ],
        zh: [
          '每一轮试点同时也是一份缺陷报告，之后系统改了四处。试点后段的两份初稿有六道题，空格却不足六个，其中一份未经修改就通过了。现在有一道检查专门核对空格数与题数，用试点保存的初稿回放，它恰好拒绝了这两份。A2 开放式完形现在必须是一封电子邮件，六个答案互不相同。回放第三轮的五份初稿，五份都因文体被拒，四份因答案重复被拒。',
          '书面记录每一轮都提到的问题，是一个空格能填不止一个词。这需要另一种检查，也是唯一一处在初稿和教师之间放进模型的改动。阅读模型拿到去掉答案的初稿，逐空作答。它的答案与标准答案不一致时，初稿改写一次，仍有分歧的地方交给教师，教师可以把阅读模型填的词加为同样可接受的答案。',
          '对开放式完形，把选空移出 prompt，比改写 prompt 效果更好。现在生成器先写出十个候选空格，阅读模型逐个判断，再由代码留下六个只有一种填法的空。评分由产品中从未使用过的另一个模型完成。另一个词也能填入的空格比例，A2 从 0.79 降到 0.67，B1 从 0.71 降到 0.48，13 组有差异的配对中 10 组变好。这是方向上的改善，还不显著（符号检验 p ≈ .09），每份初稿要多花约十秒。',
        ],
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this ended', zh: '结题时的状态' },
      intro: {
        en: [
          'The project closed in October 2026 with a final report. Each component below carries how far its evidence goes: what is in use, what was tried at small scale, and what was built and is waiting for a longer study.',
        ],
        zh: [
          '项目于 2026 年 10 月结题，提交了结题报告。下面每一项都标明了证据走到哪一步：哪些已投入使用，哪些做过小规模检验，哪些已经建成、还需要更长的研究。',
        ],
      },
      items: [
        {
          label: { en: 'Authoring and practice, 15 item types, exports', zh: '出题与练习、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used for classroom materials, with Word, PDF, PowerPoint and HTML slide export and a separate answer sheet. Of 373 logged text generations, 360 passed the specification check first time and 11 after a repair. Every field is editable at the point of generation, and 48 regression scripts run the shipped code on real inputs. Each generation keeps a trace that names the first check to fail: of 612 traces with a model call, 79.7 per cent needed no repair.',
            zh: '已上线并用于产出课堂材料，可导出 Word、PDF、PowerPoint 与 HTML 幻灯片，答案单独成页。记录在案的 373 次文本生成中，360 次首次即通过规格检查，11 次经修复后通过。初稿的每个字段在生成页面上都可直接编辑，48 个回归脚本用真实输入运行线上代码。每次生成都留有一份记录，写明最先失败的是哪一道检查。在 612 份调用了模型的记录中，79.7% 无需任何修复。',
          },
        },
        {
          label: { en: 'Teacher pilot', zh: '教师试点' },
          state: 'piloted',
          detail: {
            en: 'Two practising teachers, three unmoderated sessions. Their notes named items with more than one defensible answer in every session, and their drafts exposed three faults the specification check did not examine, all now checked.',
            zh: '两位一线教师，三轮无人在场的独立使用。每一轮的书面记录都指出了一题多解，初稿还暴露出规格检查未覆盖的三类问题，现在都已有对应的检查。',
          },
        },
        {
          label: { en: 'Answer-correctness checks', zh: '答案正确性检查' },
          state: 'piloted',
          detail: {
            en: 'A solver and a challenger found a notice with two defensible answers that every structural check passed, and counting the key found drafts a candidate could pass without reading, which code now removes. The model judges have not been calibrated against teachers.',
            zh: '求解器和挑战者找到一则通知题，它通过了所有结构检查，却有两个说得通的答案；统计答案分布则发现了不读文章也能做对的初稿，这一问题现在由代码消除。这些模型评判尚未与教师的判断做过校准。',
          },
        },
        {
          label: { en: 'Effect of accepted rules on generation', zh: '已采纳规则对生成的影响' },
          state: 'piloted',
          detail: {
            en: 'Over 40 paired offline topics per part, the two word-class rules changed drafts after Holm correction across eight rules, and a part-of-speech tagger confirmed both. The judgement-heavy rules were not replicated by a second judge.',
            zh: '每个题型 40 组离线配对话题上，两条词类规则在八条规则的 Holm 校正后仍让初稿发生了变化，词性标注器也证实了这两条。依赖语义判断的规则，没有得到第二个评判模型的复现。',
          },
        },
        {
          label: { en: 'Rule versus code check', zh: '规则与代码检查' },
          state: 'piloted',
          detail: {
            en: 'With simulated teachers, an accepted rule ended correction for a standard the model meets while writing, and changed nothing for one that holds across a set of options. As a blocking code check, that second standard\'s cue fell from 32 to 17 of 84 questions at 2.8 times the model calls; the product ships it as a warning.',
            zh: '用模拟教师测试时，对于模型写作时就能满足的标准，规则一经采纳便不再需要修改；对于要在整组选项上判断的标准，规则毫无作用。后一种标准改成代码阻断检查后，线索从 84 道题中的 32 道降到 17 道，模型调用次数为原来的 2.8 倍。产品中以告警形式提供。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'The event log and frozen drafts record what the measure needs. Whether a practising teacher\'s correction falls as accepted rules accumulate needs several sessions per teacher in one part; the pilot had one per part, and the next study is designed for it.',
            zh: '事件日志与冻结初稿已经记录了这项度量所需的数据。一线教师的修改量是否随已采纳规则的累积而下降，需要每位教师在同一题型上使用多轮；试点中每个题型只有一轮，下一项研究就是为此设计的。',
          },
        },
        {
          label: { en: 'Classical item analysis', zh: '经典项目分析' },
          state: 'instrumented',
          detail: {
            en: 'Difficulty, discrimination and distractor analysis are implemented end to end and shown to the teacher, and wait on real class responses.',
            zh: '难度、区分度与干扰项分析已从数据到界面完整实现，并展示给教师，等待真实的班级作答数据。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'What I would argue with', zh: '这个设计里我自己也会质疑的地方' },
      body: {
        en: [
          'The lexical audit checks wordlist membership, so a text can be fully compliant and still too hard: syntax, cultural load and cognitive demand sit outside it. Encoding item-writing rules per exam part buys content validity; showing that the items measure what Cambridge intends would need a far larger response pool.',
          'Each prompt also carries a bounded summary of the same teacher\'s recent corrections, rejections and approvals, and the generation record does not show it. Unlike a rule, it never passes through the teacher\'s decision, yet it shapes drafts without being visible, refusable or retirable. Showing it in the generation record, with a switch to turn it off, is on the list of further work.',
          'The model judges were measured against 104 items the author labelled blind. The second-answer judge found 16 of 18 items with a second answer and flagged 22 sound ones, so its counts are an upper bound; the cloze reader errs the other way. Over-flagging is the safer error in assessment, because a flagged item goes to a teacher and a missed one goes to students, but one rater who built the system is not a panel of teachers.',
          'The next study is the one the pilot was cut down from: several sessions per teacher in one part, or a moderated design that withholds accepted rules from a random share of drafts with consent checked in person. Teachers can now reword a proposal before accepting it; ranking rules that conflict, and switching off the recent-work summary, are what the one answer on control still asks for.',
        ],
        zh: [
          '词汇审计只检查词是否在表内，句法、文化负载与认知需求都不在审计的范围内，所以一段文本可以完全合规而依然偏难。按考试部分编码命题规则，换来的是内容效度；要证明这些题目真的测到了剑桥想测的内容，需要大得多的作答池。',
          '每次出题的 prompt 里，还带着同一位教师近期修改、退回和通过的简短摘要，生成记录里却看不到它。这段摘要不像规则那样要经过教师同意，却同样在影响初稿，而教师既看不到它，也无法拒绝或撤下。把它显示在生成记录里，并提供关闭开关，已列入后续工作。',
          '几个评判模型都和作者盲标的 104 道题对照过。判断第二答案的模型找出了 18 道有第二答案的题中的 16 道，同时把 22 道没有问题的题也标了出来，所以它给出的数字是上限；完形阅读模型的偏差方向正好相反。在测评中，多标是更安全的一种错误：被标出的题会交给教师复核，漏掉的题则会到学生手里。不过，标注者只有一人，而且是系统的作者，代替不了一组教师。',
          '下一项研究，就是试点当初缩减掉的那部分：每位教师在同一题型上使用多轮，或者有人在场主持，事先当面确认同意，再对随机一部分初稿暂停已采纳的规则。教师现在已经可以在采纳之前改写建议的措辞。给相互冲突的规则排定先后、关闭近期修改摘要，是那条关于掌控感的回答仍在要求的。',
        ],
      },
    },
  ],
};
