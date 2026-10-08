import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    id: 'wave-optics-1',
    type: 'mcq',
    question: 'The shape of the wavefront from a point source in an isotropic medium is:',
    options: ['Plane', 'Spherical', 'Cylindrical', 'Elliptical'],
    correctIndex: 1,
    explanation: 'All points at the same distance from a point source have the same phase, so the wavefront is a sphere.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-2',
    type: 'mcq',
    question: 'The wavefront of light coming from a very distant source such as the Sun is:',
    options: ['Spherical', 'Cylindrical', 'Elliptical', 'Plane'],
    correctIndex: 3,
    explanation: 'At a very large distance a small portion of a spherical wavefront is practically flat, so it can be treated as a plane wavefront.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-3',
    type: 'mcq',
    question: 'According to Huygens principle, the new position of a wavefront at a later time is:',
    options: [
      'The forward envelope of the secondary wavelets',
      'The backward envelope of the secondary wavelets',
      'The line joining the centres of the secondary wavelets',
      'The sum of the amplitudes of the secondary wavelets'
    ],
    correctIndex: 0,
    explanation: 'Every point on a wavefront acts as a source of secondary wavelets. The forward envelope of these wavelets gives the new wavefront.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-4',
    type: 'mcq',
    question: 'In Huygens construction for refraction of a plane wave at a plane surface, sin i / sin r is equal to (v₁ and v₂ are the speeds in the first and second medium):',
    options: ['v₂/v₁', 'v₁ × v₂', 'v₁/v₂', '1/(v₁v₂)'],
    correctIndex: 2,
    explanation: 'Geometry of the construction gives sin i / sin r = v₁/v₂, which is also μ₂/μ₁.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-5',
    type: 'mcq',
    question: 'The wave theory of light predicts that the speed of light in a denser medium compared to that in a rarer medium is:',
    options: ['Greater', 'The same', 'Less', 'Zero'],
    correctIndex: 2,
    explanation: 'From Huygens construction, the ray bends towards the normal in a denser medium only if the speed there is smaller. This was confirmed by Foucault.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-6',
    type: 'mcq',
    question: 'When a star is moving away from the Earth, the spectral lines in its light shift towards:',
    options: [
      'Longer wavelengths (red end)',
      'Shorter wavelengths (blue end)',
      'No shift occurs',
      'Both ends equally'
    ],
    correctIndex: 0,
    explanation: 'For a receding source the observed frequency decreases, so the wavelength increases. This is the red shift.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-7',
    type: 'mcq',
    question: 'A galaxy recedes from us at 6 × 10⁶ m/s. The shift in the wavelength of a spectral line of 600 nm is (c = 3 × 10⁸ m/s):',
    options: ['6 nm', '3 nm', '24 nm', '12 nm'],
    correctIndex: 3,
    explanation: 'Δλ/λ = v/c = (6 × 10⁶)/(3 × 10⁸) = 0.02, so Δλ = 0.02 × 600 = 12 nm.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-8',
    type: 'mcq',
    question: 'Two sources of light are said to be coherent if they have:',
    options: [
      'Equal amplitudes only',
      'The same frequency and a constant phase difference',
      'Different frequencies',
      'Opposite polarisation'
    ],
    correctIndex: 1,
    explanation: 'Coherent sources emit waves of the same frequency with a phase difference that does not change with time.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-9',
    type: 'mcq',
    question: 'Two independent bulbs cannot produce a sustained interference pattern because:',
    options: [
      'The phase difference between them changes randomly and rapidly with time',
      'Their amplitudes are always different',
      'Their wavelengths are always different',
      'Light from bulbs is longitudinal'
    ],
    correctIndex: 0,
    explanation: 'Atoms emit light in short random bursts, so independent sources have no fixed phase relation and are incoherent.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-10',
    type: 'mcq',
    question: 'In Young double slit experiment, d = 0.5 mm, D = 1 m and λ = 500 nm. The fringe width is:',
    options: ['0.5 mm', '2 mm', '1 mm', '0.25 mm'],
    correctIndex: 2,
    explanation: 'β = λD/d = (500 × 10⁻⁹ × 1)/(0.5 × 10⁻³) = 1 × 10⁻³ m = 1 mm.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-11',
    type: 'mcq',
    question: 'The entire Young double slit apparatus is immersed in water (μ = 4/3). If the original fringe width in air is β, the new fringe width is:',
    options: ['4β/3', 'β', '3β/2', '3β/4'],
    correctIndex: 3,
    explanation: 'The wavelength in water becomes λ/μ, so β′ = β/μ = 3β/4.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-12',
    type: 'mcq',
    question: 'In Young double slit experiment the slit separation is doubled and the screen distance is halved. The fringe width becomes:',
    options: ['β/2', 'β/4', '2β', '4β'],
    correctIndex: 1,
    explanation: 'β = λD/d. With D → D/2 and d → 2d, β′ = λ(D/2)/(2d) = β/4.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-13',
    type: 'mcq',
    question: 'In Young double slit experiment, the path difference at a point on the screen is 3λ/2. The point is:',
    options: [
      'A bright fringe',
      'A dark fringe',
      'A point of intensity I₀/2',
      'Cannot be determined'
    ],
    correctIndex: 1,
    explanation: 'Dark fringes occur at path differences (2n − 1)λ/2. 3λ/2 is an odd multiple of λ/2, so it is dark.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-14',
    type: 'mcq',
    question: 'Two coherent waves, each of intensity I₀, meet at a point with a phase difference of π/2. The resultant intensity is:',
    options: ['I₀', '4I₀', '2I₀', 'Zero'],
    correctIndex: 2,
    explanation: 'I = 4I₀ cos²(φ/2) = 4I₀ cos²(π/4) = 4I₀ × 1/2 = 2I₀.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-15',
    type: 'mcq',
    question: 'Two coherent sources have an intensity ratio of 9 : 1. The ratio of maximum to minimum intensity in the interference pattern is:',
    options: ['4 : 1', '5 : 4', '9 : 1', '16 : 1'],
    correctIndex: 0,
    explanation: 'Amplitude ratio = 3 : 1. Imax/Imin = (3 + 1)²/(3 − 1)² = 16/4 = 4 : 1.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-16',
    type: 'mcq',
    question: 'In Young double slit experiment the widths of the two slits are in the ratio 1 : 25. The ratio of maximum to minimum intensity is:',
    options: ['3 : 2', '25 : 1', '5 : 1', '9 : 4'],
    correctIndex: 3,
    explanation: 'Intensity is proportional to slit width, so the amplitude ratio is 1 : 5. Imax/Imin = (5 + 1)²/(5 − 1)² = 36/16 = 9/4.',
    difficulty: 'hard'
  },
  {
    id: 'wave-optics-17',
    type: 'mcq',
    question: 'In Young double slit experiment, d = 1 mm, D = 2 m and λ = 600 nm. The distance of the 3rd bright fringe from the central maximum is:',
    options: ['1.2 mm', '2.4 mm', '3.6 mm', '7.2 mm'],
    correctIndex: 2,
    explanation: 'y₃ = 3λD/d = 3 × 600 × 10⁻⁹ × 2 / 10⁻³ = 3.6 × 10⁻³ m = 3.6 mm.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-18',
    type: 'mcq',
    question: 'When Young double slit experiment is performed with white light, the central fringe is:',
    options: ['White', 'Red', 'Violet', 'Dark'],
    correctIndex: 0,
    explanation: 'At the centre the path difference is zero for every wavelength, so all colours form a bright fringe there. The central fringe is white.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-19',
    type: 'mcq',
    question: 'A thin transparent sheet (μ = 1.5, thickness 4 μm) is placed in front of one slit in Young experiment with D = 1 m and d = 1 mm. The shift of the central fringe is:',
    options: ['1 mm', '2 mm', '4 mm', '0.5 mm'],
    correctIndex: 1,
    explanation: 'Shift = (μ − 1)tD/d = 0.5 × 4 × 10⁻⁶ × 1 / 10⁻³ = 2 × 10⁻³ m = 2 mm, towards the slit covered by the sheet.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-20',
    type: 'mcq',
    question: 'The fringe width in Young double slit experiment does NOT depend on:',
    options: [
      'Wavelength of light',
      'Separation between the slits',
      'Distance of the screen from the slits',
      'Intensity of the sources'
    ],
    correctIndex: 3,
    explanation: 'β = λD/d depends on λ, D and d only. Intensity affects the brightness and contrast, not the spacing.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-21',
    type: 'mcq',
    question: 'In Young double slit experiment, if one of the slits is covered, the screen will show:',
    options: [
      'A single-slit diffraction pattern of reduced intensity',
      'A completely dark screen',
      'The same fringes with half the intensity',
      'Uniform illumination with no pattern'
    ],
    correctIndex: 0,
    explanation: 'With one slit only, there is no interference. The light spreads as a diffraction pattern from that single slit.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-22',
    type: 'mcq',
    question: 'In Young double slit experiment, light of wavelength 600 nm is replaced by light of 400 nm. The fringe width becomes:',
    options: ['3/2 times', 'Unchanged', '2/3 times', '1/2 times'],
    correctIndex: 2,
    explanation: 'β ∝ λ, so β′/β = 400/600 = 2/3.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-23',
    type: 'mcq',
    question: 'Two identical slits, each alone producing intensity I₀ on the screen, are used in a Young double slit experiment. The intensity at the central maximum is:',
    options: ['I₀', '2I₀', 'I₀/2', '4I₀'],
    correctIndex: 3,
    explanation: 'The amplitudes add at the centre: (a + a)² = 4a², so the intensity is 4I₀, not 2I₀.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-24',
    type: 'mcq',
    question: 'For the first minimum in the single slit diffraction pattern (slit width a), the angle θ satisfies:',
    options: ['a sin θ = λ/2', 'a sin θ = λ', 'a sin θ = 3λ/2', 'a cos θ = λ'],
    correctIndex: 1,
    explanation: 'Minima in single slit diffraction occur at a sin θ = nλ (n = 1, 2, 3, ...).',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-25',
    type: 'mcq',
    question: 'A slit of width 0.2 mm is illuminated by light of wavelength 600 nm. The angular width of the central maximum is:',
    options: ['3 × 10⁻³ rad', '1.2 × 10⁻² rad', '6 × 10⁻⁴ rad', '6 × 10⁻³ rad'],
    correctIndex: 3,
    explanation: 'Angular width = 2λ/a = 2 × 600 × 10⁻⁹ / (0.2 × 10⁻³) = 6 × 10⁻³ rad.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-26',
    type: 'mcq',
    question: 'In a single slit experiment a = 0.1 mm, D = 1 m and λ = 500 nm. The linear width of the central maximum is:',
    options: ['0.5 cm', '1 cm', '2 cm', '0.25 cm'],
    correctIndex: 1,
    explanation: 'Width = 2λD/a = 2 × 500 × 10⁻⁹ × 1 / 10⁻⁴ = 10⁻² m = 1 cm.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-27',
    type: 'mcq',
    question: 'In single slit diffraction, if the width of the slit is increased, the width of the central maximum:',
    options: [
      'Decreases',
      'Increases',
      'Remains unchanged',
      'First increases and then decreases'
    ],
    correctIndex: 0,
    explanation: 'Central maximum width = 2λD/a, which is inversely proportional to the slit width.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-28',
    type: 'mcq',
    question: 'In the single slit diffraction pattern, the central maximum is:',
    options: [
      'Of the same width as the other maxima',
      'Half as wide as the other maxima',
      'Twice as wide as the other maxima and the brightest',
      'Dark'
    ],
    correctIndex: 2,
    explanation: 'The central maximum extends between the first minima on both sides, so it is twice as wide as the secondary maxima and much brighter.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-29',
    type: 'mcq',
    question: 'The Fresnel distance is z = a²/λ. For an aperture of size 4 mm and light of wavelength 500 nm, ray optics is valid up to about:',
    options: ['16 m', '32 m', '8 m', '64 m'],
    correctIndex: 1,
    explanation: 'z = a²/λ = (4 × 10⁻³)² / (5 × 10⁻⁷) = 16 × 10⁻⁶ / 5 × 10⁻⁷ = 32 m.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-30',
    type: 'mcq',
    question: 'Appreciable diffraction of light occurs when the size of the aperture or obstacle is:',
    options: [
      'Comparable to the wavelength of light',
      'Much larger than the wavelength',
      'Infinitely large',
      'Unrelated to the wavelength'
    ],
    correctIndex: 0,
    explanation: 'Diffraction effects become noticeable only when the aperture size is of the order of the wavelength.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-31',
    type: 'mcq',
    question: 'Sound waves bend around the corners of a door much more easily than light waves because:',
    options: [
      'Sound waves are longitudinal',
      'Sound travels faster than light',
      'The wavelength of sound is much larger than that of light',
      'Sound is not an electromagnetic wave'
    ],
    correctIndex: 2,
    explanation: 'The wavelength of audible sound (cm to m) is comparable to the door size, while light has a wavelength of about 5 × 10⁻⁷ m. So diffraction of sound is easily noticed.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-32',
    type: 'mcq',
    question: 'The phenomenon of polarisation of light shows that light waves are:',
    options: ['Transverse', 'Longitudinal', 'Stationary', 'Mechanical'],
    correctIndex: 0,
    explanation: 'Only transverse waves can be polarised, since their vibrations are perpendicular to the direction of propagation.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-33',
    type: 'mcq',
    question: 'Plane polarised light of intensity I₀ falls on an analyser whose axis makes 60° with the plane of polarisation. The transmitted intensity is:',
    options: ['I₀/2', '3I₀/4', 'I₀/8', 'I₀/4'],
    correctIndex: 3,
    explanation: 'By Malus law I = I₀ cos²60° = I₀ × (1/2)² = I₀/4.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-34',
    type: 'mcq',
    question: 'Unpolarised light of intensity I₀ passes through a polaroid. The transmitted intensity is:',
    options: ['I₀', 'I₀/2', 'I₀/4', 'Zero'],
    correctIndex: 1,
    explanation: 'The average of cos²θ over all orientations is 1/2, so half the intensity is transmitted.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-35',
    type: 'mcq',
    question: 'Unpolarised light of intensity I₀ passes through two polaroids whose pass axes are inclined at 45°. The final intensity is:',
    options: ['I₀/2', 'I₀/8', 'I₀/4', '3I₀/8'],
    correctIndex: 2,
    explanation: 'After the first polaroid I = I₀/2. After the second, I = (I₀/2) cos²45° = I₀/4.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-36',
    type: 'mcq',
    question: 'Unpolarised light passes through two polaroids with their pass axes perpendicular to each other. The transmitted intensity is:',
    options: ['I₀/2', 'I₀/4', 'I₀/√2', 'Zero'],
    correctIndex: 3,
    explanation: 'Light polarised by the first polaroid makes 90° with the second axis, and cos²90° = 0, so no light passes.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-37',
    type: 'mcq',
    question: 'The refractive index of glass is √3. The polarising (Brewster) angle for light incident from air is:',
    options: ['30°', '60°', '45°', '90°'],
    correctIndex: 1,
    explanation: 'tan θB = μ = √3, so θB = 60°.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-38',
    type: 'mcq',
    question: 'When light is incident at the Brewster angle, the reflected and refracted rays are:',
    options: ['At right angles to each other', 'Parallel to each other', 'At 45° to each other', 'Antiparallel'],
    correctIndex: 0,
    explanation: 'At the polarising angle, θB + r = 90°, so the reflected and refracted rays are perpendicular.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-39',
    type: 'mcq',
    question: 'Unpolarised light is incident on a glass surface at the polarising angle. The reflected light is:',
    options: [
      'Unpolarised',
      'Partially polarised',
      'Plane polarised parallel to the plane of incidence',
      'Plane polarised perpendicular to the plane of incidence'
    ],
    correctIndex: 3,
    explanation: 'At the Brewster angle the reflected light is completely plane polarised, with its electric vector perpendicular to the plane of incidence.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-40',
    type: 'mcq',
    question: 'Polaroid sunglasses are useful mainly because they:',
    options: [
      'Increase the intensity of light',
      'Absorb only ultraviolet light',
      'Reduce glare from reflected, partially polarised light',
      'Make the light unpolarised'
    ],
    correctIndex: 2,
    explanation: 'Light reflected from roads and water is partially polarised. Polaroid glasses with a suitable axis block most of it and cut the glare.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-41',
    type: 'mcq',
    question: 'Which of the following waves cannot be polarised?',
    options: ['Radio waves', 'Sound waves in air', 'Light waves', 'X-rays'],
    correctIndex: 1,
    explanation: 'Sound waves in air are longitudinal, so they cannot be polarised. Electromagnetic waves are transverse.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-42',
    type: 'mcq',
    question: 'A wavefront is the locus of all points which have:',
    options: ['The same phase', 'The same amplitude', 'The same velocity', 'The same intensity'],
    correctIndex: 0,
    explanation: 'A wavefront is a surface of constant phase.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-43',
    type: 'mcq',
    question: 'In Young double slit experiment the intensity at the central maximum is I₀. The intensity at a point where the path difference is λ/3 is:',
    options: ['I₀/2', '3I₀/4', 'I₀/4', 'I₀/3'],
    correctIndex: 2,
    explanation: 'φ = (2π/λ)(λ/3) = 2π/3. I = I₀ cos²(φ/2) = I₀ cos²60° = I₀/4.',
    difficulty: 'hard'
  },
  {
    id: 'wave-optics-44',
    type: 'mcq',
    question: 'In Young double slit experiment with d = 0.3 mm and λ = 600 nm, the angular fringe width is:',
    options: ['1 × 10⁻³ rad', '4 × 10⁻³ rad', '2 × 10⁻⁴ rad', '2 × 10⁻³ rad'],
    correctIndex: 3,
    explanation: 'Angular fringe width = λ/d = 600 × 10⁻⁹ / (0.3 × 10⁻³) = 2 × 10⁻³ rad.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-45',
    type: 'mcq',
    question: 'In Young double slit experiment, if the slit separation d is halved, the fringe width:',
    options: ['Doubles', 'Halves', 'Remains unchanged', 'Becomes four times'],
    correctIndex: 0,
    explanation: 'β = λD/d is inversely proportional to d, so halving d doubles β.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-46',
    type: 'mcq',
    question: 'If the two slits in Young experiment give unequal intensities, then the minima in the pattern:',
    options: [
      'Become brighter than the maxima',
      'Disappear along with the maxima',
      'Shift to the centre of the screen',
      'Are no longer completely dark'
    ],
    correctIndex: 3,
    explanation: 'Imin = (a₁ − a₂)² is not zero if a₁ ≠ a₂, so the contrast of the fringes reduces.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-47',
    type: 'mcq',
    question: 'When the screen is moved farther from the slits in Young double slit experiment, the fringe width:',
    options: ['Decreases', 'Increases', 'Remains unchanged', 'Becomes zero'],
    correctIndex: 1,
    explanation: 'β = λD/d is directly proportional to D.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-48',
    type: 'mcq',
    question: 'In Young double slit experiment the fringe width is 2 mm. The distance between the 2nd bright fringe and the 5th dark fringe on the same side of the centre is:',
    options: ['4 mm', '6 mm', '5 mm', '9 mm'],
    correctIndex: 2,
    explanation: 'The 2nd bright fringe is at 2β. The 5th dark fringe is at 4.5β. The separation is 2.5β = 2.5 × 2 = 5 mm.',
    difficulty: 'hard'
  },
  {
    id: 'wave-optics-49',
    type: 'mcq',
    question: 'Two waves interfere destructively when the phase difference between them is:',
    options: [
      'An odd multiple of π',
      'An even multiple of π',
      'Zero',
      'Exactly 2π'
    ],
    correctIndex: 0,
    explanation: 'Destructive interference needs φ = (2n + 1)π, which corresponds to a path difference of an odd multiple of λ/2.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-50',
    type: 'mcq',
    question: 'In single slit diffraction with white light, the central maximum is:',
    options: ['Violet', 'White with coloured edges', 'Red', 'Dark'],
    correctIndex: 1,
    explanation: 'At the centre all colours are in phase, so it is white. The edges are coloured because the width of the central maximum depends on λ.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-51',
    type: 'mcq',
    question: 'In Young double slit experiment, the 10th bright fringe is 2 cm from the central maximum. The fringe width is:',
    options: ['4 mm', '1 mm', '0.5 mm', '2 mm'],
    correctIndex: 3,
    explanation: 'y₁₀ = 10β = 2 cm, so β = 0.2 cm = 2 mm.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-52',
    type: 'mcq',
    question: 'In Young experiment with d = 1 mm and D = 1 m, the 4th bright fringe is at 2.4 mm from the centre. The wavelength of light is:',
    options: ['480 nm', '540 nm', '600 nm', '720 nm'],
    correctIndex: 2,
    explanation: 'β = 2.4/4 = 0.6 mm. λ = βd/D = 0.6 × 10⁻³ × 10⁻³ / 1 = 6 × 10⁻⁷ m = 600 nm.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-53',
    type: 'mcq',
    question: 'Light from a clear blue sky, scattered by atmospheric molecules, is:',
    options: [
      'Partially plane polarised',
      'Completely unpolarised',
      'Circularly polarised',
      'Elliptically polarised'
    ],
    correctIndex: 0,
    explanation: 'Scattering by molecules makes sky light partially plane polarised. The effect is maximum at 90° to the direction of sunlight.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-54',
    type: 'mcq',
    question: 'A plane wavefront falls on a thin convex lens. The emergent wavefront is:',
    options: [
      'A plane wavefront',
      'A diverging spherical wavefront',
      'A cylindrical wavefront',
      'A converging spherical wavefront'
    ],
    correctIndex: 3,
    explanation: 'The central part of the wavefront is delayed more by the thicker glass, so the wavefront becomes spherical and converges to the focus.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-55',
    type: 'mcq',
    question: 'Which of the following phenomena can be explained only by the wave theory and not by ray optics?',
    options: ['Reflection', 'Interference', 'Refraction', 'Rectilinear propagation'],
    correctIndex: 1,
    explanation: 'Reflection, refraction and straight-line propagation can be treated with rays. Interference needs the superposition of waves.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-56',
    type: 'mcq',
    question: 'Two waves of equal amplitude a meet with a phase difference of 120°. The amplitude of the resultant wave is:',
    options: ['a', '2a', 'a√2', 'a√3'],
    correctIndex: 0,
    explanation: 'A = 2a cos(φ/2) = 2a cos 60° = a.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-57',
    type: 'mcq',
    question: 'In Young double slit experiment, the path difference at the 5th dark fringe is:',
    options: ['5λ', '5λ/2', '9λ/2', '11λ/2'],
    correctIndex: 2,
    explanation: 'Dark fringes occur at (2n − 1)λ/2. For n = 5 this is 9λ/2.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-58',
    type: 'mcq',
    question: 'In Young experiment, λ = 6000 Å, d = 1 mm and the fringe width is 0.6 mm. The distance of the screen from the slits is:',
    options: ['0.5 m', '1 m', '2 m', '1.5 m'],
    correctIndex: 1,
    explanation: 'D = βd/λ = (0.6 × 10⁻³ × 10⁻³)/(6 × 10⁻⁷) = 1 m.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-59',
    type: 'mcq',
    question: 'The refractive index of water is 4/3. The polarising angle for light incident on water from air is approximately:',
    options: ['37°', '45°', '60°', '53°'],
    correctIndex: 3,
    explanation: 'tan θB = μ = 4/3, which gives θB ≈ 53°.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-60',
    type: 'mcq',
    question: 'In a single slit diffraction experiment, red light is replaced by blue light. The width of the central maximum:',
    options: ['Becomes narrower', 'Becomes wider', 'Remains the same', 'Disappears'],
    correctIndex: 0,
    explanation: 'Width = 2λD/a. Blue light has a smaller wavelength than red, so the central maximum becomes narrower.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-61',
    type: 'mcq',
    question: 'A slit of width 0.1 mm is illuminated by light of wavelength 5000 Å. The angle of the first minimum is:',
    options: ['2.5 × 10⁻³ rad', '1 × 10⁻² rad', '5 × 10⁻³ rad', '5 × 10⁻⁴ rad'],
    correctIndex: 2,
    explanation: 'sin θ ≈ θ = λ/a = (5 × 10⁻⁷)/(10⁻⁴) = 5 × 10⁻³ rad.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-62',
    type: 'mcq',
    question: 'In a single slit experiment a = 0.2 mm, D = 2 m and λ = 600 nm. The distance of the first minimum from the centre of the screen is:',
    options: ['3 mm', '6 mm', '12 mm', '1.2 mm'],
    correctIndex: 1,
    explanation: 'y = λD/a = (600 × 10⁻⁹ × 2)/(0.2 × 10⁻³) = 6 × 10⁻³ m = 6 mm.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-63',
    type: 'mcq',
    question: 'Rays of light are always ______ to the wavefront.',
    options: ['Perpendicular', 'Parallel', 'At 45°', 'Tangential'],
    correctIndex: 0,
    explanation: 'The direction of propagation of a wave, given by the ray, is normal to the wavefront.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-64',
    type: 'mcq',
    question: 'In Young experiment with white light, the colour of the first-order coloured fringe nearest to the central white fringe is:',
    options: ['Red', 'Green', 'Yellow', 'Violet'],
    correctIndex: 3,
    explanation: 'β ∝ λ. Violet has the smallest wavelength, so its first bright fringe lies closest to the centre.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-65',
    type: 'mcq',
    question: 'A path difference of 3λ/4 corresponds to a phase difference of:',
    options: ['π', '3π/2', '3π/4', '2π'],
    correctIndex: 1,
    explanation: 'φ = (2π/λ) × Δx = (2π/λ)(3λ/4) = 3π/2.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-66',
    type: 'mcq',
    question: 'A thin mica sheet of thickness 6 × 10⁻⁶ m and refractive index 1.5 is placed in front of one slit in Young experiment. For λ = 6000 Å, the number of fringes by which the pattern shifts is:',
    options: ['3', '10', '2.5', '5'],
    correctIndex: 3,
    explanation: 'Extra optical path = (μ − 1)t = 0.5 × 6 × 10⁻⁶ = 3 × 10⁻⁶ m. Number of fringes = (3 × 10⁻⁶)/(6 × 10⁻⁷) = 5.',
    difficulty: 'hard'
  },
  {
    id: 'wave-optics-67',
    type: 'mcq',
    question: 'Plane polarised light passes through a polaroid. When the polaroid is rotated through 360°, the transmitted intensity becomes zero:',
    options: ['Once', 'Thrice', 'Twice', 'Four times'],
    correctIndex: 2,
    explanation: 'I = I₀ cos²θ is zero at θ = 90° and 270°, so twice in one full rotation.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-68',
    type: 'mcq',
    question: 'Plane polarised light of intensity I₀ falls on an analyser whose axis makes 30° with the plane of polarisation. The transmitted intensity is:',
    options: ['3I₀/4', 'I₀/4', '√3 I₀/2', 'I₀/2'],
    correctIndex: 0,
    explanation: 'I = I₀ cos²30° = I₀ × (√3/2)² = 3I₀/4.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-69',
    type: 'mcq',
    question: 'Plane polarised light passes through an analyser and its intensity is reduced to half. The angle between the plane of polarisation and the axis of the analyser is:',
    options: ['30°', '45°', '60°', '90°'],
    correctIndex: 1,
    explanation: 'cos²θ = 1/2, so cos θ = 1/√2 and θ = 45°.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-70',
    type: 'mcq',
    question: 'Light is incident on a glass plate at the polarising angle of 57°. The angle of refraction is:',
    options: ['57°', '45°', '33°', '90°'],
    correctIndex: 2,
    explanation: 'At the Brewster angle, i + r = 90°, so r = 90° − 57° = 33°.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-71',
    type: 'mcq',
    question: 'Which of the following cannot be explained by the wave theory of light?',
    options: ['Photoelectric effect', 'Diffraction', 'Interference', 'Polarisation'],
    correctIndex: 0,
    explanation: 'The photoelectric effect needs the particle (photon) nature of light. Diffraction, interference and polarisation are wave phenomena.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-72',
    type: 'mcq',
    question: 'The corpuscular model of Newton predicted that the speed of light in water compared to that in air is:',
    options: ['The same', 'Less', 'Zero', 'Greater'],
    correctIndex: 3,
    explanation: 'Newton explained refraction by a force pulling the particles towards the denser medium, so they would speed up. This was disproved by experiment.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-73',
    type: 'mcq',
    question: 'The experiments of Foucault and Fizeau showed that the speed of light in water is:',
    options: ['Greater than in air', 'Less than in air', 'Equal to that in air', 'Infinite'],
    correctIndex: 1,
    explanation: 'They measured a smaller speed in water than in air, which supports the wave theory and contradicts the corpuscular model.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-74',
    type: 'mcq',
    question: 'In Young experiment, λ = 5000 Å, d = 2 mm and D = 2 m. The fringe width is:',
    options: ['1 mm', '0.25 mm', '0.5 mm', '2 mm'],
    correctIndex: 2,
    explanation: 'β = λD/d = (5 × 10⁻⁷ × 2)/(2 × 10⁻³) = 5 × 10⁻⁴ m = 0.5 mm.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-75',
    type: 'mcq',
    question: 'The contrast (visibility) of interference fringes is maximum when the intensities of the two interfering beams are:',
    options: ['Very different', 'Such that one is zero', 'In the ratio 1 : 4', 'Equal'],
    correctIndex: 3,
    explanation: 'With equal intensities Imin = 0 and Imax = 4I, which gives the best contrast.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-76',
    type: 'mcq',
    question: 'In Young double slit experiment the widths of the two slits are in the ratio 4 : 1. The ratio of maximum to minimum intensity is:',
    options: ['9 : 1', '4 : 1', '3 : 1', '16 : 1'],
    correctIndex: 0,
    explanation: 'Intensity ∝ width, so the amplitude ratio is 2 : 1. Imax/Imin = (2 + 1)²/(2 − 1)² = 9 : 1.',
    difficulty: 'medium'
  },
  {
    id: 'wave-optics-77',
    type: 'mcq',
    question: 'In Young experiment with λ = 6000 Å, the path difference at the 5th bright fringe is:',
    options: ['1.5 × 10⁻⁶ m', '6 × 10⁻⁶ m', '3 × 10⁻⁶ m', '2.4 × 10⁻⁶ m'],
    correctIndex: 2,
    explanation: 'Bright fringes occur at path difference nλ. For n = 5, Δx = 5 × 6 × 10⁻⁷ = 3 × 10⁻⁶ m.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-78',
    type: 'mcq',
    question: 'In Young double slit experiment, coherent sources are obtained by:',
    options: ['Division of amplitude', 'Division of wavefront', 'Polarisation', 'Reflection from a mirror'],
    correctIndex: 1,
    explanation: 'A single wavefront is divided into two parts by the two slits, and the two parts act as coherent sources.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-79',
    type: 'mcq',
    question: 'In the single slit diffraction pattern, the intensity of the secondary maxima:',
    options: [
      'Is equal to that of the central maximum',
      'Increases with the order',
      'Is zero',
      'Decreases with the order'
    ],
    correctIndex: 3,
    explanation: 'The secondary maxima are much weaker than the central maximum, and their intensity falls rapidly as the order increases.',
    difficulty: 'easy'
  },
  {
    id: 'wave-optics-80',
    type: 'mcq',
    question: 'A single slit diffraction experiment is shifted from air into water (μ = 4/3). The angular width of the central maximum becomes:',
    options: ['4/3 times', 'Unchanged', '3/4 times', '1/2 times'],
    correctIndex: 2,
    explanation: 'Angular width = 2λ/a, and λ in water = λ/μ. So the width becomes 3/4 of its value in air.',
    difficulty: 'medium'
  }
];
export default waveOpticsQuestions;