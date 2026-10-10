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
    en: 'An IELTS agent that interviews the learner before it writes a word',
    zh: '先访谈学习者、再动笔的雅思备考 Agent',
  },
  blurb: {
    en: 'An open-source agent skill for IELTS speaking and writing, built on the premise that a model answer you cannot remember is worthless.',
    zh: '一个面向雅思口语与写作的开源 agent skill，其出发点很简单：一篇你记不住的范文没有价值。',
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
          '向任意一个 AI 助手要一篇雅思作文，四秒钟就能得到 250 个通顺的英文词，Firstly、Secondly、In conclusion 一样不少。它在机器评分里分数不低，却帮不到考生，原因只有一个：在考场的时间压力下，一个人只能调用真正属于自己的内容。',
          '所以这个工具把交互的顺序反了过来。在写下第一句之前，它先访谈使用者。',
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
          '一篇范文要同时满足两个互相拉扯的要求。一是对齐外部标准，也就是雅思公开的四项评分维度：任务回应、连贯与衔接、词汇资源、语法多样性与准确性。二是更难做到的一点，它必须让某个具体的人在数月之后的考场上**仍能回想起来**。',
          '通用生成只满足了前者，忽略了后者。真正要调整的不是文笔，而是模型被允许生成什么：论点、例子和立场都来自使用者本人，模型只负责校准与打磨。这与我在教师一侧研究的分工属于同一类问题，只是把对象从教师换成了学生。',
          '由此带来的交互方式完全不同。每进入一个新话题，系统先做一轮结构化的小型访谈，形式是多步网页表单，而非聊天式追问。表单让使用者可以按自己的节奏思考、随时修改，一问一答的对话做不到这一点。访谈完成之后才开始生成，而且是从使用者自己的素材出发。',
        ],
      },
      note: {
        en: 'The elicitation step is not a UX nicety. It is where the pedagogy lives.',
        zh: '先采集、再生成，教学法正落在这一步上。模型之后能够校准的，也只有这一步交出来的内容。',
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
        zh: '先采集、再生成，全程在本机运行。值得注意的是这些问题真正指向什么：它要的是车里那个具体的下午，而不是对音乐的笼统看法。表单支持上传图表、粘贴剪贴板，写作 Task 1 的材料经由同一条管线处理。答案以 JSON 存储，同一话题无需再次访谈。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Three problems worth naming', zh: '三个值得明确指出的问题' },
      body: {
        en: [
          'Detectability is a design target rather than an afterthought. The skill explicitly screens its own output for the tells: dashes used as interruptions, scare quotes, mechanical linkers, "this essay will discuss" openings. Enforcing an anti-pattern list at generation time works better than asking a model to "write naturally", because the list is checkable and the instruction is not.',
          'The study plan has to survive a missed day. Learners miss sessions, a plan that does not reschedule is abandoned after the first slip. State is kept in JSON across sessions, so missed items are redistributed and weak areas are pushed forward rather than silently dropped. The same state survives a change of exam season: when a new question bank arrives, topics you already prepared keep counting if they carried over, so a season rollover does not reset your progress to zero.',
          'Vision capability should not dictate which model a learner uses. Writing Task 1 requires reading a chart, which locks a learner into a multimodal model. The skill ships a small MCP server that proxies images through a separate vision endpoint, so a text-only model can still handle chart tasks. It is a plumbing decision, but it is the difference between the tool being usable on the model you already have and not.',
        ],
        zh: [
          '能否被识别为 AI 写作，从一开始就是设计目标，而非事后补救。这个 skill 会主动筛查自己的输出，针对那些典型特征：当作插入语使用的破折号、带讽刺意味的引号、机械的连接词，以及 this essay will discuss 之类的开头。在生成阶段强制执行一份反模式清单，比要求模型「写得自然一些」更有效，因为清单可以核查，而那句要求无法核查。',
          '学习计划必须经得起漏练。使用者难免会错过某几次练习，而一个不会自动重排的计划，在第一次中断之后往往就被弃用了。状态以 JSON 的形式跨会话保存，漏掉的内容会重新排入计划，薄弱环节被提前，而不是被悄悄略过。同一套状态也能承受考试季度的更替：新题库到来时，此前准备过、本季仍沿用的话题继续计入进度，换季不会让已有进度清零。',
          '模型是否具备视觉能力，不应反过来决定使用者选用哪一个模型。写作 Task 1 需要读图，这会把使用者限制在多模态模型上。为此，这个 skill 自带一个轻量的 MCP 服务，将图片转交给独立的视觉端点处理，使纯文本模型同样能完成图表题。这只是工程衔接层面的一个取舍，却决定了这个工具能否在使用者手头已有的模型上运行。',
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
        zh: '产出的是一份可打印的文档，而不是一段对话记录。答案在数月之后仍可翻出复习，而备考所关心的，正是这个时间尺度。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The bank, and keeping it current', zh: '题库，以及如何保持最新' },
      body: {
        en: [
          'The content is only useful if it matches the live exam. The current bank is the 2026 September–December season, cut off on 24 September and parsed straight from the season PDF: 100 speaking topics, of which 88 apply to mainland candidates. 48 of them carried over from the May–August season, so a learner who prepared under the previous bank keeps that work.',
          'When a new season arrives, a validated builder reparses the PDF and refuses to write if any section count disagrees with the count printed in the source, so a silent parser error cannot corrupt the bank. A migration step then carries prepared topics over. The point is maintenance: a question bank that cannot be updated honestly is stale the moment the exam board rotates its topics.',
        ],
        zh: [
          '内容只有与当下的真题对得上才有价值。当前使用的是 2026 年 9 至 12 月这一季，截止日期为 9 月 24 日，直接从季度 PDF 解析而来，共 100 个口语话题，其中 88 个适用于内地考生。有 48 个沿用自 5 至 8 月那一季，因此在上一季题库下准备过的使用者，这部分不会白费。',
          '新一季到来时，一个带校验的构建脚本会重新解析 PDF，只要某一部分的话题数与 PDF 中标注的数目不符，就拒绝写入，一次无声的解析错误因此无法污染题库。随后的迁移步骤会把已准备的话题接续过来。关键在于可维护性：一个无法被诚实更新的题库，在考试方轮换话题的那一刻便已过时。',
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
      heading: { en: 'A site at the end, not just a chat', zh: '结束时交付一个站点，而不只是对话记录' },
      body: {
        en: [
          'When a preparation cycle ends, the skill builds a summary website from everything you practised: a countdown hub with your targets and practice stats, a speaking sprint sheet carrying your own story cards, Task 1 and Task 2 template sheets, a coverage review that lists the topics you have not touched in red, and a searchable bank of every highlight expression you collected.',
          'This is deliberately the opposite of a chat transcript you scroll back through. The artefact a learner walks away with is a thing they can open on a phone the week before the exam, which is when it is actually needed. The data stays local by default; publishing the site is the learner’s own call.',
        ],
        zh: [
          '一个备考周期结束时，这个 skill 会用使用者练过的全部内容生成一个总结站点：倒计时主页汇总目标与练习统计，口语冲刺页收录使用者自己的故事卡片，Task 1 与 Task 2 各有模板页，覆盖情况复盘页用红色标出尚未练习的话题，再加上一个可搜索的高亮表达合集。',
          '这与一段需要反复向上翻的对话记录恰好相反。使用者最终带走的，是考前一周可以在手机上直接打开的东西，而那正是真正需要它的时刻。数据默认保留在本机，站点是否公开，完全由使用者自行决定。',
        ],
      },
      note: {
        en: 'The published demo uses a fictional learner. The real artefact contains your personal stories, so it stays private unless you choose otherwise.',
        zh: '公开的演示使用的是一个虚构的学习者。真实产物包含使用者本人的故事，因此除非主动选择公开，否则始终保持私有。',
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
          '这是一个已经发布、可以使用的工具，有一套我认为站得住的设计论证，但没有任何证据表明它能提高分数。我不会假装有。坦承现状反而更有用，因为它顺带点明了什么样的研究才能对此下结论。',
        ],
      },
      items: [
        {
          label: {
            en: 'Tool, 100 topics, rubric-aligned generation',
            zh: '工具本体、100 个话题、对齐评分标准的生成',
          },
          state: 'shipped',
          detail: {
            en: 'Published under MIT, documented in English and Chinese, in real personal use.',
            zh: '以 MIT 许可发布，中英文文档齐备，我本人在实际使用。',
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
            zh: '使用自身素材，是否真能提升记忆保持与分数？',
          },
          state: 'planned',
          detail: {
            en: 'Untested. The design borrows from well-supported ideas about personal relevance and generation effects, but borrowing a rationale is not evidence. A within-subject comparison of recall for self-sourced versus model-sourced answers would be the cheapest informative study, and it has not been run.',
            zh: '尚未验证。设计借鉴了关于个人相关性与生成效应的成熟研究，但借用一套理由并不等于拥有证据。成本最低而又具备信息量的做法，是采用被试内设计，比较自产素材与模型产素材两种答案的回忆成绩，看哪一种保持得更好。这一实验尚未开展。',
          },
        },
        {
          label: { en: 'Anti-detection claims', zh: '“不会被识别为 AI”的说法' },
          state: 'planned',
          detail: {
            en: 'The repository describes detection risk as near-zero. That is a design intention, not a measurement, and I would drop the claim before I would defend it. Testing it against actual detectors is straightforward and pending.',
            zh: '仓库文档曾把被识别的风险描述为接近于零，那是设计意图，并未经过实测。若要在保留与删除这句话之间取舍，我会选择删除。用真实的检测器加以验证并不困难，只是尚未进行。',
          },
        },
      ],
    },
  ],
};
