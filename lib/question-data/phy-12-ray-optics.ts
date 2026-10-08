import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    id: 'ray-optics-1',
    type: 'mcq',
    question: 'A ray of light is incident on a plane mirror at an angle of 30° with the mirror surface. The angle of deviation of the ray is:',
    options: ['30°', '45°', '60°', '120°'],
    correctIndex: 2,
    explanation: 'Angle of incidence = 90° − 30° = 60°. Deviation = 180° − 2i = 180° − 120° = 60°.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-2',
    type: 'mcq',
    question: 'A plane mirror is rotated through an angle θ about an axis in its plane while the incident ray is kept fixed. The reflected ray rotates through:',
    options: ['2θ', 'θ', 'θ/2', '4θ'],
    correctIndex: 0,
    explanation: 'When a mirror turns by θ, the normal turns by θ, so the reflected ray turns by 2θ.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-3',
    type: 'mcq',
    question: 'The minimum length of a plane mirror needed for a person of height h to see his full image is:',
    options: ['h', '2h', 'h/4', 'h/2'],
    correctIndex: 3,
    explanation: 'A plane mirror of half the height of the person is enough, irrespective of the distance from the mirror.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-4',
    type: 'mcq',
    question: 'Two plane mirrors are inclined at 60° to each other. The number of images of an object placed between them is:',
    options: ['4', '5', '6', '3'],
    correctIndex: 1,
    explanation: 'n = (360°/θ) − 1 = (360°/60°) − 1 = 5.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-5',
    type: 'mcq',
    question: 'The image formed by a convex mirror for any position of a real object is always:',
    options: [
      'Real, inverted and magnified',
      'Virtual, erect and diminished',
      'Virtual, erect and magnified',
      'Real, inverted and diminished'
    ],
    correctIndex: 1,
    explanation: 'A convex mirror always forms a virtual, erect and diminished image between the pole and the focus.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-6',
    type: 'mcq',
    question: 'An object is placed at the centre of curvature of a concave mirror. The image formed is:',
    options: [
      'Virtual, erect and magnified',
      'Real, inverted, magnified and beyond C',
      'Real, inverted, diminished and between F and C',
      'Real, inverted, of the same size and at C'
    ],
    correctIndex: 3,
    explanation: 'For u = −2f, the mirror formula gives v = −2f and m = −1, so the image is real, inverted, same size and at C.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-7',
    type: 'mcq',
    question: 'A concave mirror has a focal length of 20 cm. An object is placed 30 cm from it. The image is formed:',
    options: [
      '60 cm in front of the mirror',
      '12 cm behind the mirror',
      '60 cm behind the mirror',
      '12 cm in front of the mirror'
    ],
    correctIndex: 0,
    explanation: '1/v = 1/f − 1/u = −1/20 + 1/30 = −1/60, so v = −60 cm: a real image 60 cm in front of the mirror.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-8',
    type: 'mcq',
    question: 'An object is placed 10 cm in front of a convex mirror of focal length 10 cm. The image distance and magnification are:',
    options: [
      '10 cm behind the mirror, m = +1',
      '5 cm behind the mirror, m = −0.5',
      '5 cm behind the mirror, m = +0.5',
      '20 cm behind the mirror, m = +2'
    ],
    correctIndex: 2,
    explanation: '1/v = 1/f − 1/u = 1/10 + 1/10 = 1/5, so v = +5 cm. m = −v/u = −5/(−10) = +0.5.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-9',
    type: 'mcq',
    question: 'A convex mirror is used as a rear-view mirror in vehicles because it:',
    options: [
      'Forms real images of vehicles behind',
      'Forms magnified images',
      'Has a very short focal length',
      'Gives a wider field of view with an erect, diminished image'
    ],
    correctIndex: 3,
    explanation: 'A convex mirror diverges rays and always gives an erect, diminished image, so it covers a much larger field of view.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-10',
    type: 'mcq',
    question: 'A concave mirror gives an erect and magnified image when the object is placed:',
    options: [
      'At the focus',
      'Between the pole and the focus',
      'Between the focus and the centre of curvature',
      'Beyond the centre of curvature'
    ],
    correctIndex: 1,
    explanation: 'Only when the object lies between P and F does a concave mirror form a virtual, erect and enlarged image. This is the principle of a shaving mirror.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-11',
    type: 'mcq',
    question: 'Light travels in glass with a speed of 2 × 10⁸ m/s. The refractive index of the glass is:',
    options: ['1.5', '1.33', '0.67', '2.0'],
    correctIndex: 0,
    explanation: 'μ = c/v = (3 × 10⁸)/(2 × 10⁸) = 1.5.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-12',
    type: 'mcq',
    question: 'When light passes from air into water, which of the following remains unchanged?',
    options: ['Wavelength', 'Speed', 'Frequency', 'Refractive index'],
    correctIndex: 2,
    explanation: 'Frequency depends only on the source. Speed and wavelength both decrease in the denser medium.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-13',
    type: 'mcq',
    question: 'A coin lies at the bottom of a water tank 12 cm deep (μ = 4/3). Viewed from above, its apparent depth is:',
    options: ['16 cm', '12 cm', '9 cm', '6 cm'],
    correctIndex: 2,
    explanation: 'Apparent depth = real depth/μ = 12 ÷ (4/3) = 9 cm.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-14',
    type: 'mcq',
    question: 'The refractive index of a glass is √2. The critical angle for a glass-air interface is:',
    options: ['45°', '30°', '60°', '90°'],
    correctIndex: 0,
    explanation: 'sin C = 1/μ = 1/√2, so C = 45°.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-15',
    type: 'mcq',
    question: 'Total internal reflection takes place when light travels from:',
    options: [
      'Rarer to denser medium with angle of incidence greater than the critical angle',
      'Denser to rarer medium with angle of incidence greater than the critical angle',
      'Denser to rarer medium with angle of incidence less than the critical angle',
      'Rarer to denser medium with angle of incidence less than the critical angle'
    ],
    correctIndex: 1,
    explanation: 'Both conditions are needed: the ray must go from a denser to a rarer medium, and i must exceed the critical angle.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-16',
    type: 'mcq',
    question: 'The working of an optical fibre is based on the phenomenon of:',
    options: ['Refraction', 'Diffraction', 'Interference', 'Total internal reflection'],
    correctIndex: 3,
    explanation: 'Light entering the core of the fibre undergoes repeated total internal reflection at the core-cladding boundary.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-17',
    type: 'mcq',
    question: 'A diamond sparkles brilliantly mainly because of:',
    options: [
      'Its high dispersive power only',
      'Multiple total internal reflections due to its small critical angle',
      'Its very low refractive index',
      'Polarisation of light inside it'
    ],
    correctIndex: 1,
    explanation: 'Diamond has a very high refractive index (about 2.42), so its critical angle is only about 24°. Light undergoes repeated total internal reflection inside it.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-18',
    type: 'mcq',
    question: 'A mirage in a desert is caused by:',
    options: [
      'Scattering of light',
      'Diffraction of light',
      'Dispersion of light',
      'Total internal reflection due to gradual change in refractive index of air layers'
    ],
    correctIndex: 3,
    explanation: 'Hot air near the ground is rarer. Light from the sky bends progressively and finally undergoes total internal reflection, so an inverted image appears.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-19',
    type: 'mcq',
    question: 'An object is viewed normally through a glass slab 6 cm thick (μ = 1.5). The apparent shift of the object is:',
    options: ['1 cm', '4 cm', '2 cm', '3 cm'],
    correctIndex: 2,
    explanation: 'Shift = t(1 − 1/μ) = 6 × (1 − 2/3) = 2 cm.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-20',
    type: 'mcq',
    question: 'A ray of light is obliquely incident on a parallel-sided glass slab. The emergent ray is:',
    options: [
      'Parallel to the incident ray but laterally displaced',
      'Deviated towards the normal',
      'Deviated away from the normal',
      'Along the same line as the incident ray'
    ],
    correctIndex: 0,
    explanation: 'The two refractions at opposite parallel faces cancel the angular deviation, but the ray is shifted sideways.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-21',
    type: 'mcq',
    question: 'The refractive index of glass is 3/2 and that of water is 4/3. The refractive index of glass with respect to water is:',
    options: ['8/9', '2', '9/7', '9/8'],
    correctIndex: 3,
    explanation: 'μ(g/w) = μg/μw = (3/2)/(4/3) = 9/8.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-22',
    type: 'mcq',
    question: 'A double convex lens made of glass (μ = 1.5) has both radii of curvature equal to 20 cm. Its focal length is:',
    options: ['10 cm', '20 cm', '40 cm', '15 cm'],
    correctIndex: 1,
    explanation: '1/f = (μ − 1)(1/R₁ − 1/R₂) = 0.5 × (1/20 + 1/20) = 1/20, so f = 20 cm.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-23',
    type: 'mcq',
    question: 'A convex lens made of a material of refractive index μ₁ is placed in a medium of refractive index μ₂ > μ₁. The lens behaves as:',
    options: [
      'A diverging lens',
      'A converging lens of larger focal length',
      'A converging lens of smaller focal length',
      'A plane glass plate'
    ],
    correctIndex: 0,
    explanation: '1/f ∝ (μ₁/μ₂ − 1), which is negative when μ₂ > μ₁. So the convex lens diverges the light.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-24',
    type: 'mcq',
    question: 'The power of a convex lens of focal length 25 cm is:',
    options: ['0.25 D', '2.5 D', '4 D', '25 D'],
    correctIndex: 2,
    explanation: 'P = 1/f (in metres) = 1/0.25 = +4 D.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-25',
    type: 'mcq',
    question: 'A convex lens of focal length 10 cm and a concave lens of focal length 20 cm are placed in contact. The focal length of the combination is:',
    options: ['+20 cm', '−20 cm', '+6.67 cm', '−6.67 cm'],
    correctIndex: 0,
    explanation: '1/f = 1/10 − 1/20 = 1/20, so f = +20 cm (converging).',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-26',
    type: 'mcq',
    question: 'An object is placed 15 cm from a convex lens of focal length 10 cm. The image distance is:',
    options: ['6 cm', '15 cm', '30 cm', '60 cm'],
    correctIndex: 2,
    explanation: '1/v = 1/f + 1/u = 1/10 − 1/15 = 1/30, so v = +30 cm (real image).',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-27',
    type: 'mcq',
    question: 'An object is placed at a distance 2f from a convex lens of focal length f. The linear magnification is:',
    options: ['+1', '+2', '−2', '−1'],
    correctIndex: 3,
    explanation: 'At u = −2f, v = +2f, so m = v/u = −1. The image is real, inverted and of the same size.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-28',
    type: 'mcq',
    question: 'A convex lens forms a real image of the same size as the object. If the distance between the object and its image is 40 cm, the focal length of the lens is:',
    options: ['5 cm', '10 cm', '20 cm', '40 cm'],
    correctIndex: 1,
    explanation: 'Same size means u = v = 2f, so the object-image distance is 4f = 40 cm and f = 10 cm.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-29',
    type: 'mcq',
    question: 'A thin convex lens of focal length f is cut into two halves along a plane containing the principal axis. The focal length of each half is:',
    options: ['f/2', '2f', 'f', '4f'],
    correctIndex: 2,
    explanation: 'Cutting along the principal axis does not change the curvatures, so f stays the same. Only the brightness of the image drops.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-30',
    type: 'mcq',
    question: 'A thin biconvex lens of focal length f is cut into two halves by a plane perpendicular to the principal axis. The focal length of each half is:',
    options: ['2f', 'f', 'f/2', '4f'],
    correctIndex: 0,
    explanation: 'Each half becomes plano-convex. 1/f = (μ−1)(2/R), while 1/f′ = (μ−1)(1/R), so f′ = 2f.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-31',
    type: 'mcq',
    question: 'A convex lens of power 6 D and a concave lens of power −2 D are placed in contact. The focal length of the combination is:',
    options: ['50 cm', '25 cm', '12.5 cm', '33.3 cm'],
    correctIndex: 1,
    explanation: 'P = 6 − 2 = 4 D, so f = 1/4 m = 25 cm.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-32',
    type: 'mcq',
    question: 'At the position of minimum deviation of a prism, the ray inside the prism is:',
    options: [
      'Perpendicular to the base',
      'Along the normal to the first face',
      'Perpendicular to the second face',
      'Parallel to the base of the prism'
    ],
    correctIndex: 3,
    explanation: 'At minimum deviation i = e and r₁ = r₂ = A/2, so the ray passes symmetrically, parallel to the base.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-33',
    type: 'mcq',
    question: 'For a prism of angle 60°, the angle of minimum deviation is 30°. The refractive index of the prism material is:',
    options: ['1.33', '1.5', '√2', '√3'],
    correctIndex: 2,
    explanation: 'μ = sin[(A + δm)/2] / sin(A/2) = sin 45° / sin 30° = √2.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-34',
    type: 'mcq',
    question: 'A thin prism of angle 4° is made of glass of refractive index 1.5. The angle of deviation produced is:',
    options: ['2°', '4°', '6°', '1°'],
    correctIndex: 0,
    explanation: 'For a thin prism δ = (μ − 1)A = 0.5 × 4° = 2°.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-35',
    type: 'mcq',
    question: 'When white light passes through a prism, which colour is deviated the most?',
    options: ['Red', 'Yellow', 'Green', 'Violet'],
    correctIndex: 3,
    explanation: 'Violet has the shortest wavelength and the highest refractive index, so it deviates the most. Red deviates the least.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-36',
    type: 'mcq',
    question: 'The dispersive power of a prism depends on:',
    options: [
      'The angle of the prism',
      'The material of the prism',
      'The angle of incidence',
      'The size of the prism'
    ],
    correctIndex: 1,
    explanation: 'ω = (μv − μr)/(μ − 1) involves only refractive indices, so it depends on the material alone.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-37',
    type: 'mcq',
    question: 'In the formation of a primary rainbow, the light undergoes inside a raindrop:',
    options: [
      'Two refractions and one internal reflection',
      'Two refractions and two internal reflections',
      'One refraction and one reflection',
      'Diffraction followed by refraction'
    ],
    correctIndex: 0,
    explanation: 'Primary rainbow: refraction on entry, one total internal reflection, refraction on exit. The secondary bow has two internal reflections.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-38',
    type: 'mcq',
    question: 'The intensity of Rayleigh scattered light is proportional to 1/λ⁴. If the wavelength of light is halved, the scattered intensity becomes:',
    options: ['2 times', '4 times', '16 times', '8 times'],
    correctIndex: 2,
    explanation: 'I ∝ 1/λ⁴, so for λ → λ/2 the intensity becomes 2⁴ = 16 times.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-39',
    type: 'mcq',
    question: 'The Sun appears red at sunrise and sunset because:',
    options: [
      'Red light is scattered the most',
      'Blue light is scattered away the most, so mainly red reaches the observer',
      'The atmosphere emits red light at that time',
      'Dispersion by clouds separates red light'
    ],
    correctIndex: 1,
    explanation: 'At sunrise and sunset sunlight travels a longer path in the atmosphere. Short wavelengths are scattered out and the longer red wavelengths reach us.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-40',
    type: 'mcq',
    question: 'An astronomical telescope has an objective of focal length 100 cm and an eyepiece of focal length 5 cm. The magnifying power in normal adjustment is:',
    options: ['5', '105', '500', '20'],
    correctIndex: 3,
    explanation: 'M = fo/fe = 100/5 = 20.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-41',
    type: 'mcq',
    question: 'The objective and eyepiece of an astronomical telescope have focal lengths 80 cm and 4 cm. The length of the telescope tube in normal adjustment is:',
    options: ['84 cm', '76 cm', '320 cm', '20 cm'],
    correctIndex: 0,
    explanation: 'In normal adjustment L = fo + fe = 80 + 4 = 84 cm.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-42',
    type: 'mcq',
    question: 'An astronomical telescope has fo = 50 cm and fe = 5 cm. If the final image is formed at the near point (D = 25 cm), the magnifying power is:',
    options: ['10', '15', '8', '12'],
    correctIndex: 3,
    explanation: 'M = (fo/fe)(1 + fe/D) = 10 × (1 + 5/25) = 12.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-43',
    type: 'mcq',
    question: 'The objective of an astronomical telescope is made of large aperture to:',
    options: [
      'Increase only the magnifying power',
      'Gather more light and increase the resolving power',
      'Reduce chromatic aberration',
      'Reduce the length of the telescope'
    ],
    correctIndex: 1,
    explanation: 'A large aperture collects more light, giving brighter images, and improves resolving power (resolving power ∝ aperture).',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-44',
    type: 'mcq',
    question: 'In a reflecting telescope the objective is a mirror rather than a lens mainly because mirrors:',
    options: [
      'Give a brighter image by absorbing light',
      'Are always lighter than lenses',
      'Are free from chromatic aberration and can be made with large apertures',
      'Produce an erect final image'
    ],
    correctIndex: 2,
    explanation: 'A mirror reflects all colours alike, so there is no chromatic aberration. Large mirrors can also be supported from behind.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-45',
    type: 'mcq',
    question: 'A compound microscope has an objective of focal length 2 cm and an eyepiece of focal length 5 cm. The tube length is 20 cm. The magnifying power with the final image at infinity (D = 25 cm) is approximately:',
    options: ['25', '100', '50', '10'],
    correctIndex: 2,
    explanation: 'M ≈ (L/fo)(D/fe) = (20/2)(25/5) = 10 × 5 = 50.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-46',
    type: 'mcq',
    question: 'For high magnifying power in a compound microscope, the objective and eyepiece should have:',
    options: [
      'Both small focal lengths',
      'Both large focal lengths',
      'Large fo and small fe',
      'Small fo and large fe'
    ],
    correctIndex: 0,
    explanation: 'M ≈ (L/fo)(D/fe), so small fo and small fe both increase the magnification.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-47',
    type: 'mcq',
    question: 'The final image formed by a compound microscope is:',
    options: [
      'Real and erect',
      'Real and inverted',
      'Virtual and erect',
      'Virtual and inverted'
    ],
    correctIndex: 3,
    explanation: 'The objective forms a real, inverted, magnified image. The eyepiece acts as a magnifier on it, so the final image is virtual and inverted with respect to the object.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-48',
    type: 'mcq',
    question: 'Myopia (short-sightedness) is corrected by using:',
    options: ['A convex lens', 'A concave lens', 'A cylindrical lens', 'A plano-convex lens'],
    correctIndex: 1,
    explanation: 'In myopia the image forms in front of the retina. A concave lens diverges the rays so that the image shifts back onto the retina.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-49',
    type: 'mcq',
    question: 'A person cannot see objects clearly closer than 50 cm. The power of the lens needed to read a book held at 25 cm is:',
    options: ['+2 D', '−2 D', '+4 D', '−4 D'],
    correctIndex: 0,
    explanation: 'u = −25 cm, v = −50 cm. 1/f = 1/v − 1/u = −1/50 + 1/25 = 1/50, so f = +50 cm and P = +2 D.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-50',
    type: 'mcq',
    question: 'The far point of a myopic person is 2 m from the eye. The power of the lens needed to see distant objects clearly is:',
    options: ['+0.5 D', '+2 D', '−0.5 D', '−2 D'],
    correctIndex: 2,
    explanation: 'The lens must form an image of a distant object at the far point: f = −2 m, so P = −0.5 D.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-51',
    type: 'mcq',
    question: 'Astigmatism of the eye is corrected using:',
    options: ['A concave lens', 'A cylindrical lens', 'A convex lens', 'A bifocal lens'],
    correctIndex: 1,
    explanation: 'Astigmatism arises because the cornea has different curvatures in different planes. A cylindrical lens compensates for it.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-52',
    type: 'mcq',
    question: 'Presbyopia occurs in old age mainly because:',
    options: [
      'The eyeball becomes elongated',
      'The eyeball becomes shorter',
      'The cornea becomes irregular',
      'The ciliary muscles weaken and the eye lens loses flexibility'
    ],
    correctIndex: 3,
    explanation: 'With age the power of accommodation reduces, so the near point recedes. Bifocal lenses are used for correction.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-53',
    type: 'mcq',
    question: 'The image formed on the retina of the human eye is:',
    options: [
      'Real and inverted',
      'Virtual and erect',
      'Real and erect',
      'Virtual and inverted'
    ],
    correctIndex: 0,
    explanation: 'The eye lens forms a real, inverted image on the retina, and the brain interprets it as erect.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-54',
    type: 'mcq',
    question: 'A simple microscope uses a convex lens of focal length 5 cm. If the final image is formed at the near point (D = 25 cm), the magnifying power is:',
    options: ['5', '6', '4', '30'],
    correctIndex: 1,
    explanation: 'M = 1 + D/f = 1 + 25/5 = 6.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-55',
    type: 'mcq',
    question: 'A glass convex lens (μ = 1.5) has focal length f in air. When it is completely immersed in water (μ = 4/3), its focal length becomes:',
    options: ['f', '2f', '3f', '4f'],
    correctIndex: 3,
    explanation: 'f_w/f_a = (μg − 1)/(μg/μw − 1) = 0.5/(9/8 − 1) = 0.5/0.125 = 4, so f_w = 4f.',
    difficulty: 'hard'
  },
  {
    id: 'ray-optics-56',
    type: 'mcq',
    question: 'Two identical convex lenses, each of focal length 20 cm, are placed 20 cm apart. The focal length of the combination is:',
    options: ['10 cm', '40 cm', '20 cm', '15 cm'],
    correctIndex: 2,
    explanation: '1/F = 1/f₁ + 1/f₂ − d/(f₁f₂) = 1/20 + 1/20 − 20/400 = 1/20, so F = 20 cm.',
    difficulty: 'hard'
  },
  {
    id: 'ray-optics-57',
    type: 'mcq',
    question: 'Chromatic aberration in a lens arises because:',
    options: [
      'The refractive index of the lens material varies with wavelength',
      'The aperture of the lens is large',
      'The surfaces of the lens are spherical',
      'Light undergoes diffraction at the edges'
    ],
    correctIndex: 0,
    explanation: 'Different colours have different refractive indices, so they focus at different points. This is chromatic aberration.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-58',
    type: 'mcq',
    question: 'Parabolic mirrors are used in reflecting telescopes and headlights to avoid:',
    options: [
      'Chromatic aberration',
      'Astigmatism',
      'Spherical aberration',
      'Diffraction'
    ],
    correctIndex: 2,
    explanation: 'A parabolic mirror brings all parallel rays, including marginal ones, to a single focus, which removes spherical aberration.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-59',
    type: 'mcq',
    question: 'For a glass-air interface, the critical angle is minimum for which colour?',
    options: ['Red', 'Violet', 'Yellow', 'Green'],
    correctIndex: 1,
    explanation: 'sin C = 1/μ. Violet has the highest μ, so its critical angle is the smallest.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-60',
    type: 'mcq',
    question: 'A ray of light falls normally on one face of a prism of angle 30° and just grazes the other face while emerging. The refractive index of the prism material is:',
    options: ['1.5', '√2', '√3', '2'],
    correctIndex: 3,
    explanation: 'With normal incidence r₁ = 0, so r₂ = A = 30°. Grazing emergence means r₂ equals the critical angle, so μ = 1/sin 30° = 2.',
    difficulty: 'hard'
  },
  {
    id: 'ray-optics-61',
    type: 'mcq',
    question: 'A concave lens always forms an image of a real object which is:',
    options: [
      'Real, inverted and diminished',
      'Virtual, erect and magnified',
      'Real, erect and magnified',
      'Virtual, erect and diminished'
    ],
    correctIndex: 3,
    explanation: 'A concave lens diverges the rays, so the image is always virtual, erect and diminished, between the object and the lens.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-62',
    type: 'mcq',
    question: 'A concave lens of focal length 20 cm forms an image of an object placed 20 cm from it. The image is:',
    options: [
      '10 cm from the lens on the same side as the object',
      '10 cm from the lens on the opposite side',
      '40 cm from the lens on the same side as the object',
      '20 cm from the lens on the opposite side'
    ],
    correctIndex: 0,
    explanation: '1/v = 1/f + 1/u = −1/20 − 1/20 = −1/10, so v = −10 cm. The image is virtual, on the same side as the object.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-63',
    type: 'mcq',
    question: 'A convex lens forms a real image of magnification −3 on a screen placed 40 cm from the lens. The focal length of the lens is:',
    options: ['40/3 cm', '30 cm', '10 cm', '4 cm'],
    correctIndex: 2,
    explanation: 'm = v/u = −3 with v = 40 gives u = −40/3 cm. 1/f = 1/v − 1/u = 1/40 + 3/40 = 1/10, so f = 10 cm.',
    difficulty: 'hard'
  },
  {
    id: 'ray-optics-64',
    type: 'mcq',
    question: 'Light incident on a transparent medium at 60° is refracted at 30°. The refractive index of the medium is:',
    options: ['√2', '√3', '1.5', '2'],
    correctIndex: 1,
    explanation: 'μ = sin 60° / sin 30° = (√3/2)/(1/2) = √3.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-65',
    type: 'mcq',
    question: 'Light of wavelength 600 nm in air enters glass of refractive index 1.5. Its wavelength in glass is:',
    options: ['400 nm', '900 nm', '600 nm', '300 nm'],
    correctIndex: 0,
    explanation: 'λ in the medium = λ_air/μ = 600/1.5 = 400 nm.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-66',
    type: 'mcq',
    question: 'A man walks towards a plane mirror at 2 m/s. The speed of his image relative to him is:',
    options: ['2 m/s', '8 m/s', '4 m/s', '0 m/s'],
    correctIndex: 2,
    explanation: 'The image moves towards the mirror at 2 m/s. Relative to the man the two approach each other at 2 + 2 = 4 m/s.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-67',
    type: 'mcq',
    question: 'An object is placed 10 cm from a concave mirror of radius of curvature 40 cm. The image is:',
    options: [
      'Real, inverted and magnified twice',
      'Virtual, erect and magnified twice',
      'Virtual, erect and half the size',
      'Real, inverted and of the same size'
    ],
    correctIndex: 1,
    explanation: 'f = −20 cm, u = −10 cm. 1/v = −1/20 + 1/10 = 1/20, so v = +20 cm (behind the mirror). m = −v/u = +2.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-68',
    type: 'mcq',
    question: 'When a concave mirror is immersed in water, its focal length:',
    options: [
      'Becomes 4/3 times',
      'Becomes 3/4 times',
      'Becomes double',
      'Remains unchanged'
    ],
    correctIndex: 3,
    explanation: 'Reflection does not depend on the medium, and f = R/2 for a mirror, so the focal length stays the same.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-69',
    type: 'mcq',
    question: 'The refractive index of the material of an equilateral prism is √3. The angle of minimum deviation is:',
    options: ['60°', '30°', '45°', '90°'],
    correctIndex: 0,
    explanation: 'sin[(60° + δ)/2] = √3 × sin 30° = √3/2, so (60° + δ)/2 = 60° and δ = 60°.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-70',
    type: 'mcq',
    question: 'A right-angled isosceles glass prism can turn a ray by 90° through total internal reflection because the critical angle of glass is:',
    options: ['Greater than 45°', 'Equal to 60°', 'Exactly 90°', 'Less than 45°'],
    correctIndex: 3,
    explanation: 'The ray hits the hypotenuse at 45°. For total internal reflection this must exceed the critical angle, so C < 45°.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-71',
    type: 'mcq',
    question: 'In the formation of a secondary rainbow, the number of internal reflections inside a raindrop is:',
    options: ['1', '3', '2', '0'],
    correctIndex: 2,
    explanation: 'The secondary rainbow involves two internal reflections, which is why it is fainter and has reversed colour order.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-72',
    type: 'mcq',
    question: 'A bird is 3 m above the surface of water. A fish in the water (μ = 4/3) looks at the bird. The apparent height of the bird above the water surface is:',
    options: ['2.25 m', '4 m', '3 m', '5 m'],
    correctIndex: 1,
    explanation: 'For an object in the rarer medium seen from the denser medium, apparent height = μ × real height = (4/3) × 3 = 4 m.',
    difficulty: 'hard'
  },
  {
    id: 'ray-optics-73',
    type: 'mcq',
    question: 'The power of a combination of two thin lenses in contact, having powers P₁ and P₂, is:',
    options: ['P₁ × P₂', 'P₁ / P₂', 'P₁ − P₂', 'P₁ + P₂'],
    correctIndex: 3,
    explanation: 'For thin lenses in contact 1/f = 1/f₁ + 1/f₂, so P = P₁ + P₂ (with signs).',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-74',
    type: 'mcq',
    question: 'A plano-convex lens (μ = 1.5) has a radius of curvature of 15 cm for the curved face. Its focal length is:',
    options: ['30 cm', '15 cm', '10 cm', '7.5 cm'],
    correctIndex: 0,
    explanation: '1/f = (μ − 1)(1/R) = 0.5/15 = 1/30, so f = 30 cm.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-75',
    type: 'mcq',
    question: 'A double concave lens of glass (μ = 1.5) has both radii of curvature equal to 20 cm. Its focal length is:',
    options: ['+20 cm', '−20 cm', '−40 cm', '−10 cm'],
    correctIndex: 1,
    explanation: '1/f = 0.5 × (1/(−20) − 1/(+20)) = −1/20, so f = −20 cm.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-76',
    type: 'mcq',
    question: 'The far point of a short-sighted person is 80 cm in front of the eye. The power of the lens required to correct this defect is:',
    options: ['+1.25 D', '−0.8 D', '−1.25 D', '+0.8 D'],
    correctIndex: 2,
    explanation: 'A concave lens must form the image of a distant object at 80 cm: f = −0.8 m, so P = −1/0.8 = −1.25 D.',
    difficulty: 'medium'
  },
  {
    id: 'ray-optics-77',
    type: 'mcq',
    question: 'Which of the following is true for a prism at the position of minimum deviation?',
    options: [
      'Angle of incidence equals the angle of emergence',
      'Angle of incidence is zero',
      'Angle of incidence is 90°',
      'Angle of emergence is zero'
    ],
    correctIndex: 0,
    explanation: 'At minimum deviation i = e and r₁ = r₂ = A/2.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-78',
    type: 'mcq',
    question: 'The graph between the angle of deviation (δ) and the angle of incidence (i) for a prism is:',
    options: [
      'A straight line with positive slope',
      'An inverted U-shaped curve with a maximum',
      'A hyperbola',
      'A U-shaped curve with a minimum'
    ],
    correctIndex: 3,
    explanation: 'As i increases, δ first decreases to a minimum value δm and then increases again.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-79',
    type: 'mcq',
    question: 'In the normal adjustment of an astronomical telescope, the final image is formed at:',
    options: [
      'The near point of the eye',
      'The focus of the objective',
      'Infinity',
      'A distance 2fe from the eyepiece'
    ],
    correctIndex: 2,
    explanation: 'In normal adjustment the intermediate image lies at the focus of the eyepiece, so the final image is at infinity and the eye is relaxed.',
    difficulty: 'easy'
  },
  {
    id: 'ray-optics-80',
    type: 'mcq',
    question: 'If the tube length of a compound microscope is increased while fo and fe are kept fixed, its magnifying power:',
    options: ['Decreases', 'Increases', 'Remains the same', 'Becomes zero'],
    correctIndex: 1,
    explanation: 'M ≈ (L/fo)(D/fe) is directly proportional to the tube length L, so M increases.',
    difficulty: 'medium'
  }
];
export default questions;