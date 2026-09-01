import type { Question } from "@/lib/questionBank";

// NEET Biology Question Bank
// Chapter: Chemical Coordination and Integration
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'chemical-coordination-and-integration-1',
    type: 'mcq',
    question: 'Endocrine glands are distinguished from exocrine glands mainly by the fact that endocrine glands:',
    options: [
      'Are ductless, releasing their secretions (hormones) directly into the bloodstream',
      'Release their secretions through ducts onto an epithelial surface',
      'Only produce digestive enzymes',
      'Are always located in the digestive tract'
    ],
    correctIndex: 0,
    explanation: 'Endocrine glands are ductless glands that release their secretions (hormones) directly into the bloodstream, unlike exocrine glands, which release secretions through ducts.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-2',
    type: 'mcq',
    question: 'Hormones are best described as chemical substances that:',
    options: [
      'Act only at the exact site where they are produced',
      'Are secreted in small (trace) amounts and typically act at target sites located away from their site of production, via the bloodstream',
      'Are effective only at very high concentrations',
      'Never require a specific receptor to act'
    ],
    correctIndex: 1,
    explanation: 'Hormones are chemical messengers, secreted in minute (trace) quantities, that are transported via the blood to act on target cells or organs often located far away from their site of production.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-3',
    type: 'mcq',
    question: 'For a hormone to exert its effect on a target cell, the presence of a specific ___ on or within that cell is essential.',
    options: [
      'Enzyme only',
      'Nucleus',
      'Receptor',
      'Ribosome'
    ],
    correctIndex: 2,
    explanation: 'Hormones act on target cells by binding to specific receptor molecules, which may be located on the cell membrane or within the cell (cytoplasm/nucleus).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-4',
    type: 'mcq',
    question: 'The pancreas is best classified as which type of gland, given that it performs both digestive enzyme secretion and hormone secretion?',
    options: [
      'A purely exocrine gland',
      'A purely endocrine gland',
      'Neither an exocrine nor an endocrine gland',
      'A heterocrine (mixed) gland, having both exocrine and endocrine functions'
    ],
    correctIndex: 3,
    explanation: 'The pancreas is a heterocrine gland, performing exocrine functions (secreting digestive enzymes via ducts) as well as endocrine functions (secreting hormones like insulin and glucagon into the blood via the Islets of Langerhans).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-5',
    type: 'mcq',
    question: 'The hypothalamus, located at the base of the brain, plays a key regulatory role in the endocrine system mainly by:',
    options: [
      'Producing specific releasing and inhibiting hormones that regulate the secretory activity of the pituitary gland',
      'Directly secreting all hormones of the body',
      'Having no connection to the endocrine system at all',
      'Only regulating body temperature, with no hormonal role'
    ],
    correctIndex: 0,
    explanation: 'The hypothalamus regulates the pituitary gland by secreting specific releasing hormones (which stimulate pituitary hormone secretion) and inhibiting hormones (which suppress it).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-6',
    type: 'mcq',
    question: 'The pituitary gland (hypophysis), often called the "master gland," is anatomically divided into two major parts, called the:',
    options: [
      'Cerebral and cerebellar pituitary',
      'Anterior pituitary (adenohypophysis) and posterior pituitary (neurohypophysis)',
      'Cortex and medulla',
      'Alpha and beta pituitary'
    ],
    correctIndex: 1,
    explanation: 'The pituitary gland is divided into the anterior pituitary (adenohypophysis) and the posterior pituitary (neurohypophysis), each with distinct hormone-secreting functions.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-7',
    type: 'mcq',
    question: 'Growth hormone (GH), also known as somatotropin, secreted by the anterior pituitary, primarily functions to:',
    options: [
      'Stimulate the thyroid gland',
      'Regulate uterine contractions',
      'Stimulate overall body growth',
      'Promote milk ejection from mammary glands'
    ],
    correctIndex: 2,
    explanation: 'Growth hormone (GH), secreted by the anterior pituitary, primarily stimulates overall growth of the body, particularly affecting bones and muscles.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-8',
    type: 'mcq',
    question: 'Hypersecretion of growth hormone during childhood, before the closure of growth plates, leads to excessive growth of long bones, resulting in a condition called:',
    options: [
      'Dwarfism',
      'Acromegaly',
      'Cretinism',
      'Gigantism'
    ],
    correctIndex: 3,
    explanation: 'Excess growth hormone secretion during childhood, while growth plates are still active, leads to excessive growth of long bones, resulting in gigantism.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-9',
    type: 'mcq',
    question: 'Hypersecretion of growth hormone in adults, after the closure of growth plates, leads to a condition characterised by enlargement of extremities (hands, feet, jaw), called:',
    options: [
      'Acromegaly',
      'Gigantism',
      'Dwarfism',
      'Myxoedema'
    ],
    correctIndex: 0,
    explanation: 'When growth hormone hypersecretion occurs in adults (after long bones have stopped growing in length), it leads to acromegaly, characterised by enlargement of the extremities and certain facial features.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-10',
    type: 'mcq',
    question: 'Hyposecretion of growth hormone during childhood generally leads to a condition characterised by stunted growth, called:',
    options: [
      'Gigantism',
      'Dwarfism',
      'Acromegaly',
      'Cretinism'
    ],
    correctIndex: 1,
    explanation: 'Insufficient growth hormone secretion during childhood generally leads to dwarfism, characterised by significantly stunted growth.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-11',
    type: 'mcq',
    question: 'Prolactin (PRL), secreted by the anterior pituitary, primarily regulates:',
    options: [
      'Bone growth',
      'Uterine contraction during childbirth',
      'The growth of mammary glands and the formation of milk (lactation)',
      'Thyroid hormone secretion'
    ],
    correctIndex: 2,
    explanation: 'Prolactin regulates the growth and development of the mammary glands and stimulates milk production (lactation) after childbirth.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-12',
    type: 'mcq',
    question: 'Thyroid Stimulating Hormone (TSH), secreted by the anterior pituitary, primarily acts on the thyroid gland to:',
    options: [
      'Inhibit thyroid hormone secretion permanently',
      'Directly cause the enlargement of the thyroid gland without hormone secretion',
      'Regulate blood calcium levels',
      'Stimulate the synthesis and secretion of thyroid hormones'
    ],
    correctIndex: 3,
    explanation: 'TSH stimulates the thyroid gland to synthesise and secrete thyroid hormones (T3 and T4).',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-13',
    type: 'mcq',
    question: 'Adrenocorticotropic Hormone (ACTH), secreted by the anterior pituitary, primarily stimulates:',
    options: [
      'The adrenal cortex, to synthesise and secrete glucocorticoids',
      'The thyroid gland',
      'The pancreas, to secrete insulin',
      'The ovaries, to secrete estrogen'
    ],
    correctIndex: 0,
    explanation: 'ACTH stimulates the adrenal cortex to produce and secrete glucocorticoid hormones, such as cortisol.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-14',
    type: 'mcq',
    question: 'Luteinising Hormone (LH) and Follicle Stimulating Hormone (FSH), both secreted by the anterior pituitary, are collectively referred to as:',
    options: [
      'Glucocorticoids',
      'Gonadotropins, since they act on the gonads',
      'Mineralocorticoids',
      'Catecholamines'
    ],
    correctIndex: 1,
    explanation: 'LH and FSH are collectively known as gonadotropins, since they act on the gonads (testes and ovaries) to regulate gametogenesis and sex hormone production.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-15',
    type: 'mcq',
    question: 'In males, Luteinising Hormone (LH) primarily stimulates:',
    options: [
      'Sertoli cells to promote spermatogenesis',
      'The adrenal cortex directly',
      'Leydig cells (interstitial cells) to secrete androgens',
      'The thyroid gland'
    ],
    correctIndex: 2,
    explanation: 'In males, LH stimulates the Leydig cells (interstitial cells of the testis) to secrete androgens, such as testosterone.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-16',
    type: 'mcq',
    question: 'In males, Follicle Stimulating Hormone (FSH) primarily acts on which cells, playing a key role in stimulating spermatogenesis?',
    options: [
      'Leydig cells',
      'Beta cells of the pancreas',
      'Chief cells of the parathyroid',
      'Sertoli cells'
    ],
    correctIndex: 3,
    explanation: 'FSH acts on the Sertoli cells within the seminiferous tubules of the testis, playing an important role in stimulating and supporting spermatogenesis.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-17',
    type: 'mcq',
    question: 'In females, Luteinising Hormone (LH) plays a key role in triggering:',
    options: [
      'Ovulation, and subsequently maintaining the corpus luteum',
      'Growth of the ovarian follicle only',
      'The onset of menstruation',
      'Uterine contraction during labour'
    ],
    correctIndex: 0,
    explanation: 'A surge in LH triggers ovulation (release of the ovum from the mature follicle) and subsequently helps maintain the corpus luteum.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-18',
    type: 'mcq',
    question: 'In females, Follicle Stimulating Hormone (FSH) primarily stimulates:',
    options: [
      'Ovulation directly',
      'The growth and development of ovarian follicles',
      'Milk secretion from mammary glands',
      'Uterine contractions'
    ],
    correctIndex: 1,
    explanation: 'FSH stimulates the growth and development of ovarian follicles in the female reproductive cycle.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-19',
    type: 'mcq',
    question: 'Although stored in and released from the posterior pituitary, the hormones oxytocin and vasopressin are actually synthesised in the:',
    options: [
      'Anterior pituitary',
      'Thyroid gland',
      'Hypothalamus',
      'Adrenal medulla'
    ],
    correctIndex: 2,
    explanation: 'Oxytocin and vasopressin (ADH) are synthesised in specific nuclei of the hypothalamus and are transported to, stored in, and released from the posterior pituitary.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-20',
    type: 'mcq',
    question: 'Oxytocin, released from the posterior pituitary, primarily stimulates:',
    options: [
      'Bone growth',
      'Thyroid hormone secretion',
      'Water reabsorption in the kidney',
      'Contraction of the uterus during childbirth, and contraction of myoepithelial cells around mammary gland ducts for milk ejection'
    ],
    correctIndex: 3,
    explanation: 'Oxytocin stimulates uterine contractions during childbirth (labour) and triggers milk ejection by causing the contraction of myoepithelial cells surrounding mammary gland ducts.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-21',
    type: 'mcq',
    question: 'Vasopressin (Antidiuretic Hormone, ADH), released from the posterior pituitary, primarily functions to:',
    options: [
      'Stimulate water reabsorption from the renal tubules, thereby reducing urine volume',
      'Increase urine volume by promoting water excretion',
      'Stimulate uterine contractions',
      'Regulate blood calcium levels'
    ],
    correctIndex: 0,
    explanation: 'ADH promotes water reabsorption from the renal tubules, thereby reducing urine volume and conserving body water.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-22',
    type: 'mcq',
    question: 'The pineal gland, located on the dorsal side of the forebrain, primarily secretes the hormone:',
    options: [
      'Thyroxine',
      'Melatonin',
      'Insulin',
      'Cortisol'
    ],
    correctIndex: 1,
    explanation: 'The pineal gland secretes melatonin, a hormone involved in regulating circadian (day-night) rhythms and other physiological processes.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-23',
    type: 'mcq',
    question: 'Melatonin, secreted by the pineal gland, plays a central role in:',
    options: [
      'Regulating blood glucose levels',
      'Directly controlling bone growth',
      'Regulating the 24-hour (circadian) rhythm of the body',
      'Directly regulating blood calcium levels'
    ],
    correctIndex: 2,
    explanation: 'Melatonin is central to regulating the body\'s 24-hour circadian rhythm and can also influence metabolism, pigmentation, and other physiological functions.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-24',
    type: 'mcq',
    question: 'The thyroid gland, considered the largest endocrine gland in the human body, is located:',
    options: [
      'Inside the skull',
      'Above each kidney',
      'Behind the sternum, between the lungs',
      'On either side of the trachea'
    ],
    correctIndex: 3,
    explanation: 'The thyroid gland is a bilobed structure located on either side of the trachea, and it is the largest endocrine gland in the human body.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-25',
    type: 'mcq',
    question: 'The synthesis of thyroid hormones (T3 and T4) by the thyroid gland requires an adequate dietary supply of:',
    options: [
      'Iodine',
      'Calcium',
      'Sodium',
      'Iron'
    ],
    correctIndex: 0,
    explanation: 'Iodine is an essential component required for the synthesis of the iodinated thyroid hormones, T3 (triiodothyronine) and T4 (thyroxine).',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-26',
    type: 'mcq',
    question: 'Thyroid hormones (T3 and T4) play an essential role in regulating:',
    options: [
      'Only reproductive functions',
      'The basal metabolic rate (BMR) of the body, along with carbohydrate, protein, and fat metabolism',
      'Only visual perception',
      'Only muscle contraction'
    ],
    correctIndex: 1,
    explanation: 'Thyroid hormones play a central role in regulating the body\'s basal metabolic rate and overall carbohydrate, protein, and fat metabolism.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-27',
    type: 'mcq',
    question: 'A deficiency of iodine in the diet, leading to reduced thyroid hormone production, can result in an enlargement of the thyroid gland, a condition known as:',
    options: [
      'Cretinism',
      'Acromegaly',
      'Goitre',
      'Gigantism'
    ],
    correctIndex: 2,
    explanation: 'Iodine deficiency reduces thyroid hormone synthesis, and the resulting excessive TSH stimulation causes enlargement of the thyroid gland, a condition called goitre.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-28',
    type: 'mcq',
    question: 'Congenital hypothyroidism (thyroid hormone deficiency present since birth or early infancy) leads to a condition in children characterised by stunted growth and mental retardation, called:',
    options: [
      'Goitre',
      'Gigantism',
      'Myxoedema',
      'Cretinism'
    ],
    correctIndex: 3,
    explanation: 'Congenital hypothyroidism in infants and young children leads to cretinism, characterised by stunted physical growth and impaired mental development.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-29',
    type: 'mcq',
    question: 'Hypothyroidism occurring in adults commonly results in a condition characterised by puffiness/swelling of facial tissues, called:',
    options: [
      'Myxoedema',
      'Cretinism',
      'Gigantism',
      'Acromegaly'
    ],
    correctIndex: 0,
    explanation: 'Hypothyroidism in adults commonly leads to myxoedema, characterised by swelling and puffiness of facial and other tissues.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-30',
    type: 'mcq',
    question: 'The parafollicular (C) cells of the thyroid gland secrete a hormone called calcitonin, which functions to:',
    options: [
      'Increase blood calcium levels',
      'Decrease blood calcium levels, by inhibiting bone resorption',
      'Increase blood glucose levels',
      'Regulate basal metabolic rate'
    ],
    correctIndex: 1,
    explanation: 'Calcitonin, secreted by the parafollicular (C) cells of the thyroid, decreases blood calcium levels, mainly by inhibiting the resorption (breakdown) of bone.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-31',
    type: 'mcq',
    question: 'The parathyroid glands, typically present as four small glands embedded in the back of the thyroid, secrete a hormone called:',
    options: [
      'Calcitonin',
      'Thyroxine',
      'Parathyroid hormone (PTH)',
      'Melatonin'
    ],
    correctIndex: 2,
    explanation: 'The parathyroid glands secrete Parathyroid Hormone (PTH), which regulates blood calcium and phosphate levels.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-32',
    type: 'mcq',
    question: 'Parathyroid Hormone (PTH) is often described as a "hypercalcemic hormone" because it functions to:',
    options: [
      'Decrease blood calcium levels',
      'Have no effect on blood calcium at all',
      'Only regulate blood glucose levels',
      'Increase blood calcium levels, exerting effects opposite to that of calcitonin'
    ],
    correctIndex: 3,
    explanation: 'PTH increases blood calcium levels, acting in a manner opposite (antagonistic) to calcitonin, and is therefore called a hypercalcemic hormone.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-33',
    type: 'mcq',
    question: 'PTH increases blood calcium levels through its combined actions on bone, kidney, and intestine, which include:',
    options: [
      'Stimulating bone resorption (releasing calcium), increasing calcium reabsorption in the kidney, and indirectly increasing intestinal calcium absorption',
      'Inhibiting calcium absorption in the intestine only',
      'Only stimulating calcium excretion via the kidney',
      'Having no effect on bone tissue at all'
    ],
    correctIndex: 0,
    explanation: 'PTH raises blood calcium by stimulating the release of calcium from bone (bone resorption), promoting calcium reabsorption in the kidney, and indirectly increasing intestinal calcium absorption (via activation of Vitamin D).',
    difficulty: 'hard'
  },
  {
    id: 'chemical-coordination-and-integration-34',
    type: 'mcq',
    question: 'The thymus gland, located between the lungs behind the sternum, secretes hormones called thymosins, which play a major role in:',
    options: [
      'Regulating blood glucose levels',
      'The differentiation of T-lymphocytes (T-cells), important for cell-mediated immunity',
      'Regulating basal metabolic rate',
      'Regulating water balance in the body'
    ],
    correctIndex: 1,
    explanation: 'Thymosins, secreted by the thymus gland, play a major role in the differentiation and maturation of T-lymphocytes, essential for the body\'s cell-mediated immune response.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-35',
    type: 'mcq',
    question: 'As a person ages, the size and activity of the thymus gland generally:',
    options: [
      'Increases progressively throughout life',
      'Remains completely unchanged throughout life',
      'Degenerates (shrinks) with age, along with reduced thymosin production',
      'Is only active after old age begins'
    ],
    correctIndex: 2,
    explanation: 'The thymus gland typically degenerates with age, and correspondingly, its secretion of thymosins declines.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-36',
    type: 'mcq',
    question: 'The adrenal glands, a pair of glands located one on top of each kidney, are structurally divided into two main regions, called the:',
    options: [
      'Anterior and posterior adrenal',
      'Left and right adrenal',
      'Superior and inferior adrenal',
      'Adrenal cortex (outer) and adrenal medulla (inner)'
    ],
    correctIndex: 3,
    explanation: 'Each adrenal gland consists of an outer adrenal cortex and an inner adrenal medulla, each with distinct hormonal secretions.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-37',
    type: 'mcq',
    question: 'The outermost layer of the adrenal cortex, called the zona glomerulosa, primarily secretes hormones known as:',
    options: [
      'Mineralocorticoids, mainly aldosterone',
      'Glucocorticoids',
      'Androgens',
      'Catecholamines'
    ],
    correctIndex: 0,
    explanation: 'The zona glomerulosa, the outermost layer of the adrenal cortex, secretes mineralocorticoids, primarily aldosterone.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-38',
    type: 'mcq',
    question: 'Aldosterone, the principal mineralocorticoid, primarily helps regulate:',
    options: [
      'Blood glucose levels exclusively',
      'The balance of sodium and potassium ions, along with water balance and blood pressure',
      'Growth of long bones',
      'Thyroid hormone secretion'
    ],
    correctIndex: 1,
    explanation: 'Aldosterone plays a critical role in regulating sodium and potassium ion balance, water balance, and consequently, blood pressure.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-39',
    type: 'mcq',
    question: 'The middle layer of the adrenal cortex, called the zona fasciculata, primarily secretes hormones known as:',
    options: [
      'Mineralocorticoids',
      'Catecholamines',
      'Glucocorticoids, mainly cortisol',
      'Thyroid hormones'
    ],
    correctIndex: 2,
    explanation: 'The zona fasciculata, the middle layer of the adrenal cortex, secretes glucocorticoids, primarily cortisol.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-40',
    type: 'mcq',
    question: 'Cortisol, the principal glucocorticoid, plays a key role in regulating:',
    options: [
      'Only sodium and potassium balance',
      'Only reproductive hormone secretion',
      'Only thyroid hormone secretion',
      'Carbohydrate metabolism (including gluconeogenesis), fat and protein metabolism, and possesses anti-inflammatory effects'
    ],
    correctIndex: 3,
    explanation: 'Cortisol regulates carbohydrate metabolism (notably promoting gluconeogenesis), fat and protein metabolism, and has significant anti-inflammatory actions, in addition to helping the body cope with stress.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-41',
    type: 'mcq',
    question: 'The innermost layer of the adrenal cortex, called the zona reticularis, secretes small amounts of hormones known as:',
    options: [
      'Sex corticoids, mainly androgens',
      'Mineralocorticoids exclusively',
      'Catecholamines',
      'Calcitonin'
    ],
    correctIndex: 0,
    explanation: 'The zona reticularis, the innermost layer of the adrenal cortex, secretes small quantities of sex corticoids, mainly androgens.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-42',
    type: 'mcq',
    question: 'The adrenal medulla, the inner region of the adrenal gland, secretes hormones collectively known as catecholamines, namely:',
    options: [
      'Insulin and glucagon',
      'Adrenaline (epinephrine) and noradrenaline (norepinephrine)',
      'Estrogen and progesterone',
      'Thyroxine and calcitonin'
    ],
    correctIndex: 1,
    explanation: 'The adrenal medulla secretes the catecholamines adrenaline (epinephrine) and noradrenaline (norepinephrine), often called the "fight or flight" hormones.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-43',
    type: 'mcq',
    question: 'Adrenaline and noradrenaline, released during stress or emergency situations, generally cause physiological changes such as:',
    options: [
      'Decreased heart rate and decreased blood glucose',
      'No change in any physiological parameter',
      'Increased heart rate, increased blood pressure, and increased blood glucose levels',
      'Only an increase in digestive activity'
    ],
    correctIndex: 2,
    explanation: 'Adrenaline and noradrenaline prepare the body for emergencies by increasing heart rate, blood pressure, and blood glucose levels (through glycogenolysis), among other effects.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-44',
    type: 'mcq',
    question: 'The endocrine portion of the pancreas, responsible for hormone secretion, consists of clusters of cells called the:',
    options: [
      'Alveoli',
      'Acini',
      'Bowman\'s capsules',
      'Islets of Langerhans'
    ],
    correctIndex: 3,
    explanation: 'The Islets of Langerhans are the clusters of endocrine cells within the pancreas responsible for hormone secretion (insulin and glucagon).',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-45',
    type: 'mcq',
    question: 'The alpha cells of the Islets of Langerhans in the pancreas secrete the hormone:',
    options: [
      'Glucagon',
      'Insulin',
      'Somatostatin exclusively',
      'Thyroxine'
    ],
    correctIndex: 0,
    explanation: 'Alpha cells of the Islets of Langerhans secrete glucagon, a hormone that raises blood glucose levels.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-46',
    type: 'mcq',
    question: 'Glucagon, secreted by the alpha cells of the pancreas, raises blood glucose levels mainly by stimulating:',
    options: [
      'Glycogenesis (glycogen formation) in the liver',
      'Glycogenolysis (breakdown of glycogen) and gluconeogenesis in the liver',
      'Increased insulin secretion',
      'Increased glucose uptake by muscle cells'
    ],
    correctIndex: 1,
    explanation: 'Glucagon raises blood glucose levels primarily by stimulating glycogenolysis (breakdown of stored glycogen) and gluconeogenesis (formation of new glucose) in the liver.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-47',
    type: 'mcq',
    question: 'The beta cells of the Islets of Langerhans in the pancreas secrete the hormone:',
    options: [
      'Glucagon',
      'Cortisol',
      'Insulin',
      'Calcitonin'
    ],
    correctIndex: 2,
    explanation: 'Beta cells of the Islets of Langerhans secrete insulin, a hormone that lowers blood glucose levels.',
    difficulty: 'easy'
  },
  {
    id: 'chemical-coordination-and-integration-48',
    type: 'mcq',
    question: 'Insulin, secreted by the beta cells of the pancreas, lowers blood glucose levels mainly by:',
    options: [
      'Stimulating glycogenolysis in the liver',
      'Increasing glucagon secretion',
      'Inhibiting glucose entry into any cell',
      'Promoting glucose uptake and utilisation by cells, and stimulating glycogen formation (glycogenesis)'
    ],
    correctIndex: 3,
    explanation: 'Insulin lowers blood glucose by promoting glucose uptake and utilisation by body cells and by stimulating the storage of glucose as glycogen (glycogenesis), mainly in the liver and muscle.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-49',
    type: 'mcq',
    question: 'Insulin and glucagon are described as acting antagonistically to each other because:',
    options: [
      'Insulin lowers blood glucose levels while glucagon raises them, allowing for tightly regulated blood glucose homeostasis',
      'Both hormones raise blood glucose levels equally',
      'Both hormones have no effect on blood glucose at all',
      'They are secreted by exactly the same cell type'
    ],
    correctIndex: 0,
    explanation: 'Since insulin lowers blood glucose and glucagon raises it, the two hormones work antagonistically to maintain blood glucose homeostasis within a narrow, healthy range.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-50',
    type: 'mcq',
    question: 'Insufficient secretion of insulin, or the body\'s inability to respond effectively to insulin, results in a metabolic disorder called:',
    options: [
      'Diabetes insipidus',
      'Diabetes mellitus, characterised by elevated blood glucose (hyperglycaemia)',
      'Goitre',
      'Acromegaly'
    ],
    correctIndex: 1,
    explanation: 'Insufficient insulin secretion or insulin resistance leads to diabetes mellitus, a disorder characterised by chronically elevated blood glucose levels (hyperglycaemia).',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-51',
    type: 'mcq',
    question: 'The testes, the male gonads, primarily secrete androgens (mainly testosterone) from specialised cells called:',
    options: [
      'Sertoli cells',
      'Beta cells',
      'Leydig cells (interstitial cells)',
      'Follicular cells'
    ],
    correctIndex: 2,
    explanation: 'Testosterone (the main androgen) is secreted primarily by the Leydig (interstitial) cells of the testes.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-52',
    type: 'mcq',
    question: 'Testosterone, the principal male sex hormone, is essential for regulating:',
    options: [
      'Only bone growth in females',
      'Only thyroid hormone secretion',
      'Only blood calcium levels',
      'Male secondary sexual characteristics, spermatogenesis, and related reproductive functions'
    ],
    correctIndex: 3,
    explanation: 'Testosterone regulates the development of male secondary sexual characteristics, supports spermatogenesis, and influences other aspects of male reproductive physiology.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-53',
    type: 'mcq',
    question: 'The ovaries, the female gonads, primarily secrete the hormone estrogen (mainly estradiol) from:',
    options: [
      'Developing ovarian follicles',
      'The corpus luteum only',
      'Leydig cells',
      'The adrenal medulla'
    ],
    correctIndex: 0,
    explanation: 'Estrogen (mainly estradiol) is primarily secreted by developing ovarian follicles.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-54',
    type: 'mcq',
    question: 'Progesterone, an important female sex hormone, is primarily secreted from a structure formed after ovulation called the:',
    options: [
      'Graafian follicle',
      'Corpus luteum',
      'Zona pellucida',
      'Corpus albicans'
    ],
    correctIndex: 1,
    explanation: 'Progesterone is primarily secreted by the corpus luteum, the structure that forms in the ovary from the ruptured follicle after ovulation.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-55',
    type: 'mcq',
    question: 'Progesterone plays a critical role in:',
    options: [
      'Regulating blood calcium levels',
      'Regulating thyroid hormone secretion',
      'Supporting pregnancy and maintaining the endometrium of the uterus',
      'Regulating blood glucose levels'
    ],
    correctIndex: 2,
    explanation: 'Progesterone is essential for supporting pregnancy and maintaining the endometrial lining of the uterus in a receptive state.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-56',
    type: 'mcq',
    question: 'Hormones that are hydrophilic (water-soluble), such as most peptide/protein hormones, generally cannot cross the plasma membrane of a target cell directly, and therefore rely on:',
    options: [
      'Intracellular (nuclear) receptors only',
      'No receptors at all',
      'Direct diffusion into the nucleus',
      'Membrane-bound (cell-surface) receptors, triggering intracellular signalling pathways'
    ],
    correctIndex: 3,
    explanation: 'Since hydrophilic hormones cannot easily cross the lipid-based plasma membrane, they rely on binding to membrane-bound receptors on the cell surface, which then trigger downstream intracellular signalling.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-57',
    type: 'mcq',
    question: 'When a hormone binds to a membrane-bound receptor, it often triggers the production of an intracellular signalling molecule that mediates the hormone\'s effects, called a:',
    options: [
      'Second messenger (such as cyclic AMP or calcium ions)',
      'Primary messenger',
      'Structural protein',
      'Genetic mutation'
    ],
    correctIndex: 0,
    explanation: 'Binding of a hormone to a membrane-bound receptor often activates the production of a "second messenger" (such as cyclic AMP or Ca²⁺), which then mediates the intracellular response to the hormone.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-58',
    type: 'mcq',
    question: 'Lipophilic (fat-soluble) hormones, such as steroid hormones and thyroid hormones, are generally able to:',
    options: [
      'Only bind to membrane-bound receptors on the cell surface',
      'Cross the plasma membrane and bind to intracellular (cytoplasmic or nuclear) receptors',
      'Never enter the cell at all',
      'Only affect cells with no receptors'
    ],
    correctIndex: 1,
    explanation: 'Being lipophilic, steroid and thyroid hormones can cross the plasma membrane directly and bind to receptors located within the cytoplasm or nucleus of the target cell.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-59',
    type: 'mcq',
    question: 'When a lipophilic hormone binds to its intracellular receptor, the resulting hormone-receptor complex typically acts by:',
    options: [
      'Diffusing back out of the cell without any further effect',
      'Directly generating ATP',
      'Binding to specific regions of DNA, thereby regulating gene expression (protein synthesis)',
      'Breaking down the cell membrane'
    ],
    correctIndex: 2,
    explanation: 'The hormone-receptor complex, formed after a lipophilic hormone binds its intracellular receptor, typically binds to specific DNA sequences, regulating gene expression and consequently protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-60',
    type: 'mcq',
    question: 'Since thyroid hormones and steroid hormones exert their effects mainly by regulating gene expression, their physiological effects are generally observed:',
    options: [
      'Almost instantaneously, within milliseconds',
      'Only during sleep',
      'Without requiring any protein synthesis at all',
      'Over a comparatively longer time frame, since new protein synthesis is often required'
    ],
    correctIndex: 3,
    explanation: 'Since gene-regulating hormones typically require new protein synthesis to exert their effects, their physiological responses generally develop over a longer time frame compared to hormones acting via rapid second-messenger systems.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-coordination-and-integration-61',
    type: 'mcq',
    question: 'The releasing hormone secreted by the hypothalamus that specifically stimulates the anterior pituitary to release gonadotropins (LH and FSH) is called:',
    options: [
      'Gonadotropin Releasing Hormone (GnRH)',
      'Thyrotropin Releasing Hormone (TRH)',
      'Corticotropin Releasing Hormone (CRH)',
      'Growth Hormone Releasing Hormone (GHRH)'
    ],
    correctIndex: 0,
    explanation: 'Gonadotropin Releasing Hormone (GnRH), secreted by the hypothalamus, stimulates the anterior pituitary to release the gonadotropins LH and FSH.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-62',
    type: 'mcq',
    question: 'Somatostatin, secreted by the hypothalamus (as well as by delta cells of the pancreas), primarily functions as an inhibiting hormone for:',
    options: [
      'Thyroid stimulating hormone (TSH)',
      'Growth hormone (GH) secretion',
      'Insulin secretion exclusively',
      'ACTH secretion'
    ],
    correctIndex: 1,
    explanation: 'Somatostatin inhibits the release of growth hormone from the anterior pituitary (among other inhibitory roles, including in the pancreas).',
    difficulty: 'hard'
  },
  {
    id: 'chemical-coordination-and-integration-63',
    type: 'mcq',
    question: 'Excessive secretion of thyroid hormones (hyperthyroidism), as seen in conditions such as Grave\'s disease, generally results in symptoms including:',
    options: [
      'Decreased basal metabolic rate and weight gain',
      'Stunted growth and mental retardation',
      'Increased basal metabolic rate, weight loss, and often exophthalmos (protruding eyes)',
      'Decreased heart rate exclusively'
    ],
    correctIndex: 2,
    explanation: 'Hyperthyroidism, as in Grave\'s disease, typically presents with an increased basal metabolic rate, weight loss, and often exophthalmos (bulging eyes), among other symptoms.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-64',
    type: 'mcq',
    question: 'The overall regulation of hormone secretion in the body is typically maintained through:',
    options: [
      'Completely random, unregulated secretion',
      'A single hormone controlling every physiological process without any feedback',
      'No relationship at all between hormone levels and their effects',
      'Feedback mechanisms (often negative feedback), where the levels of a hormone or its physiological effect regulate its own further secretion'
    ],
    correctIndex: 3,
    explanation: 'Hormone secretion is typically regulated by feedback mechanisms - most commonly negative feedback - where the level of a hormone (or a downstream effect) influences and adjusts its own future secretion.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-65',
    type: 'mcq',
    question: 'Which of the following best describes the general relationship between the hypothalamus, pituitary gland, and various target endocrine glands (such as the thyroid, adrenal cortex, and gonads)?',
    options: [
      'The hypothalamus regulates the pituitary, which in turn regulates several other endocrine glands, forming a hierarchical control axis (e.g., the hypothalamus-pituitary-thyroid axis)',
      'The hypothalamus and pituitary have no influence on other endocrine glands',
      'All endocrine glands function completely independently of the hypothalamus and pituitary',
      'Only the pituitary gland has any regulatory role, with no involvement of the hypothalamus'
    ],
    correctIndex: 0,
    explanation: 'The hypothalamus, pituitary, and various target glands (such as the thyroid, adrenal cortex, and gonads) are organised into hierarchical control axes, where the hypothalamus regulates the pituitary, which then regulates the peripheral endocrine gland.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-66',
    type: 'mcq',
    question: 'Because the adrenal cortex secretes hormones essential for maintaining basic metabolic and homeostatic functions, complete loss of adrenal cortical function is generally considered to be:',
    options: [
      'Of minimal consequence to survival',
      'Incompatible with survival without hormone replacement, since the adrenal cortex is essential for life',
      'Only relevant to reproductive function',
      'Easily compensated for entirely by the adrenal medulla'
    ],
    correctIndex: 1,
    explanation: 'Since the adrenal cortex secretes hormones (like cortisol and aldosterone) essential for basic metabolic and homeostatic regulation, its complete loss is generally life-threatening without appropriate hormone replacement.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-coordination-and-integration-67',
    type: 'mcq',
    question: 'Which of the following hormone pairs is correctly matched with its primary gland of secretion?',
    options: [
      'Oxytocin - Adrenal cortex',
      'Insulin - Thyroid gland',
      'Cortisol - Adrenal cortex',
      'Melatonin - Parathyroid gland'
    ],
    correctIndex: 2,
    explanation: 'Cortisol is correctly matched with the adrenal cortex (specifically the zona fasciculata), which is its primary site of secretion.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-68',
    type: 'mcq',
    question: 'Which of the following hormone pairs is correctly matched with its primary gland of secretion?',
    options: [
      'Glucagon - Thyroid gland',
      'Testosterone - Adrenal medulla',
      'Thyroxine - Pituitary gland',
      'Parathyroid hormone - Parathyroid gland'
    ],
    correctIndex: 3,
    explanation: 'Parathyroid hormone (PTH) is correctly matched with the parathyroid gland, its site of secretion.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-69',
    type: 'mcq',
    question: 'Assertion: Steroid hormones can directly influence gene expression within a target cell.\nReason: Steroid hormones are lipophilic and can cross the plasma membrane to bind intracellular receptors, and the resulting hormone-receptor complex can bind to DNA and regulate transcription.\nChoose the correct option:',
    options: [
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 0,
    explanation: 'The lipophilic nature of steroid hormones, allowing them to cross the plasma membrane and form a hormone-receptor complex capable of binding DNA and regulating transcription, correctly explains how they can directly influence gene expression.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-coordination-and-integration-70',
    type: 'mcq',
    question: 'Assertion: Insulin and glucagon are considered antagonistic hormones.\nReason: Insulin lowers blood glucose levels, while glucagon raises blood glucose levels, allowing the two hormones to jointly maintain blood glucose homeostasis.\nChoose the correct option:',
    options: [
      'Assertion is true, reason is false',
      'Both assertion and reason are true and reason correctly explains assertion',
      'Assertion is false, reason is true',
      'Both assertion and reason are false'
    ],
    correctIndex: 1,
    explanation: 'Since insulin and glucagon have opposite effects on blood glucose levels, working together to maintain blood glucose homeostasis, this correctly explains why they are considered antagonistic hormones.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-71',
    type: 'mcq',
    question: 'Assertion: Iodine deficiency can lead to the development of goitre.\nReason: Insufficient iodine impairs thyroid hormone synthesis, leading to increased TSH secretion, which in turn causes enlargement of the thyroid gland.\nChoose the correct option:',
    options: [
      'Assertion is true, reason is false',
      'Assertion is false, reason is true',
      'Both assertion and reason are true and reason correctly explains assertion',
      'Both assertion and reason are false'
    ],
    correctIndex: 2,
    explanation: 'Iodine deficiency impairs thyroid hormone production, triggering compensatory increased TSH secretion (via reduced negative feedback), which causes thyroid gland enlargement (goitre), correctly explaining the relationship stated.',
    difficulty: 'hard'
  },
  {
    id: 'chemical-coordination-and-integration-72',
    type: 'mcq',
    question: 'Which of the following correctly pairs a hormone with an effect that raises blood calcium levels?',
    options: [
      'Calcitonin - raises blood calcium',
      'Insulin - raises blood calcium',
      'Aldosterone - raises blood calcium',
      'Parathyroid hormone (PTH) - raises blood calcium'
    ],
    correctIndex: 3,
    explanation: 'Parathyroid hormone (PTH) is the hormone that raises blood calcium levels, in contrast to calcitonin, which lowers them.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-73',
    type: 'mcq',
    question: 'Which of the following correctly pairs a hormone with an effect that lowers blood calcium levels?',
    options: [
      'Calcitonin',
      'Parathyroid hormone (PTH)',
      'Cortisol',
      'Testosterone'
    ],
    correctIndex: 0,
    explanation: 'Calcitonin, secreted by the thyroid gland, is the hormone that lowers blood calcium levels, mainly by inhibiting bone resorption.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-74',
    type: 'mcq',
    question: 'Which of the following hormones is primarily involved in helping the body prepare for and cope with acute physical or psychological stress?',
    options: [
      'Melatonin',
      'Adrenaline (epinephrine)',
      'Calcitonin',
      'Prolactin'
    ],
    correctIndex: 1,
    explanation: 'Adrenaline, released from the adrenal medulla, is a key hormone in the acute stress response, preparing the body for immediate physical action ("fight or flight").',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-75',
    type: 'mcq',
    question: 'Which of the following hormones is directly involved in stimulating milk ejection from the mammary glands during breastfeeding?',
    options: [
      'Prolactin',
      'Estrogen',
      'Oxytocin',
      'Progesterone'
    ],
    correctIndex: 2,
    explanation: 'While prolactin stimulates milk production, oxytocin is specifically responsible for triggering the ejection (let-down) of milk from the mammary glands during breastfeeding.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-76',
    type: 'mcq',
    question: 'Which of the following hormones is primarily responsible for stimulating milk production (as opposed to milk ejection) within the mammary glands?',
    options: [
      'Oxytocin',
      'Estrogen only',
      'Testosterone',
      'Prolactin'
    ],
    correctIndex: 3,
    explanation: 'Prolactin, secreted by the anterior pituitary, is primarily responsible for stimulating the actual production of milk within the mammary glands.',
    difficulty: 'medium'
  },
  {
    id: 'chemical-coordination-and-integration-77',
    type: 'mcq',
    question: 'Which of the following endocrine glands or structures is correctly matched with its embryonic/anatomical relationship as described in the chapter?',
    options: [
      'Adrenal cortex and adrenal medulla - have distinct embryonic origins, despite forming a single anatomical gland',
      'Adrenal cortex - originates from ectodermal tissue, similar to the adrenal medulla',
      'Thyroid and parathyroid glands are the exact same structure with identical functions',
      'The pituitary gland has no connection whatsoever to the hypothalamus'
    ],
    correctIndex: 0,
    explanation: 'Although the adrenal cortex and adrenal medulla together form a single anatomical gland, they have distinct developmental origins and secrete entirely different classes of hormones (steroid hormones from the cortex, catecholamines from the medulla).',
    difficulty: 'hard'
  },
  {
    id: 'chemical-coordination-and-integration-78',
    type: 'mcq',
    question: 'Which of the following best summarises the overall importance of the endocrine system, working alongside the nervous system, in maintaining body homeostasis?',
    options: [
      'The endocrine system acts completely independently of the nervous system, with no coordination between the two',
      'The endocrine system, through slower-acting but often longer-lasting chemical (hormonal) signals, complements the faster electrical signalling of the nervous system, together achieving integrated regulation of body functions',
      'Only the nervous system is responsible for any form of bodily coordination',
      'Hormones have no relationship to homeostasis at all'
    ],
    correctIndex: 1,
    explanation: 'The endocrine system, through hormonal signalling (generally slower but often more sustained than nerve impulses), works together with the nervous system\'s rapid electrical signalling to achieve comprehensive, integrated regulation of body functions and homeostasis.',
    difficulty: 'medium'
  },
];

export default questions;
