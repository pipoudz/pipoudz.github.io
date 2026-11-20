import { ToolItem, ToolRichGuide } from '@/lib/types';

export const batch2Tools: ToolItem[] = [
  {
    id: 'tool-loan',
    slug: 'loan-calculator',
    category: 'calculators',
    isPopular: true,
    name: {
      ar: 'حاسبة القروض والأقساط الشهرية والمرابحة',
      fr: 'Simulateur de Prêts, Mensualités & Financement (Algérie)',
    },
    description: {
      ar: 'احسب القسط الشهري للقرض وإجمالي الفوائد أو هامش الربح والمبلغ الإجمالي المستحق للسداد حسب قيمة التمويل ومعدل الفائدة ومدة السداد بالأشهر في الجزائر.',
      fr: 'Estimez la mensualité d\'un emprunt, le total des intérêts ou marge et le montant global à rembourser selon le capital, le taux annuel et la durée en mois.',
    },
    iconName: 'CreditCard',
    faqs: [
      {
        question: {
          ar: 'هل نتائج حاسبة القروض ملزمة أو تعد موافقة بنكية رسمية؟',
          fr: 'Cette simulation vaut-elle offre officielle ou accord de la banque ?',
        },
        answer: {
          ar: 'لا، هذه النتائج تقديرية للمساعدة على التخطيط المالي وليست استشارة أو التزاما رسميا من البنك؛ إذ يجب مراجعة جدول السداد والعرض البنكي النهائي قبل التوقيع.',
          fr: 'Non, il s\'agit d\'une estimation indicative qui ne constitue ni un conseil financier ni un engagement bancaire ; référez-vous toujours au tableau d\'amortissement officiel de votre banque.',
        },
      },
      {
        question: {
          ar: 'ما التكاليف التي قد ترفع كلفة القرض الفعلية مقارنة بالتقدير الأولي؟',
          fr: 'Quels frais supplémentaires peuvent modifier le coût final du financement ?',
        },
        answer: {
          ar: 'تؤثر مصاريف دراسة الملف، التأمين الإلزامي على القرض، الرسوم البنكية، وطريقة احتساب الفائدة أو هامش المرابحة على القسط الحقيقي والكلفة النهائية.',
          fr: 'L\'assurance emprunteur obligatoire, les frais de dossier, les timbres et la méthode exacte de calcul du taux ou de la marge Mourabaha influencent le coût total réel.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من قدرتي على تحمل القسط الشهري للقرض؟',
          fr: 'Comment vérifier ma capacité d\'endettement mensuelle avant d\'emprunter ?',
        },
        answer: {
          ar: 'احسب أولا دخلك الصافي عبر حاسبة الراتب الصافي وتأكد في الجزائر من ألا تتجاوز الأقساط الشهرية عادة نسبة 30% إلى 35% من الأجر الصافي للأسرة وفق سياسة البنك.',
          fr: 'Calculez d\'abord votre revenu via le simulateur de salaire net et veillez à maintenir la mensualité sous le seuil usuel de 30 % à 35 % de vos revenus nets.',
        },
      },
    ],
  },
  {
    id: 'tool-number-to-words',
    slug: 'number-to-words',
    category: 'calculators',
    isPopular: true,
    name: {
      ar: 'محول الأرقام إلى الحروف بالدينار الجزائري والسنتيم',
      fr: 'Convertisseur Chiffres en Lettres (Dinar Algérien & Centimes)',
    },
    description: {
      ar: 'حول أي مبلغ مالي بالأرقام إلى الحروف بالدينار الجزائري والسنتيم بصياغة عربية وفرنسية سليمة جاهزة للنسخ والطباعة على الصكوك البريدية CCP والفواتير والوصولات الإدارية.',
      fr: 'Convertissez instantanément tout montant en toutes lettres (arabe et français, dinars et centimes) prêt à copier-coller sur vos chèques CCP, factures et reçus officiels.',
    },
    iconName: 'Type',
    faqs: [
      {
        question: {
          ar: 'هل يدعم المحول الأجزاء العشرية وتحويلها إلى السنتيم؟',
          fr: 'L\'outil gère-t-il les décimales et centimes pour les chèques ?',
        },
        answer: {
          ar: 'نعم، يدعم المحول حتى منزلتين عشريتين (باستخدام الفاصلة أو النقطة مثل 12500,75) ويحولهما بدقة إلى سنتيم من 0 إلى 99.',
          fr: 'Oui, il prend en charge jusqu\'à deux décimales (virgule ou point) pour convertir automatiquement les centimes de 0 à 99.',
        },
      },
      {
        question: {
          ar: 'هل يعمل محول الأرقام إلى حروف محليا دون إنترنت؟',
          fr: 'Le convertisseur fonctionne-t-il en local et sans connexion après chargement ?',
        },
        answer: {
          ar: 'نعم، بعد تحميل الصفحة وملفاتها على جهازك، تتم عملية التحويل محليا داخل المتصفح ولا يرسل المبلغ إلى أي خادم ولا يحفظ في سجل دائم.',
          fr: 'Oui, après le chargement initial de la page, toute conversion s\'effectue hors-ligne dans votre navigateur sans aucun envoi ou stockage sur serveur.',
        },
      },
      {
        question: {
          ar: 'هل الصياغة الناتجة مقبولة تلقائيا في كل الوثائق الرسمية؟',
          fr: 'La formulation générée convient-elle à tous les organismes officiels ?',
        },
        answer: {
          ar: 'توفر الأداة صياغة قياسية دقيقة مثل عبارة «فقط ... لا غير»، غير أنه ينبغي مراجعة النص النهائي واتباع أي صيغة خاصة تشترطها الجهة المستقبلة للوثيقة أو الصك.',
          fr: 'La formulation standard proposée est conforme aux usages courants, mais il convient toujours de vérifier les exigences particulières de l\'organisme destinataire avant validation.',
        },
      },
    ],
  },
  {
    id: 'tool-percentage',
    slug: 'percentage-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة النسبة المئوية والزيادات والتخفيضات',
      fr: 'Calculateur de Pourcentage, Remises & Variations',
    },
    description: {
      ar: 'احسب النسبة المئوية لأي جزء من القيمة الإجمالية، أو استخرج قيمة النسبة ومقدار الزيادة أو النقصان مثل الرسم على القيمة المضافة TVA والتخفيضات ونتائج النقاط فورا.',
      fr: 'Calculez rapidement le pourcentage d\'une valeur sur un total, extrayez un taux précis ou mesurez une hausse/remise (TVA 19 %, soldes, scores scolaires) avec résultat immédiat.',
    },
    iconName: 'Percent',
    faqs: [
      {
        question: {
          ar: 'كيف أحسب النسبة المئوية لجزء معين من المبلغ الإجمالي؟',
          fr: 'Comment trouver le pourcentage que représente une part par rapport au total ?',
        },
        answer: {
          ar: 'أدخل قيمة الجزء والقيمة الإجمالية الكلية، فتقسم الحاسبة الجزء على الإجمالي وتضرب الناتج في 100 مع التحقق التلقائي من صحة المدخلات.',
          fr: 'Saisissez la valeur partielle puis le total : l\'outil divise la part par le total et multiplie par 100 avec contrôle immédiat de validité.',
        },
      },
      {
        question: {
          ar: 'هل يمكن حساب الرسم على القيمة المضافة TVA 19% أو التخفيض التجاري بالأداة؟',
          fr: 'Puis-je calculer la TVA 19 % ou une remise commerciale avec cet outil ?',
        },
        answer: {
          ar: 'نعم، تتيح الأداة حساب مقدار النسبة من أي سعر أصلي ثم إضافتها لحساب السعر بالرسوم TTC أو طرحها لحساب السعر الصافي بعد التخفيض.',
          fr: 'Oui, il suffit de saisir le montant hors taxes et le taux (19 % ou 9 %) ou le pourcentage de réduction pour connaître aussitôt le montant exact à ajouter ou déduire.',
        },
      },
    ],
  },
  {
    id: 'tool-salary',
    slug: 'salary-calculator',
    category: 'calculators',
    isPopular: true,
    name: {
      ar: 'حاسبة الراتب الصافي واقتطاع الضريبة IRG في الجزائر',
      fr: 'Calculateur Salaire Net & Barème IRG en Algérie',
    },
    description: {
      ar: 'قدر راتبك الصافي في الجزائر انطلاقا من الأجر الإجمالي الخاضع للاقتطاع، مع تفصيل خصم الضمان الاجتماعي (9% CNAS) والضريبة على الدخل الإجمالي IRG وفق شرائح قانون المالية.',
      fr: 'Estimez votre salaire net en Algérie à partir du brut soumis à cotisation avec détail complet : retenue Sécurité Sociale (9 % CNAS), assiette imposable et IRG selon les tranches en vigueur.',
    },
    iconName: 'Wallet',
    faqs: [
      {
        question: {
          ar: 'كيف تحسب الحاسبة اقتطاع الضمان الاجتماعي والضريبة IRG؟',
          fr: 'Comment sont calculées les retenues CNAS et IRG dans ce simulateur ?',
        },
        answer: {
          ar: 'تقتطع الحاسبة أولا 9% للضمان الاجتماعي من الراتب الإجمالي الخاضع (الأجر القاعدي + العلاوات الخاضعة)، ثم تطبق سلم الضريبة IRG على الباقي (Base IRG) مع الإعفاء التام لما دون 30,000 دج.',
          fr: 'La retenue CNAS (9 %) est déduite du salaire cotisable ; le reste forme la base IRG sur laquelle s\'applique le barème progressif avec exonération totale sous 30 000 DZD.',
        },
      },
      {
        question: {
          ar: 'ما هو المبلغ الخاضع للضريبة Base IRG ولماذا قد يختلف راتبي الفعلي قليلا؟',
          fr: 'Qu\'est-ce que la Base IRG et pourquoi mon net réel peut-il être légèrement différent ?',
        },
        answer: {
          ar: 'Base IRG هو المبلغ المتبقي بعد خصم نسبة 9% للضمان الاجتماعي؛ وقد يكون راتبك الفعلي أعلى بقليل لكون الحساب القياسي لا يشمل المنح العائلية أو التعويضات غير الخاضعة للضريبة كالسلة والنقل.',
          fr: 'La Base IRG représente le salaire après déduction des 9 % CNAS. Votre paie réelle peut être légèrement supérieure si vous percevez des primes exonérées (panier, transport, allocations familiales).',
        },
      },
      {
        question: {
          ar: 'هل تغني نتيجة الحاسبة عن كشف الراتب الرسمي؟',
          fr: 'Cette simulation tient-elle lieu de fiche de paie officielle ?',
        },
        answer: {
          ar: 'لا، إنها أداة تقديرية استرشادية لفهم بنية الأجر ولا تستبدل كشف الراتب الصادر عن مصلحة المستخدمين أو المحاسبة في مؤسستك.',
          fr: 'Non, il s\'agit d\'un simulateur pédagogique qui ne se substitue pas au bulletin de paie délivré par votre employeur ou service RH.',
        },
      },
    ],
  },
  {
    id: 'tool-unit-converter',
    slug: 'unit-converter',
    category: 'calculators',
    name: {
      ar: 'محول وحدات القياس والمساحات والكتل والطاقة',
      fr: 'Convertisseur Universel d\'Unités de Mesure (Longueur, Masse, Surface)',
    },
    description: {
      ar: 'حول فورا وحدات الطول، الوزن، المساحة الفلاحية والعقارية (الهكتار والآر والمتر المربع)، الحجم، الحرارة، السرعة، الطاقة، الضغط، والبيانات الرقمية مع إمكانية النسخ السريع.',
      fr: 'Convertissez instantanément longueurs, masses, surfaces (hectares, ares, m²), volumes, températures, vitesses, énergie, pression et données numériques avec copie directe.',
    },
    iconName: 'Ruler',
    faqs: [
      {
        question: {
          ar: 'ما أبرز فئات القياس التي يغطيها محول الوحدات؟',
          fr: 'Quelles familles d\'unités sont prises en charge par le convertisseur ?',
        },
        answer: {
          ar: 'يشمل المحول وحدات الطول، الكتلة والوزن، المساحة، الحجم، درجة الحرارة، السرعة، الطاقة، الضغط، الوقت، ووحدات تخزين البيانات الرقمية.',
          fr: 'L\'outil regroupe les unités courantes de longueur, masse, surface, volume, température, vitesse, énergie, pression, durée et données informatiques.',
        },
      },
      {
        question: {
          ar: 'ما الذي يجب التحقق منه قبل نسخ نتيجة التحويل في الأعمال الهندسية أو العقارية؟',
          fr: 'Quelle précaution adopter pour les calculs techniques ou fonciers ?',
        },
        answer: {
          ar: 'تحقق بدقة من الوحدة الأصلية والوحدة الهدف قبل نسخ الرقم النهائي، خصوصا عند التحويل بين الهكتار والآر والمتر المربع أو وحدات الضغط والحجم الدقيقة.',
          fr: 'Contrôlez toujours l\'unité source et l\'unité cible sélectionnées avant de reporter la valeur, notamment entre hectare, are et m² ou en métrologie.',
        },
      },
    ],
  },
  {
    id: 'tool-budget-calc',
    slug: 'budget-calculator',
    category: 'daily-life',
    name: {
      ar: 'حاسبة ميزانية الطالب الشهرية وتكاليف المعيشة',
      fr: 'Calculateur de Budget Étudiant & Frais de Vie en Algérie',
    },
    description: {
      ar: 'احسب ميزانية الطالب ومصاريف المعيشة الشهرية بالدينار الجزائري عبر جمع تكاليف السكن والطعام والنقل والمستلزمات الدراسية لمعرفة إجمالي الإنفاق الشهري بدقة.',
      fr: 'Estimez le budget mensuel d\'un étudiant en Algérie (logement, alimentation, transport, frais d\'études) en dinars algériens pour connaître le total des charges.',
    },
    iconName: 'PiggyBank',
    faqs: [
      {
        question: {
          ar: 'ما أهم البنود التي تشملها حاسبة ميزانية الطالب؟',
          fr: 'Quels postes principaux sont pris en compte dans le budget étudiant ?',
        },
        answer: {
          ar: 'تركز الحاسبة على النفقات الأساسية للطالب الجامعي في الجزائر: الإيجار أو الإقامة، الغذاء، اشتراك النقل الجامعي والتنقل، ومصاريف الطباعة والكتب والإنترنت.',
          fr: 'Elle additionne les quatre pôles essentiels : hébergement/loyer, alimentation, transport universitaire ou déplacements, et fournitures/impression/internet.',
        },
      },
      {
        question: {
          ar: 'هل تصلح الأداة لمقارنة المصاريف في مدن جامعية مختلفة؟',
          fr: 'L\'outil permet-il de comparer le coût de la vie selon la ville universitaire ?',
        },
        answer: {
          ar: 'نعم، يمكنك تعديل تكلفة الكراء والنقل حسب كل ولاية لمعرفة الفارق الشهري بين الإقامة الجامعية والكراء الخاص قبل بداية الموسم الجامعي.',
          fr: 'Oui, en ajustant les estimations de loyer et de transport selon la wilaya, vous évaluez immédiatement l\'écart financier entre cité U et location privée.',
        },
      },
    ],
  },
  {
    id: 'tool-budget-manager',
    slug: 'budget-manager',
    category: 'daily-life',
    name: {
      ar: 'ميزانيتي الذكية: تسيير الميزانية والمصاريف الشهرية',
      fr: 'Mon Budget Intelligent : Gestion & Suivi Mensuel des Dépenses',
    },
    description: {
      ar: 'نظم راتبك ومداخيلك الشهرية بالدينار، حدد سقوف المصاريف لكل فئة، سجل العمليات المالية، وحاكِ الادخار والطوارئ مع حفظ البيانات محليا وإمكانية تنزيل نسخة احتياطية.',
      fr: 'Organisez vos revenus mensuels en dinars, définissez des plafonds par catégorie, enregistrez vos opérations, simulez votre épargne et sauvegardez vos données en local.',
    },
    iconName: 'BarChart2',
    faqs: [
      {
        question: {
          ar: 'أين تحفظ بيانات ميزانيتي وهل يمكنني الاحتفاظ بنسخة احتياطية؟',
          fr: 'Où sont sauvegardées mes données budgétaires et puis-je les exporter ?',
        },
        answer: {
          ar: 'تحفظ كافة المداخيل والمصاريف في هذا المتصفح فقط ولا ترسل لأي خادم، مع توفير زر لتنزيل نسخة احتياطية من ملفك للرجوع إليها في أي جهاز.',
          fr: 'Toutes vos opérations demeurent stockées localement dans votre navigateur ; utilisez le bouton d\'export pour télécharger une copie de sauvegarde sur votre appareil.',
        },
      },
      {
        question: {
          ar: 'هل يتضمن محاكي الادخار فوائد بنكية أو عوائد استثمارية؟',
          fr: 'Le simulateur d\'épargne inclut-il des intérêts bancaires ou rendements ?',
        },
        answer: {
          ar: 'لا، الادخار المتوقع داخل الأداة هو حساب تقديري بحت للفائض بين الدخل والمصاريف ولا يضيف تلقائيا فوائد أو عوائد استثمارية.',
          fr: 'Non, la projection d\'épargne reflète uniquement l\'excédent brut estimé entre revenus et dépenses sans intégrer d\'intérêts ou de rendements financiers.',
        },
      },
    ],
  },
  {
    id: 'tool-farm-planner',
    slug: 'farm-planner',
    category: 'daily-life',
    name: {
      ar: 'المساعد الفلاحي: مخطط غرس الأشجار والري والتكاليف',
      fr: 'Assistant Agricole : Planificateur de Plantation & Irrigation',
    },
    description: {
      ar: 'خطط توزيع الأشجار (مثل الزيتون وغيرها) وفق أبعاد الأرض والمسافات بين الصفوف، واحسب عدد الشتلات وتدفق الري بالتنقيط وميزانية البستان ودفتر الأعمال الفلاحية محليا.',
      fr: 'Planifiez la plantation d\'arbres selon les dimensions de votre parcelle, estimez le débit d\'irrigation goutte-à-goutte, budgétez votre verger et tenez votre carnet agricole en local.',
    },
    iconName: 'Trees',
    faqs: [
      {
        question: {
          ar: 'هل الأرقام الافتراضية لمسافات الغرس وتدفق الري توصية زراعية ملزمة؟',
          fr: 'Les valeurs initiales de distance et d\'irrigation sont-elles des recommandations agronomiques ?',
        },
        answer: {
          ar: 'لا، القيم الأولية مجرد أمثلة هندسية وحسابية توضيحية؛ يجب تعديل مسافات الغرس ومعدل المنقطات وبرنامج الري حسب نوع الأشجار، طبيعة التربة، وميلان الأرض الفعلي.',
          fr: 'Non, les valeurs préremplies servent uniquement d\'exemples géométriques et arithmétiques ; adaptez l\'espacement et les débits à votre variété, votre sol et la pente réelle.',
        },
      },
      {
        question: {
          ar: 'هل تحسب ميزانية البستان بأسعار سوق جاهزة أم بأسعاري الخاصة؟',
          fr: 'Les prix utilisés dans le budget du verger sont-ils prédéfinis ?',
        },
        answer: {
          ar: 'تدخل جميع الأسعار يدويا بالدينار الجزائري (الشتلات، الأنابيب، الأسمدة، اليد العاملة)، ولا تعتمد الأداة أي أسعار أو عروض تجارية مفترضة.',
          fr: 'Tous les prix unitaires sont saisis manuellement par vos soins en DZD ; aucun tarif ni offre commerciale n\'est présumé par défaut.',
        },
      },
      {
        question: {
          ar: 'كيف أحفظ مخطط الغرس ودفتر الأعمال الفلاحية دون ضياع؟',
          fr: 'Comment sauvegarder durablement mon plan et mon journal d\'exploitation ?',
        },
        answer: {
          ar: 'تحفظ بيانات دفتر الأعمال في المتصفح فقط مع خيار تصدير نسخة JSON احتياطية، كما يمكنك طباعة مخطط الغرس أو حفظه كملف PDF عبر أمر الطباعة في المتصفح.',
          fr: 'Le carnet est enregistré en local dans le navigateur avec export JSON, et vous pouvez enregistrer le plan visuel en PDF via la fonction « Imprimer / Enregistrer en PDF ».',
        },
      },
    ],
  },
];

