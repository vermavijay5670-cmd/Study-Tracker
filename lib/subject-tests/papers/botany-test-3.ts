import type { TestPaper } from "../types";

/**
 * NEET UG Botany (Class 11 + 12 combined) - Test 3, 45 MCQs (NEET Botany section pattern).
 * Register it in ../index.ts. Scoring: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "botany-test-3",
  title: "Botany (Class 11 + 12) - Test 3",
  durationMinutes: 45,
  questions: [
    // ================= CLASS 11 =================
    // ---------- Biological Classification ----------
    {
      id: "q1",
      question: "Mesosomes of a bacterial cell are",
      options: [
        "storage granules",
        "clusters of ribosomes",
        "extensions of the plasma membrane in the form of vesicles, tubules and lamellae",
        "surface appendages used in conjugation",
      ],
      correctIndex: 2,
      explanation: "Mesosomes are infoldings of the plasma membrane that help in cell wall formation, DNA replication and respiration. (A) Storage granules are inclusion bodies. (B) Ribosomes are separate particles in the cytoplasm. (D) Pili are the surface appendages used in conjugation.",
      difficulty: "medium",
    },
    {
      id: "q2",
      question: "Which of the following is an edible ascomycete?",
      options: ["Agaricus", "Morchella", "Puccinia", "Ustilago"],
      correctIndex: 1,
      explanation: "Morchella (morel) is an edible ascomycete, like truffles. (A) Agaricus is edible but is a basidiomycete. (C) Puccinia causes rust and (D) Ustilago causes smut, and both are basidiomycetes that cause plant disease.",
      difficulty: "medium",
    },

    // ---------- Plant Kingdom ----------
    {
      id: "q3",
      question: "Which of the following green algae is colonial and motile?",
      options: ["Spirogyra", "Ulothrix", "Chara", "Volvox"],
      correctIndex: 3,
      explanation: "Volvox forms a hollow, spherical colony of flagellated cells that swims. (A) Spirogyra and (B) Ulothrix are filamentous and non-motile. (C) Chara is a multicellular, differentiated stonewort, not a colony.",
      difficulty: "easy",
    },
    {
      id: "q4",
      question: "In mosses, the first stage of the gametophyte, which develops directly from a spore, is the",
      options: ["protonema", "prothallus", "gemma", "capsule"],
      correctIndex: 0,
      explanation: "In mosses the spore germinates into a creeping, green, filamentous protonema, which later gives rise to the leafy stage. (B) The prothallus is the gametophyte of pteridophytes. (C) Gemmae are asexual buds of liverworts. (D) The capsule is part of the sporophyte.",
      difficulty: "easy",
    },
    {
      id: "q5",
      question: "The smallest flowering plant is",
      options: ["Eucalyptus", "Wolffia", "Sequoia", "Cycas"],
      correctIndex: 1,
      explanation: "Wolffia, a floating aquatic plant, is the smallest angiosperm. (A) Eucalyptus is among the tallest angiosperms. (C) Sequoia is a very tall gymnosperm. (D) Cycas is a medium-sized gymnosperm.",
      difficulty: "easy",
    },

    // ---------- Morphology of Flowering Plants ----------
    {
      id: "q6",
      question: "Which of the following is an endospermic dicot seed?",
      options: ["bean", "gram", "castor", "pea"],
      correctIndex: 2,
      explanation: "Castor is a dicot with a well-developed endosperm in the mature seed. (A) Bean, (B) gram and (D) pea are dicots whose endosperm is used up, so their cotyledons store food (non-endospermic).",
      difficulty: "medium",
    },
    {
      id: "q7",
      question: "Napiform roots are seen in",
      options: ["turnip", "carrot", "radish", "sweet potato"],
      correctIndex: 0,
      explanation: "In turnip the tap root is swollen and spherical, with a narrow tip, which is napiform. (B) Carrot has a conical root. (C) Radish has a fusiform root. (D) Sweet potato has adventitious tuberous roots.",
      difficulty: "medium",
    },
    {
      id: "q8",
      question: "The inflorescence of fig (Ficus) is a",
      options: ["catkin", "spike", "cyathium", "hypanthodium"],
      correctIndex: 3,
      explanation: "Ficus has a hypanthodium, a cup-shaped receptacle with the unisexual flowers on the inner wall. (A) Catkin is a drooping spike, as in mulberry. (B) Spike has sessile flowers on an elongated axis. (C) Cyathium is the inflorescence of Euphorbia.",
      difficulty: "medium",
    },

    // ---------- Anatomy of Flowering Plants ----------
    {
      id: "q9",
      question: "The gritty texture of guava pulp is due to",
      options: ["collenchyma", "sclereids", "parenchyma", "phloem fibres"],
      correctIndex: 1,
      explanation: "Sclereids (stone cells) have very thick lignified walls and a narrow lumen and make the pulp of guava, pear and sapota gritty. (A) Collenchyma gives flexible support to young stems and petioles. (C) Parenchyma has thin walls and is soft. (D) Phloem fibres are long cells of bast tissue and are not responsible for the gritty texture.",
      difficulty: "medium",
    },
    {
      id: "q10",
      type: "assertion-reason",
      question: "Assertion (A): In a dorsiventral leaf, the palisade parenchyma lies towards the upper (adaxial) epidermis.\nReason (R): The adaxial surface receives more light.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "In a dorsiventral leaf, the palisade cells, rich in chloroplasts, are arranged vertically below the adaxial epidermis, so A is true. The upper surface faces the light, so the position of chloroplast-rich palisade cells there is advantageous and R explains A. (B), (C) and (D) call a true statement false or deny the explanation.",
      difficulty: "medium",
    },

    // ---------- Cell, Biomolecules & Cell Cycle ----------
    {
      id: "q11",
      question: "The middle lamella, which cements neighbouring plant cells, is mainly made of",
      options: ["cellulose", "lignin", "calcium pectate", "hemicellulose"],
      correctIndex: 2,
      explanation: "The middle lamella is a layer of calcium pectate that holds the primary walls of adjacent cells together. (A) Cellulose is the main component of the primary wall. (B) Lignin thickens secondary walls of xylem and sclerenchyma. (D) Hemicellulose is a matrix polysaccharide of the wall.",
      difficulty: "easy",
    },
    {
      id: "q12",
      question: "Which of the following is a pyrimidine?",
      options: ["Adenine", "Guanine", "Inosine", "Thymine"],
      correctIndex: 3,
      explanation: "Thymine, along with cytosine and uracil, is a pyrimidine with a single-ring structure. (A) Adenine and (B) guanine are purines with a double-ring structure. (C) Inosine is a purine nucleoside, not a pyrimidine.",
      difficulty: "easy",
    },
    {
      id: "q13",
      type: "assertion-reason",
      question: "Assertion (A): The M phase is the shortest phase of the cell cycle.\nReason (R): Cytokinesis follows karyokinesis.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 1,
      explanation: "In a human cell that divides every 24 hours, the M phase lasts only about an hour, so it is the shortest phase and A is true. Cytokinesis does follow karyokinesis, so R is true. But the order of the two events says nothing about the duration of the M phase, so R does not explain A.",
      difficulty: "medium",
    },

    // ---------- Transport in Plants & Mineral Nutrition ----------
    {
      id: "q14",
      question: "The loss of water in liquid form from the tips of grass blades and leaf margins is called",
      options: ["transpiration", "bleeding", "evaporation", "guttation"],
      correctIndex: 3,
      explanation: "Guttation is the exudation of water droplets through hydathodes at leaf margins, caused by root pressure, mostly at night. (A) Transpiration is the loss of water as vapour. (B) Bleeding is the oozing of sap from a cut stem. (C) Evaporation is a physical process that is not specific to plants.",
      difficulty: "easy",
    },
    {
      id: "q15",
      question: "A mycorrhizal association is mainly beneficial to the plant for the absorption of",
      options: ["phosphorus", "sodium", "oxygen", "chlorine"],
      correctIndex: 0,
      explanation: "Mycorrhizal fungi increase the absorbing surface and help the plant absorb phosphorus and water, in exchange for carbohydrates. (B), (C) and (D) are not the main benefits of the association.",
      difficulty: "easy",
    },
    {
      id: "q16",
      type: "assertion-reason",
      question: "Assertion (A): Boron is required for pollen germination.\nReason (R): Boron is a macronutrient required in large amounts.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 2,
      explanation: "Boron is needed for pollen germination, cell elongation and membrane function, so A is true. R is false, because boron is a micronutrient (trace element) required in very small amounts.",
      difficulty: "medium",
    },

    // ---------- Photosynthesis ----------
    {
      id: "q17",
      question: "Ruben and Kamen, using ¹⁸O, showed that the oxygen released in photosynthesis comes from",
      options: ["CO₂", "water", "glucose", "atmospheric oxygen"],
      correctIndex: 1,
      explanation: "Labelled oxygen appeared in the O₂ released only when the water was labelled, which showed that O₂ comes from the splitting of water. (A) CO₂ oxygen ends up in carbohydrate and water. (C) Glucose is a product. (D) Atmospheric oxygen is not the source.",
      difficulty: "medium",
    },
    {
      id: "q18",
      question: "Photosystem I is mainly located in the",
      options: [
        "stroma lamellae",
        "grana lamellae only",
        "inner membrane of the chloroplast envelope",
        "thylakoid lumen",
      ],
      correctIndex: 0,
      explanation: "PS I is located mainly in the stroma lamellae (the unstacked thylakoids), while PS II is mainly in the grana lamellae. (B) Grana lamellae carry mostly PS II. (C) The envelope membranes do not contain the photosystems. (D) The lumen is the space inside the thylakoid and not a membrane.",
      difficulty: "hard",
    },

    // ---------- Respiration ----------
    {
      id: "q19",
      question: "Complex IV (cytochrome c oxidase) of the electron transport chain contains",
      options: [
        "Fe–S clusters only",
        "FAD",
        "ubiquinone",
        "cytochromes a and a₃ with two copper centres",
      ],
      correctIndex: 3,
      explanation: "Cytochrome c oxidase has cytochromes a and a₃ and two copper centres, and passes electrons to oxygen. (A) Fe–S clusters are present in complexes I and II. (B) FAD is the prosthetic group of succinate dehydrogenase (complex II). (C) Ubiquinone is a mobile carrier between complexes.",
      difficulty: "hard",
    },
    {
      id: "q20",
      question: "The respiratory pathway is called amphibolic because it",
      options: [
        "occurs in both the mitochondria and the cytoplasm",
        "uses both oxygen and carbon dioxide",
        "involves both catabolism and anabolism",
        "needs both ATP and NADPH",
      ],
      correctIndex: 2,
      explanation: "The pathway is amphibolic as it breaks down substrates (catabolism) and its intermediates are drawn off for the synthesis of fatty acids, amino acids and other compounds (anabolism). (A) The location in two compartments does not define the term. (B) It uses O₂ and releases CO₂. (D) It does not need NADPH.",
      difficulty: "medium",
    },

    // ---------- Plant Growth & Development ----------
    {
      id: "q21",
      question: "Growth in which only one of the two daughter cells continues to divide while the other differentiates, giving a linear curve, is called",
      options: ["geometric growth", "arithmetic growth", "exponential growth", "sigmoid growth"],
      correctIndex: 1,
      explanation: "In arithmetic growth, one daughter cell keeps dividing while the other differentiates, so length increases linearly, as in a root elongating at a constant rate. (A) and (C) In geometric (exponential) growth both daughter cells keep dividing. (D) A sigmoid curve is the overall pattern with lag, log and stationary phases.",
      difficulty: "medium",
    },
    {
      id: "q22",
      question: "The formation of interfascicular cambium from mature parenchyma cells is an example of",
      options: ["differentiation", "redifferentiation", "senescence", "dedifferentiation"],
      correctIndex: 3,
      explanation: "Differentiated parenchyma cells regain the capacity to divide, which is dedifferentiation, as in the formation of interfascicular cambium and cork cambium. (A) Differentiation is the process of becoming specialised. (B) Redifferentiation is the loss of the capacity to divide again in the dedifferentiated cells to form specialised tissue. (C) Senescence is ageing.",
      difficulty: "medium",
    },

    // ================= CLASS 12 =================
    // ---------- Sexual Reproduction in Flowering Plants ----------
    {
      id: "q23",
      question: "Each microspore mother cell gives rise to",
      options: [
        "a tetrad of four microspores",
        "two pollen grains",
        "eight pollen grains",
        "one pollen grain",
      ],
      correctIndex: 0,
      explanation: "A diploid microspore mother cell divides by meiosis to give four haploid microspores arranged as a tetrad, and each develops into a pollen grain. (B), (C) and (D) do not match the four products of meiosis.",
      difficulty: "easy",
    },
    {
      id: "q24",
      question: "The ovule of most angiosperms is anatropous, in which",
      options: [
        "the body is straight and the micropyle is opposite the funicle",
        "the micropyle is at the chalazal end",
        "the body is inverted so that the micropyle lies close to the funicle",
        "the body is curved like a horseshoe",
      ],
      correctIndex: 2,
      explanation: "In an anatropous ovule the body is turned through 180°, so the micropyle lies close to the funicle (hilum). (A) describes the orthotropous ovule. (B) The micropyle is opposite the chalaza in all ovule types. (D) A horseshoe-shaped body is the campylotropous ovule.",
      difficulty: "medium",
    },
    {
      id: "q25",
      question: "Removal of anthers from a bisexual flower bud before the anthers dehisce is called",
      options: ["bagging", "emasculation", "rebagging", "pollination"],
      correctIndex: 1,
      explanation: "Emasculation prevents self-pollination in artificial hybridisation by removing the anthers with forceps. (A) Bagging is covering the emasculated flower with a bag. (C) Rebagging is covering the flower again after pollination. (D) Pollination is the transfer of pollen to the stigma.",
      difficulty: "easy",
    },
    {
      id: "q26",
      type: "assertion-reason",
      question: "Assertion (A): Banana fruits contain many seeds.\nReason (R): Banana is a parthenocarpic fruit.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 3,
      explanation: "A is false, because banana is seedless. R is true, since parthenocarpy is the development of fruit without fertilisation, which results in seedless fruits.",
      difficulty: "medium",
    },

    // ---------- Principles of Inheritance & Variation ----------
    {
      id: "q27",
      question: "The chromosomal theory of inheritance was proposed by",
      options: [
        "Sutton and Boveri",
        "Morgan",
        "Mendel",
        "Correns",
      ],
      correctIndex: 0,
      explanation: "Sutton and Boveri (1902) noted that chromosomes behave like Mendel's factors and proposed the chromosomal theory of inheritance. (B) Morgan later gave experimental proof using Drosophila. (C) Mendel proposed the laws of inheritance. (D) Correns was one of the three scientists who rediscovered Mendel's work.",
      difficulty: "easy",
    },
    {
      id: "q28",
      question: "The number of possible genotypes for the ABO blood group system in humans is",
      options: ["3", "4", "6", "8"],
      correctIndex: 2,
      explanation: "With three alleles Iᴬ, Iᴮ and i, the genotypes are IᴬIᴬ, Iᴬi, IᴮIᴮ, Iᴮi, IᴬIᴮ and ii, so there are 6. (A) 3 is the number of alleles. (B) 4 is the number of phenotypes (A, B, AB, O). (D) 8 is not possible with three alleles.",
      difficulty: "easy",
    },
    {
      id: "q29",
      question: "Human skin colour is an example of",
      options: [
        "pleiotropy",
        "polygenic inheritance",
        "codominance",
        "incomplete dominance",
      ],
      correctIndex: 1,
      explanation: "Skin colour is controlled by several genes whose effects add up, which is polygenic inheritance. (A) Pleiotropy is a single gene affecting multiple traits, as in phenylketonuria. (C) Codominance means that both alleles of a gene are expressed. (D) Incomplete dominance gives an intermediate phenotype for a single gene.",
      difficulty: "medium",
    },
    {
      id: "q30",
      question: "Two genes that are tightly linked show",
      options: [
        "a low recombination frequency",
        "a high recombination frequency",
        "independent assortment",
        "50% recombination",
      ],
      correctIndex: 0,
      explanation: "Genes that are close together on a chromosome are tightly linked and are rarely separated by crossing over, so recombination is low. (B) High recombination means that the genes are far apart. (C) and (D) Independent assortment, with 50% recombinants, is what unlinked genes show.",
      difficulty: "medium",
    },

    // ---------- Molecular Basis of Inheritance ----------
    {
      id: "q31",
      question: "In a B-DNA double helix, one complete turn contains",
      options: ["5 bp", "8 bp", "12 bp", "10 bp"],
      correctIndex: 3,
      explanation: "In the Watson–Crick model, the pitch of the helix is 3.4 nm with a rise of 0.34 nm per base pair, so each turn has 10 bp. (A), (B) and (C) do not match the pitch and rise.",
      difficulty: "easy",
    },
    {
      id: "q32",
      question: "If the adenine content of a double-stranded DNA is 30%, its guanine content is",
      options: ["30%", "40%", "20%", "10%"],
      correctIndex: 2,
      explanation: "By Chargaff's rule, A = T = 30%, so A + T = 60%, and G + C = 40%, which makes G = 20%. (A) 30% would equal adenine. (B) 40% is the G + C total. (D) 10% does not fit the base-pairing rule.",
      difficulty: "medium",
    },
    {
      id: "q33",
      question: "In eukaryotes, RNA polymerase II transcribes",
      options: [
        "rRNA",
        "hnRNA (the precursor of mRNA)",
        "tRNA",
        "5S rRNA",
      ],
      correctIndex: 1,
      explanation: "RNA polymerase II transcribes the precursor of mRNA, hnRNA, and some snRNAs. (A) RNA polymerase I transcribes the large rRNAs (28S, 18S, 5.8S). (C) and (D) RNA polymerase III transcribes tRNA, 5S rRNA and snRNAs.",
      difficulty: "medium",
    },
    {
      id: "q34",
      question: "Untranslated regions (UTRs) of an mRNA are present",
      options: [
        "at both the 5′ end (before the start codon) and the 3′ end (after the stop codon)",
        "only within the coding region",
        "only at the 3′ end",
        "only in the introns",
      ],
      correctIndex: 0,
      explanation: "mRNA has a 5′-UTR before the start codon and a 3′-UTR after the stop codon, and both are required for efficient translation. (B) The coding region is translated. (C) The 5′-UTR is also present. (D) Introns are removed from hnRNA and are not part of the mature mRNA.",
      difficulty: "medium",
    },
    {
      id: "q35",
      question: "According to the Human Genome Project, which human chromosome has the highest number of genes?",
      options: ["Chromosome X", "Chromosome 22", "Chromosome Y", "Chromosome 1"],
      correctIndex: 3,
      explanation: "Chromosome 1 has the most genes (about 2968), as reported by the project. (A) The X chromosome has fewer genes than chromosome 1. (B) Chromosome 22 is one of the smallest autosomes. (C) The Y chromosome has the fewest genes (about 231).",
      difficulty: "medium",
    },

    // ---------- Microbes in Human Welfare ----------
    {
      id: "q36",
      question: "Acetic acid is produced by",
      options: [
        "Aspergillus niger",
        "Clostridium butylicum",
        "Acetobacter aceti",
        "Lactobacillus",
      ],
      correctIndex: 2,
      explanation: "Acetobacter aceti is the bacterium that makes acetic acid (vinegar). (A) Aspergillus niger makes citric acid. (B) Clostridium butylicum makes butyric acid. (D) Lactobacillus makes lactic acid.",
      difficulty: "easy",
    },
    {
      id: "q37",
      question: "The main component of biogas is",
      options: ["carbon dioxide", "methane", "hydrogen sulphide", "ethane"],
      correctIndex: 1,
      explanation: "Biogas is mainly methane (about 50–70%), made by methanogens in anaerobic digestion. (A) CO₂ is also present but is not the main component. (C) H₂S is a minor impurity. (D) Ethane is not a main product.",
      difficulty: "easy",
    },

    // ---------- Organisms & Populations ----------
    {
      id: "q38",
      question: "A state of suspended development shown by zooplankton under unfavourable conditions is",
      options: ["hibernation", "aestivation", "migration", "diapause"],
      correctIndex: 3,
      explanation: "Diapause is a stage of suspended development, seen in many zooplankton species. (A) Hibernation is a winter dormancy, as in bears. (B) Aestivation is a summer dormancy, as in snails and fishes. (C) Migration is a temporary movement of animals to a more suitable place.",
      difficulty: "medium",
    },
    {
      id: "q39",
      question: "Gause's competitive exclusion principle states that",
      options: [
        "two closely related species competing for the same limited resources cannot coexist indefinitely",
        "two species can always share a resource equally",
        "competition increases the number of species",
        "predators eliminate all competitors",
      ],
      correctIndex: 0,
      explanation: "Gause showed with Paramecium species that the competitively superior species eventually eliminates the other when they compete for the same limited resource. (B), (C) and (D) are not what the principle states.",
      difficulty: "medium",
    },

    // ---------- Ecosystem ----------
    {
      id: "q40",
      question: "Photosynthetically active radiation (PAR) forms",
      options: [
        "more than 90% of incident solar radiation",
        "about 75% of incident solar radiation",
        "less than 50% of incident solar radiation",
        "exactly 100% of incident solar radiation",
      ],
      correctIndex: 2,
      explanation: "Less than 50% of the incident solar radiation is PAR, and only about 2–10% of it is captured by plants. (A), (B) and (D) overstate the share.",
      difficulty: "medium",
    },
    {
      id: "q41",
      question: "The pioneer species in primary succession on a bare rock are",
      options: ["mosses", "grasses", "shrubs", "lichens"],
      correctIndex: 3,
      explanation: "Lichens secrete acids that weather the rock and form soil, so they are the pioneers on bare rock. (A) Mosses come next. (B) Grasses and (C) shrubs appear much later in the sequence.",
      difficulty: "easy",
    },

    // ---------- Biodiversity & Conservation ----------
    {
      id: "q42",
      question: "Which of the following is NOT a component of the 'Evil Quartet'?",
      options: [
        "Habitat loss and fragmentation",
        "Rapid speciation",
        "Over-exploitation",
        "Co-extinctions",
      ],
      correctIndex: 1,
      explanation: "The Evil Quartet is habitat loss and fragmentation, over-exploitation, alien species invasions and co-extinctions, which together cause biodiversity loss. Rapid speciation adds species and is not one of the causes of loss. (A), (C) and (D) are components of the quartet.",
      difficulty: "medium",
    },

    // ---------- Biotechnology: Principles & Processes ----------
    {
      id: "q43",
      question: "In the biolistic (gene gun) method, the DNA is coated on",
      options: [
        "gold or tungsten particles",
        "liposomes",
        "silver nitrate",
        "calcium phosphate",
      ],
      correctIndex: 0,
      explanation: "In the gene gun method, DNA-coated microscopic particles of gold or tungsten are shot into plant cells at high velocity. (B) Liposomes are used in lipofection. (C) Silver nitrate is not a DNA carrier. (D) Calcium phosphate is used for chemical transfection of cultured animal cells.",
      difficulty: "medium",
    },
    {
      id: "q44",
      question: "During gel electrophoresis, DNA fragments move towards the",
      options: ["cathode", "neither electrode", "anode", "both electrodes equally"],
      correctIndex: 2,
      explanation: "DNA is negatively charged because of its phosphate groups, so the fragments move towards the positive electrode (anode), with smaller fragments moving faster. (A) The cathode is the negative electrode and repels DNA. (B) and (D) DNA moves in an electric field.",
      difficulty: "easy",
    },
    {
      id: "q45",
      question: "The first recombinant DNA was constructed by",
      options: [
        "Watson and Crick",
        "Stanley Cohen and Herbert Boyer",
        "Hershey and Chase",
        "Meselson and Stahl",
      ],
      correctIndex: 1,
      explanation: "In 1972 Cohen and Boyer joined an antibiotic resistance gene to a plasmid of Salmonella typhimurium, making the first recombinant DNA. (A) Watson and Crick proposed the double helix model. (C) Hershey and Chase showed that DNA is the genetic material of the phage. (D) Meselson and Stahl proved semiconservative replication.",
      difficulty: "easy",
    },
  ],
};

export default paper;