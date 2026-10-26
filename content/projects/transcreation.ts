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
    en: 'Evaluating generative AI on film title transcreation, and where its ability ends',
    zh: '评估生成式 AI 在影视片名译创中的表现与能力边界',
  },
  blurb: {
    en: 'A corpus study of how film titles are translated. Cultural schema theory sorts what a translator does into operations, and the comparison asks which of them a language model can do.',
    zh: '一项电影片名翻译的语料研究。借助文化图式理论，把译者的处理拆成几类认知操作，再看其中哪些大模型做得到，哪些做不到。',
  },
  period: { en: 'Oct 2025 to present', zh: '2025 年 10 月至今' },
  role: {
    en: 'Co-author in a three-person, faculty-advised team, responsible for the cognitive-linguistic framing and the literature synthesis',
    zh: '合著者，三人小组，导师指导，负责认知语言学框架和文献综述',
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
      zh: '汉译英语料表的第一页，共九部影片。每一行依次列出原片名、年份、类型、官方英文译名，以及 DeepSeek R1 和 Gemini 2.5 Pro 的译法，最后是选取理由和两地的海报。',
    },
  },
  links: [],
  facts: [
    {
      label: { en: 'Corpus', zh: '语料规模' },
      value: { en: '100 title pairs, both directions', zh: '100 对片名，涵盖汉译英和英译汉' },
    },
    {
      label: { en: 'Systems compared', zh: '对比对象' },
      value: {
        en: 'Official human release titles against two frontier models',
        zh: '官方人工译名对比两个前沿大模型',
      },
    },
    {
      label: { en: 'Analytical model', zh: '分析模型' },
      value: { en: 'Three tiers: strategy, cognition, schema', zh: '三层：策略、认知操作、文化图式' },
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
          'A film title is a hard translation problem disguised as a trivial one. It is a few words long, and it has to do three jobs that pull against each other: describe the film, land emotionally in a culture that did not make it, and sell tickets.',
          'That makes titles a clean probe for a question translation studies has argued over for a long time. When a translator abandons the literal meaning, is that a failure of fidelity or an act of expertise? And can a model that has never lived inside a culture do the same?',
        ],
        zh: [
          '电影片名只有寥寥几个字，看起来是个小问题，其实很难译。它要同时完成三件互相拉扯的事：交代影片讲什么，在另一种文化里打动观众，还要卖出电影票。',
          '译者放弃字面意思，是背离原文，还是专业判断？翻译研究为此争论了很久。片名篇幅短、矛盾集中，正好拿来检验这个问题。由此还能追问一步：一个从没在目标文化中生活过的模型，能不能做到同样的事？',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The measurement problem', zh: '测量的难题' },
      body: {
        en: [
          'Standard machine translation metrics fail here. BLEU and ROUGE score overlap with a reference string, so they penalise exactly the divergence that makes a good title. *Ghost* was released in Chinese as 人鬼情未了 (roughly "the love between a human and a ghost, never finished"). It scores badly against any literal reference, and it is the right answer.',
          'This study measures the **operation** instead. It classifies what the translator did, then asks whether that operation fits the cultural gap in front of it.',
        ],
        zh: [
          '常用的机器翻译指标在这里不管用。BLEU 和 ROUGE 衡量的是译文和参考译文的重合程度，而好片名往往恰恰要偏离参考。《Ghost》在中文市场叫《人鬼情未了》，拿任何字面参考来比，它的分数都很低，可它偏偏是对的。',
          '所以这项研究衡量的是**操作**本身：译者做了哪一类操作，这类操作是否契合眼前的文化差距。',
        ],
      },
      note: {
        en: 'Overlap metrics penalise the very behaviour that marks expertise, so the study needs another measure.',
        zh: '按重合度打分的指标，惩罚的恰恰是体现专业能力的做法，所以这项研究需要另一套衡量方式。',
      },
    },
    {
      kind: 'figure',
      src: '/work/transcreation/course-poster.webp',
      w: 1200,
      h: 1697,
      full: '/work/transcreation/course-poster-full.webp',
      alt: {
        en: 'The original course poster on Chinese-English film title translation, laid out as a scrapbook: ten numbered strategy categories, each with its strategy, theoretical basis, examples, and a comparison with machine translation.',
        zh: '最初那张课程海报《电影标题的中英翻译》，版式模仿剪贴簿，列出十个编号的策略类别。每一类都写了策略、理论依据、示例，以及和机器翻译的对比。',
      },
      caption: {
        en: 'Where this started: a poster for a class in English-Chinese contrastive translation. It is printed small, so open the full sheet to read it. The poster sorts titles into ten categories, each with a stated rationale and a comparison against machine output, so the human-versus-AI question was there from the start. What it lacks is a mechanism. The rationale is asserted case by case, so the categories predict nothing about a title they have not seen. The distance from this poster to the three-tier model is the work of turning those assertions into an account of what the translator does in their head.',
        zh: '这项研究的起点，是英汉对比翻译课上一次小组展示用的这张海报。原件排得很密，要打开完整原图才能看清正文。海报把片名分成十类，每类都写了理论依据，也和机器翻译的输出做了对照，人工与 AI 的比较从那时就开始了。它缺的是机制：理由一例一例地给，这套分类就无法预测没见过的片名。把这些零散的判断整理成对译者认知过程的解释，就是从这张海报走到三层模型所做的工作。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'A three-tier model', zh: '三层分析模型' },
      body: {
        en: [
          'The first tier is strategy, meaning what was done: literal rendering, domestication, foreignisation, transliteration, free translation, outright re-creation. Existing scholarship already describes this layer in detail, and it explains the least.',
          'The second tier is the cognitive operation, meaning how it was done: metaphor mapping, metonymy, image schemas, and above all conceptual blending. A good title is usually a new structure that emerges in a blended space, not one carried over from the source.',
          'The third tier is the cultural schema, which decides whether the rendering works. Schemas determine which source domains a metaphor can draw on and whether a blend is culturally viable. We sort the translator\'s problems into four operations on schemas, and the cognitive work they demand differs sharply.',
          'The tiers have a direction. A strategy at Tier 1 is a *means* of carrying out a cognitive operation at Tier 2, and that operation\'s *goal* is to handle a cultural schema at Tier 3. Most existing work stops at Tier 1, so it describes the surface of a decision without its mechanism.',
        ],
        zh: [
          '第一层是策略，也就是译者做了什么：直译、归化、异化、音译、意译，直到彻底的再创作。已有研究对这一层描述得最细，但它的解释力也最弱。',
          '第二层是认知操作，也就是译者是怎么做到的：隐喻映射、转喻、意象图式，以及最关键的概念整合。好片名大多是在整合空间里生成的新结构，单靠搬运原文的结构得不到。',
          '第三层是文化图式，一种译法成不成功，最终取决于它。隐喻能借用哪些源域，一次整合在文化上是否行得通，都由图式决定。我们把译者面临的问题归为对图式的四种操作，每种操作所需的认知投入差别很大。',
          '三层之间有方向。第一层的策略是**手段**，用来完成第二层的认知操作，而认知操作的**目的**是处理第三层的文化图式。多数已有研究止步于第一层，所以只描述了决策的表面，没有触及背后的机制。',
        ],
      },
    },
    {
      kind: 'schemas',
      heading: { en: 'Four operations on a cultural schema', zh: '对文化图式的四种操作' },
      intro: {
        en: [
          'These are the four cases the framework is built to separate. Select one to see the source title, what a human translator did, what a literal or default machine rendering produces, and what the difference shows. The bar shows how much cognitive work the operation demands.',
        ],
        zh: [
          '这个框架要区分的就是以下四种情形。点开任意一项，可以看到原片名、人工译者的处理、字面直译或模型的默认输出，以及两者的差别说明了什么。条形越长，这类操作需要的认知投入就越多。',
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
            en: 'Both cultures share the schema of the lion as sovereign, so a direct metaphor mapping is enough. Machine and human converge, because statistical association suffices when the schemas already agree. An evaluation built only on cases like this will conclude that the problem is solved.',
            zh: '狮子象征王权，这个图式两种文化都有，直接做隐喻映射就够了，用不着概念整合。图式本来就一致时，统计关联就足以应付，所以人和机器给出了相同的译名。只拿这类案例做评估，难免会得出问题已经解决的结论。',
          },
        },
        {
          operation: { en: 'Schema adaptation', zh: '图式调适' },
          load: 2,
          source: 'Ghost',
          human: '人鬼情未了',
          machine: '鬼',
          reading: {
            en: 'The English schema here is a tender revenant in a romance; the Chinese 鬼 schema is mostly one of horror. The two overlap and conflict. The human translator judged that the film\'s emotional centre is the love, not the ghost. They suppressed the horror reading and blended three inputs, human, ghost and unfinished love, into a structure neither language held on its own. The literal rendering activates the wrong schema and puts the film in the wrong genre.',
            zh: '英文片名唤起的图式，是爱情故事里深情的亡灵；中文的「鬼」，主要让人联想到恐怖。两者部分重叠，又相互冲突。译者判断影片的情感重心在「情」而不在「鬼」，于是压下了恐怖的联想，把「人」「鬼」「情未了」三者整合成一个两种语言原本都没有的结构。字面直译激活的是错误的图式，连影片类型都弄错了。',
          },
        },
        {
          operation: { en: 'Schema creation', zh: '图式创建' },
          load: 4,
          source: '江湖儿女',
          human: 'Ash Is Purest White',
          machine: 'Rivers and Lakes',
          reading: {
            en: 'The 江湖 schema, a roving world with its own code of loyalty and violence, does not exist in English. There is no source domain to map onto. The human translator gave up the literal level entirely, worked out what the film is actually about, and built a new image that could carry it. The literal output fails in a different way: "Rivers and Lakes" activates a geographical schema and turns a dense cultural sign into an empty one. This is the widest human-machine gap in the corpus.',
            zh: '「江湖」指一个自有忠义和暴力法则的流动世界，英语里没有对应的图式，也就没有源域可以映射。译者完全放弃了字面，抓住影片真正要讲的东西，另造一个能承载它的意象。直译的失败方式不同：Rivers and Lakes 唤起的是地理图式，一个意义丰富的文化符号就此变得空洞。这是整个语料中人机差距最大的一类。',
          },
        },
        {
          operation: { en: 'Schema reconstruction', zh: '图式重构' },
          load: 3,
          source: 'Lolita',
          human: '一树梨花压海棠',
          machine: '洛丽塔',
          reading: {
            en: 'The translator borrows a line of classical Chinese poetry to carry a socially taboo subject, an old man and a young woman, with the indirection the taboo requires. Here the translator acts as a cultural gatekeeper, making a normative judgement about what can be said and how. A model is least equipped for this operation, because it has no stake in the norm.',
            zh: '译者借用一句中国古诗，来承载老夫少女这个禁忌题材，诗句本身恰好提供了禁忌所要求的含蓄。这时译者扮演的是文化守门人，要在规范层面判断什么能说、说到什么程度。这类操作模型最难胜任，因为它与这套规范没有利害关系。',
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
            en: 'Lowest. Source and target schemas are shared or easily equated, and the task is formal equivalence.',
            zh: '最低。源语和目标语的图式相同或容易对等，只需做到形式对应。',
          },
          {
            en: '`LT` literal · `T` transliteration · `BOR` borrowing',
            zh: '`LT` 直译 · `T` 音译 · `BOR` 借用保留',
          },
        ],
        [
          { en: 'II. Adjustment', zh: 'II. 图式调适' },
          {
            en: 'Moderate. The schemas partly overlap; a conflicting reading has to be suppressed and the wanted one strengthened.',
            zh: '中等。图式部分重叠，需要压下冲突的读法，强化想要的读法。',
          },
          {
            en: '`T/S` transliteration + sense · `DYN` dynamic-static shift · `PUN` pun reconstruction · `E/PARA` explicitation',
            zh: '`T/S` 音意结合 · `DYN` 动静态转换 · `PUN` 双关重构 · `E/PARA` 显化释义',
          },
        ],
        [
          { en: 'III. Creation', zh: 'III. 图式创建' },
          {
            en: 'Highest. The target culture has no corresponding schema, so a new image has to be built to carry the theme.',
            zh: '最高。目标文化中没有对应的图式，必须另造意象来承载主题。',
          },
          {
            en: '`TR` transcreation · `IDIO` idiomatic adaptation · `EMO` affective reconstruction · `P/NAR` poetic-to-narrative',
            zh: '`TR` 译创 · `IDIO` 成语化改编 · `EMO` 情感重构 · `P/NAR` 诗意转叙事',
          },
        ],
        [
          { en: 'IV. Reconstruction or avoidance', zh: 'IV. 图式重构或规避' },
          {
            en: 'High. The source schema conflicts with target norms or values, so the frame is replaced, not adjusted.',
            zh: '高。源语图式和目标文化的规范或价值观冲突，调整无济于事，必须整体更换框架。',
          },
          {
            en: '`MRK` market reshaping · `ADD` added context · `Cultural Substitution` · `Domestication`',
            zh: '`MRK` 市场化重塑 · `ADD` 增补语境 · `Cultural Substitution` 文化替代 · `Domestication` 归化',
          },
        ],
      ],
      caption: {
        en: 'Each strategy code is defined by its relationship to the cultural schema, not by its surface form. So one code means the same thing to two coders and in both translation directions.',
        zh: '每个策略代码都按它和文化图式的关系来定义，而不看表面形式。因此，同一个代码换了编码者、换了翻译方向，指的仍是同一件事。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Why "free translation" is the wrong unit of analysis', zh: '为什么「意译」不适合作分析单位' },
      body: {
        en: [
          'Traditional translation theory loads far too much onto the term *free translation*. It covers everything from light paraphrase to total re-creation, which makes it a black box. Naming it explains nothing about what happened inside.',
          '**Transcreation**, understood as a cognitive and cultural recomposition, supplies the mechanism. The translator diagnoses how the source builds meaning, judges whether that structure can survive the crossing, and then recomposes it. Each of those three abilities can be examined on its own, and a model can fail at each of them in a different way.',
          'Human and machine output differ in *kind*, not in quality. Human decisions in the corpus are diagnostic and made in stages. Machine decisions are arbitrary in a precise technical sense: the model applies a default mapping without testing whether the source schema survives the crossing.',
        ],
        zh: [
          '传统翻译理论给「意译」这个词塞了太多东西，从轻度改写到彻底再创作都算在里面，结果它成了一个黑箱。叫它「意译」，并不能说明里面发生了什么。',
          '改用**译创**这个概念，把它理解为认知和文化层面的重新组合，机制就说得清了。译者要判断原文是怎样构建意义的，判断这个结构能否在目标文化中立住，然后再重新组合。这三种能力都能单独检验，模型在每一种上出错的方式也各不相同。',
          '人机译法的差别在于**性质**，而不在优劣。语料中人工译者的决策是诊断式的，一步一步做出来；模型的决策则带有技术意义上的随意性，它直接套用默认映射，不去检验源语图式在跨语言转换中能否保留。',
        ],
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this stands', zh: '目前的进展' },
      intro: {
        en: [
          'This is a paper in preparation by a three-person team under faculty supervision. The framework, the literature review, the corpus and both models\' outputs are complete. Coding is under way, and the human-machine comparison comes after it.',
        ],
        zh: [
          '这是一篇撰写中的论文，由三人小组在导师指导下完成。理论框架、文献综述、语料和两个模型的输出都已完成，目前正在编码，编码之后再做人机对比。',
        ],
      },
      items: [
        {
          label: { en: 'Theoretical framework and research questions', zh: '理论框架与研究问题' },
          state: 'shipped',
          detail: {
            en: 'The three-tier model is defined, the four schema operations are specified, and transcreation is the paper\'s organising construct.',
            zh: '三层模型和四种图式操作均已界定，并以「译创」作为全文的核心概念。',
          },
        },
        {
          label: { en: 'Literature synthesis', zh: '文献综述' },
          state: 'shipped',
          detail: {
            en: 'Covers functionalist title translation, divergent norms within Greater China, the paradigm shift that large language models bring to translation, and the cultural bias already documented in frontier models.',
            zh: '涵盖功能主义片名翻译、两岸三地的译名规范差异、大模型给翻译带来的范式转变，以及前沿模型已有记录的文化偏见。',
          },
        },
        {
          label: { en: 'Corpus construction', zh: '语料构建' },
          state: 'shipped',
          detail: {
            en: '100 title pairs in both directions, sampled for culture-specific items, renderings that differ across the Mainland, Hong Kong and Taiwan, and coverage of all four schema operations. Each row carries the source title, year, genre, the official human release title and the poster art for both markets.',
            zh: '双向共 100 对片名，抽样时兼顾文化特有项、大陆与港台译名的分歧，以及四种图式操作的覆盖面。每一行包含原片名、上映年份、影片类型、官方人工译名和两地海报。',
          },
        },
        {
          label: { en: 'LLM output collection', zh: '模型输出采集' },
          state: 'shipped',
          detail: {
            en: 'DeepSeek R1 and Gemini 2.5 Pro have been run on the whole corpus, so each source title sits in one row beside the human release title and two machine renderings. That side-by-side layout is the research instrument.',
            zh: 'DeepSeek R1 和 Gemini 2.5 Pro 已经跑完全部语料，每个原片名都和官方人工译名、两份模型译法排在同一行。这样的并列本身就是研究工具。',
          },
        },
        {
          label: { en: 'Coding manual and reliability check', zh: '编码手册与信度检验' },
          state: 'instrumented',
          detail: {
            en: 'The three-tier scheme is written down to named strategy codes, each defined by its relationship to the cultural schema. The hardest cases have been pre-coded to test whether the definitions hold up on real data. Full inter-coder reliability is pending.',
            zh: '三层方案已经细化到具名的策略代码，每个代码都按它和文化图式的关系来定义。最难的几个案例已经试编过，用来检验这些定义面对真实数据是否站得住。完整的编码者间信度检验尚未进行。',
          },
        },
        {
          label: { en: 'Human-machine comparison and findings', zh: '人机对比与结论' },
          state: 'planned',
          detail: {
            en: 'The next phase is to code the full corpus and report how the operations are distributed across human and machine output.',
            zh: '下一阶段要为全部语料编码，并报告人工和模型的译法在各类操作上的分布。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'Why this sits next to the other two projects', zh: '为什么和另外两个项目放在一起' },
      body: {
        en: [
          'It looks like the odd one out: a humanities paper between two pieces of software. It asks the same question with a different instrument.',
          'PaperCraft asks where a teacher\'s judgement stays irreplaceable inside a generation pipeline, and measures it with edit distance. This study asks where a translator\'s cultural judgement stays irreplaceable, and measures it with schema operations. Both judge a model by the operation it performs, not the output it produces. Both put the human contribution on the dependent-variable side, where it can be measured instead of asserted.',
          'The translation work is also where I learned that a construct has to be operationalised before it can be studied. It is the lesson I use most when building learning systems.',
        ],
        zh: [
          '两个软件项目之间夹着一篇人文论文，乍看格格不入。其实它们问的是同一个问题，只是用的工具不同。',
          'PaperCraft 想知道，在生成流程里，教师的判断有哪些是替代不了的，用编辑距离来衡量；这项研究想知道，译者的文化判断有哪些是替代不了的，用图式操作来衡量。两者评价模型，看的都是它做了哪一类操作，而不是它产出了什么。两者也都把人的贡献当作因变量，让它可以被测量，而不只是一句断言。',
          '也是在翻译研究里，我明白了一个构念必须先操作化，才能拿来研究。后来开发学习系统时，这是我用得最多的一条经验。',
        ],
      },
    },
  ],
};
