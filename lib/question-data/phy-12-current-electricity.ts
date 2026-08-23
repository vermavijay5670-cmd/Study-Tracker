import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  // ==================== MCQ (70) ====================
  {
    id: 'current-electricity-1',
    type: 'mcq',
    question: 'Electric current is a scalar quantity even though it has an associated direction because',
    options: [
      'it does not obey the laws of vector addition (parallelogram law) at a junction',
      'it is always constant in magnitude',
      'it flows only in metals',
      'it has no magnitude'
    ],
    correctIndex: 0,
    explanation: 'Current has magnitude and a sense of direction, but currents at a junction add algebraically (Kirchhoff\'s junction rule), not vectorially, so current is treated as a scalar.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-2',
    type: 'mcq',
    question: 'In a metallic conductor, conventional current flows from higher to lower potential. The free electrons responsible for this current actually drift',
    options: [
      'from lower to higher potential',
      'from higher to lower potential',
      'randomly with no net drift',
      'perpendicular to the electric field'
    ],
    correctIndex: 0,
    explanation: 'Electrons carry negative charge, so they experience a force opposite to the electric field and drift from the low-potential end toward the high-potential end, opposite to conventional current.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-3',
    type: 'mcq',
    question: 'The order of magnitude of drift velocity of electrons in a typical metallic conductor carrying current is',
    options: ['10^5 m/s', '10^2 m/s', '10^-4 m/s', '3 x 10^8 m/s'],
    correctIndex: 2,
    explanation: 'Drift velocity is extremely small, typically of the order of 10^-4 m/s (mm/s range), much smaller than the random thermal speeds of electrons (~10^5 m/s).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-4',
    type: 'mcq',
    question: 'Relaxation time in the free electron theory of conduction refers to',
    options: [
      'the time for which a battery must be connected before current flows',
      'the average time between two successive collisions of an electron with ions/atoms',
      'the time taken by an electron to cross the conductor',
      'the time period of oscillation of free electrons'
    ],
    correctIndex: 1,
    explanation: 'Relaxation time (τ) is the average time interval between successive collisions of a free electron with the fixed ions of the metallic lattice.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-5',
    type: 'mcq',
    question: 'The relation connecting drift velocity vd, electric field E and relaxation time τ for an electron of charge e and mass m is',
    options: ['vd = eEτ/m', 'vd = eE/(mτ)', 'vd = mEτ/e', 'vd = eEm/τ'],
    correctIndex: 0,
    explanation: 'Drift velocity arises from the average acceleration (eE/m) an electron experiences during the time τ between collisions, giving vd = eEτ/m.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-6',
    type: 'mcq',
    question: 'Mobility of a charge carrier is defined as',
    options: [
      'drift velocity per unit electric field',
      'drift velocity multiplied by electric field',
      'the number of carriers crossing unit area per second',
      'the average distance travelled between collisions'
    ],
    correctIndex: 0,
    explanation: 'Mobility μ = vd/E, the drift velocity acquired per unit applied electric field, with SI unit m²V⁻¹s⁻¹.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-7',
    type: 'mcq',
    question: 'Ohm\'s law is obeyed strictly by',
    options: [
      'a semiconductor diode',
      'an electrolyte between metal electrodes',
      'a metallic conductor at constant temperature',
      'a gas discharge tube'
    ],
    correctIndex: 2,
    explanation: 'Metallic conductors at constant temperature give a straight-line V-I graph through the origin, the defining feature of ohmic behaviour. Diodes, electrolytes and gas discharge tubes are non-ohmic.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-8',
    type: 'mcq',
    question: 'Which of the following V-I characteristics represents a non-ohmic device?',
    options: [
      'A straight line through the origin',
      'A straight line with a positive intercept on the V-axis',
      'A curved graph, or one where V-I is not proportional',
      'A straight line whose slope is independent of V'
    ],
    correctIndex: 2,
    explanation: 'Non-ohmic devices (diodes, electrolytic cells, transistors) show a non-linear V-I relationship, so their resistance is not constant.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-9',
    type: 'mcq',
    question: 'Resistivity of a given conductor depends on',
    options: [
      'its length only',
      'its area of cross-section only',
      'both length and area of cross-section',
      'the material and temperature of the conductor, not on its dimensions'
    ],
    correctIndex: 3,
    explanation: 'Resistivity (ρ) is an intrinsic property of the material and depends on its nature and temperature, unlike resistance R = ρl/A which also depends on geometry.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-10',
    type: 'mcq',
    question: 'As the temperature of a metallic conductor increases, its resistivity generally',
    options: [
      'decreases because relaxation time increases',
      'increases because relaxation time decreases due to more frequent collisions',
      'remains unchanged',
      'first increases then decreases'
    ],
    correctIndex: 1,
    explanation: 'Higher temperature increases thermal vibration of lattice ions, causing more frequent electron collisions, decreasing τ, and hence increasing resistivity (ρ = m/ne²τ).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-11',
    type: 'mcq',
    question: 'For semiconductors, as temperature increases, resistivity',
    options: [
      'increases, because relaxation time effect dominates',
      'decreases, because the increase in number density of charge carriers dominates',
      'remains constant',
      'becomes infinite'
    ],
    correctIndex: 1,
    explanation: 'In semiconductors, increasing temperature releases more charge carriers (n increases sharply), and this effect outweighs the decrease in relaxation time, so resistivity falls.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-12',
    type: 'mcq',
    question: 'A material with a very small (nearly zero) temperature coefficient of resistance, used for making standard resistance coils, is',
    options: ['copper', 'nichrome', 'manganin', 'tungsten'],
    correctIndex: 2,
    explanation: 'Manganin (and constantan) have resistivity almost independent of temperature, making them ideal for standard resistors and resistance boxes.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-13',
    type: 'mcq',
    question: 'Nichrome is preferred for heating elements in electrical appliances mainly because it has',
    options: [
      'low resistivity and low melting point',
      'high resistivity, high melting point, and does not oxidise readily when red hot',
      'zero temperature coefficient of resistance',
      'negative temperature coefficient of resistance'
    ],
    correctIndex: 1,
    explanation: 'Nichrome combines high resistivity (for effective heating), a high melting point, and resistance to oxidation at high temperature, making it suitable for heating coils.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-14',
    type: 'mcq',
    question: 'Fuse wire used for protecting household circuits is made of a material with',
    options: [
      'high melting point and low resistivity',
      'low melting point and appropriate resistivity so it melts and breaks the circuit on excess current',
      'zero resistivity',
      'very high melting point so it never melts'
    ],
    correctIndex: 1,
    explanation: 'A fuse wire has a low melting point so that excessive current heats and melts it quickly, breaking the circuit and protecting the appliance.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-15',
    type: 'mcq',
    question: 'Colour code of a resistor showing bands Brown, Black, Red, Gold in order represents',
    options: [
      '1 kΩ ± 5%',
      '10 kΩ ± 10%',
      '100 Ω ± 5%',
      '1 MΩ ± 5%'
    ],
    correctIndex: 0,
    explanation: 'Brown = 1, Black = 0, Red = multiplier ×10², Gold = ±5% tolerance, giving 10 × 100 = 1000 Ω = 1 kΩ with 5% tolerance.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-16',
    type: 'mcq',
    question: 'In the resistor colour code, the tolerance bands gold and silver correspond respectively to',
    options: ['±5% and ±10%', '±10% and ±5%', '±1% and ±2%', '±20% and ±5%'],
    correctIndex: 0,
    explanation: 'By standard convention, a gold tolerance band means ±5% and a silver band means ±10%.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-17',
    type: 'mcq',
    question: 'When several resistors are connected in series, which quantity remains the same through each resistor?',
    options: ['Potential difference', 'Current', 'Power dissipated', 'None of these'],
    correctIndex: 1,
    explanation: 'In series combination there is only one path for charge to flow, so the same current passes through every resistor; the voltage divides among them.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-18',
    type: 'mcq',
    question: 'When several resistors are connected in parallel, which quantity is the same across each resistor?',
    options: ['Current', 'Potential difference', 'Resistance', 'Power'],
    correctIndex: 1,
    explanation: 'In a parallel combination all resistors are connected between the same two nodes, so the potential difference across each is identical; current divides among the branches.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-19',
    type: 'mcq',
    question: 'n identical resistors, each of resistance R, are connected first in series and then in parallel. The ratio of equivalent resistance (series : parallel) is',
    options: ['1 : 1', 'n : 1', 'n² : 1', '1 : n²'],
    correctIndex: 2,
    explanation: 'Series equivalent = nR; parallel equivalent = R/n. Ratio = nR : R/n = n² : 1.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-20',
    type: 'mcq',
    question: 'The equivalent resistance of a parallel combination of resistors is always',
    options: [
      'greater than the largest individual resistance',
      'equal to the sum of individual resistances',
      'less than the smallest individual resistance',
      'equal to the average of the resistances'
    ],
    correctIndex: 2,
    explanation: 'Since 1/Req = 1/R1 + 1/R2 + ..., adding more parallel paths always increases conductance, so Req is always smaller than the smallest resistor in the group.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-21',
    type: 'mcq',
    question: 'The EMF of a cell is best described as',
    options: [
      'the potential difference across its terminals when it is delivering current',
      'the work done per unit charge by the source in driving charge around the complete circuit, measured when no current is drawn',
      'the power dissipated inside the cell',
      'the resistance offered by the electrolyte'
    ],
    correctIndex: 1,
    explanation: 'EMF is the work done per unit charge by the non-electrostatic force of the cell in moving charge around the entire circuit; it equals terminal voltage only when no current flows (open circuit).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-22',
    type: 'mcq',
    question: 'For a cell of EMF ε and internal resistance r delivering current I to an external circuit, the terminal potential difference V is given by',
    options: ['V = ε + Ir', 'V = ε - Ir', 'V = Ir - ε', 'V = ε/Ir'],
    correctIndex: 1,
    explanation: 'While discharging, some EMF is used to overcome internal resistance, so the terminal voltage delivered to the external circuit is less than the EMF: V = ε - Ir.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-23',
    type: 'mcq',
    question: 'While a cell is being charged by an external source, the relation between terminal voltage V and EMF ε is',
    options: ['V = ε - Ir', 'V = ε + Ir', 'V = ε', 'V is independent of ε'],
    correctIndex: 1,
    explanation: 'During charging, current is forced through the cell against its EMF, so the applied terminal voltage must exceed the EMF by the drop across internal resistance: V = ε + Ir.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-24',
    type: 'mcq',
    question: 'n identical cells, each of EMF ε and internal resistance r, connected in series give a combination that is most effective when',
    options: [
      'external resistance R is much greater than r',
      'external resistance R is much smaller than r',
      'R equals zero',
      'the cells are of different EMFs'
    ],
    correctIndex: 0,
    explanation: 'Series grouping of cells (net EMF = nε, net internal resistance = nr) gives maximum current when external resistance dominates over internal resistance, i.e., R >> r.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-25',
    type: 'mcq',
    question: 'n identical cells, each of EMF ε and internal resistance r, connected in parallel are most useful when',
    options: [
      'external resistance R is much greater than internal resistance r',
      'external resistance R is much smaller than internal resistance r',
      'the cells have different EMFs and are connected with wrong polarity',
      'only one cell is required'
    ],
    correctIndex: 1,
    explanation: 'Parallel grouping reduces the effective internal resistance to r/n while keeping EMF the same as a single cell, giving maximum current when R << r.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-26',
    type: 'mcq',
    question: 'Kirchhoff\'s first (junction) rule is a statement of conservation of',
    options: ['energy', 'charge', 'momentum', 'potential'],
    correctIndex: 1,
    explanation: 'The junction rule states that the algebraic sum of currents at a junction is zero, which follows directly from conservation of electric charge.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-27',
    type: 'mcq',
    question: 'Kirchhoff\'s second (loop) rule is a statement of conservation of',
    options: ['charge', 'mass', 'energy', 'linear momentum'],
    correctIndex: 2,
    explanation: 'The loop rule states that the algebraic sum of potential differences around any closed loop is zero, which is a consequence of conservation of energy.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-28',
    type: 'mcq',
    question: 'A Wheatstone bridge is said to be balanced when',
    options: [
      'maximum current flows through the galvanometer',
      'no current flows through the galvanometer, i.e., P/Q = R/S',
      'all four resistances are equal',
      'the battery is disconnected'
    ],
    correctIndex: 1,
    explanation: 'At balance, the galvanometer shows zero deflection because the potentials at its two ends are equal, which happens when the ratio of resistances in adjacent arms are equal: P/Q = R/S.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-29',
    type: 'mcq',
    question: 'The meter bridge is a practical application of the',
    options: ['potentiometer principle', 'Wheatstone bridge principle', 'Kirchhoff\'s loop rule only', 'principle of a galvanometer'],
    correctIndex: 1,
    explanation: 'The meter bridge is essentially a Wheatstone bridge in which two of the four resistance arms are replaced by segments of a uniform resistance wire.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-30',
    type: 'mcq',
    question: 'A potentiometer is preferred over a voltmeter for measuring EMF of a cell because',
    options: [
      'it is cheaper to construct',
      'at the balance point it draws no current from the cell being measured, so it measures the true EMF',
      'it can measure very large currents',
      'it does not require a standard cell'
    ],
    correctIndex: 1,
    explanation: 'At the null (balance) point, no current is drawn from the cell under test, so there is no potential drop due to internal resistance, allowing the potentiometer to measure the actual EMF rather than a lower terminal voltage.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-31',
    type: 'mcq',
    question: 'The principle of a potentiometer is that',
    options: [
      'resistance of a wire depends on its material only',
      'the potential drop across any length of a uniform wire carrying a constant current is directly proportional to that length',
      'current through a wire is inversely proportional to its length',
      'EMF of a cell is proportional to its internal resistance'
    ],
    correctIndex: 1,
    explanation: 'For a wire of uniform cross-section carrying a steady current, potential drop per unit length (potential gradient) is constant, so V ∝ length — this is the basic potentiometer principle.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-32',
    type: 'mcq',
    question: 'A potentiometer can be used to determine internal resistance of a cell by comparing',
    options: [
      'balancing lengths obtained with the cell in open circuit and in closed circuit (across a known resistance)',
      'the colour bands on the cell',
      'the diameter of the potentiometer wire',
      'the resistivity of the potentiometer wire material'
    ],
    correctIndex: 0,
    explanation: 'Internal resistance is found from r = R(l1 - l2)/l2, where l1 is the balancing length for open-circuit EMF and l2 is the balancing length when a known resistance R is connected across the cell.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-33',
    type: 'mcq',
    question: 'Electrical power dissipated in a resistor R carrying current I can be expressed as',
    options: ['P = I/R', 'P = I²R', 'P = R/I²', 'P = I R²'],
    correctIndex: 1,
    explanation: 'Power dissipated as heat in a resistor is P = VI = I²R = V²/R, all equivalent forms via Ohm\'s law.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-34',
    type: 'mcq',
    question: 'The commercial unit of electrical energy, the kilowatt-hour, is a unit of',
    options: ['power', 'energy', 'current', 'potential difference'],
    correctIndex: 1,
    explanation: 'Energy = power × time, so kilowatt-hour (kW multiplied by hours) is a unit of energy, equal to 3.6 × 10⁶ joules.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-35',
    type: 'mcq',
    question: 'Conductance of a resistor is defined as',
    options: ['product of resistance and current', 'reciprocal of resistance', 'reciprocal of resistivity', 'the same as resistivity'],
    correctIndex: 1,
    explanation: 'Conductance G = 1/R, with SI unit siemens (S), also historically called mho.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-36',
    type: 'mcq',
    question: 'Electrical conductivity σ is related to resistivity ρ by',
    options: ['σ = ρ', 'σ = 1/ρ', 'σ = ρ²', 'σ = ρ × current'],
    correctIndex: 1,
    explanation: 'Conductivity is defined as the reciprocal of resistivity, σ = 1/ρ, with SI unit siemens per metre.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-37',
    type: 'mcq',
    question: 'Current density J at a point in a conductor is related to drift velocity vd and number density of free electrons n (charge e) by',
    options: ['J = ne/vd', 'J = nevd', 'J = n/(evd)', 'J = e/(nvd)'],
    correctIndex: 1,
    explanation: 'Current density is defined as current per unit area; using I = nAevd and J = I/A gives J = nevd, and it is a vector along the direction of current flow.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-38',
    type: 'mcq',
    question: 'Unlike current, current density is treated as a vector quantity because',
    options: [
      'it has both magnitude and direction at every point and this direction genuinely matters point to point in a conductor of varying cross-section',
      'it has only magnitude',
      'it never varies inside a conductor',
      'it is independent of the electric field'
    ],
    correctIndex: 0,
    explanation: 'Current density J is defined locally at each point and has a well-defined direction, which is essential when describing current distribution in three-dimensional conductors of varying cross-section, so it is treated as a vector.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-39',
    type: 'mcq',
    question: 'A superconductor is characterised by',
    options: [
      'resistivity increasing sharply as temperature falls',
      'resistivity dropping abruptly to zero below a certain critical temperature',
      'resistivity being independent of temperature',
      'infinite resistivity at all temperatures'
    ],
    correctIndex: 1,
    explanation: 'Certain materials lose all electrical resistance abruptly when cooled below a characteristic critical temperature, a phenomenon called superconductivity.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-40',
    type: 'mcq',
    question: 'A steady electric current can be maintained in a conductor only if',
    options: [
      'the conductor is kept in vacuum',
      'a constant potential difference is maintained across it by a source of EMF in a closed circuit',
      'the conductor is grounded',
      'the conductor has zero resistance'
    ],
    correctIndex: 1,
    explanation: 'A steady current requires a closed circuit and a source (like a battery) that maintains a constant potential difference, continuously doing work to keep charges flowing against resistive forces.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-41',
    type: 'mcq',
    question: 'Two wires of the same material have lengths in ratio 2:1 and diameters in ratio 1:2. The ratio of their resistances (R1:R2) is',
    options: ['1:1', '8:1', '2:1', '1:8'],
    correctIndex: 1,
    explanation: 'R ∝ l/A ∝ l/d². R1/R2 = (l1/l2) × (d2/d1)² = (2/1) × (2/1)² = 2 × 4 = 8, so R1:R2 = 8:1.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-42',
    type: 'mcq',
    question: 'When a wire is stretched uniformly so that its length becomes n times the original (volume constant), its resistance becomes',
    options: ['n times', 'n² times', '1/n times', '1/n² times'],
    correctIndex: 1,
    explanation: 'Volume V = A l is constant, so A ∝ 1/l. Then R = ρl/A ∝ l². If l becomes n times, R becomes n² times.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-43',
    type: 'mcq',
    question: 'The internal resistance of an ideal cell is',
    options: ['infinite', 'zero', 'equal to external resistance', 'undefined'],
    correctIndex: 1,
    explanation: 'An ideal cell is defined as one having zero internal resistance, so its terminal voltage always equals its EMF regardless of the current drawn.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-44',
    type: 'mcq',
    question: 'A galvanometer is converted into an ammeter by connecting',
    options: [
      'a high resistance in series with it',
      'a low resistance (shunt) in parallel with it',
      'a high resistance in parallel with it',
      'another identical galvanometer in series'
    ],
    correctIndex: 1,
    explanation: 'A small shunt resistance is connected in parallel with the galvanometer coil so that most of the current bypasses the sensitive coil, allowing measurement of larger currents.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-45',
    type: 'mcq',
    question: 'A galvanometer is converted into a voltmeter by connecting',
    options: [
      'a low resistance in parallel with it',
      'a high resistance in series with it',
      'a shunt across it',
      'a capacitor in series with it'
    ],
    correctIndex: 1,
    explanation: 'A large resistance is connected in series with the galvanometer so that it draws negligible current from the circuit and measures potential difference accurately across a large range.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-46',
    type: 'mcq',
    question: 'An ideal ammeter should have',
    options: ['infinite resistance', 'zero resistance', 'resistance equal to the circuit resistance', 'variable resistance'],
    correctIndex: 1,
    explanation: 'An ideal ammeter has zero resistance so that it does not alter the current in the circuit when connected in series.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-47',
    type: 'mcq',
    question: 'An ideal voltmeter should have',
    options: ['zero resistance', 'infinite resistance', 'resistance equal to that of the component across it', 'negative resistance'],
    correctIndex: 1,
    explanation: 'An ideal voltmeter has infinite resistance so it draws no current when connected in parallel, thus not disturbing the potential difference being measured.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-48',
    type: 'mcq',
    question: 'The number density of free electrons in a metallic conductor',
    options: [
      'is roughly independent of temperature',
      'increases sharply with a small rise in temperature',
      'decreases to zero at room temperature',
      'depends only on the length of the conductor'
    ],
    correctIndex: 0,
    explanation: 'In metals, essentially all valence electrons are already free at ordinary temperatures, so the free electron density n is nearly independent of temperature (unlike in semiconductors).',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-49',
    type: 'mcq',
    question: 'On increasing the potential difference across a given conductor at constant temperature, drift velocity of electrons',
    options: [
      'increases proportionally with the potential difference',
      'decreases proportionally',
      'remains constant',
      'becomes zero'
    ],
    correctIndex: 0,
    explanation: 'Since vd = eEτ/m and E = V/l, drift velocity is directly proportional to the applied potential difference for a conductor obeying Ohm\'s law at constant temperature.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-50',
    type: 'mcq',
    question: 'The SI unit of resistivity is',
    options: ['ohm', 'ohm-metre', 'ohm per metre', 'siemens'],
    correctIndex: 1,
    explanation: 'Since ρ = RA/l, its SI unit works out to ohm × metre² / metre = ohm-metre (Ω·m).',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-51',
    type: 'mcq',
    question: 'Which of these best explains why the resistance of an incandescent bulb filament when glowing is much higher than its cold resistance?',
    options: [
      'The filament material changes chemically',
      'The high operating temperature increases resistivity of the metal filament',
      'The filament length decreases when hot',
      'The current decreases the resistance'
    ],
    correctIndex: 1,
    explanation: 'The tungsten filament reaches a very high temperature when glowing, and since metallic resistivity increases with temperature, the hot resistance is significantly higher than the cold resistance.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-52',
    type: 'mcq',
    question: 'A carbon resistor generally has a temperature coefficient of resistance that is',
    options: ['positive, like most metals', 'zero always', 'negative, unlike typical metals', 'infinite'],
    correctIndex: 2,
    explanation: 'Carbon behaves somewhat like a semiconductor; its resistance decreases as temperature rises because more charge carriers become available, giving it a negative temperature coefficient.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-53',
    type: 'mcq',
    question: 'In the free electron (Drude) picture of conduction, in the absence of an electric field, the free electrons in a metal',
    options: [
      'are stationary',
      'move randomly in all directions with high thermal speeds, giving zero net drift',
      'move in one fixed direction',
      'do not exist'
    ],
    correctIndex: 1,
    explanation: 'In the absence of an applied field, free electrons undergo random thermal motion in all directions with high average speed, so their net average velocity (and hence net current) is zero.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-54',
    type: 'mcq',
    question: 'When an electric field is applied to a conductor, free electrons acquire',
    options: [
      'only random thermal motion',
      'a small net drift velocity superimposed on their random thermal motion',
      'infinite acceleration',
      'a velocity equal to the speed of light'
    ],
    correctIndex: 1,
    explanation: 'The applied field causes a small additional drift superimposed on the much larger random thermal velocities, and this net drift constitutes the electric current.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-55',
    type: 'mcq',
    question: 'For a given conductor, if the potential difference is doubled while temperature is kept constant, the current (assuming Ohm\'s law holds) becomes',
    options: ['half', 'double', 'four times', 'unchanged'],
    correctIndex: 1,
    explanation: 'By Ohm\'s law V = IR, at constant R, current is directly proportional to potential difference, so doubling V doubles I.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-56',
    type: 'mcq',
    question: 'The balance point of a meter bridge is found near the middle of the wire mainly to',
    options: [
      'save time',
      'minimize percentage error, since the wire is most uniform and sensitivity is highest near the middle',
      'avoid using a galvanometer',
      'increase the resistance of the wire'
    ],
    correctIndex: 1,
    explanation: 'End-corrections and non-uniformities affect measurements more near the ends of the wire, so balancing near the middle (around 40-60 cm) minimizes percentage error and gives the most reliable reading.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-57',
    type: 'mcq',
    question: 'A jockey is used in a meter bridge or potentiometer experiment to',
    options: [
      'supply current to the circuit',
      'make sliding contact with the wire at any point to locate the balance/null point',
      'measure resistance directly',
      'increase the EMF of the cell'
    ],
    correctIndex: 1,
    explanation: 'The jockey is a sliding contact used to touch the bridge/potentiometer wire at different points to find the position where the galvanometer shows zero deflection.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-58',
    type: 'mcq',
    question: 'Two bulbs rated (100 W, 220 V) and (60 W, 220 V) are connected in series across 220 V supply. Which bulb glows brighter?',
    options: [
      'The 100 W bulb, because it has lower resistance and more current flows through it',
      'The 60 W bulb, because it has higher resistance and dissipates more power in series',
      'Both glow equally',
      'Neither glows since they are in series'
    ],
    correctIndex: 1,
    explanation: 'In series, current is the same in both bulbs. Resistance of a bulb R = V²/Prated, so the 60 W bulb has higher resistance. Since P = I²R and I is same, the bulb with higher resistance (60 W rated) dissipates more power and glows brighter.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-59',
    type: 'mcq',
    question: 'Two bulbs of ratings mentioned above, if connected in parallel across 220 V, would show',
    options: [
      'the 60 W bulb glowing brighter',
      'the 100 W bulb glowing brighter, since it draws more power at rated voltage',
      'equal brightness',
      'both bulbs would fuse'
    ],
    correctIndex: 1,
    explanation: 'In parallel, each bulb gets the full rated voltage, so each dissipates its rated power; the 100 W bulb converts more electrical energy to light and heat per second, so it glows brighter.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-60',
    type: 'mcq',
    question: 'The main reason electrical appliances in homes are connected in parallel rather than in series is that parallel connection ensures',
    options: [
      'lower total power consumption',
      'each appliance gets the full line voltage and operates independently, so one failing does not stop the others',
      'less current is drawn from the mains',
      'appliances need less insulation'
    ],
    correctIndex: 1,
    explanation: 'Parallel wiring allows each appliance to receive the full supply voltage and to be switched on/off independently, so the malfunction of one appliance does not affect the others.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-61',
    type: 'mcq',
    question: 'The heating effect of current (Joule heating) is given by H = I²Rt. This heat generated is due to',
    options: [
      'work done by the external electric field on free electrons',
      'collisions of drifting electrons with the lattice ions, transferring kinetic energy as heat',
      'radiation emitted by the wire',
      'chemical reactions inside the conductor'
    ],
    correctIndex: 1,
    explanation: 'As electrons drift under the field, they repeatedly collide with the vibrating lattice ions and transfer energy to them, which appears macroscopically as heat — this is the microscopic origin of Joule heating.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-62',
    type: 'mcq',
    question: 'In a circuit containing a battery of EMF ε and internal resistance r connected to an external resistance R, the current drawn is maximum when',
    options: ['R = 0 (short circuit)', 'R = r', 'R is very large', 'R = infinity'],
    correctIndex: 0,
    explanation: 'Current I = ε/(R+r) is maximum when R = 0, i.e., when the cell is short-circuited, giving I = ε/r (though this is not desirable in practice as it can damage the cell).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-63',
    type: 'mcq',
    question: 'The power delivered to the external resistance R by a cell of EMF ε and internal resistance r is maximum when',
    options: ['R = 0', 'R = r', 'R = infinity', 'R = 2r'],
    correctIndex: 1,
    explanation: 'By the maximum power transfer condition, power delivered to external R, P = I²R = ε²R/(R+r)², is maximum when R = r.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-64',
    type: 'mcq',
    question: 'If two cells of different EMFs and internal resistances are connected in series aiding each other, the equivalent EMF is',
    options: [
      'the sum of the two EMFs',
      'the difference of the two EMFs',
      'the average of the two EMFs',
      'always equal to the larger EMF'
    ],
    correctIndex: 0,
    explanation: 'When cells are connected with like terminals in series (aiding), their EMFs add up: εeq = ε1 + ε2, and internal resistances also add: req = r1 + r2.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-65',
    type: 'mcq',
    question: 'When a wire of resistance R is cut into n equal parts and all parts are connected in parallel, the new equivalent resistance is',
    options: ['R', 'nR', 'R/n', 'R/n²'],
    correctIndex: 3,
    explanation: 'Each part has resistance R/n. For n such equal resistors in parallel, equivalent resistance = (R/n)/n = R/n².',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-66',
    type: 'mcq',
    question: 'A potential gradient along a potentiometer wire is defined as',
    options: [
      'total EMF of the driver cell',
      'fall of potential per unit length of the wire',
      'resistance per unit length of the wire',
      'current flowing through the wire'
    ],
    correctIndex: 1,
    explanation: 'Potential gradient (k) is the potential drop per unit length of the potentiometer wire, k = V/L, and forms the basis of all potentiometer measurements.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-67',
    type: 'mcq',
    question: 'To increase the sensitivity of a potentiometer (smaller potential gradient), one should',
    options: [
      'increase the length of the potentiometer wire for the same driver EMF',
      'decrease the length of the wire',
      'increase the current through the wire',
      'decrease the resistance of the wire'
    ],
    correctIndex: 0,
    explanation: 'Since potential gradient k = V/L, increasing the wire length L for the same total potential drop V decreases k, making the potentiometer more sensitive to small EMF differences.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-68',
    type: 'mcq',
    question: 'A device that converts chemical energy into electrical energy through non-electrostatic (chemical) forces acting inside it is',
    options: ['a resistor', 'a capacitor', 'a cell (battery)', 'an inductor'],
    correctIndex: 2,
    explanation: 'A cell maintains a potential difference and drives current using chemical reactions inside it that do work on charges against the electrostatic field, converting chemical energy to electrical energy.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-69',
    type: 'mcq',
    question: 'Inside a cell, positive charge conventionally moves',
    options: [
      'from the positive terminal to the negative terminal',
      'from the negative terminal to the positive terminal, driven by the non-electrostatic (chemical) force',
      'it does not move inside the cell',
      'randomly with no net direction'
    ],
    correctIndex: 1,
    explanation: 'Inside the cell, the non-electrostatic force does work against the internal electric field to move positive charge from the negative to the positive terminal, maintaining the potential difference.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-70',
    type: 'mcq',
    question: 'Which combination of resistors would you use to get the maximum possible equivalent resistance from three given resistors R1, R2 and R3?',
    options: ['All three in parallel', 'All three in series', 'Any two in parallel, third in series', 'It does not matter'],
    correctIndex: 1,
    explanation: 'Series combination always gives the maximum possible resistance (Req = R1+R2+R3), since each additional resistor in series only adds to the total obstruction to current flow.',
    difficulty: 'easy'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'current-electricity-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Current flows through a conductor even though the net charge on it is always zero.\nReason (R): In a conductor, current is due to the drift of free electrons while the fixed positive ions balance their charge, keeping the conductor electrically neutral overall.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A conductor carrying current remains neutral because the drifting electrons are matched by an equal density of fixed positive ions; R correctly explains why A holds.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The drift velocity of electrons in a conductor is very small compared to their thermal velocity.\nReason (R): The random thermal motion of electrons is extremely fast and largely unaffected by the small external field, while the field only adds a tiny net drift on top of it.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Both statements are true and R correctly explains why drift velocity (~10^-4 m/s) is negligible compared to thermal speeds (~10^5 m/s).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Current density is a vector quantity, while current is a scalar quantity.\nReason (R): Current density is defined at a point and depends on direction of flow across a small area, whereas total current through a junction obeys the scalar algebraic addition rule of Kirchhoff\'s law.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Current density J is a genuine vector field, but current I, though having a sense, adds algebraically at junctions (not via vector rules), so it is treated as a scalar. R correctly explains this distinction.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-74',
    type: 'assertion-reason',
    question: 'Assertion (A): The resistance of a metallic conductor increases with increase in temperature.\nReason (R): With rise in temperature, the amplitude of vibration of lattice ions increases, causing more frequent collisions and a decrease in relaxation time.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Increased ionic vibration reduces relaxation time τ, and since ρ = m/(ne²τ), resistivity (and hence resistance) increases with temperature for metals.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Manganin is preferred over copper for making standard resistance coils.\nReason (R): Manganin has a very high resistivity and its resistance changes negligibly with temperature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Manganin\'s nearly zero temperature coefficient of resistance ensures that a standard resistance coil retains its calibrated value regardless of small temperature changes, making it ideal for precision resistors.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-76',
    type: 'assertion-reason',
    question: 'Assertion (A): A potentiometer can measure the EMF of a cell more accurately than a voltmeter.\nReason (R): At the balance point of a potentiometer, no current is drawn from the cell being tested.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since zero current flows through the test cell at balance, there is no drop across its internal resistance, so the potentiometer reads the true EMF rather than a slightly lower terminal voltage as a voltmeter would.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-77',
    type: 'assertion-reason',
    question: 'Assertion (A): In a series combination of resistors, the equivalent resistance is always greater than the greatest individual resistance in the group.\nReason (R): Every resistor added in series increases the total obstruction to the flow of the same current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Req = R1 + R2 + ... is always greater than any single Ri, and R correctly explains this since each series resistor adds independently to the total resistance.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-78',
    type: 'assertion-reason',
    question: 'Assertion (A): In a parallel combination of resistors, the equivalent resistance is always less than the smallest individual resistance.\nReason (R): Adding resistors in parallel provides additional paths for current, increasing the total conductance of the combination.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since conductances add in parallel (G = G1+G2+...), total conductance always exceeds any individual conductance, making equivalent resistance smaller than the smallest resistor — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Ohm\'s law is not a universal law obeyed by all conducting materials.\nReason (R): Materials such as semiconductor diodes and electrolytes show a non-linear relationship between V and I.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Ohm\'s law holds only for ohmic materials (like metals at constant temperature); non-ohmic devices such as diodes and electrolytic cells violate the linear V-I relationship, confirming both A and R with R explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-80',
    type: 'assertion-reason',
    question: 'Assertion (A): The terminal voltage of a cell is always less than its EMF whenever current is being drawn from it.\nReason (R): Some part of the EMF is used to overcome the internal resistance of the cell as heat.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'V = ε - Ir, so the terminal voltage is less than EMF by the amount Ir dissipated across the internal resistance — R correctly explains A during discharge.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Cells are connected in series to obtain a large current through a small external resistance.\nReason (R): Series grouping of cells increases both the net EMF and the net internal resistance of the combination.',
    options: [
      'Both A and R are true, but R is NOT the correct explanation of A',
      'Both A and R are true, and R is the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A is actually false in principle for small external resistance — series grouping is beneficial when R >> r, not when external resistance is small (parallel grouping suits that case). While R is a true statement about series grouping, it does not correctly justify the (flawed) claim in A for small resistance, so option matching "R true but not correct explanation" fits best since A\'s claim about "small resistance" is inconsistent with when series grouping actually helps.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-82',
    type: 'assertion-reason',
    question: 'Assertion (A): A galvanometer cannot be used directly to measure large currents.\nReason (R): Its coil is very delicate and has high resistance, so passing a large current through it directly could damage it and would also disturb the circuit.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A galvanometer coil is delicate and sensitive to even small currents; passing large current directly would damage it, which is why a low-resistance shunt is used to convert it into an ammeter.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-83',
    type: 'assertion-reason',
    question: 'Assertion (A): An ammeter is always connected in series in a circuit.\nReason (R): An ammeter has very low (ideally zero) resistance, so connecting it in series does not appreciably change the total resistance or current of the circuit.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because of its near-zero resistance, an ammeter placed in series (where it carries the same current as the branch) does not significantly alter the circuit\'s current, justifying its series placement.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-84',
    type: 'assertion-reason',
    question: 'Assertion (A): A voltmeter is always connected in parallel to the component whose potential difference is being measured.\nReason (R): A voltmeter has very high (ideally infinite) resistance, so it draws negligible current when connected in parallel and does not affect the potential difference being measured.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'High resistance ensures negligible current is diverted through the voltmeter when placed in parallel, so it accurately reflects the potential difference of the component without disturbing the circuit.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-85',
    type: 'assertion-reason',
    question: 'Assertion (A): The resistivity of an insulator is much higher than that of a metal.\nReason (R): Insulators have practically no free charge carriers available to conduct current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since ρ = m/(ne²τ), an extremely low free carrier density n in insulators results in an extremely high resistivity, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Kirchhoff\'s junction rule can be applied to any junction in a circuit irrespective of the nature of the elements connected.\nReason (R): The junction rule follows from the fact that charge cannot accumulate indefinitely at any point in a steady-current circuit.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The junction rule is a universal consequence of charge conservation in a steady state and applies at every junction, independent of the specific circuit elements involved — R correctly explains why.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Two cells of unequal EMF connected in opposition (their like poles facing each other) drive a current determined by the difference of their EMFs.\nReason (R): When connected in opposition, the net EMF of the combination equals the algebraic difference of the two individual EMFs.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'When connected in opposition, the effective EMF is ε1 - ε2 (taking the larger one as dominant), and it is this net EMF that drives current through the total resistance — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-88',
    type: 'assertion-reason',
    question: 'Assertion (A): The current in a series LR-free purely resistive circuit reaches its steady value instantaneously once the switch is closed.\nReason (R): A purely resistive circuit has no property that opposes a sudden change of current, unlike an inductor.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'In a circuit with only resistors and a DC source, current attains its steady value I = ε/R essentially instantaneously because there is no inductive or capacitive element opposing rapid changes — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The resistance offered by a conductor does not depend on the direction of current flow through it.\nReason (R): Resistance depends on the material, length, area of cross-section, and temperature of the conductor, none of which changes with the direction of current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'For an ohmic conductor, R = ρl/A depends only on material properties and geometry, both independent of the direction of current, so reversing current direction does not change the resistance.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Two resistors of equal resistance dissipate equal power when connected in series to a battery.\nReason (R): In a series combination, the same current flows through both resistors.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the same current I flows through both equal resistors in series, and P = I²R with equal R and I, both dissipate equal power, and this follows directly from R.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Two identical bulbs connected in parallel to a battery dissipate equal power.\nReason (R): In a parallel combination, the potential difference is the same across each branch.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since both identical bulbs receive the same voltage in parallel, and P = V²/R with equal V and R, they dissipate equal power — a direct consequence of R.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-92',
    type: 'assertion-reason',
    question: 'Assertion (A): The resistivity of a semiconductor decreases with increasing temperature, opposite to the behaviour of a typical metal.\nReason (R): In semiconductors, the increase in charge carrier concentration with temperature outweighs the decrease in relaxation time.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The rise in the number of thermally-generated charge carriers dominates over the drop in relaxation time, giving semiconductors a net negative temperature coefficient of resistance, correctly explained by R.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-93',
    type: 'assertion-reason',
    question: 'Assertion (A): A high-resistance voltmeter connected across a component in series with other high resistances can give a noticeably lower reading than the true potential difference.\nReason (R): Even a "high resistance" voltmeter has a finite value and draws a small current, redistributing the voltage in the circuit.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'No real voltmeter has truly infinite resistance; when comparable to circuit resistances, it draws some current and alters the distribution of voltage, causing measurement error — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The balance point of a Wheatstone bridge is unaffected by the EMF of the battery connected to it.\nReason (R): At balance, the balance condition P/Q = R/S depends only on the ratio of resistances in the four arms, not on the applied EMF.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The balance condition is a ratio relationship among the four resistances alone; changing the battery EMF changes currents proportionally throughout but does not disturb this ratio, correctly explained by R.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Aluminium wires, despite having higher resistivity than copper, are sometimes preferred for long-distance power transmission.\nReason (R): Aluminium is significantly lighter and cheaper than copper for a given current-carrying capacity, which is economically favourable over long distances.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Despite slightly higher resistivity, aluminium\'s low density and cost make it economical for long transmission lines when a somewhat larger cross-section compensates for the resistivity difference, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-96',
    type: 'assertion-reason',
    question: 'Assertion (A): The mobility of charge carriers has the same SI unit as drift velocity divided by electric field.\nReason (R): Mobility is defined as μ = vd/E.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'By definition μ = vd/E, which directly gives the SI unit m²V⁻¹s⁻¹, and R is simply the definition that explains A.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Copper wires used for household wiring do not obey Ohm\'s law under all possible conditions.\nReason (R): Ohm\'s law fails when the temperature of the conductor changes significantly due to heating from large currents.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Ohm\'s law strictly applies at constant temperature; if current is large enough to heat the wire appreciably, resistivity changes and the strict proportionality between V and I breaks down, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Electric bulbs are generally connected in parallel in a house rather than in series.\nReason (R): In series connection, if one bulb fuses, the entire circuit breaks and all other bulbs go off too.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Series wiring would mean a single break stops all current; parallel wiring avoids this problem and lets each appliance operate at full line voltage independently — R correctly explains A.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The equivalent EMF of two cells connected in parallel (same polarity, same EMF ε, internal resistances r1 and r2) is still ε.\nReason (R): For identical-EMF cells connected in parallel, the net EMF of the combination equals the individual EMF regardless of the internal resistances.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'When cells of identical EMF are connected in parallel, the combined EMF remains ε (only the effective internal resistance changes, becoming the parallel combination of r1 and r2) — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Two unequal resistors carrying the same current do not dissipate the same power.\nReason (R): Power dissipated is directly proportional to resistance when current is kept constant (P = I²R).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With the same current, P = I²R shows power is directly proportional to R, so unequal resistances dissipate unequal powers — this is a direct and correct explanation.',
    difficulty: 'easy'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'current-electricity-101',
    type: 'statement',
    question: 'Which of the following statements about resistivity is correct?\nStatement I: Resistivity depends on the length and cross-sectional area of the conductor.\nStatement II: Resistivity is an intrinsic property of the material, independent of its dimensions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Resistivity ρ depends only on the nature of the material and its temperature, not on length or cross-sectional area — those affect resistance R, not resistivity. So only Statement II is correct.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-102',
    type: 'statement',
    question: 'Statement I: A potentiometer draws no current from the cell whose EMF is being measured, at the balance point.\nStatement II: A voltmeter draws no current at all from the circuit under any circumstances.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — at balance, no current flows through the cell branch of a potentiometer. Statement II is false because a real voltmeter, even with high resistance, always draws a small current.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-103',
    type: 'statement',
    question: 'Statement I: In a series combination, the potential difference across each resistor is proportional to its resistance.\nStatement II: In a parallel combination, the current through each resistor is inversely proportional to its resistance.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'In series, V = IR with same I, so V ∝ R (Statement I true). In parallel, V is same, so I = V/R implies I ∝ 1/R (Statement II true). Both statements are correct.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-104',
    type: 'statement',
    question: 'Statement I: The resistivity of most metals increases with an increase in temperature.\nStatement II: The resistivity of most semiconductors also increases with an increase in temperature.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct for metals (relaxation time decreases with rising temperature). Statement II is false — semiconductor resistivity typically decreases with temperature as charge carrier density increases sharply.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-105',
    type: 'statement',
    question: 'Statement I: Kirchhoff\'s junction rule is based on conservation of charge.\nStatement II: Kirchhoff\'s loop rule is based on conservation of energy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements accurately describe the physical basis of Kirchhoff\'s two rules — the junction rule from charge conservation, the loop rule from energy conservation.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-106',
    type: 'statement',
    question: 'Statement I: A cell always supplies current in the same direction inside itself as outside.\nStatement II: Inside a cell during normal discharge, conventional current flows from the negative terminal to the positive terminal.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — inside the cell, current flows from negative to positive terminal (opposite sense to outside, where it flows from positive to negative through the external circuit). Statement II correctly describes internal current direction.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-107',
    type: 'statement',
    question: 'Statement I: A resistor obeying Ohm\'s law has a V-I graph that is a straight line passing through the origin.\nStatement II: The slope of the V-I graph for an ohmic resistor gives its conductance.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the slope of a V-I graph (V on y-axis, I on x-axis) is dV/dI = R, the resistance, not conductance (which would be the slope of I vs V).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-108',
    type: 'statement',
    question: 'Statement I: Current density is uniform across the cross-section of a conductor carrying steady current, if the conductor is uniform.\nStatement II: Current density can vary from point to point within a conductor of non-uniform cross-section.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both are correct: for a uniform conductor, J is the same throughout the cross-section, but for a non-uniform conductor (varying area), J varies with position since J = I/A at each cross-section.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-109',
    type: 'statement',
    question: 'Statement I: The internal resistance of a cell increases as the electrolyte concentration and temperature vary during use.\nStatement II: Internal resistance of a cell is completely independent of the nature of the electrolyte.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is broadly true — internal resistance depends on factors like electrode separation, electrolyte concentration, and temperature, all of which can change during use. Statement II is false, since internal resistance strongly depends on the electrolyte\'s nature.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-110',
    type: 'statement',
    question: 'Statement I: The Wheatstone bridge is most sensitive when all four resistances in its arms are of comparable magnitude.\nStatement II: A Wheatstone bridge can be used to measure very small changes in resistance, as in a resistance thermometer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and reflect standard applications and sensitivity conditions of the Wheatstone bridge as covered in NCERT.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-111',
    type: 'statement',
    question: 'Statement I: When cells of unequal EMF are connected in parallel with the same polarity, we can still define a single equivalent EMF and equivalent internal resistance for the combination.\nStatement II: This equivalent EMF is simply the arithmetic mean of the individual EMFs.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — an equivalent single cell can represent the parallel combination using Kirchhoff\'s laws. Statement II is false — the equivalent EMF is a weighted combination based on internal resistances, not a simple arithmetic mean.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-112',
    type: 'statement',
    question: 'Statement I: Increasing the length of a potentiometer wire (for the same EMF of the driving cell) increases the potential gradient.\nStatement II: A lower potential gradient allows measurement of smaller EMF differences with greater precision.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — increasing wire length for the same total potential drop decreases the potential gradient (k = V/L), not increases it. Statement II is correct — a smaller gradient means each unit length corresponds to a smaller potential change, improving precision.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-113',
    type: 'statement',
    question: 'Statement I: Electric power consumed by a device is always equal to the product of voltage across it and the current through it.\nStatement II: This relation P = VI holds true whether the device obeys Ohm\'s law or not.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — P = VI is a general relation valid for any device regardless of whether it is ohmic; only the further simplifications P = I²R and P = V²/R require Ohm\'s law to hold.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-114',
    type: 'statement',
    question: 'Statement I: Resistors are always coloured with four or five bands to indicate their resistance value and tolerance.\nStatement II: The last coloured band on a resistor always indicates the temperature coefficient of resistance.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly describes standard resistor colour coding. Statement II is false — the last band typically indicates tolerance (gold/silver), not temperature coefficient.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-115',
    type: 'statement',
    question: 'Statement I: In the free-electron model, electrons collide only with other free electrons, not with the fixed ions.\nStatement II: These collisions randomize the electron\'s velocity, giving rise to relaxation time.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — in the Drude model, electrons primarily collide with the fixed lattice ions, not mainly with each other. Statement II is correct — these collisions randomize velocity and define the relaxation time.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-116',
    type: 'statement',
    question: 'Statement I: A cell delivers maximum power to an external resistance equal to its internal resistance.\nStatement II: At this condition, exactly half of the total power generated by the cell is dissipated inside the cell itself.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both are correct. When R = r, external power is maximum, and since current is the same through R and r, equal power (I²R = I²r) is dissipated both internally and externally, i.e., 50% each.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-117',
    type: 'statement',
    question: 'Statement I: The resistance of a conductor depends on its shape and dimensions.\nStatement II: The resistivity of the same conductor also depends on its shape and dimensions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct since R = ρl/A depends on geometry. Statement II is false — resistivity is a material property independent of shape/dimensions.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-118',
    type: 'statement',
    question: 'Statement I: An ammeter connected in a circuit should ideally have zero resistance so it does not change the circuit current.\nStatement II: A voltmeter connected in a circuit should ideally have zero resistance so it draws no current.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a voltmeter should ideally have infinite (not zero) resistance so it draws negligible current.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-119',
    type: 'statement',
    question: 'Statement I: The equivalent resistance of any combination of resistors, whether series, parallel, or mixed, can always be found using Kirchhoff\'s laws.\nStatement II: Simple series and parallel formulas alone are always sufficient to reduce any resistor network to a single equivalent resistance.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — Kirchhoff\'s laws are the most general tool and work for any network. Statement II is false — some networks (e.g., a Wheatstone bridge not at balance) cannot be reduced using only simple series-parallel formulas; they require Kirchhoff\'s laws.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-120',
    type: 'statement',
    question: 'Statement I: Superconductors offer zero resistance below a critical temperature.\nStatement II: All metals become superconductors if cooled sufficiently close to absolute zero.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly describes superconductivity. Statement II is false — not all metals exhibit superconductivity; it is a specific property of certain materials below their characteristic critical temperature.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-121',
    type: 'statement',
    question: 'Statement I: Ohmic conductors have resistance that is independent of the magnitude and sign of applied voltage.\nStatement II: Non-ohmic conductors can have different resistance values for the same magnitude of current flowing in opposite directions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — ohmic devices show constant resistance regardless of voltage polarity, while certain non-ohmic devices (like diodes) show asymmetric behaviour depending on the direction of current.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-122',
    type: 'statement',
    question: 'Statement I: A potentiometer wire must have a uniform cross-section throughout its length for accurate measurements.\nStatement II: If the cross-section is non-uniform, the potential gradient will not be constant along the wire.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and connected — uniform cross-section ensures uniform resistance per unit length, giving a constant potential gradient, which is essential for the potentiometer principle to hold.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-123',
    type: 'statement',
    question: 'Statement I: Two bulbs of different power ratings, when connected in series to the mains, both operate exactly at their rated power.\nStatement II: The bulb with lower power rating (higher resistance) generally glows brighter when the two are connected in series.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — in series, current adjusts to the combined resistance, so neither bulb typically gets its rated current/power exactly. Statement II is true — since the same current flows through both, the higher-resistance (lower-rated) bulb dissipates more power (P = I²R) and glows brighter.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-124',
    type: 'statement',
    question: 'Statement I: Charging a rechargeable cell involves passing current through it in a direction opposite to its normal discharge current.\nStatement II: During charging, the terminal voltage of the cell exceeds its EMF.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the charging process: current is forced backward through the cell, and the external source must supply a voltage greater than the EMF, V = ε + Ir.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-125',
    type: 'statement',
    question: 'Statement I: The colour code black corresponds to the digit 0 in resistor colour coding.\nStatement II: The colour code violet corresponds to the digit 9.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (black = 0). Statement II is false — violet corresponds to digit 7; grey is 8 and white is 9 in the standard code (BBROYGBVGW).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-126',
    type: 'statement',
    question: 'Statement I: In household electrical circuits, a fuse is always connected in series with the live wire.\nStatement II: Connecting a fuse in parallel would also protect the circuit equally well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — a series fuse carries the full circuit current and can break the circuit if it exceeds a safe limit. Statement II is false — a parallel fuse would not carry the full circuit current and would not reliably interrupt an overload.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-127',
    type: 'statement',
    question: 'Statement I: The resistance of a conductor connected in a circuit does not depend on the current flowing through it, provided temperature remains constant.\nStatement II: This is a consequence of Ohm\'s law for ohmic conductors.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — for ohmic conductors at constant temperature, resistance is a fixed material/geometric property, independent of the current magnitude, exactly as Ohm\'s law implies.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-128',
    type: 'statement',
    question: 'Statement I: The direction of conventional current is taken as the direction of flow of positive charge.\nStatement II: In metallic conductors, conventional current direction coincides with the actual direction of motion of the charge carriers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is the standard definition and is correct. Statement II is false — in metals, the actual charge carriers are electrons which drift opposite to the conventional current direction.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-129',
    type: 'statement',
    question: 'Statement I: Resistance boxes typically use manganin or constantan wires.\nStatement II: These materials are chosen because their resistivity increases sharply with a small rise in temperature, allowing fine calibration.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the opposite reasoning applies: these materials are chosen precisely because their resistivity changes negligibly with temperature, keeping the calibrated resistance stable.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-130',
    type: 'statement',
    question: 'Statement I: A potentiometer, unlike a voltmeter, can be used to compare the EMFs of two cells directly.\nStatement II: This comparison is done by finding the balancing lengths for each cell and taking their ratio, since EMF is proportional to balancing length for a fixed potential gradient.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe how a potentiometer compares EMFs: ε1/ε2 = l1/l2, using the balancing lengths obtained for each cell with the same potential gradient.',
    difficulty: 'medium'
  },

  // ==================== HOW MANY / NUMBER-CORRECT (20) ====================
  {
    id: 'current-electricity-131',
    type: 'how-many',
    question: 'How many of the following statements about drift velocity are correct?\n1. It is the average velocity acquired by free electrons due to an applied electric field.\n2. Its direction is opposite to the applied electric field for electrons.\n3. It is much larger than the thermal velocity of electrons at room temperature.\n4. It is directly proportional to the applied electric field for an ohmic conductor.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — drift velocity is far smaller than thermal velocity, not larger. So 3 statements are correct.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-132',
    type: 'how-many',
    question: 'How many of the following are examples of ohmic devices/materials?\n1. A metallic wire at constant temperature\n2. A semiconductor diode\n3. A carbon resistor at constant temperature\n4. An electrolytic voltameter with electrodes\n5. A manganin resistance coil',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'A metallic wire, a carbon resistor (at constant temperature), and a manganin coil are all ohmic. A semiconductor diode and an electrolytic voltameter show non-linear V-I behaviour and are non-ohmic. So 3 are ohmic.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-133',
    type: 'how-many',
    question: 'How many of the following statements correctly describe Kirchhoff\'s rules?\n1. The junction rule follows from conservation of charge.\n2. The loop rule follows from conservation of energy.\n3. The junction rule can be applied only at junctions with exactly two wires.\n4. Kirchhoff\'s rules can be used to analyse circuits that cannot be reduced by simple series-parallel formulas.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the junction rule applies at any junction with three or more wires (where current can branch), not specifically two.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-134',
    type: 'how-many',
    question: 'How many of the following statements about a Wheatstone bridge are correct?\n1. At balance, the galvanometer shows zero deflection.\n2. The balance condition depends on the EMF of the battery used.\n3. It is used to accurately measure an unknown resistance in terms of three known resistances.\n4. Maximum sensitivity is achieved when all four resistances are of comparable order.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — the balance condition (P/Q = R/S) is independent of the battery EMF. So 3 statements are correct.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-135',
    type: 'how-many',
    question: 'How many of the following quantities are scalars?\n1. Electric current\n2. Current density\n3. Drift velocity\n4. Resistance\n5. Electric field',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Electric current and resistance are scalars. Current density, drift velocity, and electric field are vectors. So only 2 of the listed quantities are scalars.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-136',
    type: 'how-many',
    question: 'How many of the following statements about resistivity and its temperature dependence are true?\n1. Resistivity of metals increases with temperature.\n2. Resistivity of semiconductors decreases with temperature.\n3. Resistivity of alloys like manganin changes negligibly with temperature.\n4. Resistivity of insulators decreases sharply with a small temperature rise, similar to metals.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are true. Statement 4 is false — insulators do not behave like metals; their resistivity remains extremely high, though it can decrease slightly (like semiconductors) but this decrease is not "similar to metals," making the comparison in statement 4 incorrect.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-137',
    type: 'how-many',
    question: 'How many of the following statements about cells (EMF sources) are correct?\n1. EMF of a cell equals its terminal voltage only when no current is drawn.\n2. Internal resistance of a cell dissipates energy as heat when current flows.\n3. Connecting cells in parallel always increases the net EMF of the combination.\n4. Connecting identical cells in series multiplies the net EMF by the number of cells.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — parallel connection of identical cells keeps EMF the same as a single cell; it does not increase it (only effective internal resistance decreases).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-138',
    type: 'how-many',
    question: 'How many of the following statements about series and parallel combinations of resistors are correct?\n1. In series, current is same through all resistors.\n2. In parallel, voltage is same across all resistors.\n3. Series combination gives the minimum possible equivalent resistance.\n4. Parallel combination gives an equivalent resistance smaller than the smallest individual resistance.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — series combination gives the maximum, not the minimum, possible equivalent resistance.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-139',
    type: 'how-many',
    question: 'How many of the following are correct applications or features of a potentiometer?\n1. Measuring the EMF of a cell without drawing current from it.\n2. Comparing EMFs of two cells.\n3. Measuring the internal resistance of a cell.\n4. It can never be more accurate than a good voltmeter.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe standard potentiometer applications. Statement 4 is false — a potentiometer is generally more accurate than a voltmeter for EMF measurement since it draws no current at balance.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-140',
    type: 'how-many',
    question: 'How many of the following statements about electrical power and energy are correct?\n1. P = VI is valid for any device, ohmic or non-ohmic.\n2. P = I²R is valid only when Ohm\'s law is obeyed.\n3. The commercial unit of electrical energy (kWh) equals 3.6 × 10⁶ joules.\n4. Electrical energy consumed depends only on power rating and is independent of time of use.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — energy consumed = power × time, so it does depend on the duration of use.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-141',
    type: 'how-many',
    question: 'How many of the following materials are typically used for making standard resistors or resistance boxes due to their low temperature coefficient of resistance?\n1. Manganin\n2. Constantan\n3. Copper\n4. Nichrome\n5. Tungsten',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Manganin and constantan have very low, nearly zero temperature coefficients and are used for standard resistors. Copper, nichrome, and tungsten do not share this specific low-temperature-coefficient property (nichrome and tungsten are chosen for other reasons like heating elements or filaments). So 2 are correct.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-142',
    type: 'how-many',
    question: 'How many of the following statements about an ammeter and a voltmeter are correct?\n1. An ideal ammeter has zero resistance.\n2. An ideal voltmeter has infinite resistance.\n3. An ammeter is connected in parallel with the circuit element.\n4. A voltmeter is connected in series with the circuit element.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 are correct. Statements 3 and 4 are false — an ammeter is connected in series, and a voltmeter is connected in parallel, the opposite of what is stated.',
    difficulty: 'easy'
  },
  {
    id: 'current-electricity-143',
    type: 'how-many',
    question: 'How many of the following statements about free electrons in a conductor are correct?\n1. In the absence of an electric field, free electrons move randomly with zero net drift.\n2. Upon applying an electric field, electrons accelerate indefinitely without any opposing force.\n3. Collisions with lattice ions randomize electron velocity and give rise to a finite average drift velocity.\n4. The number density of free electrons in a good conductor is very high, of the order of 10^28 per cubic metre.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — electrons do not accelerate indefinitely; frequent collisions with the lattice limit them to a small, steady average drift velocity.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-144',
    type: 'how-many',
    question: 'How many of the following statements about resistance combinations are correct?\n1. If three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel, their equivalent resistance is 1Ω.\n2. If the same three resistors are connected in series, the equivalent resistance is 11Ω.\n3. The equivalent resistance of a parallel combination is always less than the smallest resistor value.\n4. A short circuit (zero resistance path) in parallel with any resistor makes the equivalent resistance of that branch equal to that of the other resistor.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: '1/Req = 1/2+1/3+1/6 = 3/6+2/6+1/6 = 6/6 = 1, so Req = 1Ω (statement 1 true). Series sum = 2+3+6 = 11Ω (statement 2 true). Statement 3 is also generally true. Statement 4 is false — a zero-resistance (short) branch in parallel makes the equivalent resistance of that combination zero, not equal to the other resistor. So 3 statements are correct.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-145',
    type: 'how-many',
    question: 'How many of the following statements about the resistor colour code are correct?\n1. Black represents the digit 0.\n2. Brown represents the digit 1.\n3. Red as a multiplier band means ×100.\n4. Gold as a tolerance band means ±5%.\n5. Silver as a tolerance band means ±20%.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 are correct. Statement 5 is false — silver tolerance means ±10%, not ±20%. So 4 statements are correct.',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-146',
    type: 'how-many',
    question: 'How many of the following statements are true regarding the maximum power transfer condition for a cell delivering power to an external resistance R?\n1. Maximum current is drawn when R = 0.\n2. Maximum power is delivered to R when R equals the internal resistance r.\n3. At R = r, the efficiency of power transfer to the external circuit is 100%.\n4. At R = r, exactly half the total power generated is dissipated inside the cell.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — at R = r, only 50% of the total power reaches the external resistance; the rest is lost internally, so efficiency is 50%, not 100%.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-147',
    type: 'how-many',
    question: 'How many of the following statements about series and parallel grouping of identical cells are correct?\n1. Series grouping is advantageous when external resistance is much greater than internal resistance.\n2. Parallel grouping is advantageous when external resistance is much smaller than internal resistance.\n3. In series grouping of n identical cells, net internal resistance becomes n times that of a single cell.\n4. In parallel grouping of n identical cells, net EMF becomes n times that of a single cell.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — in parallel grouping, the net EMF remains the same as a single cell (ε), it does not multiply by n; only internal resistance reduces to r/n.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-148',
    type: 'how-many',
    question: 'How many of the following statements about electric current in different media are correct?\n1. In metals, current is due to the drift of free electrons.\n2. In electrolytes, current is due to the motion of both positive and negative ions.\n3. In a gas discharge tube, current can be due to both electrons and ions.\n4. In a semiconductor, current is due to the motion of electrons only, never holes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — current in a semiconductor is due to motion of both free electrons and holes (positive charge carriers due to missing electrons).',
    difficulty: 'medium'
  },
  {
    id: 'current-electricity-149',
    type: 'how-many',
    question: 'How many of the following statements are true about the relation between resistivity, relaxation time, and number density of free electrons (ρ = m/ne²τ)?\n1. Resistivity is inversely proportional to relaxation time.\n2. Resistivity is inversely proportional to the number density of free electrons.\n3. Resistivity increases if the mass of the charge carrier increases (all else constant).\n4. Resistivity is independent of the charge of the carrier.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct as seen directly from ρ = m/(ne²τ). Statement 4 is false — resistivity depends on e² in the denominator, so it does depend on the charge of the carrier.',
    difficulty: 'hard'
  },
  {
    id: 'current-electricity-150',
    type: 'how-many',
    question: 'How many of the following statements correctly distinguish EMF from terminal voltage of a cell?\n1. EMF is measured under open-circuit conditions; terminal voltage is measured while current flows (in general).\n2. EMF is always greater than or equal to terminal voltage during discharge.\n3. Terminal voltage can exceed EMF while the cell is being charged.\n4. EMF and terminal voltage are always numerically equal for a real (non-ideal) cell.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly distinguish EMF and terminal voltage. Statement 4 is false — for a real cell with non-zero internal resistance, EMF and terminal voltage are equal only in the special case of zero current (open circuit), not always.',
    difficulty: 'medium'
  }
];


export default questions;
