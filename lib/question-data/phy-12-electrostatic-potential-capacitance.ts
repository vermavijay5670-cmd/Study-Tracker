import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  // ==================== MCQ (70) ====================
  {
    id: 'potential-capacitance-1',
    type: 'mcq',
    question: 'Electric potential at a point is defined as',
    options: [
      'the force experienced by a unit positive charge at that point',
      'the work done in bringing a unit positive charge from infinity to that point, without any acceleration',
      'the total charge enclosed at that point',
      'the electric field at that point'
    ],
    correctIndex: 1,
    explanation: 'Electric potential V at a point is defined as the work done per unit positive test charge in bringing it from infinity to that point, quasi-statically (without acceleration) against the electric field.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-2',
    type: 'mcq',
    question: 'The SI unit of electric potential is',
    options: ['newton per coulomb', 'joule per coulomb (volt)', 'coulomb per joule', 'joule per metre'],
    correctIndex: 1,
    explanation: 'Electric potential is work done per unit charge, so its SI unit is joule per coulomb, given the special name volt (V).',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-3',
    type: 'mcq',
    question: 'Electric potential due to a point charge q at a distance r is given by',
    options: ['V = kq/r', 'V = kq/r²', 'V = kqr', 'V = kq²/r'],
    correctIndex: 0,
    explanation: 'The potential due to a point charge is V = kq/r = q/(4πε₀r), decreasing as 1/r with distance, unlike the field which decreases as 1/r².',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-4',
    type: 'mcq',
    question: 'Electric potential is a scalar quantity because',
    options: [
      'it has direction associated with it',
      'it is defined as work done per unit charge, and work (energy) is inherently a scalar quantity',
      'it always has a positive value',
      'it does not depend on the charge distribution'
    ],
    correctIndex: 1,
    explanation: 'Since potential is derived from work (which is a scalar, being W = F·d, a dot product), potential itself is a scalar quantity with only magnitude and sign, no direction.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-5',
    type: 'mcq',
    question: 'The electric potential due to a point charge decreases with distance r as',
    options: ['1/r', '1/r²', '1/r³', 'r'],
    correctIndex: 0,
    explanation: 'V = kq/r falls off as 1/r, decreasing more slowly with distance than the electric field (which falls off as 1/r²).',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-6',
    type: 'mcq',
    question: 'The relationship between electric field E and electric potential V along a given direction is',
    options: [
      'E = dV/dr (the field equals the rate of increase of potential)',
      'E = -dV/dr (the field equals the negative gradient of potential)',
      'E = V/r always',
      'E and V are completely unrelated quantities'
    ],
    correctIndex: 1,
    explanation: 'The electric field is the negative gradient of potential, E = -dV/dr; the field points in the direction of steepest decrease of potential.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-7',
    type: 'mcq',
    question: 'If the electric potential in a region is constant (same value everywhere), the electric field in that region must be',
    options: ['maximum', 'zero', 'equal to the potential value', 'infinite'],
    correctIndex: 1,
    explanation: 'Since E = -dV/dr, if V does not change with position (constant), its spatial derivative is zero, so the electric field must be zero throughout that region.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-8',
    type: 'mcq',
    question: 'An equipotential surface is defined as a surface',
    options: [
      'on which the electric field is the same everywhere',
      'on which the electric potential has the same value at every point',
      'that always passes through the source charge',
      'on which charge density is constant'
    ],
    correctIndex: 1,
    explanation: 'An equipotential surface is one on which the electric potential is constant at every point on the surface; moving along the surface involves no change in potential.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-9',
    type: 'mcq',
    question: 'The electric field at every point on an equipotential surface is always',
    options: [
      'tangential to the surface',
      'perpendicular (normal) to the surface',
      'zero',
      'directed at 45° to the surface'
    ],
    correctIndex: 1,
    explanation: 'Since no work is done in moving a charge along an equipotential surface (potential constant), the field must have no component along the surface — it is always perpendicular to the equipotential surface.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-10',
    type: 'mcq',
    question: 'The work done in moving a charge along an equipotential surface is',
    options: ['maximum', 'always zero', 'equal to qV', 'dependent on the path taken'],
    correctIndex: 1,
    explanation: 'Since potential is constant on an equipotential surface, there is no potential difference between any two points on it, so the work done (W = q ΔV) in moving a charge along the surface is always zero.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-11',
    type: 'mcq',
    question: 'Equipotential surfaces for an isolated point charge are',
    options: [
      'concentric spheres centred on the charge',
      'parallel planes',
      'concentric cylinders',
      'randomly shaped surfaces'
    ],
    correctIndex: 0,
    explanation: 'Since V = kq/r depends only on distance from the point charge, all points at the same distance r have the same potential, forming concentric spherical equipotential surfaces around the charge.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-12',
    type: 'mcq',
    question: 'Equipotential surfaces for a uniform electric field (as between two parallel charged plates) are',
    options: [
      'concentric spheres',
      'planes perpendicular to the field direction',
      'planes parallel to the field direction',
      'not well defined'
    ],
    correctIndex: 1,
    explanation: 'For a uniform field, equipotential surfaces are flat planes perpendicular to the field lines, since potential changes uniformly only along the field direction.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-13',
    type: 'mcq',
    question: 'The spacing between equipotential surfaces in a region indicates the strength of the electric field. Closely spaced equipotential surfaces indicate',
    options: ['a weak field', 'a strong field', 'zero field', 'no relationship to field strength'],
    correctIndex: 1,
    explanation: 'Since E = -dV/dr, for a given potential difference, closely spaced equipotential surfaces (small dr) correspond to a larger field magnitude, indicating a stronger field in that region.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-14',
    type: 'mcq',
    question: 'The potential energy of a system of two point charges q1 and q2 separated by distance r12 is given by',
    options: ['U = kq1q2/r12', 'U = kq1q2/r12²', 'U = kq1q2 r12', 'U = k(q1+q2)/r12'],
    correctIndex: 0,
    explanation: 'The electrostatic potential energy of a pair of point charges is U = kq1q2/r12, representing the work done in assembling the two charges from infinite separation to distance r12.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-15',
    type: 'mcq',
    question: 'For a system of two like charges (both positive or both negative), the potential energy of the system is',
    options: ['always negative', 'always positive', 'always zero', 'undefined'],
    correctIndex: 1,
    explanation: 'For two like charges, q1q2 is positive, making U = kq1q2/r positive, reflecting that positive work must be done (against repulsion) to bring them together from infinity.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-16',
    type: 'mcq',
    question: 'For a system of two unlike charges (one positive, one negative), the potential energy of the system is',
    options: ['always positive', 'always negative', 'always zero', 'equal to zero at all separations'],
    correctIndex: 1,
    explanation: 'For unlike charges, q1q2 is negative, making U = kq1q2/r negative, reflecting that the charges attract and energy is released (work is done by the field) as they come together from infinity.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-17',
    type: 'mcq',
    question: 'Potential energy of a system of charges is taken as zero when',
    options: [
      'all charges are brought very close together',
      'all charges are placed at infinite separation from each other',
      'all charges are equal in magnitude',
      'the net charge of the system is zero'
    ],
    correctIndex: 1,
    explanation: 'By convention, the reference (zero) configuration for potential energy of a system of charges is when all charges are infinitely far apart from each other, with no mutual interaction.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-18',
    type: 'mcq',
    question: 'The potential energy of a dipole of moment p placed in a uniform external field E, making angle θ with the field, is given by',
    options: ['U = pE sinθ', 'U = -pE cosθ', 'U = pE cosθ', 'U = -pE sinθ'],
    correctIndex: 1,
    explanation: 'The potential energy of a dipole in an external uniform field is U = -pE cosθ = -p·E, which is minimum (most negative/stable) when the dipole is aligned parallel to the field (θ = 0°).',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-19',
    type: 'mcq',
    question: 'A capacitor is a device used to',
    options: [
      'generate electric charge',
      'store electric charge and electrical energy in the form of an electric field',
      'convert electrical energy into mechanical energy',
      'measure electric current'
    ],
    correctIndex: 1,
    explanation: 'A capacitor is a system of two conductors separated by an insulator (dielectric or vacuum), designed to store electric charge and the associated electrical potential energy in the electric field between them.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-20',
    type: 'mcq',
    question: 'The capacitance of a capacitor is defined as',
    options: [
      'the charge stored per unit potential difference across it, C = Q/V',
      'the potential difference stored per unit charge',
      'the total charge stored, regardless of voltage',
      'the energy stored per unit time'
    ],
    correctIndex: 0,
    explanation: 'Capacitance is defined as C = Q/V, the ratio of the magnitude of charge on either conductor to the potential difference between them, and is a property of the capacitor\'s geometry (not of Q or V individually).',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-21',
    type: 'mcq',
    question: 'The SI unit of capacitance is',
    options: ['volt', 'coulomb', 'farad', 'joule'],
    correctIndex: 2,
    explanation: 'The SI unit of capacitance is the farad (F), defined as one coulomb per volt (1 F = 1 C/V).',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-22',
    type: 'mcq',
    question: 'One farad is an extremely large unit of capacitance for practical purposes, so capacitors in ordinary circuits are usually measured in',
    options: ['kilofarads or megafarads', 'microfarads (µF) or picofarads (pF)', 'farads directly, no smaller units are used', 'coulombs'],
    correctIndex: 1,
    explanation: 'Since 1 farad is a very large capacitance, most practical capacitors have values in the microfarad (10⁻⁶ F) or picofarad (10⁻¹² F) range.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-23',
    type: 'mcq',
    question: 'The capacitance of a parallel plate capacitor (with vacuum/air between the plates) depends on',
    options: [
      'the charge stored on the plates and the voltage applied',
      'the area of the plates and the separation between them, not on the charge or voltage',
      'only the material of the plates',
      'the current flowing through the circuit'
    ],
    correctIndex: 1,
    explanation: 'Capacitance C = ε₀A/d for a parallel plate capacitor is a purely geometric property, determined by plate area A and separation d; it is independent of the charge or voltage applied.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-24',
    type: 'mcq',
    question: 'If the plate separation of a parallel plate capacitor (vacuum between plates) is doubled while keeping the plate area constant, its capacitance becomes',
    options: ['double', 'half', 'four times', 'unchanged'],
    correctIndex: 1,
    explanation: 'Since C = ε₀A/d, capacitance is inversely proportional to separation d; doubling d halves the capacitance.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-25',
    type: 'mcq',
    question: 'If the plate area of a parallel plate capacitor is doubled while keeping separation constant, its capacitance becomes',
    options: ['double', 'half', 'four times', 'unchanged'],
    correctIndex: 0,
    explanation: 'Since C = ε₀A/d, capacitance is directly proportional to plate area A; doubling A doubles the capacitance.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-26',
    type: 'mcq',
    question: 'Introducing a dielectric slab of dielectric constant K completely between the plates of a capacitor (filling the entire gap) changes its capacitance to',
    options: ['C/K', 'KC (K times the original capacitance)', 'C (unchanged)', 'C - K'],
    correctIndex: 1,
    explanation: 'A dielectric with constant K, when completely filling the gap, increases capacitance by a factor of K: C\' = KC = Kε₀A/d.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-27',
    type: 'mcq',
    question: 'A dielectric increases the capacitance of a capacitor because',
    options: [
      'it increases the plate area',
      'it gets polarized in the external field, producing an internal field that opposes and reduces the net field, thereby reducing the potential difference for the same charge',
      'it conducts current through the capacitor',
      'it decreases the charge stored on the plates'
    ],
    correctIndex: 1,
    explanation: 'The dielectric becomes polarized, developing bound charges that create an internal field opposing the original field. This reduces the net field (and hence V) for the same Q, and since C = Q/V, a smaller V for the same Q means a larger C.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-28',
    type: 'mcq',
    question: 'The process by which the molecules of a dielectric develop a net dipole moment when placed in an external electric field is called',
    options: ['ionization', 'polarization', 'conduction', 'induction only'],
    correctIndex: 1,
    explanation: 'Polarization is the process by which an external field induces or aligns dipole moments in a dielectric material, creating bound surface charges.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-29',
    type: 'mcq',
    question: 'A "polar" dielectric molecule (such as water) is one that',
    options: [
      'has zero dipole moment even in the absence of an external field',
      'possesses a permanent dipole moment even without any external field, due to asymmetric charge distribution',
      'cannot be polarized at all',
      'conducts electricity like a metal'
    ],
    correctIndex: 1,
    explanation: 'Polar molecules (like water, HCl) possess a permanent (built-in) dipole moment due to the asymmetric arrangement of their positive and negative charge centres, even without any applied field.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-30',
    type: 'mcq',
    question: 'A "non-polar" dielectric molecule (such as O2 or CO2) is one in which',
    options: [
      'the centres of positive and negative charge coincide in the absence of an external field, giving zero permanent dipole moment',
      'a permanent dipole moment always exists',
      'it cannot become polarized under any circumstances',
      'it always has excess free electrons'
    ],
    correctIndex: 0,
    explanation: 'In non-polar molecules, the centres of positive and negative charge coincide by symmetry in the absence of a field, resulting in zero net dipole moment normally; an external field can still induce a small dipole moment.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-31',
    type: 'mcq',
    question: 'When capacitors are connected in series, the equivalent capacitance is given by',
    options: [
      '1/Ceq = 1/C1 + 1/C2 + ...',
      'Ceq = C1 + C2 + ...',
      'Ceq = C1 × C2 × ...',
      'Ceq = (C1 + C2)/2'
    ],
    correctIndex: 0,
    explanation: 'For capacitors in series, the reciprocals of individual capacitances add up: 1/Ceq = 1/C1 + 1/C2 + ..., analogous to resistors in parallel.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-32',
    type: 'mcq',
    question: 'When capacitors are connected in parallel, the equivalent capacitance is given by',
    options: [
      '1/Ceq = 1/C1 + 1/C2 + ...',
      'Ceq = C1 + C2 + ...',
      'Ceq = C1 × C2/(C1+C2)',
      'Ceq is always less than the smallest individual capacitance'
    ],
    correctIndex: 1,
    explanation: 'For capacitors in parallel, capacitances simply add: Ceq = C1 + C2 + ..., analogous to resistors in series.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-33',
    type: 'mcq',
    question: 'In a series combination of capacitors connected to a battery, which quantity is the same for each capacitor?',
    options: ['Potential difference across each', 'Charge stored on each', 'Capacitance of each', 'Energy stored in each'],
    correctIndex: 1,
    explanation: 'In series, the same charge Q flows onto and accumulates on each capacitor (since they are connected end-to-end forming a single path), while the voltage divides among them.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-34',
    type: 'mcq',
    question: 'In a parallel combination of capacitors connected to a battery, which quantity is the same across each capacitor?',
    options: ['Charge stored on each', 'Potential difference across each', 'Capacitance of each', 'None of these'],
    correctIndex: 1,
    explanation: 'In parallel, all capacitors are connected across the same two points (the battery terminals), so each experiences the same potential difference; charge divides according to each capacitor\'s capacitance.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-35',
    type: 'mcq',
    question: 'The equivalent capacitance of a series combination of capacitors is always',
    options: [
      'greater than the largest individual capacitance',
      'less than the smallest individual capacitance',
      'equal to the sum of the individual capacitances',
      'equal to the average of the capacitances'
    ],
    correctIndex: 1,
    explanation: 'Since 1/Ceq = sum of reciprocals, the equivalent series capacitance is always smaller than the smallest individual capacitor, analogous to resistors in parallel giving smaller equivalent resistance.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-36',
    type: 'mcq',
    question: 'The equivalent capacitance of a parallel combination of capacitors is always',
    options: [
      'less than the smallest individual capacitance',
      'greater than the largest individual capacitance',
      'equal to the smallest individual capacitance',
      'zero'
    ],
    correctIndex: 1,
    explanation: 'Since capacitances simply add in parallel, the equivalent capacitance is always greater than the largest individual capacitor in the combination.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-37',
    type: 'mcq',
    question: 'The energy stored in a charged capacitor of capacitance C, charge Q, and potential difference V can be expressed as',
    options: ['U = QV only', 'U = ½QV = ½CV² = Q²/2C', 'U = 2QV', 'U = Q/V'],
    correctIndex: 1,
    explanation: 'The energy stored in a capacitor is U = ½QV = ½CV² = Q²/(2C), all equivalent expressions derivable from the work done in charging the capacitor incrementally (the factor of ½ arises because voltage builds up gradually from 0 to V during charging).',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-38',
    type: 'mcq',
    question: 'The factor of ½ in the energy stored formula U = ½CV² arises because',
    options: [
      'half the charge is lost during charging',
      'the potential difference across the capacitor increases gradually from 0 to V as it charges, so the average potential during charging is V/2',
      'capacitors are only 50% efficient',
      'the formula is only an approximation with no real physical basis'
    ],
    correctIndex: 1,
    explanation: 'As the capacitor charges from 0 to Q, the potential across it rises linearly from 0 to V; the average potential during this process is V/2, and integrating the work done (V dq) over the charging process yields the factor of ½.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-39',
    type: 'mcq',
    question: 'The energy stored in a capacitor is considered to reside',
    options: [
      'entirely on the positive plate',
      'entirely on the negative plate',
      'in the electric field present in the region between the plates',
      'outside the capacitor, in the surrounding air'
    ],
    correctIndex: 2,
    explanation: 'In the field-based view of electrostatics, the energy of a charged capacitor is understood to be stored in the electric field occupying the space between the plates, not on the plates themselves.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-40',
    type: 'mcq',
    question: 'Energy density (energy per unit volume) of the electric field in a parallel plate capacitor is given by',
    options: ['u = ε₀E', 'u = ½ε₀E²', 'u = ε₀E²', 'u = E/ε₀'],
    correctIndex: 1,
    explanation: 'The energy density of an electric field is u = ½ε₀E², a general result showing energy stored per unit volume is proportional to the square of the field strength.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-41',
    type: 'mcq',
    question: 'A conductor is an equipotential body under electrostatic conditions. This means',
    options: [
      'the potential varies smoothly from the surface to the centre of the conductor',
      'the entire conductor, including its surface and interior, is at the same potential',
      'only the surface of the conductor has a well-defined potential',
      'the potential inside is always higher than at the surface'
    ],
    correctIndex: 1,
    explanation: 'Since the electric field inside a conductor is zero in electrostatic equilibrium, there is no potential gradient inside it, making the entire conductor (interior and surface) equipotential.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-42',
    type: 'mcq',
    question: 'When two conductors at different potentials are connected by a wire, charge flows from',
    options: [
      'the conductor with less charge to the one with more charge',
      'the conductor at higher potential to the one at lower potential, until both reach the same potential',
      'the smaller conductor to the larger conductor always',
      'the conductor at lower potential to the one at higher potential'
    ],
    correctIndex: 1,
    explanation: 'Charge (specifically, positive charge conventionally) flows from a region/conductor of higher potential to one of lower potential when connected, continuing until both reach a common equilibrium potential — not necessarily based on which had more charge initially.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-43',
    type: 'mcq',
    question: 'For a spherical conductor of radius R carrying charge Q, the potential at its surface is',
    options: ['kQ/R', 'kQ/R²', 'kQR', 'zero'],
    correctIndex: 0,
    explanation: 'Since a uniformly charged sphere behaves like a point charge for external and surface points, the potential at the surface is V = kQ/R, the same formula as for a point charge at that distance.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-44',
    type: 'mcq',
    question: 'The potential inside a uniformly charged conducting sphere (at any point within, including the centre) is',
    options: [
      'zero everywhere inside',
      'equal to the potential at the surface, kQ/R, and constant throughout the interior',
      'greater at the centre than at the surface',
      'undefined inside a conductor'
    ],
    correctIndex: 1,
    explanation: 'Since the field inside a conductor is zero, the potential does not change from the surface to the centre; the entire interior remains at the same potential as the surface, kQ/R.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-45',
    type: 'mcq',
    question: 'A capacitor of capacitance C1 is charged to potential V and then connected to an identical uncharged capacitor C2 = C1. After connection, assuming charge is shared and reaches a common potential, the common potential is',
    options: ['V', 'V/2', '2V', 'zero'],
    correctIndex: 1,
    explanation: 'By charge conservation, total charge C1V is redistributed equally between two identical capacitors (total capacitance 2C1), giving common potential Vcommon = C1V/(2C1) = V/2.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-46',
    type: 'mcq',
    question: 'When two capacitors charged to different potentials are connected together (positive plate to positive plate), some energy is lost during the redistribution of charge, mainly because',
    options: [
      'charge is destroyed during the process',
      'energy is dissipated as heat (and possibly radiation/sparking) due to the momentary flow of current through the connecting wires, which have some resistance',
      'the capacitors gain extra charge from nowhere',
      'the process violates conservation of energy'
    ],
    correctIndex: 1,
    explanation: 'Even though total charge is conserved, connecting capacitors at different potentials always results in some current flow through the (however small) resistance of the connecting wires, dissipating energy as heat — hence total energy after connection is generally less than before.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-47',
    type: 'mcq',
    question: 'The van de Graaff generator is a device used to',
    options: [
      'store very small amounts of charge',
      'build up very high electrostatic potentials (of the order of millions of volts) using a moving charged belt and the principle that charge given to a hollow conductor moves entirely to its outer surface',
      'measure electric current directly',
      'generate alternating current'
    ],
    correctIndex: 1,
    explanation: 'The van de Graaff generator accumulates charge on a large hollow spherical conductor using a continuously moving insulating belt, exploiting the fact that charge given to a conductor always moves to its outer surface, allowing extremely high potentials to build up.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-48',
    type: 'mcq',
    question: 'The principle behind charging a hollow conductor to a very high potential in a van de Graaff generator relies on the fact that',
    options: [
      'charge given to a hollow conductor resides on the outer surface, so more charge can always be added regardless of the potential already present',
      'the hollow conductor cannot hold any charge',
      'charge always moves to the innermost point of a hollow conductor',
      'potential decreases as more charge is added'
    ],
    correctIndex: 0,
    explanation: 'Since excess charge on a conductor always resides on its outer surface, charge can keep being transferred to and added onto the outer shell of the hollow sphere continuously, regardless of how much charge (and hence how high a potential) is already present.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-49',
    type: 'mcq',
    question: 'The electric potential due to an electric dipole at a point on its equatorial line (perpendicular bisector of the dipole axis) is',
    options: [
      'maximum',
      'zero, at every point on the equatorial line',
      'equal to the potential on the axial line',
      'negative always'
    ],
    correctIndex: 1,
    explanation: 'By symmetry, the potentials due to the +q and -q charges of the dipole are equal in magnitude but opposite in sign at any point equidistant from both (which is true for every point on the equatorial line), so they cancel exactly, giving zero potential.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-50',
    type: 'mcq',
    question: 'The electric potential due to a short dipole at a point on its axial line, at distance r (r much greater than dipole length), varies as',
    options: ['1/r', '1/r²', '1/r³', 'r'],
    correctIndex: 1,
    explanation: 'The potential due to a short dipole on the axial line is V = kp/r², decreasing as 1/r², faster than a single point charge\'s potential (1/r) but slower than the corresponding field (1/r³).',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-51',
    type: 'mcq',
    question: 'The general expression for the potential due to a short electric dipole at a point making angle θ with the dipole axis, at distance r, is',
    options: ['V = kp cosθ/r²', 'V = kp sinθ/r²', 'V = kp/r', 'V = kp cosθ/r'],
    correctIndex: 0,
    explanation: 'The general dipole potential is V = kp cosθ/r², which reduces to kp/r² on the axial line (θ = 0°) and to zero on the equatorial line (θ = 90°), consistent with both special cases.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-52',
    type: 'mcq',
    question: 'The work done in moving a charge q between two points in an electric field depends on',
    options: [
      'the exact path taken between the two points',
      'only the potential difference between the two points and the charge, not on the path taken',
      'the speed at which the charge is moved',
      'the shape of the region through which the charge moves'
    ],
    correctIndex: 1,
    explanation: 'Since electrostatic forces are conservative, the work done in moving a charge between two points, W = q(VA - VB), depends only on the potential difference between the initial and final points, not on the path.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-53',
    type: 'mcq',
    question: 'The fact that electric potential energy (and hence potential) does not depend on the path taken between two points is a direct consequence of',
    options: [
      'Ohm\'s law',
      'the electrostatic force being conservative in nature',
      'the presence of a magnetic field',
      'Kirchhoff\'s laws'
    ],
    correctIndex: 1,
    explanation: 'A defining property of conservative forces (like the electrostatic force) is that the work done is path-independent, depending only on the initial and final positions, which is precisely why potential is a well-defined, path-independent quantity.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-54',
    type: 'mcq',
    question: 'The work done in moving a charge along a closed loop in an electrostatic field is',
    options: ['always positive', 'always negative', 'always zero', 'dependent on the shape of the loop'],
    correctIndex: 2,
    explanation: 'Since the electrostatic field is conservative, the work done around any closed path is always zero — this is a fundamental property of conservative fields.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-55',
    type: 'mcq',
    question: 'The dielectric strength of an insulating material refers to',
    options: [
      'the maximum electric field the material can withstand before it breaks down and begins to conduct',
      'the dielectric constant K of the material',
      'the thickness of the material',
      'the capacitance of a capacitor made using this material'
    ],
    correctIndex: 0,
    explanation: 'Dielectric strength is the maximum electric field intensity a dielectric material can sustain without undergoing electrical breakdown (where it suddenly starts to conduct).',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-56',
    type: 'mcq',
    question: 'In a practical parallel plate capacitor, a thin dielectric sheet is often placed between the plates in addition to increasing capacitance, mainly to',
    options: [
      'decrease the capacitance',
      'provide mechanical support and increase the maximum voltage the capacitor can safely withstand (avoiding electrical breakdown)',
      'make the capacitor conduct current continuously',
      'eliminate the electric field between the plates'
    ],
    correctIndex: 1,
    explanation: 'Besides increasing capacitance, a dielectric provides mechanical spacing/support between the plates and increases the breakdown voltage of the capacitor, allowing it to be charged to higher potential differences safely.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-57',
    type: 'mcq',
    question: 'The capacitance of an isolated spherical conductor of radius R (in vacuum/air) is given by',
    options: ['C = 4πε₀R', 'C = ε₀R²', 'C = 4πε₀R²', 'C = ε₀/R'],
    correctIndex: 0,
    explanation: 'For an isolated sphere, using C = Q/V with V = kQ/R = Q/(4πε₀R), we get C = 4πε₀R, directly proportional to the radius of the sphere.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-58',
    type: 'mcq',
    question: 'As the radius of an isolated spherical conductor increases, its capacitance',
    options: ['decreases', 'increases proportionally with radius', 'remains constant', 'becomes zero'],
    correctIndex: 1,
    explanation: 'Since C = 4πε₀R for an isolated sphere, capacitance increases directly (linearly) with the radius of the sphere.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-59',
    type: 'mcq',
    question: 'If a battery remains connected to a parallel plate capacitor while a dielectric slab is inserted between the plates, which quantity remains constant?',
    options: ['Charge on the plates', 'Potential difference across the plates (held fixed by the battery)', 'Capacitance', 'Energy stored'],
    correctIndex: 1,
    explanation: 'With the battery connected, it maintains a fixed potential difference V across the capacitor. Inserting the dielectric increases capacitance, and since V is fixed, additional charge Q = CV flows onto the plates.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-60',
    type: 'mcq',
    question: 'If a capacitor is first charged and then disconnected from the battery, and a dielectric slab is then inserted between the plates, which quantity remains constant?',
    options: ['Potential difference', 'Charge on the plates (isolated system, charge cannot escape)', 'Capacitance', 'Electric field between the plates'],
    correctIndex: 1,
    explanation: 'Once disconnected, the capacitor is an isolated system, so its charge Q cannot change. Inserting the dielectric increases capacitance while charge remains fixed, causing the potential difference (V = Q/C) to decrease.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-61',
    type: 'mcq',
    question: 'When a dielectric is inserted into an isolated (disconnected from battery) charged capacitor, the energy stored in the capacitor',
    options: [
      'increases',
      'decreases, because the dielectric does positive work being pulled in and some energy is converted, with charge and hence U = Q²/2C decreasing as C increases',
      'remains exactly the same',
      'becomes infinite'
    ],
    correctIndex: 1,
    explanation: 'With Q fixed and C increasing (dielectric inserted), U = Q²/(2C) decreases; physically, this stored energy decrease corresponds to work done by the field pulling the dielectric into the capacitor.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-62',
    type: 'mcq',
    question: 'When a dielectric is inserted into a parallel plate capacitor that remains connected to a battery (constant V), the energy stored in the capacitor',
    options: [
      'decreases',
      'increases, since U = ½CV² and C increases while V remains constant (though the battery also does work in this process)',
      'remains exactly the same',
      'becomes zero'
    ],
    correctIndex: 1,
    explanation: 'With V held constant by the battery and C increasing due to the dielectric, U = ½CV² increases; the battery supplies the additional energy required (part of which is stored, part accounts for other effects like the mechanical work of insertion).',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-63',
    type: 'mcq',
    question: 'The concept of "potential" is preferred over "potential energy" as a fundamental quantity in electrostatics because',
    options: [
      'potential energy has no physical meaning',
      'potential is a property of the field/point in space alone (independent of the test charge used), making it more universally useful for characterizing the field',
      'potential energy cannot be calculated',
      'potential and potential energy are exactly the same quantity'
    ],
    correctIndex: 1,
    explanation: 'Potential energy U = qV depends on the specific test charge q, whereas potential V = U/q is a property characterizing the field/configuration itself, independent of which charge you place there, making it a more fundamental descriptive quantity.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-64',
    type: 'mcq',
    question: 'A parallel plate capacitor with air between the plates has capacitance C0. If the entire space between the plates is filled with a dielectric of dielectric constant K = 5, the new capacitance is',
    options: ['C0/5', '5C0', 'C0', '25C0'],
    correctIndex: 1,
    explanation: 'Filling the entire gap with a dielectric of constant K multiplies the capacitance by K, so the new capacitance is 5C0.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-65',
    type: 'mcq',
    question: 'The potential due to a group (system) of point charges at a given point is obtained by',
    options: [
      'vector addition of the individual potentials',
      'algebraic (scalar) addition of the individual potentials due to each charge, taking sign into account',
      'multiplying the individual potentials together',
      'considering only the nearest charge'
    ],
    correctIndex: 1,
    explanation: 'Since potential is a scalar, the total potential at a point due to multiple charges is the simple algebraic sum of the potentials due to each charge individually (with due regard to sign), following the superposition principle for scalars.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-66',
    type: 'mcq',
    question: 'A parallel combination of capacitors is generally used when we need to',
    options: [
      'reduce the overall capacitance below the smallest individual value',
      'increase the overall capacitance and increase the charge storage capacity at a given voltage',
      'increase the voltage rating without changing capacitance',
      'always minimize energy stored'
    ],
    correctIndex: 1,
    explanation: 'Parallel combination increases total capacitance (Ceq = sum) and hence the total charge that can be stored for a given applied voltage, making it useful when higher capacitance is required.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-67',
    type: 'mcq',
    question: 'A series combination of capacitors is generally used when we need to',
    options: [
      'reduce the overall capacitance and allow the combination to withstand a higher total voltage than any single capacitor alone',
      'increase the overall capacitance',
      'store more charge than any single capacitor',
      'eliminate the need for a battery'
    ],
    correctIndex: 0,
    explanation: 'Series combination reduces the equivalent capacitance but distributes the total applied voltage among the individual capacitors, allowing the combination to be used at a higher total voltage than any single capacitor could handle alone.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-68',
    type: 'mcq',
    question: 'The potential difference between two points A and B in an electric field, VA - VB, equals',
    options: [
      'the work done by an external agent in moving a unit positive charge from B to A, against the electric force (quasi-statically)',
      'the work done by an external agent in moving a unit positive charge from A to B',
      'the electric field strength between A and B',
      'always zero'
    ],
    correctIndex: 0,
    explanation: 'The potential difference VA - VB equals the work done per unit positive charge by an external agent in moving the charge from point B to point A against the field, quasi-statically (no change in kinetic energy).',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-69',
    type: 'mcq',
    question: 'A positive test charge, when released from rest in an electric field with no other forces acting, will naturally tend to move toward the region of',
    options: [
      'higher potential',
      'lower potential',
      'zero potential only',
      'it will not move at all'
    ],
    correctIndex: 1,
    explanation: 'A positive charge experiences a force in the direction of the field, which points from high to low potential; hence a positive test charge released from rest will accelerate toward lower potential regions.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-70',
    type: 'mcq',
    question: 'A negative test charge, when released from rest in an electric field with no other forces acting, will naturally tend to move toward the region of',
    options: [
      'lower potential',
      'higher potential',
      'zero potential only',
      'it will not move at all'
    ],
    correctIndex: 1,
    explanation: 'A negative charge experiences a force opposite to the field direction, i.e., toward higher potential regions, so it accelerates toward higher potential when released from rest.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'potential-capacitance-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Electric potential is a scalar quantity while electric field is a vector quantity.\nReason (R): Potential is derived from work done (a scalar), while field is derived from force (a vector), and this distinction carries through to their respective natures.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Potential (work per unit charge) is inherently scalar, while field (force per unit charge) is inherently a vector, and R correctly explains this distinction based on their underlying physical definitions.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field is always directed from higher potential to lower potential.\nReason (R): The electric field equals the negative gradient of potential, and the negative sign indicates the field points in the direction of decreasing potential.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'E = -dV/dr means the field points in the direction of steepest decrease of V, which is exactly the direction from higher to lower potential — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-73',
    type: 'assertion-reason',
    question: 'Assertion (A): No work is done in moving a charge along an equipotential surface.\nReason (R): The electric field is always perpendicular to an equipotential surface, so the component of force along the surface (in the direction of motion) is always zero.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the field has no component along the equipotential surface, no work is done moving a charge along it, consistent with W = q ΔV = 0 (as ΔV = 0 on an equipotential surface) — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-74',
    type: 'assertion-reason',
    question: 'Assertion (A): A capacitor with a larger plate area has a greater capacitance, all else being equal.\nReason (R): A larger plate area allows more charge to be stored for the same potential difference, since more field lines (and hence more charge) can terminate on a larger area for the same field strength.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Larger area allows for greater total charge at the same surface charge density (and hence same field/voltage), consistent with C = ε₀A/d, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Inserting a dielectric between the plates of an isolated (disconnected) charged capacitor decreases the potential difference across it.\nReason (R): The charge on an isolated capacitor remains constant, while capacitance increases upon inserting a dielectric, and since V = Q/C, an increase in C with constant Q results in a decrease in V.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With Q fixed (isolated system) and C increasing due to the dielectric, V = Q/C must decrease — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-76',
    type: 'assertion-reason',
    question: 'Assertion (A): The work done in moving a charge around any closed loop in an electrostatic field is always zero.\nReason (R): The electrostatic force is a conservative force.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A defining property of conservative forces is that the total work done around any closed path is zero, which directly explains why this holds true for the electrostatic force — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-77',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential at every point inside a charged conductor is the same as the potential at its surface.\nReason (R): The electric field inside a conductor in electrostatic equilibrium is zero, so there is no change in potential from the surface to any interior point.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since E = 0 inside the conductor, dV/dr = 0 as well, meaning potential remains constant throughout the interior, equal to the surface value — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-78',
    type: 'assertion-reason',
    question: 'Assertion (A): The energy stored in a capacitor is given by ½QV rather than simply QV.\nReason (R): During the charging process, the potential difference across the capacitor rises gradually from zero to its final value V, so the average potential experienced during charging is V/2, not V.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because voltage increases progressively during charging rather than being at its final value throughout, integrating V dq over the process yields ½QV — R correctly explains this factor.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Two equipotential surfaces can never intersect each other.\nReason (R): If two equipotential surfaces intersected, the point of intersection would have two different potential values simultaneously, which is not physically possible.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since potential at any point has a single well-defined value, intersecting equipotential surfaces (of different potential) would be contradictory, so they never intersect — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-80',
    type: 'assertion-reason',
    question: 'Assertion (A): A van de Graaff generator can build up extremely high potentials using a relatively small hollow sphere.\nReason (R): Charge given to a hollow conductor always resides entirely on its outer surface, allowing continuous addition of more charge (and thus increase in potential) regardless of how much charge is already present.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This property (charge always moving to the outer surface, regardless of existing charge) is exactly what allows continued charge accumulation, and hence building very high potentials, in a van de Graaff generator — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Capacitors are connected in series to withstand a higher total voltage than any individual capacitor could alone.\nReason (R): In series, the applied voltage is distributed among the individual capacitors, so each one experiences only a fraction of the total voltage.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the total applied voltage divides among series capacitors, each capacitor experiences a smaller share, allowing the combination to safely handle a total voltage exceeding any single capacitor\'s rating — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-82',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential due to an electric dipole falls off faster with distance than the potential due to a single point charge.\nReason (R): The dipole potential varies as 1/r², whereas a point charge\'s potential varies as 1/r, and 1/r² decreases faster than 1/r as r increases.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Comparing 1/r² (dipole) with 1/r (point charge), the dipole potential does fall off faster, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-83',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential energy of a system of two like point charges is always positive.\nReason (R): Positive work must be done by an external agent to bring two like (mutually repelling) charges together from infinite separation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since like charges repel, external positive work is required to bring them closer together, which is stored as positive potential energy — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-84',
    type: 'assertion-reason',
    question: 'Assertion (A): A dielectric slab placed in an external electric field develops surface charges without any actual transfer of free electrons through the material.\nReason (R): Dielectrics have no free (mobile) charge carriers; polarization arises from the slight displacement/alignment of bound charges within molecules, not from electron flow.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Unlike conductors, dielectrics lack free charge carriers; polarization results from the internal displacement or alignment of bound charges within each molecule, producing net surface charge without bulk electron transport — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-85',
    type: 'assertion-reason',
    question: 'Assertion (A): The capacitance of a capacitor does not depend on the charge stored on it or the potential difference applied.\nReason (R): Capacitance is fundamentally a geometric and material property of the capacitor (plate area, separation, and dielectric medium), and although C = Q/V, this ratio stays constant regardless of the actual Q or V used.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Just as resistance is a property of a conductor independent of current/voltage, capacitance is determined purely by geometry and dielectric medium; the ratio Q/V remains fixed even as Q and V individually change — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-86',
    type: 'assertion-reason',
    question: 'Assertion (A): When a capacitor connected to a battery has a dielectric inserted between its plates, additional charge flows onto the plates from the battery.\nReason (R): The battery maintains a constant potential difference across the capacitor, and since capacitance increases upon inserting the dielectric, more charge (Q = CV) is needed to maintain that same voltage at the higher capacitance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With V fixed by the battery and C increasing, Q = CV must increase, so the battery supplies additional charge to the plates — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential due to a point charge is defined to be zero at infinity.\nReason (R): This is simply a convenient reference choice, and the actual physically meaningful quantity is the potential difference between two points, not the absolute potential value itself.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Choosing V = 0 at infinity is an arbitrary but convenient convention; what is physically significant and measurable is the potential difference between two points, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Two large parallel conducting plates carrying equal and opposite charges produce a uniform electric field between them.\nReason (R): The field of each plate (treated as an infinite sheet) is uniform in the region near the plates, and superposing the fields of the two plates gives a uniform net field between them.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Superposing the uniform fields due to two oppositely charged plates (each acting approximately as an infinite sheet away from the edges) results in a stronger uniform field between them and cancellation outside — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The dielectric constant K of a conductor can be considered infinite in the context of capacitor theory.\nReason (R): A conductor allows free charges to move until the internal electric field becomes exactly zero, mimicking the limiting behaviour of a dielectric with infinite polarizability.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A conductor can formally be treated as a dielectric with K → ∞ because it completely cancels any internal field, analogous to (but more extreme than) how a dielectric partially cancels the field via polarization — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential energy of a dipole in an external uniform field is minimum when the dipole is anti-parallel to the field.\nReason (R): U = -pE cosθ is minimized (most negative) when θ = 180°.',
    options: [
      'A is false, but R is a true statement (though it does not correctly justify A, since the described condition is the opposite of the true minimum)',
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false'
    ],
    correctIndex: 0,
    explanation: 'A is false — U = -pE cosθ is minimized at θ = 0° (parallel), not θ = 180° (antiparallel), where U is instead maximum. R (as stated regarding θ=180° minimizing U) is also actually false since cos180° = -1 gives U = +pE, the maximum, not minimum; so the reasoning as stated doesn\'t hold, making A false and the given justification for it incorrect.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The electric field just above the surface of a charged conductor and the surface charge density there are related by E = σ/ε₀.\nReason (R): This relation follows from applying Gauss\'s law to a small pillbox Gaussian surface straddling the conductor\'s surface, and holds regardless of the overall shape of the conductor.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This relation is a general result for any conductor surface (not just simple shapes), derived using a small Gaussian pillbox straddling the surface, exploiting the zero field inside the conductor — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Two capacitors of different capacitances, when connected in series to a battery, store the same amount of charge.\nReason (R): In series, the same current flows momentarily through both capacitors during charging, resulting in equal charge accumulation on each.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'A is true — in series, charge is indeed the same on both. However, R gives a plausible-sounding but not the standard textbook explanation; the more fundamental reason is charge conservation on the internally-connected plates (the connected middle plates form an isolated system whose net charge must remain zero, forcing equal magnitude charge on each capacitor), not simply "same current flows" as a justification — so R, while related, is not considered the precise textbook explanation of A.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-93',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential at the centre of a uniformly charged ring is not zero, even though the electric field there is zero.\nReason (R): Potential is a scalar sum of contributions from all charge elements (all positive here, all at equal distance), so they add up constructively, while the field is a vector sum where symmetric contributions cancel out.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At the ring\'s centre, all charge elements are equidistant, so their (scalar) potential contributions all add up to a non-zero value, while their (vector) field contributions cancel by symmetry — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-94',
    type: 'assertion-reason',
    question: 'Assertion (A): A capacitor blocks direct current (DC) in steady state.\nReason (R): Once fully charged, no further current flows through a capacitor in a DC circuit because the potential difference across it equals the source EMF, leaving no driving potential difference for further charge flow.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'In steady state, a fully charged capacitor has no potential difference driving further charge flow (its voltage matches the source), so it effectively blocks continued DC current — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-95',
    type: 'assertion-reason',
    question: 'Assertion (A): The unit "farad" is a very large unit for typical laboratory capacitors.\nReason (R): A capacitor with a capacitance of 1 farad, made using a simple parallel plate design with ordinary plate separation, would require an impractically enormous plate area.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because C = ε₀A/d, achieving 1 farad with reasonable plate separations would require an extremely (impractically) large plate area, which is why practical capacitors use far smaller units like microfarads or picofarads — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-96',
    type: 'assertion-reason',
    question: 'Assertion (A): The energy density of an electric field is proportional to the square of the field strength.\nReason (R): The energy density formula u = ½ε₀E² is derived by considering the energy stored in the field of a parallel plate capacitor and dividing by the volume between the plates.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'u = ½ε₀E² does show energy density scales with E², and this expression is indeed derivable via the capacitor energy formula and volume Ad — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential energy of a charge in an external electric field is always taken relative to the potential energy at infinity, defined as zero.\nReason (R): This convention makes the potential energy directly equal to qV, where V is the electric potential (also referenced to zero at infinity) at that point.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Choosing the same zero reference (infinity) for both potential and potential energy makes the relation U = qV internally consistent, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Adding a capacitor in parallel to an existing capacitor always increases the total capacitance of the combination.\nReason (R): Adding a capacitor in series to an existing capacitor always increases the total capacitance of the combination.',
    options: [
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'Both A and R are true, and R is the correct explanation of A',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'A is true — parallel combination always increases total capacitance. R is false — adding a capacitor in series always decreases (not increases) the equivalent capacitance below the smallest individual value.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The electrostatic potential energy of a system of point charges is independent of the order in which the charges are assembled.\nReason (R): The total potential energy is simply the sum of the pairwise interaction energies between every pair of charges, which does not depend on the sequence of assembly.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since total potential energy is the sum over all unique pairs (kqiqj/rij), and this sum is independent of the order in which charges were brought together, R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Increasing the dielectric constant of the medium between capacitor plates increases the capacitor\'s ability to store charge at a given voltage.\nReason (R): A higher dielectric constant means the medium is more easily polarized, more effectively opposing the applied field and allowing more charge to accumulate on the plates for the same potential difference.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A higher K means stronger polarization response, more effectively reducing the net field for a given charge (or equivalently, allowing more charge for the same V), consistent with C = Kε₀A/d — R correctly explains A.',
    difficulty: 'hard'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'potential-capacitance-101',
    type: 'statement',
    question: 'Statement I: Electric potential due to a point charge decreases as 1/r with distance.\nStatement II: Electric field due to a point charge decreases as 1/r² with distance.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state the standard distance-dependence: V ∝ 1/r for potential, E ∝ 1/r² for field due to a point charge.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-102',
    type: 'statement',
    question: 'Statement I: The potential due to an electric dipole on its equatorial line is always zero.\nStatement II: The electric field due to an electric dipole on its equatorial line is always zero.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — the potential vanishes on the equatorial line by symmetry. Statement II is false — the field on the equatorial line is non-zero (it equals kp/r³, directed antiparallel to p), only the potential is zero there.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-103',
    type: 'statement',
    question: 'Statement I: Equipotential surfaces are always perpendicular to electric field lines.\nStatement II: Equipotential surfaces due to a point charge are concentric spherical shells.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard properties: field lines are always normal to equipotential surfaces, and for a point charge, equipotentials are concentric spheres.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-104',
    type: 'statement',
    question: 'Statement I: When a battery remains connected while a dielectric is inserted in a parallel plate capacitor, the potential difference remains constant.\nStatement II: When the capacitor is isolated (disconnected) before the dielectric is inserted, the charge on the plates remains constant.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — they describe the two standard scenarios in NCERT: battery connected (V constant, Q changes) versus isolated capacitor (Q constant, V changes).',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-105',
    type: 'statement',
    question: 'Statement I: Capacitors in series have the same charge on each capacitor.\nStatement II: Capacitors in parallel have the same potential difference across each capacitor.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and describe fundamental properties of series and parallel capacitor combinations, analogous to (though inverted from) series/parallel resistor behaviour.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-106',
    type: 'statement',
    question: 'Statement I: The energy stored in a charged capacitor is U = QV.\nStatement II: The energy stored in a charged capacitor is U = ½CV².',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the correct formula includes a factor of ½ (U = ½QV), not simply QV. Statement II is correct.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-107',
    type: 'statement',
    question: 'Statement I: A conductor is an equipotential body in electrostatic equilibrium.\nStatement II: The surface of a charged conductor is always an equipotential surface, but the interior may have varying potential.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — the entire conductor (interior and surface) is equipotential. Statement II is false in its second half — the interior potential equals the surface potential everywhere, not merely the surface.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-108',
    type: 'statement',
    question: 'Statement I: The capacitance of a parallel plate capacitor increases when the plate separation is decreased.\nStatement II: The capacitance of a parallel plate capacitor increases when a dielectric medium replaces the vacuum/air between the plates.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — capacitance C = Kε₀A/d increases as d decreases (Statement I) and as K increases with a dielectric (Statement II).',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-109',
    type: 'statement',
    question: 'Statement I: The potential energy of a system of charges is defined relative to a reference configuration where all charges are infinitely far apart.\nStatement II: The potential energy of a system of two unlike charges can be negative.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the standard reference for potential energy is charges at infinite separation, and unlike charges (attractive pair) indeed have negative mutual potential energy.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-110',
    type: 'statement',
    question: 'Statement I: Work done in moving a charge between two points in an electrostatic field depends on the path taken.\nStatement II: Work done in moving a charge along a closed loop in an electrostatic field is always zero.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — since the electrostatic force is conservative, work done depends only on initial and final points, not the path. Statement II is correct, following directly from the conservative nature of the field.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-111',
    type: 'statement',
    question: 'Statement I: Non-polar molecules have zero permanent dipole moment in the absence of an external field.\nStatement II: Polar molecules develop a dipole moment only when placed in an external electric field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — polar molecules already possess a permanent dipole moment even without any external field; the field merely tends to align these already-existing dipoles.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-112',
    type: 'statement',
    question: 'Statement I: A dielectric material reduces the net electric field inside it when placed in an external field.\nStatement II: This reduction occurs due to the field created by the induced/aligned bound charges within the dielectric, opposing the external field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the polarization-induced bound charges create an internal field that partially opposes the external field, reducing the net field inside the dielectric.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-113',
    type: 'statement',
    question: 'Statement I: The capacitance of an isolated spherical conductor increases with its radius.\nStatement II: The capacitance of an isolated spherical conductor is independent of the medium surrounding it.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (C = 4πε₀R, directly proportional to R). Statement II is false — capacitance does depend on the surrounding medium; a dielectric medium increases the effective capacitance (C = 4πε₀KR).',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-114',
    type: 'statement',
    question: 'Statement I: Electric potential can be positive, negative, or zero.\nStatement II: Electric potential energy of a system can only be positive.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — potential can be positive (near positive charges), negative (near negative charges), or zero. Statement II is false — potential energy can also be negative (for systems of unlike charges) or zero.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-115',
    type: 'statement',
    question: 'Statement I: When capacitors are connected in series, the equivalent capacitance is less than the smallest individual capacitance in the combination.\nStatement II: When resistors are connected in series, the equivalent resistance is less than the smallest individual resistance in the combination.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — series capacitance combination behaves like parallel resistance combination (smaller than the smallest). Statement II is false — series resistors give a larger, not smaller, equivalent resistance than any individual resistor.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-116',
    type: 'statement',
    question: 'Statement I: The energy density of an electric field depends only on the field strength at that point, not on the nature of the medium.\nStatement II: In a dielectric medium, the energy density formula is modified to include the dielectric constant K.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — in NCERT-level treatment, the formula u = ½ε₀E² is for vacuum; in a dielectric medium, the effective permittivity changes, so energy density does depend on the medium. Statement II correctly reflects this.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-117',
    type: 'statement',
    question: 'Statement I: The van de Graaff generator relies on the principle that charge given to a hollow conductor moves to its outer surface.\nStatement II: The van de Graaff generator can produce potentials of several million volts.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the van de Graaff generator as covered in NCERT — its operating principle and the extremely high potentials (millions of volts) it can achieve.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-118',
    type: 'statement',
    question: 'Statement I: Potential difference between two points is independent of the path taken to move a charge between them.\nStatement II: Potential difference between two points depends on the amount of charge being moved between them.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — potential difference is path-independent (conservative field). Statement II is false — potential difference VA - VB is a property of the field configuration between the two points, independent of the magnitude of charge used to probe it.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-119',
    type: 'statement',
    question: 'Statement I: In a parallel plate capacitor, the electric field between the plates is uniform (ignoring edge effects).\nStatement II: The potential varies linearly with distance from one plate to the other in a parallel plate capacitor.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — a uniform field (Statement I) directly implies a linear potential variation with distance (Statement II), since E = -dV/dr being constant means V changes linearly with position.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-120',
    type: 'statement',
    question: 'Statement I: The potential energy of a dipole in an external field is maximum when the dipole is perpendicular to the field.\nStatement II: The torque on a dipole in an external field is maximum when the dipole is perpendicular to the field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — potential energy U = -pE cosθ is maximum at θ=180° (antiparallel), not at θ=90°; at θ=90°, U = 0, which is neither the minimum nor the maximum. Statement II is correct — torque τ = pE sinθ is indeed maximum at θ = 90°.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-121',
    type: 'statement',
    question: 'Statement I: Capacitance of a capacitor can be increased by decreasing the separation between the plates.\nStatement II: Capacitance of a capacitor can be increased by using a dielectric with a higher dielectric constant.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard ways to increase capacitance: reducing d or increasing K, both directly following from C = Kε₀A/d.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-122',
    type: 'statement',
    question: 'Statement I: A conductor placed in an external electric field has induced charges only on its surface facing the field.\nStatement II: A conductor placed in an external electric field has induced charges on both the surface facing the field and the opposite surface.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — induced charges appear on both the near and far surfaces (opposite signs on each) to cancel the field inside the conductor. Statement II correctly describes this.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-123',
    type: 'statement',
    question: 'Statement I: The total electrostatic potential energy of a system of point charges is the sum of potential energies of all possible distinct pairs of charges.\nStatement II: For three point charges, this involves three distinct pairwise terms.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — total PE is the sum over all unique pairs, and for three charges there are exactly three such pairs (1-2, 2-3, 1-3), giving three terms.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-124',
    type: 'statement',
    question: 'Statement I: The relation V = kQ/r for a point charge is valid at all distances r, including r = 0.\nStatement II: The formula for potential due to a uniformly charged spherical shell is the same as that of a point charge only for points outside or on the shell.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the formula diverges (becomes undefined/infinite) at r = 0, so it is not valid there. Statement II is correct — inside the shell, the potential is instead constant (equal to the surface value), not following kQ/r.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-125',
    type: 'statement',
    question: 'Statement I: When two charged capacitors at different potentials are connected together, the total charge is conserved.\nStatement II: When two charged capacitors at different potentials are connected together, the total electrostatic energy is always conserved as well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — total charge is always conserved. Statement II is false — some energy is generally lost as heat (due to resistance in the connecting wires) during the redistribution, so total energy is usually NOT conserved (it decreases).',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-126',
    type: 'statement',
    question: 'Statement I: Equipotential surfaces are more closely spaced in regions of stronger electric field.\nStatement II: Equipotential surfaces can be curved or flat, depending on the charge distribution creating the field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — closer spacing indicates a stronger field (since E = -dV/dr), and the shape of equipotential surfaces (spherical, planar, or otherwise) depends entirely on the underlying charge distribution\'s geometry.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-127',
    type: 'statement',
    question: 'Statement I: The potential due to a system of charges at a point is calculated by simple algebraic addition of individual potentials.\nStatement II: The electric field due to a system of charges at a point is also calculated by simple algebraic addition of individual field magnitudes.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (scalar superposition for potential). Statement II is false — electric field requires vector addition (accounting for direction), not simple algebraic (scalar) addition of magnitudes.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-128',
    type: 'statement',
    question: 'Statement I: The capacitance of a parallel plate capacitor is independent of the nature of the plate material (as long as it is a good conductor).\nStatement II: The capacitance of a parallel plate capacitor depends strongly on the thickness of the metal plates used.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — as long as the plates are good conductors, capacitance C = ε₀A/d depends on geometry (area, separation) and the dielectric, not on which specific conducting material (copper, aluminium, etc.) is used. Statement II is false — plate thickness (as opposed to separation between plates) does not directly appear in the idealized capacitance formula.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-129',
    type: 'statement',
    question: 'Statement I: A charge moving perpendicular to an electric field experiences no work done by the field.\nStatement II: A charge moving parallel to an equipotential surface experiences no work done by the field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and are actually two ways of stating the same underlying fact, since motion perpendicular to the field is the same as motion along (parallel to) the equipotential surface — the force component along the direction of motion is zero in either description.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-130',
    type: 'statement',
    question: 'Statement I: Inserting a conducting slab (instead of a dielectric) between the plates of a capacitor, without touching either plate, increases the capacitance.\nStatement II: A conducting slab inside a capacitor effectively reduces the separation between the plates, as it has zero field (and hence contributes no potential drop) within itself.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — a conducting slab (acting like a dielectric with K → ∞ effectively for that thickness) contributes zero potential drop across its own thickness, effectively reducing the gap between the plates and thus increasing the capacitance.',
    difficulty: 'hard'
  },

  // ==================== HOW MANY / NUMBER-CORRECT (20) ====================
  {
    id: 'potential-capacitance-131',
    type: 'how-many',
    question: 'How many of the following statements about electric potential are correct?\n1. It is a scalar quantity.\n2. It decreases as 1/r for a point charge.\n3. It can take negative values.\n4. Its SI unit is the volt.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct standard properties of electric potential as defined in NCERT.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-132',
    type: 'how-many',
    question: 'How many of the following statements about equipotential surfaces are correct?\n1. They are always perpendicular to the electric field.\n2. Work done in moving a charge along an equipotential surface is zero.\n3. Two equipotential surfaces can intersect at points of zero field.\n4. For a uniform field, equipotential surfaces are flat planes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — equipotential surfaces never intersect, even at points of zero field, since each point has one unique potential value.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-133',
    type: 'how-many',
    question: 'How many of the following are correct formulas for capacitance?\n1. Parallel plate capacitor (vacuum): C = ε₀A/d\n2. Parallel plate capacitor with dielectric filling the gap: C = Kε₀A/d\n3. Isolated spherical conductor: C = 4πε₀R\n4. Series combination of two capacitors: Ceq = C1 + C2',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly stated formulas. Statement 4 is false — this is the formula for parallel combination, not series; series combination follows 1/Ceq = 1/C1 + 1/C2.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-134',
    type: 'how-many',
    question: 'How many of the following statements about capacitors in series are correct?\n1. Charge on each capacitor is the same.\n2. Voltage across each capacitor is the same.\n3. Equivalent capacitance is less than the smallest individual capacitance.\n4. Total voltage across the combination equals the sum of voltages across individual capacitors.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — in series, voltage divides among capacitors (inversely proportional to capacitance); it is not the same across each.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-135',
    type: 'how-many',
    question: 'How many of the following statements about capacitors in parallel are correct?\n1. Voltage across each capacitor is the same.\n2. Charge on each capacitor is the same.\n3. Equivalent capacitance is greater than the largest individual capacitance.\n4. Total charge stored equals the sum of charges on individual capacitors.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — in parallel, charge divides among capacitors (proportional to their capacitance); it is not the same on each unless capacitances happen to be equal.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-136',
    type: 'how-many',
    question: 'How many of the following statements about the energy stored in a capacitor are correct?\n1. U = ½QV\n2. U = ½CV²\n3. U = Q²/(2C)\n4. U = QV, without any factor of ½',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are all correct and equivalent expressions for capacitor energy. Statement 4 is false — the correct formula includes the factor of ½, not simply QV.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-137',
    type: 'how-many',
    question: 'How many of the following statements about dielectrics are correct?\n1. Polar molecules have a permanent dipole moment.\n2. Non-polar molecules acquire an induced dipole moment in an external field.\n3. A dielectric always increases the capacitance of a capacitor compared to vacuum.\n4. Dielectrics have free (mobile) charge carriers, similar to conductors.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — dielectrics lack free/mobile charge carriers; their polarization arises from bound charges, unlike conductors which have free electrons.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-138',
    type: 'how-many',
    question: 'How many of the following statements about conductors in electrostatics are correct?\n1. The electric field inside a conductor is zero in electrostatic equilibrium.\n2. The entire conductor (interior and surface) is at the same potential.\n3. Excess charge on a conductor resides entirely on its outer surface.\n4. The electric field just outside a conductor\'s surface is always tangential to the surface.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the field just outside a conductor is always normal (perpendicular) to the surface, not tangential.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-139',
    type: 'how-many',
    question: 'How many of the following statements about a van de Graaff generator are correct?\n1. It uses the principle that charge on a hollow conductor resides on the outer surface.\n2. It can generate potentials of the order of several million volts.\n3. It uses a moving belt to continuously transport charge to a large spherical shell.\n4. The maximum potential achievable is fundamentally limited to a few hundred volts.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the whole purpose and capability of the van de Graaff generator is to reach very high potentials (millions of volts), not be limited to a few hundred.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-140',
    type: 'how-many',
    question: 'How many of the following statements about the relationship between electric field and potential are correct?\n1. E = -dV/dr along a given direction.\n2. The field points in the direction of increasing potential.\n3. If potential is constant in a region, the field is zero there.\n4. The magnitude of field equals the potential gradient.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — the field points in the direction of decreasing (not increasing) potential, consistent with the negative sign in E = -dV/dr.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-141',
    type: 'how-many',
    question: 'How many of the following statements about potential energy of a system of two point charges are correct?\n1. It is positive for two charges of the same sign.\n2. It is negative for two charges of opposite sign.\n3. It is defined as zero when the charges are infinitely far apart.\n4. It is independent of the distance between the charges.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — potential energy U = kq1q2/r explicitly depends on the separation distance r between the charges.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-142',
    type: 'how-many',
    question: 'How many of the following statements about a dipole in an external electric field are correct?\n1. Potential energy is minimum when the dipole is parallel to the field.\n2. Potential energy is maximum when the dipole is antiparallel to the field.\n3. Torque is zero when the dipole is either parallel or antiparallel to the field.\n4. Torque is maximum when the dipole is antiparallel to the field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — torque is maximum when the dipole is perpendicular (θ = 90°) to the field, not antiparallel (where torque is actually zero).',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-143',
    type: 'how-many',
    question: 'How many of the following statements about inserting a dielectric into an isolated (disconnected from battery) charged capacitor are correct?\n1. Charge on the plates remains constant.\n2. Capacitance increases.\n3. Potential difference across the plates decreases.\n4. Energy stored in the capacitor increases.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — with Q constant, U = Q²/2C actually decreases as C increases, not increases.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-144',
    type: 'how-many',
    question: 'How many of the following statements about inserting a dielectric into a capacitor connected to a battery (constant V) are correct?\n1. Potential difference remains constant.\n2. Capacitance increases.\n3. Charge on the plates increases.\n4. Energy stored decreases.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — energy stored (U = ½CV²) actually increases as C increases while V is held constant, not decreases.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-145',
    type: 'how-many',
    question: 'How many of the following statements about the potential due to a system of charges are correct?\n1. Total potential is the algebraic (scalar) sum of individual potentials.\n2. Potential due to a dipole at a general point depends on the angle from the dipole axis.\n3. Potential due to a uniformly charged spherical shell is the same everywhere inside the shell.\n4. Potential due to a uniformly charged spherical shell increases as we move from the surface to the centre.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the potential remains constant (equal to the surface value) throughout the interior; it does not increase toward the centre.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-146',
    type: 'how-many',
    question: 'How many of the following statements about factors affecting capacitance of a parallel plate capacitor are correct?\n1. Increasing plate area increases capacitance.\n2. Increasing plate separation decreases capacitance.\n3. Introducing a dielectric medium (K > 1) increases capacitance.\n4. Increasing the charge stored increases capacitance.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — capacitance is a fixed geometric/material property, independent of the charge stored; changing Q does not change C.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-147',
    type: 'how-many',
    question: 'How many of the following statements about work done by an electrostatic field are correct?\n1. Work done in moving a charge along a closed path is always zero.\n2. Work done depends only on the initial and final positions, not the path.\n3. Work done in moving a charge along an equipotential surface is non-zero in general.\n4. Work done W = q(VA - VB) when moving charge q from A to B.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — work done along an equipotential surface is always zero, not non-zero, since there is no potential difference along it.',
    difficulty: 'medium'
  },
  {
    id: 'potential-capacitance-148',
    type: 'how-many',
    question: 'How many of the following are correct SI units?\n1. Electric potential — volt (V)\n2. Capacitance — farad (F)\n3. Potential energy — joule (J)\n4. Dipole moment — coulomb-metre (C·m)\n5. Electric field — newton per coulomb (N/C)',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 3,
    explanation: 'All five listed units are correctly stated: volt for potential, farad for capacitance, joule for energy, C·m for dipole moment, and N/C for field. All 5 are correct.',
    difficulty: 'easy'
  },
  {
    id: 'potential-capacitance-149',
    type: 'how-many',
    question: 'How many of the following statements about connecting two charged capacitors together are correct?\n1. Total charge is conserved during the process.\n2. Total energy is always conserved (no loss) during the process.\n3. Common potential reached is a charge-weighted average involving the individual capacitances.\n4. Some energy is generally lost as heat due to resistance in the connecting wires.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — total energy is generally NOT conserved; some is lost as heat during the redistribution process, contradicting statement 2 while confirming statement 4.',
    difficulty: 'hard'
  },
  {
    id: 'potential-capacitance-150',
    type: 'how-many',
    question: 'How many of the following statements about the electric potential energy of a dipole and related quantities are correct?\n1. U = -pE cosθ describes the potential energy of a dipole in a uniform field.\n2. The dipole is in stable equilibrium at θ = 0°.\n3. The dipole is in unstable equilibrium at θ = 90°.\n4. The work done in rotating a dipole from θ1 to θ2 in a uniform field equals the change in its potential energy.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — θ = 90° is not an equilibrium position at all (torque is non-zero, in fact maximum, there); unstable equilibrium actually occurs at θ = 180°, not θ = 90°.',
    difficulty: 'hard'
  }
];

export default questions;
