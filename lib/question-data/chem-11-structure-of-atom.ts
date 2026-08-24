import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    id: 'soa-1',
    type: 'mcq',
    question: 'The word ‘atom’ is derived from the Greek word ‘a-tomio’, which specifically means:',
    options: ['Smallest particle', 'Fundamental block', 'Uncut-able or non-divisible', 'Spherical entity'],
    correctIndex: 2,
    explanation: 'As per the source, ‘a-tomio’ means ‘uncut-able’ or ‘non-divisible’.',
    difficulty: 'easy'
  },
  {
    id: 'soa-2',
    type: 'mcq',
    question: 'Which observation led to the realization that Dalton’s atomic theory needed modification regarding the indivisibility of atoms?',
    options: ['Law of multiple proportions', 'Electrical charging of glass by rubbing with silk', 'Law of conservation of mass', 'The existence of molecules'],
    correctIndex: 1,
    explanation: 'Dalton’s theory failed to explain why substances like glass get charged when rubbed, suggesting internal structure.',
    difficulty: 'medium'
  },
  {
    id: 'soa-3',
    type: 'mcq',
    question: 'In a cathode ray discharge tube, the electrical discharge through the gases is observed only at:',
    options: ['High pressure and high voltage', 'Very low pressure and very high voltage', 'Atmospheric pressure and low voltage', 'High pressure and low voltage'],
    correctIndex: 1,
    explanation: 'The source states discharge is observed only at very low pressures and very high voltages.',
    difficulty: 'easy'
  },
  {
    id: 'soa-4',
    type: 'mcq',
    question: 'The bright spot developed on the zinc sulphide coating behind the anode in a discharge tube is due to:',
    options: ['Anode rays', 'X-rays', 'Cathode rays', 'Visible light'],
    correctIndex: 2,
    explanation: 'Cathode rays hitting the phosphorescent ZnS coating cause a bright spot.',
    difficulty: 'easy'
  },
  {
    id: 'soa-5',
    type: 'mcq',
    question: 'Which of the following statements regarding cathode rays is INCORRECT?',
    options: ['They start from cathode and move towards anode.', 'They are visible in the absence of fluorescent material.', 'They travel in straight lines in the absence of fields.', 'Their behavior is similar to negatively charged particles.'],
    correctIndex: 1,
    explanation: 'The source specifies "These rays themselves are not visible" but can be observed with help of fluorescent materials.',
    difficulty: 'medium'
  },
  {
    id: 'soa-6',
    type: 'mcq',
    question: 'The characteristics of cathode rays are:',
    options: ['Dependent on the nature of gas used', 'Dependent on the material of electrodes', 'Independent of both gas nature and electrode material', 'Dependent on the size of the tube'],
    correctIndex: 2,
    explanation: 'Characteristics of cathode rays (electrons) do not depend on the gas or electrode material.',
    difficulty: 'medium'
  },
  {
    id: 'soa-7',
    type: 'mcq',
    question: 'J.J. Thomson determined the charge to mass ratio (e/me) of an electron to be approximately:',
    options: ['1.76 × 10^11 C/kg', '1.60 × 10^-19 C/kg', '9.11 × 10^-31 C/kg', '1.76 × 10^8 C/kg'],
    correctIndex: 0,
    explanation: 'The source gives the value as 1.758820 × 10^11 C kg–1.',
    difficulty: 'easy'
  },
  {
    id: 'soa-8',
    type: 'mcq',
    question: 'According to J.J. Thomson, the amount of deviation of electrons in an electric or magnetic field depends on:',
    options: ['Only the mass of the particle', 'Only the magnitude of charge', 'Magnitude of charge, mass, and field strength', 'Only the velocity of light'],
    correctIndex: 2,
    explanation: 'Deflection depends on charge magnitude, mass (lighter = more deflection), and field strength.',
    difficulty: 'medium'
  },
  {
    id: 'soa-9',
    type: 'mcq',
    question: 'The charge on the electron was determined by R.A. Millikan using which method?',
    options: ['Scattering experiment', 'Discharge tube experiment', 'Oil drop experiment', 'Mass spectrometry'],
    correctIndex: 2,
    explanation: 'Millikan used the oil drop experiment to find the charge on the electron.',
    difficulty: 'easy'
  },
  {
    id: 'soa-10',
    type: 'mcq',
    question: 'Calculate the mass of an electron if its charge is 1.602 × 10^-19 C and e/me is 1.758 × 10^11 C/kg.',
    options: ['1.67 × 10^-27 kg', '9.109 × 10^-31 kg', '9.109 × 10^-28 kg', '1.67 × 10^-24 kg'],
    correctIndex: 1,
    explanation: 'Mass = Charge / (e/me) = (1.602 × 10^-19) / (1.758 × 10^11) ≈ 9.109 × 10^-31 kg.',
    difficulty: 'hard'
  },
  {
    id: 'soa-11',
    type: 'mcq',
    question: 'In the discovery of "canal rays", the nature of the positively charged particles depends upon:',
    options: ['The material of the cathode', 'The nature of the gas in the tube', 'The voltage applied', 'The length of the tube'],
    correctIndex: 1,
    explanation: 'Unlike cathode rays, the mass and nature of canal rays depend on the gas present in the tube.',
    difficulty: 'medium'
  },
  {
    id: 'soa-12',
    type: 'mcq',
    question: 'Which particle was discovered by Chadwick by bombarding beryllium with α-particles?',
    options: ['Electron', 'Proton', 'Neutron', 'Meson'],
    correctIndex: 2,
    explanation: 'James Chadwick discovered neutrons in 1932 via α-particle bombardment of Be.',
    difficulty: 'easy'
  },
  {
    id: 'soa-13',
    type: 'mcq',
    question: 'Thomson’s "plum pudding" model of the atom assumed that:',
    options: ['Mass is concentrated in the center', 'Positive charge is uniformly distributed', 'Electrons revolve in orbits', 'Atom is mostly empty space'],
    correctIndex: 1,
    explanation: 'Thomson proposed positive charge is uniformly distributed in a sphere with electrons embedded.',
    difficulty: 'easy'
  },
  {
    id: 'soa-14',
    type: 'mcq',
    question: 'What is the approximate radius of an atom according to Thomson’s model?',
    options: ['10^-15 m', '10^-12 m', '10^-10 m', '10^-8 m'],
    correctIndex: 2,
    explanation: 'The source specifies the radius of the sphere is approximately 10^-10 m.',
    difficulty: 'easy'
  },
  {
    id: 'soa-15',
    type: 'mcq',
    question: 'In Rutherford’s scattering experiment, what fraction of α-particles was deflected by nearly 180°?',
    options: ['1 in 2,000', '1 in 20,000', '1 in 100', 'Most of them'],
    correctIndex: 1,
    explanation: 'A very few α–particles (∼1 in 20,000) bounced back.',
    difficulty: 'medium'
  },
  {
    id: 'soa-16',
    type: 'mcq',
    question: 'Rutherford’s experiment concluded that the volume of the nucleus is:',
    options: ['Equal to the atom volume', 'Half of the atom volume', 'Negligibly small compared to atom volume', 'Twice the atom volume'],
    correctIndex: 2,
    explanation: 'Calculations showed nuclear volume is negligibly small compared to total atom volume.',
    difficulty: 'easy'
  },
  {
    id: 'soa-17',
    type: 'mcq',
    question: 'If the radius of the nucleus is 10^-15 m, what is the approximate radius of the atom?',
    options: ['10^-10 m', '10^-5 m', '10^-12 m', '10^-14 m'],
    correctIndex: 0,
    explanation: 'The source gives the radius of atom as ~10^-10 m and nucleus as ~10^-15 m.',
    difficulty: 'easy'
  },
  {
    id: 'soa-18',
    type: 'mcq',
    question: 'Which force holds the electrons and the nucleus together in Rutherford’s model?',
    options: ['Gravitational force', 'Magnetic force', 'Electrostatic forces of attraction', 'Nuclear force'],
    correctIndex: 2,
    explanation: 'They are held together by electrostatic forces of attraction.',
    difficulty: 'easy'
  },
  {
    id: 'soa-19',
    type: 'mcq',
    question: 'Atomic number (Z) is equal to:',
    options: ['Number of neutrons', 'Number of protons in the nucleus', 'Sum of protons and neutrons', 'Number of electrons in a cation'],
    correctIndex: 1,
    explanation: 'Z = number of protons in the nucleus.',
    difficulty: 'easy'
  },
  {
    id: 'soa-20',
    type: 'mcq',
    question: 'Nucleons consist of:',
    options: ['Only protons', 'Only neutrons', 'Protons and neutrons collectively', 'Electrons and protons'],
    correctIndex: 2,
    explanation: 'Protons and neutrons present in the nucleus are collectively known as nucleons.',
    difficulty: 'easy'
  },
  {
    id: 'soa-21',
    type: 'mcq',
    question: 'Isobars are atoms with:',
    options: ['Same atomic number, different mass number', 'Same mass number, different atomic number', 'Same number of neutrons', 'Same chemical properties'],
    correctIndex: 1,
    explanation: 'Isobars have the same mass number but different atomic number.',
    difficulty: 'easy'
  },
  {
    id: 'soa-22',
    type: 'mcq',
    question: 'Which isotope of hydrogen contains two neutrons?',
    options: ['Protium', 'Deuterium', 'Tritium', 'Hydronium'],
    correctIndex: 2,
    explanation: 'Tritium (1H3) possesses 1 proton and 2 neutrons.',
    difficulty: 'medium'
  },
  {
    id: 'soa-23',
    type: 'mcq',
    question: 'The number of neutrons in Br-80 (Z=35) is:',
    options: ['35', '80', '45', '115'],
    correctIndex: 2,
    explanation: 'Neutrons = A - Z = 80 - 35 = 45.',
    difficulty: 'easy'
  },
  {
    id: 'soa-24',
    type: 'mcq',
    question: 'A species has 16 protons, 18 electrons, and 16 neutrons. The symbol is:',
    options: ['S', 'S^2-', 'S^2+', 'Ar'],
    correctIndex: 1,
    explanation: 'Protons=16 means S. Excess electrons=2 means 2- charge.',
    difficulty: 'medium'
  },
  {
    id: 'soa-25',
    type: 'mcq',
    question: 'Isotopes show identical chemical behavior because:',
    options: ['They have the same number of neutrons', 'Chemical properties are controlled by electrons (protons)', 'They have the same mass number', 'They have the same nuclear energy'],
    correctIndex: 1,
    explanation: 'Chemical properties are controlled by the number of electrons, determined by protons.',
    difficulty: 'medium'
  },
  {
    id: 'soa-26',
    type: 'mcq',
    question: 'According to Maxwell, what happens when a charged particle moves under acceleration?',
    options: ['It loses mass', 'It emits electromagnetic radiation', 'Its charge decreases', 'It follows a straight path'],
    correctIndex: 1,
    explanation: 'Maxwell suggested accelerated charged particles produce/transmit alternating electric/magnetic fields as waves.',
    difficulty: 'easy'
  },
  {
    id: 'soa-27',
    type: 'mcq',
    question: 'Which is true about the components of an electromagnetic wave?',
    options: ['Electric and magnetic fields are parallel', 'They require a medium to travel', 'Electric and magnetic fields are perpendicular to each other and propagation direction', 'They travel at different speeds in vacuum'],
    correctIndex: 2,
    explanation: 'Components vibrate in two mutually perpendicular planes and are perpendicular to the direction of propagation.',
    difficulty: 'medium'
  },
  {
    id: 'soa-28',
    type: 'mcq',
    question: 'The frequency of a wave is defined as:',
    options: ['Distance between two crests', 'Number of waves per unit length', 'Number of waves passing a point in one second', 'Speed divided by wavelength squared'],
    correctIndex: 2,
    explanation: 'Frequency (ν) is the number of waves passing a point per second.',
    difficulty: 'easy'
  },
  {
    id: 'soa-29',
    type: 'mcq',
    question: 'Calculate the wavelength of a radiation with frequency 1368 kHz. (c = 3.0 × 10^8 m/s)',
    options: ['219.3 m', '219.3 nm', '21.9 m', '219.3 km'],
    correctIndex: 0,
    explanation: 'λ = c/ν = (3.0 × 10^8) / (1368 × 10^3) ≈ 219.3 m.',
    difficulty: 'hard'
  },
  {
    id: 'soa-30',
    type: 'mcq',
    question: 'The unit of wavenumber (ν-bar) commonly used in spectroscopy is:',
    options: ['m', 's^-1', 'cm^-1', 'Hz'],
    correctIndex: 2,
    explanation: 'The common unit (though not SI) for wavenumber is cm^-1.',
    difficulty: 'easy'
  },
  {
    id: 'soa-31',
    type: 'mcq',
    question: 'Which region of the EM spectrum is used for radar?',
    options: ['Radio frequency', 'Infrared', 'Microwave', 'Ultraviolet'],
    correctIndex: 2,
    explanation: 'Microwave region around 10^10 Hz is used for radar.',
    difficulty: 'easy'
  },
  {
    id: 'soa-32',
    type: 'mcq',
    question: 'Calculate the wavenumber of radiation with wavelength 5800 Å.',
    options: ['1.724 × 10^4 cm^-1', '5.8 × 10^-5 cm^-1', '1.724 × 10^6 m^-1', 'Both A and C'],
    correctIndex: 3,
    explanation: 'Wavenumber = 1/λ. 1 / (5800 × 10^-8 cm) = 1.724 × 10^4 cm^-1; 1 / (5800 × 10^-10 m) = 1.724 × 10^6 m^-1.',
    difficulty: 'hard'
  },
  {
    id: 'soa-33',
    type: 'mcq',
    question: 'In a vacuum, all types of electromagnetic radiations travel at:',
    options: ['Different speeds depending on wavelength', 'The same speed of 3.0 × 10^8 m/s', 'Speeds dependent on frequency', 'Decreasing speeds over distance'],
    correctIndex: 1,
    explanation: 'In vacuum, all EM radiation travels at c = 3.0 × 10^8 m/s.',
    difficulty: 'easy'
  },
  {
    id: 'soa-34',
    type: 'mcq',
    question: 'The range of the visible spectrum in terms of frequency is approximately:',
    options: ['10^6 to 10^8 Hz', '4.0 × 10^14 to 7.5 × 10^14 Hz', '10^10 to 10^12 Hz', '10^18 to 10^20 Hz'],
    correctIndex: 1,
    explanation: 'Visible range is from 4.0 × 10^14 (red) to 7.5 × 10^14 (violet) Hz.',
    difficulty: 'medium'
  },
  {
    id: 'soa-35',
    type: 'mcq',
    question: 'Which phenomenon could NOT be explained by the wave nature of light?',
    options: ['Interference', 'Diffraction', 'Photoelectric effect', 'Refraction'],
    correctIndex: 2,
    explanation: 'The photoelectric effect and black-body radiation require particle nature (quantum theory).',
    difficulty: 'medium'
  },
  {
    id: 'soa-36',
    type: 'mcq',
    question: 'A "Black body" is an ideal body that:',
    options: ['Absorbs only black light', 'Emits only visible light', 'Emits and absorbs radiations of all frequencies uniformly', 'Reflects all incident light'],
    correctIndex: 2,
    explanation: 'A black body is an ideal radiator and absorber of all frequencies.',
    difficulty: 'easy'
  },
  {
    id: 'soa-37',
    type: 'mcq',
    question: 'Max Planck suggested that energy is emitted or absorbed in discrete packets called:',
    options: ['Photons only', 'Quanta', 'Wavelengths', 'Continuous bands'],
    correctIndex: 1,
    explanation: 'Planck gave the name ‘quantum’ to the smallest quantity of energy.',
    difficulty: 'easy'
  },
  {
    id: 'soa-38',
    type: 'mcq',
    question: 'The value of Planck’s constant (h) is:',
    options: ['6.626 × 10^-34 J s', '6.626 × 10^-31 J s', '1.602 × 10^-19 J s', '3.0 × 10^8 J s'],
    correctIndex: 0,
    explanation: 'h = 6.626 × 10^-34 J s.',
    difficulty: 'easy'
  },
  {
    id: 'soa-39',
    type: 'mcq',
    question: 'Calculate the energy of one photon of radiation with frequency 5 × 10^14 Hz.',
    options: ['3.313 × 10^-19 J', '3.313 × 10^-17 J', '1.325 × 10^-19 J', '6.626 × 10^-34 J'],
    correctIndex: 0,
    explanation: 'E = hν = (6.626 × 10^-34) * (5 × 10^14) = 3.313 × 10^-19 J.',
    difficulty: 'medium'
  },
  {
    id: 'soa-40',
    type: 'mcq',
    question: 'Which of the following is an observation of the photoelectric effect?',
    options: ['Time lag exists between striking light and ejection', 'K.E. of electrons depends on light intensity', 'Number of electrons ejected depends on intensity', 'Ejection occurs at any frequency if intensity is high'],
    correctIndex: 2,
    explanation: 'Ejection is instantaneous; K.E. depends on frequency; Number of electrons depends on intensity.',
    difficulty: 'medium'
  },
  {
    id: 'soa-41',
    type: 'mcq',
    question: 'Threshold frequency (ν0) is defined as:',
    options: ['Maximum frequency for ejection', 'Minimum frequency required for photoelectric effect', 'Frequency at which K.E. is maximum', 'Frequency of red light'],
    correctIndex: 1,
    explanation: 'It is the characteristic minimum frequency below which ejection is not observed.',
    difficulty: 'easy'
  },
  {
    id: 'soa-42',
    type: 'mcq',
    question: 'Einstein’s photoelectric equation is:',
    options: ['E = mc^2', 'hν = hν0 + 1/2 me v^2', 'λ = h/mv', 'E = nhν'],
    correctIndex: 1,
    explanation: 'Energy of photon = Work function + Kinetic energy of electron.',
    difficulty: 'easy'
  },
  {
    id: 'soa-43',
    type: 'mcq',
    question: 'Calculate the number of photons emitted per second by a 100W bulb of wavelength 400 nm.',
    options: ['2.012 × 10^20', '4.969 × 10^-19', '2.012 × 10^18', '5.17 × 10^20'],
    correctIndex: 0,
    explanation: 'E_photon = hc/λ ≈ 4.969 × 10^-19 J. Photons/sec = Power/E_photon = 100 / (4.969 × 10^-19) ≈ 2.012 × 10^20.',
    difficulty: 'hard'
  },
  {
    id: 'soa-44',
    type: 'mcq',
    question: 'If red light (4.5 × 10^14 Hz) fails to eject electrons from potassium (ν0 = 5.0 × 10^14 Hz), what will happen if very weak yellow light (5.2 × 10^14 Hz) is used?',
    options: ['Nothing will happen', 'Ejection will occur immediately', 'Ejection will occur after some hours', 'K.E. will be negative'],
    correctIndex: 1,
    explanation: 'Yellow light exceeds ν0, so ejection occurs without time lag regardless of low intensity.',
    difficulty: 'medium'
  },
  {
    id: 'soa-45',
    type: 'mcq',
    question: 'The "Work function" (W0) of a metal is:',
    options: ['Total energy of electron', 'Minimum energy required to eject an electron', 'Energy of most intense radiation', 'h divided by frequency'],
    correctIndex: 1,
    explanation: 'Work function W0 = hν0, the minimum energy to remove an electron.',
    difficulty: 'easy'
  },
  {
    id: 'soa-46',
    type: 'mcq',
    question: 'Calculate the kinetic energy of an electron ejected from a metal (ν0 = 7.0 × 10^14 s^-1) by radiation of 1.0 × 10^15 s^-1.',
    options: ['1.988 × 10^-19 J', '6.626 × 10^-19 J', '4.638 × 10^-19 J', '3.313 × 10^-19 J'],
    correctIndex: 0,
    explanation: 'K.E. = h(ν - ν0) = 6.626 × 10^-34 * (10 - 7) * 10^14 = 1.988 × 10^-19 J.',
    difficulty: 'hard'
  },
  {
    id: 'soa-47',
    type: 'mcq',
    question: 'Light exhibits "Dual behavior", meaning:',
    options: ['It has two frequencies', 'It has both wave and particle properties', 'It travels in two directions', 'It consists of protons and electrons'],
    correctIndex: 1,
    explanation: 'Light behaves as a wave (interference/diffraction) and as a particle (photoelectric effect).',
    difficulty: 'easy'
  },
  {
    id: 'soa-48',
    type: 'mcq',
    question: 'A spectrum where violet merges into blue, blue into green, and so on, is called:',
    options: ['Line spectrum', 'Emission spectrum', 'Continuous spectrum', 'Absorption spectrum'],
    correctIndex: 2,
    explanation: 'Such as the visible white light spectrum where colors merge without gaps.',
    difficulty: 'easy'
  },
  {
    id: 'soa-49',
    type: 'mcq',
    question: 'Absorption spectra are identified by:',
    options: ['Bright lines on a dark background', 'Dark spaces in a bright continuous spectrum', 'Continuous color merge', 'Overlapping wave patterns'],
    correctIndex: 1,
    explanation: 'Absorbed wavelengths leave dark spaces in the continuous spectrum (photographic negative of emission).',
    difficulty: 'medium'
  },
  {
    id: 'soa-50',
    type: 'mcq',
    question: 'Line spectra are also known as "fingerprints" of atoms because:',
    options: ['Every atom has the same lines', 'Each element has a unique line emission spectrum', 'They are visible only to the eye', 'They depend on the size of the sample'],
    correctIndex: 1,
    explanation: 'Each element has a unique set of lines, allowing for chemical identification.',
    difficulty: 'medium'
  },
  {
    id: 'soa-51',
    type: 'mcq',
    question: 'The Balmer series of lines in the hydrogen spectrum appear in which region?',
    options: ['Ultraviolet', 'Visible', 'Infrared', 'X-ray'],
    correctIndex: 1,
    explanation: 'Balmer series are the only lines in the hydrogen spectrum in the visible region.',
    difficulty: 'easy'
  },
  {
    id: 'soa-52',
    type: 'mcq',
    question: 'The Rydberg constant for hydrogen (RH) has the value:',
    options: ['109,677 cm^-1', '2.18 × 10^-18 J', '6.626 × 10^-34 J s', 'Both A and B'],
    correctIndex: 3,
    explanation: 'The source gives RH as 109,677 cm^-1 for wavenumbers and 2.18 × 10^-18 J for energy.',
    difficulty: 'medium'
  },
  {
    id: 'soa-53',
    type: 'mcq',
    question: 'Which series of hydrogen spectral lines corresponds to transitions ending at n1 = 1?',
    options: ['Balmer', 'Paschen', 'Lyman', 'Brackett'],
    correctIndex: 2,
    explanation: 'Lyman series: n1 = 1, n2 = 2, 3... (Ultraviolet region).',
    difficulty: 'easy'
  },
  {
    id: 'soa-54',
    type: 'mcq',
    question: 'Transitions in the Paschen series end at:',
    options: ['n=1', 'n=2', 'n=3', 'n=4'],
    correctIndex: 2,
    explanation: 'Paschen series: n1 = 3, n2 = 4, 5... (Infrared region).',
    difficulty: 'easy'
  },
  {
    id: 'soa-55',
    type: 'mcq',
    question: 'The number of emission lines observed when an electron drops from n=6 to n=1 is:',
    options: ['5', '6', '15', '30'],
    correctIndex: 2,
    explanation: 'Lines = n(n-1)/2 = 6(5)/2 = 15.',
    difficulty: 'hard'
  },
  {
    id: 'soa-56',
    type: 'mcq',
    question: 'Bohr’s model for the hydrogen atom postulates that an electron moves in paths of:',
    options: ['Variable radius and energy', 'Fixed radius and energy', 'Spiral motion into nucleus', 'Elliptical paths'],
    correctIndex: 1,
    explanation: 'Electron moves in circular paths called orbits or stationary states with fixed radius/energy.',
    difficulty: 'easy'
  },
  {
    id: 'soa-57',
    type: 'mcq',
    question: 'According to Bohr, an electron can move only in orbits where its angular momentum is:',
    options: ['Proportional to n^2', 'An integral multiple of h/2π', 'Equal to hν', 'Zero'],
    correctIndex: 1,
    explanation: 'Postulate: mevr = nh/2π (where n is an integer).',
    difficulty: 'medium'
  },
  {
    id: 'soa-58',
    type: 'mcq',
    question: 'The Bohr radius (a0) for the first stationary state of hydrogen is:',
    options: ['0.529 pm', '52.9 pm', '5.29 nm', '52.9 nm'],
    correctIndex: 1,
    explanation: 'Radius of the first Bohr orbit is 52.9 pm.',
    difficulty: 'easy'
  },
  {
    id: 'soa-59',
    type: 'mcq',
    question: 'The energy of the n-th stationary state for hydrogen is given by En =:',
    options: ['-RH / n^2', '-RH * n^2', 'RH / n', '-RH / n^4'],
    correctIndex: 0,
    explanation: 'En = -RH (1/n^2), where RH = 2.18 × 10^-18 J.',
    difficulty: 'easy'
  },
  {
    id: 'soa-60',
    type: 'mcq',
    question: 'What does the negative sign in the electronic energy expression for hydrogen signify?',
    options: ['Electron has negative mass', 'Atom is unstable', 'Energy of bound electron is lower than free electron at rest', 'Energy increases as n decreases'],
    correctIndex: 2,
    explanation: 'It means the bound electron is more stable (lower energy) than a free electron at rest (E=0).',
    difficulty: 'medium'
  },
  {
    id: 'soa-61',
    type: 'mcq',
    question: 'Energy for hydrogen-like species (He+, Li2+) is proportional to:',
    options: ['Z / n^2', 'Z^2 / n', 'Z^2 / n^2', 'Z / n'],
    correctIndex: 2,
    explanation: 'En = -2.18 × 10^-18 (Z^2 / n^2) J.',
    difficulty: 'medium'
  },
  {
    id: 'soa-62',
    type: 'mcq',
    question: 'The radius of the n-th orbit for a hydrogen-like ion is proportional to:',
    options: ['n / Z', 'n^2 / Z', 'n^2 / Z^2', 'n / Z^2'],
    correctIndex: 1,
    explanation: 'rn = 52.9 (n^2 / Z) pm.',
    difficulty: 'medium'
  },
  {
    id: 'soa-63',
    type: 'mcq',
    question: 'Calculate the energy of the first orbit of He+ (Z=2).',
    options: ['-2.18 × 10^-18 J', '-4.36 × 10^-18 J', '-8.72 × 10^-18 J', '-1.09 × 10^-18 J'],
    correctIndex: 2,
    explanation: 'E1 = -2.18 × 10^-18 (2^2 / 1^2) = -8.72 × 10^-18 J.',
    difficulty: 'hard'
  },
  {
    id: 'soa-64',
    type: 'mcq',
    question: 'Which of the following is a limitation of Bohr’s model?',
    options: ['Cannot explain stability of H atom', 'Cannot explain splitting of lines in magnetic fields (Zeeman effect)', 'Cannot explain the Lyman series', 'Contradicts the law of constant composition'],
    correctIndex: 1,
    explanation: 'Bohr model fails to explain Zeeman effect, Stark effect, and multi-electron spectra.',
    difficulty: 'medium'
  },
  {
    id: 'soa-65',
    type: 'mcq',
    question: 'Bohr’s model was unable to explain the ability of atoms to form:',
    options: ['Isotopes', 'Ions', 'Molecules by chemical bonds', 'Excited states'],
    correctIndex: 2,
    explanation: 'One serious limitation: It could not explain molecules forming via chemical bonds.',
    difficulty: 'easy'
  },
  {
    id: 'soa-66',
    type: 'mcq',
    question: 'Who proposed that matter, like radiation, should exhibit dual behavior (particle and wave)?',
    options: ['Heisenberg', 'de Broglie', 'Schrödinger', 'Einstein'],
    correctIndex: 1,
    explanation: 'Louis de Broglie proposed the dual behavior of matter in 1924.',
    difficulty: 'easy'
  },
  {
    id: 'soa-67',
    type: 'mcq',
    question: 'The de Broglie wavelength (λ) is related to momentum (p) by:',
    options: ['λ = hp', 'λ = h / p', 'p = h / λ', 'Both B and C'],
    correctIndex: 3,
    explanation: 'λ = h/mv = h/p. Thus p = h/λ.',
    difficulty: 'medium'
  },
  {
    id: 'soa-68',
    type: 'mcq',
    question: 'Calculate the wavelength of a 0.1 kg ball moving at 10 m/s.',
    options: ['6.626 × 10^-34 m', '6.626 × 10^-31 m', '6.626 × 10^-35 m', '6.626 × 10^-33 m'],
    correctIndex: 0,
    explanation: 'λ = h/mv = (6.626 × 10^-34) / (0.1 * 10) = 6.626 × 10^-34 m.',
    difficulty: 'medium'
  },
  {
    id: 'soa-69',
    type: 'mcq',
    question: 'The wave character of ordinary macroscopic objects is not detectable because:',
    options: ['They do not move', 'Their wavelengths are extremely short due to large mass', 'They are not charged', 'They do not reflect light'],
    correctIndex: 1,
    explanation: 'Mass is large, so λ (h/mv) is too small to detect.',
    difficulty: 'easy'
  },
  {
    id: 'soa-70',
    type: 'mcq',
    question: 'Heisenberg’s Uncertainty Principle states that it is impossible to determine simultaneously the exact:',
    options: ['Mass and charge', 'Position and momentum', 'Energy and time', 'Velocity and mass'],
    correctIndex: 1,
    explanation: 'Uncertainty exists in position (Δx) and momentum (Δp).',
    difficulty: 'easy'
  },
  {
    id: 'soa-71',
    type: 'mcq',
    question: 'The mathematical expression for Heisenberg’s Uncertainty Principle is:',
    options: ['Δx Δp ≥ h / 4π', 'Δx Δp ≤ h / 4π', 'Δx Δp = h / 2π', 'λ = h / Δp'],
    correctIndex: 0,
    explanation: 'Δx Δp ≥ h / 4π.',
    difficulty: 'easy'
  },
  {
    id: 'soa-72',
    type: 'mcq',
    question: 'A consequence of the Uncertainty Principle is that it rules out:',
    options: ['Quantization of energy', 'The existence of nuclei', 'Definite paths or trajectories of electrons', 'Emission spectra'],
    correctIndex: 2,
    explanation: 'Since position and velocity can\'t be known exactly, trajectories (orbits) don\'t exist.',
    difficulty: 'medium'
  },
  {
    id: 'soa-73',
    type: 'mcq',
    question: 'For a milligram-sized object (10^-6 kg), the uncertainty Δv.Δx is approximately:',
    options: ['10^-28 m^2 s^-1', '10^-4 m^2 s^-1', '10^28 m^2 s^-1', '10^-34 m^2 s^-1'],
    correctIndex: 0,
    explanation: 'Δv.Δx ≈ h/4πm = (6.626 × 10^-34) / (4 * 3.14 * 10^-6) ≈ 0.5 × 10^-28.',
    difficulty: 'hard'
  },
  {
    id: 'soa-74',
    type: 'mcq',
    question: 'Calculate the uncertainty in velocity of an electron if uncertainty in its position is 0.1 Å.',
    options: ['5.79 × 10^6 m/s', '5.79 × 10^8 m/s', '1.46 × 10^-33 m/s', '3.0 × 10^8 m/s'],
    correctIndex: 0,
    explanation: 'Δv = h / (4πm Δx). Δv = (6.626e-34) / (4 * 3.14 * 9.11e-31 * 1e-11) ≈ 5.79e6 m/s.',
    difficulty: 'hard'
  },
  {
    id: 'soa-75',
    type: 'mcq',
    question: 'The branch of science taking dual behavior of matter into account is:',
    options: ['Classical mechanics', 'Quantum mechanics', 'Thermodynamics', 'Electrochemistry'],
    correctIndex: 1,
    explanation: 'Quantum mechanics deals with microscopic objects having wave and particle properties.',
    difficulty: 'easy'
  },
  {
    id: 'soa-76',
    type: 'mcq',
    question: 'The fundamental equation of wave motion in quantum mechanics was developed by:',
    options: ['Heisenberg', 'Schrödinger', 'Bohr', 'Dalton'],
    correctIndex: 1,
    explanation: 'Erwin Schrödinger developed the Schrödinger wave equation.',
    difficulty: 'easy'
  },
  {
    id: 'soa-77',
    type: 'mcq',
    question: 'In the Schrödinger equation (H-cap Ψ = EΨ), H-cap is a mathematical operator called:',
    options: ['Laplacian', 'Hamiltonian', 'Gradient', 'Quantizer'],
    correctIndex: 1,
    explanation: 'H-cap is the Hamiltonian operator.',
    difficulty: 'easy'
  },
  {
    id: 'soa-78',
    type: 'mcq',
    question: 'The wave function (Ψ) for an electron in an atom is called:',
    options: ['Atomic orbit', 'Atomic orbital', 'Shell', 'Sub-shell'],
    correctIndex: 1,
    explanation: 'Such wave functions pertaining to one-electron species are called atomic orbitals.',
    difficulty: 'easy'
  },
  {
    id: 'soa-79',
    type: 'mcq',
    question: 'What is the physical significance of |Ψ|^2 at a point?',
    options: ['Energy of electron', 'Velocity of electron', 'Probability density of finding electron', 'Charge on the nucleus'],
    correctIndex: 2,
    explanation: 'The square of the wave function gives the probability density at that point.',
    difficulty: 'medium'
  },
  {
    id: 'soa-80',
    type: 'mcq',
    question: 'Which quantum numbers arise as a natural consequence of solving the Schrödinger equation for hydrogen?',
    options: ['n, l, ml, ms', 'n, l, ms', 'n, l, ml', 'n, ms'],
    correctIndex: 2,
    explanation: 'The first three (n, l, ml) arise from the solution; spin (ms) was added later.',
    difficulty: 'medium'
  },
  {
    id: 'soa-81',
    type: 'mcq',
    question: 'The Principal quantum number (n) determines:',
    options: ['Shape of orbital', 'Orientation of orbital', 'Size and energy of the orbital', 'Spin of electron'],
    correctIndex: 2,
    explanation: '‘n’ determines the size and to a large extent the energy of the orbital.',
    difficulty: 'easy'
  },
  {
    id: 'soa-82',
    type: 'mcq',
    question: 'The total number of orbitals in a shell with principal quantum number ‘n’ is:',
    options: ['n', '2n', 'n^2', '2n^2'],
    correctIndex: 2,
    explanation: 'Number of allowed orbitals in a shell = n^2.',
    difficulty: 'easy'
  },
  {
    id: 'soa-83',
    type: 'mcq',
    question: 'The Azimuthal quantum number (l) defines:',
    options: ['Total number of electrons', 'Three-dimensional shape of the orbital', 'Direction of spin', 'Distance from nucleus'],
    correctIndex: 1,
    explanation: '‘l’ (subsidiary quantum number) defines the orbital shape.',
    difficulty: 'easy'
  },
  {
    id: 'soa-84',
    type: 'mcq',
    question: 'For a given value of ‘n’, what are the possible values of ‘l’?',
    options: ['1 to n', '0 to n', '0 to (n – 1)', '–l to +l'],
    correctIndex: 2,
    explanation: 'l ranges from 0 to (n – 1).',
    difficulty: 'medium'
  },
  {
    id: 'soa-85',
    type: 'mcq',
    question: 'Which sub-shell notation corresponds to l = 2?',
    options: ['s', 'p', 'd', 'f'],
    correctIndex: 2,
    explanation: '0=s, 1=p, 2=d, 3=f.',
    difficulty: 'easy'
  },
  {
    id: 'soa-86',
    type: 'mcq',
    question: 'The Magnetic orbital quantum number (ml) gives information about:',
    options: ['Size of subshell', 'Spatial orientation of the orbital', 'Speed of electron', 'Nuclear charge'],
    correctIndex: 1,
    explanation: 'ml relates to the orientation relative to coordinate axes.',
    difficulty: 'medium'
  },
  {
    id: 'soa-87',
    type: 'mcq',
    question: 'For l = 3, how many values of ml are possible?',
    options: ['3', '5', '7', '9'],
    correctIndex: 2,
    explanation: 'Possible values = (2l + 1) = 2(3) + 1 = 7.',
    difficulty: 'medium'
  },
  {
    id: 'soa-88',
    type: 'mcq',
    question: 'The Spin quantum number (ms) can take values:',
    options: ['0 and 1', '1 and 2', '+1/2 and –1/2', 'Any integer'],
    correctIndex: 2,
    explanation: 'These represent the two spin states of the electron.',
    difficulty: 'easy'
  },
  {
    id: 'soa-89',
    type: 'mcq',
    question: 'Total number of orbitals associated with n = 3 is:',
    options: ['3', '6', '9', '18'],
    correctIndex: 2,
    explanation: 'n^2 = 3^2 = 9.',
    difficulty: 'easy'
  },
  {
    id: 'soa-90',
    type: 'mcq',
    question: 'Which orbital is described by n = 4, l = 3?',
    options: ['4d', '4p', '4f', '4s'],
    correctIndex: 2,
    explanation: 'n=4, l=3 corresponds to 4f.',
    difficulty: 'easy'
  },
  {
    id: 'soa-91',
    type: 'mcq',
    question: 'The region where the probability density reduces to zero is called:',
    options: ['Orbital', 'Nucleus', 'Node', 'Lobe'],
    correctIndex: 2,
    explanation: 'Nodes or nodal surfaces are where |Ψ|^2 is zero.',
    difficulty: 'easy'
  },
  {
    id: 'soa-92',
    type: 'mcq',
    question: 'How many radial nodes does a 2s orbital have?',
    options: ['0', '1', '2', '3'],
    correctIndex: 1,
    explanation: 'Radial nodes = n – l – 1. For 2s: 2 – 0 – 1 = 1.',
    difficulty: 'medium'
  },
  {
    id: 'soa-93',
    type: 'mcq',
    question: 'The shape of an s-orbital is:',
    options: ['Dumb-bell', 'Spherical', 'Four-lobed', 'Cylindrical'],
    correctIndex: 1,
    explanation: 'All s-orbitals are spherically symmetric.',
    difficulty: 'easy'
  },
  {
    id: 'soa-94',
    type: 'mcq',
    question: 'The number of angular nodes for a d-orbital is:',
    options: ['1', '2', '3', '0'],
    correctIndex: 1,
    explanation: 'Angular nodes = l. For d, l=2.',
    difficulty: 'medium'
  },
  {
    id: 'soa-95',
    type: 'mcq',
    question: 'Total number of nodes for a 3p orbital is:',
    options: ['1', '2', '3', '0'],
    correctIndex: 1,
    explanation: 'Total nodes = n – 1 = 3 – 1 = 2.',
    difficulty: 'medium'
  },
  {
    id: 'soa-96',
    type: 'mcq',
    question: 'Which p-orbital has a nodal plane in the xy-plane?',
    options: ['px', 'py', 'pz', 'All of them'],
    correctIndex: 2,
    explanation: 'For pz, the xy-plane is the nodal plane.',
    difficulty: 'medium'
  },
  {
    id: 'soa-97',
    type: 'mcq',
    question: 'Degenerate orbitals are those that have:',
    options: ['Same shape', 'Same orientation', 'Same energy', 'Same number of electrons'],
    correctIndex: 2,
    explanation: 'Orbitals having the same energy are called degenerate.',
    difficulty: 'easy'
  },
  {
    id: 'soa-98',
    type: 'mcq',
    question: 'In a multi-electron atom, the energy of an orbital depends on:',
    options: ['Only n', 'Only l', 'Both n and l', 'Only ml'],
    correctIndex: 2,
    explanation: 'Unlike H, in multi-electron atoms energy depends on both n and l due to electron-electron repulsion.',
    difficulty: 'medium'
  },
  {
    id: 'soa-99',
    type: 'mcq',
    question: 'Which subshell has the lowest energy according to the (n+l) rule?',
    options: ['3d', '4s', '4p', '3p'],
    correctIndex: 3,
    explanation: '3p: 3+1=4; 3d: 3+2=5; 4s: 4+0=4 (lower n wins); 4p: 4+1=5. Comparing 3p and 4s, both are 4, but 3p has lower n.',
    difficulty: 'hard'
  },
  {
    id: 'soa-100',
    type: 'mcq',
    question: 'The shielding effect of subshells follows the order:',
    options: ['s > p > d > f', 'f > d > p > s', 's > d > p > f', 'p > s > d > f'],
    correctIndex: 0,
    explanation: 's-orbital shields most effectively due to its spherical shape and proximity to nucleus.',
    difficulty: 'medium'
  },
  {
    id: 'soa-101',
    type: 'mcq',
    question: 'Aufbau Principle states that orbitals are filled in order of their:',
    options: ['Increasing size', 'Increasing energies', 'Increasing atomic number', 'Decreasing stability'],
    correctIndex: 1,
    explanation: 'Orbitals are filled in order of their increasing energies.',
    difficulty: 'easy'
  },
  {
    id: 'soa-102',
    type: 'mcq',
    question: 'Pauli Exclusion Principle states that an orbital can hold a maximum of:',
    options: ['One electron', 'Two electrons with opposite spin', 'Six electrons', 'Eight electrons'],
    correctIndex: 1,
    explanation: 'Only two electrons may exist in the same orbital and they must have opposite spin.',
    difficulty: 'easy'
  },
  {
    id: 'soa-103',
    type: 'mcq',
    question: 'Hund’s Rule deals with the filling of electrons in:',
    options: ['Different shells', 'Degenerate orbitals', 'The nucleus', 'Unstable isotopes'],
    correctIndex: 1,
    explanation: 'It deals with the filling of electrons into orbitals belonging to the same subshell.',
    difficulty: 'medium'
  },
  {
    id: 'soa-104',
    type: 'mcq',
    question: 'Pairing of electrons in p-orbitals starts with the entry of which electron?',
    options: ['2nd', '3rd', '4th', '6th'],
    correctIndex: 2,
    explanation: 'Each p-orbital must be singly occupied (3 electrons) before pairing begins with the 4th.',
    difficulty: 'medium'
  },
  {
    id: 'soa-105',
    type: 'mcq',
    question: 'The electronic configuration of Chromium (Z=24) is:',
    options: ['[Ar] 3d4 4s2', '[Ar] 3d5 4s1', '[Ar] 3d6', '[Ne] 3s2 3p6 3d4 4s2'],
    correctIndex: 1,
    explanation: 'Cr is an exception; it adopts [Ar] 3d5 4s1 for extra stability of half-filled subshell.',
    difficulty: 'hard'
  },
  {
    id: 'soa-106',
    type: 'mcq',
    question: 'The extra stability of half-filled and completely filled subshells is due to:',
    options: ['Asymmetrical distribution', 'Larger exchange energy', 'Greater shielding', 'Higher coulombic repulsion'],
    correctIndex: 1,
    explanation: 'Stability is due to symmetrical distribution and larger exchange energy.',
    difficulty: 'medium'
  },
  {
    id: 'soa-107',
    type: 'mcq',
    question: 'Which configuration represents a noble gas (Neon)?',
    options: ['1s2 2s2 2p4', '1s2 2s2 2p6', '1s2 2s2 2p6 3s1', '1s2 2s2'],
    correctIndex: 1,
    explanation: 'Neon has 10 electrons: 1s2 2s2 2p6.',
    difficulty: 'easy'
  },
  {
    id: 'soa-108',
    type: 'mcq',
    question: 'The maximum number of electrons in a shell with principal quantum number ‘n’ is:',
    options: ['n^2', '2n^2', '2l + 1', 'n'],
    correctIndex: 1,
    explanation: 'As per Pauli\'s principle application, capacity = 2n^2.',
    difficulty: 'easy'
  },
  {
    id: 'soa-109',
    type: 'mcq',
    question: 'In which orbital will the valence electron of potassium (Z=19) reside?',
    options: ['3p', '3d', '4s', '4p'],
    correctIndex: 2,
    explanation: 'According to the (n+l) rule, 4s (4+0=4) is lower than 3d (3+2=5).',
    difficulty: 'medium'
  },
  {
    id: 'soa-110',
    type: 'mcq',
    question: 'Which of the following is ISOELECTRONIC with Argon (Ar)?',
    options: ['Na+', 'Mg2+', 'Ca2+', 'F-'],
    correctIndex: 2,
    explanation: 'Ar has 18 electrons. Ca2+ has 20 - 2 = 18 electrons.',
    difficulty: 'medium'
  },
  {
    id: 'soa-111',
    type: 'mcq',
    question: 'The electronic configuration of Copper (Z=29) is:',
    options: ['[Ar] 3d9 4s2', '[Ar] 3d10 4s1', '[Ar] 3d8 4s2', '[Ar] 4s2 4p6'],
    correctIndex: 1,
    explanation: 'Cu adopts [Ar] 3d10 4s1 for completely filled d-subshell stability.',
    difficulty: 'hard'
  },
  {
    id: 'soa-112',
    type: 'mcq',
    question: 'What is the lowest value of ‘n’ that allows ‘g’ orbitals to exist?',
    options: ['4', '5', '6', '7'],
    correctIndex: 1,
    explanation: 'For g, l=4. Since l must be <= n-1, n must be at least 5.',
    difficulty: 'hard'
  },
  {
    id: 'soa-113',
    type: 'mcq',
    question: 'Which set of quantum numbers is NOT possible?',
    options: ['n=2, l=1, ml=0', 'n=3, l=2, ml=-3', 'n=1, l=0, ml=0', 'n=2, l=0, ml=0'],
    correctIndex: 1,
    explanation: 'ml must be between -l and +l. For l=2, ml cannot be -3.',
    difficulty: 'hard'
  },
  {
    id: 'soa-114',
    type: 'mcq',
    question: 'Calculate the total number of electrons in an atom that can have quantum numbers n=4, ms= -1/2.',
    options: ['16', '32', '8', '4'],
    correctIndex: 0,
    explanation: 'Total orbitals in n=4 is n^2 = 16. Each orbital has one electron with ms = -1/2.',
    difficulty: 'hard'
  },
  {
    id: 'soa-115',
    type: 'mcq',
    question: 'The 4p electrons in a Bromine atom experience the lowest effective nuclear charge because:',
    options: ['They are closest to nucleus', 'They are most shielded by inner electrons', 'They have the highest mass', 'They are in a spherical orbital'],
    correctIndex: 1,
    explanation: 'Highest shell (n=4) electrons are most shielded by core electrons (n=1, 2, 3).',
    difficulty: 'medium'
  }
];

export default questions;
