import type { Question } from "@/lib/questionBank";

// NEET Chemistry Question Bank
// Chapter: Classification of Elements and Periodic Table
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'classification-of-elements-and-periodic-table-1',
    type: 'mcq',
    question: 'Dobereiner\'s Law of Triads states that the atomic mass of the middle element is approximately equal to the:',
    options: [
      'Sum of the atomic masses of the other two elements',
      'Average of the atomic masses of the other two elements',
      'Product of the atomic masses of the other two elements',
      'Square root of the atomic mass of the first element'
    ],
    correctIndex: 1,
    explanation: 'In Dobereiner\'s triads, the atomic mass of the middle element was found to be roughly the arithmetic mean of the atomic masses of the first and third elements.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-2',
    type: 'mcq',
    question: 'Which of the following is a correct example of Dobereiner\'s triad?',
    options: [
      'Fe, Co, Ni',
      'Li, Na, K',
      'C, N, O',
      'H, He, Li'
    ],
    correctIndex: 1,
    explanation: 'Li, Na, and K form a classic Dobereiner triad, with sodium\'s atomic mass being close to the average of lithium and potassium.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-3',
    type: 'mcq',
    question: 'Dobereiner\'s Law of Triads was ultimately discarded mainly because:',
    options: [
      'It could be applied to only a few elements and could not be extended further',
      'It predicted the wrong atomic masses for all elements',
      'It required knowledge of atomic number',
      'It applied to all known elements of the time'
    ],
    correctIndex: 0,
    explanation: 'Since only a few elements could be grouped into triads, Dobereiner\'s classification was too limited and was eventually discarded.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-4',
    type: 'mcq',
    question: 'Newlands\' Law of Octaves stated that when elements are arranged in order of increasing atomic mass, every eighth element has properties similar to the:',
    options: [
      'First element',
      'Seventh element',
      'Second element',
      'There is no such repetition'
    ],
    correctIndex: 0,
    explanation: 'Newlands observed that the properties of every eighth element resembled the first, similar to the octaves in music, hence the name.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-5',
    type: 'mcq',
    question: 'Newlands\' Law of Octaves was found to be applicable only up to the element:',
    options: [
      'Zinc',
      'Iron',
      'Sodium',
      'Calcium'
    ],
    correctIndex: 3,
    explanation: 'The Law of Octaves worked reasonably well only up to calcium; for elements heavier than calcium it failed to hold.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-6',
    type: 'mcq',
    question: 'A major limitation of Newlands\' Law of Octaves was that:',
    options: [
      'It was based on atomic number rather than atomic mass',
      'It assumed only 56 elements existed in nature and left no room for undiscovered elements',
      'It applied equally well to all 118 known elements',
      'It required elements to be arranged by decreasing atomic mass'
    ],
    correctIndex: 1,
    explanation: 'Newlands assumed only 56 elements existed at the time and made no provision for new elements, and sometimes had to fit two elements in the same slot to maintain the pattern.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-7',
    type: 'mcq',
    question: 'Mendeleev\'s Periodic Law states that the physical and chemical properties of elements are a periodic function of their:',
    options: [
      'Atomic number',
      'Number of protons and neutrons combined',
      'Atomic mass',
      'Number of neutrons'
    ],
    correctIndex: 2,
    explanation: 'Mendeleev\'s original periodic law was based on atomic mass, later corrected to atomic number by Moseley in the modern periodic law.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-8',
    type: 'mcq',
    question: 'In Mendeleev\'s periodic table, the horizontal rows and vertical columns were called, respectively:',
    options: [
      'Series and blocks',
      'Periods and groups',
      'Blocks and series',
      'Groups and periods'
    ],
    correctIndex: 1,
    explanation: 'In Mendeleev\'s table, horizontal rows were called periods and vertical columns were called groups.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-9',
    type: 'mcq',
    question: 'Mendeleev left gaps in his periodic table for elements not yet discovered, and successfully predicted the properties of elements such as:',
    options: [
      'Hydrogen and helium',
      'Sodium and potassium',
      'Eka-aluminium and eka-silicon (later identified as gallium and germanium)',
      'Carbon and nitrogen'
    ],
    correctIndex: 2,
    explanation: 'Mendeleev\'s predicted eka-aluminium and eka-silicon closely matched the properties of the later-discovered elements gallium and germanium, a major success of his table.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-10',
    type: 'mcq',
    question: 'A key anomaly in Mendeleev\'s periodic table was that certain elements had to be placed out of order of increasing atomic mass to keep similar elements together; an example of such a pair is:',
    options: [
      'H and He',
      'Co and Ni (or Te and I)',
      'Li and Na',
      'F and Cl'
    ],
    correctIndex: 1,
    explanation: 'Cobalt (higher atomic mass) had to be placed before nickel (lower atomic mass), and similarly tellurium before iodine, to preserve similarity of properties within a group - anomalies later resolved by using atomic number instead of atomic mass.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-11',
    type: 'mcq',
    question: 'Mendeleev\'s periodic table could not satisfactorily accommodate which of the following?',
    options: [
      'Noble gases',
      'Isotopes of elements, since they have different atomic masses but similar chemical properties',
      'Halogens',
      'Alkali metals'
    ],
    correctIndex: 1,
    explanation: 'Since isotopes of the same element have different atomic masses but identical chemical properties, Mendeleev\'s mass-based classification could not logically justify their single position, a problem later resolved by using atomic number.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-12',
    type: 'mcq',
    question: 'The position of which element was considered anomalous/uncertain in Mendeleev\'s periodic table due to its resemblance with both alkali metals and halogens?',
    options: [
      'Hydrogen',
      'Lithium',
      'Carbon',
      'Helium'
    ],
    correctIndex: 0,
    explanation: 'Hydrogen resembles alkali metals (forms +1 ion) as well as halogens (forms -1 ion, diatomic molecule), making its position in the periodic table debatable.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-13',
    type: 'mcq',
    question: 'The Modern Periodic Law, as corrected by Henry Moseley, states that the physical and chemical properties of elements are a periodic function of their:',
    options: [
      'Atomic number',
      'Number of isotopes',
      'Atomic mass',
      'Atomic volume'
    ],
    correctIndex: 0,
    explanation: 'Moseley showed that atomic number, not atomic mass, is the fundamental property governing periodicity, giving rise to the Modern Periodic Law.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-14',
    type: 'mcq',
    question: 'Moseley established the concept of atomic number by studying the relationship between atomic number and the:',
    options: [
      'Melting point of elements',
      'Density of elements',
      'Boiling point of elements',
      'Frequency of X-rays produced when elements were bombarded with high-energy electrons'
    ],
    correctIndex: 3,
    explanation: 'Moseley observed a systematic relationship between the frequency of X-rays emitted by an element and its atomic number, establishing atomic number as the more fundamental property.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-15',
    type: 'mcq',
    question: 'The use of atomic number instead of atomic mass in the Modern Periodic Law successfully resolved the anomaly regarding the relative positions of:',
    options: [
      'Lithium and sodium',
      'Cobalt and nickel (and similarly tellurium and iodine)',
      'Hydrogen and helium',
      'Carbon and silicon'
    ],
    correctIndex: 1,
    explanation: 'When arranged by atomic number rather than atomic mass, cobalt (Z=27) correctly precedes nickel (Z=28), resolving the earlier anomaly.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-16',
    type: 'mcq',
    question: 'The Modern Periodic Table, in its long form, consists of how many groups and periods, respectively?',
    options: [
      '18 groups and 7 periods',
      '8 groups and 7 periods',
      '18 groups and 8 periods',
      '16 groups and 6 periods'
    ],
    correctIndex: 0,
    explanation: 'The modern long-form periodic table has 18 vertical columns (groups) numbered 1 to 18, and 7 horizontal rows (periods).',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-17',
    type: 'mcq',
    question: 'The first period of the periodic table contains only two elements because it corresponds to the filling of the:',
    options: [
      '2s and 2p orbitals',
      '4s, 3d, and 4p orbitals',
      '1s orbital',
      '3s, 3p, and 3d orbitals'
    ],
    correctIndex: 2,
    explanation: 'Period 1 involves filling of the 1s orbital, which can hold a maximum of 2 electrons, giving only hydrogen and helium.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-18',
    type: 'mcq',
    question: 'Period 2 and Period 3 of the periodic table each contain how many elements?',
    options: [
      '18 elements each',
      '2 elements each',
      '32 elements each',
      '8 elements each'
    ],
    correctIndex: 3,
    explanation: 'Periods 2 and 3 involve filling of ns and np orbitals (n=2 and n=3 respectively), each accommodating 8 elements.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-19',
    type: 'mcq',
    question: 'Periods 4 and 5 of the periodic table each contain how many elements, due to the filling of d orbitals?',
    options: [
      '32 elements each',
      '2 elements each',
      '18 elements each',
      '8 elements each'
    ],
    correctIndex: 2,
    explanation: 'Periods 4 and 5 involve filling of ns, (n-1)d, and np orbitals, giving 18 elements each.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-20',
    type: 'mcq',
    question: 'Period 6 of the periodic table contains 32 elements because, in addition to s, p and d orbitals, it also involves the filling of:',
    options: [
      'f orbitals (4f, lanthanoids)',
      'Additional s orbitals',
      'No additional orbitals; it has only 18 elements',
      'g orbitals'
    ],
    correctIndex: 0,
    explanation: 'Period 6 includes the filling of 4f orbitals (the lanthanoid series) in addition to 6s, 5d, and 6p, giving a total of 32 elements.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-21',
    type: 'mcq',
    question: 'Period 7 of the periodic table is considered incomplete/includes synthetic elements and involves the filling of orbitals up to:',
    options: [
      '5f, 6d and 7p (actinoids)',
      '3d',
      '4f',
      '5d only'
    ],
    correctIndex: 0,
    explanation: 'Period 7 involves filling of 7s, 5f (actinoids), 6d, and 7p orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-22',
    type: 'mcq',
    question: 'Elements placed in the same group of the periodic table have the same number of:',
    options: [
      'Isotopes',
      'Neutrons',
      'Valence electrons and similar valence-shell electronic configuration',
      'Protons'
    ],
    correctIndex: 2,
    explanation: 'Elements in the same group share the same valence-shell electronic configuration, which accounts for their similar chemical properties.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-23',
    type: 'mcq',
    question: 'The s-block of the periodic table comprises which groups?',
    options: [
      'Groups 1 to 18',
      'Groups 3 to 12',
      'Groups 13 to 18',
      'Groups 1 and 2'
    ],
    correctIndex: 3,
    explanation: 'The s-block consists of Group 1 (alkali metals) and Group 2 (alkaline earth metals), where the last electron enters an s orbital.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-24',
    type: 'mcq',
    question: 'The d-block elements, also called transition elements, are found in which groups of the periodic table?',
    options: [
      'Only group 18',
      'Groups 3 to 12',
      'Groups 1 and 2',
      'Groups 13 to 18'
    ],
    correctIndex: 1,
    explanation: 'The d-block, comprising the transition elements, spans groups 3 to 12, where electrons progressively fill the (n-1)d orbitals.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-25',
    type: 'mcq',
    question: 'The f-block elements, comprising the lanthanoids and actinoids, are conventionally placed:',
    options: [
      'Separately at the bottom of the periodic table',
      'In group 1 only',
      'Within groups 3 to 12 along with d-block elements',
      'In group 18 only'
    ],
    correctIndex: 0,
    explanation: 'To keep the periodic table compact, the 14 lanthanoids and 14 actinoids (f-block) are placed separately below the main body of the table.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-26',
    type: 'mcq',
    question: 'Helium, though having an s-block electronic configuration (1s2), is placed along with the noble gases in group 18 because:',
    options: [
      'It has an incomplete octet like halogens',
      'It has 8 valence electrons like other group 18 elements',
      'It shows chemical inertness and properties similar to other noble gases, having a fully filled valence shell',
      'It is a metal like alkaline earth elements'
    ],
    correctIndex: 2,
    explanation: 'Despite its 1s2 configuration resembling s-block elements, helium is grouped with noble gases because its completely filled valence shell gives it similar chemical inertness.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-27',
    type: 'mcq',
    question: 'IUPAC nomenclature for elements with atomic number greater than 100 is based on:',
    options: [
      'Names of their discoverers only',
      'Numerical roots representing the digits of the atomic number, combined and ending in \'-ium\'',
      'Colour of the element',
      'Random Latin words'
    ],
    correctIndex: 1,
    explanation: 'IUPAC devised a systematic nomenclature using numerical roots for each digit of the atomic number, with the name ending in \'-ium\'.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-28',
    type: 'mcq',
    question: 'In the IUPAC nomenclature for elements with Z > 100, the numerical root used for the digit \'1\' is:',
    options: [
      'Tri',
      'Bi',
      'Nil',
      'Un'
    ],
    correctIndex: 3,
    explanation: 'The numerical root for digit 1 is \'un\', for 0 it is \'nil\', for 2 it is \'bi\', and so on, as per IUPAC convention.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-29',
    type: 'mcq',
    question: 'As per IUPAC systematic nomenclature, the temporary name given to the element with atomic number 104 is:',
    options: [
      'Unbibium',
      'Unnilpentium',
      'Unnilquadium',
      'Ununoctium'
    ],
    correctIndex: 2,
    explanation: 'Element 104 was temporarily named Unnilquadium (symbol Unq) using IUPAC nomenclature, before being officially named Rutherfordium (Rf).',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-30',
    type: 'mcq',
    question: 'The symbol assigned to elements under the IUPAC systematic nomenclature for Z > 100 is generally formed using:',
    options: [
      'The atomic mass number',
      'The full numerical name',
      'A single Greek letter',
      'The first letters of each of the three numerical roots making up the name'
    ],
    correctIndex: 3,
    explanation: 'The three-letter symbol is derived by taking the first letter of each numerical root that makes up the systematic name.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-31',
    type: 'mcq',
    question: 'Which numerical root is used for the digit \'0\' in IUPAC nomenclature of elements with Z > 100?',
    options: [
      'Oct',
      'Nil',
      'Un',
      'Zero'
    ],
    correctIndex: 1,
    explanation: 'The IUPAC numerical root for the digit 0 is \'nil\'.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-32',
    type: 'mcq',
    question: 'The period number of an element in the periodic table corresponds to the:',
    options: [
      'Number of electrons in the atom',
      'Number of protons in the nucleus',
      'Highest principal quantum number (n) of the shell being filled (outermost shell)',
      'Atomic mass of the element'
    ],
    correctIndex: 2,
    explanation: 'The period number equals the value of the principal quantum number n of the outermost (valence) shell of the atom.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-33',
    type: 'mcq',
    question: 'An element with the electronic configuration [Ne] 3s2 3p3 would be placed in which period and group?',
    options: [
      'Period 2, Group 15',
      'Period 3, Group 15',
      'Period 3, Group 13',
      'Period 2, Group 13'
    ],
    correctIndex: 1,
    explanation: 'The outermost shell n=3 places it in period 3, and 5 valence electrons (3s2 3p3) place it in group 15.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-34',
    type: 'mcq',
    question: 'Elements of group 17 (halogens) have a general valence-shell electronic configuration of:',
    options: [
      'ns2np4',
      'ns2np5',
      'ns2np6',
      'ns1'
    ],
    correctIndex: 1,
    explanation: 'Halogens have seven valence electrons with the general configuration ns2np5.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-35',
    type: 'mcq',
    question: 'Elements of group 1 (alkali metals) have a general valence-shell electronic configuration of:',
    options: [
      'ns2np1',
      'ns2',
      'ns2np6',
      'ns1'
    ],
    correctIndex: 3,
    explanation: 'Alkali metals have a single valence electron in the outermost s orbital, with configuration ns1.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-36',
    type: 'mcq',
    question: 'Group 18 elements (noble gases), except helium, have a general valence-shell electronic configuration of:',
    options: [
      'ns2np5',
      'ns2',
      'ns1',
      'ns2np6'
    ],
    correctIndex: 3,
    explanation: 'Noble gases (other than helium, which is 1s2) have a completely filled octet, ns2np6, accounting for their chemical inertness.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-37',
    type: 'mcq',
    question: 'On moving from left to right across a period, atomic radius generally:',
    options: [
      'Remains constant',
      'Increases and then sharply decreases at the middle',
      'Decreases due to increasing nuclear charge acting on electrons in the same shell',
      'Increases due to addition of new shells'
    ],
    correctIndex: 2,
    explanation: 'Across a period, electrons are added to the same shell while nuclear charge increases, pulling electrons closer and decreasing atomic radius.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-38',
    type: 'mcq',
    question: 'On moving down a group, atomic radius generally:',
    options: [
      'Increases due to the addition of new electron shells, which outweighs the increase in nuclear charge',
      'Shows no definite trend',
      'Decreases due to increased shielding',
      'Remains unchanged'
    ],
    correctIndex: 0,
    explanation: 'Down a group, new electron shells are added, and this increase in the number of shells outweighs the increase in nuclear charge, so atomic radius increases.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-39',
    type: 'mcq',
    question: 'Noble gases have a comparatively larger atomic radius than the preceding halogens in the same period mainly because:',
    options: [
      'Their radius is measured as the van der Waals radius, rather than the covalent/bonded radius used for halogens',
      'They have more neutrons',
      'They have fewer electrons',
      'They have a smaller nuclear charge'
    ],
    correctIndex: 0,
    explanation: 'Since noble gas atoms don\'t form covalent bonds, their radius is measured as van der Waals radius (touching but non-bonded atoms), which is inherently larger than the covalent radius used for halogens.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-40',
    type: 'mcq',
    question: 'Which of the following correctly represents the general trend of atomic radius for elements of a period (left to right), excluding noble gases?',
    options: [
      'Increasing trend',
      'No definite trend',
      'First increases, then decreases',
      'Decreasing trend'
    ],
    correctIndex: 3,
    explanation: 'Atomic radius generally decreases from left to right across a period due to increasing effective nuclear charge.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-41',
    type: 'mcq',
    question: 'Among Na, Mg, and Al, which has the smallest atomic radius?',
    options: [
      'Al',
      'All have the same radius',
      'Mg',
      'Na'
    ],
    correctIndex: 0,
    explanation: 'Across period 3, atomic radius decreases from Na to Mg to Al due to increasing nuclear charge with electrons being added to the same shell.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-42',
    type: 'mcq',
    question: 'Among Li, Na, and K, which has the largest atomic radius?',
    options: [
      'Na',
      'Li',
      'K',
      'All are equal'
    ],
    correctIndex: 2,
    explanation: 'Down group 1, atomic radius increases due to addition of new shells, making potassium the largest among Li, Na, and K.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-43',
    type: 'mcq',
    question: 'The radius of a cation compared to its parent atom is generally:',
    options: [
      'Unpredictable',
      'Larger, due to loss of shielding',
      'The same',
      'Smaller, since removal of an electron increases the effective nuclear charge per remaining electron'
    ],
    correctIndex: 3,
    explanation: 'When an atom loses an electron to form a cation, the effective nuclear charge experienced by the remaining electrons increases, pulling them closer and reducing the size.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-44',
    type: 'mcq',
    question: 'The radius of an anion compared to its parent atom is generally:',
    options: [
      'Larger only for metals',
      'Smaller, due to increased nuclear pull',
      'Larger, since addition of an electron increases electron-electron repulsion',
      'Exactly the same'
    ],
    correctIndex: 2,
    explanation: 'Gaining an electron increases the electron cloud and electron-electron repulsion, resulting in a larger ionic radius compared to the parent atom.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-45',
    type: 'mcq',
    question: 'For an isoelectronic series (species having the same number of electrons), the ionic radius generally decreases with:',
    options: [
      'Increasing nuclear charge (increasing atomic number)',
      'No relation to nuclear charge',
      'Increasing number of electrons',
      'Decreasing nuclear charge'
    ],
    correctIndex: 0,
    explanation: 'In an isoelectronic series, a higher nuclear charge pulls the same number of electrons more strongly, resulting in a smaller ionic radius.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-46',
    type: 'mcq',
    question: 'In the isoelectronic series N3-, O2-, F-, Na+, Mg2+, Al3+ (all having the neon configuration), which has the smallest radius?',
    options: [
      'Na+',
      'Al3+',
      'F-',
      'N3-'
    ],
    correctIndex: 1,
    explanation: 'In this isoelectronic series, Al3+ has the highest nuclear charge (Z=13) among the same-electron-count species, giving it the smallest ionic radius.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-47',
    type: 'mcq',
    question: 'Ionization enthalpy is defined as the minimum energy required to:',
    options: [
      'Remove the most loosely bound electron from an isolated gaseous atom in its ground state',
      'Add an electron to a neutral gaseous atom',
      'Convert a solid into a gas',
      'Break a chemical bond'
    ],
    correctIndex: 0,
    explanation: 'Ionization enthalpy (or ionization energy) is the energy needed to remove the most loosely held electron from an isolated gaseous atom in its ground state.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-48',
    type: 'mcq',
    question: 'Ionization enthalpy generally shows which trend across a period (left to right)?',
    options: [
      'Increases, due to increasing nuclear charge and decreasing atomic size',
      'Decreases',
      'Shows no relation to atomic size',
      'Remains constant'
    ],
    correctIndex: 0,
    explanation: 'Across a period, increasing nuclear charge and decreasing atomic size make it harder to remove an electron, so ionization enthalpy generally increases.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-49',
    type: 'mcq',
    question: 'Ionization enthalpy generally shows which trend down a group?',
    options: [
      'Increases due to increased nuclear charge',
      'Decreases, due to increasing atomic size and shielding effect, despite increased nuclear charge',
      'Shows an irregular, unpredictable trend',
      'Remains constant'
    ],
    correctIndex: 1,
    explanation: 'Down a group, the increase in atomic size and electron shielding outweighs the increase in nuclear charge, making it easier to remove an electron, so ionization enthalpy decreases.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-50',
    type: 'mcq',
    question: 'Beryllium has a higher first ionization enthalpy than boron mainly because:',
    options: [
      'Beryllium has a stable, fully filled 2s2 configuration, making electron removal harder than from the 2p1 electron in boron',
      'Beryllium has fewer protons',
      'Boron has a higher nuclear charge',
      'Beryllium has a larger atomic size'
    ],
    correctIndex: 0,
    explanation: 'The extra stability of the filled 2s2 subshell in beryllium makes it harder to remove an electron compared to boron, where the electron removed comes from the higher-energy, less stable 2p subshell.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-51',
    type: 'mcq',
    question: 'Nitrogen has a higher first ionization enthalpy than oxygen mainly because:',
    options: [
      'Oxygen has a larger atomic radius',
      'Nitrogen belongs to a different period',
      'Nitrogen has a stable, half-filled 2p3 configuration, while removing an electron from oxygen\'s paired 2p4 configuration is comparatively easier due to electron-electron repulsion',
      'Nitrogen has more protons than oxygen'
    ],
    correctIndex: 2,
    explanation: 'The extra stability associated with the half-filled 2p3 configuration in nitrogen makes electron removal harder than in oxygen, where removing one electron from the paired 2p4 configuration relieves electron-electron repulsion, making it comparatively easier.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-52',
    type: 'mcq',
    question: 'The second ionization enthalpy of an element is always:',
    options: [
      'Equal to the first ionization enthalpy',
      'Less than the first ionization enthalpy',
      'Unrelated to the first ionization enthalpy',
      'Greater than the first ionization enthalpy, since removing an electron from a positively charged ion is harder'
    ],
    correctIndex: 3,
    explanation: 'Once the first electron is removed, the resulting cation holds its remaining electrons more tightly due to a higher effective nuclear charge, making subsequent ionizations progressively harder.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-53',
    type: 'mcq',
    question: 'Among the elements of period 3 (Na to Ar), which has the highest first ionization enthalpy?',
    options: [
      'Si',
      'Ar',
      'Cl',
      'Na'
    ],
    correctIndex: 1,
    explanation: 'Argon, being a noble gas with a stable, fully-filled octet at the end of period 3, has the highest first ionization enthalpy in that period.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-54',
    type: 'mcq',
    question: 'Among alkali metals (Li, Na, K, Rb, Cs), which has the lowest first ionization enthalpy?',
    options: [
      'K',
      'Li',
      'Cs',
      'Na'
    ],
    correctIndex: 2,
    explanation: 'Down group 1, ionization enthalpy decreases due to increasing atomic size, making caesium (Cs) the element with the lowest first ionization enthalpy among common alkali metals.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-55',
    type: 'mcq',
    question: 'Electron gain enthalpy is defined as the enthalpy change occurring when:',
    options: [
      'An electron is added to a neutral, isolated gaseous atom to form an anion',
      'An electron is removed from a gaseous atom',
      'An atom loses a proton',
      'A bond is broken between two atoms'
    ],
    correctIndex: 0,
    explanation: 'Electron gain enthalpy is the energy change when an electron is added to a neutral gaseous atom to form a negatively charged ion (anion).',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-56',
    type: 'mcq',
    question: 'Across a period (left to right), electron gain enthalpy generally becomes:',
    options: [
      'Zero for all elements',
      'More positive (less favourable)',
      'More negative (i.e., more energy is released), due to increasing nuclear charge and decreasing atomic size',
      'Unpredictable with no general trend'
    ],
    correctIndex: 2,
    explanation: 'Across a period, increasing nuclear charge and decreasing atomic size generally make it more favourable (more exothermic) to add an electron.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-57',
    type: 'mcq',
    question: 'Down a group, electron gain enthalpy generally becomes:',
    options: [
      'More positive without exception',
      'Less negative, due to increasing atomic size',
      'More negative',
      'Zero'
    ],
    correctIndex: 1,
    explanation: 'Down a group, increasing atomic size reduces the attraction for an incoming electron, making electron gain enthalpy less negative.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-58',
    type: 'mcq',
    question: 'Noble gases have highly positive electron gain enthalpy mainly because:',
    options: [
      'They have a very large atomic radius',
      'Their electronic configuration is already stable with a completely filled outer shell, and the incoming electron must enter a new, higher-energy shell',
      'They have a very small nuclear charge',
      'They readily lose electrons instead'
    ],
    correctIndex: 1,
    explanation: 'Since noble gases have a stable, completely filled valence shell, adding an extra electron is energetically unfavourable, resulting in a highly positive (endothermic) electron gain enthalpy.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-59',
    type: 'mcq',
    question: 'Among the halogens, which element has the most negative electron gain enthalpy?',
    options: [
      'Iodine',
      'Fluorine',
      'Bromine',
      'Chlorine'
    ],
    correctIndex: 3,
    explanation: 'Although fluorine is smaller, its very small size causes strong electron-electron repulsion in the compact 2p subshell when a new electron is added, making its electron gain enthalpy less negative than expected; chlorine has the most negative electron gain enthalpy among halogens.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-60',
    type: 'mcq',
    question: 'The comparatively less negative electron gain enthalpy of fluorine compared to chlorine is mainly attributed to:',
    options: [
      'Fluorine\'s lower nuclear charge',
      'Fluorine being a metal',
      'Fluorine having more electron shells',
      'The small size of the fluorine atom, causing greater inter-electronic repulsion in its compact 2p subshell'
    ],
    correctIndex: 3,
    explanation: 'The very small atomic size of fluorine leads to significant electron-electron repulsion when an additional electron is added to its compact valence shell, making its electron gain enthalpy less negative than chlorine\'s.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-61',
    type: 'mcq',
    question: 'Electronegativity is defined as the tendency of an atom in a chemical compound to:',
    options: [
      'Gain a full negative charge permanently',
      'Lose electrons completely',
      'Attract the shared pair of electrons towards itself',
      'Form only ionic bonds'
    ],
    correctIndex: 2,
    explanation: 'Electronegativity reflects an atom\'s ability, within a molecule, to attract the shared pair of bonding electrons towards itself.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-62',
    type: 'mcq',
    question: 'Across a period, electronegativity generally:',
    options: [
      'Shows no definite pattern',
      'Remains constant',
      'Decreases',
      'Increases, due to increasing nuclear charge and decreasing atomic size'
    ],
    correctIndex: 3,
    explanation: 'As atomic size decreases and nuclear charge increases across a period, the attraction for shared electron pairs (electronegativity) increases.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-63',
    type: 'mcq',
    question: 'Down a group, electronegativity generally:',
    options: [
      'Increases sharply after group 15',
      'Remains unchanged',
      'Increases due to more shells',
      'Decreases, due to increasing atomic size'
    ],
    correctIndex: 3,
    explanation: 'As atomic size increases down a group, the nucleus\'s ability to attract shared electron pairs decreases, so electronegativity decreases.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-64',
    type: 'mcq',
    question: 'Which element has the highest electronegativity on the Pauling scale?',
    options: [
      'Fluorine',
      'Chlorine',
      'Nitrogen',
      'Oxygen'
    ],
    correctIndex: 0,
    explanation: 'Fluorine has the highest electronegativity of all elements, with a Pauling scale value of about 4.0.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-65',
    type: 'mcq',
    question: 'Electronegativity is best described as a property of:',
    options: [
      'Only gaseous elements',
      'Only ionic compounds',
      'An isolated, free atom, independent of any bonding',
      'An atom as it exists within a molecule/chemical bond, hence not directly measurable like ionization enthalpy'
    ],
    correctIndex: 3,
    explanation: 'Unlike ionization enthalpy or electron gain enthalpy, electronegativity is not a measurable property of an isolated atom but a relative property expressed in the context of a bonded atom within a molecule.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-66',
    type: 'mcq',
    question: 'The valence of an element in groups 1 and 2 typically equals its group number, i.e.:',
    options: [
      'Valence 8 for group 1, valence 7 for group 2',
      'Valence 0 for both groups',
      'Valence is unrelated to group number',
      'Valence 1 for group 1, valence 2 for group 2'
    ],
    correctIndex: 3,
    explanation: 'For group 1 (alkali metals) valence is 1, and for group 2 (alkaline earth metals) valence is 2, matching their number of valence electrons.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-67',
    type: 'mcq',
    question: 'Metallic character (tendency to lose electrons) generally shows which trend across a period?',
    options: [
      'Increases from left to right',
      'Decreases from left to right, as non-metallic character increases',
      'Stays the same across the period',
      'Shows no relation to position in the period'
    ],
    correctIndex: 1,
    explanation: 'As nuclear charge increases and atomic size decreases across a period, the tendency to lose electrons (metallic character) decreases while non-metallic character increases.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-68',
    type: 'mcq',
    question: 'Metallic character generally shows which trend down a group?',
    options: [
      'Increases, since atomic size increases and ionization enthalpy decreases',
      'Decreases',
      'Remains constant',
      'Fluctuates with no clear pattern'
    ],
    correctIndex: 0,
    explanation: 'Down a group, larger atomic size and decreasing ionization enthalpy make it easier to lose electrons, increasing metallic character.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-69',
    type: 'mcq',
    question: 'Elements located near the border (staircase line) between metals and non-metals in the periodic table, showing properties of both, are called:',
    options: [
      'Halogens',
      'Actinoids',
      'Metalloids',
      'Lanthanoids'
    ],
    correctIndex: 2,
    explanation: 'Elements such as boron, silicon, germanium, and arsenic, positioned along the diagonal staircase line, show intermediate/amphoteric properties and are called metalloids.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-70',
    type: 'mcq',
    question: 'Non-metallic character generally shows which trend across a period, from left to right?',
    options: [
      'Decreases',
      'First decreases then increases',
      'Increases',
      'Remains constant'
    ],
    correctIndex: 2,
    explanation: 'As atoms become smaller and more electronegative across a period, their tendency to gain electrons (non-metallic character) increases.',
    difficulty: 'easy'
  },
  {
    id: 'classification-of-elements-and-periodic-table-71',
    type: 'mcq',
    question: 'The elements of the second period (Li to Ne) often show anomalous behaviour compared to other members of their respective groups, mainly due to their:',
    options: [
      'Small atomic size, high electronegativity, and absence of d orbitals',
      'Presence of f orbitals',
      'Being noble gases',
      'Very large atomic size and low nuclear charge'
    ],
    correctIndex: 0,
    explanation: 'Second period elements have unusually small size, high electronegativity, and no d orbitals available, giving them distinct properties compared to heavier members of their group.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-72',
    type: 'mcq',
    question: 'The diagonal relationship in the periodic table refers to the similarity in properties observed between:',
    options: [
      'Elements in the same period only',
      'Elements of the same group',
      'Certain elements of the second period and diagonally placed elements of the third period in the next group',
      'Only noble gases'
    ],
    correctIndex: 2,
    explanation: 'Certain second period elements resemble diagonally placed third period elements of the next group due to similar charge/size ratios; e.g., Li resembles Mg, Be resembles Al.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-73',
    type: 'mcq',
    question: 'Which pair of elements is a classic example of the diagonal relationship?',
    options: [
      'Na and Mg',
      'F and Cl',
      'K and Ca',
      'Li and Mg'
    ],
    correctIndex: 3,
    explanation: 'Lithium (group 1, period 2) shows a diagonal relationship with magnesium (group 2, period 3), sharing several similar chemical properties.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-74',
    type: 'mcq',
    question: 'Beryllium shows a diagonal relationship with which element?',
    options: [
      'Carbon',
      'Boron',
      'Aluminium',
      'Silicon'
    ],
    correctIndex: 2,
    explanation: 'Beryllium (group 2, period 2) shows a diagonal relationship with aluminium (group 13, period 3) due to similar charge/size ratios.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-75',
    type: 'mcq',
    question: 'Assertion: The ionization enthalpy of nitrogen is higher than that of oxygen.\nReason: Nitrogen has a stable, half-filled 2p3 electronic configuration.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is false but reason is true',
      'Assertion is true but reason is false',
      'Both are false'
    ],
    correctIndex: 0,
    explanation: 'Nitrogen\'s extra stability from its half-filled 2p3 configuration correctly explains why it requires more energy to remove an electron than oxygen does.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-76',
    type: 'mcq',
    question: 'Assertion: Fluorine has the highest electron gain enthalpy (most negative) among all elements.\nReason: Fluorine has the smallest atomic size in its group.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and related',
      'Both assertion and reason are false',
      'Assertion is true, but reason is false',
      'Assertion is false, since chlorine actually has a more negative electron gain enthalpy than fluorine, despite the reason being true'
    ],
    correctIndex: 3,
    explanation: 'Although fluorine\'s atomic size is indeed the smallest in its group (reason is true), this very smallness causes greater electron-electron repulsion, making its electron gain enthalpy less negative than chlorine\'s - so the assertion is false.',
    difficulty: 'hard'
  },
  {
    id: 'classification-of-elements-and-periodic-table-77',
    type: 'mcq',
    question: 'Assertion: Atomic radius decreases across a period from left to right.\nReason: Effective nuclear charge experienced by the valence electrons increases across a period, pulling them closer to the nucleus.\nChoose the correct option:',
    options: [
      'Both are false',
      'Assertion is false, reason is true',
      'Assertion is true, reason is false',
      'Both assertion and reason are true and reason correctly explains assertion'
    ],
    correctIndex: 3,
    explanation: 'The increase in effective nuclear charge across a period, while electrons are added to the same shell, correctly explains the decreasing trend in atomic radius.',
    difficulty: 'medium'
  },
  {
    id: 'classification-of-elements-and-periodic-table-78',
    type: 'mcq',
    question: 'Assertion: Mendeleev\'s periodic table is considered superior to Newlands\' Law of Octaves.\nReason: Mendeleev left gaps for undiscovered elements and successfully predicted their properties, while Newlands\' law made no such provision.\nChoose the correct option:',
    options: [
      'Assertion is false, reason is true',
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Both are false'
    ],
    correctIndex: 1,
    explanation: 'Mendeleev\'s foresight in leaving gaps for undiscovered elements and correctly predicting their properties was a major advancement over Newlands\' rigid, gap-less arrangement.',
    difficulty: 'medium'
  },
];

export default questions;
