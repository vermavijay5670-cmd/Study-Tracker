import type { TestPaper } from "../types";

/**
 * NEET UG Zoology (Class 11 + 12 combined) - Test 1, 45 MCQs (NEET Zoology section pattern).
 * Register it in ../index.ts. Scoring: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "zoology-test-1",
  title: "Zoology (Class 11 + 12) - Test 1",
  durationMinutes: 45,
  questions: [
    // ================= CLASS 11 =================
    // ---------- Animal Kingdom ----------
    {
      id: "q1",
      question: "Animals in which the body cavity is not lined by mesoderm on all sides (a pseudocoelom) belong to",
      options: ["Platyhelminthes", "Aschelminthes", "Annelida", "Arthropoda"],
      correctIndex: 1,
      explanation: "Aschelminthes (roundworms) have a pseudocoelom, in which the mesoderm is present only as scattered pouches between the ectoderm and endoderm. (A) Platyhelminthes are acoelomate. (C) Annelida have a true coelom lined by mesoderm. (D) Arthropoda have a haemocoel (a blood-filled body cavity), not a pseudocoelom.",
      difficulty: "medium",
    },
    {
      id: "q2",
      question: "Book lungs are the respiratory organs of",
      options: ["prawn", "cockroach", "Locusta", "scorpion"],
      correctIndex: 3,
      explanation: "Scorpions breathe through book lungs, which are folded plate-like structures. (A) Prawns breathe through gills. (B) Cockroach and (C) Locusta breathe through the tracheal system.",
      difficulty: "medium",
    },
    {
      id: "q3",
      question: "The rasping organ in molluscs is the",
      options: ["radula", "osphradium", "mantle", "ctenidium"],
      correctIndex: 0,
      explanation: "The radula is a file-like rasping organ with transverse rows of teeth that scrapes food. (B) The osphradium is a sensory organ that tests the water. (C) The mantle secretes the shell. (D) The ctenidium is the gill.",
      difficulty: "easy",
    },

    // ---------- Structural Organisation in Animals ----------
    {
      id: "q4",
      question: "The fat-storing connective tissue found beneath the skin is",
      options: ["areolar tissue", "cartilage", "adipose tissue", "bone"],
      correctIndex: 2,
      explanation: "Adipose tissue is a loose connective tissue with cells that store fat, and it is found mainly beneath the skin. (A) Areolar tissue is a loose packing tissue between organs. (B) Cartilage has a firm, flexible matrix. (D) Bone has a hard matrix with calcium salts.",
      difficulty: "easy",
    },
    {
      id: "q5",
      question: "The typhlosole of the earthworm intestine increases the",
      options: [
        "length of the oesophagus",
        "effective absorptive area of the intestine",
        "capacity to store food",
        "grinding of soil particles",
      ],
      correctIndex: 1,
      explanation: "The typhlosole is a median fold of the intestinal wall that increases the effective area for absorption. (A) The oesophagus is a separate part of the gut. (C) Food is stored in the crop. (D) The gizzard grinds the food.",
      difficulty: "medium",
    },
    {
      id: "q6",
      question: "In water, the eyes of a frog are protected by",
      options: ["a nictitating membrane", "eyelashes", "scales", "a hard lid"],
      correctIndex: 0,
      explanation: "The transparent nictitating membrane covers the eye of the frog and protects it when it is in water. (B), (C) and (D) are not present in the frog's eye.",
      difficulty: "easy",
    },

    // ---------- Biomolecules ----------
    {
      id: "q7",
      question: "The most abundant protein in the animal world is",
      options: ["haemoglobin", "insulin", "trypsin", "collagen"],
      correctIndex: 3,
      explanation: "Collagen is the most abundant protein in the animal world, and it forms the fibres of connective tissue. (A) Haemoglobin carries oxygen. (B) Insulin is a hormone. (C) Trypsin is a digestive enzyme. RuBisCO, not collagen, is the most abundant protein in the whole biosphere.",
      difficulty: "easy",
    },

    // ---------- Digestion & Absorption ----------
    {
      id: "q8",
      question: "The total number of teeth in an adult human is",
      options: ["20", "28", "32", "36"],
      correctIndex: 2,
      explanation: "The adult dental formula is 2123/2123, which gives 32 permanent teeth. (A) 20 is the number of milk (deciduous) teeth. (B) and (D) are not the number of teeth in a normal adult set.",
      difficulty: "easy",
    },
    {
      id: "q9",
      question: "Secretin acts on the",
      options: [
        "gastric glands, to stimulate HCl secretion",
        "gall bladder, to release bile",
        "pancreas, to release water and bicarbonate ions",
        "salivary glands, to release saliva",
      ],
      correctIndex: 2,
      explanation: "Secretin from the duodenum stimulates the pancreas to secrete water and bicarbonate. (A) Gastrin stimulates the gastric glands. (B) Cholecystokinin stimulates the gall bladder. (D) Salivary secretion is controlled by the nervous system.",
      difficulty: "medium",
    },
    {
      id: "q10",
      question: "Fructose is absorbed in the intestine by",
      options: [
        "active transport",
        "facilitated transport",
        "simple diffusion only",
        "pinocytosis",
      ],
      correctIndex: 1,
      explanation: "Fructose moves with the help of carrier proteins down its concentration gradient, which is facilitated transport. (A) Glucose and amino acids are absorbed by active transport with Na⁺. (C) Some small molecules cross by simple diffusion, but fructose needs carriers. (D) Pinocytosis is not the route for sugars.",
      difficulty: "medium",
    },

    // ---------- Breathing & Exchange of Gases ----------
    {
      id: "q11",
      question: "The human right lung has",
      options: [
        "three lobes, and the left lung has two",
        "two lobes, and the left lung has three",
        "two lobes, and so has the left lung",
        "three lobes, and so has the left lung",
      ],
      correctIndex: 0,
      explanation: "The right lung has three lobes and the left lung has two, since the heart takes up space on the left side. (B), (C) and (D) give wrong lobe counts.",
      difficulty: "easy",
    },
    {
      id: "q12",
      question: "Long exposure to silica dust in stone-breaking industries causes",
      options: ["asthma", "bronchitis", "pneumonia", "silicosis"],
      correctIndex: 3,
      explanation: "Silicosis is an occupational disorder in which silica dust causes fibrosis of the lungs and serious damage. (A) Asthma is an inflammation of the bronchi. (B) Bronchitis is an inflammation of the bronchi that is often caused by smoking or infection. (C) Pneumonia is an infection of the alveoli.",
      difficulty: "medium",
    },
    {
      id: "q13",
      question: "The pneumotaxic centre, which moderates the function of the respiratory rhythm centre, is located in the",
      options: ["medulla", "pons region of the brain", "cerebellum", "hypothalamus"],
      correctIndex: 1,
      explanation: "The pneumotaxic centre in the pons can reduce the duration of inspiration and so alter the respiratory rate. (A) The rhythm centre itself is in the medulla. (C) The cerebellum controls balance. (D) The hypothalamus regulates temperature, hunger and thirst.",
      difficulty: "medium",
    },

    // ---------- Body Fluids & Circulation ----------
    {
      id: "q14",
      question: "Erythroblastosis foetalis can occur when",
      options: [
        "an Rh⁺ mother carries an Rh⁻ foetus",
        "both mother and foetus are Rh⁺",
        "an Rh⁻ mother carries an Rh⁺ foetus (in a subsequent pregnancy)",
        "both mother and foetus are Rh⁻",
      ],
      correctIndex: 2,
      explanation: "An Rh⁻ mother can make anti-Rh antibodies after the delivery of an Rh⁺ child, and these antibodies cross the placenta in the next pregnancy with an Rh⁺ foetus and destroy its RBCs. (A) An Rh⁺ mother has the antigen, so she does not make the antibodies. (B) and (D) involve no Rh incompatibility.",
      difficulty: "medium",
    },
    {
      id: "q15",
      question: "The valve between the left atrium and the left ventricle is the",
      options: ["bicuspid (mitral) valve", "tricuspid valve", "semilunar valve", "Eustachian valve"],
      correctIndex: 0,
      explanation: "The bicuspid or mitral valve guards the opening between the left atrium and the left ventricle. (B) The tricuspid valve is on the right side. (C) Semilunar valves guard the aorta and pulmonary artery. (D) The Eustachian valve is at the entrance of the inferior vena cava in the foetal heart.",
      difficulty: "easy",
    },
    {
      id: "q16",
      question: "Cardiac output is equal to",
      options: [
        "heart rate divided by stroke volume",
        "heart rate plus stroke volume",
        "stroke volume only",
        "stroke volume multiplied by heart rate",
      ],
      correctIndex: 3,
      explanation: "Cardiac output is the volume of blood pumped by each ventricle per minute, which equals stroke volume × heart rate (about 70 mL × 72 per minute = 5 litres). (A), (B) and (C) are not the correct relation.",
      difficulty: "easy",
    },

    // ---------- Excretory Products & Their Elimination ----------
    {
      id: "q17",
      question: "Juxtamedullary nephrons, which have long loops of Henle, are mainly important for",
      options: [
        "absorption of glucose",
        "absorption of water in the PCT",
        "concentrating the urine",
        "formation of red blood cells",
      ],
      correctIndex: 2,
      explanation: "The long loops of Henle and the vasa recta of juxtamedullary nephrons maintain the medullary gradient that allows the formation of concentrated urine. (A) Glucose is reabsorbed in the PCT. (B) Water absorption in the PCT is common to all nephrons and does not depend on long loops. (D) RBCs are made in the bone marrow.",
      difficulty: "medium",
    },
    {
      id: "q18",
      question: "Atrial natriuretic factor (ANF) causes",
      options: [
        "vasoconstriction",
        "vasodilation and a fall in blood pressure",
        "an increase in renin secretion",
        "an increase in Na⁺ reabsorption",
      ],
      correctIndex: 1,
      explanation: "ANF is secreted by the atria when blood pressure rises, and it dilates the blood vessels and lowers blood pressure. (A) is the opposite effect. (C) and (D) are actions of the renin–angiotensin mechanism, which ANF opposes.",
      difficulty: "medium",
    },
    {
      id: "q19",
      type: "assertion-reason",
      question: "Assertion (A): The glomerular filtrate is almost free of proteins.\nReason (R): The filtration membrane, formed by the endothelium, basement membrane and podocyte slits, lets only small molecules pass.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "Large plasma proteins cannot pass through the three-layered filtration membrane, so the filtrate is practically protein-free, and R is the reason. (B) is wrong since R gives the mechanism. (C) and (D) call a true statement false.",
      difficulty: "medium",
    },

    // ---------- Locomotion & Movement ----------
    {
      id: "q20",
      question: "The number of cranial bones in the human skull is",
      options: ["6", "14", "12", "8"],
      correctIndex: 3,
      explanation: "The skull has 22 bones, of which 8 are cranial and 14 are facial. (A) 6 and (C) 12 are not the count of cranial bones. (B) 14 is the number of facial bones.",
      difficulty: "easy",
    },
    {
      id: "q21",
      type: "assertion-reason",
      question: "Assertion (A): Skeletal muscles are voluntary.\nReason (R): Smooth muscles are involuntary.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 1,
      explanation: "Skeletal muscles are under voluntary control, and smooth muscles are involuntary, so both statements are true. But the involuntary nature of smooth muscle does not explain why skeletal muscle is voluntary, since the two are independent facts.",
      difficulty: "easy",
    },

    // ---------- Neural Control & Coordination ----------
    {
      id: "q22",
      type: "assertion-reason",
      question: "Assertion (A): The corpus callosum connects the two cerebral hemispheres.\nReason (R): The corpus callosum is made up mainly of grey matter.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 2,
      explanation: "The corpus callosum is a thick band of nerve fibres that joins the two cerebral hemispheres, so A is true. R is false, because it is made up of myelinated nerve fibres, which form white matter, not grey matter.",
      difficulty: "medium",
    },
    {
      id: "q23",
      question: "Neural signals from the sympathetic division of the autonomic nervous system",
      options: [
        "increase the heart rate",
        "decrease the heart rate",
        "cause constriction of the pupil",
        "stimulate digestion",
      ],
      correctIndex: 0,
      explanation: "The sympathetic system prepares the body for stress, so it increases the heart rate, dilates the pupil and slows digestion. (B), (C) and (D) are effects of the parasympathetic system.",
      difficulty: "easy",
    },
    {
      id: "q24",
      type: "assertion-reason",
      question: "Assertion (A): The membrane of a resting neuron is more permeable to Na⁺ than to K⁺.\nReason (R): More K⁺ channels than Na⁺ channels are open at rest.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 3,
      explanation: "A is false, because at rest the membrane is far more permeable to K⁺ than to Na⁺. R is true, as more K⁺ channels are open, which keeps the outside positive and the inside negative.",
      difficulty: "hard",
    },

    // ---------- Chemical Coordination & Integration ----------
    {
      id: "q25",
      question: "The pineal gland secretes",
      options: ["thymosin", "melatonin", "thyroxine", "prolactin"],
      correctIndex: 1,
      explanation: "The pineal gland secretes melatonin, which regulates the sleep–wake cycle and body temperature. (A) Thymosin is secreted by the thymus. (C) Thyroxine is secreted by the thyroid. (D) Prolactin is secreted by the anterior pituitary.",
      difficulty: "easy",
    },
    {
      id: "q26",
      question: "Thymosins play a major role in the",
      options: [
        "differentiation of T-lymphocytes",
        "regulation of calcium homeostasis",
        "regulation of the sleep cycle",
        "control of glucose metabolism",
      ],
      correctIndex: 0,
      explanation: "Thymosins from the thymus promote the differentiation of T-lymphocytes, which provide cell-mediated immunity. (B) Calcium is regulated by calcitonin and PTH. (C) Sleep is regulated by melatonin. (D) Glucose is regulated by insulin and glucagon.",
      difficulty: "medium",
    },
    {
      id: "q27",
      question: "Progesterone is secreted mainly by the",
      options: [
        "ovarian follicles",
        "Leydig cells",
        "corpus luteum",
        "adrenal medulla",
      ],
      correctIndex: 2,
      explanation: "The corpus luteum, which forms from the ruptured follicle after ovulation, secretes large amounts of progesterone. (A) Ovarian follicles mainly secrete oestrogen. (B) Leydig cells secrete androgens. (D) The adrenal medulla secretes adrenaline.",
      difficulty: "easy",
    },

    // ================= CLASS 12 =================
    // ---------- Human Reproduction ----------
    {
      id: "q28",
      question: "The Sertoli cells of the testis",
      options: [
        "secrete testosterone",
        "form the sperm",
        "store the sperm",
        "provide nutrition to the developing germ cells",
      ],
      correctIndex: 3,
      explanation: "Sertoli cells in the seminiferous tubules nourish and support the developing germ cells. (A) Testosterone is secreted by the Leydig cells. (B) The spermatogonia form sperm. (C) Sperm are stored in the epididymis.",
      difficulty: "medium",
    },
    {
      id: "q29",
      question: "The seminal vesicles secrete",
      options: [
        "mucus for lubrication",
        "an acidic fluid",
        "a fructose-rich fluid that provides energy to the sperm",
        "testosterone",
      ],
      correctIndex: 2,
      explanation: "The secretion of the seminal vesicles is rich in fructose, which supplies energy to the sperm, along with prostaglandins and other substances. (A) The bulbourethral glands secrete a lubricating mucus. (B) The seminal fluid is slightly alkaline. (D) Testosterone is made by the Leydig cells.",
      difficulty: "medium",
    },
    {
      id: "q30",
      question: "At ovulation, the human ovum is arrested at which stage of meiosis?",
      options: ["Prophase I", "Metaphase II", "Anaphase I", "Telophase II"],
      correctIndex: 1,
      explanation: "The secondary oocyte released at ovulation is arrested at metaphase II and completes meiosis II only if a sperm enters. (A) The primary oocyte is arrested at prophase I from before birth. (C) and (D) are not arrest points in human oogenesis.",
      difficulty: "medium",
    },
    {
      id: "q31",
      question: "Ovulation is induced by a rapid surge in the secretion of",
      options: ["LH", "FSH", "progesterone", "prolactin"],
      correctIndex: 0,
      explanation: "A mid-cycle surge of LH (the LH peak) induces the rupture of the Graafian follicle and the release of the ovum. (B) FSH stimulates follicular growth. (C) Progesterone is secreted after ovulation. (D) Prolactin stimulates milk production.",
      difficulty: "easy",
    },
    {
      id: "q32",
      question: "Implantation in the uterus takes place when the",
      options: [
        "zygote attaches to the endometrium",
        "morula attaches to the endometrium",
        "gastrula attaches to the endometrium",
        "blastocyst embeds in the endometrium",
      ],
      correctIndex: 3,
      explanation: "The trophoblast cells of the blastocyst attach to the endometrium and the blastocyst becomes embedded, which is implantation. (A) The zygote is still in the fallopian tube. (B) The morula is the stage before the blastocyst. (C) The gastrula forms after implantation.",
      difficulty: "medium",
    },

    // ---------- Reproductive Health ----------
    {
      id: "q33",
      question: "Copper-releasing IUDs act mainly by",
      options: [
        "preventing ovulation",
        "suppressing sperm motility and the fertilising capacity of sperm",
        "blocking the fallopian tubes",
        "increasing the secretion of cervical mucus",
      ],
      correctIndex: 1,
      explanation: "Cu²⁺ ions released by the IUD suppress sperm motility and the fertilising capacity of sperm. (A) Preventing ovulation is the action of hormonal pills. (C) Blocking the tubes is done by tubectomy. (D) Increased cervical mucus is not the main mechanism.",
      difficulty: "medium",
    },
    {
      id: "q34",
      question: "In ZIFT, the zygote or early embryo (up to eight blastomeres) is transferred into the",
      options: ["uterus", "cervix", "fallopian tube", "vagina"],
      correctIndex: 2,
      explanation: "In zygote intra-fallopian transfer, the zygote or early embryo with up to eight blastomeres is placed in the fallopian tube. (A) Embryos with more than eight blastomeres are transferred to the uterus by IUT. (B) and (D) are not sites of transfer.",
      difficulty: "medium",
    },
    {
      id: "q35",
      question: "Which of the following is NOT a sexually transmitted infection?",
      options: ["Malaria", "Syphilis", "Genital herpes", "Gonorrhoea"],
      correctIndex: 0,
      explanation: "Malaria is a vector-borne disease transmitted by the female Anopheles mosquito. (B) Syphilis, (C) genital herpes and (D) gonorrhoea are all sexually transmitted infections.",
      difficulty: "easy",
    },

    // ---------- Evolution ----------
    {
      id: "q36",
      question: "In Miller's experiment, the mixture of gases used to simulate the primitive atmosphere was",
      options: [
        "O₂, CO₂, N₂ and H₂O",
        "CH₄, NH₃, H₂ and water vapour",
        "CO, O₂ and H₂S",
        "N₂, O₂ and CH₄",
      ],
      correctIndex: 1,
      explanation: "Miller used CH₄, NH₃, H₂ and water vapour at about 800 °C with electric discharge, and he obtained amino acids. (A), (C) and (D) contain free oxygen, which was not present in the early reducing atmosphere.",
      difficulty: "medium",
    },
    {
      id: "q37",
      question: "The wings of a butterfly and the wings of a bird are examples of",
      options: [
        "homologous organs",
        "divergent evolution",
        "vestigial organs",
        "analogous organs showing convergent evolution",
      ],
      correctIndex: 3,
      explanation: "The two wings have the same function but a different structure and origin, so they are analogous, which shows convergent evolution. (A) and (B) Homologous organs share an origin but may differ in function, as in the forelimbs of vertebrates. (C) Vestigial organs are reduced and functionless.",
      difficulty: "easy",
    },
    {
      id: "q38",
      question: "In the Hardy–Weinberg equation p² + 2pq + q² = 1, the term 2pq represents the frequency of",
      options: [
        "the homozygous dominant genotype",
        "the homozygous recessive genotype",
        "the heterozygous genotype",
        "the recessive allele",
      ],
      correctIndex: 2,
      explanation: "2pq is the frequency of heterozygotes. (A) p² is the homozygous dominant frequency. (B) q² is the homozygous recessive frequency. (D) The recessive allele frequency is q.",
      difficulty: "medium",
    },

    // ---------- Human Health & Disease ----------
    {
      id: "q39",
      question: "The toxin responsible for the cyclic chill and high fever in malaria is",
      options: ["haemozoin", "endotoxin", "aflatoxin", "tetrodotoxin"],
      correctIndex: 0,
      explanation: "When the RBCs rupture and release the parasites, the toxin haemozoin is released and it causes the characteristic chill and fever. (B) Endotoxins are bacterial toxins. (C) Aflatoxin is produced by Aspergillus. (D) Tetrodotoxin is a puffer-fish toxin.",
      difficulty: "medium",
    },
    {
      id: "q40",
      question: "The Widal test is used for the diagnosis of",
      options: ["malaria", "typhoid", "AIDS", "cancer"],
      correctIndex: 1,
      explanation: "The Widal test detects antibodies against Salmonella typhi, the cause of typhoid. (A) Malaria is diagnosed by blood smears showing the parasite. (C) AIDS is diagnosed by ELISA. (D) Cancer is diagnosed by biopsy and imaging.",
      difficulty: "easy",
    },
    {
      id: "q41",
      question: "The antibodies that are found mainly in colostrum are",
      options: ["IgE", "IgM", "IgD", "IgA"],
      correctIndex: 3,
      explanation: "Colostrum, the first milk, is rich in IgA, which gives passive immunity to the infant. (A) IgE is involved in allergic reactions. (B) IgM is the first antibody produced in an infection. (C) IgD is found on the surface of B cells.",
      difficulty: "medium",
    },
    {
      id: "q42",
      question: "A cancer of the connective tissue is called",
      options: ["carcinoma", "leukaemia", "sarcoma", "lymphoma"],
      correctIndex: 2,
      explanation: "Sarcomas arise in connective tissues such as bone and muscle. (A) Carcinomas arise in epithelial tissue. (B) Leukaemia is a cancer of the white blood cells. (D) Lymphoma is a cancer of the lymphoid tissue.",
      difficulty: "easy",
    },

    // ---------- Strategies for Enhancement in Food Production ----------
    {
      id: "q43",
      question: "The honeybee species commonly reared for honey production in India is",
      options: ["Apis indica", "Bombyx mori", "Musca domestica", "Anopheles"],
      correctIndex: 0,
      explanation: "Apis indica is the common Indian honeybee that is reared in apiculture. (B) Bombyx mori is the silkworm. (C) Musca domestica is the housefly. (D) Anopheles is the malaria mosquito.",
      difficulty: "easy",
    },

    // ---------- Biotechnology & Its Applications ----------
    {
      id: "q44",
      question: "The first clinical gene therapy (1990) was given to treat",
      options: ["cystic fibrosis", "adenosine deaminase (ADA) deficiency", "haemophilia", "sickle-cell anaemia"],
      correctIndex: 1,
      explanation: "In 1990 a four-year-old girl with ADA deficiency received the first gene therapy, in which lymphocytes carrying a functional ADA gene were introduced. (A), (C) and (D) were not the first diseases treated by gene therapy.",
      difficulty: "medium",
    },
    {
      id: "q45",
      question: "Golden rice is rich in",
      options: ["vitamin C", "iron", "vitamin B₁₂", "β-carotene (provitamin A)"],
      correctIndex: 3,
      explanation: "Golden rice is a transgenic rice variety that makes β-carotene, which is converted to vitamin A in the body. (A) Vitamin C, (B) iron and (C) vitamin B₁₂ are not the target of this modification.",
      difficulty: "easy",
    },
  ],
};

export default paper;