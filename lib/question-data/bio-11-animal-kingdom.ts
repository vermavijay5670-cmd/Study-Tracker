import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Animal Kingdom
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'animal-kingdom-1',
    type: 'mcq',
    question: 'Which phylum shows a cellular level of organisation, where cells are loosely arranged without forming true tissues?',
    options: [
      'Porifera',
      'Coelenterata',
      'Platyhelminthes',
      'Annelida'
    ],
    correctIndex: 0,
    explanation: 'Sponges (Porifera) show a cellular level of organisation, where cells perform their functions individually without forming true tissues.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-2',
    type: 'mcq',
    question: 'A tissue level of organisation, where cells performing similar functions are organised into tissues, is characteristic of which phylum?',
    options: [
      'Porifera',
      'Coelenterata (Cnidaria)',
      'Mollusca',
      'Arthropoda'
    ],
    correctIndex: 1,
    explanation: 'Coelenterates (Cnidarians) show a tissue level of organisation, with cells arranged into distinct tissues.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-3',
    type: 'mcq',
    question: 'Among the triploblastic phyla, which one shows only an organ level of organisation (organs formed, but not integrated into organ systems)?',
    options: [
      'Annelida',
      'Arthropoda',
      'Platyhelminthes',
      'Mollusca'
    ],
    correctIndex: 2,
    explanation: 'Platyhelminthes (flatworms) show an organ level of organisation, where organs are present but not coordinated into organ systems as in higher phyla.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-4',
    type: 'mcq',
    question: 'Animals whose body can be divided into equal left and right halves by only a single plane passing through the centre are said to show:',
    options: [
      'Radial symmetry',
      'Asymmetry',
      'Spherical symmetry',
      'Bilateral symmetry'
    ],
    correctIndex: 3,
    explanation: 'Bilateral symmetry describes body plans divisible into equal left and right halves through only one specific plane.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-5',
    type: 'mcq',
    question: 'Animals whose body parts are arranged in a circular fashion around a central axis, such that any plane passing through the centre divides them into similar halves, show:',
    options: [
      'Radial symmetry',
      'Bilateral symmetry',
      'Asymmetry',
      'Biradial symmetry'
    ],
    correctIndex: 0,
    explanation: 'Radial symmetry describes body plans where structures are arranged around a central axis, allowing multiple planes of division into similar halves.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-6',
    type: 'mcq',
    question: 'Diploblastic animals have a body wall organised into how many main germ layers, with an undifferentiated layer (mesoglea) often present in between?',
    options: [
      'Three germ layers',
      'Two germ layers (ectoderm and endoderm)',
      'One germ layer',
      'Four germ layers'
    ],
    correctIndex: 1,
    explanation: 'Diploblastic animals possess two germ layers - an outer ectoderm and an inner endoderm - with a mesoglea sometimes present between them.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-7',
    type: 'mcq',
    question: 'Triploblastic animals possess a third germ layer, located between the ectoderm and endoderm, called the:',
    options: [
      'Mesoglea',
      'Notochord',
      'Mesoderm',
      'Blastoderm'
    ],
    correctIndex: 2,
    explanation: 'Triploblastic animals develop a third germ layer, the mesoderm, positioned between the ectoderm and endoderm.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-8',
    type: 'mcq',
    question: 'Animals in which the mesoderm occurs as scattered pouches between the ectoderm and endoderm, without forming a true body cavity, are called:',
    options: [
      'Pseudocoelomates',
      'Eucoelomates',
      'Diploblastic animals',
      'Acoelomates'
    ],
    correctIndex: 3,
    explanation: 'Acoelomates lack a true body cavity; their mesoderm is present only as scattered pouches, as seen in Platyhelminthes.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-9',
    type: 'mcq',
    question: 'In pseudocoelomates, the body cavity present is not completely lined by:',
    options: [
      'Mesoderm',
      'Ectoderm',
      'Endoderm',
      'Epidermis'
    ],
    correctIndex: 0,
    explanation: 'In pseudocoelomates, the body cavity is not fully lined by mesoderm on all sides, distinguishing it from a true coelom.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-10',
    type: 'mcq',
    question: 'A true coelom (eucoelom), found in phyla like Annelida and Mollusca, is a body cavity that is lined by mesoderm:',
    options: [
      'Only on one side',
      'On both sides (from the body wall and from the gut)',
      'Not lined by mesoderm at all',
      'Lined by ectoderm instead'
    ],
    correctIndex: 1,
    explanation: 'In eucoelomate animals, the body cavity is completely lined by mesoderm on both sides - from the body wall and around the gut.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-11',
    type: 'mcq',
    question: 'The unique canal system used for water circulation, filter feeding, and gas exchange is a hallmark feature of which phylum?',
    options: [
      'Coelenterata',
      'Ctenophora',
      'Porifera',
      'Platyhelminthes'
    ],
    correctIndex: 2,
    explanation: 'The canal system, involving water flow through ostia and out through the osculum, is a distinctive feature of sponges (Porifera).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-12',
    type: 'mcq',
    question: 'The specialised collar cells in sponges that generate water currents and trap food particles are called choanocytes, and they possess:',
    options: [
      'Cilia',
      'Nematocysts',
      'Setae',
      'Flagella'
    ],
    correctIndex: 3,
    explanation: 'Choanocytes (collar cells) in sponges possess flagella, whose movement generates the water currents essential for filter feeding.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-13',
    type: 'mcq',
    question: 'The skeleton of sponges is typically composed of:',
    options: [
      'Spicules or spongin fibres',
      'Chitin',
      'A calcareous shell',
      'Bony plates'
    ],
    correctIndex: 0,
    explanation: 'Sponges have a skeleton made up of spicules (calcareous or siliceous) or spongin fibres, providing structural support.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-14',
    type: 'mcq',
    question: 'Which of the following is a well-known example of phylum Porifera?',
    options: [
      'Hydra',
      'Sycon',
      'Taenia',
      'Pila'
    ],
    correctIndex: 1,
    explanation: 'Sycon is a classic example of phylum Porifera (sponges).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-15',
    type: 'mcq',
    question: 'Stinging cells containing nematocysts, used by coelenterates for anchorage, defence, and capturing prey, are called:',
    options: [
      'Choanocytes',
      'Flame cells',
      'Cnidoblasts (cnidocytes)',
      'Nephridia'
    ],
    correctIndex: 2,
    explanation: 'Cnidoblasts (cnidocytes), containing stinging structures called nematocysts, are characteristic of coelenterates (cnidarians).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-16',
    type: 'mcq',
    question: 'Coelenterates possess a single internal cavity with only one opening, serving as both mouth and anus, called the:',
    options: [
      'Spongocoel',
      'A complete alimentary canal',
      'Archenteron',
      'Coelenteron (gastrovascular cavity)'
    ],
    correctIndex: 3,
    explanation: 'The coelenteron (gastrovascular cavity) of coelenterates has a single opening that functions as both mouth and anus.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-17',
    type: 'mcq',
    question: 'The two basic body forms exhibited by coelenterates are:',
    options: [
      'Polyp and medusa',
      'Larva and pupa',
      'Zoea and megalopa',
      'Ammocoete and adult'
    ],
    correctIndex: 0,
    explanation: 'Coelenterates typically exist as either a sessile polyp form or a free-swimming medusa form.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-18',
    type: 'mcq',
    question: 'The phenomenon in which polyp and medusa forms alternate in the life cycle of certain coelenterates, such as Obelia, is called:',
    options: [
      'Metamorphosis',
      'Metagenesis',
      'Regeneration',
      'Parthenogenesis'
    ],
    correctIndex: 1,
    explanation: 'Metagenesis refers to the alternation of polyp and medusa generations observed in the life cycle of certain coelenterates like Obelia.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-19',
    type: 'mcq',
    question: 'Which of the following is an example of phylum Coelenterata (Cnidaria)?',
    options: [
      'Pleurobrachia',
      'Fasciola',
      'Physalia',
      'Ascaris'
    ],
    correctIndex: 2,
    explanation: 'Physalia (the Portuguese man-of-war) is a well-known example of phylum Coelenterata (Cnidaria).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-20',
    type: 'mcq',
    question: 'Ctenophores characteristically move using eight external rows of ciliated plates called:',
    options: [
      'Nematocysts',
      'Tube feet',
      'Parapodia',
      'Comb plates (ctenes)'
    ],
    correctIndex: 3,
    explanation: 'Ctenophores possess eight rows of externally located ciliated comb plates (ctenes), used for locomotion.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-21',
    type: 'mcq',
    question: 'A distinctive property commonly exhibited by ctenophores (sea walnuts/comb jellies) is:',
    options: [
      'Bioluminescence',
      'A canal system',
      'A water vascular system',
      'Metameric segmentation'
    ],
    correctIndex: 0,
    explanation: 'Bioluminescence, the ability to produce light, is a well-known feature displayed by many ctenophores.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-22',
    type: 'mcq',
    question: 'Members of phylum Platyhelminthes are commonly known as:',
    options: [
      'Roundworms',
      'Flatworms',
      'Segmented worms',
      'Spiny-skinned animals'
    ],
    correctIndex: 1,
    explanation: 'Platyhelminthes are commonly called flatworms, owing to their characteristically flattened, dorsoventral body shape.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-23',
    type: 'mcq',
    question: 'The body cavity condition found in members of phylum Platyhelminthes is:',
    options: [
      'Pseudocoelomate',
      'Eucoelomate',
      'Acoelomate',
      'Fully coelomate'
    ],
    correctIndex: 2,
    explanation: 'Platyhelminthes lack a true body cavity and are classified as acoelomate.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-24',
    type: 'mcq',
    question: 'Which of the following is a well-known parasitic example of phylum Platyhelminthes?',
    options: [
      'Ascaris',
      'Pheretima',
      'Nereis',
      'Taenia (tapeworm)'
    ],
    correctIndex: 3,
    explanation: 'Taenia (tapeworm) is a common parasitic example of phylum Platyhelminthes.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-25',
    type: 'mcq',
    question: 'Planaria, a free-living member of Platyhelminthes, is particularly notable for its remarkable ability to:',
    options: [
      'Regenerate lost body parts',
      'Fly over short distances',
      'Photosynthesise its own food',
      'Produce silk fibres'
    ],
    correctIndex: 0,
    explanation: 'Planaria is well known for its exceptional regenerative capacity, being able to regrow lost body parts.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-26',
    type: 'mcq',
    question: 'Members of phylum Aschelminthes (Nematoda) exhibit which type of body cavity?',
    options: [
      'Acoelomate',
      'Pseudocoelomate',
      'Eucoelomate',
      'No body cavity at all'
    ],
    correctIndex: 1,
    explanation: 'Aschelminthes (Nematoda) possess a pseudocoelom, a body cavity not fully lined by mesoderm.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-27',
    type: 'mcq',
    question: 'Unlike Platyhelminthes, members of Aschelminthes possess a complete alimentary canal, featuring:',
    options: [
      'Only a mouth, with no anus',
      'Only an anus, with no mouth',
      'Both a mouth and an anus',
      'Neither a mouth nor an anus'
    ],
    correctIndex: 2,
    explanation: 'Aschelminthes possess a complete digestive tract with both a mouth and a separate anus, unlike the incomplete gut of Platyhelminthes.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-28',
    type: 'mcq',
    question: 'Ascaris, a common example of Aschelminthes, typically shows which reproductive characteristic?',
    options: [
      'Hermaphrodite (monoecious)',
      'Reproduces only asexually',
      'Reproduces only by parthenogenesis',
      'Dioecious (sexes are separate)'
    ],
    correctIndex: 3,
    explanation: 'Ascaris is dioecious, meaning male and female reproductive organs occur in separate individuals.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-29',
    type: 'mcq',
    question: 'Wuchereria, the filarial worm responsible for causing elephantiasis in humans, belongs to which phylum?',
    options: [
      'Aschelminthes',
      'Platyhelminthes',
      'Annelida',
      'Arthropoda'
    ],
    correctIndex: 0,
    explanation: 'Wuchereria, the causative agent of filariasis (elephantiasis), belongs to phylum Aschelminthes (Nematoda).',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-30',
    type: 'mcq',
    question: 'A defining structural feature of phylum Annelida is:',
    options: [
      'The presence of a notochord',
      'Metameric segmentation (repetition of body segments)',
      'Radial symmetry',
      'The complete absence of a coelom'
    ],
    correctIndex: 1,
    explanation: 'Metameric segmentation, the repetition of similar body segments along the length of the body, is a defining feature of Annelida.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-31',
    type: 'mcq',
    question: 'The type of circulatory system found in phylum Annelida is:',
    options: [
      'Open',
      'Completely absent',
      'Closed',
      'Present only during the larval stage'
    ],
    correctIndex: 2,
    explanation: 'Annelids possess a closed circulatory system, in which blood remains confined within vessels.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-32',
    type: 'mcq',
    question: 'Pheretima, the common earthworm, is a well-known example belonging to phylum:',
    options: [
      'Aschelminthes',
      'Mollusca',
      'Arthropoda',
      'Annelida'
    ],
    correctIndex: 3,
    explanation: 'Pheretima (the common earthworm) is a classic example of phylum Annelida.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-33',
    type: 'mcq',
    question: 'Hirudinaria, a blood-sucking annelid, is more commonly known as the:',
    options: [
      'Leech',
      'Earthworm',
      'Ragworm',
      'Tapeworm'
    ],
    correctIndex: 0,
    explanation: 'Hirudinaria is the scientific name for a common blood-sucking leech, an annelid.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-34',
    type: 'mcq',
    question: 'Phylum Arthropoda, the largest phylum in the animal kingdom, accounts for approximately what fraction of all named animal species?',
    options: [
      'One-tenth',
      'Two-thirds',
      'One-half',
      'One-quarter'
    ],
    correctIndex: 1,
    explanation: 'Arthropoda is the largest animal phylum, accounting for roughly two-thirds of all named species in the animal kingdom.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-35',
    type: 'mcq',
    question: 'The name "Arthropoda" directly refers to the presence of:',
    options: [
      'A notochord',
      'Radial symmetry',
      'Jointed appendages (legs)',
      'A closed circulatory system'
    ],
    correctIndex: 2,
    explanation: 'The term \'Arthropoda\' means \'jointed feet/appendages,\' referring to their characteristic jointed legs and other appendages.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-36',
    type: 'mcq',
    question: 'The exoskeleton covering the body of arthropods is composed mainly of:',
    options: [
      'Calcium carbonate',
      'Cellulose',
      'Keratin',
      'Chitin'
    ],
    correctIndex: 3,
    explanation: 'The hard exoskeleton of arthropods is composed primarily of chitin, a tough polysaccharide.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-37',
    type: 'mcq',
    question: 'The type of circulatory system characteristically found in arthropods is:',
    options: [
      'Open (blood/haemolymph is not always confined to vessels)',
      'Closed',
      'Completely absent',
      'Restricted only to the gills'
    ],
    correctIndex: 0,
    explanation: 'Arthropods possess an open circulatory system, in which the blood (haemolymph) is not always confined within vessels, instead bathing tissues directly in open spaces.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-38',
    type: 'mcq',
    question: 'Which of the following is an example of phylum Arthropoda?',
    options: [
      'Pila',
      'Locust',
      'Asterias',
      'Balanoglossus'
    ],
    correctIndex: 1,
    explanation: 'The locust is a common example of phylum Arthropoda (class Insecta).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-39',
    type: 'mcq',
    question: 'Besides gills, respiration in various terrestrial arthropods may also occur through book lungs or a network of tubes called:',
    options: [
      'Lungs with alveoli',
      'The skin only',
      'Tracheae',
      'Gill slits covered by an operculum'
    ],
    correctIndex: 2,
    explanation: 'Many terrestrial arthropods, especially insects, respire using a network of tubes called tracheae, which directly deliver air to tissues.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-40',
    type: 'mcq',
    question: 'Mollusca is generally regarded as the second largest phylum in the animal kingdom in terms of the number of species, ranking just after:',
    options: [
      'Chordata',
      'Annelida',
      'Echinodermata',
      'Arthropoda'
    ],
    correctIndex: 3,
    explanation: 'Mollusca is the second largest animal phylum, following Arthropoda in terms of total number of described species.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-41',
    type: 'mcq',
    question: 'The soft body of molluscs is generally covered by a specialised fold of skin called the:',
    options: [
      'Mantle',
      'Cuticle',
      'Notochord',
      'Exoskeleton'
    ],
    correctIndex: 0,
    explanation: 'The mantle is a specialised fold of skin covering the visceral mass of molluscs, and it often secretes the calcareous shell.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-42',
    type: 'mcq',
    question: 'In molluscs, respiration typically occurs via gill-like structures located within the mantle cavity, called:',
    options: [
      'Tracheae',
      'Ctenidia',
      'Nephridia',
      'Book lungs'
    ],
    correctIndex: 1,
    explanation: 'Ctenidia are the characteristic gill-like respiratory structures found within the mantle cavity of molluscs.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-43',
    type: 'mcq',
    question: 'Which of the following is an example of phylum Mollusca?',
    options: [
      'Hirudinaria',
      'Balanoglossus',
      'Pila (apple snail)',
      'Scoliodon'
    ],
    correctIndex: 2,
    explanation: 'Pila (the apple snail) is a common example of phylum Mollusca.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-44',
    type: 'mcq',
    question: 'Unlike most other molluscs, cephalopods such as Sepia and Loligo are notable for possessing which type of circulatory system?',
    options: [
      'Open',
      'Completely absent',
      'Restricted only to the muscular foot',
      'Closed'
    ],
    correctIndex: 3,
    explanation: 'Cephalopods (like Sepia and Loligo) are unique among molluscs in having a closed circulatory system, unlike the open system found in most other molluscs.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-45',
    type: 'mcq',
    question: 'The name "Echinodermata" refers to the presence of a spiny endoskeleton composed of:',
    options: [
      'Calcareous ossicles',
      'Chitinous plates',
      'Cartilage',
      'Silica spicules'
    ],
    correctIndex: 0,
    explanation: 'Echinoderms possess an endoskeleton made of calcareous ossicles, giving them their characteristic spiny surface.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-46',
    type: 'mcq',
    question: 'Adult echinoderms characteristically exhibit which type of symmetry?',
    options: [
      'Bilateral symmetry',
      'Radial symmetry',
      'Complete asymmetry',
      'Biradial symmetry'
    ],
    correctIndex: 1,
    explanation: 'Adult echinoderms characteristically show radial symmetry, despite their larvae showing a different symmetry type.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-47',
    type: 'mcq',
    question: 'The larval stage of echinoderms characteristically shows which type of symmetry, a feature considered evolutionarily significant in linking them to chordates?',
    options: [
      'Radial symmetry',
      'Complete asymmetry',
      'Bilateral symmetry',
      'Spherical symmetry'
    ],
    correctIndex: 2,
    explanation: 'Echinoderm larvae are bilaterally symmetrical, a feature considered significant in suggesting an evolutionary relationship with the bilaterally symmetrical chordates.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-48',
    type: 'mcq',
    question: 'A unique organ system found in echinoderms, used for locomotion, capturing food, and respiration, is the:',
    options: [
      'Tracheal system',
      'The canal system (as seen in sponges)',
      'Nephridial system',
      'Water vascular system'
    ],
    correctIndex: 3,
    explanation: 'The water vascular system, using hydraulic pressure to operate tube feet, is a unique and defining feature of echinoderms.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-49',
    type: 'mcq',
    question: 'Which of the following is an example of phylum Echinodermata?',
    options: [
      'Asterias (starfish)',
      'Sepia',
      'Balanoglossus',
      'Petromyzon'
    ],
    correctIndex: 0,
    explanation: 'Asterias (starfish) is a classic example of phylum Echinodermata.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-50',
    type: 'mcq',
    question: 'Hemichordata was previously classified as a subphylum of Chordata but is now recognised as a fully separate phylum mainly because it:',
    options: [
      'Possesses jointed appendages like arthropods',
      'Lacks a true, well-developed notochord throughout life (possessing only a rudimentary structure anteriorly)',
      'Is completely asymmetrical in body form',
      'Has a fully developed vertebral column'
    ],
    correctIndex: 1,
    explanation: 'Hemichordates lack a true, fully developed notochord (having only a rudimentary structure), which is why they are now classified as a separate phylum rather than a chordate subphylum.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-51',
    type: 'mcq',
    question: 'Balanoglossus, a well-known example of Hemichordata, is found exclusively in which type of habitat?',
    options: [
      'Freshwater habitats',
      'Terrestrial habitats',
      'Marine habitats',
      'Aerial habitats'
    ],
    correctIndex: 2,
    explanation: 'Balanoglossus is an exclusively marine organism, representative of phylum Hemichordata.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-52',
    type: 'mcq',
    question: 'All chordates possess a longitudinal, rod-like structure of mesodermal origin, present at some stage of life, called the:',
    options: [
      'Vertebral column',
      'Exoskeleton',
      'Mantle',
      'Notochord'
    ],
    correctIndex: 3,
    explanation: 'The notochord, a defining chordate feature, is a rod-like structure present at some stage of the life cycle of all chordates.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-53',
    type: 'mcq',
    question: 'In addition to the notochord, chordates are also characterised by the presence, at some life stage, of a:',
    options: [
      'Dorsal, hollow nerve cord',
      'Ventral, solid nerve cord',
      'Complete absence of any nerve cord',
      'Set of radial nerve cords only'
    ],
    correctIndex: 0,
    explanation: 'A dorsal, hollow (tubular) nerve cord is one of the four key defining features of the phylum Chordata.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-54',
    type: 'mcq',
    question: 'Paired pharyngeal gill slits, present at some stage of life in all chordates, primarily function in:',
    options: [
      'Locomotion exclusively',
      'Respiration (or filter feeding)',
      'Excretion exclusively',
      'Reproduction exclusively'
    ],
    correctIndex: 1,
    explanation: 'Pharyngeal gill slits, another defining chordate feature, are primarily associated with respiration or filter feeding.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-55',
    type: 'mcq',
    question: 'In Urochordata (Tunicata), a chordate subphylum, the notochord is present only in the:',
    options: [
      'Adult body, throughout life',
      'Head region of the adult',
      'Larval tail (and is generally lost in most adults)',
      'Nowhere, at any life stage'
    ],
    correctIndex: 2,
    explanation: 'In Urochordates (tunicates), the notochord is present only in the larval tail region and is typically lost during metamorphosis into the adult form.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-56',
    type: 'mcq',
    question: 'In Cephalochordata, a chordate subphylum represented by Branchiostoma (Amphioxus), the notochord:',
    options: [
      'Is present only during the larval stage',
      'Is completely absent at every life stage',
      'Is replaced entirely by a vertebral column in adults',
      'Persists throughout life, extending from the head to the tail region'
    ],
    correctIndex: 3,
    explanation: 'In Cephalochordates like Amphioxus, the notochord persists throughout the animal\'s entire life, extending along its full length.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-57',
    type: 'mcq',
    question: 'The presence or absence of jaws is used to broadly classify vertebrates into Gnathostomata and:',
    options: [
      'Agnatha',
      'Craniata',
      'Tetrapoda',
      'Amniota'
    ],
    correctIndex: 0,
    explanation: 'Vertebrates are broadly divided based on jaw presence into jawed (Gnathostomata) and jawless (Agnatha) groups.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-58',
    type: 'mcq',
    question: 'Which of the following is an example of a jawless vertebrate, belonging to class Cyclostomata (Agnatha)?',
    options: [
      'Scoliodon',
      'Petromyzon (lamprey)',
      'Labeo',
      'Rana'
    ],
    correctIndex: 1,
    explanation: 'Petromyzon (lamprey) is a classic example of a jawless vertebrate, belonging to class Cyclostomata within superclass Agnatha.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-59',
    type: 'mcq',
    question: 'Jawed vertebrates (Gnathostomata) are further broadly divided, based on limb structure, into Pisces (fish) and:',
    options: [
      'Chondrichthyes exclusively',
      'Osteichthyes exclusively',
      'Tetrapoda (four-limbed vertebrates)',
      'Agnatha'
    ],
    correctIndex: 2,
    explanation: 'Gnathostomata (jawed vertebrates) are further divided based on limb structure into Pisces (fish, lacking limbs) and Tetrapoda (four-limbed vertebrates).',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-60',
    type: 'mcq',
    question: 'The endoskeleton of members belonging to class Chondrichthyes is composed entirely of:',
    options: [
      'Bone',
      'Chitin',
      'Keratin',
      'Cartilage'
    ],
    correctIndex: 3,
    explanation: 'Chondrichthyes (cartilaginous fish) have an endoskeleton composed entirely of cartilage, rather than bone.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-61',
    type: 'mcq',
    question: 'Since members of Chondrichthyes generally lack a swim (air) bladder, they must:',
    options: [
      'Keep swimming continuously to avoid sinking',
      'Float effortlessly at the water surface at all times',
      'Breathe air directly at the surface',
      'Live only in freshwater habitats'
    ],
    correctIndex: 0,
    explanation: 'Lacking a swim bladder for buoyancy control, cartilaginous fish must swim continuously to avoid sinking to the bottom.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-62',
    type: 'mcq',
    question: 'Which of the following is an example of class Chondrichthyes?',
    options: [
      'Labeo',
      'Scoliodon (dogfish)',
      'Hippocampus',
      'Exocoetus'
    ],
    correctIndex: 1,
    explanation: 'Scoliodon (dogfish) is a classic example of class Chondrichthyes.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-63',
    type: 'mcq',
    question: 'The endoskeleton of members belonging to class Osteichthyes is composed mainly of:',
    options: [
      'Cartilage',
      'Chitin',
      'Bone',
      'Keratin'
    ],
    correctIndex: 2,
    explanation: 'Osteichthyes (bony fish) possess an endoskeleton composed mainly of bone, distinguishing them from cartilaginous fish.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-64',
    type: 'mcq',
    question: 'In bony fishes (Osteichthyes), the gills are typically protected and covered by a bony flap called the:',
    options: [
      'Mantle',
      'Exoskeleton',
      'Pinna',
      'Operculum'
    ],
    correctIndex: 3,
    explanation: 'The operculum is the bony flap that covers and protects the gills in bony fishes, a feature absent in cartilaginous fish.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-65',
    type: 'mcq',
    question: 'Which of the following is an example of a freshwater bony fish (class Osteichthyes)?',
    options: [
      'Labeo (rohu)',
      'Scoliodon',
      'Trygon',
      'Pristis'
    ],
    correctIndex: 0,
    explanation: 'Labeo (commonly known as rohu) is a well-known freshwater bony fish belonging to class Osteichthyes.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-66',
    type: 'mcq',
    question: 'Members of class Amphibia are characteristically capable of living:',
    options: [
      'Only in marine water',
      'Both on land and in water',
      'Only underground',
      'Only in the air'
    ],
    correctIndex: 1,
    explanation: 'Amphibians are characteristically adapted to live both on land and in water, reflecting their name (amphi = both, bios = life).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-67',
    type: 'mcq',
    question: 'The moist, scale-less skin of amphibians allows for an additional mode of respiration through the skin itself, called:',
    options: [
      'Tracheal respiration',
      'Book lung respiration',
      'Cutaneous respiration',
      'Gill respiration, even in adults'
    ],
    correctIndex: 2,
    explanation: 'Amphibians can respire through their moist skin, a process known as cutaneous respiration, supplementing lung respiration.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-68',
    type: 'mcq',
    question: 'The heart of most amphibians is characteristically:',
    options: [
      'Two-chambered',
      'Four-chambered',
      'Composed of chambers with no distinct atria or ventricles',
      'Three-chambered (two atria and one ventricle)'
    ],
    correctIndex: 3,
    explanation: 'Most amphibians possess a three-chambered heart, consisting of two atria and a single ventricle.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-69',
    type: 'mcq',
    question: 'Which of the following is an example of class Amphibia?',
    options: [
      'Rana (frog)',
      'Calotes',
      'Corvus',
      'Naja'
    ],
    correctIndex: 0,
    explanation: 'Rana (the frog) is a classic and well-known example of class Amphibia.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-70',
    type: 'mcq',
    question: 'The body of reptiles is characteristically covered by:',
    options: [
      'Moist, glandular skin without scales',
      'Dry, cornified skin with epidermal scales',
      'Feathers',
      'Hair'
    ],
    correctIndex: 1,
    explanation: 'Reptiles are covered by dry, cornified skin bearing epidermal scales, an adaptation to terrestrial life that reduces water loss.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-71',
    type: 'mcq',
    question: 'Reptiles are generally described as poikilothermic (cold-blooded), meaning their body temperature:',
    options: [
      'Remains constant regardless of the environment',
      'Is always higher than the environment',
      'Varies according to the surrounding environmental temperature',
      'Cannot be measured at all'
    ],
    correctIndex: 2,
    explanation: 'Poikilothermic (cold-blooded) animals like reptiles have a body temperature that fluctuates with the surrounding environmental temperature.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-72',
    type: 'mcq',
    question: 'Among reptiles, which group is notable for possessing a four-chambered heart, unlike most other members of the class?',
    options: [
      'Snakes',
      'Lizards',
      'Turtles',
      'Crocodiles'
    ],
    correctIndex: 3,
    explanation: 'Crocodiles are unique among reptiles in possessing a nearly complete four-chambered heart, unlike the typically three-chambered heart of most other reptiles.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-73',
    type: 'mcq',
    question: 'Which of the following is an example of class Reptilia?',
    options: [
      'Calotes (garden lizard)',
      'Bufo',
      'Columba',
      'Hyla'
    ],
    correctIndex: 0,
    explanation: 'Calotes (the garden lizard) is a classic example of class Reptilia.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-74',
    type: 'mcq',
    question: 'A defining characteristic feature found exclusively in birds (class Aves) among all vertebrates is the presence of:',
    options: [
      'Hair',
      'Feathers',
      'Scales',
      'Mammary glands'
    ],
    correctIndex: 1,
    explanation: 'Feathers are a defining, exclusive characteristic of birds (class Aves), found in no other vertebrate class.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-75',
    type: 'mcq',
    question: 'Birds are generally described as homoiothermic (warm-blooded), meaning their body temperature:',
    options: [
      'Varies directly with the external environment',
      'Cannot be regulated at all',
      'Remains relatively constant, regardless of the external environment',
      'Is always lower than the surrounding environment'
    ],
    correctIndex: 2,
    explanation: 'Homoiothermic (warm-blooded) animals like birds maintain a relatively constant internal body temperature, independent of the external environment.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-76',
    type: 'mcq',
    question: 'The bones of most flying birds are characteristically described as "pneumatic," meaning they:',
    options: [
      'Are extremely dense and heavy',
      'Are composed of cartilage rather than bone',
      'Contain no marrow at all',
      'Contain air cavities, making them lightweight for flight'
    ],
    correctIndex: 3,
    explanation: 'Pneumatic bones in birds contain air-filled cavities, reducing their overall weight and aiding in efficient flight.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-77',
    type: 'mcq',
    question: 'A defining characteristic feature found in all members of class Mammalia, used to nourish their young after birth, is the presence of:',
    options: [
      'Mammary glands',
      'Feathers',
      'Gill slits',
      'Cnidoblasts'
    ],
    correctIndex: 0,
    explanation: 'Mammary glands, which secrete milk to nourish offspring, are a defining characteristic feature found in all mammals.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-78',
    type: 'mcq',
    question: 'Which of the following mammals is exceptional in being oviparous (egg-laying), unlike the vast majority of mammals which are viviparous?',
    options: [
      'Kangaroo',
      'Platypus (Ornithorhynchus)',
      'Whale',
      'Bat'
    ],
    correctIndex: 1,
    explanation: 'The Platypus (Ornithorhynchus) is one of the few mammals (monotremes) that lays eggs, unlike the vast majority of mammals, which give birth to live young.',
    difficulty: 'medium'
  },
];

export default questions;
