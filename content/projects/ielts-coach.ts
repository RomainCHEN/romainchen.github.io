import type { Project } from '../types';

/**
 * IELTS Coach. The learner-side counterpart to PaperCraft.
 *
 * Evidence discipline: a working tool with a defensible instructional-design
 * argument and no efficacy evidence. Said plainly on the page.
 */
export const ieltsCoach: Project = {
  slug: 'ielts-coach',
  index: '03',
  title: 'IELTS Coach',
  subtitle: {
    en: 'An agent that refuses to write until it has interviewed you',
    zh: '一个不先访谈你就不肯动笔的 agent',
  },
  blurb: {
    en: 'An open-source agent skill for IELTS speaking and writing, built on the premise that a model answer you cannot remember is worthless.',
    zh: '一个面向雅思口语和写作的开源 agent skill。出发点很简单，你记不住的范文等于没有。',
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
    { en: 'Rubric alignment', zh: '对齐评分标准' },
    { en: 'Open source', zh: '开源' },
  ],
  hero: {
    src: '/work/ielts-coach/terminal-session.webp',
    w: 2280,
    h: 1162,
    alt: {
      en: 'A terminal session: the topic discovery server starts on localhost, waits for the learner to submit the form, writes their answers to JSON, and exits.',
      zh: '一段终端会话。话题采集服务在本机启动，等学习者提交表单，把答案写进 JSON，然后退出。',
    },
  },
  links: [
    {
      label: { en: 'Repository', zh: '代码仓库' },
      href: 'https://github.com/RomainCHEN/ielts-coach',
      primary: true,
    },
  ],
  facts: [
    {
      label: { en: 'Topic coverage', zh: '话题覆盖' },
      value: { en: '102 topics, none repeated', zh: '102 个话题，不重复' },
    },
    { label: { en: 'Version', zh: '版本' }, value: { en: 'v3.0, MIT licensed', zh: 'v3.0，MIT 许可' } },
    {
      label: { en: 'Rubric basis', zh: '评分依据' },
      value: { en: 'Public IELTS band descriptors', zh: '雅思公开评分标准' },
    },
    {
      label: { en: 'Efficacy evidence', zh: '效果证据' },
      value: { en: 'None. See below.', zh: '没有，下面会说清楚。' },
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
          '找任何一个助手要一篇雅思作文，四秒钟就能拿到 250 个通顺的英文词。Firstly、Secondly、In conclusion。它在机器读的评分表上分数不低，可它会害了考生。道理很简单，考场上你只调得出属于自己的东西。',
          '所以这个工具把顺序倒过来了。它写第一句话之前，先访谈你。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The design claim', zh: '设计主张' },
      body: {
        en: [
          'A model answer has to satisfy two constraints that pull against each other. It must be calibrated to an external standard, meaning the four public band criteria: task response, coherence and cohesion, lexical resource, grammatical range and accuracy. And it must be *retrievable* by one specific person under time pressure, months later.',
          'Generic generation satisfies the first and ignores the second. The fix is not better prose. It is changing what the model is allowed to invent: the argument, the examples and the stance come from the learner, and the model contributes calibration and polish. That is the same division of labour I am studying on the teacher side, applied to a learner.',
          'The consequence is a genuinely different interaction. Each new topic opens a structured mini-interview, delivered as a multi-step web form rather than a chat interrogation, because a form lets you think at your own pace and revise, which a conversational turn does not. Only then does generation begin, and it begins from your material.',
        ],
        zh: [
          '一篇范文要同时满足两个互相拉扯的条件。一头是外部标准，也就是雅思公开的四项，任务回应、连贯与衔接、词汇资源、语法多样性与准确性。同时它还得让某一个具体的人，在几个月之后、在考场的时间压力下**调得出来**。',
          '通用生成满足了前者，忽略了后者。要修的不是文笔。得重新划定模型可以发明的范围。论点、例子、立场都来自学习者，模型只负责校准和打磨。这跟我在教师那边研究的是同一种分工，只是换到了学生身上。',
          '结果是一种确实不一样的交互。每个新话题都会先做一次结构化的小访谈，形式是多步网页表单，不是聊天式追问。表单允许你按自己的节奏想，想错了还能回头改；对话轮次做不到这一点。只有在这之后生成才开始，而且是从你自己的材料开始。',
        ],
      },
      note: {
        en: 'The elicitation step is not a UX nicety. It is where the pedagogy lives.',
        zh: '先采集这一步不是界面上的锦上添花，教学法就在这一步里。',
      },
    },
    {
      kind: 'figure',
      src: '/work/ielts-coach/form-filled.webp',
      w: 2460,
      h: 3093,
      alt: {
        en: "The topic discovery form for the topic Music, filled in with a learner's own recollections: what they listen to while working, and a song tied to a specific memory of a first interpreting competition.",
        zh: '音乐话题的采集表单，里面填的是学习者自己的回忆，工作时听什么，还有一首和第一次交传比赛有关的歌。',
      },
      caption: {
        en: 'Elicitation before generation, running locally. Look at what the questions are actually after: not an opinion on music, but a specific afternoon in a car. The form supports chart upload and clipboard paste so Writing Task 1 material enters the same pipeline, and answers persist as JSON so a topic never has to be re-interviewed.',
        zh: '先采集再生成，全程跑在本机。注意这些问题真正想问的东西。它要的是车里那个具体的下午，不是你对音乐的看法。表单支持上传图表和粘贴剪贴板，写作 Task 1 的材料走同一条管线。答案以 JSON 存下来，同一个话题不用再访谈第二遍。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Three problems worth naming', zh: '三个值得点名的问题' },
      body: {
        en: [
          'Detectability is a design target rather than an afterthought. The skill explicitly screens its own output for the tells: dashes used as interruptions, scare quotes, mechanical linkers, "this essay will discuss" openings. Enforcing an anti-pattern list at generation time works better than asking a model to "write naturally", because the list is checkable and the instruction is not.',
          'The study plan has to survive a missed day. Learners miss sessions, a plan that does not reschedule is abandoned after the first slip. State is kept in JSON across sessions, so missed items are redistributed and weak areas are pushed forward rather than silently dropped.',
          'Vision capability should not dictate which model a learner uses. Writing Task 1 requires reading a chart, which locks a learner into a multimodal model. The skill ships a small MCP server that proxies images through a separate vision endpoint, so a text-only model can still handle chart tasks. It is a plumbing decision, but it is the difference between the tool being usable on the model you already have and not.',
        ],
        zh: [
          '会不会被看出是 AI 写的，这是个设计目标，不是事后补救。这个 skill 会主动筛查自己输出里的破绽。当插入语用的破折号、带讽刺意味的引号、机械的连接词，还有 this essay will discuss 这类开头。在生成时跑一份反模式清单，比让模型写得自然一点有效得多，因为清单能核查，那句指令不能。',
          '学习计划得扛住漏练。学习者一定会漏，而不会自动重排的计划，第一次中断之后就被扔掉了。状态跨会话存在 JSON 里，漏掉的内容会重新分配，薄弱环节会被往前提，而不是悄悄消失。',
          '有没有视觉能力，不该反过来决定你用哪个模型。写作 Task 1 需要读图，这就把学习者锁在多模态模型上。这个 skill 自带一个小的 MCP 服务，把图片转给单独的视觉端点处理，于是纯文本模型也能做图表题。这只是管道层面的取舍，可它决定了这个工具在你手上现有的模型上跑不跑得起来。',
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
        en: 'Output is a printable document, not a chat log. Answers stay reviewable months later, which is the only timescale that matters for exam preparation.',
        zh: '产出的是一份可打印的文档，不是一段聊天记录。几个月后还能翻出来复习，备考在意的就是这个时间尺度。',
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this actually stands', zh: '现在到了哪一步' },
      intro: {
        en: [
          'This is a working, published tool with a defensible design argument and no evidence that it improves scores. I am not going to pretend otherwise, and the honest version is more useful anyway: it names the study that would settle it.',
        ],
        zh: [
          '这是一个已经发布、能用的工具，设计论证站得住，但没有任何证据说明它能提分。我不打算装作有。说实话反而更有用，因为它顺带说清了什么样的研究才能给出结论。',
        ],
      },
      items: [
        {
          label: {
            en: 'Tool, 102 topics, rubric-aligned generation',
            zh: '工具本体、102 个话题、对齐评分标准的生成',
          },
          state: 'shipped',
          detail: {
            en: 'Published under MIT, documented in English and Chinese, in real personal use.',
            zh: '以 MIT 许可发布，中英文文档齐备，自己在真用。',
          },
        },
        {
          label: { en: 'Elicitation-before-generation workflow', zh: '“先采集后生成”的流程' },
          state: 'shipped',
          detail: {
            en: 'Web form, persistent per-topic state, image and clipboard input for chart tasks.',
            zh: '网页表单、按话题持久化的状态、图表题的图片与剪贴板输入。',
          },
        },
        {
          label: {
            en: 'Does personalised material improve retention or scores?',
            zh: '用自己的素材，真的更记得住、更提分吗？',
          },
          state: 'planned',
          detail: {
            en: 'Untested. The design borrows from well-supported ideas about personal relevance and generation effects, but borrowing a rationale is not evidence. A within-subject comparison of recall for self-sourced versus model-sourced answers would be the cheapest informative study, and it has not been run.',
            zh: '没测过。设计借用了关于个人相关性和生成效应的成熟观点，但借来一个理由不等于有证据。最省钱又有信息量的做法，是用被试内设计比一比自己出的素材和模型出的素材，哪个记得更牢。这个实验还没做。',
          },
        },
        {
          label: { en: 'Anti-detection claims', zh: '“不会被认出是 AI”这个说法' },
          state: 'planned',
          detail: {
            en: 'The repository describes detection risk as near-zero. That is a design intention, not a measurement, and I would drop the claim before I would defend it. Testing it against actual detectors is straightforward and pending.',
            zh: '仓库文档把被识别的风险写成接近零。那是设计意图，不是测量结果。要我在这个说法和撤掉它之间选，我会撤掉。拿真实检测器去测很容易，只是还没做。',
          },
        },
      ],
    },
  ],
};
