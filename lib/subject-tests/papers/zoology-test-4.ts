import type { TestPaper } from "../types";

/**
 * NEET UG Zoology (Class 11 + 12 combined) - Test 4, 45 MCQs (NEET Zoology section pattern).
 * Register it in ../index.ts. Scoring: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "zoology-test-4",
  title: "Zoology (Class 11 + 12) - Test 4",
  durationMinutes: 45,
  questions: [
    // ================= CLASS 11 =================
    // ---------- Animal Kingdom ----------
    {
      id: "q1",
      question: "Lampreys and hagfishes (class Cyclostomata) are",
      options: [
        "jawed bony fishes",
        "jawless vertebrates with a circular sucking mouth",
        "amphibians",
        "cartilaginous fishes with placoid scales",
      ],
      correctIndex: 1,
      explanation: "Cyclostomes are jawless vertebrates with a circular mouth and suckers, and many are ectoparasites on fishes. (A) Bony fishes have jaws and a bony skeleton. (C) Amphibians are tetrapods. (D) Cartilaginous fishes have jaws and placoid scales.",
      difficulty: "easy",
    },
    {
      id: "q2",
      question: "The animal commonly called the 'devil fish' is",
      options: ["Sepia", "Loligo", "Pinctada", "Octopus"],
      correctIndex: 3,
      explanation: "Octopus, a mollusc with eight arms, is known as the devil fish. (A) Sepia is the cuttlefish. (B) Loligo is the squid. (C) Pinctada is the pearl oyster.",
      difficulty: "easy",
    },
    {
      id: "q3",
      question: "Which of the following is a flightless bird?",
      options: ["Struthio", "Corvus", "Columba", "Neophron"],
      correctIndex: 0,
      explanation: "Struthio (the ostrich) is a flightless bird. (B) Corvus (crow), (C) Columba (pigeon) and (D) Neophron (vulture) are all able to fly.",
      difficulty: "easy",
    },

    // ---------- Structural Organisation in Animals ----------
    {
      id: "q4",
      question: "Cuboidal epithelium with a brush border (microvilli) lines the",
      options: [
        "bronchioles",
        "fallopian tubes",
        "proximal convoluted tubule of the nephron",
        "stomach",
      ],
      correctIndex: 2,
      explanation: "The PCT is lined by a brush-bordered cuboidal epithelium, which increases the area for reabsorption. (A) and (B) The bronchioles and the fallopian tubes are lined by ciliated columnar epithelium. (D) The stomach is lined by simple columnar epithelium.",
      difficulty: "medium",
    },
    {
      id: "q5",
      question: "The matrix of bone is rich in",
      options: [
        "chondroitin salts",
        "calcium salts and collagen fibres",
        "elastin only",
        "mucin",
      ],
      correctIndex: 1,
      explanation: "Bone has a hard matrix that is rich in calcium salts and collagen fibres, which gives it strength. (A) The matrix of cartilage is rich in chondroitin salts. (C) Elastin is found in elastic tissues. (D) Mucin is a component of mucus.",
      difficulty: "easy",
    },
    {
      id: "q6",
      question: "In the earthworm, nitrogenous waste is removed by",
      options: ["nephridia", "Malpighian tubules", "green glands", "flame cells"],
      correctIndex: 0,
      explanation: "Earthworms have septal, pharyngeal and integumentary nephridia that remove nitrogenous waste. (B) Malpighian tubules are the excretory organs of insects. (C) Green glands are found in crustaceans. (D) Flame cells are found in flatworms.",
      difficulty: "easy",
    },

    // ---------- Biomolecules ----------
    {
      id: "q7",
      question: "A right-handed α-helix of a protein has about how many amino acid residues per turn?",
      options: ["2.5", "5", "10", "3.6"],
      correctIndex: 3,
      explanation: "The α-helix has 3.6 amino acid residues per turn, held by hydrogen bonds. (A), (B) and (C) are not the correct pitch of the helix.",
      difficulty: "medium",
    },

    // ---------- Digestion & Absorption ----------
    {
      id: "q8",
      question: "The largest salivary glands in humans are the",
      options: ["sublingual glands", "submandibular glands", "parotid glands", "buccal glands"],
      correctIndex: 2,
      explanation: "The parotid glands, one on each side below the ear, are the largest salivary glands. (A) The sublingual glands lie under the tongue and are the smallest of the three pairs. (B) The submandibular glands are of intermediate size. (D) Buccal glands are small mucous glands in the cheek.",
      difficulty: "medium",
    },
    {
      id: "q9",
      question: "The hardest substance in the body, which covers the crown of a tooth, is",
      options: ["enamel", "dentine", "cementum", "pulp"],
      correctIndex: 0,
      explanation: "Enamel is the hardest substance in the body, since it is made of calcium phosphate crystals. (B) Dentine lies below the enamel and is softer. (C) Cementum covers the root. (D) Pulp is the soft tissue with nerves and blood vessels.",
      difficulty: "easy",
    },
    {
      id: "q10",
      question: "The gastro-intestinal hormone GIP (gastric inhibitory peptide)",
      options: [
        "stimulates the secretion of HCl",
        "inhibits gastric secretion and motility",
        "stimulates the release of bile",
        "stimulates the secretion of pancreatic enzymes",
      ],
      correctIndex: 1,
      explanation: "GIP inhibits gastric secretion and motility. (A) Gastrin stimulates HCl secretion. (C) Cholecystokinin stimulates the release of bile. (D) CCK also stimulates the pancreatic enzymes.",
      difficulty: "medium",
    },

    // ---------- Breathing & Exchange of Gases ----------
    {
      id: "q11",
      question: "Normal expiration is",
      options: [
        "an active process needing ATP in the diaphragm",
        "brought about by the contraction of the external intercostal muscles",
        "due to an increase in the volume of the thoracic cavity",
        "mostly a passive process, due to relaxation of the diaphragm and intercostal muscles",
      ],
      correctIndex: 3,
      explanation: "During normal expiration, the diaphragm and the external intercostal muscles relax, the thoracic volume falls and the air is pushed out, so it is mostly passive. (A) and (B) describe inspiration. (C) An increase in volume causes inspiration, not expiration.",
      difficulty: "medium",
    },
    {
      id: "q12",
      question: "The cartilaginous flap that prevents food from entering the glottis during swallowing is the",
      options: ["uvula", "larynx", "epiglottis", "pharynx"],
      correctIndex: 2,
      explanation: "The epiglottis covers the glottis during swallowing and so prevents food from entering the windpipe. (A) The uvula is the soft tissue hanging from the soft palate. (B) The larynx is the voice box. (D) The pharynx is the common passage for food and air.",
      difficulty: "easy",
    },
    {
      id: "q13",
      question: "The pleural fluid present between the two layers of the pleura",
      options: [
        "reduces friction on the lung surface",
        "stores oxygen",
        "is the site of gas exchange",
        "produces surfactant",
      ],
      correctIndex: 0,
      explanation: "The pleural fluid lubricates the surface of the lungs and reduces the friction as they move in the thoracic cavity. (B) Oxygen is carried by haemoglobin. (C) Gas exchange occurs in the alveoli. (D) Surfactant is produced by cells of the alveoli.",
      difficulty: "medium",
    },

    // ---------- Body Fluids & Circulation ----------
    {
      id: "q14",
      question: "The most abundant white blood cells in human blood are",
      options: ["lymphocytes", "neutrophils", "eosinophils", "basophils"],
      correctIndex: 1,
      explanation: "Neutrophils make up about 60–65% of the total WBCs. (A) Lymphocytes make up about 20–25%. (C) Eosinophils make up about 2–3%. (D) Basophils are the least abundant, at about 0.5–1%.",
      difficulty: "easy",
    },
    {
      id: "q15",
      question: "A person with blood group B has",
      options: [
        "anti-B antibodies in the plasma",
        "no antibodies in the plasma",
        "anti-A antibodies in the plasma",
        "both anti-A and anti-B antibodies in the plasma",
      ],
      correctIndex: 2,
      explanation: "A person of group B has the B antigen on the RBCs, and the plasma contains antibodies against the A antigen (anti-A). (A) Anti-B would destroy the person's own cells. (B) Group AB has no antibodies. (D) Group O has both anti-A and anti-B.",
      difficulty: "easy",
    },
    {
      id: "q16",
      question: "Narrowing of the lumen of the coronary arteries by deposits of fat, cholesterol and calcium is called",
      options: ["angina", "arrhythmia", "heart failure", "atherosclerosis"],
      correctIndex: 3,
      explanation: "Atherosclerosis is the deposition of calcium, fat, cholesterol and fibrous tissue that narrows the arteries. (A) Angina is chest pain that occurs when the heart muscle gets insufficient oxygen. (B) Arrhythmia is an abnormal heart rhythm. (C) Heart failure is the state in which the heart cannot pump enough blood.",
      difficulty: "medium",
    },

    // ---------- Excretory Products & Their Elimination ----------
    {
      id: "q17",
      question: "Blood enters the glomerulus through the",
      options: ["afferent arteriole", "efferent arteriole", "renal vein", "vasa recta"],
      correctIndex: 0,
      explanation: "The afferent arteriole brings blood into the glomerulus. (B) The efferent arteriole carries blood away from the glomerulus and forms the peritubular capillaries. (C) The renal vein carries blood out of the kidney. (D) The vasa recta runs parallel to the loop of Henle.",
      difficulty: "easy",
    },
    {
      id: "q18",
      question: "The notch on the inner concave surface of the kidney, through which the ureter, blood vessels and nerves pass, is the",
      options: ["renal cortex", "renal pyramid", "hilum", "calyx"],
      correctIndex: 2,
      explanation: "The hilum is the notch through which the ureter, the blood vessels and the nerves enter or leave the kidney. (A) The cortex is the outer region. (B) The renal pyramids are cone-shaped masses in the medulla. (D) The calyces are funnel-shaped extensions of the renal pelvis.",
      difficulty: "medium",
    },
    {
      id: "q19",
      question: "The dialysing fluid used in haemodialysis has the same composition as plasma except that it has no",
      options: ["glucose", "nitrogenous wastes", "Na⁺", "water"],
      correctIndex: 1,
      explanation: "The dialysing fluid lacks nitrogenous wastes, so urea and other wastes diffuse out of the patient's blood into it. (A), (C) and (D) are present in the same concentration as in plasma so that useful substances are not lost.",
      difficulty: "medium",
    },

    // ---------- Locomotion & Movement ----------
    {
      id: "q20",
      question: "The number of carpal bones in each human wrist is",
      options: ["5", "7", "14", "8"],
      correctIndex: 3,
      explanation: "There are 8 carpal bones in each wrist. (A) 5 is the number of metacarpals. (B) 7 is the number of tarsals in the ankle. (C) 14 is the number of phalanges in the hand.",
      difficulty: "medium",
    },
    {
      id: "q21",
      type: "assertion-reason",
      question: "Assertion (A): During muscle contraction, the I-band becomes narrower.\nReason (R): The thin filaments slide over the thick filaments and pull the Z lines closer together.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "In the sliding filament mechanism, the thin filaments slide inwards over the thick filaments, and the Z lines are pulled closer, so the I-bands get shorter while the A-band stays the same. R explains A. (B) is wrong because R is the mechanism. (C) and (D) call a true statement false.",
      difficulty: "medium",
    },

    // ---------- Neural Control & Coordination ----------
    {
      id: "q22",
      type: "assertion-reason",
      question: "Assertion (A): The neurons found in the retina of the eye are bipolar.\nReason (R): A bipolar neuron has one axon and one dendrite.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 1,
      explanation: "The retina has bipolar neurons, so A is true, and a bipolar neuron has one axon and one dendrite, so R is true. But R only defines the term and does not explain why the neurons of the retina are of this type.",
      difficulty: "medium",
    },
    {
      id: "q23",
      type: "assertion-reason",
      question: "Assertion (A): The myelin sheath speeds up the conduction of nerve impulses.\nReason (R): The myelin sheath around peripheral nerve fibres is formed by astrocytes.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 2,
      explanation: "Myelinated fibres conduct impulses faster, because the impulse jumps between the nodes of Ranvier, so A is true. R is false, because the myelin sheath of peripheral nerves is formed by Schwann cells, not by astrocytes.",
      difficulty: "medium",
    },
    {
      id: "q24",
      question: "The innermost meningeal layer, which is in contact with the brain tissue, is the",
      options: ["dura mater", "arachnoid", "periosteum", "pia mater"],
      correctIndex: 3,
      explanation: "The pia mater is the thin innermost meninx that closely covers the brain. (A) The dura mater is the outermost layer. (B) The arachnoid is the middle layer. (C) The periosteum is the covering of bone and not a meninx.",
      difficulty: "medium",
    },

    // ---------- Chemical Coordination & Integration ----------
    {
      id: "q25",
      question: "Erythropoietin, which stimulates the formation of RBCs, is secreted by the",
      options: [
        "juxtaglomerular cells of the kidney",
        "liver",
        "spleen",
        "adrenal cortex",
      ],
      correctIndex: 0,
      explanation: "The juxtaglomerular cells of the kidney secrete erythropoietin, which stimulates erythropoiesis. (B) The liver secretes bile and plasma proteins. (C) The spleen destroys old RBCs. (D) The adrenal cortex secretes corticoids.",
      difficulty: "medium",
    },
    {
      id: "q26",
      question: "Prolactin regulates the",
      options: [
        "growth of bones",
        "basal metabolic rate",
        "growth of the mammary glands and formation of milk",
        "contraction of the uterus",
      ],
      correctIndex: 2,
      explanation: "Prolactin regulates the growth of the mammary glands and the formation of milk in them. (A) Bone growth is regulated by growth hormone. (B) Basal metabolic rate is regulated by thyroid hormones. (D) Uterine contraction is stimulated by oxytocin.",
      difficulty: "easy",
    },
    {
      id: "q27",
      question: "Cortisol stimulates",
      options: ["glycogenesis", "gluconeogenesis", "lipogenesis", "glycolysis only"],
      correctIndex: 1,
      explanation: "Cortisol stimulates gluconeogenesis, the formation of glucose from non-carbohydrate sources such as amino acids and fats. (A) Glycogenesis is promoted by insulin. (C) Lipogenesis is not the main action of cortisol. (D) Cortisol does not only stimulate glycolysis.",
      difficulty: "medium",
    },

    // ================= CLASS 12 =================
    // ---------- Human Reproduction ----------
    {
      id: "q28",
      question: "Each human testis is divided into about how many testicular lobules?",
      options: ["25", "100", "500", "250"],
      correctIndex: 3,
      explanation: "Each testis has about 250 compartments called testicular lobules, and each lobule has one to three seminiferous tubules. (A), (B) and (C) are not the correct number.",
      difficulty: "medium",
    },
    {
      id: "q29",
      question: "The permanent cessation of the menstrual cycle at about 50 years of age is called",
      options: ["menopause", "menarche", "amenorrhoea", "puberty"],
      correctIndex: 0,
      explanation: "Menopause is the permanent stopping of the menstrual cycle in women at about 50 years of age. (B) Menarche is the first menstruation at puberty. (C) Amenorrhoea is the absence of menstruation, as during pregnancy. (D) Puberty is the stage at which sexual maturity is attained.",
      difficulty: "easy",
    },
    {
      id: "q30",
      question: "The release of sperm from the Sertoli cells into the lumen of the seminiferous tubules is called",
      options: ["spermiogenesis", "spermiation", "spermatogenesis", "capacitation"],
      correctIndex: 1,
      explanation: "Spermiation is the process by which sperm heads are freed from the Sertoli cells and released into the lumen. (A) Spermiogenesis is the transformation of spermatids into sperm. (C) Spermatogenesis is the whole process of sperm formation. (D) Capacitation is the acquisition of the ability to fertilise in the female tract.",
      difficulty: "medium",
    },
    {
      id: "q31",
      question: "An embryo with 8 to 16 blastomeres is called a",
      options: ["blastula", "gastrula", "morula", "zygote"],
      correctIndex: 2,
      explanation: "The embryo with 8 to 16 blastomeres is the morula. (A) The blastula (blastocyst) is formed later, with a cavity. (B) The gastrula has the germ layers. (D) The zygote is a single cell.",
      difficulty: "easy",
    },
    {
      id: "q32",
      question: "The first sign of a growing foetus that a doctor can hear through a stethoscope, after about one month of pregnancy, is the",
      options: [
        "movement of the limbs",
        "growth of hair",
        "separation of the eyelids",
        "heartbeat",
      ],
      correctIndex: 3,
      explanation: "After about one month of pregnancy, the embryo's heart is formed, and the heart sound can be heard as the first signs. (A) Limb movements are felt later, in the fifth month. (B) Hair appears later in pregnancy. (C) The eyelids separate near the end of the second trimester.",
      difficulty: "medium",
    },

    // ---------- Reproductive Health ----------
    {
      id: "q33",
      question: "Which of the following contraceptive devices also gives protection against sexually transmitted infections?",
      options: ["Condom", "IUD", "Oral pill", "Copper-T"],
      correctIndex: 0,
      explanation: "A condom is a barrier that prevents contact with body fluids, so it also protects against STIs including HIV. (B) IUDs, (C) oral pills and (D) Copper-T prevent pregnancy but do not protect against infections.",
      difficulty: "easy",
    },
    {
      id: "q34",
      question: "In GIFT (gamete intra-fallopian transfer), the transfer is of",
      options: [
        "a zygote into the uterus",
        "an ovum collected from a donor into the fallopian tube",
        "a sperm into the ovum",
        "an embryo into the cervix",
      ],
      correctIndex: 1,
      explanation: "GIFT transfers an ovum from a donor into the fallopian tube of a female who cannot produce ova but can provide the right environment for fertilisation. (A) Transfer of a zygote is ZIFT or IUT. (C) Sperm injection is ICSI. (D) The cervix is not a site of embryo transfer.",
      difficulty: "medium",
    },
    {
      id: "q35",
      question: "Amniocentesis is used to detect",
      options: [
        "the age of the foetus only",
        "pregnancy",
        "genetic abnormalities and metabolic disorders in the foetus",
        "the heart rate of the foetus",
      ],
      correctIndex: 2,
      explanation: "In amniocentesis, the foetal cells in the amniotic fluid are tested for chromosomal abnormalities and genetic disorders, and it is misused for sex determination, so that part is banned. (A), (B) and (D) are not its purpose.",
      difficulty: "medium",
    },

    // ---------- Evolution ----------
    {
      id: "q36",
      question: "Lamarck's theory of evolution is based on",
      options: [
        "natural selection",
        "mutation",
        "genetic drift",
        "the use and disuse of organs",
      ],
      correctIndex: 3,
      explanation: "Lamarck proposed that organs used more are strengthened and those not used degenerate, and that the acquired characters are inherited, with the giraffe's neck as his example. (A) Natural selection is Darwin's theory. (B) Mutation was proposed by de Vries as a source of variation. (C) Genetic drift is a chance process described later.",
      difficulty: "easy",
    },
    {
      id: "q37",
      question: "Which of the following was the first human-like hominid?",
      options: ["Homo habilis", "Homo erectus", "Neanderthal man", "Australopithecus"],
      correctIndex: 0,
      explanation: "Homo habilis, with a brain capacity of 650–800 cc, was the first human-like being. (B) Homo erectus came after it. (C) Neanderthals appeared much later. (D) Australopithecus was an earlier ape-like hominid.",
      difficulty: "medium",
    },
    {
      id: "q38",
      question: "The loss of genetic variation when a small group of individuals separates from a population to found a new one is called the",
      options: ["bottleneck effect", "founder effect", "gene flow", "natural selection"],
      correctIndex: 1,
      explanation: "The founder effect occurs when a few individuals start a new population, and it carries only part of the original variation. (A) The bottleneck effect is a sharp reduction of an existing population by a catastrophe. (C) Gene flow is the movement of alleles between populations. (D) Natural selection is differential survival.",
      difficulty: "medium",
    },

    // ---------- Human Health & Disease ----------
    {
      id: "q39",
      question: "Dengue fever is transmitted by",
      options: ["Culex", "Anopheles", "Aedes", "the tsetse fly"],
      correctIndex: 2,
      explanation: "Dengue is a viral disease spread by Aedes mosquitoes. (A) Culex transmits filariasis. (B) Anopheles transmits malaria. (D) The tsetse fly transmits sleeping sickness.",
      difficulty: "easy",
    },
    {
      id: "q40",
      type: "assertion-reason",
      question: "Assertion (A): Normal cells divide unrestrictedly in a culture dish.\nReason (R): Normal cells show contact inhibition.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 3,
      explanation: "A is false, because normal cells stop dividing when they touch the neighbouring cells, so they do not divide unrestrictedly. R is true, since contact inhibition is the property that cancer cells lose, and it is why cancer cells keep dividing and form a mass.",
      difficulty: "medium",
    },
    {
      id: "q41",
      question: "Graft rejection is a function of",
      options: [
        "cell-mediated immunity",
        "humoral immunity only",
        "innate immunity only",
        "passive immunity",
      ],
      correctIndex: 0,
      explanation: "A transplanted tissue is rejected through the T-cells, which carry out cell-mediated immunity. (B) Humoral immunity is mediated by antibodies. (C) Innate immunity is non-specific. (D) Passive immunity is obtained from ready-made antibodies.",
      difficulty: "medium",
    },
    {
      id: "q42",
      question: "Excessive consumption of alcohol over a long period mainly damages the",
      options: ["kidney", "spleen", "liver", "pancreas"],
      correctIndex: 2,
      explanation: "Chronic alcohol intake damages the liver and leads to cirrhosis. (A), (B) and (D) are not the main target of the damage.",
      difficulty: "easy",
    },

    // ---------- Strategies for Enhancement in Food Production ----------
    {
      id: "q43",
      question: "Which of the following is an exotic breed of cattle?",
      options: ["Sahiwal", "Jersey", "Red Sindhi", "Gir"],
      correctIndex: 1,
      explanation: "Jersey is an exotic breed with a high milk yield. (A) Sahiwal, (C) Red Sindhi and (D) Gir are Indian (indigenous) breeds of Bos indicus.",
      difficulty: "easy",
    },

    // ---------- Biotechnology & Its Applications ----------
    {
      id: "q44",
      question: "'Rosie', the first transgenic cow, produced milk enriched with human",
      options: ["α-lactalbumin", "insulin", "growth hormone", "β-globin"],
      correctIndex: 0,
      explanation: "Rosie produced human α-lactalbumin-enriched milk (about 2.4 g per litre), which is a more balanced product for babies than cow milk. (B), (C) and (D) were not the product in Rosie's milk.",
      difficulty: "medium",
    },
    {
      id: "q45",
      question: "Early detection of HIV in suspected AIDS patients is routinely done by",
      options: ["ELISA only", "the Widal test", "an agglutination test", "PCR"],
      correctIndex: 3,
      explanation: "PCR amplifies the nucleic acid of the virus, so very low amounts can be detected early. (A) ELISA is used mainly to detect antibodies. (B) The Widal test detects typhoid. (C) An agglutination test is not used for early HIV detection.",
      difficulty: "medium",
    },
  ],
};

export default paper;