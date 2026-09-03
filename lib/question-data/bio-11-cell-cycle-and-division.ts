import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Cell Cycle and Cell Division
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'cell-cycle-and-cell-division-1',
    type: 'mcq',
    question: 'The cell cycle is best defined as the sequence of events by which a cell:',
    options: [
      'Undergoes permanent, irreversible damage',
      'Duplicates its genome, synthesises other cellular constituents, and divides into two daughter cells',
      'Loses its genetic material entirely before dividing',
      'Fuses with another cell to form a single, larger cell'
    ],
    correctIndex: 1,
    explanation: 'The cell cycle encompasses the complete sequence of events - genome duplication, synthesis of other cell constituents, and division - by which a cell reproduces itself.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-2',
    type: 'mcq',
    question: 'In a typical human cell cultured in the laboratory, the complete cell cycle takes approximately how long to complete?',
    options: [
      'About 24 seconds',
      'About 24 days',
      'About 24 minutes',
      'About 24 hours'
    ],
    correctIndex: 3,
    explanation: 'A typical human cell in culture takes approximately 24 hours to complete one full cell cycle.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-3',
    type: 'mcq',
    question: 'The cell cycle is broadly divided into two main phases: Interphase and the:',
    options: [
      'M Phase (Mitosis phase)',
      'G0 phase exclusively',
      'S phase exclusively',
      'Anaphase exclusively'
    ],
    correctIndex: 0,
    explanation: 'The cell cycle is broadly divided into interphase (the preparatory phase) and the M phase (during which actual cell division occurs).',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-4',
    type: 'mcq',
    question: 'Interphase, the phase of the cell cycle between two successive M phases, is sometimes referred to (somewhat inaccurately) as the \'resting phase\' because:',
    options: [
      'The cell is genuinely inactive and completely dormant throughout this phase',
      'DNA replication cannot occur during interphase',
      'No visible cell division occurs during this phase, even though the cell remains highly metabolically active',
      'The cell loses all its organelles during this phase'
    ],
    correctIndex: 2,
    explanation: 'Although interphase is sometimes called the \'resting phase\' because no visible cell division occurs, the cell actually remains highly metabolically active, preparing for the next division.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-5',
    type: 'mcq',
    question: 'In a standard cell cycle, the M phase (mitosis) generally represents:',
    options: [
      'The majority of the total cell cycle duration',
      'Exactly half of the total cell cycle duration, without exception',
      'A relatively short duration compared to interphase',
      'A phase completely independent of the preceding interphase'
    ],
    correctIndex: 2,
    explanation: 'The M phase (mitosis) typically occupies a relatively short duration compared to the much longer interphase, within a standard cell cycle.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-6',
    type: 'mcq',
    question: 'Interphase is subdivided into three distinct sub-phases: G1 (Gap 1), S (Synthesis), and:',
    options: [
      'G2 (Gap 2)',
      'G0 (quiescent phase)',
      'M (Mitosis)',
      'Prophase'
    ],
    correctIndex: 0,
    explanation: 'Interphase consists of three sequential sub-phases: G1, S, and G2.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-7',
    type: 'mcq',
    question: 'During the G1 phase of interphase, the cell is primarily engaged in:',
    options: [
      'DNA replication',
      'Metabolic growth and synthesis of proteins required for the upcoming S phase',
      'Actual nuclear and cytoplasmic division',
      'Complete cessation of all metabolic activity'
    ],
    correctIndex: 1,
    explanation: 'During G1, the cell grows metabolically and synthesises proteins needed for the subsequent S phase, but DNA replication itself has not yet begun.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-8',
    type: 'mcq',
    question: 'The actual replication (synthesis) of DNA occurs specifically during which phase of the cell cycle?',
    options: [
      'G1 phase',
      'G2 phase',
      'M phase',
      'S phase'
    ],
    correctIndex: 3,
    explanation: 'DNA synthesis (replication) occurs specifically during the S (Synthesis) phase of interphase.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-9',
    type: 'mcq',
    question: 'During the S phase, as DNA content doubles, the number of chromosomes in the cell:',
    options: [
      'Also doubles immediately, along with the DNA content',
      'Decreases by half',
      'Becomes completely random and unpredictable',
      'Remains the same, even though the DNA content increases'
    ],
    correctIndex: 3,
    explanation: 'Although DNA content doubles during S phase (from 2C to 4C), the number of chromosomes remains unchanged, since each chromosome now consists of two sister chromatids.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-10',
    type: 'mcq',
    question: 'In addition to DNA replication, the duplication of the centriole also typically occurs during which phase of the cell cycle?',
    options: [
      'G1 phase',
      'S phase',
      'G2 phase',
      'Prophase of mitosis'
    ],
    correctIndex: 1,
    explanation: 'Centriole duplication typically occurs alongside DNA replication during the S phase of interphase.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-11',
    type: 'mcq',
    question: 'During the G2 phase, the cell continues to grow and synthesises proteins required for the process of:',
    options: [
      'Cell division (mitosis)',
      'DNA replication, which is repeated a second time',
      'Photosynthesis, in all cell types',
      'Meiosis exclusively, never mitosis'
    ],
    correctIndex: 0,
    explanation: 'During G2, the cell continues to grow and synthesises proteins that will be needed for the upcoming process of cell division (mitosis).',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-12',
    type: 'mcq',
    question: 'Which of the following correctly represents the sequential order of the sub-phases of interphase?',
    options: [
      'S, then G1, then G2',
      'G2, then G1, then S',
      'G1, then S, then G2',
      'G1, then G2, then S'
    ],
    correctIndex: 2,
    explanation: 'The correct sequential order of interphase sub-phases is G1 (growth), followed by S (DNA synthesis), followed by G2 (further growth in preparation for division).',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-13',
    type: 'mcq',
    question: 'Throughout interphase (G1, S, and G2), even though no actual nuclear or cell division is occurring, the cell remains:',
    options: [
      'Metabolically highly active',
      'Completely metabolically inactive',
      'Devoid of any organelles',
      'Incapable of synthesising any proteins'
    ],
    correctIndex: 0,
    explanation: 'Despite the absence of visible division during interphase, the cell remains metabolically very active, engaging in growth, DNA replication, and protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-14',
    type: 'mcq',
    question: 'Cells that exit the cell cycle after completing G1, without proceeding further into the S phase, are said to enter a quiescent (inactive) stage called:',
    options: [
      'G2 phase',
      'M phase',
      'G0 phase',
      'Anaphase'
    ],
    correctIndex: 2,
    explanation: 'Cells that do not proceed to divide further can exit the cell cycle from G1 and enter a quiescent stage known as G0 phase.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-15',
    type: 'mcq',
    question: 'Cells in the G0 (quiescent) phase are generally described as:',
    options: [
      'Completely dead and non-functional',
      'Actively dividing at an accelerated rate',
      'Incapable of ever re-entering the cell cycle under any circumstances',
      'Metabolically active, but not actively proliferating (dividing)'
    ],
    correctIndex: 3,
    explanation: 'Cells in G0 remain metabolically active, performing their normal physiological functions, but do not proliferate unless specifically stimulated to re-enter the cell cycle.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-16',
    type: 'mcq',
    question: 'Cells that have entered the G0 phase can, under certain specific physiological signals, potentially:',
    options: [
      'Never divide again under any circumstances',
      'Re-enter the cell cycle and resume proliferation',
      'Immediately undergo cell death',
      'Spontaneously convert into a completely different cell type, without any external stimulus'
    ],
    correctIndex: 1,
    explanation: 'Cells in G0 are not permanently locked out of the cell cycle; under appropriate physiological signals, they can be stimulated to re-enter the cycle and resume proliferation.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-17',
    type: 'mcq',
    question: 'The M phase (Mitosis phase) of the cell cycle, during which actual cell division occurs, can be further divided into karyokinesis (nuclear division) and:',
    options: [
      'A second round of DNA replication',
      'Cytokinesis (division of the cytoplasm)',
      'A return to G1 phase, without any division occurring',
      'Prophase I exclusively'
    ],
    correctIndex: 1,
    explanation: 'The M phase consists of karyokinesis (nuclear division) followed by cytokinesis (division of the cytoplasm), together completing cell division.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-18',
    type: 'mcq',
    question: 'Karyokinesis (nuclear division) during mitosis is itself further subdivided into four sequential stages, in the correct order:',
    options: [
      'Telophase, Anaphase, Metaphase, and Prophase',
      'Metaphase, Prophase, Telophase, and Anaphase',
      'Anaphase, Telophase, Prophase, and Metaphase',
      'Prophase, Metaphase, Anaphase, and Telophase'
    ],
    correctIndex: 3,
    explanation: 'Mitotic karyokinesis proceeds through four sequential stages, in order: Prophase, Metaphase, Anaphase, and Telophase (often remembered by the acronym PMAT).',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-19',
    type: 'mcq',
    question: 'Mitosis is a type of cell division that results in the production of daughter cells that are:',
    options: [
      'Genetically distinct from the parent cell, with half the chromosome number',
      'Completely devoid of any genetic material',
      'Genetically identical to the parent cell, with the same chromosome number',
      'Always haploid, regardless of the parent cell\'s ploidy'
    ],
    correctIndex: 2,
    explanation: 'Mitosis produces daughter cells that are genetically identical to the parent cell, maintaining the same chromosome number (equational division).',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-20',
    type: 'mcq',
    question: 'Prophase, the first and generally the longest phase of mitosis, is characterised by the:',
    options: [
      'Condensation of chromatin material into compact, visible mitotic chromosomes',
      'Alignment of chromosomes at the equatorial plate',
      'Separation of sister chromatids',
      'Reformation of the nuclear envelope'
    ],
    correctIndex: 0,
    explanation: 'During prophase, the loosely arranged chromatin material condenses into compact, discrete, visible mitotic chromosomes.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-21',
    type: 'mcq',
    question: 'At the beginning of prophase, each condensing chromosome consists of two identical sister chromatids, held together at a specific constricted region called the:',
    options: [
      'Kinetochore only, with no involvement of the centromere',
      'Telomere',
      'Centromere',
      'Nucleolus'
    ],
    correctIndex: 2,
    explanation: 'Each duplicated chromosome consists of two sister chromatids, held together at the centromere.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-22',
    type: 'mcq',
    question: 'The centrosome, having duplicated during the S phase, begins to move toward opposite poles of the cell during prophase, helping in the formation of the:',
    options: [
      'Spindle apparatus',
      'Cell plate',
      'Nucleolus',
      'Cleavage furrow'
    ],
    correctIndex: 0,
    explanation: 'During prophase, the duplicated centrosome moves toward opposite poles, initiating the formation of the spindle apparatus, which is essential for chromosome movement.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-23',
    type: 'mcq',
    question: 'Toward the end of prophase, several nuclear and cytoplasmic structures characteristically begin to disappear/break down, including the nucleolus, Golgi complex, endoplasmic reticulum, and:',
    options: [
      'Cell membrane, permanently',
      'Mitochondria, permanently',
      'Ribosomes, permanently',
      'Nuclear envelope'
    ],
    correctIndex: 3,
    explanation: 'By the end of prophase, the nuclear envelope, along with the nucleolus, Golgi complex, and endoplasmic reticulum, characteristically breaks down/disappears, in preparation for metaphase.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-24',
    type: 'mcq',
    question: 'Prophase is generally considered the longest of the four mitotic phases mainly because it involves:',
    options: [
      'The actual separation of sister chromatids',
      'Extensive chromatin condensation and the gradual formation of the spindle apparatus',
      'The formation of the cleavage furrow',
      'The reformation of the nuclear envelope'
    ],
    correctIndex: 1,
    explanation: 'Prophase is typically the longest mitotic phase because it involves the gradual, extensive process of chromatin condensation along with spindle apparatus formation.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-25',
    type: 'mcq',
    question: 'During metaphase, the condensed chromosomes become aligned at the centre of the spindle, at a plane known as the:',
    options: [
      'Cleavage furrow',
      'Cell plate',
      'Recombination nodule',
      'Metaphase plate (equatorial plate)'
    ],
    correctIndex: 3,
    explanation: 'Metaphase is characterised by the alignment of chromosomes at the metaphase (equatorial) plate, midway between the two spindle poles.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-26',
    type: 'mcq',
    question: 'During metaphase, chromosomes are attached to spindle fibres from both poles via a specific structural region of the centromere called the:',
    options: [
      'Telomere',
      'Kinetochore',
      'Nucleolus',
      'Synaptonemal complex'
    ],
    correctIndex: 1,
    explanation: 'The kinetochore, a specific protein structure located at the centromere, serves as the attachment site for spindle fibres during metaphase.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-27',
    type: 'mcq',
    question: 'The metaphase stage of mitosis is particularly useful for scientific study because metaphase chromosomes are:',
    options: [
      'Most highly condensed and easily visualised/studied, making them ideal for karyotype analysis',
      'Completely invisible under any microscope',
      'Already separated into individual chromatids',
      'Present only in a liquid, non-structured form'
    ],
    correctIndex: 0,
    explanation: 'Metaphase chromosomes are maximally condensed and thus easiest to observe and study, making metaphase the ideal stage for karyotype analysis.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-28',
    type: 'mcq',
    question: 'During metaphase, each chromosome (still consisting of two sister chromatids) is attached to spindle fibres originating from:',
    options: [
      'Only one pole of the cell',
      'Neither pole; chromosomes are not attached to spindle fibres at this stage',
      'Both poles of the cell',
      'Only the equatorial region, with no connection to the poles'
    ],
    correctIndex: 2,
    explanation: 'During metaphase, each chromosome\'s kinetochore is attached to spindle fibres originating from both opposite poles of the cell, ensuring accurate future segregation.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-29',
    type: 'mcq',
    question: 'Anaphase, the third stage of mitosis, is characterised by the splitting of the centromere and subsequent separation of the:',
    options: [
      'Sister chromatids, which are now considered daughter chromosomes',
      'Homologous chromosomes only, while sister chromatids remain joined',
      'Golgi apparatus into two halves',
      'Nucleolus into two separate structures'
    ],
    correctIndex: 0,
    explanation: 'During mitotic anaphase, the centromere splits, and the sister chromatids separate, each now being referred to as an individual daughter chromosome.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-30',
    type: 'mcq',
    question: 'During anaphase, the separated daughter chromosomes begin moving toward opposite poles of the cell, primarily due to:',
    options: [
      'The lengthening of the nuclear envelope',
      'Active swimming motion of the chromosomes themselves',
      'The shortening of the spindle fibres',
      'The formation of a new cell wall'
    ],
    correctIndex: 2,
    explanation: 'The movement of daughter chromosomes toward opposite poles during anaphase is driven primarily by the progressive shortening of the spindle fibres.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-31',
    type: 'mcq',
    question: 'In mitotic anaphase, unlike in meiotic anaphase I, the structures that separate and move toward opposite poles are:',
    options: [
      'Entire homologous chromosome pairs, with sister chromatids remaining joined',
      'Individual sister chromatids (daughter chromosomes)',
      'Entire nuclei',
      'Golgi vesicles'
    ],
    correctIndex: 1,
    explanation: 'In mitotic anaphase, individual sister chromatids separate and move to opposite poles, unlike meiotic anaphase I, where homologous chromosomes separate while sister chromatids remain together.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-32',
    type: 'mcq',
    question: 'The result of the events occurring during mitotic anaphase is that each pole of the cell receives:',
    options: [
      'Only half of the total genetic material present in the original cell',
      'A completely random assortment of chromosome fragments',
      'No chromosomes at all',
      'An identical, complete set of chromosomes'
    ],
    correctIndex: 3,
    explanation: 'Since sister chromatids (genetically identical copies) separate during mitotic anaphase, each pole ultimately receives a complete, identical set of chromosomes.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-33',
    type: 'mcq',
    question: 'Telophase, the final stage of mitotic karyokinesis, is characterised by the chromosomes at each pole beginning to:',
    options: [
      'Condense even further into a more compact state than in metaphase',
      'Decondense and lose their distinct, condensed identity, dispersing back into chromatin material',
      'Split apart into individual chromatids for the first time',
      'Align precisely at the equatorial plate'
    ],
    correctIndex: 1,
    explanation: 'During telophase, the chromosomes at each pole begin to decondense, losing their distinct, compact identity and reverting to a more dispersed chromatin state.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-34',
    type: 'mcq',
    question: 'During telophase, the nuclear envelope characteristically:',
    options: [
      'Completely and permanently disappears, never to reform',
      'Was never actually broken down in the first place',
      'Forms only around one of the two poles, leaving the other without a nucleus',
      'Reassembles around each set of chromosomes at the two poles'
    ],
    correctIndex: 3,
    explanation: 'Telophase is marked by the reassembly of the nuclear envelope around each of the two separated chromosome sets, forming two new nuclei.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-35',
    type: 'mcq',
    question: 'In addition to the nuclear envelope, which other structures typically reform during telophase?',
    options: [
      'The nucleolus, Golgi complex, and endoplasmic reticulum',
      'The centrosome only, with no other structure reforming',
      'The cleavage furrow only',
      'The synaptonemal complex'
    ],
    correctIndex: 0,
    explanation: 'Along with the nuclear envelope, structures such as the nucleolus, Golgi complex, and endoplasmic reticulum also reform during telophase, restoring the normal interphase-like appearance of the nucleus.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-36',
    type: 'mcq',
    question: 'Telophase generally represents, in essence, a reversal of the events that occurred during which earlier mitotic phase?',
    options: [
      'Metaphase',
      'Anaphase',
      'Prophase',
      'Interphase (specifically S phase)'
    ],
    correctIndex: 2,
    explanation: 'Telophase largely reverses the events of prophase - chromosomes decondense and the nuclear envelope, nucleolus, and other structures reform, essentially the opposite of what occurred during prophase.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-37',
    type: 'mcq',
    question: 'Cytokinesis refers to the division of the:',
    options: [
      'Nucleus exclusively, with no involvement of the cytoplasm',
      'Chromosomes exclusively',
      'Cytoplasm, following the completion of karyokinesis (nuclear division)',
      'Cell wall exclusively'
    ],
    correctIndex: 2,
    explanation: 'Cytokinesis is the process by which the cytoplasm divides, typically occurring after karyokinesis (nuclear division) has been completed.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-38',
    type: 'mcq',
    question: 'In animal cells, cytokinesis typically occurs through the formation of a constriction of the plasma membrane at the centre of the cell, called the:',
    options: [
      'Cleavage furrow',
      'Cell plate',
      'Synaptonemal complex',
      'Recombination nodule'
    ],
    correctIndex: 0,
    explanation: 'In animal cells, cytokinesis proceeds through the formation and progressive deepening of a cleavage furrow, which eventually pinches the cell into two.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-39',
    type: 'mcq',
    question: 'In plant cells, unlike animal cells, cytokinesis generally occurs through the formation of a structure that grows outward to meet the existing lateral walls, called the:',
    options: [
      'Cleavage furrow',
      'Nuclear envelope',
      'Kinetochore',
      'Cell plate'
    ],
    correctIndex: 3,
    explanation: 'Because plant cells possess a rigid cell wall, cytokinesis instead involves the formation of a cell plate, which grows outward from the centre to meet the existing lateral cell walls.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-40',
    type: 'mcq',
    question: 'The formation of the cell plate during plant cell cytokinesis primarily originates from vesicles derived from the:',
    options: [
      'Mitochondria',
      'Golgi apparatus',
      'Ribosomes',
      'Nucleolus'
    ],
    correctIndex: 1,
    explanation: 'The cell plate in dividing plant cells is formed primarily from vesicles derived from the Golgi apparatus, which coalesce to form the new dividing partition.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-41',
    type: 'mcq',
    question: 'The fundamental difference between cytokinesis in animal cells and plant cells (cleavage furrow versus cell plate formation) is primarily attributable to the:',
    options: [
      'Presence of a rigid cell wall in plant cells, which is absent in animal cells',
      'Complete absence of a plasma membrane in plant cells',
      'Complete absence of any cytoplasm in animal cells',
      'The fact that plant cells never actually undergo cytokinesis'
    ],
    correctIndex: 0,
    explanation: 'The differing mechanisms of cytokinesis between plant and animal cells are primarily due to the presence of a rigid cell wall in plants, which necessitates cell plate formation rather than the simple membrane constriction (cleavage furrow) seen in animal cells.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-42',
    type: 'mcq',
    question: 'One of the key biological significances of mitosis is that it enables the growth of multicellular organisms, since a single-celled zygote develops into a complex, multicellular organism through repeated:',
    options: [
      'Meiotic cell divisions exclusively',
      'Random cell fusions',
      'Mitotic cell divisions',
      'Chromosomal deletions'
    ],
    correctIndex: 2,
    explanation: 'The growth of a multicellular organism, from a single-celled zygote to a complex adult body, is achieved through numerous rounds of mitotic cell division.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-43',
    type: 'mcq',
    question: 'Mitosis also plays an important role in the repair and replacement of damaged or worn-out cells, such as the continuous replacement of cells lining the:',
    options: [
      'Nucleus of neurons exclusively',
      'Epidermis of the skin and the gut',
      'Mitochondria of muscle cells exclusively',
      'Chloroplasts of leaf cells exclusively'
    ],
    correctIndex: 1,
    explanation: 'Mitosis facilitates the continuous replacement of damaged or worn-out cells, such as those lining the epidermis of the skin and the gut, which are frequently replaced.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-44',
    type: 'mcq',
    question: 'In many plants, mitosis also underlies the process of vegetative propagation, allowing new individual plants to be produced from:',
    options: [
      'Only through meiosis and gamete fusion',
      'Only through the fusion of two entirely different species',
      'Random spontaneous generation, unrelated to cell division',
      'Vegetative parts of an existing plant, through repeated mitotic divisions'
    ],
    correctIndex: 3,
    explanation: 'Vegetative propagation in plants, a common method of asexual reproduction, relies on mitotic cell divisions to generate new plant individuals from vegetative plant parts.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-45',
    type: 'mcq',
    question: 'A defining significance of mitosis is that it results in daughter cells with a genetic complement that is:',
    options: [
      'Exactly half that of the parent cell',
      'Randomly variable, differing significantly from the parent cell',
      'Always haploid, regardless of the parent cell\'s original ploidy',
      'Identical to that of the parent cell (same chromosome number and genetic content)'
    ],
    correctIndex: 3,
    explanation: 'Since mitosis is an equational division, the resulting daughter cells possess a genetic complement (chromosome number and content) that is identical to that of the parent cell.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-46',
    type: 'mcq',
    question: 'Meiosis is the type of cell division specifically involved in the production of:',
    options: [
      'Only somatic (body) cells, never reproductive cells',
      'Gametes (in animals) or spores (in plants)',
      'Only red blood cells',
      'Only skin cells'
    ],
    correctIndex: 1,
    explanation: 'Meiosis is specifically involved in producing gametes in animals (or spores in plants), essential for sexual reproduction.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-47',
    type: 'mcq',
    question: 'A key outcome of meiosis is that the resulting daughter cells possess a chromosome number that is:',
    options: [
      'Identical to that of the original parent cell',
      'Double that of the original parent cell',
      'Half that of the original parent cell (haploid, if the parent cell was diploid)',
      'Completely random and unrelated to the parent cell\'s chromosome number'
    ],
    correctIndex: 2,
    explanation: 'Meiosis reduces the chromosome number by half, producing haploid daughter cells from a diploid parent cell.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-48',
    type: 'mcq',
    question: 'Meiosis involves two sequential rounds of division, generally referred to as:',
    options: [
      'Meiosis I and Meiosis II',
      'Mitosis I and Mitosis II',
      'Prophase I and Prophase II exclusively, with no other stages',
      'Interphase I and Interphase II exclusively'
    ],
    correctIndex: 0,
    explanation: 'Meiosis consists of two sequential nuclear divisions, called Meiosis I and Meiosis II.',
    difficulty: 'easy'
  },
  {
    id: 'cell-cycle-and-cell-division-49',
    type: 'mcq',
    question: 'The first meiotic division (Meiosis I) is generally referred to as a \'reductional division\' because it results in:',
    options: [
      'A doubling of the chromosome number',
      'No change whatsoever in the chromosome number',
      'A reduction of the chromosome number by half',
      'The complete destruction of all chromosomes'
    ],
    correctIndex: 2,
    explanation: 'Meiosis I is called a reductional division because it is specifically responsible for reducing the chromosome number by half.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-50',
    type: 'mcq',
    question: 'The second meiotic division (Meiosis II) closely resembles mitosis, and is often referred to as an \'equational division\' because it involves:',
    options: [
      'The separation of sister chromatids, without any further reduction in chromosome number',
      'A second reduction of the chromosome number by half',
      'The pairing of homologous chromosomes for the first time',
      'The formation of a completely new type of chromosome'
    ],
    correctIndex: 0,
    explanation: 'Meiosis II involves the separation of sister chromatids (similar to mitosis), without any additional reduction in chromosome number, hence it is termed an equational division.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-51',
    type: 'mcq',
    question: 'Starting with a single diploid parent cell, the complete process of meiosis (Meiosis I and II) ultimately results in the formation of how many haploid daughter cells?',
    options: [
      'Two',
      'Four',
      'One',
      'Eight'
    ],
    correctIndex: 1,
    explanation: 'A single diploid parent cell undergoing meiosis (both Meiosis I and Meiosis II) ultimately produces four haploid daughter cells.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-52',
    type: 'mcq',
    question: 'Prophase I of meiosis, the longest and most complex phase of meiosis, is itself further subdivided into how many distinct sub-stages?',
    options: [
      'Two',
      'Three',
      'Ten',
      'Five'
    ],
    correctIndex: 3,
    explanation: 'Prophase I of meiosis is subdivided into five distinct sub-stages: leptotene, zygotene, pachytene, diplotene, and diakinesis.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-53',
    type: 'mcq',
    question: 'The correct sequential order of the five sub-stages of meiotic prophase I is:',
    options: [
      'Diakinesis, diplotene, pachytene, zygotene, leptotene',
      'Leptotene, zygotene, pachytene, diplotene, diakinesis',
      'Zygotene, leptotene, diakinesis, pachytene, diplotene',
      'Pachytene, leptotene, zygotene, diakinesis, diplotene'
    ],
    correctIndex: 1,
    explanation: 'The five sub-stages of prophase I occur in the sequential order: leptotene, zygotene, pachytene, diplotene, and diakinesis.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-54',
    type: 'mcq',
    question: 'During leptotene, the first sub-stage of prophase I, the chromosomes:',
    options: [
      'Pair with their homologous partners for the first time',
      'Undergo crossing over',
      'Separate completely and move to opposite poles',
      'Become gradually visible and begin to undergo compaction'
    ],
    correctIndex: 3,
    explanation: 'Leptotene is the sub-stage during which chromosomes become progressively visible under the microscope as they begin to compact/condense.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-55',
    type: 'mcq',
    question: 'During zygotene, the second sub-stage of prophase I, homologous chromosomes begin the process of pairing, known as:',
    options: [
      'Synapsis',
      'Crossing over',
      'Terminalisation',
      'Cytokinesis'
    ],
    correctIndex: 0,
    explanation: 'Zygotene is characterised by synapsis, the process of pairing between homologous chromosomes.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-56',
    type: 'mcq',
    question: 'The paired structure formed by two homologous chromosomes during synapsis, consisting of four chromatids, is referred to as a bivalent or:',
    options: [
      'Dyad',
      'Monad',
      'Tetrad',
      'Chiasma'
    ],
    correctIndex: 2,
    explanation: 'The paired homologous chromosomes, together consisting of four chromatids, are collectively referred to as a bivalent or tetrad.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-57',
    type: 'mcq',
    question: 'The complex protein structure that forms between paired homologous chromosomes during synapsis is called the:',
    options: [
      'Synaptonemal complex',
      'Recombination nodule exclusively',
      'Kinetochore',
      'Spindle apparatus'
    ],
    correctIndex: 0,
    explanation: 'The synaptonemal complex is the specific protein structure that forms between the paired homologous chromosomes during synapsis (zygotene).',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-58',
    type: 'mcq',
    question: 'During pachytene, the third sub-stage of prophase I, bivalent chromosomes show recombination nodules, sites at which the process of ___ occurs between non-sister chromatids of homologous chromosomes.',
    options: [
      'Synapsis, for the first time',
      'Cytokinesis',
      'Crossing over',
      'Terminalisation of chiasmata'
    ],
    correctIndex: 2,
    explanation: 'Pachytene is the sub-stage during which crossing over - the exchange of genetic material between non-sister chromatids of homologous chromosomes - takes place at recombination nodules.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-59',
    type: 'mcq',
    question: 'The exchange of genetic material during crossing over, occurring in pachytene, is mediated by a specific enzyme complex called:',
    options: [
      'Helicase exclusively',
      'DNA polymerase exclusively',
      'RNA polymerase exclusively',
      'Recombinase'
    ],
    correctIndex: 3,
    explanation: 'The enzyme complex recombinase mediates the process of crossing over (genetic recombination) between homologous chromosomes during pachytene.',
    difficulty: 'hard'
  },
  {
    id: 'cell-cycle-and-cell-division-60',
    type: 'mcq',
    question: 'During diplotene, the fourth sub-stage of prophase I, the synaptonemal complex dissolves, and the recombined homologous chromosomes of each bivalent begin to separate from each other, except at specific points called:',
    options: [
      'Recombination nodules, which remain as the sole connection',
      'Chiasmata',
      'Kinetochores',
      'Centromeres exclusively'
    ],
    correctIndex: 1,
    explanation: 'In diplotene, homologous chromosomes begin to separate but remain connected at specific points called chiasmata, which mark the locations of previous crossover events.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-61',
    type: 'mcq',
    question: 'In human females, the oocytes are known to remain arrested at the diplotene stage of meiotic prophase I for an extended period, sometimes lasting:',
    options: [
      'Only a few seconds',
      'Only a few minutes',
      'Exactly 24 hours, without exception',
      'Many years, until just before ovulation'
    ],
    correctIndex: 3,
    explanation: 'In human females, oocytes can remain arrested at the diplotene stage for many years, only resuming meiosis shortly before ovulation.',
    difficulty: 'hard'
  },
  {
    id: 'cell-cycle-and-cell-division-62',
    type: 'mcq',
    question: 'During diakinesis, the final sub-stage of prophase I, the chiasmata move toward the ends of the chromosomes, a process called:',
    options: [
      'Synapsis',
      'Terminalisation',
      'Crossing over, occurring for the first time',
      'Cytokinesis'
    ],
    correctIndex: 1,
    explanation: 'Terminalisation refers to the movement of chiasmata toward the terminal ends of chromosomes, characteristic of diakinesis.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-63',
    type: 'mcq',
    question: 'By the end of diakinesis, the final sub-stage of prophase I, which of the following structures characteristically breaks down, marking the transition into metaphase I?',
    options: [
      'The nuclear envelope (along with the disappearance of the nucleolus)',
      'The chromosomes themselves, which disintegrate completely',
      'The centromere, permanently',
      'The cell membrane, permanently'
    ],
    correctIndex: 0,
    explanation: 'By the end of diakinesis, the nucleolus disappears and the nuclear envelope breaks down, marking the transition from prophase I to metaphase I.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-64',
    type: 'mcq',
    question: 'During metaphase I of meiosis, bivalent chromosomes align at the equatorial plate, with each homologous chromosome of a pair attached to spindle fibres from:',
    options: [
      'The same, single pole only',
      'No poles at all, since spindle fibres are absent in meiosis I',
      'Opposite poles',
      'Only the equatorial plate, with no connection to either pole'
    ],
    correctIndex: 2,
    explanation: 'During metaphase I, the two homologous chromosomes of each bivalent are attached to spindle fibres originating from opposite poles, in preparation for their separation.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-65',
    type: 'mcq',
    question: 'During anaphase I of meiosis, the key event that occurs is the separation of:',
    options: [
      'Sister chromatids, exactly as occurs in mitotic anaphase',
      'The entire bivalent, moving intact to just one pole',
      'Homologous chromosomes, moving to opposite poles, while their sister chromatids remain joined together',
      'Chiasmata, without any chromosome movement occurring'
    ],
    correctIndex: 2,
    explanation: 'In anaphase I, homologous chromosomes separate and move to opposite poles, while the sister chromatids of each chromosome remain joined together at their centromere.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-66',
    type: 'mcq',
    question: 'The key distinction between mitotic anaphase and meiotic anaphase I is that, during anaphase I, the:',
    options: [
      'Centromeres split just as they do in mitosis',
      'Centromeres do not split, so sister chromatids remain together as homologous chromosomes separate',
      'Sister chromatids separate while homologous chromosomes remain paired',
      'No chromosome movement of any kind occurs'
    ],
    correctIndex: 1,
    explanation: 'Unlike mitotic anaphase, in meiotic anaphase I the centromeres do not split; instead, homologous chromosomes separate from each other while their sister chromatids remain joined.',
    difficulty: 'hard'
  },
  {
    id: 'cell-cycle-and-cell-division-67',
    type: 'mcq',
    question: 'During telophase I of meiosis, following the reassembly of the nuclear membrane and nucleolus, cytokinesis typically follows, and the resulting structure at each pole is generally referred to as a:',
    options: [
      'Tetrad (of chromosomes)',
      'Monad (of chromosomes)',
      'Synaptonemal complex',
      'Dyad (of chromosomes)'
    ],
    correctIndex: 3,
    explanation: 'At the end of telophase I and cytokinesis, each resulting cell contains a haploid set of chromosomes, each chromosome still consisting of two sister chromatids, collectively referred to as a dyad.',
    difficulty: 'hard'
  },
  {
    id: 'cell-cycle-and-cell-division-68',
    type: 'mcq',
    question: 'At the completion of meiosis I (following telophase I and cytokinesis), each resulting daughter cell possesses which chromosome number, relative to the original parent cell?',
    options: [
      'A haploid number of chromosomes (each chromosome still with two chromatids)',
      'The same diploid number of chromosomes as the parent cell',
      'A number of chromosomes that has doubled compared to the parent cell',
      'No chromosomes at all'
    ],
    correctIndex: 0,
    explanation: 'Following meiosis I, each daughter cell contains a haploid number of chromosomes, though each chromosome still consists of two sister chromatids at this stage.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-69',
    type: 'mcq',
    question: 'The overall sequence of events in meiosis I (prophase I through telophase I) is primarily responsible for achieving which key outcome?',
    options: [
      'The exact doubling of chromosome number',
      'The reduction of chromosome number by half, along with genetic recombination via crossing over',
      'The complete elimination of all genetic material',
      'The permanent fusion of two separate cells into one'
    ],
    correctIndex: 1,
    explanation: 'Meiosis I accomplishes both the reduction of chromosome number by half (reductional division) and introduces genetic variation through the crossing over that occurs during prophase I.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-70',
    type: 'mcq',
    question: 'Meiosis II proceeds through the same four stages as mitosis (Prophase II, Metaphase II, Anaphase II, Telophase II), and the key event occurring during Anaphase II is the:',
    options: [
      'Splitting of the centromere and separation of sister chromatids',
      'Separation of homologous chromosomes, as in anaphase I',
      'Formation of chiasmata for the first time',
      'Pairing of homologous chromosomes'
    ],
    correctIndex: 0,
    explanation: 'Anaphase II closely resembles mitotic anaphase, with the centromere splitting and sister chromatids separating and moving to opposite poles.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-71',
    type: 'mcq',
    question: 'During metaphase II of meiosis, the (already haploid) chromosomes, each still consisting of two sister chromatids, align at the:',
    options: [
      'Nuclear envelope, without forming any specific alignment',
      'Golgi apparatus',
      'Equatorial plate of the cell',
      'Only one pole of the cell'
    ],
    correctIndex: 2,
    explanation: 'During metaphase II, the haploid chromosomes (each with two chromatids) align at the equatorial plate, similar to the alignment seen in mitotic metaphase.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-72',
    type: 'mcq',
    question: 'Following telophase II and the subsequent cytokinesis, the overall process of meiosis (starting from a single diploid cell through both meiosis I and meiosis II) ultimately results in:',
    options: [
      'Two diploid daughter cells',
      'A single, large diploid cell',
      'Eight diploid daughter cells',
      'Four haploid daughter cells'
    ],
    correctIndex: 3,
    explanation: 'The complete process of meiosis, encompassing both meiosis I and meiosis II, ultimately produces four haploid daughter cells from a single original diploid parent cell.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-73',
    type: 'mcq',
    question: 'Since meiosis II does not involve any further pairing of homologous chromosomes or additional crossing over, it is considered functionally most similar to:',
    options: [
      'Meiosis I',
      'Cytokinesis in plant cells exclusively',
      'Fertilisation',
      'Mitosis'
    ],
    correctIndex: 3,
    explanation: 'Because meiosis II lacks the pairing and crossing-over events characteristic of meiosis I, and instead involves the straightforward separation of sister chromatids, it closely resembles a standard mitotic division.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-74',
    type: 'mcq',
    question: 'One of the primary biological significances of meiosis is that it helps maintain a constant chromosome number across successive generations of a species, mainly because:',
    options: [
      'Meiosis doubles the chromosome number in every generation',
      'Meiosis has no relationship whatsoever to chromosome number across generations',
      'The halving of chromosome number in gametes is later restored to the diploid number upon fertilisation',
      'Fertilisation always results in a further halving of chromosome number'
    ],
    correctIndex: 2,
    explanation: 'By producing haploid gametes, meiosis ensures that when two gametes fuse during fertilisation, the diploid chromosome number characteristic of the species is restored and maintained across generations.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-75',
    type: 'mcq',
    question: 'Besides maintaining a constant chromosome number, another key significance of meiosis is that it contributes to:',
    options: [
      'Genetic variability within a population, largely through crossing over and independent assortment',
      'The complete elimination of all genetic variation within a population',
      'The exact cloning of the parent organism\'s genome, with no variation whatsoever',
      'The prevention of any form of sexual reproduction'
    ],
    correctIndex: 0,
    explanation: 'Meiosis introduces genetic variability within a population primarily through the processes of crossing over (during prophase I) and the independent assortment of chromosomes.',
    difficulty: 'medium'
  },
  {
    id: 'cell-cycle-and-cell-division-76',
    type: 'mcq',
    question: 'The genetic variability generated by meiosis, through mechanisms such as crossing over, is considered evolutionarily significant mainly because it:',
    options: [
      'Guarantees that every offspring will be genetically identical to its parents',
      'Provides the raw genetic diversity upon which natural selection can act',
      'Has no relevance whatsoever to the process of evolution',
      'Only affects somatic cells, never gametes'
    ],
    correctIndex: 1,
    explanation: 'The genetic variability introduced by meiosis provides the essential raw material of genetic diversity within a population, upon which natural selection can act, making meiosis significant from an evolutionary perspective.',
    difficulty: 'hard'
  },
  {
    id: 'cell-cycle-and-cell-division-77',
    type: 'mcq',
    question: 'Assertion: The S phase of interphase is critical for accurate cell division.\nReason: DNA replication during S phase ensures that each daughter cell produced by mitosis receives an identical, complete copy of the genetic material.\nChoose the correct option:',
    options: [
      'Assertion is true, reason is false',
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 1,
    explanation: 'Since DNA replication during S phase ensures that sister chromatids (and hence daughter cells) are genetically identical, the reason correctly explains why S phase is critical for accurate mitotic division.',
    difficulty: 'hard'
  },
  {
    id: 'cell-cycle-and-cell-division-78',
    type: 'mcq',
    question: 'Assertion: Crossing over during prophase I of meiosis increases genetic variability among offspring.\nReason: Crossing over results in the exchange of genetic material between non-sister chromatids of homologous chromosomes, creating new combinations of alleles.\nChoose the correct option:',
    options: [
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false',
      'Both assertion and reason are true and reason correctly explains assertion'
    ],
    correctIndex: 3,
    explanation: 'Crossing over creates new allele combinations by exchanging genetic material between non-sister chromatids, correctly explaining why it increases genetic variability among offspring.',
    difficulty: 'hard'
  },
];

export default questions;