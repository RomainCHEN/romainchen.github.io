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
    en: "An authoring tool for Cambridge KET and PET exercises. It keeps every correction a teacher makes, and turns the ones that recur into rules the teacher can accept.",
    zh: '一个剑桥 KET / PET 出题工具。教师的每一处修改都会被记下来，反复出现的修改归纳成规则，教师同意后才用于以后的出题。',
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
    { en: 'Human-in-the-loop', zh: '人工在环' },
    'CEFR',
  ],
  hero: {
    src: '/work/papercraft/system-loop.webp',
    w: 1913,
    h: 822,
    thumb: { src: '/work/papercraft/workspace-generate.webp', w: 2880, h: 1800 },
    alt: {
      en: 'The PaperCraft loop as one diagram: while the teacher waits, the model generates and code checks the draft before the teacher reads and edits it; what is kept is a frozen draft, the edits and the check verdicts; off the generation path, a second model distils and audits rules the teacher then decides on.',
      zh: 'PaperCraft 闭环全景图：在线生成时，模型写出初稿并经代码校验后再呈交教师审阅修改，系统同时保存冻结的原始初稿、修改记录与检查结论。在生成路径之外，另一组模型负责从批改记录中提炼并审计规则，最后交由教师拍板。',
    },
  },
  links: [
    { label: { en: 'Live system', zh: '在线系统' }, href: 'https://fyp.z-chen.dev/', primary: true },
    {
      label: { en: 'Final presentation', zh: '结题答辩演示' },
      href: '/work/papercraft/final/presentation.html',
    },
    { label: { en: 'Poster (PDF)', zh: '结题海报（PDF）' }, href: '/work/papercraft/final/poster.pdf' },
    { label: { en: 'Design narrative', zh: '设计阐述' }, href: 'https://fyp.z-chen.dev/research' },
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
      src: '/work/papercraft/workspace-review.webp',
      w: 2880,
      h: 1800,
      alt: {
        en: 'The review step on the Generate page, final build: the draft with its answer key, the expanded "How this was made" list of checks, the rules in force for this draft, a note field, the CEFR vocabulary bar, and the Approve, Reject and Regenerate buttons.',
        zh: '最终版本生成页上的审阅环节：初稿及其答案、展开的「How this was made」检查清单、对这份初稿生效的规则、备注框、CEFR 词汇条，以及通过、退回和重新生成三个按钮。',
      },
      caption: {
        en: 'Nothing reaches a classroom without an approve or reject recorded here, and the reason for a rejection is kept. That is what makes the teacher\'s contribution measurable. The teacher can open the check chain, see which accepted rules shaped the draft, and edit any field before deciding. Captured from the final build, 23 October 2026.',
        zh: '任何题目进入课堂前，都要在这里留下一次通过或退回的记录，退回的理由也会一并保存，教师投入了多少精力因此可以量化。决定之前，教师可以展开检查清单，查看哪些已采纳的规则影响了这份初稿，也可以修改任意字段。截图来自 2026 年 10 月 23 日的最终版本。',
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
      kind: 'figure',
      src: '/work/papercraft/paper-picture-story.webp',
      w: 1130,
      h: 1600,
      alt: {
        en: 'A generated A2 Writing Part 7 paper page: three sequential line drawings of the same two children, followed by the task instructions and writing hints.',
        zh: '一份生成好的 A2 Writing Part 7 试卷页：三幅连续的线描图，画的是同样两个孩子，下面是作文要求和写作提示。',
      },
      caption: {
        en: 'What that prompt produces on paper. The three panels are drawn in order, each conditioned on the one before, so the children stay the same; a vision model then writes the task from the pictures it was given. The page follows the Cambridge layout, three pictures across.',
        zh: '这段 prompt 最终印在纸上的样子。三幅图按顺序绘制，每一幅都以前一幅为参照，所以两个孩子始终是同一对；之后再由视觉模型根据生成的图片写出作文题。页面沿用剑桥试卷的版式，三幅图横向排开。',
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
          { en: 'Whether its reading matches a teacher\'s', zh: '模型的读法是否与教师一致' },
        ],
      ],
      caption: {
        en: 'Transcribed from the checks as they run. Five are plain code; vision inspection and the cloze reader call a model, and the reader was added after the pilot. The last column is what each check leaves to the teacher.',
        zh: '依据实际运行的检查整理。其中五道是普通代码，视觉检查和完形阅读需要调用模型，后者是试点之后才加上的。最后一列是每道检查留给教师判断的部分。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/workspace-generate.webp',
      w: 2880,
      h: 1800,
      alt: {
        en: 'The PaperCraft authoring workspace, final build: exam, exercise type, topic, difficulty and grammar-focus controls on the left, and a generated A2 Key Part 4 multiple-choice cloze draft on the right.',
        zh: 'PaperCraft 最终版本的出题工作区：左侧是考试、题型、话题、难度和语法重点的设置，右侧是一份生成好的 A2 Key Part 4 多项选择完形初稿。',
      },
      caption: {
        en: 'The specification step (S1). Exam, part, topic, difficulty and grammar focus are explicit parameters, so every request is reproducible and logged. Each draft also carries a record the teacher can open: which accepted rules were applied, how long the writing took, and what each check concluded.',
        zh: '任务规格定义这一步（S1）。考试、题型、话题、难度和语法重点都是明确的参数，所以每次请求都能复现、都有记录。每份初稿还附有一份教师可以打开的生成记录，写明用了哪些已采纳的规则、写作耗时多久，以及每道检查的结论。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The other half of the system', zh: '系统的另一半' },
      body: {
        en: [
          'Generation is half of the system. The other half reads the correction log. It runs offline every night, or when the teacher presses Check for new rules now. A pattern must recur in at least three distinct exercises before it becomes a candidate rule. The count is by generation, not by edit: four option edits inside one exercise are one decision. The distiller also receives the handbook specification for that part. Without it, the most it can infer is that some text changed.',
          'Rejected drafts count too. Written reasons on three rejected drafts form a pattern of their own. A teacher who explains a rejection has corrected the draft as surely as one who edits it. The pilot is where that gap showed up.',
          'Every candidate rule passes an audit before it reaches the teacher. The audit runs on another vendor\'s model, and its job is to refute the rule. When it refuses, it must name a ground: equivalent substitutions, an edit that introduced an error, a fact the evidence lacks, a restated specification, a duplicate, a matter of taste. It can refuse or pass. It cannot write, edit or apply a rule, and an audit that is unreachable or truncated proposes nothing.',
          'Each proposal goes to three independent calls, decided by majority. At temperature zero, two runs over the same eleven proposals disagreed on two of them, and one vote was not enough. Rules belong to the teacher who accepted them. They are never pooled across users.',
          'For a test, I wrote three substitutions: nine became ten, red became blue, a park became a beach. From these the distiller induced a rule that factual details should be accurate. The evidence held only the three substitutions, with no source material and nothing saying an original value was wrong. The audit refused the rule, because its rationale asserted a fact the evidence did not contain. Treating frequency as endorsement is a known failure. This is an instance of it.',
          'Before the final report, I ran both cases again on the final system, five times each. On the three substitutions, the distiller proposed nothing four times, and the fifth proposal was refused by all three votes. The sound word-class rule passed in three runs and was refused in two, both times on a ground the evidence did not support. Refusing a sound rule costs one more round of distillation. Admitting an unsound one puts an invented constraint into every later prompt. The audit is tuned to err the first way.',
          'A teacher can retire an accepted rule at any time, and it leaves every later prompt. Each new rule version carries the earlier ones forward: a retired rule stays retired, an unanswered proposal stays pending, and nothing in the loop can change a decision the teacher already made. One defect broke exactly this: a single refused proposal silently withdrew every accepted rule, while seven browser tests passed, each checking only its own step. Their replacement builds a version from the one before and checks what survives.',
        ],
        zh: [
          '生成只是这个系统的一半。另一半负责读批改日志，离线运行，每晚自动执行一次，教师也可以在页面上手动启动。一个修改模式至少要在三次不同的生成中反复出现，才能成为候选规则。计数单位是生成，不是改动：同一道题里改了四处选项，也只算一个决定。蒸馏器除了拿到改动，还会拿到这个题型的手册规格。没有规格，它最多只能看出文字被改过。',
          '退回的初稿同样计入。三份退回初稿上写的理由，本身就能构成一个模式。教师写明为什么退回，和动手修改一样，都是在纠正初稿。这个缺口是在试点中发现的。',
          '每条候选规则都要先经过一道审计，才会送到教师面前。审计用的是另一家厂商的模型，任务就是推翻这条规则。拒绝时必须写明依据，比如只是等价替换、改动本身引入了错误、证据里没有这回事、与手册规格重复、与已有规则重复，或者纯属个人口味。审计只能拒绝或放行，不能撰写、修改或启用规则。连不上审计模型或返回被截断时，系统不提出任何建议。',
          '每条建议交给三次独立调用投票，按多数决定。之所以要投三次，是因为温度设为 0 时，同一批十一条建议跑两遍，有两条的结论正好相反。规则只属于采纳它的那位教师，不会在用户之间汇总。',
          '为了测试，我写了三处替换：九改成十，红改成蓝，公园改成海滩。蒸馏器据此归纳出一条「事实细节应当准确」的规则。可是证据里只有这三处替换，既没有原始材料，也没有任何地方说原来的值是错的。审计拒绝了这条规则，理由是它的说明断言了证据中并不存在的事实。把出现频率当成认可，是一种已知的失误，这里就是一个实例。',
          '结题前，我在最终版本上把这两组材料各重跑了五次。三处替换那一组，蒸馏器有四次什么规则都没提，第五次提出的规则被三票全部否决。那条成立的规则要求同一空的选项词类一致，五次里通过三次，被拒两次，两次的理由都没有证据支持。错拒一条好规则，代价是多做一轮蒸馏；错收一条坏规则，此后每次出题都会带上一条凭空编出来的约束。所以审计有意偏向前一种错误。',
          '已采纳的规则，教师可以随时撤下，撤下后它就不再进入任何 prompt。每一版规则集都继承上一版：撤下的规则保持撤下，没答复的建议保持待定，闭环中没有哪一环能改动教师已经做出的决定。曾有一个缺陷恰好破坏了这一点。一条被拒的建议会悄悄撤销所有已采纳的规则，而当时七个浏览器测试全部通过，因为每个测试只检查自己那一步。替换它们的新测试会在上一版的基础上构建新版本，再检查哪些规则保留了下来。',
        ],
      },
    },
    {
      kind: 'loops',
      heading: { en: 'One circuit, two halves', zh: '一个闭环，两半分工' },
      intro: {
        en: [
          'The two halves form one circuit. While a draft is being made, the work travels left to right. What the teacher changed travels back along the lower band, and an accepted rule re-enters at prompt assembly.',
        ],
        zh: [
          '两半合起来是一个闭环。生成初稿时，流程从左往右走；教师的改动沿下方那条带回流，已采纳的规则在 prompt 组装处重新接入。',
        ],
      },
      alt: {
        en: 'Two bands. Online, per request: task specification, prompt assembly, generation, deterministic checks, then the teacher\'s decision. Offline, drawn right to left: the edit log feeds distillation, then the audit, then the teacher\'s decision, which returns to prompt assembly as accepted rules.',
        zh: '上下两条带。在线部分按每次请求推进，依次是任务规格定义、prompt 组装、生成、确定性检查和教师裁决。离线部分从右往左画：批改日志进入蒸馏，再经审计交给教师决定，最后以已采纳规则的形式回到 prompt 组装。',
      },
      online: [
        {
          title: { en: 'Task specification', zh: '任务规格定义' },
          detail: { en: 'exam · part · topic', zh: '考试 · 部分 · 话题' },
        },
        {
          title: { en: 'Prompt assembly', zh: 'prompt 组装' },
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
          detail: { en: 'append-only', zh: '只能追加' },
        },
        {
          title: { en: 'Distil', zh: '蒸馏' },
          detail: { en: 'three or more generations', zh: '至少三次生成' },
        },
        {
          title: { en: 'Audit', zh: '审计' },
          detail: { en: 'another vendor tries to refute', zh: '另一家厂商尝试推翻' },
          tone: 'check',
        },
        {
          title: { en: 'Teacher accepts', zh: '教师决定' },
          detail: { en: 'per teacher, not pooled', zh: '按教师隔离，不汇总' },
          tone: 'teacher',
        },
      ],
      bandLabels: {
        online: { en: 'Online · per request', zh: '在线 · 每次请求' },
        offline: { en: 'Offline · on a schedule or on demand', zh: '离线 · 定时或手动触发' },
      },
      edgeLabels: {
        corrections: { en: 'every correction', zh: '每一次批改' },
        rules: { en: 'accepted rules', zh: '已采纳的规则' },
        repair: { en: 'bounded repair', zh: '限次修复' },
      },
      caption: {
        en: 'Nothing in the lower band can write an exercise, and nothing in the upper band can settle a rule. The teacher appears once on each side. That is where the two halves meet.',
        zh: '下方那条带上，没有哪一环能写题；上方那条带上，也没有哪一环能决定规则。教师在两侧各出现一次，两半就在那里相接。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/workspace-learned.webp',
      w: 2880,
      h: 1800,
      alt: {
        en: 'The What it learned page, final build: counters for corrections recorded, proposals made, proposals the audit refused, rules waiting, rules in force and rules retired; below them the proposed rules, each with its reason, exam part and source count, and the buttons Start using this, Reword first and No thanks.',
        zh: '最终版本的「What it learned」页面：上方一排计数，依次是已记录的批改、产生的建议、审计拒绝的建议、等待决定的规则、正在生效的规则和已撤下的规则；下面是各条建议，每条都写明理由、所属题型和依据的练习数，并附有「开始使用」「先改写」「谢绝」三个按钮。',
      },
      caption: {
        en: 'What the offline half shows the teacher. Later drafts do not change until the teacher accepts a proposal, and each proposal carries the evidence it was induced from. The teacher can reword it first, and retire it later. The corrections here come from the author\'s own sessions on the demonstration account, not from the pilot.',
        zh: '这是离线那一半呈现给教师的界面。教师采纳之前，后续初稿不会有任何变化；每条建议都附有归纳它所依据的证据。教师可以先改写措辞再采纳，以后也可以撤下。图中的批改来自作者在演示账号上的操作，不是试点数据。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the checks caught, and what is recorded', zh: '检查发现了什么，系统记录了什么' },
      body: {
        en: [
          'Teacher intervention is recorded twice. An append-only event log keeps every edit as it is made, including edits later overwritten and edits on drafts that are rejected. A frozen copy of the model\'s draft gives the net difference at approval. The log has no update or delete policy, because a record that can be rewritten afterwards is not evidence.',
          'The structural checks cover shape. None of them asks whether an answer is right, and one class of defect belongs to the whole set, where no per-question check can see it. Both reach a classroom. The expensive one is an item with two defensible answers. It reads correctly, and nothing catches it until a student argues for the option marked wrong and turns out to be right. At that point the lesson stops.',
          'A solver sees each item with its key removed, and a challenger builds a reading on which each wrong option would be correct. Over 77 items in the bank they flagged two, and one is a genuine defect. A notice about a Friday swim club at 4 pm is keyed to "bring your swimsuit", and "the meeting is in the afternoon" is also true. It passed every structural check, and every check was right to pass it.',
          'A separate audit found four approved exercises that repeat an option. In two of them the repeated option is the key, so two letters carry the correct answer. Code now refuses a repeated option, and over the 79 exercises saved at the time it flagged exactly those four.',
          'The larger failure was in the answer key. On 11 September, 13 of 33 drafts of A2 Reading and Writing Part 4 put all six answers on A. A candidate who never read the passage would score full marks. A prompt line asking for a spread still left 41 of the next 72 answers on A. A prompt instruction is a request, not a check.',
          'Code now reassigns the letters after drafting, balanced and then shuffled, because an even rotation such as ABCABC is just as guessable. Of the 20 lettered drafts generated after that went live, none had a skewed key. The 114 answers fell 33, 34, 30 and 17 across A to D.',
          'Building the checker was work in itself. Three faults in the first runs raised the contested-key rate from 2 to 12 per cent. A fourth was silent and locally correct: it skipped every cloze item and printed nothing, so the count looked as if it covered the whole bank. The scripts now print what they skip, and why.',
          'The checks also read the teacher\'s version. As a teacher edits, the code checks run again and report only what changed against the untouched draft, repairs included, because an edit can create a second defensible answer as easily as a model can. Nothing is blocked. The checks encode a specification and a word list, and a teacher who overrides one may well be right. In the pilot the comparison recorded six disagreements, two of them substantive.',
        ],
        zh: [
          '教师的干预记录在两个地方。一处是只能追加的事件日志，每次修改发生时当场写入，后来被覆盖的修改、退回初稿上的修改都包括在内。另一处是模型初稿的冻结副本，教师通过初稿时，系统据此算出净改动。日志没有更新或删除的权限，因为事后还能改写的记录，算不上证据。',
          '结构检查只管形式。没有一道检查判断答案对不对。还有一类缺陷出在整套题上，逐题检查根本看不到。这两类问题都会带进课堂。代价最大的是一道题有两个说得通的答案：读起来毫无问题，一直没人发现，直到学生为被判错的选项申辩，而且申辩成立。这时课只能停下来。',
          '求解器拿到去掉答案的题目作答，挑战者则为每个错误选项构造一种能让它成立的读法。在题库的 77 道题中，它们标出了两道，其中一道确实有问题。一则通知写着周五下午四点游泳俱乐部集合，记得带泳衣，标准答案是「要带泳衣」，可「集合在下午」同样成立。这道题通过了所有结构检查，而每道检查的判断都没有错。',
          '另一次排查发现，四份已通过的练习存在重复选项，其中两份重复的正是答案，于是两个字母都对应正确答案。现在代码会拒收重复选项。在当时保存的 79 份练习上，它标出的恰好就是这四份。',
          '更大的问题出在答案分布上。9 月 11 日生成的 33 份 A2 Reading and Writing Part 4 初稿中，有 13 份把六个答案全放在 A 上。考生不读文章、一律选 A，也能拿满分。在 prompt 里加一句要求答案分散之后，接下来的 72 个答案中仍有 41 个是 A。写进 prompt 的要求只是请求，不是检查。',
          '现在初稿写完后，由代码重新分配选项字母，先均衡、再打乱，因为 ABCABC 这样的轮换同样容易被猜中。这项改动上线后生成了 20 份带字母选项的初稿，没有一份答案分布失衡。114 个答案落在 A、B、C、D 上的数量分别是 33、34、30、17。',
          '写检查程序本身就不容易。头几轮运行有三处错误，把有争议答案的比例从 2% 抬高到 12%。第四处错误既不报错，局部结果也没算错：它跳过了所有完形填空，却没有任何提示，结果那个计数看上去像是覆盖了整个题库。现在脚本会打印出跳过了什么、为什么跳过。',
          '这些检查也会复核教师的版本。教师修改时，代码检查会重新运行，只报告与原始初稿相比发生变化的地方，修好的问题也一并报告，因为教师的改动同样可能制造出第二个说得通的答案。检查不阻拦任何操作。它们依据的只是规格和词表，教师否决其中一项，很可能恰恰是对的。试点中，这套比对记录了六处分歧，其中两处是实质性的。',
        ],
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/workspace-item-analysis.webp',
      w: 2880,
      h: 1800,
      alt: {
        en: 'Per-question analysis for one shared exercise, final build: overall and per-item figures, a banner comparing the difficulty requested with the difficulty observed, and each question with its accuracy, discrimination and option counts.',
        zh: '最终版本中某份共享练习的逐题分析。顶部横幅把要求的难度和实际难度放在一起，下面逐题列出正确率、区分度和每个选项被选的次数。',
      },
      caption: {
        en: 'Item analysis computed from responses: difficulty, discrimination, how often each option was chosen, and the distractors the class never picks. The banner compares the difficulty the teacher asked for with what the items turned out to be. The responses are the author\'s own demonstration data. No student has taken part.',
        zh: '根据作答数据算出的项目分析，包括难度、区分度、每个选项被选的次数，以及全班从来不选的干扰项。上方的横幅把教师当初要求的难度和题目的实际难度放在一起对比。作答数据是作者自己录入的演示数据，没有学生参与。',
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/draft-key-spread.webp',
      w: 1600,
      h: 878,
      alt: {
        en: 'The head of a generated A2 Reading Part 4 draft: a warning that every answer is A, so a candidate who always picks A would score full marks, above the draft header confirming the item matches the exam task and the completed reference passage.',
        zh: '一份 A2 Reading Part 4 生成初稿的顶部。最上面是一条告警，指出所有答案都是 A，考生一律选 A 就能拿满分；下面是确认该题符合考试任务的初稿抬头，以及填好空格的参考全文。',
      },
      caption: {
        en: 'The warning comes from the answer-key check, which runs before the teacher sees the draft. Since this capture, code re-letters the options first, so a key like this one no longer reaches the teacher.',
        zh: '这条告警来自答案分布检查，在教师看到初稿之前就已运行。这张截图之后，代码会先重排选项字母，这样的答案分布已经不会再出现在教师面前。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Two teachers, three sessions', zh: '两位教师，三轮试点' },
      body: {
        en: [
          'Two practising teachers piloted the system in October 2026. Each worked alone from a study form: correct four drafts, ask once for rules, then generate two more. Teacher A, ten years in the classroom, worked in B1 Reading Part 5. Teacher B, four years in, worked in A2 Reading and Writing Part 4, and came back the next day for the A2 open cloze. Nobody else was present, so the event log, the written answers and the audit\'s votes are read together, none treated as the truth.',
          'Most corrections were to distractors. All 13 of Teacher A\'s edits replaced one. Nine of Teacher B\'s 14 did, and three moved the key to an option already present. In all three sessions the written notes named items with more than one defensible answer, the fault the checks above exist to find.',
          'Each teacher was offered four rules and accepted all four, and the audit had passed all eight by three votes to none. Two of the rules came from the notes, not the edits: six of Teacher A\'s seven notes said five of the six gaps tested verbs, and the distiller turned that into a rule to spread the gaps across word classes. Neither teacher refused a proposal, so no person has yet exercised the refusal path.',
          'The one usable answer on control was negative. Teacher A wrote that they had no direct say in which observations became rules, how the rules were worded, which won when two conflicted, or where they applied. Accepting or refusing a finished rule did not feel like control to a teacher who could not shape it. That answer sets the next piece of work.',
          'The third session went differently. In 13 minutes Teacher B generated five open-cloze drafts, rejected four with a written reason each, and edited none. Every reason named the genre. The handbook sets an email, and the prompt for this part said the text must never be one. That line sat in a section of the prompt the handbook audit had not covered. Distillation at the time learned only from edits, so a teacher who explained instead of editing taught it nothing. It now reads rejected drafts too.',
          'Whether an accepted rule changes what the generator writes was tested offline. Each topic was generated twice, with the teacher\'s accepted rules and without them, and code checked that the two prompts differed only in the rule block. The test began at 16 topics per part and was extended to 40, with the analysis fixed in a hashed file before the new drafts existed. A judge from another vendor scored each draft against each rule, and a second judge rescored the pairs the first called different (table below).',
        ],
        zh: [
          '2026 年 10 月，两位一线教师参加了试点。两人各自按研究表单独立操作：修改四份初稿，让系统归纳一次规则，然后再生成两份。教师 A 有十年教龄，试用的是 B1 Reading Part 5；教师 B 有四年教龄，试用的是 A2 Reading and Writing Part 4，第二天又做了一轮 A2 开放式完形。整个过程无人在场，所以事件日志、书面回答和审计投票要放在一起对照着看，哪一项都不单独当作定论。',
          '修改大多集中在干扰项上。教师 A 的 13 处修改全是替换干扰项；教师 B 的 14 处修改中，9 处是替换干扰项，3 处是把答案改到已有的另一个选项上。三轮试点的书面记录都提到，有些题目不止一个说得通的答案，而前面那些检查要找的正是这类问题。',
          '系统给两位教师各提出四条规则，两人全部采纳；这八条规则此前都以三比零的票数通过了审计。其中两条来自书面记录，不是来自修改。教师 A 的七条记录里有六条提到，六个空里有五个考的是动词，蒸馏器据此归纳出「各空应覆盖不同词类」这条规则。两位教师都没有拒绝过任何建议，所以「拒绝」这条路径还没有真人走过。',
          '关于掌控感，唯一可用的回答是负面的。教师 A 写道，哪些观察会变成规则、规则怎么措辞、两条规则冲突时以哪条为准、规则在哪里生效，自己都没有直接的发言权。面对一条已经写好的规则，只能选择采纳或拒绝，对一位无法参与制定规则的教师来说，这算不上掌控。下一步的工作，就由这个回答决定。',
          '第三轮的情况完全不同。教师 B 在 13 分钟内生成了五份开放式完形初稿，退回其中四份并各自写明理由，一处都没有改。每条理由指出的都是文体问题：手册规定这一部分是电子邮件，这个题型的 prompt 却写着文本绝不能是邮件。这句话所在的段落，恰好不在当初对照手册核查的范围内。当时的蒸馏只从修改中学习，教师只写理由、不动手修改，它就无从归纳。现在蒸馏也会读取退回的初稿。',
          '已采纳的规则是否真的改变了生成结果，另外做了离线测试。每个话题生成两次，一次带上教师已采纳的规则，一次不带，并由代码确认两份 prompt 只在规则那一段有区别。测试起初每个题型只有 16 个话题，后来扩展到 40 个；扩展之前，分析方案已写入一份记录了哈希值的文件。评判由另一家厂商的模型逐条打分，它判定有差异的配对，再交给第二个评判模型复核（见下表）。',
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
        en: 'Scored by the first model judge, not by the teachers. p is the exact McNemar test, Holm-adjusted over the eight rules. The two word-class rules also hold on the pairs the second judge agreed with. The third row does not: the second judge agreed on one of its sixteen changed pairs. Denominators below 40 exclude pairs a judge left unscored.',
        zh: '打分的是第一个评判模型，不是教师。p 为精确 McNemar 检验的结果，按八条规则做了 Holm 校正。只看第二个评判模型也认同的配对，两条词类规则依然成立；第三行则不成立，它的十六组变化中，第二个模型只认同一组。分母小于 40，是因为剔除了评判模型未打分的配对。',
      },
    },
    {
      kind: 'prose',
      body: {
        en: [
          'Both word-class rules can also be counted without a judge. A part-of-speech tagger, independent of the generator and of both judges, read the class of each keyed word. The mean number of verbs among the six keys fell from 4.00 to 0.60 in one part and from 3.50 to 1.32 in the other. In Teacher A\'s part, drafts with at least one grammar-word key rose from 8 of 37 to 37 of 37. The judge agreed with the tagger on 91 and 89 per cent of draft-arms.',
          'Counting also found what the judge missed. With all four of Teacher A\'s rules on, drafts with no repeated option word fell from 30 to 13 of 40. The likely cause is the word-class rule beside it: grammar-word gaps draw from a small closed set, so in, on and at recur from gap to gap. The conflict check did not flag the pair. The interaction showed only when the rules ran together.',
          'The prompt also carries a summary of the teacher\'s recent work. To separate it from the rules, the same topics were generated again without it. For Teacher A the summary alone moved 8 drafts; for Teacher B it showed no reliable shift. Once the rule was in force, it added nothing for either. The rules account for almost all of the change.',
        ],
        zh: [
          '两条词类规则也可以不靠评判模型，直接计数。词性标注器独立于生成模型和两个评判模型，逐个读出答案词的词类。六个答案中动词的平均个数，一个题型从 4.00 降到 0.60，另一个从 3.50 降到 1.32。在教师 A 的题型里，至少有一个功能词答案的初稿从 37 份中的 8 份增加到 37 份。评判模型与标注器的结论分别在 91% 和 89% 的初稿上一致。',
          '直接计数还发现了评判模型没看到的问题。教师 A 的四条规则同时开启时，选项词不重复的初稿从 40 份中的 30 份降到 13 份。原因很可能是旁边那条词类规则：功能词答案只能从很小的封闭词类里选，in、on、at 就会在不同的空格之间反复出现。冲突检查没有标出这一对规则，这种相互影响只有在规则一起运行时才会显现。',
          'prompt 里还附带一段该教师近期修改的摘要。为了把它和规则的作用分开，同样的话题在去掉摘要后又生成了一遍。对教师 A，单靠摘要就让 8 份初稿朝同一方向变化；对教师 B，则看不出可靠的变化。规则生效之后，摘要对两人都不再有额外作用。变化几乎全部来自规则。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Closing the loop without a person in it', zh: '没有真人参与时，闭环能否成立' },
      body: {
        en: [
          'Whether accepted rules reduce a teacher\'s correcting over time needs several sessions per teacher in one part, and the pilot had one per part. The mechanism\'s half of that question was measured offline, with simulated teachers. Each was played by a model from a family the product never uses, held one standard that program code can count, and corrected a draft only when the count failed.',
          'D1, on B1 Reading Part 5, required at least two of the six keys to be grammar words. D2, on A2 Reading Part 3, forbade the key from being the longest option, a cue a candidate can follow without reading.',
          'Each corrected eight drafts, asked once for rules and accepted what the audit passed, as both pilot teachers had. Every later topic was then generated four ways: rules and summary, summary only, rules only, and neither. For D1, with the rule in force, the teacher corrected none of 32 later drafts, against 30 of 31 for a teacher who had refused it. The summary alone changed one pair. For D2, the rule reached every prompt and 29 of 32 drafts still needed correcting, against 27 of 32 without it.',
          'The difference is where the standard lives. A model writing one gap at a time can meet a constraint on that gap. It cannot see the lengths of a set of options it has not finished writing. So the D2 rule was moved out of the prompt.',
          'On 16 frozen specifications, the rule as text left the cue unchanged: 31 of 84 questions against 32. As a blocking check in code, which names the failing questions and spends the retry, it cut the cue to 17 of 84 at 2.8 times the model calls. As a warning it found the same questions at 1.25 calls and did not reduce them.',
          'Code can verify the property and point at the question. It cannot write the longer distractor, and the model cannot always write it even when told to. The product ships the warning by default and offers blocking per part.',
        ],
        zh: [
          '已采纳的规则能否让教师的修改量随时间减少，需要每位教师在同一题型上使用多轮，而试点中每个题型只有一轮。这个问题中属于机制的那一半，改用模拟教师离线测量。每位模拟教师由一个产品从未使用过的模型家族扮演，各自持有一条可以用代码计数的标准，只在计数不达标时才修改初稿。',
          'D1 使用 B1 Reading Part 5，要求六个答案中至少有两个是功能词。D2 使用 A2 Reading Part 3，规定正确答案不能是最长的选项，因为考生不读文章，也能顺着这条线索猜对。',
          '两位模拟教师各修改八份初稿，请系统归纳一次规则，并采纳审计通过的规则，做法和两位试点教师相同。此后每个话题生成四个版本：规则加摘要、只有摘要、只有规则、两者都没有。D1 的规则生效后，后续 32 份初稿一份都不用再改；面对同样的话题，拒绝了规则的教师要改 31 份中的 30 份，只有摘要时仅有一组配对发生变化。D2 的规则进入了每一份 prompt，可 32 份初稿仍有 29 份要改，不带规则时是 27 份。',
          '区别在于标准作用在哪一层。模型一次写一个空，能满足针对单个空格的约束；可一组选项还没写完，它就看不到每个选项有多长。于是 D2 的规则被移出了 prompt。',
          '在 16 份冻结的题目规格上，把规则写成文字，线索毫无变化：84 道题中有 31 道，不带规则时是 32 道。改成代码里的阻断检查后，检查会指出不合格的题，并消耗一次重试，线索降到 84 道中的 17 道，模型调用次数是原来的 2.8 倍。改成告警时，只需 1.25 次调用就能找出同样的题，但不会减少它们。',
          '代码能核实这个属性，也能指出是哪一道题，却写不出那个更长的干扰项；即使明确告诉模型，它也未必写得出来。产品默认使用告警，阻断模式可以按题型开启。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the pilot changed', zh: '试点之后改了什么' },
      body: {
        en: [
          'Each session was also a defect report, and four changes followed. Two late pilot drafts had six questions and fewer gaps, and one was approved unedited. A check now counts gaps against questions, and on replay it refuses exactly those two. The A2 open cloze now has to be an email with six different answers. Replayed over the third session\'s drafts, the check refuses all five on genre and four for a repeated answer.',
          'The fault the notes named every time, a gap that more than one word fits, needed a different kind of check. It is the one change that puts a model between a draft and the teacher. A reader given the draft without its key answers every gap. A disagreement with the key earns one rewrite. What remains is shown to the teacher, who can accept the reader\'s word as a second answer.',
          'For open cloze, moving the choice of gaps out of the prompt did better than rewording it. The generator writes ten candidate gaps, the reader judges each, and code keeps six with only one answer. Scored by an independent third model, the share of gaps another word could fill fell from 0.79 to 0.67 in A2 and from 0.71 to 0.48 in B1, with 10 of 13 differing pairs better. That is a direction, not a significant result (sign test p ≈ .09), at about ten seconds per draft.',
        ],
        zh: [
          '每一轮试点同时也是一份缺陷报告，之后系统改了四处。试点后段有两份初稿列了六道题，空格却不足六个，其中一份未经修改就通过了。现在有一道检查专门核对空格数和题数，用试点保存的初稿回放，它拒绝的恰好就是这两份。A2 开放式完形现在必须是一封电子邮件，六个答案互不相同。用第三轮的五份初稿回放，五份都因文体被拒，四份因答案重复被拒。',
          '书面记录每一轮都提到的问题，是一个空格能填不止一个词。这需要另一种检查，也是唯一一处在初稿和教师之间加入模型的改动。阅读模型拿到去掉答案的初稿，逐空作答。它的答案和标准答案不一致时，初稿自动改写一次，仍有分歧的地方交给教师，教师可以把阅读模型填的词列为另一个可接受的答案。',
          '对开放式完形来说，把选空这一步移出 prompt，比改写 prompt 的效果更好。现在生成器先写出十个候选空格，阅读模型逐个判断，再由代码留下六个只有一种填法的空。评分交给一个产品中从未用过的第三方模型。另一个词也能填入的空格比例，A2 从 0.79 降到 0.67，B1 从 0.71 降到 0.48，在 13 组有差异的配对中，10 组有所改善。这只是方向上的改善，还不显著（符号检验 p ≈ .09），代价是每份初稿多花约十秒。',
        ],
      },
    },
    {
      kind: 'figure',
      src: '/work/papercraft/slides-reveal.webp',
      w: 2824,
      h: 1588,
      alt: {
        en: 'A projected multiple-choice cloze slide: three numbered gaps, each with three options, the correct option marked in green and the key printed beneath it.',
        zh: '投影在课堂上的一页多项选择完形幻灯片：三个编号的空格，每个空有三个选项，正确选项标成绿色，答案印在下方。',
      },
      caption: {
        en: 'Where an approved exercise ends up. A paper exports to Word, PDF or a self-contained slide deck; on the slide, the key appears on a keypress, not from the start, which is the order a teacher needs when going through answers with a class.',
        zh: '通过审阅的练习最终会到这里。一份试卷可以导出为 Word、PDF 或一个独立的幻灯片文件；幻灯片上的答案要按一下键才显示，不会一开始就出现，这正是教师和全班对答案时需要的顺序。',
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this ended', zh: '结题时的状态' },
      intro: {
        en: [
          'The project closed in October 2026 with a final report. Each component below is labelled with how far its evidence goes: what is in use, what was tried at small scale, and what is built and waiting for a longer study.',
        ],
        zh: [
          '项目于 2026 年 10 月结题，并提交了结题报告。下面每一项都标明了证据的程度：哪些已经投入使用，哪些做过小规模检验，哪些已经建好、还需要更长期的研究。',
        ],
      },
      items: [
        {
          label: { en: 'Authoring and practice, 15 item types, exports', zh: '出题与练习、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used for classroom materials, with Word, PDF, PowerPoint and HTML slide export and a separate answer sheet. Of 373 logged text generations, 360 passed the specification check first time and 11 after a repair. Every field is editable at the point of generation, and 48 regression scripts run the shipped code on real inputs. Each generation keeps a trace that names the first check to fail: of 612 traces with a model call, 79.7 per cent needed no repair.',
            zh: '已上线并用于制作课堂材料，可导出 Word、PDF、PowerPoint 和 HTML 幻灯片，答案单独成页。记录在案的 373 次文本生成中，360 次一次通过规格检查，11 次经修复后通过。初稿的每个字段都能在生成页面上直接编辑，48 个回归脚本用真实输入运行线上代码。每次生成都留有记录，写明最先失败的是哪道检查；在 612 份调用了模型的记录中，79.7% 无需任何修复。',
          },
        },
        {
          label: { en: 'Teacher pilot', zh: '教师试点' },
          state: 'piloted',
          detail: {
            en: 'Two practising teachers, three unmoderated sessions. In every session their notes named items with more than one defensible answer, and their drafts exposed three faults the specification check did not examine. All three are now checked.',
            zh: '两位一线教师，三轮无人在场的独立使用。每一轮的书面记录都指出了一题多解的问题，初稿还暴露出规格检查没有覆盖的三类问题，现在这三类都有了对应的检查。',
          },
        },
        {
          label: { en: 'Answer-correctness checks', zh: '答案正确性检查' },
          state: 'piloted',
          detail: {
            en: 'A solver and a challenger found a notice with two defensible answers that every structural check had passed. Counting the key found drafts a candidate could pass without reading, and code now removes them. The model judges have been checked against the author\'s blind labels, not yet against teachers.',
            zh: '求解器和挑战者找到了一道通知题，它通过了所有结构检查，却有两个说得通的答案。统计答案分布，则发现了不读文章也能做对的初稿，这个问题现在由代码消除。这些评判模型已和作者的盲标结果对照过，还没有和教师的判断对照过。',
          },
        },
        {
          label: { en: 'Effect of accepted rules on generation', zh: '已采纳规则对生成的影响' },
          state: 'piloted',
          detail: {
            en: 'Over 40 paired offline topics per part, the two word-class rules changed drafts after Holm correction across eight rules, and a part-of-speech tagger confirmed both. The rules that need semantic judgement were not replicated by a second judge.',
            zh: '在每个题型 40 组离线配对话题上，经过八条规则的 Holm 校正，两条词类规则依然改变了初稿，词性标注器也证实了这两条。依赖语义判断的规则，没有得到第二个评判模型的复现。',
          },
        },
        {
          label: { en: 'Rule versus code check', zh: '规则与代码检查' },
          state: 'piloted',
          detail: {
            en: 'With simulated teachers, an accepted rule ended correction for a standard the model can meet while writing, and changed nothing for one that holds across a set of options. As a blocking code check, that second standard\'s cue fell from 32 to 17 of 84 questions, at 2.8 times the model calls. The product ships it as a warning.',
            zh: '用模拟教师测试时，模型写作时就能满足的标准，规则一经采纳便不必再改；需要看整组选项才能判断的标准，规则毫无作用。后一种标准改成代码阻断检查后，线索从 84 道题中的 32 道降到 17 道，模型调用次数是原来的 2.8 倍。产品中以告警的形式提供。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'The event log and frozen drafts record what the measure needs. Whether a practising teacher\'s correction falls as accepted rules accumulate needs several sessions per teacher in one part. The pilot had one per part, and the next study is designed for it.',
            zh: '事件日志和冻结初稿已经记下了这项度量需要的数据。一线教师的修改量是否会随已采纳规则的增加而下降，需要每位教师在同一题型上使用多轮。试点中每个题型只有一轮，下一项研究正是为此设计的。',
          },
        },
        {
          label: { en: 'Classical item analysis', zh: '经典项目分析' },
          state: 'instrumented',
          detail: {
            en: 'Difficulty, discrimination and distractor analysis are implemented end to end and shown to the teacher. They wait on real class responses.',
            zh: '难度、区分度和干扰项分析都已完整实现并展示给教师，只差真实的班级作答数据。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'What I would argue with', zh: '这个设计里我自己也会质疑的地方' },
      body: {
        en: [
          'The lexical audit checks wordlist membership, so a text can be fully compliant and still too hard. Syntax, cultural load and cognitive demand sit outside it. Encoding item-writing rules per exam part buys content validity. Showing that the items measure what Cambridge intends would need a far larger pool of responses.',
          'Each prompt also carries a bounded summary of the same teacher\'s recent corrections, rejections and approvals, and the generation record does not show it. Unlike a rule, it never passes through the teacher\'s decision. It shapes drafts without being visible, refusable or retirable. Showing it in the generation record, with a switch to turn it off, is on the list of further work.',
          'The model judges were measured against 104 items the author labelled blind. The second-answer judge found 16 of 18 items with a second answer and also flagged 22 sound ones, so its counts are an upper bound. The cloze reader errs the other way. Over-flagging is the safer error in assessment: a flagged item goes to a teacher, and a missed one goes to students. But one rater who built the system is not a panel of teachers.',
          'The next study is the one the pilot was cut down from: several sessions per teacher in one part, or a moderated design that withholds accepted rules from a random share of drafts, with consent confirmed in person. Teachers can now reword a proposal before accepting it. Ranking rules that conflict, and switching off the recent-work summary, are what the one answer on control still asks for.',
        ],
        zh: [
          '词汇审计只检查词在不在词表里，句法、文化负载和认知难度都不在审计范围内，所以一段文本可能完全合规，却依然偏难。按考试部分编写命题规则，换来的是内容效度；要证明这些题目真的考到了剑桥想考的能力，需要多得多的作答数据。',
          '每次出题的 prompt 里，还附带同一位教师近期修改、退回和通过的简短摘要，而生成记录里看不到它。这段摘要不像规则那样需要经过教师同意，却同样影响着初稿，教师既看不到它，也无法拒绝或撤下。把它显示在生成记录里，并提供关闭开关，已经列入后续工作。',
          '几个评判模型都和作者盲标的 104 道题做过对照。判断第二答案的模型找出了 18 道有第二答案的题中的 16 道，同时也把 22 道没有问题的题标了出来，所以它给出的数字是上限；完形阅读模型的偏差方向正好相反。在测评里，多标是更安全的错误：被标出的题会交给教师复核，漏掉的题却会到学生手里。不过，标注者只有一个人，而且是系统的作者，代替不了一组教师。',
          '下一项研究，正是试点当初缩减掉的那部分：让每位教师在同一题型上使用多轮，或者安排人在场主持，当面确认知情同意，再对随机一部分初稿暂停已采纳的规则。教师现在已经可以在采纳前改写建议的措辞。为相互冲突的规则排定先后、关闭近期修改摘要，则是那条关于掌控感的回答仍在要求的。',
        ],
      },
    },
  ],
};
