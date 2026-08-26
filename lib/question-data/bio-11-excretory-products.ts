import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Excretory Products and their Elimination
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'excretory-products-and-their-elimination-1',
    type: 'mcq',
    question: 'Animals that excrete nitrogenous waste directly in the form of ammonia are called:',
    options: [
      'Ureotelic',
      'Ammonotelic',
      'Uricotelic',
      'Aminotelic'
    ],
    correctIndex: 1,
    explanation: 'Ammonotelic animals excrete their nitrogenous waste directly as ammonia, which is highly toxic and requires large amounts of water for safe elimination.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-2',
    type: 'mcq',
    question: 'Ammonia, the nitrogenous waste excreted by ammonotelic animals, is:',
    options: [
      'Non-toxic and can be safely accumulated in the body',
      'Highly toxic, requiring large amounts of water for its safe elimination',
      'Completely insoluble in water',
      'The least toxic nitrogenous waste product'
    ],
    correctIndex: 1,
    explanation: 'Ammonia is highly toxic, so ammonotelic organisms require substantial amounts of water to dilute and safely eliminate it, which is why this mode of excretion is common among aquatic organisms.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-3',
    type: 'mcq',
    question: 'Which of the following is an example of an ammonotelic organism?',
    options: [
      'Human beings',
      'Birds',
      'Many bony fishes and aquatic amphibians',
      'Lizards'
    ],
    correctIndex: 2,
    explanation: 'Many bony fishes and aquatic amphibians, having ready access to large volumes of water, are ammonotelic, excreting ammonia directly.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-4',
    type: 'mcq',
    question: 'Animals that convert toxic ammonia into a less toxic compound, urea, before excretion are called:',
    options: [
      'Ammonotelic',
      'Ureotelic',
      'Uricotelic',
      'Nitrotelic'
    ],
    correctIndex: 1,
    explanation: 'Ureotelic animals convert the highly toxic ammonia into the comparatively less toxic urea before excreting it, allowing for reduced water requirements compared to ammonotelism.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-5',
    type: 'mcq',
    question: 'In ureotelic animals, the conversion of ammonia into urea takes place primarily in the:',
    options: [
      'Kidney',
      'Liver, via the ornithine cycle',
      'Lungs',
      'Skin'
    ],
    correctIndex: 1,
    explanation: 'The conversion of toxic ammonia into urea occurs in the liver through a metabolic pathway known as the ornithine cycle (urea cycle).',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-6',
    type: 'mcq',
    question: 'Which of the following is an example of a ureotelic organism?',
    options: [
      'Birds',
      'Reptiles',
      'Mammals, including humans',
      'Insects'
    ],
    correctIndex: 2,
    explanation: 'Mammals, including humans, along with many terrestrial amphibians and marine fishes, are ureotelic, excreting urea as their primary nitrogenous waste.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-7',
    type: 'mcq',
    question: 'Animals that excrete nitrogenous waste in the form of a semi-solid paste of relatively non-toxic uric acid, thereby minimising water loss, are called:',
    options: [
      'Ammonotelic',
      'Ureotelic',
      'Uricotelic',
      'Aquatelic'
    ],
    correctIndex: 2,
    explanation: 'Uricotelic animals excrete uric acid, the least toxic of the three main nitrogenous wastes, as a semi-solid paste, which allows for minimal water loss - an adaptation particularly useful for terrestrial or egg-laying organisms.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-8',
    type: 'mcq',
    question: 'Which of the following groups is characteristically uricotelic?',
    options: [
      'Mammals',
      'Reptiles, birds, and land snails',
      'Bony fishes',
      'Aquatic amphibians'
    ],
    correctIndex: 1,
    explanation: 'Reptiles, birds, and land snails (and insects) are uricotelic, an adaptation especially advantageous for organisms that develop within shelled eggs, since uric acid can be stored as a solid without harming the developing embryo.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-9',
    type: 'mcq',
    question: 'The human excretory system consists of a pair of kidneys, along with:',
    options: [
      'A pair of ureters, a single urinary bladder, and a urethra',
      'Only the urinary bladder',
      'Multiple bladders and no ureters',
      'Only a single ureter and no bladder'
    ],
    correctIndex: 0,
    explanation: 'The human excretory system comprises a pair of kidneys, a pair of ureters (one from each kidney), a single urinary bladder, and a urethra.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-10',
    type: 'mcq',
    question: 'The human kidneys are described as "retroperitoneal" because they are located:',
    options: [
      'Inside the peritoneal cavity, surrounded by intestines',
      'Behind the peritoneum, attached to the dorsal (back) inner wall of the abdominal cavity',
      'Inside the thoracic cavity',
      'Within the pelvic cavity, below the bladder'
    ],
    correctIndex: 1,
    explanation: 'Human kidneys are situated retroperitoneally, meaning they lie behind the peritoneal lining, attached to the dorsal (posterior) inner wall of the abdomen.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-11',
    type: 'mcq',
    question: 'The notch present on the concave (inner) surface of the kidney, through which the ureter, blood vessels, and nerves enter or leave, is called the:',
    options: [
      'Renal pelvis',
      'Hilum (hilus)',
      'Renal cortex',
      'Renal medulla'
    ],
    correctIndex: 1,
    explanation: 'The hilum (or hilus) is the notch on the concave surface of the kidney through which the ureter, renal blood vessels, and nerves pass.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-12',
    type: 'mcq',
    question: 'Internally, the kidney is broadly divided into two zones: an outer zone called the cortex, and an inner zone called the:',
    options: [
      'Pelvis',
      'Medulla',
      'Hilum',
      'Nephron'
    ],
    correctIndex: 1,
    explanation: 'The kidney has an outer cortex region and an inner medulla region, the latter typically organised into conical structures called medullary pyramids.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-13',
    type: 'mcq',
    question: 'The funnel-shaped space inside the kidney, into which urine collects before passing into the ureter, is called the:',
    options: [
      'Renal cortex',
      'Renal pelvis',
      'Bowman\'s capsule',
      'Glomerulus'
    ],
    correctIndex: 1,
    explanation: 'The renal pelvis is the funnel-shaped cavity within the kidney that collects urine from the calyces before it passes into the ureter.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-14',
    type: 'mcq',
    question: 'The structural and functional unit of the kidney, responsible for urine formation, is called the:',
    options: [
      'Alveolus',
      'Nephron',
      'Neuron',
      'Villus'
    ],
    correctIndex: 1,
    explanation: 'The nephron is the structural and functional unit of the kidney, responsible for carrying out the actual processes involved in urine formation.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-15',
    type: 'mcq',
    question: 'Each human kidney is estimated to contain approximately how many nephrons?',
    options: [
      'About 1000',
      'About 1 million',
      'About 100',
      'About 10 billion'
    ],
    correctIndex: 1,
    explanation: 'Each human kidney contains approximately one million nephrons, collectively responsible for the kidney\'s filtration and urine-forming functions.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-16',
    type: 'mcq',
    question: 'The cup-shaped structure at the beginning of a nephron, which encloses a network of blood capillaries, is called the:',
    options: [
      'Loop of Henle',
      'Bowman\'s capsule',
      'Collecting duct',
      'Distal convoluted tubule'
    ],
    correctIndex: 1,
    explanation: 'Bowman\'s capsule is the cup-shaped structure at the start of the nephron that encloses the glomerulus, a network of blood capillaries.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-17',
    type: 'mcq',
    question: 'The network of blood capillaries enclosed within Bowman\'s capsule, where the initial filtration of blood occurs, is called the:',
    options: [
      'Vasa recta',
      'Glomerulus',
      'Peritubular capillaries',
      'Renal artery'
    ],
    correctIndex: 1,
    explanation: 'The glomerulus, a tuft of blood capillaries enclosed within Bowman\'s capsule, is the site of the initial filtration step in urine formation.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-18',
    type: 'mcq',
    question: 'Blood enters the glomerulus through a small arteriole called the:',
    options: [
      'Efferent arteriole',
      'Afferent arteriole',
      'Renal vein',
      'Vasa recta'
    ],
    correctIndex: 1,
    explanation: 'The afferent arteriole carries blood into the glomerulus, where filtration begins.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-19',
    type: 'mcq',
    question: 'Blood leaves the glomerulus through a small arteriole called the:',
    options: [
      'Afferent arteriole',
      'Efferent arteriole',
      'Renal artery',
      'Renal vein'
    ],
    correctIndex: 1,
    explanation: 'The efferent arteriole carries blood away from the glomerulus after filtration has occurred.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-20',
    type: 'mcq',
    question: 'A key structural feature of the glomerular blood supply is that the afferent arteriole is generally wider in diameter than the efferent arteriole. This difference primarily helps to:',
    options: [
      'Reduce the pressure within the glomerular capillaries, hindering filtration',
      'Maintain a higher hydrostatic pressure within the glomerulus, facilitating efficient filtration of blood',
      'Prevent any blood flow into the glomerulus',
      'Allow direct mixing of filtrate with blood'
    ],
    correctIndex: 1,
    explanation: 'The wider afferent arteriole compared to the narrower efferent arteriole helps maintain a relatively high hydrostatic pressure within the glomerular capillaries, which is essential for driving the filtration process.',
    difficulty: 'hard'
  },
  {
    id: 'excretory-products-and-their-elimination-21',
    type: 'mcq',
    question: 'After the glomerulus, the tubular part of the nephron begins with the:',
    options: [
      'Distal convoluted tubule (DCT)',
      'Proximal convoluted tubule (PCT)',
      'Collecting duct',
      'Loop of Henle'
    ],
    correctIndex: 1,
    explanation: 'The Proximal Convoluted Tubule (PCT) is the first segment of the renal tubule, arising directly from Bowman\'s capsule.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-22',
    type: 'mcq',
    question: 'Following the Proximal Convoluted Tubule, the tubule forms a U-shaped structure that dips into the medulla, called the:',
    options: [
      'Bowman\'s capsule',
      'Loop of Henle',
      'Collecting duct',
      'Vasa recta'
    ],
    correctIndex: 1,
    explanation: 'The loop of Henle is the U-shaped segment of the nephron tubule that extends from the PCT down into (and sometimes deep into) the renal medulla, before ascending back up.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-23',
    type: 'mcq',
    question: 'After the Loop of Henle, the tubule continues as a highly convoluted segment called the:',
    options: [
      'Distal convoluted tubule (DCT)',
      'Bowman\'s capsule',
      'Glomerulus',
      'Renal pelvis'
    ],
    correctIndex: 0,
    explanation: 'The Distal Convoluted Tubule (DCT) follows the Loop of Henle in the nephron, eventually opening into a collecting duct.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-24',
    type: 'mcq',
    question: 'Nephrons whose loop of Henle is very short and extends only slightly into the medulla, forming the majority (about 85%) of human nephrons, are called:',
    options: [
      'Juxtamedullary nephrons',
      'Cortical nephrons',
      'Renal nephrons',
      'Medullary nephrons'
    ],
    correctIndex: 1,
    explanation: 'Cortical nephrons, with their short loop of Henle extending only slightly into the medulla, make up the majority (about 85%) of nephrons in the human kidney.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-25',
    type: 'mcq',
    question: 'Nephrons whose loop of Henle is very long and extends deep into the medulla, playing a key role in concentrating urine, are called:',
    options: [
      'Cortical nephrons',
      'Juxtamedullary nephrons',
      'Peripheral nephrons',
      'Surface nephrons'
    ],
    correctIndex: 1,
    explanation: 'Juxtamedullary nephrons, with their long loops of Henle extending deep into the medulla, are especially important for the kidney\'s ability to produce concentrated urine.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-26',
    type: 'mcq',
    question: 'The specialised, straight blood vessels that run parallel to the long loops of Henle in juxtamedullary nephrons, playing a critical role in the urine-concentrating mechanism, are called:',
    options: [
      'Peritubular capillaries',
      'Vasa recta',
      'Afferent arterioles',
      'Renal veins'
    ],
    correctIndex: 1,
    explanation: 'The vasa recta are specialised capillaries that run alongside the long loops of Henle in juxtamedullary nephrons, essential for maintaining the medullary concentration gradient.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-27',
    type: 'mcq',
    question: 'After leaving the glomerulus via the efferent arteriole, blood in most nephrons (cortical) subsequently flows into a network of capillaries surrounding the renal tubule, called the:',
    options: [
      'Vasa recta',
      'Peritubular capillaries',
      'Renal artery',
      'Bowman\'s capsule'
    ],
    correctIndex: 1,
    explanation: 'Peritubular capillaries surround the renal tubules (particularly around the PCT and DCT) and play an important role in the reabsorption and secretion of substances between the tubule and the blood.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-28',
    type: 'mcq',
    question: 'Glomerular filtration, the first step in urine formation, refers to the process of:',
    options: [
      'Active transport of nutrients from the tubule back into the blood',
      'The filtration of blood through the glomerular capillaries into Bowman\'s capsule, forming the glomerular filtrate',
      'The secretion of hormones by the kidney',
      'The reabsorption of water in the collecting duct'
    ],
    correctIndex: 1,
    explanation: 'Glomerular filtration is the initial step of urine formation, in which blood is filtered under pressure through the glomerular capillaries into Bowman\'s capsule, producing the glomerular filtrate.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-29',
    type: 'mcq',
    question: 'The Glomerular Filtration Rate (GFR) is defined as the:',
    options: [
      'Total amount of urine excreted per day',
      'Volume of glomerular filtrate formed by both kidneys per minute',
      'Rate of blood flow through the renal artery per hour',
      'Total volume of blood in the body'
    ],
    correctIndex: 1,
    explanation: 'GFR refers to the volume of filtrate formed by the kidneys per minute, an important indicator of kidney function.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-30',
    type: 'mcq',
    question: 'The normal Glomerular Filtration Rate (GFR) in a healthy adult human is approximately:',
    options: [
      '1.25 mL/minute',
      '12.5 mL/minute',
      '125 mL/minute',
      '1250 mL/minute'
    ],
    correctIndex: 2,
    explanation: 'The normal GFR in a healthy human is approximately 125 mL of filtrate formed per minute (roughly 180 litres per day).',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-31',
    type: 'mcq',
    question: 'Given a GFR of about 125 mL/minute, the total volume of glomerular filtrate produced by the kidneys per day is approximately:',
    options: [
      'About 1.8 litres',
      'About 18 litres',
      'About 180 litres',
      'About 1800 litres'
    ],
    correctIndex: 2,
    explanation: 'At a normal GFR of 125 mL/minute, the kidneys produce approximately 180 litres of glomerular filtrate per day.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-32',
    type: 'mcq',
    question: 'Given that approximately 180 litres of filtrate are formed per day, but the average person excretes only about 1-1.5 litres of urine daily, this indicates that:',
    options: [
      'Almost all of the filtered fluid is lost as urine',
      'The vast majority (about 99%) of the filtrate is reabsorbed back into the blood by the renal tubules',
      'No reabsorption occurs anywhere along the nephron',
      'The kidneys produce no filtrate at all under normal conditions'
    ],
    correctIndex: 1,
    explanation: 'Since only about 1-1.5 litres of urine are excreted daily out of roughly 180 litres of filtrate formed, this demonstrates that approximately 99% of the filtrate must be reabsorbed back into the blood along the renal tubule.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-33',
    type: 'mcq',
    question: 'The specialised region formed by the close association of the distal convoluted tubule with the afferent arteriole of the same nephron, playing a key role in regulating GFR, is called the:',
    options: [
      'Loop of Henle',
      'Juxtaglomerular apparatus (JGA)',
      'Bowman\'s capsule',
      'Renal pelvis'
    ],
    correctIndex: 1,
    explanation: 'The Juxtaglomerular Apparatus (JGA) is a specialised structure formed where the distal convoluted tubule comes in close contact with the afferent arteriole, playing a key role in regulating GFR and blood pressure.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-34',
    type: 'mcq',
    question: 'Tubular reabsorption refers to the process by which:',
    options: [
      'Waste substances are actively secreted from the blood into the tubule',
      'Useful substances (like glucose, amino acids, and much of the water) are selectively transported from the filtrate back into the blood',
      'Blood is initially filtered at the glomerulus',
      'Urine is released from the urinary bladder'
    ],
    correctIndex: 1,
    explanation: 'Tubular reabsorption is the process by which essential substances filtered into the tubule are selectively reabsorbed back into the surrounding blood capillaries, preventing their loss in urine.',
    difficulty: 'easy'
  },
  {
    id: 'excretory-products-and-their-elimination-35',
    type: 'mcq',
    question: 'The Proximal Convoluted Tubule (PCT) is responsible for reabsorbing almost all of the essential nutrients from the filtrate, such as:',
    options: [
      'Only water, with no other substances reabsorbed',
      'Glucose and amino acids almost completely, along with a large proportion of electrolytes and water',
      'Only waste products like urea',
      'Nothing at all; the PCT has no reabsorptive function'
    ],
    correctIndex: 1,
    explanation: 'The PCT reabsorbs nearly all of the glucose and amino acids from the filtrate, along with a significant proportion (about 70-80%) of electrolytes and water.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-36',
    type: 'mcq',
    question: 'Approximately what percentage of filtered electrolytes and water is typically reabsorbed in the Proximal Convoluted Tubule?',
    options: [
      'About 10-15%',
      'About 40-50%',
      'About 70-80%',
      '100%, with no further reabsorption occurring elsewhere'
    ],
    correctIndex: 2,
    explanation: 'The PCT reabsorbs approximately 70-80% of the filtered electrolytes and water, with further reabsorption occurring at subsequent segments of the nephron.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-37',
    type: 'mcq',
    question: 'Besides reabsorption, the Proximal Convoluted Tubule also plays a role in maintaining the pH and ionic balance of body fluids by selectively secreting substances such as:',
    options: [
      'Glucose and amino acids',
      'Hydrogen ions (H+), ammonia, and potassium ions',
      'Red blood cells',
      'Large plasma proteins'
    ],
    correctIndex: 1,
    explanation: 'In addition to reabsorption, the PCT actively secretes substances such as H+, ammonia, and K+ into the filtrate, helping to maintain the ionic and pH balance of body fluids.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-38',
    type: 'mcq',
    question: 'The descending limb of the loop of Henle is characteristically:',
    options: [
      'Impermeable to water but highly permeable to electrolytes',
      'Highly permeable to water but nearly impermeable to electrolytes',
      'Impermeable to both water and electrolytes',
      'Freely permeable to both water and electrolytes equally'
    ],
    correctIndex: 1,
    explanation: 'The descending limb of the loop of Henle is permeable to water but relatively impermeable to electrolytes, allowing water to be reabsorbed as the filtrate descends into the increasingly concentrated medullary interstitium.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-39',
    type: 'mcq',
    question: 'The ascending limb of the loop of Henle is characteristically:',
    options: [
      'Highly permeable to water and impermeable to electrolytes',
      'Impermeable to water but allows the active/passive transport of electrolytes out of the filtrate',
      'Completely impermeable to any substance',
      'Freely permeable to both water and electrolytes equally'
    ],
    correctIndex: 1,
    explanation: 'The ascending limb of the loop of Henle is impermeable to water but transports electrolytes (such as Na⁺ and Cl⁻) out of the filtrate, contributing to dilution of the filtrate as it moves toward the DCT.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-40',
    type: 'mcq',
    question: 'As the filtrate passes through the descending limb of the loop of Henle (permeable to water, in an increasingly concentrated medullary environment), it becomes progressively:',
    options: [
      'More dilute',
      'More concentrated, as water moves out of the tubule into the surrounding interstitium',
      'Unchanged in concentration',
      'Completely reabsorbed, with nothing remaining'
    ],
    correctIndex: 1,
    explanation: 'As water moves out of the permeable descending limb into the increasingly concentrated medullary interstitium, the filtrate within the tubule becomes progressively more concentrated.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-41',
    type: 'mcq',
    question: 'As the filtrate passes through the ascending limb of the loop of Henle (impermeable to water, but allowing electrolyte transport out), it becomes progressively:',
    options: [
      'More concentrated',
      'More dilute, as electrolytes are removed while water is retained within the tubule',
      'Unchanged in concentration',
      'Completely eliminated'
    ],
    correctIndex: 1,
    explanation: 'Since electrolytes are removed from the filtrate in the ascending limb while water remains trapped (due to impermeability to water), the filtrate becomes progressively more dilute as it ascends.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-42',
    type: 'mcq',
    question: 'The Distal Convoluted Tubule (DCT) is capable of reabsorbing sodium ions and water in a manner that is:',
    options: [
      'Constant and unregulated at all times',
      'Conditional/regulated, being influenced by hormones such as aldosterone',
      'Completely absent; the DCT plays no role in reabsorption',
      'Only relevant to the reabsorption of glucose'
    ],
    correctIndex: 1,
    explanation: 'Unlike the largely constant reabsorption seen in the PCT, reabsorption of sodium and water in the DCT is regulated (conditional), influenced significantly by hormones like aldosterone.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-43',
    type: 'mcq',
    question: 'Similar to the PCT, the DCT is also capable of maintaining ionic and pH balance by selectively secreting:',
    options: [
      'Glucose and amino acids',
      'Hydrogen ions (H+) and potassium ions (K+)',
      'Large plasma proteins',
      'Red blood cells'
    ],
    correctIndex: 1,
    explanation: 'The DCT contributes to pH and ionic balance by selectively secreting H+ and K+ ions into the filtrate.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-44',
    type: 'mcq',
    question: 'The final segment of the nephron/urine-forming pathway, which passes through the renal medulla and plays a major role in the reabsorption of water regulated by ADH, is the:',
    options: [
      'Proximal convoluted tubule',
      'Collecting duct',
      'Bowman\'s capsule',
      'Glomerulus'
    ],
    correctIndex: 1,
    explanation: 'The collecting duct, which passes through the medulla, is responsible for reabsorbing a large amount of water, a process regulated significantly by the hormone ADH.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-45',
    type: 'mcq',
    question: 'The collecting duct is also somewhat permeable to a small amount of a certain nitrogenous waste product, which contributes to maintaining the osmotic gradient of the medullary interstitium. This substance is:',
    options: [
      'Glucose',
      'Urea',
      'Uric acid',
      'Ammonia'
    ],
    correctIndex: 1,
    explanation: 'The collecting duct is permeable to a limited extent to urea, and this urea contributes to the establishment and maintenance of the osmotic gradient in the medullary interstitium.',
    difficulty: 'hard'
  },
  {
    id: 'excretory-products-and-their-elimination-46',
    type: 'mcq',
    question: 'The mechanism by which the loop of Henle and the vasa recta work together to maintain a concentration gradient in the medullary interstitium, essential for producing concentrated urine, is called:',
    options: [
      'Simple diffusion mechanism',
      'The countercurrent mechanism',
      'Active transport mechanism only',
      'Osmotic filtration mechanism'
    ],
    correctIndex: 1,
    explanation: 'The countercurrent mechanism, involving the counter-flowing fluid movements in the loop of Henle and the vasa recta, is responsible for establishing and maintaining the medullary concentration gradient necessary for producing concentrated urine.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-47',
    type: 'mcq',
    question: 'The countercurrent mechanism allows the human kidney to achieve a very high osmolarity in the inner medullary interstitium, which can reach approximately:',
    options: [
      'About 100 mOsmol/L',
      'About 300 mOsmol/L',
      'About 1200-1400 mOsmol/L',
      'About 5000 mOsmol/L'
    ],
    correctIndex: 2,
    explanation: 'Through the countercurrent mechanism, the innermost region of the renal medulla can achieve an osmolarity as high as approximately 1200-1400 mOsmol/L, which is critical for the production of highly concentrated urine.',
    difficulty: 'hard'
  },
  {
    id: 'excretory-products-and-their-elimination-48',
    type: 'mcq',
    question: 'The overall importance of the countercurrent mechanism in the kidney is that it enables:',
    options: [
      'Increased water loss and dilute urine formation only',
      'The kidney to produce urine that is more concentrated than blood plasma, conserving body water',
      'Complete prevention of any urine formation',
      'Direct filtration of blood without any tubular processing'
    ],
    correctIndex: 1,
    explanation: 'The countercurrent mechanism allows the kidney to conserve water by producing urine that is significantly more concentrated (hypertonic) than blood plasma, an essential adaptation for water conservation.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-49',
    type: 'mcq',
    question: 'The Juxtaglomerular Apparatus (JGA) responds to a fall in glomerular blood flow/blood pressure by releasing an enzyme called:',
    options: [
      'Insulin',
      'Renin',
      'Aldosterone',
      'ADH'
    ],
    correctIndex: 1,
    explanation: 'When blood flow or blood pressure to the glomerulus decreases, the JGA releases renin, initiating the renin-angiotensin-aldosterone system (RAAS) to help restore normal pressure/filtration.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-50',
    type: 'mcq',
    question: 'Renin, released by the JGA, acts on a plasma protein called angiotensinogen (produced by the liver) to convert it into:',
    options: [
      'Angiotensin II directly',
      'Angiotensin I',
      'Aldosterone',
      'ADH'
    ],
    correctIndex: 1,
    explanation: 'Renin catalyses the conversion of angiotensinogen into angiotensin I, the first step in the renin-angiotensin-aldosterone system (RAAS).',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-51',
    type: 'mcq',
    question: 'Angiotensin I is subsequently converted into the more active angiotensin II by an enzyme called Angiotensin Converting Enzyme (ACE), found predominantly in the:',
    options: [
      'Kidneys',
      'Lungs',
      'Liver',
      'Heart'
    ],
    correctIndex: 1,
    explanation: 'Angiotensin Converting Enzyme (ACE), present predominantly in the lungs, converts angiotensin I into the biologically active angiotensin II.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-52',
    type: 'mcq',
    question: 'Angiotensin II is a potent vasoconstrictor, and it also stimulates the adrenal cortex to release which hormone, which promotes sodium and water reabsorption?',
    options: [
      'ADH',
      'Aldosterone',
      'Insulin',
      'Renin'
    ],
    correctIndex: 1,
    explanation: 'Angiotensin II stimulates the adrenal cortex to secrete aldosterone, a hormone that promotes reabsorption of sodium (and consequently water) from the DCT, helping to increase blood pressure and blood volume.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-53',
    type: 'mcq',
    question: 'Aldosterone, released by the adrenal cortex, acts primarily on the DCT to promote:',
    options: [
      'Increased excretion of sodium and water',
      'Increased reabsorption of sodium (and consequently water), leading to a rise in blood pressure and volume',
      'Decreased reabsorption of glucose',
      'Secretion of glucose into the urine'
    ],
    correctIndex: 1,
    explanation: 'Aldosterone promotes the reabsorption of sodium (and, following osmotically, water) from the DCT, helping to restore or increase blood volume and blood pressure.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-54',
    type: 'mcq',
    question: 'The hormone Atrial Natriuretic Factor (ANF), released by the walls of the atria of the heart, is generally released in response to:',
    options: [
      'Low blood pressure or low blood volume',
      'Increased blood pressure/blood volume, and acts as a vasodilator to help decrease blood pressure',
      'Low blood glucose levels',
      'Dehydration'
    ],
    correctIndex: 1,
    explanation: 'ANF is released by the atrial walls of the heart in response to increased blood pressure/volume, and it acts as a vasodilator to help reduce blood pressure, essentially counteracting the effects of the renin-angiotensin-aldosterone system.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-55',
    type: 'mcq',
    question: 'ANF (Atrial Natriuretic Factor) and the Renin-Angiotensin-Aldosterone System (RAAS) are generally considered to be:',
    options: [
      'Complementary systems that always work in the same direction',
      'Antagonistic to each other, with ANF opposing/counterbalancing the pressure-raising effects of RAAS',
      'Completely unrelated to blood pressure regulation',
      'Both responsible for producing urea'
    ],
    correctIndex: 1,
    explanation: 'ANF and RAAS act antagonistically: RAAS works to raise blood pressure and blood volume (via vasoconstriction and Na+/water retention), while ANF acts to lower blood pressure (via vasodilation), providing balanced regulation.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-56',
    type: 'mcq',
    question: 'Antidiuretic Hormone (ADH), also known as vasopressin, is synthesised in the hypothalamus and released from the:',
    options: [
      'Anterior pituitary',
      'Posterior pituitary',
      'Adrenal cortex',
      'Thyroid gland'
    ],
    correctIndex: 1,
    explanation: 'Although ADH is synthesised in the hypothalamus, it is stored in and released from the posterior pituitary (neurohypophysis).',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-57',
    type: 'mcq',
    question: 'ADH acts on the kidney tubules, primarily the distal convoluted tubule and the collecting duct, to promote:',
    options: [
      'Increased excretion of water, producing dilute urine',
      'Increased reabsorption of water, helping to concentrate the urine and conserve body water',
      'Decreased reabsorption of glucose',
      'Increased secretion of aldosterone'
    ],
    correctIndex: 1,
    explanation: 'ADH increases the permeability of the DCT and collecting duct to water, promoting increased water reabsorption, which conserves body water and produces more concentrated urine.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-58',
    type: 'mcq',
    question: 'A deficiency of ADH, or the kidney\'s inability to respond to it, can lead to a condition characterised by the excretion of large volumes of dilute urine, known as:',
    options: [
      'Diabetes mellitus',
      'Diabetes insipidus',
      'Glomerulonephritis',
      'Uraemia'
    ],
    correctIndex: 1,
    explanation: 'A deficiency of ADH (or resistance to its action) results in impaired water reabsorption, leading to diabetes insipidus, characterised by excretion of large volumes of dilute urine.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-59',
    type: 'mcq',
    question: 'Micturition, the process of urination, is best described as:',
    options: [
      'A purely voluntary act with no involvement of any reflex mechanism',
      'A reflex action, though it can also be voluntarily controlled to some extent by higher brain centres',
      'A process entirely controlled by the kidneys, without any involvement of the bladder or nervous system',
      'A process that only occurs during sleep'
    ],
    correctIndex: 1,
    explanation: 'Micturition is fundamentally a reflex action initiated by stretch receptors in the bladder wall, but it can also be consciously controlled (initiated or delayed) to some extent by higher brain centres.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-60',
    type: 'mcq',
    question: 'The urge to urinate is generated when the urinary bladder becomes sufficiently distended with accumulated urine, stimulating:',
    options: [
      'Chemoreceptors in the kidney',
      'Stretch receptors in the walls of the bladder, which send signals to the central nervous system',
      'Osmoreceptors in the hypothalamus exclusively',
      'Baroreceptors in the aorta'
    ],
    correctIndex: 1,
    explanation: 'As the bladder fills and stretches, stretch receptors in its walls are activated, sending signals to the CNS that generate the urge to void (micturition reflex).',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-61',
    type: 'mcq',
    question: 'Besides the kidneys, other organs also contribute to the elimination of body wastes. The lungs, for instance, primarily help eliminate:',
    options: [
      'Solid nitrogenous wastes like urea',
      'Carbon dioxide and water vapour',
      'Bile pigments',
      'Excess salts'
    ],
    correctIndex: 1,
    explanation: 'The lungs play a role in excretion by removing CO2 (a metabolic waste product) and some water vapour from the body during exhalation.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-62',
    type: 'mcq',
    question: 'The liver contributes to the body\'s excretory function by producing bile, which contains substances such as:',
    options: [
      'Only digestive enzymes',
      'Bile pigments (like bilirubin), cholesterol, and various degraded steroid hormones and drugs',
      'Only water and salts',
      'Antibodies exclusively'
    ],
    correctIndex: 1,
    explanation: 'The liver excretes several substances via bile, including bile pigments (from haemoglobin breakdown), cholesterol, and degraded steroid hormones, vitamins, and drug metabolites.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-63',
    type: 'mcq',
    question: 'Sweat glands present in human skin contribute to excretion by eliminating a mixture of water, sodium chloride, and small amounts of:',
    options: [
      'Bile pigments',
      'Urea',
      'Glucose',
      'Hemoglobin'
    ],
    correctIndex: 1,
    explanation: 'Sweat contains water, sodium chloride, and small quantities of urea, all of which are eliminated via the skin\'s sweat glands, in addition to sweat\'s primary role in thermoregulation.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-64',
    type: 'mcq',
    question: 'Sebaceous glands in the skin secrete a substance called sebum, which contains:',
    options: [
      'Only water',
      'Waxes, sterols, hydrocarbons, and fatty acids',
      'Only glucose',
      'Only urea'
    ],
    correctIndex: 1,
    explanation: 'Sebaceous glands secrete sebum, a substance composed of waxes, sterols, hydrocarbons, and fatty acids, contributing to skin lubrication and minor excretory function.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-65',
    type: 'mcq',
    question: 'Uraemia is a medical condition characterised by:',
    options: [
      'The complete absence of urea production in the liver',
      'The abnormal accumulation of urea in the blood, typically due to kidney malfunction',
      'Excessive protein content in urine only',
      'The presence of glucose in urine'
    ],
    correctIndex: 1,
    explanation: 'Uraemia refers to the accumulation of urea (and other nitrogenous wastes) in the blood, usually resulting from impaired kidney function.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-66',
    type: 'mcq',
    question: 'Renal calculi, commonly known as kidney stones, are formed due to the crystallisation of certain substances, such as:',
    options: [
      'Glucose',
      'Oxalate (and other similar substances) within the kidney',
      'Amino acids exclusively',
      'Haemoglobin'
    ],
    correctIndex: 1,
    explanation: 'Renal calculi (kidney stones) form due to the crystallisation and accumulation of substances like oxalate within parts of the kidney.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-67',
    type: 'mcq',
    question: 'Glomerulonephritis is a disorder characterised by:',
    options: [
      'Inflammation of the glomeruli of the kidney',
      'Formation of kidney stones only',
      'Complete absence of nephrons',
      'Excessive secretion of ADH'
    ],
    correctIndex: 0,
    explanation: 'Glomerulonephritis refers to the inflammation of the glomeruli within the kidney, which can impair normal filtration function.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-68',
    type: 'mcq',
    question: 'When both kidneys fail to function adequately, one option for artificially removing nitrogenous wastes from the blood is a medical procedure called:',
    options: [
      'Angioplasty',
      'Dialysis, using an artificial kidney machine',
      'Endoscopy',
      'Chemotherapy'
    ],
    correctIndex: 1,
    explanation: 'Dialysis, performed using an artificial kidney machine (haemodialysis) or through the peritoneal cavity (peritoneal dialysis), is used to artificially remove wastes from the blood when the kidneys fail.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-69',
    type: 'mcq',
    question: 'In haemodialysis, blood from the patient is passed through a machine containing a special fluid and a semi-permeable membrane, allowing:',
    options: [
      'Only red blood cells to be filtered out',
      'Nitrogenous wastes to diffuse out of the blood into the dialysing fluid, based on a concentration gradient',
      'Blood to be completely replaced with new blood',
      'The addition of extra nitrogenous wastes into the blood'
    ],
    correctIndex: 1,
    explanation: 'In haemodialysis, blood is passed alongside a dialysing fluid across a semi-permeable membrane, allowing nitrogenous wastes in the blood to diffuse out into the fluid down their concentration gradient, effectively purifying the blood.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-70',
    type: 'mcq',
    question: 'A permanent and effective treatment for complete kidney failure, when available and suitable, is:',
    options: [
      'Repeated dialysis sessions only, without any other alternative',
      'Kidney transplantation, replacing the non-functional kidney with a healthy donor kidney',
      'Complete removal of both kidneys with no replacement',
      'Taking only dietary supplements'
    ],
    correctIndex: 1,
    explanation: 'Kidney transplantation, in which a healthy donor kidney replaces a non-functional one, offers a more permanent solution compared to ongoing dialysis for patients with complete kidney failure.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-71',
    type: 'mcq',
    question: 'Which of the following correctly ranks the three main nitrogenous wastes in order of increasing toxicity (from least to most toxic)?',
    options: [
      'Ammonia < Urea < Uric acid',
      'Uric acid < Urea < Ammonia',
      'Urea < Ammonia < Uric acid',
      'Uric acid < Ammonia < Urea'
    ],
    correctIndex: 1,
    explanation: 'In terms of toxicity, uric acid is the least toxic, urea is intermediate, and ammonia is the most toxic among the three main nitrogenous waste products.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-72',
    type: 'mcq',
    question: 'Which mode of nitrogenous waste excretion is generally considered most advantageous for animals developing within a shelled egg (such as birds and reptiles)?',
    options: [
      'Ammonotelism, since ammonia is easy to produce',
      'Uricotelism, since uric acid can be stored as a relatively harmless, insoluble semi-solid paste within the egg without endangering the developing embryo',
      'Ureotelism, since urea requires very little energy to synthesise',
      'None of these modes offer any particular advantage for egg-laying animals'
    ],
    correctIndex: 1,
    explanation: 'Uricotelism is especially advantageous for egg-laying animals like birds and reptiles, since uric acid can be safely stored within the egg as an insoluble, non-toxic paste without harming the developing embryo, unlike the more toxic and water-demanding ammonia or urea.',
    difficulty: 'hard'
  },
  {
    id: 'excretory-products-and-their-elimination-73',
    type: 'mcq',
    question: 'The primary reabsorption of glucose from the glomerular filtrate under normal physiological conditions occurs mainly in the:',
    options: [
      'Distal convoluted tubule',
      'Proximal convoluted tubule, where glucose is almost completely reabsorbed',
      'Collecting duct',
      'Loop of Henle'
    ],
    correctIndex: 1,
    explanation: 'Under normal conditions, glucose filtered at the glomerulus is almost entirely reabsorbed in the Proximal Convoluted Tubule, so healthy urine typically contains no glucose.',
    difficulty: 'medium'
  },
  {
    id: 'excretory-products-and-their-elimination-74',
    type: 'mcq',
    question: 'The presence of glucose in the urine (glycosuria) generally indicates that the amount of glucose filtered has exceeded the reabsorptive capacity of the:',
    options: [
      'Loop of Henle',
      'Proximal convoluted tubule',
      'Collecting duct',
      'Bowman\'s capsule'
    ],
    correctIndex: 1,
    explanation: 'Glycosuria (glucose in urine) typically occurs when the blood glucose level is so high that the amount filtered exceeds the maximum reabsorptive capacity of the PCT, as seen in conditions like diabetes mellitus.',
    difficulty: 'hard'
  },
  {
    id: 'excretory-products-and-their-elimination-75',
    type: 'mcq',
    question: 'Assertion: The countercurrent mechanism is essential for the production of concentrated (hypertonic) urine.\nReason: This mechanism relies on the counter-flowing arrangement of the loop of Henle and the vasa recta, which together help establish and maintain a high osmotic gradient in the medullary interstitium.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The countercurrent arrangement of the loop of Henle and vasa recta correctly and directly explains how the medullary osmotic gradient is established and maintained, which is essential for producing concentrated urine.',
    difficulty: 'hard'
  },
  {
    id: 'excretory-products-and-their-elimination-76',
    type: 'mcq',
    question: 'Assertion: A fall in blood pressure/glomerular blood flow activates the renin-angiotensin-aldosterone system (RAAS).\nReason: Renin, released by the JGA in response to reduced blood flow, ultimately leads to the formation of angiotensin II and the release of aldosterone, both of which act to raise blood pressure.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The described renin-angiotensin-aldosterone pathway correctly explains how a fall in blood pressure/glomerular blood flow triggers a hormonal cascade that ultimately works to restore normal blood pressure.',
    difficulty: 'hard'
  },
  {
    id: 'excretory-products-and-their-elimination-77',
    type: 'mcq',
    question: 'Assertion: Uricotelic animals generally lose much less water during nitrogenous waste excretion compared to ammonotelic animals.\nReason: Uric acid is excreted as a semi-solid, relatively insoluble paste, requiring far less water for its elimination compared to the highly water-soluble and toxic ammonia.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'Since uric acid can be excreted as a semi-solid, low-solubility paste, it requires much less water than the highly toxic, water-soluble ammonia, correctly explaining why uricotelic animals conserve more water during excretion.',
    difficulty: 'hard'
  },
  {
    id: 'excretory-products-and-their-elimination-78',
    type: 'mcq',
    question: 'Which of the following best summarises the overall functional relationship between glomerular filtration and tubular reabsorption in the nephron?',
    options: [
      'Filtration produces a large volume of non-selective filtrate, while tubular reabsorption then selectively retrieves the vast majority of useful substances and water, leaving behind concentrated waste as urine',
      'Filtration and reabsorption are entirely separate, unrelated processes that never interact',
      'Filtration alone is sufficient to produce urine, with no need for any subsequent reabsorption',
      'Tubular reabsorption occurs before glomerular filtration in the nephron'
    ],
    correctIndex: 0,
    explanation: 'The overall strategy of the nephron is to first non-selectively filter a large volume of fluid at the glomerulus, and then selectively reabsorb the vast majority of useful substances and water along the tubule, ultimately concentrating only the waste products into a much smaller volume of urine.',
    difficulty: 'medium'
  }
];

export default questions;
