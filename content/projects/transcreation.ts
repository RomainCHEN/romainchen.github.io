import type { Project } from '../types';

/**
 * The film title transcreation study.
 *
 * Evidence discipline: a paper in preparation. Framework, corpus and literature
 * are settled; the coding and the comparison are not finished. Nothing below
 * the framework level is stated as an established finding.
 */
export const transcreation: Project = {
  slug: 'transcreation',
  index: '02',
  title: 'Transcreation in the Age of Generative AI',
  subtitle: {
    en: 'Where a language model stops being a translator and starts being a pattern matcher',
    zh: '评估生成式 AI 在影视片名创译中的表现与能力边界',
  },
  blurb: {
    en: 'A corpus study of film title translation that uses cultural schema theory to locate which cognitive operations humans perform and LLMs cannot.',
    zh: '一项电影片名翻译的语料研究，以文化图式理论梳理译者的认知操作，判断其中哪些大模型能够完成，哪些不能。',
  },
  period: { en: 'Oct 2025 to present', zh: '2025 年 10 月至今' },
  role: {
    en: 'Co-author, three-person faculty-advised team, responsible for the cognitive-linguistic framing and literature synthesis',
    zh: '合著者，三人小组，导师指导，负责认知语言学框架与文献综述',
  },
  discipline: {
    en: 'Translation studies · Cognitive linguistics · LLM evaluation',
    zh: '翻译研究 · 认知语言学 · 大模型评估',
  },
  tags: [
    { en: 'Cultural schema theory', zh: '文化图式理论' },
    { en: 'Transcreation', zh: '译创' },
    { en: 'Corpus study', zh: '语料研究' },
    { en: 'LLM evaluation', zh: '大模型评估' },
    { en: 'Conceptual blending', zh: '概念整合' },
  ],
  hero: {
    src: '/work/transcreation/corpus-dataset.webp',
    w: 1800,
    h: 1018,
    full: '/work/transcreation/corpus-dataset-full.webp',
    alt: {
      en: 'The first page of the Chinese-to-English corpus sheet: nine films, each with its source title, year, genre, official English release title, the renderings from DeepSeek R1 and Gemini 2.5 Pro, a selection rationale, and poster art for both markets.',
      zh: '汉译英语料表的第一页，九部影片。每一行先列原片名、年份、类型和英文官方译名，再列 DeepSeek R1 与 Gemini 2.5 Pro 的输出。末尾是选取理由和两地海报。',
    },
  },
  links: [],
  facts: [
    {
      label: { en: 'Corpus', zh: '语料规模' },
      value: { en: '100 title pairs, both directions', zh: '100 对片名，译入译出双向' },
    },
    {
      label: { en: 'Systems compared', zh: '对比对象' },
      value: {
        en: 'Official human release titles against two frontier models',
        zh: '官方人工译名与两个前沿模型',
      },
    },
    {
      label: { en: 'Analytical model', zh: '分析模型' },
      value: { en: 'Three tiers: strategy, cognition, schema', zh: '三层：策略、认知、图式' },
    },
    {
      label: { en: 'Status', zh: '当前状态' },
      value: { en: 'Corpus collected; coding in progress', zh: '语料已采集，编码进行中' },
    },
  ],
  featured: true,
  sections: [
    {
      kind: 'lede',
      body: {
        en: [
          'A film title is a hard translation problem disguised as a trivial one. It is four words long and it has to do three incompatible jobs: describe the film, land emotionally in a culture that did not produce it, and sell tickets.',
          'Titles are therefore the cleanest available probe for a question translation studies keeps arguing badly. When a translator abandons the literal meaning, is that a failure of fidelity or an act of expertise? And can a model that has never lived inside a culture do the same thing?',
        ],
        zh: [
          '电影片名只有几个字，看起来是个小问题，却要同时完成三件互相冲突的任务：说明影片讲什么、在陌生的文化里产生情感效果、把观众带进影院。',
          '译者放弃字面意义，究竟是失信于原文，还是专业判断的体现，翻译研究对此争论已久。片名篇幅短、争议集中，是考察这一问题最清晰的入口。由此还可追问，一个从未在目标文化中生活过的模型，能否做到同样的事。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The measurement problem', zh: '测量的难题' },
      body: {
        en: [
          'Standard machine translation metrics fail here. BLEU and ROUGE score overlap with a reference string, so they penalise the divergence that defines a good title. *Ghost* released in Chinese as 人鬼情未了 (roughly "the love between human and ghost was never finished") scores badly against any literal reference and is the correct answer.',
          'This study measures the **operation** instead. It classifies what the translator did, then asks whether that operation fits the cultural gap in front of it.',
        ],
        zh: [
          '常用的机器翻译指标在这里完全失效。BLEU 和 ROUGE 计算的是译文与参考译文的重合度，而好片名的价值恰恰在于偏离参考。《Ghost》的中文译名《人鬼情未了》，对照任何字面参考都得分很低，但它正是正确的译法。',
          '这项研究衡量的是**操作**本身。先判定译者做了哪一类操作，再问这一类操作是否适合眼前的文化差距。',
        ],
      },
      note: {
        en: 'Reference-overlap metrics penalise the behaviour that constitutes expertise. That observation is the reason the study needs a different measure.',
        zh: '按重合度打分的指标，惩罚的正是专业能力本身。仅此一点，就足以说明这项研究需要另一套衡量方式。',
      },
    },
    {
      kind: 'figure',
      src: '/work/transcreation/course-poster.webp',
      w: 1200,
      h: 1697,
      full: '/work/transcreation/course-poster-full.webp',
      alt: {
        en: 'The original course poster on Chinese-English film title translation, laid out as a scrapbook: ten numbered strategy categories, each with its strategy, theoretical basis, examples, and a comparison against machine translation.',
        zh: '最初那张课程海报《电影标题的中英翻译》，版式仿剪贴簿，十个编号的策略类别。每一类都写了策略、理论依据、示例，以及与机器翻译的对比。',
      },
      caption: {
        en: 'Where this started: a course poster for an English-Chinese contrastive translation class. It is printed small, so open the full sheet to read it. The poster did more than sort titles into ten categories. Each category carries a stated rationale and a comparison against machine output, so the human-versus-AI question was there from the beginning. What it lacks is a mechanism. The rationale is asserted case by case, so the categories predict nothing about a title they have not already seen. The distance between this poster and the three-tier model is the work of turning those assertions into an account of what the translator does cognitively.',
        zh: '这项研究的起点是这张海报，英汉对比翻译课上的小组展示。原件排版很密，正文要点开完整原图才看得清。海报做的不只是把片名分成十类，每一类都给出理论依据，并与机器翻译的输出对照，人工与 AI 的比较从那时起就已经在了。欠缺的是机制。依据是逐例给出的，这套分类因此无法预测未曾见过的片名。把这些逐例的判断讲成译者的认知过程，就是这张海报与三层模型之间的距离。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'A three-tier model', zh: '三层分析模型' },
      body: {
        en: [
          'The first tier is strategy, meaning what was done: literal rendering, domestication, foreignisation, transliteration, free translation, outright re-creation. This is the layer existing scholarship already describes well, and the layer that explains the least.',
          'The second is the cognitive operation, meaning how it was done: metaphor mapping, metonymy, image schemas, and above all conceptual blending. A good title is usually an emergent structure in a blended space rather than a transfer of one.',
          'The third is the cultural schema, which decides whether it worked. Schemas determine which source domains are available for a metaphor and whether a blend is culturally viable. We treat the translator\'s problem as one of four operations on schemas, and the amount of cognitive work they demand differs sharply.',
          'The tiers are directional: a strategy at Tier 1 is a *means* of performing a cognitive operation at Tier 2, whose *goal* is handling a cultural schema at Tier 3. Most existing work stops at Tier 1 and therefore describes the surface of a decision without its mechanism.',
        ],
        zh: [
          '第一层是策略，即译者做了什么：直译、归化、异化、音译、意译，以至彻底的再创作。这一层既有研究描述得最细，解释力却最弱。',
          '第二层是认知运作，即译者如何做到：隐喻映射、转喻、意象图式，以及最关键的概念整合。好片名多半是整合空间中新生成的结构，单靠移植原文的结构得不到。',
          '第三层是文化图式，译法成败最终取决于它。隐喻可以调用哪些源域、某次整合在文化上是否可行，都由图式决定。我们把译者面对的问题归为对图式的四种操作，各类操作所需的认知投入相差很大。',
          '三层之间有方向：第一层的策略是**手段**，用来完成第二层的认知运作，而认知运作的**目的**是处理第三层的文化图式。多数既有研究止于第一层，只描述一个决定的表面，不及其机制。',
        ],
      },
    },
    {
      kind: 'schemas',
      heading: { en: 'Four operations on a cultural schema', zh: '对文化图式的四种操作' },
      intro: {
        en: [
          'These are the cases the framework is built to separate. Select one to see the source title, what a human translator did, what a literal or default machine rendering produces, and what the difference tells us. The bars indicate how much cognitive work the operation demands.',
        ],
        zh: [
          '这四类正是框架要区分的情形。点选任意一项，可以看到原片名、人工译者的处理、字面或机器默认输出，以及这个差别说明了什么。条形长度代表这类操作所需的认知投入。',
        ],
      },
      cases: [
        {
          operation: { en: 'Schema match', zh: '图式匹配' },
          load: 1,
          source: 'The Lion King',
          human: '狮子王',
          machine: '狮子王',
          reading: {
            en: 'The lion-as-sovereign schema is shared across both cultures, so a direct metaphor mapping suffices. Machine and human converge, because statistical association is enough when the schemas already agree. Any evaluation built only on cases like this will conclude that the problem is solved.',
            zh: '狮子象征王权，这一图式两种文化共有，做一次隐喻映射就够，不需要概念整合。图式本就一致时，统计关联足以应付，人与机器因此给出相同的译名。只用这类案例做评估，自然会得出问题已经解决的结论。',
          },
        },
        {
          operation: { en: 'Schema adaptation', zh: '图式调适' },
          load: 2,
          source: 'Ghost',
          human: '人鬼情未了',
          machine: '鬼',
          reading: {
            en: 'The English schema here is a tender revenant in a romance; the Chinese 鬼 schema is primarily one of horror. The two overlap and conflict. The human translator diagnosed that the emotional focus is the love and not the ghost, suppressed the horror reading, and blended three inputs, human, ghost and unfinished love, into a structure that neither language contained on its own. The literal rendering activates the wrong schema and misfiles the genre.',
            zh: '英语的图式是爱情故事中深情的亡灵，中文的“鬼”则以恐怖为主，两者部分重叠又相互冲突。译者判断影片的情感重心在“情”而非“鬼”，抑制了恐怖的读法，再将“人”“鬼”“情未了”整合为一个两种语言原本都不具备的结构。字面直译激活的是错误的图式，连影片类型也判断错了。',
          },
        },
        {
          operation: { en: 'Schema creation', zh: '图式创建' },
          load: 4,
          source: '江湖儿女',
          human: 'Ash Is Purest White',
          machine: 'Rivers and Lakes',
          reading: {
            en: 'The 江湖 schema, an itinerant world with its own code of loyalty and violence, is absent in English. There is no source domain to map onto. The human translator gave up the literal level entirely, identified what the film is actually about, and constructed a new image capable of carrying it. The literal output fails differently: "Rivers and Lakes" activates a geographical schema, turning a dense cultural signifier into an empty one. This is the widest human-machine gap in the corpus.',
            zh: '“江湖”指一个自有忠义与暴力法则的流动世界，英语中没有对应的图式，也就无源域可供映射。译者放弃了字面层，先确定影片真正的主题，再另造一个意象来承载。直译的 Rivers and Lakes 激活的是地理图式，一个意义密集的文化符号由此变成空符号。这是语料中人机差异最大的一类。',
          },
        },
        {
          operation: { en: 'Schema reconstruction', zh: '图式重构' },
          load: 3,
          source: 'Lolita',
          human: '一树梨花压海棠',
          machine: '洛丽塔',
          reading: {
            en: 'The translator recruits a line of classical Chinese poetry to carry a socially taboo subject, an old man and a young woman, with the indirection the taboo requires. Here the translator acts as a cultural gatekeeper, making a normative judgement about what can be said and how. This is the operation a model is least equipped for: it has no stake in the norm.',
            zh: '译者借一句中国古诗承载老夫少女这一禁忌题材，诗句本身提供了禁忌所要求的含蓄。此时译者扮演文化守门人的角色，对什么可以说、说到何种程度作出规范判断。这类操作模型最难胜任，因为它在这套规范中没有利害。',
          },
        },
      ],
    },
    {
      kind: 'table',
      heading: { en: 'The coding manual', zh: '编码手册' },
      head: [
        { en: 'Schema operation (Tier 3)', zh: '图式操作（第三层）' },
        { en: 'Cognitive demand', zh: '认知需求' },
        { en: 'Strategy codes (Tier 1)', zh: '策略代码（第一层）' },
      ],
      rows: [
        [
          { en: 'I. Matching', zh: 'I. 图式匹配' },
          {
            en: 'Lowest. Source and target schemas are shared or easily equated; the task is formal equivalence.',
            zh: '最低。源语与目标语的图式共享或容易对等，任务止于形式对应。',
          },
          {
            en: '`LT` literal · `T` transliteration · `BOR` borrowing',
            zh: '`LT` 直译 · `T` 音译 · `BOR` 借用保留',
          },
        ],
        [
          { en: 'II. Adjustment', zh: 'II. 图式调适' },
          {
            en: 'Moderate. Schemas partly overlap; a conflicting reading has to be suppressed and a wanted one strengthened.',
            zh: '中等。图式部分重叠，需抑制冲突的读法，强化所需的读法。',
          },
          {
            en: '`T/S` transliteration + sense · `DYN` dynamic-static shift · `PUN` pun reconstruction · `E/PARA` explicitation',
            zh: '`T/S` 音意结合 · `DYN` 动静态转换 · `PUN` 双关重构 · `E/PARA` 显化释义',
          },
        ],
        [
          { en: 'III. Creation', zh: 'III. 图式创建' },
          {
            en: 'Highest. No corresponding schema exists in the target culture; a new image has to be constructed to carry the theme.',
            zh: '最高。目标文化中没有对应的图式，须另造意象承载主题。',
          },
          {
            en: '`TR` transcreation · `IDIO` idiomatic adaptation · `EMO` affective reconstruction · `P/NAR` poetic-to-narrative',
            zh: '`TR` 译创 · `IDIO` 成语化改编 · `EMO` 情感重构 · `P/NAR` 诗意转叙事',
          },
        ],
        [
          { en: 'IV. Reconstruction or avoidance', zh: 'IV. 图式重构或规避' },
          {
            en: 'High. The source schema conflicts with target norms or values; the frame is replaced rather than adjusted.',
            zh: '高。源语图式与目标文化的规范或价值观冲突，调整无效，须更换整个框架。',
          },
          {
            en: '`MRK` market reshaping · `ADD` added context · `Cultural Substitution` · `Domestication`',
            zh: '`MRK` 市场化重塑 · `ADD` 增补语境 · `Cultural Substitution` 文化替代 · `Domestication` 归化',
          },
        ],
      ],
      caption: {
        en: 'Each strategy code is defined by its relationship to the cultural schema, not by surface form, so one code means the same thing across two coders and two translation directions.',
        zh: '策略代码依其与文化图式的关系定义，不以表面形式为准。因此同一个代码在不同编码者、不同翻译方向下所指相同。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Why "free translation" is the wrong unit of analysis', zh: '意译为何不宜作为分析单位' },
      body: {
        en: [
          'Traditional translation theory loads far too much onto the term *free translation*. It covers everything from mild paraphrase to total re-creation, which makes it a black box: naming it explains nothing about what happened inside.',
          '**Transcreation**, understood as cognitive-cultural orchestration, supplies the mechanism. The translator diagnoses how the source builds meaning, judges whether that structure can survive the crossing, and then recomposes. Each of those three competencies can be examined on its own, and a model can fail at each of them differently.',
          'Human and machine output differ in *character*, not in quality. Human decisions in the corpus are diagnostic and staged. Machine decisions are arbitrary in a specific technical sense: the model applies a default mapping without testing whether the source schema survives the crossing.',
        ],
        zh: [
          '传统翻译理论在意译一词上承载了过多内容，从轻度改写到彻底再创作都归入其中，这个词因此成了黑箱。给出这个名称，并不能说明里面发生了什么。',
          '改用**译创**这一概念，把它理解为认知与文化层面的重新组构，现象才有机制可言。译者先判断原文如何构建意义，再判断这一结构能否在目标文化中成立，然后重组。三种能力各自可以单独检验，模型在每一种上失败的方式也各不相同。',
          '人机输出的差别在**性质**，不在优劣。语料中人工译者的决策是诊断式的，分步完成；模型的决策是武断的，直接套用默认映射，不检验源语图式能否在跨越中保留。',
        ],
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this stands', zh: '目前的进展' },
      intro: {
        en: [
          'A paper in preparation on a three-person team with faculty supervision. The framework and the literature are settled. The coding and the comparison are not, so nothing below the framework level is an established finding.',
        ],
        zh: [
          '论文仍在写作中，三人小组，导师指导。框架与文献部分已经定稿，编码与人机对比尚未完成，框架层以下的内容都不应视为已成立的结论。',
        ],
      },
      items: [
        {
          label: { en: 'Theoretical framework and research questions', zh: '理论框架与研究问题' },
          state: 'shipped',
          detail: {
            en: 'Three-tier model defined, four schema operations specified, transcreation adopted as the organising construct.',
            zh: '三层模型与四种图式操作均已界定，并以译创作为全文的核心构念。',
          },
        },
        {
          label: { en: 'Literature synthesis', zh: '文献综述' },
          state: 'shipped',
          detail: {
            en: 'Written across functionalist title translation, regional norm divergence within Greater China, the LLM translation paradigm shift, and documented cultural bias in frontier models.',
            zh: '覆盖功能主义片名翻译、大中华区内部的规范差异、大模型带来的翻译范式转移，以及前沿模型已有记录的文化偏见。',
          },
        },
        {
          label: { en: 'Corpus construction', zh: '语料构建' },
          state: 'shipped',
          detail: {
            en: '100 title pairs in both directions, sampled for culture-specific items, contested renderings across Mainland, Hong Kong and Taiwan, and coverage of all four schema operations. Each row carries the source title, year, genre, the official human release title, and the poster art for both markets.',
            zh: '双向共 100 对片名，抽样兼顾文化特有项、大陆港台三地的译名分歧，以及四种图式操作的覆盖度。每一行包含原片名、上映年份、影片类型、官方人工译名和两地海报。',
          },
        },
        {
          label: { en: 'LLM output collection', zh: '模型输出采集' },
          state: 'shipped',
          detail: {
            en: 'DeepSeek R1 and Gemini 2.5 Pro have both been run across the corpus, so every source title sits in one row beside the human release title and two machine renderings. That side-by-side arrangement is the instrument.',
            zh: 'DeepSeek R1 与 Gemini 2.5 Pro 已在全部语料上运行，每个原片名与官方人工译名、两份机器输出并列在同一行。这种并列本身就是研究的工具。',
          },
        },
        {
          label: { en: 'Coding manual and reliability check', zh: '编码手册与信度检验' },
          state: 'instrumented',
          detail: {
            en: 'The three-tier scheme is written down to the level of named strategy codes, each defined by its relationship to the cultural schema, and pre-coded on the hardest cases to test whether the definitions survive contact with data. Full inter-coder reliability is pending.',
            zh: '三层方案已细化到具名策略代码，每个代码依其与文化图式的关系定义。我们在最难的几个案例上先行试编，检验这些定义面对真实数据是否仍然成立。完整的编码者间信度检验尚未开展。',
          },
        },
        {
          label: { en: 'Human-machine comparison and findings', zh: '人机对比与结论' },
          state: 'planned',
          detail: {
            en: 'The next phase is coding the full corpus and reporting the distribution of operations across human and machine output.',
            zh: '下一阶段的工作是为全部语料编码，并报告人机输出在各类操作上的分布。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'Why this sits next to the other two projects', zh: '为什么与另外两个项目并列' },
      body: {
        en: [
          'It looks like the odd one out, a humanities paper between two pieces of software. It is the same question in a different instrument.',
          'PaperCraft asks where a teacher\'s judgement remains irreplaceable inside a generation pipeline, and answers it with edit distances. This study asks where a translator\'s cultural judgement remains irreplaceable, and answers it with schema operations. Both evaluate a model by the operation it performs rather than the output it produces. Both put the human contribution on the dependent-variable side, where it can be measured instead of asserted.',
          'The translation work is also where I learned that a construct has to be operationalised before it can be studied, the most transferable lesson I have carried into building learning systems.',
        ],
        zh: [
          '两个软件项目中间夹一篇人文论文，看起来并不相称，但它们问的是同一个问题，只是换了工具。',
          'PaperCraft 要回答的是教师判断在生成流程中有多少不可替代，衡量方式是编辑距离；这项研究要回答的是译者的文化判断有多少不可替代，衡量方式是图式操作。两者都按模型执行了哪一类操作来评价它，不看输出本身，也都把人的贡献放在因变量一侧，使它可以测量，而不停留在主张。',
          '翻译方向的工作让我明白，构念不经操作化就无法研究。这是我后来做学习系统时最常用到的一条经验。',
        ],
      },
    },
  ],
};
