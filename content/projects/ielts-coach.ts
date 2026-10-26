import type { Project } from '../types';

/**
 * IELTS Coach. The learner-side counterpart to PaperCraft.
 *
 * The page describes the tool and its design. At the owner's request it carries
 * no evidence section; it also makes no claim about scores or retention.
 */
export const ieltsCoach: Project = {
  slug: 'ielts-coach',
  index: '03',
  title: 'IELTS Coach',
  subtitle: {
    en: 'Agent skill for customised IELTS Speaking and Writing preparation',
    zh: '个性化雅思口语与写作备考 agent skill',
  },
  blurb: {
    en: 'An open-source agent skill for IELTS speaking and writing, built on the premise that a model answer you cannot remember is worthless.',
    zh: '一个面向雅思口语与写作的开源 agent skill，出发点很简单：记不住的范文没有用。',
  },
  period: { en: 'July 2026', zh: '2026 年 7 月' },
  role: { en: 'Sole author', zh: '独立完成' },
  discipline: {
    en: 'Instructional design · Agent architecture · Language assessment',
    zh: '教学设计 · Agent 架构 · 语言测评',
  },
  tags: [
    { en: 'Agent skill', zh: 'Agent skill' },
    'MCP',
    'Python',
    { en: 'Rubric alignment', zh: '对照评分标准' },
    { en: 'Open source', zh: '开源' },
  ],
  hero: {
    src: '/work/ielts-coach/cover.webp',
    w: 2400,
    h: 880,
    thumb: { src: '/work/ielts-coach/cover-thumb.webp', w: 1248, h: 936 },
    alt: {
      en: 'The IELTS Coach cover: the tagline "Interviews you first, then writes band-calibrated model answers in your own voice", four feature tags, and a Part 2 cue card from the 2026 September to December bank with a target band 7.0 badge.',
      zh: 'IELTS Coach 封面。标语为「先访谈你，再用你自己的声音写出对标目标分数的范文」，下方是四个功能标签。右侧是一张 2026 年 9 至 12 月题库的 Part 2 话题卡，标注目标分数 7.0。',
    },
  },
  links: [
    {
      label: { en: 'Repository', zh: '代码仓库' },
      href: 'https://github.com/RomainCHEN/ielts-coach',
      primary: true,
    },
    {
      label: { en: 'Live summary site demo', zh: '备考总结站点演示' },
      href: 'https://ielts-sprint-puce.vercel.app',
    },
  ],
  facts: [
    {
      label: { en: 'Topic coverage', zh: '话题覆盖' },
      value: { en: '100 topics, none repeated', zh: '100 个话题，不重复' },
    },
    {
      label: { en: 'Question bank', zh: '题库' },
      value: { en: '2026 Sep–Dec season (cut-off 24 Sep)', zh: '2026 年 9–12 月季度（截至 9 月 24 日）' },
    },
    { label: { en: 'Version', zh: '版本' }, value: { en: 'v4.0, MIT licensed', zh: 'v4.0，MIT 许可' } },
    {
      label: { en: 'Rubric basis', zh: '评分依据' },
      value: {
        en: 'Public IELTS band descriptors (Writing, May 2023)',
        zh: '雅思公开评分标准（写作，2023 年 5 月版）',
      },
    },
  ],
  featured: true,
  sections: [
    {
      kind: 'lede',
      body: {
        en: [
          'Ask any assistant for an IELTS essay and you get 250 competent words back in four seconds. Firstly, Secondly, In conclusion. It will score well on a rubric read by a machine and it will fail the candidate, for one reason: under exam pressure you can only retrieve what is yours.',
          'So this tool inverts the interaction. Before it writes a single sentence, it interviews you.',
        ],
        zh: [
          '随便找一个 AI 助手写雅思作文，四秒钟就能拿到 250 个通顺的英文词，Firstly、Secondly、In conclusion 一应俱全。这样的文章机器打分不低，对考生却没什么用：考场上时间紧，人能用上的只有真正属于自己的内容。',
          '所以这个工具把交互的顺序倒了过来，动笔之前，它会先访谈学习者。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The design claim', zh: '设计主张' },
      body: {
        en: [
          'A model answer has to satisfy two constraints that pull against each other. It must be calibrated to an external standard, meaning the four public band criteria: task response, coherence and cohesion, lexical resource, grammatical range and accuracy. And it must be *retrievable* by one specific person under time pressure, months later.',
          'Generic generation satisfies the first and ignores the second. What needs changing is what the model is allowed to invent: the argument, the examples and the stance come from the learner, and the model contributes calibration and polish. That is the same division of labour I am studying on the teacher side, applied to a learner.',
          'This changes the interaction. Each new topic opens a structured mini-interview, delivered as a multi-step web form rather than a chat interrogation, because a form lets you think at your own pace and revise, which a conversational turn does not. Only then does generation begin, and it begins from your material.',
        ],
        zh: [
          '一篇范文要同时满足两个互相拉扯的要求。一是达到外部标准，也就是雅思公开的四项评分维度：任务回应、连贯与衔接、词汇资源、语法多样性与准确性。二是让一个具体的人几个月后在考场上**还记得起来**。',
          '通用生成只顾得上前者。要改的是模型可以生成哪些内容：论点、例子和立场都来自学习者本人，模型只做校准和打磨。我在教师那边研究的也是这种分工，只是这里的对象换成了学习者。',
          '交互方式也跟着变了。每开始一个新话题，系统会做一次结构化的小访谈。访谈用的是多步网页表单，不是聊天式的追问，学习者可以按自己的节奏想、随时改，一问一答的对话给不了这种余地。访谈结束才开始生成，用的也是学习者自己的素材。',
        ],
      },
      note: {
        en: 'The elicitation step carries the pedagogy. Everything the model can calibrate afterwards comes out of it.',
        zh: '教学设计的关键在采集这一步，模型后面能校准的一切都出自这里。',
      },
    },
    {
      kind: 'figure',
      src: '/work/ielts-coach/form-filled.webp',
      w: 2460,
      h: 3093,
      alt: {
        en: "The topic discovery form for the topic Music, filled in with a learner's own recollections: what they listen to while working, and a song tied to a specific memory of a first interpreting competition.",
        zh: '音乐话题的采集表单，填入的是学习者自己的回忆，包括工作时听什么，以及一首与第一次交传比赛有关的歌。',
      },
      caption: {
        en: 'Elicitation before generation, running locally. The questions ask for a specific afternoon in a car, not an opinion on music. The form supports chart upload and clipboard paste so Writing Task 1 material enters the same pipeline, and answers persist as JSON so a topic never has to be re-interviewed.',
        zh: '采集和生成都在本机运行。表单问的是车里那个具体的下午，不是对音乐的泛泛看法。它也能上传图表、粘贴剪贴板内容，写作 Task 1 的材料走的是同一条管线。回答存成 JSON，同一个话题不用再访谈一遍。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Three design problems', zh: '三个设计问题' },
      body: {
        en: [
          'Detectability is a design target. The skill screens its own output for the tells: dashes used as interruptions, scare quotes, mechanical linkers, "this essay will discuss" openings. Enforcing an anti-pattern list at generation time works better than asking a model to "write naturally", because the list is checkable and the instruction is not.',
          'The study plan has to survive a missed day. Learners miss sessions, and a plan that does not reschedule is abandoned after the first slip. State is kept in JSON across sessions, so missed items are redistributed and weak areas move forward instead of disappearing. The same state survives a change of exam season: when a new question bank arrives, topics you already prepared keep counting if they carried over, so a rollover does not reset your progress to zero.',
          'Vision capability should not dictate which model a learner uses. Writing Task 1 requires reading a chart, which locks a learner into a multimodal model. The skill ships a small MCP server that proxies images through a separate vision endpoint, so a text-only model can still handle chart tasks. That is plumbing, and it decides whether the tool runs on the model a learner already has.',
        ],
        zh: [
          '输出读起来不能像 AI 写的，这是一开始就定下的目标。这个 skill 会自查几类典型痕迹：当插入语用的破折号、带讽刺意味的引号、机械的连接词，以及 this essay will discuss 一类的开头。生成时对照一份反模式清单，比让模型「写得自然一点」管用，因为清单能逐条核查，「自然一点」查不了。',
          '学习计划要经得起中断。练习总会漏掉几次，不能自动重排的计划，往往第一次漏掉就没人再用了。学习状态以 JSON 跨会话保存，漏掉的内容会重新排进计划，薄弱的地方提前安排，不会就这样搁下。换季也一样：新题库上线后，之前准备过、这一季仍然沿用的话题照样计入进度，不会清零。',
          '用哪个模型，不该取决于它能不能读图。写作 Task 1 要读图，本来只有多模态模型能做。所以这个 skill 带了一个轻量的 MCP 服务，把图片转给单独的视觉端点处理，纯文本模型也能做图表题。这是工程上的衔接，却决定了学习者能不能用手头已有的模型。',
        ],
      },
    },
    {
      kind: 'figure',
      src: '/work/ielts-coach/html-answer-card.webp',
      w: 760,
      h: 350,
      alt: {
        en: 'A generated answer card in the study document, with highlighted vocabulary and structure notes.',
        zh: '学习文档里的一张答案卡片，带高亮词汇和结构说明。',
      },
      caption: {
        en: 'Output is a printable document, not a chat log. Answers stay reviewable months later, which is the timescale exam preparation runs on.',
        zh: '最后得到的是一份能打印的文档，不是一段聊天记录。几个月后还能翻出来复习，备考恰好需要这么长的时间。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The bank, and keeping it current', zh: '题库，以及如何保持最新' },
      body: {
        en: [
          'The content is only useful if it matches the live exam. The current bank is the 2026 September–December season, cut off on 24 September and parsed straight from the season PDF: 100 speaking topics, of which 88 apply to mainland candidates. 48 of them carried over from the May–August season, so a learner who prepared under the previous bank keeps that work.',
          'When a new season arrives, a validated builder reparses the PDF and refuses to write if any section count disagrees with the count printed in the source, so a silent parser error cannot corrupt the bank. A migration step then carries prepared topics over. A question bank that cannot be updated goes stale as soon as the exam board rotates its topics.',
        ],
        zh: [
          '内容要和眼下的真题对得上才有用。现在用的是 2026 年 9 至 12 月这一季的题库，截至 9 月 24 日，直接从季度 PDF 解析得到，共 100 个口语话题，其中 88 个适用于内地考生。有 48 个话题沿用自 5 至 8 月，上一季准备过的学习者，这部分功夫没有白费。',
          '换季时，带校验的构建脚本会重新解析 PDF。某一部分的话题数和 PDF 上标的对不上，脚本就拒绝写入，解析悄悄出错也不会混进题库。之后的迁移步骤再把已经准备过的话题接过来。题库要是不能更新，考试方一换题就过时了。',
        ],
      },
    },
    {
      kind: 'table',
      heading: { en: 'Current bank, by section', zh: '当前题库，按部分拆分' },
      head: [
        { en: 'Section', zh: '部分' },
        { en: 'Topics', zh: '话题数' },
      ],
      rows: [
        [
          { en: 'Part 1 (new / retained / essential)', zh: 'Part 1（新增 / 沿用 / 必备）' },
          { en: '11 / 17 / 5', zh: '11 / 17 / 5' },
        ],
        [
          { en: 'Part 2 & 3 (new / retained)', zh: 'Part 2 & 3（新增 / 沿用）' },
          { en: '28 / 27', zh: '28 / 27' },
        ],
        [
          { en: 'Non-mainland (Part 1 / Part 2 & 3)', zh: '非内地（Part 1 / Part 2 & 3）' },
          { en: '6 / 6', zh: '6 / 6' },
        ],
        [
          { en: 'Mainland candidates / all', zh: '内地考生 / 全部' },
          { en: '88 / 100', zh: '88 / 100' },
        ],
      ],
      caption: {
        en: '2026 Sep–Dec season. 48 topics carried over from May–Aug 2026, so prior preparation keeps counting.',
        zh: '2026 年 9 至 12 月季度。其中 48 个话题沿用自 2026 年 5 至 8 月，先前的准备仍然计入。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'A site at the end, not just a chat', zh: '结束时交付站点，而不只是对话记录' },
      body: {
        en: [
          'When a preparation cycle ends, the skill builds a summary website from everything you practised: a countdown hub with your targets and practice stats, a speaking sprint sheet carrying your own story cards, Task 1 and Task 2 template sheets, a coverage review that lists the topics you have not touched in red, and a searchable bank of every highlight expression you collected.',
          'A learner walks away with something they can open on a phone the week before the exam, which is when it is actually needed, instead of a chat transcript to scroll back through. The data stays local by default, and publishing the site is the learner\'s own call.',
        ],
        zh: [
          '备考结束时，这个 skill 会把学习者练过的所有内容做成一个总结站点。倒计时主页汇总目标和练习数据，口语冲刺页收着学习者自己的故事卡片，Task 1 和 Task 2 各有一页模板。覆盖情况复盘页用红色标出还没练过的话题，另外还有一个可以搜索的高亮表达合集。',
          '考前一周最需要材料的时候，学习者手机上就能直接打开它，不必在聊天记录里来回翻找。数据默认存在本机，站点公不公开由学习者自己决定。',
        ],
      },
      note: {
        en: 'The published demo uses a fictional learner. The real artefact contains your personal stories, so it stays private unless you choose otherwise.',
        zh: '公开的演示用的是一位虚构的学习者。真实的站点里有学习者本人的故事，除非本人选择公开，否则一直是私有的。',
      },
    },
  ],
};
