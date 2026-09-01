import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Anatomy of Flowering Plants
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'anatomy-of-flowering-plants-1',
    type: 'mcq',
    question: 'Plant tissues are broadly classified into meristematic tissue and permanent tissue, based on:',
    options: [
      'The colour of the cells',
      'Whether the tissue is found only in roots or only in stems',
      'The age of the entire plant',
      'Whether the constituent cells are actively dividing or have lost the ability to divide (differentiated)'
    ],
    correctIndex: 3,
    explanation: 'Plant tissues are classified as meristematic (actively dividing cells) or permanent (differentiated cells that have generally lost the ability to divide).',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-2',
    type: 'mcq',
    question: 'The meristematic tissue located at the tips of roots and shoots, responsible for the plant\'s primary growth (increase in length), is called:',
    options: [
      'Lateral meristem',
      'Apical meristem',
      'Intercalary meristem',
      'Ground meristem'
    ],
    correctIndex: 1,
    explanation: 'Apical meristem, located at root and shoot tips, is responsible for primary growth, increasing the length of the plant body.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-3',
    type: 'mcq',
    question: 'The meristematic tissue that occurs laterally within the plant axis (such as the vascular cambium and cork cambium), responsible for secondary growth (increase in girth), is called:',
    options: [
      'Lateral meristem',
      'Apical meristem',
      'Intercalary meristem',
      'Procambium'
    ],
    correctIndex: 0,
    explanation: 'Lateral meristem, comprising vascular cambium and cork cambium, is responsible for secondary growth, increasing the girth (diameter) of the plant body.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-4',
    type: 'mcq',
    question: 'The meristematic tissue found at the base of leaves or internodes in plants like grasses, representing portions of apical meristem left behind during growth, is called:',
    options: [
      'Apical meristem',
      'Lateral meristem',
      'Intercalary meristem',
      'Protoderm'
    ],
    correctIndex: 2,
    explanation: 'Intercalary meristem occurs at the base of leaves or internodes (as in grasses), representing portions of apical meristem separated by regions of permanent tissue.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-5',
    type: 'mcq',
    question: 'Among the three primary meristems, the one that gives rise to the outer epidermal tissue is called the:',
    options: [
      'Procambium',
      'Ground meristem',
      'Protoderm',
      'Cork cambium'
    ],
    correctIndex: 2,
    explanation: 'The protoderm is the outermost primary meristematic layer, giving rise to the epidermis of the plant.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-6',
    type: 'mcq',
    question: 'Among the three primary meristems, the one that gives rise to primary vascular tissue (xylem and phloem) is called the:',
    options: [
      'Procambium',
      'Protoderm',
      'Ground meristem',
      'Phellogen'
    ],
    correctIndex: 0,
    explanation: 'The procambium is the primary meristem responsible for giving rise to primary vascular tissue, including primary xylem and phloem.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-7',
    type: 'mcq',
    question: 'Among the three primary meristems, the one that gives rise to the ground tissue system (cortex, pericycle, pith) is called the:',
    options: [
      'Protoderm',
      'Procambium',
      'Vascular cambium',
      'Ground meristem'
    ],
    correctIndex: 3,
    explanation: 'Ground meristem gives rise to the ground tissue system, which includes the cortex, pericycle, and pith of the plant body.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-8',
    type: 'mcq',
    question: 'Permanent tissues are broadly classified into simple and complex tissues, based on:',
    options: [
      'Whether the tissue is living or dead exclusively',
      'Whether the tissue is composed of one type of cell (simple) or more than one type of cell working together (complex)',
      'The overall size of the tissue',
      'The location of the tissue within the plant'
    ],
    correctIndex: 1,
    explanation: 'Simple permanent tissues consist of only one type of cell, whereas complex permanent tissues consist of more than one cell type coordinating together.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-9',
    type: 'mcq',
    question: 'Parenchyma, the most common and least specialised simple permanent tissue, characteristically consists of:',
    options: [
      'Living cells with thin cellulose walls, often with intercellular spaces',
      'Dead cells with thick, lignified walls',
      'Living cells with unevenly thickened corners',
      'Dead cells arranged only in groups called fibres'
    ],
    correctIndex: 0,
    explanation: 'Parenchyma consists of relatively unspecialised, living cells with thin cellulose walls, often possessing intercellular spaces.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-10',
    type: 'mcq',
    question: 'Parenchyma cells that contain chloroplasts and are specialised for carrying out photosynthesis are specifically called:',
    options: [
      'Aerenchyma',
      'Sclerenchyma',
      'Collenchyma',
      'Chlorenchyma'
    ],
    correctIndex: 3,
    explanation: 'Chlorenchyma refers to parenchyma cells specifically containing chloroplasts, enabling them to carry out photosynthesis.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-11',
    type: 'mcq',
    question: 'Parenchyma cells possessing large air cavities, allowing aquatic plants to float, are specifically called:',
    options: [
      'Chlorenchyma',
      'Aerenchyma',
      'Sclerenchyma',
      'Xylem parenchyma'
    ],
    correctIndex: 1,
    explanation: 'Aerenchyma refers to parenchyma tissue with large air cavities, providing buoyancy to aquatic plants.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-12',
    type: 'mcq',
    question: 'Collenchyma, a simple permanent tissue providing mechanical support to growing plant parts, is characterised by cells that are:',
    options: [
      'Dead, with uniformly thick, lignified walls throughout',
      'Living, but with absolutely no thickening of the wall anywhere',
      'Living, with walls unevenly thickened at the corners due to cellulose and pectin deposition',
      'Dead, arranged only as short, irregular sclereids'
    ],
    correctIndex: 2,
    explanation: 'Collenchyma consists of living cells with uneven wall thickening, concentrated at the corners, due to deposits of cellulose and pectin.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-13',
    type: 'mcq',
    question: 'Collenchyma tissue is typically found in the leaf stalks and just beneath the epidermis of dicot stems, providing:',
    options: [
      'Rigid, non-flexible mechanical support only, similar to sclerenchyma',
      'No mechanical support whatsoever',
      'Mechanical support combined with flexibility to actively growing plant parts',
      'Only a photosynthetic function, with no support role'
    ],
    correctIndex: 2,
    explanation: 'Collenchyma provides mechanical strength combined with the flexibility needed by young, actively growing plant parts, such as leaf stalks and young dicot stems.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-14',
    type: 'mcq',
    question: 'Sclerenchyma, a simple permanent tissue providing rigid mechanical strength, is characterised by cells that are:',
    options: [
      'Living cells with thin cellulose walls only',
      'Long, narrow, dead cells with thick, lignified walls',
      'Living cells with unevenly thickened corners',
      'Cells entirely lacking any secondary wall thickening'
    ],
    correctIndex: 1,
    explanation: 'Sclerenchyma cells are elongated and dead at maturity, characterised by thick, lignified cell walls that provide rigid mechanical strength.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-15',
    type: 'mcq',
    question: 'The two main types of cells found within sclerenchymatous tissue are fibres and:',
    options: [
      'Tracheids',
      'Companion cells',
      'Sieve tube elements',
      'Sclereids'
    ],
    correctIndex: 3,
    explanation: 'Sclerenchyma consists of two cell types: elongated fibres, and short, irregularly shaped sclereids.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-16',
    type: 'mcq',
    question: 'The short, highly thickened, dead sclerenchymatous cells found in the pulp of fruits like guava and pear, sometimes called \'stone cells,\' are specifically known as:',
    options: [
      'Sclereids',
      'Fibres',
      'Tracheids',
      'Vessel elements'
    ],
    correctIndex: 0,
    explanation: 'Sclereids are the short, irregularly shaped, highly thickened sclerenchymatous cells found in the gritty pulp of fruits like guava and pear, sometimes termed \'stone cells.\'',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-17',
    type: 'mcq',
    question: 'Xylem, a complex permanent tissue, primarily functions to:',
    options: [
      'Conduct food (photosynthates) exclusively',
      'Conduct water and minerals, while also providing mechanical strength to the plant',
      'Produce new cells through active division',
      'Regulate gas exchange at the leaf surface'
    ],
    correctIndex: 1,
    explanation: 'Xylem is primarily responsible for conducting water and dissolved minerals throughout the plant, while its thick walls also lend mechanical strength.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-18',
    type: 'mcq',
    question: 'Xylem tracheids and vessels are structurally characterised as being:',
    options: [
      'Dead, elongated, tube-like cells at maturity',
      'Living, thin-walled cells at maturity',
      'Living cells, but lacking a nucleus',
      'Dead cells that lack any secondary wall thickening'
    ],
    correctIndex: 0,
    explanation: 'Both tracheids and vessels, the main water-conducting elements of xylem, are dead at maturity, forming elongated, tube-like structures.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-19',
    type: 'mcq',
    question: 'Compared to tracheids, vessels are generally considered more efficient at water conduction mainly because vessels possess:',
    options: [
      'A much thinner cell wall throughout, unlike tracheids',
      'A living nucleus that actively pumps water',
      'Perforations, allowing relatively free and direct flow of water between successive cells',
      'No connection at all between adjacent cells'
    ],
    correctIndex: 2,
    explanation: 'Vessels possess perforations in their end walls, allowing water to flow more freely and directly between successive vessel elements, making them more efficient conductors than tracheids.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-20',
    type: 'mcq',
    question: 'Xylem parenchyma, unlike tracheids and vessels, is characteristically:',
    options: [
      'Dead, and incapable of any storage function',
      'Present only in phloem, not in xylem',
      'Entirely absent from primary xylem',
      'Living, and capable of storing food and assisting in radial conduction'
    ],
    correctIndex: 3,
    explanation: 'Unlike the dead tracheids and vessels, xylem parenchyma is living tissue, capable of storing food reserves and assisting in radial (lateral) conduction of water/nutrients.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-21',
    type: 'mcq',
    question: 'The first-formed primary xylem elements, generally possessing narrower vessels, are called:',
    options: [
      'Metaxylem',
      'Secondary xylem',
      'Phloem parenchyma',
      'Protoxylem'
    ],
    correctIndex: 3,
    explanation: 'Protoxylem represents the first-formed primary xylem elements, typically characterised by narrower vessels compared to metaxylem.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-22',
    type: 'mcq',
    question: 'The primary xylem elements formed after the protoxylem, generally possessing wider vessels, are called:',
    options: [
      'Protoxylem',
      'Secondary xylem exclusively',
      'Metaxylem',
      'Phellogen'
    ],
    correctIndex: 2,
    explanation: 'Metaxylem forms after the protoxylem and typically consists of wider-diameter vessels.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-23',
    type: 'mcq',
    question: 'In a typical dicot stem, protoxylem is located toward the centre of the axis, with metaxylem located toward the periphery; this arrangement of primary xylem is described as:',
    options: [
      'Endarch',
      'Exarch',
      'Mesarch',
      'Radial'
    ],
    correctIndex: 0,
    explanation: 'In dicot stems, the arrangement in which protoxylem lies toward the centre and metaxylem toward the periphery is termed endarch.',
    difficulty: 'hard'
  },
  {
    id: 'anatomy-of-flowering-plants-24',
    type: 'mcq',
    question: 'In a typical dicot root, protoxylem is located toward the periphery of the axis, with metaxylem located toward the centre; this arrangement of primary xylem is described as:',
    options: [
      'Endarch',
      'Exarch',
      'Mesarch',
      'Conjoint'
    ],
    correctIndex: 1,
    explanation: 'In dicot (and monocot) roots, the arrangement in which protoxylem lies toward the periphery and metaxylem toward the centre is termed exarch.',
    difficulty: 'hard'
  },
  {
    id: 'anatomy-of-flowering-plants-25',
    type: 'mcq',
    question: 'Phloem, a complex permanent tissue, is primarily responsible for conducting:',
    options: [
      'Food (photosynthates) from the leaves to other parts of the plant',
      'Water and minerals from the roots to the leaves',
      'Only respiratory gases',
      'Hormones exclusively, with no involvement in food transport'
    ],
    correctIndex: 0,
    explanation: 'Phloem primarily transports food (organic photosynthates), typically from the leaves (source) to other parts of the plant (sink).',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-26',
    type: 'mcq',
    question: 'Unlike xylem, phloem tissue (with the exception of phloem fibres) is characteristically:',
    options: [
      'Entirely dead',
      'Composed only of lignified cell walls',
      'Non-functional at maturity',
      'Living'
    ],
    correctIndex: 3,
    explanation: 'In contrast to xylem, most phloem tissue (except for the phloem fibres) remains living and functional.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-27',
    type: 'mcq',
    question: 'Sieve tube elements, the principal conducting cells of phloem, are living at maturity but characteristically lack a:',
    options: [
      'Cell wall',
      'Nucleus',
      'Plasma membrane',
      'Cytoplasm entirely'
    ],
    correctIndex: 1,
    explanation: 'Sieve tube elements are unique in being living cells that lack a nucleus at functional maturity.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-28',
    type: 'mcq',
    question: 'The perforated structures found at the junctions between successive sieve tube elements, allowing cytoplasmic connections for the flow of food material, are called:',
    options: [
      'Casparian strips',
      'Pit fields only',
      'Sieve plates',
      'Bordered pits exclusively'
    ],
    correctIndex: 2,
    explanation: 'Sieve plates are the perforated cell wall regions located between adjoining sieve tube elements, facilitating the flow of photosynthates.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-29',
    type: 'mcq',
    question: 'The specialised, nucleated living cells closely associated with sieve tube elements, assisting in the loading and unloading of food material, are called:',
    options: [
      'Sclereids',
      'Companion cells',
      'Guard cells',
      'Tracheids'
    ],
    correctIndex: 1,
    explanation: 'Companion cells are nucleated living cells intimately connected to sieve tube elements, assisting with the loading and unloading of photosynthates.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-30',
    type: 'mcq',
    question: 'In gymnosperms, phloem characteristically lacks companion cells, and instead possesses functionally similar cells called:',
    options: [
      'Guard cells',
      'Subsidiary cells',
      'Albuminous cells',
      'Bulliform cells'
    ],
    correctIndex: 2,
    explanation: 'Gymnosperm phloem lacks true companion cells, but possesses functionally analogous cells known as albuminous cells.',
    difficulty: 'hard'
  },
  {
    id: 'anatomy-of-flowering-plants-31',
    type: 'mcq',
    question: 'Phloem fibres (bast fibres), unlike most other phloem cells, are characteristically:',
    options: [
      'Living, and involved in food conduction',
      'Nucleated, and involved in loading sugars',
      'Restricted only to primary phloem, never in secondary phloem',
      'Dead at maturity, providing mechanical support'
    ],
    correctIndex: 3,
    explanation: 'Unlike most of the living phloem tissue, phloem fibres (bast fibres) are dead at maturity and function to provide mechanical support.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-32',
    type: 'mcq',
    question: 'Based on structure, position, and function, plant tissues are organised into three main tissue systems: the epidermal tissue system, the vascular tissue system, and the:',
    options: [
      'Ground tissue system',
      'Meristematic tissue system',
      'Reproductive tissue system',
      'Storage tissue system'
    ],
    correctIndex: 0,
    explanation: 'Plant tissues are organised into three main tissue systems: epidermal, vascular, and ground tissue systems.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-33',
    type: 'mcq',
    question: 'The epidermal tissue system, forming the outermost covering of the plant body, typically secretes a waxy, water-resistant layer on its outer surface called the:',
    options: [
      'Periderm',
      'Casparian strip',
      'Cuticle',
      'Suberin layer of the endodermis'
    ],
    correctIndex: 2,
    explanation: 'The epidermis typically secretes a waxy cuticle on its outer surface, which helps prevent excessive water loss.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-34',
    type: 'mcq',
    question: 'Pore-like structures found mainly in the epidermis of leaves, flanked by guard cells, which regulate transpiration and gas exchange, are called:',
    options: [
      'Stomata',
      'Lenticels',
      'Sieve plates',
      'Casparian strips'
    ],
    correctIndex: 0,
    explanation: 'Stomata are epidermal pores, primarily found on leaves, flanked by guard cells, that regulate both transpiration (water loss) and gas exchange.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-35',
    type: 'mcq',
    question: 'Hair-like outgrowths of the epidermis, which in roots develop into root hairs (for absorption) and in aerial parts often help reduce water loss or reflect excess light, are called:',
    options: [
      'Sclereids',
      'Trichomes',
      'Bulliform cells',
      'Companion cells'
    ],
    correctIndex: 1,
    explanation: 'Trichomes are epidermal hair-like outgrowths, serving functions like absorption (as root hairs) or protection against water loss and excess light (in aerial parts).',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-36',
    type: 'mcq',
    question: 'The ground tissue system comprises all plant tissues except the epidermis and the vascular bundles, and is generally organised into distinct regions such as the cortex, pericycle, pith, and:',
    options: [
      'Cambium rings exclusively',
      'Bundle sheaths only',
      'Periderm layers',
      'Medullary rays'
    ],
    correctIndex: 3,
    explanation: 'The ground tissue system includes regions such as the cortex, pericycle, pith, and medullary rays, which extend between vascular bundles.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-37',
    type: 'mcq',
    question: 'The vascular tissue system, consisting of xylem and phloem together, is collectively organised into structures called:',
    options: [
      'Vascular bundles',
      'Meristematic bundles',
      'Epidermal bundles',
      'Cork bundles'
    ],
    correctIndex: 0,
    explanation: 'The vascular tissue system, comprising xylem and phloem together, is organised into structures known as vascular bundles.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-38',
    type: 'mcq',
    question: 'Each stoma is flanked by two specialised, typically kidney-shaped (or bean-shaped) epidermal cells, which regulate the opening and closing of the pore, called:',
    options: [
      'Subsidiary cells',
      'Companion cells',
      'Guard cells',
      'Bulliform cells'
    ],
    correctIndex: 2,
    explanation: 'Guard cells, typically kidney-shaped, flank each stoma and regulate the opening and closing of the stomatal pore.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-39',
    type: 'mcq',
    question: 'In grasses, the guard cells flanking each stoma are characteristically shaped differently from those in most dicots, appearing instead:',
    options: [
      'Kidney-shaped, exactly as in dicots',
      'Perfectly spherical',
      'Star-shaped',
      'Dumb-bell shaped'
    ],
    correctIndex: 3,
    explanation: 'Unlike the typical kidney-shaped guard cells of dicots, grasses characteristically possess dumb-bell shaped guard cells.',
    difficulty: 'hard'
  },
  {
    id: 'anatomy-of-flowering-plants-40',
    type: 'mcq',
    question: 'The epidermal cells surrounding and directly associated with the guard cells of a stoma are collectively called:',
    options: [
      'Sclereids',
      'Subsidiary cells',
      'Companion cells',
      'Bulliform cells'
    ],
    correctIndex: 1,
    explanation: 'Subsidiary cells are the specialised epidermal cells that surround and are closely associated with the guard cells of a stoma.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-41',
    type: 'mcq',
    question: 'In roots, trichomes are specifically modified into fine, unicellular structures that greatly increase the absorptive surface area, called:',
    options: [
      'Sclereids',
      'Companion cells',
      'Bulliform cells',
      'Root hairs'
    ],
    correctIndex: 3,
    explanation: 'In roots, trichomes are modified into root hairs, unicellular outgrowths that significantly increase the surface area available for water and mineral absorption.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-42',
    type: 'mcq',
    question: 'Unlike root hair trichomes, trichomes found on aerial parts of the plant (such as the stem) are often:',
    options: [
      'Always strictly unicellular, like root hairs',
      'Multicellular, and may be branched',
      'Composed entirely of dead, lignified sclerenchyma',
      'Completely absent in all aerial plant structures'
    ],
    correctIndex: 1,
    explanation: 'In contrast to the typically unicellular root hairs, trichomes found on the aerial parts of plants are frequently multicellular and may even be branched.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-43',
    type: 'mcq',
    question: 'A vascular bundle in which cambium is present between the xylem and phloem (allowing for future secondary growth), typical of dicot stems, is described as:',
    options: [
      'Closed',
      'Radial',
      'Open',
      'Bicollateral only, with no reference to cambium'
    ],
    correctIndex: 2,
    explanation: 'An open vascular bundle contains cambium between the xylem and phloem, permitting secondary growth, and is typical of dicot stems.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-44',
    type: 'mcq',
    question: 'A vascular bundle in which cambium is absent between the xylem and phloem (so no secondary growth can occur), typical of monocot stems, is described as:',
    options: [
      'Closed',
      'Open',
      'Radial',
      'Conjoint, with cambium always present'
    ],
    correctIndex: 0,
    explanation: 'A closed vascular bundle lacks cambium between the xylem and phloem, meaning no secondary growth can occur; this is typical of monocot stems.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-45',
    type: 'mcq',
    question: 'An arrangement of vascular tissue in which xylem and phloem are positioned on different radii, alternating with one another, typically found in roots, is called:',
    options: [
      'Conjoint',
      'Radial',
      'Collateral',
      'Bicollateral'
    ],
    correctIndex: 1,
    explanation: 'In radial vascular bundles (as in roots), xylem and phloem are located on separate, alternating radii rather than at the same position.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-46',
    type: 'mcq',
    question: 'An arrangement of vascular tissue in which xylem and phloem are positioned together at the same radius, typically found in stems, is called:',
    options: [
      'Radial',
      'Only found in roots, never in stems',
      'Exarch',
      'Conjoint'
    ],
    correctIndex: 3,
    explanation: 'In conjoint vascular bundles (typical of stems), xylem and phloem are positioned together at the same radius, rather than on alternating radii.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-47',
    type: 'mcq',
    question: 'In a collateral vascular bundle, phloem is positioned only on one particular side of the xylem, specifically the:',
    options: [
      'Outer side',
      'Inner side only',
      'Both inner and outer sides equally',
      'Directly beneath the xylem, on the same side as the pith'
    ],
    correctIndex: 0,
    explanation: 'In a collateral vascular bundle, phloem is located only on the outer side of the xylem, a common arrangement in both dicot and monocot stems.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-48',
    type: 'mcq',
    question: 'In a bicollateral vascular bundle, such as that found in cucurbits, phloem is positioned:',
    options: [
      'Only on the outer side of the xylem',
      'Only on the inner side of the xylem',
      'On both the inner and outer sides of the xylem',
      'Nowhere near the xylem at all, in a completely separate bundle'
    ],
    correctIndex: 2,
    explanation: 'In bicollateral vascular bundles (as in cucurbits), phloem is present on both the inner and outer sides of the xylem, unlike the simpler collateral arrangement.',
    difficulty: 'hard'
  },
  {
    id: 'anatomy-of-flowering-plants-49',
    type: 'mcq',
    question: 'The outermost layer of a young dicot root, bearing unicellular root hairs, is called the:',
    options: [
      'Endodermis',
      'Pericycle',
      'Epiblema (epidermis)',
      'Cortex'
    ],
    correctIndex: 2,
    explanation: 'The epiblema (root epidermis) is the outermost layer of a young dicot root, from which unicellular root hairs develop.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-50',
    type: 'mcq',
    question: 'The innermost layer of the cortex in a dicot root, consisting of barrel-shaped cells bearing characteristic band-like deposits of suberin, is called the:',
    options: [
      'Endodermis',
      'Epiblema',
      'Pericycle',
      'Phellogen'
    ],
    correctIndex: 0,
    explanation: 'The endodermis, the innermost cortical layer of a dicot root, consists of barrel-shaped cells with characteristic Casparian strips (suberin deposits).',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-51',
    type: 'mcq',
    question: 'The band-like deposits of suberin found on the radial and transverse walls of endodermal cells in a dicot root, which regulate the movement of water and minerals into the vascular tissue, are called:',
    options: [
      'Sieve plates',
      'Cuticle deposits',
      'Lenticels',
      'Casparian strips'
    ],
    correctIndex: 3,
    explanation: 'Casparian strips are suberin deposits on the radial and transverse walls of endodermal cells, forcing water and minerals to pass through the cell membrane rather than the cell wall, thereby regulating their entry into the vascular tissue.',
    difficulty: 'hard'
  },
  {
    id: 'anatomy-of-flowering-plants-52',
    type: 'mcq',
    question: 'The layer of cells located just internal to the endodermis in a dicot root, which gives rise to lateral roots, is called the:',
    options: [
      'Epiblema',
      'Pericycle',
      'Endodermis',
      'Cortex'
    ],
    correctIndex: 1,
    explanation: 'The pericycle, situated just inside the endodermis, is the tissue from which lateral roots typically originate in dicot roots.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-53',
    type: 'mcq',
    question: 'In a typical dicot root, the number of xylem bundles (arms) is generally limited, ranging from two to four, and this condition is described as:',
    options: [
      'Diarch to tetrarch',
      'Polyarch',
      'Endarch only',
      'Bicollateral'
    ],
    correctIndex: 0,
    explanation: 'Dicot roots typically show a limited number of xylem arms (two to four), a condition described as diarch to tetrarch.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-54',
    type: 'mcq',
    question: 'Compared to a typical dicot root, a monocot root typically differs in generally possessing:',
    options: [
      'No pith at all, under any circumstances',
      'A large, well-developed pith at the centre',
      'A xylem arrangement described as diarch only',
      'The ability to undergo extensive secondary growth'
    ],
    correctIndex: 1,
    explanation: 'Unlike the typically small or absent pith of dicot roots, monocot roots generally possess a large, well-developed central pith.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-55',
    type: 'mcq',
    question: 'In monocot roots, the number of xylem bundles (arms) is typically greater than six, a condition described as:',
    options: [
      'Diarch',
      'Triarch',
      'Tetrarch',
      'Polyarch'
    ],
    correctIndex: 3,
    explanation: 'Monocot roots typically show a polyarch arrangement, with more than six xylem arms, unlike the limited diarch-to-tetrarch condition of dicot roots.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-56',
    type: 'mcq',
    question: 'Unlike dicot roots, monocot roots typically do NOT undergo secondary growth mainly because:',
    options: [
      'Monocot roots completely lack a pericycle',
      'Monocot roots lack any xylem tissue altogether',
      'The pericycle in monocot roots generally does not give rise to a vascular cambium',
      'Monocot roots have no endodermis at all'
    ],
    correctIndex: 2,
    explanation: 'Secondary growth is generally absent in monocot roots because the pericycle typically does not give rise to a vascular cambium, unlike in dicot roots.',
    difficulty: 'hard'
  },
  {
    id: 'anatomy-of-flowering-plants-57',
    type: 'mcq',
    question: 'In a typical dicot stem, the layer of tissue located just below the epidermis, generally composed of collenchyma, is called the:',
    options: [
      'Endodermis',
      'Pericycle',
      'Pith',
      'Hypodermis'
    ],
    correctIndex: 3,
    explanation: 'The hypodermis, located just beneath the epidermis in dicot stems, is generally composed of collenchyma, providing mechanical strength to the young stem.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-58',
    type: 'mcq',
    question: 'The innermost layer of the cortex in a dicot stem, often rich in starch grains, is sometimes referred to as the:',
    options: [
      'Epiblema',
      'Pericycle',
      'Starch sheath (endodermis)',
      'Hypodermis'
    ],
    correctIndex: 2,
    explanation: 'The innermost cortical layer in a dicot stem, often rich in starch grains, is termed the starch sheath or endodermis.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-59',
    type: 'mcq',
    question: 'In a dicot stem, the pericycle often occurs as discontinuous patches of sclerenchymatous tissue located just above the phloem of each vascular bundle, sometimes called:',
    options: [
      'Pericyclic fibres (bundle caps)',
      'Bulliform cells',
      'Casparian strips',
      'Sieve plates'
    ],
    correctIndex: 0,
    explanation: 'In dicot stems, the pericycle is often represented by discontinuous patches of sclerenchyma, positioned above the phloem, sometimes termed pericyclic fibres or bundle caps.',
    difficulty: 'hard'
  },
  {
    id: 'anatomy-of-flowering-plants-60',
    type: 'mcq',
    question: 'In a typical dicot stem, the vascular bundles are arranged in a distinct pattern described as:',
    options: [
      'Scattered irregularly throughout the ground tissue',
      'A ring, near the periphery of the stem',
      'Concentrated only at the very centre of the stem',
      'Absent altogether, since vascular tissue occurs elsewhere'
    ],
    correctIndex: 1,
    explanation: 'In dicot stems, vascular bundles are characteristically arranged in a single ring, generally near the periphery of the stem.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-61',
    type: 'mcq',
    question: 'In a typical dicot stem, the vascular bundles are conjoint, collateral, and:',
    options: [
      'Closed (cambium absent, no secondary growth possible)',
      'Open (cambium present, allowing secondary growth)',
      'Radial, with xylem and phloem on alternating radii',
      'Bicollateral, with phloem on both sides of the xylem'
    ],
    correctIndex: 1,
    explanation: 'Dicot stem vascular bundles are typically conjoint, collateral, and open, since cambium is present, allowing for future secondary growth.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-62',
    type: 'mcq',
    question: 'In a dicot stem, the central region occupied by large, parenchymatous cells, generally used for storage, is called the:',
    options: [
      'Cortex',
      'Pericycle',
      'Endodermis',
      'Pith'
    ],
    correctIndex: 3,
    explanation: 'The pith is the large, centrally located, parenchymatous region of a dicot stem, generally functioning in storage.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-63',
    type: 'mcq',
    question: 'Unlike a dicot stem, the hypodermis of a typical monocot stem is generally composed of:',
    options: [
      'Collenchyma',
      'Parenchyma exclusively',
      'Sclerenchyma',
      'Meristematic tissue'
    ],
    correctIndex: 2,
    explanation: 'In contrast to the collenchymatous hypodermis of dicot stems, the hypodermis of monocot stems is generally composed of sclerenchyma.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-64',
    type: 'mcq',
    question: 'In a typical monocot stem, the ground tissue is generally NOT differentiated into distinct regions such as cortex, pericycle, and pith, and is instead described as:',
    options: [
      'Undifferentiated (a continuous mass of ground tissue)',
      'Highly differentiated into more regions than in dicot stems',
      'Entirely absent, with only vascular tissue present',
      'Composed only of dead, lignified tissue'
    ],
    correctIndex: 0,
    explanation: 'Unlike dicot stems, the ground tissue of monocot stems is generally not differentiated into distinct cortex, pericycle, and pith regions, instead forming a continuous, undifferentiated mass.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-65',
    type: 'mcq',
    question: 'In a typical monocot stem, unlike the ring arrangement seen in dicot stems, the vascular bundles are characteristically:',
    options: [
      'Arranged in a single, well-defined ring near the periphery',
      'Restricted entirely to the very centre of the stem',
      'Scattered throughout the ground tissue',
      'Completely absent from the stem'
    ],
    correctIndex: 2,
    explanation: 'In monocot stems, vascular bundles are scattered throughout the ground tissue, rather than being arranged in a single peripheral ring as in dicot stems.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-66',
    type: 'mcq',
    question: 'In a typical monocot stem, each vascular bundle is conjoint, collateral, and:',
    options: [
      'Open (cambium present, allowing secondary growth)',
      'Radial, with xylem and phloem on alternating radii',
      'Surrounded only by a layer of living parenchyma, with no sclerenchymatous sheath',
      'Closed (cambium absent, so secondary growth typically does not occur)'
    ],
    correctIndex: 3,
    explanation: 'Monocot stem vascular bundles are typically conjoint, collateral, and closed, since cambium is absent, meaning secondary growth generally does not occur.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-67',
    type: 'mcq',
    question: 'In a typical dicot (dorsiventral) leaf, the mesophyll tissue located between the two epidermal layers is differentiated into two distinct regions: spongy parenchyma and:',
    options: [
      'Palisade parenchyma',
      'Aerenchyma exclusively',
      'Collenchyma exclusively',
      'Sclerenchyma exclusively'
    ],
    correctIndex: 0,
    explanation: 'The mesophyll of a typical dicot leaf is differentiated into an upper palisade parenchyma layer and a lower spongy parenchyma layer.',
    difficulty: 'easy'
  },
  {
    id: 'anatomy-of-flowering-plants-68',
    type: 'mcq',
    question: 'The palisade parenchyma of a dicot leaf, generally located toward the upper (adaxial) surface, is characteristically composed of cells that are:',
    options: [
      'Irregularly shaped, loosely arranged, with large air spaces',
      'Columnar, compactly arranged, and containing numerous chloroplasts',
      'Completely devoid of any chloroplasts',
      'Dead, thick-walled cells providing only mechanical support'
    ],
    correctIndex: 1,
    explanation: 'Palisade parenchyma consists of columnar, closely packed cells with abundant chloroplasts, well-suited for efficient photosynthesis near the upper leaf surface.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-69',
    type: 'mcq',
    question: 'The spongy parenchyma of a dicot leaf, generally located toward the lower (abaxial) surface, is characteristically composed of cells that are:',
    options: [
      'Irregularly shaped, loosely arranged, with prominent air spaces between them',
      'Columnar and very compactly arranged, with minimal air space',
      'Entirely lacking chloroplasts',
      'Dead cells specialised only for water conduction'
    ],
    correctIndex: 0,
    explanation: 'Spongy parenchyma consists of irregularly shaped cells loosely arranged with substantial air spaces, facilitating efficient gas exchange within the leaf.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-70',
    type: 'mcq',
    question: 'In a typical dicot leaf, stomata are generally found to be more numerous on which epidermal surface?',
    options: [
      'The upper (adaxial) epidermis',
      'Both surfaces equally, with no difference at all',
      'The lower (abaxial) epidermis',
      'Neither surface; stomata are restricted only to the leaf margin'
    ],
    correctIndex: 2,
    explanation: 'In most dicot leaves, stomata are generally more numerous on the lower (abaxial) surface than on the upper (adaxial) surface.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-71',
    type: 'mcq',
    question: 'In the vascular bundles found within the veins of a dicot leaf, xylem is generally oriented toward the upper surface, while phloem is oriented toward the:',
    options: [
      'Upper surface, alongside the xylem',
      'Lower surface',
      'Centre of the vein, with xylem surrounding it on all sides',
      'Leaf margin exclusively'
    ],
    correctIndex: 1,
    explanation: 'In dicot leaf veins, the collateral vascular bundles are oriented with xylem toward the upper (adaxial) surface and phloem toward the lower (abaxial) surface.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-72',
    type: 'mcq',
    question: 'Unlike a typical dicot leaf, the mesophyll of a monocot (isobilateral) leaf is generally:',
    options: [
      'Differentiated into even more distinct layers than in dicot leaves',
      'Completely absent, with the leaf composed only of epidermis',
      'Composed entirely of sclerenchyma, with no parenchyma at all',
      'Not differentiated into distinct palisade and spongy parenchyma layers'
    ],
    correctIndex: 3,
    explanation: 'In monocot (isobilateral) leaves, the mesophyll is generally undifferentiated, lacking the distinct palisade and spongy layers seen in dicot leaves.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-73',
    type: 'mcq',
    question: 'Because monocot leaves are described as \'isobilateral,\' this indicates that stomata are typically found:',
    options: [
      'Only on the upper surface, with none on the lower surface',
      'Only on the lower surface, with none on the upper surface',
      'Nowhere on the leaf at all',
      'On both the upper and lower epidermal surfaces, in roughly similar numbers'
    ],
    correctIndex: 3,
    explanation: 'Isobilateral leaves, characteristic of many monocots, possess stomata on both epidermal surfaces in roughly similar numbers, unlike the typically lower-surface-dominant dicot leaf.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-74',
    type: 'mcq',
    question: 'Large, empty, colourless cells found on the upper epidermis of many grass leaves, which help the leaf roll or fold during water-deficient conditions to reduce transpiration, are called:',
    options: [
      'Bulliform cells',
      'Guard cells',
      'Sclereids',
      'Companion cells'
    ],
    correctIndex: 0,
    explanation: 'Bulliform cells are large, specialised, colourless epidermal cells found in many grasses, which facilitate the rolling or folding of leaves to minimise water loss under drought stress.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-75',
    type: 'mcq',
    question: 'Secondary growth, resulting in an increase in the girth (diameter) of the plant, occurs due to the activity of lateral meristems, namely vascular cambium and:',
    options: [
      'Apical meristem',
      'Intercalary meristem',
      'Cork cambium (phellogen)',
      'Protoderm'
    ],
    correctIndex: 2,
    explanation: 'Secondary growth results from the activity of two lateral meristems: the vascular cambium (producing secondary xylem/phloem) and the cork cambium (phellogen, producing periderm).',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-76',
    type: 'mcq',
    question: 'The activity of vascular cambium during different seasons produces xylem of varying cell density, and the resulting pattern of alternating dense and less-dense wood, used to estimate the age of a tree, is called:',
    options: [
      'Casparian strips',
      'Annual rings',
      'Bulliform bands',
      'Sieve plates'
    ],
    correctIndex: 1,
    explanation: 'Seasonal variation in vascular cambium activity produces alternating bands of spring wood (less dense) and autumn wood (more dense), together forming annual rings, useful for estimating a tree\'s age.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-77',
    type: 'mcq',
    question: 'The cork cambium (phellogen) cuts off cells on both its outer and inner sides; the dead, suberised cells cut off toward the outside are collectively called:',
    options: [
      'Secondary cortex (phelloderm)',
      'Cork (phellem)',
      'Secondary xylem',
      'Secondary phloem'
    ],
    correctIndex: 1,
    explanation: 'The cork cambium (phellogen) produces cork (phellem) toward the outside - dead cells with suberised walls that are impermeable to water and gases.',
    difficulty: 'medium'
  },
  {
    id: 'anatomy-of-flowering-plants-78',
    type: 'mcq',
    question: 'Small pore-like openings found in the bark of woody stems, allowing for the exchange of gases despite the impermeable cork layer, are called:',
    options: [
      'Stomata exclusively',
      'Sieve plates',
      'Casparian strips',
      'Lenticels'
    ],
    correctIndex: 3,
    explanation: 'Lenticels are small openings in the bark (periderm) that allow gaseous exchange to continue, despite the otherwise impermeable, suberised cork layer.',
    difficulty: 'medium'
  },
];

export default questions;
