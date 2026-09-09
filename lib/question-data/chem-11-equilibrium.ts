import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Equilibrium
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'equilibrium-1',
    type: 'mcq',
    question: 'At the melting point of ice (0°C and 1 atm pressure), the solid-liquid equilibrium is characterised by the fact that the rate of melting is:',
    options: [
      'Always much greater than the rate of freezing',
      'Equal to the rate of freezing',
      'Always much less than the rate of freezing',
      'Completely unrelated to the rate of freezing'
    ],
    correctIndex: 1,
    explanation: 'At the melting point, a dynamic solid-liquid equilibrium exists in which the rate of melting exactly equals the rate of freezing, so no net change in the amounts of solid and liquid occurs.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-2',
    type: 'mcq',
    question: 'The liquid-vapour equilibrium established in a closed vessel, at a given temperature, results in a constant, characteristic pressure exerted by the vapour, called the:',
    options: [
      'Osmotic pressure',
      'Atmospheric pressure, exclusively',
      'Critical pressure, exclusively',
      'Vapour pressure (saturated vapour pressure)'
    ],
    correctIndex: 3,
    explanation: 'In a closed system, liquid-vapour equilibrium is characterised by a constant vapour pressure (the saturated vapour pressure), specific to the substance and temperature.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-3',
    type: 'mcq',
    question: 'The direct transition of a substance from the solid phase to the vapour phase, without passing through an intermediate liquid phase, is called:',
    options: [
      'Sublimation',
      'Fusion',
      'Vaporisation',
      'Condensation'
    ],
    correctIndex: 0,
    explanation: 'Sublimation refers to the direct transition of a substance from solid to vapour, bypassing the liquid phase, as seen in substances like camphor and naphthalene.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-4',
    type: 'mcq',
    question: 'According to Henry\'s Law, the solubility of a gas in a liquid is directly related to the pressure of the gas, and this solubility generally shows which trend with increasing temperature?',
    options: [
      'Solubility increases with increasing temperature, without exception',
      'Solubility remains completely unaffected by temperature',
      'Solubility decreases with increasing temperature',
      'Solubility becomes negative at higher temperatures'
    ],
    correctIndex: 2,
    explanation: 'For most gases, solubility in a liquid generally decreases as temperature increases, a phenomenon relevant to processes like the loss of dissolved CO2 from a warmed carbonated beverage.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-5',
    type: 'mcq',
    question: 'A key general characteristic of equilibrium in physical processes is that true equilibrium can only be established within a:',
    options: [
      'Completely open system, with unrestricted exchange of matter',
      'System at absolute zero temperature only',
      'Closed system, at a given, constant temperature',
      'System with no temperature specified at all'
    ],
    correctIndex: 2,
    explanation: 'Equilibrium in physical (and chemical) processes can only be meaningfully established within a closed system, maintained at a specific, constant temperature.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-6',
    type: 'mcq',
    question: 'At equilibrium in a physical process, although the system appears macroscopically unchanging, the equilibrium is fundamentally described as being:',
    options: [
      'Dynamic in nature, with opposing processes continuing to occur at equal rates',
      'Completely static, with no molecular activity occurring at all',
      'Only temporary, lasting mere seconds before disappearing entirely',
      'Entirely random, following no discernible pattern whatsoever'
    ],
    correctIndex: 0,
    explanation: 'Physical equilibrium is dynamic: opposing processes (such as melting and freezing, or evaporation and condensation) continue to occur simultaneously at equal rates, resulting in no observable net change.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-7',
    type: 'mcq',
    question: 'The Law of Mass Action, proposed by Guldberg and Waage, states that the rate of a chemical reaction is directly proportional to the product of the:',
    options: [
      'Atomic masses of the reacting elements only',
      'Active masses (concentrations) of the reacting substances',
      'Total volume of the reaction vessel only',
      'Boiling points of the reactants only'
    ],
    correctIndex: 1,
    explanation: 'The Law of Mass Action states that the rate of a chemical reaction is proportional to the product of the active masses (effective concentrations) of the reactants.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-8',
    type: 'mcq',
    question: 'For a general reversible reaction aA + bB ⇌ cC + dD, the equilibrium constant expression, Kc, is given by:',
    options: [
      'Kc = [A]^a[B]^b / [C]^c[D]^d',
      'Kc = [A]^a + [B]^b - [C]^c - [D]^d',
      'Kc = [C]^c + [D]^d',
      'Kc = [C]^c[D]^d / [A]^a[B]^b'
    ],
    correctIndex: 3,
    explanation: 'The equilibrium constant Kc is defined as the ratio of the product of equilibrium concentrations of products (each raised to their stoichiometric coefficient) to that of the reactants.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-9',
    type: 'mcq',
    question: 'The equilibrium constant (Kc) for a given reversible reaction is generally considered to be independent of the initial concentrations of reactants, and depends only on the:',
    options: [
      'Volume of the reaction vessel, at any fixed temperature',
      'Total pressure of the system, at any fixed temperature',
      'Presence or absence of a catalyst',
      'Temperature'
    ],
    correctIndex: 3,
    explanation: 'For a given reaction, the equilibrium constant Kc has a fixed value at a specified temperature, independent of the initial concentrations of the reactants used.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-10',
    type: 'mcq',
    question: 'Chemical equilibrium is established in a reversible reaction when the rate of the forward reaction becomes exactly equal to the rate of the:',
    options: [
      'Backward (reverse) reaction',
      'A completely unrelated, separate side reaction',
      'Zero, with the backward reaction stopping entirely',
      'The rate of any competing catalytic reaction'
    ],
    correctIndex: 0,
    explanation: 'Chemical equilibrium is characterised by the forward reaction rate becoming exactly equal to the backward (reverse) reaction rate.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-11',
    type: 'mcq',
    question: 'At chemical equilibrium, although the forward and backward reactions continue to occur, the measurable concentrations of reactants and products:',
    options: [
      'Continue to change indefinitely, without ever stabilising',
      'Immediately drop to zero for both reactants and products',
      'Remain constant over time',
      'Become completely unpredictable and randomly fluctuating'
    ],
    correctIndex: 2,
    explanation: 'At equilibrium, since the forward and reverse reaction rates are equal, the observable concentrations of all reactants and products remain constant over time, even though the reactions continue at the molecular level.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-12',
    type: 'mcq',
    question: 'In writing the equilibrium constant expression (Kc) for a reaction, concentrations are typically expressed in units of:',
    options: [
      'Grams per litre exclusively, with no reference to moles',
      'Moles per litre (mol/L)',
      'Only atmospheres of pressure, with no reference to concentration',
      'Only degrees Celsius'
    ],
    correctIndex: 1,
    explanation: 'In the equilibrium constant expression Kc, concentrations of reactants and products are conventionally expressed in units of moles per litre (mol/L).',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-13',
    type: 'mcq',
    question: 'The equilibrium constant of the reverse reaction, compared to that of the corresponding forward reaction, is related as the:',
    options: [
      'Exact same value as the forward reaction\'s equilibrium constant, with no difference',
      'Reciprocal (inverse) of the forward reaction\'s equilibrium constant',
      'The square of the forward reaction\'s equilibrium constant',
      'Always equal to zero, regardless of the forward reaction\'s value'
    ],
    correctIndex: 1,
    explanation: 'The equilibrium constant of a reverse reaction is mathematically the reciprocal of the equilibrium constant of the corresponding forward reaction.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-14',
    type: 'mcq',
    question: 'An equilibrium in which all the reactants and products exist in the same physical phase is described as a:',
    options: [
      'Heterogeneous equilibrium',
      'Ionic equilibrium exclusively',
      'Solubility equilibrium exclusively',
      'Homogeneous equilibrium'
    ],
    correctIndex: 3,
    explanation: 'A homogeneous equilibrium is one in which all reactants and products exist within the same physical phase, such as the gas-phase synthesis of ammonia.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-15',
    type: 'mcq',
    question: 'An equilibrium in which the reactants and products exist in more than one physical phase is described as a:',
    options: [
      'Heterogeneous equilibrium',
      'Homogeneous equilibrium',
      'Ionic equilibrium exclusively',
      'Buffer equilibrium exclusively'
    ],
    correctIndex: 0,
    explanation: 'A heterogeneous equilibrium involves reactants and products present in different physical phases, such as the thermal decomposition of solid calcium carbonate to give solid calcium oxide and gaseous carbon dioxide.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-16',
    type: 'mcq',
    question: 'In writing the equilibrium constant expression for a heterogeneous equilibrium, the concentrations (activities) of pure solids and pure liquids are generally:',
    options: [
      'Always included, exactly as for gaseous species',
      'Always squared, unlike gaseous species',
      'Omitted from the expression, since their concentration/activity is treated as constant',
      'Given a fixed numerical value of zero'
    ],
    correctIndex: 2,
    explanation: 'Since the concentration (activity) of pure solids and pure liquids is essentially constant, these terms are omitted from the equilibrium constant expression for a heterogeneous equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-17',
    type: 'mcq',
    question: 'For the heterogeneous equilibrium CaCO3(s) ⇌ CaO(s) + CO2(g), the equilibrium constant expression (Kc) would be most correctly written in terms of only the concentration of:',
    options: [
      'CaCO3 solid only',
      'CaO solid only',
      'CO2 gas',
      'Both CaCO3 and CaO solids, but not CO2 gas'
    ],
    correctIndex: 2,
    explanation: 'Since CaCO3 and CaO are pure solids (with essentially constant activity), the equilibrium constant expression for this reaction depends only on the concentration of the gaseous CO2.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-18',
    type: 'mcq',
    question: 'For a reaction involving gaseous species, the equilibrium constant expressed in terms of partial pressures (Kp) is related to the equilibrium constant expressed in terms of concentrations (Kc) by the equation:',
    options: [
      'Kp = Kc + Δn',
      'Kp = Kc(RT)^Δn',
      'Kp = Kc / Δn',
      'Kp = Kc × Δn, without any exponential term'
    ],
    correctIndex: 1,
    explanation: 'The relationship between Kp and Kc for gas-phase reactions is given by Kp = Kc(RT)^Δn, where Δn is the change in the number of moles of gas.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-19',
    type: 'mcq',
    question: 'In the Kp-Kc relationship, the term Δn specifically represents the:',
    options: [
      'Total number of moles of both reactants and products combined',
      'The exact value of the equilibrium constant itself',
      'The change in temperature during the reaction',
      'Difference between the moles of gaseous products and the moles of gaseous reactants'
    ],
    correctIndex: 3,
    explanation: 'Δn represents the difference in the number of moles of gaseous products minus the number of moles of gaseous reactants in the balanced chemical equation.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-20',
    type: 'mcq',
    question: 'For a gas-phase reaction in which the number of moles of gaseous products exactly equals the number of moles of gaseous reactants (Δn = 0), the relationship between Kp and Kc simplifies to:',
    options: [
      'Kp = Kc',
      'Kp = Kc × RT',
      'Kp = Kc / RT',
      'Kp = 0, regardless of Kc'
    ],
    correctIndex: 0,
    explanation: 'When Δn = 0 (no change in the number of moles of gas), the term (RT)^Δn equals 1, so Kp simplifies to exactly equal Kc.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-21',
    type: 'mcq',
    question: 'In the equation Kp = Kc(RT)^Δn, the symbol \'R\' represents the:',
    options: [
      'Reaction rate constant, exclusively',
      'Radius of the reaction vessel',
      'Relative atomic mass of the reactants',
      'Universal gas constant'
    ],
    correctIndex: 3,
    explanation: 'In the Kp-Kc relationship, \'R\' denotes the universal gas constant, and \'T\' represents the absolute temperature in Kelvin.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-22',
    type: 'mcq',
    question: 'When the equilibrium constant (Kc) of a reaction has a very large value (typically greater than 10^3), this generally indicates that the reaction:',
    options: [
      'Barely proceeds at all, with almost no product formed',
      'Proceeds nearly to completion, with mostly products present at equilibrium',
      'Is at exact equilibrium with equal amounts of reactants and products',
      'Cannot occur under any conditions'
    ],
    correctIndex: 1,
    explanation: 'A very large Kc value (greater than approximately 10^3) indicates that the reaction proceeds nearly to completion, with the equilibrium mixture consisting mostly of products.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-23',
    type: 'mcq',
    question: 'When the equilibrium constant (Kc) of a reaction has a very small value (typically less than 10^-3), this generally indicates that the reaction:',
    options: [
      'Proceeds hardly at all, with mostly unreacted reactants present at equilibrium',
      'Proceeds essentially to completion, with almost all reactants converted to product',
      'Occurs at exactly the same rate in both forward and backward directions, with no clear favoured side',
      'Is entirely independent of the concentrations of any species involved'
    ],
    correctIndex: 0,
    explanation: 'A very small Kc value (less than approximately 10^-3) indicates that the reaction proceeds only to a very limited extent, with the equilibrium mixture consisting predominantly of unreacted reactants.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-24',
    type: 'mcq',
    question: 'When the equilibrium constant (Kc) of a reaction has an intermediate value (typically between 10^-3 and 10^3), this generally indicates that, at equilibrium, both reactants and products are present in:',
    options: [
      'Completely negligible concentrations for both reactants and products',
      'Exactly, precisely identical concentrations for every species involved',
      'Appreciable (significant) concentrations',
      'Concentrations that cannot be measured by any experimental method'
    ],
    correctIndex: 2,
    explanation: 'An intermediate Kc value indicates that, at equilibrium, both reactants and products are present in appreciable, measurable concentrations, without the reaction being strongly skewed toward either side.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-25',
    type: 'mcq',
    question: 'The reaction quotient (Q) is calculated using an expression identical in form to the equilibrium constant expression, but using the concentrations of reactants and products at:',
    options: [
      'Only the exact moment the reaction reaches equilibrium',
      'Any given point during the reaction, not necessarily at equilibrium',
      'Only the very beginning of the reaction, before any product forms',
      'Absolute zero temperature exclusively'
    ],
    correctIndex: 1,
    explanation: 'The reaction quotient (Q) uses the same mathematical form as the equilibrium constant expression, but can be calculated using concentrations at any point during the reaction, not just at equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-26',
    type: 'mcq',
    question: 'If, at a given point during a reaction, the reaction quotient (Q) is found to be less than the equilibrium constant (Kc), the reaction will proceed in which direction to reach equilibrium?',
    options: [
      'The reverse direction, forming more reactants',
      'The reaction is already exactly at equilibrium, with no further change needed',
      'The reaction will stop entirely, with no further change of any kind',
      'The forward direction, forming more products'
    ],
    correctIndex: 3,
    explanation: 'When Q < Kc, the reaction proceeds in the forward direction, converting more reactants into products, until Q equals Kc and equilibrium is reached.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-27',
    type: 'mcq',
    question: 'If, at a given point during a reaction, the reaction quotient (Q) is found to be greater than the equilibrium constant (Kc), the reaction will proceed in which direction to reach equilibrium?',
    options: [
      'The forward direction, forming more products',
      'The reaction is already exactly at equilibrium, with no further change needed',
      'The reverse direction, forming more reactants',
      'The reaction will stop entirely, with no further change of any kind'
    ],
    correctIndex: 2,
    explanation: 'When Q > Kc, the reaction proceeds in the reverse direction, converting products back into reactants, until Q equals Kc and equilibrium is reached.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-28',
    type: 'mcq',
    question: 'Le Chatelier\'s Principle states that if a system at equilibrium is subjected to a change in concentration, pressure, volume, or temperature, the system will respond by shifting in a direction that:',
    options: [
      'Counteracts (partially offsets) the applied change, establishing a new equilibrium',
      'Amplifies and further increases the effect of the applied change',
      'Has absolutely no effect whatsoever on the system\'s equilibrium position',
      'Immediately destroys the equilibrium permanently, with no new equilibrium ever being established'
    ],
    correctIndex: 0,
    explanation: 'Le Chatelier\'s Principle states that a system at equilibrium responds to an external disturbance (change in concentration, pressure, volume, or temperature) by shifting in a direction that counteracts the applied change, thereby establishing a new equilibrium.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-29',
    type: 'mcq',
    question: 'According to Le Chatelier\'s Principle, adding more of a reactant to a system at equilibrium will generally cause the equilibrium to shift in the:',
    options: [
      'Forward direction, forming more product',
      'Reverse direction, forming more reactant',
      'No particular direction at all; the equilibrium remains completely unaffected',
      'A direction that depends only on the colour of the reactant added'
    ],
    correctIndex: 0,
    explanation: 'Adding more reactant to a system at equilibrium shifts the equilibrium forward, favouring the formation of additional product, in accordance with Le Chatelier\'s Principle.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-30',
    type: 'mcq',
    question: 'According to Le Chatelier\'s Principle, removing some of the product from a system at equilibrium will generally cause the equilibrium to shift in the:',
    options: [
      'Reverse direction, consuming even more of the remaining product',
      'No particular direction at all',
      'Forward direction, forming more product to partially replace what was removed',
      'A direction that depends only on the temperature of the surroundings'
    ],
    correctIndex: 2,
    explanation: 'Removing product from an equilibrium system shifts the reaction forward, as the system attempts to replace some of the removed product, in accordance with Le Chatelier\'s Principle.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-31',
    type: 'mcq',
    question: 'For a gas-phase equilibrium reaction, increasing the total pressure (by decreasing the volume) generally shifts the equilibrium toward the side with:',
    options: [
      'A greater number of moles of gas',
      'Exactly equal moles of gas on both sides, regardless of the actual stoichiometry',
      'No relationship whatsoever to the number of gas moles',
      'Fewer moles of gas'
    ],
    correctIndex: 3,
    explanation: 'Increasing pressure (by decreasing volume) shifts a gas-phase equilibrium toward the side with fewer moles of gas, as this partially relieves the increased pressure.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-32',
    type: 'mcq',
    question: 'For a gas-phase equilibrium reaction, decreasing the total pressure (by increasing the volume) generally shifts the equilibrium toward the side with:',
    options: [
      'Fewer moles of gas',
      'A greater number of moles of gas',
      'Exactly equal moles of gas on both sides, regardless of the actual stoichiometry',
      'No relationship whatsoever to the number of gas moles'
    ],
    correctIndex: 1,
    explanation: 'Decreasing pressure (by increasing volume) shifts a gas-phase equilibrium toward the side with a greater number of moles of gas, helping to counteract the decreased pressure.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-33',
    type: 'mcq',
    question: 'For an exothermic reaction at equilibrium, increasing the temperature will generally shift the equilibrium in the:',
    options: [
      'Forward direction, favouring the products, since the forward reaction absorbs heat',
      'No particular direction at all, since exothermic reactions are unaffected by temperature',
      'A direction that depends solely on the pressure, with no relation to temperature',
      'Reverse direction, favouring the reactants, since the reverse reaction absorbs heat'
    ],
    correctIndex: 3,
    explanation: 'For an exothermic reaction, increasing temperature shifts the equilibrium in the reverse (endothermic) direction, since the system responds by favouring the process that absorbs the added heat.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-34',
    type: 'mcq',
    question: 'For an endothermic reaction at equilibrium, increasing the temperature will generally shift the equilibrium in the:',
    options: [
      'Forward direction, favouring the products',
      'Reverse direction, favouring the reactants',
      'No particular direction at all, since endothermic reactions are unaffected by temperature',
      'A direction that depends solely on pressure, with no relation to temperature'
    ],
    correctIndex: 0,
    explanation: 'For an endothermic reaction, increasing temperature shifts the equilibrium in the forward direction, since the system favours the heat-absorbing (endothermic) process to counteract the added heat.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-35',
    type: 'mcq',
    question: 'The equilibrium constant (Kc) of an exothermic reaction generally shows which trend as temperature increases?',
    options: [
      'Kc increases',
      'Kc decreases',
      'Kc remains completely unchanged, regardless of temperature',
      'Kc becomes exactly zero at any temperature above 0°C'
    ],
    correctIndex: 1,
    explanation: 'For an exothermic reaction, the equilibrium constant Kc generally decreases as temperature increases, reflecting the shift of equilibrium toward the reactants.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-36',
    type: 'mcq',
    question: 'The addition of a catalyst to a reaction at equilibrium primarily serves to:',
    options: [
      'Shift the equilibrium position significantly toward the products',
      'Shift the equilibrium position significantly toward the reactants',
      'Help the system reach equilibrium more quickly, without shifting the actual position of equilibrium or altering Kc',
      'Permanently destroy the equilibrium state, preventing it from ever being re-established'
    ],
    correctIndex: 2,
    explanation: 'A catalyst speeds up both the forward and reverse reactions equally, helping the system reach equilibrium faster, but it does not alter the equilibrium position or the value of the equilibrium constant.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-37',
    type: 'mcq',
    question: 'The addition of an inert gas to a reaction system at equilibrium, while keeping the total volume constant, will generally have which effect on the equilibrium position?',
    options: [
      'A significant shift toward the side with fewer moles of gas',
      'A significant shift toward the side with more moles of gas',
      'No effect, since the partial pressures (and hence concentrations) of the reacting species remain unchanged',
      'Complete destruction of the equilibrium, with no possibility of re-establishing it'
    ],
    correctIndex: 2,
    explanation: 'Adding an inert gas at constant volume does not change the partial pressures (or concentrations) of the actual reacting species, and therefore has no effect on the position of the equilibrium.',
    difficulty: 'hard'
  },
  {
    id: 'equilibrium-38',
    type: 'mcq',
    question: 'The industrial synthesis of ammonia via the Haber process (N2 + 3H2 ⇌ 2NH3), an exothermic reaction, is typically carried out under conditions of high pressure and a moderately low (rather than very high) temperature, primarily in accordance with:',
    options: [
      'No particular scientific principle; the conditions were chosen entirely at random',
      'Le Chatelier\'s Principle, to maximise ammonia yield while maintaining a practical reaction rate',
      'The Law of Mass Action alone, with no consideration of Le Chatelier\'s Principle',
      'Only economic cost considerations, with no relevance to chemical equilibrium at all'
    ],
    correctIndex: 1,
    explanation: 'The Haber process conditions (high pressure, moderately low temperature) are chosen based on Le Chatelier\'s Principle, balancing the need to maximise ammonia yield with a practically achievable reaction rate.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-39',
    type: 'mcq',
    question: 'In the Haber process, a catalyst is typically employed primarily to:',
    options: [
      'Increase the rate at which the reaction reaches equilibrium, without altering the equilibrium yield itself',
      'Significantly increase the overall equilibrium yield of ammonia beyond what Le Chatelier\'s Principle would predict',
      'Completely eliminate the need for high pressure conditions',
      'Shift the equilibrium entirely and irreversibly toward the reactants'
    ],
    correctIndex: 0,
    explanation: 'The catalyst used in the Haber process primarily serves to increase the rate at which equilibrium is reached, without changing the actual equilibrium position or ammonia yield.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-40',
    type: 'mcq',
    question: 'According to the Arrhenius concept, an acid is defined as a substance that, when dissolved in water, produces:',
    options: [
      'Hydroxide ions (OH-)',
      'Only neutral molecules, with no ions produced at all',
      'Only metal ions',
      'Hydrogen ions (H+)'
    ],
    correctIndex: 3,
    explanation: 'The Arrhenius concept defines an acid as a substance that produces hydrogen ions (H+) when dissolved in water.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-41',
    type: 'mcq',
    question: 'According to the Arrhenius concept, a base is defined as a substance that, when dissolved in water, produces:',
    options: [
      'Hydroxide ions (OH-)',
      'Hydrogen ions (H+)',
      'Only neutral molecules, with no ions produced at all',
      'Only non-metal ions'
    ],
    correctIndex: 0,
    explanation: 'The Arrhenius concept defines a base as a substance that produces hydroxide ions (OH-) when dissolved in water.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-42',
    type: 'mcq',
    question: 'According to the Bronsted-Lowry concept, an acid is defined as a substance capable of:',
    options: [
      'Accepting a proton (H+) from another substance',
      'Accepting a pair of electrons, exclusively',
      'Only existing as a gas at room temperature',
      'Donating a proton (H+) to another substance'
    ],
    correctIndex: 3,
    explanation: 'The Bronsted-Lowry concept defines an acid as a proton (H+) donor, distinguishing it from a base, which is defined as a proton acceptor.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-43',
    type: 'mcq',
    question: 'According to the Bronsted-Lowry concept, a pair of species that differ from each other by only a single proton (H+), such as HCl and Cl-, are referred to as a:',
    options: [
      'Buffer pair, exclusively',
      'Conjugate acid-base pair',
      'Isomeric pair',
      'Complex ion pair, exclusively'
    ],
    correctIndex: 1,
    explanation: 'A conjugate acid-base pair, in the Bronsted-Lowry framework, consists of two species that differ from each other by the presence or absence of a single proton.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-44',
    type: 'mcq',
    question: 'According to the Lewis concept of acids and bases, an acid is more broadly defined as a species capable of:',
    options: [
      'Donating a pair of electrons',
      'Only donating a proton, exclusively, with no reference to electrons',
      'Accepting a pair of electrons',
      'Only existing in the gas phase'
    ],
    correctIndex: 2,
    explanation: 'The Lewis concept broadly defines an acid as an electron pair acceptor, a definition that extends beyond the more restrictive Arrhenius and Bronsted-Lowry concepts to include species that do not necessarily involve H+.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-45',
    type: 'mcq',
    question: 'A key advantage of the Lewis acid-base concept over the Bronsted-Lowry concept is that it can classify certain substances, such as BF3, as acids even though they:',
    options: [
      'Contain an excess of hydroxide ions',
      'Do not contain any hydrogen atoms capable of being donated as a proton',
      'Are always found exclusively in the solid state',
      'Cannot participate in any chemical reaction whatsoever'
    ],
    correctIndex: 1,
    explanation: 'The Lewis concept extends acid-base classification to include substances like BF3, which act as electron pair acceptors (Lewis acids) despite lacking any hydrogen atoms available for proton donation, unlike the Bronsted-Lowry framework.',
    difficulty: 'hard'
  },
  {
    id: 'equilibrium-46',
    type: 'mcq',
    question: 'Strong acids and strong bases, such as HCl and NaOH, are characterised by the fact that they are:',
    options: [
      'Only partially ionised in aqueous solution',
      'Never ionised at all in aqueous solution',
      'Completely ionised in aqueous solution',
      'Ionised only in the solid state, never in solution'
    ],
    correctIndex: 2,
    explanation: 'Strong acids and bases, such as HCl and NaOH, undergo complete ionisation when dissolved in water.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-47',
    type: 'mcq',
    question: 'Weak acids and weak bases, such as acetic acid and ammonium hydroxide, are characterised by the fact that they are:',
    options: [
      'Only partially ionised in aqueous solution, establishing an equilibrium between ionised and unionised forms',
      'Completely ionised in aqueous solution, identical to strong acids/bases',
      'Never soluble in water under any circumstances',
      'Always present as pure solids, never dissolving in water at all'
    ],
    correctIndex: 0,
    explanation: 'Weak acids and bases are only partially ionised in aqueous solution, establishing a dynamic equilibrium between their ionised and unionised (molecular) forms.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-48',
    type: 'mcq',
    question: 'The fraction of the total number of moles of a weak electrolyte that undergoes ionisation in solution is referred to as its:',
    options: [
      'Ionic product (Kw)',
      'Solubility product (Ksp)',
      'Reaction quotient (Q)',
      'Degree of ionisation (α)'
    ],
    correctIndex: 3,
    explanation: 'The degree of ionisation (denoted α) represents the fraction of the total moles of a weak electrolyte that actually ionise in a given solution.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-49',
    type: 'mcq',
    question: 'For a weak acid HA that partially ionises as HA ⇌ H+ + A-, the ionisation constant (Ka) is expressed as:',
    options: [
      'Ka = [HA] / ([H+][A-])',
      'Ka = [H+] + [A-] - [HA]',
      'Ka = [HA] × [H+] × [A-], all multiplied together with no division',
      'Ka = [H+][A-] / [HA]'
    ],
    correctIndex: 3,
    explanation: 'The ionisation constant of a weak acid, Ka, is given by the ratio of the product of ion concentrations to the concentration of the unionised acid: Ka = [H+][A-]/[HA].',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-50',
    type: 'mcq',
    question: 'A larger numerical value of the ionisation constant, Ka, for a given weak acid generally indicates that the acid is:',
    options: [
      'A relatively weaker acid, with a lesser degree of ionisation',
      'Completely non-acidic, showing no ionisation behaviour at all',
      'A relatively stronger acid, with a greater degree of ionisation',
      'Identical in strength to all other weak acids, regardless of the Ka value'
    ],
    correctIndex: 2,
    explanation: 'A larger Ka value indicates a greater extent of ionisation, corresponding to a comparatively stronger weak acid.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-51',
    type: 'mcq',
    question: 'The pKa of a weak acid is mathematically defined as:',
    options: [
      '-log(Ka)',
      '+log(Ka)',
      'Ka multiplied by 14',
      'Ka divided by the molar concentration of the acid'
    ],
    correctIndex: 0,
    explanation: 'pKa is defined as the negative logarithm (base 10) of the acid ionisation constant, Ka: pKa = -log(Ka).',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-52',
    type: 'mcq',
    question: 'A smaller numerical value of pKa for a given weak acid generally corresponds to:',
    options: [
      'A weaker acid (with a correspondingly smaller Ka value)',
      'A stronger acid (with a correspondingly larger Ka value)',
      'An acid that does not ionise at all',
      'A base, rather than an acid'
    ],
    correctIndex: 1,
    explanation: 'Since pKa = -log(Ka), a smaller pKa value corresponds to a larger Ka value, indicating a stronger acid.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-53',
    type: 'mcq',
    question: 'For a conjugate acid-base pair, the relationship between the acid ionisation constant (Ka), the base ionisation constant (Kb) of its conjugate base, and the ionic product of water (Kw) is given by:',
    options: [
      'Ka × Kb = Kw',
      'Ka + Kb = Kw',
      'Ka - Kb = Kw',
      'Ka / Kb = Kw'
    ],
    correctIndex: 0,
    explanation: 'For a conjugate acid-base pair, the product of the acid ionisation constant (Ka) of the acid and the base ionisation constant (Kb) of its conjugate base equals the ionic product of water, Kw.',
    difficulty: 'hard'
  },
  {
    id: 'equilibrium-54',
    type: 'mcq',
    question: 'Water undergoes self-ionisation (autoionisation), producing hydrogen ions and hydroxide ions, and the equilibrium constant for this process is called the:',
    options: [
      'Solubility product (Ksp)',
      'Ionic product of water (Kw)',
      'Reaction quotient (Q)',
      'Henderson-Hasselbalch constant'
    ],
    correctIndex: 1,
    explanation: 'The self-ionisation of water is characterised by its equilibrium constant, known as the ionic product of water, Kw = [H+][OH-].',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-55',
    type: 'mcq',
    question: 'At 25°C, the value of the ionic product of water (Kw) is:',
    options: [
      '1 × 10^-7',
      '1 × 10^14',
      '1 × 10^7',
      '1 × 10^-14'
    ],
    correctIndex: 3,
    explanation: 'The ionic product of water, Kw, has a standard value of 1 × 10^-14 at 25°C.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-56',
    type: 'mcq',
    question: 'In pure water at 25°C, the concentrations of hydrogen ions [H+] and hydroxide ions [OH-] are each equal to:',
    options: [
      '1 × 10^-14 mol/L',
      '1 mol/L',
      '1 × 10^-7 mol/L',
      '1 × 10^7 mol/L'
    ],
    correctIndex: 2,
    explanation: 'In pure, neutral water at 25°C, [H+] = [OH-] = 1 × 10^-7 mol/L, consistent with Kw = [H+][OH-] = 1 × 10^-14.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-57',
    type: 'mcq',
    question: 'Since the self-ionisation of water is an endothermic process, the value of Kw generally shows which trend as temperature increases?',
    options: [
      'Kw decreases with increasing temperature',
      'Kw remains exactly constant, regardless of temperature',
      'Kw increases with increasing temperature',
      'Kw becomes exactly zero above 25°C'
    ],
    correctIndex: 2,
    explanation: 'Since the ionisation of water is endothermic, increasing temperature favours further ionisation, causing the value of Kw to increase.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-58',
    type: 'mcq',
    question: 'The pH of a solution is mathematically defined as:',
    options: [
      '+log[H+]',
      '-log[OH-] exclusively, with no relation to [H+]',
      '[H+] multiplied by 14',
      '-log[H+]'
    ],
    correctIndex: 3,
    explanation: 'pH is defined as the negative logarithm (base 10) of the hydrogen ion concentration: pH = -log[H+].',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-59',
    type: 'mcq',
    question: 'At 25°C, the relationship between pH and pOH of a given aqueous solution is given by:',
    options: [
      'pH + pOH = 14',
      'pH + pOH = 7',
      'pH - pOH = 14',
      'pH × pOH = 14'
    ],
    correctIndex: 0,
    explanation: 'At 25°C, since pKw = 14, the sum of pH and pOH for any aqueous solution equals 14.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-60',
    type: 'mcq',
    question: 'A solution with a pH value less than 7 (at 25°C) is generally classified as:',
    options: [
      'Basic (alkaline)',
      'Acidic',
      'Neutral',
      'Impossible; pH can never be less than 7'
    ],
    correctIndex: 1,
    explanation: 'At 25°C, a pH value less than 7 indicates that a solution is acidic, since [H+] exceeds [OH-].',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-61',
    type: 'mcq',
    question: 'A solution with a pH value greater than 7 (at 25°C) is generally classified as:',
    options: [
      'Acidic',
      'Basic (alkaline)',
      'Neutral',
      'Impossible; pH can never exceed 7'
    ],
    correctIndex: 1,
    explanation: 'At 25°C, a pH value greater than 7 indicates that a solution is basic (alkaline), since [OH-] exceeds [H+].',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-62',
    type: 'mcq',
    question: 'A buffer solution is characterised by its ability to:',
    options: [
      'Resist significant changes in pH upon the addition of small amounts of acid or base',
      'Undergo dramatic, uncontrolled changes in pH with even the smallest addition of acid or base',
      'Completely prevent any chemical reaction from occurring within the solution',
      'Immediately neutralise any and all substances added to it, regardless of quantity'
    ],
    correctIndex: 0,
    explanation: 'A buffer solution is specifically designed to resist significant changes in pH when small amounts of acid or base are added to it.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-63',
    type: 'mcq',
    question: 'An acidic buffer solution is typically prepared by combining a weak acid with:',
    options: [
      'A salt of a strong acid formed with a strong base',
      'A different, unrelated weak acid entirely',
      'A salt of that weak acid formed with a strong base',
      'Pure, distilled water alone, with no salt added'
    ],
    correctIndex: 2,
    explanation: 'An acidic buffer is typically composed of a weak acid together with a salt of that same acid formed with a strong base, such as acetic acid combined with sodium acetate.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-64',
    type: 'mcq',
    question: 'A basic buffer solution is typically prepared by combining a weak base with:',
    options: [
      'A salt of a strong base formed with a strong acid',
      'A different, unrelated weak base entirely',
      'Pure, distilled water alone, with no salt added',
      'A salt of that weak base formed with a strong acid'
    ],
    correctIndex: 3,
    explanation: 'A basic buffer is typically composed of a weak base together with a salt of that same base formed with a strong acid, such as ammonium hydroxide combined with ammonium chloride.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-65',
    type: 'mcq',
    question: 'The Henderson-Hasselbalch equation, used to calculate the pH of an acidic buffer solution, is given by:',
    options: [
      'pH = pKa - log([salt]/[acid])',
      'pH = pKa × log([salt]/[acid])',
      'pH = pKa / log([salt]/[acid])',
      'pH = pKa + log([salt]/[acid])'
    ],
    correctIndex: 3,
    explanation: 'The Henderson-Hasselbalch equation for an acidic buffer is pH = pKa + log([salt]/[acid]), allowing calculation of buffer pH from the ratio of salt to acid concentrations.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-66',
    type: 'mcq',
    question: 'For a basic buffer solution, the analogous form of the Henderson-Hasselbalch equation is expressed in terms of pOH and pKb as:',
    options: [
      'pH = pKb + log([salt]/[base])',
      'pOH = pKb + log([salt]/[base])',
      'pOH = pKb - log([salt]/[base])',
      'pOH = pKa + log([salt]/[base])'
    ],
    correctIndex: 1,
    explanation: 'For a basic buffer, the corresponding Henderson-Hasselbalch-type equation is pOH = pKb + log([salt]/[base]).',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-67',
    type: 'mcq',
    question: 'A buffer solution composed of acetic acid and sodium acetate would generally have a pH that is:',
    options: [
      'Less than 7 (acidic)',
      'Greater than 7 (basic)',
      'Exactly equal to 7 (neutral)',
      'Impossible to determine, even with knowledge of the specific components'
    ],
    correctIndex: 0,
    explanation: 'Since acetic acid and sodium acetate form an acidic buffer, the resulting solution generally has a pH less than 7.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-68',
    type: 'mcq',
    question: 'For a sparingly soluble salt in a saturated solution, an equilibrium exists between the undissolved solid and its dissolved ions, and the equilibrium constant for this dissolution process is called the:',
    options: [
      'Ionic product of water (Kw)',
      'Acid ionisation constant (Ka)',
      'Solubility product (Ksp)',
      'Reaction quotient (Q)'
    ],
    correctIndex: 2,
    explanation: 'The solubility product (Ksp) is the equilibrium constant that describes the dissolution equilibrium of a sparingly soluble salt in a saturated solution.',
    difficulty: 'easy'
  },
  {
    id: 'equilibrium-69',
    type: 'mcq',
    question: 'For a sparingly soluble salt AxBy that dissociates as AxBy ⇌ xA^(y+) + yB^(x-), the solubility product expression (Ksp) is given by:',
    options: [
      'Ksp = [A^(y+)]^x [B^(x-)]^y',
      'Ksp = [AxBy] / ([A^(y+)]^x[B^(x-)]^y)',
      'Ksp = x[A^(y+)] + y[B^(x-)]',
      'Ksp = [AxBy]^(x+y)'
    ],
    correctIndex: 0,
    explanation: 'The solubility product expression for a salt AxBy is given by the product of the ion concentrations, each raised to the power of their respective stoichiometric coefficients: Ksp = [A^(y+)]^x[B^(x-)]^y.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-70',
    type: 'mcq',
    question: 'If, for a given solution, the calculated ionic product (Qsp) is found to be less than the solubility product (Ksp) of a particular salt, the solution is described as:',
    options: [
      'Saturated, at exact equilibrium',
      'Supersaturated, with precipitation about to occur immediately',
      'Unsaturated, meaning more of the salt can still dissolve',
      'Impossible to characterise without further information'
    ],
    correctIndex: 2,
    explanation: 'When Qsp < Ksp, the solution is unsaturated with respect to that salt, meaning additional solid can still dissolve before the solution becomes saturated.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-71',
    type: 'mcq',
    question: 'If, for a given solution, the calculated ionic product (Qsp) is found to be exactly equal to the solubility product (Ksp) of a particular salt, the solution is described as:',
    options: [
      'Unsaturated, capable of dissolving significantly more solid',
      'Saturated, at equilibrium with the undissolved solid',
      'Extremely dilute, well below the point of saturation',
      'Impossible to characterise without further information'
    ],
    correctIndex: 1,
    explanation: 'When Qsp = Ksp, the solution is exactly saturated, existing in equilibrium with any undissolved solid salt present.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-72',
    type: 'mcq',
    question: 'If, for a given solution, the calculated ionic product (Qsp) is found to be greater than the solubility product (Ksp) of a particular salt, the expected outcome is that:',
    options: [
      'The salt will become completely and instantly soluble, with no possibility of precipitation',
      'No change of any kind will occur in the solution',
      'The solution will spontaneously convert into a completely different chemical compound',
      'Precipitation of the salt will occur'
    ],
    correctIndex: 3,
    explanation: 'When Qsp > Ksp, the solution is supersaturated with respect to that salt, and precipitation will occur until the ion concentrations decrease enough for Qsp to equal Ksp.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-73',
    type: 'mcq',
    question: 'The common ion effect refers to the phenomenon in which the addition of an ion already present in a solubility equilibrium (a \'common ion\') generally causes the solubility of a sparingly soluble salt to:',
    options: [
      'Increase significantly',
      'Decrease',
      'Remain completely unaffected',
      'Become exactly zero, with no dissolved salt remaining at all'
    ],
    correctIndex: 1,
    explanation: 'The common ion effect describes how the addition of an ion already involved in a solubility equilibrium generally shifts the equilibrium backward (via Le Chatelier\'s Principle), decreasing the solubility of the sparingly soluble salt.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-74',
    type: 'mcq',
    question: 'The common ion effect on solubility can be explained using Le Chatelier\'s Principle, since adding a common ion effectively:',
    options: [
      'Shifts the dissolution equilibrium forward, favouring further dissolution of the solid',
      'Has no relationship whatsoever to Le Chatelier\'s Principle',
      'Immediately and completely destroys the solubility equilibrium, with no new equilibrium possible',
      'Shifts the dissolution equilibrium backward, favouring the undissolved solid form'
    ],
    correctIndex: 3,
    explanation: 'Adding a common ion increases the concentration of one of the product ions in the dissolution equilibrium, shifting the equilibrium backward (favouring the undissolved solid), in accordance with Le Chatelier\'s Principle.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-75',
    type: 'mcq',
    question: 'The value of the solubility product (Ksp) for a given sparingly soluble salt is generally considered to be dependent primarily on:',
    options: [
      'The specific method used to prepare the solution, with no dependence on temperature',
      'The colour of the container used to hold the solution',
      'Temperature',
      'The atmospheric pressure alone, with no dependence on temperature'
    ],
    correctIndex: 2,
    explanation: 'Like other equilibrium constants, the solubility product (Ksp) of a given salt is a fixed value that depends primarily on temperature.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-76',
    type: 'mcq',
    question: 'Knowledge of the solubility product (Ksp) of a salt can be practically used to predict whether a precipitate will form when two solutions, each containing one of the constituent ions, are:',
    options: [
      'Mixed together',
      'Kept completely separate from each other, indefinitely',
      'Heated individually, without ever being combined',
      'Frozen individually, without ever being combined'
    ],
    correctIndex: 0,
    explanation: 'By calculating the ionic product (Qsp) upon mixing two solutions and comparing it to the known Ksp value, it is possible to predict whether a precipitate will form.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-77',
    type: 'mcq',
    question: 'According to Ostwald\'s dilution law, as a weak electrolyte solution is progressively diluted, its degree of ionisation (α) generally:',
    options: [
      'Increases',
      'Decreases',
      'Remains completely unchanged, regardless of dilution',
      'Immediately drops to exactly zero'
    ],
    correctIndex: 0,
    explanation: 'Ostwald\'s dilution law shows that, for a weak electrolyte, the degree of ionisation increases as the solution is diluted, since dilution favours the equilibrium shift toward more ionised species.',
    difficulty: 'medium'
  },
  {
    id: 'equilibrium-78',
    type: 'mcq',
    question: 'For a very weak electrolyte with a small degree of ionisation, Ostwald\'s dilution law can be approximated as Ka ≈ Cα², where \'C\' represents the:',
    options: [
      'Ionic product of water',
      'Total volume of the solution in litres, with no reference to concentration',
      'The exact pH of the solution',
      'Initial (analytical) concentration of the weak electrolyte'
    ],
    correctIndex: 3,
    explanation: 'In the approximate form of Ostwald\'s dilution law (Ka ≈ Cα²), \'C\' represents the initial (analytical) concentration of the weak electrolyte before ionisation.',
    difficulty: 'hard'
  },
];

export default questions;