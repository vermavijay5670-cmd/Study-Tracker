import type { Question } from "@/lib/questionBank";

// NEET Physics Question Bank
// Chapter: Motion in a Straight Line
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'motion-in-a-straight-line-1',
    type: 'mcq',
    question: 'The total length of the actual path travelled by an object between its initial and final positions is called:',
    options: [
      'Displacement',
      'Path length (distance)',
      'Velocity',
      'Position'
    ],
    correctIndex: 1,
    explanation: 'Path length, or distance, is the total length of the actual route travelled by an object, regardless of direction.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-2',
    type: 'mcq',
    question: 'Displacement of an object is defined as:',
    options: [
      'The total path length travelled',
      'The shortest straight-line distance between the initial and final positions, along with its direction',
      'The speed of the object at a given instant',
      'The time taken to travel a given distance'
    ],
    correctIndex: 1,
    explanation: 'Displacement is a vector quantity representing the change in position, given by the straight-line distance from the initial to the final position, together with direction.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-3',
    type: 'mcq',
    question: 'Path length (distance) is a __ quantity, while displacement is a __ quantity.',
    options: [
      'Vector; scalar',
      'Scalar; vector',
      'Scalar; scalar',
      'Vector; vector'
    ],
    correctIndex: 1,
    explanation: 'Distance/path length has only magnitude (scalar), whereas displacement has both magnitude and direction (vector).',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-4',
    type: 'mcq',
    question: 'For any given motion, the magnitude of displacement is:',
    options: [
      'Always greater than the path length',
      'Always equal to the path length',
      'Always less than or equal to the path length',
      'Unrelated to the path length'
    ],
    correctIndex: 2,
    explanation: 'The magnitude of displacement can never exceed the path length; they are equal only for unidirectional straight-line motion.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-5',
    type: 'mcq',
    question: 'The magnitude of displacement equals the path length only when the object:',
    options: [
      'Moves in a circular path',
      'Moves along a straight line without reversing its direction of motion',
      'Comes back to its starting point',
      'Moves with variable speed'
    ],
    correctIndex: 1,
    explanation: 'For one-directional straight-line motion (no reversal), the straight-line displacement coincides with the actual path travelled.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-6',
    type: 'mcq',
    question: 'An object moves from point A to point B (5 m away) and then returns to A. The total path length and the magnitude of the net displacement are respectively:',
    options: [
      '5 m and 5 m',
      '10 m and 0 m',
      '0 m and 10 m',
      '10 m and 10 m'
    ],
    correctIndex: 1,
    explanation: 'The object travels 5 m to B and 5 m back to A, giving a total path length of 10 m, but since it returns to the starting point, the net displacement is zero.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-7',
    type: 'mcq',
    question: 'Which of the following statements is true regarding path length as time progresses?',
    options: [
      'Path length can decrease with time',
      'Path length never decreases with time; it either increases or remains constant',
      'Path length is always equal to displacement',
      'Path length can be negative'
    ],
    correctIndex: 1,
    explanation: 'Since path length accumulates as an object moves, it can only increase or stay the same (if the object is at rest); it can never decrease.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-8',
    type: 'mcq',
    question: 'Displacement of an object can be:',
    options: [
      'Only positive',
      'Only negative',
      'Positive, negative, or zero, depending on direction and net change in position',
      'Only zero for moving objects'
    ],
    correctIndex: 2,
    explanation: 'Since displacement is a vector along a chosen direction, it can be positive, negative, or zero depending on the object\'s net change in position.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-9',
    type: 'mcq',
    question: 'The position of an object moving along a straight line is generally specified with reference to a chosen:',
    options: [
      'Moving observer only',
      'Origin and a positive direction along that line',
      'The object\'s own initial velocity',
      'Its final velocity'
    ],
    correctIndex: 1,
    explanation: 'Position along a straight line is described relative to a chosen origin, with a defined positive direction for measuring displacement.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-10',
    type: 'mcq',
    question: 'If the path length travelled by an object is zero, then its displacement must also be:',
    options: [
      'Non-zero',
      'Zero, since the object hasn\'t moved at all',
      'Negative',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'If path length is zero, the object has not moved, so its displacement must also be zero.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-11',
    type: 'mcq',
    question: 'An object is said to be in uniform motion along a straight line if it covers:',
    options: [
      'Unequal distances in equal intervals of time',
      'Equal distances in equal intervals of time',
      'Any distance in any time interval',
      'Zero distance in all time intervals'
    ],
    correctIndex: 1,
    explanation: 'Uniform motion is defined by the object covering equal distances in equal time intervals, implying constant speed/velocity.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-12',
    type: 'mcq',
    question: 'Non-uniform motion is characterised by:',
    options: [
      'Equal displacements in equal time intervals',
      'Unequal displacements in equal time intervals, implying a changing velocity',
      'Zero velocity at all times',
      'Constant acceleration always equal to zero'
    ],
    correctIndex: 1,
    explanation: 'In non-uniform motion, the object covers unequal distances in equal time intervals, meaning its velocity changes with time.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-13',
    type: 'mcq',
    question: 'Speed of an object is defined as:',
    options: [
      'The rate of change of displacement with time',
      'The rate of change of path length (distance) with time',
      'The rate of change of acceleration',
      'The change in velocity'
    ],
    correctIndex: 1,
    explanation: 'Speed refers to how fast an object covers distance (path length) per unit time, and is a scalar quantity.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-14',
    type: 'mcq',
    question: 'Velocity of an object is defined as:',
    options: [
      'The rate of change of path length with time',
      'The rate of change of displacement with time, a vector quantity',
      'Always equal in magnitude to speed',
      'A quantity that is always positive'
    ],
    correctIndex: 1,
    explanation: 'Velocity is the rate of change of displacement with time and, being a vector, includes both magnitude and direction.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-15',
    type: 'mcq',
    question: 'Average velocity over a time interval is defined as:',
    options: [
      'Total path length divided by total time taken',
      'Change in displacement (Δx) divided by the corresponding time interval (Δt)',
      'Instantaneous velocity at the midpoint of the interval',
      'The sum of initial and final velocities'
    ],
    correctIndex: 1,
    explanation: 'Average velocity = Δx/Δt, the net displacement divided by the time interval over which it occurred.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-16',
    type: 'mcq',
    question: 'Average speed over a time interval is defined as:',
    options: [
      'Total path length travelled divided by the total time taken',
      'Net displacement divided by total time',
      'Always equal to average velocity',
      'The instantaneous speed at the start of motion'
    ],
    correctIndex: 0,
    explanation: 'Average speed = total path length / total time taken, and unlike average velocity, uses the actual distance travelled rather than net displacement.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-17',
    type: 'mcq',
    question: 'For any given motion, the average speed of an object is:',
    options: [
      'Always less than the magnitude of its average velocity',
      'Always greater than or equal to the magnitude of its average velocity',
      'Always exactly equal to the magnitude of average velocity',
      'Completely unrelated to average velocity'
    ],
    correctIndex: 1,
    explanation: 'Since path length ≥ magnitude of displacement, average speed (path length/time) is always ≥ magnitude of average velocity (displacement/time).',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-18',
    type: 'mcq',
    question: 'Average speed equals the magnitude of average velocity only when the object:',
    options: [
      'Reverses its direction of motion at some point',
      'Moves along a straight line without changing direction (unidirectional motion)',
      'Comes to rest momentarily during the journey',
      'Moves in a closed loop'
    ],
    correctIndex: 1,
    explanation: 'When motion is unidirectional along a straight line, path length equals the magnitude of displacement, making average speed equal to the magnitude of average velocity.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-19',
    type: 'mcq',
    question: 'An object travels 60 km in the first hour and returns 60 km in the next hour along the same path back to its starting point. Its average velocity for the entire 2-hour journey is:',
    options: [
      '60 km/h',
      '30 km/h',
      'Zero, since net displacement is zero',
      '120 km/h'
    ],
    correctIndex: 2,
    explanation: 'Since the object ends up back at its starting point, its net displacement is zero, making average velocity zero, even though average speed is 60 km/h.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-20',
    type: 'mcq',
    question: 'In the previous scenario (60 km out and 60 km back in 2 hours total), the average speed of the object is:',
    options: [
      'Zero',
      '30 km/h',
      '60 km/h',
      '120 km/h'
    ],
    correctIndex: 2,
    explanation: 'Average speed = total path length/total time = 120 km / 2 h = 60 km/h, unlike average velocity, which is zero here.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-21',
    type: 'mcq',
    question: 'Average velocity of an object can be zero even though it has covered a non-zero path length, provided that:',
    options: [
      'The motion is uniformly accelerated',
      'The net displacement over that time interval is zero, such as returning to the starting point',
      'The object never stops moving',
      'The object moves only in the positive direction'
    ],
    correctIndex: 1,
    explanation: 'Average velocity depends only on net displacement, which can be zero (e.g., round trip) even while the path length travelled is non-zero.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-22',
    type: 'mcq',
    question: 'Which of the following quantities can never be negative for any motion?',
    options: [
      'Displacement',
      'Average velocity',
      'Average speed',
      'Acceleration'
    ],
    correctIndex: 2,
    explanation: 'Since average speed is total path length divided by time, and path length is always non-negative, average speed can never be negative.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-23',
    type: 'mcq',
    question: 'Instantaneous velocity at a given time is defined as:',
    options: [
      'The average velocity over a very large time interval',
      'The limiting value of average velocity as the time interval Δt approaches zero, i.e., dx/dt',
      'The total displacement divided by total time for the whole journey',
      'The speed measured by a speedometer at that instant'
    ],
    correctIndex: 1,
    explanation: 'Instantaneous velocity is defined as the limit of Δx/Δt as Δt → 0, mathematically the derivative dx/dt.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-24',
    type: 'mcq',
    question: 'On a position-time graph, the instantaneous velocity at a given point corresponds to the:',
    options: [
      'Value of position (x) at that point',
      'Slope of the tangent to the curve at that point',
      'Area under the curve up to that point',
      'Slope of the line joining the origin to that point'
    ],
    correctIndex: 1,
    explanation: 'Instantaneous velocity is given by the slope of the tangent drawn to the position-time curve at the point corresponding to that instant.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-25',
    type: 'mcq',
    question: 'Instantaneous speed is defined as:',
    options: [
      'The magnitude of instantaneous velocity at that instant',
      'The average speed calculated over the whole journey',
      'Always different from the magnitude of instantaneous velocity',
      'The rate of change of acceleration'
    ],
    correctIndex: 0,
    explanation: 'Instantaneous speed is simply the magnitude of the instantaneous velocity vector at a given moment.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-26',
    type: 'mcq',
    question: 'Acceleration of an object is defined as the:',
    options: [
      'Rate of change of displacement with time',
      'Rate of change of velocity with time',
      'Rate of change of path length with time',
      'Total distance travelled per unit time'
    ],
    correctIndex: 1,
    explanation: 'Acceleration is defined as the time rate of change of velocity, and is a vector quantity.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-27',
    type: 'mcq',
    question: 'Average acceleration over a time interval Δt is given by:',
    options: [
      'Δx/Δt',
      'Δv/Δt, the change in velocity divided by the time interval',
      'v/t at any instant',
      'The average of initial and final positions'
    ],
    correctIndex: 1,
    explanation: 'Average acceleration is calculated as the total change in velocity (Δv) divided by the corresponding time interval (Δt).',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-28',
    type: 'mcq',
    question: 'Instantaneous acceleration is mathematically defined as:',
    options: [
      'dv/dt, the derivative of velocity with respect to time',
      'dx/dt, the derivative of position with respect to time',
      'The average velocity over an infinitesimally small distance',
      'v multiplied by t'
    ],
    correctIndex: 0,
    explanation: 'Instantaneous acceleration is the derivative of velocity with respect to time, a = dv/dt, and can also be expressed as d²x/dt².',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-29',
    type: 'mcq',
    question: 'If the velocity of an object is constant, its acceleration is:',
    options: [
      'Also constant but non-zero',
      'Zero',
      'Undefined',
      'Always negative'
    ],
    correctIndex: 1,
    explanation: 'Since acceleration measures the rate of change of velocity, constant (unchanging) velocity implies zero acceleration.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-30',
    type: 'mcq',
    question: 'If the velocity-time graph of an object is a straight line with a constant positive slope, the object is undergoing:',
    options: [
      'Zero acceleration',
      'Uniform (constant) acceleration',
      'Non-uniform (variable) acceleration',
      'Uniform velocity'
    ],
    correctIndex: 1,
    explanation: 'A constant slope in the v-t graph means the rate of change of velocity (acceleration) is itself constant, i.e., uniform acceleration.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-31',
    type: 'mcq',
    question: 'Retardation (deceleration) refers to a situation where:',
    options: [
      'The acceleration acts in the same direction as velocity, increasing speed',
      'The acceleration acts opposite to the direction of velocity, causing the speed to decrease',
      'Acceleration is exactly zero',
      'Velocity is increasing without any acceleration'
    ],
    correctIndex: 1,
    explanation: 'Retardation (or deceleration) occurs when acceleration is directed opposite to the velocity, causing the object\'s speed to decrease over time.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-32',
    type: 'mcq',
    question: 'For an object at rest, the position-time graph is a:',
    options: [
      'Straight line parallel to the position axis',
      'Straight line parallel to the time axis, since position does not change',
      'Parabola',
      'Straight line passing through the origin with a positive slope'
    ],
    correctIndex: 1,
    explanation: 'Since the position of a stationary object does not change with time, its position-time graph is a horizontal straight line (parallel to the time axis).',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-33',
    type: 'mcq',
    question: 'For an object moving with uniform (constant) velocity, the position-time graph is:',
    options: [
      'A straight line with constant, non-zero slope',
      'A parabola opening upward',
      'A horizontal straight line',
      'A curve with continuously changing slope'
    ],
    correctIndex: 0,
    explanation: 'Uniform velocity means the position changes at a constant rate with time, giving a straight-line position-time graph with constant slope.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-34',
    type: 'mcq',
    question: 'For an object starting from rest and moving with uniform (constant) positive acceleration, the position-time graph is generally:',
    options: [
      'A straight line',
      'A parabola, since position varies quadratically with time (x ∝ t²)',
      'A horizontal line',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'For uniformly accelerated motion starting from rest, x = (1/2)at², so the position-time graph is a parabola.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-35',
    type: 'mcq',
    question: 'The slope of the position-time graph at any point directly gives the object\'s:',
    options: [
      'Acceleration at that instant',
      'Instantaneous velocity at that instant',
      'Average speed over the whole journey',
      'Displacement at that instant'
    ],
    correctIndex: 1,
    explanation: 'The slope of the tangent to the x-t curve at a point represents the instantaneous velocity of the object at that instant.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-36',
    type: 'mcq',
    question: 'In a position-time graph, if the slope of the curve becomes steeper with time, this indicates that the object\'s:',
    options: [
      'Velocity is decreasing',
      'Velocity is increasing (the object is accelerating)',
      'Velocity is constant',
      'Position is not changing'
    ],
    correctIndex: 1,
    explanation: 'A steepening slope on the x-t graph means the rate of change of position (velocity) is increasing, indicating the object is accelerating.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-37',
    type: 'mcq',
    question: 'Two straight-line segments with different slopes on a position-time graph, both with positive slope, but one steeper than the other, represent:',
    options: [
      'Two intervals with the same constant velocity',
      'Two intervals of uniform motion but with different constant velocities',
      'A single interval of accelerated motion',
      'The object being at rest during both intervals'
    ],
    correctIndex: 1,
    explanation: 'Different constant slopes represent different but constant velocities during each respective time interval.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-38',
    type: 'mcq',
    question: 'On a position-time graph, a horizontal line followed by a sloped line followed by another horizontal line typically represents an object that:',
    options: [
      'Continuously accelerates throughout the motion',
      'Is initially at rest, then moves with uniform velocity, and finally comes to rest again',
      'Moves backward the entire time',
      'Has constantly increasing velocity'
    ],
    correctIndex: 1,
    explanation: 'The horizontal segments indicate the object is stationary (constant position), while the sloped segment in between indicates a period of uniform motion.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-39',
    type: 'mcq',
    question: 'It is not physically possible for a position-time graph to show two different position values for the object at the exact same instant of time, because:',
    options: [
      'An object cannot occupy two different positions at the same time',
      'Time cannot have two different values',
      'Position-time graphs are always straight lines',
      'This situation is actually always possible'
    ],
    correctIndex: 0,
    explanation: 'Since a real object can occupy only one position at any given instant, a valid position-time graph must be single-valued at every time, i.e., pass a vertical line test.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-40',
    type: 'mcq',
    question: 'For an object moving with uniform (constant) velocity, the velocity-time graph is:',
    options: [
      'A straight line parallel to the time axis at a non-zero velocity value',
      'A straight line through the origin with a constant slope',
      'A parabola',
      'A vertical straight line'
    ],
    correctIndex: 0,
    explanation: 'Since velocity remains constant with time, the v-t graph is a horizontal straight line at the value of that constant velocity.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-41',
    type: 'mcq',
    question: 'For an object undergoing uniform (constant) acceleration, the velocity-time graph is:',
    options: [
      'A parabola',
      'A straight line with a constant, non-zero slope',
      'A horizontal straight line',
      'A curve with continuously changing slope'
    ],
    correctIndex: 1,
    explanation: 'For uniformly accelerated motion, velocity changes linearly with time (v = u + at), giving a straight-line v-t graph with constant slope equal to the acceleration.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-42',
    type: 'mcq',
    question: 'The slope of a velocity-time graph at any point represents the object\'s:',
    options: [
      'Displacement at that instant',
      'Instantaneous acceleration at that instant',
      'Average speed',
      'Position at that instant'
    ],
    correctIndex: 1,
    explanation: 'Slope of the v-t curve (dv/dt) gives the instantaneous acceleration of the object at that point.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-43',
    type: 'mcq',
    question: 'The area enclosed between a velocity-time graph and the time axis, over a given time interval, represents the object\'s:',
    options: [
      'Instantaneous velocity at the end of the interval',
      'Displacement (net change in position) over that interval',
      'Acceleration during that interval',
      'Rate of change of acceleration'
    ],
    correctIndex: 1,
    explanation: 'The area under the v-t graph, taking sign into account, gives the net displacement of the object over that time interval.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-44',
    type: 'mcq',
    question: 'If the velocity-time graph of an object lies entirely above the time axis and its area is calculated, this area gives:',
    options: [
      'Both displacement and path length, which are equal in this case since velocity doesn\'t change sign',
      'Only the path length, never the displacement',
      'Only the acceleration',
      'Neither displacement nor distance'
    ],
    correctIndex: 0,
    explanation: 'If velocity never becomes negative (object doesn\'t reverse direction), the area under the v-t graph gives both the displacement and the path length, since they are equal in this case.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-45',
    type: 'mcq',
    question: 'For an object under uniform retardation that eventually comes to rest, the velocity-time graph is a straight line with:',
    options: [
      'A positive slope only',
      'A negative slope, intersecting the time axis at the moment the object stops',
      'Zero slope throughout',
      'An increasing curve'
    ],
    correctIndex: 1,
    explanation: 'Since the velocity decreases steadily to zero under uniform retardation, the v-t graph is a straight line with negative slope, meeting the time axis when the object stops.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-46',
    type: 'mcq',
    question: 'A velocity-time graph in the shape of a triangle (starting from zero, rising to a peak, then returning to zero) generally represents:',
    options: [
      'Motion with uniform velocity throughout',
      'Motion that first uniformly accelerates and then uniformly decelerates back to rest',
      'An object always at rest',
      'An object with constant acceleration throughout, never decelerating'
    ],
    correctIndex: 1,
    explanation: 'A triangular v-t graph represents an object accelerating uniformly to a maximum speed and then decelerating uniformly back to rest, such as a train speeding up and then slowing down.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-47',
    type: 'mcq',
    question: 'For an object undergoing motion with uniform acceleration \'a\', starting with initial velocity \'u\', the velocity \'v\' after time \'t\' is given by:',
    options: [
      'v = u + at',
      'v = u − at',
      'v = ut + (1/2)at²',
      'v² = u² + 2at'
    ],
    correctIndex: 0,
    explanation: 'This is the first kinematic equation of motion for uniform acceleration: v = u + at.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-48',
    type: 'mcq',
    question: 'For uniformly accelerated motion, the displacement \'s\' after time \'t\', starting with initial velocity \'u\' and acceleration \'a\', is given by:',
    options: [
      's = ut + (1/2)at²',
      's = ut − (1/2)at²',
      's = u + at',
      's = (u + v)/2'
    ],
    correctIndex: 0,
    explanation: 'This is the second kinematic equation: s = ut + (1/2)at², derived by integrating velocity with respect to time.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-49',
    type: 'mcq',
    question: 'The third kinematic equation of motion, relating final velocity, initial velocity, acceleration and displacement (without explicit time), is:',
    options: [
      'v = u + at',
      'v² = u² + 2as',
      's = ut + (1/2)at²',
      's = vt − (1/2)at²'
    ],
    correctIndex: 1,
    explanation: 'This is the third kinematic equation, v² = u² + 2as, useful when time is not known or not required.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-50',
    type: 'mcq',
    question: 'The three standard kinematic equations of motion (v = u+at, s = ut+½at², v²=u²+2as) are valid only under the condition that:',
    options: [
      'Acceleration is variable',
      'Acceleration is uniform (constant) throughout the motion',
      'The object moves in two dimensions',
      'The object starts from rest'
    ],
    correctIndex: 1,
    explanation: 'These standard equations are derived assuming constant acceleration, and are not directly applicable when acceleration varies with time.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-51',
    type: 'mcq',
    question: 'The distance travelled by an object in the nth second of its motion (under uniform acceleration a, with initial velocity u) is given by the formula:',
    options: [
      's_n = u + a(2n−1)/2',
      's_n = ut + (1/2)at²',
      's_n = u + at',
      's_n = un + a'
    ],
    correctIndex: 0,
    explanation: 'The distance covered in the nth second of motion is given by s_n = u + (a/2)(2n − 1), obtained by subtracting the displacement up to (n-1) seconds from that up to n seconds.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-straight-line-52',
    type: 'mcq',
    question: 'An object starts from rest and moves with uniform acceleration a for time t. The displacement covered is proportional to:',
    options: [
      't',
      't²',
      't^(1/2)',
      '1/t'
    ],
    correctIndex: 1,
    explanation: 'Since s = ut + (1/2)at² and u = 0 here, s = (1/2)at², so displacement is proportional to the square of time.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-53',
    type: 'mcq',
    question: 'A car starting from rest accelerates uniformly and covers 100 m in 10 s. Its acceleration is:',
    options: [
      '1 m/s²',
      '2 m/s²',
      '5 m/s²',
      '10 m/s²'
    ],
    correctIndex: 1,
    explanation: 'Using s = ut + (1/2)at² with u=0: 100 = (1/2)(a)(10)², giving a = 200/100 = 2 m/s².',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-54',
    type: 'mcq',
    question: 'A body moving with an initial velocity of 20 m/s is uniformly retarded and comes to rest after travelling 100 m. Its retardation is:',
    options: [
      '1 m/s²',
      '2 m/s²',
      '4 m/s²',
      '0.5 m/s²'
    ],
    correctIndex: 1,
    explanation: 'Using v² = u² − 2as with v = 0: 0 = (20)² − 2a(100), giving a = 400/200 = 2 m/s².',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-55',
    type: 'mcq',
    question: 'A particle moves with initial velocity 5 m/s and uniform acceleration 2 m/s². Its velocity after 4 seconds is:',
    options: [
      '9 m/s',
      '10 m/s',
      '13 m/s',
      '8 m/s'
    ],
    correctIndex: 2,
    explanation: 'Using v = u + at = 5 + (2)(4) = 5 + 8 = 13 m/s.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-56',
    type: 'mcq',
    question: 'Using the equation s = ((u+v)/2) × t, which of the following interpretations is correct?',
    options: [
      'This equation is valid only for constant velocity motion, not for accelerated motion',
      'This equation gives displacement as average velocity multiplied by time, valid for uniformly accelerated motion since velocity increases linearly',
      'This equation applies only when acceleration is zero',
      'This equation is used to find acceleration directly'
    ],
    correctIndex: 1,
    explanation: 'For uniformly accelerated motion, velocity varies linearly with time, so the average velocity is simply (u+v)/2, and displacement equals this average velocity multiplied by time.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-straight-line-57',
    type: 'mcq',
    question: 'For an object undergoing non-uniform (variable) acceleration, the standard kinematic equations v=u+at, s=ut+½at², and v²=u²+2as:',
    options: [
      'Remain fully valid without any modification',
      'Are not directly applicable, and calculus-based methods (integration) must generally be used instead',
      'Are applicable only if the object is moving in a circle',
      'Can be applied by simply replacing \'a\' with the average acceleration in all cases'
    ],
    correctIndex: 1,
    explanation: 'Since these equations assume constant acceleration, for variable acceleration one must generally use calculus (integrating a = dv/dt and v = dx/dt) rather than the standard formulas directly.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-straight-line-58',
    type: 'mcq',
    question: 'For a body under uniform acceleration, if u=0 and the body covers a distance \'s\' in time \'t\', the distance covered in the next equal time interval \'t\' (i.e., from t to 2t) compared to the first interval is:',
    options: [
      'Equal to the first distance \'s\'',
      'Three times the first distance \'s\'',
      'Twice the first distance \'s\'',
      'Half of the first distance \'s\''
    ],
    correctIndex: 1,
    explanation: 'Since displacement ∝ t², the total distance in time 2t is 4s, so the distance in the second interval (from t to 2t) is 4s − s = 3s, three times the first interval\'s distance.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-straight-line-59',
    type: 'mcq',
    question: 'The relative velocity of object A with respect to object B is defined as:',
    options: [
      'v_A + v_B',
      'v_A − v_B, the vector difference of their velocities',
      'v_A × v_B',
      'The average of v_A and v_B'
    ],
    correctIndex: 1,
    explanation: 'Relative velocity of A with respect to B is given by v_AB = v_A − v_B (vector subtraction).',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-60',
    type: 'mcq',
    question: 'Two objects moving in the same direction along a straight line with velocities 20 m/s and 15 m/s have a relative velocity (of the faster with respect to the slower) of:',
    options: [
      '35 m/s',
      '5 m/s',
      '300 m/s',
      '20 m/s'
    ],
    correctIndex: 1,
    explanation: 'For objects moving in the same direction, relative velocity is the difference of their velocities: 20 − 15 = 5 m/s.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-61',
    type: 'mcq',
    question: 'Two objects moving in opposite directions along a straight line with speeds 10 m/s and 15 m/s have a relative velocity (magnitude) of approach equal to:',
    options: [
      '5 m/s',
      '25 m/s, the sum of their speeds',
      '150 m/s',
      '0 m/s'
    ],
    correctIndex: 1,
    explanation: 'When two objects move toward each other (opposite directions), their relative velocity of approach is the sum of their individual speeds: 10 + 15 = 25 m/s.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-62',
    type: 'mcq',
    question: 'If two objects move with exactly the same velocity in the same direction, their relative velocity with respect to each other is:',
    options: [
      'Equal to twice their common velocity',
      'Zero',
      'Equal to their common velocity',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'If both objects have identical velocity vectors, their relative velocity (v_A − v_B) is zero, meaning they appear stationary relative to one another.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-63',
    type: 'mcq',
    question: 'On a position-time graph, two straight lines representing two objects moving in the same direction that never intersect indicate that the objects:',
    options: [
      'Never move',
      'Never meet, since one is always ahead of the other',
      'Always have the same velocity',
      'Move with continuously increasing separation only'
    ],
    correctIndex: 1,
    explanation: 'If the x-t graphs of two objects moving in the same direction don\'t intersect, one object remains consistently ahead of the other, so they never meet.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-64',
    type: 'mcq',
    question: 'The point of intersection of the position-time graphs of two moving objects represents:',
    options: [
      'The instant when both objects have the same velocity',
      'The instant and position at which both objects meet (have the same position)',
      'The point of maximum separation between the objects',
      'The point where both objects are at rest'
    ],
    correctIndex: 1,
    explanation: 'Since the intersection point has the same x and t coordinates for both graphs, it represents the time and place at which the two objects are at the same position, i.e., they meet.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-65',
    type: 'mcq',
    question: 'For an object undergoing free fall near the Earth\'s surface (ignoring air resistance), the acceleration is:',
    options: [
      'Variable, increasing continuously with time',
      'Constant, approximately equal to 9.8 m/s², directed vertically downward',
      'Zero',
      'Dependent on the mass of the falling object'
    ],
    correctIndex: 1,
    explanation: 'Free fall under gravity (neglecting air resistance) has a constant acceleration g ≈ 9.8 m/s² directed downward, independent of the object\'s mass.',
    difficulty: 'easy'
  },
  {
    id: 'motion-in-a-straight-line-66',
    type: 'mcq',
    question: 'For an object thrown vertically upward, the time taken to reach the highest point is:',
    options: [
      'Always different from the time taken to fall back to the starting point',
      'Equal to the time taken to fall back to the same starting point (ignoring air resistance)',
      'Independent of the initial velocity',
      'Always exactly 1 second'
    ],
    correctIndex: 1,
    explanation: 'By symmetry of motion under constant gravitational acceleration (ignoring air resistance), the time of ascent equals the time of descent back to the launch point.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-67',
    type: 'mcq',
    question: 'At the highest point of its trajectory, an object thrown vertically upward has:',
    options: [
      'Zero velocity and zero acceleration',
      'Zero velocity, but non-zero acceleration equal to g, still acting downward',
      'Maximum velocity and zero acceleration',
      'Non-zero velocity and zero acceleration'
    ],
    correctIndex: 1,
    explanation: 'At the highest point, the instantaneous velocity is momentarily zero, but the acceleration due to gravity continues to act downward throughout the motion, including at that instant.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-68',
    type: 'mcq',
    question: 'An object is dropped from a height h and reaches the ground with a speed v. If it were instead thrown downward from the same height with some initial speed, the time taken to reach the ground compared to the first case would be:',
    options: [
      'The same in both cases',
      'Less than in the first case, since the object already has some downward speed',
      'More than in the first case',
      'Independent of gravity'
    ],
    correctIndex: 1,
    explanation: 'Since the object thrown downward already possesses initial downward velocity in addition to gravitational acceleration, it takes less time to cover the same height compared to being simply dropped from rest.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-69',
    type: 'mcq',
    question: 'An object dropped from rest from a height h reaches the ground with a velocity that is proportional to:',
    options: [
      'h',
      '√h',
      'h²',
      '1/h'
    ],
    correctIndex: 1,
    explanation: 'Using v² = u² + 2gh with u = 0: v = √(2gh), so v is proportional to the square root of the height.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-70',
    type: 'mcq',
    question: 'A ball is thrown vertically upward with speed u. Its speed on returning to the point of projection (ignoring air resistance) is:',
    options: [
      'Less than u',
      'Greater than u',
      'Exactly equal to u',
      'Zero'
    ],
    correctIndex: 2,
    explanation: 'By energy conservation (and symmetry of motion under constant gravitational deceleration/acceleration), the object returns to the same point with the same speed u it was launched with, ignoring air resistance.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-71',
    type: 'mcq',
    question: 'The stopping distance of a vehicle, when brakes apply a constant retardation, is related to its initial speed \'v\' by:',
    options: [
      'Stopping distance ∝ v',
      'Stopping distance ∝ v² (quadratic relationship)',
      'Stopping distance ∝ 1/v',
      'Stopping distance is independent of speed'
    ],
    correctIndex: 1,
    explanation: 'From v² = u² − 2as with v = 0: s = u²/2a, showing that stopping distance is proportional to the square of the initial speed, so doubling speed quadruples stopping distance.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-72',
    type: 'mcq',
    question: 'Reaction time of a person is defined as:',
    options: [
      'The time taken for a vehicle to stop completely after brakes are applied',
      'The time interval between the perception of a stimulus (signal) and the initiation of a response to it',
      'The time taken by an object to fall under gravity from a height of 1 m',
      'The time period of a simple pendulum'
    ],
    correctIndex: 1,
    explanation: 'Reaction time is the delay between when a person perceives a stimulus and when they physically respond to it, and is often measured experimentally using a falling scale/ruler.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-73',
    type: 'mcq',
    question: 'Assertion: The displacement of an object can be zero even if it has covered a non-zero distance.\nReason: Displacement depends only on the initial and final positions, not on the actual path taken.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both are false'
    ],
    correctIndex: 0,
    explanation: 'Since displacement only depends on initial and final positions (e.g., a round trip returning to the start gives zero displacement), the reason correctly explains why displacement can be zero while distance is non-zero.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-74',
    type: 'mcq',
    question: 'Assertion: The area under a velocity-time graph gives the displacement of the object.\nReason: The area under the graph represents the product of velocity and the corresponding small time interval, summed over the entire motion, which equals net change in position.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both are false'
    ],
    correctIndex: 0,
    explanation: 'The area under the v-t curve is mathematically equivalent to the integral of velocity with respect to time, which gives the net displacement, correctly explaining the assertion.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-straight-line-75',
    type: 'mcq',
    question: 'Assertion: At the highest point of a vertically thrown object\'s trajectory, the acceleration becomes zero.\nReason: Velocity is zero at the highest point.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and related',
      'Assertion is false; acceleration remains equal to g even though velocity momentarily becomes zero (reason is true but doesn\'t explain a false assertion)',
      'Both assertion and reason are false',
      'Assertion is true, but reason is false'
    ],
    correctIndex: 1,
    explanation: 'The assertion is incorrect: acceleration due to gravity continues to act (equal to g, downward) at the highest point, even though the velocity is momentarily zero there.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-straight-line-76',
    type: 'mcq',
    question: 'For an object undergoing uniformly accelerated motion, the graph of velocity (v) versus displacement (s), i.e., v² vs s, is:',
    options: [
      'A parabola',
      'A straight line, since v² = u² + 2as is linear in s',
      'A horizontal line',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'Since v² = u² + 2as is a linear relationship between v² and s (of the form y = mx + c), a plot of v² versus s gives a straight line with slope 2a.',
    difficulty: 'hard'
  },
  {
    id: 'motion-in-a-straight-line-77',
    type: 'mcq',
    question: 'A particle moving along a straight line covers equal distances in equal time intervals but in the opposite direction during alternate intervals; overall, its motion is best described as:',
    options: [
      'Uniform motion in one direction',
      'Oscillatory or to-and-fro motion',
      'Motion with constant positive acceleration only',
      'Free fall'
    ],
    correctIndex: 1,
    explanation: 'Repeated, equal-magnitude back-and-forth movement along a line is characteristic of oscillatory (to-and-fro) motion.',
    difficulty: 'medium'
  },
  {
    id: 'motion-in-a-straight-line-78',
    type: 'mcq',
    question: 'Which of the following statements correctly distinguishes velocity from speed?',
    options: [
      'Velocity and speed are always numerically identical for any motion',
      'Velocity is a vector requiring direction, while speed is a scalar giving only magnitude of the rate of motion',
      'Speed can be negative while velocity cannot',
      'Velocity has no relation to time, unlike speed'
    ],
    correctIndex: 1,
    explanation: 'The fundamental distinction is that velocity is a vector quantity (magnitude and direction), while speed is a scalar quantity, representing only the magnitude of the rate of motion.',
    difficulty: 'easy'
  },
];

export default questions;
