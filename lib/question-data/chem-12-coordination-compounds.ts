<<<<<<< HEAD
import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Coordination Compounds
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'coordination-compounds-1',
    type: 'mcq',
    question: 'According to Werner\'s theory of coordination compounds, a metal exhibits two types of valency, called primary valency and:',
    options: [
      'Tertiary valency',
      'Secondary valency',
      'Ionic valency, as a completely separate third category',
      'Covalent valency, as a completely separate third category'
    ],
    correctIndex: 1,
    explanation: 'Werner\'s theory proposed that metals in coordination compounds exhibit two distinct types of valency: primary valency and secondary valency.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-2',
    type: 'mcq',
    question: 'According to Werner\'s theory, the primary valency of a metal is ionizable and corresponds to the metal\'s:',
    options: [
      'Coordination number',
      'Atomic number',
      'Atomic mass',
      'Oxidation state'
    ],
    correctIndex: 3,
    explanation: 'Primary valency, being ionizable, corresponds to the oxidation state of the metal in the coordination compound.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-3',
    type: 'mcq',
    question: 'According to Werner\'s theory, the secondary valency of a metal is generally non-ionizable and corresponds to the metal\'s:',
    options: [
      'Coordination number',
      'Oxidation state',
      'Atomic radius',
      'Electronegativity'
    ],
    correctIndex: 0,
    explanation: 'Secondary valency, being non-ionizable, corresponds to the coordination number of the metal, which is fixed and directed in space.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-4',
    type: 'mcq',
    question: 'A key insight of Werner\'s theory was that secondary valencies are fixed in space (directional), and this feature is responsible for giving a coordination compound its characteristic:',
    options: [
      'Colour, exclusively, with no relation to geometry',
      'Atomic mass, exclusively',
      'Geometry (shape)',
      'Melting point, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Since secondary valencies are directional (fixed in space), they determine the specific geometric arrangement (geometry) of the ligands around the central metal atom.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-5',
    type: 'mcq',
    question: 'The central metal atom or ion, together with the ligands directly bonded to it, is collectively referred to as the:',
    options: [
      'Counter ion',
      'Chelate ring',
      'Coordination entity (coordination sphere)',
      'Spectrochemical series'
    ],
    correctIndex: 2,
    explanation: 'The coordination entity (or coordination sphere) consists of the central metal atom/ion along with the ligands directly attached to it.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-6',
    type: 'mcq',
    question: 'Ions or molecules that are directly bonded to the central metal atom or ion within a coordination entity are called:',
    options: [
      'Ligands',
      'Counter ions',
      'Chelates, exclusively',
      'Isomers'
    ],
    correctIndex: 0,
    explanation: 'Ligands are the ions or neutral molecules that are directly bonded to the central metal atom/ion in a coordination compound.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-7',
    type: 'mcq',
    question: 'The total number of ligand donor atoms directly bonded to the central metal atom or ion is called the:',
    options: [
      'Oxidation number',
      'Atomic number',
      'Chelate number',
      'Coordination number'
    ],
    correctIndex: 3,
    explanation: 'Coordination number refers to the total number of donor atoms from ligands that are directly bonded to the central metal atom/ion.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-8',
    type: 'mcq',
    question: 'In writing the formula of a coordination compound, the central atom/ion and the ligands attached to it (the coordination sphere) are typically enclosed within:',
    options: [
      'Round (curved) brackets, exclusively',
      'Square brackets',
      'Curly braces, exclusively',
      'No brackets of any kind'
    ],
    correctIndex: 1,
    explanation: 'By convention, the coordination sphere (central atom/ion and its directly bonded ligands) is enclosed within square brackets in the formula of a coordination compound.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-9',
    type: 'mcq',
    question: 'Ions present outside the coordination sphere of a coordination compound, which help balance the overall charge, are called:',
    options: [
      'Ligands',
      'Chelates',
      'Ambidentate species',
      'Counter ions'
    ],
    correctIndex: 3,
    explanation: 'Counter ions are the ions located outside the coordination sphere, present to balance the net charge of the coordination entity.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-10',
    type: 'mcq',
    question: 'A common coordination number of 6, exhibited by many metal complexes, is generally associated with which molecular geometry?',
    options: [
      'Tetrahedral',
      'Octahedral',
      'Square planar, exclusively for all coordination number 6 complexes',
      'Linear'
    ],
    correctIndex: 1,
    explanation: 'A coordination number of 6 is most commonly associated with octahedral geometry in coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-11',
    type: 'mcq',
    question: 'A common coordination number of 4, exhibited by many metal complexes, can be associated with either tetrahedral geometry or:',
    options: [
      'Square planar geometry',
      'Octahedral geometry',
      'Linear geometry',
      'Trigonal bipyramidal geometry'
    ],
    correctIndex: 0,
    explanation: 'Coordination number 4 complexes can adopt either tetrahedral or square planar geometry, depending on the specific metal and ligands involved.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-12',
    type: 'mcq',
    question: 'A coordination number of 2, though less common, is typically associated with which simple molecular geometry?',
    options: [
      'Octahedral',
      'Square planar',
      'Linear',
      'Tetrahedral'
    ],
    correctIndex: 2,
    explanation: 'Complexes with a coordination number of 2 typically adopt a simple linear geometry.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-13',
    type: 'mcq',
    question: 'In the coordination compound K4[Fe(CN)6], the ligand CN- is directly bonded to the central iron ion, while the potassium ions (K+) function as:',
    options: [
      'Ligands, directly bonded to the central iron ion',
      'Part of the coordination sphere itself',
      'Counter ions, balancing the overall negative charge of the coordination sphere',
      'The central atom of the complex'
    ],
    correctIndex: 2,
    explanation: 'In K4[Fe(CN)6], the potassium ions are counter ions located outside the coordination sphere, balancing the overall charge of the [Fe(CN)6]^4- coordination entity.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-14',
    type: 'mcq',
    question: 'A ligand that binds to the central metal atom through only a single donor atom is called a(n):',
    options: [
      'Unidentate (monodentate) ligand',
      'Didentate (bidentate) ligand',
      'Polydentate ligand',
      'Ambidentate ligand'
    ],
    correctIndex: 0,
    explanation: 'A unidentate (monodentate) ligand has only one donor atom that binds to the central metal atom, such as Cl- or NH3.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-15',
    type: 'mcq',
    question: 'A ligand that binds to the central metal atom through two donor atoms simultaneously, such as ethylenediamine (en), is called a(n):',
    options: [
      'Unidentate ligand',
      'Didentate (bidentate) ligand',
      'Ambidentate ligand exclusively',
      'Counter ion'
    ],
    correctIndex: 1,
    explanation: 'Ethylenediamine (en) is a classic example of a didentate (bidentate) ligand, binding to the metal through two donor nitrogen atoms.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-16',
    type: 'mcq',
    question: 'A ligand possessing more than two donor atoms, capable of binding to the central metal atom at multiple points, such as EDTA, is classified as a:',
    options: [
      'Unidentate ligand',
      'Simple monodentate ligand',
      'Counter ion, exclusively',
      'Polydentate ligand'
    ],
    correctIndex: 3,
    explanation: 'EDTA, having six donor atoms, is a classic example of a polydentate ligand (specifically, a hexadentate ligand).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-17',
    type: 'mcq',
    question: 'A ligand capable of coordinating to the central metal atom through two different donor atoms, though only one at a time, such as the nitrite ion (NO2-), is called a(n):',
    options: [
      'Polydentate ligand, exclusively',
      'Ambidentate ligand',
      'Chelating ligand, exclusively',
      'Counter ion'
    ],
    correctIndex: 1,
    explanation: 'Ambidentate ligands, such as NO2- (which can bind through either nitrogen or oxygen), possess two potential donor atoms, though coordination generally occurs through only one at a time.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-18',
    type: 'mcq',
    question: 'The thiocyanate ion (SCN-), a classic example of an ambidentate ligand, can bind to a metal centre through either sulphur or:',
    options: [
      'Carbon',
      'Oxygen',
      'Hydrogen',
      'Nitrogen'
    ],
    correctIndex: 3,
    explanation: 'The thiocyanate ion (SCN-) is ambidentate, capable of coordinating to a metal through either its sulphur atom or its nitrogen atom.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-19',
    type: 'mcq',
    question: 'A polydentate ligand that binds to a single metal ion through two or more donor atoms simultaneously, forming a ring-like structure, is more specifically called a:',
    options: [
      'Chelating ligand (chelate)',
      'Ambidentate ligand, exclusively',
      'Unidentate ligand, exclusively',
      'Counter ion'
    ],
    correctIndex: 0,
    explanation: 'A chelating ligand binds to a single metal ion at multiple points, forming a ring structure (a chelate), which typically increases the overall stability of the complex.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-20',
    type: 'mcq',
    question: 'The increased stability often observed in coordination compounds containing chelating ligands, compared to similar complexes with unidentate ligands, is commonly referred to as the:',
    options: [
      'Spectrochemical effect',
      'Jahn-Teller effect',
      'Chelate effect',
      'Trans effect'
    ],
    correctIndex: 2,
    explanation: 'The chelate effect describes the generally enhanced stability of complexes formed with chelating (polydentate) ligands compared to analogous complexes formed with unidentate ligands.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-21',
    type: 'mcq',
    question: 'The oxidation number of the central atom in a coordination entity is defined as the charge it would carry if all the ligands are removed along with the electron pairs that were:',
    options: [
      'Shared with the central atom',
      'Never actually shared with the central atom in the first place',
      'Present only in the counter ions, not in the ligands',
      'Located exclusively in the outermost electron shell of the ligand atoms'
    ],
    correctIndex: 0,
    explanation: 'The oxidation number of the central atom represents the hypothetical charge it would have if the ligands, along with the electron pairs shared with the central atom, were removed.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-22',
    type: 'mcq',
    question: 'In the IUPAC nomenclature of coordination compounds, the oxidation number of the central metal atom is conventionally represented using a Roman numeral placed in:',
    options: [
      'Square brackets, immediately preceding the name of the metal',
      'No specific notation at all; oxidation number is never indicated in the name',
      'Parentheses, immediately following the name of the metal',
      'Curly braces, placed at the very beginning of the entire compound\'s name'
    ],
    correctIndex: 2,
    explanation: 'The oxidation state of the central metal atom is conventionally indicated by a Roman numeral enclosed in parentheses, placed immediately after the metal\'s name in the compound\'s IUPAC name.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-23',
    type: 'mcq',
    question: 'In naming a coordination compound according to IUPAC rules, the name of the cation is generally written:',
    options: [
      'Only if the complex ion itself happens to be the cation',
      'First, followed by the name of the anion, regardless of whether the complex ion itself is the cation or anion',
      'Last, always after the name of the anion',
      'Never; only the neutral ligands are ever named'
    ],
    correctIndex: 1,
    explanation: 'As a general rule in IUPAC nomenclature, the name of the cation is written first, followed by the name of the anion, regardless of whether the coordination entity itself is the cationic or anionic species.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-24',
    type: 'mcq',
    question: 'When naming the ligands within a coordination compound, they are generally listed in:',
    options: [
      'Order of decreasing ligand size, regardless of alphabetical order',
      'Random order, with no fixed convention',
      'Order of decreasing negative charge, regardless of alphabetical order',
      'Alphabetical order'
    ],
    correctIndex: 3,
    explanation: 'IUPAC nomenclature requires that the names of different ligands within a coordination compound be listed in alphabetical order.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-25',
    type: 'mcq',
    question: 'According to IUPAC nomenclature rules, anionic ligands are generally named with a suffix ending in:',
    options: [
      '\'-ium\', identical to cation naming conventions',
      '\'-ate\', identical to complex anion naming conventions',
      '\'-yl\', as used for organic radicals',
      '\'-o\' (such as chloro, cyano, or sulphato)'
    ],
    correctIndex: 3,
    explanation: 'Anionic ligands are conventionally named with a suffix ending in \'-o\' (for example, chloro for Cl-, cyano for CN-, and sulphato for SO4^2-).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-26',
    type: 'mcq',
    question: 'Which of the following special names is used for the neutral ligand water (H2O) in the IUPAC nomenclature of coordination compounds?',
    options: [
      'Ammine',
      'Aqua',
      'Carbonyl',
      'Nitrosyl'
    ],
    correctIndex: 1,
    explanation: 'The neutral ligand water (H2O) is given the special IUPAC name \'aqua\' when named as a ligand in a coordination compound.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-27',
    type: 'mcq',
    question: 'Which of the following special names is used for the neutral ligand ammonia (NH3) in the IUPAC nomenclature of coordination compounds?',
    options: [
      'Aqua',
      'Carbonyl',
      'Ammine',
      'Nitrosyl'
    ],
    correctIndex: 2,
    explanation: 'The neutral ligand ammonia (NH3) is given the special IUPAC name \'ammine\' when named as a ligand in a coordination compound.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-28',
    type: 'mcq',
    question: 'Which of the following special names is used for the neutral ligand carbon monoxide (CO) in the IUPAC nomenclature of coordination compounds?',
    options: [
      'Carbonyl',
      'Aqua',
      'Ammine',
      'Nitrosyl'
    ],
    correctIndex: 0,
    explanation: 'The neutral ligand carbon monoxide (CO) is given the special IUPAC name \'carbonyl\' when named as a ligand in a coordination compound.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-29',
    type: 'mcq',
    question: 'If a coordination entity, as a whole, carries a net negative (anionic) charge, the name of the central metal atom is modified with a suffix ending in:',
    options: [
      '\'-ate\' (such as ferrate or cobaltate)',
      '\'-ium\', regardless of the metal involved',
      '\'-ide\', regardless of the metal involved',
      '\'-ic\', regardless of the metal involved'
    ],
    correctIndex: 0,
    explanation: 'When the overall coordination entity is anionic, the metal\'s name is given a suffix ending in \'-ate\' (for example, ferrate for iron, or cobaltate for cobalt).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-30',
    type: 'mcq',
    question: 'For a complex ligand name derived from a compound whose name already includes a multiplying prefix (such as ethylenediamine), the alternative multiplying prefixes \'bis,\' \'tris,\' or \'tetrakis\' are used instead of the standard prefixes \'di,\' \'tri,\' or \'tetra\' primarily to:',
    options: [
      'Indicate a completely different, unrelated type of chemical bond',
      'Signify that the ligand in question is always negatively charged',
      'Avoid ambiguity or confusion in the overall naming of the compound',
      'Show that the central metal atom has an oxidation state of exactly zero'
    ],
    correctIndex: 2,
    explanation: 'Prefixes like \'bis,\' \'tris,\' and \'tetrakis\' are used for complex ligand names (which may already contain simple multiplying prefixes like \'di\' or \'tri\' within their own name) to avoid ambiguity in the overall compound name.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-31',
    type: 'mcq',
    question: 'For a neutral coordination compound (having no overall charge), the naming convention for the central metal atom generally follows a pattern similar to that used for:',
    options: [
      'Anionic complexes exclusively, always ending in \'-ate\'',
      'Only elemental metals in their uncombined, free state',
      'No naming convention exists for neutral coordination compounds',
      'Cationic complexes (i.e., the standard, unmodified metal name is generally used)'
    ],
    correctIndex: 3,
    explanation: 'Neutral coordination compounds are generally named following a pattern similar to cationic complexes, using the standard (unmodified) name of the metal, without the \'-ate\' suffix used for anionic complexes.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-32',
    type: 'mcq',
    question: 'Linkage isomerism in coordination compounds arises when an ambidentate ligand attaches to the central metal atom through:',
    options: [
      'Exactly the same donor atom in every isomeric form, with no variation possible',
      'Two different possible donor atoms, in different isomeric forms of the compound',
      'A completely different metal atom in each isomeric form',
      'No donor atom at all, in either isomeric form'
    ],
    correctIndex: 1,
    explanation: 'Linkage isomerism occurs when an ambidentate ligand can attach to the central metal through either of its two potential donor atoms, giving rise to different isomeric forms of the compound.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-33',
    type: 'mcq',
    question: 'Coordination isomerism arises specifically in compounds containing both a cationic and an anionic coordination entity, when the distribution of ligands between the two complex ions:',
    options: [
      'Remains identical in every possible isomer, with no variation at all',
      'Is entirely unrelated to the concept of isomerism',
      'Can only ever occur if both complex ions are cationic',
      'Differs between isomers'
    ],
    correctIndex: 3,
    explanation: 'Coordination isomerism occurs in compounds containing both a cationic and an anionic complex ion, where the specific distribution of ligands between the two ions differs between isomeric forms.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-34',
    type: 'mcq',
    question: 'Ionization isomerism in coordination compounds arises when a ligand and a counter ion exchange places, resulting in different ions being produced when the compound is dissolved in:',
    options: [
      'Solution (water)',
      'The solid state exclusively, with no relevance to solution behaviour',
      'A completely non-polar organic solvent exclusively',
      'A vacuum, with no solvent present at all'
    ],
    correctIndex: 0,
    explanation: 'Ionization isomers, formed by exchanging a ligand with a counter ion, produce different ionic species when dissolved in solution (such as water).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-35',
    type: 'mcq',
    question: 'Solvate (hydrate) isomerism in coordination compounds arises when isomers differ in the number of solvent (or water) molecules present as:',
    options: [
      'Counter ions, exclusively, with no relation to ligand coordination',
      'Ligands directly coordinated within the coordination sphere, versus as free solvent molecules outside it',
      'Central metal atoms, exclusively',
      'Any form; solvate isomerism has no relation to the position of solvent molecules'
    ],
    correctIndex: 1,
    explanation: 'Solvate (hydrate) isomers differ in whether solvent (or water) molecules are directly coordinated within the coordination sphere as ligands, or exist instead as free molecules of hydration/solvation outside the coordination sphere.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-36',
    type: 'mcq',
    question: 'The compounds [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br, which produce different ions upon dissolution in water, are a classic example of:',
    options: [
      'Linkage isomerism',
      'Coordination isomerism',
      'Ionization isomerism',
      'Optical isomerism'
    ],
    correctIndex: 2,
    explanation: 'These two compounds, differing in whether Br- or SO4^2- occupies the coordination sphere (with the other acting as the counter ion), exemplify ionization isomerism.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-37',
    type: 'mcq',
    question: 'The compounds [Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6], which differ in the distribution of ligands between the cationic and anionic complex ions, exemplify:',
    options: [
      'Linkage isomerism',
      'Ionization isomerism',
      'Coordination isomerism',
      'Geometrical isomerism'
    ],
    correctIndex: 2,
    explanation: 'These two compounds, in which the ammine and cyano ligands are distributed differently between the cobalt and chromium centres, exemplify coordination isomerism.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-38',
    type: 'mcq',
    question: 'The complex ions [Co(NH3)5(NO2)]2+ and [Co(NH3)5(ONO)]2+, differing in whether the ambidentate NO2- ligand binds through nitrogen or oxygen, exemplify:',
    options: [
      'Coordination isomerism',
      'Linkage isomerism',
      'Ionization isomerism',
      'Geometrical isomerism'
    ],
    correctIndex: 1,
    explanation: 'These two complexes exemplify linkage isomerism, differing in whether the ambidentate ligand NO2- coordinates to the metal through its nitrogen atom or its oxygen atom.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-39',
    type: 'mcq',
    question: 'Geometrical (cis-trans) isomerism in coordination compounds arises due to differences in the spatial arrangement of ligands, and is commonly observed in complexes with which coordination geometries?',
    options: [
      'Square planar and octahedral geometries',
      'Linear geometry exclusively',
      'Tetrahedral geometry exclusively',
      'No specific geometry; geometrical isomerism can occur in any random arrangement'
    ],
    correctIndex: 0,
    explanation: 'Geometrical (cis-trans) isomerism is commonly observed in square planar and octahedral coordination complexes, arising from the different possible spatial arrangements of ligands.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-40',
    type: 'mcq',
    question: 'In a square planar complex of the type MA2B2, the \'cis\' isomer is defined by the arrangement in which the two identical \'A\' ligands are positioned:',
    options: [
      'Directly opposite each other',
      'Randomly scattered, with no fixed relationship to each other',
      'Both attached to a completely different metal atom entirely',
      'Adjacent to each other'
    ],
    correctIndex: 3,
    explanation: 'In the cis isomer of a square planar MA2B2 complex, the two identical A ligands occupy adjacent positions relative to each other.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-41',
    type: 'mcq',
    question: 'In a square planar complex of the type MA2B2, the \'trans\' isomer is defined by the arrangement in which the two identical \'A\' ligands are positioned:',
    options: [
      'Directly opposite each other',
      'Adjacent to each other',
      'Randomly scattered, with no fixed relationship to each other',
      'Both attached to a completely different metal atom entirely'
    ],
    correctIndex: 0,
    explanation: 'In the trans isomer of a square planar MA2B2 complex, the two identical A ligands occupy positions directly opposite each other.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-42',
    type: 'mcq',
    question: 'Optical isomerism, involving non-superimposable mirror-image forms, is particularly common in octahedral coordination compounds that contain:',
    options: [
      'Only simple unidentate ligands, exclusively',
      'No ligands at all',
      'Only ambidentate ligands, exclusively',
      'Bidentate (chelating) ligands'
    ],
    correctIndex: 3,
    explanation: 'Optical isomerism is particularly well documented in octahedral complexes containing bidentate (chelating) ligands, such as ethylenediamine.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-43',
    type: 'mcq',
    question: 'The octahedral complex [Co(en)3]3+, containing three bidentate ethylenediamine ligands, is a classic example of a coordination compound that exhibits:',
    options: [
      'Only geometrical isomerism, with no optical isomerism possible',
      'Optical isomerism',
      'Only linkage isomerism, with no optical isomerism possible',
      'No isomerism of any kind'
    ],
    correctIndex: 1,
    explanation: '[Co(en)3]3+ is a classic textbook example of an octahedral complex exhibiting optical isomerism, existing as a pair of non-superimposable mirror-image forms.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-44',
    type: 'mcq',
    question: 'Compared to octahedral complexes, square planar coordination compounds generally show optical isomerism:',
    options: [
      'Extremely commonly, more often than octahedral complexes',
      'Exclusively, being the only geometry capable of showing this phenomenon',
      'Rarely, since the molecule usually possesses a plane of symmetry',
      'In exactly the same proportion as octahedral complexes, with no meaningful difference'
    ],
    correctIndex: 2,
    explanation: 'Square planar complexes rarely show optical isomerism because they generally possess an internal plane of symmetry, making the mirror-image forms superimposable (identical), unlike many octahedral complexes.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-45',
    type: 'mcq',
    question: 'According to Valence Bond Theory (VBT), the geometry of a coordination compound is determined by the specific type of orbital:',
    options: [
      'Present exclusively in the ligands, with no involvement of the metal atom',
      'Hybridisation adopted by the central metal atom/ion',
      'Present only in the counter ions',
      'Randomly assigned, with no relationship to actual bonding'
    ],
    correctIndex: 1,
    explanation: 'Valence Bond Theory explains the geometry of a coordination compound based on the specific hybridisation of orbitals adopted by the central metal atom/ion to bond with the ligands.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-46',
    type: 'mcq',
    question: 'According to VBT, a tetrahedral coordination geometry is typically associated with which type of orbital hybridisation at the central metal atom?',
    options: [
      'dsp²',
      'd²sp³',
      'sp³',
      'sp³d²'
    ],
    correctIndex: 2,
    explanation: 'Tetrahedral geometry, in VBT, is typically associated with sp³ hybridisation of the central metal atom\'s orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-47',
    type: 'mcq',
    question: 'According to VBT, a square planar coordination geometry is typically associated with which type of orbital hybridisation at the central metal atom?',
    options: [
      'dsp²',
      'sp³',
      'sp³d²',
      'd²sp³'
    ],
    correctIndex: 0,
    explanation: 'Square planar geometry, in VBT, is typically associated with dsp² hybridisation of the central metal atom\'s orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-48',
    type: 'mcq',
    question: 'According to VBT, an octahedral coordination geometry can arise from either sp³d² hybridisation or, alternatively, from:',
    options: [
      'dsp² hybridisation, exclusively',
      'sp hybridisation, exclusively',
      'sp³ hybridisation, exclusively',
      'd²sp³ hybridisation'
    ],
    correctIndex: 3,
    explanation: 'Octahedral geometry, in VBT, can arise from either sp³d² hybridisation (using outer d orbitals) or d²sp³ hybridisation (using inner d orbitals).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-49',
    type: 'mcq',
    question: 'Octahedral complexes formed using d²sp³ hybridisation (involving inner, (n-1)d orbitals) are generally referred to as:',
    options: [
      'Outer orbital complexes, typically high spin and relatively less stable',
      'Neither inner nor outer orbital complexes; this term does not apply to d²sp³ hybridisation',
      'Tetrahedral complexes, despite being octahedral',
      'Inner orbital complexes, typically low spin and relatively more stable/inert'
    ],
    correctIndex: 3,
    explanation: 'Complexes formed via d²sp³ hybridisation, using the inner (n-1)d orbitals, are termed inner orbital complexes, and these are typically low spin and comparatively more stable (inert).',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-50',
    type: 'mcq',
    question: 'A significant limitation of Valence Bond Theory (VBT) is that it fails to satisfactorily explain the:',
    options: [
      'Overall geometry (shape) of coordination compounds',
      'General concept of hybridisation itself',
      'Colour exhibited by many coordination compounds',
      'Existence of coordination compounds altogether'
    ],
    correctIndex: 2,
    explanation: 'One of the key limitations of VBT is its inability to satisfactorily explain the characteristic colours exhibited by many coordination compounds, a phenomenon better explained by Crystal Field Theory.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-51',
    type: 'mcq',
    question: 'Crystal Field Theory (CFT) treats the interaction between the central metal ion and the surrounding ligands as being fundamentally:',
    options: [
      'Electrostatic (ionic) in nature',
      'Purely covalent in nature, with no electrostatic component considered at all',
      'Entirely unrelated to any form of chemical bonding',
      'Based solely on nuclear (radioactive) interactions'
    ],
    correctIndex: 0,
    explanation: 'Crystal Field Theory treats the metal-ligand interaction as a purely electrostatic (ionic) interaction, with ligands modelled as point negative charges (or dipoles).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-52',
    type: 'mcq',
    question: 'In an isolated, gaseous metal ion (free from any ligand field), all five d-orbitals are considered to have:',
    options: [
      'Five completely different, non-degenerate energy levels',
      'The same (degenerate) energy',
      'Only two possible energy levels, with three orbitals sharing one level',
      'No defined energy at all'
    ],
    correctIndex: 1,
    explanation: 'In a free, isolated gaseous metal ion, all five d-orbitals are degenerate, possessing identical energy in the absence of any surrounding ligand field.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-53',
    type: 'mcq',
    question: 'In the presence of an octahedral ligand field, the five d-orbitals of the central metal ion split into two sets of differing energy, called the t2g set and the:',
    options: [
      'eg set',
      't2 set, identical to the tetrahedral case',
      'e set, identical to the tetrahedral case',
      'f set'
    ],
    correctIndex: 0,
    explanation: 'In an octahedral crystal field, the d-orbitals split into a lower-energy t2g set (three orbitals) and a higher-energy eg set (two orbitals).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-54',
    type: 'mcq',
    question: 'In an octahedral crystal field, the lower-energy t2g set of orbitals consists of three specific d-orbitals, namely dxy, dyz, and:',
    options: [
      'dx2-y2',
      'dxz',
      'dz2',
      'dxy again, counted twice'
    ],
    correctIndex: 1,
    explanation: 'The t2g set in an octahedral field comprises the dxy, dyz, and dxz orbitals, which are lower in energy compared to the eg set.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-55',
    type: 'mcq',
    question: 'In an octahedral crystal field, the higher-energy eg set of orbitals consists of two specific d-orbitals, namely dz2 and:',
    options: [
      'dxy',
      'dyz',
      'dxz',
      'dx2-y2'
    ],
    correctIndex: 3,
    explanation: 'The eg set in an octahedral field comprises the dz2 and dx2-y2 orbitals, which are higher in energy compared to the t2g set.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-56',
    type: 'mcq',
    question: 'The energy difference between the t2g and eg sets of d-orbitals in an octahedral complex, an important quantity in Crystal Field Theory, is denoted by the symbol:',
    options: [
      'Δt, exclusively used for tetrahedral splitting',
      'Ka, the acid ionisation constant',
      'Δo (delta-oh, the octahedral crystal field splitting energy)',
      'Ksp, the solubility product'
    ],
    correctIndex: 2,
    explanation: 'The octahedral crystal field splitting energy, representing the energy gap between the t2g and eg orbital sets, is denoted Δo.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-57',
    type: 'mcq',
    question: 'Ligands positioned toward the higher end of the spectrochemical series, described as \'strong field\' ligands, are generally associated with a comparatively:',
    options: [
      'Small value of Δo, always favouring high spin complexes exclusively',
      'Value of Δo that is completely unrelated to ligand identity',
      'Large value of Δo, often favouring low spin complexes',
      'Negative value of Δo, which is not physically meaningful'
    ],
    correctIndex: 2,
    explanation: 'Strong field ligands, positioned toward the higher end of the spectrochemical series, are associated with a large Δo value, often resulting in the formation of low spin complexes.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-58',
    type: 'mcq',
    question: 'In a low spin octahedral complex, formed with strong field ligands, electrons preferentially occupy the:',
    options: [
      'Higher-energy eg orbitals exclusively, remaining unpaired at all costs',
      'Both t2g and eg orbitals equally, always remaining unpaired',
      'Orbitals of an entirely different, unrelated metal atom',
      'Lower-energy t2g orbitals, pairing up before occupying the higher-energy eg orbitals'
    ],
    correctIndex: 3,
    explanation: 'In low spin complexes (formed with strong field ligands and a large Δo), electrons preferentially fill and pair up within the lower-energy t2g orbitals before occupying the higher-energy eg orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-59',
    type: 'mcq',
    question: 'In a tetrahedral crystal field, the pattern of d-orbital splitting is generally the reverse of that seen in an octahedral field, with a lower-energy set called \'e\' and a higher-energy set called:',
    options: [
      't2',
      't2g, identical to the octahedral case',
      'eg, identical to the octahedral case',
      'f, an entirely new set not seen in octahedral fields'
    ],
    correctIndex: 0,
    explanation: 'In a tetrahedral crystal field, the d-orbital splitting pattern is reversed compared to octahedral fields, with a lower-energy \'e\' set and a higher-energy \'t2\' set.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-60',
    type: 'mcq',
    question: 'The crystal field splitting energy in a tetrahedral complex, denoted Δt, is generally found to be:',
    options: [
      'Larger than the corresponding Δo value for the same metal and ligands',
      'Smaller than the corresponding Δo value for the same metal ion and ligands in an octahedral field',
      'Exactly equal to the corresponding Δo value, with no difference at all',
      'Completely unrelated to Δo, with no mathematical relationship whatsoever'
    ],
    correctIndex: 1,
    explanation: 'The tetrahedral crystal field splitting energy (Δt) is generally smaller than the corresponding octahedral splitting energy (Δo) for the same metal ion and ligand set, approximately Δt ≈ (4/9)Δo.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-61',
    type: 'mcq',
    question: 'Because Δt is generally smaller than the typical pairing energy required to force electrons into the same orbital, tetrahedral complexes are almost always observed to be:',
    options: [
      'Low spin, with electrons preferentially pairing up despite the small splitting energy',
      'High spin, with electrons occupying separate orbitals singly before any pairing occurs',
      'Completely diamagnetic, regardless of the metal\'s electron configuration',
      'Impossible to form under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'Since Δt is typically smaller than the electron pairing energy, tetrahedral complexes are almost always high spin, with electrons occupying separate orbitals singly (following Hund\'s rule) rather than pairing up.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-62',
    type: 'mcq',
    question: 'The spectrochemical series is an experimentally derived arrangement of common ligands, ordered according to their relative:',
    options: [
      'Field strength (their ability to cause crystal field splitting)',
      'Molecular mass, with no relation to field strength',
      'Boiling point, with no relation to field strength',
      'Colour, with no relation to field strength'
    ],
    correctIndex: 0,
    explanation: 'The spectrochemical series arranges common ligands in order of their relative field strength - their ability to cause crystal field splitting of the metal\'s d-orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-63',
    type: 'mcq',
    question: 'According to the spectrochemical series, cyanide (CN-) is generally classified as a:',
    options: [
      'Weak field ligand',
      'A ligand with no field strength at all',
      'Strong field ligand',
      'A ligand incapable of coordinating to any metal'
    ],
    correctIndex: 2,
    explanation: 'Cyanide (CN-) is positioned near the strong-field end of the spectrochemical series, known for causing significant crystal field splitting.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-64',
    type: 'mcq',
    question: 'According to the spectrochemical series, halide ions such as iodide (I-) are generally classified as relatively:',
    options: [
      'Strong field ligands, comparable to CN-',
      'Ligands with the maximum possible field strength of any known ligand',
      'Ligands incapable of forming any coordination compound',
      'Weak field ligands'
    ],
    correctIndex: 3,
    explanation: 'Halide ions, particularly iodide (I-), are positioned toward the weak-field end of the spectrochemical series, causing relatively little crystal field splitting.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-65',
    type: 'mcq',
    question: 'Crystal Field Theory successfully explains the characteristic colour of many coordination compounds as arising from:',
    options: [
      'The complete absence of any electrons in the compound',
      'Vibrations of the metal nucleus alone, with no involvement of electrons',
      'A reaction with atmospheric oxygen, unrelated to electronic structure',
      'd-d electronic transitions, in which an electron absorbs visible light energy to jump from a lower-energy to a higher-energy d-orbital set'
    ],
    correctIndex: 3,
    explanation: 'CFT explains the colour of coordination compounds as resulting from d-d transitions, in which an electron absorbs a specific wavelength of visible light to move from a lower-energy d-orbital set to a higher-energy set.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-66',
    type: 'mcq',
    question: 'The colour actually observed for a coordination compound in visible light corresponds to the light that is:',
    options: [
      'Exactly identical to the wavelength of light absorbed by the compound',
      'Complementary to (i.e., not absorbed by) the compound',
      'Entirely unrelated to any absorption or transmission of light',
      'Always exactly white, regardless of which wavelengths are absorbed'
    ],
    correctIndex: 1,
    explanation: 'The observed colour of a coordination compound corresponds to the wavelengths of light that are transmitted or reflected (i.e., complementary to those actually absorbed via d-d transitions).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-67',
    type: 'mcq',
    question: 'The complex [Ti(H2O)6]3+, having a single d-electron (d1 configuration), appears purple/violet in colour because it absorbs light primarily in which region of the visible spectrum?',
    options: [
      'The yellow-green region',
      'The violet region itself, with no other absorption',
      'The infrared region, outside the visible spectrum entirely',
      'No region at all; the compound absorbs no light whatsoever'
    ],
    correctIndex: 0,
    explanation: 'The [Ti(H2O)6]3+ complex absorbs light in the yellow-green region of the visible spectrum (promoting its single d-electron via a d-d transition), and the complementary colour observed is purple/violet.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-68',
    type: 'mcq',
    question: 'Coordination compounds in which the central metal ion has either a completely empty (d0) or completely filled (d10) set of d-orbitals are generally observed to be:',
    options: [
      'Intensely coloured, showing the most vivid colours of any complex type',
      'Radioactive, regardless of the metal involved',
      'Colourless, since no d-d transition is possible',
      'Incapable of forming any stable coordination compound'
    ],
    correctIndex: 2,
    explanation: 'Since a d-d transition requires both occupied and vacant d-orbitals within the relevant energy sets, complexes with d0 or d10 configurations cannot undergo such transitions and are typically colourless.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-69',
    type: 'mcq',
    question: 'A significant limitation of Crystal Field Theory (CFT) is that it treats the metal-ligand bond as purely electrostatic (ionic), thereby failing to adequately account for the:',
    options: [
      'Covalent character present in many metal-ligand bonds',
      'Overall geometry of the coordination compound',
      'Existence of transition metals altogether',
      'Basic concept of an electron itself'
    ],
    correctIndex: 0,
    explanation: 'A key limitation of CFT is its purely electrostatic (ionic) treatment of metal-ligand bonding, which does not account for the significant covalent character present in many actual metal-ligand bonds.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-70',
    type: 'mcq',
    question: 'CFT\'s purely ionic (point-charge) model of ligands struggles to fully explain certain experimentally observed features of the spectrochemical series, such as why certain neutral molecules (like H2O or NH3) are positioned above certain negatively charged ligands (like F- or OH-), a limitation better addressed by:',
    options: [
      'Simply ignoring the spectrochemical series altogether, since it has no theoretical basis',
      'Werner\'s original theory of primary and secondary valency, with no further modification needed',
      'More advanced theories, such as Ligand Field Theory or Molecular Orbital Theory, which incorporate covalent bonding contributions',
      'The classical (oxygen/hydrogen-based) concept of oxidation and reduction'
    ],
    correctIndex: 2,
    explanation: 'The anomalies in the spectrochemical series (such as neutral ligands outranking certain anionic ligands) are better explained by more advanced theories, such as Ligand Field Theory or Molecular Orbital Theory, which incorporate covalent bonding contributions beyond the purely ionic CFT model.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-71',
    type: 'mcq',
    question: 'The purification of nickel metal via the Mond process relies on the formation of a volatile coordination compound, specifically:',
    options: [
      'Nickel hexacyanoferrate',
      'Nickel tetracarbonyl, Ni(CO)4',
      'Nickel EDTA complex',
      'Nickel chloride hexahydrate'
    ],
    correctIndex: 1,
    explanation: 'The Mond process for purifying nickel relies on the formation of the volatile coordination compound nickel tetracarbonyl, Ni(CO)4, which can be selectively decomposed to yield pure nickel.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-72',
    type: 'mcq',
    question: 'The extraction of silver and gold from their ores commonly involves the formation of soluble coordination complexes with which ligand?',
    options: [
      'Water (H2O), exclusively',
      'Ammonia (NH3), exclusively',
      'Chloride (Cl-), exclusively',
      'Cyanide (CN-)'
    ],
    correctIndex: 3,
    explanation: 'The extraction of silver and gold typically involves the formation of soluble cyanide complexes, such as [Ag(CN)2]- and [Au(CN)2]-, which allow these metals to be selectively dissolved and later recovered.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-73',
    type: 'mcq',
    question: 'Haemoglobin, the oxygen-transport protein found in red blood cells, is a biologically important coordination compound in which the central metal atom is:',
    options: [
      'Magnesium',
      'Iron',
      'Cobalt',
      'Copper'
    ],
    correctIndex: 1,
    explanation: 'Haemoglobin is a coordination compound centred on an iron atom, which reversibly binds oxygen for transport throughout the body.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-74',
    type: 'mcq',
    question: 'Chlorophyll, the green pigment essential for photosynthesis in plants, is a biologically important coordination compound in which the central metal atom is:',
    options: [
      'Iron',
      'Cobalt',
      'Zinc',
      'Magnesium'
    ],
    correctIndex: 3,
    explanation: 'Chlorophyll is a coordination compound with magnesium as its central metal atom, essential for capturing light energy during photosynthesis.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-75',
    type: 'mcq',
    question: 'Vitamin B12, an essential biological coordination compound, contains which central metal atom?',
    options: [
      'Iron',
      'Magnesium',
      'Cobalt',
      'Zinc'
    ],
    correctIndex: 2,
    explanation: 'Vitamin B12 is a coordination compound with cobalt as its central metal atom, essential for various metabolic processes in the body.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-76',
    type: 'mcq',
    question: 'Cisplatin, a well-known platinum-based coordination compound, is medically significant for its use as a(n):',
    options: [
      'Anti-cancer (chemotherapy) drug',
      'Antibiotic, used to treat bacterial infections',
      'Common household cleaning agent',
      'Simple dietary vitamin supplement'
    ],
    correctIndex: 0,
    explanation: 'Cisplatin, a platinum coordination compound, is a widely used chemotherapy drug in the treatment of various cancers.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-77',
    type: 'mcq',
    question: 'EDTA (ethylenediaminetetraacetic acid), a hexadentate chelating ligand, is commonly used in analytical chemistry for the complexometric titration used to estimate:',
    options: [
      'The hardness of water (based on Ca2+ and Mg2+ ion concentration)',
      'The pH of a solution, exclusively',
      'The exact temperature of a solution',
      'The atmospheric pressure of a laboratory environment'
    ],
    correctIndex: 0,
    explanation: 'EDTA is widely used in complexometric titrations to estimate the hardness of water, based on its ability to form stable chelate complexes with Ca2+ and Mg2+ ions.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-78',
    type: 'mcq',
    question: 'Cyanide complexes of certain metals are also practically employed in industrial processes such as electroplating, primarily to achieve a:',
    options: [
      'Complete and permanent prevention of any metal deposition whatsoever',
      'Rapid, uncontrolled corrosion of the object being plated',
      'Conversion of the metal object into an entirely different chemical element',
      'Uniform, high-quality metal coating on the object being plated'
    ],
    correctIndex: 3,
    explanation: 'Cyanide complexes are used in electroplating processes to help achieve a smooth, uniform, and high-quality metallic coating on the object being plated.',
    difficulty: 'medium'
  },
];

=======
import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Coordination Compounds
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'coordination-compounds-1',
    type: 'mcq',
    question: 'According to Werner\'s theory of coordination compounds, a metal exhibits two types of valency, called primary valency and:',
    options: [
      'Tertiary valency',
      'Secondary valency',
      'Ionic valency, as a completely separate third category',
      'Covalent valency, as a completely separate third category'
    ],
    correctIndex: 1,
    explanation: 'Werner\'s theory proposed that metals in coordination compounds exhibit two distinct types of valency: primary valency and secondary valency.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-2',
    type: 'mcq',
    question: 'According to Werner\'s theory, the primary valency of a metal is ionizable and corresponds to the metal\'s:',
    options: [
      'Coordination number',
      'Atomic number',
      'Atomic mass',
      'Oxidation state'
    ],
    correctIndex: 3,
    explanation: 'Primary valency, being ionizable, corresponds to the oxidation state of the metal in the coordination compound.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-3',
    type: 'mcq',
    question: 'According to Werner\'s theory, the secondary valency of a metal is generally non-ionizable and corresponds to the metal\'s:',
    options: [
      'Coordination number',
      'Oxidation state',
      'Atomic radius',
      'Electronegativity'
    ],
    correctIndex: 0,
    explanation: 'Secondary valency, being non-ionizable, corresponds to the coordination number of the metal, which is fixed and directed in space.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-4',
    type: 'mcq',
    question: 'A key insight of Werner\'s theory was that secondary valencies are fixed in space (directional), and this feature is responsible for giving a coordination compound its characteristic:',
    options: [
      'Colour, exclusively, with no relation to geometry',
      'Atomic mass, exclusively',
      'Geometry (shape)',
      'Melting point, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Since secondary valencies are directional (fixed in space), they determine the specific geometric arrangement (geometry) of the ligands around the central metal atom.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-5',
    type: 'mcq',
    question: 'The central metal atom or ion, together with the ligands directly bonded to it, is collectively referred to as the:',
    options: [
      'Counter ion',
      'Chelate ring',
      'Coordination entity (coordination sphere)',
      'Spectrochemical series'
    ],
    correctIndex: 2,
    explanation: 'The coordination entity (or coordination sphere) consists of the central metal atom/ion along with the ligands directly attached to it.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-6',
    type: 'mcq',
    question: 'Ions or molecules that are directly bonded to the central metal atom or ion within a coordination entity are called:',
    options: [
      'Ligands',
      'Counter ions',
      'Chelates, exclusively',
      'Isomers'
    ],
    correctIndex: 0,
    explanation: 'Ligands are the ions or neutral molecules that are directly bonded to the central metal atom/ion in a coordination compound.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-7',
    type: 'mcq',
    question: 'The total number of ligand donor atoms directly bonded to the central metal atom or ion is called the:',
    options: [
      'Oxidation number',
      'Atomic number',
      'Chelate number',
      'Coordination number'
    ],
    correctIndex: 3,
    explanation: 'Coordination number refers to the total number of donor atoms from ligands that are directly bonded to the central metal atom/ion.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-8',
    type: 'mcq',
    question: 'In writing the formula of a coordination compound, the central atom/ion and the ligands attached to it (the coordination sphere) are typically enclosed within:',
    options: [
      'Round (curved) brackets, exclusively',
      'Square brackets',
      'Curly braces, exclusively',
      'No brackets of any kind'
    ],
    correctIndex: 1,
    explanation: 'By convention, the coordination sphere (central atom/ion and its directly bonded ligands) is enclosed within square brackets in the formula of a coordination compound.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-9',
    type: 'mcq',
    question: 'Ions present outside the coordination sphere of a coordination compound, which help balance the overall charge, are called:',
    options: [
      'Ligands',
      'Chelates',
      'Ambidentate species',
      'Counter ions'
    ],
    correctIndex: 3,
    explanation: 'Counter ions are the ions located outside the coordination sphere, present to balance the net charge of the coordination entity.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-10',
    type: 'mcq',
    question: 'A common coordination number of 6, exhibited by many metal complexes, is generally associated with which molecular geometry?',
    options: [
      'Tetrahedral',
      'Octahedral',
      'Square planar, exclusively for all coordination number 6 complexes',
      'Linear'
    ],
    correctIndex: 1,
    explanation: 'A coordination number of 6 is most commonly associated with octahedral geometry in coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-11',
    type: 'mcq',
    question: 'A common coordination number of 4, exhibited by many metal complexes, can be associated with either tetrahedral geometry or:',
    options: [
      'Square planar geometry',
      'Octahedral geometry',
      'Linear geometry',
      'Trigonal bipyramidal geometry'
    ],
    correctIndex: 0,
    explanation: 'Coordination number 4 complexes can adopt either tetrahedral or square planar geometry, depending on the specific metal and ligands involved.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-12',
    type: 'mcq',
    question: 'A coordination number of 2, though less common, is typically associated with which simple molecular geometry?',
    options: [
      'Octahedral',
      'Square planar',
      'Linear',
      'Tetrahedral'
    ],
    correctIndex: 2,
    explanation: 'Complexes with a coordination number of 2 typically adopt a simple linear geometry.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-13',
    type: 'mcq',
    question: 'In the coordination compound K4[Fe(CN)6], the ligand CN- is directly bonded to the central iron ion, while the potassium ions (K+) function as:',
    options: [
      'Ligands, directly bonded to the central iron ion',
      'Part of the coordination sphere itself',
      'Counter ions, balancing the overall negative charge of the coordination sphere',
      'The central atom of the complex'
    ],
    correctIndex: 2,
    explanation: 'In K4[Fe(CN)6], the potassium ions are counter ions located outside the coordination sphere, balancing the overall charge of the [Fe(CN)6]^4- coordination entity.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-14',
    type: 'mcq',
    question: 'A ligand that binds to the central metal atom through only a single donor atom is called a(n):',
    options: [
      'Unidentate (monodentate) ligand',
      'Didentate (bidentate) ligand',
      'Polydentate ligand',
      'Ambidentate ligand'
    ],
    correctIndex: 0,
    explanation: 'A unidentate (monodentate) ligand has only one donor atom that binds to the central metal atom, such as Cl- or NH3.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-15',
    type: 'mcq',
    question: 'A ligand that binds to the central metal atom through two donor atoms simultaneously, such as ethylenediamine (en), is called a(n):',
    options: [
      'Unidentate ligand',
      'Didentate (bidentate) ligand',
      'Ambidentate ligand exclusively',
      'Counter ion'
    ],
    correctIndex: 1,
    explanation: 'Ethylenediamine (en) is a classic example of a didentate (bidentate) ligand, binding to the metal through two donor nitrogen atoms.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-16',
    type: 'mcq',
    question: 'A ligand possessing more than two donor atoms, capable of binding to the central metal atom at multiple points, such as EDTA, is classified as a:',
    options: [
      'Unidentate ligand',
      'Simple monodentate ligand',
      'Counter ion, exclusively',
      'Polydentate ligand'
    ],
    correctIndex: 3,
    explanation: 'EDTA, having six donor atoms, is a classic example of a polydentate ligand (specifically, a hexadentate ligand).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-17',
    type: 'mcq',
    question: 'A ligand capable of coordinating to the central metal atom through two different donor atoms, though only one at a time, such as the nitrite ion (NO2-), is called a(n):',
    options: [
      'Polydentate ligand, exclusively',
      'Ambidentate ligand',
      'Chelating ligand, exclusively',
      'Counter ion'
    ],
    correctIndex: 1,
    explanation: 'Ambidentate ligands, such as NO2- (which can bind through either nitrogen or oxygen), possess two potential donor atoms, though coordination generally occurs through only one at a time.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-18',
    type: 'mcq',
    question: 'The thiocyanate ion (SCN-), a classic example of an ambidentate ligand, can bind to a metal centre through either sulphur or:',
    options: [
      'Carbon',
      'Oxygen',
      'Hydrogen',
      'Nitrogen'
    ],
    correctIndex: 3,
    explanation: 'The thiocyanate ion (SCN-) is ambidentate, capable of coordinating to a metal through either its sulphur atom or its nitrogen atom.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-19',
    type: 'mcq',
    question: 'A polydentate ligand that binds to a single metal ion through two or more donor atoms simultaneously, forming a ring-like structure, is more specifically called a:',
    options: [
      'Chelating ligand (chelate)',
      'Ambidentate ligand, exclusively',
      'Unidentate ligand, exclusively',
      'Counter ion'
    ],
    correctIndex: 0,
    explanation: 'A chelating ligand binds to a single metal ion at multiple points, forming a ring structure (a chelate), which typically increases the overall stability of the complex.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-20',
    type: 'mcq',
    question: 'The increased stability often observed in coordination compounds containing chelating ligands, compared to similar complexes with unidentate ligands, is commonly referred to as the:',
    options: [
      'Spectrochemical effect',
      'Jahn-Teller effect',
      'Chelate effect',
      'Trans effect'
    ],
    correctIndex: 2,
    explanation: 'The chelate effect describes the generally enhanced stability of complexes formed with chelating (polydentate) ligands compared to analogous complexes formed with unidentate ligands.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-21',
    type: 'mcq',
    question: 'The oxidation number of the central atom in a coordination entity is defined as the charge it would carry if all the ligands are removed along with the electron pairs that were:',
    options: [
      'Shared with the central atom',
      'Never actually shared with the central atom in the first place',
      'Present only in the counter ions, not in the ligands',
      'Located exclusively in the outermost electron shell of the ligand atoms'
    ],
    correctIndex: 0,
    explanation: 'The oxidation number of the central atom represents the hypothetical charge it would have if the ligands, along with the electron pairs shared with the central atom, were removed.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-22',
    type: 'mcq',
    question: 'In the IUPAC nomenclature of coordination compounds, the oxidation number of the central metal atom is conventionally represented using a Roman numeral placed in:',
    options: [
      'Square brackets, immediately preceding the name of the metal',
      'No specific notation at all; oxidation number is never indicated in the name',
      'Parentheses, immediately following the name of the metal',
      'Curly braces, placed at the very beginning of the entire compound\'s name'
    ],
    correctIndex: 2,
    explanation: 'The oxidation state of the central metal atom is conventionally indicated by a Roman numeral enclosed in parentheses, placed immediately after the metal\'s name in the compound\'s IUPAC name.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-23',
    type: 'mcq',
    question: 'In naming a coordination compound according to IUPAC rules, the name of the cation is generally written:',
    options: [
      'Only if the complex ion itself happens to be the cation',
      'First, followed by the name of the anion, regardless of whether the complex ion itself is the cation or anion',
      'Last, always after the name of the anion',
      'Never; only the neutral ligands are ever named'
    ],
    correctIndex: 1,
    explanation: 'As a general rule in IUPAC nomenclature, the name of the cation is written first, followed by the name of the anion, regardless of whether the coordination entity itself is the cationic or anionic species.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-24',
    type: 'mcq',
    question: 'When naming the ligands within a coordination compound, they are generally listed in:',
    options: [
      'Order of decreasing ligand size, regardless of alphabetical order',
      'Random order, with no fixed convention',
      'Order of decreasing negative charge, regardless of alphabetical order',
      'Alphabetical order'
    ],
    correctIndex: 3,
    explanation: 'IUPAC nomenclature requires that the names of different ligands within a coordination compound be listed in alphabetical order.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-25',
    type: 'mcq',
    question: 'According to IUPAC nomenclature rules, anionic ligands are generally named with a suffix ending in:',
    options: [
      '\'-ium\', identical to cation naming conventions',
      '\'-ate\', identical to complex anion naming conventions',
      '\'-yl\', as used for organic radicals',
      '\'-o\' (such as chloro, cyano, or sulphato)'
    ],
    correctIndex: 3,
    explanation: 'Anionic ligands are conventionally named with a suffix ending in \'-o\' (for example, chloro for Cl-, cyano for CN-, and sulphato for SO4^2-).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-26',
    type: 'mcq',
    question: 'Which of the following special names is used for the neutral ligand water (H2O) in the IUPAC nomenclature of coordination compounds?',
    options: [
      'Ammine',
      'Aqua',
      'Carbonyl',
      'Nitrosyl'
    ],
    correctIndex: 1,
    explanation: 'The neutral ligand water (H2O) is given the special IUPAC name \'aqua\' when named as a ligand in a coordination compound.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-27',
    type: 'mcq',
    question: 'Which of the following special names is used for the neutral ligand ammonia (NH3) in the IUPAC nomenclature of coordination compounds?',
    options: [
      'Aqua',
      'Carbonyl',
      'Ammine',
      'Nitrosyl'
    ],
    correctIndex: 2,
    explanation: 'The neutral ligand ammonia (NH3) is given the special IUPAC name \'ammine\' when named as a ligand in a coordination compound.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-28',
    type: 'mcq',
    question: 'Which of the following special names is used for the neutral ligand carbon monoxide (CO) in the IUPAC nomenclature of coordination compounds?',
    options: [
      'Carbonyl',
      'Aqua',
      'Ammine',
      'Nitrosyl'
    ],
    correctIndex: 0,
    explanation: 'The neutral ligand carbon monoxide (CO) is given the special IUPAC name \'carbonyl\' when named as a ligand in a coordination compound.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-29',
    type: 'mcq',
    question: 'If a coordination entity, as a whole, carries a net negative (anionic) charge, the name of the central metal atom is modified with a suffix ending in:',
    options: [
      '\'-ate\' (such as ferrate or cobaltate)',
      '\'-ium\', regardless of the metal involved',
      '\'-ide\', regardless of the metal involved',
      '\'-ic\', regardless of the metal involved'
    ],
    correctIndex: 0,
    explanation: 'When the overall coordination entity is anionic, the metal\'s name is given a suffix ending in \'-ate\' (for example, ferrate for iron, or cobaltate for cobalt).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-30',
    type: 'mcq',
    question: 'For a complex ligand name derived from a compound whose name already includes a multiplying prefix (such as ethylenediamine), the alternative multiplying prefixes \'bis,\' \'tris,\' or \'tetrakis\' are used instead of the standard prefixes \'di,\' \'tri,\' or \'tetra\' primarily to:',
    options: [
      'Indicate a completely different, unrelated type of chemical bond',
      'Signify that the ligand in question is always negatively charged',
      'Avoid ambiguity or confusion in the overall naming of the compound',
      'Show that the central metal atom has an oxidation state of exactly zero'
    ],
    correctIndex: 2,
    explanation: 'Prefixes like \'bis,\' \'tris,\' and \'tetrakis\' are used for complex ligand names (which may already contain simple multiplying prefixes like \'di\' or \'tri\' within their own name) to avoid ambiguity in the overall compound name.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-31',
    type: 'mcq',
    question: 'For a neutral coordination compound (having no overall charge), the naming convention for the central metal atom generally follows a pattern similar to that used for:',
    options: [
      'Anionic complexes exclusively, always ending in \'-ate\'',
      'Only elemental metals in their uncombined, free state',
      'No naming convention exists for neutral coordination compounds',
      'Cationic complexes (i.e., the standard, unmodified metal name is generally used)'
    ],
    correctIndex: 3,
    explanation: 'Neutral coordination compounds are generally named following a pattern similar to cationic complexes, using the standard (unmodified) name of the metal, without the \'-ate\' suffix used for anionic complexes.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-32',
    type: 'mcq',
    question: 'Linkage isomerism in coordination compounds arises when an ambidentate ligand attaches to the central metal atom through:',
    options: [
      'Exactly the same donor atom in every isomeric form, with no variation possible',
      'Two different possible donor atoms, in different isomeric forms of the compound',
      'A completely different metal atom in each isomeric form',
      'No donor atom at all, in either isomeric form'
    ],
    correctIndex: 1,
    explanation: 'Linkage isomerism occurs when an ambidentate ligand can attach to the central metal through either of its two potential donor atoms, giving rise to different isomeric forms of the compound.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-33',
    type: 'mcq',
    question: 'Coordination isomerism arises specifically in compounds containing both a cationic and an anionic coordination entity, when the distribution of ligands between the two complex ions:',
    options: [
      'Remains identical in every possible isomer, with no variation at all',
      'Is entirely unrelated to the concept of isomerism',
      'Can only ever occur if both complex ions are cationic',
      'Differs between isomers'
    ],
    correctIndex: 3,
    explanation: 'Coordination isomerism occurs in compounds containing both a cationic and an anionic complex ion, where the specific distribution of ligands between the two ions differs between isomeric forms.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-34',
    type: 'mcq',
    question: 'Ionization isomerism in coordination compounds arises when a ligand and a counter ion exchange places, resulting in different ions being produced when the compound is dissolved in:',
    options: [
      'Solution (water)',
      'The solid state exclusively, with no relevance to solution behaviour',
      'A completely non-polar organic solvent exclusively',
      'A vacuum, with no solvent present at all'
    ],
    correctIndex: 0,
    explanation: 'Ionization isomers, formed by exchanging a ligand with a counter ion, produce different ionic species when dissolved in solution (such as water).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-35',
    type: 'mcq',
    question: 'Solvate (hydrate) isomerism in coordination compounds arises when isomers differ in the number of solvent (or water) molecules present as:',
    options: [
      'Counter ions, exclusively, with no relation to ligand coordination',
      'Ligands directly coordinated within the coordination sphere, versus as free solvent molecules outside it',
      'Central metal atoms, exclusively',
      'Any form; solvate isomerism has no relation to the position of solvent molecules'
    ],
    correctIndex: 1,
    explanation: 'Solvate (hydrate) isomers differ in whether solvent (or water) molecules are directly coordinated within the coordination sphere as ligands, or exist instead as free molecules of hydration/solvation outside the coordination sphere.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-36',
    type: 'mcq',
    question: 'The compounds [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br, which produce different ions upon dissolution in water, are a classic example of:',
    options: [
      'Linkage isomerism',
      'Coordination isomerism',
      'Ionization isomerism',
      'Optical isomerism'
    ],
    correctIndex: 2,
    explanation: 'These two compounds, differing in whether Br- or SO4^2- occupies the coordination sphere (with the other acting as the counter ion), exemplify ionization isomerism.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-37',
    type: 'mcq',
    question: 'The compounds [Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6], which differ in the distribution of ligands between the cationic and anionic complex ions, exemplify:',
    options: [
      'Linkage isomerism',
      'Ionization isomerism',
      'Coordination isomerism',
      'Geometrical isomerism'
    ],
    correctIndex: 2,
    explanation: 'These two compounds, in which the ammine and cyano ligands are distributed differently between the cobalt and chromium centres, exemplify coordination isomerism.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-38',
    type: 'mcq',
    question: 'The complex ions [Co(NH3)5(NO2)]2+ and [Co(NH3)5(ONO)]2+, differing in whether the ambidentate NO2- ligand binds through nitrogen or oxygen, exemplify:',
    options: [
      'Coordination isomerism',
      'Linkage isomerism',
      'Ionization isomerism',
      'Geometrical isomerism'
    ],
    correctIndex: 1,
    explanation: 'These two complexes exemplify linkage isomerism, differing in whether the ambidentate ligand NO2- coordinates to the metal through its nitrogen atom or its oxygen atom.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-39',
    type: 'mcq',
    question: 'Geometrical (cis-trans) isomerism in coordination compounds arises due to differences in the spatial arrangement of ligands, and is commonly observed in complexes with which coordination geometries?',
    options: [
      'Square planar and octahedral geometries',
      'Linear geometry exclusively',
      'Tetrahedral geometry exclusively',
      'No specific geometry; geometrical isomerism can occur in any random arrangement'
    ],
    correctIndex: 0,
    explanation: 'Geometrical (cis-trans) isomerism is commonly observed in square planar and octahedral coordination complexes, arising from the different possible spatial arrangements of ligands.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-40',
    type: 'mcq',
    question: 'In a square planar complex of the type MA2B2, the \'cis\' isomer is defined by the arrangement in which the two identical \'A\' ligands are positioned:',
    options: [
      'Directly opposite each other',
      'Randomly scattered, with no fixed relationship to each other',
      'Both attached to a completely different metal atom entirely',
      'Adjacent to each other'
    ],
    correctIndex: 3,
    explanation: 'In the cis isomer of a square planar MA2B2 complex, the two identical A ligands occupy adjacent positions relative to each other.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-41',
    type: 'mcq',
    question: 'In a square planar complex of the type MA2B2, the \'trans\' isomer is defined by the arrangement in which the two identical \'A\' ligands are positioned:',
    options: [
      'Directly opposite each other',
      'Adjacent to each other',
      'Randomly scattered, with no fixed relationship to each other',
      'Both attached to a completely different metal atom entirely'
    ],
    correctIndex: 0,
    explanation: 'In the trans isomer of a square planar MA2B2 complex, the two identical A ligands occupy positions directly opposite each other.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-42',
    type: 'mcq',
    question: 'Optical isomerism, involving non-superimposable mirror-image forms, is particularly common in octahedral coordination compounds that contain:',
    options: [
      'Only simple unidentate ligands, exclusively',
      'No ligands at all',
      'Only ambidentate ligands, exclusively',
      'Bidentate (chelating) ligands'
    ],
    correctIndex: 3,
    explanation: 'Optical isomerism is particularly well documented in octahedral complexes containing bidentate (chelating) ligands, such as ethylenediamine.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-43',
    type: 'mcq',
    question: 'The octahedral complex [Co(en)3]3+, containing three bidentate ethylenediamine ligands, is a classic example of a coordination compound that exhibits:',
    options: [
      'Only geometrical isomerism, with no optical isomerism possible',
      'Optical isomerism',
      'Only linkage isomerism, with no optical isomerism possible',
      'No isomerism of any kind'
    ],
    correctIndex: 1,
    explanation: '[Co(en)3]3+ is a classic textbook example of an octahedral complex exhibiting optical isomerism, existing as a pair of non-superimposable mirror-image forms.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-44',
    type: 'mcq',
    question: 'Compared to octahedral complexes, square planar coordination compounds generally show optical isomerism:',
    options: [
      'Extremely commonly, more often than octahedral complexes',
      'Exclusively, being the only geometry capable of showing this phenomenon',
      'Rarely, since the molecule usually possesses a plane of symmetry',
      'In exactly the same proportion as octahedral complexes, with no meaningful difference'
    ],
    correctIndex: 2,
    explanation: 'Square planar complexes rarely show optical isomerism because they generally possess an internal plane of symmetry, making the mirror-image forms superimposable (identical), unlike many octahedral complexes.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-45',
    type: 'mcq',
    question: 'According to Valence Bond Theory (VBT), the geometry of a coordination compound is determined by the specific type of orbital:',
    options: [
      'Present exclusively in the ligands, with no involvement of the metal atom',
      'Hybridisation adopted by the central metal atom/ion',
      'Present only in the counter ions',
      'Randomly assigned, with no relationship to actual bonding'
    ],
    correctIndex: 1,
    explanation: 'Valence Bond Theory explains the geometry of a coordination compound based on the specific hybridisation of orbitals adopted by the central metal atom/ion to bond with the ligands.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-46',
    type: 'mcq',
    question: 'According to VBT, a tetrahedral coordination geometry is typically associated with which type of orbital hybridisation at the central metal atom?',
    options: [
      'dsp²',
      'd²sp³',
      'sp³',
      'sp³d²'
    ],
    correctIndex: 2,
    explanation: 'Tetrahedral geometry, in VBT, is typically associated with sp³ hybridisation of the central metal atom\'s orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-47',
    type: 'mcq',
    question: 'According to VBT, a square planar coordination geometry is typically associated with which type of orbital hybridisation at the central metal atom?',
    options: [
      'dsp²',
      'sp³',
      'sp³d²',
      'd²sp³'
    ],
    correctIndex: 0,
    explanation: 'Square planar geometry, in VBT, is typically associated with dsp² hybridisation of the central metal atom\'s orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-48',
    type: 'mcq',
    question: 'According to VBT, an octahedral coordination geometry can arise from either sp³d² hybridisation or, alternatively, from:',
    options: [
      'dsp² hybridisation, exclusively',
      'sp hybridisation, exclusively',
      'sp³ hybridisation, exclusively',
      'd²sp³ hybridisation'
    ],
    correctIndex: 3,
    explanation: 'Octahedral geometry, in VBT, can arise from either sp³d² hybridisation (using outer d orbitals) or d²sp³ hybridisation (using inner d orbitals).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-49',
    type: 'mcq',
    question: 'Octahedral complexes formed using d²sp³ hybridisation (involving inner, (n-1)d orbitals) are generally referred to as:',
    options: [
      'Outer orbital complexes, typically high spin and relatively less stable',
      'Neither inner nor outer orbital complexes; this term does not apply to d²sp³ hybridisation',
      'Tetrahedral complexes, despite being octahedral',
      'Inner orbital complexes, typically low spin and relatively more stable/inert'
    ],
    correctIndex: 3,
    explanation: 'Complexes formed via d²sp³ hybridisation, using the inner (n-1)d orbitals, are termed inner orbital complexes, and these are typically low spin and comparatively more stable (inert).',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-50',
    type: 'mcq',
    question: 'A significant limitation of Valence Bond Theory (VBT) is that it fails to satisfactorily explain the:',
    options: [
      'Overall geometry (shape) of coordination compounds',
      'General concept of hybridisation itself',
      'Colour exhibited by many coordination compounds',
      'Existence of coordination compounds altogether'
    ],
    correctIndex: 2,
    explanation: 'One of the key limitations of VBT is its inability to satisfactorily explain the characteristic colours exhibited by many coordination compounds, a phenomenon better explained by Crystal Field Theory.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-51',
    type: 'mcq',
    question: 'Crystal Field Theory (CFT) treats the interaction between the central metal ion and the surrounding ligands as being fundamentally:',
    options: [
      'Electrostatic (ionic) in nature',
      'Purely covalent in nature, with no electrostatic component considered at all',
      'Entirely unrelated to any form of chemical bonding',
      'Based solely on nuclear (radioactive) interactions'
    ],
    correctIndex: 0,
    explanation: 'Crystal Field Theory treats the metal-ligand interaction as a purely electrostatic (ionic) interaction, with ligands modelled as point negative charges (or dipoles).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-52',
    type: 'mcq',
    question: 'In an isolated, gaseous metal ion (free from any ligand field), all five d-orbitals are considered to have:',
    options: [
      'Five completely different, non-degenerate energy levels',
      'The same (degenerate) energy',
      'Only two possible energy levels, with three orbitals sharing one level',
      'No defined energy at all'
    ],
    correctIndex: 1,
    explanation: 'In a free, isolated gaseous metal ion, all five d-orbitals are degenerate, possessing identical energy in the absence of any surrounding ligand field.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-53',
    type: 'mcq',
    question: 'In the presence of an octahedral ligand field, the five d-orbitals of the central metal ion split into two sets of differing energy, called the t2g set and the:',
    options: [
      'eg set',
      't2 set, identical to the tetrahedral case',
      'e set, identical to the tetrahedral case',
      'f set'
    ],
    correctIndex: 0,
    explanation: 'In an octahedral crystal field, the d-orbitals split into a lower-energy t2g set (three orbitals) and a higher-energy eg set (two orbitals).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-54',
    type: 'mcq',
    question: 'In an octahedral crystal field, the lower-energy t2g set of orbitals consists of three specific d-orbitals, namely dxy, dyz, and:',
    options: [
      'dx2-y2',
      'dxz',
      'dz2',
      'dxy again, counted twice'
    ],
    correctIndex: 1,
    explanation: 'The t2g set in an octahedral field comprises the dxy, dyz, and dxz orbitals, which are lower in energy compared to the eg set.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-55',
    type: 'mcq',
    question: 'In an octahedral crystal field, the higher-energy eg set of orbitals consists of two specific d-orbitals, namely dz2 and:',
    options: [
      'dxy',
      'dyz',
      'dxz',
      'dx2-y2'
    ],
    correctIndex: 3,
    explanation: 'The eg set in an octahedral field comprises the dz2 and dx2-y2 orbitals, which are higher in energy compared to the t2g set.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-56',
    type: 'mcq',
    question: 'The energy difference between the t2g and eg sets of d-orbitals in an octahedral complex, an important quantity in Crystal Field Theory, is denoted by the symbol:',
    options: [
      'Δt, exclusively used for tetrahedral splitting',
      'Ka, the acid ionisation constant',
      'Δo (delta-oh, the octahedral crystal field splitting energy)',
      'Ksp, the solubility product'
    ],
    correctIndex: 2,
    explanation: 'The octahedral crystal field splitting energy, representing the energy gap between the t2g and eg orbital sets, is denoted Δo.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-57',
    type: 'mcq',
    question: 'Ligands positioned toward the higher end of the spectrochemical series, described as \'strong field\' ligands, are generally associated with a comparatively:',
    options: [
      'Small value of Δo, always favouring high spin complexes exclusively',
      'Value of Δo that is completely unrelated to ligand identity',
      'Large value of Δo, often favouring low spin complexes',
      'Negative value of Δo, which is not physically meaningful'
    ],
    correctIndex: 2,
    explanation: 'Strong field ligands, positioned toward the higher end of the spectrochemical series, are associated with a large Δo value, often resulting in the formation of low spin complexes.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-58',
    type: 'mcq',
    question: 'In a low spin octahedral complex, formed with strong field ligands, electrons preferentially occupy the:',
    options: [
      'Higher-energy eg orbitals exclusively, remaining unpaired at all costs',
      'Both t2g and eg orbitals equally, always remaining unpaired',
      'Orbitals of an entirely different, unrelated metal atom',
      'Lower-energy t2g orbitals, pairing up before occupying the higher-energy eg orbitals'
    ],
    correctIndex: 3,
    explanation: 'In low spin complexes (formed with strong field ligands and a large Δo), electrons preferentially fill and pair up within the lower-energy t2g orbitals before occupying the higher-energy eg orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-59',
    type: 'mcq',
    question: 'In a tetrahedral crystal field, the pattern of d-orbital splitting is generally the reverse of that seen in an octahedral field, with a lower-energy set called \'e\' and a higher-energy set called:',
    options: [
      't2',
      't2g, identical to the octahedral case',
      'eg, identical to the octahedral case',
      'f, an entirely new set not seen in octahedral fields'
    ],
    correctIndex: 0,
    explanation: 'In a tetrahedral crystal field, the d-orbital splitting pattern is reversed compared to octahedral fields, with a lower-energy \'e\' set and a higher-energy \'t2\' set.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-60',
    type: 'mcq',
    question: 'The crystal field splitting energy in a tetrahedral complex, denoted Δt, is generally found to be:',
    options: [
      'Larger than the corresponding Δo value for the same metal and ligands',
      'Smaller than the corresponding Δo value for the same metal ion and ligands in an octahedral field',
      'Exactly equal to the corresponding Δo value, with no difference at all',
      'Completely unrelated to Δo, with no mathematical relationship whatsoever'
    ],
    correctIndex: 1,
    explanation: 'The tetrahedral crystal field splitting energy (Δt) is generally smaller than the corresponding octahedral splitting energy (Δo) for the same metal ion and ligand set, approximately Δt ≈ (4/9)Δo.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-61',
    type: 'mcq',
    question: 'Because Δt is generally smaller than the typical pairing energy required to force electrons into the same orbital, tetrahedral complexes are almost always observed to be:',
    options: [
      'Low spin, with electrons preferentially pairing up despite the small splitting energy',
      'High spin, with electrons occupying separate orbitals singly before any pairing occurs',
      'Completely diamagnetic, regardless of the metal\'s electron configuration',
      'Impossible to form under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'Since Δt is typically smaller than the electron pairing energy, tetrahedral complexes are almost always high spin, with electrons occupying separate orbitals singly (following Hund\'s rule) rather than pairing up.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-62',
    type: 'mcq',
    question: 'The spectrochemical series is an experimentally derived arrangement of common ligands, ordered according to their relative:',
    options: [
      'Field strength (their ability to cause crystal field splitting)',
      'Molecular mass, with no relation to field strength',
      'Boiling point, with no relation to field strength',
      'Colour, with no relation to field strength'
    ],
    correctIndex: 0,
    explanation: 'The spectrochemical series arranges common ligands in order of their relative field strength - their ability to cause crystal field splitting of the metal\'s d-orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-63',
    type: 'mcq',
    question: 'According to the spectrochemical series, cyanide (CN-) is generally classified as a:',
    options: [
      'Weak field ligand',
      'A ligand with no field strength at all',
      'Strong field ligand',
      'A ligand incapable of coordinating to any metal'
    ],
    correctIndex: 2,
    explanation: 'Cyanide (CN-) is positioned near the strong-field end of the spectrochemical series, known for causing significant crystal field splitting.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-64',
    type: 'mcq',
    question: 'According to the spectrochemical series, halide ions such as iodide (I-) are generally classified as relatively:',
    options: [
      'Strong field ligands, comparable to CN-',
      'Ligands with the maximum possible field strength of any known ligand',
      'Ligands incapable of forming any coordination compound',
      'Weak field ligands'
    ],
    correctIndex: 3,
    explanation: 'Halide ions, particularly iodide (I-), are positioned toward the weak-field end of the spectrochemical series, causing relatively little crystal field splitting.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-65',
    type: 'mcq',
    question: 'Crystal Field Theory successfully explains the characteristic colour of many coordination compounds as arising from:',
    options: [
      'The complete absence of any electrons in the compound',
      'Vibrations of the metal nucleus alone, with no involvement of electrons',
      'A reaction with atmospheric oxygen, unrelated to electronic structure',
      'd-d electronic transitions, in which an electron absorbs visible light energy to jump from a lower-energy to a higher-energy d-orbital set'
    ],
    correctIndex: 3,
    explanation: 'CFT explains the colour of coordination compounds as resulting from d-d transitions, in which an electron absorbs a specific wavelength of visible light to move from a lower-energy d-orbital set to a higher-energy set.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-66',
    type: 'mcq',
    question: 'The colour actually observed for a coordination compound in visible light corresponds to the light that is:',
    options: [
      'Exactly identical to the wavelength of light absorbed by the compound',
      'Complementary to (i.e., not absorbed by) the compound',
      'Entirely unrelated to any absorption or transmission of light',
      'Always exactly white, regardless of which wavelengths are absorbed'
    ],
    correctIndex: 1,
    explanation: 'The observed colour of a coordination compound corresponds to the wavelengths of light that are transmitted or reflected (i.e., complementary to those actually absorbed via d-d transitions).',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-67',
    type: 'mcq',
    question: 'The complex [Ti(H2O)6]3+, having a single d-electron (d1 configuration), appears purple/violet in colour because it absorbs light primarily in which region of the visible spectrum?',
    options: [
      'The yellow-green region',
      'The violet region itself, with no other absorption',
      'The infrared region, outside the visible spectrum entirely',
      'No region at all; the compound absorbs no light whatsoever'
    ],
    correctIndex: 0,
    explanation: 'The [Ti(H2O)6]3+ complex absorbs light in the yellow-green region of the visible spectrum (promoting its single d-electron via a d-d transition), and the complementary colour observed is purple/violet.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-68',
    type: 'mcq',
    question: 'Coordination compounds in which the central metal ion has either a completely empty (d0) or completely filled (d10) set of d-orbitals are generally observed to be:',
    options: [
      'Intensely coloured, showing the most vivid colours of any complex type',
      'Radioactive, regardless of the metal involved',
      'Colourless, since no d-d transition is possible',
      'Incapable of forming any stable coordination compound'
    ],
    correctIndex: 2,
    explanation: 'Since a d-d transition requires both occupied and vacant d-orbitals within the relevant energy sets, complexes with d0 or d10 configurations cannot undergo such transitions and are typically colourless.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-69',
    type: 'mcq',
    question: 'A significant limitation of Crystal Field Theory (CFT) is that it treats the metal-ligand bond as purely electrostatic (ionic), thereby failing to adequately account for the:',
    options: [
      'Covalent character present in many metal-ligand bonds',
      'Overall geometry of the coordination compound',
      'Existence of transition metals altogether',
      'Basic concept of an electron itself'
    ],
    correctIndex: 0,
    explanation: 'A key limitation of CFT is its purely electrostatic (ionic) treatment of metal-ligand bonding, which does not account for the significant covalent character present in many actual metal-ligand bonds.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-70',
    type: 'mcq',
    question: 'CFT\'s purely ionic (point-charge) model of ligands struggles to fully explain certain experimentally observed features of the spectrochemical series, such as why certain neutral molecules (like H2O or NH3) are positioned above certain negatively charged ligands (like F- or OH-), a limitation better addressed by:',
    options: [
      'Simply ignoring the spectrochemical series altogether, since it has no theoretical basis',
      'Werner\'s original theory of primary and secondary valency, with no further modification needed',
      'More advanced theories, such as Ligand Field Theory or Molecular Orbital Theory, which incorporate covalent bonding contributions',
      'The classical (oxygen/hydrogen-based) concept of oxidation and reduction'
    ],
    correctIndex: 2,
    explanation: 'The anomalies in the spectrochemical series (such as neutral ligands outranking certain anionic ligands) are better explained by more advanced theories, such as Ligand Field Theory or Molecular Orbital Theory, which incorporate covalent bonding contributions beyond the purely ionic CFT model.',
    difficulty: 'hard'
  },
  {
    id: 'coordination-compounds-71',
    type: 'mcq',
    question: 'The purification of nickel metal via the Mond process relies on the formation of a volatile coordination compound, specifically:',
    options: [
      'Nickel hexacyanoferrate',
      'Nickel tetracarbonyl, Ni(CO)4',
      'Nickel EDTA complex',
      'Nickel chloride hexahydrate'
    ],
    correctIndex: 1,
    explanation: 'The Mond process for purifying nickel relies on the formation of the volatile coordination compound nickel tetracarbonyl, Ni(CO)4, which can be selectively decomposed to yield pure nickel.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-72',
    type: 'mcq',
    question: 'The extraction of silver and gold from their ores commonly involves the formation of soluble coordination complexes with which ligand?',
    options: [
      'Water (H2O), exclusively',
      'Ammonia (NH3), exclusively',
      'Chloride (Cl-), exclusively',
      'Cyanide (CN-)'
    ],
    correctIndex: 3,
    explanation: 'The extraction of silver and gold typically involves the formation of soluble cyanide complexes, such as [Ag(CN)2]- and [Au(CN)2]-, which allow these metals to be selectively dissolved and later recovered.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-73',
    type: 'mcq',
    question: 'Haemoglobin, the oxygen-transport protein found in red blood cells, is a biologically important coordination compound in which the central metal atom is:',
    options: [
      'Magnesium',
      'Iron',
      'Cobalt',
      'Copper'
    ],
    correctIndex: 1,
    explanation: 'Haemoglobin is a coordination compound centred on an iron atom, which reversibly binds oxygen for transport throughout the body.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-74',
    type: 'mcq',
    question: 'Chlorophyll, the green pigment essential for photosynthesis in plants, is a biologically important coordination compound in which the central metal atom is:',
    options: [
      'Iron',
      'Cobalt',
      'Zinc',
      'Magnesium'
    ],
    correctIndex: 3,
    explanation: 'Chlorophyll is a coordination compound with magnesium as its central metal atom, essential for capturing light energy during photosynthesis.',
    difficulty: 'easy'
  },
  {
    id: 'coordination-compounds-75',
    type: 'mcq',
    question: 'Vitamin B12, an essential biological coordination compound, contains which central metal atom?',
    options: [
      'Iron',
      'Magnesium',
      'Cobalt',
      'Zinc'
    ],
    correctIndex: 2,
    explanation: 'Vitamin B12 is a coordination compound with cobalt as its central metal atom, essential for various metabolic processes in the body.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-76',
    type: 'mcq',
    question: 'Cisplatin, a well-known platinum-based coordination compound, is medically significant for its use as a(n):',
    options: [
      'Anti-cancer (chemotherapy) drug',
      'Antibiotic, used to treat bacterial infections',
      'Common household cleaning agent',
      'Simple dietary vitamin supplement'
    ],
    correctIndex: 0,
    explanation: 'Cisplatin, a platinum coordination compound, is a widely used chemotherapy drug in the treatment of various cancers.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-77',
    type: 'mcq',
    question: 'EDTA (ethylenediaminetetraacetic acid), a hexadentate chelating ligand, is commonly used in analytical chemistry for the complexometric titration used to estimate:',
    options: [
      'The hardness of water (based on Ca2+ and Mg2+ ion concentration)',
      'The pH of a solution, exclusively',
      'The exact temperature of a solution',
      'The atmospheric pressure of a laboratory environment'
    ],
    correctIndex: 0,
    explanation: 'EDTA is widely used in complexometric titrations to estimate the hardness of water, based on its ability to form stable chelate complexes with Ca2+ and Mg2+ ions.',
    difficulty: 'medium'
  },
  {
    id: 'coordination-compounds-78',
    type: 'mcq',
    question: 'Cyanide complexes of certain metals are also practically employed in industrial processes such as electroplating, primarily to achieve a:',
    options: [
      'Complete and permanent prevention of any metal deposition whatsoever',
      'Rapid, uncontrolled corrosion of the object being plated',
      'Conversion of the metal object into an entirely different chemical element',
      'Uniform, high-quality metal coating on the object being plated'
    ],
    correctIndex: 3,
    explanation: 'Cyanide complexes are used in electroplating processes to help achieve a smooth, uniform, and high-quality metallic coating on the object being plated.',
    difficulty: 'medium'
  },
];

>>>>>>> d8b99135218a2c437a2ac685ebc83a7dd97c108c
export default questions;