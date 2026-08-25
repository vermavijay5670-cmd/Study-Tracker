import type { Question } from "@/lib/questionBank";

// NEET Physics Question Bank
// Chapter: Motion in a Plane
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'motion-in-a-plane-1',
    type: 'mcq',
    question: 'A scalar quantity is one that has:',
    options: [
      'Both magnitude and direction, and obeys the laws of vector addition',
      'Only magnitude, and is specified completely by a number and a unit',
      'Only direction, without any definite magnitude',
      'Neither magnitude nor direction'
    ],
    correctIndex: 1,
    explanation: 'A scalar is completely specified by a magnitude (a number with a unit) alone, such as mass, temperature, or speed.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-2',
    type: 'mcq',
    question: 'A vector quantity is one that has:',
    options: [
      'Only magnitude',
      'Magnitude and direction, and obeys the laws of vector addition',
      'Only direction, with no fixed magnitude',
      'Neither magnitude nor a defined direction'
    ],
    correctIndex: 1,
    explanation: 'Vectors are characterised by both magnitude and direction, and additionally must obey specific rules of vector addition (triangle/parallelogram law) to be classified as true vectors.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-3',
    type: 'mcq',
    question: 'Electric current, although it has an associated direction, is treated as a scalar quantity because:',
    options: [
      'It does not obey the laws of vector addition (parallelogram law) at a junction',
      'It is always constant in magnitude',
      'It flows only in metals',
      'It has no magnitude'
    ],
    correctIndex: 0,
    explanation: 'Currents at a junction add algebraically according to Kirchhoff\'s junction rule, not vectorially, so despite having a sense of direction, current is treated as a scalar.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-4',
    type: 'mcq',
    question: 'Which of the following is an example of a vector quantity?',
    options: [
      'Mass',
      'Displacement',
      'Temperature',
      'Time'
    ],
    correctIndex: 1,
    explanation: 'Displacement has both magnitude and direction and obeys vector addition rules, making it a vector quantity, unlike mass, temperature, and time, which are scalars.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-5',
    type: 'mcq',
    question: 'The finite rotation of a rigid body about an axis is generally NOT treated as a vector quantity because:',
    options: [
      'It has no magnitude at all',
      'Successive finite rotations do not obey the commutative law of vector addition',
      'Rotation never has a defined axis',
      'It always has zero magnitude'
    ],
    correctIndex: 1,
    explanation: 'Although finite rotations have a magnitude (angle) and axis, they fail to satisfy the commutative property required of true vectors, so they are not classified as vectors (unlike infinitesimally small rotations).',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-plane-6',
    type: 'mcq',
    question: 'Which of the following is a scalar quantity?',
    options: [
      'Velocity',
      'Acceleration',
      'Speed',
      'Force'
    ],
    correctIndex: 2,
    explanation: 'Speed represents only the magnitude of the rate of motion and has no associated direction, making it a scalar, unlike velocity, acceleration, and force, which are vectors.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-7',
    type: 'mcq',
    question: 'A vector is graphically represented by an arrow. The length of the arrow represents the __ of the vector, and the arrowhead indicates its __.',
    options: [
      'Direction; magnitude',
      'Magnitude; direction',
      'Origin; endpoint',
      'Unit; dimension'
    ],
    correctIndex: 1,
    explanation: 'In the graphical representation of a vector, the arrow\'s length (drawn to scale) shows the magnitude, and the arrowhead shows the direction.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-8',
    type: 'mcq',
    question: 'Two vectors are said to be equal if they have:',
    options: [
      'The same magnitude only, regardless of direction',
      'The same magnitude and the same direction, irrespective of the position of their initial points',
      'The same initial point only',
      'The same direction only, regardless of magnitude'
    ],
    correctIndex: 1,
    explanation: 'Two vectors are equal only when both their magnitude and direction are identical; their location or initial point in space does not affect this equality, since vectors can be freely translated.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-9',
    type: 'mcq',
    question: 'The negative of a vector A, written as −A, has:',
    options: [
      'The same magnitude as A but points in the opposite direction',
      'A different magnitude but the same direction as A',
      'Zero magnitude',
      'The same magnitude and same direction as A'
    ],
    correctIndex: 0,
    explanation: 'The negative of a vector has the same magnitude but is directed exactly opposite to the original vector.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-10',
    type: 'mcq',
    question: 'A null (zero) vector is a vector with:',
    options: [
      'Maximum magnitude and a fixed direction',
      'Zero magnitude, and an arbitrary or undefined direction',
      'Unit magnitude only',
      'Negative magnitude'
    ],
    correctIndex: 1,
    explanation: 'A null vector has zero magnitude; since it has no definite length, its direction is not specified or is considered arbitrary.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-11',
    type: 'mcq',
    question: 'A null vector can arise, for example, as the displacement vector of an object over a time interval during which the object:',
    options: [
      'Moves along a straight line without reversing direction',
      'Returns exactly to its starting position',
      'Moves with uniform acceleration',
      'Moves in a perfect circle without returning to start'
    ],
    correctIndex: 1,
    explanation: 'If an object returns to its exact starting point after some motion, its net displacement is a null vector, even though the path length travelled is non-zero.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-12',
    type: 'mcq',
    question: 'When a vector A is multiplied by a positive real number λ (λ > 1), the resulting vector λA has:',
    options: [
      'The same direction as A, but a magnitude λ times that of A',
      'The opposite direction to A, with the same magnitude',
      'A completely random new direction',
      'Zero magnitude regardless of λ'
    ],
    correctIndex: 0,
    explanation: 'Multiplying a vector by a positive scalar changes only its magnitude (by that scalar factor), while keeping its direction unchanged.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-13',
    type: 'mcq',
    question: 'When a vector A is multiplied by a negative real number (λ < 0), the resulting vector λA:',
    options: [
      'Has the same direction as A',
      'Has a direction opposite to that of A, and magnitude |λ| times that of A',
      'Always becomes a null vector',
      'Has an undefined direction'
    ],
    correctIndex: 1,
    explanation: 'Multiplying by a negative scalar reverses the direction of the vector while scaling its magnitude by the absolute value of the scalar.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-14',
    type: 'mcq',
    question: 'If a vector A is multiplied by the scalar zero, the result is:',
    options: [
      'A vector with the same magnitude as A',
      'A null vector',
      'A unit vector',
      'Undefined; multiplication by zero is not allowed for vectors'
    ],
    correctIndex: 1,
    explanation: 'Multiplying any vector by the scalar zero yields a null vector, having zero magnitude.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-15',
    type: 'mcq',
    question: 'According to the triangle law of vector addition, if two vectors are represented in magnitude and direction by two sides of a triangle taken in the same order, their resultant is represented by:',
    options: [
      'The third side of the triangle, taken in the same order as the first two',
      'The third side of the triangle, taken in the opposite order (from the tail of the first to the head of the second)',
      'The sum of the lengths of the two given sides',
      'A vector perpendicular to the plane of the triangle'
    ],
    correctIndex: 1,
    explanation: 'The triangle law states that the resultant is given by the third side of the triangle, directed from the starting point of the first vector to the endpoint of the second vector.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-16',
    type: 'mcq',
    question: 'According to the parallelogram law of vector addition, if two vectors are represented by the adjacent sides of a parallelogram drawn from a common point, the resultant is given by:',
    options: [
      'One of the adjacent sides only',
      'The diagonal of the parallelogram passing through that same common point',
      'The diagonal of the parallelogram not passing through that point',
      'The perimeter of the parallelogram'
    ],
    correctIndex: 1,
    explanation: 'The parallelogram law states that the resultant vector is represented by the diagonal of the parallelogram drawn from the same point from which the two vectors originate.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-17',
    type: 'mcq',
    question: 'If two vectors A and B, having magnitudes A and B respectively, are inclined to each other at an angle θ, the magnitude of their resultant R using the parallelogram law is given by:',
    options: [
      'R = A + B',
      'R = √(A² + B² + 2AB cos θ)',
      'R = √(A² + B² − 2AB cos θ)',
      'R = A − B'
    ],
    correctIndex: 1,
    explanation: 'The magnitude of the resultant of two vectors inclined at angle θ is given by R = √(A² + B² + 2AB cos θ), derived using the parallelogram/triangle law.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-18',
    type: 'mcq',
    question: 'Two vectors of magnitudes 3 units and 4 units act at right angles (90°) to each other. The magnitude of their resultant is:',
    options: [
      '1 unit',
      '5 units',
      '7 units',
      '12 units'
    ],
    correctIndex: 1,
    explanation: 'Using R = √(A² + B² + 2AB cos 90°) = √(9 + 16 + 0) = √25 = 5 units, since cos 90° = 0.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-19',
    type: 'mcq',
    question: 'The maximum possible magnitude of the resultant of two vectors A and B occurs when the angle between them is:',
    options: [
      '0° (vectors are parallel/in the same direction)',
      '90°',
      '180° (vectors are antiparallel)',
      'The angle does not affect the maximum resultant'
    ],
    correctIndex: 0,
    explanation: 'When two vectors point in exactly the same direction (θ = 0°), their magnitudes add up directly, giving the maximum possible resultant, R = A + B.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-20',
    type: 'mcq',
    question: 'The minimum possible magnitude of the resultant of two vectors A and B occurs when the angle between them is:',
    options: [
      '0°',
      '90°',
      '180° (vectors are antiparallel), giving R = |A − B|',
      '270°'
    ],
    correctIndex: 2,
    explanation: 'When two vectors point in exactly opposite directions (θ = 180°), their resultant is minimum, equal to the difference of their magnitudes, R = |A − B|.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-21',
    type: 'mcq',
    question: 'Vector addition obeys the commutative law, which states that for two vectors A and B:',
    options: [
      'A + B ≠ B + A',
      'A + B = B + A',
      'A + B = A − B',
      'A + B is always a null vector'
    ],
    correctIndex: 1,
    explanation: 'Vector addition is commutative, meaning the order in which vectors are added does not affect the resultant: A + B = B + A.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-22',
    type: 'mcq',
    question: 'Vector addition obeys the associative law, which states that for three vectors A, B, and C:',
    options: [
      '(A + B) + C = A + (B + C)',
      '(A + B) + C ≠ A + (B + C)',
      'A + B + C is always zero',
      'The associative law does not apply to vector addition'
    ],
    correctIndex: 0,
    explanation: 'Vector addition is associative: the way in which vectors are grouped while adding does not change the final resultant.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-23',
    type: 'mcq',
    question: 'When several vectors are added by placing them head to tail in sequence (polygon method), and the resultant vector is drawn from the tail of the first vector to the head of the last, this represents an application of the:',
    options: [
      'Triangle law extended to multiple vectors, i.e., the polygon law of vector addition',
      'Parallelogram law only',
      'Scalar product rule',
      'Null vector rule'
    ],
    correctIndex: 0,
    explanation: 'The polygon law of vector addition extends the triangle law to more than two vectors, with the resultant given by the vector closing the polygon from the start to the end point.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-24',
    type: 'mcq',
    question: 'If several vectors, when added head to tail, form a closed polygon (the head of the last vector coincides with the tail of the first), the resultant of these vectors is:',
    options: [
      'Equal to the sum of their magnitudes',
      'A null vector',
      'Always directed along one of the original vectors',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'When vectors added head-to-tail form a closed figure, their resultant is zero, i.e., a null vector, since the endpoint coincides with the starting point.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-25',
    type: 'mcq',
    question: 'Vector subtraction, A − B, is carried out by:',
    options: [
      'Adding vector A to the negative of vector B, i.e., A + (−B)',
      'Simply subtracting the magnitudes of A and B algebraically',
      'Reversing the direction of vector A only',
      'Multiplying A and B'
    ],
    correctIndex: 0,
    explanation: 'Vector subtraction is defined as adding the negative of the vector being subtracted: A − B = A + (−B).',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-26',
    type: 'mcq',
    question: 'Given two vectors A and B of equal magnitude, inclined at 60° to each other, the magnitude of A − B is:',
    options: [
      'Equal to the magnitude of A + B',
      'Equal to the common magnitude of A (or B)',
      'Zero',
      'Twice the magnitude of A'
    ],
    correctIndex: 1,
    explanation: 'For equal vectors A and B inclined at 60°, the magnitude of the difference |A − B| = √(A² + B² − 2AB cos60°) = √(2A² − A²) = A, equal to their common magnitude.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-plane-27',
    type: 'mcq',
    question: 'Resolving a vector into components means:',
    options: ['Finding a single vector that is equal in magnitude to the original vector', 'Expressing the vector as the sum of two or more vectors, usually along chosen mutually perpendicular directions', 'Reducing the vector\'s magnitude to zero', 'Rotating the vector by 90 degrees'],
    correctIndex: 1,
    explanation: 'Resolution of a vector involves splitting it into component vectors along specified (often perpendicular) directions, such that their vector sum equals the original vector.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-28',
    type: 'mcq',
    question: 'A vector A, making an angle θ with the x-axis, has rectangular components Ax and Ay given respectively by:',
    options: [
      'Ax = A sin θ, Ay = A cos θ',
      'Ax = A cos θ, Ay = A sin θ',
      'Ax = A tan θ, Ay = A cot θ',
      'Ax = A, Ay = A'
    ],
    correctIndex: 1,
    explanation: 'For a vector making angle θ with the x-axis, its x-component is A cos θ (adjacent) and its y-component is A sin θ (opposite), by simple trigonometry.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-29',
    type: 'mcq',
    question: 'If a vector A has rectangular components Ax and Ay, its magnitude is given by:',
    options: [
      'A = Ax + Ay',
      'A = √(Ax² + Ay²)',
      'A = Ax × Ay',
      'A = Ax − Ay'
    ],
    correctIndex: 1,
    explanation: 'By the Pythagorean relationship, the magnitude of a vector is the square root of the sum of the squares of its rectangular components.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-30',
    type: 'mcq',
    question: 'The direction (angle θ with the x-axis) of a vector with components Ax and Ay is given by:',
    options: [
      'θ = tan⁻¹(Ay/Ax)',
      'θ = sin⁻¹(Ax/Ay)',
      'θ = cos⁻¹(Ay/Ax)',
      'θ = Ax × Ay'
    ],
    correctIndex: 0,
    explanation: 'The direction angle of a vector relative to the x-axis is obtained using θ = tan⁻¹(Ay/Ax), from the ratio of its y and x components.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-31',
    type: 'mcq',
    question: 'A vector of magnitude 10 units makes an angle of 30° with the x-axis. Its x-component is approximately:',
    options: [
      '5 units',
      '8.66 units',
      '10 units',
      '0 units'
    ],
    correctIndex: 1,
    explanation: 'Ax = A cos θ = 10 × cos 30° = 10 × 0.866 ≈ 8.66 units.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-32',
    type: 'mcq',
    question: 'When adding two or more vectors using the analytical (component) method, the resultant\'s components are found by:',
    options: [
      'Multiplying the corresponding components of the individual vectors',
      'Algebraically adding the corresponding x-components together and the corresponding y-components together',
      'Adding all magnitudes directly, ignoring direction',
      'Taking the cross product of the vectors'
    ],
    correctIndex: 1,
    explanation: 'In the analytical method, the x-components of all vectors are summed separately, and similarly the y-components, to obtain the components of the resultant vector.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-33',
    type: 'mcq',
    question: 'A unit vector is a vector with:',
    options: [
      'Magnitude equal to one, used to specify a direction',
      'Magnitude equal to zero',
      'An undefined magnitude',
      'Magnitude always greater than one'
    ],
    correctIndex: 0,
    explanation: 'A unit vector has a magnitude of exactly one and is used purely to indicate direction, without contributing any magnitude of its own.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-34',
    type: 'mcq',
    question: 'The unit vector in the direction of a given vector A is obtained by:',
    options: [
      'Multiplying A by its own magnitude',
      'Dividing the vector A by its own magnitude, i.e., Â = A/|A|',
      'Adding 1 to the magnitude of A',
      'Taking the square of A'
    ],
    correctIndex: 1,
    explanation: 'The unit vector along A is obtained by dividing A by its magnitude, ensuring the resulting vector has magnitude 1 while preserving the original direction.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-35',
    type: 'mcq',
    question: 'In Cartesian coordinates, the standard unit vectors along the x, y, and z axes are conventionally denoted as:',
    options: [
      'a, b, c',
      'i, j, k',
      'x, y, z',
      'p, q, r'
    ],
    correctIndex: 1,
    explanation: 'The unit vectors along the x, y, and z axes are conventionally represented as i, j, and k respectively.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-36',
    type: 'mcq',
    question: 'A vector A can be expressed in terms of its rectangular components and the unit vectors i and j (in two dimensions) as:',
    options: [
      'A = Ax + Ay',
      'A = Ax i + Ay j',
      'A = Ax/i + Ay/j',
      'A = (Ax)(Ay)(i)(j)'
    ],
    correctIndex: 1,
    explanation: 'A two-dimensional vector is expressed as the sum of its scalar components multiplied by the respective unit vectors: A = Ax i + Ay j.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-37',
    type: 'mcq',
    question: 'The position vector of a point in a plane, with respect to a chosen origin, is written as r = x i + y j. This vector represents:',
    options: [
      'The velocity of the point',
      'The location of the point relative to the origin, in terms of its x and y coordinates',
      'The acceleration of the point',
      'The speed of the point'
    ],
    correctIndex: 1,
    explanation: 'A position vector specifies the location of a point in space relative to a defined origin, using coordinate components along the chosen axes.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-38',
    type: 'mcq',
    question: 'If a particle moves from position vector r1 to r2, its displacement vector Δr is given by:',
    options: [
      'Δr = r1 + r2',
      'Δr = r2 − r1',
      'Δr = r1 − r2',
      'Δr = r1 × r2'
    ],
    correctIndex: 1,
    explanation: 'Displacement is the vector difference between the final and initial position vectors: Δr = r2 − r1.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-39',
    type: 'mcq',
    question: 'For a particle moving in a plane, the average velocity over a time interval Δt is defined as:',
    options: [
      'The displacement vector Δr divided by Δt',
      'The path length travelled divided by Δt',
      'The acceleration multiplied by Δt',
      'The position vector at the final instant only'
    ],
    correctIndex: 0,
    explanation: 'Average velocity in a plane is the displacement vector Δr divided by the time interval Δt, in the same direction as the displacement.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-40',
    type: 'mcq',
    question: 'The instantaneous velocity of a particle moving along a curved path, at any given point, is directed:',
    options: [
      'Perpendicular to the path at that point',
      'Tangentially to the path at that point',
      'Always toward the origin',
      'Along a fixed direction, regardless of the path shape'
    ],
    correctIndex: 1,
    explanation: 'The instantaneous velocity vector at any point on a curved path is always directed along the tangent to the path at that point.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-41',
    type: 'mcq',
    question: 'For motion in a plane, the average acceleration over a time interval Δt is defined as:',
    options: [
      'The change in velocity vector Δv divided by Δt',
      'The displacement divided by Δt',
      'The change in speed only, divided by Δt',
      'The position vector divided by Δt'
    ],
    correctIndex: 0,
    explanation: 'Average acceleration is the vector change in velocity (Δv) divided by the time interval (Δt) over which the change occurs.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-42',
    type: 'mcq',
    question: 'For a particle undergoing motion in a plane with constant acceleration, the motion can be conveniently analysed by:',
    options: [
      'Treating it as a single, inseparable two-dimensional problem that cannot be broken down further',
      'Resolving the motion into two independent, simultaneous one-dimensional motions along two mutually perpendicular directions',
      'Ignoring the vertical component of motion entirely',
      'Assuming the acceleration acts only along the x-axis'
    ],
    correctIndex: 1,
    explanation: 'Motion in a plane with constant acceleration can be treated as two independent one-dimensional motions occurring simultaneously along two perpendicular axes (principle of independence of perpendicular components).',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-43',
    type: 'mcq',
    question: 'The relative velocity of object A with respect to object B, when both are moving in a plane, is given by the vector expression:',
    options: [
      'v_AB = v_A + v_B',
      'v_AB = v_A − v_B',
      'v_AB = v_A × v_B',
      'v_AB = v_B − v_A always'
    ],
    correctIndex: 1,
    explanation: 'Relative velocity of A with respect to B is obtained by the vector subtraction v_AB = v_A − v_B, following the same rule as in one dimension but applied vectorially.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-44',
    type: 'mcq',
    question: 'Two boats move with velocities that are equal in magnitude but perpendicular to each other. The magnitude of the relative velocity of one boat with respect to the other is:',
    options: [
      'Equal to the magnitude of either individual velocity',
      'Equal to √2 times the magnitude of either individual velocity',
      'Twice the magnitude of either individual velocity',
      'Zero'
    ],
    correctIndex: 1,
    explanation: 'For two perpendicular velocity vectors of equal magnitude v, the relative velocity magnitude is √(v² + v²) = v√2.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-plane-45',
    type: 'mcq',
    question: 'Projectile motion refers to the two-dimensional motion of an object that is given an initial velocity and then moves freely under the influence of:',
    options: [
      'A constant horizontal force only',
      'Gravity alone (assuming air resistance is negligible)',
      'A constantly changing acceleration in random directions',
      'No forces at all'
    ],
    correctIndex: 1,
    explanation: 'Projectile motion describes an object launched with some initial velocity and subsequently moving solely under gravitational acceleration, with air resistance neglected.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-46',
    type: 'mcq',
    question: 'The horizontal component of velocity during projectile motion (ignoring air resistance) remains:',
    options: [
      'Constant throughout the motion, since no horizontal force/acceleration acts on the projectile',
      'Continuously increasing',
      'Continuously decreasing to zero',
      'Equal to the vertical component at all times'
    ],
    correctIndex: 0,
    explanation: 'Since gravity acts only vertically, there is no horizontal acceleration, so the horizontal velocity component of a projectile remains constant throughout its flight.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-47',
    type: 'mcq',
    question: 'The vertical component of velocity during projectile motion changes with time due to:',
    options: [
      'Air resistance only',
      'The constant downward acceleration due to gravity',
      'A varying horizontal force',
      'The rotation of the Earth'
    ],
    correctIndex: 1,
    explanation: 'The vertical component of a projectile\'s velocity changes continuously because of the constant downward acceleration due to gravity.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-48',
    type: 'mcq',
    question: 'The path (trajectory) followed by a projectile launched at an angle to the horizontal, under gravity alone, is:',
    options: [
      'A straight line',
      'A parabola',
      'A circle',
      'An ellipse'
    ],
    correctIndex: 1,
    explanation: 'The trajectory of projectile motion is described by a parabolic equation, y = x tanθ − gx²/(2u²cos²θ), which is the equation of a parabola.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-49',
    type: 'mcq',
    question: 'For a projectile launched with initial speed u at angle θ to the horizontal, the time of flight (total time in the air, assuming level ground) is given by:',
    options: [
      'T = u sinθ / g',
      'T = 2u sinθ / g',
      'T = u cosθ / g',
      'T = u² sin2θ / g'
    ],
    correctIndex: 1,
    explanation: 'Time of flight for a projectile on level ground is T = 2u sinθ / g, derived from the vertical motion equations.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-50',
    type: 'mcq',
    question: 'For a projectile launched with initial speed u at angle θ to the horizontal, the maximum height reached is given by:',
    options: [
      'H = u sinθ / g',
      'H = u² sin²θ / (2g)',
      'H = u² sin2θ / g',
      'H = 2u sinθ / g'
    ],
    correctIndex: 1,
    explanation: 'Maximum height of a projectile is given by H = u² sin²θ / (2g), obtained by setting the vertical velocity component to zero at the highest point.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-51',
    type: 'mcq',
    question: 'For a projectile launched with initial speed u at angle θ to the horizontal, the horizontal range (on level ground) is given by:',
    options: [
      'R = u² sinθ / g',
      'R = u² sin2θ / g',
      'R = u² cos2θ / g',
      'R = 2u² sinθ / g'
    ],
    correctIndex: 1,
    explanation: 'The horizontal range of a projectile on level ground is given by R = u² sin(2θ) / g, derived from combining the time of flight with constant horizontal velocity.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-52',
    type: 'mcq',
    question: 'For a given initial speed u, the horizontal range of a projectile is maximum when the angle of projection θ is:',
    options: [
      '30°',
      '45°',
      '60°',
      '90°'
    ],
    correctIndex: 1,
    explanation: 'Since range R = u²sin2θ/g is maximised when sin2θ = 1, i.e., 2θ = 90°, the maximum range occurs at θ = 45°.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-53',
    type: 'mcq',
    question: 'The maximum horizontal range of a projectile, launched with initial speed u at the optimum angle, is given by:',
    options: [
      'R_max = u/g',
      'R_max = u²/g',
      'R_max = u²/(2g)',
      'R_max = 2u²/g'
    ],
    correctIndex: 1,
    explanation: 'At θ = 45° (giving sin2θ = 1), the range formula reduces to R_max = u²/g, the maximum possible range for a given launch speed.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-54',
    type: 'mcq',
    question: 'For two angles of projection θ and (90° − θ), with the same initial speed u, the horizontal ranges achieved are:',
    options: [
      'Always different from each other',
      'Equal to each other, since sin2θ = sin[2(90°−θ)]',
      'Related such that one is exactly double the other',
      'Impossible to compare without more information'
    ],
    correctIndex: 1,
    explanation: 'Since sin2θ = sin(180° − 2θ) = sin[2(90° − θ)], complementary angles of projection (θ and 90° − θ) give the same horizontal range for a given initial speed.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-plane-55',
    type: 'mcq',
    question: 'At the highest point of a projectile\'s trajectory, the velocity of the projectile is:',
    options: [
      'Zero',
      'Purely horizontal, equal to u cosθ, since the vertical component becomes zero at that point',
      'Purely vertical',
      'Equal to the initial launch speed u'
    ],
    correctIndex: 1,
    explanation: 'At the highest point, the vertical velocity component becomes zero, leaving only the constant horizontal component u cosθ as the velocity at that instant.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-56',
    type: 'mcq',
    question: 'Throughout its flight (ignoring air resistance), the acceleration of a projectile is:',
    options: [
      'Zero at the highest point only',
      'Constant, equal to g, directed vertically downward at all points including the highest point',
      'Directed along the velocity vector at every point',
      'Continuously changing in magnitude and direction'
    ],
    correctIndex: 1,
    explanation: 'The acceleration acting on a projectile remains constant throughout its flight, equal to g and directed vertically downward, regardless of the projectile\'s position or velocity direction.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-57',
    type: 'mcq',
    question: 'A ball thrown horizontally from the top of a tower undergoes projectile motion. Compared to a ball simply dropped from the same height at the same instant, the horizontally thrown ball reaches the ground:',
    options: [
      'Earlier than the dropped ball',
      'At the same time as the dropped ball, since the vertical motion is independent of the horizontal motion',
      'Later than the dropped ball',
      'Only if it is thrown with a very high horizontal speed'
    ],
    correctIndex: 1,
    explanation: 'Since horizontal and vertical motions are independent, both balls, having the same initial vertical velocity (zero) and the same vertical acceleration (g), take the same time to reach the ground.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-58',
    type: 'mcq',
    question: 'Uniform circular motion refers to motion in which an object moves along a circular path with:',
    options: [
      'Constantly changing speed but constant direction',
      'Constant speed, though its velocity direction is continuously changing',
      'Both constant speed and constant velocity',
      'Zero acceleration throughout'
    ],
    correctIndex: 1,
    explanation: 'In uniform circular motion, the speed (magnitude of velocity) remains constant, but the direction of velocity changes continuously as the object moves around the circle.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-59',
    type: 'mcq',
    question: 'Although the speed is constant in uniform circular motion, the object still has a non-zero acceleration because:',
    options: [
      'Acceleration depends only on the magnitude of velocity, which is changing',
      'Velocity is a vector, and even though its magnitude is constant, its direction is continuously changing, producing acceleration',
      'The object is moving at all, regardless of the path',
      'The radius of the circle is changing'
    ],
    correctIndex: 1,
    explanation: 'Since acceleration depends on the rate of change of the velocity vector (which includes direction), even a constant-speed circular motion has acceleration because velocity direction continuously changes.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-60',
    type: 'mcq',
    question: 'The acceleration experienced by an object in uniform circular motion, directed toward the centre of the circle, is called:',
    options: [
      'Tangential acceleration',
      'Centripetal acceleration',
      'Gravitational acceleration',
      'Angular acceleration'
    ],
    correctIndex: 1,
    explanation: 'Centripetal acceleration is the acceleration directed toward the centre of the circular path, responsible for continuously changing the direction of velocity in uniform circular motion.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-61',
    type: 'mcq',
    question: 'The magnitude of centripetal acceleration for an object moving with speed v along a circle of radius r is given by:',
    options: [
      'a = v/r',
      'a = v²/r',
      'a = vr',
      'a = v²r'
    ],
    correctIndex: 1,
    explanation: 'The centripetal acceleration is given by a = v²/r, directed radially inward toward the centre of the circular path.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-62',
    type: 'mcq',
    question: 'The centripetal acceleration for an object in uniform circular motion can also be expressed in terms of angular speed ω and radius r as:',
    options: [
      'a = ωr',
      'a = ω²r',
      'a = ω/r',
      'a = ω²/r'
    ],
    correctIndex: 1,
    explanation: 'Using v = ωr, the centripetal acceleration a = v²/r can also be written as a = ω²r.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-63',
    type: 'mcq',
    question: 'In uniform circular motion, the relationship between linear speed v, angular speed ω, and radius r is:',
    options: [
      'v = ω/r',
      'v = ωr',
      'v = ω + r',
      'v = ω²r'
    ],
    correctIndex: 1,
    explanation: 'Linear speed and angular speed are related through the radius of the circular path: v = ωr.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-plane-64',
    type: 'mcq',
    question: 'The time period T of an object undergoing uniform circular motion is related to its angular speed ω by:',
    options: [
      'T = 2πω',
      'T = 2π/ω',
      'T = ω/2π',
      'T = π/2ω'
    ],
    correctIndex: 1,
    explanation: 'The time period, being the time for one complete revolution (2π radians), is related to angular speed by T = 2π/ω.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-65',
    type: 'mcq',
    question: 'The direction of the centripetal acceleration vector, relative to the instantaneous velocity vector in uniform circular motion, is always:',
    options: [
      'Parallel to the velocity vector',
      'Perpendicular to the velocity vector',
      'Antiparallel (exactly opposite) to the velocity vector',
      'At an angle of 45° to the velocity vector'
    ],
    correctIndex: 1,
    explanation: 'Since velocity is always tangential to the circular path and centripetal acceleration is always radial (toward the centre), the two are always perpendicular to each other.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-66',
    type: 'mcq',
    question: 'A stone tied to a string and whirled in a horizontal circle at constant speed has an acceleration that:',
    options: [
      'Increases the speed of the stone continuously',
      'Continuously changes the direction of the stone\'s velocity, keeping it moving in a circle, without changing its speed',
      'Has no effect on the stone\'s motion at all',
      'Acts tangentially, causing the stone to speed up and slow down periodically'
    ],
    correctIndex: 1,
    explanation: 'The centripetal acceleration acts to continuously redirect the velocity vector, keeping the stone on a circular path, while its magnitude (speed) remains unchanged.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-67',
    type: 'mcq',
    question: 'The angular speed ω of an object performing uniform circular motion is related to the frequency of revolution ν by:',
    options: [
      'ω = ν',
      'ω = 2πν',
      'ω = ν/2π',
      'ω = π/ν'
    ],
    correctIndex: 1,
    explanation: 'Angular speed is related to the frequency (revolutions per second) by ω = 2πν, since each revolution corresponds to an angle of 2π radians.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-68',
    type: 'mcq',
    question: 'The scalar (dot) product of two vectors A and B, inclined at angle θ to each other, is given by:',
    options: [
      'A·B = AB sinθ',
      'A·B = AB cosθ',
      'A·B = AB tanθ',
      'A·B = A + B'
    ],
    correctIndex: 1,
    explanation: 'The scalar (dot) product of two vectors is defined as A·B = AB cosθ, yielding a scalar quantity.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-69',
    type: 'mcq',
    question: 'The scalar (dot) product of two mutually perpendicular vectors is:',
    options: [
      'Equal to the product of their magnitudes',
      'Zero, since cos90° = 0',
      'Always negative',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'Since the dot product involves cosθ, and cos90° = 0, the scalar product of two perpendicular vectors is always zero.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-70',
    type: 'mcq',
    question: 'The vector (cross) product of two vectors A and B, inclined at angle θ, has a magnitude given by:',
    options: [
      'AB cosθ',
      'AB sinθ',
      'AB tanθ',
      'A + B'
    ],
    correctIndex: 1,
    explanation: 'The magnitude of the vector (cross) product is given by |A × B| = AB sinθ, with direction determined by the right-hand rule.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-71',
    type: 'mcq',
    question: 'Unlike the scalar product, the vector (cross) product of two vectors is NOT commutative; specifically:',
    options: [
      'A × B = B × A',
      'A × B = −(B × A)',
      'A × B = A·B',
      'A × B is always zero regardless of order'
    ],
    correctIndex: 1,
    explanation: 'The vector product is anti-commutative: reversing the order of the vectors reverses the direction of the resultant vector, so A × B = −(B × A).',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-72',
    type: 'mcq',
    question: 'The direction of the vector (cross) product A × B is determined using:',
    options: [
      'The left-hand rule',
      'The right-hand (thumb) rule, giving a direction perpendicular to the plane containing A and B',
      'Always along vector A',
      'Always along vector B'
    ],
    correctIndex: 1,
    explanation: 'The right-hand rule is used to determine the direction of the cross product, which is always perpendicular to the plane formed by the two vectors being multiplied.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-73',
    type: 'mcq',
    question: 'The vector (cross) product of two parallel (or antiparallel) vectors is:',
    options: [
      'Equal to the product of their magnitudes',
      'A null vector, since sin0° (or sin180°) = 0',
      'Always a unit vector',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'Since the cross product magnitude involves sinθ, and sinθ = 0 for parallel (θ=0°) or antiparallel (θ=180°) vectors, their cross product is a null vector.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-plane-74',
    type: 'mcq',
    question: 'For the standard unit vectors i, j, and k, the value of i × j is:',
    options: [
      'i',
      'k',
      'j',
      'A null vector'
    ],
    correctIndex: 1,
    explanation: 'By the standard right-hand rule convention for Cartesian unit vectors, i × j = k.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-plane-75',
    type: 'mcq',
    question: 'Assertion: The sum of two vectors of unequal magnitude can never be zero.\nReason: For the sum of two vectors to be zero, they must be equal in magnitude and exactly opposite in direction.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since two vectors sum to zero only when they have equal magnitudes and opposite directions, vectors of unequal magnitude can never add up to a null vector, correctly explained by the reason.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-plane-76',
    type: 'mcq',
    question: 'Assertion: In projectile motion, the horizontal and vertical motions can be analysed completely independently of each other.\nReason: The acceleration due to gravity acts only in the vertical direction and has no component along the horizontal direction.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since gravity has no horizontal component, the horizontal velocity remains unaffected by the vertical motion, allowing the two directions to be treated as independent, one-dimensional motions - correctly explained by the reason.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-plane-77',
    type: 'mcq',
    question: 'Assertion: A particle moving with uniform circular motion has zero acceleration.\nReason: The speed of the particle remains constant throughout the motion.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and related',
      'Assertion is false, since the changing direction of velocity produces a non-zero centripetal acceleration, even though the reason (constant speed) is true',
      'Both assertion and reason are false',
      'Assertion is true, but reason is false'
    ],
    correctIndex: 1,
    explanation: 'The assertion is false: although speed is constant (reason is true), the continuously changing direction of velocity results in a non-zero centripetal acceleration, so the two statements, while both partially true individually, do not support each other as stated.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-plane-78',
    type: 'mcq',
    question: 'Which of the following statements correctly distinguishes the scalar product from the vector product of two vectors?',
    options: [
      'The scalar product yields a vector, while the vector product yields a scalar',
      'The scalar product yields a scalar quantity (using cosθ), while the vector product yields a vector quantity (using sinθ) perpendicular to both original vectors',
      'Both products always yield the same numerical result',
      'The scalar product is never used in physics, unlike the vector product'
    ],
    correctIndex: 1,
    explanation: 'The scalar (dot) product results in a scalar value proportional to cosθ, whereas the vector (cross) product results in a vector proportional to sinθ, directed perpendicular to the plane of the two original vectors.',
    difficulty: 'medium'
  }
];

export default questions;
