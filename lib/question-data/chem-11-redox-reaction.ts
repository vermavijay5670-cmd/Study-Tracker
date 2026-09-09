import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Redox Reactions
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'redox-reactions-1',
    type: 'mcq',
    question: 'According to the classical (early) concept, oxidation was originally defined as the addition of oxygen (or an electronegative element) to a substance, or the removal of:',
    options: [
      'Oxygen from the same substance',
      'Hydrogen (or an electropositive element)',
      'Water molecules only',
      'Carbon atoms exclusively'
    ],
    correctIndex: 1,
    explanation: 'The classical definition described oxidation as the addition of oxygen/electronegative elements, or alternatively, the removal of hydrogen/electropositive elements from a substance.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-2',
    type: 'mcq',
    question: 'According to the classical (early) concept, reduction was originally defined as the addition of hydrogen (or an electropositive element), or the removal of:',
    options: [
      'Hydrogen from the same substance',
      'Water molecules only',
      'Nitrogen atoms exclusively',
      'Oxygen (or an electronegative element)'
    ],
    correctIndex: 3,
    explanation: 'The classical definition described reduction as the addition of hydrogen/electropositive elements, or alternatively, the removal of oxygen/electronegative elements from a substance.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-3',
    type: 'mcq',
    question: 'In the reaction 2Mg + O2 → 2MgO, according to the classical concept, magnesium is said to undergo:',
    options: [
      'Oxidation, since oxygen is added to it',
      'Reduction, since oxygen is added to it',
      'Neither oxidation nor reduction',
      'Both oxidation and reduction simultaneously to an equal extent'
    ],
    correctIndex: 0,
    explanation: 'Since oxygen is added to magnesium in this reaction, magnesium undergoes oxidation according to the classical definition.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-4',
    type: 'mcq',
    question: 'In the reaction CuO + H2 → Cu + H2O, according to the classical concept, copper oxide (CuO) is said to undergo:',
    options: [
      'Oxidation, since oxygen is removed from it',
      'Neither oxidation nor reduction',
      'Reduction, since oxygen is removed from it',
      'Combustion, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Since oxygen is removed from copper oxide (with hydrogen being added instead, forming water), this represents a classical example of reduction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-5',
    type: 'mcq',
    question: 'A key limitation of the classical concept of oxidation and reduction is that it fails to adequately explain redox changes in reactions that do not directly involve:',
    options: [
      'Any chemical elements whatsoever',
      'Any change in mass of the reactants',
      'Oxygen or hydrogen at all',
      'Any change in temperature of the reaction mixture'
    ],
    correctIndex: 2,
    explanation: 'The classical concept, being based specifically on the addition/removal of oxygen or hydrogen, cannot adequately describe redox changes in reactions that do not directly involve these two elements, necessitating the more general electron transfer concept.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-6',
    type: 'mcq',
    question: 'A redox reaction is defined as a chemical reaction in which:',
    options: [
      'Oxidation and reduction occur simultaneously',
      'Only oxidation occurs, with no reduction taking place at all',
      'Only reduction occurs, with no oxidation taking place at all',
      'Neither oxidation nor reduction occurs at any point'
    ],
    correctIndex: 0,
    explanation: 'A redox reaction is characterised by the simultaneous occurrence of oxidation (in one substance) and reduction (in another substance).',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-7',
    type: 'mcq',
    question: 'It is generally understood that oxidation cannot occur without an accompanying reduction, and vice versa, mainly because:',
    options: [
      'Oxidation and reduction are completely independent, unrelated processes',
      'Only reduction ever actually occurs in real chemical reactions',
      'Oxygen atoms must always be physically present for any reaction to occur',
      'Electrons lost by one species (oxidation) must be gained by another species (reduction)'
    ],
    correctIndex: 3,
    explanation: 'Since electrons lost during oxidation must be gained by another species undergoing reduction, the two processes are inherently linked and always occur together.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-8',
    type: 'mcq',
    question: 'A substance that causes another substance to be oxidised, while itself undergoing reduction, is called the:',
    options: [
      'Reducing agent (reductant)',
      'Oxidising agent (oxidant)',
      'Catalyst, exclusively',
      'Buffer, exclusively'
    ],
    correctIndex: 1,
    explanation: 'An oxidising agent (oxidant) is the substance that oxidises another species while itself being reduced.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-9',
    type: 'mcq',
    question: 'A substance that causes another substance to be reduced, while itself undergoing oxidation, is called the:',
    options: [
      'Oxidising agent (oxidant)',
      'Catalyst, exclusively',
      'Indicator, exclusively',
      'Reducing agent (reductant)'
    ],
    correctIndex: 3,
    explanation: 'A reducing agent (reductant) is the substance that reduces another species while itself being oxidised.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-10',
    type: 'mcq',
    question: 'In the reaction Zn + CuSO4 → ZnSO4 + Cu, zinc acts as the reducing agent because it:',
    options: [
      'Gains electrons (is reduced) while oxidising copper ions',
      'Loses electrons (is oxidised) while reducing copper ions',
      'Remains completely unchanged throughout the reaction',
      'Acts purely as a catalyst, with no change in its own oxidation state'
    ],
    correctIndex: 1,
    explanation: 'Zinc acts as the reducing agent in this reaction because it loses electrons (undergoing oxidation itself) while facilitating the reduction of copper ions to metallic copper.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-11',
    type: 'mcq',
    question: 'According to the modern electron transfer concept, oxidation is defined as the:',
    options: [
      'Loss of one or more electrons by an atom, ion, or molecule',
      'Gain of one or more electrons by an atom, ion, or molecule',
      'Complete loss of all mass from an atom',
      'Addition of a proton to an atom'
    ],
    correctIndex: 0,
    explanation: 'The modern electron transfer concept defines oxidation as the loss of one or more electrons by a chemical species.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-12',
    type: 'mcq',
    question: 'According to the modern electron transfer concept, reduction is defined as the:',
    options: [
      'Loss of one or more electrons by an atom, ion, or molecule',
      'Complete loss of all mass from an atom',
      'Gain of one or more electrons by an atom, ion, or molecule',
      'Removal of a proton from an atom'
    ],
    correctIndex: 2,
    explanation: 'The modern electron transfer concept defines reduction as the gain of one or more electrons by a chemical species.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-13',
    type: 'mcq',
    question: 'According to the electron transfer concept, an oxidising agent is a species that, during a redox reaction, itself:',
    options: [
      'Loses electrons',
      'Neither gains nor loses any electrons',
      'Gains electrons',
      'Only gains protons, with no involvement of electrons at all'
    ],
    correctIndex: 2,
    explanation: 'In the electron transfer framework, an oxidising agent gains electrons during the reaction (which is why it causes oxidation in the other reactant).',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-14',
    type: 'mcq',
    question: 'According to the electron transfer concept, a reducing agent is a species that, during a redox reaction, itself:',
    options: [
      'Loses electrons',
      'Gains electrons',
      'Neither gains nor loses any electrons',
      'Only loses protons, with no involvement of electrons at all'
    ],
    correctIndex: 0,
    explanation: 'In the electron transfer framework, a reducing agent loses electrons during the reaction (which is why it causes reduction in the other reactant).',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-15',
    type: 'mcq',
    question: 'The electron transfer concept of redox reactions is considered more general and broadly applicable than the classical oxygen/hydrogen-based concept mainly because it can also explain redox changes occurring in reactions that:',
    options: [
      'Only ever involve oxygen, with no other possible reactant',
      'Do not involve oxygen or hydrogen at all',
      'Only ever involve hydrogen, with no other possible reactant',
      'Only occur at extremely high temperatures'
    ],
    correctIndex: 1,
    explanation: 'The electron transfer concept can explain redox behaviour even in reactions that do not involve oxygen or hydrogen, making it a more general framework than the classical concept.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-16',
    type: 'mcq',
    question: 'In the reaction 2Na + Cl2 → 2NaCl, according to the electron transfer concept, sodium atoms undergo oxidation because they:',
    options: [
      'Gain electrons to form Na- ions',
      'Remain completely neutral throughout the reaction',
      'Gain protons to form a new isotope',
      'Lose electrons to form Na+ ions'
    ],
    correctIndex: 3,
    explanation: 'In this reaction, sodium atoms lose electrons to form Na+ ions, representing oxidation according to the electron transfer concept.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-17',
    type: 'mcq',
    question: 'In the reaction 2Na + Cl2 → 2NaCl, according to the electron transfer concept, chlorine molecules undergo reduction because chlorine atoms:',
    options: [
      'Gain electrons to form Cl- ions',
      'Lose electrons to form Cl+ ions',
      'Remain completely neutral throughout the reaction',
      'Lose protons to form a new isotope'
    ],
    correctIndex: 0,
    explanation: 'In this reaction, chlorine atoms gain electrons to form Cl- ions, representing reduction according to the electron transfer concept.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-18',
    type: 'mcq',
    question: 'The reaction Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s) is a classic example of a redox displacement reaction, and this type of reaction can be physically separated into two distinct half-reactions using an apparatus called a(n):',
    options: [
      'Buffer solution apparatus',
      'Distillation apparatus',
      'Chromatography column',
      'Electrochemical (Daniell) cell'
    ],
    correctIndex: 3,
    explanation: 'The redox reaction between zinc and copper sulphate can be physically separated into two half-reactions occurring at separate electrodes within an electrochemical cell, such as the classic Daniell cell.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-19',
    type: 'mcq',
    question: 'In an electrochemical (galvanic) cell, the electrode at which oxidation occurs is called the:',
    options: [
      'Cathode',
      'Salt bridge',
      'Anode',
      'Reference electrode, exclusively'
    ],
    correctIndex: 2,
    explanation: 'In an electrochemical cell, oxidation specifically occurs at the anode.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-20',
    type: 'mcq',
    question: 'In an electrochemical (galvanic) cell, the electrode at which reduction occurs is called the:',
    options: [
      'Anode',
      'Cathode',
      'Salt bridge',
      'Standard hydrogen electrode, exclusively'
    ],
    correctIndex: 1,
    explanation: 'In an electrochemical cell, reduction specifically occurs at the cathode.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-21',
    type: 'mcq',
    question: 'In an electrochemical (galvanic) cell, electrons generated by the oxidation half-reaction flow through the external circuit from the anode toward the:',
    options: [
      'Salt bridge, exclusively bypassing the cathode entirely',
      'Cathode',
      'Back into the original oxidation half-cell, without ever leaving it',
      'Directly into the electrolyte solution, bypassing the external circuit entirely'
    ],
    correctIndex: 1,
    explanation: 'Electrons generated by oxidation at the anode flow through the external circuit toward the cathode, where they are consumed in the reduction half-reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-22',
    type: 'mcq',
    question: 'The concept of oxidation number (oxidation state) was introduced to help keep track of electron transfer, and is particularly useful for analysing redox changes in reactions involving:',
    options: [
      'Only purely ionic compounds, with no relevance to covalent compounds',
      'Only elemental, uncombined substances',
      'Covalent compounds, where electron transfer is not always straightforward or obvious',
      'No chemical compounds whatsoever'
    ],
    correctIndex: 2,
    explanation: 'Oxidation number is a particularly useful concept for tracking apparent electron transfer in covalent compounds, where actual electron transfer is not always clear-cut as it is in simple ionic compounds.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-23',
    type: 'mcq',
    question: 'According to the standard rules for assigning oxidation numbers, the oxidation number of any atom in its free, elemental (uncombined) state is always:',
    options: [
      'Zero',
      'Always equal to +1',
      'Always equal to -1',
      'Always equal to the atom\'s atomic number'
    ],
    correctIndex: 0,
    explanation: 'By convention, the oxidation number of an atom in its free, elemental state (uncombined with any other element) is always assigned a value of zero.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-24',
    type: 'mcq',
    question: 'For a simple monoatomic ion, the oxidation number of that ion is generally taken to be equal to:',
    options: [
      'Always exactly zero, regardless of the ion\'s actual charge',
      'Always exactly +1, regardless of the ion\'s actual charge',
      'The atomic mass of the corresponding neutral atom',
      'The actual charge on the ion'
    ],
    correctIndex: 3,
    explanation: 'For a monoatomic ion, the oxidation number is simply equal to the actual charge carried by that ion.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-25',
    type: 'mcq',
    question: 'The sum of the oxidation numbers of all atoms present in a neutral compound must always equal:',
    options: [
      'The total number of atoms in the compound',
      'Always exactly +1',
      'The molar mass of the compound',
      'Zero'
    ],
    correctIndex: 3,
    explanation: 'For any electrically neutral compound, the sum of the oxidation numbers of all its constituent atoms must equal zero.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-26',
    type: 'mcq',
    question: 'In most of its compounds, the oxidation number of hydrogen is generally assigned as:',
    options: [
      '+1',
      '-1, in all compounds without exception',
      '0, in all compounds without exception',
      '+2, in all compounds without exception'
    ],
    correctIndex: 0,
    explanation: 'Hydrogen is generally assigned an oxidation number of +1 in the majority of its compounds.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-27',
    type: 'mcq',
    question: 'As a notable exception to the general rule, hydrogen is assigned an oxidation number of -1 specifically when it is combined with:',
    options: [
      'Oxygen, forming water',
      'An active metal, forming a metal hydride (such as NaH or CaH2)',
      'Another hydrogen atom, forming H2 gas',
      'Chlorine, forming hydrochloric acid'
    ],
    correctIndex: 1,
    explanation: 'In metal hydrides (such as sodium hydride, NaH, or calcium hydride, CaH2), hydrogen is assigned an oxidation number of -1, since the metal is more electropositive than hydrogen in this context.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-28',
    type: 'mcq',
    question: 'In most of its compounds, the oxidation number of oxygen is generally assigned as:',
    options: [
      '+2, in all compounds without exception',
      '-1, in all compounds without exception',
      '-2',
      '0, in all compounds without exception'
    ],
    correctIndex: 2,
    explanation: 'Oxygen is generally assigned an oxidation number of -2 in the majority of its compounds.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-29',
    type: 'mcq',
    question: 'As a notable exception, oxygen is assigned an oxidation number of -1 specifically in compounds classified as:',
    options: [
      'Simple oxides, such as water (H2O)',
      'Superoxides exclusively, with no relation to peroxides',
      'Peroxides (such as hydrogen peroxide, H2O2)',
      'Carbon dioxide (CO2), exclusively'
    ],
    correctIndex: 2,
    explanation: 'In peroxides, such as hydrogen peroxide (H2O2), oxygen is assigned an oxidation number of -1, differing from its usual -2 value in simple oxides.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-30',
    type: 'mcq',
    question: 'In the compound OF2 (oxygen difluoride), the oxidation number of oxygen is exceptionally assigned as:',
    options: [
      '-2, exactly as in most other oxygen-containing compounds',
      '+2',
      '-1, as in peroxides',
      '0, as in the free element'
    ],
    correctIndex: 1,
    explanation: 'Since fluorine is more electronegative than oxygen, in OF2, oxygen is exceptionally assigned a positive oxidation number of +2.',
    difficulty: 'hard'
  },
  {
    id: 'redox-reactions-31',
    type: 'mcq',
    question: 'In superoxide compounds, oxygen is assigned a fractional oxidation number of:',
    options: [
      '-2, exactly as in most other compounds',
      '-1, exactly as in peroxides',
      '+1, a positive value',
      '-1/2'
    ],
    correctIndex: 3,
    explanation: 'In superoxide ions/compounds, oxygen is assigned the unusual, fractional oxidation number of -1/2.',
    difficulty: 'hard'
  },
  {
    id: 'redox-reactions-32',
    type: 'mcq',
    question: 'The alkali metals (Group 1 elements), when present in their compounds, are always assigned an oxidation number of:',
    options: [
      '+1',
      '+2',
      '-1',
      '0, exactly as in their elemental, free state'
    ],
    correctIndex: 0,
    explanation: 'Alkali metals (Group 1) invariably show an oxidation number of +1 in their compounds.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-33',
    type: 'mcq',
    question: 'The alkaline earth metals (Group 2 elements), when present in their compounds, are always assigned an oxidation number of:',
    options: [
      '+2',
      '+1',
      '-2',
      '0, exactly as in their elemental, free state'
    ],
    correctIndex: 0,
    explanation: 'Alkaline earth metals (Group 2) invariably show an oxidation number of +2 in their compounds.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-34',
    type: 'mcq',
    question: 'Fluorine, being the most electronegative element, is always assigned an oxidation number of exactly ___ in all of its compounds, without any exceptions.',
    options: [
      '+1',
      '-2',
      '-1',
      '0'
    ],
    correctIndex: 2,
    explanation: 'Since fluorine is the most electronegative element known, it is always assigned an oxidation number of -1 in every one of its compounds, with no exceptions (unlike other halogens, which can show varying oxidation states).',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-35',
    type: 'mcq',
    question: 'In the compound sulphuric acid, H2SO4, the oxidation number of the sulphur atom is:',
    options: [
      '+4',
      '-2',
      '+2',
      '+6'
    ],
    correctIndex: 3,
    explanation: 'Using standard oxidation number rules (H=+1, O=-2), and given the neutral overall charge of H2SO4, the oxidation number of sulphur must be +6 to balance the equation: 2(+1) + S + 4(-2) = 0, giving S = +6.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-36',
    type: 'mcq',
    question: 'In the potassium permanganate ion (MnO4-), the oxidation number of the manganese atom is:',
    options: [
      '+4',
      '+7',
      '+2',
      '+6'
    ],
    correctIndex: 1,
    explanation: 'Given that oxygen is -2 and the overall ion charge is -1, the oxidation number of manganese must satisfy Mn + 4(-2) = -1, giving Mn = +7.',
    difficulty: 'hard'
  },
  {
    id: 'redox-reactions-37',
    type: 'mcq',
    question: 'In the dichromate ion (Cr2O7^2-), the oxidation number of each chromium atom is:',
    options: [
      '+3',
      '+6',
      '+2',
      '+7'
    ],
    correctIndex: 1,
    explanation: 'Given that oxygen is -2 and the overall ion charge is -2, for two chromium atoms: 2(Cr) + 7(-2) = -2, giving 2(Cr) = 12, so Cr = +6 for each chromium atom.',
    difficulty: 'hard'
  },
  {
    id: 'redox-reactions-38',
    type: 'mcq',
    question: 'In the ammonium ion (NH4+), the oxidation number of the nitrogen atom is:',
    options: [
      '+3',
      '+5',
      '0',
      '-3'
    ],
    correctIndex: 3,
    explanation: 'Given that hydrogen is +1 and the overall ion charge is +1: N + 4(+1) = +1, giving N = -3.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-39',
    type: 'mcq',
    question: 'In carbon dioxide (CO2), the oxidation number of the carbon atom is:',
    options: [
      '-4',
      '+2',
      '+4',
      '0'
    ],
    correctIndex: 2,
    explanation: 'Given that oxygen is -2 in this neutral compound: C + 2(-2) = 0, giving C = +4.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-40',
    type: 'mcq',
    question: 'In sodium thiosulphate (Na2S2O3), the average oxidation number of the sulphur atoms is:',
    options: [
      '+2',
      '+6',
      '-2',
      '0'
    ],
    correctIndex: 0,
    explanation: 'Given Na=+1 (x2) and O=-2 (x3) in this neutral compound: 2(+1) + 2(S) + 3(-2) = 0, giving 2(S) = 4, so the average oxidation number of sulphur is +2.',
    difficulty: 'hard'
  },
  {
    id: 'redox-reactions-41',
    type: 'mcq',
    question: 'In the compound potassium chlorate, KClO3, the oxidation number of the chlorine atom is:',
    options: [
      '-1',
      '+1',
      '+7',
      '+5'
    ],
    correctIndex: 3,
    explanation: 'Given K=+1 and O=-2 (x3) in this neutral compound: (+1) + Cl + 3(-2) = 0, giving Cl = +5.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-42',
    type: 'mcq',
    question: 'A combination reaction, in which two or more reactants combine to form a single product, is generally classified as a redox reaction when:',
    options: [
      'At least one of the reactants is present in its elemental (uncombined) form',
      'None of the reactants are ever present in elemental form',
      'The product formed is always a gas',
      'The reaction always occurs at extremely low temperatures'
    ],
    correctIndex: 0,
    explanation: 'Combination reactions are generally redox in nature when at least one reactant is an element, since the formation of a compound from elements necessarily involves a change in oxidation number.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-43',
    type: 'mcq',
    question: 'The reaction C(s) + O2(g) → CO2(g) is classified as a redox reaction because it involves:',
    options: [
      'No change whatsoever in the oxidation number of any atom',
      'A change in the oxidation numbers of both carbon and oxygen',
      'A change in oxidation number for oxygen alone, with carbon remaining completely unchanged',
      'A change in oxidation number for carbon alone, with oxygen remaining completely unchanged'
    ],
    correctIndex: 1,
    explanation: 'In this reaction, carbon\'s oxidation number changes from 0 (elemental) to +4, and oxygen\'s changes from 0 (elemental) to -2, confirming this combination reaction is indeed a redox process.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-44',
    type: 'mcq',
    question: 'Which of the following is an example of a combination reaction that also qualifies as a redox reaction?',
    options: [
      'CaCO3(s) → CaO(s) + CO2(g)',
      'NaOH(aq) + HCl(aq) → NaCl(aq) + H2O(l)',
      '2Mg(s) + O2(g) → 2MgO(s)',
      'AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq)'
    ],
    correctIndex: 2,
    explanation: 'The combination of magnesium and oxygen to form magnesium oxide involves elemental reactants undergoing a change in oxidation state, making it a classic redox combination reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-45',
    type: 'mcq',
    question: 'A decomposition reaction, in which a single compound breaks down into two or more simpler substances, is classified as a redox reaction only if it involves:',
    options: [
      'A change in the oxidation number of at least one element',
      'No change whatsoever in the oxidation number of any element',
      'The formation of exactly two products, with no other possible number',
      'A reaction occurring only at very high temperatures'
    ],
    correctIndex: 0,
    explanation: 'A decomposition reaction qualifies as a redox reaction only when there is an actual change in the oxidation number of at least one of the elements involved.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-46',
    type: 'mcq',
    question: 'The decomposition reaction 2KClO3 → 2KCl + 3O2 is classified as a redox reaction because it involves changes in the oxidation numbers of:',
    options: [
      'Only potassium, with no change in chlorine or oxygen',
      'Neither chlorine nor oxygen; only potassium changes',
      'Both chlorine and oxygen',
      'None of the elements present; no oxidation number changes occur at all'
    ],
    correctIndex: 2,
    explanation: 'In this decomposition, chlorine\'s oxidation number changes from +5 (in KClO3) to -1 (in KCl), and oxygen\'s changes from -2 to 0 (elemental O2), confirming this is a redox decomposition.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-47',
    type: 'mcq',
    question: 'The thermal decomposition of calcium carbonate, CaCO3(s) → CaO(s) + CO2(g), is generally considered NOT to be a redox reaction because:',
    options: [
      'The reaction does not actually occur under any conditions',
      'There is no change in the oxidation number of any element throughout the reaction',
      'Calcium carbonate is not a real chemical compound',
      'The products formed are identical to the reactant, with no chemical change at all'
    ],
    correctIndex: 1,
    explanation: 'In the decomposition of calcium carbonate, the oxidation numbers of calcium, carbon, and oxygen remain unchanged throughout, meaning this is a non-redox decomposition reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-48',
    type: 'mcq',
    question: 'Which of the following is a correct general statement regarding decomposition reactions and redox chemistry?',
    options: [
      'All decomposition reactions are always redox reactions, without any exception',
      'No decomposition reaction can ever be classified as a redox reaction',
      'Decomposition reactions are entirely unrelated to the concept of oxidation number',
      'Not all decomposition reactions are redox reactions; this depends on whether oxidation numbers actually change'
    ],
    correctIndex: 3,
    explanation: 'Decomposition reactions may or may not be redox in nature, depending specifically on whether the oxidation numbers of the constituent elements actually change during the reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-49',
    type: 'mcq',
    question: 'A displacement reaction in which a more reactive metal displaces a less reactive metal from an aqueous solution of its salt, such as Fe + CuSO4 → FeSO4 + Cu, is classified as a:',
    options: [
      'Non-redox precipitation reaction',
      'Metal displacement redox reaction',
      'Acid-base neutralisation reaction',
      'Combination reaction, exclusively'
    ],
    correctIndex: 1,
    explanation: 'This type of reaction, in which a more reactive metal displaces a less reactive one from its salt solution, is a classic example of a metal displacement redox reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-50',
    type: 'mcq',
    question: 'The reaction of an active metal with an acid or water, releasing hydrogen gas (such as Zn + 2HCl → ZnCl2 + H2), is classified as an example of:',
    options: [
      'A non-redox neutralisation reaction',
      'A disproportionation reaction, exclusively',
      'A purely physical process with no chemical change',
      'Hydrogen (non-metal) displacement redox reaction'
    ],
    correctIndex: 3,
    explanation: 'This type of reaction, in which an active metal reacting with acid or water releases hydrogen gas, is classified as a hydrogen (non-metal) displacement redox reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-51',
    type: 'mcq',
    question: 'The reaction Cl2 + 2KI → 2KCl + I2, in which one halogen displaces another from its salt, is an example of a:',
    options: [
      'Non-metal displacement redox reaction',
      'Metal displacement redox reaction',
      'Purely acid-base reaction',
      'Non-redox precipitation reaction'
    ],
    correctIndex: 0,
    explanation: 'This reaction, in which chlorine displaces iodine from potassium iodide, exemplifies a non-metal displacement redox reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-52',
    type: 'mcq',
    question: 'The ability of a given metal to displace another metal from its salt solution is generally related to the relative:',
    options: [
      'Colour of the two metals, with no relation to reactivity',
      'Melting point of the two metals, exclusively',
      'Reactivity (position in the reactivity/activity series) of the two metals',
      'Atomic radius of the two metals, exclusively, with no relation to reactivity'
    ],
    correctIndex: 2,
    explanation: 'Whether one metal can displace another from solution is determined by their relative positions in the reactivity (activity) series, with more reactive metals capable of displacing less reactive ones.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-53',
    type: 'mcq',
    question: 'In the reaction Zn + 2HCl → ZnCl2 + H2, the oxidation number of zinc changes from 0 to +2, while the oxidation number of hydrogen changes from +1 to:',
    options: [
      '+2',
      '-1',
      '0',
      '+1, remaining completely unchanged'
    ],
    correctIndex: 2,
    explanation: 'In this displacement reaction, hydrogen\'s oxidation number decreases from +1 (in HCl) to 0 (in H2 gas), representing reduction, while zinc is oxidised from 0 to +2.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-54',
    type: 'mcq',
    question: 'A disproportionation reaction is a special type of redox reaction in which the same element, present in a single reactant, undergoes:',
    options: [
      'Only oxidation, with no accompanying reduction',
      'Simultaneous oxidation and reduction',
      'Only reduction, with no accompanying oxidation',
      'Neither oxidation nor reduction; only a change in physical state'
    ],
    correctIndex: 1,
    explanation: 'In a disproportionation reaction, the same element within a single species undergoes both oxidation and reduction simultaneously, being converted into two different oxidation states in the products.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-55',
    type: 'mcq',
    question: 'For a disproportionation reaction to occur, the element undergoing this process must initially be present in a(n):',
    options: [
      'The highest possible oxidation state for that element',
      'The lowest possible (most negative) oxidation state for that element',
      'An oxidation state of exactly zero, with no exceptions',
      'Intermediate oxidation state'
    ],
    correctIndex: 3,
    explanation: 'Disproportionation is only possible when an element starts in an intermediate oxidation state, allowing it to be simultaneously oxidised to a higher state and reduced to a lower state.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-56',
    type: 'mcq',
    question: 'The decomposition of hydrogen peroxide, 2H2O2 → 2H2O + O2, is a classic example of a disproportionation reaction, in which oxygen (initially at an oxidation state of -1 in H2O2) is converted into oxygen at an oxidation state of -2 (in water) and:',
    options: [
      '0 (in elemental O2 gas)',
      '+2 (in a hypothetical oxide)',
      '-1, remaining completely unchanged in the second product',
      '+4, in a hypothetical higher oxide'
    ],
    correctIndex: 0,
    explanation: 'In this disproportionation, oxygen (starting at -1 in H2O2) is simultaneously reduced to -2 (in H2O) and oxidised to 0 (in elemental O2 gas).',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-57',
    type: 'mcq',
    question: 'Since oxygen in hydrogen peroxide (H2O2) is at an intermediate oxidation state of -1, this compound is well known for readily undergoing:',
    options: [
      'Only simple combination reactions, with no possibility of disproportionation',
      'Only simple decomposition reactions unrelated to redox chemistry',
      'No chemical reactions whatsoever, being completely inert',
      'Disproportionation reactions'
    ],
    correctIndex: 3,
    explanation: 'Since the oxygen atoms in H2O2 exist at the intermediate oxidation state of -1, hydrogen peroxide is well known for its characteristic tendency to undergo disproportionation reactions.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-58',
    type: 'mcq',
    question: 'In the reaction of white phosphorus with sodium hydroxide solution, P4 + 3NaOH + 3H2O → 3NaH2PO2 + PH3, phosphorus is said to disproportionate since it forms products with oxidation states of both:',
    options: [
      '+1 (in NaH2PO2) and -3 (in PH3)',
      'Only +5, in both products, with no variation',
      'Only 0, in both products, remaining unchanged',
      '+7 and -7, an unusually extreme pair of oxidation states'
    ],
    correctIndex: 0,
    explanation: 'In this classic disproportionation reaction, phosphorus (starting at 0 in elemental P4) forms products with oxidation states of +1 (in sodium hypophosphite, NaH2PO2) and -3 (in phosphine, PH3).',
    difficulty: 'hard'
  },
  {
    id: 'redox-reactions-59',
    type: 'mcq',
    question: 'Which of the following general statements about disproportionation reactions is correct?',
    options: [
      'Disproportionation reactions never involve any change in oxidation number',
      'Disproportionation reactions can only occur between two completely different elements, never within the same element',
      'The same element acts as both the oxidising agent and the reducing agent within the same reaction',
      'Disproportionation reactions are identical in every respect to simple combination reactions'
    ],
    correctIndex: 2,
    explanation: 'A defining feature of disproportionation is that the same element, present in an intermediate oxidation state, effectively acts as both the oxidising agent and the reducing agent within a single reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-60',
    type: 'mcq',
    question: 'In the oxidation number method of balancing redox equations, the ratio in which the oxidising and reducing species combine is initially determined by comparing the:',
    options: [
      'Total mass of the oxidising and reducing agents, with no reference to oxidation number',
      'Total change in oxidation number for the oxidation process versus the reduction process',
      'Colour of the oxidising and reducing agents',
      'Melting points of the oxidising and reducing agents'
    ],
    correctIndex: 1,
    explanation: 'The oxidation number method balances redox equations by equating the total increase in oxidation number (during oxidation) with the total decrease in oxidation number (during reduction), determining the stoichiometric ratio of the reacting species.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-61',
    type: 'mcq',
    question: 'After determining the correct ratio of oxidising and reducing species using the oxidation number method, the remaining atoms and charges in the equation are typically balanced by:',
    options: [
      'Inspection (adjusting coefficients as needed to balance mass and charge)',
      'Ignoring any further balancing, since the equation is considered complete at this point',
      'Randomly assigning coefficients without any systematic approach',
      'Converting the entire equation into an entirely different chemical reaction'
    ],
    correctIndex: 0,
    explanation: 'Once the ratio based on oxidation number changes is established, the rest of the equation (remaining atoms and overall charge) is typically balanced by careful inspection and adjustment of coefficients.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-62',
    type: 'mcq',
    question: 'The oxidation number method of balancing redox reactions is generally considered a useful, systematic approach mainly because it directly incorporates information about the:',
    options: [
      'Colour change observed during the reaction, exclusively',
      'Actual electron transfer (or apparent electron transfer) occurring during the reaction',
      'Temperature change occurring during the reaction, exclusively',
      'Physical state changes occurring during the reaction, exclusively'
    ],
    correctIndex: 1,
    explanation: 'The oxidation number method is valuable because it directly incorporates the concept of electron transfer (via changes in oxidation number), providing a systematic basis for balancing complex redox equations.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-63',
    type: 'mcq',
    question: 'When applying the oxidation number method, the first essential step generally involves:',
    options: [
      'Immediately balancing the number of oxygen atoms only, with no other consideration',
      'Immediately balancing the physical states of all reactants and products',
      'Ignoring oxidation numbers entirely and balancing purely by trial and error',
      'Identifying the atoms whose oxidation numbers change during the reaction'
    ],
    correctIndex: 3,
    explanation: 'The oxidation number method begins by identifying which atoms undergo a change in oxidation number during the reaction, forming the basis for subsequent balancing steps.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-64',
    type: 'mcq',
    question: 'The half-reaction (ion-electron) method of balancing redox equations begins by splitting the overall reaction into two separate half-reactions, representing:',
    options: [
      'Only the oxidation process, with no separate reduction half-reaction considered',
      'Only the reduction process, with no separate oxidation half-reaction considered',
      'The oxidation process and the reduction process',
      'Two entirely unrelated reactions, having nothing to do with oxidation or reduction'
    ],
    correctIndex: 2,
    explanation: 'The half-reaction method divides the overall redox equation into two separate half-reactions: one representing oxidation, and the other representing reduction.',
    difficulty: 'easy'
  },
  {
    id: 'redox-reactions-65',
    type: 'mcq',
    question: 'When balancing a half-reaction in acidic medium using the ion-electron method, oxygen atoms are typically balanced by adding molecules of:',
    options: [
      'Hydroxide ions (OH-)',
      'Hydrogen gas (H2)',
      'Water (H2O)',
      'Oxygen gas (O2) directly, without forming water'
    ],
    correctIndex: 2,
    explanation: 'In acidic medium, oxygen atoms in a half-reaction are typically balanced by adding water molecules to the appropriate side of the equation.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-66',
    type: 'mcq',
    question: 'When balancing a half-reaction in acidic medium using the ion-electron method, hydrogen atoms are typically balanced by adding:',
    options: [
      'Hydroxide ions (OH-)',
      'Water molecules exclusively, with no addition of H+',
      'Oxygen gas (O2)',
      'Hydrogen ions (H+)'
    ],
    correctIndex: 3,
    explanation: 'In acidic medium, after balancing oxygen with water, hydrogen atoms are balanced by adding hydrogen ions (H+) to the appropriate side of the equation.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-67',
    type: 'mcq',
    question: 'In the half-reaction (ion-electron) method, after balancing all atoms, the overall charge on each side of a half-reaction is finally balanced by adding an appropriate number of:',
    options: [
      'Electrons',
      'Water molecules, exclusively',
      'Hydrogen ions, exclusively, regardless of prior H+ balancing',
      'Oxygen atoms, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Once all atoms are balanced in a half-reaction, the remaining imbalance in overall charge is corrected by adding the appropriate number of electrons to one side of the equation.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-68',
    type: 'mcq',
    question: 'To combine two separately balanced half-reactions into the overall balanced redox equation, it is necessary to first ensure that the number of electrons lost in oxidation exactly equals the number of electrons gained in reduction, which is typically achieved by:',
    options: [
      'Simply adding the two half-reactions together without any further adjustment',
      'Multiplying one or both half-reactions by appropriate integer factors',
      'Ignoring any electron imbalance entirely',
      'Dividing both half-reactions by the same, arbitrary fractional value'
    ],
    correctIndex: 1,
    explanation: 'Before combining half-reactions, they must be multiplied by appropriate integer factors so that the number of electrons lost in oxidation exactly matches the number gained in reduction, ensuring proper cancellation when combined.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-69',
    type: 'mcq',
    question: 'Once two half-reactions have been properly balanced and combined (with electrons cancelling out), the final overall balanced redox equation should show:',
    options: [
      'A large excess of electrons remaining on one side of the equation',
      'No net electrons remaining, with atoms and charge balanced throughout',
      'An imbalance in atoms, even after the combination process is complete',
      'An overall charge that remains unbalanced on either side'
    ],
    correctIndex: 1,
    explanation: 'The final, correctly balanced redox equation, resulting from combining the two half-reactions, should show complete balance in both atoms and overall charge, with all electrons having cancelled out.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-70',
    type: 'mcq',
    question: 'When balancing redox half-reactions occurring in basic (alkaline) medium, one common approach involves first balancing the half-reaction as though it were occurring in acidic medium, and then adding an appropriate number of:',
    options: [
      'Hydroxide ions (OH-) to neutralise any H+ ions present',
      'Additional hydrogen ions (H+), doubling the amount already present',
      'Additional oxygen gas (O2) molecules',
      'Additional chlorine gas (Cl2) molecules'
    ],
    correctIndex: 0,
    explanation: 'A common method for balancing redox reactions in basic medium involves first balancing as if in acidic medium, then adding OH- ions (equal to the number of H+ ions present) to both sides to neutralise the H+ and convert to a basic-medium representation.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-71',
    type: 'mcq',
    question: 'When hydroxide ions (OH-) are added to neutralise hydrogen ions (H+) present in a half-reaction balanced for acidic medium, the H+ and OH- combine to form molecules of:',
    options: [
      'Hydrogen peroxide (H2O2)',
      'Hydrogen gas (H2) and oxygen gas (O2) separately',
      'Water (H2O)',
      'Hydronium ions (H3O+) exclusively, without forming any neutral water'
    ],
    correctIndex: 2,
    explanation: 'When hydroxide ions are added to neutralise hydrogen ions, they combine in a 1:1 ratio to form water molecules (H+ + OH- → H2O).',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-72',
    type: 'mcq',
    question: 'The overall process of converting a redox half-reaction balanced for acidic medium into its basic-medium equivalent may result in some water molecules appearing on both sides of the equation, which should then be:',
    options: [
      'Left exactly as they are, without any simplification whatsoever',
      'Multiplied by an arbitrary factor of ten',
      'Removed entirely from the equation, without any regard for mass balance',
      'Simplified/cancelled to obtain the net balanced equation'
    ],
    correctIndex: 3,
    explanation: 'After adding OH- ions and forming water, any water molecules appearing on both sides of the equation should be simplified (cancelled where appropriate) to obtain the final, simplified net balanced equation for the basic medium.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-73',
    type: 'mcq',
    question: 'The general strategy of balancing a redox reaction first for acidic conditions, then converting the result for basic conditions, is preferred over attempting to balance directly in basic medium mainly because it:',
    options: [
      'Is the only mathematically valid method, with no alternative approach possible in any circumstance',
      'Produces an entirely different, unrelated chemical reaction',
      'Eliminates the need to consider oxidation numbers at any point in the process',
      'Provides a more systematic, less error-prone pathway to the final balanced equation'
    ],
    correctIndex: 3,
    explanation: 'The acidic-medium-first strategy is generally preferred because it offers a more systematic, straightforward pathway to correctly balancing redox equations, subsequently converted for basic medium as needed.',
    difficulty: 'hard'
  },
  {
    id: 'redox-reactions-74',
    type: 'mcq',
    question: 'Titrations based on redox reactions, used for quantitative chemical analysis, include a common type in which potassium permanganate (KMnO4) is used, and this reagent is notable for being able to act as its own:',
    options: [
      'Solvent, exclusively',
      'Catalyst, exclusively',
      'Indicator (a self-indicator)',
      'Buffer, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Potassium permanganate titrations are notable because KMnO4\'s intense purple colour allows it to function as its own indicator (self-indicator), with the endpoint marked by the appearance/disappearance of this colour.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-75',
    type: 'mcq',
    question: 'Iodometric and iodimetric titrations, another important category of redox titrations, characteristically make use of iodine along with a specific indicator called:',
    options: [
      'Phenolphthalein',
      'Starch',
      'Methyl orange',
      'Litmus'
    ],
    correctIndex: 1,
    explanation: 'Iodometric/iodimetric titrations characteristically use starch as an indicator, which forms an intense blue-black colour complex with iodine, useful for detecting the titration endpoint.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-76',
    type: 'mcq',
    question: 'Dichromate titrations, another type of redox titration used in quantitative analysis, make use of the dichromate ion as the:',
    options: [
      'Oxidising agent',
      'Reducing agent, exclusively',
      'Solvent, exclusively',
      'Indicator, exclusively'
    ],
    correctIndex: 0,
    explanation: 'In dichromate titrations, the dichromate ion (Cr2O7^2-) functions as the oxidising agent, undergoing reduction as it reacts with the substance being analysed.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-77',
    type: 'mcq',
    question: 'Redox reactions form the fundamental basis for electrochemical cells, which can be used to generate electrical energy from the:',
    options: [
      'Spontaneous transfer of electrons between the oxidising and reducing agents',
      'Complete absence of any electron transfer whatsoever',
      'Physical mixing of two chemically inert, unreactive substances',
      'Simple heating of a single, pure chemical compound'
    ],
    correctIndex: 0,
    explanation: 'Electrochemical cells generate electrical energy by harnessing the spontaneous electron transfer that occurs between an oxidising agent and a reducing agent in a redox reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-reactions-78',
    type: 'mcq',
    question: 'The standard hydrogen electrode (SHE), used as a universal reference point in electrochemistry, is conventionally assigned a standard electrode potential of exactly:',
    options: [
      '+1 volt',
      '0 volts',
      '-1 volt',
      '100 volts'
    ],
    correctIndex: 1,
    explanation: 'The standard hydrogen electrode (SHE) is conventionally assigned a standard electrode potential of exactly 0 volts, serving as the universal reference point against which other electrode potentials are measured.',
    difficulty: 'medium'
  },
];

export default questions;