import type { Project } from '../types';

/**
 * PaperCraft. The spine of the portfolio.
 *
 * Written for a reader who will not finish a long page: the problem and the
 * headline numbers come first, then one section per finding. Engineering detail
 * (the seven-stage pipeline, prompt assembly, source excerpts) lives in the
 * final report and presentation linked from the head of the page.
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
      label: { en: 'Teacher pilot', zh: '教师试点' },
      value: { en: 'Two teachers, three sessions, October 2026', zh: '2 位教师，3 轮试点，2026 年 10 月' },
    },
  ],
  featured: true,
  sections: [
    {
      kind: 'lede',
      body: {
        en: [
          'While studying computer science I taught two small Cambridge KET classes and wrote most of their practice myself. Three things kept going wrong, and none of them was speed: the difficulty was hard to pitch, past papers ran out, and the topics were stale. A language model writes a plausible exercise in seconds, and I still spent the evening fixing it, making the same fixes week after week.',
          'PaperCraft is the final-year project that came out of it. It writes all fifteen Reading and Writing item types of A2 Key and B1 Preliminary, checks each draft in code against the official handbooks, and keeps every correction the teacher makes. When the same correction recurs, it proposes a rule. A second model tries to refute it, and only the rules the teacher accepts shape later drafts. The final report was submitted in October 2026, after a pilot with two teachers.',
        ],
        zh: [
          '读计算机学位期间，我带过两个剑桥 KET 小班，练习大多是自己出的。当时有三个问题一直没解决，而且都和出题快慢无关：难度拿捏不准，真题不够用，现成的话题也太旧。语言模型几秒钟就能写出一份像样的练习，可我晚上还是得花时间去改，而且每周改的都是同样几处。',
          'PaperCraft 就是由此而来的毕业设计。它能生成 A2 Key 和 B1 Preliminary 阅读写作卷的全部 15 种题型，每份初稿都由代码对照官方手册检查，教师的每一处修改都会记下来。同样的修改反复出现时，系统会提出一条规则，交给另一个模型尝试推翻，只有教师采纳的规则才会影响以后的初稿。项目在两位教师参加试点后，于 2026 年 10 月提交了结题报告。',
        ],
      },
    },
    {
      kind: 'metrics',
      heading: { en: 'Results in numbers', zh: '主要结果' },
      items: [
        {
          value: '360 / 373',
          label: { en: 'drafts passed the specification check first time', zh: '份初稿一次通过规格检查' },
          note: { en: '11 more after one repair', zh: '另有 11 份修复一次后通过' },
        },
        {
          value: '7 → 36',
          unit: { en: 'of 40', zh: '/ 40' },
          label: { en: 'drafts following a teacher\'s word-class rule, off and on', zh: '份初稿遵循教师的词类规则（规则关闭 → 开启）' },
          note: { en: 'paired topics, Holm-corrected; a tagger agrees', zh: '配对话题，Holm 校正后成立，词性标注器复核' },
        },
        {
          value: '30 → 0',
          unit: { en: 'of 32', zh: '/ 32' },
          label: { en: 'drafts a simulated teacher still had to correct, rule refused and accepted', zh: '份初稿仍需模拟教师修改（拒绝规则 → 采纳规则）' },
          note: { en: 'a standard the model can meet while writing', zh: '针对模型写作时就能满足的标准' },
        },
        {
          value: '31 → 17',
          unit: { en: 'of 84', zh: '/ 84' },
          label: { en: 'questions giving the answer away by length, rule in the prompt and as a code check', zh: '道题能凭选项长短猜出答案（写进 prompt → 改成代码检查）' },
          note: { en: 'at 2.8 times the model calls', zh: '模型调用次数为原来的 2.8 倍' },
        },
      ],
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
        en: 'The teacher\'s side of a draft. Before approving or rejecting, the teacher can open the checks it passed and the accepted rules that shaped it, and edit any field. Nothing reaches a classroom without a decision recorded here. Final build, 23 October 2026.',
        zh: '教师看到的一份初稿。通过或退回之前，教师可以展开它通过了哪些检查、受哪些已采纳规则的影响，也可以修改任意字段。任何题目进课堂前，都要在这里留下一次决定。截图来自 2026 年 10 月 23 日的最终版本。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Who decides what', zh: '谁来做决定' },
      body: {
        en: [
          'Three parties make decisions, and the design is the line between them. The model writes drafts and proposes rules. Plain code settles anything that can be decided: whether a part has three options or four, whether the words are on the level\'s list, whether the answers are spread across the letters. The teacher settles everything that is a judgement about teaching, and no rule reaches a prompt without their consent.',
          'Five of the seven checks on a draft are plain code. Handing a decidable question to a model that can be fluently wrong only adds a way to fail.',
        ],
        zh: [
          '做决定的有三方，整套设计的关键就是三方怎么分工。模型负责写初稿、提规则。凡是能明确判定的事，都交给普通代码，比如一个部分有三个还是四个选项、用词在不在该级别的词表里、答案在各个字母上是否分散。涉及教学判断的事全部归教师，任何规则都要教师同意，才能写进 prompt。',
          '一份初稿要过七道检查，其中五道是普通代码。把能明确判定的问题交给一个可能说得头头是道、结论却错了的模型，只会多出一种出错的方式。',
        ],
      },
    },
    {
      kind: 'loops',
      heading: { en: 'One loop, two halves', zh: '一个闭环，两半分工' },
      intro: {
        en: [
          'While a draft is being made, the work runs left to right. What the teacher changed runs back along the lower band, and an accepted rule re-enters at prompt assembly.',
        ],
        zh: [
          '生成初稿时，流程从左往右走；教师的改动沿下方那条带回流，已采纳的规则在 prompt 组装处重新接入。',
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
      kind: 'table',
      heading: { en: 'What each check decides, and what it cannot see', zh: '每道检查判定什么，看不见什么' },
      head: [
        { en: 'Check', zh: '检查项' },
        { en: 'What it decides', zh: '判定内容' },
        { en: 'What it cannot see', zh: '检查盲区' },
      ],
      rows: [
        [
          { en: 'JSON schema', zh: '结构校验' },
          { en: 'Whether the answer has the required shape', zh: '输出是否符合指定的数据结构' },
          { en: 'Whether the exercise is the exam task', zh: '题目是否符合手册规定的考试任务' },
        ],
        [
          { en: 'Handbook specification', zh: '手册规格核查' },
          { en: 'Whether it is the published task', zh: '是否符合官方手册公开的题型规格' },
          { en: 'Whether the answer is right', zh: '参考答案是否正确' },
        ],
        [
          { en: 'CEFR vocabulary', zh: 'CEFR 词汇审计' },
          { en: 'Whether at least 90% of the words are on the level\'s list', zh: '实义词是否至少有 90% 在该等级词表内' },
          { en: 'Syntactic complexity', zh: '句法复杂度' },
        ],
        [
          { en: 'Vision inspection', zh: '视觉质量检查' },
          { en: 'Whether a picture is exam material', zh: '生成的配图是否可用作考试材料' },
          { en: 'Anything about the text', zh: '任何与文字内容相关的问题' },
        ],
        [
          { en: 'Answer key spread', zh: '答案字母分布' },
          { en: 'Whether the key varies across the set', zh: '整套题的正确答案是否均匀分布在不同选项上' },
          { en: 'Whether any single answer is right', zh: '任何单道题本身的答案是否正确' },
        ],
        [
          { en: 'Answer against passage', zh: '答案与原文核对' },
          { en: 'Whether each gap\'s key is the word in the completed passage', zh: '每个空格的答案是否与完整原文里的词一致' },
          { en: 'Whether that word is the only defensible answer', zh: '该词是否为唯一说得通的答案' },
        ],
        [
          { en: 'Answer uniqueness (cloze)', zh: '答案唯一性（完形）' },
          { en: 'Whether a reader without the key reaches the key and only the key', zh: '不看答案的阅读模型能否填出且仅填出标准答案' },
          { en: 'Whether its reading matches a teacher\'s', zh: '模型的读法是否与教师一致' },
        ],
      ],
      caption: {
        en: 'Five are plain code; vision inspection and the cloze reader call a model, and the reader was added after the pilot. The last column is what each check leaves to the teacher.',
        zh: '其中五道是普通代码，视觉检查和完形阅读需要调用模型，后者是试点之后加上的。最后一列是每道检查留给教师判断的部分。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'What the checks could not see', zh: '检查漏掉了什么' },
      body: {
        en: [
          'The structural checks cover shape. None asks whether an answer is right, and that is the defect that costs a lesson: an item with two defensible answers reads correctly until a student argues for the option marked wrong and is right. A model solver and a challenger, run over the 77 items in the bank, found one. A notice about a Friday swim club at 4 pm is keyed to "bring your swimsuit", and "the meeting is in the afternoon" is also true.',
          'The other defect belongs to the whole set. On 11 September, 13 of 33 drafts of A2 Reading and Writing Part 4 put all six answers on A, so a candidate who never read the passage would score full marks. Asking for a spread in the prompt still left 41 of the next 72 answers on A. Code now reassigns the letters after drafting. Of the 20 drafts generated since, none has a skewed key.',
        ],
        zh: [
          '结构检查只管形式，没有一道检查判断答案对不对，而最耽误课堂的恰恰是这一类问题：一道题有两个说得通的答案，读起来毫无破绽，直到学生为被判错的选项申辩，而且申辩成立。我用一个求解模型和一个挑战模型过了一遍题库里的 77 道题，找到一道这样的题。一则通知写着周五下午四点游泳俱乐部集合，记得带泳衣，标准答案是「要带泳衣」，可「集合在下午」同样成立。这道题此前通过了所有结构检查。',
          '另一类问题出在整套题上。9 月 11 日生成的 33 份 A2 Reading and Writing Part 4 初稿中，有 13 份六个答案全是 A，考生不读文章、一律选 A 也能拿满分。在 prompt 里要求答案分散之后，接下来的 72 个答案中仍有 41 个是 A。现在初稿写完后由代码重新分配选项字母，此后生成的 20 份初稿，没有一份答案分布失衡。',
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
        zh: '一份 A2 Reading Part 4 生成初稿的顶部。最上面是一条告警，指出所有答案都是 A，考生一律选 A 就能拿满分；下面是确认该题符合考试任务的初稿抬头，以及填好空格的参考全文。',
      },
      caption: {
        en: 'The warning from the answer-key check, before the fix. Code now re-letters the options first, so a key like this no longer reaches the teacher.',
        zh: '修复之前，答案分布检查给出的告警。现在代码会先重排选项字母，这样的答案分布已经不会出现在教师面前。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Do the learned rules work?', zh: '学到的规则有没有用' },
      body: {
        en: [
          'Each topic was generated twice, with a teacher\'s accepted rules and without them, everything else identical, over 40 topics per part. A model from another vendor scored whether each draft followed each rule. The two rules about word classes changed what the generator wrote, and a part-of-speech tagger that uses no language model agreed. The rules that need a judgement at every gap, which is what both teachers corrected most, did not hold up when a second judge rescored them.',
        ],
        zh: [
          '每个话题生成两次，一次带上教师已采纳的规则，一次不带，其他条件完全相同，每个题型做 40 个话题。由另一家厂商的模型判断每份初稿是否遵循了每条规则。两条和词类有关的规则确实改变了生成结果，一个不用语言模型的词性标注器也得出了同样的结论。那些需要逐个空格判断的规则，恰好是两位教师改得最多的地方，换第二个评判模型复核时，没能站住。',
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
      heading: { en: 'What a prompt cannot enforce', zh: 'prompt 管不住的标准' },
      body: {
        en: [
          'Whether accepted rules reduce a practising teacher\'s correcting over time needs several sessions per teacher, and the pilot had one per part. So the mechanism was tested offline with simulated teachers, each played by a model the product never uses and each holding one standard that code can count.',
          'For a standard the model can meet while writing, such as at least two grammar-word answers among six, the loop closed. With the rule accepted, the simulated teacher corrected none of 32 later drafts, against 30 of 31 when the rule was refused.',
          'For a standard that only holds across a set of options, such as the answer never being the longest option, the rule reached every prompt and changed nothing. A model writes one option at a time and cannot see the set. The same rule as a blocking check in code cut the cue from 31 to 17 of 84 questions, at 2.8 times the model calls. The product ships it as a warning.',
        ],
        zh: [
          '已采纳的规则能不能让一线教师的修改量随时间减少，需要每位教师在同一题型上使用多轮，而试点中每个题型只有一轮。所以机制本身改用模拟教师离线测试：每位模拟教师由一个产品从未用过的模型扮演，各自持有一条可以用代码计数的标准。',
          '如果标准是模型写作时就能满足的，比如六个答案里至少两个是功能词，闭环就成立。采纳规则之后，模拟教师在后续 32 份初稿里一份都不用改；拒绝规则时，31 份里有 30 份要改。',
          '如果标准只能看整组选项才能判断，比如正确答案不能是最长的选项，规则进入了每一份 prompt，结果毫无变化，因为模型是一个选项一个选项地写，看不到整组。把同一条规则改成代码里的阻断检查后，能凭长度猜出答案的题从 84 道中的 31 道降到 17 道，模型调用次数是原来的 2.8 倍。产品中以告警的形式提供。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Two teachers, three sessions', zh: '两位教师，三轮试点' },
      body: {
        en: [
          'Two practising teachers piloted the system in October 2026, each working alone from a study form: correct four drafts, ask once for rules, generate two more. Most corrections replaced a distractor, and in all three sessions the notes named items with more than one defensible answer. Each teacher accepted all four rules offered. Two came from written notes, not edits: six of one teacher\'s seven notes said five of the six gaps tested verbs.',
          'The one usable answer about control was negative. Teacher A wrote that they had no say in which observations became rules, how the rules were worded, or which won when two conflicted. Accepting or refusing a finished rule did not feel like control. Teachers can now reword a proposal first; ranking conflicting rules is the next piece of work. The pilot also exposed three faults the checks had missed, and each now has a check.',
        ],
        zh: [
          '2026 年 10 月，两位一线教师参加了试点。两人各自按研究表单独立操作：修改四份初稿，让系统归纳一次规则，然后再生成两份。修改大多是替换干扰项；三轮试点的书面记录都提到，有些题不止一个说得通的答案。系统给两位教师各提出四条规则，两人全部采纳。其中两条来自书面记录，不是来自修改。一位教师的七条记录里有六条提到，六个空里有五个考的是动词，系统据此归纳出「各空应覆盖不同词类」的规则。',
          '关于掌控感，唯一可用的回答是负面的。教师 A 写道，哪些观察会变成规则、规则怎么措辞、两条规则冲突时以哪条为准，自己都没有发言权。面对一条已经写好的规则，只能采纳或拒绝，这算不上掌控。现在教师已经可以先改写建议的措辞再采纳；给冲突的规则排定先后，是下一步的工作。试点还暴露出三个检查漏掉的问题，其中一个是 prompt 要求模型绝不能写电子邮件，而手册规定的恰恰是邮件。这三个问题现在都有了对应的检查。',
        ],
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this ended', zh: '结题时的状态' },
      intro: {
        en: [
          'Each component is labelled with how far its evidence goes.',
        ],
        zh: [
          '每一项都标明了证据走到了哪一步。',
        ],
      },
      items: [
        {
          label: { en: 'Authoring and practice, 15 item types, exports', zh: '出题与练习、15 种题型、导出功能' },
          state: 'shipped',
          detail: {
            en: 'Deployed and used for classroom materials, with Word, PDF, PowerPoint and slide export. 360 of 373 logged generations passed the specification check first time, and 48 regression scripts run the shipped code on real inputs.',
            zh: '已上线并用于制作课堂材料，可导出 Word、PDF、PowerPoint 和幻灯片。记录在案的 373 次生成中，360 次一次通过规格检查；48 个回归脚本用真实输入运行线上代码。',
          },
        },
        {
          label: { en: 'Teacher pilot', zh: '教师试点' },
          state: 'piloted',
          detail: {
            en: 'Two practising teachers, three unmoderated sessions. It exposed three faults the checks had missed, all now checked.',
            zh: '两位一线教师，三轮无人在场的独立使用，暴露出三个检查漏掉的问题，现在都有了对应的检查。',
          },
        },
        {
          label: { en: 'Answer-correctness checks', zh: '答案正确性检查' },
          state: 'piloted',
          detail: {
            en: 'Found an item with two defensible answers that every structural check passed, and drafts a candidate could pass without reading. The model judges are calibrated against the author\'s blind labels, not yet against teachers.',
            zh: '找到了一道通过所有结构检查、却有两个说得通答案的题，也发现了不读文章就能做对的初稿。这些评判模型只和作者的盲标结果对照过，还没有和教师的判断对照过。',
          },
        },
        {
          label: { en: 'Effect of accepted rules on generation', zh: '已采纳规则对生成的影响' },
          state: 'piloted',
          detail: {
            en: 'Two word-class rules changed drafts over 40 paired topics per part, after Holm correction, and a tagger agreed. Rules needing a judgement at every gap did not replicate with a second judge.',
            zh: '每个题型 40 组配对话题上，两条词类规则在 Holm 校正后仍改变了初稿，词性标注器也证实了这一点。需要逐空判断的规则，没有得到第二个评判模型的复现。',
          },
        },
        {
          label: { en: 'Rule versus code check', zh: '规则与代码检查' },
          state: 'piloted',
          detail: {
            en: 'With simulated teachers: a rule ended correction for a standard the model meets while writing, and did nothing for one that holds across a set of options. As a code check, that second standard\'s cue fell from 31 to 17 of 84 questions.',
            zh: '用模拟教师测试：模型写作时就能满足的标准，规则一经采纳便不必再改；需要看整组选项才能判断的标准，规则毫无作用。后者改成代码检查后，线索从 84 道题中的 31 道降到 17 道。',
          },
        },
        {
          label: { en: 'Teacher intervention metric', zh: '教师干预度量' },
          state: 'instrumented',
          detail: {
            en: 'The event log and frozen drafts record what the measure needs. Whether a teacher\'s correcting falls over time needs several sessions per teacher; the pilot had one per part.',
            zh: '事件日志和冻结初稿已经记下了这项度量需要的数据。教师的修改量是否会随时间下降，需要每位教师使用多轮，而试点中每个题型只有一轮。',
          },
        },
        {
          label: { en: 'Classical item analysis', zh: '经典项目分析' },
          state: 'instrumented',
          detail: {
            en: 'Difficulty, discrimination and distractor analysis are built and shown to the teacher, and wait on real class responses.',
            zh: '难度、区分度和干扰项分析都已做好并展示给教师，只差真实的班级作答数据。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'What I would argue with', zh: '这个设计里我自己也会质疑的地方' },
      body: {
        en: [
          'The vocabulary check only asks whether words are on the level\'s list, so a fully compliant text can still be too hard. And each prompt carries a short summary of the teacher\'s recent edits that never passes through their decision and does not show in the generation record. Showing it, with a switch to turn it off, is further work.',
          'The model judges were measured against 104 items I labelled blind. One rater who built the system is not a panel of teachers. The next study is the one the pilot was cut down from: several sessions per teacher in one part, with accepted rules withheld from a random share of drafts.',
        ],
        zh: [
          '词汇审计只检查词在不在该级别的词表里，所以一段完全合规的文本，读起来可能依然偏难。另外，每次出题的 prompt 里还附带一段该教师近期修改的摘要，它不经过教师同意，生成记录里也看不到。把它显示出来，并提供关闭开关，已列入后续工作。',
          '几个评判模型都和我盲标的 104 道题做过对照。可标注者只有一个人，而且是系统的作者，代替不了一组教师。下一项研究就是试点当初缩减掉的那部分：让每位教师在同一题型上使用多轮，并对随机一部分初稿暂停已采纳的规则。',
        ],
      },
    },
  ],
};
