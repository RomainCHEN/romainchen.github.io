import type { Project } from '../types';

/**
 * The film title transcreation study.
 *
 * Evidence discipline: a paper in preparation. Framework, corpus design and
 * literature synthesis are done; coding and analysis are in progress. No
 * findings are stated as established.
 */
export const transcreation: Project = {
  slug: 'transcreation',
  index: '02',
  title: 'Transcreation in the Age of Generative AI',
  subtitle: {
    en: 'Where a language model stops being a translator and starts being a pattern matcher',
    zh: '语言模型在哪一刻不再是译者，而只是一个模式匹配器',
  },
  blurb: {
    en: 'A corpus study of film title translation that uses cultural schema theory to locate exactly which cognitive operations humans perform and LLMs cannot.',
    zh: '一项以文化图式理论切入的电影片名翻译语料研究，用于精确定位：哪些认知操作人类能完成，而 LLM 不能。',
  },
  period: { en: 'Oct 2025 – present', zh: '2025 年 10 月 – 至今' },
  role: {
    en: 'Co-author, three-person faculty-advised team — cognitive-linguistic framing and literature synthesis',
    zh: '合著者（三人团队，导师指导）——负责认知语言学框架与文献综述',
  },
  discipline: {
    en: 'Translation studies · Cognitive linguistics · LLM evaluation',
    zh: '翻译研究 · 认知语言学 · 大模型评估',
  },
  tags: ['Cultural schema theory', 'Transcreation', 'Corpus study', 'LLM evaluation', 'Conceptual blending'],
  links: [],
  facts: [
    { label: { en: 'Corpus', zh: '语料' }, value: { en: '100 title pairs, both directions', zh: '100 对片名，双向' } },
    { label: { en: 'Analytical model', zh: '分析模型' }, value: { en: 'Three tiers: strategy, cognition, schema', zh: '三层：策略、认知、图式' } },
    { label: { en: 'Schema operations', zh: '图式操作类型' }, value: { en: '4 — match, adapt, create, reconstruct', zh: '4 类——匹配、调适、创建、重构' } },
    { label: { en: 'Status', zh: '状态' }, value: { en: 'Paper in preparation', zh: '论文写作中' } },
  ],
  featured: true,
  sections: [
    {
      kind: 'lede',
      body: {
        en: [
          'A film title is a hard translation problem disguised as a trivial one. It is four words long and it has to do three incompatible jobs at once: describe the film, land emotionally in a culture that did not produce it, and sell tickets.',
          'This is why titles are the cleanest available probe for the question everyone is arguing about badly. When a translator abandons the literal meaning, is that a failure of fidelity or an act of expertise? And can a model that has never lived inside a culture do the same thing?',
        ],
        zh: [
          '电影片名是一个伪装成小问题的难题。它只有几个字，却要同时完成三件互相冲突的任务：描述影片、在一个并非孕育它的文化里落地并击中情绪、以及卖出票。',
          '正因如此，片名是目前最干净的探针，用来回答一个被普遍讨论得很糟的问题：当译者放弃字面意义时，那是忠实性的失败，还是专业能力的体现？以及，一个从未在某个文化中生活过的模型，能不能做同一件事？',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The measurement problem', zh: '度量本身就是问题' },
      body: {
        en: [
          'The standard machine translation metrics are useless here, and not by a small margin. BLEU and ROUGE score overlap with a reference string, so they actively penalise the divergence that defines a good title. *Ghost* rendered into Chinese as 人鬼情未了 — roughly "the love between human and ghost was never finished" — would score badly against any literal reference, and it is the correct answer.',
          'So the study does not try to score outputs. It classifies the **operation** performed, and asks whether the operation was the right one for the cultural gap in front of it.',
        ],
        zh: [
          '标准机器翻译指标在这里毫无用处，而且差得不是一点。BLEU 与 ROUGE 衡量的是与参考字符串的重叠度，因此它们恰恰惩罚了那种定义了"好片名"的偏离。《Ghost》被译为《人鬼情未了》，在任何字面参考下都会得低分——而它才是正确答案。',
          '所以这项研究不去给输出打分。它对所执行的**操作**进行分类，并追问：面对眼前这道文化沟壑，这个操作选对了吗。',
        ],
      },
      note: {
        en: 'Reference-overlap metrics penalise exactly the behaviour that constitutes expertise. That single observation is what makes the project necessary.',
        zh: '参考重叠类指标恰好惩罚了构成专业能力的那种行为。仅此一条观察，就足以说明这个项目为什么必要。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'A three-tier model', zh: '三层分析模型' },
      body: {
        en: [
          '**Tier 1 — Strategy.** What was done: literal rendering, domestication, foreignisation, transliteration, free translation, outright re-creation. This is the layer existing scholarship already describes well, and the layer that explains the least.',
          '**Tier 2 — Cognitive operation.** How it was done: metaphor mapping, metonymy, image schemas, and above all conceptual blending. A good title is usually an emergent structure in a blended space rather than a transfer of one.',
          '**Tier 3 — Cultural schema.** Why it worked or failed. Schemas determine which source domains are even available for a metaphor and whether a blend is culturally viable. We treat the translator\'s problem as one of four operations on schemas — and the amount of cognitive work rises sharply across them.',
          'The argument the tiers let us make is directional: a strategy (Tier 1) is a *means* of performing a cognitive operation (Tier 2), whose *goal* is handling a cultural schema (Tier 3). Most existing work stops at Tier 1 and therefore describes the surface of a decision without its mechanism.',
        ],
        zh: [
          '**第一层——策略。** 做了什么：直译、归化、异化、音译、意译、彻底再创造。这是既有研究已经描述得很充分的一层，也是解释力最弱的一层。',
          '**第二层——认知运作。** 怎么做的：隐喻映射、转喻、意象图式，以及最重要的概念整合。一个好片名通常是整合空间中的涌现结构，而不是某个结构的搬移。',
          '**第三层——文化图式。** 为什么成功或失败。图式决定了隐喻可用的源域有哪些，以及某个整合在文化上是否可行。我们把译者面临的问题归为对图式的四种操作——而认知工作量在这四种之间陡然上升。',
          '三层模型让我们能提出一个有方向的论断：策略（T1）是执行某种认知运作（T2）的**手段**，而认知运作的**目标**是处理文化图式（T3）。多数既有研究停在第一层，因此只描述了决策的表面，而没有触及它的机制。',
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
          '这四类正是框架要区分的情形。点选任一项，可以看到原片名、人工译者的处理、字面或默认机器输出，以及这个差异说明了什么。条形长度表示该操作所需的认知工作量。',
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
            en: 'The lion-as-sovereign schema is shared across both cultures, so a direct metaphor mapping suffices and no blending is required. Machine and human converge, because statistical association is enough when the schemas already align. Any evaluation built only on cases like this will conclude that the problem is solved.',
            zh: '"狮子即王者"这一图式在两种文化中高度共享，因此直接的隐喻映射就足够，不需要概念整合。人机在此收敛——因为当图式本就对齐时，统计关联已经够用。任何只建立在这类案例上的评估，都会得出"问题已解决"的结论。',
          },
        },
        {
          operation: { en: 'Schema adaptation', zh: '图式调适' },
          load: 2,
          source: 'Ghost',
          human: '人鬼情未了',
          machine: '鬼',
          reading: {
            en: 'The English schema here is a tender revenant in a romance; the Chinese 鬼 schema is primarily one of horror. The two overlap but conflict. The human translator diagnosed that the emotional focus is the love and not the ghost, suppressed the horror reading, and blended three inputs — human, ghost, unfinished love — into a structure that neither language contained on its own. The literal rendering activates the wrong schema and misfiles the genre.',
            zh: '这里的英语图式是浪漫叙事中深情的亡灵，而中文"鬼"的图式主要指向恐怖。两者部分重叠却相互冲突。人工译者诊断出情感焦点在"情"而不在"鬼"，抑制了恐怖读法，并把人、鬼、未了之情三个输入整合为一个两种语言原本都不具备的结构。字面翻译激活了错误的图式，把片种都归错了。',
          },
        },
        {
          operation: { en: 'Schema creation', zh: '图式创建' },
          load: 4,
          source: '江湖儿女',
          human: 'Ash Is Purest White',
          machine: 'Rivers and Lakes',
          reading: {
            en: 'The 江湖 schema — an itinerant world with its own code of loyalty and violence — is simply absent in English. There is no source domain to map onto. The human translator gave up the literal level entirely, identified what the film is actually about, and constructed a new image capable of carrying it. The literal output is not merely worse: "Rivers and Lakes" activates a geographical schema, turning a dense cultural signifier into an empty one. This is the widest human–machine gap in the corpus.',
            zh: '"江湖"图式——一个自有忠义与暴力法则的流动世界——在英语中根本空缺，没有可映射的源域。人工译者彻底放弃字面层，识别出影片真正关于什么，并构造出一个足以承载它的新意象。字面输出不只是更差："Rivers and Lakes" 激活的是地理图式，把一个高密度的文化符号变成了空洞的能指。这是语料中人机差距最大的一类。',
          },
        },
        {
          operation: { en: 'Schema reconstruction', zh: '图式重构' },
          load: 3,
          source: 'Lolita',
          human: '一树梨花压海棠',
          machine: '洛丽塔',
          reading: {
            en: 'A line of classical Chinese poetry is recruited to carry a socially taboo subject — an old man and a young woman — with the indirection the taboo requires. The translator is acting as a cultural gatekeeper, making a normative judgement about what can be said and how. This is the operation a model is least equipped for: not because it lacks the words, but because it has no stake in the norm.',
            zh: '译者征用了一句中国古典诗来承载一个社会禁忌题材——老夫与少女——并保留了禁忌所要求的那种委婉。译者在此扮演文化守门人，对"什么能说、怎么说"做出规范性判断。这是模型最不具备条件去完成的操作：不是因为它缺词，而是因为它在这个规范里没有利害关系。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'Why "free translation" is the wrong unit of analysis', zh: '为什么"意译"是错误的分析单位' },
      body: {
        en: [
          'Traditional translation theory loads far too much onto the term *free translation*. It covers everything from mild paraphrase to total re-creation, which makes it a black box: naming it explains nothing about what happened inside.',
          'Replacing it with **transcreation**, understood as cognitive-cultural orchestration, gives the phenomenon a mechanism. The translator diagnoses how the source builds meaning, navigates whether that structure can land in the target culture, and only then recomposes. Three distinct competencies, each of which can be examined separately — and each of which a model can fail at differently.',
          'Framed this way, the interesting difference between human and machine output is not quality but *character*. Human decisions in the corpus are diagnostic and staged. Machine decisions are arbitrary in a specific technical sense: a default mapping is applied without first testing whether the source schema survives the crossing.',
        ],
        zh: [
          '传统翻译理论在"意译"这个术语上装载了太多东西。它涵盖了从轻度改写到彻底再创造的一切，因此变成一个黑箱：叫出这个名字，对箱子里发生了什么毫无解释力。',
          '把它替换为**译创**（transcreation），并理解为一种认知—文化的组构行为，就为这个现象给出了机制。译者先诊断原文如何构建意义，再判断该结构能否在目标文化中落地，最后才进行重组。这是三种可以分别检验的能力——而模型可以在每一种上以不同方式失败。',
          '这样框定之后，人机输出之间有意思的差别不在质量，而在**性质**。语料中人类的决策是诊断性的、分阶段的；机器的决策则在一个具体的技术意义上是武断的：它套用默认映射，而不先检验源图式能否活着穿过这道边界。',
        ],
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this actually stands', zh: '目前的真实进度' },
      intro: {
        en: [
          'This is a paper in preparation on a three-person team with faculty supervision. The framework and the literature are settled; the coding and the comparison are not finished, and no finding below the framework level should be read as established.',
        ],
        zh: [
          '这是一篇在写的论文，三人团队，导师指导。框架与文献部分已定型；编码与对比尚未完成。框架层以下的任何结论都不应被视为已经成立。',
        ],
      },
      items: [
        {
          label: { en: 'Theoretical framework and research questions', zh: '理论框架与研究问题' },
          state: 'shipped',
          detail: {
            en: 'Three-tier model defined, four schema operations specified, transcreation adopted as the organising construct.',
            zh: '三层模型已定义，四种图式操作已界定，并确立以"译创"作为组织性构念。',
          },
        },
        {
          label: { en: 'Literature synthesis', zh: '文献综述' },
          state: 'shipped',
          detail: {
            en: 'Written across functionalist title translation, regional norm divergence within Greater China, the LLM translation paradigm shift, and documented cultural bias in frontier models. All DOIs resolved and verified field by field.',
            zh: '涵盖功能主义片名翻译、大中华区内部规范差异、LLM 翻译范式转移，以及前沿模型中已被记录的文化偏见。所有 DOI 均逐字段核验。',
          },
        },
        {
          label: { en: 'Corpus construction', zh: '语料构建' },
          state: 'shipped',
          detail: {
            en: '100 title pairs in both directions, sampled for culture-specific items, contested renderings across Mainland, Hong Kong and Taiwan, and coverage of all four schema operations.',
            zh: '双向共 100 对片名，按文化特有项、大陆/香港/台湾译名分歧、以及四种图式操作的覆盖度抽样。',
          },
        },
        {
          label: { en: 'Coding manual and reliability check', zh: '编码手册与信度检验' },
          state: 'instrumented',
          detail: {
            en: 'Three-tier coding scheme drafted and pre-coded on the hardest cases to test whether the theoretical definitions survive contact with data. Full inter-coder reliability is pending.',
            zh: '三层编码方案已起草，并在最难的案例上做过预编码，用于检验理论定义能否经受数据的检验。完整的编码者间信度尚未完成。',
          },
        },
        {
          label: { en: 'LLM output generation and comparison', zh: 'LLM 输出生成与对比' },
          state: 'planned',
          detail: {
            en: 'Systematic generation across the full corpus and the human–machine comparison are the next phase.',
            zh: '在完整语料上系统生成输出，以及人机对比分析，属于下一阶段工作。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'Why this sits next to the other two projects', zh: '这个项目为什么和另外两个放在一起' },
      body: {
        en: [
          'It looks like the odd one out — a humanities paper between two pieces of software. It is actually the same question in a different instrument.',
          'PaperCraft asks where a teacher\'s judgement remains irreplaceable inside a generation pipeline, and answers it with edit distances. This study asks where a translator\'s cultural judgement remains irreplaceable, and answers it with schema operations. Both refuse to evaluate a model by looking at its output. Both put the human contribution on the dependent-variable side, where it can be measured instead of asserted.',
          'The translation work is also where I learned that a construct has to be operationalised before it can be studied — which is the single most transferable thing I have taken into building learning systems.',
        ],
        zh: [
          '它看起来是三者中的异类——两个软件项目中间夹了一篇人文论文。实际上它是同一个问题换了一件仪器。',
          'PaperCraft 追问的是：在生成管线内部，教师的判断在哪里仍然不可替代——它用编辑距离来回答。这项研究追问的是：译者的文化判断在哪里仍然不可替代——它用图式操作来回答。两者都拒绝"靠看输出来评价模型"。两者都把人的贡献放到因变量那一侧，使它可以被测量，而不只是被断言。',
          '翻译研究也是我学会"一个构念必须先被操作化，才可能被研究"的地方——这是我带进学习系统构建中最具迁移价值的一件事。',
        ],
      },
    },
  ],
};
