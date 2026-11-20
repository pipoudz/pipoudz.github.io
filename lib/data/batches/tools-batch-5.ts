import { ToolItem, ToolRichGuide } from '@/lib/types';

export const batch5Tools: ToolItem[] = [
  {
    id: 'tool-prediabetes',
    slug: 'prediabetes-risk',
    category: 'health',
    name: {
      ar: 'اختبار تقييم خطر ما قبل السكري (معيار CDC التوعوي)',
      fr: 'Test de Sensibilisation au Risque de Prédiabète (Score CDC)',
    },
    description: {
      ar: 'أجب عن أسئلة توعوية حول العمر والوزن والضغط والتاريخ العائلي لتقدير عوامل خطر ما قبل السكري وفق معايير CDC، مع التأكيد أن النتيجة إرشادية ولا تغني عن تحليل الدم الطبي.',
      fr: 'Évaluez les principaux facteurs de risque du prédiabète (âge, IMC, antécédents familiaux, tension, activité physique) selon la grille éducative CDC, sans valeur de diagnostic médical.',
    },
    iconName: 'Activity',
    references: [
      {
        label: {
          ar: 'CDC: آلية احتساب نقاط اختبار خطر ما قبل السكري',
          fr: 'CDC : Comment votre score de risque est calculé',
        },
        url: 'https://www.cdc.gov/diabetes/widgets/risktest/how-your-test-is-scored.html',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يغني اختبار خطر ما قبل السكري عن تحليل الدم في المخبر؟',
          fr: 'Ce test remplace-t-il une prise de sang en laboratoire ?',
        },
        answer: {
          ar: 'لا؛ هذا الاستبيان أداة توعوية لتقدير عوامل الخطر العامة لدى البالغين وليس تحليل دم ولا تشخيصا طبيا، ويبقى الفحص المخبري مثل السكر الصائم أو التراكمي المرجع الوحيد المؤكد.',
          fr: 'Non ; ce questionnaire estime uniquement les facteurs de risque chez l\'adulte sans remplacer un dosage sanguin (glycémie à jeun ou HbA1c) prescrit par un médecin.',
        },
      },
      {
        question: {
          ar: 'ماذا يعني الحصول على مجموع نقاط مرتفع وفق منهجية CDC؟',
          fr: 'Que signifie un score élevé selon la méthode du CDC ?',
        },
        answer: {
          ar: 'يشير ارتفاع النقاط وفق طريقة CDC المعتمدة هنا إلى وجود عوامل تستدعي مناقشة إجراء فحص مخبري مبكر مع الطبيب المعالج لتقييم الحالة بدقة.',
          fr: 'Un score élevé selon la grille CDC signale une probabilité accrue justifiant d\'aborder un dépistage biologique avec votre médecin traitant.',
        },
      },
      {
        question: {
          ar: 'هل تعني النتيجة المنخفضة انعدام خطر الإصابة بالسكري؟',
          fr: 'Un score faible garantit-il l\'absence totale de risque glycémique ?',
        },
        answer: {
          ar: 'لا؛ فالنتيجة المنخفضة لا تلغي العوامل الفردية ولا تغني عن الفحص الطبي الدوري عند ظهور أعراض مثل العطش الشديد أو وجود توصية من الطبيب.',
          fr: 'Non ; un faible score n\'écarte pas un suivi médical si vous présentez des symptômes cliniques ou une recommandation de dépistage personnalisée.',
        },
      },
      {
        question: {
          ar: 'هل تحفظ إجاباتي وقياسات الطول والوزن على الموقع؟',
          fr: 'Mes réponses et mensurations sont-elles enregistrées sur un serveur ?',
        },
        answer: {
          ar: 'لا ترسل إجاباتك إلى أي خادم خارجي ولا تحفظ على الموقع، إذ تتم عملية جمع النقاط وتقدير فئة مؤشر كتلة الجسم محليا بالكامل في متصفحك.',
          fr: 'Non, aucune donnée n\'est transmise ou conservée en ligne : le calcul des points et de l\'IMC s\'exécute exclusivement dans votre navigateur.',
        },
      },
    ],
  },
  {
    id: 'tool-pregnancy-cal',
    slug: 'pregnancy-calorie-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة السعرات الحرارية والتغذية أثناء الحمل',
      fr: 'Calculateur de Besoins Caloriques Pendant la Grossesse',
    },
    description: {
      ar: 'قدري الاحتياج اليومي التقريبي من السعرات الحرارية للحمل المفرد حسب الثلث (الأول، الثاني، الثالث) انطلاقا من سعرات خط الأساس قبل الحمل، مع إرشادات التغذية المتوازنة.',
      fr: 'Estimez l\'apport énergétique journalier indicatif d\'une grossesse unique selon le trimestre et votre besoin de base préalable, en privilégiant la qualité nutritionnelle.',
    },
    iconName: 'HeartPulse',
    references: [
      {
        label: {
          ar: 'MedlinePlus: التغذية الصحية أثناء الحمل',
          fr: 'MedlinePlus : Grossesse et Nutrition',
        },
        url: 'https://medlineplus.gov/pregnancyandnutrition.html',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تمنح الحاسبة خطة غذائية دقيقة تصلح لجميع الحوامل؟',
          fr: 'Cette estimation calorique convient-elle à toutes les femmes enceintes ?',
        },
        answer: {
          ar: 'لا؛ هي تقدير حسابي عام للحمل المفرد فقط، ويجب أن يحدد الطبيب أو اختصاصي التغذية الاحتياج الفعلي حسب الوزن قبل الحمل، النشاط البدني، زيادة الوزن، والحالة الصحية.',
          fr: 'Non ; il s\'agit d\'un repère général pour une grossesse simple. Seul le médecin ou diététicien adapte les apports selon le poids initial, l\'activité et l\'état clinique.',
        },
      },
      {
        question: {
          ar: 'لماذا لا تضاف سعرات ثابتة غالبا خلال الثلث الأول من الحمل؟',
          fr: 'Pourquoi n\'ajoute-t-on généralement pas de supplément calorique au 1er trimestre ?',
        },
        answer: {
          ar: 'توضح المراجع الطبية العامة أن الزيادة السعرية غالبا لا تكون ضرورية في الثلث الأول حيث يركز التوجيه على جودة المغذيات، مع مراعاة اختلاف الغثيان والشهية من سيدة لأخرى.',
          fr: 'Les recommandations générales n\'ajoutent habituellement pas de calories fixes au premier trimestre et privilégient la densité nutritionnelle, selon la tolérance et les nausées.',
        },
      },
      {
        question: {
          ar: 'في أي حالات يجب عدم الاعتماد على هذه الحاسبة العامة؟',
          fr: 'Dans quelles situations médicales éviter de se fier à ce simulateur général ?',
        },
        answer: {
          ar: 'لا ينبغي الاعتماد على الأرقام القياسية للحمل المتعدد (التوأم)، سكري الحمل، فقدان الوزن غير المبرر، أو القيء الحمل الشديد؛ بل يجب اتباع خطة الفريق الطبي المتابع.',
          fr: 'En cas de grossesse gémellaire ou multiple, de diabète gestationnel, de perte de poids ou d\'hyperémèse gravidique sévère, suivez strictement le protocole médical prescrit.',
        },
      },
    ],
  },
  {
    id: 'tool-pregnancy-due',
    slug: 'pregnancy-due-date',
    category: 'health',
    name: {
      ar: 'حاسبة موعد الولادة المتوقع وأسابيع الحمل',
      fr: 'Calculateur de Date Prévue d\'Accouchement & Âge Gestationnel',
    },
    description: {
      ar: 'احسبي التاريخ المتوقع للولادة وعمر الحمل بالأسابيع مبدئيا انطلاقا من اليوم الأول لآخر دورة شهرية (بمتوسط 280 يوما / 40 أسبوعا)، مع توضيح دور الفحص المبكر بالموجات فوق الصوتية.',
      fr: 'Estimez la date probable d\'accouchement et la semaine d\'aménorrhée à partir du premier jour des dernières règles (environ 280 jours / 40 semaines), à confirmer par échographie.',
    },
    iconName: 'Heart',
    faqs: [
      {
        question: {
          ar: 'هل التاريخ المعروض يمثل يوم الولادة المؤكد؟',
          fr: 'La date calculée garantit-elle le jour exact de la naissance ?',
        },
        answer: {
          ar: 'لا؛ إنه تقدير أولي ومرجع زمني لتنظيم المتابعة الصحية، وقد يختلف الموعد الفعلي بحسب طول الدورة، تاريخ الإباضة، ونتائج الفحص المبكر بالموجات فوق الصوتية.',
          fr: 'Non ; c\'est un repère chronologique de suivi prénatal susceptible d\'être ajusté selon la durée réelle du cycle et surtout l\'échographie de datation précoce.',
        },
      },
      {
        question: {
          ar: 'ما تاريخ البداية الصحيح الذي تعتمد عليه الحاسبة؟',
          fr: 'Quelle date faut-il saisir exactement dans le calculateur ?',
        },
        answer: {
          ar: 'تعتمد الحاسبة على اليوم الأول لبدء آخر دورة شهرية وليس آخر يوم للنزف، وتضيف إليه قرابة 280 يوما أي ما يعادل 40 أسبوعا من عمر الحمل.',
          fr: 'Saisissez impérativement le premier jour des dernières règles (et non la fin des saignements) ; l\'outil ajoute environ 280 jours, soit 40 semaines.',
        },
      },
      {
        question: {
          ar: 'متى تقل دقة الحساب الزمني التقليدي وتزداد الحاجة للتصوير الطبي؟',
          fr: 'Quand le calcul d\'après les règles est-il moins précis ?',
        },
        answer: {
          ar: 'تقل الدقة إذا كانت الدورة الشهرية غير منتظمة، أو عند عدم تذكر تاريخ آخر دورة بدقة، أو في حال حدوث الحمل مباشرة بعد إيقاف وسيلة منع حمل هرمونية؛ وهنا يؤكد الطبيب العمر عبر الإيكوغرافي، كما يجب استشارة المختص فورا عند أي ألم أو نزيف.',
          fr: 'Sa précision diminue en cas de cycles irréguliers, de date incertaine ou juste après l\'arrêt d\'une contraception hormonale ; une échographie précoce précise alors le terme. Consultez d\'urgence en cas de douleur ou saignement.',
        },
      },
    ],
  },
  {
    id: 'tool-sleep',
    slug: 'sleep-assessment',
    category: 'health',
    name: {
      ar: 'تقييم النوم التوعوي ومؤشر جودة الراحة الليلية',
      fr: 'Auto-Évaluation Éducative des Habitudes de Sommeil',
    },
    description: {
      ar: 'أجب عن ثمانية أسئلة حول نمط وعادات النوم خلال الشهر الماضي للحصول على مؤشر توعوي مبدئي ونصائح عملية لتحسين روتين النوم والانتباه لعلامات استشارة المختص.',
      fr: 'Répondez à 8 questions sur votre rythme de sommeil au cours des 30 derniers jours pour obtenir un indicateur éducatif et des pistes d\'hygiène nocturne non diagnostiques.',
    },
    iconName: 'Moon',
    faqs: [
      {
        question: {
          ar: 'ما المحاور التي يتناولها تقييم النوم التوعوي؟',
          fr: 'Qu\'évalue exactement ce questionnaire en huit points ?',
        },
        answer: {
          ar: 'يتناول ثمانية أسئلة مركزة حول انتظام النوم وجودته وتكرار الاستيقاظ وأثره على التركيز خلال النهار خلال الشهر الماضي بهدف رفع الوعي بالعادات اليومية.',
          fr: 'Il passe en revue 8 aspects liés à l\'endormissement, la continuité nocturne et la somnolence diurne sur le dernier mois afin d\'éclairer vos habitudes.',
        },
      },
      {
        question: {
          ar: 'هل تغني نتيجة التقييم عن فحص أسباب الأرق أو الشخير لدى الطبيب؟',
          fr: 'Ce bilan suffit-il face à une insomnie chronique ou des ronflements ?',
        },
        answer: {
          ar: 'لا؛ النتيجة مؤشر توعوي مبني على الإجابات فقط ولا تغني إطلاقا عن استقصاء التاريخ الصحي أو فحص أسباب الأرق والتعب واضطرابات التنفس الليلي لدى مختص.',
          fr: 'Non ; c\'est un repère de sensibilisation qui ne remplace jamais un interrogatoire médical ou un bilan spécialisé de l\'insomnie ou de l\'apnée du sommeil.',
        },
      },
      {
        question: {
          ar: 'ما الخطوات العملية المبدئية لتحسين روتين النوم قبل الموعد الطبي؟',
          fr: 'Comment agir concrètement avant une consultation ?',
        },
        answer: {
          ar: 'ثبت مواعيد النوم والاستيقاظ، قلل المنبهات والتعرض للشاشات والضوء الساطع مساء، وسجل الأعراض بدقة لعرضها على الطبيب إذا استمرت الصعوبة.',
          fr: 'Régularisez vos horaires de coucher, limitez caféine et écrans le soir, et tenez un journal de sommeil à partager avec votre médecin.',
        },
      },
      {
        question: {
          ar: 'متى يجب طلب التقييم الطبي المتخصص بصورة عاجلة؟',
          fr: 'Quels signes imposent un avis médical rapide ?',
        },
        answer: {
          ar: 'اطلب التقييم عند استمرار الأرق أسابيع، النعاس الشديد نهارا، الشخير المصحوب بتوقف التنفس الملاحظ، أو تأثير قلة النوم على السلامة أثناء القيادة والعمل.',
          fr: 'Consultez rapidement en cas de somnolence diurne sévère, de pauses respiratoires nocturnes décrites par l\'entourage ou de risque au volant et au travail.',
        },
      },
    ],
  },
  {
    id: 'tool-vaccine',
    slug: 'vaccine-tracker',
    category: 'health',
    name: {
      ar: 'متابعة تلقيح الأطفال في الجزائر (مرجع الدفتر الصحي 2026)',
      fr: 'Suivi du Calendrier National de Vaccination Pédiatrique en Algérie (2026)',
    },
    description: {
      ar: 'احسب المواعيد المرجعية لتلقيح الأطفال في الجزائر انطلاقا من تاريخ الميلاد اعتمادا على رزنامة 2023 والتعديل الصادر في الجريدة الرسمية رقم 36 لسنة 2026، مع حفظ محلي ونسخ احتياطي.',
      fr: 'Calculez les âges clés de vaccination infantile en Algérie depuis la date de naissance (référentiel 2023 mis à jour par le Journal Officiel N° 36 de 2026), avec sauvegarde locale et export.',
    },
    iconName: 'Syringe',
    references: [
      {
        label: {
          ar: 'الاطلاع على الجريدة الرسمية رقم 36 لسنة 2026',
          fr: 'Consulter le Journal Officiel Algérie N° 36 de 2026 (PDF)',
        },
        url: 'https://www.joradp.dz/FTP/jo-francais/2026/F2026036.pdf',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تغني متابعة الجرعات في الأداة عن دفتر صحة الطفل والمركز الصحي؟',
          fr: 'Ce suivi numérique remplace-t-il le carnet de santé officiel et la PMI ?',
        },
        answer: {
          ar: 'لا؛ هذه أداة تذكير تنظيمية فقط وليست تشخيصا أو خطة استدراك، كما أن تأشير الجرعة من المستخدم لا يعد إثباتا طبيا مستقلا، ويبقى الدفتر الصحي وعيادة التلقيح المرجع الرسمي الوحيد.',
          fr: 'Non ; c\'est un pense-bête organisationnel sans valeur de justificatif médical ni de schéma de rattrapage. Confirmez chaque injection auprès du centre de santé et sur le carnet papier.',
        },
      },
      {
        question: {
          ar: 'ما المرجع التنظيمي المعتمد في تواريخ اللقاحات المعروضة؟',
          fr: 'Sur quel texte réglementaire reposent les tranches d\'âge affichées ?',
        },
        answer: {
          ar: 'تعتمد الأداة على رزنامة التلقيح الوطنية لسنة 2023 مع التعديل المنشور سنة 2026 في الجريدة الرسمية رقم 36، مع التنبيه لاحتمال وجود حملات وطنية أو تعليمات استدراك خاصة يحددها المركز الصحي.',
          fr: 'L\'outil s\'appuie sur le calendrier vaccinal algérien 2023 actualisé en 2026 (Journal Officiel N° 36), sous réserve de campagnes nationales ou d\'ajustements locaux de votre secteur sanitaire.',
        },
      },
      {
        question: {
          ar: 'أين تحفظ بيانات تاريخ الميلاد والجرعات المؤشرة وكيف أحتفظ بنسخة؟',
          fr: 'Où sont stockées les dates enregistrées et comment les sauvegarder ?',
        },
        answer: {
          ar: 'يحفظ سجل الميلاد والجرعات محليا داخل هذا المتصفح فقط دون رفع لأي خادم؛ لذا ينصح بتصدير نسخة احتياطية بانتظام عبر زر التصدير للاحتفاظ بها أو نقلها لجهاز آخر.',
          fr: 'L\'historique reste stocké exclusivement en local dans votre navigateur : utilisez la fonction d\'export pour conserver une copie de sauvegarde sur votre appareil.',
        },
      },
    ],
  },
  {
    id: 'tool-vision',
    slug: 'visual-acuity-screening',
    category: 'health',
    name: {
      ar: 'اختبار حدة البصر التقريبي عبر الشاشة',
      fr: 'Test Télémétrique Approximatif d\'Acuité Visuelle à l\'Écran',
    },
    description: {
      ar: 'جرّب مؤشرا تقريبيا لحدة البصر على الشاشة عبر اختبار كل عين على حدة في إضاءة جيدة وثبات تكبير المتصفح، مع بيان حدود دقة الأجهزة وعدم جواز استخدامه لوصف النظارات.',
      fr: 'Réalisez un repérage visuel indicatif œil par œil à l\'écran en respectant distance et zoom standard (100 %), sans jamais l\'utiliser pour prescrire des verres correcteurs.',
    },
    iconName: 'Eye',
    faqs: [
      {
        question: {
          ar: 'لماذا لا يساوي اختبار الشاشة فحص النظر عند طبيب العيون؟',
          fr: 'Pourquoi un test à l\'écran ne vaut-il pas un examen ophtalmologique ?',
        },
        answer: {
          ar: 'لأن دقة العرض عبر الهاتف أو الحاسوب تتأثر بمقاس الشاشة، السطوع، الإضاءة المحيطة، المسافة الفعلية، وإعدادات تكبير المتصفح؛ لذا فهو مؤشر تقريبي لا يصف النظارات ولا يستبعد أمراض العين.',
          fr: 'La précision d\'un écran dépend de sa résolution, de la distance réelle, du zoom et de l\'éclairage : ce repérage indicatif ne permet ni prescription optique ni dépistage pathologique.',
        },
      },
      {
        question: {
          ar: 'كيف أجري الفحص التوعوي بصورة صحيحة قدر الإمكان؟',
          fr: 'Quelles conditions respecter durant ce test indicatif ?',
        },
        answer: {
          ar: 'حافظ على إضاءة غرفة متوازنة وسطوع واضح للشاشة، لا تغير تكبير المتصفح (100%)، اختبر كل عين على حدة دون ضغط على الجفن أو تخمين متكرر، واختر أدنى سطر قرأته بوضوح.',
          fr: 'Veillez à un bon éclairage, conservez le zoom navigateur à 100 %, testez chaque œil séparément sans plisser les paupières et sélectionnez la plus petite ligne lue nettement.',
        },
      },
      {
        question: {
          ar: 'ما الأعراض العينية الطارئة التي تمنع الانتظار وتستدعي مراجعة عاجلة؟',
          fr: 'Quels signaux d\'alerte visuels imposent une consultation ophtalmologique urgente ?',
        },
        answer: {
          ar: 'فقدان البصر المفاجئ، الألم الشديد في العين، ظهور ومضات ضوئية، عوائم جديدة كثيفة، أو رؤية ما يشبه الستار المظلم هي حالات طارئة تتطلب فحصا عاجلا فورا دون تأخير.',
          fr: 'Une baisse brutale de la vision, une douleur oculaire intense, des éclairs lumineux, de nouveaux corps flottants ou un voile noir exigent une prise en charge ophtalmologique immédiate.',
        },
      },
    ],
  },
  {
    id: 'tool-water',
    slug: 'water-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة الماء اليومية وإرشادات الترطيب الصحي',
      fr: 'Calculateur d\'Hydratation Quotidienne & Guide de Prévention',
    },
    description: {
      ar: 'احسب تقديرا أوليا لكمية الماء اليومية المناسبة حسب الوزن ومستوى النشاط، مع مراعاة الطقس والتعرق ودليل علامات الجفاف والمراجع الصحية العالمية الموثوقة.',
      fr: 'Calculez une estimation initiale de vos besoins quotidiens en eau selon votre poids et votre activité physique, ajustée à la chaleur et aux signaux corporels de déshydratation.',
    },
    iconName: 'Droplets',
    references: [
      {
        label: { ar: 'CDC: الماء والمشروبات الصحية', fr: 'CDC : Eau et boissons saines' },
        url: 'https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html',
      },
      {
        label: { ar: 'NHS: دليل الوقاية من الجفاف وعلاماته', fr: 'NHS : Guide sur la déshydratation' },
        url: 'https://www.nhs.uk/conditions/dehydration/',
      },
      {
        label: { ar: 'NIH: الترطيب من أجل الصحة', fr: 'NIH : Hydrating for Health' },
        url: 'https://newsinhealth.nih.gov/2023/05/hydrating-health',
      },
      {
        label: { ar: 'Mayo Clinic: كم يحتاج الجسم من الماء يوميا؟', fr: 'Mayo Clinic : Apports quotidiens en eau' },
        url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل قاعدة ثمانية أكواب يوميا ملزمة طبيا لجميع الأشخاص؟',
          fr: 'La règle des 8 verres d\'eau par jour est-elle une norme médicale universelle ?',
        },
        answer: {
          ar: 'لا؛ الثمانية أكواب تذكير شائع فقط وليست قاعدة طبية ثابتة، إذ يتغير الاحتياج الفعلي حسب الوزن، النشاط، حرارة الطقس، وما توفره الأطعمة والمشروبات الأخرى من سوائل.',
          fr: 'Non ; il s\'agit d\'un repère mnémotechnique courant et non d\'une prescription universelle. Le besoin varie selon la corpulence, le climat, l\'effort et l\'alimentation.',
        },
      },
      {
        question: {
          ar: 'هل تحل المشروبات المحلاة والعصائر محل الماء النقي؟',
          fr: 'Les boissons sucrées peuvent-elles remplacer l\'eau pure ?',
        },
        answer: {
          ar: 'تساهم السوائل المتنوعة في إجمالي الترطيب، لكن الماء يظل الخيار الأبسط والخالي من السعرات المضافة؛ لذا ينصح بتقليل المشروبات المحلاة بالسكر قدر الإمكان.',
          fr: 'Si d\'autres boissons contribuent à l\'hydratation, l\'eau reste l\'option idéale sans sucres ajoutés ni calories superflues.',
        },
      },
      {
        question: {
          ar: 'ما علامات الجفاف المبكرة ومتى يزيد الاحتياج للسوائل؟',
          fr: 'Quels sont les signes courants de déshydratation et les situations à risque ?',
        },
        answer: {
          ar: 'تشمل العلامات العامة العطش، جفاف الفم، الصداع أو الدوخة، التعب، والبول الداكن أو قلة التبول، ويزداد الاحتياج مع الحرارة العالية والتعرق والرياضة، مع استشارة مختص لمحاليل الإماهة عند التعرق الشديد أو المرض.',
          fr: 'Soif, bouche sèche, fatigue, céphalées, étourdissements et urines foncées signalent un manque d\'hydratation, accentué par la chaleur ou le sport intense.',
        },
      },
      {
        question: {
          ar: 'متى يجب اتباع توجيه الطبيب بدل الرقم الظاهر في الحاسبة؟',
          fr: 'Quand faut-il suivre une restriction médicale plutôt que le résultat affiché ?',
        },
        answer: {
          ar: 'الحاسبة إرشادية ولا تراعي القيود الطبية الخاصة؛ لذا إذا كنت تعاني من قصور القلب أو أمراض الكلى أو تتناول مدرات البول أو لديك توصية محددة للسوائل، اتبع تعليمات طبيبك بدقة.',
          fr: 'En cas d\'insuffisance rénale ou cardiaque, de traitement diurétique ou de prescription spécifique de restriction hydrique, suivez impérativement la limite fixée par votre médecin.',
        },
      },
    ],
  },
];

