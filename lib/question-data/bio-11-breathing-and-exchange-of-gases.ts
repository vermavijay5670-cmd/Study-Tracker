import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Breathing and Exchange of Gases
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'breathing-and-exchange-of-gases-1',
    type: 'mcq',
    question: 'In many lower invertebrates, such as sponges and coelenterates, exchange of gases occurs by:',
    options: [
      'Simple diffusion over the entire body surface',
      'Specialised gills',
      'A tracheal tube system',
      'Lungs'
    ],
    correctIndex: 0,
    explanation: 'Simple organisms like sponges and coelenterates lack specialised respiratory organs and exchange gases by simple diffusion directly over their body surface.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-2',
    type: 'mcq',
    question: 'Earthworms carry out exchange of gases mainly through their:',
    options: [
      'Gills',
      'Moist cuticle',
      'Tracheal tubes',
      'Lungs'
    ],
    correctIndex: 1,
    explanation: 'Earthworms lack specialised respiratory organs and exchange gases through their moist, permeable cuticle.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-3',
    type: 'mcq',
    question: 'In insects, atmospheric air is transported within the body through a network of tubes called the tracheal system, which opens to the exterior through openings called:',
    options: [
      'Nostrils',
      'Spiracles',
      'Alveoli',
      'Gills'
    ],
    correctIndex: 1,
    explanation: 'Insects possess a tracheal tube system for internal gas transport, and this system communicates with the outside atmosphere through openings called spiracles.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-4',
    type: 'mcq',
    question: 'Fish and other aquatic organisms primarily use which organ for the exchange of dissolved gases in water?',
    options: [
      'Lungs',
      'Skin only',
      'Gills, which are highly vascularised structures',
      'Tracheal tubes'
    ],
    correctIndex: 2,
    explanation: 'Fish and many other aquatic animals use gills, which are highly vascularised structures well-suited for extracting dissolved oxygen from water.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-5',
    type: 'mcq',
    question: 'Amphibians use which of the following as accessory sites of respiration, in addition to their lungs?',
    options: [
      'Gills',
      'Their moist skin and buccal (mouth) cavity lining',
      'Tracheal tubes',
      'Body surface diffusion only, without any lungs'
    ],
    correctIndex: 1,
    explanation: 'Amphibians can exchange gases through their moist skin and the lining of the buccal cavity, in addition to using lungs.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-6',
    type: 'mcq',
    question: 'Reptiles, birds, and mammals, being fully terrestrial in their respiratory needs, primarily rely on which organs for gas exchange?',
    options: [
      'Gills',
      'Moist skin',
      'Lungs',
      'Tracheal tubes'
    ],
    correctIndex: 2,
    explanation: 'Reptiles, birds, and mammals rely on lungs as their primary organs for gas exchange.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-7',
    type: 'mcq',
    question: 'The process by which an organism exchanges O2 from the atmosphere with CO2 produced by its cells is generally referred to as:',
    options: [
      'Cellular respiration only',
      'Breathing (or external/pulmonary respiration)',
      'Photosynthesis',
      'Excretion'
    ],
    correctIndex: 1,
    explanation: 'Breathing (external respiration) is the mechanical process of taking in oxygen from the atmosphere and releasing carbon dioxide, distinct from cellular respiration (the biochemical oxidation of food within cells).',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-8',
    type: 'mcq',
    question: 'In the human respiratory system, the correct sequence of the air passage from the external nostrils to the lungs is:',
    options: [
      'Nasal passage → pharynx → larynx → trachea → bronchi → bronchioles → alveoli',
      'Pharynx → nasal passage → trachea → larynx → alveoli → bronchi',
      'Larynx → nasal passage → pharynx → alveoli → trachea → bronchi',
      'Trachea → pharynx → larynx → nasal passage → bronchi → alveoli'
    ],
    correctIndex: 0,
    explanation: 'Air passes through the human respiratory system in the sequence: external nostrils → nasal passage → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-9',
    type: 'mcq',
    question: 'The pharynx, in the human respiratory system, is significant because it serves as:',
    options: [
      'The site of gas exchange',
      'A common passage for both food and air',
      'The primary site of sound production',
      'The site of oxygen-haemoglobin binding'
    ],
    correctIndex: 1,
    explanation: 'The pharynx is a common passageway shared by both the digestive and respiratory tracts, used for the passage of food as well as air.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-10',
    type: 'mcq',
    question: 'The larynx, often called the "sound box" or "voice box," is significant in the respiratory tract because it:',
    options: [
      'Filters dust particles from inhaled air',
      'Contains the vocal cords, and is responsible for sound production',
      'Is the primary site of gas exchange',
      'Divides into two bronchi'
    ],
    correctIndex: 1,
    explanation: 'The larynx houses the vocal cords and is responsible for sound production, hence its common name, the voice box.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-11',
    type: 'mcq',
    question: 'The trachea (windpipe) is structurally supported by a series of:',
    options: [
      'Complete bony rings, fully encircling the tube',
      'C-shaped cartilaginous rings, which prevent the trachea from collapsing',
      'Muscular sphincters only',
      'A single, continuous piece of solid bone'
    ],
    correctIndex: 1,
    explanation: 'The trachea is supported by a series of C-shaped cartilaginous rings, providing structural rigidity while preventing collapse of the airway, without obstructing the passage of food through the adjacent oesophagus.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-12',
    type: 'mcq',
    question: 'The nasal chamber, lined with mucus and fine hairs, primarily helps to:',
    options: [
      'Directly exchange gases with blood',
      'Filter dust particles, and moisten and warm the incoming air',
      'Produce sound',
      'Store air for later use'
    ],
    correctIndex: 1,
    explanation: 'The mucus and hair lining of the nasal chamber help filter dust and foreign particles, while also moistening and warming the inhaled air before it proceeds further into the respiratory tract.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-13',
    type: 'mcq',
    question: 'The part of the human respiratory tract extending from the external nostrils up to the terminal bronchioles, whose main function is to transport air (without gas exchange), is called the:',
    options: [
      'Respiratory (exchange) part',
      'Conducting part',
      'Alveolar part',
      'Pleural part'
    ],
    correctIndex: 1,
    explanation: 'The conducting part of the respiratory tract, from the nostrils to the terminal bronchioles, functions to transport atmospheric air into the lungs, clearing it of foreign particles and adjusting its humidity and temperature.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-14',
    type: 'mcq',
    question: 'The alveoli and their ducts, which represent the actual sites of gas exchange, together constitute the:',
    options: [
      'Conducting part of the respiratory tract',
      'Respiratory (exchange) part of the respiratory tract',
      'Pleural cavity',
      'Larynx'
    ],
    correctIndex: 1,
    explanation: 'The alveoli and alveolar ducts constitute the respiratory (or exchange) part of the tract, where actual diffusion of O2 and CO2 takes place.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-15',
    type: 'mcq',
    question: 'Alveoli, the balloon-like terminal structures of the respiratory tree, are ideally suited for gas exchange because they:',
    options: [
      'Have thick, multi-layered walls and minimal blood supply',
      'Have very thin, squamous epithelial walls and are surrounded by an extensive network of blood capillaries',
      'Are completely impermeable to gases',
      'Contain cartilage rings for support'
    ],
    correctIndex: 1,
    explanation: 'Alveoli have extremely thin (squamous epithelial) walls and are surrounded by dense capillary networks, both features that facilitate efficient diffusion of gases across a large surface area.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-16',
    type: 'mcq',
    question: 'The human right lung has three lobes, while the left lung has only two lobes. This asymmetry exists mainly to accommodate the space occupied by the:',
    options: [
      'Liver',
      'Heart, which is positioned slightly to the left side of the thoracic cavity',
      'Stomach',
      'Kidneys'
    ],
    correctIndex: 1,
    explanation: 'The left lung has only two lobes (compared to three in the right lung) to accommodate the space taken up by the heart, which lies slightly to the left in the thoracic cavity.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-17',
    type: 'mcq',
    question: 'Each lung is enclosed within a double-layered membrane called the:',
    options: [
      'Peritoneum',
      'Pleura',
      'Meninges',
      'Pericardium'
    ],
    correctIndex: 1,
    explanation: 'The pleura is the double-layered membrane that encloses and protects each lung.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-18',
    type: 'mcq',
    question: 'The space between the two pleural layers surrounding the lung is filled with a fluid whose primary function is to:',
    options: [
      'Transport oxygen directly to the lung tissue',
      'Reduce friction on the lung surface during breathing movements',
      'Produce mucus for the respiratory tract',
      'Serve as a store of nutrients for the lungs'
    ],
    correctIndex: 1,
    explanation: 'Pleural fluid, present between the two pleural membranes, reduces friction on the lung surface as it expands and contracts during breathing.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-19',
    type: 'mcq',
    question: 'Pulmonary ventilation, or breathing, involves two main mechanical processes, called:',
    options: [
      'Diffusion and osmosis',
      'Inspiration (drawing air in) and expiration (releasing air out)',
      'Absorption and secretion',
      'Filtration and reabsorption'
    ],
    correctIndex: 1,
    explanation: 'Pulmonary ventilation consists of inspiration, which draws atmospheric air into the lungs, and expiration, which releases alveolar air out into the atmosphere.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-20',
    type: 'mcq',
    question: 'During normal quiet inspiration, the dome-shaped diaphragm:',
    options: [
      'Relaxes and moves further upward into the thoracic cavity',
      'Contracts and becomes flatter, increasing the volume of the thoracic cavity',
      'Remains completely unaffected during breathing',
      'Contracts and becomes more dome-shaped, decreasing thoracic volume'
    ],
    correctIndex: 1,
    explanation: 'During inspiration, the diaphragm contracts and flattens, increasing the volume of the thoracic cavity along its antero-posterior axis.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-21',
    type: 'mcq',
    question: 'During inspiration, contraction of the external intercostal muscles causes the ribs and sternum to:',
    options: [
      'Move downward and inward, decreasing thoracic volume',
      'Move upward and outward, increasing thoracic volume along the dorso-ventral axis',
      'Remain completely stationary',
      'Rotate perpendicular to the spine'
    ],
    correctIndex: 1,
    explanation: 'Contraction of the external intercostal muscles lifts the ribs and sternum upward and outward, increasing thoracic cavity volume along the dorso-ventral axis during inspiration.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-22',
    type: 'mcq',
    question: 'The increase in thoracic cavity volume during inspiration causes the pulmonary (lung) pressure to become:',
    options: [
      'Higher than atmospheric pressure, pushing air out',
      'Lower than atmospheric pressure, causing air to rush into the lungs',
      'Exactly equal to atmospheric pressure at all times',
      'Unrelated to atmospheric pressure'
    ],
    correctIndex: 1,
    explanation: 'As thoracic volume increases during inspiration, pulmonary pressure drops below atmospheric pressure, creating a pressure gradient that draws air into the lungs.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-23',
    type: 'mcq',
    question: 'Unlike inspiration, normal quiet expiration is generally considered to be:',
    options: [
      'An active process requiring significant muscular contraction throughout',
      'A largely passive process, resulting mainly from the relaxation of the diaphragm and intercostal muscles',
      'Completely independent of muscular movement of any kind',
      'A process that increases thoracic cavity volume'
    ],
    correctIndex: 1,
    explanation: 'Normal expiration is largely a passive process, occurring as the diaphragm and intercostal muscles relax, allowing the thoracic cavity and lungs to return to their original, smaller volume.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-24',
    type: 'mcq',
    question: 'During expiration, the decrease in thoracic and pulmonary volume causes the pulmonary pressure to become:',
    options: [
      'Lower than atmospheric pressure',
      'Slightly higher than atmospheric pressure, pushing air out of the lungs',
      'Exactly zero',
      'Completely unrelated to lung volume'
    ],
    correctIndex: 1,
    explanation: 'As thoracic and pulmonary volume decrease during expiration, pulmonary pressure rises slightly above atmospheric pressure, causing air to be pushed out of the lungs.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-25',
    type: 'mcq',
    question: 'The basic mechanism that drives human breathing is essentially the creation of a:',
    options: [
      'Temperature gradient between the lungs and atmosphere',
      'Pressure gradient between the lungs and the atmosphere',
      'Concentration gradient of glucose',
      'pH gradient in the blood alone'
    ],
    correctIndex: 1,
    explanation: 'The fundamental mechanism of breathing relies on creating a pressure gradient between the pulmonary cavity and the atmosphere, driving air flow in the appropriate direction.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-26',
    type: 'mcq',
    question: 'The normal breathing rate in a resting healthy adult human is approximately:',
    options: [
      '2-4 breaths per minute',
      '12-16 breaths per minute',
      '40-50 breaths per minute',
      '100-120 breaths per minute'
    ],
    correctIndex: 1,
    explanation: 'A healthy resting adult human typically has a normal breathing rate of about 12-16 breaths per minute.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-27',
    type: 'mcq',
    question: 'During forceful breathing (e.g., during exercise), in addition to the diaphragm and external intercostal muscles, additional muscles are also recruited to assist with:',
    options: [
      'Only the process of digestion',
      'Forced inspiration and forced expiration, involving muscles such as the internal intercostals and abdominal muscles',
      'Blood clotting',
      'Vision'
    ],
    correctIndex: 1,
    explanation: 'During forceful breathing, additional muscles (like the internal intercostal and abdominal muscles for forced expiration) are recruited beyond the muscles used in normal, quiet breathing.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-28',
    type: 'mcq',
    question: 'Tidal Volume (TV) is defined as the:',
    options: [
      'Maximum volume of air that can be forcibly exhaled',
      'Volume of air inspired or expired during a single normal, quiet breath',
      'Volume of air remaining in the lungs even after maximum forced expiration',
      'Total capacity of the lungs'
    ],
    correctIndex: 1,
    explanation: 'Tidal Volume refers to the volume of air inhaled or exhaled during a single, normal (quiet) breathing cycle, approximately 500 mL in an average healthy adult.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-29',
    type: 'mcq',
    question: 'The approximate Tidal Volume (TV) in a healthy adult human, during normal breathing, is about:',
    options: [
      '50 mL',
      '500 mL',
      '2500 mL',
      '5000 mL'
    ],
    correctIndex: 1,
    explanation: 'Tidal Volume is approximately 500 mL in a normal, healthy adult human during quiet breathing.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-30',
    type: 'mcq',
    question: 'Inspiratory Reserve Volume (IRV) is defined as the:',
    options: [
      'Volume of air inhaled during normal breathing',
      'Additional volume of air that can be forcibly inspired beyond the normal tidal inspiration',
      'Volume of air remaining after maximum forced expiration',
      'Volume of air that cannot be exhaled under any condition'
    ],
    correctIndex: 1,
    explanation: 'Inspiratory Reserve Volume is the additional volume of air a person can forcibly inhale after a normal, tidal inspiration, typically around 2500-3000 mL.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-31',
    type: 'mcq',
    question: 'Expiratory Reserve Volume (ERV) is defined as the:',
    options: [
      'Volume of air exhaled during normal breathing',
      'Additional volume of air that can be forcibly expired after a normal tidal expiration',
      'Volume of air remaining in the lungs even after maximal forced expiration',
      'Total volume of air the lungs can hold'
    ],
    correctIndex: 1,
    explanation: 'Expiratory Reserve Volume is the additional volume of air that can be forcibly exhaled after a normal, tidal expiration, typically around 1000-1100 mL.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-32',
    type: 'mcq',
    question: 'Residual Volume (RV) is defined as the:',
    options: [
      'Volume of air inhaled during normal breathing',
      'Volume of air that remains in the lungs even after the most forceful possible expiration',
      'Maximum volume of air that can be inhaled',
      'Additional volume that can be exhaled after normal breathing'
    ],
    correctIndex: 1,
    explanation: 'Residual Volume is the volume of air that always remains in the lungs, even after the most forceful expiration possible, preventing the lungs from ever completely collapsing.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-33',
    type: 'mcq',
    question: 'Inspiratory Capacity (IC) is calculated as the sum of:',
    options: [
      'Tidal Volume (TV) and Expiratory Reserve Volume (ERV)',
      'Tidal Volume (TV) and Inspiratory Reserve Volume (IRV)',
      'Residual Volume (RV) and Expiratory Reserve Volume (ERV)',
      'Vital Capacity (VC) and Residual Volume (RV)'
    ],
    correctIndex: 1,
    explanation: 'Inspiratory Capacity is defined as TV + IRV, representing the total volume of air a person can inspire after a normal tidal expiration.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-34',
    type: 'mcq',
    question: 'Expiratory Capacity (EC) is calculated as the sum of:',
    options: [
      'Tidal Volume (TV) and Expiratory Reserve Volume (ERV)',
      'Tidal Volume (TV) and Inspiratory Reserve Volume (IRV)',
      'Residual Volume (RV) and Inspiratory Reserve Volume (IRV)',
      'Vital Capacity (VC) and Tidal Volume (TV)'
    ],
    correctIndex: 0,
    explanation: 'Expiratory Capacity is defined as TV + ERV, representing the total volume of air a person can expire after a normal tidal inspiration.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-35',
    type: 'mcq',
    question: 'Functional Residual Capacity (FRC) is calculated as the sum of:',
    options: [
      'Tidal Volume (TV) and Residual Volume (RV)',
      'Expiratory Reserve Volume (ERV) and Residual Volume (RV)',
      'Inspiratory Reserve Volume (IRV) and Residual Volume (RV)',
      'Tidal Volume (TV) and Inspiratory Reserve Volume (IRV)'
    ],
    correctIndex: 1,
    explanation: 'Functional Residual Capacity is defined as ERV + RV, representing the volume of air remaining in the lungs after a normal tidal expiration.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-36',
    type: 'mcq',
    question: 'Vital Capacity (VC) is calculated as the sum of:',
    options: [
      'Tidal Volume (TV), Inspiratory Reserve Volume (IRV), and Expiratory Reserve Volume (ERV)',
      'Only Tidal Volume (TV) and Residual Volume (RV)',
      'Total Lung Capacity (TLC) and Residual Volume (RV)',
      'Only the Inspiratory Reserve Volume (IRV)'
    ],
    correctIndex: 0,
    explanation: 'Vital Capacity is the sum of ERV, TV, and IRV, and represents the maximum volume of air a person can breathe in after a forced maximal expiration (or breathe out after maximal inspiration).',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-37',
    type: 'mcq',
    question: 'Total Lung Capacity (TLC), representing the total volume of air the lungs can accommodate, is calculated as:',
    options: [
      'Vital Capacity (VC) plus Residual Volume (RV)',
      'Only the Tidal Volume (TV)',
      'Only the Inspiratory Reserve Volume (IRV)',
      'Functional Residual Capacity (FRC) minus Tidal Volume (TV)'
    ],
    correctIndex: 0,
    explanation: 'Total Lung Capacity is calculated as VC + RV, representing the maximum volume to which the lungs can be expanded, including the air that always remains (residual volume).',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-38',
    type: 'mcq',
    question: 'The approximate Total Lung Capacity (TLC) of a healthy adult human is generally given as around:',
    options: [
      '500 mL',
      '1200 mL',
      'Approximately 4000-6000 mL',
      'Over 20 litres'
    ],
    correctIndex: 2,
    explanation: 'The Total Lung Capacity of a healthy adult human is typically cited as approximately 4000-6000 mL (commonly ~5800 mL).',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-39',
    type: 'mcq',
    question: 'The primary site of exchange of gases (O2 and CO2) between air and blood in the human respiratory system is the:',
    options: [
      'Trachea',
      'Bronchi',
      'Alveoli',
      'Larynx'
    ],
    correctIndex: 2,
    explanation: 'The alveoli, with their thin walls and rich capillary supply, are the primary site of gas exchange in the human respiratory system.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-40',
    type: 'mcq',
    question: 'The exchange of O2 and CO2 across the alveolar and tissue membranes occurs mainly through the process of:',
    options: [
      'Active transport, requiring ATP',
      'Simple diffusion, driven by pressure/concentration gradients',
      'Osmosis of water molecules',
      'Facilitated transport using membrane pumps'
    ],
    correctIndex: 1,
    explanation: 'Both O2 and CO2 are exchanged purely by simple diffusion, driven by the difference in their partial pressures (concentration gradients) across the membranes involved.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-41',
    type: 'mcq',
    question: 'The factors that determine the rate of diffusion of a gas across the respiratory membrane include the pressure gradient, solubility of the gas, and:',
    options: [
      'The colour of the gas',
      'The thickness of the membrane through which diffusion occurs',
      'The atomic number of the gas',
      'The temperature of the person\'s blood alone'
    ],
    correctIndex: 1,
    explanation: 'The rate of diffusion of respiratory gases depends on the pressure gradient, the solubility of the gases, and the thickness of the membrane across which the gas diffuses.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-42',
    type: 'mcq',
    question: 'Although the pressure gradient favouring diffusion is greater for O2 than for CO2 across the respiratory membrane, CO2 still diffuses effectively (and rapidly) mainly because:',
    options: [
      'CO2 is a lighter molecule than O2',
      'CO2 is about 20-25 times more soluble than O2, compensating for the smaller pressure gradient',
      'CO2 does not actually need to diffuse at all',
      'The respiratory membrane is impermeable to O2'
    ],
    correctIndex: 1,
    explanation: 'Despite a comparatively smaller partial pressure gradient, CO2\'s much greater solubility (about 20-25 times that of O2) allows it to diffuse efficiently across the respiratory membrane.',
    difficulty: 'hard'
  },
  {
    id: 'breathing-and-exchange-of-gases-43',
    type: 'mcq',
    question: 'The membrane across which gas exchange occurs in the alveoli is composed of the alveolar squamous epithelium and the endothelium of blood capillaries, and this membrane is characteristically:',
    options: [
      'Very thick, to prevent excessive gas loss',
      'Extremely thin, facilitating easy and rapid diffusion of gases',
      'Made of bone tissue',
      'Completely impermeable to any gas'
    ],
    correctIndex: 1,
    explanation: 'The diffusion membrane at the alveoli is extremely thin (often less than a micron thick), which facilitates efficient and rapid gas exchange.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-44',
    type: 'mcq',
    question: 'At the alveolar level, oxygen diffuses from the alveolar air into the blood mainly because:',
    options: [
      'The partial pressure of O2 (pO2) is higher in alveolar air than in the deoxygenated blood arriving at the alveoli',
      'The partial pressure of O2 is higher in blood than in alveolar air',
      'CO2 concentration in blood is very low',
      'Oxygen is actively pumped into the blood using ATP'
    ],
    correctIndex: 0,
    explanation: 'Since the partial pressure of O2 in alveolar air (~104 mmHg) is greater than that in the deoxygenated blood arriving at the alveoli (~40 mmHg), O2 diffuses down its concentration gradient into the blood.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-45',
    type: 'mcq',
    question: 'At the tissue level, carbon dioxide diffuses from the tissues into the blood mainly because:',
    options: [
      'Tissues have a lower partial pressure of CO2 than the blood arriving at them',
      'Tissues have a higher partial pressure of CO2 (due to ongoing metabolic activity) than the blood arriving at them',
      'CO2 cannot diffuse at the tissue level at all',
      'Oxygen concentration in tissues is extremely high'
    ],
    correctIndex: 1,
    explanation: 'Metabolically active tissues continuously produce CO2, resulting in a higher partial pressure of CO2 in tissues compared to the arriving blood, driving CO2 diffusion from tissues into the blood.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-46',
    type: 'mcq',
    question: 'Approximately what percentage of oxygen is transported in the blood bound to haemoglobin, in the form of oxyhaemoglobin?',
    options: [
      'About 3%',
      'About 20%',
      'About 97%',
      'About 50%'
    ],
    correctIndex: 2,
    explanation: 'The vast majority of oxygen (about 97%) is transported in the blood bound to haemoglobin as oxyhaemoglobin, with only a small fraction dissolved directly in plasma.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-47',
    type: 'mcq',
    question: 'The remaining small percentage (approximately 3%) of oxygen that is not bound to haemoglobin is transported in the blood as:',
    options: [
      'Carbamino compounds',
      'Bicarbonate ions',
      'Oxygen simply dissolved in the plasma',
      'Carbonic acid'
    ],
    correctIndex: 2,
    explanation: 'A small fraction (about 3%) of the total oxygen transported in the blood is carried in a simply dissolved form in the plasma, rather than bound to haemoglobin.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-48',
    type: 'mcq',
    question: 'Each molecule of haemoglobin can bind a maximum of how many molecules of oxygen?',
    options: [
      'One',
      'Two',
      'Four, since haemoglobin has four heme groups, each capable of binding one O2 molecule',
      'Eight'
    ],
    correctIndex: 2,
    explanation: 'Each haemoglobin molecule has four heme groups, and each heme group can bind one molecule of oxygen, allowing a single haemoglobin molecule to carry up to four O2 molecules.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-49',
    type: 'mcq',
    question: 'The graph obtained by plotting the percentage saturation of haemoglobin with oxygen against the partial pressure of oxygen (pO2) is characteristically:',
    options: [
      'A straight line',
      'A sigmoid (S-shaped) curve, called the Oxygen-Haemoglobin Dissociation Curve',
      'A perfect circle',
      'A curve that decreases linearly with increasing pO2'
    ],
    correctIndex: 1,
    explanation: 'The relationship between percentage saturation of haemoglobin with O2 and the partial pressure of O2 produces a characteristic sigmoid (S-shaped) curve, known as the Oxygen-Haemoglobin Dissociation Curve.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-50',
    type: 'mcq',
    question: 'Conditions found in the lungs (alveoli) - high pO2, low pCO2, lower H+ concentration, and lower temperature - generally favour:',
    options: [
      'Dissociation of oxygen from haemoglobin',
      'The formation (binding) of oxyhaemoglobin',
      'The formation of carbaminohaemoglobin exclusively',
      'The complete destruction of haemoglobin'
    ],
    correctIndex: 1,
    explanation: 'The specific conditions in the lungs (high pO2, low pCO2, low H+, lower temperature) favour the binding of oxygen to haemoglobin, forming oxyhaemoglobin.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-51',
    type: 'mcq',
    question: 'Conditions found in actively metabolising tissues - low pO2, high pCO2, higher H+ concentration, and higher temperature - generally favour:',
    options: [
      'Increased binding of oxygen to haemoglobin',
      'Dissociation of oxygen from oxyhaemoglobin, releasing O2 for use by the tissues (the Bohr effect)',
      'No change in oxygen binding at all',
      'Formation of new haemoglobin molecules'
    ],
    correctIndex: 1,
    explanation: 'The conditions typically found in metabolically active tissues (low pO2, high pCO2, high H+, higher temperature) promote the dissociation of oxygen from oxyhaemoglobin, a phenomenon known as the Bohr effect, ensuring O2 delivery to tissues that need it most.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-52',
    type: 'mcq',
    question: 'The Bohr effect refers to the phenomenon in which:',
    options: [
      'Oxygen binds more tightly to haemoglobin as pCO2 and H+ concentration increase',
      'Increased pCO2 and H+ concentration (as found in active tissues) promote the release/dissociation of oxygen from haemoglobin',
      'CO2 is unable to bind to haemoglobin under any conditions',
      'Haemoglobin loses its ability to carry oxygen permanently'
    ],
    correctIndex: 1,
    explanation: 'The Bohr effect describes how increased carbon dioxide and hydrogen ion concentrations (conditions found in actively respiring tissues) shift the oxygen-haemoglobin dissociation curve, promoting the release of oxygen where it is most needed.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-53',
    type: 'mcq',
    question: 'Approximately what percentage of carbon dioxide is transported in the blood as bicarbonate ions (HCO3⁻)?',
    options: [
      'About 7%',
      'About 20-25%',
      'About 70%',
      'About 97%'
    ],
    correctIndex: 2,
    explanation: 'The majority of CO2 (about 70%) is transported in the blood in the form of bicarbonate ions, generated via the action of the enzyme carbonic anhydrase within red blood cells.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-54',
    type: 'mcq',
    question: 'The enzyme responsible for catalysing the conversion of CO2 and water into carbonic acid, a key step in bicarbonate-based CO2 transport, is:',
    options: [
      'Amylase',
      'Carbonic anhydrase, present in high concentration in red blood cells',
      'Pepsin',
      'Lipase'
    ],
    correctIndex: 1,
    explanation: 'Carbonic anhydrase, abundantly present in red blood cells, rapidly catalyses the reaction between CO2 and water to form carbonic acid (H2CO3), a crucial step in CO2 transport as bicarbonate.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-55',
    type: 'mcq',
    question: 'Carbonic acid (H2CO3), formed within red blood cells from CO2 and water, rapidly dissociates into:',
    options: [
      'Oxygen and water',
      'Hydrogen ions (H+) and bicarbonate ions (HCO3⁻)',
      'Carbon monoxide and oxygen',
      'Glucose and water'
    ],
    correctIndex: 1,
    explanation: 'Carbonic acid formed in red blood cells rapidly dissociates into hydrogen ions (H+) and bicarbonate ions (HCO3⁻), the latter being the major form in which CO2 is transported.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-56',
    type: 'mcq',
    question: 'Approximately what percentage of carbon dioxide is transported bound to haemoglobin, in the form of carbaminohaemoglobin?',
    options: [
      'About 70%',
      'About 20-25%',
      'About 97%',
      'About 3%'
    ],
    correctIndex: 1,
    explanation: 'About 20-25% of CO2 is transported bound to haemoglobin as carbaminohaemoglobin, formed when CO2 binds to the amino groups of the globin portion of haemoglobin (not the heme group).',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-57',
    type: 'mcq',
    question: 'Unlike oxygen, which binds to the heme (iron-containing) portion of haemoglobin, carbon dioxide binds to haemoglobin at the:',
    options: [
      'Heme group, in exactly the same manner as oxygen',
      'Amino groups of the globin (protein) portion of the molecule',
      'It does not bind to haemoglobin at all',
      'Only to free iron ions in plasma'
    ],
    correctIndex: 1,
    explanation: 'Carbon dioxide binds to the amino groups present on the globin (protein) portion of the haemoglobin molecule, forming carbaminohaemoglobin, distinct from oxygen\'s binding site on the heme group.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-58',
    type: 'mcq',
    question: 'Approximately what percentage of the total carbon dioxide transported in the blood is carried simply dissolved in the plasma?',
    options: [
      'About 70%',
      'About 20-25%',
      'About 7%',
      'About 97%'
    ],
    correctIndex: 2,
    explanation: 'A relatively small proportion of CO2 (about 7%) is carried in a simply dissolved state in the plasma, with the majority being transported as bicarbonate or bound to haemoglobin.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-59',
    type: 'mcq',
    question: 'At the tissue level, where pCO2 is relatively high, the reaction catalysed by carbonic anhydrase proceeds in the direction that:',
    options: [
      'Releases CO2 from bicarbonate into the plasma',
      'Forms carbonic acid, and subsequently bicarbonate and H+ ions, from CO2 and water',
      'Produces oxygen from carbon dioxide',
      'Has no direction, since the reaction is completely irreversible'
    ],
    correctIndex: 1,
    explanation: 'At the tissue level, high pCO2 drives the carbonic anhydrase-catalysed reaction toward forming carbonic acid and subsequently bicarbonate and H+ ions, facilitating CO2 uptake into the blood.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-60',
    type: 'mcq',
    question: 'At the alveolar level, where pCO2 is comparatively low, the bicarbonate-carbonic acid reaction is reversed, ultimately resulting in:',
    options: [
      'Formation of more bicarbonate ions',
      'Release of CO2 gas (which diffuses into the alveoli to be exhaled) and formation of water',
      'Formation of new haemoglobin molecules',
      'Absorption of additional CO2 into the blood'
    ],
    correctIndex: 1,
    explanation: 'At the alveoli, the lower pCO2 shifts the reversible reaction back toward releasing CO2 gas (which then diffuses into the alveolar air to be exhaled) and reforming water, completing the CO2 transport and release cycle.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-61',
    type: 'mcq',
    question: 'The primary neural centre responsible for regulating the normal rhythm of respiration in humans is located in the:',
    options: [
      'Cerebrum',
      'Medulla oblongata (called the respiratory rhythm centre)',
      'Cerebellum',
      'Spinal cord only'
    ],
    correctIndex: 1,
    explanation: 'The respiratory rhythm centre, located in the medulla oblongata, is the primary neural centre responsible for regulating the basic rhythm of respiration.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-62',
    type: 'mcq',
    question: 'A secondary respiratory centre, called the pneumotaxic centre, is located in which part of the brain, and can moderate the function of the primary rhythm centre?',
    options: [
      'Cerebrum',
      'Pons',
      'Cerebellum',
      'Hypothalamus'
    ],
    correctIndex: 1,
    explanation: 'The pneumotaxic centre, located in the pons region of the brain, can moderate the function of the medullary respiratory rhythm centre, altering respiratory rate.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-63',
    type: 'mcq',
    question: 'Neural signals from the pneumotaxic centre can act on the respiratory rhythm centre to:',
    options: [
      'Have absolutely no effect on breathing',
      'Reduce the duration of inspiration, thereby altering (typically increasing) the respiratory rate',
      'Completely stop breathing permanently',
      'Only affect the heart rate'
    ],
    correctIndex: 1,
    explanation: 'Signals from the pneumotaxic centre can reduce the duration of inspiration, effectively altering (and typically increasing) the overall respiratory rate.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-64',
    type: 'mcq',
    question: 'A chemosensitive area located adjacent to the respiratory rhythm centre in the medulla is especially sensitive to changes in the concentration of:',
    options: [
      'Glucose and fat',
      'CO2 and hydrogen ions (H+)',
      'Sodium and potassium ions exclusively',
      'Vitamins in the blood'
    ],
    correctIndex: 1,
    explanation: 'The chemosensitive area near the respiratory rhythm centre is highly sensitive to changes in CO2 and hydrogen ion (H+) concentration in the blood, and signals the rhythm centre to adjust breathing accordingly.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-65',
    type: 'mcq',
    question: 'An increase in blood CO2 and H+ concentration, detected by the chemosensitive area, generally leads to:',
    options: [
      'A decrease in the rate and depth of respiration',
      'An increase in the rate and depth of respiration, to help eliminate the excess CO2',
      'No change whatsoever in breathing pattern',
      'Immediate cessation of breathing'
    ],
    correctIndex: 1,
    explanation: 'Elevated CO2 and H+ levels stimulate the chemosensitive area, which signals the rhythm centre to increase the rate and depth of respiration, helping the body eliminate the excess CO2 more efficiently.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-66',
    type: 'mcq',
    question: 'Compared to CO2 and H+ concentration, changes in blood oxygen (O2) concentration play a role in regulating the respiratory rhythm that is:',
    options: [
      'Far more significant, and the primary regulatory factor overall',
      'Comparatively much less significant, with CO2/H+ playing a much larger regulatory role',
      'Completely non-existent, with O2 having no receptors at all',
      'Exactly equal in significance to CO2 regulation'
    ],
    correctIndex: 1,
    explanation: 'While receptors in the aortic arch and carotid arteries can detect changes in blood O2 (in addition to CO2/H+), the regulatory influence of oxygen concentration on respiratory rhythm is comparatively minor, with CO2 and H+ concentration playing the dominant regulatory role.',
    difficulty: 'hard'
  },
  {
    id: 'breathing-and-exchange-of-gases-67',
    type: 'mcq',
    question: 'Specialised receptors located in the aortic arch and carotid arteries, which can detect changes in blood CO2 and H+ concentration and relay this information to the rhythm centre, are called:',
    options: [
      'Osmoreceptors',
      'Aortic and carotid bodies',
      'Photoreceptors',
      'Baroreceptors only'
    ],
    correctIndex: 1,
    explanation: 'The aortic and carotid bodies are specialised receptors located in the aortic arch and carotid arteries respectively, capable of detecting changes in blood CO2/H+ (and to a lesser extent, O2) and signalling the respiratory rhythm centre.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-68',
    type: 'mcq',
    question: 'Asthma is a respiratory disorder characterised by difficulty in breathing, causing wheezing, primarily due to:',
    options: [
      'Damage and permanent destruction of alveolar walls',
      'Inflammation of the bronchi and bronchioles',
      'Complete blockage of the trachea by a foreign object',
      'Fibrosis of lung tissue caused by dust inhalation'
    ],
    correctIndex: 1,
    explanation: 'Asthma is caused by inflammation of the bronchi and bronchioles, leading to difficulty in breathing and characteristic wheezing sounds.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-69',
    type: 'mcq',
    question: 'Emphysema is a chronic respiratory disorder in which:',
    options: [
      'The bronchi become temporarily inflamed but fully recover',
      'The alveolar walls are damaged, decreasing the respiratory surface area available for gas exchange',
      'The trachea becomes permanently blocked',
      'Only the nasal passage is affected'
    ],
    correctIndex: 1,
    explanation: 'Emphysema is a chronic disorder in which the walls of the alveoli are damaged, resulting in a decreased respiratory (gas exchange) surface area.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-70',
    type: 'mcq',
    question: 'A major and well-established cause of emphysema is:',
    options: [
      'Excessive water intake',
      'Cigarette smoking',
      'Eating spicy food',
      'Lack of physical exercise alone'
    ],
    correctIndex: 1,
    explanation: 'Cigarette smoking is one of the major recognised causes of emphysema, contributing to progressive damage of the alveolar walls over time.',
    difficulty: 'easy'
  },
  {
    id: 'breathing-and-exchange-of-gases-71',
    type: 'mcq',
    question: 'Occupational respiratory disorders, such as silicosis, are commonly seen in workers involved in industries with prolonged exposure to:',
    options: [
      'Clean, filtered air',
      'Excessive dust particles, such as in grinding or stone-breaking industries',
      'Cold temperatures only',
      'High-altitude environments'
    ],
    correctIndex: 1,
    explanation: 'Occupational disorders like silicosis arise from prolonged exposure to fine dust particles common in industries such as grinding, mining, or stone-breaking, where the body\'s natural defence mechanisms cannot cope with the dust load.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-72',
    type: 'mcq',
    question: 'Long-term exposure to excessive dust in certain occupational settings can give rise to inflammation and ultimately lead to:',
    options: [
      'Complete regeneration of healthy lung tissue',
      'Fibrosis, i.e., proliferation of fibrous connective tissue in the lungs, impairing normal lung function',
      'Improved lung capacity',
      'No long-term effects at all'
    ],
    correctIndex: 1,
    explanation: 'Chronic exposure to industrial dust can trigger long-term inflammation, eventually leading to fibrosis (abnormal proliferation of fibrous tissue), which impairs normal lung function.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-73',
    type: 'mcq',
    question: 'Workers in industries with high dust exposure are generally advised to use protective measures such as masks primarily to:',
    options: [
      'Improve their sense of smell',
      'Minimise inhalation of harmful dust particles and reduce the risk of occupational respiratory disorders',
      'Increase their lung capacity artificially',
      'Prevent hearing loss'
    ],
    correctIndex: 1,
    explanation: 'Protective masks help minimise the inhalation of harmful dust particles in high-exposure occupational settings, reducing the risk of developing occupational respiratory disorders like silicosis.',
    difficulty: 'medium'
  },
  {
    id: 'breathing-and-exchange-of-gases-74',
    type: 'mcq',
    question: 'The pressure gradient of oxygen driving diffusion from alveolar air into pulmonary capillary blood exists because alveolar pO2 is approximately 104 mmHg, while the pO2 of deoxygenated blood arriving at the alveoli is approximately:',
    options: [
      '104 mmHg (identical to alveolar air)',
      '40 mmHg',
      '150 mmHg',
      '0 mmHg'
    ],
    correctIndex: 1,
    explanation: 'The deoxygenated blood arriving at the alveoli (via the pulmonary artery) has a pO2 of approximately 40 mmHg, considerably lower than the alveolar pO2 of about 104 mmHg, driving the diffusion of O2 into the blood.',
    difficulty: 'hard'
  },
  {
    id: 'breathing-and-exchange-of-gases-75',
    type: 'mcq',
    question: 'Assertion: Vital Capacity (VC) does not include the Residual Volume (RV) of the lungs.\nReason: Residual Volume represents air that always remains in the lungs and cannot be voluntarily expelled, even with maximum forced expiration.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since Vital Capacity (VC = TV+IRV+ERV) only accounts for air that can be voluntarily moved in and out of the lungs, it correctly excludes the Residual Volume, which by definition cannot be expelled, correctly explained by the reason.',
    difficulty: 'hard'
  },
  {
    id: 'breathing-and-exchange-of-gases-76',
    type: 'mcq',
    question: 'Assertion: Carbon dioxide diffuses across the respiratory membrane more efficiently than oxygen, despite having a smaller partial pressure gradient.\nReason: Carbon dioxide is significantly more soluble than oxygen in the body fluids/membranes involved in gas exchange.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The much higher solubility of CO2 compared to O2 compensates for its smaller pressure gradient, allowing it to diffuse efficiently across the respiratory membrane, correctly explaining the assertion.',
    difficulty: 'hard'
  },
  {
    id: 'breathing-and-exchange-of-gases-77',
    type: 'mcq',
    question: 'Assertion: In actively metabolising tissues, oxygen is readily released from oxyhaemoglobin.\nReason: The high pCO2, high H+ concentration, and elevated temperature typical of active tissues promote the dissociation of oxygen from haemoglobin (the Bohr effect).\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The described tissue conditions (high pCO2, high H+, elevated temperature) directly promote oxygen release from oxyhaemoglobin via the Bohr effect, correctly explaining why active tissues readily receive oxygen.',
    difficulty: 'hard'
  },
  {
    id: 'breathing-and-exchange-of-gases-78',
    type: 'mcq',
    question: 'Which of the following best summarises why oxygen and carbon dioxide transport in blood rely on fundamentally different primary mechanisms?',
    options: [
      'Both gases are transported exclusively as dissolved gases in plasma, with no involvement of haemoglobin at all',
      'Oxygen is mainly carried bound to the heme group of haemoglobin as oxyhaemoglobin, while the majority of carbon dioxide is instead converted (via carbonic anhydrase) into bicarbonate ions dissolved in plasma',
      'Both gases are transported in exactly the same proportions and via identical chemical mechanisms',
      'Oxygen is transported only as bicarbonate, while carbon dioxide is transported only bound to haemoglobin'
    ],
    correctIndex: 1,
    explanation: 'Oxygen transport relies primarily on binding to the heme groups of haemoglobin (forming oxyhaemoglobin), whereas the majority of CO2 transport relies on a distinct biochemical pathway, being converted into bicarbonate ions via the carbonic anhydrase-catalysed reaction, reflecting fundamentally different transport mechanisms for the two gases.',
    difficulty: 'medium'
  }
];

export default questions;
