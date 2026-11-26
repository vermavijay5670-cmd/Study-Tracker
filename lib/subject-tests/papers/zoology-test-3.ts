import type { TestPaper } from "../types";

/**
 * NEET UG Zoology (Class 11 + 12 combined) - Test 3, 45 MCQs (NEET Zoology section pattern).
 * Register it in ../index.ts. Scoring: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "zoology-test-3",
  title: "Zoology (Class 11 + 12) - Test 3",
  durationMinutes: 45,
  questions: [
    // ================= CLASS 11 =================
    // ---------- Animal Kingdom ----------
    {
      id: "q1",
      question: "Flame cells are the osmoregulatory and excretory structures of",
      options: ["Annelida", "Aschelminthes", "Platyhelminthes", "Arthropoda"],
      correctIndex: 2,
      explanation: "Flatworms (Platyhelminthes) have flame cells, which help in osmoregulation and excretion. (A) Annelids excrete through nephridia. (B) Aschelminthes have an excretory tube. (D) Arthropods excrete through Malpighian tubules or green glands.",
      difficulty: "easy",
    },
    {
      id: "q2",
      question: "Echinoderm larvae and adults differ in symmetry in that the",
      options: [
        "larvae are bilaterally symmetrical and the adults are radially symmetrical",
        "larvae are radially symmetrical and the adults are bilaterally symmetrical",
        "larvae and adults are both asymmetrical",
        "larvae and adults are both radially symmetrical",
      ],
      correctIndex: 0,
      explanation: "Echinoderm larvae are bilaterally symmetrical, and the adults become radially symmetrical. (B) reverses this. (C) and (D) do not match the facts.",
      difficulty: "medium",
    },
    {
      id: "q3",
      question: "Balanoglossus belongs to the phylum",
      options: ["Annelida", "Hemichordata", "Cephalochordata", "Urochordata"],
      correctIndex: 1,
      explanation: "Balanoglossus is a worm-like marine animal with a proboscis, collar and trunk, and it is placed in Hemichordata. (A) Annelids have segmented bodies. (C) Cephalochordata is represented by Branchiostoma. (D) Urochordates include Herdmania and Ascidia.",
      difficulty: "medium",
    },

    // ---------- Structural Organisation in Animals ----------
    {
      id: "q4",
      question: "The egg capsule of a cockroach, which usually contains 14–16 eggs, is called the",
      options: ["cocoon", "spermatophore", "puparium", "ootheca"],
      correctIndex: 3,
      explanation: "A female cockroach lays its fertilised eggs in a hard capsule called the ootheca. (A) A cocoon is the protective case of earthworm eggs. (B) A spermatophore is a packet of sperm. (C) A puparium is the case of a fly pupa.",
      difficulty: "easy",
    },
    {
      id: "q5",
      question: "The fibres of loose (areolar) connective tissue are secreted by",
      options: ["macrophages", "mast cells", "fibroblasts", "adipocytes"],
      correctIndex: 2,
      explanation: "Fibroblasts are the cells of connective tissue that secrete collagen and elastic fibres. (A) Macrophages engulf foreign matter. (B) Mast cells secrete histamine and heparin. (D) Adipocytes store fat.",
      difficulty: "medium",
    },
    {
      id: "q6",
      question: "In the frog, the alimentary canal, urinary ducts and genital ducts all open into a common chamber, the",
      options: ["cloaca", "rectum", "urinary bladder", "oesophagus"],
      correctIndex: 0,
      explanation: "The cloaca is the common chamber that opens to the exterior and receives the digestive, urinary and genital ducts. (B) The rectum is only part of the gut. (C) The bladder stores urine. (D) The oesophagus is the tube from the pharynx to the stomach.",
      difficulty: "easy",
    },

    // ---------- Biomolecules ----------
    {
      id: "q7",
      question: "Palmitic acid, a saturated fatty acid, has how many carbon atoms (including the carboxyl carbon)?",
      options: ["12", "16", "18", "20"],
      correctIndex: 1,
      explanation: "Palmitic acid is a 16-carbon saturated fatty acid. (A) 12 is the length of lauric acid. (C) 18 is the length of stearic acid. (D) 20 is the length of arachidonic acid.",
      difficulty: "medium",
    },

    // ---------- Digestion & Absorption ----------
    {
      id: "q8",
      question: "The vermiform appendix is attached to the",
      options: ["ileum", "duodenum", "rectum", "caecum"],
      correctIndex: 3,
      explanation: "The caecum is a small blind sac at the start of the large intestine, and the vermiform appendix arises from it. (A) The ileum is the last part of the small intestine. (B) The duodenum is the first part of the small intestine. (C) The rectum is the last part of the large intestine.",
      difficulty: "easy",
    },
    {
      id: "q9",
      question: "Lactose is digested into glucose and galactose by",
      options: ["maltase", "sucrase", "lactase", "amylase"],
      correctIndex: 2,
      explanation: "Lactase, a brush-border enzyme, breaks lactose into glucose and galactose. (A) Maltase acts on maltose. (B) Sucrase acts on sucrose. (D) Amylase digests starch.",
      difficulty: "easy",
    },
    {
      id: "q10",
      question: "Chylomicrons are",
      options: [
        "micelles of bile salts",
        "small protein-coated lipid droplets formed in the intestinal mucosa that enter the lacteals",
        "fat-digesting enzymes",
        "fat-soluble vitamins",
      ],
      correctIndex: 1,
      explanation: "Fatty acids and glycerol absorbed in the mucosa are re-formed into triglycerides, coated with protein, and released as chylomicrons that pass into the lymph vessels (lacteals). (A) Bile salt micelles carry fatty acids to the cell surface for absorption. (C) Lipases are the enzymes. (D) Vitamins A, D, E and K are fat-soluble and are carried with fats.",
      difficulty: "medium",
    },

    // ---------- Breathing & Exchange of Gases ----------
    {
      id: "q11",
      type: "assertion-reason",
      question: "Assertion (A): About 97% of the oxygen in the blood is transported bound to haemoglobin in the RBCs.\nReason (R): Haemoglobin has a high affinity for oxygen.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "Most O₂ is carried as oxyhaemoglobin, and the high affinity of haemoglobin for O₂ in the lungs is why it is the main carrier. Only about 3% dissolves in plasma. R explains A. (B) is wrong because R is the reason. (C) and (D) call a true statement false.",
      difficulty: "medium",
    },
    {
      id: "q12",
      question: "The chemosensitive area of the medulla is highly sensitive to",
      options: ["O₂ only", "N₂", "glucose", "CO₂ and hydrogen ions"],
      correctIndex: 3,
      explanation: "An increase in CO₂ and H⁺ activates this area, which signals the rhythm centre to make adjustments to eliminate the excess CO₂. (A) Oxygen has only a minor effect. (B) N₂ is not sensed. (C) Glucose is not a respiratory stimulus.",
      difficulty: "medium",
    },
    {
      id: "q13",
      question: "In a healthy adult, the tidal volume is approximately",
      options: ["100 mL", "250 mL", "500 mL", "1200 mL"],
      correctIndex: 2,
      explanation: "Tidal volume, the air moved in or out in one normal breath, is about 500 mL. (A) and (B) are too small. (D) About 1100–1200 mL is the residual volume.",
      difficulty: "easy",
    },

    // ---------- Body Fluids & Circulation ----------
    {
      id: "q14",
      question: "Which of the following acts as an anticoagulant?",
      options: ["heparin", "thrombin", "fibrinogen", "thromboplastin"],
      correctIndex: 0,
      explanation: "Heparin, released by mast cells, prevents blood from clotting inside vessels. (B) Thrombin converts fibrinogen to fibrin. (C) Fibrinogen is the precursor of fibrin. (D) Thromboplastin initiates clotting.",
      difficulty: "easy",
    },
    {
      id: "q15",
      type: "assertion-reason",
      question: "Assertion (A): Veins have valves.\nReason (R): Arteries carry blood away from the heart.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 1,
      explanation: "Veins have valves that stop backflow, so A is true. Arteries carry blood away from the heart, so R is true. But what arteries do has no bearing on why veins have valves, which is to ensure one-way flow under low pressure.",
      difficulty: "easy",
    },
    {
      id: "q16",
      question: "The duration of one cardiac cycle in a healthy human is about",
      options: ["0.1 s", "0.3 s", "0.4 s", "0.8 s"],
      correctIndex: 3,
      explanation: "With about 72 beats per minute, each cardiac cycle lasts about 0.8 seconds. (A) 0.1 s is the duration of atrial systole. (B) 0.3 s is the duration of ventricular systole. (C) 0.4 s is the duration of the joint diastole.",
      difficulty: "medium",
    },

    // ---------- Excretory Products & Their Elimination ----------
    {
      id: "q17",
      question: "In humans, urea is synthesised in the",
      options: ["kidney", "spleen", "liver", "pancreas"],
      correctIndex: 2,
      explanation: "Urea is made in the liver by the ornithine cycle from ammonia, and the kidney then removes it from the blood. (A) The kidney excretes urea but does not make it. (B) and (D) are not sites of urea synthesis.",
      difficulty: "medium",
    },
    {
      id: "q18",
      question: "The osmolarity of the medullary interstitial fluid of the kidney increases from the cortex to the inner medulla up to about",
      options: ["300 mOsm/L", "1200 mOsm/L", "600 mOsm/L", "100 mOsm/L"],
      correctIndex: 1,
      explanation: "The osmolarity rises from about 300 mOsm/L in the cortex to about 1200 mOsm/L in the inner medulla, which allows the formation of concentrated urine. (A) 300 mOsm/L is the cortical value. (C) and (D) are not the maximal value.",
      difficulty: "hard",
    },
    {
      id: "q19",
      question: "A normal adult human excretes on average about",
      options: [
        "1–1.5 litres of urine per day",
        "10 litres of urine per day",
        "300 mL of urine per day",
        "5 litres of urine per day",
      ],
      correctIndex: 0,
      explanation: "An average adult excretes about 1–1.5 litres of urine in a day, containing about 25–30 g of urea. (B) and (D) would indicate diuresis. (C) 300 mL is too little and would suggest dehydration or kidney failure.",
      difficulty: "easy",
    },

    // ---------- Locomotion & Movement ----------
    {
      id: "q20",
      question: "At the neuromuscular junction, acetylcholine is released from the",
      options: [
        "sarcolemma",
        "sarcoplasmic reticulum",
        "Z line",
        "axon terminal of the motor neuron",
      ],
      correctIndex: 3,
      explanation: "The neurotransmitter acetylcholine is released from the axon terminal of the motor neuron and acts on the motor end plate of the muscle fibre. (A) The sarcolemma carries the receptors for it. (B) The sarcoplasmic reticulum stores Ca²⁺. (C) The Z line is a sarcomere boundary.",
      difficulty: "medium",
    },
    {
      id: "q21",
      type: "assertion-reason",
      question: "Assertion (A): Macrophages show amoeboid movement.\nReason (R): Amoeboid movement is brought about by cilia.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 2,
      explanation: "Macrophages and leucocytes show amoeboid movement, so A is true. R is false, because amoeboid movement is produced by pseudopodia formed by the streaming of protoplasm with the help of microfilaments, while cilia cause ciliary movement.",
      difficulty: "medium",
    },

    // ---------- Neural Control & Coordination ----------
    {
      id: "q22",
      question: "The major coordinating centre for sensory and motor signalling in the brain is the",
      options: ["thalamus", "pons", "cerebellum", "medulla"],
      correctIndex: 0,
      explanation: "The thalamus is the major coordinating centre for sensory and motor signalling. (B) The pons connects different regions of the brain. (C) The cerebellum controls balance and coordination of movement. (D) The medulla controls vital reflexes such as breathing and heart rate.",
      difficulty: "medium",
    },
    {
      id: "q23",
      question: "In a reflex arc, the correct sequence of events is",
      options: [
        "receptor → motor neuron → sensory neuron → effector",
        "receptor → afferent neuron → CNS → efferent neuron → effector",
        "effector → CNS → receptor",
        "CNS → receptor → effector",
      ],
      correctIndex: 1,
      explanation: "A reflex arc starts with a receptor, the afferent (sensory) neuron carries the signal to the CNS, and the efferent (motor) neuron carries the response to the effector. (A) puts the neurons in the wrong order. (C) and (D) leave out the neurons or reverse the direction.",
      difficulty: "easy",
    },
    {
      id: "q24",
      question: "The Eustachian tube connects the middle ear cavity with the",
      options: ["cochlea", "external auditory canal", "inner ear", "pharynx"],
      correctIndex: 3,
      explanation: "The Eustachian tube connects the middle ear with the pharynx and equalises the air pressure on the two sides of the eardrum. (A) and (C) The cochlea is part of the inner ear and is not connected by it. (B) The external auditory canal is separated from the middle ear by the tympanic membrane.",
      difficulty: "easy",
    },

    // ---------- Chemical Coordination & Integration ----------
    {
      id: "q25",
      question: "Hypothalamic hormones reach the anterior pituitary through the",
      options: [
        "nerve fibres",
        "lymphatic system",
        "hypophyseal portal system",
        "cerebrospinal fluid",
      ],
      correctIndex: 2,
      explanation: "The hypothalamic hormones travel through a portal circulation, the hypophyseal portal system, to the anterior pituitary (adenohypophysis). (A) Nerve fibres carry the hormones to the posterior pituitary instead. (B) and (D) are not the route.",
      difficulty: "medium",
    },
    {
      id: "q26",
      question: "Enlargement of the thyroid gland because of iodine deficiency is called",
      options: ["Graves' disease", "simple goitre", "acromegaly", "tetany"],
      correctIndex: 1,
      explanation: "Without iodine, the thyroid cannot make enough thyroid hormone, and the gland enlarges, which is simple goitre. (A) Graves' disease is hyperthyroidism. (C) Acromegaly is excess growth hormone in adults. (D) Tetany is a rapid spasm of muscles due to low Ca²⁺.",
      difficulty: "easy",
    },
    {
      id: "q27",
      question: "Which of the following is a second messenger in hormone action?",
      options: ["cAMP", "ATP", "NADH", "cortisol"],
      correctIndex: 0,
      explanation: "Cyclic AMP is a second messenger, along with IP₃ and Ca²⁺, produced inside the cell when a hormone binds to its membrane receptor. (B) ATP is the energy currency. (C) NADH is a coenzyme. (D) Cortisol is a hormone, a first messenger.",
      difficulty: "medium",
    },

    // ================= CLASS 12 =================
    // ---------- Human Reproduction ----------
    {
      id: "q28",
      question: "The testes lie outside the abdominal cavity in the scrotum because spermatogenesis requires",
      options: [
        "a higher temperature than that of the body",
        "a very low oxygen level",
        "a high pH",
        "a temperature 2–2.5 °C lower than normal body temperature",
      ],
      correctIndex: 3,
      explanation: "The scrotum keeps the testes about 2–2.5 °C below the normal body temperature, which is necessary for the process of spermatogenesis. (A), (B) and (C) are not the requirement for sperm formation.",
      difficulty: "easy",
    },
    {
      id: "q29",
      question: "The middle piece of a sperm contains numerous",
      options: ["lysosomes", "mitochondria", "ribosomes", "Golgi bodies"],
      correctIndex: 1,
      explanation: "The middle piece is packed with mitochondria, which supply the energy for the movement of the tail. (A) Lysosome-like enzymes are in the acrosome of the head. (C) and (D) are not the characteristic organelles of the middle piece.",
      difficulty: "easy",
    },
    {
      id: "q30",
      question: "Fertilisation normally occurs in the",
      options: [
        "uterus",
        "infundibulum",
        "ampullary–isthmic junction of the fallopian tube",
        "cervix",
      ],
      correctIndex: 2,
      explanation: "Fertilisation takes place in the ampullary–isthmic junction of the fallopian tube. (A) Implantation, not fertilisation, takes place in the uterus. (B) The infundibulum collects the ovum after ovulation. (D) The cervix is the lower end of the uterus.",
      difficulty: "medium",
    },
    {
      id: "q31",
      question: "The milk-secreting cells of the mammary gland are present in the",
      options: ["alveoli", "lactiferous ducts", "mammary ampulla", "nipple"],
      correctIndex: 0,
      explanation: "The cells of the alveoli secrete milk, which is stored in the cavities (lumens) of the alveoli. (B) and (C) The lactiferous ducts and the ampullae carry and store the milk. (D) The nipple is the outlet.",
      difficulty: "medium",
    },
    {
      id: "q32",
      question: "The hormone that causes strong uterine contractions during parturition is",
      options: ["progesterone", "hCG", "relaxin", "oxytocin"],
      correctIndex: 3,
      explanation: "Oxytocin stimulates stronger uterine contractions, which in turn stimulate further release of oxytocin in a positive feedback loop, and this helps in the delivery of the baby. (A) Progesterone maintains the pregnancy. (B) hCG maintains the corpus luteum in early pregnancy. (C) Relaxin softens the pelvic ligaments.",
      difficulty: "medium",
    },

    // ---------- Reproductive Health ----------
    {
      id: "q33",
      question: "In ICSI (intracytoplasmic sperm injection), a sperm is",
      options: [
        "placed near the ovum",
        "injected into the uterus",
        "directly injected into the ovum",
        "mixed with the ovum in the fallopian tube",
      ],
      correctIndex: 2,
      explanation: "In ICSI, a single sperm is injected directly into the cytoplasm of the ovum in the laboratory. (A) and (D) describe ordinary IVF or natural conditions. (B) Injection into the uterus is IUI, a different procedure.",
      difficulty: "medium",
    },
    {
      id: "q34",
      question: "Oral contraceptive pills prevent pregnancy mainly by",
      options: [
        "killing the sperm",
        "inhibiting ovulation and implantation and altering the quality of cervical mucus",
        "blocking the vas deferens",
        "releasing Cu²⁺ ions",
      ],
      correctIndex: 1,
      explanation: "The progestogen–oestrogen combination inhibits ovulation and implantation and alters the cervical mucus, which retards the entry of sperm. (A) Pills do not kill sperm. (C) Blocking the vas deferens is vasectomy. (D) Releasing Cu²⁺ is the action of Copper-T.",
      difficulty: "medium",
    },
    {
      id: "q35",
      question: "The abbreviation RCH, used for a national programme, stands for",
      options: [
        "Reproductive and Child Health Care",
        "Rural Community Health",
        "Research in Child Hygiene",
        "Reproductive Cycle Hormones",
      ],
      correctIndex: 0,
      explanation: "The Reproductive and Child Health Care programme is a national effort that creates awareness of reproduction-related aspects and provides facilities for them. (B), (C) and (D) are not the expansion of RCH.",
      difficulty: "easy",
    },

    // ---------- Evolution ----------
    {
      id: "q36",
      type: "assertion-reason",
      question: "Assertion (A): Haeckel's biogenetic law, that ontogeny recapitulates phylogeny, is accepted in its original form.\nReason (R): Karl Ernst von Baer showed that embryos do not pass through the adult stages of other animals.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 3,
      explanation: "A is false, because von Baer's observation that embryos do not pass through adult stages of other animals led to the rejection of Haeckel's law in its original form. R is true, since the embryos show only similarities in early stages.",
      difficulty: "hard",
    },
    {
      id: "q37",
      question: "Industrial melanism in the peppered moth (Biston betularia) is an example of",
      options: [
        "genetic drift",
        "the founder effect",
        "natural selection",
        "mutation pressure only",
      ],
      correctIndex: 2,
      explanation: "After industrialisation, dark moths survived better on soot-darkened tree trunks, since birds saw the light moths more easily, so the dark form increased by natural selection. (A) and (B) are chance events. (D) Mutation alone does not account for the shift in frequencies.",
      difficulty: "medium",
    },
    {
      id: "q38",
      question: "The first non-cellular forms of life are believed to have originated about",
      options: [
        "3 billion years ago",
        "4.5 billion years ago",
        "500 million years ago",
        "100 million years ago",
      ],
      correctIndex: 0,
      explanation: "The first non-cellular forms of life are thought to have appeared about 3 billion years ago. (B) 4.5 billion years ago is the age of the Earth. (C) and (D) are far too recent for the origin of life.",
      difficulty: "medium",
    },

    // ---------- Human Health & Disease ----------
    {
      id: "q39",
      question: "The common cold is caused by",
      options: ["Salmonella", "rhinoviruses", "Plasmodium", "Wuchereria"],
      correctIndex: 1,
      explanation: "Rhinoviruses infect the nose and respiratory passage and cause the common cold. (A) Salmonella causes typhoid. (C) Plasmodium causes malaria. (D) Wuchereria causes filariasis.",
      difficulty: "easy",
    },
    {
      id: "q40",
      question: "T-lymphocytes mature in the",
      options: ["bone marrow", "spleen", "thymus", "lymph nodes"],
      correctIndex: 2,
      explanation: "T-lymphocytes originate in the bone marrow but mature in the thymus. (A) B-lymphocytes mature in the bone marrow. (B) and (D) The spleen and lymph nodes are secondary lymphoid organs where the lymphocytes interact with antigens.",
      difficulty: "easy",
    },
    {
      id: "q41",
      question: "Genetically engineered hepatitis B vaccines are produced in",
      options: ["Rhizobium", "Bacillus", "Aspergillus", "yeast"],
      correctIndex: 3,
      explanation: "The recombinant hepatitis B vaccine is made by expressing the gene for the viral surface antigen in yeast. (A), (B) and (C) are not the hosts used for this vaccine.",
      difficulty: "medium",
    },
    {
      id: "q42",
      question: "Cocaine interferes with the transport of the neurotransmitter",
      options: ["dopamine", "acetylcholine", "GABA", "serotonin only"],
      correctIndex: 0,
      explanation: "Cocaine blocks the transport of dopamine, so the neurotransmitter accumulates in the synapse and causes euphoria and excessive stimulation. (B), (C) and (D) are not the principal neurotransmitter affected.",
      difficulty: "medium",
    },

    // ---------- Strategies for Enhancement in Food Production ----------
    {
      id: "q43",
      question: "Which of the following is a freshwater fish used in aquaculture?",
      options: ["Hilsa", "Catla", "Pomfret", "Mackerel"],
      correctIndex: 1,
      explanation: "Catla, along with rohu and common carp, is a freshwater fish raised in aquaculture. (A) Hilsa, (C) pomfret and (D) mackerel are marine fishes.",
      difficulty: "easy",
    },

    // ---------- Biotechnology & Its Applications ----------
    {
      id: "q44",
      question: "During the maturation of proinsulin into functional insulin, which peptide is removed?",
      options: ["A peptide", "B peptide", "both A and B peptides", "C peptide"],
      correctIndex: 3,
      explanation: "Proinsulin contains the A, B and C peptides, and the C peptide is removed so that the A and B chains remain, held together by disulphide bonds. (A), (B) and (C) are the chains that form mature insulin.",
      difficulty: "medium",
    },
    {
      id: "q45",
      question: "The Indian body that decides the validity of GM research and the safety of introducing GM organisms for public services is",
      options: ["CSIR", "ICMR", "GEAC", "BARC"],
      correctIndex: 2,
      explanation: "The Genetic Engineering Approval Committee (GEAC) decides on the safety of GM research and the introduction of GM organisms. (A) CSIR and (B) ICMR are research councils. (D) BARC is an atomic research centre.",
      difficulty: "medium",
    },
  ],
};

export default paper;