import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Organic Chemistry - Some Basic Principles and Techniques
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'organic-chemistry-basic-principles-and-techniques-1',
    type: 'mcq',
    question: 'Carbon characteristically forms four covalent bonds in its compounds, a property referred to as its:',
    options: [
      'Catenation',
      'Tetravalence',
      'Isomerism',
      'Hybridisation exclusively, unrelated to bond number'
    ],
    correctIndex: 1,
    explanation: 'Tetravalence refers to carbon\'s characteristic ability to form four covalent bonds in its compounds.',
    difficulty: 'easy'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-2',
    type: 'mcq',
    question: 'The unique ability of carbon atoms to link with one another, forming long chains, branches, and rings, is called:',
    options: [
      'Tetravalence',
      'Resonance',
      'Hyperconjugation',
      'Catenation'
    ],
    correctIndex: 3,
    explanation: 'Catenation is the property by which carbon atoms self-link to form extended chains, branches, and rings, a property carbon exhibits to an exceptional degree compared to other elements.',
    difficulty: 'easy'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-3',
    type: 'mcq',
    question: 'Organic compounds having an open (non-cyclic) carbon chain are classified as:',
    options: [
      'Acyclic (aliphatic) compounds',
      'Cyclic compounds, exclusively',
      'Aromatic compounds, exclusively',
      'Heterocyclic compounds, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Acyclic (aliphatic) compounds are characterised by an open-chain carbon skeleton, without any ring closure.',
    difficulty: 'easy'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-4',
    type: 'mcq',
    question: 'Cyclic organic compounds are further subdivided into alicyclic compounds and:',
    options: [
      'Acyclic compounds, which are by definition open-chain, not cyclic',
      'Isomeric compounds, an unrelated classification',
      'Aromatic compounds',
      'Functional compounds, an unrelated classification'
    ],
    correctIndex: 2,
    explanation: 'Cyclic compounds are subdivided into alicyclic compounds (non-aromatic rings) and aromatic compounds (benzenoid and non-benzenoid ring systems).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-5',
    type: 'mcq',
    question: 'In IUPAC nomenclature, the specific part of a name that indicates the presence and identity of the principal characteristic (functional) group is called the:',
    options: [
      'Word root, exclusively',
      'Primary suffix, exclusively',
      'Secondary suffix',
      'Substituent prefix, exclusively'
    ],
    correctIndex: 2,
    explanation: 'The secondary suffix in IUPAC nomenclature specifically indicates the identity of the principal characteristic (functional) group present in the compound.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-6',
    type: 'mcq',
    question: 'In IUPAC nomenclature, the primary suffix (such as \'-ane,\' \'-ene,\' or \'-yne\') is used to indicate the:',
    options: [
      'Nature of carbon-carbon bonding (saturation or unsaturation) in the parent chain',
      'Total molecular mass of the compound',
      'Colour of the compound',
      'Melting point of the compound'
    ],
    correctIndex: 0,
    explanation: 'The primary suffix (\'-ane,\' \'-ene,\' or \'-yne\') indicates whether the parent carbon chain is saturated or contains double/triple bonds.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-7',
    type: 'mcq',
    question: 'When a molecule contains more than one type of functional group, IUPAC nomenclature rules require the selection of a single principal characteristic group (named as the secondary suffix) based on an established order of:',
    options: [
      'Alphabetical order exclusively, with no reference to functional group type',
      'Molecular mass, exclusively',
      'Colour, exclusively',
      'Seniority (priority)'
    ],
    correctIndex: 3,
    explanation: 'IUPAC rules establish a specific order of seniority among functional groups, used to determine which group is named as the principal characteristic group (secondary suffix) when multiple functional groups are present.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-8',
    type: 'mcq',
    question: 'According to the standard IUPAC seniority order of functional groups, carboxylic acids are generally ranked as having:',
    options: [
      'The lowest possible priority among all functional groups',
      'Higher priority (seniority) than most other common functional groups, including alcohols, amines, and ethers',
      'Exactly equal priority to all other functional groups, with no distinction made',
      'No defined priority at all within IUPAC nomenclature rules'
    ],
    correctIndex: 1,
    explanation: 'Carboxylic acids are ranked very high in the standard IUPAC seniority order, generally taking precedence over most other common functional groups such as alcohols, amines, and ethers.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-9',
    type: 'mcq',
    question: 'When assigning locants (numbers) to substituents and the principal functional group along a carbon chain, IUPAC rules generally require the numbering to be chosen so as to give the:',
    options: [
      'Highest possible set of locants overall',
      'A completely random, unsystematic set of locants',
      'Locants based solely on alphabetical order of substituents, with no numerical minimisation at all',
      'Lowest possible set of locants overall'
    ],
    correctIndex: 3,
    explanation: 'IUPAC nomenclature rules require that the numbering of the carbon chain be chosen so as to give the lowest possible set of locants overall to substituents and the principal functional group.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-10',
    type: 'mcq',
    question: 'When multiple different substituents are present on a parent chain, IUPAC nomenclature requires them to be listed in the name in:',
    options: [
      'Order of increasing size, regardless of alphabetical order',
      'Alphabetical order',
      'Random order, with no defined convention',
      'Order of decreasing locant number, regardless of alphabetical order'
    ],
    correctIndex: 1,
    explanation: 'IUPAC nomenclature rules specify that multiple substituents on a parent chain should be cited in the name in alphabetical order.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-11',
    type: 'mcq',
    question: 'Isomers that differ from each other in the arrangement of carbon atoms within the carbon skeleton (branching pattern), while possessing the same molecular formula, are said to exhibit:',
    options: [
      'Chain isomerism',
      'Position isomerism',
      'Functional isomerism',
      'Metamerism'
    ],
    correctIndex: 0,
    explanation: 'Chain isomerism occurs when isomeric compounds differ specifically in the arrangement (branching pattern) of their carbon skeleton.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-12',
    type: 'mcq',
    question: 'Isomers that have the same carbon skeleton and the same functional group, but differ in the specific position of that functional group (or of a multiple bond) along the chain, are said to exhibit:',
    options: [
      'Chain isomerism',
      'Functional isomerism',
      'Position isomerism',
      'Tautomerism'
    ],
    correctIndex: 2,
    explanation: 'Position isomerism occurs when isomers share the same carbon skeleton and functional group but differ in the specific position of that group along the chain.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-13',
    type: 'mcq',
    question: 'Isomers that possess the same molecular formula but belong to entirely different classes of compounds, each containing a different functional group, are said to exhibit:',
    options: [
      'Chain isomerism',
      'Position isomerism',
      'Functional isomerism',
      'Metamerism'
    ],
    correctIndex: 2,
    explanation: 'Functional isomerism occurs when compounds sharing the same molecular formula belong to different classes, each possessing a distinct type of functional group (for example, an alcohol and an isomeric ether).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-14',
    type: 'mcq',
    question: 'A classic example of functional isomerism is the relationship between ethanol and:',
    options: [
      'Dimethyl ether',
      'Propanol, an isomer differing only by chain length',
      'Ethanal, which is not isomeric with ethanol',
      'Ethanoic acid, which is not isomeric with ethanol'
    ],
    correctIndex: 0,
    explanation: 'Ethanol (an alcohol) and dimethyl ether (an ether) share the molecular formula C2H6O but belong to entirely different functional classes, exemplifying functional isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-15',
    type: 'mcq',
    question: 'Isomers that possess the same functional group but differ in the specific distribution of alkyl (or other) groups on either side of that functional group are said to exhibit:',
    options: [
      'Chain isomerism',
      'Metamerism',
      'Functional isomerism',
      'Geometrical isomerism'
    ],
    correctIndex: 1,
    explanation: 'Metamerism occurs among compounds of the same functional class (such as ethers or amines) that differ specifically in the distribution of alkyl groups on either side of the shared functional group.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-16',
    type: 'mcq',
    question: 'The dynamic, rapid interconversion between two structural isomers that differ in the position of a hydrogen atom and a double bond (typically involving a shift between a carbonyl and an enol form) is called:',
    options: [
      'Metamerism',
      'Chain isomerism',
      'Optical isomerism',
      'Tautomerism'
    ],
    correctIndex: 3,
    explanation: 'Tautomerism describes the rapid, dynamic interconversion between two structural isomers (tautomers) that differ in the position of a hydrogen atom and an adjacent double bond, such as the classic keto-enol equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-17',
    type: 'mcq',
    question: 'The classic example of tautomerism, involving the dynamic equilibrium between a ketone (or aldehyde) form and its corresponding enol form, is called:',
    options: [
      'Chain-position tautomerism, an inaccurate/non-standard term',
      'Keto-enol tautomerism',
      'Functional-metameric tautomerism, an inaccurate/non-standard term',
      'Geometrical-optical tautomerism, an inaccurate/non-standard term'
    ],
    correctIndex: 1,
    explanation: 'Keto-enol tautomerism is the classic and most commonly cited example of tautomerism, involving the dynamic equilibrium between the keto (carbonyl) form and the enol (alkenol) form of a compound.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-18',
    type: 'mcq',
    question: 'Unlike ordinary structural isomers (such as chain or position isomers), which are generally distinct, separable compounds, tautomers are characteristically found to exist:',
    options: [
      'As completely separate, non-interconverting, permanently isolated compounds',
      'Only in the solid state, never in solution',
      'Only at extremely low temperatures, near absolute zero',
      'In a rapid, dynamic equilibrium with one another, often as an interconverting mixture'
    ],
    correctIndex: 3,
    explanation: 'A defining feature distinguishing tautomers from ordinary structural isomers is that tautomers exist in a rapid, dynamic equilibrium with each other, often present simultaneously as an interconverting mixture, rather than as separate, isolable compounds.',
    difficulty: 'hard'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-19',
    type: 'mcq',
    question: 'Isomers that have identical molecular and structural formulae but differ in the spatial (three-dimensional) arrangement of their atoms are classified as exhibiting:',
    options: [
      'Stereoisomerism',
      'Chain isomerism, exclusively',
      'Position isomerism, exclusively',
      'Metamerism, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Stereoisomerism refers to isomers sharing identical connectivity (structural formula) but differing specifically in the three-dimensional spatial arrangement of their atoms.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-20',
    type: 'mcq',
    question: 'Geometrical (cis-trans) isomerism, a type of stereoisomerism, generally arises due to restricted rotation around a:',
    options: [
      'Carbon-carbon single bond, which typically allows free rotation',
      'Carbon-hydrogen single bond, which typically allows free rotation',
      'Carbon-carbon double bond',
      'Carbon-carbon triple bond, which shows a different type of restriction not associated with cis-trans isomerism in the same way'
    ],
    correctIndex: 2,
    explanation: 'Geometrical (cis-trans) isomerism arises from the restricted rotation characteristic of a carbon-carbon double bond, allowing distinct spatial arrangements of substituents.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-21',
    type: 'mcq',
    question: 'Optical isomerism, another type of stereoisomerism, arises due to the presence of chirality within a molecule, typically resulting in a pair of:',
    options: [
      'Non-superimposable mirror-image isomers (enantiomers)',
      'Identical, perfectly superimposable structures, with no distinguishing feature at all',
      'Structures differing in molecular formula, rather than spatial arrangement',
      'Structures differing only in the position of a functional group along a chain'
    ],
    correctIndex: 0,
    explanation: 'Optical isomerism arises from molecular chirality, resulting in a pair of non-superimposable mirror-image isomers, known as enantiomers.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-22',
    type: 'mcq',
    question: 'The type of covalent bond cleavage in which each of the two bonding atoms retains one electron of the shared pair, producing two neutral fragments, is called:',
    options: [
      'Heterolytic fission (heterolysis)',
      'Electromeric fission, an inaccurate/non-standard term for bond cleavage',
      'Homolytic fission (homolysis)',
      'Resonance fission, an inaccurate/non-standard term for bond cleavage'
    ],
    correctIndex: 2,
    explanation: 'Homolytic fission (homolysis) is the type of bond cleavage in which each atom retains one electron of the original shared pair, producing two neutral fragments (often free radicals).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-23',
    type: 'mcq',
    question: 'The type of covalent bond cleavage in which both electrons of the shared pair go to one of the two bonding atoms, producing oppositely charged ionic fragments, is called:',
    options: [
      'Homolytic fission (homolysis)',
      'Heterolytic fission (heterolysis)',
      'Electromeric fission, an inaccurate/non-standard term for bond cleavage',
      'Resonance fission, an inaccurate/non-standard term for bond cleavage'
    ],
    correctIndex: 1,
    explanation: 'Heterolytic fission (heterolysis) is the type of bond cleavage in which both bonding electrons go to one atom, producing a pair of oppositely charged ionic fragments (typically a cation and an anion).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-24',
    type: 'mcq',
    question: 'Homolytic fission of a covalent bond is generally favoured by conditions such as the presence of heat, light, or peroxides, and typically occurs in:',
    options: [
      'Strongly polar, ionising solvents, exclusively',
      'Only in the complete absence of any solvent whatsoever',
      'Only in strongly acidic aqueous solutions',
      'Non-polar solvents'
    ],
    correctIndex: 3,
    explanation: 'Homolytic fission, typically initiated by heat, light, or peroxides, is generally favoured in non-polar solvents, which do not effectively stabilise the ionic species that would result from heterolytic cleavage.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-25',
    type: 'mcq',
    question: 'A carbocation is a reactive intermediate species characterised by a positively charged carbon atom that is:',
    options: [
      'sp3 hybridised, with a pyramidal geometry and a lone pair of electrons',
      'sp hybridised, with a completely linear geometry',
      'Not hybridised at all, with no defined geometry',
      'sp2 hybridised, with a planar geometry and an empty p orbital'
    ],
    correctIndex: 3,
    explanation: 'A carbocation features a positively charged, sp2 hybridised carbon atom, adopting a planar geometry with an empty p orbital.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-26',
    type: 'mcq',
    question: 'The relative stability of carbocations generally follows the order:',
    options: [
      'Methyl > Primary > Secondary > Tertiary',
      'Tertiary > Secondary > Primary > Methyl',
      'All carbocations show exactly identical stability, regardless of substitution',
      'Primary > Tertiary > Secondary > Methyl'
    ],
    correctIndex: 1,
    explanation: 'Carbocation stability generally increases with increasing substitution, following the order Tertiary > Secondary > Primary > Methyl, largely due to hyperconjugation and the inductive electron-donating effect of alkyl groups.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-27',
    type: 'mcq',
    question: 'The greater stability of more highly substituted carbocations (such as tertiary compared to primary) is largely attributed to the electron-donating inductive effect of surrounding alkyl groups, along with the phenomenon of:',
    options: [
      'Electromeric effect, exclusively',
      'Nucleophilic substitution, an unrelated concept',
      'Hyperconjugation',
      'Tautomerism, an unrelated concept'
    ],
    correctIndex: 2,
    explanation: 'Beyond the inductive effect of alkyl groups, hyperconjugation (delocalisation of adjacent C-H sigma electrons into the empty p orbital) also significantly contributes to the greater stability of more highly substituted carbocations.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-28',
    type: 'mcq',
    question: 'Carbocations, being electron-deficient species with an empty p orbital, characteristically function as:',
    options: [
      'Electrophiles',
      'Nucleophiles',
      'Free radicals, exclusively, with no ionic character at all',
      'Neutral, completely unreactive species'
    ],
    correctIndex: 0,
    explanation: 'Since carbocations are electron-deficient (possessing an empty p orbital), they characteristically function as electrophiles, seeking to accept electron density from a nucleophile.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-29',
    type: 'mcq',
    question: 'A carbanion is a reactive intermediate species characterised by a negatively charged carbon atom that is:',
    options: [
      'sp3 hybridised, with a pyramidal geometry and a lone pair of electrons',
      'sp2 hybridised, with a planar geometry and an empty p orbital',
      'sp hybridised, with a completely linear geometry',
      'Not hybridised at all, with no defined geometry'
    ],
    correctIndex: 0,
    explanation: 'A carbanion features a negatively charged, sp3 hybridised carbon atom, adopting a pyramidal geometry with a lone pair of electrons occupying one orbital.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-30',
    type: 'mcq',
    question: 'The relative stability of carbanions generally follows an order that is essentially the reverse of that for carbocations, namely:',
    options: [
      'Tertiary > Secondary > Primary > Methyl',
      'All carbanions show exactly identical stability, regardless of substitution',
      'Methyl > Primary > Secondary > Tertiary',
      'Secondary > Tertiary > Methyl > Primary'
    ],
    correctIndex: 2,
    explanation: 'Since alkyl groups tend to destabilise the negative charge of a carbanion (through electron donation, which is unfavourable for an already electron-rich species), carbanion stability generally follows the reverse order compared to carbocations: Methyl > Primary > Secondary > Tertiary.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-31',
    type: 'mcq',
    question: 'Carbanions, being electron-rich species bearing a lone pair of electrons, characteristically function as:',
    options: [
      'Electrophiles',
      'Free radicals, exclusively, with no ionic character at all',
      'Neutral, completely unreactive species',
      'Nucleophiles'
    ],
    correctIndex: 3,
    explanation: 'Since carbanions possess an available lone pair of electrons, they characteristically function as nucleophiles, seeking to donate electron density to an electrophilic centre.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-32',
    type: 'mcq',
    question: 'A free radical is a reactive intermediate species characterised by the presence of:',
    options: [
      'A formal positive charge, with no unpaired electron present',
      'An unpaired electron',
      'A formal negative charge, with no unpaired electron present',
      'A complete octet of paired electrons throughout, with no reactivity at all'
    ],
    correctIndex: 1,
    explanation: 'A free radical is a neutral species characterised by the presence of an unpaired electron, making it highly reactive.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-33',
    type: 'mcq',
    question: 'Free radicals are typically generated through the process of:',
    options: [
      'Heterolytic bond fission, exclusively',
      'Simple ionisation of a salt in water',
      'Resonance stabilisation alone, without any bond cleavage',
      'Homolytic bond fission'
    ],
    correctIndex: 3,
    explanation: 'Free radicals are characteristically generated through homolytic bond fission, in which each fragment retains one electron of the original shared pair.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-34',
    type: 'mcq',
    question: 'An electrophile is defined as a chemical species that is generally:',
    options: [
      'Electron-deficient, and therefore seeks to accept a pair of electrons',
      'Electron-rich, and therefore seeks to donate a pair of electrons',
      'Completely neutral in every sense, with no tendency to accept or donate electrons',
      'Always negatively charged, without exception'
    ],
    correctIndex: 0,
    explanation: 'An electrophile is an electron-deficient species that seeks to accept a pair of electrons from an electron-rich reaction partner.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-35',
    type: 'mcq',
    question: 'A nucleophile is defined as a chemical species that is generally:',
    options: [
      'Electron-deficient, and therefore seeks to accept a pair of electrons',
      'Electron-rich, and therefore seeks to donate a pair of electrons',
      'Completely neutral in every sense, with no tendency to accept or donate electrons',
      'Always positively charged, without exception'
    ],
    correctIndex: 1,
    explanation: 'A nucleophile is an electron-rich species (often bearing a lone pair or negative charge) that seeks to donate electron density to an electron-deficient reaction partner.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-36',
    type: 'mcq',
    question: 'Neutral molecules possessing an empty orbital, such as BF3 or AlCl3, are classified as electrophiles (Lewis acids) because they:',
    options: [
      'Always carry a strong positive formal charge, contradicting their neutral classification',
      'Cannot participate in any electron pair interaction whatsoever',
      'Can accept a pair of electrons from a suitable donor, despite carrying no formal charge',
      'Are exclusively classified as nucleophiles, not electrophiles'
    ],
    correctIndex: 2,
    explanation: 'Neutral species such as BF3 and AlCl3 act as electrophiles (Lewis acids) because their vacant orbital allows them to accept an electron pair from a suitable donor, despite carrying no overall formal charge.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-37',
    type: 'mcq',
    question: 'Neutral molecules possessing an available lone pair of electrons, such as ammonia (NH3) or water (H2O), are classified as nucleophiles (Lewis bases) because they:',
    options: [
      'Always carry a strong negative formal charge, contradicting their neutral classification',
      'Cannot participate in any electron pair interaction whatsoever',
      'Can donate their lone pair of electrons to a suitable electron-deficient acceptor',
      'Are exclusively classified as electrophiles, not nucleophiles'
    ],
    correctIndex: 2,
    explanation: 'Neutral species such as ammonia and water act as nucleophiles (Lewis bases) because their available lone pair of electrons can be donated to a suitable electron-deficient (electrophilic) acceptor.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-38',
    type: 'mcq',
    question: 'The inductive effect describes the permanent displacement of sigma-bonding electrons along a chain of atoms, occurring due to differences in:',
    options: [
      'Atomic mass exclusively, with no relation to electronegativity',
      'Electronegativity between the atoms involved',
      'Molecular colour exclusively, with no relation to electronegativity',
      'Melting point exclusively, with no relation to electronegativity'
    ],
    correctIndex: 1,
    explanation: 'The inductive effect arises from the permanent displacement of sigma-bonding electrons along a chain of atoms, driven by differences in electronegativity between the atoms involved.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-39',
    type: 'mcq',
    question: 'The magnitude of the inductive effect generally shows which trend as the distance from the electronegative atom or group increases along the carbon chain?',
    options: [
      'The effect decreases (weakens) with increasing distance',
      'The effect increases (strengthens) with increasing distance',
      'The effect remains exactly constant, regardless of distance',
      'The effect reverses sign completely at increasing distances'
    ],
    correctIndex: 0,
    explanation: 'The inductive effect is transmitted through the sigma-bond framework but weakens (decreases) significantly with increasing distance from the electronegative atom or group, generally becoming negligible beyond a few bonds.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-40',
    type: 'mcq',
    question: 'Groups that tend to donate electron density along a chain, relative to hydrogen, are said to exert a positive inductive effect, commonly denoted:',
    options: [
      '-I effect',
      '+M effect, which specifically refers to resonance, not induction',
      '-M effect, which specifically refers to resonance, not induction',
      '+I effect'
    ],
    correctIndex: 3,
    explanation: 'Groups (such as alkyl groups) that donate electron density relative to hydrogen along a chain are said to exert a positive inductive effect (+I effect).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-41',
    type: 'mcq',
    question: 'Groups that tend to withdraw electron density along a chain, relative to hydrogen, are said to exert a negative inductive effect, commonly denoted:',
    options: [
      '-I effect',
      '+I effect',
      '+M effect, which specifically refers to resonance, not induction',
      '-M effect, which specifically refers to resonance, not induction'
    ],
    correctIndex: 0,
    explanation: 'Groups (such as halogens, -NO2, or -CN) that withdraw electron density relative to hydrogen along a chain are said to exert a negative inductive effect (-I effect).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-42',
    type: 'mcq',
    question: 'The inductive effect exerted by substituents plays an important role in influencing the relative acidity of carboxylic acids, since electron-withdrawing (-I) groups near the carboxyl group generally tend to:',
    options: [
      'Decrease the acidity of the carboxylic acid',
      'Have no effect whatsoever on the acidity of the carboxylic acid',
      'Completely eliminate any acidic character from the carboxylic acid',
      'Increase the acidity of the carboxylic acid'
    ],
    correctIndex: 3,
    explanation: 'Electron-withdrawing (-I) substituents near the carboxyl group help stabilise the resulting carboxylate ion through the inductive effect, thereby increasing the overall acidity of the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-43',
    type: 'mcq',
    question: 'The resonance (mesomeric) effect describes the delocalisation of pi electrons (or a lone pair) throughout a conjugated system, such that the actual structure of the molecule is best represented as a:',
    options: [
      'Single, unique, definitively fixed Lewis structure, with no other contributing forms considered',
      'Resonance hybrid of multiple contributing (canonical) structures',
      'Structure entirely lacking any pi bonds or conjugation whatsoever',
      'Purely ionic structure, with complete separation of charge throughout'
    ],
    correctIndex: 1,
    explanation: 'The resonance effect describes the delocalisation of pi electrons across a conjugated system, with the true structure best represented as a resonance hybrid combining the contributions of multiple canonical (contributing) structures.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-44',
    type: 'mcq',
    question: 'According to the principles governing valid resonance (canonical) structures, the relative positions of the atomic nuclei within the molecule must remain:',
    options: [
      'Free to vary significantly between different canonical structures',
      'Completely undefined, with no fixed position required at all',
      'Exactly the same in all contributing canonical structures',
      'Relevant only for the very first canonical structure drawn, with no restriction on subsequent structures'
    ],
    correctIndex: 2,
    explanation: 'A fundamental rule governing valid resonance structures is that the positions of the atomic nuclei must remain exactly the same across all contributing canonical structures; only the arrangement of electrons may differ.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-45',
    type: 'mcq',
    question: 'Substituents capable of donating electron density into a conjugated system through resonance, such as -OH, -NH2, or a halogen attached to an aromatic ring, are said to exert a positive mesomeric (resonance) effect, denoted:',
    options: [
      '-M (or -R) effect',
      '+M (or +R) effect',
      '+I effect, which specifically refers to induction, not resonance',
      '-I effect, which specifically refers to induction, not resonance'
    ],
    correctIndex: 1,
    explanation: 'Substituents that donate electron density into a conjugated system through resonance (such as -OH, -NH2, or halogens on an aromatic ring) are said to exert a positive mesomeric effect (+M or +R effect).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-46',
    type: 'mcq',
    question: 'Substituents capable of withdrawing electron density from a conjugated system through resonance, such as -NO2, -CN, or -COOH attached to an aromatic ring, are said to exert a negative mesomeric (resonance) effect, denoted:',
    options: [
      '+M (or +R) effect',
      '+I effect, which specifically refers to induction, not resonance',
      '-M (or -R) effect',
      '-I effect, which specifically refers to induction, not resonance'
    ],
    correctIndex: 2,
    explanation: 'Substituents that withdraw electron density from a conjugated system through resonance (such as -NO2, -CN, or -COOH on an aromatic ring) are said to exert a negative mesomeric effect (-M or -R effect).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-47',
    type: 'mcq',
    question: 'According to the rules for evaluating the relative importance (contribution) of different canonical structures to the overall resonance hybrid, structures having a greater number of covalent bonds and lacking significant charge separation are generally considered to be:',
    options: [
      'More stable, and therefore contribute more significantly to the actual resonance hybrid',
      'Less stable, and therefore contribute less to the actual resonance hybrid',
      'Entirely irrelevant to the overall resonance hybrid, regardless of their bonding pattern',
      'Equally significant to all other possible canonical structures, with no meaningful distinction in contribution'
    ],
    correctIndex: 0,
    explanation: 'Canonical structures with a greater number of covalent bonds and minimal charge separation are generally more stable and thus contribute more significantly to the true resonance hybrid than less stable structures with fewer bonds or greater charge separation.',
    difficulty: 'hard'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-48',
    type: 'mcq',
    question: 'Unlike the permanent inductive and resonance effects, the electromeric effect is described as a temporary effect that occurs only in the presence of:',
    options: [
      'A permanent, unchanging electric field, unrelated to any specific reagent',
      'Extremely low temperatures, with no relation to any attacking reagent',
      'Complete darkness, with no relation to any attacking reagent',
      'An attacking reagent'
    ],
    correctIndex: 3,
    explanation: 'The electromeric effect is a temporary phenomenon, occurring only in the presence of an attacking reagent, unlike the permanent inductive and resonance effects.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-49',
    type: 'mcq',
    question: 'The electromeric effect involves the complete, instantaneous transfer of a shared pair of pi electrons from a multiple bond to one of the two atoms involved, and this transfer occurs:',
    options: [
      'Permanently, with no possibility of reversal under any circumstances',
      'Only in the complete absence of any attacking reagent whatsoever',
      'Exclusively in single (sigma) bonds, with no relevance to multiple bonds at all',
      'Only momentarily, as the attacking reagent approaches, and reverses once the reagent is removed'
    ],
    correctIndex: 3,
    explanation: 'The electromeric effect involves an instantaneous, temporary transfer of pi electrons that occurs specifically as an attacking reagent approaches the multiple bond, reversing once the reagent is no longer present.',
    difficulty: 'hard'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-50',
    type: 'mcq',
    question: 'Hyperconjugation, sometimes referred to as \'no bond resonance,\' involves the delocalisation of electrons from a carbon-hydrogen sigma bond into an adjacent:',
    options: [
      'Fully occupied, non-adjacent orbital, unrelated to the sigma bond in question',
      'Nucleus of a completely unrelated, distant atom',
      'Empty p orbital or pi-electron system',
      'Sigma bond located on the opposite end of an unrelated molecule'
    ],
    correctIndex: 2,
    explanation: 'Hyperconjugation involves the delocalisation of electrons from a C-H sigma bond into an adjacent empty p orbital (such as in a carbocation) or an adjacent pi-electron system.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-51',
    type: 'mcq',
    question: 'The stabilising effect of hyperconjugation generally increases with an increasing number of available:',
    options: [
      'Alpha-hydrogen atoms (hydrogens on the carbon adjacent to the relevant empty orbital or pi system)',
      'Oxygen atoms present anywhere in the molecule, regardless of position',
      'Halogen atoms present anywhere in the molecule, regardless of position',
      'Nitrogen atoms present anywhere in the molecule, regardless of position'
    ],
    correctIndex: 0,
    explanation: 'The extent (and stabilising effect) of hyperconjugation generally increases with the number of available alpha-hydrogen atoms capable of donating their sigma electron density into the adjacent empty orbital or pi system.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-52',
    type: 'mcq',
    question: 'Hyperconjugation plays a significant role in explaining the observed stability trend of carbocations, since more highly substituted carbocations (such as tertiary) generally have:',
    options: [
      'Fewer available alpha-hydrogens than less substituted carbocations, contradicting the observed stability trend',
      'A greater number of available alpha-hydrogens, providing more opportunities for stabilising hyperconjugation',
      'No relationship whatsoever to hyperconjugation, despite the correlation in stability trends',
      'Identical hyperconjugative stabilisation to all other carbocation types, regardless of substitution'
    ],
    correctIndex: 1,
    explanation: 'More highly substituted carbocations (such as tertiary) generally have access to a greater number of alpha-hydrogens from surrounding alkyl groups, providing more opportunities for stabilising hyperconjugative interactions, contributing to their greater overall stability.',
    difficulty: 'hard'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-53',
    type: 'mcq',
    question: 'Sublimation, a purification technique in which a solid compound is converted directly to vapour (and then back to solid) without passing through the liquid phase, is particularly useful for separating a sublimable compound from:',
    options: [
      'Non-sublimable impurities',
      'Other sublimable compounds only, with no application to non-sublimable impurities',
      'Only liquid impurities, with no application to solid impurities at all',
      'Only gaseous impurities, with no application to solid impurities at all'
    ],
    correctIndex: 0,
    explanation: 'Sublimation is particularly useful for purifying a sublimable solid compound by separating it from non-sublimable impurities, since only the sublimable component vaporises and re-solidifies.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-54',
    type: 'mcq',
    question: 'Crystallisation, a common purification technique for solid organic compounds, is based fundamentally on differences in:',
    options: [
      'Boiling point between the desired compound and its impurities, exclusively',
      'Solubility between the desired compound and its impurities in a chosen solvent',
      'Colour between the desired compound and its impurities, exclusively',
      'Density between the desired compound and its impurities, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Crystallisation exploits differences in solubility (typically as a function of temperature) between the desired compound and its impurities within a chosen solvent, allowing selective purification.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-55',
    type: 'mcq',
    question: 'Simple distillation is generally an effective purification method for separating liquids that have:',
    options: [
      'Very closely similar (nearly identical) boiling points, requiring a specialised technique instead',
      'Identical boiling points in every case, with no distinguishing separation possible at all',
      'No definable boiling point whatsoever',
      'Sufficiently different (well-separated) boiling points'
    ],
    correctIndex: 3,
    explanation: 'Simple distillation is effective for separating liquids whose boiling points differ sufficiently, allowing selective vaporisation and condensation of the more volatile component.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-56',
    type: 'mcq',
    question: 'Fractional distillation, employing a specialised fractionating column, is specifically useful for separating a mixture of liquids that have:',
    options: [
      'Very widely different boiling points, for which simple distillation would already suffice',
      'Identical melting points, unrelated to the concept of boiling point separation',
      'Very closely similar boiling points',
      'No boiling points at all, since fractional distillation is not actually a thermal technique'
    ],
    correctIndex: 2,
    explanation: 'Fractional distillation, using a fractionating column to provide repeated vaporisation-condensation cycles, is specifically valuable for separating liquids with very closely similar boiling points, which simple distillation cannot adequately resolve.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-57',
    type: 'mcq',
    question: 'Distillation under reduced pressure is a technique particularly useful for purifying liquids that tend to decompose when heated to, or near, their normal boiling point, since reducing the pressure has the effect of:',
    options: [
      'Raising the effective boiling point of the liquid significantly above its normal value',
      'Having absolutely no effect whatsoever on the liquid\'s boiling point',
      'Lowering the effective boiling point of the liquid',
      'Immediately and completely preventing the liquid from boiling under any circumstances'
    ],
    correctIndex: 2,
    explanation: 'Reducing the pressure lowers the effective boiling point of a liquid, allowing distillation to occur at a lower temperature, which is particularly useful for purifying heat-sensitive compounds that would otherwise decompose.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-58',
    type: 'mcq',
    question: 'Steam distillation is a technique particularly suitable for purifying organic compounds that are steam-volatile and immiscible (or only slightly soluble) with water, allowing them to be distilled at a temperature:',
    options: [
      'Significantly above their normal boiling point, requiring additional external heating beyond what steam alone provides',
      'Identical in every case to their normal boiling point, with no temperature advantage gained at all',
      'Only at temperatures well below 0°C, requiring cryogenic conditions',
      'Below their normal boiling point, due to the combined vapour pressure effect of the two immiscible liquids'
    ],
    correctIndex: 3,
    explanation: 'In steam distillation, the combined vapour pressures of the immiscible water and organic compound allow the mixture to boil (and hence be distilled) at a temperature below the normal boiling point of the organic compound alone.',
    difficulty: 'hard'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-59',
    type: 'mcq',
    question: 'Differential extraction, a technique used to separate an organic compound from an aqueous mixture, typically involves using an immiscible organic solvent, with the separation governed by the principle of:',
    options: [
      'Partition (distribution) of the solute between the two immiscible liquid phases',
      'Simple filtration, with no relevance to solute partitioning between liquid phases',
      'Direct evaporation of only the aqueous phase, with no organic solvent involved at all',
      'Sublimation of the desired compound directly from the aqueous solution'
    ],
    correctIndex: 0,
    explanation: 'Differential extraction relies on the principle of partition (distribution) of a solute between two immiscible liquid phases (typically water and an organic solvent), allowing selective extraction of the desired organic compound.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-60',
    type: 'mcq',
    question: 'Chromatography, a versatile separation technique, is fundamentally based on the differential distribution (or adsorption) of the components of a mixture between a stationary phase and a:',
    options: [
      'Second, entirely independent stationary phase, unrelated to the concept of a mobile phase',
      'Mobile phase',
      'Solid precipitate formed during the separation, unrelated to the concept of a mobile phase',
      'Gaseous byproduct generated during the separation, unrelated to the concept of a mobile phase'
    ],
    correctIndex: 1,
    explanation: 'Chromatographic separation techniques are fundamentally based on the differential distribution of mixture components between a stationary phase and a moving (mobile) phase.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-61',
    type: 'mcq',
    question: 'In column chromatography, the stationary phase (commonly a substance such as alumina or silica gel) is packed within a vertical column, and the mobile phase, typically a liquid solvent, is generally referred to as the:',
    options: [
      'Adsorbent, a term more accurately describing the stationary phase itself',
      'Eluent',
      'Precipitate, an unrelated term in this context',
      'Residue, an unrelated term in this context'
    ],
    correctIndex: 1,
    explanation: 'In column chromatography, the liquid solvent used as the mobile phase to carry components through the packed stationary phase column is called the eluent.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-62',
    type: 'mcq',
    question: 'In thin layer chromatography (TLC), the stationary phase is applied as a thin, uniform layer onto a supporting plate (such as glass, plastic, or aluminium), and the extent of movement of each separated component is quantified using a parameter called the:',
    options: [
      'Rf value (retardation factor)',
      'Partition coefficient, exclusively, with no reference to the specific TLC parameter',
      'Melting point, an unrelated physical property in this specific context',
      'Boiling point, an unrelated physical property in this specific context'
    ],
    correctIndex: 0,
    explanation: 'In thin layer chromatography, the relative movement of a separated component is quantified using the Rf value (retardation factor), calculated as the ratio of the distance travelled by the solute to the distance travelled by the solvent front.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-63',
    type: 'mcq',
    question: 'The Rf value in thin layer chromatography is mathematically calculated as the ratio of the distance travelled by the solute to the:',
    options: [
      'Total length of the TLC plate, regardless of the actual solvent front position',
      'Distance travelled by a completely different, unrelated reference compound',
      'Distance travelled by the solvent front',
      'Total mass of the sample applied to the plate'
    ],
    correctIndex: 2,
    explanation: 'The Rf value is calculated as the ratio of the distance moved by the solute (from the origin) to the distance moved by the solvent front (also measured from the origin).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-64',
    type: 'mcq',
    question: 'Paper chromatography, another common chromatographic technique, uses specially prepared paper as the stationary phase, with separation of components generally based primarily on:',
    options: [
      'Simple physical filtration, with no partitioning mechanism involved at all',
      'Complete chemical reaction between the solutes and the paper itself',
      'Differences in electrical charge among the solutes exclusively, unrelated to any partitioning mechanism',
      'Partition of the solutes between the paper (stationary phase) and the mobile solvent phase'
    ],
    correctIndex: 3,
    explanation: 'Paper chromatography separates components primarily based on their differential partitioning between the paper (acting as a stationary phase, often via absorbed water) and the moving solvent (mobile phase).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-65',
    type: 'mcq',
    question: 'In the qualitative detection of carbon and hydrogen in an organic compound, the compound is heated with copper(II) oxide (CuO), producing carbon dioxide (detected by turning lime water milky) and:',
    options: [
      'Nitrogen gas, exclusively, unrelated to the detection of hydrogen',
      'Sulphur dioxide, exclusively, unrelated to the detection of hydrogen',
      'Ammonia gas, exclusively, unrelated to the detection of hydrogen',
      'Water (detected by turning anhydrous copper sulphate blue)'
    ],
    correctIndex: 3,
    explanation: 'Heating an organic compound with CuO oxidises carbon to CO2 (detected via lime water) and hydrogen to water (detected by the colour change of anhydrous copper sulphate from white to blue).',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-66',
    type: 'mcq',
    question: 'Lassaigne\'s test, used for the qualitative detection of nitrogen, sulphur, and halogens in an organic compound, begins with the fusion of the compound with:',
    options: [
      'Copper(II) oxide, exclusively',
      'Sodium metal',
      'Concentrated sulphuric acid, exclusively',
      'Silver nitrate, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Lassaigne\'s test begins with the fusion of the organic compound with sodium metal, converting any organically bound nitrogen, sulphur, or halogens into water-soluble sodium salts for subsequent detection.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-67',
    type: 'mcq',
    question: 'In Lassaigne\'s test, organically bound nitrogen is converted, upon fusion with sodium, into sodium cyanide, which is subsequently detected by treatment with iron(II) sulphate followed by acidification, giving a characteristic:',
    options: [
      'Prussian blue colouration',
      'Bright yellow precipitate, unrelated to the standard nitrogen test',
      'Silver mirror, unrelated to the standard nitrogen test',
      'Deep red colouration, characteristic instead of the combined nitrogen-sulphur test'
    ],
    correctIndex: 0,
    explanation: 'The Lassaigne test for nitrogen relies on the formation of sodium cyanide, which, upon treatment with FeSO4 and subsequent acidification, produces a characteristic Prussian blue colouration, confirming the presence of nitrogen.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-68',
    type: 'mcq',
    question: 'If both nitrogen and sulphur are simultaneously present in the original organic compound, the Lassaigne fusion instead tends to produce sodium thiocyanate, and testing this with iron(III) chloride produces a characteristic:',
    options: [
      'Prussian blue colouration, identical to the standard nitrogen-only test',
      'Bright yellow precipitate, unrelated to this specific combined test',
      'Blood-red colouration',
      'Silver mirror, unrelated to this specific combined test'
    ],
    correctIndex: 2,
    explanation: 'When both nitrogen and sulphur are present, sodium thiocyanate forms instead of simple sodium cyanide, and testing with FeCl3 produces a characteristic blood-red colouration, confirming the simultaneous presence of both elements (rather than a potentially misleading negative result from the standard nitrogen-only test).',
    difficulty: 'hard'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-69',
    type: 'mcq',
    question: 'In the qualitative test for halogens, the sodium fusion extract is first treated with dilute nitric acid, followed by silver nitrate solution, with a white precipitate (soluble in ammonium hydroxide) indicating the presence of:',
    options: [
      'Chlorine',
      'Bromine',
      'Iodine',
      'Fluorine, which does not actually give a precipitate in this test'
    ],
    correctIndex: 0,
    explanation: 'A white precipitate that is soluble in ammonium hydroxide, formed upon treating the sodium fusion extract with dilute HNO3 followed by AgNO3, indicates the presence of chlorine.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-70',
    type: 'mcq',
    question: 'In the qualitative test for sulphur (using the sodium fusion extract), treatment with sodium nitroprusside solution produces a characteristic colouration used to confirm the presence of sulphur, namely a:',
    options: [
      'Bright yellow colouration',
      'Prussian blue colouration, characteristic instead of the standard nitrogen test',
      'Violet (purple) colouration',
      'Blood-red colouration, characteristic instead of the combined nitrogen-sulphur test'
    ],
    correctIndex: 2,
    explanation: 'Treating the sodium fusion extract with sodium nitroprusside solution produces a characteristic violet (purple) colouration, confirming the presence of sulphur in the original organic compound.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-71',
    type: 'mcq',
    question: 'In Liebig\'s method for the quantitative estimation of carbon and hydrogen, the organic compound is burnt in the presence of excess oxygen (and CuO), with the resulting carbon dioxide being absorbed by:',
    options: [
      'Anhydrous calcium chloride, which is instead used to absorb water',
      'Potassium hydroxide (KOH) solution',
      'Concentrated sulphuric acid, exclusively',
      'Silver nitrate solution, exclusively'
    ],
    correctIndex: 1,
    explanation: 'In Liebig\'s method, the carbon dioxide produced from combustion is selectively absorbed by potassium hydroxide (KOH) solution, allowing its mass (and hence the percentage of carbon) to be determined.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-72',
    type: 'mcq',
    question: 'In Liebig\'s method, the water produced from the combustion of the organic compound is selectively absorbed by:',
    options: [
      'Potassium hydroxide solution, which is instead used to absorb carbon dioxide',
      'Silver nitrate solution, exclusively',
      'Sodium nitroprusside solution, exclusively',
      'Anhydrous calcium chloride'
    ],
    correctIndex: 3,
    explanation: 'In Liebig\'s method, the water vapour produced from combustion is selectively absorbed by anhydrous calcium chloride, allowing its mass (and hence the percentage of hydrogen) to be determined.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-73',
    type: 'mcq',
    question: 'Dumas\' method for the quantitative estimation of nitrogen involves heating the organic compound with copper(II) oxide in an atmosphere of carbon dioxide, with the liberated nitrogen gas ultimately collected over:',
    options: [
      'Pure water, with no absorption of any accompanying gas',
      'Concentrated potassium hydroxide (KOH) solution',
      'Dilute hydrochloric acid, exclusively',
      'Mercury, exclusively'
    ],
    correctIndex: 1,
    explanation: 'In Dumas\' method, nitrogen gas is collected over concentrated KOH solution, which absorbs any accompanying carbon dioxide, allowing the pure volume of nitrogen gas to be accurately measured.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-74',
    type: 'mcq',
    question: 'Kjeldahl\'s method for the quantitative estimation of nitrogen involves heating the organic compound with concentrated sulphuric acid, converting the nitrogen into ammonium sulphate, which is subsequently treated with excess sodium hydroxide to liberate:',
    options: [
      'Pure nitrogen gas directly, bypassing any ammonia intermediate',
      'Chlorine gas, unrelated to the nitrogen estimation process',
      'Carbon dioxide gas, unrelated to the nitrogen estimation process',
      'Ammonia gas, which is then absorbed in a known volume of standard acid for titration'
    ],
    correctIndex: 3,
    explanation: 'Kjeldahl\'s method liberates ammonia gas from the ammonium sulphate intermediate (upon treatment with NaOH), and this ammonia is absorbed into a known excess of standard acid, allowing the amount of nitrogen present to be determined by back-titration.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-75',
    type: 'mcq',
    question: 'Kjeldahl\'s method for nitrogen estimation is generally NOT applicable to organic compounds in which the nitrogen atom is present within an aromatic ring system (such as pyridine) or as part of a nitro/azo group, mainly because in these cases:',
    options: [
      'Such compounds are simply too dangerous to handle under any laboratory conditions',
      'These compounds contain absolutely no nitrogen atoms whatsoever, making the method irrelevant by definition',
      'The nitrogen is not efficiently converted into ammonium sulphate under the standard reaction conditions',
      'The Kjeldahl method works perfectly well for these compounds, with no limitation at all'
    ],
    correctIndex: 2,
    explanation: 'In compounds where nitrogen is part of an aromatic ring (like pyridine) or exists as a nitro/azo group, the standard Kjeldahl digestion conditions do not efficiently convert this nitrogen into ammonium sulphate, making the method unsuitable for accurate estimation in these specific cases.',
    difficulty: 'hard'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-76',
    type: 'mcq',
    question: 'Carius method, used for the quantitative estimation of halogens (as well as sulphur and phosphorus), involves heating a known mass of the organic compound with fuming nitric acid in a sealed tube, in the presence of:',
    options: [
      'Silver nitrate (for halogen estimation)',
      'Sodium hydroxide, exclusively',
      'Copper(II) oxide, exclusively',
      'Potassium permanganate, exclusively'
    ],
    correctIndex: 0,
    explanation: 'In the Carius method for halogen estimation, the organic compound is heated with fuming nitric acid in the presence of silver nitrate within a sealed tube, converting the halogen content into a precipitate of silver halide.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-77',
    type: 'mcq',
    question: 'In the Carius method applied to the estimation of sulphur, the sulphur present in the organic compound is oxidised to sulphate, which is then precipitated (using barium chloride) as:',
    options: [
      'Barium sulphate (BaSO4)',
      'Silver sulphide, an inaccurate product for this specific method/element',
      'Sodium sulphate, which is not the typical precipitated form used for gravimetric quantification here',
      'Magnesium sulphate, an inaccurate product for this specific method'
    ],
    correctIndex: 0,
    explanation: 'In the Carius method for sulphur estimation, the sulphur is oxidised to sulphate, which is then precipitated as barium sulphate (BaSO4) using barium chloride, allowing gravimetric determination of the sulphur content.',
    difficulty: 'medium'
  },
  {
    id: 'organic-chemistry-basic-principles-and-techniques-78',
    type: 'mcq',
    question: 'The percentage of oxygen present in an organic compound is most commonly determined not by a direct experimental method, but instead by:',
    options: [
      'Direct titration with a standard oxygen-specific reagent, used universally in all cases',
      'Direct combustion analysis identical in every respect to the standard carbon/hydrogen estimation method',
      'A method entirely unrelated to any percentage-based calculation of the other elements present',
      'Subtracting the sum of the percentages of all other elements determined (such as C, H, N, S, halogens) from 100%'
    ],
    correctIndex: 3,
    explanation: 'Since a universally convenient and simple direct method for oxygen estimation is not commonly used, the percentage of oxygen in an organic compound is most often determined indirectly, by subtracting the combined percentages of all other determined elements from 100%.',
    difficulty: 'medium'
  },
];
export default questions;