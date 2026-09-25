import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Alcohols, Phenols and Ethers
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'alcohols-phenols-and-ethers-1',
    type: 'mcq',
    question: 'Alcohols containing only a single hydroxyl (-OH) group are classified as:',
    options: [
      'Dihydric alcohols',
      'Monohydric alcohols',
      'Trihydric alcohols',
      'Polyhydric alcohols, exclusively meaning four or more OH groups'
    ],
    correctIndex: 1,
    explanation: 'Monohydric alcohols contain exactly one hydroxyl group per molecule.',
    difficulty: 'easy'
  },
  {
    id: 'alcohols-phenols-and-ethers-2',
    type: 'mcq',
    question: 'An alcohol in which the carbon bearing the -OH group is attached to only one other carbon atom is classified as a:',
    options: [
      'Secondary (2°) alcohol',
      'Tertiary (3°) alcohol',
      'Phenolic alcohol',
      'Primary (1°) alcohol'
    ],
    correctIndex: 3,
    explanation: 'A primary alcohol has its -OH group attached to a carbon that is bonded to only one other carbon atom.',
    difficulty: 'easy'
  },
  {
    id: 'alcohols-phenols-and-ethers-3',
    type: 'mcq',
    question: 'An alcohol in which the carbon bearing the -OH group is attached to three other carbon atoms is classified as a:',
    options: [
      'Tertiary (3°) alcohol',
      'Primary (1°) alcohol',
      'Secondary (2°) alcohol',
      'Allylic alcohol, exclusively'
    ],
    correctIndex: 0,
    explanation: 'A tertiary alcohol has its -OH group attached to a carbon that is bonded to three other carbon atoms.',
    difficulty: 'easy'
  },
  {
    id: 'alcohols-phenols-and-ethers-4',
    type: 'mcq',
    question: 'An alcohol in which the -OH group is attached to an sp3 carbon directly adjacent to a carbon-carbon double bond is called a(n):',
    options: [
      'Benzylic alcohol',
      'Vinylic alcohol',
      'Allylic alcohol',
      'Phenol'
    ],
    correctIndex: 2,
    explanation: 'Allylic alcohols have their -OH group on an sp3 carbon directly attached to a carbon involved in a C=C double bond.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-5',
    type: 'mcq',
    question: 'An alcohol in which the -OH group is attached to an sp3 carbon directly attached to an aromatic ring is called a(n):',
    options: [
      'Allylic alcohol',
      'Vinylic alcohol',
      'Benzylic alcohol',
      'Phenol'
    ],
    correctIndex: 2,
    explanation: 'Benzylic alcohols have their -OH group on an sp3 carbon directly bonded to an aromatic ring.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-6',
    type: 'mcq',
    question: 'Compounds in which the -OH group is attached directly to an sp2 hybridised carbon atom of an aromatic ring are classified as:',
    options: [
      'Phenols',
      'Alcohols',
      'Ethers',
      'Esters'
    ],
    correctIndex: 0,
    explanation: 'Phenols are characterised by an -OH group directly bonded to the sp2 carbon of an aromatic ring, distinguishing them from alcohols (where -OH is on an sp3 carbon).',
    difficulty: 'easy'
  },
  {
    id: 'alcohols-phenols-and-ethers-7',
    type: 'mcq',
    question: 'Compounds with the general structure R-O-R\', in which an oxygen atom is bonded to two carbon-containing groups, are classified as:',
    options: [
      'Alcohols',
      'Phenols',
      'Aldehydes',
      'Ethers'
    ],
    correctIndex: 3,
    explanation: 'Ethers have the general structure R-O-R\', with an oxygen atom linking two alkyl or aryl groups.',
    difficulty: 'easy'
  },
  {
    id: 'alcohols-phenols-and-ethers-8',
    type: 'mcq',
    question: 'An ether in which both alkyl (or aryl) groups attached to the oxygen atom are identical is classified as a:',
    options: [
      'Mixed (unsymmetrical) ether',
      'Simple (symmetrical) ether',
      'Cyclic alcohol',
      'Phenolic ether, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Simple (symmetrical) ethers have two identical groups attached to the central oxygen atom, unlike mixed (unsymmetrical) ethers, which have two different groups.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-9',
    type: 'mcq',
    question: 'In IUPAC nomenclature, alcohols are named by replacing the terminal \'-e\' of the parent alkane name with the suffix:',
    options: [
      '\'-al\'',
      '\'-one\'',
      '\'-oic acid\'',
      '\'-ol\''
    ],
    correctIndex: 3,
    explanation: 'IUPAC nomenclature names alcohols using the suffix \'-ol\' in place of the terminal \'-e\' of the corresponding alkane.',
    difficulty: 'easy'
  },
  {
    id: 'alcohols-phenols-and-ethers-10',
    type: 'mcq',
    question: 'The name \'phenol,\' referring to hydroxybenzene, is unusual in that it is:',
    options: [
      'Never used in any formal or systematic naming context',
      'Retained as an accepted IUPAC name, despite being a traditional/trivial name',
      'Only used for compounds with no aromatic ring present at all',
      'The only acceptable name for any alcohol containing more than six carbons'
    ],
    correctIndex: 1,
    explanation: 'Despite being a traditional (trivial) name, \'phenol\' is retained as an accepted IUPAC name for hydroxybenzene.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-11',
    type: 'mcq',
    question: 'In substitutive IUPAC nomenclature, ethers (R-O-R\') are commonly named as:',
    options: [
      'Alkoxyalkanes',
      'Alkanols',
      'Alkanals',
      'Alkanoic acids'
    ],
    correctIndex: 0,
    explanation: 'Substitutive IUPAC nomenclature names ethers as alkoxyalkanes, treating the smaller alkyl-oxy group as a substituent (alkoxy group) on the larger parent alkane chain.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-12',
    type: 'mcq',
    question: 'The acid-catalysed hydration of an alkene, adding water across the double bond according to Markovnikov\'s rule, is a common method for preparing:',
    options: [
      'Phenols exclusively',
      'Ethers exclusively',
      'Alcohols',
      'Aldehydes exclusively'
    ],
    correctIndex: 2,
    explanation: 'Acid-catalysed hydration of alkenes, following Markovnikov\'s rule, is a standard method for preparing alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-13',
    type: 'mcq',
    question: 'The hydroboration-oxidation method of alkene hydration is notable for producing an alcohol with an orientation that follows:',
    options: [
      'Markovnikov\'s rule, exactly as in simple acid-catalysed hydration',
      'No particular regiochemical rule at all',
      'Anti-Markovnikov\'s rule',
      'Zaitsev\'s rule, exclusively'
    ],
    correctIndex: 2,
    explanation: 'The hydroboration-oxidation method delivers water in an anti-Markovnikov fashion, generally yielding the less-substituted (primary) alcohol from a terminal alkene.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-14',
    type: 'mcq',
    question: 'The reduction of an aldehyde using a reducing agent such as sodium borohydride (NaBH4) or lithium aluminium hydride (LiAlH4) typically yields a:',
    options: [
      'Primary alcohol',
      'Secondary alcohol',
      'Tertiary alcohol',
      'Phenol'
    ],
    correctIndex: 0,
    explanation: 'Reduction of an aldehyde using NaBH4 or LiAlH4 typically produces a primary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-15',
    type: 'mcq',
    question: 'The reduction of a ketone using a reducing agent such as sodium borohydride (NaBH4) or lithium aluminium hydride (LiAlH4) typically yields a:',
    options: [
      'Primary alcohol',
      'Secondary alcohol',
      'Tertiary alcohol',
      'Phenol'
    ],
    correctIndex: 1,
    explanation: 'Reduction of a ketone using NaBH4 or LiAlH4 typically produces a secondary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-16',
    type: 'mcq',
    question: 'The reaction of a Grignard reagent with formaldehyde (methanal), followed by hydrolysis, typically produces a:',
    options: [
      'Secondary alcohol',
      'Tertiary alcohol',
      'Phenol',
      'Primary alcohol'
    ],
    correctIndex: 3,
    explanation: 'Grignard reagents react with formaldehyde to produce, after hydrolysis, a primary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-17',
    type: 'mcq',
    question: 'The reaction of a Grignard reagent with an aldehyde other than formaldehyde, followed by hydrolysis, typically produces a:',
    options: [
      'Primary alcohol',
      'Secondary alcohol',
      'Tertiary alcohol',
      'Phenol'
    ],
    correctIndex: 1,
    explanation: 'Grignard reagents react with aldehydes other than formaldehyde to produce, after hydrolysis, a secondary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-18',
    type: 'mcq',
    question: 'The reaction of a Grignard reagent with a ketone, followed by hydrolysis, typically produces a:',
    options: [
      'Primary alcohol',
      'Secondary alcohol',
      'Phenol',
      'Tertiary alcohol'
    ],
    correctIndex: 3,
    explanation: 'Grignard reagents react with ketones to produce, after hydrolysis, a tertiary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-19',
    type: 'mcq',
    question: 'In the hydroboration-oxidation sequence used to prepare alcohols, the initial step involves addition of a borane reagent to the alkene, followed by a second step involving treatment with:',
    options: [
      'Hydrogen peroxide and a base (such as NaOH)',
      'Concentrated sulphuric acid, exclusively',
      'A Grignard reagent, exclusively',
      'Sodium metal in dry ether'
    ],
    correctIndex: 0,
    explanation: 'The hydroboration-oxidation method involves initial addition of borane to the alkene, followed by oxidative workup using hydrogen peroxide and a base, converting the organoborane intermediate into the alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-20',
    type: 'mcq',
    question: 'Catalytic hydrogenation, using hydrogen gas and a metal catalyst, can also be used to reduce carbonyl compounds (aldehydes and ketones), producing alcohols in a manner functionally similar to the use of:',
    options: [
      'Grignard reagents, exclusively',
      'Concentrated sulphuric acid, exclusively',
      'NaBH4 or LiAlH4',
      'Lucas reagent, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Catalytic hydrogenation of aldehydes and ketones provides an alternative method (alongside hydride reducing agents like NaBH4/LiAlH4) for converting carbonyl compounds into alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-21',
    type: 'mcq',
    question: 'Grignard reagents are particularly versatile in organic synthesis because they can react with a variety of carbonyl-containing compounds (aldehydes, ketones, and even esters), consistently producing, after hydrolysis, an appropriate:',
    options: [
      'Alcohol',
      'Ether, exclusively',
      'Carboxylic acid, exclusively',
      'Phenol, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Grignard reagents react with a range of carbonyl compounds to produce, after aqueous hydrolysis, various alcohols depending on the specific carbonyl substrate used.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-22',
    type: 'mcq',
    question: 'Phenols can be industrially prepared through a large-scale process starting from cumene (isopropylbenzene), known as the:',
    options: [
      'Kolbe process',
      'Wurtz process',
      'Cumene process',
      'Reimer-Tiemann process'
    ],
    correctIndex: 2,
    explanation: 'The cumene process is a major industrial method for the large-scale production of phenol, starting from cumene.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-23',
    type: 'mcq',
    question: 'In the cumene process, cumene is first oxidised by air to form an intermediate compound called:',
    options: [
      'Cumene chloride',
      'Cumene hydroperoxide',
      'Cumene sulphonic acid',
      'Cumene diazonium salt'
    ],
    correctIndex: 1,
    explanation: 'The first step of the cumene process involves air oxidation of cumene to form cumene hydroperoxide, a key intermediate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-24',
    type: 'mcq',
    question: 'In the cumene process, treatment of cumene hydroperoxide with dilute acid produces phenol along with a valuable by-product called:',
    options: [
      'Formaldehyde',
      'Benzaldehyde',
      'Ethylene glycol',
      'Acetone'
    ],
    correctIndex: 3,
    explanation: 'Acid treatment of cumene hydroperoxide yields both phenol and acetone as useful products, making the cumene process economically attractive.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-25',
    type: 'mcq',
    question: 'Phenols can also be prepared from haloarenes via nucleophilic substitution, typically requiring:',
    options: [
      'Only mild, room-temperature conditions, with no special requirements',
      'Complete absence of any base or nucleophile',
      'Exposure only to visible light, with no thermal input required',
      'Very high temperature and pressure conditions (using NaOH)'
    ],
    correctIndex: 3,
    explanation: 'Since aryl halides are relatively unreactive toward nucleophilic substitution, converting a haloarene to phenol typically requires harsh conditions, such as very high temperature and pressure with concentrated NaOH.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-26',
    type: 'mcq',
    question: 'Phenols can be prepared from arenediazonium salts through a hydrolysis reaction with water, which also releases:',
    options: [
      'Hydrogen gas (H2)',
      'Nitrogen gas (N2)',
      'Carbon dioxide gas (CO2)',
      'Oxygen gas (O2)'
    ],
    correctIndex: 1,
    explanation: 'Hydrolysis of an arenediazonium salt with water produces phenol, with nitrogen gas released as a by-product.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-27',
    type: 'mcq',
    question: 'Phenols can also be prepared by the alkaline fusion of a starting material called:',
    options: [
      'Cumene, without any oxidation step required',
      'Toluene, using only mild heating',
      'Benzenesulphonic acid (or its sodium salt) with NaOH',
      'Benzaldehyde, using a simple reduction step'
    ],
    correctIndex: 2,
    explanation: 'Fusion of sodium benzenesulphonate (or benzenesulphonic acid) with solid NaOH is another classical method for preparing phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-28',
    type: 'mcq',
    question: 'Among the various methods for phenol preparation, the cumene process is generally preferred for large-scale industrial production mainly because it is:',
    options: [
      'More economical, since it simultaneously produces two commercially valuable products (phenol and acetone)',
      'The only method that has ever been discovered for preparing phenol',
      'Significantly more expensive than all alternative methods, despite being widely used',
      'Completely incapable of producing phenol in useful quantities'
    ],
    correctIndex: 0,
    explanation: 'The cumene process is industrially favoured largely because it economically yields two valuable products - phenol and acetone - simultaneously from a relatively inexpensive starting material.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-29',
    type: 'mcq',
    question: 'The synthesis of phenol from an arenediazonium salt requires the diazonium salt itself to first be prepared, typically starting from:',
    options: [
      'Aniline (or a substituted aniline), via a diazotisation reaction',
      'Cumene directly, with no aniline precursor required',
      'Benzenesulphonic acid directly, with no aniline precursor required',
      'Toluene directly, with no aniline precursor required'
    ],
    correctIndex: 0,
    explanation: 'Arenediazonium salts, used as intermediates in one method of phenol preparation, are themselves typically synthesised from aniline (or a substituted aniline) via diazotisation.',
    difficulty: 'hard'
  },
  {
    id: 'alcohols-phenols-and-ethers-30',
    type: 'mcq',
    question: 'Alcohols and phenols generally show significantly higher boiling points compared to alkanes, haloalkanes, or ethers of comparable molecular mass, primarily due to the presence of:',
    options: [
      'Extremely strong covalent bonds within the molecule itself',
      'A complete absence of any intermolecular forces',
      'Intermolecular hydrogen bonding',
      'Ionic bonding between separate alcohol/phenol molecules'
    ],
    correctIndex: 2,
    explanation: 'The presence of intermolecular hydrogen bonding, enabled by the -OH group, gives alcohols and phenols notably higher boiling points than comparable compounds lacking this group.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-31',
    type: 'mcq',
    question: 'Within a homologous series of alcohols, boiling point generally shows which trend as the number of carbon atoms in the alkyl chain increases?',
    options: [
      'Boiling point decreases',
      'Boiling point remains completely unaffected by chain length',
      'Boiling point becomes negative for sufficiently long chains',
      'Boiling point increases'
    ],
    correctIndex: 3,
    explanation: 'As the alkyl chain of an alcohol lengthens, boiling point generally increases, due to increasing van der Waals forces between molecules.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-32',
    type: 'mcq',
    question: 'Among isomeric alcohols, increased branching of the carbon skeleton generally has which effect on boiling point?',
    options: [
      'Boiling point increases',
      'Boiling point decreases',
      'Boiling point remains completely unaffected by branching',
      'Boiling point becomes exactly zero'
    ],
    correctIndex: 1,
    explanation: 'Increased branching in isomeric alcohols generally decreases boiling point, since branching reduces the effective surface area available for intermolecular van der Waals interactions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-33',
    type: 'mcq',
    question: 'The solubility of alcohols in water generally shows which trend as the size of the alkyl group (hydrophobic portion) increases?',
    options: [
      'Solubility increases',
      'Solubility remains completely unaffected by the size of the alkyl group',
      'Solubility becomes negative, which is not physically meaningful',
      'Solubility decreases'
    ],
    correctIndex: 3,
    explanation: 'As the hydrophobic alkyl portion of an alcohol becomes larger, water solubility generally decreases, since the hydrophobic character increasingly dominates over the hydrophilic -OH group.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-34',
    type: 'mcq',
    question: 'Phenols, being weakly acidic compounds, show limited solubility in pure water but are generally significantly more soluble in:',
    options: [
      'Aqueous sodium hydroxide (NaOH) solution',
      'Pure, anhydrous benzene, exclusively',
      'Concentrated hydrochloric acid, exclusively',
      'Liquid nitrogen, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Since phenols are weakly acidic, they react with aqueous NaOH to form water-soluble sodium phenoxide salts, greatly increasing their apparent solubility compared to pure water alone.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-35',
    type: 'mcq',
    question: 'The intermolecular hydrogen bonding responsible for the elevated boiling points of alcohols and phenols specifically involves interaction between the:',
    options: [
      'Carbon atoms of neighbouring alkyl chains, exclusively',
      'Hydrogen atom of one -OH group and the oxygen atom of a neighbouring molecule\'s -OH group',
      'Hydrogen atoms of the alkyl chain (C-H bonds), exclusively',
      'Oxygen atoms of two entirely different, unrelated functional groups'
    ],
    correctIndex: 1,
    explanation: 'Hydrogen bonding in alcohols and phenols arises from the interaction between the relatively acidic hydrogen of one molecule\'s -OH group and the electronegative oxygen atom of a neighbouring molecule\'s -OH group.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-36',
    type: 'mcq',
    question: 'Alcohols are generally considered to be weakly acidic compounds, capable of donating a proton from the:',
    options: [
      'Alkyl chain (C-H bonds), forming a carbanion',
      'Nowhere in the molecule; alcohols show no acidic character whatsoever',
      '-OH group, forming an alkoxide ion',
      'Only from a second, non-existent -OH group'
    ],
    correctIndex: 2,
    explanation: 'Alcohols show weak acidity by donating the proton from their -OH group, forming the conjugate base known as an alkoxide ion.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-37',
    type: 'mcq',
    question: 'As the size (or degree of branching) of the alkyl group in an alcohol increases, the acidity of the alcohol generally shows which trend, largely due to the destabilising inductive effect of the alkyl group on the resulting alkoxide ion?',
    options: [
      'Acidity increases',
      'Acidity remains completely unaffected by the alkyl group',
      'Acidity decreases',
      'Acidity becomes negative, which is not physically meaningful'
    ],
    correctIndex: 2,
    explanation: 'Larger or more branched alkyl groups tend to donate electron density via the inductive effect, destabilising the resulting alkoxide ion and thereby decreasing the acidity of the parent alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-38',
    type: 'mcq',
    question: 'Phenols are generally significantly more acidic than comparable alcohols mainly because the phenoxide ion (the conjugate base of phenol) is stabilised by:',
    options: [
      'Complete localisation of the negative charge entirely on the oxygen atom, with no delocalisation at all',
      'Resonance delocalisation of the negative charge into the aromatic ring',
      'Strong hydrogen bonding with the solvent alone, unrelated to any resonance effect',
      'An entirely different, unrelated mechanism having nothing to do with electron delocalisation'
    ],
    correctIndex: 1,
    explanation: 'The phenoxide ion is significantly stabilised by resonance, which delocalises the negative charge into the aromatic ring, making phenol considerably more acidic than typical alcohols (which lack this resonance stabilisation in their alkoxide ions).',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-39',
    type: 'mcq',
    question: 'Since phenols are more acidic than alcohols, phenols (unlike most alcohols) are capable of reacting with aqueous sodium hydroxide (NaOH) to form:',
    options: [
      'Sodium phenoxide and water',
      'Sodium alkoxide and water, identical to what alcohols would form',
      'No reaction whatsoever occurs between phenol and NaOH',
      'A phenol-sodium alloy, with no water produced'
    ],
    correctIndex: 0,
    explanation: 'Due to their greater acidity, phenols readily react with aqueous NaOH to form water-soluble sodium phenoxide salts and water, a reaction not generally observed with simple alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-40',
    type: 'mcq',
    question: 'The presence of an electron-withdrawing group (such as -NO2) at the ortho or para position of a substituted phenol generally has which effect on the phenol\'s overall acidity?',
    options: [
      'Decreases acidity, by destabilising the resulting phenoxide ion',
      'Has no effect whatsoever on the phenol\'s acidity',
      'Converts the phenol into a base instead of an acid',
      'Increases acidity, by further stabilising the resulting phenoxide ion'
    ],
    correctIndex: 3,
    explanation: 'Electron-withdrawing groups (like -NO2) at the ortho or para position further stabilise the phenoxide ion (through both resonance and inductive effects), thereby increasing the overall acidity of the substituted phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-41',
    type: 'mcq',
    question: 'The presence of an electron-donating group (such as -CH3 or -OCH3) at the ortho or para position of a substituted phenol generally has which effect on the phenol\'s overall acidity?',
    options: [
      'Decreases acidity, by destabilising the resulting phenoxide ion',
      'Increases acidity, by further stabilising the resulting phenoxide ion',
      'Has no effect whatsoever on the phenol\'s acidity',
      'Converts the phenol into a much stronger acid than any nitro-substituted phenol'
    ],
    correctIndex: 0,
    explanation: 'Electron-donating groups (like -CH3 or -OCH3) tend to destabilise the phenoxide ion by intensifying the negative charge density, thereby decreasing the overall acidity of the substituted phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-42',
    type: 'mcq',
    question: 'The typical pKa value of phenol (approximately 10) is considerably lower than that of a typical alcohol (approximately 16-18), directly confirming that phenol is:',
    options: [
      'A considerably weaker acid than a typical alcohol',
      'Exactly equal in acidity to a typical alcohol',
      'Not acidic at all, contrary to common understanding',
      'A considerably stronger acid than a typical alcohol'
    ],
    correctIndex: 3,
    explanation: 'Since pKa is inversely related to acid strength (lower pKa means stronger acid), phenol\'s lower pKa value (~10) compared to typical alcohols (~16-18) confirms that phenol is a considerably stronger acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-43',
    type: 'mcq',
    question: 'Among simple alcohols, the general order of decreasing acidity is often observed as:',
    options: [
      'Tertiary > secondary > primary alcohols > methanol',
      'Methanol > primary > secondary > tertiary alcohols',
      'All alcohols show exactly identical acidity, with no distinction possible',
      'Secondary > tertiary alcohols > methanol > primary alcohols'
    ],
    correctIndex: 1,
    explanation: 'Among simple alcohols, acidity generally decreases in the order methanol > primary > secondary > tertiary, reflecting the increasing electron-donating (destabilising) inductive effect of larger, more substituted alkyl groups.',
    difficulty: 'hard'
  },
  {
    id: 'alcohols-phenols-and-ethers-44',
    type: 'mcq',
    question: 'The resonance stabilisation of the phenoxide ion involves delocalisation of the negative charge from the oxygen atom into the aromatic ring, placing partial negative charge specifically at the:',
    options: [
      'Meta positions of the ring, exclusively',
      'Only the ipso carbon (the carbon directly bonded to oxygen), with no further delocalisation',
      'Ortho and para positions of the ring',
      'Nowhere within the ring; delocalisation does not actually extend into the ring at all'
    ],
    correctIndex: 2,
    explanation: 'Resonance structures of the phenoxide ion show delocalisation of the negative charge specifically onto the ortho and para carbons of the aromatic ring, contributing to its overall stabilisation.',
    difficulty: 'hard'
  },
  {
    id: 'alcohols-phenols-and-ethers-45',
    type: 'mcq',
    question: 'Which of the following correctly compares the relative acidity of water, a typical alcohol, and phenol?',
    options: [
      'A typical alcohol is always more acidic than both water and phenol',
      'Phenol is more acidic than water, which is generally more acidic than a typical alcohol',
      'Water, alcohol, and phenol are all exactly equally acidic, with no meaningful distinction',
      'Phenol is the least acidic of the three, being weaker than both water and alcohol'
    ],
    correctIndex: 1,
    explanation: 'The general order of acidity is phenol > water > typical alcohol, reflecting the significant resonance stabilisation available to the phenoxide ion, which is absent for both water\'s conjugate base and a typical alkoxide ion.',
    difficulty: 'hard'
  },
  {
    id: 'alcohols-phenols-and-ethers-46',
    type: 'mcq',
    question: 'The Lucas test, used to distinguish between primary, secondary, and tertiary alcohols, employs a reagent known as the Lucas reagent, composed of concentrated hydrochloric acid and:',
    options: [
      'Anhydrous aluminium chloride (AlCl3)',
      'Concentrated sulphuric acid, exclusively, with no zinc chloride at all',
      'Anhydrous zinc chloride (ZnCl2)',
      'Potassium permanganate (KMnO4)'
    ],
    correctIndex: 2,
    explanation: 'The Lucas reagent, used in the Lucas test to distinguish alcohols, is a mixture of concentrated HCl and anhydrous zinc chloride (ZnCl2).',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-47',
    type: 'mcq',
    question: 'In the Lucas test, tertiary alcohols react most rapidly, typically producing an immediately visible turbidity (cloudiness) at room temperature, due to the:',
    options: [
      'Ready formation of a relatively stable tertiary carbocation intermediate',
      'Complete absence of any reaction whatsoever with tertiary alcohols',
      'Formation of an extremely unstable primary carbocation intermediate',
      'A reaction mechanism entirely unrelated to carbocation formation'
    ],
    correctIndex: 0,
    explanation: 'Tertiary alcohols react fastest in the Lucas test because the reaction proceeds via an SN1-type mechanism, and tertiary carbocations (being relatively stable) form readily even at room temperature.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-48',
    type: 'mcq',
    question: 'In the Lucas test, primary alcohols generally show little to no visible reaction (turbidity) at room temperature, requiring heating to react, mainly because primary carbocations are:',
    options: [
      'Extremely stable, more so than tertiary carbocations, requiring no additional energy at all',
      'Formed with exactly the same ease as tertiary carbocations, with no meaningful kinetic difference',
      'Never formed under any circumstances, regardless of conditions',
      'Very unstable, making SN1-type reaction pathways unfavourable without additional energy input'
    ],
    correctIndex: 3,
    explanation: 'Since primary carbocations are highly unstable, primary alcohols react very slowly (or not at all without heating) in the Lucas test, reflecting the difficulty of forming this unfavourable intermediate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-49',
    type: 'mcq',
    question: 'The reaction between an alcohol and a carboxylic acid, catalysed by an acid, to form an ester and water, is called:',
    options: [
      'Etherification, exclusively',
      'Dehydrohalogenation, exclusively',
      'Saponification, exclusively',
      'Esterification'
    ],
    correctIndex: 3,
    explanation: 'Esterification is the acid-catalysed reaction between an alcohol and a carboxylic acid, producing an ester and water as products.',
    difficulty: 'easy'
  },
  {
    id: 'alcohols-phenols-and-ethers-50',
    type: 'mcq',
    question: 'Esterification reactions between alcohols and carboxylic acids are generally considered to be:',
    options: [
      'Completely irreversible reactions, proceeding entirely to completion',
      'Reactions that never actually occur under any conditions',
      'Reversible reactions, reaching a state of chemical equilibrium',
      'Reactions that produce no measurable products whatsoever'
    ],
    correctIndex: 2,
    explanation: 'Esterification is a reversible reaction, meaning it can reach a state of dynamic chemical equilibrium between the ester/water products and the alcohol/acid reactants.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-51',
    type: 'mcq',
    question: 'The dehydration of an alcohol, typically using concentrated sulphuric acid or concentrated phosphoric acid, generally produces an:',
    options: [
      'Alkene',
      'Ether, exclusively',
      'Carboxylic acid, exclusively',
      'Aldehyde, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Acid-catalysed dehydration of an alcohol removes a molecule of water, typically producing an alkene as the major product.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-52',
    type: 'mcq',
    question: 'When alcohol dehydration can produce more than one possible alkene product, the major product formed generally follows:',
    options: [
      'A rule favouring exclusively the least substituted, least stable alkene',
      'Saytzeff\'s (Zaitsev\'s) Rule, favouring the more substituted, more stable alkene',
      'No predictable pattern whatsoever, with entirely random product distribution',
      'A rule that applies only to esterification, not to dehydration'
    ],
    correctIndex: 1,
    explanation: 'When multiple alkene products are possible from alcohol dehydration, the major product generally follows Saytzeff\'s Rule, favouring the more substituted (more stable) alkene.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-53',
    type: 'mcq',
    question: 'The relative ease of acid-catalysed alcohol dehydration generally follows the reactivity order:',
    options: [
      'Tertiary > Secondary > Primary alcohols',
      'Primary > Secondary > Tertiary alcohols',
      'All alcohols undergo dehydration with exactly identical ease',
      'Secondary > Tertiary > Primary alcohols'
    ],
    correctIndex: 0,
    explanation: 'Alcohol dehydration reactivity generally follows the order Tertiary > Secondary > Primary, correlating with the relative ease of forming the corresponding carbocation intermediate involved in the reaction mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-54',
    type: 'mcq',
    question: 'Mild oxidation of a primary alcohol, using a reagent such as pyridinium chlorochromate (PCC), typically stops at the formation of a(n):',
    options: [
      'Carboxylic acid, going further than a simple aldehyde',
      'Aldehyde',
      'Ketone, rather than an aldehyde',
      'Ether, an entirely unrelated product'
    ],
    correctIndex: 1,
    explanation: 'PCC is a mild oxidising agent that selectively oxidises primary alcohols only as far as the corresponding aldehyde, without further oxidation to the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-55',
    type: 'mcq',
    question: 'Stronger oxidation of a primary alcohol, using an oxidising agent such as potassium permanganate (KMnO4) or potassium dichromate (K2Cr2O7), typically proceeds all the way to a:',
    options: [
      'Aldehyde only, with no further oxidation occurring',
      'Ketone, rather than a carboxylic acid',
      'Ether, an entirely unrelated product',
      'Carboxylic acid'
    ],
    correctIndex: 3,
    explanation: 'Strong oxidising agents like KMnO4 or K2Cr2O7 fully oxidise primary alcohols all the way to the corresponding carboxylic acid, passing through the aldehyde intermediate stage.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-56',
    type: 'mcq',
    question: 'Oxidation of a secondary alcohol, using an appropriate oxidising agent, typically produces a:',
    options: [
      'Aldehyde',
      'Carboxylic acid, directly, bypassing any ketone intermediate',
      'Ketone',
      'Ether'
    ],
    correctIndex: 2,
    explanation: 'Oxidation of a secondary alcohol produces a ketone, since the carbon bearing the -OH group has only one hydrogen atom available for removal during oxidation.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-57',
    type: 'mcq',
    question: 'Tertiary alcohols are generally found to be resistant to oxidation under normal (mild) conditions mainly because:',
    options: [
      'Tertiary alcohols do not actually contain any -OH group at all',
      'Tertiary alcohols are inherently unstable and decompose before oxidation can even begin',
      'The carbon bearing the -OH group has no hydrogen atom available for removal during the oxidation process',
      'Oxidising agents are completely incapable of reacting with any tertiary compound, regardless of functional group'
    ],
    correctIndex: 2,
    explanation: 'Since the carbon bearing the -OH group in a tertiary alcohol has no attached hydrogen atom, normal oxidation (which requires removal of this hydrogen) cannot readily occur without breaking a carbon-carbon bond, making tertiary alcohols resistant to standard oxidation conditions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-58',
    type: 'mcq',
    question: 'The -OH group of phenol is a strongly activating group in electrophilic aromatic substitution reactions, and is also described as being:',
    options: [
      'Meta-directing, exclusively',
      'Completely non-directing, with no preference for any ring position',
      'Deactivating, similar to a halogen substituent',
      'Ortho/para-directing'
    ],
    correctIndex: 3,
    explanation: 'The -OH group of phenol strongly activates the ring toward electrophilic substitution and directs incoming electrophiles predominantly to the ortho and para positions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-59',
    type: 'mcq',
    question: 'The reaction of phenol with bromine water, without requiring any additional catalyst or solvent, produces a characteristic white precipitate of:',
    options: [
      '2,4,6-Tribromophenol',
      'Monobromophenol, exclusively',
      'Dibromophenol, exclusively',
      'No precipitate forms at all under these conditions'
    ],
    correctIndex: 0,
    explanation: 'Phenol reacts readily with bromine water (without needing a catalyst, due to its high reactivity) to form a characteristic white precipitate of 2,4,6-tribromophenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-60',
    type: 'mcq',
    question: 'Nitration of phenol using dilute nitric acid typically produces a mixture of:',
    options: [
      'Only meta-nitrophenol, exclusively',
      'Ortho- and para-nitrophenol',
      '2,4,6-Trinitrophenol, exclusively, under these mild conditions',
      'No nitration product at all under these conditions'
    ],
    correctIndex: 1,
    explanation: 'Nitration of phenol with dilute nitric acid, consistent with the ortho/para-directing nature of the -OH group, produces a mixture of ortho- and para-nitrophenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-61',
    type: 'mcq',
    question: 'The sulphonation of phenol can yield either the ortho- or para-sulphonic acid derivative, with the specific major product depending on the:',
    options: [
      'Exact colour of the phenol used, with no relation to temperature',
      'Reaction temperature',
      'Atmospheric pressure alone, with no relation to temperature',
      'Complete absence of sulphuric acid, regardless of temperature'
    ],
    correctIndex: 1,
    explanation: 'The sulphonation of phenol shows temperature-dependent selectivity: lower temperatures tend to favour the ortho isomer (kinetic product), while higher temperatures favour the more thermodynamically stable para isomer.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-62',
    type: 'mcq',
    question: 'Kolbe\'s reaction, an important industrial and laboratory method, involves treating sodium phenoxide with carbon dioxide under heat and pressure, followed by acidification, to produce:',
    options: [
      'Salicylic acid (ortho-hydroxybenzoic acid)',
      'Salicylaldehyde (2-hydroxybenzaldehyde)',
      '2,4,6-Tribromophenol',
      'Cumene hydroperoxide'
    ],
    correctIndex: 0,
    explanation: 'Kolbe\'s reaction converts sodium phenoxide, upon treatment with CO2 under heat/pressure and subsequent acidification, into salicylic acid (ortho-hydroxybenzoic acid).',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-63',
    type: 'mcq',
    question: 'In Kolbe\'s reaction, carbon dioxide acts as the:',
    options: [
      'Nucleophile',
      'Reducing agent',
      'Electrophile',
      'Solvent, exclusively, with no chemical role in the reaction'
    ],
    correctIndex: 2,
    explanation: 'In Kolbe\'s reaction, carbon dioxide functions as the electrophile, being attacked by the electron-rich phenoxide ring in an electrophilic aromatic substitution process.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-64',
    type: 'mcq',
    question: 'The Reimer-Tiemann reaction involves treating phenol with chloroform (CHCl3) and aqueous sodium hydroxide, followed by acidification, to produce:',
    options: [
      'Salicylic acid (ortho-hydroxybenzoic acid)',
      '2,4,6-Tribromophenol',
      'Cumene hydroperoxide',
      'Salicylaldehyde (2-hydroxybenzaldehyde)'
    ],
    correctIndex: 3,
    explanation: 'The Reimer-Tiemann reaction converts phenol, via treatment with chloroform and aqueous NaOH followed by acidification, into salicylaldehyde (2-hydroxybenzaldehyde).',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-65',
    type: 'mcq',
    question: 'The key reactive electrophilic intermediate generated during the Reimer-Tiemann reaction, formed from chloroform under strongly basic conditions, is:',
    options: [
      'Phenoxide ion, exclusively (which is not itself an electrophile)',
      'Carbon dioxide',
      'Bromine, in molecular form',
      'Dichlorocarbene'
    ],
    correctIndex: 3,
    explanation: 'Under strongly basic conditions, chloroform generates the highly reactive electrophile dichlorocarbene, which is the key species that attacks the phenol ring in the Reimer-Tiemann reaction.',
    difficulty: 'hard'
  },
  {
    id: 'alcohols-phenols-and-ethers-66',
    type: 'mcq',
    question: 'Friedel-Crafts alkylation/acylation reactions on phenol are often found to proceed with limited success mainly because phenol tends to react directly with the Lewis acid catalyst (such as AlCl3), thereby:',
    options: [
      'Having absolutely no interaction whatsoever with the catalyst',
      'Reducing the effective catalytic activity available for the intended Friedel-Crafts reaction',
      'Completely preventing any aromatic ring from ever forming in phenol',
      'Converting phenol entirely into an inorganic salt with no organic character remaining'
    ],
    correctIndex: 1,
    explanation: 'Phenol\'s -OH group can directly coordinate with or react with Lewis acid catalysts like AlCl3, diminishing the amount of active catalyst available and thereby limiting the effectiveness of Friedel-Crafts reactions on phenol.',
    difficulty: 'hard'
  },
  {
    id: 'alcohols-phenols-and-ethers-67',
    type: 'mcq',
    question: 'Compared to benzene, phenol generally undergoes electrophilic aromatic substitution reactions at a:',
    options: [
      'Significantly faster rate, due to the strongly activating nature of the -OH group',
      'Significantly slower rate, due to a strongly deactivating -OH group',
      'Exactly identical rate, with no measurable difference from benzene',
      'Rate that is impossible to compare meaningfully to that of benzene'
    ],
    correctIndex: 0,
    explanation: 'Since the -OH group is a strong activator (donating electron density into the ring via resonance), phenol undergoes electrophilic aromatic substitution significantly faster than unsubstituted benzene.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-68',
    type: 'mcq',
    question: 'The Williamson synthesis, considered the most versatile and widely used method for preparing ethers, involves the reaction of a sodium alkoxide with a(n):',
    options: [
      'Carboxylic acid',
      'Grignard reagent',
      'Alkyl halide',
      'Aldehyde'
    ],
    correctIndex: 2,
    explanation: 'The Williamson ether synthesis involves the reaction of a sodium alkoxide (or phenoxide) with an alkyl halide to form an ether.',
    difficulty: 'easy'
  },
  {
    id: 'alcohols-phenols-and-ethers-69',
    type: 'mcq',
    question: 'The mechanism of the Williamson ether synthesis generally proceeds via:',
    options: [
      'An SN2 mechanism',
      'An SN1 mechanism, exclusively',
      'A free-radical mechanism, exclusively',
      'An electrophilic aromatic substitution mechanism'
    ],
    correctIndex: 0,
    explanation: 'The Williamson synthesis proceeds via an SN2 mechanism, with the alkoxide ion acting as a nucleophile, attacking the alkyl halide substrate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-70',
    type: 'mcq',
    question: 'In the Williamson synthesis, using a primary alkyl halide as the substrate is generally preferred over using a tertiary alkyl halide mainly because tertiary substrates tend to favour a competing:',
    options: [
      'Esterification reaction, rather than the desired substitution',
      'Oxidation reaction, rather than the desired substitution',
      'Elimination reaction, rather than the desired substitution',
      'Reduction reaction, rather than the desired substitution'
    ],
    correctIndex: 2,
    explanation: 'With bulky tertiary alkyl halides, the strongly basic alkoxide nucleophile tends to favour elimination (E2) over the desired SN2 substitution, making primary alkyl halides generally preferable for the Williamson synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-71',
    type: 'mcq',
    question: 'Ethers can also be prepared by the intermolecular dehydration of two molecules of an alcohol, typically using concentrated sulphuric acid at a relatively moderate temperature, generally around:',
    options: [
      '25°C (room temperature)',
      '140°C',
      '500°C',
      '0°C'
    ],
    correctIndex: 1,
    explanation: 'Intermolecular dehydration of alcohols to form ethers is typically carried out with concentrated sulphuric acid at a moderate temperature (around 140°C).',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-72',
    type: 'mcq',
    question: 'Compared to the moderate-temperature conditions favouring ether formation, using a significantly higher temperature during acid-catalysed alcohol dehydration generally favours the competing formation of:',
    options: [
      'An additional molecule of ether, in even greater yield',
      'A carboxylic acid, rather than an ether',
      'A Grignard reagent, rather than an ether',
      'An alkene (via elimination), rather than an ether'
    ],
    correctIndex: 3,
    explanation: 'At higher temperatures, acid-catalysed alcohol dehydration favours the elimination pathway, producing an alkene, rather than the intermolecular substitution pathway that yields an ether at more moderate temperatures.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-73',
    type: 'mcq',
    question: 'Ethers are generally considered to be relatively unreactive compounds, being largely inert (resistant) to most common reagents, with a notable exception being their reactivity toward:',
    options: [
      'Pure, cold water, at room temperature',
      'Concentrated hydrogen halides (such as HI), particularly under conditions of heat',
      'Dilute, weak acids, at room temperature',
      'Atmospheric oxygen, under normal storage conditions'
    ],
    correctIndex: 1,
    explanation: 'Despite their general chemical inertness, ethers can be cleaved by concentrated hydrogen halides (especially HI, the most reactive), particularly when heated.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-74',
    type: 'mcq',
    question: 'Among the common hydrogen halides used to cleave ethers, the most reactive is generally found to be:',
    options: [
      'HCl (hydrogen chloride)',
      'HF (hydrogen fluoride)',
      'All hydrogen halides show exactly identical reactivity toward ether cleavage',
      'HI (hydrogen iodide)'
    ],
    correctIndex: 3,
    explanation: 'Among the hydrogen halides, HI is generally the most effective at cleaving ethers, reflecting the relative strength of iodide as a nucleophile and the weakness of the H-I bond.',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-75',
    type: 'mcq',
    question: 'When an ether containing a tertiary alkyl group is cleaved by concentrated HI, the reaction generally proceeds via an SN1-type mechanism, with the iodide ion attacking specifically at the:',
    options: [
      'Less substituted carbon, exclusively',
      'Oxygen atom itself, with no attack occurring at any carbon',
      'More substituted (tertiary) carbon',
      'Neither carbon; the reaction proceeds without any nucleophilic attack at all'
    ],
    correctIndex: 2,
    explanation: 'For ethers containing a tertiary alkyl group, cleavage by HI proceeds via an SN1-type mechanism (through a relatively stable tertiary carbocation), with the iodide nucleophile ultimately attacking the more substituted (tertiary) carbon.',
    difficulty: 'hard'
  },
  {
    id: 'alcohols-phenols-and-ethers-76',
    type: 'mcq',
    question: 'When an ether containing only primary or secondary alkyl groups is cleaved by concentrated HI, the reaction generally proceeds via an SN2-type mechanism, with the iodide ion attacking specifically at the:',
    options: [
      'Less hindered (sterically less crowded) carbon',
      'More hindered (bulkier) carbon, exclusively',
      'Oxygen atom itself, with no attack occurring at any carbon',
      'Neither carbon; the reaction proceeds without any nucleophilic attack at all'
    ],
    correctIndex: 0,
    explanation: 'For ethers with only primary or secondary alkyl groups, cleavage proceeds via an SN2-type mechanism, with the iodide nucleophile attacking the less sterically hindered carbon.',
    difficulty: 'hard'
  },
  {
    id: 'alcohols-phenols-and-ethers-77',
    type: 'mcq',
    question: 'When an ether is treated with an excess of concentrated HI, and the cleavage reaction is allowed to proceed fully, the ultimate products obtained are generally:',
    options: [
      'Two molecules of alkyl iodide',
      'One molecule of alkyl iodide and one molecule of alkene',
      'Two molecules of alcohol, with no alkyl iodide formed',
      'A single, unreacted ether molecule, remaining unchanged'
    ],
    correctIndex: 0,
    explanation: 'With a sufficient excess of concentrated HI, complete cleavage of an ether ultimately yields two separate molecules of alkyl iodide (after an initial alcohol intermediate is also further converted).',
    difficulty: 'medium'
  },
  {
    id: 'alcohols-phenols-and-ethers-78',
    type: 'mcq',
    question: 'In electrophilic aromatic substitution reactions of aromatic ethers such as anisole (methoxybenzene), the alkoxy (-OR) substituent behaves similarly to the -OH group of phenol, functioning as a(n):',
    options: [
      'Meta-directing, deactivating group',
      'Completely non-directing, unreactive group',
      'Group that entirely prevents any further substitution on the ring',
      'Ortho/para-directing, activating group'
    ],
    correctIndex: 3,
    explanation: 'Like the -OH group of phenol, the alkoxy group (-OR) of aromatic ethers such as anisole is an ortho/para-directing and activating substituent in electrophilic aromatic substitution reactions, due to resonance donation of a lone pair into the ring.',
    difficulty: 'medium'
  },
];
export default questions;