export const batch2ToolGuides: Record<string, Partial<ToolRichGuide>> = {
  'loan-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'الأفراد والمهنيون الراغبون في حساب قسط التمويل أو السكن أو السيارة',
        fr: 'Particuliers et professionnels simulant un crédit immobilier, auto ou équipement',
      },
      processingTime: {
        ar: 'حساب فوري للقسط الشهري وإجمالي الفوائد والمستحق',
        fr: 'Calcul instantané de la mensualité et du coût global',
      },
      fees: {
        ar: 'محاكاة مجانية غير ملزمة للبنوك',
        fr: 'Simulateur gratuit sans engagement bancaire',
      },
      channel: {
        ar: 'حاسبة محلية بالكامل مع التكامل مع حاسبة الراتب والميزانية',
        fr: 'Calculateur web local couplé au simulateur salaire net et budget',
      },
      keyRequirement: {
        ar: 'مبلغ التمويل بالدينار، نسبة الفائدة السنوية، ومدة السداد بالأشهر',
        fr: 'Capital emprunté (DZD), taux annuel indicatif et durée en mois',
      },
    },
    explanation: {
      ar: [
        'تساعدك حاسبة القروض والأقساط على تقدير القسط الشهري المستحق، إجمالي الفوائد أو الهامش، والمبلغ الإجمالي للسداد بالدينار الجزائري استنادا إلى مبلغ التمويل ومعدل الفائدة السنوي ومدة السداد بالأشهر.',
        'يسهم اختبار أكثر من مدة سداد ومعدل فائدة في مقارنة الضغط الشهري على دخلك قبل التقدم بطلب تمويل سكني أو استهلاكي أو تمويل صيرفة إسلامية لدى البنوك الجزائرية.',
        'تنبيه مهم: النتائج التي تعرضها الأداة هي تقديرات رياضية أولية وليست استشارة مالية أو عرضا رسميا ملزما من أي مؤسسة مصرفية.',
        'قد تختلف الكلفة الفعلية عند الإمضاء بسبب التأمين الإجباري على الحياة والعجز، رسوم الملف والطوابع الجبائية، وطريقة البنك في احتساب الفائدة أو هامش المرابحة؛ لذا تحقق دائما من جدول السداد الرسمي.'
      ],
      fr: [
        'Le simulateur de prêts vous permet d\'estimer rapidement votre mensualité, le coût total des intérêts et le montant global à rembourser en dinars algériens à partir du capital, du taux annuel et de la durée en mois.',
        'En modulant la durée de remboursement avant de vous engager, vous vérifiez l\'équilibre entre mensualité supportable et coût cumulé du crédit.',
        'Avertissement important : ces résultats sont purement indicatifs et ne constituent ni un conseil financier personnalisé ni une offre officielle d\'un établissement bancaire.',
        'Le coût final contractuel peut varier en raison de l\'assurance emprunteur obligatoire, des frais de dossier, des droits de timbre et des modalités exactes de calcul de la banque.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة احتساب القسط الثابت (الأقساط الشهرية المتساوية)',
      fr: 'Formule de mensualité constante amortissable',
    },
    formulaText: {
      ar: 'القسط الشهري = المبلغ × [المعدل الشهري ÷ (1 − (1 + المعدل الشهري)^(−عدد الأشهر))]. إجمالي الفوائد = (القسط × عدد الأشهر) − أصل القرض.',
      fr: 'Mensualité = Capital × [taux mensuel ÷ (1 − (1 + taux mensuel)^(−nombre de mois))]. Total intérêts = (Mensualité × mois) − Capital.',
    },
    practicalExample: {
      title: {
        ar: 'مثال لمحاكاة تمويل بقيمة 4,000,000 دج لمدة 180 شهرا',
        fr: 'Exemple de simulation pour 4 000 000 DZD sur 180 mois (15 ans)',
      },
      scenario: {
        ar: 'مواطن يحسب قسط تمويل قدره 400 مليون سنتيم (4,000,000 دج) بمعدل سنوي افتراضي 5.5% لمدة 15 سنة (180 شهرا).',
        fr: 'Un particulier évalue un financement de 4 000 000 DZD au taux annuel indicatif de 5,5 % sur 180 mois.',
      },
      result: {
        ar: 'يناهز القسط التقديري نحو 32,683 دج شهريا، مع ضرورة مقارنة هذا القسط مع الراتب الصافي وإضافة مصاريف التأمين والملف عند طلب العرض البنكي الرسمي.',
        fr: 'La mensualité théorique avoisine 32 683 DZD par mois ; pensez à y ajouter l\'assurance et les frais de dossier lors de votre demande de devis officiel en agence.',
      },
    },
    tips: {
      ar: [
        'احسب دخلك الصافي أولا في حاسبة الراتب الصافي للتأكد من قدرة ميزانيتك على تحمل القسط دون اختلال.',
        'قارن دائما بين عروض عدة بنوك في التكلفة الإجمالية بما يشمل التأمين ومصاريف دراسة الملف.',
        'أدرج القسط المتوقع في أداة ميزانيتي الذكية لاختبار أثره على مصاريف الأسرة وادخار الطوارئ.',
        'اطلب من وكالتك البنكية جدول السداد التفصيلي الكامل وشروط التسبيق أو السداد المبكر قبل التوقيع.',
      ],
      fr: [
        'Estimez d\'abord votre revenu via la calculatrice de salaire net afin de rester sous votre capacité d\'endettement.',
        'Comparez les offres bancaires sur le coût global réel incluant assurances et frais annexes.',
        'Intégrez la mensualité simulée dans votre gestionnaire de budget pour tester l\'équilibre mensuel du foyer.',
        'Exigez le tableau d\'amortissement complet et vérifiez les conditions de remboursement anticipé avant signature.',
      ],
    },
    extraFaqs: [],
  },

  'number-to-words': {
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون والمحاسبون والمقاولون الذاتيون عند تحرير الصكوك والفواتير',
        fr: 'Particuliers, comptables et entreprises rédigeant chèques et factures',
      },
      processingTime: {
        ar: 'تحويل فوري للحروف مع أزرار نسخ وطباعة وأمثلة جاهزة',
        fr: 'Conversion immédiate avec boutons copier, imprimer et exemples rapides',
      },
      fees: {
        ar: 'مجاني بالكامل ويعمل محليا دون إنترنت بعد التحميل',
        fr: '100 % gratuit et fonctionnel hors-ligne après chargement',
      },
      channel: {
        ar: 'معالجة داخل المتصفح دون إرسال أو حفظ للمبالغ',
        fr: 'Traitement local dans le navigateur sans serveur ni historique distant',
      },
      keyRequirement: {
        ar: 'إدخال المبلغ بالدينار مع فاصلة أو نقطة للجزء العشري (حتى منزلتين)',
        fr: 'Saisir le montant en DZD avec virgule ou point pour les centimes (0 à 99)',
      },
    },
    explanation: {
      ar: [
        'يتيح محول الأرقام إلى حروف بالدينار الجزائري تحويل أي مبلغ عددي إلى صياغة لغوية دقيقة جاهزة للنسخ والصق في الصكوك البريدية CCP والبنكية، الفواتير التجارية، الوصولات، والمحررات الإدارية مع احتساب السنتيم بدقة.',
        'يمكنك إدخال المبلغ بالدينار واستخدام الفاصلة أو النقطة للفصل العشري (مثال: 12500,75) مع دعم كامل حتى منزلتين عشريتين من 0 إلى 99 سنتيما، وإمكانية تفعيل عبارة «فقط ... لا غير» أو إظهار الرقم ضمن النتيجة.',
        'يضم المحول أمثلة سريعة لتعبئة المبالغ بنقرة واحدة، إلى جانب أزرار مخصصة للنسخ والطباعة المباشرة دون علامات مائية أو قيود.',
        'تجرى المعالجة بالكامل داخل المتصفح ولا يرسل أي مبلغ إلى خادم خارجي، ومع أن الأداة تلتزم بالقواعد القياسية في اللغة العربية والفرنسية، ينصح دوما بمراجعة الصياغة ومطابقة النموذج المطلوب لدى الجهة المستقبلة للوثيقة.'
      ],
      fr: [
        'Le convertisseur de chiffres en lettres adapté au Dinar Algérien transforme instantanément tout montant numérique en texte conforme (dinars et centimes) pour sécuriser la rédaction de vos chèques CCP, chèques bancaires, reçus et factures.',
        'Vous pouvez saisir le montant avec un point ou une virgule pour les décimales (ex. 12500,75), jusqu\'à deux chiffres après la virgule pour convertir exactement les centimes de 0 à 99.',
        'Des exemples prédéfinis facilitent la prise en main rapide et permettent d\'ajouter la mention standard de clôture avant de copier ou imprimer le libellé.',
        'Le traitement reste strictement local dans votre navigateur sans envoi serveur ; pensez toutefois à relire la formulation selon le modèle exigé par l\'organisme ou le guichet destinataire.'
      ],
    },
    formulaTitle: {
      ar: 'قواعد التفقيط وتقسيم الدينار والسنتيم',
      fr: 'Règles de conversion des dinars et centimes',
    },
    formulaText: {
      ar: 'يفصل المبلغ إلى جزء صحيح (بالدينار الجزائري) وجزء عشري من منزلتين (بالسنتيم من 00 إلى 99)، ثم تطبق قواعد التذكير والتأنيث والتمييز العربية وصيغ الربط الفرنسية تلقائيا.',
      fr: 'Le nombre est décomposé en partie entière (Dinars algériens) et partie décimale sur deux chiffres (Centimes de 00 à 99), avec accords grammaticaux automatiques en arabe et en français.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لمبلغ 12,500.75 دج على صك أو فاتورة',
        fr: 'Exemple pratique : rédaction du montant 12 500,75 DZD',
      },
      scenario: {
        ar: 'إدخال الرقم 12500,75 مع تفعيل عبارة الإغلاق الرسمية لتحرير وصل أو فاتورة تجارية.',
        fr: 'Saisie du montant 12500,75 avec la mention de clôture pour une facture ou un reçu.',
      },
      result: {
        ar: 'يخرج المحول النص جاهزا للنسخ: اثنا عشر ألفا وخمسمائة دينار جزائري وخمسة وسبعون سنتيما، دون أخطاء إملائية قد تتسبب في رفض الصك.',
        fr: 'Résultat immédiat prêt à copier : « Douze mille cinq cents dinars algériens et soixante-quinze centimes », évitant toute discordance sur le titre de paiement.',
      },
    },
    tips: {
      ar: [
        'استخدم الفاصلة أو النقطة لإدخال السنتيمات (منزلتين عشريتين بحد أقصى مثل 50 أو 75).',
        'فعّل خيار عبارة «فقط ... لا غير» لحماية الصكوك والوصولات من أي تعديل لاحق.',
        'استعن بالمحول مباشرة عند إعداد الفواتير أو مقارنة المبالغ المحولة من محول العملات.',
        'راجع النموذج المعتمد في وثيقة الجهة الرسمية إذا كانت تطلب صياغة إدارية محددة.',
      ],
      fr: [
        'Séparez les centimes par un point ou une virgule (jusqu\'à 2 décimales, de 0 à 99 centimes).',
        'Activez la mention de clôture standard lors du remplissage d\'un chèque postal CCP ou bancaire.',
        'Complétez directement vos devis en associant cet outil au générateur de factures PDF.',
        'Relisez toujours la ligne en lettres face au montant chiffré avant de signer votre document.',
      ],
    },
    extraFaqs: [],
  },

  'percentage-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'المتسوقون والطلبة والتجار والموظفون لحساب النسب الفورية',
        fr: 'Étudiants, commerçants, acheteurs et salariés pour calculs de taux rapides',
      },
      processingTime: {
        ar: 'تحقق فوري من المدخلات وعرض مباشر للنسبة والزيادة والنقصان',
        fr: 'Validation des saisies et résultat instantané en temps réel',
      },
      fees: {
        ar: 'أداة مجانية بالكامل داخل المتصفح',
        fr: 'Outil 100 % gratuit dans le navigateur',
      },
      channel: {
        ar: 'تطبيق محلي دقيق للنسب المئوية والزيادات',
        fr: 'Calculateur web local de pourcentages et remises',
      },
      keyRequirement: {
        ar: 'إدخال قيمة الجزء والإجمالي أو النسبة المئوية المطلوبة',
        fr: 'Saisir la part et le total ou le pourcentage souhaité',
      },
    },
    explanation: {
      ar: [
        'تسمح لك حاسبة النسبة المئوية بحساب النسبة المئوية لأي قيمة جزئية من مبلغ إجمالي بسرعة ودقة، مع التحقق التلقائي من صحة الأرقام المدخلة وتفادي أخطاء القسمة اليدوية.',
        'إلى جانب حساب نسبة الجزء من الكل، تتيح الأداة استخراج قيمة نسبة مئوية معينة من مبلغ أصلي وحساب مقدار الزيادة أو التخفيض المئوي.',
        'تتعدد استعمالات هذه الحاسبة في الحياة اليومية بالجزائر: من حساب الرسم على القيمة المضافة TVA بنسبة 19% أو 9% في الفواتير، إلى حساب تخفيضات المشتريات، أو قياس نسب النجاح والزيادة في الأجور.',
        'كما تتكامل الأداة مع حاسبة معدل السداسي الجامعي والمعدل السنوي لمساعدة الطلبة في تقدير وزن المواد والمعاملات.'
      ],
      fr: [
        'Le calculateur de pourcentage permet de déterminer instantanément la part en pourcentage d\'une valeur par rapport à un total, avec vérification automatique des données saisies.',
        'Il aide également à extraire le montant correspondant à un taux donné ou à calculer une variation en hausse (majoration, taxe) ou en baisse (remise commerciale).',
        'En Algérie, cet outil répond à de nombreux besoins courants : application de la TVA à 19 % ou 9 % sur un devis, calcul d\'une remise en boutique, hausse salariale ou statistique de réussite.',
        'Pour les étudiants, il complète utilement les calculateurs de moyenne semestrielle et annuelle en facilitant l\'analyse des pondérations.'
      ],
    },
    formulaTitle: {
      ar: 'القوانين الرياضية الثلاثة للنسب المئوية',
      fr: 'Les trois formules de calcul des pourcentages',
    },
    formulaText: {
      ar: 'النسبة المئوية = (الجزء ÷ الإجمالي) × 100. قيمة النسبة = الإجمالي × (النسبة ÷ 100). السعر بعد التخفيض/الزيادة = الأصل × (1 ± النسبة ÷ 100).',
      fr: 'Taux (%) = (Part ÷ Total) × 100. Montant d\'un taux = Total × (Taux ÷ 100). Valeur ajustée = Origine × (1 ± Taux ÷ 100).',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لحساب TVA 19% أو تخفيض تجاري 25%',
        fr: 'Exemple pratique : calcul de TVA 19 % et remise de 25 %',
      },
      scenario: {
        ar: 'تاجر أو زبون يريد حساب 19% كضريبة على مبلغ خام قدره 20,000 دج.',
        fr: 'Un professionnel applique une TVA de 19 % sur un montant hors taxes de 20 000 DZD.',
      },
      result: {
        ar: 'تساوي قيمة الضريبة 3,800 دج ليصبح المجموع 23,800 دج؛ وإذا طبق تخفيض 25% على 20,000 دج تنقص القيمة بمقدار 5,000 دج إلى 15,000 دج.',
        fr: 'La TVA représente 3 800 DZD (total TTC de 23 800 DZD). Inversement, une remise de 25 % déduit 5 000 DZD pour ramener le prix à 15 000 DZD.',
      },
    },
    tips: {
      ar: [
        'تأكد من أن القيمة الإجمالية ليست صفرا قبل إجراء حساب نسبة الجزء من الكل.',
        'انتبه للفرق بين حساب نسبة 19% مضافة على السعر الصافي واستخراج الضريبة المدمجة داخل سعر TTC.',
        'استعمل هذه الحاسبة مع مولد الفواتير للتحقق من هوامش الربح والضرائب قبل الطباعة.',
        'اربط النسب المئوية في الدراسة مع حاسبة معدل السداسي لتتبع وزن كل مقياس.',
      ],
      fr: [
        'Vérifiez que la valeur totale saisie est supérieure à zéro avant de lancer le calcul.',
        'Distinguez l\'ajout d\'une TVA de 19 % sur un prix HT de l\'extraction de TVA sur un prix TTC.',
        'Utilisez-la en contrôle rapide lors de l\'édition de factures ou proformas commerciales.',
        'En contexte universitaire, croisez ces taux avec le calculateur de moyenne LMD.',
      ],
    },
    extraFaqs: [],
  },

  'salary-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'الأجراء في القطاعين العام والخاص والمحاسبون وأرباب العمل بالجزائر',
        fr: 'Salariés du public/privé, responsables RH et comptables en Algérie',
      },
      processingTime: {
        ar: 'تفصيل فوري لصافي الراتب، CNAS 9%، Base IRG، والضريبة',
        fr: 'Détail instantané : Salaire Net, retenue SS 9 %, Base IRG et Impôt IRG',
      },
      fees: {
        ar: 'أداة محاكاة مجانية (لا تحل محل كشف الراتب الرسمي)',
        fr: 'Simulateur gratuit à titre indicatif (non officiel)',
      },
      channel: {
        ar: 'محاكي محلي مضبوط على سلم الضريبة على الدخل IRG بالجزائر',
        fr: 'Calculateur local calibré sur le barème fiscal algérien IRG',
      },
      keyRequirement: {
        ar: 'إدخال الأجر الإجمالي الخاضع للاقتطاع (الأجر القاعدي + العلاوات الخاضعة)',
        fr: 'Salaire brut cotisable (Salaire de base + primes imposables)',
      },
    },
    explanation: {
      ar: [
        'تمنحك حاسبة الراتب الصافي في الجزائر تقديرا مفصلا لما يتبقى من أجرك الإجمالي بالدينار الجزائري بعد تطبيق الاقتطاعات القانونية الأساسية: اشتراك الضمان الاجتماعي (SS بنسبة 9%) والضريبة على الدخل الإجمالي (IRG).',
        'يحتسب الضمان الاجتماعي بنسبة 9% من الأجر الإجمالي الخاضع للاقتطاع (الأجر القاعدي مضافا إليه العلاوات الخاضعة مثل الخبرة والمردودية)، وينتج عن خصمه المبلغ المرجعي للضريبة (Base IRG).',
        'تطبق الحاسبة على Base IRG سلم الشرائح الضريبية وفق التحديثات الأخيرة لقانون المالية في الجزائر، بما في ذلك الإعفاء التام للرواتب الخاضعة التي لا تتعدى 30,000 دج شهريا والتخفيض التدريجي للرواتب القريبة منها.',
        'ملاحظة مهمة: لا تشمل هذه المحاكاة التلقائية المنح العائلية أو التعويضات غير الخاضعة للضريبة واشتراك الضمان (مثل منحة النقل أو الإطعام)؛ لذلك قد يكون راتبك الفعلي أعلى بقليل في كشف الراتب الصادر عن مصلحة المستخدمين.'
      ],
      fr: [
        'Le calculateur de salaire net en Algérie estime précisément votre rémunération nette mensuelle à partir du brut soumis à cotisation, en détaillant la retenue de sécurité sociale (SS 9 %), la Base IRG et l\'impôt IRG.',
        'La cotisation salariale CNAS (9 %) s\'applique à l\'assiette cotisable (salaire de base augmenté des primes imposables et cotisables), dégageant ensuite la Base IRG nette imposable.',
        'L\'impôt sur le revenu global (IRG) est calculé selon les tranches actualisées de la loi de finances algérienne, intégrant l\'exonération totale des salaires imposables jusqu\'à 30 000 DZD par mois.',
        'À noter : les allocations familiales et indemnités exonérées (panier, transport) ne sont pas incluses par défaut dans l\'assiette imposable ; votre net perçu réel sur fiche de paie officielle peut donc être légèrement supérieur.'
      ],
    },
    formulaTitle: {
      ar: 'منهجية استخراج Base IRG واقتطاع الضمان الاجتماعي',
      fr: 'Méthode officielle CNAS 9 % et calcul de la Base IRG',
    },
    formulaText: {
      ar: 'اقتطاع الضمان (SS) = الأجر الخاضع × 9%. الراتب الخاضع للضريبة (Base IRG) = الأجر الخاضع − SS. الراتب الصافي = Base IRG − الضريبة IRG حسب الشرائح (إعفاء كلي <= 30,000 دج).',
      fr: 'Retenue SS = Brut cotisable × 9 %. Base IRG = Brut − Retenue SS. Net = Base IRG − IRG selon barème (exonéré jusqu\'à 30 000 DZD).',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي: حساب أجر إجمالي خاضع 50,000 دج',
        fr: 'Exemple concret pour un brut cotisable de 50 000 DZD',
      },
      scenario: {
        ar: 'موظف يدخل راتبا إجماليا خاضعا للاقتطاع قدره 50,000 دج دون احتساب تعويضات معفاة.',
        fr: 'Un salarié saisit un salaire brut cotisable de 50 000 DZD hors indemnités exonérées.',
      },
      result: {
        ar: 'يخصم 4,500 دج للضمان الاجتماعي (9%) لتصبح Base IRG تساوي 45,500 دج، ثم تقتطع الضريبة IRG وفق الشرائح ليظهر الصافي التقريبي بوضوح فورا.',
        fr: 'La retenue CNAS de 9 % (4 500 DZD) dégage une Base IRG de 45 500 DZD ; l\'IRG correspondant est alors déduit pour afficher aussitôt le net indicatif.',
      },
    },
    tips: {
      ar: [
        'ادخل مجموع الأجر القاعدي والعلاوات الخاضعة فقط، ولا تدرج منح النقل والإطعام والمنح العائلية المعفاة.',
        'اعتمد النتيجة كتقدير تعليمي ومقارن ولا تستبدل بها كشف الراتب الرسمي الصادر عن مصلحة المستخدمين.',
        'انقل صافي راتبك المتوقع مباشرة إلى حاسبة القروض أو أداة ميزانيتي الذكية للتخطيط الشهري.',
        'إذا كنت تحول رواتب أو عروض أتعاب لصكوك وفواتير، استعمل محول الأرقام إلى حروف بالدينار.',
      ],
      fr: [
        'Saisissez uniquement les éléments soumis à cotisation et impôt (hors panier, transport et allocations familiales).',
        'Utilisez cette estimation comme repère informatif et référez-vous au service RH pour votre fiche de paie officielle.',
        'Reportez le net estimé dans le simulateur de prêt ou le gestionnaire de budget pour planifier vos charges.',
        'Complétez avec le convertisseur chiffres en lettres lors de l\'établissement d\'ordres de virement ou chèques.',
      ],
    },
    extraFaqs: [],
  },

  'unit-converter': {
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة والمهندسون والفلاحون والمستخدمون اليوميون',
        fr: 'Étudiants, ingénieurs, agriculteurs et utilisateurs quotidiens',
      },
      processingTime: {
        ar: 'تحويل فوري بين أكثر من 10 فئات قياس مع النسخ المباشر',
        fr: 'Conversion instantanée sur 10+ catégories avec copie rapide',
      },
      fees: {
        ar: 'مجاني بالكامل ويعمل داخل المتصفح دون خوادم',
        fr: 'Totalement gratuit et 100 % local dans le navigateur',
      },
      channel: {
        ar: 'واجهة موحدة لتحويل الطول والوزن والمساحة والحجم والحرارة والبيانات',
        fr: 'Interface unifiée longueur, masse, surface, volume, température et données',
      },
      keyRequirement: {
        ar: 'اختيار فئة القياس، الوحدة الأصلية، والوحدة المطلوبة ثم إدخال القيمة',
        fr: 'Sélectionner la catégorie, l\'unité source/cible et saisir la valeur',
      },
    },
    explanation: {
      ar: [
        'يوفر محول وحدات القياس واجهة سريعة ودقيقة للتحويل الفوري بين أبرز الوحدات المستعملة في الدراسة والعمل والحياة اليومية دون الحاجة للبحث عن معاملات التحويل يدويا.',
        'تضم الأداة فئات شاملة تغطي الطول (متر، كيلومتر، بوصة، ميل)، الكتلة والوزن (غرام، كيلوغرام، قنطار، طن)، المساحة (متر مربع، آر، هكتار)، الحجم، الحرارة، السرعة، الطاقة، الضغط، الوقت، وحجم البيانات الرقمية.',
        'في كل فئة، ما عليك سوى اختيار الوحدة الأصلية والوحدة الهدف وإدخال القيمة لتظهر النتيجة فورا وجاهزة للنسخ في بحوثك الدراسية أو ملفاتك المهنية.',
        'ولضمان دقة الأعمال الفنية والعقارية، خصوصا عند التعامل مع مساحات الأراضي الفلاحية أو القيم الهندسية، تحقق دائما من تطابق الوحدتين المختارتين قبل نسخ الرقم النهائي.'
      ],
      fr: [
        'Le convertisseur d\'unités de mesure permet de basculer instantanément entre les principales unités utilisées dans les études, la technique, l\'immobilier et le quotidien sans erreur de calcul manuel.',
        'Les catégories disponibles couvrent la longueur, le poids/masse, la surface (dont l\'hectare, l\'are et le m²), le volume, la température, la vitesse, l\'énergie, la pression, le temps et le stockage numérique.',
        'Sélectionnez simplement la famille d\'unités, l\'unité de départ et l\'unité cible : le résultat converti s\'affiche immédiatement et peut être copié en un clic.',
        'Dans vos calculs techniques, scientifiques ou fonciers, veillez à toujours relire l\'unité affichée avant de reporter la valeur dans un document officiel.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ التحويل الخطي والتحويل الحراري',
      fr: 'Principe des facteurs métriques et formules thermiques',
    },
    formulaText: {
      ar: 'تعتمد معظم الفئات الضرب أو القسمة على معامل قياسي مقارنة بالوحدة المرجعية الدولية (SI)، بينما تستخدم الحرارة معادلة خطية خاصة: فهرنهايت = (مئوية × 9/5) + 32 وكلفن = مئوية + 273.15.',
      fr: 'La majorité des grandeurs appliquent un facteur d\'échelle sur l\'unité SI de base ; pour la température : °F = (°C × 9/5) + 32 et K = °C + 273,15.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تحويل المساحات الفلاحية (هكتار إلى متر مربع وآر)',
        fr: 'Exemple pratique : conversion foncière d\'hectares en ares et m²',
      },
      scenario: {
        ar: 'فلاح أو مهندس عقاري يريد معرفة ما يعادل 2.5 هكتار بالمتر المربع والآر قبل استخدام مخطط البستان.',
        fr: 'Un exploitant ou acquéreur souhaite convertir 2,5 hectares en ares et mètres carrés.',
      },
      result: {
        ar: 'يعادل 2.5 هكتار 250 آرا و25,000 متر مربع، مما يسهل إدخال الأبعاد مباشرة في أداة المساعد الفلاحي.',
        fr: '2,5 hectares correspondent exactement à 250 ares soit 25 000 m², valeur exploitable aussitôt dans l\'assistant agricole.',
      },
    },
    tips: {
      ar: [
        'تأكد دوما من اسم الوحدة المختارة قبل النسخ، خصوصا في الوحدات المتشابهة كالمتر والمتر المربع أو الميغابايت والميغابت.',
        'استعمل تحويل المساحات (هكتار، آر، متر مربع) قبل التخطيط الهندسي في المساعد الفلاحي.',
        'استكشف أيضا محول العملات عند تحويل الأسعار العالمية إلى الدينار الجزائري.',
        'يفيد تحويل وحدات الوقود والحرارة كثيرا عند مراجعة مواصفات السيارات والآلات المستوردة.',
      ],
      fr: [
        'Contrôlez bien les abréviations choisies avant copie (par ex. m vs m², MB vs Mb, kW vs ch).',
        'Utilisez la catégorie Surface (hectare/are/m²) en amont de l\'assistant agricole de plantation.',
        'Complétez avec le convertisseur de devises pour convertir vos tarifs internationaux en dinars.',
        'La catégorie Pression et Température facilite la lecture des fiches techniques automobiles ou industrielles.',
      ],
    },
    extraFaqs: [],
  },

  'budget-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة الجامعيون والمقيمون في الأحياء الجامعية أو السكن المستأجر بالجزائر',
        fr: 'Étudiants en cité universitaire ou en colocation/location en Algérie',
      },
      processingTime: {
        ar: 'تجميع فوري لإجمالي المصاريف الشهرية بالدينار الجزائري',
        fr: 'Cumul instantané des charges mensuelles en DZD',
      },
      fees: {
        ar: 'مجاني كليا داخل المتصفح دون تسجيل',
        fr: '100 % gratuit dans le navigateur sans compte',
      },
      channel: {
        ar: 'حاسبة ميزانية مخصصة لفئات السكن والطعام والنقل والدراسة',
        fr: 'Calculateur dédié aux postes logement, alimentation, transport et études',
      },
      keyRequirement: {
        ar: 'تقديراتك الشهرية المتوقعة لكل بند من بنود مصروف الطالب',
        fr: 'Vos estimations mensuelles pour chaque poste de dépense étudiante',
      },
    },
    explanation: {
      ar: [
        'صممت حاسبة ميزانية الطالب لمساعدة الطلبة الجامعيين وأولياء أمورهم في الجزائر على تكوين صورة واضحة لتكاليف الحياة الدراسية الشهرية بالدينار الجزائري قبل بداية الفصل أو السفر لولاية الدراسة.',
        'تجمع الأداة أهم أربعة محاور للإنفاق الطلابي: تكاليف السكن والإقامة (أو الكراء المشترك)، مصاريف التغذية والمطعم، تكاليف النقل والعودة للعائلة، ونفقات الدراسة من كتب ونسخ وإنترنت.',
        'بمجرد إدخال تقديراتك لكل فئة، يعرض ملخص المصاريف إجمالي الإنفاق الشهري، ما يمكنك من مقارنته مع المنحة الجامعية أو المساعدة العائلية.',
        'ولمتابعة العمليات اليومية الفعلية وتسجيل كل نفقة أو وضع سقوف إنفاق لكل شهر، يمكنك الانتقال مباشرة إلى أداة «ميزانيتي الذكية: تسيير الميزانية الشهرية».'
      ],
      fr: [
        'Le calculateur de budget étudiant aide les étudiants algériens et leurs familles à évaluer réalistement le coût mensuel de la vie universitaire en dinars algériens avant la rentrée ou un changement de wilaya.',
        'Il regroupe les quatre postes structurants d\'un budget étudiant : hébergement/loyer, alimentation, transport quotidien ou trajets inter-wilayas, et dépenses académiques (polycopiés, livres, internet).',
        'En additionnant immédiatement vos saisies dans le résumé des dépenses, il vous permet de confronter vos besoins réels à votre bourse ou soutien familial.',
        'Pour suivre ensuite vos dépenses jour après jour et définir des plafonds par catégorie avec sauvegarde locale, passez au gestionnaire « Mon Budget Intelligent ».'
      ],
    },
    formulaTitle: {
      ar: 'مجموع مصاريف الطالب وقاعدة التوازن الشهري',
      fr: 'Sommation des charges étudiantes et équilibre mensuel',
    },
    formulaText: {
      ar: 'إجمالي ميزانية الطالب = تكلفة السكن + مصروف الطعام + مصروف النقل + مصاريف الدراسة والإنترنت، مع استهداف هامش احتياطي يساوي 10% على الأقل للطوارئ.',
      fr: 'Total mensuel = Logement + Alimentation + Transport + Frais d\'études, en visant idéalement une réserve de sécurité d\'au moins 10 % pour les imprévus.',
    },
    practicalExample: {
      title: {
        ar: 'مثال ميزانية طالب جامعي مقيم خارج ولايته',
        fr: 'Exemple de budget mensuel d\'un étudiant hors wilaya',
      },
      scenario: {
        ar: 'طالب يقدر مصاريفه الشهرية بـ 4,000 دج للسكن واللوازم، 12,000 دج للطعام، 3,500 دج للنقل، و3,000 دج للدراسة والإنترنت.',
        fr: 'Un étudiant prévoit 4 000 DZD de frais d\'hébergement, 12 000 DZD d\'alimentation, 3 500 DZD de transport et 3 000 DZD de fournitures/internet.',
      },
      result: {
        ar: 'يبلغ إجمالي المصروف الشهري المتوقع 22,500 دج، ما يوضح فورا الحاجة لتغطية هذا المبلغ وتخصيص هامش احتياطي للامتحانات والمطبوعات.',
        fr: 'Le budget mensuel s\'établit à 22 500 DZD, permettant d\'ajuster sereinement ses postes de dépense dès le début du semestre.',
      },
    },
    tips: {
      ar: [
        'ادخل تكاليف الكراء والكهرباء والماء إن كنت تقيم في شقة مشتركة خارج الإقامة الجامعية.',
        'احسب تكلفة رحلات العودة الأسبوعية أو الشهرية بين ولاية الدراسة وولاية الإقامة في بند النقل.',
        'خصص هامشا إضافيا للطباعة ومذكرات التخرج خلال شهري ماي وجوان.',
        'استعمل مخطط الوجبات وقائمة المشتريات لتقليل هدر مصروف الطعام الأسبوعي.',
      ],
      fr: [
        'Incluez votre quote-part de charges (eau, électricité, internet) si vous êtes en colocation privée.',
        'N\'oubliez pas d\'intégrer vos allers-retours réguliers en bus ou train SNTF dans le poste transport.',
        'Prévoyez un surplus ponctuel en fin de semestre pour l\'impression des mémoires et polycopiés.',
        'Associez ce budget au planificateur de repas pour optimiser vos courses alimentaires hebdomadaires.',
      ],
    },
    extraFaqs: [],
  },

  'budget-manager': {
    quickSummary: {
      targetAudience: {
        ar: 'الأسر والموظفون وأصحاب المشاريع لتسيير المداخيل والمصاريف الشهرية',
        fr: 'Ménages, salariés et indépendants gérant leurs revenus et dépenses mensuels',
      },
      processingTime: {
        ar: 'متابعة لحظية للرصيد وسقوف الفئات مع محاكاة الادخار',
        fr: 'Suivi en direct du solde, des plafonds et simulation d\'épargne',
      },
      fees: {
        ar: 'مجاني بالكامل دون حساب بنكي أو تسجيل',
        fr: 'Gratuit à 100 % sans connexion bancaire ni inscription',
      },
      channel: {
        ar: 'تخزين محلي في المتصفح مع تنزيل نسخة احتياطية',
        fr: 'Stockage local sécurisé dans le navigateur avec export de sauvegarde',
      },
      keyRequirement: {
        ar: 'تحديد الدخل الشهري وسقوف المصاريف ثم تسجيل العمليات اليومية',
        fr: 'Définir revenus et plafonds puis saisir chaque opération financière',
      },
    },
    explanation: {
      ar: [
        'تمكنك أداة «ميزانيتي الذكية: تسيير الميزانية الشهرية» من ضبط راتبك ومداخيلك الشهرية بالدينار الجزائري وتوزيعها بوضوح على سقوف المصاريف والادخار ومخصص الطوارئ.',
        'من خلال تحديد سقف الإنفاق لكل فئة وتسجيل كل عملية مالية بتاريخها وبيانها وفئتها ونوعها (دخل أو مصروف)، تراقب فورا ما تبقى من ميزانيتك وتتجنب استنزاف الراتب قبل نهاية الشهر.',
        'توفر الأداة كذلك محاكيا للادخار يساعدك على تقدير الفائض الممكن ادخاره شهريا وسنويا (علما أن المحاكي يعتمد حسابا تقديريا لا يتضمن فوائد أو عوائد استثمارية).',
        'حرصا على خصوصية بياناتك المالية، تحفظ الميزانية بالكامل داخل متصفح هذا الجهاز فقط ولا ترسل لأي خادم، مع توفر ميزة تنزيل نسخة احتياطية للاحتفاظ بسجلاتك بأمان.'
      ],
      fr: [
        '« Mon Budget Intelligent » vous aide à piloter concrètement votre salaire et vos revenus mensuels en dinars algériens en répartissant vos ressources entre dépenses courantes, épargne et fonds d\'urgence.',
        'En fixant des plafonds mensuels par catégorie et en enregistrant chaque opération (date, libellé, catégorie, type et montant), vous visualisez instantanément le solde disponible restant.',
        'Le simulateur d\'épargne intégré projette l\'accumulation potentielle sur plusieurs mois (calcul indicatif brut n\'incluant pas d\'intérêts ou de rendements financiers).',
        'Pour protéger votre vie privée, toutes vos écritures restent enregistrées localement dans votre navigateur ; utilisez l\'export de sauvegarde pour conserver une copie sur votre appareil.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة الرصيد الشهري ومراقبة سقوف الفئات',
      fr: 'Équilibre mensuel, plafonds par catégorie et épargne',
    },
    formulaText: {
      ar: 'الرصيد المتاح = إجمالي المداخيل المسجلة − إجمالي المصاريف المسجلة. نسبة استهلاك الفئة = (مصروفات الفئة ÷ السقف المخطط لها) × 100.',
      fr: 'Solde disponible = Total revenus enregistrés − Total dépenses enregistrées. Taux d\'usage = (Dépenses catégorie ÷ Plafond fixé) × 100.',
    },
    practicalExample: {
      title: {
        ar: 'مثال لضبط ميزانية أسرة بدخل 80,000 دج شهريا',
        fr: 'Exemple de répartition mensuelle sur un revenu de 80 000 DZD',
      },
      scenario: {
        ar: 'أسرة تحدد سقوفا بـ 35,000 دج للغذاء والفواتير، 15,000 دج للسكن والنقل، 15,000 دج للمصاريف المتغيرة، و15,000 دج للادخار والطوارئ.',
        fr: 'Un ménage fixe des plafonds de 35 000 DZD (alimentation/factures), 15 000 DZD (logement/transport), 15 000 DZD (divers) et 15 000 DZD d\'épargne.',
      },
      result: {
        ar: 'مع تسجيل كل مصروف في الجدول الشهري، يظهر السقف المتبقي لكل فئة فورا وتنبهك الأداة عند الاقتراب من تجاوز المخصص.',
        fr: 'À mesure que les achats sont saisis dans le registre mensuel, l\'écart restant sur chaque enveloppe se met à jour instantanément.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'بنية جدول تسجيل العمليات المالية داخل ميزانيتي الذكية',
        fr: 'Structure du journal des opérations mensuelles',
      },
      headers: [
        { ar: 'الحقل', fr: 'Colonne' },
        { ar: 'الوصف العملي', fr: 'Rôle dans le suivi' },
        { ar: 'مثال تطبيقي', fr: 'Exemple' },
      ],
      rows: [
        [
          { ar: 'التاريخ', fr: 'Date' },
          { ar: 'يوم تسجيل العملية خلال الشهر المحدد', fr: 'Jour de l\'opération sur le mois sélectionné' },
          { ar: '2026-11-05', fr: '2026-11-05' },
        ],
        [
          { ar: 'البيان', fr: 'Libellé' },
          { ar: 'وصف قصير لسبب الإنفاق أو مصدر الدخل', fr: 'Description claire de l\'écriture' },
          { ar: 'فاتورة الكهرباء سونلغاز', fr: 'Facture Sonelgaz / Courses' },
        ],
        [
          { ar: 'الفئة والنوع', fr: 'Catégorie & Type' },
          { ar: 'ربط العملية بالسقف (دخل / مصروف)', fr: 'Affectation au plafond (Revenu / Dépense)' },
          { ar: 'فواتير وطاقة (مصروف)', fr: 'Énergie & Charges (Dépense)' },
        ],
        [
          { ar: 'المبلغ والإجراء', fr: 'Montant & Action' },
          { ar: 'القيمة بالدينار مع خيار الحذف الفوري', fr: 'Montant en DZD avec suppression possible' },
          { ar: '4,850 د.ج', fr: '4 850 DZD' },
        ],
      ],
    },
    tips: {
      ar: [
        'نزل نسخة احتياطية من ملف بياناتك شهريا أو قبل تنظيف ذاكرة المتصفح المؤقتة.',
        'اربط نتائج حاسبة الراتب الصافي وحاسبة مصاريف السيارة وفاتورة سونلغاز كمدخلات رئيسية هنا.',
        'ابدأ بضبط سقوف واقعية لأكبر ثلاث فئات استهلاك (الغذاء، الفواتير، النقل) خلال الشهر الأول.',
        'اعتبر مخصص الطوارئ بندا ثابتا في بداية الشهر وليس ما يتبقى في نهايته.',
      ],
      fr: [
        'Téléchargez régulièrement une sauvegarde locale avant tout nettoyage de cache navigateur.',
        'Alimentez vos plafonds à l\'aide des estimations du calculateur salaire net, voiture et Sonelgaz.',
        'Ajustez vos plafonds réalistes sur vos 3 plus gros postes dès le premier mois d\'observation.',
        'Considérez la réserve d\'épargne comme une enveloppe prioritaire dès réception du salaire.',
      ],
    },
    extraFaqs: [],
  },

  'farm-planner': {
    quickSummary: {
      targetAudience: {
        ar: 'الفلاحون والمستثمرون الزراعيون وملاك البساتين في الجزائر',
        fr: 'Agriculteurs, arboriculteurs et porteurs de projets agricoles en Algérie',
      },
      processingTime: {
        ar: 'تقدير فوري لعدد الشتلات وتدفق الري وميزانية البستان',
        fr: 'Calcul instantané du nombre d\'arbres, débit d\'irrigation et budget',
      },
      fees: {
        ar: 'مجاني بالكامل مع حفظ محلي وتصدير JSON وطباعة PDF',
        fr: 'Gratuit avec stockage local, export JSON et impression PDF',
      },
      channel: {
        ar: 'أداة تخطيط هندسية ودفتر أعمال فلاحية داخل المتصفح',
        fr: 'Outil de planification et carnet d\'exploitation dans le navigateur',
      },
      keyRequirement: {
        ar: 'أبعاد القطعة الأرضية، مسافات الغرس، معطيات المنقطات، والأسعار اليدوية بالدينار',
        fr: 'Dimensions de la parcelle, espacements choisis, débits goutteurs et prix saisis en DZD',
      },
    },
    explanation: {
      ar: [
        'يجمع المساعد الفلاحي ومخطط غرس الأشجار في واجهة واحدة حساب توزيع الأشجار (مثل مخطط غرس الزيتون وغيره) حسب أبعاد الأرض المستطيلة المسطحة والمسافات المختارة بين الصفوف والأشجار، مع إتاحة حفظ المخطط بصيغة PDF عبر خيار الطباعة في المتصفح.',
        'توضح الأداة أن القيم المبدئية لمسافات الغرس وتدفق الري بالتنقيط ليست توصيات زراعية ملزمة لأي صنف؛ بل أمثلة هندسية وحسابية يجب ضبطها وفق نوع الأشجار، طبيعة التربة، وميلان الأرض الفعلي واستشارة المهندس الفلاحي عند الحاجة.',
        'يتضمن المساعد كذلك حاسبة لتدفق وحجم مياه الري بالتنقيط استنادا إلى عدد المنقطات وتدفق كل منقط وساعات التشغيل المختارة، إضافة إلى حاسبة لميزانية إنشاء البستان حيث تدخل كافة الأسعار يدويا بالدينار الجزائري دون افتراض أسعار جاهزة.',
        'ولمتابعة الموسم الفلاحي بدقة، يوفر المخطط دفتر متابعة لتسجيل أعمال الغرس والري والتقليم والتسميد، مع حفظ البيانات في متصفحك فقط وإمكانية تصدير نسخة احتياطية بصيغة JSON.'
      ],
      fr: [
        'L\'assistant agricole permet de modéliser l\'implantation d\'un verger (olivier, agrumes, pommier, palmier) sur une parcelle rectangulaire plane à partir des longueurs et espacements saisis, avec exportation imprimable en PDF depuis le navigateur.',
        'Les valeurs préremplies d\'espacement et d\'irrigation sont fournies exclusivement à titre d\'exemples géométriques et arithmétiques : il vous appartient de les adapter selon votre variété, le relief réel et les avis agronomiques.',
        'L\'outil intègre aussi un calculateur de volume et débit d\'arrosage goutte-à-goutte (nombre de goutteurs × débit × heures d\'arrosage) ainsi qu\'un budget de création de verger entièrement renseigné manuellement en dinars algériens.',
        'Enfin, un journal de suivi agricole enregistre vos opérations de plantation, taille, fertilisation et irrigation localement dans le navigateur avec option de sauvegarde JSON.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة كثافة الغرس وحجم الري بالتنقيط',
      fr: 'Formules de densité de plantation et volume d\'irrigation',
    },
    formulaText: {
      ar: 'عدد الصفوف ≈ [(الطول − الهامش) ÷ المسافة بين الصفوف] + 1، وعدد الأشجار ≈ عدد الصفوف × عدد الأشجار في الصف. حجم المياه (لتر/سقي) = عدد المنقطات × تدفق المنقط (لتر/ساعة) × ساعات التشغيل.',
      fr: 'Nombre de plants ≈ Rangées × Arbres par rang selon les espacements saisis. Volume d\'eau (L) = Nombre de goutteurs × Débit unitaire (L/h) × Heures de fonctionnement.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تخطيط بستان زيتون على قطعة مسطحة بمساحة 100 م × 100 م (هكتار)',
        fr: 'Exemple sur 1 hectare (100 m × 100 m) pour plantation d\'oliviers',
      },
      scenario: {
        ar: 'تطبيق مسافات 7 م × 7 م مع احتساب حاجة الري عبر منقطين لكل شجرة بتدفق 4 لتر/ساعة لمدة ساعتين.',
        fr: 'Application d\'un espacement 7 m × 7 m avec 2 goutteurs de 4 L/h par arbre durant 2 heures d\'arrosage.',
      },
      result: {
        ar: 'تستوعب القطعة حوالي 196 إلى 204 شتلات حسب الهوامش الحدودية، ويبلغ التدفق التقديري للري قرابة 1,600 لتر/ساعة (3.2 متر مكعب خلال الساعتين) مع إمكانية تقدير كلفة البستان يدويا.',
        fr: 'La parcelle accueille environ 196 à 204 arbres selon les bordures, pour un débit d\'environ 1 600 L/h (3,2 m³ sur 2 heures), chiffrable aussitôt dans le budget en DZD.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'أقسام المتابعة داخل دفتر الأعمال الفلاحية',
        fr: 'Rubriques du carnet d’exploitation agricole local',
      },
      headers: [
        { ar: 'العمود', fr: 'Champ' },
        { ar: 'المحتوى المسجل', fr: 'Information suivie' },
        { ar: 'مثال عملي', fr: 'Exemple' },
      ],
      rows: [
        [
          { ar: 'التاريخ', fr: 'Date' },
          { ar: 'تاريخ تنفيذ النشاط الميداني', fr: 'Date de l\'intervention sur parcelle' },
          { ar: '2026-11-12', fr: '2026-11-12' },
        ],
        [
          { ar: 'العمل الفلاحي', fr: 'Opération' },
          { ar: 'الغرس، الري، التقليم، التسميد، أو المعالجة', fr: 'Plantation, irrigation, taille, fertilisation' },
          { ar: 'تقليم تكويني وتسميد عضوي', fr: 'Taille de formation et apport organique' },
        ],
        [
          { ar: 'ملاحظات وإجراء', fr: 'Notes & Action' },
          { ar: 'الكميات المستعملة، الأعطال، أو الحذف والتصدير JSON', fr: 'Quantités appliquées, observations et export JSON' },
          { ar: 'تعديل منقطات القطاع ب', fr: 'Remplacement de 4 goutteurs secteur B' },
        ],
      ],
    },
    tips: {
      ar: [
        'حول أبعاد أرضك بالهكتار إلى أمتار مربعة عبر محول وحدات القياس قبل ضبط طول وعرض القطعة.',
        'احفظ نسخة PDF لمخطط الغرس عبر أمر «طباعة / حفظ PDF» في متصفحك قبل العمل الميداني.',
        'صدّر ملف JSON لجدول الأعمال الفلاحية بانتظام لحماية سجلك من المسح عند تغيير الجهاز.',
        'استشر مرشدا فلاحيا لتحديد مسافات الغرس وتدفق الري المناسبين لتربة منطقتك ومناخها.',
      ],
      fr: [
        'Convertissez d\'abord votre surface en mètres via le convertisseur d\'unités si vous ne disposez que des hectares.',
        'Exportez le schéma visuel via la fonction « Imprimer / Enregistrer en PDF » avant de démarrer sur terrain.',
        'Effectuez des exports JSON périodiques de votre carnet d\'exploitation agricole pour éviter toute perte.',
        'Validez toujours vos choix de densité et d\'arrosage auprès d\'un conseiller agricole selon le climat local.',
      ],
    },
    extraFaqs: [],
  },
};
