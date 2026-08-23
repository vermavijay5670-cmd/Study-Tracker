import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  // ==================== MCQ (70) ====================
  {
    id: 'moving-charges-magnetism-1',
    type: 'mcq',
    question: 'A moving electric charge produces',
    options: [
      'only an electric field around it',
      'both an electric field and a magnetic field around it',
      'only a magnetic field, no electric field',
      'neither an electric nor a magnetic field'
    ],
    correctIndex: 1,
    explanation: 'A charge at rest produces only an electric field, but a moving charge produces both an electric field (due to its charge) and a magnetic field (due to its motion, i.e., the current it constitutes).',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-2',
    type: 'mcq',
    question: 'The magnetic force on a moving charge q with velocity v in a magnetic field B is given by',
    options: ['F = qE', 'F = q(v × B)', 'F = qvB (always, regardless of angle)', 'F = qB/v'],
    correctIndex: 1,
    explanation: 'The magnetic (Lorentz) force on a moving charge is F = q(v × B), a cross product, meaning the force depends on the sine of the angle between v and B and is always perpendicular to both.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-3',
    type: 'mcq',
    question: 'The magnetic force on a moving charge is always directed',
    options: [
      'along the direction of velocity',
      'along the direction of the magnetic field',
      'perpendicular to both the velocity and the magnetic field',
      'opposite to the velocity'
    ],
    correctIndex: 2,
    explanation: 'Since F = qv × B is a cross product, the resulting force vector is always perpendicular to the plane containing both v and B.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-4',
    type: 'mcq',
    question: 'Because the magnetic force on a moving charge is always perpendicular to its velocity, this force',
    options: [
      'does positive work on the charge, increasing its speed',
      'does negative work on the charge, decreasing its speed',
      'does no work on the charge; it changes only the direction of velocity, not its magnitude (speed)',
      'always brings the charge to rest'
    ],
    correctIndex: 2,
    explanation: 'Since the magnetic force is always perpendicular to velocity, it does zero work on the charge (W = F·d = 0 when F ⊥ v), so it cannot change the kinetic energy or speed, only the direction of motion.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-5',
    type: 'mcq',
    question: 'A charged particle moving parallel to a magnetic field (i.e., along the field direction) experiences',
    options: [
      'a maximum magnetic force',
      'zero magnetic force, since sinθ = 0 when θ = 0°',
      'a force perpendicular to the field only',
      'a force that increases its speed'
    ],
    correctIndex: 1,
    explanation: 'The magnitude of magnetic force is F = qvB sinθ; when v is parallel to B, θ = 0° and sinθ = 0, giving zero magnetic force.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-6',
    type: 'mcq',
    question: 'A charged particle moving perpendicular to a uniform magnetic field experiences a force that results in',
    options: [
      'straight-line motion',
      'circular motion in a plane perpendicular to the field, at constant speed',
      'parabolic motion',
      'the particle coming to rest'
    ],
    correctIndex: 1,
    explanation: 'When velocity is perpendicular to B, the magnetic force provides a constant-magnitude centripetal force perpendicular to velocity, resulting in uniform circular motion in the plane perpendicular to B.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-7',
    type: 'mcq',
    question: 'A charged particle entering a uniform magnetic field at an angle (neither parallel nor perpendicular to the field) generally follows a path that is',
    options: [
      'a straight line',
      'a helix (helical path), combining uniform circular motion perpendicular to B with uniform linear motion along B',
      'a parabola',
      'a perfect circle in the plane containing v and B'
    ],
    correctIndex: 1,
    explanation: 'The velocity component perpendicular to B produces circular motion, while the component parallel to B is unaffected (since force is zero along B), giving a combined helical trajectory.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-8',
    type: 'mcq',
    question: 'The radius of the circular path of a charged particle (mass m, charge q, speed v) moving perpendicular to a magnetic field B is given by',
    options: ['r = mv/(qB)', 'r = qB/(mv)', 'r = mvB/q', 'r = qvB/m'],
    correctIndex: 0,
    explanation: 'Equating magnetic force to the centripetal force requirement, qvB = mv²/r, gives r = mv/(qB), the radius of circular motion in a magnetic field.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-9',
    type: 'mcq',
    question: 'The Lorentz force on a charged particle moving in a region with both electric field E and magnetic field B is given by',
    options: ['F = qE only', 'F = qv × B only', 'F = qE + q(v × B)', 'F = q(E × B)'],
    correctIndex: 2,
    explanation: 'The total (Lorentz) force is the vector sum of the electric force qE and the magnetic force q(v × B): F = qE + q(v × B).',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-10',
    type: 'mcq',
    question: 'A velocity selector uses perpendicular electric and magnetic fields to allow only particles of a specific velocity to pass through undeflected. This works because',
    options: [
      'the electric force and magnetic force are always in the same direction',
      'for the right speed, the electric force and magnetic force exactly balance (cancel) each other, giving zero net force',
      'the particle\'s charge becomes zero at that speed',
      'the magnetic field cancels the electric field itself'
    ],
    correctIndex: 1,
    explanation: 'In a velocity selector, E and B are arranged so the electric force qE and magnetic force qvB act in opposite directions; only particles with v = E/B experience exactly balanced forces and pass through undeflected.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-11',
    type: 'mcq',
    question: 'The Biot-Savart law gives the magnetic field due to',
    options: [
      'a stationary point charge',
      'a small current-carrying element (current element)',
      'a bar magnet only',
      'the Earth\'s magnetic field only'
    ],
    correctIndex: 1,
    explanation: 'The Biot-Savart law expresses the magnetic field dB produced at a point due to a small current element (I dl), analogous to how Coulomb\'s law gives the field of a point charge.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-12',
    type: 'mcq',
    question: 'According to the Biot-Savart law, the magnetic field due to a current element is directly proportional to',
    options: [
      'the current and the length of the element, and inversely proportional to the square of the distance from the element',
      'only the current, independent of the length of the element',
      'the square of the current',
      'the distance from the element (increases with distance)'
    ],
    correctIndex: 0,
    explanation: 'The Biot-Savart law states dB ∝ (I dl sinθ)/r², so the field is proportional to current and element length, and inversely proportional to the square of the distance, similar in form to Coulomb\'s law.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-13',
    type: 'mcq',
    question: 'The direction of the magnetic field due to a current element, as given by the Biot-Savart law, is',
    options: [
      'along the direction of current flow',
      'perpendicular to both the current element and the position vector to the point (given by the cross product dl × r̂)',
      'always vertically upward',
      'opposite to the current direction'
    ],
    correctIndex: 1,
    explanation: 'Since dB ∝ dl × r̂ (a cross product), the resulting field is perpendicular to the plane containing the current element and the line joining it to the field point.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-14',
    type: 'mcq',
    question: 'At a point lying exactly on the axis of a straight current-carrying wire (i.e., collinear with the current direction), the magnetic field due to Biot-Savart law is',
    options: [
      'maximum',
      'zero, since sinθ = 0 for a point along the direction of the current element',
      'infinite',
      'independent of position along the axis'
    ],
    correctIndex: 1,
    explanation: 'The Biot-Savart law includes a sinθ term, where θ is the angle between the current element direction and the line to the field point; along the axis (θ = 0°), sinθ = 0, giving zero field.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-15',
    type: 'mcq',
    question: 'The magnetic field at the centre of a circular current loop of radius R carrying current I is given by',
    options: ['B = µ0I/(2R)', 'B = µ0I/(2πR)', 'B = µ0IR/2', 'B = µ0I²/(2R)'],
    correctIndex: 0,
    explanation: 'Applying the Biot-Savart law and integrating over the full circular loop gives B = µ0I/(2R) at the centre, a standard NCERT result.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-16',
    type: 'mcq',
    question: 'The direction of the magnetic field at the centre of a current-carrying circular loop can be determined using',
    options: [
      'Fleming\'s left-hand rule',
      'the right-hand rule (curl fingers along current direction, thumb points in the direction of B)',
      'Lenz\'s law',
      'Kirchhoff\'s law'
    ],
    correctIndex: 1,
    explanation: 'The right-hand rule (or right-hand thumb rule) is used to find the direction of the magnetic field due to a current loop: curling the fingers in the direction of current flow, the thumb points along the field direction at the centre.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-17',
    type: 'mcq',
    question: 'Ampere\'s circuital law relates the line integral of the magnetic field around a closed loop to',
    options: [
      'the electric field enclosed by the loop',
      'the total current enclosed (passing through) the loop, multiplied by µ0',
      'the area of the loop',
      'the magnetic flux through an open surface'
    ],
    correctIndex: 1,
    explanation: 'Ampere\'s circuital law states ∮B·dl = µ0 Ienc, relating the closed line integral of B to the total current enclosed by the loop, analogous to Gauss\'s law for electrostatics.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-18',
    type: 'mcq',
    question: 'Ampere\'s circuital law is most useful for calculating magnetic fields when the current distribution has',
    options: [
      'no particular symmetry',
      'high symmetry, such as a long straight wire, a solenoid, or a toroid',
      'zero net current',
      'a random and irregular shape'
    ],
    correctIndex: 1,
    explanation: 'Like Gauss\'s law in electrostatics, Ampere\'s law becomes a powerful computational tool specifically for symmetric current configurations (infinite straight wire, solenoid, toroid), where an "Amperian loop" can be chosen to simplify the integral.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-19',
    type: 'mcq',
    question: 'The magnetic field due to a long straight current-carrying wire at perpendicular distance r from the wire is given by',
    options: ['B = µ0I/(2πr)', 'B = µ0I/(2r)', 'B = µ0Ir/(2π)', 'B = µ0I/(4πr²)'],
    correctIndex: 0,
    explanation: 'Using Ampere\'s law with a circular Amperian loop around the wire, B = µ0I/(2πr), decreasing as 1/r with distance from the wire.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-20',
    type: 'mcq',
    question: 'The magnetic field lines around a long straight current-carrying wire are',
    options: [
      'straight lines radiating outward from the wire',
      'concentric circles centred on the wire, lying in planes perpendicular to the wire',
      'parallel to the wire',
      'randomly oriented'
    ],
    correctIndex: 1,
    explanation: 'The field lines due to a straight current-carrying wire form concentric circles around the wire, lying in planes perpendicular to the wire, with direction given by the right-hand thumb rule.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-21',
    type: 'mcq',
    question: 'A solenoid is essentially',
    options: [
      'a single circular loop of wire',
      'a long, tightly wound helical coil of wire, used to produce a nearly uniform magnetic field inside it',
      'a straight wire only',
      'a device to measure magnetic field, not to produce it'
    ],
    correctIndex: 1,
    explanation: 'A solenoid is a long coil of closely-wound turns of wire, which produces a strong and nearly uniform magnetic field within its core when current flows through it, similar to a bar magnet\'s field outside.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-22',
    type: 'mcq',
    question: 'The magnetic field inside a long ideal solenoid (away from the ends) is given by',
    options: ['B = µ0nI (n = number of turns per unit length)', 'B = µ0I/(2πr)', 'B = µ0I/(2R)', 'B = µ0NI²'],
    correctIndex: 0,
    explanation: 'For a long, tightly wound solenoid, applying Ampere\'s law gives B = µ0nI, where n is the number of turns per unit length, and this field is essentially uniform inside, away from the ends.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-23',
    type: 'mcq',
    question: 'The magnetic field outside an ideal (infinitely long) solenoid is',
    options: [
      'the same as inside',
      'approximately zero',
      'twice the value inside',
      'undefined'
    ],
    correctIndex: 1,
    explanation: 'For an ideal (infinitely long) solenoid, the field outside is approximately zero, with essentially all the field confined uniformly to the interior of the solenoid.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-24',
    type: 'mcq',
    question: 'A toroid is essentially',
    options: [
      'a straight solenoid',
      'a solenoid bent into a closed circular (ring) shape',
      'a single circular current loop',
      'a device unrelated to solenoids'
    ],
    correctIndex: 1,
    explanation: 'A toroid is formed by bending a solenoid into a closed ring shape, so that its two ends join, producing a magnetic field confined almost entirely within the ring-shaped core.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-25',
    type: 'mcq',
    question: 'The magnetic field outside an ideal toroid (both inside the central hole and outside the outer boundary) is',
    options: [
      'the same as inside the toroid\'s core',
      'zero, since the Amperian loop drawn there encloses zero net current',
      'twice the field inside the core',
      'always equal to µ0nI regardless of location'
    ],
    correctIndex: 1,
    explanation: 'For an ideal toroid, choosing Amperian loops outside the core (either in the central hole or beyond the outer radius) encloses zero net current, giving zero magnetic field in those regions.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-26',
    type: 'mcq',
    question: 'The force per unit length between two long, parallel, current-carrying wires carrying currents in the same direction is',
    options: [
      'repulsive',
      'attractive',
      'always zero',
      'perpendicular to both wires'
    ],
    correctIndex: 1,
    explanation: 'Two parallel wires carrying current in the same direction attract each other, since the magnetic field of one wire exerts a force on the current in the other wire directed toward it.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-27',
    type: 'mcq',
    question: 'The force per unit length between two long, parallel, current-carrying wires carrying currents in opposite directions is',
    options: ['attractive', 'repulsive', 'zero', 'independent of the currents'],
    correctIndex: 1,
    explanation: 'When currents in two parallel wires flow in opposite directions, the wires repel each other, opposite to the case of currents in the same direction.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-28',
    type: 'mcq',
    question: 'The SI unit of current, the ampere, is officially defined (in the traditional/historical definition) based on',
    options: [
      'the force between two charged particles',
      'the force per unit length between two long, straight, parallel current-carrying wires placed a specific distance apart',
      'the magnetic field of the Earth',
      'the resistance of a standard conductor'
    ],
    correctIndex: 1,
    explanation: 'Historically (pre-2019 SI redefinition), the ampere was defined using the force per unit length between two infinitely long, parallel wires 1 metre apart carrying equal currents, set to produce a specific force of 2 × 10⁻⁷ N per metre.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-29',
    type: 'mcq',
    question: 'The force experienced by a straight current-carrying conductor of length L carrying current I, placed in a uniform magnetic field B, is given by',
    options: ['F = BIL sinθ, where θ is the angle between the current direction and B', 'F = BIL always, regardless of orientation', 'F = BI/L', 'F = B/(IL)'],
    correctIndex: 0,
    explanation: 'The force on a current-carrying conductor in a magnetic field is F = BIL sinθ, where θ is the angle between the direction of current flow and the magnetic field; this becomes maximum (F = BIL) when the conductor is perpendicular to B.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-30',
    type: 'mcq',
    question: 'A current-carrying conductor placed parallel to a magnetic field (current direction along B) experiences',
    options: [
      'a maximum force',
      'zero force, since sinθ = 0 when θ = 0°',
      'a force perpendicular to the wire only',
      'a torque but no force'
    ],
    correctIndex: 1,
    explanation: 'When the current direction is parallel to B, θ = 0°, and F = BIL sinθ = 0, so the conductor experiences no magnetic force.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-31',
    type: 'mcq',
    question: 'A current-carrying conductor placed perpendicular to a magnetic field experiences',
    options: [
      'zero force',
      'the maximum possible force for that current and field strength, F = BIL',
      'a force only along the direction of the field',
      'no torque'
    ],
    correctIndex: 1,
    explanation: 'When the current direction is perpendicular to B, θ = 90° and sinθ = 1, giving the maximum force F = BIL for the given values of B, I, and L.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-32',
    type: 'mcq',
    question: 'A current-carrying rectangular loop placed in a uniform magnetic field, with its plane parallel to the field, experiences',
    options: [
      'zero torque',
      'maximum torque, tending to rotate the loop to align its plane perpendicular to the field (align magnetic moment with the field)',
      'a net translational force but no torque',
      'both zero torque and zero force'
    ],
    correctIndex: 1,
    explanation: 'When the loop\'s plane is parallel to B (i.e., its magnetic moment is perpendicular to B), the torque τ = m × B is maximum, tending to rotate the loop until its magnetic moment aligns with the field.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-33',
    type: 'mcq',
    question: 'A current-carrying loop placed in a uniform magnetic field, with its magnetic moment aligned parallel to the field, experiences',
    options: [
      'maximum torque',
      'zero torque, since the loop is in stable equilibrium',
      'zero magnetic moment',
      'a net force pulling it out of the field'
    ],
    correctIndex: 1,
    explanation: 'When the magnetic moment m is parallel to B, sinθ = 0 in τ = mB sinθ, giving zero torque; this is the stable equilibrium orientation of the loop.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-34',
    type: 'mcq',
    question: 'The magnetic moment of a current-carrying loop (planar coil) of area A carrying current I is given by',
    options: ['m = IA', 'm = I/A', 'm = I²A', 'm = IA²'],
    correctIndex: 0,
    explanation: 'The magnetic moment of a current loop is defined as m = IA, the product of current and the enclosed area, with direction given by the right-hand rule (perpendicular to the loop\'s plane).',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-35',
    type: 'mcq',
    question: 'The SI unit of magnetic moment is',
    options: ['ampere-metre (A·m)', 'ampere-metre² (A·m²)', 'tesla-metre', 'weber'],
    correctIndex: 1,
    explanation: 'Since m = IA, with current in amperes and area in square metres, the SI unit of magnetic moment is ampere-metre² (A·m²).',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-36',
    type: 'mcq',
    question: 'For a current-carrying loop with N turns instead of one, each of area A carrying current I, the total magnetic moment becomes',
    options: ['m = IA', 'm = NIA', 'm = IA/N', 'm = N²IA'],
    correctIndex: 1,
    explanation: 'For N identical turns, the magnetic moments add up, giving a total magnetic moment m = NIA, N times that of a single turn.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-37',
    type: 'mcq',
    question: 'A moving coil galvanometer works on the principle that',
    options: [
      'a current-carrying coil placed in a magnetic field experiences a torque proportional to the current, causing it to deflect against a restoring (spring) torque',
      'the galvanometer measures voltage directly using a capacitor',
      'the coil moves due to gravitational force alone',
      'current flow heats the coil, causing it to expand'
    ],
    correctIndex: 0,
    explanation: 'A moving coil galvanometer uses a current-carrying coil in a radial magnetic field; the deflecting torque (proportional to current) is balanced against the restoring torque of a spring, so the steady-state deflection is proportional to the current.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-38',
    type: 'mcq',
    question: 'In a moving coil galvanometer, a radial magnetic field is used (rather than a simple uniform field) mainly so that',
    options: [
      'the coil experiences no torque at all',
      'the plane of the coil remains always parallel to the field, keeping the torque proportional to current for a wide range of deflection angles, giving a linear scale',
      'the coil rotates continuously without stopping',
      'the magnetic field becomes zero inside the coil'
    ],
    correctIndex: 1,
    explanation: 'A radial field ensures that the magnetic field is always in the plane of the coil (perpendicular to it isn\'t quite right — it\'s designed so the field remains parallel to the coil\'s plane at every angle), so torque = NIAB (without a sinθ factor) remains directly proportional to current throughout the deflection range, giving a linear scale.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-39',
    type: 'mcq',
    question: 'The current sensitivity of a galvanometer is defined as',
    options: [
      'the deflection produced per unit current passed through it',
      'the total current the galvanometer can measure',
      'the resistance of the galvanometer coil',
      'the voltage across the galvanometer'
    ],
    correctIndex: 0,
    explanation: 'Current sensitivity is defined as the deflection (in radians or scale divisions) produced per unit current, φ/I = NAB/k, where k is the torsional constant of the spring.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-40',
    type: 'mcq',
    question: 'To increase the current sensitivity of a galvanometer, one could',
    options: [
      'decrease the number of turns in the coil',
      'increase the number of turns N, the area A, or the magnetic field B, or decrease the torsional constant k of the suspension',
      'decrease the magnetic field strength',
      'increase the torsional constant of the spring'
    ],
    correctIndex: 1,
    explanation: 'Since sensitivity = NAB/k, increasing N, A, or B, or decreasing the restoring torsional constant k, all increase the current sensitivity of the galvanometer.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-41',
    type: 'mcq',
    question: 'A galvanometer is converted into an ammeter for measuring larger currents by connecting',
    options: [
      'a high resistance in series with the galvanometer coil',
      'a low resistance (shunt) in parallel with the galvanometer coil',
      'a capacitor in series',
      'another identical galvanometer in series'
    ],
    correctIndex: 1,
    explanation: 'A small shunt resistance is connected in parallel with the galvanometer, allowing most of the current to bypass the delicate coil, so the combination can measure larger currents than the galvanometer alone.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-42',
    type: 'mcq',
    question: 'A galvanometer is converted into a voltmeter for measuring potential differences by connecting',
    options: [
      'a low resistance in parallel',
      'a high resistance in series with the galvanometer coil',
      'a shunt resistance',
      'a variable inductor'
    ],
    correctIndex: 1,
    explanation: 'A large resistance is connected in series with the galvanometer so that the combination draws only a small, known current for a given voltage, allowing it to measure larger potential differences.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-43',
    type: 'mcq',
    question: 'Compared to a galvanometer, an ideal ammeter should have',
    options: [
      'very high resistance',
      'very low (ideally zero) resistance',
      'the same resistance as the galvanometer',
      'infinite resistance'
    ],
    correctIndex: 1,
    explanation: 'An ammeter is connected in series and should have very low resistance so it does not significantly alter the current it is meant to measure.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-44',
    type: 'mcq',
    question: 'A cyclotron is a device used to',
    options: [
      'measure magnetic fields',
      'accelerate charged particles to high energies using a combination of electric and magnetic fields',
      'generate alternating current',
      'measure the charge-to-mass ratio of an electron only'
    ],
    correctIndex: 1,
    explanation: 'A cyclotron accelerates charged particles (like protons) to high speeds using an alternating electric field for repeated acceleration and a magnetic field to keep them moving in a spiral path within two "dee" shaped chambers.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-45',
    type: 'mcq',
    question: 'In a cyclotron, the magnetic field is used to',
    options: [
      'accelerate the charged particle directly, increasing its speed',
      'bend the path of the charged particle into a circular/spiral trajectory, without changing its speed',
      'decelerate the particle',
      'measure the particle\'s charge'
    ],
    correctIndex: 1,
    explanation: 'The magnetic field in a cyclotron provides the centripetal force that bends the particle\'s path into a circle/spiral; since magnetic force does no work, it does not change the particle\'s speed — that role is played by the alternating electric field in the gap.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-46',
    type: 'mcq',
    question: 'The cyclotron frequency (frequency of revolution of a charged particle in a cyclotron) is given by',
    options: [
      'f = qB/(2πm), independent of the particle\'s speed or the radius of its path',
      'f = mv/(qB)',
      'f = qBv',
      'f = 2πmv/q'
    ],
    correctIndex: 0,
    explanation: 'The cyclotron frequency f = qB/(2πm) depends only on the charge, mass, and magnetic field — not on speed or radius — which is the key principle that allows a fixed-frequency alternating voltage to keep accelerating the particle as its radius grows.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-47',
    type: 'mcq',
    question: 'A cyclotron cannot be used to accelerate electrons effectively to very high energies mainly because',
    options: [
      'electrons have no charge',
      'as electrons approach relativistic speeds quickly (due to their small mass), their cyclotron frequency changes, going out of sync with the fixed-frequency accelerating voltage',
      'electrons cannot move in magnetic fields',
      'the cyclotron works only for neutral particles'
    ],
    correctIndex: 1,
    explanation: 'Because electrons are very light, they reach relativistic speeds at relatively low energies, causing their mass (and hence cyclotron frequency) to change; this desynchronizes them from the fixed-frequency oscillating field, limiting the cyclotron\'s effectiveness for electrons.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-48',
    type: 'mcq',
    question: 'The right-hand thumb rule (or Maxwell\'s right-hand grip rule) is used to determine',
    options: [
      'the magnitude of the magnetic field',
      'the direction of the magnetic field around a current-carrying conductor, given the direction of current flow',
      'the resistance of a wire',
      'the direction of electric field due to a charge'
    ],
    correctIndex: 1,
    explanation: 'The right-hand thumb rule states that if the thumb points in the direction of conventional current flow, the curled fingers indicate the direction of the encircling magnetic field lines.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-49',
    type: 'mcq',
    question: 'Fleming\'s left-hand rule is used to determine',
    options: [
      'the direction of induced EMF',
      'the direction of the force on a current-carrying conductor placed in a magnetic field',
      'the direction of the magnetic field due to a current',
      'the direction of current flow in a circuit'
    ],
    correctIndex: 1,
    explanation: 'Fleming\'s left-hand rule (thumb = force, forefinger = field, middle finger = current) is used to find the direction of the force experienced by a current-carrying conductor in a magnetic field.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-50',
    type: 'mcq',
    question: 'The permeability of free space, µ0, appears in magnetism playing a role analogous to which quantity in electrostatics?',
    options: ['The Coulomb constant k directly', 'The permittivity of free space, ε₀', 'The charge of an electron', 'The speed of light'],
    correctIndex: 1,
    explanation: 'µ0 (permeability of free space) plays a role in magnetic force laws analogous to that of ε₀ (permittivity of free space) in electrostatic force laws, both being fundamental constants of the respective fields in vacuum.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-51',
    type: 'mcq',
    question: 'Two parallel current-carrying wires attract or repel each other. This mutual force arises because',
    options: [
      'each wire has a net electric charge',
      'each current-carrying wire produces its own magnetic field, and this field exerts a force on the current flowing in the neighbouring wire',
      'the wires are always at different potentials',
      'gravity between the wires causes the effect'
    ],
    correctIndex: 1,
    explanation: 'Each current-carrying wire generates a magnetic field around itself; this field then exerts a magnetic force on the current-carrying charges in the nearby wire, resulting in the observed mutual attraction or repulsion.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-52',
    type: 'mcq',
    question: 'The concept of "current loop as a magnetic dipole" arises because',
    options: [
      'a current loop produces a magnetic field pattern similar to that of a bar magnet, at large distances',
      'a current loop has no magnetic properties at all',
      'a current loop behaves exactly like a point charge',
      'a current loop cannot experience torque in a magnetic field'
    ],
    correctIndex: 0,
    explanation: 'At distances large compared to its size, the magnetic field of a current loop closely resembles that of a magnetic dipole (similar in form to an electric dipole\'s field), justifying the analogy between a current loop and a magnetic dipole.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-53',
    type: 'mcq',
    question: 'The equivalence between a current loop and a magnetic dipole (with dipole moment m = IA) means that the field on the axis of the loop, at large distances r, is proportional to',
    options: ['1/r', '1/r²', '1/r³', 'r'],
    correctIndex: 2,
    explanation: 'Consistent with the magnetic-dipole analogy, the axial field of a current loop at large distances falls off as 1/r³, just as the field of an electric dipole does.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-54',
    type: 'mcq',
    question: 'The torque on a current-carrying loop in a uniform magnetic field is given by τ = m × B, or in magnitude, τ = mB sinθ. This torque tends to',
    options: [
      'increase the current in the loop',
      'align the loop\'s magnetic moment vector m with the direction of the field B',
      'destroy the loop\'s magnetic moment',
      'have no effect on the loop\'s orientation'
    ],
    correctIndex: 1,
    explanation: 'The torque on a magnetic dipole (or current loop) in an external field always acts to rotate the dipole moment toward alignment with the field, analogous to the electric dipole case.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-55',
    type: 'mcq',
    question: 'The magnetic field due to a current-carrying circular arc (not a full loop) subtending an angle θ at the centre, compared to a full circular loop of the same radius carrying the same current, is',
    options: [
      'the same as the full loop',
      'a fraction (θ/2π) of the field due to the full loop',
      'always twice the full loop\'s field',
      'independent of the angle subtended'
    ],
    correctIndex: 1,
    explanation: 'Since the field due to a full loop (2π radians) is B = µ0I/(2R), the field due to an arc subtending angle θ is proportionally (θ/2π) times this value, as the contribution scales with the arc length/angle.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-56',
    type: 'mcq',
    question: 'Two long straight parallel conductors carry currents I1 and I2, separated by distance d. The force per unit length between them is given by',
    options: [
      'F/L = µ0I1I2/(2πd)',
      'F/L = µ0I1I2 d/(2π)',
      'F/L = µ0(I1+I2)/(2πd)',
      'F/L = µ0I1I2/(2πd²)'
    ],
    correctIndex: 0,
    explanation: 'The force per unit length between two long parallel current-carrying wires is F/L = µ0I1I2/(2πd), derived by considering the field of one wire acting on the current in the other.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-57',
    type: 'mcq',
    question: 'A charged particle moving in a straight line through a region containing both electric and magnetic fields, with zero net force, must have',
    options: [
      'zero charge',
      'a specific speed at which the electric force and magnetic force exactly balance out',
      'infinite mass',
      'no relationship between the fields is required'
    ],
    correctIndex: 1,
    explanation: 'For the net force to be zero with both E and B present (arranged appropriately), the particle must move at a specific speed v = E/B, so that the electric and magnetic forces exactly cancel — this is the operating principle of a velocity selector.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-58',
    type: 'mcq',
    question: 'In a mass spectrometer application of moving charges in magnetic fields, particles of different masses (but same charge and speed) moving in a uniform magnetic field will follow',
    options: [
      'the same circular path regardless of mass',
      'circular paths of different radii, with the radius directly proportional to mass (r = mv/qB)',
      'straight-line paths only',
      'paths that spiral inward regardless of mass'
    ],
    correctIndex: 1,
    explanation: 'Since r = mv/(qB), for the same charge, speed, and field, particles of larger mass follow larger-radius circular paths, allowing mass spectrometers to separate ions of different masses.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-59',
    type: 'mcq',
    question: 'The time period of revolution of a charged particle moving in a circle perpendicular to a uniform magnetic field is',
    options: [
      'T = 2πm/(qB), independent of the particle\'s speed',
      'T = 2πr/v, which depends strongly on speed',
      'T = qB/(2πm)',
      'T = mv/(qB)'
    ],
    correctIndex: 0,
    explanation: 'Combining r = mv/(qB) with T = 2πr/v gives T = 2πm/(qB), which is independent of speed — a key result exploited in the design of the cyclotron.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-60',
    type: 'mcq',
    question: 'The magnetic field at a point on the axis of a circular current loop, at a distance x from the centre (x much greater than the radius R), can be approximated using the formula for',
    options: [
      'a straight infinite wire',
      'a magnetic dipole, since at large distances the loop behaves like a dipole with moment m = IA',
      'a solenoid',
      'a point charge'
    ],
    correctIndex: 1,
    explanation: 'For distances much larger than the loop\'s radius, the loop\'s field approximates that of a magnetic dipole with moment m = IπR², consistent with the general current-loop-as-dipole concept.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-61',
    type: 'mcq',
    question: 'Increasing the number of turns in a solenoid (keeping length and current constant) generally',
    options: [
      'decreases the magnetic field inside',
      'increases the magnetic field inside, since B = µ0nI and n (turns per unit length) increases',
      'has no effect on the magnetic field',
      'reverses the direction of the field'
    ],
    correctIndex: 1,
    explanation: 'Since B = µ0nI, increasing the number of turns per unit length n directly increases the magnetic field strength inside the solenoid for the same current.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-62',
    type: 'mcq',
    question: 'A toroid with a large number of closely wound turns carrying current I produces a magnetic field inside its core that is approximately',
    options: [
      'B = µ0NI/(2πr), where N is the total number of turns and r is the radius of the toroid at that point',
      'B = µ0I/(2πr) only, independent of N',
      'zero everywhere',
      'the same everywhere in space, not just inside the core'
    ],
    correctIndex: 0,
    explanation: 'For a toroid, applying Ampere\'s law with a circular Amperian loop inside the core gives B = µ0NI/(2πr), where N is the total number of turns and r is the distance from the toroid\'s central axis.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-63',
    type: 'mcq',
    question: 'The energy of a charged particle moving in a purely magnetic field (no electric field present) remains constant because',
    options: [
      'the magnetic force does no work on the particle, since it is always perpendicular to velocity',
      'the magnetic field itself has no energy',
      'the particle loses charge over time',
      'the particle\'s mass decreases'
    ],
    correctIndex: 0,
    explanation: 'Since the magnetic force F = qv × B is always perpendicular to velocity, it does zero work, meaning the kinetic energy (and hence speed) of the particle remains unchanged in a purely magnetic field.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-64',
    type: 'mcq',
    question: 'A rectangular current-carrying loop is placed in a non-uniform magnetic field. Compared to a uniform field, the loop in a non-uniform field may experience',
    options: [
      'only a torque, never a net force',
      'both a net force and a torque, in general',
      'neither a net force nor a torque',
      'only a net force, never a torque'
    ],
    correctIndex: 1,
    explanation: 'In a non-uniform field, the forces on different parts of the loop are unequal in magnitude, so unlike the uniform-field case (net force zero, torque possible), a non-uniform field can produce both a net force and a torque on the loop.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-65',
    type: 'mcq',
    question: 'The magnetic field due to a straight finite current-carrying wire, at a point at perpendicular distance r from the wire, depends on',
    options: [
      'only the current and the perpendicular distance',
      'the current, the perpendicular distance, and the angles subtended by the ends of the wire at that point',
      'only the length of the wire',
      'the resistance of the wire'
    ],
    correctIndex: 1,
    explanation: 'For a finite straight wire, the Biot-Savart law integration yields a field depending on current, perpendicular distance, and the angles subtended by the two ends of the wire at the field point (B = (µ0I/4πr)(sinθ1+sinθ2) in standard notation), unlike the simpler formula for an infinite wire.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-66',
    type: 'mcq',
    question: 'For an infinitely long straight wire, the formula B = µ0I/(2πr) is obtained from the general finite-wire formula by taking the limit where',
    options: [
      'the wire length approaches zero',
      'both ends of the wire are taken to extend to infinity, so both subtended angles approach 90°',
      'the current approaches zero',
      'the distance r approaches zero'
    ],
    correctIndex: 1,
    explanation: 'As the wire\'s length extends to infinity in both directions, the two angles subtended at the field point both approach 90°, and the general finite-wire formula reduces to the simpler B = µ0I/(2πr).',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-67',
    type: 'mcq',
    question: 'A charged particle moving in a magnetic field with its velocity having both a component parallel to B and a component perpendicular to B traces out a helical path. The pitch of this helix (distance advanced per revolution) depends on',
    options: [
      'only the perpendicular component of velocity',
      'the parallel component of velocity and the period of circular motion (which itself depends on q, B, and m)',
      'only the magnitude of the magnetic field',
      'the total kinetic energy of the particle'
    ],
    correctIndex: 1,
    explanation: 'The pitch equals (parallel velocity component) × (time period of one revolution), where the period T = 2πm/(qB) is set by the perpendicular motion, so pitch = v∥ × T depends on both the parallel velocity and this period.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-68',
    type: 'mcq',
    question: 'The magnetic force between two moving charges (not current-carrying wires, but two individual point charges in motion) can be understood as',
    options: [
      'purely a Coulomb force',
      'a consequence of each moving charge producing a magnetic field that exerts a force on the other moving charge',
      'a gravitational effect',
      'nonexistent, since single moving charges cannot produce magnetic fields'
    ],
    correctIndex: 1,
    explanation: 'A single moving charge produces a magnetic field (as well as an electric field), and this magnetic field can exert a force on another moving charge nearby, giving rise to a velocity-dependent magnetic interaction in addition to the Coulomb force.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-69',
    type: 'mcq',
    question: 'In the moving coil galvanometer, the restoring torque is provided by',
    options: [
      'gravity acting on the coil',
      'a spring (or suspension wire) that twists as the coil rotates, producing a torque proportional to the deflection angle',
      'friction between the coil and its support',
      'the magnetic field itself, without any mechanical component'
    ],
    correctIndex: 1,
    explanation: 'The restoring torque in a galvanometer comes from the elastic twisting of a spring or suspension wire, which is proportional to the angular deflection (τrestoring = kφ), balancing the magnetic deflecting torque at equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-70',
    type: 'mcq',
    question: 'The steady-state deflection φ of a moving coil galvanometer is related to the current I by',
    options: [
      'φ = (NAB/k) I, i.e., deflection is directly proportional to current',
      'φ is independent of the current',
      'φ = I²/(NAB)',
      'φ decreases as current increases'
    ],
    correctIndex: 0,
    explanation: 'At equilibrium, the deflecting torque NIAB equals the restoring torque kφ, giving φ = (NAB/k)I, showing that deflection is directly proportional to the current — the basis for a linear galvanometer scale.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'moving-charges-magnetism-71',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic force on a moving charged particle never changes its kinetic energy.\nReason (R): The magnetic force is always perpendicular to the velocity of the particle, so it does no work on it.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since F = qv × B is always perpendicular to v, the work done (F·d) is always zero, meaning the magnetic force cannot change the particle\'s kinetic energy — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-72',
    type: 'assertion-reason',
    question: 'Assertion (A): A charged particle moving parallel to a magnetic field travels in a straight line.\nReason (R): When velocity is parallel to the magnetic field, the angle between them is zero, making the magnetic force zero (since F = qvB sinθ).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With v parallel to B, sinθ = 0 and the magnetic force is zero, so the particle experiences no deflecting force and continues in a straight line — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-73',
    type: 'assertion-reason',
    question: 'Assertion (A): The radius of the circular path of a charged particle moving perpendicular to a magnetic field increases with the particle\'s speed.\nReason (R): The radius is given by r = mv/(qB), which is directly proportional to speed v for fixed mass, charge, and field.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since r = mv/(qB), increasing v (with m, q, B fixed) directly increases the radius — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Ampere\'s circuital law is especially useful for calculating the magnetic field of a long straight wire, a solenoid, or a toroid.\nReason (R): These configurations possess sufficient symmetry to allow the choice of an Amperian loop over which B is either constant in magnitude or zero, simplifying the line integral.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The computational power of Ampere\'s law depends on exploiting symmetry to simplify ∮B·dl, and these standard configurations offer exactly that symmetry — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Two long straight parallel wires carrying current in the same direction attract each other.\nReason (R): The magnetic field produced by one current-carrying wire exerts a force on the current in the neighbouring wire, and this force works out to be attractive when the currents are in the same direction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Each wire\'s magnetic field exerts a force on the current in the other wire; for parallel (same-direction) currents, this mutual interaction results in an attractive force — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-76',
    type: 'assertion-reason',
    question: 'Assertion (A): A current-carrying loop placed in a uniform magnetic field with its magnetic moment parallel to the field experiences zero torque.\nReason (R): Torque on the loop is given by τ = mB sinθ, which becomes zero when θ = 0°.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At θ = 0° (m parallel to B), sinθ = 0, so torque τ = mB sinθ = 0 — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-77',
    type: 'assertion-reason',
    question: 'Assertion (A): A moving coil galvanometer uses a radial magnetic field.\nReason (R): A radial field ensures that the plane of the coil is always parallel to the field direction at every angle of deflection, making the deflecting torque directly proportional to the current throughout the range, giving a linear scale.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The radial field design specifically ensures the field remains in the coil\'s plane at every deflection angle, eliminating the sinθ dependence and making the galvanometer scale linear — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-78',
    type: 'assertion-reason',
    question: 'Assertion (A): A galvanometer cannot be used directly as an ammeter to measure large currents.\nReason (R): Passing a large current directly through the galvanometer\'s delicate coil could damage it, and its resistance is generally too high to be inserted directly into a circuit without disturbing the current being measured.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A galvanometer\'s coil is delicate and its resistance would alter circuit currents significantly if used directly in series for large currents, which is why a low-resistance shunt is used instead — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-79',
    type: 'assertion-reason',
    question: 'Assertion (A): The time period of a charged particle\'s circular motion in a magnetic field is independent of its speed.\nReason (R): T = 2πm/(qB), which does not contain the speed v, since the radius r also scales proportionally with v, keeping T constant.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since T = 2πr/v = 2πm/(qB), the v dependence in r exactly cancels with the v in the denominator, leaving T independent of speed — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-80',
    type: 'assertion-reason',
    question: 'Assertion (A): A cyclotron cannot be used to accelerate neutrons.\nReason (R): The cyclotron works by using electric fields to accelerate the particle and magnetic fields to bend its path, both of which require the particle to have a non-zero charge.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since neutrons carry no charge, they experience neither the electric force (for acceleration) nor the magnetic force (for path-bending), making the cyclotron mechanism entirely inapplicable to them — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-81',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic field inside a very long, ideal solenoid is uniform.\nReason (R): Near the ends of a real (finite) solenoid, the magnetic field deviates from the uniform value found deep inside the solenoid.',
    options: [
      'Both A and R are true, but R is NOT the correct explanation of A',
      'Both A and R are true, and R is the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A is true for the idealized infinite solenoid, and R is also a true (related) statement about real finite solenoids, but R describes end effects in finite solenoids rather than directly explaining why the field is uniform deep inside an infinite one — so R does not directly serve as the explanation for A.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-82',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic field outside a toroid (both in the central hole and beyond its outer boundary) is zero.\nReason (R): An Amperian loop drawn in these regions encloses zero net current, so by Ampere\'s law, the field there is zero.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the toroid\'s windings only enclose current for Amperian loops drawn within the core itself, loops elsewhere enclose zero net current, giving zero field there — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-83',
    type: 'assertion-reason',
    question: 'Assertion (A): A charged particle at rest in a magnetic field experiences no magnetic force.\nReason (R): The magnetic force depends on the velocity of the charged particle, and F = qv × B becomes zero when v = 0.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the magnetic force formula explicitly involves velocity, a stationary charge (v = 0) experiences zero magnetic force regardless of the field strength — R correctly explains A.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-84',
    type: 'assertion-reason',
    question: 'Assertion (A): The current sensitivity of a galvanometer can be increased by increasing the number of turns in its coil.\nReason (R): Current sensitivity is given by NAB/k, which is directly proportional to the number of turns N.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since sensitivity is directly proportional to N (number of turns), increasing N directly increases current sensitivity — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-85',
    type: 'assertion-reason',
    question: 'Assertion (A): The Biot-Savart law and Coulomb\'s law have similar mathematical structures.\nReason (R): Both laws describe forces that vary inversely with the square of the distance, and both involve a proportionality constant characterizing the medium.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Both laws share a 1/r² dependence and a proportionality constant related to the properties of free space (ε₀ for Coulomb\'s law, µ0 for Biot-Savart), giving them structurally analogous forms — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-86',
    type: 'assertion-reason',
    question: 'Assertion (A): A velocity selector allows only particles moving with a specific speed to pass through undeflected.\nReason (R): For that specific speed, the electric force and the magnetic force on the particle are equal in magnitude and opposite in direction, giving zero net force.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At v = E/B, qE and qvB are equal and opposite, resulting in zero net force so that particle continues in a straight line — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic field due to a long straight current-carrying wire is stronger closer to the wire.\nReason (R): The field due to an infinite straight wire is given by B = µ0I/(2πr), which decreases as the perpendicular distance r increases.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since B ∝ 1/r, the field is stronger at smaller r (closer to the wire) and weaker at larger r — R correctly explains A.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-88',
    type: 'assertion-reason',
    question: 'Assertion (A): A rectangular current-carrying loop can be treated as a magnetic dipole.\nReason (R): The torque experienced by the loop in a uniform field has the same mathematical form as the torque experienced by an electric dipole in a uniform electric field, with magnetic moment m replacing electric dipole moment p.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The structural similarity between τ = m × B (loop) and τ = p × E (electric dipole) is a key reason the current loop is treated as analogous to a magnetic dipole — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-89',
    type: 'assertion-reason',
    question: 'Assertion (A): A charged particle moving in a magnetic field along a helical path has constant speed.\nReason (R): The magnetic force does no work on the particle regardless of the angle between its velocity and the field, so the particle\'s kinetic energy (and hence speed) remains constant throughout the helical motion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since magnetic force is always perpendicular to velocity (regardless of the specific direction), it does zero work throughout the helical trajectory, keeping the particle\'s speed constant — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The ampere (unit of current) was historically defined using the force between two current-carrying wires.\nReason (R): This definition is convenient because the force between the wires can be measured with reasonable precision, providing an operational, reproducible standard for the unit of current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Using a measurable, reproducible mechanical force (between wires at a fixed separation) to define the ampere provided a workable operational standard historically — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic field at the centre of a circular current loop is stronger than the field at a point on its axis, far away from the centre.\nReason (R): Magnetic field due to a current loop decreases as one moves away from the plane of the loop along its axis.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The field on the axis of a current loop is maximum at the centre and falls off with increasing axial distance, so the field is indeed strongest at the centre — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-92',
    type: 'assertion-reason',
    question: 'Assertion (A): The direction of the force on a current-carrying conductor in a magnetic field reverses if the current direction is reversed.\nReason (R): The force is given by F = IL × B, and reversing the direction of current reverses the direction of the vector IL, which in turn reverses the direction of the cross product.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since F depends linearly on the current direction via the cross product IL × B, reversing the current reverses the force direction — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Two charges moving parallel to each other with the same velocity experience an additional attractive (or repulsive, depending on charge signs and current direction analogy) magnetic force, on top of their usual Coulomb interaction.\nReason (R): Moving charges constitute currents, and parallel currents in the same direction experience a mutual attractive magnetic force, analogous to two parallel current-carrying wires.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Moving charges of the same sign moving in the same direction behave analogously to two currents in the same direction, and following the same reasoning as parallel wires, they experience an additional magnetic interaction alongside their Coulomb force — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The pitch of the helical path of a charged particle in a magnetic field depends on the angle between its initial velocity and the field direction.\nReason (R): The pitch is determined by the component of velocity parallel to the field, which changes as the angle between velocity and field changes for a given speed.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since pitch = v∥ × T, and v∥ = v cosθ depends on the angle between the velocity and the field, changing this angle changes the pitch for a given speed — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-95',
    type: 'assertion-reason',
    question: 'Assertion (A): A current-carrying loop experiences no net translational force in a uniform magnetic field.\nReason (R): The forces on opposite sides/segments of the loop are equal in magnitude and opposite in direction, and they exactly cancel out when the field is uniform throughout the loop\'s region.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'In a uniform field, forces on symmetric parts of the loop cancel out exactly, giving zero net force (though a net torque may exist if the loop is misaligned with the field) — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Reducing the resistance of the shunt in an ammeter increases the range of currents it can measure.\nReason (R): A lower shunt resistance diverts a larger fraction of the total current away from the galvanometer coil, allowing a larger total current to be measured for the same galvanometer full-scale deflection.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A smaller shunt resistance draws proportionally more current away from the sensitive galvanometer coil, so a larger total circuit current corresponds to the same (safe) current through the coil, effectively extending the measurable range — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic field due to a current element, as given by the Biot-Savart law, is zero along the axis of the current element itself.\nReason (R): The Biot-Savart law includes a factor of sinθ, where θ is the angle between the current element and the position vector to the field point, and sinθ = 0 along the axis (θ = 0°).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since dB ∝ sinθ, and θ = 0° along the axis of the current element, the field vanishes there — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-98',
    type: 'assertion-reason',
    question: 'Assertion (A): A charged particle moving perpendicular to a magnetic field follows a path with constant radius throughout its motion (assuming the field is uniform).\nReason (R): Since the magnetic force does no work, the particle\'s speed remains constant, and with fixed q, m, B, and v, the radius r = mv/(qB) also remains constant.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since speed remains constant (no work done) and B, q, m are fixed, the radius formula r = mv/(qB) yields a constant value throughout the circular motion — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The torque on a current loop placed in a magnetic field is zero when the loop\'s plane is perpendicular to the field.\nReason (R): When the loop\'s plane is perpendicular to B, its magnetic moment vector (normal to the plane) is parallel to B, making sinθ = 0 in the torque formula.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'When the loop\'s plane is perpendicular to B, the normal (magnetic moment direction) is parallel to B, giving θ = 0° and zero torque — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Increasing the magnetic field strength in a cyclotron increases the maximum kinetic energy achievable by the accelerated particle (for a fixed maximum radius).\nReason (R): The maximum kinetic energy in a cyclotron is proportional to B²R², so for a fixed dee radius R, increasing B increases the achievable maximum energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Using KEmax = q²B²R²/(2m), for a fixed maximum radius R, increasing B directly increases the maximum achievable kinetic energy of the accelerated particle — R correctly explains A.',
    difficulty: 'hard'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'moving-charges-magnetism-101',
    type: 'statement',
    question: 'Statement I: The magnetic force on a moving charge is always perpendicular to its velocity.\nStatement II: The magnetic force can do work on a moving charge, changing its speed.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — since the magnetic force is always perpendicular to velocity, it can never do work or change the speed of the particle.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-102',
    type: 'statement',
    question: 'Statement I: The magnetic field inside an ideal long solenoid is uniform and given by B = µ0nI.\nStatement II: The magnetic field outside an ideal long solenoid is also given by B = µ0nI.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the field outside an ideal (infinitely long) solenoid is approximately zero, not µ0nI.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-103',
    type: 'statement',
    question: 'Statement I: The magnetic field due to a long straight current-carrying wire decreases as 1/r with perpendicular distance.\nStatement II: The magnetic field at the centre of a circular current loop decreases as 1/R² with the radius of the loop.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — B = µ0I/(2R) at the centre of a loop decreases as 1/R (not 1/R²) as the loop\'s radius increases.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-104',
    type: 'statement',
    question: 'Statement I: Two parallel wires carrying current in the same direction attract each other.\nStatement II: Two parallel wires carrying current in opposite directions attract each other.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — currents in opposite directions in parallel wires repel each other, not attract.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-105',
    type: 'statement',
    question: 'Statement I: A galvanometer is converted into an ammeter by connecting a low resistance in parallel with it.\nStatement II: A galvanometer is converted into a voltmeter by connecting a high resistance in series with it.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the standard conversion methods: shunt (low resistance) in parallel for an ammeter, and high resistance in series for a voltmeter.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-106',
    type: 'statement',
    question: 'Statement I: The time period of circular motion of a charged particle in a magnetic field depends on its speed.\nStatement II: The radius of circular motion of a charged particle in a magnetic field depends on its speed.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the time period T = 2πm/(qB) is independent of speed. Statement II is correct — the radius r = mv/(qB) directly depends on speed.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-107',
    type: 'statement',
    question: 'Statement I: A current-carrying loop behaves like a magnetic dipole at large distances.\nStatement II: The torque on a current loop in a uniform magnetic field is maximum when the loop\'s magnetic moment is perpendicular to the field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the current loop-dipole analogy and the torque-maximization condition (θ = 90°, sinθ = 1) are both standard NCERT results.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-108',
    type: 'statement',
    question: 'Statement I: Ampere\'s circuital law is valid only for symmetric current distributions.\nStatement II: Ampere\'s circuital law, ∮B·dl = µ0Ienc, holds for any closed loop and any current distribution, though it is only practically useful for finding B directly in symmetric cases.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — Ampere\'s law itself is universally valid, analogous to Gauss\'s law in electrostatics. Statement II correctly clarifies this distinction between universal validity and practical usefulness in symmetric cases.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-109',
    type: 'statement',
    question: 'Statement I: A cyclotron can accelerate neutral particles like neutrons.\nStatement II: A cyclotron works effectively for very light particles like electrons at all energies, without any relativistic limitations.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are false. Statement I: a cyclotron cannot accelerate neutral particles since it relies on electric and magnetic forces, both requiring charge. Statement II: cyclotrons face relativistic limitations for light, fast particles like electrons.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-110',
    type: 'statement',
    question: 'Statement I: The direction of magnetic field due to a straight current-carrying wire can be found using the right-hand thumb rule.\nStatement II: The direction of force on a current-carrying conductor in a magnetic field can be found using Fleming\'s left-hand rule.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify the appropriate rules for these two distinct purposes: right-hand rule for field direction due to current, left-hand rule for force on a current-carrying conductor.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-111',
    type: 'statement',
    question: 'Statement I: A charged particle moving in a helical path in a magnetic field has a pitch that depends on the component of velocity parallel to the field.\nStatement II: The radius of the helical path depends on the component of velocity perpendicular to the field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — pitch depends on v∥ (unaffected component along B), while radius r = mv⊥/(qB) depends on the perpendicular velocity component.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-112',
    type: 'statement',
    question: 'Statement I: The magnetic moment of a current loop is given by m = IA, where A is the area of the loop.\nStatement II: The direction of the magnetic moment vector is always along the direction of current flow.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the magnetic moment direction is perpendicular to the plane of the loop (given by the right-hand rule applied to the current direction), not along the current flow direction itself.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-113',
    type: 'statement',
    question: 'Statement I: A velocity selector uses mutually perpendicular electric and magnetic fields.\nStatement II: In a velocity selector, only particles with speed v = E/B pass through undeflected, regardless of their mass or charge.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the velocity selector requires perpendicular E and B fields, and the balance condition v = E/B is independent of the particle\'s mass or charge (since both qE and qvB scale with charge, which cancels).',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-114',
    type: 'statement',
    question: 'Statement I: The current sensitivity of a galvanometer increases if the number of turns in the coil is increased.\nStatement II: The voltage sensitivity of a galvanometer always increases whenever the current sensitivity increases, by the same factor.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — voltage sensitivity depends on current sensitivity divided by resistance (which itself may also change when N changes, e.g., due to more wire length), so the two do not necessarily scale identically.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-115',
    type: 'statement',
    question: 'Statement I: The magnetic field due to a toroid is confined almost entirely within its core.\nStatement II: The magnetic field due to a toroid depends on the total number of turns and the current, but not on the radius at the point of measurement (within the core).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the field inside a toroid, B = µ0NI/(2πr), does depend on the radial distance r from the toroid\'s central axis at the point being measured.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-116',
    type: 'statement',
    question: 'Statement I: The Biot-Savart law is analogous in form to Coulomb\'s law.\nStatement II: The Biot-Savart law is used to calculate electric fields, similar to how Coulomb\'s law is used.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — both laws share a similar mathematical (inverse-square) structure. Statement II is false — the Biot-Savart law is used to calculate magnetic fields due to currents, not electric fields.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-117',
    type: 'statement',
    question: 'Statement I: The force on a current-carrying conductor placed in a magnetic field is maximum when the conductor is perpendicular to the field.\nStatement II: The force on a current-carrying conductor placed in a magnetic field is zero when the conductor is parallel to the field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct, following directly from F = BIL sinθ, which is maximum at θ = 90° and zero at θ = 0°.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-118',
    type: 'statement',
    question: 'Statement I: The magnetic field at a point on the axis of a current loop is maximum at the centre of the loop.\nStatement II: The magnetic field at a point on the axis of a current loop increases without bound as the distance from the centre increases.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the axial field decreases (not increases) as one moves away from the centre along the axis.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-119',
    type: 'statement',
    question: 'Statement I: The magnetic force on a charge does not depend on the mass of the particle.\nStatement II: The radius of circular motion of a charged particle in a magnetic field does not depend on the mass of the particle.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — F = qvB sinθ has no explicit mass term. Statement II is false — the radius r = mv/(qB) explicitly depends on mass; heavier particles (same q, v, B) trace larger circles.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-120',
    type: 'statement',
    question: 'Statement I: A radial magnetic field in a galvanometer ensures the deflection is directly proportional to the current.\nStatement II: Without a radial field, the torque on the galvanometer coil would still be directly proportional to current at all deflection angles.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — without a radial field, the torque would include a sinθ (angle-dependent) factor, making the relationship between deflection and current non-linear, unlike with the radial field design.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-121',
    type: 'statement',
    question: 'Statement I: The force between two long parallel current-carrying wires is used to define the SI unit of current historically.\nStatement II: This force is directly proportional to the product of the two currents and inversely proportional to the separation between the wires.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this force (F/L = µ0I1I2/2πd) formed the historical basis for defining the ampere, and it does depend as described on the currents and separation.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-122',
    type: 'statement',
    question: 'Statement I: A charged particle moving in a circular orbit in a magnetic field experiences a magnetic force acting as the centripetal force.\nStatement II: The magnetic force in this scenario also does positive work, gradually increasing the orbital speed of the particle over time.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — the magnetic force provides the necessary centripetal force for circular motion. Statement II is false — since magnetic force does no work, the orbital speed remains constant, it does not increase over time.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-123',
    type: 'statement',
    question: 'Statement I: The magnetic field due to a finite straight current-carrying wire depends on the angles subtended by the ends of the wire at the observation point.\nStatement II: For an infinitely long wire, these angles both approach 90°, simplifying the formula to B = µ0I/(2πr).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and describe the standard derivation connecting the general finite-wire formula to the simpler infinite-wire result as a limiting case.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-124',
    type: 'statement',
    question: 'Statement I: The direction of the magnetic force on a positive charge moving in a magnetic field is opposite to that on a negative charge moving with the same velocity in the same field.\nStatement II: This is because the force formula F = qv × B depends linearly on the sign of the charge q.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — since F = qv × B is linear in q, reversing the sign of the charge (while keeping v and B the same) exactly reverses the direction of the force.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-125',
    type: 'statement',
    question: 'Statement I: A cyclotron uses a constant (unchanging) electric field to continuously accelerate a charged particle.\nStatement II: A cyclotron uses an alternating electric field, synchronized with the particle\'s circular motion, to repeatedly accelerate it each time it crosses the gap between the dees.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — a cyclotron uses an alternating (not constant) electric field. Statement II correctly describes how the alternating field, synchronized to the cyclotron frequency, gives repeated acceleration as the particle crosses the gap.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-126',
    type: 'statement',
    question: 'Statement I: The magnetic field due to a solenoid depends on the number of turns per unit length.\nStatement II: The magnetic field due to a solenoid is completely independent of the current flowing through it.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (B = µ0nI depends on n). Statement II is false — the field is directly proportional to the current I, not independent of it.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-127',
    type: 'statement',
    question: 'Statement I: The torque on a current loop in a magnetic field is a maximum torque when the loop\'s plane is parallel to the field.\nStatement II: When the loop\'s plane is parallel to the field, its magnetic moment is perpendicular to the field, giving sinθ = 1 in the torque formula.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and logically connected — the loop\'s plane parallel to B means its normal (magnetic moment) is perpendicular to B, giving θ = 90° and hence maximum torque (sinθ = 1).',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-128',
    type: 'statement',
    question: 'Statement I: A moving coil galvanometer can be used directly to measure alternating current (AC) accurately.\nStatement II: A moving coil galvanometer\'s deflection depends on the average value of a rapidly alternating current, which tends toward zero for a symmetric AC waveform.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — a standard moving coil galvanometer is not suited to measure AC directly, since the coil\'s inertia responds to a time-averaged torque. Statement II correctly explains why: for symmetric AC, the average current (and hence torque) tends to zero, giving negligible steady deflection.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-129',
    type: 'statement',
    question: 'Statement I: The concept of a magnetic dipole moment for a current loop is analogous to the electric dipole moment for a pair of charges.\nStatement II: Just as an electric dipole experiences no net force in a uniform electric field, a current loop (magnetic dipole) experiences no net force in a uniform magnetic field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the analogy between electric and magnetic dipoles extends to their behaviour in uniform fields, where both experience a torque (if misaligned) but zero net translational force.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-130',
    type: 'statement',
    question: 'Statement I: Increasing the shunt resistance in an ammeter increases the range of currents it can measure.\nStatement II: Decreasing the series resistance in a voltmeter increases the range of voltages it can measure.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are false. Statement I: decreasing (not increasing) the shunt resistance increases the ammeter\'s current range, since a lower shunt diverts more current away from the galvanometer. Statement II: increasing (not decreasing) the series resistance increases a voltmeter\'s voltage range.',
    difficulty: 'hard'
  },

  // ==================== HOW MANY / NUMBER-CORRECT (20) ====================
  {
    id: 'moving-charges-magnetism-131',
    type: 'how-many',
    question: 'How many of the following statements about the magnetic force on a moving charge are correct?\n1. It is always perpendicular to the velocity.\n2. It does no work on the charge.\n3. It can change the speed of the charge.\n4. It depends on the sine of the angle between velocity and field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — since the force does no work, it cannot change the speed, only the direction of the velocity.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-132',
    type: 'how-many',
    question: 'How many of the following statements about Ampere\'s circuital law are correct?\n1. It relates the line integral of B around a closed loop to the enclosed current.\n2. It is valid for any current distribution and any closed loop, not just symmetric cases.\n3. It is analogous to Gauss\'s law in electrostatics.\n4. It can only be used when the current distribution has cylindrical symmetry.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — while it is most useful computationally for symmetric cases (cylindrical, planar, etc.), Ampere\'s law itself is universally valid for any current distribution.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-133',
    type: 'how-many',
    question: 'How many of the following standard formulas for magnetic field are correctly stated?\n1. Long straight wire: B = µ0I/(2πr)\n2. Centre of circular loop: B = µ0I/(2R)\n3. Inside a long solenoid: B = µ0nI\n4. Inside a toroid: B = µ0NI/(2πr)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four formulas are correctly stated as per standard NCERT results for these respective configurations.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-134',
    type: 'how-many',
    question: 'How many of the following statements about a charged particle moving perpendicular to a uniform magnetic field are correct?\n1. It moves in a circular path.\n2. Its speed remains constant.\n3. Its radius depends on its mass, charge, speed, and the field strength.\n4. Its time period depends on its speed.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the time period T = 2πm/(qB) is independent of speed.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-135',
    type: 'how-many',
    question: 'How many of the following statements about a moving coil galvanometer are correct?\n1. It uses a radial magnetic field for a linear scale.\n2. The restoring torque is provided by a spring/suspension.\n3. Deflection is directly proportional to current at equilibrium.\n4. It can be used directly, without modification, as an ammeter to measure large currents.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a galvanometer requires a shunt resistance modification (becoming an ammeter) before it can safely measure large currents.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-136',
    type: 'how-many',
    question: 'How many of the following statements about two long parallel current-carrying wires are correct?\n1. Same-direction currents attract each other.\n2. Opposite-direction currents repel each other.\n3. The force per unit length is F/L = µ0I1I2/(2πd).\n4. This force forms the basis of the historical definition of the ampere.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct and standard NCERT facts about the force between parallel current-carrying wires.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-137',
    type: 'how-many',
    question: 'How many of the following statements about a current loop as a magnetic dipole are correct?\n1. The magnetic moment is given by m = NIA for N turns.\n2. The loop experiences maximum torque when its magnetic moment is perpendicular to the field.\n3. The loop experiences zero torque when its magnetic moment is parallel to the field.\n4. The loop always experiences a net translational force in any magnetic field, uniform or non-uniform.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the loop experiences zero net force in a uniform field; only in a non-uniform field can a net translational force arise.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-138',
    type: 'how-many',
    question: 'How many of the following statements about a cyclotron are correct?\n1. It uses both electric and magnetic fields.\n2. The magnetic field changes the particle\'s speed.\n3. The electric field is responsible for accelerating (increasing the speed of) the particle.\n4. It works effectively for neutral particles like neutrons.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 3 are correct. Statement 2 is false — the magnetic field bends the path but does not change speed (does no work). Statement 4 is false — the cyclotron requires charged particles; it cannot accelerate neutral particles.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-139',
    type: 'how-many',
    question: 'How many of the following are correct methods/rules for finding directions in magnetism?\n1. Right-hand thumb rule — for direction of magnetic field due to a current.\n2. Fleming\'s left-hand rule — for direction of force on a current-carrying conductor.\n3. Fleming\'s right-hand rule — for direction of the magnetic field due to a current loop.\n4. Right-hand rule (curl fingers along current in a loop) — for the direction of the loop\'s magnetic moment/field at its centre.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 correctly describe standard rules used in this chapter. Statement 3 is false — Fleming\'s right-hand rule pertains to electromagnetic induction (motional EMF), not to finding magnetic field direction due to a current loop.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-140',
    type: 'how-many',
    question: 'How many of the following statements about the force on a current-carrying conductor in a magnetic field are correct?\n1. F = BIL sinθ, where θ is the angle between current direction and field.\n2. Force is maximum when the conductor is perpendicular to the field.\n3. Force is zero when the conductor is parallel to the field.\n4. Force direction can be found using Fleming\'s left-hand rule.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct — this is a complete and accurate description of the force on a current-carrying conductor as covered in NCERT.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-141',
    type: 'how-many',
    question: 'How many of the following statements about the Biot-Savart law are correct?\n1. It is used to calculate the magnetic field due to a current element.\n2. The field is proportional to sinθ, where θ is the angle between the current element and the position vector.\n3. The field decreases as the square of the distance from the current element.\n4. It gives a field parallel to the current element\'s direction.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the field is perpendicular to the plane containing the current element and the position vector (via the cross product), not parallel to the current element.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-142',
    type: 'how-many',
    question: 'How many of the following statements about a solenoid and toroid are correct?\n1. A toroid is essentially a solenoid bent into a closed ring shape.\n2. The field inside an ideal solenoid is uniform.\n3. The field inside a toroid is completely uniform throughout its core, independent of radial position.\n4. The field outside a toroid (both inside the hole and beyond the outer edge) is zero.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the field inside a toroid\'s core, B = µ0NI/(2πr), varies with radial distance r, so it is not perfectly uniform (unlike the idealized solenoid case).',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-143',
    type: 'how-many',
    question: 'How many of the following statements about a velocity selector are correct?\n1. It uses perpendicular electric and magnetic fields.\n2. Only particles with speed v = E/B pass through undeflected.\n3. The balance condition depends on the mass of the particle.\n4. The balance condition depends on the charge of the particle.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 are correct. Statements 3 and 4 are false — the balance condition v = E/B is independent of both mass and charge, since qE = qvB simplifies to v = E/B, with q cancelling out.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-144',
    type: 'how-many',
    question: 'How many of the following statements about converting a galvanometer are correct?\n1. Adding a low shunt resistance in parallel converts it to an ammeter.\n2. Adding a high resistance in series converts it to a voltmeter.\n3. An ideal ammeter should have zero resistance.\n4. An ideal voltmeter should have zero resistance.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — an ideal voltmeter should have infinite (not zero) resistance so it draws negligible current from the circuit.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-145',
    type: 'how-many',
    question: 'How many of the following statements about a charged particle following a helical path in a magnetic field are correct?\n1. The path arises when the velocity has components both parallel and perpendicular to the field.\n2. The pitch of the helix depends on the parallel velocity component and the period of circular motion.\n3. The radius of the helix depends on the perpendicular velocity component.\n4. The particle\'s speed changes continuously as it moves along the helix.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the particle\'s speed remains constant throughout its helical motion, since the magnetic force does no work.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-146',
    type: 'how-many',
    question: 'How many of the following are correct SI units?\n1. Magnetic field — tesla (T)\n2. Magnetic moment — ampere-metre² (A·m²)\n3. Current — ampere (A)\n4. Torque — newton-metre (N·m)\n5. Magnetic flux — weber (Wb)',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 3,
    explanation: 'All five listed units are correctly stated: tesla for field, A·m² for magnetic moment, ampere for current, N·m for torque, and weber for flux. All 5 are correct.',
    difficulty: 'easy'
  },
  {
    id: 'moving-charges-magnetism-147',
    type: 'how-many',
    question: 'How many of the following statements about the current sensitivity of a galvanometer are correct?\n1. It is defined as deflection produced per unit current.\n2. It increases with an increase in the number of turns N.\n3. It increases with an increase in the torsional constant k of the spring.\n4. It increases with an increase in the magnetic field B or coil area A.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — sensitivity = NAB/k, so increasing k (torsional constant) actually decreases sensitivity, not increases it.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-148',
    type: 'how-many',
    question: 'How many of the following statements comparing the Biot-Savart law and Coulomb\'s law are correct?\n1. Both involve an inverse-square dependence on distance.\n2. Both involve a proportionality constant related to the properties of free space.\n3. The Biot-Savart law gives a field always along the line joining the source and field point, just like Coulomb\'s law.\n4. Coulomb\'s law applies to point charges; the Biot-Savart law applies to current elements.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — unlike Coulomb\'s law (field along the line joining source and point), the Biot-Savart law gives a field perpendicular to the plane containing the current element and the position vector.',
    difficulty: 'hard'
  },
  {
    id: 'moving-charges-magnetism-149',
    type: 'how-many',
    question: 'How many of the following statements about the magnetic field of a current-carrying circular loop are correct?\n1. The field at the centre is B = µ0I/(2R).\n2. The field on the axis, far from the loop, approximates a magnetic dipole field, decreasing as 1/x³.\n3. The direction of the field at the centre can be found using the right-hand thumb rule.\n4. The field at the centre is independent of the current flowing through the loop.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the field B = µ0I/(2R) is directly proportional to the current I, not independent of it.',
    difficulty: 'medium'
  },
  {
    id: 'moving-charges-magnetism-150',
    type: 'how-many',
    question: 'How many of the following statements about the equivalence of a current loop and a magnetic dipole are correct?\n1. A current loop\'s magnetic field at large axial distances resembles that of a magnetic dipole.\n2. The torque formula for a current loop in a field, τ = m × B, has the same form as that for an electric dipole, τ = p × E.\n3. Both a current loop and an electric dipole experience zero net force in a uniform external field.\n4. The magnetic dipole moment and electric dipole moment have the same SI units.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — magnetic dipole moment has units of A·m², while electric dipole moment has units of C·m; these are different physical quantities with different units.',
    difficulty: 'hard'
  }
];

export default questions;
