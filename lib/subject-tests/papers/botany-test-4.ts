import type { TestPaper } from "../types";

/**
 * NEET UG Botany (Class 11 + 12 combined) - Test 4, 45 MCQs (NEET Botany section pattern).
 * Register it in ../index.ts. Scoring: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "botany-test-4",
  title: "Botany (Class 11 + 12) - Test 4",
  durationMinutes: 45,
  questions: [
    // ================= CLASS 11 =================
    // ---------- Biological Classification ----------
    {
      id: "q1",
      question: "Bacteria survive unfavourable conditions by forming",
      options: ["endospores", "zoospores", "conidia", "basidiospores"],
      correctIndex: 0,
      explanation: "Many bacteria form thick-walled, resistant endospores when conditions are unfavourable. (B) Zoospores are motile asexual spores of algae and some fungi. (C) Conidia are the asexual spores of fungi such as Penicillium. (D) Basidiospores are the sexual spores of basidiomycetes.",
      difficulty: "easy",
    },
    {
      id: "q2",
      question: "In fungi, the stage in which each cell contains two genetically different haploid nuclei (n + n) is the",
      options: ["diploid stage", "haploid stage", "zygote stage", "dikaryon stage"],
      correctIndex: 3,
      explanation: "When plasmogamy is not immediately followed by karyogamy, the cell has two nuclei, which is the dikaryon (dikaryophase). (A) and (C) The diploid or zygote stage comes only after karyogamy, when the nuclei fuse. (B) A haploid cell has a single nucleus.",
      difficulty: "medium",
    },

    // ---------- Plant Kingdom ----------
    {
      id: "q3",
      question: "A haplontic life cycle is seen in",
      options: ["Fucus", "Spirogyra", "Pteris", "Pinus"],
      correctIndex: 1,
      explanation: "In Spirogyra the haploid thallus is dominant and the zygote undergoes meiosis, which is the haplontic pattern. (A) Fucus is diplontic. (C) Pteris is haplo-diplontic. (D) Pinus is diplontic, as the sporophyte is dominant.",
      difficulty: "medium",
    },
    {
      id: "q4",
      question: "The 'seed habit' seen in some pteridophytes, which was a step towards seed formation, is associated with",
      options: [
        "homospory",
        "vegetative propagation",
        "heterospory with retention of the megaspore on the parent sporophyte",
        "spore dispersal by wind",
      ],
      correctIndex: 2,
      explanation: "In some pteridophytes, such as Selaginella and Salvinia, the megaspore and the female gametophyte are retained on the parent sporophyte, which is considered a precursor of the seed habit. (A) Homospory means one kind of spore and has no connection with seed formation. (B) and (D) are not related to the seed habit.",
      difficulty: "hard",
    },
    {
      id: "q5",
      question: "The gametophytes of gymnosperms are",
      options: [
        "free-living and photosynthetic",
        "saprophytic",
        "highly reduced and dependent on the sporophyte",
        "absent",
      ],
      correctIndex: 2,
      explanation: "In gymnosperms the male and female gametophytes are very reduced, do not have an independent existence and are retained within the sporangia of the sporophyte. (A) Free-living gametophytes occur in bryophytes and pteridophytes. (B) They are not saprophytic. (D) Gametophytes are present, although small.",
      difficulty: "medium",
    },

    // ---------- Morphology of Flowering Plants ----------
    {
      id: "q6",
      question: "The flattened, green, fleshy stem of Opuntia is a",
      options: ["phylloclade", "tuber", "thorn", "stolon"],
      correctIndex: 0,
      explanation: "In Opuntia the stem is flattened and green and does the photosynthesis, as the leaves are reduced to spines, so it is a phylloclade. (B) A tuber is an underground food-storage stem. (C) A thorn is a hard, pointed stem. (D) A stolon is a lateral branch that grows along the soil surface.",
      difficulty: "easy",
    },
    {
      id: "q7",
      question: "The edible part of the coconut (the white kernel and the coconut water) is the",
      options: ["epicarp", "fibrous mesocarp", "endocarp", "endosperm"],
      correctIndex: 3,
      explanation: "The coconut water is free-nuclear endosperm and the white kernel is cellular endosperm. (A) The epicarp is the outer skin. (B) The fibrous mesocarp is the husk. (C) The endocarp is the hard shell.",
      difficulty: "medium",
    },
    {
      id: "q8",
      question: "Pinnately compound leaves are present in",
      options: ["silk cotton", "neem", "hibiscus", "peepal"],
      correctIndex: 1,
      explanation: "Neem has a pinnately compound leaf, with leaflets on a common axis, the rachis. (A) Silk cotton has a palmately compound leaf. (C) Hibiscus and (D) peepal have simple leaves.",
      difficulty: "easy",
    },

    // ---------- Anatomy of Flowering Plants ----------
    {
      id: "q9",
      question: "The xylem in roots is",
      options: ["exarch", "endarch", "mesarch", "scalariform"],
      correctIndex: 0,
      explanation: "In roots, the protoxylem lies towards the periphery (pericycle) and the metaxylem towards the centre, so the xylem is exarch. (B) Endarch xylem, with protoxylem towards the centre, is seen in stems. (C) Mesarch xylem has protoxylem in the middle and is seen in some ferns. (D) Scalariform is a type of wall thickening, not an arrangement.",
      difficulty: "medium",
    },
    {
      id: "q10",
      question: "Heartwood differs from sapwood in that it",
      options: [
        "conducts water and minerals",
        "has living cells",
        "is dark and hard and no longer conducts water, as it is filled with tannins and resins",
        "is the outermost layer of the stem",
      ],
      correctIndex: 2,
      explanation: "In heartwood the vessels are blocked by tyloses and the tissue is filled with organic compounds such as tannins and resins, so it is dark, hard and resistant to attack, and it does not conduct water. (A) Sapwood conducts water. (B) Sapwood is the part that has living cells. (D) The outermost layer is the bark.",
      difficulty: "medium",
    },

    // ---------- Cell, Biomolecules & Cell Cycle ----------
    {
      id: "q11",
      question: "The membrane that surrounds the vacuole of a plant cell is called the",
      options: ["plasmalemma", "tonoplast", "thylakoid membrane", "cristae"],
      correctIndex: 1,
      explanation: "The single membrane around the vacuole is called the tonoplast, and it helps in transport of ions and other substances into the vacuole. (A) The plasmalemma is the plasma membrane. (C) The thylakoid membrane belongs to the chloroplast. (D) Cristae are folds of the inner membrane of the mitochondrion.",
      difficulty: "easy",
    },
    {
      id: "q12",
      question: "At the Vmax of an enzyme-catalysed reaction, the rate of the reaction",
      options: [
        "is zero",
        "keeps increasing with more substrate",
        "falls to half",
        "is maximal and does not increase with further increase in substrate",
      ],
      correctIndex: 3,
      explanation: "At Vmax all the enzyme molecules are saturated with substrate, so adding more substrate does not raise the rate. (A) The rate is highest, not zero. (B) It would increase only before saturation. (C) Half of Vmax is reached at the Km, not at Vmax.",
      difficulty: "medium",
    },
    {
      id: "q13",
      question: "If the DNA content of a cell in G₁ is 2C, its DNA content after the S phase is",
      options: ["2C", "C", "4C", "8C"],
      correctIndex: 2,
      explanation: "During S phase, DNA replicates, so the DNA content doubles from 2C to 4C, while the chromosome number stays the same. (A) 2C is the value before replication. (B) C would indicate halving, which happens in meiosis. (D) 8C would need two rounds of replication.",
      difficulty: "easy",
    },

    // ---------- Transport in Plants & Mineral Nutrition ----------
    {
      id: "q14",
      question: "The unit of water potential is",
      options: ["pascal", "newton", "joule", "watt"],
      correctIndex: 0,
      explanation: "Water potential is a pressure, and it is expressed in pascals (Pa). (B) The newton is the unit of force. (C) The joule is the unit of energy. (D) The watt is the unit of power.",
      difficulty: "easy",
    },
    {
      id: "q15",
      question: "The criteria for the essentiality of mineral elements were laid down by",
      options: ["Sachs", "Arnon and Stout", "Hoagland", "Knop"],
      correctIndex: 1,
      explanation: "Arnon and Stout (1939) defined the criteria for essentiality: the element is necessary for normal growth and reproduction, it cannot be replaced by another, and it is directly involved in metabolism. (A) Sachs and (D) Knop worked on solution culture. (C) Hoagland devised a standard nutrient solution.",
      difficulty: "medium",
    },
    {
      id: "q16",
      question: "The enzyme that incorporates ammonia into glutamic acid by reductive amination is",
      options: [
        "nitrate reductase",
        "nitrogenase",
        "transaminase",
        "glutamate dehydrogenase",
      ],
      correctIndex: 3,
      explanation: "Glutamate dehydrogenase combines NH₄⁺ with α-ketoglutarate in the presence of NADPH to form glutamate. (A) Nitrate reductase reduces nitrate to nitrite. (B) Nitrogenase reduces N₂ to NH₃. (C) Transaminase transfers an amino group from one amino acid to a keto acid.",
      difficulty: "medium",
    },

    // ---------- Photosynthesis ----------
    {
      id: "q17",
      type: "assertion-reason",
      question: "Assertion (A): C₄ plants are more efficient in photosynthesis in hot, dry conditions.\nReason (R): C₄ plants show a high rate of photorespiration.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 2,
      explanation: "C₄ plants keep a high CO₂ concentration around RuBisCO in the bundle sheath cells and so have a higher temperature optimum and higher efficiency in hot, dry conditions, so A is true. R is false, because they show negligible photorespiration.",
      difficulty: "medium",
    },
    {
      id: "q18",
      question: "The mobile electron carrier that transfers electrons from the cytochrome b₆f complex to photosystem I is",
      options: ["plastocyanin", "plastoquinone", "ferredoxin", "NADP reductase"],
      correctIndex: 0,
      explanation: "Plastocyanin, a copper-containing protein, carries electrons from the cytochrome b₆f complex to PS I. (B) Plastoquinone carries electrons from PS II to the cytochrome b₆f complex. (C) Ferredoxin takes electrons from PS I. (D) NADP reductase uses these electrons to reduce NADP⁺ to NADPH.",
      difficulty: "hard",
    },

    // ---------- Respiration ----------
    {
      id: "q19",
      question: "The end product of glycolysis is",
      options: ["acetyl CoA", "pyruvic acid", "lactic acid", "oxaloacetic acid"],
      correctIndex: 1,
      explanation: "Glycolysis breaks down glucose into two molecules of pyruvic acid. (A) Acetyl CoA is formed from pyruvate in the link reaction. (C) Lactic acid forms from pyruvate only in lactic acid fermentation. (D) Oxaloacetic acid is a Krebs cycle intermediate.",
      difficulty: "easy",
    },
    {
      id: "q20",
      question: "The chemiosmotic hypothesis of ATP synthesis was proposed by",
      options: ["Calvin", "Krebs", "Hatch", "Peter Mitchell"],
      correctIndex: 3,
      explanation: "Peter Mitchell proposed that ATP synthesis is driven by a proton gradient across a membrane. (A) Calvin worked out the path of carbon in photosynthesis. (B) Krebs described the citric acid cycle. (C) Hatch, with Slack, described the C₄ pathway.",
      difficulty: "easy",
    },

    // ---------- Plant Growth & Development ----------
    {
      id: "q21",
      question: "Flowering in pineapple can be induced out of season by",
      options: ["cytokinin", "gibberellin", "ethylene", "abscisic acid"],
      correctIndex: 2,
      explanation: "Ethylene promotes flowering in pineapple and mango, and it is applied commercially. (A) Cytokinin promotes cell division and delays senescence. (B) Gibberellin causes bolting and stem elongation. (D) Abscisic acid is the stress hormone and inhibits growth.",
      difficulty: "medium",
    },
    {
      id: "q22",
      question: "The photoperiodic stimulus for flowering is perceived by the",
      options: ["leaves", "root tips", "shoot apex", "flowers"],
      correctIndex: 0,
      explanation: "The leaves perceive the light and dark periods, and a flowering stimulus is then transmitted to the shoot apices. (B) Root tips do not perceive day length. (C) The shoot apex responds to the stimulus rather than perceiving it. (D) Flowers are the result of the process.",
      difficulty: "medium",
    },

    // ================= CLASS 12 =================
    // ---------- Sexual Reproduction in Flowering Plants ----------
    {
      id: "q23",
      question: "The cells at the micropylar end of the embryo sac that have a filiform apparatus are the",
      options: ["antipodals", "egg cell", "polar nuclei", "synergids"],
      correctIndex: 3,
      explanation: "The two synergids have a special cellular thickening, the filiform apparatus, which guides the pollen tube into the synergid. (A) The antipodals are at the chalazal end. (B) The egg cell lies with the synergids but has no filiform apparatus. (C) The polar nuclei lie in the central cell.",
      difficulty: "easy",
    },
    {
      id: "q24",
      question: "In a typical dicot seed, the seed coat (testa and tegmen) develops from the",
      options: ["ovary wall", "integuments", "nucellus", "endosperm"],
      correctIndex: 1,
      explanation: "The integuments of the ovule harden to form the outer testa and the inner tegmen. (A) The ovary wall forms the pericarp of the fruit. (C) The nucellus is usually consumed, and it persists as perisperm only in a few seeds. (D) The endosperm is the nutritive tissue.",
      difficulty: "medium",
    },
    {
      id: "q25",
      question: "A plant whose pollen causes severe allergies and bronchial afflictions, and which came with imported wheat, is",
      options: ["Eichhornia", "Lantana", "Parthenium", "Datura"],
      correctIndex: 2,
      explanation: "Parthenium (carrot grass) arrived in India as a contaminant with imported wheat, and its pollen causes severe allergy. (A) Eichhornia (water hyacinth) is an aquatic weed. (B) Lantana is an invasive shrub. (D) Datura is a poisonous plant, and it is not known for pollen allergy.",
      difficulty: "medium",
    },
    {
      id: "q26",
      type: "assertion-reason",
      question: "Assertion (A): Apomixis is useful in the hybrid seed industry.\nReason (R): Apomictic seeds keep the genotype of the hybrid, so hybrid vigour is maintained.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "Apomictic seeds are produced without fertilisation, so they are genetically identical to the parent, and the hybrid character is preserved. Farmers can then use the seeds again without buying fresh hybrid seed every year. R explains A. (B) is wrong because R is the reason. (C) and (D) call a true statement false.",
      difficulty: "medium",
    },

    // ---------- Principles of Inheritance & Variation ----------
    {
      id: "q27",
      question: "Mendel studied how many pairs of contrasting characters in the garden pea?",
      options: ["4", "5", "14", "7"],
      correctIndex: 3,
      explanation: "Mendel selected seven pairs of contrasting traits: stem height, flower colour, flower position, pod shape, pod colour, seed shape and seed colour. (A) and (B) understate the number. (C) 14 is the number of chromosomes in pea (2n).",
      difficulty: "easy",
    },
    {
      id: "q28",
      question: "Haemophilia is",
      options: [
        "an autosomal dominant disorder",
        "an X-linked recessive disorder",
        "a Y-linked disorder",
        "caused by trisomy of chromosome 21",
      ],
      correctIndex: 1,
      explanation: "The gene for haemophilia lies on the X chromosome and is recessive, so it affects males more often and females only when homozygous. (A) Autosomal dominant disorders include myotonic dystrophy. (C) Y-linked traits pass only from father to son. (D) Trisomy 21 is Down's syndrome.",
      difficulty: "easy",
    },
    {
      id: "q29",
      question: "Klinefelter's syndrome is caused by",
      options: [
        "the absence of one X chromosome",
        "trisomy of chromosome 21",
        "an extra X chromosome in a male (47, XXY)",
        "deletion in chromosome 5",
      ],
      correctIndex: 2,
      explanation: "Klinefelter's syndrome is the result of an extra X chromosome (karyotype 47, XXY), giving sterile males with some feminine features. (A) The absence of one X is Turner's syndrome. (B) Trisomy 21 is Down's syndrome. (D) Deletion in chromosome 5 causes cri-du-chat syndrome.",
      difficulty: "medium",
    },
    {
      id: "q30",
      question: "The deletion or insertion of one or two bases in a gene causes",
      options: [
        "a frameshift mutation",
        "a silent mutation",
        "a point substitution",
        "no change at all",
      ],
      correctIndex: 0,
      explanation: "Adding or deleting one or two bases changes the reading frame, so every codon after the change is altered, which is a frameshift mutation. (B) A silent mutation is a base substitution that does not change the amino acid. (C) A point substitution replaces one base by another. (D) The effect is large, not nil.",
      difficulty: "medium",
    },

    // ---------- Molecular Basis of Inheritance ----------
    {
      id: "q31",
      question: "In Griffith's experiment, mice died when they were injected with",
      options: [
        "live R strain only",
        "heat-killed S strain plus live R strain",
        "heat-killed S strain only",
        "live R strain plus heat-killed R strain",
      ],
      correctIndex: 1,
      explanation: "The mice died when injected with a mixture of heat-killed S and live R bacteria, because the R strain was transformed into the virulent S strain. (A) Live R strain is harmless. (C) Heat-killed S strain cannot cause disease. (D) Neither component is virulent.",
      difficulty: "easy",
    },
    {
      id: "q32",
      question: "The genetic material of the tobacco mosaic virus (TMV) is",
      options: [
        "double-stranded DNA",
        "single-stranded DNA",
        "double-stranded RNA",
        "single-stranded RNA",
      ],
      correctIndex: 3,
      explanation: "TMV has single-stranded RNA enclosed in a protein coat. (A) and (B) TMV does not have DNA. (C) Its RNA is single-stranded, not double-stranded.",
      difficulty: "easy",
    },
    {
      id: "q33",
      question: "DNA-dependent DNA polymerases can add nucleotides only in the",
      options: [
        "3′ → 5′ direction",
        "either direction",
        "5′ → 3′ direction",
        "5′ → 5′ direction",
      ],
      correctIndex: 2,
      explanation: "DNA polymerases extend a primer only at its 3′ end, so new DNA is synthesised in the 5′ → 3′ direction, which is the reason for the continuous leading strand and the discontinuous lagging strand. (A), (B) and (D) are not possible for these enzymes.",
      difficulty: "easy",
    },
    {
      id: "q34",
      question: "The peptide bond in the ribosome is formed by the activity of",
      options: [
        "the rRNA component, which acts as a ribozyme",
        "protein only",
        "tRNA",
        "mRNA",
      ],
      correctIndex: 0,
      explanation: "In bacteria, the 23S rRNA acts as the ribozyme that catalyses peptide bond formation. (B) Ribosomal proteins have a supporting role. (C) tRNA carries amino acids. (D) mRNA carries the codons.",
      difficulty: "hard",
    },
    {
      id: "q35",
      question: "In the lac operon, the repressor is inactivated by",
      options: ["glucose", "RNA polymerase", "β-galactosidase", "lactose (the inducer)"],
      correctIndex: 3,
      explanation: "Lactose (allolactose) binds to the repressor and changes its shape so that it can no longer bind to the operator, and transcription can begin. (A) Glucose is not the inducer. (B) RNA polymerase transcribes the genes. (C) β-galactosidase is an enzyme product of lac Z.",
      difficulty: "medium",
    },

    // ---------- Microbes in Human Welfare ----------
    {
      id: "q36",
      type: "assertion-reason",
      question: "Assertion (A): Penicillin is an antibiotic.\nReason (R): Penicillium notatum is a fungus.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 1,
      explanation: "Penicillin is an antibiotic discovered by Alexander Fleming, so A is true. Penicillium notatum is a fungus, so R is true. But the fungal nature of the source does not explain why penicillin works as an antibiotic, which is because it kills or stops the growth of bacteria.",
      difficulty: "medium",
    },
    {
      id: "q37",
      question: "In paddy fields, the aquatic fern Azolla is used as a biofertiliser because it harbours",
      options: [
        "Rhizobium",
        "mycorrhiza",
        "the nitrogen-fixing cyanobacterium Anabaena",
        "Azotobacter",
      ],
      correctIndex: 2,
      explanation: "Azolla lives in symbiosis with the nitrogen-fixing cyanobacterium Anabaena, which enriches the paddy field with nitrogen. (A) Rhizobium forms nodules on legume roots. (B) Mycorrhiza is a fungal association with roots. (D) Azotobacter is a free-living soil nitrogen fixer.",
      difficulty: "medium",
    },

    // ---------- Organisms & Populations ----------
    {
      id: "q38",
      question: "The prickly pear cactus, which spread widely in Australia, was brought under control by",
      options: [
        "the moth Cactoblastis cactorum",
        "Eichhornia",
        "Lantana",
        "Parthenium",
      ],
      correctIndex: 0,
      explanation: "The cactus-feeding moth Cactoblastis cactorum was introduced as a predator and controlled the prickly pear. (B) Eichhornia, (C) Lantana and (D) Parthenium are invasive weeds themselves, not control agents.",
      difficulty: "medium",
    },
    {
      id: "q39",
      type: "assertion-reason",
      question: "Assertion (A): A population with a broad-based age pyramid is declining.\nReason (R): Such a pyramid has a large proportion of pre-reproductive individuals.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 3,
      explanation: "A is false, because a broad base means many young individuals, so the population is expanding (growing), not declining. R is true, since the broad base represents a large pre-reproductive group.",
      difficulty: "medium",
    },

    // ---------- Ecosystem ----------
    {
      id: "q40",
      question: "The rate of production of biomass per unit area per unit time is called",
      options: ["standing crop", "productivity", "respiration", "biomass"],
      correctIndex: 1,
      explanation: "Productivity is the rate of biomass production, expressed in g m⁻² yr⁻¹ or kcal m⁻² yr⁻¹. (A) Standing crop is the mass of living organisms at a particular time. (C) Respiration is the process that uses organic matter. (D) Biomass is the dry weight of organic matter present.",
      difficulty: "easy",
    },
    {
      id: "q41",
      question: "In a terrestrial ecosystem, the major conduit for energy flow is the",
      options: [
        "grazing food chain",
        "predator food chain",
        "detritus food chain",
        "parasitic food chain",
      ],
      correctIndex: 2,
      explanation: "In terrestrial ecosystems, a much larger fraction of the energy flows through the detritus food chain than through the grazing food chain. (A) The grazing food chain is the major conduit in aquatic ecosystems. (B) and (D) are not the major pathways.",
      difficulty: "medium",
    },

    // ---------- Biodiversity & Conservation ----------
    {
      id: "q42",
      question: "The biodiversity hotspots of India include",
      options: [
        "Western Ghats and Sri Lanka, Indo-Burma and the Himalaya",
        "the Thar desert",
        "the Gangetic plains",
        "the Deccan plateau",
      ],
      correctIndex: 0,
      explanation: "India's hotspots are the Western Ghats and Sri Lanka, Indo-Burma and the Himalaya, which have a high number of endemic species and are threatened by habitat loss. (B), (C) and (D) are not recognised hotspots.",
      difficulty: "medium",
    },

    // ---------- Biotechnology: Principles & Processes ----------
    {
      id: "q43",
      question: "In a stirred-tank bioreactor, the agitator system helps to",
      options: [
        "kill the microbes",
        "filter out the product",
        "heat the medium for sterilisation",
        "mix the contents evenly and make oxygen available",
      ],
      correctIndex: 3,
      explanation: "The agitator mixes the culture so that the microbes get uniform access to nutrients and oxygen. (A) The aim is to grow the microbes, not kill them. (B) Filtering belongs to downstream processing. (C) Sterilisation is done separately before inoculation.",
      difficulty: "easy",
    },
    {
      id: "q44",
      question: "To isolate DNA from a fungal cell, the cell wall is digested using",
      options: ["lysozyme", "chitinase", "cellulase", "protease"],
      correctIndex: 1,
      explanation: "Fungal cell walls contain chitin, so chitinase breaks them open. (A) Lysozyme digests bacterial cell walls. (C) Cellulase digests plant cell walls. (D) Protease removes proteins after the cell has been opened.",
      difficulty: "medium",
    },
    {
      id: "q45",
      question: "Purified DNA precipitates out as fine threads when",
      options: [
        "cold water is added",
        "an acid is added",
        "chilled ethanol is added",
        "a base is added",
      ],
      correctIndex: 2,
      explanation: "Chilled ethanol makes DNA precipitate as fine threads that can be spooled out. (A) Cold water does not precipitate DNA. (B) and (D) An acid or a base would damage the DNA or alter the solution but not precipitate it as threads.",
      difficulty: "easy",
    },
  ],
};

export default paper;