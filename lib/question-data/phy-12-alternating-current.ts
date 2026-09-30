<<<<<<< HEAD
import type { Question } from "@/lib/questionBank";
// NEET Physics Question Bank
// Chapter: Alternating Current
// 80 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'alternating-current-1',
    type: 'mcq',
    question: 'An alternating current (AC) is one whose magnitude changes continuously with time and whose direction:',
    options: [
      'Reverses periodically',
      'Remains fixed at all times',
      'Reverses only once, permanently',
      'Is completely random and unpredictable'
    ],
    correctIndex: 0,
    explanation: 'By definition, an AC source is one whose magnitude varies continuously and whose direction reverses periodically, unlike direct current (DC).',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-2',
    type: 'mcq',
    question: 'The instantaneous value of an alternating voltage, varying sinusoidally with time, is commonly expressed as:',
    options: [
      'v = v0 t',
      'v = v0/ωt',
      'v = v0 sin(ωt)',
      'v = v0 + ωt'
    ],
    correctIndex: 2,
    explanation: 'This is the standard equation for a sinusoidally varying AC voltage, where v0 is the peak value and ω is the angular frequency.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-3',
    type: 'mcq',
    question: 'In the equation v = v0 sin(ωt), the quantity v0 represents the:',
    options: [
      'RMS value of the voltage',
      'Peak (maximum) value of the voltage',
      'Average value of the voltage over one cycle',
      'Frequency of the voltage'
    ],
    correctIndex: 1,
    explanation: 'v0 specifically denotes the peak (maximum) value reached by the sinusoidally varying voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-4',
    type: 'mcq',
    question: 'The average value of a sinusoidal AC voltage (or current), calculated over one complete cycle, is:',
    options: [
      'Equal to the peak value',
      'Equal to half the peak value',
      'Equal to the RMS value',
      'Zero'
    ],
    correctIndex: 3,
    explanation: 'Since a sinusoidal wave has symmetric positive and negative excursions, its average value over one complete cycle is exactly zero.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-5',
    type: 'mcq',
    question: 'Since the average value of AC over a full cycle is zero, a more practically useful average is often calculated instead over:',
    options: [
      'Two complete cycles, which gives the same zero result',
      'Half a cycle',
      'A quarter of a cycle, which is never used in practice',
      'An indefinitely long time period, extending to infinity'
    ],
    correctIndex: 1,
    explanation: 'Because the full-cycle average is trivially zero, a more useful non-zero average is calculated over half a cycle.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-6',
    type: 'mcq',
    question: 'The average value of a sinusoidal AC voltage/current, calculated over half a cycle, is given by:',
    options: [
      '(2/π) × v0',
      'v0/√2',
      'v0/2',
      'π × v0'
    ],
    correctIndex: 0,
    explanation: 'The half-cycle average of a sinusoidal quantity is (2/π) times its peak value, a standard NEET result.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-7',
    type: 'mcq',
    question: 'The root mean square (RMS) value of an alternating current is defined as the value of a steady (DC) current that would produce the same amount of:',
    options: [
      'Peak voltage as the AC in the same time',
      'Average power as the AC over one complete cycle, but this describes RMS less precisely than heating effect',
      'Heat (or the same average power dissipation) in a given resistor, in the same time, as the actual AC does over a full cycle',
      'Total charge as the AC over one complete cycle'
    ],
    correctIndex: 2,
    explanation: 'RMS value is defined based on equivalent heating effect: the RMS value of AC is the value of steady DC that would produce the same heat dissipation over the same time.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-8',
    type: 'mcq',
    question: 'The RMS value of a sinusoidal AC voltage/current is related to its peak value by the formula:',
    options: [
      'vrms = v0',
      'vrms = (2/π)v0',
      'vrms = v0/√2',
      'vrms = v0 × √2'
    ],
    correctIndex: 2,
    explanation: 'This is the standard formula relating RMS and peak values for a sinusoidal waveform, vrms = v0/√2.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-9',
    type: 'mcq',
    question: 'The RMS value of AC is also sometimes referred to as the:',
    options: [
      'Peak value',
      'Instantaneous value',
      'Half-cycle average value, which is a distinct and different quantity',
      'Virtual value or effective value'
    ],
    correctIndex: 3,
    explanation: "RMS value is also commonly called the 'virtual value' or 'effective value' of AC.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-10',
    type: 'mcq',
    question: 'Ordinary AC voltmeters and ammeters, used to measure alternating voltage and current, are generally calibrated to directly display the:',
    options: [
      'RMS value',
      'Peak value',
      'Instantaneous value at the moment of reading',
      'Half-cycle average value'
    ],
    correctIndex: 0,
    explanation: 'Standard AC meters are calibrated to read RMS values directly, since these correspond to the effective magnitude of AC in terms of power delivered.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-11',
    type: 'mcq',
    question: "When household electrical supply is quoted as, for example, '230 V AC', this value specifically refers to the:",
    options: [
      'Peak value of the voltage',
      'RMS value of the voltage',
      'Half-cycle average value of the voltage',
      'Instantaneous value at a specific, arbitrary moment'
    ],
    correctIndex: 1,
    explanation: 'Standard AC supply voltage ratings refer to the RMS value, not the (higher) peak value of the actual sinusoidal waveform.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-12',
    type: 'mcq',
    question: 'The standard frequency of AC mains supply commonly used in India (and most other countries) is:',
    options: [
      '60 Hz',
      '50 Hz',
      '100 Hz',
      '25 Hz'
    ],
    correctIndex: 1,
    explanation: 'The standard AC mains frequency in India (and most of the world outside North America) is 50 Hz.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-13',
    type: 'mcq',
    question: 'When a purely resistive AC circuit (a resistor alone connected to an AC source) is analysed, the current through the resistor is found to be:',
    options: [
      'In phase with the applied voltage',
      'Leading the applied voltage by 90°',
      'Lagging the applied voltage by 90°',
      'Exactly 180° out of phase with the applied voltage'
    ],
    correctIndex: 0,
    explanation: 'In a purely resistive AC circuit, current and voltage are always exactly in phase, with no phase difference.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-14',
    type: 'mcq',
    question: 'In a purely resistive AC circuit, since voltage and current are in phase, the power consumed by the resistor is:',
    options: [
      'Zero at all times',
      'Alternating between positive and negative values with equal magnitude',
      'Negative on average, over one complete cycle',
      'Positive throughout the cycle, resulting in genuine power dissipation'
    ],
    correctIndex: 3,
    explanation: 'Because V and I are always in phase, their product (instantaneous power) is always positive, resulting in continuous power dissipation as heat.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-15',
    type: 'mcq',
    question: "For a purely resistive AC circuit, Ohm's law (V = IR) applies equally well to the:",
    options: [
      'Peak values of voltage and current exclusively, with no application to RMS values',
      'Peak values, RMS values, and instantaneous values of voltage and current alike',
      'Only the instantaneous values, with no application to peak or RMS values',
      'Only average (half-cycle) values, with no other application'
    ],
    correctIndex: 1,
    explanation: "Since V and I remain in phase at every instant in a resistive circuit, Ohm's law can be validly applied using peak, RMS, or instantaneous values.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-16',
    type: 'mcq',
    question: 'The instantaneous power dissipated in a purely resistive AC circuit varies with time as:',
    options: [
      'A function that oscillates between zero and a positive maximum, never becoming negative',
      'A function that oscillates between positive and negative values symmetrically',
      'A function that remains exactly constant at all times',
      'A function that is always exactly zero'
    ],
    correctIndex: 0,
    explanation: 'Since P = I²R (always non-negative), instantaneous power in a purely resistive AC circuit oscillates between zero and a positive maximum.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-17',
    type: 'mcq',
    question: 'For a purely resistive AC circuit, the average power dissipated over a complete cycle, in terms of RMS voltage and RMS current, is given by:',
    options: [
      'Pavg = V0 I0',
      'Pavg = V0 I0/2',
      'Pavg = Vrms × Irms',
      'Pavg = Vrms + Irms'
    ],
    correctIndex: 2,
    explanation: 'For a purely resistive circuit (V and I in phase), average power over a complete cycle is Pavg = Vrms × Irms.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-18',
    type: 'mcq',
    question: 'A resistor connected to an AC source behaves, in terms of the relationship between voltage and current, essentially the same as it would when connected to a:',
    options: [
      'Purely inductive circuit, with no resistive behaviour at all',
      'Purely capacitive circuit, with no resistive behaviour at all',
      'DC source, following Ohm\'s law in the same straightforward manner',
      'Source producing no current whatsoever'
    ],
    correctIndex: 2,
    explanation: "Since a resistor introduces no phase difference, its behaviour under AC (following Ohm's law directly) mirrors its behaviour under DC.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-19',
    type: 'mcq',
    question: 'When a purely inductive AC circuit (an ideal inductor alone connected to an AC source) is analysed, the current through the inductor is found to:',
    options: [
      'Be exactly in phase with the applied voltage',
      'Lead the applied voltage by 90°',
      'Be exactly 180° out of phase with the applied voltage',
      'Lag behind the applied voltage by 90°'
    ],
    correctIndex: 3,
    explanation: 'In a purely inductive AC circuit, the current lags behind the applied voltage by exactly 90°.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-20',
    type: 'mcq',
    question: 'The opposition offered by a pure inductor to the flow of alternating current, analogous to resistance in a resistive circuit, is called:',
    options: [
      'Inductive reactance',
      'Capacitive reactance',
      'Impedance, a term reserved for combined RLC circuits',
      'Conductance'
    ],
    correctIndex: 0,
    explanation: 'Inductive reactance (XL) is the term for the opposition an inductor offers to AC current, arising from self-inductance.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-21',
    type: 'mcq',
    question: 'The inductive reactance (XL) of a pure inductor of inductance L, connected to an AC source of angular frequency ω, is given by the formula:',
    options: [
      'XL = ωL',
      'XL = L/ω',
      'XL = 1/(ωL)',
      'XL = ω/L'
    ],
    correctIndex: 0,
    explanation: 'This is the standard formula for inductive reactance, XL = ωL.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-22',
    type: 'mcq',
    question: 'According to the formula XL = ωL, as the frequency of the AC supply increases, the inductive reactance of a given inductor:',
    options: [
      'Decreases',
      'Remains exactly unchanged',
      'Increases',
      'Becomes exactly zero'
    ],
    correctIndex: 2,
    explanation: 'Since XL = ωL = 2πfL, inductive reactance is directly proportional to frequency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-23',
    type: 'mcq',
    question: 'For a purely inductive AC circuit, in the special case of a direct current (DC) supply (effectively zero frequency), the inductive reactance becomes:',
    options: [
      'Infinite',
      'Zero',
      'Equal to the resistance of the circuit',
      'Undefined, with no meaningful value at all'
    ],
    correctIndex: 1,
    explanation: 'Since XL = ωL and DC corresponds to ω = 0, inductive reactance becomes zero for DC.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-24',
    type: 'mcq',
    question: 'The SI unit of inductive reactance (and reactance/impedance generally) is the same as that of:',
    options: [
      'Inductance (henry)',
      'Resistance (ohm)',
      'Frequency (hertz)',
      'Charge (coulomb)'
    ],
    correctIndex: 1,
    explanation: 'Since reactance relates voltage to current (V=IX), its SI unit is the ohm, the same as resistance.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-25',
    type: 'mcq',
    question: 'In a purely inductive AC circuit, the average power dissipated over a complete cycle is:',
    options: [
      'Zero',
      'Equal to Vrms × Irms, exactly as in a resistive circuit',
      'Always negative',
      'Equal to the peak power at every instant'
    ],
    correctIndex: 0,
    explanation: 'Because voltage and current are 90° out of phase, the average power dissipated over a complete cycle is exactly zero.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-26',
    type: 'mcq',
    question: 'The fact that a purely inductive AC circuit dissipates zero average power, despite carrying an alternating current, is why the current in such a circuit is sometimes referred to as a:',
    options: [
      'Resistive current',
      'Direct current',
      'Wattless current',
      'Zero current'
    ],
    correctIndex: 2,
    explanation: "Since no net power is dissipated despite current flowing, this current is termed a 'wattless current'.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-27',
    type: 'mcq',
    question: 'In a purely inductive AC circuit, energy supplied by the source during one part of the cycle (as current increases) is:',
    options: [
      'Permanently lost as heat, exactly as in a resistor',
      'Converted entirely into light energy',
      "Temporarily stored in the inductor's magnetic field, then returned to the source later in the cycle",
      'Permanently destroyed, violating energy conservation'
    ],
    correctIndex: 2,
    explanation: "Energy is alternately stored in the inductor's magnetic field and returned to the source, rather than permanently dissipated.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-28',
    type: 'mcq',
    question: "For a purely inductive AC circuit, the peak current I0 is related to the peak voltage V0 and the inductive reactance XL by the Ohm's-law-like relation:",
    options: [
      'I0 = V0 × XL',
      'I0 = XL/V0',
      'I0 = V0/XL',
      'I0 = V0 + XL'
    ],
    correctIndex: 2,
    explanation: "Analogous to Ohm's law, the peak current in a purely inductive circuit is I0 = V0/XL.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-29',
    type: 'mcq',
    question: 'When a purely capacitive AC circuit (an ideal capacitor alone connected to an AC source) is analysed, the current through the capacitor is found to:',
    options: [
      'Be exactly in phase with the applied voltage',
      'Lag behind the applied voltage by 90°',
      'Be exactly 180° out of phase with the applied voltage',
      'Lead the applied voltage by 90°'
    ],
    correctIndex: 3,
    explanation: 'In a purely capacitive AC circuit, the current leads the applied voltage by exactly 90°, opposite to a pure inductor.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-30',
    type: 'mcq',
    question: 'The opposition offered by a pure capacitor to the flow of alternating current is called:',
    options: [
      'Capacitive reactance',
      'Inductive reactance',
      'Impedance, a term reserved for combined RLC circuits',
      'Conductance'
    ],
    correctIndex: 0,
    explanation: 'Capacitive reactance (Xc) is the term for the opposition a capacitor offers to AC current.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-31',
    type: 'mcq',
    question: 'The capacitive reactance (Xc) of a capacitor of capacitance C, connected to an AC source of angular frequency ω, is given by the formula:',
    options: [
      'Xc = ωC',
      'Xc = 1/(ωC)',
      'Xc = ω/C',
      'Xc = C/ω'
    ],
    correctIndex: 1,
    explanation: 'This is the standard formula for capacitive reactance, Xc = 1/(ωC).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-32',
    type: 'mcq',
    question: 'According to the formula Xc = 1/(ωC), as the frequency of the AC supply increases, the capacitive reactance of a given capacitor:',
    options: [
      'Increases',
      'Remains exactly unchanged',
      'Becomes infinite',
      'Decreases'
    ],
    correctIndex: 3,
    explanation: 'Since Xc = 1/(ωC), capacitive reactance is inversely proportional to frequency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-33',
    type: 'mcq',
    question: 'For a purely capacitive AC circuit, in the special case of a direct current (DC) supply (effectively zero frequency), the capacitive reactance becomes:',
    options: [
      'Zero',
      'Infinite',
      'Equal to the resistance of the circuit',
      'Undefined, with no meaningful value at all'
    ],
    correctIndex: 1,
    explanation: 'Since Xc = 1/(ωC) and DC corresponds to zero frequency, capacitive reactance becomes infinite for DC (capacitor blocks DC once charged).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-34',
    type: 'mcq',
    question: 'The behaviour of a capacitor blocking DC (infinite reactance) but readily allowing high-frequency AC to pass (low reactance) is the basis for using capacitors in electronic circuits as:',
    options: [
      'Simple resistive heating elements',
      'Filters, to separate/block DC components from AC signals, or vice versa',
      'Permanent magnets',
      'Sources of steady, constant EMF'
    ],
    correctIndex: 1,
    explanation: 'This frequency-dependent blocking/passing behaviour is widely used in electronic filter circuits to separate AC and DC components.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-35',
    type: 'mcq',
    question: 'In a purely capacitive AC circuit, the average power dissipated over a complete cycle is:',
    options: [
      'Zero',
      'Equal to Vrms × Irms, exactly as in a resistive circuit',
      'Always negative',
      'Equal to the peak power at every instant'
    ],
    correctIndex: 0,
    explanation: 'As with a pure inductor, the 90° phase difference results in zero average power dissipation over a complete cycle.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-36',
    type: 'mcq',
    question: 'In a purely capacitive AC circuit, the current is, like that in a purely inductive circuit, referred to as a:',
    options: [
      'Resistive current',
      'Direct current',
      'Wattless current',
      'Zero current'
    ],
    correctIndex: 2,
    explanation: 'Since no net power is dissipated in a purely capacitive circuit, the current is likewise termed a wattless current.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-37',
    type: 'mcq',
    question: 'In a purely capacitive AC circuit, energy supplied by the source during one part of the cycle (as the capacitor charges) is:',
    options: [
      'Permanently lost as heat, exactly as in a resistor',
      'Converted entirely into light energy',
      "Temporarily stored in the capacitor's electric field, then returned to the source later in the cycle",
      'Permanently destroyed, violating energy conservation'
    ],
    correctIndex: 2,
    explanation: "Energy is alternately stored in the capacitor's electric field as it charges, then returned to the source as it discharges.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-38',
    type: 'mcq',
    question: 'For a purely capacitive AC circuit, the peak current I0 is related to the peak voltage V0 and the capacitive reactance Xc by the relation:',
    options: [
      'I0 = V0 × Xc',
      'I0 = Xc/V0',
      'I0 = V0/Xc',
      'I0 = V0 + Xc'
    ],
    correctIndex: 2,
    explanation: "Analogous to Ohm's law, the peak current in a purely capacitive circuit is I0 = V0/Xc.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-39',
    type: 'mcq',
    question: 'In a series LCR circuit (containing a resistor, inductor, and capacitor all connected in series with an AC source), the overall opposition to current flow, combining the effects of resistance and net reactance, is called the circuit\'s:',
    options: [
      'Resistance, exactly as in a purely resistive circuit',
      'Inductive reactance alone, ignoring the resistor and capacitor',
      'Capacitive reactance alone, ignoring the resistor and inductor',
      'Impedance'
    ],
    correctIndex: 3,
    explanation: 'Impedance (Z) is the term for the total, combined opposition to AC current flow in a circuit with both resistance and reactance.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-40',
    type: 'mcq',
    question: 'The impedance (Z) of a series LCR circuit, in terms of resistance R, inductive reactance XL, and capacitive reactance Xc, is given by the formula:',
    options: [
      'Z = √(R² + (XL − Xc)²)',
      'Z = R + XL + Xc',
      'Z = R × (XL − Xc)',
      'Z = √(R² − (XL − Xc)²)'
    ],
    correctIndex: 0,
    explanation: 'This is the standard formula for the impedance of a series LCR circuit, derived from a phasor diagram.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-41',
    type: 'mcq',
    question: 'In the impedance formula Z = √(R² + (XL − Xc)²), the term (XL − Xc) represents the:',
    options: [
      'Total resistance of the circuit',
      'Net reactance of the circuit',
      'Peak current of the circuit',
      'Power factor of the circuit'
    ],
    correctIndex: 1,
    explanation: 'The term (XL − Xc) represents the net (overall inductive-minus-capacitive) reactance of the circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-42',
    type: 'mcq',
    question: 'In a series LCR circuit, the phase angle (φ) between the applied voltage and the resulting current is given by the relation:',
    options: [
      'tanφ = R/(XL − Xc)',
      'sinφ = (XL − Xc)/R',
      'cosφ = (XL − Xc)/R',
      'tanφ = (XL − Xc)/R'
    ],
    correctIndex: 3,
    explanation: 'This is the standard formula for the phase angle in a series LCR circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-43',
    type: 'mcq',
    question: 'If, in a series LCR circuit, the inductive reactance (XL) is greater than the capacitive reactance (Xc), the overall circuit behaves predominantly:',
    options: [
      'Capacitively, with current leading voltage',
      'Inductively, with current lagging behind voltage',
      'Purely resistively, with voltage and current exactly in phase',
      'In a manner completely unrelated to either XL or Xc'
    ],
    correctIndex: 1,
    explanation: 'When XL > Xc, the net reactance is positive (net inductive), so current lags behind voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-44',
    type: 'mcq',
    question: 'If, in a series LCR circuit, the capacitive reactance (Xc) is greater than the inductive reactance (XL), the overall circuit behaves predominantly:',
    options: [
      'Capacitively, with current leading voltage',
      'Inductively, with current lagging behind voltage',
      'Purely resistively, with voltage and current exactly in phase',
      'In a manner completely unrelated to either XL or Xc'
    ],
    correctIndex: 0,
    explanation: 'When Xc > XL, the net reactance is negative (net capacitive), so current leads voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-45',
    type: 'mcq',
    question: 'If, in a series LCR circuit, the inductive reactance and capacitive reactance are exactly equal (XL = Xc), the net reactance of the circuit becomes:',
    options: [
      'Maximum',
      'Zero',
      'Equal to the resistance',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'When XL = Xc, the term (XL − Xc) becomes exactly zero, meaning the net reactance vanishes.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-46',
    type: 'mcq',
    question: 'When the net reactance of a series LCR circuit is zero (XL = Xc), the impedance of the circuit reduces to simply:',
    options: [
      'Z = R',
      'Z = XL',
      'Z = Xc',
      'Z = 0'
    ],
    correctIndex: 0,
    explanation: 'With (XL − Xc) = 0, the impedance formula reduces to Z = R, its minimum possible value.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-47',
    type: 'mcq',
    question: "In terms of the peak or RMS values, the current in a series LCR circuit is related to the applied voltage and the circuit's impedance by an Ohm's-law-like relation:",
    options: [
      'I = V × Z',
      'I = Z/V',
      'I = V/Z',
      'I = V + Z'
    ],
    correctIndex: 2,
    explanation: "Analogous to Ohm's law, current in a series LCR circuit is given by I = V/Z.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-48',
    type: 'mcq',
    question: 'A phasor diagram is a useful graphical tool for analysing AC circuits, representing the voltage and current in a given circuit element as:',
    options: [
      'Static, fixed numerical values with no directional/vector character at all',
      'Simple scalar quantities, unrelated to any rotating representation',
      'Rotating vectors, whose projections onto a reference axis represent the instantaneous values of the corresponding AC quantities',
      'Points on a purely static, non-rotating graph'
    ],
    correctIndex: 2,
    explanation: 'A phasor is a rotating vector whose projection onto a fixed axis gives the instantaneous value of the AC quantity.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-49',
    type: 'mcq',
    question: 'In the phasor diagram used to derive the LCR impedance formula, the voltage across the resistor (VR) and the net voltage across the reactive elements (VL − VC) are treated as being oriented:',
    options: [
      'In exactly the same direction, and simply added arithmetically',
      'In exactly opposite directions, and simply subtracted',
      'At a completely arbitrary angle, with no fixed geometric relationship',
      'Perpendicular (at 90°) to each other'
    ],
    correctIndex: 3,
    explanation: 'VR and (VL−VC) are treated as perpendicular components, leading to a Pythagorean relationship for total voltage/impedance.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-50',
    type: 'mcq',
    question: 'The overall analysis of a series LCR circuit, culminating in the impedance and phase-angle formulas, demonstrates that a circuit containing both inductive and capacitive elements can exhibit behaviour that is a combination of:',
    options: [
      'Both inductive lag and capacitive lead effects, which partially or fully cancel depending on the relative magnitudes of XL and Xc',
      'Neither inductive nor capacitive behaviour under any circumstances',
      'Only inductive behaviour, with capacitive effects always negligible',
      'Only capacitive behaviour, with inductive effects always negligible'
    ],
    correctIndex: 0,
    explanation: "A series LCR circuit's overall behaviour reflects the net combination of inductive lag and capacitive lead tendencies.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-51',
    type: 'mcq',
    question: 'Resonance in a series LCR circuit occurs at the specific frequency at which the inductive reactance and capacitive reactance become:',
    options: [
      'Maximum, simultaneously',
      'Exactly equal to each other',
      'Both exactly zero simultaneously',
      'Completely unrelated to one another'
    ],
    correctIndex: 1,
    explanation: 'Resonance occurs precisely when XL = Xc, the condition at which net reactance vanishes.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-52',
    type: 'mcq',
    question: 'The resonant angular frequency (ω0) of a series LCR circuit, at which XL = Xc, is given by the formula:',
    options: [
      'ω0 = LC',
      'ω0 = 1/√(LC)',
      'ω0 = √(LC)',
      'ω0 = 1/(LC)'
    ],
    correctIndex: 1,
    explanation: 'Setting XL = Xc and solving for ω gives the standard resonant angular frequency formula, ω0 = 1/√(LC).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-53',
    type: 'mcq',
    question: 'At resonance, since the net reactance of a series LCR circuit is zero, the impedance of the circuit reaches its:',
    options: [
      'Minimum possible value, equal to R',
      'Maximum possible value',
      'Value of exactly zero, with no resistance at all',
      'Value that is completely independent of R'
    ],
    correctIndex: 0,
    explanation: 'At resonance, impedance reduces to Z=R, the minimum possible value for the given circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-54',
    type: 'mcq',
    question: 'Since impedance is minimum (equal to R) at resonance, the current flowing in a series LCR circuit at resonance, for a given applied voltage, reaches its:',
    options: [
      'Minimum possible value',
      'Value of exactly zero',
      'Value that is completely independent of the applied voltage',
      'Maximum possible value'
    ],
    correctIndex: 3,
    explanation: 'Since I = V/Z and Z is minimum at resonance, current reaches its maximum possible value.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-55',
    type: 'mcq',
    question: 'At resonance, since the net reactance is zero, the phase angle between the applied voltage and the resulting current in a series LCR circuit becomes:',
    options: [
      '90°',
      '0°, i.e. voltage and current are exactly in phase',
      '180°',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'At resonance, tanφ = 0, so φ = 0° and the circuit behaves as if purely resistive.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-56',
    type: 'mcq',
    question: "The phenomenon of resonance in a series LCR circuit is analogous to mechanical resonance (as seen in forced oscillations), where maximum amplitude of oscillation occurs when the driving frequency matches the system's:",
    options: [
      'Natural frequency',
      'Damping coefficient',
      'Total mass',
      'Amplitude of oscillation, a circular definition with no independent meaning'
    ],
    correctIndex: 0,
    explanation: "Electrical resonance is directly analogous to mechanical resonance, where maximum response occurs at the system's natural frequency.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-57',
    type: 'mcq',
    question: 'Resonant LCR circuits find important practical applications in devices such as radio and television receivers, where they are used to:',
    options: [
      'Generate the electrical power supplied to the device',
      'Permanently store data, unrelated to any electrical signal',
      'Selectively tune in to (select) a signal of a particular desired frequency, from among many different frequencies present',
      'Convert AC power directly into mechanical motion'
    ],
    correctIndex: 2,
    explanation: 'Tuning circuits exploit LCR resonance, selectively amplifying a desired broadcast frequency while rejecting others.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-58',
    type: 'mcq',
    question: "The 'sharpness' of resonance in an LCR circuit, describing how narrow or broad the peak in current (as a function of frequency) appears near resonance, is quantitatively described by the circuit's:",
    options: [
      'Impedance alone, with no separate quality measure needed',
      'Resistance alone, with no separate quality measure needed',
      'Quality factor (Q-factor)',
      'Peak voltage alone, with no separate quality measure needed'
    ],
    correctIndex: 2,
    explanation: 'The Q-factor quantifies the sharpness of the resonance peak — a higher Q-factor means a narrower, sharper peak.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-59',
    type: 'mcq',
    question: 'A series LCR circuit with a low resistance R, for given values of L and C, generally shows a resonance peak that is:',
    options: [
      'Broad and relatively flat',
      'Completely absent',
      'Sharp and narrow, with a higher Q-factor',
      'Identical regardless of the value of R'
    ],
    correctIndex: 2,
    explanation: 'Lower resistance generally results in a sharper, narrower resonance peak (higher Q-factor).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-60',
    type: 'mcq',
    question: 'The Q-factor of a series LCR circuit can be expressed in terms of the resonant angular frequency ω0, inductance L, and resistance R by the formula:',
    options: [
      'Q = R/(ω0L)',
      'Q = ω0 × L × R',
      'Q = R × ω0/L',
      'Q = ω0L/R'
    ],
    correctIndex: 3,
    explanation: 'This is a standard formula for the Q-factor, Q = ω0L/R.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-61',
    type: 'mcq',
    question: 'The average power consumed in a general AC circuit, containing a combination of resistance and reactance, is given by the formula:',
    options: [
      'Pavg = Vrms × Irms, exactly as in a purely resistive circuit, with no other factor involved',
      'Pavg = Vrms × Irms × cosφ',
      'Pavg = Vrms × Irms × sinφ',
      'Pavg = Vrms + Irms × cosφ'
    ],
    correctIndex: 1,
    explanation: 'The general average power formula includes the power factor, cosφ, accounting for the phase difference between voltage and current.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-62',
    type: 'mcq',
    question: "The term cosφ appearing in the AC power formula, Pavg = Vrms Irms cosφ, is called the circuit's:",
    options: [
      'Impedance',
      'Power factor',
      'Quality factor',
      'Reactance'
    ],
    correctIndex: 1,
    explanation: 'cosφ is termed the power factor of the AC circuit.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-63',
    type: 'mcq',
    question: 'For a purely resistive AC circuit, where voltage and current are exactly in phase (φ = 0°), the power factor (cosφ) is:',
    options: [
      'Zero',
      '0.5',
      'Exactly 1, its maximum possible value',
      'Undefined'
    ],
    correctIndex: 2,
    explanation: 'Since φ = 0° for a purely resistive circuit, cosφ = 1, the maximum possible value.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-64',
    type: 'mcq',
    question: 'For a purely inductive or purely capacitive AC circuit, where voltage and current are exactly 90° out of phase, the power factor (cosφ) is:',
    options: [
      'Exactly 1',
      '0.5',
      'Exactly zero',
      'Undefined'
    ],
    correctIndex: 2,
    explanation: 'Since φ = 90° for a purely reactive circuit, cosφ = 0, meaning zero average power is dissipated.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-65',
    type: 'mcq',
    question: 'A power factor close to 1 (i.e. a small phase angle φ) is generally desirable in practical AC power systems (e.g. industrial electrical installations) mainly because it:',
    options: [
      'Maximises the real (useful) power delivered for a given supplied current, improving overall electrical efficiency',
      'Has no practical significance for electrical efficiency at all',
      'Always results in zero power dissipation, which is undesirable',
      'Indicates the circuit is purely reactive, with no resistive component at all'
    ],
    correctIndex: 0,
    explanation: 'A power factor close to 1 means most supplied apparent power is converted into useful real power, improving efficiency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-66',
    type: 'mcq',
    question: "Industrial facilities with a low power factor (due to large inductive loads such as motors) often use 'power factor correction' techniques, commonly involving the addition of:",
    options: [
      'Additional resistors in series with the load',
      'Capacitors, to help offset the inductive reactance and bring the overall phase angle closer to zero',
      'Additional inductors, to further increase the inductive reactance',
      'A direct current (DC) supply, replacing the AC supply entirely'
    ],
    correctIndex: 1,
    explanation: 'Capacitors, having opposite phase effect to inductors, can cancel inductive reactance and improve (raise) the power factor closer to 1.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-67',
    type: 'mcq',
    question: "The product of RMS voltage and RMS current in an AC circuit, Vrms × Irms (without the power factor term), is called the circuit's:",
    options: [
      'Real (average) power',
      'Apparent power',
      'Reactive power, a term with a slightly different specific meaning',
      'Instantaneous power'
    ],
    correctIndex: 1,
    explanation: 'The simple product Vrms × Irms, without accounting for phase angle, is termed the apparent power.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-68',
    type: 'mcq',
    question: 'The relationship between apparent power and real (average) power in an AC circuit can be summarised as:',
    options: [
      'Real power = Apparent power × power factor (cosφ)',
      'Apparent power = Real power × power factor, an inverted relationship',
      'Real power and apparent power are always exactly equal, regardless of phase angle',
      'Real power is always greater than apparent power'
    ],
    correctIndex: 0,
    explanation: 'Since Pavg = Vrms Irms cosφ, real power is the apparent power multiplied by the power factor.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-69',
    type: 'mcq',
    question: 'For a series LCR circuit operating exactly at its resonant frequency, where the circuit behaves as if purely resistive (φ = 0°), the power factor is:',
    options: [
      'Zero',
      '0.5',
      'Undefined',
      'Exactly equal to 1, its maximum value'
    ],
    correctIndex: 3,
    explanation: 'At resonance, since the circuit behaves as purely resistive, the power factor reaches its maximum value of 1.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-70',
    type: 'mcq',
    question: 'A circuit carrying wattless current (as in a purely inductive or purely capacitive circuit) still draws current from the AC source, even though it dissipates no real (average) power, which represents a practical inefficiency because:',
    options: [
      'The supply system must still be rated to handle this current, even though it delivers no useful power, representing wasted capacity',
      'Wattless current causes no strain on the electrical supply system whatsoever',
      'Wattless current is entirely fictional and does not actually flow in any real circuit',
      'Wattless current always damages electrical equipment permanently and immediately'
    ],
    correctIndex: 0,
    explanation: 'Even though wattless current delivers zero net power, it still flows and must be accommodated by supply infrastructure — hence power factor correction matters.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-71',
    type: 'mcq',
    question: 'An ideal LC circuit, consisting of an inductor and a capacitor connected together with no resistance, and set into oscillation (e.g. by initially charging the capacitor), exhibits:',
    options: [
      'A current that decays rapidly to zero and never oscillates',
      'Sustained, undamped electrical oscillations, with energy continuously exchanged between the inductor and capacitor',
      'A constant, unchanging (DC-like) current, with no oscillation at all',
      'No current flow whatsoever, under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'In an idealised LC circuit, energy oscillates indefinitely between the capacitor and inductor, producing sustained, undamped oscillations.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-72',
    type: 'mcq',
    question: 'The oscillations in an ideal LC circuit are directly analogous, in their underlying mathematics and physical behaviour, to:',
    options: [
      'Simple harmonic motion (SHM) of a mechanical oscillator, such as a mass on a spring',
      'Uniformly accelerated linear motion, with no oscillatory character at all',
      'Purely random, unpredictable motion',
      'Circular motion at a constant, unchanging speed, with no oscillatory character'
    ],
    correctIndex: 0,
    explanation: 'LC oscillations are mathematically analogous to mechanical SHM, with L and 1/C playing roles analogous to mass and spring constant.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-73',
    type: 'mcq',
    question: 'The natural (angular) frequency of oscillation of an ideal LC circuit is given by the same formula as the resonant frequency of a series LCR circuit, namely:',
    options: [
      'ω = 1/√(LC)',
      'ω = √(LC)',
      'ω = LC',
      'ω = 1/(LC)'
    ],
    correctIndex: 0,
    explanation: 'The natural oscillation frequency of an LC circuit is ω = 1/√(LC), the same as the LCR resonant frequency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-74',
    type: 'mcq',
    question: "In an ideal (resistance-free) LC circuit undergoing oscillation, at the instant when all the energy in the circuit is stored in the capacitor's electric field, the current in the circuit is:",
    options: [
      'Maximum',
      'Equal to half its maximum value',
      'Undefined',
      'Exactly zero'
    ],
    correctIndex: 3,
    explanation: "When all energy is in the capacitor, the current (associated with the inductor's field energy) is exactly zero.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-75',
    type: 'mcq',
    question: "Conversely, in an ideal LC circuit, at the instant when all the energy in the circuit is stored in the inductor's magnetic field, the charge on the capacitor is:",
    options: [
      'Maximum',
      'Exactly zero',
      'Equal to half its maximum value',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: "When all energy is stored in the inductor's magnetic field, the charge on the capacitor at that instant is exactly zero.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-76',
    type: 'mcq',
    question: 'In a real (non-ideal) LC circuit, the presence of some small but non-zero resistance in the circuit components causes the oscillations to:',
    options: [
      'Continue indefinitely with constant amplitude, exactly as in the ideal case',
      'Increase in amplitude over time, without any external energy input',
      'Gradually die out (damp) over time, as energy is dissipated as heat in the resistance',
      'Stop completely and instantly, the moment any resistance is present'
    ],
    correctIndex: 2,
    explanation: 'Real LC circuits inevitably have some resistance, which dissipates energy each cycle, causing the oscillations to gradually damp out.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-77',
    type: 'mcq',
    question: 'The overall study of alternating current, covering RMS values, reactance, impedance, resonance, and power in AC circuits, provides the essential theoretical foundation for understanding the operation of:',
    options: [
      'Only DC-powered battery devices, with no relevance to AC systems',
      'Only purely mechanical systems, with no relevance to electrical circuits',
      'Household electrical power systems, radio/communication tuning circuits, and a wide range of other AC-based electrical and electronic technologies',
      'Only nuclear reactors, with no broader relevance'
    ],
    correctIndex: 2,
    explanation: 'This chapter\'s concepts underpin an enormous range of real-world electrical technologies, from household power to radio tuning circuits.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-78',
    type: 'mcq',
    question: 'Devices that convert AC to DC (or vice versa), essential components in most modern electronic power supplies, are called:',
    options: [
      'Resistors, exclusively',
      'Inductors, exclusively',
      'Rectifiers (or, for the reverse conversion, inverters)',
      'Simple wires, with no special function at all'
    ],
    correctIndex: 2,
    explanation: 'Rectifiers convert AC to DC, while inverters perform the reverse DC-to-AC conversion.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-79',
    type: 'mcq',
    question: 'The choice of AC, rather than DC, for large-scale electrical power transmission and distribution is largely due to the fact that AC voltage levels can be efficiently changed using:',
    options: [
      'Transformers, which rely on electromagnetic induction and cannot function with steady DC',
      'Simple resistors, which work equally well for both AC and DC voltage conversion',
      'Capacitors alone, with no role for any other component',
      'Permanent magnets alone, with no electrical components involved'
    ],
    correctIndex: 0,
    explanation: 'Transformers, essential for efficient voltage stepping, rely on electromagnetic induction, which requires continuously changing (AC) current.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-80',
    type: 'mcq',
    question: 'Overall, the concepts of reactance, impedance, resonance, and power factor collectively demonstrate that AC circuit behaviour is significantly richer and more complex than that of simple DC circuits, primarily because AC circuits must account for the:',
    options: [
      'Total absence of any resistance in all AC circuits',
      'Complete irrelevance of circuit component values (R, L, C) to circuit behaviour',
      'Impossibility of ever calculating current or voltage in an AC circuit',
      'Time-varying nature of voltage and current, and the resulting phase relationships introduced by inductive and capacitive elements'
    ],
    correctIndex: 3,
    explanation: 'Unlike static DC analysis, AC analysis must account for the time-varying nature of voltage/current and resulting phase shifts from inductors and capacitors.',
    difficulty: 'medium'
  },
];
=======
import type { Question } from "@/lib/questionBank";
// NEET Physics Question Bank
// Chapter: Alternating Current
// 80 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'alternating-current-1',
    type: 'mcq',
    question: 'An alternating current (AC) is one whose magnitude changes continuously with time and whose direction:',
    options: [
      'Reverses periodically',
      'Remains fixed at all times',
      'Reverses only once, permanently',
      'Is completely random and unpredictable'
    ],
    correctIndex: 0,
    explanation: 'By definition, an AC source is one whose magnitude varies continuously and whose direction reverses periodically, unlike direct current (DC).',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-2',
    type: 'mcq',
    question: 'The instantaneous value of an alternating voltage, varying sinusoidally with time, is commonly expressed as:',
    options: [
      'v = v0 t',
      'v = v0/ωt',
      'v = v0 sin(ωt)',
      'v = v0 + ωt'
    ],
    correctIndex: 2,
    explanation: 'This is the standard equation for a sinusoidally varying AC voltage, where v0 is the peak value and ω is the angular frequency.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-3',
    type: 'mcq',
    question: 'In the equation v = v0 sin(ωt), the quantity v0 represents the:',
    options: [
      'RMS value of the voltage',
      'Peak (maximum) value of the voltage',
      'Average value of the voltage over one cycle',
      'Frequency of the voltage'
    ],
    correctIndex: 1,
    explanation: 'v0 specifically denotes the peak (maximum) value reached by the sinusoidally varying voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-4',
    type: 'mcq',
    question: 'The average value of a sinusoidal AC voltage (or current), calculated over one complete cycle, is:',
    options: [
      'Equal to the peak value',
      'Equal to half the peak value',
      'Equal to the RMS value',
      'Zero'
    ],
    correctIndex: 3,
    explanation: 'Since a sinusoidal wave has symmetric positive and negative excursions, its average value over one complete cycle is exactly zero.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-5',
    type: 'mcq',
    question: 'Since the average value of AC over a full cycle is zero, a more practically useful average is often calculated instead over:',
    options: [
      'Two complete cycles, which gives the same zero result',
      'Half a cycle',
      'A quarter of a cycle, which is never used in practice',
      'An indefinitely long time period, extending to infinity'
    ],
    correctIndex: 1,
    explanation: 'Because the full-cycle average is trivially zero, a more useful non-zero average is calculated over half a cycle.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-6',
    type: 'mcq',
    question: 'The average value of a sinusoidal AC voltage/current, calculated over half a cycle, is given by:',
    options: [
      '(2/π) × v0',
      'v0/√2',
      'v0/2',
      'π × v0'
    ],
    correctIndex: 0,
    explanation: 'The half-cycle average of a sinusoidal quantity is (2/π) times its peak value, a standard NEET result.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-7',
    type: 'mcq',
    question: 'The root mean square (RMS) value of an alternating current is defined as the value of a steady (DC) current that would produce the same amount of:',
    options: [
      'Peak voltage as the AC in the same time',
      'Average power as the AC over one complete cycle, but this describes RMS less precisely than heating effect',
      'Heat (or the same average power dissipation) in a given resistor, in the same time, as the actual AC does over a full cycle',
      'Total charge as the AC over one complete cycle'
    ],
    correctIndex: 2,
    explanation: 'RMS value is defined based on equivalent heating effect: the RMS value of AC is the value of steady DC that would produce the same heat dissipation over the same time.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-8',
    type: 'mcq',
    question: 'The RMS value of a sinusoidal AC voltage/current is related to its peak value by the formula:',
    options: [
      'vrms = v0',
      'vrms = (2/π)v0',
      'vrms = v0/√2',
      'vrms = v0 × √2'
    ],
    correctIndex: 2,
    explanation: 'This is the standard formula relating RMS and peak values for a sinusoidal waveform, vrms = v0/√2.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-9',
    type: 'mcq',
    question: 'The RMS value of AC is also sometimes referred to as the:',
    options: [
      'Peak value',
      'Instantaneous value',
      'Half-cycle average value, which is a distinct and different quantity',
      'Virtual value or effective value'
    ],
    correctIndex: 3,
    explanation: "RMS value is also commonly called the 'virtual value' or 'effective value' of AC.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-10',
    type: 'mcq',
    question: 'Ordinary AC voltmeters and ammeters, used to measure alternating voltage and current, are generally calibrated to directly display the:',
    options: [
      'RMS value',
      'Peak value',
      'Instantaneous value at the moment of reading',
      'Half-cycle average value'
    ],
    correctIndex: 0,
    explanation: 'Standard AC meters are calibrated to read RMS values directly, since these correspond to the effective magnitude of AC in terms of power delivered.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-11',
    type: 'mcq',
    question: "When household electrical supply is quoted as, for example, '230 V AC', this value specifically refers to the:",
    options: [
      'Peak value of the voltage',
      'RMS value of the voltage',
      'Half-cycle average value of the voltage',
      'Instantaneous value at a specific, arbitrary moment'
    ],
    correctIndex: 1,
    explanation: 'Standard AC supply voltage ratings refer to the RMS value, not the (higher) peak value of the actual sinusoidal waveform.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-12',
    type: 'mcq',
    question: 'The standard frequency of AC mains supply commonly used in India (and most other countries) is:',
    options: [
      '60 Hz',
      '50 Hz',
      '100 Hz',
      '25 Hz'
    ],
    correctIndex: 1,
    explanation: 'The standard AC mains frequency in India (and most of the world outside North America) is 50 Hz.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-13',
    type: 'mcq',
    question: 'When a purely resistive AC circuit (a resistor alone connected to an AC source) is analysed, the current through the resistor is found to be:',
    options: [
      'In phase with the applied voltage',
      'Leading the applied voltage by 90°',
      'Lagging the applied voltage by 90°',
      'Exactly 180° out of phase with the applied voltage'
    ],
    correctIndex: 0,
    explanation: 'In a purely resistive AC circuit, current and voltage are always exactly in phase, with no phase difference.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-14',
    type: 'mcq',
    question: 'In a purely resistive AC circuit, since voltage and current are in phase, the power consumed by the resistor is:',
    options: [
      'Zero at all times',
      'Alternating between positive and negative values with equal magnitude',
      'Negative on average, over one complete cycle',
      'Positive throughout the cycle, resulting in genuine power dissipation'
    ],
    correctIndex: 3,
    explanation: 'Because V and I are always in phase, their product (instantaneous power) is always positive, resulting in continuous power dissipation as heat.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-15',
    type: 'mcq',
    question: "For a purely resistive AC circuit, Ohm's law (V = IR) applies equally well to the:",
    options: [
      'Peak values of voltage and current exclusively, with no application to RMS values',
      'Peak values, RMS values, and instantaneous values of voltage and current alike',
      'Only the instantaneous values, with no application to peak or RMS values',
      'Only average (half-cycle) values, with no other application'
    ],
    correctIndex: 1,
    explanation: "Since V and I remain in phase at every instant in a resistive circuit, Ohm's law can be validly applied using peak, RMS, or instantaneous values.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-16',
    type: 'mcq',
    question: 'The instantaneous power dissipated in a purely resistive AC circuit varies with time as:',
    options: [
      'A function that oscillates between zero and a positive maximum, never becoming negative',
      'A function that oscillates between positive and negative values symmetrically',
      'A function that remains exactly constant at all times',
      'A function that is always exactly zero'
    ],
    correctIndex: 0,
    explanation: 'Since P = I²R (always non-negative), instantaneous power in a purely resistive AC circuit oscillates between zero and a positive maximum.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-17',
    type: 'mcq',
    question: 'For a purely resistive AC circuit, the average power dissipated over a complete cycle, in terms of RMS voltage and RMS current, is given by:',
    options: [
      'Pavg = V0 I0',
      'Pavg = V0 I0/2',
      'Pavg = Vrms × Irms',
      'Pavg = Vrms + Irms'
    ],
    correctIndex: 2,
    explanation: 'For a purely resistive circuit (V and I in phase), average power over a complete cycle is Pavg = Vrms × Irms.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-18',
    type: 'mcq',
    question: 'A resistor connected to an AC source behaves, in terms of the relationship between voltage and current, essentially the same as it would when connected to a:',
    options: [
      'Purely inductive circuit, with no resistive behaviour at all',
      'Purely capacitive circuit, with no resistive behaviour at all',
      'DC source, following Ohm\'s law in the same straightforward manner',
      'Source producing no current whatsoever'
    ],
    correctIndex: 2,
    explanation: "Since a resistor introduces no phase difference, its behaviour under AC (following Ohm's law directly) mirrors its behaviour under DC.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-19',
    type: 'mcq',
    question: 'When a purely inductive AC circuit (an ideal inductor alone connected to an AC source) is analysed, the current through the inductor is found to:',
    options: [
      'Be exactly in phase with the applied voltage',
      'Lead the applied voltage by 90°',
      'Be exactly 180° out of phase with the applied voltage',
      'Lag behind the applied voltage by 90°'
    ],
    correctIndex: 3,
    explanation: 'In a purely inductive AC circuit, the current lags behind the applied voltage by exactly 90°.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-20',
    type: 'mcq',
    question: 'The opposition offered by a pure inductor to the flow of alternating current, analogous to resistance in a resistive circuit, is called:',
    options: [
      'Inductive reactance',
      'Capacitive reactance',
      'Impedance, a term reserved for combined RLC circuits',
      'Conductance'
    ],
    correctIndex: 0,
    explanation: 'Inductive reactance (XL) is the term for the opposition an inductor offers to AC current, arising from self-inductance.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-21',
    type: 'mcq',
    question: 'The inductive reactance (XL) of a pure inductor of inductance L, connected to an AC source of angular frequency ω, is given by the formula:',
    options: [
      'XL = ωL',
      'XL = L/ω',
      'XL = 1/(ωL)',
      'XL = ω/L'
    ],
    correctIndex: 0,
    explanation: 'This is the standard formula for inductive reactance, XL = ωL.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-22',
    type: 'mcq',
    question: 'According to the formula XL = ωL, as the frequency of the AC supply increases, the inductive reactance of a given inductor:',
    options: [
      'Decreases',
      'Remains exactly unchanged',
      'Increases',
      'Becomes exactly zero'
    ],
    correctIndex: 2,
    explanation: 'Since XL = ωL = 2πfL, inductive reactance is directly proportional to frequency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-23',
    type: 'mcq',
    question: 'For a purely inductive AC circuit, in the special case of a direct current (DC) supply (effectively zero frequency), the inductive reactance becomes:',
    options: [
      'Infinite',
      'Zero',
      'Equal to the resistance of the circuit',
      'Undefined, with no meaningful value at all'
    ],
    correctIndex: 1,
    explanation: 'Since XL = ωL and DC corresponds to ω = 0, inductive reactance becomes zero for DC.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-24',
    type: 'mcq',
    question: 'The SI unit of inductive reactance (and reactance/impedance generally) is the same as that of:',
    options: [
      'Inductance (henry)',
      'Resistance (ohm)',
      'Frequency (hertz)',
      'Charge (coulomb)'
    ],
    correctIndex: 1,
    explanation: 'Since reactance relates voltage to current (V=IX), its SI unit is the ohm, the same as resistance.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-25',
    type: 'mcq',
    question: 'In a purely inductive AC circuit, the average power dissipated over a complete cycle is:',
    options: [
      'Zero',
      'Equal to Vrms × Irms, exactly as in a resistive circuit',
      'Always negative',
      'Equal to the peak power at every instant'
    ],
    correctIndex: 0,
    explanation: 'Because voltage and current are 90° out of phase, the average power dissipated over a complete cycle is exactly zero.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-26',
    type: 'mcq',
    question: 'The fact that a purely inductive AC circuit dissipates zero average power, despite carrying an alternating current, is why the current in such a circuit is sometimes referred to as a:',
    options: [
      'Resistive current',
      'Direct current',
      'Wattless current',
      'Zero current'
    ],
    correctIndex: 2,
    explanation: "Since no net power is dissipated despite current flowing, this current is termed a 'wattless current'.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-27',
    type: 'mcq',
    question: 'In a purely inductive AC circuit, energy supplied by the source during one part of the cycle (as current increases) is:',
    options: [
      'Permanently lost as heat, exactly as in a resistor',
      'Converted entirely into light energy',
      "Temporarily stored in the inductor's magnetic field, then returned to the source later in the cycle",
      'Permanently destroyed, violating energy conservation'
    ],
    correctIndex: 2,
    explanation: "Energy is alternately stored in the inductor's magnetic field and returned to the source, rather than permanently dissipated.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-28',
    type: 'mcq',
    question: "For a purely inductive AC circuit, the peak current I0 is related to the peak voltage V0 and the inductive reactance XL by the Ohm's-law-like relation:",
    options: [
      'I0 = V0 × XL',
      'I0 = XL/V0',
      'I0 = V0/XL',
      'I0 = V0 + XL'
    ],
    correctIndex: 2,
    explanation: "Analogous to Ohm's law, the peak current in a purely inductive circuit is I0 = V0/XL.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-29',
    type: 'mcq',
    question: 'When a purely capacitive AC circuit (an ideal capacitor alone connected to an AC source) is analysed, the current through the capacitor is found to:',
    options: [
      'Be exactly in phase with the applied voltage',
      'Lag behind the applied voltage by 90°',
      'Be exactly 180° out of phase with the applied voltage',
      'Lead the applied voltage by 90°'
    ],
    correctIndex: 3,
    explanation: 'In a purely capacitive AC circuit, the current leads the applied voltage by exactly 90°, opposite to a pure inductor.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-30',
    type: 'mcq',
    question: 'The opposition offered by a pure capacitor to the flow of alternating current is called:',
    options: [
      'Capacitive reactance',
      'Inductive reactance',
      'Impedance, a term reserved for combined RLC circuits',
      'Conductance'
    ],
    correctIndex: 0,
    explanation: 'Capacitive reactance (Xc) is the term for the opposition a capacitor offers to AC current.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-31',
    type: 'mcq',
    question: 'The capacitive reactance (Xc) of a capacitor of capacitance C, connected to an AC source of angular frequency ω, is given by the formula:',
    options: [
      'Xc = ωC',
      'Xc = 1/(ωC)',
      'Xc = ω/C',
      'Xc = C/ω'
    ],
    correctIndex: 1,
    explanation: 'This is the standard formula for capacitive reactance, Xc = 1/(ωC).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-32',
    type: 'mcq',
    question: 'According to the formula Xc = 1/(ωC), as the frequency of the AC supply increases, the capacitive reactance of a given capacitor:',
    options: [
      'Increases',
      'Remains exactly unchanged',
      'Becomes infinite',
      'Decreases'
    ],
    correctIndex: 3,
    explanation: 'Since Xc = 1/(ωC), capacitive reactance is inversely proportional to frequency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-33',
    type: 'mcq',
    question: 'For a purely capacitive AC circuit, in the special case of a direct current (DC) supply (effectively zero frequency), the capacitive reactance becomes:',
    options: [
      'Zero',
      'Infinite',
      'Equal to the resistance of the circuit',
      'Undefined, with no meaningful value at all'
    ],
    correctIndex: 1,
    explanation: 'Since Xc = 1/(ωC) and DC corresponds to zero frequency, capacitive reactance becomes infinite for DC (capacitor blocks DC once charged).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-34',
    type: 'mcq',
    question: 'The behaviour of a capacitor blocking DC (infinite reactance) but readily allowing high-frequency AC to pass (low reactance) is the basis for using capacitors in electronic circuits as:',
    options: [
      'Simple resistive heating elements',
      'Filters, to separate/block DC components from AC signals, or vice versa',
      'Permanent magnets',
      'Sources of steady, constant EMF'
    ],
    correctIndex: 1,
    explanation: 'This frequency-dependent blocking/passing behaviour is widely used in electronic filter circuits to separate AC and DC components.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-35',
    type: 'mcq',
    question: 'In a purely capacitive AC circuit, the average power dissipated over a complete cycle is:',
    options: [
      'Zero',
      'Equal to Vrms × Irms, exactly as in a resistive circuit',
      'Always negative',
      'Equal to the peak power at every instant'
    ],
    correctIndex: 0,
    explanation: 'As with a pure inductor, the 90° phase difference results in zero average power dissipation over a complete cycle.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-36',
    type: 'mcq',
    question: 'In a purely capacitive AC circuit, the current is, like that in a purely inductive circuit, referred to as a:',
    options: [
      'Resistive current',
      'Direct current',
      'Wattless current',
      'Zero current'
    ],
    correctIndex: 2,
    explanation: 'Since no net power is dissipated in a purely capacitive circuit, the current is likewise termed a wattless current.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-37',
    type: 'mcq',
    question: 'In a purely capacitive AC circuit, energy supplied by the source during one part of the cycle (as the capacitor charges) is:',
    options: [
      'Permanently lost as heat, exactly as in a resistor',
      'Converted entirely into light energy',
      "Temporarily stored in the capacitor's electric field, then returned to the source later in the cycle",
      'Permanently destroyed, violating energy conservation'
    ],
    correctIndex: 2,
    explanation: "Energy is alternately stored in the capacitor's electric field as it charges, then returned to the source as it discharges.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-38',
    type: 'mcq',
    question: 'For a purely capacitive AC circuit, the peak current I0 is related to the peak voltage V0 and the capacitive reactance Xc by the relation:',
    options: [
      'I0 = V0 × Xc',
      'I0 = Xc/V0',
      'I0 = V0/Xc',
      'I0 = V0 + Xc'
    ],
    correctIndex: 2,
    explanation: "Analogous to Ohm's law, the peak current in a purely capacitive circuit is I0 = V0/Xc.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-39',
    type: 'mcq',
    question: 'In a series LCR circuit (containing a resistor, inductor, and capacitor all connected in series with an AC source), the overall opposition to current flow, combining the effects of resistance and net reactance, is called the circuit\'s:',
    options: [
      'Resistance, exactly as in a purely resistive circuit',
      'Inductive reactance alone, ignoring the resistor and capacitor',
      'Capacitive reactance alone, ignoring the resistor and inductor',
      'Impedance'
    ],
    correctIndex: 3,
    explanation: 'Impedance (Z) is the term for the total, combined opposition to AC current flow in a circuit with both resistance and reactance.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-40',
    type: 'mcq',
    question: 'The impedance (Z) of a series LCR circuit, in terms of resistance R, inductive reactance XL, and capacitive reactance Xc, is given by the formula:',
    options: [
      'Z = √(R² + (XL − Xc)²)',
      'Z = R + XL + Xc',
      'Z = R × (XL − Xc)',
      'Z = √(R² − (XL − Xc)²)'
    ],
    correctIndex: 0,
    explanation: 'This is the standard formula for the impedance of a series LCR circuit, derived from a phasor diagram.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-41',
    type: 'mcq',
    question: 'In the impedance formula Z = √(R² + (XL − Xc)²), the term (XL − Xc) represents the:',
    options: [
      'Total resistance of the circuit',
      'Net reactance of the circuit',
      'Peak current of the circuit',
      'Power factor of the circuit'
    ],
    correctIndex: 1,
    explanation: 'The term (XL − Xc) represents the net (overall inductive-minus-capacitive) reactance of the circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-42',
    type: 'mcq',
    question: 'In a series LCR circuit, the phase angle (φ) between the applied voltage and the resulting current is given by the relation:',
    options: [
      'tanφ = R/(XL − Xc)',
      'sinφ = (XL − Xc)/R',
      'cosφ = (XL − Xc)/R',
      'tanφ = (XL − Xc)/R'
    ],
    correctIndex: 3,
    explanation: 'This is the standard formula for the phase angle in a series LCR circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-43',
    type: 'mcq',
    question: 'If, in a series LCR circuit, the inductive reactance (XL) is greater than the capacitive reactance (Xc), the overall circuit behaves predominantly:',
    options: [
      'Capacitively, with current leading voltage',
      'Inductively, with current lagging behind voltage',
      'Purely resistively, with voltage and current exactly in phase',
      'In a manner completely unrelated to either XL or Xc'
    ],
    correctIndex: 1,
    explanation: 'When XL > Xc, the net reactance is positive (net inductive), so current lags behind voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-44',
    type: 'mcq',
    question: 'If, in a series LCR circuit, the capacitive reactance (Xc) is greater than the inductive reactance (XL), the overall circuit behaves predominantly:',
    options: [
      'Capacitively, with current leading voltage',
      'Inductively, with current lagging behind voltage',
      'Purely resistively, with voltage and current exactly in phase',
      'In a manner completely unrelated to either XL or Xc'
    ],
    correctIndex: 0,
    explanation: 'When Xc > XL, the net reactance is negative (net capacitive), so current leads voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-45',
    type: 'mcq',
    question: 'If, in a series LCR circuit, the inductive reactance and capacitive reactance are exactly equal (XL = Xc), the net reactance of the circuit becomes:',
    options: [
      'Maximum',
      'Zero',
      'Equal to the resistance',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'When XL = Xc, the term (XL − Xc) becomes exactly zero, meaning the net reactance vanishes.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-46',
    type: 'mcq',
    question: 'When the net reactance of a series LCR circuit is zero (XL = Xc), the impedance of the circuit reduces to simply:',
    options: [
      'Z = R',
      'Z = XL',
      'Z = Xc',
      'Z = 0'
    ],
    correctIndex: 0,
    explanation: 'With (XL − Xc) = 0, the impedance formula reduces to Z = R, its minimum possible value.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-47',
    type: 'mcq',
    question: "In terms of the peak or RMS values, the current in a series LCR circuit is related to the applied voltage and the circuit's impedance by an Ohm's-law-like relation:",
    options: [
      'I = V × Z',
      'I = Z/V',
      'I = V/Z',
      'I = V + Z'
    ],
    correctIndex: 2,
    explanation: "Analogous to Ohm's law, current in a series LCR circuit is given by I = V/Z.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-48',
    type: 'mcq',
    question: 'A phasor diagram is a useful graphical tool for analysing AC circuits, representing the voltage and current in a given circuit element as:',
    options: [
      'Static, fixed numerical values with no directional/vector character at all',
      'Simple scalar quantities, unrelated to any rotating representation',
      'Rotating vectors, whose projections onto a reference axis represent the instantaneous values of the corresponding AC quantities',
      'Points on a purely static, non-rotating graph'
    ],
    correctIndex: 2,
    explanation: 'A phasor is a rotating vector whose projection onto a fixed axis gives the instantaneous value of the AC quantity.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-49',
    type: 'mcq',
    question: 'In the phasor diagram used to derive the LCR impedance formula, the voltage across the resistor (VR) and the net voltage across the reactive elements (VL − VC) are treated as being oriented:',
    options: [
      'In exactly the same direction, and simply added arithmetically',
      'In exactly opposite directions, and simply subtracted',
      'At a completely arbitrary angle, with no fixed geometric relationship',
      'Perpendicular (at 90°) to each other'
    ],
    correctIndex: 3,
    explanation: 'VR and (VL−VC) are treated as perpendicular components, leading to a Pythagorean relationship for total voltage/impedance.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-50',
    type: 'mcq',
    question: 'The overall analysis of a series LCR circuit, culminating in the impedance and phase-angle formulas, demonstrates that a circuit containing both inductive and capacitive elements can exhibit behaviour that is a combination of:',
    options: [
      'Both inductive lag and capacitive lead effects, which partially or fully cancel depending on the relative magnitudes of XL and Xc',
      'Neither inductive nor capacitive behaviour under any circumstances',
      'Only inductive behaviour, with capacitive effects always negligible',
      'Only capacitive behaviour, with inductive effects always negligible'
    ],
    correctIndex: 0,
    explanation: "A series LCR circuit's overall behaviour reflects the net combination of inductive lag and capacitive lead tendencies.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-51',
    type: 'mcq',
    question: 'Resonance in a series LCR circuit occurs at the specific frequency at which the inductive reactance and capacitive reactance become:',
    options: [
      'Maximum, simultaneously',
      'Exactly equal to each other',
      'Both exactly zero simultaneously',
      'Completely unrelated to one another'
    ],
    correctIndex: 1,
    explanation: 'Resonance occurs precisely when XL = Xc, the condition at which net reactance vanishes.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-52',
    type: 'mcq',
    question: 'The resonant angular frequency (ω0) of a series LCR circuit, at which XL = Xc, is given by the formula:',
    options: [
      'ω0 = LC',
      'ω0 = 1/√(LC)',
      'ω0 = √(LC)',
      'ω0 = 1/(LC)'
    ],
    correctIndex: 1,
    explanation: 'Setting XL = Xc and solving for ω gives the standard resonant angular frequency formula, ω0 = 1/√(LC).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-53',
    type: 'mcq',
    question: 'At resonance, since the net reactance of a series LCR circuit is zero, the impedance of the circuit reaches its:',
    options: [
      'Minimum possible value, equal to R',
      'Maximum possible value',
      'Value of exactly zero, with no resistance at all',
      'Value that is completely independent of R'
    ],
    correctIndex: 0,
    explanation: 'At resonance, impedance reduces to Z=R, the minimum possible value for the given circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-54',
    type: 'mcq',
    question: 'Since impedance is minimum (equal to R) at resonance, the current flowing in a series LCR circuit at resonance, for a given applied voltage, reaches its:',
    options: [
      'Minimum possible value',
      'Value of exactly zero',
      'Value that is completely independent of the applied voltage',
      'Maximum possible value'
    ],
    correctIndex: 3,
    explanation: 'Since I = V/Z and Z is minimum at resonance, current reaches its maximum possible value.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-55',
    type: 'mcq',
    question: 'At resonance, since the net reactance is zero, the phase angle between the applied voltage and the resulting current in a series LCR circuit becomes:',
    options: [
      '90°',
      '0°, i.e. voltage and current are exactly in phase',
      '180°',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'At resonance, tanφ = 0, so φ = 0° and the circuit behaves as if purely resistive.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-56',
    type: 'mcq',
    question: "The phenomenon of resonance in a series LCR circuit is analogous to mechanical resonance (as seen in forced oscillations), where maximum amplitude of oscillation occurs when the driving frequency matches the system's:",
    options: [
      'Natural frequency',
      'Damping coefficient',
      'Total mass',
      'Amplitude of oscillation, a circular definition with no independent meaning'
    ],
    correctIndex: 0,
    explanation: "Electrical resonance is directly analogous to mechanical resonance, where maximum response occurs at the system's natural frequency.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-57',
    type: 'mcq',
    question: 'Resonant LCR circuits find important practical applications in devices such as radio and television receivers, where they are used to:',
    options: [
      'Generate the electrical power supplied to the device',
      'Permanently store data, unrelated to any electrical signal',
      'Selectively tune in to (select) a signal of a particular desired frequency, from among many different frequencies present',
      'Convert AC power directly into mechanical motion'
    ],
    correctIndex: 2,
    explanation: 'Tuning circuits exploit LCR resonance, selectively amplifying a desired broadcast frequency while rejecting others.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-58',
    type: 'mcq',
    question: "The 'sharpness' of resonance in an LCR circuit, describing how narrow or broad the peak in current (as a function of frequency) appears near resonance, is quantitatively described by the circuit's:",
    options: [
      'Impedance alone, with no separate quality measure needed',
      'Resistance alone, with no separate quality measure needed',
      'Quality factor (Q-factor)',
      'Peak voltage alone, with no separate quality measure needed'
    ],
    correctIndex: 2,
    explanation: 'The Q-factor quantifies the sharpness of the resonance peak — a higher Q-factor means a narrower, sharper peak.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-59',
    type: 'mcq',
    question: 'A series LCR circuit with a low resistance R, for given values of L and C, generally shows a resonance peak that is:',
    options: [
      'Broad and relatively flat',
      'Completely absent',
      'Sharp and narrow, with a higher Q-factor',
      'Identical regardless of the value of R'
    ],
    correctIndex: 2,
    explanation: 'Lower resistance generally results in a sharper, narrower resonance peak (higher Q-factor).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-60',
    type: 'mcq',
    question: 'The Q-factor of a series LCR circuit can be expressed in terms of the resonant angular frequency ω0, inductance L, and resistance R by the formula:',
    options: [
      'Q = R/(ω0L)',
      'Q = ω0 × L × R',
      'Q = R × ω0/L',
      'Q = ω0L/R'
    ],
    correctIndex: 3,
    explanation: 'This is a standard formula for the Q-factor, Q = ω0L/R.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-61',
    type: 'mcq',
    question: 'The average power consumed in a general AC circuit, containing a combination of resistance and reactance, is given by the formula:',
    options: [
      'Pavg = Vrms × Irms, exactly as in a purely resistive circuit, with no other factor involved',
      'Pavg = Vrms × Irms × cosφ',
      'Pavg = Vrms × Irms × sinφ',
      'Pavg = Vrms + Irms × cosφ'
    ],
    correctIndex: 1,
    explanation: 'The general average power formula includes the power factor, cosφ, accounting for the phase difference between voltage and current.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-62',
    type: 'mcq',
    question: "The term cosφ appearing in the AC power formula, Pavg = Vrms Irms cosφ, is called the circuit's:",
    options: [
      'Impedance',
      'Power factor',
      'Quality factor',
      'Reactance'
    ],
    correctIndex: 1,
    explanation: 'cosφ is termed the power factor of the AC circuit.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-63',
    type: 'mcq',
    question: 'For a purely resistive AC circuit, where voltage and current are exactly in phase (φ = 0°), the power factor (cosφ) is:',
    options: [
      'Zero',
      '0.5',
      'Exactly 1, its maximum possible value',
      'Undefined'
    ],
    correctIndex: 2,
    explanation: 'Since φ = 0° for a purely resistive circuit, cosφ = 1, the maximum possible value.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-64',
    type: 'mcq',
    question: 'For a purely inductive or purely capacitive AC circuit, where voltage and current are exactly 90° out of phase, the power factor (cosφ) is:',
    options: [
      'Exactly 1',
      '0.5',
      'Exactly zero',
      'Undefined'
    ],
    correctIndex: 2,
    explanation: 'Since φ = 90° for a purely reactive circuit, cosφ = 0, meaning zero average power is dissipated.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-65',
    type: 'mcq',
    question: 'A power factor close to 1 (i.e. a small phase angle φ) is generally desirable in practical AC power systems (e.g. industrial electrical installations) mainly because it:',
    options: [
      'Maximises the real (useful) power delivered for a given supplied current, improving overall electrical efficiency',
      'Has no practical significance for electrical efficiency at all',
      'Always results in zero power dissipation, which is undesirable',
      'Indicates the circuit is purely reactive, with no resistive component at all'
    ],
    correctIndex: 0,
    explanation: 'A power factor close to 1 means most supplied apparent power is converted into useful real power, improving efficiency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-66',
    type: 'mcq',
    question: "Industrial facilities with a low power factor (due to large inductive loads such as motors) often use 'power factor correction' techniques, commonly involving the addition of:",
    options: [
      'Additional resistors in series with the load',
      'Capacitors, to help offset the inductive reactance and bring the overall phase angle closer to zero',
      'Additional inductors, to further increase the inductive reactance',
      'A direct current (DC) supply, replacing the AC supply entirely'
    ],
    correctIndex: 1,
    explanation: 'Capacitors, having opposite phase effect to inductors, can cancel inductive reactance and improve (raise) the power factor closer to 1.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-67',
    type: 'mcq',
    question: "The product of RMS voltage and RMS current in an AC circuit, Vrms × Irms (without the power factor term), is called the circuit's:",
    options: [
      'Real (average) power',
      'Apparent power',
      'Reactive power, a term with a slightly different specific meaning',
      'Instantaneous power'
    ],
    correctIndex: 1,
    explanation: 'The simple product Vrms × Irms, without accounting for phase angle, is termed the apparent power.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-68',
    type: 'mcq',
    question: 'The relationship between apparent power and real (average) power in an AC circuit can be summarised as:',
    options: [
      'Real power = Apparent power × power factor (cosφ)',
      'Apparent power = Real power × power factor, an inverted relationship',
      'Real power and apparent power are always exactly equal, regardless of phase angle',
      'Real power is always greater than apparent power'
    ],
    correctIndex: 0,
    explanation: 'Since Pavg = Vrms Irms cosφ, real power is the apparent power multiplied by the power factor.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-69',
    type: 'mcq',
    question: 'For a series LCR circuit operating exactly at its resonant frequency, where the circuit behaves as if purely resistive (φ = 0°), the power factor is:',
    options: [
      'Zero',
      '0.5',
      'Undefined',
      'Exactly equal to 1, its maximum value'
    ],
    correctIndex: 3,
    explanation: 'At resonance, since the circuit behaves as purely resistive, the power factor reaches its maximum value of 1.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-70',
    type: 'mcq',
    question: 'A circuit carrying wattless current (as in a purely inductive or purely capacitive circuit) still draws current from the AC source, even though it dissipates no real (average) power, which represents a practical inefficiency because:',
    options: [
      'The supply system must still be rated to handle this current, even though it delivers no useful power, representing wasted capacity',
      'Wattless current causes no strain on the electrical supply system whatsoever',
      'Wattless current is entirely fictional and does not actually flow in any real circuit',
      'Wattless current always damages electrical equipment permanently and immediately'
    ],
    correctIndex: 0,
    explanation: 'Even though wattless current delivers zero net power, it still flows and must be accommodated by supply infrastructure — hence power factor correction matters.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-71',
    type: 'mcq',
    question: 'An ideal LC circuit, consisting of an inductor and a capacitor connected together with no resistance, and set into oscillation (e.g. by initially charging the capacitor), exhibits:',
    options: [
      'A current that decays rapidly to zero and never oscillates',
      'Sustained, undamped electrical oscillations, with energy continuously exchanged between the inductor and capacitor',
      'A constant, unchanging (DC-like) current, with no oscillation at all',
      'No current flow whatsoever, under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'In an idealised LC circuit, energy oscillates indefinitely between the capacitor and inductor, producing sustained, undamped oscillations.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-72',
    type: 'mcq',
    question: 'The oscillations in an ideal LC circuit are directly analogous, in their underlying mathematics and physical behaviour, to:',
    options: [
      'Simple harmonic motion (SHM) of a mechanical oscillator, such as a mass on a spring',
      'Uniformly accelerated linear motion, with no oscillatory character at all',
      'Purely random, unpredictable motion',
      'Circular motion at a constant, unchanging speed, with no oscillatory character'
    ],
    correctIndex: 0,
    explanation: 'LC oscillations are mathematically analogous to mechanical SHM, with L and 1/C playing roles analogous to mass and spring constant.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-73',
    type: 'mcq',
    question: 'The natural (angular) frequency of oscillation of an ideal LC circuit is given by the same formula as the resonant frequency of a series LCR circuit, namely:',
    options: [
      'ω = 1/√(LC)',
      'ω = √(LC)',
      'ω = LC',
      'ω = 1/(LC)'
    ],
    correctIndex: 0,
    explanation: 'The natural oscillation frequency of an LC circuit is ω = 1/√(LC), the same as the LCR resonant frequency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-74',
    type: 'mcq',
    question: "In an ideal (resistance-free) LC circuit undergoing oscillation, at the instant when all the energy in the circuit is stored in the capacitor's electric field, the current in the circuit is:",
    options: [
      'Maximum',
      'Equal to half its maximum value',
      'Undefined',
      'Exactly zero'
    ],
    correctIndex: 3,
    explanation: "When all energy is in the capacitor, the current (associated with the inductor's field energy) is exactly zero.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-75',
    type: 'mcq',
    question: "Conversely, in an ideal LC circuit, at the instant when all the energy in the circuit is stored in the inductor's magnetic field, the charge on the capacitor is:",
    options: [
      'Maximum',
      'Exactly zero',
      'Equal to half its maximum value',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: "When all energy is stored in the inductor's magnetic field, the charge on the capacitor at that instant is exactly zero.",
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-76',
    type: 'mcq',
    question: 'In a real (non-ideal) LC circuit, the presence of some small but non-zero resistance in the circuit components causes the oscillations to:',
    options: [
      'Continue indefinitely with constant amplitude, exactly as in the ideal case',
      'Increase in amplitude over time, without any external energy input',
      'Gradually die out (damp) over time, as energy is dissipated as heat in the resistance',
      'Stop completely and instantly, the moment any resistance is present'
    ],
    correctIndex: 2,
    explanation: 'Real LC circuits inevitably have some resistance, which dissipates energy each cycle, causing the oscillations to gradually damp out.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-77',
    type: 'mcq',
    question: 'The overall study of alternating current, covering RMS values, reactance, impedance, resonance, and power in AC circuits, provides the essential theoretical foundation for understanding the operation of:',
    options: [
      'Only DC-powered battery devices, with no relevance to AC systems',
      'Only purely mechanical systems, with no relevance to electrical circuits',
      'Household electrical power systems, radio/communication tuning circuits, and a wide range of other AC-based electrical and electronic technologies',
      'Only nuclear reactors, with no broader relevance'
    ],
    correctIndex: 2,
    explanation: 'This chapter\'s concepts underpin an enormous range of real-world electrical technologies, from household power to radio tuning circuits.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-78',
    type: 'mcq',
    question: 'Devices that convert AC to DC (or vice versa), essential components in most modern electronic power supplies, are called:',
    options: [
      'Resistors, exclusively',
      'Inductors, exclusively',
      'Rectifiers (or, for the reverse conversion, inverters)',
      'Simple wires, with no special function at all'
    ],
    correctIndex: 2,
    explanation: 'Rectifiers convert AC to DC, while inverters perform the reverse DC-to-AC conversion.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-79',
    type: 'mcq',
    question: 'The choice of AC, rather than DC, for large-scale electrical power transmission and distribution is largely due to the fact that AC voltage levels can be efficiently changed using:',
    options: [
      'Transformers, which rely on electromagnetic induction and cannot function with steady DC',
      'Simple resistors, which work equally well for both AC and DC voltage conversion',
      'Capacitors alone, with no role for any other component',
      'Permanent magnets alone, with no electrical components involved'
    ],
    correctIndex: 0,
    explanation: 'Transformers, essential for efficient voltage stepping, rely on electromagnetic induction, which requires continuously changing (AC) current.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-80',
    type: 'mcq',
    question: 'Overall, the concepts of reactance, impedance, resonance, and power factor collectively demonstrate that AC circuit behaviour is significantly richer and more complex than that of simple DC circuits, primarily because AC circuits must account for the:',
    options: [
      'Total absence of any resistance in all AC circuits',
      'Complete irrelevance of circuit component values (R, L, C) to circuit behaviour',
      'Impossibility of ever calculating current or voltage in an AC circuit',
      'Time-varying nature of voltage and current, and the resulting phase relationships introduced by inductive and capacitive elements'
    ],
    correctIndex: 3,
    explanation: 'Unlike static DC analysis, AC analysis must account for the time-varying nature of voltage/current and resulting phase shifts from inductors and capacitors.',
    difficulty: 'medium'
  },
];
>>>>>>> bf121c5cb1081c5c01badceff1fae1a37137447a
export default questions;