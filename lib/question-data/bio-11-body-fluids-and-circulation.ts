import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Body Fluids and Circulation
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'body-fluids-and-circulation-1',
    type: 'mcq',
    question: 'Blood is classified as a specialised connective tissue, consisting of a fluid matrix called plasma and:',
    options: [
      'Formed elements, namely red blood cells (RBCs), white blood cells (WBCs), and platelets',
      'Only red blood cells',
      'Only white blood cells and platelets',
      'Only water and dissolved salts'
    ],
    correctIndex: 0,
    explanation: 'Blood consists of a fluid matrix (plasma) in which formed elements - RBCs, WBCs, and platelets - are suspended.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-2',
    type: 'mcq',
    question: 'Plasma constitutes approximately what percentage of the total blood volume?',
    options: [
      'About 55%',
      'About 10%',
      'About 90%',
      'About 100%'
    ],
    correctIndex: 0,
    explanation: 'Plasma constitutes approximately 55% of the total blood volume, with the remaining 45% consisting of formed elements.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-3',
    type: 'mcq',
    question: 'Blood plasma consists mainly of water, along with proteins, and also contains other substances. What percentage of plasma is typically water?',
    options: [
      'About 25%',
      'About 50%',
      'About 90-92%',
      'About 10%'
    ],
    correctIndex: 2,
    explanation: 'Water constitutes about 90-92% of blood plasma, acting as the primary solvent for the various dissolved substances it carries.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-4',
    type: 'mcq',
    question: 'Fibrinogen, one of the main proteins present in blood plasma, plays a key role in:',
    options: [
      'Fighting infections as an antibody',
      'Carrying oxygen',
      'Maintaining osmotic balance only',
      'Blood clotting (coagulation)'
    ],
    correctIndex: 3,
    explanation: 'Fibrinogen is a plasma protein essential for blood clotting, being converted into insoluble fibrin threads during the coagulation process.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-5',
    type: 'mcq',
    question: 'Globulins, another important class of plasma proteins, are primarily involved in:',
    options: [
      'Carrying oxygen exclusively',
      'Blood clotting',
      "The body's defence mechanism, since many globulins function as antibodies (immunoglobulins)",
      'Digesting food'
    ],
    correctIndex: 2,
    explanation: 'Globulins, particularly immunoglobulins, are crucial for the body\'s defence mechanisms, functioning as antibodies against foreign antigens.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-6',
    type: 'mcq',
    question: 'Albumins, the most abundant plasma proteins, primarily help in:',
    options: [
      'Maintaining the osmotic balance (osmotic pressure) of the blood',
      'Antibody-mediated immunity',
      'Blood clotting only',
      'Transporting oxygen exclusively'
    ],
    correctIndex: 0,
    explanation: 'Albumins are the most abundant plasma proteins and play a key role in maintaining the osmotic balance of the blood.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-7',
    type: 'mcq',
    question: 'Besides proteins, plasma also transports various dissolved substances, including:',
    options: [
      'Glucose, amino acids, lipids, and various minerals',
      'Only water, with nothing else dissolved',
      'Only oxygen gas',
      'Only red blood cells'
    ],
    correctIndex: 0,
    explanation: 'Plasma acts as a transport medium for a variety of dissolved substances, including glucose, amino acids, lipids, and essential minerals.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-8',
    type: 'mcq',
    question: 'Mature mammalian red blood cells (RBCs, erythrocytes) are characteristically:',
    options: [
      'Nucleated and biconvex in shape',
      'Enucleate (lacking a nucleus) and biconcave in shape',
      'Nucleated and irregular in shape only',
      'Enucleate but perfectly spherical'
    ],
    correctIndex: 1,
    explanation: 'Mature mammalian RBCs are enucleate (lacking a nucleus) and characteristically biconcave in shape, a feature that increases their surface area for gas exchange.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-9',
    type: 'mcq',
    question: 'In adult humans, red blood cells are produced primarily in the:',
    options: [
      'Red bone marrow',
      'Liver',
      'Lungs',
      'Spleen'
    ],
    correctIndex: 0,
    explanation: 'In adult humans, red bone marrow is the primary site of erythropoiesis (RBC production).',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-10',
    type: 'mcq',
    question: 'The average lifespan of a human red blood cell is approximately:',
    options: [
      '300 days',
      '10 days',
      '120 days',
      '50 days'
    ],
    correctIndex: 2,
    explanation: 'Human red blood cells typically have an average lifespan of about 120 days before being destroyed.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-11',
    type: 'mcq',
    question: 'Old and worn-out red blood cells are primarily destroyed in the:',
    options: [
      'Spleen, often referred to as the "graveyard of RBCs"',
      'Liver only',
      'Heart',
      'Lungs'
    ],
    correctIndex: 0,
    explanation: 'The spleen is often called the "graveyard of RBCs" since it is the primary site where old, worn-out red blood cells are destroyed.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-12',
    type: 'mcq',
    question: 'The average RBC count in a healthy adult human is approximately:',
    options: [
      '100-200 per cubic mm of blood',
      '5,000-8,000 per cubic mm of blood',
      '1.5-3.5 lakh per cubic mm of blood',
      '5-5.5 million per cubic mm of blood'
    ],
    correctIndex: 3,
    explanation: 'A healthy adult human typically has approximately 5-5.5 million red blood cells per cubic mm of blood.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-13',
    type: 'mcq',
    question: 'Red blood cells contain the iron-containing pigment haemoglobin, which is primarily responsible for:',
    options: [
      'Producing antibodies',
      'Fighting bacterial infections',
      'Blood clotting',
      'Transport of respiratory gases, primarily oxygen'
    ],
    correctIndex: 3,
    explanation: 'Haemoglobin, the iron-containing pigment in RBCs, is primarily responsible for transporting oxygen (and to a lesser extent, carbon dioxide) in the blood.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-14',
    type: 'mcq',
    question: 'Compared to red blood cells, white blood cells (WBCs, leukocytes) are characteristically:',
    options: [
      'Nucleated, colourless, and generally fewer in number than RBCs',
      'Non-nucleated and biconcave in shape',
      'Non-nucleated and more numerous than RBCs',
      'Identical in structure and number to RBCs'
    ],
    correctIndex: 0,
    explanation: 'White blood cells are nucleated and colourless (lacking haemoglobin), and are typically far fewer in number compared to red blood cells.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-15',
    type: 'mcq',
    question: 'White blood cells are broadly classified into two main categories, based on the presence or absence of granules in their cytoplasm, called:',
    options: [
      'Oxygenated and deoxygenated WBCs',
      'Biconcave and biconvex WBCs',
      'Granulocytes and agranulocytes',
      'Nucleated and enucleate WBCs'
    ],
    correctIndex: 2,
    explanation: 'WBCs are classified into granulocytes (containing cytoplasmic granules) and agranulocytes (lacking such granules).',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-16',
    type: 'mcq',
    question: 'Which of the following are classified as granulocytes?',
    options: [
      'Neutrophils, eosinophils, and basophils',
      'Only lymphocytes',
      'Lymphocytes and monocytes',
      'Platelets and red blood cells'
    ],
    correctIndex: 0,
    explanation: 'Neutrophils, eosinophils, and basophils are the three types of granulocytes, characterised by the presence of granules in their cytoplasm.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-17',
    type: 'mcq',
    question: 'Which of the following are classified as agranulocytes?',
    options: [
      'Neutrophils and eosinophils',
      'All granulocyte types',
      'Lymphocytes and monocytes',
      'Basophils and neutrophils'
    ],
    correctIndex: 2,
    explanation: 'Lymphocytes and monocytes are the two types of agranulocytes, lacking visible cytoplasmic granules.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-18',
    type: 'mcq',
    question: 'Neutrophils, the most abundant type of white blood cell, primarily function in the body by:',
    options: [
      'Secreting histamine and heparin',
      'Phagocytosing (engulfing) foreign microorganisms and debris',
      'Producing antibodies',
      'Storing fat'
    ],
    correctIndex: 1,
    explanation: 'Neutrophils, the most numerous WBC type, are phagocytic cells that engulf and destroy foreign microorganisms and cellular debris.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-19',
    type: 'mcq',
    question: 'Eosinophils, a type of granulocyte, are primarily associated with:',
    options: [
      'Producing haemoglobin',
      'Blood clotting exclusively',
      'Carrying oxygen',
      'Resistance to infections and playing a role in allergic reactions'
    ],
    correctIndex: 3,
    explanation: 'Eosinophils play a role in resisting infections and are particularly associated with allergic reactions and combating parasitic infections.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-20',
    type: 'mcq',
    question: 'Basophils, the least abundant type of white blood cell, secrete substances such as:',
    options: [
      'Insulin and glucagon',
      'Bile and pepsin',
      'Histamine, serotonin, and heparin',
      'Fibrinogen and albumin'
    ],
    correctIndex: 2,
    explanation: 'Basophils secrete histamine, serotonin, and heparin, substances involved in inflammatory responses and preventing intravascular clotting.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-21',
    type: 'mcq',
    question: 'Lymphocytes, which include B-cells and T-cells, are primarily involved in:',
    options: [
      'Transporting oxygen',
      'Blood clotting exclusively',
      'The immune response, including the production of antibodies',
      'Producing haemoglobin'
    ],
    correctIndex: 2,
    explanation: 'Lymphocytes (B-cells and T-cells) are central to the body\'s immune response, with B-cells producing antibodies and T-cells mediating cellular immunity.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-22',
    type: 'mcq',
    question: 'Monocytes, the largest of the white blood cells, function primarily as:',
    options: [
      'Phagocytic cells that can further transform into macrophages in tissues',
      'Cells responsible for blood clotting',
      'Cells that transport oxygen',
      'Antibody-producing cells only'
    ],
    correctIndex: 0,
    explanation: 'Monocytes are phagocytic agranulocytes that can migrate into tissues and differentiate into macrophages, enhancing the body\'s defence capabilities.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-23',
    type: 'mcq',
    question: 'Platelets (thrombocytes) are formed from the fragmentation of large cells present in the bone marrow called:',
    options: [
      'Erythrocytes',
      'Neutrophils',
      'Lymphocytes',
      'Megakaryocytes'
    ],
    correctIndex: 3,
    explanation: 'Platelets are small cell fragments derived from the fragmentation of large bone marrow cells called megakaryocytes.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-24',
    type: 'mcq',
    question: 'Platelets play a crucial role in the body\'s:',
    options: [
      'Immune defence, as antibody producers',
      'Oxygen transport system',
      'Digestive processes',
      'Blood clotting (coagulation) mechanism'
    ],
    correctIndex: 3,
    explanation: 'Platelets are essential for the process of blood clotting, releasing substances that trigger the coagulation cascade upon injury.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-25',
    type: 'mcq',
    question: 'A significant decrease in the platelet count of an individual can lead to:',
    options: [
      'Increased oxygen carrying capacity',
      'No noticeable effect on health',
      'Increased risk of prolonged/excessive bleeding, due to impaired clot formation',
      'Excessive clotting throughout the body'
    ],
    correctIndex: 2,
    explanation: 'A reduced platelet count impairs the body\'s ability to form clots effectively, increasing the risk of excessive or prolonged bleeding.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-26',
    type: 'mcq',
    question: 'The ABO blood grouping system classifies human blood based on the presence or absence of specific antigens on the surface of the:',
    options: [
      'White blood cells',
      'Plasma proteins',
      'Platelets',
      'Red blood cells'
    ],
    correctIndex: 3,
    explanation: 'The ABO blood grouping system is based on the presence or absence of A and/or B antigens present on the surface of red blood cells.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-27',
    type: 'mcq',
    question: 'An individual with blood group AB is often referred to as a "universal recipient" because their plasma:',
    options: [
      'Cannot receive blood from any other group',
      'Contains antibodies against all blood types',
      'Lacks both anti-A and anti-B antibodies, allowing them to receive blood from any ABO group without an ABO-based immune reaction',
      'Contains both anti-A and anti-B antibodies'
    ],
    correctIndex: 2,
    explanation: 'Since AB blood group individuals lack both anti-A and anti-B antibodies in their plasma, they can typically receive blood from any ABO group without triggering an ABO-incompatibility reaction, making them universal recipients.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-28',
    type: 'mcq',
    question: 'An individual with blood group O is often referred to as a "universal donor" because their red blood cells:',
    options: [
      'Lack both A and B antigens on their surface, so they generally do not trigger an ABO-based immune reaction when given to individuals of any ABO group',
      'Carry both A and B antigens',
      'Cannot be transfused into anyone',
      'Carry Rh antigen only'
    ],
    correctIndex: 0,
    explanation: 'Since O blood group red blood cells lack both A and B surface antigens, they typically do not provoke an ABO-related immune reaction when transfused into individuals of any other ABO blood group, making O the universal donor type.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-29',
    type: 'mcq',
    question: 'The Rh blood grouping system is based on the presence or absence of the Rh antigen (Rh factor), first identified in the blood of which animal?',
    options: [
      'Human',
      'Mouse',
      'Rhesus monkey',
      'Rabbit'
    ],
    correctIndex: 2,
    explanation: 'The Rh factor derives its name from the Rhesus monkey, in which this antigen was first identified.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-30',
    type: 'mcq',
    question: 'An individual is classified as Rh-negative (Rh⁻) when their red blood cells:',
    options: [
      'Carry both A and B antigens',
      'Lack the Rh antigen on their surface',
      'Carry the Rh antigen',
      'Lack a nucleus'
    ],
    correctIndex: 1,
    explanation: 'Rh-negative individuals lack the Rh antigen on their red blood cell surface, whereas Rh-positive individuals possess it.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-31',
    type: 'mcq',
    question: 'Erythroblastosis foetalis, a condition affecting a foetus, typically arises due to Rh incompatibility in a pregnancy where:',
    options: [
      'Both mother and foetus are Rh-positive',
      'The mother is Rh-positive and the foetus is Rh-negative',
      'Both mother and foetus are Rh-negative',
      'The mother is Rh-negative and the foetus is Rh-positive (inherited from the father), leading to maternal anti-Rh antibodies attacking foetal RBCs, usually in subsequent pregnancies'
    ],
    correctIndex: 3,
    explanation: 'Erythroblastosis foetalis typically occurs when an Rh-negative mother, previously sensitised, carries an Rh-positive foetus; her anti-Rh antibodies can cross the placenta and destroy the foetal red blood cells.',
    difficulty: 'hard'
  },
  {
    id: 'body-fluids-and-circulation-32',
    type: 'mcq',
    question: 'The clotting factor prothrombin, essential for blood coagulation, is synthesised primarily in the:',
    options: [
      'Liver, and its synthesis requires Vitamin K',
      'Bone marrow',
      'Spleen',
      'Kidneys'
    ],
    correctIndex: 0,
    explanation: 'Prothrombin is synthesised in the liver, and this process requires Vitamin K as an essential cofactor.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-33',
    type: 'mcq',
    question: 'During blood clotting, the enzyme thromboplastin (released from injured tissue/platelets), along with calcium ions, converts inactive prothrombin into its active form, called:',
    options: [
      'Heparin',
      'Fibrin',
      'Fibrinogen',
      'Thrombin'
    ],
    correctIndex: 3,
    explanation: 'Thromboplastin, together with calcium ions, catalyses the conversion of inactive prothrombin into active thrombin during the clotting cascade.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-34',
    type: 'mcq',
    question: 'The active enzyme thrombin ultimately converts the soluble plasma protein fibrinogen into:',
    options: [
      'Thromboplastin',
      'Albumin',
      'Prothrombin',
      'Insoluble fibrin threads, which form the meshwork of a blood clot'
    ],
    correctIndex: 3,
    explanation: 'Thrombin converts soluble fibrinogen into insoluble fibrin, which forms a mesh-like network that traps blood cells and forms the clot.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-35',
    type: 'mcq',
    question: 'The final structural component of a blood clot, which physically traps blood cells to seal an injury, is a meshwork formed by:',
    options: [
      'Prothrombin molecules',
      'Insoluble fibrin threads',
      'Fibrinogen molecules directly',
      'Thromboplastin molecules'
    ],
    correctIndex: 1,
    explanation: 'The insoluble fibrin threads, formed from fibrinogen by the action of thrombin, create a physical meshwork that traps blood cells and forms the clot.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-36',
    type: 'mcq',
    question: 'Lymph, also called tissue fluid, is formed from blood plasma that diffuses out into:',
    options: [
      'The alveoli of the lungs',
      'The intercellular (interstitial) spaces of tissues',
      'The lumen of the heart',
      'The bone marrow'
    ],
    correctIndex: 1,
    explanation: 'Lymph is formed when blood plasma diffuses out of capillaries into the intercellular (interstitial) spaces surrounding tissue cells.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-37',
    type: 'mcq',
    question: 'Compared to blood plasma, lymph generally contains:',
    options: [
      'A higher concentration of plasma proteins',
      'No proteins at all, ever',
      'A lower concentration of plasma proteins',
      'Exactly the same concentration of proteins as plasma'
    ],
    correctIndex: 2,
    explanation: 'Lymph is similar in composition to plasma but generally contains a lower concentration of proteins.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-38',
    type: 'mcq',
    question: 'The flow of lymph within lymphatic vessels is characteristically:',
    options: [
      'Bidirectional, moving both toward and away from the heart equally',
      'Identical in direction to blood flow in arteries',
      'Unidirectional, flowing only towards the heart',
      'Completely random, with no defined direction'
    ],
    correctIndex: 2,
    explanation: 'Lymph flows in a unidirectional manner within lymphatic vessels, moving only towards the heart, ultimately draining back into the venous blood circulation.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-39',
    type: 'mcq',
    question: 'One key physiological function of the lymphatic system is to:',
    options: [
      'Pump oxygenated blood to the entire body',
      'Directly produce red blood cells',
      'Generate the heartbeat',
      'Drain excess interstitial fluid and return it, along with proteins, back into the blood circulatory system'
    ],
    correctIndex: 3,
    explanation: 'A key role of the lymphatic system is to drain excess fluid (and proteins) that have accumulated in tissue spaces and return them to the general blood circulation.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-40',
    type: 'mcq',
    question: 'Specialised lymphatic vessels in the small intestine, called lacteals, play a special role in:',
    options: [
      'Producing digestive enzymes',
      'Absorbing and transporting digested fats (lipids) from the intestine',
      'Absorbing glucose exclusively',
      'Producing bile'
    ],
    correctIndex: 1,
    explanation: 'Lacteals, specialised lymphatic vessels found in the villi of the small intestine, play a key role in absorbing and transporting digested fats.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-41',
    type: 'mcq',
    question: 'In an open circulatory system, such as that found in arthropods and molluscs, blood pumped by the heart flows through:',
    options: [
      'Only the lymphatic system',
      'Only capillaries, without ever entering larger vessels',
      'A closed network of blood vessels exclusively',
      'Open spaces or sinuses, bathing tissues directly, rather than always being confined within vessels'
    ],
    correctIndex: 3,
    explanation: 'In an open circulatory system, blood is not always confined to vessels; it can flow into open body spaces (sinuses) and directly bathe tissues, as seen in arthropods and molluscs.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-42',
    type: 'mcq',
    question: 'A closed circulatory system, found in annelids and vertebrates, is generally considered more efficient than an open system mainly because:',
    options: [
      'It completely lacks any blood vessels',
      'Blood always remains confined within vessels, allowing for faster and more regulated distribution of nutrients, gases, and hormones',
      'Blood in this system does not require a heart to be pumped',
      'It is much slower than an open system'
    ],
    correctIndex: 1,
    explanation: 'In a closed circulatory system, blood remains confined to a network of vessels, allowing for faster, more efficient, and better-regulated transport of substances compared to an open system.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-43',
    type: 'mcq',
    question: 'The human heart is described as "myogenic" because:',
    options: [
      'It is capable of generating and initiating its own rhythmic contractions, independent of external nervous stimulation',
      'It requires continuous external neural stimulation to beat at all',
      'It is composed entirely of skeletal muscle',
      'It cannot function without hormonal control'
    ],
    correctIndex: 0,
    explanation: 'The term "myogenic" indicates that the heart\'s rhythmic contractions originate from within the cardiac muscle itself, rather than requiring continuous external nerve impulses to initiate each beat.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-44',
    type: 'mcq',
    question: 'The human heart is a four-chambered organ, consisting of:',
    options: [
      'Two ventricles only',
      'Two atria (upper chambers) and two ventricles (lower chambers)',
      'A single, undivided chamber',
      'Two atria only'
    ],
    correctIndex: 1,
    explanation: 'The human heart has four chambers: two upper atria (right and left) and two lower ventricles (right and left).',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-45',
    type: 'mcq',
    question: 'The heart is enclosed within a protective double-layered membranous sac called the:',
    options: [
      'Meninges',
      'Peritoneum',
      'Pleura',
      'Pericardium'
    ],
    correctIndex: 3,
    explanation: 'The pericardium is the protective double-layered membranous sac that encloses and cushions the heart.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-46',
    type: 'mcq',
    question: 'The interatrial and interventricular septa in the human heart primarily function to:',
    options: [
      'Pump blood out of the heart',
      'Allow free mixing of oxygenated and deoxygenated blood between the two sides of the heart',
      'Prevent mixing of oxygenated and deoxygenated blood by separating the right and left sides of the heart',
      'Generate the heartbeat'
    ],
    correctIndex: 2,
    explanation: 'The septa (interatrial and interventricular) separate the right and left sides of the heart, preventing the mixing of oxygenated blood (left side) with deoxygenated blood (right side).',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-47',
    type: 'mcq',
    question: 'The valve situated between the right atrium and right ventricle, having three cusps, is called the:',
    options: [
      'Aortic semilunar valve',
      'Pulmonary semilunar valve',
      'Tricuspid valve',
      'Bicuspid (mitral) valve'
    ],
    correctIndex: 2,
    explanation: 'The tricuspid valve, with three cusps, is located between the right atrium and right ventricle, preventing backflow of blood into the atrium during ventricular contraction.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-48',
    type: 'mcq',
    question: 'The valve situated between the left atrium and left ventricle, having two cusps, is called the:',
    options: [
      'Tricuspid valve',
      'Bicuspid (mitral) valve',
      'Pulmonary semilunar valve',
      'Aortic semilunar valve'
    ],
    correctIndex: 1,
    explanation: 'The bicuspid (mitral) valve, with two cusps, is located between the left atrium and left ventricle.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-49',
    type: 'mcq',
    question: 'The semilunar valves, present at the exit points of the pulmonary artery and the aorta, primarily function to:',
    options: [
      'Allow blood to flow back into the ventricles freely',
      'Generate the electrical impulse for the heartbeat',
      'Separate the two atria',
      'Prevent the backflow of blood into the ventricles after they have contracted and ejected blood'
    ],
    correctIndex: 3,
    explanation: 'The semilunar valves (pulmonary and aortic) prevent the backflow of blood into the ventricles once it has been ejected into the pulmonary artery or aorta.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-50',
    type: 'mcq',
    question: 'The cardiac cycle refers to the sequence of events that occur during:',
    options: [
      'One complete day of heart function',
      'The entire lifespan of the heart',
      'A single complete heartbeat, including relaxation (diastole) and contraction (systole) phases',
      'A single breath cycle'
    ],
    correctIndex: 2,
    explanation: 'The cardiac cycle describes the sequence of mechanical and electrical events, including diastole (relaxation) and systole (contraction), that occur during one complete heartbeat.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-51',
    type: 'mcq',
    question: 'At a normal resting heart rate of 72 beats per minute, the duration of one complete cardiac cycle is approximately:',
    options: [
      '0.8 second',
      '0.1 second',
      '2 seconds',
      '5 seconds'
    ],
    correctIndex: 0,
    explanation: 'At a normal heart rate of 72 beats per minute, one complete cardiac cycle lasts approximately 0.8 second.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-52',
    type: 'mcq',
    question: 'Stroke volume is defined as the:',
    options: [
      'Volume of air inhaled during one breath',
      'Total volume of blood pumped by the heart in one minute',
      'Total volume of blood present in the entire circulatory system',
      'Volume of blood pumped out by each ventricle during one contraction (heartbeat)'
    ],
    correctIndex: 3,
    explanation: 'Stroke volume refers to the volume of blood ejected by each ventricle during a single contraction (heartbeat), typically around 70 mL in a healthy adult.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-53',
    type: 'mcq',
    question: 'Cardiac output is calculated as the product of:',
    options: [
      'Heart rate and total blood volume',
      'Stroke volume and heart rate (number of beats per minute)',
      'Stroke volume and body temperature',
      'Blood pressure and body weight'
    ],
    correctIndex: 1,
    explanation: 'Cardiac output, the volume of blood pumped by the heart per minute, is calculated as stroke volume multiplied by heart rate.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-54',
    type: 'mcq',
    question: 'The average cardiac output of a healthy resting adult human is approximately:',
    options: [
      '100 mL/minute',
      '5000 mL (about 5 litres) per minute',
      '500 mL/minute',
      '50 litres per minute'
    ],
    correctIndex: 1,
    explanation: 'The average cardiac output of a healthy resting adult is approximately 5000 mL (5 litres) of blood per minute.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-55',
    type: 'mcq',
    question: 'The instrument used to graphically record the electrical activity of the heart during a cardiac cycle is called an:',
    options: [
      'Sphygmomanometer',
      'Stethoscope',
      'Electrocardiograph (ECG or EKG)',
      'Electroencephalograph (EEG)'
    ],
    correctIndex: 2,
    explanation: 'An electrocardiograph (ECG) is the instrument used to record the electrical activity generated during each cardiac cycle.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-56',
    type: 'mcq',
    question: 'On a typical ECG trace, the P wave represents:',
    options: [
      'Atrial repolarisation',
      'Atrial depolarisation (contraction)',
      'Ventricular depolarisation (contraction)',
      'Ventricular repolarisation (relaxation)'
    ],
    correctIndex: 1,
    explanation: 'The P wave in an ECG corresponds to the depolarisation of the atria, which precedes atrial contraction.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-57',
    type: 'mcq',
    question: 'On a typical ECG trace, the QRS complex represents:',
    options: [
      'Atrial repolarisation',
      'Ventricular depolarisation, corresponding to the contraction of the ventricles',
      'Ventricular repolarisation',
      'Atrial depolarisation'
    ],
    correctIndex: 1,
    explanation: 'The QRS complex on an ECG corresponds to ventricular depolarisation, which triggers ventricular contraction.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-58',
    type: 'mcq',
    question: 'On a typical ECG trace, the T wave represents:',
    options: [
      'Ventricular repolarisation, as the ventricles return to their relaxed state',
      'Atrial repolarisation',
      'Ventricular depolarisation',
      'Atrial depolarisation'
    ],
    correctIndex: 0,
    explanation: 'The T wave on an ECG corresponds to ventricular repolarisation, marking the recovery of the ventricles after contraction.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-59',
    type: 'mcq',
    question: 'The specialised tissue that initiates and maintains the rhythmic contraction of the heart, located in the wall of the right atrium, is called the:',
    options: [
      'Bundle of His',
      'Sinoatrial (SA) node, also called the pacemaker',
      'Purkinje fibres',
      'Atrioventricular (AV) node'
    ],
    correctIndex: 1,
    explanation: 'The sinoatrial (SA) node, located in the wall of the right atrium, generates the electrical impulse that initiates each heartbeat and is therefore called the natural pacemaker of the heart.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-60',
    type: 'mcq',
    question: 'The SA node generates action potentials without any external stimulus at a faster rate than other parts of the conduction system, making it the natural:',
    options: [
      'Valve of the heart',
      'Chamber of the heart',
      'Blood vessel of the heart',
      'Pacemaker of the heart'
    ],
    correctIndex: 3,
    explanation: 'Because the SA node spontaneously generates electrical impulses at the highest inherent rate among cardiac tissues, it functions as the natural pacemaker, setting the overall heart rate.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-61',
    type: 'mcq',
    question: 'After being generated at the SA node, the electrical impulse spreads through the atria and reaches another specialised node located at the base of the right atrium, called the:',
    options: [
      'Bundle of His',
      'Sinoatrial (SA) node',
      'Atrioventricular (AV) node',
      'Purkinje fibres'
    ],
    correctIndex: 2,
    explanation: 'The impulse from the SA node spreads through the atrial walls and reaches the atrioventricular (AV) node, located at the base of the right atrium.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-62',
    type: 'mcq',
    question: 'From the AV node, the electrical impulse is transmitted to the ventricular walls via a specialised conducting pathway called the:',
    options: [
      'Pulmonary artery',
      'Sinoatrial node',
      'Interatrial septum only',
      'Atrioventricular bundle (Bundle of His) and its subsequent branches (Purkinje fibres)'
    ],
    correctIndex: 3,
    explanation: 'The impulse from the AV node travels through the Atrioventricular Bundle (Bundle of His), which further branches into Purkinje fibres, rapidly conducting the impulse throughout the ventricular walls.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-63',
    type: 'mcq',
    question: 'The involuntary regulation of heart rate is influenced by the autonomic nervous system, where the sympathetic nervous system generally:',
    options: [
      'Only affects the lungs, not the heart',
      'Increases the heart rate and the strength of contraction',
      'Has absolutely no effect on the heart',
      'Decreases the heart rate'
    ],
    correctIndex: 1,
    explanation: 'The sympathetic nervous system generally increases both the heart rate and the strength of cardiac contraction, especially during stress or exercise.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-64',
    type: 'mcq',
    question: 'The parasympathetic nervous system, primarily via the vagus nerve, generally exerts which effect on heart rate?',
    options: [
      'It has no measurable effect on heart rate',
      'It increases heart rate significantly',
      'It only affects the strength of contraction, not the rate',
      'It decreases (slows down) heart rate'
    ],
    correctIndex: 3,
    explanation: 'The parasympathetic nervous system, acting mainly through the vagus nerve, generally decreases (slows) the heart rate.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-65',
    type: 'mcq',
    question: 'The hormone adrenaline (epinephrine), released during stress, generally has which effect on heart rate?',
    options: [
      'It increases heart rate',
      'It decreases heart rate',
      'It has absolutely no effect on the heart',
      'It stops the heart temporarily'
    ],
    correctIndex: 0,
    explanation: 'Adrenaline (epinephrine), often released during stress or "fight-or-flight" situations, increases heart rate and the strength of cardiac contractions.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-66',
    type: 'mcq',
    question: 'Human beings exhibit "double circulation," meaning that blood passes through the heart:',
    options: [
      'Three or more times per complete circuit',
      'Only once during each complete circuit around the body',
      'Twice during each complete circuit, involving separate pulmonary and systemic circulations',
      'Never actually returns to the heart'
    ],
    correctIndex: 2,
    explanation: 'Double circulation refers to blood passing through the heart twice in one complete circuit of the body - once through the pulmonary circulation (heart-lungs-heart) and once through the systemic circulation (heart-body-heart).',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-67',
    type: 'mcq',
    question: 'Pulmonary circulation refers to the pathway of blood flow between the:',
    options: [
      'Heart and the rest of the body (excluding lungs)',
      'Liver and the kidneys',
      'Heart and the lungs',
      'Brain and the spinal cord'
    ],
    correctIndex: 2,
    explanation: 'Pulmonary circulation specifically refers to blood flow between the heart and the lungs, where deoxygenated blood is oxygenated.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-68',
    type: 'mcq',
    question: 'Systemic circulation refers to the pathway of blood flow between the:',
    options: [
      'Heart and the rest of the body (all tissues excluding the lungs)',
      'Kidneys and the bladder',
      'Stomach and intestines',
      'Heart and the lungs only'
    ],
    correctIndex: 0,
    explanation: 'Systemic circulation carries oxygenated blood from the heart to all the tissues of the body (excluding the lungs) and returns deoxygenated blood back to the heart.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-69',
    type: 'mcq',
    question: 'The primary advantage of double circulation, as seen in mammals, is that it:',
    options: [
      'Eliminates the need for a heart altogether',
      'Ensures oxygenated and deoxygenated blood do not mix, allowing more efficient delivery of oxygenated blood to body tissues',
      'Makes the heart work less efficiently overall',
      'Allows extensive mixing of oxygenated and deoxygenated blood'
    ],
    correctIndex: 1,
    explanation: 'Double circulation prevents the mixing of oxygenated and deoxygenated blood, ensuring that tissues receive blood with a high oxygen content, improving overall metabolic efficiency.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-70',
    type: 'mcq',
    question: 'Arteries, the blood vessels that generally carry blood away from the heart, are characterised by:',
    options: [
      'Thin walls and the presence of valves throughout their length',
      'Thick, muscular and elastic walls, generally without valves (except at the origin of major arteries)',
      'A single-cell-thick wall, similar to capillaries',
      'Carrying only deoxygenated blood in all cases'
    ],
    correctIndex: 1,
    explanation: 'Arteries have thick, muscular, and elastic walls to withstand and regulate the high pressure of blood pumped from the heart, and generally lack valves except at their origin from the ventricles.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-71',
    type: 'mcq',
    question: 'Veins, the blood vessels that generally carry blood toward the heart, are characterised by:',
    options: [
      'Relatively thinner walls compared to arteries, and the presence of valves to prevent the backflow of blood',
      'Very thick, muscular walls and the complete absence of valves',
      'Being composed of a single layer of endothelium only, identical to capillaries',
      'Always carrying oxygenated blood, without exception'
    ],
    correctIndex: 0,
    explanation: 'Veins have comparatively thinner walls than arteries and contain valves that help prevent the backflow of blood, especially important since venous blood flows against gravity in many parts of the body.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-72',
    type: 'mcq',
    question: 'Which blood vessel is a notable exception to the general rule that arteries carry oxygenated blood?',
    options: [
      'The aorta',
      'The pulmonary artery, which carries deoxygenated blood from the heart to the lungs',
      'The coronary artery',
      'The renal artery'
    ],
    correctIndex: 1,
    explanation: 'The pulmonary artery is a key exception, carrying deoxygenated blood from the right ventricle of the heart to the lungs for oxygenation.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-73',
    type: 'mcq',
    question: 'Which blood vessel is a notable exception to the general rule that veins carry deoxygenated blood?',
    options: [
      'The hepatic vein',
      'The pulmonary vein, which carries oxygenated blood from the lungs back to the heart',
      'The vena cava',
      'The renal vein'
    ],
    correctIndex: 1,
    explanation: 'The pulmonary vein is an exception among veins, carrying freshly oxygenated blood from the lungs back to the left atrium of the heart.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-74',
    type: 'mcq',
    question: 'Capillaries, the smallest blood vessels, are structurally characterised by:',
    options: [
      'Being wider in diameter than arteries',
      'The presence of numerous valves throughout their length',
      'A wall composed of a single layer of endothelium, facilitating the exchange of substances between blood and tissues',
      'Thick, multi-layered muscular walls'
    ],
    correctIndex: 2,
    explanation: 'Capillaries have extremely thin walls, consisting of just a single layer of endothelial cells, which facilitates efficient exchange of gases, nutrients, and wastes between blood and surrounding tissues.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-75',
    type: 'mcq',
    question: 'A persistently elevated blood pressure, a common cardiovascular disorder, is medically referred to as:',
    options: [
      'Hypertension',
      'Anaemia',
      'Leukaemia',
      'Hypotension'
    ],
    correctIndex: 0,
    explanation: 'Hypertension refers to a condition of persistently elevated blood pressure, a significant risk factor for various cardiovascular diseases.',
    difficulty: 'easy'
  },
  {
    id: 'body-fluids-and-circulation-76',
    type: 'mcq',
    question: 'Coronary artery disease, which affects the blood vessels supplying the heart muscle itself, is often caused by the deposition of fatty material, a process known as:',
    options: [
      'Anaemia',
      'Arthritis',
      'Osteoporosis',
      'Atherosclerosis'
    ],
    correctIndex: 3,
    explanation: 'Coronary artery disease commonly results from atherosclerosis, the deposition of fatty plaques within the walls of the coronary arteries, restricting blood flow to the heart muscle.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-77',
    type: 'mcq',
    question: 'Assertion: Type O blood is often considered the "universal donor" type.\nReason: Red blood cells of type O blood lack both A and B antigens on their surface, minimising the risk of an ABO-based immune reaction when transfused into recipients of other ABO groups.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The absence of both A and B surface antigens on type O red blood cells correctly explains why type O blood is generally well-tolerated by recipients of any ABO blood group, making it the universal donor type.',
    difficulty: 'medium'
  },
  {
    id: 'body-fluids-and-circulation-78',
    type: 'mcq',
    question: 'Assertion: The sinoatrial (SA) node is referred to as the "pacemaker" of the heart.\nReason: The SA node generates electrical impulses spontaneously at a faster intrinsic rate than any other part of the heart\'s conduction system, thereby setting the overall pace of the heartbeat.\nChoose the correct option:',
    options: [
      'Assertion is false, reason is true',
      'Assertion is true, reason is false',
      'Both assertion and reason are false',
      'Both assertion and reason are true and reason correctly explains assertion'
    ],
    correctIndex: 3,
    explanation: 'The SA node\'s ability to spontaneously generate impulses at the highest intrinsic rate among cardiac tissues correctly explains why it functions as the natural pacemaker, controlling the overall rhythm of the heartbeat.',
    difficulty: 'medium'
  }
];

export default questions;
