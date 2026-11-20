import { ToolItem, ToolRichGuide } from '@/lib/types';

export const batch3Tools: ToolItem[] = [
  {
    id: 'tool-maps',
    slug: 'maps',
    category: 'daily-life',
    name: {
      ar: 'خريطة الطالب: الجامعات والمعاهد والإقامات والمسارات في الجزائر',
      fr: 'Carte de l\'Étudiant : Universités, Écoles, Cités U & Trajets',
    },
    description: {
      ar: 'ابحث عن الجامعات والمدارس العليا والمعاهد والإقامات الجامعية في ولايات الجزائر، واستكشف المسافات التقديرية والمسارات القريبة ورموز الولايات التوجيهية بسهولة.',
      fr: 'Localisez les universités, grandes écoles, instituts et résidences universitaires à travers les wilayas d\'Algérie, estimez les distances inter-wilayas et préparez vos trajets.',
    },
    iconName: 'MapPin',
    faqs: [
      {
        question: {
          ar: 'ما المؤسسات التي تساعدني خريطة الطالب على استكشافها؟',
          fr: 'Quels établissements puis-je repérer sur la carte étudiante ?',
        },
        answer: {
          ar: 'تغطي الأداة الأقطاب الجامعية الكبرى والمدارس الوطنية العليا والمعاهد ومرافق الإيواء والإقامات الجامعية مع مؤشرات المسافات والربط بين الولايات.',
          fr: 'L\'outil regroupe les grands pôles universitaires, écoles nationales supérieures, instituts, résidences et repères de distance entre wilayas algériennes.',
        },
      },
      {
        question: {
          ar: 'هل تعمل بيانات المسافات والرموز محليا دون استهلاك كبير للإنترنت؟',
          fr: 'Les repères de distances et pôles sont-ils accessibles rapidement hors-ligne ?',
        },
        answer: {
          ar: 'نعم، تتوفر قاعدة المرجع الجغرافي للولايات والأقطاب الجامعية محليا في المتصفح لتسهيل التخطيط قبل السفر أو اختيار التخصص والولاية في التسجيلات الجامعية.',
          fr: 'Oui, l\'index des pôles et distances inter-wilayas s\'exécute localement dans le navigateur afin de préparer efficacement vos déplacements ou vœux d\'orientation.',
        },
      },
    ],
  },
  {
    id: 'tool-meal-planner',
    slug: 'meal-planner',
    category: 'daily-life',
    name: {
      ar: 'مخطط الوجبات الأسبوعي وقائمة المشتريات والميزانية',
      fr: 'Planificateur de Repas 7 Jours, Liste de Courses & Budget',
    },
    description: {
      ar: 'خطط وجبات سبعة أيام للأسرة، واضبط المقادير تلقائيا حسب عدد الأفراد، وأنشئ قائمة مشتريات موحدة مع تقدير ميزانية الطعام بالأسعار التي تدخلها وحفظ الخطط محليا.',
      fr: 'Organisez vos menus sur 7 jours, adaptez automatiquement les quantités au nombre de convives, générez une liste de courses unique et estimez le budget alimentaire en local.',
    },
    iconName: 'Utensils',
    faqs: [
      {
        question: {
          ar: 'هل تجلب قائمة المشتريات أسعار المواد الغذائية مباشرة من المتاجر؟',
          fr: 'Les prix affichés dans la liste de courses proviennent-ils de magasins en direct ?',
        },
        answer: {
          ar: 'لا، الأسعار لا تجلب من المتاجر تلقائيا؛ بل تدخل سعر الوحدة بنفسك وفق السوق أو المتجر الذي تتعامل معه لتقدير التكلفة الإجمالية بواقعية.',
          fr: 'Non, aucun tarif commercial n\'est récupéré automatiquement : vous saisissez vos propres prix unitaires en dinars selon votre marché local.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني حفظ أكثر من خطة أسبوعية والاحتفاظ بنسخة احتياطية؟',
          fr: 'Puis-je enregistrer plusieurs plannings hebdomadaires et les exporter ?',
        },
        answer: {
          ar: 'نعم، تحفظ الخطط محليا على جهازك ومتصفحك فقط لإعادتها أو تعديلها لاحقا، كما تتيح الأداة تصدير ملف JSON للاحتفاظ بنسخة احتياطية.',
          fr: 'Oui, vos plans sont conservés localement sur votre appareil et peuvent être sauvegardés à tout moment via l\'export au format JSON.',
        },
      },
      {
        question: {
          ar: 'هل يلزم تعبئة كافة فترات الوجبات في الأيام السبعة؟',
          fr: 'Est-il obligatoire de remplir tous les créneaux de repas de la semaine ?',
        },
        answer: {
          ar: 'لا، يمكنك ترك أي فترة فارغة أو تكرار نفس الوجبة في عدة أيام، وتضرب المقادير المرجعية للوصفات تلقائيا في عدد أفراد الأسرة مع إمكانية التعديل لاحقا.',
          fr: 'Non, vous êtes libre de laisser certains créneaux vides ou de répéter un plat ; les proportions de base s\'ajustent automatiquement selon l\'effectif du foyer.',
        },
      },
    ],
  },
  {
    id: 'tool-anxiety',
    slug: 'anxiety-screening',
    category: 'health',
    name: {
      ar: 'استبيان القلق التوعوي (مؤشر GAD-7 الإرشادي)',
      fr: 'Questionnaire de Sensibilisation à l\'Anxiété (GAD-7)',
    },
    description: {
      ar: 'استبيان توعوي باللغة العربية من سبعة أسئلة حول مشاعر القلق والتوتر خلال الأسبوعين الماضيين، يقدم مؤشرا إرشاديا غير تشخيصي يساعد على الوعي وطلب الدعم المختص عند الحاجة.',
      fr: 'Auto-questionnaire éducatif en 7 points sur la fréquence des signes anxieux au cours des 14 derniers jours, offrant un repère non diagnostique avant un avis médical.',
    },
    iconName: 'Brain',
    faqs: [
      {
        question: {
          ar: 'ما الذي يتناوله استبيان القلق التوعوي وكيف أقرأ نتيجته؟',
          fr: 'Que mesure ce questionnaire et comment interpréter le résultat ?',
        },
        answer: {
          ar: 'يتناول سبعة أسئلة حول مشاعر القلق والتوتر خلال الأسبوعين الماضيين ليعطي مؤشرا توعويا على أثرها في الحياة اليومية، وليس حكما أو تقييما نهائيا.',
          fr: 'Il évalue la récurrence de sept manifestations d\'anxiété sur les deux dernières semaines afin de refléter leur impact quotidien à titre purement indicatif.',
        },
      },
      {
        question: {
          ar: 'هل يعتبر استبيان القلق تشخيصا طبيا أو نفسيا؟',
          fr: 'Ce test constitue-t-il un diagnostic médical ou psychologique ?',
        },
        answer: {
          ar: 'لا؛ إنه أداة فحص ذاتي تثقيفية وتوعوية فقط، والتشخيص الدقيق يتطلب حوارا وتقييما سريريا لدى طبيب أو مختص في الصحة النفسية.',
          fr: 'Non ; il s\'agit d\'un outil d\'auto-observation éducatif. Seul un médecin ou professionnel de santé mentale peut poser un diagnostic clinique.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا أظهرت النتيجة قلقا مستمرا يؤثر في نومي وعلاقاتي؟',
          fr: 'Que faire si l\'anxiété persiste et perturbe le sommeil ou le travail ?',
        },
        answer: {
          ar: 'دون ما تلاحظه من أعراض وتحدث مع شخص موثوق أو طبيب أو مختص صحة نفسية، واطلب دعما مهنيا متى أثر التوتر في نومك أو عملك أو علاقاتك.',
          fr: 'Notez vos observations et consultez un médecin, psychologue ou centre de santé pour un accompagnement adapté dès que la vie quotidienne est affectée.',
        },
      },
      {
        question: {
          ar: 'متى يجب طلب الطوارئ فورا بدل الاعتماد على الاستبيان؟',
          fr: 'Dans quelle situation faut-il contacter les urgences sans attendre ?',
        },
        answer: {
          ar: 'عند وجود أي خطر مباشر على السلامة أو ظهور أفكار لإيذاء النفس، اطلب خدمات الطوارئ الطبية فورا وتواصل مع خدمات الدعم القريبة ولا تعتمد على الاستبيان.',
          fr: 'En cas de détresse aiguë, de danger immédiat ou d\'idées d\'automutilation, contactez sans délai les secours d\'urgence ou un service médical de garde.',
        },
      },
    ],
  },
  {
    id: 'tool-asthma',
    slug: 'asthma-control',
    category: 'health',
    name: {
      ar: 'اختبار التوعية لمستوى التحكم بالربو',
      fr: 'Test Éducatif d\'Évaluation du Contrôle de l\'Asthme',
    },
    description: {
      ar: 'اختبار توعوي من خمسة أسئلة لقياس تكرار أعراض الربو وتأثيرها خلال الأسابيع الأربعة الماضية، مع نتيجة إرشادية لا تغني عن استشارة الطبيب أو تعديل العلاج.',
      fr: 'Auto-évaluation éducative en 5 questions portant sur la fréquence des symptômes respiratoires durant les 4 dernières semaines, sans valeur diagnostique ni modification thérapeutique.',
    },
    iconName: 'Wind',
    faqs: [
      {
        question: {
          ar: 'عن ماذا يسأل اختبار التحكم بالربو؟',
          fr: 'Sur quelle période porte l\'évaluation du contrôle de l\'asthme ?',
        },
        answer: {
          ar: 'يسأل عبر خمسة بنود عن أعراض الربو وتأثيرها على النشاط والنوم خلال الأسابيع الأربعة الماضية لتكوين مؤشر توعوي أولي لمستوى التحكم المبلغ عنه.',
          fr: 'Les cinq questions couvrent les symptômes diurnes, nocturnes et l\'impact sur vos activités au cours des quatre dernières semaines.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تغيير جرعة البخاخ أو الدواء اعتمادا على نتيجة هذا الاختبار؟',
          fr: 'Puis-je adapter mon traitement ou mon inhalateur à partir du score ?',
        },
        answer: {
          ar: 'لا إطلاقا؛ فالنتيجة لا تشخص الربو ولا تعدل الدواء، ويجب مناقشة أي تغير في الأعراض أو زيادة الحاجة لبخاخ الإسعاف مع طبيبك المعالج.',
          fr: 'Jamais : le score ne remplace pas une consultation et ne doit en aucun cas modifier votre traitement ; parlez à votre médecin en cas d\'usage accru du bronchodilatateur de secours.',
        },
      },
      {
        question: {
          ar: 'ما الأعراض الخطيرة التي تستدعي التوجه للطوارئ فورا؟',
          fr: 'Quels signes respiratoires imposent un recours immédiat aux urgences ?',
        },
        answer: {
          ar: 'صعوبة التنفس الشديدة، عدم القدرة على إكمال الكلام، أو ازرقاق الشفاه والأظافر تستدعي طلب الطوارئ فورا بدل انتظار نتيجة أي أداة رقمية.',
          fr: 'Un essoufflement sévère, l\'incapacité de parler normalement ou une coloration bleutée des lèvres exigent une prise en charge médicale d\'urgence immédiate.',
        },
      },
    ],
  },
  {
    id: 'tool-calorie',
    slug: 'calorie-calculator',
    category: 'health',
    isPopular: true,
    name: {
      ar: 'حاسبة التغذية والوجبات الذكية (السعرات والماكروز)',
      fr: 'Calculateur de Calories Quotidiennes, BMR/TDEE & Macronutriments',
    },
    description: {
      ar: 'احسب احتياجك اليومي التقديري من السعرات الحرارية والبروتين والكربوهيدرات والدهون وفق معادلة Mifflin-St Jeor للبالغين (18 سنة فأكثر) مع توزيع مرن على أربع وجبات يومية.',
      fr: 'Estimez vos besoins caloriques journaliers (BMR et TDEE selon Mifflin-St Jeor pour adultes 18+) et répartissez protéines, glucides et lipides sur vos repas quotidiens.',
    },
    iconName: 'Activity',
    faqs: [
      {
        question: {
          ar: 'هل نتائج حاسبة السعرات والماكروز دقيقة بنسبة 100% ومناسبة للجميع؟',
          fr: 'Les résultats BMR et TDEE sont-ils exacts à 100 % pour tous les profils ?',
        },
        answer: {
          ar: 'لا، معادلة Mifflin-St Jeor تقديرية للبالغين (18 سنة فما فوق) وقد تختلف الحاجة الفعلية حسب الكتلة العضلية والحالة الصحية؛ ولا تستخدم الأداة للأطفال أو أثناء الحمل.',
          fr: 'Non, il s\'agit d\'une estimation destinée aux adultes de 18 ans et plus ; les besoins réels varient selon la morphologie et l\'état de santé. Ne pas utiliser chez l\'enfant ou durant la grossesse.',
        },
      },
      {
        question: {
          ar: 'هل توقيت الوجبات الأربع المقترح وتوزيع الأطعمة إلزامي؟',
          fr: 'La répartition en quatre repas et les horaires suggérés sont-ils obligatoires ?',
        },
        answer: {
          ar: 'لا؛ الأوقات والأطعمة المعروضة أمثلة مرنة وليست وصفة علاجية إلزامية، ويمكنك تغيير توقيت الوجبات ومكوناتها مع الحفاظ على التوازن اليومي ومجموع النسب 100%.',
          fr: 'Non, les créneaux et suggestions servent d\'exemples modulables : adaptez librement vos repas tant que l\'équilibre global des macronutriments (total 100 %) reste cohérent.',
        },
      },
      {
        question: {
          ar: 'هل يحدد مؤشر كتلة الجسم BMI نسبة الدهون في الجسم؟',
          fr: 'L\'indice de masse corporelle (IMC) mesure-t-il le taux de masse grasse ?',
        },
        answer: {
          ar: 'لا، مؤشر BMI يعتمد على الوزن والطول فقط ولا يفرق بين العضلات والدهون ولا يمثل تشخيصا فرديا؛ لذلك يستحسن استشارة مختص تغذية عند الأهداف العلاجية.',
          fr: 'Non, l\'IMC ne reflète que le rapport poids/taille sans distinguer masse musculaire et masse grasse ; consultez un professionnel pour une évaluation corporelle complète.',
        },
      },
    ],
  },
  {
    id: 'tool-child-bmi',
    slug: 'child-bmi-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة مؤشر كتلة الجسم للأطفال والمراهقين (2 إلى 19 سنة)',
      fr: 'Calculateur IMC Enfant & Adolescent (2 à 19 ans - Percentiles CDC)',
    },
    description: {
      ar: 'احسب مؤشر كتلة الجسم BMI للأطفال والمراهقين من عمر سنتين إلى 19 سنة بالوزن والطول والعمر بالشهور والجنس، مع تقدير المئين وتصنيف فئات النمو المرجعية من CDC.',
      fr: 'Calculez l\'IMC pédiatrique de 2 à 19 ans avec estimation du percentile selon l\'âge en mois et le sexe d\'après les courbes et catégories de référence du CDC.',
    },
    iconName: 'Baby',
    references: [
      {
        label: { ar: 'حاسبة CDC للأطفال والمراهقين', fr: 'CDC - Child & Teen BMI Calculator' },
        url: 'https://www.cdc.gov/bmi/child-teen-calculator/index.html',
      },
      {
        label: { ar: 'فئات BMI للأطفال - CDC', fr: 'CDC - BMI Categories for Children & Teens' },
        url: 'https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html',
      },
      {
        label: { ar: 'ملفات بيانات النمو المرجعية - CDC', fr: 'CDC - Growth Charts Data Files' },
        url: 'https://www.cdc.gov/growthcharts/cdc-data-files.htm',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يفسر مؤشر كتلة الجسم للأطفال بنفس عتبات البالغين؟',
          fr: 'L\'IMC des enfants s\'interprète-t-il avec les mêmes seuils que chez l\'adulte ?',
        },
        answer: {
          ar: 'لا؛ لأن جسم الطفل يتغير باستمرار مع النمو، لذلك يفسر BMI للأطفال والمراهقين بمقارنة النتيجة بمئينات أطفال من العمر (بالشهور) والجنس نفسيهما.',
          fr: 'Non : la composition corporelle évoluant avec la croissance, l\'IMC pédiatrique est évalué en percentiles par rapport aux jeunes du même âge et du même sexe.',
        },
      },
      {
        question: {
          ar: 'ما الفئة العمرية التي تغطيها الحاسبة وما المرجع المستخدم؟',
          fr: 'Quelle tranche d\'âge est couverte et quel référentiel est employé ?',
        },
        answer: {
          ar: 'تغطي الحاسبة الأطفال والمراهقين من عمر سنتين (24 شهرا) إلى 19 سنة اعتمادا على جداول BMI-for-age المرجعية الصادرة عن مراكز السيطرة على الأمراض والوقاية منها CDC.',
          fr: 'L\'outil couvre les enfants et adolescents de 2 à 19 ans sur la base des tables de référence BMI-for-age publiées par le CDC.',
        },
      },
      {
        question: {
          ar: 'هل تكفي نتيجة واحدة للحكم على نمو الطفل الصحي؟',
          fr: 'Un calcul isolé suffit-il à juger la croissance d\'un enfant ?',
        },
        answer: {
          ar: 'لا؛ هذه أداة فحص أولية فقط، ويعد تتبع منحنى النمو عبر قياسات متكررة لدى طبيب الأطفال أهم من نتيجة منفردة، خصوصا عند وجود تغير سريع أو قلق لدى الأسرة.',
          fr: 'Non : il s\'agit d\'un repère préliminaire. Le suivi longitudinal de la courbe de croissance par le pédiatre reste essentiel, surtout en cas de variation rapide.',
        },
      },
    ],
  },
  {
    id: 'tool-depression',
    slug: 'depression-screening',
    category: 'health',
    name: {
      ar: 'استبيان الوعي بالمزاج والاكتئاب (مؤشر PHQ-9 التوعوي)',
      fr: 'Questionnaire Éducatif sur l\'Humeur & Santé Mentale (PHQ-9)',
    },
    description: {
      ar: 'استبيان توعوي من تسعة أسئلة حول المزاج ومستوى الطاقة خلال الأسبوعين الماضيين، يقدم نتيجة إرشادية غير تشخيصية مع التوجيه إلى طلب المساعدة الطبية المختصة أو الطوارئ عند الحاجة.',
      fr: 'Auto-questionnaire éducatif en 9 items sur l\'humeur et les symptômes observés durant les 14 derniers jours, à but purement informatif et accompagné de rappels d\'orientation médicale.',
    },
    iconName: 'Smile',
    faqs: [
      {
        question: {
          ar: 'هل يثبت استبيان المزاج والاكتئاب وجود مرض أو يحدد علاجا؟',
          fr: 'Ce questionnaire permet-il de diagnostiquer une dépression ou choisir un traitement ?',
        },
        answer: {
          ar: 'لا؛ إنه فحص توعوي يشجع على ملاحظة تغيرات المزاج خلال الأسبوعين الماضيين، ولا يثبت تشخيصا ولا يحدد دواء، ويجب مناقشة أي أعراض مقلقة مع طبيب مختص.',
          fr: 'Non ; cet outil non diagnostique favorise simplement la prise de conscience des variations d\'humeur et doit être interprété avec un professionnel de santé.',
        },
      },
      {
        question: {
          ar: 'هل يجوز تعديل أو إيقاف دواء موصوف بناء على درجة الاستبيان؟',
          fr: 'Puis-je arrêter ou modifier un traitement prescrit selon le score obtenu ?',
        },
        answer: {
          ar: 'لا أبدا؛ لا توقف أي دواء موصوف ولا تبدأ علاجا ذاتيا اعتمادا على نتيجة رقمية، بل تواصل مع طبيبك أو مختص الصحة النفسية وشارك شخصا موثوقا بما تمر به.',
          fr: 'Jamais : n\'interrompez aucun traitement prescrit et n\'entreprenez aucune automédication ; consultez toujours votre médecin traitant.',
        },
      },
      {
        question: {
          ar: 'ما التصرف الواجب عند ظهور أفكار إيذاء النفس؟',
          fr: 'Quelle conduite tenir en cas d\'idées suicidaires ou d\'automutilation ?',
        },
        answer: {
          ar: 'اطلب المساعدة الطبية الطارئة فورا، وتواصل مع خدمات الاستعجالات أو خط الدعم المحلي، وابق قرب شخص موثوق دون انتظار نتيجة أي استبيان.',
          fr: 'Appelez immédiatement les services d\'urgence ou un centre de soins et restez accompagné d\'un proche de confiance sans attendre le résultat du test.',
        },
      },
    ],
  },
  {
    id: 'tool-diabetes',
    slug: 'diabetes-awareness',
    category: 'health',
    name: {
      ar: 'قائمة التوعية والمتابعة اليومية لمرضى السكري (6 بنود)',
      fr: 'Checklist Quotidienne de Prévention & Suivi du Diabète',
    },
    description: {
      ar: 'قائمة تفاعلية من 6 بنود لمتابعة العادات اليومية المرتبطة بالتوعية بالسكري ونمط الحياة الصحي مع تحديث نسبة الإنجاز تلقائيا، دون تقديم تشخيص أو استبدال المتابعة الطبية.',
      fr: 'Liste interactive en 6 points pour suivre vos habitudes quotidiennes liées à l\'équilibre glycémique (repas, activité, suivi médical), à titre organisationnel sans valeur diagnostique.',
    },
    iconName: 'CheckSquare',
    faqs: [
      {
        question: {
          ar: 'هل تقيس قائمة التوعية اليومية مستوى السكر في الدم؟',
          fr: 'Cette liste mesure-t-elle la glycémie ou détecte-t-elle un diabète ?',
        },
        answer: {
          ar: 'لا؛ هي قائمة تنظيمية للتأشير على العادات الصحية والمتابعة اليومية (من 0 إلى 6 بنود)، ولا تقيس السكر ولا تثبت الإصابة بالسكري أو ما قبل السكري.',
          fr: 'Non ; il s\'agit d\'une simple grille organisationnelle de 6 habitudes préventives qui ne mesure pas la glycémie et ne pose aucun diagnostic.',
        },
      },
      {
        question: {
          ar: 'هل يجوز تعديل جرعة الأنسولين أو الأقراص اعتمادا على القائمة؟',
          fr: 'Peut-on ajuster ses doses médicamenteuses grâce à cette checklist ?',
        },
        answer: {
          ar: 'لا؛ لا تغير الجرعات ولا توقف الدواء الموصوف أبدا اعتمادا على القائمة، والتزم بخطة طبيبك المعالج وناقشه في قراءات السكر أو خطط السفر وتغيير النشاط.',
          fr: 'Jamais : suivez strictement la prescription de votre médecin traitant et consultez-le avant tout changement de posologie, de régime ou de programme de voyage.',
        },
      },
      {
        question: {
          ar: 'ما الحالات المستعجلة التي تستلزم رعاية طبية فورية لمرضى السكري؟',
          fr: 'Quels symptômes imposent une prise en charge médicale d\'urgence ?',
        },
        answer: {
          ar: 'يجب طلب الإسعاف والرعاية الطبية العاجلة عند حدوث تشوش في الوعي، إغماء، قيء مستمر، تنفس غير طبيعي، أو تدهور سريع في الحالة العامة.',
          fr: 'Confusion, malaise avec perte de connaissance, vomissements persistants, respiration anormale ou aggravation brutale exigent une consultation d\'urgence immédiate.',
        },
      },
    ],
  },
];

