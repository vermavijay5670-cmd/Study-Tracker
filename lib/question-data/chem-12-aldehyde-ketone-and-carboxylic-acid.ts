import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Aldehydes, Ketones and Carboxylic Acids
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-1',
    type: 'mcq',
    question: 'In IUPAC nomenclature, aldehydes are named by replacing the terminal \'-e\' of the parent alkane name with the suffix:',
    options: [
      '\'-ol\'',
      '\'-al\'',
      '\'-one\'',
      '\'-oic acid\''
    ],
    correctIndex: 1,
    explanation: 'IUPAC nomenclature names aldehydes using the suffix \'-al\' in place of the terminal \'-e\' of the corresponding alkane.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-2',
    type: 'mcq',
    question: 'In IUPAC nomenclature, ketones are named by replacing the terminal \'-e\' of the parent alkane name with the suffix:',
    options: [
      '\'-al\'',
      '\'-ol\'',
      '\'-yl\'',
      '\'-one\''
    ],
    correctIndex: 3,
    explanation: 'IUPAC nomenclature names ketones using the suffix \'-one\' (along with a locant indicating the carbonyl position) in place of the terminal \'-e\' of the corresponding alkane.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-3',
    type: 'mcq',
    question: 'The carbonyl carbon atom in aldehydes and ketones is characteristically:',
    options: [
      'sp2 hybridised, with a planar, trigonal geometry',
      'sp3 hybridised, with a tetrahedral geometry',
      'sp hybridised, with a linear geometry',
      'Not hybridised at all'
    ],
    correctIndex: 0,
    explanation: 'The carbonyl carbon in aldehydes and ketones is sp2 hybridised, giving it a planar, trigonal geometry with bond angles of approximately 120°.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-4',
    type: 'mcq',
    question: 'The carbon-oxygen double bond (C=O) of the carbonyl group is significantly polarised, with the carbon atom bearing a partial:',
    options: [
      'Negative charge (δ-), while oxygen bears a partial positive charge (δ+)',
      'Charge of exactly zero, since the C=O bond is considered non-polar',
      'Positive charge (δ+), while oxygen bears a partial negative charge (δ-)',
      'Full positive charge of +2, identical to an ionic bond'
    ],
    correctIndex: 2,
    explanation: 'Since oxygen is more electronegative than carbon, the C=O bond is polarised with carbon bearing a partial positive charge and oxygen bearing a partial negative charge.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-5',
    type: 'mcq',
    question: 'The partial positive charge on the carbonyl carbon makes it susceptible to attack by:',
    options: [
      'Electrophiles, exclusively',
      'Free radicals, exclusively, with no possibility of nucleophilic attack',
      'Nucleophiles',
      'Neutral, non-reactive molecules only'
    ],
    correctIndex: 2,
    explanation: 'The electron-deficient (δ+) carbonyl carbon is an electrophilic centre, making it susceptible to attack by electron-rich nucleophiles.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-6',
    type: 'mcq',
    question: 'Mild oxidation of a primary alcohol, using a selective reagent such as PCC (pyridinium chlorochromate), typically yields a(n):',
    options: [
      'Aldehyde',
      'Ketone',
      'Carboxylic acid, directly, bypassing the aldehyde stage',
      'Ether'
    ],
    correctIndex: 0,
    explanation: 'PCC is a mild, selective oxidising agent that converts primary alcohols into aldehydes without further oxidation to the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-7',
    type: 'mcq',
    question: 'Oxidation of a secondary alcohol typically yields a(n):',
    options: [
      'Aldehyde',
      'Carboxylic acid',
      'Ether',
      'Ketone'
    ],
    correctIndex: 3,
    explanation: 'Oxidation of a secondary alcohol produces a ketone, since only one hydrogen is available on the carbinol carbon for removal during oxidation.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-8',
    type: 'mcq',
    question: 'Catalytic dehydrogenation of alcohols, involving passing alcohol vapours over a heated copper catalyst, converts primary alcohols into aldehydes and secondary alcohols into ketones, while tertiary alcohols under these conditions generally undergo:',
    options: [
      'The exact same dehydrogenation process, forming a ketone',
      'Dehydration (forming an alkene), rather than dehydrogenation',
      'Complete decomposition into carbon dioxide and water',
      'No reaction whatsoever under any conditions'
    ],
    correctIndex: 1,
    explanation: 'Since tertiary alcohols lack a hydrogen atom on the carbinol carbon, they cannot undergo the dehydrogenation process; instead, they typically undergo dehydration to form an alkene under similar conditions.',
    difficulty: 'hard'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-9',
    type: 'mcq',
    question: 'The catalytic dehydrogenation method for converting alcohols into carbonyl compounds specifically requires the alcohol vapours to be passed over a heated catalyst composed of:',
    options: [
      'Platinum, exclusively for this specific reaction',
      'Palladium poisoned with barium sulphate, exclusively for this reaction',
      'Zinc amalgam, exclusively for this reaction',
      'Copper'
    ],
    correctIndex: 3,
    explanation: 'The catalytic dehydrogenation of alcohols to carbonyl compounds is typically carried out by passing the alcohol vapours over a heated copper catalyst.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-10',
    type: 'mcq',
    question: 'Rosenmund reduction, a method for preparing aldehydes from acid chlorides, involves the use of hydrogen gas in the presence of a palladium catalyst that has been specifically:',
    options: [
      'Activated with excess platinum, to accelerate over-reduction deliberately',
      'Poisoned with barium sulphate, to prevent over-reduction to the alcohol',
      'Dissolved completely in concentrated sulphuric acid',
      'Combined with pure sodium metal'
    ],
    correctIndex: 1,
    explanation: 'Rosenmund reduction uses a palladium catalyst poisoned with barium sulphate, which moderates its activity and prevents the over-reduction of the desired aldehyde product to the corresponding alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-11',
    type: 'mcq',
    question: 'The reduction of a nitrile with DIBAL-H (diisobutylaluminium hydride), followed by controlled hydrolysis, is a useful method for preparing a(n):',
    options: [
      'Aldehyde',
      'Ketone',
      'Carboxylic acid, directly, bypassing the aldehyde stage',
      'Alcohol, exclusively, with no aldehyde formed'
    ],
    correctIndex: 0,
    explanation: 'Careful reduction of a nitrile using DIBAL-H, followed by controlled hydrolysis, provides a useful method for preparing an aldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-12',
    type: 'mcq',
    question: 'The reaction of a nitrile with a Grignard reagent, followed by hydrolysis, is a useful method for preparing a(n):',
    options: [
      'Aldehyde',
      'Carboxylic acid, directly, bypassing the ketone stage',
      'Ketone',
      'Ether, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Reaction of a nitrile with a Grignard reagent, followed by hydrolysis of the resulting imine intermediate, provides a useful method for preparing a ketone.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-13',
    type: 'mcq',
    question: 'The Etard reaction, used to convert toluene (and similar methylbenzene derivatives) directly into an aromatic aldehyde, employs the specific oxidising reagent:',
    options: [
      'Potassium permanganate (KMnO4), exclusively for this specific transformation',
      'Tollens\' reagent, exclusively for this specific transformation',
      'Chromyl chloride (CrO2Cl2)',
      'Fehling\'s solution, exclusively for this specific transformation'
    ],
    correctIndex: 2,
    explanation: 'The Etard reaction employs chromyl chloride (CrO2Cl2) to selectively oxidise the methyl group of toluene-type compounds directly to the corresponding aromatic aldehyde (after hydrolysis).',
    difficulty: 'hard'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-14',
    type: 'mcq',
    question: 'Friedel-Crafts acylation, in which an aromatic ring reacts with an acid chloride (or anhydride) in the presence of AlCl3, provides a direct method for preparing:',
    options: [
      'Aromatic ketones',
      'Only aromatic aldehydes, with no ketone product formed',
      'Only aromatic carboxylic acids, with no ketone product formed',
      'Only aromatic alcohols, with no ketone product formed'
    ],
    correctIndex: 0,
    explanation: 'Friedel-Crafts acylation directly installs an acyl group onto an aromatic ring, providing a straightforward method for preparing aromatic ketones (such as acetophenone from benzene and acetyl chloride).',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-15',
    type: 'mcq',
    question: 'Ozonolysis of an alkene, followed by appropriate reductive workup, provides a method for cleaving the carbon-carbon double bond to produce:',
    options: [
      'Only carboxylic acids, with no aldehyde or ketone ever formed',
      'Aldehydes and/or ketones, depending on the substitution pattern of the original alkene',
      'Only alcohols, with no carbonyl compound ever formed',
      'Only alkanes, with complete loss of any oxygen functionality'
    ],
    correctIndex: 1,
    explanation: 'Ozonolysis of an alkene cleaves the C=C double bond, and depending on the substitution pattern of the original alkene carbons, produces a mixture of aldehydes and/or ketones (following reductive workup).',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-16',
    type: 'mcq',
    question: 'Aldehydes and ketones generally show higher boiling points than alkanes or ethers of comparable molecular mass, primarily due to:',
    options: [
      'Extensive intermolecular hydrogen bonding between carbonyl molecules themselves',
      'The complete absence of any intermolecular forces whatsoever',
      'Ionic bonding between separate carbonyl compound molecules',
      'Dipole-dipole interactions arising from the polar C=O group'
    ],
    correctIndex: 3,
    explanation: 'The polar carbonyl (C=O) group allows for dipole-dipole interactions between aldehyde/ketone molecules, giving them higher boiling points than non-polar compounds of similar mass, like alkanes.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-17',
    type: 'mcq',
    question: 'Despite the polarity of the carbonyl group, aldehydes and ketones generally show lower boiling points than comparable alcohols mainly because carbonyl compounds:',
    options: [
      'Are always significantly heavier in molecular mass than comparable alcohols',
      'Cannot form intermolecular hydrogen bonds with each other (lacking an O-H or N-H group)',
      'Contain absolutely no oxygen atoms at all',
      'Show exclusively covalent, non-polar bonding throughout the entire molecule'
    ],
    correctIndex: 1,
    explanation: 'Unlike alcohols, aldehydes and ketones lack an O-H (or N-H) group, so they cannot form intermolecular hydrogen bonds with each other, resulting in generally lower boiling points compared to alcohols of similar mass.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-18',
    type: 'mcq',
    question: 'Lower members of the aldehyde and ketone series, such as formaldehyde, acetaldehyde, and acetone, generally show good solubility in water mainly because they can form hydrogen bonds with:',
    options: [
      'Only other carbonyl compound molecules, with no interaction with water at all',
      'Only non-polar solvents, with no interaction with water at all',
      'No molecules whatsoever; they are actually completely insoluble in any solvent',
      'Water molecules'
    ],
    correctIndex: 3,
    explanation: 'Although carbonyl compounds cannot hydrogen bond with each other, they can form hydrogen bonds with water molecules (via the carbonyl oxygen), contributing to the good water solubility of smaller aldehydes and ketones.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-19',
    type: 'mcq',
    question: 'The characteristic reaction type undergone by the carbonyl group of aldehydes and ketones, involving attack of a nucleophile at the electrophilic carbonyl carbon, is called:',
    options: [
      'Nucleophilic addition',
      'Electrophilic addition',
      'Nucleophilic substitution',
      'Free-radical substitution'
    ],
    correctIndex: 0,
    explanation: 'Aldehydes and ketones characteristically undergo nucleophilic addition reactions, in which a nucleophile attacks the electrophilic carbonyl carbon.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-20',
    type: 'mcq',
    question: 'Aldehydes are generally more reactive than ketones toward nucleophilic addition reactions mainly due to:',
    options: [
      'Aldehydes having absolutely no carbonyl group at all, unlike ketones',
      'Aldehydes being significantly heavier in molecular mass than comparable ketones',
      'Less steric hindrance and less electron donation from the fewer alkyl groups attached to the carbonyl carbon in aldehydes',
      'Ketones having a much more electrophilic carbonyl carbon than aldehydes'
    ],
    correctIndex: 2,
    explanation: 'Aldehydes are generally more reactive toward nucleophilic addition than ketones because they have fewer (and often smaller) alkyl groups attached to the carbonyl carbon, resulting in less steric hindrance and less electron-donating inductive stabilisation of the electrophilic carbon.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-21',
    type: 'mcq',
    question: 'Among simple aliphatic carbonyl compounds, formaldehyde (having no alkyl substituents at all on the carbonyl carbon) is generally found to be the:',
    options: [
      'Most reactive toward nucleophilic addition',
      'Least reactive toward nucleophilic addition',
      'Exactly as reactive as any typical ketone, with no meaningful difference',
      'Completely unreactive toward any nucleophile'
    ],
    correctIndex: 0,
    explanation: 'Formaldehyde, lacking any alkyl substituents on its carbonyl carbon, is generally the most reactive of all simple carbonyl compounds toward nucleophilic addition.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-22',
    type: 'mcq',
    question: 'Aromatic aldehydes and ketones are generally found to be less reactive toward nucleophilic addition compared to their aliphatic counterparts, mainly because the aromatic ring:',
    options: [
      'Has absolutely no electronic effect whatsoever on the carbonyl group',
      'Makes the carbonyl carbon even more strongly electrophilic than in aliphatic compounds',
      'Stabilises the carbonyl group through resonance, reducing the electrophilicity of the carbonyl carbon',
      'Completely eliminates the carbonyl group\'s ability to react with any nucleophile'
    ],
    correctIndex: 2,
    explanation: 'Resonance delocalisation between the aromatic ring and the carbonyl group in aromatic aldehydes/ketones reduces the electrophilicity of the carbonyl carbon, making them generally less reactive toward nucleophilic addition than aliphatic carbonyl compounds.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-23',
    type: 'mcq',
    question: 'The presence of electron-withdrawing groups near the carbonyl carbon generally has which effect on the reactivity of an aldehyde or ketone toward nucleophilic addition?',
    options: [
      'Decreases reactivity, by reducing the electrophilicity of the carbonyl carbon',
      'Increases reactivity, by further enhancing the electrophilicity of the carbonyl carbon',
      'Has no effect whatsoever on nucleophilic addition reactivity',
      'Completely prevents any nucleophilic addition from occurring at all'
    ],
    correctIndex: 1,
    explanation: 'Electron-withdrawing groups near the carbonyl carbon further enhance its electrophilic character, generally increasing reactivity toward nucleophilic addition.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-24',
    type: 'mcq',
    question: 'The nucleophilic addition of hydrogen cyanide (HCN) to an aldehyde or ketone produces a product called a:',
    options: [
      'Hemiacetal',
      'Oxime',
      'Bisulphite addition product',
      'Cyanohydrin'
    ],
    correctIndex: 3,
    explanation: 'Addition of HCN to a carbonyl compound produces a cyanohydrin, containing both a hydroxyl group and a nitrile group on the same carbon.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-25',
    type: 'mcq',
    question: 'The nucleophilic addition of sodium bisulphite (NaHSO3) to an aldehyde or a suitable ketone produces a crystalline addition product that is particularly useful for:',
    options: [
      'Permanently and irreversibly destroying the original aldehyde or ketone',
      'Converting the aldehyde or ketone directly into a carboxylic acid',
      'Producing a stable polymer with no useful synthetic application',
      'Purification of the aldehyde or ketone, since this addition reaction is reversible'
    ],
    correctIndex: 3,
    explanation: 'The bisulphite addition product is crystalline and can be regenerated back to the original aldehyde/ketone by treatment with dilute acid or base, making this reversible reaction useful for purification purposes.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-26',
    type: 'mcq',
    question: 'The reaction of formaldehyde with a Grignard reagent, followed by hydrolysis, produces a:',
    options: [
      'Secondary alcohol',
      'Primary alcohol',
      'Tertiary alcohol',
      'Carboxylic acid'
    ],
    correctIndex: 1,
    explanation: 'Grignard reagents react with formaldehyde to produce, after hydrolysis, a primary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-27',
    type: 'mcq',
    question: 'The reaction of a ketone with a Grignard reagent, followed by hydrolysis, produces a:',
    options: [
      'Primary alcohol',
      'Secondary alcohol',
      'Tertiary alcohol',
      'Carboxylic acid'
    ],
    correctIndex: 2,
    explanation: 'Grignard reagents react with ketones to produce, after hydrolysis, a tertiary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-28',
    type: 'mcq',
    question: 'The reaction of an aldehyde (other than formaldehyde) with a Grignard reagent, followed by hydrolysis, produces a:',
    options: [
      'Secondary alcohol',
      'Primary alcohol',
      'Tertiary alcohol',
      'Carboxylic acid'
    ],
    correctIndex: 0,
    explanation: 'Grignard reagents react with aldehydes other than formaldehyde to produce, after hydrolysis, a secondary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-29',
    type: 'mcq',
    question: 'The reaction of an aldehyde with one equivalent of an alcohol, under acid catalysis, produces an intermediate compound called a:',
    options: [
      'Hemiacetal',
      'Acetal',
      'Cyanohydrin',
      'Oxime'
    ],
    correctIndex: 0,
    explanation: 'Addition of a single equivalent of alcohol to an aldehyde, under acid catalysis, produces a hemiacetal as the initial intermediate.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-30',
    type: 'mcq',
    question: 'Further reaction of a hemiacetal with a second equivalent of alcohol, under acid catalysis, produces the final product called a(n):',
    options: [
      'Hemiacetal, remaining unchanged from the intermediate stage',
      'Cyanohydrin',
      'Acetal',
      'Bisulphite addition product'
    ],
    correctIndex: 2,
    explanation: 'Reaction of the initially formed hemiacetal with a second equivalent of alcohol (with loss of water) produces the final acetal product.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-31',
    type: 'mcq',
    question: 'The reaction of an aldehyde or ketone with hydroxylamine (NH2OH) produces a characteristic derivative called a(n):',
    options: [
      'Hydrazone',
      'Semicarbazone',
      'Acetal',
      'Oxime'
    ],
    correctIndex: 3,
    explanation: 'Hydroxylamine reacts with the carbonyl group of aldehydes and ketones to form the corresponding oxime derivative.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-32',
    type: 'mcq',
    question: 'The reaction of an aldehyde or ketone with hydrazine (NH2NH2) produces a characteristic derivative called a(n):',
    options: [
      'Oxime',
      'Hydrazone',
      'Semicarbazone',
      'Cyanohydrin'
    ],
    correctIndex: 1,
    explanation: 'Hydrazine reacts with the carbonyl group of aldehydes and ketones to form the corresponding hydrazone derivative.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-33',
    type: 'mcq',
    question: 'Derivatives of aldehydes and ketones formed with reagents such as hydroxylamine, hydrazine, or semicarbazide are practically useful in organic chemistry mainly because they are typically solid compounds with:',
    options: [
      'No practical use whatsoever in the identification of carbonyl compounds',
      'Extremely low, indistinct melting points, making them useless for characterisation',
      'A complete lack of any measurable physical properties',
      'Sharp, characteristic melting points, useful for identification and characterisation of the original carbonyl compound'
    ],
    correctIndex: 3,
    explanation: 'These crystalline carbonyl derivatives (oximes, hydrazones, semicarbazones) typically have sharp, well-defined melting points, making them valuable for the identification and characterisation of the parent aldehyde or ketone.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-34',
    type: 'mcq',
    question: 'Reduction of an aldehyde using a reducing agent such as sodium borohydride (NaBH4) or lithium aluminium hydride (LiAlH4) produces a:',
    options: [
      'Primary alcohol',
      'Secondary alcohol',
      'Tertiary alcohol',
      'Carboxylic acid'
    ],
    correctIndex: 0,
    explanation: 'Reduction of an aldehyde using NaBH4 or LiAlH4 converts the carbonyl group into a primary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-35',
    type: 'mcq',
    question: 'Reduction of a ketone using a reducing agent such as sodium borohydride (NaBH4) or lithium aluminium hydride (LiAlH4) produces a:',
    options: [
      'Primary alcohol',
      'Secondary alcohol',
      'Tertiary alcohol',
      'Carboxylic acid'
    ],
    correctIndex: 1,
    explanation: 'Reduction of a ketone using NaBH4 or LiAlH4 converts the carbonyl group into a secondary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-36',
    type: 'mcq',
    question: 'Clemmensen reduction, a method for completely reducing the carbonyl group of an aldehyde or ketone to a methylene (-CH2-) group, employs zinc amalgam and:',
    options: [
      'Concentrated sodium hydroxide',
      'Ammoniacal silver nitrate',
      'Concentrated hydrochloric acid',
      'Dilute sulphuric acid, only very weakly acidic'
    ],
    correctIndex: 2,
    explanation: 'Clemmensen reduction uses zinc amalgam [Zn(Hg)] together with concentrated hydrochloric acid to completely reduce a carbonyl group to a methylene group.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-37',
    type: 'mcq',
    question: 'Wolff-Kishner reduction, an alternative method for completely reducing a carbonyl group to a methylene (-CH2-) group, employs hydrazine together with a strong base (such as KOH) under conditions that are notably:',
    options: [
      'Strongly acidic, identical to the conditions used in Clemmensen reduction',
      'Completely neutral, with no acid or base present at all',
      'Strongly basic, making it suitable for substrates that would be adversely affected by the strongly acidic conditions of Clemmensen reduction',
      'Extremely low temperature, near absolute zero'
    ],
    correctIndex: 2,
    explanation: 'Wolff-Kishner reduction proceeds under strongly basic conditions, making it a valuable alternative to Clemmensen reduction (which requires strongly acidic conditions) for substrates sensitive to acid.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-38',
    type: 'mcq',
    question: 'Both Clemmensen reduction and Wolff-Kishner reduction achieve the same overall transformation of converting a carbonyl group into a:',
    options: [
      'Hydroxyl (-OH) group, forming a simple alcohol',
      'Methylene (-CH2-) group, completely removing the oxygen functionality',
      'Carboxylic acid group, adding additional oxygen functionality',
      'Amine (-NH2) group'
    ],
    correctIndex: 1,
    explanation: 'Both Clemmensen and Wolff-Kishner reductions achieve the complete reduction of a carbonyl group to a methylene group, effectively removing the oxygen atom entirely, though they proceed under contrasting acidic/basic conditions.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-39',
    type: 'mcq',
    question: 'Aldehydes are generally very easily oxidised to the corresponding carboxylic acid, even by comparatively mild oxidising agents, whereas ketones are generally:',
    options: [
      'Resistant to oxidation under similarly mild conditions',
      'Even more easily oxidised than aldehydes under identical mild conditions',
      'Oxidised at exactly the same rate as aldehydes, with no meaningful difference',
      'Incapable of ever being oxidised under any conditions whatsoever'
    ],
    correctIndex: 0,
    explanation: 'Aldehydes are readily oxidised to carboxylic acids by mild oxidising agents, while ketones are comparatively resistant to oxidation under similar mild conditions, since oxidising a ketone would require breaking a carbon-carbon bond.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-40',
    type: 'mcq',
    question: 'Tollens\' test, used to detect the presence of an aldehyde, employs ammoniacal silver nitrate solution, and a positive result is indicated by the formation of a:',
    options: [
      'Brick-red precipitate',
      'Yellow precipitate',
      'Deep blue-black colouration',
      'Silver mirror on the inside of the test tube'
    ],
    correctIndex: 3,
    explanation: 'A positive Tollens\' test is indicated by the deposition of metallic silver as a characteristic silver mirror on the inside surface of the test tube, resulting from the reduction of Ag+ ions by the aldehyde.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-41',
    type: 'mcq',
    question: 'In Tollens\' test, the aldehyde being tested is oxidised to the corresponding carboxylate, while the silver ions (Ag+) present in the reagent are simultaneously:',
    options: [
      'Reduced to metallic silver (Ag)',
      'Oxidised to a higher silver oxidation state',
      'Completely unaffected, remaining as Ag+ throughout the reaction',
      'Converted directly into silver chloride precipitate'
    ],
    correctIndex: 0,
    explanation: 'In Tollens\' test, the aldehyde is oxidised while the silver ions in the ammoniacal silver nitrate reagent are simultaneously reduced to metallic silver, forming the characteristic silver mirror.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-42',
    type: 'mcq',
    question: 'Fehling\'s test, another test used to detect aliphatic aldehydes, employs an alkaline copper sulphate solution, and a positive result is indicated by the formation of a:',
    options: [
      'Silver mirror',
      'Yellow precipitate of iodoform',
      'Deep violet colouration',
      'Brick-red precipitate of cuprous oxide (Cu2O)'
    ],
    correctIndex: 3,
    explanation: 'A positive Fehling\'s test is indicated by the formation of a brick-red precipitate of cuprous oxide (Cu2O), resulting from the reduction of Cu2+ ions by the aliphatic aldehyde.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-43',
    type: 'mcq',
    question: 'A key distinguishing feature between aliphatic and aromatic aldehydes is that, unlike aliphatic aldehydes, aromatic aldehydes (such as benzaldehyde) generally:',
    options: [
      'Always give an even stronger positive Fehling\'s test than aliphatic aldehydes',
      'Do NOT give a positive Fehling\'s test',
      'Give an identical positive Fehling\'s test to aliphatic aldehydes, with no distinguishing difference',
      'Cannot be oxidised under any circumstances, unlike aliphatic aldehydes'
    ],
    correctIndex: 1,
    explanation: 'A notable and useful distinguishing feature is that aromatic aldehydes generally do not give a positive Fehling\'s test, unlike aliphatic aldehydes, which readily give a positive result.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-44',
    type: 'mcq',
    question: 'Both Tollens\' test and Fehling\'s test are useful in organic chemistry primarily because they allow chemists to specifically distinguish:',
    options: [
      'Alcohols from ethers, exclusively, with no relevance to carbonyl compounds',
      'Alkenes from alkanes, exclusively, with no relevance to carbonyl compounds',
      'Aldehydes from ketones',
      'Acids from bases, exclusively, in a general acid-base sense'
    ],
    correctIndex: 2,
    explanation: 'Both Tollens\' and Fehling\'s tests exploit the ease of oxidation of aldehydes (compared to the resistance of ketones), making them useful qualitative tests for distinguishing aldehydes from ketones.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-45',
    type: 'mcq',
    question: 'Ketones, being generally resistant to mild oxidising agents, can be forced to undergo oxidation only under considerably more vigorous conditions, which typically results in:',
    options: [
      'Simple, clean conversion into a single, larger carboxylic acid, with no bond cleavage at all',
      'Cleavage of carbon-carbon bonds, producing a mixture of smaller carboxylic acid fragments',
      'No reaction whatsoever occurring, even under the most vigorous possible conditions',
      'Immediate reduction back to the original alcohol'
    ],
    correctIndex: 1,
    explanation: 'Forcing the oxidation of a ketone under vigorous conditions typically results in cleavage of adjacent carbon-carbon bonds, producing a mixture of smaller carboxylic acid fragments, rather than a clean, single-product oxidation.',
    difficulty: 'hard'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-46',
    type: 'mcq',
    question: 'The haloform (iodoform) test is specifically useful for detecting compounds containing either a methyl ketone group or a specific structural motif that can be oxidised in situ to a methyl ketone, namely the:',
    options: [
      'Any simple primary alcohol group, regardless of its specific substitution pattern',
      'Any simple carboxylic acid group, regardless of its specific substitution pattern',
      'CH3-CH(OH)- group (a secondary alcohol bearing a terminal methyl group)',
      'Any simple ether linkage, regardless of its specific substitution pattern'
    ],
    correctIndex: 2,
    explanation: 'The iodoform test detects both methyl ketones directly and certain alcohols (specifically those with a CH3-CH(OH)- group) that can be oxidised in situ by the reagent to form a methyl ketone intermediate.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-47',
    type: 'mcq',
    question: 'A positive iodoform test is indicated by the formation of a characteristic yellow precipitate of:',
    options: [
      'Iodoform (CHI3, triiodomethane)',
      'Cuprous oxide (Cu2O)',
      'Metallic silver',
      'Silver iodide (AgI)'
    ],
    correctIndex: 0,
    explanation: 'A positive iodoform (haloform) test is indicated by the formation of a distinctive yellow precipitate of iodoform (CHI3).',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-48',
    type: 'mcq',
    question: 'Ethanol (a simple primary alcohol) is notable for giving a positive iodoform test, despite not itself being a methyl ketone, because the reagent used in the test can first:',
    options: [
      'Completely fail to react with ethanol under any circumstances',
      'Immediately reduce ethanol to ethane, with no oxidation occurring at all',
      'Convert ethanol directly into methanol, bypassing any oxidation step',
      'Oxidise ethanol in situ to acetaldehyde, which is then further converted to the reactive iodoform precursor'
    ],
    correctIndex: 3,
    explanation: 'Ethanol gives a positive iodoform test because the oxidising/halogenating conditions of the test can first oxidise ethanol to acetaldehyde (and further haloform-active species), ultimately yielding the characteristic iodoform precipitate.',
    difficulty: 'hard'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-49',
    type: 'mcq',
    question: 'Acetone, a simple methyl ketone, characteristically gives a positive iodoform test, since it directly possesses the required:',
    options: [
      'Carboxylic acid functional group, with no methyl ketone character at all',
      'Ether linkage, with no methyl ketone character at all',
      'Amine functional group, with no methyl ketone character at all',
      'CH3-CO- (methyl ketone) structural motif'
    ],
    correctIndex: 3,
    explanation: 'Acetone, possessing the CH3-CO- methyl ketone structural motif directly, characteristically gives a positive iodoform test.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-50',
    type: 'mcq',
    question: 'Aldol condensation is a characteristic reaction of aldehydes and ketones that possess at least one hydrogen atom on the carbon adjacent to the carbonyl group, commonly referred to as the:',
    options: [
      'Beta (β) hydrogen, exclusively, with no relevance to the alpha position',
      'Gamma (γ) hydrogen, exclusively, with no relevance to the alpha position',
      'Alpha (α) hydrogen',
      'Terminal hydrogen, located at the very end of the molecule, regardless of proximity to the carbonyl'
    ],
    correctIndex: 2,
    explanation: 'Aldol condensation requires the presence of at least one alpha-hydrogen (on the carbon directly adjacent to the carbonyl group) for the reaction to proceed.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-51',
    type: 'mcq',
    question: 'In the presence of a dilute base (such as dilute NaOH), an aldehyde bearing an alpha-hydrogen can undergo self-condensation to form a beta-hydroxy aldehyde, commonly called an:',
    options: [
      'Aldol',
      'Acetal',
      'Cyanohydrin',
      'Oxime'
    ],
    correctIndex: 0,
    explanation: 'The initial base-catalysed self-condensation product of an aldehyde with an alpha-hydrogen is a beta-hydroxy aldehyde, commonly termed an \'aldol\' (giving the overall reaction its name).',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-52',
    type: 'mcq',
    question: 'The beta-hydroxy aldehyde (aldol) initially formed in an aldol condensation can undergo further reaction upon heating, typically involving loss of a water molecule (dehydration), to yield a(n):',
    options: [
      'Saturated, fully reduced alkane, with complete loss of the carbonyl group',
      'Alpha,beta-unsaturated carbonyl compound (an enal or enone)',
      'Simple carboxylic acid, with no double bond present at all',
      'Cyanohydrin, formed by an entirely unrelated reaction pathway'
    ],
    correctIndex: 1,
    explanation: 'Heating the initially formed aldol product typically induces dehydration, yielding an alpha,beta-unsaturated carbonyl compound (an enal, if derived from an aldehyde, or an enone, if derived from a ketone).',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-53',
    type: 'mcq',
    question: 'Aldol condensation is generally not observed for carbonyl compounds that entirely lack any alpha-hydrogen atoms, since these compounds:',
    options: [
      'Cannot form the necessary enolate intermediate required to initiate the reaction',
      'Are simply too reactive to ever undergo any reaction at all',
      'React instead through an entirely unrelated substitution mechanism, achieving an identical product',
      'Undergo aldol condensation even more readily than compounds that do possess alpha-hydrogens'
    ],
    correctIndex: 0,
    explanation: 'Since aldol condensation proceeds via deprotonation of an alpha-hydrogen to form a reactive enolate intermediate, carbonyl compounds lacking any alpha-hydrogen (such as formaldehyde or benzaldehyde) cannot undergo this specific reaction pathway.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-54',
    type: 'mcq',
    question: 'The Cannizzaro reaction is a characteristic disproportionation reaction undergone by aldehydes that specifically lack any:',
    options: [
      'Carbonyl group of any kind',
      'Alpha-hydrogen atom',
      'Oxygen atom of any kind',
      'Carbon atom of any kind'
    ],
    correctIndex: 1,
    explanation: 'The Cannizzaro reaction is specific to aldehydes that lack an alpha-hydrogen (such as formaldehyde or benzaldehyde), since these cannot undergo the alternative aldol condensation pathway.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-55',
    type: 'mcq',
    question: 'In the Cannizzaro reaction, treatment of a suitable aldehyde with a concentrated (strong) base results in a self-oxidation-reduction (disproportionation), producing one molecule of alcohol and one molecule of:',
    options: [
      'An entirely unrelated ether product',
      'A cyanohydrin, formed by an entirely unrelated reaction pathway',
      'An unreacted starting aldehyde, with no transformation occurring at all',
      'The corresponding carboxylate salt'
    ],
    correctIndex: 3,
    explanation: 'In the Cannizzaro reaction, one molecule of the aldehyde is reduced to an alcohol, while a second molecule is simultaneously oxidised to the corresponding carboxylate salt, in the presence of concentrated base.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-56',
    type: 'mcq',
    question: 'Benzaldehyde, an aromatic aldehyde lacking any alpha-hydrogen, is a classic substrate for the Cannizzaro reaction, ultimately yielding a mixture of benzyl alcohol and:',
    options: [
      'Benzoic acid directly, without formation of any salt at all',
      'Toluene, an entirely unrelated hydrocarbon product',
      'Sodium benzoate (the carboxylate salt, if NaOH is the base used)',
      'Benzene, with complete loss of the original functional group'
    ],
    correctIndex: 2,
    explanation: 'Benzaldehyde, a classic Cannizzaro substrate, disproportionates in the presence of concentrated NaOH to give a mixture of benzyl alcohol and sodium benzoate.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-57',
    type: 'mcq',
    question: 'In IUPAC nomenclature, carboxylic acids are named by replacing the terminal \'-e\' of the parent alkane name with the suffix:',
    options: [
      '\'-al\'',
      '\'-one\'',
      '\'-oic acid\'',
      '\'-ol\''
    ],
    correctIndex: 2,
    explanation: 'IUPAC nomenclature names carboxylic acids using the suffix \'-oic acid\' in place of the terminal \'-e\' of the corresponding alkane.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-58',
    type: 'mcq',
    question: 'The characteristic functional group of a carboxylic acid, known as the carboxyl group (-COOH), can be described as a resonance hybrid combining features of a carbonyl group and a:',
    options: [
      'Amino group',
      'Halogen substituent',
      'Ether linkage',
      'Hydroxyl group'
    ],
    correctIndex: 3,
    explanation: 'The carboxyl group is best represented as a resonance hybrid of contributing structures involving both the carbonyl (C=O) and hydroxyl (-OH) functionalities, giving it its distinctive reactivity and acidity.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-59',
    type: 'mcq',
    question: 'Strong oxidation of a primary alcohol (or the corresponding aldehyde), using an oxidising agent such as KMnO4 or K2Cr2O7, produces a:',
    options: [
      'Carboxylic acid',
      'Ketone, exclusively',
      'Ether, exclusively',
      'Amine, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Strong oxidation of a primary alcohol or its corresponding aldehyde, using agents like KMnO4 or K2Cr2O7, converts it fully into the corresponding carboxylic acid.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-60',
    type: 'mcq',
    question: 'Oxidation of an alkylbenzene (such as toluene) using alkaline KMnO4, regardless of the length of the side chain, ultimately produces:',
    options: [
      'The original alkylbenzene, completely unreacted',
      'Benzoic acid (with the entire side chain oxidised down to a single -COOH group)',
      'A phenol, with complete loss of the side chain carbon atoms',
      'An ether, with no change to the carboxyl functionality'
    ],
    correctIndex: 1,
    explanation: 'Regardless of the length of the alkyl side chain (provided a benzylic hydrogen is present), oxidation with alkaline KMnO4 converts the entire side chain into a single -COOH group, yielding benzoic acid.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-61',
    type: 'mcq',
    question: 'Hydrolysis of a nitrile (R-C≡N), using either dilute acid or dilute base, ultimately yields the corresponding:',
    options: [
      'Aldehyde, exclusively',
      'Carboxylic acid',
      'Ketone, exclusively',
      'Amine, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Hydrolysis of a nitrile (typically via an amide intermediate) ultimately produces the corresponding carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-62',
    type: 'mcq',
    question: 'The reaction of a Grignard reagent with solid carbon dioxide (dry ice), followed by aqueous acidic workup, is a useful method for preparing a carboxylic acid containing:',
    options: [
      'One more carbon atom than the original Grignard reagent',
      'Exactly the same number of carbon atoms as the original Grignard reagent',
      'One fewer carbon atom than the original Grignard reagent',
      'No carbon atoms at all, since CO2 replaces the entire organic framework'
    ],
    correctIndex: 0,
    explanation: 'Reaction of a Grignard reagent with CO2 (dry ice), followed by hydrolysis, produces a carboxylic acid with one additional carbon atom compared to the original Grignard reagent.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-63',
    type: 'mcq',
    question: 'Carboxylic acids generally show even higher boiling points than alcohols of comparable molecular mass, mainly because carboxylic acid molecules can associate via strong intermolecular hydrogen bonding, often forming stable:',
    options: [
      'Completely random, non-specific aggregates with no defined structure',
      'Ionic lattices, identical in structure to a simple salt crystal',
      'Cyclic dimers (held together by two hydrogen bonds)',
      'Single, isolated molecules with absolutely no intermolecular interaction at all'
    ],
    correctIndex: 2,
    explanation: 'Carboxylic acids commonly form stable cyclic dimers, held together by two simultaneous intermolecular hydrogen bonds, contributing to their notably elevated boiling points.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-64',
    type: 'mcq',
    question: 'Lower carboxylic acids, containing up to about four carbon atoms, are generally found to be:',
    options: [
      'Completely insoluble in water under all circumstances',
      'Only slightly soluble in water, comparable to large hydrophobic molecules',
      'Reactive with water, undergoing immediate and complete decomposition',
      'Miscible with water in all proportions'
    ],
    correctIndex: 3,
    explanation: 'Lower carboxylic acids (up to about four carbons) are typically fully miscible with water, owing to their ability to form hydrogen bonds with water molecules.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-65',
    type: 'mcq',
    question: 'Carboxylic acids are generally significantly more acidic than both alcohols and phenols, mainly due to the greater resonance stabilisation of the resulting:',
    options: [
      'Alkoxide ion, which is even more stabilised than a carboxylate ion',
      'Carbonyl group itself, which is unrelated to the concept of resonance stabilisation of an anion',
      'Hydroxide ion, formed as an unrelated by-product',
      'Carboxylate ion, in which the negative charge is effectively delocalised equally over both oxygen atoms'
    ],
    correctIndex: 3,
    explanation: 'The carboxylate ion, formed upon deprotonation of a carboxylic acid, benefits from highly effective resonance stabilisation, with the negative charge delocalised equally over both oxygen atoms, making carboxylic acids considerably more acidic than alcohols or phenols.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-66',
    type: 'mcq',
    question: 'The presence of electron-withdrawing substituents (such as halogens) near the carboxyl group of a carboxylic acid generally has which effect on its acidity?',
    options: [
      'Decreases acidity, by destabilising the resulting carboxylate ion',
      'Increases acidity, by further stabilising the resulting carboxylate ion',
      'Has no effect whatsoever on the acidity of the carboxylic acid',
      'Converts the carboxylic acid into a base instead'
    ],
    correctIndex: 1,
    explanation: 'Electron-withdrawing substituents (like halogens) near the carboxyl group further stabilise the resulting carboxylate ion through inductive effects, thereby increasing the overall acidity of the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-67',
    type: 'mcq',
    question: 'The acid-strengthening (inductive) effect of an electron-withdrawing substituent on a carboxylic acid generally becomes weaker as the:',
    options: [
      'Distance between the substituent and the carboxyl group increases',
      'Distance between the substituent and the carboxyl group decreases',
      'Overall molecular mass of the compound decreases, regardless of substituent position',
      'Substituent becomes more electronegative, regardless of its actual distance from the carboxyl group'
    ],
    correctIndex: 0,
    explanation: 'The inductive effect of an electron-withdrawing substituent diminishes rapidly with increasing distance from the carboxyl group, so substituents closer to the -COOH group generally have a stronger acid-strengthening effect.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-68',
    type: 'mcq',
    question: 'The presence of electron-donating substituents (such as alkyl groups) near the carboxyl group of a carboxylic acid generally has which effect on its acidity?',
    options: [
      'Increases acidity, by further stabilising the resulting carboxylate ion',
      'Has no effect whatsoever on the acidity of the carboxylic acid',
      'Decreases acidity, by destabilising the resulting carboxylate ion',
      'Converts the carboxylic acid entirely into an ester'
    ],
    correctIndex: 2,
    explanation: 'Electron-donating substituents (like alkyl groups) tend to destabilise the carboxylate ion by intensifying negative charge density, thereby decreasing the overall acidity of the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-69',
    type: 'mcq',
    question: 'Treatment of a carboxylic acid with thionyl chloride (SOCl2) converts it into the corresponding:',
    options: [
      'Acid chloride (acyl chloride)',
      'Acid anhydride',
      'Ester',
      'Amide'
    ],
    correctIndex: 0,
    explanation: 'Thionyl chloride is a common reagent used to convert a carboxylic acid into the corresponding acid chloride (acyl chloride).',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-70',
    type: 'mcq',
    question: 'Heating two molecules of a carboxylic acid together, often in the presence of a dehydrating agent such as P2O5, results in loss of a water molecule and formation of a(n):',
    options: [
      'Acid chloride',
      'Ester, exclusively',
      'Acid anhydride',
      'Amide, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Dehydration of two carboxylic acid molecules, often assisted by a dehydrating agent like P2O5, produces the corresponding acid anhydride.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-71',
    type: 'mcq',
    question: 'Fischer esterification, the acid-catalysed reaction between a carboxylic acid and an alcohol, produces an ester along with a molecule of:',
    options: [
      'Carbon dioxide',
      'Water',
      'Ammonia',
      'Hydrogen gas'
    ],
    correctIndex: 1,
    explanation: 'Fischer esterification is the acid-catalysed condensation of a carboxylic acid with an alcohol, producing an ester and water.',
    difficulty: 'easy'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-72',
    type: 'mcq',
    question: 'The decarboxylation of a carboxylic acid, involving loss of carbon dioxide, can be achieved by heating its sodium salt with soda lime, ultimately producing an:',
    options: [
      'Alkane containing exactly the same number of carbon atoms as the original acid',
      'Alkene, with an additional degree of unsaturation introduced',
      'Ester, with no loss of any carbon atoms at all',
      'Alkane containing one fewer carbon atom than the original acid'
    ],
    correctIndex: 3,
    explanation: 'Decarboxylation of a carboxylic acid\'s sodium salt (using soda lime) removes the carboxyl carbon as CO2, yielding an alkane with one fewer carbon atom than the original acid.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-73',
    type: 'mcq',
    question: 'Unlike aldehydes and ketones, carboxylic acids are generally NOT effectively reduced by the mild reducing agent:',
    options: [
      'Lithium aluminium hydride (LiAlH4), which does effectively reduce carboxylic acids',
      'Sodium borohydride (NaBH4)',
      'Hydrogen gas with a Raney nickel catalyst under forcing conditions',
      'Sodium metal in liquid ammonia, under specialised conditions'
    ],
    correctIndex: 1,
    explanation: 'A notable distinction is that sodium borohydride (NaBH4), while effective for reducing aldehydes and ketones, generally does not effectively reduce carboxylic acids; the stronger reducing agent LiAlH4 is required for this transformation, converting the acid to a primary alcohol.',
    difficulty: 'hard'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-74',
    type: 'mcq',
    question: 'The Hell-Volhard-Zelinsky (HVZ) reaction involves treating a carboxylic acid (possessing an alpha-hydrogen) with chlorine or bromine in the presence of red phosphorus, resulting in halogenation specifically at the:',
    options: [
      'Carboxyl carbon itself, replacing the -OH group entirely',
      'Beta carbon, rather than the alpha carbon',
      'Terminal carbon of the chain, regardless of its distance from the carboxyl group',
      'Alpha carbon'
    ],
    correctIndex: 3,
    explanation: 'The HVZ reaction selectively introduces a halogen atom at the alpha carbon (the carbon directly adjacent to the carboxyl group) of a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-75',
    type: 'mcq',
    question: 'In carbonyl compounds where the carbonyl group is directly attached to an aromatic ring (such as benzaldehyde or acetophenone), the carbonyl substituent generally functions in further electrophilic aromatic substitution as a:',
    options: [
      'Ortho/para-directing, activating group, identical to an -OH substituent',
      'Completely non-directing group, with no influence on the ring at all',
      'Meta-directing, deactivating group',
      'A group that entirely prevents any further electrophilic substitution under any conditions'
    ],
    correctIndex: 2,
    explanation: 'Since the carbonyl group is electron-withdrawing, it acts as a meta-directing, deactivating substituent in further electrophilic aromatic substitution reactions on the ring.',
    difficulty: 'medium'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-76',
    type: 'mcq',
    question: 'The overall reactivity trends observed for aldehydes, ketones, and carboxylic acids - particularly regarding their relative susceptibility to nucleophilic addition versus resistance to further oxidation - are ultimately governed by the combined influence of:',
    options: [
      'Steric factors and electronic (inductive/resonance) effects at the carbonyl carbon',
      'Only the total molecular weight of each compound, with no other contributing factors',
      'Only the specific colour of each compound, with no other contributing factors',
      'Purely random, unpredictable variation, with no consistent underlying chemical principles'
    ],
    correctIndex: 0,
    explanation: 'The characteristic reactivity patterns of aldehydes, ketones, and carboxylic acids arise from the combined influence of steric factors (bulk of substituents) and electronic effects (inductive and resonance effects) at the carbonyl carbon, governing their relative reactivity toward nucleophiles and oxidising agents.',
    difficulty: 'hard'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-77',
    type: 'mcq',
    question: 'Reaction of an acid chloride with lithium dialkyl copper (a Gilman reagent) provides a controlled method for preparing a:',
    options: [
      'Ketone',
      'Aldehyde',
      'Carboxylic acid',
      'Primary alcohol'
    ],
    correctIndex: 0,
    explanation: 'Gilman reagents (lithium dialkyl copper compounds) react selectively with acid chlorides to give ketones, stopping cleanly at this stage rather than over-reacting further.',
    difficulty: 'hard'
  },
  {
    id: 'aldehydes-ketones-and-carboxylic-acids-78',
    type: 'mcq',
    question: 'The Hunsdiecker reaction converts the silver salt of a carboxylic acid, upon treatment with bromine, into an alkyl halide containing:',
    options: [
      'Exactly the same number of carbon atoms as the original carboxylic acid',
      'One more carbon atom than the original carboxylic acid',
      'No carbon atoms at all',
      'One fewer carbon atom than the original carboxylic acid'
    ],
    correctIndex: 3,
    explanation: 'The Hunsdiecker reaction decarboxylates the silver salt of a carboxylic acid while introducing a halogen, yielding an alkyl halide with one fewer carbon atom than the starting acid.',
    difficulty: 'hard'
  },
];
export default questions;