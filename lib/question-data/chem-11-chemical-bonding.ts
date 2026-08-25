import type { Question } from "@/lib/questionBank";

// NEET Chemistry Question Bank
// Chapter: Chemical Bonding and Molecular Structure
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'chemical-bonding-and-molecular-structure-1',
    type: 'mcq',
    question: 'According to the Kossel-Lewis approach, atoms combine with each other primarily to achieve:',
    options: [
      'A completely empty valence shell',
      'A stable electronic configuration, typically eight electrons in the valence shell (octet), similar to the nearest noble gas',
      'The same atomic number as a noble gas',
      'Maximum atomic mass'
    ],
    correctIndex: 1,
    explanation: 'The Kossel-Lewis approach proposes that atoms combine to attain a stable, noble-gas-like electronic configuration, usually with eight electrons in the valence shell (the octet rule).',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-2',
    type: 'mcq',
    question: 'A Lewis dot structure (electron dot structure) of an atom or molecule represents:',
    options: [
      'Only the core (inner shell) electrons',
      'The valence electrons of the atom(s), shown as dots around the chemical symbol',
      'The total number of protons in the nucleus',
      'The atomic mass of the element'
    ],
    correctIndex: 1,
    explanation: 'Lewis dot structures depict only the valence (outermost shell) electrons of an atom as dots surrounding its chemical symbol, useful for representing bonding.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-3',
    type: 'mcq',
    question: 'Hydrogen and helium are notable exceptions to the standard octet rule because they achieve stability with:',
    options: [
      'Sixteen electrons',
      'Only two electrons in their valence shell (a duplet), corresponding to a filled 1s orbital',
      'Zero electrons',
      'Six electrons'
    ],
    correctIndex: 1,
    explanation: 'Since hydrogen and helium have only the 1s orbital available, they achieve a stable configuration with just two electrons (a duplet), rather than the usual octet of eight.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-4',
    type: 'mcq',
    question: 'Compounds like BeCl2 and BF3, in which the central atom has fewer than eight electrons around it in the Lewis structure, are examples of exceptions to the octet rule known as:',
    options: [
      'Expanded octet compounds',
      'Odd-electron molecules',
      'Incomplete octet compounds',
      'Resonance structures'
    ],
    correctIndex: 2,
    explanation: 'In compounds such as BeCl2 (Be has 4 electrons) and BF3 (B has 6 electrons), the central atom does not achieve a full octet, classifying them as incomplete octet exceptions.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-5',
    type: 'mcq',
    question: 'Compounds like PCl5 and SF6, where the central atom accommodates more than eight electrons in its valence shell (often using d orbitals), represent the exception known as:',
    options: [
      'Incomplete octet',
      'Expanded octet',
      'Odd-electron molecule',
      'Coordinate bonding only'
    ],
    correctIndex: 1,
    explanation: 'In molecules such as PCl5 (10 electrons around P) and SF6 (12 electrons around S), the central atom exceeds the octet by utilising available d orbitals, an exception called expanded octet.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-6',
    type: 'mcq',
    question: 'Molecules like NO and NO2, which contain an odd (unpaired) total number of valence electrons and hence cannot satisfy the octet rule for all atoms, are classified as:',
    options: [
      'Incomplete octet molecules',
      'Expanded octet molecules',
      'Odd-electron molecules',
      'Ionic compounds'
    ],
    correctIndex: 2,
    explanation: 'Molecules with an odd total number of valence electrons, like NO and NO2, cannot have all electrons paired, making them exceptions to the octet rule termed odd-electron molecules.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-7',
    type: 'mcq',
    question: 'The Lewis symbol for an element shows dots equal to the number of:',
    options: [
      'Protons in the nucleus',
      'Valence electrons of the atom',
      'Neutrons in the nucleus',
      'Total electrons (including core electrons)'
    ],
    correctIndex: 1,
    explanation: 'A Lewis symbol represents only the valence (outermost) electrons of an atom as dots placed around its elemental symbol.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-8',
    type: 'mcq',
    question: 'The octet rule, though widely useful, fails to explain the bonding and stability of which of the following?',
    options: [
      'Simple diatomic molecules like Cl2',
      'Electron-deficient, electron-excess, and odd-electron molecules (like BF3, SF6, and NO respectively)',
      'Only ionic compounds',
      'Only noble gas atoms'
    ],
    correctIndex: 1,
    explanation: 'The octet rule cannot fully account for electron-deficient (BF3), electron-excess/expanded octet (SF6), and odd-electron (NO) species, among other limitations.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-9',
    type: 'mcq',
    question: 'An ionic (electrovalent) bond is formed by:',
    options: [
      'Mutual sharing of an electron pair between two atoms',
      'Complete transfer of one or more electrons from one atom to another, resulting in oppositely charged ions held by electrostatic attraction',
      'Overlap of atomic orbitals only',
      'Sharing of protons between two nuclei'
    ],
    correctIndex: 1,
    explanation: 'An ionic bond forms through the complete transfer of electrons from an electropositive atom (forming a cation) to an electronegative atom (forming an anion), with the resulting ions held together by electrostatic (coulombic) attraction.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-10',
    type: 'mcq',
    question: 'The formation of an ionic bond is favoured by a combination of:',
    options: [
      'High ionization enthalpy of the metal and low electron gain enthalpy (in magnitude) of the non-metal',
      'Low ionization enthalpy of the metal, high (negative) electron gain enthalpy of the non-metal, and high lattice enthalpy of the resulting compound',
      'Both atoms having similar electronegativity',
      'Both atoms being non-metals'
    ],
    correctIndex: 1,
    explanation: 'Ionic bond formation is energetically favoured when the metal has low ionization enthalpy (easy cation formation), the non-metal has a high negative electron gain enthalpy (easy anion formation), and the resulting lattice enthalpy is large (favourable overall energetics).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-11',
    type: 'mcq',
    question: 'Lattice enthalpy of an ionic compound is defined as the energy required to:',
    options: [
      'Melt one mole of the solid compound',
      'Completely separate one mole of a solid ionic compound into its gaseous constituent ions',
      'Vaporise one mole of the compound',
      'Dissolve one mole of the compound in water'
    ],
    correctIndex: 1,
    explanation: 'Lattice enthalpy is the energy required to completely separate one mole of a solid ionic crystal into its individual gaseous ions, an endothermic process.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-12',
    type: 'mcq',
    question: 'Lattice enthalpy of an ionic compound generally increases with:',
    options: [
      'Increasing size of the constituent ions and decreasing charge on the ions',
      'Increasing charge on the ions and decreasing size of the constituent ions',
      'Decreasing charge and increasing size of the ions simultaneously',
      'No relation to ionic size or charge'
    ],
    correctIndex: 1,
    explanation: 'Lattice enthalpy increases with higher ionic charges (stronger electrostatic attraction) and smaller ionic sizes (ions can pack closer together, increasing attraction).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-13',
    type: 'mcq',
    question: 'A covalent bond is formed between two atoms through:',
    options: [
      'Complete transfer of electrons from one atom to the other',
      'Mutual sharing of one or more electron pairs between the two atoms',
      'Electrostatic attraction between oppositely charged ions',
      'Loss of electrons from both atoms simultaneously'
    ],
    correctIndex: 1,
    explanation: 'A covalent bond involves the mutual sharing of one or more pairs of electrons between two atoms, allowing both to attain a stable electronic configuration.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-14',
    type: 'mcq',
    question: 'The formal charge on an atom in a Lewis structure is calculated using the formula:',
    options: [
      'FC = (valence electrons in free atom) + (nonbonding electrons) + (bonding electrons)',
      'FC = (valence electrons in free atom) − (nonbonding electrons) − (1/2)(bonding electrons)',
      'FC = (bonding electrons) − (nonbonding electrons)',
      'FC = (total electrons in the molecule) / (number of atoms)'
    ],
    correctIndex: 1,
    explanation: 'Formal charge is calculated as FC = (valence electrons of free atom) − (nonbonding electrons on that atom in the structure) − (half of the bonding/shared electrons around that atom).',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-15',
    type: 'mcq',
    question: 'When multiple valid Lewis structures are possible for a molecule, the structure with formal charges closest to zero, and any negative formal charge preferably on the more electronegative atom, is generally considered:',
    options: [
      'Less stable and less representative of the actual molecule',
      'The most stable and most representative structure',
      'Irrelevant to the actual structure',
      'Only relevant for ionic compounds'
    ],
    correctIndex: 1,
    explanation: 'Among possible Lewis structures, the one with formal charges nearest to zero (and negative charge, if any, residing on the more electronegative atom) is typically the most energetically favourable and representative structure.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-16',
    type: 'mcq',
    question: 'Bond length is defined as the:',
    options: [
      'Distance between the outermost electrons of two bonded atoms',
      'Equilibrium distance between the nuclei of two atoms bonded together in a molecule',
      'Total number of electrons shared between two atoms',
      'Energy required to break a bond'
    ],
    correctIndex: 1,
    explanation: 'Bond length is the equilibrium (average) distance between the nuclei of two atoms that are chemically bonded together.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-17',
    type: 'mcq',
    question: 'As the bond order between two atoms increases (e.g., from single to double to triple bond), the bond length generally:',
    options: [
      'Increases',
      'Decreases',
      'Remains completely unchanged',
      'Becomes zero'
    ],
    correctIndex: 1,
    explanation: 'Higher bond order corresponds to greater electron density between the nuclei, pulling the atoms closer together and thus decreasing bond length (a triple bond is shorter than a double bond, which is shorter than a single bond).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-18',
    type: 'mcq',
    question: 'Bond enthalpy (or bond dissociation energy) is defined as the energy required to:',
    options: [
      'Form one mole of a particular type of bond from separate gaseous atoms',
      'Break one mole of a particular type of bond between two atoms, in the gaseous state, to yield separate atoms',
      'Dissolve a compound in a solvent',
      'Change the physical state of a substance'
    ],
    correctIndex: 1,
    explanation: 'Bond enthalpy is the amount of energy required to break one mole of a specific type of bond between two gaseous atoms, yielding separated gaseous atoms.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-19',
    type: 'mcq',
    question: 'As bond order increases between two similar atoms (single to double to triple), bond enthalpy generally:',
    options: [
      'Decreases',
      'Increases, since more energy is needed to break a stronger, multiple bond',
      'Remains constant',
      'Becomes negative'
    ],
    correctIndex: 1,
    explanation: 'A higher bond order corresponds to a stronger bond with greater electron density, requiring more energy to break, hence bond enthalpy increases with bond order.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-20',
    type: 'mcq',
    question: 'Bond order is defined as the:',
    options: [
      'Total number of atoms in a molecule',
      'Number of bonds (single, double, or triple) between two bonded atoms in a molecule',
      'Number of lone pairs on the central atom',
      'Total number of electrons in the molecule'
    ],
    correctIndex: 1,
    explanation: 'Bond order indicates the number of chemical bonds (e.g., 1 for single, 2 for double, 3 for triple) shared between a pair of bonded atoms.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-21',
    type: 'mcq',
    question: 'Bond angle is defined as the angle between:',
    options: [
      'Two non-bonded atoms in different molecules',
      'Two orbitals containing the bonding electron pairs around a central atom in a molecule',
      'The nucleus and an electron of the same atom',
      'Two protons in the nucleus'
    ],
    correctIndex: 1,
    explanation: 'Bond angle refers to the angle between the orbitals containing bonding electron pairs, measured with the central atom at the vertex.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-22',
    type: 'mcq',
    question: 'Resonance in a molecule refers to a situation where:',
    options: [
      'The actual structure vibrates rapidly between two different sets of atoms',
      'A single Lewis structure cannot adequately depict the molecule, so multiple canonical structures (differing only in electron arrangement) are used to describe the true structure as their hybrid',
      'The molecule has two different molecular formulas',
      'The atoms in the molecule constantly change their identity'
    ],
    correctIndex: 1,
    explanation: 'Resonance occurs when a single Lewis structure is inadequate to represent a molecule, so several valid canonical structures (differing only in electron positions, not atomic positions) are drawn, and the actual molecule is represented as a hybrid (weighted average) of these.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-23',
    type: 'mcq',
    question: 'The actual resonance hybrid of a molecule, compared to any single contributing canonical (resonance) structure, is:',
    options: [
      'Less stable and higher in energy',
      'More stable and lower in energy, due to resonance stabilisation',
      'Exactly the same in energy as each canonical form',
      'Unstable and does not actually exist'
    ],
    correctIndex: 1,
    explanation: 'The true resonance hybrid is more stable (lower in energy) than any single canonical (contributing) structure, and this extra stability is called the resonance energy or resonance stabilisation.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-24',
    type: 'mcq',
    question: 'Which of the following is a classic example of a molecule/ion exhibiting resonance?',
    options: [
      'Methane (CH4)',
      'Ozone (O3) and the carbonate ion (CO3²⁻)',
      'Hydrogen molecule (H2)',
      'Sodium chloride (NaCl)'
    ],
    correctIndex: 1,
    explanation: 'Ozone and the carbonate ion are classic textbook examples of resonance, where multiple equivalent Lewis structures contribute to the actual molecular/ionic structure.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-25',
    type: 'mcq',
    question: 'Different resonance structures of the same species differ only in the:',
    options: [
      'Positions of the atomic nuclei',
      'Arrangement/positions of the electrons, while the positions of the atomic nuclei remain unchanged',
      'Molecular formula',
      'Number of atoms present'
    ],
    correctIndex: 1,
    explanation: 'A defining feature of resonance structures is that they differ only in the arrangement of electrons (e.g., positions of double bonds or lone pairs); the arrangement of the atomic nuclei stays exactly the same.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-26',
    type: 'mcq',
    question: 'Dipole moment (μ) of a polar bond is defined as the product of:',
    options: [
      'The number of electrons and the atomic mass',
      'The magnitude of the charge (Q) at either end of the dipole and the distance (r) separating the charges',
      'The bond enthalpy and bond order',
      'The number of protons and neutrons'
    ],
    correctIndex: 1,
    explanation: 'Dipole moment is defined as μ = Q × r, the product of the magnitude of the partial charge and the distance separating the two charge centres.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-27',
    type: 'mcq',
    question: 'Dipole moment is commonly expressed in the unit called the:',
    options: [
      'Newton',
      'Debye (D)',
      'Joule',
      'Ampere'
    ],
    correctIndex: 1,
    explanation: 'Although the SI unit of dipole moment is coulomb-metre (C·m), it is commonly expressed in the practical unit called the Debye (D), where 1 D ≈ 3.336 × 10^-30 C·m.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-28',
    type: 'mcq',
    question: 'Carbon dioxide (CO2) has polar C=O bonds, yet the molecule as a whole has zero net dipole moment. This is because:',
    options: [
      'The C=O bonds are not actually polar',
      'CO2 has a linear geometry, so the two equal and opposite bond dipole moments cancel each other out exactly',
      'CO2 has no lone pairs at all on the central atom',
      'Carbon and oxygen have identical electronegativity'
    ],
    correctIndex: 1,
    explanation: 'Since CO2 is linear (O=C=O) with two identical, oppositely directed C=O bond dipoles, they cancel exactly, resulting in a net dipole moment of zero despite the individual bonds being polar.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-29',
    type: 'mcq',
    question: 'Water (H2O) has a bent (angular) molecular geometry and, unlike CO2, has a non-zero net dipole moment because:',
    options: [
      'The O-H bonds are non-polar',
      'The bent shape prevents the two O-H bond dipoles from cancelling completely, resulting in a net resultant dipole moment',
      'Water has no lone pairs on oxygen',
      'Hydrogen is more electronegative than oxygen'
    ],
    correctIndex: 1,
    explanation: 'Since water\'s bent geometry does not allow the two O-H bond dipoles to point in exactly opposite directions, they only partially cancel, leaving a net (non-zero) dipole moment for the molecule.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-30',
    type: 'mcq',
    question: 'Dipole moment measurements are useful in chemistry for determining:',
    options: [
      'The atomic number of an element',
      'The percentage ionic character of a bond and distinguishing between geometric (cis/trans) isomers',
      'The exact mass of a molecule',
      'The boiling point of pure elements only'
    ],
    correctIndex: 1,
    explanation: 'Dipole moment data help estimate the percentage ionic character of a bond and can distinguish between cis and trans isomers, since they often have different net dipole moments due to differing symmetry.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-31',
    type: 'mcq',
    question: 'The Valence Shell Electron Pair Repulsion (VSEPR) theory is used to predict the:',
    options: [
      'Colour of a compound',
      'Geometrical shape of a covalent molecule, based on minimising repulsion between electron pairs around the central atom',
      'Melting point of a compound',
      'Solubility of a compound in water'
    ],
    correctIndex: 1,
    explanation: 'VSEPR theory predicts molecular geometry by assuming that electron pairs (bonding and lone) around a central atom arrange themselves to minimise mutual repulsion.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-32',
    type: 'mcq',
    question: 'According to VSEPR theory, the order of repulsive strength between different types of electron pairs is:',
    options: [
      'Bond pair-bond pair > lone pair-bond pair > lone pair-lone pair',
      'Lone pair-lone pair > lone pair-bond pair > bond pair-bond pair',
      'Lone pair-bond pair > lone pair-lone pair > bond pair-bond pair',
      'All three types of repulsion are exactly equal'
    ],
    correctIndex: 1,
    explanation: 'VSEPR theory states that lone pair-lone pair repulsion is the strongest, followed by lone pair-bond pair repulsion, with bond pair-bond pair repulsion being the weakest.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-33',
    type: 'mcq',
    question: 'A molecule like BeCl2, with two bonding electron pairs and no lone pairs around the central atom, is predicted by VSEPR theory to have:',
    options: [
      'A bent (angular) shape',
      'A linear shape, with a bond angle of 180°',
      'A tetrahedral shape',
      'A trigonal planar shape'
    ],
    correctIndex: 1,
    explanation: 'With two bonding pairs and no lone pairs, VSEPR predicts a linear geometry (180° bond angle) to minimise repulsion, as seen in BeCl2.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-34',
    type: 'mcq',
    question: 'A molecule like BF3, with three bonding electron pairs and no lone pairs around the central atom, adopts which VSEPR-predicted shape?',
    options: [
      'Linear',
      'Trigonal planar, with bond angles of 120°',
      'Tetrahedral',
      'Pyramidal'
    ],
    correctIndex: 1,
    explanation: 'With three bonding pairs and no lone pairs, VSEPR predicts trigonal planar geometry with 120° bond angles, as observed in BF3.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-35',
    type: 'mcq',
    question: 'Methane (CH4), with four bonding pairs and no lone pairs around the central carbon atom, adopts which shape according to VSEPR theory?',
    options: [
      'Square planar',
      'Tetrahedral, with bond angles of 109.5°',
      'Trigonal bipyramidal',
      'Linear'
    ],
    correctIndex: 1,
    explanation: 'With four bonding pairs and no lone pairs, VSEPR predicts a tetrahedral shape with bond angles of 109.5°, as seen in methane.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-36',
    type: 'mcq',
    question: 'Ammonia (NH3) has three bonding pairs and one lone pair on the central nitrogen atom, giving it a molecular shape described as:',
    options: [
      'Tetrahedral, with a bond angle of exactly 109.5°',
      'Trigonal pyramidal, with a bond angle slightly less than 109.5° (approximately 107°) due to lone pair repulsion',
      'Trigonal planar',
      'Linear'
    ],
    correctIndex: 1,
    explanation: 'NH3 has a tetrahedral electron pair geometry, but with one lone pair, its molecular shape is trigonal pyramidal, and the greater lone pair-bond pair repulsion compresses the H-N-H bond angle to about 107°, less than the ideal tetrahedral angle.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-37',
    type: 'mcq',
    question: 'Water (H2O) has two bonding pairs and two lone pairs on the central oxygen atom, resulting in a molecular shape described as:',
    options: [
      'Linear',
      'Bent (angular), with a bond angle of approximately 104.5°, less than the tetrahedral angle due to two lone pairs',
      'Tetrahedral, with a bond angle of exactly 109.5°',
      'Trigonal pyramidal'
    ],
    correctIndex: 1,
    explanation: 'With two bonding pairs and two lone pairs (greater lone pair repulsion than in NH3), water adopts a bent shape with a bond angle of about 104.5°, further compressed from the ideal tetrahedral angle.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-38',
    type: 'mcq',
    question: 'PCl5, with five bonding pairs and no lone pairs around the central phosphorus atom, adopts which VSEPR-predicted shape?',
    options: [
      'Octahedral',
      'Trigonal bipyramidal',
      'Square pyramidal',
      'Tetrahedral'
    ],
    correctIndex: 1,
    explanation: 'With five bonding pairs and no lone pairs, VSEPR predicts a trigonal bipyramidal geometry, as observed in PCl5.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-39',
    type: 'mcq',
    question: 'SF6, with six bonding pairs and no lone pairs around the central sulphur atom, adopts which VSEPR-predicted shape?',
    options: [
      'Trigonal bipyramidal',
      'Octahedral',
      'Square planar',
      'T-shaped'
    ],
    correctIndex: 1,
    explanation: 'With six bonding pairs and no lone pairs, VSEPR predicts an octahedral geometry with 90° bond angles, as observed in SF6.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-40',
    type: 'mcq',
    question: 'SO2, with two bonding pairs and one lone pair on the central sulphur atom, adopts which molecular shape according to VSEPR theory?',
    options: [
      'Linear',
      'Bent (angular), similar in shape to ozone',
      'Trigonal planar without any bending',
      'Tetrahedral'
    ],
    correctIndex: 1,
    explanation: 'With three total electron domains (two bonding pairs and one lone pair), SO2 adopts a bent (angular) molecular shape, since the lone pair occupies one of the three trigonal planar positions.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-41',
    type: 'mcq',
    question: 'According to Valence Bond Theory (VBT), a covalent bond forms when two atomic orbitals, each containing an unpaired electron, undergo:',
    options: [
      'Complete separation from each other',
      'Overlap, with the electrons pairing up with opposite spins',
      'Repulsion, pushing the atoms further apart',
      'Transfer of the electron from one atom to the other completely'
    ],
    correctIndex: 1,
    explanation: 'Valence Bond Theory explains covalent bond formation as the overlap of atomic orbitals (each containing one unpaired electron), with the two electrons pairing up with opposite spins in the region of overlap.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-42',
    type: 'mcq',
    question: 'A sigma (σ) bond is formed by:',
    options: [
      'Sideways (lateral) overlap of parallel p orbitals',
      'Head-on (axial) overlap of atomic orbitals along the internuclear axis',
      'No overlap at all, only electron transfer',
      'Overlap of only d orbitals exclusively'
    ],
    correctIndex: 1,
    explanation: 'A sigma bond results from head-on (axial) overlap of atomic orbitals directly along the line connecting the two nuclei, allowing for greater orbital overlap.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-43',
    type: 'mcq',
    question: 'A pi (π) bond is formed by:',
    options: [
      'Head-on overlap of s orbitals only',
      'Sideways (lateral) overlap of parallel p orbitals, above and below the internuclear axis',
      'Complete transfer of electrons between atoms',
      'Overlap of orbitals along the internuclear axis'
    ],
    correctIndex: 1,
    explanation: 'A pi bond forms via sideways (lateral) overlap of parallel p orbitals, with electron density concentrated above and below (not directly along) the internuclear axis.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-44',
    type: 'mcq',
    question: 'Comparing the strength of sigma and pi bonds between the same pair of atoms, sigma bonds are generally:',
    options: [
      'Weaker than pi bonds, due to less effective overlap',
      'Stronger than pi bonds, due to greater and more direct orbital overlap',
      'Exactly equal in strength to pi bonds',
      'Non-existent in most molecules'
    ],
    correctIndex: 1,
    explanation: 'Since sigma bonds involve direct, head-on overlap (generally more extensive than the sideways overlap of pi bonds), sigma bonds are typically stronger than pi bonds.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-45',
    type: 'mcq',
    question: 'Hybridization is best described as the process of:',
    options: [
      'Mixing of atomic orbitals of similar energy on the same atom to form new equivalent orbitals suited for bonding, with a definite geometrical arrangement',
      'Combining atomic orbitals from two different atoms into molecular orbitals',
      'Completely transferring electrons between atoms',
      'Removing electrons from an atom to form a cation'
    ],
    correctIndex: 0,
    explanation: 'Hybridization refers to the intermixing of atomic orbitals belonging to the same atom, with comparable energies, to produce a new set of equivalent hybrid orbitals suitable for bonding with definite orientations.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-46',
    type: 'mcq',
    question: 'sp hybridization, formed by mixing one s and one p orbital, gives rise to a molecular geometry that is:',
    options: [
      'Tetrahedral',
      'Linear, with a bond angle of 180°',
      'Trigonal planar',
      'Octahedral'
    ],
    correctIndex: 1,
    explanation: 'sp hybridization produces two hybrid orbitals oriented 180° apart, resulting in linear geometry, as seen in molecules like BeCl2 and acetylene (C2H2).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-47',
    type: 'mcq',
    question: 'sp² hybridization, formed by mixing one s and two p orbitals, gives rise to a molecular geometry that is:',
    options: [
      'Linear',
      'Trigonal planar, with bond angles of 120°',
      'Tetrahedral',
      'Trigonal bipyramidal'
    ],
    correctIndex: 1,
    explanation: 'sp² hybridization produces three hybrid orbitals arranged in a plane at 120° to each other, giving trigonal planar geometry, as seen in BF3 and ethylene (C2H4).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-48',
    type: 'mcq',
    question: 'sp³ hybridization, formed by mixing one s and three p orbitals, gives rise to a molecular geometry that is:',
    options: [
      'Tetrahedral, with bond angles of 109.5°',
      'Trigonal planar',
      'Linear',
      'Octahedral'
    ],
    correctIndex: 0,
    explanation: 'sp³ hybridization produces four hybrid orbitals directed toward the corners of a tetrahedron (109.5° apart), as seen in CH4, NH3, and H2O (with lone pairs occupying some positions).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-49',
    type: 'mcq',
    question: 'The central phosphorus atom in PCl5 is best described as undergoing which type of hybridization?',
    options: [
      'sp³',
      'sp³d, giving a trigonal bipyramidal geometry',
      'sp³d²',
      'sp²'
    ],
    correctIndex: 1,
    explanation: 'The five bonding pairs around phosphorus in PCl5 correspond to sp³d hybridization (mixing one s, three p, and one d orbital), giving a trigonal bipyramidal shape.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-50',
    type: 'mcq',
    question: 'The central sulphur atom in SF6 is best described as undergoing which type of hybridization?',
    options: [
      'sp³d',
      'sp³d², giving an octahedral geometry',
      'sp³',
      'sp'
    ],
    correctIndex: 1,
    explanation: 'The six bonding pairs around sulphur in SF6 correspond to sp³d² hybridization (mixing one s, three p, and two d orbitals), giving an octahedral shape.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-51',
    type: 'mcq',
    question: 'The carbon atom in acetylene (C2H2), forming a triple bond, is best described as undergoing which type of hybridization?',
    options: [
      'sp³',
      'sp²',
      'sp, with the remaining two unhybridised p orbitals forming two pi bonds',
      'sp³d'
    ],
    correctIndex: 2,
    explanation: 'Each carbon in acetylene is sp hybridized (forming the C-C and C-H sigma bonds and having linear geometry), with the two unhybridised p orbitals on each carbon forming two mutually perpendicular pi bonds, completing the triple bond.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-52',
    type: 'mcq',
    question: 'In ethylene (C2H4), each carbon atom is sp² hybridized, and the carbon-carbon double bond consists of:',
    options: [
      'Two sigma bonds only',
      'One sigma bond (from sp²-sp² overlap) and one pi bond (from sideways overlap of unhybridised p orbitals)',
      'Two pi bonds only',
      'No bonds at all between the carbons'
    ],
    correctIndex: 1,
    explanation: 'The C=C double bond in ethylene consists of one strong sigma bond (from direct sp²-sp² orbital overlap) and one weaker pi bond (from lateral overlap of the remaining unhybridised p orbitals on each carbon).',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-53',
    type: 'mcq',
    question: 'According to Molecular Orbital Theory (MOT), atomic orbitals of comparable energy combine through a process called:',
    options: [
      'Complete electron transfer',
      'Linear Combination of Atomic Orbitals (LCAO), forming molecular orbitals that belong to the molecule as a whole',
      'Hybridization only',
      'Ionic bonding only'
    ],
    correctIndex: 1,
    explanation: 'MOT states that atomic orbitals combine using the Linear Combination of Atomic Orbitals (LCAO) method to produce molecular orbitals, which are associated with the molecule as a whole, not individual atoms.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-54',
    type: 'mcq',
    question: 'In MOT, when two atomic orbitals combine constructively (in-phase), they form a:',
    options: [
      'Antibonding molecular orbital, higher in energy than the parent atomic orbitals',
      'Bonding molecular orbital, lower in energy than the parent atomic orbitals',
      'Non-bonding orbital with the same energy as the parent atomic orbitals',
      'Hybrid orbital'
    ],
    correctIndex: 1,
    explanation: 'Constructive (in-phase) combination of atomic orbitals produces a bonding molecular orbital, which is lower in energy than the original atomic orbitals and increases electron density between the nuclei.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-55',
    type: 'mcq',
    question: 'In MOT, when two atomic orbitals combine destructively (out-of-phase), they form a:',
    options: [
      'Bonding molecular orbital',
      'Antibonding molecular orbital, higher in energy than the parent atomic orbitals, often denoted with an asterisk (*)',
      'Hybrid orbital',
      'A molecular orbital identical in energy to the atomic orbitals'
    ],
    correctIndex: 1,
    explanation: 'Destructive (out-of-phase) combination of atomic orbitals produces an antibonding molecular orbital (denoted with an asterisk, e.g., σ*), which is higher in energy and decreases electron density between the nuclei.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-56',
    type: 'mcq',
    question: 'Electrons are filled into molecular orbitals following the same general principles used for atomic orbitals, namely:',
    options: [
      'Only the Pauli exclusion principle, with no other rules',
      'The Aufbau principle, Pauli exclusion principle, and Hund\'s rule',
      'No definite rules; electrons fill randomly',
      'Only Hund\'s rule'
    ],
    correctIndex: 1,
    explanation: 'Filling of molecular orbitals with electrons follows the same three principles used for atomic orbitals: the Aufbau principle (lowest energy orbitals filled first), the Pauli exclusion principle, and Hund\'s rule (for degenerate orbitals).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-57',
    type: 'mcq',
    question: 'In Molecular Orbital Theory, bond order is calculated using the formula:',
    options: [
      'Bond order = Nb + Na',
      'Bond order = (1/2)(Nb − Na), where Nb and Na are the numbers of electrons in bonding and antibonding molecular orbitals respectively',
      'Bond order = Nb − Na (without dividing by 2)',
      'Bond order = Na − Nb'
    ],
    correctIndex: 1,
    explanation: 'Bond order in MOT is calculated as half the difference between the number of electrons in bonding orbitals (Nb) and antibonding orbitals (Na): Bond order = (1/2)(Nb − Na).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-58',
    type: 'mcq',
    question: 'If the calculated bond order of a hypothetical diatomic species is found to be zero or negative, this indicates that the molecule/species:',
    options: [
      'Is extremely stable',
      'Does not exist, or is highly unstable, since there is no net bonding',
      'Has a very short bond length',
      'Is definitely paramagnetic'
    ],
    correctIndex: 1,
    explanation: 'A bond order of zero (or negative) means there is no net stabilisation from bonding electrons over antibonding electrons, predicting that such a molecule does not exist or is extremely unstable, as in the case of He2.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-59',
    type: 'mcq',
    question: 'One of the celebrated successes of Molecular Orbital Theory, which the simple Lewis/valence bond approach could not explain, is:',
    options: [
      'The tetrahedral shape of methane',
      'The paramagnetic nature of the oxygen molecule (O2), due to the presence of two unpaired electrons in its antibonding π* orbitals',
      'The linear shape of carbon dioxide',
      'The high boiling point of water'
    ],
    correctIndex: 1,
    explanation: 'Molecular Orbital Theory correctly predicts that O2 has two unpaired electrons in its degenerate π*2p antibonding orbitals, explaining its observed paramagnetism, a fact that simple Lewis structures fail to account for.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-60',
    type: 'mcq',
    question: 'A molecule or species in which all electrons in the molecular orbitals are paired is described as:',
    options: [
      'Paramagnetic',
      'Diamagnetic',
      'Radioactive',
      'Ionic'
    ],
    correctIndex: 1,
    explanation: 'A species with all electrons paired in its molecular orbitals (like N2, with bond order 3) is diamagnetic, showing no net magnetic attraction due to unpaired electron spins.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-61',
    type: 'mcq',
    question: 'A molecule or species that contains one or more unpaired electrons in its molecular orbitals is described as:',
    options: [
      'Diamagnetic',
      'Paramagnetic, and is weakly attracted by an external magnetic field',
      'Non-magnetic',
      'Always unstable'
    ],
    correctIndex: 1,
    explanation: 'A species with one or more unpaired electrons in its molecular orbitals is paramagnetic, meaning it is weakly attracted into an external magnetic field.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-62',
    type: 'mcq',
    question: 'For homonuclear diatomic molecules of the second period up to and including nitrogen (Li2 to N2), the molecular orbital energy order shows a reversal, such that:',
    options: [
      'The σ2pz orbital is lower in energy than the π2px and π2py orbitals',
      'The π2px and π2py orbitals are lower in energy than the σ2pz orbital, due to s-p mixing effects',
      'Only s orbitals participate in bonding',
      'There is no difference in molecular orbital ordering across the second period'
    ],
    correctIndex: 1,
    explanation: 'Due to s-p orbital mixing, for lighter second-period diatomics (Li2 through N2), the degenerate π2p (bonding) orbitals lie lower in energy than the σ2pz orbital, a reversal compared to heavier diatomics like O2 and F2.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-63',
    type: 'mcq',
    question: 'For O2 and F2 (and heavier homonuclear diatomics), the molecular orbital energy order follows the more "standard" sequence in which:',
    options: [
      'The σ2pz orbital lies lower in energy than the π2px and π2py bonding orbitals',
      'The π2px and π2py orbitals always lie lower than σ2pz, without exception',
      's-p mixing is very significant',
      'No sigma bonds are formed at all'
    ],
    correctIndex: 0,
    explanation: 'For O2, F2, and heavier diatomics, s-p mixing effects are much less significant, so the σ2pz bonding orbital lies lower in energy than the degenerate π2p bonding orbitals, unlike the earlier second-period elements.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-64',
    type: 'mcq',
    question: 'The bond order of the nitrogen molecule (N2), calculated using Molecular Orbital Theory, is:',
    options: [
      '1',
      '2',
      '3, consistent with its known triple bond and very high bond dissociation energy',
      '0'
    ],
    correctIndex: 2,
    explanation: 'Using MOT, N2 has a bond order of 3, consistent with the triple bond depicted in its Lewis structure and its exceptionally high bond dissociation energy.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-65',
    type: 'mcq',
    question: 'The bond order of the oxygen molecule (O2), calculated using Molecular Orbital Theory, is:',
    options: [
      '1',
      '1.5',
      '2, consistent with its double bond',
      '3'
    ],
    correctIndex: 2,
    explanation: 'MOT calculations for O2 give a bond order of 2, consistent with the double bond typically shown in its Lewis structure, while also correctly predicting its paramagnetism.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-66',
    type: 'mcq',
    question: 'Hydrogen bonding is best described as a special, relatively strong type of intermolecular attraction that occurs between:',
    options: [
      'Any two hydrogen atoms in a molecule',
      'A hydrogen atom covalently bonded to a highly electronegative atom (like F, O, or N) and a lone pair on an electronegative atom of a neighbouring molecule',
      'Two non-polar molecules only',
      'A metal atom and a non-metal atom'
    ],
    correctIndex: 1,
    explanation: 'Hydrogen bonding arises when a hydrogen atom bonded to a highly electronegative atom (F, O, or N) is attracted to a lone pair of electrons on an electronegative atom of a neighbouring molecule.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-67',
    type: 'mcq',
    question: 'Hydrogen bonding occurring between two different molecules (e.g., between adjacent water molecules) is termed:',
    options: [
      'Intramolecular hydrogen bonding',
      'Intermolecular hydrogen bonding',
      'Covalent bonding',
      'Metallic bonding'
    ],
    correctIndex: 1,
    explanation: 'Hydrogen bonding that occurs between two separate molecules (like in water or HF) is called intermolecular hydrogen bonding.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-68',
    type: 'mcq',
    question: 'Hydrogen bonding occurring within a single molecule, between two suitably positioned atoms in the same molecule (e.g., in ortho-nitrophenol), is termed:',
    options: [
      'Intermolecular hydrogen bonding',
      'Intramolecular hydrogen bonding',
      'Ionic bonding',
      'A coordinate bond'
    ],
    correctIndex: 1,
    explanation: 'When hydrogen bonding occurs within a single molecule between two atoms of the same molecule (as in ortho-nitrophenol), it is called intramolecular hydrogen bonding.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-69',
    type: 'mcq',
    question: 'The unusually high boiling points of water, ammonia, and hydrogen fluoride (compared to other hydrides in their respective groups) are primarily attributed to:',
    options: [
      'Their small molecular size alone',
      'Extensive intermolecular hydrogen bonding, requiring additional energy to break before vaporisation can occur',
      'The presence of ionic bonds within these molecules',
      'Their high molecular mass'
    ],
    correctIndex: 1,
    explanation: 'The extensive hydrogen bonding network present in water, ammonia, and HF requires additional energy to disrupt during vaporisation, resulting in unusually elevated boiling points compared to expected trends.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-70',
    type: 'mcq',
    question: 'Intramolecular hydrogen bonding (as seen in ortho-nitrophenol), compared to intermolecular hydrogen bonding (as in the para isomer), typically results in:',
    options: [
      'A higher boiling point, due to increased hydrogen bonding between molecules',
      'A lower boiling point, since the hydrogen bond is "used up" within the same molecule, reducing association between separate molecules',
      'No difference in boiling point at all',
      'Complete absence of any hydrogen bonding'
    ],
    correctIndex: 1,
    explanation: 'Since intramolecular hydrogen bonding occurs within a single molecule (as in ortho-nitrophenol), it reduces the extent of intermolecular association compared to compounds capable of intermolecular hydrogen bonding (like the para isomer), leading to a comparatively lower boiling point.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-71',
    type: 'mcq',
    question: 'Which of the following is generally considered a covalent character-favouring factor for what would otherwise be classified as an ionic bond, according to Fajans\' rules?',
    options: [
      'Large size of the cation and small charge on the ions',
      'Small size of the cation, large size of the anion, and high charge on the ions',
      'Both ions having very large radii',
      'Both ions having exactly equal size'
    ],
    correctIndex: 1,
    explanation: 'According to Fajans\' rules, covalent character in an ionic compound is favoured by a small cation, a large anion, and a high charge on either ion, since these conditions increase the polarising power of the cation and the polarisability of the anion.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-72',
    type: 'mcq',
    question: 'The concept of a "coordinate" or "dative" covalent bond refers to a bond in which:',
    options: [
      'Both bonding electrons are contributed equally by each atom',
      'Both electrons of the shared pair are contributed by only one of the two bonded atoms',
      'No electrons are shared at all',
      'Electrons are completely transferred from one atom to the other'
    ],
    correctIndex: 1,
    explanation: 'A coordinate (dative) covalent bond is a special type of covalent bond in which the shared pair of electrons is donated entirely by one atom (the donor), while the other atom (the acceptor) contributes none.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-73',
    type: 'mcq',
    question: 'The formation of the ammonium ion (NH4⁺) from ammonia (NH3) and a hydrogen ion (H⁺) involves the formation of a:',
    options: [
      'Purely ionic bond',
      'Coordinate (dative) covalent bond, where nitrogen\'s lone pair is donated to the empty orbital of H⁺',
      'Metallic bond',
      'Hydrogen bond only'
    ],
    correctIndex: 1,
    explanation: 'In forming NH4⁺, the lone pair of electrons on the nitrogen atom of NH3 is donated to the empty 1s orbital of H⁺, forming a coordinate (dative) covalent bond.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-74',
    type: 'mcq',
    question: 'The lone pair-bond pair repulsion in NH3, compared to bond pair-bond pair repulsion, is generally:',
    options: [
      'Weaker, since lone pairs occupy less space',
      'Stronger, since a lone pair is held closer to the central atom and occupies more space than a bonding pair, causing greater angular compression',
      'Exactly equal in magnitude',
      'Non-existent, since lone pairs do not cause repulsion'
    ],
    correctIndex: 1,
    explanation: 'Since a lone pair is attracted by only one nucleus (unlike a bonding pair, shared between two nuclei), it occupies more space near the central atom, leading to stronger lone pair-bond pair repulsion than bond pair-bond pair repulsion, compressing the H-N-H angle in NH3.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-75',
    type: 'mcq',
    question: 'Assertion: The bond angle in water (approximately 104.5°) is smaller than the bond angle in ammonia (approximately 107°).\nReason: Water has two lone pairs on the central oxygen atom, causing greater lone pair-lone pair and lone pair-bond pair repulsion than the single lone pair present in ammonia.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Water\'s two lone pairs cause significantly greater repulsion than ammonia\'s single lone pair, compressing water\'s bond angle further below the ideal tetrahedral angle than ammonia\'s, correctly explaining the observed difference.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-76',
    type: 'mcq',
    question: 'Assertion: The oxygen molecule (O2) is paramagnetic.\nReason: According to Molecular Orbital Theory, O2 has two unpaired electrons occupying its degenerate antibonding π* molecular orbitals.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The paramagnetism of O2 is a direct consequence of the two unpaired electrons that MOT correctly predicts in its π*2p antibonding molecular orbitals, correctly explaining the assertion.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-77',
    type: 'mcq',
    question: 'Assertion: Carbon dioxide (CO2) is a non-polar molecule overall, despite having polar C=O bonds.\nReason: CO2 has a linear molecular geometry, causing the two equal and opposite bond dipole moments to cancel out completely.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since CO2 is linear with two identical, oppositely oriented polar C=O bonds, their individual dipole moments cancel exactly, making the overall molecule non-polar, correctly explained by the reason.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-bonding-and-molecular-structure-78',
    type: 'mcq',
    question: 'Which of the following best summarises a key advantage of Molecular Orbital Theory (MOT) over the simple Valence Bond Theory (VBT)/Lewis approach?',
    options: [
      'MOT cannot explain any bonding at all, unlike VBT',
      'MOT can successfully predict magnetic properties (paramagnetism/diamagnetism) of molecules by accounting for unpaired electrons in molecular orbitals, which simple Lewis structures often cannot explain',
      'MOT and VBT always give identical, indistinguishable predictions for every molecule',
      'MOT applies only to ionic compounds, unlike VBT'
    ],
    correctIndex: 1,
    explanation: 'A key strength of MOT is its ability to correctly predict magnetic behaviour (such as the paramagnetism of O2) by considering the actual distribution of electrons among bonding and antibonding molecular orbitals, a nuance that simple Lewis/VBT approaches often fail to capture.',
    difficulty: 'medium'
  }
];

export default questions;
