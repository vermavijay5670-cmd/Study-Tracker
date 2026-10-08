import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    id: 'atoms-1',
    type: 'mcq',
    question: 'In Thomson plum pudding model of the atom, the electrons are embedded in:',
    options: [
      'A uniform sphere of positive charge',
      'A tiny positively charged nucleus',
      'A shell of negative charge',
      'Fixed circular orbits'
    ],
    correctIndex: 0,
    explanation: 'Thomson pictured the atom as a uniformly positively charged sphere with electrons embedded in it, like seeds in a watermelon.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-2',
    type: 'mcq',
    question: 'In the Geiger-Marsden experiment most α-particles passed through the gold foil undeflected. This shows that:',
    options: [
      'The atom is a solid sphere',
      'The nucleus is negatively charged',
      'Most of the atom is empty space',
      'Electrons are heavier than α-particles'
    ],
    correctIndex: 2,
    explanation: 'Since most particles went straight through, most of the volume of the atom must be empty.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-3',
    type: 'mcq',
    question: 'The scattering of some α-particles through very large angles in Rutherford experiment indicated that:',
    options: [
      'Electrons are present at the centre of the atom',
      'The atom has a small, dense, positively charged nucleus',
      'The positive charge is spread uniformly',
      'α-particles are neutral'
    ],
    correctIndex: 1,
    explanation: 'Large-angle deflection needs a strong repulsive force from a concentrated positive charge. This led to the nuclear model.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-4',
    type: 'mcq',
    question: 'In the Geiger-Marsden experiment, roughly what fraction of the α-particles was scattered through angles greater than 90°?',
    options: ['1 in 100', '1 in 1000', '1 in 80000', '1 in 8000'],
    correctIndex: 3,
    explanation: 'Only about 1 in 8000 α-particles was deflected by more than 90°.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-5',
    type: 'mcq',
    question: 'The order of magnitude of the size of the nucleus is:',
    options: ['10⁻¹⁰ m', '10⁻¹² m', '10⁻¹⁸ m', '10⁻¹⁵ m'],
    correctIndex: 3,
    explanation: 'The nucleus has a size of about 1 fermi (10⁻¹⁵ m), while the atom is about 10⁻¹⁰ m.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-6',
    type: 'mcq',
    question: 'An α-particle approaches a nucleus head-on (impact parameter zero). The angle of scattering is:',
    options: ['0°', '180°', '90°', '45°'],
    correctIndex: 1,
    explanation: 'In a head-on collision the α-particle stops at the distance of closest approach and retraces its path, so θ = 180°.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-7',
    type: 'mcq',
    question: 'In Rutherford scattering, as the impact parameter increases, the angle of scattering:',
    options: ['Decreases', 'Increases', 'Remains the same', 'First increases and then decreases'],
    correctIndex: 0,
    explanation: 'A larger impact parameter means the particle passes farther from the nucleus and feels a weaker force, so it deflects less.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-8',
    type: 'mcq',
    question: 'A 5.5 MeV α-particle approaches a gold nucleus (Z = 79) head-on. The distance of closest approach is about:',
    options: ['4.1 × 10⁻¹⁵ m', '4.1 × 10⁻¹³ m', '4.1 × 10⁻¹⁴ m', '8.2 × 10⁻¹⁴ m'],
    correctIndex: 2,
    explanation: 'r₀ = (2Ze²/4πε₀)/K = (2 × 79 × 1.44 MeV fm)/5.5 MeV ≈ 41 fm = 4.1 × 10⁻¹⁴ m.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-9',
    type: 'mcq',
    question: 'If the kinetic energy of an α-particle is doubled, its distance of closest approach to a nucleus in a head-on collision:',
    options: ['Doubles', 'Becomes half', 'Remains the same', 'Becomes four times'],
    correctIndex: 1,
    explanation: 'r₀ ∝ 1/K, so doubling K halves the distance of closest approach.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-10',
    type: 'mcq',
    question: 'The main drawback of Rutherford nuclear model was that it could not explain:',
    options: [
      'The scattering of α-particles',
      'The existence of a nucleus',
      'The electrical neutrality of the atom',
      'The stability of the atom and the line spectra'
    ],
    correctIndex: 3,
    explanation: 'An orbiting electron should radiate energy and spiral into the nucleus. It also predicts a continuous spectrum, whereas atoms show line spectra.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-11',
    type: 'mcq',
    question: 'According to Bohr model, the angular momentum of an electron in the nth stationary orbit is:',
    options: ['nh/2π', 'nh', 'n²h/2π', 'h/2πn'],
    correctIndex: 0,
    explanation: 'Bohr quantisation condition: L = mvr = nh/2π, where n = 1, 2, 3, ...',
    difficulty: 'easy'
  },
  {
    id: 'atoms-12',
    type: 'mcq',
    question: 'The radius of the first Bohr orbit of hydrogen (Bohr radius) is approximately:',
    options: ['0.529 Å', '5.29 Å', '1.06 Å', '0.0529 Å'],
    correctIndex: 0,
    explanation: 'a₀ = 4πε₀ħ²/(me²) = 0.529 Å = 5.29 × 10⁻¹¹ m.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-13',
    type: 'mcq',
    question: 'The radius of the second Bohr orbit of hydrogen is x. The radius of the third orbit is:',
    options: ['3x/2', '3x', '9x/4', '9x'],
    correctIndex: 2,
    explanation: 'rn ∝ n², so r₃/r₂ = 9/4, which gives r₃ = 9x/4.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-14',
    type: 'mcq',
    question: 'The energy of an electron in the first excited state of a hydrogen atom is:',
    options: ['−13.6 eV', '−6.8 eV', '−1.51 eV', '−3.4 eV'],
    correctIndex: 3,
    explanation: 'En = −13.6/n² eV. For n = 2, E = −13.6/4 = −3.4 eV.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-15',
    type: 'mcq',
    question: 'The energy of the electron in the third orbit (n = 3) of a hydrogen atom is:',
    options: ['−3.4 eV', '−1.51 eV', '−0.85 eV', '−4.53 eV'],
    correctIndex: 1,
    explanation: 'E₃ = −13.6/9 = −1.51 eV.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-16',
    type: 'mcq',
    question: 'The energy required to remove an electron from the n = 2 orbit of a hydrogen atom is:',
    options: ['13.6 eV', '6.8 eV', '3.4 eV', '1.51 eV'],
    correctIndex: 2,
    explanation: 'The ionisation energy from level n is 13.6/n² eV. For n = 2 it is 3.4 eV.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-17',
    type: 'mcq',
    question: 'The ionisation energy of a He⁺ ion in its ground state is:',
    options: ['13.6 eV', '27.2 eV', '40.8 eV', '54.4 eV'],
    correctIndex: 3,
    explanation: 'For a hydrogen-like ion En = −13.6 Z²/n² eV. For He⁺ (Z = 2), E₁ = −54.4 eV, so the ionisation energy is 54.4 eV.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-18',
    type: 'mcq',
    question: 'The ground state energy of a doubly ionised lithium ion (Li²⁺) is:',
    options: ['−122.4 eV', '−40.8 eV', '−54.4 eV', '−13.6 eV'],
    correctIndex: 0,
    explanation: 'E₁ = −13.6 × Z² = −13.6 × 9 = −122.4 eV.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-19',
    type: 'mcq',
    question: 'The speed of the electron in the first Bohr orbit of hydrogen is approximately:',
    options: ['2.2 × 10⁵ m/s', '2.2 × 10⁶ m/s', '3 × 10⁸ m/s', '1.1 × 10⁶ m/s'],
    correctIndex: 1,
    explanation: 'v₁ = e²/(2ε₀h) ≈ 2.2 × 10⁶ m/s, which is c/137.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-20',
    type: 'mcq',
    question: 'The speed of the electron in the third Bohr orbit compared to that in the first orbit is:',
    options: ['3 times', '9 times', '1/3 times', '1/9 times'],
    correctIndex: 2,
    explanation: 'vn ∝ 1/n, so v₃/v₁ = 1/3.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-21',
    type: 'mcq',
    question: 'The ratio of the time periods of revolution of the electron in the n = 1 and n = 2 orbits of hydrogen is:',
    options: ['1 : 4', '1 : 8', '1 : 2', '1 : 16'],
    correctIndex: 1,
    explanation: 'T = 2πr/v ∝ n²/(1/n) = n³. So T₁ : T₂ = 1 : 8.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-22',
    type: 'mcq',
    question: 'The frequency of revolution of the electron in the nth Bohr orbit is proportional to:',
    options: ['n³', '1/n', '1/n²', '1/n³'],
    correctIndex: 3,
    explanation: 'Frequency is 1/T and T ∝ n³, so f ∝ 1/n³.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-23',
    type: 'mcq',
    question: 'The angular momentum of the electron in the second orbit of a hydrogen atom is:',
    options: ['h/π', 'h/2π', '2h', 'h/4π'],
    correctIndex: 0,
    explanation: 'L = nh/2π = 2h/2π = h/π.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-24',
    type: 'mcq',
    question: 'In the Bohr model of hydrogen, the ratio of the kinetic energy to the potential energy of the electron in any orbit is:',
    options: ['−2', '+2', '−1/2', '+1/2'],
    correctIndex: 2,
    explanation: 'K = ke²/2r and U = −ke²/r, so K/U = −1/2.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-25',
    type: 'mcq',
    question: 'In the Bohr model, the potential energy of the electron in an orbit is ______ the total energy of the electron in that orbit.',
    options: ['Half of', 'Equal to', 'Twice', 'Four times'],
    correctIndex: 2,
    explanation: 'Total E = −ke²/2r and U = −ke²/r, so U = 2E.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-26',
    type: 'mcq',
    question: 'The Lyman series of the hydrogen spectrum lies in the:',
    options: ['Ultraviolet region', 'Visible region', 'Near infrared region', 'Far infrared region'],
    correctIndex: 0,
    explanation: 'Lyman series is due to transitions to n = 1 and the wavelengths are 912-1216 Å, in the ultraviolet.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-27',
    type: 'mcq',
    question: 'The series of the hydrogen spectrum that lies in the visible region is:',
    options: ['Lyman', 'Paschen', 'Brackett', 'Balmer'],
    correctIndex: 3,
    explanation: 'The Balmer series (transitions to n = 2) has its lines in the visible region.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-28',
    type: 'mcq',
    question: 'The Paschen series of hydrogen corresponds to transitions of the electron to the level:',
    options: ['n = 2', 'n = 3', 'n = 4', 'n = 1'],
    correctIndex: 1,
    explanation: 'Lyman n = 1, Balmer n = 2, Paschen n = 3, Brackett n = 4, Pfund n = 5.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-29',
    type: 'mcq',
    question: 'The Pfund series of hydrogen arises from transitions to the level:',
    options: ['n = 2', 'n = 3', 'n = 4', 'n = 5'],
    correctIndex: 3,
    explanation: 'In the Pfund series the final level is n = 5, and the lines lie in the far infrared.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-30',
    type: 'mcq',
    question: 'The longest wavelength in the Lyman series of hydrogen is approximately (R = 1.097 × 10⁷ m⁻¹):',
    options: ['1216 Å', '912 Å', '6563 Å', '1026 Å'],
    correctIndex: 0,
    explanation: '1/λ = R(1 − 1/4) = 3R/4, so λ = 4/(3R) = 1.215 × 10⁻⁷ m = 1216 Å.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-31',
    type: 'mcq',
    question: 'The shortest wavelength (series limit) of the Lyman series of hydrogen is approximately:',
    options: ['1216 Å', '1026 Å', '912 Å', '3646 Å'],
    correctIndex: 2,
    explanation: 'For n → ∞, 1/λ = R, so λ = 1/R = 9.1 × 10⁻⁸ m = 912 Å.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-32',
    type: 'mcq',
    question: 'The longest wavelength in the Balmer series of hydrogen is approximately:',
    options: ['3646 Å', '6563 Å', '4861 Å', '1216 Å'],
    correctIndex: 1,
    explanation: '1/λ = R(1/4 − 1/9) = 5R/36, so λ = 36/(5R) = 6563 Å (H-alpha line).',
    difficulty: 'medium'
  },
  {
    id: 'atoms-33',
    type: 'mcq',
    question: 'The shortest wavelength (series limit) of the Balmer series is approximately:',
    options: ['3646 Å', '6563 Å', '4861 Å', '912 Å'],
    correctIndex: 0,
    explanation: 'For n → ∞, 1/λ = R/4, so λ = 4/R = 3.65 × 10⁻⁷ m = 3646 Å.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-34',
    type: 'mcq',
    question: 'The ratio of the longest wavelength of the Lyman series to the longest wavelength of the Balmer series is:',
    options: ['27 : 5', '4 : 9', '1 : 3', '5 : 27'],
    correctIndex: 3,
    explanation: 'λL = 4/(3R) and λB = 36/(5R). Ratio = (4/3) × (5/36) = 5/27.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-35',
    type: 'mcq',
    question: 'The ratio of the series limit wavelengths of the Lyman and Balmer series is:',
    options: ['1 : 2', '1 : 4', '1 : 9', '4 : 1'],
    correctIndex: 1,
    explanation: 'Lyman limit = 1/R and Balmer limit = 4/R, so the ratio is 1 : 4.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-36',
    type: 'mcq',
    question: 'A hydrogen atom is excited to the n = 4 level. The maximum number of spectral lines it can emit while returning to the ground state is:',
    options: ['3', '4', '6', '10'],
    correctIndex: 2,
    explanation: 'Number of lines = n(n − 1)/2 = 4 × 3/2 = 6.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-37',
    type: 'mcq',
    question: 'A sample of hydrogen atoms is excited to the n = 5 level. The maximum number of different spectral lines emitted is:',
    options: ['10', '5', '15', '20'],
    correctIndex: 0,
    explanation: 'Number of lines = n(n − 1)/2 = 5 × 4/2 = 10.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-38',
    type: 'mcq',
    question: 'The minimum energy required to excite a hydrogen atom from its ground state to the first excited state is:',
    options: ['3.4 eV', '13.6 eV', '12.1 eV', '10.2 eV'],
    correctIndex: 3,
    explanation: 'ΔE = E₂ − E₁ = −3.4 − (−13.6) = 10.2 eV.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-39',
    type: 'mcq',
    question: 'The energy of the photon emitted when the electron of a hydrogen atom jumps from n = 3 to n = 2 is:',
    options: ['3.4 eV', '12.09 eV', '1.89 eV', '10.2 eV'],
    correctIndex: 2,
    explanation: 'ΔE = E₃ − E₂ = −1.51 − (−3.4) = 1.89 eV.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-40',
    type: 'mcq',
    question: 'The wavelength of the photon emitted in the transition n = 2 to n = 1 in hydrogen is approximately (hc = 12400 eV Å):',
    options: ['2430 Å', '1216 Å', '6563 Å', '912 Å'],
    correctIndex: 1,
    explanation: 'ΔE = 10.2 eV, so λ = 12400/10.2 ≈ 1216 Å.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-41',
    type: 'mcq',
    question: 'Hydrogen atoms in the ground state are bombarded by electrons of energy 12.5 eV. The highest energy level to which the atoms can be excited is:',
    options: ['n = 2', 'n = 4', 'n = 5', 'n = 3'],
    correctIndex: 3,
    explanation: 'Excitation energies are 10.2 eV (n = 2), 12.09 eV (n = 3) and 12.75 eV (n = 4). 12.5 eV is enough for n = 3 but not for n = 4.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-42',
    type: 'mcq',
    question: 'A hydrogen atom in the ground state absorbs a photon of energy 12.09 eV. The number of different spectral lines that can be emitted subsequently is:',
    options: ['3', '2', '1', '6'],
    correctIndex: 0,
    explanation: 'The atom goes to n = 3. The possible transitions are 3→2, 3→1 and 2→1, which give 3 lines.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-43',
    type: 'mcq',
    question: 'The transition n = 4 to n = 2 in a hydrogen atom emits a line of wavelength approximately:',
    options: ['6563 Å', '4861 Å', '4340 Å', '1216 Å'],
    correctIndex: 1,
    explanation: '1/λ = R(1/4 − 1/16) = 3R/16, so λ = 16/(3R) = 4861 Å.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-44',
    type: 'mcq',
    question: 'The value of the Rydberg constant R is approximately:',
    options: ['1.097 × 10⁵ m⁻¹', '1.097 × 10⁻⁷ m⁻¹', '1.097 × 10⁷ m⁻¹', '1.097 × 10⁹ m⁻¹'],
    correctIndex: 2,
    explanation: 'R = 1.097 × 10⁷ m⁻¹, used in 1/λ = R(1/n₁² − 1/n₂²).',
    difficulty: 'easy'
  },
  {
    id: 'atoms-45',
    type: 'mcq',
    question: 'The radius of the second Bohr orbit of a He⁺ ion, in terms of the Bohr radius a₀, is:',
    options: ['2a₀', '4a₀', 'a₀', 'a₀/2'],
    correctIndex: 0,
    explanation: 'rn = n²a₀/Z = 4a₀/2 = 2a₀.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-46',
    type: 'mcq',
    question: 'The radius of the first Bohr orbit of a doubly ionised lithium ion (Li²⁺) is:',
    options: ['3a₀', '9a₀', 'a₀/9', 'a₀/3'],
    correctIndex: 3,
    explanation: 'r₁ = a₀/Z = a₀/3 for Z = 3.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-47',
    type: 'mcq',
    question: 'The ratio of the ground state energies of He⁺ and H is:',
    options: ['2 : 1', '4 : 1', '8 : 1', '16 : 1'],
    correctIndex: 1,
    explanation: 'E ∝ Z². For He⁺ (Z = 2) and H (Z = 1) the ratio is 4 : 1.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-48',
    type: 'mcq',
    question: 'Which transition in a He⁺ ion emits radiation of the same wavelength as the n = 2 to n = 1 transition in hydrogen?',
    options: ['n = 4 to n = 2', 'n = 3 to n = 2', 'n = 4 to n = 3', 'n = 3 to n = 1'],
    correctIndex: 0,
    explanation: 'For He⁺, ΔE = 54.4 (1/4 − 1/16) = 10.2 eV, which equals the 2 → 1 transition energy in hydrogen.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-49',
    type: 'mcq',
    question: 'According to Bohr, when an electron jumps from an orbit of energy Ei to a lower orbit of energy Ef, the frequency of the emitted radiation is:',
    options: ['(Ei + Ef)/h', 'EiEf/h', '(Ei − Ef)/h', 'h/(Ei − Ef)'],
    correctIndex: 2,
    explanation: 'Bohr frequency condition: hν = Ei − Ef.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-50',
    type: 'mcq',
    question: 'De Broglie explained Bohr quantisation condition by requiring that the circumference of the orbit be:',
    options: ['2πr = λ/n', 'πr = nλ', 'r = nλ', '2πr = nλ'],
    correctIndex: 3,
    explanation: 'A stable orbit holds a standing electron wave, so 2πr = nλ. With λ = h/mv this gives mvr = nh/2π.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-51',
    type: 'mcq',
    question: 'Which of the following is NOT a postulate of Bohr model?',
    options: [
      'An electron radiates energy continuously while moving in a stationary orbit',
      'An electron revolves in certain stable orbits without radiating',
      'The angular momentum of the electron in a stable orbit is quantised',
      'Radiation is emitted when an electron jumps from a higher to a lower orbit'
    ],
    correctIndex: 0,
    explanation: 'In stationary orbits the electron does not radiate. Emission occurs only during a jump between orbits.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-52',
    type: 'mcq',
    question: 'The Bohr model can be applied successfully to:',
    options: [
      'Any multi-electron atom',
      'Hydrogen and hydrogen-like ions',
      'Only neutral atoms',
      'All molecules'
    ],
    correctIndex: 1,
    explanation: 'It works for single-electron systems such as H, He⁺ and Li²⁺, but not for atoms with more electrons.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-53',
    type: 'mcq',
    question: 'Bohr model fails to explain:',
    options: [
      'The line spectrum of hydrogen',
      'The stability of the hydrogen atom',
      'The discrete energy levels of hydrogen',
      'The spectra of multi-electron atoms such as helium'
    ],
    correctIndex: 3,
    explanation: 'The model ignores electron-electron interaction, so it cannot explain the spectra of multi-electron atoms. It also cannot explain the relative intensities of lines.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-54',
    type: 'mcq',
    question: 'The total energy of an electron in a stationary orbit of hydrogen is negative because:',
    options: [
      'The electron has a negative charge only',
      'The nucleus is positively charged',
      'The electron is bound to the nucleus',
      'The kinetic energy is negative'
    ],
    correctIndex: 2,
    explanation: 'A negative total energy means the electron is bound. Energy must be supplied to free it.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-55',
    type: 'mcq',
    question: 'As the principal quantum number n increases, the total energy of the electron in a hydrogen atom:',
    options: ['Decreases', 'Increases', 'Remains constant', 'Becomes more negative'],
    correctIndex: 1,
    explanation: 'En = −13.6/n² eV. As n grows the energy becomes less negative, that is, it increases towards zero.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-56',
    type: 'mcq',
    question: 'In a hydrogen atom, the spacing between consecutive energy levels as n increases:',
    options: ['Increases', 'Remains constant', 'First increases, then decreases', 'Decreases'],
    correctIndex: 3,
    explanation: 'The levels crowd together as n increases and converge at E = 0.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-57',
    type: 'mcq',
    question: 'The decrease in the angular momentum of the electron when it jumps from n = 4 to n = 1 in hydrogen is:',
    options: ['3h/2π', 'h/2π', '3h/π', '4h/2π'],
    correctIndex: 0,
    explanation: 'ΔL = (4 − 1)h/2π = 3h/2π.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-58',
    type: 'mcq',
    question: 'The speed of the electron in the n = 2 orbit of He⁺ compared to its speed in the n = 1 orbit of H is:',
    options: ['Half', 'Double', 'Equal', 'Four times'],
    correctIndex: 2,
    explanation: 'v ∝ Z/n. For He⁺ with n = 2, Z/n = 1. For H with n = 1, Z/n = 1. So the speeds are equal.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-59',
    type: 'mcq',
    question: 'The kinetic energy of the electron in the second orbit of a hydrogen atom is:',
    options: ['−3.4 eV', '+3.4 eV', '+6.8 eV', '+13.6 eV'],
    correctIndex: 1,
    explanation: 'Kinetic energy = −(total energy) = +3.4 eV for n = 2.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-60',
    type: 'mcq',
    question: 'The potential energy of the electron in the ground state of a hydrogen atom is:',
    options: ['−13.6 eV', '+13.6 eV', '−6.8 eV', '−27.2 eV'],
    correctIndex: 3,
    explanation: 'U = 2E = 2 × (−13.6) = −27.2 eV.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-61',
    type: 'mcq',
    question: 'The ionisation potential of hydrogen is:',
    options: ['1.36 V', '136 V', '13.6 V', '27.2 V'],
    correctIndex: 2,
    explanation: 'The ionisation energy is 13.6 eV, so the ionisation potential is 13.6 V.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-62',
    type: 'mcq',
    question: 'In Rutherford scattering the number of α-particles scattered at an angle θ is proportional to:',
    options: ['1/sin⁴(θ/2)', 'sin⁴(θ/2)', '1/sin²(θ/2)', 'cos⁴(θ/2)'],
    correctIndex: 0,
    explanation: 'The Rutherford scattering formula gives N(θ) ∝ 1/sin⁴(θ/2). Most particles scatter at small angles.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-63',
    type: 'mcq',
    question: 'The charge on the nucleus of a gold atom (Z = 79) is:',
    options: ['79 C', '+79e', '+197e', '−79e'],
    correctIndex: 1,
    explanation: 'The nuclear charge is +Ze = +79e, where e = 1.6 × 10⁻¹⁹ C.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-64',
    type: 'mcq',
    question: 'The ratio of the energy of the electron in the 4th orbit to that in the 1st orbit of hydrogen is:',
    options: ['4 : 1', '1 : 4', '16 : 1', '1 : 16'],
    correctIndex: 3,
    explanation: 'En ∝ 1/n², so E₄/E₁ = 1/16.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-65',
    type: 'mcq',
    question: 'Hydrogen atoms are excited to the n = 3 level. The longest wavelength emitted among the resulting lines is approximately:',
    options: ['1026 Å', '1216 Å', '6563 Å', '4861 Å'],
    correctIndex: 2,
    explanation: 'The smallest energy gap is 3 → 2 (1.89 eV), so λ = 12400/1.89 ≈ 6563 Å.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-66',
    type: 'mcq',
    question: 'Hydrogen atoms are excited to the n = 3 level. The shortest wavelength emitted is approximately:',
    options: ['1026 Å', '1216 Å', '6563 Å', '912 Å'],
    correctIndex: 0,
    explanation: 'The largest energy gap is 3 → 1 (12.09 eV), so λ = 12400/12.09 ≈ 1026 Å.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-67',
    type: 'mcq',
    question: 'The longest wavelength in the Paschen series of hydrogen is approximately (R = 1.097 × 10⁷ m⁻¹):',
    options: ['6563 Å', '10940 Å', '12820 Å', '18750 Å'],
    correctIndex: 3,
    explanation: '1/λ = R(1/9 − 1/16) = 7R/144, so λ = 144/(7R) = 1.875 × 10⁻⁶ m = 18750 Å.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-68',
    type: 'mcq',
    question: 'The equivalent current due to the electron revolving in the first Bohr orbit of hydrogen is approximately:',
    options: ['0.1 μA', '1 mA', '1 A', '10 mA'],
    correctIndex: 1,
    explanation: 'T = 2πr/v = 2π × 5.29 × 10⁻¹¹ / 2.19 × 10⁶ ≈ 1.5 × 10⁻¹⁶ s. I = e/T = 1.6 × 10⁻¹⁹ / 1.5 × 10⁻¹⁶ ≈ 1 mA.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-69',
    type: 'mcq',
    question: 'Which of the following is NOT a hydrogen-like species?',
    options: ['Neutral helium atom (He)', 'He⁺', 'Li²⁺', 'Be³⁺'],
    correctIndex: 0,
    explanation: 'A hydrogen-like species has only one electron. Neutral helium has two electrons.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-70',
    type: 'mcq',
    question: 'The energy needed to excite a He⁺ ion from its ground state to the first excited state is:',
    options: ['10.2 eV', '27.2 eV', '40.8 eV', '54.4 eV'],
    correctIndex: 2,
    explanation: 'ΔE = 54.4 (1 − 1/4) = 54.4 × 3/4 = 40.8 eV.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-71',
    type: 'mcq',
    question: 'The maximum wavelength of radiation that can ionise a hydrogen atom in the n = 2 state is approximately:',
    options: ['1216 Å', '6563 Å', '912 Å', '3646 Å'],
    correctIndex: 3,
    explanation: 'The ionisation energy of n = 2 is 3.4 eV, so λmax = 12400/3.4 ≈ 3646 Å.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-72',
    type: 'mcq',
    question: 'The maximum wavelength of radiation that can ionise a hydrogen atom in its ground state is approximately:',
    options: ['1216 Å', '912 Å', '6563 Å', '3646 Å'],
    correctIndex: 1,
    explanation: 'The ionisation energy is 13.6 eV, so λmax = 12400/13.6 ≈ 912 Å.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-73',
    type: 'mcq',
    question: 'According to classical electromagnetic theory, as the orbiting electron in Rutherford model radiates energy, it:',
    options: [
      'Moves into higher orbits',
      'Stays in the same orbit',
      'Spirals inward towards the nucleus',
      'Escapes from the atom'
    ],
    correctIndex: 2,
    explanation: 'Loss of energy would shrink the orbit continuously, so the electron would fall into the nucleus in about 10⁻¹⁰ s.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-74',
    type: 'mcq',
    question: 'The emission spectrum of atomic hydrogen is:',
    options: [
      'A line spectrum',
      'A continuous spectrum',
      'A band spectrum',
      'An absorption spectrum only'
    ],
    correctIndex: 0,
    explanation: 'Atomic hydrogen emits only certain discrete wavelengths, giving a line spectrum.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-75',
    type: 'mcq',
    question: 'If λ₁ and λ₂ are the wavelengths of the radiations emitted in the transitions n = 3 to n = 2 and n = 2 to n = 1 respectively, the wavelength for the transition n = 3 to n = 1 is:',
    options: ['λ₁ + λ₂', 'λ₁λ₂/(λ₁ − λ₂)', '(λ₁ + λ₂)/2', 'λ₁λ₂/(λ₁ + λ₂)'],
    correctIndex: 3,
    explanation: 'Energies add: E₃₁ = E₃₂ + E₂₁, so 1/λ = 1/λ₁ + 1/λ₂, which gives λ = λ₁λ₂/(λ₁ + λ₂).',
    difficulty: 'hard'
  },
  {
    id: 'atoms-76',
    type: 'mcq',
    question: 'Which of the following transitions in a hydrogen atom emits the photon of the highest frequency?',
    options: ['n = 2 to n = 1', 'n = 3 to n = 1', 'n = 3 to n = 2', 'n = 4 to n = 3'],
    correctIndex: 1,
    explanation: 'The energy gaps are 10.2, 12.09, 1.89 and 0.66 eV respectively. 3 → 1 has the largest gap, so the highest frequency.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-77',
    type: 'mcq',
    question: 'The radius of the fourth Bohr orbit of hydrogen is approximately:',
    options: ['2.12 Å', '4.76 Å', '8.46 Å', '12.7 Å'],
    correctIndex: 2,
    explanation: 'r₄ = 16 × 0.529 Å = 8.46 Å.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-78',
    type: 'mcq',
    question: 'Which of the following orbits has the largest radius?',
    options: [
      'n = 2 of He⁺',
      'n = 1 of H',
      'n = 1 of He⁺',
      'n = 1 of Li²⁺'
    ],
    correctIndex: 0,
    explanation: 'r = n²a₀/Z gives 2a₀ for n = 2 of He⁺, a₀ for n = 1 of H, a₀/2 for n = 1 of He⁺ and a₀/3 for n = 1 of Li²⁺.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-79',
    type: 'mcq',
    question: 'A hydrogen atom in its ground state, with orbit radius r, absorbs a photon of energy 10.2 eV. The radius of its orbit becomes:',
    options: ['2r', '4r', '8r', '16r'],
    correctIndex: 1,
    explanation: '10.2 eV takes the electron from n = 1 to n = 2. Since rn ∝ n², the radius becomes 4r.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-80',
    type: 'mcq',
    question: 'The energy of the photon emitted when an electron falls from n = ∞ to n = 1 in a hydrogen atom is:',
    options: ['0 eV', '27.2 eV', '13.6 eV', '3.4 eV'],
    correctIndex: 2,
    explanation: 'ΔE = 0 − (−13.6) = 13.6 eV, the series limit of the Lyman series.',
    difficulty: 'easy'
  }
];
export default questions;