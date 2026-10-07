import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Respiration in Plants
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'respiration-in-plants-1',
    type: 'mcq',
    question: 'Respiration, a catabolic process occurring in living cells, primarily functions to break down complex organic molecules in order to release:',
    options: [
      'Carbon dioxide, with no energy released whatsoever',
      'Only water, with no other product formed',
      'Energy, in the usable form of ATP',
      'Only heat and light, with no chemical energy released'
    ],
    correctIndex: 2,
    explanation: 'Respiration is a catabolic process that breaks down complex organic molecules to release energy, which is captured in the usable chemical form of ATP.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-2',
    type: 'mcq',
    question: 'The organic molecule oxidised during cellular respiration to release energy is generally referred to as the:',
    options: [
      'Respiratory substrate',
      'Terminal electron acceptor exclusively',
      'Coenzyme A exclusively',
      'Reaction centre'
    ],
    correctIndex: 0,
    explanation: 'The organic molecule that undergoes oxidation during respiration, releasing energy, is termed the respiratory substrate.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-3',
    type: 'mcq',
    question: 'The most common respiratory substrate utilised by cells for cellular respiration is:',
    options: [
      'Vitamins exclusively',
      'Nucleic acids exclusively',
      'Carbohydrates, particularly glucose',
      'Water'
    ],
    correctIndex: 2,
    explanation: 'Carbohydrates, especially glucose, serve as the most commonly used respiratory substrate for cellular respiration.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-4',
    type: 'mcq',
    question: 'Besides carbohydrates, cells can also utilise other organic molecules as respiratory substrates, depending on availability, including:',
    options: [
      'Only water and minerals',
      'Only inert gases',
      'Only chlorophyll',
      'Proteins, fats, and organic acids'
    ],
    correctIndex: 3,
    explanation: 'In addition to carbohydrates, cells can also use proteins, fats, and organic acids as respiratory substrates when available.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-5',
    type: 'mcq',
    question: 'Unlike simple combustion, which releases energy from glucose in a single, rapid burst, cellular respiration releases energy from glucose:',
    options: [
      'In a single, instantaneous explosive burst, identical to combustion',
      'Without releasing any energy at all',
      'Only as light energy, never as chemical energy',
      'In a stepwise, gradual manner, through a series of enzyme-catalysed reactions'
    ],
    correctIndex: 3,
    explanation: 'Cellular respiration releases the energy stored in glucose gradually, through a controlled, stepwise series of enzyme-catalysed reactions, unlike the rapid, uncontrolled release seen in combustion.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-6',
    type: 'mcq',
    question: 'Glycolysis, the initial step common to both aerobic and anaerobic respiration, occurs within the:',
    options: [
      'Inner mitochondrial membrane',
      'Cytoplasm',
      'Mitochondrial matrix',
      'Nucleus'
    ],
    correctIndex: 1,
    explanation: 'Glycolysis takes place in the cytoplasm of the cell, and this pathway is common to both aerobic and anaerobic respiration.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-7',
    type: 'mcq',
    question: 'The term \'glycolysis\' is derived from Greek words meaning:',
    options: [
      'Sugar splitting',
      'Energy storage',
      'Oxygen release',
      'Water breakdown'
    ],
    correctIndex: 0,
    explanation: 'The term \'glycolysis\' is derived from Greek roots meaning \'sugar splitting\' (glycos = sugar, lysis = splitting).',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-8',
    type: 'mcq',
    question: 'The glycolytic pathway is also referred to as the EMP pathway, named after the scientists who elucidated it:',
    options: [
      'Embden, Meyerhof, and Parnas',
      'Watson, Crick, and Franklin',
      'Krebs, Calvin, and Benson',
      'Fischer, Golgi, and Brown'
    ],
    correctIndex: 0,
    explanation: 'The glycolytic pathway is also called the EMP pathway, named after Embden, Meyerhof, and Parnas, the scientists who elucidated its steps.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-9',
    type: 'mcq',
    question: 'During glycolysis, one molecule of glucose (a 6-carbon compound) is ultimately converted into two molecules of:',
    options: [
      'Citric acid (a 6-carbon compound)',
      'Lactic acid, directly, without any further steps',
      'Acetyl CoA (a 2-carbon compound)',
      'Pyruvic acid (a 3-carbon compound)'
    ],
    correctIndex: 3,
    explanation: 'The end product of glycolysis is two molecules of pyruvic acid, formed from the splitting and processing of one glucose molecule.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-10',
    type: 'mcq',
    question: 'Glycolysis is a pathway that does NOT require the presence of:',
    options: [
      'Any enzymes whatsoever',
      'Oxygen',
      'ATP, at any stage of the pathway',
      'Glucose, its own starting substrate'
    ],
    correctIndex: 1,
    explanation: 'Glycolysis proceeds independently of oxygen availability, occurring whether or not oxygen is present, unlike the later stages of aerobic respiration.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-11',
    type: 'mcq',
    question: 'The initial steps of glycolysis require an investment of ATP to prepare glucose for subsequent breakdown, a process sometimes referred to as the:',
    options: [
      'Energy payoff phase, exclusively',
      'Energy investment phase',
      'Terminal oxidation phase',
      'Amphibolic phase'
    ],
    correctIndex: 1,
    explanation: 'The early steps of glycolysis require an initial investment of ATP, sometimes called the energy investment phase, before net ATP is later generated.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-12',
    type: 'mcq',
    question: 'Considering both the ATP consumed early in the pathway and the ATP produced later, the net gain of ATP from the complete glycolysis of one glucose molecule is:',
    options: [
      '4 ATP',
      '36 ATP',
      '0 ATP, with no net gain at all',
      '2 ATP'
    ],
    correctIndex: 3,
    explanation: 'Although 4 ATP molecules are produced during glycolysis, 2 ATP are consumed in the initial investment steps, resulting in a net gain of 2 ATP per glucose molecule.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-13',
    type: 'mcq',
    question: 'In addition to ATP, glycolysis also produces a net yield of how many molecules of NADH per glucose molecule processed?',
    options: [
      '8 NADH',
      '2 NADH',
      '4 NADH',
      '0 NADH'
    ],
    correctIndex: 1,
    explanation: 'Glycolysis produces a net yield of 2 NADH molecules for every molecule of glucose processed.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-14',
    type: 'mcq',
    question: 'Glycolysis consists of a series of how many sequential, enzyme-catalysed reaction steps?',
    options: [
      'Ten',
      'Three',
      'Fifty',
      'Twenty'
    ],
    correctIndex: 0,
    explanation: 'The complete glycolytic pathway involves a sequence of ten distinct, enzyme-catalysed reaction steps.',
    difficulty: 'hard'
  },
  {
    id: 'respiration-in-plants-15',
    type: 'mcq',
    question: 'Following glycolysis, the ultimate fate of pyruvic acid depends primarily on:',
    options: [
      'The availability of oxygen (and the nature of the organism/cell)',
      'The colour of the cell',
      'The total mass of the organism',
      'The exact time of day'
    ],
    correctIndex: 0,
    explanation: 'The subsequent metabolic fate of pyruvic acid produced by glycolysis depends critically on whether oxygen is available (leading to aerobic respiration) or absent (leading to fermentation).',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-16',
    type: 'mcq',
    question: 'If oxygen is available, the pyruvic acid produced by glycolysis is typically transported into the mitochondria to undergo:',
    options: [
      'Immediate conversion into glucose, reversing glycolysis entirely',
      'Complete conversion into water, bypassing all further oxidation steps',
      'Complete oxidation via aerobic respiration',
      'Storage as a permanent, unused end product'
    ],
    correctIndex: 2,
    explanation: 'In the presence of oxygen, pyruvic acid enters the mitochondria to undergo further, complete oxidation as part of aerobic respiration.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-17',
    type: 'mcq',
    question: 'Since glycolysis occurs identically regardless of whether oxygen is subsequently available, this pathway is considered:',
    options: [
      'A common step for both aerobic and anaerobic respiration',
      'Entirely unrelated to any form of respiration',
      'Exclusive to anaerobic respiration only',
      'Exclusive to aerobic respiration only'
    ],
    correctIndex: 0,
    explanation: 'Since glycolysis proceeds the same way regardless of subsequent oxygen availability, it serves as a common initial pathway shared by both aerobic and anaerobic respiration.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-18',
    type: 'mcq',
    question: 'Fermentation refers to the incomplete oxidation of glucose that occurs under:',
    options: [
      'Strictly aerobic conditions only',
      'Conditions of complete darkness only',
      'Extremely high-pressure conditions only',
      'Anaerobic (oxygen-deficient) conditions'
    ],
    correctIndex: 3,
    explanation: 'Fermentation is the incomplete oxidation of glucose that takes place under anaerobic (oxygen-deficient) conditions.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-19',
    type: 'mcq',
    question: 'In alcoholic fermentation, carried out by organisms such as yeast, pyruvic acid is ultimately converted into carbon dioxide and:',
    options: [
      'Ethanol',
      'Citric acid',
      'Lactic acid',
      'Acetyl CoA'
    ],
    correctIndex: 0,
    explanation: 'Alcoholic fermentation, typically carried out by yeast, converts pyruvic acid into ethanol and carbon dioxide.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-20',
    type: 'mcq',
    question: 'The conversion of pyruvic acid to ethanol during alcoholic fermentation involves two sequential enzymatic steps, catalysed by pyruvate decarboxylase and:',
    options: [
      'RuBisCO',
      'Lactate dehydrogenase',
      'Alcohol dehydrogenase',
      'Citrate synthase'
    ],
    correctIndex: 2,
    explanation: 'Alcoholic fermentation proceeds via the action of pyruvate decarboxylase (releasing CO2) followed by alcohol dehydrogenase (forming ethanol).',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-21',
    type: 'mcq',
    question: 'In lactic acid fermentation, carried out by certain bacteria and by animal muscle cells during vigorous exercise, pyruvic acid is converted into:',
    options: [
      'Ethanol',
      'Citric acid',
      'Acetyl CoA',
      'Lactic acid'
    ],
    correctIndex: 3,
    explanation: 'Lactic acid fermentation converts pyruvic acid directly into lactic acid, occurring in certain bacteria and in animal muscle cells under conditions of oxygen deficiency, such as during intense exercise.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-22',
    type: 'mcq',
    question: 'The conversion of pyruvic acid into lactic acid during lactic acid fermentation is catalysed by the enzyme:',
    options: [
      'Alcohol dehydrogenase',
      'Pyruvate decarboxylase',
      'Lactate dehydrogenase',
      'Citrate synthase'
    ],
    correctIndex: 2,
    explanation: 'Lactate dehydrogenase is the enzyme responsible for catalysing the conversion of pyruvic acid into lactic acid during lactic acid fermentation.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-23',
    type: 'mcq',
    question: 'Compared to complete aerobic respiration, fermentation processes (whether alcoholic or lactic acid) release:',
    options: [
      'A much greater amount of energy than aerobic respiration',
      'No energy whatsoever',
      'A relatively small amount of energy',
      'Exactly the same amount of energy as complete aerobic respiration'
    ],
    correctIndex: 2,
    explanation: 'Fermentation processes, involving only incomplete oxidation of glucose, release considerably less energy compared to the complete oxidation achieved through aerobic respiration.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-24',
    type: 'mcq',
    question: 'The relatively low energy yield of fermentation, compared to aerobic respiration, occurs mainly because:',
    options: [
      'Fermentation does not involve glycolysis at all',
      'Glucose is only incompletely oxidised, with much of the potential energy remaining trapped within the bonds of the end products (alcohol or lactic acid)',
      'Fermentation completely destroys the glucose molecule with no products formed',
      'Fermentation somehow produces more ATP directly than aerobic respiration'
    ],
    correctIndex: 1,
    explanation: 'Since fermentation only partially oxidises glucose, a significant portion of the original chemical energy remains locked within the bonds of the incompletely oxidised end products (ethanol or lactic acid), limiting the total energy released.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-25',
    type: 'mcq',
    question: 'The net ATP yield from fermentation (glycolysis followed by either alcoholic or lactic acid fermentation) is essentially equivalent to the ATP yield from:',
    options: [
      'The entire electron transport chain',
      'Complete aerobic respiration',
      'The complete Krebs cycle',
      'Glycolysis alone'
    ],
    correctIndex: 3,
    explanation: 'Since the fermentation steps themselves do not generate additional ATP beyond what is produced during glycolysis, the overall net ATP yield of fermentation is essentially the same as that of glycolysis alone (2 ATP).',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-26',
    type: 'mcq',
    question: 'Muscle cramps experienced during vigorous exercise are often attributed to the accumulation of:',
    options: [
      'Excess oxygen, accumulating within the muscle tissue',
      'Lactic acid, produced via lactic acid fermentation under low-oxygen conditions',
      'Ethanol, produced via alcoholic fermentation',
      'Citric acid, produced via the Krebs cycle'
    ],
    correctIndex: 1,
    explanation: 'During intense exercise, when oxygen supply to muscles becomes insufficient, lactic acid fermentation occurs, and the resulting accumulation of lactic acid is often associated with muscle fatigue and cramps.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-27',
    type: 'mcq',
    question: 'Fermentation is generally considered a significantly less efficient energy-yielding process compared to aerobic respiration mainly because it results in:',
    options: [
      'The complete breakdown of glucose into CO2 and water, identical to aerobic respiration',
      'A much higher ATP yield than aerobic respiration',
      'The total destruction of all enzymes involved in glycolysis',
      'Incomplete breakdown of glucose, unlike the complete oxidation to CO2 and water achieved in aerobic respiration'
    ],
    correctIndex: 3,
    explanation: 'Fermentation is far less efficient than aerobic respiration because glucose is only partially broken down, unlike aerobic respiration, which achieves complete oxidation of glucose to carbon dioxide and water.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-28',
    type: 'mcq',
    question: 'In the presence of oxygen, pyruvic acid produced by glycolysis is transported into the mitochondria, where it first undergoes a process called:',
    options: [
      'Lactic acid fermentation',
      'Oxidative decarboxylation',
      'Alcoholic fermentation',
      'Glycolysis, repeated a second time'
    ],
    correctIndex: 1,
    explanation: 'Within the mitochondria, pyruvic acid first undergoes oxidative decarboxylation before entering the Krebs cycle.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-29',
    type: 'mcq',
    question: 'Oxidative decarboxylation of pyruvic acid occurs specifically within the:',
    options: [
      'Outer mitochondrial membrane',
      'Cytoplasm',
      'Inner mitochondrial membrane',
      'Mitochondrial matrix'
    ],
    correctIndex: 3,
    explanation: 'The oxidative decarboxylation of pyruvic acid takes place within the mitochondrial matrix.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-30',
    type: 'mcq',
    question: 'During oxidative decarboxylation, pyruvic acid (a 3-carbon compound) is converted into acetyl CoA (a 2-carbon compound), with the release of:',
    options: [
      'Only oxygen, with no CO2 released',
      'Carbon dioxide and NADH',
      'Only water, with no other product formed',
      'Ethanol, directly'
    ],
    correctIndex: 1,
    explanation: 'Oxidative decarboxylation of pyruvic acid releases CO2 and generates NADH, while converting the 3-carbon pyruvate into the 2-carbon acetyl CoA.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-31',
    type: 'mcq',
    question: 'The reaction converting pyruvic acid into acetyl CoA is catalysed by a multi-enzyme complex called:',
    options: [
      'ATP synthase',
      'Pyruvate dehydrogenase complex',
      'RuBisCO',
      'Citrate synthase'
    ],
    correctIndex: 1,
    explanation: 'The pyruvate dehydrogenase complex is the multi-enzyme complex responsible for catalysing the conversion of pyruvic acid into acetyl CoA.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-32',
    type: 'mcq',
    question: 'The formation of acetyl CoA from pyruvic acid represents an important metabolic link, since acetyl CoA serves as the direct entry point into the:',
    options: [
      'Calvin cycle',
      'Electron transport chain, directly, bypassing the Krebs cycle entirely',
      'Krebs (citric acid) cycle',
      'Glycolytic pathway, for a second round'
    ],
    correctIndex: 2,
    explanation: 'Acetyl CoA, formed via oxidative decarboxylation of pyruvate, serves as the key entry molecule that links glycolysis to the subsequent Krebs (citric acid) cycle.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-33',
    type: 'mcq',
    question: 'The Krebs cycle (citric acid cycle), a key stage of aerobic respiration, occurs within the:',
    options: [
      'Thylakoid lumen',
      'Mitochondrial matrix',
      'Inner mitochondrial membrane',
      'Cytoplasm'
    ],
    correctIndex: 1,
    explanation: 'The Krebs cycle takes place within the mitochondrial matrix, following the oxidative decarboxylation of pyruvate.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-34',
    type: 'mcq',
    question: 'The Krebs cycle begins when acetyl CoA (a 2-carbon compound) combines with oxaloacetic acid (OAA, a 4-carbon compound) to form:',
    options: [
      'Glucose, directly',
      'Pyruvic acid, once again',
      'Citric acid (a 6-carbon compound)',
      'Succinic acid, directly, bypassing citric acid formation'
    ],
    correctIndex: 2,
    explanation: 'The Krebs cycle begins with the combination of acetyl CoA and oxaloacetic acid, forming citric acid, a 6-carbon compound.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-35',
    type: 'mcq',
    question: 'The enzyme that catalyses the initial combination of acetyl CoA with oxaloacetic acid, forming citric acid, is called:',
    options: [
      'Citrate synthase',
      'ATP synthase',
      'Pyruvate dehydrogenase',
      'RuBisCO'
    ],
    correctIndex: 0,
    explanation: 'Citrate synthase catalyses the first step of the Krebs cycle, combining acetyl CoA with oxaloacetic acid to form citric acid.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-36',
    type: 'mcq',
    question: 'The Krebs cycle is described as a cyclic pathway because, at the completion of each turn, the original 4-carbon compound, oxaloacetic acid, is:',
    options: [
      'Regenerated, allowing the cycle to continue indefinitely',
      'Converted directly into glucose',
      'Permanently consumed and never regenerated',
      'Converted directly into pyruvic acid'
    ],
    correctIndex: 0,
    explanation: 'The cyclic nature of the Krebs cycle stems from the regeneration of oxaloacetic acid at the end of each turn, allowing it to combine with a new molecule of acetyl CoA and continue the cycle.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-37',
    type: 'mcq',
    question: 'For each single turn of the Krebs cycle (corresponding to one molecule of acetyl CoA processed), the number of carbon dioxide molecules released is:',
    options: [
      'Four',
      'One',
      'Two',
      'Zero'
    ],
    correctIndex: 2,
    explanation: 'Each turn of the Krebs cycle releases two molecules of carbon dioxide, corresponding to the two carbons introduced via acetyl CoA.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-38',
    type: 'mcq',
    question: 'For each single turn of the Krebs cycle, the number of NADH molecules typically produced is:',
    options: [
      'Six',
      'Three',
      'Zero',
      'One'
    ],
    correctIndex: 1,
    explanation: 'Each turn of the Krebs cycle produces three molecules of NADH, generated at various oxidative steps within the cycle.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-39',
    type: 'mcq',
    question: 'For each single turn of the Krebs cycle, the number of FADH2 molecules typically produced is:',
    options: [
      'Zero',
      'Six',
      'One',
      'Three'
    ],
    correctIndex: 2,
    explanation: 'Each turn of the Krebs cycle produces a single molecule of FADH2, generated at one specific oxidative step of the cycle.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-40',
    type: 'mcq',
    question: 'For each single turn of the Krebs cycle, a molecule of GTP (or ATP) is also produced through:',
    options: [
      'Oxidative phosphorylation exclusively, with no other mechanism involved',
      'Photophosphorylation',
      'Substrate-level phosphorylation',
      'Chemiosmosis exclusively, with no direct phosphorylation occurring'
    ],
    correctIndex: 2,
    explanation: 'One molecule of GTP (or ATP) is generated during each turn of the Krebs cycle through substrate-level phosphorylation, a direct enzyme-mediated transfer of a phosphate group.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-41',
    type: 'mcq',
    question: 'Since glycolysis produces two molecules of pyruvic acid (and hence two molecules of acetyl CoA) from each glucose molecule, the Krebs cycle must turn how many times to completely process one molecule of glucose?',
    options: [
      'Twice',
      'Six times',
      'Four times',
      'Once'
    ],
    correctIndex: 0,
    explanation: 'Since one glucose molecule yields two molecules of pyruvic acid (and therefore two acetyl CoA molecules), the Krebs cycle must complete two full turns to process the products of one glucose molecule.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-42',
    type: 'mcq',
    question: 'Considering that the Krebs cycle turns twice per glucose molecule, the total number of CO2 molecules released from the Krebs cycle alone (per glucose molecule) is:',
    options: [
      'One',
      'Four',
      'Two',
      'Six'
    ],
    correctIndex: 1,
    explanation: 'Since each turn of the Krebs cycle releases two CO2 molecules, and the cycle turns twice per glucose molecule, a total of four CO2 molecules are released from the Krebs cycle stage alone.',
    difficulty: 'hard'
  },
  {
    id: 'respiration-in-plants-43',
    type: 'mcq',
    question: 'Overall, considering pyruvate oxidation and both turns of the Krebs cycle together (per one molecule of glucose), the complete oxidation to CO2 accounts for a total of how many carbon atoms, matching the original six carbons of glucose?',
    options: [
      'Twelve carbon atoms, more than the original glucose molecule contained',
      'Zero carbon atoms are ever released as CO2',
      'Only two carbon atoms, with the rest remaining trapped',
      'Six carbon atoms (all six original carbons of glucose are ultimately released as CO2)'
    ],
    correctIndex: 3,
    explanation: 'Considering the two decarboxylation steps during pyruvate oxidation (releasing two CO2, one per pyruvate) plus the four CO2 released across two turns of the Krebs cycle, all six original carbon atoms of glucose are eventually released as CO2, accounting for complete oxidation.',
    difficulty: 'hard'
  },
  {
    id: 'respiration-in-plants-44',
    type: 'mcq',
    question: 'The Krebs cycle, in addition to its central role in energy metabolism, also provides several intermediate compounds that serve as precursors for the biosynthesis of:',
    options: [
      'Nothing at all; the cycle exclusively performs a catabolic function',
      'Only inert gases, with no biosynthetic role at all',
      'Amino acids and other biomolecules',
      'Only water molecules'
    ],
    correctIndex: 2,
    explanation: 'Beyond its catabolic role in energy release, the Krebs cycle also supplies important intermediate compounds that serve as starting materials for the biosynthesis of amino acids and other essential biomolecules.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-45',
    type: 'mcq',
    question: 'The Electron Transport System (ETS), responsible for the majority of ATP production during aerobic respiration, is located within the:',
    options: [
      'Outer mitochondrial membrane',
      'Mitochondrial matrix',
      'Cytoplasm',
      'Inner mitochondrial membrane'
    ],
    correctIndex: 3,
    explanation: 'The Electron Transport System (ETS) is embedded within the inner mitochondrial membrane, where it drives the majority of ATP synthesis during aerobic respiration.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-46',
    type: 'mcq',
    question: 'The NADH and FADH2 molecules produced during glycolysis, pyruvate oxidation, and the Krebs cycle are ultimately oxidised (their electrons donated) to the:',
    options: [
      'Nucleus',
      'Electron Transport System (ETS)',
      'Cell wall',
      'Calvin cycle'
    ],
    correctIndex: 1,
    explanation: 'The reduced coenzymes NADH and FADH2 generated throughout respiration donate their electrons to the Electron Transport System (ETS) for further processing.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-47',
    type: 'mcq',
    question: 'As electrons pass through the sequential protein complexes of the electron transport chain, the energy released is used to actively pump protons across the inner mitochondrial membrane, establishing a proton gradient that is higher in the:',
    options: [
      'Intermembrane space, compared to the mitochondrial matrix',
      'Cytoplasm, compared to the intermembrane space',
      'Mitochondrial matrix, compared to the intermembrane space',
      'Nucleus, compared to the mitochondrial matrix'
    ],
    correctIndex: 0,
    explanation: 'The energy released during electron transport is used to pump protons into the intermembrane space, establishing a higher proton concentration there compared to the mitochondrial matrix.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-48',
    type: 'mcq',
    question: 'The proton gradient generated across the inner mitochondrial membrane is dissipated through the enzyme complex ATP synthase, generating ATP through a process called:',
    options: [
      'Glycosylation',
      'Substrate-level phosphorylation exclusively',
      'Oxidative phosphorylation (chemiosmosis)',
      'Photophosphorylation'
    ],
    correctIndex: 2,
    explanation: 'The dissipation of the proton gradient through ATP synthase, driving ATP formation, is termed oxidative phosphorylation, based on the principle of chemiosmosis.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-49',
    type: 'mcq',
    question: 'The final (terminal) electron acceptor at the end of the electron transport chain in aerobic respiration is:',
    options: [
      'Carbon dioxide',
      'Oxygen',
      'Water',
      'Glucose'
    ],
    correctIndex: 1,
    explanation: 'Oxygen serves as the final (terminal) electron acceptor of the electron transport chain, ultimately combining with electrons and protons to form water.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-50',
    type: 'mcq',
    question: 'The essential requirement of oxygen for aerobic respiration is directly explained by its role as the:',
    options: [
      'Primary respiratory substrate',
      'Initial substrate of glycolysis',
      'Direct product of the Krebs cycle',
      'Terminal electron acceptor of the electron transport chain'
    ],
    correctIndex: 3,
    explanation: 'Oxygen is essential for aerobic respiration specifically because it functions as the terminal (final) electron acceptor of the electron transport chain, without which the entire chain would become blocked.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-51',
    type: 'mcq',
    question: 'The combination of oxygen with electrons and protons at the end of the electron transport chain results in the formation of:',
    options: [
      'Ethanol',
      'Glucose',
      'Water',
      'Carbon dioxide'
    ],
    correctIndex: 2,
    explanation: 'At the end of the electron transport chain, oxygen combines with electrons and protons (derived ultimately from NADH and FADH2) to form water.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-52',
    type: 'mcq',
    question: 'Each molecule of NADH oxidised via the electron transport chain typically yields approximately how many molecules of ATP?',
    options: [
      '3 ATP',
      '0 ATP',
      '1 ATP',
      '10 ATP'
    ],
    correctIndex: 0,
    explanation: 'Each NADH molecule oxidised through the electron transport chain is generally estimated to yield approximately 3 ATP molecules.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-53',
    type: 'mcq',
    question: 'Each molecule of FADH2 oxidised via the electron transport chain typically yields approximately how many molecules of ATP, generally fewer than NADH?',
    options: [
      '5 ATP',
      '2 ATP',
      '3 ATP, identical to NADH',
      '0 ATP'
    ],
    correctIndex: 1,
    explanation: 'Each FADH2 molecule typically yields approximately 2 ATP molecules when oxidised via the electron transport chain, somewhat fewer than the ATP yield from NADH.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-54',
    type: 'mcq',
    question: 'The overall process by which ATP is synthesised using the energy released from the oxidation of NADH and FADH2 through the electron transport chain, coupled to a proton gradient, is most accurately described as:',
    options: [
      'Substrate-level phosphorylation exclusively',
      'Chemiosmotic (oxidative) phosphorylation',
      'Simple diffusion, with no phosphorylation involved',
      'Facilitated transport, unrelated to phosphorylation'
    ],
    correctIndex: 1,
    explanation: 'The synthesis of ATP driven by the electron transport chain, via the establishment and subsequent dissipation of a proton gradient, is accurately termed chemiosmotic (oxidative) phosphorylation.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-55',
    type: 'mcq',
    question: 'Taking into account glycolysis, pyruvate oxidation, the Krebs cycle, and the electron transport chain together, the theoretical net ATP yield from the complete aerobic oxidation of one glucose molecule is generally estimated at approximately:',
    options: [
      '36 ATP',
      '4 ATP',
      '2 ATP',
      '100 ATP'
    ],
    correctIndex: 0,
    explanation: 'Combining all stages of aerobic respiration, the complete oxidation of one glucose molecule is generally estimated to yield a net total of approximately 36 ATP molecules.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-56',
    type: 'mcq',
    question: 'Comparing aerobic respiration to fermentation (anaerobic respiration), aerobic respiration is considered vastly more efficient mainly because it yields:',
    options: [
      'The exact same number of ATP molecules as fermentation, with no meaningful difference',
      'Fewer ATP molecules per glucose molecule than fermentation',
      'A far greater number of ATP molecules per glucose molecule, due to complete oxidation of glucose',
      'No ATP at all, unlike fermentation'
    ],
    correctIndex: 2,
    explanation: 'Aerobic respiration is far more energy-efficient than fermentation because it achieves the complete oxidation of glucose, releasing a much greater total number of ATP molecules.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-57',
    type: 'mcq',
    question: 'The NADH molecules generated in the cytoplasm during glycolysis must be transported into the mitochondria for entry into the electron transport chain, and depending on the specific shuttle mechanism used, their eventual ATP yield may be:',
    options: [
      'Always significantly higher than mitochondrial NADH',
      'Always identical to NADH generated within the mitochondrial matrix, with no variation whatsoever',
      'Somewhat lower than that of NADH generated directly within the mitochondrial matrix',
      'Completely irrelevant, since cytoplasmic NADH is never actually used for ATP production'
    ],
    correctIndex: 2,
    explanation: 'Because cytoplasmic NADH must be shuttled into the mitochondria (via specific transport mechanisms that may consume some energy), its ultimate ATP yield can be somewhat lower than that of NADH generated directly within the mitochondrial matrix.',
    difficulty: 'hard'
  },
  {
    id: 'respiration-in-plants-58',
    type: 'mcq',
    question: 'Overall, the complete aerobic respiration of glucose is considered highly efficient because it results in the release of energy that is captured, in significant part, in the chemical form of:',
    options: [
      'Carbon dioxide, directly, without ATP formation',
      'ATP',
      'Uncontrolled heat, with no chemical energy captured',
      'Ethanol, directly'
    ],
    correctIndex: 1,
    explanation: 'A defining feature of the efficiency of aerobic respiration is that a substantial fraction of the released energy is captured in the readily usable chemical form of ATP, rather than being lost entirely as heat.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-59',
    type: 'mcq',
    question: 'Compared to the net 2 ATP yield of glycolysis (or fermentation) alone, the significantly greater ATP yield of complete aerobic respiration primarily results from the additional contributions of:',
    options: [
      'A second, independent round of glycolysis',
      'Fermentation occurring a second time, after glycolysis',
      'The Krebs cycle and, especially, the electron transport chain (oxidative phosphorylation)',
      'The complete absence of any further oxidation steps'
    ],
    correctIndex: 2,
    explanation: 'The much larger ATP yield of aerobic respiration compared to fermentation arises primarily from the additional ATP generated during the Krebs cycle and, especially, through oxidative phosphorylation driven by the electron transport chain.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-60',
    type: 'mcq',
    question: 'Some energy released during the complete oxidation of glucose in aerobic respiration is inevitably lost as:',
    options: [
      'Additional glucose molecules',
      'Solid matter, with no gaseous or liquid loss',
      'Heat',
      'Additional oxygen molecules'
    ],
    correctIndex: 2,
    explanation: 'Not all of the energy released during aerobic respiration is captured as ATP; a portion is inevitably lost as heat, a natural consequence of the inherent inefficiency of any biological energy-transfer process.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-61',
    type: 'mcq',
    question: 'Which of the following correctly ranks the relative ATP-yielding efficiency of the different respiratory processes, from lowest to highest?',
    options: [
      'Neither process yields any ATP whatsoever',
      'Aerobic respiration (lowest) < Fermentation (highest)',
      'Both processes yield exactly the same amount of ATP, with no difference',
      'Fermentation (lowest) < Aerobic respiration (highest)'
    ],
    correctIndex: 3,
    explanation: 'Fermentation, involving only incomplete oxidation of glucose, yields far less ATP than the complete oxidation achieved through aerobic respiration, making aerobic respiration the significantly more efficient process.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-62',
    type: 'mcq',
    question: 'The much higher ATP yield of aerobic respiration compared to anaerobic fermentation provides a key evolutionary and physiological explanation for why:',
    options: [
      'Fermentation is always the preferred pathway in all environments, regardless of oxygen availability',
      'All organisms exclusively rely only on fermentation, regardless of complexity',
      'Oxygen is completely irrelevant to the energy needs of any organism',
      'Most complex, multicellular organisms rely primarily on aerobic respiration to meet their higher energy demands'
    ],
    correctIndex: 3,
    explanation: 'The far greater ATP yield of aerobic respiration compared to fermentation helps explain why most complex, multicellular organisms, with substantial energy demands, rely primarily on aerobic respiration.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-63',
    type: 'mcq',
    question: 'The respiratory pathway (comprising glycolysis and the Krebs cycle) is described as \'amphibolic\' rather than strictly catabolic because it is involved in both the breakdown of substrates for energy release and:',
    options: [
      'A role limited only to photosynthesis',
      'The biosynthesis (anabolism) of various other important biomolecules',
      'The exclusive production of only carbon dioxide, with no other role',
      'The complete destruction of all cellular components'
    ],
    correctIndex: 1,
    explanation: 'Since the respiratory pathway serves dual roles - catabolic energy release and providing precursors for anabolic (biosynthetic) pathways - it is described as amphibolic rather than purely catabolic.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-64',
    type: 'mcq',
    question: 'Intermediates generated during the respiratory pathway (such as those from glycolysis and the Krebs cycle) can serve as important precursor molecules for the biosynthesis of various compounds, including:',
    options: [
      'Only inert, biologically inactive waste products',
      'Fatty acids and amino acids',
      'Only oxygen gas',
      'Only water molecules'
    ],
    correctIndex: 1,
    explanation: 'Various intermediate compounds generated during respiration can be diverted to serve as precursors for the biosynthesis of important biomolecules, including fatty acids and amino acids.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-65',
    type: 'mcq',
    question: 'The amphibolic nature of the respiratory pathway also allows other substrates besides carbohydrates, such as fats and proteins, to be broken down and utilised by:',
    options: [
      'Being completely excluded from the respiratory pathway under all circumstances',
      'Converting spontaneously into glucose before entering the pathway',
      'Bypassing the entire respiratory pathway and directly forming ATP without any enzymatic involvement',
      'Entering the respiratory pathway at various specific points, after appropriate conversion'
    ],
    correctIndex: 3,
    explanation: 'Fats and proteins can be converted into appropriate intermediate compounds and then enter the respiratory pathway at various specific points, reflecting the amphibolic, multi-substrate flexibility of this metabolic system.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-66',
    type: 'mcq',
    question: 'Fatty acids, when used as a respiratory substrate, are typically broken down and their resulting products enter the respiratory pathway primarily as:',
    options: [
      'Oxaloacetic acid, entering the C4 pathway',
      'RuBP, entering the Calvin cycle',
      'Glucose, entering glycolysis directly at its starting point',
      'Acetyl CoA, entering the Krebs cycle'
    ],
    correctIndex: 3,
    explanation: 'The breakdown products of fatty acids are typically converted into acetyl CoA, allowing them to enter the respiratory pathway directly at the level of the Krebs cycle.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-67',
    type: 'mcq',
    question: 'Proteins, when broken down for use as a respiratory substrate, are first hydrolysed into individual:',
    options: [
      'Amino acids, which are then further converted into intermediates that can enter the respiratory pathway at various points',
      'Nucleotides, exclusively',
      'Fatty acids, exclusively',
      'Simple sugars, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Proteins used as respiratory substrates are first broken down into individual amino acids, which are subsequently converted into various intermediates capable of entering the respiratory pathway at different points.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-68',
    type: 'mcq',
    question: 'The concept of the amphibolic pathway highlights that cellular respiration should not be viewed merely as an energy-releasing process, but also as a central metabolic hub connecting:',
    options: [
      'Catabolic (breakdown) and anabolic (biosynthetic) processes within the cell',
      'Only the processes of mitosis and meiosis',
      'Only photosynthesis and transpiration, with no relevance to respiration itself',
      'Only processes occurring in the chloroplast, with no role for mitochondria'
    ],
    correctIndex: 0,
    explanation: 'Recognising the respiratory pathway as amphibolic emphasises its central role as a metabolic hub, linking both catabolic energy-releasing processes and anabolic, biosynthetic processes within the cell.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-69',
    type: 'mcq',
    question: 'The Respiratory Quotient (RQ), also called the respiratory ratio, is defined as the ratio of the volume of CO2 evolved to the volume of:',
    options: [
      'Glucose consumed during respiration',
      'O2 consumed during respiration',
      'ATP synthesised during respiration',
      'Water produced during respiration'
    ],
    correctIndex: 1,
    explanation: 'The Respiratory Quotient (RQ) is calculated as the ratio of the volume of CO2 evolved to the volume of O2 consumed during respiration.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-70',
    type: 'mcq',
    question: 'When carbohydrates serve as the primary respiratory substrate, the Respiratory Quotient (RQ) is typically found to be:',
    options: [
      'Less than 1 (approximately 0.7)',
      'Equal to 0',
      'Greater than 1',
      'Equal to 1'
    ],
    correctIndex: 3,
    explanation: 'When carbohydrates are used as the respiratory substrate, the volume of CO2 evolved equals the volume of O2 consumed, giving an RQ of exactly 1.',
    difficulty: 'easy'
  },
  {
    id: 'respiration-in-plants-71',
    type: 'mcq',
    question: 'When fats serve as the primary respiratory substrate, the Respiratory Quotient (RQ) is typically found to be:',
    options: [
      'Less than 1 (approximately 0.7)',
      'Greater than 1',
      'Equal to exactly 1',
      'Exactly 2'
    ],
    correctIndex: 0,
    explanation: 'Fats, containing a lower proportion of oxygen relative to carbon compared to carbohydrates, require relatively more oxygen for complete oxidation, resulting in an RQ of less than 1 (approximately 0.7).',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-72',
    type: 'mcq',
    question: 'The relatively low RQ value observed when fats are used as the respiratory substrate is primarily explained by the fact that fat molecules contain:',
    options: [
      'A comparatively lower proportion of oxygen relative to carbon, requiring more O2 for complete oxidation',
      'A much higher proportion of oxygen relative to carbon than carbohydrates',
      'No carbon atoms whatsoever',
      'Exactly the same oxygen-to-carbon ratio as carbohydrates'
    ],
    correctIndex: 0,
    explanation: 'Fats contain a comparatively lower proportion of oxygen relative to carbon (compared to carbohydrates), meaning more O2 must be consumed to fully oxidise them to CO2 and water, resulting in an RQ below 1.',
    difficulty: 'hard'
  },
  {
    id: 'respiration-in-plants-73',
    type: 'mcq',
    question: 'When proteins serve as the respiratory substrate, the Respiratory Quotient (RQ) is generally found to be:',
    options: [
      'Always exactly equal to the value observed for fats, with no distinction',
      'Exactly equal to 1, identical to carbohydrates',
      'Always exactly equal to 2',
      'Less than 1, and generally intermediate between the values typical of fats and carbohydrates'
    ],
    correctIndex: 3,
    explanation: 'When proteins are used as the respiratory substrate, the RQ is generally found to be less than 1, typically falling in an intermediate range relative to the values seen with fats and carbohydrates.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-74',
    type: 'mcq',
    question: 'When certain organic acids serve as the respiratory substrate, such as in some germinating seeds, the Respiratory Quotient (RQ) can be observed to be:',
    options: [
      'Greater than 1',
      'Always less than 1',
      'Always exactly equal to 1',
      'Always exactly equal to 0'
    ],
    correctIndex: 0,
    explanation: 'When organic acids (already relatively oxygen-rich compounds) serve as the respiratory substrate, less additional O2 is required for their complete oxidation relative to the CO2 produced, resulting in an RQ greater than 1.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-75',
    type: 'mcq',
    question: 'The relatively high RQ value (greater than 1) observed when organic acids are used as the respiratory substrate is explained by the fact that organic acids are already:',
    options: [
      'Completely devoid of any oxygen atoms',
      'Identical in oxygen content to simple carbohydrates',
      'Relatively highly oxidised, containing more oxygen relative to carbon, and thus require comparatively less additional O2 for complete oxidation',
      'Composed entirely of nitrogen, with no carbon or oxygen present'
    ],
    correctIndex: 2,
    explanation: 'Since organic acids already contain a relatively high proportion of oxygen relative to carbon, comparatively less additional O2 needs to be consumed to complete their oxidation to CO2, resulting in a higher RQ (greater than 1) relative to the CO2 released.',
    difficulty: 'hard'
  },
  {
    id: 'respiration-in-plants-76',
    type: 'mcq',
    question: 'Measurement of the Respiratory Quotient can provide useful indirect information about which of the following aspects of a respiring tissue or organism?',
    options: [
      'The exact species identity of the organism, with complete certainty',
      'The total genome size of the organism',
      'The precise age of the organism, in years',
      'The nature (type) of the respiratory substrate currently being utilised'
    ],
    correctIndex: 3,
    explanation: 'By measuring the Respiratory Quotient, it is possible to gain useful indirect insight into the type of respiratory substrate (carbohydrate, fat, protein, or organic acid) currently being utilised by a respiring tissue or organism.',
    difficulty: 'medium'
  },
  {
    id: 'respiration-in-plants-77',
    type: 'mcq',
    question: 'In a scenario where a plant tissue is respiring using a mixture of carbohydrates and fats simultaneously, the observed overall Respiratory Quotient would generally be expected to be:',
    options: [
      'Exactly equal to 0.7, with no influence from the carbohydrate component at all',
      'Always greater than 1, regardless of the substrate mixture',
      'Exactly equal to 1, with no influence from the fat component at all',
      'Intermediate between the RQ values typical of pure carbohydrate respiration (RQ=1) and pure fat respiration (RQ≈0.7)'
    ],
    correctIndex: 3,
    explanation: 'When a mixture of respiratory substrates (such as carbohydrates and fats) is being oxidised simultaneously, the overall observed RQ generally reflects an intermediate value, influenced proportionally by the relative contribution of each substrate type.',
    difficulty: 'hard'
  },
  {
    id: 'respiration-in-plants-78',
    type: 'mcq',
    question: 'Which of the following correctly summarises the general trend in RQ values across different respiratory substrate types, from lowest to highest?',
    options: [
      'Fats (lowest, ~0.7) < Proteins (intermediate) < Carbohydrates (RQ=1) < Organic acids (highest, >1)',
      'Carbohydrates always show the lowest possible RQ value among all substrate types',
      'All respiratory substrates always show an identical RQ value of exactly 1, with no variation',
      'Organic acids (lowest) < Carbohydrates < Proteins < Fats (highest)'
    ],
    correctIndex: 0,
    explanation: 'The general trend in RQ values, from lowest to highest across common respiratory substrates, is: fats (lowest, around 0.7), proteins (intermediate), carbohydrates (exactly 1), and organic acids (highest, greater than 1).',
    difficulty: 'hard'
  },
];

export default questions;