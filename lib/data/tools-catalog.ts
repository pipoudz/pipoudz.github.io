import { ToolItem } from '../types';

export const toolsList: ToolItem[] = [
  // ================= CALCULATORS (13) =================
  {
    id: 'tool-number-to-words',
    slug: 'number-to-words',
    category: 'calculators',
    name: {
      ar: 'محول الأرقام إلى الحروف بالدينار الجزائري',
      fr: 'Convertisseur Chiffres en Lettres (Dinar Algérien)',
    },
    description: {
      ar: 'أداة دقيقة لتحويل الأرقام المالية إلى حروف بالعربية والفرنسية والسنتيم لكتابة الصكوك البريدية CCP والبنكية والفواتير الرسمية دون أخطاء.',
      fr: 'Convertisseur instantané de montants en toutes lettres (arabe, français, dinars et centimes) pour chèques CCP, bancaires et factures.',
    },
    iconName: 'Type',
    isPopular: true,
    faqs: [
      {
        question: { ar: 'هل يدعم المحول التحويل إلى السنتيم (Centimes) للصكوك البريدية؟', fr: 'Prend-il en charge les centimes pour les chèques CCP ?' },
        answer: { ar: 'نعم، تتيح الأداة احتساب الدينار والسنتيم مع خيار الإضافة القياسية للشيك الجزائري.', fr: 'Oui, l\'outil convertit les dinars et centimes avec le format adapté aux chèques postaux et bancaires.' },
      },
    ],
  },
  {
    id: 'tool-salary',
    slug: 'salary-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة الراتب الصافي واقتطاع الضريبة على الدخل IRG',
      fr: 'Calculateur Salaire Net & Barème IRG Algérie',
    },
    description: {
      ar: 'احسب الراتب الصافي في الجزائر انطلاقا من الراتب الخام مع تطبيق نسبة الضمان الاجتماعي (9% CNAS) وسلم الضريبة على الدخل الإجمالي IRG المعتمد.',
      fr: 'Calculez votre salaire net à partir du brut selon la retenue sécurité sociale CNAS (9%) et le barème IRG en vigueur en Algérie.',
    },
    iconName: 'Wallet',
    isPopular: true,
    faqs: [
      {
        question: { ar: 'ما هي عتبة الإعفاء الضريبي في حاسبة الأجور الجزائرية؟', fr: 'Quel est le seuil d\'exonération fiscale IRG ?' },
        answer: { ar: 'الرواتب الخاضعة التي لا تتجاوز 30,000 دج شهريا معفاة كليا من الضريبة على الدخل الإجمالي IRG.', fr: 'Les salaires imposables inférieurs ou égaux à 30 000 DZD par mois bénéficient d\'une exonération totale de l\'IRG.' },
      },
    ],
  },
  {
    id: 'tool-electricity',
    slug: 'electricity-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة استهلاك الكهرباء وفاتورة سونلغاز بالأشطر',
      fr: 'Simulateur Facture Sonelgaz Électricité & Gaz par Tranches',
    },
    description: {
      ar: 'محاكي لحساب تقدير فاتورة سونلغاز بناء على الأشطر الرسمية الأربعة للكهرباء والغاز وحساب الرسم على القيمة المضافة TVA وحقوق الطابع.',
      fr: 'Estimez le montant de votre facture trimestrielle Sonelgaz selon les 4 tranches officielles kWh/thermie et la TVA applicable.',
    },
    iconName: 'Zap',
    isPopular: true,
  },
  {
    id: 'tool-currency',
    slug: 'currency-converter',
    category: 'calculators',
    name: {
      ar: 'محول العملات الأجنبية والدينار الجزائري (الرسمي والموازي)',
      fr: 'Convertisseur Devises & Dinars Algériens (Banque & Parallèle)',
    },
    description: {
      ar: 'حاسبة تحويل فورية بين الدينار الجزائري والأورو والدولار والجنيه الإسترليني وفق السعر الرسمي لبنك الجزائر والسعر المرجعي للسوق الموازية.',
      fr: 'Conversion instantanée DZD vers EUR, USD, GBP et MAD selon le taux officiel et le cours indicatif du marché.',
    },
    iconName: 'Coins',
    isPopular: true,
    references: [
      {
        label: { ar: 'واجهة أسعار الصرف المرجعية Frankfurter API', fr: 'Référence des taux internationaux Frankfurter' },
        url: 'https://frankfurter.dev/',
      },
    ],
  },
  {
    id: 'tool-loan',
    slug: 'loan-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة القروض والأقساط الشهرية والمرابحة الإسلامية',
      fr: 'Simulateur de Crédit Immobilier, Conso & Mourabaha',
    },
    description: {
      ar: 'احسب القسط الشهري، إجمالي الأرباح أو هامش المرابحة، وجدول السداد لقروض السكن والتجهيز في البنوك الجزائرية.',
      fr: 'Calculez vos mensualités, coût du financement ou marge Mourabaha et tableau d\'amortissement en Dinar algérien.',
    },
    iconName: 'CreditCard',
    isPopular: true,
  },
  {
    id: 'tool-car-cost',
    slug: 'car-cost-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة مصاريف السيارة الشهرية والسنوية وقسيمة السيارات',
      fr: 'Calculateur Vignette Auto & Coûts Annuels de Véhicule',
    },
    description: {
      ar: 'أداة لمعرفة ثمن قسيمة السيارات في الجزائر حسب القوة الجبائية (CV) وسنة الصنع مع تقدير التأمين والمراقبة التقنية.',
      fr: 'Calculez le tarif légal de la vignette automobile algérienne selon les chevaux fiscaux (CV), l\'âge et les frais annuels.',
    },
    iconName: 'Car',
  },
  {
    id: 'tool-fuel',
    slug: 'fuel-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة البنزين والوقود وتكلفة الرحلة بين الولايات',
      fr: 'Calculateur Carburant & Coût de Trajet Inter-Wilayas',
    },
    description: {
      ar: 'احسب تكلفة السفر بالبنزين أو المازوت أو غاز السيارات سيرغاز GPL/C بين ولايات الجزائر حسب الأسعار الرسمية لنفطال.',
      fr: 'Estimez le budget carburant (Sans Plomb, Gasoil, GPL/C) pour vos déplacements entre wilayas aux tarifs Naftal.',
    },
    iconName: 'Fuel',
  },
  {
    id: 'tool-age',
    slug: 'age-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة العمر بدقة وسن التقاعد القانوني (CNR)',
      fr: 'Calculateur d\'Âge Exact & Départ en Retraite (CNR)',
    },
    description: {
      ar: 'حساب دقيق للعمر بالسنوات والأشهر والأيام مع عرض السنوات المتبقية للتقاعد القانوني في الصندوق الوطني للتقاعد CNR.',
      fr: 'Calculez votre âge exact en années, mois et jours ainsi que les années restantes avant l\'âge légal de retraite CNR.',
    },
    iconName: 'Calendar',
  },
  {
    id: 'tool-date-diff',
    slug: 'date-difference',
    category: 'calculators',
    name: {
      ar: 'حاسبة الفرق بين تاريخين بالأيام والأسابيع والأشهر',
      fr: 'Calculateur d\'Écart entre Deux Dates',
    },
    description: {
      ar: 'تحديد المدة الزمنية الدقيقة بين تاريخين لحساب آجال الطعون الإدارية، عقود العمل، أو الإجازات.',
      fr: 'Déterminez la durée exacte en jours, semaines et mois entre deux dates pour vos contrats ou délais administratifs.',
    },
    iconName: 'Clock',
  },
  {
    id: 'tool-percentage',
    slug: 'percentage-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة النسبة المئوية والتخفيضات والضرائب',
      fr: 'Calculateur de Pourcentage, Remises & Taxes',
    },
    description: {
      ar: 'حساب النسب المئوية، الزيادات في الأجور، قيمة الرسم على القيمة المضافة TVA 19%، والتخفيضات التجارية.',
      fr: 'Calculez rapidement pourcentages, remises commerciales, augmentations et montant TVA 19% / 9%.',
    },
    iconName: 'Percent',
  },
  {
    id: 'tool-average',
    slug: 'average-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة المعدل الجامعي ومعدل الطورين المتوسط والثانوي',
      fr: 'Calculateur de Moyenne Générale & Semestrielle (LMD / BEM / BAC)',
    },
    description: {
      ar: 'إضافة المواد والأرصدة والمعاملات لحساب المعدل السداسي الجامعي أو المعدل الفصلي للتعليم المتوسط والثانوي فوريا.',
      fr: 'Saisissez vos matières, coefficients ou crédits LMD pour calculer instantanément votre moyenne générale sur 20.',
    },
    iconName: 'GraduationCap',
  },
  {
    id: 'tool-calculator',
    slug: 'calculator',
    category: 'calculators',
    name: {
      ar: 'الآلة الحاسبة الذكية العلمية والبسيطة',
      fr: 'Calculatrice Scientifique & Financière',
    },
    description: {
      ar: 'آلة حاسبة تفاعلية تدعم العمليات الحسابية الأساسية والعلمية (الجذور، الأسس، الدوال المثلثية) وسجل الحسابات.',
      fr: 'Calculatrice interactive complète prenant en charge opérations standards, scientifiques et historique local.',
    },
    iconName: 'Calculator',
  },
  {
    id: 'tool-unit-converter',
    slug: 'unit-converter',
    category: 'calculators',
    name: {
      ar: 'محول وحدات القياس والمساحات الفلاحية والأحجام',
      fr: 'Convertisseur d\'Unités (Longueur, Masse, Surface & Hectares)',
    },
    description: {
      ar: 'تحويل فوري لوحدات الطول، الكتلة، الحرارة، والسرعة، بالإضافة إلى تحويل الهكتار والآر والمتر المربع للأراضي العقارية والفلاحية.',
      fr: 'Convertissez instantanément longueurs, poids, volumes, températures et surfaces agraires (Hectare, Are, m²).',
    },
    iconName: 'Ruler',
  },

  // ================= STUDY (11) =================
  {
    id: 'tool-pomodoro',
    slug: 'pomodoro',
    category: 'study',
    name: {
      ar: 'مؤقت بومودورو للدراسة والتركيز العميق',
      fr: 'Minuteur Pomodoro pour Révisions & Concentration',
    },
    description: {
      ar: 'تقنية بومودورو التفاعلية لتنظيم جلسات المراجعة (25 دقيقة تركيز و5 دقائق استراحة) مع تنبيه صوتي وتتبع الجلسات.',
      fr: 'Minuteur Pomodoro avec cycles focus/pause personnalisables, alarme sonore et compteur de sessions productives.',
    },
    iconName: 'Timer',
  },
  {
    id: 'tool-flashcards',
    slug: 'flashcards',
    category: 'study',
    name: {
      ar: 'البطاقات التعليمية التفاعلية والاختبارات (Flashcards)',
      fr: 'Cartes Mémoire Interactives (Flashcards)',
    },
    description: {
      ar: 'إنشاء ومراجعة بطاقات الحفظ التفاعلية لمواد البكالوريا، البيام، والجامعة مع إمكانية إضافة بطاقات مخصصة وحفظها محليا.',
      fr: 'Créez et révisez vos paquets de cartes question/réponse avec sauvegarde locale dans le navigateur.',
    },
    iconName: 'Layers',
  },
  {
    id: 'tool-exam-planner',
    slug: 'exam-planner',
    category: 'study',
    name: {
      ar: 'مخطط الامتحانات والمهام الجامعية والمدرسية',
      fr: 'Planificateur d\'Examens & Tâches Universitaires',
    },
    description: {
      ar: 'جدولة تواريخ الامتحانات والفروض والأولويات حسب المعامل والوقت المتبقي مع تتبع نسبة الإنجاز.',
      fr: 'Organisez vos dates d\'examens, modules prioritaires et tâches de révision avec suivi d\'avancement.',
    },
    iconName: 'CalendarCheck',
  },
  {
    id: 'tool-apa-generator',
    slug: 'apa-generator',
    category: 'study',
    name: {
      ar: 'مولد المراجع الأكاديمية وفق نظام APA 7',
      fr: 'Générateur de Références Bibliographiques APA 7',
    },
    description: {
      ar: 'تنسيق وتوليد التهميش والمراجع العلمية (كتب، مقالات، مواقع، أطروحات) بنظام APA الإصدار السابع لمذكرات التخرج والماستر.',
      fr: 'Formatez automatiquement vos citations et références bibliographiques selon la norme APA 7e édition pour mémoires et thèses.',
    },
    iconName: 'Quote',
  },
  {
    id: 'tool-countdown',
    slug: 'countdown',
    category: 'study',
    name: {
      ar: 'عداد المواعيد الدراسية والامتحانات الرسمية (BAC / BEM)',
      fr: 'Compte à Rebours des Examens & Échéances',
    },
    description: {
      ar: 'مؤقت تنازلي حي بالأيام والساعات نحو امتحانات البكالوريا وشهادة التعليم المتوسط أو أي موعد شخصي تضيفه.',
      fr: 'Suivez en temps réel le décompte exact en jours et heures jusqu\'au Baccalauréat, BEM ou vos propres échéances.',
    },
    iconName: 'Hourglass',
  },
  {
    id: 'tool-exam-study-planner',
    slug: 'exam-study-planner',
    category: 'study',
    name: {
      ar: 'مخطط المراجعة الذكي للبكالوريا والبيام',
      fr: 'Planificateur Intelligent de Révision BAC & BEM',
    },
    description: {
      ar: 'توزيع تلقائي لساعات المراجعة الأسبوعية على المواد الأساسية والثانوية حسب الشعبة والوزن المعاملي.',
      fr: 'Répartissez automatiquement vos heures de révision hebdomadaires selon les matières et coefficients de votre filière.',
    },
    iconName: 'BookOpen',
  },
  {
    id: 'tool-notes-calendar',
    slug: 'notes-calendar',
    category: 'study',
    name: {
      ar: 'سجل الملاحظات والمواعيد والمهام اليومية',
      fr: 'Carnet de Notes & Agenda Personnel Hors-Ligne',
    },
    description: {
      ar: 'مساحة سريعة لتدوين الملاحظات الدراسية والأفكار وربطها بتواريخ الاستحقاق مع الحفظ التلقائي في المتصفح.',
      fr: 'Bloc-notes organisé par dates pour enregistrer vos rappels de cours, devoirs et échéances localement.',
    },
    iconName: 'StickyNote',
  },
  {
    id: 'tool-points-ranking',
    slug: 'points-ranking',
    category: 'study',
    name: {
      ar: 'حاسبة النقاط والترتيب والمعدل الموزون للتوجيه',
      fr: 'Calculateur de Score & Moyenne Pondérée d\'Orientation',
    },
    description: {
      ar: 'احسب معدلك الموزون ورتب المواد أو المترشحين لمقارنة فرص الالتحاق بالتخصصات الجامعية والمدارس العليا.',
      fr: 'Calculez votre moyenne pondérée (Moyenne générale + note matière clé) et comparez le classement des notes.',
    },
    iconName: 'Trophy',
  },
  {
    id: 'tool-research-plan',
    slug: 'research-plan',
    category: 'study',
    name: {
      ar: 'مولد خطة البحث لمذكرات التخرج والبحوث الجامعية',
      fr: 'Générateur de Plan de Recherche Universitaire',
    },
    description: {
      ar: 'إعداد هيكلة أكاديمية متكاملة (مقدمة، إشكالية، فرضيات، فصول، وخاتمة) مع التصدير والطباعة للبحوث والمذكرات.',
      fr: 'Structurez rapidement votre plan de mémoire LMD (Problématique, hypothèses, chapitres, conclusion) prêt à imprimer.',
    },
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'tool-semester-calculator',
    slug: 'semester-calculator',
    category: 'study',
    name: {
      ar: 'حاسبة المعدل السنوي LMD (السداسي الأول + السداسي الثاني)',
      fr: 'Calculateur de Moyenne Annuelle (Semestre 1 + Semestre 2)',
    },
    description: {
      ar: 'احسب معدل السداسيين والأرصدة المكتسبة ومعرفة حالة النجاح بالإنقاذ أو الارتقاء للموسم الجامعي.',
      fr: 'Calculez la moyenne annuelle combinée S1/S2, les crédits validés et le statut d\'admission ou compensation LMD.',
    },
    iconName: 'Award',
  },
  {
    id: 'tool-study-schedule',
    slug: 'study-schedule',
    category: 'study',
    name: {
      ar: 'مولد جدول الدراسة الأسبوعي القابل للطباعة',
      fr: 'Générateur d\'Emploi du Temps Hebdomadaire',
    },
    description: {
      ar: 'صمم جدولك الدراسي أو برنامج المراجعة الأسبوعي من الأحد إلى السبت مع تخصيص الحصص وطباعته بسهولة.',
      fr: 'Créez votre emploi du temps hebdomadaire du Dimanche au Samedi par créneaux horaires avec export imprimable.',
    },
    iconName: 'Table',
  },

  // ================= DAILY LIFE (5) =================
  {
    id: 'tool-budget-calc',
    slug: 'budget-calculator',
    category: 'daily-life',
    name: {
      ar: 'حاسبة ميزانية الطالب وتوزيع الدخل الشهري (50/30/20)',
      fr: 'Calculateur Budget Étudiant & Règle 50/30/20',
    },
    description: {
      ar: 'تقسيم المنحة أو الميزانية الشهرية بذكاء على السكن والنقل والتغذية والدراسة مع نسبة الادخار الاحتياطي.',
      fr: 'Répartissez votre bourse ou revenu étudiant entre dépenses essentielles, transport, études et épargne de précaution.',
    },
    iconName: 'PiggyBank',
  },
  {
    id: 'tool-budget-manager',
    slug: 'budget-manager',
    category: 'daily-life',
    name: {
      ar: 'ميزانيتي الذكية: تسيير المداخيل والمصاريف الشهرية',
      fr: 'Gestionnaire de Budget Personnel & Suivi des Dépenses',
    },
    description: {
      ar: 'أداة متكاملة لتسجيل المداخيل والنفقات اليومية حسب الفئة مع رسم بياني للنسب وحفظ تلقائي في المتصفح.',
      fr: 'Enregistrez vos revenus et dépenses par catégorie avec calcul automatique du solde restant et sauvegarde locale.',
    },
    iconName: 'BarChart2',
  },
  {
    id: 'tool-farm-planner',
    slug: 'farm-planner',
    category: 'daily-life',
    name: {
      ar: 'المساعد الفلاحي: مخطط غرس الأشجار والمسافات الزراعية',
      fr: 'Assistant Agricole : Calculateur de Densité & Plantation d\'Arbres',
    },
    description: {
      ar: 'حساب عدد الشتلات المثالي (زيتون، حمضيات، نخيل، تفاح) وفق مساحة الهكتار ومسافات الغرس مع تقدير حاجة السقي.',
      fr: 'Calculez le nombre exact d\'arbres à planter selon la superficie et l\'espacement (olivier, agrumes, palmier) avec estimation d\'irrigation.',
    },
    iconName: 'Trees',
  },
  {
    id: 'tool-maps',
    slug: 'maps',
    category: 'daily-life',
    name: {
      ar: 'خريطة المسافات وأبرز الأقطاب الجامعية والولايات الجزائرية',
      fr: 'Repères des Wilayas, Distances & Pôles Universitaires',
    },
    description: {
      ar: 'دليل تفاعلي لحساب المسافات التقديرية ووقت السفر بين الولايات الجزائرية والرموز البريدية لأبرز المقار الإدارية والجامعية.',
      fr: 'Guide interactif des distances inter-wilayas, codes postaux et principaux pôles universitaires d\'Algérie.',
    },
    iconName: 'MapPin',
  },
  {
    id: 'tool-meal-planner',
    slug: 'meal-planner',
    category: 'daily-life',
    name: {
      ar: 'مخطط الوجبات الأسبوعية وقائمة المشتريات المنزلية',
      fr: 'Planificateur de Repas & Liste de Courses Hebdomadaire',
    },
    description: {
      ar: 'تنظيم وجبات الأسبوع المتوازنة واستخلاص قائمة التسوق الضرورية لتقليل الهدر والتحكم في ميزانية الغذاء.',
      fr: 'Organisez vos menus de la semaine et générez une liste de courses interactive pour optimiser votre budget familial.',
    },
    iconName: 'Utensils',
  },

  // ================= HEALTH (20) =================
  {
    id: 'tool-health-hub',
    slug: 'health-tools',
    category: 'health',
    name: {
      ar: 'الأدوات الصحية والحاسبات التوعوية الشاملة',
      fr: 'Centre des Calculateurs & Outils de Sensibilisation Santé',
    },
    description: {
      ar: 'باقة سريعة تجمع مؤشر كتلة الجسم BMI، معدل الأيض الأساسي BMR، والوصول المباشر لجميع الاستبيانات والحاسبات الصحية الـ 20.',
      fr: 'Hub interactif regroupant calcul rapide IMC, métabolisme basal BMR et accès direct aux 20 outils d\'orientation santé.',
    },
    iconName: 'HeartPulse',
  },
  {
    id: 'tool-calorie',
    slug: 'calorie-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة السعرات الحرارية اليومية ومؤشر كتلة الجسم',
      fr: 'Calculateur de Calories Quotidiennes (BMR / TDEE & IMC)',
    },
    description: {
      ar: 'حساب دقيق للاحتياج اليومي من السعرات الحرارية حسب العمر، الوزن، الطول ومستوى النشاط البدني لتحقيق التوازن الغذائي.',
      fr: 'Estimez vos besoins caloriques journaliers selon votre morphologie, niveau d\'activité physique et objectif nutritionnel.',
    },
    iconName: 'Activity',
    isPopular: true,
  },
  {
    id: 'tool-nutrition',
    slug: 'nutrition-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة التغذية وتوزيع البروتين والكربوهيدرات والدهون',
      fr: 'Calculateur de Macronutriments & Équilibre Nutritionnel',
    },
    description: {
      ar: 'تحديد الحصص اليومية المثالية بالغرام من البروتين، الكربوهيدرات، والدهون الصحية بناء على احتياجك الحراري وهدفك.',
      fr: 'Déterminez la répartition optimale en grammes de protéines, glucides et lipides selon votre objectif santé ou sportif.',
    },
    iconName: 'Apple',
  },
  {
    id: 'tool-ideal-weight',
    slug: 'ideal-weight-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة الوزن المثالي ونطاق الوزن الصحي',
      fr: 'Calculateur de Poids Idéal & Plage Santé',
    },
    description: {
      ar: 'معرفة الوزن المثالي التقريبي وفق معادلتي Lorentz و Devine ومقارنته بنطاق مؤشر كتلة الجسم الصحي.',
      fr: 'Calculez votre poids de forme selon les formules médicales de Lorentz et Devine et comparez avec l\'IMC normal.',
    },
    iconName: 'Scale',
  },
  {
    id: 'tool-water',
    slug: 'water-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة الاحتياج اليومي للماء والترطيب',
      fr: 'Calculateur d\'Hydratation & Consommation d\'Eau',
    },
    description: {
      ar: 'تقدير الكمية الموصى بها من الماء يوميا باللتر والأكواب بناء على الوزن، النشاط البدني، والمناخ.',
      fr: 'Évaluez le volume d\'eau quotidien recommandé en litres et verres selon votre poids, effort physique et climat.',
    },
    iconName: 'Droplets',
    references: [
      { label: { ar: 'مرجع CDC حول شرب الماء الصحي', fr: 'CDC - Water & Healthier Drinks' }, url: 'https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html' },
      { label: { ar: 'دليل NHS للوقاية من الجفاف', fr: 'NHS - Dehydration Guide' }, url: 'https://www.nhs.uk/conditions/dehydration/' },
      { label: { ar: 'نشرة المعهد الوطني للصحة NIH', fr: 'NIH - Hydrating for Health' }, url: 'https://newsinhealth.nih.gov/2023/05/hydrating-health' },
      { label: { ar: 'توصيات Mayo Clinic للسوائل', fr: 'Mayo Clinic - Daily Water Intake' }, url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256' },
    ],
  },
  {
    id: 'tool-child-bmi',
    slug: 'child-bmi-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة مؤشر كتلة الجسم للأطفال والمراهقين (2 - 19 سنة)',
      fr: 'Calculateur IMC Enfant & Adolescent (2 - 19 ans)',
    },
    description: {
      ar: 'تقييم مبدئي لمؤشر كتلة جسم الطفل والمراهق وفق الجنس والعمر بالاستناد إلى مرجعيات مراكز السيطرة على الأمراض CDC.',
      fr: 'Évaluation indicative de l\'IMC pédiatrique selon l\'âge et le sexe basée sur les références de croissance CDC.',
    },
    iconName: 'Baby',
    references: [
      { label: { ar: 'حاسبة CDC للأطفال والمراهقين', fr: 'CDC Child & Teen BMI Calculator' }, url: 'https://www.cdc.gov/bmi/child-teen-calculator/index.html' },
      { label: { ar: 'فئات BMI للأطفال - CDC', fr: 'CDC BMI Categories for Children' }, url: 'https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html' },
      { label: { ar: 'ملفات بيانات النمو - CDC', fr: 'CDC Growth Charts Data Files' }, url: 'https://www.cdc.gov/growthcharts/cdc-data-files.htm' },
    ],
  },
  {
    id: 'tool-infant-growth',
    slug: 'infant-growth-calculator',
    category: 'health',
    name: {
      ar: 'حاسبة نمو الرضع والطول والوزن حسب العمر (منظمة الصحة WHO)',
      fr: 'Suivi de Croissance du Nourrisson (Courbes OMS / WHO)',
    },
    description: {
      ar: 'متابعة تطور الوزن والطول لدى الرضيع من الولادة حتى سنتين ومقارنتهما بنطاقات النمو المرجعية لمنظمة الصحة العالمية WHO.',
      fr: 'Comparez poids et taille de votre bébé (0 à 24 mois) aux intervalles de référence de l\'Organisation Mondiale de la Santé.',
    },
    iconName: 'Baby',
    references: [
      { label: { ar: 'معايير نمو الطفل - WHO', fr: 'OMS - Standards de croissance' }, url: 'https://www.who.int/tools/child-growth-standards/standards' },
      { label: { ar: 'منحنى الطول حسب العمر - WHO', fr: 'OMS - Taille pour l\'âge' }, url: 'https://www.who.int/tools/child-growth-standards/standards/length-height-for-age' },
      { label: { ar: 'منحنى الوزن حسب العمر - WHO', fr: 'OMS - Poids pour l\'âge' }, url: 'https://www.who.int/tools/child-growth-standards/standards/weight-for-age' },
    ],
  },
  {
    id: 'tool-vaccine',
    slug: 'vaccine-tracker',
    category: 'health',
    name: {
      ar: 'متابعة جدول التلقيح الإجباري للأطفال في الجزائر (الدفتر الصحي 2026)',
      fr: 'Calendrier Officiel de Vaccination Pédiatrique en Algérie (2026)',
    },
    description: {
      ar: 'متابعة مواعيد اللقاحات الوطنية المعتمدة للأطفال في الجزائر مع حفظ المواعيد المنجزة وتوثيق المرسوم الرسمي الصادر في الجريدة الرسمية 36/2026.',
      fr: 'Suivi interactif du calendrier national de vaccination infantile en Algérie avec sauvegarde locale et référence au Journal Officiel 36/2026.',
    },
    iconName: 'Syringe',
    references: [
      { label: { ar: 'الاطلاع على الجريدة الرسمية رقم 36 لسنة 2026 (PDF)', fr: 'Journal Officiel Algérie N° 36 / 2026 (PDF)' }, url: 'https://www.joradp.dz/FTP/jo-francais/2026/F2026036.pdf' },
    ],
  },
  {
    id: 'tool-pregnancy-due',
    slug: 'pregnancy-due-date',
    category: 'health',
    name: {
      ar: 'حاسبة موعد الولادة المتوقع وأسابيع الحمل',
      fr: 'Calculateur de Date Prévue d\'Accouchement & Semaines',
    },
    description: {
      ar: 'تحديد التاريخ المتوقع للولادة والثلث الحالي للحمل بناء على تاريخ أول يوم من آخر دورة وفق قاعدة Naegele المعتمدة.',
      fr: 'Estimez la date probable d\'accouchement, l\'âge gestationnel en semaines (SA) et le trimestre selon la règle de Naegele.',
    },
    iconName: 'Heart',
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
      ar: 'احتساب الزيادة الموصى بها من السعرات الحرارية خلال الفصول الثلاثة للحمل وفق الإرشادات الطبية المرجعية.',
      fr: 'Calculez l\'apport calorique journalier recommandé selon votre trimestre de grossesse et votre métabolisme de base.',
    },
    iconName: 'HeartPulse',
    references: [
      { label: { ar: 'مرجع MedlinePlus حول التغذية أثناء الحمل', fr: 'MedlinePlus - Nutrition pendant la grossesse' }, url: 'https://medlineplus.gov/pregnancyandnutrition.html' },
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
      ar: 'تقدير أيام الإباضة وفترة الخصوبة للدورة الشهرية ببيانات إرشادية مبنية على طول الدورة وتاريخ بدئها.',
      fr: 'Estimation indicative de la date d\'ovulation et de la fenêtre de fertilité selon la durée habituelle du cycle.',
    },
    iconName: 'CalendarHeart',
    references: [
      { label: { ar: 'مرجع NHS: الخصوبة خلال الدورة الشهرية', fr: 'NHS - Fertilité et cycle menstruel' }, url: 'https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/' },
    ],
  },
  {
    id: 'tool-prediabetes',
    slug: 'prediabetes-risk',
    category: 'health',
    name: {
      ar: 'اختبار تقييم خطر ما قبل السكري (معيار CDC)',
      fr: 'Test de Sensibilisation au Risque de Prédiabète (Score CDC)',
    },
    description: {
      ar: 'استبيان توعوي من 7 أسئلة لتقدير عوامل الخطر المتعلقة بما قبل السكري (العمر، الوزن، التاريخ العائلي، النشاط). ليس بديلا عن الفحص الطبي.',
      fr: 'Questionnaire éducatif en 7 questions évaluant les facteurs de risque métabolique (critères CDC). Ne remplace pas un avis médical.',
    },
    iconName: 'Activity',
    references: [
      { label: { ar: 'مرجع CDC حول آلية احتساب الاختبار', fr: 'CDC - Prediabetes Risk Scoring Guide' }, url: 'https://www.cdc.gov/diabetes/widgets/risktest/how-your-test-is-scored.html' },
    ],
  },
  {
    id: 'tool-diabetes',
    slug: 'diabetes-awareness',
    category: 'health',
    name: {
      ar: 'قائمة التوعية والمتابعة اليومية لمرضى السكري',
      fr: 'Liste de Suivi Quotidien & Prévention du Diabète',
    },
    description: {
      ar: 'متتبع يومي للعادات الوقائية (فحص السكر، المشي، العناية بالقدمين، التغذية المتوازنة) مع حفظ التقدم الشخصي.',
      fr: 'Checklist interactive d\'habitudes quotidiennes pour l\'équilibre glycémique et la prévention avec sauvegarde locale.',
    },
    iconName: 'CheckSquare',
  },
  {
    id: 'tool-asthma',
    slug: 'asthma-control',
    category: 'health',
    name: {
      ar: 'اختبار التوعية لمستوى التحكم بالربو',
      fr: 'Test Indicatif de Contrôle de l\'Asthme',
    },
    description: {
      ar: 'مؤشر توعوي من 5 أسئلة لتقييم تكرار الأعراض خلال الأسابيع الأربعة الأخيرة ومشاركة النتيجة مع الطبيب المعالج.',
      fr: 'Auto-évaluation en 5 questions sur la fréquence des symptômes respiratoires au cours des 4 dernières semaines.',
    },
    iconName: 'Wind',
  },
  {
    id: 'tool-anxiety',
    slug: 'anxiety-screening',
    category: 'health',
    name: {
      ar: 'استبيان التوعية بمستوى القلق العام (GAD-7)',
      fr: 'Questionnaire de Sensibilisation à l\'Anxiété (GAD-7)',
    },
    description: {
      ar: 'تقييم توعوي مبسط لمراقبة أعراض التوتر والقلق خلال الأسبوعين الماضيين مع إرشادات الراحة النفسية والتوجيه المهني.',
      fr: 'Auto-questionnaire éducatif en 7 items (échelle GAD-7) évaluant le niveau de stress sur les 14 derniers jours.',
    },
    iconName: 'Brain',
  },
  {
    id: 'tool-depression',
    slug: 'depression-screening',
    category: 'health',
    name: {
      ar: 'استبيان الوعي بالمزاج والصحة النفسية (PHQ-9)',
      fr: 'Questionnaire Éducatif sur l\'Humeur & Santé Mentale (PHQ-9)',
    },
    description: {
      ar: 'مقياس توعوي غير تشخيصي يساعد على رصد تقلبات المزاج ومستوى الطاقة وتقديم نصائح للتحدث مع الأخصائيين.',
      fr: 'Grille d\'auto-observation non diagnostique (PHQ-9) aidant à identifier les variations d\'énergie et de moral.',
    },
    iconName: 'Smile',
  },
  {
    id: 'tool-eating',
    slug: 'eating-awareness',
    category: 'health',
    name: {
      ar: 'استبيان الوعي بأنماط الأكل والسلوك الغذائي',
      fr: 'Questionnaire de Sensibilisation aux Habitudes Alimentaires',
    },
    description: {
      ar: 'أداة تفاعلية لاستكشاف انتظام الوجبات، العلاقة مع الأكل العاطفي، والحفاظ على تغذية متوازنة وصحية.',
      fr: 'Auto-évaluation éducative de vos habitudes alimentaires et de l\'équilibre comportemental face aux repas.',
    },
    iconName: 'Utensils',
  },
  {
    id: 'tool-sleep',
    slug: 'sleep-assessment',
    category: 'health',
    name: {
      ar: 'تقييم جودة النوم والساعات الصحية التوعوي',
      fr: 'Évaluation Indicative de la Qualité du Sommeil',
    },
    description: {
      ar: 'احسب مدة النوم وكفاءته الليلية وتلق توصيات عملية لتحسين نظافة النوم وجودة الراحة.',
      fr: 'Analysez votre durée et qualité de sommeil avec un score indicatif et des conseils pratiques d\'hygiène nocturne.',
    },
    iconName: 'Moon',
  },
  {
    id: 'tool-vision',
    slug: 'visual-acuity-screening',
    category: 'health',
    name: {
      ar: 'اختبار حدة البصر التقريبي التفاعلي عن بعد',
      fr: 'Test Télémétrique Indicatif d\'Acuité Visuelle',
    },
    description: {
      ar: 'فحص توعوي أولي لحدة البصر عن طريق عرض حروف بأحجام متناقصة في الشاشة. لا يغني عن زيارة طبيب العيون.',
      fr: 'Dépistage visuel éducatif à l\'écran basé sur le principe d\'optotypes gradués. Ne remplace pas un examen ophtalmologique.',
    },
    iconName: 'Eye',
  },
  {
    id: 'tool-pilgrim',
    slug: 'pilgrim-health-checklist',
    category: 'health',
    name: {
      ar: 'قائمة الاستعداد الصحي واللقاحات للحجاج والمعتمرين',
      fr: 'Checklist Santé & Préparation Médicale du Pèlerin (Hadj & Omra)',
    },
    description: {
      ar: 'دليل التحضيرات الصحية للحج والعمرة: اللقاحات الإلزامية، حقيبة الأدوية الضرورية، والنصائح الميدانية للحر والمشي.',
      fr: 'Liste interactive des vaccins obligatoires, trousse médicale et recommandations sanitaires pour le Hadj et la Omra.',
    },
    iconName: 'ShieldCheck',
  },

  // ================= ISLAMIC (2) =================
  {
    id: 'tool-hijri',
    slug: 'hijri-calendar',
    category: 'islamic',
    name: {
      ar: 'الرزنامة الهجرية والميلادية وجدول العطل الرسمية في الجزائر',
      fr: 'Convertisseur Calendrier Hégirien / Grégorien & Jours Fériés',
    },
    description: {
      ar: 'محول فوري بين التاريخ الميلادي والهجري (أم القرى) مع استعراض جدول الأعياد الدينية والوطنية الرسمية في الجزائر.',
      fr: 'Convertisseur interactif entre dates grégoriennes et hégiriennes (Umm al-Qura) accompagné des jours fériés officiels algériens.',
    },
    iconName: 'Moon',
    isPopular: true,
  },
  {
    id: 'tool-qibla',
    slug: 'qibla-compass',
    category: 'islamic',
    name: {
      ar: 'بوصلة القبلة وتحديد الاتجاه للـ 58 ولاية جزائرية',
      fr: 'Boussole Qibla & Azimut pour les 58 Wilayas d\'Algérie',
    },
    description: {
      ar: 'تحديد زاوية القبلة بدقة جغرافية لكافة ولايات الجزائر الـ 58 أو عبر نظام تحديد المواقع GPS مباشرة.',
      fr: 'Déterminez la direction exacte et l\'azimut de la Qibla depuis le Nord vrai pour les 58 wilayas ou par géolocalisation.',
    },
    iconName: 'Compass',
    isPopular: true,
  },

  // ================= PRODUCTIVITY (9) =================
  {
    id: 'tool-admin-assistant',
    slug: 'admin-procedures-assistant',
    category: 'productivity',
    name: {
      ar: 'مساعد الوثائق والإجراءات الإدارية الجزائرية',
      fr: 'Assistant Interactif des Dossiers & Démarches Administratives',
    },
    description: {
      ar: 'دليل سريع وتفاعلي لاستخراج قائمة الملفات المطلوبة، الآجال، والرسوم الإدارية للوثائق في الجزائر (جواز، بطاقة تعريف، إقامة، بطاقة رمادية).',
      fr: 'Sélectionnez une démarche pour obtenir immédiatement la liste complète des pièces, coûts de timbres et portails officiels.',
    },
    iconName: 'FileCheck',
    references: [
      {
        label: { ar: 'المرجع العام للإجراءات الإدارية بوزارة الداخلية', fr: 'Référentiel Officiel - Ministère de l\'Intérieur' },
        url: 'https://interieur.gov.dz/category/الإجراءات-الإدارية/',
      },
    ],
  },
  {
    id: 'tool-arabic-dict',
    slug: 'arabic-dictionary',
    category: 'productivity',
    name: {
      ar: 'القاموس العربي للمرادفات والمصطلحات الإدارية والقانونية',
      fr: 'Lexique Arabe & Terminologie Administrative Algérienne',
    },
    description: {
      ar: 'معجم فوري مدمج لشرح المفردات العربية الفصيحة والمصطلحات الإدارية والقانونية المتداولة في الوثائق الرسمية.',
      fr: 'Dictionnaire de recherche rapide des termes juridiques, administratifs et lexicaux courants dans les actes officiels.',
    },
    iconName: 'BookOpen',
  },
  {
    id: 'tool-cv',
    slug: 'cv-builder',
    category: 'productivity',
    name: {
      ar: 'منشئ ومولد السيرة الذاتية الاحترافية (CV)',
      fr: 'Créateur de CV Professionnel Prêt à Imprimer',
    },
    description: {
      ar: 'صمم سيرة ذاتية نظيفة ومنظمة بالعربية أو الفرنسية مع إضافة الخبرات، التكوين، والمهارات، وتصديرها بصيغة PDF.',
      fr: 'Concevez un CV moderne bilingue avec expériences, formations et export direct au format impression / PDF.',
    },
    iconName: 'UserCheck',
  },
  {
    id: 'tool-invoice',
    slug: 'invoice-generator',
    category: 'productivity',
    name: {
      ar: 'مولد الفواتير وفواتير الشكلية التجارية (Facture / Proforma)',
      fr: 'Générateur de Factures & Devis (NIF / RC / TVA 19%)',
    },
    description: {
      ar: 'إنشاء وطباعة فواتير تجارية متوافقة مع المعايير الجزائرية تشمل رقم NIF وNIS والسجل التجاري واحتساب TVA 19%.',
      fr: 'Créez et imprimez des factures professionnelles conformes en Dinar avec mentions NIF, NIS, RC, TVA 19% et timbre fiscal.',
    },
    iconName: 'Receipt',
  },
  {
    id: 'tool-inventory',
    slug: 'inventory-manager',
    category: 'productivity',
    name: {
      ar: 'مسير المخزون والمنتجات وحاسبة الأرباح التجارية',
      fr: 'Gestionnaire de Stock, Ventes & Marges Commerciales',
    },
    description: {
      ar: 'أداة محلية لإدارة السلع، الكميات، تكلفة الشراء، سعر البيع، وحساب صافي الهامش الربحي مع حفظ البيانات على جهازك.',
      fr: 'Suivez vos articles, quantités en stock, prix d\'achat/vente et marge nette globale avec persistance locale.',
    },
    iconName: 'Package',
  },
  {
    id: 'tool-pdf',
    slug: 'pdf-tools',
    category: 'productivity',
    name: {
      ar: 'أدوات PDF المحلية (دمج وفصل وتصفح الملفات)',
      fr: 'Boîte à Outils PDF 100% Locale (Fusionner & Extraire)',
    },
    description: {
      ar: 'دمج عدة ملفات PDF أو استخراج صفحات محددة مباشرة داخل متصفحك لتجهيز ملفات المسابقات والوثائق الإدارية بأمان تام.',
      fr: 'Fusionnez plusieurs documents PDF ou extrayez une plage de pages directement dans votre navigateur sans aucun téléversement serveur.',
    },
    iconName: 'FileText',
  },
  {
    id: 'tool-qr',
    slug: 'qr-generator',
    category: 'productivity',
    name: {
      ar: 'مولد رموز الاستجابة السريعة QR Code دون إنترنت',
      fr: 'Générateur de Codes QR Hors-Ligne (PNG & SVG)',
    },
    description: {
      ar: 'توليد رموز QR للروابط، البطاقات المهنية، أو نصوص التواصل محليا بدقة عالية مع إمكانية التحميل كصورة PNG.',
      fr: 'Générez localement des QR Codes haute résolution pour liens, Wi-Fi ou contacts avec téléchargement PNG instantané.',
    },
    iconName: 'QrCode',
  },
  {
    id: 'tool-img-comp',
    slug: 'image-compressor',
    category: 'productivity',
    name: {
      ar: 'ضغط وتقليص حجم صور الوثائق الإدارية',
      fr: 'Compresseur d\'Images & Scans Administratifs',
    },
    description: {
      ar: 'ضغط صور الهوية ونسخ الوثائق الممسوحة لتقليص حجمها تحت 1 ميغابايت لتوافق شروط الرفع في المنصات الحكومية مع تحميل مباشر.',
      fr: 'Réduisez le poids de vos photos d\'identité et scans (sous 1-2 Mo) localement via Canvas avec téléchargement JPEG/WebP.',
    },
    iconName: 'Image',
  },
  {
    id: 'tool-text-tools',
    slug: 'text-tools',
    category: 'productivity',
    name: {
      ar: 'أدوات النصوص والبحوث (إحصاء الكلمات، التشكيل، التنسيق)',
      fr: 'Outils de Traitement de Texte & Recherche Académique',
    },
    description: {
      ar: 'تحليل النصوص، عد الكلمات والأحرف والأسطر، إزالة التشكيل والزوائد، وتنظيف المسافات وإعادة تنسيق الفقرات.',
      fr: 'Comptez mots, caractères et paragraphes, supprimez les signes diacritiques arabes, nettoyez les doublons et formatez vos textes.',
    },
    iconName: 'AlignLeft',
  },
];
