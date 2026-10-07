import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Biomolecules
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'biomolecules-1',
    type: 'mcq',
    question: 'Elemental analysis of living tissue reveals that carbon, hydrogen, oxygen, and nitrogen together constitute what approximate proportion of the total elemental composition?',
    options: [
      'More than 70%',
      'Exactly 25%',
      'Less than 10%',
      'Approximately 50%'
    ],
    correctIndex: 0,
    explanation: 'Elemental analysis shows that carbon, hydrogen, oxygen, and nitrogen together make up more than 70% of the total elemental composition of living tissue.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-2',
    type: 'mcq',
    question: 'Besides carbon, hydrogen, oxygen, and nitrogen, living tissues also contain several elements present in trace or micro amounts, including:',
    options: [
      'Only elements not found anywhere in the Earth\'s crust',
      'Only noble gases such as helium and neon',
      'Calcium, phosphorus, potassium, sulphur, sodium, chlorine, and magnesium',
      'Only radioactive elements'
    ],
    correctIndex: 2,
    explanation: 'In addition to the major elements (C, H, O, N), living tissues contain several other elements in trace amounts, including Ca, P, K, S, Na, Cl, and Mg.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-3',
    type: 'mcq',
    question: 'The chemical analysis of the elemental composition of a living tissue is typically carried out by first drying and then:',
    options: [
      'Reducing the tissue to ash and analysing its elemental content',
      'Freezing the tissue at extremely low temperatures',
      'Exposing the tissue to intense light for prolonged periods',
      'Dissolving the tissue entirely in pure water'
    ],
    correctIndex: 0,
    explanation: 'Elemental analysis of living tissue is generally performed by first drying the tissue and then reducing it to ash, followed by chemical analysis of the ash residue.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-4',
    type: 'mcq',
    question: 'When comparing the relative proportion of elements found in living tissue with those found in the Earth\'s crust, it is generally observed that:',
    options: [
      'Living tissue contains no elements found in the Earth\'s crust at all',
      'The Earth\'s crust contains no carbon whatsoever',
      'The proportion of individual elements differs, even though many of the same elements are present in both',
      'The exact proportions are identical in every respect'
    ],
    correctIndex: 2,
    explanation: 'While living tissues and the Earth\'s crust often contain many of the same elements, the relative proportion in which these elements occur generally differs significantly.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-5',
    type: 'mcq',
    question: 'Amino acids, the building blocks of proteins, characteristically possess both an amino group and a:',
    options: [
      'Sulphate group',
      'Phosphate group',
      'Carboxyl group',
      'Hydroxyl group exclusively, with no carboxyl group'
    ],
    correctIndex: 2,
    explanation: 'Amino acids are characterised by the presence of both an amino group (-NH2) and a carboxyl group (-COOH).',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-6',
    type: 'mcq',
    question: 'In a typical amino acid, the amino group and the carboxyl group are attached to the same central carbon atom, referred to as the:',
    options: [
      'Beta carbon',
      'Alpha (α) carbon',
      'Gamma carbon',
      'Terminal carbon exclusively'
    ],
    correctIndex: 1,
    explanation: 'In a standard amino acid, both the amino and carboxyl groups are attached to the same central carbon atom, called the alpha carbon.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-7',
    type: 'mcq',
    question: 'The variable chemical group attached to the alpha carbon of an amino acid, which differs between different amino acids and determines their specific chemical properties, is called the:',
    options: [
      'Phosphate group',
      'Peptide group',
      'Glycosidic group',
      'R group (side chain)'
    ],
    correctIndex: 3,
    explanation: 'The R group (side chain), which varies between different amino acids, is attached to the alpha carbon and determines the specific chemical identity and properties of each amino acid.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-8',
    type: 'mcq',
    question: 'Amino acids that possess an extra carboxyl group in their side chain, such as glutamic acid, are classified as:',
    options: [
      'Basic amino acids',
      'Neutral amino acids',
      'Acidic amino acids',
      'Essential amino acids exclusively'
    ],
    correctIndex: 2,
    explanation: 'Amino acids with an additional carboxyl group in their side chain, such as glutamic acid, are classified as acidic amino acids.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-9',
    type: 'mcq',
    question: 'Amino acids that possess an extra amino group in their side chain, such as lysine, are classified as:',
    options: [
      'Acidic amino acids',
      'Non-essential amino acids exclusively',
      'Neutral amino acids',
      'Basic amino acids'
    ],
    correctIndex: 3,
    explanation: 'Amino acids with an additional amino group in their side chain, such as lysine, are classified as basic amino acids.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-10',
    type: 'mcq',
    question: 'Essential amino acids are defined as those that:',
    options: [
      'Have absolutely no biological function',
      'Can always be synthesised by the body, and are never required in the diet',
      'Cannot be synthesised by the body and must therefore be obtained through the diet',
      'Are found only in plant proteins, never in animal proteins'
    ],
    correctIndex: 2,
    explanation: 'Essential amino acids cannot be synthesised by the body itself and must therefore be obtained from dietary sources.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-11',
    type: 'mcq',
    question: 'The total number of different amino acids commonly found as building blocks of proteins is generally considered to be:',
    options: [
      '100',
      '50',
      '10',
      '20'
    ],
    correctIndex: 3,
    explanation: 'Proteins are generally built from a standard set of 20 different amino acids.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-12',
    type: 'mcq',
    question: 'The chemical bond that links two amino acid molecules together, formed between the carboxyl group of one amino acid and the amino group of another, is called a:',
    options: [
      'Glycosidic bond',
      'Phosphodiester bond',
      'Peptide bond',
      'Hydrogen bond exclusively'
    ],
    correctIndex: 2,
    explanation: 'A peptide bond forms between the carboxyl group of one amino acid and the amino group of another, linking amino acids together into a chain.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-13',
    type: 'mcq',
    question: 'The formation of a peptide bond between two amino acids is accompanied by the release of a molecule of:',
    options: [
      'Water',
      'Ammonia',
      'Carbon dioxide',
      'Oxygen'
    ],
    correctIndex: 0,
    explanation: 'Peptide bond formation is a dehydration (condensation) reaction, in which a molecule of water is released as the bond forms.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-14',
    type: 'mcq',
    question: 'Amino acids that CAN be synthesised by the body itself, and therefore do not necessarily need to be obtained through the diet, are classified as:',
    options: [
      'Non-essential amino acids',
      'Basic amino acids exclusively',
      'Essential amino acids',
      'Acidic amino acids exclusively'
    ],
    correctIndex: 0,
    explanation: 'Non-essential amino acids are those that the body is capable of synthesising on its own, unlike essential amino acids, which must come from the diet.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-15',
    type: 'mcq',
    question: 'Lipids, as a broad class of biomolecules, are generally characterised by being:',
    options: [
      'Highly soluble in water',
      'Insoluble in water (hydrophobic)',
      'Composed entirely of nucleotides',
      'Composed entirely of amino acids'
    ],
    correctIndex: 1,
    explanation: 'Lipids are generally hydrophobic (water-insoluble) biomolecules, in contrast to many other classes of biomolecules.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-16',
    type: 'mcq',
    question: 'A typical fatty acid molecule consists of a long hydrocarbon chain with a terminal:',
    options: [
      'Carboxyl group (-COOH)',
      'Hydroxyl group only, with no carboxyl group at all',
      'Amino group (-NH2)',
      'Phosphate group'
    ],
    correctIndex: 0,
    explanation: 'A fatty acid is characterised by a long hydrocarbon chain terminating in a carboxyl group.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-17',
    type: 'mcq',
    question: 'Simple lipids such as fats and oils are formed by the esterification reaction between glycerol and:',
    options: [
      'Monosaccharides',
      'Nucleotides',
      'Fatty acids',
      'Amino acids'
    ],
    correctIndex: 2,
    explanation: 'Fats and oils, examples of simple lipids, are esters formed from the combination of glycerol with fatty acids.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-18',
    type: 'mcq',
    question: 'A fatty acid whose hydrocarbon chain contains no carbon-carbon double bonds is classified as:',
    options: [
      'Aromatic',
      'Unsaturated',
      'Saturated',
      'Essential'
    ],
    correctIndex: 2,
    explanation: 'A saturated fatty acid has a hydrocarbon chain with no carbon-carbon double bonds, being fully \'saturated\' with hydrogen atoms.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-19',
    type: 'mcq',
    question: 'A fatty acid whose hydrocarbon chain contains one or more carbon-carbon double bonds is classified as:',
    options: [
      'Aromatic exclusively',
      'Saturated',
      'Non-essential',
      'Unsaturated'
    ],
    correctIndex: 3,
    explanation: 'An unsaturated fatty acid contains one or more double bonds within its hydrocarbon chain.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-20',
    type: 'mcq',
    question: 'Oils, unlike fats, are generally liquid at room temperature, primarily because oils contain a higher proportion of:',
    options: [
      'Saturated fatty acids',
      'Nucleotides',
      'Unsaturated fatty acids',
      'Amino acids'
    ],
    correctIndex: 2,
    explanation: 'Oils tend to be liquid at room temperature due to a higher proportion of unsaturated fatty acids, which pack less tightly than saturated fatty acids.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-21',
    type: 'mcq',
    question: 'Lipids that contain a phosphorus atom, along with a phosphorylated organic compound, and are important structural components of cell membranes, are called:',
    options: [
      'Glycolipids',
      'Steroids',
      'Phospholipids',
      'Lipoproteins'
    ],
    correctIndex: 2,
    explanation: 'Phospholipids, containing a phosphate group along with a phosphorylated organic compound, are important structural components of cell membranes.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-22',
    type: 'mcq',
    question: 'Lecithin, a well-known example of a phospholipid, is an important structural component of the:',
    options: [
      'Cell wall exclusively',
      'Golgi apparatus exclusively',
      'Nucleolus',
      'Cell membrane'
    ],
    correctIndex: 3,
    explanation: 'Lecithin is a phospholipid that serves as an important structural component of cell membranes.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-23',
    type: 'mcq',
    question: 'Lipids characterised by the presence of a specific fused-ring hydrocarbon structure, such as cholesterol, are classified as:',
    options: [
      'Phospholipids',
      'Steroids',
      'Glycolipids',
      'Simple fats'
    ],
    correctIndex: 1,
    explanation: 'Steroids, such as cholesterol, are lipids characterised by a distinctive fused-ring hydrocarbon skeleton.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-24',
    type: 'mcq',
    question: 'Cholesterol, a well-known steroid, possesses a hydroxyl (-OH) group, which classifies it more specifically as a:',
    options: [
      'Simple fatty acid',
      'Glycolipid',
      'Sterol',
      'Phospholipid'
    ],
    correctIndex: 2,
    explanation: 'Because cholesterol possesses a hydroxyl group in addition to the steroid ring structure, it is more specifically classified as a sterol.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-25',
    type: 'mcq',
    question: 'Proteins are macromolecules formed as polymers of amino acids, linked together in linear chains by:',
    options: [
      'Peptide bonds',
      'Phosphodiester bonds',
      'Glycosidic bonds',
      'Hydrogen bonds exclusively'
    ],
    correctIndex: 0,
    explanation: 'Proteins are polymers of amino acids joined together through peptide bonds, forming linear polypeptide chains.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-26',
    type: 'mcq',
    question: 'The precise sequence and order of amino acids within a given protein is ultimately determined by the sequence of:',
    options: [
      'Only the surrounding environmental temperature',
      'The corresponding gene (DNA)',
      'The Golgi apparatus exclusively',
      'Random chance, with no genetic basis'
    ],
    correctIndex: 1,
    explanation: 'The specific sequence of amino acids within a protein is determined by the nucleotide sequence of the corresponding gene.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-27',
    type: 'mcq',
    question: 'Which of the following is an example of a protein that functions as a biological catalyst (enzyme)?',
    options: [
      'Amylase',
      'Cellulose',
      'Cholesterol',
      'Glycogen'
    ],
    correctIndex: 0,
    explanation: 'Amylase is a protein that functions as an enzyme, catalysing the breakdown of starch.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-28',
    type: 'mcq',
    question: 'The simplest level of protein structure, referring to the linear sequence of amino acids in the polypeptide chain, is called the:',
    options: [
      'Quaternary structure',
      'Primary structure',
      'Secondary structure',
      'Tertiary structure'
    ],
    correctIndex: 1,
    explanation: 'The primary structure of a protein refers to the specific linear sequence of amino acids that make up the polypeptide chain.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-29',
    type: 'mcq',
    question: 'The level of protein structure resulting from the folding of the polypeptide chain into regular patterns, such as an alpha helix or beta pleated sheet, due to hydrogen bonding, is called the:',
    options: [
      'Quaternary structure',
      'Primary structure',
      'Tertiary structure',
      'Secondary structure'
    ],
    correctIndex: 3,
    explanation: 'Secondary structure describes the regular, repeating folding patterns (such as alpha helices or beta pleated sheets) formed by hydrogen bonding within the polypeptide backbone.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-30',
    type: 'mcq',
    question: 'The overall three-dimensional folding of a single polypeptide chain, crucial for determining its specific biological function, is described as the protein\'s:',
    options: [
      'Tertiary structure',
      'Quaternary structure',
      'Primary structure',
      'Secondary structure'
    ],
    correctIndex: 0,
    explanation: 'Tertiary structure refers to the overall, complex three-dimensional shape adopted by a single polypeptide chain, essential for its specific biological activity.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-31',
    type: 'mcq',
    question: 'When a protein is composed of more than one polypeptide chain (subunit), associated together to form the functional protein, this level of organisation is described as the protein\'s:',
    options: [
      'Secondary structure',
      'Primary structure',
      'Tertiary structure',
      'Quaternary structure'
    ],
    correctIndex: 3,
    explanation: 'Quaternary structure describes the association of two or more individual polypeptide subunits into a single, functional multi-subunit protein.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-32',
    type: 'mcq',
    question: 'Haemoglobin, a well-known example of a protein exhibiting quaternary structure, is composed of how many polypeptide subunits?',
    options: [
      'Two subunits only',
      'Four (two alpha and two beta subunits)',
      'Eight subunits',
      'Only a single subunit'
    ],
    correctIndex: 1,
    explanation: 'Haemoglobin is composed of four polypeptide subunits: two alpha chains and two beta chains, exemplifying quaternary protein structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-33',
    type: 'mcq',
    question: 'Which of the following best describes the general functional diversity of proteins in living organisms?',
    options: [
      'Proteins function only as structural components, with no catalytic or regulatory roles',
      'Proteins have only a single, universal function across all organisms',
      'Proteins function as enzymes, hormones, receptors, transport molecules, and antibodies, among other roles',
      'Proteins function exclusively as energy storage molecules, similar to fats'
    ],
    correctIndex: 2,
    explanation: 'Proteins perform an extraordinarily diverse range of functions in living organisms, acting as enzymes, hormones, receptors, transport molecules, antibodies, and more.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-34',
    type: 'mcq',
    question: 'Insulin, a well-known protein hormone, plays a crucial role in the regulation of:',
    options: [
      'Oxygen transport exclusively',
      'Blood glucose levels',
      'DNA replication',
      'Blood clotting exclusively'
    ],
    correctIndex: 1,
    explanation: 'Insulin is a protein hormone that plays a central role in regulating blood glucose levels.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-35',
    type: 'mcq',
    question: 'Haemoglobin, a protein found in red blood cells, primarily functions in the:',
    options: [
      'Storage of long-term energy reserves',
      'Synthesis of new DNA',
      'Digestion of carbohydrates',
      'Transport of respiratory gases (mainly oxygen)'
    ],
    correctIndex: 3,
    explanation: 'Haemoglobin functions primarily as a transport protein, carrying oxygen (and to some extent carbon dioxide) within red blood cells.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-36',
    type: 'mcq',
    question: 'Antibodies, a class of proteins involved in the body\'s immune defence, function primarily to:',
    options: [
      'Catalyse metabolic reactions as enzymes',
      'Store genetic information',
      'Transport oxygen throughout the body',
      'Recognise and help neutralise foreign antigens'
    ],
    correctIndex: 3,
    explanation: 'Antibodies are specialised proteins that recognise and help neutralise specific foreign antigens as part of the immune response.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-37',
    type: 'mcq',
    question: 'The loss of a protein\'s native three-dimensional structure, typically resulting in a loss of its biological activity, is called:',
    options: [
      'Phosphorylation',
      'Denaturation',
      'Glycosylation',
      'Polymerisation'
    ],
    correctIndex: 1,
    explanation: 'Denaturation refers to the loss of a protein\'s native (functional) three-dimensional structure, generally resulting in loss of its biological activity.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-38',
    type: 'mcq',
    question: 'Protein denaturation can be caused by physical or chemical factors, including:',
    options: [
      'Only exposure to pure, distilled water',
      'Excessive heat or significant changes in pH',
      'Only extremely low atmospheric pressure',
      'Only exposure to complete darkness'
    ],
    correctIndex: 1,
    explanation: 'Denaturation of proteins commonly results from physical factors like excessive heat, or chemical factors such as significant changes in pH.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-39',
    type: 'mcq',
    question: 'When a protein undergoes denaturation, its specific biological function (such as enzymatic activity) is typically:',
    options: [
      'Transferred to a different, unrelated protein',
      'Enhanced significantly',
      'Completely unaffected',
      'Lost'
    ],
    correctIndex: 3,
    explanation: 'Since denaturation disrupts a protein\'s native structure, its specific biological function is typically lost as a direct consequence.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-40',
    type: 'mcq',
    question: 'Nucleic acids, such as DNA and RNA, are polymers composed of repeating structural units called:',
    options: [
      'Monosaccharides',
      'Nucleotides',
      'Amino acids',
      'Fatty acids'
    ],
    correctIndex: 1,
    explanation: 'Nucleic acids are polymers built from repeating units called nucleotides.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-41',
    type: 'mcq',
    question: 'Each nucleotide is composed of three distinct components: a nitrogenous base, a pentose sugar, and a:',
    options: [
      'Hydroxyl group exclusively, with no phosphate present',
      'Phosphate group',
      'Amino group',
      'Carboxyl group'
    ],
    correctIndex: 1,
    explanation: 'A nucleotide consists of three key components: a nitrogenous base, a pentose (five-carbon) sugar, and a phosphate group.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-42',
    type: 'mcq',
    question: 'A structural unit composed of only a nitrogenous base linked to a pentose sugar, without any attached phosphate group, is specifically called a:',
    options: [
      'Polynucleotide',
      'Nucleotide',
      'Nucleoside',
      'Nucleoid'
    ],
    correctIndex: 2,
    explanation: 'A nucleoside consists of a nitrogenous base attached to a pentose sugar, but lacks the phosphate group present in a full nucleotide.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-43',
    type: 'mcq',
    question: 'Nitrogenous bases with a double-ring chemical structure, including adenine and guanine, are classified as:',
    options: [
      'Purines',
      'Phosphodiesters',
      'Nucleosides exclusively',
      'Pyrimidines'
    ],
    correctIndex: 0,
    explanation: 'Adenine and guanine are classified as purines, characterised by their double-ring chemical structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-44',
    type: 'mcq',
    question: 'Nitrogenous bases with a single-ring chemical structure, including cytosine, uracil, and thymine, are classified as:',
    options: [
      'Phosphodiesters',
      'Nucleosides exclusively',
      'Purines',
      'Pyrimidines'
    ],
    correctIndex: 3,
    explanation: 'Cytosine, uracil, and thymine are classified as pyrimidines, characterised by their single-ring chemical structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-45',
    type: 'mcq',
    question: 'DNA (deoxyribonucleic acid) characteristically contains which pentose sugar as part of its nucleotide structure?',
    options: [
      'Glucose',
      'Ribose',
      'Fructose',
      'Deoxyribose'
    ],
    correctIndex: 3,
    explanation: 'DNA contains the sugar deoxyribose (lacking one oxygen atom compared to ribose) as part of its nucleotide structure.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-46',
    type: 'mcq',
    question: 'RNA (ribonucleic acid) characteristically contains which pentose sugar as part of its nucleotide structure?',
    options: [
      'Deoxyribose',
      'Ribose',
      'Glucose',
      'Galactose'
    ],
    correctIndex: 1,
    explanation: 'RNA contains the sugar ribose as part of its nucleotide structure, distinguishing it from the deoxyribose found in DNA.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-47',
    type: 'mcq',
    question: 'Unlike DNA, which contains thymine as one of its pyrimidine bases, RNA characteristically contains which base in its place?',
    options: [
      'Cytosine',
      'Uracil',
      'Guanine',
      'Adenine'
    ],
    correctIndex: 1,
    explanation: 'RNA contains uracil in place of the thymine found in DNA, as one of its characteristic pyrimidine bases.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-48',
    type: 'mcq',
    question: 'Individual nucleotides are linked together to form a polynucleotide chain through the formation of:',
    options: [
      'Phosphodiester bonds',
      'Peptide bonds',
      'Glycosidic bonds exclusively',
      'Hydrogen bonds exclusively'
    ],
    correctIndex: 0,
    explanation: 'Nucleotides are joined together into a polynucleotide chain via phosphodiester bonds, linking the sugar of one nucleotide to the phosphate of the next.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-49',
    type: 'mcq',
    question: 'In a polynucleotide chain, the repeating sugar and phosphate groups form what is often described as the:',
    options: [
      'Sugar-phosphate backbone, with nitrogenous bases projecting outward',
      'Amino acid backbone, with phosphates projecting outward',
      'Lipid bilayer, with bases embedded within',
      'Peptide backbone, with sugars projecting outward'
    ],
    correctIndex: 0,
    explanation: 'The alternating sugar and phosphate groups form the structural sugar-phosphate backbone of a polynucleotide chain, with the nitrogenous bases projecting outward from this backbone.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-50',
    type: 'mcq',
    question: 'Polysaccharides are long chain polymers of monosaccharides (sugar units), linked together by:',
    options: [
      'Phosphodiester bonds',
      'Glycosidic bonds',
      'Hydrogen bonds exclusively',
      'Peptide bonds'
    ],
    correctIndex: 1,
    explanation: 'Polysaccharides are formed by linking individual monosaccharide units together through glycosidic bonds.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-51',
    type: 'mcq',
    question: 'Unlike simple sugars, most polysaccharides characteristically:',
    options: [
      'Are always intensely sweet in taste',
      'Are always highly soluble in water, like glucose',
      'Cannot be broken down by any enzyme',
      'Lack a sweet taste and are generally insoluble in water'
    ],
    correctIndex: 3,
    explanation: 'Most polysaccharides, unlike simple sugars, do not have a sweet taste and are generally insoluble in water.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-52',
    type: 'mcq',
    question: 'Cellulose, a structural polysaccharide forming the plant cell wall, is described structurally as a:',
    options: [
      'Linear polymer of fructose units exclusively',
      'Highly branched polymer of nucleotides',
      'Highly branched polymer of amino acids',
      'Linear, unbranched polymer of glucose units'
    ],
    correctIndex: 3,
    explanation: 'Cellulose, the primary structural component of plant cell walls, consists of a linear, unbranched chain of glucose units.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-53',
    type: 'mcq',
    question: 'Starch, the principal storage polysaccharide found in plants, characteristically forms a helical structure and produces which colour when treated with iodine solution?',
    options: [
      'Blue-black',
      'Pure white, with no colour change',
      'Bright red',
      'Green'
    ],
    correctIndex: 0,
    explanation: 'Starch, due to its helical secondary structure, produces a characteristic blue-black colour when it reacts with iodine solution - a common test for starch.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-54',
    type: 'mcq',
    question: 'Glycogen, sometimes referred to as \'animal starch,\' is the principal storage polysaccharide found in animals, and compared to plant starch, it is generally:',
    options: [
      'More highly branched',
      'Composed of amino acids rather than glucose',
      'Completely unbranched, unlike starch',
      'Found only in plant cells, never in animals'
    ],
    correctIndex: 0,
    explanation: 'Glycogen, the animal equivalent of starch, is structurally similar but generally more highly branched than plant starch.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-55',
    type: 'mcq',
    question: 'Chitin, a complex polysaccharide found forming the exoskeleton of arthropods, is structurally distinct from cellulose mainly in that it:',
    options: [
      'Is composed entirely of amino acids, not sugar units',
      'Contains nitrogen-containing modified glucose units',
      'Contains no carbon atoms at all',
      'Is found only in plant cell walls, not in animals'
    ],
    correctIndex: 1,
    explanation: 'Chitin, unlike cellulose, is composed of nitrogen-containing modified glucose units, giving it distinct chemical properties suitable for forming the arthropod exoskeleton.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-56',
    type: 'mcq',
    question: 'Enzymes, functioning as biological catalysts, are predominantly composed of:',
    options: [
      'Proteins',
      'Lipids',
      'Polysaccharides exclusively',
      'Nucleic acids exclusively'
    ],
    correctIndex: 0,
    explanation: 'The vast majority of enzymes are proteins, though a notable exception exists in the form of RNA-based catalysts called ribozymes.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-57',
    type: 'mcq',
    question: 'A small but notable exception to the general rule that enzymes are proteins is represented by catalytic RNA molecules, called:',
    options: [
      'Ribozymes',
      'Coenzymes exclusively',
      'Isozymes',
      'Apoenzymes'
    ],
    correctIndex: 0,
    explanation: 'Ribozymes are catalytic RNA molecules, representing a key exception to the general observation that enzymes are proteins.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-58',
    type: 'mcq',
    question: 'Enzymes increase the rate of a biochemical reaction primarily by:',
    options: [
      'Making the reaction less specific to its substrate',
      'Increasing the overall free energy change of the reaction',
      'Being permanently consumed and destroyed during the reaction',
      'Lowering the activation energy required for the reaction to proceed'
    ],
    correctIndex: 3,
    explanation: 'Enzymes accelerate biochemical reactions by lowering the activation energy barrier, without being permanently altered or consumed themselves in the process.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-59',
    type: 'mcq',
    question: 'A key characteristic feature of enzymes is their high degree of specificity, meaning that a particular enzyme generally:',
    options: [
      'Has no relationship to its substrate whatsoever',
      'Acts equally well on any and all possible substrates',
      'Only works within living cells, never outside them',
      'Acts only on a specific substrate (or a closely related group of substrates)'
    ],
    correctIndex: 3,
    explanation: 'Enzymes typically show a high degree of substrate specificity, generally acting only on a particular substrate or a closely related group of substrates.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-60',
    type: 'mcq',
    question: 'Following an enzyme-catalysed reaction, once the product is released, the enzyme itself is:',
    options: [
      'Converted entirely into the product',
      'Regenerated in its original, unchanged form, ready to catalyse further reactions',
      'Rendered completely inactive for the remainder of the cell\'s life',
      'Permanently destroyed and cannot be reused'
    ],
    correctIndex: 1,
    explanation: 'A defining feature of enzyme catalysis is that the enzyme itself remains chemically unchanged after the reaction, allowing it to be reused repeatedly.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-61',
    type: 'mcq',
    question: 'The specific region of an enzyme molecule where the substrate binds and the catalytic reaction takes place is called the:',
    options: [
      'Active site',
      'Golgi cisterna',
      'Allosteric site exclusively, with no other binding region',
      'Nuclear pore'
    ],
    correctIndex: 0,
    explanation: 'The active site is the specific region of an enzyme where substrate molecules bind and where the catalytic reaction is carried out.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-62',
    type: 'mcq',
    question: 'Enzyme activity is generally influenced by temperature, typically increasing with rising temperature up to an optimum point, beyond which activity:',
    options: [
      'Remains completely unaffected by any further temperature increase',
      'Continues to increase indefinitely, with no upper limit',
      'Declines sharply, due to denaturation of the enzyme',
      'Immediately drops to exactly zero, with no gradual decline'
    ],
    correctIndex: 2,
    explanation: 'Enzyme activity generally increases with temperature up to an optimum point, beyond which it declines sharply as the enzyme becomes denatured.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-63',
    type: 'mcq',
    question: 'Enzyme activity is also strongly influenced by pH, with each enzyme typically exhibiting a specific pH at which its activity is:',
    options: [
      'Identical for every enzyme in the body, without exception',
      'Maximal (its optimum pH)',
      'Completely unrelated to enzyme function',
      'Always at its lowest possible level'
    ],
    correctIndex: 1,
    explanation: 'Each enzyme typically has a specific optimum pH at which it exhibits maximal catalytic activity, and this varies for different enzymes.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-64',
    type: 'mcq',
    question: 'Pepsin, a digestive enzyme active in the stomach, characteristically shows optimum activity under which pH condition?',
    options: [
      'Conditions that are completely unrelated to pH',
      'Perfectly neutral conditions only',
      'Highly alkaline (basic) conditions',
      'Highly acidic conditions'
    ],
    correctIndex: 3,
    explanation: 'Pepsin, functioning in the acidic environment of the stomach, shows optimum activity under highly acidic pH conditions.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-65',
    type: 'mcq',
    question: 'As substrate concentration increases (with enzyme concentration held constant), the rate of an enzyme-catalysed reaction generally increases until it reaches a plateau, which occurs when:',
    options: [
      'The reaction rate becomes exactly zero',
      'The enzyme concentration spontaneously increases to match',
      'The substrate is completely destroyed',
      'All available active sites of the enzyme become saturated with substrate'
    ],
    correctIndex: 3,
    explanation: 'The reaction rate plateaus at high substrate concentrations because all the available active sites of the enzyme become saturated, limiting further increases in rate.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-66',
    type: 'mcq',
    question: 'A competitive inhibitor of an enzyme is a molecule that is structurally similar to the substrate and competes with it for binding at the:',
    options: [
      'Golgi apparatus',
      'Nuclear pore of the cell',
      'Active site of the enzyme',
      'Ribosome'
    ],
    correctIndex: 2,
    explanation: 'A competitive inhibitor structurally resembles the natural substrate and competes with it for binding at the enzyme\'s active site, thereby reducing enzyme activity.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-67',
    type: 'mcq',
    question: 'The inhibitory effect of a competitive enzyme inhibitor can typically be overcome, or reduced, by:',
    options: [
      'Adding more of the inhibitor itself',
      'Removing all water from the reaction mixture',
      'Increasing the concentration of the actual substrate',
      'Decreasing the temperature to absolute zero'
    ],
    correctIndex: 2,
    explanation: 'Since competitive inhibitors compete with the substrate for the same active site, increasing the substrate concentration can outcompete the inhibitor and restore normal enzyme activity.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-68',
    type: 'mcq',
    question: 'Enzymes catalysing oxidation-reduction reactions between two substrates are classified into the enzyme category known as:',
    options: [
      'Ligases',
      'Transferases',
      'Hydrolases',
      'Oxidoreductases'
    ],
    correctIndex: 3,
    explanation: 'Oxidoreductases are the class of enzymes that catalyse oxidation-reduction reactions between substrates.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-69',
    type: 'mcq',
    question: 'Enzymes catalysing the transfer of a specific chemical group (other than hydrogen) from one substrate to another are classified as:',
    options: [
      'Isomerases',
      'Lyases',
      'Oxidoreductases',
      'Transferases'
    ],
    correctIndex: 3,
    explanation: 'Transferases catalyse the transfer of a functional group (other than hydrogen) from one molecule to another.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-70',
    type: 'mcq',
    question: 'Enzymes that catalyse the hydrolysis (breakdown using water) of various chemical bonds are classified as:',
    options: [
      'Oxidoreductases',
      'Hydrolases',
      'Isomerases',
      'Ligases'
    ],
    correctIndex: 1,
    explanation: 'Hydrolases are enzymes that catalyse the hydrolytic breakdown of substrate molecules, using water in the process.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-71',
    type: 'mcq',
    question: 'Enzymes that catalyse the joining together of two molecules, coupled with the utilisation of energy from ATP, are classified as:',
    options: [
      'Lyases',
      'Isomerases',
      'Ligases',
      'Hydrolases'
    ],
    correctIndex: 2,
    explanation: 'Ligases catalyse the joining of two separate molecules together, a process that typically requires energy derived from ATP.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-72',
    type: 'mcq',
    question: 'The complex formed when a substrate molecule binds to the active site of an enzyme is called the:',
    options: [
      'Phospholipid complex',
      'Nucleoprotein complex',
      'Enzyme-substrate (ES) complex',
      'Peptide complex'
    ],
    correctIndex: 2,
    explanation: 'The enzyme-substrate (ES) complex is formed when a substrate binds to the active site of its corresponding enzyme, representing a key intermediate step in catalysis.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-73',
    type: 'mcq',
    question: 'According to the \'lock and key\' model of enzyme action, proposed by Emil Fischer, the active site of an enzyme is envisioned as having a shape that is:',
    options: [
      'Completely flexible, changing shape freely to fit any substrate',
      'Rigid, exactly complementary to the specific shape of its substrate',
      'Identical in shape for all enzymes, regardless of substrate',
      'Non-existent, since the model proposes no specific active site'
    ],
    correctIndex: 1,
    explanation: 'The lock and key model describes the enzyme\'s active site as having a rigid, precisely complementary shape to its specific substrate, akin to a key fitting a particular lock.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-74',
    type: 'mcq',
    question: 'According to the \'induced fit\' model of enzyme action, proposed by Koshland, the active site of an enzyme:',
    options: [
      'Can only bind substrates that are chemically identical to the enzyme itself',
      'Remains perfectly rigid at all times, never changing shape',
      'Changes its shape slightly to more precisely accommodate the binding substrate',
      'Is completely absent, with no defined binding region'
    ],
    correctIndex: 2,
    explanation: 'The induced fit model proposes that the enzyme\'s active site is somewhat flexible, changing its shape slightly upon substrate binding to achieve an optimal, more precise fit.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-75',
    type: 'mcq',
    question: 'In the overall mechanism of enzyme catalysis, after the enzyme-substrate complex forms and the reaction proceeds, the enzyme ultimately:',
    options: [
      'Releases the product(s) and returns to its original, unchanged state',
      'Loses its catalytic ability permanently after just one reaction',
      'Becomes irreversibly bound to the product forever',
      'Is permanently converted into the product'
    ],
    correctIndex: 0,
    explanation: 'After catalysing the conversion of substrate to product, the enzyme releases the product(s) and returns to its original state, ready to catalyse further reaction cycles.',
    difficulty: 'medium'
  },
  {
    id: 'biomolecules-76',
    type: 'mcq',
    question: 'Compared to the strict \'lock and key\' model, the \'induced fit\' model is generally considered to provide a more accurate representation of enzyme action mainly because it accounts for:',
    options: [
      'The dynamic, flexible nature of protein structure during substrate binding',
      'The idea that substrates never actually bind to enzymes at all',
      'The fact that enzymes are never proteins, but always RNA',
      'The complete absence of any protein structure in enzymes'
    ],
    correctIndex: 0,
    explanation: 'The induced fit model is generally regarded as more accurate because it accounts for the dynamic, flexible nature of protein structure, which can adjust upon substrate binding, unlike the rigid \'lock and key\' model.',
    difficulty: 'hard'
  },
  {
    id: 'biomolecules-77',
    type: 'mcq',
    question: 'The sum total of all the chemical reactions occurring within a living organism is collectively referred to as:',
    options: [
      'Glycosylation',
      'Metabolism',
      'Denaturation',
      'Polymerisation'
    ],
    correctIndex: 1,
    explanation: 'Metabolism refers to the complete sum total of all chemical reactions occurring within a living organism.',
    difficulty: 'easy'
  },
  {
    id: 'biomolecules-78',
    type: 'mcq',
    question: 'Metabolic reactions involved in the synthesis (building up) of complex molecules, generally requiring an input of energy, are classified as:',
    options: [
      'Anabolic reactions (anabolism)',
      'Denaturation reactions',
      'Catabolic reactions (catabolism)',
      'Glycosidic reactions exclusively'
    ],
    correctIndex: 0,
    explanation: 'Anabolism refers to the set of metabolic reactions involved in synthesising complex molecules from simpler ones, a process that generally requires an input of energy.',
    difficulty: 'medium'
  },
];

export default questions;