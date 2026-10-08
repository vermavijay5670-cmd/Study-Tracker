import type { Question } from "@/lib/questionBank";


const questions: Question[] = [
  {
    id: 'nuclei-1',
    type: 'mcq',
    question: 'The radius of a nucleus of mass number A is given by R = R₀A^(1/3). The value of R₀ is approximately:',
    options: ['0.12 fm', '12 fm', '1.2 fm', '120 fm'],
    correctIndex: 2,
    explanation: 'Experiments give R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-2',
    type: 'mcq',
    question: 'The ratio of the radii of two nuclei having mass numbers 8 and 27 is:',
    options: ['2 : 3', '3 : 2', '8 : 27', '4 : 9'],
    correctIndex: 0,
    explanation: 'R ∝ A^(1/3), so R₁/R₂ = (8/27)^(1/3) = 2/3.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-3',
    type: 'mcq',
    question: 'The density of nuclear matter is:',
    options: [
      'Proportional to the mass number A',
      'Proportional to A^(2/3)',
      'Inversely proportional to A',
      'Independent of the mass number'
    ],
    correctIndex: 3,
    explanation: 'Mass ∝ A and volume ∝ R³ ∝ A, so the density is the same for all nuclei.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-4',
    type: 'mcq',
    question: 'The order of magnitude of the density of nuclear matter is:',
    options: ['10¹³ kg/m³', '10¹⁷ kg/m³', '10³ kg/m³', '10²⁰ kg/m³'],
    correctIndex: 1,
    explanation: 'Nuclear density is about 2.3 × 10¹⁷ kg/m³, which is about 10¹⁴ times that of water.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-5',
    type: 'mcq',
    question: 'One atomic mass unit (1 u) is equivalent to an energy of:',
    options: ['93.15 MeV', '931.5 MeV', '9315 MeV', '1.6 MeV'],
    correctIndex: 1,
    explanation: '1 u = 1.66 × 10⁻²⁷ kg and E = mc² gives 931.5 MeV.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-6',
    type: 'mcq',
    question: 'One atomic mass unit is defined as:',
    options: [
      'The mass of a proton',
      '1/16 of the mass of an oxygen-16 atom',
      '1/12 of the mass of a carbon-12 nucleus',
      '1/12 of the mass of a carbon-12 atom'
    ],
    correctIndex: 3,
    explanation: 'By definition 1 u is one-twelfth of the mass of a neutral carbon-12 atom, which is 1.66 × 10⁻²⁷ kg.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-7',
    type: 'mcq',
    question: 'Nuclides having the same atomic number but different mass numbers are called:',
    options: ['Isobars', 'Isotones', 'Isotopes', 'Isomers'],
    correctIndex: 2,
    explanation: 'Isotopes have the same Z (same number of protons) but different A, because the number of neutrons differs.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-8',
    type: 'mcq',
    question: '¹⁴₆C and ¹⁴₇N are:',
    options: ['Isobars', 'Isotopes', 'Isotones', 'Isomers'],
    correctIndex: 0,
    explanation: 'Both have the same mass number (14) but different atomic numbers, so they are isobars.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-9',
    type: 'mcq',
    question: '³₁H and ⁴₂He are:',
    options: ['Isotones', 'Isotopes', 'Isobars', 'Isomers'],
    correctIndex: 0,
    explanation: '³₁H has 3 − 1 = 2 neutrons and ⁴₂He has 4 − 2 = 2 neutrons. Same neutron number means isotones.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-10',
    type: 'mcq',
    question: 'The number of neutrons in the nucleus of ²³⁵₉₂U is:',
    options: ['92', '235', '143', '51'],
    correctIndex: 2,
    explanation: 'N = A − Z = 235 − 92 = 143.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-11',
    type: 'mcq',
    question: 'Which of the following is true about the nuclear force?',
    options: [
      'It is long ranged and conservative',
      'It depends on the charge of the nucleons',
      'It obeys the inverse square law',
      'It is short ranged and independent of charge'
    ],
    correctIndex: 3,
    explanation: 'The nuclear force acts over only a few fermi, and the proton-proton, neutron-neutron and proton-neutron forces are nearly equal.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-12',
    type: 'mcq',
    question: 'Which of the following forces is the strongest inside the nucleus?',
    options: ['Gravitational force', 'Nuclear (strong) force', 'Coulomb force', 'Weak force'],
    correctIndex: 1,
    explanation: 'The strong nuclear force is much stronger than the Coulomb force. It overcomes the repulsion between protons.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-13',
    type: 'mcq',
    question: 'The nuclear force between two nucleons becomes repulsive when their separation is less than about:',
    options: ['0.1 fm', '0.4 fm', '0.8 fm', '2 fm'],
    correctIndex: 2,
    explanation: 'The force is attractive for separations larger than about 0.8 fm and strongly repulsive below that.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-14',
    type: 'mcq',
    question: 'The mass defect of a nucleus is:',
    options: [
      'The difference between the total mass of its separate nucleons and the mass of the nucleus',
      'The mass of its neutrons only',
      'The difference between the masses of a proton and a neutron',
      'The mass of the nucleus'
    ],
    correctIndex: 0,
    explanation: 'Δm = [Zmp + (A − Z)mn] − M. The nucleus is lighter than its free constituents.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-15',
    type: 'mcq',
    question: 'The mass defect of a nucleus is 0.03 u. Its binding energy is approximately:',
    options: ['0.03 MeV', '3.1 MeV', '931.5 MeV', '27.9 MeV'],
    correctIndex: 3,
    explanation: 'B.E. = Δm × 931.5 MeV/u = 0.03 × 931.5 ≈ 27.9 MeV.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-16',
    type: 'mcq',
    question: 'The binding energy of a deuteron is 2.22 MeV. Its binding energy per nucleon is:',
    options: ['2.22 MeV', '1.11 MeV', '4.44 MeV', '0.555 MeV'],
    correctIndex: 1,
    explanation: 'Deuteron has 2 nucleons, so B.E. per nucleon = 2.22/2 = 1.11 MeV.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-17',
    type: 'mcq',
    question: 'The binding energy per nucleon is maximum for nuclei with mass number near:',
    options: ['2', '16', '240', '56'],
    correctIndex: 3,
    explanation: 'The curve peaks at about 8.75 MeV near A = 56 (iron), so such nuclei are the most stable.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-18',
    type: 'mcq',
    question: 'For nuclei with mass number between about 30 and 170, the average binding energy per nucleon is approximately:',
    options: ['1 MeV', '4 MeV', '8 MeV', '20 MeV'],
    correctIndex: 2,
    explanation: 'The curve is nearly flat in this range at about 8 MeV per nucleon.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-19',
    type: 'mcq',
    question: 'Energy is released in nuclear fusion of light nuclei because the product nucleus has:',
    options: [
      'A higher binding energy per nucleon',
      'A lower binding energy per nucleon',
      'A larger mass than the reactants',
      'Less stability than the reactants'
    ],
    correctIndex: 0,
    explanation: 'Light nuclei lie on the rising part of the B.E./nucleon curve. Fusing them moves to a more tightly bound nucleus and releases energy.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-20',
    type: 'mcq',
    question: 'The approximate energy released per fission of a ²³⁵U nucleus is:',
    options: ['20 MeV', '200 MeV', '2 MeV', '2000 MeV'],
    correctIndex: 1,
    explanation: 'About 200 MeV is released per fission event.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-21',
    type: 'mcq',
    question: 'The mass of a ⁴He nucleus is 4.0015 u, mp = 1.0073 u and mn = 1.0087 u. The binding energy of the helium nucleus is approximately:',
    options: ['7.1 MeV', '14.2 MeV', '28.4 MeV', '56.8 MeV'],
    correctIndex: 2,
    explanation: 'Δm = 2(1.0073) + 2(1.0087) − 4.0015 = 0.0305 u. B.E. = 0.0305 × 931.5 ≈ 28.4 MeV.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-22',
    type: 'mcq',
    question: 'Radioactivity was discovered by:',
    options: ['Rutherford', 'Marie Curie', 'J. J. Thomson', 'Henri Becquerel'],
    correctIndex: 3,
    explanation: 'Henri Becquerel discovered radioactivity in 1896 while studying uranium salts.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-23',
    type: 'mcq',
    question: 'The number of undecayed nuclei N at time t in a radioactive sample with decay constant λ is given by:',
    options: ['N₀e^(λt)', 'N₀e^(−λt)', 'N₀(1 − e^(−λt))', 'N₀λt'],
    correctIndex: 1,
    explanation: 'The law of radioactive decay dN/dt = −λN integrates to N = N₀e^(−λt).',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-24',
    type: 'mcq',
    question: 'The half-life T½ and the decay constant λ are related by:',
    options: ['T½ = 0.693/λ', 'T½ = λ/0.693', 'T½ = 0.693λ', 'T½ = 1/λ'],
    correctIndex: 0,
    explanation: 'Put N = N₀/2 in N = N₀e^(−λt) to get T½ = ln 2/λ = 0.693/λ.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-25',
    type: 'mcq',
    question: 'The mean life of a radioactive substance compared to its half-life is:',
    options: [
      'Equal to the half-life',
      'Less than the half-life',
      'About 1.44 times the half-life',
      'Exactly twice the half-life'
    ],
    correctIndex: 2,
    explanation: 'τ = 1/λ and T½ = 0.693/λ, so τ = T½/0.693 ≈ 1.44 T½.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-26',
    type: 'mcq',
    question: 'The fraction of a radioactive sample that remains undecayed after 3 half-lives is:',
    options: ['1/8', '1/6', '1/3', '1/9'],
    correctIndex: 0,
    explanation: 'Fraction left = (1/2)³ = 1/8.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-27',
    type: 'mcq',
    question: 'A radioactive sample of 80 g has a half-life of 5 days. The amount left after 20 days is:',
    options: ['10 g', '5 g', '2.5 g', '20 g'],
    correctIndex: 1,
    explanation: '20 days is 4 half-lives. Amount left = 80/2⁴ = 5 g.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-28',
    type: 'mcq',
    question: 'After two half-lives, the fraction of a radioactive sample that has decayed is:',
    options: ['1/4', '1/2', '7/8', '3/4'],
    correctIndex: 3,
    explanation: 'Undecayed fraction = 1/4, so decayed fraction = 1 − 1/4 = 3/4.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-29',
    type: 'mcq',
    question: 'The activity of a radioactive sample falls from 1600 counts/min to 100 counts/min in 2 hours. Its half-life is:',
    options: ['15 min', '20 min', '30 min', '60 min'],
    correctIndex: 2,
    explanation: '1600 → 100 is a factor of 16 = 2⁴, so 4 half-lives = 120 min. T½ = 30 min.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-30',
    type: 'mcq',
    question: 'One becquerel (Bq) is equal to:',
    options: ['1 decay per minute', '1 decay per second', '3.7 × 10¹⁰ decays per second', '1 MeV'],
    correctIndex: 1,
    explanation: 'The SI unit of activity, the becquerel, is one disintegration per second.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-31',
    type: 'mcq',
    question: 'One curie is equal to:',
    options: ['3.7 × 10¹⁰ decays/s', '3.7 × 10⁷ decays/s', '1 × 10⁶ decays/s', '3.7 × 10¹³ decays/s'],
    correctIndex: 0,
    explanation: '1 Ci = 3.7 × 10¹⁰ Bq, the activity of 1 g of radium.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-32',
    type: 'mcq',
    question: 'The half-life of a radioactive element is 10 s. Its decay constant is:',
    options: ['0.693 s⁻¹', '6.93 s⁻¹', '0.00693 s⁻¹', '0.0693 s⁻¹'],
    correctIndex: 3,
    explanation: 'λ = 0.693/T½ = 0.693/10 = 0.0693 s⁻¹.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-33',
    type: 'mcq',
    question: 'The decay constant of a radioactive element is 0.02 s⁻¹. Its mean life is:',
    options: ['0.02 s', '25 s', '35 s', '50 s'],
    correctIndex: 3,
    explanation: 'τ = 1/λ = 1/0.02 = 50 s.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-34',
    type: 'mcq',
    question: 'In α-decay, the mass number and atomic number of the nucleus decrease respectively by:',
    options: ['2 and 4', '4 and 2', '4 and 4', '2 and 2'],
    correctIndex: 1,
    explanation: 'An α-particle is a ⁴₂He nucleus, so A decreases by 4 and Z by 2.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-35',
    type: 'mcq',
    question: 'In β⁻ decay, the atomic number of the nucleus:',
    options: ['Increases by 1', 'Decreases by 1', 'Decreases by 2', 'Remains unchanged'],
    correctIndex: 0,
    explanation: 'A neutron changes into a proton: n → p + e⁻ + antineutrino. So Z increases by 1 and A stays the same.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-36',
    type: 'mcq',
    question: 'In β⁺ (positron) decay, the nucleus undergoes the following change:',
    options: [
      'Z increases by 1, A unchanged',
      'Z decreases by 2, A decreases by 4',
      'Z decreases by 1, A unchanged',
      'Z unchanged, A decreases by 1'
    ],
    correctIndex: 2,
    explanation: 'A proton changes into a neutron: p → n + e⁺ + neutrino. Z decreases by 1 and A is unchanged.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-37',
    type: 'mcq',
    question: 'On emission of a γ-ray photon, a nucleus:',
    options: [
      'Loses a proton',
      'Changes neither its mass number nor its atomic number',
      'Gains a neutron',
      'Changes its atomic number by 1'
    ],
    correctIndex: 1,
    explanation: 'In γ-decay the nucleus goes from an excited state to a lower energy state. A and Z remain the same.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-38',
    type: 'mcq',
    question: 'The number of α and β⁻ particles emitted when ²³⁸₉₂U changes into ²⁰⁶₈₂Pb is:',
    options: ['6 α and 8 β', '4 α and 6 β', '8 α and 8 β', '8 α and 6 β'],
    correctIndex: 3,
    explanation: 'α particles = (238 − 206)/4 = 8, which lowers Z by 16 to 76. To reach Z = 82 we need 6 β⁻ emissions.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-39',
    type: 'mcq',
    question: 'The number of α and β⁻ particles emitted when ²³²₉₀Th changes into ²⁰⁸₈₂Pb is:',
    options: ['6 α and 4 β', '4 α and 6 β', '6 α and 6 β', '8 α and 4 β'],
    correctIndex: 0,
    explanation: 'α particles = (232 − 208)/4 = 6, which lowers Z to 90 − 12 = 78. To reach 82 we need 4 β⁻ emissions.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-40',
    type: 'mcq',
    question: 'A nucleus ²³⁸₉₂U emits one α-particle and then two β⁻ particles. The resulting nucleus is:',
    options: ['²³⁴₉₀Th', '²³⁴₉₁Pa', '²³⁴₉₂U', '²³⁶₉₂U'],
    correctIndex: 2,
    explanation: 'After α: A = 234, Z = 90. Each β⁻ raises Z by 1, so after two β⁻, Z = 92. The nucleus is ²³⁴₉₂U.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-41',
    type: 'mcq',
    question: 'The neutrino was proposed by Pauli to explain:',
    options: [
      'The discrete energies of α-particles',
      'γ-decay',
      'The continuous energy distribution of β-particles',
      'Nuclear fission'
    ],
    correctIndex: 2,
    explanation: 'Electrons in β-decay have a continuous energy spectrum. A third particle, the neutrino, shares the energy and momentum.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-42',
    type: 'mcq',
    question: 'The energy spectrum of α-particles emitted from a given radioactive nucleus is:',
    options: ['Discrete (line spectrum)', 'Continuous', 'Always zero', 'A broad band'],
    correctIndex: 0,
    explanation: 'α-decay is a two-body problem, so the α-particles have definite energies.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-43',
    type: 'mcq',
    question: 'In β⁻ decay, the emitted electron originates from:',
    options: [
      'The orbital electrons of the atom',
      'The inner shell electrons',
      'An electron already present in the nucleus',
      'The conversion of a neutron into a proton inside the nucleus'
    ],
    correctIndex: 3,
    explanation: 'The electron is created when a neutron changes into a proton. It does not exist beforehand inside the nucleus.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-44',
    type: 'mcq',
    question: 'An α-particle is the nucleus of:',
    options: ['Hydrogen', 'Helium', 'Lithium', 'Deuterium'],
    correctIndex: 1,
    explanation: 'An α-particle consists of 2 protons and 2 neutrons, which is a helium nucleus.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-45',
    type: 'mcq',
    question: 'Which of the following radiations has the maximum penetrating power?',
    options: ['α-rays', 'β-rays', 'Ultraviolet rays', 'γ-rays'],
    correctIndex: 3,
    explanation: 'Penetrating power increases in the order α < β < γ.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-46',
    type: 'mcq',
    question: 'The ionising power is maximum for:',
    options: ['α-particles', 'β-particles', 'γ-rays', 'Neutrinos'],
    correctIndex: 0,
    explanation: 'α-particles are heavy and doubly charged, so they ionise the most. They have the least penetration.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-47',
    type: 'mcq',
    question: 'Nuclear fission of ²³⁵U is most effectively caused by:',
    options: ['Fast neutrons', 'Protons', 'Slow (thermal) neutrons', 'α-particles'],
    correctIndex: 2,
    explanation: 'Slow neutrons have a much higher probability of being absorbed by ²³⁵U, which makes it fission.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-48',
    type: 'mcq',
    question: 'For a steady, controlled chain reaction in a nuclear reactor, the neutron multiplication factor k must be:',
    options: ['k < 1', 'k = 1', 'k > 1', 'k = 0'],
    correctIndex: 1,
    explanation: 'k = 1 keeps the reaction rate constant. k > 1 would make it grow, as in a bomb.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-49',
    type: 'mcq',
    question: 'The function of a moderator in a nuclear reactor is to:',
    options: [
      'Absorb neutrons',
      'Absorb the heat produced',
      'Control the rate of the reaction',
      'Slow down the fast neutrons'
    ],
    correctIndex: 3,
    explanation: 'Fast neutrons from fission are slowed by collisions with the moderator so that they can cause further fission of ²³⁵U.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-50',
    type: 'mcq',
    question: 'Control rods in a nuclear reactor are made of:',
    options: ['Cadmium or boron', 'Graphite', 'Heavy water', 'Uranium'],
    correctIndex: 0,
    explanation: 'Cadmium and boron absorb neutrons strongly, so inserting or withdrawing the rods controls the chain reaction.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-51',
    type: 'mcq',
    question: 'Which of the following is used as a moderator in nuclear reactors?',
    options: ['Cadmium', 'Heavy water', 'Boron', 'Lead'],
    correctIndex: 1,
    explanation: 'Heavy water (D₂O) and graphite are common moderators. Cadmium and boron are neutron absorbers.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-52',
    type: 'mcq',
    question: 'Nuclear fusion takes place only at very high temperatures because the nuclei need to:',
    options: [
      'Be broken into nucleons first',
      'Produce neutrons',
      'Overcome the Coulomb repulsion between them',
      'Lower their binding energy'
    ],
    correctIndex: 2,
    explanation: 'The positively charged nuclei repel each other. Very high thermal energy (about 10⁷ K and above) lets them come close enough for the nuclear force to act.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-53',
    type: 'mcq',
    question: 'The energy of the Sun is produced by:',
    options: [
      'Nuclear fusion of hydrogen into helium',
      'Nuclear fission of uranium',
      'Chemical combustion',
      'Radioactive decay of thorium'
    ],
    correctIndex: 0,
    explanation: 'Hydrogen nuclei fuse into helium in the proton-proton cycle in the core of the Sun.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-54',
    type: 'mcq',
    question: 'In the proton-proton cycle in the Sun, four protons fuse to form a helium nucleus with a net release of energy of about:',
    options: ['2 MeV', '13.6 MeV', '200 MeV', '26.7 MeV'],
    correctIndex: 3,
    explanation: '4 ¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-55',
    type: 'mcq',
    question: 'The energy released in the fusion reaction ²₁H + ²₁H → ³₂He + n is approximately:',
    options: ['0.27 MeV', '1.2 MeV', '3.27 MeV', '17.6 MeV'],
    correctIndex: 2,
    explanation: 'The D-D reaction giving ³He and a neutron releases about 3.27 MeV.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-56',
    type: 'mcq',
    question: 'The atom bomb works on the principle of:',
    options: [
      'Nuclear fusion',
      'Uncontrolled nuclear fission chain reaction',
      'Controlled nuclear fission',
      'Radioactive decay'
    ],
    correctIndex: 1,
    explanation: 'An atom bomb releases a huge amount of energy in a very short time through an uncontrolled fission chain reaction.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-57',
    type: 'mcq',
    question: 'The hydrogen bomb works on the principle of:',
    options: ['Nuclear fusion', 'Nuclear fission', 'Chemical explosion', 'β-decay'],
    correctIndex: 0,
    explanation: 'A hydrogen bomb uses fusion of light nuclei, triggered by the high temperature of a fission explosion.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-58',
    type: 'mcq',
    question: 'The Q-value of a nuclear reaction is given by:',
    options: [
      '(Σm of products − Σm of reactants)c²',
      'Σ binding energy of the reactants',
      'Σm of reactants × c²',
      '(Σm of reactants − Σm of products)c²'
    ],
    correctIndex: 3,
    explanation: 'Q is the energy released: the mass of the reactants minus the mass of the products, times c². Q > 0 means the reaction is exothermic.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-59',
    type: 'mcq',
    question: 'The energy released in the complete fission of 1 kg of ²³⁵U, taking 200 MeV per fission, is approximately:',
    options: ['8.2 × 10¹⁰ J', '8.2 × 10¹³ J', '8.2 × 10¹⁶ J', '8.2 × 10⁷ J'],
    correctIndex: 1,
    explanation: 'Number of nuclei = (6.02 × 10²⁶)/235 = 2.56 × 10²⁴. Energy = 2.56 × 10²⁴ × 200 × 1.6 × 10⁻¹³ J ≈ 8.2 × 10¹³ J.',
    difficulty: 'hard'
  },
  {
    id: 'nuclei-60',
    type: 'mcq',
    question: 'A nuclear reactor produces 1000 MW of power with 200 MeV released per fission. The number of fissions per second is approximately:',
    options: ['3.1 × 10¹⁷', '3.1 × 10¹⁸', '3.1 × 10¹⁹', '3.1 × 10²⁰'],
    correctIndex: 2,
    explanation: 'Energy per fission = 200 × 1.6 × 10⁻¹³ = 3.2 × 10⁻¹¹ J. Fissions per second = 10⁹/3.2 × 10⁻¹¹ ≈ 3.1 × 10¹⁹.',
    difficulty: 'hard'
  },
  {
    id: 'nuclei-61',
    type: 'mcq',
    question: 'The critical mass of a fissile material is the minimum mass required to:',
    options: [
      'Sustain a chain reaction',
      'Start radioactivity',
      'Stop the reaction',
      'Produce neutrons only'
    ],
    correctIndex: 0,
    explanation: 'Below the critical mass too many neutrons escape, so the chain reaction cannot be sustained.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-62',
    type: 'mcq',
    question: 'Natural uranium contains ²³⁵U to the extent of about:',
    options: ['99.3%', '50%', '7%', '0.7%'],
    correctIndex: 3,
    explanation: 'Natural uranium is about 99.3% ²³⁸U and only about 0.7% ²³⁵U, so enrichment is needed.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-63',
    type: 'mcq',
    question: 'In the fission reaction ²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + x ¹₀n, the value of x is:',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: 'Mass number: 235 + 1 = 144 + 89 + x, so x = 3. Charge is balanced: 92 = 56 + 36.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-64',
    type: 'mcq',
    question: 'In the fusion reaction ²₁H + ³₁H → ⁴₂He + X, the particle X is:',
    options: ['Proton', 'Neutron', 'Electron', 'γ-photon'],
    correctIndex: 1,
    explanation: 'Mass number: 2 + 3 = 4 + A, so A = 1. Charge: 1 + 1 = 2 + Z, so Z = 0. X is a neutron.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-65',
    type: 'mcq',
    question: 'The energy equivalent of 1 gram of mass is:',
    options: ['9 × 10¹³ J', '9 × 10¹⁰ J', '9 × 10¹⁶ J', '3 × 10⁸ J'],
    correctIndex: 0,
    explanation: 'E = mc² = 10⁻³ × (3 × 10⁸)² = 9 × 10¹³ J.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-66',
    type: 'mcq',
    question: 'In the fission of a heavy nucleus (A ≈ 240) into two medium-mass fragments, the binding energy per nucleon changes approximately from:',
    options: ['8.5 MeV to 7.6 MeV', '8 MeV to 8 MeV', '7 MeV to 4 MeV', '7.6 MeV to 8.5 MeV'],
    correctIndex: 3,
    explanation: 'The heavy nucleus has about 7.6 MeV per nucleon and the fragments about 8.5 MeV, so energy is released.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-67',
    type: 'mcq',
    question: 'The rate of radioactive decay of a sample is:',
    options: [
      'Increased by raising the temperature',
      'Independent of temperature and pressure',
      'Decreased by increasing the pressure',
      'Dependent on the chemical form of the element'
    ],
    correctIndex: 1,
    explanation: 'Radioactive decay is a nuclear process and is not affected by external physical or chemical conditions.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-68',
    type: 'mcq',
    question: 'The radius of the nucleus of ⁶⁴₂₉Cu is approximately (R₀ = 1.2 fm):',
    options: ['2.4 fm', '3.6 fm', '4.8 fm', '7.7 fm'],
    correctIndex: 2,
    explanation: 'R = R₀A^(1/3) = 1.2 × 64^(1/3) = 1.2 × 4 = 4.8 fm.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-69',
    type: 'mcq',
    question: 'Which of the following nuclei is the most stable?',
    options: ['²₁H', '⁴₂He', '²³⁸₉₂U', '⁵⁶₂₆Fe'],
    correctIndex: 3,
    explanation: '⁵⁶Fe has the highest binding energy per nucleon (about 8.8 MeV) among these.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-70',
    type: 'mcq',
    question: 'For stable heavy nuclei, the number of neutrons compared to the number of protons is:',
    options: ['Greater', 'Equal', 'Less', 'Zero'],
    correctIndex: 0,
    explanation: 'Light stable nuclei have N ≈ Z. Heavy nuclei need more neutrons (N > Z) to offset the increasing Coulomb repulsion between protons.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-71',
    type: 'mcq',
    question: 'A wooden artefact has one-fourth of the ¹⁴C activity of fresh wood. If the half-life of ¹⁴C is 5730 years, the age of the artefact is:',
    options: ['5730 years', '8595 years', '11460 years', '22920 years'],
    correctIndex: 2,
    explanation: 'Activity 1/4 means two half-lives, so age = 2 × 5730 = 11460 years.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-72',
    type: 'mcq',
    question: 'Two radioactive samples A and B have half-lives T and 2T and the same initial number of nuclei. At time t = 2T, the ratio of their activities A : B is:',
    options: ['1 : 2', '1 : 1', '2 : 1', '1 : 4'],
    correctIndex: 1,
    explanation: 'At 2T, A has N₀/4 and B has N₀/2. Activity = λN, and λA = 2λB. So A:B = (2 × 1/4) : (1 × 1/2) = 1 : 1.',
    difficulty: 'hard'
  },
  {
    id: 'nuclei-73',
    type: 'mcq',
    question: 'The decay constant of a radioactive nucleus is:',
    options: [
      'The probability of decay per unit time per nucleus',
      'The total number of nuclei decayed',
      'Half of the half-life',
      'The number of undecayed nuclei'
    ],
    correctIndex: 0,
    explanation: 'From dN/dt = −λN, λ is the fraction of nuclei decaying per unit time, which is the decay probability per nucleus per second.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-74',
    type: 'mcq',
    question: 'The half-life of a radioactive substance is 10 minutes. The time taken for 75% of it to decay is:',
    options: ['10 min', '15 min', '30 min', '20 min'],
    correctIndex: 3,
    explanation: '75% decayed means 25% remains, which is (1/2)², so two half-lives = 20 min.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-75',
    type: 'mcq',
    question: 'A radioactive sample is 87.5% decayed in 24 minutes. Its half-life is:',
    options: ['6 min', '12 min', '8 min', '4 min'],
    correctIndex: 2,
    explanation: '12.5% = 1/8 remains, which is 3 half-lives. T½ = 24/3 = 8 min.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-76',
    type: 'mcq',
    question: 'A nucleus with A = 240 has a binding energy per nucleon of 7.6 MeV. It splits into two fragments (A = 120 each) with 8.5 MeV per nucleon. The energy released is approximately:',
    options: ['108 MeV', '216 MeV', '432 MeV', '21.6 MeV'],
    correctIndex: 1,
    explanation: 'Gain per nucleon = 8.5 − 7.6 = 0.9 MeV. Total = 240 × 0.9 = 216 MeV.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-77',
    type: 'mcq',
    question: 'A nucleus of mass number A, initially at rest, emits an α-particle. The fraction of the total decay energy carried by the α-particle is:',
    options: ['4/A', 'A/(A − 4)', '4/(A − 4)', '(A − 4)/A'],
    correctIndex: 3,
    explanation: 'Momenta are equal and opposite, so KE ∝ 1/mass. The α fraction is m_D/(m_D + m_α) = (A − 4)/A.',
    difficulty: 'hard'
  },
  {
    id: 'nuclei-78',
    type: 'mcq',
    question: '²¹⁰₈₄Po decays by α-emission. The daughter nucleus is:',
    options: ['²⁰⁶₈₂Pb', '²⁰⁶₈₄Po', '²¹⁰₈₅At', '²¹⁴₈₆Rn'],
    correctIndex: 0,
    explanation: 'After α-emission A = 210 − 4 = 206 and Z = 84 − 2 = 82, which is ²⁰⁶₈₂Pb.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-79',
    type: 'mcq',
    question: 'The volume of a nucleus is proportional to:',
    options: ['A^(1/3)', 'A^(2/3)', 'A', 'A²'],
    correctIndex: 2,
    explanation: 'Since R ∝ A^(1/3), the volume ∝ R³ ∝ A.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-80',
    type: 'mcq',
    question: 'Which of the following radiations is not deflected by electric or magnetic fields?',
    options: ['α-rays', 'γ-rays', 'β-rays', 'Protons'],
    correctIndex: 1,
    explanation: 'γ-rays are electromagnetic radiation with no charge, so they pass undeflected.',
    difficulty: 'easy'
  }
];
export default nucleiQuestions;