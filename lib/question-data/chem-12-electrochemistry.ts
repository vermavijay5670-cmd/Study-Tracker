import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  // ==================== MCQ (70) ====================
  {
    id: 'electrochem-1',
    type: 'mcq',
    question: 'A galvanic (voltaic) cell is a device that converts',
    options: [
      'electrical energy into chemical energy',
      'chemical energy into electrical energy, using a spontaneous redox reaction',
      'mechanical energy into chemical energy',
      'thermal energy into electrical energy directly, without any chemical reaction'
    ],
    correctIndex: 1,
    explanation: 'A galvanic cell harnesses a spontaneous redox reaction to generate electrical energy, converting chemical energy into electrical energy.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-2',
    type: 'mcq',
    question: 'An electrolytic cell is a device that converts',
    options: [
      'chemical energy into electrical energy spontaneously',
      'electrical energy into chemical energy, driving a non-spontaneous redox reaction',
      'heat energy into mechanical energy',
      'light energy into electrical energy'
    ],
    correctIndex: 1,
    explanation: 'An electrolytic cell uses an external source of electrical energy to force a non-spontaneous redox reaction to occur, converting electrical energy into chemical energy.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-3',
    type: 'mcq',
    question: 'In a galvanic cell, oxidation occurs at the',
    options: ['cathode', 'anode', 'salt bridge', 'external wire'],
    correctIndex: 1,
    explanation: 'By convention, oxidation always occurs at the anode, whether the cell is galvanic or electrolytic.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-4',
    type: 'mcq',
    question: 'In a galvanic cell, reduction occurs at the',
    options: ['anode', 'cathode', 'salt bridge', 'voltmeter'],
    correctIndex: 1,
    explanation: 'By convention, reduction always occurs at the cathode, whether the cell is galvanic or electrolytic.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-5',
    type: 'mcq',
    question: 'In a galvanic cell, the anode is the',
    options: ['positive electrode', 'negative electrode', 'electrode with no charge', 'electrode connected directly to the salt bridge only'],
    correctIndex: 1,
    explanation: 'In a galvanic cell, since electrons are released at the anode and flow out into the external circuit, the anode is designated the negative electrode.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-6',
    type: 'mcq',
    question: 'In a galvanic cell, the cathode is the',
    options: ['negative electrode', 'positive electrode', 'electrode where oxidation occurs', 'electrode that always loses mass'],
    correctIndex: 1,
    explanation: 'In a galvanic cell, electrons flow into the cathode from the external circuit and are consumed in reduction, making the cathode the positive electrode.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-7',
    type: 'mcq',
    question: 'In an electrolytic cell, unlike in a galvanic cell, the polarity convention is such that the',
    options: [
      'anode is negative and cathode is positive, same as a galvanic cell',
      'anode is positive and cathode is negative',
      'both electrodes are always neutral',
      'cathode is where oxidation occurs'
    ],
    correctIndex: 1,
    explanation: 'In an electrolytic cell, the external battery forces electrons into the cathode (making it negative) and pulls them from the anode (making it positive) — opposite polarity to a galvanic cell, even though oxidation still occurs at the anode and reduction still at the cathode.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-8',
    type: 'mcq',
    question: 'The primary function of the salt bridge in a galvanic cell is to',
    options: [
      'increase the concentration of the electrolyte solutions',
      'maintain electrical neutrality in both half-cells by allowing ion flow, and minimise the liquid junction potential',
      'act as an external resistor to control current flow',
      'supply electrons directly to the cathode'
    ],
    correctIndex: 1,
    explanation: 'The salt bridge completes the internal circuit by allowing ions to migrate between the two half-cells, maintaining electrical neutrality as the reaction proceeds, while also minimising the liquid junction potential.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-9',
    type: 'mcq',
    question: 'In the standard cell notation for a Daniell cell, Zn(s) | ZnSO4(aq) || CuSO4(aq) | Cu(s), the double vertical line (||) represents the',
    options: ['electrolyte concentration', 'salt bridge', 'external wire connection', 'phase boundary between solid electrode and solution'],
    correctIndex: 1,
    explanation: 'In standard cell notation, a double line indicates the salt bridge connecting the two half-cells; a single line represents a phase boundary.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-10',
    type: 'mcq',
    question: 'By convention, in writing a galvanic cell using standard notation, the anode is written on the',
    options: ['right side', 'left side', 'top', 'it does not matter which side'],
    correctIndex: 1,
    explanation: 'The standard convention places the anode (where oxidation occurs) on the left and the cathode (where reduction occurs) on the right.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-11',
    type: 'mcq',
    question: 'In the Daniell cell, the overall spontaneous cell reaction is',
    options: [
      'Cu(s) + Zn2+(aq) → Cu2+(aq) + Zn(s)',
      'Zn(s) + Cu2+(aq) → Zn2+(aq) + Cu(s)',
      'Zn(s) + Cu(s) → ZnCu(s)',
      'no net reaction occurs in a Daniell cell'
    ],
    correctIndex: 1,
    explanation: 'In the Daniell cell, zinc metal is oxidised to Zn2+ while Cu2+ ions are reduced to copper metal, giving the spontaneous overall reaction Zn(s) + Cu2+(aq) → Zn2+(aq) + Cu(s).',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-12',
    type: 'mcq',
    question: 'Electrons flow through the external circuit of a galvanic cell from the',
    options: ['cathode to the anode', 'anode to the cathode', 'salt bridge to the anode', 'salt bridge to the cathode'],
    correctIndex: 1,
    explanation: 'Since oxidation releases electrons at the anode, electrons flow through the external wire from the anode to the cathode, where they are consumed in reduction.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-13',
    type: 'mcq',
    question: 'The electromotive force (EMF) of a cell is measured experimentally using a',
    options: ['simple ammeter', 'potentiometer, under conditions of zero or negligible current flow', 'thermometer', 'ordinary voltmeter that draws large current'],
    correctIndex: 1,
    explanation: 'EMF is measured using a potentiometer, which balances the cell voltage against a reference voltage under conditions where negligible current is drawn, giving the true equilibrium potential.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-14',
    type: 'mcq',
    question: 'The standard hydrogen electrode (SHE) is assigned a standard reduction potential of',
    options: ['+1.00 V', '0.00 V, by convention', '-1.00 V', 'a value that depends on the metal used in the other half-cell'],
    correctIndex: 1,
    explanation: 'By international convention, the standard hydrogen electrode is assigned a standard reduction potential of exactly 0.00 V at all temperatures, serving as the universal reference electrode.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-15',
    type: 'mcq',
    question: 'The standard electrode potential of any half-cell is measured by connecting it to a',
    options: ['second identical half-cell', 'standard hydrogen electrode, forming a complete cell', 'battery of known voltage only', 'resistor of known resistance'],
    correctIndex: 1,
    explanation: 'Standard electrode potentials are determined by pairing the half-cell of interest with the standard hydrogen electrode and measuring the resulting cell EMF under standard conditions.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-16',
    type: 'mcq',
    question: 'The EMF of a galvanic cell (Ecell) is related to the electrode potentials of the two half-cells by',
    options: [
      'Ecell = Eanode - Ecathode',
      'Ecell = Ecathode - Eanode, using reduction potentials for both',
      'Ecell = Eanode + Ecathode',
      'Ecell is unrelated to the individual electrode potentials'
    ],
    correctIndex: 1,
    explanation: 'The cell EMF is calculated as the reduction potential of the cathode minus the reduction potential of the anode: Ecell = Ecathode - Eanode.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-17',
    type: 'mcq',
    question: 'A positive value of the standard cell potential (E°cell) indicates that the cell reaction, as written, is',
    options: ['non-spontaneous', 'spontaneous, with a negative Gibbs free energy change', 'at equilibrium', 'independent of thermodynamics'],
    correctIndex: 1,
    explanation: 'A positive E°cell corresponds to a negative ΔG° (since ΔG° = -nFE°cell), indicating that the cell reaction, as written, proceeds spontaneously.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-18',
    type: 'mcq',
    question: 'The relationship between the standard Gibbs energy change and the standard cell potential of a redox reaction is given by',
    options: ['ΔG° = nFE°cell', 'ΔG° = -nFE°cell', 'ΔG° = FE°cell / n', 'ΔG° = -nF / E°cell'],
    correctIndex: 1,
    explanation: 'The thermodynamic relation connecting Gibbs free energy change and cell potential is ΔG° = -nFE°cell, where n is the number of moles of electrons transferred and F is the Faraday constant.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-19',
    type: 'mcq',
    question: 'The Nernst equation relates the cell potential under non-standard conditions to the standard cell potential and the',
    options: [
      'temperature and reaction quotient (Q) of the cell reaction',
      'mass of the electrodes used',
      'colour of the electrolyte solution',
      'size of the salt bridge'
    ],
    correctIndex: 0,
    explanation: 'The Nernst equation, Ecell = E°cell - (RT/nF) ln Q, expresses how the actual cell potential depends on temperature and the reaction quotient Q, which reflects the current concentrations of reactants and products.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-20',
    type: 'mcq',
    question: 'The Nernst equation at 298 K, in terms of base-10 logarithm, is commonly written as',
    options: [
      'Ecell = E°cell - (0.0591/n) log Q',
      'Ecell = E°cell + (0.0591/n) log Q',
      'Ecell = E°cell - (0.0591 × n) log Q',
      'Ecell = E°cell / (0.0591 × n) log Q'
    ],
    correctIndex: 0,
    explanation: 'Converting the natural logarithm form to base-10 and substituting T = 298 K gives the widely used form Ecell = E°cell - (0.0591/n) log Q.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-21',
    type: 'mcq',
    question: 'According to the Nernst equation, as a galvanic cell operates and reactants are converted to products, the cell potential generally',
    options: [
      'remains exactly constant throughout',
      'decreases progressively, approaching zero as the reaction approaches equilibrium',
      'increases progressively without limit',
      'becomes negative immediately and stays negative'
    ],
    correctIndex: 1,
    explanation: 'As the reaction proceeds, the reaction quotient Q changes, and the cell potential decreases according to the Nernst equation, eventually reaching zero when the system reaches equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-22',
    type: 'mcq',
    question: 'At electrochemical equilibrium, the cell potential (Ecell) of a galvanic cell becomes',
    options: ['maximum', 'zero, and the reaction quotient Q equals the equilibrium constant K', 'equal to E°cell', 'undefined'],
    correctIndex: 1,
    explanation: 'At equilibrium, no net reaction occurs, so Ecell = 0, and at this point Q equals the equilibrium constant K of the cell reaction.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-23',
    type: 'mcq',
    question: 'The relationship between the standard cell potential and the equilibrium constant of the cell reaction is given by',
    options: [
      'E°cell = (RT/nF) ln K',
      'E°cell = -nF ln K',
      'E°cell = nF / (RT ln K)',
      'E°cell is unrelated to the equilibrium constant'
    ],
    correctIndex: 0,
    explanation: 'Combining ΔG° = -nFE°cell with ΔG° = -RT ln K gives E°cell = (RT/nF) ln K, linking the standard cell potential directly to the equilibrium constant of the reaction.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-24',
    type: 'mcq',
    question: 'Specific conductance (conductivity, κ) of an electrolytic solution is defined as the conductance of',
    options: [
      'the entire volume of solution in the cell, regardless of dimensions',
      'a solution enclosed between two electrodes of unit area of cross-section separated by unit length',
      'one mole of the electrolyte dissolved in the solution',
      'pure solvent alone, without any electrolyte'
    ],
    correctIndex: 1,
    explanation: 'Conductivity (κ) is defined as the conductance of a solution contained between electrodes of unit area separated by unit distance, making it a property intrinsic to the material.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-25',
    type: 'mcq',
    question: 'Molar conductivity (Λm) of an electrolytic solution is related to its conductivity (κ) and molar concentration (c) by',
    options: ['Λm = κ × c', 'Λm = κ / c', 'Λm = c / κ', 'Λm = κ + c'],
    correctIndex: 1,
    explanation: 'Molar conductivity is defined as Λm = κ/c, representing the conducting power of all the ions produced by dissolving one mole of electrolyte.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-26',
    type: 'mcq',
    question: 'As an electrolyte solution is progressively diluted, the conductivity (κ) of the solution generally',
    options: [
      'increases, because more ions are generated',
      'decreases, because the number of ions per unit volume decreases',
      'remains completely unchanged',
      'becomes undefined at low concentration'
    ],
    correctIndex: 1,
    explanation: 'Conductivity depends on the number of ions present per unit volume; as the solution is diluted, this number decreases, so conductivity decreases.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-27',
    type: 'mcq',
    question: 'As an electrolyte solution is progressively diluted, the molar conductivity (Λm) generally',
    options: [
      'decreases continuously',
      'increases, since it accounts for the total conducting power of one mole of the electrolyte, unaffected by the drop in ion density',
      'remains constant for both strong and weak electrolytes',
      'becomes zero at infinite dilution'
    ],
    correctIndex: 1,
    explanation: 'Molar conductivity increases with dilution because it is normalised per mole of electrolyte; for weak electrolytes this rise reflects increased dissociation, while for strong electrolytes it reflects reduced interionic interactions.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-28',
    type: 'mcq',
    question: 'For strong electrolytes, molar conductivity (Λm) plotted against the square root of concentration (√c) gives approximately a',
    options: ['sharply rising curve near c = 0', 'straight line, which can be extrapolated to c = 0 to find Λm°', 'horizontal line at all concentrations', 'random scattering of points'],
    correctIndex: 1,
    explanation: 'For strong electrolytes, the Λm vs √c plot is nearly linear (as described by the Debye-Hückel-Onsager equation), allowing extrapolation to zero concentration to determine the limiting molar conductivity, Λm°.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-29',
    type: 'mcq',
    question: 'For weak electrolytes, the value of Λm° (limiting molar conductivity at infinite dilution) generally cannot be obtained by simple extrapolation of the Λm vs √c plot because',
    options: [
      'weak electrolytes do not conduct electricity at all',
      'Λm rises very steeply at low concentrations, so the plot does not extrapolate reliably to c = 0',
      'weak electrolytes have no ions in solution',
      'Λm decreases sharply near c = 0 for weak electrolytes'
    ],
    correctIndex: 1,
    explanation: 'For weak electrolytes, molar conductivity increases very sharply as concentration approaches zero (due to increasing dissociation), making a reliable graphical extrapolation to Λm° impractical.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-30',
    type: 'mcq',
    question: 'Kohlrausch\'s law of independent migration of ions states that at infinite dilution, each ion contributes a definite value to the molar conductivity of an electrolyte, and this contribution is',
    options: [
      'dependent on the identity of the other ion present in the electrolyte',
      'independent of the nature of the other ion with which it is associated',
      'always equal for cations and anions',
      'only applicable to weak electrolytes'
    ],
    correctIndex: 1,
    explanation: 'Kohlrausch\'s law states that at infinite dilution, each ion migrates independently and contributes a fixed value to molar conductivity, regardless of the identity of the counter-ion.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-31',
    type: 'mcq',
    question: 'According to Kohlrausch\'s law, the limiting molar conductivity of an electrolyte, Λm°, can be expressed as',
    options: [
      'Λm° = ν+λ°+ - ν-λ°-',
      'Λm° = ν+λ°+ + ν-λ°-, where ν+ and ν- are the number of cations and anions per formula unit',
      'Λm° = ν+ × ν- × λ°+ × λ°-',
      'Λm° = λ°+ / λ°-'
    ],
    correctIndex: 1,
    explanation: 'Kohlrausch\'s law expresses the limiting molar conductivity of an electrolyte as the sum of the contributions of its constituent ions, weighted by their stoichiometric numbers in the formula unit.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-32',
    type: 'mcq',
    question: 'Kohlrausch\'s law is particularly useful for determining the limiting molar conductivity (Λm°) of',
    options: [
      'strong electrolytes only, since weak electrolytes cannot be measured at all',
      'weak electrolytes, using known Λm° values of related strong electrolytes',
      'pure solvents with no dissolved electrolyte',
      'gaseous mixtures'
    ],
    correctIndex: 1,
    explanation: 'Since Λm° for weak electrolytes cannot be found by direct extrapolation, Kohlrausch\'s law allows it to be calculated indirectly by combining the known Λm° values of strong electrolytes that share common ions.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-33',
    type: 'mcq',
    question: 'The degree of dissociation (α) of a weak electrolyte at a given concentration can be estimated using',
    options: [
      'α = Λm° / Λcm, where Λcm is the molar conductivity at that concentration',
      'α = Λcm / Λm°, the ratio of molar conductivity at concentration c to the limiting molar conductivity',
      'α = Λcm × Λm°',
      'α is unrelated to molar conductivity'
    ],
    correctIndex: 1,
    explanation: 'The degree of dissociation of a weak electrolyte at concentration c is estimated as the ratio of its molar conductivity at that concentration to its limiting molar conductivity: α = Λcm / Λm°.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-34',
    type: 'mcq',
    question: 'Faraday\'s first law of electrolysis states that the mass of a substance deposited or liberated at an electrode is',
    options: [
      'independent of the quantity of electricity passed',
      'directly proportional to the quantity of electricity (charge) passed through the electrolyte',
      'inversely proportional to the quantity of electricity passed',
      'proportional only to the time of electrolysis, regardless of current'
    ],
    correctIndex: 1,
    explanation: 'Faraday\'s first law states m ∝ Q, i.e. the mass of substance deposited/liberated is directly proportional to the total quantity of charge (Q = It) passed through the electrolyte.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-35',
    type: 'mcq',
    question: 'Faraday\'s second law of electrolysis states that when the same quantity of electricity is passed through different electrolytes connected in series, the masses of substances deposited are',
    options: [
      'all exactly equal, regardless of the substance',
      'proportional to their chemical equivalent weights',
      'inversely proportional to their molar masses',
      'unrelated to the substances involved'
    ],
    correctIndex: 1,
    explanation: 'Faraday\'s second law states that for the same quantity of charge, the masses of different substances liberated at electrodes are proportional to their respective equivalent weights.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-36',
    type: 'mcq',
    question: 'One Faraday of electricity corresponds to the charge carried by',
    options: [
      'one electron',
      'one mole of electrons, approximately 96500 coulombs',
      'one mole of protons only',
      'one coulomb of charge'
    ],
    correctIndex: 1,
    explanation: 'One Faraday (F) is defined as the charge carried by one mole of electrons, with a value of approximately 96500 C/mol.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-37',
    type: 'mcq',
    question: 'During the electrolysis of dilute aqueous sodium chloride solution using inert electrodes, at the cathode, the species preferentially reduced is generally',
    options: [
      'Na+ ions, giving sodium metal',
      'water molecules, giving hydrogen gas and hydroxide ions, since the reduction potential of water is more favourable than that of Na+',
      'Cl- ions',
      'no reduction occurs at the cathode'
    ],
    correctIndex: 1,
    explanation: 'Since the standard reduction potential of Na+/Na is much more negative than that of water, water is preferentially reduced at the cathode, liberating hydrogen gas and leaving hydroxide ions in solution.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-38',
    type: 'mcq',
    question: 'During the electrolysis of molten sodium chloride (with no water present), the products formed are',
    options: [
      'sodium metal at the cathode and chlorine gas at the anode',
      'hydrogen gas at the cathode and oxygen gas at the anode',
      'sodium hydroxide only',
      'no reaction occurs in the molten state'
    ],
    correctIndex: 0,
    explanation: 'With no water present to compete, molten NaCl is electrolysed directly, giving sodium metal deposited at the cathode (Na+ reduced) and chlorine gas liberated at the anode (Cl- oxidised).',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-39',
    type: 'mcq',
    question: 'A dry cell (Leclanché-type cell) is an example of a',
    options: [
      'secondary (rechargeable) cell',
      'primary (non-rechargeable) cell',
      'fuel cell',
      'concentration cell'
    ],
    correctIndex: 1,
    explanation: 'A dry cell is a primary cell — once its chemical reactants are consumed, the reaction cannot be reversed by recharging, so the cell must be discarded.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-40',
    type: 'mcq',
    question: 'In a common dry cell (Leclanché cell), the anode and cathode materials are, respectively,',
    options: [
      'zinc metal container and a graphite (carbon) rod surrounded by manganese dioxide',
      'lead and lead dioxide',
      'cadmium and nickel oxide',
      'platinum and hydrogen gas'
    ],
    correctIndex: 0,
    explanation: 'In a dry cell, the zinc container acts as the anode, and a central graphite rod surrounded by a paste of MnO2 and carbon acts as the cathode.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-41',
    type: 'mcq',
    question: 'A mercury cell (button cell), commonly used in hearing aids and watches, is notable for providing',
    options: [
      'a steadily increasing voltage over its lifetime',
      'a highly steady, constant voltage throughout its useful life',
      'a voltage that fluctuates unpredictably',
      'a voltage that depends heavily on the current drawn'
    ],
    correctIndex: 1,
    explanation: 'The mercury cell provides an unusually steady voltage because its overall cell reaction does not involve any ion in solution whose concentration changes appreciably during discharge.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-42',
    type: 'mcq',
    question: 'The lead storage battery, commonly used in automobiles, is an example of a',
    options: [
      'primary cell that cannot be recharged',
      'secondary cell that can be recharged by passing current in the reverse direction',
      'fuel cell',
      'reference electrode'
    ],
    correctIndex: 1,
    explanation: 'The lead storage battery is a secondary cell — the discharge reaction can be reversed by passing an external current through it in the opposite direction, recharging the battery.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-43',
    type: 'mcq',
    question: 'In a lead storage battery, the electrodes used are',
    options: [
      'spongy lead (Pb) as anode and lead dioxide (PbO2) as cathode, with dilute sulphuric acid as electrolyte',
      'zinc as anode and copper as cathode',
      'cadmium as anode and nickel oxide as cathode',
      'platinum electrodes with hydrogen gas'
    ],
    correctIndex: 0,
    explanation: 'The lead storage battery uses spongy lead as the anode and lead dioxide as the cathode, immersed in dilute sulphuric acid as the electrolyte.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-44',
    type: 'mcq',
    question: 'During discharge of a lead storage battery, both the lead anode and the lead dioxide cathode are converted to',
    options: ['pure lead metal', 'lead sulphate (PbSO4)', 'lead oxide (PbO)', 'lead chloride'],
    correctIndex: 1,
    explanation: 'During discharge, both electrode reactions produce lead sulphate (PbSO4), which deposits on the respective electrodes and is later reconverted during charging.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-45',
    type: 'mcq',
    question: 'The nickel-cadmium (Ni-Cd) cell, compared to the lead storage battery, has the advantage of',
    options: [
      'being much cheaper to manufacture',
      'having a longer life, though at a higher manufacturing cost',
      'not being rechargeable, which simplifies its design',
      'requiring no electrolyte at all'
    ],
    correctIndex: 1,
    explanation: 'The Ni-Cd cell offers a longer operational life than the lead storage battery, though this comes at the expense of a higher manufacturing cost.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-46',
    type: 'mcq',
    question: 'A fuel cell is a device that converts the energy of combustion of a fuel',
    options: [
      'first into heat, and then into electrical energy via a heat engine',
      'directly into electrical energy, without a separate combustion step',
      'into mechanical energy only',
      'into light energy'
    ],
    correctIndex: 1,
    explanation: 'Fuel cells convert the chemical energy of a fuel directly into electrical energy through controlled electrochemical oxidation, bypassing the inefficiencies of a separate combustion and heat-engine process.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-47',
    type: 'mcq',
    question: 'The hydrogen-oxygen fuel cell, famously used in the Apollo space programme, produces which by-product?',
    options: ['carbon dioxide', 'water, which made it especially valuable for use aboard spacecraft', 'sulphur dioxide', 'nitrogen oxides'],
    correctIndex: 1,
    explanation: 'The overall reaction in a hydrogen-oxygen fuel cell, 2H2 + O2 → 2H2O, produces water as its only by-product, which was additionally useful as drinking water for astronauts.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-48',
    type: 'mcq',
    question: 'A major advantage of fuel cells over conventional batteries is that fuel cells',
    options: [
      'require no maintenance and last forever with no fuel supply',
      'can operate continuously as long as reactants (fuel and oxidant) are continuously supplied, without needing to be recharged',
      'never produce any electrical current',
      'are always cheaper than any other type of cell'
    ],
    correctIndex: 1,
    explanation: 'Unlike batteries, fuel cells can generate electricity indefinitely as long as fuel and oxidant are continuously fed in, since the reactants are not stored internally but supplied externally.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-49',
    type: 'mcq',
    question: 'Corrosion of metals, such as the rusting of iron, is fundamentally an example of',
    options: [
      'a purely physical, non-chemical process',
      'an electrochemical phenomenon involving oxidation and reduction at different points on the metal surface',
      'a process that occurs only in the complete absence of water',
      'a nuclear reaction'
    ],
    correctIndex: 1,
    explanation: 'Corrosion involves the setting up of tiny galvanic cells on the metal surface, with oxidation of the metal at anodic regions and reduction of dissolved oxygen at cathodic regions — a purely electrochemical process.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-50',
    type: 'mcq',
    question: 'Rusting of iron requires the simultaneous presence of',
    options: [
      'only oxygen, with no water needed',
      'only water, with no oxygen needed',
      'both moisture (water) and oxygen',
      'neither water nor oxygen, only heat'
    ],
    correctIndex: 2,
    explanation: 'Rusting is an electrochemical process that requires both moisture and dissolved oxygen; in the complete absence of either, iron does not rust.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-51',
    type: 'mcq',
    question: 'In the mechanism of rusting, at the anodic region of the iron surface, the reaction occurring is',
    options: [
      'Fe(s) → Fe2+(aq) + 2e-, an oxidation',
      'O2 + 2H2O + 4e- → 4OH-, a reduction',
      'Fe2+ + 2OH- → Fe(OH)2, a precipitation only',
      'no reaction occurs at the anodic region'
    ],
    correctIndex: 0,
    explanation: 'At the anodic region of the corroding iron surface, iron metal is oxidised to Fe2+ ions, releasing electrons that migrate through the metal to the cathodic region.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-52',
    type: 'mcq',
    question: 'In the mechanism of rusting, at the cathodic region of the iron surface, dissolved oxygen is generally reduced according to',
    options: [
      'O2(g) + 4H+(aq) + 4e- → 2H2O(l)',
      'Fe(s) → Fe2+(aq) + 2e-',
      'Fe2+(aq) → Fe3+(aq) + e-',
      'H2O → H2 + 1/2 O2'
    ],
    correctIndex: 0,
    explanation: 'At the cathodic region, dissolved oxygen (aided by H+ from dissolved CO2 forming carbonic acid) is reduced to water, consuming the electrons released at the anodic region.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-53',
    type: 'mcq',
    question: 'The relationship between molar conductivity (Λm) and the molarity (c) of the electrolyte, along with conductivity (κ), is generally expressed with which unit conversion consideration?',
    options: [
      'Λm has units of S cm2 mol-1 (or S m2 mol-1), requiring c to be expressed consistently in mol per unit volume',
      'Λm has the same units as κ',
      'Λm is always dimensionless',
      'molarity has no role in this relationship'
    ],
    correctIndex: 0,
    explanation: 'Since Λm = κ/c, and κ has units of S/cm (or S/m), the concentration must be expressed in matching volume units (e.g., mol/cm³ or mol/m³) to give Λm consistent units of S cm² mol-1 or S m² mol-1.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-54',
    type: 'mcq',
    question: 'A strong electrolyte, when dissolved in water, is characterised by',
    options: [
      'partial dissociation into ions, reaching only a small degree of ionisation',
      'nearly complete dissociation into ions at all concentrations',
      'no dissociation into ions at all',
      'dissociation only when heated to boiling'
    ],
    correctIndex: 1,
    explanation: 'Strong electrolytes are almost completely dissociated into ions in aqueous solution, regardless of concentration, which is why their molar conductivity shows only a modest, near-linear increase with dilution.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-55',
    type: 'mcq',
    question: 'A weak electrolyte, when dissolved in water, is characterised by',
    options: [
      'complete dissociation into ions',
      'only partial dissociation into ions, with the degree of dissociation increasing on dilution',
      'no ionic conduction whatsoever',
      'a degree of dissociation that decreases on dilution'
    ],
    correctIndex: 1,
    explanation: 'Weak electrolytes dissociate only partially in solution, and their degree of dissociation increases as the solution is diluted, which explains the sharp rise in molar conductivity at low concentrations.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-56',
    type: 'mcq',
    question: 'Which of the following is an application of Kohlrausch\'s law?',
    options: [
      'Calculating the limiting molar conductivity of a weak electrolyte such as acetic acid from the limiting molar conductivities of related strong electrolytes',
      'Determining the melting point of an electrolyte',
      'Calculating the vapour pressure of a solution',
      'Determining the boiling point elevation of a solution'
    ],
    correctIndex: 0,
    explanation: 'Kohlrausch\'s law allows calculation of Λm° for a weak electrolyte like acetic acid using known Λm° values of strong electrolytes sharing common ions, such as HCl, CH3COONa, and NaCl.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-57',
    type: 'mcq',
    question: 'The overall electrode reaction at the anode of an electrolytic cell always involves',
    options: ['reduction', 'oxidation', 'neither oxidation nor reduction', 'precipitation only'],
    correctIndex: 1,
    explanation: 'Regardless of whether the cell is galvanic or electrolytic, oxidation always occurs at the anode by definition.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-58',
    type: 'mcq',
    question: 'A cell in which the two half-cells contain the same electrode material but different ionic concentrations, generating an EMF purely due to the concentration difference, is called a',
    options: ['fuel cell', 'concentration cell', 'primary cell', 'reference cell only'],
    correctIndex: 1,
    explanation: 'A concentration cell derives its EMF entirely from the difference in ionic concentration between two half-cells using the same electrode material, and its potential can be calculated using the Nernst equation.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-59',
    type: 'mcq',
    question: 'For a concentration cell to generate a non-zero EMF, the two half-cells must have',
    options: [
      'identical electrode materials and identical ion concentrations',
      'identical electrode materials but different ion concentrations',
      'different electrode materials but identical ion concentrations',
      'no electrolyte solution present at all'
    ],
    correctIndex: 1,
    explanation: 'A concentration cell is built from identical electrodes and ions, but with a concentration difference between the two half-cells; this difference is precisely what drives the spontaneous cell reaction and generates EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-60',
    type: 'mcq',
    question: 'The unit commonly used for conductivity (κ) of an electrolytic solution is',
    options: ['ohm (Ω)', 'siemens per metre (S/m) or siemens per centimetre (S/cm)', 'farad (F)', 'coulomb (C)'],
    correctIndex: 1,
    explanation: 'Conductivity is the reciprocal of resistivity, with SI units of siemens per metre (S/m); it is also commonly expressed in siemens per centimetre (S/cm).',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-61',
    type: 'mcq',
    question: 'The reciprocal of resistance is called',
    options: ['resistivity', 'conductance', 'capacitance', 'inductance'],
    correctIndex: 1,
    explanation: 'Conductance is defined as the reciprocal of resistance, expressed in units of siemens (S), previously called mho.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-62',
    type: 'mcq',
    question: 'The unit of electrical conductance (as opposed to conductivity) is',
    options: ['siemens (S)', 'siemens per metre (S/m)', 'ohm-metre', 'siemens metre squared per mole'],
    correctIndex: 0,
    explanation: 'Conductance, being the reciprocal of resistance (measured in ohms), has units of siemens (S), sometimes historically called mho.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-63',
    type: 'mcq',
    question: 'For the electrolysis of an aqueous CuSO4 solution using copper electrodes (electrorefining setup), the anode (impure copper) undergoes',
    options: [
      'reduction, gaining copper metal',
      'oxidation, dissolving as Cu2+ ions into solution',
      'no chemical change at all',
      'reduction to form hydrogen gas'
    ],
    correctIndex: 1,
    explanation: 'In electrorefining, the impure copper anode is oxidised, dissolving into the solution as Cu2+ ions, while pure copper is deposited by reduction at the cathode.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-64',
    type: 'mcq',
    question: 'The number of electrons transferred in a redox reaction, as used in the term "n" in the Nernst equation and in ΔG° = -nFE°cell, refers to the',
    options: [
      'total number of atoms in the balanced equation',
      'number of moles of electrons transferred per mole of reaction as balanced',
      'atomic number of the metal involved',
      'number of moles of electrolyte used'
    ],
    correctIndex: 1,
    explanation: 'The symbol n represents the number of moles of electrons transferred in the balanced overall redox reaction, a key quantity linking cell potential, Gibbs energy, and Faraday\'s constant.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-65',
    type: 'mcq',
    question: 'If the standard cell potential (E°cell) of a reaction is negative, the reaction as written is',
    options: [
      'spontaneous in the forward direction',
      'non-spontaneous in the forward direction, but the reverse reaction would be spontaneous',
      'at equilibrium',
      'unrelated to spontaneity'
    ],
    correctIndex: 1,
    explanation: 'A negative E°cell corresponds to a positive ΔG° (non-spontaneous forward reaction), but implies the reverse reaction, with a positive E°cell, would be spontaneous instead.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-66',
    type: 'mcq',
    question: 'A metal higher up in the standard reduction potential series (more negative reduction potential) compared to another metal will generally',
    options: [
      'be more easily reduced from its ions',
      'more readily displace the other metal from its salt solution, acting as a stronger reducing agent',
      'never react in any redox reaction',
      'always have a higher melting point'
    ],
    correctIndex: 1,
    explanation: 'Metals with more negative standard reduction potentials have a greater tendency to be oxidised (lose electrons), making them stronger reducing agents capable of displacing metals lower in the series from their salt solutions.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-67',
    type: 'mcq',
    question: 'Using Faraday\'s laws, if the same quantity of charge is passed through solutions of AgNO3 and CuSO4 connected in series, the ratio of masses of silver to copper deposited will equal the ratio of their',
    options: [
      'atomic numbers',
      'equivalent weights',
      'atomic radii',
      'melting points'
    ],
    correctIndex: 1,
    explanation: 'Faraday\'s second law states that for a given quantity of charge, the masses of substances deposited are proportional to their chemical equivalent weights.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-68',
    type: 'mcq',
    question: 'Which of the following best describes why a fuel cell is considered relatively pollution-free compared to conventional fossil-fuel combustion for electricity generation?',
    options: [
      'It produces no chemical products at all',
      'The main by-product of a hydrogen-oxygen fuel cell is water, without the harmful emissions typical of fuel combustion',
      'It does not require any fuel supply',
      'It operates only at extremely low temperatures'
    ],
    correctIndex: 1,
    explanation: 'Since the hydrogen-oxygen fuel cell reaction produces essentially only water as a by-product, it avoids the pollutant emissions associated with burning fossil fuels for electricity generation.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-69',
    type: 'mcq',
    question: 'Galvanisation, the process of coating iron with a layer of zinc to prevent rusting, works by',
    options: [
      'making the iron chemically inert',
      'providing zinc as a more easily oxidised (sacrificial) metal that corrodes preferentially, protecting the underlying iron',
      'preventing any water from ever touching the iron surface',
      'converting the iron entirely into zinc'
    ],
    correctIndex: 1,
    explanation: 'Since zinc is more easily oxidised than iron, it acts as a sacrificial anode, corroding first and protecting the iron underneath, even if the zinc coating is scratched.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-70',
    type: 'mcq',
    question: 'Overall, which statement correctly summarises the key thermodynamic and electrochemical relationships covered in this chapter?',
    options: [
      'ΔG° = -nFE°cell and E°cell = (RT/nF) ln K link cell potential to both Gibbs free energy and the equilibrium constant of the cell reaction',
      'Cell potential has no connection to Gibbs free energy or equilibrium constants',
      'Only the Nernst equation is relevant; ΔG° and K are unrelated concepts',
      'Faraday\'s laws and the Nernst equation describe the same phenomenon'
    ],
    correctIndex: 0,
    explanation: 'The chapter establishes a unified thermodynamic framework connecting cell potential, Gibbs free energy change, and equilibrium constant through ΔG° = -nFE°cell and E°cell = (RT/nF) ln K.',
    difficulty: 'hard'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'electrochem-71',
    type: 'assertion-reason',
    question: 'Assertion (A): In a galvanic cell, the anode is the negative electrode.\nReason (R): Oxidation occurs at the anode, releasing electrons that flow out into the external circuit from this electrode.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since electrons are generated at the anode by oxidation and flow outward, the anode accumulates a relative negative charge, directly explaining why it is designated negative in a galvanic cell.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-72',
    type: 'assertion-reason',
    question: 'Assertion (A): In an electrolytic cell, the anode is the positive electrode, unlike in a galvanic cell.\nReason (R): In an electrolytic cell, the external battery pulls electrons away from the anode, making it deficient in electrons and hence positively charged.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The external power source drives electrons away from the anode of an electrolytic cell towards the positive terminal of the battery, making the anode positively charged — correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-73',
    type: 'assertion-reason',
    question: 'Assertion (A): The salt bridge is essential for the continuous functioning of a galvanic cell.\nReason (R): Without the salt bridge, charge would build up in each half-cell, stopping the flow of current almost immediately.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The salt bridge maintains electrical neutrality by allowing ion migration between half-cells; without it, charge imbalance would quickly halt the cell reaction, correctly explaining why the salt bridge is essential.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-74',
    type: 'assertion-reason',
    question: 'Assertion (A): The standard hydrogen electrode is assigned a potential of exactly 0.00 V.\nReason (R): This value is not measured but is chosen by international convention as a fixed reference point against which all other standard electrode potentials are measured.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The conventional assignment described in R is precisely why the SHE has a fixed, universally agreed potential of 0.00 V, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-75',
    type: 'assertion-reason',
    question: 'Assertion (A): A positive value of E°cell indicates a spontaneous forward reaction.\nReason (R): A positive E°cell corresponds to a negative ΔG°, via the relation ΔG° = -nFE°cell, and a negative ΔG° indicates spontaneity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The direct mathematical relationship between E°cell and ΔG° means a positive E°cell always yields a negative ΔG°, correctly explaining why it indicates spontaneity.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-76',
    type: 'assertion-reason',
    question: 'Assertion (A): The cell potential of a galvanic cell decreases as the reaction proceeds towards equilibrium.\nReason (R): According to the Nernst equation, as products accumulate and reactants are consumed, the reaction quotient Q changes in a way that reduces the calculated cell potential.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The changing value of Q as reactants are converted to products, plugged into the Nernst equation, directly explains the gradual decrease in cell potential toward zero at equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-77',
    type: 'assertion-reason',
    question: 'Assertion (A): At equilibrium, the EMF of a galvanic cell becomes zero.\nReason (R): At equilibrium, the forward and reverse reaction rates become equal, and the reaction quotient Q becomes equal to the equilibrium constant K.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'When Q = K at equilibrium, the Nernst equation gives Ecell = 0 (since ln(Q/K) = 0 in the relevant rearranged form), correctly explaining why cell potential vanishes at equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-78',
    type: 'assertion-reason',
    question: 'Assertion (A): Molar conductivity increases with dilution for both strong and weak electrolytes.\nReason (R): For strong electrolytes, this increase is due to increased dissociation into ions upon dilution.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true. R is false as stated for strong electrolytes — strong electrolytes are already almost completely dissociated at all concentrations; the increase in their molar conductivity on dilution is due to decreased interionic attractions, not increased dissociation (which is the correct explanation for weak electrolytes instead).',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-79',
    type: 'assertion-reason',
    question: 'Assertion (A): The limiting molar conductivity (Λm°) of a weak electrolyte cannot be reliably obtained by extrapolating a Λm vs √c plot to zero concentration.\nReason (R): For weak electrolytes, Λm rises very sharply as concentration approaches zero, so the plot does not extrapolate accurately.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The sharp, non-linear rise near zero concentration for weak electrolytes is exactly why direct graphical extrapolation fails for them, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Kohlrausch\'s law allows the calculation of Λm° for a weak electrolyte using data from strong electrolytes.\nReason (R): At infinite dilution, each ion contributes a fixed, characteristic value to the total molar conductivity, independent of the other ion present, allowing values to be added and subtracted appropriately.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This principle of independent ionic contribution is precisely what enables combining and cancelling common-ion terms from strong electrolyte data to calculate Λm° for a weak electrolyte — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Faraday\'s first law states that the mass of substance deposited at an electrode is proportional to the quantity of charge passed.\nReason (R): The quantity of charge passed is calculated as the product of current and time (Q = It).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are true, but R merely defines how charge is calculated; it does not explain why mass deposited is proportional to charge, which is the independent empirical/theoretical basis of Faraday\'s first law.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-82',
    type: 'assertion-reason',
    question: 'Assertion (A): During electrolysis of dilute aqueous NaCl using inert electrodes, hydrogen gas (not sodium metal) is liberated at the cathode.\nReason (R): The standard reduction potential of water is more favourable (less negative) for reduction than that of Na+/Na, so water is preferentially reduced.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because reduction of water requires a much less negative potential than reduction of Na+ to Na, water is reduced preferentially, correctly explaining why hydrogen (not sodium) is produced at the cathode.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Electrolysis of molten sodium chloride produces sodium metal at the cathode.\nReason (R): In the absence of water, there is no competing reduction reaction, so Na+ ions are reduced directly at the cathode.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Without water present to be preferentially reduced, Na+ has no competition and is reduced directly to sodium metal at the cathode, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-84',
    type: 'assertion-reason',
    question: 'Assertion (A): A mercury cell provides a highly constant voltage throughout its working life.\nReason (R): The overall cell reaction in a mercury cell does not involve any species in solution whose concentration changes as the cell is used.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the cell potential (via the Nernst equation) depends on the concentrations of species involved, the absence of any changing solution-phase concentration in a mercury cell directly explains its constant voltage output.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-85',
    type: 'assertion-reason',
    question: 'Assertion (A): The lead storage battery is classified as a secondary cell.\nReason (R): Its discharge reaction can be reversed by passing an external electric current through it in the opposite direction, restoring the original reactants.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The defining feature of a secondary cell is its rechargeability, and the reversibility described in R is exactly what qualifies the lead storage battery for this classification.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Fuel cells can supply electrical energy continuously without needing to be recharged.\nReason (R): The reactants in a fuel cell (such as hydrogen and oxygen) are continuously supplied from an external source rather than being stored within the cell itself.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The continuous external supply of reactants, rather than a fixed internal store, is exactly why a fuel cell can operate indefinitely without recharging, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Rusting of iron does not occur in completely dry air, free of moisture.\nReason (R): Rusting is fundamentally an electrochemical process that requires the presence of both water and dissolved oxygen to proceed.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since rusting depends on setting up an electrochemical cell that requires an aqueous medium for ion transport, along with dissolved oxygen for the cathodic reaction, the absence of moisture prevents rusting, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Galvanised iron resists rusting even if the protective zinc coating is scratched, exposing the underlying iron.\nReason (R): Zinc is more easily oxidised than iron and acts as a sacrificial anode, being corroded preferentially and thereby protecting the iron.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because zinc has a greater tendency to lose electrons (oxidise) than iron, it continues to protect the iron even at a scratch, corroding itself instead — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The EMF of a galvanic cell is measured using a potentiometer rather than an ordinary voltmeter.\nReason (R): A potentiometer measures the cell potential under conditions of negligible current flow, avoiding voltage drop due to internal resistance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'An ordinary voltmeter draws current and would give a reading affected by internal resistance losses, whereas a potentiometer balances the potential at zero current, giving the true EMF — correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Strong electrolytes show a nearly linear relationship between molar conductivity and the square root of concentration.\nReason (R): Strong electrolytes are essentially completely dissociated at all concentrations, so the modest change in Λm with dilution arises mainly from decreasing interionic interactions rather than a change in the extent of dissociation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since dissociation is already essentially complete, the systematic and near-linear rise in Λm arises from weaker ionic interactions at higher dilution, matching the Debye-Hückel-Onsager behaviour and correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-91',
    type: 'assertion-reason',
    question: 'Assertion (A): For weak electrolytes, the degree of dissociation increases as the solution is diluted.\nReason (R): Dilution reduces ionic interactions and shifts the dissociation equilibrium of the weak electrolyte further towards the ionised form, per Le Chatelier\'s principle applied to a dissociation equilibrium.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Dilution effectively favours further dissociation of a weak electrolyte, consistent with the equilibrium shifting to increase the number of ionic species as concentration decreases — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-92',
    type: 'assertion-reason',
    question: 'Assertion (A): The standard cell potential (E°cell) can be used to calculate the equilibrium constant of the corresponding redox reaction.\nReason (R): The relation E°cell = (RT/nF) ln K directly connects the two quantities.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise mathematical relationship is exactly what allows calculation of the equilibrium constant from a known E°cell value, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-93',
    type: 'assertion-reason',
    question: 'Assertion (A): A concentration cell can generate a non-zero EMF even though both half-cells contain the same electrode material and the same ionic species.\nReason (R): The EMF arises because the two half-cells have different concentrations of the common ion, and the Nernst equation predicts a potential difference under such conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The Nernst-equation-based dependence of electrode potential on ion concentration is exactly why a concentration difference alone (without different materials) can drive a spontaneous reaction and generate EMF — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The lead storage battery loses its ability to be recharged effectively after many charge-discharge cycles.\nReason (R): Repeated cycles gradually lead to loss of active material and physical degradation of the electrodes, reducing efficiency over time.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The physical and chemical degradation described in R is a well-recognised, correct explanation of why rechargeable batteries like the lead storage battery gradually lose capacity and efficiency over many cycles.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Copper can be purified by electrorefining, using impure copper as the anode and pure copper as the cathode in a CuSO4 electrolyte.\nReason (R): During electrolysis, copper from the impure anode is oxidised into solution as Cu2+, while pure copper metal is deposited by reduction at the cathode.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This oxidation-dissolution and reduction-deposition sequence is exactly the mechanism by which electrorefining purifies copper, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-96',
    type: 'assertion-reason',
    question: 'Assertion (A): One Faraday of charge is required to deposit one mole of silver metal from AgNO3 solution by electrolysis.\nReason (R): The reduction of Ag+ to Ag requires only one electron per silver ion, so one mole of electrons (one Faraday) deposits one mole of silver.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since Ag+ requires only a single electron for reduction, exactly one Faraday (one mole of electrons) is needed per mole of silver deposited, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Two moles of electrons (two Faradays) are needed to deposit one mole of copper metal from a Cu2+ solution.\nReason (R): The reduction half-reaction is Cu2+ + 2e- → Cu, requiring two electrons per copper ion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since each Cu2+ ion requires two electrons for complete reduction, depositing one mole of copper requires two moles of electrons (two Faradays), correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-98',
    type: 'assertion-reason',
    question: 'Assertion (A): The molar conductivity of a solution has units different from those of conductivity.\nReason (R): Molar conductivity is obtained by dividing conductivity by molar concentration, introducing an additional "per mole" dimension into its units.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Dividing κ (S/m or S/cm) by concentration (mol per unit volume) yields units such as S m² mol-1, which are indeed different from the units of κ itself, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Corrosion can be minimised by connecting the metal to be protected to a more easily oxidisable metal (sacrificial anode).\nReason (R): The sacrificial metal, being more reactive, is preferentially oxidised, sparing the protected metal from corrosion as long as the sacrificial metal remains available.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The preferential oxidation of the more reactive sacrificial metal, as described in R, is exactly the electrochemical principle underlying cathodic protection techniques such as galvanisation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The Nernst equation can be applied to individual half-cell electrode potentials, not just to the overall cell potential.\nReason (R): Each half-cell reaction has its own reaction quotient, which depends on the concentration of the relevant ions in that half-cell, allowing a Nernst-type expression to be written for it.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since each half-reaction has a well-defined reaction quotient based on its own species concentrations, a Nernst-type equation can indeed be written for individual electrode potentials, correctly explaining A.',
    difficulty: 'hard'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'electrochem-101',
    type: 'statement',
    question: 'Statement I: A galvanic cell converts chemical energy into electrical energy.\nStatement II: An electrolytic cell converts electrical energy into chemical energy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly summarise the fundamental distinction between galvanic and electrolytic cells in terms of energy conversion direction.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-102',
    type: 'statement',
    question: 'Statement I: In a galvanic cell, the anode is negative and the cathode is positive.\nStatement II: In an electrolytic cell, the anode is negative and the cathode is positive, exactly the same as in a galvanic cell.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — in an electrolytic cell, the polarity is reversed compared to a galvanic cell: the anode is positive and the cathode is negative.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-103',
    type: 'statement',
    question: 'Statement I: Oxidation always occurs at the anode, regardless of whether the cell is galvanic or electrolytic.\nStatement II: Reduction always occurs at the cathode, regardless of whether the cell is galvanic or electrolytic.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the universal convention for anode (oxidation) and cathode (reduction), applicable to both cell types.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-104',
    type: 'statement',
    question: 'Statement I: The salt bridge allows the flow of electrons between the two half-cells.\nStatement II: The salt bridge allows the flow of ions between the two half-cells to maintain electrical neutrality.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — electrons travel through the external wire, not the salt bridge. Statement II correctly describes the role of the salt bridge in allowing ion flow to maintain neutrality.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-105',
    type: 'statement',
    question: 'Statement I: The standard hydrogen electrode is assigned a potential of 0.00 V by convention.\nStatement II: All standard electrode potentials are conventionally expressed as reduction potentials, measured relative to the SHE.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the reference role and convention used for standard electrode potentials.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-106',
    type: 'statement',
    question: 'Statement I: EMF of a cell is calculated as Ecathode - Eanode, using standard reduction potentials for both electrodes.\nStatement II: A positive EMF (E°cell) always corresponds to a spontaneous forward reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and consistent with the standard relationships between cell potential, electrode potentials, and reaction spontaneity.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-107',
    type: 'statement',
    question: 'Statement I: The Nernst equation shows that cell potential depends on temperature and the reaction quotient.\nStatement II: The Nernst equation predicts that cell potential is completely independent of the concentrations of reactants and products.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect and self-contradictory with the Nernst equation, which explicitly shows cell potential depends on concentrations through the reaction quotient Q.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-108',
    type: 'statement',
    question: 'Statement I: At equilibrium, the cell potential of a galvanic cell becomes zero.\nStatement II: At equilibrium, the reaction quotient Q of the cell reaction equals its equilibrium constant K.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the state of a galvanic cell at equilibrium, consistent with the Nernst equation.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-109',
    type: 'statement',
    question: 'Statement I: ΔG° = -nFE°cell relates Gibbs free energy change to cell potential.\nStatement II: E°cell = (RT/nF) ln K relates cell potential to the equilibrium constant of the reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both are correct, standard thermodynamic relations connecting cell potential to Gibbs free energy and equilibrium constant respectively.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-110',
    type: 'statement',
    question: 'Statement I: Conductivity (κ) of an electrolyte solution decreases with dilution.\nStatement II: Molar conductivity (Λm) of an electrolyte solution decreases with dilution.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — fewer ions per unit volume on dilution reduces conductivity. Statement II is incorrect — molar conductivity actually increases with dilution.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-111',
    type: 'statement',
    question: 'Statement I: For strong electrolytes, Λm° can be obtained by extrapolating a Λm vs √c plot to zero concentration.\nStatement II: For weak electrolytes, the same extrapolation method works equally well, giving accurate Λm° values.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — this extrapolation works for strong electrolytes due to their near-linear Λm vs √c relationship. Statement II is incorrect — for weak electrolytes, this extrapolation is unreliable, and Kohlrausch\'s law must be used instead.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-112',
    type: 'statement',
    question: 'Statement I: Kohlrausch\'s law states that at infinite dilution, each ion contributes independently to the molar conductivity of an electrolyte.\nStatement II: This law can be used to calculate the degree of dissociation of a weak electrolyte at a given concentration.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe Kohlrausch\'s law and one of its key applications — determining the degree of dissociation via α = Λcm/Λm°.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-113',
    type: 'statement',
    question: 'Statement I: Faraday\'s first law states that mass deposited at an electrode is proportional to the quantity of charge passed.\nStatement II: Faraday\'s second law states that for a fixed quantity of charge, masses of substances deposited are proportional to their equivalent weights.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly summarise Faraday\'s two laws of electrolysis.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-114',
    type: 'statement',
    question: 'Statement I: One Faraday of charge is approximately equal to 96500 coulombs.\nStatement II: One Faraday corresponds to the charge carried by exactly one electron.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — one Faraday corresponds to the charge on one mole of electrons, not a single electron.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-115',
    type: 'statement',
    question: 'Statement I: During electrolysis of dilute aqueous NaCl, hydrogen gas is liberated at the cathode instead of sodium metal.\nStatement II: This occurs because water is preferentially reduced over Na+, since its reduction potential is more favourable.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly connected, describing why hydrogen rather than sodium is produced at the cathode in this scenario.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-116',
    type: 'statement',
    question: 'Statement I: Electrolysis of molten NaCl produces sodium metal at the cathode and chlorine gas at the anode.\nStatement II: Electrolysis of molten NaCl produces the same products as electrolysis of dilute aqueous NaCl.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — electrolysis of dilute aqueous NaCl produces hydrogen at the cathode (not sodium metal), since water is preferentially reduced when present.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-117',
    type: 'statement',
    question: 'Statement I: A dry cell is a primary cell and cannot be recharged.\nStatement II: A lead storage battery is a secondary cell and can be recharged.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly classify these two common batteries as primary (non-rechargeable) and secondary (rechargeable) cells, respectively.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-118',
    type: 'statement',
    question: 'Statement I: A mercury cell provides a highly steady voltage output during its use.\nStatement II: This is because the overall cell reaction of a mercury cell does not involve any species in solution whose concentration changes during discharge.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and causally connected, correctly explaining the characteristic constant-voltage behaviour of mercury cells.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-119',
    type: 'statement',
    question: 'Statement I: The lead storage battery uses spongy lead as the anode and lead dioxide as the cathode.\nStatement II: During discharge, both electrodes are converted into lead sulphate.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the electrode materials and the discharge products of a lead storage battery.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-120',
    type: 'statement',
    question: 'Statement I: Fuel cells convert the energy of combustion of a fuel directly into electrical energy.\nStatement II: A hydrogen-oxygen fuel cell produces only water as its main by-product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the operating principle and clean by-product of hydrogen-oxygen fuel cells.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-121',
    type: 'statement',
    question: 'Statement I: Fuel cells must be recharged periodically, just like conventional secondary batteries.\nStatement II: Fuel cells can operate continuously as long as fuel and oxidant are supplied externally.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — fuel cells do not need recharging in the same sense as batteries. Statement II correctly describes their continuous operation as long as reactants are supplied.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-122',
    type: 'statement',
    question: 'Statement I: Corrosion of iron is a purely chemical process with no electron transfer involved.\nStatement II: Corrosion of iron involves setting up tiny galvanic cells on the metal surface, with oxidation at anodic regions and reduction of oxygen at cathodic regions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — corrosion is fundamentally an electrochemical process involving electron transfer. Statement II correctly describes the mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-123',
    type: 'statement',
    question: 'Statement I: Rusting of iron requires the presence of both water and oxygen.\nStatement II: Rusting can proceed readily even in completely dry, oxygen-free conditions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect and contradicts the basic requirement of both moisture and oxygen for rusting to occur.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-124',
    type: 'statement',
    question: 'Statement I: Galvanisation protects iron from rusting by coating it with a layer of zinc.\nStatement II: Zinc protects the iron because it is less reactive than iron and remains chemically inert.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — zinc protects iron precisely because it is more reactive (more easily oxidised) than iron, acting as a sacrificial anode, not because it is inert.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-125',
    type: 'statement',
    question: 'Statement I: A concentration cell generates EMF purely due to a difference in ion concentration between two half-cells with identical electrode materials.\nStatement II: A concentration cell cannot be analysed using the Nernst equation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly defines a concentration cell. Statement II is incorrect — the Nernst equation is precisely the tool used to calculate the EMF of a concentration cell.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-126',
    type: 'statement',
    question: 'Statement I: A strong electrolyte is essentially completely dissociated into ions at all concentrations in solution.\nStatement II: A weak electrolyte shows an increasing degree of dissociation as the solution becomes more dilute.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the fundamental distinction in dissociation behaviour between strong and weak electrolytes.',
    difficulty: 'easy'
  },
  {
    id: 'electrochem-127',
    type: 'statement',
    question: 'Statement I: The molar conductivity of a weak electrolyte at infinite dilution can be calculated using the limiting molar conductivities of related strong electrolytes.\nStatement II: This calculation uses the additive nature of ionic conductivities described by Kohlrausch\'s law.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly connected, describing the standard method of calculating Λm° for weak electrolytes using Kohlrausch\'s law.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-128',
    type: 'statement',
    question: 'Statement I: The equivalent weight of a substance, used in Faraday\'s second law, depends on the number of electrons involved in its electrode reaction.\nStatement II: Substances requiring more electrons per ion for deposition will have a smaller mass deposited for the same quantity of charge, compared to substances requiring fewer electrons per ion (all else equal).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe how the number of electrons required per ion (related to equivalent weight) affects the mass of substance deposited for a given quantity of charge.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-129',
    type: 'statement',
    question: 'Statement I: The unit siemens (S) is used for electrical conductance.\nStatement II: The unit S m² mol-1 (or S cm² mol-1) is used for molar conductivity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the SI-related units used for conductance and molar conductivity in electrochemistry.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-130',
    type: 'statement',
    question: 'Statement I: Electrorefining of copper uses impure copper as the cathode and pure copper as the anode.\nStatement II: In electrorefining of copper, impure copper is used as the anode, which dissolves, while pure copper deposits at the cathode.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the arrangement is reversed. Statement II correctly describes electrorefining: impure copper is the anode (which dissolves via oxidation) and pure copper is deposited at the cathode (via reduction).',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'electrochem-131',
    type: 'how-many',
    question: 'How many of the following statements about galvanic and electrolytic cells are correct?\n1. A galvanic cell converts chemical energy into electrical energy.\n2. An electrolytic cell converts electrical energy into chemical energy.\n3. In a galvanic cell, the anode is negative and the cathode is positive.\n4. In an electrolytic cell, the anode is negative and the cathode is positive, same as a galvanic cell.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — an electrolytic cell has reversed polarity compared to a galvanic cell (anode positive, cathode negative).',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-132',
    type: 'how-many',
    question: 'How many of the following statements about the salt bridge are correct?\n1. It maintains electrical neutrality in both half-cells.\n2. It allows the flow of ions between the two half-cells.\n3. It conducts electrons directly from anode to cathode.\n4. It minimises the liquid junction potential.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 correctly describe the function of the salt bridge. Statement 3 is false — electrons flow through the external wire, not the salt bridge.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-133',
    type: 'how-many',
    question: 'How many of the following statements about the standard hydrogen electrode (SHE) are correct?\n1. It is assigned a standard reduction potential of 0.00 V.\n2. This value is measured experimentally rather than assigned by convention.\n3. It serves as a reference for determining other standard electrode potentials.\n4. It is used at standard conditions of 1 atm H2 pressure and 1 M H+ concentration.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — the 0.00 V value is a convention chosen by agreement, not something measured experimentally.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-134',
    type: 'how-many',
    question: 'How many of the following statements about the Nernst equation and related thermodynamic relations are correct?\n1. Ecell = E°cell - (RT/nF) ln Q\n2. ΔG° = -nFE°cell\n3. E°cell = (RT/nF) ln K\n4. At equilibrium, Ecell = 0 and Q = K.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly represent the standard relations connecting the Nernst equation, Gibbs free energy, equilibrium constant, and cell potential at equilibrium.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-135',
    type: 'how-many',
    question: 'How many of the following statements about conductivity and molar conductivity are correct?\n1. Conductivity decreases on dilution.\n2. Molar conductivity increases on dilution.\n3. Molar conductivity is calculated as Λm = κ × c.\n4. Molar conductivity is calculated as Λm = κ / c.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the correct relation is Λm = κ/c, not κ × c.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-136',
    type: 'how-many',
    question: 'How many of the following statements about strong and weak electrolytes are correct?\n1. Strong electrolytes are nearly completely dissociated at all concentrations.\n2. For strong electrolytes, Λm vs √c is nearly linear and can be extrapolated to find Λm°.\n3. Weak electrolytes show a sharp rise in Λm at low concentrations, making extrapolation to Λm° unreliable.\n4. Kohlrausch\'s law is needed to determine Λm° for weak electrolytes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the distinct behaviour of strong versus weak electrolytes with respect to molar conductivity and dilution.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-137',
    type: 'how-many',
    question: 'How many of the following statements about Kohlrausch\'s law are correct?\n1. It states that each ion contributes independently to molar conductivity at infinite dilution.\n2. It can be used to calculate Λm° of a weak electrolyte from Λm° values of related strong electrolytes.\n3. It can be used to calculate the degree of dissociation of a weak electrolyte.\n4. It applies only to strong electrolytes and never to weak electrolytes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — Kohlrausch\'s law is applied precisely to determine properties of weak electrolytes, not exclusively strong ones.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-138',
    type: 'how-many',
    question: 'How many of the following statements about Faraday\'s laws of electrolysis are correct?\n1. Mass deposited at an electrode is proportional to the quantity of charge passed.\n2. For a fixed charge, masses of different substances deposited are proportional to their equivalent weights.\n3. One Faraday is approximately 96500 coulombs.\n4. One Faraday corresponds to the charge of a single electron.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — one Faraday is the charge on one mole of electrons, not a single electron.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-139',
    type: 'how-many',
    question: 'How many of the following statements about electrolysis of aqueous versus molten sodium chloride are correct?\n1. Electrolysis of molten NaCl gives sodium metal at the cathode.\n2. Electrolysis of dilute aqueous NaCl gives hydrogen gas at the cathode, not sodium metal.\n3. Water is preferentially reduced over Na+ in aqueous NaCl because its reduction potential is more favourable.\n4. Both molten and aqueous NaCl electrolysis give identical products at the cathode.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false, since the products differ (sodium metal for molten, hydrogen gas for dilute aqueous).',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-140',
    type: 'how-many',
    question: 'How many of the following statements about primary and secondary cells are correct?\n1. A dry cell is a primary cell and cannot be recharged.\n2. A lead storage battery is a secondary cell and can be recharged.\n3. A mercury cell provides a highly steady voltage during use.\n4. A Ni-Cd cell has a shorter life than a lead storage battery but costs less to manufacture.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a Ni-Cd cell actually has a longer life than the lead storage battery, though at a higher manufacturing cost.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-141',
    type: 'how-many',
    question: 'How many of the following statements about the lead storage battery are correct?\n1. The anode is spongy lead and the cathode is lead dioxide.\n2. The electrolyte is dilute sulphuric acid.\n3. Both electrodes are converted to lead sulphate during discharge.\n4. The battery cannot be recharged once discharged.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the lead storage battery is a secondary cell and can indeed be recharged by passing current in the reverse direction.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-142',
    type: 'how-many',
    question: 'How many of the following statements about fuel cells are correct?\n1. They convert the energy of combustion of a fuel directly into electrical energy.\n2. A hydrogen-oxygen fuel cell produces water as the main by-product.\n3. They can operate continuously as long as fuel and oxidant are supplied.\n4. They must be discarded and replaced after a single discharge, like a primary cell.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — fuel cells are not discarded after use; they continue operating as long as reactants are supplied.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-143',
    type: 'how-many',
    question: 'How many of the following statements about corrosion and its prevention are correct?\n1. Corrosion is an electrochemical process.\n2. Rusting of iron requires both water and oxygen.\n3. Galvanisation protects iron by coating it with a more reactive metal (zinc) that corrodes preferentially.\n4. Zinc protects iron because zinc is chemically inert and does not react at all.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — zinc protects iron precisely because it is more reactive (not inert), acting as a sacrificial anode.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-144',
    type: 'how-many',
    question: 'How many of the following statements about the mechanism of rusting are correct?\n1. At the anodic region, iron is oxidised to Fe2+.\n2. At the cathodic region, dissolved oxygen is reduced, typically with the help of H+ from dissolved CO2.\n3. Electrons flow through the metal from the cathodic region to the anodic region.\n4. The final rust product is a hydrated form of iron(III) oxide.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — electrons flow from the anodic region (where they are released by oxidation) to the cathodic region (where they are consumed in reduction), not the reverse.',
    difficulty: 'hard'
  },
  {
    id: 'electrochem-145',
    type: 'how-many',
    question: 'How many of the following statements about concentration cells are correct?\n1. Both half-cells use identical electrode materials.\n2. The EMF arises purely from a difference in ionic concentration between the two half-cells.\n3. The Nernst equation is used to calculate the EMF of a concentration cell.\n4. A concentration cell cannot generate any measurable EMF under any circumstances.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe concentration cells. Statement 4 is false — concentration cells do generate a measurable EMF due to the concentration difference.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-146',
    type: 'how-many',
    question: 'How many of the following statements about electrode potential and spontaneity are correct?\n1. A positive E°cell corresponds to a spontaneous forward reaction.\n2. A negative E°cell corresponds to a non-spontaneous forward reaction.\n3. ΔG° and E°cell are related by ΔG° = -nFE°cell.\n4. A more positive standard reduction potential indicates a weaker oxidising agent.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a more positive standard reduction potential indicates a stronger, not weaker, oxidising agent.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-147',
    type: 'how-many',
    question: 'How many of the following statements about electrorefining of copper are correct?\n1. Impure copper is used as the anode.\n2. Pure copper is used as the cathode.\n3. Copper from the anode is oxidised into solution as Cu2+.\n4. Pure copper is deposited at the cathode by reduction of Cu2+.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the standard setup and mechanism of copper electrorefining.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-148',
    type: 'how-many',
    question: 'How many of the following statements about units in electrochemistry are correct?\n1. Conductance is measured in siemens (S).\n2. Conductivity is measured in siemens per metre (S/m) or siemens per centimetre (S/cm).\n3. Molar conductivity is measured in siemens metre squared per mole (S m² mol-1).\n4. Cell EMF is measured in coulombs (C).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe standard electrochemical units. Statement 4 is false — cell EMF is measured in volts (V), not coulombs, which is a unit of charge.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-149',
    type: 'how-many',
    question: 'How many of the following statements about the degree of dissociation of weak electrolytes are correct?\n1. α = Λcm / Λm°, where Λcm is molar conductivity at concentration c.\n2. Degree of dissociation increases with dilution for a weak electrolyte.\n3. At infinite dilution, the degree of dissociation of a weak electrolyte approaches 1 (complete dissociation).\n4. Degree of dissociation is unrelated to molar conductivity measurements.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — degree of dissociation is calculated directly from molar conductivity measurements via the ratio Λcm/Λm°.',
    difficulty: 'medium'
  },
  {
    id: 'electrochem-150',
    type: 'how-many',
    question: 'How many of the following statements about the overall scope of electrochemistry as covered in this chapter are correct?\n1. Electrochemistry connects thermodynamics (ΔG°, K) with electrical measurements (E°cell) through defined mathematical relationships.\n2. Conductance measurements provide insight into the strength (strong vs weak) of an electrolyte.\n3. Faraday\'s laws provide a quantitative basis for relating charge passed to the amount of substance transformed during electrolysis.\n4. Batteries and fuel cells are practical applications of galvanic cell principles for portable or continuous electricity generation.\n5. Corrosion prevention methods, such as galvanisation, apply electrochemical principles of relative reactivity.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 3,
    explanation: 'All five statements correctly summarise the interconnected themes of the electrochemistry chapter, from thermodynamics to practical applications like batteries and corrosion prevention.',
    difficulty: 'medium'
  }
];

export default questions;