export const batch3ToolGuides: Record<string, Partial<ToolRichGuide>> = {
  'maps': {
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة الجامعيون والمقبلون على البكالوريا والدارسون في المعاهد بالجزائر',
        fr: 'Étudiants, futurs bacheliers et stagiaires des instituts en Algérie',
      },
      processingTime: {
        ar: 'استكشاف فوري للأقطاب الجامعية والمسافات والرموز البريدية',
        fr: 'Exploration instantanée des campus, distances et repères wilayas',
      },
      fees: {
        ar: 'دليل تفاعلي مجاني يعمل داخل المتصفح',
        fr: 'Outil gratuit accessible sans inscription dans le navigateur',
      },
      channel: {
        ar: 'دليل جغرافي للأقطاب الجامعية، المدارس العليا، والإقامات',
        fr: 'Répertoire géographique des universités, écoles, résidences et trajets',
      },
      keyRequirement: {
        ar: 'اختيار ولاية الانطلاق أو البحث عن القطب الجامعي والمعهد',
        fr: 'Sélectionner la wilaya ou le pôle universitaire recherché',
      },
    },
    explanation: {
      ar: [
        'توفر أداة خريطة الطالب دليلا تفاعليا ميسرا لاستكشاف توزيع الجامعات، المدارس الوطنية العليا، المعاهد، والإقامات الجامعية عبر مختلف ولايات الجزائر.',
        'تساعد هذه الواجهة الطلبة الجدد وأولياءهم على تصور البعد الجغرافي بين ولاية الإقامة والأقطاب الجامعية قبل ترتيب بطاقة الرغبات أو التحضير للتحويلات والمنح والنقل الجامعي.',
        'كما تعرض المسافات التقديرية ومدة السفر التقريبية بين المحاور الحضرية الكبرى والرموز التوجيهية للمرافق الأكاديمية الحيوية.',
        'يمكن ربط نتائج التقدير الجغرافي مباشرة بحاسبة ميزانية الطالب وحاسبة البنزين أو دليل قطارات SNTF لاختيار وسيلة التنقل الأنسب بين الولايات.'
      ],
      fr: [
        'La carte de l\'étudiant offre un repère pratique et interactif pour visualiser les universités, écoles nationales supérieures, instituts et résidences universitaires à travers l\'Algérie.',
        'Elle aide les nouveaux bacheliers et leurs familles à anticiper les distances entre leur wilaya d\'origine et les grands pôles académiques avant de formuler leurs vœux d\'orientation.',
        'Vous y retrouvez des repères de trajets, codes postaux et distances estimatives entre les principales villes universitaires pour mieux préparer la rentrée.',
        'Croisez ces données avec le calculateur de budget étudiant ou les horaires ferroviaires SNTF pour choisir la solution de mobilité la plus économique.'
      ],
    },
    formulaTitle: {
      ar: 'مؤشر المسافات وتخطيط المسارات بين الولايات',
      fr: 'Estimation des trajets et maillage des pôles universitaires',
    },
    formulaText: {
      ar: 'تعتمد التقديرات على المسافات الطرقية الرئيسية بين مراكز الولايات ومواقع الأقطاب الجامعية الكبرى، مع مراعاة مسارات النقل عبر السكك الحديدية والطرق السريعة شرق-غرب وشمال-جنوب.',
      fr: 'Les repères reposent sur les distances routières et axes ferroviaires principaux reliant les chefs-lieux de wilayas aux grands campus et cités universitaires.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تخطيط انتقال طالب من سطيف إلى الجزائر العاصمة',
        fr: 'Exemple : repérage d\'un étudiant entre Sétif et Alger',
      },
      scenario: {
        ar: 'طالب مقبول في مدرسة عليا بالعاصمة يريد معرفة المسافة التقريبية ووسائل الربط وتكلفة التنقل الدورية.',
        fr: 'Un étudiant admis dans une grande école algéroise compare la distance, la durée de trajet et les options de transport.',
      },
      result: {
        ar: 'تظهر الأداة مسافة تناهز 300 كم (حوالي 3.5 إلى 4 ساعات بالسيارة أو القطار)، مما يسهل دمج مصروف النقل في ميزانية الطالب الشهرية.',
        fr: 'Le repère indique environ 300 km (3 h 30 à 4 h de trajet), facilitant l\'intégration des allers-retours dans le budget étudiant.',
      },
    },
    tips: {
      ar: [
        'قارن القرب الجغرافي مع خدمات الإيواء والإطعام المتاحة عبر البوابة الرسمية للخدمات الجامعية ONOU.',
        'استعمل أداة حاسبة ميزانية الطالب بعد تحديد الولاية لتقدير تكلفة السكن والتنقل الشهري.',
        'راجع جدول رحلات SNTF إذا كانت جامعتك تقع على خط السكة الحديدية الرئيسي لتوفير مصاريف السفر.',
        'تأكد دائما من العنوان التفصيلي للكلية أو القطب الجديد (القطب 1، القطب 2، إلخ) عبر الموقع الرسمي للجامعة.',
      ],
      fr: [
        'Vérifiez toujours l\'implantation exacte de votre faculté ou pôle annexe sur le site officiel de l\'université.',
        'Complétez votre repérage avec le calculateur de budget étudiant pour chiffrer l\'hébergement et le transport.',
        'Consultez le guide ferroviaire SNTF lorsque votre ville d\'études est desservie par train.',
        'Anticipez vos démarches d\'hébergement et de transport dès l\'ouverture des plateformes ONOU/Progres.',
      ],
    },
    extraFaqs: [],
  },

  'meal-planner': {
    quickSummary: {
      targetAudience: {
        ar: 'الأسر والطلبة والمشرفون على الميزانية الغذائية المنزلية في الجزائر',
        fr: 'Ménages, étudiants et familles souhaitant maîtriser leur budget alimentaire',
      },
      processingTime: {
        ar: 'توليد تلقائي لقائمة المشتريات وحساب التكلفة حسب عدد الأفراد',
        fr: 'Génération immédiate de la liste de courses adaptée au nombre de personnes',
      },
      fees: {
        ar: 'أداة مجانية مع حفظ محلي وتصدير JSON للخطط الأسبوعية',
        fr: 'Gratuit avec sauvegarde locale de plusieurs plans et export JSON',
      },
      channel: {
        ar: 'تخطيط أسبوعي لـ 7 أيام داخل المتصفح دون إرسال بيانات',
        fr: 'Planificateur 7 jours dans le navigateur sans transfert externe',
      },
      keyRequirement: {
        ar: 'تحديد عدد الأفراد، اختيار الوجبات، وإدخال أسعار الوحدة بالأسعار الفعلية لسوقك',
        fr: 'Effectif du foyer, choix des plats et saisie manuelle des prix unitaires en DZD',
      },
    },
    explanation: {
      ar: [
        'يساعدك مخطط الوجبات وقائمة المشتريات على تنظيم وجبات الأسرة على مدى سبعة أيام متواصلة، مع ميزة الضرب التلقائي لمقادير الوصفات المرجعية حسب عدد أفراد الأسرة وقابلية التعديل في أي وقت.',
        'في إعداد البرنامج الأسبوعي، يمكنك اختيار وجبة لكل فترة أو ترك أي فترة دون تحديد أو تكرار نفس الطبق طوال الأسبوع بحرية تامة، لتتحول المكونات مباشرة إلى قائمة مشتريات موحدة.',
        'تتيح قائمة المشتريات والميزانية إدخال سعر الوحدة لكل مكون بالدينار الجزائري والتأشير على ما تم شراؤه؛ مع التأكيد على أن الأسعار تقديرية مدخلة من طرفك ولا تجلب آليا من المتاجر.',
        'تحفظ خططك الأسبوعية على نفس الجهاز والمتصفح فقط لاسترجاعها أو تعديلها لاحقا، مع زر لتصدير نسخة احتياطية بصيغة JSON لربطها بميزانية الأسرة الشهرية.'
      ],
      fr: [
        'Le planificateur de repas hebdomadaire vous permet d\'organiser les menus de la semaine sur 7 jours tout en ajustant automatiquement les quantités de référence des recettes selon le nombre de personnes au foyer.',
        'Lors de la constitution du planning, chaque créneau est libre : vous pouvez laisser des repas non définis ou répéter un plat à votre convenance, avant de consolider tous les ingrédients en une liste de courses unique.',
        'Dans le tableau de courses, vous cochez les achats effectués et saisissez manuellement vos prix unitaires en dinars algériens : aucune donnée tarifaire externe n\'est imposée, garantissant un budget fidèle à votre marché local.',
        'Vos plannings sont sauvegardés localement sur cet appareil uniquement pour être rechargés plus tard, avec possibilité d\'exporter une archive de sauvegarde JSON.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ مضاعفة المقادير وحساب ميزانية المشتريات',
      fr: 'Calcul proportionnel des ingrédients et du coût total',
    },
    formulaText: {
      ar: 'الكمية المطلوبة = مقدار الوصفة للشخص الواحد × عدد أفراد الأسرة. تكلفة المكون = الكمية المطلوبة × سعر الوحدة المدخل من طرفك بالدينار.',
      fr: 'Quantité requise = Dose de référence par personne × Nombre de convives. Coût du poste = Quantité × Prix unitaire saisi en DZD.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تخطيط أسبوعي لأسرة من 4 أفراد',
        fr: 'Exemple pratique pour un foyer de 4 personnes',
      },
      scenario: {
        ar: 'أسرة تضبط عدد الأفراد على 4 وتختار وجبات الأسبوع وتدخل سعر الكيلوغرام من الخضار واللحوم والبقوليات.',
        fr: 'Une famille règle l\'effectif sur 4, compose ses menus sur 7 jours et renseigne le prix local au kilo de chaque ingrédient.',
      },
      result: {
        ar: 'يجمع المخطط المقادير المتشابهة في صف واحد ضمن قائمة المشتريات مع حساب التكلفة الإجمالية ومنع الشراء العشوائي أو هدر الطعام.',
        fr: 'Les ingrédients communs sont automatiquement additionnés dans une seule ligne de courses avec le total budgétaire exact en DZD.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'هيكل جدول قائمة المشتريات والميزانية الغذائية',
        fr: 'Colonnes du tableau liste de courses et budget',
      },
      headers: [
        { ar: 'تم الشراء', fr: 'Acheté' },
        { ar: 'المكون', fr: 'Ingrédient' },
        { ar: 'الكمية', fr: 'Quantité' },
        { ar: 'سعر الوحدة (دج)', fr: 'Prix unitaire (DZD)' },
        { ar: 'التكلفة (دج)', fr: 'Coût total (DZD)' },
      ],
      rows: [
        [
          { ar: 'مؤشر اختيار', fr: 'Case à cocher' },
          { ar: 'اسم العنصر المجمع من الوصفات', fr: 'Article agrégé des recettes' },
          { ar: 'مضبوطة بعدد الأفراد', fr: 'Ajustée selon l\'effectif' },
          { ar: 'مدخل يدويا حسب متجرك', fr: 'Saisi selon votre marché' },
          { ar: 'الكمية × السعر', fr: 'Quantité × Prix' },
        ],
      ],
    },
    tips: {
      ar: [
        'استعرض قائمة المشتريات داخل البيت قبل التوجه للسوق وحدد المواد المتوفرة مسبقا لتجنب التكرار.',
        'أدخل الأسعار الفعلية لأسواق الجوار لتكوين تقدير حقيقي يربط بفعالية مع أداة ميزانيتي الذكية.',
        'صدّر نسخة JSON لخططك الأسبوعية المفضلة حتى تعيد استيرادها بسهولة في الأسابيع القادمة.',
        'استعن بحاسبة التغذية والوجبات الذكية إذا كنت تضبط وجباتك وفق أهداف محددة للسعرات والبروتين.',
      ],
      fr: [
        'Cochez dès le départ les ingrédients déjà présents dans votre placard pour ne payer que le strict nécessaire.',
        'Utilisez les prix réels relevés dans votre quartier afin de fiabiliser le report dans votre budget mensuel.',
        'Exportez vos semaines types au format JSON pour les réutiliser en un clic les mois suivants.',
        'Croisez vos menus avec le calculateur de calories et macros si vous suivez un objectif nutritionnel précis.',
      ],
    },
    extraFaqs: [],
  },

  'anxiety-screening': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون الراغبون في تقييم أولي لمؤشرات القلق والتوتر خلال آخر أسبوعين',
        fr: 'Adultes souhaitant un repère éducatif sur l\'anxiété des 14 derniers jours',
      },
      processingTime: {
        ar: 'حساب فوري للمؤشر التوعوي بعد الإجابة على 7 أسئلة',
        fr: 'Calcul instantané de l\'indicateur éducatif en 7 questions',
      },
      fees: {
        ar: 'مجاني وبسرية تامة دون حفظ الإجابات',
        fr: 'Gratuit et 100 % confidentiel sans sauvegarde serveur',
      },
      channel: {
        ar: 'استبيان تثقيفي غير تشخيصي مبني على مقياس GAD-7',
        fr: 'Auto-évaluation non diagnostique inspirée de l\'échelle GAD-7',
      },
      keyRequirement: {
        ar: 'التنبه إلى أن النتيجة للتوعية فقط والاتصال بالطوارئ في الحالات الحرجة',
        fr: 'Outil éducatif uniquement — appeler les secours en cas d\'urgence',
      },
    },
    explanation: {
      ar: [
        'يقدم استبيان القلق التوعوي سبعة أسئلة مبسطة باللغة العربية حول مدى تكرار مشاعر التوتر والقلق واضطراب الراحة خلال الأسبوعين الماضيين، مع إخراج مؤشر إرشادي يساعد على الوعي بالحالة النفسية.',
        'لا يمثل هذا الاستبيان فحصا طبيا أو تشخيصا سريريا بأي حال؛ إنما أداة تثقيفية لملاحظة مدى تأثير التوتر على النوم أو العمل أو العلاقات الأسرية وتحضير ملاحظات واضحة للنقاش مع الطبيب.',
        'عند استمرار مشاعر القلق أو تأثيرها الملموس على جودة الحياة اليومية، ينصح بتدوين ما تلاحظه وحجز موعد مع طبيب أو مختص صحة نفسية للحصول على تقييم مهني دقيق وآمن.',
        'تنبيه أمان حاسم: في حال وجود خطر مباشر على السلامة الشخصية أو أفكار لإيذاء النفس، اطلب خدمات الطوارئ فورا وتواصل مع الدعم الصحي المحلي ولا تعتمد على الاستبيان.'
      ],
      fr: [
        'Le questionnaire de sensibilisation à l\'anxiété propose sept questions simples portant sur la fréquence des manifestations anxieuses vécues au cours des deux dernières semaines, afin d\'offrir un premier repère éducatif.',
        'Cet indicateur ne constitue en aucun cas un diagnostic médical ou psychologique : il aide simplement à observer l\'impact du stress sur le sommeil, le travail ou la vie familiale avant d\'en parler à un professionnel.',
        'Si les symptômes persistent ou gênent votre quotidien, notez ce que vous ressentez et consultez un médecin ou spécialiste de santé mentale pour une évaluation clinique complète.',
        'Consigne de sécurité essentielle : en présence de pensées suicidaires ou d\'un danger immédiat pour votre sécurité, appelez aussitôt les services d\'urgence sans attendre le résultat du test.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ حساب النقاط التوعوي وحدود القراءة (0 إلى 21)',
      fr: 'Principe du score indicatif (échelle 0 à 21)',
    },
    formulaText: {
      ar: 'تمنح كل إجابة من الأسئلة السبعة من 0 (إطلاقا) إلى 3 (تقريبا كل يوم)، ويجمع المجموع (0 إلى 21) لإعطاء قراءة توعوية أولية بمستوى القلق المبلغ عنه ذاتيا.',
      fr: 'Chaque item est coté de 0 (jamais) à 3 (presque tous les jours), générant un total compris entre 0 et 21 à titre purement informatif.',
    },
    practicalExample: {
      title: {
        ar: 'مثال قراءة نتيجة الاستبيان التوعوي للتحضير للاستشارة',
        fr: 'Exemple d\'utilisation responsable du score',
      },
      scenario: {
        ar: 'مستخدم يعاني من قلق وضيق نوم متكرر في الأسبوعين الماضيين ويجيب على البنود السبعة بموضوعية.',
        fr: 'Une personne ressentant une nervosité fréquente répond aux 7 questions pour faire le point sur ses deux dernières semaines.',
      },
      result: {
        ar: 'يوفر المجموع مؤشرا إرشاديا يدعو إلى توثيق الأعراض وتخصيص وقت للاستشارة المهنية بدل الاكتفاء بالتشخيص الذاتي.',
        fr: 'Le résultat offre un repère structuré facilitant le dialogue lors d\'un rendez-vous chez le médecin traitant ou psychologue.',
      },
    },
    tips: {
      ar: [
        'اقرأ كل بند بعناية وفق ما شعرت به خلال الأسبوعين الأخيرين فقط.',
        'استخدم النتيجة كبداية حوار هادئ مع طبيب مختص وليس كحكم نهائي أو بديل عن الرعاية الطبية.',
        'لا تبدأ أي أدوية مهدئة دون وصفة طبية معتمدة من طبيب مختص.',
        'في حالات الأزمة الحادة أو أفكار إيذاء النفس، تواصل فورا مع الطوارئ أو مرافق الرعاية الصحية.',
      ],
      fr: [
        'Répondez sincèrement en considérant exclusivement les 14 derniers jours.',
        'Utilisez le score comme support de discussion avec un médecin et non comme verdict médical.',
        'N\'entamez aucun traitement médicamenteux sans prescription médicale adaptée.',
        'Contactez immédiatement les secours en cas d\'urgence vitale ou de crise aiguë.',
      ],
    },
    extraFaqs: [],
  },

  'asthma-control': {
    quickSummary: {
      targetAudience: {
        ar: 'المصابون بالربو الراغبون في متابعة أعراضهم خلال آخر 4 أسابيع قبل زيارة الطبيب',
        fr: 'Personnes asthmatiques souhaitant suivre leurs symptômes sur 4 semaines',
      },
      processingTime: {
        ar: 'تقييم توعوي فوري بعد الإجابة على 5 أسئلة',
        fr: 'Score éducatif instantané après 5 questions',
      },
      fees: {
        ar: 'مجاني بالكامل وسري داخل المتصفح',
        fr: 'Gratuit et 100 % confidentiel côté client',
      },
      channel: {
        ar: 'اختبار تثقيفي لملاحظة التغيرات وفق خطة الرعاية الطبية',
        fr: 'Auto-évaluation préventive non diagnostique',
      },
      keyRequirement: {
        ar: 'عدم تغيير الدواء ذاتيا والتوجه للطوارئ عند ضيق التنفس الشديد',
        fr: 'Ne jamais modifier le traitement seul — urgences si détresse respiratoire',
      },
    },
    explanation: {
      ar: [
        'يتيح اختبار التحكم بالربو تكوين صورة توعوية أولية عبر خمسة أسئلة تركز على تكرار الأعراض النهارية والليلية، تأثير الربو على النشاط اليومي، ومعدل استخدام بخاخ الإسعاف خلال الأسابيع الأربعة الماضية.',
        'يمثل التقييم الناتج مؤشرا إرشاديا مبنيا على إجاباتك فقط ولا يشخص مرض الربو ولا يخول تعديل جرعات الأدوية أو إيقاف العلاج الوقائي.',
        'يساعد تكرار هذا الفحص الذاتي وفق خطة الرعاية الطبية على رصد أي تدهور تدريجي في التحكم بالأعراض ومشاركته بدقة مع الطبيب المعالج أو مختص الأمراض الصدرية.',
        'تنبيه طارئ: في حال ظهور ضيق تنفس شديد أو عجز عن الكلام أو ازرقاق في الشفاه، اطلب الاستعجالات الطبية فورا دون انتظار نتيجة أي اختبار.'
      ],
      fr: [
        'Le test de contrôle de l\'asthme propose cinq questions simples évaluant la fréquence des gênes respiratoires, réveils nocturnes et recours à l\'inhalateur de secours sur les quatre dernières semaines.',
        'L\'indicateur obtenu est strictement informatif : il ne permet ni de diagnostiquer l\'asthme ni d\'ajuster un traitement prescrit.',
        'Suivi régulièrement dans le cadre du plan d\'action convenu avec votre médecin, il aide à repérer précocement une perte de contrôle des symptômes respiratoires.',
        'Alerte d\'urgence : une difficulté respiratoire intense, une impossibilité de parler ou une cyanose des lèvres imposent un appel immédiat aux urgences médicales.'
      ],
    },
    formulaTitle: {
      ar: 'آلية التقييم الرباعي للتحكم بالأعراض (4 أسابيع)',
      fr: 'Principe d\'auto-observation sur 4 semaines (5 items)',
    },
    formulaText: {
      ar: 'تجمع نقاط الأسئلة الخمسة عن الأسابيع الأربعة الأخيرة لتقدير مدى استقرار الحالة المبلغ عنها ومقارنتها مع المتابعة الطبية الدورية.',
      fr: 'Les réponses aux cinq items portant sur les 4 dernières semaines sont cumulées pour dégager un indicateur éducatif du contrôle respiratoire.',
    },
    practicalExample: {
      title: {
        ar: 'مثال متابعة مريض ربو قبل الموعد الدوري عند الطبيب',
        fr: 'Exemple de suivi avant une consultation de pneumologie',
      },
      scenario: {
        ar: 'مريض يلاحظ زيادة استخدام البخاخ المسعف أو استيقاظا ليليا متكررا خلال الشهر الأخير.',
        fr: 'Un patient constate un recours plus fréquent à son inhalateur de crise ou des réveils nocturnes ces dernières semaines.',
      },
      result: {
        ar: 'يسجل نتيجة الاختبار وملاحظات الأسابيع الأربعة ليناقش مع الطبيب مراجعة الخطة العلاجية بأمان.',
        fr: 'Il note le score indicatif afin d\'aborder concrètement un éventuel réajustement de son traitement de fond avec son médecin.',
      },
    },
    tips: {
      ar: [
        'سجل إجابات دقيقة تعبر عن الأسابيع الأربعة الأخيرة كاملة وليس يوما واحدا فقط.',
        'احضر نتائج متابعتك إلى عيادة طبيب الأمراض الصدرية أو المركز الصحي في زيارتك القادمة.',
        'تجنب إيقاف البخاخ الوقائي أو تغيير الجرعات دون استشارة طبية صريحة.',
        'توجه للاستعجالات فورا عند ضيق التنفس الحاد أو صعوبة الكلام أو ازرقاق الشفاه.',
      ],
      fr: [
        'Évaluez honnêtement l\'ensemble des quatre dernières semaines sans sous-estimer les symptômes nocturnes.',
        'Présentez ce relevé lors de votre visite chez le médecin traitant ou le pneumologue.',
        'N\'interrompez jamais votre traitement de fond sans avis médical.',
        'Appelez immédiatement les urgences face à une crise sévère ou un bleuissement des lèvres.',
      ],
    },
    extraFaqs: [],
  },

  'calorie-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون (18 سنة فما فوق) الراغبون في حساب السعرات وتوزيع الماكروز',
        fr: 'Adultes (18 ans et plus) calculant besoins caloriques et macronutriments',
      },
      processingTime: {
        ar: 'تقدير فوري للأيض الأساسي BMR والطاقة اليومية TDEE والوجبات',
        fr: 'Calcul instantané du BMR, TDEE, macros en grammes et 4 repas',
      },
      fees: {
        ar: 'أداة توعوية مجانية (ليست وصفة طبية أو علاجية)',
        fr: 'Simulateur gratuit à titre indicatif (non thérapeutique)',
      },
      channel: {
        ar: 'تطبيق محلي في المتصفح بمعادلة Mifflin-St Jeor',
        fr: 'Calculateur web local basé sur l\'équation Mifflin-St Jeor',
      },
      keyRequirement: {
        ar: 'الوزن، الطول، العمر، الجنس، مستوى النشاط ونسب الماكروز (المجموع 100%)',
        fr: 'Poids, taille, âge, sexe, activité et ratios macros totalisant 100 %',
      },
    },
    explanation: {
      ar: [
        'تحسب أداة التغذية والوجبات الذكية احتياجك اليومي التقديري من السعرات الحرارية والمغذيات الكبرى (البروتين، الكربوهيدرات، والدهون بالجرام) للبالغين من سن 18 سنة فما فوق بناء على القياسات الشخصية ومستوى النشاط والهدف الغذائي.',
        'تعتمد الأداة في خطوتها الأولى على معادلة Mifflin–St Jeor لتقدير معدل الأيض الأساسي (BMR)، ثم تضربه في معامل النشاط البدني لاستخراج إجمالي الطاقة اليومية (TDEE) وتعديله حسب هدف الثبات أو النقص أو الزيادة.',
        'عند ضبط نسب المغذيات الكبرى، تقوم الواجهة بموازنة البقية تلقائيا لضمان مجموع 100%، ثم تحول السعرات إلى جرامات مع توزيع مرن على أربع وجبات يومية بأمثلة قابلة للتعديل.',
        'تنبيه مهم: القيم والحسابات إرشادية للبالغين فقط ولا تستخدم للأطفال أو أثناء الحمل (حيث تتوفر لهاتين الفئتين حاسبات مخصصة في البوابة)، ولا تغني التوصيات عن استشارة طبيب أو أخصائي تغذية عند وجود حالات صحية.'
      ],
      fr: [
        'Le calculateur de nutrition et repas estime les besoins quotidiens en calories et macronutriments (protéines, glucides et lipides en grammes) pour les adultes de 18 ans et plus selon l\'âge, le poids, la taille, l\'activité et l\'objectif visé.',
        'Le moteur applique d\'abord la formule de Mifflin-St Jeor pour obtenir le métabolisme de base (BMR), puis le multiplie par le facteur d\'activité afin d\'estimer la dépense énergétique totale (TDEE).',
        'Les ratios de macronutriments s\'équilibrent automatiquement pour totaliser 100 %, avant de répartir calories et grammes sur quatre repas quotidiens à titre d\'exemples modifiables.',
        'Mise en garde : ces repères sont réservés aux adultes en bonne santé et ne doivent pas être utilisés pour les enfants ni pendant la grossesse (utilisez nos outils pédiatriques ou de grossesse dédiés).'
      ],
    },
    formulaTitle: {
      ar: 'معادلة Mifflin–St Jeor وتحويل السعرات إلى جرامات',
      fr: 'Équation Mifflin-St Jeor et conversion calorique des macros',
    },
    formulaText: {
      ar: 'BMR للذكور = (10 × الوزن كغ) + (6.25 × الطول سم) − (5 × العمر) + 5؛ وللإناث تستبدل +5 بـ −161. ثم TDEE = BMR × معامل النشاط. كل غرام بروتين أو كربوهيدرات ≈ 4 سعرات، وغرام الدهون ≈ 9 سعرات.',
      fr: 'BMR Homme = 10 × poids + 6,25 × taille − 5 × âge + 5 ; Femme : − 161. TDEE = BMR × facteur d\'activité. Protéines/Glucides ≈ 4 kcal/g ; Lipides ≈ 9 kcal/g.',
    },
    practicalExample: {
      title: {
        ar: 'مثال حسابي لشخص بالغ (الوزن 72 كغ، الطول 175 سم، العمر 30 سنة)',
        fr: 'Exemple pour un adulte de 72 kg, 175 cm et 30 ans',
      },
      scenario: {
        ar: 'شخص ذكر يمارس نشاطا متوسطا (معامل 1.55) ويهدف للحفاظ على وزنه مع توزيع متوازن للوجبات الأربع.',
        fr: 'Un homme ayant une activité physique modérée (coefficient 1,55) souhaite maintenir son poids actuel.',
      },
      result: {
        ar: 'يناهز BMR نحو 1,669 سعرة ويبلغ TDEE حوالي 2,587 سعرة يوميا، توزع تلقائيا على البروتين والكارب والدهون بالجرام وعلى الوجبات الأربع.',
        fr: 'Le BMR est estimé à ~1 669 kcal/jour et le TDEE à ~2 587 kcal/jour, convertis aussitôt en grammes de protéines, glucides et lipides.',
      },
    },
    tips: {
      ar: [
        'استعمل حاسبة السعرات أثناء الحمل أو حاسبة BMI للأطفال إذا كان الشخص دون 18 سنة أو في فترة حمل.',
        'تجنب التخفيض القاسي والمفاجئ للسعرات دون إشراف مختص للحفاظ على الكتلة العضلية والطاقة.',
        'تستطيع تعديل مكونات وتوقيت الوجبات الأربع بحرية وفق عادات الأسرة الجزائرية مع احترام الحصص.',
        'استعن بمخطط الوجبات وقائمة المشتريات لتحويل هذه الأهداف الغذائية إلى تسوق أسبوعي منظم.',
      ],
      fr: [
        'Pour les moins de 18 ans ou les femmes enceintes, utilisez plutôt nos calculateurs dédiés.',
        'Évitez les déficits caloriques extrêmes ou non encadrés qui nuisent à la masse musculaire et à la santé.',
        'Adaptez librement les horaires et menus proposés tant que vos totaux journaliers demeurent équilibrés.',
        'Transférez vos besoins hebdomadaires dans le planificateur de repas pour optimiser vos courses.',
      ],
    },
    extraFaqs: [],
  },

  'child-bmi-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'الأولياء لمتابعة أطفالهم ومراهقيهم من عمر سنتين إلى 19 سنة',
        fr: 'Parents suivant la croissance des enfants et adolescents (2 à 19 ans)',
      },
      processingTime: {
        ar: 'حساب فوري للمؤشر والمئين المرجعي والتصنيف العام',
        fr: 'Calcul instantané de l\'IMC, du percentile estimé et de la catégorie CDC',
      },
      fees: {
        ar: 'مجاني مع 3 روابط رسمية لمراكز CDC',
        fr: 'Gratuit avec 3 références officielles du CDC',
      },
      channel: {
        ar: 'أداة فحص أولي مبنية على منحنيات النمو حسب العمر والجنس',
        fr: 'Repère pédiatrique basé sur les courbes BMI-for-age',
      },
      keyRequirement: {
        ar: 'العمر بالشهور (24 إلى 228 شهرا)، الجنس، الوزن (كغ)، والطول (سم)',
        fr: 'Âge en mois (2 à 19 ans), sexe, poids (kg) et taille (cm)',
      },
    },
    explanation: {
      ar: [
        'تحسب هذه الأداة مؤشر كتلة الجسم (BMI) للأطفال والمراهقين من عمر سنتين إلى 19 سنة مع تقدير المئين حسب العمر والجنس استنادا إلى ملفات وبيانات النمو المرجعية لمراكز السيطرة على الأمراض (CDC).',
        'لأن بنية جسم الطفل تتغير باستمرار مع مراحل النمو، لا تطبق حدود البالغين الثابتة على الصغار؛ بل تقارن النتيجة بأطفال من العمر (يفضل إدخاله بالشهور) والجنس نفسيهما.',
        'توزع فئات CDC القراءة العامة على أربعة نطاقات: أقل من المئين الخامس، نطاق الوزن الصحي (من الخامس إلى أقل من 85)، الوزن الزائد (من 85 إلى أقل من 95)، والسمنة (من 95 فأعلى).',
        'تنبيه تربوي وطبي: تمثل هذه الفئات حدود فحص أولية عامة وليست حكما على صحة الطفل أو مظهره، ويبقى تكرار القياس ومتابعة منحنى النمو لدى طبيب الأطفال أهم من قراءة منفردة.'
      ],
      fr: [
        'Ce calculateur évalue l\'indice de masse corporelle (IMC) des enfants et adolescents âgés de 2 à 19 ans tout en estimant le percentile correspondant selon les données de référence de croissance du CDC.',
        'Contrairement aux adultes dont les seuils sont fixes, l\'IMC pédiatrique dépend étroitement de l\'âge exact (idéalement renseigné en mois) et du sexe en raison de l\'évolution morphologique continue.',
        'Les catégories générales du CDC situent l\'enfant selon quatre zones : insuffisance pondérale (< 5e percentile), poids normal (5e à < 85e), surpoids (85e à < 95e) et obésité (>= 95e percentile).',
        'Ces bornes constituent uniquement un repère de dépistage général : seul le suivi régulier de la courbe de croissance avec un pédiatre permet d\'interpréter la trajectoire d\'un enfant.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة BMI والمقارنة بالمئين المرجعي لـ CDC',
      fr: 'Calcul de l\'IMC et lecture des percentiles CDC (2–19 ans)',
    },
    formulaText: {
      ar: 'BMI = الوزن (كغ) ÷ [الطول (بالمتر)]². ثم تقارن القيمة بجدول CDC المعياري لمتوسط النمو حسب الجنس والعمر بالشهور لاستخراج المئين التقريبي.',
      fr: 'IMC = Poids (kg) ÷ [Taille (m)]². La valeur obtenue est située sur les courbes de référence BMI-for-age du CDC selon le sexe et l\'âge en mois.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تقييم لطفل عمره 8 سنوات (96 شهرا)',
        fr: 'Exemple pratique pour un enfant de 8 ans (96 mois)',
      },
      scenario: {
        ar: 'إدخال وزن 26 كغ وطول 128 سم لولد عمره 96 شهرا لمراجعة مئين النمو قبل زيارة طبيب الأطفال.',
        fr: 'Saisie d\'un garçon de 96 mois pesant 26 kg pour une taille de 128 cm.',
      },
      result: {
        ar: 'يبلغ مؤشر BMI قرابة 15.87 كغ/م²، ما يضعه ضمن نطاق الوزن الصحي حسب الفئة العمرية (بين المئين 5 و85)، مع توصية مواصلة القياسات الدورية.',
        fr: 'L\'IMC calculé est d\'environ 15,87 kg/m², situé dans la zone du poids santé pour son âge et son sexe.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'فئات تصنيف مؤشر كتلة الجسم للأطفال والمراهقين حسب CDC',
        fr: 'Catégories de percentiles IMC pédiatrique (Référentiel CDC)',
      },
      headers: [
        { ar: 'نطاق المئين', fr: 'Plage de percentiles' },
        { ar: 'التصنيف العام', fr: 'Catégorie CDC' },
        { ar: 'التوجيه الإرشادي', fr: 'Orientation' },
      ],
      rows: [
        [
          { ar: 'أقل من المئين 5', fr: 'Inférieur au 5e percentile' },
          { ar: 'أقل من الوزن المتوقع', fr: 'Insuffisance pondérale' },
          { ar: 'مراجعة طبيب الأطفال لتقييم التغذية والنمو', fr: 'Consulter le pédiatre pour bilan nutritionnel' },
        ],
        [
          { ar: 'من المئين 5 إلى أقل من 85', fr: 'Du 5e à moins du 85e percentile' },
          { ar: 'نطاق الوزن الصحي', fr: 'Poids normal (santé)' },
          { ar: 'مواصلة التغذية المتوازنة والنشاط البدني', fr: 'Poursuivre l\'équilibre alimentaire et le suivi' },
        ],
        [
          { ar: 'من المئين 85 إلى أقل من 95', fr: 'Du 85e à moins du 95e percentile' },
          { ar: 'وزن زائد', fr: 'Surpoids' },
          { ar: 'تعديل العادات الغذائية والنشاط باستشارة الطبيب', fr: 'Adapter alimentation et activité avec avis médical' },
        ],
        [
          { ar: 'من المئين 95 فأعلى', fr: '95e percentile ou plus' },
          { ar: 'سمنة', fr: 'Obésité' },
          { ar: 'متابعة طبية متخصصة دون حميات قاسية ذاتية', fr: 'Accompagnement pédiatrique spécialisé recommandé' },
        ],
      ],
    },
    tips: {
      ar: [
        'ادخل عمر الطفل بالشهور بدقة قدر الإمكان لأن المئينات تتغير بشكل ملحوظ كل بضعة أشهر.',
        'لا تستخدم أبدا حاسبات البالغين أو أنظمة الحمية الصارمة للأطفال دون توجيه طبيب الأطفال.',
        'تابع أيضا تطعيمات الطفل الدورية عبر أداة متابعة تلقيح الأطفال في البوابة.',
        'قارن نتائج عدة زيارات متباعدة لرؤية مسار النمو الكامل بدلا من التركيز على قراءة واحدة.',
      ],
      fr: [
        'Renseignez l\'âge exact en mois autant que possible pour améliorer la précision du percentile.',
        'N\'appliquez jamais les seuils adultes ni de régime restrictif à un enfant sans suivi médical.',
        'Complétez la surveillance de croissance avec le suivi vaccinal pédiatrique algérien.',
        'Observez l\'évolution régulière de la courbe chez le pédiatre plutôt qu\'un point isolé.',
      ],
    },
    extraFaqs: [],
  },

  'depression-screening': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون الراغبون في مراجعة توعوية لمؤشرات المزاج خلال آخر أسبوعين',
        fr: 'Adultes observant leur humeur sur les 14 derniers jours (sensibilisation)',
      },
      processingTime: {
        ar: 'حساب فوري للمؤشر التوعوي بعد 9 أسئلة',
        fr: 'Indicateur immédiat après 9 questions',
      },
      fees: {
        ar: 'مجاني وسري داخل المتصفح دون تسجيل',
        fr: 'Gratuit et 100 % confidentiel sans stockage externe',
      },
      channel: {
        ar: 'مقياس PHQ-9 تثقيفي غير تشخيصي ولا يحدد علاجا',
        fr: 'Questionnaire éducatif PHQ-9 sans valeur diagnostique',
      },
      keyRequirement: {
        ar: 'التواصل الفوري مع الطوارئ عند أي أفكار لإيذاء النفس وعدم إيقاف الدواء',
        fr: 'Urgences immédiates si idées d\'automutilation ; ne pas arrêter un traitement',
      },
    },
    explanation: {
      ar: [
        'يتكون استبيان المزاج والاكتئاب من تسعة أسئلة توعوية باللغة العربية حول تكرار تغيرات المزاج، مستوى النشاط، وجودة النوم خلال الأسبوعين الماضيين، بغرض تشجيع الوعي وطلب الدعم المناسب.',
        'هذا الفحص التثقيفي لا يشخص الاكتئاب ولا يحدد علاجا طبيا؛ فقراءة النتيجة مجرد إشارة أولية تساعدك على وصف ما تمر به عند التواصل مع طبيب أو أخصائي صحة نفسية.',
        'لا توقف أي دواء موصوف ولا تبدأ علاجا ذاتيا اعتمادا على نتيجة الاستبيان، بل شارك شخصا موثوقا واستشر طبيبا مختصا لمراجعة وضعك بأمان.',
        'تحذير طارئ: إذا ظهرت أفكار لإيذاء النفس أو الشعور بخطر عاجل، اطلب المساعدة الطارئة فورا وتواصل مع خدمات الاستعجالات أو خط الدعم المحلي وابق قرب شخص موثوق دون انتظار نتيجة الاستبيان.'
      ],
      fr: [
        'Ce questionnaire éducatif en neuf items explore l\'humeur, la fatigue, l\'intérêt et le sommeil au cours des deux dernières semaines afin d\'encourager le dialogue et la demande d\'accompagnement.',
        'Il s\'agit exclusivement d\'un outil de sensibilisation non diagnostique qui ne prouve ni l\'existence d\'une dépression ni l\'indication d\'un traitement particulier.',
        'Ne modifiez et n\'interrompez jamais un traitement prescrit sur la foi d\'un score en ligne : confiez-vous à une personne de confiance et consultez un médecin ou psychologue.',
        'Alerte prioritaire : en cas d\'idées suicidaires ou d\'automutilation, appelez immédiatement les secours d\'urgence, restez accompagné d\'un proche et n\'attendez pas le résultat du test.'
      ],
    },
    formulaTitle: {
      ar: 'مؤشر التوعية التراكمي للأسبوعين الأخيرين (0 إلى 27)',
      fr: 'Score éducatif cumulé sur 9 questions (0 à 27)',
    },
    formulaText: {
      ar: 'تقدر كل عبارة من الأسئلة التسعة بدرجة من 0 إلى 3 حسب تكرارها في الأسبوعين الماضيين، ويقدم المجموع مؤشرا توعويا للمتابعة المختصة عند الحاجة.',
      fr: 'Chaque question est notée de 0 à 3 selon sa fréquence sur 14 jours, fournissant un indice purement informatif à discuter avec un professionnel.',
    },
    practicalExample: {
      title: {
        ar: 'مثال التحضير لحوار صحي مع الطبيب أو الأخصائي',
        fr: 'Exemple de préparation à une consultation médicale',
      },
      scenario: {
        ar: 'شخص يلاحظ تراجع النشاط واضطراب النوم على مدى أسبوعين ويرغب في تقييم أولي يساعده على شرح حالته.',
        fr: 'Une personne ressentant une baisse d\'énergie et des troubles du sommeil durant deux semaines fait le point avant son rendez-vous.',
      },
      result: {
        ar: 'تساعد الإجابات التسعة على تنظيم الأعراض المكتوبة وتقديمها للطبيب للوصول إلى تشخيص مهني ودعم مناسب.',
        fr: 'L\'aperçu structuré l\'aide à décrire clairement la fréquence de ses ressentis au médecin lors de l\'entretien clinique.',
      },
    },
    tips: {
      ar: [
        'تذكر دائما أن الاستبيان أداة توعوية فقط ولا يحل محل الحوار السريري مع الطبيب المختص.',
        'لا تتخذ قرارا فرديا بتغيير أو توقيف أي علاج موصوف بناء على درجة الاستبيان.',
        'شارك شخصا مقربا تثق به بما تشعر به بدلا من البقاء وحيدا في فترات الضغط النفسي.',
        'عند أي أفكار مؤذية للنفس، توجه أو اتصل بالاستعجالات الطبية فورا.',
      ],
      fr: [
        'Gardez à l\'esprit que cet auto-questionnaire éducatif ne pose aucun diagnostic médical.',
        'N\'ajustez jamais un médicament sans validation directe de votre médecin.',
        'Brisez l\'isolement en parlant à un proche de confiance et à un professionnel de santé.',
        'Contactez immédiatement les urgences face à toute crise aiguë ou pensée dangereuse.',
      ],
    },
    extraFaqs: [],
  },

  'diabetes-awareness': {
    quickSummary: {
      targetAudience: {
        ar: 'المصابون بالسكري وأسرهم والمقبلون على الوقاية وتنظيم العادات اليومية',
        fr: 'Patients diabétiques, proches et usagers suivant une prévention quotidienne',
      },
      processingTime: {
        ar: 'تحديث فوري لنسبة الإنجاز اليومي (0 من 6 بنود) في المتصفح',
        fr: 'Mise à jour instantanée de la checklist (0 sur 6 points) en local',
      },
      fees: {
        ar: 'مجاني بالكامل دون إرسال معطيات صحية',
        fr: 'Gratuit sans collecte ni envoi de données médicales',
      },
      channel: {
        ar: 'قائمة متابعة يومية للعادات الوقائية وليس جهاز قياس أو تشخيص',
        fr: 'Liste d\'habitudes quotidiennes sans mesure glycémique ni diagnostic',
      },
      keyRequirement: {
        ar: 'الالتزام بوصفة الطبيب وطلب الإسعاف عند الإغماء أو تشوش الوعي',
        fr: 'Respecter le plan du médecin — urgences en cas de malaise ou confusion',
      },
    },
    explanation: {
      ar: [
        'تساعد قائمة التوعية اليومية بالسكري على تنظيم ومتابعة ست عادات وقائية يومية مثل انتظام الوجبات، النشاط البدني المعتدل، الالتزام بمواعيد الأدوية الموصوفة، وملاحظة القراءات المعتادة عند وجود خطة قياس.',
        'تتحدث نسبة الإنجاز من 0 إلى 6 بنود تلقائيا عند التأشير على كل نقطة، ويمكن تعديل القائمة بحرية في أي وقت داخل متصفحك فقط.',
        'نؤكد أن هذه القائمة للتوعية والتنظيم اليومي فقط ولا تقيس سكر الدم ولا تثبت وجود السكري أو ما قبل السكري، ولا يجب إطلاقا تغيير الجرعات أو إيقاف الأدوية اعتمادا عليها.',
        'في الحالات المزمنة أو عند السفر، ناقش خطة النشاط والأدوية مع طبيبك مسبقا واحتفظ بتقاريرك ووصفاتك وكمية كافية من الأدوية، واطلب الرعاية العاجلة فورا عند تشوش الوعي أو الإغماء أو القيء المستمر أو ضيق التنفس.'
      ],
      fr: [
        'La liste quotidienne de sensibilisation au diabète regroupe six repères simples pour suivre l\'hygiène de vie au jour le jour : équilibre des repas, activité physique, observance du traitement prescrit et consignation des mesures.',
        'Le compteur de progression (de 0 à 6 éléments) se met à jour en direct dans votre navigateur et reste entièrement modulable à tout moment.',
        'Cet outil purement organisationnel ne mesure ni la glycémie ni le risque clinique et ne permet en aucun cas d\'ajuster vos doses d\'insuline ou de médicaments sans avis médical.',
        'Lors de voyages ou changements d\'activité, consultez votre médecin avec vos ordonnances, et sollicitez une aide médicale d\'urgence face à toute confusion, perte de connaissance, vomissements répétés ou gêne respiratoire.'
      ],
    },
    formulaTitle: {
      ar: 'مؤشر الإنجاز اليومي لبنود التوعية الستة',
      fr: 'Suivi de complétion des 6 repères quotidiens',
    },
    formulaText: {
      ar: 'تحتسب النسبة المئوية آليا من خلال قسمة عدد البنود المؤشر عليها على 6 ثم ضربها في 100 لتسهيل المتابعة المنتظمة قبل الزيارة الطبية.',
      fr: 'Le pourcentage de progression correspond au nombre de points cochés divisé par 6, servant de pense-bête visuel quotidien.',
    },
    practicalExample: {
      title: {
        ar: 'مثال متابعة يومية استعدادا لزيارة الطبيب أو السفر',
        fr: 'Exemple de préparation quotidienne ou avant un déplacement',
      },
      scenario: {
        ar: 'مريض سكري يتابع انتظام وجباته ودوائه ونشاطه خلال الأسبوع تحضيرا لفحص المتابعة الدورية.',
        fr: 'Un patient suit ses repas, ses prises médicamenteuses et son hydratation avant sa consultation trimestrielle.',
      },
      result: {
        ar: 'تساعده القائمة على رصد النقاط المنتظمة وتدوين أي قراءات غير معتادة لمناقشتها مع الفريق الطبي دون تصرف فردي في الجرعات.',
        fr: 'La liste facilite un suivi régulier des bonnes pratiques et l\'identification de questions précises à poser au médecin.',
      },
    },
    tips: {
      ar: [
        'لا تغير أبدا جرعة الدواء أو توقفه اعتمادا على هذه القائمة التنظيمية.',
        'احتفظ قبل السفر أو أداء المناسك بنسخة من تقاريرك الطبية ووصفاتك وكمية كافية من الدواء.',
        'يمكنك أيضا فحص عوامل الخطر الأولية عبر اختبار خطر ما قبل السكري المرجعي في القسم الصحي.',
        'اطلب الطوارئ فورا عند الإغماء أو تشوش الوعي أو القيء المستمر أو التنفس غير الطبيعي.',
      ],
      fr: [
        'Ne modifiez jamais vos prescriptions médicamenteuses sans accord direct du médecin.',
        'Avant tout voyage, emportez ordonnances, rapports médicaux et réserves suffisantes de traitement.',
        'Découvrez aussi le questionnaire préventif sur les facteurs de risque de prédiabète (score CDC).',
        'Consultez d\'urgence en cas de malaise, confusion, vomissements persistants ou respiration anormale.',
      ],
    },
    extraFaqs: [],
  },
};
