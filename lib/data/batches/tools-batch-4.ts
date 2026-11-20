import { ToolItem, ToolRichGuide } from '@/lib/types';

export const batch4Tools: ToolItem[] = [
  {
    id: 'tool-eating',
    slug: 'eating-awareness',
    category: 'health',
    name: {
      ar: 'استبيان الوعي بأنماط الأكل والعلاقة بالطعام',
      fr: 'Questionnaire de Sensibilisation aux Habitudes Alimentaires',
    },
    description: {
      ar: 'استكشف عاداتك وأنماط الأكل اليومية عبر استبيان تثقيفي عام يساعد على زيادة الوعي بالعلاقة مع الطعام والمشاعر، وليس أداة تشخيصية أو تصنيفا طبيا.',
      fr: 'Explorez votre relation quotidienne à l\'alimentation et vos habitudes de repas grâce à un auto-questionnaire éducatif non diagnostique.',
    },
    iconName: 'Utensils',
    faqs: [
      {
        question: {
          ar: 'ما الهدف من استبيان الوعي بأنماط الأكل؟',
          fr: 'Quel est l\'objectif de ce questionnaire sur les habitudes alimentaires ?',
        },
        answer: {
          ar: 'يساعد على ملاحظة العلاقة بالطعام والمشاعر والسلوكيات اليومية ورصد أي إشارات تستحق الحوار مع مختص، دون وضع تشخيص أو تصنيف طبي.',
          fr: 'Il permet d\'observer le lien entre émotions et prise alimentaire afin d\'identifier d\'éventuels signaux à discuter avec un spécialiste, sans poser de diagnostic.',
        },
      },
      {
        question: {
          ar: 'هل تثبت إجابات الاستبيان وجود اضطراب أكل؟',
          fr: 'Les réponses permettent-elles de diagnostiquer un trouble alimentaire ?',
        },
        answer: {
          ar: 'لا؛ قد تشير الإجابات إلى موضوع يستحق النقاش فقط، ويحتاج التقييم الحقيقي إلى مختص مدرب يتعامل بطريقة علمية وغير وصمية.',
          fr: 'Non ; le score indique tout au plus un sujet méritant attention et dialogue auprès d\'un professionnel formé et bienveillant.',
        },
      },
      {
        question: {
          ar: 'متى يجب طلب دعم مهني فوري بشأن العلاقة بالطعام؟',
          fr: 'Quand faut-il solliciter un accompagnement médical sans attendre ?',
        },
        answer: {
          ar: 'اطلب دعما مهنيا عند حدوث إغماء، قيء متكرر، فقدان السيطرة على الأكل، سلوكيات مؤذية، أو تدهور في الصحة النفسية، وتجنب الحميات القاسية.',
          fr: 'Consultez rapidement en cas de malaises, vomissements répétés, perte de contrôle alimentaire, comportements compensatoires ou souffrance psychologique.',
        },
      },
    ],
  },
  {
    id: 'tool-fertile-window',
    slug: 'fertile-window',
    category: 'health',
    name: {
      ar: 'حاسبة نافذة الخصوبة والإباضة التقديرية',
      fr: 'Calculateur de Fenêtre de Fertilité & Période d\'Ovulation',
    },
    description: {
      ar: 'قدري أيام الإباضة وفترة الخصوبة المحتملة اعتمادا على تاريخ أول يوم من آخر دورة شهرية ومتوسط طول الدورة، مع نتائج تقويمية تثقيفية ومرجع NHS الطبي.',
      fr: 'Estimez votre période d\'ovulation et votre fenêtre de fertilité probable selon le premier jour des dernières règles et la durée moyenne du cycle (référence NHS).',
    },
    iconName: 'CalendarHeart',
    references: [
      {
        label: { ar: 'NHS: الخصوبة خلال الدورة الشهرية', fr: 'NHS : Fertilité au cours du cycle menstruel' },
        url: 'https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف تحسب الحاسبة أيام الإباضة ونافذة الخصوبة التقريبية؟',
          fr: 'Comment la fenêtre fertile est-elle estimée à partir de la durée du cycle ?',
        },
        answer: {
          ar: 'تطبق قاعدة تقريبية تفترض حدوث الإباضة قبل الدورة التالية بنحو 14 يوما، ثم تعرض الأيام الخمسة السابقة ويوم الإباضة واليوم التالي كنافذة خصوبة محتملة.',
          fr: 'L\'outil suit la règle générale situant l\'ovulation environ 14 jours avant les règles suivantes, en incluant les 5 jours précédents et le lendemain.',
        },
      },
      {
        question: {
          ar: 'هل تناسب الحاسبة الدورات غير المنتظمة أو تصلح كوسيلة لمنع الحمل؟',
          fr: 'Cette estimation calendaire convient-elle aux cycles irréguliers ou à la contraception ?',
        },
        answer: {
          ar: 'لا؛ هي تبسيط تعليمي يفترض نمطا منتظما متكررا للدورة، ولا تناسب الدورات غير المنتظمة كما لا يعتمد عليها وحدها كوسيلة لمنع الحمل.',
          fr: 'Non ; le calendrier suppose des cycles réguliers et prévisibles et ne doit jamais servir seul de méthode contraceptive.',
        },
      },
      {
        question: {
          ar: 'متى يجب استشارة الطبيبة بخصوص التبويض أو الدورة الشهرية؟',
          fr: 'Dans quels cas consulter un médecin ou gynécologue ?',
        },
        answer: {
          ar: 'تحدثي مع طبيبة أو مقدم رعاية صحية إذا كانت الدورة غير منتظمة جدا، أو غابت لفترات، أو تأخر حدوث الحمل رغم المحاولات المنتظمة.',
          fr: 'Consultez une professionnelle de santé en cas de cycles très irréguliers, d\'absence prolongée de règles ou de difficulté à concevoir.',
        },
      },
    ],
  },
  {
    id: 'tool-health-hub',
    slug: 'health-tools',
    category: 'health',
    name: {
      ar: 'الأدوات الصحية والحاسبات التوعوية الشاملة',
      fr: 'Centre des Calculateurs & Outils de Sensibilisation Santé',
    },
    description: {
      ar: 'دليل تفاعلي يجمع كافة الحاسبات والاستبيانات الصحية لمتابعة النمو، التغذية، الحمل، النوم، الماء، الأدوية، واللقاحات بالجزائر، مع التأكيد أن النتائج توعوية غير تشخيصية.',
      fr: 'Hub central regroupant l\'ensemble des calculateurs et questionnaires préventifs (croissance, nutrition, grossesse, sommeil, médicaments et vaccins), à but exclusivement éducatif.',
    },
    iconName: 'HeartPulse',
    faqs: [
      {
        question: {
          ar: 'هل تغني الأدوات والاستبيانات الصحية في البوابة عن الطبيب؟',
          fr: 'Les calculateurs et tests de cet espace remplacent-ils une consultation ?',
        },
        answer: {
          ar: 'لا؛ جميع النتائج الحسابية والاستبيانات داخل مكتبة الأدوات الصحية ذات طابع تقديري أو توعوي وتنظيمي فقط ولا تشخص الأمراض ولا تعوض الفحص السريري.',
          fr: 'Non ; tous les résultats obtenus sont fournis à titre indicatif et préventif et ne remplacent jamais le diagnostic d\'un médecin.',
        },
      },
      {
        question: {
          ar: 'كيف أختار الأداة الصحية المناسبة لحالتي من المركز الشامل؟',
          fr: 'Comment naviguer facilement vers l\'outil adapté à mon besoin ?',
        },
        answer: {
          ar: 'يمكنك تصفح البطاقات المباشرة بحسب المجال (نمو الأطفال والرضع WHO/CDC، التغذية والسعرات، الحمل والخصوبة، السكري، الصحة النفسية، أو التحضير للحج).',
          fr: 'Accédez directement par thématique : croissance pédiatrique OMS/CDC, nutrition, grossesse, suivi des médicaments ou questionnaires de prévention.',
        },
      },
    ],
  },
  {
    id: 'tool-ideal-weight',
    slug: 'ideal-weight-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة الوزن المثالي ونطاق الوزن المرجعي حسب الطول',
      fr: 'Calculateur de Poids Idéal Indicatif & Plage Santé selon la Taille',
    },
    description: {
      ar: 'احسب نطاقا تقريبيا للوزن المرجعي حسب الطول والجنس بالاستناد إلى المعادلات الطبية المعروفة، مع شرح حدود المؤشر والتأكيد أن الوزن الصحي ليس رقما واحدا يناسب الجميع.',
      fr: 'Obtenez une plage indicative de poids selon la taille et le sexe, avec rappel des limites de cet indicateur et comparaison utile avec l\'IMC et les besoins caloriques.',
    },
    iconName: 'Scale',
    faqs: [
      {
        question: {
          ar: 'هل الرقم الظاهر في حاسبة الوزن المثالي هو الوزن الوحيد الصحيح لجسمي؟',
          fr: 'Le chiffre calculé représente-t-il l\'unique poids santé valable ?',
        },
        answer: {
          ar: 'لا؛ الوزن الصحي ليس رقما واحدا، بل يتأثر بتركيب الجسم والكتلة العضلية والعمر والتاريخ الصحي، لذا تعرض الأداة نطاقا إرشاديا عام لفهم الأرقام لا للحكم.',
          fr: 'Non ; le poids de forme varie selon la masse musculaire, la morphologie, l\'âge et l\'état général : la plage proposée n\'est qu\'un simple repère.',
        },
      },
      {
        question: {
          ar: 'هل يكفي الطول والجنس وحدهما لتحديد الصحة البدنية؟',
          fr: 'La taille et le sexe suffisent-ils pour évaluer sa condition physique ?',
        },
        answer: {
          ar: 'لا؛ هما مدخلان لتقدير حسابي تقريبي فقط، ويجب النظر أيضا إلى محيط الخصر ومؤشر BMI والسعرات والعادات الغذائية واللياقة مع المختص عند الحاجة.',
          fr: 'Non ; il faut également considérer le tour de taille, l\'IMC, la composition corporelle, le niveau d\'activité et le bilan médical.',
        },
      },
      {
        question: {
          ar: 'متى يجب استشارة الطبيب بخصوص تغير الوزن؟',
          fr: 'Quand demander un avis médical concernant son poids ?',
        },
        answer: {
          ar: 'اطلب التقييم الطبي عند فقدان أو زيادة الوزن دون سبب واضح، أو مع وجود أعراض مقلقة، أو تناول أدوية مؤثرة في الوزن، أو الحاجة لخطة غذائية علاجية.',
          fr: 'Consultez un médecin en cas de variation pondérale inexpliquée, de prise de médicaments influençant le poids ou pour un programme nutritionnel médicalisé.',
        },
      },
    ],
  },
  {
    id: 'tool-infant-growth',
    slug: 'infant-growth-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة نمو الرضع والطول حسب العمر (منظمة الصحة WHO)',
      fr: 'Calculateur de Croissance du Nourrisson (0–24 mois - Courbes OMS / WHO)',
    },
    description: {
      ar: 'تابع نمو الرضيع من الولادة حتى 24 شهرا بمقارنة الطول مستلقيا والوزن الاختياري حسب العمر بالشهور والجنس وفق جداول WHO، مع حساب درجة Z والمئين التقريبي والروابط الرسمية.',
      fr: 'Suivez la croissance de bébé de 0 à 24 mois en comparant taille couchée et poids aux standards LMS de l\'OMS selon l\'âge en mois et le sexe (score Z et percentile).',
    },
    iconName: 'Baby',
    references: [
      {
        label: { ar: 'WHO: معايير نمو الطفل الدولية', fr: 'OMS / WHO : Normes de croissance de l\'enfant' },
        url: 'https://www.who.int/tools/child-growth-standards/standards',
      },
      {
        label: { ar: 'WHO: الطول حسب العمر', fr: 'OMS / WHO : Taille pour l\'âge (0-24 mois)' },
        url: 'https://www.who.int/tools/child-growth-standards/standards/length-height-for-age',
      },
      {
        label: { ar: 'WHO: الوزن حسب العمر', fr: 'OMS / WHO : Poids pour l\'âge (0-24 mois)' },
        url: 'https://www.who.int/tools/child-growth-standards/standards/weight-for-age',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفئة العمرية ووضعية القياس المستخدمة في حاسبة نمو الرضع؟',
          fr: 'Quelle tranche d\'âge et quelle position de mesure s\'appliquent ici ?',
        },
        answer: {
          ar: 'تغطي الأداة الرضع من الولادة حتى 24 شهرا، وتستخدم قياس الطول مستلقيا بالسنتيمتر حسب جداول منظمة الصحة العالمية WHO للطول حسب العمر.',
          fr: 'Cet outil couvre de la naissance à 24 mois et requiert la mesure couchée en centimètres conformément aux standards pédiatriques de l\'OMS.',
        },
      },
      {
        question: {
          ar: 'لماذا قد تختلف النتيجة قليلا عن أدوات أخرى؟',
          fr: 'Pourquoi le percentile peut-il légèrement différer d\'autres calculateurs ?',
        },
        answer: {
          ar: 'تعتمد الأداة معلمات LMS في جداول WHO لاختيار الشهر الأقرب من الجداول الرسمية، مما قد يسبب فارقا طفيفا مقارنة بأدوات تستخدم العمر بالأيام أو الاستيفاء الرياضي.',
          fr: 'Le calcul sélectionne le mois le plus proche dans les tables LMS de l\'OMS plutôt qu\'une interpolation journalière exacte.',
        },
      },
      {
        question: {
          ar: 'هل تغني درجة Z والمئين عن تقييم طبيب الأطفال؟',
          fr: 'Le score Z et le percentile suffisent-ils sans examen pédiatrique ?',
        },
        answer: {
          ar: 'لا؛ النتيجة مقارنة مرجعية أولية، ويحتاج طبيب الأطفال مراجعة القياسات المتكررة عبر الزمن إضافة للوزن ومحيط الرأس والتغذية والتاريخ الصحي.',
          fr: 'Non ; seul le pédiatre interprète la trajectoire globale en intégrant périmètre crânien, alimentation et courbe complète.',
        },
      },
    ],
  },
  {
    id: 'tool-medication-tracker',
    slug: 'medication-tracker',
    category: 'health',
    name: {
      ar: 'متابعتي للأدوية وتنظيم مواعيد الجرعات للعائلة',
      fr: 'Suivi Personnel des Médicaments & Rappels Locaux Famille',
    },
    description: {
      ar: 'أداة محلية لتنظيم علاجات حتى 3 ملفات لأفراد العائلة، متابعة جرعات اليوم، تسجيل وتصحيح الجرعات الفائتة، وإصدار تقارير مستقلة مع نسخ احتياطي JSON محليا دون خوادم.',
      fr: 'Organisez les traitements jusqu\'à 3 profils familiaux indépendants en local : horaires de prises, suivi des oublis avec historique de correction et sauvegarde JSON.',
    },
    iconName: 'Pill',
    faqs: [
      {
        question: {
          ar: 'هل تحل أداة متابعتي للأدوية محل الوصفة الطبية أو نصيحة الصيدلي؟',
          fr: 'Cet outil remplace-t-il l\'ordonnance ou le conseil du pharmacien ?',
        },
        answer: {
          ar: 'لا؛ هي أداة تنظيم وتذكير محلية فقط. أدخل الجرعات والأوقات كما وردت في وصفة الطبيب أو الصيدلي، ولا تغير الجرعة أو تعوض الجرعة الفائتة من تلقاء نفسك.',
          fr: 'Non ; il s\'agit uniquement d\'un aide-mémoire local. Respectez strictement votre ordonnance et ne modifiez jamais ni ne doublez une prise sans avis professionnel.',
        },
      },
      {
        question: {
          ar: 'كم ملفا يمكن إنشاؤه وهل تختلط تقارير أفراد العائلة؟',
          fr: 'Combien de profils puis-je créer et comment sont gérés les rapports ?',
        },
        answer: {
          ar: 'تسمح الأداة بإنشاء ثلاثة ملفات كحد أقصى في المتصفح، ولكل فرد علاجاته وتنبيهاته وتقريره المستقل دون خلط بيانات أفراد العائلة.',
          fr: 'Vous pouvez gérer jusqu\'à trois profils distincts dans votre navigateur, chacun disposant de ses propres traitements et statistiques isolées.',
        },
      },
      {
        question: {
          ar: 'كيف تعمل التنبيهات والنسخ الاحتياطي في المتصفح؟',
          fr: 'Comment fonctionnent les rappels et l\'export de sauvegarde JSON ?',
        },
        answer: {
          ar: 'تحفظ البيانات في هذا المتصفح فقط مع خيار تنزيل نسخة احتياطية JSON واستيرادها بالدمج، بينما تعمل التنبيهات أثناء بقاء الصفحة مفتوحة ولا تضمن إشعارا عند غلق المتصفح أو الجهاز.',
          fr: 'Les données restent en local avec sauvegarde JSON ; les rappels ne fonctionnent que lorsque la page reste ouverte avec votre autorisation explicite.',
        },
      },
    ],
  },
  {
    id: 'tool-nutrition',
    slug: 'nutrition-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة التغذية والماكروز وتوزيع الوجبات الصحية',
      fr: 'Calculateur Nutritionnel, Macros (Protéines/Glucides/Lipides) & Repas',
    },
    description: {
      ar: 'احسب السعرات اليومية (TDEE) والأيض الأساسي (BMR) واحتياج البروتين والكربوهيدرات والدهون بالجرام للبالغين 18+، مع خطة توزيع الوجبات ودليل المصادر الغذائية الصحية.',
      fr: 'Calculez vos besoins énergétiques (BMR/TDEE), votre IMC et votre répartition en macronutriments en grammes et calories pour adultes (18+), avec guide des sources alimentaires.',
    },
    iconName: 'Apple',
    faqs: [
      {
        question: {
          ar: 'من الفئة المستهدفة بحاسبة التغذية والماكروز؟',
          fr: 'À qui s\'adresse le calculateur nutritionnel et quels sont ses cas exclus ?',
        },
        answer: {
          ar: 'الحسابات تقديرية للبالغين من سن 18 سنة فما فوق؛ وفي حالات الحمل أو الرضاعة أو الأمراض المزمنة أو الحميات العلاجية يجب استشارة طبيب أو أخصائي تغذية.',
          fr: 'Les estimations s\'appliquent aux adultes de 18 ans et plus ; en cas de grossesse, allaitement, maladie chronique ou régime thérapeutique, consultez un spécialiste.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تغيير توزيع الوجبات المقترح ودليل الأطعمة؟',
          fr: 'La répartition journalière des repas et les aliments suggérés sont-ils figés ?',
        },
        answer: {
          ar: 'نعم، خطة توزيع السعرات والماكروز إرشادية ومرنة لتناسب يومك، كما أن قيم المصادر الغذائية تقريبية وتختلف حسب حجم الحصة وطريقة التحضير.',
          fr: 'Non, le découpage horaire est indicatif et modulable ; les valeurs nutritionnelles des aliments varient selon la portion réelle et le mode de cuisson.',
        },
      },
    ],
  },
  {
    id: 'tool-pilgrim',
    slug: 'pilgrim-health-checklist',
    category: 'health',
    name: {
      ar: 'قائمة الاستعداد الصحي واللقاحات للحجاج والمعتمرين (12 بندا)',
      fr: 'Checklist Santé, Vaccins & Préparation du Pèlerin (Hadj & Omra)',
    },
    description: {
      ar: 'جهز مستلزماتك الصحية قبل السفر للحج أو العمرة عبر قائمة محلية من 12 بندا قابلة للتأشير والحفظ لتنظيم اللقاحات والأدوية والتقارير الطبية والوقاية من الحر.',
      fr: 'Préparez votre départ au Hadj ou à la Omra avec une liste interactive locale de 12 points couvrant vaccins, traitements chroniques, dossier médical et prévention chaleur.',
    },
    iconName: 'ShieldCheck',
    faqs: [
      {
        question: {
          ar: 'هل تغني قائمة الاستعداد الصحي للحج عن الفحص الطبي قبل السفر؟',
          fr: 'Cette checklist dispense-t-elle d\'un bilan médical préalable avant le Hadj ?',
        },
        answer: {
          ar: 'لا؛ تساعد القائمة على تنظيم الأدوية، الوثائق، الماء، الملابس، وخطة المشي والسفر، لكنها لا تستبدل التقييم الطبي والدفتر الصحي الرسمي قبل الرحلة.',
          fr: 'Non ; elle facilite l\'organisation des traitements, vaccins et équipements, mais ne remplace jamais l\'avis médical et la visite d\'aptitude officielle.',
        },
      },
      {
        question: {
          ar: 'كيف أجهز أدويتي المزمنة واللقاحات قبل موسم الحج في الجزائر؟',
          fr: 'Comment préparer ses médicaments chroniques et justificatifs ?',
        },
        answer: {
          ar: 'راجع الأدوية الموصوفة واللقاحات المطلوبة مع طبيبك واحتفظ بقائمة واضحة بمواعيدها وتقاريرك الطبية وكمية كافية لتغطية فترة السفر.',
          fr: 'Faites le point avec votre médecin sur vos vaccins obligatoires et emportez une réserve suffisante de médicaments avec ordonnances et rapports.',
        },
      },
      {
        question: {
          ar: 'ما الأعراض التي توجب التوقف وطلب الإسعاف فورا أثناء المناسك؟',
          fr: 'Quels signes imposent d\'arrêter l\'effort et de consulter d\'urgence ?',
        },
        answer: {
          ar: 'اطلب المساعدة الطبية فورا عند ضيق التنفس أو ألم الصدر أو الإغماء أو الارتباك الحراري، ولا تحاول إكمال الشعائر قبل التقييم الطبي.',
          fr: 'Consultez sans délai en cas d\'essoufflement, douleur thoracique, malaise, désorientation liée à la chaleur ou symptômes sévères.',
        },
      },
    ],
  },
];

