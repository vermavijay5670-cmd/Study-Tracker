import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Photosynthesis in Higher Plants
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'photosynthesis-in-higher-plants-1',
    type: 'mcq',
    question: 'Photosynthesis is considered the primary (basal) source of food and energy for almost all life forms on Earth mainly because it:',
    options: [
      'Directly converts CO2 into oxygen without producing any organic compounds',
      'Only occurs in animals, providing them energy directly from sunlight',
      'Converts light energy into chemical energy stored in the form of organic compounds',
      'Produces only heat energy, with no chemical energy involved'
    ],
    correctIndex: 2,
    explanation: 'Photosynthesis converts light (solar) energy into chemical energy stored within organic compounds, forming the ultimate basis of food and energy for nearly all life forms.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-2',
    type: 'mcq',
    question: 'In higher plants, the primary site of photosynthesis is the:',
    options: [
      'Chloroplast, mainly within the mesophyll cells of leaves',
      'Mitochondrion, mainly within root cells',
      'Nucleus, within any plant cell',
      'Golgi apparatus, within stem cells'
    ],
    correctIndex: 0,
    explanation: 'Chloroplasts, primarily located within the mesophyll cells of leaves, are the principal sites of photosynthesis in higher plants.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-3',
    type: 'mcq',
    question: 'Gas exchange required for photosynthesis (uptake of CO2, release of O2) in leaves primarily occurs through small pores called:',
    options: [
      'Lenticels exclusively',
      'Nuclear pores',
      'Plasmodesmata exclusively',
      'Stomata'
    ],
    correctIndex: 3,
    explanation: 'Stomata, small pores present mainly on the leaf epidermis, facilitate the exchange of gases (CO2 in, O2 out) necessary for photosynthesis.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-4',
    type: 'mcq',
    question: 'Photosynthesis occurs not only in green plants but also in certain other organisms, such as:',
    options: [
      'All fungi, without exception',
      'Algae and cyanobacteria',
      'All bacteria, without exception',
      'All animals, without exception'
    ],
    correctIndex: 1,
    explanation: 'In addition to green plants, algae and cyanobacteria are also capable of carrying out photosynthesis.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-5',
    type: 'mcq',
    question: 'Joseph Priestley, through his experiments with a burning candle and a mint plant enclosed in a bell jar, demonstrated that plants:',
    options: [
      'Consume oxygen exclusively, with no production of any gas',
      'Restore (purify) air that has been vitiated by burning or breathing',
      'Have no effect whatsoever on the composition of enclosed air',
      'Produce carbon dioxide as their sole gaseous product'
    ],
    correctIndex: 1,
    explanation: 'Priestley\'s classic experiments demonstrated that plants could restore (purify) air that had been vitiated by the burning of a candle or the breathing of animals.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-6',
    type: 'mcq',
    question: 'A key limitation of Joseph Priestley\'s early experiments on photosynthesis was that he could not explain the essential role played by:',
    options: [
      'Water',
      'Carbon dioxide',
      'Temperature',
      'Light'
    ],
    correctIndex: 3,
    explanation: 'Priestley\'s experiments, while groundbreaking, failed to identify light as an essential requirement for the air-purifying process he observed.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-7',
    type: 'mcq',
    question: 'Jan Ingenhousz demonstrated that the purification of air by plants occurs specifically in the presence of sunlight, and moreover, that this purification is carried out only by:',
    options: [
      'The green parts of the plant',
      'All parts of the plant equally, regardless of colour',
      'Only the roots of the plant',
      'Only the flowers of the plant'
    ],
    correctIndex: 0,
    explanation: 'Ingenhousz showed that sunlight was essential for air purification by plants, and further demonstrated that only the green parts of plants (not all parts) were responsible for this process.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-8',
    type: 'mcq',
    question: 'Julius von Sachs demonstrated that glucose produced by green plant parts during photosynthesis is typically stored in the form of:',
    options: [
      'Cellulose exclusively',
      'Fat exclusively',
      'Starch',
      'Protein exclusively'
    ],
    correctIndex: 2,
    explanation: 'Von Sachs showed that the glucose produced in green plant parts during photosynthesis is generally stored in the form of starch.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-9',
    type: 'mcq',
    question: 'Julius von Sachs demonstrated, using a test involving iodine, that white (non-green) areas of a variegated leaf:',
    options: [
      'Produce even more starch than the green areas',
      'Produce exactly the same amount of starch as the green areas',
      'Are completely unrelated to starch production in any part of the leaf',
      'Do not produce starch, unlike the green areas of the same leaf'
    ],
    correctIndex: 3,
    explanation: 'Von Sachs demonstrated that the white (non-green, non-photosynthetic) areas of a variegated leaf fail to produce starch, unlike the surrounding green areas, when tested with iodine.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-10',
    type: 'mcq',
    question: 'T.W. Engelmann, using a prism to split light into its spectral components and aerobic bacteria to detect oxygen evolution, illuminated a filamentous green alga and established what is now known as the first:',
    options: [
      'Absorption spectrum of chlorophyll b only',
      'Action spectrum of photosynthesis',
      'Emission spectrum of ATP',
      'Calvin cycle diagram'
    ],
    correctIndex: 1,
    explanation: 'Engelmann\'s elegant experiment, using a prism and aerobic bacteria to detect regions of oxygen evolution along an algal filament, established the first action spectrum of photosynthesis.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-11',
    type: 'mcq',
    question: 'In Engelmann\'s classic experiment, the aerobic bacteria used to detect oxygen evolution accumulated predominantly in which regions of the light spectrum falling on the algal filament?',
    options: [
      'The green light region exclusively',
      'The yellow light region exclusively',
      'The blue and red light regions',
      'Regions of complete darkness'
    ],
    correctIndex: 2,
    explanation: 'In Engelmann\'s experiment, aerobic bacteria accumulated predominantly in the blue and red light regions of the spectrum, indicating that these wavelengths were most effective in driving photosynthesis (and hence oxygen evolution).',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-12',
    type: 'mcq',
    question: 'Cornelius Van Niel, through comparative studies of purple and green sulphur bacteria, demonstrated that photosynthesis is fundamentally a light-dependent reaction in which hydrogen from a suitable oxidisable compound is used to reduce:',
    options: [
      'Carbon dioxide to carbohydrates',
      'Water to oxygen exclusively, with no role for carbon dioxide',
      'Oxygen to carbon dioxide',
      'Nitrogen to ammonia'
    ],
    correctIndex: 0,
    explanation: 'Van Niel\'s studies established that photosynthesis fundamentally involves the light-driven reduction of carbon dioxide to carbohydrates, using hydrogen derived from an oxidisable compound (such as H2S in certain bacteria, or water in green plants).',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-13',
    type: 'mcq',
    question: 'Based on his comparative studies, Cornelius Van Niel proposed that the oxygen evolved during photosynthesis in green plants originates from:',
    options: [
      'Water, rather than from carbon dioxide',
      'Carbon dioxide, rather than from water',
      'The chlorophyll molecule itself',
      'Atmospheric nitrogen'
    ],
    correctIndex: 0,
    explanation: 'Van Niel\'s hypothesis, later confirmed experimentally, proposed that the oxygen released during photosynthesis originates from the splitting of water molecules, not from carbon dioxide.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-14',
    type: 'mcq',
    question: 'Among the various photosynthetic pigments, the pigment that participates directly in the light reaction (at the reaction centre) is:',
    options: [
      'Chlorophyll b, exclusively',
      'Xanthophyll, exclusively',
      'Chlorophyll a',
      'Carotenoids, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Chlorophyll a is the primary pigment that participates directly in the light reactions of photosynthesis, at the reaction centre.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-15',
    type: 'mcq',
    question: 'Pigments such as chlorophyll b, xanthophylls, and carotenoids, which absorb light and transfer the energy to chlorophyll a, are collectively called:',
    options: [
      'Primary pigments',
      'Accessory pigments',
      'Reaction centre pigments',
      'Antenna-independent pigments'
    ],
    correctIndex: 1,
    explanation: 'Chlorophyll b, xanthophylls, and carotenoids function as accessory pigments, absorbing light of various wavelengths and transferring the captured energy to chlorophyll a.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-16',
    type: 'mcq',
    question: 'When plotted against wavelength, the absorption spectrum of chlorophyll a shows peak absorption primarily in which regions of the visible light spectrum?',
    options: [
      'The green region exclusively',
      'The yellow region exclusively',
      'The ultraviolet region exclusively',
      'The blue and red regions'
    ],
    correctIndex: 3,
    explanation: 'Chlorophyll a shows characteristic peak absorption in the blue and red regions of the visible light spectrum, with comparatively lower absorption in the green region.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-17',
    type: 'mcq',
    question: 'The action spectrum of photosynthesis (rate of photosynthesis plotted against wavelength of light) closely resembles the absorption spectrum of:',
    options: [
      'Only water molecules',
      'Only carbon dioxide molecules',
      'Chlorophyll a, with contributions from other accessory pigments',
      'Only the cell wall'
    ],
    correctIndex: 2,
    explanation: 'The overall action spectrum of photosynthesis closely resembles the absorption spectrum of chlorophyll a, though contributions from accessory pigments also play a role.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-18',
    type: 'mcq',
    question: 'The relatively close match between the action spectrum and the absorption spectrum of chlorophyll a provides strong evidence that:',
    options: [
      'Chlorophyll a is the primary pigment involved in photosynthesis',
      'Chlorophyll a plays no role whatsoever in photosynthesis',
      'Carbon dioxide, not light, is the primary determinant of the photosynthetic rate',
      'Photosynthesis occurs independently of any pigment'
    ],
    correctIndex: 0,
    explanation: 'Since the action spectrum of photosynthesis so closely matches the absorption spectrum of chlorophyll a, this provides strong evidence that chlorophyll a is the primary pigment driving the process.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-19',
    type: 'mcq',
    question: 'The two distinct pigment-protein complexes involved in the light reactions of photosynthesis, embedded in the thylakoid membrane, are called:',
    options: [
      'Photosystem A and Photosystem B',
      'Calvin system I and Calvin system II',
      'Kranz system I and Kranz system II',
      'Photosystem I (PS I) and Photosystem II (PS II)'
    ],
    correctIndex: 3,
    explanation: 'The two photosystems involved in light reactions are Photosystem I (PS I) and Photosystem II (PS II), each named according to the order in which they were discovered.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-20',
    type: 'mcq',
    question: 'Photosystem I (PS I) has its reaction centre chlorophyll a molecule with a peak light absorption at a wavelength of approximately:',
    options: [
      '680 nanometres',
      '700 nanometres (hence called P700)',
      '400 nanometres',
      '900 nanometres'
    ],
    correctIndex: 1,
    explanation: 'PS I\'s reaction centre chlorophyll a molecule absorbs light maximally at approximately 700 nm, and is therefore designated P700.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-21',
    type: 'mcq',
    question: 'Photosystem II (PS II) has its reaction centre chlorophyll a molecule with a peak light absorption at a wavelength of approximately:',
    options: [
      '700 nanometres',
      '680 nanometres (hence called P680)',
      '500 nanometres',
      '800 nanometres'
    ],
    correctIndex: 1,
    explanation: 'PS II\'s reaction centre chlorophyll a molecule absorbs light maximally at approximately 680 nm, and is therefore designated P680.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-22',
    type: 'mcq',
    question: 'The naming of Photosystem I and Photosystem II reflects the order in which they were:',
    options: [
      'Functionally activated during the light reaction, in strict chronological order',
      'Evolved, over geological time',
      'Physically located within the chloroplast, from top to bottom',
      'Discovered, and does not necessarily indicate the sequence in which they function during photosynthesis'
    ],
    correctIndex: 3,
    explanation: 'The numbering of PS I and PS II reflects the historical order in which they were discovered, not the actual chronological sequence of their functional activity during light reactions.',
    difficulty: 'hard'
  },
  {
    id: 'photosynthesis-in-higher-plants-23',
    type: 'mcq',
    question: 'Each photosystem consists of a light-harvesting complex (LHC), which funnels absorbed light energy toward a specialised chlorophyll a molecule at the:',
    options: [
      'Reaction centre',
      'Stromal side of the chloroplast only, with no defined reaction centre',
      'Outer chloroplast membrane exclusively',
      'Bundle sheath cell wall'
    ],
    correctIndex: 0,
    explanation: 'The light-harvesting complex (antenna pigments) of each photosystem funnels absorbed light energy toward a specific chlorophyll a molecule located at the reaction centre.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-24',
    type: 'mcq',
    question: 'The pathway of electron flow during the light reactions that involves both Photosystem I and Photosystem II, resulting in the production of both ATP and NADPH, is called:',
    options: [
      'Cyclic photophosphorylation',
      'The Calvin cycle',
      'Non-cyclic photophosphorylation (the Z-scheme)',
      'The Hatch-Slack pathway'
    ],
    correctIndex: 2,
    explanation: 'Non-cyclic photophosphorylation, involving sequential electron flow through both PS II and PS I, produces both ATP and NADPH, and is diagrammatically represented as the Z-scheme.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-25',
    type: 'mcq',
    question: 'The characteristic \'Z-shaped\' diagram used to represent non-cyclic electron transport arises from plotting the:',
    options: [
      'Redox potentials of the various electron carriers involved',
      'Total mass of chlorophyll present in the chloroplast',
      'Number of ATP molecules produced per minute',
      'Concentration of carbon dioxide in the atmosphere'
    ],
    correctIndex: 0,
    explanation: 'The Z-scheme diagram derives its characteristic shape from plotting the redox potentials of the sequential electron carriers involved in non-cyclic electron transport.',
    difficulty: 'hard'
  },
  {
    id: 'photosynthesis-in-higher-plants-26',
    type: 'mcq',
    question: 'In non-cyclic photophosphorylation, light absorbed by Photosystem II excites an electron, which is ultimately passed through an electron transport chain and eventually used to reduce:',
    options: [
      'Water directly to oxygen, bypassing NADP+ entirely',
      'Carbon dioxide directly, without involving Photosystem I',
      'NADP+ to NADPH, via Photosystem I',
      'ATP directly into ADP'
    ],
    correctIndex: 2,
    explanation: 'In non-cyclic electron flow, the electron path ultimately proceeds through Photosystem I, culminating in the reduction of NADP+ to NADPH.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-27',
    type: 'mcq',
    question: 'Non-cyclic photophosphorylation, unlike cyclic photophosphorylation, results in the production of:',
    options: [
      'Only ATP, with no NADPH production',
      'Both ATP and NADPH, along with the release of oxygen',
      'Only NADPH, with no ATP production',
      'Neither ATP nor NADPH'
    ],
    correctIndex: 1,
    explanation: 'Non-cyclic photophosphorylation produces both ATP and NADPH, and is also accompanied by the release of oxygen (from water splitting), unlike cyclic photophosphorylation.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-28',
    type: 'mcq',
    question: 'In non-cyclic photophosphorylation, the electrons lost from the reaction centre of Photosystem II are ultimately replaced by electrons derived from the:',
    options: [
      'Reduction of NADP+',
      'Breakdown of ATP',
      'Splitting of carbon dioxide molecules',
      'Splitting of water molecules'
    ],
    correctIndex: 3,
    explanation: 'The electrons lost by the PS II reaction centre upon light excitation are replenished by electrons derived from the splitting of water molecules.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-29',
    type: 'mcq',
    question: 'The splitting of water during the light reaction, associated with Photosystem II, occurs on which side of the thylakoid membrane?',
    options: [
      'The outer (stromal) side',
      'Neither side; water splitting occurs outside the thylakoid entirely',
      'Only on the outer chloroplast envelope membrane',
      'The inner (lumen) side'
    ],
    correctIndex: 3,
    explanation: 'The splitting of water, associated with PS II, occurs specifically on the inner (lumen) side of the thylakoid membrane.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-30',
    type: 'mcq',
    question: 'The splitting of a single water molecule during the light reaction yields two hydrogen ions, one molecule of oxygen (as ½O2), and:',
    options: [
      'Two molecules of ATP directly',
      'Two electrons',
      'Two molecules of NADPH directly',
      'One molecule of glucose'
    ],
    correctIndex: 1,
    explanation: 'The splitting of a water molecule yields two hydrogen ions (protons), half a molecule of oxygen, and two electrons.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-31',
    type: 'mcq',
    question: 'The splitting of water during the light reaction is the key process responsible for the evolution of:',
    options: [
      'Carbon dioxide gas during photosynthesis',
      'Nitrogen gas during photosynthesis',
      'Oxygen gas during photosynthesis',
      'Methane gas during photosynthesis'
    ],
    correctIndex: 2,
    explanation: 'The splitting of water, occurring in association with PS II, is the process directly responsible for the evolution of oxygen gas during photosynthesis.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-32',
    type: 'mcq',
    question: 'Cyclic photophosphorylation involves electron flow through only which photosystem?',
    options: [
      'Photosystem I (PS I) alone',
      'Photosystem II (PS II) alone',
      'Both Photosystem I and Photosystem II together',
      'Neither photosystem; it occurs independently of both'
    ],
    correctIndex: 0,
    explanation: 'Cyclic photophosphorylation involves only Photosystem I, with the electron cycling back within the same photosystem rather than proceeding to NADP+ reduction.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-33',
    type: 'mcq',
    question: 'Cyclic photophosphorylation typically occurs when only wavelengths of light beyond approximately 680 nm are available, since these wavelengths can activate only:',
    options: [
      'Photosystem II',
      'Both photosystems equally',
      'Photosystem I',
      'Neither photosystem'
    ],
    correctIndex: 2,
    explanation: 'Wavelengths of light beyond approximately 680 nm can activate only Photosystem I (and not Photosystem II), leading to cyclic electron flow under such conditions.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-34',
    type: 'mcq',
    question: 'Unlike non-cyclic photophosphorylation, cyclic photophosphorylation results in the production of only:',
    options: [
      'ATP, without any accompanying production of NADPH or evolution of oxygen',
      'NADPH, without any accompanying production of ATP',
      'Both ATP and NADPH, in equal proportions to non-cyclic phosphorylation',
      'Glucose directly, bypassing the need for ATP or NADPH'
    ],
    correctIndex: 0,
    explanation: 'Cyclic photophosphorylation produces only ATP, without generating NADPH or releasing oxygen, distinguishing it from the non-cyclic pathway.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-35',
    type: 'mcq',
    question: 'The chemiosmosis hypothesis explains the synthesis of ATP in the chloroplast based on the establishment of a:',
    options: [
      'Sodium ion gradient across the outer chloroplast envelope',
      'Glucose concentration gradient within the stroma',
      'Temperature gradient across the chloroplast',
      'Proton (H+) gradient across the thylakoid membrane'
    ],
    correctIndex: 3,
    explanation: 'The chemiosmosis hypothesis explains ATP synthesis in the chloroplast as being driven by a proton (H+) gradient established across the thylakoid membrane.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-36',
    type: 'mcq',
    question: 'The proton gradient across the thylakoid membrane, essential for chemiosmotic ATP synthesis, results in a higher concentration of protons within the:',
    options: [
      'Stroma, compared to the thylakoid lumen',
      'Thylakoid lumen, compared to the stroma',
      'Outer chloroplast envelope, compared to the inner envelope',
      'Nucleus, compared to the cytoplasm'
    ],
    correctIndex: 1,
    explanation: 'Due to processes like water splitting and electron transport, protons accumulate within the thylakoid lumen, establishing a higher proton concentration there compared to the stroma.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-37',
    type: 'mcq',
    question: 'The dissipation of the proton gradient across the thylakoid membrane, as protons flow back into the stroma, occurs specifically through the enzyme complex called:',
    options: [
      'RuBisCO',
      'ATP synthase',
      'PEP carboxylase',
      'Recombinase'
    ],
    correctIndex: 1,
    explanation: 'Protons flow back from the thylakoid lumen into the stroma specifically through the ATP synthase enzyme complex, driving ATP synthesis in the process.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-38',
    type: 'mcq',
    question: 'The ATP synthase enzyme complex is structurally composed of two main parts: a channel portion (F0) embedded within the membrane, and a protruding portion on the stromal side called:',
    options: [
      'F2, which has no catalytic function',
      'The Calvin complex',
      'The Kranz complex',
      'F1, which catalyses the actual synthesis of ATP'
    ],
    correctIndex: 3,
    explanation: 'The ATP synthase complex consists of the membrane-embedded F0 channel and the F1 portion, which protrudes into the stroma and catalyses the actual synthesis of ATP as protons flow through.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-39',
    type: 'mcq',
    question: 'According to the chemiosmosis hypothesis, the movement of protons through the F0-F1 ATP synthase complex, down their concentration gradient, releases sufficient energy to drive the:',
    options: [
      'Synthesis of ATP',
      'Synthesis of glucose directly, bypassing the Calvin cycle entirely',
      'Splitting of water molecules for the first time',
      'Breakdown of chlorophyll molecules'
    ],
    correctIndex: 0,
    explanation: 'The energy released as protons flow through the ATP synthase complex, down their electrochemical gradient, is harnessed to drive the synthesis of ATP.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-40',
    type: 'mcq',
    question: 'The biosynthetic (dark) phase of photosynthesis, during which CO2 is fixed into carbohydrates using the ATP and NADPH generated by the light reaction, primarily occurs within the:',
    options: [
      'Thylakoid lumen',
      'Mitochondrial matrix',
      'Stroma of the chloroplast',
      'Nucleus'
    ],
    correctIndex: 2,
    explanation: 'The dark (biosynthetic) reactions of photosynthesis, including the Calvin cycle, occur within the stroma of the chloroplast.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-41',
    type: 'mcq',
    question: 'The Calvin cycle can be broadly divided into three main stages: carboxylation, reduction, and:',
    options: [
      'Regeneration (of the CO2 acceptor molecule)',
      'Cyclic photophosphorylation',
      'Water splitting',
      'Terminalisation'
    ],
    correctIndex: 0,
    explanation: 'The Calvin cycle consists of three main stages: carboxylation (CO2 fixation), reduction, and regeneration of the CO2 acceptor molecule, RuBP.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-42',
    type: 'mcq',
    question: 'The very first step of the Calvin cycle, carboxylation, involves the fixation of CO2 into a stable organic intermediate, catalysed by the enzyme:',
    options: [
      'PEP carboxylase, exclusively',
      'ATP synthase',
      'Recombinase',
      'RuBisCO (Ribulose bisphosphate carboxylase-oxygenase)'
    ],
    correctIndex: 3,
    explanation: 'Carboxylation, the first step of the Calvin cycle, is catalysed by the enzyme RuBisCO, which fixes CO2 onto the acceptor molecule RuBP.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-43',
    type: 'mcq',
    question: 'RuBisCO, the enzyme catalysing the first step of the Calvin cycle, is widely considered to be:',
    options: [
      'An extremely rare enzyme, found only in a few specialised plant species',
      'The most abundant enzyme in the world',
      'An enzyme found exclusively in animal cells',
      'An enzyme with no biological significance'
    ],
    correctIndex: 1,
    explanation: 'RuBisCO is considered the most abundant enzyme on Earth, owing to the vast quantities of photosynthetic tissue that require its activity.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-44',
    type: 'mcq',
    question: 'During carboxylation, CO2 combines with the 5-carbon acceptor molecule, ribulose-1,5-bisphosphate (RuBP), to form two molecules of:',
    options: [
      'Glucose directly, a 6-carbon compound',
      'Oxaloacetic acid (OAA), a 4-carbon compound',
      '3-phosphoglyceric acid (3-PGA), a 3-carbon compound',
      'Pyruvic acid, a 3-carbon compound'
    ],
    correctIndex: 2,
    explanation: 'Carboxylation of RuBP by RuBisCO produces two molecules of 3-phosphoglyceric acid (3-PGA), the first stable product of the Calvin cycle.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-45',
    type: 'mcq',
    question: 'Since the first stable product of the Calvin cycle is the 3-carbon compound 3-PGA, this pathway is also known as the:',
    options: [
      'C4 pathway',
      'Hatch-Slack pathway exclusively',
      'C3 pathway (or C3 cycle)',
      'Kranz pathway'
    ],
    correctIndex: 2,
    explanation: 'Because the first stable product formed is the 3-carbon compound 3-PGA, the Calvin cycle is also referred to as the C3 pathway.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-46',
    type: 'mcq',
    question: 'During the reduction stage of the Calvin cycle, 3-PGA is reduced (using ATP and NADPH from the light reaction) to form:',
    options: [
      'RuBP directly',
      'G3P (glyceraldehyde-3-phosphate)',
      'OAA (oxaloacetic acid)',
      'Malic acid'
    ],
    correctIndex: 1,
    explanation: 'During the reduction stage, 3-PGA is converted into G3P (glyceraldehyde-3-phosphate) using the energy and reducing power supplied by ATP and NADPH.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-47',
    type: 'mcq',
    question: 'The final stage of the Calvin cycle, regeneration, ensures the continuity of the cycle by regenerating the CO2 acceptor molecule:',
    options: [
      '3-PGA',
      'PEP (phosphoenolpyruvate)',
      'OAA (oxaloacetic acid)',
      'RuBP (ribulose-1,5-bisphosphate)'
    ],
    correctIndex: 3,
    explanation: 'The regeneration stage of the Calvin cycle regenerates RuBP, the original CO2 acceptor molecule, ensuring the cycle can continue indefinitely.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-48',
    type: 'mcq',
    question: 'The regeneration stage of the Calvin cycle, in addition to producing RuBP, also requires an additional input of:',
    options: [
      'ATP',
      'NADPH exclusively, with no ATP required',
      'Molecular oxygen',
      'Water, exclusively for this stage'
    ],
    correctIndex: 0,
    explanation: 'In addition to the ATP and NADPH consumed during the reduction stage, the regeneration stage of the Calvin cycle also requires additional ATP to regenerate RuBP.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-49',
    type: 'mcq',
    question: 'For the net synthesis of one molecule of glucose (a 6-carbon sugar), the Calvin cycle must operate a total of how many times, fixing a corresponding number of CO2 molecules?',
    options: [
      'Two times',
      'Twelve times',
      'One time only',
      'Six times (fixing six CO2 molecules)'
    ],
    correctIndex: 3,
    explanation: 'Since glucose is a six-carbon sugar and each turn of the Calvin cycle fixes one molecule of CO2, six turns of the cycle (fixing six CO2 molecules) are required for the net synthesis of one glucose molecule.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-50',
    type: 'mcq',
    question: 'The complete synthesis of one molecule of glucose via the Calvin cycle requires a total input of how many ATP molecules?',
    options: [
      '18 ATP molecules',
      '6 ATP molecules',
      '12 ATP molecules',
      '36 ATP molecules'
    ],
    correctIndex: 0,
    explanation: 'The Calvin cycle stoichiometry shows that a total of 18 ATP molecules are required for the net synthesis of one glucose molecule.',
    difficulty: 'hard'
  },
  {
    id: 'photosynthesis-in-higher-plants-51',
    type: 'mcq',
    question: 'The complete synthesis of one molecule of glucose via the Calvin cycle requires a total input of how many NADPH molecules?',
    options: [
      '18 NADPH molecules',
      '6 NADPH molecules',
      '12 NADPH molecules',
      '24 NADPH molecules'
    ],
    correctIndex: 2,
    explanation: 'The Calvin cycle stoichiometry shows that a total of 12 NADPH molecules are required for the net synthesis of one glucose molecule.',
    difficulty: 'hard'
  },
  {
    id: 'photosynthesis-in-higher-plants-52',
    type: 'mcq',
    question: 'The C4 pathway (Hatch-Slack pathway) of carbon fixation is typically found in plants adapted to tropical regions with high temperature and light intensity, such as:',
    options: [
      'Wheat, rice, and most temperate crop plants',
      'Maize, sugarcane, and sorghum',
      'Mosses and ferns exclusively',
      'All gymnosperms, without exception'
    ],
    correctIndex: 1,
    explanation: 'C4 plants, such as maize, sugarcane, and sorghum, are typically well adapted to tropical regions characterised by high temperature and light intensity.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-53',
    type: 'mcq',
    question: 'C4 plants characteristically show a specialised leaf anatomy, in which bundle sheath cells are arranged in a distinct wreath-like (ring) pattern around the vascular bundles, known as:',
    options: [
      'Kranz anatomy',
      'Palisade anatomy',
      'Reticulate anatomy',
      'Isobilateral anatomy'
    ],
    correctIndex: 0,
    explanation: 'Kranz anatomy, characterised by a wreath-like arrangement of bundle sheath cells around the vascular bundles, is a defining anatomical feature of C4 plants.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-54',
    type: 'mcq',
    question: 'In C4 plants, the bundle sheath cells are characteristically large, contain numerous chloroplasts, and possess thick walls that are:',
    options: [
      'Highly permeable to gaseous exchange, more so than mesophyll cell walls',
      'Composed entirely of chitin, rather than cellulose',
      'Impervious to gaseous exchange',
      'Completely absent, allowing free gas movement'
    ],
    correctIndex: 2,
    explanation: 'The bundle sheath cells of C4 plants have thick walls that are impervious to gaseous exchange, an adaptation that helps maintain a high concentration of CO2 for the Calvin cycle within these cells.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-55',
    type: 'mcq',
    question: 'C4 plants show a characteristic dimorphism in their chloroplasts, with mesophyll cell chloroplasts possessing well-developed grana, while bundle sheath cell chloroplasts are typically:',
    options: [
      'Even more granal than mesophyll chloroplasts',
      'Agranal, or possess only poorly developed grana',
      'Completely identical in every respect to mesophyll chloroplasts',
      'Entirely absent, with no chloroplasts in bundle sheath cells'
    ],
    correctIndex: 1,
    explanation: 'C4 plants exhibit dimorphic chloroplasts: mesophyll chloroplasts have well-developed grana, while bundle sheath chloroplasts are typically agranal or have only poorly developed grana.',
    difficulty: 'hard'
  },
  {
    id: 'photosynthesis-in-higher-plants-56',
    type: 'mcq',
    question: 'In the C4 pathway, the primary carbon-fixing enzyme in the mesophyll cells, which fixes CO2 onto the 3-carbon acceptor PEP, is:',
    options: [
      'RuBisCO, exclusively',
      'ATP synthase',
      'Recombinase',
      'PEP carboxylase (PEPcase)'
    ],
    correctIndex: 3,
    explanation: 'PEP carboxylase (PEPcase) is the enzyme responsible for the initial fixation of CO2 in the mesophyll cells of C4 plants.',
    difficulty: 'easy'
  },
  {
    id: 'photosynthesis-in-higher-plants-57',
    type: 'mcq',
    question: 'Compared to RuBisCO, the enzyme PEP carboxylase (PEPcase) is generally considered to have:',
    options: [
      'A much lower affinity for CO2, functioning poorly at any concentration',
      'No affinity whatsoever for CO2, since it fixes only bicarbonate ions',
      'Exactly the same affinity for CO2 as RuBisCO, with no meaningful difference',
      'A much higher affinity for CO2, allowing it to fix CO2 efficiently even at low concentrations'
    ],
    correctIndex: 3,
    explanation: 'PEP carboxylase has a significantly higher affinity for CO2 compared to RuBisCO, enabling efficient CO2 fixation even under low CO2 concentrations.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-58',
    type: 'mcq',
    question: 'In the C4 pathway, PEP carboxylase catalyses the fixation of CO2 onto PEP (phosphoenolpyruvate), forming the first stable product of the C4 pathway, a 4-carbon compound called:',
    options: [
      '3-Phosphoglyceric acid (3-PGA)',
      'Oxaloacetic acid (OAA)',
      'Ribulose bisphosphate (RuBP)',
      'Glyceraldehyde-3-phosphate (G3P)'
    ],
    correctIndex: 1,
    explanation: 'The first stable product of CO2 fixation in the C4 pathway is the 4-carbon compound oxaloacetic acid (OAA), giving the pathway its name.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-59',
    type: 'mcq',
    question: 'In C4 plants, oxaloacetic acid (OAA), formed in mesophyll cells, is typically converted into malic acid or aspartic acid before being transported to the:',
    options: [
      'Bundle sheath cells',
      'Roots, exclusively',
      'Xylem vessels directly, bypassing the bundle sheath cells',
      'Stomatal guard cells'
    ],
    correctIndex: 0,
    explanation: 'The 4-carbon compounds (malic acid or aspartic acid) formed in mesophyll cells are transported into the bundle sheath cells, where CO2 is subsequently released for the Calvin cycle.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-60',
    type: 'mcq',
    question: 'Once transported into the bundle sheath cells, the 4-carbon acid is decarboxylated, releasing CO2 (which then enters the Calvin cycle via RuBisCO) and regenerating:',
    options: [
      'Glucose directly, completing the pathway without further steps',
      '3-PGA, which then bypasses the Calvin cycle entirely',
      'Pyruvic acid, which returns to the mesophyll cell to regenerate PEP',
      'Oxygen gas, which is then released to the atmosphere'
    ],
    correctIndex: 2,
    explanation: 'Decarboxylation of the 4-carbon acid in the bundle sheath cells releases CO2 (for the Calvin cycle) and produces pyruvic acid, which is transported back to the mesophyll cell to regenerate PEP, completing the C4 cycle.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-61',
    type: 'mcq',
    question: 'The overall mechanism of the C4 pathway effectively functions as a biochemical \'CO2 pump,\' primarily serving to:',
    options: [
      'Remove all CO2 from the plant entirely',
      'Concentrate CO2 at the site of RuBisCO activity within the bundle sheath cells',
      'Dilute CO2 concentration throughout the leaf, reducing photosynthetic efficiency',
      'Convert all fixed carbon directly into oxygen gas'
    ],
    correctIndex: 1,
    explanation: 'The C4 pathway functions as a CO2-concentrating mechanism, effectively pumping and concentrating CO2 at the site of RuBisCO activity within the bundle sheath cells, thereby enhancing the efficiency of the Calvin cycle.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-62',
    type: 'mcq',
    question: 'Photorespiration occurs when the enzyme RuBisCO, which normally catalyses carboxylation, instead acts as an oxygenase, a condition favoured by:',
    options: [
      'High carbon dioxide concentration and low oxygen concentration',
      'Complete darkness, with no light present at all',
      'Extremely low temperatures, near freezing',
      'High oxygen concentration and low carbon dioxide concentration'
    ],
    correctIndex: 3,
    explanation: 'Photorespiration occurs under conditions of relatively high oxygen concentration and low carbon dioxide concentration, which favour the oxygenase activity of RuBisCO over its carboxylase activity.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-63',
    type: 'mcq',
    question: 'When RuBisCO acts as an oxygenase during photorespiration, RuBP reacts with oxygen to form one molecule of PGA (3-carbon) and one molecule of a 2-carbon compound called:',
    options: [
      'Oxaloacetic acid (a 4-carbon compound)',
      'Malic acid (a 4-carbon compound)',
      'Phosphoglycolate',
      'Glucose (a 6-carbon compound)'
    ],
    correctIndex: 2,
    explanation: 'The oxygenase activity of RuBisCO during photorespiration produces one molecule of PGA and one molecule of the 2-carbon compound phosphoglycolate.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-64',
    type: 'mcq',
    question: 'Unlike the normal Calvin cycle, photorespiration does NOT result in the synthesis of sugars, and additionally does not produce any:',
    options: [
      'ATP or NADPH',
      'Carbon dioxide',
      'Oxygen, as a byproduct of the light reaction',
      'Water, since none is consumed or released'
    ],
    correctIndex: 0,
    explanation: 'Photorespiration is considered a wasteful process because, unlike the Calvin cycle, it does not result in sugar synthesis and does not generate any ATP or NADPH.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-65',
    type: 'mcq',
    question: 'During photorespiration, the metabolism of phosphoglycolate ultimately results in the release of:',
    options: [
      'Additional oxygen gas, further enhancing photosynthesis',
      'Additional glucose, increasing overall sugar yield',
      'Carbon dioxide, with a net loss of previously fixed carbon',
      'Water, with no involvement of carbon at all'
    ],
    correctIndex: 2,
    explanation: 'The metabolism of phosphoglycolate during photorespiration ultimately releases CO2, representing a net loss of previously fixed carbon from the plant.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-66',
    type: 'mcq',
    question: 'Photorespiration is generally considered a wasteful process for the plant mainly because it:',
    options: [
      'Consumes ATP and releases previously fixed CO2, without producing any useful energy currency',
      'Produces excessive amounts of usable ATP, more than normal respiration',
      'Enhances overall photosynthetic sugar production significantly',
      'Has absolutely no metabolic cost to the plant whatsoever'
    ],
    correctIndex: 0,
    explanation: 'Photorespiration is considered wasteful because it consumes ATP and results in the loss of previously fixed carbon (as CO2), without yielding any net useful energy for the plant, unlike normal respiration.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-67',
    type: 'mcq',
    question: 'Photorespiration is a significant concern primarily in which type of plants, since their RuBisCO enzyme is directly exposed to atmospheric oxygen concentrations?',
    options: [
      'C4 plants exclusively',
      'C3 plants',
      'Only aquatic plants',
      'Only fungi'
    ],
    correctIndex: 1,
    explanation: 'Photorespiration is a particularly significant issue in C3 plants, since their RuBisCO enzyme operates directly within mesophyll cells, exposed to normal atmospheric oxygen levels.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-68',
    type: 'mcq',
    question: 'C4 plants largely avoid the wasteful process of photorespiration mainly because their unique CO2-concentrating mechanism (via Kranz anatomy) ensures that:',
    options: [
      'RuBisCO is completely absent in all C4 plants',
      'Oxygen is entirely excluded from the entire plant body',
      'Photosynthesis does not occur at all in C4 plants',
      'CO2 concentration remains consistently high at the site of RuBisCO activity in bundle sheath cells, minimising the enzyme\'s oxygenase activity'
    ],
    correctIndex: 3,
    explanation: 'The CO2-concentrating mechanism of C4 plants ensures a consistently high CO2 concentration at the site of RuBisCO activity within bundle sheath cells, which favours the carboxylase activity of RuBisCO and largely suppresses its wasteful oxygenase activity (photorespiration).',
    difficulty: 'hard'
  },
  {
    id: 'photosynthesis-in-higher-plants-69',
    type: 'mcq',
    question: 'Compared to C3 plants, C4 plants generally show which of the following advantages under hot, dry, tropical conditions?',
    options: [
      'Significantly lower overall biomass productivity',
      'A complete inability to fix any atmospheric CO2',
      'Total dependence on artificial light sources for photosynthesis',
      'Greater efficiency in the use of water and nitrogen, along with minimal loss of carbon via photorespiration'
    ],
    correctIndex: 3,
    explanation: 'C4 plants generally show greater efficiency in water and nitrogen use, along with minimal photorespiratory carbon loss, giving them an advantage under hot, dry, tropical conditions.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-70',
    type: 'mcq',
    question: 'C4 plants generally require less RuBisCO enzyme compared to C3 plants for efficient photosynthesis mainly because:',
    options: [
      'C4 plants do not use RuBisCO at all, at any stage of the pathway',
      'RuBisCO is far more efficient in C4 plants than in any other enzyme system',
      'The CO2-concentrating mechanism ensures a consistently high local CO2 concentration at the site of RuBisCO activity',
      'C4 plants have completely eliminated the Calvin cycle from their metabolism'
    ],
    correctIndex: 2,
    explanation: 'Because the C4 pathway maintains a high, concentrated level of CO2 at the site of RuBisCO activity, C4 plants can achieve efficient carboxylation with comparatively less RuBisCO enzyme than would otherwise be required.',
    difficulty: 'hard'
  },
  {
    id: 'photosynthesis-in-higher-plants-71',
    type: 'mcq',
    question: 'The overall biomass productivity of C4 plants, under favourable tropical growing conditions, is generally observed to be:',
    options: [
      'Higher than that of typical C3 plants',
      'Lower than that of typical C3 plants, under all conditions',
      'Exactly identical to that of C3 plants, with no meaningful difference',
      'Impossible to measure or compare in any way'
    ],
    correctIndex: 0,
    explanation: 'Under favourable tropical conditions, C4 plants generally exhibit higher overall biomass productivity compared to typical C3 plants, owing to their more efficient carbon-fixing mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-72',
    type: 'mcq',
    question: 'Blackman\'s Law of Limiting Factors states that when a process is conditioned (influenced) by several separate factors, the rate of that process is limited by the:',
    options: [
      'Sum total of all factors combined, regardless of their individual values',
      'Factor that is nearest to its minimal (limiting) value',
      'Factor that is present in the greatest excess',
      'Average value of all the contributing factors'
    ],
    correctIndex: 1,
    explanation: 'Blackman\'s Law of Limiting Factors states that the overall rate of a multi-factor process is governed by whichever individual factor is closest to its minimal (most limiting) value.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-73',
    type: 'mcq',
    question: 'At relatively low light intensities, the rate of photosynthesis generally shows which relationship with increasing light intensity?',
    options: [
      'A roughly linear increase',
      'A steady, immediate decrease',
      'No relationship whatsoever',
      'An immediate and complete saturation, with no further change possible'
    ],
    correctIndex: 0,
    explanation: 'At low light intensities, the rate of photosynthesis generally increases roughly linearly (proportionally) with increasing light intensity, since light itself is the limiting factor at this stage.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-74',
    type: 'mcq',
    question: 'At higher light intensities, the rate of photosynthesis eventually reaches a plateau (saturation point), beyond which further increases in light intensity have little effect, since the rate is now limited by:',
    options: [
      'Light intensity alone, indefinitely, with no true saturation ever occurring',
      'Other factors, such as CO2 concentration or temperature',
      'The complete absence of chlorophyll',
      'The total elimination of all enzymes involved'
    ],
    correctIndex: 1,
    explanation: 'Once light ceases to be the limiting factor at higher intensities, the photosynthetic rate plateaus, becoming instead limited by other factors like CO2 concentration or temperature.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-75',
    type: 'mcq',
    question: 'Very high light intensities can potentially have a detrimental effect on photosynthesis, since they may cause:',
    options: [
      'A permanent and indefinite increase in the photosynthetic rate, with no negative consequences',
      'Complete cessation of transpiration, with no other effects',
      'Immediate conversion of all chlorophyll into carotenoids',
      'Damage to chlorophyll molecules, decreasing the overall rate of photosynthesis'
    ],
    correctIndex: 3,
    explanation: 'Excessively high light intensities can damage chlorophyll molecules, which can actually decrease the rate of photosynthesis rather than continuing to enhance it.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-76',
    type: 'mcq',
    question: 'Carbon dioxide concentration is generally considered a major limiting factor for photosynthesis, and increasing CO2 concentration up to approximately 0.05% (higher than the normal atmospheric level) typically results in:',
    options: [
      'An immediate and complete cessation of photosynthesis in all plants',
      'No change whatsoever in the photosynthetic rate of any plant',
      'An enhancement of the photosynthetic rate in C3 plants',
      'A decrease in the rate of photosynthesis in all plants'
    ],
    correctIndex: 2,
    explanation: 'Since normal atmospheric CO2 levels (around 0.03-0.04%) are often below saturating levels, increasing CO2 concentration up to about 0.05% typically enhances the photosynthetic rate, particularly in C3 plants.',
    difficulty: 'medium'
  },
  {
    id: 'photosynthesis-in-higher-plants-77',
    type: 'mcq',
    question: 'Compared to C3 plants, C4 plants generally show a photosynthetic response to increasing CO2 concentration that:',
    options: [
      'Continues to increase indefinitely, with no saturation point at all',
      'Is completely identical to that observed in C3 plants, with no meaningful difference',
      'Saturates at a much lower CO2 concentration, since C4 plants are already relatively efficient at low CO2 levels',
      'Shows an inverse (decreasing) relationship with increasing CO2 concentration'
    ],
    correctIndex: 2,
    explanation: 'Because C4 plants already possess an efficient CO2-concentrating mechanism, their photosynthetic response to increasing atmospheric CO2 tends to saturate at a comparatively lower CO2 concentration than that observed in C3 plants.',
    difficulty: 'hard'
  },
  {
    id: 'photosynthesis-in-higher-plants-78',
    type: 'mcq',
    question: 'Water availability affects the rate of photosynthesis primarily by influencing stomatal opening; under water stress conditions, stomata tend to close, which in turn:',
    options: [
      'Increases the availability of CO2 for photosynthesis significantly',
      'Has no effect whatsoever on CO2 availability',
      'Directly increases the rate of the light reaction, independent of CO2',
      'Reduces the availability of CO2 for photosynthesis'
    ],
    correctIndex: 3,
    explanation: 'Under water stress, the closure of stomata (to conserve water) reduces the availability of CO2 to the leaf, thereby limiting the rate of photosynthesis.',
    difficulty: 'medium'
  },
];

export default questions;