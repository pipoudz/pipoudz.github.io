import { ToolItem, ToolRichGuide } from '@/lib/types';

export const batch8Tools: ToolItem[] = [
  {
    id: 'tool-notes-calendar',
    slug: 'notes-calendar',
    category: 'study',
    name: {
      ar: 'سجل الملاحظات والمواعيد والمهام الدراسية',
      fr: 'Agenda de Notes, Devoirs & Tâches Académiques',
    },
    description: {
      ar: 'نظم الملاحظات والواجبات والمواعيد في تقويم دراسي واضح، وأضف الأحداث وتابع المهام اليومية مع حفظ البيانات مباشرة داخل متصفحك دون حساب.',
      fr: 'Organisez vos notes de cours, devoirs et échéances dans un calendrier d’études local, ajoutez de nouveaux rappels et suivez l’avancement de vos tâches sans inscription.',
    },
    iconName: 'CalendarCheck',
    faqs: [
      {
        question: {
          ar: 'أين تحفظ الملاحظات والمهام التي أضيفها إلى التقويم؟',
          fr: 'Où sont sauvegardées mes notes et tâches ajoutées au calendrier ?',
        },
        answer: {
          ar: 'تحفظ كافة السجلات محليا داخل متصفحك على نفس الجهاز دون إرسالها لأي خادم خارجي، مما يتيح الوصول السريع إليها فور فتح الصفحة دون تسجيل حساب.',
          fr: 'Toutes vos entrées sont mémorisées localement dans votre navigateur sur cet appareil sans transfert serveur ni création de compte.',
        },
      },
      {
        question: {
          ar: 'هل يمكن تسجيل المهام الدراسية والأعمال الموجهة مع تواريخ التسليم؟',
          fr: 'Puis-je enregistrer mes travaux dirigés (TD) et exposés avec leur échéance ?',
        },
        answer: {
          ar: 'نعم، يتيح قسم إضافة سجل جديد تدوين عنوان المهمة وتاريخها وملاحظاتها التفصيلية لمتابعة الأعمال الموجهة والفروض ومواعيد التسليم في مكان واحد.',
          fr: 'Oui, chaque fiche vous permet d’associer un titre, une date précise et une note descriptive pour regrouper TD, exposés et devoirs.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين سجل الملاحظات ومخطط الامتحانات؟',
          fr: 'Quelle différence avec le planificateur d’examens ?',
        },
        answer: {
          ar: 'يركز سجل الملاحظات والمهام على التدوين اليومي السريع للواجبات والملاحظات المرتبطة بالتواريخ، بينما يوزع مخطط الامتحانات ساعات المراجعة التراكمية قبل الاختبارات الكبرى.',
          fr: 'L’agenda de notes privilégie le suivi quotidien des tâches et notes de cours, tandis que le planificateur d’examens répartit des volumes horaires de révision.',
        },
      },
    ],
  },
  {
    id: 'tool-points-ranking',
    slug: 'points-ranking',
    category: 'study',
    name: {
      ar: 'حاسبة الترتيب والنقاط والمتوسط الموزون (/20)',
      fr: 'Calculateur de Points Pondérés & Moyenne (/20)',
    },
    description: {
      ar: 'أدخل المادة والعلامة والمعامل لحساب مجموع النقاط والمتوسط الموزون (/20) بدقة، مع توضيح شفاف أن الترتيب الفعلي بين الطلبة يتطلب نتائج الدفعة الكاملة ولا يخترع ترتيبا وهميا.',
      fr: 'Saisissez chaque matière avec sa note et son coefficient pour obtenir votre total de points et votre moyenne pondérée sur 20, sans classement fictif.',
    },
    iconName: 'Award',
    faqs: [
      {
        question: {
          ar: 'هل تعرض الأداة ترتيبي الفعلي بين طلبة الدفعة أو القسم؟',
          fr: 'L’outil calcule-t-il mon rang exact au sein de ma promotion ?',
        },
        answer: {
          ar: 'لا؛ لأن الترتيب الفعلي بين الطلبة يتطلب قاعدة نتائج جميع طلبة المجموعة أو الدفعة، لذلك تحسب هذه الأداة مجموع نقاطك ومتوسطك الموزون على 20 بدقة ولا تخترع ترتيبا غير حقيقي.',
          fr: 'Non ; un classement réel exige les notes de l’ensemble des étudiants de la promotion. Cet outil calcule fidèlement vos points et votre moyenne pondérée sur 20 sans inventer de rang.',
        },
      },
      {
        question: {
          ar: 'كيف يتم احتساب مجموع النقاط والمتوسط الموزون؟',
          fr: 'Comment sont calculés le total des points et la moyenne pondérée ?',
        },
        answer: {
          ar: 'تضرب علامة كل مادة في معاملها ثم تجمع النتائج للحصول على مجموع النقاط، وبعدها يقسم المجموع على مجموع المعاملات لاستخراج المتوسط الموزون على 20.',
          fr: 'Chaque note est multipliée par son coefficient pour obtenir les points ; la somme totale des points est ensuite divisée par la somme des coefficients.',
        },
      },
      {
        question: {
          ar: 'هل تصلح الحاسبة لتقدير معدل البكالوريا والترتيب التقديري للماستر؟',
          fr: 'Ce calculateur convient-il pour estimer les moyennes BAC ou de classement Master ?',
        },
        answer: {
          ar: 'نعم، تستعمل لتقدير المتوسط الموزون لمختلف المواد والمعاملات في التعليم الثانوي والجامعي قبل إعلان كشوف النقاط الرسمية.',
          fr: 'Oui, il sert aussi bien aux lycéens qu’aux étudiants LMD souhaitant simuler leur moyenne pondérée avant la publication officielle des relevés.',
        },
      },
    ],
  },
  {
    id: 'tool-pomodoro',
    slug: 'pomodoro',
    category: 'study',
    isPopular: true,
    name: {
      ar: 'مؤقت بومودورو للدراسة والتركيز العميق (25 / 5 دقائق)',
      fr: 'Minuteur Pomodoro pour Révisions & Concentration (25 / 5 min)',
    },
    description: {
      ar: 'قسم وقت المراجعة إلى جلسات تركيز مركزة (25 دقيقة) وفترات راحة قصيرة أو طويلة مع زر بدء وإيقاف مؤقت وتنبيه داخل الصفحة دون إنشاء حساب أو إرسال بيانات.',
      fr: 'Découpez vos séances d’étude en blocs de concentration (25 min) et pauses réparatrices avec contrôle démarrage/pause et alerte intégrée sans création de compte.',
    },
    iconName: 'Timer',
    faqs: [
      {
        question: {
          ar: 'كيف أستخدم مؤقت بومودورو لتحصيل أفضل أثناء المراجعة؟',
          fr: 'Comment appliquer efficacement la méthode Pomodoro pendant les révisions ?',
        },
        answer: {
          ar: 'اختر جلسة دراسة مدتها 25 دقيقة واضغط «ابدأ» وركز على مهمة واحدة دون مشتتات؛ عند انتهاء المؤقت يظهر تنبيه داخل الصفحة لتأخذ استراحة قصيرة لـ 5 دقائق قبل بدء الدورة التالية.',
          fr: 'Lancez un bloc de 25 minutes sur une tâche unique sans distractions, puis accordez-vous une pause courte de 5 minutes au signal avant d’enchaîner.',
        },
      },
      {
        question: {
          ar: 'هل يجب إبقاء صفحة المؤقت مفتوحة أثناء الدراسة؟',
          fr: 'Faut-il garder l’onglet ouvert pendant le décompte ?',
        },
        answer: {
          ar: 'يعمل المؤقت داخل المتصفح مباشرة، لذا فإن إبقاء الصفحة مفتوحة (في نافذة ظاهرة أو جانبية) يساعد على استمرار دقة العرض وظهور التنبيه الفوري في وقته.',
          fr: 'Le minuteur s’exécute dans votre navigateur : laisser l’onglet ouvert assure un affichage continu et le déclenchement immédiat de l’alerte de fin.',
        },
      },
      {
        question: {
          ar: 'هل يمكن إيقاف المؤقت مؤقتا أو إعادة ضبطه عند حدوث طارئ؟',
          fr: 'Puis-je mettre en pause ou réinitialiser une session en cours ?',
        },
        answer: {
          ar: 'نعم، يمكنك إيقاف الجلسة مؤقتا واستئنافها من الزر نفسه، أو الضغط على زر إعادة الضبط للعودة إلى مدة البداية، كما يمكنك التبديل الفوري بين وضع التركيز ووضع الاستراحة.',
          fr: 'Oui, un bouton dédié permet de mettre en pause et reprendre, tandis que le bouton de réinitialisation remet instantanément le compteur au début du bloc.',
        },
      },
    ],
  },
  {
    id: 'tool-research-plan',
    slug: 'research-plan',
    category: 'study',
    name: {
      ar: 'مولد خطة البحث ومذكرة التخرج (الليسانس والماستر)',
      fr: 'Générateur de Plan de Recherche & Mémoire (Licence / Master)',
    },
    description: {
      ar: 'أنشئ هيكل خطة بحث أو مذكرة تخرج متكامل يشمل الإشكالية والفرضيات والمقدمة والفصول عبر قالب بداية سريع، ثم عدل الهيكل واحفظه محليا أو صدره للطباعة PDF وWord.',
      fr: 'Structurez votre plan de recherche ou mémoire universitaire (problématique, hypothèses, introduction, chapitres) à partir d’un modèle rapide et exportez-le pour Word ou PDF.',
    },
    iconName: 'FileSpreadsheet',
    faqs: [
      {
        question: {
          ar: 'ما العناصر المنهجية التي يتضمنها مولد خطة البحث؟',
          fr: 'Quelles rubriques méthodologiques inclut le générateur de plan ?',
        },
        answer: {
          ar: 'يضم بيانات البحث الأساسية، الإشكالية، الفرضيات، المقدمة، تقسيم الفصول والمباحث، والخاتمة، مع توفر قالب بداية سريع ومعاينة منظمة للهيكلة الكاملة.',
          fr: 'Il couvre l’identification du sujet, la problématique, les hypothèses, l’introduction, l’articulation en chapitres/sections et la conclusion avec aperçu instantané.',
        },
      },
      {
        question: {
          ar: 'هل يمكن حفظ المسودة وتصدير خطة البحث بصيغة Word أو PDF؟',
          fr: 'Puis-je sauvegarder mon plan et l’exporter en Word ou PDF ?',
        },
        answer: {
          ar: 'نعم، تحفظ المسودات محليا في متصفحك لإكمال تعديلها لاحقا، ويمكنك نسخ المعاينة المهيكلة إلى Word أو استخدام الطباعة المباشرة لحفظها كملف PDF لعرضها على الأستاذ المشرف.',
          fr: 'Oui, vos modifications sont sauvegardées localement et vous pouvez exporter ou imprimer directement votre architecture en PDF ou vers Word pour validation par votre encadrant.',
        },
      },
      {
        question: {
          ar: 'هل يغني القالب الافتراضي عن التوجيه المنهجي للأستاذ المشرف؟',
          fr: 'Ce modèle remplace-t-il les recommandations de mon directeur de mémoire ?',
        },
        answer: {
          ar: 'لا؛ القالب وسيلة عملية لبناء المسودة الأولية وتنظيم الأفكار بسرعة، ويبقى اعتماد التقسيم النهائي وعدد الفصول خاضعا لدليل الكلية وتوجيه الأستاذ المشرف.',
          fr: 'Non ; c’est une trame de départ structurante dont le découpage définitif doit toujours respecter les consignes méthodologiques de votre encadrant.',
        },
      },
    ],
  },
  {
    id: 'tool-semester-calculator',
    slug: 'semester-calculator',
    category: 'study',
    name: {
      ar: 'حاسبة المعدل السنوي ومعدلات الفصول الثلاثة',
      fr: 'Calculateur de Moyenne Annuelle (3 Trimestres / Semestres)',
    },
    description: {
      ar: 'احسب المعدل السنوي بسرعة انطلاقا من معدلات الفصول الثلاثة أو السداسيات في نظام التعليم الجزائري، مع حساب المتوسط النهائي والتأكد الفوري من عتبة النجاح.',
      fr: 'Calculez rapidement votre moyenne générale annuelle à partir de vos trois moyennes trimestrielles ou de vos deux semestres universitaires selon le système algérien.',
    },
    iconName: 'Calculator',
    faqs: [
      {
        question: {
          ar: 'كيف تحسب الحاسبة المعدل السنوي انطلاقا من معدلات الفصول الثلاثة؟',
          fr: 'Comment est calculée la moyenne annuelle à partir des trois trimestres ?',
        },
        answer: {
          ar: 'يتم جمع معدلات الفصول الثلاثة (الفصل الأول + الفصل الثاني + الفصل الثالث) ثم قسمة المجموع على 3 لاستخراج المعدل السنوي النهائي على 20، أو القسمة على 2 في النظام السداسي الجامعي.',
          fr: 'La moyenne annuelle correspond à la somme des trois moyennes trimestrielles divisée par 3 (ou des deux semestres divisée par 2 en régime LMD).',
        },
      },
      {
        question: {
          ar: 'ما عتبة الانتقال المعتادة وماذا عن دورة الاستدراك أو الإنقاذ؟',
          fr: 'Quel est le seuil de passage habituel et qu’en est-il du rattrapage ?',
        },
        answer: {
          ar: 'عتبة النجاح القياسية هي 10.00 / 20، وقد تخضع قرارات الانتقال أو الإنقاذ أو الرصيد LMD لشروط إضافية تقررها مجالس الأقسام أو اللجان البيداغوجية في المؤسسة.',
          fr: 'Le seuil standard d’admission est de 10,00 / 20, sous réserve des règles particulières de compensation, crédits ou rachat arrêtées par les conseils de classe ou jurys.',
        },
      },
      {
        question: {
          ar: 'كيف أحسب معدل فصل واحد انطلاقا من علامات المواد ومعاملاتها أولا؟',
          fr: 'Comment calculer d’abord la moyenne d’un trimestre avec les coefficients ?',
        },
        answer: {
          ar: 'يمكنك استخدام "حاسبة المعدل الدراسي" أو "حاسبة الترتيب والنقاط" في البوابة لاستخراج معدل كل فصل على حدة، ثم إدخال معدلات الفصول الثلاثة هنا لاستخراج المعدل السنوي.',
          fr: 'Utilisez d’abord notre calculateur de moyenne par matières et coefficients pour obtenir chaque trimestre, puis saisissez les trois totaux ici.',
        },
      },
    ],
  },
  {
    id: 'tool-study-schedule',
    slug: 'study-schedule',
    category: 'study',
    name: {
      ar: 'مولد جدول الدراسة الأسبوعي (حسب الأيام والمواد والساعات)',
      fr: 'Générateur d’Emploi du Temps d’Études Hebdomadaire',
    },
    description: {
      ar: 'أنشئ جدول دراسة أسبوعيا مرنا بإضافة المواد والأيام وساعات المراجعة، ونظم حصص التحضير والواجبات في برنامج أسبوعي واضح قابل للتعديل والحفظ محليا.',
      fr: 'Construisez un emploi du temps d’études hebdomadaire en associant matières, jours et créneaux horaires, modifiable librement avec sauvegarde locale dans le navigateur.',
    },
    iconName: 'CalendarRange',
    faqs: [
      {
        question: {
          ar: 'كيف أبدأ في إنشاء جدول الدراسة الأسبوعي الخاص بي؟',
          fr: 'Comment créer mon emploi du temps hebdomadaire ?',
        },
        answer: {
          ar: 'أدخل اسم المادة، اختر اليوم من أيام الأسبوع، وحدد وقت البداية والنهاية أو المدة، ليظهر الموعد فورا داخل شبكة الأسبوع القابلة للتعديل والحذف.',
          fr: 'Ajoutez le nom de la matière, sélectionnez le jour de la semaine et indiquez la plage horaire ; votre créneau apparaît aussitôt dans la grille hebdomadaire.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تعديل الجدول مع تغير برنامج الجامعة أو الدروس الخصوصية؟',
          fr: 'Puis-je modifier facilement mes créneaux si mon emploi du temps change ?',
        },
        answer: {
          ar: 'نعم، يتيح المولد إضافة وحذف الحصص بحرية تامة في أي يوم، مع حفظ النسخة المحدثة محليا في متصفحك تلقائيا.',
          fr: 'Oui, chaque séance peut être ajustée ou supprimée à tout moment avec mémorisation locale instantanée dans votre navigateur.',
        },
      },
      {
        question: {
          ar: 'ما أفضل طريقة لتوزيع المواد الصعبة والمواد الأدبية في الجدول الأسبوعي؟',
          fr: 'Comment équilibrer matières difficiles et révisions légères sur la semaine ?',
        },
        answer: {
          ar: 'خصص ساعات التركيز الصباحية أو فترات النشاط الذهني الأعلى للمواد العلمية والتمارين الصعبة، واجعل الحصص المسائية الخفيفة للقراءة والحفظ والمراجعة بالبطاقات التعليمية.',
          fr: 'Placez les matières exigeantes et exercices techniques sur vos créneaux de pic de vigilance, et réservez la fin de journée aux lectures ou flashcards.',
        },
      },
    ],
  },
];

