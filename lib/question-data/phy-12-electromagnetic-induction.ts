import type { Question } from "@/lib/questionBank";
// NEET Physics Question Bank
// Chapter: Electromagnetic Induction
// 80 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'electromagnetic-induction-1',
    type: 'mcq',
    question: 'Magnetic flux through a given surface is defined as a measure of the total number of magnetic field lines passing through that surface, mathematically expressed as the:',
    options: [
      'Dot product of the magnetic field vector and the area vector',
      'Cross product of the magnetic field vector and the area vector',
      'Simple sum of the magnetic field and the area',
      'Ratio of the magnetic field to the area'
    ],
    correctIndex: 0,
    explanation: 'Magnetic flux is defined as Φ = B·A = BA cosθ, the dot product of the magnetic field vector and the area vector.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-2',
    type: 'mcq',
    question: 'The magnetic flux through a surface is given by the formula Φ = BA cosθ, where θ represents the angle between the magnetic field vector and the:',
    options: [
      'Direction of current flow',
      'Plane of the surface itself',
      'Normal (perpendicular) to the surface',
      'Direction of induced EMF'
    ],
    correctIndex: 2,
    explanation: 'θ is specifically the angle between the magnetic field B and the normal vector to the surface.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-3',
    type: 'mcq',
    question: 'Magnetic flux is maximum through a surface when the magnetic field is oriented:',
    options: [
      'Parallel to the plane of the surface',
      "Perpendicular to the plane of the surface (i.e. along the surface's normal)",
      "At exactly 45° to the surface's normal",
      'In any direction; orientation makes no difference to flux'
    ],
    correctIndex: 1,
    explanation: 'Since Φ = BA cosθ, flux is maximum when θ = 0°, i.e. field perpendicular to the surface.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-4',
    type: 'mcq',
    question: 'Magnetic flux through a surface is exactly zero when the magnetic field is oriented:',
    options: [
      'Perpendicular to the plane of the surface',
      "At exactly 45° to the surface's normal",
      "At exactly 30° to the surface's normal",
      "Parallel to the plane of the surface, i.e. perpendicular to the surface's normal"
    ],
    correctIndex: 3,
    explanation: 'Since Φ = BA cosθ, flux is zero when θ = 90°, i.e. field parallel to the plane of the surface.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-5',
    type: 'mcq',
    question: 'The SI unit of magnetic flux is the:',
    options: [
      'Tesla (T)',
      'Weber (Wb)',
      'Henry (H)',
      'Ampere (A)'
    ],
    correctIndex: 1,
    explanation: 'The weber (Wb) is the standard SI unit of magnetic flux.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-6',
    type: 'mcq',
    question: 'The magnetic flux through a closed surface (e.g. a sphere) enclosing any distribution of magnets or currents is always:',
    options: [
      "Zero, according to Gauss's law for magnetism",
      'Maximum, regardless of what is enclosed',
      'Equal to the total enclosed pole strength',
      "Dependent entirely on the surface's specific shape"
    ],
    correctIndex: 0,
    explanation: "This is a direct consequence of Gauss's law for magnetism, since magnetic monopoles do not exist.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-7',
    type: 'mcq',
    question: 'Magnetic flux through a coil can be changed by varying the magnetic field strength, the area of the coil, or the:',
    options: [
      "Colour of the coil's wire",
      "Material the coil's wire is made of, with no other factor relevant",
      'Relative orientation (angle) between the coil and the magnetic field',
      'Total mass of the coil'
    ],
    correctIndex: 2,
    explanation: 'Since Φ = BA cosθ, flux can be changed by varying any of the three quantities: B, A, or θ.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-8',
    type: 'mcq',
    question: 'The concept of magnetic flux is fundamentally important in the study of electromagnetic induction because induced EMF is directly related to the:',
    options: [
      'Absolute value of the magnetic field alone, with no reference to flux',
      'Total area of the circuit alone, with no reference to flux',
      'Rate of change of magnetic flux through a circuit',
      'Static, unchanging value of the magnetic flux'
    ],
    correctIndex: 2,
    explanation: "Faraday's law states that induced EMF depends specifically on the rate at which magnetic flux changes, not its absolute value.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-9',
    type: 'mcq',
    question: "Faraday's law of electromagnetic induction states that whenever the magnetic flux linked with a circuit changes, an EMF is induced in the circuit, and the magnitude of this induced EMF is directly proportional to the:",
    options: [
      'Absolute value of the magnetic flux at any instant',
      'Resistance of the circuit',
      'Total area of the circuit alone',
      'Rate of change of the magnetic flux with respect to time'
    ],
    correctIndex: 3,
    explanation: "Faraday's law states induced EMF is proportional to the time rate of change of magnetic flux, dΦ/dt.",
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-10',
    type: 'mcq',
    question: "Faraday's law of electromagnetic induction is mathematically expressed as:",
    options: [
      'ε = −dΦ/dt',
      'ε = dΦ/dt, without any negative sign',
      'ε = Φ × t',
      'ε = Φ/t², with a squared time term'
    ],
    correctIndex: 0,
    explanation: "This is the standard mathematical statement of Faraday's law, with the negative sign incorporating Lenz's law.",
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-11',
    type: 'mcq',
    question: 'For a coil consisting of N turns, all experiencing the same changing magnetic flux, the total induced EMF is given by:',
    options: [
      'ε = −dΦ/dt, with no dependence on the number of turns',
      'ε = −N(dΦ/dt)',
      'ε = −dΦ/(Ndt)',
      'ε = −N² (dΦ/dt)'
    ],
    correctIndex: 1,
    explanation: 'For a multi-turn coil, each turn contributes to the total induced EMF, giving ε = −N(dΦ/dt).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-12',
    type: 'mcq',
    question: 'An EMF can be induced in a circuit by changing the magnetic flux through it in various ways, such as by changing the strength of the magnetic field, changing the area of the circuit, or by changing the relative:',
    options: [
      'Temperature of the circuit',
      "Colour of the circuit's components",
      'Resistance of the circuit alone, with no relation to flux',
      'Orientation (angle) between the circuit and the magnetic field'
    ],
    correctIndex: 3,
    explanation: 'Since Φ = BA cosθ, an induced EMF can result from any process that changes B, A, or θ over time.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-13',
    type: 'mcq',
    question: "If a bar magnet is moved rapidly towards a stationary coil of wire, the changing magnetic flux through the coil, according to Faraday's law, will:",
    options: [
      'Produce no induced EMF at all, since the coil itself is stationary',
      'Induce an EMF in the coil, causing a current to flow if the circuit is closed',
      "Only affect the magnet's own magnetic field, with no effect on the coil",
      "Cause the coil's resistance to change dramatically"
    ],
    correctIndex: 1,
    explanation: "Even though the coil is stationary, the magnet's motion changes the flux through it over time, inducing an EMF.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-14',
    type: 'mcq',
    question: 'If a magnet is held completely stationary inside (or near) a stationary coil, with no relative motion or change in field strength, the magnetic flux through the coil remains constant, and consequently:',
    options: [
      'No EMF is induced in the coil',
      'A very large EMF is induced in the coil',
      "The coil's resistance becomes infinite",
      'The magnet loses all of its magnetism instantly'
    ],
    correctIndex: 0,
    explanation: 'Since induced EMF depends on dΦ/dt, a constant, unchanging flux produces zero induced EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-15',
    type: 'mcq',
    question: 'The faster the magnetic flux through a circuit changes (i.e. a larger dΦ/dt), the ___ the magnitude of the induced EMF.',
    options: [
      'Smaller',
      'Larger',
      'Same, exactly, regardless of the rate of change',
      'Undefined'
    ],
    correctIndex: 1,
    explanation: 'Since ε = −N(dΦ/dt), a faster rate of flux change directly produces a larger magnitude of induced EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-16',
    type: 'mcq',
    question: "Faraday's law of electromagnetic induction is the fundamental physical principle underlying the operation of practical devices such as:",
    options: [
      'Electric generators and transformers',
      'Simple resistors, with no relevance to induction',
      'Batteries, based purely on chemical reactions',
      'Incandescent light bulbs, based purely on resistive heating'
    ],
    correctIndex: 0,
    explanation: "Electric generators and transformers both fundamentally rely on Faraday's law of electromagnetic induction.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-17',
    type: 'mcq',
    question: "Faraday's law of electromagnetic induction was established primarily through careful experimental observation, discovering that relative motion between a magnet and a coil (or a changing current in a nearby coil) could:",
    options: [
      'Have absolutely no observable electrical effect',
      "Only affect the magnet's own properties, never the coil's",
      'Induce a measurable electric current in a coil, without any direct physical contact or battery involved',
      'Only work if the coil and magnet were physically touching'
    ],
    correctIndex: 2,
    explanation: "Faraday's experiments demonstrated a changing magnetic flux could induce a measurable current in a nearby coil without physical contact.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-18',
    type: 'mcq',
    question: 'The induced EMF in a coil due to a changing magnetic flux exists as long as the flux continues to:',
    options: [
      'Remain absolutely constant',
      'Equal exactly zero at every instant',
      'Change with time',
      'Have no relationship to time at all'
    ],
    correctIndex: 2,
    explanation: 'Since induced EMF depends on dΦ/dt, it exists as long as the flux is changing with time.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-19',
    type: 'mcq',
    question: "Lenz's law, which determines the direction of an induced current or EMF, states that the induced current in a circuit always flows in a direction such that it:",
    options: [
      'Reinforces (adds to) the change in magnetic flux that produced it',
      'Has no definite, predictable direction at all',
      'Is completely independent of the change in flux that produced it',
      'Opposes the change in magnetic flux that produced it'
    ],
    correctIndex: 3,
    explanation: "Lenz's law states the induced current always flows in a direction that opposes the change in flux causing it.",
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-20',
    type: 'mcq',
    question: "Lenz's law is fundamentally a consequence of, and consistent with, the physical principle of conservation of:",
    options: [
      'Energy',
      'Mass alone, with no relation to energy',
      'Electric charge alone, with no relation to energy',
      'Angular momentum alone, with no relation to energy'
    ],
    correctIndex: 0,
    explanation: "Lenz's law ensures consistency with energy conservation; a reversed law would create a runaway, energy-generating process.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-21',
    type: 'mcq',
    question: "As a magnet is pushed towards a coil, inducing a current according to Lenz's law, the induced current flows in such a direction that the coil's induced magnetic field:",
    options: [
      'Opposes the approaching magnet, effectively repelling it',
      'Attracts the approaching magnet more strongly, pulling it in faster',
      'Has no magnetic effect on the magnet whatsoever',
      "Is oriented perpendicular to the magnet's own field, with no attraction or repulsion"
    ],
    correctIndex: 0,
    explanation: "By Lenz's law, the induced current opposes the increasing flux, creating an effective repulsive force on the approaching magnet.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-22',
    type: 'mcq',
    question: "As a magnet is pulled away from a coil, inducing a current according to Lenz's law, the induced current flows in such a direction that the coil's induced magnetic field:",
    options: [
      'Repels the receding magnet, pushing it away faster',
      'Has no magnetic effect on the magnet whatsoever',
      'Attracts the receding magnet, opposing its motion away from the coil',
      "Is oriented perpendicular to the magnet's own field, with no attraction or repulsion"
    ],
    correctIndex: 2,
    explanation: 'As the magnet moves away, the induced current opposes the decreasing flux, creating an effective attractive force.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-23',
    type: 'mcq',
    question: "Lenz's law can be understood as reflecting the tendency of an electromagnetically induced system to oppose any change imposed upon it, which is analogous, in a broader physical sense, to:",
    options: [
      "Newton's first law of motion (inertia), where a system resists a change in its state",
      "Newton's third law of motion exclusively, with no analogy to inertia",
      'The law of conservation of mass exclusively',
      'The ideal gas law exclusively'
    ],
    correctIndex: 0,
    explanation: "Lenz's law is sometimes described as 'electromagnetic inertia', echoing Newton's first law's general tendency of systems to resist change.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-24',
    type: 'mcq',
    question: "If the direction of induced current predicted by Lenz's law were somehow reversed (i.e. if induced currents instead reinforced the flux change producing them), this would lead to a physically impossible scenario in which:",
    options: [
      "The circuit's resistance would become exactly zero",
      'No current would ever flow in any circuit',
      'Magnetic fields would cease to exist entirely',
      'Energy could be continuously generated from nothing, violating the law of conservation of energy'
    ],
    correctIndex: 3,
    explanation: "A reversed Lenz's law would create a positive feedback loop generating energy from nothing, violating energy conservation.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-25',
    type: 'mcq',
    question: "According to Lenz's law, work must be done against the induced current's opposing effect in order to change the magnetic flux through a circuit (e.g. to move a magnet towards or away from a coil), and this work done is converted into:",
    options: [
      'Pure heat only, with no other form of energy involved',
      'Electrical energy (in the induced current), which may subsequently be dissipated as heat or used to do other work',
      'Gravitational potential energy exclusively',
      'Nuclear energy exclusively'
    ],
    correctIndex: 1,
    explanation: "The work done against Lenz's law opposition is what supplies the energy that appears as electrical energy in the induced current.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-26',
    type: 'mcq',
    question: "The negative sign in Faraday's law equation, ε = −N(dΦ/dt), mathematically incorporates:",
    options: [
      "Lenz's law, indicating the direction of the induced EMF opposes the change in flux",
      'A purely arbitrary convention with no physical significance whatsoever',
      'The number of turns in the coil, doubled',
      'The resistance of the circuit'
    ],
    correctIndex: 0,
    explanation: "The negative sign is included specifically to incorporate Lenz's law into Faraday's law formula.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-27',
    type: 'mcq',
    question: "Lenz's law can be practically applied to determine the direction of induced current in a straight conducting rod sliding along conducting rails within a magnetic field, by considering which direction of current flow would:",
    options: [
      'Increase the total flux through the circuit as rapidly as possible',
      "Have no relationship at all to the rod's motion",
      "Oppose the change in flux caused by the rod's motion (e.g. by producing a force opposing the rod's motion)",
      'Cause the rod to instantly stop moving, regardless of any force considerations'
    ],
    correctIndex: 2,
    explanation: "Applying Lenz's law means determining the current direction that creates a force opposing the rod's motion.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-28',
    type: 'mcq',
    question: "The direction of the induced current, as determined by Lenz's law, causes a retarding (opposing) force on any moving component (such as a sliding rod or approaching/receding magnet) responsible for the changing flux, which is a direct physical manifestation of:",
    options: [
      "Newton's law of gravitation, applied to electromagnetic systems",
      "Coulomb's law, applied to electromagnetic systems",
      'Energy conservation, since work must be done against this retarding force to sustain the motion and generate the induced current',
      'The photoelectric effect, applied to electromagnetic systems'
    ],
    correctIndex: 2,
    explanation: 'The opposing force on a moving inducing element is a direct manifestation of energy conservation, since work must be done against it.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-29',
    type: 'mcq',
    question: 'A motional EMF is induced across the ends of a straight conducting rod when the rod moves with some velocity:',
    options: [
      'Parallel to a uniform external magnetic field',
      'Anti-parallel to a uniform external magnetic field',
      'At exactly zero velocity, i.e. while stationary',
      'Perpendicular to a uniform external magnetic field (with the rod itself also perpendicular to both the field and its velocity)'
    ],
    correctIndex: 3,
    explanation: 'Motional EMF is induced when a conducting rod moves with a velocity component perpendicular to the magnetic field.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-30',
    type: 'mcq',
    question: 'The motional EMF induced across a straight conducting rod of length l, moving with velocity v perpendicular to a uniform magnetic field B, is given by the formula:',
    options: [
      'ε = Bvl',
      'ε = Bv/l',
      'ε = B/(vl)',
      'ε = Bv²l'
    ],
    correctIndex: 0,
    explanation: 'This is the standard formula for motional EMF, ε = Bvl.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-31',
    type: 'mcq',
    question: 'The motional EMF, ε = Bvl, arises physically because the free charge carriers within the moving conducting rod experience a:',
    options: [
      'Gravitational force, causing them to redistribute',
      'Magnetic (Lorentz) force, due to their motion through the magnetic field, which pushes them toward one end of the rod',
      'Purely electrostatic force, unrelated to any magnetic field',
      "Frictional force from the rod's own material"
    ],
    correctIndex: 1,
    explanation: 'Free charge carriers moving with the rod experience a magnetic (Lorentz) force, F = qv × B, which drives them toward one end.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-32',
    type: 'mcq',
    question: 'If the velocity of a rod generating a motional EMF (moving perpendicular to a magnetic field) is doubled, while the field strength and rod length remain unchanged, the induced EMF will:',
    options: [
      'Remain exactly unchanged',
      'Become one-quarter of its original value',
      'Become half of its original value',
      'Also double'
    ],
    correctIndex: 3,
    explanation: 'Since ε = Bvl is directly proportional to v, doubling velocity doubles the induced EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-33',
    type: 'mcq',
    question: 'A motional EMF can also be understood, alternatively, using the concept of the magnetic force on individual charge carriers in the rod, or equivalently, by calculating the rate at which the:',
    options: [
      "Rod's own resistance changes",
      "Magnetic flux through the effective circuit changes, as the rod (and hence the circuit's area) moves",
      "Rod's mass changes",
      "Rod's temperature changes"
    ],
    correctIndex: 1,
    explanation: "Motional EMF can be derived via the magnetic force on charge carriers or via Faraday's flux rule, since the rod's motion changes circuit area and flux.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-34',
    type: 'mcq',
    question: 'If a conducting rod moves through a magnetic field but its velocity is directed exactly parallel to the magnetic field (rather than perpendicular to it), the motional EMF induced across the rod is:',
    options: [
      'Maximum',
      'Zero',
      'Equal to Bvl, exactly as in the perpendicular case',
      'Undefined, with no meaningful answer possible'
    ],
    correctIndex: 1,
    explanation: 'If velocity is parallel to the field, there is no relevant component perpendicular to B, resulting in zero induced EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-35',
    type: 'mcq',
    question: 'Motional EMF is generated in a moving conductor, in contrast to the induced EMF in a stationary coil experiencing a changing external field, but both phenomena are, at a fundamental level, both explained by:',
    options: [
      "Faraday's law of electromagnetic induction, applied in different but consistent ways",
      'Completely separate, unrelated physical principles',
      "Only Lenz's law, with no reference to Faraday's law in either case",
      "Coulomb's law of electrostatics exclusively"
    ],
    correctIndex: 0,
    explanation: "Both motional EMF and EMF induced in a stationary coil are unified under and explained by Faraday's law.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-36',
    type: 'mcq',
    question: 'A practical device that operates based on the principle of motional EMF, using conducting rails and a sliding conducting rod within a magnetic field, is often used in physics as a conceptual model for understanding the basic operating principle behind:',
    options: [
      'Electric generators',
      'Batteries based on chemical reactions',
      'Simple electrical resistors',
      'Capacitors storing electrostatic charge'
    ],
    correctIndex: 0,
    explanation: 'The sliding-rod-on-rails setup is a classic simplified model for the basic principle behind electric generators.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-37',
    type: 'mcq',
    question: 'Eddy currents are induced electric currents that circulate in loops within the bulk (volume) of a conductor, arising whenever the conductor experiences a changing:',
    options: [
      'Electric field alone, with no relation to magnetic flux',
      'Temperature alone, with no relation to magnetic flux',
      'Magnetic flux',
      'Mechanical stress alone, with no relation to magnetic flux'
    ],
    correctIndex: 2,
    explanation: 'Eddy currents are induced currents circulating within a bulk conductor whenever it experiences a changing magnetic flux.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-38',
    type: 'mcq',
    question: 'Unlike the induced current in a simple wire loop, which flows in a well-defined path, eddy currents in a bulk conductor flow in:',
    options: [
      'A single, perfectly straight line',
      'No current at all; eddy currents are purely a theoretical concept',
      'Closed, swirling loops distributed throughout the volume of the conductor',
      'Only along the outermost surface of the conductor, never inside'
    ],
    correctIndex: 2,
    explanation: 'Because a bulk conductor has no single predefined path, induced currents form complex, closed, swirling loops throughout its volume.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-39',
    type: 'mcq',
    question: "Eddy currents in a conductor, according to Lenz's law, flow in a direction that opposes the change in flux producing them, which commonly results in a retarding (opposing) force on any relative motion causing the flux change — an effect exploited practically in:",
    options: [
      'Simple electrical resistors',
      'Ordinary light bulbs',
      'Basic capacitors',
      'Electromagnetic braking systems'
    ],
    correctIndex: 3,
    explanation: 'The retarding force produced by eddy currents is directly exploited in electromagnetic braking systems.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-40',
    type: 'mcq',
    question: 'Eddy currents flowing within the iron core of a transformer, resulting from the continuously changing magnetic flux due to alternating current, cause undesirable energy losses in the form of:',
    options: [
      'Heat, due to the resistive dissipation of the eddy currents (I²R losses) within the core',
      'Additional, useful electrical output power',
      "A permanent, irreversible loss of the core's magnetic properties",
      'No losses of any kind, since eddy currents are entirely beneficial'
    ],
    correctIndex: 0,
    explanation: 'Eddy currents circulating in the core dissipate energy as heat (I²R losses), an unwanted energy loss.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-41',
    type: 'mcq',
    question: 'To minimise the undesirable heat losses caused by eddy currents in devices such as transformer cores, the iron core is commonly constructed from thin, electrically insulated sheets, a technique known as:',
    options: [
      'Galvanising',
      'Laminating the core',
      'Annealing',
      'Alloying'
    ],
    correctIndex: 1,
    explanation: 'Laminating the core with thin, mutually insulated sheets restricts eddy current paths, significantly reducing losses.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-42',
    type: 'mcq',
    question: "Laminating a transformer's iron core, using thin, insulated sheets instead of a single solid block, works to reduce eddy current losses mainly by:",
    options: [
      'Completely eliminating the changing magnetic flux within the core',
      'Restricting the eddy currents to flow only within each thin, individual sheet, rather than throughout the entire bulk of the core',
      'Increasing the total electrical resistance of the core to an infinitely high value',
      'Converting the core material into a perfect insulator'
    ],
    correctIndex: 1,
    explanation: 'The insulating layers between laminations confine eddy currents to small loops within each thin sheet, reducing magnitude and loss.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-43',
    type: 'mcq',
    question: 'Eddy currents, despite being an unwanted energy loss in devices like transformers, have several beneficial, practical applications, including their use in:',
    options: [
      'Induction furnaces, used to melt metals through the heat generated by induced eddy currents',
      'Simple battery-powered flashlights',
      'Basic mechanical clocks with no electrical components',
      'Standard incandescent light bulbs'
    ],
    correctIndex: 0,
    explanation: 'Induction furnaces exploit eddy currents deliberately, using the heat they generate within a metal sample to melt it.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-44',
    type: 'mcq',
    question: 'Eddy currents are also practically used in certain types of analog speedometers (particularly in older vehicle designs), where a rotating magnet induces eddy currents in a nearby metal disc, producing a torque on the disc that is proportional to the:',
    options: [
      'Total mass of the vehicle',
      'Ambient air temperature',
      "Vehicle's total distance travelled",
      'Relative speed of rotation between the magnet and the disc'
    ],
    correctIndex: 3,
    explanation: 'The torque on the disc is proportional to the relative rotational speed between the magnet and disc, indicating vehicle speed.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-45',
    type: 'mcq',
    question: 'Self-inductance refers to the property of a coil or circuit by virtue of which it opposes any change in the current flowing through:',
    options: [
      'A completely separate, unrelated circuit',
      'Itself (the same coil/circuit)',
      'The external magnetic field alone, with no relation to current',
      "The Earth's own magnetic field"
    ],
    correctIndex: 1,
    explanation: 'Self-inductance is the property of a coil/circuit that causes it to oppose changes in its own current.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-46',
    type: 'mcq',
    question: 'The self-induced EMF in a coil, due to a changing current I flowing through it, is given by the formula:',
    options: [
      'ε = L × I, without any time derivative',
      'ε = −L(dI/dt)',
      'ε = L/(dI/dt)',
      'ε = −L × I², with a squared current term'
    ],
    correctIndex: 1,
    explanation: 'This is the standard formula for self-induced EMF, ε = −L(dI/dt).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-47',
    type: 'mcq',
    question: 'The SI unit of self-inductance (and mutual inductance) is the:',
    options: [
      'Henry (H)',
      'Weber (Wb)',
      'Tesla (T)',
      'Farad (F)'
    ],
    correctIndex: 0,
    explanation: 'The henry (H) is the standard SI unit of both self-inductance and mutual inductance.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-48',
    type: 'mcq',
    question: 'The self-inductance of a long solenoid, with N turns, cross-sectional area A, length l, and no core material (i.e. with a vacuum/air core), is given by the formula:',
    options: [
      'L = μ0NA/l',
      'L = μ0N²A',
      'L = μ0N²/(Al)',
      'L = μ0N²A/l'
    ],
    correctIndex: 3,
    explanation: 'This is the standard formula for the self-inductance of a long, air-core solenoid.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-49',
    type: 'mcq',
    question: 'According to the solenoid self-inductance formula, L = μ0N²A/l, self-inductance is directly proportional to the:',
    options: [
      'Length of the solenoid, l',
      'Square of the number of turns, N²',
      'Square root of the number of turns, N',
      'Inverse of the cross-sectional area, 1/A'
    ],
    correctIndex: 1,
    explanation: 'The self-inductance formula shows a squared dependence on the number of turns, L ∝ N².',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-50',
    type: 'mcq',
    question: 'If the number of turns in a solenoid is doubled, while all other physical parameters (length, area) remain unchanged, the self-inductance of the solenoid will become:',
    options: [
      'Four times its original value',
      'Twice its original value',
      'Half its original value',
      'Unchanged, since inductance is independent of the number of turns'
    ],
    correctIndex: 0,
    explanation: 'Since L ∝ N², doubling the number of turns increases self-inductance by a factor of 2² = 4.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-51',
    type: 'mcq',
    question: "Self-inductance is sometimes described, informally, as the 'electrical inertia' of a circuit, since a coil with self-inductance:",
    options: [
      'Has no effect whatsoever on the current flowing through it',
      'Opposes any sudden change (increase or decrease) in the current flowing through it, analogous to how mass opposes changes in velocity',
      'Immediately stops all current flow at all times',
      'Only affects direct current (DC), never alternating current (AC)'
    ],
    correctIndex: 1,
    explanation: 'Self-inductance resists sudden changes in current, much as mechanical inertia resists sudden changes in velocity.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-52',
    type: 'mcq',
    question: 'A coil (inductor) with a large value of self-inductance, when connected in a circuit with a rapidly changing current, will develop a:',
    options: [
      'Large self-induced EMF opposing the change',
      'Negligible self-induced EMF, regardless of the inductance value',
      'Self-induced EMF completely unrelated to the inductance value',
      'Self-induced EMF only if the current is constant (DC), never if it changes'
    ],
    correctIndex: 0,
    explanation: 'Since ε = −L(dI/dt), a larger inductance produces a correspondingly larger self-induced EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-53',
    type: 'mcq',
    question: "Self-inductance of a coil depends on factors including the number of turns, the coil's geometry (area, length), and the:",
    options: [
      'Colour of the wire used',
      'Current flowing through the coil at any given instant',
      'Ambient temperature exclusively, with no dependence on any other factor',
      'Presence and magnetic properties of any core material placed within the coil'
    ],
    correctIndex: 3,
    explanation: "Self-inductance depends significantly on any core material's magnetic properties, since a ferromagnetic core can dramatically increase it.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-54',
    type: 'mcq',
    question: "Inserting a ferromagnetic (e.g. iron) core into a solenoid, in place of an air/vacuum core, generally causes the solenoid's self-inductance to:",
    options: [
      'Decrease',
      'Increase significantly',
      'Remain exactly unchanged',
      'Become exactly zero'
    ],
    correctIndex: 1,
    explanation: "Since a ferromagnetic core has much higher permeability than air, it significantly increases the coil's self-inductance.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-55',
    type: 'mcq',
    question: 'Mutual inductance describes the phenomenon in which a changing current in one coil induces an EMF in a:',
    options: [
      'Completely different, physically isolated coil with no magnetic coupling at all',
      'Second, nearby coil, due to the magnetic flux linkage between the two coils',
      'The same coil carrying the changing current, with no reference to any second coil',
      'Purely hypothetical coil, with no real physical basis'
    ],
    correctIndex: 1,
    explanation: 'Mutual inductance describes the induction of an EMF in a second, magnetically coupled coil due to a changing current in a nearby first coil.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-56',
    type: 'mcq',
    question: 'The mutual inductance (M) between two coils quantifies the:',
    options: [
      'Self-inductance of the first coil alone',
      'Flux linkage in one coil produced per unit current flowing in the other, magnetically coupled coil',
      'Total resistance of both coils combined',
      'Physical distance between the two coils, expressed as a pure number'
    ],
    correctIndex: 1,
    explanation: 'Mutual inductance quantifies the flux linked with one coil per unit current in the other coil.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-57',
    type: 'mcq',
    question: 'The EMF induced in a secondary coil, due to a changing current in a nearby primary coil, with mutual inductance M between them, is given by the formula:',
    options: [
      'ε2 = −M(dI1/dt)',
      'ε2 = M × I1, without any time derivative',
      'ε2 = M/(dI1/dt)',
      'ε2 = −M(dI1/dt)², with a squared derivative term'
    ],
    correctIndex: 0,
    explanation: 'This is the standard formula for mutual induction, ε2 = −M(dI1/dt).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-58',
    type: 'mcq',
    question: 'Mutual inductance between two coils depends on factors such as the number of turns in each coil, their relative geometry/orientation, and the:',
    options: [
      "Colour of each coil's wire",
      'Ambient air pressure exclusively',
      'Total mass of each coil exclusively',
      'Distance and degree of magnetic coupling (overlap of magnetic flux) between the two coils'
    ],
    correctIndex: 3,
    explanation: 'Mutual inductance depends strongly on the degree of magnetic coupling between the two coils, related to their distance and geometry.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-59',
    type: 'mcq',
    question: 'Mutual inductance is the fundamental physical principle underlying the operation of a:',
    options: [
      'Simple resistor',
      'Transformer',
      'Basic capacitor',
      'Battery, based purely on chemical energy'
    ],
    correctIndex: 1,
    explanation: 'A transformer fundamentally relies on mutual inductance between its primary and secondary windings.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-60',
    type: 'mcq',
    question: 'For two coils with a high degree of magnetic coupling (e.g. wound tightly around a common iron core), the mutual inductance between them is generally:',
    options: [
      'Very small, close to zero',
      'Relatively large, compared to loosely coupled coils',
      'Completely independent of the degree of magnetic coupling',
      'Always exactly equal to the self-inductance of either individual coil'
    ],
    correctIndex: 1,
    explanation: 'Coils with strong magnetic coupling have a correspondingly larger mutual inductance than loosely coupled coils.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-61',
    type: 'mcq',
    question: "When a current is established in an inductor, energy is stored within the inductor's associated:",
    options: [
      'Magnetic field',
      'Electric field exclusively, with no magnetic field involved',
      'Gravitational field',
      'Thermal (heat) reservoir exclusively'
    ],
    correctIndex: 0,
    explanation: 'Unlike a capacitor, which stores energy in an electric field, an inductor stores energy in its magnetic field.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-62',
    type: 'mcq',
    question: 'The energy stored in an inductor of self-inductance L, carrying a current I, is given by the formula:',
    options: [
      'U = LI',
      'U = LI²',
      'U = (1/2)LI²',
      'U = (1/2)L²I'
    ],
    correctIndex: 2,
    explanation: 'This is the standard formula for magnetic energy stored in an inductor, U = (1/2)LI².',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-63',
    type: 'mcq',
    question: 'According to the formula U = (1/2)LI², if the current through an inductor is doubled while its inductance remains unchanged, the stored energy becomes:',
    options: [
      'Twice as large',
      'Half as large',
      'Four times as large',
      'Unchanged, since energy is independent of current'
    ],
    correctIndex: 2,
    explanation: 'Since U ∝ I², doubling the current increases stored energy by a factor of 2² = 4.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-64',
    type: 'mcq',
    question: 'When the current through an inductor is switched off (e.g. by opening a switch in the circuit), the previously stored magnetic energy is typically:',
    options: [
      'Instantly and completely destroyed, with no trace remaining',
      'Converted directly into gravitational potential energy',
      'Permanently stored within the inductor indefinitely, with no further change',
      'Released, often manifesting as a spark or transient voltage surge, as the stored energy dissipates'
    ],
    correctIndex: 3,
    explanation: 'Abrupt current interruption releases the stored magnetic energy, often as a brief high-voltage spark or transient surge.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-65',
    type: 'mcq',
    question: 'An AC generator (alternator) is a device that converts mechanical energy into electrical energy, based fundamentally on the principle of:',
    options: [
      'Chemical energy conversion, as in a battery',
      'Electromagnetic induction',
      'Nuclear fission',
      'The photoelectric effect'
    ],
    correctIndex: 1,
    explanation: 'An AC generator induces an alternating EMF via electromagnetic induction by rotating a coil within a magnetic field.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-66',
    type: 'mcq',
    question: 'In a basic AC generator, a coil of N turns and area A is made to rotate with a constant angular velocity ω within a uniform magnetic field of strength B, producing an induced EMF given by the formula:',
    options: [
      'ε = NBA, constant with time',
      'ε = NBAω sin(ωt)',
      'ε = NBA cos(ω)',
      'ε = NBAω², with a squared angular frequency term'
    ],
    correctIndex: 1,
    explanation: 'This is the standard formula for the instantaneous EMF produced by a basic AC generator.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-67',
    type: 'mcq',
    question: 'The maximum value (peak amplitude) of the EMF produced by a basic AC generator, ε0, as it appears in the formula ε = ε0 sin(ωt), is given by:',
    options: [
      'ε0 = NBAω',
      'ε0 = NBA',
      'ε0 = NBω',
      'ε0 = BAω'
    ],
    correctIndex: 0,
    explanation: 'Comparing to the general form ε = ε0 sin(ωt) shows the peak EMF is ε0 = NBAω.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-68',
    type: 'mcq',
    question: 'According to the AC generator EMF formula, increasing the angular velocity (rotational speed) at which the coil rotates, while keeping N, B, and A constant, will cause the peak EMF to:',
    options: [
      'Decrease',
      'Remain exactly unchanged',
      'Become exactly zero',
      'Increase'
    ],
    correctIndex: 3,
    explanation: 'Since ε0 = NBAω is directly proportional to ω, a faster rotational speed increases the peak EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-69',
    type: 'mcq',
    question: 'The EMF produced by a basic AC generator varies sinusoidally with time, meaning it periodically changes both its:',
    options: [
      'Frequency and wavelength alone, with no change in magnitude',
      'Magnitude and direction (polarity)',
      'Colour and intensity, terms not applicable to electrical EMF',
      'Mass and volume, terms not applicable to electrical EMF'
    ],
    correctIndex: 1,
    explanation: 'A sinusoidal EMF continuously changes in both magnitude and direction/polarity, defining alternating current.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-70',
    type: 'mcq',
    question: 'The EMF induced in the rotating coil of an AC generator is maximum at the instant when the plane of the coil is oriented:',
    options: [
      "Parallel to the magnetic field (i.e. the coil's normal is perpendicular to the field)",
      "Perpendicular to the magnetic field (i.e. the coil's normal is parallel to the field)",
      'At exactly 45° to the magnetic field',
      'At any orientation; the EMF is always the same regardless of orientation'
    ],
    correctIndex: 0,
    explanation: "Induced EMF is maximum when the coil's plane is parallel to the field, where the rate of change of flux is greatest.",
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-71',
    type: 'mcq',
    question: 'Conversely, the EMF induced in the rotating coil of an AC generator is exactly zero at the instant when the plane of the coil is oriented:',
    options: [
      'Parallel to the magnetic field',
      "Perpendicular to the magnetic field (i.e. the coil's normal is parallel to the field, and flux through the coil is momentarily maximum)",
      'At exactly 45° to the magnetic field',
      'At any orientation; the EMF is never exactly zero at any point'
    ],
    correctIndex: 1,
    explanation: 'Induced EMF is zero when flux is at its maximum (coil plane perpendicular to the field), since the rate of change is momentarily zero there.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-72',
    type: 'mcq',
    question: 'In practical, large-scale AC generators used in power plants, mechanical energy to rotate the coil (or equivalently, the magnet) is typically supplied by sources such as:',
    options: [
      'Simple hand cranking exclusively',
      'Steam turbines, water turbines (hydroelectric), or wind turbines',
      'Static, non-moving batteries exclusively',
      'Solar panels directly, with no mechanical rotation involved'
    ],
    correctIndex: 1,
    explanation: "Large-scale power generation relies on mechanical sources like steam, hydroelectric, or wind turbines to rotate the generator's rotor.",
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-73',
    type: 'mcq',
    question: 'A transformer is a device used to increase or decrease the voltage of an alternating current (AC) supply, operating fundamentally based on the principle of:',
    options: [
      'Mutual inductance between its primary and secondary windings',
      'Self-inductance of a single, isolated coil',
      'Simple resistive voltage division',
      'Chemical energy storage and release'
    ],
    correctIndex: 0,
    explanation: 'A transformer works via mutual inductance between its primary and secondary windings.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-74',
    type: 'mcq',
    question: 'A transformer that increases the voltage from its primary winding to its secondary winding (i.e. output voltage greater than input voltage) is called a:',
    options: [
      'Step-down transformer',
      'Isolation transformer, a term unrelated to voltage change direction',
      'Autotransformer, a term unrelated to voltage change direction',
      'Step-up transformer'
    ],
    correctIndex: 3,
    explanation: 'A step-up transformer is defined as one that increases (steps up) the voltage from primary to secondary.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-75',
    type: 'mcq',
    question: 'A transformer that decreases the voltage from its primary winding to its secondary winding (i.e. output voltage less than input voltage) is called a:',
    options: [
      'Step-up transformer',
      'Step-down transformer',
      'Isolation transformer, a term unrelated to voltage change direction',
      'Autotransformer, a term unrelated to voltage change direction'
    ],
    correctIndex: 1,
    explanation: 'A step-down transformer is defined as one that decreases (steps down) the voltage from primary to secondary.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-76',
    type: 'mcq',
    question: 'For an ideal transformer, the ratio of secondary voltage (Vs) to primary voltage (Vp) is directly related to the ratio of the number of turns in each winding by the equation:',
    options: [
      'Vs/Vp = Np/Ns, inverted from the turns ratio',
      'Vs/Vp = Ns/Np',
      'Vs × Vp = Ns × Np',
      'Vs − Vp = Ns − Np'
    ],
    correctIndex: 1,
    explanation: 'For an ideal transformer, the voltage ratio directly equals the turns ratio, Vs/Vp = Ns/Np.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-77',
    type: 'mcq',
    question: 'For an ideal transformer with no power losses, the input power (in the primary coil) exactly equals the output power (in the secondary coil), which implies that the ratio of secondary current (Is) to primary current (Ip) is:',
    options: [
      'The inverse of the turns ratio, i.e. Is/Ip = Np/Ns',
      'Exactly equal to the turns ratio, Is/Ip = Ns/Np',
      'Completely independent of the turns ratio',
      'Always exactly equal to 1, regardless of the turns ratio'
    ],
    correctIndex: 0,
    explanation: 'Since power is conserved and Vs/Vp = Ns/Np, it follows that Is/Ip must be the inverse ratio, Np/Ns.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-78',
    type: 'mcq',
    question: 'A step-up transformer, which increases voltage from primary to secondary, correspondingly causes the secondary current to be:',
    options: [
      'Equal to the primary current',
      'Unrelated to the primary current',
      'Increased, relative to the primary current',
      'Decreased, relative to the primary current'
    ],
    correctIndex: 3,
    explanation: 'Since power is conserved (VpIp = VsIs) and voltage increases, the secondary current must correspondingly decrease.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-79',
    type: 'mcq',
    question: 'In practice, real transformers are not perfectly ideal and experience some power losses due to factors such as resistive heating in the windings (I²R losses), eddy currents in the core, and:',
    options: [
      "Gravitational effects on the transformer's mass",
      'Hysteresis losses in the core material, as it undergoes repeated magnetization cycles',
      'Electrostatic charge buildup exclusively',
      'Radioactive decay of the core material'
    ],
    correctIndex: 1,
    explanation: 'Real transformers experience additional losses from magnetic hysteresis in the core, on top of resistive and eddy current losses.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-80',
    type: 'mcq',
    question: 'Transformers are essential components of modern electrical power distribution systems, since they allow electrical power to be transmitted over long distances at high voltage (and correspondingly low current, minimising resistive I²R losses in transmission lines), before being:',
    options: [
      'Converted entirely into heat before reaching consumers',
      'Left at high voltage all the way to individual household appliances, with no further transformation needed',
      'Converted into direct current (DC) before distribution, with no further transformer use',
      'Stepped down to safer, usable voltage levels for distribution to homes and businesses'
    ],
    correctIndex: 3,
    explanation: 'Step-up transformers raise voltage for efficient long-distance transmission, then step-down transformers lower it to safe consumer levels.',
    difficulty: 'medium'
  },
];
<<<<<<< HEAD
=======

>>>>>>> 4dacdff35abedda09eb296bff4429f335850b2a1
export default questions;