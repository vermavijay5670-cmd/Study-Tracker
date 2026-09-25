import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Amines
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'amines-1',
    type: 'mcq',
    question: 'Amines are classified as primary, secondary, or tertiary based on the number of hydrogen atoms of ammonia (NH3) that have been replaced by:',
    options: [
      'Oxygen atoms exclusively',
      'Alkyl or aryl groups',
      'Halogen atoms exclusively',
      'Additional nitrogen atoms exclusively'
    ],
    correctIndex: 1,
    explanation: 'Amine classification is based on the number of hydrogen atoms of ammonia replaced by alkyl or aryl groups, unlike the classification of alcohols/halides, which is based on the type of carbon bearing the functional group.',
    difficulty: 'easy'
  },
  {
    id: 'amines-2',
    type: 'mcq',
    question: 'A primary (1°) amine is formed when exactly how many hydrogen atoms of ammonia have been replaced by an alkyl or aryl group?',
    options: [
      'Two',
      'Three',
      'Zero',
      'One'
    ],
    correctIndex: 3,
    explanation: 'A primary amine has exactly one hydrogen atom of ammonia replaced by an alkyl or aryl group, giving the general formula R-NH2.',
    difficulty: 'easy'
  },
  {
    id: 'amines-3',
    type: 'mcq',
    question: 'A tertiary (3°) amine is formed when exactly how many hydrogen atoms of ammonia have been replaced by alkyl or aryl groups?',
    options: [
      'Three',
      'One',
      'Two',
      'Zero'
    ],
    correctIndex: 0,
    explanation: 'A tertiary amine has all three hydrogen atoms of ammonia replaced by alkyl or aryl groups, giving the general formula R3N.',
    difficulty: 'easy'
  },
  {
    id: 'amines-4',
    type: 'mcq',
    question: 'It is important to note that amine classification (primary/secondary/tertiary), based on the number of substituted hydrogens on nitrogen, is fundamentally different from the classification system used for:',
    options: [
      'Carboxylic acids, which use an identical classification system to amines',
      'Aldehydes, which use an identical classification system to amines',
      'Alcohols and alkyl halides, which is instead based on the nature of the carbon atom bearing the functional group',
      'Ethers, which use an identical classification system to amines'
    ],
    correctIndex: 2,
    explanation: 'Unlike alcohols and alkyl halides (classified by the type of carbon bearing the functional group), amines are classified based on the number of hydrogen atoms of ammonia that have been replaced by carbon-containing groups.',
    difficulty: 'medium'
  },
  {
    id: 'amines-5',
    type: 'mcq',
    question: 'The nitrogen atom in a typical amine is generally:',
    options: [
      'sp2 hybridised, giving the molecule a planar shape',
      'sp hybridised, giving the molecule a linear shape',
      'sp3 hybridised, giving the molecule a pyramidal shape',
      'Not hybridised at all'
    ],
    correctIndex: 2,
    explanation: 'The nitrogen atom in amines is typically sp3 hybridised, resulting in a pyramidal molecular shape, similar to ammonia.',
    difficulty: 'medium'
  },
  {
    id: 'amines-6',
    type: 'mcq',
    question: 'In the pyramidal structure of an amine, one of the four sp3 hybrid orbitals on nitrogen is occupied not by a bonding pair but by a:',
    options: [
      'Lone pair of electrons',
      'Second nitrogen atom',
      'Additional hydrogen atom, giving five total substituents',
      'Positive charge, with no electrons present at all'
    ],
    correctIndex: 0,
    explanation: 'One of the four sp3 hybrid orbitals of the nitrogen atom in an amine is occupied by a lone pair of electrons, rather than a bonding pair, contributing to the pyramidal shape.',
    difficulty: 'medium'
  },
  {
    id: 'amines-7',
    type: 'mcq',
    question: 'Amines with three different substituents on nitrogen are, in principle, chiral (since nitrogen could be considered a stereocentre alongside its lone pair), but such isolated enantiomers generally cannot be isolated because nitrogen undergoes rapid:',
    options: [
      'Complete and permanent loss of its lone pair of electrons',
      'Conversion into a completely different, unrelated functional group',
      'Spontaneous combustion at room temperature',
      'Pyramidal inversion (nitrogen/umbrella inversion)'
    ],
    correctIndex: 3,
    explanation: 'Even though a nitrogen atom bonded to three different groups (plus its lone pair) is technically a stereocentre, rapid pyramidal (umbrella) inversion interconverts the two possible configurations so quickly that separate enantiomers cannot typically be isolated.',
    difficulty: 'hard'
  },
  {
    id: 'amines-8',
    type: 'mcq',
    question: 'The bond angle at the nitrogen atom in a typical amine is generally found to be slightly less than the ideal tetrahedral angle of 109.5°, mainly due to:',
    options: [
      'The complete absence of any lone pair on nitrogen',
      'Repulsion exerted by the lone pair of electrons on nitrogen',
      'An unusually large atomic radius of the nitrogen atom',
      'The presence of a triple bond somewhere within the amine molecule'
    ],
    correctIndex: 1,
    explanation: 'The lone pair of electrons on the nitrogen atom exerts greater repulsion than a typical bonding pair, compressing the bond angle to slightly less than the ideal tetrahedral value of 109.5°.',
    difficulty: 'medium'
  },
  {
    id: 'amines-9',
    type: 'mcq',
    question: 'In IUPAC nomenclature, primary amines are generally named using the suffix:',
    options: [
      '\'-ol\'',
      '\'-al\'',
      '\'-one\'',
      '\'-amine\' (as in alkanamine)'
    ],
    correctIndex: 3,
    explanation: 'IUPAC nomenclature names primary amines with the suffix \'-amine,\' as in the systematic name \'alkanamine.\'',
    difficulty: 'easy'
  },
  {
    id: 'amines-10',
    type: 'mcq',
    question: 'In naming secondary and tertiary amines using IUPAC nomenclature, substituents on the nitrogen atom (other than the main parent chain) are indicated using the locant prefix:',
    options: [
      '\'C-\', identical to standard carbon locants',
      '\'N-\' (such as N-methyl or N-ethyl)',
      '\'O-\', as typically used for ether/alcohol substituents',
      'No prefix is ever used for nitrogen substituents'
    ],
    correctIndex: 1,
    explanation: 'Substituents attached directly to the nitrogen atom of a secondary or tertiary amine are indicated using the \'N-\' locant prefix, distinguishing them from substituents on the main carbon chain.',
    difficulty: 'medium'
  },
  {
    id: 'amines-11',
    type: 'mcq',
    question: 'The reduction of nitrobenzene, using hydrogen gas in the presence of a catalyst (such as Pd, Pt, or Ni), or alternatively using a metal/acid combination, is a common method for preparing:',
    options: [
      'Aniline',
      'Nitrobenzene itself, with no actual chemical transformation occurring',
      'Benzaldehyde',
      'Benzoic acid'
    ],
    correctIndex: 0,
    explanation: 'Reduction of nitrobenzene, using catalytic hydrogenation or a metal/acid combination, is a standard method for preparing aniline (the simplest aromatic primary amine).',
    difficulty: 'easy'
  },
  {
    id: 'amines-12',
    type: 'mcq',
    question: 'Common metal/acid combinations used for the reduction of nitro compounds to primary amines include tin (Sn) with hydrochloric acid, or alternatively:',
    options: [
      'Sodium metal with pure water, exclusively',
      'Gold metal with dilute acid, exclusively',
      'Iron (Fe) with hydrochloric acid',
      'Platinum metal with pure water, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Besides catalytic hydrogenation, nitro compounds can also be reduced to primary amines using metal/acid combinations such as Sn/HCl or Fe/HCl.',
    difficulty: 'medium'
  },
  {
    id: 'amines-13',
    type: 'mcq',
    question: 'The reduction of a nitro group (-NO2) to a primary amine (-NH2) represents a significant change in the oxidation state of nitrogen, corresponding to the:',
    options: [
      'Loss of electrons (an oxidation process)',
      'No net change in oxidation state whatsoever',
      'Gain of electrons (a reduction process)',
      'Loss of the nitrogen atom entirely'
    ],
    correctIndex: 2,
    explanation: 'Converting a nitro group to an amino group involves a substantial gain of electrons at the nitrogen centre, consistent with this transformation being classified as a reduction.',
    difficulty: 'medium'
  },
  {
    id: 'amines-14',
    type: 'mcq',
    question: 'Ammonolysis of an alkyl halide involves treating it with excess ammonia (often under sealed-tube conditions), initially producing a:',
    options: [
      'Primary amine',
      'Secondary amine, exclusively, with no primary amine ever formed',
      'Tertiary amine, exclusively, with no primary amine ever formed',
      'Quaternary ammonium salt, exclusively, with no simpler amine ever formed'
    ],
    correctIndex: 0,
    explanation: 'Ammonolysis of an alkyl halide with excess ammonia initially produces a primary amine, via nucleophilic substitution of the halide by ammonia.',
    difficulty: 'medium'
  },
  {
    id: 'amines-15',
    type: 'mcq',
    question: 'A significant limitation of the ammonolysis method for preparing primary amines is that the initially formed primary amine product is itself a nucleophile, often more reactive than ammonia, leading to:',
    options: [
      'Complete and immediate reversal of the reaction, regenerating only the starting alkyl halide',
      'Further alkylation, producing a mixture of primary, secondary, tertiary amines, and even a quaternary ammonium salt',
      'No further reaction whatsoever, guaranteeing a perfectly pure primary amine product',
      'Spontaneous conversion into an entirely unrelated functional group, such as a carboxylic acid'
    ],
    correctIndex: 1,
    explanation: 'Since the primary amine product is often a stronger nucleophile than ammonia itself, it can react further with additional alkyl halide, resulting in a complex mixture of primary, secondary, and tertiary amines, along with quaternary ammonium salt, limiting the practical utility of this method for clean primary amine synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'amines-16',
    type: 'mcq',
    question: 'Because of the over-alkylation problem associated with direct ammonolysis of alkyl halides, alternative methods, such as the Gabriel synthesis, are often preferred specifically for preparing:',
    options: [
      'Pure tertiary amines, exclusively',
      'Pure quaternary ammonium salts, exclusively',
      'Pure secondary amines, exclusively',
      'Pure primary amines'
    ],
    correctIndex: 3,
    explanation: 'Due to the limitations of direct ammonolysis, alternative methods like the Gabriel synthesis are often preferred when a pure primary amine product (free from over-alkylated by-products) is specifically required.',
    difficulty: 'medium'
  },
  {
    id: 'amines-17',
    type: 'mcq',
    question: 'Reduction of a nitrile (R-CN), using a reagent such as LiAlH4 or catalytic hydrogenation, produces a primary amine with:',
    options: [
      'Exactly the same number of carbon atoms as the corresponding alkyl halide precursor',
      'One more carbon atom than the original alkyl group used to form the nitrile',
      'One fewer carbon atom than the corresponding alkyl halide precursor',
      'No relationship whatsoever to the original alkyl halide precursor\'s carbon count'
    ],
    correctIndex: 1,
    explanation: 'Since the nitrile carbon itself becomes the new -CH2-NH2 carbon upon reduction, this method is useful for chain extension, producing a primary amine with one more carbon than the original alkyl halide used to prepare the nitrile via cyanide substitution.',
    difficulty: 'medium'
  },
  {
    id: 'amines-18',
    type: 'mcq',
    question: 'Reduction of an amide (R-CO-NH2), using a strong reducing agent such as LiAlH4, produces a primary amine with:',
    options: [
      'One more carbon atom than the original amide',
      'One fewer carbon atom than the original amide',
      'No definable relationship to the original amide\'s carbon count',
      'The same number of carbon atoms as the original amide'
    ],
    correctIndex: 3,
    explanation: 'Reduction of an amide with LiAlH4 converts the carbonyl carbon directly into a -CH2- group, so the resulting primary amine retains the same total number of carbon atoms as the starting amide.',
    difficulty: 'medium'
  },
  {
    id: 'amines-19',
    type: 'mcq',
    question: 'Compared to the reduction of an amide, the reduction of a nitrile (via cyanide substitution followed by reduction) is particularly useful in synthesis because it provides a route to:',
    options: [
      'Extend the carbon chain by one additional carbon atom',
      'Shorten the carbon chain by one carbon atom',
      'Leave the carbon chain length completely unchanged, identical to amide reduction',
      'Introduce an aromatic ring where none previously existed'
    ],
    correctIndex: 0,
    explanation: 'The nitrile reduction pathway is valued for its ability to extend a carbon chain by one carbon atom (via the added nitrile carbon), a feature distinguishing it from amide reduction, which retains the original chain length.',
    difficulty: 'medium'
  },
  {
    id: 'amines-20',
    type: 'mcq',
    question: 'Both nitrile reduction and amide reduction represent useful synthetic routes to primary amines, and both commonly employ which type of reducing agent?',
    options: [
      'A simple oxidising agent, such as KMnO4',
      'A mild reducing agent incapable of reducing either nitriles or amides',
      'A strong hydride reducing agent, such as LiAlH4',
      'A dehydrating agent, such as concentrated sulphuric acid'
    ],
    correctIndex: 2,
    explanation: 'Both the reduction of nitriles and the reduction of amides to primary amines commonly employ a strong hydride reducing agent, such as lithium aluminium hydride (LiAlH4).',
    difficulty: 'medium'
  },
  {
    id: 'amines-21',
    type: 'mcq',
    question: 'The Gabriel phthalimide synthesis is a valuable method for preparing pure primary amines mainly because it avoids the problem of:',
    options: [
      'Over-alkylation, since the phthalimide nitrogen has no remaining N-H after the initial alkylation step',
      'Insufficient reactivity of the alkyl halide used in the reaction',
      'Excessive cost of the phthalimide starting material',
      'Formation of any nitrogen-containing product whatsoever'
    ],
    correctIndex: 0,
    explanation: 'Since the phthalimide nitrogen, once alkylated, no longer has an available N-H for further reaction, the Gabriel synthesis avoids the over-alkylation problem seen in direct ammonolysis, cleanly yielding only a primary amine after hydrolysis.',
    difficulty: 'medium'
  },
  {
    id: 'amines-22',
    type: 'mcq',
    question: 'In the Gabriel synthesis, the final step, in which the N-alkylphthalimide intermediate is treated with either aqueous acid/base or hydrazine, serves to release the free:',
    options: [
      'Secondary amine, exclusively',
      'Tertiary amine, exclusively',
      'Primary amine',
      'Quaternary ammonium salt, exclusively'
    ],
    correctIndex: 2,
    explanation: 'The final hydrolysis (or hydrazinolysis) step of the Gabriel synthesis cleaves the N-alkylphthalimide intermediate, releasing the desired pure primary amine.',
    difficulty: 'medium'
  },
  {
    id: 'amines-23',
    type: 'mcq',
    question: 'A notable limitation of the Gabriel phthalimide synthesis is that it generally cannot be used to prepare:',
    options: [
      'Any primary amines whatsoever, aliphatic or aromatic',
      'Aromatic primary amines (such as aniline), since aryl halides do not readily undergo the required SN2 substitution with the phthalimide salt',
      'Only methylamine, specifically, with no other aliphatic amine affected',
      'Only ethylamine, specifically, with no other aliphatic amine affected'
    ],
    correctIndex: 1,
    explanation: 'Since aryl halides are generally unreactive toward the SN2 mechanism required in the alkylation step of the Gabriel synthesis, this method cannot be used to directly prepare aromatic primary amines like aniline.',
    difficulty: 'medium'
  },
  {
    id: 'amines-24',
    type: 'mcq',
    question: 'The Hoffmann bromamide degradation reaction converts an amide into a primary amine that contains:',
    options: [
      'The exact same number of carbon atoms as the original amide',
      'One more carbon atom than the original amide',
      'No definable relationship to the original amide\'s carbon count',
      'One fewer carbon atom than the original amide'
    ],
    correctIndex: 3,
    explanation: 'The Hoffmann bromamide degradation reaction is notable for converting an amide into a primary amine that has one fewer carbon atom than the starting amide, since the carbonyl carbon is lost as CO2 during the reaction.',
    difficulty: 'medium'
  },
  {
    id: 'amines-25',
    type: 'mcq',
    question: 'The Hoffmann bromamide degradation reaction is carried out by treating an amide with bromine in the presence of:',
    options: [
      'A concentrated acid solution, such as concentrated HCl',
      'A neutral, unbuffered aqueous solution, with no acid or base added',
      'A completely non-aqueous, anhydrous organic solvent, with no water present',
      'A concentrated alkali solution, such as NaOH or KOH'
    ],
    correctIndex: 3,
    explanation: 'The Hoffmann bromamide degradation reaction involves treating an amide with bromine in the presence of a concentrated alkali (such as NaOH or KOH).',
    difficulty: 'medium'
  },
  {
    id: 'amines-26',
    type: 'mcq',
    question: 'Compared to the Gabriel synthesis and the reduction of nitriles/amides (which either preserve or extend the carbon chain), the Hoffmann bromamide degradation is distinctive in providing a method to:',
    options: [
      'Extend the carbon chain by exactly one carbon atom, identical to nitrile reduction',
      'Shorten the carbon chain by exactly one carbon atom while converting an amide directly into an amine',
      'Leave the carbon chain completely unchanged, identical to amide reduction',
      'Convert an amine directly back into the corresponding amide, in the reverse direction'
    ],
    correctIndex: 1,
    explanation: 'The Hoffmann bromamide degradation is uniquely useful because it shortens the carbon chain by one carbon atom, converting an amide directly into a primary amine, in contrast to methods that preserve or extend the chain length.',
    difficulty: 'medium'
  },
  {
    id: 'amines-27',
    type: 'mcq',
    question: 'Among primary, secondary, and tertiary amines of comparable molecular mass, tertiary amines generally show the lowest boiling points mainly because they:',
    options: [
      'Form the strongest possible intermolecular hydrogen bonds among all amine types',
      'Have significantly greater molecular mass than primary or secondary amines',
      'Cannot form intermolecular hydrogen bonds with each other, lacking any N-H bond',
      'Contain no nitrogen atom at all, unlike primary and secondary amines'
    ],
    correctIndex: 2,
    explanation: 'Tertiary amines, lacking any N-H bond, cannot engage in intermolecular hydrogen bonding with each other, resulting in generally lower boiling points compared to primary and secondary amines of similar molecular mass.',
    difficulty: 'medium'
  },
  {
    id: 'amines-28',
    type: 'mcq',
    question: 'Among isomeric primary, secondary, and tertiary amines, the general order of decreasing boiling point is typically observed as:',
    options: [
      'Primary > Secondary > Tertiary',
      'Tertiary > Secondary > Primary',
      'Secondary > Tertiary > Primary',
      'All isomeric amine types show exactly identical boiling points'
    ],
    correctIndex: 0,
    explanation: 'Since primary amines have two N-H bonds (allowing more extensive hydrogen bonding) compared to secondary amines (one N-H) and tertiary amines (none), the boiling point order generally follows Primary > Secondary > Tertiary.',
    difficulty: 'medium'
  },
  {
    id: 'amines-29',
    type: 'mcq',
    question: 'Despite being capable of hydrogen bonding, amines generally show lower boiling points than alcohols of comparable molecular mass, mainly because nitrogen is:',
    options: [
      'Less electronegative than oxygen, resulting in weaker N-H hydrogen bonds compared to O-H hydrogen bonds',
      'More electronegative than oxygen, which would actually be expected to increase amine boiling points beyond those of alcohols',
      'Completely incapable of forming any hydrogen bond whatsoever, under any circumstances',
      'Identical in electronegativity to oxygen, offering no explanation for any boiling point difference'
    ],
    correctIndex: 0,
    explanation: 'Since nitrogen is less electronegative than oxygen, the N-H bond in amines is less polar than the O-H bond in alcohols, resulting in comparatively weaker hydrogen bonding and generally lower boiling points for amines compared to similarly sized alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'amines-30',
    type: 'mcq',
    question: 'Lower aliphatic amines generally show good solubility in water mainly because they can form hydrogen bonds with:',
    options: [
      'Only other amine molecules, with no interaction with water at all',
      'Only completely non-polar organic solvents, with no interaction with water at all',
      'Water molecules',
      'No molecules whatsoever; lower amines are actually completely insoluble in water'
    ],
    correctIndex: 2,
    explanation: 'Lower aliphatic amines, particularly primary and secondary amines, can form hydrogen bonds with water molecules, contributing to their generally good water solubility.',
    difficulty: 'medium'
  },
  {
    id: 'amines-31',
    type: 'mcq',
    question: 'Many amines are commonly noted for possessing a distinctive, often unpleasant, characteristic odour, frequently described as:',
    options: [
      'Sweet and fruity, in essentially all cases',
      'Completely odourless, in essentially all cases',
      'Identical to the smell of freshly cut grass, in essentially all cases',
      'Fishy'
    ],
    correctIndex: 3,
    explanation: 'Amines are commonly noted for their distinctive, often unpleasant, \'fishy\' odour, a characteristic feature useful for their identification.',
    difficulty: 'medium'
  },
  {
    id: 'amines-32',
    type: 'mcq',
    question: 'Amines are generally classified as basic compounds mainly because the nitrogen atom possesses a lone pair of electrons capable of:',
    options: [
      'Donating a proton (H+) readily, similar to a typical acid',
      'Accepting a proton (H+)',
      'Accepting an additional pair of electrons, rather than donating one',
      'Forming only non-polar covalent bonds, with no capacity for accepting protons'
    ],
    correctIndex: 1,
    explanation: 'The basicity of amines arises from the availability of the nitrogen lone pair, which can readily accept a proton (H+), consistent with the Bronsted-Lowry definition of a base.',
    difficulty: 'easy'
  },
  {
    id: 'amines-33',
    type: 'mcq',
    question: 'The inductive effect of electron-donating alkyl groups attached to the nitrogen atom of an amine generally tends to:',
    options: [
      'Decrease the electron density on nitrogen, tending to decrease basicity',
      'Have no effect whatsoever on the basicity of the amine',
      'Completely eliminate the lone pair of electrons from the nitrogen atom',
      'Increase the electron density on nitrogen, tending to increase basicity'
    ],
    correctIndex: 3,
    explanation: 'Electron-donating alkyl groups increase the electron density on the nitrogen atom through the inductive effect, which in isolation would tend to increase the basicity of the amine.',
    difficulty: 'medium'
  },
  {
    id: 'amines-34',
    type: 'mcq',
    question: 'Steric hindrance from bulky alkyl groups attached to the nitrogen atom of an amine can hinder both protonation and the subsequent solvation of the resulting cation, an effect that generally tends to:',
    options: [
      'Decrease the observed basicity of the amine',
      'Increase the observed basicity of the amine',
      'Have no effect whatsoever on the observed basicity',
      'Completely eliminate the amine\'s ability to react with any acid'
    ],
    correctIndex: 0,
    explanation: 'Bulky alkyl groups can sterically hinder both the initial protonation of the amine and the stabilisation (solvation) of the resulting ammonium cation, tending to decrease the observed basicity, especially in solution.',
    difficulty: 'medium'
  },
  {
    id: 'amines-35',
    type: 'mcq',
    question: 'In aqueous solution, the observed basicity of simple aliphatic amines is influenced by a combination of inductive effects, steric hindrance, and:',
    options: [
      'The exact colour of the amine solution, with no chemical relevance at all',
      'The extent of hydrogen bonding (solvation) stabilising the resulting protonated ammonium cation',
      'The atomic mass of the nitrogen atom, which is constant and therefore irrelevant to comparing different amines',
      'The boiling point of the pure amine in the gas phase, with no relevance to aqueous behaviour'
    ],
    correctIndex: 1,
    explanation: 'The overall basicity of amines in aqueous solution reflects the combined influence of inductive effects, steric hindrance, and the degree to which the resulting protonated (ammonium) cation is stabilised through hydrogen bonding (solvation) by water.',
    difficulty: 'medium'
  },
  {
    id: 'amines-36',
    type: 'mcq',
    question: 'Due to the combined interplay of inductive, steric, and solvation effects, the experimentally observed order of basicity for simple aliphatic amines in aqueous solution often does not follow a simple pattern based on alkyl substitution alone, but instead frequently shows:',
    options: [
      'A perfectly linear increase in basicity with each additional alkyl group, without exception',
      'All three amine types (primary, secondary, tertiary) showing exactly identical basicity in every case',
      'Secondary amines as more basic than primary amines, which are in turn more basic than tertiary amines',
      'Tertiary amines always showing the highest basicity of the three amine types, without exception'
    ],
    correctIndex: 2,
    explanation: 'Due to the complex interplay of inductive, steric, and solvation effects, the basicity order for simple aliphatic amines in aqueous solution often deviates from a simple trend, frequently showing secondary > primary > tertiary.',
    difficulty: 'hard'
  },
  {
    id: 'amines-37',
    type: 'mcq',
    question: 'Ammonia itself, lacking any alkyl substituents, generally serves as a useful reference point for comparing the basicity of various substituted amines, since alkyl substitution can either increase or decrease basicity relative to:',
    options: [
      'Water, exclusively, with no relevance to ammonia at all',
      'Aniline, exclusively, with no relevance to ammonia at all',
      'Ammonia',
      'A generic carboxylic acid, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Ammonia serves as a key reference point when comparing the basicity of various aliphatic amines, since the effects of alkyl substitution can be evaluated relative to this simple, unsubstituted baseline.',
    difficulty: 'medium'
  },
  {
    id: 'amines-38',
    type: 'mcq',
    question: 'Aromatic amines, such as aniline, are generally found to be considerably less basic than both ammonia and simple aliphatic amines mainly because the lone pair on nitrogen:',
    options: [
      'Is completely absent in aromatic amines, unlike aliphatic amines',
      'Delocalises into the aromatic ring via resonance, reducing its availability for protonation',
      'Becomes significantly more available for protonation compared to aliphatic amines',
      'Is entirely converted into a bonding pair, forming an additional covalent bond within the ring'
    ],
    correctIndex: 1,
    explanation: 'In aniline, the nitrogen lone pair is delocalised into the aromatic ring through resonance, significantly reducing its availability for accepting a proton, and thereby reducing aniline\'s basicity compared to aliphatic amines.',
    difficulty: 'medium'
  },
  {
    id: 'amines-39',
    type: 'mcq',
    question: 'Upon protonation, the resulting anilinium ion loses the resonance stabilisation that was previously available to the free amine, since the lone pair (now used to bind the proton) can no longer delocalise into the ring; this loss of resonance stabilisation upon protonation contributes to aniline\'s relatively:',
    options: [
      'Low basicity (weak base character)',
      'High basicity (strong base character)',
      'Complete lack of any acid-base character whatsoever',
      'Identical basicity to that of a typical aliphatic amine, with no meaningful difference'
    ],
    correctIndex: 0,
    explanation: 'Since protonation of aniline eliminates the resonance stabilisation previously enjoyed by the free amine (as the lone pair becomes tied up in the new N-H bond), this destabilises the conjugate acid relative to what would be expected without resonance, contributing to aniline\'s comparatively weak basicity.',
    difficulty: 'hard'
  },
  {
    id: 'amines-40',
    type: 'mcq',
    question: 'The presence of an electron-donating group (such as -CH3 or -OCH3) at the para position of a substituted aniline generally has which effect on the compound\'s basicity, relative to unsubstituted aniline?',
    options: [
      'Decreases basicity',
      'Has no effect whatsoever on basicity',
      'Converts the compound from a base into an acid',
      'Increases basicity'
    ],
    correctIndex: 3,
    explanation: 'Electron-donating substituents at the para position further increase electron density on the nitrogen (via resonance/induction), generally increasing the basicity of the substituted aniline compared to unsubstituted aniline.',
    difficulty: 'medium'
  },
  {
    id: 'amines-41',
    type: 'mcq',
    question: 'The presence of an electron-withdrawing group (such as -NO2 or -Cl) at the para position of a substituted aniline generally has which effect on the compound\'s basicity, relative to unsubstituted aniline?',
    options: [
      'Decreases basicity',
      'Increases basicity',
      'Has no effect whatsoever on basicity',
      'Converts the compound into an even stronger base than ammonia'
    ],
    correctIndex: 0,
    explanation: 'Electron-withdrawing substituents at the para position further decrease electron density on the nitrogen (via resonance/induction), generally decreasing the basicity of the substituted aniline compared to unsubstituted aniline.',
    difficulty: 'medium'
  },
  {
    id: 'amines-42',
    type: 'mcq',
    question: 'Para-nitroaniline is notably a much weaker base than unsubstituted aniline mainly because the strongly electron-withdrawing nitro group can withdraw electron density from the nitrogen lone pair through an extended, conjugated:',
    options: [
      'Purely inductive pathway, with absolutely no involvement of resonance at all',
      'Direct covalent bond, formed between the nitro group and the amino nitrogen',
      'Hydrogen bonding pathway, unrelated to any electron delocalisation',
      'Resonance pathway across the aromatic ring'
    ],
    correctIndex: 3,
    explanation: 'The strong electron-withdrawing nitro group at the para position can withdraw electron density from the amino nitrogen through an extended, conjugated resonance pathway across the aromatic ring, making para-nitroaniline a considerably weaker base than aniline itself.',
    difficulty: 'hard'
  },
  {
    id: 'amines-43',
    type: 'mcq',
    question: 'Which of the following correctly ranks the relative basicity of ammonia, a typical aliphatic amine, and aniline, from strongest to weakest base?',
    options: [
      'Aniline > Ammonia > A typical aliphatic amine',
      'A typical aliphatic amine > Ammonia > Aniline',
      'Ammonia > Aniline > A typical aliphatic amine',
      'All three compounds show exactly identical basicity, with no meaningful distinction possible'
    ],
    correctIndex: 1,
    explanation: 'Typical aliphatic amines (benefiting from electron-donating alkyl groups) are generally more basic than ammonia, which is in turn considerably more basic than aniline (whose nitrogen lone pair is significantly delocalised into the aromatic ring).',
    difficulty: 'hard'
  },
  {
    id: 'amines-44',
    type: 'mcq',
    question: 'The reaction of a primary or secondary amine with an acid chloride or acid anhydride, forming an amide (N-acyl derivative), is called:',
    options: [
      'Carbylamine reaction',
      'Diazotisation',
      'Acylation',
      'Coupling reaction'
    ],
    correctIndex: 2,
    explanation: 'Acylation refers to the reaction of a primary or secondary amine with an acid chloride or anhydride, producing the corresponding N-acyl derivative (amide).',
    difficulty: 'easy'
  },
  {
    id: 'amines-45',
    type: 'mcq',
    question: 'The carbylamine (isocyanide) test involves treating an amine with chloroform and alcoholic potassium hydroxide, and this test is specifically positive only for:',
    options: [
      'Secondary amines exclusively',
      'Primary amines',
      'Tertiary amines exclusively',
      'Any amine type equally, with no distinguishing selectivity at all'
    ],
    correctIndex: 1,
    explanation: 'The carbylamine test is specific to primary amines (aliphatic or aromatic), producing an isocyanide with a characteristic extremely unpleasant smell; secondary and tertiary amines do not give this test.',
    difficulty: 'medium'
  },
  {
    id: 'amines-46',
    type: 'mcq',
    question: 'A positive carbylamine test is characteristically indicated by the formation of an isocyanide product possessing a distinctive and highly:',
    options: [
      'Pleasant, sweet, floral smell',
      'Complete absence of any odour whatsoever',
      'Unpleasant (offensive) smell',
      'Odour identical to that of freshly baked bread'
    ],
    correctIndex: 2,
    explanation: 'The isocyanide (carbylamine) formed in a positive carbylamine test is characteristically noted for its extremely unpleasant, offensive odour, making this test easy to recognise experimentally.',
    difficulty: 'medium'
  },
  {
    id: 'amines-47',
    type: 'mcq',
    question: 'The general formula of the product formed in the carbylamine reaction, an isocyanide, is typically represented as:',
    options: [
      'R-NC',
      'R-CN',
      'R-NO2',
      'R-N=N-R\''
    ],
    correctIndex: 0,
    explanation: 'The isocyanide (carbylamine) product formed in this test has the general formula R-NC, distinct from a nitrile (R-CN).',
    difficulty: 'medium'
  },
  {
    id: 'amines-48',
    type: 'mcq',
    question: 'Primary aliphatic amines react with nitrous acid (HNO2), generated in situ, to form an unstable diazonium salt that rapidly decomposes with the evolution of nitrogen gas, producing a complex mixture of products, including:',
    options: [
      'Only pure alkanes, with no other products formed at all',
      'Only pure carboxylic acids, with no other products formed at all',
      'Only pure amides, with no other products formed at all',
      'Alcohols, alkenes, and alkyl halides'
    ],
    correctIndex: 3,
    explanation: 'Aliphatic primary amines form highly unstable diazonium salts upon reaction with nitrous acid, which rapidly decompose (releasing N2 gas) to give a complex mixture of products, including alcohols, alkenes, and alkyl halides.',
    difficulty: 'medium'
  },
  {
    id: 'amines-49',
    type: 'mcq',
    question: 'Primary aromatic amines, such as aniline, react with nitrous acid at low temperature (approximately 0-5°C) to form a relatively more stable:',
    options: [
      'N-nitrosamine',
      'Isocyanide (carbylamine)',
      'Simple, unreactive ammonium salt',
      'Arenediazonium salt'
    ],
    correctIndex: 3,
    explanation: 'Primary aromatic amines react with nitrous acid at low temperature to form comparatively stable arenediazonium salts, important intermediates for further synthetic transformations.',
    difficulty: 'medium'
  },
  {
    id: 'amines-50',
    type: 'mcq',
    question: 'The low temperature (0-5°C) used when preparing arenediazonium salts from primary aromatic amines is essential mainly because these diazonium salts:',
    options: [
      'Are actually most stable at very high temperatures, making low temperature unnecessary',
      'Cannot form at all, at any temperature, without additional specialised catalysts',
      'Tend to decompose readily if the temperature is allowed to rise significantly above this range',
      'Require freezing conditions well below 0°C for even the initial formation to occur'
    ],
    correctIndex: 2,
    explanation: 'Arenediazonium salts, while more stable than their aliphatic counterparts, still tend to decompose at temperatures much above 0-5°C, necessitating careful temperature control during their preparation.',
    difficulty: 'medium'
  },
  {
    id: 'amines-51',
    type: 'mcq',
    question: 'Secondary amines (whether aliphatic or aromatic) react with nitrous acid to form a characteristic yellow, oily product called a(n):',
    options: [
      'N-nitrosamine',
      'Arenediazonium salt',
      'Isocyanide (carbylamine)',
      'Simple, unreactive ammonium salt'
    ],
    correctIndex: 0,
    explanation: 'Secondary amines react with nitrous acid to form N-nitrosamines, typically observed as characteristic yellow, oily liquid products.',
    difficulty: 'medium'
  },
  {
    id: 'amines-52',
    type: 'mcq',
    question: 'Tertiary aliphatic amines, upon reaction with nitrous acid, generally do not form any stable, isolable organic product, instead simply forming an unstable:',
    options: [
      'N-nitrosamine, identical to the product formed from secondary amines',
      'Salt, which readily reverts back to the starting materials',
      'Arenediazonium salt, identical to the product formed from primary aromatic amines',
      'Isocyanide, identical to the product formed from primary amines'
    ],
    correctIndex: 1,
    explanation: 'Tertiary aliphatic amines simply form an unstable salt with nitrous acid, which readily reverts back to the starting amine and nitrous acid, without giving any stable, permanent organic product.',
    difficulty: 'medium'
  },
  {
    id: 'amines-53',
    type: 'mcq',
    question: 'Tertiary aromatic amines, unlike tertiary aliphatic amines, react with nitrous acid via electrophilic aromatic substitution, typically introducing a nitroso group (-NO) predominantly at the ___ position of the aromatic ring.',
    options: [
      'Para',
      'Ortho, exclusively, with no para product formed at all',
      'Meta, exclusively',
      'Ipso (the exact position already bearing the amino substituent)'
    ],
    correctIndex: 0,
    explanation: 'Tertiary aromatic amines undergo electrophilic aromatic substitution with nitrous acid, introducing a nitroso group predominantly at the para position relative to the existing amino substituent.',
    difficulty: 'hard'
  },
  {
    id: 'amines-54',
    type: 'mcq',
    question: 'The differential reactivity of primary, secondary, and tertiary amines toward nitrous acid, producing distinctly different types of products (diazonium salts, nitrosamines, simple salts, or ring-nitrosated products respectively), makes this reaction useful for:',
    options: [
      'Converting all amine types into exactly identical products, with no distinguishing utility at all',
      'Distinguishing between the three classes of amines',
      'Permanently destroying all amine functionality, regardless of amine class',
      'Synthesising large quantities of pure ammonia from any given amine'
    ],
    correctIndex: 1,
    explanation: 'Since primary, secondary, and tertiary amines each react distinctively with nitrous acid, this differential reactivity provides a useful chemical method for distinguishing between the three classes of amines.',
    difficulty: 'medium'
  },
  {
    id: 'amines-55',
    type: 'mcq',
    question: 'The Hinsberg test, used to distinguish between primary, secondary, and tertiary amines, employs a specific reagent called:',
    options: [
      'Ammoniacal silver nitrate (Tollens\' reagent)',
      'Chloroform and alcoholic KOH (used in the carbylamine test)',
      'Bromine water',
      'Benzenesulphonyl chloride (Hinsberg\'s reagent)'
    ],
    correctIndex: 3,
    explanation: 'The Hinsberg test uses benzenesulphonyl chloride (Hinsberg\'s reagent) to distinguish between primary, secondary, and tertiary amines based on the differing solubility of their reaction products.',
    difficulty: 'medium'
  },
  {
    id: 'amines-56',
    type: 'mcq',
    question: 'In the Hinsberg test, a primary amine reacts with benzenesulphonyl chloride to form a sulphonamide product that retains an acidic N-H (due to the electron-withdrawing sulphonyl group), and this product is generally found to be:',
    options: [
      'Completely insoluble in aqueous alkali, under all conditions',
      'Explosively reactive with alkali, destroying the sample entirely',
      'Soluble in aqueous alkali (KOH), since the remaining N-H can be deprotonated',
      'Identical in solubility behaviour to the product formed from a tertiary amine'
    ],
    correctIndex: 2,
    explanation: 'The sulphonamide product formed from a primary amine in the Hinsberg test retains one acidic N-H, allowing it to be deprotonated and dissolved in aqueous alkali, distinguishing it from the secondary amine\'s product.',
    difficulty: 'medium'
  },
  {
    id: 'amines-57',
    type: 'mcq',
    question: 'In the Hinsberg test, a tertiary amine generally shows no observable reaction with benzenesulphonyl chloride mainly because tertiary amines:',
    options: [
      'Are far too reactive, reacting instantaneously and violently with the reagent',
      'Contain no nitrogen atom at all, unlike primary and secondary amines',
      'Have no N-H hydrogen available for the required substitution reaction to occur',
      'Are always completely insoluble in the reaction solvent, preventing any contact with the reagent'
    ],
    correctIndex: 2,
    explanation: 'Since tertiary amines lack any N-H hydrogen for the sulphonyl chloride to react with in the expected substitution manner, they generally show no reaction (or only a very different type of interaction) in the Hinsberg test, allowing them to be distinguished from primary and secondary amines.',
    difficulty: 'medium'
  },
  {
    id: 'amines-58',
    type: 'mcq',
    question: 'The -NH2 group of aniline is a strongly activating substituent in electrophilic aromatic substitution reactions, and is also described as being:',
    options: [
      'Meta-directing, exclusively',
      'Completely non-directing, with no preference for any ring position at all',
      'Deactivating, similar to a nitro group',
      'Ortho/para-directing'
    ],
    correctIndex: 3,
    explanation: 'The strongly electron-donating -NH2 group of aniline activates the ring toward electrophilic substitution and directs incoming electrophiles predominantly to the ortho and para positions, via resonance donation of the nitrogen lone pair.',
    difficulty: 'medium'
  },
  {
    id: 'amines-59',
    type: 'mcq',
    question: 'Direct bromination of aniline using bromine water, without requiring any catalyst, characteristically produces a white precipitate of:',
    options: [
      '2,4,6-Tribromoaniline',
      'Only a monobrominated product, with no over-bromination occurring at all',
      'Only a dibrominated product, exclusively',
      'No reaction whatsoever occurs between aniline and bromine water'
    ],
    correctIndex: 0,
    explanation: 'Aniline reacts readily with bromine water (due to the strongly activating -NH2 group) to give 2,4,6-tribromoaniline as a characteristic white precipitate, without requiring any additional catalyst.',
    difficulty: 'medium'
  },
  {
    id: 'amines-60',
    type: 'mcq',
    question: 'To achieve controlled, predominantly mono-substitution (rather than extensive polysubstitution) during bromination or nitration of aniline, a common synthetic strategy involves first converting aniline into its less strongly activating N-acetyl derivative, called:',
    options: [
      'Benzanilide, an entirely unrelated compound',
      'Acetanilide',
      'Nitroaniline, which would defeat the purpose of controlled mono-nitration',
      'Sulphanilic acid, an entirely unrelated compound'
    ],
    correctIndex: 1,
    explanation: 'Protecting aniline by acetylation (forming acetanilide) reduces the strong activating power of the amino group, allowing for more controlled, predominantly mono-substitution during subsequent bromination or nitration reactions.',
    difficulty: 'medium'
  },
  {
    id: 'amines-61',
    type: 'mcq',
    question: 'Direct nitration of unprotected aniline with concentrated nitric acid is often problematic mainly because aniline can become protonated by the strong acid, forming an anilinium ion that behaves as a:',
    options: [
      'Even more strongly ortho/para-directing and activating group than the free amine itself',
      'Meta-directing, deactivating group, opposite to the ortho/para-directing behaviour of the free amine',
      'Group with absolutely no directing influence whatsoever on further substitution',
      'Group that instantly and completely destroys the aromatic ring'
    ],
    correctIndex: 1,
    explanation: 'Protonation of the amino group under strongly acidic nitration conditions converts it into an anilinium ion, which (lacking a free lone pair to donate) behaves as a meta-directing, deactivating group, the opposite of the ortho/para-directing behaviour shown by free aniline.',
    difficulty: 'hard'
  },
  {
    id: 'amines-62',
    type: 'mcq',
    question: 'Because of the complications arising from protonation during direct nitration, aniline is often first protected via acetylation before nitration is carried out, a strategy that also helps prevent:',
    options: [
      'Oxidative damage to the aromatic ring by the strongly oxidising concentrated nitric acid',
      'Any nitration from occurring at all, defeating the overall synthetic purpose',
      'The eventual removal of the acetyl protecting group after the reaction is complete',
      'Formation of any coloured product whatsoever'
    ],
    correctIndex: 0,
    explanation: 'In addition to controlling the regiochemistry of nitration, acetylation of aniline before nitration also helps protect the sensitive aromatic ring from oxidative damage caused by the strongly oxidising concentrated nitric acid.',
    difficulty: 'hard'
  },
  {
    id: 'amines-63',
    type: 'mcq',
    question: 'Sulphonation of aniline with concentrated sulphuric acid, upon heating, ultimately produces a zwitterionic (internally salted) product known as:',
    options: [
      'Acetanilide',
      '2,4,6-Tribromoaniline',
      'Sulphanilic acid',
      'An arenediazonium salt'
    ],
    correctIndex: 2,
    explanation: 'Sulphonation of aniline with concentrated sulphuric acid, followed by heating (to allow rearrangement), produces sulphanilic acid (para-aminobenzenesulphonic acid), which exists as a stable, high-melting zwitterion.',
    difficulty: 'medium'
  },
  {
    id: 'amines-64',
    type: 'mcq',
    question: 'The process of converting a primary aromatic amine into the corresponding arenediazonium salt, using sodium nitrite and hydrochloric acid at low temperature, is called:',
    options: [
      'Acylation',
      'Hinsberg reaction',
      'Coupling',
      'Diazotisation'
    ],
    correctIndex: 3,
    explanation: 'Diazotisation is the specific chemical process by which a primary aromatic amine is converted into the corresponding arenediazonium salt, typically using NaNO2/HCl at 0-5°C.',
    difficulty: 'medium'
  },
  {
    id: 'amines-65',
    type: 'mcq',
    question: 'The general formula of an arenediazonium salt, an important synthetic intermediate, is typically represented as:',
    options: [
      'Ar-NC',
      'Ar-NO2',
      'Ar-N=N-Ar\'',
      'ArN2+X-'
    ],
    correctIndex: 3,
    explanation: 'Arenediazonium salts have the general formula ArN2+X-, where Ar represents an aromatic ring and X- represents the counter-ion (such as chloride).',
    difficulty: 'medium'
  },
  {
    id: 'amines-66',
    type: 'mcq',
    question: 'Arenediazonium salts are considered particularly valuable synthetic intermediates mainly because the diazonium group (-N2+) can be readily replaced by a variety of different:',
    options: [
      'Only a single, fixed type of nucleophile, with no versatility at all',
      'Nucleophiles, allowing access to numerous other functional groups on the aromatic ring',
      'No nucleophile whatsoever; the diazonium group is completely unreactive once formed',
      'Only additional diazonium groups, resulting in no net change to the molecule'
    ],
    correctIndex: 1,
    explanation: 'The versatility of arenediazonium salts as synthetic intermediates stems from the ability of the -N2+ group to be readily displaced by a wide range of nucleophiles, providing access to numerous other aromatic functional groups.',
    difficulty: 'medium'
  },
  {
    id: 'amines-67',
    type: 'mcq',
    question: 'Despite their synthetic usefulness, arenediazonium salts generally remain reactive/unstable, and it is precisely this instability (their tendency to lose N2 gas readily) that makes them valuable as:',
    options: [
      'Precursors for introducing a wide variety of different substituents onto the aromatic ring, via nucleophilic substitution',
      'Completely stable, inert end-products with no further synthetic utility whatsoever',
      'The final, desired product in essentially all synthetic applications, requiring no further transformation',
      'Compounds entirely unrelated to any practical synthetic application'
    ],
    correctIndex: 0,
    explanation: 'The characteristic instability of arenediazonium salts (readily losing N2) is precisely what makes them so useful, since this instability facilitates their conversion into a wide variety of other substituted aromatic compounds via nucleophilic substitution.',
    difficulty: 'medium'
  },
  {
    id: 'amines-68',
    type: 'mcq',
    question: 'The Sandmeyer reaction converts an arenediazonium salt into an aryl chloride or aryl bromide using cuprous halide (CuCl or CuBr) in the presence of the corresponding:',
    options: [
      'Hydrogen peroxide',
      'Hydrazine',
      'Hydrogen halide (HX)',
      'Grignard reagent'
    ],
    correctIndex: 2,
    explanation: 'The Sandmeyer reaction employs cuprous halide (CuCl or CuBr) together with the corresponding hydrogen halide to convert an arenediazonium salt into the corresponding aryl halide.',
    difficulty: 'medium'
  },
  {
    id: 'amines-69',
    type: 'mcq',
    question: 'The Gattermann reaction, closely related to the Sandmeyer reaction, achieves a similar conversion of an arenediazonium salt into an aryl halide, but instead uses copper powder together with:',
    options: [
      'The corresponding hydrogen halide (HX)',
      'A palladium catalyst, exclusively',
      'Hydrazine, exclusively',
      'Lithium aluminium hydride, exclusively'
    ],
    correctIndex: 0,
    explanation: 'The Gattermann reaction is a variant of the Sandmeyer reaction that uses copper powder (instead of a cuprous salt) together with the corresponding hydrogen halide to convert an arenediazonium salt into an aryl halide.',
    difficulty: 'medium'
  },
  {
    id: 'amines-70',
    type: 'mcq',
    question: 'Treatment of an arenediazonium salt with potassium iodide (KI) directly provides a convenient method for preparing an aryl iodide, without requiring any additional:',
    options: [
      'Water at all, under any circumstances',
      'Diazonium salt whatsoever',
      'Copper catalyst',
      'Aromatic ring within the starting material'
    ],
    correctIndex: 2,
    explanation: 'Unlike the preparation of aryl chlorides/bromides (which typically requires a copper catalyst), the conversion of an arenediazonium salt to an aryl iodide can be achieved directly using potassium iodide, without needing a copper catalyst.',
    difficulty: 'medium'
  },
  {
    id: 'amines-71',
    type: 'mcq',
    question: 'The Balz-Schiemann reaction, used to prepare aryl fluorides, involves treating an arenediazonium salt with fluoroboric acid (HBF4), followed by:',
    options: [
      'Treatment with excess hydrazine, exclusively',
      'Careful heating (thermal decomposition) of the resulting diazonium tetrafluoroborate salt',
      'Treatment with a Grignard reagent, exclusively',
      'Cooling to extremely low, cryogenic temperatures, with no heating involved at all'
    ],
    correctIndex: 1,
    explanation: 'The Balz-Schiemann reaction converts an arenediazonium salt into an aryl fluoride by first forming a diazonium tetrafluoroborate salt with HBF4, which is then carefully heated to induce thermal decomposition, releasing the aryl fluoride product.',
    difficulty: 'hard'
  },
  {
    id: 'amines-72',
    type: 'mcq',
    question: 'Treatment of an arenediazonium salt with hypophosphorous acid (H3PO2) achieves a reductive deamination reaction, in which the diazonium group is simply replaced by:',
    options: [
      'A halogen atom, identical to the Sandmeyer reaction outcome',
      'A hydroxyl group, identical to the outcome of simple hydrolysis',
      'An additional nitrogen atom, doubling the original nitrogen content',
      'A hydrogen atom'
    ],
    correctIndex: 3,
    explanation: 'Reaction of an arenediazonium salt with hypophosphorous acid (H3PO2) replaces the diazonium group simply with a hydrogen atom, a useful reductive deamination reaction often employed to remove an amino group after it has served its synthetic purpose.',
    difficulty: 'medium'
  },
  {
    id: 'amines-73',
    type: 'mcq',
    question: 'Warming an arenediazonium salt with water (without any additional reagent) typically results in hydrolysis, replacing the diazonium group with a hydroxyl group to form the corresponding:',
    options: [
      'Aryl halide, identical to the outcome of a Sandmeyer-type reaction',
      'Phenol',
      'Aniline, regenerating the original starting amine unchanged',
      'Benzene, with complete loss of the oxygen-containing functionality'
    ],
    correctIndex: 1,
    explanation: 'Simply warming an arenediazonium salt with water typically results in hydrolysis, replacing the diazonium group with a hydroxyl group and yielding the corresponding phenol, along with the release of nitrogen gas.',
    difficulty: 'medium'
  },
  {
    id: 'amines-74',
    type: 'mcq',
    question: 'Coupling reactions of arenediazonium salts with activated aromatic compounds, such as phenols or aromatic amines, produce brightly coloured products known as:',
    options: [
      'Simple aryl halides',
      'Simple carboxylic acids',
      'Simple isocyanides',
      'Azo compounds'
    ],
    correctIndex: 3,
    explanation: 'Coupling reactions between arenediazonium salts and activated aromatic rings (like phenols or amines) produce brightly coloured azo compounds (Ar-N=N-Ar\'), which are widely used as dyes.',
    difficulty: 'medium'
  },
  {
    id: 'amines-75',
    type: 'mcq',
    question: 'Azo coupling reactions between an arenediazonium salt and an activated aromatic ring (such as a phenol or aromatic amine) generally occur predominantly at the:',
    options: [
      'Meta position, exclusively, regardless of substitution pattern',
      'Ipso position (the exact carbon already bearing the activating substituent)',
      'Para position relative to the activating group, if that position is available',
      'A position with no relationship whatsoever to the existing activating substituent'
    ],
    correctIndex: 2,
    explanation: 'Azo coupling reactions generally occur predominantly at the para position relative to the activating -OH or -NH2 group on the coupling partner, if this position is available (otherwise, ortho coupling can occur).',
    difficulty: 'medium'
  },
  {
    id: 'amines-76',
    type: 'mcq',
    question: 'Because of their intense, characteristic colours, azo compounds produced through diazonium coupling reactions are widely and practically employed as:',
    options: [
      'Synthetic dyes',
      'General anaesthetics, exclusively',
      'Common food preservatives, exclusively, with no relation to their colour properties',
      'Industrial refrigerants, exclusively'
    ],
    correctIndex: 0,
    explanation: 'The intense, characteristic colours of azo compounds make them widely useful and practically important as synthetic dyes in various industries.',
    difficulty: 'medium'
  },
  {
    id: 'amines-77',
    type: 'mcq',
    question: 'Assertion: Aniline does not undergo the Friedel-Crafts reaction cleanly.\nReason: The Lewis acid catalyst (AlCl3) forms a strong complex with the lone pair on the amino nitrogen, deactivating the ring toward electrophilic attack.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since AlCl3 coordinates strongly with the nitrogen lone pair of aniline, this complexation deactivates the ring and prevents the normal activating effect of the amino group from operating, correctly explaining why Friedel-Crafts reactions on aniline are generally unsuccessful.',
    difficulty: 'hard'
  },
  {
    id: 'amines-78',
    type: 'mcq',
    question: 'Quaternary ammonium salts, formed when all four hydrogen atoms of the ammonium ion are replaced by alkyl or aryl groups, carry a permanent positive charge on nitrogen and are generally:',
    options: [
      'Completely insoluble in water under all circumstances',
      'Neutral, non-ionic gases at room temperature',
      'Identical in properties to simple tertiary amines',
      'Water-soluble, ionic solids'
    ],
    correctIndex: 3,
    explanation: 'Quaternary ammonium salts, bearing a permanent positive charge on the fully substituted nitrogen, behave as ionic compounds and are generally water-soluble solids, distinct from the neutral, basic character of ordinary amines.',
    difficulty: 'medium'
  },
];
export default questions;