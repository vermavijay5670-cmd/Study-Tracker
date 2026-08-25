import type { Question } from "@/lib/questionBank";

// NEET Physics Question Bank
// Chapter: Work, Energy and Power
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'work-energy-and-power-1',
    type: 'mcq',
    question: 'Work done by a constant force F, acting on a body that undergoes a displacement d, is defined mathematically as:',
    options: [
      'W = F + d',
      'W = F · d = Fd cosθ, where θ is the angle between force and displacement',
      'W = F/d',
      'W = F × d (vector cross product)'
    ],
    correctIndex: 1,
    explanation: 'Work is defined as the scalar (dot) product of force and displacement, W = F·d = Fd cosθ, where θ is the angle between the two vectors.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-2',
    type: 'mcq',
    question: 'Work is a __ quantity, since it is obtained from the dot product of two vectors (force and displacement).',
    options: [
      'Vector',
      'Scalar',
      'Tensor',
      'Complex'
    ],
    correctIndex: 1,
    explanation: 'Although both force and displacement are vectors, their dot product (which defines work) is a scalar quantity.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-3',
    type: 'mcq',
    question: 'The SI unit of work is the:',
    options: [
      'Newton',
      'Joule',
      'Watt',
      'Erg'
    ],
    correctIndex: 1,
    explanation: 'The SI unit of work (and energy) is the joule (J), equal to 1 newton-metre (N·m).',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-4',
    type: 'mcq',
    question: 'One joule of work is equivalent to how many ergs (the CGS unit of work)?',
    options: [
      '10² ergs',
      '10^5 ergs',
      '10^7 ergs',
      '10^9 ergs'
    ],
    correctIndex: 2,
    explanation: '1 joule = 10^7 ergs, since the joule (SI) is a much larger unit than the erg (CGS).',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-5',
    type: 'mcq',
    question: 'The electron volt (eV), a unit of energy commonly used in atomic and nuclear physics, is related to the joule by:',
    options: [
      '1 eV = 1.6 × 10^-19 J',
      '1 eV = 1.6 × 10^19 J',
      '1 eV = 1 J',
      '1 eV = 9.1 × 10^-31 J'
    ],
    correctIndex: 0,
    explanation: 'One electron volt is defined as the energy gained by an electron when accelerated through a potential difference of 1 volt, and equals 1.6 × 10^-19 J.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-6',
    type: 'mcq',
    question: 'Work done by a force on a body is positive when the angle θ between the force and the displacement satisfies:',
    options: [
      '0° ≤ θ < 90°, so that cosθ is positive',
      '90° < θ ≤ 180°',
      'θ = 90° exactly',
      'Work is never positive'
    ],
    correctIndex: 0,
    explanation: 'Since W = Fd cosθ, work is positive whenever the angle between force and displacement is acute (less than 90°), making cosθ positive.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-7',
    type: 'mcq',
    question: 'Work done by a force on a body is negative when the angle θ between force and displacement satisfies:',
    options: [
      '0° ≤ θ < 90°',
      '90° < θ ≤ 180°, so that cosθ is negative',
      'θ = 0° exactly',
      'Work can never be negative'
    ],
    correctIndex: 1,
    explanation: 'When the angle between force and displacement is obtuse (between 90° and 180°), cosθ is negative, making the work done negative.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-8',
    type: 'mcq',
    question: 'Work done by a force is zero if:',
    options: [
      'The force and displacement are in exactly the same direction',
      'The force acts perpendicular to the displacement (θ = 90°), or if either the force or the displacement is zero',
      'The force and displacement are exactly opposite in direction',
      'The magnitude of the force is very large'
    ],
    correctIndex: 1,
    explanation: 'Work is zero when the force is perpendicular to displacement (cos90° = 0), or when either the force itself or the actual displacement is zero.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-9',
    type: 'mcq',
    question: 'When an object undergoes uniform circular motion, the work done by the centripetal force on the object over any interval is:',
    options: [
      'Always positive',
      'Always negative',
      'Always zero, since the centripetal force is always perpendicular to the velocity (and hence displacement)',
      'Dependent on the speed of the object'
    ],
    correctIndex: 2,
    explanation: 'Since the centripetal force is always directed radially, perpendicular to the tangential velocity (and instantaneous displacement), it does zero work at every instant in uniform circular motion.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-10',
    type: 'mcq',
    question: 'When a ball is thrown vertically upward, the work done by gravity on the ball during its upward journey (before reaching maximum height) is:',
    options: [
      'Positive, since gravity acts in the same direction as motion',
      'Negative, since gravity acts opposite to the direction of the upward displacement',
      'Zero throughout the upward journey',
      'Dependent only on the mass of the ball'
    ],
    correctIndex: 1,
    explanation: 'While the ball moves upward, gravity (acting downward) is opposite to the displacement, making the angle between them 180°, so the work done by gravity is negative during ascent.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-11',
    type: 'mcq',
    question: 'For a variable force acting on a body along a straight line, the total work done as the body moves from x1 to x2 is given by:',
    options: [
      'W = F(x2 − x1) always, regardless of how F varies',
      'W = ∫ F dx from x1 to x2, i.e., the area under the force-displacement (F-x) graph',
      'W = F/(x2 − x1)',
      'W = the average value of x1 and x2'
    ],
    correctIndex: 1,
    explanation: 'For a variable force, work is computed as the integral of force with respect to displacement, which corresponds graphically to the area under the F-x curve between the given limits.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-12',
    type: 'mcq',
    question: 'On a force-displacement (F-x) graph, if the force varies linearly with displacement, the work done between two points is calculated as:',
    options: [
      'The slope of the line',
      'The area of the resulting geometric shape (e.g., a triangle or trapezium) under the graph between the two points',
      'The y-intercept of the graph',
      'The maximum force value only'
    ],
    correctIndex: 1,
    explanation: 'For a linearly varying force, the F-x graph forms a straight line, and the area under this line (often a triangle or trapezium) between the given displacement limits gives the work done.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-13',
    type: 'mcq',
    question: 'The kinetic energy of a body of mass m moving with speed v is given by:',
    options: [
      'KE = mv',
      'KE = (1/2)mv²',
      'KE = mv²',
      'KE = (1/2)m²v'
    ],
    correctIndex: 1,
    explanation: 'Kinetic energy, the energy possessed by a body due to its motion, is given by the formula KE = (1/2)mv².',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-14',
    type: 'mcq',
    question: 'Kinetic energy of a moving object is:',
    options: [
      'Always positive (or zero for a body at rest), and is a scalar quantity',
      'Always negative',
      'A vector quantity with the same direction as velocity',
      'Dependent on the direction of motion'
    ],
    correctIndex: 0,
    explanation: 'Since kinetic energy depends on the square of speed (always non-negative) and mass, KE is always positive or zero and is a scalar quantity, independent of the direction of motion.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-15',
    type: 'mcq',
    question: 'If the speed of a moving object is doubled while its mass remains constant, its kinetic energy becomes:',
    options: [
      'Twice the original value',
      'Four times the original value',
      'Half the original value',
      'Unchanged'
    ],
    correctIndex: 1,
    explanation: 'Since KE ∝ v², doubling the speed increases kinetic energy by a factor of 2² = 4.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-16',
    type: 'mcq',
    question: 'The Work-Energy Theorem states that the net work done by all forces acting on a body is equal to:',
    options: [
      'The total momentum of the body',
      'The change in kinetic energy of the body',
      'The change in potential energy of the body',
      'The average force acting on the body'
    ],
    correctIndex: 1,
    explanation: 'The Work-Energy Theorem states that the total (net) work done on a body equals the change in its kinetic energy: W_net = KE_final − KE_initial.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-17',
    type: 'mcq',
    question: 'The Work-Energy Theorem is valid:',
    options: [
      'Only when the applied force is constant',
      'For both constant and variable forces, as it is derived generally using calculus',
      'Only for conservative forces',
      'Only for one-dimensional motion'
    ],
    correctIndex: 1,
    explanation: 'The Work-Energy Theorem holds generally, regardless of whether the net force is constant or variable, and applies to motion in any number of dimensions.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-18',
    type: 'mcq',
    question: 'A body of mass 2 kg, initially at rest, is acted upon by a net force that does 25 J of work on it. According to the Work-Energy Theorem, the final kinetic energy of the body is:',
    options: [
      '0 J',
      '12.5 J',
      '25 J',
      '50 J'
    ],
    correctIndex: 2,
    explanation: 'Since KE_initial = 0, and W_net = ΔKE, the final kinetic energy equals the work done: KE_final = 25 J.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-19',
    type: 'mcq',
    question: 'If the net work done on a moving body over some interval is negative, this implies that the body\'s kinetic energy, and hence its speed, has:',
    options: [
      'Increased',
      'Decreased',
      'Remained exactly constant',
      'Become negative'
    ],
    correctIndex: 1,
    explanation: 'A negative net work means ΔKE is negative, so the kinetic energy (and hence speed, since KE = (1/2)mv²) of the body has decreased.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-20',
    type: 'mcq',
    question: 'A car moving with speed v is brought to rest by a constant braking force over a distance d. If the speed is doubled (keeping the same braking force), the stopping distance becomes:',
    options: [
      'The same, d',
      'Twice the original, 2d',
      'Four times the original, 4d',
      'Half the original, d/2'
    ],
    correctIndex: 2,
    explanation: 'By the Work-Energy Theorem, F×d = (1/2)mv², so d ∝ v²; doubling the speed increases the stopping distance by a factor of 4.',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-21',
    type: 'mcq',
    question: 'Potential energy of a body is defined as the energy it possesses due to its:',
    options: [
      'Speed alone',
      'Position or configuration within a conservative force field',
      'Mass alone',
      'Temperature'
    ],
    correctIndex: 1,
    explanation: 'Potential energy is a form of stored energy associated with the position or configuration of a body within a conservative force field, such as gravity or a spring.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-22',
    type: 'mcq',
    question: 'Gravitational potential energy of a body of mass m, raised to a height h above a chosen reference level (near Earth\'s surface), is given by:',
    options: [
      'U = mh',
      'U = mgh',
      'U = (1/2)mgh',
      'U = mg/h'
    ],
    correctIndex: 1,
    explanation: 'Near the Earth\'s surface (where g is nearly constant), gravitational potential energy is given by U = mgh, taken relative to a chosen reference level.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-23',
    type: 'mcq',
    question: 'The change in potential energy of a body, ΔU, as it moves in a conservative force field, is related to the work done by that conservative force (W_c) by:',
    options: [
      'ΔU = W_c',
      'ΔU = −W_c',
      'ΔU = W_c²',
      'ΔU is unrelated to W_c'
    ],
    correctIndex: 1,
    explanation: 'By definition, the change in potential energy equals the negative of the work done by the corresponding conservative force: ΔU = −W_c.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-24',
    type: 'mcq',
    question: 'The potential energy stored in a spring, when it is stretched or compressed by a displacement x from its natural length (spring constant k), is given by:',
    options: [
      'U = kx',
      'U = (1/2)kx²',
      'U = kx²',
      'U = (1/2)kx'
    ],
    correctIndex: 1,
    explanation: 'The elastic potential energy stored in a spring, obeying Hooke\'s Law, is given by U = (1/2)kx², where k is the spring constant and x is the displacement from the natural (unstretched) length.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-25',
    type: 'mcq',
    question: 'If the extension of a spring is doubled, the potential energy stored in it (assuming it still obeys Hooke\'s Law) becomes:',
    options: [
      'Twice the original value',
      'Four times the original value',
      'Half the original value',
      'Unchanged'
    ],
    correctIndex: 1,
    explanation: 'Since spring potential energy U ∝ x², doubling the extension increases the stored potential energy by a factor of 2² = 4.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-26',
    type: 'mcq',
    question: 'A force is classified as a conservative force if the work done by it in moving an object between two points:',
    options: [
      'Depends on the specific path taken between the points',
      'Is independent of the path taken and depends only on the initial and final positions',
      'Is always zero, regardless of the points chosen',
      'Depends only on the speed of the object'
    ],
    correctIndex: 1,
    explanation: 'A defining property of conservative forces is that the work done by them between two points is independent of the path taken, depending only on the endpoints.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-27',
    type: 'mcq',
    question: 'The work done by a conservative force on an object that moves along a closed path (returning to its starting point) is always:',
    options: [
      'Positive',
      'Negative',
      'Zero',
      'Dependent on the shape of the path'
    ],
    correctIndex: 2,
    explanation: 'A key property of conservative forces is that the net work done over any closed path is exactly zero, since the object returns to the same position (and hence same potential energy).',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-28',
    type: 'mcq',
    question: 'Which of the following is an example of a conservative force?',
    options: [
      'Friction',
      'Air resistance',
      'Gravitational force',
      'Viscous drag force'
    ],
    correctIndex: 2,
    explanation: 'Gravitational force is a classic example of a conservative force, along with electrostatic and spring forces, since the work done depends only on initial and final positions.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-29',
    type: 'mcq',
    question: 'Which of the following is an example of a non-conservative force?',
    options: [
      'Gravitational force',
      'Electrostatic force between two charges',
      'Spring (elastic) force',
      'Frictional force'
    ],
    correctIndex: 3,
    explanation: 'Friction is a classic non-conservative force, since the work it does depends on the actual path length travelled, and its work over a closed path is not zero (energy is dissipated as heat).',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-30',
    type: 'mcq',
    question: 'For a non-conservative force such as friction, the work done in moving an object over a closed path is:',
    options: [
      'Always exactly zero, just like conservative forces',
      'Generally non-zero, since energy is dissipated (e.g., as heat) depending on the actual path length',
      'Always positive, regardless of the path',
      'Independent of the distance travelled'
    ],
    correctIndex: 1,
    explanation: 'Unlike conservative forces, the work done by a non-conservative force like friction over a closed path is generally non-zero, since it depends on the total path length and dissipates energy.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-31',
    type: 'mcq',
    question: 'The Principle of Conservation of Mechanical Energy states that, in the absence of non-conservative (dissipative) forces, the total mechanical energy of a system:',
    options: [
      'Continuously increases with time',
      'Remains constant, though kinetic and potential energy may interconvert',
      'Continuously decreases with time',
      'Is always equal to zero'
    ],
    correctIndex: 1,
    explanation: 'When only conservative forces act (no friction or other dissipative forces), the total mechanical energy (KE + PE) of a system remains constant, even as energy converts between kinetic and potential forms.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-32',
    type: 'mcq',
    question: 'A ball is dropped from a height h and falls freely under gravity (ignoring air resistance). At any point during its fall, the sum of its kinetic energy and potential energy (relative to the ground) is:',
    options: [
      'Continuously increasing',
      'Continuously decreasing',
      'Constant, equal to its initial potential energy mgh, as mechanical energy is conserved',
      'Zero throughout the fall'
    ],
    correctIndex: 2,
    explanation: 'Since gravity is a conservative force and air resistance is neglected, the total mechanical energy remains constant throughout the fall, equal to the initial potential energy mgh.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-33',
    type: 'mcq',
    question: 'In the presence of friction (a non-conservative force) acting on a moving system, the total mechanical energy of the system:',
    options: [
      'Remains exactly conserved, just as without friction',
      'Is generally not conserved, since some mechanical energy is converted into heat and other forms of energy',
      'Always increases due to friction',
      'Becomes exactly zero'
    ],
    correctIndex: 1,
    explanation: 'When non-conservative forces like friction act, mechanical energy (KE + PE) is not conserved; some of it is dissipated as heat, sound, or other non-mechanical forms, though total energy (of all forms) is still conserved overall.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-34',
    type: 'mcq',
    question: 'A pendulum bob swings from its highest point (A) to its lowest point (B), where it has maximum speed. Ignoring air resistance, this exchange of energy during the swing represents:',
    options: [
      'Conversion of kinetic energy into potential energy',
      'Conversion of potential energy into kinetic energy, with total mechanical energy remaining constant',
      'A net loss of total mechanical energy',
      'No change in either form of energy'
    ],
    correctIndex: 1,
    explanation: 'As the pendulum swings down from its highest point, potential energy converts into kinetic energy, with the sum (total mechanical energy) remaining constant in the absence of air resistance.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-35',
    type: 'mcq',
    question: 'A block of mass m sliding down a frictionless incline from height h reaches the bottom with a speed v. Using conservation of mechanical energy, v is given by:',
    options: [
      'v = gh',
      'v = √(2gh)',
      'v = √(gh)',
      'v = 2gh'
    ],
    correctIndex: 1,
    explanation: 'Equating initial potential energy to final kinetic energy: mgh = (1/2)mv², solving gives v = √(2gh).',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-36',
    type: 'mcq',
    question: 'Power is defined as the:',
    options: [
      'Total work done by a force, regardless of time',
      'Rate at which work is done, or the rate at which energy is transferred/converted',
      'Total force applied over a distance',
      'Total energy possessed by a system'
    ],
    correctIndex: 1,
    explanation: 'Power measures how quickly work is done or energy is transferred, defined as work (or energy) divided by the time taken.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-37',
    type: 'mcq',
    question: 'Average power delivered by a force over a time interval t, during which it does total work W, is given by:',
    options: [
      'P = W × t',
      'P = W/t',
      'P = t/W',
      'P = W + t'
    ],
    correctIndex: 1,
    explanation: 'Average power is calculated as the total work done divided by the time taken: P = W/t.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-38',
    type: 'mcq',
    question: 'Instantaneous power delivered by a force F acting on a body moving with instantaneous velocity v can be expressed as:',
    options: [
      'P = F + v',
      'P = F · v = Fv cosθ, where θ is the angle between force and velocity',
      'P = F/v',
      'P = F − v'
    ],
    correctIndex: 1,
    explanation: 'Instantaneous power is given by the dot product of force and velocity, P = F·v = Fv cosθ, a scalar quantity.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-39',
    type: 'mcq',
    question: 'The SI unit of power is the:',
    options: [
      'Joule',
      'Watt',
      'Newton',
      'Horsepower'
    ],
    correctIndex: 1,
    explanation: 'The SI unit of power is the watt (W), equal to one joule of work (or energy) per second (1 W = 1 J/s).',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-40',
    type: 'mcq',
    question: 'The commercial unit of electrical energy, the kilowatt-hour (kWh), is equivalent to how many joules?',
    options: [
      '3.6 × 10³ J',
      '3.6 × 10^4 J',
      '3.6 × 10^6 J',
      '3.6 × 10^9 J'
    ],
    correctIndex: 2,
    explanation: '1 kWh = 1000 W × 3600 s = 3.6 × 10^6 J, and represents a practical unit for measuring larger quantities of energy, such as household electricity consumption.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-41',
    type: 'mcq',
    question: 'A machine does 6000 J of work in 30 seconds. The power delivered by the machine is:',
    options: [
      '100 W',
      '200 W',
      '20 W',
      '180000 W'
    ],
    correctIndex: 1,
    explanation: 'Power = Work/time = 6000 J / 30 s = 200 W.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-42',
    type: 'mcq',
    question: 'A car engine exerts a constant driving force of 500 N while the car moves at a constant speed of 20 m/s. The instantaneous power delivered by the engine is:',
    options: [
      '25 W',
      '520 W',
      '10000 W',
      '480 W'
    ],
    correctIndex: 2,
    explanation: 'Since force and velocity are in the same direction, P = Fv = 500 N × 20 m/s = 10000 W.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-43',
    type: 'mcq',
    question: 'A collision between two bodies is termed elastic if, during the collision:',
    options: [
      'Only momentum is conserved, but kinetic energy is not',
      'Both total linear momentum and total kinetic energy of the system are conserved',
      'Only kinetic energy is conserved, but momentum is not',
      'Neither momentum nor kinetic energy is conserved'
    ],
    correctIndex: 1,
    explanation: 'In an elastic collision, both the total linear momentum and the total kinetic energy of the colliding system are conserved.',
    difficulty: 'easy'
  },
  {
    id: 'work-energy-and-power-44',
    type: 'mcq',
    question: 'A collision is termed inelastic if, during the collision:',
    options: [
      'Total momentum is conserved, but total kinetic energy is not fully conserved (some KE is lost)',
      'Total kinetic energy is conserved, but momentum is not',
      'Both momentum and kinetic energy are conserved',
      'Neither momentum nor kinetic energy is conserved'
    ],
    correctIndex: 0,
    explanation: 'In any type of collision (elastic or inelastic), total momentum is always conserved (for an isolated system); however, in an inelastic collision, some kinetic energy is lost, typically as heat, sound, or deformation.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-45',
    type: 'mcq',
    question: 'A perfectly inelastic collision is one in which the colliding bodies:',
    options: [
      'Bounce off each other with no loss of kinetic energy',
      'Stick together and move with a common velocity after the collision, resulting in the maximum possible loss of kinetic energy',
      'Pass through each other without interacting',
      'Exchange their velocities completely'
    ],
    correctIndex: 1,
    explanation: 'In a perfectly inelastic collision, the colliding bodies stick together and move with a common final velocity, and this scenario corresponds to the maximum possible loss of kinetic energy while still conserving momentum.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-46',
    type: 'mcq',
    question: 'For a one-dimensional elastic collision between two bodies of masses m1 and m2, with initial velocities u1 and u2, the final velocity of the first body (v1) is given by:',
    options: [
      'v1 = [(m1 − m2)u1 + 2m2u2] / (m1 + m2)',
      'v1 = [(m1 + m2)u1] / (m1 − m2)',
      'v1 = u1 always, regardless of masses',
      'v1 = (m1u1 + m2u2) / (m1 − m2)'
    ],
    correctIndex: 0,
    explanation: 'This is the standard result derived from simultaneously applying conservation of momentum and conservation of kinetic energy for a 1D elastic collision.',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-47',
    type: 'mcq',
    question: 'In a one-dimensional elastic collision between two bodies of equal mass (m1 = m2), where the first body moves with velocity u1 and the second is initially at rest, the result after collision is:',
    options: [
      'Both bodies move together with velocity u1/2',
      'The first body stops (v1 = 0), and the second body moves off with the first body\'s initial velocity (v2 = u1)',
      'Both bodies continue with their original velocities unchanged',
      'The first body bounces back with velocity −u1'
    ],
    correctIndex: 1,
    explanation: 'For an elastic collision between equal masses where the second is initially at rest, the first body comes to rest and transfers all its velocity to the second body: v1 = 0, v2 = u1 (a classic result, as seen in billiard ball collisions).',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-48',
    type: 'mcq',
    question: 'In a one-dimensional elastic collision, if a very light body (mass m1) collides with a very massive, stationary body (mass m2, where m2 >> m1), the light body approximately:',
    options: [
      'Comes to rest, transferring all its momentum to the heavy body',
      'Bounces back with nearly the same speed it had before the collision, while the heavy body remains nearly stationary',
      'Passes through the heavy body without any change in velocity',
      'Sticks to the heavy body'
    ],
    correctIndex: 1,
    explanation: 'For an elastic collision where m2 >> m1, the light body essentially rebounds with almost the same speed (in the opposite direction), similar to a ball bouncing off a wall, while the massive body barely moves.',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-49',
    type: 'mcq',
    question: 'In a one-dimensional elastic collision, if a very massive body (mass m1) collides with a very light, stationary body (mass m2, where m1 >> m2), the light body approximately:',
    options: [
      'Remains completely at rest',
      'Moves off with approximately twice the initial velocity of the massive body (v2 ≈ 2u1), while the massive body continues almost unaffected',
      'Bounces back with the massive body\'s initial velocity',
      'Absorbs the massive body completely'
    ],
    correctIndex: 1,
    explanation: 'For an elastic collision where m1 >> m2, the heavy body continues almost unaffected (v1 ≈ u1), while the light body is launched forward with approximately twice the velocity of the heavy body (v2 ≈ 2u1).',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-50',
    type: 'mcq',
    question: 'The coefficient of restitution (e) for a collision between two bodies is defined as the ratio of:',
    options: [
      'The relative velocity of approach to the relative velocity of separation',
      'The relative velocity of separation to the relative velocity of approach',
      'The total kinetic energy after collision to that before collision',
      'The total momentum after collision to that before collision'
    ],
    correctIndex: 1,
    explanation: 'The coefficient of restitution is defined as e = (relative velocity of separation) / (relative velocity of approach), quantifying the "bounciness" of a collision.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-51',
    type: 'mcq',
    question: 'The value of the coefficient of restitution (e) for a perfectly elastic collision is:',
    options: [
      '0',
      '1',
      'Greater than 1',
      'Negative'
    ],
    correctIndex: 1,
    explanation: 'For a perfectly elastic collision, the relative velocity of separation equals the relative velocity of approach, giving e = 1.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-52',
    type: 'mcq',
    question: 'The value of the coefficient of restitution (e) for a perfectly inelastic collision is:',
    options: [
      '1',
      '0, since the bodies stick together and have zero relative velocity of separation',
      'Greater than 1',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'In a perfectly inelastic collision, the bodies move together after collision (zero relative velocity of separation), giving e = 0.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-53',
    type: 'mcq',
    question: 'For a real, partially elastic collision (neither perfectly elastic nor perfectly inelastic), the coefficient of restitution (e) generally lies:',
    options: [
      'Exactly equal to 0',
      'Exactly equal to 1',
      'Between 0 and 1 (0 < e < 1)',
      'Always greater than 1'
    ],
    correctIndex: 2,
    explanation: 'Most real-world collisions are neither perfectly elastic nor perfectly inelastic, and their coefficient of restitution lies between 0 and 1.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-54',
    type: 'mcq',
    question: 'When a ball is dropped from a height h onto a rigid floor and rebounds to a height h1 (with h1 < h), the coefficient of restitution for the bounce can be calculated using:',
    options: [
      'e = h1/h',
      'e = √(h1/h)',
      'e = h/h1',
      'e = h1 × h'
    ],
    correctIndex: 1,
    explanation: 'Since velocity just before impact and after rebound relate to √(2gh) and √(2gh1) respectively, the coefficient of restitution is e = √(h1/h).',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-55',
    type: 'mcq',
    question: 'In an inelastic collision, the kinetic energy that is "lost" from the mechanical form is generally converted into:',
    options: [
      'Additional momentum for the system',
      'Heat, sound, and/or permanent deformation of the colliding bodies',
      'Completely destroyed and does not exist in any form afterward',
      'Potential energy of the system, always'
    ],
    correctIndex: 1,
    explanation: 'The kinetic energy "lost" in an inelastic collision is not truly destroyed but converted into other forms of energy, such as heat, sound, and deformation of the bodies (consistent with overall energy conservation).',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-56',
    type: 'mcq',
    question: 'Two bodies of masses 2 kg and 3 kg move toward each other with velocities 4 m/s and 1 m/s respectively, and collide perfectly inelastically (sticking together). Taking the direction of the 2 kg body as positive, their common velocity after collision is:',
    options: [
      '0.5 m/s in the direction of the 2 kg body\'s original motion',
      '1 m/s in the direction of the 2 kg body\'s original motion',
      '2.5 m/s in the direction of the 3 kg body\'s original motion',
      '5 m/s in the direction of the 2 kg body\'s original motion'
    ],
    correctIndex: 1,
    explanation: 'Taking the 2 kg body\'s direction as positive, total momentum = (2)(4) + (3)(−1) = 8 − 3 = 5 kg·m/s; common velocity = total momentum / total mass = 5/(2+3) = 1 m/s, in the direction of the 2 kg body\'s original motion (since the net momentum came out positive).',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-57',
    type: 'mcq',
    question: 'A body of mass 1 kg moving at 6 m/s collides perfectly elastically with a stationary body of mass 2 kg. The velocity of the first body after collision is given by v1 = [(m1−m2)u1]/(m1+m2). Its value is:',
    options: [
      '−2 m/s (it rebounds)',
      '2 m/s (continues forward)',
      '6 m/s (unchanged)',
      '0 m/s (comes to rest)'
    ],
    correctIndex: 0,
    explanation: 'Using v1 = [(1−2)(6)]/(1+2) = (−6)/3 = −2 m/s, meaning the lighter body rebounds after colliding elastically with the heavier, initially stationary body.',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-58',
    type: 'mcq',
    question: 'Which of the following statements about elastic and inelastic collisions is correct?',
    options: [
      'Total momentum is conserved only in elastic collisions, not in inelastic ones',
      'Total momentum is conserved in both elastic and inelastic collisions, but total kinetic energy is conserved only in elastic collisions',
      'Total kinetic energy is conserved in both types of collisions',
      'Neither momentum nor kinetic energy is conserved in any type of collision'
    ],
    correctIndex: 1,
    explanation: 'For an isolated system, total momentum is always conserved regardless of collision type; however, total kinetic energy is conserved only in elastic collisions, being partially lost in inelastic ones.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-59',
    type: 'mcq',
    question: 'Mass-energy equivalence, as proposed by Einstein, is expressed by the famous relation:',
    options: [
      'E = mc',
      'E = mc²',
      'E = m/c²',
      'E = m²c'
    ],
    correctIndex: 1,
    explanation: 'Einstein\'s mass-energy equivalence relation, E = mc², shows that mass and energy are interconvertible, with c being the speed of light in vacuum.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-60',
    type: 'mcq',
    question: 'The various forms of energy (mechanical, thermal, chemical, electrical, nuclear, etc.) are all governed by the overarching principle that:',
    options: [
      'Energy can be created but never destroyed',
      'Energy can be transformed from one form to another, but the total energy of an isolated system remains constant (law of conservation of energy)',
      'Energy is always conserved only in mechanical systems',
      'Different forms of energy cannot be converted into one another'
    ],
    correctIndex: 1,
    explanation: 'The general law of conservation of energy states that energy can change from one form to another, but the total energy of an isolated system remains constant, applicable universally across all forms of energy.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-61',
    type: 'mcq',
    question: 'A person carrying a heavy load walks a certain horizontal distance at a constant speed on level ground. The work done by the person against gravity (on the load) during this horizontal walk is:',
    options: [
      'Positive, since effort is being exerted',
      'Zero, since there is no vertical displacement of the load, and gravity acts perpendicular to the horizontal motion',
      'Negative',
      'Equal to the weight of the load multiplied by the distance walked'
    ],
    correctIndex: 1,
    explanation: 'Since the load moves purely horizontally (no vertical displacement) while gravity acts vertically, the work done by gravity (and hence against gravity) is zero, even though the person exerts physical effort.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-62',
    type: 'mcq',
    question: 'A spring is compressed by a distance x from its natural length, storing potential energy U. If the spring is instead compressed by 3x (three times the distance), the stored potential energy becomes:',
    options: [
      '3U',
      '6U',
      '9U',
      'U/3'
    ],
    correctIndex: 2,
    explanation: 'Since U ∝ x², compressing the spring by three times the distance increases the stored potential energy by a factor of 3² = 9.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-63',
    type: 'mcq',
    question: 'A body of mass m falls freely from rest through a height h. Just before hitting the ground, its kinetic energy is:',
    options: [
      'mgh/2',
      'mgh',
      '2mgh',
      'mg/h'
    ],
    correctIndex: 1,
    explanation: 'By conservation of mechanical energy, all the initial potential energy (mgh) converts into kinetic energy just before hitting the ground, so KE = mgh.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-64',
    type: 'mcq',
    question: 'A body moving with velocity v possesses kinetic energy KE. If its momentum is p, then KE can also be expressed in terms of p and mass m as:',
    options: [
      'KE = p²/(2m)',
      'KE = p/(2m)',
      'KE = 2mp',
      'KE = p²/m'
    ],
    correctIndex: 0,
    explanation: 'Since p = mv, we have v = p/m, so KE = (1/2)mv² = (1/2)m(p/m)² = p²/(2m).',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-65',
    type: 'mcq',
    question: 'Two bodies of equal kinetic energy but different masses (m1 > m2) have momenta p1 and p2 respectively. It follows that:',
    options: [
      'p1 = p2 always, regardless of mass',
      'p1 > p2, since a larger mass with the same kinetic energy carries greater momentum',
      'p1 < p2',
      'The relationship cannot be determined without additional information'
    ],
    correctIndex: 1,
    explanation: 'From KE = p²/(2m), for a fixed KE, p = √(2m·KE); thus a larger mass (m1 > m2) at the same kinetic energy corresponds to a larger momentum (p1 > p2).',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-66',
    type: 'mcq',
    question: 'A block is pulled along a rough horizontal surface at constant velocity by a force equal in magnitude to the frictional force. The net work done on the block by all forces combined is:',
    options: [
      'Positive, since the applied force does positive work',
      'Negative, since friction does negative work',
      'Zero, since the block moves at constant velocity, meaning its kinetic energy does not change',
      'Impossible to determine'
    ],
    correctIndex: 2,
    explanation: 'Since the block moves at constant velocity, its kinetic energy remains unchanged, so by the Work-Energy Theorem, the net work done by all forces (including the applied force and friction, which are equal and opposite) is zero.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-67',
    type: 'mcq',
    question: 'A pump is used to lift water of mass m to a height h in time t. The minimum power required by the pump (ignoring losses) is given by:',
    options: [
      'P = mgh',
      'P = mgh/t',
      'P = mg/t',
      'P = mh/t'
    ],
    correctIndex: 1,
    explanation: 'Since the work done in lifting the water is W = mgh, the power required is P = W/t = mgh/t.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-68',
    type: 'mcq',
    question: 'The work done by the normal (contact) force exerted by a horizontal surface on a block sliding along it is:',
    options: [
      'Positive, since the normal force supports the weight of the block',
      'Negative',
      'Zero, since the normal force is always perpendicular to the direction of the block\'s displacement along the horizontal surface',
      'Equal to the weight of the block times the distance moved'
    ],
    correctIndex: 2,
    explanation: 'Since the normal force acts perpendicular to the surface, and the block\'s displacement is along the surface, the angle between them is 90°, making the work done by the normal force zero.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-69',
    type: 'mcq',
    question: 'A person applies a horizontal force to push a heavy box, but the box does not move at all. The work done by the person on the box, in this case, is:',
    options: [
      'Positive, since effort was exerted',
      'Negative',
      'Zero, since there is no displacement of the box',
      'Equal to the applied force squared'
    ],
    correctIndex: 2,
    explanation: 'Since work requires an actual displacement (W = Fd cosθ), if the box does not move at all (d = 0), the work done on it is zero, regardless of the effort exerted.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-70',
    type: 'mcq',
    question: 'The area enclosed under a force-displacement (F-x) graph, even for a non-linearly varying force, physically represents the:',
    options: [
      'Average force applied',
      'Total work done over that displacement interval',
      'Total time taken',
      'The rate of change of force'
    ],
    correctIndex: 1,
    explanation: 'Regardless of whether the force varies linearly or non-linearly, the area under the F-x graph over a given interval always represents the total work done during that interval (equivalent to the integral of F dx).',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-71',
    type: 'mcq',
    question: 'For a collision to be classified as a "head-on" (one-dimensional) collision, the velocities of both colliding bodies, before and after collision, must lie:',
    options: [
      'Along the same straight line',
      'Perpendicular to each other',
      'At an arbitrary angle to each other',
      'Along different, non-intersecting lines'
    ],
    correctIndex: 0,
    explanation: 'A head-on or one-dimensional collision is one in which the velocities of both colliding bodies, both before and after the collision, remain along the same straight line.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-72',
    type: 'mcq',
    question: 'A rubber ball dropped on the floor rebounds to a lower height than the height from which it was dropped. This behaviour indicates that the collision between the ball and the floor is:',
    options: [
      'Perfectly elastic',
      'Inelastic (partially elastic), since some kinetic energy is lost during impact',
      'Perfectly inelastic',
      'Not a collision at all'
    ],
    correctIndex: 1,
    explanation: 'Since the rebound height is less than the drop height, some kinetic energy was lost during the collision (converted to heat, sound, or deformation), indicating an inelastic (though not perfectly inelastic, since it does bounce) collision.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-73',
    type: 'mcq',
    question: 'A vehicle of mass 1000 kg accelerates uniformly from rest to a speed of 20 m/s in 10 seconds. The average power delivered by the engine (ignoring resistive forces) is:',
    options: [
      '2000 W',
      '10000 W',
      '20000 W',
      '200000 W'
    ],
    correctIndex: 2,
    explanation: 'Work done = ΔKE = (1/2)(1000)(20²) − 0 = 200000 J; Average power = Work/time = 200000/10 = 20000 W.',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-74',
    type: 'mcq',
    question: 'Which of the following statements correctly relates power, force, and velocity for a body moving with variable velocity under a constant force acting along the direction of motion?',
    options: [
      'Instantaneous power remains constant even as velocity changes',
      'Instantaneous power increases as velocity increases, since P = Fv',
      'Power is completely independent of velocity',
      'Power decreases as velocity increases'
    ],
    correctIndex: 1,
    explanation: 'Since instantaneous power is P = Fv (for force and velocity in the same direction), for a constant force, power increases proportionally as the velocity of the body increases.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-75',
    type: 'mcq',
    question: 'Assertion: The work done by a centripetal force on a particle in uniform circular motion is always zero.\nReason: The centripetal force acts perpendicular to the velocity of the particle at every instant.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since the centripetal force is always perpendicular to the instantaneous velocity (and hence displacement), the work done by it is zero at every instant - correctly explained by the reason.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-76',
    type: 'mcq',
    question: 'Assertion: In an elastic collision between two bodies of equal mass, where one is initially at rest, the moving body always comes to a complete stop after the collision.\nReason: In any elastic collision, kinetic energy is always conserved.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, but the reason, though also true, does not fully/correctly explain the specific outcome stated in the assertion (which depends on both momentum and KE conservation together with equal masses)',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 1,
    explanation: 'While the assertion is indeed true for this special case (equal masses, one at rest), it results from applying both conservation of momentum and conservation of kinetic energy together with the specific mass condition - kinetic energy conservation alone (the reason) does not, by itself, fully explain why the first body stops completely.',
    difficulty: 'hard'
  },
  {
    id: 'work-energy-and-power-77',
    type: 'mcq',
    question: 'Assertion: The total mechanical energy of a freely falling object (ignoring air resistance) remains constant throughout its fall.\nReason: Gravity is a conservative force, so the work done by gravity depends only on the initial and final heights of the object, not on the path taken.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since gravity is conservative, the mechanical energy (KE + PE) of a freely falling object remains constant, and this is correctly explained by the path-independence property of conservative forces stated in the reason.',
    difficulty: 'medium'
  },
  {
    id: 'work-energy-and-power-78',
    type: 'mcq',
    question: 'Which of the following best summarises the key distinction between elastic and perfectly inelastic collisions, in terms of the underlying conservation laws?',
    options: [
      'Elastic collisions conserve only momentum, while perfectly inelastic collisions conserve only kinetic energy',
      'Both types of collisions always conserve total linear momentum, but only elastic collisions also conserve total kinetic energy; perfectly inelastic collisions involve the maximum possible loss of kinetic energy while still conserving momentum',
      'Neither type of collision conserves any physical quantity',
      'Perfectly inelastic collisions conserve more kinetic energy than elastic collisions'
    ],
    correctIndex: 1,
    explanation: 'Both elastic and perfectly inelastic collisions conserve total momentum (a universal property of isolated systems), but only elastic collisions also conserve total kinetic energy; perfectly inelastic collisions represent the extreme case of maximum kinetic energy loss consistent with momentum conservation.',
    difficulty: 'medium'
  }
];

export default questions;