export const batch4ToolGuides: Record<string, Partial<ToolRichGuide>> = {
  'eating-awareness': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون والشباب الساعون لتقييم وعيهم بعادات الأكل دون تشخيص',
        fr: 'Adultes et jeunes souhaitant observer leurs habitudes alimentaires',
      },
      processingTime: {
        ar: 'مؤشر تثقيفي فوري داخل المتصفح بسرية تامة',
        fr: 'Indicateur éducatif instantané et confidentiel dans le navigateur',
      },
      fees: {
        ar: 'مجاني بالكامل دون تسجيل أو حفظ إجابات',
        fr: 'Gratuit à 100 % sans aucune collecte de réponses',
      },
      channel: {
        ar: 'استبيان توعوي ذاتي غير تشخيصي ولا وصمي',
        fr: 'Questionnaire éducatif non diagnostique et sans jugement',
      },
      keyRequirement: {
        ar: 'الابتعاد عن الحميات القاسية وطلب مختص عند الأعراض الحرجة',
        fr: 'Éviter les régimes extrêmes — consulter un spécialiste en cas de signes sévères',
      },
    },
    explanation: {
      ar: [
        'يوفر استبيان الوعي بأنماط الأكل أداة تثقيفية عامة تتيح لك التأمل بصدق وخصوصية في علاقتك بالطعام، وملاحظة أثر المشاعر والضغوط اليومية على انتظام الوجبات.',
        'لا يضع هذا الاستبيان أي تشخيص أو تصنيف طبي؛ وإنما يساعد في رصد إشارات قد تستحق حوارا هادئا وغير وصمي مع طبيب أو مختص تغذية أو صحة نفسية.',
        'ينصح دائما باستخدام النتائج كبداية لرفع الوعي وبناء توازن لطيف مع الأكل، مع تجنب الحميات القاسية أو السلوكيات التعويضية أو الهوس بمراقبة السعرات.',
        'في حالات الأعراض الشديدة مثل الإغماء، القيء المتكرر، فقدان السيطرة على الأكل، أو تدهور الصحة النفسية، يجب طلب دعم طبي ونفسي متخصص فورا.'
      ],
      fr: [
        'Le questionnaire de sensibilisation aux habitudes alimentaires invite à porter un regard apaisé et confidentiel sur son rapport quotidien aux repas et à l\'alimentation émotionnelle.',
        'Il n\'établit aucun diagnostic ni classement clinique : son rôle est simplement d\'aider à repérer d\'éventuels signaux méritant un échange serein avec un professionnel formé.',
        'Utilisez ce repère dans une démarche bienveillante, en évitant les régimes restrictifs sévères, les conduites compensatoires ou le contrôle obsessionnel source d\'anxiété.',
        'Sollicitez un soutien médical spécialisé sans attendre en cas de malaises, vomissements répétés, perte de contrôle ou détresse psychologique.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ القراءة التثقيفية لعلاقة الطعام بالروتين اليومي',
      fr: 'Principe d\'auto-observation comportementale',
    },
    formulaText: {
      ar: 'تجمع إجابات الأسئلة التثقيفية لتعكس مدى انتظام السلوك الغذائي والتأثر العاطفي بالأكل كأداة تمهيدية للحوار المختص.',
      fr: 'La synthèse des réponses met en lumière la régularité alimentaire et les déclencheurs émotionnels afin de préparer une discussion médicale constructive.',
    },
    practicalExample: {
      title: {
        ar: 'مثال الاستفادة الإيجابية من استبيان أنماط الأكل',
        fr: 'Exemple d\'utilisation responsable du questionnaire',
      },
      scenario: {
        ar: 'مستخدم يلاحظ نوبات أكل مرتبطة بالتوتر المهني أو صعوبة في تنظيم وجباته اليومية.',
        fr: 'Une personne constate des prises alimentaires liées au stress professionnel ou des cycles de restriction/excès.',
      },
      result: {
        ar: 'يساعده المؤشر على الانتقال لخطط وجبات مرنة ومعتدلة ومناقشة العادات بأمان مع مختص تغذية أو طبيب الأسرة.',
        fr: 'L\'outil encourage à revenir vers un équilibre alimentaire souple et à demander conseil à un professionnel de santé.',
      },
    },
    tips: {
      ar: [
        'أجب عن البنود بخصوصية تامة وبغرض الفهم الشخصي لا الحكم أو النقد الذاتي.',
        'تجنب الانسياق وراء الأنظمة الغذائية القاسية أو الحرمان المفاجئ.',
        'ابدأ حوارا هادئا مع طبيب أو مختص تغذية موثوق إذا شعرت بقلق مستمر حول الطعام.',
        'اطلب المساعدة المهنية الفورية عند الإغماء أو القيء المتكرر أو فقدان السيطرة.',
      ],
      fr: [
        'Répondez en toute confidentialité dans une logique de compréhension et non d\'autocritique.',
        'Écartez les régimes extrêmes ou privations brutales qui accentuent les déséquilibres.',
        'Ouvrez le dialogue avec un médecin ou nutritionniste si le rapport à la nourriture génère de l\'anxiété.',
        'Consultez rapidement face à tout symptôme physique sérieux (malaises, vomissements).',
      ],
    },
    extraFaqs: [],
  },

  'fertile-window': {
    quickSummary: {
      targetAudience: {
        ar: 'النساء الراغبات في متابعة نمط الدورة الشهرية وتقدير أيام التبويض',
        fr: 'Femmes souhaitant suivre leur cycle menstruel et estimer l\'ovulation',
      },
      processingTime: {
        ar: 'حساب فوري ليوم الإباضة التقريبي ونطاق نافذة الخصوبة',
        fr: 'Estimation instantanée du jour probable d\'ovulation et de la fenêtre fertile',
      },
      fees: {
        ar: 'مجاني وسري داخل المتصفح مع رابط NHS الرسمي',
        fr: 'Gratuit et confidentiel avec lien de référence officiel NHS',
      },
      channel: {
        ar: 'حاسبة تقويمية تثقيفية (لا تناسب الدورات غير المنتظمة)',
        fr: 'Simulateur calendaire indicatif (cycles réguliers uniquement)',
      },
      keyRequirement: {
        ar: 'أول يوم من آخر دورة شهرية ومتوسط طول الدورة بالأيام',
        fr: 'Date du premier jour des dernières règles et durée moyenne du cycle',
      },
    },
    explanation: {
      ar: [
        'تساعد حاسبة نافذة الخصوبة والإباضة على تقدير موعد التبويض المحتمل والأيام التي تكون فيها فرصة الحمل أعلى استنادا إلى تاريخ أول يوم من آخر دورة شهرية ومتوسط طول دورتك.',
        'تعتمد الأداة التبسيط التعليمي الشائع (والمتوافق مع إرشادات NHS) الذي يفترض حدوث الإباضة قبل الدورة التالية بنحو 14 يوما، ثم تعرض الأيام الخمسة السابقة ويوم الإباضة واليوم التالي له كنافذة خصوبة تقريبية.',
        'ولأن التبويض قد يتقدم أو يتأخر بين دورة وأخرى، فإن تسجيل أول يوم من كل دورة لعدة أشهر متتالية يمنح صورة أدق لطبيعتك المعتادة، بينما قد يصبح الحساب التقويمي غير مناسب للدورات غير المنتظمة.',
        'تنبيه طبي مهم: لا تعتمدي أبدا على التقويم الحسابي وحده كوسيلة لمنع الحمل أو عند وجود اضطرابات هرمونية أو تأخر الحمل؛ بل راجعي طبيبة مختصة للحصول على إرشاد طبي دقيق.'
      ],
      fr: [
        'Le calculateur de fenêtre de fertilité permet d\'estimer la date probable d\'ovulation et la plage de jours les plus fertiles à partir du premier jour des dernières règles et de la durée habituelle du cycle.',
        'Selon la règle éducative classique (également rappelée par le NHS), l\'ovulation survient environ 14 jours avant les règles suivantes ; la fenêtre fertile regroupe alors les 5 jours précédents, le jour même et le lendemain.',
        'L\'ovulation pouvant avancer ou reculer d\'un cycle à l\'autre, noter ses dates sur plusieurs mois améliore les repères mais reste peu adapté aux cycles très irréguliers.',
        'Précaution essentielle : n\'utilisez jamais cette estimation calendaire seule comme méthode de contraception et consultez un médecin en cas d\'irrégularités ou de retard de conception.'
      ],
    },
    formulaTitle: {
      ar: 'قاعدة الـ 14 يوما التقديرية لحساب نافذة الخصوبة',
      fr: 'Méthode calendaire estimative des 14 jours',
    },
    formulaText: {
      ar: 'موعد الإباضة التقريبي = أول يوم لآخر دورة + (طول الدورة المعتاد − 14 يوما). نافذة الخصوبة = من 5 أيام قبل الإباضة إلى يوم واحد بعدها.',
      fr: 'Ovulation estimée = 1er jour des dernières règles + (Durée du cycle − 14 jours). Fenêtre fertile ≈ [Ovulation − 5 j à Ovulation + 1 j].',
    },
    practicalExample: {
      title: {
        ar: 'مثال لدورة شهرية منتظمة طولها 28 يوما',
        fr: 'Exemple pratique pour un cycle régulier de 28 jours',
      },
      scenario: {
        ar: 'سيدة بدأ آخر طمث لديها في 1 نوفمبر بمتوسط طول دورة 28 يوما.',
        fr: 'Premier jour des dernières règles le 1er novembre avec un cycle régulier de 28 jours.',
      },
      result: {
        ar: 'يقع التقدير التقريبي ليوم الإباضة حول اليوم الرابع عشر (15 نوفمبر)، وتمتد نافذة الخصوبة المحتملة تقريبا من 10 إلى 16 نوفمبر كمرجع تعليمي.',
        fr: 'L\'ovulation est estimée autour du 14e jour (15 novembre) et la fenêtre fertile indicative s\'étend approximativement du 10 au 16 novembre.',
      },
    },
    tips: {
      ar: [
        'سجلي أول يوم من كل دورة لعدة أشهر متتالية لمعرفة مدى انتظام دورتك الفعلي.',
        'تذكري أن علامات مثل الإفرازات أو الحرارة قد تتغير وتفسيرها لا يغني عن الاستشارة الطبية.',
        'لا تستخدمي الحسابات التقويمية وحدها لتنظيم الأسرة أو منع الحمل.',
        'استشيري الطبيبة عند غياب الدورة لفترات أو عدم انتظامها الشديد أو تأخر الحمل.',
      ],
      fr: [
        'Notez la date de début de chaque cycle pendant plusieurs mois pour connaître votre régularité réelle.',
        'Ne vous fiez jamais au seul calcul calendaire si votre objectif est contraceptif.',
        'Complétez la planification de grossesse avec les calculateurs de date d\'accouchement et de nutrition dédiés.',
        'Consultez un professionnel en cas de cycles irréguliers ou d\'absence prolongée de règles.',
      ],
    },
    extraFaqs: [],
  },

  'health-tools': {
    quickSummary: {
      targetAudience: {
        ar: 'كافة المواطنين والأسر الراغبين في وصول موحد للحاسبات والاستبيانات الصحية',
        fr: 'Familles et usagers cherchant un accès centralisé aux outils santé',
      },
      processingTime: {
        ar: 'تنقل سريع وبحث فوري بين 20 أداة وحاسبة صحية تفاعلية',
        fr: 'Navigation rapide vers les 20 outils et questionnaires préventifs',
      },
      fees: {
        ar: 'مجاني بالكامل مع الحفاظ التام على خصوصية المتصفح',
        fr: '100 % gratuit avec confidentialité locale totale',
      },
      channel: {
        ar: 'بوابة صحية توعوية تضم مؤشرات النمو، الحمل، التغذية والوقاية',
        fr: 'Hub éducatif couvrant croissance, nutrition, grossesse et prévention',
      },
      keyRequirement: {
        ar: 'جميع النتائج إرشادية وتوعوية وليست بديلا عن الفحص الطبي',
        fr: 'Résultats purement éducatifs ne remplaçant jamais un médecin',
      },
    },
    explanation: {
      ar: [
        'يمثل مركز الأدوات الصحية والحاسبات التوعوية المدخل الموحد لمجموعة متكاملة من 20 أداة واستبيانا عربيا وفرنسيا مصممة لمساعدة الأسرة في فهم المؤشرات البدنية والغذائية والوقائية وتنظيم المتابعة اليومية.',
        'تجمع المكتبة أدوات النمو المبنية على معايير WHO وCDC (مثل حاسبة نمو الرضع ومؤشر كتلة الجسم للأطفال والمراهقين)، وحاسبات التغذية (السعرات والماكروز والوزن المثالي والماء)، بالإضافة إلى حاسبات الحمل والخصوبة ودفتر تلقيح الأطفال في الجزائر 2026.',
        'كما يضم المركز قائمة من الاستبيانات التوعوية وأدوات المتابعة اليومية مثل استبيان القلق، المزاج، تقييم النوم، التحكم بالربو، متابعتي للأدوية، وقائمة الاستعداد الصحي للحج.',
        'نشدد في كل صفحة ضمن هذا المركز على أن كافة الحسابات والاستبيانات توعوية وتقديرية بحتة؛ فهي تمنحك أرقاما منظمة لتحضير أسئلتك قبل الزيارة الطبية دون أن تغني أبدا عن الطبيب.'
      ],
      fr: [
        'Le centre des outils et calculateurs santé réunit au même endroit 20 utilitaires bilingues conçus pour aider les familles à comprendre leurs repères préventifs, nutritionnels et pédiatriques.',
        'Il regroupe des outils calibrés sur des référentiels reconnus (courbes OMS pour nourrissons, percentiles CDC pour enfants, calendrier vaccinal algérien 2026) ainsi que le suivi de grossesse, des médicaments et de la préparation au Hadj.',
        'Toutes les interfaces fonctionnent exclusivement en local dans votre navigateur afin de garantir la confidentialité stricte de vos mesures et réponses personnelles.',
        'Nous rappelons systématiquement que ces résultats sont purement indicatifs et éducatifs : ils facilitent le dialogue avec votre médecin sans jamais se substituer à une consultation clinique.'
      ],
    },
    formulaTitle: {
      ar: 'محاور المكتبة الصحية العشرين والمرجعيات العلمية',
      fr: 'Architecture des 4 pôles santé et référentiels internationaux',
    },
    formulaText: {
      ar: 'تعتمد كل أداة على معادلتها الطبية أو دليلها التنظيمي المخصص (WHO، CDC، NHS، MedlinePlus، والجريدة الرسمية الجزائرية) مع خصوصية محلية 100%.',
      fr: 'Chaque outil s\'appuie sur sa formule ou grille de référence (OMS, CDC, NHS, MedlinePlus, Journal Officiel algérien) dans un cadre 100 % local.',
    },
    practicalExample: {
      title: {
        ar: 'مثال استخدام المركز الصحي لمتابعة شؤون الأسرة',
        fr: 'Exemple d\'usage familial des différents modules santé',
      },
      scenario: {
        ar: 'عائلة تتابع لقاحات الرضيع ونموه وفق معايير WHO بالتوازي مع تنظيم مواعيد أدوية الوالدين وتجهيز قائمة الحج.',
        fr: 'Une famille suit la courbe OMS et les vaccins d\'un nourrisson tout en organisant les prises de médicaments des parents.',
      },
      result: {
        ar: 'يوفر المركز التنقل الفوري بين الحاسبات والمتتبعات المحلية في نفس البوابة دون حاجة لتثبيت تطبيقات متعددة.',
        fr: 'Le hub permet d\'accéder en un clic à chaque outil ciblé depuis un seul espace clair et sécurisé.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'خريطة أبرز المحاور داخل الأدوات الصحية التوعوية',
        fr: 'Vue d’ensemble des thématiques du centre santé',
      },
      headers: [
        { ar: 'المجال الصحي', fr: 'Domaine' },
        { ar: 'أبرز الأدوات المتوفرة', fr: 'Outils principaux' },
        { ar: 'المرجعية المطبقة', fr: 'Référentiel' },
      ],
      rows: [
        [
          { ar: 'الأطفال والرضع', fr: 'Pédiatrie & Croissance' },
          { ar: 'نمو الرضع، BMI للأطفال، دفتر التلقيح', fr: 'Croissance OMS, IMC enfant, Vaccins 2026' },
          { ar: 'WHO / CDC / الجريدة الرسمية', fr: 'OMS / CDC / JO Algérie' },
        ],
        [
          { ar: 'التغذية والوزن', fr: 'Nutrition & Hydratation' },
          { ar: 'السعرات، الماكروز، الوزن المثالي، الماء', fr: 'Calories, Macros, Poids idéal, Eau' },
          { ar: 'Mifflin-St Jeor / Mayo Clinic / NHS', fr: 'Mifflin-St Jeor / Mayo / NHS' },
        ],
        [
          { ar: 'الأمومة والحمل', fr: 'Maternité & Cycle' },
          { ar: 'موعد الولادة، سعرات الحمل، الخصوبة', fr: 'Accouchement, Calories grossesse, Fertilité' },
          { ar: 'MedlinePlus / NHS', fr: 'MedlinePlus / NHS' },
        ],
        [
          { ar: 'التوعية والمتابعة', fr: 'Prévention & Suivi' },
          { ar: 'الأدوية، السكري، الربو، النوم، الحج، البصر', fr: 'Médicaments, Diabète, Asthme, Sommeil, Hadj' },
          { ar: 'استبيانات وقوائم غير تشخيصية', fr: 'Grilles éducatives locales' },
        ],
      ],
    },
    tips: {
      ar: [
        'استعمل مربع البحث أو البطاقات المباشرة للوصول إلى الأداة الصحية التي تخص فئتك العمرية.',
        'احرص على عدم تطبيق حاسبات البالغين على الأطفال أو الحوامل، واختر الأداة المخصصة لكل فئة.',
        'تذكر أن أي أعراض حادة أو مستعجلة تستوجب التوجه مباشرة لأقرب استعجالات طبية.',
        'احفظ تقارير الأدوية واللقاحات عبر النسخ الاحتياطي المحلي المتاح في الأدوات التفاعلية.',
      ],
      fr: [
        'Sélectionnez toujours l\'outil correspondant à la tranche d\'âge (nourrisson, enfant, adulte, grossesse).',
        'Ne prenez aucune décision thérapeutique sur la seule base d\'un indicateur numérique.',
        'Utilisez les exports JSON locaux pour sauvegarder vos suivis réguliers (vaccins, médicaments).',
        'Consultez d\'urgence un service médical face à tout symptôme aigu.',
      ],
    },
    extraFaqs: [],
  },

  'ideal-weight-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون الباحثون عن فهم نطاق الوزن المرجعي حسب الطول والجنس',
        fr: 'Adultes souhaitant situer leur plage indicative de poids santé',
      },
      processingTime: {
        ar: 'تقدير فوري لنطاق الوزن التقريبي وفق معادلات طبية شائعة',
        fr: 'Calcul instantané de la plage indicative selon la taille et le sexe',
      },
      fees: {
        ar: 'مجاني بالكامل مع مقارنة مباشرة مع BMI والسعرات',
        fr: 'Gratuit avec orientation complémentaire IMC et Calories',
      },
      channel: {
        ar: 'حاسبة إرشادية لا تضع رقما إلزاميا أو حكما على الجسم',
        fr: 'Repère informatif non normatif dans le navigateur',
      },
      keyRequirement: {
        ar: 'الطول بالسنتيمتر والجنس مع مراعاة بنية الجسم والكتلة العضلية',
        fr: 'Taille (cm) et sexe, à nuancer selon la morphologie',
      },
    },
    explanation: {
      ar: [
        'تمنحك حاسبة الوزن المثالي تقديرا تقريبيا لنطاق الوزن المرجعي المناسب بناء على الطول والجنس فقط، لتساعدك على قراءة الأرقام بوعي دون اعتبارها هدفا إلزاميا أو معيارا لقيمة جسمك.',
        'فالوزن الصحي في الواقع ليس رقما واحدا يناسب جميع الأفراد من نفس الطول؛ بل يتأثر بشكل كبير بتركيب الجسم بين العضلات والدهون، العمر، الوراثة، التاريخ الصحي، ولياقة القلب.',
        'تقتصر هذه الحاسبة على الطول والجنس لإعطاء مجال استرشادي أولي (انطلاقا من صيغ مرجعية مثل Devine وLorentz)، ولا بد عند التقييم الجدي من النظر أيضا إلى محيط الخصر ومؤشر BMI والعادات اليومية.',
        'ينصح باستخدام النتيجة كنقطة معلومات لبناء أهداف تدريجية مستدامة بالتوازي مع حاسبة السعرات الحرارية، واستشارة الطبيب عند أي تغير غير مفسر في الوزن أو الحاجة لخطة علاجية.'
      ],
      fr: [
        'Le calculateur de poids idéal fournit une plage indicative générale basée uniquement sur la taille et le sexe, afin d\'offrir un simple repère chiffré et non un objectif rigide.',
        'En pratique médicale, le poids santé ne se réduit jamais à un chiffre unique : il dépend fortement de la masse musculaire, de l\'ossature, de l\'âge, du tour de taille et des antécédents personnels.',
        'Les formules classiques utilisées (comme Lorentz et Devine) doivent toujours être mises en perspective avec l\'indice de masse corporelle (IMC) et votre niveau de forme réel.',
        'Privilégiez des habitudes progressives et durables plutôt qu\'un objectif chiffré strict, et consultez un médecin en cas de perte ou prise de poids inhabituelle.'
      ],
    },
    formulaTitle: {
      ar: 'معادلتي Lorentz وDevine الاسترشاديتين للطول والجنس',
      fr: 'Formules indicatives de Lorentz et Devine',
    },
    formulaText: {
      ar: 'صيغة لورينتز التقريبية: للرجال = (الطول سم − 100) − [(الطول − 150) ÷ 4]؛ وللنساء = (الطول سم − 100) − [(الطول − 150) ÷ 2.5]. وتقارن النتيجة بنطاق BMI الصحي (18.5–24.9).',
      fr: 'Lorentz Homme = (Taille cm − 100) − [(Taille − 150) ÷ 4] ; Femme = (Taille cm − 100) − [(Taille − 150) ÷ 2,5], confronté à la plage IMC 18,5–24,9.',
    },
    practicalExample: {
      title: {
        ar: 'مثال لقراءة النطاق المرجعي لطول 172 سم',
        fr: 'Exemple de lecture de plage indicative pour 172 cm',
      },
      scenario: {
        ar: 'شخص طوله 172 سم يتحقق من نطاق الوزن الإرشادي مع أخذ البنية العضلية في الحسبان.',
        fr: 'Une personne mesurant 172 cm consulte son repère de poids indicatif selon les formules.',
      },
      result: {
        ar: 'يقع نطاق الوزن المرجعي التقريبي ضمن مجال واسع يتوافق مع BMI الطبيعي (حوالي 55 إلى 73 كغ)، ما يؤكد مرونة الوزن الصحي بعيدا عن التقييد برقم واحد.',
        fr: 'La fourchette de confort correspondant à un IMC normal s\'étend largement (environ 55 à 73 kg), illustrant la diversité des morphologies saines.',
      },
    },
    tips: {
      ar: [
        'انظر إلى النتيجة كمجال إرشادي مرن لا كرقم وحيد مفروض.',
        'ادمج القراءة مع حاسبة السعرات الحرارية والماكروز لبناء روتين غذائي متوازن.',
        'راع مؤشرات إضافية أهم مثل محيط الخصر ومستوى النشاط واللياقة اليومية.',
        'راجع الطبيب عند تغير الوزن المفاجئ أو الحاجة لحمية علاجية خاصة.',
      ],
      fr: [
        'Considérez toujours une plage de poids large plutôt qu\'un chiffre unique figé.',
        'Croisez ce repère avec le calculateur calorique et la mesure du tour de taille.',
        'Évitez les objectifs de perte rapide : privilégiez des habitudes progressives et durables.',
        'Consultez un médecin en cas de variation de poids inexpliquée ou de pathologie chronique.',
      ],
    },
    extraFaqs: [],
  },

  'infant-growth-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'الآباء والأمهات ومقدمو الرعاية لمتابعة الرضع من الولادة حتى 24 شهرا',
        fr: 'Parents et soignants suivant la croissance des nourrissons (0 à 24 mois)',
      },
      processingTime: {
        ar: 'حساب فوري لدرجة Z والمئين التقريبي وفق جداول منظمة WHO',
        fr: 'Calcul instantané du score Z et percentile OMS (WHO)',
      },
      fees: {
        ar: 'مجاني مع 3 روابط رسمية لمعايير منظمة الصحة العالمية WHO',
        fr: 'Gratuit avec 3 liens officiels vers les standards de croissance OMS',
      },
      channel: {
        ar: 'تطبيق محلي يستخدم معلمات LMS لطول الرضيع مستلقيا ووزنه',
        fr: 'Calculateur local basé sur les paramètres LMS (taille couchée et poids)',
      },
      keyRequirement: {
        ar: 'العمر بالشهور (0–24)، الجنس، الطول مستلقيا (سم)، والوزن الاختياري (كغ)',
        fr: 'Âge en mois (0–24), sexe, taille couchée (cm) et poids optionnel (kg)',
      },
    },
    explanation: {
      ar: [
        'تساعد حاسبة نمو الرضع على مقارنة الطول مستلقيا (والوزن الاختياري) للرضيع من الولادة حتى عمر 24 شهرا مع معايير النمو الدولية المعتمدة من منظمة الصحة العالمية (WHO) حسب العمر بالشهور والجنس.',
        'لأن الطفل دون السنتين لا يقاس واقفا، يجب إدخال الطول وهو في وضعية الاستلقاء على سطح ثابت وبأداة قياس سليمة لضمان دقة المقارنة، حيث تحسب الأداة درجة Z والمئين التقريبي بالاعتماد على معلمات LMS في جداول WHO.',
        'توضح الأداة اختيار الشهر الأقرب من جداول الطول حسب العمر والوزن حسب العمر الرسمية، ولذلك قد تختلف القراءة طفيفا عن أنظمة تحسب العمر بالأيام أو تعتمد الاستيفاء بين الشهور.',
        'تنبيه تربوي وطبي: قراءة منفردة لا تكفي للحكم على صحة الرضيع أو نموه؛ فالطبيب يراقب مسار النمو عبر عدة أشهر إلى جانب الوزن ومحيط الرأس والتغذية والتاريخ الصحي الكامل.'
      ],
      fr: [
        'Le calculateur de croissance du nourrisson compare la taille couchée (et le poids optionnel) des bébés de la naissance à 24 mois aux courbes internationales de référence de l\'Organisation Mondiale de la Santé (OMS / WHO).',
        'Avant 2 ans, la taille doit impérativement être mesurée en position couchée sur un plan ferme ; l\'outil applique les paramètres statistiques LMS officiels de l\'OMS pour afficher le score Z et le percentile estimé.',
        'La sélection s\'effectuant au mois entier le plus proche des tables officielles, un léger écart peut exister face aux logiciels médicalisés interpolant à l\'âge exact en jours.',
        'Une mesure ponctuelle sur internet ne remplace jamais le suivi pédiatrique régulier incluant poids, périmètre crânien, alimentation et cinétique complète de la courbe.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة LMS لتحويل قياسات الرضيع إلى درجة Z والمئين',
      fr: 'Méthode statistique LMS des courbes OMS (Score Z & Percentile)',
    },
    formulaText: {
      ar: 'درجة Z = [ (القياس ÷ M)^L − 1 ] ÷ (L × S) اعتمادا على جدول WHO لأقرب شهر، ثم تحول القيمة إلى مئين تقريبي لتوضيح موقع القياس مقارنة بالأقران.',
      fr: 'Z = [ (Mesure ÷ M)^L − 1 ] ÷ (L × S) selon les paramètres officiels LMS de l\'OMS au mois le plus proche, converti ensuite en percentile indicatif.',
    },
    practicalExample: {
      title: {
        ar: 'مثال متابعة رضيع عمره 6 أشهر قبل فحص التلقيح',
        fr: 'Exemple pour un nourrisson de 6 mois avant la visite vaccinale',
      },
      scenario: {
        ar: 'أم تدخل عمر 6 أشهر، الطول مستلقيا 67.5 سم، والوزن الاختياري 7.8 كغ لمتابعة مسار النمو.',
        fr: 'Suivi d\'un garçon de 6 mois mesurant 67,5 cm couché pour un poids de 7,8 kg.',
      },
      result: {
        ar: 'تظهر درجة Z والمئين التقريبي قرب المتوسط المرجعي لـ WHO، مع تنبيه بمقارنة القراءة مع قياسات الأشهر السابقة في الدفتر الصحي.',
        fr: 'Le score Z proche de 0 et le percentile autour de la médiane OMS offrent un repère clair à reporter dans le carnet de santé.',
      },
    },
    tips: {
      ar: [
        'احرص على قياس طول الرضيع مستلقيا على ظهره حتى بلوغ 24 شهرا على سطح مستو وثابت.',
        'تابع القراءات المتكررة كل زيارة صحية بدلا من القلق بسبب قراءة منفردة.',
        'اربط متابعة النمو في الدفتر الصحي الجزائري بمتابعة جدول اللقاحات الوطنية 2026.',
        'اعرض أي تغير مفاجئ أو انحراف في منحنى الوزن أو الطول على طبيب الأطفال مباشرة.',
      ],
      fr: [
        'Mesurez toujours le nourrisson allongé sur le dos avant l\'âge de 2 ans.',
        'Privilégiez le suivi de l\'allure générale de la courbe dans le temps plutôt qu\'un point isolé.',
        'Complétez ce suivi avec notre outil dédié au calendrier national de vaccination pédiatrique.',
        'Consultez rapidement un pédiatre en cas de cassure ou décélération de la courbe de croissance.',
      ],
    },
    extraFaqs: [],
  },

  'medication-tracker': {
    quickSummary: {
      targetAudience: {
        ar: 'الأسر والمرضى وكبار السن الراغبون في تنظيم علاجات حتى 3 أفراد',
        fr: 'Familles et patients organisant jusqu\'à 3 profils de traitements locaux',
      },
      processingTime: {
        ar: 'تسجيل فوري للجرعات وتحديث الحالة مع تقرير مستقل لكل فرد',
        fr: 'Suivi instantané des prises et rapport séparé par profil',
      },
      fees: {
        ar: 'مجاني مع تخزين محلي وتصدير/دمج JSON',
        fr: 'Gratuit avec stockage local et sauvegarde JSON sans serveur',
      },
      channel: {
        ar: 'تطبيق محلي في المتصفح (التنبيهات أثناء بقاء الصفحة مفتوحة فقط)',
        fr: 'Outil web local (alertes actives uniquement page ouverte)',
      },
      keyRequirement: {
        ar: 'اتباع وصفة الطبيب والصيدلي فقط وعدم تعديل أو تعويض الجرعة ذاتيا',
        fr: 'Respect strict de l\'ordonnance — ne jamais ajuster ou doubler une dose',
      },
    },
    explanation: {
      ar: [
        'تقدم أداة متابعتي للأدوية منظما محليا آمنا لإدارة العلاجات اليومية ومواعيد الجرعات لما يصل إلى ثلاثة ملفات مستقلة لأفراد العائلة، حيث يحتفظ كل فرد بسجله وأدويته وتقاريره دون أي اختلاط بين البيانات.',
        'تسمح الواجهة بإضافة كل دواء وتوقيته كما ورد في وصفة الطبيب أو الصيدلي، وتسجيل الجرعات المنفذة أو الفائتة مع إمكانية تصحيح حالة الجرعة الفائتة إلى «تم تناولها» والاحتفاظ بتاريخ التعديل بدقة.',
        'تحفظ جميع السجلات داخل متصفح جهازك فقط دون إرسال أي معطيات صحية عبر الشبكة، مع ميزة النسخ الاحتياطي JSON التي تدمج السجلات الجديدة بالمعرفات الفريدة دون استبدال البيانات الحالية ضمن حد الثلاثة ملفات.',
        'تنبيه أمان وتشغيل مهم: هذه أداة تنظيم وتذكير فقط وليست وصفة طبية؛ لا تغير الجرعة أو تعوض جرعة فائتة اعتمادا على الأداة، كما أن التنبيهات الصريحة لا تعمل إلا أثناء بقاء الصفحة مفتوحة ولا تضمن إشعارات عند إغلاق المتصفح أو الجهاز.'
      ],
      fr: [
        'L\'outil « Suivi des Médicaments » organise en local les prescriptions et horaires de prises jusqu\'à trois profils familiaux distincts, garantissant une séparation stricte entre les dossiers et rapports de chaque proche.',
        'Vous y enregistrez chaque traitement selon l\'ordonnance, validez les doses du jour et pouvez corriger un statut « oubliée » vers « prise effectuée » avec horodatage conservé.',
        'Toutes les données restent strictement dans la mémoire locale de votre navigateur avec export JSON et réimportation par fusion sur identifiants uniques (dans la limite des 3 profils).',
        'Rappel crucial : cet outil organisationnel ne remplace ni l\'ordonnance ni le conseil du pharmacien — ne modifiez ou ne doublez jamais une dose seul, et sachez que les rappels navigateur nécessitent que la page reste ouverte.'
      ],
    },
    formulaTitle: {
      ar: 'ضوابط العزل بين الملفات الثلاثة والنسخ الاحتياطي بالدمج',
      fr: 'Isolation des 3 profils et sauvegarde JSON par fusion',
    },
    formulaText: {
      ar: 'يتسع التطبيق لحد أقصى قدره 3 ملفات مستقلة؛ يولد لكل سجل معرف فريد لتفادي الكتابة فوق البيانات عند الاستيراد، وتحسب تقارير الالتزام لكل ملف على حدة.',
      fr: 'Maximum 3 profils isolés ; chaque traitement porte un identifiant unique facilitant le suivi individuel et la fusion non destructive des sauvegardes JSON.',
    },
    practicalExample: {
      title: {
        ar: 'مثال متابعة علاجين لوالدين في جهاز عائلي واحد',
        fr: 'Exemple de suivi de deux traitements familiaux distincts',
      },
      scenario: {
        ar: 'إنشاء ملف للأب وآخر للأم وإدخال مواعيد الأدوية الصباحية والمسائية وفق الوصفة الطبية.',
        fr: 'Création de deux profils séparés pour suivre les prises du matin et du soir selon leurs ordonnances respectives.',
      },
      result: {
        ar: 'يعرض تقرير كل ملف نسبة الجرعات المنفذة والفائتة بشكل مستقل، مع إمكانية تنزيل نسخة احتياطية قبل تحديث الجهاز.',
        fr: 'Chaque profil dispose de son propre bilan de prises validées et oubliées, exportable à tout moment au format JSON.',
      },
    },
    tips: {
      ar: [
        'ادخل اسم الدواء وجرعته وتوقيته طبقا للوصفة الطبية المكتوبة أو إرشاد الصيدلي.',
        'لا تعوض الجرعة الفائتة أبدا بمضاعفة الجرعة التالية قبل سؤال الطبيب أو الصيدلي.',
        'نزل نسخة احتياطية JSON دوريا لحفظ سجل الجرعات والتاريخ العلاجي بأمان.',
        'لا تعتمد على تنبيهات المتصفح وحدها إذا أغلقت التطبيق؛ استعن بمنبه الهاتف للمواعيد الحساسة.',
      ],
      fr: [
        'Recopiez fidèlement les dosages et horaires figurant sur votre ordonnance médicale.',
        'En cas d\'oubli, ne doublez jamais la dose suivante sans avis médical ou pharmaceutique.',
        'Téléchargez régulièrement votre fichier JSON de sauvegarde pour préserver l\'historique.',
        'Pour les prises critiques, complétez par une alarme système si vous fermez le navigateur.',
      ],
    },
    extraFaqs: [],
  },

  'nutrition-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون (18 سنة فما فوق) لتقدير TDEE وتوزيع البروتين والكارب والدهون',
        fr: 'Adultes (18 ans+) calculant TDEE, IMC, macros et répartition des repas',
      },
      processingTime: {
        ar: 'تقدير فوري للماكروز بالجرام والسعرات مع خطة وجبات إرشادية',
        fr: 'Calcul instantané des macros en grammes et plan alimentaire indicatif',
      },
      fees: {
        ar: 'مجاني بالكامل مع دليل المصادر الغذائية الصحية',
        fr: 'Gratuit avec guide des sources alimentaires saines',
      },
      channel: {
        ar: 'أداة تغذية تفاعلية للبالغين (تستثني الحمل والمرض المزمن دون مختص)',
        fr: 'Outil web local réservé aux adultes en bonne santé',
      },
      keyRequirement: {
        ar: 'العمر (18+)، الوزن، الطول، النشاط البدني، الهدف الغذائي، وعدد الوجبات',
        fr: 'Âge (18+), poids, taille, activité physique, objectif et nombre de repas',
      },
    },
    explanation: {
      ar: [
        'تحسب أداة التغذية والوجبات الذكية احتياجك اليومي المستهدف من السعرات الحرارية ومعدل استهلاك الطاقة اليومي (TDEE) ومعدل الأيض الأساسي (BMR) ومؤشر كتلة الجسم، مع تحويل حصص البروتين والكربوهيدرات والدهون إلى جرامات وسعرات واضحة.',
        'تتيح الواجهة اختيار الهدف الغذائي (حفاظ، إنقاص تدريجي، أو بناء) وضبط عدد الوجبات اليومية للحصول على توزيع إرشادي مرن يمكن تعديله بحرية حسب ظروف يومك وعملك.',
        'كما ترافق الحاسبة توصيات غذائية مخصصة لهدفك ودليل للمصادر الغذائية الصحية (مع التنبيه إلى أن القيم الغذائية للأطعمة تقريبية وتختلف بحسب حجم الحصة وطريقة الطهي والتحضير).',
        'تنبيه مهم: هذه الحسابات تقديرية للبالغين من 18 سنة فما فوق وليست نصيحة طبية شخصية؛ ففي حالات الحمل والرضاعة أو الأمراض المزمنة أو الحاجة لنظام علاجي يجب استشارة طبيب أو أخصائي تغذية.'
      ],
      fr: [
        'Le calculateur de nutrition et macros évalue votre métabolisme basal (BMR), votre dépense énergétique journalière (TDEE), votre IMC ainsi que vos objectifs en protéines, glucides et lipides exprimés en grammes et calories.',
        'Vous personnalisez votre objectif et votre nombre de repas pour générer un plan de répartition souple accompagné de conseils adaptés et d\'un guide des sources alimentaires équilibrées.',
        'Les valeurs nutritionnelles présentées dans le répertoire alimentaire restent indicatives et varient selon la taille des portions et le mode de préparation.',
        'Avertissement : ces repères s\'adressent exclusivement aux adultes de 18 ans et plus sans pathologie particulière ; en cas de grossesse, allaitement ou maladie chronique, sollicitez un avis médical.'
      ],
    },
    formulaTitle: {
      ar: 'ربط TDEE بحصص الماكروز وتوزيع الوجبات',
      fr: 'Calcul BMR/TDEE et conversion en macronutriments',
    },
    formulaText: {
      ar: 'تحسب الطاقة المستهدفة انطلاقا من BMR مضروبا في معامل النشاط وتعديل الهدف، ثم تقسم بنسبة 4 سعرات/غ للبروتين والكارب و9 سعرات/غ للدهون على عدد الوجبات المختار.',
      fr: 'La cible calorique issue du TDEE ajusté est répartie entre protéines/glucides (4 kcal/g) et lipides (9 kcal/g) puis divisée selon le nombre de repas choisi.',
    },
    practicalExample: {
      title: {
        ar: 'مثال توزيع 2,200 سعرة يومية على 3 وجبات رئيسية ووجبة خفيفة',
        fr: 'Exemple de répartition sur 2 200 kcal par jour',
      },
      scenario: {
        ar: 'شخص بالغ يستهدف الحفاظ على لياقته باختيار 25% بروتين، 50% كربوهيدرات، و25% دهون صحية.',
        fr: 'Un adulte visant l\'équilibre choisit une répartition 25 % protéines, 50 % glucides et 25 % lipides.',
      },
      result: {
        ar: 'يقترح النظام حوالي 138 غ بروتين، 275 غ كارب، و61 غ دهون موزعة بمرونة على الوجبات اليومية ودليل مصادرها الطبيعية.',
        fr: 'L\'outil indique environ 138 g de protéines, 275 g de glucides et 61 g de lipides à répartir souplement sur la journée.',
      },
    },
    tips: {
      ar: [
        'اعتبر توزيع الوجبات المقترح مرشدا عمليا قابلا للتعديل حسب أوقات العمل أو الدراسة.',
        'اختر مصادر طبيعية متنوعة للبروتين والكربوهيدرات المعقدة والدهون المفيدة (زيت الزيتون، المكسرات، الأسماك).',
        'استعن بأداة السعرات أثناء الحمل إذا كنت تتابعين التغذية خلال أشهر الحمل بدلا من الحاسبة العامة.',
        'تذكر أن طريقة الطهي (الشوي والسلق مقابل القلي) تغير المحتوى الحراري للوجبة بشكل كبير.',
      ],
      fr: [
        'Ajustez les créneaux horaires de vos repas en fonction de votre rythme professionnel ou universitaire.',
        'Privilégiez des aliments peu transformés et des cuissons douces (vapeur, four, grill).',
        'Pendant la grossesse, basculez vers le calculateur nutritionnel dédié aux trimestres.',
        'Hydratez-vous suffisamment en complément à l\'aide du calculateur d\'eau quotidienne.',
      ],
    },
    extraFaqs: [],
  },

  'pilgrim-health-checklist': {
    quickSummary: {
      targetAudience: {
        ar: 'الحجاج والمعتمرون الجزائريون وذوو الأمراض المزمنة قبل السفر للبقاع المقدسة',
        fr: 'Pèlerins algériens (Hadj et Omra) et patients chroniques préparant le départ',
      },
      processingTime: {
        ar: 'متابعة فورية وتأشير تفاعلي على 12 بند استعداد صحي',
        fr: 'Suivi instantané interactif sur 12 points de préparation médicale',
      },
      fees: {
        ar: 'أداة تنظيمية مجانية تحفظ تقدمك محليا دون خوادم',
        fr: 'Gratuit avec progression conservée en local sans serveur',
      },
      channel: {
        ar: 'قائمة تحقق تنظيمية للملقحات والوثائق والأدوية والوقاية من الحر',
        fr: 'Check-list pratique : vaccins, ordonnances, trousse médicale et chaleur',
      },
      keyRequirement: {
        ar: 'مراجعة الطبيب واللجنة الطبية الولائية وعدم تجاهل علامات الإجهاد الحر',
        fr: 'Visite médicale obligatoire — consulter d\'urgence en cas de malaise thermique',
      },
    },
    explanation: {
      ar: [
        'تساعد قائمة الاستعداد الصحي للحج (المكونة من 12 بندا عمليا قابلة للتأشير والتعديل) الحجاج والمعتمرين على تنظيم كافة التحضيرات الطبية قبل موعد السفر إلى البقاع المقدسة.',
        'تغطي القائمة الجوانب الأساسية: التلقيحات الإجبارية والدفتر الصحي، تجهيز تقارير طبية محدثة وكمية كافية من الأدوية المزمنة، حقيبة الإسعافات، الأحذية المريحة، ومعدات الوقاية من الشمس والحر.',
        'نؤكد أن هذه القائمة للتنظيم والتوعية فقط ولا تستبدل الفحص والتقييم الطبي الرسمي قبل الرحلة؛ ففي حالات الأمراض المزمنة مثل السكري والضغط والقلب، لا بد من مناقشة خطة السفر والأدوية والمشي مع طبيبك المعالج مسبقا.',
        'أثناء أداء المناسك، خطط لفترات راحة منتظمة واشرب الماء باعتدال وتجنب أشد ساعات الحرارة، واطلب المساعدة الطبية فورا عند ضيق التنفس أو ألم الصدر أو الإغماء أو الارتباك دون محاولة إكمال الشعائر قبل الفحص.'
      ],
      fr: [
        'La check-list santé du pèlerin regroupe 12 étapes essentielles et interactives pour aider les futurs pèlerins du Hadj et de la Omra à préparer sereinement leur dossier médical et leurs effets de santé avant le départ.',
        'Elle couvre les vaccins obligatoires et le carnet sanitaire, la réserve suffisante de traitements chroniques avec ordonnances traduites, la trousse de secours, les chaussures adaptées et la protection solaire.',
        'Outil exclusivement organisationnel et éducatif, cette liste ne remplace pas la visite d\'aptitude médicale ni la consultation préalable de votre médecin traitant en cas de pathologie chronique.',
        'Sur place, aménagez des pauses régulières, évitez les heures de forte chaleur et sollicitez immédiatement un secours médical face à un essoufflement, douleur thoracique, malaise ou confusion.'
      ],
    },
    formulaTitle: {
      ar: 'محاور الجاهزية الصحية الـ 12 قبل وبعد الوصول للبقاع المقدسة',
      fr: 'Les 4 piliers des 12 points de préparation du pèlerin',
    },
    formulaText: {
      ar: 'تقسم البنود الاثنا عشر إلى اللقاحات والوثائق الرسمية (3 بنود)، الأدوية وحقيبة الإسعاف (3 بنود)، الحماية من الحر والحذاء الطبي (4 بنود)، وبطاقة التعريف ومواقع العيادات (بندان).',
      fr: 'Les 12 repères couvrent : vaccins et dossier sanitaire (3), traitements chroniques et secours (3), protection chaleur/marche (4) et repérage d\'urgence (2).',
    },
    practicalExample: {
      title: {
        ar: 'مثال تحضير ملف حاج يعاني من السكري أو ارتفاع الضغط',
        fr: 'Exemple de préparation d\'un pèlerin diabétique ou hypertendu',
      },
      scenario: {
        ar: 'حاج جزائري يراجع طبيبه قبل السفر بشهر لاستخراج التقارير وتعديل خطة الجرعات والتلقيحات.',
        fr: 'Un pèlerin consulte son médecin un mois avant le départ pour actualiser ses ordonnances et recevoir ses vaccins.',
      },
      result: {
        ar: 'باستكمال التأشير على جميع البنود الـ 12 وتجهيز الأدوية في حقيبة اليد أثناء الرحلة، يتفادى الحاج نسيان وثائقه أو نقص علاجه في المناسك.',
        fr: 'En validant les 12 points (avec les traitements conservés en bagage cabine), il sécurise son voyage et limite les risques liés à la chaleur.',
      },
    },
    tips: {
      ar: [
        'احتفظ بأدويتك المزمنة وتقاريرك الطبية في حقيبة اليد داخل الطائرة لا في الأمتعة المشحونة.',
        'احرص على أخذ لقاح الحمى الشوكية ACWY والإنفلونزا والدفتر الصحي من المركز الطبي الولائي في الآجال المحددة.',
        'استعمل المظلة البيضاء وحذاء طبيا لينا واسترح في الظل خلال ذروة الحر ولا تجهد نفسك في المشي المتواصل.',
        'عند أي دوار أو إغماء أو ألم في الصدر أو ضيق تنفس، توقف فورا واطلب العيادة أو بعثة الطوارئ.',
      ],
      fr: [
        'Gardez toujours vos médicaments vitaux et ordonnances en bagage à main dans l\'avion.',
        'Effectuez vos vaccins (méningocoque ACWY, grippe) dans les délais requis auprès des centres agréés.',
        'Portez des chaussures déjà rodées et reposez-vous aux heures les plus chaudes.',
        'Ne forcez jamais pour poursuivre un rite en cas de malaise, fièvre, douleur thoracique ou confusion.',
      ],
    },
    extraFaqs: [],
  },
};
