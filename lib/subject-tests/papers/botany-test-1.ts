import type { TestPaper } from "../types";

/**
 * NEET UG Botany (Class 11 + 12 combined) - Test 1, 45 MCQs (NEET Botany section pattern).
 * Register it in ../index.ts. Scoring: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "botany-test-1",
  title: "Botany (Class 11 + 12) - Test 1",
  durationMinutes: 45,
  questions: [
    // ================= CLASS 11 =================
    // ---------- Biological Classification ----------
    {
      id: "q1",
      question: "Red tides in the sea are caused by the rapid multiplication of",
      options: ["diatoms", "dinoflagellates", "Euglena", "slime moulds"],
      correctIndex: 1,
      explanation: "Dinoflagellates such as Gonyaulax multiply rapidly and their red pigments make the sea look red, and their toxins can kill fish. (A) Diatoms have silica walls and are major producers. (C) Euglena lives in fresh water and has a protein-rich pellicle. (D) Slime moulds are saprophytic protists that live on decaying matter.",
      difficulty: "easy",
    },
    {
      id: "q2",
      question: "Aseptate, coenocytic mycelium is found in",
      options: ["Agaricus", "Aspergillus", "Penicillium", "Rhizopus"],
      correctIndex: 3,
      explanation: "Rhizopus is a zygomycete, and its hyphae are aseptate and coenocytic (multinucleate cytoplasm without cross walls). (A) Agaricus, (B) Aspergillus and (C) Penicillium have septate hyphae.",
      difficulty: "medium",
    },

    // ---------- Plant Kingdom ----------
    {
      id: "q3",
      question: "Peat, which is used as fuel and as packing material for trans-shipment of living material, is obtained from",
      options: ["Sphagnum", "Funaria", "Marchantia", "Riccia"],
      correctIndex: 0,
      explanation: "Sphagnum, a moss, forms peat, and its great water-holding capacity makes it useful as packing material. (B) Funaria is a moss but is not a source of peat. (C) Marchantia and (D) Riccia are liverworts and are not used for peat.",
      difficulty: "easy",
    },
    {
      id: "q4",
      question: "The horsetail is",
      options: ["Pteris", "Dryopteris", "Equisetum", "Lycopodium"],
      correctIndex: 2,
      explanation: "Equisetum is the horsetail, a pteridophyte with jointed stems and strobili. (A) Pteris and (B) Dryopteris are ferns. (D) Lycopodium is a club moss.",
      difficulty: "easy",
    },
    {
      id: "q5",
      question: "Sequoia sempervirens, one of the tallest tree species, is a",
      options: ["angiosperm", "pteridophyte", "gymnosperm", "bryophyte"],
      correctIndex: 2,
      explanation: "Sequoia (the redwood) is a gymnosperm and can grow above 100 m. (A) Angiosperms have enclosed seeds, which Sequoia lacks. (B) Pteridophytes do not form seeds. (D) Bryophytes are small, non-vascular plants.",
      difficulty: "easy",
    },

    // ---------- Morphology of Flowering Plants ----------
    {
      id: "q6",
      question: "The region of the root in which cells divide actively is the",
      options: [
        "region of meristematic activity",
        "region of elongation",
        "region of maturation",
        "root cap",
      ],
      correctIndex: 0,
      explanation: "The cells of the meristematic region are small, thin-walled and rich in protoplasm, and they divide continuously. (B) In the region of elongation the new cells enlarge. (C) In the region of maturation the cells differentiate and root hairs form. (D) The root cap only protects the tip.",
      difficulty: "easy",
    },
    {
      id: "q7",
      question: "In Australian acacia, the leaves are small and short-lived, and the petioles become",
      options: [
        "tendrils",
        "spines",
        "pitchers",
        "green, flattened phyllodes",
      ],
      correctIndex: 3,
      explanation: "In Australian acacia the petioles expand, become green and synthesise food, which are phyllodes. (A) Tendrils are the modified leaflets in pea. (B) Spines are modified leaves in Opuntia. (C) Pitchers are modified leaves in Nepenthes.",
      difficulty: "medium",
    },
    {
      id: "q8",
      question: "Perigynous flowers are seen in",
      options: ["mustard", "plum", "guava", "china rose"],
      correctIndex: 1,
      explanation: "In plum the ovary is half inferior, as the margin of the thalamus grows upward around the ovary, so the flower is perigynous. (A) Mustard and (D) china rose have hypogynous flowers with a superior ovary. (C) Guava has an epigynous flower with an inferior ovary.",
      difficulty: "medium",
    },

    // ---------- Anatomy of Flowering Plants ----------
    {
      id: "q9",
      question: "Polyarch xylem (usually more than six bundles) is characteristic of the",
      options: ["dicot root", "monocot root", "dicot stem", "monocot stem"],
      correctIndex: 1,
      explanation: "The monocot root has usually more than six (polyarch) xylem bundles, while the dicot root has two to four. (C) and (D) Stems have vascular bundles with xylem and phloem together on the same radius, so they are not described as polyarch.",
      difficulty: "medium",
    },
    {
      id: "q10",
      type: "assertion-reason",
      question: "Assertion (A): Monocot stems show extensive secondary growth.\nReason (R): The vascular bundles of monocots are closed and lack cambium.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 3,
      explanation: "A is false, because monocot stems generally do not show secondary growth. R is true, since the closed vascular bundles of monocots lack cambium, which is the very reason secondary growth is absent.",
      difficulty: "medium",
    },

    // ---------- Cell: The Unit of Life & Cell Cycle ----------
    {
      id: "q11",
      question: "The cis face of the Golgi apparatus is the",
      options: [
        "maturing face",
        "concave side that releases vesicles",
        "convex forming (receiving) face",
        "face that is always toward the plasma membrane",
      ],
      correctIndex: 2,
      explanation: "The cis face is the convex forming face that is near the endoplasmic reticulum and receives vesicles from it. (A), (B) and (D) describe the trans face, the concave maturing face from which secretory vesicles leave toward the plasma membrane.",
      difficulty: "medium",
    },
    {
      id: "q12",
      question: "The fluid mosaic model of the plasma membrane was proposed by",
      options: [
        "Singer and Nicolson",
        "Robertson",
        "Davson and Danielli",
        "Schleiden and Schwann",
      ],
      correctIndex: 0,
      explanation: "Singer and Nicolson (1972) proposed the fluid mosaic model, in which proteins float in a lipid bilayer. (B) Robertson proposed the unit membrane model. (C) Davson and Danielli proposed the protein–lipid–protein sandwich model. (D) Schleiden and Schwann proposed the cell theory.",
      difficulty: "easy",
    },
    {
      id: "q13",
      type: "assertion-reason",
      question: "Assertion (A): Mitosis is called equational division.\nReason (R): The number of chromosomes in each daughter cell remains the same as in the parent cell.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "Mitosis is called equational because the chromosome number is kept equal in the daughter and parent cells, so R explains A. (B) is wrong because R is the reason for the name. (C) and (D) wrongly call a true statement false.",
      difficulty: "easy",
    },

    // ---------- Transport in Plants & Mineral Nutrition ----------
    {
      id: "q14",
      question: "Absorption of water by dry seeds is mainly by",
      options: ["osmosis", "diffusion", "active transport", "imbibition"],
      correctIndex: 3,
      explanation: "Imbibition is the absorption of water by hydrophilic colloids such as proteins and cellulose, which makes dry seeds and wood swell. (A) Osmosis needs a differentially permeable membrane. (B) Diffusion is the movement of molecules along a concentration gradient without a colloid. (C) Active transport needs metabolic energy.",
      difficulty: "easy",
    },
    {
      id: "q15",
      question: "The cohesion–tension theory of the ascent of sap was proposed by",
      options: ["Münch", "Dixon and Joly", "Priestley", "Hatch and Slack"],
      correctIndex: 1,
      explanation: "Dixon and Joly proposed the cohesion–tension (transpiration pull) theory. (A) Münch proposed the pressure flow hypothesis for phloem transport. (C) Priestley discovered that plants release oxygen. (D) Hatch and Slack worked out the C₄ pathway.",
      difficulty: "easy",
    },
    {
      id: "q16",
      question: "Interveinal chlorosis in older leaves is a deficiency symptom of",
      options: ["Ca", "Fe", "Mg", "S"],
      correctIndex: 2,
      explanation: "Mg is mobile and moves from older to younger leaves, so deficiency shows first in the older leaves as interveinal chlorosis. (A) Ca, (B) Fe and (D) S are relatively immobile, so their deficiency symptoms appear first in the young leaves.",
      difficulty: "medium",
    },

    // ---------- Photosynthesis ----------
    {
      id: "q17",
      question: "For the synthesis of one molecule of glucose through the Calvin cycle, the number of ATP and NADPH required respectively is",
      options: [
        "12 ATP and 18 NADPH",
        "6 ATP and 12 NADPH",
        "12 ATP and 12 NADPH",
        "18 ATP and 12 NADPH",
      ],
      correctIndex: 3,
      explanation: "Each CO₂ fixed needs 3 ATP and 2 NADPH, so six CO₂ for one glucose need 18 ATP and 12 NADPH. (A) swaps the numbers. (B) and (C) do not match 3 ATP and 2 NADPH per CO₂.",
      difficulty: "medium",
    },
    {
      id: "q18",
      question: "Emerson's enhancement effect shows that",
      options: [
        "the two photosystems work together",
        "only photosystem II is needed for photosynthesis",
        "chlorophyll b is not required",
        "the dark reaction is independent of light",
      ],
      correctIndex: 0,
      explanation: "Emerson found that photosynthesis in far-red light increases greatly when red light is added, which shows that two photosystems work together. (B) Both photosystems are needed. (C) and (D) are not conclusions of this experiment.",
      difficulty: "medium",
    },

    // ---------- Respiration ----------
    {
      id: "q19",
      type: "assertion-reason",
      question: "Assertion (A): Aerobic respiration yields much more ATP than fermentation.\nReason (R): Glycolysis occurs in the cytoplasm.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 1,
      explanation: "In aerobic respiration the Krebs cycle and the electron transport chain extract much more energy from glucose than fermentation does, so A is true. Glycolysis does occur in the cytoplasm, so R is true. But that location is shared by both processes and does not explain why aerobic respiration yields more ATP.",
      difficulty: "medium",
    },
    {
      id: "q20",
      question: "The terminal electron acceptor in the mitochondrial electron transport chain is",
      options: ["cytochrome c", "ubiquinone", "molecular oxygen", "NAD⁺"],
      correctIndex: 2,
      explanation: "Electrons finally pass to molecular oxygen at complex IV, which is reduced to water. (A) Cytochrome c and (B) ubiquinone are mobile carriers in the middle of the chain. (D) NAD⁺ accepts electrons in glycolysis and the Krebs cycle, not at the end of the chain.",
      difficulty: "easy",
    },

    // ---------- Plant Growth & Development ----------
    {
      id: "q21",
      question: "Kinetin was first obtained from",
      options: [
        "coconut milk",
        "maize kernels",
        "rice seedlings",
        "autoclaved herring sperm DNA",
      ],
      correctIndex: 3,
      explanation: "Skoog and Miller obtained kinetin from autoclaved herring sperm DNA. (A) Coconut milk and (B) maize kernels are sources of the natural cytokinin zeatin. (C) Rice seedlings with the 'foolish seedling' disease led to the discovery of gibberellins.",
      difficulty: "medium",
    },
    {
      id: "q22",
      question: "Which of the following is a short-day plant?",
      options: ["Xanthium", "wheat", "tomato", "oat"],
      correctIndex: 0,
      explanation: "Xanthium flowers when the day length is shorter than a critical period, so it is a short-day plant. (B) Wheat and (D) oat are long-day plants. (C) Tomato is a day-neutral plant.",
      difficulty: "medium",
    },

    // ================= CLASS 12 =================
    // ---------- Sexual Reproduction in Flowering Plants ----------
    {
      id: "q23",
      type: "assertion-reason",
      question: "Assertion (A): Double fertilisation is unique to angiosperms.\nReason (R): In double fertilisation, one male gamete fuses with the egg and the other fuses with a synergid.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 2,
      explanation: "Double fertilisation (syngamy and triple fusion) occurs only in angiosperms, so A is true. R is false, because the second male gamete fuses with the two polar nuclei of the central cell, not with a synergid, to form the primary endosperm nucleus.",
      difficulty: "medium",
    },
    {
      id: "q24",
      question: "A typical angiosperm embryo sac at maturity is",
      options: [
        "8-celled",
        "7-celled and 8-nucleate",
        "7-celled and 7-nucleate",
        "8-celled and 8-nucleate",
      ],
      correctIndex: 1,
      explanation: "The mature embryo sac has three antipodals, two synergids and an egg (6 cells) plus the large central cell that holds two polar nuclei, giving 7 cells and 8 nuclei. (A) and (D) count the two polar nuclei as separate cells. (C) 7 nuclei leaves out one polar nucleus.",
      difficulty: "medium",
    },
    {
      id: "q25",
      question: "The residual, persistent nucellus found in seeds such as black pepper and beet is called",
      options: ["endosperm", "pericarp", "funicle", "perisperm"],
      correctIndex: 3,
      explanation: "A persistent nucellus is called perisperm, as in black pepper and beet. (A) Endosperm is the nutritive tissue from the triple fusion. (B) Pericarp is the fruit wall. (C) Funicle is the stalk that attaches the ovule to the placenta.",
      difficulty: "medium",
    },
    {
      id: "q26",
      question: "Nucellar polyembryony is commonly seen in",
      options: ["pea", "Citrus", "maize", "rice"],
      correctIndex: 1,
      explanation: "In Citrus, some cells of the nucellus develop into embryos without fertilisation (apomixis), so several embryos occur in one seed. (A) Pea, (C) maize and (D) rice normally reproduce sexually with a single embryo.",
      difficulty: "medium",
    },
    {
      id: "q27",
      question: "Pollination by water is seen in",
      options: ["Vallisneria", "Salvia", "Zea mays", "Yucca"],
      correctIndex: 0,
      explanation: "Vallisneria and Hydrilla are pollinated by water, which is the rarest type of pollination. (B) Salvia is insect-pollinated. (C) Maize is wind-pollinated. (D) Yucca is pollinated by a moth.",
      difficulty: "easy",
    },

    // ---------- Principles of Inheritance & Variation ----------
    {
      id: "q28",
      question: "The phenotypic ratio in the F₂ generation of a dihybrid cross is",
      options: ["3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1 : 1 : 1"],
      correctIndex: 2,
      explanation: "A dihybrid cross gives 9 : 3 : 3 : 1 in F₂. (A) 3 : 1 is the phenotypic ratio of a monohybrid cross. (B) 1 : 2 : 1 is the genotypic ratio of a monohybrid cross, or the phenotypic ratio with incomplete dominance. (D) 1 : 1 : 1 : 1 is the test cross ratio of a dihybrid.",
      difficulty: "easy",
    },
    {
      id: "q29",
      question: "Sturtevant used the frequency of recombination between gene pairs on the same chromosome to measure",
      options: [
        "the number of chromosomes",
        "the mutation rate",
        "dominance",
        "the distance between genes",
      ],
      correctIndex: 3,
      explanation: "Sturtevant used the recombination frequency as a measure of the distance between genes and so mapped their positions on the chromosome. (A), (B) and (C) are not measured by recombination frequency.",
      difficulty: "medium",
    },
    {
      id: "q30",
      question: "In birds, sex is determined by which pattern?",
      options: [
        "XX in females and XY in males",
        "ZZ in males and ZW in females",
        "XO type",
        "haplodiploidy",
      ],
      correctIndex: 1,
      explanation: "In birds, males are ZZ and females are ZW, so the female is the heterogametic sex. (A) is the pattern of humans and Drosophila. (C) XO is seen in grasshoppers. (D) Haplodiploidy is seen in honeybees.",
      difficulty: "easy",
    },
    {
      id: "q31",
      question: "Sickle-cell anaemia is caused by a point mutation that substitutes",
      options: [
        "glutamic acid by valine at the sixth position of the β-globin chain",
        "valine by glutamic acid at the sixth position of the β-globin chain",
        "glutamic acid by valine at the sixth position of the α-globin chain",
        "glycine by alanine at the sixth position of the β-globin chain",
      ],
      correctIndex: 0,
      explanation: "A change of the codon GAG to GUG substitutes glutamic acid by valine at the sixth position of the β-globin chain. (B) reverses the substitution. (C) The mutation is in the β chain, not the α chain. (D) Glycine and alanine are not involved.",
      difficulty: "medium",
    },

    // ---------- Molecular Basis of Inheritance ----------
    {
      id: "q32",
      question: "In the Hershey–Chase experiment, radioactive sulphur (³⁵S) labelled the",
      options: ["DNA", "RNA", "protein coat", "lipids"],
      correctIndex: 2,
      explanation: "Sulphur is present in proteins (in cysteine and methionine), so ³⁵S labelled the protein coat of the phage. (A) DNA contains phosphorus, which was labelled with ³²P. (B) The phage had no RNA as genetic material. (D) Lipids were not the labelled component.",
      difficulty: "easy",
    },
    {
      id: "q33",
      question: "The experimental proof of semiconservative replication of DNA was given by",
      options: ["Griffith", "Hershey and Chase", "Avery et al.", "Meselson and Stahl"],
      correctIndex: 3,
      explanation: "Meselson and Stahl used ¹⁵N-labelled E. coli and CsCl density gradient centrifugation to show semiconservative replication. (A) Griffith discovered transformation. (B) Hershey and Chase showed that DNA is the genetic material of the phage. (C) Avery, MacLeod and McCarty showed that DNA is the transforming principle.",
      difficulty: "easy",
    },
    {
      id: "q34",
      question: "In eukaryotes, the primary transcript (hnRNA) is processed by",
      options: [
        "splicing, capping and tailing",
        "translation and replication",
        "only reverse transcription",
        "only methylation",
      ],
      correctIndex: 0,
      explanation: "hnRNA has introns that are removed by splicing, a cap (methyl guanosine) is added at the 5′ end and a poly-A tail at the 3′ end, giving mature mRNA. (B), (C) and (D) are not the processing steps.",
      difficulty: "easy",
    },
    {
      id: "q35",
      question: "The number of codons that code for amino acids is",
      options: ["64", "61", "20", "3"],
      correctIndex: 1,
      explanation: "Of 64 codons, 61 code for amino acids and 3 (UAA, UAG, UGA) are stop codons. (A) 64 includes the stop codons. (C) 20 is the number of amino acids, not codons. (D) 3 is the number of stop codons.",
      difficulty: "easy",
    },
    {
      id: "q36",
      question: "In the lac operon, the gene that codes for permease is",
      options: ["lac Z", "lac A", "lac Y", "lac i"],
      correctIndex: 2,
      explanation: "lac Y codes for permease, which increases the permeability of the cell to β-galactosides. (A) lac Z codes for β-galactosidase. (B) lac A codes for transacetylase. (D) lac i is the regulatory gene that codes for the repressor.",
      difficulty: "medium",
    },

    // ---------- Microbes in Human Welfare ----------
    {
      id: "q37",
      question: "The large holes in 'Swiss cheese' are due to the production of a large amount of CO₂ by",
      options: [
        "Lactobacillus",
        "Penicillium roquefortii",
        "Saccharomyces",
        "Propionibacterium sharmanii",
      ],
      correctIndex: 3,
      explanation: "Propionibacterium sharmanii produces a large amount of CO₂, forming the big holes of Swiss cheese. (A) Lactobacillus converts milk to curd. (B) Penicillium roquefortii ripens Roquefort cheese. (C) Saccharomyces is used in bread and beer making.",
      difficulty: "medium",
    },
    {
      id: "q38",
      question: "Cyclosporin A, an immunosuppressive agent, is produced by",
      options: [
        "Monascus purpureus",
        "Trichoderma polysporum",
        "Streptococcus",
        "Aspergillus niger",
      ],
      correctIndex: 1,
      explanation: "Cyclosporin A, used in organ-transplant patients, is produced by the fungus Trichoderma polysporum. (A) Monascus purpureus yields statins, which lower blood cholesterol. (C) Streptococcus yields streptokinase, a clot buster. (D) Aspergillus niger is used for citric acid production.",
      difficulty: "medium",
    },

    // ---------- Organisms & Populations ----------
    {
      id: "q39",
      question: "A population growing in a habitat with limited resources shows",
      options: [
        "logistic (S-shaped) growth",
        "exponential (J-shaped) growth only",
        "no growth",
        "linear growth",
      ],
      correctIndex: 0,
      explanation: "With limited resources, growth slows down as the population nears the carrying capacity, giving the S-shaped logistic curve. (B) Exponential J-shaped growth happens when resources are unlimited. (C) and (D) do not describe the growth curve.",
      difficulty: "easy",
    },
    {
      id: "q40",
      question: "An orchid growing on a mango branch is an example of",
      options: ["mutualism", "parasitism", "commensalism", "amensalism"],
      correctIndex: 2,
      explanation: "The orchid gets support and does not harm the mango tree, and the tree is not benefited, which is commensalism. (A) In mutualism both partners benefit. (B) In parasitism the host is harmed. (D) In amensalism one species is harmed while the other is unaffected.",
      difficulty: "easy",
    },

    // ---------- Ecosystem ----------
    {
      id: "q41",
      question: "Net primary productivity is",
      options: ["GPP + R", "GPP × R", "GPP / R", "GPP − R"],
      correctIndex: 3,
      explanation: "Net primary productivity is the gross primary productivity minus the respiratory losses: NPP = GPP − R. (A), (B) and (C) are not the relation between these quantities.",
      difficulty: "easy",
    },
    {
      id: "q42",
      question: "Which ecological pyramid is always upright?",
      options: [
        "Pyramid of energy",
        "Pyramid of biomass",
        "Pyramid of numbers",
        "All of these",
      ],
      correctIndex: 0,
      explanation: "The pyramid of energy is always upright, because energy is lost at each trophic level. (B) The pyramid of biomass is inverted in the sea. (C) The pyramid of numbers is inverted for a tree ecosystem with many insects. (D) is wrong because (B) and (C) can be inverted.",
      difficulty: "easy",
    },

    // ---------- Biodiversity & Conservation ----------
    {
      id: "q43",
      question: "The species–area relationship was described by",
      options: ["Darwin", "Alexander von Humboldt", "Mendel", "Hardin"],
      correctIndex: 1,
      explanation: "Alexander von Humboldt observed that species richness increases with the area explored, but only up to a limit. (A) Darwin proposed natural selection. (C) Mendel worked on the laws of inheritance. (D) Hardin is known for the 'tragedy of the commons'.",
      difficulty: "medium",
    },

    // ---------- Biotechnology: Principles & Processes ----------
    {
      id: "q44",
      question: "The recognition sequence of the restriction enzyme EcoRI is",
      options: ["GGATCC", "AAGCTT", "GAATTC", "CTGCAG"],
      correctIndex: 2,
      explanation: "EcoRI recognises the palindromic sequence GAATTC and cuts between G and A, giving sticky ends. (A) GGATCC is the site of BamHI. (B) AAGCTT is the site of HindIII. (D) CTGCAG is the site of PstI.",
      difficulty: "medium",
    },
    {
      id: "q45",
      question: "Taq polymerase used in PCR is isolated from",
      options: [
        "E. coli",
        "Bacillus thuringiensis",
        "Agrobacterium tumefaciens",
        "Thermus aquaticus",
      ],
      correctIndex: 3,
      explanation: "Taq polymerase comes from the thermophilic bacterium Thermus aquaticus and stays active at the high temperature of denaturation. (A) E. coli polymerases are heat-labile. (B) B. thuringiensis is the source of the Bt toxin gene. (C) Agrobacterium tumefaciens provides the Ti plasmid.",
      difficulty: "easy",
    },
  ],
};

export default paper;