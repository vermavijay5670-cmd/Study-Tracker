import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  // ==================== MCQ (70) ====================
  {
    id: 'charges-fields-1',
    type: 'mcq',
    question: 'Electric charge is said to be "quantized" because',
    options: [
      'charge can only exist in a conductor',
      'charge on any object is always an integral multiple of the charge of an electron, e',
      'charge can take any continuous value',
      'charge is created and destroyed freely'
    ],
    correctIndex: 1,
    explanation: 'Quantization of charge means the total charge on any body is always an integral multiple of the elementary charge e (q = ne, n an integer), never a fractional value.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-2',
    type: 'mcq',
    question: 'At the macroscopic level, we usually ignore quantization of charge and treat it as continuous because',
    options: [
      'quantization does not actually exist',
      'the elementary charge e is extremely small compared to typical macroscopic charges, so discreteness is not observable',
      'charge is not actually quantized in conductors',
      'quantization applies only to insulators'
    ],
    correctIndex: 1,
    explanation: 'Since e ≈ 1.6 × 10⁻¹⁹ C is minuscule compared to charges we usually deal with (of order microcoulombs and higher), the granularity is undetectable and charge can be treated as a continuous variable.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-3',
    type: 'mcq',
    question: 'The law of conservation of charge states that',
    options: [
      'charge can be created but not destroyed',
      'the total charge of an isolated system remains constant, though charge can be transferred from one part to another',
      'positive and negative charges always exist in equal amounts',
      'charge can never move within a system'
    ],
    correctIndex: 1,
    explanation: 'Conservation of charge means the algebraic sum of positive and negative charges in an isolated system does not change with time, even though charge may be redistributed within the system.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-4',
    type: 'mcq',
    question: 'When a glass rod is rubbed with silk, the glass rod becomes positively charged. This happens because',
    options: [
      'protons are transferred from silk to glass',
      'electrons are transferred from the glass rod to the silk',
      'the glass rod gains extra electrons',
      'charge is created on the glass rod'
    ],
    correctIndex: 1,
    explanation: 'Rubbing does not create charge; it merely transfers electrons from one body to another. Glass loses electrons to silk, leaving it with a net positive charge, while silk becomes negatively charged.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-5',
    type: 'mcq',
    question: 'Coulomb\'s law describes the force between two point charges as',
    options: [
      'directly proportional to the product of charges and inversely proportional to distance',
      'directly proportional to the product of charges and inversely proportional to the square of the distance between them',
      'inversely proportional to the product of charges',
      'independent of the distance between them'
    ],
    correctIndex: 1,
    explanation: 'Coulomb\'s law: F = k q1q2/r², the force is directly proportional to the product of the magnitudes of the two charges and inversely proportional to the square of the separation.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-6',
    type: 'mcq',
    question: 'The value of the Coulomb constant k (= 1/4πε₀) in SI units is approximately',
    options: ['9 × 10⁹ N m²/C²', '8.85 × 10⁻¹² N m²/C²', '6.67 × 10⁻¹¹ N m²/C²', '1.6 × 10⁻¹⁹ N m²/C²'],
    correctIndex: 0,
    explanation: 'k = 1/(4πε₀) ≈ 9 × 10⁹ N m²/C² in SI units (free space), a large value reflecting the strength of the electrostatic force compared to gravity.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-7',
    type: 'mcq',
    question: 'Coulomb\'s law in vector form correctly shows that the force on charge q1 due to q2 is directed',
    options: [
      'along the line joining the two charges, repulsive for like charges and attractive for unlike charges',
      'always perpendicular to the line joining the charges',
      'always attractive regardless of the sign of charges',
      'in a direction independent of the position of the charges'
    ],
    correctIndex: 0,
    explanation: 'The electrostatic force always acts along the line joining the two point charges; like charges repel each other while unlike charges attract, consistent with the vector form of Coulomb\'s law.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-8',
    type: 'mcq',
    question: 'Coulomb\'s law is applicable strictly to',
    options: [
      'any two charged bodies regardless of size',
      'point charges, or charges whose sizes are much smaller than the distance between them',
      'only charges of equal magnitude',
      'only charges placed in a vacuum'
    ],
    correctIndex: 1,
    explanation: 'Coulomb\'s law in its simple form F = kq1q2/r² applies exactly to point charges; for extended bodies it is only a good approximation when their sizes are negligible compared to the separation.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-9',
    type: 'mcq',
    question: 'When a dielectric medium (relative permittivity εr) replaces vacuum between two point charges, the force between them',
    options: [
      'increases by a factor of εr',
      'decreases by a factor of εr',
      'remains unchanged',
      'becomes zero'
    ],
    correctIndex: 1,
    explanation: 'In a medium, F = q1q2/(4πε₀εr r²), so the force is reduced by a factor of εr (the relative permittivity/dielectric constant) compared to the force in vacuum.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-10',
    type: 'mcq',
    question: 'The principle of superposition of electric forces states that',
    options: [
      'only the nearest charge exerts a force on a given charge',
      'the total force on a charge due to several other charges is the vector sum of the forces due to each charge individually, as if the others were absent',
      'forces between charges cancel out when more than two charges are present',
      'total force is the scalar sum of the magnitude of individual forces'
    ],
    correctIndex: 1,
    explanation: 'The superposition principle states that the net force on any charge due to a group of charges is the vector sum of the pairwise Coulomb forces, each computed independently.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-11',
    type: 'mcq',
    question: 'Electric field intensity at a point is defined as',
    options: [
      'the force experienced by any charge placed at that point',
      'the force per unit positive test charge placed at that point, in the limit the test charge is vanishingly small',
      'the potential energy of a charge at that point',
      'the total charge enclosed in a region around that point'
    ],
    correctIndex: 1,
    explanation: 'Electric field E = F/q0, defined as the force per unit positive test charge, taken in the limit q0 → 0 so that the test charge itself does not disturb the source charge distribution.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-12',
    type: 'mcq',
    question: 'The SI unit of electric field is',
    options: ['N/C or V/m', 'C/N', 'N·C', 'J/C²'],
    correctIndex: 0,
    explanation: 'Electric field is force per unit charge, giving units of newton per coulomb (N/C), which is dimensionally and numerically equivalent to volt per metre (V/m).',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-13',
    type: 'mcq',
    question: 'The test charge used to define electric field should ideally be',
    options: [
      'as large as possible for accurate measurement',
      'vanishingly small, so it does not disturb the configuration of the source charges',
      'negative in sign only',
      'equal in magnitude to the source charge'
    ],
    correctIndex: 1,
    explanation: 'A large test charge could exert its own force on the source charges and alter their distribution, changing the very field being measured, so the test charge must be taken as infinitesimally small.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-14',
    type: 'mcq',
    question: 'Electric field lines around an isolated positive point charge are',
    options: [
      'circles around the charge',
      'straight lines radiating outward from the charge',
      'straight lines converging into the charge',
      'parallel straight lines'
    ],
    correctIndex: 1,
    explanation: 'For an isolated positive charge, field lines point radially outward in all directions, since the field itself points away from a positive source charge.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-15',
    type: 'mcq',
    question: 'Which of the following is NOT a correct property of electric field lines?',
    options: [
      'They start from positive charges and end on negative charges (or at infinity)',
      'Two field lines can never intersect each other',
      'Field lines are always closed loops, like magnetic field lines',
      'The tangent to a field line at any point gives the direction of the electric field at that point'
    ],
    correctIndex: 2,
    explanation: 'Unlike magnetic field lines, electrostatic field lines are never closed loops — they originate on positive charges (or infinity) and terminate on negative charges (or infinity), reflecting the conservative nature of the electrostatic field.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-16',
    type: 'mcq',
    question: 'The reason two electric field lines never intersect each other is that',
    options: [
      'field lines repel each other like charges',
      'if they intersected, the field at that point would have two different directions, which is not possible for a well-defined field',
      'field lines are always straight',
      'intersecting lines would represent zero field'
    ],
    correctIndex: 1,
    explanation: 'At any point in space, the electric field has a single, unique direction (the resultant of contributions from all charges). If two field lines crossed, the field at the intersection would have two directions simultaneously, contradicting the definition of a field.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-17',
    type: 'mcq',
    question: 'Crowded (closely spaced) electric field lines in a region indicate',
    options: [
      'a weak electric field in that region',
      'a strong electric field in that region',
      'zero electric field in that region',
      'the presence of a magnetic field'
    ],
    correctIndex: 1,
    explanation: 'The density of field lines (number of lines per unit cross-sectional area) is proportional to the strength of the electric field; closely spaced lines indicate a stronger field.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-18',
    type: 'mcq',
    question: 'An electric dipole consists of',
    options: [
      'two equal and like point charges separated by a small distance',
      'two equal and opposite point charges separated by a small distance',
      'a single charge with two poles',
      'a charge distributed over a sphere'
    ],
    correctIndex: 1,
    explanation: 'An electric dipole is defined as a pair of equal and opposite charges (+q and -q) separated by a small distance 2a.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-19',
    type: 'mcq',
    question: 'The dipole moment of an electric dipole is defined as a vector of magnitude p = q(2a), directed',
    options: [
      'from the positive charge to the negative charge',
      'from the negative charge to the positive charge',
      'perpendicular to the line joining the charges',
      'along the external electric field'
    ],
    correctIndex: 1,
    explanation: 'By convention, the electric dipole moment vector p points from the negative charge to the positive charge, along the axis of the dipole, with magnitude p = q × 2a.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-20',
    type: 'mcq',
    question: 'The electric field due to a short dipole at a point on its axial line, at large distance r, falls off as',
    options: ['1/r', '1/r²', '1/r³', '1/r⁴'],
    correctIndex: 2,
    explanation: 'For an ideal (short) dipole, the field at large distances on the axial line varies as 1/r³, decreasing faster than the field of a single point charge (which falls as 1/r²).',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-21',
    type: 'mcq',
    question: 'The electric field due to a short dipole at a point on its axial line is how many times stronger than the field at an equatorial point at the same distance r?',
    options: ['Equal', 'Half', 'Twice', 'Four times'],
    correctIndex: 2,
    explanation: 'E_axial = 2kp/r³ and E_equatorial = kp/r³ for a short dipole, so the axial field is twice the equatorial field at the same distance.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-22',
    type: 'mcq',
    question: 'When an electric dipole is placed in a uniform external electric field, it experiences',
    options: [
      'a net force but no torque',
      'a torque but no net force (if not aligned with the field)',
      'both a net force and a torque',
      'neither a net force nor a torque'
    ],
    correctIndex: 1,
    explanation: 'In a uniform field, the equal and opposite forces on the two charges of the dipole cancel out (net force = 0), but if the dipole is not aligned with the field, these forces form a couple, producing a net torque τ = p × E.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-23',
    type: 'mcq',
    question: 'When an electric dipole is placed in a non-uniform external electric field, it generally experiences',
    options: [
      'no force and no torque',
      'only a torque, never a net force',
      'both a net force and a torque (in general)',
      'only a net force, never a torque'
    ],
    correctIndex: 2,
    explanation: 'In a non-uniform field, the forces on the two charges of the dipole are unequal in magnitude (since the field strength differs at the two charge locations), resulting in both a net force and a torque, in general.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-24',
    type: 'mcq',
    question: 'The torque experienced by a dipole of moment p in a uniform field E is given by τ = pE sinθ, where θ is the angle between p and E. This torque is maximum when',
    options: ['θ = 0°', 'θ = 90°', 'θ = 180°', 'θ = 45°'],
    correctIndex: 1,
    explanation: 'Torque magnitude is τ = pE sinθ, which is maximum when sinθ = 1, i.e., θ = 90°, when the dipole moment is perpendicular to the field.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-25',
    type: 'mcq',
    question: 'A dipole is in stable equilibrium in a uniform electric field when its dipole moment is',
    options: [
      'perpendicular to the field',
      'parallel and in the same direction as the field',
      'antiparallel to the field (opposite direction)',
      'at any arbitrary angle to the field'
    ],
    correctIndex: 1,
    explanation: 'The potential energy of a dipole is U = -pE cosθ, which is minimum (most stable) when θ = 0°, i.e., when p is aligned parallel to E.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-26',
    type: 'mcq',
    question: 'A dipole is in unstable equilibrium in a uniform electric field when its dipole moment is',
    options: [
      'parallel to the field',
      'antiparallel to the field (opposite direction)',
      'perpendicular to the field',
      'zero'
    ],
    correctIndex: 1,
    explanation: 'When θ = 180°, potential energy U = -pE cos180° = +pE is maximum, corresponding to unstable equilibrium; the dipole is aligned opposite to the field.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-27',
    type: 'mcq',
    question: 'Electric flux through a surface is defined as',
    options: [
      'the total charge enclosed by the surface',
      'the dot product of electric field and the area vector, summed (integrated) over the surface',
      'the total electric field at every point on the surface added algebraically',
      'the force experienced by the surface due to the field'
    ],
    correctIndex: 1,
    explanation: 'Electric flux ΦE through a surface is defined as the surface integral of E·dA, i.e., the component of the electric field normal to the surface element, integrated over the entire surface.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-28',
    type: 'mcq',
    question: 'The SI unit of electric flux is',
    options: ['N/C', 'N m²/C', 'C/m²', 'N/m'],
    correctIndex: 1,
    explanation: 'Since flux is E (in N/C) times area (in m²), its unit is N m²/C (equivalently, V·m).',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-29',
    type: 'mcq',
    question: 'Gauss\'s law relates the electric flux through a closed surface to',
    options: [
      'the electric field at the centre of the surface',
      'the total charge enclosed within that closed surface, divided by ε₀',
      'the surface area of the closed surface only',
      'the distance from the surface to the nearest charge'
    ],
    correctIndex: 1,
    explanation: 'Gauss\'s law states ΦE = qenclosed/ε₀ — the total electric flux through any closed surface (Gaussian surface) equals the net charge enclosed by that surface, divided by ε₀.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-30',
    type: 'mcq',
    question: 'According to Gauss\'s law, charges located outside a closed Gaussian surface',
    options: [
      'contribute significantly to the net flux through the surface',
      'contribute zero net flux through the surface, though they may still affect the electric field at points on the surface',
      'always cancel the effect of enclosed charges',
      'must be included when calculating enclosed charge'
    ],
    correctIndex: 1,
    explanation: 'A charge outside the Gaussian surface contributes zero net flux (whatever flux enters the surface due to it eventually leaves), even though it may still contribute to the field at individual points on the surface.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-31',
    type: 'mcq',
    question: 'Gauss\'s law is most useful for calculating electric fields when the charge distribution has',
    options: [
      'no particular symmetry',
      'spherical, cylindrical, or planar symmetry',
      'random and irregular shape',
      'zero net charge'
    ],
    correctIndex: 1,
    explanation: 'Gauss\'s law becomes a powerful computational tool specifically when the charge distribution possesses enough symmetry (spherical, cylindrical, or planar) to choose a Gaussian surface on which E is either constant or zero.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-32',
    type: 'mcq',
    question: 'The electric field due to an infinite plane sheet of charge with uniform surface charge density σ is',
    options: [
      'σ/ε₀, independent of the distance from the sheet',
      'σ/2ε₀, independent of the distance from the sheet',
      'σ/4πε₀r², decreasing with distance',
      'zero everywhere'
    ],
    correctIndex: 1,
    explanation: 'Using Gauss\'s law with a cylindrical (pillbox) Gaussian surface, the field due to an infinite plane sheet of charge is E = σ/2ε₀, uniform and independent of distance from the sheet.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-33',
    type: 'mcq',
    question: 'The electric field just outside the surface of a charged conductor with surface charge density σ is',
    options: ['σ/ε₀, directed normal to the surface', 'σ/2ε₀', 'zero', 'σ/4πε₀'],
    correctIndex: 0,
    explanation: 'For a conductor, the field just outside the surface is E = σ/ε₀ (normal to the surface), which is twice the field of an isolated infinite sheet, because a conductor\'s field lines emanate only outward (none inside).',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-34',
    type: 'mcq',
    question: 'The electric field inside a uniformly charged thin spherical shell (charge on the surface only) is',
    options: [
      'maximum at the centre',
      'zero everywhere inside the shell',
      'equal to the field at the surface',
      'directed radially inward'
    ],
    correctIndex: 1,
    explanation: 'By Gauss\'s law, a Gaussian sphere drawn inside the shell encloses zero charge, so the electric field inside a uniformly charged thin spherical shell is zero everywhere.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-35',
    type: 'mcq',
    question: 'Outside a uniformly charged thin spherical shell of total charge Q and radius R (at distance r > R from the centre), the electric field behaves as if',
    options: [
      'the shell did not exist',
      'the entire charge Q were concentrated at the centre of the shell',
      'the field were zero',
      'the field increased linearly with r'
    ],
    correctIndex: 1,
    explanation: 'For r > R, Gauss\'s law gives E = kQ/r², exactly as though the total charge Q were a point charge located at the centre of the shell.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-36',
    type: 'mcq',
    question: 'The electric field inside a uniformly charged solid non-conducting sphere at a distance r from the centre (r < R) is proportional to',
    options: ['1/r²', 'r', '1/r', 'r²'],
    correctIndex: 1,
    explanation: 'Inside a uniformly charged solid sphere, applying Gauss\'s law with enclosed charge proportional to r³ (volume) gives E ∝ r, increasing linearly from zero at the centre to a maximum at the surface.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-37',
    type: 'mcq',
    question: 'The electric field due to an infinitely long straight uniformly charged wire (linear charge density λ) at perpendicular distance r from the wire is',
    options: ['λ/2πε₀r, decreasing with distance', 'λ/2πε₀r², decreasing with distance squared', 'constant, independent of r', 'λ/4πε₀r'],
    correctIndex: 0,
    explanation: 'Using a cylindrical Gaussian surface coaxial with the wire, Gauss\'s law gives E = λ/(2πε₀r), which decreases as 1/r with perpendicular distance from an infinite line charge.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-38',
    type: 'mcq',
    question: 'A point charge q is placed exactly at the centre of a cube of side a. The electric flux through one face of the cube is',
    options: ['q/ε₀', 'q/6ε₀', 'q/2ε₀', 'q/3ε₀'],
    correctIndex: 1,
    explanation: 'By symmetry, the total flux q/ε₀ through the closed cube is equally distributed among its 6 identical faces, giving q/6ε₀ through each face.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-39',
    type: 'mcq',
    question: 'If the size of a Gaussian surface is doubled while keeping the enclosed charge constant, the total electric flux through it',
    options: [
      'doubles',
      'remains the same, since flux depends only on enclosed charge, not on the size or shape of the surface',
      'becomes one-fourth',
      'becomes zero'
    ],
    correctIndex: 1,
    explanation: 'According to Gauss\'s law, total flux through a closed surface depends solely on the enclosed charge (qenc/ε₀), and is completely independent of the size or shape of the Gaussian surface chosen.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-40',
    type: 'mcq',
    question: 'For a system of continuous charge distribution, the concept of "charge density" is introduced because',
    options: [
      'individual point charges cannot be identified separately, so charge per unit length/area/volume gives a more useful description',
      'charge no longer exists in such systems',
      'Coulomb\'s law becomes invalid for continuous distributions',
      'the total charge becomes infinite'
    ],
    correctIndex: 0,
    explanation: 'For continuous distributions, we describe the charge using densities (linear λ, surface σ, or volume ρ) since it is impractical to track discrete elementary charges individually, and this allows Coulomb\'s law to be applied via integration.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-41',
    type: 'mcq',
    question: 'Linear charge density λ has SI units of',
    options: ['C', 'C/m', 'C/m²', 'C/m³'],
    correctIndex: 1,
    explanation: 'Linear charge density is charge per unit length, so its SI unit is coulomb per metre (C/m).',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-42',
    type: 'mcq',
    question: 'Surface charge density σ has SI units of',
    options: ['C/m', 'C/m²', 'C/m³', 'C'],
    correctIndex: 1,
    explanation: 'Surface charge density is charge per unit area, with SI unit coulomb per square metre (C/m²).',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-43',
    type: 'mcq',
    question: 'Volume charge density ρ has SI units of',
    options: ['C/m', 'C/m²', 'C/m³', 'C·m'],
    correctIndex: 2,
    explanation: 'Volume charge density is charge per unit volume, with SI unit coulomb per cubic metre (C/m³).',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-44',
    type: 'mcq',
    question: 'Two point charges attract each other with a certain force in air. If the same two charges are now placed in a medium of dielectric constant K (K > 1) at the same separation, the force between them',
    options: [
      'increases K times',
      'decreases to 1/K of the original value',
      'remains the same',
      'becomes zero'
    ],
    correctIndex: 1,
    explanation: 'In a dielectric medium, F = kq1q2/(Kr²), so the force reduces by a factor of K compared to the force in vacuum/air, since K > 1 weakens the effective force between charges.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-45',
    type: 'mcq',
    question: 'Which of the following statements about electric charge is correct?',
    options: [
      'Charge is affected by the motion of the charged body (relativistic mass-like effect)',
      'Charge is invariant — it does not change with the speed of the charged body, unlike mass',
      'Charge depends on the reference frame of the observer',
      'Charge increases as the speed of the body approaches the speed of light'
    ],
    correctIndex: 1,
    explanation: 'Unlike relativistic mass, electric charge is an invariant quantity — the charge of a body remains the same regardless of its speed or the reference frame from which it is observed.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-46',
    type: 'mcq',
    question: 'Charge is described as "additive" because',
    options: [
      'charges of the same sign always add up to zero',
      'the total charge of a system is the algebraic sum (with due regard to sign) of all individual charges present',
      'only positive charges can be added together',
      'charge cannot be summed across different objects'
    ],
    correctIndex: 1,
    explanation: 'Additivity of charge means the net charge of a system of charges is obtained simply by algebraically adding the individual charges, taking their signs into account.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-47',
    type: 'mcq',
    question: 'An object is said to be electrically neutral when',
    options: [
      'it has no protons or electrons',
      'the total positive charge exactly equals the total negative charge it contains',
      'it has only neutrons',
      'it cannot be charged by rubbing'
    ],
    correctIndex: 1,
    explanation: 'A neutral object contains equal amounts of positive charge (protons) and negative charge (electrons), so the net charge is zero, though both types of charge are present.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-48',
    type: 'mcq',
    question: 'The three basic methods of charging an object are',
    options: [
      'friction, conduction, and induction',
      'friction, radiation, and convection',
      'conduction, convection, and reflection',
      'induction, reflection, and radiation'
    ],
    correctIndex: 0,
    explanation: 'A body can become charged by friction (rubbing), by conduction (direct contact with an already-charged body), or by induction (without direct contact, through redistribution of charge in a nearby body).',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-49',
    type: 'mcq',
    question: 'Charging a neutral conductor by induction, without touching it with a charged body, results in the conductor acquiring a net charge that is',
    options: [
      'the same sign as the inducing charge',
      'opposite in sign to the inducing charge (when the induced charge is grounded and then isolated appropriately)',
      'exactly zero always',
      'always positive'
    ],
    correctIndex: 1,
    explanation: 'In the standard induction charging process (bringing a charged rod near, grounding the far side, then removing the ground and the rod), the conductor ends up with a net charge opposite in sign to that of the inducing (charged) body.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-50',
    type: 'mcq',
    question: 'The electric field lines due to two equal and opposite point charges (an electric dipole) are',
    options: [
      'straight radial lines from each charge with no connection between them',
      'curved lines starting on the positive charge and curving around to end on the negative charge',
      'circular loops around the midpoint',
      'parallel straight lines'
    ],
    correctIndex: 1,
    explanation: 'For a dipole, field lines originate on the positive charge and curve through space to terminate on the negative charge, forming the characteristic dipole field-line pattern.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-51',
    type: 'mcq',
    question: 'The electric field lines between two oppositely charged parallel plates (as in a parallel plate capacitor, ignoring edge effects) are',
    options: [
      'curved and non-uniform',
      'straight, parallel, and equally spaced, indicating a uniform field',
      'radiating outward from the plates',
      'circular around the plates'
    ],
    correctIndex: 1,
    explanation: 'Away from the edges, the field between two oppositely charged parallel plates is uniform, represented by straight, equally spaced, parallel field lines running from the positive to the negative plate.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-52',
    type: 'mcq',
    question: 'Which statement about the number of electric field lines emanating from or terminating on a charge is correct?',
    options: [
      'The number of field lines is arbitrary and unrelated to the magnitude of charge',
      'The number of field lines associated with a charge is (by convention) taken proportional to the magnitude of the charge',
      'Every charge, regardless of magnitude, has exactly the same number of field lines',
      'Field lines exist only for charges greater than 1 coulomb'
    ],
    correctIndex: 1,
    explanation: 'By convention, the number of field lines drawn originating from or ending on a charge is taken to be proportional to the magnitude of that charge, allowing field line density to represent field strength consistently.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-53',
    type: 'mcq',
    question: 'Two charges of equal magnitude, +q and +q, are placed at a distance d apart. The point on the line joining them where the net electric field is zero lies',
    options: ['exactly at the midpoint of the two charges', 'closer to one of the charges, not at the midpoint', 'outside the line segment joining the charges', 'at infinity only'],
    correctIndex: 0,
    explanation: 'For two equal like charges, by symmetry, the fields due to each charge cancel exactly at the midpoint between them, since both charges are equal in magnitude.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-54',
    type: 'mcq',
    question: 'For two unlike point charges +q and -2q separated by a distance d, the point of zero net electric field on the line joining them (extended, if needed) lies',
    options: [
      'exactly at the midpoint',
      'outside the segment, closer to the smaller charge +q',
      'outside the segment, closer to the larger charge -2q',
      'nowhere; zero field is not possible for unlike charges'
    ],
    correctIndex: 1,
    explanation: 'For unlike charges of different magnitude, the null point lies outside the segment joining them, on the side of the smaller-magnitude charge, where the fields from the two charges can be made to point in opposite directions and cancel.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-55',
    type: 'mcq',
    question: 'A charged particle is placed in a region of uniform electric field with no other forces acting on it. Its trajectory (if given an initial velocity perpendicular to the field) will be',
    options: ['a straight line', 'a circle', 'a parabola, similar to projectile motion', 'an ellipse'],
    correctIndex: 2,
    explanation: 'A uniform field produces constant acceleration on the charge, analogous to gravity in projectile motion; with an initial velocity perpendicular to this constant force, the trajectory is a parabola.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-56',
    type: 'mcq',
    question: 'The electric field due to a point charge q at a distance r, when r approaches zero, mathematically',
    options: [
      'approaches zero',
      'tends to infinity, revealing a limitation of treating charge as a true point',
      'remains finite and constant',
      'becomes negative'
    ],
    correctIndex: 1,
    explanation: 'Since E = kq/r², as r → 0, the field diverges to infinity, which is a known idealization/limitation of the point-charge model rather than a physically realizable situation.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-57',
    type: 'mcq',
    question: 'Electrostatic forces obey Newton\'s third law, meaning',
    options: [
      'the force charge A exerts on charge B is unrelated to the force B exerts on A',
      'the force exerted by charge A on charge B is equal in magnitude and opposite in direction to the force exerted by B on A',
      'only one of the two charges experiences a force',
      'the forces are always in the same direction'
    ],
    correctIndex: 1,
    explanation: 'Coulomb forces are consistent with Newton\'s third law: the force each charge exerts on the other is equal in magnitude and opposite in direction, forming an action-reaction pair.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-58',
    type: 'mcq',
    question: 'The electrostatic force between two charges, unlike gravitational force between two masses, can be',
    options: [
      'only attractive',
      'only repulsive',
      'either attractive or repulsive, depending on the signs of the charges',
      'zero at all separations'
    ],
    correctIndex: 2,
    explanation: 'Gravity is always attractive, but electrostatic force can be attractive (unlike charges) or repulsive (like charges), a key qualitative difference between the two forces despite their similar 1/r² form.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-59',
    type: 'mcq',
    question: 'When comparing the strength of gravitational and electrostatic forces between two elementary particles like two electrons, we find that',
    options: [
      'gravitational force is much stronger than electrostatic force',
      'electrostatic force is enormously stronger than gravitational force',
      'both forces are exactly equal in magnitude',
      'gravitational force is exactly zero between electrons'
    ],
    correctIndex: 1,
    explanation: 'The electrostatic force between two electrons is many orders of magnitude (about 10^42 times) stronger than the gravitational force between them, illustrating the relative weakness of gravity at the particle level.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-60',
    type: 'mcq',
    question: 'Consider two identical small conducting spheres carrying charges q1 and q2, brought into contact and then separated. After separation, each sphere carries a charge of',
    options: ['q1 and q2 (unchanged)', '(q1 + q2)/2 each', 'q1 + q2 on one sphere and zero on the other', 'zero on both spheres'],
    correctIndex: 1,
    explanation: 'Since the spheres are identical, when brought into contact, the total charge (q1 + q2) redistributes equally between them due to symmetry, so each ends up with (q1+q2)/2 after separation.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-61',
    type: 'mcq',
    question: 'A charge Q is placed at the centre of a Gaussian sphere. If a second charge q is placed just outside the sphere (not enclosed), the total electric flux through the Gaussian sphere is',
    options: ['(Q+q)/ε₀', 'Q/ε₀, unaffected by q', 'q/ε₀', 'zero'],
    correctIndex: 1,
    explanation: 'Gauss\'s law depends only on the enclosed charge; since q lies outside the Gaussian surface, it contributes zero net flux, so the total flux remains Q/ε₀ regardless of q\'s presence outside.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-62',
    type: 'mcq',
    question: 'A hollow conducting sphere is given some positive charge. The charge distributes itself',
    options: [
      'uniformly throughout the volume of the sphere',
      'entirely on the outer surface of the conductor',
      'entirely at the exact centre of the sphere',
      'equally between the inner and outer surfaces'
    ],
    correctIndex: 1,
    explanation: 'For a conductor in electrostatic equilibrium, excess charge resides entirely on the outer surface, since the interior electric field must be zero and any excess charge distributes to the boundary (consistent with the shell theorem and Gauss\'s law).',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-63',
    type: 'mcq',
    question: 'Inside the material of a charged conductor in electrostatic equilibrium, the electric field is',
    options: [
      'maximum',
      'zero',
      'equal to the field outside',
      'directed radially inward always'
    ],
    correctIndex: 1,
    explanation: 'In electrostatic equilibrium, free charges inside a conductor rearrange until the internal electric field becomes zero everywhere within the conducting material.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-64',
    type: 'mcq',
    question: 'The electric field just outside the surface of a charged conductor is always',
    options: [
      'tangential to the surface',
      'zero',
      'perpendicular (normal) to the surface',
      'at 45° to the surface'
    ],
    correctIndex: 2,
    explanation: 'If the field had a tangential component just outside the surface, charges on the conductor\'s surface would experience a force along the surface and move until equilibrium is restored; hence in equilibrium the field is always perpendicular to the surface.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-65',
    type: 'mcq',
    question: 'Electric flux is a scalar quantity, but it is calculated using vectors (E and area vector dA) because',
    options: [
      'flux is the dot (scalar) product of these two vectors, which yields a scalar result',
      'flux is a coincidental name for a vector quantity',
      'flux equals the cross product of E and dA',
      'flux has direction associated with it'
    ],
    correctIndex: 0,
    explanation: 'Flux ΦE = ∫E·dA is defined via the dot product of the field vector and the area vector, and a dot product of two vectors always yields a scalar quantity.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-66',
    type: 'mcq',
    question: 'For a closed surface placed in a uniform external electric field with no charge enclosed inside, the total electric flux through the surface is',
    options: [
      'always positive',
      'always negative',
      'zero, since as much flux enters the surface as leaves it',
      'infinite'
    ],
    correctIndex: 2,
    explanation: 'When no net charge is enclosed, whatever field lines enter the closed surface must also exit it (they cannot terminate inside without a charge to end on), so the net flux is exactly zero.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-67',
    type: 'mcq',
    question: 'Gauss\'s law is a consequence of and is fully equivalent to',
    options: ['Newton\'s law of gravitation', 'Coulomb\'s law and the principle of superposition', 'Ohm\'s law', 'Faraday\'s law of induction'],
    correctIndex: 1,
    explanation: 'Gauss\'s law can be derived from Coulomb\'s law combined with the principle of superposition for a system of charges, and the two formulations (Coulomb\'s law and Gauss\'s law) are mathematically equivalent for electrostatics.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-68',
    type: 'mcq',
    question: 'For the purpose of applying Gauss\'s law, an appropriate Gaussian surface should be chosen such that',
    options: [
      'it passes exactly through the source charges',
      'the electric field is either constant in magnitude and known direction over parts of the surface, or zero, exploiting the symmetry of the charge distribution',
      'it always has to be a sphere',
      'it must always be very small'
    ],
    correctIndex: 1,
    explanation: 'A well-chosen Gaussian surface exploits the symmetry of the problem so that E is either constant (and can be pulled out of the integral) or zero over relevant portions of the surface, simplifying the flux calculation considerably.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-69',
    type: 'mcq',
    question: 'A small metal ball is charged and suspended near a large charged sphere with the same sign of charge. The small ball will experience',
    options: [
      'an attractive force always',
      'a repulsive force pushing it away from the large sphere',
      'no force at all',
      'a force perpendicular to the line joining them'
    ],
    correctIndex: 1,
    explanation: 'Like charges repel; since both bodies carry the same sign of charge, the small ball experiences a repulsive electrostatic force away from the large sphere, consistent with Coulomb\'s law.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-70',
    type: 'mcq',
    question: 'The physical significance of the constant ε₀ (permittivity of free space) in Coulomb\'s law is that it',
    options: [
      'has no physical meaning, it is just a mathematical constant',
      'characterizes the ability of vacuum to permit (or "permit-tivity" of) electric field lines / electrostatic interactions',
      'represents the charge of an electron',
      'is equal to the speed of light'
    ],
    correctIndex: 1,
    explanation: 'The permittivity of free space, ε₀, is a fundamental constant that characterizes how the vacuum responds to (or "permits") electric fields, and it appears throughout electrostatics, including in Coulomb\'s law and Gauss\'s law.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'charges-fields-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Charge is a scalar quantity.\nReason (R): Charge has only magnitude and sign (positive or negative), and charges add up algebraically rather than by vector rules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Charge is indeed a scalar because it is described completely by magnitude and sign, and multiple charges combine by simple algebraic addition, not vector addition — R correctly explains A.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Two electric field lines can never cross each other.\nReason (R): If they crossed, the electric field at the point of intersection would have two different directions simultaneously, which is physically impossible for a well-defined vector field.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the field at any point must have one unique direction, crossing field lines would imply two directions at the same point, which cannot happen — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-73',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field inside a uniformly charged spherical shell is zero.\nReason (R): A Gaussian surface drawn inside the shell encloses no charge, and by Gauss\'s law the flux (and hence the field, by symmetry) through it is zero.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since all the shell\'s charge resides on its surface, any Gaussian sphere drawn strictly inside encloses zero charge, and by symmetry this forces the field to be zero everywhere inside — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-74',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field just outside a charged conductor\'s surface is perpendicular to the surface.\nReason (R): If the field had a component along the surface, free charges on the conductor would experience a force along the surface and continue moving, contradicting the assumption of electrostatic equilibrium.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'In electrostatic equilibrium, any tangential field component would cause continued charge motion, so equilibrium requires the field to be strictly normal to the conductor\'s surface — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-75',
    type: 'assertion-reason',
    question: 'Assertion (A): A dipole placed in a uniform electric field experiences a torque but no net translational force.\nReason (R): The equal and opposite forces on the two charges of the dipole in a uniform field cancel out, but they act at different points, producing a couple.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'In a uniform field, the two equal and opposite forces exactly cancel in magnitude and direction, giving zero net force, but since they act at separated points, they form a couple producing a torque — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Coulomb\'s law and Newton\'s law of gravitation have a similar mathematical form (inverse square law).\nReason (R): Both electrostatic and gravitational forces are always attractive in nature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — both follow an inverse-square dependence on distance. But R is false — gravitational force is always attractive, while electrostatic force can be either attractive or repulsive depending on the charge signs.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-77',
    type: 'assertion-reason',
    question: 'Assertion (A): The total electric flux through a closed surface is independent of the size and shape of that surface.\nReason (R): The flux depends only on the total charge enclosed within the surface, as given by Gauss\'s law.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'By Gauss\'s law, ΦE = qenc/ε₀ depends solely on the enclosed charge, regardless of the size or shape of the Gaussian surface, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-78',
    type: 'assertion-reason',
    question: 'Assertion (A): A charge kept outside a closed surface contributes zero net flux through that surface.\nReason (R): Any field line from an external charge that enters the closed surface must also exit it, so the net contribution to flux from that charge sums to zero.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A field line entering the surface contributes negative flux at entry and equal positive flux at exit, cancelling exactly — R correctly explains why external charges contribute zero net flux.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-79',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field due to an infinite plane sheet of charge does not depend on the distance from the sheet.\nReason (R): Field lines from an infinite sheet are parallel straight lines perpendicular to the sheet, and by symmetry the field magnitude cannot vary with the distance from an infinite source.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because the sheet is infinite, the symmetry ensures the field lines remain parallel and uniformly spaced regardless of distance from the sheet, giving a constant field magnitude E = σ/2ε₀ — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Quantization of charge is generally not considered while dealing with macroscopic charges.\nReason (R): The magnitude of the elementary charge e is extremely small compared to typical charges encountered at the macroscopic level.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because e is so tiny relative to macroscopic charge quantities, the discreteness becomes practically undetectable, justifying treating charge as continuous — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-81',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field at a point due to a point charge becomes infinite as the distance from the charge approaches zero.\nReason (R): This shows that the point-charge model is an idealization that breaks down at very small distances, since real charges have finite size.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'E = kq/r² diverges as r → 0, reflecting the limitation of the ideal point-charge concept when applied at extremely small distances where actual charge distributions have finite extent — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-82',
    type: 'assertion-reason',
    question: 'Assertion (A): A hollow charged conductor has zero electric field inside its cavity even if there is no charge inside the cavity.\nReason (R): All the excess charge on a conductor resides on its outer surface, and the interior of the conductor and any empty cavity within it are shielded from external fields.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This is the basis of electrostatic shielding: since excess charge resides only on the outer surface, an empty cavity inside a conductor experiences zero field, whether or not external fields are applied — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-83',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential energy of an electric dipole is minimum when it is aligned parallel to the external field.\nReason (R): The dipole potential energy is given by U = -pE cosθ, which attains its most negative (minimum) value at θ = 0°.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'U = -pE cosθ is minimized when cosθ = 1 (θ = 0°), giving U = -pE, the lowest (most stable) energy state — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Electric field lines never form closed loops in electrostatics.\nReason (R): Electrostatic fields are conservative, and field lines must originate on positive charges (or at infinity) and terminate on negative charges (or at infinity), never returning to the starting point.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because electrostatic fields are conservative (curl-free), field lines cannot loop back on themselves; they must begin and end on charges (or extend to infinity), correctly explained by R.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-85',
    type: 'assertion-reason',
    question: 'Assertion (A): The gravitational force between two protons is negligible compared to the electrostatic force between them.\nReason (R): The gravitational constant G is many orders of magnitude smaller than the Coulomb constant k in the relevant units, making gravity far weaker at the subatomic scale.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'For two protons, the electrostatic repulsion vastly outweighs their mutual gravitational attraction because the constants and relevant quantities involved make electrostatic force enormously stronger, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-86',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field due to a short dipole falls off faster with distance than the field due to a single point charge.\nReason (R): A dipole\'s field results from partial cancellation of the fields of its two opposite charges at large distances, causing the net field to decrease as 1/r³ instead of 1/r².',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The opposite charges of the dipole nearly cancel each other\'s fields at large distances, leaving a residual field that decreases faster (1/r³) than a single charge\'s field (1/r²) — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Rubbing two different materials together can charge both of them.\nReason (R): Rubbing creates new electric charge on the surface of both materials.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — both materials do become charged. But R is false — rubbing does not create charge; it merely transfers electrons from one material to the other, so one becomes positively charged and the other negatively charged, consistent with charge conservation.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Coulomb\'s law can be applied directly, in its simplest point-charge form, to calculate the force between two large charged metal spheres placed close together.\nReason (R): The simple form of Coulomb\'s law assumes point charges, and its direct application to extended, closely-spaced conductors ignores charge redistribution effects (induction) between them.',
    options: [
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is false, but R is a true statement that explains why A is false',
      'Both A and R are true, and R is the correct explanation of A',
      'A is true but R is false'
    ],
    correctIndex: 1,
    explanation: 'A is false — Coulomb\'s law in its basic point-charge form is not strictly accurate for extended, closely-spaced conductors where mutual induction redistributes charge on their surfaces. R correctly identifies why the simple treatment breaks down in this scenario.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The direction of the electric dipole moment vector is taken from the negative charge to the positive charge.\nReason (R): This convention is chosen so that the dipole moment vector points in the same general sense as the electric field the dipole creates at points on its own axial line far away.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'A is a true, standard convention. However, R gives an unrelated and not-quite-accurate justification for the convention; the actual convention (from -q to +q) is simply defined by convention/definition rather than derived from the axial field direction reasoning stated, so R is not the genuine explanation.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field due to a uniformly charged infinite plane sheet does not depend on the size of the sheet.\nReason (R): Since the sheet is infinite, there is no finite "size" to depend on, and the symmetry of the problem ensures the field is uniform everywhere near the sheet.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'For a genuinely infinite sheet, there is no dependence on size by definition, and the resulting symmetry gives a constant field near the sheet — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-91',
    type: 'assertion-reason',
    question: 'Assertion (A): A test charge used to measure an electric field must be taken to be infinitesimally small.\nReason (R): A finite test charge would itself exert an appreciable force on the source charges, disturbing their positions and thus altering the very field being measured.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A finite test charge could displace or redistribute the source charges through its own field, changing the field to be measured; hence the test charge must be vanishingly small — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Gauss\'s law is valid only for symmetric charge distributions.\nReason (R): Gauss\'s law, ΦE = qenc/ε₀, holds true for any closed surface and any charge distribution, but is only computationally useful for finding E directly in cases of high symmetry.',
    options: [
      'A is false, but R is a true statement that correctly explains why A is false',
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false'
    ],
    correctIndex: 0,
    explanation: 'A is false — Gauss\'s law is universally valid for any closed surface and charge distribution; it is only its use as a practical tool to directly calculate E that is limited to symmetric cases. R correctly clarifies this distinction.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-93',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field just inside the surface of a charged conductor is zero, while just outside it is σ/ε₀.\nReason (R): There is an abrupt discontinuity in the electric field across a charged conducting surface, equal in magnitude to σ/ε₀, consistent with the presence of surface charge there.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The field jumps from zero inside the conductor to σ/ε₀ just outside, and this discontinuity of exactly σ/ε₀ is a general result associated with any surface charge density — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Two point charges of equal magnitude but opposite sign, when brought very close together, behave approximately like a single point charge of zero net charge from far away.\nReason (R): At large distances, the individual fields of the two nearly-coincident opposite charges largely cancel, but a residual dipole field remains.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are individually true, but R actually describes why A is an oversimplification rather than directly explaining the approximate "zero net charge" behaviour stated in A — the residual dipole field means the system is not truly equivalent to zero charge, so R does not cleanly explain the claim as phrased in A.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-95',
    type: 'assertion-reason',
    question: 'Assertion (A): The concept of electric field was introduced partly to explain how charges exert forces on each other without direct contact.\nReason (R): The field concept replaces the idea of instantaneous "action at a distance" with the notion that a charge modifies the space around it, and another charge placed in that space experiences a force due to the local field.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The field concept was developed precisely to avoid the idea of instantaneous action-at-a-distance, replacing it with local interactions mediated by the field that a charge sets up in space — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Charge conservation implies that in any isolated chemical or nuclear reaction, the total charge before and after the reaction remains the same.\nReason (R): Charge cannot be created or destroyed; it can only be transferred from one object or particle to another.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Charge conservation is a fundamental law: total charge is neither created nor destroyed in any isolated process, only redistributed among the particles/bodies involved — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-97',
    type: 'assertion-reason',
    question: 'Assertion (A): A conductor placed in an external electric field develops induced charges on its surface.\nReason (R): Free electrons in the conductor redistribute themselves until the net electric field inside the conductor becomes zero.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Free electrons move under the external field until their own field exactly cancels the external field inside the conductor, and this redistribution manifests as induced surface charges — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Flux through a Gaussian surface can be negative.\nReason (R): Flux is a scalar quantity and can never take a negative value.',
    options: [
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'Both A and R are true, and R is the correct explanation of A',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'A is true — flux can be negative when the net field lines point into the surface (E·dA negative overall), for instance near a negative enclosed charge. R is false — being a scalar does not prevent negative values; sign here indicates direction relative to the outward normal.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field due to a long charged wire decreases more slowly with distance than the field due to a point charge.\nReason (R): The field from an infinite line charge falls off as 1/r, whereas the field from a point charge falls off as 1/r², and 1/r decreases more slowly than 1/r² as r increases.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Comparing 1/r (line charge) and 1/r² (point charge) dependence, the line charge field indeed decreases more gradually with distance, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Electric field is a vector quantity while electric flux through a given surface is a scalar quantity.\nReason (R): Electric field has a well-defined direction at every point, while flux, being the dot product of field and area vector integrated over a surface, reduces to a single numerical value without direction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Electric field E(r) is vector-valued at each point, while flux (an integral involving a dot product) yields a single scalar number for the whole surface, correctly explained by R.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'charges-fields-101',
    type: 'statement',
    question: 'Statement I: Electric charge is quantized, existing only in integral multiples of the elementary charge e.\nStatement II: Electric charge is also conserved in any isolated physical process.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both are fundamental properties of charge established in NCERT: quantization (q = ne) and conservation (total charge of an isolated system is constant) are both correct.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-102',
    type: 'statement',
    question: 'Statement I: Coulomb\'s law applies exactly to point charges.\nStatement II: Coulomb\'s law can also be applied to extended, spherically symmetric charge distributions by treating the total charge as concentrated at the centre (for external points).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — Coulomb\'s law holds exactly for point charges, and for a spherically symmetric distribution, the field outside behaves exactly as though all charge were concentrated at the centre (a consequence provable via Gauss\'s law).',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-103',
    type: 'statement',
    question: 'Statement I: Electric field lines can start and end on the same charge.\nStatement II: Electric field lines never form closed loops in electrostatics.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — field lines start on positive charges and end on negative charges (or infinity); they do not start and end on the same charge. Statement II is correct, since electrostatic field lines are never closed loops.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-104',
    type: 'statement',
    question: 'Statement I: The electric field inside a uniformly charged solid conducting sphere is zero everywhere.\nStatement II: The electric field inside a uniformly charged solid non-conducting (insulating) sphere is also zero everywhere.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — for a conductor, all charge resides on the surface, making the interior field zero. Statement II is false — for a uniformly charged non-conducting (insulating) sphere with charge spread through the volume, the interior field increases linearly with r (not zero) except exactly at the centre.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-105',
    type: 'statement',
    question: 'Statement I: A dipole placed in a uniform field experiences zero net force.\nStatement II: A dipole placed in a non-uniform field can experience both a net force and a torque.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements accurately describe dipole behaviour: zero net force but non-zero torque (if misaligned) in a uniform field, versus both net force and torque possible in a non-uniform field.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-106',
    type: 'statement',
    question: 'Statement I: The electric field due to a short dipole on its axial line is twice the field on its equatorial line at the same distance.\nStatement II: The dipole field on the equatorial line is directed parallel to the dipole moment vector.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (E_axial = 2E_equatorial). Statement II is false — the equatorial field is directed antiparallel (opposite) to the dipole moment vector, not parallel to it.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-107',
    type: 'statement',
    question: 'Statement I: Gauss\'s law can be used to derive Coulomb\'s law for a point charge.\nStatement II: Gauss\'s law is applicable only to charge distributions with spherical symmetry.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — applying Gauss\'s law to a spherical Gaussian surface around a point charge reproduces Coulomb\'s law. Statement II is false — Gauss\'s law is universally valid for any charge distribution and any closed surface, though it is only easily solvable for symmetric cases.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-108',
    type: 'statement',
    question: 'Statement I: The total flux through a closed surface depends on the shape of the surface.\nStatement II: The total flux through a closed surface depends only on the net charge enclosed.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — flux is independent of the shape (and size) of the closed surface. Statement II is correct — by Gauss\'s law, only the enclosed charge determines the total flux.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-109',
    type: 'statement',
    question: 'Statement I: The electric field just outside a charged conductor is directly proportional to the local surface charge density.\nStatement II: This field is always directed tangentially along the conductor\'s surface.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (E = σ/ε₀ just outside the surface). Statement II is false — the field is directed normal (perpendicular) to the surface, not tangentially, in electrostatic equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-110',
    type: 'statement',
    question: 'Statement I: The force between two point charges depends on the medium separating them.\nStatement II: In a medium of dielectric constant K, the force between two charges is K times greater than in vacuum.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — the medium\'s permittivity affects the Coulomb force. Statement II is false — the force is reduced by a factor of K (1/K times), not increased K times, since K > 1 for typical dielectrics.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-111',
    type: 'statement',
    question: 'Statement I: The number of electric field lines drawn from a charge is taken proportional to the magnitude of the charge, by convention.\nStatement II: This convention allows the density (crowding) of field lines to represent the relative strength of the electric field in a region.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the standard convention used in drawing field line diagrams and its purpose in representing field strength visually.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-112',
    type: 'statement',
    question: 'Statement I: Charging by induction requires direct physical contact between the charged and uncharged bodies.\nStatement II: Charging by conduction requires direct physical contact between the charged and uncharged bodies.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — induction charging does not require direct contact; it works via redistribution caused by a nearby charged body. Statement II is correct — conduction charging specifically requires direct contact for charge transfer.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-113',
    type: 'statement',
    question: 'Statement I: The electric field due to an infinite line charge decreases as 1/r with perpendicular distance r.\nStatement II: The electric field due to an infinite plane sheet of charge decreases as 1/r² with distance r.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — the field from an infinite line falls as 1/r. Statement II is false — the field from an infinite plane sheet is constant (σ/2ε₀), independent of distance, not decreasing as 1/r².',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-114',
    type: 'statement',
    question: 'Statement I: Electric field is defined as force per unit positive test charge.\nStatement II: Electric field can exist at a point in space even if no test charge is actually placed there.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the field is defined operationally via a test charge, but conceptually it is understood to exist as a property of space set up by source charges, independent of whether a test charge is actually present.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-115',
    type: 'statement',
    question: 'Statement I: A cube with a point charge q at its centre has equal flux through each of its 6 faces.\nStatement II: If the same point charge is instead placed at one corner of the cube, the flux through each face remains equal to q/6ε₀.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct by symmetry (charge at centre gives equal flux to each face, q/6ε₀ each). Statement II is false — with the charge at a corner, symmetry is broken and flux distribution across faces is generally unequal (though clever symmetry arguments can still find the total using multiple cubes).',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-116',
    type: 'statement',
    question: 'Statement I: The electrostatic force is a central force, acting along the line joining the two interacting charges.\nStatement II: The electrostatic force obeys the principle of superposition when more than two charges are present.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and are foundational properties of the Coulomb force covered in NCERT.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-117',
    type: 'statement',
    question: 'Statement I: The electric field due to a uniformly charged spherical shell at a point outside it is the same as if all the charge were concentrated at the centre.\nStatement II: The electric field due to a uniformly charged spherical shell at a point exactly on its surface is undefined (discontinuous).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the field at the surface is well-defined (equal to σ/ε₀ using the surface charge density, or kQ/R² using total charge), it is simply the point where the field transitions from zero inside to the external form.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-118',
    type: 'statement',
    question: 'Statement I: Charge conservation and charge quantization are the same physical principle.\nStatement II: Both are fundamental properties of electric charge but describe different aspects — one about total amount over time, the other about discreteness of individual charge values.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — conservation and quantization are distinct properties. Statement II correctly clarifies that conservation concerns the constancy of total charge in an isolated system over time, while quantization concerns the discrete (integral multiple of e) nature of charge values.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-119',
    type: 'statement',
    question: 'Statement I: An electric dipole moment has SI units of coulomb-metre (C·m).\nStatement II: The dipole moment of a system of charges with zero net charge is always independent of the choice of origin.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — p = q × d has SI unit C·m, and for a system with zero net charge (like a dipole), the dipole moment is indeed independent of the choice of origin, unlike for systems with non-zero net charge.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-120',
    type: 'statement',
    question: 'Statement I: The torque on a dipole in a uniform field is zero when the dipole is aligned parallel or antiparallel to the field.\nStatement II: At both these orientations, the dipole is in a state of equilibrium (though one is stable and the other unstable).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — τ = pE sinθ is zero at θ = 0° and θ = 180°, and these correspond respectively to stable and unstable equilibrium positions of the dipole.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-121',
    type: 'statement',
    question: 'Statement I: Electric flux can be positive, negative, or zero depending on the direction of the field relative to the chosen area vector.\nStatement II: A negative flux through a closed surface always indicates that no charge is enclosed.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — negative net flux through a closed surface indicates a net negative charge enclosed (field lines predominantly entering rather than leaving), not necessarily zero enclosed charge.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-122',
    type: 'statement',
    question: 'Statement I: Coulomb\'s constant k and the permittivity of free space ε₀ are related by k = 1/4πε₀.\nStatement II: A larger value of ε₀ would result in a stronger electrostatic force between two given charges at a fixed distance.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — since F = kq1q2/r² = q1q2/(4πε₀r²), a larger ε₀ would make k smaller, thereby weakening (not strengthening) the electrostatic force.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-123',
    type: 'statement',
    question: 'Statement I: A charged conductor with a cavity (containing no charge inside the cavity) has zero field throughout the cavity, regardless of external fields.\nStatement II: This property is the basis of electrostatic shielding, used for example in a Faraday cage.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this shielding effect (zero field in a charge-free cavity within a conductor) is precisely the physical principle behind electrostatic shielding devices like the Faraday cage.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-124',
    type: 'statement',
    question: 'Statement I: A test charge experiences a force in an electric field only if it has a non-zero magnitude of charge.\nStatement II: The force experienced by a test charge is always in the same direction as the local electric field, regardless of the sign of the test charge.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — F = qE requires q ≠ 0 for a nonzero force. Statement II is false — the force direction is along E only for a positive test charge; for a negative charge, the force is opposite to E.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-125',
    type: 'statement',
    question: 'Statement I: The electric field due to a uniformly charged ring, at a point on its axis, is zero at the exact centre of the ring.\nStatement II: The electric field due to a uniformly charged ring, at a point on its axis, is maximum at a specific non-zero distance from the centre along the axis (not at the centre or at infinity).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — by symmetry the axial field at the centre of a uniformly charged ring is zero, and the axial field magnitude rises from zero, reaches a maximum at a certain axial distance, then falls off at larger distances (approaching a point-charge-like 1/r² behaviour).',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-126',
    type: 'statement',
    question: 'Statement I: Field lines due to a positive point charge point radially inward toward the charge.\nStatement II: Field lines due to a negative point charge point radially inward toward the charge.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — field lines from a positive charge point radially outward (away from the charge), not inward. Statement II is correct — field lines converge inward toward a negative charge.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-127',
    type: 'statement',
    question: 'Statement I: The concept of electric field allows us to describe the interaction between charges without invoking instantaneous action-at-a-distance.\nStatement II: The field itself is considered to carry energy and can exist independently of the charges (in dynamic situations, like electromagnetic waves).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements reflect conceptually important ideas about the field concept discussed in NCERT — local mediation of forces via the field, and (in a more general dynamic electromagnetic context, briefly alluded to) the field carrying its own energy.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-128',
    type: 'statement',
    question: 'Statement I: The electric field inside a charged conducting sphere placed in an external uniform field is zero.\nStatement II: This is achieved because free charges on the conductor redistribute to create an induced field that exactly cancels the external field inside the conductor.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and describe how conductors respond to external fields in electrostatic equilibrium — redistribution of charge cancels the field inside the conducting material.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-129',
    type: 'statement',
    question: 'Statement I: The dipole moment vector points from the positive charge to the negative charge.\nStatement II: The torque on a dipole in a uniform field tends to align the dipole moment vector along the direction of the field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — by convention, dipole moment points from negative to positive charge, not the other way. Statement II is correct — the restoring torque tends to align p with E, reaching stable equilibrium when they are parallel.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-130',
    type: 'statement',
    question: 'Statement I: For a Gaussian surface enclosing multiple point charges, the total flux depends on the algebraic sum of all enclosed charges.\nStatement II: The individual position of each enclosed charge within the surface affects the total flux calculated through the surface.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — total flux = (sum of enclosed charges)/ε₀. Statement II is false — the total flux through the closed surface is independent of exactly where the charges are located inside the surface, only their algebraic sum matters (though the field distribution, and hence flux through smaller portions of the surface, would depend on position).',
    difficulty: 'hard'
  },

  // ==================== HOW MANY / NUMBER-CORRECT (20) ====================
  {
    id: 'charges-fields-131',
    type: 'how-many',
    question: 'How many of the following statements about electric charge are correct?\n1. Charge is quantized in integral multiples of e.\n2. Charge is conserved in any isolated system.\n3. Charge is a vector quantity requiring both magnitude and direction to specify.\n4. Charge is invariant, unaffected by the speed of the charged particle.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — charge is a scalar, not a vector, quantity.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-132',
    type: 'how-many',
    question: 'How many of the following are correct properties of electric field lines?\n1. They begin on positive charges and end on negative charges (or infinity).\n2. Two field lines can intersect at points of zero field.\n3. The tangent at any point on a field line gives the direction of E at that point.\n4. Field line density represents the relative strength of the field.\n5. Field lines can form closed loops around a single isolated charge.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — field lines never intersect, even at points of zero field (they simply don\'t exist through such points as continuous lines from a single source). Statement 5 is false — electrostatic field lines never form closed loops.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-133',
    type: 'how-many',
    question: 'How many of the following statements about Gauss\'s law are correct?\n1. It relates total flux through a closed surface to the enclosed charge.\n2. It is valid only for symmetric charge distributions.\n3. It can be derived from Coulomb\'s law and the superposition principle.\n4. Flux through a Gaussian surface is unaffected by charges outside the surface.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — Gauss\'s law is valid for any charge distribution and surface; symmetry is only needed to make the field calculation practically easy.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-134',
    type: 'how-many',
    question: 'How many of the following expressions for electric field due to different charge configurations are correctly matched (using standard NCERT notation)?\n1. Infinite plane sheet of charge: E = σ/2ε₀\n2. Charged conducting surface (just outside): E = σ/ε₀\n3. Infinite line charge: E = λ/2πε₀r\n4. Uniformly charged spherical shell (outside, r > R): E = kQ/r²',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four expressions are correctly matched to their standard NCERT forms — infinite sheet (σ/2ε₀), conductor surface (σ/ε₀), infinite line (λ/2πε₀r), and spherical shell exterior (kQ/r²). All 4 are correct.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-135',
    type: 'how-many',
    question: 'How many of the following statements about an electric dipole in a uniform field are correct?\n1. It experiences zero net force.\n2. It experiences a torque unless aligned parallel or antiparallel to the field.\n3. Its potential energy is minimum when antiparallel to the field.\n4. Its potential energy is maximum when antiparallel to the field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — potential energy is maximum (not minimum) when the dipole is antiparallel to the field; minimum energy occurs when parallel to the field.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-136',
    type: 'how-many',
    question: 'How many of the following statements about charge distribution on conductors are correct?\n1. Excess charge on an isolated conductor resides entirely on its outer surface.\n2. The electric field just inside the conducting material is zero in electrostatic equilibrium.\n3. The electric field just outside the conductor\'s surface is tangential to the surface.\n4. A cavity within a conductor with no charge inside it has zero electric field, regardless of external fields.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the field just outside a conductor is normal (perpendicular), not tangential, to the surface.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-137',
    type: 'how-many',
    question: 'How many of the following methods can be used to charge an object?\n1. Friction (rubbing two materials together)\n2. Conduction (direct contact with a charged body)\n3. Induction (bringing a charged body nearby without contact)\n4. Simply heating the object to a very high temperature',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Friction, conduction, and induction (methods 1, 2, 3) are the three standard methods of charging discussed in NCERT. Merely heating an object (method 4) is not a standard charging method in this context.',
    difficulty: 'easy'
  },
  {
    id: 'charges-fields-138',
    type: 'how-many',
    question: 'How many of the following quantities are vectors?\n1. Electric field\n2. Electric flux\n3. Electric dipole moment\n4. Electric charge\n5. Torque on a dipole',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Electric field, dipole moment, and torque are vectors — that is 3 of the 5 listed quantities. Electric flux and electric charge are scalars.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-139',
    type: 'how-many',
    question: 'How many of the following statements correctly compare gravitational and electrostatic forces?\n1. Both follow an inverse-square law with distance.\n2. Both can be either attractive or repulsive.\n3. Electrostatic force is generally far stronger than gravitational force between elementary particles.\n4. Both are central forces acting along the line joining the two interacting particles.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — gravitational force is always attractive; only electrostatic force can be either attractive or repulsive.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-140',
    type: 'how-many',
    question: 'How many of the following are correctly stated SI units?\n1. Electric charge — coulomb (C)\n2. Electric field — newton per coulomb (N/C)\n3. Electric flux — newton-metre² per coulomb (N m²/C)\n4. Electric dipole moment — coulomb-metre (C·m)\n5. Surface charge density — coulomb per metre (C/m)',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 give correct SI units. Statement 5 is incorrect — surface charge density has units of C/m² (charge per unit area), not C/m. So 4 are correct.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-141',
    type: 'how-many',
    question: 'How many of the following statements about the electric field due to a point charge are correct?\n1. It is directed radially, away from a positive charge and toward a negative charge.\n2. Its magnitude decreases as the square of the distance from the charge.\n3. It becomes zero exactly at the location of the charge.\n4. It is undefined (mathematically diverges) exactly at the location of the point charge.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the field does not become zero at the charge\'s location; rather, the idealized point-charge formula diverges (becomes infinite/undefined) there, as stated correctly in statement 4.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-142',
    type: 'how-many',
    question: 'How many of the following statements about electric flux are correct?\n1. It is calculated as the surface integral of E·dA.\n2. Its value depends on the choice of the direction of the area vector (inward vs outward normal).\n3. Flux through an open surface can be computed the same way as for a closed surface, without ambiguity in sign convention.\n4. Total flux through any closed surface not enclosing any charge is always zero.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — for an open surface the sign of flux depends on an arbitrarily chosen normal direction and can be genuinely ambiguous without specifying a convention, unlike for closed surfaces where "outward" is the standard convention.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-143',
    type: 'how-many',
    question: 'How many of the following statements about Coulomb\'s law are correct?\n1. The force is directly proportional to the product of the two charges.\n2. The force is inversely proportional to the square of the distance between the charges.\n3. The force depends on the medium separating the charges.\n4. The constant k in Coulomb\'s law is the same in every medium.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the effective constant (k/K, where K is the dielectric constant) changes depending on the medium; only in vacuum/free space does k take its standard value of 9 × 10⁹ N m²/C².',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-144',
    type: 'how-many',
    question: 'How many of the following statements about a uniformly charged spherical shell are correct?\n1. The field inside the shell (r < R) is zero.\n2. The field at the surface (r = R) equals σ/ε₀.\n3. The field outside the shell (r > R) is the same as that of a point charge Q at the centre.\n4. The field outside the shell increases with increasing distance from the centre.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the field outside the shell decreases (as 1/r²) with increasing distance, not increases.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-145',
    type: 'how-many',
    question: 'How many of the following statements about the electric dipole moment are correct?\n1. It is defined as the product of charge and the separation between the two charges.\n2. Its SI unit is coulomb-metre.\n3. It points from the negative charge toward the positive charge.\n4. It is zero for a system with equal and opposite charges regardless of their separation.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the dipole moment (p = q × 2a) is generally non-zero for a system of equal and opposite charges separated by a finite distance; it would only be zero if the separation were zero.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-146',
    type: 'how-many',
    question: 'How many of the following statements about the electric field between two large, oppositely charged, closely-spaced parallel plates (a parallel plate capacitor) are correct?\n1. The field between the plates, away from the edges, is approximately uniform.\n2. The field magnitude equals σ/ε₀, where σ is the surface charge density on each plate.\n3. The field lines are curved rather than straight in the central region between the plates.\n4. The field is zero outside the region between the two plates, in the idealized case (ignoring edge effects).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — in the central region (away from the edges), the field lines are straight and parallel, not curved.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-147',
    type: 'how-many',
    question: 'How many of the following statements about charge quantization and conservation are correct?\n1. The elementary charge e is approximately 1.6 × 10⁻¹⁹ C.\n2. All observed free charges are integral multiples of e.\n3. In a closed system, charge can appear or disappear without any corresponding transfer, as long as the total remains balanced.\n4. Charge conservation has been verified in numerous physical and chemical processes without exception.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — charge conservation means charge is neither created nor destroyed; it can only be transferred between parts of a system, not simply "appear or disappear" even if balanced overall in some ill-defined way.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-148',
    type: 'how-many',
    question: 'How many of the following statements about a test charge used to probe electric fields are correct?\n1. It should ideally have infinitesimally small magnitude.\n2. It is conventionally taken to be positive.\n3. Using a very large test charge gives a more accurate measurement of the field.\n4. The field measured is defined as the limiting value of force per unit charge as the test charge tends to zero.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — a large test charge would distort the source charge distribution through its own field, making the measurement less accurate, not more.',
    difficulty: 'medium'
  },
  {
    id: 'charges-fields-149',
    type: 'how-many',
    question: 'How many of the following statements about the applications of Gauss\'s law in NCERT are correct?\n1. It is used to derive the field due to an infinite plane sheet of charge.\n2. It is used to derive the field due to a uniformly charged spherical shell.\n3. It is used to derive the field due to an infinitely long uniformly charged straight wire.\n4. It is used to derive the field due to a single isolated point dipole in a closed analytical form using only one Gaussian surface.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct — these are the standard NCERT applications of Gauss\'s law. Statement 4 is false — a dipole\'s field lacks the required symmetry for a simple Gaussian-surface derivation; its field is instead obtained by direct superposition of the fields of the two point charges.',
    difficulty: 'hard'
  },
  {
    id: 'charges-fields-150',
    type: 'how-many',
    question: 'How many of the following statements comparing electric field and electric potential energy concepts (as related to charge and field) are correct?\n1. Electric field is defined per unit charge, force per unit charge.\n2. Electric flux depends on both the field and the geometry of the surface through which it is calculated.\n3. Dipole potential energy in a field depends on the orientation angle θ between the dipole moment and the field.\n4. The torque on a dipole is independent of the angle between the dipole moment and the field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — torque τ = pE sinθ explicitly depends on the angle θ between the dipole moment and the field; it is not independent of orientation.',
    difficulty: 'medium'
  }
];

export default questions;
