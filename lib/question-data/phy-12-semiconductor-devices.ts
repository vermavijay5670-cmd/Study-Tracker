import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    id: 'semiconductor-1',
    type: 'mcq',
    question: 'The energy band gap of silicon at room temperature is approximately:',
    options: ['0.67 eV', '1.1 eV', '5.4 eV', '0 eV'],
    correctIndex: 1,
    explanation: 'Silicon has a band gap of about 1.1 eV, and germanium about 0.67 eV.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-2',
    type: 'mcq',
    question: 'Which of the following has the largest energy band gap?',
    options: ['Germanium', 'Silicon', 'Gallium arsenide', 'Diamond'],
    correctIndex: 3,
    explanation: 'Diamond has a band gap of about 5.4 eV, so it is an insulator. Ge, Si and GaAs are semiconductors with gaps of about 0.67, 1.1 and 1.4 eV.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-3',
    type: 'mcq',
    question: 'In a conductor, the valence band and the conduction band:',
    options: [
      'Overlap each other',
      'Are separated by a large energy gap',
      'Are separated by a gap of about 1 eV',
      'Are absent'
    ],
    correctIndex: 0,
    explanation: 'In metals the bands overlap (or the conduction band is partly filled), so there are plenty of free electrons.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-4',
    type: 'mcq',
    question: 'The energy gap between the conduction band and the valence band of an insulator is:',
    options: ['Zero', 'About 1 eV', 'Greater than 3 eV', 'Less than 0.5 eV'],
    correctIndex: 2,
    explanation: 'In insulators the gap is large (greater than about 3 eV), so electrons cannot be excited into the conduction band easily.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-5',
    type: 'mcq',
    question: 'When the temperature of a semiconductor is increased, its resistance:',
    options: ['Increases', 'Remains constant', 'Decreases', 'Becomes infinite'],
    correctIndex: 2,
    explanation: 'More electron-hole pairs are generated at higher temperature, so conductivity increases and resistance decreases.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-6',
    type: 'mcq',
    question: 'Which of the following has a negative temperature coefficient of resistance?',
    options: ['A semiconductor', 'Copper', 'Silver', 'Aluminium'],
    correctIndex: 0,
    explanation: 'The resistance of a semiconductor falls as temperature rises. Metals have a positive coefficient.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-7',
    type: 'mcq',
    question: 'At absolute zero, an intrinsic semiconductor behaves like:',
    options: ['A conductor', 'A superconductor', 'A p-type semiconductor', 'An insulator'],
    correctIndex: 3,
    explanation: 'At 0 K the valence band is completely filled and the conduction band is empty, so there are no free charge carriers.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-8',
    type: 'mcq',
    question: 'In an intrinsic semiconductor, the number of free electrons ne and the number of holes nh are related as:',
    options: ['ne > nh', 'ne = nh', 'ne < nh', 'ne = 0'],
    correctIndex: 1,
    explanation: 'Every electron that moves to the conduction band leaves behind a hole, so ne = nh = ni.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-9',
    type: 'mcq',
    question: 'Which of the following is a pentavalent impurity used to make an n-type semiconductor?',
    options: ['Boron', 'Aluminium', 'Indium', 'Arsenic'],
    correctIndex: 3,
    explanation: 'Arsenic, phosphorus and antimony have 5 valence electrons. They donate an extra electron to the lattice.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-10',
    type: 'mcq',
    question: 'Which of the following impurities can be used to dope silicon to make it a p-type semiconductor?',
    options: ['Boron', 'Phosphorus', 'Arsenic', 'Antimony'],
    correctIndex: 0,
    explanation: 'Boron, aluminium, gallium and indium are trivalent, so they create holes in the lattice.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-11',
    type: 'mcq',
    question: 'An n-type semiconductor is:',
    options: [
      'Positively charged',
      'Negatively charged',
      'Electrically neutral',
      'Positively charged only at 0 K'
    ],
    correctIndex: 2,
    explanation: 'The extra free electrons are balanced by the positive donor ions, so the crystal is neutral overall.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-12',
    type: 'mcq',
    question: 'In a p-type semiconductor, the majority charge carriers are:',
    options: ['Electrons', 'Holes', 'Both in equal number', 'Ions'],
    correctIndex: 1,
    explanation: 'Trivalent doping creates holes, which outnumber the thermally generated electrons.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-13',
    type: 'mcq',
    question: 'In a doped semiconductor, the product of the electron concentration and the hole concentration, ne·nh, is equal to:',
    options: ['ni²', 'ni', '2ni', 'ni/2'],
    correctIndex: 0,
    explanation: 'This is the law of mass action: ne·nh = ni², where ni is the intrinsic carrier concentration.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-14',
    type: 'mcq',
    question: 'In an n-type semiconductor, the donor energy level lies:',
    options: [
      'Just above the valence band',
      'In the middle of the band gap',
      'Inside the conduction band',
      'Slightly below the conduction band'
    ],
    correctIndex: 3,
    explanation: 'The donor level is very close to the conduction band, so even at room temperature the extra electrons are easily excited into it.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-15',
    type: 'mcq',
    question: 'In a p-type semiconductor, the acceptor energy level lies:',
    options: [
      'Just below the conduction band',
      'In the middle of the band gap',
      'Slightly above the valence band',
      'Inside the valence band'
    ],
    correctIndex: 2,
    explanation: 'The acceptor level is just above the valence band, so electrons from the valence band easily jump into it and leave holes.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-16',
    type: 'mcq',
    question: 'The intrinsic carrier concentration of silicon is 1.5 × 10¹⁶ m⁻³. It is doped so that ne = 4.5 × 10²² m⁻³. The hole concentration is:',
    options: ['1.5 × 10⁹ m⁻³', '5 × 10⁹ m⁻³', '4.5 × 10⁹ m⁻³', '2.25 × 10¹⁰ m⁻³'],
    correctIndex: 1,
    explanation: 'nh = ni²/ne = (1.5 × 10¹⁶)²/(4.5 × 10²²) = 2.25 × 10³²/4.5 × 10²² = 5 × 10⁹ m⁻³.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-17',
    type: 'mcq',
    question: 'The electrical conductivity of a semiconductor is given by (μe and μh are the mobilities of electrons and holes):',
    options: [
      'σ = e(neμe + nhμh)',
      'σ = e(neμh + nhμe)',
      'σ = e(ne + nh)',
      'σ = e(neμe − nhμh)'
    ],
    correctIndex: 0,
    explanation: 'Both electrons and holes contribute to the current, so their contributions add: σ = e(neμe + nhμh).',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-18',
    type: 'mcq',
    question: 'In silicon, the mobility of electrons compared to the mobility of holes is:',
    options: ['Less', 'Equal', 'Greater', 'Zero'],
    correctIndex: 2,
    explanation: 'Electrons move through the conduction band more easily than holes move through the valence band, so μe > μh.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-19',
    type: 'mcq',
    question: 'The depletion region of a p-n junction contains:',
    options: [
      'Free electrons only',
      'Free holes only',
      'Both free electrons and free holes',
      'Immobile ions, with no free charge carriers'
    ],
    correctIndex: 3,
    explanation: 'Electrons and holes diffusing across the junction recombine, leaving behind immobile positive donor ions and negative acceptor ions.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-20',
    type: 'mcq',
    question: 'The barrier potential of a silicon p-n junction is approximately:',
    options: ['0.3 V', '0.7 V', '1.1 V', '3 V'],
    correctIndex: 1,
    explanation: 'The barrier potential is about 0.7 V for silicon and 0.3 V for germanium.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-21',
    type: 'mcq',
    question: 'The barrier potential of a germanium p-n junction is approximately:',
    options: ['0.7 V', '0.1 V', '1.1 V', '0.3 V'],
    correctIndex: 3,
    explanation: 'Germanium has a smaller band gap than silicon, so its barrier potential is about 0.3 V.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-22',
    type: 'mcq',
    question: 'When a p-n junction is forward biased, the width of the depletion layer:',
    options: ['Decreases', 'Increases', 'Remains the same', 'Becomes infinite'],
    correctIndex: 0,
    explanation: 'The applied voltage opposes the barrier potential, so the barrier height and the depletion width decrease.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-23',
    type: 'mcq',
    question: 'The small current that flows in a reverse-biased p-n junction is due to:',
    options: ['Majority carriers', 'Minority carriers', 'Both equally', 'Neither'],
    correctIndex: 1,
    explanation: 'Reverse bias blocks majority carriers. The tiny reverse current (microamperes) comes from minority carriers drifting across the junction.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-24',
    type: 'mcq',
    question: 'In an unbiased p-n junction at equilibrium, the net current is:',
    options: [
      'Due to diffusion only',
      'Due to drift only',
      'Zero, because the diffusion and drift currents cancel',
      'Maximum'
    ],
    correctIndex: 2,
    explanation: 'The diffusion current from the majority carriers is exactly balanced by the drift current of the minority carriers, so there is no net current.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-25',
    type: 'mcq',
    question: 'A p-n junction is forward biased when:',
    options: [
      'The p-side is connected to the positive terminal of the battery',
      'The n-side is connected to the positive terminal of the battery',
      'Both sides are connected to the negative terminal',
      'It is connected to an AC source only'
    ],
    correctIndex: 0,
    explanation: 'Forward bias means p-side to the higher potential and n-side to the lower potential.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-26',
    type: 'mcq',
    question: 'A p-n junction diode starts conducting a significant current in forward bias only after the applied voltage exceeds the:',
    options: ['Zero voltage', 'Breakdown voltage', 'Reverse saturation voltage', 'Threshold (knee) voltage'],
    correctIndex: 3,
    explanation: 'Current stays very small until the applied voltage overcomes the barrier potential (the knee voltage), then it rises sharply.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-27',
    type: 'mcq',
    question: 'Compared with its forward-bias resistance, the reverse-bias resistance of a p-n junction diode is:',
    options: ['Much smaller', 'Much larger', 'Equal', 'Zero'],
    correctIndex: 1,
    explanation: 'The forward resistance is low (tens of ohms) and the reverse resistance is very high (megaohms), which is why a diode works as a rectifier.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-28',
    type: 'mcq',
    question: 'A p-n junction diode can be used as a:',
    options: ['Amplifier', 'Oscillator', 'Rectifier', 'Modulator'],
    correctIndex: 2,
    explanation: 'A diode conducts mainly in one direction, so it converts AC into DC and acts as a rectifier.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-29',
    type: 'mcq',
    question: 'An AC of frequency 50 Hz is fed to a half-wave rectifier. The frequency of the output pulses is:',
    options: ['25 Hz', '50 Hz', '100 Hz', '200 Hz'],
    correctIndex: 1,
    explanation: 'A half-wave rectifier conducts for one half of every cycle, so there is one pulse per cycle and the output frequency equals the input frequency.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-30',
    type: 'mcq',
    question: 'An AC of frequency 50 Hz is fed to a full-wave rectifier. The frequency of the output pulses is:',
    options: ['25 Hz', '50 Hz', '200 Hz', '100 Hz'],
    correctIndex: 3,
    explanation: 'A full-wave rectifier gives a pulse for each half cycle, so the output frequency is twice the input frequency.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-31',
    type: 'mcq',
    question: 'The minimum number of diodes needed to build a full-wave rectifier (with a centre-tapped transformer) is:',
    options: ['2', '1', '3', '4'],
    correctIndex: 0,
    explanation: 'A centre-tapped full-wave rectifier uses two diodes. A bridge rectifier needs four.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-32',
    type: 'mcq',
    question: 'A capacitor is connected across the output of a rectifier in order to:',
    options: [
      'Increase the frequency of the output',
      'Reduce the output voltage to zero',
      'Smooth the pulsating DC by reducing the ripple',
      'Convert the DC back to AC'
    ],
    correctIndex: 2,
    explanation: 'The capacitor charges during the voltage peaks and discharges in between, so the output becomes steadier.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-33',
    type: 'mcq',
    question: 'A Zener diode is used as a:',
    options: ['Rectifier', 'Amplifier', 'Oscillator', 'Voltage regulator'],
    correctIndex: 3,
    explanation: 'In reverse breakdown the voltage across a Zener diode stays almost constant over a wide range of current. This makes it a voltage regulator.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-34',
    type: 'mcq',
    question: 'Zener breakdown occurs in p-n junctions that are:',
    options: ['Heavily doped', 'Lightly doped', 'Undoped', 'Made of metal'],
    correctIndex: 0,
    explanation: 'Heavy doping makes the depletion layer very thin, so a modest reverse voltage produces an electric field (about 10⁶ V/m) strong enough to pull electrons out of covalent bonds.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-35',
    type: 'mcq',
    question: 'A Zener diode with breakdown voltage 6 V is connected to a 10 V supply through a series resistor of 200 Ω. The current through the resistor is:',
    options: ['10 mA', '20 mA', '30 mA', '50 mA'],
    correctIndex: 1,
    explanation: 'Voltage across the resistor = 10 − 6 = 4 V. I = 4/200 = 0.02 A = 20 mA.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-36',
    type: 'mcq',
    question: 'A photodiode is operated in:',
    options: ['Forward bias', 'Zero bias only', 'Both biases equally', 'Reverse bias'],
    correctIndex: 3,
    explanation: 'In reverse bias the dark current is very small, so the change caused by light is easy to detect.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-37',
    type: 'mcq',
    question: 'In a reverse-biased photodiode, the current increases with:',
    options: [
      'A decrease in the intensity of light',
      'Removal of the battery',
      'An increase in the intensity of light',
      'An increase in the wavelength beyond the threshold'
    ],
    correctIndex: 2,
    explanation: 'More photons generate more electron-hole pairs, so the reverse current grows with the light intensity.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-38',
    type: 'mcq',
    question: 'For a photodiode to produce electron-hole pairs, the energy of the incident photon must be:',
    options: [
      'Greater than or equal to the band gap',
      'Less than the band gap',
      'Zero',
      'Equal to the work function of a metal'
    ],
    correctIndex: 0,
    explanation: 'The photon must supply at least Eg to lift an electron from the valence band to the conduction band.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-39',
    type: 'mcq',
    question: 'A light emitting diode (LED) emits light when it is:',
    options: ['Reverse biased', 'Forward biased', 'Unbiased', 'Heated above 1000 K'],
    correctIndex: 1,
    explanation: 'In forward bias, electrons and holes recombine near the junction and release energy as photons.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-40',
    type: 'mcq',
    question: 'LEDs that emit visible light are commonly made from:',
    options: ['Silicon', 'Germanium', 'Gallium arsenide phosphide', 'Copper oxide'],
    correctIndex: 2,
    explanation: 'Compound semiconductors such as GaAsP (and GaP, GaAs) have a suitable band gap and are efficient light emitters. Si and Ge are not.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-41',
    type: 'mcq',
    question: 'The colour of the light emitted by an LED depends on:',
    options: [
      'The applied voltage',
      'The band gap of the semiconductor',
      'The size of the LED',
      'The colour of its plastic casing only'
    ],
    correctIndex: 1,
    explanation: 'The photon energy emitted is about equal to the band gap, so the band gap decides the wavelength and hence the colour.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-42',
    type: 'mcq',
    question: 'A solar cell is a p-n junction device that converts:',
    options: [
      'Electrical energy into light energy',
      'Heat energy into light energy',
      'Sound energy into electrical energy',
      'Light energy into electrical energy'
    ],
    correctIndex: 3,
    explanation: 'Photons generate electron-hole pairs near the junction, and the junction field separates them to give an emf.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-43',
    type: 'mcq',
    question: 'A solar cell operates:',
    options: [
      'Without any external bias',
      'Under forward bias only',
      'Under a reverse bias of 10 V',
      'Under an AC bias only'
    ],
    correctIndex: 0,
    explanation: 'A solar cell acts as a source of emf. No external bias is applied, and the I-V curve lies in the fourth quadrant.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-44',
    type: 'mcq',
    question: 'A material suitable for solar cells should have a band gap of about:',
    options: ['0.1 eV', '5 eV', '1.5 eV', '10 eV'],
    correctIndex: 2,
    explanation: 'A band gap of about 1.5 eV matches the solar spectrum well, and Si (1.1 eV) and GaAs (about 1.5 eV) are used.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-45',
    type: 'mcq',
    question: 'The Boolean expression for an OR gate is:',
    options: ['Y = A · B', 'Y = Ā', 'Y = (A · B)′', 'Y = A + B'],
    correctIndex: 3,
    explanation: 'The output of an OR gate is 1 if at least one input is 1, which is written Y = A + B.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-46',
    type: 'mcq',
    question: 'The output of a two-input AND gate is 1 when:',
    options: [
      'Any one input is 1',
      'Both inputs are 1',
      'Both inputs are 0',
      'The inputs are different'
    ],
    correctIndex: 1,
    explanation: 'Y = A · B is 1 only when A = 1 and B = 1.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-47',
    type: 'mcq',
    question: 'A NOT gate:',
    options: [
      'Has one input and one output, and the output is the complement of the input',
      'Has two inputs and one output',
      'Has two outputs',
      'Gives an output that is the same as the input'
    ],
    correctIndex: 0,
    explanation: 'A NOT gate (inverter) gives Y = Ā, so a 0 input gives 1 and a 1 input gives 0.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-48',
    type: 'mcq',
    question: 'The output of a two-input NAND gate when both inputs are 1 is:',
    options: ['1', 'Depends on the supply voltage', 'Undefined', '0'],
    correctIndex: 3,
    explanation: 'NAND is AND followed by NOT. AND gives 1 for (1, 1) and NOT converts it to 0.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-49',
    type: 'mcq',
    question: 'The output of a two-input NOR gate is 1 when:',
    options: [
      'Both inputs are 1',
      'Exactly one input is 1',
      'Both inputs are 0',
      'The inputs are different'
    ],
    correctIndex: 2,
    explanation: 'NOR is OR followed by NOT. OR is 0 only for (0, 0), so NOR is 1 only for (0, 0).',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-50',
    type: 'mcq',
    question: 'The universal logic gates are:',
    options: ['AND and OR', 'NAND and NOR', 'NOT and OR', 'AND and NOT'],
    correctIndex: 1,
    explanation: 'Any logic gate can be built from NAND gates alone or from NOR gates alone, so they are called universal gates.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-51',
    type: 'mcq',
    question: 'If both inputs of a NAND gate are connected together, the gate behaves as a:',
    options: ['AND gate', 'OR gate', 'NOR gate', 'NOT gate'],
    correctIndex: 3,
    explanation: 'With A = B the output is Y = (A · A)′ = A′, which is a NOT gate.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-52',
    type: 'mcq',
    question: 'An AND gate followed by a NOT gate is equivalent to a:',
    options: ['NAND gate', 'NOR gate', 'OR gate', 'XOR gate'],
    correctIndex: 0,
    explanation: 'NAND is defined as AND followed by NOT: Y = (A · B)′.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-53',
    type: 'mcq',
    question: 'An OR gate followed by a NOT gate gives a:',
    options: ['NAND gate', 'AND gate', 'NOR gate', 'XOR gate'],
    correctIndex: 2,
    explanation: 'NOR is OR followed by NOT: Y = (A + B)′.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-54',
    type: 'mcq',
    question: 'For inputs A = 1 and B = 0, the outputs of an AND gate and an OR gate respectively are:',
    options: ['1, 1', '0, 1', '1, 0', '0, 0'],
    correctIndex: 1,
    explanation: 'AND = 1 · 0 = 0 and OR = 1 + 0 = 1.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-55',
    type: 'mcq',
    question: 'The output of a NOR gate for inputs A = 1 and B = 0 is:',
    options: ['0', '1', 'Undefined', 'High impedance'],
    correctIndex: 0,
    explanation: 'OR = 1 + 0 = 1, and the NOT of 1 is 0.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-56',
    type: 'mcq',
    question: 'The Boolean expression Y = Ā · B̄ represents the gate:',
    options: ['AND', 'OR', 'NOR', 'NAND'],
    correctIndex: 2,
    explanation: 'By De Morgan theorem (A + B)′ = Ā · B̄, which is the NOR function.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-57',
    type: 'mcq',
    question: 'In a transistor, the base region is:',
    options: [
      'Thick and heavily doped',
      'Thick and lightly doped',
      'Thin and heavily doped',
      'Thin and lightly doped'
    ],
    correctIndex: 3,
    explanation: 'The base is made thin and lightly doped so that most carriers from the emitter reach the collector instead of recombining.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-58',
    type: 'mcq',
    question: 'In a transistor, the region with the largest size (area) is the:',
    options: ['Emitter', 'Collector', 'Base', 'All three are equal'],
    correctIndex: 1,
    explanation: 'The collector is larger than the emitter, as it has to dissipate most of the heat. The emitter is heavily doped, the base is thin and the collector is moderately doped.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-59',
    type: 'mcq',
    question: 'For a transistor to operate as an amplifier in the active region:',
    options: [
      'The emitter-base junction is forward biased and the collector-base junction is reverse biased',
      'Both junctions are forward biased',
      'Both junctions are reverse biased',
      'The emitter-base junction is reverse biased and the collector-base junction is forward biased'
    ],
    correctIndex: 0,
    explanation: 'This is the standard biasing for the active region: EB forward and CB reverse.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-60',
    type: 'mcq',
    question: 'The relation among the emitter current IE, base current IB and collector current IC is:',
    options: ['IB = IE + IC', 'IC = IE + IB', 'IE = IC − IB', 'IE = IB + IC'],
    correctIndex: 3,
    explanation: 'By Kirchhoff current law at the transistor, IE = IB + IC.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-61',
    type: 'mcq',
    question: 'In a common-emitter transistor circuit, the base current is 20 μA and the collector current is 2 mA. The current gain β is:',
    options: ['10', '50', '100', '200'],
    correctIndex: 2,
    explanation: 'β = IC/IB = (2 × 10⁻³)/(20 × 10⁻⁶) = 100.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-62',
    type: 'mcq',
    question: 'A transistor has a current gain β = 99. The value of α (= IC/IE) is:',
    options: ['0.99', '0.98', '0.9', '1.01'],
    correctIndex: 0,
    explanation: 'α = β/(1 + β) = 99/100 = 0.99.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-63',
    type: 'mcq',
    question: 'A transistor has α = 0.98. Its current gain β is:',
    options: ['9.8', '49', '98', '50.8'],
    correctIndex: 1,
    explanation: 'β = α/(1 − α) = 0.98/0.02 = 49.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-64',
    type: 'mcq',
    question: 'In a common-emitter amplifier, the phase difference between the input and output voltages is:',
    options: ['0°', '90°', '45°', '180°'],
    correctIndex: 3,
    explanation: 'A rise in the base voltage increases IC, which increases the drop across RC and lowers the collector voltage. So the output is inverted.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-65',
    type: 'mcq',
    question: 'A common-emitter amplifier has β = 100, a collector load of 2 kΩ and an input resistance of 1 kΩ. The magnitude of its voltage gain is:',
    options: ['200', '100', '50', '2'],
    correctIndex: 0,
    explanation: 'Av = β RL/Ri = 100 × 2000/1000 = 200 (with a negative sign for the phase inversion).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-66',
    type: 'mcq',
    question: 'For the amplifier in the previous question (β = 100, voltage gain 200), the power gain is:',
    options: ['2 × 10²', '2 × 10³', '2 × 10⁴', '2 × 10⁵'],
    correctIndex: 2,
    explanation: 'Power gain = current gain × voltage gain = β × Av = 100 × 200 = 2 × 10⁴.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-67',
    type: 'mcq',
    question: 'When a transistor is used as a switch, it operates between:',
    options: [
      'The active and cut-off regions',
      'The cut-off and saturation regions',
      'The active and saturation regions',
      'The breakdown and active regions'
    ],
    correctIndex: 1,
    explanation: 'As a switch the transistor is OFF in cut-off and fully ON in saturation.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-68',
    type: 'mcq',
    question: 'In a common-emitter switching circuit, when the input voltage is low and the transistor is in cut-off, the output voltage is:',
    options: ['Zero', 'Negative', 'Half of VCC', 'Equal to VCC'],
    correctIndex: 3,
    explanation: 'In cut-off IC ≈ 0, so there is no drop across the collector resistor and V₀ = VCC.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-69',
    type: 'mcq',
    question: 'An oscillator is basically an amplifier with:',
    options: ['Negative feedback', 'No feedback', 'Positive feedback', 'Zero gain'],
    correctIndex: 2,
    explanation: 'Part of the output is fed back in phase with the input (positive feedback), which sustains the oscillations without an external input.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-70',
    type: 'mcq',
    question: 'In an n-p-n transistor operating in the active region, the main current from emitter to collector is carried by:',
    options: [
      'Electrons',
      'Holes',
      'Positive ions',
      'Both holes and ions equally'
    ],
    correctIndex: 0,
    explanation: 'The n-type emitter injects electrons into the thin base, and most of them are swept into the n-type collector.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-71',
    type: 'mcq',
    question: 'A digital signal is one which:',
    options: [
      'Varies continuously with time',
      'Is always sinusoidal',
      'Is always zero',
      'Takes only discrete values, such as 0 and 1'
    ],
    correctIndex: 3,
    explanation: 'Digital signals have only two levels (high and low, or 1 and 0), whereas analogue signals vary continuously.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-72',
    type: 'mcq',
    question: 'A silicon sample with ni = 1.5 × 10¹⁶ m⁻³ is doped with arsenic so that ne = 5 × 10²² m⁻³. The hole concentration is approximately:',
    options: ['4.5 × 10¹⁰ m⁻³', '4.5 × 10⁹ m⁻³', '1.5 × 10⁹ m⁻³', '3.3 × 10¹⁶ m⁻³'],
    correctIndex: 1,
    explanation: 'nh = ni²/ne = (2.25 × 10³²)/(5 × 10²²) = 4.5 × 10⁹ m⁻³.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-73',
    type: 'mcq',
    question: 'In an n-type semiconductor, the minority charge carriers are:',
    options: ['Electrons', 'Positive ions', 'Holes', 'Neutrons'],
    correctIndex: 2,
    explanation: 'Electrons are the majority carriers in n-type material. The holes, produced by thermal generation, are the minority carriers.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-74',
    type: 'mcq',
    question: 'During the formation of a p-n junction, the holes diffuse from:',
    options: [
      'The p-side to the n-side',
      'The n-side to the p-side',
      'Neither side',
      'The collector to the base'
    ],
    correctIndex: 0,
    explanation: 'Holes are in higher concentration on the p-side, so they diffuse towards the n-side. Electrons diffuse the other way.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-75',
    type: 'mcq',
    question: 'The direction of the built-in electric field in the depletion region of a p-n junction is from:',
    options: [
      'The p-side to the n-side',
      'Along the plane of the junction',
      'The n-side to the p-side',
      'Random'
    ],
    correctIndex: 2,
    explanation: 'The n-side has positive donor ions and the p-side has negative acceptor ions, so the field points from n to p.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-76',
    type: 'mcq',
    question: 'A silicon diode (drop 0.7 V) is connected in forward bias in series with a resistor of 860 Ω to a 5 V battery. The current in the circuit is:',
    options: ['5.8 mA', '4.3 mA', '0.5 mA', '5 mA'],
    correctIndex: 3,
    explanation: 'I = (5 − 0.7)/860 = 4.3/860 = 5 × 10⁻³ A = 5 mA.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-77',
    type: 'mcq',
    question: 'An ideal silicon diode is reverse biased in series with a 1 kΩ resistor and a 5 V battery. The voltage across the resistor is approximately:',
    options: ['0 V', '5 V', '4.3 V', '0.7 V'],
    correctIndex: 0,
    explanation: 'In reverse bias only a tiny leakage current flows, so the drop across the resistor is almost zero. The full 5 V appears across the diode.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-78',
    type: 'mcq',
    question: 'The number of valence electrons in a silicon atom is:',
    options: ['2', '4', '6', '8'],
    correctIndex: 1,
    explanation: 'Silicon is in group 14, so it has 4 valence electrons. Each atom forms 4 covalent bonds in the crystal.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-79',
    type: 'mcq',
    question: 'Which of the following is an elemental semiconductor?',
    options: ['GaAs', 'Ge', 'CdS', 'InP'],
    correctIndex: 1,
    explanation: 'Silicon and germanium are elemental semiconductors. GaAs, CdS and InP are compound semiconductors.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-80',
    type: 'mcq',
    question: 'Which of the following is a compound semiconductor?',
    options: ['Si', 'Ge', 'CdS', 'Diamond'],
    correctIndex: 2,
    explanation: 'CdS is made of two elements, so it is a compound semiconductor. Si and Ge are elemental semiconductors.',
    difficulty: 'easy'
  }
];
export default semiconductorQuestions;