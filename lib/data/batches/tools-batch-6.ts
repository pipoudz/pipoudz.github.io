import { ToolItem, ToolRichGuide } from '@/lib/types';

export const batch6Tools: ToolItem[] = [
  {
    id: 'tool-hijri',
    slug: 'hijri-calendar',
    category: 'islamic',
    isPopular: true,
    name: {
      ar: 'الرزنامة الهجرية والميلادية وجدول العطل الرسمية في الجزائر',
      fr: 'Calendrier Hégirien / Grégorien & Jours Fériés en Algérie',
    },
    description: {
      ar: 'حول التاريخ بين الهجري والميلادي اعتمادا على تقويم أم القرى، وتصفح أيام الشهر وبطاقة التاريخ الإسلامية، مع جدول العطل الدينية والوطنية الرسمية في الجزائر.',
      fr: 'Convertissez instantanément toute date entre calendrier grégorien et hégirien (Umm al-Qura), consultez le calendrier mensuel et retrouvez les jours fériés officiels algériens.',
    },
    iconName: 'Moon',
    faqs: [
      {
        question: {
          ar: 'لماذا قد يختلف التاريخ الهجري في المحول بيوم واحد عن الإعلان الرسمي في الجزائر؟',
          fr: 'Pourquoi la date hégirienne convertie peut-elle différer d’un jour de l’annonce officielle ?',
        },
        answer: {
          ar: 'يعتمد المحول على تقويم أم القرى الفلكي المدمج في المتصفح، بينما تثبت بداية الشهور القمرية مثل رمضان والعيدين في الجزائر وفق الإعلان الرسمي للجنة الوطنية للأهلة بعد الرؤية الشرعية.',
          fr: 'Le convertisseur utilise le calcul astronomique Umm al-Qura du navigateur, alors que les débuts de mois lunaires en Algérie dépendent de l’observation officielle annoncée par la commission nationale.',
        },
      },
      {
        question: {
          ar: 'هل يمكن حفظ بطاقة التاريخ الإسلامية أو مشاركتها مباشرة؟',
          fr: 'Puis-je enregistrer ou partager une carte de date islamique ?',
        },
        answer: {
          ar: 'نعم، تتيح الأداة استعراض التاريخين الهجري والميلادي ونسخهما أو إنشاء بطاقة صورة أنيقة قابلة للتنزيل أو المشاركة عبر الجهاز.',
          fr: 'Oui, vous pouvez copier les deux dates correspondantes ou générer une carte visuelle téléchargeable et partageable directement depuis votre navigateur.',
        },
      },
      {
        question: {
          ar: 'هل يشمل الدليل جدول الأعياد الرسمية الوطنية والدينية في الجزائر؟',
          fr: 'La page inclut-elle les jours fériés légaux en Algérie ?',
        },
        answer: {
          ar: 'نعم، تتضمن الأداة جدولا مرجعيا واضحا للعطل الرسمية في الجزائر مثل يناير، عيد العمال، عيد الاستقلال، أول نوفمبر، والمناسبات الدينية كعيد الفطر وعيد الأضحى ومحرم وعاشوراء والمولد النبوي.',
          fr: 'Oui, un tableau récapitulatif rassemble les fêtes nationales (Yennayer, 1er Mai, 5 Juillet, 1er Novembre) et religieuses (Aïd El Fitr, Aïd El Adha, Moharram, Achoura, Mawlid).',
        },
      },
    ],
  },
  {
    id: 'tool-qibla',
    slug: 'qibla-compass',
    category: 'islamic',
    isPopular: true,
    name: {
      ar: 'بوصلة القبلة وتحديد الشمال (لولايات الجزائر الـ 58)',
      fr: 'Boussole Qibla & Direction du Nord (58 Wilayas d’Algérie)',
    },
    description: {
      ar: 'حدد اتجاه القبلة انطلاقا من موقعك الجغرافي أو باختيار أي ولاية من ولايات الجزائر الـ 58، مع عرض زاوية القبلة من الشمال الحقيقي وعمل الحساب الرقمي حتى دون مستشعر البوصلة.',
      fr: 'Déterminez la direction et l’azimut exact de la Qibla depuis le Nord vrai par géolocalisation ou par sélection parmi les 58 wilayas d’Algérie, avec ou sans capteur magnétique.',
    },
    iconName: 'Compass',
    faqs: [
      {
        question: {
          ar: 'هل تحفظ الأداة إحداثيات موقعي الجغرافي أو ترسلها إلى خادم خارجي؟',
          fr: 'Mes coordonnées GPS sont-elles enregistrées ou envoyées vers un serveur ?',
        },
        answer: {
          ar: 'لا إطلاقا؛ تجري عملية حساب زاوية القبلة انطلاقا من الإحداثيات أو الولاية المختارة محليا داخل متصفحك فقط، دون حفظ موقعك أو إرساله لأي خادم.',
          fr: 'Jamais ; le calcul trigonométrique de l’azimut vers La Mecque s’effectue exclusivement en local dans votre navigateur sans aucune conservation ni transmission GPS.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا لم يدعم هاتفي أو الحاسوب مستشعر البوصلة التفاعلية؟',
          fr: 'Comment utiliser l’outil si mon appareil ne possède pas de capteur magnétique ?',
        },
        answer: {
          ar: 'تستطيع الاعتماد على زاوية القبلة الرقمية المحسوبة من الشمال الحقيقي للولاية أو المدينة المختارة وتطبيقها باستخدام بوصلة يدوية موثوقة أو خريطة موجهة للشمال.',
          fr: 'Le calcul numérique de l’azimut depuis le Nord géographique vrai reste disponible sans capteur : reportez simplement l’angle affiché sur une boussole classique ou une carte orientée au Nord.',
        },
      },
      {
        question: {
          ar: 'لماذا قد تنحرف قراءة البوصلة الهاتفية عن الشمال الحقيقي أحيانا؟',
          fr: 'Pourquoi l’aiguille du téléphone peut-elle manquer de précision par moments ?',
        },
        answer: {
          ar: 'تتأثر البوصلة المغناطيسية بالمعادن الكبيرة، السماعات، وأغلفة الهواتف المغناطيسية، كما يوجد فرق طبيعي بين الشمال المغناطيسي والشمال الحقيقي الذي تحسب منه الزاوية.',
          fr: 'Les capteurs magnétiques sont sensibles aux aimants, enceintes, structures métalliques et coques aimantées ; éloignez l’appareil et tenez compte de la déclinaison par rapport au Nord géographique.',
        },
      },
    ],
  },
  {
    id: 'tool-admin-assistant',
    slug: 'admin-procedures-assistant',
    category: 'productivity',
    name: {
      ar: 'مساعد الوثائق والإجراءات الإدارية في الجزائر',
      fr: 'Assistant Interactif des Dossiers & Démarches Administratives',
    },
    description: {
      ar: 'حدد الإجراء الإداري المطلوب لتتعرف على الوثائق والخطوات والجهة المختصة والرسوم المعمول بها في الجزائر، مع إنشاء قائمة تحقق قابلة للحفظ والطباعة وربطها بمراجع وزارة الداخلية.',
      fr: 'Sélectionnez une démarche administrative en Algérie pour afficher les pièces requises, étapes, délais, frais de timbre et lien officiel du Ministère de l’Intérieur avec liste imprimable.',
    },
    iconName: 'FileCheck',
    references: [
      {
        label: {
          ar: 'المرجع العام للإجراءات الإدارية بوزارة الداخلية',
          fr: 'Référentiel Officiel des Procédures — Ministère de l’Intérieur',
        },
        url: 'https://interieur.gov.dz/category/الإجراءات-الإدارية/',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الوثائق والإجراءات التي يغطيها مساعد الإجراءات الإدارية؟',
          fr: 'Quelles démarches administratives l’assistant couvre-t-il ?',
        },
        answer: {
          ar: 'يغطي أبرز الملفات اليومية في الجزائر مثل جواز السفر البيومتري، بطاقة التعريف الوطنية البيومترية، شهادة الإقامة، البطاقة الرمادية، ورخصة السياقة وغيرها مع تفاصيل الجهة المختصة.',
          fr: 'Il couvre les formalités courantes : passeport biométrique, carte nationale d’identité, certificat de résidence, carte grise et permis de conduire avec l’autorité compétente.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني حفظ قائمة الوثائق المطلوبة أو طباعتها قبل التوجه للإدارة؟',
          fr: 'Puis-je sauvegarder ou imprimer la liste de contrôle avant de me déplacer ?',
        },
        answer: {
          ar: 'نعم، تتيح الأداة التأشير على الوثائق الجاهزة وحفظ التقدم في متصفحك أو طباعة قائمة التحقق مباشرة لتجنب نسيان أي وثيقة عند شباك البلدية أو الدائرة.',
          fr: 'Oui, vous pouvez cocher chaque pièce préparée localement et imprimer votre checklist avant de vous présenter au guichet communal ou de daïra.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من أي تحديث جديد على الرسوم أو شروط الملف الإداري؟',
          fr: 'Comment vérifier une éventuelle mise à jour réglementaire des pièces ou timbres ?',
        },
        answer: {
          ar: 'اربط دائما قائمة التحقق بالمرجع الرسمي للإجراءات الإدارية في موقع وزارة الداخلية والجماعات المحلية المرفق في هذه الصفحة أو استعلم لدى مصالح البلدية المختصة.',
          fr: 'Consultez systématiquement le portail officiel des procédures du Ministère de l’Intérieur lié sur cette page ou le service concerné avant le dépôt final.',
        },
      },
    ],
  },
  {
    id: 'tool-arabic-dict',
    slug: 'arabic-dictionary',
    category: 'productivity',
    name: {
      ar: 'القاموس العربي للمعاني والجذور والمرادفات والأضداد',
      fr: 'Dictionnaire Arabe Interactif : Sens, Racines, Synonymes & Terminologie',
    },
    description: {
      ar: 'ابحث عن معاني الكلمات العربية وجذورها ومرادفاتها وأضدادها، وتصفح المفردات والمصطلحات الإدارية والقانونية مع ميزة المفضلة واختبار المفردات الفوري.',
      fr: 'Recherchez la définition, la racine, les synonymes et antonymes de mots arabes ainsi que la terminologie administrative et juridique courante, avec favoris et quiz intégré.',
    },
    iconName: 'BookOpen',
    faqs: [
      {
        question: {
          ar: 'ما الميزات اللغوية المتوفرة داخل القاموس العربي التفاعلي؟',
          fr: 'Quelles informations linguistiques propose le dictionnaire ?',
        },
        answer: {
          ar: 'يوفر البحث الفوري عن المعنى، الجذر اللغوي، المرادفات والأضداد عند توفرها في المدخلات، إلى جانب تصفح الكلمات حسب الحرف وحفظ قائمة كلماتك المفضلة.',
          fr: 'Il affiche la définition claire, la racine trilitère, les synonymes ou antonymes disponibles, le classement alphabétique, l’historique récent et une liste de favoris.',
        },
      },
      {
        question: {
          ar: 'كيف أستخدم خاصية اختبار المفردات لتقوية الرصيد اللغوي؟',
          fr: 'Comment fonctionne le mode d’entraînement du vocabulaire ?',
        },
        answer: {
          ar: 'يقدم قسم اختبار المفردات تدريبا تفاعليا لاختيار المعنى الأدق للكلمات المخزنة في قاعدة القاموس المحلية مما يعزز الحفظ والتمييز السياقي للطلبة والباحثين.',
          fr: 'Le quiz interactif interroge vos connaissances sur les définitions des entrées présentes en base locale pour renforcer la mémorisation et la précision rédactionnelle.',
        },
      },
      {
        question: {
          ar: 'هل يعمل القاموس دون إنترنت مع الحفاظ على المفضلة؟',
          fr: 'Le dictionnaire et mes mots favoris fonctionnent-ils en local ?',
        },
        answer: {
          ar: 'نعم، تتوفر قاعدة المفردات داخل المتصفح وتحفظ كلماتك المفضلة وآخر الكلمات المبحوث عنها محليا في جهازك.',
          fr: 'Oui, l’index lexical s’exécute directement dans votre navigateur et vos favoris sont conservés localement sur votre appareil.',
        },
      },
    ],
  },
  {
    id: 'tool-cv',
    slug: 'cv-builder',
    category: 'productivity',
    name: {
      ar: 'مولد السيرة الذاتية الاحترافية (CV) والطباعة PDF',
      fr: 'Créateur de CV Professionnel Bilingue & Export PDF',
    },
    description: {
      ar: 'أنشئ سيرة ذاتية منظمة للتقديم إلى الوظائف والمناقصات والمسابقات، وأدخل الملف الشخصي والخبرات والتكوين والمهارات واللغات ثم اطبعها أو احفظها PDF مجانا دون تسجيل.',
      fr: 'Rédigez et mettez en forme un CV structuré (profil, expériences, diplômes, compétences, langues) puis imprimez-le ou enregistrez-le au format PDF gratuitement sans compte.',
    },
    iconName: 'UserCheck',
    faqs: [
      {
        question: {
          ar: 'كيف أحفظ السيرة الذاتية بصيغة PDF بعد إتمام تعبئة الحقول؟',
          fr: 'Comment exporter mon CV au format PDF une fois rempli ?',
        },
        answer: {
          ar: 'بعد معاينة التنسيق النهائي، اضغط على زر الطباعة واختر "حفظ بصيغة PDF" (Save as PDF) من نافذة الطباعة في المتصفح مع ضبط الهوامش على الافتراضي.',
          fr: 'Cliquez sur le bouton d’impression après vérification de l’aperçu et sélectionnez « Enregistrer au format PDF » comme destination dans votre navigateur.',
        },
      },
      {
        question: {
          ar: 'هل تحفظ بياناتي الشخصية وسيرتي الذاتية على خوادم الموقع؟',
          fr: 'Mes données personnelles et expériences professionnelles sont-elles envoyées en ligne ?',
        },
        answer: {
          ar: 'لا إطلاقا؛ كافة حقول السيرة الذاتية تعالج في متصفحك فقط ولا تغادر جهازك، ويمكنك التعديل المباشر والطباعة فورا في سرية كاملة.',
          fr: 'Non ; l’édition et la mise en page s’opèrent à 100 % côté client sans aucun envoi ni conservation de vos coordonnées sur un serveur.',
        },
      },
      {
        question: {
          ar: 'هل يدعم القالب إبراز اللغات المعتمدة في سوق العمل الجزائري؟',
          fr: 'Le modèle met-il en valeur les langues usuelles sur le marché algérien ?',
        },
        answer: {
          ar: 'نعم، يدعم قسم المهارات واللغات تدوين المستويات بوضوح (العربية، الأمازيغية، الفرنسية، الإنجليزية وغيرها) مع الخبرات والشهادات الجامعية والتكوين المهني.',
          fr: 'Oui, vous pouvez préciser librement vos niveaux linguistiques (arabe, tamazight, français, anglais) ainsi que vos diplômes universitaires et formations.',
        },
      },
    ],
  },
  {
    id: 'tool-img-comp',
    slug: 'image-compressor',
    category: 'productivity',
    name: {
      ar: 'أداة ضغط وتقليص حجم الصور للوثائق والمنصات (JPG / PNG / WEBP)',
      fr: 'Compresseur d’Images & Scans Locaux (JPG / PNG / WEBP)',
    },
    description: {
      ar: 'قلص حجم صور JPG وPNG وWEBP مباشرة في المتصفح مع ضبط الجودة والأبعاد والمقارنة الفورية بنسبة التوفير، لتسهيل رفع ملفات الوثائق والصور الشمسية دون إرسالها لأي خادم.',
      fr: 'Réduisez le poids de vos photos et documents numérisés (JPG, PNG, WEBP) localement via Canvas avec réglage de qualité et aperçu des gains de taille sans téléversement serveur.',
    },
    iconName: 'Image',
    faqs: [
      {
        question: {
          ar: 'هل يتم رفع صوري أو نسخ بطاقاتي الإدارية إلى خادم خارجي عند الضغط؟',
          fr: 'Mes photos ou scans de pièces d’identité sont-ils envoyés sur un serveur ?',
        },
        answer: {
          ar: 'لا نهائيا؛ تتم جميع عمليات الضغط وإعادة التحجيم محليا داخل متصفحك (Client-Side)، مما يحفظ خصوصية مستنداتك الشخصية ويوفر استهلاك باقة الإنترنت.',
          fr: 'Jamais ; toute la compression s’effectue dans votre navigateur sans téléversement externe, protégeant la confidentialité de vos scans administratifs.',
        },
      },
      {
        question: {
          ar: 'ما نسبة الجودة المناسبة لضغط ملفات المنصات الرقمية في الجزائر؟',
          fr: 'Quel niveau de qualité choisir pour les portails administratifs algériens ?',
        },
        answer: {
          ar: 'تعد نسبة 80% خيارا متوازنا للغاية بين وضوح النص في الشهادات والبطاقات وبين تقليص حجم الملف ليكون أقل من عتبة 1 ميغابايت أو 2 ميغابايت التي تشترطها معظم المنصات.',
          fr: 'Un réglage autour de 80 % offre un excellent compromis entre lisibilité des cachets/textes et poids réduit sous les plafonds de 1 Mo ou 2 Mo exigés en ligne.',
        },
      },
      {
        question: {
          ar: 'هل يمكن مقارنة الحجم قبل وبعد الضغط قبل تنزيل الصورة؟',
          fr: 'Puis-je vérifier la taille finale et le taux de compression avant téléchargement ?',
        },
        answer: {
          ar: 'نعم، تعرض الأداة الحجم الأصلي والحجم بعد الضغط ونسبة التوفير المئوية فورا قبل النقر على زر التنزيل.',
          fr: 'Oui, l’interface affiche immédiatement le poids initial, le poids optimisé et le pourcentage économisé avant de télécharger le fichier.',
        },
      },
    ],
  },
  {
    id: 'tool-inventory',
    slug: 'inventory-manager',
    category: 'productivity',
    name: {
      ar: 'مسير المخزون والمشتريات والمبيعات وحاسبة الأرباح',
      fr: 'Gestionnaire de Stock, Mouvements & Marges Commerciales',
    },
    description: {
      ar: 'سجل منتجات محلك وأسعار الشراء والبيع والكميات، وتابع حركات الدخول والخروج والتنبيهات عند حد النقص واحسب صافي الربح مع حفظ وتصدير JSON محليا دون اشتراك.',
      fr: 'Enregistrez vos articles, suivez achats et ventes avec coût moyen pondéré, alertes de rupture de stock et calcul de marge brute, sauvegardés localement avec export JSON.',
    },
    iconName: 'Package',
    faqs: [
      {
        question: {
          ar: 'هل يعمل مسير المخزون بدون إنترنت وخادم خارجي؟',
          fr: 'Le gestionnaire de stock fonctionne-t-il sans serveur ni abonnement ?',
        },
        answer: {
          ar: 'نعم، جميع العمليات الحسابية وتسجيل الحركات تعمل محليا داخل المتصفح، ولا يلزم الاتصال إلا عند تحميل الصفحة أول مرة إذا لم تكن مخزنة مسبقا في ذاكرة المتصفح.',
          fr: 'Oui, tous les calculs et journaux de mouvements s’exécutent localement dans votre navigateur sans compte ni serveur distant.',
        },
      },
      {
        question: {
          ar: 'كيف تحسب الأداة تكلفة الوحدة وصافي الربح عند تعدد عمليات الشراء؟',
          fr: 'Comment sont calculés le coût unitaire et la marge lors des achats successifs ?',
        },
        answer: {
          ar: 'يساوي ربح البيع قيمة البيع ناقص تكلفة الكمية المباعة، وعند تسجيل شراء جديد بسعر مختلف تحدث الأداة تكلفة الوحدة بمتوسط التكلفة المرجح للكمية المتوفرة في المخزون.',
          fr: 'Le profit correspond au prix de vente moins le coût de la quantité vendue ; chaque nouvel achat actualise le coût unitaire selon la méthode du coût moyen pondéré.',
        },
      },
      {
        question: {
          ar: 'هل تعتبر الأداة برنامج محاسبة رسميا معتمدا أمام الضرائب؟',
          fr: 'Cet outil constitue-t-il un logiciel de comptabilité légalement agréé ?',
        },
        answer: {
          ar: 'لا؛ هذه الأداة مساعدة تنظيمية وتسييرية أولية لمتابعة الكميات والأرباح التقريبية على المتصفح فقط، ولا تعد برنامج محاسبة معتمدا ولا بديلا عن السجلات والفواتير القانونية. كما ينصح بتصدير نسخة JSON بانتظام لحفظ بياناتك.',
          fr: 'Non ; c’est un tableau de bord organisationnel indicatif qui ne remplace ni un logiciel comptable certifié ni vos obligations fiscales légales. Pensez à exporter régulièrement une sauvegarde JSON.',
        },
      },
    ],
  },
  {
    id: 'tool-invoice',
    slug: 'invoice-generator',
    category: 'productivity',
    name: {
      ar: 'مولد الفواتير وفواتير الشكلية التجارية (Facture / Proforma)',
      fr: 'Générateur de Factures & Proforma en Dinar Algérien (TVA / TTC)',
    },
    description: {
      ar: 'أنشئ فاتورة قابلة للتعديل بالدينار الجزائري تشمل معلومات البائع والعميل، جدول المنتجات (Qte / P.U / Total)، واحتساب TVA والمجموع الإجمالي TTC، مع طباعتها أو حفظها PDF.',
      fr: 'Créez des factures et devis modifiables en DZD avec coordonnées vendeur/client, tableau de lignes (Désignation, Qté, P.U, Total), calcul automatique TVA et TTC, prêts pour export PDF.',
    },
    iconName: 'Receipt',
    faqs: [
      {
        question: {
          ar: 'ما البيانات القانونية الإلزامية كي تعتمد الفاتورة كوثيقة ضريبية رسمية في الجزائر؟',
          fr: 'Quelles mentions légales rendent une facture fiscalement conforme en Algérie ?',
        },
        answer: {
          ar: 'يساعد النموذج في إعداد فواتير مرتبة شكليا، ولكي تعتبر الفاتورة وثيقة ضريبية رسمية يجب تضمين كافة البيانات القانونية المطلوبة مثل رقم التعريف الجبائي (NIF)، رقم السجل التجاري (RC)، رقم التعريف الإحصائي (NIS)، ومادة الإخضاع للضريبة (AI).',
          fr: 'Pour être opposable fiscalement, la facture doit obligatoirement mentionner le NIF, le numéro de Registre de Commerce (RC), le NIS, l’Article d’Imposition (AI), l’adresse exacte et le mode de règlement.',
        },
      },
      {
        question: {
          ar: 'كيف يمكنني كتابة المبلغ الإجمالي بالحروف أسفل الفاتورة بدقة؟',
          fr: 'Comment convertir le montant TTC en toutes lettres pour le bas de facture ?',
        },
        answer: {
          ar: 'يمكنك استخدام أداة "محول الأرقام إلى الحروف بالدينار الجزائري" المدمجة في البوابة لتفقيط المبلغ الصافي مع السنتيم بالصيغة الإدارية المعتمدة ولصقه في ختام الفاتورة.',
          fr: 'Utilisez notre outil complémentaire « Convertisseur de Montants DZD en Lettres » pour rédiger l’arrêté de facture sans erreur puis collez-le avant impression.',
        },
      },
      {
        question: {
          ar: 'هل تتحمل الأداة حساب الرسم على القيمة المضافة TVA بنسبة 19% أو 9%؟',
          fr: 'Le générateur calcule-t-il automatiquement la TVA (19 % ou 9 %) et le TTC ?',
        },
        answer: {
          ar: 'نعم، تحسب الأداة المجموع الفرعي HT تلقائيا ثم تضيف نسبة TVA المحددة لعرض المبلغ الإجمالي TTC بالدينار الجزائري جاهزا للطباعة أو الحفظ بصيغة PDF.',
          fr: 'Oui, les sous-totaux HT par ligne sont additionnés puis majorés du taux de TVA sélectionné afin d’obtenir le net à payer TTC prêt à imprimer en PDF.',
        },
      },
    ],
  },
];

