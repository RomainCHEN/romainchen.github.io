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
    zh: '一个不先访谈你就不肯动笔的写作辅导 Agent',
  },
  blurb: {
    en: 'An open-source agent skill for IELTS speaking and writing, built on the premise that a model answer you cannot remember is worthless.',
    zh: '一个面向雅思口语和写作的开源 agent skill。前提很简单，一篇你记不住的范文毫无价值。',
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
      value: { en: 'None. See below.', zh: '暂无，下文说明。' },
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
          '随便找个 AI 助手要一篇雅思作文，四秒钟就能生成 250 个通顺的英文词，Firstly、Secondly、In conclusion 一应俱全。在机器评分表上它得分不低，却会害了考生，原因只有一个，考场那种压力下，你只调得出属于自己的东西。',
          '所以这个工具把顺序颠倒过来，先访谈你，再动笔。',
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
          '一篇范文得同时满足两个互相拉扯的要求。一头是外部标准，也就是雅思公开的四项，任务回应、连贯与衔接、词汇资源、语法多样性与准确性。另一头更难，这篇东西得让某个具体的人在几个月后的考场上**还能调出来**。',
          '通用生成只顾了前一头，后一头压根没管。真正要改的是模型能发明什么。论点、例子、立场都出自学习者本人，模型只管校准和打磨。这跟我在教师那一侧研究的分工是同一类问题，角色从教师换成了学生。',
          '交互也因此完全变了样。每碰到一个新话题，系统先做一轮结构化的小访谈，形式是多步网页表单，不用聊天式追问。表单的好处是你能按自己的节奏想，想岔了还能回头改，一问一答的对话做不到这点。访谈做完才开始生成，而且是从你自己的素材生成。',
        ],
      },
      note: {
        en: 'The elicitation step is not a UX nicety. It is where the pedagogy lives.',
        zh: '先采集再生成，教学法就藏在这一步里；模型之后能校准的，只有这一步交出来的东西。',
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
        zh: '先采集再生成，全程运行在本机。注意这些问题究竟想问什么，它要的是车里那个具体的下午，对音乐的笼统看法不算数。表单支持上传图表、粘贴剪贴板，写作 Task 1 的材料走同一条管线。答案以 JSON 存储，同一个话题无需第二次访谈。',
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
          '会不会被看出是 AI 写的，这从一开始就是设计目标，动手写之前就定下了。这个 skill 会筛自己的输出，清单上列着当插入语用的破折号、带讽刺味的引号、机械的连接词，还有 this essay will discuss 这类开头。与其叮嘱模型写自然点，不如生成时直接跑一遍这份清单。清单能核查，那句叮嘱不能。',
          '学习计划还得扛得住漏练，人肯定会漏。一个不会自动重排的计划，头一次中断之后基本就废了。状态跨会话存在 JSON 里，漏掉的内容会重新排进去，薄弱环节往前提，不会悄没声地消失。',
          '有没有视觉能力，不该反过来决定你用哪个模型。写作 Task 1 要读图，这一条会把学习者锁死在多模态模型上。所以这个 skill 自带一个小 MCP 服务，把图片转给单独的视觉端点去处理，纯文本模型也能做图表题。这只是管道层面的一个小取舍，却决定了这工具在你手头现有的模型上跑不跑得起来。',
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
        zh: '产出的是一份可打印的文档，不留在一段对话记录里。答案在几个月后仍可翻出复习，备考在意的正是这个时间尺度。',
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
          '工具已经发布，也可以使用，设计上的论证我认为站得住，但要说它能提分，目前没有任何证据。我不打算假装有。说实话反而更有用，因为顺带就讲清了什么样的研究才能给出结论。',
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
            zh: '以 MIT 许可发布，中英文文档齐备，我自己在真实使用。',
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
            zh: '尚未验证。设计借鉴了关于个人相关性和生成效应的成熟观点，但借来一个理由并不等于有证据。最省钱又有信息量的做法，是用被试内设计比较自己产出的素材与模型产出的素材，看哪一种记得更牢。这个实验还没有开展。',
          },
        },
        {
          label: { en: 'Anti-detection claims', zh: '“不会被认出是 AI”这个说法' },
          state: 'planned',
          detail: {
            en: 'The repository describes detection risk as near-zero. That is a design intention, not a measurement, and I would drop the claim before I would defend it. Testing it against actual detectors is straightforward and pending.',
            zh: '仓库文档里把被识别的风险写成接近于零，那是设计意图，没有实测过。若真要我在保留和删除这句话之间做选择，我会删掉。拿真实的检测器去跑一遍并不难，只是还没做。',
          },
        },
      ],
    },
  ],
};
