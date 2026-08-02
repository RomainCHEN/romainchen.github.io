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
    zh: '语言模型从哪一刻起不再是译者，而只是个模式匹配器',
  },
  blurb: {
    en: 'A corpus study of film title translation that uses cultural schema theory to locate exactly which cognitive operations humans perform and LLMs cannot.',
    zh: '一项电影片名翻译的语料研究，用文化图式理论去定位哪些认知操作人做得到、而大模型做不到。',
  },
  period: { en: 'Oct 2025 to present', zh: '2025 年 10 月至今' },
  role: {
    en: 'Co-author, three-person faculty-advised team, responsible for the cognitive-linguistic framing and literature synthesis',
    zh: '合著者，三人小组，导师指导；我负责认知语言学框架与文献综述',
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
        zh: '官方人工译名对两个前沿模型',
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
          'A film title is a hard translation problem disguised as a trivial one. It is four words long and it has to do three incompatible jobs at once: describe the film, land emotionally in a culture that did not produce it, and sell tickets.',
          'This is why titles are the cleanest available probe for the question everyone is arguing about badly. When a translator abandons the literal meaning, is that a failure of fidelity or an act of expertise? And can a model that has never lived inside a culture do the same thing?',
        ],
        zh: [
          '电影片名看着是小事，其实是道难题。就那么几个字，却要同时干三件互相打架的事，既得说清这是部什么电影，又得在一个并非孕育它的文化里打动人，最后还得把票卖出去。',
          '有个问题吵了很多年也没吵明白，译者放弃字面意思，到底算不忠实，还是本来就是专业判断。片名短，争议又集中，是最适合拿来问这个问题的材料。往下还连着一问，一个从没在那个文化里生活过的模型，做不做得到同样的事。',
        ],
      },
    },
    {
      kind: 'prose',
      heading: { en: 'The measurement problem', zh: '难的不是翻译，是怎么量' },
      body: {
        en: [
          'The standard machine translation metrics are useless here, and not by a small margin. BLEU and ROUGE score overlap with a reference string, so they actively penalise the divergence that defines a good title. *Ghost* rendered into Chinese as 人鬼情未了， roughly "the love between human and ghost was never finished", would score badly against any literal reference, and it is the correct answer.',
          'So the study does not try to score outputs. It classifies the **operation** performed, and asks whether the operation was the right one for the cultural gap in front of it.',
        ],
        zh: [
          '常用的那套机器翻译指标在这里完全不管用，而且不是差一点。BLEU 和 ROUGE 衡量的是跟参考译文重叠了多少，于是它们扣分扣掉的，恰恰是一个好片名之所以好的那处偏离。《Ghost》译成《人鬼情未了》，对着任何字面参考都拿不到分，可它偏偏就是对的。',
          '所以这项研究不给输出打分，只把译者做出的**操作**归类，然后问一句，面对眼前这道文化沟壑，他这一步选对了吗。',
        ],
      },
      note: {
        en: 'Reference-overlap metrics penalise exactly the behaviour that constitutes expertise. That single observation is what makes the project necessary.',
        zh: '看重叠度的指标，罚的恰恰是专业能力本身。就这一条，就够说明这个项目为什么有必要做。',
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
        zh: '最初那张课程海报《电影标题的中英翻译》，做成剪贴簿的样子，十个编号的策略类别。每一类都写了策略、理论依据、示例，以及与机器翻译的对比。',
      },
      caption: {
        en: 'Where this started: a course poster for an English-Chinese contrastive translation class. It is printed small, so open the full sheet to read it. It already did more than sort titles into ten categories. Each category carries a stated rationale and a comparison against machine output, so the human-versus-AI question was there from the beginning. What it does not have is a mechanism. The rationale is asserted case by case, which means the categories cannot predict anything about a title they have not already seen. Turning those assertions into an account of what the translator is doing cognitively is the whole distance between this poster and the three-tier model.',
        zh: '起点是这张海报，英汉对比翻译课上的小组展示。原件排得很密，正文要点开完整原图才看得清。它做的其实不止是把片名分成十类，每一类下面都写了理论依据，还附了跟机器翻译的对比，所以人对 AI 这个问题从一开始就在。它缺的是机制。理由是一例一说的，于是这套分类对没见过的片名什么也预测不了。把这些逐例的说法，换成一套关于译者在认知上究竟做了什么的解释，就是这张海报和三层模型之间的全部距离。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'A three-tier model', zh: '三层分析模型' },
      body: {
        en: [
          'The first tier is strategy, meaning what was done: literal rendering, domestication, foreignisation, transliteration, free translation, outright re-creation. This is the layer existing scholarship already describes well, and the layer that explains the least.',
          'The second is the cognitive operation, meaning how it was done: metaphor mapping, metonymy, image schemas, and above all conceptual blending. A good title is usually an emergent structure in a blended space rather than a transfer of one.',
          'The third is the cultural schema, which decides whether it worked. Schemas determine which source domains are even available for a metaphor and whether a blend is culturally viable. We treat the translator\'s problem as one of four operations on schemas, and the amount of cognitive work they demand differs sharply.',
          'The argument the tiers let us make is directional: a strategy at Tier 1 is a *means* of performing a cognitive operation at Tier 2, whose *goal* is handling a cultural schema at Tier 3. Most existing work stops at Tier 1 and therefore describes the surface of a decision without its mechanism.',
        ],
        zh: [
          '第一层是策略，也就是做了什么，直译、归化、异化、音译、意译，一直到彻底再创作。既有研究把这一层描述得很细了，可它恰恰是解释力最弱的一层。',
          '第二层是认知运作，也就是怎么做的，隐喻映射、转喻、意象图式，还有最关键的概念整合。一个好片名往往是在整合空间里新长出来的结构，不是把原来那个结构原样搬过去。',
          '第三层是文化图式，成或不成最后都归到这里。图式管着隐喻能用哪些源域，也管着某次整合在文化上走不走得通。我们把译者面临的问题归成对图式的四种操作，这四种要求的认知工作量相差很大。',
          '三层摆开之后，就能提出一个有方向的论断。第一层的策略是**手段**，用来完成第二层的认知运作，而认知运作的**目的**在第三层，是把文化图式处理掉。多数既有研究停在第一层，描述的只是决策的表面，没碰到里头的机制。',
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
          '这四类正是框架要区分开的情形。点任意一项，可以看到原片名、人工译者的处理、字面或机器默认输出，以及这个差别说明了什么。条形长度表示这项操作需要多少认知工作量。',
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
            zh: '狮子就是王者，这套图式两种文化里都有，所以直接做隐喻映射就够了，用不上概念整合。人和机器在这里会撞出同一个答案，因为图式本来就对齐的时候，统计关联已经够用了。要是只拿这类案例做评估，结论一定是问题已经解决。',
          },
        },
        {
          operation: { en: 'Schema adaptation', zh: '图式调适' },
          load: 2,
          source: 'Ghost',
          human: '人鬼情未了',
          machine: '鬼',
          reading: {
            en: 'The English schema here is a tender revenant in a romance; the Chinese 鬼 schema is primarily one of horror. The two overlap but conflict. The human translator diagnosed that the emotional focus is the love and not the ghost, suppressed the horror reading, and blended three inputs, human, ghost and unfinished love, into a structure that neither language contained on its own. The literal rendering activates the wrong schema and misfiles the genre.',
            zh: '英语这边的图式是爱情故事里那个深情的亡灵，中文里的“鬼”却主要指向恐怖，两套图式有重叠，可也打架。人工译者判断出情感焦点在“情”不在“鬼”，先把恐怖那一层压下去，再把“人”“鬼”“情未了”三样东西整合到一起，最后得出一个两种语言原本都没有的结构。字面直译激活的是错的那套图式，连片种都归错了。',
          },
        },
        {
          operation: { en: 'Schema creation', zh: '图式创建' },
          load: 4,
          source: '江湖儿女',
          human: 'Ash Is Purest White',
          machine: 'Rivers and Lakes',
          reading: {
            en: 'The 江湖 schema, an itinerant world with its own code of loyalty and violence, is simply absent in English. There is no source domain to map onto. The human translator gave up the literal level entirely, identified what the film is actually about, and constructed a new image capable of carrying it. The literal output is not merely worse: "Rivers and Lakes" activates a geographical schema, turning a dense cultural signifier into an empty one. This is the widest human-machine gap in the corpus.',
            zh: '“江湖”是一个自有忠义与暴力法则的流动世界，这套图式在英语里根本没有对应的东西，也就没有源域可以映射。人工译者索性把字面层整个放掉，先想清影片到底在讲什么，再造一个能承载它的新意象。字面输出不是差一点的问题，Rivers and Lakes 激活的是地理图式，一个密度极高的文化符号就这么变成了空壳。这也是全部语料里人机差距最大的一类。',
          },
        },
        {
          operation: { en: 'Schema reconstruction', zh: '图式重构' },
          load: 3,
          source: 'Lolita',
          human: '一树梨花压海棠',
          machine: '洛丽塔',
          reading: {
            en: 'A line of classical Chinese poetry is recruited to carry a socially taboo subject, an old man and a young woman, with the indirection the taboo requires. The translator is acting as a cultural gatekeeper, making a normative judgement about what can be said and how. This is the operation a model is least equipped for, not because it lacks the words, but because it has no stake in the norm.',
            zh: '译者搬来一句中国古诗，用它去承载老夫与少女这个禁忌题材，而禁忌要求的那种含蓄，恰好被这句诗保住了。这时候译者做的是文化守门人，替读者判断什么能说、能说到什么程度。这也是模型最难胜任的一种操作，它不缺词，缺的是在这套规范里的利害关系。',
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
            zh: '最低。两边图式共享或容易对等，任务只是做到形式对应。',
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
            zh: '中等。图式部分重叠，要压住会冲突的那层读法，同时把想要的那层顶起来。',
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
            zh: '最高。目标文化里没有对应图式，必须另造一个意象来承载主题。',
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
            zh: '高。源语图式和目标文化的规范或价值观冲突，需要整个换掉框架，而不是微调。',
          },
          {
            en: '`MRK` market reshaping · `ADD` added context · `Cultural Substitution` · `Domestication`',
            zh: '`MRK` 市场化重塑 · `ADD` 增补语境 · `Cultural Substitution` 文化替代 · `Domestication` 归化',
          },
        ],
      ],
      caption: {
        en: 'Each strategy code is defined against its relationship to the cultural schema rather than by surface form, which is what lets a single code mean the same thing across two coders and two translation directions.',
        zh: '每个策略代码都按它跟文化图式的关系来定义，而不是按表面形式。正因如此，同一个代码在两位编码者手里、在两个翻译方向上，指的才是同一件事。',
      },
    },
    {
      kind: 'prose',
      heading: { en: 'Why "free translation" is the wrong unit of analysis', zh: '为什么意译不该当分析单位' },
      body: {
        en: [
          'Traditional translation theory loads far too much onto the term *free translation*. It covers everything from mild paraphrase to total re-creation, which makes it a black box: naming it explains nothing about what happened inside.',
          'Replacing it with **transcreation**, understood as cognitive-cultural orchestration, gives the phenomenon a mechanism. The translator diagnoses how the source builds meaning, navigates whether that structure can land in the target culture, and only then recomposes. Three distinct competencies, each of which can be examined separately, and each of which a model can fail at differently.',
          'Framed this way, the interesting difference between human and machine output is not quality but *character*. Human decisions in the corpus are diagnostic and staged. Machine decisions are arbitrary in a specific technical sense: a default mapping is applied without first testing whether the source schema survives the crossing.',
        ],
        zh: [
          '传统翻译理论往意译这个词上堆了太多东西，从轻度改写一直堆到彻底再创作，最后它成了一个黑箱。你说出这个名字，等于什么都没说。',
          '换成**译创**，再把它理解成一次认知与文化上的组构，这个现象才算有了机制。译者先诊断原文是怎么把意思立起来的，然后判断这个结构能不能在目标文化里落地，最后才动手重组。这里头是三种可以分开检验的能力，模型在每一种上都可能以不同方式失手。',
          '这样看下来，人机输出之间真正有意思的差别不在质量，在**性质**。语料里人的决策是诊断式的，一步一步走；机器的决策则是武断的。武断在哪儿？它直接套用默认映射，没先看看源图式能不能活着穿过这道边界。',
        ],
      },
    },
    {
      kind: 'evidence',
      heading: { en: 'Where this actually stands', zh: '现在到了哪一步' },
      intro: {
        en: [
          'This is a paper in preparation on a three-person team with faculty supervision. The framework and the literature are settled; the coding and the comparison are not finished, and no finding below the framework level should be read as established.',
        ],
        zh: [
          '这是一篇在写的论文，三人小组，导师指导。框架和文献部分已经定下来了，编码和对比还没做完；框架层以下的任何结论，都不应该当成已经成立。',
        ],
      },
      items: [
        {
          label: { en: 'Theoretical framework and research questions', zh: '理论框架与研究问题' },
          state: 'shipped',
          detail: {
            en: 'Three-tier model defined, four schema operations specified, transcreation adopted as the organising construct.',
            zh: '三层模型已定义，四种图式操作已界定，并确定用译创作为统领全文的构念。',
          },
        },
        {
          label: { en: 'Literature synthesis', zh: '文献综述' },
          state: 'shipped',
          detail: {
            en: 'Written across functionalist title translation, regional norm divergence within Greater China, the LLM translation paradigm shift, and documented cultural bias in frontier models. All DOIs resolved and verified field by field.',
            zh: '覆盖功能主义片名翻译、大中华区内部的规范差异、大模型带来的翻译范式转移，以及前沿模型已被记录的文化偏见。所有 DOI 都逐字段核对过。',
          },
        },
        {
          label: { en: 'Corpus construction', zh: '语料构建' },
          state: 'shipped',
          detail: {
            en: '100 title pairs in both directions, sampled for culture-specific items, contested renderings across Mainland, Hong Kong and Taiwan, and coverage of all four schema operations. Each row carries the source title, year, genre, the official human release title, and the poster art for both markets.',
            zh: '双向共 100 对片名，抽样时看三样东西，文化特有项、大陆港台三地的译名分歧，以及四种图式操作的覆盖度。每一行都带原片名、上映年份、影片类型、官方人工译名，以及两地的海报图。',
          },
        },
        {
          label: { en: 'LLM output collection', zh: '模型输出采集' },
          state: 'shipped',
          detail: {
            en: 'Two frontier models, DeepSeek R1 and Gemini 2.5 Pro, have been run across the corpus, so every source title now sits beside a human release title and two machine renderings in the same row. That side-by-side arrangement is the whole instrument.',
            zh: 'DeepSeek R1 和 Gemini 2.5 Pro 都已经在全部语料上跑过。现在每个原片名都和官方人工译名、两份机器输出并排在同一行。这样摆开，本身就是这项研究的量具。',
          },
        },
        {
          label: { en: 'Coding manual and reliability check', zh: '编码手册与信度检验' },
          state: 'instrumented',
          detail: {
            en: 'The three-tier scheme is written down to the level of named strategy codes, each defined by its relationship to the cultural schema, and pre-coded on the hardest cases to test whether the definitions survive contact with data. Full inter-coder reliability is pending.',
            zh: '三层方案已经细到具名策略代码，每个代码都按它跟文化图式的关系来定义。我们先在最难的几个案例上试编了一遍，看这些定义碰上真实数据还立不立得住。完整的编码者间信度还没做。',
          },
        },
        {
          label: { en: 'Human-machine comparison and findings', zh: '人机对比与结论' },
          state: 'planned',
          detail: {
            en: 'Coding the full corpus and reporting the distribution of operations across human and machine output is the next phase. Nothing on this page beyond the framework should be read as a result.',
            zh: '给全部语料编码、并报告人机输出在各类操作上的分布，是下一阶段的工作。本页除框架之外的内容，都不该当成结论看。',
          },
        },
      ],
    },
    {
      kind: 'prose',
      heading: { en: 'Why this sits next to the other two projects', zh: '它为什么和另外两个项目放在一起' },
      body: {
        en: [
          'It looks like the odd one out, a humanities paper between two pieces of software. It is actually the same question in a different instrument.',
          'PaperCraft asks where a teacher\'s judgement remains irreplaceable inside a generation pipeline, and answers it with edit distances. This study asks where a translator\'s cultural judgement remains irreplaceable, and answers it with schema operations. Both refuse to evaluate a model by looking at its output. Both put the human contribution on the dependent-variable side, where it can be measured instead of asserted.',
          'The translation work is also where I learned that a construct has to be operationalised before it can be studied, which is the single most transferable thing I have taken into building learning systems.',
        ],
        zh: [
          '这个项目看着像三个里最不搭的，两个软件中间夹了一篇人文论文。其实它问的是同一个问题，只是换了一把尺子来量。',
          'PaperCraft 问的是在生成管线内部，教师的判断哪里仍然不可替代，它用编辑距离来回答；这项研究问的是译者的文化判断哪里仍然不可替代，它用图式操作来回答。两边都不肯靠看输出来评价模型，也都把人的贡献挪到因变量那一侧，好让它能被量出来，不是只被嘴上断言。',
          '翻译这条线还教了我一件事，一个概念必须先被操作化，才谈得上研究它。这是我带进学习系统开发里最管用的一条经验。',
        ],
      },
    },
  ],
};