export const batch6ToolGuides: Record<string, Partial<ToolRichGuide>> = {
  'hijri-calendar': {
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون والمؤسسات والطلبة الباحثون عن التوافق الهجري والميلادي والعطل في الجزائر',
        fr: 'Citoyens, professionnels et étudiants recherchant la correspondance Hégirien / Grégorien en Algérie',
      },
      processingTime: {
        ar: 'تحويل فوري ومباشر للتاريخ عبر تقويم أم القرى',
        fr: 'Conversion instantanée des dates dans le navigateur',
      },
      fees: {
        ar: 'مجاني بالكامل مع بطاقة تاريخ قابلة للمشاركة والتنزيل',
        fr: 'Gratuit avec export de carte visuelle de date',
      },
      channel: {
        ar: 'تطبيق ويب محلي + جدول العطل والأعياد الرسمية في الجزائر',
        fr: 'Application web locale avec tableau des jours fériés algériens',
      },
      keyRequirement: {
        ar: 'اختيار التاريخ الميلادي أو الهجري ومراعاة فارق الرؤية الشرعية محليا',
        fr: 'Saisie d’une date et prise en compte possible d’un écart de ±1 jour selon l’observation lunaire',
      },
    },
    explanation: {
      ar: [
        'تمنحك أداة الرزنامة الهجرية والميلادية محولا سريعا بين التقويمين الميلادي والهجري، مع عرض تفصيلي لليوم والشهر والسنة وتصفح أيام الشهر ومشاركة بطاقة تاريخ أنيقة بهوية إسلامية واضحة.',
        'يعتمد المحول على تقويم أم القرى الفلكي المدمج قياسيا في المتصفحات الحديثة عبر واجهة Intl.DateTimeFormat؛ ولذلك تنبه الأداة بوضوح إلى احتمال اختلاف التاريخ الهجري المعروض بيوم واحد مقارنة بالإعلان الرسمي المحلي الصادر عن وزارة الشؤون الدينية ولجنة الأهلة عند ثبوت رؤية الهلال.',
        'تضم الصفحة أيضا جدولا مرجعيا واضحا للأعياد والمناسبات الرسمية الوطنية والدينية المعمول بها في الجزائر، مثل رأس السنة الأمازيغية، عيد العمال، عيد الاستقلال، أول نوفمبر، وعيدي الفطر والأضحى.',
        'يمكنك نسخ التاريخين بنقرة واحدة أو توليد بطاقة التاريخ الإسلامية كصورة قابلة للإرسال أو التنزيل لاستخدامها في التهنئة أو الوثائق التنظيمية.'
      ],
      fr: [
        'Le convertisseur de calendrier hégirien et grégorien permet de retrouver immédiatement la date correspondante entre les deux systèmes, de parcourir les jours du mois et de partager une carte de date soignée.',
        'La conversion s’appuie sur le calendrier astronomique standard Umm al-Qura intégré aux navigateurs modernes ; un décalage d’un jour reste possible lors des débuts de mois lunaires selon l’annonce officielle de l’observation du croissant en Algérie.',
        'Un tableau structuré rassemble en complément les principaux jours fériés légaux et fêtes religieuses observés en Algérie (Yennayer, 1er Mai, 5 Juillet, 1er Novembre, Aïd El Fitr, Aïd El Adha, Achoura, Mawlid).',
        'L’ensemble fonctionne intégralement hors-ligne côté client sans appel serveur, avec copie rapide des deux formats de date.'
      ],
    },
    formulaTitle: {
      ar: 'المرجع الحسابي للتحويل ومعيار التوافق المحلي',
      fr: 'Méthode de conversion calendaire et précision lunaire',
    },
    formulaText: {
      ar: 'التحويل الفلكي عبر خوارزمية تقويم أم القرى (islamic-umalqura) في المتصفح؛ مع هامش تحقق يدوي ±1 يوم للأشهر القمرية المرتبطة بالرؤية الشرعية الرسمية في الجزائر.',
      fr: 'Calcul algorithmique basé sur le référentiel Umm al-Qura (islamic-umalqura), avec marge de ±1 jour selon la proclamation officielle de la nouvelle lune.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لتحويل تاريخ رسمي أو عائلي',
        fr: 'Exemple pratique de correspondance calendaire',
      },
      scenario: {
        ar: 'مواطن أو طالب يريد معرفة التاريخ الهجري الموافق لتاريخ معين من السنة الميلادية أو تحديد مواعيد العطل الدينية التقديرية.',
        fr: 'Un utilisateur souhaite convertir une date administrative grégorienne en date hégirienne ou anticiper les jours fériés religieux.',
      },
      result: {
        ar: 'بمجرد اختيار التاريخ الميلادي يظهر اليوم الهجري واسم الشهر والسنة بصيغة عربية وفرنسية جاهزة للنسخ أو الحفظ كبطاقة صورة.',
        fr: 'La saisie immédiate affiche le jour de la semaine, le mois hégirien exact et la liste complète des jours fériés algériens.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مقارنة مرجعية للتقويم والأعياد الرسمية في الجزائر',
        fr: 'Repères calendaires et jours fériés officiels en Algérie',
      },
      headers: [
        { ar: 'الفئة أو المرجع', fr: 'Catégorie / Référence' },
        { ar: 'نوع التقويم المعتمد', fr: 'Calendrier de base' },
        { ar: 'ملاحظة التطبيق العملي', fr: 'Précision pratique' },
      ],
      rows: [
        [
          { ar: 'التحويل اليومي الفلكي', fr: 'Conversion astronomique' },
          { ar: 'تقويم أم القرى (المتصفح)', fr: 'Umm al-Qura (navigateur)' },
          { ar: 'دقيق للتواريخ التاريخية والمستقبلية العامة (±1 يوم)', fr: 'Fiable à ±1 jour près pour les usages généraux' },
        ],
        [
          { ar: 'الأعياد الدينية (رمضان والعيدان)', fr: 'Fêtes religieuses' },
          { ar: 'التقويم الهجري والرؤية الشرعية', fr: 'Calendrier lunaire officiel' },
          { ar: 'تثبت رسميا ببيان وزارة الشؤون الدينية والأهلة في الجزائر', fr: 'Confirmées par communiqué officiel du Ministère des Affaires Religieuses' },
        ],
        [
          { ar: 'الأعياد الوطنية والاجتماعية', fr: 'Fêtes nationales' },
          { ar: 'التقويم الميلادي الثابت', fr: 'Calendrier grégorien fixe' },
          { ar: '1 جانفي، 12 جانفي يناير، 1 ماي، 5 جويلية، و1 نوفمبر', fr: '1er Janvier, 12 Janvier (Yennayer), 1er Mai, 5 Juillet et 1er Novembre' },
        ],
      ],
    },
    tips: {
      ar: [
        'تحقق دائما من الإعلانات الرسمية عند التخطيط لسفر أو إجازات مرتبطة ببداية رمضان أو عيدي الفطر والأضحى.',
        'استعمل خاصية نسخ التاريخ لتوثيق المواعيد في المراسلات والمذكرات بالصيغتين الهجرية والميلادية.',
        'يمكنك الاستفادة من بطاقة التاريخ القابلة للتنزيل لحفظها على الهاتف أو مشاركتها.',
        'تحقق من تواريخ العطل الرسمية السنوية قبل حجز تذاكر السفر أو المواعيد الإدارية.',
      ],
      fr: [
        'Vérifiez toujours les annonces officielles avant de réserver un déplacement pour l’Aïd ou le début du Ramadan.',
        'Copiez directement la double date hégirienne/grégorienne pour vos actes ou courriers bilingues.',
        'Notez que les fêtes nationales algériennes suivent le calendrier grégorien fixe.',
        'Utilisez l’outil complémentaire de différence entre dates pour calculer la durée entre deux échéances.',
      ],
    },
    extraFaqs: [],
  },

  'qibla-compass': {
    quickSummary: {
      targetAudience: {
        ar: 'المصلون والمسافرون داخل ولايات الجزائر الـ 58 أو عبر نظام تحديد المواقع',
        fr: 'Fidèles et voyageurs dans les 58 wilayas d’Algérie ou par géolocalisation GPS',
      },
      processingTime: {
        ar: 'حساب فوري لزاوية القبلة بالدرجات واتجاه الشمال الحقيقي',
        fr: 'Calcul trigonométrique instantané de l’azimut en degrés',
      },
      fees: {
        ar: 'مجاني بالكامل مع حفظ الخصوصية دون إرسال إحداثيات للخادم',
        fr: 'Gratuit et confidentiel sans transfert GPS vers un serveur',
      },
      channel: {
        ar: 'بوصلة تفاعلية + اختيار مباشر للولاية دون اشتراط مستشعر الهاتف',
        fr: 'Boussole interactive + sélection des 58 wilayas sans capteur requis',
      },
      keyRequirement: {
        ar: 'اختيار الولاية أو السماح بالموقع مع إبعاد الجهاز عن المعادن والمغناطيس',
        fr: 'Sélection de wilaya ou géolocalisation loin des sources magnétiques',
      },
    },
    explanation: {
      ar: [
        'تمكنك أداة بوصلة القبلة من تحديد اتجاه القبلة نحو مكة المكرمة سواء باختيار موقعك الجغرافي الحالي أو بالبحث المباشر في قائمة ولايات الجزائر الثماني والخمسين، مع عرض زاوية الانحراف بالدرجات من الشمال الحقيقي.',
        'تعمل ميزة حساب زاوية القبلة الرقمية بدقة حتى على أجهزة الحاسوب أو الهواتف التي لا تحتوي على مستشعر مغناطيسي، بينما يعرض السهم التفاعلي التوجيه البصري المتزامن عند توفر المستشعر ومنح الإذن اللازم.',
        'تلتزم الأداة بحماية الخصوصية التامة؛ فلا تخزن إحداثيات موقعك الجغرافي ولا ترسلها إلى أي خادم خارجي، إذ تجري كافة الحسابات الهندسية الكروية محليا في متصفحك.',
        'للحصول على أدق توجيه ممكن في الميدان، أبعد الهاتف عن السماعات والأغلفة المغناطيسية والأجسام الحديدية الكبيرة، وتذكر أن الزاوية المعروضة محسوبة نسبة إلى الشمال الجغرافي الحقيقي وليس الشمال المغناطيسي.'
      ],
      fr: [
        'La boussole Qibla calcule l’angle exact vers La Mecque (Kaaba) depuis votre position actuelle ou en sélectionnant l’une des 58 wilayas d’Algérie, exprimé en degrés à partir du Nord géographique vrai.',
        'Contrairement aux applications dépendant uniquement du capteur matériel, le calcul numérique de l’azimut reste accessible sur ordinateur comme sur tout smartphone, avec aiguille rotative interactive.',
        'Respectueuse de la vie privée, l’application ne sauvegarde ni ne transmet jamais vos coordonnées GPS à un serveur distant : toute la trigonométrie sphérique s’exécute localement.',
        'Pour éviter les perturbations magnétiques, éloignez votre téléphone des haut-parleurs, aimants ou coques métalliques, et gardez à l’esprit la différence entre Nord magnétique et Nord géographique vrai.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة حساب سمت القبلة من الشمال الحقيقي',
      fr: 'Formule géodésique du grand cercle (Azimut Qibla)',
    },
    formulaText: {
      ar: 'يحسب الاتجاه عبر معادلة القوس الأعظم الكروي (Great-Circle Azimuth) بين إحداثيات موقع المستخدم وإحداثيات الكعبة المشرفة (21.4225° شمالا، 39.8262° شرقا)، فتكون الزاوية في الجزائر غالبا بين 86° و106° شرقا باتجاه الشرق/الجنوب الشرقي حسب الولاية.',
      fr: 'Calcul par orthodromie entre les coordonnées locales et la Kaaba (21,4225° N ; 39,8262° E). En Algérie, l’azimut de la Qibla se situe généralement entre 86° et 106° (secteur Est / Est-Sud-Est selon la wilaya).',
    },
    practicalExample: {
      title: {
        ar: 'مثال تحديد الاتجاه بين الجزائر العاصمة وتمنراست ووهران',
        fr: 'Exemples d’azimuts Qibla en Algérie',
      },
      scenario: {
        ar: 'مقارنة زاوية القبلة في ثلاث مدن جزائرية متباعدة جغرافيا (الجزائر العاصمة، وهران، قسنطينة، تمنراست).',
        fr: 'Comparaison des angles de direction entre Alger, Oran, Constantine et Tamanrasset.',
      },
      result: {
        ar: 'في الشمال والوسط مثل الجزائر العاصمة تكون الزاوية قرابة 105° (شرق يميل قليلا للجنوب)، وفي الغرب كوهران قرابة 101°، وفي أقصى الجنوب كتمنراست تقارب 87° شرقا.',
        fr: 'L’azimut avoisine ~105° à Alger, ~101° à Oran et ~87° à Tamanrasset, toujours mesuré dans le sens horaire à partir du Nord vrai.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مقارنة طرق تحديد اتجاه القبلة وشروط الدقة',
        fr: 'Comparatif des méthodes de repérage et précautions d’usage',
      },
      headers: [
        { ar: 'طريقة التحديد', fr: 'Méthode utilisée' },
        { ar: 'هل تشترط مستشعر بوصلة؟', fr: 'Capteur requis ?' },
        { ar: 'توصية الدقة العملية', fr: 'Conseil de précision' },
      ],
      rows: [
        [
          { ar: 'تحديد الموقع GPS + البوصلة التفاعلية', fr: 'Géolocalisation + capteur' },
          { ar: 'نعم، للحركة الآلية للسهم', fr: 'Oui pour la rotation auto' },
          { ar: 'تفعيل الموقع الدقيق والابتعاد عن المغناطيس والسماعات', fr: 'Activer GPS précis et éloigner aimants/métaux' },
        ],
        [
          { ar: 'اختيار الولاية + الزاوية الرقمية', fr: 'Sélection Wilaya + azimut' },
          { ar: 'لا (تعمل على أي جهاز)', fr: 'Non (universel)' },
          { ar: 'قياس الزاوية من الشمال الحقيقي باستخدام بوصلة موثوقة أو خريطة', fr: 'Reporter l’angle depuis le Nord géographique vrai' },
        ],
      ],
    },
    tips: {
      ar: [
        'فعل خيار الموقع الدقيق عند استخدام GPS أو اختر أقرب ولاية جزائرية من القائمة الـ 58.',
        'أبعد الهاتف عن السماعات والمفاتيح وأغلفة الحماية المغناطيسية قبل الاعتماد على المستشعر.',
        'تذكر أن زاوية القبلة المعروضة محسوبة من الشمال الحقيقي لا الشمال المغناطيسي.',
        'عند غياب المستشعر أو تعطل إذن المتصفح، اعتمد على الزاوية الرقمية المعروضة بالدرجات.',
      ],
      fr: [
        'Activez la localisation précise ou sélectionnez directement votre wilaya parmi les 58 proposées.',
        'Éloignez le smartphone de tout objet métallique ou magnétique lors de la calibration.',
        'La valeur en degrés est mesurée dans le sens horaire depuis le Nord vrai.',
        'Sans capteur compatible, exploitez l’angle numérique avec une boussole manuelle fiable.',
      ],
    },
    extraFaqs: [],
  },

  'admin-procedures-assistant': {
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون والمغتربون والطلبة المقبلون على إيداع ملفات إدارية في الجزائر',
        fr: 'Citoyens, résidents et étudiants préparant un dossier administratif en Algérie',
      },
      processingTime: {
        ar: 'عرض فوري للوثائق والرسوم والخطوات في أقل من دقيقة',
        fr: 'Consultation immédiate des pièces et étapes en moins d’une minute',
      },
      fees: {
        ar: 'أداة مجانية متصلة بالمرجع الرسمي لوزارة الداخلية',
        fr: 'Gratuit avec lien vers le référentiel du Ministère de l’Intérieur',
      },
      channel: {
        ar: 'مساعد تفاعلي + قائمة تحقق قابلة للحفظ والطباعة',
        fr: 'Assistant interactif + checklist sauvegardable et imprimable',
      },
      keyRequirement: {
        ar: 'تحديد نوع الوثيقة أو الإجراء المطلوب ومطابقة القائمة قبل التنقل للشباك',
        fr: 'Sélection de la démarche souhaitée et vérification des pièces requises',
      },
    },
    explanation: {
      ar: [
        'يساعدك مساعد الوثائق والإجراءات الإدارية في التحضير المنظم لأهم المعاملات الإدارية في الجزائر دون تضييع الوقت أو تكرار التنقل إلى البلدية والدائرة بسبب نقص وثيقة أو طابع جبائي.',
        'بمجرد تحديد الإجراء المطلوب، يعرض المساعد قائمة الوثائق المكونة للملف، الجهة المختصة بالإيداع والاستلام، الآجال التقديرية، الرسوم المعتمدة، والخطوات العملية مرتبة بوضوح.',
        'يوفر النظام قائمة تحقق تفاعلية يمكنك التأشير عليها مع متابعة اكتمال الملف، ثم حفظها محليا في متصفحك أو طباعتها لاصطحابها أثناء التنقل.',
        'يتكامل المساعد مع المرجع العام للإجراءات الإدارية في الموقع الرسمي لوزارة الداخلية والجماعات المحلية والتهيئة العمرانية ومع أدلة الإجراءات المفصلة في البوابة.'
      ],
      fr: [
        'L’assistant des démarches administratives permet de préparer méthodiquement vos dossiers en Algérie et d’éviter les allers-retours inutiles au guichet communal ou de daïra pour pièce manquante.',
        'Sélectionnez simplement la formalité recherchée pour visualiser les pièces justificatives, l’autorité compétente, les frais de timbre fiscal applicables et les étapes clés.',
        'Vous pouvez cocher au fur et à mesure les documents déjà réunis, conserver cette progression localement ou imprimer votre liste de contrôle récapitulative.',
        'Chaque démarche renvoie vers le référentiel officiel du Ministère de l’Intérieur et vers les guides détaillés de notre portail.'
      ],
    },
    formulaTitle: {
      ar: 'منهجية تجهيز الملف الإداري وقائمة التحقق',
      fr: 'Méthode de préparation et validation de dossier',
    },
    formulaText: {
      ar: 'اختيار الإجراء -> مراجعة الشروط والجهة المختصة -> تأشير الوثائق والطوابع الجبائية المطلوبة -> التحقق من البوابة الرسمية عند الإيداع أو المتابعة عن بعد.',
      fr: 'Choix de la démarche -> Vérification de l’autorité compétente et des timbres -> Pointage des justificatifs -> Confirmation sur le portail officiel.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تجهيز ملف تجديد جواز السفر أو البطاقة الرمادية',
        fr: 'Exemple de préparation d’un dossier biométrique ou carte grise',
      },
      scenario: {
        ar: 'مواطن يستعد لإيداع طلب تجديد جواز السفر البيومتري أو تسجيل مركبة بالبطاقة الرمادية في بلديته.',
        fr: 'Un citoyen prépare le renouvellement de son passeport biométrique ou une démarche de carte grise en APC/daïra.',
      },
      result: {
        ar: 'يحدد الإجراء في المساعد فيحصل على قائمة الوثائق الدقيقة وقيمة الطابع الجبائي والرابط الرسمي لمتابعة التقدم، مع طباعة القائمة للتأكد من كل ورقة قبل المغادرة.',
        fr: 'L’outil liste chaque pièce justificative, le montant du timbre fiscal et les liens de suivi en ligne, avec option d’impression de la checklist.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'أبرز فئات الإجراءات المتوفرة في المساعد الإداري',
        fr: 'Principales catégories de démarches couvertes par l’assistant',
      },
      headers: [
        { ar: 'فئة الإجراء', fr: 'Catégorie de démarche' },
        { ar: 'أمثلة الوثائق', fr: 'Exemples courants' },
        { ar: 'الجهة المختصة غالبا', fr: 'Autorité compétente' },
      ],
      rows: [
        [
          { ar: 'الهوية والسفر والحالة المدنية', fr: 'Identité, voyage et état civil' },
          { ar: 'بطاقة التعريف، جواز السفر، عقد الميلاد، الإقامة', fr: 'CNIBE, passeport biométrique, actes d’état civil, résidence' },
          { ar: 'البلدية / الدائرة / بوابة وزارة الداخلية', fr: 'APC / Daïra / Portail Intérieur' },
        ],
        [
          { ar: 'المركبات ورخص السياقة', fr: 'Véhicules et conduite' },
          { ar: 'البطاقة الرمادية، رخصة السياقة، شهادة المراقبة', fr: 'Carte grise, permis biométrique, contrôle technique' },
          { ar: 'الدائرة / الولاية / مصالح المناجم', fr: 'Daïra / Wilaya / Service des mines' },
        ],
        [
          { ar: 'التشغيل، السكن، والأعمال', fr: 'Emploi, logement et commerce' },
          { ar: 'السجل التجاري، شهادة السوابق العدلية، ملفات السكن', fr: 'CNRC, casier judiciaire, dossiers logement' },
          { ar: 'CNRC / وزارة العدل / المنصات القطاعية', fr: 'CNRC / Ministère de la Justice / Plateformes sectorielles' },
        ],
      ],
    },
    tips: {
      ar: [
        'تحقق من تاريخ صلاحية الوثائق الملحقة مثل شهادة الإقامة والصور الشمسية المطابقة للمعايير البيومترية.',
        'أحضر الوثائق الأصلية للمطابقة حتى عند تقديم نسخ مصورة أو إيداع إلكتروني أولي.',
        'استعمل رابط المرجع العام للإجراءات الإدارية بوزارة الداخلية للتحقق من المستجدات.',
        'احفظ وصل الإيداع أو رقم التتبع لمتابعة جاهزية الوثائق عن بعد عبر الإنترنت.',
      ],
      fr: [
        'Contrôlez la date de validité des justificatifs (certificat de résidence, photos biométriques conformes).',
        'Munissez-vous toujours des originaux lors du dépôt physique même après pré-inscription en ligne.',
        'Consultez le lien du Ministère de l’Intérieur pour toute évolution récente des timbres fiscaux.',
        'Conservez précieusement votre récépissé de dépôt pour le suivi à distance.',
      ],
    },
    extraFaqs: [],
  },

  'arabic-dictionary': {
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة والباحثون والمترجمون والمحررون باللغة العربية الفصحى',
        fr: 'Étudiants, chercheurs, traducteurs et rédacteurs en langue arabe',
      },
      processingTime: {
        ar: 'بحث فوري حسب الكلمة أو الحرف مع نتائج لحظية',
        fr: 'Recherche instantanée par mot, racine ou lettre alphabétique',
      },
      fees: {
        ar: 'أداة لغوية مجانية بالكامل داخل المتصفح',
        fr: 'Ressource lexicale 100 % gratuite dans le navigateur',
      },
      channel: {
        ar: 'معجم تفاعلي + مفضلة + اختبار للمفردات',
        fr: 'Lexique interactif + favoris locaux + quiz d’entraînement',
      },
      keyRequirement: {
        ar: 'إدخال الكلمة أو اختيار الحرف لاستعراض المعنى والجذر والمرادفات',
        fr: 'Saisie d’un terme ou sélection alphabétique pour afficher sens et synonymes',
      },
    },
    explanation: {
      ar: [
        'يجمع القاموس العربي التفاعلي بين بساطة البحث الفوري وثراء المادة اللغوية، حيث يوفر معاني الكلمات العربية الفصيحة، وجذورها اللغوية، ومرادفاتها وأضدادها عند توفرها، بالإضافة إلى نخبة من المصطلحات الإدارية والقانونية المتداولة.',
        'تتيح الواجهة تصفح المفردات حسب الحروف الأبجدية أو عبر شريط البحث الفوري، مع عرض سجل آخر الكلمات التي طالعتها وقسم "كلماتي المفضلة" المحفوظ محليا لمراجعتها لاحقا.',
        'يميز القاموس مبدأ الشفافية التامة في عدد المدخلات المتاحة بحيث تعكس الأرقام المحتوى الفعلي الموجود في القاعدة المحلية دون مبالغة.',
        'لترسيخ المفردات لدى التلاميذ والطلبة، يتضمن القاموس قسم "اختبر مفرداتك" لتدريب الذاكرة على تمييز المعاني الدقيقة للكلمات، ويتكامل مع أدوات البحوث مثل مولد المراجع APA وخطة البحث.'
      ],
      fr: [
        'Ce dictionnaire arabe interactif combine recherche instantanée et structuration lexicale claire : définitions, racines linguistiques, synonymes, antonymes ainsi que terminologie administrative et juridique courante.',
        'Naviguez facilement par barre de recherche ou index alphabétique, tout en retrouvant votre historique récent et votre carnet personnel de mots favoris conservé en local.',
        'L’outil affiche exclusivement le volume réel d’entrées disponibles en base locale, garantissant une information transparente et fiable.',
        'Un mini-quiz intégré permet aux élèves, étudiants et rédacteurs de tester leur compréhension des mots et d’enrichir leur expression écrite en lien avec nos outils académiques.'
      ],
    },
    formulaTitle: {
      ar: 'بنية البحث المعجمي وتصنيف المفردات',
      fr: 'Structure d’entrée lexicale et recherche multi-critères',
    },
    formulaText: {
      ar: 'المدخل المعجمي = الكلمة المعيارية + الجذر الثلاثي/الرباعي + الشرح المعنوي الدقيق + المرادفات والأضداد والمجال الاستعمالي (أدبي أو إداري).',
      fr: 'Entrée = Terme vedette + Racine + Définition claire + Synonymes/Antonymes et registre d’usage (littéraire ou administratif).',
    },
    practicalExample: {
      title: {
        ar: 'مثال مراجعة مصطلح إداري أو لغوي أثناء تحرير بحث',
        fr: 'Exemple d’utilisation lors d’une rédaction académique ou administrative',
      },
      scenario: {
        ar: 'طالب جامعي أو موظف إداري يتحقق من المعنى الدقيق والمرادف الفصيح لكلمة قبل اعتمادها في مذكرة التخرج أو مراسلة رسمية.',
        fr: 'Un étudiant ou rédacteur vérifie le sens exact et les synonymes d’un terme avant de l’employer dans un mémoire ou courrier officiel.',
      },
      result: {
        ar: 'يظهر شرح الكلمة وجذرها ومرادفاتها فورا، ويمكن إضافتها إلى المفضلة لمراجعتها لاحقا أو التدرب عليها في اختبار المفردات.',
        fr: 'La définition et la racine apparaissent immédiatement et le mot peut être ajouté aux favoris pour révision ultérieure.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'وظائف القاموس العربي التفاعلي',
        fr: 'Fonctionnalités clés du lexique interactif',
      },
      headers: [
        { ar: 'القسم داخل الأداة', fr: 'Module de l’outil' },
        { ar: 'الوظيفة العملية', fr: 'Rôle principal' },
        { ar: 'حفظ البيانات', fr: 'Persistance' },
      ],
      rows: [
        [
          { ar: 'البحث والتصفح بالحرف', fr: 'Recherche & index alphabétique' },
          { ar: 'استعراض المعاني والجذور والمرادفات والأضداد', fr: 'Affichage des sens, racines et synonymes' },
          { ar: 'فوري من القاعدة المحلية', fr: 'Base locale instantanée' },
        ],
        [
          { ar: 'كلماتي المفضلة وآخر الكلمات', fr: 'Favoris & historique' },
          { ar: 'الرجوع السريع للمفردات المحفوظة', fr: 'Accès rapide aux termes retenus' },
          { ar: 'محفوظ في ذاكرة المتصفح فقط', fr: 'Stockage local navigateur' },
        ],
        [
          { ar: 'اختبر مفرداتك', fr: 'Quiz vocabulaire' },
          { ar: 'تمييز المعاني من اختيارات متعددة', fr: 'Entraînement à choix multiples' },
          { ar: 'تفاعلي فوري دون تسجيل', fr: 'Interactif sans compte' },
        ],
      ],
    },
    tips: {
      ar: [
        'جرب البحث بالكلمة المجردة أو الجذر إذا لم تظهر نتائج مباشرة للجمع أو المشتق.',
        'احفظ الكلمات الجديدة في قائمة المفضلة وراجعها عبر اختبار المفردات لتثبيت المعنى.',
        'استفد من المصطلحات الإدارية والقانونية عند تحرير الطلبات والمراسلات الرسمية.',
        'استكمل تدقيق نصك عبر أداة أدوات النصوص والبحوث ومولد المراجع APA 7.',
      ],
      fr: [
        'Recherchez la forme simple ou la racine du mot pour explorer ses dérivés.',
        'Enregistrez les termes techniques dans vos favoris et révisez-les avec le quiz intégré.',
        'Vérifiez la nuance entre synonymes avant d’employer un terme juridique ou administratif.',
        'Complétez votre rédaction avec notre boîte à outils Texte & Recherche et le générateur APA 7.',
      ],
    },
    extraFaqs: [],
  },

  'cv-builder': {
    quickSummary: {
      targetAudience: {
        ar: 'الباحثون عن عمل والخريجون والمهنيون في الجزائر للتقديم للشركات والمؤسسات',
        fr: 'Demandeurs d’emploi, jeunes diplômés et professionnels en Algérie',
      },
      processingTime: {
        ar: 'تعديل فوري ومعاينة مباشرة جاهزة للطباعة PDF',
        fr: 'Édition en direct avec aperçu prêt à imprimer en PDF',
      },
      fees: {
        ar: 'مجاني بالكامل دون علامة مائية ودون تسجيل',
        fr: '100 % gratuit, sans filigrane et sans inscription',
      },
      channel: {
        ar: 'منشئ سيرة ذاتية محلي (ملف شخصي، خبرات، تعليم، مهارات، لغات)',
        fr: 'Éditeur local (profil, expériences, formations, compétences, langues)',
      },
      keyRequirement: {
        ar: 'إدخال البيانات الشخصية والخبرات ثم اختيار حفظ بصيغة PDF عند الطباعة',
        fr: 'Saisie des rubriques et export via « Enregistrer au format PDF »',
      },
    },
    explanation: {
      ar: [
        'يوفر مولد السيرة الذاتية (CV) منصة عملية وسريعة لإنشاء سيرة ذاتية نظيفة ومنظمة تلبي متطلبات التوظيف في المؤسسات الوطنية والشركات الخاصة والمنصات الرقمية دون الحاجة لبرامج معقدة.',
        'يتيح القالب تنظيم المحتوى ضمن أقسام قياسية معتمدة لدى مسؤولي التوظيف: الملف الشخصي ومعلومات الاتصال، الخبرة المهنية مع تفصيل المهام والإنجازات، التعليم الأكاديمي والشهادات، ثم المهارات واللغات بمستوياتها الواضحة.',
        'تتم جميع التعديلات ومعاينة الشكل النهائي مباشرة داخل متصفحك دون إنشاء حساب ودون رفع معلوماتك الشخصية أو أرقام هاتفك إلى أي خادم خارجي.',
        'عند الانتهاء، يمكنك طباعة السيرة الذاتية فورا أو حفظها بصيغة PDF نظيفة وجاهزة للإرسال عبر البريد الإلكتروني أو منصات التوظيف كالوكالة الوطنية للتشغيل.'
      ],
      fr: [
        'Le créateur de CV permet de concevoir en quelques minutes un curriculum vitae sobre, structuré et professionnel adapté aux standards de recrutement des entreprises et institutions en Algérie.',
        'L’éditeur organise votre parcours autour des rubriques attendues par les recruteurs : profil et coordonnées, expériences professionnelles détaillées, formations académiques, compétences clés et langues maîtrisées.',
        'L’aperçu se met à jour instantanément dans votre navigateur sans aucune inscription ni transfert de vos informations personnelles vers un serveur distant.',
        'En un clic, imprimez votre document ou exportez-le au format PDF propre, sans filigrane publicitaire, prêt à être déposé sur les portails d’emploi ou envoyé par e-mail.'
      ],
    },
    formulaTitle: {
      ar: 'الهيكل القياسي للسيرة الذاتية الاحترافية',
      fr: 'Architecture recommandée d’un CV efficace',
    },
    formulaText: {
      ar: 'معلومات التواصل والملف الشخصي -> الخبرات المهنية مرتبة من الأحدث للأقدم -> التعليم الأكاديمي والتكوين -> المهارات التقنية واللغات (العربية، الفرنسية، الإنجليزية).',
      fr: 'En-tête & profil -> Expériences antérieures (ordre antichronologique) -> Diplômes & formations -> Compétences techniques et niveaux linguistiques.',
    },
    practicalExample: {
      title: {
        ar: 'مثال إعداد سيرة ذاتية لخريج جامعي في الجزائر',
        fr: 'Exemple pratique pour un jeune diplômé algérien',
      },
      scenario: {
        ar: 'خريج ماستر في الهندسة أو الاقتصاد يريد تجهيز سيرة ذاتية من صفحة واحدة للتقديم عبر البريد الإلكتروني.',
        fr: 'Un titulaire de Master en ingénierie ou gestion prépare un CV d’une page pour postuler à des offres nationales.',
      },
      result: {
        ar: 'يدخل مشروع التخرج والتربصات الميدانية والمهارات البرمجية واللغات (العربية، الفرنسية، الإنجليزية) ثم يحفظ الملف بصيغة PDF احترافية.',
        fr: 'Il renseigne ses stages pratiques, outils informatiques et langues, vérifie l’équilibre visuel et génère un PDF net prêt à envoyer.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'الأقسام الأساسية في مولد السيرة الذاتية ونصائح الصياغة',
        fr: 'Rubriques du créateur de CV et bonnes pratiques',
      },
      headers: [
        { ar: 'القسم', fr: 'Section du CV' },
        { ar: 'المحتوى الموصى به', fr: 'Contenu conseillé' },
        { ar: 'تنبيه الصياغة', fr: 'Conseil de rédaction' },
      ],
      rows: [
        [
          { ar: 'الملف الشخصي', fr: 'Profil & Coordonnées' },
          { ar: 'الاسم، الولاية، الهاتف، البريد، وملخص مهني من سطرين', fr: 'Nom, wilaya, téléphone, e-mail et accroche brève' },
          { ar: 'استعمل بريدا إلكترونيا مهنيا ومباشرا', fr: 'Utilisez une adresse e-mail professionnelle' },
        ],
        [
          { ar: 'الخبرة المهنية', fr: 'Expériences' },
          { ar: 'المسمى الوظيفي، المؤسسة، الفترة، والمهام والإنجازات', fr: 'Poste, entreprise, dates et réalisations concrètes' },
          { ar: 'ابدأ بالأفعال الإجرائية والأرقام الواقعية', fr: 'Privilégiez des verbes d’action et résultats chiffrés' },
        ],
        [
          { ar: 'التعليم والمهارات واللغات', fr: 'Formation, Compétences & Langues' },
          { ar: 'الشهادة، التخصص، المهارات التقنية، ومستوى كل لغة', fr: 'Diplôme, spécialité, outils et niveaux de langue' },
          { ar: 'اذكر اللغات بدقة (الأم، جيد جدا، متوسط)', fr: 'Précisez honnêtement le niveau réel dans chaque langue' },
        ],
      ],
    },
    tips: {
      ar: [
        'حافظ على اختصار السيرة الذاتية في صفحة واحدة أو صفحتين كحد أقصى وبتنسيق موحد.',
        'خصص ملخص الملف الشخصي والمهارات بما يناسب المنصب الذي تتقدم إليه.',
        'راجع الأخطاء الإملائية بدقة في العربية أو الفرنسية قبل التصدير إلى PDF.',
        'تأكد بعد الحفظ بصيغة PDF من وضوح الخط وتناسق الهوامش على الورقة.',
      ],
      fr: [
        'Limitez idéalement votre CV à une page claire pour les profils juniors, deux pages maximum pour les profils confirmés.',
        'Adaptez votre accroche et vos mots-clés à chaque offre d’emploi visée.',
        'Relisez soigneusement l’orthographe avant d’exporter en PDF.',
        'Nommez le fichier exporté proprement (ex. : CV_Nom_Prenom.pdf).',
      ],
    },
    extraFaqs: [],
  },

  'image-compressor': {
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون والطلبة والموظفون الراغبون في تقليص حجم الصور والوثائق الممسوحة',
        fr: 'Citoyens, étudiants et professionnels souhaitant alléger photos et scans',
      },
      processingTime: {
        ar: 'ضغط فوري في ثوان معدودة مع عرض الحجم قبل وبعد ونسبة التوفير',
        fr: 'Compression locale en quelques secondes avec calcul du gain',
      },
      fees: {
        ar: 'مجاني بالكامل ودون رفع الملفات لأي خادم خارجي',
        fr: 'Gratuit et 100 % local sans envoi de fichiers sur internet',
      },
      channel: {
        ar: 'معالجة محلية بالمتصفح (JPG / PNG / WEBP) وتنزيل مباشر',
        fr: 'Traitement navigateur (JPG / PNG / WEBP) avec téléchargement direct',
      },
      keyRequirement: {
        ar: 'اختيار الصورة وتحديد الجودة المستهدفة (ينصح بـ 80% للتوازن)',
        fr: 'Sélection d’image et réglage de qualité cible (80 % recommandé)',
      },
    },
    explanation: {
      ar: [
        'صممت أداة ضغط الصور لتقليص حجم صور JPG وPNG وWEBP بسرعة وأمان تام دون الحاجة لبرامج تعديل الصور أو المواقع التي تتطلب رفع مستنداتك الخاصة على الإنترنت.',
        'تتم كافة مراحل المعالجة والتحجيم داخل متصفحك عبر تقنية Canvas المحلية (Client-Side)، ما يضمن عدم خروج صورك الشخصية أو نسخ بطاقة التعريف وجواز السفر والشهادات عن جهازك ويوفر استهلاك باقة الإنترنت.',
        'يمكنك تحديد نسبة الجودة المستهدفة بواسطة الشريط المنزلق — حيث يعد مستوى 80% مثاليا للتوازن بين صغر الحجم ووضوح النصوص والصور — ثم مقارنة الحجم الأصلي مع الحجم المضغوط ونسبة التوفير المئوية قبل التنزيل.',
        'تفيد هذه الأداة خصوصا عند التقديم عبر المنصات الرقمية الجزائرية (مثل عدل، منح الطلبة، الوظيف العمومي، والوثائق البيومترية) التي تفرض أقصى حجم مسموح به لملفات الصور.'
      ],
      fr: [
        'Cet outil permet de compresser instantanément vos images JPG, PNG et WEBP directement dans le navigateur, sans installer de logiciel et sans envoyer vos documents personnels vers un serveur distant.',
        'L’intégralité du traitement s’exécute localement côté client : vos pièces d’identité, diplômes scannés ou photos restent confidentiels sur votre appareil et vous économisez votre forfait internet.',
        'Ajustez librement le curseur de qualité — un niveau de 80 % offre généralement le meilleur compromis entre netteté de lecture et poids réduit — puis comparez la taille originale, la taille finale et le pourcentage économisé.',
        'C’est l’utilitaire idéal pour respecter les limites de poids (souvent 1 Mo ou 2 Mo) imposées par les téléservices et portails administratifs algériens.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ حساب نسبة التوفير وضبط الجودة المثلى',
      fr: 'Calcul du taux de réduction et choix de la qualité',
    },
    formulaText: {
      ar: 'نسبة التوفير (%) = [(الحجم الأصلي − الحجم بعد الضغط) ÷ الحجم الأصلي] × 100. إعادة التشفير عند جودة 75% إلى 85% تخفض الحجم غالبا بنسبة 50% إلى 80% مع الحفاظ على وضوح القراءة.',
      fr: 'Gain (%) = [(Taille initiale − Taille compressée) ÷ Taille initiale] × 100. Une qualité réglée entre 75 % et 85 % réduit souvent le poids de 50 % à 80 % tout en gardant un texte parfaitement lisible.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تجهيز نسخة وثيقة بحجم يفوق الحد المسموح في المنصات',
        fr: 'Exemple pratique pour alléger un scan administratif trop lourd',
      },
      scenario: {
        ar: 'صورة شهادة ممسوحة بهاتف ذكي حجمها 3.8 ميغابايت بينما يشترط موقع التسجيل ألا يتجاوز الملف 1 ميغابايت.',
        fr: 'Un scan de diplôme pris au smartphone pèse 3,8 Mo alors que le portail d’inscription exige moins de 1 Mo.',
      },
      result: {
        ar: 'بضبط الجودة على 80% والضغط، ينخفض حجم الملف غالبا إلى قرابة 450–700 كيلوبايت مع بقاء الكتابة والأختام واضحة وجاهزة للرفع.',
        fr: 'Avec une qualité à 80 %, le fichier descend autour de 450 à 700 Ko tout en préservant la netteté des cachets et du texte.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'دليل اختيار نسبة الجودة المناسبة حسب نوع الصورة',
        fr: 'Guide de réglage de la qualité selon le type de document',
      },
      headers: [
        { ar: 'نوع الصورة أو الوثيقة', fr: 'Type de fichier' },
        { ar: 'الجودة المقترحة', fr: 'Qualité recommandée' },
        { ar: 'النتيجة المتوقعة', fr: 'Rendu attendu' },
      ],
      rows: [
        [
          { ar: 'وثائق إدارية، شهادات، وفواتير', fr: 'Scans administratifs et diplômes' },
          { ar: '75% – 85%', fr: '75 % – 85 %' },
          { ar: 'وضوح ممتاز للنصوص والأختام مع حجم أقل بكثير', fr: 'Textes et tampons nets pour un poids divisé par 3 à 5' },
        ],
        [
          { ar: 'صور فوتوغرافية شخصية أو منتجات', fr: 'Photos portrait ou produits' },
          { ar: '80% (الإعداد المتوازن)', fr: '80 % (équilibré)' },
          { ar: 'حفاظ ممتاز على الألوان والتفاصيل', fr: 'Très bon équilibre visuel et rapidité d’envoi' },
        ],
        [
          { ar: 'ملفات ويب سريعة التصفح', fr: 'Images web haute légèreté' },
          { ar: '65% – 75% (بصيغة WEBP/JPG)', fr: '65 % – 75 % (WEBP/JPG)' },
          { ar: 'أقصى توفير في الحجم مع مظهر مقبول على الشاشات', fr: 'Compression maximale pour chargement rapide' },
        ],
      ],
    },
    tips: {
      ar: [
        'اختبر نسبة 80% أولا ثم عاين وضوح النص في الصورة المضغوطة قبل حذف النسخة الأصلية.',
        'إذا كانت أبعاد الصورة كبيرة جدا (مثل صور الكاميرا 4000 بكسل)، فإن تقليص الأبعاد يقلل الحجم بسرعة أكبر مع جودة واضحة.',
        'يفضل تحويل لقطات الشاشة الثقيلة PNG إلى JPG أو WEBP عندما لا تحتاج شفافية خلفية.',
        'إذا طلبت المنصة ملف PDF من عدة صور، ادمج الصور أو رتب ملفاتك عبر أداة PDF المحلية.',
      ],
      fr: [
        'Commencez à 80 % et vérifiez visuellement la netteté des textes avant de télécharger.',
        'Réduire la résolution (dimension en pixels) des photos de smartphone diminue fortement le poids sans dégrader la lisibilité.',
        'Préférez le format JPG ou WEBP pour les scans photo qui ne nécessitent pas de transparence.',
        'Conservez toujours une copie de l’image originale sur votre appareil.',
      ],
    },
    extraFaqs: [],
  },

  'inventory-manager': {
    quickSummary: {
      targetAudience: {
        ar: 'أصحاب المحلات الصغيرة والمشاريع التجارية الناشئة لتنظيم المخزون اليومي',
        fr: 'Commerçants, gérants de boutique et auto-entrepreneurs suivant leur stock',
      },
      processingTime: {
        ar: 'تحديث فوري للكميات والأرباح وتنبيهات النقص مع تصدير JSON',
        fr: 'Calcul instantané des quantités, alertes et marges avec export JSON',
      },
      fees: {
        ar: 'أداة تنظيمية مجانية داخل المتصفح (ليست برنامج محاسبة قانوني)',
        fr: 'Outil organisationnel gratuit en local (non substitutif à la comptabilité légale)',
      },
      channel: {
        ar: 'لوحة مخزون محلية + سجل حركات الشراء والبيع',
        fr: 'Tableau de stock local + journal des entrées et sorties',
      },
      keyRequirement: {
        ar: 'إدخال المنتجات وتكلفة الشراء وسعر البيع وحفظ نسخة احتياطية JSON دوريا',
        fr: 'Saisie des articles, coûts d’achat/vente et sauvegarde JSON régulière',
      },
    },
    explanation: {
      ar: [
        'صممت أداة مسير المخزون والأرباح لتمنح أصحاب المحلات والمشاريع الصغيرة وسيلة مبسطة لتسجيل المنتجات، متابعة الكميات المتوفرة، تقييد حركات الشراء والبيع، ومراقبة تنبيهات المنتجات التي بلغت حد النقص.',
        'عند تسجيل حركة شراء جديدة، تزيد الأداة الكمية المتوفرة وتحدث تكلفة الوحدة تلقائيا وفق طريقة متوسط التكلفة المرجح؛ وعند تسجيل حركة بيع، تنقص الكمية وتحسب ربح الحركة استنادا إلى تكلفة المنتج وقت البيع.',
        'تحفظ جميع البيانات والجداول محليا في المتصفح وعلى نفس الجهاز دون إرسال أي معطيات تجارية إلى خادم خارجي، كما تتيح الأداة تصدير ملف JSON واستيراده لنقل نسخة احتياطية بسهولة أو طباعة التقارير.',
        'ملاحظة تنظيمية وقانونية مهمة: هذه الأداة مساعدة أولية لتسيير المخزون ومتابعة الهوامش، وليست برنامج محاسبة معتمدا ولا بديلا عن الفواتير الرسمية والسجلات المحاسبية والضريبية القانونية.'
      ],
      fr: [
        'Le gestionnaire de stock et de marges offre aux commerçants et petites entreprises un tableau de suivi local pour répertorier leurs articles, enregistrer les achats/ventes et recevoir des alertes visuelles lorsque les quantités atteignent un seuil bas.',
        'Lors d’une entrée en stock (achat), la quantité augmente et le coût unitaire est actualisé par moyenne pondérée ; lors d’une vente, le stock diminue et le bénéfice est calculé selon le coût unitaire à la date de vente.',
        'Toutes les opérations s’exécutent et sont mémorisées exclusivement sur votre navigateur/appareil : utilisez la fonction d’export et d’import JSON pour sécuriser vos données ou les transférer.',
        'Mention importante : cet utilitaire constitue un aide-mémoire organisationnel et ne remplace en aucun cas un logiciel comptable certifié ni les registres légaux exigés par l’administration fiscale.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة متوسط التكلفة المرجح وحساب ربح البيع',
      fr: 'Calcul du coût moyen pondéré (CMP) et de la marge',
    },
    formulaText: {
      ar: 'تكلفة الوحدة الجديدة عند الشراء = [(الكمية الحالية × التكلفة الحالية) + (كمية الشراء × سعر الشراء الجديد)] ÷ إجمالي الكمية. ربح البيع = (سعر البيع − تكلفة الوحدة وقت البيع) × الكمية المباعة.',
      fr: 'Nouveau CMP = [(Qté stock × Coût actuel) + (Qté achetée × Prix achat)] ÷ Qté totale. Profit vente = (Prix vente − CMP) × Qté vendue.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تتبع مخزون منتج بمتوسط تكلفة متغير',
        fr: 'Exemple pratique avec actualisation du coût moyen pondéré',
      },
      scenario: {
        ar: 'تاجر لديه 10 وحدات بتكلفة 1000 دج، ثم اشترى 10 وحدات إضافية بسعر 1200 دج وباع 5 وحدات بسعر 1500 دج.',
        fr: 'Un gérant possède 10 articles à 1 000 DZD, achète 10 nouveaux articles à 1 200 DZD puis vend 5 unités à 1 500 DZD.',
      },
      result: {
        ar: 'تحدّث الأداة تكلفة الوحدة آليا إلى 1100 دج، وتخصم 5 وحدات ليبقى 15 في المخزون مع تسجيل ربح بيع قدره 2000 دج (400 دج للوحدة).',
        fr: 'Le CMP passe à 1 100 DZD ; le stock restant affiche 15 unités et le journal de ventes enregistre 2 000 DZD de marge brute.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'هيكل جدولي المنتجات وسجل الحركات في مسير المخزون',
        fr: 'Structure des tableaux Stock et Journal des mouvements',
      },
      headers: [
        { ar: 'الجدول أو الحقل', fr: 'Tableau / Colonne' },
        { ar: 'المعلومات المعروضة', fr: 'Données suivies' },
        { ar: 'الفائدة التسييرية', fr: 'Utilité opérationnelle' },
      ],
      rows: [
        [
          { ar: 'جدول المنتجات والمخزون', fr: 'Tableau des produits' },
          { ar: 'المنتج، الكمية، تكلفة الوحدة، سعر البيع، الهامش، وقيمة المخزون', fr: 'Article, quantité, CMP, prix vente, marge, valeur totale' },
          { ar: 'اكتشاف نقص المخزون سريعا ومعرفة رأس المال المجمد', fr: 'Anticiper les ruptures et évaluer le stock immobilisé' },
        ],
        [
          { ar: 'سجل المشتريات والمبيعات', fr: 'Journal des mouvements' },
          { ar: 'التاريخ، الحركة، المنتج، الكمية، سعر الوحدة، الإجمالي، الربح، وملاحظة', fr: 'Date, type, produit, quantité, P.U, total, profit, note' },
          { ar: 'تتبع تاريخي دقيق للعمليات اليومية مع قابلية الطباعة', fr: 'Historique traçable et imprimable sur l’appareil' },
        ],
        [
          { ar: 'النسخ الاحتياطي JSON', fr: 'Sauvegarde JSON' },
          { ar: 'تصدير واستيراد قاعدة البيانات المحلية', fr: 'Export et réimportation manuelle' },
          { ar: 'حماية السجل من فقدان بيانات المتصفح أو تغيير الجهاز', fr: 'Prévention de perte lors d’un nettoyage de navigateur' },
        ],
      ],
    },
    tips: {
      ar: [
        'صدّر نسخة JSON احتياطية أسبوعيا لأن التخزين محلي داخل المتصفح وقد يمحى عند مسح بيانات التصفح.',
        'اضبط حد النقص لكل منتج لتظهر التنبيهات قبل نفاد السلعة من المحل.',
        'اربط نشاطك التجاري بأداة مولد الفواتير ومحول الأرقام إلى الحروف لإصدار فواتير العملاء.',
        'استعن بمحاسب معتمد لإعداد السجلات الضريبية الرسمية والتصريحات الجبائية القانونية.',
      ],
      fr: [
        'Exportez une sauvegarde JSON chaque semaine afin de ne jamais perdre vos données locales.',
        'Définissez un seuil d’alerte pertinent pour vos articles à rotation rapide.',
        'Utilisez en complément le générateur de factures et le convertisseur de dinars en toutes lettres.',
        'Faites valider vos bilans officiels par un comptable agréé conformément à la réglementation.',
      ],
    },
    extraFaqs: [],
  },

  'invoice-generator': {
    quickSummary: {
      targetAudience: {
        ar: 'التجار والمقاولون الذاتيون والشركات الصغيرة لإعداد الفواتير والشكلية بالدينار',
        fr: 'Commerçants, auto-entrepreneurs et PME éditant factures et proforma en DZD',
      },
      processingTime: {
        ar: 'حساب فوري للمجموع الفرعي وTVA وTTC مع طباعة PDF مباشرة',
        fr: 'Calcul automatique HT / TVA / TTC prêt à imprimer en PDF',
      },
      fees: {
        ar: 'مجاني بالكامل ويعمل داخل المتصفح دون تسجيل',
        fr: 'Gratuit côté navigateur sans inscription ni abonnement',
      },
      channel: {
        ar: 'نموذج فاتورة تفاعلي (بائع، عميل، بنود، ضريبة، وطباعة)',
        fr: 'Modèle de facture interactif (vendeur, client, lignes, TVA, PDF)',
      },
      keyRequirement: {
        ar: 'إدراج بيانات البائع والعميل والبيانات القانونية (NIF / RC / NIS) للاعتماد الضريبي',
        fr: 'Renseignement des lignes, taux TVA et mentions légales (NIF / RC) pour valeur fiscale',
      },
    },
    explanation: {
      ar: [
        'يتيح مولد الفواتير إنشاء فواتير تجارية وفواتير شكلية (Proforma) منظمة بالدينار الجزائري عبر واجهة سهلة التعديل: رقم الفاتورة، التاريخ، بيانات البائع، وبيانات العميل.',
        'يضم النموذج جدول بنود ديناميكيا يتضمن البيان (Désignation)، الكمية (Qte)، سعر الوحدة (P.U)، والمجموع (Total) مع إمكانية إضافة وحذف الأسطر، ويحسب آليا المجموع الفرعي HT وقيمة الرسم على القيمة المضافة TVA (%) ثم المبلغ الإجمالي النهائي TTC.',
        'تنبيه قانوني مهم: يساعد هذا النموذج على توليد فواتير مرتبة شكليا وجاهزة للطباعة أو الحفظ بصيغة PDF؛ ولكن لكي تعتبر الفاتورة وثيقة ضريبية رسمية ملزمة، يجب إدراج جميع البيانات القانونية المطلوبة في الجزائر وعلى رأسها رقم التعريف الجبائي (NIF) ورقم السجل التجاري (RC) ورقم التعريف الإحصائي (NIS) ومادة الضريبة (AI).',
        'ولاستكمال وثائقك التجارية بسلاسة، يتكامل المولد مع أداة تحويل المبلغ إلى الحروف (التفقيط) لتذييل الفاتورة بالعبارة الرسمية للمبلغ الصافي.'
      ],
      fr: [
        'Le générateur de factures permet d’établir rapidement des factures ou devis proforma en dinars algériens : numéro séquentiel, date d’émission, coordonnées du fournisseur et identification du client.',
        'Le tableau dynamique des prestations (Désignation, Quantité, Prix Unitaire, Total) recalcule automatiquement le sous-total HT, la TVA applicable (19 % ou 9 %) et le montant total TTC prêt pour impression ou export PDF.',
        'Avertissement légal indispensable : bien que ce modèle facilite la mise en forme soignée de vos documents, une facture n’acquiert pleine valeur fiscale en Algérie qu’à condition d’inclure toutes les mentions obligatoires (NIF, RC, NIS, article d’imposition et cachet/signature).',
        'Associez facilement votre facture à l’outil de conversion des montants en toutes lettres (DZD et centimes) pour rédiger l’arrêté de facture réglementaire.'
      ],
    },
    formulaTitle: {
      ar: 'معادلات الفاتورة التجارية واحتساب الضريبة TTC',
      fr: 'Formules de facturation HT, TVA et TTC',
    },
    formulaText: {
      ar: 'مجموع السطر = الكمية (Qte) × سعر الوحدة (P.U). المجموع الفرعي HT = مجموع الأسطر. قيمة TVA = المجموع الفرعي × (نسبة TVA ÷ 100). المبلغ الإجمالي TTC = المجموع الفرعي HT + قيمة TVA.',
      fr: 'Total ligne = Qté × P.U. Sous-total HT = Somme des lignes. Montant TVA = HT × (Taux TVA / 100). Net à payer TTC = HT + TVA.',
    },
    practicalExample: {
      title: {
        ar: 'مثال إعداد فاتورة خدمات أو توريد بضاعة بالدينار الجزائري',
        fr: 'Exemple de facture commerciale soumise à la TVA 19 %',
      },
      scenario: {
        ar: 'مؤسسة تدرج بندين بمجموع فرعي قدره 100,000 دج مع نسبة TVA مقدارها 19%.',
        fr: 'Une entreprise saisit deux lignes de prestations totalisant 100 000 DZD HT avec une TVA à 19 %.',
      },
      result: {
        ar: 'يعرض الجدول تلقائيا 19,000 دج كقيمة TVA و119,000 دج للمبلغ الإجمالي TTC، مع نسخ الصياغة الحرفية من أداة التفقيط قبل الحفظ بصيغة PDF.',
        fr: 'L’outil affiche 19 000 DZD de TVA et un total TTC de 119 000 DZD prêt à imprimer ou sauvegarder en PDF.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'ملخص عناصر الفاتورة والمتطلبات القانونية الأساسية',
        fr: 'Éléments du modèle de facture et mentions légales',
      },
      headers: [
        { ar: 'العنصر', fr: 'Élément' },
        { ar: 'الغرض الحسابي أو التنظيمي', fr: 'Rôle' },
        { ar: 'حالة الاعتماد الضريبي', fr: 'Exigence fiscale' },
      ],
      rows: [
        [
          { ar: 'بيانات البائع (NIF / RC / NIS / AI)', fr: 'Identité fournisseur (NIF / RC / NIS / AI)' },
          { ar: 'تحديد الصفة القانونية والجبائية للمصدر', fr: 'Identification fiscale officielle de l’émetteur' },
          { ar: 'إلزامي لاعتماد الفاتورة رسميا', fr: 'Obligatoire pour la conformité fiscale' },
        ],
        [
          { ar: 'جدول البنود (Qte × P.U)', fr: 'Tableau des désignations (Qté × P.U)' },
          { ar: 'تفصيل الكميات والأسعار الوحدوية', fr: 'Détail transparent des biens ou services' },
          { ar: 'يحسب المجموع الفرعي HT آليا', fr: 'Calcul automatique du HT' },
        ],
        [
          { ar: 'حساب TVA (%) والمجموع TTC', fr: 'TVA (%) et Total TTC' },
          { ar: 'إضافة الرسم حسب النسبة القانونية أو 0% للمعفى', fr: 'Application du taux légal ou exonération' },
          { ar: 'يفضل تذييله بالتفقيط عبر أداة تحويل الأرقام', fr: 'Compléter avec l’arrêté en toutes lettres DZD' },
        ],
      ],
    },
    tips: {
      ar: [
        'تحقق دائما من تدوين NIF ورقم السجل التجاري RC بدقة قبل ختم الفاتورة وتسليمها للعميل.',
        'استخدم أداة تحويل المبلغ إلى الحروف لكتابة المبلغ الإجمالي TTC خاليا من الأخطاء الإملائية.',
        'إذا كانت الفاتورة مسددة نقدا بمبلغ يتطلب طابع دمغة، راجع التزامات طابع المخالصة لدى مصالح الضرائب.',
        'احفظ نسخة PDF منظمة برقم تسلسلي وتاريخ واضح لتسهيل المراجعة مع محاسبك.',
      ],
      fr: [
        'N’omettez jamais vos identifiants fiscaux (NIF, RC, NIS, AI) avant d’émettre une facture définitive.',
        'Convertissez le montant TTC avec l’outil DZD en toutes lettres pour éviter toute ambiguïté.',
        'Conservez une numérotation chronologique continue et archivez chaque PDF généré.',
        'Consultez votre comptable concernant le droit de timbre applicable en cas de paiement en espèces.',
      ],
    },
    extraFaqs: [],
  },
};
