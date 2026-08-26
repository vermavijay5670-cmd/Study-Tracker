import type { Question } from "@/lib/questionBank";

// NEET Chemistry Question Bank
// Chapter: Chemical Kinetics
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'chemical-kinetics-1',
    type: 'mcq',
    question: 'The rate of a chemical reaction is defined as the:',
    options: [
      'Change in temperature of the reaction mixture with time',
      'Change in concentration of any one of the reactants or products per unit time',
      'Total energy released during the reaction',
      'Time taken to complete the reaction'
    ],
    correctIndex: 1,
    explanation: 'Rate of reaction is defined as the change in concentration of a reactant or product occurring per unit time.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-2',
    type: 'mcq',
    question: 'The average rate of a reaction, measured over a definite time interval, is given by:',
    options: [
      'Δ[R]/Δt, the change in concentration divided by the time interval',
      'The concentration of reactant at t=0 only',
      'The instantaneous slope of the concentration vs time curve at a single point',
      'The equilibrium constant of the reaction'
    ],
    correctIndex: 0,
    explanation: 'Average rate is calculated as the change in concentration over a finite (measurable) time interval, Δ[R]/Δt.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-3',
    type: 'mcq',
    question: 'Instantaneous rate of a reaction is obtained by taking the limit of the average rate as:',
    options: [
      'The time interval approaches infinity',
      'The time interval (Δt) approaches zero',
      'The concentration approaches zero',
      'The temperature approaches zero'
    ],
    correctIndex: 1,
    explanation: 'Instantaneous rate is the rate at a particular moment, obtained as the limiting value of average rate when Δt → 0, i.e., -d[R]/dt.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-4',
    type: 'mcq',
    question: 'For a reactant, the rate of reaction is expressed with a negative sign before the concentration derivative because:',
    options: [
      'The rate is always negative in value',
      'The concentration of the reactant decreases with time, while rate itself is a positive quantity',
      'It denotes a reversible reaction',
      'It denotes the reaction is exothermic'
    ],
    correctIndex: 1,
    explanation: 'Since reactant concentration decreases with time, d[R]/dt is negative; a minus sign is included so that the reported rate is a positive quantity.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-5',
    type: 'mcq',
    question: 'For the reaction 2A → B, if the rate of disappearance of A is denoted as -d[A]/dt, the rate of the reaction is expressed as:',
    options: [
      '-d[A]/dt',
      '-(1/2) d[A]/dt',
      '-2 d[A]/dt',
      '+d[A]/dt'
    ],
    correctIndex: 1,
    explanation: 'For a general reaction, the rate is divided by the stoichiometric coefficient of each species; since 2 mol of A react, rate = -(1/2) d[A]/dt.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-6',
    type: 'mcq',
    question: 'For the reaction xA + yB → mC + nD, the correct general rate expression is:',
    options: [
      'Rate = -(1/x)d[A]/dt = -(1/y)d[B]/dt = (1/m)d[C]/dt = (1/n)d[D]/dt',
      'Rate = -x d[A]/dt = -y d[B]/dt',
      'Rate = d[A]/dt only',
      'Rate = -(1/m)d[C]/dt = -(1/n)d[D]/dt only'
    ],
    correctIndex: 0,
    explanation: 'The rate of reaction is expressed by dividing the rate of change of concentration of each species (reactants with negative sign, products with positive sign) by its stoichiometric coefficient.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-7',
    type: 'mcq',
    question: 'The SI unit of rate of reaction is generally expressed as:',
    options: [
      'mol L s^-1',
      'mol L^-1 s^-1',
      'L mol^-1 s^-1',
      's^-1 only'
    ],
    correctIndex: 1,
    explanation: 'Rate of reaction, being change in concentration per unit time, has the units mol L^-1 s^-1 (or similar concentration/time units, depending on the time unit used).',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-8',
    type: 'mcq',
    question: 'Which of the following is NOT a factor that affects the rate of a chemical reaction?',
    options: [
      'Concentration of reactants',
      'Temperature',
      'Presence of a catalyst',
      'Colour of the reaction vessel'
    ],
    correctIndex: 3,
    explanation: 'Rate of reaction depends on concentration, temperature, catalyst, surface area (for heterogeneous reactions), and nature of reactants - not on the colour of the container.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-9',
    type: 'mcq',
    question: 'The rate law of a reaction expresses the rate in terms of:',
    options: [
      'The molar concentration of reactants, each raised to a power determined experimentally',
      'Only the stoichiometric coefficients of the balanced equation',
      'The temperature of the reaction only',
      'The physical state of reactants only'
    ],
    correctIndex: 0,
    explanation: 'The rate law relates the rate of reaction to the concentrations of reactants raised to powers (orders) that must be determined experimentally.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-10',
    type: 'mcq',
    question: 'For a reaction, Rate = k[A]^x[B]^y, the constant k is called the:',
    options: [
      'Order of the reaction',
      'Rate constant (or specific reaction rate)',
      'Molecularity',
      'Activation energy'
    ],
    correctIndex: 1,
    explanation: 'In the rate law, k is termed the rate constant, and it is characteristic of the reaction at a given temperature.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-11',
    type: 'mcq',
    question: 'The rate constant of a reaction is numerically equal to the rate of reaction when:',
    options: [
      'The concentration of all reactants is zero',
      'The concentration of each reactant is taken as unity (1 mol/L)',
      'Temperature is 0 K',
      'The reaction is at equilibrium'
    ],
    correctIndex: 1,
    explanation: 'When each reactant concentration is taken as unity, the rate law reduces to Rate = k, so k represents the rate under these standard conditions.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-12',
    type: 'mcq',
    question: 'The order of a reaction with respect to a reactant is:',
    options: [
      'Always equal to its stoichiometric coefficient in the balanced equation',
      'The power of that reactant\'s concentration term in the experimentally determined rate law',
      'Always a whole number',
      'Always equal to the number of reactant molecules colliding'
    ],
    correctIndex: 1,
    explanation: 'Order is determined experimentally from the rate law and need not match the stoichiometric coefficient of the balanced chemical equation.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-13',
    type: 'mcq',
    question: 'The overall order of a reaction with rate law Rate = k[A]^2[B]^1 is:',
    options: [
      '1',
      '2',
      '3',
      '0'
    ],
    correctIndex: 2,
    explanation: 'The overall order is the sum of the individual powers/exponents in the rate law: 2 + 1 = 3.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-14',
    type: 'mcq',
    question: 'Order of a reaction can, in principle, be:',
    options: [
      'Only a positive whole number',
      'Zero, a fraction, or a whole number (including negative in rare cases)',
      'Only zero or one',
      'Always equal to the number of reactants'
    ],
    correctIndex: 1,
    explanation: 'Unlike molecularity, order of reaction can be zero, fractional, or a whole number, as determined experimentally.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-15',
    type: 'mcq',
    question: 'Rate laws for chemical reactions must be determined:',
    options: [
      'From the balanced chemical equation directly',
      'Experimentally, and cannot be predicted merely by looking at the balanced equation',
      'By simply adding all stoichiometric coefficients',
      'Using only theoretical calculations without experiments'
    ],
    correctIndex: 1,
    explanation: 'Since rate laws depend on the actual mechanism of the reaction, they must be determined experimentally and cannot be deduced from stoichiometry alone.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-16',
    type: 'mcq',
    question: 'For a hypothetical reaction A + B → Products, if doubling the concentration of A alone doubles the rate, and doubling B alone has no effect on rate, the rate law is:',
    options: [
      'Rate = k[A][B]',
      'Rate = k[A]',
      'Rate = k[B]',
      'Rate = k[A]^2[B]'
    ],
    correctIndex: 1,
    explanation: 'Since rate is directly proportional to [A] and independent of [B], the rate law is Rate = k[A], making the reaction first order overall.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-17',
    type: 'mcq',
    question: 'Elementary reactions in a multi-step mechanism combine to give a complex overall reaction. For such complex reactions, the rate law is generally determined by:',
    options: [
      'The overall balanced equation',
      'The slowest step, called the rate-determining step',
      'The fastest step in the mechanism',
      'The equilibrium constant of the overall reaction'
    ],
    correctIndex: 1,
    explanation: 'In a multi-step mechanism, the slowest step (rate-determining step) governs the overall rate law of the complex reaction.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-18',
    type: 'mcq',
    question: 'The units of the rate constant k for a reaction of order n are generally given by:',
    options: [
      'mol^(1-n) L^(n-1) time^-1',
      'mol L^-1 time^-1 always, irrespective of order',
      'Always dimensionless',
      's^-n always'
    ],
    correctIndex: 0,
    explanation: 'The units of rate constant vary with order: for order n, units are mol^(1-n) L^(n-1) s^-1 (or an equivalent form), differing for zero, first, second order, etc.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-19',
    type: 'mcq',
    question: 'Molecularity of a reaction is defined as:',
    options: [
      'The power of concentration terms in the experimentally derived rate law',
      'The number of reacting species (atoms, ions, or molecules) that must collide simultaneously in an elementary reaction step',
      'The number of products formed',
      'The total number of atoms in the reactants'
    ],
    correctIndex: 1,
    explanation: 'Molecularity refers to the number of reacting species that come together to react in a single elementary step.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-20',
    type: 'mcq',
    question: 'Unlike order of reaction, molecularity:',
    options: [
      'Can be zero or fractional',
      'Is always a whole number and applies only to elementary reactions, never zero or fractional',
      'Must always equal the order of reaction',
      'Is determined experimentally'
    ],
    correctIndex: 1,
    explanation: 'Molecularity, being based on the actual number of colliding species in an elementary step, is always a positive whole number, unlike order which can be fractional or zero.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-21',
    type: 'mcq',
    question: 'A reaction involving the collision of two reacting species in a single elementary step is called:',
    options: [
      'Unimolecular',
      'Bimolecular',
      'Termolecular',
      'Zero order'
    ],
    correctIndex: 1,
    explanation: 'A bimolecular elementary reaction involves the simultaneous collision of two reacting species.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-22',
    type: 'mcq',
    question: 'For a complex (multi-step) reaction, molecularity:',
    options: [
      'Has a clear, well-defined meaning for the overall reaction',
      'Has no meaning for the overall reaction as a whole; only individual steps have molecularity',
      'Is always equal to the overall order',
      'Is always greater than 3'
    ],
    correctIndex: 1,
    explanation: 'Molecularity is meaningful only for each individual elementary step; the overall complex reaction does not have a single defined molecularity.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-23',
    type: 'mcq',
    question: 'Termolecular reactions (involving simultaneous collision of three species) are rare mainly because:',
    options: [
      'Three molecules colliding simultaneously with correct orientation and sufficient energy is statistically very improbable',
      'Three-molecule reactions are thermodynamically impossible',
      'They violate the law of conservation of mass',
      'Molecularity cannot exceed two'
    ],
    correctIndex: 0,
    explanation: 'The probability of three molecules colliding simultaneously with the right orientation and sufficient energy is very low, making termolecular reactions uncommon.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-24',
    type: 'mcq',
    question: 'For an elementary reaction, order and molecularity are:',
    options: [
      'Always different from each other',
      'Generally the same, since the rate law can be written directly from the stoichiometry of the elementary step',
      'Unrelated concepts entirely',
      'Only related for zero order reactions'
    ],
    correctIndex: 1,
    explanation: 'For a simple, single-step elementary reaction, order and molecularity are usually identical, since the rate law follows directly from the stoichiometry of that step.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-25',
    type: 'mcq',
    question: 'In a complex reaction proceeding via multiple elementary steps, the order of the overall reaction is generally:',
    options: [
      'Equal to the sum of molecularities of all steps',
      'Determined by the molecularity of the slowest (rate-determining) step',
      'Always equal to 1',
      'Impossible to determine experimentally'
    ],
    correctIndex: 1,
    explanation: 'The order of a complex reaction is governed by the rate law of the rate-determining (slowest) step.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-26',
    type: 'mcq',
    question: 'Which of the following statements about molecularity and order is correct?',
    options: [
      'Molecularity is a theoretical concept, while order is an experimental quantity',
      'Both molecularity and order are purely theoretical concepts',
      'Both molecularity and order are purely experimental quantities',
      'Molecularity is experimental while order is theoretical'
    ],
    correctIndex: 0,
    explanation: 'Molecularity is a theoretical concept based on the mechanism of an elementary step, whereas order of reaction is an experimentally determined quantity.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-27',
    type: 'mcq',
    question: 'In a zero order reaction, the rate of reaction is:',
    options: [
      'Directly proportional to the concentration of the reactant',
      'Independent of the concentration of the reactant(s)',
      'Inversely proportional to the concentration of the reactant',
      'Proportional to the square of the concentration'
    ],
    correctIndex: 1,
    explanation: 'In a zero order reaction, the rate remains constant and does not depend on the concentration of the reactant(s): Rate = k[R]^0 = k.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-28',
    type: 'mcq',
    question: 'The integrated rate equation for a zero order reaction is:',
    options: [
      '[R] = [R]0 - kt',
      '[R] = [R]0 e^(-kt)',
      'ln[R] = ln[R]0 - kt',
      '1/[R] = 1/[R]0 + kt'
    ],
    correctIndex: 0,
    explanation: 'For a zero order reaction, the integrated rate law is [R] = [R]0 - kt, a straight-line relationship between concentration and time.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-29',
    type: 'mcq',
    question: 'A plot of concentration [R] versus time for a zero order reaction is:',
    options: [
      'A curve that decreases exponentially',
      'A straight line with a negative slope equal to -k',
      'A straight line parallel to the time axis',
      'A straight line through the origin with positive slope'
    ],
    correctIndex: 1,
    explanation: 'For a zero order reaction, [R] vs t is a straight line with slope equal to -k, since [R] = [R]0 - kt.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-30',
    type: 'mcq',
    question: 'The units of the rate constant (k) for a zero order reaction are:',
    options: [
      's^-1',
      'mol L^-1 s^-1 (same as the units of rate)',
      'mol^-1 L s^-1',
      'Dimensionless'
    ],
    correctIndex: 1,
    explanation: 'For a zero order reaction, since Rate = k, the units of k are the same as those of rate, i.e., mol L^-1 s^-1.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-31',
    type: 'mcq',
    question: 'The decomposition of gaseous ammonia on a hot platinum surface at high pressure, which follows zero order kinetics, is an example where the platinum surface is:',
    options: [
      'Not involved in the reaction at all',
      'Completely saturated with gas molecules, so the reaction rate becomes independent of ammonia concentration',
      'Acting as a poison and slowing the reaction',
      'Reducing the reaction rate to negative values'
    ],
    correctIndex: 1,
    explanation: 'At high pressure, the metal surface becomes saturated with ammonia molecules, so further increase in ammonia concentration does not affect rate, making the reaction zero order under these conditions.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-32',
    type: 'mcq',
    question: 'Photochemical reactions, such as the reaction between hydrogen and chlorine gas in the presence of light, often follow which order of kinetics?',
    options: [
      'First order',
      'Second order',
      'Zero order, since rate depends only on the intensity of light absorbed, not on reactant concentration',
      'Third order'
    ],
    correctIndex: 2,
    explanation: 'Certain photochemical reactions, like H2 + Cl2 in sunlight, proceed with a rate independent of reactant concentration, following zero order kinetics.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-33',
    type: 'mcq',
    question: 'In a first order reaction, the rate of reaction is:',
    options: [
      'Independent of concentration',
      'Directly proportional to the first power of the concentration of one reactant',
      'Proportional to the square of concentration',
      'Proportional to the inverse of concentration'
    ],
    correctIndex: 1,
    explanation: 'For a first order reaction, Rate = k[R], i.e., rate is directly proportional to the concentration of the reactant.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-34',
    type: 'mcq',
    question: 'The integrated rate equation for a first order reaction is:',
    options: [
      '[R] = [R]0 - kt',
      'k = (2.303/t) log([R]0/[R])',
      '1/[R] = 1/[R]0 + kt',
      '[R]^2 = [R]0^2 - kt'
    ],
    correctIndex: 1,
    explanation: 'The integrated rate law for a first order reaction can be written as k = (2.303/t) log([R]0/[R]), derived from the exponential decay equation.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-35',
    type: 'mcq',
    question: 'A plot of log[R] versus time for a first order reaction gives a straight line with slope:',
    options: [
      '+k',
      '-k/2.303',
      '-k',
      '+k/2.303'
    ],
    correctIndex: 1,
    explanation: 'From k = (2.303/t) log([R]0/[R]), rearranging gives log[R] = log[R]0 - (k/2.303)t, so the slope of log[R] vs t is -k/2.303.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-36',
    type: 'mcq',
    question: 'The units of the rate constant for a first order reaction are:',
    options: [
      'mol L^-1 s^-1',
      'time^-1 (e.g., s^-1), independent of concentration units',
      'mol^-1 L s^-1',
      'mol^2 L^-2 s^-1'
    ],
    correctIndex: 1,
    explanation: 'For a first order reaction, the rate constant has units of inverse time only (e.g., s^-1), since concentration terms cancel in the derivation.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-37',
    type: 'mcq',
    question: 'All radioactive decay processes are examples of reactions that follow which kinetic order?',
    options: [
      'Zero order',
      'First order',
      'Second order',
      'Third order'
    ],
    correctIndex: 1,
    explanation: 'Radioactive disintegration universally follows first order kinetics, with a characteristic half-life independent of the initial amount.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-38',
    type: 'mcq',
    question: 'The thermal decomposition of N2O5 (dinitrogen pentoxide) in the gas phase is a classic example of a reaction following:',
    options: [
      'Zero order kinetics',
      'First order kinetics',
      'Second order kinetics',
      'Third order kinetics'
    ],
    correctIndex: 1,
    explanation: 'Decomposition of N2O5 is a commonly cited example of a first order gas-phase reaction.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-39',
    type: 'mcq',
    question: 'The hydrogenation of ethene (C2H4 + H2 → C2H6) is generally cited as an example of which order of reaction?',
    options: [
      'Zero order',
      'First order',
      'Second order',
      'Third order'
    ],
    correctIndex: 1,
    explanation: 'The catalytic hydrogenation of ethene is often given as a classic textbook example of a first order reaction.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-40',
    type: 'mcq',
    question: 'The half-life (t1/2) of a reaction is defined as the time required for the concentration of a reactant to reduce to:',
    options: [
      'One-third of its initial value',
      'One-half of its initial value',
      'One-fourth of its initial value',
      'Zero'
    ],
    correctIndex: 1,
    explanation: 'Half-life is the time in which the concentration of a reactant is reduced to exactly half of its initial concentration.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-41',
    type: 'mcq',
    question: 'For a zero order reaction, the half-life is given by t1/2 = [R]0/2k, which shows that half-life is:',
    options: [
      'Independent of initial concentration',
      'Directly proportional to the initial concentration of the reactant',
      'Inversely proportional to the initial concentration',
      'Always constant regardless of k'
    ],
    correctIndex: 1,
    explanation: 'For zero order reactions, half-life increases with increasing initial concentration, as t1/2 = [R]0/2k.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-42',
    type: 'mcq',
    question: 'For a first order reaction, the half-life is given by t1/2 = 0.693/k, which shows that half-life is:',
    options: [
      'Directly proportional to initial concentration',
      'Independent of the initial concentration of the reactant',
      'Inversely proportional to initial concentration',
      'Dependent on temperature only, not on k'
    ],
    correctIndex: 1,
    explanation: 'A key characteristic of first order reactions is that half-life is a constant, independent of the initial concentration of the reactant.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-43',
    type: 'mcq',
    question: 'If the rate constant of a first order reaction is 2.303 × 10^-3 s^-1, then its half-life is approximately:',
    options: [
      '30 s',
      '300 s',
      '3000 s',
      '0.3 s'
    ],
    correctIndex: 1,
    explanation: 'Using t1/2 = 0.693/k = 0.693/(2.303×10^-3) ≈ 300 s.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-44',
    type: 'mcq',
    question: 'The constancy of half-life, independent of initial concentration, is a defining test used to confirm that a reaction is:',
    options: [
      'Zero order',
      'First order',
      'Second order',
      'Third order'
    ],
    correctIndex: 1,
    explanation: 'Since first order half-life does not depend on initial concentration, observing this constancy experimentally is a common way to confirm first order kinetics.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-45',
    type: 'mcq',
    question: 'If the initial concentration of a reactant in a zero order reaction is doubled, its half-life will:',
    options: [
      'Remain unchanged',
      'Also double',
      'Become half',
      'Become four times'
    ],
    correctIndex: 1,
    explanation: 'Since t1/2 = [R]0/2k for zero order reactions, doubling the initial concentration doubles the half-life.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-46',
    type: 'mcq',
    question: 'A pseudo first order reaction is one that is inherently of higher order (e.g., bimolecular) but experimentally behaves as first order because:',
    options: [
      'Both reactants are present in exactly equal, very low concentrations',
      'One of the reactants is present in large excess, so its concentration remains effectively constant during the reaction',
      'The catalyst used converts it into first order',
      'The temperature is kept extremely low'
    ],
    correctIndex: 1,
    explanation: 'When one reactant is present in large excess, its concentration change is negligible, and the rate law simplifies to depend only on the other reactant\'s concentration, mimicking first order behaviour.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-47',
    type: 'mcq',
    question: 'The acid-catalysed hydrolysis of ethyl acetate (an ester) with water, though a bimolecular reaction, is treated as pseudo first order because:',
    options: [
      'Ethyl acetate is present in large excess',
      'Water is present in large excess compared to the ester, so its concentration remains virtually constant',
      'Neither reactant concentration matters',
      'The acid catalyst is the limiting reagent'
    ],
    correctIndex: 1,
    explanation: 'Since water is present in vast excess during ester hydrolysis, its concentration does not change appreciably, and the reaction obeys pseudo first order kinetics with respect to the ester.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-48',
    type: 'mcq',
    question: 'The inversion of cane sugar (sucrose) in acidic aqueous solution, C12H22O11 + H2O → glucose + fructose, is a classic example of a:',
    options: [
      'Zero order reaction',
      'True second order reaction',
      'Pseudo first order reaction, since water is present in large excess',
      'Third order reaction'
    ],
    correctIndex: 2,
    explanation: 'Inversion of cane sugar in the presence of excess water follows pseudo first order kinetics, even though it is fundamentally a bimolecular reaction.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-49',
    type: 'mcq',
    question: 'In a pseudo first order reaction, the experimentally observed rate constant depends on the concentration of the reactant present in excess. This means the rate constant is:',
    options: [
      'A true constant independent of any reactant concentration',
      'An \'apparent\' or \'pseudo\' constant that would change if the excess reactant\'s concentration were altered',
      'Always equal to zero',
      'Independent of temperature'
    ],
    correctIndex: 1,
    explanation: 'The pseudo rate constant actually incorporates the (nearly constant) concentration of the excess reactant, so it is not a true, universal rate constant but an \'apparent\' one under those specific conditions.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-50',
    type: 'mcq',
    question: 'The progress of a chemical reaction can be experimentally monitored by measuring which of the following physical properties as a function of time?',
    options: [
      'Pressure (for gaseous reactions), optical rotation, absorbance, or electrical conductance',
      'Only the mass of the container',
      'Only the colour of the vessel',
      'Only the boiling point of the solvent'
    ],
    correctIndex: 0,
    explanation: 'Rate of reaction is often monitored indirectly via measurable physical properties like pressure, optical rotation, absorbance (colour intensity), or conductance, which change systematically with the extent of reaction.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-51',
    type: 'mcq',
    question: 'For a reaction accompanied by a change in the number of gas moles at constant volume, the progress of the reaction can be conveniently followed by measuring:',
    options: [
      'The total pressure of the system at different times',
      'Only the initial pressure',
      'The mass of the solid catalyst used',
      'The colour of the reactants only'
    ],
    correctIndex: 0,
    explanation: 'For gas-phase reactions with a change in the number of moles, monitoring total pressure over time is a standard method to determine the rate.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-52',
    type: 'mcq',
    question: 'As a general rule of thumb, the rate constant of a reaction approximately how many times for every 10°C rise in temperature?',
    options: [
      'Remains unchanged',
      'Doubles or triples',
      'Becomes half',
      'Increases tenfold'
    ],
    correctIndex: 1,
    explanation: 'A commonly used rule of thumb is that the rate constant of a reaction roughly doubles (or triples) for every 10°C rise in temperature.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-53',
    type: 'mcq',
    question: 'The quantitative relationship between the rate constant and temperature is given by the Arrhenius equation:',
    options: [
      'k = A·e^(-Ea/RT)',
      'k = A + Ea·RT',
      'k = A/T',
      'k = Ea·e^(-A/RT)'
    ],
    correctIndex: 0,
    explanation: 'The Arrhenius equation relates the rate constant k to the pre-exponential factor A, activation energy Ea, gas constant R, and absolute temperature T: k = A·e^(-Ea/RT).',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-54',
    type: 'mcq',
    question: 'In the Arrhenius equation, the pre-exponential factor \'A\' is also known as the:',
    options: [
      'Activation energy',
      'Frequency factor, related to the frequency of collisions and their orientation',
      'Equilibrium constant',
      'Rate of reaction'
    ],
    correctIndex: 1,
    explanation: 'The constant A in the Arrhenius equation is called the frequency (or pre-exponential) factor, related to the frequency and proper orientation of molecular collisions.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-55',
    type: 'mcq',
    question: 'Activation energy (Ea) is best defined as the:',
    options: [
      'Total energy of the reactant molecules',
      'Minimum extra energy that reactant molecules must possess (over their average energy) for an effective, product-forming collision',
      'Energy released during the reaction',
      'Difference in energy between reactants and products (enthalpy of reaction)'
    ],
    correctIndex: 1,
    explanation: 'Activation energy is the minimum additional energy required by reacting molecules, above their average energy, to overcome the energy barrier and react effectively.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-56',
    type: 'mcq',
    question: 'Taking the logarithmic form of the Arrhenius equation, ln k = ln A - Ea/RT, a plot of ln k versus 1/T gives a straight line with slope equal to:',
    options: [
      '-Ea/R',
      '+Ea/R',
      '-Ea',
      'R/Ea'
    ],
    correctIndex: 0,
    explanation: 'The linearised Arrhenius equation ln k = ln A - Ea/RT shows that plotting ln k against 1/T gives a straight line with slope -Ea/R, allowing determination of activation energy.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-57',
    type: 'mcq',
    question: 'An increase in temperature increases the rate constant of a reaction mainly because it increases the:',
    options: [
      'Number of reactant molecules present',
      'Fraction of molecules possessing energy equal to or greater than the activation energy',
      'Volume of the reaction vessel',
      'Molecular weight of reactants'
    ],
    correctIndex: 1,
    explanation: 'As temperature rises, a greater fraction of molecules acquire energy equal to or exceeding the activation energy, increasing the rate of effective collisions and hence the rate constant.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-58',
    type: 'mcq',
    question: 'According to the Maxwell-Boltzmann distribution of molecular energies, as temperature increases:',
    options: [
      'The fraction of molecules with energy greater than Ea decreases',
      'The energy distribution curve broadens and shifts, increasing the fraction of molecules with energy greater than Ea',
      'The distribution curve remains completely unchanged',
      'All molecules acquire exactly the same energy'
    ],
    correctIndex: 1,
    explanation: 'With increasing temperature, the Maxwell-Boltzmann distribution flattens and shifts to higher energies, increasing the fraction of molecules with sufficient energy to overcome the activation energy barrier.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-59',
    type: 'mcq',
    question: 'The Arrhenius equation can be used to calculate the activation energy of a reaction from rate constants measured at two different temperatures using the relation:',
    options: [
      'log(k2/k1) = (Ea/2.303R) × [(1/T1) - (1/T2)]',
      'log(k2/k1) = Ea × (T2 - T1)',
      'k2 - k1 = Ea/R',
      'log k2 = log k1 + Ea'
    ],
    correctIndex: 0,
    explanation: 'The two-temperature form of the Arrhenius equation, log(k2/k1) = (Ea/2.303R)[(1/T1) - (1/T2)], allows calculation of activation energy from rate constants at two temperatures.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-60',
    type: 'mcq',
    question: 'A reaction with a lower activation energy, compared to another reaction at the same temperature, will generally have:',
    options: [
      'A slower rate',
      'A faster rate, since a larger fraction of molecules can cross the energy barrier',
      'The same rate regardless of Ea',
      'No relationship between Ea and rate'
    ],
    correctIndex: 1,
    explanation: 'A lower activation energy means a greater fraction of reactant molecules already possess sufficient energy to react, resulting in a faster reaction rate.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-61',
    type: 'mcq',
    question: 'The activation energy for a reaction can never be:',
    options: [
      'Zero',
      'Negative',
      'Very high',
      'Very low'
    ],
    correctIndex: 1,
    explanation: 'Activation energy represents an energy barrier and is conventionally taken as a positive quantity (though it can, in principle, be very small, it is not treated as negative in the standard Arrhenius framework).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-62',
    type: 'mcq',
    question: 'Collision theory explains that a chemical reaction occurs as a result of:',
    options: [
      'Any collision between reactant molecules, regardless of energy or orientation',
      'Collisions between reactant molecules that possess sufficient energy (activation energy) and proper orientation',
      'Only thermal vibrations without any collisions',
      'Random diffusion of reactants without contact'
    ],
    correctIndex: 1,
    explanation: 'According to collision theory, only those collisions between reactant molecules that have both sufficient energy and correct orientation lead to a successful (effective) reaction.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-63',
    type: 'mcq',
    question: 'In collision theory, the rate of reaction is expressed as being proportional to the product of the collision frequency (Z), the fraction of molecules with sufficient energy (e^-Ea/RT), and a:',
    options: [
      'Steric or probability factor (P), accounting for proper orientation of colliding molecules',
      'Volume of the container',
      'Colour of the reactants',
      'Molar mass of reactants'
    ],
    correctIndex: 0,
    explanation: 'The complete collision theory expression includes a steric/probability factor P, which accounts for the fraction of collisions with the correct molecular orientation needed for reaction.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-64',
    type: 'mcq',
    question: 'Only a small fraction of the total collisions between reactant molecules lead to product formation because:',
    options: [
      'Most collisions do not have sufficient energy and/or proper orientation',
      'Most molecules are not moving at all',
      'Reactant molecules repel each other completely',
      'Collisions destroy molecular bonds instantly in all cases'
    ],
    correctIndex: 0,
    explanation: 'Most collisions fail to result in a reaction either because the colliding molecules lack sufficient energy or because they are not oriented correctly for bond formation/breaking.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-65',
    type: 'mcq',
    question: 'Collisions between reactant molecules that possess energy equal to or greater than the threshold/activation energy and occur with the proper orientation are called:',
    options: [
      'Ineffective collisions',
      'Effective collisions',
      'Random collisions',
      'Elastic collisions'
    ],
    correctIndex: 1,
    explanation: 'Only effective collisions - those with sufficient energy and correct orientation - lead to the formation of products.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-kinetics-66',
    type: 'mcq',
    question: 'A catalyst increases the rate of a chemical reaction mainly by:',
    options: [
      'Increasing the temperature of the reaction',
      'Providing an alternative reaction pathway with lower activation energy',
      'Increasing the concentration of reactants',
      'Changing the equilibrium position in favour of products'
    ],
    correctIndex: 1,
    explanation: 'A catalyst works by providing an alternate mechanism/pathway with a lower activation energy, thereby increasing the fraction of molecules that can react successfully.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-67',
    type: 'mcq',
    question: 'The presence of a catalyst affects the Gibbs energy change (ΔG) of a reaction by:',
    options: [
      'Making it more negative',
      'Not affecting it at all; only the pathway/activation energy is altered',
      'Making it positive',
      'Doubling its magnitude'
    ],
    correctIndex: 1,
    explanation: 'A catalyst does not alter the overall thermodynamics (ΔG, ΔH) of a reaction; it only lowers the activation energy of the pathway, thereby increasing rate without shifting the position of equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-68',
    type: 'mcq',
    question: 'A catalyst increases the rate of both the forward and backward reactions in a reversible reaction, and hence:',
    options: [
      'Shifts the equilibrium in favour of products only',
      'Does not change the equilibrium constant, only helps the system reach equilibrium faster',
      'Shifts the equilibrium in favour of reactants only',
      'Has no effect on either forward or backward reaction rate'
    ],
    correctIndex: 1,
    explanation: 'Since a catalyst equally lowers the activation energy for both forward and reverse reactions, it speeds up attainment of equilibrium without changing the equilibrium constant.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-69',
    type: 'mcq',
    question: 'Assertion: The half-life of a first order reaction is independent of the initial concentration of the reactant.\nReason: For a first order reaction, t1/2 = 0.693/k, which does not contain any concentration term.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both are false'
    ],
    correctIndex: 0,
    explanation: 'Since the first order half-life expression t1/2 = 0.693/k has no concentration term, it correctly explains why half-life is independent of the initial concentration.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-70',
    type: 'mcq',
    question: 'Assertion: Molecularity of a reaction can never be zero or a fraction.\nReason: Molecularity refers to the actual number of colliding species in an elementary reaction, which must be a positive whole number.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both are false'
    ],
    correctIndex: 0,
    explanation: 'Since molecularity counts the actual number of molecules colliding in an elementary step, it is always a positive whole number, correctly explaining the assertion.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-71',
    type: 'mcq',
    question: 'Assertion: Increasing temperature increases the rate of a reaction primarily by increasing the number of collisions between molecules.\nReason: The dominant effect of temperature is to increase the fraction of molecules possessing energy equal to or greater than the activation energy.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, but the reason given, though true, is the more significant/dominant factor rather than mere collision frequency',
      'Assertion and reason are both false',
      'Only the assertion is correct and complete'
    ],
    correctIndex: 1,
    explanation: 'While collision frequency does increase slightly with temperature, the dominant reason for the strong rise in rate is the sharp increase in the fraction of molecules with energy exceeding Ea, making the reason the more accurate explanation than the assertion alone suggests.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-72',
    type: 'mcq',
    question: 'For a first order reaction, if 75% of the reactant has decomposed, the number of half-lives that have elapsed is:',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctIndex: 1,
    explanation: '75% decomposition means 25% remains, which is (1/2)^2 of the original amount, corresponding to 2 half-lives.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-73',
    type: 'mcq',
    question: 'For a second order reaction of the type 2A → Products, the integrated rate equation is generally written as:',
    options: [
      '[R] = [R]0 - kt',
      '1/[R] = 1/[R]0 + kt',
      'log[R] = log[R]0 - kt/2.303',
      '[R] = [R]0 e^(kt)'
    ],
    correctIndex: 1,
    explanation: 'For a second order reaction, integration of the rate law gives 1/[R] = 1/[R]0 + kt, so a plot of 1/[R] versus time yields a straight line with slope k.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-74',
    type: 'mcq',
    question: 'The concept of half-life being independent of initial concentration is a unique diagnostic feature that distinguishes a first order reaction from:',
    options: [
      'Only second order reactions',
      'A zero order reaction, whose half-life is directly proportional to initial concentration',
      'Only third order reactions',
      'It does not distinguish first order from any other order'
    ],
    correctIndex: 1,
    explanation: 'Unlike first order reactions, zero order reaction half-life explicitly depends on initial concentration (t1/2 = [R]0/2k), providing a clear distinguishing test.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-75',
    type: 'mcq',
    question: 'A reaction is found to have equal orders with respect to two reactants A and B, and doubling the concentration of either A or B independently doubles the rate. The overall order of the reaction is:',
    options: [
      '1',
      '2',
      '3',
      '0'
    ],
    correctIndex: 1,
    explanation: 'Since rate ∝ [A]^1 and rate ∝ [B]^1 individually, the rate law is Rate = k[A][B], giving an overall order of 1 + 1 = 2.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-76',
    type: 'mcq',
    question: 'In the Arrhenius equation, a graph of ln k (y-axis) versus 1/T (x-axis) has a y-intercept equal to:',
    options: [
      '-Ea/R',
      'ln A',
      'Ea',
      'k itself'
    ],
    correctIndex: 1,
    explanation: 'From ln k = ln A - (Ea/R)(1/T), the y-intercept of the linear plot corresponds to ln A, the natural log of the frequency factor.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-kinetics-77',
    type: 'mcq',
    question: 'Which of the following best explains why even a very small increase in temperature can cause a comparatively large increase in reaction rate?',
    options: [
      'Because rate constant is directly (linearly) proportional to temperature',
      'Because rate constant depends exponentially on temperature through the Arrhenius equation',
      'Because activation energy decreases sharply with temperature',
      'Because concentration of reactants increases with temperature'
    ],
    correctIndex: 1,
    explanation: 'Since k = A·e^(-Ea/RT) is an exponential function of temperature, even small increases in T can produce disproportionately large increases in the rate constant.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-kinetics-78',
    type: 'mcq',
    question: 'Which of the following is an essential requirement for a molecular collision to be classified as an \'effective collision\' leading to product formation?',
    options: [
      'The colliding molecules must simply be present in the same container',
      'The colliding molecules must have both sufficient kinetic energy (≥ Ea) and the correct spatial orientation',
      'The molecules must be of exactly the same type',
      'The container must be transparent'
    ],
    correctIndex: 1,
    explanation: 'An effective collision requires both sufficient energy (equal to or greater than the activation energy) and proper orientation of the reacting molecules for successful bond reorganisation.',
    difficulty: 'medium'
  },
];

export default questions;
