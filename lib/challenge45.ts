export interface ChallengeDay {
  day: number;
  physics: string;
  chemistry: string;
  biology: string;
}

// Curated high-yield, frequently-repeated-in-PYQs topics for Class 11 NEET revision —
// not exhaustive chapter coverage, deliberately selective given the 45-day window.
// Days 41-45 consolidate into full revision + previous-year-question practice.
export const CHALLENGE_45_DAYS: ChallengeDay[] = [
  { day: 1, physics: "Units & dimensions, dimensional analysis", chemistry: "Mole concept, stoichiometry", biology: "Living World: characteristics of life, taxonomy basics" },
  { day: 2, physics: "Errors in measurement, significant figures", chemistry: "Empirical & molecular formula, limiting reagent", biology: "Biological classification: five kingdom system, Monera & Protista" },
  { day: 3, physics: "Motion in a straight line: kinematics equations", chemistry: "Atomic models (Bohr model), quantum numbers", biology: "Biological classification: Fungi, Viruses & Lichens" },
  { day: 4, physics: "Relative velocity, motion graphs", chemistry: "Electronic configuration, Aufbau/Hund's rule", biology: "Plant Kingdom: algae classification" },
  { day: 5, physics: "Vectors: addition, resolution, dot & cross product", chemistry: "de Broglie wavelength, Heisenberg uncertainty", biology: "Plant Kingdom: Bryophytes & Pteridophytes" },
  { day: 6, physics: "Projectile motion", chemistry: "Periodic trends: atomic/ionic radius", biology: "Plant Kingdom: Gymnosperms & Angiosperms" },
  { day: 7, physics: "Circular motion (uniform & non-uniform)", chemistry: "Ionization enthalpy, electron gain enthalpy, electronegativity", biology: "Animal Kingdom: classification basis, non-chordate phyla" },
  { day: 8, physics: "Newton's laws of motion, free body diagrams", chemistry: "Ionic bonding, lattice energy", biology: "Animal Kingdom: Chordata classification" },
  { day: 9, physics: "Friction (static & kinetic)", chemistry: "Covalent bonding, VSEPR theory", biology: "Morphology of flowering plants: root, stem, leaf" },
  { day: 10, physics: "Circular dynamics: banking of roads, centripetal force", chemistry: "Hybridization (sp, sp2, sp3)", biology: "Morphology: inflorescence, flower, fruit" },
  { day: 11, physics: "Work-Energy theorem", chemistry: "Molecular orbital theory basics", biology: "Family characteristics: Solanaceae, Fabaceae, Liliaceae" },
  { day: 12, physics: "Conservation of energy, power", chemistry: "Hydrogen bonding, dipole moment", biology: "Anatomy of flowering plants: tissues" },
  { day: 13, physics: "Collisions (elastic & inelastic)", chemistry: "Gas laws: Boyle's, Charles's, ideal gas equation", biology: "Anatomy: secondary growth" },
  { day: 14, physics: "Centre of mass, system of particles", chemistry: "Kinetic theory of gases, real gases", biology: "Structural organisation: epithelial & connective tissue" },
  { day: 15, physics: "Rotational motion: torque, angular momentum", chemistry: "van der Waals equation, critical constants", biology: "Structural organisation: cockroach anatomy" },
  { day: 16, physics: "Moment of inertia, parallel & perpendicular axis theorems", chemistry: "Liquid state: vapour pressure, viscosity", biology: "Cell: cell theory, prokaryotic/eukaryotic cell" },
  { day: 17, physics: "Rolling motion", chemistry: "First law of thermodynamics, enthalpy", biology: "Cell organelles: mitochondria, chloroplast, ER, Golgi" },
  { day: 18, physics: "Newton's law of gravitation, gravitational field", chemistry: "Hess's law, enthalpy of reactions", biology: "Cell membrane structure, cell wall" },
  { day: 19, physics: "Kepler's laws, orbital & escape velocity", chemistry: "Entropy, Gibbs free energy, spontaneity", biology: "Biomolecules: carbohydrates, protein structure" },
  { day: 20, physics: "Satellites, gravitational potential energy", chemistry: "Equilibrium: law of mass action, Kc/Kp", biology: "Biomolecules: enzymes, nucleic acids" },
  { day: 21, physics: "Elasticity: stress-strain, Young's modulus", chemistry: "Le Chatelier's principle", biology: "Cell cycle & cell division: mitosis" },
  { day: 22, physics: "Fluid mechanics: pressure, Pascal's law, buoyancy", chemistry: "Ionic equilibrium: pH, buffer solutions", biology: "Cell division: meiosis" },
  { day: 23, physics: "Bernoulli's theorem, viscosity, surface tension", chemistry: "Common ion effect, solubility product", biology: "Transport in plants: diffusion, osmosis, plasmolysis" },
  { day: 24, physics: "Thermal expansion, calorimetry", chemistry: "Redox reactions: oxidation number, balancing", biology: "Transport in plants: ascent of sap, transpiration" },
  { day: 25, physics: "Heat transfer: conduction, convection, radiation", chemistry: "Electrode potential, disproportionation", biology: "Mineral nutrition: essential elements, deficiency symptoms" },
  { day: 26, physics: "Thermodynamics: laws, work done in processes", chemistry: "Hydrogen: isotopes, hydrides, hydrogen peroxide", biology: "Nitrogen metabolism & biological nitrogen fixation" },
  { day: 27, physics: "Specific heats, Carnot engine, efficiency", chemistry: "Water: hardness, heavy water", biology: "Photosynthesis: light reactions" },
  { day: 28, physics: "Kinetic theory of gases, degrees of freedom", chemistry: "s-Block: alkali metals, properties & trends", biology: "Photosynthesis: Calvin cycle, C4 & CAM pathway" },
  { day: 29, physics: "Maxwell's distribution, mean free path", chemistry: "s-Block: alkaline earth metals, anomalous behaviour", biology: "Respiration in plants: glycolysis, Krebs cycle" },
  { day: 30, physics: "Simple Harmonic Motion: equations, energy", chemistry: "p-Block: boron family, borax/boric acid", biology: "Respiration: electron transport chain, fermentation" },
  { day: 31, physics: "Oscillations: pendulum, springs, damped oscillations", chemistry: "p-Block: carbon family, allotropes of carbon", biology: "Plant growth & development: phytohormones" },
  { day: 32, physics: "Wave motion: types, wave equation", chemistry: "IUPAC nomenclature of organic compounds", biology: "Photoperiodism, vernalisation" },
  { day: 33, physics: "Superposition, standing waves", chemistry: "Isomerism: structural & stereoisomerism", biology: "Digestion & absorption: digestive system, enzymes" },
  { day: 34, physics: "Sound waves: beats, Doppler effect", chemistry: "Electronic effects: inductive, resonance, hyperconjugation", biology: "Breathing & exchange of gases: respiratory volumes" },
  { day: 35, physics: "Resonance in strings & pipes", chemistry: "Reaction mechanisms: substitution, addition, elimination", biology: "Body fluids & circulation: blood composition, cardiac cycle" },
  { day: 36, physics: "Relative motion in 2D", chemistry: "Hydrocarbons: alkanes preparation & properties", biology: "Excretory products: nephron structure, urine formation" },
  { day: 37, physics: "Angular SHM, torsional pendulum", chemistry: "Alkenes: preparation, addition reactions, Markovnikov's rule", biology: "Locomotion & movement: muscle contraction, joints" },
  { day: 38, physics: "Surface tension applications (capillary rise)", chemistry: "Alkynes: preparation, acidic character, reactions", biology: "Neural control: neuron structure, synapse, reflex arc" },
  { day: 39, physics: "Viscosity: Stokes' law, terminal velocity", chemistry: "Aromatic hydrocarbons: benzene structure, EAS reactions", biology: "Neural control: brain structure & function" },
  { day: 40, physics: "Rotational equilibrium, couple", chemistry: "Environmental chemistry: pollution, ozone depletion, greenhouse effect", biology: "Chemical coordination: endocrine glands & hormones" },
  { day: 41, physics: "Full revision: Mechanics (Motion, Laws of Motion, Work-Energy, Rotation)", chemistry: "Full revision: Physical Chemistry (Atomic Structure, Bonding, States of Matter)", biology: "Full revision: Cell Biology & Plant Physiology" },
  { day: 42, physics: "Full revision: Gravitation, Properties of Matter, Thermodynamics", chemistry: "Full revision: Thermodynamics, Equilibrium, Redox reactions", biology: "Full revision: Human Physiology (Digestion to Excretion)" },
  { day: 43, physics: "Full revision: Oscillations & Waves", chemistry: "Full revision: s-Block & p-Block elements", biology: "Full revision: Neural & Chemical Coordination" },
  { day: 44, physics: "Previous year NEET questions: Mechanics & Thermodynamics", chemistry: "Previous year NEET questions: Physical & Inorganic Chemistry", biology: "Previous year NEET questions: Plant & Human Physiology" },
  { day: 45, physics: "Final revision: formula sheet + weak topics", chemistry: "Final revision: reaction mechanisms + weak topics", biology: "Final revision: diagrams + weak topics" },
];

/** The 45-day window starts August 30, 2026 and runs 45 days forward from there. */
export function getChallengeDateRange(): { start: Date; end: Date } {
  const start = new Date(2026, 7, 30); // month 7 = August
  const end = new Date(start);
  end.setDate(end.getDate() + (CHALLENGE_45_DAYS.length - 1));
  return { start, end };
}

export function getChallengeDayDate(dayNumber: number): Date {
  const { start } = getChallengeDateRange();
  const d = new Date(start);
  d.setDate(d.getDate() + (dayNumber - 1));
  return d;
}

export function formatChallengeDate(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
