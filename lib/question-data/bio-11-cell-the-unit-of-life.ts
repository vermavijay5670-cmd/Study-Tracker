import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Cell - The Unit of Life
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'cell-the-unit-of-life-1',
    type: 'mcq',
    question: 'The cell was first observed and named by:',
    options: [
      'Matthias Schleiden, while studying plant tissues',
      'Robert Brown, while studying orchid cells',
      'Rudolf Virchow, while studying animal tissues',
      'Robert Hooke, while examining a thin slice of cork under a microscope'
    ],
    correctIndex: 3,
    explanation: 'Robert Hooke first observed and named the cell in 1665, while examining a thin slice of cork under a simple microscope.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-2',
    type: 'mcq',
    question: 'The Cell Theory, as originally proposed, states that all plants and animals are composed of cells, and that the cell is the basic unit of life. This theory was jointly proposed by:',
    options: [
      'Robert Hooke and Robert Brown',
      'Rudolf Virchow and Anton van Leeuwenhoek',
      'Matthias Schleiden and Theodor Schwann',
      'Camillo Golgi and George Palade'
    ],
    correctIndex: 2,
    explanation: 'Matthias Schleiden (for plants, 1838) and Theodor Schwann (for animals, 1839) jointly proposed the foundational principles of the Cell Theory.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-3',
    type: 'mcq',
    question: 'The Cell Theory was later expanded by Rudolf Virchow, who proposed that all cells arise from pre-existing cells, a concept summarised by the phrase:',
    options: [
      'Omnis vita-e vita',
      'Natura non facit saltus',
      'Cellula est vita',
      'Omnis cellula-e cellula'
    ],
    correctIndex: 3,
    explanation: 'Rudolf Virchow expanded the Cell Theory in 1855 by proposing that all cells arise only from pre-existing cells, summarised in the Latin phrase \'Omnis cellula-e cellula.\'',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-4',
    type: 'mcq',
    question: 'The scientist credited with first observing living cells, using a self-designed simple microscope, was:',
    options: [
      'Robert Hooke',
      'Rudolf Virchow',
      'Anton van Leeuwenhoek',
      'Robert Brown'
    ],
    correctIndex: 2,
    explanation: 'Anton van Leeuwenhoek was the first to observe and describe living, free cells, using his own simple microscopes.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-5',
    type: 'mcq',
    question: 'The nucleus of the cell was first discovered and described by:',
    options: [
      'Robert Brown',
      'Robert Hooke',
      'Camillo Golgi',
      'Rudolf Virchow'
    ],
    correctIndex: 0,
    explanation: 'Robert Brown is credited with first describing the nucleus, in 1831, while studying orchid cells.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-6',
    type: 'mcq',
    question: 'Among known cells, the smallest cells, belonging to the genus Mycoplasma (PPLO), have a size of approximately:',
    options: [
      '30 micrometres',
      '0.3 micrometre',
      '300 micrometres',
      '3 millimetres'
    ],
    correctIndex: 1,
    explanation: 'Mycoplasma (PPLO) are among the smallest known cells, with a size of approximately 0.3 micrometre.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-7',
    type: 'mcq',
    question: 'Cell size and shape are generally related to the specific function that a particular cell performs, meaning that:',
    options: [
      'All cells in the body, regardless of function, are identical in shape',
      'Only plant cells show any variation in shape',
      'Cell shape has no relationship to cell function at all',
      'Cell shape varies considerably depending on the cell\'s function'
    ],
    correctIndex: 3,
    explanation: 'Cell shape typically varies in accordance with the specific function a cell performs, resulting in a wide diversity of cell shapes within an organism.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-8',
    type: 'mcq',
    question: 'Prokaryotic cells are structurally distinguished from eukaryotic cells mainly by the absence of a:',
    options: [
      'Cell wall of any kind',
      'Any genetic material whatsoever',
      'Membrane-bound nucleus and membrane-bound organelles',
      'Ribosomes of any kind'
    ],
    correctIndex: 2,
    explanation: 'Prokaryotic cells lack a membrane-bound nucleus (having instead a nucleoid) and lack membrane-bound organelles, distinguishing them from eukaryotic cells.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-9',
    type: 'mcq',
    question: 'In prokaryotic cells, the genetic material is present in an undefined nuclear region called the:',
    options: [
      'Nucleolus',
      'Chromatin body',
      'Nucleoid',
      'Nuclear envelope'
    ],
    correctIndex: 2,
    explanation: 'The nucleoid is the nuclear region of a prokaryotic cell, containing the genetic material but not enclosed by a nuclear membrane.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-10',
    type: 'mcq',
    question: 'The outermost, loosely attached or thick and tough layer surrounding some bacterial cells, external to the cell wall, is called the:',
    options: [
      'Nucleoid',
      'Glycocalyx',
      'Mesosome',
      'Plasma membrane'
    ],
    correctIndex: 1,
    explanation: 'The glycocalyx is the outermost bacterial cell covering, which may be a loose slime layer or a thick, tough capsule, depending on the species.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-11',
    type: 'mcq',
    question: 'In bacteria, the rigid layer that determines cell shape and provides protection against osmotic lysis or mechanical damage is called the:',
    options: [
      'Glycocalyx',
      'Mesosome',
      'Plasma membrane',
      'Cell wall'
    ],
    correctIndex: 3,
    explanation: 'The bacterial cell wall determines cell shape and provides essential protection against osmotic lysis and mechanical damage.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-12',
    type: 'mcq',
    question: 'Extensions of the plasma membrane into the interior of a bacterial cell, formed by infolding and appearing as vesicles, tubules, or lamellae, are called:',
    options: [
      'Mesosomes',
      'Nucleoids',
      'Pili',
      'Ribosomes'
    ],
    correctIndex: 0,
    explanation: 'Mesosomes are membranous extensions formed by the infolding of the plasma membrane in bacteria, aiding in functions like cell wall formation and DNA replication.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-13',
    type: 'mcq',
    question: 'Mesosomes in bacteria are thought to assist in cell wall formation, DNA replication and its distribution to daughter cells, as well as in:',
    options: [
      'Photosynthesis exclusively, as in chloroplasts',
      'Storage of genetic material, replacing the nucleoid entirely',
      'Producing flagella exclusively',
      'Respiration and secretion processes, by increasing the surface area of the plasma membrane'
    ],
    correctIndex: 3,
    explanation: 'In addition to aiding cell wall formation and DNA distribution, mesosomes help in respiration and secretion, since they increase the surface area of the plasma membrane and its enzymatic content.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-14',
    type: 'mcq',
    question: 'Motile bacteria typically possess whip-like appendages used for locomotion, called flagella, each of which is composed of three main parts: a filament, a hook, and a:',
    options: [
      'Ribosome',
      'Basal body',
      'Mesosome',
      'Nucleoid'
    ],
    correctIndex: 1,
    explanation: 'A bacterial flagellum is structurally composed of three main parts: the filament, the hook, and the basal body.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-15',
    type: 'mcq',
    question: 'Small, bristle-like fibres present on the surface of some bacteria, distinct from flagella and not related to motility, but instead involved in attachment, are called:',
    options: [
      'Cristae',
      'Pili and fimbriae',
      'Nucleoids',
      'Mesosomes'
    ],
    correctIndex: 1,
    explanation: 'Pili and fimbriae are small, bristle-like surface structures found in some bacteria, functioning in attachment rather than motility.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-16',
    type: 'mcq',
    question: 'The reserve food material found in bacterial cells, lying freely in the cytoplasm without being bound by any membrane, is generally referred to as:',
    options: [
      'Golgi bodies',
      'Nucleoids',
      'Inclusion bodies',
      'Mesosomes'
    ],
    correctIndex: 2,
    explanation: 'Inclusion bodies represent reserve material (such as phosphate or glycogen granules) found freely in the bacterial cytoplasm, lacking a bounding membrane.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-17',
    type: 'mcq',
    question: 'Certain photosynthetic bacteria, such as blue-green, purple, and green photosynthetic bacteria, possess specialised inclusion bodies filled with gas, called:',
    options: [
      'Cyanophycean granules',
      'Glycogen granules',
      'Gas vacuoles',
      'Phosphate granules'
    ],
    correctIndex: 2,
    explanation: 'Gas vacuoles are specialised, gas-filled inclusion bodies found in certain photosynthetic bacteria, including blue-green, purple, and green photosynthetic bacteria.',
    difficulty: 'hard'
  },
  {
    id: 'cell-the-unit-of-life-18',
    type: 'mcq',
    question: 'Ribosomes associated with the plasma membrane of a prokaryotic cell, serving as the site of protein synthesis, are characteristically of which sedimentation type?',
    options: [
      '70S',
      '60S',
      '40S',
      '80S'
    ],
    correctIndex: 0,
    explanation: 'Prokaryotic ribosomes are of the 70S type (composed of 50S and 30S subunits), distinct from the larger 80S ribosomes found in eukaryotic cytoplasm.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-19',
    type: 'mcq',
    question: 'The 70S ribosome found in prokaryotic cells is composed of two subunits, sedimenting at:',
    options: [
      '80S and 70S',
      '50S and 30S',
      '60S and 40S',
      '40S and 20S'
    ],
    correctIndex: 1,
    explanation: 'The 70S prokaryotic ribosome is composed of a larger 50S subunit and a smaller 30S subunit.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-20',
    type: 'mcq',
    question: 'Ribosomes function as the cellular site for the process of:',
    options: [
      'Protein synthesis',
      'ATP production exclusively',
      'Lipid synthesis exclusively',
      'DNA replication'
    ],
    correctIndex: 0,
    explanation: 'Ribosomes, found in both prokaryotic and eukaryotic cells, function as the site of protein synthesis.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-21',
    type: 'mcq',
    question: 'The widely accepted model describing the molecular organisation of the plasma membrane, proposed by Singer and Nicolson, is called the:',
    options: [
      'Sandwich model',
      'Fluid mosaic model',
      'Solid mosaic model',
      'Unit membrane model exclusively'
    ],
    correctIndex: 1,
    explanation: 'The fluid mosaic model, proposed by Singer and Nicolson in 1972, describes the plasma membrane as a fluid structure with proteins embedded in a lipid bilayer.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-22',
    type: 'mcq',
    question: 'According to the fluid mosaic model, the lipid molecules within the plasma membrane are arranged in a bilayer that exhibits which key property?',
    options: [
      'A completely crystalline, solid-state structure',
      'Complete rigidity, with no movement of any component allowed',
      'A gaseous state, allowing free diffusion of the entire membrane',
      'Quasi-fluidity, allowing for the lateral movement of proteins'
    ],
    correctIndex: 3,
    explanation: 'The lipid bilayer of the plasma membrane exhibits a quasi-fluid nature, allowing embedded protein molecules to move somewhat freely within the membrane, akin to icebergs floating in a sea of lipids.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-23',
    type: 'mcq',
    question: 'Membrane proteins that completely span the width of the plasma membrane are classified as:',
    options: [
      'Structural proteins exclusively',
      'Integral proteins',
      'Peripheral proteins',
      'Enzymatic proteins exclusively'
    ],
    correctIndex: 1,
    explanation: 'Integral proteins are membrane proteins that are embedded within and span the entire width of the lipid bilayer.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-24',
    type: 'mcq',
    question: 'Membrane proteins that are found only on the inner or outer surface of the plasma membrane, without spanning its full width, are classified as:',
    options: [
      'Transmembrane proteins',
      'Peripheral proteins',
      'Integral proteins',
      'Cytoskeletal proteins exclusively'
    ],
    correctIndex: 1,
    explanation: 'Peripheral proteins are located only on the surface of the plasma membrane (either inner or outer), unlike integral proteins, which span the entire membrane.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-25',
    type: 'mcq',
    question: 'The movement of molecules across the plasma membrane without any expenditure of cellular energy (ATP), moving along a concentration gradient, is called:',
    options: [
      'Osmotic pumping',
      'Active transport',
      'Facilitated hydrolysis',
      'Passive transport'
    ],
    correctIndex: 3,
    explanation: 'Passive transport allows molecules to cross the membrane without energy expenditure, moving from a region of higher to lower concentration.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-26',
    type: 'mcq',
    question: 'The movement of molecules across the plasma membrane against their concentration gradient, requiring the expenditure of cellular energy (ATP), is called:',
    options: [
      'Passive transport',
      'Simple diffusion',
      'Active transport',
      'Osmosis'
    ],
    correctIndex: 2,
    explanation: 'Active transport moves molecules against their concentration gradient and requires the expenditure of ATP.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-27',
    type: 'mcq',
    question: 'The cell wall of plant cells is chemically composed primarily of:',
    options: [
      'Peptidoglycan',
      'Keratin',
      'Cellulose',
      'Chitin'
    ],
    correctIndex: 2,
    explanation: 'The plant cell wall is composed primarily of cellulose, distinguishing it from the fungal cell wall (chitin) and bacterial cell wall (peptidoglycan).',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-28',
    type: 'mcq',
    question: 'The plant cell wall provides a rigid structure and helps the cell to withstand changes in osmotic pressure, primarily by:',
    options: [
      'Preventing the cell from bursting when placed in a hypotonic medium',
      'Completely preventing any water movement into or out of the cell',
      'Actively pumping out excess water using ATP',
      'Dissolving completely in hypotonic solutions'
    ],
    correctIndex: 0,
    explanation: 'The rigid cell wall provides structural support that prevents the plant cell from bursting (lysis) when it absorbs water and swells in a hypotonic medium.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-29',
    type: 'mcq',
    question: 'The layer that cements together the walls of two adjacent plant cells, composed mainly of calcium pectate, is called the:',
    options: [
      'Tonoplast',
      'Glycocalyx',
      'Mesosome',
      'Middle lamella'
    ],
    correctIndex: 3,
    explanation: 'The middle lamella, composed mainly of calcium pectate, cements together the cell walls of adjacent plant cells.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-30',
    type: 'mcq',
    question: 'The endomembrane system of a eukaryotic cell includes the endoplasmic reticulum, Golgi apparatus, lysosomes, and vacuoles, since their functions are:',
    options: [
      'Restricted only to animal cells, never found in plants',
      'Completely independent of one another',
      'Identical to those of mitochondria and chloroplasts',
      'Coordinated with one another'
    ],
    correctIndex: 3,
    explanation: 'The endomembrane system comprises organelles (ER, Golgi apparatus, lysosomes, vacuoles) whose functions are coordinated with each other, distinguishing them from organelles like mitochondria and chloroplasts, which function more independently.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-31',
    type: 'mcq',
    question: 'Mitochondria, chloroplasts, and peroxisomes are generally NOT included as part of the endomembrane system mainly because their functions are:',
    options: [
      'Completely unnecessary for the cell\'s survival',
      'Not coordinated with the other endomembrane organelles',
      'Identical to those of the Golgi apparatus',
      'Restricted only to prokaryotic cells'
    ],
    correctIndex: 1,
    explanation: 'Since the functions of mitochondria, chloroplasts, and peroxisomes are not coordinated with those of the ER, Golgi, lysosomes, and vacuoles, they are excluded from the endomembrane system.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-32',
    type: 'mcq',
    question: 'The endoplasmic reticulum (ER) forms a network of membranous tubules and flattened sacs called cisternae, extending throughout the:',
    options: [
      'Nucleus only',
      'Extracellular space only',
      'Cell wall only',
      'Cytoplasm'
    ],
    correctIndex: 3,
    explanation: 'The endoplasmic reticulum forms an extensive network of membranous tubules and cisternae that extend throughout the cytoplasm of the cell.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-33',
    type: 'mcq',
    question: 'The type of endoplasmic reticulum that has ribosomes attached to its outer surface, primarily involved in protein synthesis, is called:',
    options: [
      'Smooth Endoplasmic Reticulum (SER)',
      'Nuclear envelope exclusively',
      'Golgi apparatus',
      'Rough Endoplasmic Reticulum (RER)'
    ],
    correctIndex: 3,
    explanation: 'Rough Endoplasmic Reticulum (RER) has ribosomes attached to its outer surface, giving it a rough appearance, and is primarily involved in protein synthesis.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-34',
    type: 'mcq',
    question: 'The type of endoplasmic reticulum that lacks ribosomes on its surface, and is primarily involved in lipid synthesis, is called:',
    options: [
      'Lysosome',
      'Rough Endoplasmic Reticulum (RER)',
      'Smooth Endoplasmic Reticulum (SER)',
      'Golgi apparatus'
    ],
    correctIndex: 2,
    explanation: 'Smooth Endoplasmic Reticulum (SER) lacks ribosomes and is primarily involved in the synthesis of lipids.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-35',
    type: 'mcq',
    question: 'The outer nuclear membrane is generally continuous with a portion of the endoplasmic reticulum, specifically the:',
    options: [
      'Plasma membrane',
      'Golgi apparatus',
      'Rough Endoplasmic Reticulum (RER)',
      'Smooth Endoplasmic Reticulum (SER) exclusively'
    ],
    correctIndex: 2,
    explanation: 'The outer nuclear membrane is typically continuous with the rough endoplasmic reticulum (RER), often bearing ribosomes on its outer surface as well.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-36',
    type: 'mcq',
    question: 'The Golgi apparatus, first described by the scientist after whom it is named, consists of a system of membrane-bound vesicles arranged in stacks called:',
    options: [
      'Cisternae',
      'Grana',
      'Thylakoids',
      'Cristae'
    ],
    correctIndex: 0,
    explanation: 'The Golgi apparatus, discovered by Camillo Golgi, consists of membrane-bound sacs organised into stacks called cisternae.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-37',
    type: 'mcq',
    question: 'The convex face of the Golgi apparatus, oriented toward the endoplasmic reticulum, is called the:',
    options: [
      'Nuclear face',
      'Cis face (forming face)',
      'Basal face',
      'Trans face (maturing face)'
    ],
    correctIndex: 1,
    explanation: 'The cis face (forming face) of the Golgi apparatus is convex in shape and oriented toward the endoplasmic reticulum, receiving material from it.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-38',
    type: 'mcq',
    question: 'The concave face of the Golgi apparatus, oriented away from the endoplasmic reticulum, from which processed material is finally released, is called the:',
    options: [
      'Cis face (forming face)',
      'Trans face (maturing face)',
      'Basal face',
      'Nuclear face'
    ],
    correctIndex: 1,
    explanation: 'The trans face (maturing face) of the Golgi apparatus is concave and is where fully processed material is finally packaged and released from the organelle.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-39',
    type: 'mcq',
    question: 'One of the important functions of the Golgi apparatus is the chemical modification of proteins and lipids received from the endoplasmic reticulum, a process called:',
    options: [
      'Replication',
      'Phosphorylation exclusively',
      'Hydrolysis exclusively',
      'Glycosylation'
    ],
    correctIndex: 3,
    explanation: 'Glycosylation, the addition of sugar groups to proteins and lipids, is a key chemical modification carried out by the Golgi apparatus.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-40',
    type: 'mcq',
    question: 'In addition to packaging materials for secretion, the Golgi apparatus is also known to play a key role in the formation of:',
    options: [
      'Ribosomes',
      'Lysosomes',
      'Mitochondria',
      'Chloroplasts'
    ],
    correctIndex: 1,
    explanation: 'Besides its role in packaging secretory materials, the Golgi apparatus is also responsible for the formation of lysosomes.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-41',
    type: 'mcq',
    question: 'Lysosomes, membrane-bound vesicular structures formed by the Golgi apparatus, characteristically contain a variety of enzymes called:',
    options: [
      'Only enzymes involved in ATP synthesis',
      'Hydrolytic enzymes (hydrolases)',
      'Only enzymes involved in DNA replication',
      'Oxidative enzymes exclusively'
    ],
    correctIndex: 1,
    explanation: 'Lysosomes contain hydrolytic enzymes (hydrolases), capable of breaking down carbohydrates, proteins, lipids, and nucleic acids.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-42',
    type: 'mcq',
    question: 'The hydrolytic enzymes within lysosomes are optimally active under which pH condition?',
    options: [
      'Acidic conditions',
      'Strongly alkaline (basic) conditions',
      'Perfectly neutral conditions only',
      'They are equally active at any pH'
    ],
    correctIndex: 0,
    explanation: 'Lysosomal hydrolytic enzymes function optimally under acidic conditions, reflecting the acidic internal environment of the lysosome.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-43',
    type: 'mcq',
    question: 'When a lysosome ruptures within a cell, releasing its digestive enzymes into the cytoplasm, it can lead to the digestion of the cell\'s own components, a process called:',
    options: [
      'Autolysis (giving lysosomes the nickname \'suicide bags\')',
      'Phagocytosis exclusively',
      'Chemiosmosis',
      'Glycosylation'
    ],
    correctIndex: 0,
    explanation: 'Rupture of lysosomal membranes releases hydrolytic enzymes into the cytoplasm, potentially digesting the cell\'s own components, a process called autolysis, hence lysosomes are sometimes called \'suicide bags.\'',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-44',
    type: 'mcq',
    question: 'Lysosomes play an important role in intracellular digestion, being capable of breaking down carbohydrates, proteins, lipids, and:',
    options: [
      'Only inorganic salts',
      'Only water molecules',
      'Nucleic acids',
      'Only gases like oxygen and carbon dioxide'
    ],
    correctIndex: 2,
    explanation: 'The hydrolytic enzymes of lysosomes are capable of digesting a wide range of macromolecules, including carbohydrates, proteins, lipids, and nucleic acids.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-45',
    type: 'mcq',
    question: 'The membrane that surrounds a plant cell\'s vacuole, separating it from the surrounding cytoplasm, is called the:',
    options: [
      'Sarcolemma',
      'Tonoplast',
      'Nuclear envelope',
      'Plasmalemma exclusively'
    ],
    correctIndex: 1,
    explanation: 'The tonoplast is the specific membrane that encloses the vacuole in a plant cell, regulating the movement of substances into and out of it.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-46',
    type: 'mcq',
    question: 'In mature plant cells, the vacuole may occupy up to what proportion of the total cell volume?',
    options: [
      'Only about 25%',
      'As much as 90%',
      'Exactly 50%, with no variation',
      'Only about 5%'
    ],
    correctIndex: 1,
    explanation: 'In many mature plant cells, the central vacuole can occupy up to 90% of the total cell volume, contributing significantly to turgor pressure.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-47',
    type: 'mcq',
    question: 'In Amoeba, the specialised vacuole responsible for maintaining osmotic balance by expelling excess water is called the:',
    options: [
      'Tonoplast vacuole',
      'Central vacuole, as seen in plants',
      'Food vacuole',
      'Contractile vacuole'
    ],
    correctIndex: 3,
    explanation: 'The contractile vacuole in Amoeba plays an important osmoregulatory role, actively expelling excess water from the cell.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-48',
    type: 'mcq',
    question: 'Mitochondria are often referred to as the \'powerhouse of the cell\' because they are the primary site of:',
    options: [
      'Lipid storage exclusively',
      'Protein synthesis',
      'DNA replication exclusively',
      'ATP (energy) production'
    ],
    correctIndex: 3,
    explanation: 'Mitochondria are called the \'powerhouse of the cell\' because they are the primary site of aerobic ATP production.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-49',
    type: 'mcq',
    question: 'The mitochondrion is bound by how many membranes?',
    options: [
      'No membrane at all, being naked in the cytoplasm',
      'Only a single membrane',
      'Two membranes (an outer and an inner membrane)',
      'Three membranes'
    ],
    correctIndex: 2,
    explanation: 'Mitochondria are double membrane-bound organelles, possessing both an outer and an inner membrane.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-50',
    type: 'mcq',
    question: 'The inner membrane of the mitochondrion is characteristically folded into numerous finger-like projections called:',
    options: [
      'Thylakoids',
      'Cisternae',
      'Cristae',
      'Grana'
    ],
    correctIndex: 2,
    explanation: 'The inner mitochondrial membrane forms numerous folds called cristae, which significantly increase the surface area available for biochemical reactions.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-51',
    type: 'mcq',
    question: 'The folding of the inner mitochondrial membrane into cristae primarily serves to:',
    options: [
      'Increase the surface area available for various biochemical (metabolic) reactions',
      'Prevent any chemical reactions from occurring',
      'Decrease the total surface area, conserving space',
      'Store excess water'
    ],
    correctIndex: 0,
    explanation: 'The extensive folding of the inner mitochondrial membrane into cristae increases the surface area available for the enzymatic reactions of aerobic respiration.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-52',
    type: 'mcq',
    question: 'The fluid matrix enclosed within the inner mitochondrial membrane, containing mitochondrial DNA, RNA, ribosomes, and enzymes for the citric acid cycle, is called the:',
    options: [
      'Stroma',
      'Mitochondrial matrix',
      'Nucleoplasm',
      'Cytosol'
    ],
    correctIndex: 1,
    explanation: 'The mitochondrial matrix is the fluid-filled interior space enclosed by the inner membrane, containing the organelle\'s own DNA, RNA, ribosomes, and various enzymes.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-53',
    type: 'mcq',
    question: 'The DNA found within mitochondria is characteristically:',
    options: [
      'Linear and complexed extensively with histone proteins',
      'Identical in every way to nuclear DNA',
      'Entirely absent, since mitochondria have no DNA of their own',
      'Circular and naked (not associated with histone proteins)'
    ],
    correctIndex: 3,
    explanation: 'Mitochondrial DNA is circular and naked, lacking the histone proteins associated with nuclear (eukaryotic) chromatin, a feature reminiscent of prokaryotic DNA.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-54',
    type: 'mcq',
    question: 'The ribosomes found within the mitochondrial matrix are of which sedimentation type, similar to prokaryotic ribosomes?',
    options: [
      '70S',
      '60S',
      '80S',
      '40S'
    ],
    correctIndex: 0,
    explanation: 'Mitochondrial ribosomes are of the 70S type, similar to prokaryotic ribosomes, supporting the endosymbiotic theory of mitochondrial origin.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-55',
    type: 'mcq',
    question: 'Since mitochondria possess their own DNA and ribosomes, and are capable of dividing independently, they are described as:',
    options: [
      'Semi-autonomous organelles',
      'Completely autonomous, fully independent organisms',
      'Non-functional vestigial organelles',
      'Entirely dependent, lacking any of their own genetic material'
    ],
    correctIndex: 0,
    explanation: 'Because mitochondria contain their own genetic material (DNA) and ribosomes, and can divide somewhat independently, they are termed semi-autonomous organelles.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-56',
    type: 'mcq',
    question: 'Plastids, found in plant cells and euglenoids, are broadly classified into three types: chloroplasts, chromoplasts, and:',
    options: [
      'Ribosomes',
      'Peroxisomes',
      'Lysosomes',
      'Leucoplasts'
    ],
    correctIndex: 3,
    explanation: 'Plastids are classified into three main types: chloroplasts (photosynthetic), chromoplasts (pigmented), and leucoplasts (colourless, storage).',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-57',
    type: 'mcq',
    question: 'Chloroplasts, the green-coloured plastids responsible for photosynthesis, contain the pigments chlorophyll and:',
    options: [
      'Haemoglobin',
      'Anthocyanins exclusively',
      'Melanin',
      'Carotenoids'
    ],
    correctIndex: 3,
    explanation: 'Chloroplasts contain chlorophyll along with carotenoid pigments, together enabling the process of photosynthesis.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-58',
    type: 'mcq',
    question: 'Chromoplasts, plastids containing fat-soluble pigments such as carotene and xanthophylls, are generally responsible for imparting which colours to plant parts?',
    options: [
      'Yellow, orange, or red colours',
      'Only white or colourless appearances',
      'Only blue or purple colouration',
      'Only green colouration, identical to chloroplasts'
    ],
    correctIndex: 0,
    explanation: 'Chromoplasts contain fat-soluble pigments like carotene and xanthophylls, imparting yellow, orange, or red colouration to various plant parts.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-59',
    type: 'mcq',
    question: 'Leucoplasts are colourless plastids primarily specialised for the storage of nutrients; specifically, amyloplasts store:',
    options: [
      'Carbohydrates (starch)',
      'Oils and fats',
      'Water exclusively',
      'Proteins'
    ],
    correctIndex: 0,
    explanation: 'Amyloplasts, a type of leucoplast, are specialised for the storage of carbohydrates in the form of starch.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-60',
    type: 'mcq',
    question: 'Elaioplasts, another type of leucoplast, are specifically specialised for storing:',
    options: [
      'Carbohydrates (starch)',
      'Proteins',
      'Oils and fats',
      'Nucleic acids'
    ],
    correctIndex: 2,
    explanation: 'Elaioplasts are leucoplasts specifically adapted for the storage of oils and fats.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-61',
    type: 'mcq',
    question: 'Within the chloroplast, membrane-bound, flattened, sac-like structures organised into stacks (grana), serving as the site of the light reaction of photosynthesis, are called:',
    options: [
      'Thylakoids',
      'Cristae',
      'Nucleoids',
      'Cisternae'
    ],
    correctIndex: 0,
    explanation: 'Thylakoids are flattened, membrane-bound sacs within the chloroplast, organised into stacks called grana, and serve as the site of the light-dependent reactions of photosynthesis.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-62',
    type: 'mcq',
    question: 'The fluid matrix of the chloroplast, surrounding the grana and containing the enzymes for the dark reaction (Calvin cycle), is called the:',
    options: [
      'Mitochondrial matrix',
      'Cytosol',
      'Stroma',
      'Nucleoplasm'
    ],
    correctIndex: 2,
    explanation: 'The stroma is the fluid-filled matrix of the chloroplast, containing the enzymes responsible for the dark reaction (carbon fixation) of photosynthesis.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-63',
    type: 'mcq',
    question: 'Like mitochondria, chloroplasts also possess their own DNA and ribosomes, and are therefore also classified as:',
    options: [
      'Semi-autonomous organelles',
      'Non-functional structures with no independent role',
      'Part of the endomembrane system',
      'Fully autonomous, independent organisms'
    ],
    correctIndex: 0,
    explanation: 'Similar to mitochondria, chloroplasts possess their own DNA and ribosomes, allowing them to be classified as semi-autonomous organelles.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-64',
    type: 'mcq',
    question: 'Ribosomes found freely in the cytoplasm of a eukaryotic cell, or attached to the rough endoplasmic reticulum, are characteristically of which sedimentation type?',
    options: [
      '80S',
      '60S alone, with no smaller subunit',
      '70S',
      '40S alone, with no larger subunit'
    ],
    correctIndex: 0,
    explanation: 'Eukaryotic cytoplasmic ribosomes are of the 80S type, composed of a 60S and a 40S subunit, distinct from the smaller 70S ribosomes of prokaryotes, mitochondria, and chloroplasts.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-65',
    type: 'mcq',
    question: 'The 80S eukaryotic ribosome is composed of two subunits, sedimenting at:',
    options: [
      '70S and 10S',
      '50S and 30S',
      '60S and 40S',
      '80S and 20S'
    ],
    correctIndex: 2,
    explanation: 'The 80S eukaryotic cytoplasmic ribosome is composed of a larger 60S subunit and a smaller 40S subunit.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-66',
    type: 'mcq',
    question: 'When several ribosomes attach to a single strand of mRNA and simultaneously translate it into polypeptides, the resulting structure is called a:',
    options: [
      'Polysome (polyribosome)',
      'Nucleosome',
      'Centrosome',
      'Mesosome'
    ],
    correctIndex: 0,
    explanation: 'A polysome (or polyribosome) is formed when multiple ribosomes attach to and simultaneously translate a single mRNA molecule.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-67',
    type: 'mcq',
    question: 'The network of filamentous proteins present in the cytoplasm of a eukaryotic cell, providing mechanical support, motility, and helping maintain cell shape, is called the:',
    options: [
      'Nucleoskeleton',
      'Cytoskeleton',
      'Endomembrane system',
      'Glycocalyx'
    ],
    correctIndex: 1,
    explanation: 'The cytoskeleton is a network of protein filaments (including microtubules, microfilaments, and intermediate filaments) that provides mechanical support and enables cell motility and shape maintenance.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-68',
    type: 'mcq',
    question: 'The core structure of a cilium or flagellum, consisting of a specific arrangement of microtubules, is called the:',
    options: [
      'Basal body',
      'Axoneme',
      'Centriole',
      'Cytoskeleton'
    ],
    correctIndex: 1,
    explanation: 'The axoneme is the internal core structure of a cilium or flagellum, composed of a characteristic arrangement of microtubules.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-69',
    type: 'mcq',
    question: 'The characteristic microtubule arrangement found within the axoneme of cilia and flagella is described as:',
    options: [
      'A completely random, unpatterned arrangement of microtubules',
      'A simple, single central microtubule with no peripheral doublets',
      'A 9+0 array, with no central microtubules at all',
      'A 9+2 array (nine peripheral doublets surrounding two central singlet microtubules)'
    ],
    correctIndex: 3,
    explanation: 'The axoneme of cilia and flagella characteristically shows a 9+2 arrangement: nine peripheral doublet microtubules surrounding a central pair of single microtubules.',
    difficulty: 'hard'
  },
  {
    id: 'cell-the-unit-of-life-70',
    type: 'mcq',
    question: 'The centrosome, found in animal cells, contains two cylindrical structures involved in spindle fibre formation during cell division, called:',
    options: [
      'Centrioles',
      'Mesosomes',
      'Ribosomes',
      'Peroxisomes'
    ],
    correctIndex: 0,
    explanation: 'The centrosome contains a pair of centrioles, which play an important role in organising the spindle fibres during cell division.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-71',
    type: 'mcq',
    question: 'Each centriole is structurally composed of nine peripherally arranged triplet fibrils of the protein:',
    options: [
      'Tubulin',
      'Keratin',
      'Collagen',
      'Actin'
    ],
    correctIndex: 0,
    explanation: 'Each centriole is composed of nine peripheral triplet microtubules made of the protein tubulin, arranged in a characteristic \'cartwheel\' pattern.',
    difficulty: 'hard'
  },
  {
    id: 'cell-the-unit-of-life-72',
    type: 'mcq',
    question: 'The nucleus, generally the most prominent organelle in a eukaryotic cell, is enclosed by a double membrane structure called the:',
    options: [
      'Tonoplast',
      'Cytoskeleton',
      'Nuclear envelope',
      'Nucleolus'
    ],
    correctIndex: 2,
    explanation: 'The nuclear envelope, a double membrane structure, encloses the contents of the nucleus.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-73',
    type: 'mcq',
    question: 'The nuclear envelope contains numerous small openings that regulate the transport of RNA and proteins between the nucleus and cytoplasm, called:',
    options: [
      'Lenticels',
      'Stomata',
      'Nuclear pores',
      'Plasmodesmata exclusively'
    ],
    correctIndex: 2,
    explanation: 'Nuclear pores are specialised openings in the nuclear envelope that regulate the movement of RNA and protein molecules between the nucleus and the cytoplasm.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-74',
    type: 'mcq',
    question: 'The dense, spherical, non-membrane-bound structure found within the nucleus, serving as the site of ribosomal RNA (rRNA) synthesis and ribosome assembly, is called the:',
    options: [
      'Nuclear envelope',
      'Nucleoid',
      'Chromatin',
      'Nucleolus'
    ],
    correctIndex: 3,
    explanation: 'The nucleolus, a dense structure within the nucleus (notably lacking its own surrounding membrane), is the primary site of rRNA synthesis and ribosome assembly.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-75',
    type: 'mcq',
    question: 'The loosely coiled, thread-like network of DNA and associated proteins found within the interphase nucleus is called:',
    options: [
      'Nucleoplasm exclusively',
      'Chromatin',
      'The nucleolus',
      'Chromosomes (in their fully condensed form)'
    ],
    correctIndex: 1,
    explanation: 'Chromatin refers to the loosely coiled, thread-like arrangement of DNA and its associated proteins (like histones) found within the nucleus during interphase.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-76',
    type: 'mcq',
    question: 'During cell division, the chromatin material condenses into more compact, visible structures called:',
    options: [
      'Nucleoids',
      'Nuclear pores',
      'Nucleoli',
      'Chromosomes'
    ],
    correctIndex: 3,
    explanation: 'During cell division, the loosely arranged chromatin condenses into distinct, compact structures known as chromosomes.',
    difficulty: 'easy'
  },
  {
    id: 'cell-the-unit-of-life-77',
    type: 'mcq',
    question: 'The constricted region of a chromosome, bearing disc-shaped structures called kinetochores that serve as the site of spindle fibre attachment, is called the:',
    options: [
      'Centromere',
      'Nucleolus',
      'Nuclear pore',
      'Telomere'
    ],
    correctIndex: 0,
    explanation: 'The centromere is the constricted region of a chromosome, bearing kinetochores where spindle fibres attach during cell division.',
    difficulty: 'medium'
  },
  {
    id: 'cell-the-unit-of-life-78',
    type: 'mcq',
    question: 'A chromosome in which the centromere is located exactly in the middle, resulting in two equal arms, is classified as:',
    options: [
      'Acrocentric',
      'Telocentric',
      'Metacentric',
      'Sub-metacentric'
    ],
    correctIndex: 2,
    explanation: 'A metacentric chromosome has its centromere positioned in the middle, giving rise to two arms of roughly equal length.',
    difficulty: 'medium'
  },
];

export default questions;
