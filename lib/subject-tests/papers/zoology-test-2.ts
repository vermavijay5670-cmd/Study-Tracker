import type { TestPaper } from "../types";

/**
 * NEET UG Zoology (Class 11 + 12 combined) - Test 2, 45 MCQs (NEET Zoology section pattern).
 * Register it in ../index.ts. Scoring: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "zoology-test-2",
  title: "Zoology (Class 11 + 12) - Test 2",
  durationMinutes: 45,
  questions: [
    // ================= CLASS 11 =================
    // ---------- Animal Kingdom ----------
    {
      id: "q1",
      question: "Metagenesis (alternation of polyp and medusa forms in the life cycle) is shown by",
      options: ["Hydra", "Physalia", "Adamsia", "Obelia"],
      correctIndex: 3,
      explanation: "Obelia is a colonial hydroid whose life cycle alternates between polyps and medusae. (A) Hydra exists only as a polyp. (B) Physalia is a floating colonial siphonophore. (C) Adamsia (sea anemone) exists only as a polyp.",
      difficulty: "medium",
    },
    {
      id: "q2",
      question: "In urochordates, the notochord is present only in the",
      options: ["larval tail", "adult trunk", "head region", "adult tail"],
      correctIndex: 0,
      explanation: "In urochordates (tunicates) the notochord is found only in the tail of the larva. (B), (C) and (D) The adult has lost it, and the notochord is never in the head region.",
      difficulty: "medium",
    },
    {
      id: "q3",
      question: "Among reptiles, a four-chambered heart is found in",
      options: ["snakes", "lizards", "crocodiles", "turtles"],
      correctIndex: 2,
      explanation: "Crocodiles are the only reptiles with a four-chambered heart. (A) Snakes, (B) lizards and (D) turtles have a three-chambered heart with a partly divided ventricle.",
      difficulty: "medium",
    },

    // ---------- Structural Organisation in Animals ----------
    {
      id: "q4",
      question: "Male frogs have vocal sacs, which help in",
      options: [
        "breathing under water",
        "amplifying their croaking sound",
        "storing food",
        "excretion",
      ],
      correctIndex: 1,
      explanation: "Vocal sacs act as resonators that amplify the croak of male frogs. (A), (C) and (D) are not functions of vocal sacs.",
      difficulty: "easy",
    },
    {
      id: "q5",
      question: "In the cockroach, the hepatic caecae are present at the junction of the",
      options: [
        "midgut and hindgut",
        "crop and gizzard",
        "mouth and pharynx",
        "foregut and midgut",
      ],
      correctIndex: 3,
      explanation: "A ring of 6–8 blind tubules, the hepatic caecae, lies at the junction of the foregut and the midgut and secretes digestive juice. (A) The Malpighian tubules open at the junction of the midgut and the hindgut. (B) The crop and gizzard are both parts of the foregut. (C) Hepatic caecae are not found there.",
      difficulty: "medium",
    },
    {
      id: "q6",
      question: "Goblet cells of the alimentary canal are an example of",
      options: [
        "multicellular exocrine glands",
        "unicellular glands",
        "endocrine glands",
        "muscle cells",
      ],
      correctIndex: 1,
      explanation: "Goblet cells are single cells that secrete mucus, so they are unicellular glands. (A) Salivary glands are multicellular exocrine glands. (C) Endocrine glands are ductless glands that secrete hormones. (D) Goblet cells are epithelial cells, not muscle cells.",
      difficulty: "easy",
    },

    // ---------- Biomolecules ----------
    {
      id: "q7",
      question: "Which of the following is a non-reducing sugar?",
      options: ["sucrose", "glucose", "fructose", "maltose"],
      correctIndex: 0,
      explanation: "In sucrose the glycosidic bond links the reducing groups (anomeric carbons) of glucose and fructose, so it has no free aldehyde or ketone group and does not reduce. (B) Glucose, (C) fructose and (D) maltose have free reducing groups.",
      difficulty: "medium",
    },

    // ---------- Digestion & Absorption ----------
    {
      id: "q8",
      question: "The intrinsic factor secreted by the gastric glands is necessary for the absorption of",
      options: ["vitamin A", "vitamin C", "vitamin B₁₂", "vitamin D"],
      correctIndex: 2,
      explanation: "Intrinsic factor binds vitamin B₁₂ and makes its absorption possible, and its absence causes pernicious anaemia. (A) and (D) are fat-soluble vitamins absorbed with fats. (B) Vitamin C is absorbed without intrinsic factor.",
      difficulty: "medium",
    },
    {
      id: "q9",
      question: "The hepatic lobules of the liver are covered by a thin connective tissue sheath called",
      options: ["Brunner's capsule", "Bowman's capsule", "Peyer's patch", "Glisson's capsule"],
      correctIndex: 3,
      explanation: "Glisson's capsule is the connective tissue sheath that surrounds the hepatic lobules. (A) Brunner's glands are in the duodenum. (B) Bowman's capsule is part of the nephron. (C) Peyer's patches are lymphoid tissue in the ileum.",
      difficulty: "medium",
    },
    {
      id: "q10",
      type: "assertion-reason",
      question: "Assertion (A): Jaundice causes yellowing of the skin and eyes.\nReason (R): In jaundice, bilirubin accumulates in the body.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "In jaundice the liver is affected and bilirubin, a yellow bile pigment, accumulates, so the skin and eyes turn yellow. R explains A. (B) is wrong because R is the cause of the colour. (C) and (D) call a true statement false.",
      difficulty: "easy",
    },

    // ---------- Breathing & Exchange of Gases ----------
    {
      id: "q11",
      question: "The partial pressure of oxygen (pO₂) in alveolar air is about",
      options: ["40 mm Hg", "104 mm Hg", "159 mm Hg", "95 mm Hg"],
      correctIndex: 1,
      explanation: "The pO₂ of alveolar air is about 104 mm Hg. (A) 40 mm Hg is the value for deoxygenated blood and tissues. (C) 159 mm Hg is the value in atmospheric air. (D) 95 mm Hg is the value in oxygenated blood.",
      difficulty: "medium",
    },
    {
      id: "q12",
      question: "The functional residual capacity of the lungs is equal to",
      options: ["TV + ERV", "IRV + ERV", "ERV + RV", "TV + IRV"],
      correctIndex: 2,
      explanation: "Functional residual capacity is the volume that stays in the lungs after a normal expiration, which is ERV + RV. (A) TV + ERV is the expiratory capacity. (B) IRV + ERV is part of the vital capacity but not a named capacity. (D) TV + IRV is the inspiratory capacity.",
      difficulty: "medium",
    },
    {
      id: "q13",
      question: "Each haemoglobin molecule can carry a maximum of how many molecules of O₂?",
      options: ["1", "2", "8", "4"],
      correctIndex: 3,
      explanation: "Haemoglobin has four haem groups, and each binds one O₂ molecule, so it carries up to four. (A) and (B) understate this. (C) 8 would need eight haem groups.",
      difficulty: "easy",
    },

    // ---------- Body Fluids & Circulation ----------
    {
      id: "q14",
      type: "assertion-reason",
      question: "Assertion (A): The hepatic portal vein carries blood from the intestine to the liver.\nReason (R): The hepatic vein drains blood from the liver into the inferior vena cava.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 1,
      explanation: "The hepatic portal vein carries absorbed nutrients from the digestive tract to the liver, and the hepatic vein carries blood from the liver to the inferior vena cava, so both statements are true. But the drainage of the hepatic vein does not explain what the portal vein carries, since they are separate vessels.",
      difficulty: "medium",
    },
    {
      id: "q15",
      question: "Cardiac impulses are conducted from the atrioventricular node to the ventricles through the",
      options: [
        "bundle of His and Purkinje fibres",
        "sinoatrial node",
        "vagus nerve",
        "cardiac plexus",
      ],
      correctIndex: 0,
      explanation: "From the AV node the impulse passes into the bundle of His, which divides into right and left bundle branches and ends in the Purkinje fibres in the ventricular walls. (B) The SA node is where the impulse arises. (C) and (D) Nerves modify the rate but do not conduct the cardiac impulse.",
      difficulty: "medium",
    },
    {
      id: "q16",
      type: "assertion-reason",
      question: "Assertion (A): Lymph is a colourless fluid.\nReason (R): Lymph contains abundant red blood cells.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 2,
      explanation: "Lymph is a colourless fluid, so A is true. R is false, because lymph has no RBCs and only a few proteins, and it contains specialised lymphocytes. It is the lack of RBCs that makes it colourless.",
      difficulty: "medium",
    },

    // ---------- Excretory Products & Their Elimination ----------
    {
      id: "q17",
      question: "Aldosterone acts mainly on the",
      options: [
        "glomerulus",
        "proximal convoluted tubule",
        "descending limb of the loop of Henle",
        "distal convoluted tubule and collecting duct",
      ],
      correctIndex: 3,
      explanation: "Aldosterone increases the reabsorption of Na⁺ and water in the distal convoluted tubule and the collecting duct. (A) The glomerulus is the site of filtration. (B) The PCT does bulk reabsorption independent of aldosterone. (C) The descending limb is permeable to water and builds up the osmotic gradient.",
      difficulty: "medium",
    },
    {
      id: "q18",
      question: "The presence of glucose and ketone bodies in the urine is indicative of",
      options: [
        "diabetes mellitus",
        "diabetes insipidus",
        "kidney stones",
        "glomerulonephritis",
      ],
      correctIndex: 0,
      explanation: "In diabetes mellitus, insulin deficiency leads to high blood glucose, and glucose (glycosuria) and ketone bodies appear in the urine. (B) Diabetes insipidus gives dilute urine with no glucose. (C) Kidney stones are insoluble masses of crystallised salts. (D) Glomerulonephritis is an inflammation of the glomeruli, with proteins in the urine.",
      difficulty: "medium",
    },
    {
      id: "q19",
      question: "Which of the following is an excretory function of the skin?",
      options: [
        "Release of CO₂ only",
        "Removal of sterols, hydrocarbons and waxes by the sebaceous glands",
        "Removal of bile pigments",
        "Removal of urea only",
      ],
      correctIndex: 1,
      explanation: "Sebaceous glands eliminate sterols, hydrocarbons and waxes through sebum, and sweat glands remove NaCl, urea and lactic acid. (A) CO₂ is removed mainly by the lungs. (C) Bile pigments are eliminated by the liver. (D) Sweat contains more than urea.",
      difficulty: "medium",
    },

    // ---------- Locomotion & Movement ----------
    {
      id: "q20",
      question: "The immovable joints between the bones of the skull (sutures) are",
      options: ["synovial", "cartilaginous", "fibrous", "pivot"],
      correctIndex: 2,
      explanation: "In fibrous joints, the bones are held together by dense fibrous connective tissue, and the sutures of the skull are of this type. (A) Synovial joints are movable and have a fluid-filled cavity. (B) Cartilaginous joints, as between vertebrae, allow limited movement. (D) A pivot joint is a type of synovial joint.",
      difficulty: "easy",
    },
    {
      id: "q21",
      type: "assertion-reason",
      question: "Assertion (A): Osteoporosis is common in young males.\nReason (R): Deficiency of oestrogen contributes to osteoporosis in older women.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 3,
      explanation: "A is false, because osteoporosis is an age-related disorder, more common in older people and especially in older women. R is true, since decreased oestrogen after menopause contributes to loss of bone mass.",
      difficulty: "medium",
    },

    // ---------- Neural Control & Coordination ----------
    {
      id: "q22",
      question: "Electrical synapses differ from chemical synapses in that",
      options: [
        "a neurotransmitter is released into a wide synaptic cleft",
        "the membranes of the pre- and post-synaptic neurons are in close proximity and the current flows directly",
        "transmission is always slower",
        "a post-synaptic receptor binds a chemical messenger",
      ],
      correctIndex: 1,
      explanation: "At electrical synapses the membranes of the pre- and post-synaptic neurons are very close, so the electrical current flows directly and transmission is faster. (A), (C) and (D) describe chemical synapses.",
      difficulty: "medium",
    },
    {
      id: "q23",
      question: "The aqueous humour fills the space between the",
      options: [
        "cornea and the lens",
        "lens and the retina",
        "retina and the choroid",
        "sclera and the choroid",
      ],
      correctIndex: 0,
      explanation: "The thin watery aqueous humour lies in the space between the cornea and the lens. (B) The vitreous humour fills the space between the lens and the retina. (C) and (D) are not fluid-filled chambers of the eye.",
      difficulty: "easy",
    },
    {
      id: "q24",
      question: "The aldehyde of vitamin A, which combines with opsin to form rhodopsin, is",
      options: ["retinol", "carotene", "retinal", "cholecalciferol"],
      correctIndex: 2,
      explanation: "Retinal, the aldehyde of vitamin A, combines with opsin to make rhodopsin. (A) Retinol is vitamin A itself, the alcohol form. (B) Carotene is the precursor of vitamin A. (D) Cholecalciferol is vitamin D₃.",
      difficulty: "medium",
    },

    // ---------- Chemical Coordination & Integration ----------
    {
      id: "q25",
      question: "Hyposecretion of growth hormone in childhood causes",
      options: ["gigantism", "acromegaly", "cretinism", "pituitary dwarfism"],
      correctIndex: 3,
      explanation: "Deficiency of GH in children stunts growth, which gives pituitary dwarfism. (A) Gigantism is caused by excess GH in childhood. (B) Acromegaly is caused by excess GH in adults. (C) Cretinism is caused by a thyroid hormone deficiency.",
      difficulty: "easy",
    },
    {
      id: "q26",
      question: "Parathyroid hormone raises blood calcium by stimulating",
      options: [
        "bone resorption (demineralisation)",
        "bone formation",
        "glycogenolysis",
        "lipolysis",
      ],
      correctIndex: 0,
      explanation: "PTH acts on bones to stimulate the process of dissolution or resorption, and it also increases Ca²⁺ reabsorption in the kidney tubules. (B) Calcitonin favours bone deposition. (C) Glucagon stimulates glycogenolysis. (D) Adrenaline and glucagon stimulate lipolysis.",
      difficulty: "medium",
    },
    {
      id: "q27",
      question: "Insulin lowers blood glucose mainly by",
      options: [
        "stimulating glycogenolysis",
        "enhancing cellular glucose uptake and glycogenesis",
        "stimulating gluconeogenesis",
        "promoting the breakdown of fats",
      ],
      correctIndex: 1,
      explanation: "Insulin increases glucose uptake by the cells (hepatocytes and adipocytes) and promotes its conversion to glycogen. (A) and (C) are actions of glucagon, and they raise blood glucose. (D) Fat breakdown does not lower blood glucose.",
      difficulty: "easy",
    },

    // ================= CLASS 12 =================
    // ---------- Human Reproduction ----------
    {
      id: "q28",
      question: "FSH acts on the Sertoli cells of the testis to stimulate",
      options: [
        "the secretion of testosterone",
        "the release of GnRH",
        "the secretion of factors that help in spermiogenesis",
        "the formation of semen",
      ],
      correctIndex: 2,
      explanation: "FSH acts on the Sertoli cells, which secrete factors that help the spermatids to transform into sperm (spermiogenesis). (A) LH acts on the Leydig cells to secrete testosterone. (B) GnRH is released by the hypothalamus. (D) Semen is formed by the accessory glands.",
      difficulty: "hard",
    },
    {
      id: "q29",
      question: "At puberty, each human ovary contains about",
      options: ["400 follicles", "2000 follicles", "8 million follicles", "60,000–80,000 follicles"],
      correctIndex: 3,
      explanation: "Many follicles degenerate during the period from birth to puberty, so only about 60,000–80,000 primary follicles remain in each ovary at puberty. (A) About 400 ova are released during a woman's reproductive life, which is not the follicle count. (B) and (C) are not the correct numbers.",
      difficulty: "medium",
    },
    {
      id: "q30",
      question: "After entry of one sperm into the ovum, changes in the zona pellucida block the entry of additional sperm, which prevents",
      options: ["polyspermy", "parthenogenesis", "implantation", "ovulation"],
      correctIndex: 0,
      explanation: "The change in the zona pellucida stops other sperm from entering and prevents polyspermy, which would give an abnormal chromosome number. (B) Parthenogenesis is development without fertilisation. (C) Implantation happens later. (D) Ovulation happens before fertilisation.",
      difficulty: "medium",
    },
    {
      id: "q31",
      question: "Which of the following hormones is secreted only during pregnancy?",
      options: ["FSH", "hCG", "LH", "oestrogen"],
      correctIndex: 1,
      explanation: "hCG is secreted by the placenta, so it is produced only during pregnancy, and it forms the basis of pregnancy tests. (A) FSH, (C) LH and (D) oestrogen are present in non-pregnant women too.",
      difficulty: "easy",
    },
    {
      id: "q32",
      question: "The inner cell mass of the blastocyst differentiates into",
      options: [
        "the trophoblast",
        "the chorion",
        "the umbilical cord",
        "the embryo proper (the three germ layers)",
      ],
      correctIndex: 3,
      explanation: "The inner cell mass gives rise to the embryo proper, with its three germ layers. (A) The trophoblast is the outer layer. (B) The chorion develops from the trophoblast with extra-embryonic mesoderm. (C) The umbilical cord is formed later from extra-embryonic tissues.",
      difficulty: "medium",
    },

    // ---------- Reproductive Health ----------
    {
      id: "q33",
      question: "In the 'test tube baby' programme, fertilisation takes place",
      options: [
        "in the uterus",
        "in the fallopian tube",
        "outside the body, in the laboratory",
        "in the cervix",
      ],
      correctIndex: 2,
      explanation: "In IVF, the ovum and sperm are made to fuse in a laboratory under simulated conditions, and the embryo is then transferred. (A), (B) and (D) are sites of natural fertilisation or transfer, not of the laboratory fertilisation in this programme.",
      difficulty: "easy",
    },
    {
      id: "q34",
      question: "The lactational amenorrhoea method of contraception is effective only up to about",
      options: [
        "six months after parturition",
        "one year after parturition",
        "two years after parturition",
        "one month after parturition",
      ],
      correctIndex: 0,
      explanation: "During intense lactation, ovulation does not occur, but the method is reliable only up to about six months after parturition. (B), (C) and (D) give the wrong time limit.",
      difficulty: "medium",
    },
    {
      id: "q35",
      question: "The contraceptive 'Saheli', developed in India, is",
      options: [
        "a hormonal pill taken daily for 21 days",
        "a non-steroidal oral pill taken once a week",
        "a copper-releasing IUD",
        "a barrier method",
      ],
      correctIndex: 1,
      explanation: "Saheli is a non-steroidal oral contraceptive taken once a week, and it has few side effects. (A) describes the usual oral pill. (C) A copper-releasing IUD is Copper-T. (D) Barrier methods include condoms and diaphragms.",
      difficulty: "medium",
    },

    // ---------- Evolution ----------
    {
      id: "q36",
      question: "Darwin's finches on the Galápagos Islands are an example of",
      options: [
        "convergent evolution",
        "vestigial organs",
        "adaptive radiation",
        "co-evolution",
      ],
      correctIndex: 2,
      explanation: "Several species of finches with different beak types evolved from a common ancestor to occupy different niches, which is adaptive radiation. (A) Convergent evolution gives similar traits in unrelated species. (B) Vestigial organs are reduced remnants. (D) Co-evolution is reciprocal evolution between interacting species.",
      difficulty: "easy",
    },
    {
      id: "q37",
      question: "The cranial capacity of Homo erectus was about",
      options: ["900 cc", "650–800 cc", "1400 cc", "1500 cc"],
      correctIndex: 0,
      explanation: "Homo erectus had a cranial capacity of about 900 cc. (B) 650–800 cc is the capacity of Homo habilis. (C) 1400 cc is the capacity of Neanderthals. (D) 1500 cc is above the range of any of these species.",
      difficulty: "medium",
    },
    {
      id: "q38",
      question: "A change in the allele frequency of a small population by chance is called",
      options: ["gene flow", "natural selection", "mutation", "genetic drift"],
      correctIndex: 3,
      explanation: "Genetic drift is a random change in allele frequency, which is strongest in small populations. (A) Gene flow is the movement of alleles between populations. (B) Natural selection is the differential survival of individuals with favourable traits. (C) Mutation produces new alleles.",
      difficulty: "easy",
    },

    // ---------- Human Health & Disease ----------
    {
      id: "q39",
      question: "Elephantiasis (filariasis) is caused by",
      options: ["Ascaris", "Wuchereria bancrofti", "Entamoeba histolytica", "Trichophyton"],
      correctIndex: 1,
      explanation: "Wuchereria bancrofti, a filarial worm that is transmitted by Culex mosquitoes, causes filariasis. (A) Ascaris causes ascariasis. (C) Entamoeba histolytica causes amoebiasis. (D) Trichophyton is a fungus that causes ringworm.",
      difficulty: "easy",
    },
    {
      id: "q40",
      question: "In an HIV infection, the virus first enters the",
      options: [
        "B-lymphocytes",
        "cytotoxic T cells",
        "macrophages, and later infects helper T-lymphocytes",
        "red blood cells",
      ],
      correctIndex: 2,
      explanation: "After entering the body, HIV infects macrophages, where RNA is converted to DNA by reverse transcriptase, and then it infects helper T-lymphocytes. (A) and (B) are not the primary targets. (D) RBCs do not have the receptors the virus needs.",
      difficulty: "medium",
    },
    {
      id: "q41",
      question: "Morphine is obtained from the latex of",
      options: [
        "Papaver somniferum",
        "Cannabis sativa",
        "Erythroxylum coca",
        "Atropa belladonna",
      ],
      correctIndex: 0,
      explanation: "Morphine is extracted from the latex of the poppy plant, Papaver somniferum. (B) Cannabis sativa yields cannabinoids. (C) Erythroxylum coca yields cocaine. (D) Atropa belladonna yields atropine.",
      difficulty: "easy",
    },
    {
      id: "q42",
      question: "Allergic reactions are mainly caused by the release of histamine from",
      options: ["neutrophils", "lymphocytes", "red blood cells", "mast cells"],
      correctIndex: 3,
      explanation: "In an allergy, the allergen combines with IgE on mast cells, which release histamine and serotonin. (A) Neutrophils are phagocytes. (B) Lymphocytes make antibodies. (C) RBCs carry oxygen.",
      difficulty: "easy",
    },

    // ---------- Strategies for Enhancement in Food Production ----------
    {
      id: "q43",
      question: "Mating of superior males of one breed with superior females of another breed is called",
      options: ["inbreeding", "cross-breeding", "out-crossing", "interspecific hybridisation"],
      correctIndex: 1,
      explanation: "Cross-breeding combines the desirable qualities of two different breeds. (A) Inbreeding is mating of closely related individuals of the same breed. (C) Out-crossing is mating of unrelated animals of the same breed. (D) Interspecific hybridisation involves two different species, as in the mule.",
      difficulty: "medium",
    },

    // ---------- Biotechnology & Its Applications ----------
    {
      id: "q44",
      question: "Transgenic mice are used for testing the safety of the",
      options: ["measles vaccine", "BCG vaccine", "polio vaccine", "DPT vaccine"],
      correctIndex: 2,
      explanation: "Transgenic mice are used to test the safety of the polio vaccine before it is released, and this reduces the use of monkeys. (A), (B) and (D) are not the vaccines named for this use.",
      difficulty: "medium",
    },
    {
      id: "q45",
      question: "The Bacillus thuringiensis gene cry IAc controls",
      options: ["cotton bollworms", "corn borer only", "mosquitoes", "nematodes"],
      correctIndex: 0,
      explanation: "The proteins coded by cry IAc and cry IIAb control cotton bollworms. (B) Cry IAb controls the corn borer. (C) Mosquitoes are not the target of this gene. (D) Nematodes are controlled by RNA interference, not by Cry proteins.",
      difficulty: "hard",
    },
  ],
};

export default paper;