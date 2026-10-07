import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Plant Growth and Development
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'plant-growth-and-development-1',
    type: 'mcq',
    question: 'Growth in living organisms is best defined as an irreversible, permanent:',
    options: [
      'Increase in size of an organ, its parts, or even an individual cell',
      'Temporary, reversible change in cell shape only',
      'Decrease in size of an organ, its parts, or an individual cell',
      'Loss of genetic material from a cell'
    ],
    correctIndex: 0,
    explanation: 'Growth is defined as an irreversible, permanent increase in the size of an organ, its parts, or even a single cell.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-2',
    type: 'mcq',
    question: 'A characteristic feature of growth in plants is that it is generally described as indeterminate (open), meaning that plants:',
    options: [
      'Never grow at all after germination',
      'Grow only during a single, brief period early in their life',
      'Stop growing entirely once they reach a fixed, predetermined size',
      'Retain the capacity for potentially unlimited growth throughout their life, due to the presence of meristems'
    ],
    correctIndex: 3,
    explanation: 'Plants show indeterminate (open) growth, retaining the ability to grow throughout their lifetime, largely due to the continuous activity of meristematic tissues.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-3',
    type: 'mcq',
    question: 'In plants, active growth is generally restricted to specific regions containing meristematic tissue, such as the root apex, shoot apex, and:',
    options: [
      'Mature bark tissue exclusively',
      'Intercalary meristems',
      'Fully lignified xylem tissue exclusively',
      'Fully mature, differentiated leaf tissue exclusively'
    ],
    correctIndex: 1,
    explanation: 'Active growth in plants is largely confined to meristematic regions, including the root apex, shoot apex, and intercalary meristems (found at the base of internodes or leaves in some plants).',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-4',
    type: 'mcq',
    question: 'Growth in plants can be quantitatively measured using various parameters, including increase in fresh weight, dry weight, length, area, volume, and:',
    options: [
      'Cell number',
      'Only soil pH',
      'Only atmospheric temperature',
      'Only the plant\'s overall colour'
    ],
    correctIndex: 0,
    explanation: 'Common quantitative parameters used to measure plant growth include increases in fresh weight, dry weight, length, area, volume, and cell number.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-5',
    type: 'mcq',
    question: 'Since growth is generally considered irreversible, this distinguishes it from other reversible changes, such as:',
    options: [
      'The permanent elongation of a root',
      'The temporary wilting of a leaf due to water loss, which can be reversed upon rehydration',
      'The permanent thickening of a tree trunk',
      'The permanent increase in the number of cells in a growing tissue'
    ],
    correctIndex: 1,
    explanation: 'Unlike growth, which is a permanent, irreversible increase in size, phenomena like temporary wilting (which can be reversed by rehydration) are reversible and thus not considered true growth.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-6',
    type: 'mcq',
    question: 'In a typical growing region such as the root apex, growth proceeds through three sequential phases: the meristematic phase, the elongation phase, and the:',
    options: [
      'Senescence phase',
      'Dormancy phase',
      'Abscission phase',
      'Maturation phase'
    ],
    correctIndex: 3,
    explanation: 'Growth in regions like the root apex proceeds through three sequential phases: meristematic, elongation, and maturation.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-7',
    type: 'mcq',
    question: 'Cells in the meristematic phase of growth, located at the root or shoot apex, are characteristically:',
    options: [
      'Fully differentiated and specialised for a specific function',
      'Completely devoid of any cytoplasm',
      'Rich in protoplasm, small in size, with a thin cellulosic cell wall and a prominent nucleus',
      'Extremely large, having already undergone maximal elongation'
    ],
    correctIndex: 2,
    explanation: 'Meristematic cells are characteristically small, richly protoplasmic, possess a thin cellulosic wall, and have a prominent nuclear region.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-8',
    type: 'mcq',
    question: 'Cells located just proximal to the meristematic zone, undergoing increased vacuolation and cell enlargement, are said to be in the:',
    options: [
      'Senescence phase',
      'Meristematic phase',
      'Elongation phase',
      'Maturation phase'
    ],
    correctIndex: 2,
    explanation: 'The elongation phase involves cells located just proximal to the meristematic zone, characterised by increasing vacuolation and cell enlargement.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-9',
    type: 'mcq',
    question: 'Cells that attain their maximal size (in terms of wall thickening and protoplasmic modifications), and undergo differentiation to acquire specific mature structures/functions, are said to be in the:',
    options: [
      'Maturation phase',
      'Elongation phase',
      'Dormancy phase',
      'Meristematic phase'
    ],
    correctIndex: 0,
    explanation: 'In the maturation phase, cells attain their maximal size and undergo the structural and metabolic modifications necessary to mature and perform specific functions.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-10',
    type: 'mcq',
    question: 'Which of the following represents the correct sequential order of the three phases of growth in a typical growing region?',
    options: [
      'Elongation phase, meristematic phase, maturation phase',
      'Maturation phase, elongation phase, meristematic phase',
      'Meristematic phase, elongation phase, maturation phase',
      'Maturation phase, meristematic phase, elongation phase'
    ],
    correctIndex: 2,
    explanation: 'The three phases of growth occur in the sequential order: meristematic phase, followed by elongation phase, and finally maturation phase.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-11',
    type: 'mcq',
    question: 'A growth pattern in which only one daughter cell, following mitotic division, continues to divide while the other differentiates and matures, resulting in a linear increase in length over time, is called:',
    options: [
      'Sigmoid growth exclusively',
      'Geometric growth',
      'Exponential growth exclusively',
      'Arithmetic growth'
    ],
    correctIndex: 3,
    explanation: 'Arithmetic growth occurs when only one of the two daughter cells continues to divide, resulting in a constant, linear rate of growth over time, as classically seen in a constantly elongating root.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-12',
    type: 'mcq',
    question: 'The mathematical expression for arithmetic growth, Lt = L0 + rt, describes a growth pattern that, when plotted graphically, produces a:',
    options: [
      'Sigmoid (S-shaped) curve',
      'A perfect circle',
      'Straight (linear) line',
      'An exponential curve, rising steeply with no linear phase'
    ],
    correctIndex: 2,
    explanation: 'The arithmetic growth equation, Lt = L0 + rt, describes a constant rate of increase over time, producing a straight (linear) line when plotted graphically.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-13',
    type: 'mcq',
    question: 'A growth pattern in which both daughter cells produced by mitotic division typically continue to divide, resulting in a continuously accelerating rate of growth, is called:',
    options: [
      'Linear growth exclusively',
      'Arithmetic growth',
      'Geometric growth',
      'Dormant growth'
    ],
    correctIndex: 2,
    explanation: 'Geometric growth occurs when both daughter cells continue to divide, leading to a progressively accelerating (multiplicative) increase in growth over time.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-14',
    type: 'mcq',
    question: 'In a typical geometric growth pattern under natural conditions with limited resources, an initial slow growth phase (lag phase) is followed by a rapid growth phase, and finally a phase where growth rate declines due to limiting nutrients, called the:',
    options: [
      'Meristematic phase',
      'Stationary phase',
      'Elongation phase',
      'Log (exponential) phase'
    ],
    correctIndex: 1,
    explanation: 'Following the initial lag phase and the rapid log (exponential) phase, growth eventually slows and plateaus as nutrients become limiting, entering what is called the stationary phase.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-15',
    type: 'mcq',
    question: 'When geometric growth (comprising lag, log, and stationary phases) is plotted graphically over time, the resulting curve characteristically takes the shape of a:',
    options: [
      'A simple downward-sloping line',
      'Perfectly straight (linear) line',
      'A perfect circle',
      'Sigmoid (S-shaped) curve'
    ],
    correctIndex: 3,
    explanation: 'The characteristic pattern of geometric growth under natural, resource-limited conditions produces a sigmoid (S-shaped) growth curve when plotted against time.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-16',
    type: 'mcq',
    question: 'The mathematical expression for geometric growth, W1 = W0e^rt, includes the term \'r,\' which represents the:',
    options: [
      'The base of the natural logarithm exclusively',
      'The exact time elapsed, with no other meaning',
      'Growth rate (also called the efficiency index)',
      'Total, final size of the organism only'
    ],
    correctIndex: 2,
    explanation: 'In the geometric growth equation, W1 = W0e^rt, the parameter \'r\' represents the growth rate, sometimes also referred to as the efficiency index.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-17',
    type: 'mcq',
    question: 'The growth rate parameter \'r\' (efficiency index) obtained from the geometric growth equation is particularly useful because it allows for:',
    options: [
      'The direct calculation of a plant\'s genetic sequence',
      'The exact prediction of a plant\'s final adult height, with no possible error',
      'A meaningful comparison of the growth performance between two different plants (or plant parts)',
      'The complete elimination of the need for any further growth measurement'
    ],
    correctIndex: 2,
    explanation: 'The efficiency index (r) derived from the geometric growth equation provides a useful, standardised basis for comparing the growth performance of different plants or plant parts.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-18',
    type: 'mcq',
    question: 'In nature, geometric growth is generally considered more common than arithmetic growth mainly because:',
    options: [
      'Geometric growth requires the complete absence of any nutrients',
      'Arithmetic growth is the exclusive pattern observed in all natural plant growth',
      'Cells in nature never divide at all',
      'Most growing cells in a tissue typically continue to divide, rather than only one daughter cell continuing as in arithmetic growth'
    ],
    correctIndex: 3,
    explanation: 'Geometric growth is generally more prevalent in nature because most dividing cells in a growing tissue continue to divide, unlike the more restrictive pattern of arithmetic growth, where typically only one daughter cell continues dividing.',
    difficulty: 'hard'
  },
  {
    id: 'plant-growth-and-development-19',
    type: 'mcq',
    question: 'The \'relative growth rate\' of a plant or plant organ is generally expressed as the growth of a given system per unit time, expressed on a common basis relative to:',
    options: [
      'The plant\'s final adult height, regardless of the starting point',
      'The initial value of the parameter being measured (such as initial size or weight)',
      'The exact atmospheric pressure at the time of measurement',
      'The number of flowers produced, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Relative growth rate expresses growth per unit time relative to the initial value of the measured parameter (such as initial length, weight, or area), providing a standardised comparative measure.',
    difficulty: 'hard'
  },
  {
    id: 'plant-growth-and-development-20',
    type: 'mcq',
    question: 'Water is considered an essential requirement for plant growth mainly because it provides the necessary turgidity for cell elongation and serves as a medium for:',
    options: [
      'Enzymatic and other metabolic activities within the cell',
      'Only the transport of pollen grains',
      'Only seed dispersal',
      'Only photosynthesis, with no other cellular role'
    ],
    correctIndex: 0,
    explanation: 'Water is essential for plant growth because it provides cell turgidity necessary for elongation and serves as the medium in which enzymatic and metabolic reactions occur.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-21',
    type: 'mcq',
    question: 'Oxygen is considered essential for plant growth primarily because it is required for:',
    options: [
      'Direct absorption of light for photosynthesis',
      'The release of metabolic energy through respiration',
      'Water absorption by root hairs exclusively',
      'Direct synthesis of chlorophyll, with no other role'
    ],
    correctIndex: 1,
    explanation: 'Oxygen is essential for growth because it is required for cellular respiration, the process that releases the metabolic energy needed to support growth-related activities.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-22',
    type: 'mcq',
    question: 'Besides water and oxygen, plant growth also fundamentally requires an adequate supply of:',
    options: [
      'Complete darkness at all times',
      'Essential nutrients (both macro and micro elements)',
      'Constantly freezing temperatures',
      'Only artificial fertilisers, with no need for natural nutrients'
    ],
    correctIndex: 1,
    explanation: 'Alongside water and oxygen, an adequate supply of essential macro- and micronutrients is fundamentally required to support the synthesis of protoplasm, cell walls, and overall plant growth.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-23',
    type: 'mcq',
    question: 'The process by which cells derived from meristematic tissue undergo structural and functional changes to acquire specific, mature forms suited to their eventual function is called:',
    options: [
      'Differentiation',
      'Senescence',
      'Redifferentiation',
      'Dedifferentiation'
    ],
    correctIndex: 0,
    explanation: 'Differentiation refers to the process by which cells derived from meristematic tissue develop the specific structures and characteristics needed to perform their designated functions.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-24',
    type: 'mcq',
    question: 'The process by which living, differentiated cells regain the capacity to divide under certain specific conditions is called:',
    options: [
      'Differentiation',
      'Redifferentiation',
      'Dedifferentiation',
      'Abscission'
    ],
    correctIndex: 2,
    explanation: 'Dedifferentiation refers to the process by which mature, differentiated cells regain the ability to divide, given appropriate conditions.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-25',
    type: 'mcq',
    question: 'A classic example of dedifferentiation in plants is the formation of the interfascicular cambium and cork cambium, which arise from:',
    options: [
      'The germinating pollen grain exclusively',
      'Cells that have never differentiated at all',
      'Fully differentiated parenchyma cells that regain the ability to divide',
      'Fully differentiated cells that permanently lose all metabolic activity'
    ],
    correctIndex: 2,
    explanation: 'The formation of the interfascicular cambium and cork cambium from previously differentiated, mature parenchyma cells is a classic example of dedifferentiation in plants.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-26',
    type: 'mcq',
    question: 'The process by which cells produced by a dedifferentiated tissue eventually lose their capacity to divide and instead mature again to perform a specific function is called:',
    options: [
      'Redifferentiation',
      'Dedifferentiation',
      'Senescence',
      'Differentiation, occurring for the first time'
    ],
    correctIndex: 0,
    explanation: 'Redifferentiation describes the process by which cells derived from previously dedifferentiated tissue mature once more, losing their renewed capacity for division and instead performing a specific function.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-27',
    type: 'mcq',
    question: 'A classic example of redifferentiation is seen in the cells of secondary xylem and secondary phloem, which are ultimately produced by the activity of the:',
    options: [
      'Endodermis',
      'Apical meristem exclusively',
      'Vascular cambium (a dedifferentiated tissue)',
      'Root cap'
    ],
    correctIndex: 2,
    explanation: 'The secondary xylem and phloem cells produced by the vascular cambium (itself formed through dedifferentiation) subsequently mature and specialise, exemplifying redifferentiation.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-28',
    type: 'mcq',
    question: 'The overall concept illustrated by dedifferentiation (whereby mature cells can regain the ability to divide) is closely related to the broader biological concept of:',
    options: [
      'Photorespiration',
      'Chemiosmosis',
      'Totipotency',
      'Photophosphorylation'
    ],
    correctIndex: 2,
    explanation: 'Dedifferentiation, in which mature cells regain division capacity, closely relates to the broader concept of totipotency - the potential of a cell to develop into a complete organism or regenerate lost tissues.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-29',
    type: 'mcq',
    question: 'Development in plants is generally considered to be the sum total of two key processes:',
    options: [
      'Growth and differentiation',
      'Respiration and photosynthesis only',
      'Transpiration and osmosis only',
      'Dormancy and senescence only'
    ],
    correctIndex: 0,
    explanation: 'Plant development is considered the combined result of both growth (increase in size) and differentiation (acquisition of specific structure/function).',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-30',
    type: 'mcq',
    question: 'During development, a cell, tissue, or organ can follow one of two broadly divergent developmental pathways: vegetative development or:',
    options: [
      'Only continued meristematic activity, with no other option',
      'Only dormancy, with no other option',
      'Reproductive development',
      'Only senescence, with no other option'
    ],
    correctIndex: 2,
    explanation: 'Plant development can proceed along either a vegetative pathway (e.g., leaf formation) or a reproductive pathway (e.g., floral organ formation).',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-31',
    type: 'mcq',
    question: 'The ability of plants to follow different developmental pathways in response to environmental conditions or different phases of life, resulting in the formation of different kinds of structures, is called:',
    options: [
      'Plasticity',
      'Abscission',
      'Totipotency',
      'Dormancy'
    ],
    correctIndex: 0,
    explanation: 'Plasticity refers to the ability of plants to adopt different developmental pathways depending on environmental conditions or life stage, resulting in variable structural outcomes.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-32',
    type: 'mcq',
    question: 'Heterophylly, a classic example of developmental plasticity, refers to the phenomenon in which a single plant produces:',
    options: [
      'Flowers of identical shape throughout its entire life',
      'Leaves of different shapes at different developmental stages or in different environmental conditions',
      'Roots of identical shape at all developmental stages',
      'Only a single leaf throughout its entire life'
    ],
    correctIndex: 1,
    explanation: 'Heterophylly describes the phenomenon in which a plant produces differently shaped leaves depending on its developmental stage (e.g., juvenile versus mature) or the surrounding environment.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-33',
    type: 'mcq',
    question: 'Heterophylly is well illustrated in certain aquatic plants, such as buttercup, in which the shape of submerged leaves differs markedly from that of:',
    options: [
      'The seeds of the same plant',
      'The aerial (above-water) leaves of the same plant',
      'The roots of a completely different, unrelated plant species',
      'The stem of the same plant'
    ],
    correctIndex: 1,
    explanation: 'In aquatic plants like buttercup, submerged leaves often show a markedly different shape compared to the aerial leaves of the same individual plant, exemplifying heterophylly.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-34',
    type: 'mcq',
    question: 'Plant Growth Regulators (PGRs), also known as phytohormones, are generally small, simple molecules that can be broadly categorised, based on their function, into growth promoters and:',
    options: [
      'Only structural proteins',
      'Growth-neutral molecules exclusively, with no other category',
      'Only digestive enzymes',
      'Growth inhibitors'
    ],
    correctIndex: 3,
    explanation: 'Plant growth regulators are broadly classified into two functional categories: growth promoters and growth inhibitors.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-35',
    type: 'mcq',
    question: 'Which of the following is generally classified as a growth-promoting plant growth regulator?',
    options: [
      'Auxin',
      'Only inorganic salts, which are not hormones',
      'Only water, which is not a hormone at all',
      'Abscisic acid'
    ],
    correctIndex: 0,
    explanation: 'Auxin is one of the classic growth-promoting plant growth regulators, alongside gibberellins and cytokinins.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-36',
    type: 'mcq',
    question: 'Which of the following is generally classified as a growth-inhibiting plant growth regulator?',
    options: [
      'Gibberellin',
      'Cytokinin',
      'Abscisic acid',
      'Auxin'
    ],
    correctIndex: 2,
    explanation: 'Abscisic acid (ABA) is the classic example of a growth-inhibiting plant growth regulator, often referred to as the \'stress hormone.\'',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-37',
    type: 'mcq',
    question: 'Plant growth regulators can chemically belong to various categories, including indole compounds, adenine derivatives, carotenoid derivatives, or even simple gaseous molecules, such as:',
    options: [
      'Nitrogen gas, considered a plant hormone in this classification',
      'Carbon dioxide, considered a plant hormone in this classification',
      'Ethylene',
      'Oxygen, considered a plant hormone in this classification'
    ],
    correctIndex: 2,
    explanation: 'Among plant growth regulators, ethylene is unique in being a simple gaseous molecule, unlike the more complex indole, adenine, or carotenoid-derived hormones.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-38',
    type: 'mcq',
    question: 'The classic experiments demonstrating phototropism in coleoptiles, in which the tip was found to be essential for the bending response toward light, were first conducted by:',
    options: [
      'Boysen-Jensen and Paal',
      'Charles Darwin and Francis Darwin',
      'Went and Fujikuroi',
      'Skoog and Miller'
    ],
    correctIndex: 1,
    explanation: 'Charles Darwin and his son Francis Darwin conducted the classic experiments on phototropism in coleoptiles, observing that covering the tip prevented the bending response toward light.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-39',
    type: 'mcq',
    question: 'Boysen-Jensen\'s experiments demonstrated that the growth-promoting influence responsible for coleoptile bending could be transmitted through a block of agar, but not through:',
    options: [
      'Water alone',
      'Air alone',
      'Another block of agar',
      'A block of mica'
    ],
    correctIndex: 3,
    explanation: 'Boysen-Jensen showed that the growth-promoting influence could pass through a permeable agar block but was blocked by an impermeable mica sheet, indicating the influence was a diffusible chemical substance.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-40',
    type: 'mcq',
    question: 'F.W. Went is credited with successfully isolating the growth-promoting substance (later named auxin) from the tips of:',
    options: [
      'Oat (Avena) coleoptiles',
      'Fungal spores of Gibberella',
      'Human blood samples',
      'Wheat grains, directly'
    ],
    correctIndex: 0,
    explanation: 'F.W. Went successfully isolated auxin from the tips of oat coleoptiles and demonstrated its growth-promoting, bending-inducing effect when applied asymmetrically.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-41',
    type: 'mcq',
    question: 'Which of the following is a naturally occurring auxin found in plants?',
    options: [
      'Naphthalene Acetic Acid (NAA)',
      'Gibberellic acid (GA3)',
      '2,4-Dichlorophenoxyacetic acid (2,4-D)',
      'Indole Acetic Acid (IAA)'
    ],
    correctIndex: 3,
    explanation: 'Indole Acetic Acid (IAA), along with Indole Butyric Acid (IBA), is a naturally occurring auxin found in plants.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-42',
    type: 'mcq',
    question: 'Naphthalene Acetic Acid (NAA) and 2,4-Dichlorophenoxyacetic acid (2,4-D) are examples of:',
    options: [
      'Synthetic auxins',
      'Naturally occurring cytokinins',
      'Naturally occurring auxins',
      'Naturally occurring gibberellins'
    ],
    correctIndex: 0,
    explanation: 'NAA and 2,4-D are well-known synthetic auxins, widely used in agriculture and horticulture.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-43',
    type: 'mcq',
    question: 'One of the primary functions of auxin in plants is to promote:',
    options: [
      'Cell elongation, particularly in shoots',
      'Seed dormancy exclusively',
      'Leaf senescence exclusively, with no other function',
      'Stomatal closure exclusively'
    ],
    correctIndex: 0,
    explanation: 'A primary function of auxin is to promote cell elongation, particularly within shoot tissues.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-44',
    type: 'mcq',
    question: 'Auxin plays a key role in a phenomenon known as apical dominance, whereby the growing apical bud generally:',
    options: [
      'Actively promotes the rapid growth of all lateral buds',
      'Inhibits the growth of lateral (axillary) buds',
      'Causes the immediate death of the entire plant',
      'Has no effect whatsoever on lateral bud growth'
    ],
    correctIndex: 1,
    explanation: 'Apical dominance refers to the phenomenon in which the growing apical bud, through auxin production, inhibits the growth of lateral (axillary) buds further down the stem.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-45',
    type: 'mcq',
    question: 'The synthetic auxin 2,4-D is widely used commercially as a selective herbicide, since it effectively kills dicotyledonous weeds while generally:',
    options: [
      'Not significantly affecting monocotyledonous plants at appropriate concentrations',
      'Only affecting fungal pathogens, not plants at all',
      'Having no herbicidal effect on any plant whatsoever',
      'Also killing all monocotyledonous plants at the same concentration'
    ],
    correctIndex: 0,
    explanation: '2,4-D is commercially valuable as a selective herbicide because it effectively controls dicot weeds while generally sparing monocotyledonous plants (like lawn grasses or cereal crops) at appropriate application concentrations.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-46',
    type: 'mcq',
    question: 'Auxin application is commonly used in horticultural practice to initiate root formation in:',
    options: [
      'Dry, dormant seeds only',
      'Ripe fruits only, with no effect on stems',
      'Stem cuttings, facilitating vegetative propagation',
      'Mature, fully developed flowers only'
    ],
    correctIndex: 2,
    explanation: 'Auxin is widely used in horticulture to stimulate root initiation in stem cuttings, an important technique in vegetative propagation.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-47',
    type: 'mcq',
    question: 'Auxin can induce the development of fruit without the prior occurrence of fertilisation, a phenomenon known as:',
    options: [
      'Parthenocarpy',
      'Apical dominance',
      'Photoperiodism',
      'Vernalisation'
    ],
    correctIndex: 0,
    explanation: 'The auxin-induced development of fruit in the absence of fertilisation is known as parthenocarpy, commercially useful for producing seedless fruits like certain tomato varieties.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-48',
    type: 'mcq',
    question: 'While auxin generally prevents fruit and leaf drop during the earlier stages of development, at a later stage it can actually:',
    options: [
      'Have no relationship whatsoever to abscission at any stage',
      'Only affect root growth, with no influence on fruit or leaf abscission',
      'Completely prevent any form of abscission, indefinitely',
      'Promote fruit and leaf abscission'
    ],
    correctIndex: 3,
    explanation: 'Auxin exhibits a complex, stage-dependent relationship with abscission - generally preventing premature fruit/leaf drop early on, but actually promoting abscission when applied or naturally present at a later developmental stage.',
    difficulty: 'hard'
  },
  {
    id: 'plant-growth-and-development-49',
    type: 'mcq',
    question: 'Gibberellins were first discovered and isolated from a fungus responsible for causing the \'foolish seedling\' (bakanae) disease in rice, called:',
    options: [
      'Penicillium notatum',
      'Saccharomyces cerevisiae',
      'Rhizopus stolonifer',
      'Gibberella fujikuroi'
    ],
    correctIndex: 3,
    explanation: 'Gibberellins were first identified from the fungus Gibberella fujikuroi, the causal agent of the \'foolish seedling\' (bakanae) disease in rice, characterised by abnormal stem elongation.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-50',
    type: 'mcq',
    question: 'The \'foolish seedling\' (bakanae) disease in rice, caused by the fungus that led to the discovery of gibberellins, is characterised by:',
    options: [
      'Severe stunting and dwarfing of the stem',
      'Excessive, abnormal elongation of the stem',
      'Complete absence of any stem growth',
      'Premature death of the entire plant, with no growth symptoms at all'
    ],
    correctIndex: 1,
    explanation: 'Bakanae (\'foolish seedling\') disease is characterised by excessive, abnormal elongation of the rice stem, a symptom later attributed to gibberellins produced by the infecting fungus.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-51',
    type: 'mcq',
    question: 'Among the more than 100 different gibberellins that have been identified, the most extensively studied form is:',
    options: [
      'Zeatin',
      'GA1 exclusively',
      'IAA',
      'GA3 (Gibberellic acid)'
    ],
    correctIndex: 3,
    explanation: 'GA3 (Gibberellic acid) is the most extensively studied and commonly referenced member of the gibberellin family of plant hormones.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-52',
    type: 'mcq',
    question: 'A key function of gibberellins is to increase the length of the plant axis, an effect commercially exploited to increase the length of the fruit-bearing stalks of:',
    options: [
      'Grapes',
      'Only fungal spores',
      'Only tree bark',
      'Only root vegetables like carrots'
    ],
    correctIndex: 0,
    explanation: 'Gibberellins are commercially applied to increase the length of grape stalks, enhancing the overall appearance and spacing of the grape bunch.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-53',
    type: 'mcq',
    question: 'In genetically dwarf varieties of plants, such as dwarf pea or dwarf corn, the application of gibberellins can typically cause the plant to:',
    options: [
      'Show absolutely no response whatsoever to the treatment',
      'Become even more severely dwarfed than before treatment',
      'Elongate and grow to a height comparable to normal, tall varieties of the same species',
      'Die immediately upon treatment'
    ],
    correctIndex: 2,
    explanation: 'Gibberellin application to genetically dwarf plant varieties can often stimulate internode elongation, allowing them to grow to a height comparable to normal, tall varieties of the same species.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-54',
    type: 'mcq',
    question: 'Gibberellins promote a phenomenon known as \'bolting,\' referring to the rapid elongation of the internodes that occurs just before flowering in plants with a:',
    options: [
      'Purely vine-like, climbing growth habit only',
      'Rosette growth habit, such as beet and cabbage',
      'Purely aquatic growth habit only',
      'Purely underground growth habit only'
    ],
    correctIndex: 1,
    explanation: 'Bolting, the rapid elongation of internodes prior to flowering, is a gibberellin-mediated phenomenon commonly observed in plants with a rosette growth habit, such as beet and cabbage.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-55',
    type: 'mcq',
    question: 'In the brewing industry, gibberellins are commercially used to hasten (speed up) the process of:',
    options: [
      'Distillation, exclusively',
      'Pasteurisation, exclusively',
      'Fermentation of grapes into wine, exclusively',
      'Malting'
    ],
    correctIndex: 3,
    explanation: 'Gibberellins are used commercially in the brewing industry to accelerate the malting process, an important step in beer production.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-56',
    type: 'mcq',
    question: 'Besides promoting axis elongation and bolting, gibberellins are also known to influence flowering and fruit growth, and can induce parthenocarpic fruit development, commercially exploited in the production of:',
    options: [
      'Only tobacco leaves',
      'Only rice grains',
      'Only wheat grains',
      'Seedless grapes'
    ],
    correctIndex: 3,
    explanation: 'Gibberellins can induce parthenocarpic (seedless) fruit development, an effect commercially exploited in the production of seedless grapes.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-57',
    type: 'mcq',
    question: 'Compared to abscisic acid, which generally promotes dormancy and senescence, gibberellins generally have the opposite effect of:',
    options: [
      'Delaying senescence',
      'Also strongly promoting senescence, identical to abscisic acid',
      'Only accelerating seed dormancy, with no effect on senescence',
      'Having no relationship to senescence whatsoever'
    ],
    correctIndex: 0,
    explanation: 'In contrast to the senescence-promoting effects generally associated with abscisic acid, gibberellins tend to delay senescence in various plant tissues.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-58',
    type: 'mcq',
    question: 'The first cytokinin to be discovered, called kinetin, was originally isolated not from living plant tissue but from:',
    options: [
      'Autoclaved (heat-treated) herring sperm DNA',
      'Living oat coleoptile tips',
      'Fresh grape stalks',
      'Fresh corn kernels (Zea mays)'
    ],
    correctIndex: 0,
    explanation: 'Kinetin, the first cytokinin discovered, was originally isolated from autoclaved herring sperm DNA rather than from living plant material, and does not occur naturally as such within plants.',
    difficulty: 'hard'
  },
  {
    id: 'plant-growth-and-development-59',
    type: 'mcq',
    question: 'The first cytokinin to be isolated directly from a natural plant source, specifically from corn (Zea mays) kernels, is called:',
    options: [
      'Gibberellic acid',
      'Indole Acetic Acid',
      'Kinetin',
      'Zeatin'
    ],
    correctIndex: 3,
    explanation: 'Zeatin, isolated from corn (Zea mays) kernels, was the first cytokinin to be identified directly from a natural plant source.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-60',
    type: 'mcq',
    question: 'A primary function of cytokinins in plants is to promote:',
    options: [
      'Stomatal closure exclusively, with no role in cell division',
      'Seed dormancy exclusively, with no role in cell division',
      'Fruit ripening exclusively, with no role in cell division',
      'Cell division, particularly involving the cytoplasm'
    ],
    correctIndex: 3,
    explanation: 'Cytokinins are primarily known for promoting cell division, particularly cytokinesis (division of the cytoplasm).',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-61',
    type: 'mcq',
    question: 'Cytokinins can help overcome apical dominance by promoting the growth of:',
    options: [
      'Only root hairs, with no effect on buds',
      'Lateral (axillary) buds',
      'Only flower petals',
      'Only the terminal (apical) bud, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Cytokinins can counteract the auxin-driven phenomenon of apical dominance by promoting the growth of lateral (axillary) buds.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-62',
    type: 'mcq',
    question: 'Cytokinins are known to delay leaf senescence when applied to leaves, an observation referred to as the:',
    options: [
      'Darwin effect',
      'Boysen-Jensen effect',
      'Went effect',
      'Richmond-Lang effect'
    ],
    correctIndex: 3,
    explanation: 'The delay of leaf senescence caused by cytokinin application is termed the Richmond-Lang effect.',
    difficulty: 'hard'
  },
  {
    id: 'plant-growth-and-development-63',
    type: 'mcq',
    question: 'Cytokinins are also known to promote nutrient mobilisation, effectively attracting nutrients toward:',
    options: [
      'No specific location at all',
      'The specific site of cytokinin application',
      'Randomly distant, unrelated parts of the plant only',
      'The roots exclusively, with no effect elsewhere'
    ],
    correctIndex: 1,
    explanation: 'Cytokinin application tends to attract and mobilise nutrients specifically toward the site where the hormone has been applied.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-64',
    type: 'mcq',
    question: 'In plant tissue culture, a relatively high ratio of cytokinin to auxin in the culture medium generally promotes the formation of:',
    options: [
      'Seeds, directly, bypassing normal plant development',
      'Neither shoots nor roots, resulting in undifferentiated callus only',
      'Roots exclusively, with no shoot formation',
      'Shoots (lateral or adventitious shoot growth)'
    ],
    correctIndex: 3,
    explanation: 'In plant tissue culture, a high cytokinin-to-auxin ratio generally favours shoot formation, while a low ratio favours root formation, allowing researchers to control developmental outcomes.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-65',
    type: 'mcq',
    question: 'In plant tissue culture, a relatively low ratio of cytokinin to auxin in the culture medium generally promotes the formation of:',
    options: [
      'Shoots exclusively',
      'Roots',
      'Only undifferentiated callus, with no organ formation at all',
      'Flowers exclusively'
    ],
    correctIndex: 1,
    explanation: 'A low cytokinin-to-auxin ratio in tissue culture typically favours root formation, complementing the shoot-promoting effect of a high ratio.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-66',
    type: 'mcq',
    question: 'Ethylene, a unique gaseous plant growth regulator, is synthesised in particularly large amounts by plant tissues undergoing:',
    options: [
      'Only photosynthesis in mature leaves',
      'Only active cell division in the meristem',
      'Senescence and ripening',
      'Only the earliest stages of seed germination'
    ],
    correctIndex: 2,
    explanation: 'Ethylene is produced in significant quantities by plant tissues that are undergoing senescence (ageing) or ripening.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-67',
    type: 'mcq',
    question: 'One of the most widely exploited applications of ethylene in horticulture is its use to accelerate:',
    options: [
      'Seed dormancy, indefinitely',
      'Fruit ripening',
      'Photosynthesis rate exclusively',
      'Root elongation exclusively'
    ],
    correctIndex: 1,
    explanation: 'Ethylene is very widely used commercially in horticulture to accelerate and promote the ripening of fruits such as tomato, banana, and mango.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-68',
    type: 'mcq',
    question: 'Besides promoting fruit ripening, ethylene also generally promotes senescence and:',
    options: [
      'Permanent, indefinite retention of all plant organs, with no abscission at all',
      'Abscission of plant organs, such as leaves and flowers',
      'Only seed formation, with no other effect',
      'The complete prevention of any leaf drop, under all conditions'
    ],
    correctIndex: 1,
    explanation: 'Ethylene generally promotes both senescence and the abscission (shedding) of plant organs, such as ageing leaves and flowers.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-69',
    type: 'mcq',
    question: 'Ethylene is used commercially to initiate flowering and synchronise fruit-set specifically in the cultivation of:',
    options: [
      'Pineapples',
      'Rice, exclusively',
      'Wheat, exclusively',
      'Maize, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Ethylene is commercially applied to pineapple cultivation to initiate flowering and synchronise fruit-set across a crop.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-70',
    type: 'mcq',
    question: 'In deep-water rice varieties, ethylene promotes rapid elongation of the internodes and petioles, an adaptation that helps the plant\'s leaves and upper portions:',
    options: [
      'Sink further beneath the water surface',
      'Form additional roots exclusively, with no elongation response',
      'Remain above the rising floodwater level',
      'Wither and die rapidly upon exposure to any water'
    ],
    correctIndex: 2,
    explanation: 'Ethylene-induced rapid elongation of internodes and petioles in deep-water rice is an adaptive response that allows the plant\'s leaves and upper parts to stay above rising floodwater.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-71',
    type: 'mcq',
    question: 'In cucumber plants, the application of ethylene is known to induce \'femaleness,\' meaning it tends to:',
    options: [
      'Have no relationship whatsoever to flower sex determination',
      'Completely eliminate all female flowers from the plant',
      'Convert all female flowers into male flowers',
      'Increase the relative number of female flowers produced, thereby enhancing yield'
    ],
    correctIndex: 3,
    explanation: 'Ethylene application in cucumber plants can induce femaleness, increasing the proportion of female flowers relative to male flowers, which can enhance overall fruit yield.',
    difficulty: 'hard'
  },
  {
    id: 'plant-growth-and-development-72',
    type: 'mcq',
    question: 'A liquid compound that releases ethylene gas upon application and is commonly used for commercial ethylene treatment of plants is called:',
    options: [
      'Naphthalene acetic acid',
      'Ethephon',
      'Gibberellic acid',
      'Kinetin'
    ],
    correctIndex: 1,
    explanation: 'Ethephon is a liquid compound that, upon application, releases ethylene gas, making it a practical and widely used commercial source of this gaseous hormone.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-73',
    type: 'mcq',
    question: 'Abscisic Acid (ABA) is often referred to as the \'stress hormone\' of plants primarily because it:',
    options: [
      'Is completely inactive under any form of environmental stress',
      'Promotes rapid, uncontrolled growth during stress conditions',
      'Increases plant tolerance to various environmental stresses, and its levels rise significantly during stress conditions',
      'Only functions during periods of abundant water availability'
    ],
    correctIndex: 2,
    explanation: 'Abscisic acid is called the stress hormone because it increases the plant\'s tolerance to various stresses, and its concentration typically rises significantly when the plant experiences stress conditions.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-74',
    type: 'mcq',
    question: 'One of the primary physiological effects of Abscisic Acid (ABA) in leaves is to stimulate:',
    options: [
      'Immediate chlorophyll breakdown throughout the entire leaf',
      'The permanent, complete opening of stomata, regardless of water status',
      'The closure of stomata',
      'Rapid, uncontrolled cell division in the mesophyll'
    ],
    correctIndex: 2,
    explanation: 'A key physiological effect of ABA is the stimulation of stomatal closure, helping the plant reduce water loss under stress conditions such as drought.',
    difficulty: 'easy'
  },
  {
    id: 'plant-growth-and-development-75',
    type: 'mcq',
    question: 'By stimulating the closure of stomata, Abscisic Acid (ABA) helps plants cope with water stress by directly:',
    options: [
      'Increasing the rate of transpiration significantly',
      'Having no measurable effect on transpiration rate at all',
      'Only affecting root water uptake, with no effect on transpiration',
      'Decreasing the rate of transpiration'
    ],
    correctIndex: 3,
    explanation: 'Stomatal closure induced by ABA directly reduces the rate of transpiration (water loss through the stomata), helping the plant conserve water during periods of stress.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-76',
    type: 'mcq',
    question: 'Abscisic Acid plays a critical role in seed biology by promoting:',
    options: [
      'Immediate seed germination, regardless of environmental conditions',
      'Rapid seed decay before any germination can occur',
      'The complete destruction of the seed\'s stored food reserves',
      'Seed dormancy, helping seeds withstand desiccation and unfavourable conditions'
    ],
    correctIndex: 3,
    explanation: 'ABA plays an important role in promoting and maintaining seed dormancy, helping seeds withstand desiccation and survive unfavourable environmental conditions until germination becomes viable.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-77',
    type: 'mcq',
    question: 'Abscisic Acid is generally classified as a growth-inhibiting hormone because it typically acts to:',
    options: [
      'Have no interaction whatsoever with other plant hormones',
      'Antagonise (counteract) the growth-promoting effects of hormones such as auxins and gibberellins',
      'Strongly enhance the growth-promoting effects of auxins and gibberellins',
      'Only function in animal cells, not in plants'
    ],
    correctIndex: 1,
    explanation: 'As a growth inhibitor, ABA generally acts antagonistically to counteract the growth-promoting effects of hormones like auxins and gibberellins, helping regulate overall plant growth and stress responses.',
    difficulty: 'medium'
  },
  {
    id: 'plant-growth-and-development-78',
    type: 'mcq',
    question: 'During seed maturation, Abscisic Acid promotes the synthesis of storage proteins, which helps the developing seed to:',
    options: [
      'Better withstand desiccation and other unfavourable conditions during dormancy',
      'Rapidly lose all its stored nutrients before dispersal',
      'Convert entirely into a new, independent root system while still on the parent plant',
      'Immediately begin germinating while still attached to the parent plant'
    ],
    correctIndex: 0,
    explanation: 'ABA-promoted synthesis of storage proteins during seed maturation helps equip the developing seed to withstand desiccation and survive unfavourable conditions while in a dormant state.',
    difficulty: 'hard'
  },
];

export default questions;