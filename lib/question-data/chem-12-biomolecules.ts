<<<<<<< HEAD
import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Biomolecules
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question [] = [
  {
    id: 'biomolecules-chemistry-1',
    type: 'mcq',
    question: 'Carbohydrates that cannot be further hydrolysed into simpler polyhydroxy compounds are classified as:',
    options: [
      'Oligosaccharides',
      'Monosaccharides',
      'Polysaccharides',
      'Disaccharides, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Monosaccharides are the simplest carbohydrates, unable to be hydrolysed into any further, simpler polyhydroxy aldehyde or ketone units.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-2',
    type: 'mcq',
    question: 'Carbohydrates that, upon hydrolysis, yield a small number (typically 2 to 10) of monosaccharide units are classified as:',
    options: [
      'Monosaccharides',
      'Polysaccharides',
      'Amino sugars, exclusively',
      'Oligosaccharides'
    ],
    correctIndex: 3,
    explanation: 'Oligosaccharides yield a relatively small number (2 to 10) of monosaccharide units upon hydrolysis, with disaccharides being the most common example.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-3',
    type: 'mcq',
    question: 'Carbohydrates that, upon hydrolysis, yield a very large number of monosaccharide units are classified as:',
    options: [
      'Polysaccharides',
      'Monosaccharides',
      'Oligosaccharides',
      'Disaccharides, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Polysaccharides consist of a very large number of monosaccharide units linked together, examples including starch, cellulose, and glycogen.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-4',
    type: 'mcq',
    question: 'A carbohydrate capable of reducing Fehling\'s solution or Tollens\' reagent, due to the presence of a free aldehyde or ketone group, is classified as a:',
    options: [
      'Non-reducing sugar',
      'Polysaccharide, exclusively, regardless of its actual structure',
      'Reducing sugar',
      'Amino acid, an entirely unrelated class of biomolecule'
    ],
    correctIndex: 2,
    explanation: 'Reducing sugars possess a free aldehyde or ketone group capable of reducing mild oxidising agents like Fehling\'s solution or Tollens\' reagent.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-5',
    type: 'mcq',
    question: 'Sucrose is classified as a non-reducing sugar mainly because, in its structure, both anomeric carbons of the constituent monosaccharide units are involved in forming the:',
    options: [
      'Peptide bond, an entirely unrelated type of linkage',
      'Phosphodiester bond, an entirely unrelated type of linkage',
      'Glycosidic linkage, leaving no free aldehyde or ketone group',
      'Hydrogen bond, with no relevance to the glycosidic linkage at all'
    ],
    correctIndex: 2,
    explanation: 'In sucrose, both anomeric carbons of glucose and fructose are involved in the glycosidic linkage joining them, leaving no free aldehyde or ketone group available to act as a reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-6',
    type: 'mcq',
    question: 'Glucose can be industrially prepared through the hydrolysis of sucrose or, alternatively, through the hydrolysis of:',
    options: [
      'Starch',
      'Cellulose, exclusively, with no other source ever used',
      'Proteins, exclusively',
      'Nucleic acids, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Glucose can be prepared by the hydrolysis of either sucrose (using dilute HCl) or starch (using dilute H2SO4 under appropriate conditions).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-7',
    type: 'mcq',
    question: 'The oxidation of glucose with bromine water produces gluconic acid, a reaction that confirms the presence of a(n) ___ group in the open-chain structure of glucose.',
    options: [
      'Ketone',
      'Ester',
      'Ether',
      'Aldehyde (-CHO)'
    ],
    correctIndex: 3,
    explanation: 'Since bromine water selectively oxidises the aldehyde group (without affecting the hydroxyl groups), the formation of gluconic acid from glucose confirms the presence of a -CHO group in its open-chain structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-8',
    type: 'mcq',
    question: 'The reaction of glucose with hydroxylamine (NH2OH) to form an oxime, and its ability to add hydrogen cyanide (HCN), together provide chemical evidence for the presence of a:',
    options: [
      'Carboxylic acid group',
      'Carbonyl group (specifically, an aldehyde group)',
      'Ether linkage',
      'Ester linkage'
    ],
    correctIndex: 1,
    explanation: 'The ability of glucose to form an oxime with hydroxylamine and to add HCN are both classic chemical tests confirming the presence of a carbonyl (aldehyde) group in its structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-9',
    type: 'mcq',
    question: 'Acetylation of glucose with acetic anhydride produces a pentaacetate derivative, a result that confirms the presence of how many hydroxyl (-OH) groups in the glucose molecule?',
    options: [
      'Six',
      'Four',
      'Two',
      'Five'
    ],
    correctIndex: 3,
    explanation: 'The formation of a pentaacetate derivative upon acetylation confirms the presence of five hydroxyl groups within the glucose molecule.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-10',
    type: 'mcq',
    question: 'Oxidation of glucose with nitric acid (HNO3) produces a dicarboxylic acid called saccharic acid, a result that confirms that glucose contains, at its two ends, both an aldehyde group and a:',
    options: [
      'Second aldehyde group, identical to the first',
      'Primary alcoholic group (-CH2OH), which is oxidised to a second carboxylic acid group',
      'Ketone group, rather than a second acid-forming group',
      'Ether linkage, rather than a second acid-forming group'
    ],
    correctIndex: 1,
    explanation: 'The formation of the dicarboxylic acid (saccharic acid) upon vigorous oxidation with HNO3 confirms that glucose has a primary alcoholic group (-CH2OH) at one end (which becomes a second -COOH) in addition to the aldehyde group at the other end.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-chemistry-11',
    type: 'mcq',
    question: 'Prolonged treatment of glucose with hydrogen iodide (HI) reduces it completely to n-hexane, a result that confirms that all six carbon atoms of glucose are arranged in a:',
    options: [
      'Straight (unbranched) chain',
      'Highly branched chain',
      'Cyclic ring, with no open-chain character at all',
      'Structure with no carbon atoms whatsoever'
    ],
    correctIndex: 0,
    explanation: 'The formation of the straight-chain hydrocarbon n-hexane upon complete reduction with HI confirms that all six carbon atoms of glucose are arranged in an unbranched, straight chain.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-12',
    type: 'mcq',
    question: 'The molecular formula of glucose is generally established, through elemental analysis and molecular mass determination, to be:',
    options: [
      'C5H10O5',
      'C12H22O11',
      'C6H12O6',
      'C6H10O5'
    ],
    correctIndex: 2,
    explanation: 'Glucose has the molecular formula C6H12O6, consistent with its classification as an aldohexose.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-13',
    type: 'mcq',
    question: 'The overall body of chemical evidence obtained from various reactions (bromine water oxidation, HCN addition, acetylation, HNO3 oxidation, and HI reduction) collectively established the structure of glucose as an:',
    options: [
      'Open-chain ketohexose, with no aldehyde group present at all',
      'Closed-ring structure exclusively, with absolutely no open-chain form possible',
      'Open-chain aldohexose, with five hydroxyl groups and one terminal aldehyde group',
      'Simple, unfunctionalised hydrocarbon, with no oxygen atoms at all'
    ],
    correctIndex: 2,
    explanation: 'The combined evidence from these classical reactions established the open-chain structure of glucose as an aldohexose bearing five hydroxyl groups and one terminal aldehyde group.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-14',
    type: 'mcq',
    question: 'Certain anomalous experimental observations regarding glucose (such as its failure to give certain expected aldehyde-specific test results as strongly as predicted) led chemists to propose that glucose actually exists predominantly in a:',
    options: [
      'Cyclic (ring) structure',
      'Purely open-chain structure, exactly as initially proposed, with no modification needed',
      'Structure entirely lacking any oxygen atoms',
      'Structure identical in every respect to fructose'
    ],
    correctIndex: 0,
    explanation: 'Certain anomalous experimental results prompted chemists to propose that glucose exists predominantly in a cyclic (ring) form, rather than purely as the open-chain structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-15',
    type: 'mcq',
    question: 'The cyclic structure of glucose arises from an intramolecular reaction between the aldehyde group at C-1 and the hydroxyl group at:',
    options: [
      'C-2',
      'C-5',
      'C-3',
      'C-6'
    ],
    correctIndex: 1,
    explanation: 'The cyclic (pyranose) structure of glucose forms through an intramolecular reaction between the aldehyde group at C-1 and the hydroxyl group at C-5, forming a six-membered ring.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-16',
    type: 'mcq',
    question: 'The six-membered cyclic ring form of glucose, formed through this intramolecular reaction, is specifically referred to as the:',
    options: [
      'Furanose form',
      'Open-chain form, exclusively, with no cyclic character implied',
      'Anomeric form, a term unrelated to ring size',
      'Pyranose form'
    ],
    correctIndex: 3,
    explanation: 'The six-membered cyclic ring structure of glucose is specifically called the pyranose form, by analogy with the six-membered oxygen-containing ring compound pyran.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-17',
    type: 'mcq',
    question: 'The carbon atom that becomes a new stereocentre upon cyclisation of glucose (specifically, C-1, which was the original aldehyde carbon) is referred to as the:',
    options: [
      'Terminal carbon, a general term unrelated to the specific stereochemical designation',
      'Anomeric carbon',
      'Primary carbon, a general term unrelated to the specific stereochemical designation',
      'Quaternary carbon, an entirely inapplicable term in this context'
    ],
    correctIndex: 1,
    explanation: 'The C-1 carbon, which becomes a new stereocentre upon ring closure, is specifically designated the anomeric carbon.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-18',
    type: 'mcq',
    question: 'The two cyclic forms of glucose, alpha-D-glucose and beta-D-glucose, differ from each other only in their configuration at the anomeric carbon, and are therefore referred to as:',
    options: [
      'Enantiomers, a term for non-superimposable mirror images differing at every stereocentre',
      'Constitutional (structural) isomers, differing in atom connectivity',
      'Completely unrelated, distinct compounds',
      'Anomers'
    ],
    correctIndex: 3,
    explanation: 'Alpha-D-glucose and beta-D-glucose are anomers, a specific type of diastereomer differing only in configuration at the anomeric carbon (C-1).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-19',
    type: 'mcq',
    question: 'The spontaneous change in the specific rotation of a freshly prepared aqueous solution of glucose (whether starting from the pure alpha or beta anomer) until it reaches a stable, equilibrium value, is called:',
    options: [
      'Mutarotation',
      'Denaturation',
      'Diazotisation',
      'Saponification'
    ],
    correctIndex: 0,
    explanation: 'Mutarotation refers to the spontaneous change in optical rotation observed for a freshly dissolved glucose solution, reflecting the gradual interconversion between the alpha and beta anomeric forms (via the open-chain intermediate) until equilibrium is reached.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-20',
    type: 'mcq',
    question: 'Unlike glucose, which is an aldohexose, fructose is classified as a:',
    options: [
      'Aldopentose',
      'Ketopentose',
      'Ketohexose',
      'Aldoheptose'
    ],
    correctIndex: 2,
    explanation: 'Fructose is a ketohexose, containing a ketone functional group (at C-2) rather than the aldehyde group found in glucose (an aldohexose).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-21',
    type: 'mcq',
    question: 'The cyclic (ring) form of fructose is characteristically a five-membered ring, referred to as the:',
    options: [
      'Furanose form',
      'Pyranose form, identical to the ring form of glucose',
      'Open-chain form, exclusively, with no cyclic character implied',
      'Anomeric form, a term unrelated to ring size'
    ],
    correctIndex: 0,
    explanation: 'Fructose characteristically adopts a five-membered cyclic ring structure, called the furanose form, distinct from the six-membered pyranose form of glucose.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-22',
    type: 'mcq',
    question: 'Hydrolysis of sucrose (cane sugar) yields an equimolar mixture of glucose and:',
    options: [
      'Galactose',
      'A second molecule of glucose, giving two identical products',
      'Fructose',
      'Maltose'
    ],
    correctIndex: 2,
    explanation: 'Hydrolysis of sucrose yields one molecule of glucose and one molecule of fructose in equimolar amounts.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-23',
    type: 'mcq',
    question: 'The equimolar mixture of glucose and fructose obtained from the hydrolysis of sucrose is commonly referred to as:',
    options: [
      'Reducing sugar, a term describing sucrose itself, which is actually non-reducing',
      'Invert sugar',
      'Maltose, an entirely different disaccharide',
      'Lactose, an entirely different disaccharide'
    ],
    correctIndex: 1,
    explanation: 'The glucose-fructose mixture obtained from sucrose hydrolysis is called invert sugar, named for the inversion (change in sign) of optical rotation observed upon hydrolysis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-24',
    type: 'mcq',
    question: 'The inversion of optical rotation observed during the hydrolysis of sucrose (from dextrorotatory sucrose to a net laevorotatory product mixture) occurs mainly because fructose has a much larger:',
    options: [
      'Molecular mass than glucose, with no relevance to optical rotation at all',
      'Solubility in water than glucose, with no relevance to optical rotation at all',
      'Melting point than glucose, with no relevance to optical rotation at all',
      'Laevorotation (negative specific rotation) than the positive (dextro) rotation contributed by glucose'
    ],
    correctIndex: 3,
    explanation: 'Fructose has a strongly negative (laevorotatory) specific rotation that outweighs the positive (dextrorotatory) contribution of glucose, causing the overall optical rotation of the hydrolysed mixture to invert compared to that of the original sucrose.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-chemistry-25',
    type: 'mcq',
    question: 'In sucrose, the glycosidic linkage connecting glucose and fructose specifically involves the anomeric carbons of both monosaccharide units (C-1 of glucose and C-2 of fructose), and this is why sucrose is classified as a:',
    options: [
      'Reducing sugar, exactly like maltose or lactose',
      'Polysaccharide, rather than a simple disaccharide',
      'Amino sugar, an entirely unrelated classification',
      'Non-reducing sugar'
    ],
    correctIndex: 3,
    explanation: 'Since the glycosidic bond in sucrose involves both anomeric carbons of glucose and fructose, no free aldehyde or ketone group remains, classifying sucrose as a non-reducing sugar.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-26',
    type: 'mcq',
    question: 'Maltose, a disaccharide formed from two units of alpha-D-glucose linked via a C1-C4 glycosidic bond, is classified as a reducing sugar because it retains:',
    options: [
      'No free anomeric carbon whatsoever, identical to sucrose',
      'One free anomeric carbon (and hence a free aldehyde group) on one of the two glucose units',
      'Two free anomeric carbons, on both glucose units simultaneously',
      'A free ketone group, rather than a free aldehyde group'
    ],
    correctIndex: 1,
    explanation: 'Since only one anomeric carbon is involved in the glycosidic linkage of maltose, the second glucose unit retains its free anomeric carbon (and hence a free aldehyde-equivalent group), making maltose a reducing sugar.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-27',
    type: 'mcq',
    question: 'Lactose (milk sugar), a disaccharide found in milk, is formed by the combination of beta-D-galactose and:',
    options: [
      'Beta-D-fructose',
      'Alpha-D-glucose, exclusively',
      'Beta-D-glucose',
      'A second molecule of beta-D-galactose'
    ],
    correctIndex: 2,
    explanation: 'Lactose (milk sugar) is a disaccharide composed of beta-D-galactose linked to beta-D-glucose via a C1-C4 glycosidic bond.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-28',
    type: 'mcq',
    question: 'Like maltose, lactose is also classified as a:',
    options: [
      'Reducing sugar',
      'Non-reducing sugar, exactly like sucrose',
      'Polysaccharide, rather than a simple disaccharide',
      'Monosaccharide, rather than a disaccharide'
    ],
    correctIndex: 0,
    explanation: 'Since one anomeric carbon remains free in the lactose molecule, it is classified as a reducing sugar, similar to maltose.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-29',
    type: 'mcq',
    question: 'Starch, an important storage polysaccharide in plants, is composed entirely of units of:',
    options: [
      'Alpha-D-glucose',
      'Beta-D-glucose',
      'Alpha-D-fructose',
      'Beta-D-galactose'
    ],
    correctIndex: 0,
    explanation: 'Starch is a polymer composed entirely of alpha-D-glucose units, linked together through glycosidic bonds.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-30',
    type: 'mcq',
    question: 'Starch consists of two main structural components: a linear (unbranched) fraction called amylose, and a branched fraction called:',
    options: [
      'Cellulose',
      'Glycogen',
      'Amylopectin',
      'Chitin'
    ],
    correctIndex: 2,
    explanation: 'Starch is composed of amylose (the linear, unbranched fraction) and amylopectin (the branched fraction).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-31',
    type: 'mcq',
    question: 'Amylose, the linear (unbranched) component of starch, is characteristically responsible for producing which colour reaction when treated with iodine?',
    options: [
      'Bright red colouration',
      'Complete absence of any colour change',
      'Green colouration',
      'Blue-black colouration'
    ],
    correctIndex: 3,
    explanation: 'Amylose, due to its helical, linear structure, is responsible for the characteristic blue-black colouration observed when starch reacts with iodine.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-32',
    type: 'mcq',
    question: 'Amylopectin, the branched component of starch, differs structurally from amylose by containing, in addition to alpha-1,4-glycosidic linkages, occasional branch points formed by:',
    options: [
      'Beta-1,4-glycosidic linkages, identical to those found in cellulose',
      'Alpha-1,6-glycosidic linkages',
      'Peptide bonds, an entirely unrelated type of linkage',
      'Phosphodiester bonds, an entirely unrelated type of linkage'
    ],
    correctIndex: 1,
    explanation: 'Amylopectin\'s branched structure arises from occasional alpha-1,6-glycosidic linkages at branch points, in addition to the predominant alpha-1,4-linkages of the main chain.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-33',
    type: 'mcq',
    question: 'Cellulose, an important structural polysaccharide forming plant cell walls, is composed entirely of units of:',
    options: [
      'Alpha-D-glucose',
      'Beta-D-fructose',
      'Alpha-D-galactose',
      'Beta-D-glucose'
    ],
    correctIndex: 3,
    explanation: 'Unlike starch (composed of alpha-D-glucose), cellulose is composed entirely of beta-D-glucose units, linked via beta-1,4-glycosidic bonds.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-34',
    type: 'mcq',
    question: 'The linear, unbranched chains of cellulose are held together by extensive intermolecular hydrogen bonding, a structural feature that provides the:',
    options: [
      'Considerable mechanical strength and rigidity characteristic of plant cell walls',
      'High water solubility characteristic of cellulose',
      'Extremely low mechanical strength characteristic of cellulose',
      'Ability of cellulose to be efficiently digested by the human digestive system'
    ],
    correctIndex: 0,
    explanation: 'The extensive intermolecular hydrogen bonding between the linear, unbranched cellulose chains provides the considerable mechanical strength and structural rigidity characteristic of plant cell walls.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-35',
    type: 'mcq',
    question: 'Glycogen, the storage polysaccharide found in animals (stored mainly in the liver and muscles), is structurally similar to amylopectin but is generally found to be:',
    options: [
      'Completely unbranched, unlike amylopectin',
      'More highly branched',
      'Composed of beta-D-glucose, unlike the alpha-D-glucose of amylopectin',
      'Identical in every structural respect to cellulose'
    ],
    correctIndex: 1,
    explanation: 'Glycogen, sometimes called \'animal starch,\' is structurally similar to amylopectin but is generally even more highly branched.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-36',
    type: 'mcq',
    question: 'Glycogen is often referred to as \'animal starch\' mainly because it serves an analogous biological function to plant starch, namely:',
    options: [
      'Providing structural rigidity to animal cell walls, analogous to cellulose in plants',
      'Serving as the primary genetic material in animal cells',
      'Storage of glucose (carbohydrate energy reserves)',
      'Functioning as a digestive enzyme in animal metabolism'
    ],
    correctIndex: 2,
    explanation: 'Glycogen is called \'animal starch\' because, like plant starch, it functions as a storage form of glucose (carbohydrate energy reserves), in this case within animal tissues such as the liver and muscles.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-37',
    type: 'mcq',
    question: 'Proteins whose molecules are composed of long, thread-like chains aligned roughly parallel to a single axis, generally held together by strong intermolecular forces (such as hydrogen bonds or disulphide bonds), are classified as:',
    options: [
      'Globular proteins',
      'Denatured proteins, exclusively',
      'Fibrous proteins',
      'Amino acid derivatives, an unrelated classification'
    ],
    correctIndex: 2,
    explanation: 'Fibrous proteins consist of elongated, thread-like polypeptide chains held together by strong intermolecular forces, giving them a characteristic fibre-like structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-38',
    type: 'mcq',
    question: 'Which of the following is a classic example of a fibrous protein?',
    options: [
      'Insulin',
      'Keratin (found in hair and wool)',
      'Albumin',
      'Haemoglobin'
    ],
    correctIndex: 1,
    explanation: 'Keratin, the structural protein found in hair, wool, and nails, is a classic example of a fibrous protein.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-39',
    type: 'mcq',
    question: 'Proteins whose polypeptide chains coil up into a compact, roughly spherical shape, generally showing good water solubility, are classified as:',
    options: [
      'Globular proteins',
      'Fibrous proteins',
      'Denatured proteins, exclusively',
      'Structural (non-functional) proteins, an inaccurate general term'
    ],
    correctIndex: 0,
    explanation: 'Globular proteins adopt a compact, roughly spherical (globular) shape, generally showing good solubility in water, and often serving functional roles such as enzymes or hormones.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-40',
    type: 'mcq',
    question: 'The simplest level of protein structure, describing the specific linear sequence of amino acids joined by peptide bonds, is called the protein\'s:',
    options: [
      'Secondary structure',
      'Tertiary structure',
      'Quaternary structure',
      'Primary structure'
    ],
    correctIndex: 3,
    explanation: 'Primary structure refers to the specific, linear sequence of amino acids that make up a given protein\'s polypeptide chain.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-41',
    type: 'mcq',
    question: 'The regular, repeating folding pattern of a polypeptide chain, arising from hydrogen bonding between nearby amino acid residues, is described as the protein\'s:',
    options: [
      'Secondary structure',
      'Primary structure',
      'Tertiary structure',
      'Quaternary structure'
    ],
    correctIndex: 0,
    explanation: 'Secondary structure refers to regular, repeating local folding patterns (such as the alpha-helix or beta-pleated sheet) formed through hydrogen bonding along the polypeptide backbone.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-42',
    type: 'mcq',
    question: 'The alpha-helix, a common type of protein secondary structure, is described as a:',
    options: [
      'Flat, sheet-like structure with no coiling at all',
      'Left-handed, spiral structure exclusively, with no right-handed form ever observed',
      'Purely linear, uncoiled structure',
      'Right-handed, spiral (coiled) structure'
    ],
    correctIndex: 3,
    explanation: 'The alpha-helix is a common protein secondary structure characterised by a right-handed, spiral (coiled) arrangement of the polypeptide backbone.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-43',
    type: 'mcq',
    question: 'The beta-pleated sheet, another common type of protein secondary structure, is characterised by polypeptide chains arranged side by side, forming a:',
    options: [
      'Purely spherical, globular structure, with no sheet-like character at all',
      'Sheet-like structure held together by intermolecular hydrogen bonding',
      'Coiled, helical structure, identical to the alpha-helix',
      'Structure entirely lacking any hydrogen bonding whatsoever'
    ],
    correctIndex: 1,
    explanation: 'The beta-pleated sheet structure arises when polypeptide chains lie side by side, held together by intermolecular hydrogen bonding, forming a characteristic sheet-like arrangement.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-44',
    type: 'mcq',
    question: 'The overall three-dimensional folding of a protein\'s secondary structural elements into a specific, compact, functional shape is described as the protein\'s:',
    options: [
      'Primary structure',
      'Secondary structure',
      'Tertiary structure',
      'Quaternary structure'
    ],
    correctIndex: 2,
    explanation: 'Tertiary structure describes the overall three-dimensional folding of a protein, arising from the further arrangement of its secondary structural elements into a compact, functional shape.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-45',
    type: 'mcq',
    question: 'When a protein consists of more than one polypeptide chain (subunit), the spatial arrangement of these subunits relative to one another is described as the protein\'s:',
    options: [
      'Primary structure',
      'Quaternary structure',
      'Secondary structure',
      'Tertiary structure'
    ],
    correctIndex: 1,
    explanation: 'Quaternary structure describes the spatial arrangement of multiple polypeptide subunits relative to one another in proteins composed of more than one chain.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-46',
    type: 'mcq',
    question: 'Haemoglobin, a classic example of a protein exhibiting quaternary structure, is composed of multiple polypeptide subunits assembled together to form a:',
    options: [
      'Single, unassembled polypeptide chain, with no quaternary structure at all',
      'Purely fibrous, elongated structure, with no globular character',
      'Functional, multi-subunit protein complex',
      'Simple carbohydrate polymer, unrelated to protein structure entirely'
    ],
    correctIndex: 2,
    explanation: 'Haemoglobin exemplifies quaternary structure, being assembled from multiple polypeptide subunits into a single, functional multi-subunit protein complex.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-47',
    type: 'mcq',
    question: 'The loss of a protein\'s native, biologically active three-dimensional structure, typically caused by physical factors (such as heat) or chemical factors (such as a change in pH), is called:',
    options: [
      'Denaturation',
      'Mutarotation',
      'Saponification',
      'Hydrolysis, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Denaturation refers to the disruption of a protein\'s native three-dimensional structure, typically caused by heat or changes in pH, generally resulting in loss of biological activity.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-48',
    type: 'mcq',
    question: 'The coagulation of egg white observed when an egg is boiled is a classic everyday example of protein:',
    options: [
      'Mutarotation',
      'Glycosylation',
      'Esterification',
      'Denaturation'
    ],
    correctIndex: 3,
    explanation: 'The visible coagulation of egg white (albumin) upon boiling is a familiar example of heat-induced protein denaturation.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-49',
    type: 'mcq',
    question: 'During denaturation, the secondary and tertiary structure of a protein is generally disrupted, while the underlying:',
    options: [
      'Primary structure is also completely destroyed, with all peptide bonds broken',
      'Molecular formula of the protein changes entirely into a completely different compound',
      'Protein is instantly and completely converted into a simple carbohydrate',
      'Primary structure (sequence of amino acids) generally remains unchanged'
    ],
    correctIndex: 3,
    explanation: 'Denaturation primarily disrupts the secondary and tertiary structure of a protein (such as hydrogen bonding patterns), while the primary structure (the sequence of amino acids linked by peptide bonds) generally remains intact.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-50',
    type: 'mcq',
    question: 'Enzymes are biological catalysts that are chemically composed almost entirely of:',
    options: [
      'Carbohydrates',
      'Lipids',
      'Proteins',
      'Nucleic acids, exclusively'
    ],
    correctIndex: 2,
    explanation: 'The vast majority of enzymes are proteins, functioning as highly specific biological catalysts.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-51',
    type: 'mcq',
    question: 'A defining characteristic of enzyme action is their remarkably high degree of specificity, meaning that a given enzyme generally catalyses reactions involving only a particular:',
    options: [
      'Substrate (or a closely related, specific group of substrates)',
      'Any and all possible substrates, with no discrimination whatsoever',
      'Only inorganic compounds, with no activity toward any organic molecule',
      'No substrate at all; enzymes are generally understood to be completely inactive'
    ],
    correctIndex: 0,
    explanation: 'Enzymes typically show remarkably high substrate specificity, generally catalysing reactions involving only a particular substrate or closely related group of substrates.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-52',
    type: 'mcq',
    question: 'The mechanism of enzyme action is often explained using the \'lock and key\' model, which proposes that the enzyme\'s active site and the substrate have:',
    options: [
      'Completely random, unrelated shapes, with no meaningful geometric correspondence',
      'Complementary, specific geometrical shapes that fit precisely together',
      'Identical, superimposable shapes, rather than complementary shapes',
      'No defined shape whatsoever, for either the enzyme or the substrate'
    ],
    correctIndex: 1,
    explanation: 'The lock and key model of enzyme action proposes that the enzyme\'s active site and its specific substrate possess complementary geometrical shapes, allowing them to fit together precisely, much like a key fits a specific lock.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-53',
    type: 'mcq',
    question: 'Most human enzymes generally show optimum catalytic activity within a relatively narrow temperature range, typically around:',
    options: [
      '35-40°C',
      '0°C',
      '100°C',
      '500°C'
    ],
    correctIndex: 0,
    explanation: 'Human enzymes generally exhibit optimum activity within a relatively narrow temperature range, typically around 35-40°C, corresponding to normal body temperature.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-54',
    type: 'mcq',
    question: 'Vitamins are broadly classified, based on their solubility characteristics, into fat-soluble vitamins and:',
    options: [
      'Only protein-soluble vitamins, an inaccurate general classification',
      'Water-soluble vitamins',
      'Only carbohydrate-soluble vitamins, an inaccurate general classification',
      'Only mineral-soluble vitamins, an inaccurate general classification'
    ],
    correctIndex: 1,
    explanation: 'Vitamins are broadly classified based on solubility into fat-soluble vitamins (A, D, E, K) and water-soluble vitamins (the B-group vitamins and vitamin C).',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-55',
    type: 'mcq',
    question: 'Fat-soluble vitamins, such as vitamins A, D, E, and K, are generally capable of being stored in the body, particularly within the:',
    options: [
      'Kidneys, exclusively, with no storage occurring anywhere else in the body',
      'Blood plasma, exclusively, with no storage in any solid tissue at all',
      'Skeletal muscle, exclusively, with no storage in any other tissue',
      'Liver and adipose (fatty) tissue'
    ],
    correctIndex: 3,
    explanation: 'Fat-soluble vitamins can be stored within the body, particularly in the liver and adipose (fatty) tissue, unlike most water-soluble vitamins.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-56',
    type: 'mcq',
    question: 'Water-soluble vitamins (the B-group vitamins and vitamin C) generally cannot be stored in significant amounts within the body (with the notable exception of vitamin B12), meaning that any excess is typically:',
    options: [
      'Permanently stored within bone tissue, identical to fat-soluble vitamins',
      'Converted entirely into fat-soluble vitamins for long-term storage',
      'Excreted in the urine, necessitating regular dietary intake',
      'Retained indefinitely within the bloodstream without any excretion at all'
    ],
    correctIndex: 2,
    explanation: 'Since most water-soluble vitamins cannot be significantly stored in the body, excess amounts are typically excreted in the urine, necessitating their regular, consistent dietary intake.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-57',
    type: 'mcq',
    question: 'A deficiency of Vitamin A in the diet is classically associated with the development of:',
    options: [
      'Beriberi',
      'Scurvy',
      'Night blindness (and related eye disorders such as xerophthalmia)',
      'Rickets'
    ],
    correctIndex: 2,
    explanation: 'Vitamin A deficiency is classically associated with night blindness and related eye disorders, such as xerophthalmia (hardening of the cornea).',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-58',
    type: 'mcq',
    question: 'A deficiency of Vitamin B1 (thiamine) in the diet is classically associated with the development of:',
    options: [
      'Scurvy',
      'Rickets',
      'Night blindness',
      'Beriberi'
    ],
    correctIndex: 3,
    explanation: 'Vitamin B1 (thiamine) deficiency is classically associated with the disease beriberi.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-59',
    type: 'mcq',
    question: 'A deficiency of Vitamin C (ascorbic acid) in the diet is classically associated with the development of:',
    options: [
      'Scurvy (characterised by bleeding gums)',
      'Beriberi',
      'Rickets',
      'Pernicious anaemia'
    ],
    correctIndex: 0,
    explanation: 'Vitamin C deficiency is classically associated with scurvy, a disease characterised by symptoms including bleeding gums.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-60',
    type: 'mcq',
    question: 'A deficiency of Vitamin D in the diet is classically associated with the development of rickets in children, and a related condition called ___ in adults.',
    options: [
      'Beriberi, an entirely unrelated condition',
      'Osteomalacia',
      'Scurvy, an entirely unrelated condition',
      'Cheilosis, an entirely unrelated condition'
    ],
    correctIndex: 1,
    explanation: 'Vitamin D deficiency causes rickets (bone deformities) in children, and the analogous condition of osteomalacia (bone softening) in adults.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-61',
    type: 'mcq',
    question: 'A deficiency of Vitamin B12 in the diet is classically associated with the development of:',
    options: [
      'Beriberi',
      'Pernicious anaemia',
      'Rickets',
      'Scurvy'
    ],
    correctIndex: 1,
    explanation: 'Vitamin B12 deficiency is classically associated with pernicious anaemia.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-62',
    type: 'mcq',
    question: 'Vitamin K plays an essential biological role in the process of:',
    options: [
      'Blood clotting (coagulation)',
      'Vision (night vision specifically)',
      'Bone mineralisation, exclusively, with no other role',
      'Skin pigmentation, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Vitamin K is essential for normal blood clotting (coagulation), and its deficiency can impair this important process.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-63',
    type: 'mcq',
    question: 'Vitamin E, also known as tocopherol, is generally considered important for normal fertility and is also recognised as an important biological:',
    options: [
      'Coagulation factor, exclusively, with no antioxidant role at all',
      'Pigment responsible for vision, exclusively',
      'Antioxidant',
      'Digestive enzyme, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Vitamin E (tocopherol) is recognised both for its role in supporting normal fertility and for its important function as a biological antioxidant.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-64',
    type: 'mcq',
    question: 'The two main types of nucleic acids found in living organisms are DNA (deoxyribonucleic acid) and:',
    options: [
      'ATP (adenosine triphosphate), which is not classified as a nucleic acid',
      'NADH, which is not classified as a nucleic acid',
      'Glycogen, which is not classified as a nucleic acid',
      'RNA (ribonucleic acid)'
    ],
    correctIndex: 3,
    explanation: 'The two principal types of nucleic acid found in living organisms are DNA and RNA.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-65',
    type: 'mcq',
    question: 'The basic structural building block (monomer unit) of nucleic acids, composed of a nitrogenous base, a pentose sugar, and a phosphate group, is called a:',
    options: [
      'Amino acid',
      'Monosaccharide',
      'Fatty acid',
      'Nucleotide'
    ],
    correctIndex: 3,
    explanation: 'Nucleic acids are polymers built from repeating nucleotide units, each composed of a nitrogenous base, a pentose sugar, and a phosphate group.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-66',
    type: 'mcq',
    question: 'The pentose sugar specifically found in DNA (deoxyribonucleic acid) is:',
    options: [
      'Ribose',
      'Deoxyribose',
      'Glucose',
      'Fructose'
    ],
    correctIndex: 1,
    explanation: 'DNA contains the sugar deoxyribose (lacking one oxygen atom compared to ribose) as part of its nucleotide structure.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-67',
    type: 'mcq',
    question: 'The pentose sugar specifically found in RNA (ribonucleic acid) is:',
    options: [
      'Ribose',
      'Deoxyribose',
      'Glucose',
      'Galactose'
    ],
    correctIndex: 0,
    explanation: 'RNA contains the sugar ribose as part of its nucleotide structure, distinguishing it from the deoxyribose found in DNA.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-68',
    type: 'mcq',
    question: 'Unlike DNA, which contains the pyrimidine base thymine, RNA characteristically contains the pyrimidine base:',
    options: [
      'Cytosine, which is actually present in both DNA and RNA',
      'Adenine, which is a purine, not a pyrimidine',
      'Uracil',
      'Guanine, which is a purine, not a pyrimidine'
    ],
    correctIndex: 2,
    explanation: 'RNA contains uracil in place of the thymine found in DNA, as one of its characteristic pyrimidine bases (both nucleic acids share cytosine as their other pyrimidine base).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-69',
    type: 'mcq',
    question: 'According to the Watson-Crick double helix model of DNA structure, the two polynucleotide strands are arranged:',
    options: [
      'Antiparallel to each other, coiled around a common central axis',
      'Parallel to each other, running in exactly the same direction',
      'Completely separate, with no defined spatial relationship between the two strands',
      'Perpendicular to each other, at a fixed 90° angle'
    ],
    correctIndex: 0,
    explanation: 'The Watson-Crick model describes DNA as a double helix, with the two polynucleotide strands running antiparallel (in opposite directions) to each other, coiled around a shared central axis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-70',
    type: 'mcq',
    question: 'In the double helix structure of DNA, the two strands are held together by hydrogen bonding between specific, complementary pairs of nitrogenous bases, with adenine always pairing with:',
    options: [
      'Cytosine',
      'Guanine',
      'Thymine',
      'Uracil, which is not present in DNA'
    ],
    correctIndex: 2,
    explanation: 'In DNA, adenine specifically pairs with thymine (via two hydrogen bonds), one of the two complementary base-pairing relationships central to the double helix structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-71',
    type: 'mcq',
    question: 'In the double helix structure of DNA, guanine always pairs with cytosine, and this particular base pair is held together by:',
    options: [
      'Two hydrogen bonds, identical to the adenine-thymine pair',
      'Three hydrogen bonds',
      'A single covalent bond, rather than hydrogen bonding',
      'No bonding of any kind; guanine and cytosine do not actually interact directly'
    ],
    correctIndex: 1,
    explanation: 'The guanine-cytosine base pair in DNA is held together by three hydrogen bonds, one more than the two hydrogen bonds found in the adenine-thymine pair.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-72',
    type: 'mcq',
    question: 'Unlike DNA, which typically exists as a double-stranded helix, RNA is generally found to exist predominantly as a:',
    options: [
      'Double-stranded molecule, identical in every respect to DNA',
      'Triple-stranded molecule, exclusively, with no other form ever observed',
      'Molecule with no defined strand structure whatsoever',
      'Single-stranded molecule'
    ],
    correctIndex: 3,
    explanation: 'In contrast to the double-stranded helical structure of DNA, RNA is generally found to exist predominantly as a single-stranded molecule (with some notable exceptions in certain viruses).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-73',
    type: 'mcq',
    question: 'The type of RNA responsible for carrying genetic information from DNA to the site of protein synthesis (the ribosome) is called:',
    options: [
      'Transfer RNA (tRNA)',
      'Messenger RNA (mRNA)',
      'Ribosomal RNA (rRNA)',
      'Amino acid RNA, which is not an actual category of RNA'
    ],
    correctIndex: 1,
    explanation: 'Messenger RNA (mRNA) carries the genetic instructions from DNA to the ribosome, where these instructions are used to direct protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-74',
    type: 'mcq',
    question: 'The type of RNA responsible for bringing specific amino acids to the site of protein synthesis, matching them to the corresponding codon on the mRNA, is called:',
    options: [
      'Messenger RNA (mRNA)',
      'Ribosomal RNA (rRNA)',
      'Genomic RNA, which is not the standard term for this specific function',
      'Transfer RNA (tRNA)'
    ],
    correctIndex: 3,
    explanation: 'Transfer RNA (tRNA) is responsible for transporting specific amino acids to the ribosome and matching them to the appropriate codon on the mRNA strand during protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-75',
    type: 'mcq',
    question: 'The type of RNA that serves as a major structural and functional component of the ribosome itself is called:',
    options: [
      'Messenger RNA (mRNA)',
      'Transfer RNA (tRNA)',
      'Ribosomal RNA (rRNA)',
      'Plasmid RNA, which is not a standard category of cellular RNA'
    ],
    correctIndex: 2,
    explanation: 'Ribosomal RNA (rRNA) forms a major structural and functional component of the ribosome, the cellular machinery responsible for protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-76',
    type: 'mcq',
    question: 'Hormones are chemical messenger molecules, typically secreted by endocrine glands and transported through the bloodstream to regulate the biological activity of:',
    options: [
      'Specific target organs or tissues',
      'Every single cell in the body equally and identically, with no specificity at all',
      'Only the endocrine gland that originally secreted the hormone, with no effect elsewhere',
      'No particular tissue at all; hormones are understood to have no specific biological target'
    ],
    correctIndex: 0,
    explanation: 'Hormones are chemical messengers, secreted by endocrine glands and transported via the bloodstream, that regulate the biological activity of specific target organs or tissues.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-77',
    type: 'mcq',
    question: 'Structurally, hormones can be broadly classified into several categories, including steroid hormones, polypeptide hormones, and:',
    options: [
      'Amino acid derivative hormones',
      'Only carbohydrate-based hormones, with no other structural category recognised',
      'Only nucleic acid-based hormones, with no other structural category recognised',
      'Only lipid-based hormones identical in every respect to steroids'
    ],
    correctIndex: 0,
    explanation: 'Hormones can be structurally classified into steroids (such as estrogen), polypeptides (such as insulin), and amino acid derivatives (such as adrenaline and thyroxine).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-78',
    type: 'mcq',
    question: 'Insulin, an important hormone involved in regulating blood glucose levels, is structurally classified as a:',
    options: [
      'Steroid hormone',
      'Amino acid derivative hormone, in the same category as adrenaline',
      'Carbohydrate-based hormone, an inaccurate structural classification',
      'Polypeptide hormone'
    ],
    correctIndex: 3,
    explanation: 'Insulin is structurally classified as a polypeptide hormone, being composed of amino acids linked by peptide bonds.',
    difficulty: 'medium'
  },
];
=======
import type { Question } from "@/lib/questionBank";
// NEET Chemistry Question Bank
// Chapter: Biomolecules
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question [] = [
  {
    id: 'biomolecules-chemistry-1',
    type: 'mcq',
    question: 'Carbohydrates that cannot be further hydrolysed into simpler polyhydroxy compounds are classified as:',
    options: [
      'Oligosaccharides',
      'Monosaccharides',
      'Polysaccharides',
      'Disaccharides, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Monosaccharides are the simplest carbohydrates, unable to be hydrolysed into any further, simpler polyhydroxy aldehyde or ketone units.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-2',
    type: 'mcq',
    question: 'Carbohydrates that, upon hydrolysis, yield a small number (typically 2 to 10) of monosaccharide units are classified as:',
    options: [
      'Monosaccharides',
      'Polysaccharides',
      'Amino sugars, exclusively',
      'Oligosaccharides'
    ],
    correctIndex: 3,
    explanation: 'Oligosaccharides yield a relatively small number (2 to 10) of monosaccharide units upon hydrolysis, with disaccharides being the most common example.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-3',
    type: 'mcq',
    question: 'Carbohydrates that, upon hydrolysis, yield a very large number of monosaccharide units are classified as:',
    options: [
      'Polysaccharides',
      'Monosaccharides',
      'Oligosaccharides',
      'Disaccharides, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Polysaccharides consist of a very large number of monosaccharide units linked together, examples including starch, cellulose, and glycogen.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-4',
    type: 'mcq',
    question: 'A carbohydrate capable of reducing Fehling\'s solution or Tollens\' reagent, due to the presence of a free aldehyde or ketone group, is classified as a:',
    options: [
      'Non-reducing sugar',
      'Polysaccharide, exclusively, regardless of its actual structure',
      'Reducing sugar',
      'Amino acid, an entirely unrelated class of biomolecule'
    ],
    correctIndex: 2,
    explanation: 'Reducing sugars possess a free aldehyde or ketone group capable of reducing mild oxidising agents like Fehling\'s solution or Tollens\' reagent.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-5',
    type: 'mcq',
    question: 'Sucrose is classified as a non-reducing sugar mainly because, in its structure, both anomeric carbons of the constituent monosaccharide units are involved in forming the:',
    options: [
      'Peptide bond, an entirely unrelated type of linkage',
      'Phosphodiester bond, an entirely unrelated type of linkage',
      'Glycosidic linkage, leaving no free aldehyde or ketone group',
      'Hydrogen bond, with no relevance to the glycosidic linkage at all'
    ],
    correctIndex: 2,
    explanation: 'In sucrose, both anomeric carbons of glucose and fructose are involved in the glycosidic linkage joining them, leaving no free aldehyde or ketone group available to act as a reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-6',
    type: 'mcq',
    question: 'Glucose can be industrially prepared through the hydrolysis of sucrose or, alternatively, through the hydrolysis of:',
    options: [
      'Starch',
      'Cellulose, exclusively, with no other source ever used',
      'Proteins, exclusively',
      'Nucleic acids, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Glucose can be prepared by the hydrolysis of either sucrose (using dilute HCl) or starch (using dilute H2SO4 under appropriate conditions).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-7',
    type: 'mcq',
    question: 'The oxidation of glucose with bromine water produces gluconic acid, a reaction that confirms the presence of a(n) ___ group in the open-chain structure of glucose.',
    options: [
      'Ketone',
      'Ester',
      'Ether',
      'Aldehyde (-CHO)'
    ],
    correctIndex: 3,
    explanation: 'Since bromine water selectively oxidises the aldehyde group (without affecting the hydroxyl groups), the formation of gluconic acid from glucose confirms the presence of a -CHO group in its open-chain structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-8',
    type: 'mcq',
    question: 'The reaction of glucose with hydroxylamine (NH2OH) to form an oxime, and its ability to add hydrogen cyanide (HCN), together provide chemical evidence for the presence of a:',
    options: [
      'Carboxylic acid group',
      'Carbonyl group (specifically, an aldehyde group)',
      'Ether linkage',
      'Ester linkage'
    ],
    correctIndex: 1,
    explanation: 'The ability of glucose to form an oxime with hydroxylamine and to add HCN are both classic chemical tests confirming the presence of a carbonyl (aldehyde) group in its structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-9',
    type: 'mcq',
    question: 'Acetylation of glucose with acetic anhydride produces a pentaacetate derivative, a result that confirms the presence of how many hydroxyl (-OH) groups in the glucose molecule?',
    options: [
      'Six',
      'Four',
      'Two',
      'Five'
    ],
    correctIndex: 3,
    explanation: 'The formation of a pentaacetate derivative upon acetylation confirms the presence of five hydroxyl groups within the glucose molecule.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-10',
    type: 'mcq',
    question: 'Oxidation of glucose with nitric acid (HNO3) produces a dicarboxylic acid called saccharic acid, a result that confirms that glucose contains, at its two ends, both an aldehyde group and a:',
    options: [
      'Second aldehyde group, identical to the first',
      'Primary alcoholic group (-CH2OH), which is oxidised to a second carboxylic acid group',
      'Ketone group, rather than a second acid-forming group',
      'Ether linkage, rather than a second acid-forming group'
    ],
    correctIndex: 1,
    explanation: 'The formation of the dicarboxylic acid (saccharic acid) upon vigorous oxidation with HNO3 confirms that glucose has a primary alcoholic group (-CH2OH) at one end (which becomes a second -COOH) in addition to the aldehyde group at the other end.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-chemistry-11',
    type: 'mcq',
    question: 'Prolonged treatment of glucose with hydrogen iodide (HI) reduces it completely to n-hexane, a result that confirms that all six carbon atoms of glucose are arranged in a:',
    options: [
      'Straight (unbranched) chain',
      'Highly branched chain',
      'Cyclic ring, with no open-chain character at all',
      'Structure with no carbon atoms whatsoever'
    ],
    correctIndex: 0,
    explanation: 'The formation of the straight-chain hydrocarbon n-hexane upon complete reduction with HI confirms that all six carbon atoms of glucose are arranged in an unbranched, straight chain.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-12',
    type: 'mcq',
    question: 'The molecular formula of glucose is generally established, through elemental analysis and molecular mass determination, to be:',
    options: [
      'C5H10O5',
      'C12H22O11',
      'C6H12O6',
      'C6H10O5'
    ],
    correctIndex: 2,
    explanation: 'Glucose has the molecular formula C6H12O6, consistent with its classification as an aldohexose.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-13',
    type: 'mcq',
    question: 'The overall body of chemical evidence obtained from various reactions (bromine water oxidation, HCN addition, acetylation, HNO3 oxidation, and HI reduction) collectively established the structure of glucose as an:',
    options: [
      'Open-chain ketohexose, with no aldehyde group present at all',
      'Closed-ring structure exclusively, with absolutely no open-chain form possible',
      'Open-chain aldohexose, with five hydroxyl groups and one terminal aldehyde group',
      'Simple, unfunctionalised hydrocarbon, with no oxygen atoms at all'
    ],
    correctIndex: 2,
    explanation: 'The combined evidence from these classical reactions established the open-chain structure of glucose as an aldohexose bearing five hydroxyl groups and one terminal aldehyde group.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-14',
    type: 'mcq',
    question: 'Certain anomalous experimental observations regarding glucose (such as its failure to give certain expected aldehyde-specific test results as strongly as predicted) led chemists to propose that glucose actually exists predominantly in a:',
    options: [
      'Cyclic (ring) structure',
      'Purely open-chain structure, exactly as initially proposed, with no modification needed',
      'Structure entirely lacking any oxygen atoms',
      'Structure identical in every respect to fructose'
    ],
    correctIndex: 0,
    explanation: 'Certain anomalous experimental results prompted chemists to propose that glucose exists predominantly in a cyclic (ring) form, rather than purely as the open-chain structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-15',
    type: 'mcq',
    question: 'The cyclic structure of glucose arises from an intramolecular reaction between the aldehyde group at C-1 and the hydroxyl group at:',
    options: [
      'C-2',
      'C-5',
      'C-3',
      'C-6'
    ],
    correctIndex: 1,
    explanation: 'The cyclic (pyranose) structure of glucose forms through an intramolecular reaction between the aldehyde group at C-1 and the hydroxyl group at C-5, forming a six-membered ring.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-16',
    type: 'mcq',
    question: 'The six-membered cyclic ring form of glucose, formed through this intramolecular reaction, is specifically referred to as the:',
    options: [
      'Furanose form',
      'Open-chain form, exclusively, with no cyclic character implied',
      'Anomeric form, a term unrelated to ring size',
      'Pyranose form'
    ],
    correctIndex: 3,
    explanation: 'The six-membered cyclic ring structure of glucose is specifically called the pyranose form, by analogy with the six-membered oxygen-containing ring compound pyran.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-17',
    type: 'mcq',
    question: 'The carbon atom that becomes a new stereocentre upon cyclisation of glucose (specifically, C-1, which was the original aldehyde carbon) is referred to as the:',
    options: [
      'Terminal carbon, a general term unrelated to the specific stereochemical designation',
      'Anomeric carbon',
      'Primary carbon, a general term unrelated to the specific stereochemical designation',
      'Quaternary carbon, an entirely inapplicable term in this context'
    ],
    correctIndex: 1,
    explanation: 'The C-1 carbon, which becomes a new stereocentre upon ring closure, is specifically designated the anomeric carbon.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-18',
    type: 'mcq',
    question: 'The two cyclic forms of glucose, alpha-D-glucose and beta-D-glucose, differ from each other only in their configuration at the anomeric carbon, and are therefore referred to as:',
    options: [
      'Enantiomers, a term for non-superimposable mirror images differing at every stereocentre',
      'Constitutional (structural) isomers, differing in atom connectivity',
      'Completely unrelated, distinct compounds',
      'Anomers'
    ],
    correctIndex: 3,
    explanation: 'Alpha-D-glucose and beta-D-glucose are anomers, a specific type of diastereomer differing only in configuration at the anomeric carbon (C-1).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-19',
    type: 'mcq',
    question: 'The spontaneous change in the specific rotation of a freshly prepared aqueous solution of glucose (whether starting from the pure alpha or beta anomer) until it reaches a stable, equilibrium value, is called:',
    options: [
      'Mutarotation',
      'Denaturation',
      'Diazotisation',
      'Saponification'
    ],
    correctIndex: 0,
    explanation: 'Mutarotation refers to the spontaneous change in optical rotation observed for a freshly dissolved glucose solution, reflecting the gradual interconversion between the alpha and beta anomeric forms (via the open-chain intermediate) until equilibrium is reached.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-20',
    type: 'mcq',
    question: 'Unlike glucose, which is an aldohexose, fructose is classified as a:',
    options: [
      'Aldopentose',
      'Ketopentose',
      'Ketohexose',
      'Aldoheptose'
    ],
    correctIndex: 2,
    explanation: 'Fructose is a ketohexose, containing a ketone functional group (at C-2) rather than the aldehyde group found in glucose (an aldohexose).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-21',
    type: 'mcq',
    question: 'The cyclic (ring) form of fructose is characteristically a five-membered ring, referred to as the:',
    options: [
      'Furanose form',
      'Pyranose form, identical to the ring form of glucose',
      'Open-chain form, exclusively, with no cyclic character implied',
      'Anomeric form, a term unrelated to ring size'
    ],
    correctIndex: 0,
    explanation: 'Fructose characteristically adopts a five-membered cyclic ring structure, called the furanose form, distinct from the six-membered pyranose form of glucose.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-22',
    type: 'mcq',
    question: 'Hydrolysis of sucrose (cane sugar) yields an equimolar mixture of glucose and:',
    options: [
      'Galactose',
      'A second molecule of glucose, giving two identical products',
      'Fructose',
      'Maltose'
    ],
    correctIndex: 2,
    explanation: 'Hydrolysis of sucrose yields one molecule of glucose and one molecule of fructose in equimolar amounts.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-23',
    type: 'mcq',
    question: 'The equimolar mixture of glucose and fructose obtained from the hydrolysis of sucrose is commonly referred to as:',
    options: [
      'Reducing sugar, a term describing sucrose itself, which is actually non-reducing',
      'Invert sugar',
      'Maltose, an entirely different disaccharide',
      'Lactose, an entirely different disaccharide'
    ],
    correctIndex: 1,
    explanation: 'The glucose-fructose mixture obtained from sucrose hydrolysis is called invert sugar, named for the inversion (change in sign) of optical rotation observed upon hydrolysis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-24',
    type: 'mcq',
    question: 'The inversion of optical rotation observed during the hydrolysis of sucrose (from dextrorotatory sucrose to a net laevorotatory product mixture) occurs mainly because fructose has a much larger:',
    options: [
      'Molecular mass than glucose, with no relevance to optical rotation at all',
      'Solubility in water than glucose, with no relevance to optical rotation at all',
      'Melting point than glucose, with no relevance to optical rotation at all',
      'Laevorotation (negative specific rotation) than the positive (dextro) rotation contributed by glucose'
    ],
    correctIndex: 3,
    explanation: 'Fructose has a strongly negative (laevorotatory) specific rotation that outweighs the positive (dextrorotatory) contribution of glucose, causing the overall optical rotation of the hydrolysed mixture to invert compared to that of the original sucrose.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-chemistry-25',
    type: 'mcq',
    question: 'In sucrose, the glycosidic linkage connecting glucose and fructose specifically involves the anomeric carbons of both monosaccharide units (C-1 of glucose and C-2 of fructose), and this is why sucrose is classified as a:',
    options: [
      'Reducing sugar, exactly like maltose or lactose',
      'Polysaccharide, rather than a simple disaccharide',
      'Amino sugar, an entirely unrelated classification',
      'Non-reducing sugar'
    ],
    correctIndex: 3,
    explanation: 'Since the glycosidic bond in sucrose involves both anomeric carbons of glucose and fructose, no free aldehyde or ketone group remains, classifying sucrose as a non-reducing sugar.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-26',
    type: 'mcq',
    question: 'Maltose, a disaccharide formed from two units of alpha-D-glucose linked via a C1-C4 glycosidic bond, is classified as a reducing sugar because it retains:',
    options: [
      'No free anomeric carbon whatsoever, identical to sucrose',
      'One free anomeric carbon (and hence a free aldehyde group) on one of the two glucose units',
      'Two free anomeric carbons, on both glucose units simultaneously',
      'A free ketone group, rather than a free aldehyde group'
    ],
    correctIndex: 1,
    explanation: 'Since only one anomeric carbon is involved in the glycosidic linkage of maltose, the second glucose unit retains its free anomeric carbon (and hence a free aldehyde-equivalent group), making maltose a reducing sugar.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-27',
    type: 'mcq',
    question: 'Lactose (milk sugar), a disaccharide found in milk, is formed by the combination of beta-D-galactose and:',
    options: [
      'Beta-D-fructose',
      'Alpha-D-glucose, exclusively',
      'Beta-D-glucose',
      'A second molecule of beta-D-galactose'
    ],
    correctIndex: 2,
    explanation: 'Lactose (milk sugar) is a disaccharide composed of beta-D-galactose linked to beta-D-glucose via a C1-C4 glycosidic bond.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-28',
    type: 'mcq',
    question: 'Like maltose, lactose is also classified as a:',
    options: [
      'Reducing sugar',
      'Non-reducing sugar, exactly like sucrose',
      'Polysaccharide, rather than a simple disaccharide',
      'Monosaccharide, rather than a disaccharide'
    ],
    correctIndex: 0,
    explanation: 'Since one anomeric carbon remains free in the lactose molecule, it is classified as a reducing sugar, similar to maltose.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-29',
    type: 'mcq',
    question: 'Starch, an important storage polysaccharide in plants, is composed entirely of units of:',
    options: [
      'Alpha-D-glucose',
      'Beta-D-glucose',
      'Alpha-D-fructose',
      'Beta-D-galactose'
    ],
    correctIndex: 0,
    explanation: 'Starch is a polymer composed entirely of alpha-D-glucose units, linked together through glycosidic bonds.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-30',
    type: 'mcq',
    question: 'Starch consists of two main structural components: a linear (unbranched) fraction called amylose, and a branched fraction called:',
    options: [
      'Cellulose',
      'Glycogen',
      'Amylopectin',
      'Chitin'
    ],
    correctIndex: 2,
    explanation: 'Starch is composed of amylose (the linear, unbranched fraction) and amylopectin (the branched fraction).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-31',
    type: 'mcq',
    question: 'Amylose, the linear (unbranched) component of starch, is characteristically responsible for producing which colour reaction when treated with iodine?',
    options: [
      'Bright red colouration',
      'Complete absence of any colour change',
      'Green colouration',
      'Blue-black colouration'
    ],
    correctIndex: 3,
    explanation: 'Amylose, due to its helical, linear structure, is responsible for the characteristic blue-black colouration observed when starch reacts with iodine.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-32',
    type: 'mcq',
    question: 'Amylopectin, the branched component of starch, differs structurally from amylose by containing, in addition to alpha-1,4-glycosidic linkages, occasional branch points formed by:',
    options: [
      'Beta-1,4-glycosidic linkages, identical to those found in cellulose',
      'Alpha-1,6-glycosidic linkages',
      'Peptide bonds, an entirely unrelated type of linkage',
      'Phosphodiester bonds, an entirely unrelated type of linkage'
    ],
    correctIndex: 1,
    explanation: 'Amylopectin\'s branched structure arises from occasional alpha-1,6-glycosidic linkages at branch points, in addition to the predominant alpha-1,4-linkages of the main chain.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-33',
    type: 'mcq',
    question: 'Cellulose, an important structural polysaccharide forming plant cell walls, is composed entirely of units of:',
    options: [
      'Alpha-D-glucose',
      'Beta-D-fructose',
      'Alpha-D-galactose',
      'Beta-D-glucose'
    ],
    correctIndex: 3,
    explanation: 'Unlike starch (composed of alpha-D-glucose), cellulose is composed entirely of beta-D-glucose units, linked via beta-1,4-glycosidic bonds.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-34',
    type: 'mcq',
    question: 'The linear, unbranched chains of cellulose are held together by extensive intermolecular hydrogen bonding, a structural feature that provides the:',
    options: [
      'Considerable mechanical strength and rigidity characteristic of plant cell walls',
      'High water solubility characteristic of cellulose',
      'Extremely low mechanical strength characteristic of cellulose',
      'Ability of cellulose to be efficiently digested by the human digestive system'
    ],
    correctIndex: 0,
    explanation: 'The extensive intermolecular hydrogen bonding between the linear, unbranched cellulose chains provides the considerable mechanical strength and structural rigidity characteristic of plant cell walls.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-35',
    type: 'mcq',
    question: 'Glycogen, the storage polysaccharide found in animals (stored mainly in the liver and muscles), is structurally similar to amylopectin but is generally found to be:',
    options: [
      'Completely unbranched, unlike amylopectin',
      'More highly branched',
      'Composed of beta-D-glucose, unlike the alpha-D-glucose of amylopectin',
      'Identical in every structural respect to cellulose'
    ],
    correctIndex: 1,
    explanation: 'Glycogen, sometimes called \'animal starch,\' is structurally similar to amylopectin but is generally even more highly branched.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-36',
    type: 'mcq',
    question: 'Glycogen is often referred to as \'animal starch\' mainly because it serves an analogous biological function to plant starch, namely:',
    options: [
      'Providing structural rigidity to animal cell walls, analogous to cellulose in plants',
      'Serving as the primary genetic material in animal cells',
      'Storage of glucose (carbohydrate energy reserves)',
      'Functioning as a digestive enzyme in animal metabolism'
    ],
    correctIndex: 2,
    explanation: 'Glycogen is called \'animal starch\' because, like plant starch, it functions as a storage form of glucose (carbohydrate energy reserves), in this case within animal tissues such as the liver and muscles.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-37',
    type: 'mcq',
    question: 'Proteins whose molecules are composed of long, thread-like chains aligned roughly parallel to a single axis, generally held together by strong intermolecular forces (such as hydrogen bonds or disulphide bonds), are classified as:',
    options: [
      'Globular proteins',
      'Denatured proteins, exclusively',
      'Fibrous proteins',
      'Amino acid derivatives, an unrelated classification'
    ],
    correctIndex: 2,
    explanation: 'Fibrous proteins consist of elongated, thread-like polypeptide chains held together by strong intermolecular forces, giving them a characteristic fibre-like structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-38',
    type: 'mcq',
    question: 'Which of the following is a classic example of a fibrous protein?',
    options: [
      'Insulin',
      'Keratin (found in hair and wool)',
      'Albumin',
      'Haemoglobin'
    ],
    correctIndex: 1,
    explanation: 'Keratin, the structural protein found in hair, wool, and nails, is a classic example of a fibrous protein.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-39',
    type: 'mcq',
    question: 'Proteins whose polypeptide chains coil up into a compact, roughly spherical shape, generally showing good water solubility, are classified as:',
    options: [
      'Globular proteins',
      'Fibrous proteins',
      'Denatured proteins, exclusively',
      'Structural (non-functional) proteins, an inaccurate general term'
    ],
    correctIndex: 0,
    explanation: 'Globular proteins adopt a compact, roughly spherical (globular) shape, generally showing good solubility in water, and often serving functional roles such as enzymes or hormones.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-40',
    type: 'mcq',
    question: 'The simplest level of protein structure, describing the specific linear sequence of amino acids joined by peptide bonds, is called the protein\'s:',
    options: [
      'Secondary structure',
      'Tertiary structure',
      'Quaternary structure',
      'Primary structure'
    ],
    correctIndex: 3,
    explanation: 'Primary structure refers to the specific, linear sequence of amino acids that make up a given protein\'s polypeptide chain.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-41',
    type: 'mcq',
    question: 'The regular, repeating folding pattern of a polypeptide chain, arising from hydrogen bonding between nearby amino acid residues, is described as the protein\'s:',
    options: [
      'Secondary structure',
      'Primary structure',
      'Tertiary structure',
      'Quaternary structure'
    ],
    correctIndex: 0,
    explanation: 'Secondary structure refers to regular, repeating local folding patterns (such as the alpha-helix or beta-pleated sheet) formed through hydrogen bonding along the polypeptide backbone.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-42',
    type: 'mcq',
    question: 'The alpha-helix, a common type of protein secondary structure, is described as a:',
    options: [
      'Flat, sheet-like structure with no coiling at all',
      'Left-handed, spiral structure exclusively, with no right-handed form ever observed',
      'Purely linear, uncoiled structure',
      'Right-handed, spiral (coiled) structure'
    ],
    correctIndex: 3,
    explanation: 'The alpha-helix is a common protein secondary structure characterised by a right-handed, spiral (coiled) arrangement of the polypeptide backbone.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-43',
    type: 'mcq',
    question: 'The beta-pleated sheet, another common type of protein secondary structure, is characterised by polypeptide chains arranged side by side, forming a:',
    options: [
      'Purely spherical, globular structure, with no sheet-like character at all',
      'Sheet-like structure held together by intermolecular hydrogen bonding',
      'Coiled, helical structure, identical to the alpha-helix',
      'Structure entirely lacking any hydrogen bonding whatsoever'
    ],
    correctIndex: 1,
    explanation: 'The beta-pleated sheet structure arises when polypeptide chains lie side by side, held together by intermolecular hydrogen bonding, forming a characteristic sheet-like arrangement.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-44',
    type: 'mcq',
    question: 'The overall three-dimensional folding of a protein\'s secondary structural elements into a specific, compact, functional shape is described as the protein\'s:',
    options: [
      'Primary structure',
      'Secondary structure',
      'Tertiary structure',
      'Quaternary structure'
    ],
    correctIndex: 2,
    explanation: 'Tertiary structure describes the overall three-dimensional folding of a protein, arising from the further arrangement of its secondary structural elements into a compact, functional shape.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-45',
    type: 'mcq',
    question: 'When a protein consists of more than one polypeptide chain (subunit), the spatial arrangement of these subunits relative to one another is described as the protein\'s:',
    options: [
      'Primary structure',
      'Quaternary structure',
      'Secondary structure',
      'Tertiary structure'
    ],
    correctIndex: 1,
    explanation: 'Quaternary structure describes the spatial arrangement of multiple polypeptide subunits relative to one another in proteins composed of more than one chain.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-46',
    type: 'mcq',
    question: 'Haemoglobin, a classic example of a protein exhibiting quaternary structure, is composed of multiple polypeptide subunits assembled together to form a:',
    options: [
      'Single, unassembled polypeptide chain, with no quaternary structure at all',
      'Purely fibrous, elongated structure, with no globular character',
      'Functional, multi-subunit protein complex',
      'Simple carbohydrate polymer, unrelated to protein structure entirely'
    ],
    correctIndex: 2,
    explanation: 'Haemoglobin exemplifies quaternary structure, being assembled from multiple polypeptide subunits into a single, functional multi-subunit protein complex.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-47',
    type: 'mcq',
    question: 'The loss of a protein\'s native, biologically active three-dimensional structure, typically caused by physical factors (such as heat) or chemical factors (such as a change in pH), is called:',
    options: [
      'Denaturation',
      'Mutarotation',
      'Saponification',
      'Hydrolysis, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Denaturation refers to the disruption of a protein\'s native three-dimensional structure, typically caused by heat or changes in pH, generally resulting in loss of biological activity.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-48',
    type: 'mcq',
    question: 'The coagulation of egg white observed when an egg is boiled is a classic everyday example of protein:',
    options: [
      'Mutarotation',
      'Glycosylation',
      'Esterification',
      'Denaturation'
    ],
    correctIndex: 3,
    explanation: 'The visible coagulation of egg white (albumin) upon boiling is a familiar example of heat-induced protein denaturation.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-49',
    type: 'mcq',
    question: 'During denaturation, the secondary and tertiary structure of a protein is generally disrupted, while the underlying:',
    options: [
      'Primary structure is also completely destroyed, with all peptide bonds broken',
      'Molecular formula of the protein changes entirely into a completely different compound',
      'Protein is instantly and completely converted into a simple carbohydrate',
      'Primary structure (sequence of amino acids) generally remains unchanged'
    ],
    correctIndex: 3,
    explanation: 'Denaturation primarily disrupts the secondary and tertiary structure of a protein (such as hydrogen bonding patterns), while the primary structure (the sequence of amino acids linked by peptide bonds) generally remains intact.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-50',
    type: 'mcq',
    question: 'Enzymes are biological catalysts that are chemically composed almost entirely of:',
    options: [
      'Carbohydrates',
      'Lipids',
      'Proteins',
      'Nucleic acids, exclusively'
    ],
    correctIndex: 2,
    explanation: 'The vast majority of enzymes are proteins, functioning as highly specific biological catalysts.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-51',
    type: 'mcq',
    question: 'A defining characteristic of enzyme action is their remarkably high degree of specificity, meaning that a given enzyme generally catalyses reactions involving only a particular:',
    options: [
      'Substrate (or a closely related, specific group of substrates)',
      'Any and all possible substrates, with no discrimination whatsoever',
      'Only inorganic compounds, with no activity toward any organic molecule',
      'No substrate at all; enzymes are generally understood to be completely inactive'
    ],
    correctIndex: 0,
    explanation: 'Enzymes typically show remarkably high substrate specificity, generally catalysing reactions involving only a particular substrate or closely related group of substrates.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-52',
    type: 'mcq',
    question: 'The mechanism of enzyme action is often explained using the \'lock and key\' model, which proposes that the enzyme\'s active site and the substrate have:',
    options: [
      'Completely random, unrelated shapes, with no meaningful geometric correspondence',
      'Complementary, specific geometrical shapes that fit precisely together',
      'Identical, superimposable shapes, rather than complementary shapes',
      'No defined shape whatsoever, for either the enzyme or the substrate'
    ],
    correctIndex: 1,
    explanation: 'The lock and key model of enzyme action proposes that the enzyme\'s active site and its specific substrate possess complementary geometrical shapes, allowing them to fit together precisely, much like a key fits a specific lock.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-53',
    type: 'mcq',
    question: 'Most human enzymes generally show optimum catalytic activity within a relatively narrow temperature range, typically around:',
    options: [
      '35-40°C',
      '0°C',
      '100°C',
      '500°C'
    ],
    correctIndex: 0,
    explanation: 'Human enzymes generally exhibit optimum activity within a relatively narrow temperature range, typically around 35-40°C, corresponding to normal body temperature.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-54',
    type: 'mcq',
    question: 'Vitamins are broadly classified, based on their solubility characteristics, into fat-soluble vitamins and:',
    options: [
      'Only protein-soluble vitamins, an inaccurate general classification',
      'Water-soluble vitamins',
      'Only carbohydrate-soluble vitamins, an inaccurate general classification',
      'Only mineral-soluble vitamins, an inaccurate general classification'
    ],
    correctIndex: 1,
    explanation: 'Vitamins are broadly classified based on solubility into fat-soluble vitamins (A, D, E, K) and water-soluble vitamins (the B-group vitamins and vitamin C).',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-55',
    type: 'mcq',
    question: 'Fat-soluble vitamins, such as vitamins A, D, E, and K, are generally capable of being stored in the body, particularly within the:',
    options: [
      'Kidneys, exclusively, with no storage occurring anywhere else in the body',
      'Blood plasma, exclusively, with no storage in any solid tissue at all',
      'Skeletal muscle, exclusively, with no storage in any other tissue',
      'Liver and adipose (fatty) tissue'
    ],
    correctIndex: 3,
    explanation: 'Fat-soluble vitamins can be stored within the body, particularly in the liver and adipose (fatty) tissue, unlike most water-soluble vitamins.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-56',
    type: 'mcq',
    question: 'Water-soluble vitamins (the B-group vitamins and vitamin C) generally cannot be stored in significant amounts within the body (with the notable exception of vitamin B12), meaning that any excess is typically:',
    options: [
      'Permanently stored within bone tissue, identical to fat-soluble vitamins',
      'Converted entirely into fat-soluble vitamins for long-term storage',
      'Excreted in the urine, necessitating regular dietary intake',
      'Retained indefinitely within the bloodstream without any excretion at all'
    ],
    correctIndex: 2,
    explanation: 'Since most water-soluble vitamins cannot be significantly stored in the body, excess amounts are typically excreted in the urine, necessitating their regular, consistent dietary intake.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-57',
    type: 'mcq',
    question: 'A deficiency of Vitamin A in the diet is classically associated with the development of:',
    options: [
      'Beriberi',
      'Scurvy',
      'Night blindness (and related eye disorders such as xerophthalmia)',
      'Rickets'
    ],
    correctIndex: 2,
    explanation: 'Vitamin A deficiency is classically associated with night blindness and related eye disorders, such as xerophthalmia (hardening of the cornea).',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-58',
    type: 'mcq',
    question: 'A deficiency of Vitamin B1 (thiamine) in the diet is classically associated with the development of:',
    options: [
      'Scurvy',
      'Rickets',
      'Night blindness',
      'Beriberi'
    ],
    correctIndex: 3,
    explanation: 'Vitamin B1 (thiamine) deficiency is classically associated with the disease beriberi.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-59',
    type: 'mcq',
    question: 'A deficiency of Vitamin C (ascorbic acid) in the diet is classically associated with the development of:',
    options: [
      'Scurvy (characterised by bleeding gums)',
      'Beriberi',
      'Rickets',
      'Pernicious anaemia'
    ],
    correctIndex: 0,
    explanation: 'Vitamin C deficiency is classically associated with scurvy, a disease characterised by symptoms including bleeding gums.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-60',
    type: 'mcq',
    question: 'A deficiency of Vitamin D in the diet is classically associated with the development of rickets in children, and a related condition called ___ in adults.',
    options: [
      'Beriberi, an entirely unrelated condition',
      'Osteomalacia',
      'Scurvy, an entirely unrelated condition',
      'Cheilosis, an entirely unrelated condition'
    ],
    correctIndex: 1,
    explanation: 'Vitamin D deficiency causes rickets (bone deformities) in children, and the analogous condition of osteomalacia (bone softening) in adults.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-61',
    type: 'mcq',
    question: 'A deficiency of Vitamin B12 in the diet is classically associated with the development of:',
    options: [
      'Beriberi',
      'Pernicious anaemia',
      'Rickets',
      'Scurvy'
    ],
    correctIndex: 1,
    explanation: 'Vitamin B12 deficiency is classically associated with pernicious anaemia.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-62',
    type: 'mcq',
    question: 'Vitamin K plays an essential biological role in the process of:',
    options: [
      'Blood clotting (coagulation)',
      'Vision (night vision specifically)',
      'Bone mineralisation, exclusively, with no other role',
      'Skin pigmentation, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Vitamin K is essential for normal blood clotting (coagulation), and its deficiency can impair this important process.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-63',
    type: 'mcq',
    question: 'Vitamin E, also known as tocopherol, is generally considered important for normal fertility and is also recognised as an important biological:',
    options: [
      'Coagulation factor, exclusively, with no antioxidant role at all',
      'Pigment responsible for vision, exclusively',
      'Antioxidant',
      'Digestive enzyme, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Vitamin E (tocopherol) is recognised both for its role in supporting normal fertility and for its important function as a biological antioxidant.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-64',
    type: 'mcq',
    question: 'The two main types of nucleic acids found in living organisms are DNA (deoxyribonucleic acid) and:',
    options: [
      'ATP (adenosine triphosphate), which is not classified as a nucleic acid',
      'NADH, which is not classified as a nucleic acid',
      'Glycogen, which is not classified as a nucleic acid',
      'RNA (ribonucleic acid)'
    ],
    correctIndex: 3,
    explanation: 'The two principal types of nucleic acid found in living organisms are DNA and RNA.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-65',
    type: 'mcq',
    question: 'The basic structural building block (monomer unit) of nucleic acids, composed of a nitrogenous base, a pentose sugar, and a phosphate group, is called a:',
    options: [
      'Amino acid',
      'Monosaccharide',
      'Fatty acid',
      'Nucleotide'
    ],
    correctIndex: 3,
    explanation: 'Nucleic acids are polymers built from repeating nucleotide units, each composed of a nitrogenous base, a pentose sugar, and a phosphate group.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-66',
    type: 'mcq',
    question: 'The pentose sugar specifically found in DNA (deoxyribonucleic acid) is:',
    options: [
      'Ribose',
      'Deoxyribose',
      'Glucose',
      'Fructose'
    ],
    correctIndex: 1,
    explanation: 'DNA contains the sugar deoxyribose (lacking one oxygen atom compared to ribose) as part of its nucleotide structure.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-67',
    type: 'mcq',
    question: 'The pentose sugar specifically found in RNA (ribonucleic acid) is:',
    options: [
      'Ribose',
      'Deoxyribose',
      'Glucose',
      'Galactose'
    ],
    correctIndex: 0,
    explanation: 'RNA contains the sugar ribose as part of its nucleotide structure, distinguishing it from the deoxyribose found in DNA.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-chemistry-68',
    type: 'mcq',
    question: 'Unlike DNA, which contains the pyrimidine base thymine, RNA characteristically contains the pyrimidine base:',
    options: [
      'Cytosine, which is actually present in both DNA and RNA',
      'Adenine, which is a purine, not a pyrimidine',
      'Uracil',
      'Guanine, which is a purine, not a pyrimidine'
    ],
    correctIndex: 2,
    explanation: 'RNA contains uracil in place of the thymine found in DNA, as one of its characteristic pyrimidine bases (both nucleic acids share cytosine as their other pyrimidine base).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-69',
    type: 'mcq',
    question: 'According to the Watson-Crick double helix model of DNA structure, the two polynucleotide strands are arranged:',
    options: [
      'Antiparallel to each other, coiled around a common central axis',
      'Parallel to each other, running in exactly the same direction',
      'Completely separate, with no defined spatial relationship between the two strands',
      'Perpendicular to each other, at a fixed 90° angle'
    ],
    correctIndex: 0,
    explanation: 'The Watson-Crick model describes DNA as a double helix, with the two polynucleotide strands running antiparallel (in opposite directions) to each other, coiled around a shared central axis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-70',
    type: 'mcq',
    question: 'In the double helix structure of DNA, the two strands are held together by hydrogen bonding between specific, complementary pairs of nitrogenous bases, with adenine always pairing with:',
    options: [
      'Cytosine',
      'Guanine',
      'Thymine',
      'Uracil, which is not present in DNA'
    ],
    correctIndex: 2,
    explanation: 'In DNA, adenine specifically pairs with thymine (via two hydrogen bonds), one of the two complementary base-pairing relationships central to the double helix structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-71',
    type: 'mcq',
    question: 'In the double helix structure of DNA, guanine always pairs with cytosine, and this particular base pair is held together by:',
    options: [
      'Two hydrogen bonds, identical to the adenine-thymine pair',
      'Three hydrogen bonds',
      'A single covalent bond, rather than hydrogen bonding',
      'No bonding of any kind; guanine and cytosine do not actually interact directly'
    ],
    correctIndex: 1,
    explanation: 'The guanine-cytosine base pair in DNA is held together by three hydrogen bonds, one more than the two hydrogen bonds found in the adenine-thymine pair.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-72',
    type: 'mcq',
    question: 'Unlike DNA, which typically exists as a double-stranded helix, RNA is generally found to exist predominantly as a:',
    options: [
      'Double-stranded molecule, identical in every respect to DNA',
      'Triple-stranded molecule, exclusively, with no other form ever observed',
      'Molecule with no defined strand structure whatsoever',
      'Single-stranded molecule'
    ],
    correctIndex: 3,
    explanation: 'In contrast to the double-stranded helical structure of DNA, RNA is generally found to exist predominantly as a single-stranded molecule (with some notable exceptions in certain viruses).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-73',
    type: 'mcq',
    question: 'The type of RNA responsible for carrying genetic information from DNA to the site of protein synthesis (the ribosome) is called:',
    options: [
      'Transfer RNA (tRNA)',
      'Messenger RNA (mRNA)',
      'Ribosomal RNA (rRNA)',
      'Amino acid RNA, which is not an actual category of RNA'
    ],
    correctIndex: 1,
    explanation: 'Messenger RNA (mRNA) carries the genetic instructions from DNA to the ribosome, where these instructions are used to direct protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-74',
    type: 'mcq',
    question: 'The type of RNA responsible for bringing specific amino acids to the site of protein synthesis, matching them to the corresponding codon on the mRNA, is called:',
    options: [
      'Messenger RNA (mRNA)',
      'Ribosomal RNA (rRNA)',
      'Genomic RNA, which is not the standard term for this specific function',
      'Transfer RNA (tRNA)'
    ],
    correctIndex: 3,
    explanation: 'Transfer RNA (tRNA) is responsible for transporting specific amino acids to the ribosome and matching them to the appropriate codon on the mRNA strand during protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-75',
    type: 'mcq',
    question: 'The type of RNA that serves as a major structural and functional component of the ribosome itself is called:',
    options: [
      'Messenger RNA (mRNA)',
      'Transfer RNA (tRNA)',
      'Ribosomal RNA (rRNA)',
      'Plasmid RNA, which is not a standard category of cellular RNA'
    ],
    correctIndex: 2,
    explanation: 'Ribosomal RNA (rRNA) forms a major structural and functional component of the ribosome, the cellular machinery responsible for protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-76',
    type: 'mcq',
    question: 'Hormones are chemical messenger molecules, typically secreted by endocrine glands and transported through the bloodstream to regulate the biological activity of:',
    options: [
      'Specific target organs or tissues',
      'Every single cell in the body equally and identically, with no specificity at all',
      'Only the endocrine gland that originally secreted the hormone, with no effect elsewhere',
      'No particular tissue at all; hormones are understood to have no specific biological target'
    ],
    correctIndex: 0,
    explanation: 'Hormones are chemical messengers, secreted by endocrine glands and transported via the bloodstream, that regulate the biological activity of specific target organs or tissues.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-77',
    type: 'mcq',
    question: 'Structurally, hormones can be broadly classified into several categories, including steroid hormones, polypeptide hormones, and:',
    options: [
      'Amino acid derivative hormones',
      'Only carbohydrate-based hormones, with no other structural category recognised',
      'Only nucleic acid-based hormones, with no other structural category recognised',
      'Only lipid-based hormones identical in every respect to steroids'
    ],
    correctIndex: 0,
    explanation: 'Hormones can be structurally classified into steroids (such as estrogen), polypeptides (such as insulin), and amino acid derivatives (such as adrenaline and thyroxine).',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-chemistry-78',
    type: 'mcq',
    question: 'Insulin, an important hormone involved in regulating blood glucose levels, is structurally classified as a:',
    options: [
      'Steroid hormone',
      'Amino acid derivative hormone, in the same category as adrenaline',
      'Carbohydrate-based hormone, an inaccurate structural classification',
      'Polypeptide hormone'
    ],
    correctIndex: 3,
    explanation: 'Insulin is structurally classified as a polypeptide hormone, being composed of amino acids linked by peptide bonds.',
    difficulty: 'medium'
  },
];
>>>>>>> bf121c5cb1081c5c01badceff1fae1a37137447a
export default questions;