export const batch5ToolGuides: Record<string, Partial<ToolRichGuide>> = {
  'prediabetes-risk': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون الراغبون في تقييم عوامل خطر ما قبل السكري بصورة توعوية أولية',
        fr: 'Adultes souhaitant estimer à titre éducatif leurs facteurs de risque métabolique',
      },
      processingTime: {
        ar: 'حساب فوري للنقاط داخل المتصفح في أقل من دقيقتين',
        fr: 'Score immédiat en moins de 2 minutes dans le navigateur',
      },
      fees: {
        ar: 'أداة مجانية وخاصة لا تحفظ الإجابات في أي خادم',
        fr: 'Gratuit et confidentiel, aucune réponse conservée en ligne',
      },
      channel: {
        ar: 'تطبيق ويب محلي (7 عوامل خطر + فئة مؤشر كتلة الجسم)',
        fr: 'Application web locale (7 facteurs de risque et catégorie IMC)',
      },
      keyRequirement: {
        ar: 'العمر، الجنس، الطول، الوزن، ضغط الدم، التاريخ العائلي، والنشاط البدني',
        fr: 'Âge, sexe, taille, poids, tension artérielle, antécédents familiaux et activité',
      },
    },
    explanation: {
      ar: [
        'يقدم اختبار خطر ما قبل السكري استبيانا توعويا منظما للبالغين مستلهما من منهجية احتساب النقاط المعتمدة لدى مراكز السيطرة على الأمراض والوقاية منها (CDC)، لمساعدتك على رصد عوامل الخطر القابلة للمتابعة قبل تفاقمها.',
        'يجمع المؤشر نقاطا تقريبية عن سبعة محاور أساسية: الفئة العمرية، الجنس، التاريخ العائلي للإصابة بالسكري، تشخيص ارتفاع ضغط الدم، مستوى النشاط البدني المعتاد، سابقة سكري الحمل للنساء، وفئة مؤشر كتلة الجسم المحسوبة من الطول والوزن.',
        'تعالج كافة الإجابات والقياسات محليا داخل جهازك ولا ترسل إلى أي خادم أو قاعدة بيانات، ما يحفظ خصوصيتك الصحية بالكامل أثناء التجربة والمراجعة مع أفراد الأسرة.',
        'النقاط الناتجة مؤشر إرشادي وليست تحليل دم أو تشخيصا طبيا؛ فقد يكون السكر طبيعيا أو مرتفعا بغض النظر عن مجموع الاستبيان، لذلك يبقى الفحص المخبري واستشارة الطبيب المعالج الخطوة الحاسمة عند وجود عوامل خطر أو أعراض.'
      ],
      fr: [
        'Inspiré du barème de sensibilisation des Centers for Disease Control and Prevention (CDC), ce test évalue de manière structurée les principaux facteurs de risque associés au prédiabète chez l\'adulte.',
        'L\'algorithme attribue des points indicatifs selon sept paramètres clés : tranche d\'âge, sexe, antécédents familiaux de diabète, hypertension artérielle connue, pratique physique régulière, antécédent de diabète gestationnel et catégorie d\'IMC calculée.',
        'Toutes les saisies restent strictement locales sur votre terminal : aucune donnée de santé n\'est transmise vers un serveur externe.',
        'Ce score de sensibilisation ne remplace en aucun cas un bilan sanguin (glycémie à jeun ou hémoglobine glyquée HbA1c) ; discutez du résultat avec votre médecin pour décider des analyses adaptées.'
      ],
    },
    formulaTitle: {
      ar: 'منهجية احتساب النقاط وفق معيار CDC التوعوي',
      fr: 'Méthode de pondération indicative (grille CDC)',
    },
    formulaText: {
      ar: 'إجمالي النقاط = نقاط العمر (0 إلى 3) + الجنس (0 أو 1) + سكري الحمل السابق (0 أو 1) + التاريخ العائلي (0 أو 1) + ضغط الدم المرتفع (0 أو 1) + قلة النشاط البدني (0 أو 1) + فئة مؤشر كتلة الجسم BMI (0 إلى 3). عتبة التنبيه المرجعية: 5 نقاط فأكثر تستدعي استشارة طبية للفحص المخبري.',
      fr: 'Score total = Âge (0–3 pts) + Sexe (0–1 pt) + Diabète gestationnel (0–1 pt) + Antécédents familiaux (0–1 pt) + Hypertension (0–1 pt) + Sédentarité (0–1 pt) + Catégorie IMC (0–3 pts). Seuil indicatif : ≥ 5 points justifie un bilan biologique médical.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لقراءة مؤشر عوامل الخطر',
        fr: 'Exemple pratique d\'interprétation du score',
      },
      scenario: {
        ar: 'شخص في الأربعينيات مع قلة حركة يومية وتاريخ عائلي للإصابة بالسكري وزيادة وزن متوسطة يجيب عن الأسئلة السبعة.',
        fr: 'Un adulte de 45 ans sédentaire ayant un parent diabétique et un surpoids modéré complète les 7 items du questionnaire.',
      },
      result: {
        ar: 'إذا بلغ المجموع 5 نقاط فأكثر وفق نموذج CDC، توصي الأداة بمناقشة إجراء تحليل سكر الدم الصائم والتراكمي HbA1c مع الطبيب، بينما تركز النصائح العامة على المشي المنتظم والتوازن الغذائي.',
        fr: 'Si le score atteint 5 points ou plus, l\'outil recommande de programmer un dosage glycémique avec son médecin et d\'adopter progressivement une activité physique régulière.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'جدول عوامل التقدير وتفسير العتبة المرجعية (CDC)',
        fr: 'Facteurs pris en compte et interprétation indicative (CDC)',
      },
      headers: [
        { ar: 'العنصر المقيم', fr: 'Facteur évalué' },
        { ar: 'آلية الاحتساب الإرشادية', fr: 'Critère indicatif' },
        { ar: 'الإجراء الطبي الموصى به', fr: 'Conduite médicale conseillée' },
      ],
      rows: [
        [
          { ar: 'العمر، الجنس، والوراثة', fr: 'Âge, sexe et hérédité' },
          { ar: 'تتزايد النقاط بعد سن 40 ومع وجود قريب من الدرجة الأولى مصاب', fr: 'Points croissants dès 40 ans et en présence d\'un antécédent familial direct' },
          { ar: 'فحص وقائي دوري للدم حسب توجيه الطبيب', fr: 'Dépistage sanguin périodique selon avis médical' },
        ],
        [
          { ar: 'الضغط، النشاط، ومؤشر BMI', fr: 'Tension, activité et IMC' },
          { ar: 'عوامل قابلة للتعديل عبر نمط الحياة ومتابعة الوزن وضغط الدم', fr: 'Facteurs modulables par l\'hygiène de vie et la régulation pondérale' },
          { ar: 'تعديل الغذاء والحركة ومراقبة الضغط مع المختص', fr: 'Suivi hygiéno-diététique et contrôle tensionnel' },
        ],
        [
          { ar: 'نتيجة أقل من 5 نقاط', fr: 'Score inférieur à 5 points' },
          { ar: 'خطر إحصائي أقل، لكن لا ينفي الإصابة عند وجود أعراض', fr: 'Risque statistique moindre, sans exclure un trouble sous-jacent' },
          { ar: 'استمرار الوقاية والفحص عند ظهور أعراض أو توصية طبية', fr: 'Prévention continue et consultation si symptômes' },
        ],
        [
          { ar: 'نتيجة 5 نقاط فأكثر', fr: 'Score supérieur ou égal à 5 points' },
          { ar: 'ارتفاع عوامل الخطر المبلغ عنها وفق معيار CDC', fr: 'Cumul significatif de facteurs de risque selon le CDC' },
          { ar: 'مراجعة الطبيب لإجراء تحليل السكر الصائم والتراكمي HbA1c', fr: 'Consulter pour prescrire glycémie à jeun et HbA1c' },
        ],
      ],
    },
    tips: {
      ar: [
        'الاختبار التوعوي بداية للانتباه وليس بديلا عن تحليل الدم المخبري في المركز الصحي أو المخبر.',
        'المشي المنتظم وتقليل السكريات المضافة والأطعمة المصنعة يدعمان الصحة العامة، وتناقش الخطة الفردية مع الطبيب.',
        'راجعي الطبيب بصورة دورية إذا سبق لك الإصابة بسكري الحمل حتى بعد عودة القراءات لطبيعتها.',
        'اطلب الفحص الطبي فورا عند ظهور عطش غير معتاد أو تبول متكرر أو تعب مستمر.',
      ],
      fr: [
        'Ne considérez jamais un score bas comme une dispense de dépistage biologique si vous avez des symptômes.',
        'Une activité physique régulière (marche rapide) et une alimentation riche en fibres soutiennent la sensibilité à l\'insuline.',
        'En cas d\'antécédent de diabète gestationnel, un contrôle glycémique régulier reste recommandé à long terme.',
        'Notez vos résultats pour les présenter lors de votre prochaine visite chez votre médecin traitant.',
      ],
    },
    extraFaqs: [],
  },

  'pregnancy-calorie-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'السيدات في الحمل المفرد الراغبات في فهم تغير احتياج الطاقة حسب الثلث',
        fr: 'Femmes enceintes (grossesse unique) souhaitant estimer l\'évolution calorique par trimestre',
      },
      processingTime: {
        ar: 'نتيجة فورية داخل المتصفح دون تسجيل',
        fr: 'Calcul instantané dans le navigateur sans inscription',
      },
      fees: {
        ar: 'مجاني بالكامل مع رابط مرجع MedlinePlus الطبي',
        fr: 'Gratuit avec lien de référence médicale MedlinePlus',
      },
      channel: {
        ar: 'حاسبة محلية لـ 3 أثلاث حمل (خط الأساس + الإضافة الشائعة)',
        fr: 'Simulateur local sur les 3 trimestres (métabolisme de base + supplément)',
      },
      keyRequirement: {
        ar: 'تقدير سعرات خط الأساس قبل الحمل واختيار ثلث الحمل الحالي',
        fr: 'Besoin énergétique estimé avant grossesse et trimestre actuel',
      },
    },
    explanation: {
      ar: [
        'تساعد حاسبة السعرات الحرارية أثناء الحمل على تكوين تصور تقريبي حول تغير الاحتياج اليومي من الطاقة خلال الحمل المفرد، من خلال إضافة قيم إرشادية شائعة إلى سعرات خط الأساس المعتادة قبل الحمل.',
        'تظهر المراجع التغذوية أن الجسم لا يحتاج غالبا إلى سعرات إضافية ثابتة في الثلث الأول، ثم تزيد الحاجة التقديرية بقرابة 340 سعرة حرارية يوميا في الثلث الثاني وقرابة 450 سعرة يوميا في الثلث الثالث لدعم نمو الجنين.',
        'تنبه الأداة بوضوح إلى أن جودة الغذاء وكثافة المغذيات أهم بكثير من مضاعفة كميات الطعام عشوائيا؛ إذ تزداد أهمية حمض الفوليك، الحديد، الكالسيوم، وفيتامين د، وشرب السوائل الكافية وفق إرشادات الطبيبة أو أخصائي التغذية.',
        'لا تصلح التقديرات القياسية للحمل المتعدد (التوأم)، أو سكري الحمل، أو القيء الحملي الشديد، أو حالات نقص الوزن؛ وفي كل الحالات تظل المتابعة الطبية الفردية المرجع الأساسي.'
      ],
      fr: [
        'Ce calculateur offre un repère éducatif sur l\'évolution des besoins énergétiques durant une grossesse unique, en ajoutant aux besoins caloriques de base pré-conceptionnels l\'apport complémentaire usuel de chaque trimestre.',
        'Selon les repères nutritionnels classiques (MedlinePlus), aucun surplus fixe n\'est généralement nécessaire au premier trimestre, tandis qu\'un ajout indicatif d\'environ +340 kcal/jour apparaît au deuxième trimestre et +450 kcal/jour au troisième trimestre.',
        'L\'outil rappelle que « manger pour deux » en quantité est un mythe : la densité en micronutriments essentiels (acide folique, fer, calcium, vitamine D, protéines et hydratation) prime largement sur le seul total calorique.',
        'Les valeurs affichées ne s\'appliquent pas aux grossesses multiples, au diabète gestationnel ou aux vomissements gravidiques sévères, qui exigent un suivi diététique et médical strictement individualisé.'
      ],
    },
    formulaTitle: {
      ar: 'القيم التقديرية المرجعية لإضافة الطاقة حسب ثلث الحمل',
      fr: 'Supplément calorique indicatif par trimestre (grossesse simple)',
    },
    formulaText: {
      ar: 'سعرات الثلث الأول ≈ خط الأساس + 0 سعرة/يوم. سعرات الثلث الثاني ≈ خط الأساس + 340 سعرة/يوم. سعرات الثلث الثالث ≈ خط الأساس + 450 سعرة/يوم (قيم استرشادية للحمل المفرد).',
      fr: '1er trimestre ≈ Besoin de base + 0 kcal/j ; 2e trimestre ≈ Base + 340 kcal/j ; 3e trimestre ≈ Base + 450 kcal/j (valeurs indicatives pour grossesse unique).',
    },
    practicalExample: {
      title: {
        ar: 'مثال حسابي لحامل في الثلث الثاني',
        fr: 'Exemple pratique au deuxième trimestre',
      },
      scenario: {
        ar: 'سيدة كان احتياجها اليومي المتوازن قبل الحمل قرابة 1950 سعرة، وتدخل الآن الثلث الثاني من حمل مفرد.',
        fr: 'Une future maman dont l\'apport d\'équilibre avant grossesse avoisinait 1 950 kcal entre dans son 2e trimestre.',
      },
      result: {
        ar: 'يظهر التقدير قرابة 2290 سعرة حرارية يوميا (+340 سعرة)، ويفضل تغطية هذه الزيادة بوجبات خفيفة مغذية كالفواكه والبيض ومنتجات الألبان والبقوليات بدل السكريات السريعة.',
        fr: 'L\'estimation indique environ 2 290 kcal/jour (+340 kcal), idéalement apportées par des aliments riches en fer, calcium et protéines plutôt que par des sucres raffinés.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'تطور الطاقة الإضافية والمغذيات الأساسية خلال مراحل الحمل',
        fr: 'Évolution énergétique indicative et priorités nutritionnelles',
      },
      headers: [
        { ar: 'مرحلة الحمل', fr: 'Trimestre' },
        { ar: 'الزيادة التقديرية الشائعة', fr: 'Supplément indicatif' },
        { ar: 'التركيز الغذائي والطبي', fr: 'Priorités nutritionnelles et suivi' },
      ],
      rows: [
        [
          { ar: 'الثلث الأول (الأسابيع 1–13)', fr: '1er trimestre (SA 1–13)' },
          { ar: '+0 سعرة يوميا غالبا', fr: '+0 kcal / jour en général' },
          { ar: 'حمض الفوليك، وجبات خفيفة متكررة عند الغثيان، سوائل كافية', fr: 'Acide folique, fractionnement des repas en cas de nausées, hydratation' },
        ],
        [
          { ar: 'الثلث الثاني (الأسابيع 14–27)', fr: '2e trimestre (SA 14–27)' },
          { ar: '+340 سعرة يوميا تقريبا', fr: 'Environ +340 kcal / jour' },
          { ar: 'تعزيز البروتينات والحديد والكالسيوم وفيتامين د وفق فحص الدم', fr: 'Renforcement en fer, calcium, protéines et vitamine D selon bilan' },
        ],
        [
          { ar: 'الثلث الثالث (الأسابيع 28–40)', fr: '3e trimestre (SA 28–40)' },
          { ar: '+450 سعرة يوميا تقريبا', fr: 'Environ +450 kcal / jour' },
          { ar: 'توزيع الوجبات لتخفيف الحموضة ودعم النمو الجنيني تحت إشراف طبي', fr: 'Repas légers et fréquents, suivi pondéral et tensionnel régulier' },
        ],
      ],
    },
    tips: {
      ar: [
        'لا تضاعفي كميات الطعام تلقائيا؛ فالجودة الغذائية والفيتامينات الموصوفة طبيا أهم من تضخيم السعرات.',
        'لا تستخدمي الأداة لإنقاص الوزن أو تقييد الطعام أثناء الحمل دون إشراف طبي متخصص.',
        'في حالات سكري الحمل أو فقر الدم أو الحمل بتوأم، اتبعي جدول المختص وليس القيم العامة.',
        'راجعي مرجع MedlinePlus الرسمي وناقشي مكملات الحديد وحمض الفوليك مع طبيبتك.',
      ],
      fr: [
        'Ne doublez pas vos portions : privilégiez la variété nutritionnelle et l\'apport en micronutriments.',
        'N\'entreprenez jamais de régime restrictif pendant la grossesse sans avis médical spécialisé.',
        'En cas de diabète gestationnel ou de grossesse multiple, suivez le programme d\'un professionnel de santé.',
        'Consultez le guide MedlinePlus en référence pour approfondir les besoins en fer, calcium et folates.',
      ],
    },
    extraFaqs: [],
  },

  'pregnancy-due-date': {
    quickSummary: {
      targetAudience: {
        ar: 'الحوامل والأطباء الراغبون في حساب مبدئي لموعد الولادة وعمر الحمل',
        fr: 'Futures mamans souhaitant estimer la date prévue d\'accouchement et le trimestre',
      },
      processingTime: {
        ar: 'حساب فوري من تاريخ أول يوم لآخر دورة شهرية',
        fr: 'Calcul instantané à partir des dernières règles',
      },
      fees: {
        ar: 'مجاني بالكامل ويعمل محليا داخل المتصفح',
        fr: 'Gratuit et 100 % confidentiel en local',
      },
      channel: {
        ar: 'تطبيق تقويمي محلي (حساب 280 يوما / 40 أسبوعا)',
        fr: 'Outil calendaire local (règle des 280 jours / 40 semaines)',
      },
      keyRequirement: {
        ar: 'تحديد اليوم الأول من آخر دورة شهرية (وليس يوم انتهاء النزف)',
        fr: 'Premier jour des dernières règles (et non le dernier jour)',
      },
    },
    explanation: {
      ar: [
        'تتيح حاسبة موعد الولادة تقديرا زمنيا مبدئيا لتاريخ الولادة المتوقع وعمر الحمل بالأسابيع، عبر إضافة 280 يوما (40 أسبوعا) إلى اليوم الأول من آخر دورة شهرية كما هو شائع في المتابعة التوليدية الأولية.',
        'يمثل الموعد المتوقع نقطة مرجعية لتنظيم الفحوصات المخبرية ومواعيد التصوير بالموجات فوق الصوتية (الإيكوغرافي) والتحضير للولادة، وليس يوما مضمونا لبدء المخاض؛ إذ تختلف مدة الحمل الطبيعية بين امرأة وأخرى.',
        'تؤكد الحاسبة ضرورة إدخال اليوم الأول لبدء النزف في آخر دورة شهرية منتظمة؛ أما في حالات عدم انتظام الدورة، أو نسيان التاريخ، أو حدوث الحمل عقب إيقاف وسيلة منع حمل هرمونية، فإن الفحص المبكر بالإيكوغرافي يمنح تقديرا أدق لعمر الحمل.',
        'لا تغني الحسابات الآلية عن المتابعة الدورية لدى الطبيبة أو القابلة، ولا بد من التوجه للمركز الطبي فورا عند وجود ألم حاد أو نزيف أو أعراض غير معتادة.'
      ],
      fr: [
        'Ce calculateur établit une estimation initiale du terme de grossesse en ajoutant 280 jours (40 semaines d\'aménorrhée) au premier jour des dernières menstruations, suivant la méthode obstétricale classique.',
        'La date obtenue sert de repère administratif et médical pour planifier les consultations prénatales et examens échographiques ; seule une minorité de naissances survient le jour exact du terme calculé.',
        'Veillez à saisir le premier jour de saignement des dernières règles : en cas de cycles irréguliers, de date incertaine ou d\'arrêt récent d\'une contraception hormonale, l\'échographie du premier trimestre reste l\'outil de datation de référence.',
        'Toute douleur pelvienne, perte sanguine ou diminution des mouvements fœtaux impose une consultation médicale sans attendre l\'échéance calculée.'
      ],
    },
    formulaTitle: {
      ar: 'القاعدة التقديرية المستخدمة (40 أسبوعا / 280 يوما)',
      fr: 'Règle calendaire appliquée (40 SA / 280 jours)',
    },
    formulaText: {
      ar: 'تاريخ الولادة المتوقع مبدئيا = أول يوم من آخر دورة شهرية + 280 يوما (40 أسبوعا). يحدد عمر الحمل بالأسابيع عبر الفارق بين تاريخ اليوم وتاريخ بداية آخر دورة مقسوما على 7.',
      fr: 'Terme estimé = Premier jour des dernières règles + 280 jours (40 semaines). Âge gestationnel = (Date du jour − Date des dernières règles) / 7 semaines.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لحساب أسابيع الحمل والثلث',
        fr: 'Exemple pratique de calcul du terme',
      },
      scenario: {
        ar: 'سيدة بدأ اليوم الأول من آخر دورة شهرية منتظمة لديها في 1 فيفري.',
        fr: 'Une future maman note le premier jour de ses dernières règles régulières le 1er février.',
      },
      result: {
        ar: 'تضيف الأداة 280 يوما لتعرض موعدا تقريبيا للولادة حول 8 نوفمبر من نفس السنة مع تحديد الأسبوع الحالي والثلث الموافق لتسهيل مواعيد المتابعة.',
        fr: 'L\'ajout de 280 jours situe le terme indicatif autour du 8 novembre avec affichage automatique de la semaine d\'aménorrhée et du trimestre en cours.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مرجع الأثلاث الثلاثة ومواعيد المتابعة التقديرية',
        fr: 'Repères des trois trimestres de grossesse',
      },
      headers: [
        { ar: 'الفترة الزمنية', fr: 'Période (SA)' },
        { ar: 'المرحلة', fr: 'Trimestre' },
        { ar: 'نقاط المتابعة المعتادة', fr: 'Suivi habituel' },
      ],
      rows: [
        [
          { ar: 'الأسبوع 1 إلى 13', fr: 'Semaines 1 à 13' },
          { ar: 'الثلث الأول', fr: '1er trimestre' },
          { ar: 'تأكيد الحمل وإيكوغرافي تأريخ الحمل والتحاليل الأولية', fr: 'Confirmation, échographie de datation et bilan initial' },
        ],
        [
          { ar: 'الأسبوع 14 إلى 27', fr: 'Semaines 14 à 27' },
          { ar: 'الثلث الثاني', fr: '2e trimestre' },
          { ar: 'فحص النمو التفصيلي ومتابعة الضغط والتحاليل الشهرية', fr: 'Échographie morphologique, tension et bilans mensuels' },
        ],
        [
          { ar: 'الأسبوع 28 إلى 40', fr: 'Semaines 28 à 40' },
          { ar: 'الثلث الثالث', fr: '3e trimestre' },
          { ar: 'تقييم وضعية الجنين والاستعداد للولادة والمتابعة اللصيقة', fr: 'Contrôle fœtal, préparation à l\'accouchement et suivi rapproché' },
        ],
      ],
    },
    tips: {
      ar: [
        'استخدمي أول يوم لبدء الدورة الشهرية في الحقل، وليس تاريخ انتهاء الدورة.',
        'احفظي تقرير الإيكوغرافي الأول في ملف المتابعة لأن الطبيبة تعتمده لتثبيت العمر الدقيق.',
        'إذا كانت دورتك غير منتظمة أو طويلة جدا، أخبري الطبيب لتعديل التاريخ التقديري.',
        'لا تترددي في مراجعة الاستعجالات عند الشعور بألم غير معتاد أو نزيف أو انخفاض حركة الجنين.',
      ],
      fr: [
        'Renseignez bien le premier jour du cycle menstruel et non la fin des saignements.',
        'Conservez précieusement le compte-rendu de la première échographie qui confirme la date de terme.',
        'Signalez tout cycle irrégulier ou arrêt récent de pilule à votre gynécologue ou sage-femme.',
        'Consultez sans délai en cas de douleurs inhabituelles, fièvre, pertes ou baisse des mouvements.',
      ],
    },
    extraFaqs: [],
  },

  'sleep-assessment': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون الراغبون في تقييم عادات النوم وجودته خلال الشهر الماضي',
        fr: 'Adultes souhaitant évaluer leurs habitudes de sommeil sur les 30 derniers jours',
      },
      processingTime: {
        ar: '8 أسئلة تفاعلية بنتيجة فورية ونصائح أولية',
        fr: '8 questions interactives avec bilan immédiat en local',
      },
      fees: {
        ar: 'مجاني كليا ولا يحفظ بياناتك على أي خادم',
        fr: 'Gratuit et sans collecte de données personnelles',
      },
      channel: {
        ar: 'مؤشر توعوي محلي غير تشخيصي لنظافة النوم',
        fr: 'Indicateur éducatif local d\'hygiène du sommeil',
      },
      keyRequirement: {
        ar: 'تذكر نمط النوم المعتاد، التأخر في الغفو، الاستيقاظ الليلي، والتعب النهاري خلال 30 يوما',
        fr: 'Évaluation honnête des 8 habitudes nocturnes et diurnes du dernier mois',
      },
    },
    explanation: {
      ar: [
        'صُمم تقييم النوم التوعوي ليمنحك نظرة منظمة على عادات نومك خلال الشهر الماضي عبر ثمانية أسئلة سريعة تغطي مدة النوم، صعوبة الخلود للنوم، تكرار الاستيقاظ، الشخير، وتأثير قلة الراحة على النشاط والتركيز نهارا.',
        'تترجم الإجابات إلى مؤشر توعوي مبدئي مرفق بتوصيات عملية لتهيئة بيئة النوم، مع التشديد على أن التقييم لا يشكل تشخيصا طبيا ولا حكما نهائيا على سبب الأرق أو الإرهاق.',
        'كثيرا ما ترتبط اضطرابات النوم الخفيفة بعوامل يومية قابلة للتحسين، مثل اضطراب مواعيد الاستيقاظ، تناول الكافيين متأخرا، السهر أمام إضاءة الشاشات، أو الضغوط النفسية اليومية.',
        'أما في حال استمرار الشكوى لعدة أسابيع أو ملاحظة شخير قوي متقطع، نعاس نهاري خطير أثناء القيادة والعمل، أو اختناق ليلي، فيجب حجز استشارة لدى الطبيب لإجراء تقييم سريري دقيق.'
      ],
      fr: [
        'Cette auto-évaluation en huit questions passe en revue votre rythme de sommeil au cours du mois écoulé : durée réelle, latence d\'endormissement, réveils nocturnes, ronflements et vigilance diurne.',
        'Le bilan propose un repère éducatif accompagné de recommandations simples d\'hygiène du sommeil, sans jamais poser de diagnostic médical ni remplacer un bilan clinique.',
        'De nombreux déséquilibres légers proviennent d\'habitudes modifiables : horaires irréguliers le week-end, caféine en fin d\'après-midi, lumière bleue tardive des écrans ou surmenage.',
        'En revanche, la persistance d\'insomnies, une somnolence majeure mettant en danger la conduite automobile ou des pauses respiratoires nocturnes imposent une consultation médicale spécialisée.'
      ],
    },
    formulaTitle: {
      ar: 'مؤشر الوعي بثمانية أبعاد لعادات النوم',
      fr: 'Grille éducative à 8 indicateurs de qualité nocturne',
    },
    formulaText: {
      ar: 'يجمع الاستبيان استجابات الأبعاد الثمانية (المدة، صعوبة النوم، التقطع الليلي، الانتعاش الصباحي، الشخير، النعاس النهاري، الكافيين والشاشات، والانتظام) لتصنيف مستوى الحاجة لمراجعة الروتين أو الطبيب.',
      fr: 'L\'indicateur agrège 8 dimensions comportementales et symptomatiques sur les 30 derniers jours afin d\'orienter les ajustements de routine ou une éventuelle consultation.',
    },
    practicalExample: {
      title: {
        ar: 'مثال لاستخدام التقييم قبل مراجعة الطبيب',
        fr: 'Exemple pratique pour préparer un rendez-vous médical',
      },
      scenario: {
        ar: 'موظف يعاني من استيقاظ متكرر وتعب صباحي خلال الشهر الماضي يملأ الأسئلة الثمانية.',
        fr: 'Un actif souffrant de réveils nocturnes fréquents et de fatigue matinale remplit le questionnaire sur le mois écoulé.',
      },
      result: {
        ar: 'يكشف المؤشر عن تزامن الأرق مع استخدام الهاتف ليلا والقهوة المسائية أو ينبه لضرورة استشارة مختص إذا وجد نعاس نهاري شديد أو شخير متقطع.',
        fr: 'Le bilan met en évidence des leviers d\'hygiène nocturne (écrans, caféine) ou recommande un avis médical en présence de somnolence diurne persistante.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'تصنيف مستويات التقييم والتوجيه الأولي لعادات النوم',
        fr: 'Niveaux indicatifs et recommandations pratiques',
      },
      headers: [
        { ar: 'المؤشر الأولي', fr: 'Niveau indicatif' },
        { ar: 'السمات الشائعة', fr: 'Signes observés' },
        { ar: 'التوجيه العملي', fr: 'Action recommandée' },
      ],
      rows: [
        [
          { ar: 'نوم منتظم ومستقر نسبيا', fr: 'Habitudes globalement équilibrées' },
          { ar: 'مدة كافية واستيقاظ نشيط معظم الأيام', fr: 'Réveil reposé et endormissement fluide' },
          { ar: 'الحفاظ على ثبات مواعيد النوم وتجنب الشاشات قبل النوم', fr: 'Maintenir la régularité et la sobriété lumineuse le soir' },
        ],
        [
          { ar: 'اضطراب خفيف أو روتين غير مستقر', fr: 'Déséquilibre modéré de routine' },
          { ar: 'تأخر الغفو أو إرهاق أحيانا بسبب السهر والمنبهات', fr: 'Endormissement tardif ou fatigue ponctuelle' },
          { ar: 'ضبط الكافيين قبل النوم بـ 6 ساعات وتدوين يوميات النوم', fr: 'Limiter la caféine et adopter une heure de lever fixe' },
        ],
        [
          { ar: 'مؤشرات تستحق التقييم الطبي', fr: 'Signes nécessitant un avis médical' },
          { ar: 'أرق مزمن، شخير مع توقف نفس، أو نعاس شديد أثناء القيادة', fr: 'Insomnie durable, apnée suspectée ou somnolence au volant' },
          { ar: 'حجز موعد لدى الطبيب ومشاركته سجل الأعراض المفصل', fr: 'Consulter un médecin avec un relevé détaillé des symptômes' },
        ],
      ],
    },
    tips: {
      ar: [
        'حافظ على وقت استيقاظ ثابت يوميا حتى في عطلة نهاية الأسبوع لتثبيت الساعة البيولوجية.',
        'أبعد الهاتف والشاشات الساطعة قبل النوم بـ 45 دقيقة على الأقل، وخفف إضاءة الغرفة.',
        'تجنب المنبهات (القهوة والشاي الثقيل) والوجبات الدسمة قبل النوم بعدة ساعات.',
        'سجل أعراضك أو ملاحظات أفراد الأسرة حول الشخير وتوقف النفس لعرضها على الطبيب المختص.',
      ],
      fr: [
        'Gardez une heure de réveil régulière toute la semaine pour synchroniser votre horloge interne.',
        'Évitez écrans lumineux et notifications au moins 45 minutes avant le coucher.',
        'Limitez café, thé fort et repas lourds en soirée pour faciliter l\'endormissement.',
        'Consultez rapidement si un proche observe des pauses respiratoires nocturnes ou si vous somnolez au volant.',
      ],
    },
    extraFaqs: [],
  },

  'vaccine-tracker': {
    quickSummary: {
      targetAudience: {
        ar: 'الأولياء في الجزائر لمتابعة رزنامة تلقيح الأطفال من الولادة حتى سن التمدرس',
        fr: 'Parents en Algérie suivant le calendrier vaccinal pédiatrique national',
      },
      processingTime: {
        ar: 'حساب فوري للمراحل المرجعية من تاريخ الميلاد مع حفظ محلي',
        fr: 'Calcul instantané des échéances depuis la date de naissance',
      },
      fees: {
        ar: 'مجاني بالكامل مع ربط رسمي بالجريدة الرسمية 36/2026 وتصدير نسخة احتياطية',
        fr: 'Gratuit avec lien vers le Journal Officiel N° 36/2026 et export de sauvegarde',
      },
      channel: {
        ar: 'أداة تذكير تنظيمية في المتصفح (لا تغني عن الدفتر الصحي)',
        fr: 'Pense-bête local dans le navigateur (complément au carnet de santé)',
      },
      keyRequirement: {
        ar: 'تاريخ ميلاد الطفل والجرعات المؤكدة فعليا في دفتر صحة الطفل',
        fr: 'Date de naissance de l\'enfant et confirmation via le carnet de santé officiel',
      },
    },
    explanation: {
      ar: [
        'تساعد أداة متابعة تلقيح الأطفال في الجزائر الأولياء على استعراض المواعيد التقديرية لمحطات التلقيح الوطنية انطلاقا من تاريخ ميلاد الطفل (تاريخ اليوم أو أي تاريخ سابق)، بالاستناد إلى رزنامة 2023 والتعديل المنشور في الجريدة الرسمية رقم 36 لسنة 2026.',
        'تعرض الأداة الفترات المرجعية حسب العمر لتسهيل التحضير المسبق لمواعيد مصلحة حماية الأمومة والطفولة (PMI) أو العيادة الجوارية، مع تنبيه مهم أن الفترات العمرية الواسعة تعني الإطار العام ولا تحدد يوما وحيدا إلزاميا إذ يضبط المركز الصحي الموعد الدقيق.',
        'يحفظ سجل تاريخ الميلاد والجرعات التي تؤشر عليها داخل هذا المتصفح فقط دون أي إرسال إلى خادم، كما يمكنك تصدير نسخة احتياطية والاحتفاظ بها في جهازك.',
        'هذه الأداة تذكيرية وتنظيمية وليست تشخيصا أو جدول استدراك عند تأخر اللقاحات؛ كما أن تأشير الجرعة رقميا لا يعد إثباتا طبيا مستقلا، لذا اعتمد دائما على تأشير الطبيب والممرض في الدفتر الصحي الرسمي.'
      ],
      fr: [
        'Cet assistant permet aux parents en Algérie de visualiser les échéances indicatives de vaccination pédiatrique à partir de la date de naissance de l\'enfant, sur la base du calendrier national 2023 actualisé par le Journal Officiel N° 36 de 2026.',
        'Les tranches d\'âge affichées offrent un repère préparatoire avant vos visites au centre de santé ou en PMI ; les fenêtres larges signifient que le personnel soignant confirme la date exacte d\'administration.',
        'La date de naissance et les doses cochées restent mémorisées uniquement dans votre navigateur, avec la possibilité d\'exporter une sauvegarde locale pour ne pas perdre vos repères.',
        'Cet outil organisationnel ne constitue ni un schéma médical de rattrapage ni un justificatif vaccinal officiel : seul le cachet du centre de santé sur le carnet papier fait foi.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ حساب المراحل العمرية وتوثيق الرزنامة الوطنية 2026',
      fr: 'Calcul des échéances selon le calendrier officiel 2026',
    },
    formulaText: {
      ar: 'تاريخ المرحلة المرجعية = تاريخ ميلاد الطفل + العمر المرجعي بالشهور أو السنوات وفق رزنامة التلقيح الوطنية (مرجع 2023 + تعديل الجريدة الرسمية رقم 36 لسنة 2026).',
      fr: 'Date indicative d\'étape = Date de naissance + Âge cible en mois/années du calendrier national algérien (référentiel 2023 + mise à jour JO N° 36/2026).',
    },
    practicalExample: {
      title: {
        ar: 'مثال عملي لمتابعة دفتر التلقيح المنزلي',
        fr: 'Exemple pratique de suivi parental',
      },
      scenario: {
        ar: 'والدان يدخلان تاريخ ميلاد طفلهما لعرض محطات الولادة، شهرين، 4 أشهر، 11 شهرا، 12 شهرا، 18 شهرا، وسن التمدرس.',
        fr: 'Des parents saisissent la date de naissance de leur bébé pour planifier les visites des 2, 4, 11, 12, 18 mois et 6 ans.',
      },
      result: {
        ar: 'تظهر التواريخ المرجعية بوضوح لتفادي نسيان المواعيد، وبعد تلقي التلقيح فعليا وتختيم الدفتر الصحي في العيادة يؤشر الوالدان على الجرعة ويصدران نسخة احتياطية.',
        fr: 'L\'outil affiche les dates cibles et permet de cocher les doses effectivement validées au centre de santé puis d\'exporter une copie de sauvegarde.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'محطات المتابعة المرجعية (التحقق الإجباري عبر الدفتر الصحي)',
        fr: 'Grandes étapes de référence (à confirmer sur le carnet de santé)',
      },
      headers: [
        { ar: 'المرحلة العمرية', fr: 'Âge cible' },
        { ar: 'الغرض التنظيمي', fr: 'Objet du rendez-vous' },
        { ar: 'التوثيق المطلوب', fr: 'Validation officielle' },
      ],
      rows: [
        [
          { ar: 'عند الولادة ثم 2 و4 أشهر', fr: 'Naissance, 2 et 4 mois' },
          { ar: 'الجرعات الأساسية الأولى للمناعة المبكرة', fr: 'Primovaccination précoce du nourrisson' },
          { ar: 'تأشير مستشفى الولادة أو وحدة PMI في الدفتر الصحي', fr: 'Cachet de la maternité ou PMI sur le carnet' },
        ],
        [
          { ar: '11 شهرا، 12 شهرا، و18 شهرا', fr: '11 mois, 12 mois et 18 mois' },
          { ar: 'استكمال الجرعات الأساسية والجرعات المدعمة الأولى', fr: 'Compléments et premiers rappels pédiatriques' },
          { ar: 'تأكيد الطبيب المعالج وتاريخ اللقاح الفعلي ورقم الحصة', fr: 'Inscription de la date réelle et du lot sur le carnet' },
        ],
        [
          { ar: 'سن التمدرس (6 سنوات) وما بعدها', fr: '6 ans (entrée scolaire) et rappels' },
          { ar: 'جرعات التذكير الوقائية وفق المرسوم والطب المدرسي', fr: 'Rappels réglementaires et médecine scolaire' },
          { ar: 'شهادة الدفتر الصحي المطلوبة عند التسجيل المدرسي', fr: 'Carnet de santé exigé pour l\'inscription scolaire' },
        ],
      ],
    },
    tips: {
      ar: [
        'اصطحب الدفتر الصحي الورقي في كل زيارة لتدوين التاريخ ورقم الجرعة بختم المؤسسة العمومية للصحة الجوارية.',
        'إذا تأخر موعد إحدى الجرعات لأسباب صحية أو سفر، لا تضع خطة استدراك بنفسك؛ الطبيب أو الممرض في العيادة يحدد خطة الاستدراك الآمنة.',
        'استعمل زر التصدير للاحتفاظ بنسخة احتياطية لأن البيانات تحفظ داخل المتصفح الحالي فقط.',
        'اطلع على نص الجريدة الرسمية رقم 36 لسنة 2026 المرفق للتحقق من أحدث التعديلات التنظيمية.',
      ],
      fr: [
        'Présentez systématiquement le carnet de santé papier lors de chaque visite en centre EPSP / PMI.',
        'En cas de retard vaccinal, demandez toujours un calendrier de rattrapage personnalisé au médecin ou infirmier.',
        'Exportez régulièrement votre sauvegarde locale pour éviter toute perte si vous changez de navigateur ou d\'appareil.',
        'Consultez le PDF du Journal Officiel N° 36/2026 lié ci-dessus pour connaître les dispositions réglementaires en vigueur.',
      ],
    },
    extraFaqs: [],
  },

  'visual-acuity-screening': {
    quickSummary: {
      targetAudience: {
        ar: 'المستخدمون الراغبون في اختبار توعوي تقريبي لحدة النظر عبر الشاشة',
        fr: 'Utilisateurs souhaitant un repérage indicatif de l\'acuité visuelle à l\'écran',
      },
      processingTime: {
        ar: 'أقل من دقيقتين لكل عين على حدة',
        fr: 'Moins de 2 minutes pour tester chaque œil séparément',
      },
      fees: {
        ar: 'مجاني كليا داخل المتصفح مع تنبيهات السلامة الطبية',
        fr: 'Gratuit localement avec consignes strictes de prudence médicale',
      },
      channel: {
        ar: 'شاشة اختبار تفاعلية غير معايرة طبيا (للتوعية فقط)',
        fr: 'Échelle visuelle indicative à l\'écran (non calibrée cliniquement)',
      },
      keyRequirement: {
        ar: 'إضاءة جيدة، سطوع مناسب، تكبير متصفح 100%، واختبار كل عين منفردة',
        fr: 'Bon éclairage, zoom navigateur à 100 % et test d\'un œil à la fois',
      },
    },
    explanation: {
      ar: [
        'تتيح أداة اختبار حدة البصر التقريبي تجربة قراءة سطور متدرجة الحجم على الشاشة لاختبار كل عين على حدة بصورة توعوية مبسطة، مع إبراز القراءة التقريبية للسطر الأدنى الذي تميزه بوضوح.',
        'تشدد الأداة على أن شاشات الهواتف والحواسيب غير معايرة طبيا؛ إذ تتأثر النتيجة بمقاس الشاشة، المسافة الفاصلة عن العين، شدة الإضاءة المحيطة، وإعدادات تكبير المتصفح، ولذلك لا يجوز استخدام النتيجة لوصف النظارات الطبية أو استبعاد أي مشكلة بصرية.',
        'للحصول على تجربة منظمة، اضبط إضاءة الغرفة وسطوع الشاشة دون إجهاد، وأبقِ تكبير المتصفح عند 100%، وغطِ إحدى العينين بلطف دون الضغط على المقلة أثناء فحص العين الأخرى.',
        'تستدعي أي أعراض مفاجئة — مثل انخفاض حدة البصر فجأة، رؤية ومضات ضوئية، ظهور عوائم جديدة، ستار مظلم في مجال الرؤية، أو ألم عيني شديد — التوجه العاجل لطبيب العيون فورا دون الاعتماد على أي اختبار شاشة.'
      ],
      fr: [
        'Cet utilitaire propose un test d\'acuité visuelle approximatif à l\'écran en vous invitant à repérer la plus petite ligne lisible, un œil après l\'autre, à titre strictement éducatif.',
        'Les écrans de téléphones et d\'ordinateurs n\'étant pas étalonnés comme des projecteurs ophtalmologiques, la lecture dépend fortement de la taille de dalle, de la distance, de la luminosité et du zoom du navigateur : ce résultat ne permet jamais de prescrire des lunettes.',
        'Pour effectuer l\'essai dans de bonnes conditions, conservez un zoom à 100 %, réglez un éclairage confortable et couvrez doucement un œil sans appuyer sur le globe oculaire.',
        'Une baisse brutale de vision, des éclairs lumineux, une pluie de mouches volantes nouvelles, un voile sombre ou une douleur oculaire intense constituent des urgences ophtalmologiques immédiates.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ التدرج البصري وحدود المعايرة الرقمية',
      fr: 'Principe des optotypes gradués et limites d\'écran',
    },
    formulaText: {
      ar: 'يعتمد العرض على تصغير أحجام الرموز تدريجيا ليعكس السطر الأدنى المقروء مؤشرا تقريبيا غير معاير لحدة الرؤية، بخلاف فحص Snellen أو LogMAR المعاير بالمسافة والزاوية البصرية داخل عيادة طب العيون.',
      fr: 'Les caractères diminuent par paliers indicatifs ; contrairement aux échelles cliniques étalonnées (Snellen / Monoyer / LogMAR) à distance normalisée en cabinet, l\'écran reste purement approximatif.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لاختبار كل عين على حدة',
        fr: 'Exemple pratique de test comparatif des deux yeux',
      },
      scenario: {
        ar: 'شخص يلاحظ إجهادا عند القراءة أو يريد التحقق مبدئيا مما إذا كانت العين اليمنى واليسرى تقرآن نفس السطر على الشاشة.',
        fr: 'Un utilisateur ressent une fatigue visuelle et souhaite comparer de façon indicative sa vision de l\'œil droit et de l\'œil gauche.',
      },
      result: {
        ar: 'عند ملاحظة تفاوت واضح بين العينين أو صعوبة في السطور المتوسطة أو صداع متكرر، يبادر بحجز فحص كامل لدى مختص العيون والنظارات.',
        fr: 'En cas d\'écart net entre les deux yeux, de flou persistant ou de maux de tête fréquents, il prend rendez-vous chez un ophtalmologiste.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مقارنة حدود اختبار الشاشة بالفحص الطبي المتخصص',
        fr: 'Limites du test écran face à l\'examen ophtalmologique',
      },
      headers: [
        { ar: 'نوع الحالة أو الملاحظة', fr: 'Situation observée' },
        { ar: 'دور اختبار الشاشة', fr: 'Portée du test écran' },
        { ar: 'القرار الطبي الصحيح', fr: 'Démarche recommandée' },
      ],
      rows: [
        [
          { ar: 'قراءة واضحة بدون أعراض', fr: 'Lecture aisée sans gêne' },
          { ar: 'انطباع توعوي مبدئي فقط', fr: 'Simple repère éducatif' },
          { ar: 'فحص دوري عادي حسب العمر أو توصية الطبيب', fr: 'Contrôle périodique de routine selon l\'âge' },
        ],
        [
          { ar: 'صعوبة القراءة أو صداع متكرر', fr: 'Gêne de lecture ou céphalées' },
          { ar: 'ينبه لاحتمال الحاجة لتقييم الانكسار البصري', fr: 'Alerte possible sur un trouble réfractif' },
          { ar: 'حجز موعد عند طبيب العيون (حتى لو بدت القراءة مقبولة)', fr: 'Examen complet de réfraction et fond d\'œil' },
        ],
        [
          { ar: 'فقدان مفاجئ، ومضات، ستار، أو ألم حاد', fr: 'Baisse brutale, éclairs, voile ou douleur' },
          { ar: 'لا يناسب هذه الحالات إطلاقا', fr: 'Strictement inapproprié en urgence' },
          { ar: 'توجه فورا إلى طوارئ طب العيون', fr: 'Consultation ophtalmologique d\'urgence immédiate' },
        ],
      ],
    },
    tips: {
      ar: [
        'لا تغير نسبة تكبير المتصفح (أبقها 100%) ولا تقترب بشكل مبالغ فيه لتخمين السطور الصغيرة.',
        'اختبر كل عين بمفردها دون الضغط على العين المغطاة لتفادي تشوش الرؤية المؤقت.',
        'الفحص المتخصص يقيّم ضغط العين والشبكية والانكسار، وهو ما تعجز عنه الشاشات كليا.',
        'لا تؤجل مراجعة المختص عند تكرار الصداع أو تشوش القراءة أو القيادة الليلية.',
      ],
      fr: [
        'Conservez le zoom du navigateur à 100 % et maintenez une distance constante durant l\'essai.',
        'Ne pressez pas l\'œil couvert avec la paume afin d\'éviter un flou passager lors du passage au second œil.',
        'Un bilan en cabinet mesure aussi la tension oculaire et la santé rétinienne, invisibles à l\'écran.',
        'N\'attendez jamais en cas de symptôme brutal : consultez immédiatement les urgences ophtalmologiques.',
      ],
    },
    extraFaqs: [],
  },

  'water-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'البالغون الراغبون في تقدير احتياجهم اليومي المبدئي من الماء حسب الوزن والنشاط',
        fr: 'Adultes souhaitant une estimation indicative d\'hydratation quotidienne',
      },
      processingTime: {
        ar: 'حساب فوري باللتر والأكواب مع مرجع 4 هيئات صحية دولية',
        fr: 'Calcul instantané en litres et verres avec 4 références médicales',
      },
      fees: {
        ar: 'مجاني ويعمل محليا دون جمع بيانات',
        fr: 'Gratuit, sans inscription ni collecte de données',
      },
      channel: {
        ar: 'حاسبة إرشادية محلية + دليل الوقاية من الجفاف',
        fr: 'Simulateur local + guide de prévention de la déshydratation',
      },
      keyRequirement: {
        ar: 'الوزن (كغ) ومستوى النشاط اليومي مع مراعاة حرارة الطقس والحالة الصحية',
        fr: 'Poids (kg), niveau d\'activité physique et prise en compte du climat',
      },
    },
    explanation: {
      ar: [
        'تمنحك حاسبة الماء اليومية نقطة بداية مبسطة لتقدير كمية السوائل المناسبة يوميا انطلاقا من وزن الجسم ومستوى النشاط البدني، مع التذكير الواضح بأن النتيجة إرشادية وليست وصفة طبية ثابتة.',
        'يدعم شرب الماء بانتظام وظائف الخلايا والدورة الدموية واللعاب والهضم وتنظيم حرارة الجسم عبر التعرق، خصوصا خلال فصل الصيف الحار أو النشاط الرياضي المكثف؛ كما يمثل استبدال المشروبات المحلاة بالماء خيارا عمليا قليل السعرات.',
        'بدل شرب كميات ضخمة دفعة واحدة أو التقيد الحرفي بقاعدة الثمانية أكواب، وزع السوائل بهدوء على مدار اليوم، وراقب لون البول والشعور بالعطش، وتذكر أن الخضر والفواكه والحساء تساهم في إجمالي السوائل.',
        'تنبيه طبي إلزامي: لا تراعي هذه الحاسبة العامة القيود العلاجية الخاصة؛ لذا على مرضى قصور القلب أو الكلى أو من يتناولون مدرات البول الالتزام الحرفي بكمية السوائل التي يحددها الطبيب المعالج.'
      ],
      fr: [
        'Ce calculateur propose un point de départ simple pour estimer vos besoins quotidiens en eau à partir du poids corporel et du niveau d\'activité, tout en rappelant qu\'il s\'agit d\'un repère indicatif et non d\'une prescription.',
        'Une hydratation régulière soutient les fonctions cellulaires, la thermorégulation par la transpiration, la digestion et l\'élimination rénale ; privilégier l\'eau pure face aux boissons sucrées limite également les apports caloriques superflus.',
        'Plutôt que d\'ingérer de grands volumes d\'un seul coup ou d\'appliquer mécaniquement la règle des 8 verres, répartissez votre consommation sur la journée en tenant compte de la couleur des urines, de la chaleur et de l\'apport hydrique des aliments.',
        'Précaution médicale essentielle : en cas de pathologie rénale, d\'insuffisance cardiaque, de traitement diurétique ou de restriction hydrique prescrite, suivez exclusivement la consigne de votre médecin.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ التقدير الأولي حسب الوزن والنشاط',
      fr: 'Principe d\'estimation pondérale et ajustement à l\'effort',
    },
    formulaText: {
      ar: 'الاحتياج التقديري الأساسي ≈ الوزن (كغ) × 0.033 لتر + إضافة تدريجية حسب مدة النشاط البدني، مع تعديل يدوي مدروس في الطقس الحار والتعرق الزائد (مؤشر عام لا يطبق على حالات تقييد السوائل طبيا).',
      fr: 'Besoin de base indicatif ≈ Poids (kg) × 0,033 L + complément progressif selon l\'activité physique, modulé par la chaleur ambiante et la sudation (hors contre-indication médicale).',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لتوزيع السوائل في يوم نشيط',
        fr: 'Exemple pratique pour une journée active',
      },
      scenario: {
        ar: 'شخص يزن 70 كغ ويمارس نشاطا متوسطا في طقس دافئ يرغب في تنظيم شرب الماء دون انتظار العطش الشديد.',
        fr: 'Une personne de 70 kg pratiquant une activité physique modérée par temps chaud souhaite répartir son hydratation.',
      },
      result: {
        ar: 'تشير الحاسبة إلى قرابة 2.3 إلى 2.6 لتر يوميا من مجمل الماء والسوائل (حوالي 9 إلى 11 كوبا موزعة من الصباح حتى المساء)، مع زيادة التعويض إذا اشتد التعرق.',
        fr: 'L\'outil indique environ 2,3 à 2,6 litres au total (9 à 11 verres répartis régulièrement), à ajuster selon la transpiration et les aliments hydratants.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مؤشرات الترطيب وعلامات الجفاف والحالات الطبية الخاصة',
        fr: 'Repères d\'hydratation, signes de manque et précautions médicales',
      },
      headers: [
        { ar: 'الحالة أو الإشارة', fr: 'Indicateur / Situation' },
        { ar: 'المظاهر الشائعة', fr: 'Signes habituels' },
        { ar: 'التصرف الموصى به', fr: 'Attitude conseillée' },
      ],
      rows: [
        [
          { ar: 'ترطيب متوازن', fr: 'Hydratation adaptée' },
          { ar: 'بول أصفر فاتح، ندرة العطش الشديد، نشاط طبيعي', fr: 'Urine jaune pâle, absence de soif intense' },
          { ar: 'استمر في توزيع شرب الماء بانتظام مع الوجبات واليوم', fr: 'Poursuivre un apport réparti régulièrement sur la journée' },
        ],
        [
          { ar: 'علامات جفاف خفيف إلى متوسط', fr: 'Signes de déshydratation' },
          { ar: 'عطش، جفاف الفم، صداع أو دوخة، تعب، بول داكن أو قليل', fr: 'Soif, bouche sèche, céphalée, fatigue, urine foncée ou rare' },
          { ar: 'تعويض تدريجي بالسوائل والراحة بمكان معتدل الحرارة', fr: 'Réhydratation progressive au calme et à l\'ombre' },
        ],
        [
          { ar: 'نشاط شاق، حر شديد، أو مرض مع تعرق/إسهال', fr: 'Effort intense, canicule ou pertes aiguës' },
          { ar: 'فقدان كبير للماء والأملاح المعدنية', fr: 'Pertes hydriques et électrolytiques accrues' },
          { ar: 'الشرب قبل وأثناء وبعد الجهد واستشارة مختص حول محلول الإماهة', fr: 'Hydratation avant/pendant/après l\'effort et avis pour SRO si besoin' },
        ],
        [
          { ar: 'أمراض القلب أو الكلى أو مدرات البول', fr: 'Insuffisance cardiaque, rénale ou diurétiques' },
          { ar: 'حاجة دقيقة لتوازن السوائل داخل الجسم', fr: 'Équilibre hydrique médicalement encadré' },
          { ar: 'الالتزام الكامل بحد السوائل الذي يقرره الطبيب بدل الحاسبة', fr: 'Respect strict du plafond fixé par le médecin' },
        ],
      ],
    },
    tips: {
      ar: [
        'وزع شرب الماء على مدار ساعات اليوم بدل شرب كمية كبيرة في وقت واحد.',
        'لا تنتظر الشعور بالعطش الشديد، خاصة لكبار السن والأطفال وخلال فصل الصيف في الجزائر.',
        'راقب علامات الجفاف العامة مثل جفاف الفم والصداع واللون الداكن للبول.',
        'تذكر استشارة الطبيب إذا كانت لديك حالة صحية تفرض تحديد كمية السوائل اليومية.',
      ],
      fr: [
        'Fractionnez votre consommation d\'eau tout au long de la journée plutôt qu\'en une seule prise.',
        'Anticipez la soif, notamment chez les personnes âgées, les enfants et durant les périodes de forte chaleur.',
        'Surveillez la couleur des urines ainsi que l\'apparition de maux de tête ou d\'étourdissements.',
        'Respectez toujours les restrictions médicales de boisson en cas de pathologie rénale ou cardiaque.',
      ],
    },
    extraFaqs: [],
  },
};
