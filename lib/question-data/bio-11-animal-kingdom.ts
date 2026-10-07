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
      'Annelida',
      'Platyhelminthes',
      'Coelenterata'
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
      'Arthropoda',
      'Mollusca',
      'Coelenterata (Cnidaria)'
    ],
    correctIndex: 3,
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
      'Mollusca',
      'Platyhelminthes'
    ],
    correctIndex: 3,
    explanation: 'Platyhelminthes (flatworms) show an organ level of organisation, where organs are present but not coordinated into organ systems as in higher phyla.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-4',
    type: 'mcq',
    question: 'Animals whose body can be divided into equal left and right halves by only a single plane passing through the centre are said to show:',
    options: [
      'Bilateral symmetry',
      'Radial symmetry',
      'Spherical symmetry',
      'Asymmetry'
    ],
    correctIndex: 0,
    explanation: 'Bilateral symmetry describes body plans divisible into equal left and right halves through only one specific plane.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-5',
    type: 'mcq',
    question: 'Animals whose body parts are arranged in a circular fashion around a central axis, such that any plane passing through the centre divides them into similar halves, show:',
    options: [
      'Bilateral symmetry',
      'Asymmetry',
      'Biradial symmetry',
      'Radial symmetry'
    ],
    correctIndex: 3,
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
      'Four germ layers',
      'One germ layer'
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
      'Blastoderm',
      'Mesoglea',
      'Notochord',
      'Mesoderm'
    ],
    correctIndex: 3,
    explanation: 'Triploblastic animals develop a third germ layer, the mesoderm, positioned between the ectoderm and endoderm.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-8',
    type: 'mcq',
    question: 'Animals in which the mesoderm occurs as scattered pouches between the ectoderm and endoderm, without forming a true body cavity, are called:',
    options: [
      'Pseudocoelomates',
      'Acoelomates',
      'Diploblastic animals',
      'Eucoelomates'
    ],
    correctIndex: 1,
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
      'Not lined by mesoderm at all',
      'On both sides (from the body wall and from the gut)',
      'Lined by ectoderm instead',
      'Only on one side'
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
      'Platyhelminthes',
      'Porifera',
      'Coelenterata',
      'Ctenophora'
    ],
    correctIndex: 1,
    explanation: 'The canal system, involving water flow through ostia and out through the osculum, is a distinctive feature of sponges (Porifera).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-12',
    type: 'mcq',
    question: 'The specialised collar cells in sponges that generate water currents and trap food particles are called choanocytes, and they possess:',
    options: [
      'Setae',
      'Cilia',
      'Flagella',
      'Nematocysts'
    ],
    correctIndex: 2,
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
      'Bony plates',
      'A calcareous shell'
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
      'Pila',
      'Taenia',
      'Hydra',
      'Sycon'
    ],
    correctIndex: 3,
    explanation: 'Sycon is a classic example of phylum Porifera (sponges).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-15',
    type: 'mcq',
    question: 'Stinging cells containing nematocysts, used by coelenterates for anchorage, defence, and capturing prey, are called:',
    options: [
      'Nephridia',
      'Choanocytes',
      'Flame cells',
      'Cnidoblasts (cnidocytes)'
    ],
    correctIndex: 3,
    explanation: 'Cnidoblasts (cnidocytes), containing stinging structures called nematocysts, are characteristic of coelenterates (cnidarians).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-16',
    type: 'mcq',
    question: 'Coelenterates possess a single internal cavity with only one opening, serving as both mouth and anus, called the:',
    options: [
      'Archenteron',
      'Coelenteron (gastrovascular cavity)',
      'Spongocoel',
      'A complete alimentary canal'
    ],
    correctIndex: 1,
    explanation: 'The coelenteron (gastrovascular cavity) of coelenterates has a single opening that functions as both mouth and anus.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-17',
    type: 'mcq',
    question: 'The two basic body forms exhibited by coelenterates are:',
    options: [
      'Zoea and megalopa',
      'Polyp and medusa',
      'Ammocoete and adult',
      'Larva and pupa'
    ],
    correctIndex: 1,
    explanation: 'Coelenterates typically exist as either a sessile polyp form or a free-swimming medusa form.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-18',
    type: 'mcq',
    question: 'The phenomenon in which polyp and medusa forms alternate in the life cycle of certain coelenterates, such as Obelia, is called:',
    options: [
      'Metagenesis',
      'Metamorphosis',
      'Parthenogenesis',
      'Regeneration'
    ],
    correctIndex: 0,
    explanation: 'Metagenesis refers to the alternation of polyp and medusa generations observed in the life cycle of certain coelenterates like Obelia.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-19',
    type: 'mcq',
    question: 'Which of the following is an example of phylum Coelenterata (Cnidaria)?',
    options: [
      'Pleurobrachia',
      'Physalia',
      'Ascaris',
      'Fasciola'
    ],
    correctIndex: 1,
    explanation: 'Physalia (the Portuguese man-of-war) is a well-known example of phylum Coelenterata (Cnidaria).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-20',
    type: 'mcq',
    question: 'Ctenophores characteristically move using eight external rows of ciliated plates called:',
    options: [
      'Parapodia',
      'Tube feet',
      'Nematocysts',
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
      'Metameric segmentation',
      'A canal system',
      'A water vascular system',
      'Bioluminescence'
    ],
    correctIndex: 3,
    explanation: 'Bioluminescence, the ability to produce light, is a well-known feature displayed by many ctenophores.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-22',
    type: 'mcq',
    question: 'Members of phylum Platyhelminthes are commonly known as:',
    options: [
      'Roundworms',
      'Segmented worms',
      'Flatworms',
      'Spiny-skinned animals'
    ],
    correctIndex: 2,
    explanation: 'Platyhelminthes are commonly called flatworms, owing to their characteristically flattened, dorsoventral body shape.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-23',
    type: 'mcq',
    question: 'The body cavity condition found in members of phylum Platyhelminthes is:',
    options: [
      'Acoelomate',
      'Pseudocoelomate',
      'Eucoelomate',
      'Fully coelomate'
    ],
    correctIndex: 0,
    explanation: 'Platyhelminthes lack a true body cavity and are classified as acoelomate.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-24',
    type: 'mcq',
    question: 'Which of the following is a well-known parasitic example of phylum Platyhelminthes?',
    options: [
      'Ascaris',
      'Nereis',
      'Taenia (tapeworm)',
      'Pheretima'
    ],
    correctIndex: 2,
    explanation: 'Taenia (tapeworm) is a common parasitic example of phylum Platyhelminthes.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-25',
    type: 'mcq',
    question: 'Planaria, a free-living member of Platyhelminthes, is particularly notable for its remarkable ability to:',
    options: [
      'Fly over short distances',
      'Photosynthesise its own food',
      'Regenerate lost body parts',
      'Produce silk fibres'
    ],
    correctIndex: 2,
    explanation: 'Planaria is well known for its exceptional regenerative capacity, being able to regrow lost body parts.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-26',
    type: 'mcq',
    question: 'Members of phylum Aschelminthes (Nematoda) exhibit which type of body cavity?',
    options: [
      'Pseudocoelomate',
      'No body cavity at all',
      'Acoelomate',
      'Eucoelomate'
    ],
    correctIndex: 0,
    explanation: 'Aschelminthes (Nematoda) possess a pseudocoelom, a body cavity not fully lined by mesoderm.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-27',
    type: 'mcq',
    question: 'Unlike Platyhelminthes, members of Aschelminthes possess a complete alimentary canal, featuring:',
    options: [
      'Only a mouth, with no anus',
      'Neither a mouth nor an anus',
      'Both a mouth and an anus',
      'Only an anus, with no mouth'
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
      'Reproduces only by parthenogenesis',
      'Dioecious (sexes are separate)',
      'Reproduces only asexually'
    ],
    correctIndex: 2,
    explanation: 'Ascaris is dioecious, meaning male and female reproductive organs occur in separate individuals.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-29',
    type: 'mcq',
    question: 'Wuchereria, the filarial worm responsible for causing elephantiasis in humans, belongs to which phylum?',
    options: [
      'Annelida',
      'Aschelminthes',
      'Platyhelminthes',
      'Arthropoda'
    ],
    correctIndex: 1,
    explanation: 'Wuchereria, the causative agent of filariasis (elephantiasis), belongs to phylum Aschelminthes (Nematoda).',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-30',
    type: 'mcq',
    question: 'A defining structural feature of phylum Annelida is:',
    options: [
      'The presence of a notochord',
      'The complete absence of a coelom',
      'Metameric segmentation (repetition of body segments)',
      'Radial symmetry'
    ],
    correctIndex: 2,
    explanation: 'Metameric segmentation, the repetition of similar body segments along the length of the body, is a defining feature of Annelida.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-31',
    type: 'mcq',
    question: 'The type of circulatory system found in phylum Annelida is:',
    options: [
      'Open',
      'Closed',
      'Present only during the larval stage',
      'Completely absent'
    ],
    correctIndex: 1,
    explanation: 'Annelids possess a closed circulatory system, in which blood remains confined within vessels.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-32',
    type: 'mcq',
    question: 'Pheretima, the common earthworm, is a well-known example belonging to phylum:',
    options: [
      'Aschelminthes',
      'Annelida',
      'Arthropoda',
      'Mollusca'
    ],
    correctIndex: 1,
    explanation: 'Pheretima (the common earthworm) is a classic example of phylum Annelida.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-33',
    type: 'mcq',
    question: 'Hirudinaria, a blood-sucking annelid, is more commonly known as the:',
    options: [
      'Ragworm',
      'Tapeworm',
      'Leech',
      'Earthworm'
    ],
    correctIndex: 2,
    explanation: 'Hirudinaria is the scientific name for a common blood-sucking leech, an annelid.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-34',
    type: 'mcq',
    question: 'Phylum Arthropoda, the largest phylum in the animal kingdom, accounts for approximately what fraction of all named animal species?',
    options: [
      'Two-thirds',
      'One-half',
      'One-quarter',
      'One-tenth'
    ],
    correctIndex: 0,
    explanation: 'Arthropoda is the largest animal phylum, accounting for roughly two-thirds of all named species in the animal kingdom.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-35',
    type: 'mcq',
    question: 'The name "Arthropoda" directly refers to the presence of:',
    options: [
      'A closed circulatory system',
      'Radial symmetry',
      'A notochord',
      'Jointed appendages (legs)'
    ],
    correctIndex: 3,
    explanation: 'The term \'Arthropoda\' means \'jointed feet/appendages,\' referring to their characteristic jointed legs and other appendages.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-36',
    type: 'mcq',
    question: 'The exoskeleton covering the body of arthropods is composed mainly of:',
    options: [
      'Cellulose',
      'Chitin',
      'Keratin',
      'Calcium carbonate'
    ],
    correctIndex: 1,
    explanation: 'The hard exoskeleton of arthropods is composed primarily of chitin, a tough polysaccharide.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-37',
    type: 'mcq',
    question: 'The type of circulatory system characteristically found in arthropods is:',
    options: [
      'Closed',
      'Open (blood/haemolymph is not always confined to vessels)',
      'Restricted only to the gills',
      'Completely absent'
    ],
    correctIndex: 1,
    explanation: 'Arthropods possess an open circulatory system, in which the blood (haemolymph) is not always confined within vessels, instead bathing tissues directly in open spaces.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-38',
    type: 'mcq',
    question: 'Which of the following is an example of phylum Arthropoda?',
    options: [
      'Asterias',
      'Balanoglossus',
      'Pila',
      'Locust'
    ],
    correctIndex: 3,
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
      'Gill slits covered by an operculum',
      'Tracheae'
    ],
    correctIndex: 3,
    explanation: 'Many terrestrial arthropods, especially insects, respire using a network of tubes called tracheae, which directly deliver air to tissues.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-40',
    type: 'mcq',
    question: 'Mollusca is generally regarded as the second largest phylum in the animal kingdom in terms of the number of species, ranking just after:',
    options: [
      'Arthropoda',
      'Chordata',
      'Annelida',
      'Echinodermata'
    ],
    correctIndex: 0,
    explanation: 'Mollusca is the second largest animal phylum, following Arthropoda in terms of total number of described species.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-41',
    type: 'mcq',
    question: 'The soft body of molluscs is generally covered by a specialised fold of skin called the:',
    options: [
      'Notochord',
      'Exoskeleton',
      'Cuticle',
      'Mantle'
    ],
    correctIndex: 3,
    explanation: 'The mantle is a specialised fold of skin covering the visceral mass of molluscs, and it often secretes the calcareous shell.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-42',
    type: 'mcq',
    question: 'In molluscs, respiration typically occurs via gill-like structures located within the mantle cavity, called:',
    options: [
      'Book lungs',
      'Ctenidia',
      'Nephridia',
      'Tracheae'
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
      'Balanoglossus',
      'Pila (apple snail)',
      'Scoliodon',
      'Hirudinaria'
    ],
    correctIndex: 1,
    explanation: 'Pila (the apple snail) is a common example of phylum Mollusca.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-44',
    type: 'mcq',
    question: 'Unlike most other molluscs, cephalopods such as Sepia and Loligo are notable for possessing which type of circulatory system?',
    options: [
      'Restricted only to the muscular foot',
      'Completely absent',
      'Closed',
      'Open'
    ],
    correctIndex: 2,
    explanation: 'Cephalopods (like Sepia and Loligo) are unique among molluscs in having a closed circulatory system, unlike the open system found in most other molluscs.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-45',
    type: 'mcq',
    question: 'The name "Echinodermata" refers to the presence of a spiny endoskeleton composed of:',
    options: [
      'Chitinous plates',
      'Calcareous ossicles',
      'Silica spicules',
      'Cartilage'
    ],
    correctIndex: 1,
    explanation: 'Echinoderms possess an endoskeleton made of calcareous ossicles, giving them their characteristic spiny surface.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-46',
    type: 'mcq',
    question: 'Adult echinoderms characteristically exhibit which type of symmetry?',
    options: [
      'Bilateral symmetry',
      'Biradial symmetry',
      'Radial symmetry',
      'Complete asymmetry'
    ],
    correctIndex: 2,
    explanation: 'Adult echinoderms characteristically show radial symmetry, despite their larvae showing a different symmetry type.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-47',
    type: 'mcq',
    question: 'The larval stage of echinoderms characteristically shows which type of symmetry, a feature considered evolutionarily significant in linking them to chordates?',
    options: [
      'Radial symmetry',
      'Bilateral symmetry',
      'Complete asymmetry',
      'Spherical symmetry'
    ],
    correctIndex: 1,
    explanation: 'Echinoderm larvae are bilaterally symmetrical, a feature considered significant in suggesting an evolutionary relationship with the bilaterally symmetrical chordates.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-48',
    type: 'mcq',
    question: 'A unique organ system found in echinoderms, used for locomotion, capturing food, and respiration, is the:',
    options: [
      'Nephridial system',
      'Tracheal system',
      'The canal system (as seen in sponges)',
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
      'Has a fully developed vertebral column',
      'Lacks a true, well-developed notochord throughout life (possessing only a rudimentary structure anteriorly)',
      'Is completely asymmetrical in body form'
    ],
    correctIndex: 2,
    explanation: 'Hemichordates lack a true, fully developed notochord (having only a rudimentary structure), which is why they are now classified as a separate phylum rather than a chordate subphylum.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-51',
    type: 'mcq',
    question: 'Balanoglossus, a well-known example of Hemichordata, is found exclusively in which type of habitat?',
    options: [
      'Marine habitats',
      'Aerial habitats',
      'Terrestrial habitats',
      'Freshwater habitats'
    ],
    correctIndex: 0,
    explanation: 'Balanoglossus is an exclusively marine organism, representative of phylum Hemichordata.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-52',
    type: 'mcq',
    question: 'All chordates possess a longitudinal, rod-like structure of mesodermal origin, present at some stage of life, called the:',
    options: [
      'Vertebral column',
      'Notochord',
      'Exoskeleton',
      'Mantle'
    ],
    correctIndex: 1,
    explanation: 'The notochord, a defining chordate feature, is a rod-like structure present at some stage of the life cycle of all chordates.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-53',
    type: 'mcq',
    question: 'In addition to the notochord, chordates are also characterised by the presence, at some life stage, of a:',
    options: [
      'Ventral, solid nerve cord',
      'Dorsal, hollow nerve cord',
      'Set of radial nerve cords only',
      'Complete absence of any nerve cord'
    ],
    correctIndex: 1,
    explanation: 'A dorsal, hollow (tubular) nerve cord is one of the four key defining features of the phylum Chordata.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-54',
    type: 'mcq',
    question: 'Paired pharyngeal gill slits, present at some stage of life in all chordates, primarily function in:',
    options: [
      'Respiration (or filter feeding)',
      'Excretion exclusively',
      'Locomotion exclusively',
      'Reproduction exclusively'
    ],
    correctIndex: 0,
    explanation: 'Pharyngeal gill slits, another defining chordate feature, are primarily associated with respiration or filter feeding.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-55',
    type: 'mcq',
    question: 'In Urochordata (Tunicata), a chordate subphylum, the notochord is present only in the:',
    options: [
      'Larval tail (and is generally lost in most adults)',
      'Adult body, throughout life',
      'Nowhere, at any life stage',
      'Head region of the adult'
    ],
    correctIndex: 0,
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
      'Amniota',
      'Craniata',
      'Tetrapoda'
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
      'Labeo',
      'Rana',
      'Petromyzon (lamprey)',
      'Scoliodon'
    ],
    correctIndex: 2,
    explanation: 'Petromyzon (lamprey) is a classic example of a jawless vertebrate, belonging to class Cyclostomata within superclass Agnatha.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-59',
    type: 'mcq',
    question: 'Jawed vertebrates (Gnathostomata) are further broadly divided, based on limb structure, into Pisces (fish) and:',
    options: [
      'Chondrichthyes exclusively',
      'Agnatha',
      'Tetrapoda (four-limbed vertebrates)',
      'Osteichthyes exclusively'
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
      'Cartilage',
      'Keratin',
      'Chitin',
      'Bone'
    ],
    correctIndex: 0,
    explanation: 'Chondrichthyes (cartilaginous fish) have an endoskeleton composed entirely of cartilage, rather than bone.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-61',
    type: 'mcq',
    question: 'Since members of Chondrichthyes generally lack a swim (air) bladder, they must:',
    options: [
      'Float effortlessly at the water surface at all times',
      'Live only in freshwater habitats',
      'Keep swimming continuously to avoid sinking',
      'Breathe air directly at the surface'
    ],
    correctIndex: 2,
    explanation: 'Lacking a swim bladder for buoyancy control, cartilaginous fish must swim continuously to avoid sinking to the bottom.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-62',
    type: 'mcq',
    question: 'Which of the following is an example of class Chondrichthyes?',
    options: [
      'Scoliodon (dogfish)',
      'Hippocampus',
      'Exocoetus',
      'Labeo'
    ],
    correctIndex: 0,
    explanation: 'Scoliodon (dogfish) is a classic example of class Chondrichthyes.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-63',
    type: 'mcq',
    question: 'The endoskeleton of members belonging to class Osteichthyes is composed mainly of:',
    options: [
      'Keratin',
      'Cartilage',
      'Chitin',
      'Bone'
    ],
    correctIndex: 3,
    explanation: 'Osteichthyes (bony fish) possess an endoskeleton composed mainly of bone, distinguishing them from cartilaginous fish.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-64',
    type: 'mcq',
    question: 'In bony fishes (Osteichthyes), the gills are typically protected and covered by a bony flap called the:',
    options: [
      'Exoskeleton',
      'Operculum',
      'Mantle',
      'Pinna'
    ],
    correctIndex: 1,
    explanation: 'The operculum is the bony flap that covers and protects the gills in bony fishes, a feature absent in cartilaginous fish.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-65',
    type: 'mcq',
    question: 'Which of the following is an example of a freshwater bony fish (class Osteichthyes)?',
    options: [
      'Pristis',
      'Trygon',
      'Labeo (rohu)',
      'Scoliodon'
    ],
    correctIndex: 2,
    explanation: 'Labeo (commonly known as rohu) is a well-known freshwater bony fish belonging to class Osteichthyes.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-66',
    type: 'mcq',
    question: 'Members of class Amphibia are characteristically capable of living:',
    options: [
      'Only underground',
      'Only in the air',
      'Both on land and in water',
      'Only in marine water'
    ],
    correctIndex: 2,
    explanation: 'Amphibians are characteristically adapted to live both on land and in water, reflecting their name (amphi = both, bios = life).',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-67',
    type: 'mcq',
    question: 'The moist, scale-less skin of amphibians allows for an additional mode of respiration through the skin itself, called:',
    options: [
      'Gill respiration, even in adults',
      'Tracheal respiration',
      'Book lung respiration',
      'Cutaneous respiration'
    ],
    correctIndex: 3,
    explanation: 'Amphibians can respire through their moist skin, a process known as cutaneous respiration, supplementing lung respiration.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-68',
    type: 'mcq',
    question: 'The heart of most amphibians is characteristically:',
    options: [
      'Four-chambered',
      'Two-chambered',
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
      'Calotes',
      'Rana (frog)',
      'Naja',
      'Corvus'
    ],
    correctIndex: 1,
    explanation: 'Rana (the frog) is a classic and well-known example of class Amphibia.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-70',
    type: 'mcq',
    question: 'The body of reptiles is characteristically covered by:',
    options: [
      'Feathers',
      'Moist, glandular skin without scales',
      'Hair',
      'Dry, cornified skin with epidermal scales'
    ],
    correctIndex: 3,
    explanation: 'Reptiles are covered by dry, cornified skin bearing epidermal scales, an adaptation to terrestrial life that reduces water loss.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-71',
    type: 'mcq',
    question: 'Reptiles are generally described as poikilothermic (cold-blooded), meaning their body temperature:',
    options: [
      'Varies according to the surrounding environmental temperature',
      'Remains constant regardless of the environment',
      'Is always higher than the environment',
      'Cannot be measured at all'
    ],
    correctIndex: 0,
    explanation: 'Poikilothermic (cold-blooded) animals like reptiles have a body temperature that fluctuates with the surrounding environmental temperature.',
    difficulty: 'medium'
  },
  {
    id: 'animal-kingdom-72',
    type: 'mcq',
    question: 'Among reptiles, which group is notable for possessing a four-chambered heart, unlike most other members of the class?',
    options: [
      'Lizards',
      'Snakes',
      'Crocodiles',
      'Turtles'
    ],
    correctIndex: 2,
    explanation: 'Crocodiles are unique among reptiles in possessing a nearly complete four-chambered heart, unlike the typically three-chambered heart of most other reptiles.',
    difficulty: 'hard'
  },
  {
    id: 'animal-kingdom-73',
    type: 'mcq',
    question: 'Which of the following is an example of class Reptilia?',
    options: [
      'Calotes (garden lizard)',
      'Columba',
      'Bufo',
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
      'Scales',
      'Feathers',
      'Mammary glands'
    ],
    correctIndex: 2,
    explanation: 'Feathers are a defining, exclusive characteristic of birds (class Aves), found in no other vertebrate class.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-75',
    type: 'mcq',
    question: 'Birds are generally described as homoiothermic (warm-blooded), meaning their body temperature:',
    options: [
      'Cannot be regulated at all',
      'Varies directly with the external environment',
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
      'Are composed of cartilage rather than bone',
      'Contain no marrow at all',
      'Are extremely dense and heavy',
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
      'Cnidoblasts',
      'Feathers',
      'Mammary glands',
      'Gill slits'
    ],
    correctIndex: 2,
    explanation: 'Mammary glands, which secrete milk to nourish offspring, are a defining characteristic feature found in all mammals.',
    difficulty: 'easy'
  },
  {
    id: 'animal-kingdom-78',
    type: 'mcq',
    question: 'Which of the following mammals is exceptional in being oviparous (egg-laying), unlike the vast majority of mammals which are viviparous?',
    options: [
      'Platypus (Ornithorhynchus)',
      'Bat',
      'Whale',
      'Kangaroo'
    ],
    correctIndex: 0,
    explanation: 'The Platypus (Ornithorhynchus) is one of the few mammals (monotremes) that lays eggs, unlike the vast majority of mammals, which give birth to live young.',
    difficulty: 'medium'
  },
];

export default questions;
