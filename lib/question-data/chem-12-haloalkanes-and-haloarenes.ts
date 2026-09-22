import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Haloalkanes and Haloarenes
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'haloalkanes-and-haloarenes-1',
    type: 'mcq',
    question: 'Haloalkanes, in which the halogen atom is attached to an sp3 hybridised carbon atom, are structurally distinct from haloarenes, in which the halogen is attached to a carbon atom that is:',
    options: [
      'sp hybridised, as in alkynes',
      'sp2 hybridised (part of an aromatic ring)',
      'Not hybridised at all',
      'sp3 hybridised, identical to haloalkanes'
    ],
    correctIndex: 1,
    explanation: 'Haloalkanes have the halogen attached to an sp3 carbon, whereas haloarenes have the halogen attached to an sp2 hybridised carbon that is part of an aromatic ring.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-2',
    type: 'mcq',
    question: 'An alkyl halide in which the halogen-bearing carbon is attached to only one other carbon atom is classified as a:',
    options: [
      'Secondary (2°) alkyl halide',
      'Tertiary (3°) alkyl halide',
      'Vinylic halide',
      'Primary (1°) alkyl halide'
    ],
    correctIndex: 3,
    explanation: 'A primary alkyl halide has the halogen attached to a carbon that is bonded to only one other carbon atom.',
    difficulty: 'easy'
  },
  {
    id: 'haloalkanes-and-haloarenes-3',
    type: 'mcq',
    question: 'An alkyl halide in which the halogen-bearing carbon is attached to three other carbon atoms is classified as a:',
    options: [
      'Tertiary (3°) alkyl halide',
      'Primary (1°) alkyl halide',
      'Secondary (2°) alkyl halide',
      'Aryl halide'
    ],
    correctIndex: 0,
    explanation: 'A tertiary alkyl halide has the halogen attached to a carbon that is bonded to three other carbon atoms.',
    difficulty: 'easy'
  },
  {
    id: 'haloalkanes-and-haloarenes-4',
    type: 'mcq',
    question: 'A halide in which the halogen is attached to an sp3 hybridised carbon atom directly adjacent to a carbon-carbon double bond is classified as a(n):',
    options: [
      'Vinylic halide',
      'Benzylic halide',
      'Allylic halide',
      'Aryl halide'
    ],
    correctIndex: 2,
    explanation: 'An allylic halide has the halogen on an sp3 carbon that is directly attached to a carbon involved in a carbon-carbon double bond.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-5',
    type: 'mcq',
    question: 'A halide in which the halogen is attached to an sp3 hybridised carbon atom directly attached to an aromatic ring is classified as a(n):',
    options: [
      'Allylic halide',
      'Vinylic halide',
      'Benzylic halide',
      'Aryl halide'
    ],
    correctIndex: 2,
    explanation: 'A benzylic halide has the halogen attached to an sp3 carbon that is directly bonded to an aromatic ring.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-6',
    type: 'mcq',
    question: 'A halide in which the halogen atom is attached directly to a carbon atom that is itself part of a carbon-carbon double bond is classified as a:',
    options: [
      'Vinylic halide',
      'Allylic halide',
      'Benzylic halide',
      'Primary alkyl halide'
    ],
    correctIndex: 0,
    explanation: 'A vinylic halide has the halogen atom attached directly to an sp2 carbon that is part of a carbon-carbon double bond.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-7',
    type: 'mcq',
    question: 'Compounds containing a halogen atom attached directly to a carbon atom of an aromatic (benzene) ring are called:',
    options: [
      'Alkyl halides',
      'Allylic halides',
      'Vinylic halides',
      'Aryl halides (haloarenes)'
    ],
    correctIndex: 3,
    explanation: 'Aryl halides (haloarenes) have the halogen atom bonded directly to a carbon of an aromatic ring system.',
    difficulty: 'easy'
  },
  {
    id: 'haloalkanes-and-haloarenes-8',
    type: 'mcq',
    question: 'In a carbon-halogen (C-X) bond, since the halogen atom is generally more electronegative than carbon, the bond is polarised such that carbon bears a partial:',
    options: [
      'Negative charge (δ-), while the halogen bears a partial positive charge (δ+)',
      'Positive charge (δ+), while the halogen bears a partial negative charge (δ-)',
      'Charge of exactly zero, since the bond is considered completely non-polar',
      'Full positive charge of +1, identical to an ionic bond'
    ],
    correctIndex: 1,
    explanation: 'Since halogens are more electronegative than carbon, the C-X bond is polarised with carbon carrying a partial positive charge (δ+) and the halogen carrying a partial negative charge (δ-).',
    difficulty: 'easy'
  },
  {
    id: 'haloalkanes-and-haloarenes-9',
    type: 'mcq',
    question: 'Considering the series of carbon-halogen bonds (C-F, C-Cl, C-Br, C-I), the bond length generally shows which trend as the halogen atom becomes larger (moving down the group)?',
    options: [
      'Bond length decreases',
      'Bond length remains exactly constant, regardless of the halogen',
      'Bond length becomes negative, which is not physically meaningful',
      'Bond length increases'
    ],
    correctIndex: 3,
    explanation: 'As the size of the halogen atom increases from F to I, the corresponding C-X bond length generally increases.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-10',
    type: 'mcq',
    question: 'Considering the series of carbon-halogen bonds (C-F, C-Cl, C-Br, C-I), the bond enthalpy (bond strength) generally shows which trend as the halogen atom becomes larger?',
    options: [
      'Bond enthalpy increases',
      'Bond enthalpy decreases',
      'Bond enthalpy remains exactly constant, regardless of the halogen',
      'Bond enthalpy becomes negative, which is not physically meaningful'
    ],
    correctIndex: 1,
    explanation: 'As the halogen atom becomes larger (moving from F to I), the corresponding C-X bond enthalpy generally decreases, reflecting a weaker bond.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-11',
    type: 'mcq',
    question: 'Among the various carbon-halogen bonds, the C-F bond is generally considered to be the:',
    options: [
      'Strongest (with the highest bond enthalpy)',
      'Weakest (with the lowest bond enthalpy)',
      'Exactly equal in strength to the C-I bond',
      'Non-polar, unlike the other C-X bonds'
    ],
    correctIndex: 0,
    explanation: 'The C-F bond is generally the strongest among the carbon-halogen bonds, owing to the small size of fluorine and effective orbital overlap.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-12',
    type: 'mcq',
    question: 'Among the various carbon-halogen bonds, the C-I bond is generally considered to be the:',
    options: [
      'Strongest (with the highest bond enthalpy)',
      'Exactly equal in strength to the C-F bond',
      'Weakest (with the lowest bond enthalpy)',
      'The only truly non-polar C-X bond'
    ],
    correctIndex: 2,
    explanation: 'The C-I bond is generally the weakest among the carbon-halogen bonds, owing to the large size of iodine and comparatively poorer orbital overlap.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-13',
    type: 'mcq',
    question: 'The conversion of an alcohol into the corresponding alkyl chloride using thionyl chloride (SOCl2) is generally the preferred method mainly because the by-products of this reaction are:',
    options: [
      'Solid precipitates that must be filtered off with great difficulty',
      'Highly explosive compounds, requiring extreme caution',
      'Gases (SO2 and HCl), which readily escape, leaving a relatively pure alkyl halide',
      'Radioactive isotopes, requiring special disposal procedures'
    ],
    correctIndex: 2,
    explanation: 'The reaction of an alcohol with thionyl chloride produces SO2 and HCl as gaseous by-products, which readily escape the reaction mixture, yielding a comparatively pure alkyl chloride product.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-14',
    type: 'mcq',
    question: 'The reaction of an alcohol with phosphorus pentachloride (PCl5) is a commonly used method for preparing:',
    options: [
      'Alkyl chlorides',
      'Alkyl fluorides exclusively',
      'Alkyl iodides exclusively',
      'Aryl halides exclusively'
    ],
    correctIndex: 0,
    explanation: 'Treatment of an alcohol with phosphorus pentachloride (PCl5) is a standard laboratory method for converting the alcohol into the corresponding alkyl chloride.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-15',
    type: 'mcq',
    question: 'The direct reaction of an alcohol with a hydrogen halide (HX) to form an alkyl halide generally proceeds most readily (fastest) for which type of alcohol?',
    options: [
      'Primary alcohols',
      'Tertiary alcohols',
      'Secondary alcohols, faster than both primary and tertiary',
      'Methanol, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Tertiary alcohols generally react most readily with hydrogen halides, largely due to the relative ease of forming the more stable tertiary carbocation intermediate involved in this substitution.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-16',
    type: 'mcq',
    question: 'The general reaction between an alcohol and a hydrogen halide (HX) to produce an alkyl halide can be represented as:',
    options: [
      'R-OH + HX → R-OH-X, with no water produced at all',
      'R-X + H2O → R-OH + HX, representing the exact reverse reaction only',
      'R-OH + HX → R2O + HX2, an entirely different product',
      'R-OH + HX → R-X + H2O'
    ],
    correctIndex: 3,
    explanation: 'The reaction of an alcohol with a hydrogen halide substitutes the hydroxyl group with the halogen, releasing water as a by-product: R-OH + HX → R-X + H2O.',
    difficulty: 'easy'
  },
  {
    id: 'haloalkanes-and-haloarenes-17',
    type: 'mcq',
    question: 'Phosphorus trichloride (PCl3), when reacted with an alcohol, similarly serves as a reagent for converting the alcohol into the corresponding:',
    options: [
      'Alkyl bromide',
      'Alkyl chloride',
      'Alkyl iodide',
      'Aryl halide'
    ],
    correctIndex: 1,
    explanation: 'Phosphorus trichloride (PCl3) is another reagent used to convert alcohols into the corresponding alkyl chlorides.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-18',
    type: 'mcq',
    question: 'The free-radical halogenation of alkanes, involving reaction with a halogen (such as Cl2) under conditions like heat or ultraviolet light, is a method used to prepare:',
    options: [
      'Only haloarenes, with no possibility of forming haloalkanes',
      'Only alcohols, with no halogen incorporated into the product',
      'Only carboxylic acids',
      'Haloalkanes'
    ],
    correctIndex: 3,
    explanation: 'Free-radical halogenation of alkanes, typically initiated by heat or UV light, is a classic method for preparing haloalkanes.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-19',
    type: 'mcq',
    question: 'N-Bromosuccinimide (NBS) is a specialised reagent commonly used to achieve selective halogenation at the allylic or benzylic position, generating the corresponding:',
    options: [
      'Allylic or benzylic bromide',
      'Vinylic bromide, exclusively',
      'Aryl bromide, exclusively',
      'Primary alkyl chloride, exclusively'
    ],
    correctIndex: 0,
    explanation: 'NBS is specifically employed to achieve selective bromination at allylic or benzylic positions, producing the corresponding allylic or benzylic bromide.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-20',
    type: 'mcq',
    question: 'The addition of a hydrogen halide (HX) or a halogen (X2) directly to an alkene is another common method used to prepare:',
    options: [
      'Only haloarenes',
      'Only carboxylic acids',
      'Haloalkanes',
      'Only ethers'
    ],
    correctIndex: 2,
    explanation: 'The direct addition of HX or X2 across the double bond of an alkene is a standard method for synthesising haloalkanes.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-21',
    type: 'mcq',
    question: 'The Finkelstein reaction involves treating an alkyl chloride or bromide with sodium iodide (NaI) dissolved in dry acetone, producing the corresponding alkyl iodide, with the reaction being driven forward by the:',
    options: [
      'Precipitation of NaCl or NaBr, which are insoluble in dry acetone',
      'Formation of a highly volatile gas that immediately escapes the reaction mixture',
      'Complete evaporation of the alkyl iodide product itself',
      'Spontaneous combustion of the sodium iodide reagent'
    ],
    correctIndex: 0,
    explanation: 'The Finkelstein reaction proceeds efficiently because the by-products, NaCl or NaBr, precipitate out of the dry acetone solvent (in which they are insoluble), driving the equilibrium toward the formation of the alkyl iodide.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-22',
    type: 'mcq',
    question: 'The Swarts reaction involves treating an alkyl chloride or bromide with reagents such as AgF, Hg2F2, CoF2, or SbF3, producing the corresponding:',
    options: [
      'Alkyl iodide',
      'Aryl fluoride, exclusively',
      'Alkyl fluoride',
      'Alkyl alcohol'
    ],
    correctIndex: 2,
    explanation: 'The Swarts reaction is used specifically to prepare alkyl fluorides by treating an alkyl chloride or bromide with certain metal fluoride reagents (such as AgF or SbF3).',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-23',
    type: 'mcq',
    question: 'The Finkelstein reaction is a practically useful method for preparing alkyl iodides mainly because direct preparation of alkyl iodides from alcohols using HI is often complicated by:',
    options: [
      'The complete impossibility of ever forming any alkyl iodide by any method',
      'Side reactions or lower yields compared to the more reliable halogen exchange approach',
      'The instantaneous decomposition of all alkyl iodides upon formation, regardless of method',
      'The requirement of extremely high pressures unattainable in a standard laboratory'
    ],
    correctIndex: 1,
    explanation: 'The Finkelstein halogen exchange reaction provides a reliable alternative route to alkyl iodides, since direct methods (such as reaction with HI) can be complicated by side reactions or lower practical yields.',
    difficulty: 'hard'
  },
  {
    id: 'haloalkanes-and-haloarenes-24',
    type: 'mcq',
    question: 'Both the Finkelstein and Swarts reactions are examples of a broader category of preparative methods known as:',
    options: [
      'Elimination reactions',
      'Free-radical halogenation reactions',
      'Grignard reagent formation reactions',
      'Halogen exchange reactions'
    ],
    correctIndex: 3,
    explanation: 'Both the Finkelstein reaction (for alkyl iodides) and the Swarts reaction (for alkyl fluorides) are classified as halogen exchange reactions.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-25',
    type: 'mcq',
    question: 'Considering haloalkanes with the same alkyl group but different halogens, the general trend in boiling point (increasing order) is generally observed as:',
    options: [
      'R-I < R-Br < R-Cl < R-F',
      'All isomeric haloalkanes show exactly identical boiling points, regardless of the halogen',
      'R-Cl < R-F < R-I < R-Br, with no clear overall pattern',
      'R-F < R-Cl < R-Br < R-I'
    ],
    correctIndex: 3,
    explanation: 'For a given alkyl group, boiling point generally increases in the order R-F < R-Cl < R-Br < R-I, correlating with the increasing size (and hence increasing van der Waals forces) of the halogen atom.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-26',
    type: 'mcq',
    question: 'Polyhalogenated compounds, such as chloroform (CHCl3) and carbon tetrachloride (CCl4), are generally observed to be:',
    options: [
      'Significantly less dense than water',
      'Denser than water',
      'Exactly equal in density to water, in every case',
      'Completely gaseous at room temperature, with no measurable density'
    ],
    correctIndex: 1,
    explanation: 'Polyhalogenated compounds like chloroform and carbon tetrachloride generally have densities greater than that of water, due to the significant mass contributed by the multiple halogen atoms.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-27',
    type: 'mcq',
    question: 'Although haloalkanes possess some degree of polarity, they are generally found to be only very slightly soluble in water mainly because:',
    options: [
      'Haloalkanes are completely non-polar, with absolutely no dipole moment at all',
      'Water molecules are themselves completely non-polar',
      'Haloalkanes cannot form hydrogen bonds with water molecules',
      'Haloalkanes instantly react with and decompose water upon contact'
    ],
    correctIndex: 2,
    explanation: 'Despite their polarity, haloalkanes cannot form hydrogen bonds with water, and the energy required to break existing water-water hydrogen bonds is not adequately compensated, resulting in their generally low solubility in water.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-28',
    type: 'mcq',
    question: 'Pure alkyl bromides and alkyl iodides, though generally colourless when freshly prepared, tend to develop colour upon prolonged exposure to:',
    options: [
      'Light',
      'Complete darkness, exclusively',
      'Extremely low (freezing) temperatures, exclusively',
      'Pure, distilled water, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Alkyl bromides and iodides, though colourless when pure, tend to develop colour over time due to slow decomposition reactions initiated or accelerated by exposure to light.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-29',
    type: 'mcq',
    question: 'For a given halogen atom, the boiling points of haloalkanes generally show which trend as the size (molecular mass) of the alkyl group increases?',
    options: [
      'Boiling point increases',
      'Boiling point decreases',
      'Boiling point remains completely unaffected by the size of the alkyl group',
      'Boiling point becomes negative for sufficiently large alkyl groups'
    ],
    correctIndex: 0,
    explanation: 'As the size (and molecular mass) of the alkyl group in a haloalkane increases, the boiling point generally increases, due to increasing van der Waals forces between molecules.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-30',
    type: 'mcq',
    question: 'The SN1 (unimolecular nucleophilic substitution) mechanism proceeds through a two-step pathway, with the rate-determining (slow) step involving the:',
    options: [
      'Direct, single-step attack of the nucleophile on the substrate',
      'Formation of a stable, five-coordinate transition state',
      'Formation of a carbocation intermediate',
      'Immediate departure of the nucleophile before any bond breaking occurs'
    ],
    correctIndex: 2,
    explanation: 'The SN1 mechanism\'s rate-determining step is the initial, slow formation of a carbocation intermediate, following the departure of the leaving group.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-31',
    type: 'mcq',
    question: 'In the SN1 mechanism, since the rate-determining step involves only the substrate (and not the nucleophile), the overall reaction rate depends on the concentration of:',
    options: [
      'Both the substrate and the nucleophile, in a combined, second-order manner',
      'Only the nucleophile, with no dependence on the substrate at all',
      'Neither the substrate nor the nucleophile',
      'Only the substrate (alkyl halide)'
    ],
    correctIndex: 3,
    explanation: 'Since the SN1 rate-determining step (carbocation formation) involves only the substrate, the overall reaction follows first-order kinetics, depending only on the substrate concentration.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-32',
    type: 'mcq',
    question: 'The SN1 mechanism is generally favoured by tertiary alkyl halides mainly because tertiary carbocations are:',
    options: [
      'Less stable than primary or secondary carbocations',
      'More stable than primary or secondary carbocations',
      'Exactly as stable as primary carbocations, with no meaningful difference',
      'Never formed under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'SN1 reactions are favoured by tertiary substrates because the resulting tertiary carbocation intermediate is significantly more stable than primary or secondary carbocations, due to greater hyperconjugation and inductive electron donation from surrounding alkyl groups.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-33',
    type: 'mcq',
    question: 'Polar protic solvents generally favour the SN1 mechanism mainly because they can effectively:',
    options: [
      'Completely prevent the formation of any carbocation intermediate',
      'React explosively with the carbocation intermediate, destroying it instantly',
      'Have no effect whatsoever on the stability of any reaction intermediate',
      'Stabilise the intermediate carbocation and the departing halide ion through solvation'
    ],
    correctIndex: 3,
    explanation: 'Polar protic solvents stabilise both the carbocation intermediate and the departing halide ion through solvation, favouring the SN1 mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-34',
    type: 'mcq',
    question: 'When a chiral alkyl halide undergoes an SN1 reaction, the product is generally observed to be:',
    options: [
      'Racemic (a mixture of both possible stereoisomeric products)',
      'Formed with complete, exclusive inversion of configuration',
      'Formed with complete, exclusive retention of the original configuration',
      'Entirely achiral, regardless of the starting material\'s configuration'
    ],
    correctIndex: 0,
    explanation: 'Since the carbocation intermediate formed in SN1 is planar (sp2 hybridised), the incoming nucleophile can attack from either face with roughly equal probability, generally leading to a racemic mixture of products.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-35',
    type: 'mcq',
    question: 'The racemisation commonly observed in SN1 reactions of chiral substrates occurs because the carbocation intermediate is:',
    options: [
      'Tetrahedral (sp3 hybridised), permitting attack from only one specific face',
      'Planar (sp2 hybridised), allowing nucleophilic attack from either face',
      'Linear (sp hybridised), permitting attack from only one specific direction',
      'Completely non-existent; no true intermediate is ever formed in SN1'
    ],
    correctIndex: 1,
    explanation: 'The planar, sp2-hybridised carbocation intermediate in SN1 reactions is equally accessible to nucleophilic attack from either face, generally leading to a racemic product mixture (with some exceptions).',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-36',
    type: 'mcq',
    question: 'Which of the following correctly represents the general order of reactivity of alkyl halides toward the SN1 mechanism?',
    options: [
      'Primary > Secondary > Tertiary',
      'Methyl > Tertiary > Primary > Secondary',
      'Tertiary > Secondary > Primary',
      'All alkyl halides show exactly identical reactivity toward SN1'
    ],
    correctIndex: 2,
    explanation: 'The SN1 reactivity order is Tertiary > Secondary > Primary, correlating directly with the relative stability of the corresponding carbocation intermediates.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-37',
    type: 'mcq',
    question: 'The energy profile diagram of a typical SN1 reaction generally shows two distinct transition states, corresponding to carbocation formation and subsequent nucleophilic attack, with the higher-energy transition state corresponding to the:',
    options: [
      'Fast, final nucleophilic attack step',
      'A step that does not actually exist in the SN1 mechanism',
      'Rate-determining, carbocation-forming step',
      'The very last step of the overall reaction sequence exclusively'
    ],
    correctIndex: 2,
    explanation: 'The higher-energy transition state in an SN1 energy profile corresponds to the slow, rate-determining step of carbocation formation, since this step generally requires the most activation energy.',
    difficulty: 'hard'
  },
  {
    id: 'haloalkanes-and-haloarenes-38',
    type: 'mcq',
    question: 'The SN2 (bimolecular nucleophilic substitution) mechanism proceeds through a single-step, concerted pathway, involving simultaneous attack of the nucleophile and departure of the leaving group, from:',
    options: [
      'The same side of the substrate carbon (frontside attack)',
      'Opposite sides of the substrate carbon (backside attack)',
      'No specific direction at all; the attack is entirely random',
      'A pathway that does not involve the substrate carbon at all'
    ],
    correctIndex: 1,
    explanation: 'SN2 reactions proceed via a concerted mechanism involving backside attack of the nucleophile, occurring from the side directly opposite to the departing leaving group.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-39',
    type: 'mcq',
    question: 'In the SN2 mechanism, since the rate-determining (and only) step involves both the substrate and the nucleophile simultaneously, the overall reaction rate depends on the concentration of:',
    options: [
      'Both the substrate and the nucleophile',
      'Only the substrate, with no dependence on the nucleophile at all',
      'Only the nucleophile, with no dependence on the substrate at all',
      'Neither the substrate nor the nucleophile'
    ],
    correctIndex: 0,
    explanation: 'Since the single SN2 step involves both the substrate and nucleophile simultaneously, the reaction follows second-order kinetics, depending on the concentrations of both species.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-40',
    type: 'mcq',
    question: 'The SN2 mechanism is generally favoured by primary alkyl halides mainly because primary substrates experience:',
    options: [
      'The greatest possible steric hindrance to backside nucleophilic attack',
      'Exactly the same degree of steric hindrance as tertiary substrates',
      'No steric effects whatsoever, regardless of substrate type',
      'The least steric hindrance to backside nucleophilic attack'
    ],
    correctIndex: 3,
    explanation: 'Primary alkyl halides favour the SN2 mechanism because their relatively unhindered structure allows the nucleophile easier backside access, minimising steric hindrance.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-41',
    type: 'mcq',
    question: 'When a chiral alkyl halide undergoes an SN2 reaction, the product is generally observed to show:',
    options: [
      'Complete inversion of configuration (Walden inversion)',
      'Complete retention of the original configuration',
      'Racemisation, forming an equal mixture of both stereoisomers',
      'No defined stereochemical outcome whatsoever'
    ],
    correctIndex: 0,
    explanation: 'SN2 reactions proceed with complete inversion of configuration at the reacting carbon, a phenomenon known as Walden inversion, since the nucleophile displaces the leaving group from the opposite side.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-42',
    type: 'mcq',
    question: 'The characteristic inversion of configuration observed in SN2 reactions occurs because the nucleophile attacks the substrate carbon from the side:',
    options: [
      'Directly adjacent to, and on the same side as, the leaving group',
      'Completely unrelated to the position of the leaving group',
      'From above the plane of the molecule only, regardless of the leaving group\'s position',
      'Directly opposite to the leaving group'
    ],
    correctIndex: 3,
    explanation: 'The inversion of configuration (Walden inversion) in SN2 reactions results from the nucleophile\'s backside attack, occurring precisely opposite to the departing leaving group.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-43',
    type: 'mcq',
    question: 'Which of the following correctly represents the general order of reactivity of alkyl halides toward the SN2 mechanism?',
    options: [
      'Tertiary > Secondary > Primary > Methyl',
      'Methyl > Primary > Secondary > Tertiary',
      'All alkyl halides show exactly identical reactivity toward SN2',
      'Secondary > Tertiary > Primary > Methyl'
    ],
    correctIndex: 1,
    explanation: 'SN2 reactivity decreases with increasing steric hindrance around the reacting carbon, giving the order Methyl > Primary > Secondary > Tertiary.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-44',
    type: 'mcq',
    question: 'The transition state of an SN2 reaction is characterised by the presence of partial bonds to both the incoming nucleophile and the departing leaving group, along with a change in hybridisation of the reacting carbon that passes through an approximately:',
    options: [
      'Purely sp3 geometry, identical to both the starting material and product',
      'Purely sp geometry, with linear bond angles',
      'sp2-like (trigonal bipyramidal-like) geometry at the transition state',
      'No definable geometry whatsoever at the transition state'
    ],
    correctIndex: 2,
    explanation: 'During the SN2 transition state, the reacting carbon adopts an approximately trigonal bipyramidal (sp2-like) arrangement, with partial bonding to both the incoming nucleophile and the departing leaving group.',
    difficulty: 'hard'
  },
  {
    id: 'haloalkanes-and-haloarenes-45',
    type: 'mcq',
    question: 'Tertiary alkyl halides generally react very slowly (or not at all) via the SN2 mechanism mainly due to:',
    options: [
      'The complete absence of any leaving group in tertiary substrates',
      'Significant steric hindrance around the reacting carbon, blocking effective backside attack',
      'Excessive reactivity, causing the reaction to proceed far too quickly to observe',
      'A complete lack of any nucleophile ever being available to react'
    ],
    correctIndex: 1,
    explanation: 'The bulky alkyl groups surrounding the reacting carbon in tertiary substrates create substantial steric hindrance, effectively blocking the backside approach required for an SN2 mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-46',
    type: 'mcq',
    question: 'The reaction of a haloalkane with alcoholic potassium hydroxide (KOH), resulting in the removal of a hydrogen atom and a halogen atom to form an alkene, is called a(n):',
    options: [
      'Nucleophilic substitution reaction, exclusively',
      'Addition reaction, exclusively',
      'Elimination (dehydrohalogenation) reaction',
      'Free-radical halogenation reaction'
    ],
    correctIndex: 2,
    explanation: 'Treatment of a haloalkane with alcoholic KOH results in an elimination (dehydrohalogenation) reaction, removing HX to form an alkene.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-47',
    type: 'mcq',
    question: 'In the dehydrohalogenation of a haloalkane, the hydrogen atom removed during the elimination reaction is typically taken from the carbon atom:',
    options: [
      'Adjacent to the carbon bearing the halogen (the beta carbon)',
      'Bearing the halogen itself (the alpha carbon)',
      'Located at the opposite end of the molecule, far from the halogen',
      'That does not actually exist in the molecule'
    ],
    correctIndex: 0,
    explanation: 'In dehydrohalogenation, the hydrogen atom is removed from the beta carbon (adjacent to the halogen-bearing alpha carbon), while the halogen leaves from the alpha carbon, together forming the new double bond.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-48',
    type: 'mcq',
    question: 'According to Saytzeff\'s (Zaitsev\'s) Rule, when an elimination reaction can potentially produce more than one alkene product, the major product formed is generally the:',
    options: [
      'Less substituted (less stable) alkene, having fewer alkyl groups attached to the double-bonded carbons',
      'Product with the fewest possible carbon atoms, regardless of substitution pattern',
      'Product that retains the original halogen atom within its structure',
      'More substituted (more stable) alkene, having a greater number of alkyl groups attached to the double-bonded carbons'
    ],
    correctIndex: 3,
    explanation: 'Saytzeff\'s Rule states that, when multiple elimination products are possible, the more highly substituted (and generally more stable) alkene is typically favoured as the major product.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-49',
    type: 'mcq',
    question: 'The preference for forming the more substituted alkene, as described by Saytzeff\'s Rule, is generally attributed to the fact that more substituted alkenes are:',
    options: [
      'Thermodynamically less stable',
      'Exactly equal in stability to less substituted alkenes, with no distinction possible',
      'Incapable of being formed under any elimination conditions',
      'Thermodynamically more stable'
    ],
    correctIndex: 3,
    explanation: 'The preference for more substituted alkenes in Saytzeff-type eliminations reflects their generally greater thermodynamic stability, often attributed to greater hyperconjugative and inductive stabilisation from surrounding alkyl groups.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-50',
    type: 'mcq',
    question: 'The Wurtz reaction involves treating two molecules of an alkyl halide with sodium metal in dry ether, resulting in the formation of a higher alkane containing:',
    options: [
      'An odd number of carbon atoms exclusively',
      'Exactly the same number of carbon atoms as the original alkyl halide',
      'An even number of carbon atoms (generally double that of the original alkyl halide)',
      'No carbon atoms at all, with only inorganic products formed'
    ],
    correctIndex: 2,
    explanation: 'The Wurtz reaction couples two alkyl halide molecules using sodium metal, generally producing a higher alkane with an even number of carbon atoms (since two identical alkyl groups combine).',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-51',
    type: 'mcq',
    question: 'The Wurtz reaction is primarily useful for synthesising:',
    options: [
      'Symmetrical alkanes (from two identical alkyl halide molecules)',
      'Only aromatic compounds, with no relevance to alkane synthesis',
      'Only unsaturated hydrocarbons (alkenes or alkynes)',
      'Only carboxylic acids'
    ],
    correctIndex: 0,
    explanation: 'The Wurtz reaction is primarily used to synthesise symmetrical alkanes, formed by coupling two molecules of the same alkyl halide.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-52',
    type: 'mcq',
    question: 'The reaction of an alkyl halide with magnesium metal in dry ether produces a highly reactive and useful organometallic compound called a:',
    options: [
      'Wurtz reagent',
      'Grignard reagent',
      'Swarts reagent',
      'Finkelstein reagent'
    ],
    correctIndex: 1,
    explanation: 'The reaction of an alkyl halide with magnesium in dry ether produces a Grignard reagent (RMgX), a versatile and highly reactive organometallic compound.',
    difficulty: 'easy'
  },
  {
    id: 'haloalkanes-and-haloarenes-53',
    type: 'mcq',
    question: 'Grignard reagents are extremely reactive toward moisture and must be prepared and handled under strictly anhydrous conditions mainly because they can react readily with:',
    options: [
      'Water (and other compounds containing acidic hydrogen atoms)',
      'Only completely inert gases, such as helium or neon',
      'Only solid metals, with no reactivity toward liquids at all',
      'Nothing at all; Grignard reagents are actually quite unreactive'
    ],
    correctIndex: 0,
    explanation: 'Grignard reagents are highly reactive toward water and other compounds bearing acidic hydrogen atoms, necessitating strictly anhydrous (moisture-free) conditions during their preparation and use.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-54',
    type: 'mcq',
    question: 'Grignard reagents are particularly valuable in organic synthesis because they function effectively as a source of a nucleophilic carbon, often described as behaving like a:',
    options: [
      'Carbocation',
      'Carbanion',
      'Free radical, exclusively',
      'Neutral, non-nucleophilic species'
    ],
    correctIndex: 1,
    explanation: 'The carbon atom bonded to magnesium in a Grignard reagent carries significant negative (carbanion-like) character, making it a powerful nucleophile useful for forming new carbon-carbon bonds in synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-55',
    type: 'mcq',
    question: 'Aryl halides are generally significantly less reactive than alkyl halides toward nucleophilic substitution reactions, and one important reason for this is the:',
    options: [
      'Complete absence of any halogen atom in aryl halides',
      'Extremely weak, easily broken nature of the aromatic ring itself',
      'Complete absence of any possible nucleophile capable of reacting with aryl halides',
      'Partial double bond character of the C-X bond, arising from resonance delocalisation of the halogen\'s lone pair into the aromatic ring'
    ],
    correctIndex: 3,
    explanation: 'In aryl halides, resonance delocalisation of a lone pair from the halogen into the aromatic ring imparts partial double bond character to the C-X bond, making it shorter, stronger, and less reactive toward nucleophilic substitution.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-56',
    type: 'mcq',
    question: 'The resonance delocalisation of the halogen\'s lone pair into the aromatic ring of an aryl halide results in the carbon-halogen bond being:',
    options: [
      'Longer and weaker than a typical C-X bond in an alkyl halide',
      'Exactly identical in length and strength to a typical alkyl halide C-X bond',
      'Shorter and stronger than a typical C-X bond in an alkyl halide',
      'Completely broken, with no bond remaining at all'
    ],
    correctIndex: 2,
    explanation: 'Due to partial double bond character from resonance, the C-X bond in an aryl halide becomes shorter and stronger compared to the corresponding C-X bond in an alkyl halide.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-57',
    type: 'mcq',
    question: 'Another important reason for the reduced reactivity of aryl halides toward nucleophilic substitution is the difference in hybridisation of the carbon bearing the halogen, since the sp2 carbon of an aryl halide holds the bonding electron pair:',
    options: [
      'Less tightly than the sp3 carbon of an alkyl halide',
      'With exactly equal tightness compared to an sp3 carbon',
      'More tightly than the sp3 carbon of an alkyl halide',
      'In a manner completely unrelated to the strength of the C-X bond'
    ],
    correctIndex: 2,
    explanation: 'The sp2 hybridised carbon in an aryl halide, being more electronegative than an sp3 carbon, holds the C-X bonding electron pair more tightly, contributing to reduced reactivity toward nucleophilic substitution.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-58',
    type: 'mcq',
    question: 'A further reason for the low reactivity of aryl halides toward nucleophilic substitution is that, if a phenyl cation were to form (as would be required in an SN1-type pathway), this cation would be:',
    options: [
      'Extremely stable, even more so than a typical tertiary alkyl carbocation',
      'Exactly as stable as a simple methyl carbocation, with no meaningful difference',
      'Impossible to form under any circumstances, for entirely unrelated reasons',
      'Highly unstable, since it cannot be effectively stabilised by resonance in the same way as typical alkyl carbocations'
    ],
    correctIndex: 3,
    explanation: 'A hypothetical phenyl cation, which would need to form in an SN1-type pathway for aryl halides, is highly unstable and cannot be effectively resonance-stabilised, making this pathway highly unfavourable for aryl halides.',
    difficulty: 'hard'
  },
  {
    id: 'haloalkanes-and-haloarenes-59',
    type: 'mcq',
    question: 'The aromatic ring of an aryl halide, being relatively electron-rich due to resonance donation from the halogen, tends to:',
    options: [
      'Repel an approaching nucleophile, further hindering nucleophilic substitution',
      'Strongly attract and readily accept an approaching nucleophile',
      'Have no effect whatsoever on any approaching nucleophile',
      'Immediately react with any nucleophile, forming an entirely new aromatic ring'
    ],
    correctIndex: 0,
    explanation: 'Since resonance donation from the halogen makes the aromatic ring relatively electron-rich, an approaching (electron-rich) nucleophile experiences electrostatic repulsion, further disfavouring nucleophilic substitution at the aryl halide carbon.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-60',
    type: 'mcq',
    question: 'Aryl halides can be induced to undergo nucleophilic substitution under sufficiently forcing conditions, such as very high temperature and pressure, or when the aromatic ring bears a:',
    options: [
      'Strong electron-donating group (such as -NH2 or -OH) at any position on the ring',
      'Strong electron-withdrawing group (such as -NO2) at the ortho or para position relative to the halogen',
      'No substituents whatsoever, other than the halogen itself',
      'An additional halogen atom at the meta position exclusively, with no other substituent required'
    ],
    correctIndex: 1,
    explanation: 'The presence of a strong electron-withdrawing group (like -NO2) at the ortho or para position relative to the halogen can activate the aryl halide toward nucleophilic substitution, by stabilising the negatively charged intermediate formed during the reaction.',
    difficulty: 'hard'
  },
  {
    id: 'haloalkanes-and-haloarenes-61',
    type: 'mcq',
    question: 'In cases where nucleophilic substitution is activated in an aryl halide by a strong electron-withdrawing group, the mechanism generally proceeds via a resonance-stabilised anionic intermediate sometimes referred to as a:',
    options: [
      'Grignard complex',
      'Meisenheimer complex',
      'Wurtz intermediate',
      'Finkelstein complex'
    ],
    correctIndex: 1,
    explanation: 'Nucleophilic aromatic substitution activated by strong electron-withdrawing groups typically proceeds via a resonance-stabilised anionic intermediate known as a Meisenheimer complex.',
    difficulty: 'hard'
  },
  {
    id: 'haloalkanes-and-haloarenes-62',
    type: 'mcq',
    question: 'Overall, the combination of resonance-induced C-X bond strengthening, sp2 carbon hybridisation effects, and the instability of any potential phenyl cation collectively explain why aryl halides are generally far ___ reactive than alkyl halides toward standard nucleophilic substitution.',
    options: [
      'Less',
      'More',
      'Equally',
      'Infinitely more'
    ],
    correctIndex: 0,
    explanation: 'Taken together, these several factors - resonance, hybridisation effects, and cation instability - explain why aryl halides are generally much less reactive than alkyl halides toward conventional nucleophilic substitution reactions.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-63',
    type: 'mcq',
    question: 'In electrophilic aromatic substitution reactions of haloarenes, the halogen substituent is generally described as being:',
    options: [
      'A meta-directing group and an activating group, simultaneously',
      'Completely unreactive, with no directing influence on the ring at all',
      'An ortho/para-directing group, despite also being an overall deactivating group',
      'Exclusively an activating group, with no deactivating character whatsoever'
    ],
    correctIndex: 2,
    explanation: 'Halogens on an aromatic ring are unusual in being ortho/para-directing groups, while also being overall deactivating (slowing the rate of electrophilic substitution) due to their strong inductive electron-withdrawing effect outweighing their weaker resonance electron-donating effect.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-64',
    type: 'mcq',
    question: 'The overall deactivating effect of a halogen substituent on an aromatic ring, despite its ortho/para-directing character, is primarily attributed to its strong:',
    options: [
      'Resonance (electron-donating) effect, exclusively, with no inductive contribution',
      'Steric effect, exclusively, with no electronic contribution',
      'Complete absence of any electronic effect whatsoever',
      'Inductive (electron-withdrawing) effect'
    ],
    correctIndex: 3,
    explanation: 'The overall deactivating nature of a halogen substituent arises mainly from its strong inductive electron-withdrawing effect, which outweighs the milder electron-donating resonance effect responsible for its ortho/para-directing behaviour.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-65',
    type: 'mcq',
    question: 'The halogen\'s ortho/para-directing ability in electrophilic aromatic substitution arises from its capacity to donate a lone pair of electrons into the ring via:',
    options: [
      'Purely inductive effects, with no resonance contribution at all',
      'Hydrogen bonding, exclusively',
      'Van der Waals forces, exclusively',
      'Resonance'
    ],
    correctIndex: 3,
    explanation: 'The halogen substituent\'s ortho/para-directing character arises from resonance donation of one of its lone pairs into the aromatic ring, stabilising the intermediate carbocation formed during substitution at the ortho and para positions.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-66',
    type: 'mcq',
    question: 'Which of the following reactions is a typical example of electrophilic aromatic substitution occurring on a haloarene, preferentially at the ortho and para positions?',
    options: [
      'Nucleophilic substitution via the SN2 mechanism',
      'Nitration',
      'The Grignard reagent formation reaction',
      'The Wurtz coupling reaction'
    ],
    correctIndex: 1,
    explanation: 'Nitration, like other standard electrophilic aromatic substitution reactions (halogenation, sulphonation, Friedel-Crafts reactions), occurs preferentially at the ortho and para positions of a haloarene, directed by the halogen substituent.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-67',
    type: 'mcq',
    question: 'Compared to unsubstituted benzene, a haloarene generally undergoes electrophilic aromatic substitution reactions at a:',
    options: [
      'Slower rate, due to the overall deactivating effect of the halogen substituent',
      'Faster rate, due to the overall activating effect of the halogen substituent',
      'Exactly identical rate, with no measurable difference from unsubstituted benzene',
      'Rate that cannot be compared in any meaningful way to unsubstituted benzene'
    ],
    correctIndex: 0,
    explanation: 'Since the halogen substituent is overall deactivating (despite being ortho/para-directing), haloarenes generally undergo electrophilic aromatic substitution more slowly than unsubstituted benzene.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-68',
    type: 'mcq',
    question: 'The Wurtz-Fittig reaction involves treating a mixture of an aryl halide and an alkyl halide with sodium metal in dry ether, producing:',
    options: [
      'A symmetrical alkane, identical to the standard Wurtz reaction product',
      'A purely inorganic salt, with no organic product formed',
      'An alkylbenzene (alkyl-substituted aromatic compound)',
      'A carboxylic acid, exclusively'
    ],
    correctIndex: 2,
    explanation: 'The Wurtz-Fittig reaction couples an aryl halide with an alkyl halide using sodium metal, producing an alkylbenzene (an alkyl-substituted aromatic compound).',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-69',
    type: 'mcq',
    question: 'The Fittig reaction, closely related to the Wurtz-Fittig reaction, involves treating two molecules of an aryl halide with sodium metal in dry ether, producing a:',
    options: [
      'Biaryl compound (a compound with two connected aromatic rings, such as biphenyl)',
      'Simple alkane, with no aromatic character remaining',
      'Single, unmodified aryl halide molecule, with no coupling occurring at all',
      'Grignard reagent, identical to the standard Grignard preparation'
    ],
    correctIndex: 0,
    explanation: 'The Fittig reaction couples two molecules of an aryl halide using sodium metal, forming a biaryl compound (such as biphenyl, formed from two molecules of bromobenzene).',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-70',
    type: 'mcq',
    question: 'Both the Wurtz-Fittig reaction and the Fittig reaction rely on the use of sodium metal in dry ether, closely paralleling the mechanism and conditions used in the original:',
    options: [
      'Grignard reagent formation reaction',
      'Finkelstein reaction',
      'Wurtz reaction',
      'Swarts reaction'
    ],
    correctIndex: 2,
    explanation: 'Both the Wurtz-Fittig and Fittig reactions employ conditions (sodium metal, dry ether) closely paralleling the original Wurtz reaction, extending the coupling methodology to include aryl halide substrates.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-71',
    type: 'mcq',
    question: 'Chloroform (trichloromethane, CHCl3), when exposed to air and light over time, slowly undergoes oxidation to form a highly poisonous gas called:',
    options: [
      'Carbon tetrachloride (CCl4)',
      'Phosgene (COCl2)',
      'Iodoform (CHI3)',
      'Freon-12 (CCl2F2)'
    ],
    correctIndex: 1,
    explanation: 'Chloroform slowly oxidises in the presence of air and light to form the highly toxic gas phosgene (COCl2), which is why chloroform requires special storage precautions.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-72',
    type: 'mcq',
    question: 'To prevent the harmful oxidation of chloroform into phosgene, chloroform is conventionally stored in dark-coloured bottles, completely filled to minimise air contact, along with the addition of a small amount of:',
    options: [
      'Pure oxygen gas, to accelerate the desired reaction',
      'Concentrated sulphuric acid, to preserve the chloroform indefinitely',
      'Liquid mercury, to absorb any toxic gases formed',
      'Ethanol, which converts any phosgene formed into harmless ethyl carbonate'
    ],
    correctIndex: 3,
    explanation: 'A small amount of ethanol is added to stored chloroform specifically to react with and neutralise any phosgene formed, converting it into the relatively harmless compound ethyl carbonate.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-73',
    type: 'mcq',
    question: 'Iodoform (triiodomethane, CHI3), once used as an antiseptic, is now rarely used for this purpose mainly because of its:',
    options: [
      'Complete lack of any antiseptic properties whatsoever',
      'Strong, unpleasant, and persistent smell',
      'Extremely explosive nature, making it too dangerous to handle at all',
      'Complete insolubility in any known solvent'
    ],
    correctIndex: 1,
    explanation: 'Although iodoform does possess antiseptic properties, its strong, unpleasant, and persistent odour has largely limited its continued use as an antiseptic in modern practice.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-74',
    type: 'mcq',
    question: 'Carbon tetrachloride (CCl4) has historically found practical use in applications such as fire extinguishers and as a solvent, as well as in the manufacture of:',
    options: [
      'Only edible food products, with no industrial applications',
      'Only pharmaceutical antibiotics',
      'Only fertilisers for agricultural use',
      'Refrigerants and aerosol propellants'
    ],
    correctIndex: 3,
    explanation: 'Carbon tetrachloride has been historically used in fire extinguishers, as an industrial solvent, and in the manufacture of certain refrigerants and aerosol propellants.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-75',
    type: 'mcq',
    question: 'Chlorofluorocarbons (CFCs), commonly known as Freons, have been widely used as refrigerants and aerosol propellants, but are now recognised as a major environmental concern due to their role in causing:',
    options: [
      'Global warming exclusively, with no relation to the ozone layer at all',
      'Acid rain formation exclusively, with no relation to the ozone layer',
      'Depletion of the stratospheric ozone layer',
      'Soil erosion, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Chlorofluorocarbons (CFCs, such as Freon-12) are well known for causing significant depletion of the protective stratospheric ozone layer, a major environmental concern that led to international regulation of their use.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-76',
    type: 'mcq',
    question: 'DDT (para-dichlorodiphenyltrichloroethane), historically one of the first widely used synthetic pesticides, is now restricted or banned in many countries mainly due to its:',
    options: [
      'Non-biodegradability and tendency to bioaccumulate within food chains',
      'Complete lack of any effectiveness whatsoever against insect pests',
      'Extremely low cost, making it too cheap to be commercially viable',
      'Complete insolubility in any organic solvent, limiting its formulation entirely'
    ],
    correctIndex: 0,
    explanation: 'DDT\'s persistence in the environment (non-biodegradability) and its tendency to bioaccumulate and biomagnify within food chains have led to significant restrictions or outright bans on its use in many countries.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-77',
    type: 'mcq',
    question: 'The phenomenon by which a persistent chemical such as DDT progressively increases in concentration at successively higher levels of a food chain is called:',
    options: [
      'Biomagnification (bioaccumulation)',
      'Chelation, as seen in coordination chemistry',
      'Racemisation, as seen in certain organic reactions',
      'Disproportionation, as seen in certain redox reactions'
    ],
    correctIndex: 0,
    explanation: 'Biomagnification (or bioaccumulation) describes the progressive increase in the concentration of a persistent chemical, such as DDT, as it moves up successive trophic levels within a food chain.',
    difficulty: 'medium'
  },
  {
    id: 'haloalkanes-and-haloarenes-78',
    type: 'mcq',
    question: 'Dichloromethane (methylene chloride, CH2Cl2) is a widely used polyhalogen compound, commonly employed as a solvent and, notably, as an effective:',
    options: [
      'Antiseptic, primarily',
      'Insecticide, primarily',
      'Refrigerant, primarily',
      'Paint remover'
    ],
    correctIndex: 3,
    explanation: 'Dichloromethane (methylene chloride) is commonly used as an industrial solvent, and is particularly well known for its effectiveness as a paint remover.',
    difficulty: 'medium'
  },
];

export default questions;