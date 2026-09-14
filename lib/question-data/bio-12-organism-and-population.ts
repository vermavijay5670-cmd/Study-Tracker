import type { Question } from "@/lib/questionBank";
// NEET Biology Question Bank
// Chapter: Organisms and Populations
// 78 MCQs covering all sub-topics with mixed difficulty (easy/medium/hard)

const questions: Question[] = [
  {
    id: 'organisms-and-populations-1',
    type: 'mcq',
    question: 'Ecology is broadly studied at four increasingly complex levels of biological organisation: organism, population, community, and:',
    options: [
      'Cell, exclusively, with no higher level of organisation',
      'Ecosystem (extending further to biome and biosphere)',
      'Molecule, exclusively',
      'Organelle, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Ecology is studied across a hierarchy of increasingly complex levels: organism, population, community, ecosystem, biome, and ultimately the biosphere.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-2',
    type: 'mcq',
    question: 'The specific physical location where an organism lives is referred to as its:',
    options: [
      'Niche',
      'Biome',
      'Population',
      'Habitat'
    ],
    correctIndex: 3,
    explanation: 'Habitat refers to the specific physical location or environment in which an organism lives.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-3',
    type: 'mcq',
    question: 'The specific functional role and position of an organism within its ecosystem, including its interactions with other organisms and the environment, is referred to as its:',
    options: [
      'Ecological niche',
      'Habitat, exclusively',
      'Population density',
      'Carrying capacity'
    ],
    correctIndex: 0,
    explanation: 'Ecological niche refers to the functional role and position an organism occupies within its ecosystem, distinct from its physical habitat.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-4',
    type: 'mcq',
    question: 'Among the various abiotic factors affecting organisms, which is generally considered the single most ecologically relevant factor, given its influence on enzyme kinetics and overall metabolism?',
    options: [
      'Soil pH exclusively',
      'Wind speed exclusively',
      'Temperature',
      'Atmospheric pressure exclusively'
    ],
    correctIndex: 2,
    explanation: 'Temperature is generally regarded as the single most ecologically relevant abiotic factor, since it profoundly affects enzyme kinetics and overall metabolic rates in organisms.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-5',
    type: 'mcq',
    question: 'Organisms capable of tolerating and thriving across a wide range of temperatures are described as:',
    options: [
      'Stenothermal',
      'Eurythermic exclusively refers to plants, not animals',
      'Eurythermal',
      'Homeothermic exclusively'
    ],
    correctIndex: 2,
    explanation: 'Eurythermal organisms can tolerate and function well across a wide range of temperatures.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-6',
    type: 'mcq',
    question: 'Organisms that can tolerate only a narrow range of temperatures are described as:',
    options: [
      'Stenothermal',
      'Eurythermal',
      'Osmoconformers exclusively',
      'Halophiles exclusively'
    ],
    correctIndex: 0,
    explanation: 'Stenothermal organisms are restricted to a narrow range of tolerable temperatures.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-7',
    type: 'mcq',
    question: 'For terrestrial organisms, the amount and distribution of rainfall in a given region are important abiotic factors that largely determine the:',
    options: [
      'Exact chemical composition of the atmosphere, with no relation to vegetation',
      'Rate of continental drift',
      'Exact rotational speed of the Earth',
      'Pattern of vegetation found in that region'
    ],
    correctIndex: 3,
    explanation: 'Rainfall amount and distribution are key abiotic factors that largely shape the vegetation patterns characteristic of a terrestrial region.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-8',
    type: 'mcq',
    question: 'Light is an important abiotic factor for plants, not only because it is essential for photosynthesis, but also because it plays a role in orientation, growth, and reproductive cycles through the phenomenon of:',
    options: [
      'Photorespiration exclusively',
      'Photoperiodism',
      'Photophosphorylation exclusively',
      'Thigmotropism exclusively'
    ],
    correctIndex: 1,
    explanation: 'Beyond its role in photosynthesis, light also influences plant reproductive cycles through photoperiodism, the response to the relative length of day and night.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-9',
    type: 'mcq',
    question: 'The ultraviolet (UV) component of solar radiation, reaching organisms on Earth, is generally considered to be:',
    options: [
      'Entirely harmless, under all circumstances',
      'Essential for photosynthesis, in the same way as visible light',
      'The primary driver of photoperiodism in all organisms',
      'Harmful, especially at high exposure levels'
    ],
    correctIndex: 3,
    explanation: 'The UV component of solar radiation is generally considered harmful to organisms, particularly at higher exposure levels.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-10',
    type: 'mcq',
    question: 'Soil, an important abiotic factor, varies considerably in its structure, pH, and mineral composition, and these variations largely determine the:',
    options: [
      'Rate of the Earth\'s rotation, with no ecological relationship',
      'Type of vegetation and organisms found living in or on a particular soil',
      'Exact position of the sun in the sky',
      'Overall composition of the atmosphere'
    ],
    correctIndex: 1,
    explanation: 'Variations in soil structure, pH, and mineral composition significantly influence the type of vegetation and the organisms that can inhabit a particular area.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-11',
    type: 'mcq',
    question: 'In aquatic environments, the salinity of water is an important abiotic factor because it directly affects the:',
    options: [
      'Rate of soil erosion, exclusively',
      'Amount of terrestrial rainfall, exclusively',
      'Osmotic regulation of aquatic organisms',
      'Composition of atmospheric gases, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Salinity is a critical abiotic factor for aquatic organisms, since it directly influences their osmotic regulation and overall physiological balance.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-12',
    type: 'mcq',
    question: 'Organisms that maintain a constant internal environment (such as body temperature) through physiological means, despite changes in the external environment, are described as:',
    options: [
      'Regulators',
      'Conformers',
      'Migrators, exclusively',
      'Aestivators, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Regulators are organisms that maintain a constant internal environment through active physiological mechanisms (such as thermoregulation), regardless of external conditions.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-13',
    type: 'mcq',
    question: 'Birds and mammals are classic examples of organisms that can be described as:',
    options: [
      'Regulators, capable of thermoregulation to maintain a constant body temperature',
      'Conformers, whose body temperature simply matches the environment',
      'Organisms with no ability to survive temperature changes at all',
      'Organisms lacking any form of metabolism'
    ],
    correctIndex: 0,
    explanation: 'Birds and mammals are classic examples of regulators, actively maintaining a constant internal body temperature through physiological thermoregulation.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-14',
    type: 'mcq',
    question: 'The majority of animals and almost all plants, which cannot maintain a constant internal environment and whose body temperature changes with the ambient temperature, are described as:',
    options: [
      'Regulators',
      'Migrators, exclusively',
      'Conformers',
      'Homeotherms, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Conformers, comprising most animals and nearly all plants, do not maintain a constant internal environment, and their body temperature typically changes in line with the surrounding environment.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-15',
    type: 'mcq',
    question: 'One reason many organisms are conformers rather than regulators is that active physiological regulation of a constant internal environment is generally:',
    options: [
      'Completely free of any energy cost',
      'Energetically (metabolically) expensive',
      'Only relevant to plants, never to animals',
      'Impossible to achieve under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'Maintaining a constant internal environment through active regulation is metabolically costly, which is one reason why many organisms instead adopt a conforming strategy.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-16',
    type: 'mcq',
    question: 'Certain animals, such as birds, cope with unfavourable seasonal conditions by temporarily moving away from a stressful habitat to a more hospitable area and returning later, a strategy called:',
    options: [
      'Hibernation',
      'Aestivation',
      'Diapause',
      'Migration'
    ],
    correctIndex: 3,
    explanation: 'Migration is the strategy by which organisms, such as many bird species, temporarily relocate to escape unfavourable seasonal conditions, later returning to their original habitat.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-17',
    type: 'mcq',
    question: 'The winter dormancy (winter sleep) exhibited by certain mammals, such as bears, to cope with harsh, cold conditions is called:',
    options: [
      'Aestivation',
      'Hibernation',
      'Diapause',
      'Migration'
    ],
    correctIndex: 1,
    explanation: 'Hibernation refers to the winter dormancy strategy adopted by certain mammals (such as bears) to survive harsh, cold conditions.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-18',
    type: 'mcq',
    question: 'The summer dormancy exhibited by certain organisms, such as snails and some fish, to escape extreme heat and dryness, is called:',
    options: [
      'Hibernation',
      'Diapause',
      'Migration',
      'Aestivation'
    ],
    correctIndex: 3,
    explanation: 'Aestivation is the summer dormancy strategy that helps certain organisms, like snails and some fish, survive periods of extreme heat and desiccation.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-19',
    type: 'mcq',
    question: 'Desert plants commonly show adaptations such as a thick cuticle, sunken stomata, and CAM photosynthesis, all of which primarily help to:',
    options: [
      'Minimise water loss',
      'Maximise water loss, to cool the plant rapidly',
      'Maximise light absorption at the expense of water conservation',
      'Increase susceptibility to herbivore attack'
    ],
    correctIndex: 0,
    explanation: 'Adaptations like a thick cuticle, sunken stomata, and CAM photosynthesis in desert plants primarily function to minimise water loss under arid conditions.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-20',
    type: 'mcq',
    question: 'Allen\'s Rule describes the observation that mammals living in colder climates generally have shorter ears and limbs, an adaptation that primarily helps to:',
    options: [
      'Maximise heat loss from the body',
      'Increase overall body surface area, to enhance evaporative cooling',
      'Minimise heat loss from the body',
      'Have no thermoregulatory significance whatsoever'
    ],
    correctIndex: 2,
    explanation: 'Allen\'s Rule notes that shorter appendages (ears, limbs) in mammals from colder climates reduce the surface area available for heat loss, helping to conserve body heat.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-21',
    type: 'mcq',
    question: 'The kangaroo rat, found in American deserts, is able to survive without ever drinking water mainly through adaptations that include internal fat oxidation and:',
    options: [
      'The production of highly concentrated urine',
      'The production of very dilute urine',
      'Continuous, uninhibited sweating',
      'The complete absence of any kidney function'
    ],
    correctIndex: 0,
    explanation: 'The kangaroo rat survives without drinking water partly through metabolic water production from fat oxidation, and by producing highly concentrated urine to minimise water loss.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-22',
    type: 'mcq',
    question: 'Individuals who ascend rapidly to high altitudes often experience symptoms such as nausea, fatigue, and heart palpitations, a condition known as:',
    options: [
      'Hibernation syndrome',
      'Aestivation syndrome',
      'Mountain sickness',
      'Diapause syndrome'
    ],
    correctIndex: 2,
    explanation: 'Mountain sickness, characterised by symptoms like nausea, fatigue, and heart palpitations, results from the low oxygen availability and reduced atmospheric pressure encountered at high altitudes.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-23',
    type: 'mcq',
    question: 'In response to prolonged exposure to high altitude, the human body gradually acclimatises by increasing red blood cell production, decreasing the binding affinity of haemoglobin for oxygen, and:',
    options: [
      'Decreasing the breathing rate significantly',
      'Completely halting red blood cell production',
      'Eliminating haemoglobin from the blood entirely',
      'Increasing the breathing rate'
    ],
    correctIndex: 3,
    explanation: 'High-altitude acclimatisation involves several physiological adjustments, including increased red blood cell production, altered haemoglobin oxygen affinity, and an increased breathing rate, all helping the body cope with reduced oxygen availability.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-24',
    type: 'mcq',
    question: 'Desert lizards, lacking the physiological ability to thermoregulate internally, instead rely on a behavioural adaptation in which they bask in the sun to gain heat and seek shade when temperatures become too high, an example of:',
    options: [
      'Physiological thermoregulation, identical to that seen in mammals',
      'Behavioural thermoregulation',
      'Complete indifference to ambient temperature',
      'Hibernation, occurring on a daily basis'
    ],
    correctIndex: 1,
    explanation: 'Desert lizards use behavioural thermoregulation - actively moving between sun and shade - to manage their body temperature, since they lack the internal physiological regulatory mechanisms found in mammals and birds.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-25',
    type: 'mcq',
    question: 'Unlike an individual organism, a population possesses certain unique attributes, such as birth rate, death rate, and:',
    options: [
      'A single, fixed genetic sequence for the entire group',
      'A single, fixed body size, uniform across all members',
      'A single, fixed lifespan applicable to every individual',
      'Age distribution (age structure)'
    ],
    correctIndex: 3,
    explanation: 'Populations possess unique attributes, such as birth rate, death rate, and age distribution, that do not apply meaningfully to a single individual organism.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-26',
    type: 'mcq',
    question: 'The birth rate of a population, expressed as the number of births per capita over a given time period, is also referred to as:',
    options: [
      'Mortality',
      'Natality',
      'Emigration',
      'Carrying capacity'
    ],
    correctIndex: 1,
    explanation: 'Natality refers to the birth rate of a population, expressed as the per capita number of births occurring over a specified time period.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-27',
    type: 'mcq',
    question: 'The death rate of a population, expressed as the number of deaths per capita over a given time period, is also referred to as:',
    options: [
      'Mortality',
      'Natality',
      'Immigration',
      'Fecundity'
    ],
    correctIndex: 0,
    explanation: 'Mortality refers to the death rate of a population, expressed as the per capita number of deaths occurring over a specified time period.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-28',
    type: 'mcq',
    question: 'The proportion of individuals of different ages within a given population is referred to as its:',
    options: [
      'Sex ratio, exclusively',
      'Population density, exclusively',
      'Age distribution (age structure/age pyramid)',
      'Carrying capacity, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Age distribution (or age structure), often depicted as an age pyramid, describes the relative proportion of individuals belonging to different age groups within a population.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-29',
    type: 'mcq',
    question: 'Population density, an important attribute of a population, is generally defined as the number of individuals of a species present per unit:',
    options: [
      'Time period, with no reference to space at all',
      'Individual body weight, exclusively',
      'Area (or volume, in aquatic contexts)',
      'Total available food supply, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Population density refers to the number of individuals of a species present per unit area (or per unit volume, in the case of aquatic populations).',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-30',
    type: 'mcq',
    question: 'In situations where directly counting the total number of individuals in a population is impractical (such as counting all fish in a large pond), ecologists often rely on:',
    options: [
      'Indirect indices, such as percentage vegetation cover, pug marks, or catch-per-unit-effort',
      'Complete abandonment of any density estimation, since no method exists',
      'Random, unverified guessing, with no scientific basis at all',
      'Assuming an arbitrary, fixed density for every population, regardless of species'
    ],
    correctIndex: 0,
    explanation: 'When direct counting is impractical, ecologists often use indirect indices - such as vegetation cover percentage, pug marks, or catch-per-unit-effort in fisheries - to estimate population density.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-31',
    type: 'mcq',
    question: 'The four basic processes that affect the density of a population are natality, mortality, immigration, and:',
    options: [
      'Carrying capacity, which is not a basic density-affecting process itself',
      'Emigration',
      'Photoperiodism',
      'Thermoregulation'
    ],
    correctIndex: 1,
    explanation: 'Population density is fundamentally affected by four processes: natality, mortality, immigration, and emigration.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-32',
    type: 'mcq',
    question: 'Immigration refers to the number of individuals of a species that enter a habitat from elsewhere during a given time period, and this process generally causes the population density to:',
    options: [
      'Decrease',
      'Remain completely unaffected',
      'Immediately drop to zero',
      'Increase'
    ],
    correctIndex: 3,
    explanation: 'Immigration, the influx of new individuals into a habitat, generally causes an increase in population density.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-33',
    type: 'mcq',
    question: 'Emigration refers to the number of individuals that leave a habitat and move elsewhere during a given time period, and this process generally causes the population density to:',
    options: [
      'Decrease',
      'Increase',
      'Remain completely unaffected',
      'Immediately double'
    ],
    correctIndex: 0,
    explanation: 'Emigration, the departure of individuals from a habitat, generally causes a decrease in population density.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-34',
    type: 'mcq',
    question: 'A population\'s density will generally increase over a given time period if the combined effect of natality and immigration exceeds the combined effect of:',
    options: [
      'Only mortality, with no consideration of emigration',
      'Only immigration, considered twice',
      'Mortality and emigration',
      'Carrying capacity and photoperiodism'
    ],
    correctIndex: 2,
    explanation: 'Population density increases when the sum of natality and immigration exceeds the sum of mortality and emigration, and decreases under the opposite condition.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-35',
    type: 'mcq',
    question: 'When resources such as food and space are unlimited, a population is generally able to achieve its maximum, unrestricted growth potential, described as:',
    options: [
      'Logistic growth',
      'Zero growth, regardless of resource availability',
      'Negative growth, regardless of resource availability',
      'Exponential growth'
    ],
    correctIndex: 3,
    explanation: 'Under conditions of unlimited resources, populations can achieve exponential growth, realising their full intrinsic growth potential.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-36',
    type: 'mcq',
    question: 'The mathematical equation describing exponential population growth is dN/dt = rN, where \'r\' represents the:',
    options: [
      'Carrying capacity of the environment',
      'Intrinsic rate of natural increase',
      'Total population size at time zero',
      'The exact number of predators present'
    ],
    correctIndex: 1,
    explanation: 'In the exponential growth equation dN/dt = rN, the parameter \'r\' represents the intrinsic rate of natural increase, characteristic of a given species under specific conditions.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-37',
    type: 'mcq',
    question: 'When population density is plotted against time under conditions of exponential growth, the resulting graph characteristically forms a:',
    options: [
      'Sigmoid (S-shaped) curve',
      'J-shaped curve',
      'A perfectly straight, horizontal line',
      'A perfect circle'
    ],
    correctIndex: 1,
    explanation: 'Exponential growth, when plotted graphically over time, produces a characteristic J-shaped curve.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-38',
    type: 'mcq',
    question: 'If two different species have markedly different intrinsic rates of natural increase (r), it is expected that, under unlimited resource conditions, these species will show:',
    options: [
      'Exactly identical rates of population growth, despite the differing \'r\' values',
      'No population growth at all, regardless of their respective \'r\' values',
      'Growth that is completely independent of their \'r\' values',
      'Dramatically different rates of exponential population growth'
    ],
    correctIndex: 3,
    explanation: 'Species with differing intrinsic rates of natural increase (r) are expected to show correspondingly different rates of exponential growth, given unlimited resources.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-39',
    type: 'mcq',
    question: 'Exponential growth, though mathematically important as a model, is generally considered somewhat unrealistic for most natural populations over the long term mainly because:',
    options: [
      'No natural population has ever shown any growth at all, under any circumstances',
      'Exponential growth accurately describes every natural population indefinitely, without exception',
      'Resources such as food and space are, in reality, always finite (limited) in nature',
      'Resources are always completely unlimited in every natural ecosystem'
    ],
    correctIndex: 2,
    explanation: 'Since real-world resources like food and space are inherently finite, unrestricted exponential growth cannot continue indefinitely, making it a less realistic long-term model for most natural populations.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-40',
    type: 'mcq',
    question: 'The maximum population size that a particular environment can sustain, given its available resources, is referred to as the environment\'s:',
    options: [
      'Carrying capacity (K)',
      'Intrinsic rate of natural increase (r)',
      'Natality rate',
      'Age distribution'
    ],
    correctIndex: 0,
    explanation: 'Carrying capacity (K) represents the maximum population size that a given environment can sustainably support, based on its available resources.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-41',
    type: 'mcq',
    question: 'A population growing in a habitat with limited resources typically shows an initial lag phase, followed by phases of acceleration and deceleration, before finally reaching an asymptote as the population density approaches the:',
    options: [
      'Intrinsic rate of natural increase, directly',
      'Zero population size',
      'Carrying capacity of the environment',
      'An indefinitely increasing, unbounded population size'
    ],
    correctIndex: 2,
    explanation: 'Under conditions of limited resources, population growth typically slows and plateaus as density approaches the environment\'s carrying capacity.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-42',
    type: 'mcq',
    question: 'The mathematical model describing this pattern of growth, incorporating the limiting effect of carrying capacity, is called the:',
    options: [
      'Logistic (Verhulst-Pearl) growth model',
      'Exponential growth model',
      'Age distribution model',
      'Photoperiodism model'
    ],
    correctIndex: 0,
    explanation: 'The logistic growth model, also known as the Verhulst-Pearl logistic growth model, incorporates the concept of carrying capacity to describe growth under resource-limited conditions.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-43',
    type: 'mcq',
    question: 'The equation for logistic growth, dN/dt = rN(1-N/K), includes the term (1-N/K), which represents:',
    options: [
      'The exact intrinsic rate of natural increase, with no relation to carrying capacity',
      'The proportion of carrying capacity that remains available for further population growth',
      'A completely fixed, unchanging value, regardless of population size',
      'The exact number of predators present in the habitat'
    ],
    correctIndex: 1,
    explanation: 'The term (1-N/K) in the logistic growth equation represents the proportion of the carrying capacity that remains unutilised and available for further population growth; as N approaches K, this term approaches zero, slowing growth.',
    difficulty: 'hard'
  },
  {
    id: 'organisms-and-populations-44',
    type: 'mcq',
    question: 'When population density is plotted against time under conditions of logistic growth, the resulting graph characteristically forms a:',
    options: [
      'A J-shaped curve',
      'A perfectly straight, linear line',
      'A downward-sloping exponential decay curve',
      'Sigmoid (S-shaped) curve'
    ],
    correctIndex: 3,
    explanation: 'Logistic growth, when plotted graphically over time, produces a characteristic sigmoid (S-shaped) curve, reflecting the initial lag, acceleration, deceleration, and eventual plateau at carrying capacity.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-45',
    type: 'mcq',
    question: 'Compared to the exponential growth model, the logistic growth model is generally considered a more realistic representation of population growth in nature mainly because it accounts for:',
    options: [
      'The complete and total absence of any resource limitation whatsoever',
      'A hypothetical scenario with no predators or competitors present, ever',
      'The exact genetic sequence of the species in question',
      'The finite (limited) nature of resources such as food and space'
    ],
    correctIndex: 3,
    explanation: 'The logistic growth model is generally considered more realistic than the exponential model because it explicitly accounts for the fact that resources in nature are finite, incorporating the concept of carrying capacity.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-46',
    type: 'mcq',
    question: 'As a population\'s density (N) approaches the carrying capacity (K) of its environment under the logistic growth model, the actual rate of population growth (dN/dt) tends to:',
    options: [
      'Increase indefinitely, without any limit',
      'Approach zero, as growth slows and eventually plateaus',
      'Immediately and abruptly drop to a large negative value',
      'Remain completely constant, unaffected by the approach to K'
    ],
    correctIndex: 1,
    explanation: 'As population density approaches the carrying capacity under logistic growth, the rate of growth (dN/dt) progressively slows, eventually approaching zero as the population stabilises near K.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-47',
    type: 'mcq',
    question: 'Species that reproduce only once during their entire lifetime, such as Pacific salmon, bamboo, and agave, are described as:',
    options: [
      'Semelparous',
      'Iteroparous',
      'Eurythermal',
      'Stenothermal'
    ],
    correctIndex: 0,
    explanation: 'Semelparous species, including Pacific salmon, bamboo, and agave, reproduce only a single time during their entire lifespan.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-48',
    type: 'mcq',
    question: 'Species that reproduce more than once over the course of their lifetime, such as most birds and mammals, are described as:',
    options: [
      'Semelparous',
      'Aestivating',
      'Iteroparous',
      'Hibernating'
    ],
    correctIndex: 2,
    explanation: 'Iteroparous species, including most birds and mammals, are capable of reproducing multiple times throughout their lifespan.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-49',
    type: 'mcq',
    question: 'Life history theory suggests that populations evolve to maximise their reproductive success (Darwinian fitness), often involving trade-offs, such as between producing many small offspring versus:',
    options: [
      'Producing fewer, larger offspring with potentially greater individual investment',
      'Never reproducing at all, under any circumstances',
      'Producing offspring only through purely asexual means, exclusively',
      'Eliminating all forms of parental investment entirely'
    ],
    correctIndex: 0,
    explanation: 'Life history strategies often involve a fundamental trade-off between producing a large number of small offspring versus a smaller number of larger, potentially more heavily invested offspring.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-50',
    type: 'mcq',
    question: 'An interspecific interaction that benefits both participating species is called:',
    options: [
      'Competition',
      'Predation',
      'Mutualism',
      'Amensalism'
    ],
    correctIndex: 2,
    explanation: 'Mutualism describes an interspecific interaction in which both participating species derive benefit.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-51',
    type: 'mcq',
    question: 'Lichens, representing a classic example of mutualism, consist of a symbiotic association between a fungus and:',
    options: [
      'A virus',
      'An alga (or cyanobacterium)',
      'A bacterium of an unrelated, non-photosynthetic type only',
      'A protozoan'
    ],
    correctIndex: 1,
    explanation: 'Lichens are a classic mutualistic association between a fungus and a photosynthetic partner, typically an alga or cyanobacterium.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-52',
    type: 'mcq',
    question: 'Mycorrhizae represent a mutualistic association between fungi and the roots of:',
    options: [
      'Only bacteria, with no involvement of plants',
      'Only insects',
      'Only other fungi, exclusively',
      'Higher plants'
    ],
    correctIndex: 3,
    explanation: 'Mycorrhizae are a mutualistic association formed between certain fungi and the root systems of higher plants, benefiting both partners.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-53',
    type: 'mcq',
    question: 'The relationship between the Yucca plant and its associated pollinator moth is considered a classic example of highly co-evolved, obligate mutualism, since the moth both pollinates the flower and:',
    options: [
      'Only feeds on the moth\'s own larvae, with no interaction with the plant\'s ovary',
      'Lays its eggs within the flower\'s ovary, where the larvae later feed on some of the developing seeds',
      'Completely destroys the entire Yucca plant, with no benefit to the plant',
      'Has absolutely no interaction with the plant\'s reproductive structures at all'
    ],
    correctIndex: 1,
    explanation: 'The Yucca-moth relationship is a classic obligate mutualism: the moth pollinates the Yucca flower while also laying its eggs in the flower\'s ovary, where the resulting larvae feed on some of the developing seeds, benefiting both species.',
    difficulty: 'hard'
  },
  {
    id: 'organisms-and-populations-54',
    type: 'mcq',
    question: 'Mutualistic plant-pollinator relationships are generally considered ecologically significant mainly because they:',
    options: [
      'Provide no benefit whatsoever to either the plant or the pollinator',
      'Only benefit the pollinator, with no benefit at all to the plant',
      'Actively prevent the plant from reproducing successfully',
      'Facilitate the reproductive success of the plant while providing a food resource for the pollinator'
    ],
    correctIndex: 3,
    explanation: 'Plant-pollinator mutualisms benefit both parties: the pollinator receives a food resource (such as nectar), while the plant benefits from successful pollination and reproduction.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-55',
    type: 'mcq',
    question: 'An interspecific interaction that is detrimental to both participating species, typically arising when both species require the same limited resource, is called:',
    options: [
      'Competition',
      'Mutualism',
      'Commensalism',
      'Predation'
    ],
    correctIndex: 0,
    explanation: 'Competition describes an interspecific interaction that harms both participating species, typically resulting from a shared need for the same limited resource.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-56',
    type: 'mcq',
    question: 'Gause\'s Competitive Exclusion Principle states that two closely related species competing for exactly the same limiting resources generally cannot:',
    options: [
      'Ever interact with each other in any way',
      'Reproduce successfully under any circumstances',
      'Coexist indefinitely in the same habitat',
      'Avoid competition entirely, even for non-limiting resources'
    ],
    correctIndex: 2,
    explanation: 'Gause\'s Competitive Exclusion Principle states that when two closely related species compete for identical limiting resources, they generally cannot coexist indefinitely; the more competitively successful species will eventually displace the other.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-57',
    type: 'mcq',
    question: 'According to the Competitive Exclusion Principle, when two species compete for the same limiting resource, the ultimate outcome is generally that the:',
    options: [
      'Two species always reach a stable, permanent equilibrium of coexistence',
      'Weaker species always eventually outcompetes the stronger species',
      'Competitively superior species eventually eliminates the other from that particular habitat',
      'Neither species is affected in any way by the competitive interaction'
    ],
    correctIndex: 2,
    explanation: 'The competitive exclusion principle predicts that, given competition for an identical limiting resource, the competitively superior species will eventually eliminate the inferior competitor from the shared habitat.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-58',
    type: 'mcq',
    question: 'Interspecific competition is generally considered to be an important evolutionary force mainly because it can drive:',
    options: [
      'Resource partitioning and the evolution of ecological differences between competing species',
      'The complete cessation of evolution in all competing species',
      'The exact genetic homogenisation of all competing species, making them identical',
      'A total absence of any selective pressure on either species'
    ],
    correctIndex: 0,
    explanation: 'Interspecific competition is considered a significant evolutionary force because it can drive resource partitioning and the evolution of distinguishing ecological differences between competing species, reducing direct competitive overlap.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-59',
    type: 'mcq',
    question: 'Interspecific competition is not necessarily limited to competition for food alone, and can also occur over other limited resources, such as:',
    options: [
      'Only atmospheric oxygen, with no other possible resource',
      'Only sunlight, with no other possible resource',
      'Nothing else; competition can only ever be for food',
      'Space or nesting sites'
    ],
    correctIndex: 3,
    explanation: 'Interspecific competition can occur over a variety of limited resources beyond food alone, including space and nesting sites.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-60',
    type: 'mcq',
    question: 'An interspecific interaction that benefits one species (the predator) while harming the other (the prey) is called:',
    options: [
      'Mutualism',
      'Predation',
      'Commensalism',
      'Amensalism'
    ],
    correctIndex: 1,
    explanation: 'Predation describes an interspecific interaction in which the predator benefits at the direct expense of the prey species.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-61',
    type: 'mcq',
    question: 'Predators play an important ecological role by helping to keep prey populations under control and by facilitating the:',
    options: [
      'Complete elimination of all prey species from an ecosystem',
      'Total cessation of all energy flow within an ecosystem',
      'Permanent halt of all population growth within an ecosystem',
      'Transfer of energy across trophic levels within a food chain'
    ],
    correctIndex: 3,
    explanation: 'Beyond regulating prey population size, predators also play a crucial role in transferring energy across successive trophic levels within a food chain.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-62',
    type: 'mcq',
    question: 'A \'keystone species\' refers to a predator whose removal from an ecosystem can lead to significant changes, such as a competitively dominant prey species eliminating other, competitively inferior prey species, ultimately resulting in:',
    options: [
      'Increased overall species diversity in that ecosystem, without exception',
      'Decreased overall species diversity in that ecosystem',
      'No change whatsoever to the ecosystem\'s diversity',
      'The complete extinction of the keystone predator\'s own species alone'
    ],
    correctIndex: 1,
    explanation: 'The removal of a keystone predator species can allow a competitively dominant prey species to outcompete and eliminate other prey species, ultimately reducing overall species diversity within that ecosystem.',
    difficulty: 'hard'
  },
  {
    id: 'organisms-and-populations-63',
    type: 'mcq',
    question: 'Certain prey species have evolved a defence mechanism involving colouration that helps them blend into their surroundings and avoid detection by predators, called:',
    options: [
      'Aposematic (warning) colouration',
      'Mimicry, exclusively',
      'Cryptic colouration (camouflage)',
      'Bioluminescence, exclusively'
    ],
    correctIndex: 2,
    explanation: 'Cryptic colouration (camouflage) allows certain prey species to blend into their environment, reducing the likelihood of detection by predators.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-64',
    type: 'mcq',
    question: 'Certain toxic or distasteful prey species advertise their unpalatability to potential predators through bright, conspicuous colouration, a strategy known as:',
    options: [
      'Aposematic (warning) colouration',
      'Cryptic colouration (camouflage)',
      'Mimicry, exclusively',
      'Migration, exclusively'
    ],
    correctIndex: 0,
    explanation: 'Aposematic (warning) colouration is a defensive strategy in which toxic or distasteful species display bright, conspicuous colours to warn potential predators of their unpalatability.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-65',
    type: 'mcq',
    question: 'The Monarch butterfly displays aposematic colouration, warning predators of its toxicity, which it acquires by sequestering a toxic chemical compound from its:',
    options: [
      'Larval food plant',
      'Predators, directly, after being attacked',
      'The surrounding soil, absorbed through its legs',
      'Rainwater, absorbed directly through its wings'
    ],
    correctIndex: 0,
    explanation: 'The Monarch butterfly acquires its toxicity by sequestering toxic compounds from its larval food plant (milkweed), which it later advertises to predators through aposematic colouration.',
    difficulty: 'hard'
  },
  {
    id: 'organisms-and-populations-66',
    type: 'mcq',
    question: 'Mimicry, a defensive strategy in which a non-poisonous, palatable species closely resembles a poisonous, unpalatable species, is well illustrated by the resemblance between the Viceroy butterfly and the:',
    options: [
      'Housefly',
      'Honeybee',
      'Monarch butterfly',
      'Silk moth'
    ],
    correctIndex: 2,
    explanation: 'The Viceroy butterfly, a palatable species, closely mimics the appearance of the toxic Monarch butterfly, deterring predators through this resemblance.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-67',
    type: 'mcq',
    question: 'Herbivory is generally considered a special case of predation in which the prey organism is specifically a:',
    options: [
      'Fungus, exclusively',
      'Bacterium, exclusively',
      'Virus, exclusively',
      'Plant'
    ],
    correctIndex: 3,
    explanation: 'Herbivory represents a special category of predation in which the organism being consumed (the \'prey\') is specifically a plant.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-68',
    type: 'mcq',
    question: 'As a defence against herbivory, many plants have evolved to produce specific secondary metabolites, such as nicotine, caffeine, and quinine, which primarily serve to:',
    options: [
      'Actively attract more herbivores to the plant',
      'Deter grazing herbivores',
      'Serve no defensive function whatsoever',
      'Only function in photosynthesis, with no defensive role'
    ],
    correctIndex: 1,
    explanation: 'Secondary metabolites such as nicotine, caffeine, and quinine, though also of interest to humans, primarily evolved in plants as chemical defences to deter herbivores from grazing.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-69',
    type: 'mcq',
    question: 'An interspecific interaction in which a parasite depends on its host for food and shelter, typically causing harm to the host, is called:',
    options: [
      'Mutualism',
      'Parasitism',
      'Commensalism',
      'Amensalism'
    ],
    correctIndex: 1,
    explanation: 'Parasitism describes an interaction in which a parasite depends on and typically harms its host organism, in the process obtaining food and/or shelter.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-70',
    type: 'mcq',
    question: 'Parasites that live on the external surface of their host\'s body, such as lice on humans or ticks on dogs, are classified as:',
    options: [
      'Ectoparasites',
      'Endoparasites',
      'Brood parasites',
      'Hyperparasites'
    ],
    correctIndex: 0,
    explanation: 'Ectoparasites, such as lice and ticks, live on the external body surface of their host.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-71',
    type: 'mcq',
    question: 'Parasites that live within the internal body tissues or organs of their host, such as liver flukes or tapeworms, are classified as:',
    options: [
      'Ectoparasites',
      'Brood parasites',
      'Endoparasites',
      'Commensal organisms'
    ],
    correctIndex: 2,
    explanation: 'Endoparasites, such as liver flukes and tapeworms, live within the internal body tissues or organs of their host.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-72',
    type: 'mcq',
    question: 'Many parasites have evolved special adaptations to suit their parasitic lifestyle, including loss of unnecessary sense organs, presence of adhesive organs or suckers, and:',
    options: [
      'Extremely low reproductive capacity, near zero',
      'Complete loss of the ability to reproduce entirely',
      'Development of highly complex, independent sensory systems',
      'Very high reproductive capacity'
    ],
    correctIndex: 3,
    explanation: 'Parasites often show adaptations such as reduced sense organs, adhesive structures (suckers/hooks) for attachment, and notably high reproductive capacity to ensure transmission to new hosts.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-73',
    type: 'mcq',
    question: 'The human liver fluke exemplifies the complex life cycle typical of many parasites, requiring two intermediate hosts, specifically a snail and a:',
    options: [
      'Mosquito',
      'Bird',
      'Fish',
      'Rat'
    ],
    correctIndex: 2,
    explanation: 'The human liver fluke has a complex life cycle requiring two intermediate hosts - a snail and a fish - before it can complete its development and infect a human host.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-74',
    type: 'mcq',
    question: 'Brood parasitism, a specialised form of parasitism, is well illustrated by the cuckoo, which lays its eggs in the nest of a host bird (such as a crow), with the cuckoo\'s eggs often closely resembling the host\'s own eggs in:',
    options: [
      'Number, being produced in identical quantities to the host\'s clutch',
      'Nest location, being laid in an entirely separate nest from the host',
      'Shape only, while being completely different in colour, making detection trivial for the host',
      'Size and colour, reducing the chances of detection and rejection by the host'
    ],
    correctIndex: 3,
    explanation: 'In cuckoo brood parasitism, the parasitic eggs often closely resemble the host\'s own eggs in size and colour, reducing the likelihood that the host bird will detect and reject the foreign eggs.',
    difficulty: 'hard'
  },
  {
    id: 'organisms-and-populations-75',
    type: 'mcq',
    question: 'An interspecific interaction that benefits one species while having no measurable effect on the other is called:',
    options: [
      'Commensalism',
      'Mutualism',
      'Amensalism',
      'Competition'
    ],
    correctIndex: 0,
    explanation: 'Commensalism describes an interaction in which one species benefits while the other species experiences no significant effect.',
    difficulty: 'easy'
  },
  {
    id: 'organisms-and-populations-76',
    type: 'mcq',
    question: 'The relationship between an orchid growing as an epiphyte on a mango tree is a classic example of:',
    options: [
      'Mutualism',
      'Commensalism',
      'Parasitism',
      'Amensalism'
    ],
    correctIndex: 1,
    explanation: 'An epiphytic orchid growing on a mango tree benefits from the physical support provided by the tree, while the tree itself is generally unaffected, exemplifying commensalism.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-77',
    type: 'mcq',
    question: 'The relationship between a clownfish and a sea anemone, in which the anemone\'s stinging tentacles provide the clownfish protection from predators, is traditionally cited as a classic example of:',
    options: [
      'Commensalism (though some now consider it closer to mutualism)',
      'Pure parasitism, harmful to the anemone',
      'Pure competition, harmful to both species',
      'Pure amensalism, harmful to the clownfish'
    ],
    correctIndex: 0,
    explanation: 'The clownfish-sea anemone relationship is traditionally described as commensalism (the clownfish benefits from protection with little apparent cost to the anemone), though some researchers now regard it as closer to a mutualistic relationship.',
    difficulty: 'medium'
  },
  {
    id: 'organisms-and-populations-78',
    type: 'mcq',
    question: 'An interspecific interaction in which one species is harmed while the other species remains completely unaffected is called:',
    options: [
      'Commensalism',
      'Amensalism',
      'Mutualism',
      'Predation'
    ],
    correctIndex: 1,
    explanation: 'Amensalism describes an interaction in which one species suffers harm while the other species involved experiences no significant effect at all.',
    difficulty: 'medium'
  },
];

export default questions;