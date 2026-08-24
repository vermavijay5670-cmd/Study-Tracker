import type { Question } from "@/lib/questionBank";

const questions: Question[] = [
  {
    "id": "bioclass-1",
    "type": "mcq",
    "question": "The two kingdom system of classification (Plantae and Animalia) was proposed by:",
    "options": [
      "Whittaker",
      "Linnaeus",
      "Aristotle",
      "Woese"
    ],
    "correctIndex": 1,
    "explanation": "Linnaeus classified all living organisms into two kingdoms - Plantae and Animalia - based broadly on nutrition and locomotion.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-2",
    "type": "mcq",
    "question": "The five kingdom classification system was proposed by:",
    "options": [
      "R.H. Whittaker",
      "Carl Woese",
      "Aristotle",
      "Ernst Mayr"
    ],
    "correctIndex": 0,
    "explanation": "R.H. Whittaker (1969) proposed the five kingdom classification - Monera, Protista, Fungi, Plantae, Animalia.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-3",
    "type": "mcq",
    "question": "Whittaker's five kingdom classification uses which of the following as the main criteria?",
    "options": [
      "Only mode of nutrition",
      "Cell structure, body organisation, mode of nutrition, reproduction, and phylogenetic relationships",
      "Only habitat",
      "Only presence or absence of chlorophyll"
    ],
    "correctIndex": 1,
    "explanation": "The five kingdom system considers multiple criteria together - cell structure, thallus organisation, mode of nutrition, reproduction, and phylogenetic relationships.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-4",
    "type": "mcq",
    "question": "The two kingdom system of Linnaeus failed mainly because it did not distinguish between:",
    "options": [
      "Terrestrial and aquatic organisms",
      "Eukaryotes and prokaryotes, unicellular and multicellular, and photosynthetic and non-photosynthetic organisms",
      "Male and female organisms",
      "Large and small organisms"
    ],
    "correctIndex": 1,
    "explanation": "The two kingdom system grouped very dissimilar organisms together (e.g., prokaryotes with eukaryotes, unicellular with multicellular) and hence was inadequate.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-5",
    "type": "mcq",
    "question": "The three domain system of classification (Archaea, Bacteria, Eukarya) was proposed by:",
    "options": [
      "Carl Woese",
      "R.H. Whittaker",
      "Linnaeus",
      "Ivanowsky"
    ],
    "correctIndex": 0,
    "explanation": "Carl Woese further classified Monera into Archaea and Bacteria, giving the three-domain system of life.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-6",
    "type": "mcq",
    "question": "Which kingdom in the five kingdom system includes prokaryotic organisms?",
    "options": [
      "Protista",
      "Monera",
      "Fungi",
      "Plantae"
    ],
    "correctIndex": 1,
    "explanation": "Kingdom Monera comprises all prokaryotes, which lack a defined nucleus and membrane-bound organelles.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-7",
    "type": "mcq",
    "question": "Bacteria lack a defined nucleus and other membrane-bound organelles; hence they are classified as:",
    "options": [
      "Eukaryotes",
      "Prokaryotes",
      "Protists",
      "Fungi"
    ],
    "correctIndex": 1,
    "explanation": "Absence of a nuclear membrane and membrane-bound cell organelles is the defining prokaryotic feature of bacteria.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-8",
    "type": "mcq",
    "question": "Archaebacteria differ from other bacteria mainly in the:",
    "options": [
      "Presence of a nucleus",
      "Chemical composition of their cell wall, which allows survival in extreme conditions",
      "Ability to photosynthesise using chlorophyll a",
      "Absence of ribosomes"
    ],
    "correctIndex": 1,
    "explanation": "The distinctive cell wall chemistry of archaebacteria enables them to survive in extreme habitats like hot springs, salt lakes, and marshy areas.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-9",
    "type": "mcq",
    "question": "Methanogens, found in the gut of ruminant animals and responsible for the production of methane (biogas), belong to:",
    "options": [
      "Eubacteria",
      "Archaebacteria",
      "Cyanobacteria",
      "Mycoplasma"
    ],
    "correctIndex": 1,
    "explanation": "Methanogens are archaebacteria found in anaerobic environments such as marshy areas and the rumen of cattle, producing methane.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-10",
    "type": "mcq",
    "question": "Bacteria that can live in the most saline environments are called:",
    "options": [
      "Halophiles",
      "Thermoacidophiles",
      "Methanogens",
      "Mycoplasma"
    ],
    "correctIndex": 0,
    "explanation": "Halophiles are archaebacteria adapted to extremely salty habitats.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-11",
    "type": "mcq",
    "question": "Bacteria that survive in hot springs (acidic, high-temperature environments) are called:",
    "options": [
      "Halophiles",
      "Thermoacidophiles",
      "Cyanobacteria",
      "Mycoplasma"
    ],
    "correctIndex": 1,
    "explanation": "Thermoacidophiles are archaebacteria that thrive in hot, acidic environments such as hot sulphur springs.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-12",
    "type": "mcq",
    "question": "Which group of bacteria completely lacks a cell wall?",
    "options": [
      "Cyanobacteria",
      "Archaebacteria",
      "Mycoplasma",
      "Eubacteria"
    ],
    "correctIndex": 2,
    "explanation": "Mycoplasma are unique among prokaryotes for lacking a cell wall entirely and are the smallest known living cells.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-13",
    "type": "mcq",
    "question": "Blue-green algae, which are photosynthetic and possess chlorophyll a, actually belong to:",
    "options": [
      "Kingdom Protista",
      "Kingdom Monera (Cyanobacteria)",
      "Kingdom Plantae",
      "Kingdom Fungi"
    ],
    "correctIndex": 1,
    "explanation": "Despite the name 'algae', cyanobacteria are prokaryotic and photosynthetic, and are placed under kingdom Monera.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-14",
    "type": "mcq",
    "question": "Specialised cells in filamentous cyanobacteria like Nostoc and Anabaena that help in nitrogen fixation are called:",
    "options": [
      "Heterocysts",
      "Conidia",
      "Basidiospores",
      "Zoospores"
    ],
    "correctIndex": 0,
    "explanation": "Heterocysts are thick-walled specialised cells found in some filamentous cyanobacteria that fix atmospheric nitrogen.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-15",
    "type": "mcq",
    "question": "Chemosynthetic autotrophic bacteria obtain energy by:",
    "options": [
      "Trapping solar energy using bacteriochlorophyll",
      "Oxidising inorganic substances like nitrates, nitrites, and ammonia",
      "Absorbing organic matter from dead substrates",
      "Living as obligate parasites"
    ],
    "correctIndex": 1,
    "explanation": "Chemosynthetic autotrophic bacteria oxidise various inorganic compounds and use the released energy for ATP synthesis, and are important in nutrient cycling.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-16",
    "type": "mcq",
    "question": "The largest nutritional group among bacteria is the:",
    "options": [
      "Photosynthetic autotrophs",
      "Chemosynthetic autotrophs",
      "Heterotrophs",
      "Mixotrophs"
    ],
    "correctIndex": 2,
    "explanation": "Heterotrophic bacteria, which decompose organic matter and are often the most helpful decomposers, form the largest bacterial group.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-17",
    "type": "mcq",
    "question": "Bacteria reproduce mainly by:",
    "options": [
      "Fission",
      "Meiosis",
      "Budding only",
      "Binary fusion of gametes"
    ],
    "correctIndex": 0,
    "explanation": "The commonest mode of reproduction in bacteria is simple (binary) fission.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-18",
    "type": "mcq",
    "question": "When bacteria come in contact under unfavourable conditions and transfer genetic material, this DNA transfer process is described as a type of:",
    "options": [
      "Vegetative propagation",
      "Primitive sexual reproduction (conjugation)",
      "Fragmentation",
      "Sporulation"
    ],
    "correctIndex": 1,
    "explanation": "Bacteria show DNA transfer from one cell to another during conjugation, which is considered a primitive type of sexual reproduction.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-19",
    "type": "mcq",
    "question": "Kingdom Protista is often referred to as a 'link' or 'boundary' kingdom because it:",
    "options": [
      "Contains only bacteria",
      "Shows features that connect kingdoms Monera, Fungi, Plantae and Animalia",
      "Is entirely made of prokaryotes",
      "Contains no eukaryotic organisms"
    ],
    "correctIndex": 1,
    "explanation": "Protists show relationships with other kingdoms based on mode of nutrition or other features, hence they form a link between different kingdoms.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-20",
    "type": "mcq",
    "question": "Diatoms and golden algae (desmids) are grouped under:",
    "options": [
      "Chrysophytes",
      "Dinoflagellates",
      "Euglenoids",
      "Slime moulds"
    ],
    "correctIndex": 0,
    "explanation": "Chrysophytes include diatoms and golden algae, found in freshwater and marine environments.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-21",
    "type": "mcq",
    "question": "The cell walls of diatoms are embedded with silica and are indestructible; their accumulated remains over centuries are known as:",
    "options": [
      "Diatomaceous earth",
      "Peat",
      "Lignite",
      "Chalk"
    ],
    "correctIndex": 0,
    "explanation": "The indestructible silica cell walls of diatoms accumulate over long periods to form diatomaceous earth, used in industries.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-22",
    "type": "mcq",
    "question": "Diatoms show a characteristic cell wall structure in which the two thin overlapping shells fit together like:",
    "options": [
      "A soap box",
      "A brick wall",
      "A honeycomb",
      "A spiral staircase"
    ],
    "correctIndex": 0,
    "explanation": "The two overlapping shells of the diatom cell wall fit together like a soap box, giving them a rigid, distinct shape.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-23",
    "type": "mcq",
    "question": "Most dinoflagellates are found in which habitat?",
    "options": [
      "Freshwater ponds",
      "Marine environments",
      "Soil",
      "Animal gut"
    ],
    "correctIndex": 1,
    "explanation": "Dinoflagellates are mostly marine organisms and photosynthetic.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-24",
    "type": "mcq",
    "question": "The colour of a dinoflagellate depends mainly on the main pigments present in its cells, ranging from:",
    "options": [
      "Only green",
      "Yellow, green, brown, blue or red",
      "Only black",
      "Only white"
    ],
    "correctIndex": 1,
    "explanation": "Dinoflagellates appear yellow, green, brown, blue, or red depending on the main pigments present in their cells.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-25",
    "type": "mcq",
    "question": "A dinoflagellate typically has how many flagella, and in what arrangement?",
    "options": [
      "One flagellum only, lateral",
      "Two flagella - one longitudinal and one transverse",
      "Three flagella, all longitudinal",
      "No flagella at all"
    ],
    "correctIndex": 1,
    "explanation": "Dinoflagellates have two flagella, one lying longitudinally and the other transversely in a furrow between the wall plates.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-26",
    "type": "mcq",
    "question": "Rapid multiplication of red dinoflagellates causing the sea to appear red is known as:",
    "options": [
      "Algal bloom only",
      "Red tide",
      "Eutrophication",
      "Biomagnification"
    ],
    "correctIndex": 1,
    "explanation": "Red dinoflagellates like Gonyaulax multiply rapidly, causing the sea to turn red, a phenomenon called red tide, which can also release toxins.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-27",
    "type": "mcq",
    "question": "Euglenoids typically lack a cell wall but instead have a protein-rich outer covering called:",
    "options": [
      "Capsid",
      "Pellicle",
      "Cuticle",
      "Chitin layer"
    ],
    "correctIndex": 1,
    "explanation": "Instead of a cell wall, euglenoids have a protein-rich layer called pellicle, which makes their body flexible.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-28",
    "type": "mcq",
    "question": "Euglena behaves as a photosynthetic autotroph in sunlight but as a heterotroph in the absence of sunlight, i.e., it is:",
    "options": [
      "Chemosynthetic only",
      "Mixotrophic",
      "Saprophytic only",
      "Parasitic only"
    ],
    "correctIndex": 1,
    "explanation": "Euglena exhibits mixotrophic nutrition - autotrophic in sunlight and heterotrophic in the absence of light.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-29",
    "type": "mcq",
    "question": "Slime moulds are saprophytic protists whose body during unfavourable conditions differentiates into a structure bearing:",
    "options": [
      "Basidiospores",
      "Spores with resistant walls, for survival under adverse conditions",
      "Conidia",
      "Zoospores only"
    ],
    "correctIndex": 1,
    "explanation": "Under unfavourable conditions, the slime mould aggregates and differentiates into fruiting bodies bearing spores at their tips, having very resistant walls.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-30",
    "type": "mcq",
    "question": "The moving mass formed by aggregation of slime mould protoplasm, which engulfs organic material as it moves, is called:",
    "options": [
      "Mycelium",
      "Plasmodium",
      "Sporangium",
      "Basidiocarp"
    ],
    "correctIndex": 1,
    "explanation": "The vegetative structure of slime moulds is a plasmodium, a moving, multinucleate mass that engulfs food by phagocytosis.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-31",
    "type": "mcq",
    "question": "Which of the following is a heterotrophic, animal-like group within Protista?",
    "options": [
      "Chrysophytes",
      "Protozoans",
      "Dinoflagellates",
      "Euglenoids"
    ],
    "correctIndex": 1,
    "explanation": "Protozoans are heterotrophic protists that live as predators or parasites, and are considered primitive relatives of animals.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-32",
    "type": "mcq",
    "question": "Amoeboid protozoans typically move and capture prey with the help of:",
    "options": [
      "Cilia",
      "Flagella",
      "Pseudopodia",
      "Setae"
    ],
    "correctIndex": 2,
    "explanation": "Amoeboid protozoans, like Amoeba, use pseudopodia (false feet) for movement and capturing prey.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-33",
    "type": "mcq",
    "question": "Which protozoan group possesses a large number of cilia for locomotion within an aquatic habitat?",
    "options": [
      "Flagellated protozoans",
      "Ciliated protozoans",
      "Sporozoans",
      "Amoeboid protozoans"
    ],
    "correctIndex": 1,
    "explanation": "Ciliated protozoans, such as Paramoecium, possess numerous cilia for locomotion and moving food through a gullet.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-34",
    "type": "mcq",
    "question": "Paramoecium possesses two types of nuclei; these are called:",
    "options": [
      "Macronucleus and micronucleus",
      "Diploid and haploid nucleus",
      "Primary and secondary nucleus",
      "Somatic and germinal nucleus"
    ],
    "correctIndex": 0,
    "explanation": "Ciliates like Paramoecium have two nuclei - a larger macronucleus and a smaller micronucleus.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-35",
    "type": "mcq",
    "question": "Trypanosoma, the causative organism of sleeping sickness, belongs to which protozoan group?",
    "options": [
      "Amoeboid protozoans",
      "Flagellated protozoans",
      "Ciliated protozoans",
      "Sporozoans"
    ],
    "correctIndex": 1,
    "explanation": "Trypanosoma is a flagellated protozoan parasite responsible for African sleeping sickness.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-36",
    "type": "mcq",
    "question": "Plasmodium, the causative organism of malaria, belongs to which protozoan group?",
    "options": [
      "Sporozoans",
      "Ciliated protozoans",
      "Amoeboid protozoans",
      "Flagellated protozoans"
    ],
    "correctIndex": 0,
    "explanation": "Plasmodium belongs to sporozoans, a diverse group having an infectious spore-like stage in their life cycle.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-37",
    "type": "mcq",
    "question": "The mode of nutrition in fungi is:",
    "options": [
      "Photosynthetic autotrophic",
      "Heterotrophic (saprophytic, parasitic, or symbiotic)",
      "Chemosynthetic autotrophic",
      "Holozoic"
    ],
    "correctIndex": 1,
    "explanation": "Fungi are heterotrophs that absorb nutrients from dead organic matter (saprophytes), living hosts (parasites), or in symbiotic partnerships.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-38",
    "type": "mcq",
    "question": "The vegetative body of a fungus consists of long, slender thread-like structures called:",
    "options": [
      "Hyphae",
      "Rhizoids",
      "Cilia",
      "Villi"
    ],
    "correctIndex": 0,
    "explanation": "The mycelium of fungi is made up of thread-like hyphae, which may be branched.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-39",
    "type": "mcq",
    "question": "The network of fungal hyphae is collectively known as:",
    "options": [
      "Mycelium",
      "Sporangium",
      "Thallus in algae",
      "Rhizome"
    ],
    "correctIndex": 0,
    "explanation": "The interwoven mass of fungal hyphae is called the mycelium.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-40",
    "type": "mcq",
    "question": "In some fungi, hyphae are continuous tubes without septa and are multinucleate; such hyphae are called:",
    "options": [
      "Septate",
      "Coenocytic",
      "Dikaryotic",
      "Ascogenous"
    ],
    "correctIndex": 1,
    "explanation": "Coenocytic hyphae are continuous, aseptate tubes containing multinucleated cytoplasm, seen in fungi like Rhizopus.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-41",
    "type": "mcq",
    "question": "The cell wall of fungi is chemically composed mainly of:",
    "options": [
      "Cellulose",
      "Chitin and polysaccharides",
      "Peptidoglycan",
      "Pectin"
    ],
    "correctIndex": 1,
    "explanation": "Unlike plants (cellulose), the fungal cell wall is composed mainly of chitin and other polysaccharides.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-42",
    "type": "mcq",
    "question": "Fungi that show both yeast (unicellular) and mycelial (filamentous) forms depending on environmental conditions are called:",
    "options": [
      "Dimorphic fungi",
      "Coenocytic fungi",
      "Dikaryotic fungi",
      "Heterothallic fungi"
    ],
    "correctIndex": 0,
    "explanation": "Some fungi are dimorphic - existing in both unicellular yeast form and filamentous mycelial form depending on conditions like temperature or nutrition.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-43",
    "type": "mcq",
    "question": "Asexual reproduction by exogenously produced spores called conidia occurs in fungi such as:",
    "options": [
      "Rhizopus",
      "Penicillium",
      "Agaricus",
      "Puccinia"
    ],
    "correctIndex": 1,
    "explanation": "Penicillium reproduces asexually by conidia, produced exogenously on specialised hyphae called conidiophores.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-44",
    "type": "mcq",
    "question": "Rhizopus reproduces asexually by spores called:",
    "options": [
      "Conidia",
      "Zoospores (motile) or aplanospores (non-motile), formed inside sporangia",
      "Ascospores",
      "Basidiospores"
    ],
    "correctIndex": 1,
    "explanation": "Zoospores or aplanospores are produced endogenously in sporangia in fungi such as Rhizopus (Phycomycetes).",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-45",
    "type": "mcq",
    "question": "Sexual reproduction in fungi generally proceeds through three sequential phases; the correct order is:",
    "options": [
      "Karyogamy, plasmogamy, meiosis",
      "Plasmogamy, karyogamy, meiosis",
      "Meiosis, plasmogamy, karyogamy",
      "Plasmogamy, meiosis, karyogamy"
    ],
    "correctIndex": 1,
    "explanation": "In fungal sexual reproduction, plasmogamy (fusion of protoplasms) is followed by karyogamy (fusion of nuclei), and then meiosis restores the haploid number.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-46",
    "type": "mcq",
    "question": "Phycomycetes are found mainly in:",
    "options": [
      "Aquatic habitats, on decaying wood, and as obligate parasites on plants",
      "Dry deserts only",
      "Marine sediments only",
      "Animal intestines only"
    ],
    "correctIndex": 0,
    "explanation": "Members of Phycomycetes are found in aquatic habitats and on decaying wood, in moist and damp places, or as obligate parasites on plants.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-47",
    "type": "mcq",
    "question": "Which of the following is an example of Phycomycetes?",
    "options": [
      "Agaricus",
      "Mucor",
      "Aspergillus",
      "Alternaria"
    ],
    "correctIndex": 1,
    "explanation": "Mucor, along with Rhizopus and Albugo, is a common example of class Phycomycetes.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-48",
    "type": "mcq",
    "question": "Members of Ascomycetes are commonly known as:",
    "options": [
      "Sac fungi",
      "Bracket fungi",
      "Club fungi",
      "Imperfect fungi"
    ],
    "correctIndex": 0,
    "explanation": "Ascomycetes are commonly known as sac fungi because their sexual spores (ascospores) are produced inside sac-like structures called asci.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-49",
    "type": "mcq",
    "question": "Yeast (Saccharomyces cerevisiae), used in the baking and brewing industry, belongs to which fungal class?",
    "options": [
      "Phycomycetes",
      "Ascomycetes",
      "Basidiomycetes",
      "Deuteromycetes"
    ],
    "correctIndex": 1,
    "explanation": "Saccharomyces is a unicellular member of Ascomycetes, unlike most other ascomycetous fungi, which are multicellular.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-50",
    "type": "mcq",
    "question": "In Ascomycetes, sexual spores called ascospores are produced:",
    "options": [
      "Exogenously on conidiophores",
      "Endogenously in sac-like asci",
      "On basidia",
      "In sporangia"
    ],
    "correctIndex": 1,
    "explanation": "Ascospores are produced endogenously within sac-like structures (asci), usually eight per ascus, arranged in fruiting bodies called ascocarps.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-51",
    "type": "mcq",
    "question": "The fruiting body in which asci with ascospores are arranged in Ascomycetes is called:",
    "options": [
      "Basidiocarp",
      "Ascocarp",
      "Sporangium",
      "Conidiophore"
    ],
    "correctIndex": 1,
    "explanation": "Ascocarps are the fruiting bodies in Ascomycetes that contain numerous asci bearing ascospores.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-52",
    "type": "mcq",
    "question": "Common members of Basidiomycetes include mushrooms, bracket fungi, and:",
    "options": [
      "Yeasts",
      "Puffballs",
      "Water moulds",
      "Downy mildews"
    ],
    "correctIndex": 1,
    "explanation": "Basidiomycetes include mushrooms, bracket fungi, and puffballs, found in soil, on logs, and as plant parasites like rusts and smuts.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-53",
    "type": "mcq",
    "question": "Puccinia (rust fungus) and Ustilago (smut fungus), important plant pathogens, belong to class:",
    "options": [
      "Phycomycetes",
      "Ascomycetes",
      "Basidiomycetes",
      "Deuteromycetes"
    ],
    "correctIndex": 2,
    "explanation": "Puccinia and Ustilago are important plant-pathogenic members of Basidiomycetes.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-54",
    "type": "mcq",
    "question": "In Basidiomycetes, sex organs are absent, and plasmogamy is brought about by:",
    "options": [
      "Fusion of male and female gametes",
      "Fusion of two vegetative or somatic cells of different strains or mating types",
      "Fusion of conidia",
      "Fusion of zoospores"
    ],
    "correctIndex": 1,
    "explanation": "Basidiomycetes lack sex organs; instead, plasmogamy occurs by fusion of two somatic cells of different mating types, forming a dikaryotic (n+n) stage.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-55",
    "type": "mcq",
    "question": "The characteristic dikaryotic phase (n+n) is a prominent and prolonged stage in the life cycle of:",
    "options": [
      "Phycomycetes",
      "Ascomycetes",
      "Basidiomycetes",
      "Deuteromycetes"
    ],
    "correctIndex": 2,
    "explanation": "In Basidiomycetes, the fusion of somatic cells produces a dikaryotic mycelium, a stage that is prolonged and eventually gives rise to basidiocarps.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-56",
    "type": "mcq",
    "question": "The club-shaped structure bearing four basidiospores after karyogamy and meiosis in Basidiomycetes is called:",
    "options": [
      "Ascus",
      "Basidium",
      "Sporangium",
      "Conidiophore"
    ],
    "correctIndex": 1,
    "explanation": "The basidium is the characteristic structure of Basidiomycetes on which four basidiospores are exogenously produced after karyogamy and meiosis.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-57",
    "type": "mcq",
    "question": "Deuteromycetes are commonly called 'Fungi Imperfecti' because:",
    "options": [
      "They lack a cell wall",
      "Only their asexual or vegetative phase is known",
      "They cannot reproduce at all",
      "They lack hyphae"
    ],
    "correctIndex": 1,
    "explanation": "Deuteromycetes are called imperfect fungi because only their asexual/vegetative forms are known; when a sexual stage is discovered, the fungus is reclassified into its appropriate class.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-58",
    "type": "mcq",
    "question": "Deuteromycetes reproduce only by asexual spores known as:",
    "options": [
      "Basidiospores",
      "Ascospores",
      "Conidia",
      "Zygospores"
    ],
    "correctIndex": 2,
    "explanation": "The only reproductive spores known for Deuteromycetes are asexual conidia.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-59",
    "type": "mcq",
    "question": "Alternaria and Trichoderma are examples of fungi belonging to:",
    "options": [
      "Phycomycetes",
      "Ascomycetes",
      "Basidiomycetes",
      "Deuteromycetes"
    ],
    "correctIndex": 3,
    "explanation": "Alternaria and Trichoderma are common examples of Deuteromycetes, many of which act as decomposers and help in mineral cycling.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-60",
    "type": "mcq",
    "question": "Lichens represent a symbiotic association between:",
    "options": [
      "Two species of fungi",
      "An alga and a fungus",
      "A bacterium and a virus",
      "Two species of algae"
    ],
    "correctIndex": 1,
    "explanation": "A lichen is a symbiotic association between a photosynthetic partner (phycobiont, an alga) and a fungal partner (mycobiont).",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-61",
    "type": "mcq",
    "question": "In a lichen, the algal component (phycobiont) contributes by:",
    "options": [
      "Providing shelter and absorbing minerals",
      "Preparing food through photosynthesis",
      "Producing spores",
      "Fixing atmospheric nitrogen only"
    ],
    "correctIndex": 1,
    "explanation": "The alga in a lichen is autotrophic and photosynthetic, providing food for the association, while the fungus provides shelter and absorbs water/minerals.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-62",
    "type": "mcq",
    "question": "Lichens are widely used as pollution indicators because they:",
    "options": [
      "Grow only in heavily polluted cities",
      "Do not grow in polluted areas since they are sensitive to sulphur dioxide",
      "Are unaffected by any environmental changes",
      "Only grow in aquatic pollution"
    ],
    "correctIndex": 1,
    "explanation": "Lichens are highly sensitive to sulphur dioxide pollution and hence their absence indicates polluted environments.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-63",
    "type": "mcq",
    "question": "The term 'virus', meaning venom or poisonous fluid, reflects the fact that viruses are:",
    "options": [
      "Free-living cellular organisms",
      "Obligate parasites that are inert outside a host but multiply within a living host cell",
      "Autotrophic organisms",
      "Members of kingdom Monera"
    ],
    "correctIndex": 1,
    "explanation": "Viruses are non-cellular, obligate intracellular parasites - inert outside the host but showing characteristics of life only within a host cell.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-64",
    "type": "mcq",
    "question": "D.J. Ivanowsky (1892) is credited with discovering that the cause of mosaic disease of tobacco was an agent that:",
    "options": [
      "Could be filtered through bacteria-proof filters and was smaller than bacteria",
      "Was a bacterium visible under a light microscope",
      "Was a fungus",
      "Was a protozoan"
    ],
    "correctIndex": 0,
    "explanation": "Ivanowsky observed that the sap of an infected tobacco plant, even after passing through a bacteria-proof filter, could cause the disease, indicating an agent smaller than bacteria.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-65",
    "type": "mcq",
    "question": "M.W. Beijerinck (1898) named the infectious agent causing tobacco mosaic disease as:",
    "options": [
      "Contagium vivum fluidum (contagious living fluid)",
      "Bacteriophage",
      "Prion",
      "Viroid"
    ],
    "correctIndex": 0,
    "explanation": "Beijerinck termed the infectious fluid extracted from the diseased tobacco leaves as 'contagium vivum fluidum'.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-66",
    "type": "mcq",
    "question": "W.M. Stanley (1935) demonstrated that viruses could be crystallised, and showed that the crystals consisted largely of:",
    "options": [
      "Carbohydrate",
      "Protein",
      "Lipid",
      "DNA only"
    ],
    "correctIndex": 1,
    "explanation": "Stanley crystallised the Tobacco Mosaic Virus (TMV) and showed the crystals were made largely of protein.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-67",
    "type": "mcq",
    "question": "A virus particle consists of genetic material (DNA or RNA) enclosed in a protein coat, which is called the:",
    "options": [
      "Capsid",
      "Envelope",
      "Cell wall",
      "Nucleoid"
    ],
    "correctIndex": 0,
    "explanation": "The protein coat around the nucleic acid of a virus is called the capsid, made of small subunits called capsomeres.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-68",
    "type": "mcq",
    "question": "Most plant viruses have their genetic material in the form of:",
    "options": [
      "Single-stranded RNA",
      "Double-stranded DNA",
      "Single-stranded DNA",
      "Double-stranded RNA only"
    ],
    "correctIndex": 0,
    "explanation": "The majority of plant viruses are single-stranded RNA viruses.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-69",
    "type": "mcq",
    "question": "Bacteriophages, viruses that infect bacteria, usually contain:",
    "options": [
      "Single-stranded RNA",
      "Double-stranded DNA",
      "No nucleic acid",
      "Only protein"
    ],
    "correctIndex": 1,
    "explanation": "Bacteriophages are typically double-stranded DNA viruses.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-70",
    "type": "mcq",
    "question": "The Tobacco Mosaic Virus (TMV) has which type of capsid symmetry/shape?",
    "options": [
      "Icosahedral",
      "Rod-shaped/helical",
      "Complex with head and tail",
      "Spherical envelope only"
    ],
    "correctIndex": 1,
    "explanation": "TMV is a rod-shaped virus with helical symmetry of its protein capsid around the RNA genome.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-71",
    "type": "mcq",
    "question": "Viroids, discovered by T.O. Diener in 1971, differ from viruses in that they:",
    "options": [
      "Have a protein coat but no nucleic acid",
      "Consist of free RNA without a protein coat",
      "Are entirely made of protein",
      "Are larger than viruses"
    ],
    "correctIndex": 1,
    "explanation": "Viroids consist only of low molecular weight, free RNA without any surrounding protein coat, unlike viruses.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-72",
    "type": "mcq",
    "question": "Viroids were discovered as the causative agents of which disease?",
    "options": [
      "Tobacco mosaic disease",
      "Potato spindle tuber disease",
      "Mad cow disease",
      "Mosaic disease of cotton"
    ],
    "correctIndex": 1,
    "explanation": "T.O. Diener discovered viroids as the infectious agents smaller than viruses, causing potato spindle tuber disease.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-73",
    "type": "mcq",
    "question": "Prions are infectious agents composed of:",
    "options": [
      "RNA without protein",
      "Abnormally folded proteins, with no nucleic acid",
      "DNA and RNA together",
      "Polysaccharides"
    ],
    "correctIndex": 1,
    "explanation": "Prions are abnormally folded infectious proteins, lacking nucleic acid altogether, unlike viruses and viroids.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-74",
    "type": "mcq",
    "question": "Prions are known to cause diseases such as:",
    "options": [
      "Malaria",
      "Mad cow disease (bovine spongiform encephalopathy)",
      "Tobacco mosaic disease",
      "Potato spindle tuber disease"
    ],
    "correctIndex": 1,
    "explanation": "Prions cause neurodegenerative diseases such as mad cow disease in cattle and its human variant, Creutzfeldt-Jakob disease.",
    "difficulty": "medium"
  },
  {
    "id": "bioclass-75",
    "type": "mcq",
    "question": "Kingdom Plantae includes eukaryotic, chlorophyll-containing organisms, and their cell walls are mainly composed of:",
    "options": [
      "Chitin",
      "Cellulose",
      "Peptidoglycan",
      "Pectin only"
    ],
    "correctIndex": 1,
    "explanation": "Plant cell walls are primarily made of cellulose, distinguishing them from fungal (chitin) and bacterial (peptidoglycan) cell walls.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-76",
    "type": "mcq",
    "question": "Members of kingdom Animalia are heterotrophic eukaryotes that generally lack:",
    "options": [
      "A nucleus",
      "A cell wall",
      "Mitochondria",
      "Ribosomes"
    ],
    "correctIndex": 1,
    "explanation": "Animal cells characteristically lack a cell wall, unlike plant, fungal, and most protistan and bacterial cells.",
    "difficulty": "easy"
  },
  {
    "id": "bioclass-77",
    "type": "mcq",
    "question": "Assertion: Viruses are regarded as non-living outside a host cell.\nReason: Viruses lack their own metabolic machinery and can only replicate inside a living host cell.\nChoose the correct option:",
    "options": [
      "Both assertion and reason are true and reason correctly explains assertion",
      "Assertion is true, reason is false",
      "Assertion is false, reason is true",
      "Both are false"
    ],
    "correctIndex": 0,
    "explanation": "Since viruses are inert/crystallisable outside a host and only show metabolic activity and replication inside a living host cell, both statements are true and logically connected.",
    "difficulty": "hard"
  },
  {
    "id": "bioclass-78",
    "type": "mcq",
    "question": "Assertion: All members of kingdom Monera possess a rigid cell wall.\nReason: Mycoplasma, a member of kingdom Monera, completely lacks a cell wall.\nChoose the correct option:",
    "options": [
      "Assertion is true and reason is false",
      "Assertion is false and reason is true",
      "Both assertion and reason are true and related",
      "Both assertion and reason are false"
    ],
    "correctIndex": 1,
    "explanation": "The assertion is incorrect since Mycoplasma, a monerans, lacks a cell wall entirely, which the reason correctly states.",
    "difficulty": "hard"
  }
];

export default questions;
