import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Morphology of Flowering Plants
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'morphology-of-flowering-plants-1',
    type: 'mcq',
    question: 'The tap root system, typically found in dicotyledonous plants, develops directly from the:',
    options: [
      'Base of the stem',
      'Node of the stem',
      'Radicle of the embryo',
      'Leaf axil'
    ],
    correctIndex: 2,
    explanation: 'In dicots, the tap root system develops from the radicle of the embryo, growing directly into the primary root.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-2',
    type: 'mcq',
    question: 'Adventitious roots, characteristically found in monocotyledonous plants, arise from parts of the plant other than the:',
    options: [
      'Radicle',
      'Stem node',
      'Leaf blade',
      'Shoot apex'
    ],
    correctIndex: 0,
    explanation: 'Adventitious roots arise from plant parts other than the radicle, such as the base of the stem, and are characteristic of monocots.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-3',
    type: 'mcq',
    question: 'The region of the root that protects the tender apical meristem as it pushes through the soil is called the:',
    options: [
      'Region of maturation',
      'Region of elongation',
      'Region of meristematic activity',
      'Root cap'
    ],
    correctIndex: 3,
    explanation: 'The root cap, located at the tip of the root, protects the delicate apical meristem as the root grows through the soil.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-4',
    type: 'mcq',
    question: 'The region of the root that lies just behind the root cap, consisting of small, thin-walled, actively dividing cells, is called the:',
    options: [
      'Region of elongation',
      'Region of meristematic activity',
      'Region of maturation',
      'Root cap'
    ],
    correctIndex: 1,
    explanation: 'The region of meristematic activity, situated just behind the root cap, consists of small, densely cytoplasmic, actively dividing cells.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-5',
    type: 'mcq',
    question: 'The region of the root where cells undergo rapid elongation, contributing to the increase in root length, is called the:',
    options: [
      'Region of meristematic activity',
      'Region of elongation',
      'Region of maturation',
      'Root cap'
    ],
    correctIndex: 1,
    explanation: 'Cells in the region of elongation, lying proximal to the meristematic zone, rapidly elongate, contributing significantly to root growth in length.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-6',
    type: 'mcq',
    question: 'Root hairs, which absorb water and minerals from the soil, are found in the:',
    options: [
      'Region of elongation',
      'Root cap',
      'Region of meristematic activity',
      'Region of maturation'
    ],
    correctIndex: 3,
    explanation: 'The region of maturation, the most proximal zone of the root, bears root hairs, which are the primary sites of water and mineral absorption.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-7',
    type: 'mcq',
    question: 'In carrots, the tap root becomes swollen and modified for food storage, taking on a characteristic shape described as:',
    options: [
      'Conical',
      'Napiform (spherical/rounded)',
      'Fusiform (spindle-shaped)',
      'Tuberous (irregular, no definite shape)'
    ],
    correctIndex: 0,
    explanation: 'The storage root of carrot is conical in shape, broader at the top and gradually tapering toward the tip.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-8',
    type: 'mcq',
    question: 'In turnip, the modified tap root used for food storage is characteristically described as:',
    options: [
      'Conical',
      'Fusiform (spindle-shaped)',
      'Napiform (nearly spherical/rounded)',
      'Tuberous, with no definite shape'
    ],
    correctIndex: 2,
    explanation: 'The storage root of turnip is napiform, being nearly spherical or top-shaped.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-9',
    type: 'mcq',
    question: 'The pillar-like roots that grow down from the horizontal branches of the banyan tree, providing mechanical support, are called:',
    options: [
      'Stilt roots',
      'Pneumatophores',
      'Adventitious storage roots',
      'Prop roots'
    ],
    correctIndex: 3,
    explanation: 'Prop roots in the banyan tree grow downward from horizontal branches to the soil, providing additional mechanical support to the massive canopy.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-10',
    type: 'mcq',
    question: 'The oblique roots arising from the lower nodes of the stem in plants like maize and sugarcane, providing extra mechanical support, are called:',
    options: [
      'Prop roots',
      'Stilt roots',
      'Pneumatophores',
      'Tap roots'
    ],
    correctIndex: 1,
    explanation: 'Stilt roots arise obliquely from the lower stem nodes in plants like maize and sugarcane, providing additional mechanical support to the plant.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-11',
    type: 'mcq',
    question: 'In mangrove/saline habitat plants such as Rhizophora, specialised roots that grow vertically upward out of the soil (negatively geotropic) to facilitate gaseous exchange are called:',
    options: [
      'Prop roots',
      'Stilt roots',
      'Pneumatophores',
      'Tap roots'
    ],
    correctIndex: 2,
    explanation: 'Pneumatophores are specialised, negatively geotropic roots found in mangrove plants like Rhizophora, growing upward out of waterlogged soil and bearing pores for gaseous exchange.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-12',
    type: 'mcq',
    question: 'The numerous small pores present on the surface of pneumatophores, which facilitate the exchange of gases, are called:',
    options: [
      'Lenticels (pneumatophore pores)',
      'Stomata only',
      'Root hairs',
      'Nodes'
    ],
    correctIndex: 0,
    explanation: 'Pneumatophores possess numerous small pores that allow the exchange of gases from the atmosphere, helping mangrove roots respire in waterlogged, oxygen-poor soil.',
    difficulty: 'hard'
  },
  {
    id: 'morphology-of-flowering-plants-13',
    type: 'mcq',
    question: 'The stem of a flowering plant develops from which part of the embryo?',
    options: [
      'Plumule',
      'Radicle',
      'Cotyledon',
      'Hypocotyl only'
    ],
    correctIndex: 0,
    explanation: 'The stem develops from the plumule of the embryo, the portion that gives rise to the shoot system.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-14',
    type: 'mcq',
    question: 'The regions of the stem that bear leaves are called nodes, while the portions between two successive nodes are called:',
    options: [
      'Axillary buds',
      'Terminal buds',
      'Internodes',
      'Petioles'
    ],
    correctIndex: 2,
    explanation: 'Nodes are the points on a stem where leaves are attached, and the stem segments between two successive nodes are called internodes.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-15',
    type: 'mcq',
    question: 'Underground stem modification of ginger, which grows horizontally and stores food while also aiding perennation, is called a:',
    options: [
      'Tuber',
      'Rhizome',
      'Corm',
      'Bulb'
    ],
    correctIndex: 1,
    explanation: 'Ginger has an underground stem modification called a rhizome, a horizontally growing stem used for food storage and perennation.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-16',
    type: 'mcq',
    question: 'The underground stem of potato, which is swollen at its tip for food storage and bears characteristic \'eyes\' (nodes with axillary buds), is called a:',
    options: [
      'Rhizome',
      'Corm',
      'Bulb',
      'Tuber'
    ],
    correctIndex: 3,
    explanation: 'The potato tuber is a swollen underground stem modification, with \'eyes\' representing nodes bearing axillary buds.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-17',
    type: 'mcq',
    question: 'The underground stem of Colocasia, which is a vertically growing, condensed and swollen structure used for storage, is called a:',
    options: [
      'Rhizome',
      'Corm',
      'Tuber',
      'Bulb'
    ],
    correctIndex: 1,
    explanation: 'Colocasia possesses a corm, a vertically oriented, condensed underground stem used for food storage.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-18',
    type: 'mcq',
    question: 'The underground stem of onion, consisting of a small, condensed stem surrounded by fleshy, overlapping scale leaves for storage, is called a:',
    options: [
      'Rhizome',
      'Tuber',
      'Corm',
      'Bulb'
    ],
    correctIndex: 3,
    explanation: 'Onion possesses a bulb, a highly condensed underground stem surrounded by fleshy, food-storing scale leaves.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-19',
    type: 'mcq',
    question: 'A weak, prostrate stem in grass that runs along the ground surface and roots at nodes to form new plants is called a:',
    options: [
      'Sucker',
      'Offset',
      'Runner',
      'Stolon'
    ],
    correctIndex: 2,
    explanation: 'A runner is a slender, prostrate lateral stem in plants like grass, running along the surface of the soil and forming new plants at its nodes.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-20',
    type: 'mcq',
    question: 'In strawberry, a weak, arching lateral stem that grows obliquely upward before bending down to touch the soil and form a new plant is called a:',
    options: [
      'Stolon',
      'Runner',
      'Offset',
      'Sucker'
    ],
    correctIndex: 0,
    explanation: 'Strawberry produces a stolon, a lateral stem that arches out and then bends downward, touching the soil to establish a new plant.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-21',
    type: 'mcq',
    question: 'The tendrils used for climbing in plants like grapevine and cucumber are modifications of the:',
    options: [
      'Leaf',
      'Root',
      'Stem (axillary bud)',
      'Petiole exclusively'
    ],
    correctIndex: 2,
    explanation: 'In grapevine and cucumber, tendrils used for climbing are modifications of the stem (specifically, of axillary buds).',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-22',
    type: 'mcq',
    question: 'In cacti such as Opuntia, the stem is modified into a flattened, fleshy, green structure that performs photosynthesis in place of leaves, called a:',
    options: [
      'Phylloclade',
      'Rhizome',
      'Tuber',
      'Runner'
    ],
    correctIndex: 0,
    explanation: 'Opuntia (a cactus) has a phylloclade - a flattened, fleshy, photosynthetic stem modification that compensates for its reduced, spine-like leaves.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-23',
    type: 'mcq',
    question: 'The leaf is a lateral, generally flattened structure borne on the stem, developing at the node from the:',
    options: [
      'Root apical meristem',
      'Shoot apical meristem',
      'Floral meristem exclusively',
      'Vascular cambium'
    ],
    correctIndex: 1,
    explanation: 'Leaves develop exogenously at the nodes of the stem from the shoot apical meristem.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-24',
    type: 'mcq',
    question: 'The flattened, expanded part of a typical leaf, containing veins and veinlets, is called the:',
    options: [
      'Leaf base',
      'Petiole',
      'Stipule',
      'Lamina (leaf blade)'
    ],
    correctIndex: 3,
    explanation: 'The lamina, or leaf blade, is the flattened, expanded portion of a leaf that contains the vein and veinlet network.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-25',
    type: 'mcq',
    question: 'The stalk-like part of the leaf that connects the lamina to the stem, and helps the leaf blade to flutter in air (aiding gas exchange), is called the:',
    options: [
      'Lamina',
      'Leaf base',
      'Rachis',
      'Petiole'
    ],
    correctIndex: 3,
    explanation: 'The petiole is the stalk of the leaf connecting the lamina to the stem, and its flexibility allows the leaf blade to flutter, facilitating gas exchange.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-26',
    type: 'mcq',
    question: 'The type of venation in which veins and veinlets are irregularly distributed, forming a network, typically seen in dicotyledonous leaves, is called:',
    options: [
      'Parallel venation',
      'Reticulate venation',
      'Radial venation',
      'Palmate venation only'
    ],
    correctIndex: 1,
    explanation: 'Reticulate venation, forming a net-like pattern of veins, is characteristic of dicotyledonous leaves.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-27',
    type: 'mcq',
    question: 'The type of venation in which veins run parallel to each other within the lamina, typically seen in monocotyledonous leaves, is called:',
    options: [
      'Parallel venation',
      'Reticulate venation',
      'Net venation',
      'Compound venation'
    ],
    correctIndex: 0,
    explanation: 'Parallel venation, in which veins run alongside one another without forming a network, is characteristic of monocotyledonous leaves.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-28',
    type: 'mcq',
    question: 'A leaf in which the incisions of the lamina do not reach up to the midrib, so that it remains a single, undivided unit, is called a:',
    options: [
      'Compound leaf',
      'Pinnately compound leaf',
      'Simple leaf',
      'Palmately compound leaf'
    ],
    correctIndex: 2,
    explanation: 'A simple leaf has an undivided lamina, with any incisions failing to reach the midrib, leaving it as one continuous unit.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-29',
    type: 'mcq',
    question: 'A leaf in which the incisions of the lamina reach right up to the midrib, dividing it into several leaflets, is called a:',
    options: [
      'Compound leaf',
      'Simple leaf',
      'Sessile leaf',
      'Reticulate leaf'
    ],
    correctIndex: 0,
    explanation: 'In a compound leaf, incisions extend all the way to the midrib, dividing the lamina into distinct leaflets.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-30',
    type: 'mcq',
    question: 'A compound leaf, such as that of neem, in which leaflets are arranged along a common central axis (representing the midrib), is called a:',
    options: [
      'Palmately compound leaf',
      'Simple leaf',
      'Sessile leaf',
      'Pinnately compound leaf'
    ],
    correctIndex: 3,
    explanation: 'In a pinnately compound leaf (as in neem), leaflets are arranged along a common rachis, representing the midrib.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-31',
    type: 'mcq',
    question: 'A compound leaf, such as that of silk cotton, in which all leaflets are attached at a common point at the tip of the petiole, is called a:',
    options: [
      'Pinnately compound leaf',
      'Simple leaf',
      'Palmately compound leaf',
      'Sessile leaf'
    ],
    correctIndex: 2,
    explanation: 'In a palmately compound leaf (as in silk cotton), all leaflets radiate from a single common point at the tip of the petiole.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-32',
    type: 'mcq',
    question: 'The arrangement of leaves on a stem or its branches is called phyllotaxy. When only a single leaf arises at each node, alternating on either side (as in china rose and mustard), the phyllotaxy is described as:',
    options: [
      'Opposite',
      'Alternate',
      'Whorled',
      'Radial'
    ],
    correctIndex: 1,
    explanation: 'In alternate phyllotaxy, as in china rose and mustard, a single leaf arises at each node, with successive leaves alternating on either side of the stem.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-33',
    type: 'mcq',
    question: 'When a pair of leaves arises at each node, positioned opposite to each other (as in Calotropis and guava), the phyllotaxy is described as:',
    options: [
      'Alternate',
      'Opposite',
      'Whorled',
      'Spiral'
    ],
    correctIndex: 1,
    explanation: 'In opposite phyllotaxy, as seen in Calotropis and guava, a pair of leaves is present at each node, positioned directly opposite one another.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-34',
    type: 'mcq',
    question: 'In pea plants, the terminal leaflets of the compound leaf are often modified into slender, coiling structures used for climbing, called:',
    options: [
      'Spines',
      'Phylloclades',
      'Tendrils',
      'Bulbils'
    ],
    correctIndex: 2,
    explanation: 'In pea (Pisum sativum), some leaflets of the compound leaf are modified into tendrils, which help the weak stem climb by coiling around a support.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-35',
    type: 'mcq',
    question: 'In racemose inflorescences, the main floral axis continues to grow, and flowers are borne laterally in an order such that the youngest flowers are found:',
    options: [
      'At the base, with the oldest flowers near the apex',
      'Scattered randomly with no particular order',
      'Only at the very tip, with no flowers elsewhere',
      'Near the apex (top), with the oldest flowers toward the base'
    ],
    correctIndex: 3,
    explanation: 'In racemose inflorescences, flowers are borne in acropetal succession, meaning the youngest flowers are located near the growing apex, with older flowers toward the base.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-36',
    type: 'mcq',
    question: 'In cymose inflorescences, the main floral axis terminates in a flower, resulting in limited growth, with flowers arranged such that the oldest flower is found:',
    options: [
      'At the top (or centre), with youngest flowers toward the base (or periphery)',
      'At the base, with the youngest flower at the top',
      'Scattered randomly with no particular order',
      'Nowhere, since cymose inflorescences bear only a single flower'
    ],
    correctIndex: 0,
    explanation: 'In cymose inflorescences, since the main axis terminates in a flower, growth is limited, and flowers are arranged in basipetal order, with the oldest flower at the top/centre and youngest toward the base/periphery.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-37',
    type: 'mcq',
    question: 'The arrangement of flowers on the floral axis of a plant is termed:',
    options: [
      'Phyllotaxy',
      'Aestivation',
      'Placentation',
      'Inflorescence'
    ],
    correctIndex: 3,
    explanation: 'Inflorescence refers to the specific pattern in which flowers are arranged on the floral axis of a plant.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-38',
    type: 'mcq',
    question: 'A flower that can be divided into two equal radial halves by any vertical plane passing through the centre is said to show:',
    options: [
      'Actinomorphic (radial) symmetry',
      'Zygomorphic (bilateral) symmetry',
      'Asymmetry',
      'Only vertical symmetry'
    ],
    correctIndex: 0,
    explanation: 'Actinomorphic (radially symmetrical) flowers, such as those of mustard and datura, can be divided into two equal halves by any vertical plane through the centre.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-39',
    type: 'mcq',
    question: 'A flower that can be divided into two equal halves by only one particular vertical plane is said to show:',
    options: [
      'Actinomorphic (radial) symmetry',
      'Zygomorphic (bilateral) symmetry',
      'Asymmetry',
      'Radial symmetry in every plane'
    ],
    correctIndex: 1,
    explanation: 'Zygomorphic (bilaterally symmetrical) flowers, such as those of pea and gulmohar, can be divided into two equal halves only along one specific vertical plane.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-40',
    type: 'mcq',
    question: 'A flower containing both androecium (male whorl) and gynoecium (female whorl) is described as:',
    options: [
      'Unisexual (staminate)',
      'Unisexual (pistillate)',
      'Bisexual',
      'Asexual'
    ],
    correctIndex: 2,
    explanation: 'A bisexual flower contains both the male reproductive whorl (androecium) and the female reproductive whorl (gynoecium).',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-41',
    type: 'mcq',
    question: 'When the ovary of a flower is superior, and the other floral whorls (calyx, corolla, androecium) are inserted below it on the thalamus, the condition is termed:',
    options: [
      'Perigynous',
      'Epigynous',
      'Hypogynous',
      'Syncarpous'
    ],
    correctIndex: 2,
    explanation: 'In hypogynous flowers, such as mustard and china rose, the ovary is superior, positioned above the point of insertion of the other floral whorls.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-42',
    type: 'mcq',
    question: 'When the gynoecium (ovary) is half-inferior, with the other floral whorls arising from the rim of the thalamus at roughly the same level as the ovary, the condition is termed:',
    options: [
      'Hypogynous',
      'Perigynous',
      'Epigynous',
      'Apocarpous'
    ],
    correctIndex: 1,
    explanation: 'In perigynous flowers, such as plum and rose, the ovary is half-inferior, and other floral parts arise from the rim of the thalamus around it.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-43',
    type: 'mcq',
    question: 'When the ovary is inferior, positioned below the level of insertion of the other floral whorls (which appear to arise from above the ovary), the condition is termed:',
    options: [
      'Epigynous',
      'Hypogynous',
      'Perigynous',
      'Monocarpellary'
    ],
    correctIndex: 0,
    explanation: 'In epigynous flowers, such as guava and cucumber, the ovary is inferior, with the other floral whorls appearing to arise from above it.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-44',
    type: 'mcq',
    question: 'The outermost whorl of a typical flower, usually green and protective, made up of individual units called sepals, is called the:',
    options: [
      'Corolla',
      'Androecium',
      'Gynoecium',
      'Calyx'
    ],
    correctIndex: 3,
    explanation: 'The calyx is the outermost floral whorl, generally green in colour, and composed of individual sepals that protect the flower in the bud stage.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-45',
    type: 'mcq',
    question: 'The floral whorl located just inside the calyx, generally brightly coloured to attract pollinators, and composed of individual units called petals, is called the:',
    options: [
      'Corolla',
      'Calyx',
      'Androecium',
      'Gynoecium'
    ],
    correctIndex: 0,
    explanation: 'The corolla, composed of petals, is typically brightly coloured and located just inside the calyx, functioning to attract pollinators.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-46',
    type: 'mcq',
    question: 'The male reproductive whorl of a flower, composed of individual units called stamens, is called the:',
    options: [
      'Gynoecium',
      'Calyx',
      'Corolla',
      'Androecium'
    ],
    correctIndex: 3,
    explanation: 'The androecium is the male reproductive whorl of a flower, made up of individual stamens.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-47',
    type: 'mcq',
    question: 'When the sepals of the calyx remain free from one another, this condition is described as:',
    options: [
      'Gamosepalous',
      'Gamopetalous',
      'Polysepalous',
      'Polypetalous'
    ],
    correctIndex: 2,
    explanation: 'When sepals remain separate/unfused, the calyx is described as polysepalous.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-48',
    type: 'mcq',
    question: 'When the sepals of the calyx are fused together, this condition is described as:',
    options: [
      'Polysepalous',
      'Gamosepalous',
      'Gamopetalous',
      'Polyandrous'
    ],
    correctIndex: 1,
    explanation: 'When sepals are fused together, the calyx is described as gamosepalous.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-49',
    type: 'mcq',
    question: 'When the petals of the corolla remain free from one another, this condition is described as:',
    options: [
      'Gamopetalous',
      'Polypetalous',
      'Gamosepalous',
      'Monoadelphous'
    ],
    correctIndex: 1,
    explanation: 'When petals remain separate/unfused, the corolla is described as polypetalous.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-50',
    type: 'mcq',
    question: 'When the petals of the corolla are fused together, this condition is described as:',
    options: [
      'Gamopetalous',
      'Polypetalous',
      'Polysepalous',
      'Syncarpous'
    ],
    correctIndex: 0,
    explanation: 'When petals are fused together, the corolla is described as gamopetalous.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-51',
    type: 'mcq',
    question: 'In valvate aestivation, as seen in Calotropis, the margins of adjacent sepals or petals:',
    options: [
      'Overlap one another in one particular direction only',
      'Twist around each other completely',
      'Overlap in no particular, definite direction',
      'Just touch one another, without any overlapping'
    ],
    correctIndex: 3,
    explanation: 'In valvate aestivation, adjacent floral members simply touch at their margins, without any degree of overlap, as seen in Calotropis.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-52',
    type: 'mcq',
    question: 'In twisted aestivation, as seen in china rose and cotton, the arrangement of petals is such that:',
    options: [
      'Margins simply touch, without any overlap',
      'Margins overlap, but with no fixed or particular direction',
      'One margin of each petal overlaps the margin of the next petal in a consistent, twisting pattern',
      'Petals do not touch each other at all'
    ],
    correctIndex: 2,
    explanation: 'In twisted aestivation, one margin of each petal consistently overlaps the next, creating a spiral/twisted pattern, as seen in china rose and cotton.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-53',
    type: 'mcq',
    question: 'In imbricate aestivation, as seen in Cassia and gulmohar, the margins of sepals or petals overlap one another, but:',
    options: [
      'Only in a strict, one-directional twisting pattern',
      'Without any overlap occurring at all',
      'Only at a single point, with no other contact',
      'Without following any particular, consistent direction'
    ],
    correctIndex: 3,
    explanation: 'In imbricate aestivation, margins of the floral members overlap one another, but not in any fixed, consistent direction, as seen in Cassia and gulmohar.',
    difficulty: 'hard'
  },
  {
    id: 'morphology-of-flowering-plants-54',
    type: 'mcq',
    question: 'The distinctive aestivation pattern found in members of family Fabaceae (pea family), in which the largest posterior petal (standard) overlaps two lateral petals (wings), which in turn overlap two anterior petals (keel), is called:',
    options: [
      'Valvate aestivation',
      'Twisted aestivation',
      'Vexillary (papilionaceous) aestivation',
      'Imbricate aestivation, of the ordinary type'
    ],
    correctIndex: 2,
    explanation: 'Vexillary (papilionaceous) aestivation is characteristic of the pea family (Fabaceae), where the large posterior standard petal overlaps the lateral wing petals, which in turn overlap the smallest anterior keel petals.',
    difficulty: 'hard'
  },
  {
    id: 'morphology-of-flowering-plants-55',
    type: 'mcq',
    question: 'A typical stamen, the unit of the androecium, consists of a stalk called the filament, and a terminal, usually bilobed structure called the:',
    options: [
      'Anther',
      'Stigma',
      'Style',
      'Ovary'
    ],
    correctIndex: 0,
    explanation: 'A stamen consists of a stalk-like filament and a terminal anther, which is usually bilobed and contains the pollen sacs.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-56',
    type: 'mcq',
    question: 'When the stamens of a flower are united into a single bundle by their filaments, as in china rose, this condition is called:',
    options: [
      'Diadelphous',
      'Monoadelphous',
      'Polyadelphous',
      'Syngenesious'
    ],
    correctIndex: 1,
    explanation: 'In monoadelphous stamens (as in china rose), all the stamens are united by their filaments into a single common bundle.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-57',
    type: 'mcq',
    question: 'When the stamens of a flower are united into two distinct bundles by their filaments, as in pea (with a 9+1 arrangement), this condition is called:',
    options: [
      'Diadelphous',
      'Monoadelphous',
      'Polyadelphous',
      'Syngenesious'
    ],
    correctIndex: 0,
    explanation: 'In diadelphous stamens (as in pea), the filaments are united into two separate bundles, typically in a 9+1 arrangement.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-58',
    type: 'mcq',
    question: 'When the stamens of a flower are united into more than two bundles by their filaments, as in citrus, this condition is called:',
    options: [
      'Monoadelphous',
      'Polyadelphous',
      'Diadelphous',
      'Syngenesious'
    ],
    correctIndex: 1,
    explanation: 'In polyadelphous stamens (as in citrus), the filaments are united into more than two separate bundles.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-59',
    type: 'mcq',
    question: 'When the stamens of a flower are united together by their anthers (rather than their filaments), as commonly seen in the sunflower family, this condition is called:',
    options: [
      'Monoadelphous',
      'Diadelphous',
      'Polyadelphous',
      'Syngenesious'
    ],
    correctIndex: 3,
    explanation: 'Syngenesious stamens are united by their anthers (not filaments), a condition commonly observed in the Asteraceae (sunflower) family.',
    difficulty: 'hard'
  },
  {
    id: 'morphology-of-flowering-plants-60',
    type: 'mcq',
    question: 'When stamens are attached to the petals of the corolla, as seen in brinjal, this condition is described as:',
    options: [
      'Epiphyllous',
      'Monoadelphous',
      'Epipetalous',
      'Gamopetalous'
    ],
    correctIndex: 2,
    explanation: 'Epipetalous stamens are attached to the petals of the corolla, as observed in brinjal.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-61',
    type: 'mcq',
    question: 'A flower in which the stamens occur in two pairs of different lengths, two long and two short, as seen in Salvia and Ocimum, shows a condition called:',
    options: [
      'Tetradynamous',
      'Monoadelphous',
      'Didynamous',
      'Syngenesious'
    ],
    correctIndex: 2,
    explanation: 'Didynamous stamens (two long and two short) are found in plants like Salvia and Ocimum.',
    difficulty: 'hard'
  },
  {
    id: 'morphology-of-flowering-plants-62',
    type: 'mcq',
    question: 'A flower in which six stamens occur as four long and two short, as commonly seen in mustard (family Brassicaceae), shows a condition called:',
    options: [
      'Didynamous',
      'Diadelphous',
      'Polyadelphous',
      'Tetradynamous'
    ],
    correctIndex: 3,
    explanation: 'Tetradynamous stamens (four long and two short, totaling six) are characteristic of the mustard family (Brassicaceae).',
    difficulty: 'hard'
  },
  {
    id: 'morphology-of-flowering-plants-63',
    type: 'mcq',
    question: 'The basic unit of the gynoecium, consisting of the stigma, style, and ovary, is called the:',
    options: [
      'Stamen',
      'Carpel (pistil)',
      'Sepal',
      'Petal'
    ],
    correctIndex: 1,
    explanation: 'The carpel (or pistil) is the fundamental unit of the gynoecium, consisting of the stigma, style, and ovary.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-64',
    type: 'mcq',
    question: 'A gynoecium made up of only a single carpel, as seen in pea, is described as:',
    options: [
      'Monocarpellary',
      'Syncarpous',
      'Apocarpous',
      'Multicarpellary'
    ],
    correctIndex: 0,
    explanation: 'A monocarpellary gynoecium consists of only a single carpel, as seen in pea.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-65',
    type: 'mcq',
    question: 'When a gynoecium has more than one carpel, and these carpels are fused together, as in tomato and mustard, the condition is called:',
    options: [
      'Apocarpous',
      'Syncarpous',
      'Monocarpellary',
      'Free carpels throughout'
    ],
    correctIndex: 1,
    explanation: 'A syncarpous gynoecium consists of multiple carpels that are fused together, as seen in tomato and mustard.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-66',
    type: 'mcq',
    question: 'When a gynoecium has more than one carpel, and these carpels remain free (unfused) from one another, as in lotus and rose, the condition is called:',
    options: [
      'Apocarpous',
      'Syncarpous',
      'Monocarpellary',
      'Perigynous'
    ],
    correctIndex: 0,
    explanation: 'An apocarpous gynoecium consists of multiple carpels that remain free and unfused, as seen in lotus and rose.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-67',
    type: 'mcq',
    question: 'The specific arrangement of ovules within the ovary is called:',
    options: [
      'Aestivation',
      'Phyllotaxy',
      'Placentation',
      'Vernation'
    ],
    correctIndex: 2,
    explanation: 'Placentation describes the specific pattern in which ovules are arranged and attached within the ovary.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-68',
    type: 'mcq',
    question: 'In marginal placentation, as seen in pea, the placenta forms a ridge along the ventral suture of the ovary, and the ovules are borne on this ridge in:',
    options: [
      'A single row only',
      'Multiple, scattered rows with no pattern',
      'A ring around a central axis',
      'Two rows'
    ],
    correctIndex: 3,
    explanation: 'In marginal placentation (as in pea), the placenta develops along the ventral suture and bears ovules arranged in two rows.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-69',
    type: 'mcq',
    question: 'In axile placentation, as seen in china rose, tomato, and lemon, the placenta is located centrally within a multilocular ovary, and ovules are attached to it in a manner such that the placenta:',
    options: [
      'Forms a ridge only along one ventral suture',
      'Is completely absent, with ovules scattered freely',
      'Develops only at the very base of the ovary',
      'Forms a central axis, with septa dividing the ovary into chambers'
    ],
    correctIndex: 3,
    explanation: 'In axile placentation, the placenta is axial (central), and the ovary is divided into multiple chambers (locules) by septa, with ovules attached to the central axis.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-70',
    type: 'mcq',
    question: 'In parietal placentation, as seen in mustard and Argemone, the ovules develop on the inner wall of the ovary, which is typically:',
    options: [
      'Always multi-chambered from the very beginning, with no false septum involved',
      'Never divided into any chambers under any circumstance',
      'One-chambered, but may become two-chambered due to the formation of a false septum',
      'Chambered directly by true septa formed by fused carpel margins meeting at the centre'
    ],
    correctIndex: 2,
    explanation: 'Parietal placentation involves ovules developing on the inner wall (periphery) of a typically one-chambered ovary, which may become two-chambered due to a false septum, as in mustard.',
    difficulty: 'hard'
  },
  {
    id: 'morphology-of-flowering-plants-71',
    type: 'mcq',
    question: 'In free central placentation, as seen in Dianthus and Primrose, the ovules are borne on a central axis, and unlike axile placentation, this condition is characterised by the:',
    options: [
      'Absence of septa within the ovary',
      'Presence of numerous septa dividing the ovary into many chambers',
      'Ovules being restricted to only the ovary wall',
      'Complete absence of any placenta'
    ],
    correctIndex: 0,
    explanation: 'Free central placentation involves ovules attached to a central axis, but unlike axile placentation, there are no septa present, so the ovary remains a single chamber.',
    difficulty: 'hard'
  },
  {
    id: 'morphology-of-flowering-plants-72',
    type: 'mcq',
    question: 'In basal placentation, as seen in sunflower and marigold, the placenta develops at the base of the ovary, typically bearing:',
    options: [
      'Numerous ovules arranged in two rows',
      'A single ovule',
      'Ovules scattered along the entire ovary wall',
      'Ovules arranged around a central axis'
    ],
    correctIndex: 1,
    explanation: 'Basal placentation involves the placenta developing at the base of the ovary, typically attaching only a single ovule, as seen in sunflower and marigold.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-73',
    type: 'mcq',
    question: 'A fruit is generally defined as a mature, ripened structure that typically develops from the:',
    options: [
      'Ovary, following fertilisation',
      'Petal, without any fertilisation event',
      'Sepal, following pollination alone',
      'Stamen, after pollen release'
    ],
    correctIndex: 0,
    explanation: 'A fruit is generally a matured ovary, typically developing as a result of fertilisation following pollination.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-74',
    type: 'mcq',
    question: 'A fruit that develops from an unfertilised ovary, without undergoing the process of fertilisation, is called a:',
    options: [
      'Aggregate fruit',
      'Parthenocarpic fruit',
      'Composite fruit',
      'True fruit only'
    ],
    correctIndex: 1,
    explanation: 'A parthenocarpic fruit develops from the ovary without fertilisation having taken place, and such fruits are typically seedless.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-75',
    type: 'mcq',
    question: 'The wall of a fruit, developing from the wall of the ovary, is called the:',
    options: [
      'Testa',
      'Tegmen',
      'Placenta',
      'Pericarp'
    ],
    correctIndex: 3,
    explanation: 'The pericarp is the fruit wall, developing from the wall of the ovary following fertilisation.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-76',
    type: 'mcq',
    question: 'In fleshy fruits, the pericarp is often differentiated into three distinct layers: an outer epicarp, a middle mesocarp, and an inner layer called the:',
    options: [
      'Testa',
      'Tegmen',
      'Endocarp',
      'Aril'
    ],
    correctIndex: 2,
    explanation: 'In fleshy fruits, the pericarp differentiates into the outer epicarp, middle mesocarp, and innermost endocarp.',
    difficulty: 'medium'
  },
  {
    id: 'morphology-of-flowering-plants-77',
    type: 'mcq',
    question: 'The outer protective covering (or coat) of a mature seed is called the:',
    options: [
      'Pericarp',
      'Seed coat (testa and tegmen)',
      'Placenta',
      'Endosperm exclusively'
    ],
    correctIndex: 1,
    explanation: 'The outer covering of a seed, typically consisting of an outer testa and an inner tegmen, is called the seed coat.',
    difficulty: 'easy'
  },
  {
    id: 'morphology-of-flowering-plants-78',
    type: 'mcq',
    question: 'In non-endospermic (exalbuminous) dicot seeds, such as pea and gram, the food reserves consumed during embryo development are stored in the:',
    options: [
      'Endosperm, which persists in the mature seed',
      'The seed coat',
      'Cotyledons',
      'The radicle exclusively'
    ],
    correctIndex: 2,
    explanation: 'In non-endospermic (exalbuminous) seeds like pea and gram, the endosperm is consumed during development, and food reserves are instead stored in the swollen cotyledons.',
    difficulty: 'medium'
  },
];

export default questions;
