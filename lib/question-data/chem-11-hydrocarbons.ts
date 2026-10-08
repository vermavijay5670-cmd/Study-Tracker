import type { Question } from "@/lib/questionBank";

// NEET Chemistry Question Bank
// Chapter: Hydrocarbons
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'hydrocarbons-1',
    type: 'mcq',
    question: 'Hydrocarbons containing only carbon-carbon single bonds, having the general formula CnH2n+2, are classified as:',
    options: [
      'Alkenes',
      'Alkanes (saturated hydrocarbons)',
      'Alkynes',
      'Arenes'
    ],
    correctIndex: 1,
    explanation: 'Alkanes are saturated hydrocarbons, containing only carbon-carbon single bonds, and follow the general formula CnH2n+2.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-2',
    type: 'mcq',
    question: 'Hydrocarbons containing at least one carbon-carbon double bond, having the general formula CnH2n, are classified as:',
    options: [
      'Alkanes',
      'Alkynes',
      'Arenes',
      'Alkenes'
    ],
    correctIndex: 3,
    explanation: 'Alkenes are unsaturated hydrocarbons containing at least one carbon-carbon double bond, following the general formula CnH2n.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-3',
    type: 'mcq',
    question: 'Hydrocarbons containing at least one carbon-carbon triple bond, having the general formula CnH2n-2, are classified as:',
    options: [
      'Alkynes',
      'Alkanes',
      'Alkenes',
      'Arenes'
    ],
    correctIndex: 0,
    explanation: 'Alkynes are unsaturated hydrocarbons containing at least one carbon-carbon triple bond, following the general formula CnH2n-2.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-4',
    type: 'mcq',
    question: 'Each carbon atom in an alkane is characteristically:',
    options: [
      'sp2 hybridised, with a trigonal planar geometry',
      'sp hybridised, with a linear geometry',
      'sp3 hybridised, with a tetrahedral geometry',
      'Not hybridised at all'
    ],
    correctIndex: 2,
    explanation: 'Carbon atoms in alkanes are sp3 hybridised, giving each carbon a tetrahedral geometry with bond angles of approximately 109.5°.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-5',
    type: 'mcq',
    question: 'Alkanes are generally considered relatively unreactive compared to unsaturated hydrocarbons, a characteristic reflected in their traditional name:',
    options: [
      'Olefins, a name historically associated with alkenes, not alkanes',
      'Acetylenes, a name historically associated with alkynes, not alkanes',
      'Paraffins (meaning \'little affinity\')',
      'Arenes, a name historically associated with aromatic hydrocarbons, not alkanes'
    ],
    correctIndex: 2,
    explanation: 'Alkanes were historically termed \'paraffins,\' derived from Latin words meaning \'little affinity,\' reflecting their relatively low chemical reactivity compared to unsaturated hydrocarbons.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-6',
    type: 'mcq',
    question: 'The catalytic hydrogenation of alkenes or alkynes, using hydrogen gas and a metal catalyst (such as Ni, Pd, or Pt), is a common method for preparing:',
    options: [
      'Alkanes',
      'Only alkenes, with no further reduction possible',
      'Only arenes, with no relevance to simple alkane synthesis',
      'Only alkynes, with no reduction actually occurring'
    ],
    correctIndex: 0,
    explanation: 'Catalytic hydrogenation of alkenes or alkynes, using H2 and a suitable metal catalyst, is a standard method for preparing the corresponding saturated alkane.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-7',
    type: 'mcq',
    question: 'The Wurtz reaction, involving treatment of an alkyl halide with sodium metal in dry ether, is primarily useful for preparing:',
    options: [
      'Any alkane regardless of carbon number parity, with no restriction at all',
      'Only unsaturated hydrocarbons, with no application to alkane synthesis',
      'Only aromatic hydrocarbons, with no application to alkane synthesis',
      'Symmetrical alkanes containing an even number of carbon atoms'
    ],
    correctIndex: 3,
    explanation: 'The Wurtz reaction couples two molecules of the same alkyl halide, making it primarily useful for preparing symmetrical alkanes with an even number of carbon atoms.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-8',
    type: 'mcq',
    question: 'Decarboxylation of the sodium salt of a carboxylic acid, achieved by heating with soda lime, produces an alkane containing:',
    options: [
      'Exactly the same number of carbon atoms as the original carboxylic acid',
      'One fewer carbon atom than the original carboxylic acid',
      'One more carbon atom than the original carboxylic acid',
      'Twice the number of carbon atoms of the original carboxylic acid'
    ],
    correctIndex: 1,
    explanation: 'Decarboxylation of a sodium carboxylate salt (heated with soda lime) removes the carboxyl carbon as CO2, yielding an alkane with one fewer carbon atom than the original acid.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-9',
    type: 'mcq',
    question: 'Kolbe\'s electrolysis method for preparing alkanes involves the electrolysis of an aqueous solution of the sodium or potassium salt of a carboxylic acid, with alkyl radicals formed at the:',
    options: [
      'Cathode, exclusively, with no reaction occurring at the anode',
      'Both electrodes equally, with no distinction in mechanism between anode and cathode',
      'Neither electrode; the reaction proceeds entirely in bulk solution, without involving the electrodes at all',
      'Anode, which subsequently combine to form the alkane product'
    ],
    correctIndex: 3,
    explanation: 'In Kolbe\'s electrolysis, the carboxylate ion is oxidised at the anode, releasing carbon dioxide and generating alkyl radicals, which subsequently combine (typically in pairs) to form the alkane product.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-10',
    type: 'mcq',
    question: 'The alkane product typically obtained from Kolbe\'s electrolysis generally contains an even number of carbon atoms, since the alkyl radicals generated at the anode:',
    options: [
      'Never actually combine with one another under any circumstances',
      'Combine with each other (radical-radical coupling) to form the product',
      'Immediately decompose into individual carbon atoms before any coupling can occur',
      'Spontaneously convert into an entirely unrelated functional group before any coupling'
    ],
    correctIndex: 1,
    explanation: 'Since the alkyl radicals generated at the anode in Kolbe\'s electrolysis combine with each other (radical coupling) to form the product, the resulting alkane typically contains an even number of carbon atoms (double that of the alkyl portion of the starting acid).',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-11',
    type: 'mcq',
    question: 'Among the various methods for preparing alkanes, catalytic hydrogenation of an alkene is generally the most straightforward when the goal is to obtain an alkane with:',
    options: [
      'The exact same carbon skeleton as the starting alkene, fully saturated',
      'A completely different, unrelated carbon skeleton compared to the starting alkene',
      'One fewer carbon atom than the starting alkene',
      'Double the number of carbon atoms of the starting alkene'
    ],
    correctIndex: 0,
    explanation: 'Catalytic hydrogenation simply adds hydrogen across the double bond of an alkene, providing the fully saturated alkane with the identical carbon skeleton, making it a straightforward and predictable synthetic method.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-12',
    type: 'mcq',
    question: 'The various spatial arrangements of atoms in a molecule, arising from rotation about a carbon-carbon single bond, are referred to as:',
    options: [
      'Structural isomers',
      'Geometrical isomers',
      'Conformations (conformers)',
      'Optical isomers'
    ],
    correctIndex: 2,
    explanation: 'Conformations (conformers) are the different spatial arrangements of a molecule that arise from rotation about single bonds, without breaking any bonds.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-13',
    type: 'mcq',
    question: 'The conformation of ethane in which the hydrogen atoms on adjacent carbon atoms are positioned as far apart as possible (at a torsion angle of 60°) is called the:',
    options: [
      'Eclipsed conformation',
      'Gauche conformation, a term more specifically used for larger substituted alkanes',
      'Staggered conformation',
      'Anti conformation, a term more specifically used for larger substituted alkanes'
    ],
    correctIndex: 2,
    explanation: 'The staggered conformation of ethane, with a torsion angle of 60° between the hydrogen atoms on adjacent carbons, represents the arrangement in which these atoms are positioned as far apart as possible.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-14',
    type: 'mcq',
    question: 'The conformation of ethane in which the hydrogen atoms on adjacent carbon atoms are directly aligned (at a torsion angle of 0°) is called the:',
    options: [
      'Eclipsed conformation',
      'Staggered conformation',
      'Gauche conformation, a term more specifically used for larger substituted alkanes',
      'Anti conformation, a term more specifically used for larger substituted alkanes'
    ],
    correctIndex: 0,
    explanation: 'The eclipsed conformation of ethane, with a torsion angle of 0° between the hydrogen atoms on adjacent carbons, represents the arrangement in which these atoms are directly aligned with one another.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-15',
    type: 'mcq',
    question: 'Between the two extreme conformations of ethane, the staggered conformation is generally considered more stable (lower in energy) than the eclipsed conformation mainly due to:',
    options: [
      'Significantly increased torsional strain compared to the eclipsed conformation',
      'Reduced torsional strain (less steric/electronic repulsion between adjacent hydrogen atoms)',
      'A complete absence of any hydrogen atoms in the staggered conformation',
      'The staggered conformation actually possessing a different molecular formula altogether'
    ],
    correctIndex: 1,
    explanation: 'The staggered conformation is more stable than the eclipsed conformation mainly because it minimises torsional strain, reducing the steric/electronic repulsion between adjacent hydrogen atoms that occurs when they are directly aligned in the eclipsed form.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-16',
    type: 'mcq',
    question: 'The free-radical halogenation of an alkane generally proceeds through three distinct mechanistic stages: initiation, propagation, and:',
    options: [
      'Elimination, an unrelated mechanistic stage',
      'Addition, an unrelated mechanistic stage in the context of a substitution reaction',
      'Hydration, an unrelated mechanistic stage in the context of halogenation',
      'Termination'
    ],
    correctIndex: 3,
    explanation: 'Free-radical halogenation proceeds through the sequential stages of initiation, propagation, and termination.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-17',
    type: 'mcq',
    question: 'The initiation step of free-radical halogenation typically involves the homolytic cleavage of the halogen molecule (X2), triggered by exposure to:',
    options: [
      'Complete darkness and extremely low temperatures, exclusively',
      'Heat or light (ultraviolet radiation)',
      'Strong acids, exclusively, with no relevance to heat or light',
      'Strong bases, exclusively, with no relevance to heat or light'
    ],
    correctIndex: 1,
    explanation: 'The initiation step of free-radical halogenation typically involves homolytic cleavage of the halogen molecule, triggered by exposure to heat or light (UV radiation), generating two halogen radicals.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-18',
    type: 'mcq',
    question: 'The propagation stage of free-radical halogenation involves a repeating cycle of steps, in which a halogen radical abstracts a hydrogen atom from the alkane, and the resulting alkyl radical subsequently reacts with another molecule of:',
    options: [
      'A completely unrelated, inert gas, which plays no actual role in the mechanism',
      'Pure oxygen gas, which is not typically involved in standard free-radical halogenation',
      'Water, which is not typically involved in standard free-radical halogenation',
      'The halogen (X2), regenerating a new halogen radical and continuing the chain'
    ],
    correctIndex: 3,
    explanation: 'During propagation, the alkyl radical formed from hydrogen abstraction reacts with another molecule of the halogen (X2), forming the alkyl halide product and regenerating a new halogen radical to continue the chain reaction.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-19',
    type: 'mcq',
    question: 'The relative reactivity of different hydrogen atoms toward free-radical halogenation generally follows the order:',
    options: [
      'Tertiary > Secondary > Primary',
      'Primary > Secondary > Tertiary',
      'All hydrogen atoms show exactly identical reactivity, regardless of their substitution pattern',
      'Secondary > Tertiary > Primary'
    ],
    correctIndex: 0,
    explanation: 'The relative reactivity of hydrogen atoms toward free-radical halogenation generally follows the order Tertiary > Secondary > Primary, correlating with the relative stability of the corresponding radical intermediates formed.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-20',
    type: 'mcq',
    question: 'Among the halogens, the relative reactivity toward free-radical halogenation of alkanes generally follows the order:',
    options: [
      'I2 > Br2 > Cl2 > F2',
      'All halogens show exactly identical reactivity toward alkanes, regardless of their identity',
      'F2 > Cl2 > Br2 > I2',
      'Cl2 > F2 > I2 > Br2'
    ],
    correctIndex: 2,
    explanation: 'The relative reactivity of halogens toward alkane halogenation generally follows the order F2 > Cl2 > Br2 > I2, though fluorination is often too violent to be practically useful, and iodination is typically too slow/reversible.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-21',
    type: 'mcq',
    question: 'In practice, fluorination of alkanes is generally considered too reactive/violent to be synthetically useful, while iodination is generally considered too:',
    options: [
      'Slow and reversible to be practically useful',
      'Fast and irreversible, making it impossible to control',
      'Completely non-reactive under any conditions whatsoever',
      'Explosive, in a manner identical to fluorination'
    ],
    correctIndex: 0,
    explanation: 'While fluorination is often too violently reactive to control, iodination is generally too slow and reversible to be a practically useful method, making chlorination and bromination the most synthetically valuable halogenation reactions for alkanes.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-22',
    type: 'mcq',
    question: 'Complete combustion of an alkane in excess oxygen produces carbon dioxide, water, and a significant release of:',
    options: [
      'Only cold, ambient-temperature products, with no release of heat at all',
      'Pure nitrogen gas, unrelated to standard alkane combustion',
      'Heat energy',
      'Solid carbon soot exclusively, with no gaseous products formed at all'
    ],
    correctIndex: 2,
    explanation: 'Complete combustion of an alkane in excess oxygen is a highly exothermic process, producing carbon dioxide, water, and a substantial release of heat energy, which is why alkanes are widely used as fuels.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-23',
    type: 'mcq',
    question: 'The thermal decomposition of higher alkanes into smaller, more useful alkanes and alkenes, carried out in the absence of air, is called:',
    options: [
      'Hydrogenation, an unrelated process involving addition of hydrogen',
      'Pyrolysis (cracking)',
      'Halogenation, an unrelated substitution process',
      'Esterification, an entirely unrelated reaction type'
    ],
    correctIndex: 1,
    explanation: 'Pyrolysis (also called cracking) refers to the thermal decomposition of higher alkanes into smaller alkanes and alkenes, an industrially important process in petroleum refining.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-24',
    type: 'mcq',
    question: 'The carbon atoms directly involved in the carbon-carbon double bond of an alkene are characteristically:',
    options: [
      'sp3 hybridised, with a tetrahedral geometry',
      'sp hybridised, with a linear geometry',
      'Not hybridised at all',
      'sp2 hybridised, with a trigonal planar geometry'
    ],
    correctIndex: 3,
    explanation: 'The carbon atoms of a C=C double bond in an alkene are sp2 hybridised, giving a trigonal planar geometry with bond angles of approximately 120°.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-25',
    type: 'mcq',
    question: 'The carbon-carbon double bond length in a typical alkene is generally found to be:',
    options: [
      'Longer than a typical carbon-carbon single bond',
      'Exactly identical in length to a typical carbon-carbon single bond',
      'Longer than a typical carbon-carbon triple bond',
      'Shorter than a typical carbon-carbon single bond'
    ],
    correctIndex: 3,
    explanation: 'The C=C double bond of an alkene is generally shorter than a typical C-C single bond, reflecting the additional pi-bonding character that draws the two carbon nuclei closer together.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-26',
    type: 'mcq',
    question: 'Dehydrohalogenation of an alkyl halide, using alcoholic KOH, generally follows a regiochemical preference described by:',
    options: [
      'A rule favouring exclusively the least substituted, least stable alkene, in every case',
      'Saytzeff\'s (Zaitsev\'s) Rule, favouring the more substituted, more stable alkene',
      'No predictable regiochemical pattern whatsoever',
      'Markovnikov\'s rule, which specifically applies to addition reactions, not elimination'
    ],
    correctIndex: 1,
    explanation: 'Dehydrohalogenation of an alkyl halide with alcoholic KOH generally follows Saytzeff\'s (Zaitsev\'s) Rule, favouring the more substituted (more thermodynamically stable) alkene as the major product.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-27',
    type: 'mcq',
    question: 'Acid-catalysed dehydration of an alcohol, using concentrated sulphuric or phosphoric acid, is another common method for preparing:',
    options: [
      'Alkanes, exclusively, with no unsaturation introduced',
      'Alkynes, exclusively',
      'Alkenes',
      'Arenes, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Acid-catalysed dehydration of an alcohol (removing a molecule of water) is a standard method for preparing alkenes.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-28',
    type: 'mcq',
    question: 'The reactivity of alcohols toward acid-catalysed dehydration generally follows the order:',
    options: [
      'Tertiary > Secondary > Primary',
      'Primary > Secondary > Tertiary',
      'All alcohols show exactly identical reactivity toward dehydration',
      'Secondary > Tertiary > Primary'
    ],
    correctIndex: 0,
    explanation: 'Alcohol dehydration reactivity generally follows the order Tertiary > Secondary > Primary, correlating with the relative ease of forming the corresponding carbocation intermediate involved in the reaction mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-29',
    type: 'mcq',
    question: 'Selective (partial) hydrogenation of an alkyne, using Lindlar\'s catalyst (palladium on calcium carbonate, poisoned with agents such as sulphur compounds or quinoline), produces predominantly a:',
    options: [
      'Cis-alkene',
      'Trans-alkene',
      'Fully saturated alkane, with no unsaturation remaining at all',
      'Mixture of cis and trans alkenes in exactly equal proportions'
    ],
    correctIndex: 0,
    explanation: 'Lindlar\'s catalyst is specifically used to achieve syn (cis) addition of hydrogen to an alkyne, stopping selectively at the alkene stage and producing predominantly the cis-alkene.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-30',
    type: 'mcq',
    question: 'In contrast to Lindlar\'s catalyst, partial reduction of an alkyne using sodium metal dissolved in liquid ammonia generally produces predominantly a:',
    options: [
      'Cis-alkene, identical to the outcome of Lindlar\'s catalyst',
      'Fully saturated alkane, with no unsaturation remaining at all',
      'Trans-alkene',
      'A completely different, unrelated product with no relation to the alkyne starting material'
    ],
    correctIndex: 2,
    explanation: 'Dissolving-metal reduction of an alkyne using sodium in liquid ammonia proceeds via an anti addition mechanism, producing predominantly the trans-alkene, in contrast to the cis-selectivity of Lindlar\'s catalyst.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-31',
    type: 'mcq',
    question: 'The characteristic reaction type undergone by the electron-rich carbon-carbon double bond of an alkene is called:',
    options: [
      'Nucleophilic addition',
      'Electrophilic substitution',
      'Nucleophilic substitution',
      'Electrophilic addition'
    ],
    correctIndex: 3,
    explanation: 'Alkenes characteristically undergo electrophilic addition reactions, since the electron-rich pi bond attracts electrophilic species.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-32',
    type: 'mcq',
    question: 'Markovnikov\'s rule, used to predict the regiochemical outcome of adding an unsymmetrical reagent (such as HX) to an unsymmetrical alkene, states that the negative (halide) portion of the reagent adds to the carbon atom bearing:',
    options: [
      'More hydrogen atoms (i.e., the less substituted carbon)',
      'Fewer hydrogen atoms (i.e., the more substituted carbon)',
      'Exactly the same number of hydrogen atoms as the other alkene carbon, with no distinction possible',
      'No hydrogen atoms whatsoever, under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'Markovnikov\'s rule states that, in the addition of HX to an unsymmetrical alkene, the halide adds preferentially to the carbon already bearing fewer hydrogen atoms (the more substituted carbon), while H adds to the carbon with more hydrogens.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-33',
    type: 'mcq',
    question: 'The regiochemical outcome described by Markovnikov\'s rule is generally explained mechanistically by the preferential formation of the more stable:',
    options: [
      'Carbanion intermediate',
      'Free radical intermediate',
      'Neutral, uncharged intermediate',
      'Carbocation intermediate'
    ],
    correctIndex: 3,
    explanation: 'Markovnikov addition proceeds via a carbocation intermediate, and the observed regiochemistry reflects the preferential formation of the more stable (more substituted) carbocation during the reaction.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-34',
    type: 'mcq',
    question: 'The addition of water to an alkene (acid-catalysed hydration), using dilute sulphuric acid, generally follows:',
    options: [
      'Markovnikov\'s rule, producing the more substituted alcohol as the major product',
      'Anti-Markovnikov regiochemistry exclusively, regardless of conditions',
      'No predictable regiochemical pattern whatsoever',
      'Complete reduction to an alkane, rather than formation of an alcohol'
    ],
    correctIndex: 0,
    explanation: 'Acid-catalysed hydration of an alkene proceeds via a carbocation mechanism, following Markovnikov\'s rule and yielding the more substituted alcohol as the major product.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-35',
    type: 'mcq',
    question: 'The addition of halogens (such as Br2) to an alkene generally proceeds through a cyclic intermediate called a:',
    options: [
      'Simple carbanion intermediate, with no cyclic character at all',
      'Halonium ion (such as a bromonium ion)',
      'Simple free radical intermediate, unrelated to the ionic addition mechanism',
      'Grignard intermediate, an entirely unrelated organometallic species'
    ],
    correctIndex: 1,
    explanation: 'The addition of halogens like Br2 to an alkene proceeds through a cyclic halonium ion intermediate (such as a bromonium ion), which is subsequently opened by nucleophilic attack from the halide ion, resulting in overall anti addition.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-36',
    type: 'mcq',
    question: 'The anti-Markovnikov addition of HBr to an unsymmetrical alkene, occurring specifically in the presence of peroxides, is known as the:',
    options: [
      'Markovnikov effect, exactly as in the standard rule',
      'Zaitsev effect, an unrelated concept concerning elimination reactions',
      'Peroxide (Kharasch) effect',
      'Hückel effect, an unrelated concept concerning aromaticity'
    ],
    correctIndex: 2,
    explanation: 'The reversal of the expected Markovnikov orientation, observed specifically for HBr addition in the presence of peroxides, is known as the peroxide (or Kharasch) effect.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-37',
    type: 'mcq',
    question: 'The peroxide effect, causing anti-Markovnikov addition, is specifically observed for the addition of HBr (and not typically for HCl or HI) mainly because this particular reaction proceeds via a:',
    options: [
      'Purely ionic mechanism, identical to the standard Markovnikov pathway',
      'Mechanism entirely unrelated to either radicals or carbocations',
      'Free-radical mechanism, rather than the standard ionic (carbocation) mechanism',
      'Mechanism that does not actually involve the alkene double bond at all'
    ],
    correctIndex: 2,
    explanation: 'The peroxide effect specifically occurs for HBr addition because the reaction proceeds via a free-radical chain mechanism under these conditions, rather than the standard ionic (carbocation) mechanism responsible for normal Markovnikov addition; this specific radical pathway is generally not favourable for HCl or HI addition.',
    difficulty: 'hard'
  },
  {
    id: 'hydrocarbons-38',
    type: 'mcq',
    question: 'Catalytic hydrogenation of an alkene, using hydrogen gas and a metal catalyst, results in overall:',
    options: [
      'Anti (opposite-face) addition of hydrogen across the double bond',
      'Syn (same-face) addition of hydrogen across the double bond',
      'No addition of hydrogen occurring at all under these conditions',
      'Complete cleavage of the double bond, rather than simple addition'
    ],
    correctIndex: 1,
    explanation: 'Catalytic hydrogenation of an alkene proceeds via syn addition, with both hydrogen atoms delivered to the same face of the double bond from the metal catalyst surface.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-39',
    type: 'mcq',
    question: 'The addition of bromine (Br2) to an alkene, dissolved in an inert solvent such as carbon tetrachloride, is commonly used as a simple qualitative test for the presence of unsaturation, since the reaction results in:',
    options: [
      'Decolourisation of the characteristic reddish-brown colour of bromine',
      'Intensification of the reddish-brown colour of bromine, rather than decolourisation',
      'No visible colour change whatsoever, regardless of the alkene\'s presence',
      'Formation of a bright yellow precipitate, rather than simple decolourisation'
    ],
    correctIndex: 0,
    explanation: 'Since alkenes readily add bromine across their double bond, the characteristic reddish-brown colour of bromine is decolourised, providing a simple qualitative test for the presence of carbon-carbon unsaturation.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-40',
    type: 'mcq',
    question: 'Addition of hydrogen halides (HX) to alkenes proceeds through an ionic, stepwise mechanism, involving the initial formation of a:',
    options: [
      'Carbanion intermediate',
      'Free radical intermediate, in the standard (non-peroxide) mechanism',
      'Neutral, four-membered ring intermediate',
      'Carbocation intermediate'
    ],
    correctIndex: 3,
    explanation: 'The standard (ionic) mechanism for HX addition to an alkene proceeds through the initial protonation of the double bond, forming a carbocation intermediate, which is then captured by the halide nucleophile.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-41',
    type: 'mcq',
    question: 'Treatment of an alkene with cold, dilute, alkaline potassium permanganate solution (Baeyer\'s reagent) results in the formation of a:',
    options: [
      'Vicinal diol (glycol)',
      'Simple alkane, with complete loss of both oxygen atoms',
      'Carboxylic acid directly, bypassing any diol intermediate',
      'Aldehyde directly, bypassing any diol intermediate'
    ],
    correctIndex: 0,
    explanation: 'Cold, dilute alkaline KMnO4 (Baeyer\'s reagent) adds across the double bond of an alkene to give a vicinal diol (glycol), with both hydroxyl groups added to the same face (syn addition).',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-42',
    type: 'mcq',
    question: 'The Baeyer\'s test, using cold dilute alkaline KMnO4, serves as a useful qualitative test for the presence of unsaturation, since a positive result is indicated by the:',
    options: [
      'Intensification of the purple KMnO4 colour, rather than decolourisation',
      'Formation of a bright yellow precipitate, rather than decolourisation',
      'No visible colour change of any kind, regardless of the alkene\'s presence',
      'Decolourisation of the purple KMnO4 solution'
    ],
    correctIndex: 3,
    explanation: 'A positive Baeyer\'s test, indicating the presence of an alkene (or other unsaturation), is signalled by the decolourisation of the characteristic purple colour of the dilute alkaline KMnO4 solution.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-43',
    type: 'mcq',
    question: 'Ozonolysis of an alkene involves initial reaction with ozone (O3) to form an ozonide intermediate, followed by a reductive workup step (such as Zn/H2O), ultimately yielding:',
    options: [
      'Carboxylic acids exclusively, with no aldehyde or ketone ever formed',
      'Carbonyl compounds (aldehydes and/or ketones)',
      'Alcohols exclusively, with no carbonyl compound formed at all',
      'The original, unreacted alkene, with no chemical transformation occurring'
    ],
    correctIndex: 1,
    explanation: 'Ozonolysis cleaves the carbon-carbon double bond of an alkene, and the reductive workup step (such as Zn/H2O) yields carbonyl compounds (aldehydes and/or ketones), depending on the substitution pattern of the original alkene.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-44',
    type: 'mcq',
    question: 'Ozonolysis is a particularly useful synthetic and analytical technique because the specific carbonyl products obtained can be used to determine the:',
    options: [
      'Exact molecular mass of the original alkene, with no reference to double bond position',
      'Exact boiling point of the original alkene, with no reference to double bond position',
      'Exact position of the double bond within the original, unknown alkene structure',
      'Exact colour of the original alkene sample, with no reference to double bond position'
    ],
    correctIndex: 2,
    explanation: 'By carefully identifying the specific carbonyl compounds produced during ozonolysis, chemists can precisely deduce the original position of the carbon-carbon double bond within an otherwise unknown alkene structure.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-45',
    type: 'mcq',
    question: 'In addition to their characteristic addition reactions, alkenes also readily undergo addition polymerisation, in which many alkene monomer units combine to form long-chain molecules called:',
    options: [
      'Monomers, exclusively, with no further combination implied',
      'Polymers',
      'Isomers, an unrelated concept regarding molecular structure',
      'Oligomers, exclusively, implying only a very small number of repeat units'
    ],
    correctIndex: 1,
    explanation: 'Alkenes readily undergo addition polymerisation, in which numerous individual alkene monomer units combine to form large, long-chain polymer molecules (such as the formation of polyethylene from ethylene).',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-46',
    type: 'mcq',
    question: 'The carbon atoms directly involved in the carbon-carbon triple bond of an alkyne are characteristically:',
    options: [
      'sp2 hybridised, with a trigonal planar geometry',
      'sp3 hybridised, with a tetrahedral geometry',
      'sp hybridised, with a linear geometry',
      'Not hybridised at all'
    ],
    correctIndex: 2,
    explanation: 'The carbon atoms of a C≡C triple bond in an alkyne are sp hybridised, giving a linear geometry with a bond angle of 180°.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-47',
    type: 'mcq',
    question: 'Terminal alkynes, in which a hydrogen atom is directly attached to a triple-bonded (sp hybridised) carbon, characteristically show weakly:',
    options: [
      'Acidic character',
      'Basic character, exclusively, with no acidic behaviour observed at all',
      'Neutral character, showing no acid-base behaviour whatsoever',
      'Strongly, extremely acidic character, comparable to a mineral acid'
    ],
    correctIndex: 0,
    explanation: 'Terminal alkynes show weakly acidic character, since the C-H bond involving the sp hybridised carbon is comparatively more polarised (due to the higher s-character of the sp orbital) than corresponding C-H bonds in alkenes or alkanes.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-48',
    type: 'mcq',
    question: 'The comparatively greater acidity of terminal alkynes (compared to alkenes or alkanes) is generally attributed to the higher s-character of the sp hybridised carbon, which causes the bonding electrons to be held:',
    options: [
      'Further away from the carbon nucleus, making the C-H bond less polarised',
      'In a location completely unrelated to the carbon nucleus, with no meaningful effect on bond polarity',
      'Equally distributed at all times, regardless of the type of hybridisation involved',
      'Closer to the carbon nucleus, making the C-H bond more polarised and thus more readily ionisable'
    ],
    correctIndex: 3,
    explanation: 'Since sp hybrid orbitals have greater s-character (and are therefore held closer to the nucleus) compared to sp2 or sp3 orbitals, the C-H bond of a terminal alkyne is more polarised, making its hydrogen atom comparatively more acidic (easily removed).',
    difficulty: 'hard'
  },
  {
    id: 'hydrocarbons-49',
    type: 'mcq',
    question: 'Terminal alkynes react with ammoniacal silver nitrate solution to form a characteristic white precipitate, a useful qualitative test used to distinguish terminal alkynes from:',
    options: [
      'Only other terminal alkynes, with no distinguishing value against any other hydrocarbon type',
      'Only alkenes, with no distinguishing value against alkanes or internal alkynes',
      'Only alkanes, with no distinguishing value against alkenes or internal alkynes',
      'Internal alkynes, alkenes, and alkanes'
    ],
    correctIndex: 3,
    explanation: 'The formation of a white precipitate (silver acetylide) with ammoniacal silver nitrate is a useful qualitative test specific to terminal alkynes, allowing them to be distinguished from internal alkynes, alkenes, and alkanes, none of which give this positive reaction.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-50',
    type: 'mcq',
    question: 'Acetylene (ethyne), the simplest alkyne, is prepared industrially by the reaction of calcium carbide (CaC2) with:',
    options: [
      'Concentrated sulphuric acid, exclusively',
      'Sodium metal, exclusively',
      'Water',
      'Ammonia gas, exclusively'
    ],
    correctIndex: 2,
    explanation: 'The industrial preparation of acetylene (ethyne) involves the reaction of calcium carbide with water, producing acetylene gas along with calcium hydroxide.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-51',
    type: 'mcq',
    question: 'Alkynes can also be prepared through the dehydrohalogenation of vicinal (or geminal) dihalides, typically using excess alcoholic KOH, involving:',
    options: [
      'Two successive elimination reactions',
      'Only a single elimination reaction, insufficient to form the triple bond',
      'Complete reduction rather than any elimination reaction at all',
      'A substitution reaction, rather than an elimination mechanism'
    ],
    correctIndex: 0,
    explanation: 'Preparing an alkyne from a vicinal or geminal dihalide requires two successive dehydrohalogenation (elimination) steps, using excess alcoholic KOH, to introduce both degrees of unsaturation needed to form the triple bond.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-52',
    type: 'mcq',
    question: 'Since alkynes contain two pi bonds within their triple bond, they are generally capable of undergoing addition reactions (such as with H2, X2, or HX):',
    options: [
      'Only once, under any circumstances, regardless of the quantity of reagent used',
      'Twice, if a sufficient (excess) quantity of the reagent is provided',
      'Not at all; alkynes are considered completely unreactive toward standard addition reagents',
      'An unlimited number of times, with no upper limit whatsoever'
    ],
    correctIndex: 1,
    explanation: 'Because alkynes possess two pi bonds, they can generally undergo addition reactions twice (across both pi bonds sequentially), provided a sufficient (excess) quantity of the addition reagent is available.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-53',
    type: 'mcq',
    question: 'Terminal alkynes also react with ammoniacal copper(I) chloride solution to form a characteristic precipitate, distinguishable by its colour from the silver acetylide precipitate, appearing instead as:',
    options: [
      'Red (reddish)',
      'White, identical in colour to the silver acetylide precipitate',
      'Bright blue, an unrelated colour for this specific test',
      'Bright yellow, an unrelated colour for this specific test'
    ],
    correctIndex: 0,
    explanation: 'While the reaction with ammoniacal silver nitrate gives a white precipitate, the analogous reaction of a terminal alkyne with ammoniacal copper(I) chloride gives a characteristically red (reddish) precipitate of copper acetylide.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-54',
    type: 'mcq',
    question: 'The addition of hydrogen halides or halogens to alkynes generally proceeds through similar mechanistic principles to the corresponding addition reactions of alkenes, typically involving:',
    options: [
      'Nucleophilic addition exclusively, with no electrophilic character involved at all',
      'Electrophilic addition, via cationic (or halonium) intermediates',
      'Free-radical addition exclusively, identical in every case to the peroxide-effect mechanism',
      'No definable mechanism at all, since alkynes are considered completely unreactive'
    ],
    correctIndex: 1,
    explanation: 'Similar to alkenes, alkynes generally undergo electrophilic addition reactions with reagents like hydrogen halides or halogens, proceeding through comparable cationic (or halonium ion) intermediates.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-55',
    type: 'mcq',
    question: 'The molecular formula of benzene, the simplest and most fundamental aromatic hydrocarbon, is:',
    options: [
      'C6H12',
      'C6H14',
      'C6H10',
      'C6H6'
    ],
    correctIndex: 3,
    explanation: 'Benzene has the molecular formula C6H6, reflecting its highly unsaturated yet exceptionally stable cyclic structure.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-56',
    type: 'mcq',
    question: 'The Kekulé structure of benzene proposed a cyclic, hexagonal ring with alternating single and double bonds, and the actual structure of benzene is now understood to be best represented as a:',
    options: [
      'Structure identical to a single, fixed Kekulé form, with no resonance involved at all',
      'Completely non-cyclic, open-chain structure, contrary to the Kekulé proposal',
      'Resonance hybrid of the two equivalent Kekulé structures (and related contributing forms)',
      'Structure entirely lacking any pi electrons whatsoever'
    ],
    correctIndex: 2,
    explanation: 'The actual electronic structure of benzene is best represented as a resonance hybrid, combining the contributions of the two equivalent Kekulé structures (and other minor contributing forms), rather than a single, fixed alternating single-double bond arrangement.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-57',
    type: 'mcq',
    question: 'Due to resonance delocalisation of the pi electrons across all six carbon atoms, all carbon-carbon bond lengths in benzene are found to be:',
    options: [
      'Alternating strictly between distinct short (double) and long (single) bond lengths, exactly as the simple Kekulé structure would suggest',
      'All exactly equal to a typical carbon-carbon single bond length, with no shortening at all',
      'Equal, and intermediate in length between a typical single and double bond',
      'All exactly equal to a typical carbon-carbon triple bond length'
    ],
    correctIndex: 2,
    explanation: 'Due to complete delocalisation of the pi electrons around the ring, all six carbon-carbon bonds in benzene are of equal length, intermediate between a typical single bond and a typical double bond length.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-58',
    type: 'mcq',
    question: 'Each carbon atom in the benzene ring is:',
    options: [
      'sp3 hybridised, contributing to a non-planar, puckered ring structure',
      'sp hybridised, contributing to a linear molecular geometry',
      'Not hybridised at all',
      'sp2 hybridised, contributing to the overall planar structure of the molecule'
    ],
    correctIndex: 3,
    explanation: 'Each carbon atom in benzene is sp2 hybridised, contributing to the overall planar, hexagonal structure of the molecule.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-59',
    type: 'mcq',
    question: 'Hückel\'s rule, used to determine whether a cyclic, planar, fully conjugated molecule is aromatic, states that such a system must contain a total number of pi electrons equal to:',
    options: [
      '(4n + 2), where n is a whole number (0, 1, 2, ...)',
      '(4n), with no addition of 2 required',
      'Exactly 4 pi electrons, regardless of ring size',
      'An odd number of pi electrons, in every case'
    ],
    correctIndex: 0,
    explanation: 'Hückel\'s rule states that a planar, cyclic, fully conjugated system is aromatic if it contains (4n + 2) pi electrons, where n is a non-negative whole number.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-60',
    type: 'mcq',
    question: 'Applying Hückel\'s rule to benzene, which contains six pi electrons (corresponding to n=1 in the 4n+2 formula), confirms that benzene is:',
    options: [
      'Non-aromatic',
      'Aromatic',
      'Anti-aromatic, a specifically destabilised electronic configuration',
      'Completely unrelated to the concept of aromaticity, since Hückel\'s rule does not apply to six-membered rings'
    ],
    correctIndex: 1,
    explanation: 'Since benzene\'s six pi electrons satisfy the Hückel (4n+2) rule with n=1, this confirms benzene\'s aromatic character, consistent with its exceptional stability.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-61',
    type: 'mcq',
    question: 'The exceptional thermodynamic stability of benzene, compared to a hypothetical non-delocalised structure with alternating single and double bonds, is generally attributed to the significant:',
    options: [
      'Complete absence of any pi electrons within the benzene ring',
      'Resonance (delocalisation) energy arising from the extensive pi electron delocalisation around the ring',
      'Presence of an unusually large number of hydrogen atoms compared to other hydrocarbons of similar size',
      'Exceptionally weak carbon-carbon bonds throughout the ring structure'
    ],
    correctIndex: 1,
    explanation: 'The remarkable stability of benzene compared to a hypothetical non-delocalised (Kekulé-like) structure is attributed to the significant resonance (delocalisation) energy gained from the extensive pi electron delocalisation around the aromatic ring.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-62',
    type: 'mcq',
    question: 'Benzene can be prepared by passing acetylene (ethyne) through a red-hot iron tube, a process involving the:',
    options: [
      'Cyclic trimerisation of three acetylene molecules',
      'Simple, direct dimerisation of two acetylene molecules, without any further combination',
      'Complete decomposition of acetylene into elemental carbon and hydrogen gas',
      'Addition of hydrogen to acetylene, forming a saturated, non-cyclic product'
    ],
    correctIndex: 0,
    explanation: 'Passing acetylene through a red-hot iron tube induces the cyclic trimerisation of three acetylene molecules, forming benzene.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-63',
    type: 'mcq',
    question: 'Benzene can also be prepared by the decarboxylation of sodium benzoate, achieved by heating with:',
    options: [
      'Concentrated sulphuric acid, exclusively',
      'Ammoniacal silver nitrate, exclusively',
      'Soda lime',
      'Lindlar\'s catalyst, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Heating sodium benzoate with soda lime induces decarboxylation, releasing carbon dioxide and yielding benzene.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-64',
    type: 'mcq',
    question: 'The characteristic reaction type undergone by benzene and other aromatic compounds, which allows the ring to preserve its aromatic stability, is called:',
    options: [
      'Electrophilic addition, which would disrupt the ring\'s aromaticity',
      'Nucleophilic substitution, atypical for standard, unactivated benzene rings',
      'Free-radical addition, atypical for standard aromatic substitution reactions',
      'Electrophilic aromatic substitution'
    ],
    correctIndex: 3,
    explanation: 'Benzene and other aromatic compounds characteristically undergo electrophilic aromatic substitution reactions, which replace a ring hydrogen with an electrophile while preserving the overall aromatic stability of the ring.',
    difficulty: 'easy'
  },
  {
    id: 'hydrocarbons-65',
    type: 'mcq',
    question: 'The general mechanism of electrophilic aromatic substitution involves initial attack of the electrophile on the electron-rich benzene ring, forming a resonance-stabilised, non-aromatic intermediate called the:',
    options: [
      'Halonium ion, a term specifically associated with alkene halogenation, not aromatic substitution',
      'Grignard intermediate, an entirely unrelated organometallic species',
      'Acylium ion, a term specifically associated only with Friedel-Crafts acylation, not the general EAS mechanism',
      'Arenium ion (sigma complex)'
    ],
    correctIndex: 3,
    explanation: 'The key intermediate formed during electrophilic aromatic substitution, following initial electrophilic attack on the ring, is the resonance-stabilised, non-aromatic arenium ion (also called a sigma complex).',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-66',
    type: 'mcq',
    question: 'Following formation of the arenium ion intermediate, the aromaticity of the ring is restored through the loss of a proton (H+), completing the electrophilic aromatic substitution and yielding the:',
    options: [
      'Original, unreacted starting benzene, with no net transformation occurring at all',
      'Substituted aromatic product',
      'A fully saturated, non-aromatic cyclohexane derivative',
      'An entirely different molecule, with no aromatic ring remaining whatsoever'
    ],
    correctIndex: 1,
    explanation: 'The final step of electrophilic aromatic substitution involves loss of a proton from the arenium ion intermediate, restoring the ring\'s aromaticity and yielding the final substituted aromatic product.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-67',
    type: 'mcq',
    question: 'Nitration of benzene, using a mixture of concentrated nitric acid and concentrated sulphuric acid, generates the active electrophile known as the:',
    options: [
      'Nitronium ion (NO2+)',
      'Sulphonium ion, associated instead with sulphonation, not nitration',
      'Acylium ion, associated instead with Friedel-Crafts acylation, not nitration',
      'Halonium ion, associated instead with halogenation, not nitration'
    ],
    correctIndex: 0,
    explanation: 'Nitration of benzene generates the nitronium ion (NO2+) as the active electrophile, formed through the reaction of concentrated nitric and sulphuric acids.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-68',
    type: 'mcq',
    question: 'Halogenation of benzene, using a halogen (such as Cl2 or Br2) in the presence of a Lewis acid catalyst (such as FeCl3 or AlCl3), proceeds via generation of the active electrophile:',
    options: [
      'A halide anion (X-), which would not itself function as an electrophile in this context',
      'The nitronium ion, associated instead with nitration, not halogenation',
      'A halogen cation (X+), facilitated by the Lewis acid catalyst',
      'The acylium ion, associated instead with Friedel-Crafts acylation, not halogenation'
    ],
    correctIndex: 2,
    explanation: 'Halogenation of benzene requires a Lewis acid catalyst to help generate a sufficiently electrophilic halogen species (effectively a halogen cation, X+), enabling the electrophilic aromatic substitution to proceed.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-69',
    type: 'mcq',
    question: 'Friedel-Crafts alkylation of benzene, using an alkyl halide and anhydrous AlCl3, is complicated by the tendency toward polyalkylation, since the initially formed alkylbenzene product is:',
    options: [
      'More activated (more electron-rich) toward further electrophilic substitution than the original benzene',
      'Completely deactivated toward any further electrophilic substitution, preventing polyalkylation entirely',
      'Identical in reactivity to the original, unsubstituted benzene, with no change in reactivity at all',
      'Converted immediately into an entirely different, unrelated functional group'
    ],
    correctIndex: 0,
    explanation: 'Since alkyl groups are electron-donating (activating), the alkylbenzene product of Friedel-Crafts alkylation is more reactive toward further electrophilic substitution than the starting benzene, often leading to problematic polyalkylation.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-70',
    type: 'mcq',
    question: 'A key advantage of Friedel-Crafts acylation over Friedel-Crafts alkylation is that the resulting aryl ketone product is generally deactivated toward further substitution (due to the electron-withdrawing carbonyl group), thereby minimising the problem of:',
    options: [
      'Carbocation rearrangement, which acylation is also notably free from, but which is not the primary advantage referenced here',
      'Insufficient reactivity, preventing the reaction from proceeding at all',
      'Polysubstitution',
      'Loss of the aromatic ring\'s structural integrity'
    ],
    correctIndex: 2,
    explanation: 'Since the acyl group is deactivating (electron-withdrawing), the aryl ketone product of Friedel-Crafts acylation is less reactive than the starting benzene, effectively minimising the problem of polysubstitution that commonly plagues Friedel-Crafts alkylation.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-71',
    type: 'mcq',
    question: 'Another key advantage of Friedel-Crafts acylation over alkylation is that the electrophilic acylium ion intermediate is comparatively well stabilised by resonance, meaning that, unlike simple alkyl carbocations, it generally does not undergo:',
    options: [
      'Any reaction with the benzene ring whatsoever, preventing acylation from proceeding at all',
      'Skeletal rearrangement',
      'Loss of the carbonyl oxygen atom, prior to reacting with the ring',
      'Formation of any resonance structures whatsoever'
    ],
    correctIndex: 1,
    explanation: 'Since the acylium ion intermediate used in Friedel-Crafts acylation is well stabilised by resonance (unlike many simple alkyl carbocations), it generally does not undergo the skeletal rearrangements that can complicate Friedel-Crafts alkylation reactions.',
    difficulty: 'hard'
  },
  {
    id: 'hydrocarbons-72',
    type: 'mcq',
    question: 'Substituents already present on a benzene ring, such as -OH, -NH2, or alkyl groups, that activate the ring toward further electrophilic substitution and direct incoming electrophiles predominantly to the ortho and para positions, are classified as:',
    options: [
      'Meta-directing, deactivating groups',
      'Groups with no directing influence whatsoever on the ring',
      'Groups that completely prevent any further electrophilic substitution from occurring',
      'Ortho/para-directing, activating groups'
    ],
    correctIndex: 3,
    explanation: 'Substituents like -OH, -NH2, and alkyl groups are ortho/para-directing and activating, generally donating electron density to the ring and directing new substituents to the ortho and para positions.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-73',
    type: 'mcq',
    question: 'Substituents such as -NO2, -CN, or -COOH, which deactivate the benzene ring toward further electrophilic substitution and direct incoming electrophiles predominantly to the meta position, are classified as:',
    options: [
      'Ortho/para-directing, activating groups',
      'Groups with no directing influence whatsoever on the ring',
      'Groups that make the ring more, rather than less, reactive toward electrophilic substitution',
      'Meta-directing, deactivating groups'
    ],
    correctIndex: 3,
    explanation: 'Substituents like -NO2, -CN, and -COOH are meta-directing and deactivating, generally withdrawing electron density from the ring and directing new substituents to the meta position.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-74',
    type: 'mcq',
    question: 'Halogen substituents on a benzene ring represent a notable exception to the general pattern, since they are:',
    options: [
      'Meta-directing, but overall activating',
      'Ortho/para-directing and strongly activating, identical in behaviour to -OH or -NH2',
      'Ortho/para-directing, but overall deactivating',
      'Meta-directing and strongly deactivating, identical in behaviour to -NO2'
    ],
    correctIndex: 2,
    explanation: 'Halogens are an unusual case, being ortho/para-directing (due to resonance donation) while also being overall deactivating (due to a stronger inductive electron-withdrawing effect), a combination distinct from either typical activating or deactivating substituents.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-75',
    type: 'mcq',
    question: 'The ortho/para-directing character of an activating group such as -OH or -NH2 on a benzene ring arises primarily due to:',
    options: [
      'Resonance donation of a lone pair of electrons into the ring',
      'A purely inductive electron-withdrawing effect, with no resonance donation involved at all',
      'The complete absence of any lone pair of electrons on the substituent atom',
      'Steric hindrance alone, with no electronic contribution whatsoever'
    ],
    correctIndex: 0,
    explanation: 'Ortho/para-directing, activating groups like -OH and -NH2 donate a lone pair of electrons into the aromatic ring through resonance, stabilising the arenium ion intermediate specifically when substitution occurs at the ortho and para positions.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-76',
    type: 'mcq',
    question: 'The meta-directing character of a deactivating group such as -NO2 on a benzene ring arises primarily because this group withdraws electron density from the ring, and substitution at the ortho or para positions would place a partial positive charge:',
    options: [
      'Far away from the substituent, with no destabilising interaction at all',
      'Directly adjacent to the already electron-withdrawing substituent, which is particularly destabilising',
      'Exactly at the meta position itself, contradicting the actual observed directing pattern',
      'Nowhere within the ring at all, since no charged intermediate is actually involved'
    ],
    correctIndex: 1,
    explanation: 'Since the -NO2 group withdraws electron density from the ring, ortho/para substitution would place a destabilising partial positive charge in the arenium ion intermediate directly adjacent to (or in resonance conjugation with) the already electron-poor substituent; substitution at the meta position avoids this particularly unfavourable arrangement, explaining the observed meta-directing behaviour.',
    difficulty: 'hard'
  },
  {
    id: 'hydrocarbons-77',
    type: 'mcq',
    question: 'Polycyclic aromatic hydrocarbons (PAHs), such as benzopyrene, are commonly formed during the incomplete combustion of organic matter (including tobacco, coal, and wood), and are of significant health concern mainly because many of them exhibit:',
    options: [
      'Completely harmless, entirely benign properties, with no health risk whatsoever',
      'Carcinogenic (cancer-causing) properties',
      'Strong antibiotic properties, unrelated to any cancer risk',
      'Strong antioxidant properties, unrelated to any cancer risk'
    ],
    correctIndex: 1,
    explanation: 'Polycyclic aromatic hydrocarbons (PAHs), formed during incomplete combustion of organic matter, are of significant health concern because many of them have demonstrated carcinogenic properties.',
    difficulty: 'medium'
  },
  {
    id: 'hydrocarbons-78',
    type: 'mcq',
    question: 'Sulphonation of benzene, using fuming sulphuric acid (oleum), generates the electrophile SO3 and, unlike nitration or halogenation, is notable for being a reaction that is:',
    options: [
      'Reversible',
      'Completely irreversible, identical to nitration and halogenation',
      'Impossible to carry out under any laboratory conditions',
      'Unrelated to the general mechanism of electrophilic aromatic substitution'
    ],
    correctIndex: 0,
    explanation: 'Sulphonation of benzene with fuming sulphuric acid is notable for being a reversible reaction, distinguishing it from typically irreversible electrophilic aromatic substitutions like nitration and halogenation.',
    difficulty: 'medium'
  },
];

export default questions;