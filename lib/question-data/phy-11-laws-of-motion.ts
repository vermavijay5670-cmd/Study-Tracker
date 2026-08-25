import type { Question } from "@/lib/questionBank";

// NEET Physics Question Bank
// Chapter: Laws of Motion (Newton's Laws of Motion)
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'newtons-laws-of-motion-1',
    type: 'mcq',
    question: 'Aristotle\'s view that a continuous force is necessary to keep a body moving was later shown to be flawed mainly because he failed to account for:',
    options: [
      'The mass of the moving body',
      'The opposing force of friction, which must be overcome to maintain motion, not motion itself',
      'The direction of the applied force',
      'The size of the moving body'
    ],
    correctIndex: 1,
    explanation: 'Aristotle did not recognise that friction (an opposing force) is what actually needs to be overcome to sustain motion at constant velocity; in its absence, no force is needed to keep a body moving.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-2',
    type: 'mcq',
    question: 'Galileo\'s law of inertia states that an object, once set in motion on a smooth (frictionless) horizontal surface, would:',
    options: [
      'Gradually slow down and stop even without friction',
      'Continue moving forever with constant velocity in the absence of any opposing force',
      'Instantly stop as soon as the pushing force is removed',
      'Speed up indefinitely without any applied force'
    ],
    correctIndex: 1,
    explanation: 'Galileo concluded that in the absence of friction or any opposing force, an object would continue moving with constant velocity indefinitely, laying the foundation for Newton\'s first law.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-3',
    type: 'mcq',
    question: 'Newton\'s First Law of Motion states that a body continues in its state of rest or uniform motion in a straight line unless it is:',
    options: [
      'Observed by someone',
      'Compelled by an external unbalanced force to change that state',
      'Moving with variable speed',
      'Placed on a frictionless surface'
    ],
    correctIndex: 1,
    explanation: 'Newton\'s First Law (law of inertia) states that a body maintains its state of rest or uniform velocity unless acted upon by a net external force.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-4',
    type: 'mcq',
    question: 'The property of a body due to which it resists any change in its state of rest or uniform motion is called:',
    options: [
      'Momentum',
      'Inertia',
      'Impulse',
      'Weight'
    ],
    correctIndex: 1,
    explanation: 'Inertia is the inherent tendency of a body to resist any change in its existing state of rest or uniform motion.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-5',
    type: 'mcq',
    question: 'The inertia of a body is quantitatively measured by its:',
    options: [
      'Weight',
      'Mass',
      'Volume',
      'Velocity'
    ],
    correctIndex: 1,
    explanation: 'Mass is the quantitative measure of a body\'s inertia; a body with greater mass has greater inertia and resists changes in its state of motion more strongly.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-6',
    type: 'mcq',
    question: 'When a bus suddenly starts moving forward, passengers standing inside tend to fall backward. This is an example of:',
    options: [
      'Inertia of motion',
      'Inertia of rest',
      'Inertia of direction',
      'Newton\'s third law'
    ],
    correctIndex: 1,
    explanation: 'Since the passenger\'s body tends to remain at rest due to inertia while the bus suddenly moves forward, this is an example of inertia of rest.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-7',
    type: 'mcq',
    question: 'When a moving bus suddenly stops, passengers standing inside tend to fall forward. This illustrates:',
    options: [
      'Inertia of rest',
      'Inertia of motion',
      'Inertia of direction',
      'Conservation of momentum only'
    ],
    correctIndex: 1,
    explanation: 'Since the passenger\'s body tends to continue moving forward due to inertia even as the bus suddenly stops, this demonstrates inertia of motion.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-8',
    type: 'mcq',
    question: 'Momentum of a body is defined as the product of its:',
    options: [
      'Mass and acceleration',
      'Mass and velocity',
      'Weight and velocity',
      'Force and time'
    ],
    correctIndex: 1,
    explanation: 'Linear momentum, p = mv, is the product of a body\'s mass and its velocity, and is a vector quantity in the direction of velocity.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-9',
    type: 'mcq',
    question: 'The SI unit of linear momentum is:',
    options: [
      'kg m/s²',
      'kg m/s',
      'N/s',
      'kg/s'
    ],
    correctIndex: 1,
    explanation: 'Since momentum is mass times velocity, its SI unit is kg·m/s (equivalent to N·s).',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-10',
    type: 'mcq',
    question: 'Newton\'s Second Law of Motion states that the rate of change of momentum of a body is:',
    options: [
      'Always zero for any moving body',
      'Directly proportional to the applied external force and takes place in the direction of that force',
      'Inversely proportional to the applied force',
      'Independent of the applied force'
    ],
    correctIndex: 1,
    explanation: 'Newton\'s Second Law states F ∝ dp/dt, meaning the net force determines both the magnitude and direction of the rate of change of momentum.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-11',
    type: 'mcq',
    question: 'The mathematical form of Newton\'s Second Law, for a body of constant mass, is commonly written as:',
    options: [
      'F = mv',
      'F = ma',
      'F = m/a',
      'F = m + a'
    ],
    correctIndex: 1,
    explanation: 'For a body of constant mass, Newton\'s Second Law reduces to F = ma, since F = dp/dt = d(mv)/dt = m(dv/dt) = ma.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-12',
    type: 'mcq',
    question: 'Newton\'s Second Law, F = dp/dt, is considered more general than F = ma mainly because it also applies to situations where:',
    options: [
      'The velocity of the body is zero',
      'The mass of the system itself changes with time, such as in rocket propulsion',
      'The body is at rest permanently',
      'No force acts on the body'
    ],
    correctIndex: 1,
    explanation: 'The momentum form of the second law, F = dp/dt, correctly handles cases with variable mass (like a rocket losing fuel), where F = ma alone would not be valid.',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-13',
    type: 'mcq',
    question: 'Newton\'s First Law of Motion can be regarded as a special case of the Second Law when the net external force is:',
    options: [
      'Maximum',
      'Zero, implying that momentum remains constant (dp/dt = 0)',
      'Constant but non-zero',
      'Equal to mg'
    ],
    correctIndex: 1,
    explanation: 'When the net force is zero, the second law (F = dp/dt) gives dp/dt = 0, meaning momentum is constant - which is exactly the statement of the first law (state of rest or uniform motion persists).',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-14',
    type: 'mcq',
    question: 'The SI unit of force, the newton, is defined as the force that produces an acceleration of:',
    options: [
      '1 m/s² in a body of mass 1 gram',
      '1 m/s² in a body of mass 1 kilogram',
      '1 cm/s² in a body of mass 1 kilogram',
      '10 m/s² in a body of mass 1 kilogram'
    ],
    correctIndex: 1,
    explanation: 'One newton is defined as the force required to produce an acceleration of 1 m/s² in a body of mass 1 kg.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-15',
    type: 'mcq',
    question: 'Newton\'s Second Law, when applied in component form along mutually perpendicular directions, means that:',
    options: [
      'Only the resultant force needs to be considered, never its components',
      'Each component of force independently produces a corresponding component of acceleration/rate of change of momentum along that direction',
      'The law only applies along the direction of motion',
      'Components of force cannot be treated separately'
    ],
    correctIndex: 1,
    explanation: 'Since force and momentum are vectors, Newton\'s second law applies independently along each perpendicular direction (Fx = dpx/dt, Fy = dpy/dt), allowing motion to be analysed component-wise.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-16',
    type: 'mcq',
    question: 'A constant force F acting on a body of mass 2 kg produces an acceleration of 5 m/s². The magnitude of the force is:',
    options: [
      '2.5 N',
      '7 N',
      '10 N',
      '0.4 N'
    ],
    correctIndex: 2,
    explanation: 'Using F = ma = 2 kg × 5 m/s² = 10 N.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-17',
    type: 'mcq',
    question: 'Impulse of a force is defined as:',
    options: [
      'The force multiplied by the mass of the object',
      'The product of the force and the time interval for which it acts, equal to the change in momentum produced',
      'The rate of change of force with time',
      'The average velocity produced by the force'
    ],
    correctIndex: 1,
    explanation: 'Impulse, J = FΔt, equals the change in momentum (Δp) produced by a force acting over a given time interval.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-18',
    type: 'mcq',
    question: 'The concept of impulse is particularly useful in analysing situations where:',
    options: [
      'A constant, small force acts over a very long time',
      'A large force acts for a very short duration, such as during a collision or impact',
      'No force acts on the body at all',
      'The body is in uniform circular motion'
    ],
    correctIndex: 1,
    explanation: 'Impulse is especially useful for impulsive forces - large forces acting for very short time intervals, as seen in collisions, impacts, or hits - where measuring the force directly is difficult, but its overall effect (change in momentum) can be calculated.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-19',
    type: 'mcq',
    question: 'On a force-time graph, the impulse delivered by a force over a given time interval is represented by:',
    options: [
      'The slope of the graph',
      'The area under the force-time curve over that interval',
      'The maximum value of force on the graph',
      'The value of force at the final instant only'
    ],
    correctIndex: 1,
    explanation: 'Since impulse equals the integral of force with respect to time, it corresponds to the area under the force-time graph over the given interval.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-20',
    type: 'mcq',
    question: 'A ball of mass 0.2 kg moving at 10 m/s is brought to rest in 0.02 s upon hitting a wall. The magnitude of the average force exerted by the wall on the ball is:',
    options: [
      '10 N',
      '20 N',
      '100 N',
      '2 N'
    ],
    correctIndex: 2,
    explanation: 'Change in momentum Δp = m(v−u) = 0.2×(0−10) = −2 kg·m/s; Force = Δp/Δt = 2/0.02 = 100 N (magnitude).',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-21',
    type: 'mcq',
    question: 'Newton\'s Third Law of Motion states that for every action, there is:',
    options: [
      'A smaller and opposite reaction',
      'An equal and opposite reaction, acting on a different body simultaneously',
      'A reaction that acts later in time',
      'No corresponding reaction'
    ],
    correctIndex: 1,
    explanation: 'Newton\'s Third Law states that action and reaction forces are always equal in magnitude, opposite in direction, act on two different bodies, and occur simultaneously.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-22',
    type: 'mcq',
    question: 'Action and reaction forces, as described by Newton\'s Third Law, never cancel each other out because:',
    options: [
      'They act on the same body',
      'They act on two different bodies, not on the same body',
      'They act at different times',
      'They are never equal in magnitude'
    ],
    correctIndex: 1,
    explanation: 'Since action and reaction forces act on two different bodies (not the same object), they cannot cancel each other, even though they are equal in magnitude and opposite in direction.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-23',
    type: 'mcq',
    question: 'The forward propulsion of a rocket is best explained using:',
    options: [
      'Newton\'s First Law only',
      'Newton\'s Third Law, as the rocket exerts a backward force on the ejected gases, which exert an equal and opposite forward force on the rocket',
      'The concept of inertia alone',
      'Gravitational attraction between the rocket and Earth'
    ],
    correctIndex: 1,
    explanation: 'Rocket propulsion is a direct application of Newton\'s Third Law: the rocket pushes exhaust gases backward, and the gases push the rocket forward with an equal and opposite force.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-24',
    type: 'mcq',
    question: 'The recoil experienced by a gun when a bullet is fired is a direct consequence of:',
    options: [
      'Newton\'s First Law',
      'Newton\'s Third Law and the principle of conservation of momentum',
      'The law of gravitation',
      'Friction between the bullet and the barrel'
    ],
    correctIndex: 1,
    explanation: 'When the gun exerts a forward force on the bullet, the bullet exerts an equal and opposite backward force on the gun (Newton\'s Third Law), causing recoil, consistent with conservation of momentum.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-25',
    type: 'mcq',
    question: 'When a person walks forward, the actual force propelling them forward comes from:',
    options: [
      'The person\'s own leg muscles pushing directly forward on the ground',
      'The reaction force exerted by the ground on the person\'s foot, in response to the person pushing backward on the ground',
      'Gravity pulling the person forward',
      'Air resistance'
    ],
    correctIndex: 1,
    explanation: 'When walking, a person pushes backward against the ground with their foot; by Newton\'s Third Law, the ground exerts an equal and opposite forward force on the person, propelling them forward.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-26',
    type: 'mcq',
    question: 'According to the principle of conservation of linear momentum, the total momentum of an isolated system (no external force) remains:',
    options: [
      'Always increasing',
      'Constant, regardless of internal interactions among the bodies of the system',
      'Always zero',
      'Always decreasing'
    ],
    correctIndex: 1,
    explanation: 'In an isolated system, free from external forces, the total linear momentum remains constant over time, regardless of any internal forces or interactions among its constituent parts.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-27',
    type: 'mcq',
    question: 'The law of conservation of momentum can be derived directly from a combination of Newton\'s:',
    options: [
      'First Law alone',
      'Second and Third Laws of Motion',
      'First and Third Laws only',
      'Law of gravitation'
    ],
    correctIndex: 1,
    explanation: 'Conservation of momentum follows from Newton\'s Third Law (equal and opposite internal forces cancel) combined with the Second Law (relating net external force to rate of change of total momentum).',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-28',
    type: 'mcq',
    question: 'In any type of collision (elastic or inelastic) between two isolated bodies, which quantity is always conserved?',
    options: [
      'Kinetic energy only',
      'Total linear momentum of the system',
      'Individual velocities of each body',
      'Total mechanical energy always, regardless of collision type'
    ],
    correctIndex: 1,
    explanation: 'Total linear momentum of an isolated system is conserved in all collisions, whether elastic or inelastic; kinetic energy, however, is conserved only in elastic collisions.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-29',
    type: 'mcq',
    question: 'An object initially at rest explodes into two fragments of unequal mass, with no external force acting. According to conservation of momentum, the two fragments must move:',
    options: [
      'In the same direction with equal speeds',
      'In exactly opposite directions, such that their combined momentum remains zero',
      'In random directions with no relationship between their velocities',
      'Only the heavier fragment moves; the lighter one stays at rest'
    ],
    correctIndex: 1,
    explanation: 'Since the total initial momentum was zero, the two fragments must move in exactly opposite directions with momenta of equal magnitude, so that the total momentum remains zero after explosion.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-30',
    type: 'mcq',
    question: 'A body of mass 4 kg moving at 3 m/s collides and sticks to a stationary body of mass 2 kg (perfectly inelastic collision). The common velocity of the combined mass after collision is:',
    options: [
      '1 m/s',
      '2 m/s',
      '3 m/s',
      '6 m/s'
    ],
    correctIndex: 1,
    explanation: 'By conservation of momentum: (4)(3) + (2)(0) = (4+2)v, giving 12 = 6v, so v = 2 m/s.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-31',
    type: 'mcq',
    question: 'When a bomb, initially at rest, explodes into several fragments, the sum of the momenta of all fragments after the explosion is:',
    options: [
      'Equal to the total kinetic energy released',
      'Zero, equal to the momentum before explosion',
      'Always equal to the mass of the bomb',
      'Dependent on the number of fragments'
    ],
    correctIndex: 1,
    explanation: 'Since no external force acts during the (essentially instantaneous) explosion, momentum is conserved, so the vector sum of momenta of all fragments remains equal to the initial momentum (zero, since the bomb was at rest).',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-32',
    type: 'mcq',
    question: 'A particle is said to be in equilibrium under the action of several concurrent forces when:',
    options: [
      'All the individual forces have equal magnitude',
      'The vector sum (resultant) of all forces acting on it is zero',
      'Only one force acts on the particle',
      'The particle is moving with increasing velocity'
    ],
    correctIndex: 1,
    explanation: 'A particle is in equilibrium when the net (vector) sum of all forces acting on it is zero, resulting in either rest or uniform velocity.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-33',
    type: 'mcq',
    question: 'For a particle in equilibrium under three concurrent, coplanar forces, Lami\'s theorem states that each force is proportional to the:',
    options: [
      'Cosine of the angle it makes with the resultant',
      'Sine of the angle between the other two forces',
      'Sum of the other two forces',
      'Product of the other two forces'
    ],
    correctIndex: 1,
    explanation: 'Lami\'s theorem states that, for three concurrent forces in equilibrium, F1/sinα = F2/sinβ = F3/sinγ, where α, β, γ are the angles opposite to the respective forces (i.e., between the other two forces).',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-34',
    type: 'mcq',
    question: 'If a body is in equilibrium under only two forces, these two forces must necessarily be:',
    options: ['Perpendicular to each other', 'Equal in magnitude and opposite in direction, acting along the same line', 'Unequal but acting in the same direction', 'Equal in magnitude but acting at 90° to each other'],
    correctIndex: 1,
    explanation: 'For a body under just two forces to be in equilibrium, they must be equal in magnitude, opposite in direction, and act along the same straight line, so their vector sum is zero.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-35',
    type: 'mcq',
    question: 'A block resting on a table experiences a downward gravitational force and an upward contact force from the table. This upward contact force is called the:',
    options: [
      'Tension',
      'Normal reaction (normal force)',
      'Frictional force',
      'Centripetal force'
    ],
    correctIndex: 1,
    explanation: 'The normal reaction (or normal force) is the contact force exerted perpendicular to the surface, balancing the component of weight or other forces pressing into the surface.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-36',
    type: 'mcq',
    question: 'In a light, inextensible string passing over a smooth (frictionless), massless pulley, the tension throughout the string is:',
    options: [
      'Different at each point along the string',
      'The same throughout the string',
      'Zero at the pulley',
      'Dependent on the pulley\'s mass'
    ],
    correctIndex: 1,
    explanation: 'For an ideal (massless, inextensible) string over a frictionless, massless pulley, the tension is uniform throughout the string.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-37',
    type: 'mcq',
    question: 'According to Hooke\'s Law, the restoring force exerted by a spring, when stretched or compressed by a small displacement x, is given by:',
    options: [
      'F = kx (in the direction of displacement)',
      'F = −kx (opposing the displacement, proportional to it)',
      'F = k/x',
      'F = kx²'
    ],
    correctIndex: 1,
    explanation: 'Hooke\'s Law states that the restoring force of a spring is directly proportional to the displacement from its natural length and acts opposite to the displacement: F = −kx.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-38',
    type: 'mcq',
    question: 'The frictional force between two surfaces in contact acts in a direction that:',
    options: [
      'Is always along the direction of applied external force',
      'Opposes the relative motion (or tendency of relative motion) between the two surfaces',
      'Is always perpendicular to the surface of contact',
      'Is independent of the surfaces in contact'
    ],
    correctIndex: 1,
    explanation: 'Frictional force acts parallel to the surfaces in contact, in a direction opposing relative sliding motion or the tendency toward such motion.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-39',
    type: 'mcq',
    question: 'Static friction is the frictional force that:',
    options: [
      'Acts only when the body is already sliding',
      'Opposes the tendency of relative motion between two surfaces that are not yet sliding relative to each other',
      'Is always greater than kinetic friction for the same pair of surfaces',
      'Has a fixed constant value regardless of applied force'
    ],
    correctIndex: 1,
    explanation: 'Static friction is a self-adjusting force that opposes the tendency of relative sliding motion between two surfaces that remain at rest relative to each other, up to a maximum limiting value.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-40',
    type: 'mcq',
    question: 'The maximum value of static friction that can act between two surfaces, just before sliding begins, is called:',
    options: [
      'Kinetic friction',
      'Limiting friction',
      'Rolling friction',
      'Angle of friction'
    ],
    correctIndex: 1,
    explanation: 'Limiting friction is the maximum value of static friction, reached just before relative sliding motion begins between the surfaces.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-41',
    type: 'mcq',
    question: 'Kinetic friction is the frictional force that:',
    options: [
      'Acts when two surfaces are moving relative to each other (sliding), opposing this relative sliding motion',
      'Only acts before motion begins',
      'Is always greater than the maximum static (limiting) friction',
      'Depends heavily on the relative sliding speed'
    ],
    correctIndex: 0,
    explanation: 'Kinetic friction acts when two surfaces are actually sliding relative to one another, opposing this ongoing relative motion, and is generally found to be nearly independent of the sliding speed.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-42',
    type: 'mcq',
    question: 'Comparing the maximum static friction and kinetic friction for the same pair of surfaces and normal force, it is generally observed that:',
    options: [
      'Kinetic friction is always greater than maximum static friction',
      'Maximum static friction is generally slightly greater than kinetic friction',
      'Both are always exactly equal',
      'There is no consistent relationship between them'
    ],
    correctIndex: 1,
    explanation: 'Experimentally, the maximum (limiting) static friction is generally found to be slightly greater than the kinetic friction for the same pair of surfaces under the same normal force.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-43',
    type: 'mcq',
    question: 'According to the laws of friction, the limiting frictional force between two surfaces is directly proportional to:',
    options: [
      'The area of contact between the surfaces',
      'The normal reaction (normal force) between the two surfaces',
      'The relative velocity between the surfaces',
      'The applied external force only'
    ],
    correctIndex: 1,
    explanation: 'One of the fundamental laws of friction states that limiting friction (f) is directly proportional to the normal reaction (N) between the surfaces: f = μN.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-44',
    type: 'mcq',
    question: 'According to the laws of friction, the frictional force between two surfaces is generally found to be independent of:',
    options: [
      'The normal reaction between the surfaces',
      'The apparent area of contact between the surfaces (for a given normal force)',
      'The nature/material of the surfaces in contact',
      'The coefficient of friction'
    ],
    correctIndex: 1,
    explanation: 'One of the notable laws of friction is that, for a given normal force, friction is (to a good approximation) independent of the apparent area of contact between the two surfaces.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-45',
    type: 'mcq',
    question: 'The coefficient of static friction (μs) between two surfaces is defined as the ratio of:',
    options: [
      'The kinetic friction to the normal reaction',
      'The maximum (limiting) static friction to the normal reaction between the surfaces',
      'The normal reaction to the applied force',
      'The applied force to the weight of the body'
    ],
    correctIndex: 1,
    explanation: 'The coefficient of static friction is defined as μs = f_s(max)/N, the ratio of the maximum static (limiting) friction to the normal reaction.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-46',
    type: 'mcq',
    question: 'The angle of friction is defined as the angle whose tangent equals the:',
    options: [
      'Coefficient of friction between the two surfaces',
      'Normal reaction between the surfaces',
      'Applied force divided by weight',
      'Sine of the angle of the inclined plane'
    ],
    correctIndex: 0,
    explanation: 'The angle of friction (λ) is defined such that tanλ = μ, the coefficient of friction between the surfaces in contact.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-47',
    type: 'mcq',
    question: 'The angle of repose is the minimum angle of inclination of a plane at which a body placed on it just begins to slide down under gravity, and is numerically related to the coefficient of friction (μ) by:',
    options: [
      'sinθ = μ',
      'tanθ = μ',
      'cosθ = μ',
      'θ = μ (in radians directly)'
    ],
    correctIndex: 1,
    explanation: 'The angle of repose, θ, satisfies tanθ = μ, and is numerically equal to the angle of friction under equilibrium conditions.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-48',
    type: 'mcq',
    question: 'Rolling friction, compared to sliding (kinetic) friction between the same surfaces, is generally:',
    options: [
      'Much greater than sliding friction',
      'Much smaller than sliding friction, which is why wheels are used to reduce friction in transportation',
      'Exactly equal to sliding friction',
      'Completely absent in real situations'
    ],
    correctIndex: 1,
    explanation: 'Rolling friction is significantly smaller than sliding (kinetic) friction, which is the primary reason wheels and rollers are used to minimise frictional resistance in vehicles and machines.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-49',
    type: 'mcq',
    question: 'Which of the following is a practical method commonly used to reduce friction between moving surfaces?',
    options: [
      'Increasing the roughness of the surfaces',
      'Using lubricants (like oil or grease) between the surfaces, or using ball bearings',
      'Increasing the normal force between the surfaces',
      'Increasing the apparent area of contact'
    ],
    correctIndex: 1,
    explanation: 'Lubrication and the use of ball bearings (converting sliding friction into much smaller rolling friction) are common practical methods to reduce friction.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-50',
    type: 'mcq',
    question: 'In circular motion, the term "centripetal force" refers to:',
    options: [
      'A completely new and distinct type of force not related to any other known forces',
      'The net force (which may be tension, friction, gravity, normal reaction, or a combination of these) directed toward the centre, required to keep the object moving along the circular path',
      'A force that always acts outward, away from the centre',
      'A force unrelated to Newton\'s laws of motion'
    ],
    correctIndex: 1,
    explanation: 'Centripetal force is not a separate, independent force, but simply the name given to the net inward force (which could arise from tension, friction, gravity, or normal reaction) that produces the centripetal acceleration necessary for circular motion.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-51',
    type: 'mcq',
    question: 'The magnitude of the centripetal force required to keep an object of mass m moving in a circle of radius r with speed v is given by:',
    options: [
      'F = mv/r',
      'F = mv²/r',
      'F = mvr',
      'F = m²v/r'
    ],
    correctIndex: 1,
    explanation: 'Centripetal force is given by F = mv²/r, directed toward the centre of the circular path, consistent with F = ma using centripetal acceleration a = v²/r.',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-52',
    type: 'mcq',
    question: 'For a car moving on a level (unbanked) circular road, the centripetal force required for circular motion is provided by:',
    options: [
      'The normal reaction from the road only',
      'The force of friction between the tyres and the road surface',
      'The weight of the car',
      'An external pushing force from the engine acting radially'
    ],
    correctIndex: 1,
    explanation: 'On a flat (unbanked) road, the necessary centripetal force is supplied entirely by the frictional force between the car\'s tyres and the road surface.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-53',
    type: 'mcq',
    question: 'Roads at curves are often banked (the outer edge raised relative to the inner edge) mainly to:',
    options: [
      'Increase the friction needed for turning',
      'Provide a component of the normal reaction that helps supply the necessary centripetal force, reducing dependence on friction',
      'Reduce the speed of the vehicle automatically',
      'Increase the weight of the vehicle'
    ],
    correctIndex: 1,
    explanation: 'Banking of roads tilts the surface so that a component of the normal reaction contributes toward the centripetal force, reducing reliance on friction and allowing safer turning at higher speeds.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-54',
    type: 'mcq',
    question: 'For a banked road of radius r and banking angle θ, in the absence of friction, the optimum (safe) speed for negotiating the curve is given by:',
    options: [
      'v0 = √(rg)',
      'v0 = √(rg tanθ)',
      'v0 = rg tanθ',
      'v0 = √(r/g tanθ)'
    ],
    correctIndex: 1,
    explanation: 'For a frictionless banked road, the optimum speed is derived by equating the horizontal component of the normal force to the required centripetal force, giving v0 = √(rg tanθ).',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-55',
    type: 'mcq',
    question: 'If a vehicle travels on a banked road at a speed greater than the optimum (design) speed for that banking angle, then, to prevent skidding outward, the required additional centripetal force must be supplied by:',
    options: [
      'Gravity alone',
      'Friction acting up the incline (toward the centre)',
      'A decrease in the normal reaction',
      'No additional force is needed'
    ],
    correctIndex: 1,
    explanation: 'At speeds above the optimum banking speed, friction must act inward (up the slope, toward the centre) to provide the extra centripetal force needed to prevent the vehicle from skidding outward.',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-56',
    type: 'mcq',
    question: 'Two blocks of masses 3 kg and 2 kg are connected by a light, inextensible string and placed on a frictionless horizontal surface. A horizontal force of 10 N is applied to the 3 kg block, pulling both blocks together. The common acceleration of the system is:',
    options: [
      '1 m/s²',
      '2 m/s²',
      '5 m/s²',
      '10 m/s²'
    ],
    correctIndex: 1,
    explanation: 'Using Newton\'s second law for the whole system: a = F/(m1+m2) = 10/(3+2) = 2 m/s².',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-57',
    type: 'mcq',
    question: 'In an Atwood machine, two masses m1 and m2 (with m1 > m2) are connected by a light, inextensible string over a smooth, massless pulley. The magnitude of the common acceleration of the system is given by:',
    options: [
      'a = (m1 − m2)g / (m1 + m2)',
      'a = (m1 + m2)g / (m1 − m2)',
      'a = (m1 × m2)g',
      'a = g always, regardless of the masses'
    ],
    correctIndex: 0,
    explanation: 'For an Atwood machine, applying Newton\'s second law to both masses and eliminating tension gives a = (m1 − m2)g/(m1 + m2).',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-58',
    type: 'mcq',
    question: 'In the Atwood machine setup described above, the tension in the string connecting the two masses is given by:',
    options: [
      'T = m1g',
      'T = m2g',
      'T = 2m1m2g / (m1 + m2)',
      'T = (m1 − m2)g'
    ],
    correctIndex: 2,
    explanation: 'Substituting the acceleration back into the equation of motion for either mass gives the tension T = 2m1m2g/(m1+m2) for an ideal Atwood machine.',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-59',
    type: 'mcq',
    question: 'When a person stands on a weighing machine inside a lift that is accelerating upward with acceleration a, the apparent weight recorded is:',
    options: [
      'mg, unchanged from the actual weight',
      'm(g + a), greater than the actual weight',
      'm(g − a), less than the actual weight',
      'Zero, regardless of acceleration'
    ],
    correctIndex: 1,
    explanation: 'When the lift accelerates upward, the normal reaction (apparent weight) must supply extra upward force to accelerate the person along with the lift, giving apparent weight = m(g + a).',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-60',
    type: 'mcq',
    question: 'When a person stands on a weighing machine inside a lift that is accelerating downward with acceleration a (where a < g), the apparent weight recorded is:',
    options: [
      'm(g + a)',
      'm(g − a), less than the actual weight',
      'mg, unchanged',
      'Zero'
    ],
    correctIndex: 1,
    explanation: 'When the lift accelerates downward, less upward normal force is needed to provide the net downward acceleration, so the apparent weight decreases to m(g − a).',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-61',
    type: 'mcq',
    question: 'If the cable of a lift breaks and the lift (along with a person inside) falls freely under gravity, the apparent weight of the person, as recorded by a weighing machine inside, would be:',
    options: [
      'Equal to their normal weight, mg',
      'Zero - a state of apparent weightlessness, since both the person and the lift accelerate downward at the same rate, g',
      'Greater than their normal weight',
      'Negative'
    ],
    correctIndex: 1,
    explanation: 'During free fall, both the person and the lift accelerate downward at g, so there is no relative force between the person and the floor of the lift, resulting in zero apparent weight (apparent weightlessness).',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-62',
    type: 'mcq',
    question: 'A pseudo (fictitious) force is introduced in physics problems specifically when analysing motion from the viewpoint of:',
    options: [
      'An inertial (unaccelerated) reference frame',
      'A non-inertial (accelerated) reference frame, to make Newton\'s laws appear to hold in that frame',
      'Any reference frame, inertial or non-inertial, at all times',
      'A frame moving with constant velocity only'
    ],
    correctIndex: 1,
    explanation: 'Pseudo forces are fictitious forces introduced only when working in accelerated (non-inertial) reference frames, in order to apply Newton\'s laws of motion in that frame as if it were inertial.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-63',
    type: 'mcq',
    question: 'The magnitude of the pseudo force experienced by an object of mass m in a reference frame accelerating with acceleration \'a\' (relative to an inertial frame) is:',
    options: [
      'Zero, since pseudo forces have no magnitude',
      'ma, directed opposite to the acceleration of the frame',
      'mg, always equal to the object\'s weight',
      'ma, directed in the same direction as the acceleration of the frame'
    ],
    correctIndex: 1,
    explanation: 'The pseudo force has magnitude equal to ma (mass times the frame\'s acceleration) and is always directed opposite to the direction of the non-inertial frame\'s acceleration.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-64',
    type: 'mcq',
    question: 'Unlike real forces such as gravity, tension, or friction, a pseudo force:',
    options: [
      'Has an equal and opposite reaction force acting on another body, as required by Newton\'s Third Law',
      'Does not arise from any physical interaction between bodies and hence has no reaction pair, violating Newton\'s Third Law',
      'Always acts perpendicular to the direction of motion',
      'Can be measured directly using a spring balance in every frame'
    ],
    correctIndex: 1,
    explanation: 'Since a pseudo force does not arise from a genuine physical interaction between two bodies, it has no reaction counterpart and does not obey Newton\'s Third Law, distinguishing it from real forces.',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-65',
    type: 'mcq',
    question: 'An inertial reference frame is defined as a frame of reference in which:',
    options: [
      'Newton\'s laws of motion hold true without requiring any pseudo forces, i.e., the frame is either at rest or moving with constant velocity',
      'Objects always experience a net non-zero force',
      'The frame is always accelerating',
      'Only circular motion can occur'
    ],
    correctIndex: 0,
    explanation: 'An inertial frame is one that is unaccelerated (at rest or moving with constant velocity), in which Newton\'s laws hold in their standard form without needing pseudo forces.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-66',
    type: 'mcq',
    question: 'A reference frame attached to an accelerating vehicle (such as a car speeding up) is an example of a:',
    options: [
      'Inertial frame',
      'Non-inertial frame, in which Newton\'s laws require the inclusion of a pseudo force for consistency',
      'A frame in which no forces exist',
      'A frame identical to any frame at rest'
    ],
    correctIndex: 1,
    explanation: 'Since the vehicle itself is accelerating, a frame attached to it is non-inertial, and observers in this frame must introduce a pseudo force to correctly apply Newton\'s laws.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-67',
    type: 'mcq',
    question: 'A block of mass m is placed on a rough horizontal surface with coefficient of static friction μs. The maximum horizontal force that can be applied to the block without causing it to move is:',
    options: [
      'μs mg',
      'mg/μs',
      'μs m/g',
      'μs g/m'
    ],
    correctIndex: 0,
    explanation: 'The maximum static friction (and hence the maximum applied force the block can resist without sliding) is f_s(max) = μs N = μs mg, since the normal force equals mg on a horizontal surface.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-68',
    type: 'mcq',
    question: 'A block of mass 5 kg rests on a horizontal surface with coefficient of kinetic friction 0.2. Taking g = 10 m/s², the kinetic frictional force acting on the block while it slides is:',
    options: [
      '2 N',
      '5 N',
      '10 N',
      '50 N'
    ],
    correctIndex: 2,
    explanation: 'Kinetic friction f_k = μk N = μk mg = 0.2 × 5 × 10 = 10 N.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-69',
    type: 'mcq',
    question: 'A block placed on an inclined plane just begins to slide when the angle of inclination is increased to θ. The coefficient of static friction between the block and the incline is therefore:',
    options: [
      'sinθ',
      'cosθ',
      'tanθ',
      '1/tanθ'
    ],
    correctIndex: 2,
    explanation: 'At the angle of repose θ, the block is on the verge of sliding, where tanθ equals the coefficient of static friction μs, i.e., μs = tanθ.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-70',
    type: 'mcq',
    question: 'A body is placed on a rough inclined plane where the angle of inclination is less than the angle of repose. In this situation, the body will:',
    options: [
      'Slide down the incline with acceleration',
      'Remain stationary, since the static friction is sufficient to balance the component of gravity along the incline',
      'Slide up the incline spontaneously',
      'Move with constant, non-zero velocity'
    ],
    correctIndex: 1,
    explanation: 'If the angle of inclination is less than the angle of repose, the available static friction is sufficient to prevent sliding, so the body remains at rest.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-71',
    type: 'mcq',
    question: 'A book pushed along a rough horizontal table eventually comes to rest, even though no external horizontal force continues to act on it after the push. This happens because of:',
    options: [
      'Newton\'s First Law being violated in this case',
      'The opposing frictional force acting on the book, which decelerates it to rest',
      'The absence of gravity acting on the book',
      'The book gaining momentum from the table'
    ],
    correctIndex: 1,
    explanation: 'The book decelerates and stops due to the kinetic friction acting opposite to its motion, which is consistent with Newton\'s laws (friction is the net unbalanced force causing the deceleration).',
    difficulty: 'easy'
  },
  {
    id: 'newtons-laws-of-motion-72',
    type: 'mcq',
    question: 'Two masses, 5 kg and 3 kg, are connected by a string over a frictionless pulley (Atwood machine) and released from rest. The tension in the string is closest to (using g = 10 m/s²):',
    options: [
      '25 N',
      '30 N',
      '37.5 N',
      '80 N'
    ],
    correctIndex: 2,
    explanation: 'Using T = 2m1m2g/(m1+m2) = 2×5×3×10/(5+3) = 300/8 = 37.5 N.',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-73',
    type: 'mcq',
    question: 'Two bodies of masses m1 and m2 are connected by a string over a smooth pulley fixed at the top of an inclined smooth plane, with m1 hanging vertically and m2 resting on the frictionless incline (inclined at angle θ). Which of the following correctly represents a step in analysing this system?',
    options: [
      'Both masses must be treated using entirely unrelated equations of motion with different accelerations',
      'Since the string is inextensible, both masses share the same magnitude of acceleration, and Newton\'s second law is applied separately to each mass before combining the equations to eliminate tension',
      'The tension in the string is different on either side of the pulley',
      'Friction must be included even though the surfaces are stated to be smooth'
    ],
    correctIndex: 1,
    explanation: 'For connected bodies via an inextensible string over an ideal pulley, both masses have the same magnitude of acceleration, and applying Newton\'s second law separately (then combining/eliminating tension) is the standard method of solving such problems.',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-74',
    type: 'mcq',
    question: 'Which of the following best explains why a karate player can break a stack of tiles with a single blow of the hand?',
    options: [
      'The hand exerts a very small force over a long time',
      'The hand delivers a large force in a very short time (high impulsive force), producing a large momentum change in a short interval',
      'Tiles are inherently very weak materials that break under any force',
      'Gravity alone is responsible for breaking the tiles'
    ],
    correctIndex: 1,
    explanation: 'A sharp, swift strike delivers a very large force over an extremely short time interval, producing a large impulsive force capable of breaking rigid materials like tiles.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-75',
    type: 'mcq',
    question: 'Assertion: A rocket accelerates forward in the vacuum of space, even though there is no air for it to push against.\nReason: The rocket\'s forward thrust arises from the reaction to the momentum of the ejected exhaust gases, which does not require any external medium like air.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Rocket propulsion works purely by Newton\'s Third Law and conservation of momentum between the rocket and its own ejected exhaust gases, and does not require any external medium such as air, correctly explaining why rockets work in the vacuum of space.',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-76',
    type: 'mcq',
    question: 'Assertion: The coefficient of kinetic friction is generally always less than the coefficient of static friction for the same pair of surfaces.\nReason: Once relative sliding begins, the contact points between the two surfaces have less time to interlock, reducing the resistance to motion compared to the static case.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'It is generally observed that μk < μs, and this is physically attributed to surfaces having less time to interlock/adhere strongly once relative sliding motion has begun, correctly connecting the assertion and reason.',
    difficulty: 'hard'
  },
  {
    id: 'newtons-laws-of-motion-77',
    type: 'mcq',
    question: 'Assertion: A person standing inside a lift moving with constant velocity (upward or downward) experiences the same apparent weight as when standing on the ground.\nReason: Since the lift is moving with constant velocity, its acceleration is zero, so the normal reaction on the person equals their actual weight, mg.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'With zero acceleration (constant velocity), the net force on the person is zero, so the normal (apparent weight) force exactly balances gravity, giving apparent weight = mg, the same as on the ground - correctly explained by the reason.',
    difficulty: 'medium'
  },
  {
    id: 'newtons-laws-of-motion-78',
    type: 'mcq',
    question: 'Which of the following correctly summarises the fundamental distinction between Newton\'s Second and Third Laws of Motion?',
    options: [
      'The Second Law relates the net force on a single body to its rate of change of momentum, while the Third Law describes the mutual, simultaneous interaction forces between two different bodies',
      'The Second Law applies only to stationary bodies, while the Third Law applies only to moving bodies',
      'Both laws describe exactly the same physical phenomenon in different words',
      'The Third Law is simply a special case of the Second Law when force is zero'
    ],
    correctIndex: 0,
    explanation: 'Newton\'s Second Law deals with how a net force affects the motion (momentum) of a single body, whereas the Third Law describes the mutual, equal-and-opposite forces exchanged between two interacting bodies - two distinct, complementary aspects of Newtonian mechanics.',
    difficulty: 'medium'
  }
];

export default questions;
