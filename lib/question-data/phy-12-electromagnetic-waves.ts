import type { Question } from "@/lib/questionBank";
 // NEET Physics Question Bank
// Chapter: Electromagnetic Waves
// 80 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'electromagnetic-waves-1',
    type: 'mcq',
    question: "Maxwell's key theoretical contribution to electromagnetism was the recognition that a changing electric field, even in the absence of any actual flow of charge, could give rise to a:",
    options: [
      'Gravitational field',
      'Magnetic field',
      'Purely electrostatic field, with no magnetic effect at all',
      'Nuclear force'
    ],
    correctIndex: 1,
    explanation: "Maxwell proposed that a time-varying electric field itself acts as a source of magnetic field, a crucial symmetry with Faraday's law.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-2',
    type: 'mcq',
    question: "The additional current-like term introduced by Maxwell into Ampere's law, arising from a changing electric field (rather than actual charge flow), is called the:",
    options: [
      'Conduction current',
      'Displacement current',
      'Induced current, a term with a different specific meaning',
      'Eddy current'
    ],
    correctIndex: 1,
    explanation: "Maxwell termed this new source term the 'displacement current', arising from changing electric displacement (flux).",
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-3',
    type: 'mcq',
    question: 'The displacement current (Id) is mathematically defined in terms of the rate of change of electric flux (ΦE) through a surface by the formula:',
    options: [
      'Id = ε0 (dΦE/dt)',
      'Id = ε0 × ΦE, without any time derivative',
      'Id = ΦE/ε0',
      'Id = ε0/(dΦE/dt)'
    ],
    correctIndex: 0,
    explanation: "This is the standard formula for displacement current, directly analogous in form to Faraday's law.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-4',
    type: 'mcq',
    question: "Maxwell introduced the concept of displacement current primarily to resolve an inconsistency in the original form of Ampere's circuital law, specifically in situations involving a:",
    options: [
      'Steady, unchanging current in a simple, continuous wire loop',
      'Charging or discharging capacitor, where conduction current is interrupted between the plates',
      'Permanent magnet with no current involved at all',
      'Purely gravitational system, with no electric or magnetic fields involved'
    ],
    correctIndex: 1,
    explanation: 'The classic motivating example is a charging capacitor, where displacement current explains the observed magnetic field despite interrupted conduction current.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-5',
    type: 'mcq',
    question: "Between the plates of a charging capacitor, where no actual conduction current flows (since the plates are separated by a gap/dielectric), Maxwell proposed that the changing electric field between the plates gives rise to an effective:",
    options: [
      "Displacement current, which seamlessly continues the circuit's current in Ampere's law",
      'Complete absence of any current-related effect whatsoever',
      'Gravitational field, replacing any electric or magnetic effect',
      "Permanent, unchanging magnetic field, unrelated to the capacitor's charging process"
    ],
    correctIndex: 0,
    explanation: "The displacement current between the plates exactly compensates for the interrupted conduction current, keeping Ampere's law consistent.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-6',
    type: 'mcq',
    question: "In the generalised (Maxwell-corrected) form of Ampere's circuital law, the total current enclosed by an Amperian loop is taken to be the sum of the conduction current and the:",
    options: [
      'Displacement current',
      'Induced EMF, a term with a different specific meaning',
      'Magnetic flux, a term with a different specific meaning',
      'Electric potential difference'
    ],
    correctIndex: 0,
    explanation: "Maxwell's modified Ampere's law includes both conduction current and displacement current as sources of magnetic field.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-7',
    type: 'mcq',
    question: 'The concept of displacement current ensures that, in a circuit containing a capacitor, the total current (conduction plus displacement) remains continuous across any cross-section, which is consistent with the general physical principle of conservation of:',
    options: [
      'Mass',
      'Electric charge',
      'Angular momentum',
      'Magnetic flux, a distinct principle'
    ],
    correctIndex: 1,
    explanation: 'Including displacement current keeps total current continuous, consistent with charge conservation even for a charging capacitor.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-8',
    type: 'mcq',
    question: "Maxwell's four fundamental equations of electromagnetism collectively unify the previously separate phenomena of electricity, magnetism, and:",
    options: [
      'Thermodynamics',
      'Optics (light)',
      'Nuclear physics',
      'Quantum mechanics, in its full modern form'
    ],
    correctIndex: 1,
    explanation: "Maxwell's equations showed that light is an electromagnetic phenomenon, unifying optics into the same framework as electricity and magnetism.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-9',
    type: 'mcq',
    question: "One of Maxwell's four equations, essentially a generalised version of Gauss's law for electricity, relates the electric flux through a closed surface to the enclosed:",
    options: [
      'Electric charge',
      'Magnetic pole strength',
      'Displacement current alone',
      'Total mass'
    ],
    correctIndex: 0,
    explanation: "This is Gauss's law for electricity, relating electric flux through a closed surface to the total enclosed charge.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-10',
    type: 'mcq',
    question: "Another of Maxwell's equations, Gauss's law for magnetism, states that the net magnetic flux through any closed surface is always:",
    options: [
      'Maximum',
      'Zero',
      'Equal to the enclosed electric charge',
      "Dependent on the surface's specific shape"
    ],
    correctIndex: 1,
    explanation: 'Gauss\'s law for magnetism states the net magnetic flux through any closed surface is always zero, reflecting the non-existence of monopoles.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-11',
    type: 'mcq',
    question: "A third of Maxwell's equations, essentially Faraday's law of electromagnetic induction, describes how a changing magnetic field can give rise to a(n):",
    options: [
      'Electric field',
      'Gravitational field',
      'Nuclear force',
      'Purely magnetic field, with no electric component at all'
    ],
    correctIndex: 0,
    explanation: "Faraday's law describes how a time-varying magnetic field induces an electric field.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-12',
    type: 'mcq',
    question: "The fourth of Maxwell's equations, the Maxwell-Ampere law, describes how a changing electric field (via displacement current), together with any actual conduction current, gives rise to a(n):",
    options: [
      'Gravitational field',
      'Magnetic field',
      'Purely electric field, with no magnetic component at all',
      'Nuclear force'
    ],
    correctIndex: 1,
    explanation: "The Maxwell-corrected Ampere's law describes how conduction and displacement currents together act as sources of magnetic field.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-13',
    type: 'mcq',
    question: "Maxwell's equations collectively predict the existence of self-sustaining, propagating electromagnetic waves, in which a changing electric field generates a changing magnetic field, which in turn:",
    options: [
      'Cancels out the original changing electric field completely',
      'Regenerates/sustains a changing electric field, allowing the wave to propagate indefinitely through space',
      'Converts entirely into a static, non-propagating field',
      'Has no further effect of any kind'
    ],
    correctIndex: 1,
    explanation: 'A changing E field generates a changing B field, which regenerates a changing E field, allowing self-propagation through space.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-14',
    type: 'mcq',
    question: "Maxwell's theoretical prediction of self-propagating electromagnetic waves was later experimentally confirmed by Heinrich Hertz, who successfully generated and detected these waves in the laboratory using:",
    options: [
      'Oscillating electrical circuits (spark-gap generators) and detectors',
      'Simple permanent magnets alone, with no electrical circuits',
      'Purely gravitational apparatus',
      'Chemical reactions alone, with no electrical component'
    ],
    correctIndex: 0,
    explanation: "Hertz used oscillating electrical circuits (spark-gap apparatus) to generate and detect electromagnetic waves, confirming Maxwell's prediction.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-15',
    type: 'mcq',
    question: 'Electromagnetic waves consist of mutually perpendicular, oscillating:',
    options: [
      'Electric and magnetic fields',
      'Gravitational and electric fields',
      'Sound and light waves, combined into a single wave',
      'Purely mechanical displacement fields, with no electric or magnetic component'
    ],
    correctIndex: 0,
    explanation: 'An electromagnetic wave is fundamentally composed of oscillating electric and magnetic fields, mutually perpendicular to each other.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-16',
    type: 'mcq',
    question: 'In an electromagnetic wave, the oscillating electric field (E) and magnetic field (B) are oriented:',
    options: [
      'Parallel to each other, and both parallel to the direction of wave propagation',
      'Perpendicular to each other, and both perpendicular to the direction of wave propagation',
      'Parallel to each other, but perpendicular to the direction of propagation',
      'Perpendicular to each other, but both parallel to the direction of propagation'
    ],
    correctIndex: 1,
    explanation: 'In an EM wave, E and B oscillate perpendicular to each other, and both are perpendicular to the direction of propagation.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-17',
    type: 'mcq',
    question: "Since the oscillating electric and magnetic fields in an electromagnetic wave are perpendicular to the wave's direction of propagation, electromagnetic waves are classified as:",
    options: [
      'Longitudinal waves',
      'Transverse waves',
      'Standing waves exclusively, never travelling waves',
      'Purely mechanical waves'
    ],
    correctIndex: 1,
    explanation: 'Since E and B oscillations are perpendicular to the direction of propagation, EM waves are by definition transverse waves.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-18',
    type: 'mcq',
    question: 'In an electromagnetic wave, the oscillating electric field and magnetic field are found to oscillate:',
    options: [
      'Exactly 90° out of phase with each other',
      'Exactly 180° out of phase with each other',
      'In phase with each other, reaching their maximum and minimum values simultaneously',
      'With no fixed phase relationship at all'
    ],
    correctIndex: 2,
    explanation: 'In an electromagnetic wave, E and B oscillate in phase, simultaneously reaching their maximum and minimum values.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-19',
    type: 'mcq',
    question: 'Unlike mechanical waves (such as sound), which require a material medium to propagate, electromagnetic waves are unique in that they:',
    options: [
      'Cannot travel through any medium whatsoever, including vacuum',
      'Can propagate through a vacuum, requiring no material medium at all',
      'Require an extremely dense medium to propagate, denser than typical solids',
      'Travel only through electrically conducting materials'
    ],
    correctIndex: 1,
    explanation: 'Since EM waves are self-sustaining oscillating fields (not mechanical oscillations), they can travel through vacuum.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-20',
    type: 'mcq',
    question: "The speed of electromagnetic waves in a vacuum, according to Maxwell's theory, is given by the formula:",
    options: [
      'c = μ0ε0',
      'c = 1/√(μ0ε0)',
      'c = √(μ0ε0)',
      'c = μ0/ε0'
    ],
    correctIndex: 1,
    explanation: 'This is the theoretical formula, derived from Maxwell\'s equations, for the speed of EM waves in vacuum, c = 1/√(μ0ε0).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-21',
    type: 'mcq',
    question: "The numerical value of the speed of electromagnetic waves in a vacuum, calculated from Maxwell's formula (and confirmed experimentally), is approximately:",
    options: [
      '3 × 10⁵ m/s',
      '3 × 10⁸ m/s',
      '3 × 10¹¹ m/s',
      '3 × 10² m/s'
    ],
    correctIndex: 1,
    explanation: 'The speed of EM waves in vacuum works out to approximately 3 × 10⁸ m/s, matching the measured speed of light.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-22',
    type: 'mcq',
    question: "Maxwell's calculated theoretical value for the speed of electromagnetic waves matched closely with the previously, independently measured speed of light, leading Maxwell to conclude that:",
    options: [
      'Light and electromagnetic waves are completely unrelated phenomena, and the numerical match was purely coincidental',
      'Light itself is a form of electromagnetic wave',
      'The speed of light must be incorrect, and needed to be re-measured entirely',
      'Electromagnetic waves do not actually exist'
    ],
    correctIndex: 1,
    explanation: "This close numerical match led Maxwell to conclude that visible light itself is simply one particular form of electromagnetic wave.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-23',
    type: 'mcq',
    question: 'In an electromagnetic wave, the ratio of the peak (or instantaneous) electric field magnitude to the peak (or instantaneous) magnetic field magnitude is equal to the:',
    options: [
      'Wavelength of the wave',
      'Frequency of the wave',
      'Speed of light, c',
      'Square of the speed of light, c²'
    ],
    correctIndex: 2,
    explanation: 'In an electromagnetic wave, E0/B0 = c, connecting the relative magnitudes of the electric and magnetic field components.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-24',
    type: 'mcq',
    question: 'Electromagnetic waves carry energy as they propagate through space, with this energy being associated with:',
    options: [
      'The oscillating electric field alone, with no contribution from the magnetic field',
      'The oscillating magnetic field alone, with no contribution from the electric field',
      'Both the oscillating electric field and the oscillating magnetic field, in equal measure',
      'Neither the electric nor magnetic field; energy arises from an entirely separate source'
    ],
    correctIndex: 2,
    explanation: 'The energy carried by an electromagnetic wave is distributed equally between its E and B field components.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-25',
    type: 'mcq',
    question: 'Since electromagnetic waves carry energy as they propagate, and also carry momentum, they can exert a small but measurable:',
    options: [
      'Gravitational pull on distant objects',
      'Pressure (radiation pressure) on any surface they strike',
      'Chemical reaction, unrelated to any physical force',
      'Permanent magnetic field on the object they strike'
    ],
    correctIndex: 1,
    explanation: 'Because EM waves carry momentum, they can exert a small radiation pressure on any surface they strike.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-26',
    type: 'mcq',
    question: 'Electromagnetic waves are fundamentally generated by the acceleration of:',
    options: [
      'Neutral, uncharged particles',
      'Electric charges',
      'Purely gravitational masses, with no charge involved',
      'Magnetic monopoles, which do not actually exist'
    ],
    correctIndex: 1,
    explanation: 'EM waves are produced whenever electric charges undergo acceleration; a charge at constant velocity does not radiate.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-27',
    type: 'mcq',
    question: 'A charge moving with constant, unchanging velocity (i.e. zero acceleration) does not, by itself, produce electromagnetic radiation; only a charge undergoing:',
    options: [
      'Uniform, straight-line motion at any speed radiates waves',
      'Acceleration (a change in speed and/or direction) produces electromagnetic waves',
      'No motion whatsoever can ever produce electromagnetic waves',
      'Motion exclusively in a perfect vacuum can produce electromagnetic waves'
    ],
    correctIndex: 1,
    explanation: 'Generation of EM waves specifically requires accelerating charges; constant velocity motion does not radiate.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-28',
    type: 'mcq',
    question: 'An oscillating electric charge, moving back and forth periodically (as in an antenna), is a classic practical example of an accelerating charge that:',
    options: [
      'Produces no electromagnetic radiation whatsoever',
      'Continuously radiates electromagnetic waves at the frequency of its oscillation',
      'Only radiates waves during the brief instants when it momentarily stops moving',
      'Radiates only gravitational waves, not electromagnetic waves'
    ],
    correctIndex: 1,
    explanation: 'An oscillating charge is constantly accelerating, radiating electromagnetic waves at its oscillation frequency — the basis of antennas.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-29',
    type: 'mcq',
    question: 'The direction of propagation of an electromagnetic wave, relative to its oscillating electric field (E) and magnetic field (B) vectors, is given by the direction of the vector:',
    options: [
      'E + B, a simple vector sum',
      'E × B (the cross product of E and B)',
      'E − B, a simple vector difference',
      'E/B, a scalar ratio with no directional meaning'
    ],
    correctIndex: 1,
    explanation: 'The propagation direction of an EM wave is given by the cross product E × B.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-waves-30',
    type: 'mcq',
    question: 'Electromagnetic waves, unlike some other types of waves, are found experimentally to exhibit the phenomenon of polarisation, which is possible specifically because electromagnetic waves are:',
    options: [
      'Longitudinal waves',
      'Transverse waves',
      'Purely mechanical waves, with no electric or magnetic character',
      'Waves that cannot travel through a vacuum'
    ],
    correctIndex: 1,
    explanation: 'Polarisation is a phenomenon exhibited specifically by transverse waves like electromagnetic waves, not by longitudinal waves.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-31',
    type: 'mcq',
    question: 'The complete range of electromagnetic waves, arranged systematically according to their frequency (or, equivalently, their wavelength), is called the:',
    options: [
      'Visible light spectrum, a narrower term referring only to visible wavelengths',
      'Electromagnetic spectrum',
      'Sound spectrum, an entirely unrelated concept',
      'Doppler spectrum, an entirely unrelated concept'
    ],
    correctIndex: 1,
    explanation: 'The electromagnetic spectrum spans from radio waves to gamma rays, organised by frequency/wavelength.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-32',
    type: 'mcq',
    question: 'Across the electromagnetic spectrum, as the frequency of electromagnetic radiation increases, the corresponding wavelength:',
    options: [
      'Also increases proportionally',
      'Decreases',
      'Remains exactly unchanged, regardless of frequency',
      'Becomes completely unrelated to frequency'
    ],
    correctIndex: 1,
    explanation: 'Since v = fλ and all EM waves share the same speed c in vacuum, frequency and wavelength are inversely related.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-33',
    type: 'mcq',
    question: 'Arranged in order of increasing frequency (and correspondingly decreasing wavelength), the electromagnetic spectrum begins with radio waves and microwaves, and ends with:',
    options: [
      'Visible light, as the highest-frequency form of electromagnetic radiation',
      'Ultraviolet radiation, as the highest-frequency form of electromagnetic radiation',
      'X-rays, as the highest-frequency form of electromagnetic radiation',
      'Gamma rays, the highest-frequency (and highest-energy) form of electromagnetic radiation'
    ],
    correctIndex: 3,
    explanation: 'The spectrum runs radio → microwave → infrared → visible → ultraviolet → X-ray → gamma ray, in increasing frequency order.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-34',
    type: 'mcq',
    question: 'The energy carried by individual photons of electromagnetic radiation, related to frequency by E = hf (where h is Planck\'s constant), means that higher-frequency electromagnetic radiation (such as gamma rays) carries photons of:',
    options: [
      'Lower energy than lower-frequency radiation',
      'Higher energy than lower-frequency radiation',
      'Exactly the same energy as all other forms of electromagnetic radiation',
      'No definable energy at all'
    ],
    correctIndex: 1,
    explanation: 'Since photon energy E = hf is directly proportional to frequency, higher-frequency radiation carries higher-energy photons.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-35',
    type: 'mcq',
    question: 'Visible light, the narrow band of the electromagnetic spectrum detectable by the human eye, occupies wavelengths approximately in the range of:',
    options: [
      '400 nm to 700 nm',
      '4 nm to 7 nm',
      '400 m to 700 m',
      '4000 nm to 7000 nm'
    ],
    correctIndex: 0,
    explanation: 'Visible light occupies approximately 400 nm (violet) to 700 nm (red) within the much broader electromagnetic spectrum.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-36',
    type: 'mcq',
    question: 'The vast majority of the electromagnetic spectrum, outside the narrow visible light range, is:',
    options: [
      'Entirely undetectable by any known instrument, human or artificial',
      'Invisible to the human eye, but detectable using specialised instruments/technologies',
      'Identical to visible light in every observable respect',
      'Purely theoretical, with no experimentally verified regions outside visible light'
    ],
    correctIndex: 1,
    explanation: 'The rest of the electromagnetic spectrum, though invisible to the human eye, is real and detectable using specialised instruments.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-37',
    type: 'mcq',
    question: 'All forms of electromagnetic radiation across the entire spectrum, from radio waves to gamma rays, travel through a vacuum at:',
    options: [
      'Different speeds, depending on their specific frequency',
      'Exactly the same speed, the speed of light, c',
      'Speeds that increase without limit as frequency increases',
      'Speeds that depend entirely on the source producing them'
    ],
    correctIndex: 1,
    explanation: 'Regardless of frequency, all electromagnetic waves travel through vacuum at the same universal speed, c.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-38',
    type: 'mcq',
    question: 'Different regions of the electromagnetic spectrum are conventionally distinguished from one another primarily based on their characteristic methods of:',
    options: [
      'Production and detection, along with their characteristic frequency/wavelength ranges',
      'Colour alone, a criterion applicable only to the visible light region',
      'Taste, a criterion with no physical meaning for electromagnetic radiation',
      'Smell, a criterion with no physical meaning for electromagnetic radiation'
    ],
    correctIndex: 0,
    explanation: 'Named regions of the spectrum are based mainly on characteristic production/detection methods and frequency/wavelength ranges.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-39',
    type: 'mcq',
    question: 'Radio waves, the lowest-frequency (and longest-wavelength) region of the electromagnetic spectrum, are commonly produced by:',
    options: [
      'Accelerating (oscillating) electric charges in a conducting antenna',
      'Nuclear reactions within radioactive materials',
      'Extremely hot bodies at temperatures comparable to the surface of the Sun',
      'Chemical reactions occurring at room temperature'
    ],
    correctIndex: 0,
    explanation: 'Radio waves are generated by accelerating charges (oscillating currents) within a conducting antenna.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-40',
    type: 'mcq',
    question: 'Radio waves are widely used for practical applications such as:',
    options: [
      'Medical X-ray imaging',
      'Radio and television broadcasting/communication',
      'Cancer radiotherapy treatment',
      'Detecting radioactive decay exclusively'
    ],
    correctIndex: 1,
    explanation: 'Radio waves are the standard medium used for radio and television broadcasting and wireless communication.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-41',
    type: 'mcq',
    question: 'Microwaves, occupying a region of the electromagnetic spectrum with shorter wavelength (and higher frequency) than ordinary radio waves, are commonly produced using specialised devices such as:',
    options: [
      'Simple household batteries',
      'Klystrons or magnetrons (specialised vacuum tube oscillators)',
      'Ordinary electrical resistors',
      'Naturally radioactive materials'
    ],
    correctIndex: 1,
    explanation: 'Microwaves are typically generated using specialised devices such as klystrons or magnetrons.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-42',
    type: 'mcq',
    question: 'One familiar, everyday practical application of microwaves is in:',
    options: [
      'Microwave ovens, used for rapid cooking/heating of food',
      'Standard fluorescent lighting',
      'Ordinary AM radio broadcasting',
      'Simple electrical wiring in homes'
    ],
    correctIndex: 0,
    explanation: 'Microwave ovens exploit the ability of microwaves to efficiently heat water molecules within food.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-43',
    type: 'mcq',
    question: 'Microwaves are also widely used in radar (RAdio Detection And Ranging) systems, which work by:',
    options: [
      'Detecting sound waves reflected from distant objects, unrelated to microwaves at all',
      'Transmitting microwave pulses and analysing the reflected signal to determine the distance, speed, or position of distant objects',
      'Directly measuring the temperature of distant objects with no reflection involved',
      'Measuring the gravitational field of distant objects'
    ],
    correctIndex: 1,
    explanation: "Radar transmits microwave pulses toward a target and analyses the reflected signal to determine the target's properties.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-44',
    type: 'mcq',
    question: 'Compared to ordinary radio waves, microwaves have a relatively shorter wavelength, which makes them particularly suitable for applications requiring:',
    options: [
      'Extremely long-distance communication with minimal directionality',
      'A narrow, focused beam of radiation, useful for radar and point-to-point communication links',
      'Absolutely no directional focusing capability at all',
      'Detection of nuclear radioactivity exclusively'
    ],
    correctIndex: 1,
    explanation: 'Because of their shorter wavelength, microwaves can be focused into narrow, directional beams, suitable for radar and directional links.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-45',
    type: 'mcq',
    question: 'Microwave communication is also commonly used for long-distance telephone and data communication, often relayed via a network of:',
    options: [
      'Underground copper wires exclusively, with no wireless component',
      'Communication satellites and/or ground-based relay towers',
      'Simple household appliances, unrelated to any communication network',
      'Purely mechanical signalling devices, with no electromagnetic component'
    ],
    correctIndex: 1,
    explanation: 'Microwave links, relayed via satellites and/or ground towers, form a significant part of modern long-distance communication infrastructure.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-46',
    type: 'mcq',
    question: 'Radio waves are further subdivided into various bands (e.g. AM, FM, short wave), each characterised by a different range of:',
    options: [
      'Colour, a criterion not applicable to radio waves',
      'Frequency (and correspondingly, wavelength)',
      "Sound intensity, unrelated to the wave's electromagnetic properties",
      'Electric charge, a term not applicable in this context'
    ],
    correctIndex: 1,
    explanation: 'Radio wave bands (AM, FM, short wave, etc.) are distinguished by their specific frequency ranges.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-47',
    type: 'mcq',
    question: "Because radio waves (and microwaves) can penetrate the Earth's atmosphere relatively well, they are the primary wavelengths used for:",
    options: [
      "Ground-based astronomy, observing the universe from Earth's surface",
      'Only space-based astronomy, since no radio/microwave observations are possible from the ground',
      'No astronomical observations of any kind',
      'Only observing objects within our own solar system'
    ],
    correctIndex: 0,
    explanation: "Since radio waves and microwaves pass through Earth's atmosphere relatively unimpeded, ground-based radio telescopes can be used.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-48',
    type: 'mcq',
    question: 'Very long-wavelength radio waves are sometimes used for applications such as submarine communication, mainly because these long wavelengths can:',
    options: [
      'Never penetrate water or any conducting medium at all',
      'Penetrate to a limited but useful depth into conducting media such as seawater, unlike many shorter-wavelength signals',
      'Only be detected in a complete vacuum, with no other medium',
      'Instantly destroy any receiving equipment they encounter'
    ],
    correctIndex: 1,
    explanation: 'Very long-wavelength radio waves can penetrate a limited but useful depth into conducting media like seawater.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-waves-49',
    type: 'mcq',
    question: 'Infrared radiation, occupying the region of the electromagnetic spectrum just beyond (longer wavelength than) visible red light, is commonly produced by:',
    options: [
      'Hot bodies and molecules undergoing vibrational/rotational motion',
      'Only extremely cold objects, near absolute zero',
      'Nuclear fission reactions exclusively',
      'Radioactive decay processes exclusively'
    ],
    correctIndex: 0,
    explanation: 'Infrared radiation is commonly emitted by hot bodies and by molecules undergoing vibrational and rotational motion.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-50',
    type: 'mcq',
    question: "Infrared radiation is sometimes informally referred to as 'heat waves' or 'heat radiation', mainly because it is:",
    options: [
      'Strongly absorbed by many materials, producing a noticeable heating effect',
      'Never absorbed by any material whatsoever',
      'Completely unrelated to thermal energy',
      'Only produced by extremely cold objects'
    ],
    correctIndex: 0,
    explanation: "Infrared radiation's association with 'heat' arises because it is readily absorbed by many materials, producing a heating effect.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-51',
    type: 'mcq',
    question: 'A well-known practical application of infrared radiation is in:',
    options: [
      'Remote controls for televisions and other electronic devices',
      'Standard AM radio broadcasting',
      'Producing gamma-ray images for cancer treatment',
      'Generating nuclear power'
    ],
    correctIndex: 0,
    explanation: 'Many household remote controls use infrared LEDs to transmit signals to the corresponding device.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-52',
    type: 'mcq',
    question: 'Infrared imaging/cameras are also used in applications such as night vision devices, since infrared radiation can:',
    options: [
      'Be detected even in low-light or complete darkness, based on the natural thermal emission of objects',
      'Only be detected in very bright, well-lit conditions',
      'Never be detected using any electronic device',
      'Only be produced by extremely cold objects, with no thermal emission involved'
    ],
    correctIndex: 0,
    explanation: 'Since virtually all objects emit infrared as thermal radiation, infrared cameras can image objects even in visual darkness.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-53',
    type: 'mcq',
    question: 'Visible light, the region of the electromagnetic spectrum directly detectable by the human eye, is produced by sources such as:',
    options: [
      'The Sun and other stars, incandescent lamps, and various other hot or excited sources',
      'Only artificial, human-made light sources, with no natural sources at all',
      'Only extremely cold, non-radiating objects',
      'Purely nuclear processes exclusively'
    ],
    correctIndex: 0,
    explanation: 'Visible light is produced by numerous natural and artificial sources, including the Sun, other stars, and lamps.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-54',
    type: 'mcq',
    question: 'Within the visible light range, the colour violet corresponds to the ___ wavelength end of the visible spectrum, while red corresponds to the ___ wavelength end.',
    options: [
      'Shortest; longest',
      'Longest; shortest',
      'Same; same, with no distinction between the two colours',
      'Undefined; undefined'
    ],
    correctIndex: 0,
    explanation: 'Violet light has the shortest wavelength, while red light has the longest wavelength of the visible spectrum.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-55',
    type: 'mcq',
    question: 'Ultraviolet (UV) radiation, occupying the region of the electromagnetic spectrum just beyond (shorter wavelength than) visible violet light, is commonly produced by:',
    options: [
      'Special UV lamps and very hot celestial bodies, such as the Sun',
      'Only extremely cold objects',
      'Nuclear decay processes exclusively',
      'Radio transmitting antennas exclusively'
    ],
    correctIndex: 0,
    explanation: 'Ultraviolet radiation is commonly produced by specialised UV lamps and by very hot astronomical sources such as the Sun.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-56',
    type: 'mcq',
    question: 'Prolonged or excessive exposure to ultraviolet radiation is known to pose health risks to humans, including an increased risk of:',
    options: [
      'Skin cancer and other skin damage',
      'No health risks whatsoever, under any circumstances',
      'Only minor, entirely harmless cosmetic effects',
      'Only beneficial health effects, with no associated risks'
    ],
    correctIndex: 0,
    explanation: 'Excessive UV exposure is a well-established risk factor for skin cancer and other forms of skin damage.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-57',
    type: 'mcq',
    question: "The Earth's atmosphere contains a protective layer that absorbs a significant portion of the harmful ultraviolet radiation arriving from the Sun, known as the:",
    options: [
      'Ozone layer',
      'Ionosphere, a distinct atmospheric layer with a different primary function',
      'Troposphere, the lowest atmospheric layer, not specifically associated with UV absorption',
      "Magnetosphere, an entirely different protective mechanism unrelated to the atmosphere's composition"
    ],
    correctIndex: 0,
    explanation: "The ozone layer, in the stratosphere, absorbs a significant portion of the Sun's harmful UV radiation.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-58',
    type: 'mcq',
    question: 'Concerns regarding depletion of the ozone layer (e.g. historically linked to certain man-made chemicals such as chlorofluorocarbons, or CFCs) are significant because such depletion would result in:',
    options: [
      "Increased levels of harmful UV radiation reaching the Earth's surface",
      'A complete and total blockage of all sunlight reaching Earth',
      "No meaningful change in the UV radiation reaching Earth's surface",
      "An immediate and complete collapse of Earth's atmosphere"
    ],
    correctIndex: 0,
    explanation: "A thinner ozone layer allows more harmful UV radiation to reach the Earth's surface, increasing associated risks.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-59',
    type: 'mcq',
    question: 'Beyond its harmful effects, ultraviolet radiation also has several beneficial practical applications, including its use in:',
    options: [
      'Sterilisation of surgical instruments and water purification, by killing bacteria and other microorganisms',
      'Producing purely decorative visible light effects, with no other application',
      'Only causing harm, with absolutely no beneficial applications whatsoever',
      'Generating nuclear power exclusively'
    ],
    correctIndex: 0,
    explanation: "UV radiation's ability to kill microorganisms is exploited beneficially in sterilisation and water purification.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-60',
    type: 'mcq',
    question: 'Ultraviolet radiation is also used in certain types of welding equipment (as an unintended byproduct of the welding arc), which is why welders must wear protective gear specifically to protect their eyes and skin from:',
    options: [
      'Excessive exposure to gamma radiation, unrelated to welding',
      'Excessive exposure to the UV radiation produced during the welding process',
      'Excessive exposure to radio waves, unrelated to welding',
      'Excessive exposure to purely visible light, with no UV component involved'
    ],
    correctIndex: 1,
    explanation: 'The intense arc during welding emits significant UV radiation, necessitating protective gear to prevent UV-related damage.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-61',
    type: 'mcq',
    question: 'The human eye is not sensitive to ultraviolet radiation, meaning that, unlike visible light, UV radiation:',
    options: [
      'Can be directly seen and perceived as a distinct colour by the unaided human eye',
      'Cannot be directly perceived/seen by the unaided human eye, despite still being a real, physically detectable form of radiation',
      'Does not actually exist as a real physical phenomenon',
      'Is identical in every respect to ordinary visible violet light'
    ],
    correctIndex: 1,
    explanation: 'Although UV radiation is real and detectable, the human eye is not sensitive to it, so it cannot be directly seen.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-62',
    type: 'mcq',
    question: 'Comparing infrared, visible light, and ultraviolet radiation in order of increasing frequency (and decreasing wavelength), the correct order is:',
    options: [
      'Ultraviolet, then visible light, then infrared',
      'Infrared, then visible light, then ultraviolet',
      'Visible light, then infrared, then ultraviolet',
      'All three occupy exactly the same frequency range, with no distinction'
    ],
    correctIndex: 1,
    explanation: 'In order of increasing frequency: infrared → visible light → ultraviolet.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-63',
    type: 'mcq',
    question: 'X-rays, occupying a high-frequency (and correspondingly short-wavelength) region of the electromagnetic spectrum beyond ultraviolet, are commonly produced by:',
    options: [
      'Bombarding a metal target with high-energy electrons',
      'Simple household electrical wiring',
      'Ordinary chemical combustion reactions',
      'Very cold objects, near absolute zero'
    ],
    correctIndex: 0,
    explanation: 'X-rays are produced in an X-ray tube by accelerating electrons and rapidly decelerating them upon striking a metal target.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-64',
    type: 'mcq',
    question: 'A very well-known and widespread practical application of X-rays is in:',
    options: [
      'Standard household lighting',
      'Medical diagnostic imaging (e.g. imaging bones and detecting fractures)',
      'Standard radio broadcasting',
      'Ordinary microwave cooking'
    ],
    correctIndex: 1,
    explanation: 'X-rays are extensively used in medicine for diagnostic imaging, producing useful contrast between soft tissue and bone.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-65',
    type: 'mcq',
    question: 'X-rays are able to penetrate soft biological tissue relatively easily, but are absorbed more strongly by denser materials such as bone, which is the physical basis for their use in producing:',
    options: [
      'Colour photographs of external body surfaces only',
      'Diagnostic images showing internal skeletal structures with useful contrast',
      'Sound-based images, unrelated to any electromagnetic radiation',
      'Purely thermal images of body temperature'
    ],
    correctIndex: 1,
    explanation: 'Differential absorption of X-rays by soft tissue vs bone allows useful diagnostic imaging of internal skeletal structures.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-66',
    type: 'mcq',
    question: 'Because X-rays carry relatively high photon energy and can potentially damage living tissue/DNA with excessive exposure, their medical and industrial use requires:',
    options: [
      'No safety precautions whatsoever, since X-rays are considered entirely harmless',
      'Careful control of exposure levels and appropriate radiation shielding/protective measures',
      'Complete avoidance of X-rays in all circumstances, with no medical use permitted at all',
      'Exposure levels as high as possible, to maximise any potential beneficial effect'
    ],
    correctIndex: 1,
    explanation: "X-rays' potential to damage tissue/DNA requires careful control of exposure and appropriate shielding/protective measures.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-67',
    type: 'mcq',
    question: 'Gamma rays, occupying the highest-frequency (and shortest-wavelength) region of the electromagnetic spectrum, are typically produced by:',
    options: [
      'Simple household electrical appliances',
      'Nuclear processes, such as radioactive decay of atomic nuclei',
      'Ordinary chemical reactions at room temperature',
      'Standard radio transmitting antennas'
    ],
    correctIndex: 1,
    explanation: 'Gamma rays are characteristically produced by nuclear processes, particularly radioactive decay of unstable nuclei.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-waves-68',
    type: 'mcq',
    question: 'Since gamma rays carry the highest photon energy of any part of the electromagnetic spectrum, they are capable of causing significant biological damage, but this same high energy is also exploited beneficially in:',
    options: [
      'Standard household lighting applications',
      'Certain forms of cancer treatment (radiotherapy), used to selectively destroy cancerous cells',
      'Ordinary radio communication',
      'Simple visible-light photography'
    ],
    correctIndex: 1,
    explanation: 'Gamma rays are used therapeutically in cancer treatments, where controlled, targeted gamma radiation destroys cancerous cells.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-69',
    type: 'mcq',
    question: 'Gamma rays are also used in certain industrial and scientific applications, such as sterilising medical equipment or food products, exploiting their ability to:',
    options: [
      'Have no effect whatsoever on microorganisms',
      'Penetrate materials deeply and kill microorganisms/bacteria through their high-energy radiation',
      'Only affect the external surface of an object, with no penetration at all',
      'Selectively enhance the growth of microorganisms'
    ],
    correctIndex: 1,
    explanation: "Gamma radiation's ability to penetrate materials deeply and kill microorganisms is exploited industrially for sterilisation.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-70',
    type: 'mcq',
    question: 'Given their extremely high photon energy and correspondingly short wavelength, gamma rays require substantially ___ shielding material (compared to lower-energy radiation like visible light) to effectively block or absorb them.',
    options: [
      'Less',
      'More (e.g. thick lead or concrete)',
      'No shielding material of any kind is ever required',
      'Exactly the same amount as required for visible light'
    ],
    correctIndex: 1,
    explanation: 'Because of their very high penetrating power, effective gamma shielding requires substantially more/denser material, like thick lead.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-71',
    type: 'mcq',
    question: 'Comparing X-rays and gamma rays, although their production mechanisms differ (X-rays typically from electron transitions/bombardment, gamma rays typically from nuclear processes), their wavelength ranges within the electromagnetic spectrum:',
    options: [
      'Never overlap at all, under any circumstances',
      'Can overlap to some extent, since the boundary between the two is not sharply, absolutely defined',
      'Are always in exactly the same, identical narrow range',
      'Are completely unrelated to each other in every respect'
    ],
    correctIndex: 1,
    explanation: 'X-rays and gamma rays are conventionally distinguished mainly by origin rather than a strict wavelength cutoff, so their ranges can overlap.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-waves-72',
    type: 'mcq',
    question: 'The overall trend across the electromagnetic spectrum — from radio waves (long wavelength, low energy, easily produced by macroscopic electrical circuits) to gamma rays (short wavelength, high energy, produced by nuclear processes) — illustrates a general correlation between the:',
    options: [
      'Energy scale of the physical process producing the radiation and the resulting photon energy/frequency of that radiation',
      'Colour of the radiation and its production mechanism, applicable across the entire spectrum',
      "Radiation's ability to travel through a vacuum, which varies significantly across the spectrum",
      "Radiation's fundamental speed, which increases progressively from radio waves to gamma rays"
    ],
    correctIndex: 0,
    explanation: 'There is a general correlation between the energy scale of the generating process and the resulting photon energy/frequency.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-73',
    type: 'mcq',
    question: 'The overall electromagnetic spectrum, spanning radio waves through gamma rays, is exploited across numerous distinct fields including:',
    options: [
      'Only entertainment/broadcasting, with no other significant applications',
      'Communication, medicine, industry, astronomy, and scientific research, among many other fields',
      'Only medical applications, with no other significant uses',
      'Only scientific research, with no practical/industrial applications at all'
    ],
    correctIndex: 1,
    explanation: 'The full electromagnetic spectrum finds application across communication, medical, industrial, astronomical, and scientific research fields.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-74',
    type: 'mcq',
    question: 'Astronomers make extensive use of electromagnetic radiation across multiple regions of the spectrum (not just visible light) to study celestial objects, since different regions can reveal different information, such as:',
    options: [
      'Only the visible colour of an object, with no other useful information available',
      'Different physical processes and conditions (e.g. temperature, composition, motion) associated with astronomical objects',
      'Nothing useful whatsoever; only visible light provides any scientific information',
      'Only the exact distance of an object, with no other information available'
    ],
    correctIndex: 1,
    explanation: 'Observing across the full electromagnetic spectrum reveals a much wider range of physical processes and conditions than visible light alone.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-75',
    type: 'mcq',
    question: "Earth's atmosphere is largely transparent to visible light and radio waves, but strongly absorbs (blocks) most incoming X-rays and gamma rays, which is why astronomical observations in these latter wavelength ranges typically require:",
    options: [
      'Ground-based telescopes alone, with no need for any special positioning',
      'Satellite-based or space-based telescopes, positioned above the atmosphere',
      'No telescopes at all, since X-ray and gamma-ray astronomy is considered entirely impossible',
      'Underwater observation stations, specifically to avoid atmospheric interference'
    ],
    correctIndex: 1,
    explanation: "Since Earth's atmosphere strongly absorbs most X-rays and gamma rays, observation requires telescopes positioned in space.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-76',
    type: 'mcq',
    question: "The 'atmospheric window', referring to the specific wavelength ranges of electromagnetic radiation that can pass relatively freely through Earth's atmosphere to reach the surface, notably includes:",
    options: [
      'Only gamma rays, with no other wavelength range included',
      'Visible light and certain radio wave frequencies, among other specific ranges',
      'Only X-rays, with no other wavelength range included',
      'The entire electromagnetic spectrum without exception, with no absorption at any wavelength'
    ],
    correctIndex: 1,
    explanation: "The 'atmospheric window' notably includes visible light and certain radio frequencies, allowing ground-based observation at these wavelengths.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-77',
    type: 'mcq',
    question: "Overall, Maxwell's theoretical unification of electricity, magnetism, and optics, culminating in the prediction and later experimental confirmation of electromagnetic waves, is considered one of the most significant achievements in the history of:",
    options: [
      'Chemistry, an unrelated field of study',
      'Classical physics',
      'Biology, an unrelated field of study',
      'Pure mathematics, with no connection to physical phenomena'
    ],
    correctIndex: 1,
    explanation: "Maxwell's unification of electricity, magnetism, and light stands as one of the towering achievements of classical physics.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-78',
    type: 'mcq',
    question: 'The recognition that visible light is simply one specific, narrow band within the much broader electromagnetic spectrum fundamentally changed scientists\' understanding by showing that light, radio waves, X-rays, and all other forms of electromagnetic radiation share the same:',
    options: [
      'Underlying physical nature, differing from one another only in their frequency/wavelength',
      'Exact numerical wavelength, with no variation at all across the spectrum',
      'Chemical composition, a concept not directly applicable to electromagnetic radiation',
      'Biological origin, since all forms of electromagnetic radiation were thought to require a living source'
    ],
    correctIndex: 0,
    explanation: 'All forms of electromagnetic radiation share the same fundamental physical nature, differing only in frequency and wavelength.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-79',
    type: 'mcq',
    question: 'The practical properties and applications of a given region of the electromagnetic spectrum (e.g. how strongly it is absorbed by matter, how easily it penetrates materials, its typical biological effects) are ultimately determined by its specific:',
    options: [
      'Colour alone, a concept applicable only to the visible light region',
      'Frequency (and correspondingly, its photon energy and wavelength)',
      'Country of origin, in cases involving artificially generated radiation',
      "Date of scientific discovery, with no relation to the radiation's actual physical properties"
    ],
    correctIndex: 1,
    explanation: "A given region's characteristic properties are fundamentally determined by its frequency, photon energy, and wavelength.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-waves-80',
    type: 'mcq',
    question: "Overall, the study of electromagnetic waves, from their theoretical prediction by Maxwell through their experimental confirmation and the exploration of the full electromagnetic spectrum, represents a foundational chapter in physics that underlies an enormous range of modern:",
    options: [
      'Communication, medical, industrial, and scientific technologies',
      'Only purely theoretical physics, with no practical technological relevance whatsoever',
      'Only historical interest, with no ongoing relevance to modern science or technology',
      'Only a single, narrow technological application, with no broader relevance'
    ],
    correctIndex: 0,
    explanation: "This chapter's concepts collectively underpin an enormous range of modern communication, medical, industrial, and scientific technologies.",
    difficulty: 'medium'
  },
];
export default electromagneticWavesQuestions;