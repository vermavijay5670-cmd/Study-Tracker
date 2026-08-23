import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  // ==================== MCQ (70) ====================
  {
    id: 'solutions-1',
    type: 'mcq',
    question: 'A solution is best defined as',
    options: [
      'a heterogeneous mixture of two or more components',
      'a homogeneous mixture of two or more chemically non-reacting components',
      'a mixture of only two liquids',
      'a compound formed by chemical combination of solute and solvent'
    ],
    correctIndex: 1,
    explanation: 'A solution is a homogeneous mixture of two or more components whose composition can be varied within limits, and the components do not react chemically with each other.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-2',
    type: 'mcq',
    question: 'In a binary solution, the component present in the larger quantity is called the',
    options: ['solute', 'solvent', 'colloid', 'precipitate'],
    correctIndex: 1,
    explanation: 'By convention, in a binary solution the component present in larger proportion is the solvent, and the one in smaller proportion is the solute.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-3',
    type: 'mcq',
    question: 'An alloy such as brass, in which zinc (solid) is dissolved in copper (solid), is an example of a',
    options: ['gas in solid solution', 'liquid in solid solution', 'solid in solid solution', 'solid in liquid solution'],
    correctIndex: 2,
    explanation: 'Brass is a solid solution of zinc (solute) dissolved in copper (solvent), so it is classified as solid dissolved in solid.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-4',
    type: 'mcq',
    question: 'Soda water (CO2 dissolved in water) is an example of which type of solution?',
    options: ['Gas in gas', 'Gas in liquid', 'Liquid in gas', 'Solid in liquid'],
    correctIndex: 1,
    explanation: 'Soda water contains CO2 gas dissolved in the liquid solvent water, making it a gas-in-liquid solution.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-5',
    type: 'mcq',
    question: 'Camphor in nitrogen gas is an example of a solution of the type',
    options: ['gas in gas', 'solid in gas', 'liquid in gas', 'gas in solid'],
    correctIndex: 1,
    explanation: 'Camphor (a solid) sublimes and disperses into nitrogen gas, giving a solid dissolved in gas type solution, as listed in NCERT for the types of solutions.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-6',
    type: 'mcq',
    question: 'Which of the following concentration terms is independent of temperature?',
    options: ['Molarity', 'Molality', 'Normality', 'Formality'],
    correctIndex: 1,
    explanation: 'Molality is defined using mass of solvent (in kg), which does not change with temperature, unlike molarity, normality and formality, which are volume-based and hence temperature dependent.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-7',
    type: 'mcq',
    question: 'Mole fraction of a component in a solution is defined as',
    options: [
      'moles of that component divided by total mass of solution',
      'moles of that component divided by total moles of all components',
      'mass of that component divided by mass of solvent',
      'moles of that component divided by volume of solution in litres'
    ],
    correctIndex: 1,
    explanation: 'Mole fraction of a component = (number of moles of that component) / (total number of moles of all components in the solution).',
    difficulty: 'easy'
  },
  {
    id: 'solutions-8',
    type: 'mcq',
    question: 'For a binary solution with components 1 and 2, the mole fractions x1 and x2 satisfy',
    options: ['x1 + x2 = 0', 'x1 + x2 = 1', 'x1 - x2 = 1', 'x1 × x2 = 1'],
    correctIndex: 1,
    explanation: 'Since mole fractions are fractional parts of the total moles, the mole fractions of all components in a solution must always sum to 1.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-9',
    type: 'mcq',
    question: 'Parts per million (ppm) is a concentration unit generally used for',
    options: [
      'concentrated solutions like brine',
      'very dilute solutions, such as trace pollutants in water or air',
      'solutions of gases in gases only',
      'solid solutions like alloys'
    ],
    correctIndex: 1,
    explanation: 'ppm expresses the amount of solute per million parts of solution and is used when a solute is present in trace quantities, such as pollutants in water or air.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-10',
    type: 'mcq',
    question: 'Mass percentage of a solute in a solution is given by',
    options: [
      '(mass of solute / mass of solvent) × 100',
      '(mass of solute / mass of solution) × 100',
      '(mass of solution / mass of solute) × 100',
      '(moles of solute / mass of solution) × 100'
    ],
    correctIndex: 1,
    explanation: 'Mass percentage = mass of solute divided by the total mass of the solution (solute + solvent), multiplied by 100.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-11',
    type: 'mcq',
    question: 'The dissolution of a gas in a liquid is generally',
    options: [
      'an endothermic process',
      'an exothermic process',
      'neither exothermic nor endothermic',
      'always accompanied by a large increase in entropy that overrides enthalpy effects'
    ],
    correctIndex: 1,
    explanation: 'Dissolution of a gas in a liquid is usually exothermic, which is why, according to Le Chatelier\'s principle, the solubility of a gas in a liquid decreases with an increase in temperature.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-12',
    type: 'mcq',
    question: 'On increasing temperature, the solubility of most gases in liquids',
    options: ['increases', 'decreases', 'remains unaffected', 'first increases then decreases sharply'],
    correctIndex: 1,
    explanation: 'Since dissolution of gases is exothermic, increasing temperature shifts the equilibrium to favour escape of the gas, decreasing its solubility, which is why aquatic life is more comfortable in cold water.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-13',
    type: 'mcq',
    question: 'Henry\'s law states that the partial pressure of a gas in vapour phase is proportional to the',
    options: [
      'mole fraction of the gas in the solution',
      'total pressure of the system',
      'volume of the solution',
      'molar mass of the gas'
    ],
    correctIndex: 0,
    explanation: 'Henry\'s law states p = KH·x, where p is the partial pressure of the gas above the solution and x is the mole fraction of the dissolved gas in the solution.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-14',
    type: 'mcq',
    question: 'A gas with a higher value of Henry\'s law constant (KH) at a given temperature is',
    options: [
      'more soluble in the liquid',
      'less soluble in the liquid',
      'equally soluble regardless of KH',
      'not able to dissolve at all'
    ],
    correctIndex: 1,
    explanation: 'For a fixed partial pressure, x = p/KH, so a higher KH means a lower mole fraction dissolves, i.e. the gas is less soluble.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-15',
    type: 'mcq',
    question: 'Bottles of soft drinks are sealed under high pressure of CO2 mainly to',
    options: [
      'increase the shelf life of the flavouring agents',
      'increase the solubility of CO2 in the drink, as per Henry\'s law',
      'prevent bacterial growth',
      'reduce the cost of packaging'
    ],
    correctIndex: 1,
    explanation: 'By Henry\'s law, increasing the partial pressure of CO2 increases its solubility (mole fraction) in the liquid, which is why soft drink bottles are sealed under high CO2 pressure.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-16',
    type: 'mcq',
    question: 'Scuba divers use tanks filled with air diluted with helium (rather than pure compressed air) mainly because',
    options: [
      'helium is cheaper than nitrogen',
      'the lower solubility of helium in blood, compared to nitrogen, reduces the risk of bends caused by gas bubbles on ascent',
      'helium reacts with nitrogen to remove it from the tank',
      'helium increases the density of the breathing mixture'
    ],
    correctIndex: 1,
    explanation: 'At high underwater pressure, nitrogen dissolves in blood in large amounts due to Henry\'s law; on rapid ascent it forms bubbles causing decompression sickness (bends). Helium, being less soluble in blood, is used instead of nitrogen to avoid this.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-17',
    type: 'mcq',
    question: 'People taken suddenly to high altitudes suffer from a condition called anoxia because',
    options: [
      'the partial pressure of oxygen at high altitude is higher than at sea level',
      'low atmospheric pressure at high altitude leads to low concentration of oxygen dissolved in blood and tissue fluid',
      'high altitude air contains more carbon dioxide than oxygen',
      'oxygen becomes chemically inert at low pressure'
    ],
    correctIndex: 1,
    explanation: 'At high altitude, the partial pressure of oxygen is lower than at sea level, and by Henry\'s law this leads to a lower concentration of dissolved oxygen in blood, causing weakness and inability to think clearly (anoxia).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-18',
    type: 'mcq',
    question: 'Henry\'s law is not applicable to gases such as ammonia or hydrogen chloride when dissolved in water because these gases',
    options: [
      'have extremely low molar mass',
      'undergo ionisation or reaction with the solvent',
      'have very low boiling points',
      'do not dissolve in water at all'
    ],
    correctIndex: 1,
    explanation: 'Henry\'s law applies well when the gas does not chemically interact with the solvent. Gases like NH3 and HCl react with or ionise in water, so their solubility does not simply follow Henry\'s law.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-19',
    type: 'mcq',
    question: 'The solubility of a solid solute in a liquid solvent is affected significantly by',
    options: ['pressure only', 'temperature, since dissolution of solids in liquids is not appreciably affected by pressure', 'neither temperature nor pressure', 'only the colour of the solute'],
    correctIndex: 1,
    explanation: 'For solid-in-liquid solutions, since solids and liquids are highly incompressible, pressure has practically no effect on solubility, whereas temperature has a significant effect (increasing or decreasing solubility depending on whether dissolution is endothermic or exothermic).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-20',
    type: 'mcq',
    question: 'If the dissolution process of a solid in a liquid is endothermic, then according to Le Chatelier\'s principle, an increase in temperature will',
    options: ['decrease the solubility of the solid', 'increase the solubility of the solid', 'have no effect on solubility', 'cause the solid to sublime instead of dissolve'],
    correctIndex: 1,
    explanation: 'For an endothermic dissolution process, heat is a reactant in the equilibrium sense, so increasing temperature shifts equilibrium towards more dissolution, increasing solubility.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-21',
    type: 'mcq',
    question: 'Raoult\'s law for a solution of two volatile liquids states that the partial vapour pressure of each component is',
    options: [
      'independent of its mole fraction in solution',
      'directly proportional to its mole fraction in the solution',
      'inversely proportional to its mole fraction in the solution',
      'equal to the vapour pressure of the pure liquid regardless of composition'
    ],
    correctIndex: 1,
    explanation: 'Raoult\'s law states p1 = p1°x1 and p2 = p2°x2, i.e. the partial vapour pressure of each volatile component is proportional to its mole fraction in the solution.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-22',
    type: 'mcq',
    question: 'According to Raoult\'s law, the total vapour pressure of an ideal solution of two volatile liquids is given by',
    options: ['ptotal = p1° + p2°', 'ptotal = p1°x1 + p2°x2', 'ptotal = p1°x2 + p2°x1', 'ptotal = p1°/x1 + p2°/x2'],
    correctIndex: 1,
    explanation: 'The total vapour pressure is the sum of the partial vapour pressures of both components, each given by Raoult\'s law: ptotal = p1°x1 + p2°x2.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-23',
    type: 'mcq',
    question: 'Raoult\'s law is regarded as a special case of Henry\'s law when',
    options: [
      'the Henry\'s law constant KH becomes equal to the vapour pressure of the pure component',
      'the mole fraction of solute becomes zero',
      'the solute is a non-volatile solid',
      'the solvent is water'
    ],
    correctIndex: 0,
    explanation: 'Both laws relate partial pressure to mole fraction with a proportionality constant. Raoult\'s law becomes a special case of Henry\'s law when the proportionality constant KH equals p° (the vapour pressure of the pure component).',
    difficulty: 'hard'
  },
  {
    id: 'solutions-24',
    type: 'mcq',
    question: 'In the vapour phase above an ideal binary liquid mixture, the vapour is always',
    options: [
      'richer in the component with the lower boiling point (more volatile component)',
      'richer in the component with the higher boiling point',
      'of exactly the same composition as the liquid',
      'entirely composed of only one component'
    ],
    correctIndex: 0,
    explanation: 'The more volatile component (higher vapour pressure, lower boiling point) contributes proportionally more to the vapour phase than to the liquid phase, so the vapour is richer in that component.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-25',
    type: 'mcq',
    question: 'An ideal solution is one that',
    options: [
      'obeys Raoult\'s law over the entire range of concentration',
      'always shows a positive deviation from Raoult\'s law',
      'has a boiling point higher than either pure component',
      'cannot exist in nature'
    ],
    correctIndex: 0,
    explanation: 'An ideal solution obeys Raoult\'s law at all concentrations and temperatures, with ΔmixH = 0 and ΔmixV = 0.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-26',
    type: 'mcq',
    question: 'For an ideal solution, the enthalpy and volume of mixing are',
    options: ['both positive', 'both negative', 'both zero', 'ΔmixH is zero but ΔmixV is positive'],
    correctIndex: 2,
    explanation: 'In an ideal solution, since intermolecular attractive forces between A-A, B-B and A-B are essentially the same, there is no heat change or volume change on mixing, so ΔmixH = 0 and ΔmixV = 0.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-27',
    type: 'mcq',
    question: 'Which of the following pairs is generally cited as forming a nearly ideal solution?',
    options: ['Ethanol and water', 'n-hexane and n-heptane', 'Phenol and aniline', 'Nitric acid and water'],
    correctIndex: 1,
    explanation: 'n-hexane and n-heptane are structurally similar non-polar liquids with nearly identical intermolecular forces, forming a solution that closely obeys Raoult\'s law (nearly ideal), unlike the other listed pairs which show significant deviations.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-28',
    type: 'mcq',
    question: 'A solution showing positive deviation from Raoult\'s law has',
    options: [
      'A-B interactions stronger than A-A and B-B interactions',
      'A-B interactions weaker than A-A and B-B interactions',
      'no intermolecular interactions at all',
      'A-B interactions exactly equal to A-A and B-B interactions'
    ],
    correctIndex: 1,
    explanation: 'Positive deviation occurs when solute-solvent (A-B) interactions are weaker than the solute-solute and solvent-solvent interactions, so molecules escape into vapour more easily than predicted, raising the vapour pressure above the ideal value.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-29',
    type: 'mcq',
    question: 'For a solution showing positive deviation from Raoult\'s law, the enthalpy of mixing (ΔmixH) is',
    options: ['zero', 'positive (endothermic)', 'negative (exothermic)', 'undefined'],
    correctIndex: 1,
    explanation: 'Positive deviation is associated with weaker A-B interactions, so mixing requires energy to be absorbed to separate the stronger A-A/B-B interactions, making ΔmixH positive (endothermic).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-30',
    type: 'mcq',
    question: 'Which of the following mixtures shows positive deviation from Raoult\'s law?',
    options: ['Chloroform and acetone', 'Ethanol and acetone', 'Nitric acid and water', 'Phenol and aniline'],
    correctIndex: 1,
    explanation: 'Ethanol and acetone show positive deviation because ethanol molecules that were hydrogen-bonded to each other get partly disrupted by acetone, weakening the A-B interactions compared to A-A and B-B.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-31',
    type: 'mcq',
    question: 'A solution showing negative deviation from Raoult\'s law is exemplified by',
    options: ['ethanol and acetone', 'phenol and aniline', 'cyclohexane and ethanol', 'acetone and carbon disulphide'],
    correctIndex: 1,
    explanation: 'Phenol and aniline show negative deviation because hydrogen bonding between phenol and aniline molecules makes A-B interactions stronger than A-A and B-B interactions, lowering the vapour pressure below the ideal value.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-32',
    type: 'mcq',
    question: 'For a solution showing negative deviation from Raoult\'s law, mixing of the two components is generally',
    options: ['exothermic, with ΔmixH negative', 'endothermic, with ΔmixH positive', 'accompanied by no enthalpy change', 'always accompanied by an increase in volume'],
    correctIndex: 0,
    explanation: 'In negative deviation, stronger A-B interactions form on mixing, releasing energy, so ΔmixH is negative (exothermic), and the solution volume also typically decreases.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-33',
    type: 'mcq',
    question: 'A mixture of chloroform and acetone shows negative deviation from Raoult\'s law mainly because of',
    options: ['dipole-induced dipole forces only', 'hydrogen bond formation between chloroform and acetone molecules', 'complete immiscibility of the two liquids', 'chemical reaction that forms a new covalent compound'],
    correctIndex: 1,
    explanation: 'The hydrogen atom of chloroform can form a hydrogen bond with the oxygen of acetone, creating stronger A-B interactions than in the pure components, causing negative deviation.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-34',
    type: 'mcq',
    question: 'An azeotrope is a mixture of two liquids that',
    options: [
      'boils at a constant temperature and has the same composition in liquid and vapour phases, so it cannot be separated by simple fractional distillation',
      'always has a boiling point lower than either pure component',
      'is always an ideal solution',
      'consists of only one component in the vapour phase'
    ],
    correctIndex: 0,
    explanation: 'An azeotrope boils at a fixed temperature with liquid and vapour of identical composition, so its components cannot be separated by fractional distillation.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-35',
    type: 'mcq',
    question: 'Solutions that show a large positive deviation from Raoult\'s law form',
    options: ['minimum boiling azeotropes', 'maximum boiling azeotropes', 'no azeotropes at all', 'only solid solutions'],
    correctIndex: 0,
    explanation: 'Large positive deviation raises the total vapour pressure above ideal at some composition, giving a minimum in the boiling point curve there, so a minimum boiling azeotrope forms (e.g. ethanol-water at about 95% ethanol).',
    difficulty: 'hard'
  },
  {
    id: 'solutions-36',
    type: 'mcq',
    question: 'A mixture of nitric acid and water, which shows large negative deviation from Raoult\'s law, forms a',
    options: ['minimum boiling azeotrope', 'maximum boiling azeotrope', 'perfectly ideal solution', 'gaseous solution only'],
    correctIndex: 1,
    explanation: 'Large negative deviation lowers the vapour pressure and raises the boiling point at some composition, giving a maximum boiling azeotrope, as observed for the nitric acid-water system.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-37',
    type: 'mcq',
    question: 'The four colligative properties studied in NCERT for dilute solutions of non-volatile solutes are',
    options: [
      'boiling point, melting point, density and viscosity',
      'relative lowering of vapour pressure, elevation of boiling point, depression of freezing point and osmotic pressure',
      'colour, odour, taste and pH',
      'molarity, molality, normality and mole fraction'
    ],
    correctIndex: 1,
    explanation: 'Colligative properties depend only on the number of solute particles and not their identity; the four studied are relative lowering of vapour pressure, elevation in boiling point, depression in freezing point, and osmotic pressure.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-38',
    type: 'mcq',
    question: 'Colligative properties of a dilute solution depend on',
    options: [
      'the chemical nature of the solute particles',
      'the number of solute particles present, irrespective of their nature',
      'the colour of the solute',
      'the molar mass of the solvent only'
    ],
    correctIndex: 1,
    explanation: 'By definition, colligative properties depend only on the number of solute particles dissolved in a fixed amount of solvent, not on what those particles are.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-39',
    type: 'mcq',
    question: 'The relative lowering of vapour pressure of a solution containing a non-volatile solute is equal to',
    options: ['the mole fraction of the solvent', 'the mole fraction of the solute', 'the molarity of the solute', 'the mass fraction of the solvent'],
    correctIndex: 1,
    explanation: 'For a dilute solution with non-volatile solute, (p1° - p1)/p1° = x2, where x2 is the mole fraction of the solute — this is the relative lowering of vapour pressure.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-40',
    type: 'mcq',
    question: 'The boiling point of a solution containing a non-volatile solute is always',
    options: [
      'lower than the boiling point of the pure solvent',
      'higher than the boiling point of the pure solvent',
      'equal to the boiling point of the pure solvent',
      'independent of the amount of solute dissolved'
    ],
    correctIndex: 1,
    explanation: 'A non-volatile solute lowers the vapour pressure of the solvent, so a higher temperature is needed for the vapour pressure to equal atmospheric pressure, raising the boiling point above that of the pure solvent.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-41',
    type: 'mcq',
    question: 'The elevation in boiling point (ΔTb) of a dilute solution is related to molality (m) by',
    options: ['ΔTb = Kb / m', 'ΔTb = Kb m', 'ΔTb = Kb + m', 'ΔTb = Kb - m'],
    correctIndex: 1,
    explanation: 'Elevation of boiling point is directly proportional to molality of the solution: ΔTb = Kb m, where Kb is the molal boiling point elevation constant (ebullioscopic constant) of the solvent.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-42',
    type: 'mcq',
    question: 'The ebullioscopic constant (Kb) of a solvent is defined for a solution containing',
    options: ['1 mole of solute per litre of solution', '1 mole of solute per kg of solvent', '1 gram of solute per 100 g of solvent', '1 mole of solute per mole of solvent'],
    correctIndex: 1,
    explanation: 'Kb (molal elevation constant) is the elevation in boiling point produced when 1 mole of solute is dissolved in 1 kg of solvent, i.e. for a solution of molality 1.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-43',
    type: 'mcq',
    question: 'The freezing point of a solution containing a non-volatile, non-electrolyte solute is',
    options: [
      'higher than that of the pure solvent',
      'lower than that of the pure solvent',
      'the same as that of the pure solvent',
      'unrelated to the vapour pressure of the solution'
    ],
    correctIndex: 1,
    explanation: 'Since the solution has a lower vapour pressure than the pure solvent at any temperature, its solid-liquid equilibrium (freezing point) is reached at a lower temperature than for the pure solvent.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-44',
    type: 'mcq',
    question: 'Depression in freezing point (ΔTf) is related to molality (m) of the solution as',
    options: ['ΔTf = Kf / m', 'ΔTf = Kf m', 'ΔTf = Kf + m', 'ΔTf = m / Kf'],
    correctIndex: 1,
    explanation: 'Depression in freezing point is directly proportional to molality: ΔTf = Kf m, where Kf is the molal depression constant (cryoscopic constant) of the solvent.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-45',
    type: 'mcq',
    question: 'Ethylene glycol is added to water in car radiators in cold countries mainly to',
    options: [
      'increase the boiling point of water only',
      'lower the freezing point of water and prevent the radiator fluid from freezing',
      'increase the density of the coolant',
      'act as a catalyst for engine reactions'
    ],
    correctIndex: 1,
    explanation: 'Ethylene glycol, a non-volatile solute, depresses the freezing point of water as an antifreeze, preventing the radiator coolant from freezing in cold climates.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-46',
    type: 'mcq',
    question: 'Osmosis is defined as the',
    options: [
      'spontaneous flow of solvent molecules through a semipermeable membrane from a dilute solution (or pure solvent) into a more concentrated solution',
      'spontaneous flow of solute molecules through any membrane in either direction',
      'diffusion of gas molecules through a porous membrane only',
      'evaporation of solvent from an open solution'
    ],
    correctIndex: 0,
    explanation: 'Osmosis is the spontaneous movement of solvent molecules through a semipermeable membrane from a region of lower solute concentration (or pure solvent) to a region of higher solute concentration.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-47',
    type: 'mcq',
    question: 'A semipermeable membrane allows the passage of',
    options: [
      'only solute molecules',
      'both solute and solvent molecules equally',
      'only solvent molecules and not solute molecules',
      'neither solute nor solvent molecules'
    ],
    correctIndex: 2,
    explanation: 'A semipermeable membrane selectively allows small solvent molecules to pass through while blocking larger solute molecules.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-48',
    type: 'mcq',
    question: 'Osmotic pressure of a dilute solution is related to its molar concentration (C) and absolute temperature (T) by',
    options: ['π = CRT', 'π = C/RT', 'π = RT/C', 'π = C + RT'],
    correctIndex: 0,
    explanation: 'Osmotic pressure follows the van\'t Hoff equation for dilute solutions, π = CRT, analogous in form to the ideal gas equation.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-49',
    type: 'mcq',
    question: 'Osmotic pressure is a particularly preferred method for determining the molar masses of macromolecules such as proteins and polymers because',
    options: [
      'it requires very high temperatures',
      'the osmotic pressure produced is appreciable and measurable even for very small amounts of solute, since molar concentration used is small but the effect is significant at room temperature',
      'proteins do not dissolve in any solvent',
      'osmotic pressure does not depend on concentration'
    ],
    correctIndex: 1,
    explanation: 'Even a small concentration of a macromolecule produces a measurable osmotic pressure at ordinary room temperature, making this method more practical and accurate than boiling point elevation or freezing point depression for large molecules, which produce very small changes in those properties.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-50',
    type: 'mcq',
    question: 'Two solutions having the same osmotic pressure at a given temperature are said to be',
    options: ['isomeric', 'isotonic', 'isotopic', 'isobaric'],
    correctIndex: 1,
    explanation: 'Solutions with equal osmotic pressure at the same temperature are called isotonic solutions.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-51',
    type: 'mcq',
    question: 'When red blood cells are placed in a solution having osmotic pressure higher than that inside the cells (a hypertonic solution), the cells undergo',
    options: [
      'haemolysis (bursting) due to water entering the cell',
      'crenation (shrinking) due to loss of water from the cell',
      'no change at all',
      'immediate dissolution'
    ],
    correctIndex: 1,
    explanation: 'In a hypertonic solution, water flows out of the red blood cell (from lower to higher solute concentration) causing the cell to shrink, a phenomenon called crenation.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-52',
    type: 'mcq',
    question: 'When red blood cells are placed in a solution more dilute than blood plasma (a hypotonic solution), the cells will',
    options: [
      'swell and may burst due to water entering the cell (haemolysis)',
      'shrink due to water leaving the cell',
      'remain completely unaffected',
      'undergo denaturation of haemoglobin'
    ],
    correctIndex: 0,
    explanation: 'In a hypotonic solution, water moves into the red blood cell by osmosis (since intracellular solute concentration is relatively higher), causing the cell to swell and possibly burst, called haemolysis.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-53',
    type: 'mcq',
    question: 'When a solution is separated from pure solvent by a semipermeable membrane and external pressure greater than the osmotic pressure is applied on the solution side, the phenomenon that occurs is called',
    options: ['normal osmosis', 'reverse osmosis', 'plasmolysis', 'diffusion'],
    correctIndex: 1,
    explanation: 'Applying a pressure greater than the osmotic pressure on the solution side reverses the natural direction of solvent flow, forcing solvent from the solution into the pure solvent side; this is reverse osmosis.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-54',
    type: 'mcq',
    question: 'Reverse osmosis is widely used for',
    options: [
      'increasing the boiling point of a solvent',
      'desalination of sea water to obtain fresh drinking water',
      'measuring the freezing point of a liquid',
      'preparing standard solutions in a laboratory'
    ],
    correctIndex: 1,
    explanation: 'Reverse osmosis, using membranes such as cellulose acetate, is used to purify sea water by forcing pure water through the membrane while retaining dissolved salts, a common desalination method.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-55',
    type: 'mcq',
    question: 'The membrane commonly used in reverse osmosis for water purification is',
    options: ['cellulose acetate', 'copper sulphate', 'starch', 'polyethylene'],
    correctIndex: 0,
    explanation: 'Cellulose acetate is a commonly used semipermeable membrane in reverse osmosis units for desalination and water purification.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-56',
    type: 'mcq',
    question: 'For a solute that dissociates into ions in solution, the observed colligative property is generally',
    options: [
      'smaller than that calculated assuming no dissociation',
      'greater than that calculated assuming no dissociation',
      'exactly equal to that calculated assuming no dissociation',
      'independent of the extent of dissociation'
    ],
    correctIndex: 1,
    explanation: 'Dissociation increases the total number of particles in solution, and since colligative properties depend on particle number, the observed value becomes greater than that calculated without accounting for dissociation.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-57',
    type: 'mcq',
    question: 'For a solute that undergoes association (e.g. dimerisation) in a solvent, the observed molar mass is',
    options: [
      'lower than the normal (expected) molar mass',
      'higher than the normal (expected) molar mass',
      'equal to the normal molar mass',
      'zero'
    ],
    correctIndex: 1,
    explanation: 'Association reduces the number of effective particles in solution, lowering the colligative property, which corresponds to a calculated molar mass that is higher than the true (normal) molar mass.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-58',
    type: 'mcq',
    question: 'The van\'t Hoff factor (i) is defined as the ratio of',
    options: [
      'normal molar mass to observed molar mass',
      'observed molar mass to normal molar mass',
      'molarity to molality',
      'osmotic pressure to vapour pressure'
    ],
    correctIndex: 0,
    explanation: 'The van\'t Hoff factor i = (normal molar mass) / (observed/abnormal molar mass), and is equivalently the ratio of observed colligative property to the calculated (normal) colligative property.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-59',
    type: 'mcq',
    question: 'For acetic acid dimerising in benzene, the value of the van\'t Hoff factor i is',
    options: ['greater than 1', 'less than 1', 'equal to 1', 'equal to 0'],
    correctIndex: 1,
    explanation: 'Since acetic acid molecules associate in benzene to form dimers, the effective number of particles decreases, giving i less than 1 (approaching 0.5 for complete dimerisation).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-60',
    type: 'mcq',
    question: 'For an aqueous solution of NaCl, which fully dissociates into Na+ and Cl- ions, the van\'t Hoff factor i is close to',
    options: ['0.5', '1', '2', '3'],
    correctIndex: 2,
    explanation: 'Complete dissociation of NaCl into two ions (Na+ and Cl-) doubles the number of particles compared to the undissociated formula unit, giving i close to 2.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-61',
    type: 'mcq',
    question: 'For a non-electrolyte solute that neither dissociates nor associates in solution, the value of the van\'t Hoff factor i is',
    options: ['0', 'less than 1', 'equal to 1', 'greater than 1'],
    correctIndex: 2,
    explanation: 'If the number of particles in solution equals the number of formula units dissolved (no association or dissociation), i = 1, and the observed colligative property equals the calculated (ideal) value.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-62',
    type: 'mcq',
    question: 'When the van\'t Hoff factor is included, the elevation of boiling point is expressed as',
    options: ['ΔTb = Kb m / i', 'ΔTb = i Kb m', 'ΔTb = Kb m - i', 'ΔTb = Kb m + i'],
    correctIndex: 1,
    explanation: 'To account for association or dissociation, the colligative property equations are modified by the van\'t Hoff factor: ΔTb = i Kb m.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-63',
    type: 'mcq',
    question: 'With the van\'t Hoff factor included, osmotic pressure is expressed as',
    options: ['π = i C R T', 'π = C R T / i', 'π = i + C R T', 'π = C R T - i'],
    correctIndex: 0,
    explanation: 'For solutes that dissociate or associate, the modified osmotic pressure equation is π = i C R T, where i is the van\'t Hoff factor.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-64',
    type: 'mcq',
    question: 'Molarity of a solution is defined as',
    options: [
      'moles of solute per litre of solution',
      'moles of solute per kg of solvent',
      'moles of solute per litre of solvent',
      'grams of solute per litre of solution'
    ],
    correctIndex: 0,
    explanation: 'Molarity (M) is defined as the number of moles of solute dissolved per litre (dm³) of solution.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-65',
    type: 'mcq',
    question: 'Molality of a solution is defined as',
    options: [
      'moles of solute per litre of solution',
      'moles of solute per kilogram of solvent',
      'moles of solute per kilogram of solution',
      'moles of solvent per litre of solution'
    ],
    correctIndex: 1,
    explanation: 'Molality (m) is defined as the number of moles of solute dissolved per kilogram of solvent.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-66',
    type: 'mcq',
    question: 'When the temperature of an aqueous solution is increased, its molarity generally',
    options: [
      'decreases, because the volume of the solution expands',
      'increases, because the volume of the solution shrinks',
      'remains exactly constant',
      'becomes undefined'
    ],
    correctIndex: 0,
    explanation: 'Since molarity depends on the volume of the solution, and volume generally increases (expands) with temperature, molarity of a given solution decreases as temperature rises.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-67',
    type: 'mcq',
    question: 'Which of the following concentration terms would remain unchanged when a solution\'s temperature is changed, assuming no evaporation occurs?',
    options: ['Molarity', 'Molality and mole fraction', 'Normality', 'None of the concentration terms'],
    correctIndex: 1,
    explanation: 'Molality and mole fraction are based on mass or mole ratios (not volume), so they do not change with temperature, unlike molarity and normality which depend on solution volume.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-68',
    type: 'mcq',
    question: 'A solution is said to be saturated when',
    options: [
      'no more solute can dissolve in it at a given temperature, and it is in dynamic equilibrium with undissolved solute',
      'it contains the maximum possible amount of solvent',
      'it has reacted completely with the solvent',
      'its concentration is exactly 1 molar'
    ],
    correctIndex: 0,
    explanation: 'A saturated solution is one in which no more solute can dissolve at a given temperature and pressure, existing in dynamic equilibrium with any excess undissolved solute.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-69',
    type: 'mcq',
    question: 'The vapour pressure of a pure liquid at a given temperature depends on',
    options: [
      'the strength of intermolecular forces of attraction between its molecules',
      'the colour of the liquid',
      'the shape of the container',
      'the atmospheric pressure only'
    ],
    correctIndex: 0,
    explanation: 'Vapour pressure at a given temperature is determined by how easily molecules escape the liquid surface, which depends on the strength of intermolecular attractive forces — stronger forces give lower vapour pressure.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-70',
    type: 'mcq',
    question: 'A solution containing a non-volatile solute always has a vapour pressure that is',
    options: [
      'higher than that of the pure solvent',
      'lower than that of the pure solvent',
      'equal to that of the pure solvent',
      'independent of solute concentration'
    ],
    correctIndex: 1,
    explanation: 'A non-volatile solute occupies part of the surface and reduces the fraction of solvent molecules able to escape into the vapour phase, so the vapour pressure of the solution is always lower than that of the pure solvent.',
    difficulty: 'easy'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'solutions-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Molality of a solution does not change with temperature.\nReason (R): Molality is defined in terms of the mass of solvent, and mass does not change with temperature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Molality depends on mass of solvent (kg), which is unaffected by temperature changes, unlike volume-based terms like molarity; R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The solubility of a gas in a liquid decreases with increase in temperature.\nReason (R): Dissolution of a gas in a liquid is generally an exothermic process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since dissolving a gas releases heat (exothermic), by Le Chatelier\'s principle increasing temperature shifts equilibrium against dissolution, decreasing gas solubility — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Aquatic organisms are more comfortable in cold water than in warm water.\nReason (R): The solubility of oxygen in water increases with a decrease in temperature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Cold water holds more dissolved oxygen than warm water, giving aquatic life more available oxygen, which directly explains why they are more comfortable in colder water.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Soda water bottles are kept at low temperature before opening.\nReason (R): Lower temperature increases the Henry\'s law constant of CO2 in water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — soda bottles are cooled to keep CO2 dissolved and prevent it from fizzing out on opening. But R is false: lower temperature actually decreases the Henry\'s law constant (increasing solubility), it does not increase it.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Scuba divers are advised to ascend to the surface slowly and not rapidly.\nReason (R): Rapid ascent causes dissolved nitrogen in the blood to come out of solution suddenly, forming bubbles that block capillaries and cause bends.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'As pressure decreases on rapid ascent, the solubility of dissolved nitrogen decreases sharply (Henry\'s law), releasing gas bubbles in blood vessels, causing the painful condition called bends — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Pressure has almost no effect on the solubility of a solid solute in a liquid solvent.\nReason (R): Solids and liquids are highly compressible, so pressure changes greatly affect solid-liquid equilibria.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true. But R is false — solids and liquids are, in fact, highly incompressible (not highly compressible), which is precisely why pressure has negligible effect on solid-liquid solubility.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-77',
    type: 'assertion-reason',
    question: 'Assertion (A): An ideal solution obeys Raoult\'s law over the entire range of concentration.\nReason (R): In an ideal solution, the intermolecular forces between solute-solute, solvent-solvent, and solute-solvent molecules are essentially of the same magnitude.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because the interaction strengths (A-A, B-B, A-B) are essentially equal in an ideal solution, molecules escape the liquid exactly as predicted by Raoult\'s law across all compositions, so R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-78',
    type: 'assertion-reason',
    question: 'Assertion (A): A solution of ethanol and acetone shows positive deviation from Raoult\'s law.\nReason (R): In this mixture, the ethanol-ethanol hydrogen bonds are partially broken, weakening the effective solute-solvent interactions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The disruption of ethanol\'s hydrogen bonding network by acetone molecules weakens the net A-B interaction relative to A-A and B-B, allowing more molecules to escape and raising vapour pressure above the ideal value, causing positive deviation.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-79',
    type: 'assertion-reason',
    question: 'Assertion (A): The mixture of chloroform and acetone shows negative deviation from Raoult\'s law.\nReason (R): Chloroform and acetone form a hydrogen bond with each other, making A-B attractive forces stronger than A-A and B-B forces.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The hydrogen bond between chloroform\'s C-H and acetone\'s C=O oxygen strengthens intermolecular attraction upon mixing, lowering the escaping tendency of molecules and hence the vapour pressure, giving negative deviation — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Azeotropic mixtures cannot be separated into their pure components by simple fractional distillation.\nReason (R): At the azeotropic composition, the vapour formed has exactly the same composition as the liquid, so no further enrichment is possible.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since liquid and vapour compositions are identical at the azeotropic point, repeated vaporisation-condensation cycles (as used in fractional distillation) fail to change the composition further, so components cannot be separated by this method — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-81',
    type: 'assertion-reason',
    question: 'Assertion (A): The boiling point of a solution containing a non-volatile solute is always higher than that of the pure solvent.\nReason (R): Addition of a non-volatile solute lowers the vapour pressure of the solvent, requiring a higher temperature to reach the boiling condition.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A liquid boils when its vapour pressure equals atmospheric pressure; because a non-volatile solute lowers vapour pressure, a higher temperature is required for the solution to reach that condition, correctly explaining the elevation of boiling point.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Common salt is spread on icy roads in winter.\nReason (R): Dissolving salt in the surface water lowers its freezing point, so the ice melts even below 0°C.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Salt dissolves in the thin layer of water on ice, depressing the freezing point of that solution below the ambient temperature, causing the ice to melt — correctly explaining why salt is used to de-ice roads.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethylene glycol is added to water used in car radiators in winter.\nReason (R): It raises the freezing point of the coolant, protecting the radiator from bursting.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true, but R is false — ethylene glycol lowers (depresses), not raises, the freezing point of water, which is what prevents the coolant from freezing.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Osmotic pressure measurement is preferred over other colligative properties for determining the molar mass of large biomolecules like proteins.\nReason (R): The magnitude of osmotic pressure is appreciable even for very dilute solutions, unlike the very small changes seen in freezing point or boiling point for such dilute macromolecular solutions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because macromolecules have very high molar mass, their molal concentration is low even for reasonable mass amounts, giving negligible ΔTb and ΔTf but a still-measurable osmotic pressure, which correctly explains the preference for this method.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-85',
    type: 'assertion-reason',
    question: 'Assertion (A): Applying a pressure greater than the osmotic pressure on a solution reverses the direction of solvent flow through a semipermeable membrane.\nReason (R): This phenomenon, called reverse osmosis, is used in desalination of sea water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are factually correct, but R merely states an application of the phenomenon described in A rather than explaining why applying excess pressure reverses solvent flow, so it is not the correct explanation of A.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Red blood cells placed in a hypotonic solution swell and may burst.\nReason (R): Water moves by osmosis from the region of lower solute concentration outside the cell to the higher solute concentration inside the cell.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'In a hypotonic (dilute) external solution, water flows into the cell (from lower to higher solute concentration across the membrane), causing swelling and possible bursting (haemolysis) — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The van\'t Hoff factor for potassium chloride in dilute aqueous solution is close to 2.\nReason (R): KCl is a strong electrolyte that dissociates almost completely into K+ and Cl- ions in water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Complete dissociation of KCl into two ions doubles the effective particle count, giving i close to 2, and this near-complete dissociation as a strong electrolyte correctly explains the observed value.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-88',
    type: 'assertion-reason',
    question: 'Assertion (A): The observed molar mass of acetic acid in benzene is found to be nearly double its normal molar mass.\nReason (R): Acetic acid molecules dimerise in benzene through intermolecular hydrogen bonding, decreasing the effective number of particles.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Dimerisation halves the effective number of particles in solution, so the observed colligative properties correspond to a molar mass roughly twice the true molar mass — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-89',
    type: 'assertion-reason',
    question: 'Assertion (A): For a solute that dissociates in solution, the van\'t Hoff factor i is always less than 1.\nReason (R): Dissociation increases the number of solute particles present in the solution.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — dissociation increases the number of particles, making i greater than 1, not less than 1. R itself is a correct statement (dissociation does increase particle number).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The relative lowering of vapour pressure is a useful method for determining the molar mass of a non-volatile solute.\nReason (R): The relative lowering of vapour pressure of a dilute solution is equal to the mole fraction of the solute, which can be related to its molar mass if the mass taken is known.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since (p1°-p1)/p1° = n2/(n1+n2), measuring this ratio for known masses of solute and solvent allows calculation of the unknown molar mass of solute — R correctly explains why this method works.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Mole fraction and mass percentage are preferred over molarity when a solution\'s concentration must remain accurate despite temperature fluctuations.\nReason (R): Mole fraction and mass percentage are defined using masses and mole ratios, which do not change with temperature, unlike volume-based concentration terms.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because these terms rely only on mass or mole quantities, unaffected by thermal expansion, they remain accurate across temperature changes, whereas molarity (volume based) does not — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Henry\'s law does not hold well for the solubility of HCl gas in water.\nReason (R): HCl ionises in water rather than simply dissolving as molecular HCl, so its behaviour deviates from the simple proportionality assumed by Henry\'s law.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Henry\'s law applies best when the gas does not react with or ionise in the solvent; since HCl ionises extensively in water, it deviates from Henry\'s law behaviour, which correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-93',
    type: 'assertion-reason',
    question: 'Assertion (A): The value of the Henry\'s law constant (KH) is different for different gases dissolved in the same solvent at the same temperature.\nReason (R): KH depends on the nature of the gas as well as the nature of the solvent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since KH is a proportionality constant specific to each gas-solvent pair at a given temperature, different gases have different KH values in the same solvent — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-94',
    type: 'assertion-reason',
    question: 'Assertion (A): A minimum boiling azeotrope is formed by liquid pairs that show large positive deviation from Raoult\'s law.\nReason (R): In such mixtures, the total vapour pressure at some intermediate composition exceeds that of either pure component, corresponding to a minimum in the boiling point curve.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A vapour pressure maximum at some composition (due to strong positive deviation) corresponds directly to a boiling point minimum at that composition, giving a minimum boiling azeotrope — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-95',
    type: 'assertion-reason',
    question: 'Assertion (A): For an ideal solution, the volume of mixing (ΔmixV) is zero.\nReason (R): In an ideal solution, the total volume of the solution equals the sum of the volumes of the individual pure components before mixing.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since ΔmixV = 0 for an ideal solution, the final volume exactly equals the sum of the original component volumes, which is a direct explanation of A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Alveolar air in the lungs has a lower partial pressure of oxygen than atmospheric air at high altitude.\nReason (R): The lower atmospheric pressure at high altitude reduces the partial pressure of oxygen available for gas exchange in the lungs.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At high altitude, the overall atmospheric pressure is lower, which reduces the partial pressure of oxygen inhaled, directly explaining the lower oxygen partial pressure available in the lungs at altitude.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Sugar solution in water shows a van\'t Hoff factor close to 1.\nReason (R): Sugar (sucrose) is a non-electrolyte and does not dissociate or associate significantly in water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because sucrose molecules remain as single, intact particles in solution without ionising or associating, the number of effective particles equals the number of formula units, giving i ≈ 1 — R correctly explains A.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-98',
    type: 'assertion-reason',
    question: 'Assertion (A): The abnormal molar mass of an electrolyte calculated from colligative property measurements is always lower than its normal (formula) molar mass.\nReason (R): Dissociation of an electrolyte in solution always decreases the number of effective particles.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — dissociation increases the observed colligative property, which corresponds to a calculated molar mass lower than normal. But R is false: dissociation increases, not decreases, the number of effective particles.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The vapour pressure of a solution of two miscible volatile liquids is always intermediate between the vapour pressures of the two pure liquids, for an ideal solution.\nReason (R): For an ideal solution, ptotal = p1°x1 + p2°x2, which is a weighted average of the two pure component vapour pressures.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since Raoult\'s law gives the total pressure as a mole-fraction-weighted average of the pure component pressures, the resulting value must lie between p1° and p2° for an ideal solution — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-100',
    type: 'assertion-reason',
    question: 'Assertion (A): A 0.9% (mass/volume) sodium chloride solution is used as normal saline in medical practice.\nReason (R): This concentration makes the solution isotonic with human blood, so it does not cause haemolysis or crenation of blood cells.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Normal saline is formulated at a concentration that matches the osmotic pressure of blood plasma, making it isotonic and safe to administer intravenously without disturbing red blood cell volume — R correctly explains A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'solutions-101',
    type: 'statement',
    question: 'Statement I: A solution is always a homogeneous mixture at the molecular level.\nStatement II: The components of a solution do not undergo a chemical reaction with each other.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'A solution is by definition a homogeneous mixture of two or more chemically non-reacting components, so both statements correctly describe a solution.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-102',
    type: 'statement',
    question: 'Statement I: Molarity of a solution changes with a change in temperature.\nStatement II: Mole fraction of a solution changes with a change in temperature.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Molarity depends on volume, which changes with temperature, so Statement I is correct. Mole fraction depends only on mole ratios of components, which are unaffected by temperature, so Statement II is incorrect.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-103',
    type: 'statement',
    question: 'Statement I: The dissolution of most gases in liquids is an exothermic process.\nStatement II: The solubility of a gas in a liquid increases with increasing temperature.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — gas dissolution is generally exothermic. Statement II is incorrect — the solubility of gases actually decreases, not increases, with rising temperature.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-104',
    type: 'statement',
    question: 'Statement I: Henry\'s law states that the mole fraction of a gas dissolved in a liquid is proportional to the partial pressure of the gas above the liquid.\nStatement II: The proportionality constant in Henry\'s law is the same for all gases in a given solvent.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly states Henry\'s law (p = KH x). Statement II is incorrect — the Henry\'s law constant KH differs for different gases even in the same solvent at the same temperature.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-105',
    type: 'statement',
    question: 'Statement I: Pressure has a significant effect on the solubility of solids in liquids.\nStatement II: Pressure has a significant effect on the solubility of gases in liquids.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Solid-liquid solubility is essentially unaffected by pressure because solids and liquids are nearly incompressible (Statement I false). Gas solubility, however, is strongly pressure dependent as per Henry\'s law (Statement II true).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-106',
    type: 'statement',
    question: 'Statement I: Raoult\'s law applies to solutions of volatile liquids as well as to solutions containing a non-volatile solute.\nStatement II: For a non-volatile solute, Raoult\'s law reduces to a statement about the relative lowering of vapour pressure of the solvent.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Raoult\'s law applies generally to volatile components (Statement I true), and when the solute is non-volatile it simplifies to the relative lowering of vapour pressure of the solvent being equal to solute mole fraction (Statement II true).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-107',
    type: 'statement',
    question: 'Statement I: An ideal solution obeys Raoult\'s law at all concentrations.\nStatement II: For an ideal solution, ΔmixH and ΔmixV are both zero.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the defining characteristics of an ideal solution: obedience to Raoult\'s law across the full concentration range, and zero enthalpy and volume change on mixing.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-108',
    type: 'statement',
    question: 'Statement I: A solution showing positive deviation from Raoult\'s law has weaker solute-solvent interactions than solute-solute and solvent-solvent interactions.\nStatement II: Such a solution has a total vapour pressure lower than that predicted by Raoult\'s law.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly describes the cause of positive deviation. Statement II is incorrect — positive deviation means the observed vapour pressure is higher, not lower, than the Raoult\'s law prediction.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-109',
    type: 'statement',
    question: 'Statement I: A minimum boiling azeotrope is formed by a mixture showing large positive deviation from Raoult\'s law.\nStatement II: A maximum boiling azeotrope is formed by a mixture showing large negative deviation from Raoult\'s law.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe azeotrope formation — positive deviation systems form minimum boiling azeotropes, while negative deviation systems form maximum boiling azeotropes.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-110',
    type: 'statement',
    question: 'Statement I: Azeotropic mixtures have a fixed boiling point, similar to a pure liquid.\nStatement II: Azeotropic mixtures are pure compounds formed by chemical combination of the two liquids.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — azeotropes boil at a constant, fixed temperature like a pure substance. Statement II is incorrect — azeotropes remain mixtures of variable overall proportions in the sample; they are not compounds formed by chemical bonding.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-111',
    type: 'statement',
    question: 'Statement I: Colligative properties depend on the number of solute particles in a given amount of solvent.\nStatement II: Colligative properties are unaffected by whether the solute dissociates or associates in solution.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly defines colligative properties. Statement II is incorrect — dissociation or association changes the effective number of particles, which directly affects colligative properties, requiring the van\'t Hoff factor correction.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-112',
    type: 'statement',
    question: 'Statement I: The elevation in boiling point of a solution is directly proportional to its molality.\nStatement II: The depression in freezing point of a solution is directly proportional to its molarity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly states ΔTb ∝ m (molality). Statement II is incorrect — depression in freezing point is proportional to molality, not molarity.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-113',
    type: 'statement',
    question: 'Statement I: The molal elevation constant (Kb) of a solvent depends on the nature of the solvent.\nStatement II: The molal elevation constant (Kb) depends on the nature of the solute dissolved.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Kb is a property characteristic of a given solvent (Statement I correct); it does not depend on the identity of the solute dissolved, since it is a colligative-property constant (Statement II incorrect).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-114',
    type: 'statement',
    question: 'Statement I: Osmosis is the movement of solvent molecules from a region of higher solute concentration to lower solute concentration through a semipermeable membrane.\nStatement II: Osmotic pressure is the minimum pressure that must be applied to a solution to just prevent the entry of pure solvent into it through a semipermeable membrane.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — osmosis proceeds in the opposite direction: solvent moves from lower to higher solute concentration. Statement II correctly defines osmotic pressure.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-115',
    type: 'statement',
    question: 'Statement I: Osmotic pressure is a colligative property.\nStatement II: Osmotic pressure measurements are commonly used to determine the molar masses of macromolecules such as proteins.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct: osmotic pressure depends only on the number of solute particles (colligative), and its appreciable magnitude even at low concentrations makes it ideal for determining molar masses of large biomolecules.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-116',
    type: 'statement',
    question: 'Statement I: Two solutions with the same osmotic pressure at a given temperature are called isotonic solutions.\nStatement II: When two isotonic solutions are separated by a semipermeable membrane, there is no net movement of solvent between them.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe isotonic solutions — equal osmotic pressure by definition, and no net solvent flow across a semipermeable membrane since there is no osmotic pressure difference driving flow.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-117',
    type: 'statement',
    question: 'Statement I: In reverse osmosis, pure solvent flows from the solution side to the pure solvent side of a semipermeable membrane.\nStatement II: Reverse osmosis requires applying a pressure less than the osmotic pressure of the solution.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly describes reverse osmosis. Statement II is incorrect — reverse osmosis requires applying pressure greater than, not less than, the osmotic pressure of the solution.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-118',
    type: 'statement',
    question: 'Statement I: The van\'t Hoff factor for a solute that dissociates into n ions is generally greater than 1.\nStatement II: The van\'t Hoff factor for a solute that undergoes complete dimerisation approaches a value of 0.5.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct: dissociation increases particle count (i > 1), while complete dimerisation halves the effective particle count relative to the undimerised state (i approaching 0.5).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-119',
    type: 'statement',
    question: 'Statement I: The observed molar mass of an electrolyte determined from colligative properties is generally lower than its calculated (formula) molar mass.\nStatement II: This is because dissociation increases the effective number of particles, increasing the magnitude of colligative properties.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and consistent: dissociation raises the observed colligative property above the expected value, which corresponds mathematically to a molar mass lower than the true formula mass.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-120',
    type: 'statement',
    question: 'Statement I: Sea water can be purified by reverse osmosis using a cellulose acetate membrane.\nStatement II: This process requires applying pressure lower than the osmotic pressure of sea water to allow water to pass through the membrane.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — cellulose acetate is indeed used for RO desalination. Statement II is incorrect — the applied pressure must exceed, not be lower than, the osmotic pressure for reverse osmosis to occur.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-121',
    type: 'statement',
    question: 'Statement I: Molarity and molality of a very dilute aqueous solution are numerically almost equal.\nStatement II: This is because in very dilute solutions, the density of the solution is close to that of pure water.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — for very dilute aqueous solutions, the solution density approximates that of water (1 g/mL), making the numerical values of molarity and molality nearly the same.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-122',
    type: 'statement',
    question: 'Statement I: The mole fraction of a component is a dimensionless quantity.\nStatement II: Mole fraction can take values ranging from 0 to any positive number.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — mole fraction is a ratio of moles to moles, hence dimensionless. Statement II is incorrect — mole fraction must lie between 0 and 1, since it is a fraction of the total moles.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-123',
    type: 'statement',
    question: 'Statement I: Parts per million (ppm) is commonly used to express the concentration of pollutants present in trace amounts in water or air.\nStatement II: ppm is always numerically identical to mole fraction multiplied by 100.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly describes the typical use of ppm. Statement II is incorrect — ppm can be defined on a mass, volume, or mole basis and is scaled by a factor of 10^6, not related to mole fraction by simply multiplying by 100 (that describes percentage, on a different basis).',
    difficulty: 'medium'
  },
  {
    id: 'solutions-124',
    type: 'statement',
    question: 'Statement I: The relative lowering of vapour pressure of a solution equals the mole fraction of the non-volatile solute.\nStatement II: This relationship holds only for dilute solutions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the simple form (p1°-p1)/p1° = x2 is derived and applies accurately for dilute solutions of a non-volatile solute.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-125',
    type: 'statement',
    question: 'Statement I: All gases obey Henry\'s law under all conditions of pressure and temperature.\nStatement II: Henry\'s law holds best for gases at low pressures that do not react chemically with the solvent.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — Henry\'s law is not obeyed at very high pressures or when the gas reacts with the solvent. Statement II correctly identifies the conditions under which Henry\'s law holds well.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-126',
    type: 'statement',
    question: 'Statement I: Osmotic pressure of a solution increases with increasing temperature at constant concentration.\nStatement II: This follows from the equation π = CRT, in which π is directly proportional to absolute temperature T.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly follow the relation π = CRT: at fixed molar concentration C, osmotic pressure rises linearly with absolute temperature.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-127',
    type: 'statement',
    question: 'Statement I: A solution that shows negative deviation from Raoult\'s law has a boiling point lower than that predicted by ideal behaviour at the same composition.\nStatement II: Negative deviation is associated with stronger solute-solvent interactions than in the pure components.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — negative deviation lowers vapour pressure, which corresponds to a higher, not lower, boiling point than ideal. Statement II correctly identifies the cause of negative deviation.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-128',
    type: 'statement',
    question: 'Statement I: A eutectic mixture and an azeotropic mixture are the same thing.\nStatement II: An azeotropic mixture has identical liquid and vapour compositions at its boiling point.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a eutectic mixture relates to a solid-liquid melting point minimum, which is a different phenomenon from an azeotrope (a liquid-vapour phenomenon). Statement II correctly describes an azeotrope.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-129',
    type: 'statement',
    question: 'Statement I: Reverse osmosis membranes allow only solvent molecules to pass while blocking dissolved ions and larger solute molecules.\nStatement II: This selective permeability is what makes reverse osmosis useful for purifying water containing dissolved salts.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and logically connected — the selective, solvent-only permeability of the membrane is exactly what allows RO to separate pure water from dissolved salts.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-130',
    type: 'statement',
    question: 'Statement I: For a solution of two volatile liquids A and B, if A is more volatile than B, the vapour above the boiling solution is richer in A than the liquid phase is.\nStatement II: This principle underlies the separation of miscible liquids by fractional distillation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct: the more volatile component preferentially enriches the vapour phase, and this repeated enrichment through successive vaporisation-condensation cycles is the basis of fractional distillation.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'solutions-131',
    type: 'how-many',
    question: 'How many of the following are examples of a solid solution (solute and solvent both solid)?\n1. Brass (zinc in copper)\n2. Camphor in nitrogen gas\n3. Bronze (tin in copper)\n4. Copper dissolved in gold\n5. Sugar dissolved in water',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Brass, bronze, and copper-in-gold are all solid-in-solid solutions. Camphor in nitrogen is solid in gas, and sugar in water is solid in liquid — so 3 statements describe solid-in-solid solutions.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-132',
    type: 'how-many',
    question: 'How many of the following concentration terms are independent of the temperature of the solution?\n1. Mass percentage\n2. Molarity\n3. Mole fraction\n4. Normality\n5. Parts per million (mass basis)',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 1,
    explanation: 'Mass percentage, mole fraction, and ppm (mass basis) are mass/mole-ratio based and temperature-independent. Molarity and normality are volume-based and change with temperature. So 3 are temperature-independent.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-133',
    type: 'how-many',
    question: 'How many of the following statements about the dissolution of gases in liquids are correct?\n1. Dissolution of a gas in a liquid is generally exothermic.\n2. Solubility of a gas increases with increase in temperature.\n3. Solubility of a gas increases with increase in its partial pressure above the liquid.\n4. Aerated drinks are bottled under high pressure to increase CO2 solubility.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — gas solubility decreases, not increases, with rising temperature, since dissolution is exothermic.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-134',
    type: 'how-many',
    question: 'How many of the following are correct applications or consequences of Henry\'s law?\n1. Scuba divers use air diluted with helium to reduce the risk of bends.\n2. People at high altitude may suffer from anoxia due to low partial pressure of oxygen.\n3. Soda water bottles are opened only after warming to release CO2 quickly and safely.\n4. Bends can occur when dissolved nitrogen forms bubbles in the blood on rapid ascent from depth.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 correctly describe Henry\'s law applications. Statement 3 is false — soda bottles are kept cool, not warmed, to keep CO2 dissolved and prevent it fizzing out suddenly.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-135',
    type: 'how-many',
    question: 'How many of the following statements about Raoult\'s law and vapour pressure are correct?\n1. Raoult\'s law states that the partial vapour pressure of a component is proportional to its mole fraction.\n2. For an ideal solution, ΔmixH = 0.\n3. For an ideal solution, ΔmixV = 0.\n4. Raoult\'s law is a special case of Henry\'s law when KH equals the vapour pressure of the pure component.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct descriptions from the NCERT treatment of Raoult\'s law and ideal solutions.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-136',
    type: 'how-many',
    question: 'How many of the following liquid pairs show positive deviation from Raoult\'s law?\n1. Ethanol and acetone\n2. Acetone and carbon disulphide\n3. Phenol and aniline\n4. Chloroform and acetone\n5. Cyclohexane and ethanol',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Ethanol-acetone, acetone-carbon disulphide, and cyclohexane-ethanol all show positive deviation. Phenol-aniline and chloroform-acetone show negative deviation due to hydrogen bonding. So 3 pairs show positive deviation.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-137',
    type: 'how-many',
    question: 'How many of the following statements about azeotropes are correct?\n1. Azeotropes boil at a constant temperature like a pure liquid.\n2. Liquid and vapour have the same composition at the azeotropic point.\n3. Azeotropes can be completely separated into pure components by fractional distillation.\n4. Ethanol-water forms a minimum boiling azeotrope at about 95% ethanol.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — azeotropes cannot be separated by fractional distillation precisely because liquid and vapour compositions are identical.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-138',
    type: 'how-many',
    question: 'How many of the following are colligative properties as defined in the NCERT chapter on solutions?\n1. Relative lowering of vapour pressure\n2. Elevation of boiling point\n3. Depression of freezing point\n4. Osmotic pressure\n5. Viscosity of the solution',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure are the four colligative properties covered. Viscosity is not a colligative property. So 4 are correct.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-139',
    type: 'how-many',
    question: 'How many of the following statements about osmosis and osmotic pressure are correct?\n1. Osmosis is the flow of solvent from a dilute to a more concentrated solution through a semipermeable membrane.\n2. Osmotic pressure of a dilute solution is given by π = CRT.\n3. Osmotic pressure is not a colligative property since it depends on the identity of the solute.\n4. Reverse osmosis requires pressure greater than the osmotic pressure to be applied on the solution side.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — osmotic pressure is a colligative property; it depends only on the number of solute particles, not on the identity of the solute.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-140',
    type: 'how-many',
    question: 'How many of the following statements about isotonic, hypertonic, and hypotonic solutions are correct?\n1. Isotonic solutions have equal osmotic pressure at a given temperature.\n2. A red blood cell placed in a hypertonic solution undergoes crenation (shrinking).\n3. A red blood cell placed in a hypotonic solution undergoes haemolysis (swelling/bursting).\n4. 0.9% (mass/volume) NaCl solution is isotonic with human blood cells.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe isotonic, hypertonic, and hypotonic solution behaviour as covered in NCERT.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-141',
    type: 'how-many',
    question: 'How many of the following statements about the van\'t Hoff factor (i) are correct?\n1. i = 1 for a solute that neither dissociates nor associates.\n2. i > 1 for a solute that dissociates into ions.\n3. i < 1 for a solute that undergoes association.\n4. i is defined as normal molar mass divided by observed (abnormal) molar mass.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the van\'t Hoff factor and its relationship to dissociation, association, and molar mass.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-142',
    type: 'how-many',
    question: 'How many of the following statements about molarity and molality are correct?\n1. Molarity is defined per litre of solution.\n2. Molality is defined per kilogram of solvent.\n3. Molarity changes with temperature because volume changes with temperature.\n4. Molality changes with temperature because mass changes with temperature.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — mass does not change with temperature, so molality remains constant with temperature.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-143',
    type: 'how-many',
    question: 'How many of the following are correctly cited as reasons preventing HCl gas from strictly obeying Henry\'s law when dissolved in water?\n1. HCl ionises extensively in aqueous solution.\n2. HCl reacts chemically with water rather than staying as simple molecular HCl.\n3. HCl has an extremely low molar mass compared to other gases.\n4. HCl gas is coloured, unlike gases that obey Henry\'s law.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 correctly explain why HCl deviates from Henry\'s law — its interaction/ionisation with water. Molar mass and colour (statements 3 and 4) are irrelevant to Henry\'s law applicability.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-144',
    type: 'how-many',
    question: 'How many of the following statements correctly distinguish an ideal solution from a non-ideal solution?\n1. An ideal solution obeys Raoult\'s law at all concentrations; a non-ideal solution does not.\n2. ΔmixH = 0 for an ideal solution but is non-zero for a non-ideal solution.\n3. ΔmixV = 0 for an ideal solution but is generally non-zero for a non-ideal solution.\n4. Non-ideal solutions can never form azeotropes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly distinguish ideal from non-ideal solutions. Statement 4 is false — azeotropes specifically arise from non-ideal solutions showing large deviations from Raoult\'s law.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-145',
    type: 'how-many',
    question: 'How many of the following statements about vapour pressure of solutions are correct?\n1. Vapour pressure of a solution containing a non-volatile solute is always lower than that of the pure solvent.\n2. Vapour pressure increases as the mole fraction of a non-volatile solute increases (at constant temperature).\n3. Relative lowering of vapour pressure equals the mole fraction of the non-volatile solute for a dilute solution.\n4. Vapour pressure lowering can be used to determine the molar mass of a non-volatile, non-electrolyte solute.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — vapour pressure decreases, not increases, as the mole fraction of non-volatile solute increases.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-146',
    type: 'how-many',
    question: 'How many of the following statements about boiling point elevation and freezing point depression are correct?\n1. ΔTb = Kb m, where m is the molality of the solution.\n2. ΔTf = Kf m, where m is the molality of the solution.\n3. Kb and Kf are properties of the solvent, not the solute.\n4. Both ΔTb and ΔTf are examples of colligative properties.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe boiling point elevation and freezing point depression as presented in NCERT.',
    difficulty: 'easy'
  },
  {
    id: 'solutions-147',
    type: 'how-many',
    question: 'How many of the following statements about reverse osmosis are correct?\n1. It requires applying pressure greater than the osmotic pressure of the solution.\n2. Pure solvent moves from the solution side to the pure solvent side under applied pressure.\n3. Cellulose acetate is a membrane commonly used in reverse osmosis.\n4. Reverse osmosis is used for desalination of sea water.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe reverse osmosis and its practical application in water desalination.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-148',
    type: 'how-many',
    question: 'How many of the following are reasons why osmotic pressure is preferred over freezing point depression for determining the molar mass of macromolecules like proteins?\n1. Osmotic pressure gives an appreciable, measurable value even for very dilute solutions of high molar mass solutes.\n2. Freezing point depression for such dilute solutions is too small to measure accurately.\n3. Osmotic pressure measurements can be conveniently made at room temperature.\n4. Macromolecules decompose when a freezing point depression experiment is attempted.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are valid, NCERT-supported reasons for preferring osmotic pressure. Statement 4 is not a standard reason given and is not generally true.',
    difficulty: 'hard'
  },
  {
    id: 'solutions-149',
    type: 'how-many',
    question: 'How many of the following statements about the van\'t Hoff factor for specific solutes are correct?\n1. For NaCl in dilute aqueous solution (complete dissociation), i is close to 2.\n2. For K2SO4 in dilute aqueous solution (complete dissociation into 3 ions), i is close to 3.\n3. For acetic acid dimerising completely in benzene, i approaches 0.5.\n4. For glucose in water, i is close to 1.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly illustrate the van\'t Hoff factor for typical dissociating, associating, and non-electrolyte solutes as commonly discussed in NCERT-based problems.',
    difficulty: 'medium'
  },
  {
    id: 'solutions-150',
    type: 'how-many',
    question: 'How many of the following statements about types of solutions and their examples are correct?\n1. Air is an example of a gas-in-gas solution.\n2. Sugar dissolved in water is a solid-in-liquid solution.\n3. Soda water is a gas-in-liquid solution.\n4. Alloys like brass are examples of solid-in-solid solutions.\n5. Hydrogen dissolved in palladium metal is an example of a gas-in-solid solution.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 3,
    explanation: 'All five statements correctly describe standard examples of the different types of solutions listed in NCERT.',
    difficulty: 'easy'
  }
];

export default questions;
