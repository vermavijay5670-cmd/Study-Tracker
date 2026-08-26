import type { Question } from "@/lib/questionBank";

// NEET Chemistry Question Bank
// Chapter: The d- and f- Block Elements
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'd-and-f-block-elements-1',
    type: 'mcq',
    question: 'The d-block elements are located in the periodic table between the:',
    options: [
      's-block and f-block elements',
      's-block and p-block elements, occupying groups 3 to 12',
      'p-block and f-block elements only',
      'Two halves of the f-block'
    ],
    correctIndex: 1,
    explanation: 'd-block elements occupy groups 3 to 12 of the periodic table, positioned between the s-block (groups 1-2) and the p-block (groups 13-18).',
    difficulty: 'easy'
  },
  {
    id: 'd-and-f-block-elements-2',
    type: 'mcq',
    question: 'The general electronic configuration of d-block (transition) elements is represented as:',
    options: [
      'ns² np^1-6',
      '(n-1)d^1-10 ns^0-2',
      '(n-2)f^1-14 (n-1)d^0-1 ns²',
      'ns^1-2'
    ],
    correctIndex: 1,
    explanation: 'd-block elements are characterised by the general electronic configuration (n-1)d^1-10 ns^0-2, indicating the filling of the penultimate (n-1) d subshell.',
    difficulty: 'easy'
  },
  {
    id: 'd-and-f-block-elements-3',
    type: 'mcq',
    question: 'A transition element is formally defined as one that has a partially filled d subshell in its ground state or in any one of its commonly occurring oxidation states. By this definition, which group 12 elements (Zn, Cd, Hg) are generally excluded from being classified as "typical" transition elements?',
    options: [
      'They are excluded because they have an empty d subshell (d0) in all oxidation states',
      'They are excluded because they have a completely filled d10 configuration in their ground state and in their common oxidation states, so the d subshell is never partially filled',
      'They are excluded because they do not belong to the d-block at all',
      'They are excluded because they are radioactive'
    ],
    correctIndex: 1,
    explanation: 'Zn, Cd, and Hg have a fully filled d10 configuration both in the elemental state and in their common (+2) oxidation state, so their d subshell is never partially filled, and hence they are often not classified as typical transition elements despite being in the d-block.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-4',
    type: 'mcq',
    question: 'The f-block elements are divided into two series known as:',
    options: [
      'Alkali metals and alkaline earth metals',
      'Lanthanoids (4f series) and actinoids (5f series)',
      'Halogens and noble gases',
      'Metalloids and non-metals'
    ],
    correctIndex: 1,
    explanation: 'The f-block consists of two series: the lanthanoids (Ce to Lu, filling of 4f orbitals) and the actinoids (Th to Lr, filling of 5f orbitals).',
    difficulty: 'easy'
  },
  {
    id: 'd-and-f-block-elements-5',
    type: 'mcq',
    question: 'The general electronic configuration of lanthanoid elements is represented as:',
    options: [
      '[Xe] 4f^1-14 5d^0-1 6s²',
      '[Rn] 5f^0-14 6d^0-1 7s²',
      '[Kr] 4d^1-10 5s^0-2',
      '[Ar] 3d^1-10 4s^0-2'
    ],
    correctIndex: 0,
    explanation: 'Lanthanoids have the general electronic configuration [Xe] 4f^1-14 5d^0-1 6s², reflecting the progressive filling of the 4f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-6',
    type: 'mcq',
    question: 'The general electronic configuration of actinoid elements is represented as:',
    options: [
      '[Xe] 4f^1-14 5d^0-1 6s²',
      '[Rn] 5f^0-14 6d^0-1 7s²',
      '[Kr] 4d^0-10 5s²',
      '[Ar] 3d^0-10 4s²'
    ],
    correctIndex: 1,
    explanation: 'Actinoids have the general electronic configuration [Rn] 5f^0-14 6d^0-1 7s², reflecting the progressive filling of the 5f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-7',
    type: 'mcq',
    question: 'Lanthanoid elements correspond to the atomic number range:',
    options: [
      '39 to 52',
      '58 to 71 (cerium to lutetium)',
      '90 to 103',
      '21 to 30'
    ],
    correctIndex: 1,
    explanation: 'The lanthanoid series consists of the 14 elements from cerium (Z=58) to lutetium (Z=71).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-8',
    type: 'mcq',
    question: 'Transition metals typically exhibit high melting and boiling points compared to s-block metals. This is primarily attributed to:',
    options: [
      'Very weak metallic bonding involving only s electrons',
      'Strong metallic bonding, involving both the outer ns electrons and the inner (n-1)d electrons in delocalised bonding',
      'The complete absence of any metallic bonding',
      'Their small atomic mass'
    ],
    correctIndex: 1,
    explanation: 'The involvement of both ns and (n-1)d electrons in metallic bonding leads to stronger interatomic attraction in transition metals, resulting in generally high melting and boiling points.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-9',
    type: 'mcq',
    question: 'Among the 3d transition metals, the maximum melting point is generally observed around the middle of the series, close to elements like chromium and vanadium, because at this point:',
    options: [
      'The d orbitals are completely empty',
      'The number of unpaired d electrons available for metallic bonding is at, or near, its maximum',
      'The atoms have the smallest possible atomic radius in the series',
      'All electrons are paired, maximising bond strength'
    ],
    correctIndex: 1,
    explanation: 'Melting points tend to peak near the middle of the transition series, where the number of unpaired d electrons (available to strengthen metallic bonding) is greatest.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-10',
    type: 'mcq',
    question: 'Which of the following transition metals is exceptional in being a liquid at room temperature?',
    options: [
      'Iron (Fe)',
      'Mercury (Hg)',
      'Copper (Cu)',
      'Zinc (Zn)'
    ],
    correctIndex: 1,
    explanation: 'Mercury is unique among metals in being liquid at room temperature, due to its comparatively weak metallic bonding and fully filled d and s orbitals.',
    difficulty: 'easy'
  },
  {
    id: 'd-and-f-block-elements-11',
    type: 'mcq',
    question: 'Across a transition metal series (left to right), the atomic radii generally show which trend?',
    options: [
      'A steady, large decrease throughout the entire series',
      'A gradual decrease initially, becoming roughly constant in the middle, and slightly increasing toward the end of the series',
      'A steady, continuous increase throughout the entire series',
      'No definite trend whatsoever'
    ],
    correctIndex: 1,
    explanation: 'Atomic radii of transition metals decrease initially due to increasing nuclear charge, level off in the middle of the series, and show a slight increase toward the end due to increasing electron-electron repulsion as d orbitals become more filled.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-12',
    type: 'mcq',
    question: 'The atomic radii of the 4d and 5d series transition elements within the same group (e.g., Zr and Hf, or Nb and Ta) are found to be nearly identical, primarily due to:',
    options: [
      'Coincidence, with no underlying cause',
      'Lanthanoid contraction, which compensates for the expected increase in size on descending from the 4d to the 5d series',
      'Both series having identical electronic configurations',
      'The 4d and 5d series being isotopes of each other'
    ],
    correctIndex: 1,
    explanation: 'Lanthanoid contraction (occurring across the lanthanoid series between La and Hf) offsets the expected size increase on moving from the 4d to the 5d series, resulting in nearly identical atomic radii for corresponding elements of these two series.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-13',
    type: 'mcq',
    question: 'The general trend of ionization enthalpy across a transition metal series (left to right) is:',
    options: [
      'A steady decrease throughout',
      'A general increase, though with irregularities due to extra stability from half-filled and fully-filled d configurations',
      'Completely constant throughout the series',
      'A steep increase identical to that seen in main group elements'
    ],
    correctIndex: 1,
    explanation: 'Ionization enthalpy generally increases across a transition series due to increasing nuclear charge, though irregularities occur due to the extra stability of half-filled (d5) and fully-filled (d10) configurations.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-14',
    type: 'mcq',
    question: 'The successive ionization enthalpies (first, second, third, etc.) of a given transition element:',
    options: [
      'Decrease progressively',
      'Increase progressively, since removing each additional electron becomes progressively harder due to increasing effective nuclear charge on the remaining electrons',
      'Remain exactly the same for each successive ionization',
      'Show no consistent pattern'
    ],
    correctIndex: 1,
    explanation: 'As electrons are successively removed from an atom, the effective nuclear charge experienced by the remaining electrons increases, making each subsequent ionization progressively more difficult (requiring more energy).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-15',
    type: 'mcq',
    question: 'Transition elements are well known for exhibiting variable oxidation states, primarily because:',
    options: [
      'They have only one type of orbital available for bonding',
      'The energy difference between the (n-1)d and ns orbitals is quite small, allowing electrons from both to participate in bond formation',
      'They lack any valence electrons',
      'Their nuclear charge is unusually low'
    ],
    correctIndex: 1,
    explanation: 'Since the (n-1)d and ns orbitals of transition metals have comparable energies, electrons from both can participate in bonding, giving rise to the characteristic variable oxidation states of these elements.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-16',
    type: 'mcq',
    question: 'The oxidation states shown by a given transition element generally differ from one another by:',
    options: [
      'Two units',
      'One unit (unity)',
      'Three units',
      'A random, unpredictable amount'
    ],
    correctIndex: 1,
    explanation: 'A characteristic feature of transition metal oxidation states is that they usually differ from each other by a unit of one, e.g., Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-17',
    type: 'mcq',
    question: 'Scandium (Sc), among the first-row transition metals, characteristically shows only one common oxidation state, which is:',
    options: [
      '+1',
      '+2',
      '+3, since this gives it a stable noble-gas-like d0 configuration',
      '+4'
    ],
    correctIndex: 2,
    explanation: 'Scandium characteristically shows only the +3 oxidation state, since losing all three valence electrons (2 from 4s and 1 from 3d) gives it the stable, noble-gas-like [Ar] (d0) configuration.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-18',
    type: 'mcq',
    question: 'Zinc (Zn) is often excluded from typical transition metal behaviour and characteristically shows only which oxidation state?',
    options: [
      '+1',
      '+2, since it has a very stable, fully-filled d10 configuration that resists further electron loss',
      '+3',
      '+4'
    ],
    correctIndex: 1,
    explanation: 'Zinc shows only the +2 oxidation state, since after losing its two 4s electrons, it retains a stable, fully-filled 3d10 configuration that strongly resists further ionization.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-19',
    type: 'mcq',
    question: 'Manganese (Mn) is known to exhibit the highest oxidation state among the first-row (3d) transition elements, which is:',
    options: [
      '+5',
      '+6',
      '+7, as seen in compounds like KMnO4',
      '+8'
    ],
    correctIndex: 2,
    explanation: 'Manganese exhibits the maximum oxidation state of +7 among the 3d transition series, prominently seen in potassium permanganate (KMnO4).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-20',
    type: 'mcq',
    question: 'The highest oxidation states of transition metals are most commonly stabilised in compounds with which two elements?',
    options: [
      'Hydrogen and sulphur',
      'Fluorine and oxygen, due to their high electronegativity and small size',
      'Carbon and nitrogen',
      'Sodium and potassium'
    ],
    correctIndex: 1,
    explanation: 'Fluorine and oxygen, being highly electronegative and small in size, are particularly effective at stabilising the highest oxidation states of transition metals in their compounds (e.g., fluorides and oxides).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-21',
    type: 'mcq',
    question: 'After manganese, the maximum oxidation state of subsequent 3d transition elements (Fe, Co, Ni) tends to decrease. This is mainly because:',
    options: [
      'These elements have no valence electrons at all',
      'The increasing nuclear charge holds the d electrons added after the half-filled (d5) configuration more strongly, making them progressively harder to remove',
      'These elements have completely filled d orbitals',
      'These elements are radioactive'
    ],
    correctIndex: 1,
    explanation: 'Once past the stable, half-filled d5 configuration (Mn²⁺), additional electrons are held more tightly due to increasing effective nuclear charge, making them progressively harder to remove, hence lower maximum oxidation states for subsequent elements.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-22',
    type: 'mcq',
    question: 'The colour of many transition metal ions in aqueous solution or in solid compounds arises primarily due to:',
    options: [
      'Reflection of light from the metal surface',
      'd-d electronic transitions, where an electron moves between split d orbital energy levels caused by the surrounding ligand field',
      'The presence of unpaired protons',
      'Vibrations of the crystal lattice'
    ],
    correctIndex: 1,
    explanation: 'Colour in transition metal compounds/ions typically arises from d-d transitions, where electrons absorb visible light to move between the split energy levels of partially filled d orbitals (caused by the surrounding ligand field).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-23',
    type: 'mcq',
    question: 'Ions with a completely empty (d0) or completely filled (d10) d subshell are generally found to be:',
    options: [
      'Deeply coloured, due to strong d-d transitions',
      'Colourless (or white), since no d-d transition is possible in these configurations',
      'Radioactive',
      'Always paramagnetic'
    ],
    correctIndex: 1,
    explanation: 'Since d-d transitions require both occupied and vacant d orbitals to be present, ions with entirely empty (d0) or completely filled (d10) configurations cannot undergo such transitions and are typically colourless.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-24',
    type: 'mcq',
    question: 'Which of the following ions is expected to be colourless, based on its electronic configuration?',
    options: [
      'Ti³⁺ (d1)',
      'Cu²⁺ (d9)',
      'Sc³⁺ (d0)',
      'Fe²⁺ (d6)'
    ],
    correctIndex: 2,
    explanation: 'Sc³⁺ has a d0 configuration (no d electrons at all), so no d-d transition is possible, making it colourless, unlike the other listed ions, which have partially filled d orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-25',
    type: 'mcq',
    question: 'Zn²⁺ (d10 configuration) in its compounds is generally observed to be:',
    options: [
      'Deeply coloured, similar to Cu²⁺',
      'Colourless, since its fully-filled d10 configuration prevents d-d transitions',
      'Radioactive',
      'Strongly paramagnetic'
    ],
    correctIndex: 1,
    explanation: 'Zn²⁺ has a completely filled d10 configuration, so no d-d electronic transition is possible, and its compounds are typically colourless.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-26',
    type: 'mcq',
    question: 'The paramagnetic behaviour observed in many transition metal ions arises due to the presence of:',
    options: [
      'Completely paired electrons in all orbitals',
      'One or more unpaired electrons, typically in the d orbitals',
      'A stable, noble-gas-like configuration',
      'An absence of any electrons altogether'
    ],
    correctIndex: 1,
    explanation: 'Paramagnetism in transition metal ions results from the presence of one or more unpaired electrons (commonly in partially filled d orbitals), which give the ion a net magnetic moment.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-27',
    type: 'mcq',
    question: 'The spin-only magnetic moment (μ) of a transition metal ion, in Bohr Magnetons (BM), is calculated using the formula:',
    options: [
      'μ = n + 2, where n is the number of unpaired electrons',
      'μ = √[n(n+2)], where n is the number of unpaired electrons',
      'μ = n², where n is the total number of electrons',
      'μ = 2n, where n is the atomic number'
    ],
    correctIndex: 1,
    explanation: 'The spin-only formula for calculating the magnetic moment of a transition metal ion is μ = √[n(n+2)] BM, where n is the number of unpaired electrons.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-28',
    type: 'mcq',
    question: 'Among common first-row transition metal ions, which one, with a d5 (half-filled) configuration, is expected to have the highest spin-only magnetic moment?',
    options: [
      'Sc³⁺',
      'Mn²⁺, with the maximum possible number of unpaired electrons (5) in the 3d subshell',
      'Zn²⁺',
      'Cu⁺'
    ],
    correctIndex: 1,
    explanation: 'Mn²⁺, having a d5 (half-filled) configuration with five unpaired electrons (the maximum possible for a d subshell), exhibits the highest spin-only magnetic moment (approximately 5.9 BM) among common 3d ions.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-29',
    type: 'mcq',
    question: 'Transition metals and their compounds are widely used as catalysts, largely due to their ability to:',
    options: [
      'Remain chemically completely inert under all conditions',
      'Exhibit variable oxidation states (facilitating intermediate compound formation and alternate lower-energy reaction pathways) and adsorb reactants on their surface using vacant d orbitals',
      'Have only a single, fixed oxidation state',
      'React explosively with all substances'
    ],
    correctIndex: 1,
    explanation: 'The catalytic activity of transition metals is largely attributed to their variable oxidation states, which allow formation of intermediate species and provide alternative, lower-activation-energy reaction pathways, along with their ability to adsorb reactant molecules via available d orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-30',
    type: 'mcq',
    question: 'Vanadium pentoxide (V2O5) is well known as an industrial catalyst used in the:',
    options: [
      'Haber process for ammonia synthesis',
      'Contact process for the manufacture of sulphuric acid',
      'Hydrogenation of vegetable oils',
      'Catalytic converters in automobiles'
    ],
    correctIndex: 1,
    explanation: 'Vanadium pentoxide (V2O5) is a well-known catalyst used in the Contact process, specifically for the oxidation of SO2 to SO3 during sulphuric acid manufacture.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-31',
    type: 'mcq',
    question: 'Finely divided iron (Fe) is used as a catalyst in the industrial process for the synthesis of:',
    options: [
      'Sulphuric acid',
      'Ammonia, via the Haber process',
      'Nitric acid',
      'Vegetable oil hydrogenation'
    ],
    correctIndex: 1,
    explanation: 'Iron catalyst is employed in the Haber process for the industrial synthesis of ammonia from nitrogen and hydrogen gas.',
    difficulty: 'easy'
  },
  {
    id: 'd-and-f-block-elements-32',
    type: 'mcq',
    question: 'Finely divided nickel (Ni) is commonly used as a catalyst in the industrial process of:',
    options: [
      'Hydrogenation of unsaturated vegetable oils to produce solid/semi-solid fats',
      'Sulphuric acid manufacture',
      'Ammonia synthesis',
      'Nitric acid manufacture'
    ],
    correctIndex: 0,
    explanation: 'Finely divided nickel is widely used as a catalyst in the hydrogenation of vegetable oils, converting unsaturated liquid oils into more solid, saturated fats (e.g., in margarine production).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-33',
    type: 'mcq',
    question: 'Transition metals show a strong tendency to form complex (coordination) compounds mainly because of their:',
    options: [
      'Very large atomic size and low nuclear charge',
      'Small ionic size, relatively high nuclear charge/charge density, and availability of vacant d orbitals to accept electron pairs from ligands',
      'Complete absence of any d orbitals',
      'Very low electronegativity'
    ],
    correctIndex: 1,
    explanation: 'The small size, relatively high charge/charge density of transition metal ions, combined with the availability of vacant d orbitals to accept lone pairs from Lewis base ligands, gives transition metals a strong tendency to form coordination complexes.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-34',
    type: 'mcq',
    question: 'Transition metals commonly form alloys with each other readily, mainly because they possess:',
    options: [
      'Very different atomic sizes, making substitution easy',
      'Similar atomic sizes, allowing atoms of one metal to readily substitute for atoms of another within a shared crystal lattice',
      'Completely different chemical properties',
      'No metallic character at all'
    ],
    correctIndex: 1,
    explanation: 'Because transition metals have relatively similar atomic radii, atoms of one metal can readily substitute for atoms of another within a common crystal lattice, facilitating alloy formation.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-35',
    type: 'mcq',
    question: 'Interstitial compounds of transition metals are formed when small atoms such as hydrogen, carbon, boron, or nitrogen occupy:',
    options: [
      'The surface of the metal only, without penetrating it',
      'The empty spaces (interstitial voids) within the crystal lattice of the transition metal',
      'The place of the metal atoms themselves, replacing them entirely',
      'Only the outermost electron shell of the metal atoms'
    ],
    correctIndex: 1,
    explanation: 'Interstitial compounds arise when small atoms such as H, C, B, or N become trapped within the interstitial spaces (voids) of the transition metal\'s crystal lattice, without significantly disrupting the overall metallic structure.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-36',
    type: 'mcq',
    question: 'Interstitial compounds of transition metals are generally characterised by:',
    options: [
      'Softness, low melting points, and poor electrical conductivity',
      'Hardness, high melting points, retention of metallic conductivity, and general chemical inertness',
      'Being highly reactive and unstable',
      'Complete loss of metallic character'
    ],
    correctIndex: 1,
    explanation: 'Interstitial compounds are typically very hard, have high melting points, retain metallic electrical conductivity, and are chemically quite inert, similar to the parent metal but often even harder.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-37',
    type: 'mcq',
    question: 'Lanthanoid contraction refers to the:',
    options: [
      'Gradual increase in atomic and ionic radii of the lanthanoid elements with increasing atomic number',
      'Steady decrease in atomic and ionic radii of the lanthanoid elements as atomic number increases from La to Lu',
      'Sudden expansion of the electron shells in lanthanoid elements',
      'Loss of radioactivity in lanthanoid elements'
    ],
    correctIndex: 1,
    explanation: 'Lanthanoid contraction is the steady, cumulative decrease in atomic and ionic radii observed across the lanthanoid series as atomic number increases from lanthanum to lutetium.',
    difficulty: 'easy'
  },
  {
    id: 'd-and-f-block-elements-38',
    type: 'mcq',
    question: 'The fundamental cause of lanthanoid contraction is:',
    options: [
      'Very effective shielding of one 4f electron by another 4f electron',
      'The poor (imperfect) shielding effect of one 4f electron by another, allowing the effective nuclear charge experienced by outer electrons to increase steadily across the series',
      'A sudden loss of protons across the series',
      'The absence of any electrons in the 4f subshell'
    ],
    correctIndex: 1,
    explanation: 'Since 4f orbitals have diffuse shapes and poorly shield each other from the increasing nuclear charge, the effective nuclear charge experienced by the outer electrons steadily increases across the lanthanoid series, causing a progressive contraction in size.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-39',
    type: 'mcq',
    question: 'One significant consequence of lanthanoid contraction is that the chemical properties of the lanthanoid elements are:',
    options: [
      'Extremely different from one another, making their identification very easy',
      'Remarkably similar to one another, making their mutual separation quite difficult',
      'Completely identical to the actinoid elements',
      'Unrelated to their atomic radii'
    ],
    correctIndex: 1,
    explanation: 'Since the successive decrease in ionic radii across the lanthanoid series is very gradual and small, their chemical properties remain remarkably similar, making it notoriously difficult to separate individual lanthanoids from one another.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-40',
    type: 'mcq',
    question: 'The basicity of lanthanoid hydroxides, Ln(OH)3, generally shows which trend across the lanthanoid series from La(OH)3 to Lu(OH)3?',
    options: [
      'Basicity increases steadily, since the metal ions become larger',
      'Basicity decreases steadily, since the metal ions become progressively smaller (due to lanthanoid contraction), increasing covalent character',
      'Basicity remains exactly the same throughout',
      'Basicity is unrelated to the size of the metal ion'
    ],
    correctIndex: 1,
    explanation: 'As lanthanoid ions become progressively smaller across the series (due to lanthanoid contraction), the covalent character of their hydroxides increases, resulting in a steady decrease in basicity from La(OH)3 to Lu(OH)3.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-41',
    type: 'mcq',
    question: 'Potassium permanganate (KMnO4) is industrially prepared by first fusing pyrolusite ore (MnO2) with KOH in the presence of an oxidising agent to form:',
    options: [
      'Potassium manganate (K2MnO4), a green-coloured intermediate compound',
      'Potassium dichromate (K2Cr2O7)',
      'Manganese chloride (MnCl2)',
      'Potassium chloride (KCl)'
    ],
    correctIndex: 0,
    explanation: 'The first step in the preparation of KMnO4 involves fusing MnO2 with KOH and an oxidising agent (like KNO3 or air/O2) to form green potassium manganate, K2MnO4.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-42',
    type: 'mcq',
    question: 'Potassium manganate (K2MnO4), the green intermediate formed during KMnO4 preparation, is converted into potassium permanganate (KMnO4) through:',
    options: [
      'Simple filtration only, without any chemical change',
      'Oxidation, either chemically (e.g., using chlorine gas) or electrolytically',
      'Reduction of manganate using hydrogen gas',
      'Direct heating in the absence of oxygen'
    ],
    correctIndex: 1,
    explanation: 'The green potassium manganate (K2MnO4) is oxidised, either chemically (using an oxidising agent like Cl2) or electrolytically, to obtain the purple potassium permanganate (KMnO4).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-43',
    type: 'mcq',
    question: 'In acidic medium, potassium permanganate (KMnO4) acts as a strong oxidising agent, with the Mn undergoing reduction from +7 to which oxidation state?',
    options: [
      '+2, forming the nearly colourless Mn²⁺ ion',
      '+4, forming brown MnO2',
      '+6, forming green manganate',
      '0, forming metallic manganese'
    ],
    correctIndex: 0,
    explanation: 'In acidic medium, KMnO4 (Mn: +7) is reduced all the way to Mn²⁺ (nearly colourless), gaining five electrons per manganese atom, making it a powerful oxidising agent under these conditions.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-44',
    type: 'mcq',
    question: 'In neutral or faintly alkaline medium, potassium permanganate is reduced to form:',
    options: [
      'Mn²⁺ ions in solution',
      'A brown precipitate of manganese dioxide (MnO2)',
      'Green manganate ions (MnO4²⁻)',
      'Metallic manganese'
    ],
    correctIndex: 1,
    explanation: 'In neutral or faintly alkaline solution, KMnO4 is reduced to insoluble, brown manganese dioxide (MnO2), corresponding to a gain of three electrons per manganese atom.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-45',
    type: 'mcq',
    question: 'Potassium permanganate is widely used in volumetric (titrimetric) analysis and can act as its own indicator (a "self-indicator") in redox titrations because:',
    options: [
      'It is completely colourless in all its oxidation states',
      'Its own intense purple colour disappears (or changes) sharply once it is fully reduced, signalling the endpoint of the titration',
      'It reacts with the indicator to form a precipitate',
      'It changes the pH of the solution dramatically'
    ],
    correctIndex: 1,
    explanation: 'Since KMnO4 has an intense purple colour that fades or disappears once it is completely reduced (e.g., to nearly colourless Mn²⁺ in acidic titrations), it conveniently acts as its own indicator, with the endpoint marked by the first permanent trace of colour.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-46',
    type: 'mcq',
    question: 'Potassium dichromate (K2Cr2O7) is industrially prepared starting from which naturally occurring ore?',
    options: [
      'Pyrolusite (MnO2)',
      'Chromite (FeCr2O4)',
      'Bauxite (Al2O3.xH2O)',
      'Haematite (Fe2O3)'
    ],
    correctIndex: 1,
    explanation: 'Potassium dichromate is industrially prepared starting from chromite ore (FeCr2O4, also called iron chromite).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-47',
    type: 'mcq',
    question: 'In the preparation of potassium dichromate, chromite ore is fused with sodium carbonate in the presence of air to initially form:',
    options: [
      'Sodium chromate (Na2CrO4), a yellow-coloured compound',
      'Potassium dichromate directly',
      'Chromium metal',
      'Chromium trioxide (CrO3)'
    ],
    correctIndex: 0,
    explanation: 'Fusion of chromite ore with sodium carbonate in the presence of air produces yellow sodium chromate (Na2CrO4) as the first key intermediate.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-48',
    type: 'mcq',
    question: 'The chromate ion (CrO4²⁻, yellow) and dichromate ion (Cr2O7²⁻, orange) exist in a pH-dependent equilibrium in aqueous solution, such that:',
    options: [
      'Chromate is favoured in acidic medium, dichromate in alkaline medium',
      'Chromate (yellow) is favoured in alkaline/basic medium, while dichromate (orange) is favoured in acidic medium',
      'Both ions exist equally, regardless of pH',
      'Neither ion is affected by pH changes'
    ],
    correctIndex: 1,
    explanation: 'The chromate-dichromate equilibrium is pH dependent: in alkaline/basic conditions, the yellow chromate ion (CrO4²⁻) predominates, while in acidic conditions, this converts to the orange dichromate ion (Cr2O7²⁻).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-49',
    type: 'mcq',
    question: 'The structure of the dichromate ion (Cr2O7²⁻) can be described as:',
    options: [
      'A single CrO4 tetrahedron',
      'Two CrO4 tetrahedra sharing one corner (a bridging oxygen atom), forming a Cr-O-Cr linkage',
      'Two CrO6 octahedra sharing an edge',
      'A linear arrangement of Cr and O atoms with no tetrahedral geometry'
    ],
    correctIndex: 1,
    explanation: 'The dichromate ion consists of two CrO4 tetrahedra joined together by sharing one corner (a bridging oxygen atom), giving the characteristic Cr-O-Cr linkage.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-50',
    type: 'mcq',
    question: 'Potassium dichromate (K2Cr2O7), in acidic medium, acts as a strong oxidising agent and is commonly used to oxidise:',
    options: [
      'Only noble gases',
      'Iodide ions to iodine, Fe²⁺ ions to Fe³⁺, and various organic compounds like alcohols',
      'Only water molecules',
      'Only inert gases like helium'
    ],
    correctIndex: 1,
    explanation: 'Acidified potassium dichromate is a versatile and widely used oxidising agent in both inorganic (e.g., oxidising I⁻ to I2, Fe²⁺ to Fe³⁺) and organic chemistry (e.g., oxidising primary/secondary alcohols).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-51',
    type: 'mcq',
    question: 'Sodium dichromate is converted to potassium dichromate (rather than being used directly) mainly because potassium dichromate:',
    options: [
      'Is more soluble in water and thus preferred for storage',
      'Is less soluble in water than sodium dichromate, allowing it to be more easily crystallised out and purified',
      'Cannot be prepared from sodium dichromate at all',
      'Has an entirely different chemical formula from sodium dichromate'
    ],
    correctIndex: 1,
    explanation: 'Potassium dichromate is less soluble in water compared to sodium dichromate, which allows it to be more readily crystallised out in pure form during preparation.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-52',
    type: 'mcq',
    question: 'The most common and stable oxidation state exhibited by nearly all lanthanoid elements is:',
    options: [
      '+1',
      '+2',
      '+3',
      '+5'
    ],
    correctIndex: 2,
    explanation: 'The +3 oxidation state is by far the most common and stable oxidation state across the entire lanthanoid series.',
    difficulty: 'easy'
  },
  {
    id: 'd-and-f-block-elements-53',
    type: 'mcq',
    question: 'Cerium (Ce), among the lanthanoids, is notable for also showing a stable +4 oxidation state, which arises because:',
    options: [
      'Ce4+ attains an unstable, highly reactive configuration',
      'Ce4+ attains a stable, noble-gas-like [Xe] 4f0 configuration',
      'Ce cannot show any oxidation state other than +4',
      'Ce has no electrons in the 4f subshell at all in its elemental form'
    ],
    correctIndex: 1,
    explanation: 'Cerium can lose an additional electron beyond the usual +3 state to attain the especially stable, noble-gas-like [Xe] 4f0 configuration in the +4 oxidation state, making Ce4+ a mild oxidising agent.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-54',
    type: 'mcq',
    question: 'Europium (Eu), among the lanthanoids, is notable for showing a relatively stable +2 oxidation state, which arises because:',
    options: [
      'Eu2+ has a completely empty 4f subshell',
      'Eu2+ attains a stable, half-filled 4f7 configuration',
      'Eu2+ cannot exist under any conditions',
      'Eu has the highest atomic number among lanthanoids'
    ],
    correctIndex: 1,
    explanation: 'In the +2 oxidation state, europium attains a stable, half-filled 4f7 configuration, giving Eu2+ extra stability compared to the typical +3 state seen in most other lanthanoids.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-55',
    type: 'mcq',
    question: 'All lanthanoid elements are generally described physically as:',
    options: [
      'Hard, brittle non-metals',
      'Silvery-white, soft metals that tarnish readily on exposure to air',
      'Colourless gases at room temperature',
      'Liquids at room temperature'
    ],
    correctIndex: 1,
    explanation: 'Lanthanoid elements are typically silvery-white, soft metals that tarnish (react/oxidise) readily when exposed to air.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-56',
    type: 'mcq',
    question: 'The general chemical reactivity of the lanthanoid elements is often compared to that of which s-block element?',
    options: [
      'Sodium (Na)',
      'Calcium (Ca), due to their similar electropositive character',
      'Beryllium (Be)',
      'Potassium (K)'
    ],
    correctIndex: 1,
    explanation: 'Lanthanoid elements are quite electropositive, and their general reactivity is often compared to that of calcium.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-57',
    type: 'mcq',
    question: 'The colours observed in Ln3+ (lanthanoid) ions arise from f-f electronic transitions, which are typically:',
    options: [
      'More intense than the d-d transitions seen in transition metal ions',
      'Weaker (paler) than d-d transitions, since f-f transitions are formally "forbidden" by selection rules',
      'Completely absent in all lanthanoid ions',
      'Identical in intensity to d-d transitions'
    ],
    correctIndex: 1,
    explanation: 'f-f electronic transitions in lanthanoid ions are formally forbidden by quantum mechanical selection rules (Laporte-forbidden), making the resulting colours generally much paler/weaker compared to the d-d transitions responsible for colour in many transition metal ions.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-58',
    type: 'mcq',
    question: 'Actinoid elements correspond to the atomic number range:',
    options: [
      '58 to 71',
      '90 to 103 (thorium to lawrencium)',
      '21 to 30',
      '39 to 48'
    ],
    correctIndex: 1,
    explanation: 'The actinoid series consists of the 14 elements from thorium (Z=90) to lawrencium (Z=103).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-59',
    type: 'mcq',
    question: 'A key distinguishing feature of all actinoid elements, unlike most lanthanoids, is that they are:',
    options: [
      'All completely stable and non-radioactive',
      'All radioactive',
      'All liquids at room temperature',
      'All colourless in every compound'
    ],
    correctIndex: 1,
    explanation: 'A defining characteristic of the actinoid series is that all its members are radioactive, unlike the lanthanoids, most of which are stable (with promethium being a notable radioactive exception among lanthanoids).',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-60',
    type: 'mcq',
    question: 'Elements of the actinoid series beyond uranium (atomic number 92) are collectively referred to as:',
    options: [
      'Lanthanoids',
      'Transuranium (or transuranic) elements, since most are synthetically produced and not found significantly in nature',
      'Alkali metals',
      'Noble gases'
    ],
    correctIndex: 1,
    explanation: 'Elements with atomic number greater than uranium (92) are called transuranium elements, most of which are synthetically produced in laboratories or nuclear reactors, since they are not found in significant natural quantities.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-61',
    type: 'mcq',
    question: 'Compared to lanthanoids, actinoid elements generally exhibit:',
    options: [
      'A narrower range of oxidation states',
      'A wider range of oxidation states, since the 5f, 6d, and 7s orbital energies are closer together and more comparable in energy',
      'Only a single oxidation state throughout the series',
      'No variability in oxidation states at all'
    ],
    correctIndex: 1,
    explanation: 'Since the 5f, 6d, and 7s orbitals of actinoids have more closely comparable energies (compared to the more deeply buried 4f orbitals in lanthanoids), actinoids show a wider range of accessible oxidation states.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-62',
    type: 'mcq',
    question: 'Uranium (U), a well-studied actinoid element, is known to exhibit multiple oxidation states, with its most stable oxidation state being:',
    options: [
      '+2',
      '+3',
      '+6, as seen in the stable uranyl ion (UO2²⁺)',
      '+1'
    ],
    correctIndex: 2,
    explanation: 'While uranium can show oxidation states from +3 to +6, its most stable and commonly encountered oxidation state is +6, notably present in the uranyl ion, UO2²⁺.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-63',
    type: 'mcq',
    question: 'The phenomenon analogous to lanthanoid contraction, observed across the actinoid series, is called:',
    options: [
      'Lanthanoid expansion',
      'Actinoid contraction, generally found to be greater and more irregular per element than lanthanoid contraction',
      'Transition contraction',
      'Periodic contraction'
    ],
    correctIndex: 1,
    explanation: 'Actinoids show a similar contraction in atomic/ionic radii called actinoid contraction, which is generally greater in magnitude and more irregular per element compared to lanthanoid contraction, due to poorer shielding by the 5f electrons.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-64',
    type: 'mcq',
    question: 'The 5f orbitals of actinoid elements, compared to the 4f orbitals of lanthanoids, extend:',
    options: [
      'Less far from the nucleus, making them less available for bonding',
      'Further from the nucleus, allowing them to participate more effectively in chemical bonding',
      'Exactly the same distance, with no difference in bonding participation',
      'Only into the nucleus itself'
    ],
    correctIndex: 1,
    explanation: 'The 5f orbitals of actinoids extend further from the nucleus than the 4f orbitals of lanthanoids, allowing greater participation in covalent bonding and complex formation for actinoids compared to lanthanoids.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-65',
    type: 'mcq',
    question: 'Thorium (Th), the first member of the actinoid series, most commonly exhibits which oxidation state?',
    options: [
      '+2',
      '+3',
      '+4, achieving a noble-gas-like [Rn] configuration',
      '+6'
    ],
    correctIndex: 2,
    explanation: 'Thorium most commonly and stably exhibits the +4 oxidation state, achieving a stable [Rn] configuration by losing all four valence electrons.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-66',
    type: 'mcq',
    question: 'Which of the following is a key chemical/structural distinction between lanthanoids and actinoids?',
    options: [
      'Lanthanoids show a wider range of oxidation states than actinoids',
      'Actinoids show a greater tendency toward complex/covalent bond formation due to more effective participation of their 5f orbitals, compared to the more limited 4f orbital involvement in lanthanoid bonding',
      'Actinoids are never radioactive, unlike lanthanoids',
      'Lanthanoids show greater actinoid contraction than actinoids'
    ],
    correctIndex: 1,
    explanation: 'Because the 5f orbitals of actinoids are more available for bonding (extending further from the nucleus) than the 4f orbitals of lanthanoids, actinoids show a greater tendency to form covalent bonds and complexes.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-67',
    type: 'mcq',
    question: 'Iron (Fe) is often cited as the most abundant transition metal in the:',
    options: ["Earth's atmosphere", "Earth's crust", 'Solar corona only', "Oceans"],
    correctIndex: 1,
    explanation: 'Iron is well known as the most abundant transition metal found in the Earth\'s crust.',
    difficulty: 'easy'
  },
  {
    id: 'd-and-f-block-elements-68',
    type: 'mcq',
    question: 'Among transition metals, tungsten (W) is notable for having:',
    options: [
      'The lowest melting point of all transition metals',
      'One of the highest melting points among all metals, making it useful in filaments for incandescent bulbs',
      'No metallic character at all',
      'The largest atomic radius among 5d transition elements'
    ],
    correctIndex: 1,
    explanation: 'Tungsten has one of the highest melting points among all metals, a property exploited in its traditional use for incandescent light bulb filaments.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-69',
    type: 'mcq',
    question: 'The general reason for the higher density of transition metals compared to s-block metals is attributed to their:',
    options: [
      'Larger atomic size and weaker metallic bonding',
      'Smaller atomic size (due to increased nuclear charge and d-orbital contraction) combined with strong metallic bonding, allowing atoms to pack closely together',
      'Complete absence of metallic bonding',
      'Very low atomic mass'
    ],
    correctIndex: 1,
    explanation: 'Transition metals tend to have relatively small atomic sizes (due to the effects of increasing nuclear charge and d-orbital contraction) combined with strong metallic bonding, allowing atoms to pack closely and resulting in comparatively high densities.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-70',
    type: 'mcq',
    question: 'Copper (Cu), an important 3d transition metal, characteristically shows two common oxidation states:',
    options: [
      '+1 and +2, with Cu2+ generally being the more stable of the two in aqueous solution',
      '+3 and +4 only',
      'Only +1, with no other oxidation state possible',
      'Only 0 (elemental) and +5'
    ],
    correctIndex: 0,
    explanation: 'Copper commonly shows both +1 (cuprous) and +2 (cupric) oxidation states, with Cu2+ generally being more stable in aqueous solution due to its higher hydration enthalpy, despite Cu+ having a more stable electronic configuration (d10) in isolation.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-71',
    type: 'mcq',
    question: 'The Cu+ ion (d10 configuration) is generally found to be:',
    options: [
      'Deeply coloured due to strong d-d transitions',
      'Colourless, and tends to disproportionate in aqueous solution into Cu2+ and metallic Cu',
      'Highly radioactive',
      'Impossible to form under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'Since Cu+ has a fully-filled d10 configuration, it is colourless (no d-d transitions possible), and in aqueous solution, it tends to disproportionate (undergo self-oxidation-reduction) into Cu2+ and metallic copper.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-72',
    type: 'mcq',
    question: 'Chromium (Cr), in its ground state electronic configuration, shows an exceptional configuration of [Ar] 3d5 4s1 rather than the "expected" [Ar] 3d4 4s2, primarily due to:',
    options: [
      'A completely random arrangement with no underlying reason',
      'The extra stability associated with a half-filled d subshell (3d5), which is achieved by promoting one electron from 4s to 3d',
      'The complete absence of the 4s orbital in chromium',
      'Chromium having no d orbitals at all'
    ],
    correctIndex: 1,
    explanation: 'Chromium adopts the configuration [Ar] 3d5 4s1 (rather than 3d4 4s2) because the resulting half-filled 3d subshell provides extra stability due to symmetrical electron distribution and favourable exchange energy.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-73',
    type: 'mcq',
    question: 'Similar to chromium, copper (Cu) also shows an exceptional ground state electronic configuration, [Ar] 3d10 4s1, rather than [Ar] 3d9 4s2, due to the extra stability of:',
    options: [
      'A half-filled d subshell',
      'A completely filled (d10) subshell',
      'An entirely empty d subshell',
      'A partially filled s subshell only'
    ],
    correctIndex: 1,
    explanation: 'Copper adopts the configuration [Ar] 3d10 4s1 (rather than 3d9 4s2) because a fully-filled 3d10 subshell provides extra stability, similar to how a half-filled subshell stabilises chromium\'s configuration.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-74',
    type: 'mcq',
    question: 'Assertion: Zinc (Zn) is not classified as a typical transition element.\nReason: Zinc has a completely filled 3d10 configuration in both its elemental state and its common +2 oxidation state.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since zinc never has a partially filled d subshell (always d10), it fails the formal definition of a transition element, correctly explained by the reason.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-75',
    type: 'mcq',
    question: 'Assertion: The atomic radii of zirconium (Zr, 4d series) and hafnium (Hf, 5d series) are almost identical, despite hafnium being in a lower period.\nReason: This near-identical size results from lanthanoid contraction, which compensates for the expected size increase when moving from the 4d to the 5d series.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The near-identical radii of Zr and Hf are a direct consequence of lanthanoid contraction occurring across the intervening lanthanoid series, correctly explained by the reason.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-76',
    type: 'mcq',
    question: 'Assertion: Sc3+ and Ti4+ ions are both colourless in their compounds.\nReason: Both ions have a d0 electronic configuration, so no d-d electronic transition is possible.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Both Sc3+ and Ti4+ have completely empty d0 configurations, making d-d transitions impossible and correctly explaining why both ions and their compounds are typically colourless.',
    difficulty: 'medium'
  },
  {
    id: 'd-and-f-block-elements-77',
    type: 'mcq',
    question: 'Assertion: Actinoids generally exhibit a wider range of oxidation states compared to lanthanoids.\nReason: In actinoids, the 5f, 6d, and 7s orbitals have relatively close energies, allowing more of these electrons to participate in bonding.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The comparable energies of the 5f, 6d, and 7s orbitals in actinoids allow greater flexibility in the number of electrons that can participate in bonding, correctly explaining their wider range of oxidation states compared to lanthanoids.',
    difficulty: 'hard'
  },
  {
    id: 'd-and-f-block-elements-78',
    type: 'mcq',
    question: 'Which of the following correctly summarises a key distinguishing feature between the d-block and f-block elements in terms of orbital filling?',
    options: [
      'd-block elements involve filling of the (n-1)d subshell, while f-block elements involve filling of the (n-2)f subshell',
      'Both d-block and f-block elements involve filling of only the outermost ns subshell',
      'd-block elements involve filling of the f subshell, while f-block elements involve filling of the d subshell',
      'Neither d-block nor f-block elements involve filling of any inner subshells'
    ],
    correctIndex: 0,
    explanation: 'd-block elements are characterised by the progressive filling of the (n-1)d subshell, while f-block elements are characterised by the filling of the even more deeply buried (n-2)f subshell, reflecting their distinct positions and properties in the periodic table.',
    difficulty: 'medium'
  }
];

export default questions;
