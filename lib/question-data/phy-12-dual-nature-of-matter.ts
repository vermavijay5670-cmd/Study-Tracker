import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    id: 'dual-nature-1',
    type: 'mcq',
    question: 'The energy (in eV) of a photon of wavelength 6200 Å is approximately:',
    options: ['0.5', '1', '4', '2'],
    correctIndex: 3,
    explanation: 'E (eV) = 12400 / λ (Å) = 12400 / 6200 = 2 eV.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-2',
    type: 'mcq',
    question: 'The photoelectric effect supports:',
    options: [
      'The particle (quantum) nature of light',
      'The wave nature of light',
      'The transverse nature of light',
      'The interference of light'
    ],
    correctIndex: 0,
    explanation: 'Einstein explained the photoelectric effect by treating light as a stream of photons, each carrying energy hν.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-3',
    type: 'mcq',
    question: 'Which of the following statements about photoelectric emission is correct?',
    options: [
      'Emission occurs at any frequency if the intensity is high enough',
      'The emission depends only on the intensity of light',
      'Emission occurs only if the frequency of light exceeds the threshold frequency',
      'The maximum kinetic energy of photoelectrons depends on the intensity'
    ],
    correctIndex: 2,
    explanation: 'Photoemission needs hν ≥ φ₀, that is ν ≥ ν₀. Below ν₀ no emission occurs, however intense the light is.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-4',
    type: 'mcq',
    question: 'In the photoelectric effect, the stopping potential depends on:',
    options: [
      'The intensity of the incident light',
      'The frequency of the incident light',
      'The area of the cathode',
      'The distance of the source from the cathode'
    ],
    correctIndex: 1,
    explanation: 'eV₀ = Kmax = hν − φ₀. The stopping potential depends on the frequency and the metal, not on the intensity.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-5',
    type: 'mcq',
    question: 'For a given frequency above the threshold, the photoelectric saturation current is proportional to:',
    options: [
      'The intensity of the incident light',
      'The frequency of the incident light',
      'The stopping potential',
      'The work function of the metal'
    ],
    correctIndex: 0,
    explanation: 'A higher intensity means more photons per second and hence more photoelectrons per second, so a larger saturation current.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-6',
    type: 'mcq',
    question: 'Light of photon energy 5 eV falls on a metal of work function 2 eV. The stopping potential is:',
    options: ['2 V', '5 V', '7 V', '3 V'],
    correctIndex: 3,
    explanation: 'Kmax = hν − φ₀ = 5 − 2 = 3 eV, so V₀ = 3 V.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-7',
    type: 'mcq',
    question: 'The work function of a metal is 2.5 eV. Its threshold wavelength is approximately:',
    options: ['2480 Å', '4960 Å', '6200 Å', '9920 Å'],
    correctIndex: 1,
    explanation: 'λ₀ = 12400 / φ₀ (eV) = 12400 / 2.5 = 4960 Å.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-8',
    type: 'mcq',
    question: 'Light of wavelength 2480 Å falls on a metal of work function 4.5 eV. The maximum kinetic energy of the photoelectrons is:',
    options: ['5 eV', '4.5 eV', '0.5 eV', '9.5 eV'],
    correctIndex: 2,
    explanation: 'Photon energy = 12400/2480 = 5 eV. Kmax = 5 − 4.5 = 0.5 eV.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-9',
    type: 'mcq',
    question: 'The slope of the graph of stopping potential versus frequency of incident light is:',
    options: ['h', 'e', 'h/e', 'e/h'],
    correctIndex: 2,
    explanation: 'From eV₀ = hν − φ₀, V₀ = (h/e)ν − φ₀/e. The slope is h/e, the same for all metals.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-10',
    type: 'mcq',
    question: 'In the graph of maximum kinetic energy versus frequency of incident radiation, the intercept on the frequency axis gives:',
    options: ['Threshold frequency', 'Work function', 'Planck constant', 'Stopping potential'],
    correctIndex: 0,
    explanation: 'Kmax is zero when ν = ν₀, so the line cuts the frequency axis at the threshold frequency.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-11',
    type: 'mcq',
    question: 'The graphs of stopping potential versus frequency for different metals are:',
    options: [
      'Intersecting straight lines',
      'Parallel straight lines',
      'Parabolas',
      'Mutually perpendicular lines'
    ],
    correctIndex: 1,
    explanation: 'Every graph has slope h/e, so they are parallel lines. Only the intercepts differ because the work functions differ.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-12',
    type: 'mcq',
    question: 'The frequency of radiation falling on a metal is increased from 2ν₀ to 4ν₀, where ν₀ is the threshold frequency. The maximum kinetic energy of the photoelectrons becomes:',
    options: ['1/3 times', 'Double', 'Unchanged', '3 times'],
    correctIndex: 3,
    explanation: 'At 2ν₀: K₁ = 2hν₀ − hν₀ = hν₀. At 4ν₀: K₂ = 4hν₀ − hν₀ = 3hν₀. So K₂ = 3K₁.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-13',
    type: 'mcq',
    question: 'The time lag between the incidence of light and the emission of photoelectrons is:',
    options: [
      'Practically instantaneous, about 10⁻⁹ s or less',
      'Several minutes at low intensity',
      'Several seconds',
      'Proportional to the work function'
    ],
    correctIndex: 0,
    explanation: 'Photoemission is almost instantaneous even at very low intensity, which the wave theory could not explain.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-14',
    type: 'mcq',
    question: 'Which feature of the photoelectric effect could NOT be explained by the wave theory of light?',
    options: [
      'Emission of electrons from the metal',
      'Increase of photocurrent with intensity',
      'The existence of a threshold frequency',
      'Conservation of energy'
    ],
    correctIndex: 2,
    explanation: 'According to wave theory, light of any frequency should eject electrons if intense enough. The threshold frequency contradicts this.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-15',
    type: 'mcq',
    question: 'The momentum of a photon of wavelength λ is:',
    options: ['hλ', 'λ/h', 'hc/λ', 'h/λ'],
    correctIndex: 3,
    explanation: 'p = E/c = hν/c = h/λ.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-16',
    type: 'mcq',
    question: 'The rest mass of a photon is:',
    options: ['h/c', 'Zero', 'hν/c²', 'Infinite'],
    correctIndex: 1,
    explanation: 'A photon always travels at the speed of light, so its rest mass is zero. hν/c² is only its effective (dynamic) mass.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-17',
    type: 'mcq',
    question: 'A monochromatic source of wavelength 6000 Å emits 3.31 W of power. The number of photons emitted per second is approximately (h = 6.62 × 10⁻³⁴ J s):',
    options: ['10¹⁹', '10²⁰', '10¹⁸', '3.31 × 10¹⁹'],
    correctIndex: 0,
    explanation: 'Energy per photon = hc/λ = (6.62 × 10⁻³⁴ × 3 × 10⁸)/(6 × 10⁻⁷) = 3.31 × 10⁻¹⁹ J. N = 3.31 / 3.31 × 10⁻¹⁹ = 10¹⁹.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-18',
    type: 'mcq',
    question: 'The momentum of a photon of wavelength 663 nm is (h = 6.63 × 10⁻³⁴ J s):',
    options: ['10⁻²⁸ kg m/s', '10⁻²⁷ kg m/s', '10⁻²⁶ kg m/s', '6.63 × 10⁻²⁷ kg m/s'],
    correctIndex: 1,
    explanation: 'p = h/λ = 6.63 × 10⁻³⁴ / 6.63 × 10⁻⁷ = 10⁻²⁷ kg m/s.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-19',
    type: 'mcq',
    question: 'The de Broglie wavelength of a particle of mass m and kinetic energy K is:',
    options: ['h/(2mK)', '√(2mK)/h', 'h√(2mK)', 'h/√(2mK)'],
    correctIndex: 3,
    explanation: 'λ = h/p and p = √(2mK), so λ = h/√(2mK).',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-20',
    type: 'mcq',
    question: 'The de Broglie wavelength of an electron accelerated through a potential difference of 150 V is approximately:',
    options: ['0.1 Å', '0.5 Å', '1 Å', '12 Å'],
    correctIndex: 2,
    explanation: 'λ = 12.27/√V Å = 12.27/√150 ≈ 1 Å.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-21',
    type: 'mcq',
    question: 'The potential difference through which an electron is accelerated is made four times. Its de Broglie wavelength becomes:',
    options: ['Double', 'Four times', 'Half', 'One-fourth'],
    correctIndex: 2,
    explanation: 'λ ∝ 1/√V. When V becomes 4V, λ becomes λ/2.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-22',
    type: 'mcq',
    question: 'A proton and an α-particle are accelerated through the same potential difference. The ratio of their de Broglie wavelengths λp : λα is:',
    options: ['2√2', '√2', '4', '2'],
    correctIndex: 0,
    explanation: 'λ = h/√(2mqV), so λ ∝ 1/√(mq). λp/λα = √(mα qα/(mp qp)) = √(4 × 2) = 2√2.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-23',
    type: 'mcq',
    question: 'An electron and a proton have the same kinetic energy. Which one has the larger de Broglie wavelength?',
    options: ['Proton', 'Electron', 'Both have the same', 'Depends on the charge'],
    correctIndex: 1,
    explanation: 'λ = h/√(2mK), so for the same K the lighter particle (electron) has the larger wavelength.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-24',
    type: 'mcq',
    question: 'The wave nature of a moving cricket ball is not observed because:',
    options: [
      'It has no charge',
      'It moves too slowly',
      'It is not a particle',
      'Its de Broglie wavelength is extremely small'
    ],
    correctIndex: 3,
    explanation: 'For a macroscopic object, the large momentum makes h/p so small (about 10⁻³⁴ m) that wave effects cannot be detected.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-25',
    type: 'mcq',
    question: 'The Davisson-Germer experiment demonstrated:',
    options: [
      'The particle nature of light',
      'The wave nature of electrons',
      'The existence of the nucleus',
      'The quantisation of charge'
    ],
    correctIndex: 1,
    explanation: 'Electrons scattered from a nickel crystal showed diffraction maxima, confirming de Broglie hypothesis.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-26',
    type: 'mcq',
    question: 'In the Davisson-Germer experiment, the scattered electron intensity was maximum at an accelerating voltage of:',
    options: ['44 V', '64 V', '54 V', '100 V'],
    correctIndex: 2,
    explanation: 'A strong peak was observed at 54 V and a scattering angle of 50°.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-27',
    type: 'mcq',
    question: 'Davisson and Germer used a crystal of which of the following as the target?',
    options: ['Nickel', 'Copper', 'Silicon', 'Sodium chloride'],
    correctIndex: 0,
    explanation: 'They scattered a beam of electrons from a single crystal of nickel.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-28',
    type: 'mcq',
    question: 'The de Broglie wavelength of a moving particle, λ = h/p, does not depend directly on its:',
    options: ['Mass', 'Velocity', 'Momentum', 'Charge'],
    correctIndex: 3,
    explanation: 'λ = h/(mv), so it depends on mass and velocity. It is independent of the charge of the particle.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-29',
    type: 'mcq',
    question: 'A photocell converts:',
    options: [
      'Light energy into electrical energy',
      'Electrical energy into light energy',
      'Heat energy into electrical energy',
      'Sound energy into light energy'
    ],
    correctIndex: 0,
    explanation: 'Light falling on the photosensitive cathode ejects electrons, which produce a current.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-30',
    type: 'mcq',
    question: 'Alkali metals like caesium and potassium are used as photosensitive materials because they have:',
    options: ['High work function', 'Low work function', 'High melting point', 'High density'],
    correctIndex: 1,
    explanation: 'A low work function means even visible light can eject electrons from them.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-31',
    type: 'mcq',
    question: 'If the intensity of the incident light (frequency above the threshold) is doubled, then:',
    options: [
      'Both Kmax and saturation current double',
      'Kmax doubles and saturation current is unchanged',
      'Both Kmax and saturation current are unchanged',
      'Kmax is unchanged and saturation current doubles'
    ],
    correctIndex: 3,
    explanation: 'Kmax depends on frequency alone. Doubling the intensity doubles the number of photons, and so the photocurrent.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-32',
    type: 'mcq',
    question: 'A point source of light is moved to twice its distance from the cathode of a photocell. The saturation current becomes:',
    options: ['Double', 'Half', 'One-fourth', 'Four times'],
    correctIndex: 2,
    explanation: 'Intensity ∝ 1/d². At twice the distance the intensity is 1/4, so the saturation current is one-fourth.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-33',
    type: 'mcq',
    question: 'Among the colours of visible light, photons of which colour have the highest energy?',
    options: ['Violet', 'Red', 'Yellow', 'Green'],
    correctIndex: 0,
    explanation: 'Violet has the highest frequency in the visible range, so E = hν is the largest.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-34',
    type: 'mcq',
    question: 'For light of a given frequency, the intensity in the photon picture is determined by:',
    options: [
      'The energy of each photon',
      'The number of photons incident per unit area per unit time',
      'The speed of the photons',
      'The work function of the metal'
    ],
    correctIndex: 1,
    explanation: 'Each photon carries energy hν. At fixed ν, a larger photon flux means a higher intensity.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-35',
    type: 'mcq',
    question: 'Einstein photoelectric equation was experimentally verified by:',
    options: ['Hertz', 'Lenard', 'Millikan', 'Thomson'],
    correctIndex: 2,
    explanation: 'Millikan performed precise experiments (1914-16) that verified the equation and gave a value of h.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-36',
    type: 'mcq',
    question: 'The photoelectric effect was first discovered by:',
    options: ['Heinrich Hertz', 'Albert Einstein', 'Robert Millikan', 'Max Planck'],
    correctIndex: 0,
    explanation: 'Hertz observed it in 1887 while studying electromagnetic waves. Einstein explained it in 1905.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-37',
    type: 'mcq',
    question: 'The emission of electrons from a metal surface under a very strong electric field (about 10⁸ V/m) is called:',
    options: ['Thermionic emission', 'Photoelectric emission', 'Secondary emission', 'Field emission'],
    correctIndex: 3,
    explanation: 'A very strong field can pull electrons out of the metal, which is called field (cold cathode) emission.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-38',
    type: 'mcq',
    question: 'Thermionic emission is the emission of electrons from a metal by:',
    options: [
      'A strong electric field',
      'Heating the metal',
      'Shining light on it',
      'Bombarding it with ions'
    ],
    correctIndex: 1,
    explanation: 'On heating, electrons gain enough thermal energy to overcome the work function and escape.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-39',
    type: 'mcq',
    question: 'The work function of a metal is:',
    options: [
      'The maximum kinetic energy of the emitted electron',
      'The energy of the incident photon',
      'The minimum energy required to eject an electron from the metal surface',
      'The energy required to ionise an atom of the metal'
    ],
    correctIndex: 2,
    explanation: 'φ₀ is the minimum energy an electron needs to escape from the metal surface.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-40',
    type: 'mcq',
    question: 'The value of 1 electron volt in joules is:',
    options: ['1.6 × 10⁻¹⁶ J', '1.6 × 10⁻²⁰ J', '6.63 × 10⁻³⁴ J', '1.6 × 10⁻¹⁹ J'],
    correctIndex: 3,
    explanation: '1 eV is the energy gained by an electron through 1 V, which is 1.6 × 10⁻¹⁹ J.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-41',
    type: 'mcq',
    question: 'Light of wavelength 4000 Å falls on sodium of work function 2.0 eV. The stopping potential is approximately:',
    options: ['1.1 V', '3.1 V', '2.0 V', '5.1 V'],
    correctIndex: 0,
    explanation: 'Photon energy = 12400/4000 = 3.1 eV. V₀ = (3.1 − 2.0) = 1.1 V.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-42',
    type: 'mcq',
    question: 'Photons of energy 5 eV fall on two metals A and B with work functions 2 eV and 4 eV respectively. The ratio of the maximum kinetic energies of the photoelectrons from A and B is:',
    options: ['1 : 3', '2 : 1', '3 : 1', '5 : 4'],
    correctIndex: 2,
    explanation: 'K_A = 5 − 2 = 3 eV and K_B = 5 − 4 = 1 eV. The ratio is 3 : 1.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-43',
    type: 'mcq',
    question: 'The threshold frequency of a metal is 5 × 10¹⁴ Hz. Light of frequency 8 × 10¹⁴ Hz is incident on it. The maximum kinetic energy of the photoelectrons is approximately (h = 6.63 × 10⁻³⁴ J s):',
    options: ['0.83 eV', '1.24 eV', '3.3 eV', '2.07 eV'],
    correctIndex: 1,
    explanation: 'Kmax = h(ν − ν₀) = 6.63 × 10⁻³⁴ × 3 × 10¹⁴ = 1.99 × 10⁻¹⁹ J = 1.24 eV.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-44',
    type: 'mcq',
    question: 'If the momentum of a moving particle is doubled, its de Broglie wavelength:',
    options: ['Becomes half', 'Doubles', 'Remains unchanged', 'Becomes four times'],
    correctIndex: 0,
    explanation: 'λ = h/p is inversely proportional to the momentum.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-45',
    type: 'mcq',
    question: 'An electron of mass m and a photon have the same energy E. The ratio of the de Broglie wavelength of the electron to the wavelength of the photon is (c is the speed of light):',
    options: ['c√(2mE)', '√(2mE)/c', 'c√(E/2m)', '(1/c)√(E/2m)'],
    correctIndex: 3,
    explanation: 'λ_e = h/√(2mE) and λ_ph = hc/E. The ratio is E/(c√(2mE)) = (1/c)√(E/2m).',
    difficulty: 'hard'
  },
  {
    id: 'dual-nature-46',
    type: 'mcq',
    question: 'A photon and an electron have the same de Broglie wavelength. Their momenta are:',
    options: ['Greater for the photon', 'Equal', 'Greater for the electron', 'Cannot be compared'],
    correctIndex: 1,
    explanation: 'p = h/λ for both, so equal wavelengths mean equal momenta.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-47',
    type: 'mcq',
    question: 'Matter waves associated with a moving electron are:',
    options: [
      'Electromagnetic waves',
      'Mechanical waves',
      'Neither electromagnetic nor mechanical',
      'Longitudinal sound waves'
    ],
    correctIndex: 2,
    explanation: 'Matter waves are not electromagnetic waves, since they are associated with uncharged particles as well. They are not mechanical waves either.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-48',
    type: 'mcq',
    question: 'Among the following particles moving with the same speed, which has the longest de Broglie wavelength?',
    options: ['Electron', 'Proton', 'Neutron', 'α-particle'],
    correctIndex: 0,
    explanation: 'λ = h/mv. For equal speed the smallest mass, the electron, gives the longest wavelength.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-49',
    type: 'mcq',
    question: 'Electron, proton, deuteron and α-particle all have the same kinetic energy. Which has the shortest de Broglie wavelength?',
    options: ['Electron', 'Proton', 'Deuteron', 'α-particle'],
    correctIndex: 3,
    explanation: 'λ = h/√(2mK). For the same K the heaviest particle, the α-particle, has the shortest wavelength.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-50',
    type: 'mcq',
    question: 'Radiation of frequency 10¹⁵ Hz falls on a metal of threshold frequency 6 × 10¹⁴ Hz. The stopping potential is approximately (h = 6.63 × 10⁻³⁴ J s):',
    options: ['0.83 V', '2.5 V', '1.66 V', '4.14 V'],
    correctIndex: 2,
    explanation: 'V₀ = h(ν − ν₀)/e = 6.63 × 10⁻³⁴ × 4 × 10¹⁴ / 1.6 × 10⁻¹⁹ ≈ 1.66 V.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-51',
    type: 'mcq',
    question: 'Photocurrent versus anode potential graphs are drawn for two light beams of the same frequency but different intensities. The two graphs have:',
    options: [
      'Different stopping potentials and the same saturation current',
      'The same stopping potential and different saturation currents',
      'The same stopping potential and the same saturation current',
      'Different stopping potentials and different saturation currents'
    ],
    correctIndex: 1,
    explanation: 'Stopping potential depends on frequency, which is the same. Saturation current depends on intensity, which differs.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-52',
    type: 'mcq',
    question: 'The minimum negative (retarding) potential of the anode at which the photocurrent becomes zero is called:',
    options: ['Threshold potential', 'Saturation potential', 'Contact potential', 'Stopping potential'],
    correctIndex: 3,
    explanation: 'At the stopping potential V₀, even the most energetic photoelectrons are stopped, so eV₀ = Kmax.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-53',
    type: 'mcq',
    question: 'The photoelectrons emitted from a metal surface have kinetic energies:',
    options: [
      'Ranging from zero to a maximum value',
      'All equal to the maximum value',
      'All equal to zero',
      'Always equal to hν'
    ],
    correctIndex: 0,
    explanation: 'Electrons lose different amounts of energy inside the metal before escaping, so the energies range from zero to Kmax.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-54',
    type: 'mcq',
    question: 'Einstein was awarded the Nobel Prize in Physics for:',
    options: [
      'The theory of relativity',
      'The explanation of Brownian motion',
      'The explanation of the photoelectric effect',
      'The mass-energy relation'
    ],
    correctIndex: 2,
    explanation: 'He received the 1921 Nobel Prize for his explanation of the photoelectric effect using light quanta.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-55',
    type: 'mcq',
    question: 'The hypothesis that matter has wave properties was proposed by:',
    options: ['de Broglie', 'Schrödinger', 'Heisenberg', 'Bohr'],
    correctIndex: 0,
    explanation: 'Louis de Broglie proposed matter waves in 1924.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-56',
    type: 'mcq',
    question: 'In the Davisson-Germer experiment, electrons accelerated through 54 V have a de Broglie wavelength of approximately:',
    options: ['0.5 Å', '1.67 Å', '3.2 Å', '6.6 Å'],
    correctIndex: 1,
    explanation: 'λ = 12.27/√V Å = 12.27/√54 ≈ 1.67 Å.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-57',
    type: 'mcq',
    question: 'A photon has energy 3.31 × 10⁻¹⁹ J. Its wavelength is (h = 6.62 × 10⁻³⁴ J s, c = 3 × 10⁸ m/s):',
    options: ['2000 Å', '4000 Å', '8000 Å', '6000 Å'],
    correctIndex: 3,
    explanation: 'λ = hc/E = (6.62 × 10⁻³⁴ × 3 × 10⁸)/(3.31 × 10⁻¹⁹) = 6 × 10⁻⁷ m = 6000 Å.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-58',
    type: 'mcq',
    question: 'The kinetic energy of an electron whose de Broglie wavelength is 1 nm is approximately:',
    options: ['0.15 eV', '15 eV', '1.5 eV', '150 eV'],
    correctIndex: 2,
    explanation: 'λ (Å) = 12.27/√K (eV) gives K = 150/λ². For λ = 10 Å, K = 150/100 = 1.5 eV.',
    difficulty: 'hard'
  },
  {
    id: 'dual-nature-59',
    type: 'mcq',
    question: 'Light of wavelength λ ejects photoelectrons of maximum kinetic energy K from a metal of work function φ. If the wavelength is halved, the new maximum kinetic energy is:',
    options: ['2K', '2K + φ', 'K + φ/2', 'K/2'],
    correctIndex: 1,
    explanation: 'hc/λ = K + φ. For wavelength λ/2, K′ = 2hc/λ − φ = 2(K + φ) − φ = 2K + φ.',
    difficulty: 'hard'
  },
  {
    id: 'dual-nature-60',
    type: 'mcq',
    question: 'Light of wavelength 3000 Å is incident on a metal of work function 2.48 eV. The maximum kinetic energy of the photoelectrons is approximately:',
    options: ['1.65 eV', '4.13 eV', '2.48 eV', '6.61 eV'],
    correctIndex: 0,
    explanation: 'Photon energy = 12400/3000 = 4.13 eV. Kmax = 4.13 − 2.48 = 1.65 eV.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-61',
    type: 'mcq',
    question: 'The de Broglie wavelength of a ball of mass 0.1 kg moving at 10 m/s is (h = 6.63 × 10⁻³⁴ J s):',
    options: ['6.63 × 10⁻³² m', '6.63 × 10⁻³⁵ m', '6.63 × 10⁻³³ m', '6.63 × 10⁻³⁴ m'],
    correctIndex: 3,
    explanation: 'λ = h/mv = 6.63 × 10⁻³⁴ / (0.1 × 10) = 6.63 × 10⁻³⁴ m.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-62',
    type: 'mcq',
    question: 'The effective (dynamic) mass of a photon of frequency ν is:',
    options: ['hν/c²', 'hνc²', 'h/(νc)', 'hc²/ν'],
    correctIndex: 0,
    explanation: 'From E = mc² and E = hν, m = hν/c².',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-63',
    type: 'mcq',
    question: 'The ratio of the energies of photons of wavelengths 4000 Å and 6000 Å is:',
    options: ['2 : 3', '4 : 9', '3 : 2', '9 : 4'],
    correctIndex: 2,
    explanation: 'E ∝ 1/λ, so E₁ : E₂ = 6000 : 4000 = 3 : 2.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-64',
    type: 'mcq',
    question: 'A 1 W source emits light of wavelength 662 nm. The number of photons emitted per second is approximately (h = 6.62 × 10⁻³⁴ J s):',
    options: ['3.3 × 10¹⁷', '3.3 × 10¹⁸', '3.3 × 10¹⁹', '6.62 × 10¹⁸'],
    correctIndex: 1,
    explanation: 'Energy per photon = hc/λ = (6.62 × 10⁻³⁴ × 3 × 10⁸)/(6.62 × 10⁻⁷) = 3 × 10⁻¹⁹ J. N = 1/(3 × 10⁻¹⁹) ≈ 3.3 × 10¹⁸ per second.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-65',
    type: 'mcq',
    question: 'In a photocell with light of suitable frequency incident on the cathode, the photocurrent at zero anode potential is:',
    options: ['Zero', 'Maximum', 'Negative', 'Non-zero'],
    correctIndex: 3,
    explanation: 'The photoelectrons leave with some kinetic energy, so some of them reach the anode even with no applied potential.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-66',
    type: 'mcq',
    question: 'The de Broglie wavelength of an electron (mass m, charge e) accelerated through a potential difference V is:',
    options: ['h/(2meV)', 'h√(2meV)', 'h/√(2meV)', '√(2meV)/h'],
    correctIndex: 2,
    explanation: 'The kinetic energy is eV, so p = √(2meV) and λ = h/√(2meV).',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-67',
    type: 'mcq',
    question: 'Which of the following metals has the lowest work function?',
    options: ['Caesium', 'Platinum', 'Copper', 'Aluminium'],
    correctIndex: 0,
    explanation: 'Caesium has a work function of about 2.14 eV, the lowest among common metals. Platinum is about 5.65 eV.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-68',
    type: 'mcq',
    question: 'Visible light (photon energy about 1.8 to 3.1 eV) can eject photoelectrons from which of the following?',
    options: [
      'Platinum (φ₀ = 5.65 eV)',
      'Caesium (φ₀ = 2.14 eV)',
      'Copper (φ₀ = 4.65 eV)',
      'Nickel (φ₀ = 5.15 eV)'
    ],
    correctIndex: 1,
    explanation: 'Emission needs the photon energy to exceed the work function. Only caesium has a work function below the upper end of the visible range.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-69',
    type: 'mcq',
    question: 'An electron and a proton are accelerated through the same potential difference. The ratio of their de Broglie wavelengths λe : λp is close to:',
    options: ['1 : 1', '1836 : 1', '43 : 1', '1 : 43'],
    correctIndex: 2,
    explanation: 'λ ∝ 1/√m for the same V, so λe/λp = √(mp/me) = √1836 ≈ 43.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-70',
    type: 'mcq',
    question: 'The intensity of light of a given frequency (above the threshold) is doubled. The stopping potential:',
    options: ['Doubles', 'Becomes half', 'Becomes zero', 'Remains the same'],
    correctIndex: 3,
    explanation: 'The stopping potential depends only on the frequency and the metal, not on the intensity.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-71',
    type: 'mcq',
    question: 'Which of the following statements about photons is NOT true?',
    options: [
      'They travel with the speed of light in vacuum',
      'They are deflected by electric and magnetic fields',
      'They have zero rest mass',
      'They carry both energy and momentum'
    ],
    correctIndex: 1,
    explanation: 'Photons are electrically neutral, so they are not deflected by electric or magnetic fields.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-72',
    type: 'mcq',
    question: 'In the photon picture of the photoelectric effect, the energy of a photon is absorbed by:',
    options: [
      'A single electron as a whole',
      'Many electrons simultaneously',
      'The nucleus of the atom',
      'The entire metal lattice equally'
    ],
    correctIndex: 0,
    explanation: 'The interaction is a one-to-one photon-electron event. The electron takes the entire photon energy.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-73',
    type: 'mcq',
    question: 'As the frequency of incident radiation (above the threshold) is increased, the maximum kinetic energy of the photoelectrons:',
    options: ['Decreases', 'Increases quadratically', 'Remains constant', 'Increases linearly'],
    correctIndex: 3,
    explanation: 'Kmax = hν − φ₀ is a linear function of ν.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-74',
    type: 'mcq',
    question: 'Light of wavelength λ falls on a metal whose threshold wavelength is λ₀ (λ < λ₀). The maximum kinetic energy of the photoelectrons is:',
    options: ['hc(λ − λ₀)', 'hc(1/λ₀ − 1/λ)', 'hc(1/λ − 1/λ₀)', 'hc(λ + λ₀)'],
    correctIndex: 2,
    explanation: 'Kmax = hc/λ − φ₀ = hc/λ − hc/λ₀ = hc(1/λ − 1/λ₀).',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-75',
    type: 'mcq',
    question: 'An α-particle and a proton have the same de Broglie wavelength. The ratio of their kinetic energies Kα : Kp is:',
    options: ['4 : 1', '1 : 4', '2 : 1', '1 : 2'],
    correctIndex: 1,
    explanation: 'K = h²/(2mλ²), so K ∝ 1/m for the same λ. Kα/Kp = mp/mα = 1/4.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-76',
    type: 'mcq',
    question: 'Two particles of masses m and 4m have the same kinetic energy. The ratio of their de Broglie wavelengths is:',
    options: ['2 : 1', '1 : 2', '4 : 1', '1 : 4'],
    correctIndex: 0,
    explanation: 'λ ∝ 1/√m, so λ_m / λ_4m = √(4m/m) = 2.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-77',
    type: 'mcq',
    question: 'In the graph of stopping potential V₀ against frequency ν, the intercept on the V₀ axis is:',
    options: ['h/e', 'hν₀', 'e/h', '−φ₀/e'],
    correctIndex: 3,
    explanation: 'V₀ = (h/e)ν − φ₀/e. At ν = 0 the intercept is −φ₀/e.',
    difficulty: 'medium'
  },
  {
    id: 'dual-nature-78',
    type: 'mcq',
    question: 'Light of frequency less than the threshold frequency but of very high intensity falls on a metal. The photoemission:',
    options: [
      'Occurs after some time delay',
      'Occurs with a reduced current',
      'Does not occur',
      'Occurs with zero kinetic energy'
    ],
    correctIndex: 2,
    explanation: 'Each photon has energy below φ₀ and a single photon is absorbed by a single electron, so no emission occurs whatever the intensity.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-79',
    type: 'mcq',
    question: 'The de Broglie wavelength of an electron accelerated through a potential difference of 1 V is approximately:',
    options: ['1.23 Å', '0.123 Å', '123 Å', '12.3 Å'],
    correctIndex: 3,
    explanation: 'λ = 12.27/√V Å = 12.27/√1 ≈ 12.3 Å.',
    difficulty: 'easy'
  },
  {
    id: 'dual-nature-80',
    type: 'mcq',
    question: 'Which of the following phenomena demonstrates the particle nature of light?',
    options: ['Interference', 'Photoelectric effect', 'Diffraction', 'Polarisation'],
    correctIndex: 1,
    explanation: 'The photoelectric effect can be explained only by photons. Interference, diffraction and polarisation show the wave nature.',
    difficulty: 'easy'
  }
];
export default dualNatureQuestions;