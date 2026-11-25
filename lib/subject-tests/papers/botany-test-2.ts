import type { TestPaper } from "../types";

/**
 * NEET UG Botany (Class 11 + 12 combined) - Test 2, 45 MCQs (NEET Botany section pattern).
 * Register it in ../index.ts. Scoring: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "botany-test-2",
  title: "Botany (Class 11 + 12) - Test 2",
  durationMinutes: 45,
  questions: [
    // ================= CLASS 11 =================
    // ---------- Living World & Biological Classification ----------
    {
      id: "q1",
      question: "In the nitrogen cycle, nitrite is oxidised to nitrate by",
      options: ["Nitrosomonas", "Rhizobium", "Azotobacter", "Nitrobacter"],
      correctIndex: 3,
      explanation: "Nitrobacter oxidises nitrite (NO₂⁻) to nitrate (NO₃⁻), the last step of nitrification. (A) Nitrosomonas oxidises ammonia to nitrite, the earlier step. (B) Rhizobium is a symbiotic nitrogen fixer in legume nodules. (C) Azotobacter is a free-living nitrogen fixer.",
      difficulty: "easy",
    },
    {
      id: "q2",
      question: "The five-kingdom system of classification was proposed by",
      options: [
        "R. H. Whittaker",
        "Carolus Linnaeus",
        "Ernst Haeckel",
        "Aristotle",
      ],
      correctIndex: 0,
      explanation: "R. H. Whittaker proposed the five kingdoms (Monera, Protista, Fungi, Plantae, Animalia) in 1969. (B) Linnaeus used two kingdoms, Plantae and Animalia. (C) Haeckel proposed three kingdoms with Protista as the third. (D) Aristotle classified organisms mainly by form and habit.",
      difficulty: "easy",
    },

    // ---------- Plant Kingdom ----------
    {
      id: "q3",
      question: "Agar is obtained from",
      options: ["Laminaria", "Chlorella", "Gelidium", "Spirogyra"],
      correctIndex: 2,
      explanation: "Agar is extracted from the red algae Gelidium and Gracilaria. (A) Laminaria is a brown alga used for algin and as a food. (B) Chlorella is a green alga used as single-cell protein. (D) Spirogyra is a filamentous green alga and is not used for agar.",
      difficulty: "easy",
    },
    {
      id: "q4",
      question: "Vascular tissue first appears in",
      options: ["bryophytes", "pteridophytes", "algae", "fungi"],
      correctIndex: 1,
      explanation: "Pteridophytes are the first land plants with well-differentiated xylem and phloem. (A) Bryophytes lack true vascular tissue. (C) Algae and (D) fungi are thallophytes with no vascular tissue.",
      difficulty: "easy",
    },
    {
      id: "q5",
      question: "In Cycas, the male cones and the megasporophylls are borne on different plants, so Cycas is",
      options: ["dioecious", "monoecious", "bisexual", "homosporous"],
      correctIndex: 0,
      explanation: "Cycas has separate male and female plants, which is the dioecious condition. (B) Pinus is monoecious, with male and female cones on the same tree. (C) Bisexual is a term for flowers with both stamens and carpels. (D) Gymnosperms are heterosporous.",
      difficulty: "medium",
    },

    // ---------- Morphology of Flowering Plants ----------
    {
      id: "q6",
      question: "The edible part of the potato is a modified",
      options: ["tuberous root", "rhizome", "corm", "stem tuber"],
      correctIndex: 3,
      explanation: "The potato is a stem tuber, formed by the swollen tips of underground stolons, and the 'eyes' are nodes with buds. (A) A tuberous root, such as sweet potato, is a root. (B) Ginger and turmeric are rhizomes. (C) Colocasia is a corm.",
      difficulty: "easy",
    },
    {
      id: "q7",
      question: "Whorled phyllotaxy is seen in",
      options: ["mustard", "Alstonia", "guava", "china rose"],
      correctIndex: 1,
      explanation: "Alstonia has more than two leaves at each node, arranged in a whorl. (A) Mustard and (D) china rose have alternate phyllotaxy. (C) Guava has opposite phyllotaxy.",
      difficulty: "easy",
    },
    {
      id: "q8",
      question: "An apocarpous gynoecium is found in",
      options: ["mustard", "tomato", "lotus", "papaya"],
      correctIndex: 2,
      explanation: "In lotus, the carpels are free, so the gynoecium is apocarpous. (A) Mustard, (B) tomato and (D) papaya have fused carpels, so they are syncarpous.",
      difficulty: "medium",
    },

    // ---------- Anatomy of Flowering Plants ----------
    {
      id: "q9",
      type: "assertion-reason",
      question: "Assertion (A): Root hairs help in the absorption of water and minerals.\nReason (R): Root hairs greatly increase the surface area of the root for absorption.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "Root hairs are unicellular extensions of epidermal cells and absorb water and minerals, and because they increase the absorbing surface area, R explains A. (B) is wrong since R is the reason. (C) and (D) call a true statement false.",
      difficulty: "easy",
    },
    {
      id: "q10",
      question: "Lenticels are",
      options: [
        "openings in the leaf epidermis",
        "pores in the xylem",
        "lens-shaped openings in the periderm of woody stems that permit gas exchange",
        "water-secreting pores at the leaf margin",
      ],
      correctIndex: 2,
      explanation: "Lenticels are lens-shaped openings formed in the cork (periderm) of woody stems, and they allow exchange of gases between the inner tissues and the atmosphere. (A) Stomata are the openings of the leaf epidermis. (B) Pores in the xylem are not lenticels. (D) Water-secreting pores are hydathodes.",
      difficulty: "medium",
    },

    // ---------- Cell: The Unit of Life, Biomolecules & Cell Cycle ----------
    {
      id: "q11",
      question: "The arrangement of microtubules in a cilium or flagellum is",
      options: ["9 + 0", "9 + 1", "9 + 3", "9 + 2"],
      correctIndex: 3,
      explanation: "A cilium or flagellum has an axoneme with nine peripheral doublets and two central singlet microtubules (9 + 2). (A) The 9 + 0 arrangement, with triplets, is that of the centriole. (B) and (C) are not found in cilia.",
      difficulty: "easy",
    },
    {
      id: "q12",
      question: "Ligases catalyse",
      options: [
        "the removal of groups from substrates without hydrolysis",
        "the linking of two compounds, usually with the use of ATP",
        "the interconversion of optical or geometric isomers",
        "the transfer of a group between a pair of substrates",
      ],
      correctIndex: 1,
      explanation: "Ligases join two compounds, for example DNA ligase joins DNA fragments, and the reaction is coupled to ATP breakdown. (A) describes lyases. (C) describes isomerases. (D) describes transferases.",
      difficulty: "medium",
    },
    {
      id: "q13",
      type: "assertion-reason",
      question: "Assertion (A): Meiosis I is called a reductional division.\nReason (R): Crossing over occurs during prophase I of meiosis.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 1,
      explanation: "In meiosis I, homologous chromosomes separate, which halves the chromosome number, so A is true. Crossing over does occur in prophase I, so R is true. But crossing over only shuffles genetic material and has nothing to do with halving the chromosome number, so R does not explain A.",
      difficulty: "medium",
    },

    // ---------- Transport in Plants & Mineral Nutrition ----------
    {
      id: "q14",
      question: "The water channel proteins present in the cell membrane are called",
      options: ["aquaporins", "porins", "permeases", "ionophores"],
      correctIndex: 0,
      explanation: "Aquaporins are membrane proteins that form pores for the rapid movement of water. (B) Porins are large channels in the outer membrane of bacteria, mitochondria and plastids. (C) Permeases are carrier proteins for specific solutes. (D) Ionophores are molecules that carry ions across a membrane.",
      difficulty: "medium",
    },
    {
      id: "q15",
      question: "A plant cell placed in a hypertonic solution undergoes",
      options: ["deplasmolysis", "turgidity", "plasmolysis", "lysis"],
      correctIndex: 2,
      explanation: "In a hypertonic solution, water leaves the cell by exosmosis and the protoplast shrinks away from the cell wall, which is plasmolysis. (A) Deplasmolysis is the recovery of the cell in a hypotonic solution. (B) Turgidity results when water enters. (D) Plant cells do not burst, because of the cell wall.",
      difficulty: "easy",
    },
    {
      id: "q16",
      question: "Julius von Sachs is credited with demonstrating",
      options: [
        "that plants release oxygen",
        "that light is needed to purify air",
        "root pressure in plants",
        "that plants can be grown in a nutrient solution without soil",
      ],
      correctIndex: 3,
      explanation: "Julius von Sachs (1860) showed that plants can be grown in a defined nutrient solution without soil, the basis of hydroponics. (A) Priestley discovered that plants release oxygen. (B) Ingenhousz showed that light is needed for plants to purify air. (C) Stephen Hales studied root pressure and transpiration.",
      difficulty: "medium",
    },

    // ---------- Photosynthesis ----------
    {
      id: "q17",
      question: "T. W. Engelmann's experiment with Cladophora and aerobic bacteria showed that photosynthesis is maximum in",
      options: [
        "blue and red light",
        "green light",
        "yellow light",
        "far-red light",
      ],
      correctIndex: 0,
      explanation: "The bacteria gathered in the blue and red regions of the split spectrum, where oxygen release was highest, matching the absorption peaks of chlorophyll. (B) Green is mostly reflected. (C) Yellow is poorly absorbed. (D) Far-red light is too low in energy for normal photosynthesis.",
      difficulty: "medium",
    },
    {
      id: "q18",
      question: "The primary CO₂ acceptor in C₄ plants is",
      options: ["RuBP", "phosphoenolpyruvate", "3-phosphoglyceric acid", "oxaloacetic acid"],
      correctIndex: 1,
      explanation: "In the mesophyll cells of C₄ plants, PEP is the primary CO₂ acceptor, and PEP carboxylase fixes CO₂ to form oxaloacetate. (A) RuBP is the acceptor in the Calvin cycle, in the bundle sheath cells of C₄ plants. (C) PGA is the first product in C₃ plants. (D) OAA is the first stable product, not the acceptor.",
      difficulty: "easy",
    },

    // ---------- Respiration ----------
    {
      id: "q19",
      question: "The link reaction between glycolysis and the Krebs cycle forms",
      options: ["citrate", "oxaloacetate", "acetyl CoA", "succinyl CoA"],
      correctIndex: 2,
      explanation: "Pyruvate is oxidatively decarboxylated by the pyruvate dehydrogenase complex to acetyl CoA, CO₂ and NADH. (A) Citrate is formed when acetyl CoA combines with oxaloacetate in the cycle. (B) Oxaloacetate is the acceptor in the cycle. (D) Succinyl CoA is a cycle intermediate.",
      difficulty: "easy",
    },
    {
      id: "q20",
      question: "In the Krebs cycle, substrate-level phosphorylation occurs in the conversion of",
      options: [
        "citrate to isocitrate",
        "isocitrate to α-ketoglutarate",
        "fumarate to malate",
        "succinyl CoA to succinic acid",
      ],
      correctIndex: 3,
      explanation: "The conversion of succinyl CoA to succinate is coupled with the formation of GTP (or ATP) by substrate-level phosphorylation. (A) Citrate to isocitrate is an isomerisation. (B) Isocitrate to α-ketoglutarate is an oxidative decarboxylation that forms NADH. (C) Fumarate to malate is a hydration step.",
      difficulty: "hard",
    },

    // ---------- Plant Growth & Development ----------
    {
      id: "q21",
      question: "2,4-D is widely used as a",
      options: [
        "selective weedicide that kills dicot weeds",
        "fruit ripening agent",
        "seed dormancy-breaking agent",
        "senescence-promoting agent",
      ],
      correctIndex: 0,
      explanation: "2,4-D is a synthetic auxin that kills broad-leaved (dicot) weeds without harming monocot crops. (B) Ethylene-releasing compounds ripen fruit. (C) Gibberellins and cytokinins break dormancy. (D) Abscisic acid and ethylene promote senescence.",
      difficulty: "easy",
    },
    {
      id: "q22",
      type: "assertion-reason",
      question: "Assertion (A): Phytochromes are involved in photoperiodic responses of plants.\nReason (R): Phytochrome is a pigment that absorbs blue light.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 2,
      explanation: "Phytochromes help plants detect day length and take part in photoperiodic flowering and seed germination, so A is true. R is false, because phytochrome absorbs red and far-red light (Pr ⇌ Pfr), while blue light is absorbed by cryptochromes and phototropins.",
      difficulty: "medium",
    },

    // ================= CLASS 12 =================
    // ---------- Sexual Reproduction in Flowering Plants ----------
    {
      id: "q23",
      question: "The innermost wall layer of the microsporangium, which nourishes the developing pollen grains, is the",
      options: ["endothecium", "tapetum", "epidermis", "middle layers"],
      correctIndex: 1,
      explanation: "The tapetum is the innermost layer of the anther wall, and it nourishes the developing microspore mother cells and pollen grains. (A) The endothecium is the layer below the epidermis and helps in anther dehiscence. (C) The epidermis is the outermost protective layer. (D) The middle layers are thin layers between the endothecium and the tapetum.",
      difficulty: "easy",
    },
    {
      id: "q24",
      question: "The hard outer layer of a pollen grain, the exine, is made of",
      options: ["cellulose", "pectin", "lignin", "sporopollenin"],
      correctIndex: 3,
      explanation: "The exine is made of sporopollenin, one of the most resistant organic materials known, which can withstand high temperature, acids and alkalis. (A) Cellulose and (B) pectin are components of the intine. (C) Lignin is a component of secondary walls of xylem.",
      difficulty: "easy",
    },
    {
      id: "q25",
      question: "Cleistogamous flowers are",
      options: [
        "closed flowers that always self-pollinate",
        "open flowers that are cross-pollinated",
        "wind-pollinated flowers",
        "water-pollinated flowers",
      ],
      correctIndex: 0,
      explanation: "Cleistogamous flowers, such as those of Viola, Oxalis and Commelina, never open, so pollen is transferred to the stigma of the same flower and seed set is assured. (B) Cross-pollinated flowers are chasmogamous. (C) and (D) are modes of pollen transfer not tied to the closed condition.",
      difficulty: "easy",
    },
    {
      id: "q26",
      question: "Entry of the pollen tube into the ovule through the micropyle is called",
      options: ["chalazogamy", "mesogamy", "porogamy", "apogamy"],
      correctIndex: 2,
      explanation: "In porogamy, the pollen tube enters the ovule through the micropyle, which is the common route. (A) In chalazogamy, it enters through the chalaza, as in Casuarina. (B) In mesogamy, it enters through the integument or funicle, as in Cucurbita. (D) Apogamy is the development of a sporophyte from a gametophyte cell without fertilisation.",
      difficulty: "medium",
    },
    {
      id: "q27",
      question: "The single shield-shaped cotyledon of a grass embryo, as in maize, is called the",
      options: ["coleoptile", "scutellum", "coleorhiza", "plumule"],
      correctIndex: 1,
      explanation: "The scutellum is the single cotyledon of a monocot grass embryo, lying towards one side of the embryonal axis. (A) The coleoptile is the sheath that protects the plumule. (C) The coleorhiza is the sheath that covers the radicle. (D) The plumule is the embryonic shoot.",
      difficulty: "medium",
    },

    // ---------- Principles of Inheritance & Variation ----------
    {
      id: "q28",
      question: "A person with blood group AB carries the alleles Iᴬ and Iᴮ, which show",
      options: [
        "codominance",
        "incomplete dominance",
        "complete dominance",
        "epistasis",
      ],
      correctIndex: 0,
      explanation: "Iᴬ and Iᴮ are both expressed in the heterozygote, giving AB, so the alleles are codominant. (B) Incomplete dominance gives an intermediate phenotype, as in Antirrhinum. (C) In complete dominance only one allele is expressed. (D) Epistasis is an interaction between different genes.",
      difficulty: "easy",
    },
    {
      id: "q29",
      type: "assertion-reason",
      question: "Assertion (A): Individuals with Turner's syndrome are males.\nReason (R): They have a chromosome count of 45 with a single X (45, X0).",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 3,
      explanation: "A is false, because Turner's syndrome individuals are sterile females with rudimentary ovaries and a short stature. R is true, since the karyotype is 45 with only one X chromosome (monosomy of the sex chromosome).",
      difficulty: "medium",
    },
    {
      id: "q30",
      question: "Phenylketonuria is",
      options: [
        "an X-linked dominant disorder",
        "a Y-linked disorder",
        "an autosomal recessive disorder",
        "a chromosomal disorder caused by trisomy",
      ],
      correctIndex: 2,
      explanation: "Phenylketonuria is an autosomal recessive Mendelian disorder caused by a defective gene for phenylalanine hydroxylase. (A) It is not carried on the X chromosome. (B) Y-linked traits are passed only from father to son. (D) It is a single-gene disorder, not a chromosomal disorder.",
      difficulty: "medium",
    },
    {
      id: "q31",
      question: "A cross between an F₁ hybrid and its homozygous recessive parent is called a",
      options: ["reciprocal cross", "test cross", "monohybrid cross", "dihybrid cross"],
      correctIndex: 1,
      explanation: "A test cross with the homozygous recessive parent reveals whether the dominant phenotype is homozygous or heterozygous. (A) A reciprocal cross swaps the sexes of the parents. (C) and (D) are named for the number of traits followed, one or two, and not for the type of parent.",
      difficulty: "easy",
    },

    // ---------- Molecular Basis of Inheritance ----------
    {
      id: "q32",
      question: "A nucleosome contains about",
      options: [
        "200 bp of DNA wrapped around a histone octamer",
        "50 bp of DNA wrapped around two histones",
        "600 bp of DNA wrapped around a histone dimer",
        "1000 bp of DNA wrapped around a histone tetramer",
      ],
      correctIndex: 0,
      explanation: "A nucleosome has about 200 bp of DNA wrapped around a histone octamer made of two each of H2A, H2B, H3 and H4. (B), (C) and (D) give the wrong length of DNA and the wrong histone assembly.",
      difficulty: "medium",
    },
    {
      id: "q33",
      question: "Okazaki fragments on the lagging strand are joined by",
      options: ["DNA polymerase", "helicase", "primase", "DNA ligase"],
      correctIndex: 3,
      explanation: "DNA ligase seals the nicks and joins the Okazaki fragments into a continuous strand. (A) DNA polymerase synthesises the fragments. (B) Helicase unwinds the double helix. (C) Primase makes the RNA primers.",
      difficulty: "easy",
    },
    {
      id: "q34",
      question: "The 'adapter molecule' that carries amino acids during translation is",
      options: ["mRNA", "tRNA", "rRNA", "hnRNA"],
      correctIndex: 1,
      explanation: "Crick proposed an adapter that reads the codon on the mRNA and carries the matching amino acid, and this is the tRNA with its anticodon. (A) mRNA carries the codons. (C) rRNA is a structural and catalytic part of the ribosome. (D) hnRNA is the primary transcript in eukaryotes.",
      difficulty: "easy",
    },
    {
      id: "q35",
      question: "DNA fingerprinting is based on polymorphism in",
      options: [
        "exons",
        "rRNA genes",
        "variable number tandem repeats (VNTRs)",
        "promoters",
      ],
      correctIndex: 2,
      explanation: "DNA fingerprinting uses VNTRs, short sequences repeated a variable number of times in non-coding DNA, whose number differs from person to person. (A) Exons are conserved coding sequences. (B) rRNA genes are conserved. (D) Promoters are not the basis of the technique.",
      difficulty: "medium",
    },
    {
      id: "q36",
      question: "The codon AUG codes for",
      options: [
        "methionine and also acts as the initiation codon",
        "tryptophan",
        "a stop signal",
        "valine",
      ],
      correctIndex: 0,
      explanation: "AUG codes for methionine and also serves as the start codon. (B) Tryptophan is coded only by UGG. (C) The stop codons are UAA, UAG and UGA. (D) Valine is coded by GUU, GUC, GUA and GUG.",
      difficulty: "easy",
    },

    // ---------- Microbes in Human Welfare ----------
    {
      id: "q37",
      question: "Flocs, which are masses of bacteria associated with fungal filaments, form during",
      options: [
        "primary treatment of sewage",
        "anaerobic sludge digestion",
        "screening of sewage",
        "secondary (biological) treatment of sewage",
      ],
      correctIndex: 3,
      explanation: "In secondary treatment, the effluent is aerated in large tanks, and aerobic microbes grow rapidly into flocs that consume the organic matter and lower the BOD. (A) and (C) Primary treatment is physical removal of floating and suspended solids. (B) Anaerobic sludge digestion happens later, in anaerobic digesters.",
      difficulty: "medium",
    },
    {
      id: "q38",
      question: "Which of the following is used as a biocontrol agent against butterfly caterpillars?",
      options: [
        "Glomus",
        "Azotobacter",
        "Bacillus thuringiensis",
        "Rhizobium",
      ],
      correctIndex: 2,
      explanation: "Bacillus thuringiensis (Bt) spores are sprayed on plants, and the toxin kills caterpillars of butterflies and moths. (A) Glomus is a mycorrhizal fungus that helps absorption of phosphorus. (B) Azotobacter and (D) Rhizobium are biofertilisers that fix nitrogen.",
      difficulty: "easy",
    },

    // ---------- Organisms & Populations ----------
    {
      id: "q39",
      question: "Allen's rule states that mammals from colder climates generally have",
      options: [
        "longer ears and limbs",
        "shorter ears and limbs",
        "a thinner layer of fat",
        "a larger surface area of the body",
      ],
      correctIndex: 1,
      explanation: "Allen's rule says that mammals from colder climates have shorter ears and limbs, which reduces heat loss. (A) and (D) would increase heat loss. (C) Mammals in cold climates tend to have more insulation, not less.",
      difficulty: "medium",
    },
    {
      id: "q40",
      question: "The population density of a habitat can increase through",
      options: [
        "natality and immigration",
        "mortality and emigration",
        "mortality and immigration",
        "natality and emigration",
      ],
      correctIndex: 0,
      explanation: "Density rises with natality (births) and immigration (individuals entering from other populations). (B) Mortality and emigration reduce density. (C) and (D) each combine one increasing factor with one decreasing factor, so they do not guarantee an increase.",
      difficulty: "easy",
    },

    // ---------- Ecosystem ----------
    {
      id: "q41",
      question: "The process of formation of the dark-coloured, amorphous humus is called",
      options: ["fragmentation", "leaching", "humification", "mineralisation"],
      correctIndex: 2,
      explanation: "Humification is the accumulation of humus, a dark amorphous substance resistant to microbial action. (A) Fragmentation breaks detritus into smaller particles. (B) Leaching is the washing of soluble nutrients into the soil. (D) Mineralisation is the degradation of humus to release inorganic nutrients.",
      difficulty: "medium",
    },
    {
      id: "q42",
      question: "Which nutrient cycle has its reservoir in sedimentary rocks and no significant atmospheric component?",
      options: ["Carbon cycle", "Nitrogen cycle", "Water cycle", "Phosphorus cycle"],
      correctIndex: 3,
      explanation: "The phosphorus cycle is a sedimentary cycle, as phosphorus is released by the weathering of rocks and there is no gaseous phase in the atmosphere. (A) and (B) Carbon and nitrogen have large atmospheric reservoirs. (C) The water cycle has a major atmospheric phase.",
      difficulty: "easy",
    },

    // ---------- Biodiversity & Conservation ----------
    {
      id: "q43",
      question: "Which of the following is an ex situ conservation method?",
      options: [
        "National park",
        "Cryopreservation of gametes",
        "Sacred groves",
        "Biosphere reserve",
      ],
      correctIndex: 1,
      explanation: "Ex situ conservation protects species outside their natural habitat, for example by cryopreservation of gametes, seed banks and zoos. (A), (C) and (D) conserve species in their natural habitats, so they are in situ methods.",
      difficulty: "easy",
    },

    // ---------- Biotechnology: Principles & Processes ----------
    {
      id: "q44",
      question: "In insertional inactivation, the recombinant colonies lose the expression of",
      options: [
        "the gene into which the foreign DNA is inserted",
        "the origin of replication",
        "all the genes of the plasmid",
        "only the rop gene",
      ],
      correctIndex: 0,
      explanation: "When foreign DNA is inserted within a marker gene, such as the one for an antibiotic resistance or β-galactosidase, that gene is disrupted, which lets recombinants be told apart from non-recombinants. (B) The ori is needed for replication and is not disrupted. (C) Only the interrupted gene loses function. (D) The rop gene is not the gene used for this selection.",
      difficulty: "medium",
    },
    {
      id: "q45",
      question: "The separation and purification of the product after the biosynthetic stage is called",
      options: [
        "upstream processing",
        "transformation",
        "cloning",
        "downstream processing",
      ],
      correctIndex: 3,
      explanation: "Downstream processing covers separation, purification, formulation with preservatives and quality control before marketing. (A) Upstream processing is the growth stage in the bioreactor. (B) Transformation is the uptake of DNA by a cell. (C) Cloning is making identical copies of DNA or cells.",
      difficulty: "easy",
    },
  ],
};

export default paper;