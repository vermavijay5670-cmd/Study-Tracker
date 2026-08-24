import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    id: 'sbc-1',
    type: 'mcq',
    question: 'The branch of science that studies the preparation, properties, structure and reactions of material substances is called:',
    options: ['Physics', 'Biology', 'Chemistry', 'Geology'],
    correctIndex: 2,
    explanation: 'Chemistry is the study of the preparation, properties, structure, and reactions of material substances.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-2',
    type: 'mcq',
    question: 'Modern chemistry took shape in which century and region?',
    options: ['1300-1600 CE, India', '18th century, Europe', '1000 BCE, China', '20th century, USA'],
    correctIndex: 1,
    explanation: 'Modern chemistry took shape in 18th century Europe after alchemical traditions.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-3',
    type: 'mcq',
    question: 'In ancient India, chemistry was known by which of the following names?',
    options: ['Rasayan Shastra', 'Rastantra', 'Ras Kriya', 'All of the above'],
    correctIndex: 3,
    explanation: 'Ancient Indian chemistry was called Rasayan Shastra, Rastantra, Ras Kriya, or Rasvidya.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-4',
    type: 'mcq',
    question: 'Which ancient Indian text describes the production of salt from the sea?',
    options: ['Rigveda', 'Charaka Samhita', 'Kautilya’s Arthashastra', 'Brihat Samhita'],
    correctIndex: 2,
    explanation: 'Kautilya’s Arthashastra describes the production of salt from the sea.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-5',
    type: 'mcq',
    question: 'According to the source, who is credited with inventing soap in ancient India?',
    options: ['Nagarjuna', 'Chakrapani', 'Varähmihir', 'Kashyap'],
    correctIndex: 1,
    explanation: 'The credit for inventing soap goes to Chakrapani, using mustard oil and alkalies.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-6',
    type: 'mcq',
    question: 'Who was the first proponent of the "atomic theory" in India (approx. 600 BCE)?',
    options: ['Nagarjuna', 'Sushruta', 'Acharya Kanda', 'Charaka'],
    correctIndex: 2,
    explanation: 'Acharya Kanda (originally Kashyap) was the first proponent of the atomic theory.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-7',
    type: 'mcq',
    question: 'The drug used for helping AIDS patients mentioned in the source is:',
    options: ['Cisplatin', 'Taxol', 'AZT', 'Penicillin'],
    correctIndex: 2,
    explanation: 'AZT (Azidothymidine) is used for helping AIDS patients.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-8',
    type: 'mcq',
    question: 'Which of the following is effective in cancer therapy?',
    options: ['AZT', 'Cisplatin', 'CFCs', 'Methane'],
    correctIndex: 1,
    explanation: 'Cisplatin and taxol are effective drugs in cancer therapy.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-9',
    type: 'mcq',
    question: 'Matter is defined as anything that has:',
    options: ['Mass and color', 'Weight and movement', 'Mass and occupies space', 'Volume and visibility'],
    correctIndex: 2,
    explanation: 'Anything which has mass and occupies space is called matter.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-10',
    type: 'mcq',
    question: 'In which state of matter are particles held very close in an orderly fashion with minimal movement?',
    options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
    correctIndex: 0,
    explanation: 'In solids, particles are held very close in an orderly fashion with little freedom of movement.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-11',
    type: 'mcq',
    question: 'Which of the following describes the gaseous state?',
    options: ['Definite volume, no definite shape', 'Definite shape, no definite volume', 'No definite volume, no definite shape', 'Definite shape and volume'],
    correctIndex: 2,
    explanation: 'Gases have neither definite volume nor definite shape.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-12',
    type: 'mcq',
    question: 'Matter can be classified at the macroscopic level into:',
    options: ['Atoms and Molecules', 'Elements and Compounds', 'Mixtures and Pure Substances', 'Solids and Liquids'],
    correctIndex: 2,
    explanation: 'Atoms/molecules are microscopic; mixtures/pure substances are macroscopic classifications.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-13',
    type: 'mcq',
    question: 'A mixture where components mix completely and the composition is uniform is called:',
    options: ['Heterogeneous', 'Homogeneous', 'Pure Substance', 'Element'],
    correctIndex: 1,
    explanation: 'In a homogeneous mixture, components mix completely and distribution is uniform.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-14',
    type: 'mcq',
    question: 'Which of the following is a characteristic of pure substances?',
    options: ['Variable composition', 'Fixed composition', 'Easily separated by hand-picking', 'Components retain their original physical properties'],
    correctIndex: 1,
    explanation: 'Pure substances have constituent particles with a fixed composition.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-15',
    type: 'mcq',
    question: 'Hydrogen burns with a pop sound and oxygen supports combustion, but water is used as a fire extinguisher. This shows:',
    options: ['Water is a mixture', 'Compounds have same properties as elements', 'Properties of compounds differ from elements', 'Water is an element'],
    correctIndex: 2,
    explanation: 'The properties of a compound are different from those of its constituent elements.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-16',
    type: 'mcq',
    question: 'Properties that can be measured without changing the identity of the substance are:',
    options: ['Chemical properties', 'Atomic properties', 'Physical properties', 'Reactive properties'],
    correctIndex: 2,
    explanation: 'Physical properties are measured without changing the identity or composition.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-17',
    type: 'mcq',
    question: 'The International System of Units (SI) has how many base units?',
    options: ['5', '7', '9', '12'],
    correctIndex: 1,
    explanation: 'The SI system has seven base units for fundamental scientific quantities.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-18',
    type: 'mcq',
    question: 'Which of the following is the SI unit for the amount of substance?',
    options: ['Kilogram', 'Mole', 'Candela', 'Ampere'],
    correctIndex: 1,
    explanation: 'Mole (mol) is the SI unit for the amount of substance.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-19',
    type: 'mcq',
    question: 'The SI unit of temperature is:',
    options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'],
    correctIndex: 2,
    explanation: 'Kelvin (K) is the SI unit for thermodynamic temperature.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-20',
    type: 'mcq',
    question: 'What is the relationship between the Fahrenheit and Celsius scales?',
    options: ['F = 5/9(C) + 32', 'F = 9/5(C) + 32', 'F = C + 273.15', 'F = 9/5(C - 32)'],
    correctIndex: 1,
    explanation: 'The relation is degree F = (9/5) degree C + 32.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-21',
    type: 'mcq',
    question: 'The prefix "pico" corresponds to which multiple?',
    options: ['10^-9', '10^-12', '10^-15', '10^-18'],
    correctIndex: 1,
    explanation: 'Pico (p) represents the multiple 10^-12.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-22',
    type: 'mcq',
    question: 'The prefix "femto" corresponds to which multiple?',
    options: ['10^-12', '10^-15', '10^-18', '10^-21'],
    correctIndex: 1,
    explanation: 'Femto (f) represents the multiple 10^-15.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-23',
    type: 'mcq',
    question: 'The force exerted by gravity on an object is called its:',
    options: ['Mass', 'Volume', 'Weight', 'Density'],
    correctIndex: 2,
    explanation: 'Weight is the force exerted by gravity on an object.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-24',
    type: 'mcq',
    question: 'Mass of a substance can be determined accurately in the laboratory using:',
    options: ['Spring balance', 'Graduated cylinder', 'Analytical balance', 'Burette'],
    correctIndex: 2,
    explanation: 'Mass is determined accurately using an analytical balance.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-25',
    type: 'mcq',
    question: 'What is the SI unit of density?',
    options: ['g/cm^3', 'kg/m^3', 'kg/L', 'g/mL'],
    correctIndex: 1,
    explanation: 'Density is mass/volume; in SI units it is kg/m^3.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-26',
    type: 'mcq',
    question: 'How many dm^3 are equal to 1 Litre?',
    options: ['0.1 dm^3', '1 dm^3', '10 dm^3', '100 dm^3'],
    correctIndex: 1,
    explanation: '1 L = 1000 cm^3 and 1000 cm^3 = 1 dm^3, so 1 L = 1 dm^3.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-27',
    type: 'mcq',
    question: 'Scientific notation represents numbers in the form N x 10^n, where N is between:',
    options: ['0 and 1', '1 and 10', '1 and 100', 'any value'],
    correctIndex: 1,
    explanation: 'N varies between 1.000... and 9.999...',
    difficulty: 'easy'
  },
  {
    id: 'sbc-28',
    type: 'mcq',
    question: 'Closeness of various measurements for the same quantity is called:',
    options: ['Accuracy', 'Precision', 'Certainty', 'Significant figure'],
    correctIndex: 1,
    explanation: 'Precision refers to the closeness of various measurements for the same quantity.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-29',
    type: 'mcq',
    question: 'Agreement of a particular value to the true value of the result is called:',
    options: ['Precision', 'Accuracy', 'Error', 'Uncertainty'],
    correctIndex: 1,
    explanation: 'Accuracy is the agreement of a particular value to the true value.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-30',
    type: 'mcq',
    question: 'How many significant figures are in 0.0025?',
    options: ['1', '2', '4', '5'],
    correctIndex: 1,
    explanation: 'Zeros preceding the first non-zero digit are not significant.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-31',
    type: 'mcq',
    question: 'How many significant figures are in 2.005?',
    options: ['1', '2', '3', '4'],
    correctIndex: 3,
    explanation: 'Zeros between two non-zero digits are significant.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-32',
    type: 'mcq',
    question: 'How many significant figures are in 100.0?',
    options: ['1', '2', '3', '4'],
    correctIndex: 3,
    explanation: 'Zeros at the end are significant if they are to the right of the decimal point.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-33',
    type: 'mcq',
    question: 'How many significant figures are in 0.200?',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: 'Terminal zeros on the right side of the decimal point are significant.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-34',
    type: 'mcq',
    question: 'Exactly 20 eggs have how many significant figures?',
    options: ['1', '2', 'Infinity', 'Uncertain'],
    correctIndex: 2,
    explanation: 'Exact numbers have infinite significant figures.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-35',
    type: 'mcq',
    question: 'For addition of 12.11, 18.0, and 1.012, the result should be reported to how many decimal places?',
    options: ['0', '1', '2', '3'],
    correctIndex: 1,
    explanation: 'The result cannot have more digits to the right of the decimal than the least precise measurement (18.0 has one).',
    difficulty: 'medium'
  },
  {
    id: 'sbc-36',
    type: 'mcq',
    question: 'In rounding off 6.35 to two significant figures, the result is:',
    options: ['6.3', '6.4', '6.0', '6.35'],
    correctIndex: 1,
    explanation: 'If the digit to be removed is 5, the preceding odd number is increased by 1.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-37',
    type: 'mcq',
    question: 'In rounding off 6.25 to two significant figures, the result is:',
    options: ['6.2', '6.3', '6.0', '6.25'],
    correctIndex: 0,
    explanation: 'If the digit to be removed is 5, the preceding even number is not changed.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-38',
    type: 'mcq',
    question: 'The method used to convert units from one system to another is:',
    options: ['Scientific notation', 'Dimensional analysis', 'Stoichiometry', 'Formula analysis'],
    correctIndex: 1,
    explanation: 'Dimensional analysis (or factor label method) is used for unit conversion.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-39',
    type: 'mcq',
    question: 'How many seconds are in 2 days?',
    options: ['4800 s', '86400 s', '172800 s', '3600 s'],
    correctIndex: 2,
    explanation: '2 days x 24 h/day x 60 min/h x 60 s/min = 172800 s.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-40',
    type: 'mcq',
    question: 'Who put forth the Law of Conservation of Mass in 1789?',
    options: ['Joseph Proust', 'Antoine Lavoisier', 'John Dalton', 'Joseph Gay Lussac'],
    correctIndex: 1,
    explanation: 'Antoine Lavoisier proposed this law based on experimental combustion studies.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-41',
    type: 'mcq',
    question: 'The Law of Definite Proportions was given by:',
    options: ['John Dalton', 'Antoine Lavoisier', 'Joseph Proust', 'Amedeo Avogadro'],
    correctIndex: 2,
    explanation: 'Joseph Proust stated that a compound always contains the same proportion of elements by weight.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-42',
    type: 'mcq',
    question: 'The Law of Multiple Proportions was proposed by Dalton in:',
    options: ['1789', '1803', '1808', '1811'],
    correctIndex: 1,
    explanation: 'John Dalton proposed the Law of Multiple Proportions in 1803.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-43',
    type: 'mcq',
    question: 'Which law states that if two elements form more than one compound, the masses of one combining with a fixed mass of the other are in small whole number ratios?',
    options: ['Conservation of Mass', 'Definite Proportions', 'Multiple Proportions', 'Avogadro’s Law'],
    correctIndex: 2,
    explanation: 'This is the statement of the Law of Multiple Proportions.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-44',
    type: 'mcq',
    question: 'Gay Lussac’s law of gaseous volumes states that gases react in simple ratios by volume provided:',
    options: ['Mass is constant', 'Density is constant', 'Temperature and pressure are constant', 'Gravity is constant'],
    correctIndex: 2,
    explanation: 'All gases must be at the same temperature and pressure for the volume ratios to hold.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-45',
    type: 'mcq',
    question: 'In 1811, who proposed that equal volumes of gases at same T and P contain equal number of molecules?',
    options: ['Gay Lussac', 'Dalton', 'Avogadro', 'Cannizaro'],
    correctIndex: 2,
    explanation: 'Amedeo Avogadro proposed this law, distinguishing between atoms and molecules.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-46',
    type: 'mcq',
    question: 'Dalton’s atomic theory was published in "A New System of Chemical Philosophy" in:',
    options: ['1803', '1808', '1811', '1860'],
    correctIndex: 1,
    explanation: 'Dalton published his atomic theory in 1808.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-47',
    type: 'mcq',
    question: 'Which of the following was NOT a postulate of Dalton’s atomic theory?',
    options: ['Matter consists of indivisible atoms', 'All atoms of an element have identical properties', 'Atoms are created in chemical reactions', 'Compounds form when atoms combine in fixed ratios'],
    correctIndex: 2,
    explanation: 'Dalton stated atoms are neither created nor destroyed.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-48',
    type: 'mcq',
    question: 'A limitation of Dalton’s atomic theory was that it could NOT explain:',
    options: ['Law of conservation of mass', 'Law of multiple proportions', 'Law of gaseous volumes', 'Law of definite proportions'],
    correctIndex: 2,
    explanation: 'Dalton’s theory explained mass laws but not Gay Lussac’s law of gaseous volumes.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-49',
    type: 'mcq',
    question: 'One atomic mass unit (amu) is defined as a mass exactly equal to:',
    options: ['Mass of H atom', '1/16th mass of O atom', '1/12th mass of C-12 atom', 'Mass of a neutron'],
    correctIndex: 2,
    explanation: '1 amu is 1/12th the mass of one Carbon-12 atom.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-50',
    type: 'mcq',
    question: 'The value of 1 amu in grams is:',
    options: ['6.022 x 10^-23 g', '1.66056 x 10^-24 g', '1.008 g', '9.1 x 10^-31 g'],
    correctIndex: 1,
    explanation: '1 amu = 1.66056 x 10^-24 g.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-51',
    type: 'mcq',
    question: 'At present, "amu" has been replaced by which symbol?',
    options: ['m', 'u', 'a', 'g'],
    correctIndex: 1,
    explanation: 'amu is now replaced by "u" (unified mass).',
    difficulty: 'easy'
  },
  {
    id: 'sbc-52',
    type: 'mcq',
    question: 'When we use atomic masses in calculations, we actually use:',
    options: ['The mass of the most abundant isotope', 'The mass of the lightest isotope', 'Average atomic mass', 'Formula mass'],
    correctIndex: 2,
    explanation: 'Calculations use average atomic mass considering natural isotopes and abundance.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-53',
    type: 'mcq',
    question: 'Molecular mass of Methane (CH4) is approximately:',
    options: ['12.011 u', '16.043 u', '18.02 u', '2.016 u'],
    correctIndex: 1,
    explanation: 'CH4 = 12.011 + 4(1.008) = 16.043 u.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-54',
    type: 'mcq',
    question: 'Molecular mass of Water (H2O) is approximately:',
    options: ['16.00 u', '18.02 u', '17.01 u', '2.02 u'],
    correctIndex: 1,
    explanation: 'H2O = 2(1.008) + 16.00 = 18.016 (approx 18.02) u.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-55',
    type: 'mcq',
    question: 'For substances like NaCl, the constituent units are positive and negative ions. For these, we calculate:',
    options: ['Molecular mass', 'Isotopic mass', 'Formula mass', 'Equivalent mass'],
    correctIndex: 2,
    explanation: 'Formula mass is used for compounds that do not contain discrete molecules.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-56',
    type: 'mcq',
    question: 'In sodium chloride crystal, one Na+ ion is surrounded by how many Cl- ions?',
    options: ['4', '6', '8', '12'],
    correctIndex: 1,
    explanation: 'Each Na+ is surrounded by 6 Cl- ions and vice-versa.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-57',
    type: 'mcq',
    question: 'The formula mass of NaCl is:',
    options: ['23.0 u', '35.5 u', '58.5 u', '40.0 u'],
    correctIndex: 2,
    explanation: 'NaCl = 23.0 + 35.5 = 58.5 u.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-58',
    type: 'mcq',
    question: 'What is the molecular mass of Glucose (C6H12O6)?',
    options: ['100.0 u', '180.162 u', '342.3 u', '150.5 u'],
    correctIndex: 1,
    explanation: 'C6H12O6 = 6(12.011) + 12(1.008) + 6(16.00) = 180.162 u.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-59',
    type: 'mcq',
    question: 'One mole of any substance contains exactly how many entities?',
    options: ['1.66 x 10^-24', '6.02214076 x 10^23', '3.0 x 10^8', '1.38 x 10^-23'],
    correctIndex: 1,
    explanation: 'This fixed numerical value is the Avogadro constant.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-60',
    type: 'mcq',
    question: 'The mass of one mole of a substance in grams is called its:',
    options: ['Molecular mass', 'Molar mass', 'Atomic mass', 'Formula mass'],
    correctIndex: 1,
    explanation: 'Molar mass is mass per mole, numerically equal to atomic/molecular mass but in grams.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-61',
    type: 'mcq',
    question: 'The molar mass of water is:',
    options: ['18.02 u', '18.02 g/mol', '1.008 g/mol', '16.00 g/mol'],
    correctIndex: 1,
    explanation: 'Molar mass is expressed in g/mol.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-62',
    type: 'mcq',
    question: 'The ratio of simple whole numbers of various atoms in a compound is its:',
    options: ['Molecular formula', 'Empirical formula', 'Chemical formula', 'Atomic formula'],
    correctIndex: 1,
    explanation: 'Empirical formula represents the simplest whole number ratio.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-63',
    type: 'mcq',
    question: 'Which formula shows the exact number of atoms of each type in a molecule?',
    options: ['Empirical formula', 'Molecular formula', 'Structural formula', 'Simplest formula'],
    correctIndex: 1,
    explanation: 'Molecular formula gives the exact counts of atoms.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-64',
    type: 'mcq',
    question: 'To find the molecular formula from the empirical formula, we multiply it by "n". Here n is:',
    options: ['Empirical mass / Molar mass', 'Molar mass / Empirical mass', 'Atomic mass / Molar mass', 'Avogadro constant'],
    correctIndex: 1,
    explanation: 'n = Molar mass / Empirical formula mass.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-65',
    type: 'mcq',
    question: 'If a compound has mass % H=4.07, C=24.27, Cl=71.65, its empirical formula is:',
    options: ['CH2Cl', 'CHCl2', 'C2HCl', 'CH2Cl2'],
    correctIndex: 0,
    explanation: 'Molar ratios lead to 1:2:1 for C:H:Cl.',
    difficulty: 'hard'
  },
  {
    id: 'sbc-66',
    type: 'mcq',
    question: 'The word "stoichiometry" is derived from Greek words meaning:',
    options: ['Atom measure', 'Element measure', 'Mole measure', 'Change measure'],
    correctIndex: 1,
    explanation: 'Stoicheion (element) + metron (measure).',
    difficulty: 'easy'
  },
  {
    id: 'sbc-67',
    type: 'mcq',
    question: 'In the balanced equation CH4 + 2O2 -> CO2 + 2H2O, the coefficients represent:',
    options: ['Grams', 'Molecules and Moles', 'Density', 'Volume in mL only'],
    correctIndex: 1,
    explanation: 'Stoichiometric coefficients represent the relative number of molecules or moles.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-68',
    type: 'mcq',
    question: 'What mass of water is produced by the combustion of 16 g of methane?',
    options: ['18 g', '36 g', '44 g', '16 g'],
    correctIndex: 1,
    explanation: '16g CH4 = 1 mol; 1 mol CH4 gives 2 mol H2O = 2 x 18 = 36g.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-69',
    type: 'mcq',
    question: 'The reactant that gets consumed first and limits the product formation is:',
    options: ['Excess reagent', 'Limiting reagent', 'Catalyst', 'Stable reagent'],
    correctIndex: 1,
    explanation: 'The limiting reagent is consumed first and limits the product.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-70',
    type: 'mcq',
    question: 'Number of moles of solute in 1 litre of solution is:',
    options: ['Molality', 'Molarity', 'Mole fraction', 'Mass percent'],
    correctIndex: 1,
    explanation: 'This is the definition of Molarity (M).',
    difficulty: 'easy'
  },
  {
    id: 'sbc-71',
    type: 'mcq',
    question: 'Number of moles of solute in 1 kg of solvent is:',
    options: ['Molarity', 'Molality', 'Normality', 'Parts per million'],
    correctIndex: 1,
    explanation: 'This is the definition of Molality (m).',
    difficulty: 'easy'
  },
  {
    id: 'sbc-72',
    type: 'mcq',
    question: 'Which of the following units depends on temperature?',
    options: ['Mass percent', 'Mole fraction', 'Molarity', 'Molality'],
    correctIndex: 2,
    explanation: 'Molarity depends on volume, which changes with temperature.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-73',
    type: 'mcq',
    question: 'Which unit is independent of temperature?',
    options: ['Molarity', 'Volume percent', 'Molality', 'Normality'],
    correctIndex: 2,
    explanation: 'Molality is based on mass, which is temperature independent.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-74',
    type: 'mcq',
    question: 'The sum of mole fractions of all components in a solution is:',
    options: ['0', '1', '100', 'variable'],
    correctIndex: 1,
    explanation: 'Mole fraction is a ratio; the sum of all parts equals 1.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-75',
    type: 'mcq',
    question: 'A concentrated solution from which lower concentrations are prepared is the:',
    options: ['Standard solution', 'Mother liquor', 'Stock solution', 'Saturated solution'],
    correctIndex: 2,
    explanation: 'The higher concentration solution is also called the stock solution.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-76',
    type: 'mcq',
    question: 'Mass percent of a solute is calculated as:',
    options: ['Mass of solute / Mass of solvent x 100', 'Mass of solute / Mass of solution x 100', 'Mass of solvent / Mass of solution x 100', 'Moles of solute / Mass of solution x 100'],
    correctIndex: 1,
    explanation: 'It is the mass of component per total mass of solution x 100.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-77',
    type: 'mcq',
    question: 'If 2 g of substance A is added to 18 g of water, the mass % of A is:',
    options: ['2%', '10%', '11.1%', '20%'],
    correctIndex: 1,
    explanation: '2 / (2+18) x 100 = 2/20 x 100 = 10%.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-78',
    type: 'mcq',
    question: 'The SI unit for length is the metre, which is defined by the speed of:',
    options: ['Sound', 'Light', 'Earth rotation', 'Water flow'],
    correctIndex: 1,
    explanation: 'Metre is defined by the speed of light in vacuum c.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-79',
    type: 'mcq',
    question: 'Atomic mass of Hydrogen is assigned exactly 1 in which historical scale?',
    options: ['Current scale', 'Oxygen scale', 'Initial relative scale', 'Mass spectrometry scale'],
    correctIndex: 2,
    explanation: 'Initially, hydrogen (the lightest) was assigned 1 and others relative to it.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-80',
    type: 'mcq',
    question: 'Relative atomic mass of Oxygen-16 is approx:',
    options: ['12.000 u', '1.008 u', '15.995 u', '32.000 u'],
    correctIndex: 2,
    explanation: 'Oxygen-16 is 15.995 u relative to C-12.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-81',
    type: 'mcq',
    question: 'Which of the following isotopes of carbon is the standard for atomic mass since 1961?',
    options: ['C-11', 'C-12', 'C-13', 'C-14'],
    correctIndex: 1,
    explanation: 'The current system is based on C-12 as exactly 12 u.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-82',
    type: 'mcq',
    question: 'The mass of one atom of Carbon-12 is 1.992648 x 10^-23 g. Avogadro number is derived by dividing:',
    options: ['1 g by this mass', '12 g by this mass', '1 amu by this mass', 'this mass by 12'],
    correctIndex: 1,
    explanation: '12 g/mol divided by the mass of one atom gives the count per mole.',
    difficulty: 'hard'
  },
  {
    id: 'sbc-83',
    type: 'mcq',
    question: 'What is the mass percentage of oxygen in water?',
    options: ['11.18%', '88.79%', '50%', '16%'],
    correctIndex: 1,
    explanation: '(16.00 / 18.02) x 100 = 88.79%.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-84',
    type: 'mcq',
    question: 'The number of significant figures in 0.0052 is:',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'Leading zeros are not significant.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-85',
    type: 'mcq',
    question: 'Terminal zeros in 100 are not significant, but in 100. they are. How many sig figs are in 100. ?',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: 'The decimal point makes the terminal zeros significant.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-86',
    type: 'mcq',
    question: 'A balance used for high precision in the lab is:',
    options: ['Spring balance', 'Platform balance', 'Analytical balance', 'Physical balance'],
    correctIndex: 2,
    explanation: 'Analytical balances give much higher precision (more decimal places).',
    difficulty: 'easy'
  },
  {
    id: 'sbc-87',
    type: 'mcq',
    question: 'What is the volume in m^3 of 2L of milk?',
    options: ['2 x 10^-3 m^3', '2 x 10^-6 m^3', '2 x 10^3 m^3', '0.2 m^3'],
    correctIndex: 0,
    explanation: '2 L = 2000 cm^3; 1 m^3 = 10^6 cm^3. So 2000/10^6 = 2 x 10^-3.',
    difficulty: 'hard'
  },
  {
    id: 'sbc-88',
    type: 'mcq',
    question: 'According to Dalton, compounds are formed when atoms combine in:',
    options: ['Any ratio', 'Fixed ratio', 'Variable ratio', 'Gaseous ratio only'],
    correctIndex: 1,
    explanation: 'Postulate 3 states atoms combine in fixed ratios to form compounds.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-89',
    type: 'mcq',
    question: 'The prefix "micro" corresponds to:',
    options: ['10^-3', '10^-6', '10^-9', '10^-12'],
    correctIndex: 1,
    explanation: 'Micro (µ) represents 10^-6.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-90',
    type: 'mcq',
    question: 'How many significant figures in 208?',
    options: ['1', '2', '3', 'infinite'],
    correctIndex: 2,
    explanation: 'Zeros between non-zero digits are significant.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-91',
    type: 'mcq',
    question: 'Which of the following is NOT an SI base unit?',
    options: ['Ampere', 'Candela', 'Litre', 'Metre'],
    correctIndex: 2,
    explanation: 'Litre is a common unit but not the SI base unit (which is m^3).',
    difficulty: 'medium'
  },
  {
    id: 'sbc-92',
    type: 'mcq',
    question: 'Law of Multiple Proportions was tested using:',
    options: ['Cupric carbonate', 'Water and Hydrogen peroxide', 'Salt and Sugar', 'Gases at STP only'],
    correctIndex: 1,
    explanation: 'H2O and H2O2 provide an example of fixed H combining with variable O.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-93',
    type: 'mcq',
    question: 'Avogadro number entities in 1 mol is approx:',
    options: ['6.022 x 10^22', '6.022 x 10^23', '6.022 x 10^24', '1.66 x 10^-24'],
    correctIndex: 1,
    explanation: 'Standard Avogadro constant value.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-94',
    type: 'mcq',
    question: 'Formula mass of Na2SO4. Atomic masses: Na=23, S=32, O=16.',
    options: ['126 u', '142 u', '110 u', '150 u'],
    correctIndex: 1,
    explanation: '2(23) + 32 + 4(16) = 46 + 32 + 64 = 142 u.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-95',
    type: 'mcq',
    question: 'In scientific notation, 0.00016 is:',
    options: ['16 x 10^-5', '1.6 x 10^-4', '0.16 x 10^-3', '1.6 x 10^4'],
    correctIndex: 1,
    explanation: 'Shift decimal 4 places to the right.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-96',
    type: 'mcq',
    question: 'Symbol for the SI base unit of Luminous intensity is:',
    options: ['lm', 'cd', 'lv', 'A'],
    correctIndex: 1,
    explanation: 'The unit is candela, symbol cd.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-97',
    type: 'mcq',
    question: 'Which of the following is a chemical property?',
    options: ['Melting point', 'Boiling point', 'Combustibility', 'Density'],
    correctIndex: 2,
    explanation: 'Combustibility requires a chemical change to be observed.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-98',
    type: 'mcq',
    question: 'Matter cannot be created or destroyed in chemical reactions is:',
    options: ['Dalton’s Postulate', 'Law of Conservation of Mass', 'Both A and B', 'Neither'],
    correctIndex: 2,
    explanation: 'It is both a law (Lavoisier) and a postulate in Dalton’s theory.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-99',
    type: 'mcq',
    question: 'Density of 3M NaCl solution is 1.25 g/mL. Mass of 1L solution is:',
    options: ['1000 g', '1250 g', '1175 g', '800 g'],
    correctIndex: 1,
    explanation: '1000 mL x 1.25 g/mL = 1250 g.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-100',
    type: 'mcq',
    question: 'Mole fraction of solute in a solution of solute A in solvent B is:',
    options: ['nA / nB', 'nA / (nA + nB)', 'nB / (nA + nB)', 'nA x nB'],
    correctIndex: 1,
    explanation: 'Ratio of component moles to total moles.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-101',
    type: 'mcq',
    question: 'A balanced chemical equation has same number of atoms on both sides. This obeys:',
    options: ['Law of Definite Proportions', 'Law of Conservation of Mass', 'Avogadro’s Law', 'Gay Lussac’s Law'],
    correctIndex: 1,
    explanation: 'Mass is conserved when atom counts remain the same.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-102',
    type: 'mcq',
    question: 'The prefix for 10^9 is:',
    options: ['Mega', 'Giga', 'Tera', 'Peta'],
    correctIndex: 1,
    explanation: 'Giga (G) corresponds to 10^9.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-103',
    type: 'mcq',
    question: 'The standard of mass (Pt-Ir cylinder) is kept in:',
    options: ['New Delhi', 'London', 'Sevres (France)', 'Washington'],
    correctIndex: 2,
    explanation: 'It is stored at the International Bureau of Weights and Measures in France.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-104',
    type: 'mcq',
    question: '0.50 mol Na2CO3 and 0.50 M Na2CO3 are different because:',
    options: ['One is mass, one is volume', 'One is amount, one is concentration', 'They are the same', 'One is molality'],
    correctIndex: 1,
    explanation: 'Mole is an amount; Molarity (M) is a concentration (moles per litre).',
    difficulty: 'medium'
  },
  {
    id: 'sbc-105',
    type: 'mcq',
    question: 'A mixture of salt and sugar is:',
    options: ['Homogeneous', 'Heterogeneous', 'Pure substance', 'Element'],
    correctIndex: 1,
    explanation: 'The composition is not uniform throughout.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-106',
    type: 'mcq',
    question: 'Avogadro made a clear distinction between:',
    options: ['Protons and Electrons', 'Atoms and Molecules', 'Mass and Weight', 'Mixtures and Compounds'],
    correctIndex: 1,
    explanation: 'This was a key contribution in 1811 to explain gaseous volumes.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-107',
    type: 'mcq',
    question: 'One molecule of methane (CH4) contains how many atoms?',
    options: ['1', '4', '5', '6'],
    correctIndex: 2,
    explanation: '1 Carbon + 4 Hydrogen = 5 atoms.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-108',
    type: 'mcq',
    question: 'Atomic mass of Chlorine (average) is 35.5 u. This is calculated from:',
    options: ['Density', 'Isotopic abundance', 'Molar volume', 'Atomic number'],
    correctIndex: 1,
    explanation: 'Average atomic mass takes into account isotopes like Cl-35 and Cl-37.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-109',
    type: 'mcq',
    question: 'If n = 2 and empirical formula is CH2Cl, the molecular formula is:',
    options: ['CH2Cl', 'C2H4Cl2', 'C2H2Cl', 'CHCl2'],
    correctIndex: 1,
    explanation: 'Multiply each atom count by 2.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-110',
    type: 'mcq',
    question: 'In the reaction N2 + 3H2 -> 2NH3, how many moles of H2 react with 1 mole of N2?',
    options: ['1', '2', '3', '6'],
    correctIndex: 2,
    explanation: 'The stoichiometric coefficient of H2 is 3.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-111',
    type: 'mcq',
    question: 'Which of the following is NOT a pure substance?',
    options: ['Copper', 'Water', 'Glucose', 'Air'],
    correctIndex: 3,
    explanation: 'Air is a mixture of gases.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-112',
    type: 'mcq',
    question: '10 volumes of dihydrogen react with 5 volumes of dioxygen to give how many volumes of water vapour?',
    options: ['5', '10', '15', '20'],
    correctIndex: 1,
    explanation: 'Ratio is 2:1:2 (H2:O2:H2O). 10:5 gives 10.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-113',
    type: 'mcq',
    question: 'The prefix for 10^-1 is:',
    options: ['deca', 'deci', 'centi', 'milli'],
    correctIndex: 1,
    explanation: 'Deci (d) represents 10^-1.',
    difficulty: 'easy'
  },
  {
    id: 'sbc-114',
    type: 'mcq',
    question: 'Which temperature scale allows negative values?',
    options: ['Celsius', 'Kelvin', 'Both', 'Neither'],
    correctIndex: 0,
    explanation: 'Negative values are not possible in the Kelvin scale.',
    difficulty: 'medium'
  },
  {
    id: 'sbc-115',
    type: 'mcq',
    question: 'How many significant figures in 5005?',
    options: ['1', '2', '3', '4'],
    correctIndex: 3,
    explanation: 'Zeros between non-zero digits are significant.',
    difficulty: 'easy'
  }
];

export default questions;