export const batch8ToolGuides: Record<string, Partial<ToolRichGuide>> = {
  'notes-calendar': {
    quickSummary: {
      targetAudience: {
        ar: 'التلاميذ وطلبة الجامعات الراغبون في تدوين الملاحظات والمهام اليومية ضمن تقويم دراسي',
        fr: 'Lycéens et étudiants centralisant notes, devoirs et rappels par date',
      },
      processingTime: {
        ar: 'إضافة فورية للسجل وعرض منظم في المتصفح',
        fr: 'Ajout et consultation immédiats dans le navigateur',
      },
      fees: {
        ar: 'مجاني كليا ويعمل مباشرة على جهازك دون حساب',
        fr: '100 % gratuit sur votre appareil sans création de compte',
      },
      channel: {
        ar: 'تقويم ملاحظات ومهام محلي (Browser Local Storage)',
        fr: 'Agenda académique local (stockage navigateur)',
      },
      keyRequirement: {
        ar: 'إضافة سجل جديد بعنوان المهمة أو الملاحظة وتاريخ الاستحقاق',
        fr: 'Titre de la note ou tâche et date associée',
      },
    },
    explanation: {
      ar: [
        'يوفر سجل الملاحظات والمواعيد والمهام مساحة عملية وخفيفة للطلبة والتلاميذ لتدوين الواجبات المنزلية، ملاحظات المحاضرات والأعمال الموجهة، ومواعيد التسليم ضمن تقويم دراسي واضح.',
        'على عكس تطبيقات التدوين الثقيلة التي تفرض إنشاء حساب سحابي أو مزامنة إجبارية، يعمل السجل مباشرة في متصفحك مع حفظ فوري للبيانات على جهازك الشخصي.',
        'يمكنك عبر قسم إضافة سجل جديد تسجيل عنوان النشاط، وتحديد تاريخه الدقيق، وكتابة الملاحظات المرافقة، ومتابعة حالة الإنجاز أولا بأول طوال السنة الدراسية.',
        'للتنبيه التنظيمي، تحفظ الملاحظات في متصفحك الحالي فقط، لذا يفضل التثبت من عدم مسح بيانات الموقع أو تدوين المواعيد الحساسة أيضا في مخطط الامتحانات.'
      ],
      fr: [
        'L’agenda de notes et tâches académiques propose aux élèves et étudiants un espace léger pour consigner devoirs, remarques de cours, séances de TD et échéances sur un calendrier lisible.',
        'Sans inscription ni compte cloud obligatoire, toutes vos saisies sont enregistrées directement dans la mémoire locale de votre navigateur pour un accès immédiat dès l’ouverture.',
        'Ajoutez chaque événement avec son intitulé, sa date cible et son commentaire détaillé, puis suivez vos progrès au fil des semaines.',
        'Pour les échéances d’examens majeures nécessitant une répartition d’heures, associez cet agenda au planificateur d’examens du portail.'
      ],
    },
    formulaTitle: {
      ar: 'منهجية تنظيم السجلات الزمنية والمهام الدراسية',
      fr: 'Organisation chronologique des notes et tâches',
    },
    formulaText: {
      ar: 'كل سجل = [تاريخ الموعد] + [تصنيف المهمة أو الملاحظة] + [حالة الإنجاز]، مرتبة زمنيا لمنع تراكم الفروض والمشاريع في نهاية السداسي.',
      fr: 'Fiche = [Date] + [Intitulé / Devoir / Note] + [Statut accompli ou à faire], classée par ordre chronologique.',
    },
    practicalExample: {
      title: {
        ar: 'مثال متابعة فروض الأسبوع وملاحظات الأعمال الموجهة (TD)',
        fr: 'Exemple pratique pour une semaine de TD universitaires',
      },
      scenario: {
        ar: 'طالب جامعي يدون ثلاث مهام أسبوعية: تحضير تمرين التحليل ليوم الثلاثاء، تسليم تقرير الفيزياء الخميس، ومراجعة ملخص الإحصاء السبت.',
        fr: 'Un étudiant note trois échéances hebdomadaires : exercice de TD mardi, rapport jeudi et synthèse samedi.',
      },
      result: {
        ar: 'تظهر المهام الثلاث مرتبة بالتاريخ في التقويم مع إمكانية التأشير عند إتمام كل واجب لتصفية الذهن والالتزام بالآجال.',
        fr: 'Les trois tâches s’affichent par ordre de date et peuvent être cochées dès leur finalisation.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'تكامل أدوات التنظيم الدراسي في البوابة',
        fr: 'Complémentarité des outils d’organisation scolaire',
      },
      headers: [
        { ar: 'الأداة', fr: 'Outil' },
        { ar: 'الغرض الأساسي', fr: 'Usage principal' },
        { ar: 'متى تختارها؟', fr: 'Quand l’utiliser ?' },
      ],
      rows: [
        [
          { ar: 'سجل الملاحظات والمهام', fr: 'Agenda de notes & tâches' },
          { ar: 'تدوين يومي للملاحظات والواجبات والمواعيد السريعة', fr: 'Suivi rapide des devoirs et rappels quotidiens' },
          { ar: 'بداية كل أسبوع دراسي ومع المحاضرات', fr: 'Chaque semaine pour vos TD et devoirs' },
        ],
        [
          { ar: 'مخطط الامتحانات والمهام', fr: 'Planificateur d’examens' },
          { ar: 'توزيع ساعات المراجعة المسبقة قبل الامتحان', fr: 'Lissage d’heures avant les partiels' },
          { ar: 'قبل الامتحانات السداسية أو تسليم البحوث الكبرى', fr: 'À l’approche des examens ou soutenances' },
        ],
      ],
    },
    tips: {
      ar: [
        'خصص 5 دقائق نهاية كل حصة أو أسبوع لتسجيل الواجبات والملاحظات الجديدة في التقويم قبل نسيانها.',
        'اكتب الملاحظات بصياغة مختصرة وواضحة تذكر فيها الصفحة أو رقم التمرين المطلوب.',
        'تجنب مسح بيانات التصفح (Site Data) للموقع إذا أردت الحفاظ على سجلاتك محفوظة محليا.',
        'اربط مهامك الصعبة بجلسات تركيز بومودورو لسرعة الإنجاز.',
      ],
      fr: [
        'Prenez deux minutes après chaque cours pour noter les consignes de TD ou devoirs à rendre.',
        'Gardez des intitulés concis mentionnant chapitre ou numéro d’exercice.',
        'Évitez d’effacer les données locales du navigateur afin de préserver votre agenda.',
        'Associez les tâches longues au minuteur Pomodoro pour avancer régulièrement.',
      ],
    },
    extraFaqs: [],
  },

  'points-ranking': {
    quickSummary: {
      targetAudience: {
        ar: 'التلاميذ والطلبة لحساب مجموع النقاط والمتوسط الموزون بدقة دون افتراضات',
        fr: 'Élèves et étudiants calculant leur total de points et moyenne pondérée',
      },
      processingTime: {
        ar: 'حساب آني للنقاط المرجحة والمتوسط على 20 عند كل تعديل',
        fr: 'Calcul instantané du total pondéré et de la moyenne sur 20',
      },
      fees: {
        ar: 'أداة مجانية وشفافة تعمل داخل المتصفح فقط',
        fr: 'Gratuit, transparent et exécuté localement',
      },
      channel: {
        ar: 'جدول مواد ومعاملات (المادة + العلامة + المعامل)',
        fr: 'Grille matières / notes / coefficients dans le navigateur',
      },
      keyRequirement: {
        ar: 'إدخال اسم المادة والعلامة من 20 والمعامل الموافق لكل مادة',
        fr: 'Saisie des notes sur 20 et coefficients correspondants',
      },
    },
    explanation: {
      ar: [
        'تمكنك حاسبة الترتيب والنقاط من إدخال موادك الدراسية مع علامة كل مادة (من 20) ومعاملها، لتظهر فورا مجموع النقاط المرجح والمتوسط الموزون الدقيق على 20 في حساب واحد واضح.',
        'تعتمد الأداة مبدأ الصدق الإحصائي التام؛ إذ تنبه بوضوح إلى أن الترتيب الفعلي بين الطلبة في القسم أو الدفعة يتطلب بيانات نتائج كافة أفراد المجموعة، ولذلك فهي تحسب نقاطك ومتوسطك الفعلي بدقة ولا تخترع ترتيبا وهميا.',
        'تفيد الحاسبة خصوصا في اختبار سيناريوهات تحسين العلامة في المواد ذات المعاملات الكبيرة (مثل الرياضيات أو الفيزياء أو مواد التخصص في الجامعة) لمعرفة أثرها المباشر على المعدل العام.',
        'جميع الأرقام تعالج محليا داخل جهازك دون تسجيل حساب ودون حفظ درجاتك على أي خادم.'
      ],
      fr: [
        'Ce calculateur permet de saisir l’ensemble de vos matières avec leur note sur 20 et leur coefficient afin d’obtenir instantanément votre total de points pondérés ainsi que votre moyenne exacte sur 20.',
        'Par souci de rigueur et de transparence, l’outil précise qu’un classement réel entre étudiants nécessite les notes de toute la promotion : il calcule fidèlement votre score et votre moyenne sans jamais afficher de rang inventé.',
        'C’est un support idéal pour simuler l’impact d’une meilleure note dans une matière à fort coefficient avant les examens finaux ou de rattrapage.',
        'Tous les calculs s’effectuent localement dans votre navigateur sans sauvegarde distante de vos notes.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة مجموع النقاط والمتوسط الموزون على 20',
      fr: 'Formule des points pondérés et de la moyenne (/20)',
    },
    formulaText: {
      ar: 'نقاط المادة = العلامة × المعامل. مجموع النقاط = ∑(العلامة × المعامل). المتوسط الموزون (/20) = مجموع النقاط ÷ مجموع المعاملات.',
      fr: 'Points matière = Note × Coefficient. Total points = Σ(Note × Coeff). Moyenne pondérée (/20) = Total points ÷ Σ(Coeff).',
    },
    practicalExample: {
      title: {
        ar: 'مثال حساب مجموع النقاط والمتوسط لثلاث مواد بمعاملات مختلفة',
        fr: 'Exemple pratique sur trois matières à coefficients distincts',
      },
      scenario: {
        ar: 'طالب تحصل على 15 في مادة بمعامل 4، و12 في مادة بمعامل 3، و14 في مادة بمعامل 2.',
        fr: 'Un étudiant obtient 15/20 (coeff 4), 12/20 (coeff 3) et 14/20 (coeff 2).',
      },
      result: {
        ar: 'مجموع النقاط = (60 + 36 + 28) = 124 نقطة، ومجموع المعاملات = 9، وبالتالي المتوسط الموزون = 13.78 / 20.',
        fr: 'Total des points = 124 sur un total de coefficients de 9, soit une moyenne pondérée exacte de 13,78 / 20.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مقارنة المخرجات في حاسبة الترتيب والنقاط',
        fr: 'Interprétation des résultats du calculateur',
      },
      headers: [
        { ar: 'المؤشر', fr: 'Indicateur' },
        { ar: 'طريقة الحساب', fr: 'Calcul' },
        { ar: 'حدود الدقة', fr: 'Précision & limites' },
      ],
      rows: [
        [
          { ar: 'مجموع النقاط المرجح', fr: 'Total des points' },
          { ar: '∑(العلامة × المعامل)', fr: 'Σ(Note × Coefficient)' },
          { ar: 'حساب رياضي دقيق 100% وفق إدخالاتك', fr: 'Exact à 100 % selon vos saisies' },
        ],
        [
          { ar: 'المتوسط الموزون (/ 20)', fr: 'Moyenne pondérée (/20)' },
          { ar: 'مجموع النقاط ÷ مجموع المعاملات', fr: 'Total points ÷ Σ(Coefficients)' },
          { ar: 'يطابق القاعدة الرسمية للمعاملات في الجزائر', fr: 'Conforme à la pondération officielle algérienne' },
        ],
        [
          { ar: 'الترتيب الفعلي في الدفعة', fr: 'Classement promotion' },
          { ar: 'يتطلب كشوف كل الطلبة', fr: 'Requiert les résultats de toute la promo' },
          { ar: 'غير مخترع هنا حفاظا على المصداقية العلمية', fr: 'Non simulé pour garantir l’intégrité des données' },
        ],
      ],
    },
    tips: {
      ar: [
        'تحقق من المعامل الرسمي لكل مادة في كشف النقاط أو البرنامج الوزاري لشعبتك قبل الحساب.',
        'جرب رفع العلامات المتوقعة في المواد ذات المعامل الأكبر لمعرفة كم نقطة تحتاجها لبلوغ معدل 10 أو 14 أو 16.',
        'انتقل إلى حاسبة المعدل السنوي بمجرد استخراج معدلات الفصول الثلاثة لحساب النتيجة النهائية للسنة.',
        'تأكد من مطابقة التقريب النهائي (رقمان بعد الفاصلة) في كشوف المؤسسة الرسمية.',
      ],
      fr: [
        'Vérifiez les coefficients officiels de votre filière ou maquette LMD avant la saisie.',
        'Simulez vos objectifs sur les matières à fort coefficient pour prioriser vos révisions.',
        'Complétez avec le calculateur annuel une fois vos moyennes de semestres ou trimestres calculées.',
        'Référez-vous toujours au relevé de notes officiel délivré par votre scolarité.',
      ],
    },
    extraFaqs: [],
  },

  'pomodoro': {
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة والباحثون والعاملون عن بعد لتقسيم المذاكرة ومكافحة التسويف',
        fr: 'Étudiants, chercheurs et actifs souhaitant structurer leur concentration',
      },
      processingTime: {
        ar: 'دورات تركيز 25 دقيقة واستراحة 5 دقائق بضغطة زر',
        fr: 'Blocs Focus de 25 min et pauses de 5 min en un clic',
      },
      fees: {
        ar: 'مجاني كليا داخل المتصفح دون حساب أو إعلانات',
        fr: 'Gratuit dans le navigateur sans inscription ni publicité',
      },
      channel: {
        ar: 'مؤقت بصري فوري + تنبيه داخل الصفحة + خيار صوت قصير',
        fr: 'Chronomètre local + alerte dans la page et option sonore',
      },
      keyRequirement: {
        ar: 'اختيار المدة والضغط على ابدأ مع إبقاء الصفحة مفتوحة خلال الجلسة',
        fr: 'Démarrer le minuteur et garder l’onglet ouvert durant la séance',
      },
    },
    explanation: {
      ar: [
        'يعتمد مؤقت بومودورو للدراسة على تقنية إدارة الوقت المعروفة بتقسيم ساعات المذاكرة الطويلة إلى جلسات تركيز عميق مدتها 25 دقيقة تليها فترات راحة قصيرة (5 دقائق) أو طويلة، مما يمنع الإجهاد الذهني السريع ويعزز الاستمرارية.',
        'صممت الواجهة لتكون هادئة وواضحة تماما؛ اختر وضع التركيز أو الاستراحة واضغط «ابدأ» لتشغيل العداد، ويمكنك إيقافه مؤقتا أو استئنافه من الزر نفسه أو إعادة ضبطه في أي لحظة.',
        'عند انتهاء مدة الجلسة، يظهر تنبيه داخل الصفحة نفسها (مع إمكانية تفعيل صوت تنبيه قصير)، كما ينصح بإبقاء صفحة المؤقت مفتوحة أثناء الدراسة لضمان استمرار العرض بدقة.',
        'يعمل المؤقت بالكامل داخل متصفحك دون إنشاء حساب ودون إرسال أي بيانات.'
      ],
      fr: [
        'Le minuteur Pomodoro repose sur l’alternance structurée entre phases de travail intense de 25 minutes et courtes pauses de récupération de 5 minutes, limitant la fatigue cognitive et la procrastination.',
        'Épurée et sans distraction, l’interface permet de basculer entre Focus et Pause, de démarrer ou suspendre le décompte depuis le même bouton et de réinitialiser à tout moment.',
        'À l’expiration du créneau, une alerte s’affiche directement dans la page (avec signal sonore optionnel) ; gardez simplement l’onglet ouvert pendant votre séance pour un suivi continu.',
        'Exécuté 100 % côté client sans création de compte, cet outil s’intègre naturellement avec le planning d’examens et les flashcards.'
      ],
    },
    formulaTitle: {
      ar: 'دورة تقنية بومودورو القياسية (25 / 5 ثم راحة طويلة)',
      fr: 'Cycle classique de la technique Pomodoro',
    },
    formulaText: {
      ar: '1 بومودورو = 25 دقيقة تركيز خالص على مهمة واحدة + 5 دقائق راحة. بعد إتمام 4 جلسات بومودورو متتالية، يوصى بأخذ استراحة طويلة من 15 إلى 30 دقيقة لاستعادة النشاط الذهني.',
      fr: '1 Pomodoro = 25 min de concentration sans interruption + 5 min de pause. Après 4 cycles consécutifs, prenez une pause prolongée de 15 à 30 minutes.',
    },
    practicalExample: {
      title: {
        ar: 'مثال إنجاز حصة مراجعة لمدة ساعتين دون تشتت',
        fr: 'Exemple pratique pour une séance de révision de 2 heures',
      },
      scenario: {
        ar: 'طالب يريد حل موضوع بكالوريا سابق ومراجعة ملخص درس في ساعتين مساء.',
        fr: 'Un élève souhaite traiter un sujet d’annales complet en deux heures sans consulter son téléphone.',
      },
      result: {
        ar: 'يشغل 4 دورات بومودورو (4 × 25 دقيقة عمل + 3 × 5 دقائق راحة)، فيحافظ على صفاء الذهن وينجز الموضوع كاملا دون إرهاق.',
        fr: 'En quatre blocs de 25 minutes entrecoupés de pauses de 5 minutes, il termine le sujet tout en gardant un rythme soutenu.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'تنظيم أوضاع المؤقت ودور كل فترة في التحصيل الدراسي',
        fr: 'Modes du minuteur et rôle pédagogique',
      },
      headers: [
        { ar: 'الوضع', fr: 'Mode' },
        { ar: 'المدة القياسية', fr: 'Durée standard' },
        { ar: 'التوصية العملية', fr: 'Recommandation' },
      ],
      rows: [
        [
          { ar: 'جلسة تركيز (Focus)', fr: 'Session Focus' },
          { ar: '25 دقيقة', fr: '25 minutes' },
          { ar: 'إغلاق الإشعارات والتركيز على تمرين أو محور محدد فقط', fr: 'Couper les notifications et traiter une seule tâche' },
        ],
        [
          { ar: 'استراحة قصيرة (Pause)', fr: 'Pause courte' },
          { ar: '5 دقائق', fr: '5 minutes' },
          { ar: 'النهوض، شرب الماء، وإراحة العينين بعيدا عن الشاشة', fr: 'Se lever, s’hydrater et reposer les yeux' },
        ],
        [
          { ar: 'بعد 4 دورات متتالية', fr: 'Après 4 cycles' },
          { ar: '15–30 دقيقة راحة طويلة', fr: 'Pause longue 15–30 min' },
          { ar: 'استراحة أطول قبل الانتقال إلى مادة جديدة في الجدول', fr: 'Récupération avant de changer de matière' },
        ],
      ],
    },
    tips: {
      ar: [
        'حدد المهمة الدقيقة قبل الضغط على «ابدأ» (مثلا: حل 3 تمارين أو حفظ 10 بطاقات).',
        'اترك صفحة المؤقت مفتوحة أمامك لتستمر دقة العداد ويظهر التنبيه في حينه.',
        'تجنب تصفح الشبكات الاجتماعية خلال فترة الاستراحة القصيرة (5 دقائق) حتى لا ينقطع التركيز.',
        'اربط جلساتك اليومية ببرنامج مخطط المراجعة الذكي لمتابعة إنجازك الفعلي.',
      ],
      fr: [
        'Définissez un objectif concret avant chaque cycle de 25 minutes.',
        'Laissez la page ouverte à l’écran pour profiter pleinement du signal de fin.',
        'Évitez les réseaux sociaux pendant la pause de 5 minutes pour préserver votre attention.',
        'Combinez ce chronomètre avec le générateur d’emploi du temps hebdomadaire.',
      ],
    },
    extraFaqs: [],
  },

  'research-plan': {
    quickSummary: {
      targetAudience: {
        ar: 'طلبة الليسانس والماستر والدكتوراه في مرحلة إعداد خطة مذكرة التخرج',
        fr: 'Étudiants en Licence, Master et Doctorat préparant un mémoire',
      },
      processingTime: {
        ar: 'بناء فوري لهيكل البحث مع معاينة مباشرة وقالب بداية سريع',
        fr: 'Structuration instantanée avec modèle de départ et aperçu',
      },
      fees: {
        ar: 'مجاني بالكامل مع حفظ محلي وتصدير Word وPDF',
        fr: 'Gratuit avec sauvegarde locale et export Word / PDF',
      },
      channel: {
        ar: 'محرر خطط بحوث علمية داخل المتصفح (إشكالية، فرضيات، فصول)',
        fr: 'Éditeur local de plan académique (problématique, hypothèses, chapitres)',
      },
      keyRequirement: {
        ar: 'بيانات البحث، الإشكالية، الفرضيات، وتسمية الفصول والمباحث الرئيسية',
        fr: 'Sujet, problématique, hypothèses et intitulés des chapitres',
      },
    },
    explanation: {
      ar: [
        'يساعد مولد خطة البحث طلبة الجامعات في الجزائر على الانتقال من الفكرة الأولية إلى هيكل بحثي متماسك ومنهجي صالح للعرض على الأستاذ المشرف أو اللجنة العلمية.',
        'يحتوي المولد على أربعة أقسام مترابطة: بيانات البحث الأساسية (العنوان، التخصص، الطالب والمشرف)، قالب بداية سريع يختصر الوقت، محرر هيكل الخطة الذي يغطي الإشكالية والفرضيات والمقدمة والفصول والخاتمة، ثم المعاينة المباشرة.',
        'يمكنك تعديل ترتيب الفصول والمباحث بحرية وإعادة صياغة الأسئلة البحثية حتى تتسق الإشكالية مع الفرضيات وخطة التحليل النظري والتطبيقي.',
        'تحفظ خطتك محليا على جهازك للعودة إليها أثناء مراحل البحث، مع إمكانية التصدير أو الطباعة بصيغة Word أو PDF؛ مع التنبيه أن الاعتماد النهائي لخطة المذكرة يبقى وفق الدليل المنهجي للكلية وتوجيهات المشرف.'
      ],
      fr: [
        'Le générateur de plan de recherche accompagne les étudiants algériens (Licence, Master, Doctorat) pour transformer une idée de sujet en architecture méthodologique cohérente à soumettre au directeur de mémoire.',
        'L’outil articule quatre étapes fluides : métadonnées du mémoire, modèle de démarrage rapide, éditeur de structure (problématique, hypothèses, introduction, chapitres, conclusion) et aperçu en temps réel.',
        'Ajustez librement l’équilibre entre la partie théorique et l’étude de terrain ou pratique jusqu’à obtenir une progression logique claire.',
        'Vos brouillons sont conservés localement dans le navigateur et prêts à être exportés ou imprimés vers Word et PDF, sous réserve des consignes méthodologiques propres à votre département.'
      ],
    },
    formulaTitle: {
      ar: 'البنية المنهجية الكلاسيكية لمذكرات التخرج (IMRAD / الفصول)',
      fr: 'Architecture académique type d’un plan de mémoire',
    },
    formulaText: {
      ar: 'مقدمة عامة (توطئة + إشكالية رئيسية + تساؤلات فرعية + فرضيات + منهج الدراسة) -> فصل نظري (إطار مفاهيمي ودراسات سابقة) -> فصل تطبيقي أو ميداني (تحليل المعطيات واختبار الفرضيات) -> خاتمة وتوصيات وقائمة المراجع.',
      fr: 'Introduction générale (contexte, problématique, hypothèses, méthodologie) -> Cadre théorique & revue de littérature -> Étude empirique / appliquée -> Conclusion générale & bibliographie.',
    },
    practicalExample: {
      title: {
        ar: 'مثال هيكلة خطة مذكرة ماستر في الإدارة الرقمية أو العلوم التطبيقية',
        fr: 'Exemple pratique de structuration d’un mémoire de Master',
      },
      scenario: {
        ar: 'طالب ماستر يصمم خطة من فصلين: فصل نظري للإطار المفاهيمي وفصل ميداني لدراسة حالة في مؤسسة جزائرية.',
        fr: 'Un étudiant de Master élabore un plan en deux chapitres : cadre théorique puis étude de cas empirique.',
      },
      result: {
        ar: 'يولد الهيكل المتكامل مع الإشكالية والفرضيات في دقائق ثم يصدره بصيغة PDF أو Word لإرساله إلى الأستاذ المشرف للمناقشة.',
        fr: 'Le plan complet (problématique, hypothèses et sous-sections) est généré en quelques minutes et exporté pour avis du directeur.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مكونات خطة البحث الأساسية ووظيفة كل قسم',
        fr: 'Composants clés du plan de recherche et rôle méthodologique',
      },
      headers: [
        { ar: 'القسم', fr: 'Élément du plan' },
        { ar: 'السؤال الذي يجيب عنه', fr: 'Question adressée' },
        { ar: 'الأداة المكملة في البوابة', fr: 'Outil complémentaire' },
      ],
      rows: [
        [
          { ar: 'الإشكالية والفرضيات', fr: 'Problématique & hypothèses' },
          { ar: 'ما المشكلة البحثية وما الإجابات المحتملة المختبرة؟', fr: 'Quel problème est posé et quelles pistes sont testées ?' },
          { ar: 'أدوات النصوص والبحوث لضبط الصياغة', fr: 'Outils Texte pour affiner la rédaction' },
        ],
        [
          { ar: 'هيكل الفصول والمباحث', fr: 'Chapitres & sections' },
          { ar: 'كيف يتدرج العرض النظري والدراسة التطبيقية؟', fr: 'Comment s’enchaînent théorie et terrain ?' },
          { ar: 'مخطط الامتحانات والمهام لتنظيم مراحل الإنجاز', fr: 'Planificateur pour jalonner les chapitres' },
        ],
        [
          { ar: 'قائمة المصادر والمراجع', fr: 'Bibliographie' },
          { ar: 'ما الكتب والمقالات والوثائق المستند إليها؟', fr: 'Quelles sources fondent l’étude ?' },
          { ar: 'مولد المراجع الأكاديمية APA 7', fr: 'Générateur APA 7e édition' },
        ],
      ],
    },
    tips: {
      ar: [
        'اجعل عنوان البحث محددا بدقة بالمجال الموضوعي والمكاني والزمني لتسهيل صياغة الإشكالية.',
        'اربط كل فرضية بسؤال فرعي وبمبحث أو محور تحليلي واضح داخل الفصول.',
        'وثق مصادرك أولا بأول في مولد المراجع APA 7 بالتوازي مع بناء الخطة.',
        'اعرض الخطة المصدرة بصيغة Word أو PDF على الأستاذ المشرف قبل التعمق في كتابة الفصول.',
      ],
      fr: [
        'Délimitez précisément le champ thématique, spatial et temporel dans votre titre.',
        'Vérifiez que chaque hypothèse trouve une réponse claire dans vos sections d’analyse.',
        'Constituez votre bibliographie en parallèle avec le générateur APA 7 du portail.',
        'Faites valider le plan exporté par votre encadrant avant de démarrer la rédaction détaillée.',
      ],
    },
    extraFaqs: [],
  },

  'semester-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'تلاميذ الأطوار التعليمية وطلبة الجامعات في الجزائر لحساب المعدل السنوي',
        fr: 'Élèves (primaire, CEM, lycée) et étudiants LMD calculant leur moyenne annuelle',
      },
      processingTime: {
        ar: 'نتيجة فورية للمعدل السنوي ومؤشر النجاح عند إدخال الفصول',
        fr: 'Calcul instantané de la moyenne finale et du statut d’admission',
      },
      fees: {
        ar: 'مجاني كليا وبدون تسجيل داخل المتصفح',
        fr: 'Gratuit et local sans création de compte',
      },
      channel: {
        ar: 'حاسبة معدلات محلية للفصول الثلاثة أو السداسيين',
        fr: 'Simulateur local sur 3 trimestres ou 2 semestres',
      },
      keyRequirement: {
        ar: 'إدخال معدلات الفصول الثلاثة أو السداسيين على سلم 20',
        fr: 'Saisie des moyennes trimestrielles ou semestrielles (/20)',
      },
    },
    explanation: {
      ar: [
        'توفر حاسبة المعدل السنوي وسيلة سريعة وواضحة لاستخراج المتوسط النهائي للسنة الدراسية انطلاقا من معدلات الفصول الثلاثة (الأول والثاني والثالث) المعتمدة في الأطوار المدرسية الجزائرية، أو انطلاقا من السداسيين في التعليم الجامعي.',
        'تتيح لك الأداة متابعة مدى اقترابك من عتبة النجاح (10.00 / 20) أو التقديرات العليا (مقبول، قريب من الجيد، جيد، جيد جدا، ممتاز) قبل استلام الكشف السنوي الرسمي.',
        'تساعد التلاميذ والأولياء في الفصل الثالث على معرفة المعدل المطلوب تحقيقه في الفصل الأخير لرفع المعدل السنوي العام فوق العتبة المطلوبة.',
        'تجري الحسابات محليا داخل متصفحك مع توضيح أن القرار النهائي للانتقال أو الإنقاذ يخضع للقواعد البيداغوجية الرسمية للمؤسسة التعليمية.'
      ],
      fr: [
        'Ce calculateur permet d’obtenir immédiatement la moyenne annuelle à partir des trois moyennes trimestrielles du cycle scolaire algérien (ou des deux semestres universitaires LMD).',
        'Visualisez instantanément votre situation par rapport au seuil réglementaire de 10,00 / 20 ainsi que la mention correspondante.',
        'En cours d’année, il aide élèves et parents à simuler la note minimale nécessaire au dernier trimestre pour sécuriser le passage en classe supérieure.',
        'L’outil fonctionne entièrement côté client ; les décisions d’orientation, compensation ou rachat restent du ressort exclusif des conseils pédagogiques.'
      ],
    },
    formulaTitle: {
      ar: 'صيغة حساب المعدل السنوي المدرسي والجامعي',
      fr: 'Formule de la moyenne générale annuelle',
    },
    formulaText: {
      ar: 'النظام الفصلي (3 فصول): المعدل السنوي = (معدل الفصل 1 + معدل الفصل 2 + معدل الفصل 3) ÷ 3. النظام السداسي الجامعي LMD: المعدل السنوي = (معدل السداسي 1 + معدل السداسي 2) ÷ 2.',
      fr: 'Régime trimestriel : Moyenne annuelle = (T1 + T2 + T3) ÷ 3. Régime semestriel LMD : Moyenne annuelle = (S1 + S2) ÷ 2.',
    },
    practicalExample: {
      title: {
        ar: 'مثال حساب المعدل السنوي وتقدير هدف الفصل الثالث',
        fr: 'Exemple pratique pour les trois trimestres scolaires',
      },
      scenario: {
        ar: 'تلميذ تحصل على 9.40 في الفصل الأول و10.10 في الفصل الثاني، ويريد معرفة النتيجة إذا تحصل على 10.80 في الفصل الثالث.',
        fr: 'Un élève a obtenu 9,40 au 1er trimestre et 10,10 au 2e trimestre, et vise 10,80 au 3e trimestre.',
      },
      result: {
        ar: 'يكون المجموع = 30.30، والمعدل السنوي = 30.30 ÷ 3 = 10.10 / 20 (ناجح فوق عتبة الانتقال 10.00).',
        fr: 'Le total atteint 30,30, soit une moyenne annuelle finale de 10,10 / 20, dépassant le seuil de 10,00.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مرجع التقديرات الدراسية المعتادة على سلم 20 في الجزائر',
        fr: 'Échelle indicative des mentions sur 20 en Algérie',
      },
      headers: [
        { ar: 'المعدل السنوي (/20)', fr: 'Moyenne (/20)' },
        { ar: 'التقدير الشائع', fr: 'Appréciation usuelle' },
        { ar: 'ملاحظة بيداغوجية', fr: 'Remarque pédagogique' },
      ],
      rows: [
        [
          { ar: 'أقل من 10.00', fr: 'Inférieure à 10,00' },
          { ar: 'دون المعدل', fr: 'Ajourné / Rachat selon jury' },
          { ar: 'مراجعة شروط الإنقاذ أو الدورة الاستدراكية حسب الطور', fr: 'Vérifier conditions de rattrapage ou conseil de classe' },
        ],
        [
          { ar: '10.00 إلى 11.99', fr: '10,00 à 11,99' },
          { ar: 'مقبول (Passable)', fr: 'Passable' },
          { ar: 'اجتياز العتبة القانونية للنجاح والانتقال', fr: 'Seuil minimal d’admission atteint' },
        ],
        [
          { ar: '12.00 إلى 13.99', fr: '12,00 à 13,99' },
          { ar: 'قريب من الجيد (Assez Bien)', fr: 'Assez Bien' },
          { ar: 'أداء مستقر وفرصة جيدة للمنافسة في الشعب', fr: 'Résultat solide pour l’orientation' },
        ],
        [
          { ar: '14.00 فأكثر', fr: '14,00 et plus' },
          { ar: 'جيد / جيد جدا / ممتاز', fr: 'Bien / Très Bien / Excellent' },
          { ar: 'تفوق دراسي مؤهل للتخصصات المطلوبة والمنح', fr: 'Mention valorisante pour filières sélectives' },
        ],
      ],
    },
    tips: {
      ar: [
        'ابدأ بحساب معدل كل فصل في أداة "حاسبة المعدل الدراسي" أو "حاسبة النقاط" قبل إدخال النتيجة هنا.',
        'احسب في بداية الفصل الثالث المعدل الأدنى اللازم لتحقيق هدفك السنوي (30 نقطة مجموعه لتجاوز 10.00).',
        'في نظام LMD الجامعي، تذكر أن حساب الأرصدة (Crédits) والديون يخضع أيضا لقواعد الوحدة الأساسية.',
        'اعتمد دائما كشف النقاط الرسمي المطبوع من المؤسسة أو فضاء الأولياء / Progres.',
      ],
      fr: [
        'Calculez d’abord chaque trimestre via le calculateur de moyenne par coefficients.',
        'Pour dépasser 10,00 de moyenne annuelle sur 3 trimestres, la somme T1 + T2 + T3 doit atteindre au moins 30,00.',
        'En système universitaire LMD, vérifiez également l’acquisition des crédits et unités fondamentales.',
        'Confirmez toujours les résultats finaux sur votre relevé officiel.',
      ],
    },
    extraFaqs: [],
  },

  'study-schedule': {
    quickSummary: {
      targetAudience: {
        ar: 'التلاميذ والطلبة الراغبون في بناء جدول دراسة أسبوعي منظم وقابل للتعديل',
        fr: 'Élèves et étudiants concevant un emploi du temps hebdomadaire structuré',
      },
      processingTime: {
        ar: 'إضافة فورية للحصص حسب اليوم والساعة مع حفظ محلي',
        fr: 'Création instantanée de créneaux hebdomadaires avec sauvegarde locale',
      },
      fees: {
        ar: 'مجاني بالكامل ويعمل داخل المتصفح دون تسجيل',
        fr: 'Gratuit sans inscription dans votre navigateur',
      },
      channel: {
        ar: 'مولد جدول أسبوعي تفاعلي (المادة، اليوم، التوقيت)',
        fr: 'Grille hebdomadaire interactive (matière, jour, horaire)',
      },
      keyRequirement: {
        ar: 'تحديد المادة، اليوم من الأسبوع، ووقت الحصة لإدراجها في البرنامج',
        fr: 'Nom de la matière, jour de la semaine et créneau horaire',
      },
    },
    explanation: {
      ar: [
        'يتيح مولد جدول الدراسة تصميم برنامج مراجعة أسبوعي مخصص يتلاءم مع أوقات الدروس الحضورية أو الجامعية والتزاماتك الشخصية طوال أيام الأسبوع.',
        'بكل بساطة، تضيف المادة، ثم تحدد اليوم والوقت المناسبين للحصة الدراسية، ليظهر الجدول كاملا بصورة منظمة تمنع التداخل بين المهام وتمنح كل مادة حقها الأسبوعي.',
        'تساعد الجدولة الأسبوعية الثابتة على تحويل المذاكرة إلى عادة يومية مريحة تخفف التوتر وتمنع تراكم الدروس إلى ما قبل الامتحانات مباشرة.',
        'تحفظ بيانات جدولك الأسبوعي في متصفحك مباشرة لتعدله كلما تغير توقيتك المدرسي أو الجامعي دون حاجة إلى حساب سحابي.'
      ],
      fr: [
        'Le générateur d’emploi du temps d’études vous permet de bâtir facilement un planning hebdomadaire personnalisé, parfaitement calé sur vos heures de cours en présentiel ou à l’université.',
        'Ajoutez chaque matière avec le jour souhaité et la tranche horaire dédiée : votre semaine complète s’affiche clairement pour équilibrer révisions, exercices et temps de repos.',
        'Adopter un créneau régulier pour chaque discipline transforme l’effort en routine stable et évite l’accumulation tardive avant les partiels.',
        'Votre programme est sauvegardé localement dans le navigateur et reste modifiable à tout instant sans création de compte.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة التوازن الأسبوعي بين الدراسة والراحة',
      fr: 'Équilibre hebdomadaire des blocs d’étude et de repos',
    },
    formulaText: {
      ar: 'البرنامج الأسبوعي المتوازن = تثبيت حصص يومية ثابتة (1.5 إلى 3 ساعات بعد الدوام في أيام الدراسة) + تخصيص فجوة راحة أسبوعية + ربط المواد الصعبة بأوقات الذروة الذهنية.',
      fr: 'Emploi du temps équilibré = Créneaux quotidiens réalistes (1 h 30 à 3 h après les cours) + plage de repos hebdomadaire + matières clés aux heures de pleine attention.',
    },
    practicalExample: {
      title: {
        ar: 'مثال توزيع 6 مواد على جدول أسبوعي متوازن',
        fr: 'Exemple pratique de répartition hebdomadaire',
      },
      scenario: {
        ar: 'تلميذ في الثانوي يخصص مساء الأحد والثلاثاء للرياضيات والفيزياء، والاثنين والأربعاء للعلوم واللغات، والسبت لحل تمارين شاملة.',
        fr: 'Un lycéen réserve dimanche/mardi soir aux maths et physique, lundi/mercredi aux sciences et langues, et samedi aux exercices de synthèse.',
      },
      result: {
        ar: 'يحصل على جدول واضح منظم بالأيام والساعات يلتزم به أسبوعيا دون حيرة حول ماذا سيراجع اليوم.',
        fr: 'Il dispose d’une feuille de route hebdomadaire claire sans perdre de temps à décider quoi réviser chaque soir.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'إرشادات بناء جدول دراسة أسبوعي قابل للاستمرار',
        fr: 'Bonnes pratiques pour un planning hebdomadaire durable',
      },
      headers: [
        { ar: 'البند التنظيمي', fr: 'Critère d’organisation' },
        { ar: 'التوصية العملية', fr: 'Pratique conseillée' },
        { ar: 'النتيجة المرجوة', fr: 'Bénéfice attendu' },
      ],
      rows: [
        [
          { ar: 'توقيت المواد الصعبة', fr: 'Placement des matières clés' },
          { ar: 'وضعها في الساعات التي يكون فيها التركيز أعلى', fr: 'Placer aux heures de vigilance maximale' },
          { ar: 'استيعاب أسرع وأخطاء أقل في التمارين', fr: 'Meilleure assimilation des concepts exigeants' },
        ],
        [
          { ar: 'المرونة الأسبوعية', fr: 'Marge de flexibilité' },
          { ar: 'ترك حصة احتياطية نهاية الأسبوع للمواد المتأخرة', fr: 'Garder un créneau tampon en fin de semaine' },
          { ar: 'تدارك أي ظرف طارئ دون إفساد باقي الأسبوع', fr: 'Rattraper un imprévu sans stress' },
        ],
        [
          { ar: 'دمج الأدوات المساندة', fr: 'Synergie d’outils' },
          { ar: 'تنفيذ الحصص بمؤقت بومودورو والبطاقات التعليمية', fr: 'Exécuter avec Pomodoro et Flashcards' },
          { ar: 'قياس فعلي للإنجاز وتحسن في التذكر', fr: 'Efficacité accrue lors des contrôles' },
        ],
      ],
    },
    tips: {
      ar: [
        'تجنب حشو كل ساعة فراغ في الجدول؛ اترك هوامش للراحة والنوم الكافي والرياضة.',
        'اجعل اسم المادة واضحا ومرفقا بنوع العمل (مثلا: رياضيات - تمارين الدوال) لتباشر العمل فورا.',
        'راجع جدولك كل أسبوعين واضبطه عند تغير مواقيت الدروس أو قرب الفروض.',
        'استخدم مؤقت بومودورو أثناء تنفيذ كل حصة مدرجة في الجدول الأسبوعي.',
      ],
      fr: [
        'Ne saturez pas toutes vos plages libres : prévoyez du temps pour le sommeil, le sport et la détente.',
        'Précisez l’objectif de chaque créneau (ex. : Physique — Annales mécanique) pour démarrer sans hésiter.',
        'Ajustez votre grille toutes les deux semaines ou à l’approche des examens.',
        'Lancez le minuteur Pomodoro dès le début de chaque bloc horaire.',
      ],
    },
    extraFaqs: [],
  },
};
