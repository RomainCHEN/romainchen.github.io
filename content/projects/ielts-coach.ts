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
    zh: '一个在访谈你之前拒绝动笔的 agent',
  },
  blurb: {
    en: 'An open-source agent skill for IELTS speaking and writing, built on the premise that a model answer you cannot remember is worthless.',
    zh: '一个面向雅思口语与写作的开源 agent skill，前提假设是：一个你记不住的范文毫无价值。',
  },
  period: { en: 'July 2026', zh: '2026 年 7 月' },
  role: { en: 'Sole author', zh: '独立作者' },
  discipline: {
    en: 'Instructional design · Agent architecture · Language assessment',
    zh: '教学设计 · Agent 架构 · 语言测评',
  },
  tags: ['Agent skill', 'MCP', 'Python', 'Rubric alignment', 'Open source'],
  hero: {
    src: '/work/ielts-coach/terminal-session.webp',
    w: 1600,
    h: 868,
    alt: {
      en: 'A terminal session: the topic discovery server starts on localhost, waits for the learner to submit the form, writes their answers to JSON, and exits.',
      zh: '一段终端会话：话题采集服务在本机启动、等待学习者提交表单、把答案写入 JSON，然后退出。',
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
    { label: { en: 'Topic coverage', zh: '话题覆盖' }, value: { en: '102 topics, none repeated', zh: '102 个话题，不重复' } },
    { label: { en: 'Version', zh: '版本' }, value: { en: 'v3.0, MIT licensed', zh: 'v3.0，MIT 许可' } },
    { label: { en: 'Rubric basis', zh: '评分依据' }, value: { en: 'Public IELTS band descriptors', zh: '雅思公开评分标准' } },
    { label: { en: 'Efficacy evidence', zh: '效果证据' }, value: { en: 'None. See below.', zh: '没有。见下文说明。' } },
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
          '向任何助手要一篇雅思作文，四秒钟就能拿到 250 个字通顺的英文。Firstly、Secondly、In conclusion。它在机器阅读的评分表上会拿到不错的分数，然后让考生失败——原因只有一个：在考场压力下，你只能取回属于你自己的东西。',
          '所以这个工具把交互顺序反过来了。在写下第一句话之前，它先访谈你。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The design claim', zh: '设计主张' },
      body: {
        en: [
          'A model answer has to satisfy two constraints that pull against each other. It must be calibrated to an external standard — the four public band criteria: task response, coherence and cohesion, lexical resource, grammatical range and accuracy. And it must be *retrievable* by one specific person under time pressure, months later.',
          'Generic generation satisfies the first and ignores the second. The fix is not better prose. It is changing what the model is allowed to invent: the argument, the examples and the stance come from the learner, and the model contributes calibration and polish. That is the same division of labour I am studying on the teacher side, applied to a learner.',
          'The consequence is a genuinely different interaction. Each new topic opens a structured mini-interview — delivered as a multi-step web form rather than a chat interrogation, because a form lets you think at your own pace and revise, which a conversational turn does not. Only then does generation begin, and it begins from your material.',
        ],
        zh: [
          '一篇范文必须同时满足两个互相拉扯的约束。它必须对齐一个外部标准——雅思公开的四项评分标准：任务回应、连贯与衔接、词汇资源、语法多样性与准确性。同时它必须能被某个具体的人在时间压力下、几个月之后**取回**。',
          '通用生成满足了第一条，忽略了第二条。修正方式不是把文笔写得更好，而是改变模型被允许发明的东西：论点、例证与立场来自学习者，模型只贡献校准与打磨。这与我在教师侧研究的是同一种分工，只是换到了学习者身上。',
          '结果是一种确实不同的交互。每个新话题都会触发一次结构化的小型访谈——以多步网页表单而非聊天式盘问的方式呈现，因为表单允许你按自己的节奏思考并修改，而对话轮次不允许。只有在这之后生成才开始，并且从你的素材开始。',
        ],
      },
      note: {
        en: 'The elicitation step is not a UX nicety. It is where the pedagogy lives.',
        zh: '"先采集"这一步不是 UX 上的锦上添花，教学法就住在那里。',
      },
    },
    {
      kind: 'figure',
      src: '/work/ielts-coach/form-filled.webp',
      w: 900,
      h: 1031,
      alt: {
        en: 'The topic discovery form for the topic Music, filled in with a learner\'s own recollections: what they listen to while working, and a song tied to a specific memory of a first interpreting competition.',
        zh: '"音乐"话题的采集表单，填入了学习者自己的回忆：工作时听什么，以及一首与第一次交传比赛有关的歌。',
      },
      caption: {
        en: 'Elicitation before generation, running locally. Look at what the questions are actually after: not an opinion on music, but a specific afternoon in a car. The form supports chart upload and clipboard paste so Writing Task 1 material enters the same pipeline, and answers persist as JSON so a topic never has to be re-interviewed.',
        zh: '先采集、后生成，全程在本机运行。注意这些问题真正想要的东西：不是关于音乐的看法，而是车里的某个具体下午。表单支持图表上传与剪贴板粘贴，使写作 Task 1 的材料进入同一条管线；答案以 JSON 持久化，因此同一个话题不必重复访谈。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Three problems worth naming', zh: '三个值得点名的问题' },
      body: {
        en: [
          '**Detectability is a design target, not an afterthought.** The skill explicitly screens its own output for the tells: em dashes, scare quotes, mechanical linkers, "this essay will discuss" openings. Enforcing an anti-pattern list at generation time works better than asking a model to "write naturally", because the list is checkable and the instruction is not.',
          '**A study plan that survives a missed day.** Learners miss sessions; a plan that does not reschedule is abandoned after the first slip. State is kept in JSON across sessions, so missed items are redistributed and weak areas are pushed forward rather than silently dropped.',
          '**Vision capability should not dictate model choice.** Writing Task 1 requires reading a chart, which locks a learner into a multimodal model. The skill ships a small MCP server that proxies images through a separate vision endpoint, so a text-only model can still handle chart tasks. It is a plumbing decision, but it is the difference between the tool being usable on the model you already have and not.',
        ],
        zh: [
          '**"能不能被识别为 AI"是设计目标，不是事后补救。** 这个 skill 会显式筛查自己输出中的特征：em dash、引号式讽刺、机械连接词、"this essay will discuss"式开头。在生成时执行一份反模式清单，比要求模型"写得自然一点"有效得多——因为清单可核查，而那句指令不可核查。',
          '**一个能扛住"漏掉一天"的学习计划。** 学习者一定会漏掉练习；不会重新排期的计划在第一次中断后就被放弃了。状态以 JSON 跨会话保存，因此漏掉的内容会被重新分配，薄弱环节会被提前，而不是悄悄消失。',
          '**视觉能力不应该决定模型选择。** 写作 Task 1 需要读图，这会把学习者锁定在多模态模型上。这个 skill 附带一个小型 MCP 服务，把图像代理到独立的视觉端点，于是纯文本模型也能处理图表任务。这是管道层面的决定，但它决定了工具能不能在你手上已有的模型上跑起来。',
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
        zh: '学习文档中的一张答案卡片，含高亮词汇与结构说明。',
      },
      caption: {
        en: 'Output is a printable document, not a chat log. Answers stay reviewable months later, which is the only timescale that matters for exam preparation.',
        zh: '产物是一份可打印的文档，而不是一段聊天记录。答案在几个月后仍然可供复习——而这是备考唯一真正重要的时间尺度。',
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this actually stands', zh: '目前的真实进度' },
      intro: {
        en: [
          'This is a working, published tool with a defensible design argument and no evidence that it improves scores. I am not going to pretend otherwise, and the honest version is more useful anyway: it names the study that would settle it.',
        ],
        zh: [
          '这是一个已发布、可用的工具，有一个站得住脚的设计论证，但没有任何证据表明它能提高分数。我不打算假装相反。诚实的版本反而更有用：它点明了什么样的研究才能定论。',
        ],
      },
      items: [
        {
          label: { en: 'Tool, 102 topics, rubric-aligned generation', zh: '工具本体、102 个话题、对齐评分标准的生成' },
          state: 'shipped',
          detail: {
            en: 'Published under MIT, documented in English and Chinese, in real personal use.',
            zh: '以 MIT 许可发布，提供中英文文档，处于真实的个人使用中。',
          },
        },
        {
          label: { en: 'Elicitation-before-generation workflow', zh: '"先采集后生成"工作流' },
          state: 'shipped',
          detail: {
            en: 'Web form, persistent per-topic state, image and clipboard input for chart tasks.',
            zh: '网页表单、按话题持久化的状态、图表任务的图像与剪贴板输入。',
          },
        },
        {
          label: { en: 'Does personalised material improve retention or scores?', zh: '个性化素材能否提升记忆或分数？' },
          state: 'planned',
          detail: {
            en: 'Untested. The design borrows from well-supported ideas about personal relevance and generation effects, but borrowing a rationale is not evidence. A within-subject comparison of recall for self-sourced versus model-sourced answers would be the cheapest informative study, and it has not been run.',
            zh: '未经检验。设计借用了关于个人相关性与生成效应的成熟观点，但借来一个理由不等于证据。对"自源答案"与"模型来源答案"的回忆表现做被试内对比，会是成本最低且有信息量的研究——它尚未开展。',
          },
        },
        {
          label: { en: 'Anti-detection claims', zh: '"不被识别为 AI"的主张' },
          state: 'planned',
          detail: {
            en: 'The repository describes detection risk as near-zero. That is a design intention, not a measurement, and I would drop the claim before I would defend it. Testing it against actual detectors is straightforward and pending.',
            zh: '仓库文档里把被识别风险描述为"接近零"。那是设计意图，不是测量结果；要我在这个主张和放弃它之间选，我会放弃它。用真实检测器去测很容易，尚未进行。',
          },
        },
      ],
    },
  ],
};
