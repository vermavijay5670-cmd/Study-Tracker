import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    id: 'thermo-1',
    type: 'mcq',
    question: 'A system which can exchange both matter and energy with the surroundings is called a/an:',
    options: ['Open system', 'Closed system', 'Isolated system', 'Adiabatic system'],
    correctIndex: 0,
    explanation: 'In an open system, there is exchange of both energy and matter between the system and surroundings.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-2',
    type: 'mcq',
    question: 'The presence of reactants in a closed vessel made of conducting material like copper is an example of a:',
    options: ['Isolated system', 'Closed system', 'Open system', 'Heterogeneous system'],
    correctIndex: 1,
    explanation: 'In a closed system, there is no exchange of matter, but exchange of energy is possible.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-3',
    type: 'mcq',
    question: 'A thermos flask containing hot coffee is a practical example of which system?',
    options: ['Closed system', 'Open system', 'Isolated system', 'Adiabatic system'],
    correctIndex: 2,
    explanation: 'In an isolated system, there is no exchange of energy or matter between the system and surroundings. A thermos flask is a closed insulated vessel.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-4',
    type: 'mcq',
    question: 'Which of the following is NOT a state function?',
    options: ['Internal energy (U)', 'Enthalpy (H)', 'Work (w)', 'Entropy (S)'],
    correctIndex: 2,
    explanation: 'State functions like U, H, and S depend only on the state of the system and not on the path. Work (w) and heat (q) are path functions [3-6].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-5',
    type: 'mcq',
    question: 'Identify the intensive property among the following:',
    options: ['Mass', 'Volume', 'Internal energy', 'Density'],
    correctIndex: 3,
    explanation: 'Intensive properties do not depend on the quantity or size of matter present. Density, temperature, and pressure are intensive.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-6',
    type: 'mcq',
    question: 'Which of the following is an extensive property?',
    options: ['Pressure', 'Molar heat capacity', 'Enthalpy', 'Temperature'],
    correctIndex: 2,
    explanation: 'Extensive properties depend on the quantity of matter. Enthalpy, mass, and volume are extensive.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-7',
    type: 'mcq',
    question: 'If a partition is made in a container halving the volume, which property remains unchanged?',
    options: ['Mass', 'Enthalpy', 'Entropy', 'Temperature'],
    correctIndex: 3,
    explanation: 'Temperature is an intensive property and does not change when the system is divided.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-8',
    type: 'mcq',
    question: 'According to IUPAC conventions, work done by the system is:',
    options: ['Positive', 'Negative', 'Zero', 'Depends on temperature'],
    correctIndex: 1,
    explanation: 'If work is done by the system, internal energy decreases, so work (w) is assigned a negative sign.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-9',
    type: 'mcq',
    question: 'In an adiabatic process, which of the following is true?',
    options: ['q = 0', 'w = 0', 'ΔU = 0', 'ΔV = 0'],
    correctIndex: 0,
    explanation: 'An adiabatic process is one in which there is no transfer of heat between the system and surroundings (q = 0).',
    difficulty: 'easy'
  },
  {
    id: 'thermo-10',
    type: 'mcq',
    question: 'The mathematical statement of the First Law of Thermodynamics is:',
    options: ['ΔU = q - w', 'ΔU = q + w', 'q = ΔU + w', 'ΔH = ΔU + PΔV'],
    correctIndex: 1,
    explanation: 'The mathematical statement is ΔU = q + w, representing the conservation of energy [11, 12].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-11',
    type: 'mcq',
    question: 'A system absorbs 701 J of heat and does 394 J of work. What is the change in internal energy?',
    options: ['+1095 J', '+307 J', '-307 J', '-1095 J'],
    correctIndex: 1,
    explanation: 'Using ΔU = q + w. Here q = +701 J (absorbed) and w = -394 J (work done by system). ΔU = 701 - 394 = +307 J.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-12',
    type: 'mcq',
    question: 'Which condition is true for the free expansion of an ideal gas in a vacuum?',
    options: ['w = 0, q > 0', 'w > 0, q = 0', 'w = 0, q = 0, ΔU = 0', 'w < 0, q < 0'],
    correctIndex: 2,
    explanation: 'In vacuum, p_ex = 0, so w = 0. For an ideal gas, experiments show q = 0, thus ΔU = 0 [14, 15].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-13',
    type: 'mcq',
    question: 'Isothermal expansion of an ideal gas into vacuum is both isothermal and:',
    options: ['Adiabatic', 'Isobaric', 'Isochoric', 'Reversible'],
    correctIndex: 0,
    explanation: 'Since q = 0 and ΔU = 0, the process is also adiabatic.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-14',
    type: 'mcq',
    question: 'Work done in a reversible isothermal expansion of n moles of an ideal gas is given by:',
    options: ['w = -nRT ln(Vf/Vi)', 'w = -P_ex ΔV', 'w = nRT log(Vf/Vi)', 'w = -2.303 nRT log(Vi/Vf)'],
    correctIndex: 0,
    explanation: 'For reversible isothermal expansion, w_rev = -nRT ln(Vf/Vi) or -2.303 nRT log(Vf/Vi).',
    difficulty: 'medium'
  },
  {
    id: 'thermo-15',
    type: 'mcq',
    question: 'A process that proceeds infinitely slowly through a series of equilibrium states is called:',
    options: ['Irreversible process', 'Adiabatic process', 'Reversible process', 'Spontaneous process'],
    correctIndex: 2,
    explanation: 'A reversible process proceeds infinitely slowly such that the system and surroundings are always in near equilibrium.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-16',
    type: 'mcq',
    question: 'The change in internal energy (ΔU) for an adiabatic process is equal to:',
    options: ['Adiabatic work (w_ad)', 'Heat (q)', 'PΔV work', 'Zero'],
    correctIndex: 0,
    explanation: 'In an adiabatic process q = 0, so ΔU = q + w becomes ΔU = w_ad [9, 17].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-17',
    type: 'mcq',
    question: 'Heat absorbed at constant volume (q_V) is equal to:',
    options: ['ΔH', 'ΔU', 'w', 'PΔV'],
    correctIndex: 1,
    explanation: 'At constant volume ΔV = 0, so w = 0. Thus ΔU = q_V [15, 18].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-18',
    type: 'mcq',
    question: 'The relationship between enthalpy (H) and internal energy (U) is defined as:',
    options: ['H = U - PV', 'H = U + PV', 'H = q + w', 'H = U + TS'],
    correctIndex: 1,
    explanation: 'Enthalpy H is defined as H = U + pV.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-19',
    type: 'mcq',
    question: 'Heat absorbed by the system at constant pressure (q_p) is equal to:',
    options: ['ΔU', 'ΔS', 'ΔH', 'ΔG'],
    correctIndex: 2,
    explanation: 'At constant pressure, the heat change measured is the change in enthalpy (ΔH = q_p) [4, 19].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-20',
    type: 'mcq',
    question: 'For a reaction involving gases, ΔH and ΔU are related by:',
    options: ['ΔH = ΔU + Δn_g RT', 'ΔU = ΔH + Δn_g RT', 'ΔH = ΔU - Δn_g RT', 'ΔH = ΔU + RT'],
    correctIndex: 0,
    explanation: 'Assuming ideal gas behavior, pΔV = Δn_g RT, so ΔH = ΔU + Δn_g RT.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-21',
    type: 'mcq',
    question: 'Calculate Δn_g for the reaction: C(s) + O2(g) → CO2(g)',
    options: ['1', '0', '-1', '2'],
    correctIndex: 1,
    explanation: 'Δn_g = moles of gaseous products - moles of gaseous reactants. Here 1 (CO2) - 1 (O2) = 0. Carbon is solid [20, 21].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-22',
    type: 'mcq',
    question: 'For which of the following reactions is ΔH = ΔU?',
    options: ['H2(g) + Cl2(g) → 2HCl(g)', 'PCl5(g) → PCl3(g) + Cl2(g)', 'N2(g) + 3H2(g) → 2NH3(g)', '2CO(g) + O2(g) → 2CO2(g)'],
    correctIndex: 0,
    explanation: 'ΔH = ΔU when Δn_g = 0. For H2 + Cl2 → 2HCl, Δn_g = 2 - (1+1) = 0.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-23',
    type: 'mcq',
    question: 'The quantity of heat needed to raise the temperature of one mole of a substance by 1 K is called:',
    options: ['Specific heat capacity', 'Molar heat capacity', 'Heat capacity', 'Molar enthalpy'],
    correctIndex: 1,
    explanation: 'Molar heat capacity (C_m) is the heat needed to raise 1 mole of substance by 1 degree.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-24',
    type: 'mcq',
    question: 'The relationship between C_p and C_V for an ideal gas is:',
    options: ['C_V - C_p = R', 'C_p - C_V = R', 'C_p + C_V = R', 'C_p / C_V = R'],
    correctIndex: 1,
    explanation: 'For an ideal gas, C_p - C_V = R.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-25',
    type: 'mcq',
    question: 'A bomb calorimeter measures energy changes at:',
    options: ['Constant pressure', 'Constant temperature', 'Constant volume', 'Standard pressure'],
    correctIndex: 2,
    explanation: 'A bomb calorimeter is a sealed steel vessel, so volume is constant (ΔV = 0), measuring ΔU.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-26',
    type: 'mcq',
    question: 'In an exothermic reaction, the value of ΔH is always:',
    options: ['Positive', 'Negative', 'Zero', 'Undefined'],
    correctIndex: 1,
    explanation: 'Exothermic reactions evolve heat, so the system loses enthalpy (ΔH is negative) [19, 25].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-27',
    type: 'mcq',
    question: 'The standard state of a substance is its pure form at:',
    options: ['1 atm and 273 K', '1 bar at a specified temperature', '1 bar and 0 K', '1 atm and 298 K'],
    correctIndex: 1,
    explanation: 'The standard state of a substance at a specified temperature is its pure form at 1 bar [26, 27].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-28',
    type: 'mcq',
    question: 'The reference state (most stable state) of Carbon at 298 K and 1 bar is:',
    options: ['Diamond', 'Graphite', 'C60 fullerene', 'Coal'],
    correctIndex: 1,
    explanation: 'The reference state of carbon is graphite.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-29',
    type: 'mcq',
    question: 'The standard enthalpy of formation (ΔfH°) of an element in its reference state is:',
    options: ['Unity', 'Zero', 'Maximum', 'Depends on temperature'],
    correctIndex: 1,
    explanation: 'By convention, ΔfH° of an element in its most stable state of aggregation is taken as zero [29, 30].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-30',
    type: 'mcq',
    question: 'Calculate ΔrH° for: CaCO3(s) → CaO(s) + CO2(g), given ΔfH° are -1206.9, -635.1, and -393.5 kJ/mol respectively.',
    options: ['-178.3 kJ/mol', '+178.3 kJ/mol', '+945.3 kJ/mol', '-945.3 kJ/mol'],
    correctIndex: 1,
    explanation: 'ΔrH° = [ΔfH°(CaO) + ΔfH°(CO2)] - [ΔfH°(CaCO3)] = [-635.1 + (-393.5)] - [-1206.9] = +178.3 kJ/mol.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-31',
    type: 'mcq',
    question: '"If a reaction takes place in several steps, the overall enthalpy change is the sum of intermediate steps." This is:',
    options: ["Lavoisier's Law", "Hess's Law", "Kirchhoff's Law", "Joule's Law"],
    correctIndex: 1,
    explanation: "Hess's Law of Constant Heat Summation states that enthalpy change is independent of the path.",
    difficulty: 'easy'
  },
  {
    id: 'thermo-32',
    type: 'mcq',
    question: 'Standard enthalpy of combustion (ΔcH°) is always:',
    options: ['Positive', 'Negative', 'Zero', 'Varies'],
    correctIndex: 1,
    explanation: 'Combustion reactions are exothermic, meaning they always release heat (ΔH is negative).',
    difficulty: 'easy'
  },
  {
    id: 'thermo-33',
    type: 'mcq',
    question: 'Enthalpy of atomization for dihydrogen (H2 → 2H) is exactly equal to its:',
    options: ['Mean bond enthalpy', 'Bond dissociation enthalpy', 'Enthalpy of formation', 'Lattice enthalpy'],
    correctIndex: 1,
    explanation: 'For diatomic molecules, the enthalpy of atomization is the same as the bond dissociation enthalpy [34, 35].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-34',
    type: 'mcq',
    question: 'The enthalpy change for breaking 1 mole of a particular bond in a gaseous molecule to form gaseous products is:',
    options: ['Bond dissociation enthalpy', 'Lattice enthalpy', 'Enthalpy of solution', 'Enthalpy of hydration'],
    correctIndex: 0,
    explanation: 'This is the definition of bond dissociation enthalpy.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-35',
    type: 'mcq',
    question: 'Lattice enthalpy of NaCl is determined using which indirect method?',
    options: ['Carnot cycle', 'Born-Haber cycle', 'Hess cycle', 'Nitrogen cycle'],
    correctIndex: 1,
    explanation: 'Since it is impossible to determine lattice enthalpies directly, the Born-Haber cycle (an enthalpy diagram) is used.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-36',
    type: 'mcq',
    question: 'The enthalpy of solution (ΔsolH°) is the sum of lattice enthalpy and:',
    options: ['Enthalpy of atomization', 'Enthalpy of formation', 'Enthalpy of hydration', 'Bond enthalpy'],
    correctIndex: 2,
    explanation: 'ΔsolH° = ΔlatticeH° + ΔhydH° [37, 38].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-37',
    type: 'mcq',
    question: 'Spontaneous processes are naturally:',
    options: ['Reversible', 'Irreversible', 'Equilibrium processes', 'Endothermic only'],
    correctIndex: 1,
    explanation: 'A spontaneous process is an irreversible process and can only be reversed by an external agency [39, 40].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-38',
    type: 'mcq',
    question: 'Entropy (S) is a measure of:',
    options: ['Total energy', 'Randomness or disorder', 'Heat content', 'Work potential'],
    correctIndex: 1,
    explanation: 'Entropy is a measure of the degree of randomness or disorder in the system [41, 42].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-39',
    type: 'mcq',
    question: 'Which state of a substance generally has the highest entropy?',
    options: ['Solid', 'Liquid', 'Gas', 'Crystalline solid'],
    correctIndex: 2,
    explanation: 'The gaseous state is the state of highest entropy (most disordered).',
    difficulty: 'easy'
  },
  {
    id: 'thermo-40',
    type: 'mcq',
    question: 'The Second Law of Thermodynamics states that for a spontaneous process in an isolated system:',
    options: ['Entropy decreases', 'Entropy remains constant', 'Entropy increases', 'Internal energy increases'],
    correctIndex: 2,
    explanation: 'For an isolated system, increase in entropy is the natural direction of a spontaneous change [41, 43].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-41',
    type: 'mcq',
    question: 'Gibbs energy (G) is defined by the equation:',
    options: ['G = H + TS', 'G = H - TS', 'G = U + PV', 'G = q - w'],
    correctIndex: 1,
    explanation: 'Gibbs function is defined as G = H - TS.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-42',
    type: 'mcq',
    question: 'For a process to be spontaneous at constant T and P, ΔG must be:',
    options: ['Positive (> 0)', 'Negative (< 0)', 'Zero', 'Maximum'],
    correctIndex: 1,
    explanation: 'If ΔG is negative, the process is spontaneous [45, 46].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-43',
    type: 'mcq',
    question: 'At equilibrium, the value of ΔG is:',
    options: ['Positive', 'Negative', 'Zero', 'Dependent on K'],
    correctIndex: 2,
    explanation: 'At equilibrium, the change in Gibbs energy ΔG = 0 [47, 48].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-44',
    type: 'mcq',
    question: 'The Third Law of Thermodynamics states that entropy of a pure crystalline substance is zero at:',
    options: ['0°C', '273 K', 'Absolute zero (0 K)', '298 K'],
    correctIndex: 2,
    explanation: 'The entropy of any pure crystalline substance approaches zero as the temperature approaches absolute zero.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-45',
    type: 'mcq',
    question: 'Relationship between standard Gibbs energy change (ΔrG°) and equilibrium constant (K) is:',
    options: ['ΔrG° = RT ln K', 'ΔrG° = -RT ln K', 'ΔrG° = -2.303 RT log K', 'Both B and C'],
    correctIndex: 3,
    explanation: 'ΔrG° = -RT ln K = -2.303 RT log K.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-46',
    type: 'mcq',
    question: 'A reaction with positive ΔH and positive ΔS can be spontaneous only at:',
    options: ['Low temperature', 'High temperature', 'All temperatures', 'Absolute zero'],
    correctIndex: 1,
    explanation: 'For ΔG = ΔH - TΔS to be negative when ΔH is positive, TΔS must be large enough, requiring high T [46, 50].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-47',
    type: 'mcq',
    question: 'Which of the following is a path function?',
    options: ['U', 'H', 'q', 'G'],
    correctIndex: 2,
    explanation: 'Heat (q) and work (w) depend on the path followed.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-48',
    type: 'mcq',
    question: 'During free expansion of an ideal gas into a vacuum under adiabatic conditions, the change in temperature (ΔT) is:',
    options: ['Positive', 'Negative', 'Zero', 'Infinite'],
    correctIndex: 2,
    explanation: 'In adiabatic free expansion of an ideal gas, q=0, w=0, so ΔU=0. Since U depends only on T for ideal gases, ΔT=0.',
    difficulty: 'hard'
  },
  {
    id: 'thermo-49',
    type: 'mcq',
    question: 'For the reaction: 2Cl(g) → Cl2(g), the signs of ΔH and ΔS are:',
    options: ['+, +', '-, -', '+, -', '-, +'],
    correctIndex: 1,
    explanation: 'Bond formation is exothermic (ΔH is -). Randomness decreases as 2 particles become 1 (ΔS is -).',
    difficulty: 'medium'
  },
  {
    id: 'thermo-50',
    type: 'mcq',
    question: 'The entropy change for the surroundings (ΔS_surr) when 1 mole of H2O(l) is formed under standard conditions (ΔfH° = -286 kJ/mol) at 298 K is:',
    options: ['-959.7 J/K', '+959.7 J/K', '+0.959 J/K', '-0.959 J/K'],
    correctIndex: 1,
    explanation: 'ΔS_surr = -ΔH/T = -(-286000 J) / 298 K = +959.7 J/K [52, 53].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-51',
    type: 'mcq',
    question: 'When a liquid crystallizes into a solid, the entropy:',
    options: ['Increases', 'Decreases', 'Remains same', 'Becomes zero'],
    correctIndex: 1,
    explanation: 'Molecules attain an ordered state in solids, so entropy decreases [54, 55].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-52',
    type: 'mcq',
    question: 'For a strongly endothermic reaction to be spontaneous, the entropy change must be:',
    options: ['Zero', 'Negative', 'Positive and large', 'Positive and small'],
    correctIndex: 2,
    explanation: 'ΔG = ΔH - TΔS. If ΔH is large positive, TΔS must be even larger and positive for ΔG to be negative [56, 57].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-53',
    type: 'mcq',
    question: 'The net energy available to do useful work at constant T and P is:',
    options: ['Internal energy', 'Enthalpy', 'Gibbs free energy', 'Entropy'],
    correctIndex: 2,
    explanation: 'ΔG is the net energy available to do useful work.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-54',
    type: 'mcq',
    question: 'Work done by 2 moles of an ideal gas expanding isothermally and reversibly from 2L to 20L at 300 K is (R = 8.314 J/K/mol):',
    options: ['-11.48 kJ', '+11.48 kJ', '-5.74 kJ', '+5.74 kJ'],
    correctIndex: 0,
    explanation: 'w = -2.303 nRT log(V2/V1) = -2.303 * 2 * 8.314 * 300 * log(20/2) = -11488 J ≈ -11.48 kJ.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-55',
    type: 'mcq',
    question: 'Which of the following processes is always non-spontaneous at all temperatures?',
    options: ['ΔH is -, ΔS is +', 'ΔH is +, ΔS is -', 'ΔH is -, ΔS is -', 'ΔH is +, ΔS is +'],
    correctIndex: 1,
    explanation: 'If ΔH is + and ΔS is -, ΔG = ΔH - TΔS will always be positive.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-56',
    type: 'mcq',
    question: 'Enthalpy of fusion of ice is 6.0 kJ/mol. The entropy change for the melting of 1 mole of ice at 0°C is:',
    options: ['21.98 J/K/mol', '0.022 J/K/mol', '6.0 J/K/mol', '273 J/K/mol'],
    correctIndex: 0,
    explanation: 'ΔS_fus = ΔH_fus / T_f = 6000 J / 273.15 K ≈ 21.98 J/K/mol [5, 58].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-57',
    type: 'mcq',
    question: 'In the combustion of methane, Δn_g is:',
    options: ['0', '1', '-2', '-1'],
    correctIndex: 2,
    explanation: 'CH4(g) + 2O2(g) → CO2(g) + 2H2O(l). Δn_g = 1 (CO2) - [1 (CH4) + 2 (O2)] = -2 [30, 59].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-58',
    type: 'mcq',
    question: 'The first law of thermodynamics is essentially the law of:',
    options: ['Conservation of mass', 'Conservation of momentum', 'Conservation of energy', 'Entropy'],
    correctIndex: 2,
    explanation: 'It is commonly stated as the law of conservation of energy.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-59',
    type: 'mcq',
    question: 'Which of the following equations is used to find ΔH of a reaction using bond enthalpies?',
    options: ['ΔH = ΣH_prod - ΣH_react', 'ΔH = ΣBE_react - ΣBE_prod', 'ΔH = ΣBE_prod - ΣBE_react', 'ΔH = ΔU + ΔnRT'],
    correctIndex: 1,
    explanation: 'Standard enthalpy of reaction is approximately Σ bond enthalpies of reactants - Σ bond enthalpies of products [60, 61].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-60',
    type: 'mcq',
    question: 'The entropy of the universe is:',
    options: ['Decreasing', 'Increasing', 'Constant', 'Zero'],
    correctIndex: 1,
    explanation: 'According to the Second Law, the entropy of the universe (system + surroundings) increases for spontaneous processes [43, 58].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-61',
    type: 'mcq',
    question: 'Predict the sign of ΔS for: 2H(g) → H2(g)',
    options: ['Positive', 'Negative', 'Zero', 'Variable'],
    correctIndex: 1,
    explanation: 'Entropy decreases as the number of gaseous particles decreases from 2 to 1 [55, 62].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-62',
    type: 'mcq',
    question: 'If the equilibrium constant K < 1, then ΔG° is:',
    options: ['Negative', 'Positive', 'Zero', 'Depends on T'],
    correctIndex: 1,
    explanation: 'ΔG° = -RT ln K. If K < 1, ln K is negative, so ΔG° becomes positive [47, 63].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-63',
    type: 'mcq',
    question: 'Which relation is correct for an adiabatic expansion?',
    options: ['ΔU = q', 'ΔU = w', 'ΔH = q', 'w = 0'],
    correctIndex: 1,
    explanation: 'In adiabatic process q=0, so ΔU = w [9, 64].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-64',
    type: 'mcq',
    question: 'Molar enthalpy of vaporization (ΔvapH°) for water is always:',
    options: ['Positive', 'Negative', 'Zero', 'Variable'],
    correctIndex: 0,
    explanation: 'Vaporization requires absorption of heat, so it is endothermic (positive).',
    difficulty: 'easy'
  },
  {
    id: 'thermo-65',
    type: 'mcq',
    question: 'Calculating standard enthalpy of reaction from enthalpies of formation (ΔfH°):',
    options: ['ΔrH° = ΣΔfH°(prod) - ΣΔfH°(react)', 'ΔrH° = ΣΔfH°(react) - ΣΔfH°(prod)', 'ΔrH° = ΣΔfH°(prod) + ΣΔfH°(react)', 'ΔrH° = ΔU° + PΔV'],
    correctIndex: 0,
    explanation: 'ΔrH° = (sum of enthalpies of products) - (sum of enthalpies of reactants) [31, 59, 61].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-66',
    type: 'mcq',
    question: 'The entropy of a system is maximum at:',
    options: ['Absolute zero', 'Equilibrium', 'High pressure', 'Low volume'],
    correctIndex: 1,
    explanation: 'At equilibrium, the entropy reaches its maximum value.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-67',
    type: 'mcq',
    question: 'Enthalpy change during phase transformation at constant temperature and pressure is called:',
    options: ['Heat of reaction', 'Latent heat', 'Molar enthalpy of phase change', 'Bond enthalpy'],
    correctIndex: 2,
    explanation: 'Enthalpies of fusion, vaporization, and sublimation fall under this [27, 66].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-68',
    type: 'mcq',
    question: 'Heat capacity at constant pressure (C_p) is greater than heat capacity at constant volume (C_V) because:',
    options: ['Work is done during expansion', 'Heat is lost', 'Internal energy is higher', 'None of these'],
    correctIndex: 0,
    explanation: 'C_p - C_V = R. At constant pressure, some energy is used for expansion work [23, 67].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-69',
    type: 'mcq',
    question: 'Enthalpy of sublimation (ΔsubH°) is equal to:',
    options: ['ΔfusH° - ΔvapH°', 'ΔfusH° + ΔvapH°', 'ΔvapH° - ΔfusH°', '2 * ΔfusH°'],
    correctIndex: 1,
    explanation: 'Sublimation is solid → gas, which is the sum of solid → liquid and liquid → gas [68, 69].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-70',
    type: 'mcq',
    question: 'Calculate ΔU when 1 mole of water vaporizes at 1 bar and 373 K. Given ΔvapH = 41 kJ/mol.',
    options: ['41.0 kJ', '37.9 kJ', '44.1 kJ', '0 kJ'],
    correctIndex: 1,
    explanation: 'ΔU = ΔH - Δn_g RT. For H2O(l) → H2O(g), Δn_g = 1. ΔU = 41000 - (1 * 8.314 * 373) ≈ 37904 J = 37.9 kJ [70, 71].',
    difficulty: 'hard'
  },
  {
    id: 'thermo-71',
    type: 'mcq',
    question: 'In an isolated system, ΔU = 0. What is the criterion for spontaneity?',
    options: ['ΔS > 0', 'ΔS < 0', 'ΔS = 0', 'ΔH < 0'],
    correctIndex: 0,
    explanation: 'For isolated systems, increase in entropy (ΔS > 0) is the criterion for spontaneity [41, 61, 72].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-72',
    type: 'mcq',
    question: 'The entropy change for the reaction: NaHCO3(s) → Na2CO3(s) + CO2(g) + H2O(g) is:',
    options: ['Positive', 'Negative', 'Zero', 'Variable'],
    correctIndex: 0,
    explanation: 'Solids produce gases, increasing randomness, so ΔS is positive.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-73',
    type: 'mcq',
    question: 'For the combustion of benzene(l), what is Δn_g? (Reaction: C6H6(l) + 15/2 O2(g) → 6CO2(g) + 3H2O(l))',
    options: ['6', '7.5', '-1.5', '1.5'],
    correctIndex: 2,
    explanation: 'Δn_g = 6 (gas) - 7.5 (gas) = -1.5.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-74',
    type: 'mcq',
    question: 'Standard Gibbs energy change for O3 formation (3/2 O2 → O3) is +163 kJ/mol. This means:',
    options: ['Ozone is very stable', 'The reaction is spontaneous', 'The reaction is non-spontaneous', 'Equilibrium constant is large'],
    correctIndex: 2,
    explanation: 'Positive ΔG indicates a non-spontaneous process [46, 74].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-75',
    type: 'mcq',
    question: 'A system has thermally conducting walls and is in a huge heat reservoir. Change in internal energy is:',
    options: ['ΔU = w', 'ΔU = q', 'ΔU = 0', 'ΔU = q + w'],
    correctIndex: 1,
    explanation: 'If no work is done and walls are conducting, ΔU = q.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-76',
    type: 'mcq',
    question: 'Which thermodynamic function is used to predict the direction of a chemical reaction?',
    options: ['Internal energy', 'Enthalpy', 'Gibbs free energy', 'Work'],
    correctIndex: 2,
    explanation: 'Gibbs energy change (ΔG) determines spontaneity and direction [76, 77].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-77',
    type: 'mcq',
    question: 'Specific heat capacity is defined for:',
    options: ['1 mole of substance', '1 gram (unit mass) of substance', 'Whole system', '100 grams'],
    correctIndex: 1,
    explanation: 'Specific heat capacity is the heat needed to raise the temperature of unit mass of substance by one degree [7, 67].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-78',
    type: 'mcq',
    question: 'For an ideal gas, internal energy depends only on:',
    options: ['Pressure', 'Volume', 'Temperature', 'Amount of matter'],
    correctIndex: 2,
    explanation: 'For an ideal gas, U is a function of Temperature only.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-79',
    type: 'mcq',
    question: 'What is the work done (w) when a gas expands by 2L against a constant external pressure of 1 atm?',
    options: ['+2 L-atm', '-2 L-atm', '0', '-1 L-atm'],
    correctIndex: 1,
    explanation: 'w = -P_ex ΔV = -1 atm * 2L = -2 L-atm [19, 78].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-80',
    type: 'mcq',
    question: 'For the reaction: N2(g) + 3H2(g) → 2NH3(g), the value of ΔH - ΔU is:',
    options: ['RT', '-RT', '-2RT', '2RT'],
    correctIndex: 2,
    explanation: 'ΔH - ΔU = Δn_g RT. Here Δn_g = 2 - (1+3) = -2. So -2RT.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-81',
    type: 'mcq',
    question: 'If enthalpy of formation of NH3 is -46.1 kJ/mol, what is the enthalpy change for 2NH3(g) → N2(g) + 3H2(g)?',
    options: ['-46.1 kJ', '+46.1 kJ', '+92.2 kJ', '-92.2 kJ'],
    correctIndex: 2,
    explanation: 'Reaction is reversed and scaled by 2. ΔH = -2 * (-46.1) = +92.2 kJ.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-82',
    type: 'mcq',
    question: 'Mean bond enthalpy of C-H in methane is:',
    options: ['One-fourth of enthalpy of atomization', 'Equal to bond dissociation enthalpy of first bond', 'Always constant', 'Zero'],
    correctIndex: 0,
    explanation: 'In CH4, mean C-H bond enthalpy is 1/4 of the total enthalpy of atomization.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-83',
    type: 'mcq',
    question: 'Calculate ΔrH for: N2O4(g) + 3CO(g) → N2O(g) + 3CO2(g). Given ΔfH are 9.7, -110, 81, -393 kJ/mol.',
    options: ['-777.7 kJ', '+777.7 kJ', '-1000 kJ', '0 kJ'],
    correctIndex: 0,
    explanation: 'ΔH = [81 + 3(-393)] - [9.7 + 3(-110)] =  - [9.7 - 330] = -1098 - (-320.3) = -777.7 kJ.',
    difficulty: 'hard'
  },
  {
    id: 'thermo-84',
    type: 'mcq',
    question: 'Which of the following describes a reversible process correctly?',
    options: ['Occurs in finite steps', 'System and surroundings always in equilibrium', 'Done in a short time', 'Always spontaneous'],
    correctIndex: 1,
    explanation: 'In a reversible process, the system is at all times in perfect equilibrium with its surroundings [16, 82].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-85',
    type: 'mcq',
    question: 'Entropy of a super cooled liquid at 0 K is:',
    options: ['Zero', 'Not zero', 'Infinity', 'Minimum'],
    correctIndex: 1,
    explanation: 'Third law applies to pure crystalline solids; entropy of solutions and super cooled liquids is not zero at 0 K.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-86',
    type: 'mcq',
    question: 'For the reaction: 2A + B → C, ΔH = 400 kJ/mol and ΔS = 0.2 kJ/K/mol. The reaction becomes spontaneous at T > :',
    options: ['200 K', '2000 K', '400 K', '100 K'],
    correctIndex: 1,
    explanation: 'For spontaneity ΔG < 0, so ΔH - TΔS < 0 => T > ΔH/ΔS. T > 400 / 0.2 = 2000 K.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-87',
    type: 'mcq',
    question: 'The entropy change for the freezing of water at 0°C is:',
    options: ['Positive', 'Negative', 'Zero', 'Maximum'],
    correctIndex: 1,
    explanation: 'Freezing involves molecules attaining an ordered state, so entropy decreases (negative) [54, 55].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-88',
    type: 'mcq',
    question: 'According to the first law, the energy of an isolated system is:',
    options: ['Increasing', 'Decreasing', 'Constant', 'Zero'],
    correctIndex: 2,
    explanation: 'The energy of an isolated system is constant.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-89',
    type: 'mcq',
    question: 'Molar volume is an:',
    options: ['Extensive property', 'Intensive property', 'Path function', 'None of these'],
    correctIndex: 1,
    explanation: 'A molar property is independent of the amount of matter [7, 8].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-90',
    type: 'mcq',
    question: 'Work done in free expansion of an ideal gas is always:',
    options: ['Positive', 'Negative', 'Zero', 'Maximum'],
    correctIndex: 2,
    explanation: 'Since external pressure is zero, w = 0.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-91',
    type: 'mcq',
    question: 'What is the sign of ΔG for a process in equilibrium?',
    options: ['+', '-', '0', '1'],
    correctIndex: 2,
    explanation: 'The criterion for equilibrium is ΔG = 0 [47, 48].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-92',
    type: 'mcq',
    question: 'Calculating ΔU for the oxidation of iron: ΔS = -549.4 J/K/mol, ΔH = -1648 kJ/mol. Why is it spontaneous at 298 K?',
    options: ['ΔS_sys is positive', 'ΔS_total is positive', 'ΔH is positive', 'ΔG is positive'],
    correctIndex: 1,
    explanation: 'ΔS_surr = -ΔH/T = 5530. ΔS_total = ΔS_sys + ΔS_surr = -549.4 + 5530 = +4980.6 J/K/mol. Spontaneous because ΔS_total > 0.',
    difficulty: 'hard'
  },
  {
    id: 'thermo-93',
    type: 'mcq',
    question: 'The entropy of a system _________ with an increase in temperature.',
    options: ['Decreases', 'Increases', 'Remains same', 'Becomes zero'],
    correctIndex: 1,
    explanation: 'Rising temperature makes molecular motions more vigorous, increasing entropy.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-94',
    type: 'mcq',
    question: 'Which of the following is NOT an intensive property?',
    options: ['Density', 'Pressure', 'Temperature', 'Internal energy'],
    correctIndex: 3,
    explanation: 'Internal energy depends on the quantity of matter and is an extensive property.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-95',
    type: 'mcq',
    question: 'For an ideal gas expansion, which is correct?',
    options: ['Isothermal reversible work > Isothermal irreversible work', 'Isothermal irreversible work > Isothermal reversible work', 'Both are equal', 'Reversible work is zero'],
    correctIndex: 0,
    explanation: 'Reversible work represents the maximum work done by the system.',
    difficulty: 'hard'
  },
  {
    id: 'thermo-96',
    type: 'mcq',
    question: 'In an isolated system, ΔU = 0. If a process is spontaneous, then ΔS must be:',
    options: ['< 0', '> 0', '= 0', 'Variable'],
    correctIndex: 1,
    explanation: 'In an isolated system, entropy must increase for a spontaneous change [41, 61, 72].',
    difficulty: 'medium'
  },
  {
    id: 'thermo-97',
    type: 'mcq',
    question: 'Calculate ΔG° at 300 K for a reaction with equilibrium constant K = 10. (R = 8.314 J/K/mol)',
    options: ['-5.74 kJ', '+5.74 kJ', '-11.48 kJ', '0 kJ'],
    correctIndex: 0,
    explanation: 'ΔG° = -2.303 RT log K = -2.303 * 8.314 * 300 * log 10 = -5744 J ≈ -5.74 kJ.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-98',
    type: 'mcq',
    question: 'Which of the following is a state function?',
    options: ['Heat', 'Work', 'Entropy', 'Distance'],
    correctIndex: 2,
    explanation: 'Entropy depends only on the state of the system.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-99',
    type: 'mcq',
    question: 'Enthalpy of an element in its standard state is:',
    options: ['1', '0', '-1', '100'],
    correctIndex: 1,
    explanation: 'Standard enthalpy of all elements in their reference state is taken as zero [29, 30].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-100',
    type: 'mcq',
    question: 'For an endothermic reaction to be spontaneous, TΔS must be:',
    options: ['Smaller than ΔH', 'Equal to ΔH', 'Larger than ΔH', 'Zero'],
    correctIndex: 2,
    explanation: 'For ΔG to be negative when ΔH is positive, TΔS must outweigh ΔH.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-101',
    type: 'mcq',
    question: 'Heat absorbed by 60g of Aluminium to raise temperature from 35°C to 55°C is: (C_m = 24 J/mol/K, M_Al = 27)',
    options: ['1066.7 J', '106.7 J', '533.3 J', '2000 J'],
    correctIndex: 0,
    explanation: 'n = 60/27. q = n * C_m * ΔT = (60/27) * 24 * (55-35) = 2.22 * 24 * 20 ≈ 1066.7 J.',
    difficulty: 'hard'
  },
  {
    id: 'thermo-102',
    type: 'mcq',
    question: 'The change in enthalpy when 1 mole of a solid substance sublimes at standard pressure and constant T is:',
    options: ['ΔfusH°', 'ΔvapH°', 'ΔsubH°', 'ΔrH°'],
    correctIndex: 2,
    explanation: 'This is the standard enthalpy of sublimation.',
    difficulty: 'easy'
  },
  {
    id: 'thermo-103',
    type: 'mcq',
    question: 'A spontaneous process tends to reach:',
    options: ['A state of maximum energy', 'A state of minimum energy', 'A state of equilibrium', 'A state of maximum enthalpy'],
    correctIndex: 2,
    explanation: 'Processes continue until they reach the maximum possible entropy (equilibrium).',
    difficulty: 'medium'
  },
  {
    id: 'thermo-104',
    type: 'mcq',
    question: 'Work done during a process is 394 J (by the system) and heat absorbed is 701 J. ΔU is:',
    options: ['+307 J', '-307 J', '1095 J', '0 J'],
    correctIndex: 0,
    explanation: 'ΔU = q + w = 701 + (-394) = +307 J.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-105',
    type: 'mcq',
    question: 'The entropy of a system ________ during condensation of steam.',
    options: ['Increases', 'Decreases', 'Remains same', 'Becomes infinite'],
    correctIndex: 1,
    explanation: 'Gas to liquid transition reduces randomness [42, 55].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-106',
    type: 'mcq',
    question: 'ΔG < 0 always implies:',
    options: ['Endothermic reaction', 'Exothermic reaction', 'Spontaneous reaction', 'Equilibrium'],
    correctIndex: 2,
    explanation: 'Negative ΔG is the criterion for spontaneity [45, 46].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-107',
    type: 'mcq',
    question: 'For the reaction: 2A(g) + B(g) → 2D(g), ΔU° = -10.5 kJ and ΔS° = -44.1 J/K at 298 K. ΔG° is:',
    options: ['+0.16 kJ', '-0.16 kJ', '-10.5 kJ', '+10.5 kJ'],
    correctIndex: 0,
    explanation: 'ΔH = ΔU + ΔnRT = -10.5 + (-1 * 8.314 * 10^-3 * 298) ≈ -12.98 kJ. ΔG = ΔH - TΔS = -12.98 - (298 * -44.1 * 10^-3) ≈ -12.98 + 13.14 ≈ +0.16 kJ.',
    difficulty: 'hard'
  },
  {
    id: 'thermo-108',
    type: 'mcq',
    question: 'Hess’s law is a consequence of which law?',
    options: ['First law', 'Second law', 'Third law', 'None'],
    correctIndex: 0,
    explanation: 'Hess\'s Law is based on enthalpy being a state function, a concept derived from the First Law.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-109',
    type: 'mcq',
    question: 'If the reaction A + B → C + D + q has positive entropy change, it is spontaneous at:',
    options: ['Low T', 'High T', 'Any T', 'No T'],
    correctIndex: 2,
    explanation: '+q means exothermic (ΔH is -). If ΔS is +, then ΔG = ΔH - TΔS is always negative.',
    difficulty: 'hard'
  },
  {
    id: 'thermo-110',
    type: 'mcq',
    question: 'Enthalpy of formation of H2O(l) is -286 kJ/mol. Heat released on formation of 36g of water is:',
    options: ['286 kJ', '572 kJ', '143 kJ', '100 kJ'],
    correctIndex: 1,
    explanation: '36g of water is 2 moles. Total heat = 2 * 286 = 572 kJ.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-111',
    type: 'mcq',
    question: 'At high temperature, which term dominates in the Gibbs equation?',
    options: ['ΔH', 'TΔS', 'ΔU', 'PΔV'],
    correctIndex: 1,
    explanation: 'As T increases, the TΔS term becomes more significant in ΔG = ΔH - TΔS.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-112',
    type: 'mcq',
    question: 'A process done at constant pressure is:',
    options: ['Isothermal', 'Isobaric', 'Isochoric', 'Adiabatic'],
    correctIndex: 1,
    explanation: 'Constant pressure refers to an isobaric condition [25, 69].',
    difficulty: 'easy'
  },
  {
    id: 'thermo-113',
    type: 'mcq',
    question: 'The entropy change for a reversible isothermal expansion of an ideal gas is:',
    options: ['ΔS = nR ln(V2/V1)', 'ΔS = 0', 'ΔS = q/T', 'Both A and C'],
    correctIndex: 3,
    explanation: 'For reversible isothermal expansion, q = -w = nRT ln(V2/V1). So ΔS = q/T = nR ln(V2/V1) [5, 58].',
    difficulty: 'hard'
  },
  {
    id: 'thermo-114',
    type: 'mcq',
    question: 'Gibbs energy change (ΔG) represents the maximum _________ work.',
    options: ['Expansion', 'Pressure-volume', 'Non-expansion', 'Internal'],
    correctIndex: 2,
    explanation: 'ΔG is a measure of the free energy available for non-expansion work.',
    difficulty: 'medium'
  },
  {
    id: 'thermo-115',
    type: 'mcq',
    question: 'The most disordered phase is:',
    options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
    correctIndex: 2,
    explanation: 'Gaseous state is state of highest entropy.',
    difficulty: 'easy'
  }
];

export default questions;
