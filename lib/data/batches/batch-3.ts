import { SectorItem, RichGuideContent } from '../../types';

export const batch3Sectors: SectorItem[] = [
  {
    id: 'creg.gov',
    slug: 'creg.gov',
    category: 'energy_water',
    name: {
      ar: 'لجنة ضبط الكهرباء والغاز (CREG)',
      fr: "Commission de Régulation de l'Électricité et du Gaz (CREG)",
    },
    acronym: 'CREG',
    ministry: {
      ar: 'قطاع الطاقة والمناجم والطاقات المتجددة',
      fr: "Secteur de l'Énergie, des Mines et des Énergies Renouvelables",
    },
    description: {
      ar: 'الدليل الشامل لخدمات لجنة ضبط الكهرباء والغاز CREG في الجزائر: الاطلاع على التعريفة الرسمية للشرائح، محاكاة فاتورة الكهرباء والغاز، منصة إلتماس لإيداع الطعون وطلبات المعلومات، والتوظيف.',
      fr: "Guide complet des services numériques de la CREG en Algérie : grille officielle des tarifs d’électricité et de gaz par tranches, simulateur de facture Mouhakat, plateforme de recours Iltimess et demandes d’information.",
    },
    officialUrl: 'https://creg.gov.dz/',
    portalUrl: 'https://mouhakat.creg.dz/',
    iconName: 'Zap',
    isPopular: false,
    services: [
      {
        id: 'creg.gov-srv-1',
        title: {
          ar: 'محاكاة فاتورة الكهرباء والغاز (Mouhakat CREG)',
          fr: 'Simulateur Officiel de Facture (Mouhakat CREG)',
        },
        description: {
          ar: 'أداة رسمية لمحاكاة مبلغ الفاتورة الفصلية للكهرباء والغاز بدقة حسب الشرائح والتعريفة المعمول بها.',
          fr: 'Simulateur officiel permettant de calculer le montant estimatif de votre facture trimestrielle selon les tranches tarifaires.',
        },
        url: 'https://mouhakat.creg.dz/',
        isOnline: true,
      },
      {
        id: 'creg.gov-srv-2',
        title: {
          ar: 'منصة إلتماس لإيداع ومتابعة الطعون',
          fr: 'Plateforme Iltimess — Dépôt & Suivi des Recours',
        },
        description: {
          ar: 'بوابة إلكترونية لتقديم طعون المستهلكين والمتعاملين بشأن جودة التموين أو الفوترة أو شروط الربط بالشبكة.',
          fr: 'Guichet officiel permettant aux usagers et opérateurs de déposer un recours administratif en cas de litige énergétique.',
        },
        url: 'https://iltimess.creg.dz/register',
        isOnline: true,
      },
      {
        id: 'creg.gov-srv-3',
        title: {
          ar: 'طلب معلومة عبر منصة إلتماس (مواطن / مؤسسة)',
          fr: 'Demande d’Information Réglementaire (Iltimess)',
        },
        description: {
          ar: 'توجيه استفسار تقني أو تنظيمي إلى مصالح الضبط حول التراخيص الطاقوية أو حقوق المشترك.',
          fr: 'Service de demande d’information technique ou juridique destiné aux citoyens et investisseurs du secteur énergétique.',
        },
        url: 'https://iltimess.creg.dz/demande-information',
        isOnline: true,
      },
      {
        id: 'creg.gov-srv-4',
        title: {
          ar: 'التعريفة الرسمية للكهرباء والغاز في الجزائر',
          fr: 'Grille Tarifaire Officielle Électricité & Gaz',
        },
        description: {
          ar: 'استعراض جدول الشرائح الأربع للاستخدام المنزلي والتجاري والصناعي المعتمدة وطنيا.',
          fr: 'Consultation des quatre tranches de tarification réglementée pour les usages domestiques, tertiaires et industriels.',
        },
        url: 'https://creg.gov.dz/%d8%a7%d9%84%d8%aa%d8%b3%d8%b9%d9%8a%d8%b1%d8%a9/?lang=ar',
        isOnline: true,
      },
      {
        id: 'creg.gov-srv-5',
        title: {
          ar: 'فرص التوظيف لدى لجنة ضبط الكهرباء والغاز',
          fr: 'Recrutement & Appels à Candidatures CREG',
        },
        description: {
          ar: 'متابعة إعلانات المسابقات وعروض التوظيف المفتوحة لدى مصالح اللجنة.',
          fr: 'Rubrique officielle publiant les avis de recrutement et appels à compétences de la commission.',
        },
        url: 'https://creg.gov.dz/%D8%AA%D9%88%D8%B8%D9%8A%D9%81/',
        isOnline: true,
      },
      {
        id: 'creg.gov-srv-6',
        title: {
          ar: 'منصة الاتصال والموقع الرسمي لـ CREG',
          fr: 'Site Officiel & Contact CREG',
        },
        description: {
          ar: 'الموقع الرسمي ولوائح النصوص التنظيمية وقناة التواصل المباشر مع مصالح اللجنة.',
          fr: 'Portail principal regroupant textes réglementaires, rapports annuels et formulaire de contact institutionnel.',
        },
        url: 'https://creg.gov.dz/%d8%a7%d8%aa%d8%b5%d8%a7%d9%84/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مشتركو الكهرباء والغاز، المستهلكون المتضررون من أخطاء الفوترة، والمستثمرون في الطاقة',
        fr: 'Abonnés électricité/gaz, consommateurs en litige de facturation et opérateurs énergétiques',
      },
      processingTime: {
        ar: 'حساب فوري في أداة المحاكاة؛ دراسة الطعون الرسمية عبر إلتماس بعد استنفاد الشكوى لدى سونلغاز',
        fr: 'Simulation immédiate sur Mouhakat ; traitement des recours Iltimess après réclamation préalable chez Sonelgaz',
      },
      fees: {
        ar: 'خدمات الاستعلام والمحاكاة وإيداع الطعون عبر منصة إلتماس مجانية بالكامل',
        fr: 'L’accès au simulateur, aux tarifs et au dépôt de recours Iltimess est entièrement gratuit',
      },
      channel: {
        ar: 'منصة mouhakat.creg.dz، بوابة iltimess.creg.dz، والمقر المركزي للجنة',
        fr: 'Portails web mouhakat.creg.dz, iltimess.creg.dz et guichet de la CREG',
      },
      keyRequirement: {
        ar: 'نسخة من فاتورة سونلغاز والشكوى الأولية غير المحلولة عند رفع طعن على منصة إلتماس',
        fr: 'Référence de facture Sonelgaz et preuve de réclamation préalable pour tout recours Iltimess',
      },
    },
    requirements: [
      {
        label: {
          ar: 'استخدام محاكي الفاتورة الرسمي',
          fr: 'Simulation sur Mouhakat CREG',
        },
        value: {
          ar: 'تحديد نوع التعريفة (منزلي 54M أو تجاري)، قراءة استهلاك الكهرباء (kWh) والغاز (Th) من العداد',
          fr: 'Code tarifaire (domestique 54M, commercial) et index relevés en kWh et thermies (Th)',
        },
      },
      {
        label: {
          ar: 'شرط قبول الطعن في منصة إلتماس',
          fr: 'Recevabilité d’un recours Iltimess',
        },
        value: {
          ar: 'إثبات إيداع شكوى مكتوبة مسبقة لدى الوكالة التجارية لسونلغاز وعدم تلقي رد مرض خلال الآجال',
          fr: 'Justificatif d’une réclamation préalable adressée à Sonelgaz sans réponse satisfaisante',
        },
      },
      {
        label: {
          ar: 'الوثائق الثبوتية المرفقة للطعن',
          fr: 'Pièces jointes au dossier',
        },
        value: {
          ar: 'صورة الفاتورة محل النزاع، رقم العداد، ونسخة الشكوى المودعة بصيغة PDF',
          fr: 'Copie de la facture contestée, numéro de compteur et accusé de dépôt de réclamation en PDF',
        },
      },
      {
        label: {
          ar: 'طلب معلومة أو ترخيص طاقوي',
          fr: 'Demande d’information ou d’agrément',
        },
        value: {
          ar: 'تحديد صفة الطالب (مواطن أو مؤسسة) وموضوع الاستفسار القانوني أو التقني بدقة',
          fr: 'Identification du demandeur (particulier ou personne morale) et objet précis de la requête',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين دور لجنة CREG ودور شركة سونلغاز؟',
          fr: 'Quelle est la différence entre la CREG et Sonelgaz ?',
        },
        answer: {
          ar: 'سونلغاز هي الشركة الموزعة للكهرباء والغاز التي تصدر الفواتير وتنجز عمليات الربط، بينما تعد CREG هيئة ضبط مستقلة تراقب احترام التعريفات القانونية وجودة الخدمة وتفصل في الطعون كجهة عليا.',
          fr: 'Sonelgaz est l’opérateur de distribution et de facturation, tandis que la CREG est le régulateur indépendant qui fixe les règles tarifaires, contrôle la qualité de service et statue sur les recours.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تقديم شكوى مباشرة إلى منصة إلتماس دون المرور بسونلغاز؟',
          fr: 'Peut-on saisir directement la plateforme Iltimess sans réclamer chez Sonelgaz ?',
        },
        answer: {
          ar: 'يشترط التنظيم أولا تقديم شكوى أو تظلم لدى الوكالة التجارية لسونلغاز والحصول على وصل استلام؛ وفي حال بقاء النزاع قائما أو تأخر الرد يتم رفع الطعن عبر إلتماس.',
          fr: 'Non, la réglementation impose une démarche préalable auprès de votre agence Sonelgaz. En l’absence de solution, votre dossier devient recevable sur Iltimess.',
        },
      },
      {
        question: {
          ar: 'كيف أعرف سبب ارتفاع فاتورة الكهرباء والغاز عبر موقع CREG؟',
          fr: 'Comment vérifier le calcul d’une facture élevée via les outils de la CREG ?',
        },
        answer: {
          ar: 'أدخل مؤشر الاستهلاك الحقيقي الموجود في عدادك داخل منصة محاكاة الفاتورة (mouhakat.creg.dz) وقارن المبلغ الناتج وشرائح الحساب مع الفاتورة المستلمة.',
          fr: 'Saisissez vos index réels sur mouhakat.creg.dz : l’outil ventile automatiquement la consommation sur les 4 tranches officielles et calcule le montant exact TTC.',
        },
      },
      {
        question: {
          ar: 'هل تتوفر تعريفة مدعمة أو تخفيضات خاصة لولايات الجنوب؟',
          fr: 'Existe-t-il des tarifs spécifiques pour les wilayas du Sud ?',
        },
        answer: {
          ar: 'نعم، تتضمن جداول التعريفة الرسمية المنشورة على موقع CREG تخفيضات معتبرة على استهلاك الكهرباء في ولايات الجنوب والهضاب العليا لتغطية احتياجات التكييف الصيفي.',
          fr: 'Oui, la grille officielle publiée par la CREG prévoit une bonification tarifaire importante pour les ménages et agriculteurs des wilayas du Sud.',
        },
      },
    ],
  },
  {
    id: 'dgfp.gov',
    slug: 'dgfp.gov',
    category: 'ministries',
    name: {
      ar: 'المديرية العامة للوظيفة العمومية والإصلاح الإداري (DGFP)',
      fr: 'Direction Générale de la Fonction Publique et de la Réforme Administrative (DGFP)',
    },
    acronym: 'DGFP',
    ministry: {
      ar: 'الوزارة الأولى — الوظيفة العمومية والإصلاح الإداري',
      fr: 'Premier Ministère — Fonction Publique & Réforme Administrative',
    },
    description: {
      ar: 'دليل الخدمات الرقمية للمديرية العامة للوظيفة العمومية: الأرضية الرقمية للمعادلات الإدارية للشهادات، بوابة إشهار عروض التوظيف العمومي، والنصوص القانونية المنظمة للمسار المهني.',
      fr: 'Portail officiel de la Fonction Publique en Algérie (DGFP) : plateforme des équivalences administratives de diplômes, portail national des concours de recrutement public et recueil des textes statutaires.',
    },
    officialUrl: 'https://www.dgfp.gov.dz/',
    portalUrl: 'https://equivalence.dgfp.gov.dz/?page=home',
    iconName: 'Building2',
    isPopular: false,
    services: [
      {
        id: 'dgfp.gov-srv-1',
        title: {
          ar: 'الأرضية الرقمية للمعادلات الإدارية للشهادات',
          fr: 'Plateforme Numérique des Équivalences Administratives',
        },
        description: {
          ar: 'تقديم ومتابعة طلبات المعادلة الإدارية للشهادات الجامعية والتكوينية الأجنبية أو الوطنية حسب التخصص.',
          fr: 'Dépôt et suivi en ligne des demandes d’équivalence administrative des diplômes pour les concours et recrutements publics.',
        },
        url: 'https://equivalence.dgfp.gov.dz/?page=home',
        isOnline: true,
      },
      {
        id: 'dgfp.gov-srv-2',
        title: {
          ar: 'الأرضية الرقمية لإشهار عروض التوظيف العمومي',
          fr: 'Portail National des Concours de la Fonction Publique',
        },
        description: {
          ar: 'الاطلاع اليومي على مسابقات التوظيف على أساس الاختبار أو الشهادة في الإدارات والمؤسسات العمومية.',
          fr: 'Publication officielle des avis de concours sur titres, sur épreuves et examens professionnels de la fonction publique.',
        },
        url: 'http://www.concours-fonction-publique.gov.dz/',
        isOnline: true,
      },
      {
        id: 'dgfp.gov-srv-3',
        title: {
          ar: 'الموقع الرسمي للمديرية العامة للوظيفة العمومية',
          fr: 'Site Officiel de la DGFP',
        },
        description: {
          ar: 'البوابة المركزية لنشر التعليمات الوزارية، الترقية، والتنظيم الهيكلي للمصالح العمومية.',
          fr: 'Portail institutionnel regroupant circulaires d’application, arrêtés statutaires et actualités administratives.',
        },
        url: 'https://www.dgfp.gov.dz/',
        isOnline: true,
      },
      {
        id: 'dgfp.gov-srv-4',
        title: {
          ar: 'مكتبة النصوص القانونية والتنظيمية للوظيفة العمومية',
          fr: 'Recueil des Textes Législatifs et Réglementaires',
        },
        description: {
          ar: 'تصفح وتحميل القوانين الأساسية الخاصة، الأمر 06-03، ومراسيم التوظيف والترقية والإجازات.',
          fr: 'Accès direct au statut général (ordonnance 06-03), statuts particuliers, grilles indiciaires et décrets d’application.',
        },
        url: 'http://www.concours-fonction-publique.gov.dz/?page=legal',
        isOnline: true,
      },
      {
        id: 'dgfp.gov-srv-5',
        title: {
          ar: 'التواصل مع مصالح الوظيفة العمومية',
          fr: 'Contact & Assistance Fonction Publique',
        },
        description: {
          ar: 'توجيه الاستفسارات حول المسابقات وعروض التوظيف المنشورة وطلبات التوضيح القانوني.',
          fr: 'Formulaire de contact pour toute question relative aux avis de concours publiés et démarches de recrutement.',
        },
        url: 'http://www.concours-fonction-publique.gov.dz/?page=contact',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المترشحون لمسابقات التوظيف العمومي، الموظفون العموميون، وحاملو الشهادات الوطنية والأجنبية',
        fr: 'Candidats aux concours publics, fonctionnaires titulaires et titulaires de diplômes nationaux ou étrangers',
      },
      processingTime: {
        ar: 'إعلان فوري للعروض على البوابة؛ دراسة ملفات المعادلة الإدارية في آجال تتراوح بين 15 و45 يوما',
        fr: 'Publication immédiate des concours ; instruction des dossiers d’équivalence administrative en 15 à 45 jours',
      },
      fees: {
        ar: 'كافة الخدمات الرقمية للمعادلة وإشهار المسابقات والاطلاع على النصوص مجانية بالكامل',
        fr: 'L’inscription aux portails d’équivalence, la consultation des concours et les textes officiels sont gratuits',
      },
      channel: {
        ar: 'منصات equivalence.dgfp.gov.dz وconcours-fonction-publique.gov.dz والمفتشيات الولائية',
        fr: 'Portails web DGFP et inspections de la fonction publique de wilaya',
      },
      keyRequirement: {
        ar: 'الشهادة الأصلية، كشوف النقاط، وملحق الدبلوم عند طلب المعادلة الإدارية في التخصص',
        fr: 'Copie du diplôme, relevés de notes et programme de formation pour toute demande d’équivalence',
      },
    },
    requirements: [
      {
        label: {
          ar: 'ملف المعادلة الإدارية للشهادات',
          fr: 'Dossier d’équivalence administrative',
        },
        value: {
          ar: 'شهادة النجاح أو الدبلوم، كشوف النقاط لكامل المسار، وبطاقة التعريف الوطنية بصيغة PDF واضحة',
          fr: 'Diplôme, relevés de notes de l’ensemble du cursus et pièce d’identité numérisés en PDF lisible',
        },
      },
      {
        label: {
          ar: 'الترشح لمسابقات الوظيف العمومي',
          fr: 'Candidature aux concours publics',
        },
        value: {
          ar: 'طلب خطي، استمارة معلومات (رقم 1 على أساس الشهادة أو الاختبار)، نسخة الدبلوم وبطاقة التعريف',
          fr: 'Demande manuscrite, fiche de renseignements n° 1, copie du diplôme et CNIBE déposées auprès de l’organisme recruteur',
        },
      },
      {
        label: {
          ar: 'الشهادات الأجنبية المودعة للمعادلة',
          fr: 'Cas des diplômes étrangers',
        },
        value: {
          ar: 'الحصول مسبقا على المعادلة الأكاديمية من وزارة التعليم العالي قبل طلب المعادلة الإدارية في التوظيف',
          fr: 'Obtention préalable de l’équivalence académique (MESRS) avant la demande d’équivalence administrative DGFP',
        },
      },
      {
        label: {
          ar: 'حساب المترشح وتتبع الإشعارات',
          fr: 'Suivi numérique du dossier',
        },
        value: {
          ar: 'بريد إلكتروني فعال ورقم هاتف لتلقي إشعارات استكمال الوثائق أو جاهزية مقرر المعادلة',
          fr: 'Adresse e-mail active pour recevoir les demandes de compléments ou la décision finale d’équivalence',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين المعادلة الأكاديمية والمعادلة الإدارية في الوظيفة العمومية؟',
          fr: 'Quelle est la différence entre équivalence académique (MESRS) et équivalence administrative (DGFP) ?',
        },
        answer: {
          ar: 'المعادلة الأكاديمية تصدرها وزارة التعليم العالي لتثبيت مستوى الشهادة الأجنبية مقارنة بالنظام الوطني، بينما تحدد المعادلة الإدارية من DGFP الرتبة والتخصص المطابقين للتوظيف في المؤسسات العمومية.',
          fr: 'L’équivalence académique du MESRS reconnaît le grade universitaire d’un diplôme étranger, tandis que l’équivalence administrative de la DGFP détermine le corps et le grade d’accès dans la fonction publique.',
        },
      },
      {
        question: {
          ar: 'هل يتم التسجيل في مسابقات الوظيف العمومي مباشرة عبر موقع concours-fonction-publique؟',
          fr: 'L’inscription aux concours se fait-elle directement sur concours-fonction-publique.gov.dz ?',
        },
        answer: {
          ar: 'المنصة مخصصة للإشهار الرسمي عن المسابقات وتفاصيلها والشروط والآجال، أما إيداع ملفات الترشح فيتم لدى المؤسسة أو الإدارة المنظمة للمسابقة أو عبر منصتها الخاصة المذكورة في الإعلان.',
          fr: 'Ce portail assure la publicité légale officielle des postes ouverts. Le dépôt des candidatures s’effectue ensuite directement auprès de l’administration organisatrice selon les modalités de l’avis.',
        },
      },
      {
        question: {
          ar: 'كم تدوم مدة صلاحية استمارة التوظيف في الإدارات العمومية؟',
          fr: 'Quelle est la durée légale d’ouverture des inscriptions après publication de l’avis ?',
        },
        answer: {
          ar: 'تفتح آجال إيداع ملفات الترشح عادة لمدة 15 يوم عمل ابتداء من تاريخ أول إعلان منشور في الصحافة أو على البوابة الرقمية للوظيفة العمومية.',
          fr: 'Le délai réglementaire de dépôt des dossiers est généralement fixé à 15 jours ouvrables à compter de la première publication de l’avis de recrutement.',
        },
      },
      {
        question: {
          ar: 'أين أجد نموذج استمارة المشاركة رقم 1 في مسابقات التوظيف؟',
          fr: 'Où télécharger la fiche de renseignements n° 1 ou n° 2 pour un concours ?',
        },
        answer: {
          ar: 'توفر البوابة الرسمية للمديرية العامة للوظيفة العمومية نماذج الاستمارات المعتمدة للتحميل المباشر بصيغة PDF ضمن ركن النصوص والنماذج.',
          fr: 'Les modèles officiels des fiches de renseignements (n° 1 et n° 2) sont disponibles en téléchargement libre sur le portail dgfp.gov.dz.',
        },
      },
    ],
  },
  {
    id: 'dgsn',
    slug: 'dgsn',
    category: 'justice_interior',
    name: {
      ar: 'المديرية العامة للأمن الوطني — الشرطة الجزائرية (DGSN)',
      fr: 'Direction Générale de la Sûreté Nationale (DGSN)',
    },
    acronym: 'DGSN',
    ministry: {
      ar: 'وزارة الداخلية والجماعات المحلية والنقل',
      fr: "Ministère de l'Intérieur, des Collectivités Locales et des Transports",
    },
    description: {
      ar: 'الدليل الشامل للخدمات الرقمية للشرطة الجزائرية (DGSN): منصة التصريح الإلكتروني بضياع الوثائق، تطبيق ألو الشرطة (1548 / 17)، خدمة الإدلاء بشهادة عن بعد، مسابقات التوظيف، والدليل الهاتفي.',
      fr: "Guide complet des services numériques de la Police Algérienne (DGSN) : déclaration en ligne de perte de documents, application Allo Chorta, déposition de témoignage à distance, recrutement et annuaire d’urgence.",
    },
    officialUrl: 'https://www.dgsn.dz/',
    portalUrl: 'https://www.dgsn.dz/e-declaration/',
    iconName: 'ShieldAlert',
    isPopular: true,
    services: [
      {
        id: 'dgsn-srv-1',
        title: {
          ar: 'منصة التصريح الإلكتروني بضياع الوثائق',
          fr: 'Plateforme E-Déclaration de Perte de Documents',
        },
        description: {
          ar: 'تسجيل تصريح مسبق بضياع بطاقة التعريف أو جواز السفر أو رخصة السياقة أو البطاقة الرمادية عن بعد.',
          fr: 'Pré-déclaration en ligne de perte de pièces officielles (CNIBE, passeport, permis, carte grise) avant validation en sûreté.',
        },
        url: 'https://www.dgsn.dz/e-declaration/',
        isOnline: true,
      },
      {
        id: 'dgsn-srv-2',
        title: {
          ar: 'تطبيق ألو الشرطة الرسمي (Allo Chorta)',
          fr: 'Application Mobile Officielle Allo Chorta',
        },
        description: {
          ar: 'إرسال بلاغات فورية مدعومة بالصور والموقع الجغرافي لمصالح الأمن الوطني والتواصل في حالات الطوارئ.',
          fr: 'Application officielle permettant de signaler incidents, infractions ou dangers avec géolocalisation et photos.',
        },
        url: 'https://play.google.com/store/apps/details?id=allochorta.algeriepolice.dz&hl=ar',
        isOnline: true,
      },
      {
        id: 'dgsn-srv-3',
        title: {
          ar: 'خدمة الإدلاء بشهادة عن بعد (DGSN)',
          fr: 'Service en Ligne de Déposition de Témoignage',
        },
        description: {
          ar: 'قناة سرية وآمنة للمواطنين لتقديم شهادات أو معلومات تفيد في التحقيقات الجارية أو البحث عن المفقودين.',
          fr: 'Formulaire confidentiel permettant aux citoyens d’apporter un témoignage utile aux enquêtes policières.',
        },
        url: 'https://www.dgsn.dz/?-%D8%A5%D8%AF%D9%84%D8%A7%D8%A1-%D8%A8%D8%B4%D9%87%D8%A7%D8%AF%D8%A9,583-',
        isOnline: true,
      },
      {
        id: 'dgsn-srv-4',
        title: {
          ar: 'خدمة البحث في فائدة العائلات',
          fr: 'Avis de Recherche dans l’Intérêt des Familles',
        },
        description: {
          ar: 'الاطلاع على بلاغات الأشخاص المفقودين المنشورة رسميا والمساهمة في تحديد مكانهم بالتبليغ الأمني.',
          fr: 'Consultation des avis officiels de personnes disparues et contribution citoyenne à leur localisation.',
        },
        url: 'https://www.dgsn.dz/?-%D8%A8%D8%AD%D8%AB-%D9%81%D9%8A-%D9%81%D8%A7%D8%A6%D8%AF%D8%A9-',
        isOnline: true,
      },
      {
        id: 'dgsn-srv-5',
        title: {
          ar: 'الاستبيان الوطني حول الشعور بالأمن وجودة الخدمة',
          fr: 'Enquête Nationale sur la Sécurité et la Qualité de Service',
        },
        description: {
          ar: 'مشاركة المواطن في تقييم أداء مصالح الشرطة وتقديم المقترحات لتطوير الخدمة العمومية.',
          fr: 'Espace d’évaluation participative permettant aux citoyens de noter et d’améliorer les prestations policières.',
        },
        url: 'https://www.algeriepolice.dz/qnss/survey',
        isOnline: true,
      },
      {
        id: 'dgsn-srv-6',
        title: {
          ar: 'استمارة تقييم الخدمة الشرطية (QSC)',
          fr: 'Questionnaire Qualité du Service Policier (QSC)',
        },
        description: {
          ar: 'تقييم استقبال المواطنين على مستوى مقرات الأمن الحضري والدوائر والحدود عبر الإنترنت.',
          fr: 'Sondage permanent dédié à la qualité d’accueil dans les commissariats et postes de sûreté.',
        },
        url: 'https://www.algeriepolice.dz/qsc',
        isOnline: true,
      },
      {
        id: 'dgsn-srv-7',
        title: {
          ar: 'مسابقات توظيف الشرطة وإعلانات الضباط والأعوان',
          fr: 'Recrutement Police Algérienne (Concours DGSN)',
        },
        description: {
          ar: 'متابعة إعلانات التوظيف وشروط القبول واستمارات المشاركة لصفوف الأمن الوطني ذكورا وإناثا.',
          fr: 'Publication des campagnes de recrutement des officiers et agents de police avec dossiers réglementaires.',
        },
        url: 'https://www.dgsn.dz/24395',
        isOnline: true,
      },
      {
        id: 'dgsn-srv-8',
        title: {
          ar: 'الدليل الهاتفي لمصالح الأمن الوطني الولائية',
          fr: 'Annuaire Téléphonique des Services de Police',
        },
        description: {
          ar: 'أرقام وعناوين أمن الولايات ومراكز الأمن الحضري وعناصر التواصل عبر كافة التراب الوطني.',
          fr: 'Coordonnées et numéros d’appel des sûretés de wilayas et commissariats à travers le pays.',
        },
        url: 'https://www.dgsn.dz/?-%D8%AF%D9%84%D9%8A%D9%84-',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون والمقيمون والزوار في المناطق الحضرية، والمترشحون لمسابقات الأمن الوطني',
        fr: 'Citoyens, résidents, usagers urbains et candidats aux concours de la Sûreté Nationale',
      },
      processingTime: {
        ar: 'تدخل فوري عبر الرقمين 17 و1548 وتطبيق ألو الشرطة؛ تسليم شهادة الضياع فور التثبت في المقر',
        fr: 'Intervention immédiate au 17 / 1548 ; récépissé de perte délivré rapidement après validation en commissariat',
      },
      fees: {
        ar: 'كافة المكالمات إلى أرقام النجدة والتبليغات عبر المنصات الرقمية مجانية تماما',
        fr: 'Tous les appels d’urgence et téléservices DGSN sont 100 % gratuits',
      },
      channel: {
        ar: 'الأرقام الخضراء 17 و1548 و104، موقع dgsn.dz، تطبيق ألو الشرطة، ومقرات الأمن الحضري',
        fr: 'Numéros verts 17 / 1548 / 104, portail dgsn.dz, app Allo Chorta et commissariats de secteur',
      },
      keyRequirement: {
        ar: 'معلومات الهوية الكاملة عند التصريح بالضياع، وصورة أو موقع الحادث عند الإبلاغ عبر التطبيق',
        fr: 'Identité complète pour une déclaration de perte ; localisation et détails factuels pour un signalement',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التصريح بضياع وثائق رسمية',
          fr: 'Déclaration de perte de documents',
        },
        value: {
          ar: 'تعبئة استمارة e-declaration بمعلومات الوثيقة الضائعة وتقديم بطاقة ثبوتية أخرى في مقر الأمن المختص',
          fr: 'Remplir le formulaire e-declaration en ligne puis présenter une autre pièce d’identité au commissariat',
        },
      },
      {
        label: {
          ar: 'التبليغ العاجل والنجدة (17 / 1548 / 104)',
          fr: 'Appels d’urgence et protection',
        },
        value: {
          ar: 'الاتصال المجاني من أي هاتف وتحديد العنوان الدقيق؛ الرقم 104 مخصص للاختطاف وحماية الطفولة',
          fr: 'Appel gratuit 24/7 depuis tout téléphone (17 urgence, 1548 écoute, 104 alerte enlèvement)',
        },
      },
      {
        label: {
          ar: 'توظيف الضباط والأعوان في DGSN',
          fr: 'Concours de recrutement DGSN',
        },
        value: {
          ar: 'الجنسية الجزائرية، الشهادة المطلوبة حسب الرتبة، اللياقة البدنية والبصرية، واستيفاء شرط السن القانوني',
          fr: 'Nationalité algérienne, diplôme requis selon le grade, aptitude physique/visuelle et limite d’âge réglementaire',
        },
      },
      {
        label: {
          ar: 'التبليغ عبر تطبيق ألو الشرطة',
          fr: 'Signalement via Allo Chorta',
        },
        value: {
          ar: 'حساب مفعّل على التطبيق مع تفعيل خدمة تحديد الموقع GPS عند التقاط صورة أو بلاغ مروري/أمني',
          fr: 'Application installée avec localisation GPS activée pour transmettre un signalement géolocalisé',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يكفي التصريح الإلكتروني بضياع الوثيقة أم يجب التوجه إلى مركز الشرطة؟',
          fr: 'La pré-déclaration de perte en ligne dispense-t-elle du passage au commissariat ?',
        },
        answer: {
          ar: 'تساعد منصة e-declaration على حجز بياناتك وتحضير الملف إلكترونيا لتسريع الإجراء، غير أنه يجب التقدم لأقرب مقر أمن حضري لاستلام شهادة الضياع الرسمية الممضاة والمختومة المطلوبة لدى البلدية أو البنوك.',
          fr: 'La plateforme e-declaration prépare et accélère votre dossier, mais un passage rapide au commissariat territorialement compétent reste nécessaire pour retirer l’attestation de perte signée et cachetée.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين الرقم 17 والرقم 1548 والرقم 104 لدى الأمن الوطني؟',
          fr: 'Quelle est la différence entre les numéros 17, 1548 et 104 de la Police ?',
        },
        answer: {
          ar: 'الرقم 17 مخصص لحالات النجدة الأمنية والتدخل السريع، والرقم الأخضر 1548 هو خط الاستماع والتبليغ عن المخالفات والاستعلام، أما الرقم 104 فهو خط خاص بالتبليغ الفوري عن حالات الاختطاف أو اختفاء الأطفال.',
          fr: 'Le 17 est dédié aux interventions d’urgence immédiates, le 1548 à l’écoute et aux signalements non urgents, et le 104 aux alertes enlèvement et protection des mineurs.',
        },
      },
      {
        question: {
          ar: 'هل تحفظ هوية المواطن عند استخدام خدمة الإدلاء بشهادة أو تطبيق ألو الشرطة؟',
          fr: 'L’identité du citoyen reste-t-elle confidentielle lors d’un témoignage en ligne ?',
        },
        answer: {
          ar: 'نعم، تتعامل مصالح الأمن الوطني مع الشهادات والمعلومات الواردة عبر القنوات الرقمية الرسمية وفق ضوابط السرية المهنية وحماية الشهود والمبلغين.',
          fr: 'Oui, toutes les informations et témoignages transmis via les canaux officiels de la DGSN sont traités dans la plus stricte confidentialité.',
        },
      },
      {
        question: {
          ar: 'أين يمكنني متابعة نتائج وشروط مسابقات التوظيف في الشرطة الجزائرية؟',
          fr: 'Où consulter les avis et conditions des concours de recrutement de la DGSN ?',
        },
        answer: {
          ar: 'تنشر كافة المسابقات الوطنية لرتب أعوان الشرطة والمفتشين وضباط الشرطة حصريا في الموقع الرسمي dgsn.dz وصفحات الاتصال الموثقة التابعة للمديرية العامة.',
          fr: 'Les avis officiels, conditions d’âge, diplômes exigés et formulaires d’inscription sont publiés exclusivement sur dgsn.dz.',
        },
      },
    ],
  },
  {
    id: 'djezzy',
    slug: 'djezzy',
    category: 'telecom',
    name: {
      ar: 'جازي للاتصالات (Djezzy Algérie)',
      fr: 'Opérateur Mobile Djezzy Algérie',
    },
    acronym: 'DJEZZY',
    ministry: {
      ar: 'متعامل هاتف نقال معتمد (تحت رقابة ARPCE)',
      fr: 'Opérateur Télécom Agréé (Régulé par l’ARPCE)',
    },
    description: {
      ar: 'الدليل الشامل لخدمات جازي الرقمية في الجزائر: تعبئة الرصيد ودفع الفواتير بالبطاقة الذهبية وCIB، تطبيق Djezzy App لتفعيل باقات الإنترنت، تسيير شريحة eSIM، والرموز المختصرة.',
      fr: "Guide complet des services numériques de Djezzy Algérie : rechargement de crédit et paiement de factures par carte Edahabia ou CIB, application Djezzy App, activation d’offres internet, eSIM et codes USSD.",
    },
    officialUrl: 'https://www.djezzy.dz/',
    portalUrl: 'https://moncompte.djezzy.dz/ar/guest/recharge',
    iconName: 'Smartphone',
    isPopular: false,
    services: [
      {
        id: 'djezzy-srv-1',
        title: {
          ar: 'تعبئة الرصيد ودفع الفواتير بالبطاقة الذهبية وCIB',
          fr: 'Rechargement & Paiement Factures en Ligne (Edahabia/CIB)',
        },
        description: {
          ar: 'شحن رصيد الفليكسي أو تسديد فواتير الاشتراك الشهري دون تسجيل دخول مسبق عبر بوابة الزوار الرسمية.',
          fr: 'Rechargement instantané de crédit ou règlement de facture postpayée par carte bancaire ou Edahabia sans authentification.',
        },
        url: 'https://moncompte.djezzy.dz/ar/guest/recharge',
        isOnline: true,
      },
      {
        id: 'djezzy-srv-2',
        title: {
          ar: 'تطبيق جازي الرسمي (Djezzy App)',
          fr: 'Application Mobile Officielle Djezzy App',
        },
        description: {
          ar: 'مراقبة الرصيد وحجم البيانات المتبقي، تفعيل عروض الدوبل والإنترنت، وكسب نقاط الولاء والهدايا.',
          fr: 'Suivi en temps réel de la consommation data et voix, achat de forfaits personnalisés et gestion du compte fidélité.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.djezzy.internet',
        isOnline: true,
      },
      {
        id: 'djezzy-srv-3',
        title: {
          ar: 'الموقع الرسمي لجازي (العروض والوكالات وeSIM)',
          fr: 'Portail Officiel Djezzy (Offres, Agences & eSIM)',
        },
        description: {
          ar: 'استعراض عروض الدفع المسبق والبعدي، الشرائح الإلكترونية eSIM، مواقع المراكز التجارية، وخدمة الزبائن.',
          fr: 'Découverte des forfaits prépayés/postpayés, informations eSIM, localisateur de boutiques et espace entreprises.',
        },
        url: 'https://www.djezzy.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مشتركو خطوط جازي للدفع المسبق، الاشتراكات الشهرية، والمؤسسات',
        fr: 'Abonnés Djezzy prépayés, forfaits postpayés et clients entreprises',
      },
      processingTime: {
        ar: 'تعبئة الرصيد وتفعيل باقات الإنترنت والرد على الفواتير بشكل فوري ومستمر على مدار الساعة',
        fr: 'Crédit et forfaits activés instantanément 24 heures sur 24 après validation du paiement',
      },
      fees: {
        ar: 'التعبئة الإلكترونية وتطبيق Djezzy App مجانيان دون أي عمولة إضافية على القيمة المشتراة',
        fr: 'Zéro commission supplémentaire lors du rechargement en ligne par carte Edahabia ou CIB',
      },
      channel: {
        ar: 'بوابة moncompte.djezzy.dz، تطبيق Djezzy App، الرمز *720#، ومراكز الخدمات التجارية',
        fr: 'Portail moncompte.djezzy.dz, application Djezzy App, code *720# et agences Djezzy',
      },
      keyRequirement: {
        ar: 'رقم هاتف جازي نشط وبطاقة الذهبية أو CIB مفعلة؛ وبطاقة التعريف البيومترية في الوكالة لتغيير الشريحة',
        fr: 'Numéro Djezzy actif et carte Edahabia/CIB pour le e-paiement ; CNIBE en boutique pour remplacement SIM',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التعبئة الإلكترونية عبر الإنترنت',
          fr: 'Rechargement en ligne E-Flexy',
        },
        value: {
          ar: 'رقم الهاتف المراد شحنه (07xx)، مبلغ التعبئة، وبطاقة الذهبية أو CIB مع رمز التأكيد SMS OTP',
          fr: 'Numéro Djezzy cible (07xx), montant souhaité et carte Edahabia/CIB avec validation OTP par SMS',
        },
      },
      {
        label: {
          ar: 'الدخول لتطبيق Djezzy App',
          fr: 'Connexion à Djezzy App',
        },
        value: {
          ar: 'شريحة جازي نشطة في الهاتف لتلقي رمز التحقق السريع عبر رسالة نصية وتفعيل الجلسة',
          fr: 'Ligne Djezzy active pour recevoir le code de vérification SMS lors de la première connexion',
        },
      },
      {
        label: {
          ar: 'استبدال الشريحة الضائعة أو طلب eSIM',
          fr: 'Remplacement SIM ou activation eSIM',
        },
        value: {
          ar: 'الحضور الشخصي لصاحب الخط المسجل بالوكالة التجارية مرفوقا ببطاقة التعريف الوطنية البيومترية',
          fr: 'Présence du titulaire de la ligne en agence commerciale muni de sa CNIBE originale',
        },
      },
      {
        label: {
          ar: 'الرموز المختصرة الأساسية (USSD)',
          fr: 'Codes USSD essentiels',
        },
        value: {
          ar: 'الرمز *710# لمعرفة الرصيد، *720# للعروض والإنترنت، و*99# لمعرفة رقم الهاتف، و777 لخدمة الزبائن',
          fr: 'Composez *710# (solde), *720# (forfaits internet), *99# (numéro) et 777 (service client)',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أشحن رصيد جازي عبر الإنترنت باستخدام البطاقة الذهبية أو CIB؟',
          fr: 'Comment recharger ma ligne Djezzy en ligne avec Edahabia ou CIB ?',
        },
        answer: {
          ar: 'ادخل إلى صفحة moncompte.djezzy.dz/ar/guest/recharge، اكتب رقم جازي الخاص بك مرتين، حدد المبلغ أو الباقة المطلوبة، ثم اختر طريقة الدفع (الذهبية أو CIB) وأكد العملية برمز SMS.',
          fr: 'Rendez-vous sur moncompte.djezzy.dz/ar/guest/recharge, saisissez votre numéro deux fois, choisissez le montant et réglez via SATIM (CIB) ou Algérie Poste (Edahabia) sans aucun frais additionnel.',
        },
      },
      {
        question: {
          ar: 'كيف أوقف الاشتراك التلقائي في العروض أو خدمات القيمة المضافة؟',
          fr: 'Comment désactiver le renouvellement automatique ou les services à valeur ajoutée ?',
        },
        answer: {
          ar: 'افتح تطبيق Djezzy App وانتقل إلى إدارة اشتراكاتي لإلغاء التجديد التلقائي لأي خدمة، أو اطلب الرمز *720# واتبع قائمة إلغاء العروض، أو تواصل مع المصلحة على 777.',
          fr: 'Accédez à la rubrique « Mes abonnements » dans Djezzy App pour stopper le renouvellement automatique, ou utilisez le menu USSD *720# ou appelez le 777.',
        },
      },
      {
        question: {
          ar: 'هل يمكن الحصول على شريحة إلكترونية eSIM لدى جازي؟',
          fr: 'Djezzy propose-t-elle la carte virtuelle eSIM en Algérie ?',
        },
        answer: {
          ar: 'نعم، تتوفر خدمة eSIM في المراكز التجارية لجازي للهواتف الداعمة للتقنية؛ يكفي التقدم ببطاقة التعريف البيومترية لمسح رمز QR وتفعيل الخط رقميا.',
          fr: 'Oui, l’eSIM est disponible dans les boutiques Djezzy pour les smartphones compatibles : un QR code vous est remis sur présentation de votre CNIBE.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا لم يصل الرصيد بعد اقتطاع المبلغ من البطاقة الذهبية؟',
          fr: 'Que faire si le crédit n’arrive pas après un débit bancaire ou postal ?',
        },
        answer: {
          ar: 'احتفظ برقم المعاملة من وصل الدفع الإلكتروني، وفي حال عدم وصول التعبئة خلال 30 دقيقة اتصل بخدمة الزبائن 777 مع رقم المرجع أو راجع بنكك لإلغاء الاقتطاع المعلق آليا.',
          fr: 'Conservez la référence de transaction du reçu SATIM/Edahabia : si la ligne n’est pas créditée sous 30 minutes, contactez le 777 avec ce justificatif.',
        },
      },
    ],
  },
  {
    id: 'douane',
    slug: 'douane',
    category: 'finance_economy',
    name: {
      ar: 'المديرية العامة للجمارك الجزائرية ومنصة ALCES',
      fr: 'Direction Générale des Douanes Algériennes & Portail ALCES',
    },
    acronym: 'DOUANE',
    ministry: {
      ar: 'وزارة المالية — المديرية العامة للجمارك',
      fr: 'Ministère des Finances — Direction Générale des Douanes',
    },
    description: {
      ar: 'الدليل الشامل للخدمات الرقمية للجمارك الجزائرية: النظام المعلوماتي ALCES، التسجيل الفردي وتسجيل الشركات، محاكي احتساب الحقوق والرسوم عند اقتناء سيارة، والمعلومة التعريفية الملزمة RTC.',
      fr: 'Guide complet des téléservices douaniers en Algérie : système d’information ALCES, inscription des particuliers et entreprises, simulateur officiel de droits et taxes pour l’importation de véhicules et Renseignement Tarifaire Contraignant (RTC).',
    },
    officialUrl: 'https://www.douane.gov.dz/?lang=ar',
    portalUrl: 'https://alces.douane.gov.dz/main',
    iconName: 'Globe',
    isPopular: true,
    services: [
      {
        id: 'douane-srv-1',
        title: {
          ar: 'البوابة الرقمية للجمارك الجزائرية (ALCES Douanes)',
          fr: 'Système d’Information Douanier ALCES',
        },
        description: {
          ar: 'الواجهة الموحدة لتقديم التصريحات الجمركية عن بعد، تتبع المعاملات، والتواصل الرقمي مع المصالح الجمركية.',
          fr: 'Portail unifié des opérations douanières dématérialisées : télédéclarations, suivi des dossiers et formalités en ligne.',
        },
        url: 'https://alces.douane.gov.dz/login',
        isOnline: true,
      },
      {
        id: 'douane-srv-2',
        title: {
          ar: 'محاكاة التعريفة الجمركية عند استيراد واقتناء سيارة',
          fr: 'Simulateur Officiel de Droits de Douane Véhicules',
        },
        description: {
          ar: 'أداة رسمية لتقدير الحقوق الجمركية والضرائب المستحقة على السيارات المستوردة حسب القيمة والنوع.',
          fr: 'Calculateur officiel permettant d’estimer les droits et taxes douaniers applicables lors de l’importation d’un véhicule.',
        },
        url: 'https://alces.douane.gov.dz/pot/mp/vhcl/pot0200-q1',
        isOnline: true,
      },
      {
        id: 'douane-srv-3',
        title: {
          ar: 'التسجيل الفردي للمواطن في منصة ALCES',
          fr: 'Inscription Individuelle Particuliers (ALCES)',
        },
        description: {
          ar: 'فتح حساب فردي للمواطن والمقيم بالخارج لإتمام تصريحات استيراد السيارات أو الأمتعة الشخصية إلكترونيا.',
          fr: 'Création d’un espace particulier pour effectuer en ligne les formalités de véhicule, changement de résidence (CCR) ou effets personnels.',
        },
        url: 'https://alces.douane.gov.dz/pot/mp/psnuse/pot0001-s1',
        isOnline: true,
      },
      {
        id: 'douane-srv-4',
        title: {
          ar: 'تسجيل الشركات والمستوردين في منصة ALCES',
          fr: 'Inscription des Entreprises & Opérateurs (ALCES)',
        },
        description: {
          ar: 'تسجيل المتعاملين الاقتصاديين والوكلاء المعتمدين لدى الجمارك لمتابعة عمليات التصدير والاستيراد.',
          fr: 'Enrôlement des sociétés importatrices, exportatrices et commissionnaires en douane agréés sur ALCES.',
        },
        url: 'https://alces.douane.gov.dz/pot/mp/comgmt/pot0003-s1?menuParam=use',
        isOnline: true,
      },
      {
        id: 'douane-srv-5',
        title: {
          ar: 'المعلومة التعريفية الملزمة (Consultation RTC)',
          fr: 'Renseignement Tarifaire Contraignant (RTC)',
        },
        description: {
          ar: 'استشارة وطلب قرار تحديد البند التعريفي الرسمي للبضاعة قبل الاستيراد أو التصدير لتفادي النزاعات.',
          fr: 'Consultation et demande officielle de classement tarifaire préalable sécurisant vos opérations commerciales.',
        },
        url: 'https://douane.gov.dz/rtc/',
        isOnline: true,
      },
      {
        id: 'douane-srv-6',
        title: {
          ar: 'التواصل والاستعلام لدى الجمارك الجزائرية',
          fr: 'Cellule d’Information & Réclamations Douanes',
        },
        description: {
          ar: 'بوابة إرسال الاستفسارات القانونية أو الشكاوى إلى المديرية العامة للجمارك (والرقم الأخضر 1023).',
          fr: 'Formulaire officiel de réclamation et demande de renseignements (complété par le numéro vert 1023).',
        },
        url: 'https://www.douane.gov.dz/?page=reclamation&type_service=information&lang=ar',
        isOnline: true,
      },
      {
        id: 'douane-srv-7',
        title: {
          ar: 'الموقع الرسمي للمديرية العامة للجمارك',
          fr: 'Site Officiel des Douanes Algériennes',
        },
        description: {
          ar: 'الاطلاع على القوانين الجمركية، امتيازات الجالية، شروط شهادة تغيير الإقامة CCR، وقوائم الممنوعات.',
          fr: 'Informations officielles sur la réglementation des changes, franchises voyageurs, CCR diaspora et régimes économiques.',
        },
        url: 'https://www.douane.gov.dz/?lang=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المستوردون والمصدرون، الوكلاء الجمركيون، المسافرون، والمواطنون المقيمون بالخارج (CCR / استيراد سيارة)',
        fr: 'Importateurs, exportateurs, transitaires, voyageurs et membres de la diaspora (CCR / véhicules)',
      },
      processingTime: {
        ar: 'حساب فوري في محاكي السيارات؛ تفعيل حساب ALCES خلال 24-72 ساعة بعد التحقق من البيانات',
        fr: 'Estimation instantanée sur le simulateur véhicules ; validation d’accès ALCES sous 24 à 72 h',
      },
      fees: {
        ar: 'الولوج لمنصة ALCES والمحاكاة مجانيان؛ تطبق الحقوق الجمركية والرسم على القيمة المضافة وفق التعريفة',
        fr: 'Accès gratuit au portail et simulateur ; droits de douane et TVA calculés selon le tarif en vigueur',
      },
      channel: {
        ar: 'البوابة الإلكترونية alces.douane.gov.dz، موقع douane.gov.dz، الرقم الأخضر 1023، والمفتشيات الحدودية',
        fr: 'Portail alces.douane.gov.dz, site douane.gov.dz, numéro vert 1023 et bureaux des douanes',
      },
      keyRequirement: {
        ar: 'رقم التعريف الوطني NIN للأفراد؛ السجل التجاري ورقم التعريف الجبائي NIF للمؤسسات والشركات',
        fr: 'NIN et passeport (particuliers) ; registre de commerce électronique et NIF (entreprises)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التسجيل الفردي في ALCES',
          fr: 'Compte particulier ALCES',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية (NIN)، جواز السفر، وبريد إلكتروني ورقم هاتف لاستلام رمز التفعيل',
          fr: 'CNIBE (NIN), passeport, adresse e-mail et téléphone actif pour validation du compte',
        },
      },
      {
        label: {
          ar: 'تسجيل الشركات في ALCES',
          fr: 'Enrôlement entreprise sur ALCES',
        },
        value: {
          ar: 'نسخة السجل التجاري الإلكتروني، بطاقة التعريف الجبائي NIF، وتفويض المسير أو الوكيل الجمركي',
          fr: 'Extrait de registre de commerce, carte fiscale NIF et mandat du représentant légal',
        },
      },
      {
        label: {
          ar: 'جمركة سيارة أقل من 3 سنوات أو جديدة',
          fr: 'Dédouanement véhicule de moins de 3 ans',
        },
        value: {
          ar: 'الفاتورة أو عقد الشراء، البطاقة الرمادية الأجنبية، شهادة المراقبة، وإقامة بالموافقة البنكية أو العملة',
          fr: 'Facture ou contrat de cession, carte grise d’origine, certificat de conformité et fiche de résidence',
        },
      },
      {
        label: {
          ar: 'ملف شهادة تغيير الإقامة للجالية (CCR)',
          fr: 'Dossier Changement de Résidence (CCR)',
        },
        value: {
          ar: 'شهادة التسجيل القنصلي لأكثر من 3 سنوات، بطاقة الإقامة، وقائمة الأمتعة أو السيارة المحددة قانونا',
          fr: 'Attestation consulaire justifiant plus de 3 ans de séjour continu et inventaire détaillé des biens',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أحسب تكلفة جمركة سيارة مستوردة في الجزائر عبر موقع الجمارك؟',
          fr: 'Comment estimer les droits de douane d’un véhicule importé en Algérie ?',
        },
        answer: {
          ar: 'افتح أداة محاكاة التعريفة الجمركية الرسمية على منصة ALCES (pot0200-q1)، أدخل نوع المحرك (بنزين، هجين، كهربائي) وسعة الأسطوانة وسنة الصنع والقيمة، لتحصل فورا على تقدير الحقوق والرسوم.',
          fr: 'Utilisez le simulateur officiel sur alces.douane.gov.dz (pot0200-q1) en renseignant la motorisation, la cylindrée, l’année de mise en circulation et la valeur estimée.',
        },
      },
      {
        question: {
          ar: 'ما هي منصة ALCES وهل تعوض الإجراءات الورقية لدى الجمارك؟',
          fr: 'Qu’est-ce que le système ALCES des Douanes Algériennes ?',
        },
        answer: {
          ar: 'ALCES هو النظام المعلوماتي الجديد للجمارك الجزائرية الذي يرقمن سلسلة الجمركة من التصريح الأولي وسند العبور إلى الدفع الإلكتروني والتتبع اللحظي للحاويات والمركبات.',
          fr: 'ALCES est le système d’information numérique intégral des Douanes Algériennes permettant le traitement dématérialisé et la traçabilité complète des déclarations.',
        },
      },
      {
        question: {
          ar: 'ما هي مبالغ العملة الصعبة الواجب التصريح بها عند السفر؟',
          fr: 'À partir de quel montant faut-il déclarer les devises en douane aux frontières ?',
        },
        answer: {
          ar: 'يخضع حمل العملة الأجنبية عند الدخول أو الخروج من التراب الوطني لسقف قانوني يحدده بنك الجزائر والجمارك؛ يلتزم المسافر بالتصريح الجمركي للعملة عند تجاوز العتبة المقررة وتقديم وصل السحب البنكي عند المغادرة.',
          fr: 'Toute somme en devises dépassant le seuil réglementaire fixé par la Banque d’Algérie doit être obligatoirement déclarée au poste frontière, avec présentation d’un avis de débit bancaire à la sortie.',
        },
      },
      {
        question: {
          ar: 'ما هي فائدة طلب المعلومة التعريفية الملزمة RTC للمستورد؟',
          fr: 'À quoi sert le Renseignement Tarifaire Contraignant (RTC) ?',
        },
        answer: {
          ar: 'تضمن شهادة RTC للمتعامل الاقتصادي معرفة البند الجمركي الدقيق لبضاعته ونسبة الضرائب المطبقة قبل شحن السلعة، مما يلغي خطر إعادة التصنيف أو الغرامات عند الميناء.',
          fr: 'Le RTC sécurise juridiquement l’importateur ou exportateur en fixant officiellement à l’avance la position tarifaire exacte d’une marchandise auprès de l’administration douanière.',
        },
      },
    ],
  },
  {
    id: 'dronet.mdn',
    slug: 'dronet.mdn',
    category: 'ministries',
    name: {
      ar: 'المركز الوطني لمنظومات الطائرات بدون طيار على المتن (CNSAPB)',
      fr: 'Centre National des Systèmes d’Aéronefs Sans Pilote à Bord (CNSAPB / Dronet MDN)',
    },
    acronym: 'CNSAPB',
    ministry: {
      ar: 'وزارة الدفاع الوطني',
      fr: 'Ministère de la Défense Nationale (MDN)',
    },
    description: {
      ar: 'البوابة الرسمية للمركز الوطني لمنظومات الطائرات بدون طيار (dronet.mdn.dz): التصريح الإجباري بالدرون، رخص الشراء والاستيراد والتحليق، الاعتمادات المهنية، تكوين الطيارين عن بعد، وحجز المواعيد وفق المرسوم الرئاسي 21-285.',
      fr: "Portail officiel du Centre National des Systèmes d’Aéronefs Sans Pilote à Bord (dronet.mdn.dz) relevant du MDN : déclaration obligatoire des drones, agréments professionnels, autorisations d’acquisition et de vol, formation de télépilotes et prise de rendez-vous (Décret 21-285).",
    },
    officialUrl: 'https://dronet.mdn.dz/ar',
    portalUrl: 'https://dronet.mdn.dz/ar/rendezvous',
    iconName: 'Plane',
    isPopular: true,
    services: [
      {
        id: 'dronet.mdn-srv-1',
        title: {
          ar: 'البوابة الإلكترونية الرسمية لـ CNSAPB (Dronet MDN)',
          fr: 'Portail Officiel Dronet MDN (CNSAPB)',
        },
        description: {
          ar: 'المنصة الموحدة للتصريح بالدرون، تحميل استمارات الطلبات، والاطلاع على النصوص التنظيمية وفق المرسوم الرئاسي 21-285.',
          fr: 'Plateforme centrale dédiée à l’enregistrement des drones, aux formulaires d’agréments et au cadre légal du Décret 21-285.',
        },
        url: 'https://dronet.mdn.dz/ar',
        isOnline: true,
      },
      {
        id: 'dronet.mdn-srv-2',
        title: {
          ar: 'حجز موعد رسمي مسبق لدى المركز الوطني للدرون',
          fr: 'Prise de Rendez-vous Officiel (Dronet MDN)',
        },
        description: {
          ar: 'حجز موعد إلكتروني للمقيمين بالجزائر لإيداع الملفات وتقديم الوثائق والمطابقة التقنية لمنظومات الطائرات بدون طيار.',
          fr: 'Réservation de rendez-vous en ligne pour le dépôt des dossiers de déclaration, d’homologation et de conformité technique.',
        },
        url: 'https://dronet.mdn.dz/ar/rendezvous',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مالكو الطائرات بدون طيار، المؤسسات التقنية، شركات التصوير والمسح الجوي، ومراكز التكوين',
        fr: 'Propriétaires de drones, entreprises audiovisuelles, topographes, industriels et centres de formation',
      },
      processingTime: {
        ar: 'حجز فوري للموعد عبر البوابة؛ دراسة ملفات التصريح والاعتمادات ورخص التحليق وفق الآجال التنظيمية',
        fr: 'Prise de rendez-vous immédiate en ligne ; instruction sécuritaire et technique selon les délais réglementaires',
      },
      fees: {
        ar: 'استمارات البوابة وحجز المواعيد مجانية؛ تخضع التراخيص والاعتمادات للرسوم والطوابع المقررة قانونا',
        fr: 'Prise de rendez-vous et formulaires gratuits ; droits administratifs applicables selon la nature de l’agrément',
      },
      channel: {
        ar: 'البوابة الرقمية dronet.mdn.dz/ar، البريد الرسمي CONTACT-CNSAPB@MDN.DZ، ومصالح المركز الوطني',
        fr: 'Portail dronet.mdn.dz/ar, courriel CONTACT-CNSAPB@MDN.DZ et guichet sur rendez-vous du CNSAPB',
      },
      keyRequirement: {
        ar: 'بطاقة التعريف البيومترية أو السجل التجاري، الرقم التسلسلي والبطاقة التقنية للدرون، واستيفاء المرسوم 21-285',
        fr: 'CNIBE ou registre de commerce, fiche technique et numéro de série du drone conformes au Décret 21-285',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التصريح الإجباري وحيازة الدرون',
          fr: 'Déclaration obligatoire et détention',
        },
        value: {
          ar: 'تحديد هوية المالك (شخص طبيعي أو معنوي)، مواصفات الطائرة، الرقم التسلسلي، وفاتورة الشراء أو الوثيقة المثبتة',
          fr: 'Identité complète du propriétaire, caractéristiques techniques de l’appareil, numéro de série et justificatif de provenance',
        },
      },
      {
        label: {
          ar: 'الاعتمادات المهنية (التصنيع، الاستيراد، التصوير، الصيانة)',
          fr: 'Agréments professionnels & prestations aériennes',
        },
        value: {
          ar: 'السجل التجاري المطابق للنشاط، القانون الأساسي للشركة، وملف الكفاءات التقنية والأمنية للمشغلين',
          fr: 'Registre de commerce dédié, statuts de l’entreprise et dossier d’habilitation technique et sécuritaire',
        },
      },
      {
        label: {
          ar: 'تراخيص التحليق والعمليات الجوية',
          fr: 'Autorisations de vol et missions',
        },
        value: {
          ar: 'طلب مسبق يوضح المنطقة الجغرافية، الإحداثيات، الارتفاع، مدة المهمة، وشهادة تأهيل الطيار عن بعد',
          fr: 'Demande préalable précisant zone d’évolution, coordonnées, plafond d’altitude, durée et licence de télépilote',
        },
      },
      {
        label: {
          ar: 'التواصل والاستفسار التنظيمي الرسمي',
          fr: 'Contact officiel & coordination',
        },
        value: {
          ar: 'توجيه الملفات والاستفسارات الإدارية عبر البريد المعتمد CONTACT-CNSAPB@MDN.DZ بعد حجز الموعد',
          fr: 'Correspondance administrative et demandes d’informations via CONTACT-CNSAPB@MDN.DZ',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يجب التصريح بالطائرات بدون طيار الصغيرة أو الترفيهية في الجزائر؟',
          fr: 'La déclaration des drones de loisir ou de petite taille est-elle obligatoire en Algérie ?',
        },
        answer: {
          ar: 'نعم، ينص المرسوم الرئاسي 21-285 المؤرخ في 13 جويلية 2021 على إخضاع حيازة واستخدام واقتناء منظومات الطائرات بدون طيار للتصريح المسبق والتسجيل لدى المركز الوطني CNSAPB.',
          fr: 'Oui, conformément au Décret présidentiel n° 21-285 du 13 juillet 2021, toute détention, acquisition ou exploitation de drone est soumise à déclaration et enregistrement auprès du CNSAPB.',
        },
      },
      {
        question: {
          ar: 'كيف أحجز موعدا لتسوية وضعية درون أو إيداع طلب اعتماد؟',
          fr: 'Comment prendre rendez-vous pour régulariser un drone ou déposer un dossier ?',
        },
        answer: {
          ar: 'ادخل إلى صفحة المواعيد الرسمية dronet.mdn.dz/ar/rendezvous، اختر نوع المعاملة واليوم المتاح وأدخل بياناتك الشخصية لتأكيد الموعد قبل التوجه إلى مصالح المركز.',
          fr: 'Rendez-vous sur dronet.mdn.dz/ar/rendezvous, sélectionnez le motif de votre démarche et réservez un créneau avant de vous présenter avec le dossier complet.',
        },
      },
      {
        question: {
          ar: 'ما هي الأنشطة التي تتطلب اعتمادا مهنيا لدى المركز الوطني؟',
          fr: 'Quelles activités nécessitent un agrément professionnel auprès du CNSAPB ?',
        },
        answer: {
          ar: 'تشمل الاعتمادات المهنية التصنيع والتركيب، الاستيراد والتصدير، التجارة والتوزيع، الصيانة والمعايرة، التأجير، خدمات التصوير الجوي والمسح الطبوغرافي والفلاحة الذكية، ومدارس تكوين الطيارين.',
          fr: 'Les agréments couvrent la fabrication, l’import-export, le commerce, la maintenance, la location, les prestations aériennes (audiovisuel, topographie, agriculture de précision) et la formation de télépilotes.',
        },
      },
      {
        question: {
          ar: 'هل يمكن استيراد طائرة بدون طيار دون رخصة مسبقة عبر الجمارك؟',
          fr: 'Peut-on importer ou voyager avec un drone sans autorisation préalable ?',
        },
        answer: {
          ar: 'لا، يخضع استيراد وإدخال منظومات الطائرات بدون طيار وأجزائها عبر الحدود لاستصدار رخصة اقتناء وإفراج جمركي مسبقة من المركز الوطني لتجنب الحجز أو المتابعة القانونية.',
          fr: 'Non, l’importation ou l’introduction sur le territoire national de tout drone nécessite obligatoirement une autorisation d’acquisition et de mainlevée délivrée préalablement par le CNSAPB.',
        },
      },
    ],
  },
  {
    id: 'emergency',
    slug: 'emergency',
    category: 'health_civil',
    name: {
      ar: 'أرقام الطوارئ والنجدة ومنصات التبليغ المواطنية',
      fr: "Numéros d'Urgence, Secours & Plateformes de Signalement",
    },
    acronym: 'URGENCE',
    ministry: {
      ar: 'الأمن، الدرك، الحماية المدنية، الفساد وحماية المستهلك',
      fr: 'Services Nationaux d’Urgence, Protection & Médiation',
    },
    description: {
      ar: 'الدليل الشامل لأرقام الطوارئ المجانية في الجزائر (الشرطة 17، الدرك الوطني 1055، الحماية المدنية 14، حماية الطفولة 1111، سونلغاز 3303، حماية المستهلك 1020) ومنصات التبليغ الرقمية المعتمدة.',
      fr: "Répertoire complet des numéros d'urgence gratuits en Algérie (Police 17, Gendarmerie 1055, Protection Civile 14, Enfance 1111, Sonelgaz 3303, Consommateur 1020) et portails officiels de signalement.",
    },
    officialUrl: 'https://www.algeriepolice.dz/',
    portalUrl: 'https://ppgn.mdn.dz/',
    iconName: 'PhoneCall',
    isPopular: true,
    services: [
      {
        id: 'emergency-srv-1',
        title: {
          ar: 'منصة الشكاوى المسبقة للدرك الوطني (PPGN - 1055)',
          fr: 'Pré-Plainte en Ligne Gendarmerie Nationale (PPGN — 1055)',
        },
        description: {
          ar: 'إيداع شكوى مسبقة أو بلاغ أمني عبر الإنترنت لدى مصالح الدرك الوطني بالتكامل مع الرقم الأخضر 1055.',
          fr: 'Portail officiel de pré-plainte et de signalement auprès de la Gendarmerie Nationale (numéro vert 1055).',
        },
        url: 'https://ppgn.mdn.dz/',
        isOnline: true,
      },
      {
        id: 'emergency-srv-2',
        title: {
          ar: 'الشرطة الجزائرية وتطبيق ألو الشرطة (17 / 1548 / 104)',
          fr: 'Police Algérienne & App Allo Chorta (17 / 1548 / 104)',
        },
        description: {
          ar: 'البوابة الرسمية وتطبيق الهاتف لإرسال البلاغات الفورية المرفوقة بالموقع الجغرافي والصور.',
          fr: 'Portail et application mobile pour signaler immédiatement toute urgence urbaine ou infraction géolocalisée.',
        },
        url: 'https://www.algeriepolice.dz/',
        isOnline: true,
      },
      {
        id: 'emergency-srv-3',
        title: {
          ar: 'منصة بلّغنا للتبليغ عن الفساد (HATPLC)',
          fr: 'Plateforme Balighna Anti-Corruption (HATPLC)',
        },
        description: {
          ar: 'البوابة الرسمية للسلطة العليا للشفافية لتقديم التبليغات السرية حول قضايا الفساد وتضارب المصالح.',
          fr: 'Canal officiel sécurisé de la Haute Autorité de Transparence pour signaler tout fait de corruption.',
        },
        url: 'https://balighna.hatplc.dz/account-choice',
        isOnline: true,
      },
      {
        id: 'emergency-srv-4',
        title: {
          ar: 'منصة وسيط الجمهورية للتظلمات الإدارية',
          fr: 'Médiateur de la République (Wassit DZ)',
        },
        description: {
          ar: 'رفع العرائض والتظلمات المتعلقة بتأخر أو تعسف الإدارات والمؤسسات العمومية وتتبع معالجتها.',
          fr: 'Dépôt et suivi des requêtes citoyennes face aux blocages administratifs des services publics.',
        },
        url: 'https://wassit.dz/ar/register',
        isOnline: true,
      },
      {
        id: 'emergency-srv-5',
        title: {
          ar: 'منصة نراكم للشفافية والمجتمع المدني',
          fr: 'Plateforme Narakom & Déclarations HATPLC',
        },
        description: {
          ar: 'فضاء إشراك المواطن والجمعيات في الوقاية من الفساد وتلقي استمارات التصريح والملاحظات.',
          fr: 'Dispositif participatif citoyen et associatif de vigilance administrative et de transparence.',
        },
        url: 'https://hatplc.dz/declaration-form',
        isOnline: true,
      },
      {
        id: 'emergency-srv-6',
        title: {
          ar: 'منصة أشتكي لحماية المستهلك (APOCE - 1020)',
          fr: 'Portail Achki Protection du Consommateur (APOCE)',
        },
        description: {
          ar: 'تقديم شكاوى الغش التجاري، سلامة الغذاء، أو الخلافات الاستهلاكية بالتعاون مع جمعية حماية المستهلك.',
          fr: 'Signalement des abus commerciaux, défauts de qualité et atteintes aux droits des consommateurs.',
        },
        url: 'https://www.achki-apoce.org/login',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'كافة المواطنين والمقيمين والسياح عبر التراب الوطني في حالات الخطر أو التبليغ المدني',
        fr: 'Tous citoyens, résidents et voyageurs en Algérie confrontés à une urgence ou souhaitant signaler un abus',
      },
      processingTime: {
        ar: 'استجابة فورية 24/24 للنجدة (17، 14، 1055، 1021)؛ معالجة إلكترونية سريعة للشكاوى الرقمية',
        fr: 'Réponse immédiate 24h/24 sur les lignes d’urgence (17, 14, 1055) ; traitement accéléré des signalements web',
      },
      fees: {
        ar: 'جميع أرقام الطوارئ الوطنية مجانية 100 بالمئة ولا تتطلب رصيدا هاتفيا حتى دون تغطية الشريحة',
        fr: 'Tous les numéros d’urgence nationaux sont 100 % gratuits sans crédit téléphonique requis',
      },
      channel: {
        ar: 'الأرقام المختصرة 17 / 1055 / 14 / 1021 / 1111 / 3303 والبوابات الرقمية الرسمية',
        fr: 'Lignes courtes 17, 1055, 14, 1021, 1111, 3303 et plateformes web officielles',
      },
      keyRequirement: {
        ar: 'وصف واضح للحادثة والموقع الدقيق في المكالمة؛ وأدلة الإثبات عند تقديم شكوى إلكترونية',
        fr: 'Localisation exacte et faits précis lors de l’appel ; pièces justificatives pour une plainte en ligne',
      },
    },
    requirements: [
      {
        label: {
          ar: 'طوارئ الأمن والإغاثة الأساسية',
          fr: 'Secours vitaux & sécurité (24/7)',
        },
        value: {
          ar: 'الشرطة (17) — الدرك الوطني (1055) — الحماية المدنية والإسعاف (14 و1021) — الغابات (1070)',
          fr: 'Police (17) — Gendarmerie (1055) — Protection Civile & SAMU (14 / 1021) — Forêts (1070)',
        },
      },
      {
        label: {
          ar: 'حماية الفئات الهشة والطفولة',
          fr: 'Protection de l’enfance & écoute',
        },
        value: {
          ar: 'الرقم الوطني لحماية الطفولة (1111) — التنبيه عن الاختطاف (104) — خلية الإصغاء للأمن (1548)',
          fr: 'Protection de l’enfance (1111) — Alerte enlèvement (104) — Écoute et assistance DGSN (1548)',
        },
      },
      {
        label: {
          ar: 'أعطاب الشبكات الحيوية والخدمات',
          fr: 'Urgences réseaux & consommateurs',
        },
        value: {
          ar: 'سونلغاز كهرباء وغاز (3303) — المياه والجزائرية للمياه (1593) — حماية المستهلك والتجارة (1020)',
          fr: 'Sonelgaz fuites/pannes (3303) — Eaux ADE/SEAAL (1593) — Protection du consommateur (1020)',
        },
      },
      {
        label: {
          ar: 'ضوابط التبليغ الرقمي المسؤول',
          fr: 'Conditions d’un signalement valide',
        },
        value: {
          ar: 'الالتزام بالمصداقية وعدم توجيه البلاغات الكيدية مع الاحتفاظ برقم التذكرة في PPGN ووسيط الجمهورية',
          fr: 'Exposer des faits réels vérifiables et conserver le numéro de suivi sur PPGN ou Wassit DZ',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي أرقام النجدة المجانية الرئيسية في الجزائر التي تعمل دون رصيد؟',
          fr: 'Quels sont les principaux numéros d’urgence gratuits en Algérie ?',
        },
        answer: {
          ar: 'الأرقام الأساسية هي 17 للشرطة، 1055 للدرك الوطني، 14 و1021 للحماية المدنية والإسعاف الطبي، 1111 لحماية الطفولة، 1070 لإبلاغ الغابات عن الحرائق، و3303 لأعطاب الغاز والكهرباء.',
          fr: 'Les lignes essentielles sont le 17 (Police), 1055 (Gendarmerie), 14 et 1021 (Protection Civile), 1111 (Enfance), 1070 (Forêts) et 3303 (Sonelgaz urgences gaz/électricité).',
        },
      },
      {
        question: {
          ar: 'كيف أقدم شكوى مسبقة لدى الدرك الوطني عبر الإنترنت؟',
          fr: 'Comment déposer une pré-plainte en ligne auprès de la Gendarmerie Nationale ?',
        },
        answer: {
          ar: 'ادخل إلى بوابة ppgn.mdn.dz، حدد الولاية والفرقة الإقليمية المختصة، واملأ تفاصيل الشكوى والهوية لتحصل على موعد ورقم تتبع لتأكيد المحضر.',
          fr: 'Connectez-vous sur ppgn.mdn.dz, sélectionnez la brigade territorialement compétente et soumettez votre déclaration pour obtenir un numéro de suivi et un rendez-vous.',
        },
      },
      {
        question: {
          ar: 'متى ألجأ إلى منصة وسيط الجمهورية أو منصة بلّغنا؟',
          fr: 'Quand saisir le Médiateur de la République (Wassit) ou Balighna ?',
        },
        answer: {
          ar: 'توجه لـ وسيط الجمهورية (wassit.dz) عند تعطل مصالحك لدى إدارة عمومية دون مبرر قانوني، أما منصة بلّغنا (balighna.hatplc.dz) فتختص بالتبليغ عن جرائم الفساد والرشوة.',
          fr: 'Saisissez Wassit DZ en cas de dysfonctionnement ou de blocage d’un service public, et Balighna (HATPLC) pour tout signalement de corruption ou de conflit d’intérêts.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل في حال شم رائحة تسرب غاز أو انقطاع خطير للتيار الكهربائي؟',
          fr: 'Quel est le bon réflexe en cas de fuite de gaz ou d’incident électrique ?',
        },
        answer: {
          ar: 'أغلق صمام الغاز الرئيسي فورا، افتح النوافذ دون لمس أي مفتاح كهربائي، غادر المكان واتصل بالرقم 3303 (سونلغاز) أو 14 (الحماية المدنية) فورا.',
          fr: 'Coupez immédiatement le robinet principal de gaz, aérez sans actionner d’interrupteur électrique, évacuez et composez sans délai le 3303 ou le 14.',
        },
      },
    ],
  },
  {
    id: 'enpi',
    slug: 'enpi',
    category: 'housing',
    name: {
      ar: 'المؤسسة الوطنية للترقية العقارية (ENPI)',
      fr: 'Entreprise Nationale de Promotion Immobilière (ENPI)',
    },
    acronym: 'ENPI',
    ministry: {
      ar: 'وزارة السكن والعمران والمدينة',
      fr: "Ministère de l'Habitat, de l'Urbanisme et de la Ville",
    },
    description: {
      ar: 'الدليل الشامل لخدمات المؤسسة الوطنية للترقية العقارية ENPI في الجزائر: التسجيل في برامج السكن الترقوي العمومي LPP والسكن الترقوي الحر LPL، اقتناء المحلات التجارية، فضاء الزبائن، وتطبيق إنشغال.',
      fr: 'Guide complet des services de l’ENPI en Algérie : préinscription aux logements promotionnels LPP et LPL, acquisition de locaux commerciaux, espace clients en ligne, suivi des réclamations sur Inchighal et paiement des échéances.',
    },
    officialUrl: 'https://www.enpi-net.dz/',
    portalUrl: 'https://www.enpi-net.dz/lpp_consultation/',
    iconName: 'Building2',
    isPopular: false,
    services: [
      {
        id: 'enpi-srv-1',
        title: {
          ar: 'فضاء الزبائن والاستعلام عن الملفات (LPP Consultation)',
          fr: 'Espace Clients & Consultation des Dossiers ENPI',
        },
        description: {
          ar: 'متابعة وضعية الملف السكني، اختيار المواقع، تحميل أوامر الدفع، ومواعيد تسليم المفاتيح للمكتتبين.',
          fr: 'Consultation de l’avancement du dossier souscripteur, choix des sites, édition des ordres de versement et remise des clés.',
        },
        url: 'https://www.enpi-net.dz/lpp_consultation/',
        isOnline: true,
      },
      {
        id: 'enpi-srv-2',
        title: {
          ar: 'التسجيل لاقتناء سكن ترقوي عمومي (LPP)',
          fr: 'Inscription Logement Promotionnel Public (LPP)',
        },
        description: {
          ar: 'بوابة إيداع طلبات التسجيل الإلكترونية في مشاريع السكن الترقوي العمومي المفتوحة عبر الولايات.',
          fr: 'Plateforme d’inscription en ligne aux quotas ouverts du programme de logement promotionnel public LPP.',
        },
        url: 'https://www.enpi-net.dz/ENPI/Inscription.php',
        isOnline: true,
      },
      {
        id: 'enpi-srv-3',
        title: {
          ar: 'التسجيل لاقتناء سكن ترقوي حر (LPL)',
          fr: 'Inscription Logement Promotionnel Libre (LPL)',
        },
        description: {
          ar: 'التسجيل المباشر عبر الإنترنت لاقتناء شقق الترقوي الحر (بنقد كامل أو أقساط) دون شروط سقف الدخل.',
          fr: 'Inscription aux programmes de logements promotionnels libres LPL sans plafond de revenu réglementaire.',
        },
        url: 'https://www.enpi-net.dz/LPL/Inscription.php',
        isOnline: true,
      },
      {
        id: 'enpi-srv-4',
        title: {
          ar: 'التسجيل لاقتناء محل تجاري أو مهني (Locaux ENPI)',
          fr: 'Acquisition de Locaux Commerciaux & Professionnels',
        },
        description: {
          ar: 'بوابة تقديم الطلبات لشراء أو استئجار المحلات التجارية والمهنية الواقعة ضمن أحياء المؤسسة.',
          fr: 'Portail dédié à la soumission pour l’achat de locaux commerciaux ou de services au sein des cités ENPI.',
        },
        url: 'https://www.enpi-net.dz/LocauxEnpi/',
        isOnline: true,
      },
      {
        id: 'enpi-srv-5',
        title: {
          ar: 'تطبيق إنشغال لتبليغات الساكنين والمستفيدين',
          fr: 'Application Inchighal (Réclamations & Maintenance)',
        },
        description: {
          ar: 'الإبلاغ الإلكتروني عن التحفظات التقنية بعد استلام السكن أو انشغالات التسيير العقاري ومتابعتها.',
          fr: 'Guichet numérique permettant aux acquéreurs et résidents de signaler les réserves techniques et problèmes d’entretien.',
        },
        url: 'https://www.enpi-net.dz/Inchighal/',
        isOnline: true,
      },
      {
        id: 'enpi-srv-6',
        title: {
          ar: 'تطبيق بريدي موب لدفع أعباء التسيير والأقساط',
          fr: 'Application BaridiMob pour les Règlements ENPI',
        },
        description: {
          ar: 'تسديد فواتير التسيير العقاري للفرع المختص والمستحقات الدورية إلكترونيا عبر البطاقة الذهبية.',
          fr: 'Paiement rapide des redevances mensuelles de gestion immobilière depuis smartphone via la carte Edahabia.',
        },
        url: 'https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc',
        isOnline: true,
      },
      {
        id: 'enpi-srv-7',
        title: {
          ar: 'الموقع الرسمي للمؤسسة الوطنية للترقية العقارية',
          fr: 'Site Officiel de l’ENPI Algérie',
        },
        description: {
          ar: 'الاطلاع على مشاريع ENPI المتوفرة في كل ولاية، الحصص المفتوحة للجالية والمقيمين، وأخبار المؤسسة.',
          fr: 'Catalogue des résidences disponibles par wilaya, programmes dédiés à la diaspora et communiqués officiels.',
        },
        url: 'https://www.enpi-net.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون أصحاب الدخل فوق 6 مرات الأجر الأدنى (LPP)، الراغبون في السكن الحر (LPL)، والتجار والمقاولون',
        fr: 'Ménages à revenus supérieurs à 6 fois le SNMG (LPP), acquéreurs libres (LPL), diaspora et commerçants',
      },
      processingTime: {
        ar: 'تسجيل واستلام وصل فوري عند فتح الحصص؛ دراسة الملفات والمقاصة البنكية في 15 إلى 45 يوما',
        fr: 'Accusé d’inscription immédiat lors des sessions ouvertes ; étude financière et bancaire sous 15 à 45 jours',
      },
      fees: {
        ar: 'التسجيل الأولي مجاني؛ تسدد الشطور حسب تقدم المشروع عبر البنك الوطني أو القرض العقاري CNEP/CPA',
        fr: 'Préinscription gratuite ; tranches versées selon le programme et l’échéancier bancaire (CPA / CNEP)',
      },
      channel: {
        ar: 'البوابة الرقمية enpi-net.dz، فضاء الاستشارة، تطبيق إنشغال، والمديريات الجهوية والولائية للمؤسسة',
        fr: 'Portail web enpi-net.dz, espace Inchighal et directions régionales / agences de wilaya ENPI',
      },
      keyRequirement: {
        ar: 'رقم التعريف الوطني NIN، شهادة الدخل المطلوبة لصيغة LPP، وعدم الاستفادة من سكن عمومي سابق',
        fr: 'NIN, justificatif de revenus conforme (LPP) et absence de bien ou d’aide antérieure de l’État (LPP)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'شروط الأهلية لصيغة الترقوي العمومي LPP',
          fr: 'Éligibilité au programme LPP',
        },
        value: {
          ar: 'دخل أسري بين 6 و30 مرة الأجر الأدنى المضمون، مع عدم امتلاك عقار سكني أو الاستفادة من إعانة دولة',
          fr: 'Revenu du foyer compris entre 6 et 30 fois le SNMG, sans propriété immobilière ni aide publique antérieure',
        },
      },
      {
        label: {
          ar: 'شروط السكن الترقوي الحر LPL والمحلات',
          fr: 'Conditions pour LPL et locaux commerciaux',
        },
        value: {
          ar: 'مفتوح لكافة المواطنين دون شرط سقف الدخل أو عدم الملكية، وفق القدرة على التمويل الذاتي أو البنكي',
          fr: 'Ouvert à tout citoyen sans condition de plafond de revenu ni de non-propriété (autofinancement ou crédit)',
        },
      },
      {
        label: {
          ar: 'الوثائق الثبوتية للملف السكني',
          fr: 'Pièces justificatives du dossier',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية، شهادة ميلاد، شهادة عائلية، كشف الراتب أو C20، وتصريح شرفي مصادق عليه',
          fr: 'CNIBE, acte de naissance, fiche familiale, justificatif de revenus (fiches de paie / C20) et déclaration sur l’honneur',
        },
      },
      {
        label: {
          ar: 'حساب فضاء الزبائن ومتابعة الدفع',
          fr: 'Suivi financier et livraison',
        },
        value: {
          ar: 'الاحتفاظ برقم التسجيل السري لتحميل أوامر الدفع (OV) ومتابعة قرار التخصيص واستلام المفاتيح',
          fr: 'Conservation de l’identifiant souscripteur pour éditer les ordres de versement et décisions d’affectation',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هو الفرق الأساسي بين سكنات LPP وسكنات LPL لدى مؤسسة ENPI؟',
          fr: 'Quelle est la différence entre les programmes LPP et LPL de l’ENPI ?',
        },
        answer: {
          ar: 'صيغة LPP مدعمة بسعر مضبوط وموجهة لفئة الدخل المتوسط المرتفع وفق شروط عدم الملكية، بينما صيغة الترقوي الحر LPL مفتوحة للجميع بسعر السوق دون شروط دخل أو ملكية سابقة.',
          fr: 'Le LPP est un programme encadré soumis aux conditions de revenus (6 à 30 SNMG) et de non-propriété, tandis que le LPL (Logement Promotionnel Libre) est ouvert à tous sans restriction.',
        },
      },
      {
        question: {
          ar: 'هل يمكن لأفراد الجالية الجزائرية بالخارج التسجيل في برامج ENPI؟',
          fr: 'Les Algériens résidant à l’étranger peuvent-ils souscrire aux logements ENPI ?',
        },
        answer: {
          ar: 'نعم، تفتح المؤسسة دوريا حصصا مخصصة لأفراد الجالية الوطنية بالخارج خاصة في صيغة LPP وLPL مع إمكانية الدفع عبر تحويلات بنكية بالعملة الصعبة.',
          fr: 'Oui, l’ENPI ouvre régulièrement des quotas dédiés à la communauté nationale à l’étranger (LPP et LPL) avec des modalités de règlement adaptées en devises.',
        },
      },
      {
        question: {
          ar: 'كيف أبلغ عن عيب تقني أو تحفظ داخل شقتي الجديدة بعد الاستلام؟',
          fr: 'Comment signaler une réserve technique après la remise des clés ENPI ?',
        },
        answer: {
          ar: 'استعمل بوابة تطبيق إنشغال (enpi-net.dz/Inchighal) بتحديد رقم العمارة والشقة ووصف الخلل التقني لتقوم فرق الصيانة والتسيير العقاري بالتدخل.',
          fr: 'Connectez-vous à l’espace Inchighal (enpi-net.dz/Inchighal) en précisant le site, l’immeuble et la nature de la réserve pour déclencher la levée de réserve.',
        },
      },
      {
        question: {
          ar: 'كيف أقتني محلا تجاريا أو مهنيا ضمن مشاريع ENPI؟',
          fr: 'Comment postuler pour l’achat d’un local commercial ou professionnel ENPI ?',
        },
        answer: {
          ar: 'راقب إعلانات البيع بالمزاد أو بالتراضي عبر الموقع الرسمي، وسجل طلبك في نافذة LocauxEnpi بإرفاق السجل التجاري أو الاعتماد المهني وتحديد الموقع المطلوب.',
          fr: 'Inscrivez-vous sur la plateforme dédiée enpi-net.dz/LocauxEnpi lors de l’ouverture des soumissions et fournissez votre dossier commercial ou professionnel.',
        },
      },
    ],
  },
];

export const batch3Guides: Record<string, RichGuideContent> = {
  'creg.gov': {
    intro: {
      ar: [
        'تضطلع لجنة ضبط الكهرباء والغاز (CREG) بدور تنظيمي ورقابي مستقل في قطاع الطاقة الجزائري، حيث تسهر على حماية مصالح المستهلكين، ضمان شفافية احتساب التعريفات، ومراقبة جودة التموين بالكهرباء والغاز عبر كامل التراب الوطني. وتعد بوابتها الرقمية المرجع الأساسي لكل مواطن أو مستثمر يرغب في فهم بنية تسعيرة الطاقة أو رفع تظلم إداري موثق.',
        'من أبرز الخدمات المواطنية المتاحة على موقع اللجنة: أداة محاكاة الفاتورة الرسمية (mouhakat.creg.dz) التي تسمح بحساب قيمة الاستهلاك بدقة وفق الشرائح الأربع المعمول بها قانونا قبل السداد، إلى جانب منصة إلتماس (iltimess.creg.dz) المخصصة لإيداع الطعون الرسمية وتتبعها في حال استمرار الخلاف مع الموزع بعد تقديم الشكوى الأولية.',
        'يوضح هذا الدليل طريقة استخدام محاكي الفواتير خطوة بخطوة، الفارق بين صلاحيات سونلغاز ولجنة الضبط CREG، الشروط الشكلية لقبول الطعن الإلكتروني عبر إلتماس، وأبرز الحلول العملية عند الشك في قراءة العداد أو احتساب الشرائح.'
      ],
      fr: [
        "La Commission de Régulation de l’Électricité et du Gaz (CREG) exerce une mission de régulation indépendante visant à protéger les droits des consommateurs, garantir la transparence tarifaire et superviser la qualité d’approvisionnement sur le réseau national algérien. Son écosystème numérique constitue le point de référence officiel pour décrypter la tarification énergétique ou exercer un recours réglementaire.",
        "Parmi les téléservices les plus utiles pour les usagers figurent le simulateur officiel de facture Mouhakat (mouhakat.creg.dz), qui calcule le montant exact selon les quatre tranches de consommation en vigueur, ainsi que la plateforme Iltimess (iltimess.creg.dz) permettant de déposer et de suivre un recours officiel ou une demande d’information technique.",
        "Ce guide pratique détaille la répartition des rôles entre Sonelgaz et la CREG, les conditions de recevabilité d’un recours sur Iltimess, le mode d’emploi du simulateur Mouhakat et les réflexes à adopter face à une facturation contestée."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'معرفة مؤشرات الاستهلاك المسجلة في عداد الكهرباء (kWh) والغاز (Th) ورمز التعريفة المدون في الفاتورة.',
        'تقديم شكوى مكتوبة مسبقة لدى الوكالة التجارية لسونلغاز قبل تصعيد النزاع إلى منصة إلتماس.',
        'نسخ واضحة بصيغة PDF للفاتورة المتنازع بشأنها ووصل إيداع الشكوى الأولية للرفع في البوابة.',
        'بريد إلكتروني شخصي فعال لتلقي رقم تتبع الطعن وردود المصالح القانونية والتقنية للجنة.',
      ],
      fr: [
        'Index relevés sur les compteurs d’électricité (kWh) et de gaz (Th) ainsi que le code tarifaire de la facture.',
        'Justificatif d’une réclamation écrite déposée au préalable auprès de l’agence commerciale Sonelgaz.',
        'Copies PDF nettes de la facture contestée et de l’accusé de réception de la première réclamation.',
        'Adresse e-mail active pour recevoir le numéro de dossier Iltimess et les suites données par la CREG.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. التحقق من التعريفة ومحاكاة الفاتورة عبر mouhakat.creg.dz',
          fr: '1. Vérifier votre facture sur le simulateur mouhakat.creg.dz',
        },
        detail: {
          ar: 'أدخل الفرق بين القراءة الحالية والسابقة للعداد واختر تعريفتك للتأكد من تطابق المبلغ المحسوب مع فاتورة سونلغاز.',
          fr: 'Renseignez les index de consommation et votre code tarifaire afin de contrôler le détail des tranches facturées.',
        },
      },
      {
        title: {
          ar: '2. إيداع شكوى أولية لدى الوكالة التجارية لسونلغاز',
          fr: '2. Déposer d’abord une réclamation officielle chez Sonelgaz',
        },
        detail: {
          ar: 'في حال وجود فرق غير مبرر، قدم تظلما في وكالتك واحتفظ بوصل الاستلام كشرط ضروري قبل اللجوء للهيئة الضابطة.',
          fr: 'En cas d’écart anormal, saisissez votre agence Sonelgaz et conservez le récépissé de dépôt obligatoire.',
        },
      },
      {
        title: {
          ar: '3. فتح حساب وإيداع طعن على منصة إلتماس (Iltimess)',
          fr: '3. Soumettre votre recours sur la plateforme Iltimess',
        },
        detail: {
          ar: 'سجل في iltimess.creg.dz/register وأرفق الفاتورة والشكوى السابقة لطلب تدخل لجنة ضبط الكهرباء والغاز.',
          fr: 'Créez un compte sur iltimess.creg.dz/register et téléversez la facture ainsi que le justificatif préalable.',
        },
      },
      {
        title: {
          ar: '4. متابعة المعالجة أو تقديم طلب معلومة تنظيمية',
          fr: '4. Suivre l’instruction ou demander une information réglementaire',
        },
        detail: {
          ar: 'تابع حالة الطعن عبر فضائك الشخصي أو استعمل نافذة طلب معلومة للاستفسارات حول القوانين والتراخيص.',
          fr: 'Consultez l’état de votre requête depuis votre tableau de bord ou utilisez la rubrique demande d’information.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض الطعن شكليا في منصة إلتماس لعدم استنفاد الإجراء الأولي',
          fr: 'Irrecevabilité du recours sur Iltimess faute de démarche préalable',
        },
        solution: {
          ar: 'تأكد من إرفاق صورة وصل الشكوى المسجلة لدى سونلغاز ومرور الأجل الإداري للرد قبل إعادة إيداع الطعن عبر إلتماس.',
          fr: 'Joignez impérativement la preuve de réclamation adressée à Sonelgaz avant de soumettre le recours à la CREG.',
        },
      },
      {
        issue: {
          ar: 'اختلاف نتيجة محاكي CREG عن المبلغ الإجمالي للفاتورة الفصلية',
          fr: 'Écart entre l’estimation Mouhakat et le montant total TTC de la facture',
        },
        solution: {
          ar: 'تحقق من إدراج الرسوم الثابتة (حقوق الضبط، الطابع الجبائي، ورسوم التطهير أو القمامة إن وجدت) وفصل استهلاك ثلاثي كامل (90 يوما).',
          fr: 'Vérifiez que les redevances fixes, la TVA et les taxes locales ont été intégrées sur la même période de facturation.',
        },
      },
      {
        issue: {
          ar: 'عدم استلام رسالة تأكيد الحساب في بوابة إلتماس',
          fr: 'Courriel de confirmation Iltimess non reçu',
        },
        solution: {
          ar: 'افحص مجلد البريد غير المرغوب فيه واستخدم بريدا شخصيا موثوقا، أو راسل اللجنة عبر منصة الاتصال الرسمية على creg.gov.dz.',
          fr: 'Contrôlez votre dossier Spam et utilisez une adresse personnelle fiable ou le formulaire de contact sur creg.gov.dz.',
        },
      },
    ],
    extraFaqs: [],
  },
  'dgfp.gov': {
    intro: {
      ar: [
        'تعتبر المديرية العامة للوظيفة العمومية والإصلاح الإداري (DGFP) الهيئة المركزية المشرفة على تنظيم التوظيف العمومي، ضبط القوانين الأساسية للموظفين، وضمان مبدأ المساواة والشفافية في المسابقات الإدارية بالجزائر. ومن خلال بوابتها الرقمية المتخصصة، أتاحت المديرية أدوات مرجعية تخدم كل من المترشحين للوظائف العمومية والموظفين الممارسين.',
        'تضم المنظومة الرقمية للقطاع ركنين رئيسيين: الأرضية الرقمية للمعادلات الإدارية (equivalence.dgfp.gov.dz) التي تمكن حاملي الشهادات الجامعية والتكوينية من طلب وتحديد المعادلة القانونية لدبلوماتهم دون تنقل متكرر، والأرضية الوطنية لإشهار عروض التوظيف (concours-fonction-publique.gov.dz) التي تنشر مركزيا كافة مسابقات التوظيف على أساس الشهادة أو الاختبار ومكتبة القوانين التنظيمية.',
        'يشرح هذا الدليل الفرق بين المعادلة الأكاديمية والإدارية، قائمة الوثائق الضرورية لإيداع ملف المعادلة الإلكترونية أو الترشح لمسابقة عمومية، الخطوات العملية لاستخدام المنصة، ومعالجة الإشكالات المتكررة في مطابقة التخصصات.'
      ],
      fr: [
        "La Direction Générale de la Fonction Publique et de la Réforme Administrative (DGFP) supervise l’ensemble de la réglementation statutaire des agents publics, la validation des concours de recrutement et l’égalité d’accès aux emplois de l’État en Algérie. Ses plateformes numériques centralisent l’information légale et accélèrent les formalités des candidats comme des administrations.",
        "L’écosystème digital de la DGFP s’articule autour de deux piliers majeurs : la plateforme des équivalences administratives (equivalence.dgfp.gov.dz) permettant aux diplômés de solliciter la reconnaissance réglementaire de leur titre pour l’accès aux grades publics, et le portail national de publicité des concours (concours-fonction-publique.gov.dz) assorti d’un recueil juridique complet.",
        "Ce guide clarifie la distinction entre équivalence académique et administrative, détaille les pièces exigées lors du dépôt en ligne, présente le parcours étape par étape et apporte des solutions concrètes aux rejets de dossiers ou erreurs de spécialité."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'نسخة واضحة من الدبلوم أو شهادة التخرج وكشوف النقاط لجميع سنوات الدراسة بصيغة PDF.',
        'المعادلة الأكاديمية الصادرة عن وزارة التعليم العالي مسبقا إذا كانت الشهادة ممنوحة من جامعة أجنبية.',
        'بطاقة التعريف الوطنية البيومترية واستمارة المعلومات رقم 1 عند التحضير لمسابقات التوظيف.',
        'الاطلاع المسبق على شروط التخصص والرتبة في إعلان المسابقة المنشور على بوابة الإشهار.',
      ],
      fr: [
        'Copie numérisée lisible du diplôme et des relevés de notes de tout le cursus au format PDF.',
        'Équivalence académique préalable du MESRS pour tout diplôme délivré par un établissement étranger.',
        'CNIBE et fiche de renseignements réglementaire n° 1 pour les candidatures aux concours publics.',
        'Vérification préalable des intitulés de spécialités requis dans l’avis de concours officiel.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. التحقق من التخصصات وعروض التوظيف في البوابة الوطنية',
          fr: '1. Consulter les avis de concours sur le portail national',
        },
        detail: {
          ar: 'تصفح concours-fonction-publique.gov.dz للاطلاع على المناصب المفتوحة حسب الولاية والقطاع وآجال الترشح.',
          fr: 'Filtrez les avis de recrutement publiés par wilaya, ministère ou administration et relevez la date limite.',
        },
      },
      {
        title: {
          ar: '2. إيداع طلب المعادلة الإدارية عبر equivalence.dgfp.gov.dz',
          fr: '2. Déposer une demande d’équivalence sur equivalence.dgfp.gov.dz',
        },
        detail: {
          ar: 'في حال عدم وضوح مطابقة الشهادة مع الرتبة المطلوبة، أنشئ طلبا إلكترونيا وأرفق الدبلوم وكشوف النقاط.',
          fr: 'Si votre intitulé de diplôme nécessite une correspondance officielle, créez un dossier avec vos pièces scannées.',
        },
      },
      {
        title: {
          ar: '3. تتبع دراسة الطلب وتحميل مقرر المعادلة أو نموذج الاستمارة',
          fr: '3. Suivre le traitement et télécharger les formulaires officiels',
        },
        detail: {
          ar: 'راقب بريدك الإلكتروني لمتابعة استكمال الملف أو سحب قرار المعادلة الإدارية المعتمد لإرفاقه بملف التوظيف.',
          fr: 'Suivez les notifications de la commission d’équivalence et téléchargez votre attestation pour les concours.',
        },
      },
      {
        title: {
          ar: '4. إيداع ملف المسابقة لدى الإدارة المعنية في الأجل القانوني',
          fr: '4. Déposer le dossier de candidature auprès de l’organisme recruteur',
        },
        detail: {
          ar: 'أودع الملف الكامل (الطلب الخطي، الاستمارة رقم 1، الدبلوم، المعادلة عند الاقتضاء) واحتفظ بوصل الإيداع.',
          fr: 'Remettez le dossier complet dans le délai légal de 15 jours ouvrables et conservez précieusement le récépissé.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض ملف الترشح لمسابقة توظيف بحجة عدم مطابقة تخصص الشهادة',
          fr: 'Rejet d’une candidature pour non-conformité de spécialité',
        },
        solution: {
          ar: 'لكل مترشح الحق في إيداع طعن إلكتروني أو كتابي لدى الإدارة المنظمة قبل تاريخ الاختبار بـ 5 أيام على الأقل مرفوقا بقرار معادلة DGFP عند وجوده.',
          fr: 'Vous disposez d’un droit de recours écrit auprès de l’autorité organisatrice au moins 5 jours ouvrables avant les épreuves.',
        },
      },
      {
        issue: {
          ar: 'تأخر الرد على طلب المعادلة الإدارية لشهادة أجنبية',
          fr: 'Retard d’instruction d’une équivalence pour diplôme étranger',
        },
        solution: {
          ar: 'تأكد من إرفاق قرار المعادلة الأكاديمية من وزارة التعليم العالي وترجمة البرنامج البيداغوجي إذا لم يكن بالعربية أو الفرنسية.',
          fr: 'Assurez-vous que l’équivalence académique MESRS et le descriptif traduit des modules ont bien été joints au dossier.',
        },
      },
      {
        issue: {
          ar: 'عدم تحميل موقع concours-fonction-publique عند فتحه عبر رابط مشفر',
          fr: 'Erreur de connexion sécurisée sur concours-fonction-publique.gov.dz',
        },
        solution: {
          ar: 'استعمل الرابط الرسمي المباشر كما هو منشور من المديرية أو تصفح الإعلانات والنماذج عبر الموقع الرئيسي dgfp.gov.dz.',
          fr: 'Accédez via l’adresse officielle publiée ou consultez les rubriques principales directement sur dgfp.gov.dz.',
        },
      },
    ],
    extraFaqs: [],
  },
  dgsn: {
    intro: {
      ar: [
        'تواصل المديرية العامة للأمن الوطني (الشرطة الجزائرية DGSN) تطوير خدماتها الرقمية لتعزيز الأمن الجواري وتسهيل الإجراءات الإدارية على المواطنين عبر مختلف الولايات الحضرية. وبفضل إطلاق البوابة الإلكترونية dgsn.dz وتطبيق الهاتف الرسمي ألو الشرطة (Allo Chorta)، لم يعد المواطن مضطرا للانتظار الطويل للإبلاغ عن مخالفة أو بدء إجراءات التصريح بضياع وثائق الهوية.',
        'تتنوع الخدمات الرقمية المتاحة بين منصة التصريح المسبق بضياع الوثائق (e-declaration) التي تجهز الملف إلكترونيا قبل المصادقة في مقر الأمن الحضري، وخدمة الإدلاء بشهادة عن بعد التي تضمن السرية التامة، وقسم البحث في فائدة العائلات، واستطلاعات جودة الخدمة الشرطية، إضافة إلى الأرقام الوطنية المجانية 17 للنجدة و1548 للإصغاء و104 لحماية الطفولة والاختطاف.',
        'يجمع هذا الدليل الميداني جميع الروابط الرسمية للشرطة الجزائرية، خطوات التصريح بضياع الوثائق دون أخطاء، طريقة إرسال البلاغات الموثقة عبر تطبيق ألو الشرطة، وشروط وضوابط مسابقات التوظيف في صفوف الأمن الوطني.'
      ],
      fr: [
        "La Direction Générale de la Sûreté Nationale (DGSN) modernise en continu ses services numériques pour renforcer la police de proximité et simplifier les démarches citoyennes dans les zones urbaines. Grâce au portail officiel dgsn.dz et à l’application mobile Allo Chorta, les usagers disposent de canaux rapides pour pré-déclarer une perte de documents ou signaler un incident sécuritaire.",
        "L’éventail des services en ligne couvre la plateforme e-declaration pour préparer les attestations de perte de pièces d’identité, le formulaire confidentiel de déposition de témoignage à distance, la rubrique d’avis de recherche dans l’intérêt des familles, les questionnaires permanents sur la qualité d’accueil (QNSS / QSC) ainsi que les lignes gratuites 17 (urgence), 1548 (écoute) et 104 (alerte enlèvement).",
        "Ce guide complet recense l’ensemble des liens certifiés de la Police Algérienne, la procédure pratique de déclaration de perte, l’utilisation optimale d’Allo Chorta et les critères d’accès aux concours de recrutement."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'معلومات الوثيقة الضائعة (الرقم، تاريخ ومكان الإصدار) وأي وثيقة هوية بديلة عند التوجه لاستلام شهادة الضياع.',
        'تثبيت تطبيق ألو الشرطة مع تفعيل الموقع الجغرافي GPS لإرسال بلاغ مصور أو حادث مروري.',
        'استيفاء شروط السن والجنسية واللياقة البدنية والبصرية والشهادة المطلوبة عند الترشح لمسابقات التوظيف.',
        'توفر تفاصيل دقيقة ومصداقية تامة عند استخدام خدمة الإدلاء بشهادة أو الرقم الأخضر 1548.',
      ],
      fr: [
        'Références de la pièce égarée et autre document d’identité valide lors du retrait en commissariat.',
        'Application Allo Chorta installée avec GPS activé pour transmettre une alerte géolocalisée.',
        'Respect des critères de nationalité, d’âge, de diplôme et d’aptitude médicale pour les concours DGSN.',
        'Informations précises et vérifiables lors de l’envoi d’un témoignage confidentiel ou appel au 1548.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. التصريح المسبق بضياع الوثائق عبر dgsn.dz/e-declaration',
          fr: '1. Remplir la pré-déclaration sur dgsn.dz/e-declaration',
        },
        detail: {
          ar: 'اختر نوع الوثيقة الضائعة (بطاقة تعريف، جواز سفر، رخصة سياقة)، أدخل بياناتك الشخصية ومكان الضياع التقريبي واحفظ الاستمارة.',
          fr: 'Indiquez la nature du document perdu, vos informations d’état civil et les circonstances avant validation.',
        },
      },
      {
        title: {
          ar: '2. التوجه لمقر الأمن الحضري لاستلام الشهادة الرسمية',
          fr: '2. Retirer l’attestation officielle au commissariat compétent',
        },
        detail: {
          ar: 'تقدم بأقرب مركز شرطة لإظهار الرقم المرجعي واستلام شهادة الضياع الموقعة اللازمة لتجديد الوثيقة في البلدية أو الولاية.',
          fr: 'Présentez-vous à la sûreté urbaine avec votre référence en ligne pour obtenir le récépissé officiel cacheté.',
        },
      },
      {
        title: {
          ar: '3. الإبلاغ السريع عبر تطبيق ألو الشرطة أو الأرقام 17 و1548',
          fr: '3. Utiliser Allo Chorta ou les lignes 17 / 1548 / 104',
        },
        detail: {
          ar: 'في الحالات الطارئة اتصل فورا بالرقم 17، ولإرسال بلاغ مروري أو بيئي بالصور استخدم تطبيق ألو الشرطة.',
          fr: 'Appelez le 17 pour toute urgence immédiate ou utilisez Allo Chorta pour signaler un incident avec photo.',
        },
      },
      {
        title: {
          ar: '4. المشاركة في الاستبيان أو متابعة عروض التوظيف والبحث للعائلات',
          fr: '4. Participer aux enquêtes QSC ou suivre le recrutement DGSN',
        },
        detail: {
          ar: 'ساهم في تحسين الخدمة عبر algeriepolice.dz/qsc أو تابع إعلانات مسابقات التوظيف والشهادات على dgsn.dz.',
          fr: 'Évaluez l’accueil sur algeriepolice.dz/qsc ou consultez les campagnes de recrutement sur dgsn.dz.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'الخطأ في إدخال رقم الوثيقة الضائعة أثناء ملء استمارة e-declaration',
          fr: 'Oubli du numéro de la pièce perdue lors de la saisie e-declaration',
        },
        solution: {
          ar: 'راجع أي نسخة مصورة سابقة أو استعمل رقم التعريف الوطني NIN الخاص بك عند مراجعة مركز الشرطة حيث يتم الاستخراج عبر السجل المركزي.',
          fr: 'Utilisez votre NIN ou présentez-vous au commissariat avec un justificatif d’identité pour retrouver les références exactes.',
        },
      },
      {
        issue: {
          ar: 'تعذر إرسال بلاغ عبر تطبيق ألو الشرطة',
          fr: 'Échec d’envoi d’un signalement dans l’application Allo Chorta',
        },
        solution: {
          ar: 'تأكد من تفعيل بيانات الهاتف، منح صلاحية الموقع الجغرافي والكاميرا للتطبيق، أو الاتصال مباشرة بالرقم المجاني 1548.',
          fr: 'Activez le GPS et les autorisations photo dans les réglages Android, ou appelez directement le numéro vert 1548.',
        },
      },
      {
        issue: {
          ar: 'ضياع الوثيقة في منطقة ريفية خارج اختصاص الأمن الحضري',
          fr: 'Perte survenue en zone rurale hors compétence urbaine',
        },
        solution: {
          ar: 'في المناطق الريفية وشبه الحضرية التي يغطيها الدرك الوطني، استعمل منصة الشكاوى المسبقة للدرك الوطني ppgn.mdn.dz أو اتصل بالرقم 1055.',
          fr: 'Dans les communes rurales couvertes par la Gendarmerie Nationale, déposez la déclaration sur ppgn.mdn.dz ou appelez le 1055.',
        },
      },
    ],
    extraFaqs: [],
  },
  djezzy: {
    intro: {
      ar: [
        'يعد متعامل الهاتف النقال جازي (Djezzy) من أكبر شركات الاتصالات في الجزائر وأكثرها انتشارا في خدمات الصوت والإنترنت عبر الجيل الرابع. ولمواكبة حاجات الملايين من مشتركيه، طور المتعامل منظومة خدمات رقمية متكاملة تسمح بإجراء كل المعاملات اليومية دون زيارة الوكالة التجارية، بدءا من تعبئة الرصيد ودفع الفواتير إلكترونيا وصولا إلى تخصيص الباقات الشهرية عبر الهاتف.',
        'تسمح بوابة التعبئة الرسمية (moncompte.djezzy.dz/ar/guest/recharge) لأي مشترك أو قريب له بشحن رصيد الفليكسي أو تسديد مستحقات خطوط الدفع البعدي بالبطاقة الذهبية لبريد الجزائر أو بطاقة CIB البنكية دون أي عمولات إضافية. كما يجمع تطبيق Djezzy App لوحة تحكم حية لمتابعة استهلاك الجيغابايت، تفعيل عروض الإنترنت، والتحكم الكامل في الاشتراكات الإضافية.',
        'يضع هذا الدليل بين يديك دليلا مبسطا لجميع خدمات جازي الرقمية، قائمة الرموز المختصرة USSD الضرورية، إجراءات طلب الشريحة الإلكترونية eSIM أو تعويض الشريحة الضائعة، وحلول مشاكل الشحن الإلكتروني أو استهلاك الرصيد.'
      ],
      fr: [
        "L’opérateur de téléphonie mobile Djezzy figure parmi les acteurs majeurs des télécommunications et de l’internet mobile 4G en Algérie. Pour offrir une autonomie maximale à ses abonnés prépayés, postpayés et professionnels, l’opérateur a digitalisé la quasi-totalité de ses opérations courantes sur portail web et application mobile.",
        "Grâce à la page de rechargement direct (moncompte.djezzy.dz/ar/guest/recharge), chacun peut créditer son compte ou régler sa facture mensuelle sans frais supplémentaires via la carte Edahabia d’Algérie Poste ou la carte interbancaire CIB. En parallèle, l’application Djezzy App permet de surveiller sa consommation data en temps réel, de composer ses forfaits sur mesure et de gérer ses options actives.",
        "Retrouvez dans cette fiche les liens officiels vérifiés de Djezzy, la liste des codes USSD indispensables (*710#, *720#, *99#), les conditions d’accès à la technologie eSIM et la marche à suivre en cas d’incident de paiement ou de perte de carte SIM."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'رقم هاتف جازي (07xx) نشط وغير موقوف للاستفادة من بوابة التعبئة وتطبيق Djezzy App.',
        'بطاقة الذهبية أو بطاقة ما بين البنوك CIB مفعلة بخدمة رمز الأمان SMS OTP للدفع عبر الإنترنت.',
        'بطاقة التعريف الوطنية البيومترية عند التوجه إلى الوكالة التجارية لاستبدال الشريحة أو طلب eSIM.',
        'تحديث تطبيق Djezzy App إلى آخر نسخة على أندرويد للاستفادة من العروض الحصرية والمكافآت.',
      ],
      fr: [
        'Ligne mobile Djezzy (07xx) active et identifiée auprès de l’opérateur.',
        'Carte Edahabia ou carte CIB activée pour le e-paiement avec réception des codes OTP par SMS.',
        'Carte Nationale d’Identité Biométrique originale pour tout remplacement de SIM ou activation eSIM en agence.',
        'Application Djezzy App mise à jour sur smartphone pour accéder aux offres digitales et suivis.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. التعبئة السريعة للرصيد عبر moncompte.djezzy.dz',
          fr: '1. Recharger votre crédit en ligne sur moncompte.djezzy.dz',
        },
        detail: {
          ar: 'أدخل رقم الهاتف مرتين، اختر المبلغ أو الباقة، وأتمم الدفع عبر بوابة SATIM أو بريد الجزائر مع حفظ وصل العملية.',
          fr: 'Saisissez votre numéro deux fois, choisissez le montant ou forfait et réglez par Edahabia ou CIB.',
        },
      },
      {
        title: {
          ar: '2. تفعيل وإدارة باقات الإنترنت عبر تطبيق Djezzy App',
          fr: '2. Gérer vos forfaits data et appels dans Djezzy App',
        },
        detail: {
          ar: 'سجل الدخول عبر رمز التحقق SMS لتتابع المتبقي من الإنترنت والدقائق وتفعل عروضك بالضغط المباشر.',
          fr: 'Authentifiez-vous par SMS pour consulter votre solde data en temps réel et activer vos options.',
        },
      },
      {
        title: {
          ar: '3. استخدام الرموز المختصرة السريعة دون اتصال إنترنت',
          fr: '3. Utiliser les codes USSD hors connexion',
        },
        detail: {
          ar: 'استعمل *710# لمعرفة الرصيد، *720# لعروض الدوبل والإنترنت، و*99# لمعرفة رقم شريحتك في ثوان.',
          fr: 'Composez *710# (solde), *720# (forfaits) ou *99# (affichage de votre numéro) à tout moment.',
        },
      },
      {
        title: {
          ar: '4. التواصل مع مصلحة الزبائن 777 أو زيارة الوكالة عند الضياع',
          fr: '4. Contacter le service client 777 ou vous rendre en boutique',
        },
        detail: {
          ar: 'في حال ضياع الهاتف اطلب 777 لتجميد الشريحة فورا ثم راجع أقرب وكالة ببطاقتك البيومترية لاستخراج شريحة جديدة.',
          fr: 'En cas de perte ou vol, appelez le 777 pour suspendre la ligne puis présentez votre CNIBE en boutique.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'نفاذ الرصيد المالي بسرعة عند تشغيل بيانات الهاتف 4G',
          fr: 'Consommation rapide du crédit principal lorsque les données 4G sont activées',
        },
        solution: {
          ar: 'تأكد من عدم انتهاء حجم باقة الإنترنت قبل تصفحك؛ فعل حماية البيانات في تطبيق Djezzy App لتفادي الخصم التلقائي من الرصيد العادي بعد نفاذ الباقة.',
          fr: 'Vérifiez l’expiration de votre forfait dans Djezzy App et activez le blocage hors-forfait ou renouvelez votre pass avant la navigation.',
        },
      },
      {
        issue: {
          ar: 'فشل إرسال رمز التفعيل SMS أثناء الدخول لتطبيق جازي',
          fr: 'Non-réception du code OTP lors de la connexion à Djezzy App',
        },
        solution: {
          ar: 'تأكد من إيقاف تشغيل Wi-Fi مؤقتا والدخول عبر شبكة 4G الخاصة بشريحة جازي نفسها لتسريع التحقق التلقائي من الرقم.',
          fr: 'Désactivez temporairement le Wi-Fi et connectez-vous via les données mobiles 4G de votre carte SIM Djezzy.',
        },
      },
      {
        issue: {
          ar: 'اقتطاع مبلغ التعبئة من البطاقة دون وصول الفليكسي للرقم',
          fr: 'Débit bancaire ou CCP sans réception du rechargement Djezzy',
        },
        solution: {
          ar: 'راجع الرقم المكتوب في وصل الدفع وتواصل مع مركز الاتصال 777 برقم المرجع المالي لإتمام التسوية أو استرجاع المبلغ تلقائيا خلال 48 ساعة.',
          fr: 'Vérifiez le numéro saisi sur le reçu SATIM/Edahabia et transmettez l’identifiant de transaction au 777.',
        },
      },
    ],
    extraFaqs: [],
  },
  douane: {
    intro: {
      ar: [
        'تقود المديرية العامة للجمارك الجزائرية تحولا رقميا استراتيجيا من خلال إطلاق النظام المعلوماتي الجديد للجمارك ALCES (alces.douane.gov.dz)، الذي يهدف إلى رقمنة كافة المعاملات الجمركية ومكافحة البيروقراطية وتعزيز الشفافية في التجارة الخارجية والمنافذ الحدودية. ويخدم هذا النظام كلا من المؤسسات الاقتصادية، الوكلاء الجمركيين، والمسافرين والأفراد.',
        'من أبرز الأدوات المتاحة للمواطنين على بوابة ALCES: محاكي احتساب التعريفة الجمركية والضرائب عند استيراد واقتناء سيارة، وخدمة التسجيل الفردي للأشخاص لتسيير ملفات المركبات أو شهادة تغيير الإقامة (CCR) لأفراد الجالية. أما بالنسبة للشركات والمستوردين، فتتيح المنصة تسجيل المؤسسات، متابعة التصريحات الجمركية عن بعد، وطلب المعلومة التعريفية الملزمة (RTC) عبر douane.gov.dz/rtc لتثبيت التصنيف التعريفي للبضائع مسبقا.',
        'يوفر هذا الدليل الشامل شرحا لآلية الولوج إلى نظام ALCES للأفراد والشركات، خطوات محاكاة رسوم السيارات، الوثائق الضرورية لملفات تغيير الإقامة CCR، وأساليب تفادي الأخطاء الجمركية والتصريح بالعملة.'
      ],
      fr: [
        "La Direction Générale des Douanes Algériennes a engagé une modernisation profonde avec le déploiement de son système d’information intégré ALCES (alces.douane.gov.dz). Cette plateforme vise la dématérialisation complète de la chaîne douanière, l’accélération du dédouanement aux ports et frontières ainsi qu’une traçabilité optimale pour les opérateurs économiques et les particuliers.",
        "Pour les citoyens et membres de la communauté nationale à l’étranger, ALCES offre notamment un simulateur officiel de calcul des droits et taxes à l’importation de véhicules ainsi qu’un espace d’inscription individuelle facilitant le suivi des dossiers véhicules et de changement de résidence (CCR). Les entreprises disposent quant à elles d’un guichet d’enrôlement dédié et du service de Renseignement Tarifaire Contraignant (RTC) pour sécuriser la nomenclature de leurs marchandises.",
        "Ce guide pratique rassemble les liens officiels vérifiés des Douanes Algériennes, les pièces requises pour l’inscription ALCES ou le dossier CCR, les étapes de simulation douanière et les réponses aux incidents fréquents."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بطاقة التعريف الوطنية البيومترية (NIN) وجواز السفر ساري المفعول للتسجيل الفردي في منصة ALCES.',
        'السجل التجاري الإلكتروني ورقم التعريف الجبائي NIF وتفويض الممثل القانوني لتسجيل الشركات.',
        'شهادة التسجيل القنصلي لأكثر من 3 سنوات وقائمة الأمتعة عند طلب امتياز تغيير الإقامة CCR للجالية.',
        'بيانات المركبة الدقيقة (نوع المحرك، السعة، سنة الصنع، القيمة) قبل تشغيل محاكي الجمركة.',
      ],
      fr: [
        'CNIBE (NIN) et passeport en cours de validité pour l’inscription individuelle sur ALCES.',
        'Registre de commerce électronique, NIF et mandat légal pour l’enrôlement des sociétés.',
        'Attestation consulaire de plus de 3 ans de résidence à l’étranger pour les dossiers CCR.',
        'Caractéristiques techniques exactes du véhicule (motorisation, cylindrée, année, valeur) pour le simulateur.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. حساب الرسوم المقدرة للمركبات عبر محاكي ALCES الرسمي',
          fr: '1. Simuler les droits de douane véhicule sur ALCES',
        },
        detail: {
          ar: 'افتح رابط pot0200-q1 في منصة ALCES واختر خصائص السيارة لتقدير الحقوق الجمركية والرسم على القيمة المضافة قبل الشراء.',
          fr: 'Accédez au simulateur pot0200-q1 sur alces.douane.gov.dz et saisissez les caractéristiques du véhicule.',
        },
      },
      {
        title: {
          ar: '2. إنشاء حساب فردي أو حساب شركة على بوابة الجمارك',
          fr: '2. S’inscrire en ligne en tant que particulier ou entreprise',
        },
        detail: {
          ar: 'استعمل رابط التسجيل الفردي (pot0001-s1) أو تسجيل الشركات (pot0003-s1) وأدخل بيانات الهوية والسجل التجاري بدقة.',
          fr: 'Choisissez le parcours particulier (pot0001-s1) ou entreprise (pot0003-s1) et renseignez vos identifiants.',
        },
      },
      {
        title: {
          ar: '3. التحقق من التعريفة الملزمة RTC للبضائع التجارية',
          fr: '3. Vérifier le classement tarifaire RTC (opérateurs)',
        },
        detail: {
          ar: 'بالنسبة للمستوردين، راجع douane.gov.dz/rtc لتقديم طلب تثبيت البند الجمركي وتجنب أي تأخير عند وصول الشحنة.',
          fr: 'Les entreprises consultent douane.gov.dz/rtc pour obtenir une décision préalable sur le code SH des marchandises.',
        },
      },
      {
        title: {
          ar: '4. متابعة المعاملات أو الاتصال بالرقم الأخضر 1023 عند الحاجة',
          fr: '4. Suivre vos opérations ou contacter le numéro vert 1023',
        },
        detail: {
          ar: 'ادخل دوريا إلى alces.douane.gov.dz/login أو تواصل عبر استمارة الاستعلام الرسمية لأي توضيح إداري.',
          fr: 'Connectez-vous à votre espace ALCES ou utilisez la ligne verte 1023 et le formulaire officiel de réclamation.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض تسجيل الشركة في منصة ALCES أو عدم مطابقة NIF',
          fr: 'Erreur d’enrôlement entreprise liée au NIF ou au registre de commerce',
        },
        solution: {
          ar: 'تأكد من تطابق رقم التعريف الجبائي NIF المرقم لدى المديرية العامة للضرائب مع السجل التجاري في CNRC قبل إعادة تقديم طلب التفعيل.',
          fr: 'Vérifiez la concordance exacte entre le NIF fiscal actif et l’extrait CNRC avant de soumettre la demande.',
        },
      },
      {
        issue: {
          ar: 'تجاوز المهلة الممنوحة لتجديد سند العبور الجمركي للمركبات (TPD)',
          fr: 'Expiration du Titre de Passage en Douane (TPD) pour véhicule étranger',
        },
        solution: {
          ar: 'يجب التقدم لأقرب مفتشية أو مكتب جمارك قبل انقضاء الأجل المحدد لتمديد السند عند المبرر القانوني أو إخراج المركبة لتفادي الغرامات.',
          fr: 'Présentez-vous impérativement au bureau des douanes le plus proche avant la date limite pour demander une prorogation motivée.',
        },
      },
      {
        issue: {
          ar: 'استفسار حول الأمتعة المحظورة أو السقوف القانونية للعملة في المطار',
          fr: 'Doute sur les franchises voyageurs ou déclarations de devises',
        },
        solution: {
          ar: 'تواصل قبل السفر عبر صفحة الاستعلام في douane.gov.dz أو الرقم الأخضر 1023 للاطلاع على آخر التحديثات المطبقة على المسافرين.',
          fr: 'Consultez la rubrique voyageurs sur douane.gov.dz ou appelez le 1023 avant votre départ pour vérifier les seuils en vigueur.',
        },
      },
    ],
    extraFaqs: [],
  },
  'dronet.mdn': {
    intro: {
      ar: [
        'أنشئ المركز الوطني لمنظومات الطائرات بدون طيار على المتن (CNSAPB) التابع لوزارة الدفاع الوطني تنفيذا لأحكام المرسوم الرئاسي رقم 21-285 المؤرخ في 13 جويلية 2021، ليكون الهيئة المرجعية الوحيدة المخولة بتأطير وضبط وتنظيم كافة النشاطات المرتبطة بالطائرات بدون طيار (الدرون) عبر التراب الوطني. وتهدف البوابة الإلكترونية الرسمية dronet.mdn.dz إلى توحيد المسار الإداري والأمني للمتعاملين والمواطنين بشفافية تامة.',
        'يغطي اختصاص المركز جميع مراحل دورة حياة منظومة الدرون في الجزائر: التسجيل والتصريح الإجباري لكافة الطائرات بدون طيار المملوكة للأشخاص الطبيعيين أو المعنويين، دراسة ومنح الاعتمادات المهنية للتصنيع والتجميع والاستيراد والتصدير والتجارة والصيانة والتأجير، إضافة إلى اعتماد مؤسسات التصوير الجوي والمسح الطبوغرافي والفلاحة الذكية ومراكز تكوين الطيارين عن بعد.',
        'كما توفر المنصة خدمة حجز المواعيد المسبقة (dronet.mdn.dz/ar/rendezvous) للمقيمين لتقديم الملفات والمطابقة التقنية للأجهزة. ويستعرض هذا الدليل كافة التراخيص والاعتمادات المطلوبة، شروط تسوية الوضعية القانونية، الإجراءات الجمركية للإفراج، وقنوات التواصل الرسمية المعتمدة لدى المركز.'
      ],
      fr: [
        "Institué en application du Décret présidentiel n° 21-285 du 13 juillet 2021 et placé sous la tutelle du Ministère de la Défense Nationale, le Centre National des Systèmes d’Aéronefs Sans Pilote à Bord (CNSAPB) constitue l’autorité unique chargée de réguler, enregistrer et contrôler l’ensemble des activités liées aux drones en Algérie. Son portail officiel dronet.mdn.dz/ar centralise les formulaires, le cadre réglementaire et les demandes d’agréments.",
        "Le périmètre du Centre englobe l’enregistrement obligatoire de tout appareil détenu par des particuliers ou des personnes morales, la délivrance des agréments professionnels (fabrication, import-export, commercialisation, maintenance, location, prestations aériennes telles que l’audiovisuel, la topographie et l’agriculture intelligente), l’agrément des écoles de télépilotage ainsi que l’octroi des autorisations préalables d’acquisition, de dédouanement et de vol.",
        "Grâce au module de prise de rendez-vous en ligne (dronet.mdn.dz/ar/rendezvous), les usagers résidant en Algérie planifient le dépôt de leurs dossiers et l’inspection technique de conformité. Ce guide résume les pièces nécessaires, les règles à respecter et les coordonnées officielles du CNSAPB."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'وثيقة الهوية الوطنية (للأشخاص الطبيعيين) أو السجل التجاري والقانون الأساسي (للمؤسسات والشركات).',
        'البطاقة التقنية الكاملة للطائرة بدون طيار تتضمن الطراز، الوزن، المدى، الترددات، والرقم التسلسلي الدقيق.',
        'حجز موعد رسمي مسبق عبر dronet.mdn.dz/ar/rendezvous قبل التقدم الفعلي لإيداع الملفات أو الأجهزة.',
        'الحصول على موافقة واقتناء مسبق قبل إتمام أي عملية شراء أو استيراد أو إفراج جمركي لمنظومات الدرون.',
      ],
      fr: [
        'CNIBE (personne physique) ou registre de commerce et statuts (personne morale).',
        'Fiche technique détaillée de l’aéronef précisant modèle, masse, fréquences radio et numéro de série.',
        'Confirmation de rendez-vous obtenue au préalable sur dronet.mdn.dz/ar/rendezvous.',
        'Autorisation préalable d’acquisition avant tout achat, importation ou formalité de mainlevée douanière.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الاطلاع على المرسوم الرئاسي 21-285 وتحديد نوع الطلب في dronet.mdn.dz',
          fr: '1. Identifier la démarche adaptée sur dronet.mdn.dz',
        },
        detail: {
          ar: 'حدد هل ملفك يتعلق بتصريح لحيازة درون، اعتماد مهني للتصوير أو الاستيراد، أو رخصة تحليق وتكوين، وحمل الاستمارة المطابقة.',
          fr: 'Déterminez s’il s’agit d’une déclaration, d’un agrément professionnel ou d’une autorisation de vol selon le Décret 21-285.',
        },
      },
      {
        title: {
          ar: '2. تجهيز الوثائق الإدارية والمواصفات التقنية للمنظومة',
          fr: '2. Constituer le dossier administratif et technique',
        },
        detail: {
          ar: 'أعد نسخ الهوية أو ملف الشركة، المواصفات الفنية للجهاز، شهادة المنشأ أو فاتورة الشراء، ومخطط المهمة عند طلب التحليق.',
          fr: 'Rassemblez les justificatifs d’identité ou de société, la fiche technique du drone et le plan de mission le cas échéant.',
        },
      },
      {
        title: {
          ar: '3. حجز موعد رسمي عبر dronet.mdn.dz/ar/rendezvous',
          fr: '3. Prendre un rendez-vous en ligne sur dronet.mdn.dz/ar/rendezvous',
        },
        detail: {
          ar: 'احجز موعدا مسبقا من المنصة الرسمية لتسليم الملف وإجراء المطابقة التقنية اللازمة لمنظومة الطائرة بدون طيار.',
          fr: 'Planifiez votre passage en ligne via le module officiel de rendez-vous pour le dépôt et le contrôle technique.',
        },
      },
      {
        title: {
          ar: '4. التواصل مع مصالح المركز عبر CONTACT-CNSAPB@MDN.DZ',
          fr: '4. Suivre le dossier via les canaux officiels du Centre',
        },
        detail: {
          ar: 'للاستفسارات التنظيمية أو تأكيد المواعيد، راسل البريد الإلكتروني الرسمي للمركز أو تواصل عبر الخطوط الهاتفية المعلنة في البوابة.',
          fr: 'Utilisez exclusivement le courriel officiel CONTACT-CNSAPB@MDN.DZ pour toute précision réglementaire.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'حجز طائرة بدون طيار في المطار أو الميناء لغياب الرخصة المسبقة',
          fr: 'Retenue d’un drone en douane à l’arrivée faute d’autorisation préalable',
        },
        solution: {
          ar: 'لا يجوز إدخال أي طائرة درون إلى التراب الوطني دون رخصة اقتناء وإفراج جمركي مسبقة من CNSAPB؛ تقدم بطلب تسوية وملف مبرر عبر المواعيد الرسمية للمركز.',
          fr: 'L’introduction sur le territoire exige une autorisation préalable du CNSAPB ; déposez un dossier de régularisation auprès du Centre sur rendez-vous.',
        },
      },
      {
        issue: {
          ar: 'رغبة مؤسسة سمعية بصرية أو هندسية في استخدام درون لأول مرة',
          fr: 'Entreprise souhaitant réaliser légalement des prises de vues ou relevés aériens',
        },
        solution: {
          ar: 'يجب على الشركة الحصول أولا على اعتماد مقدمي خدمات الطائرات بدون طيار وتأهيل طيار معتمد، ثم استصدار رخصة تحليق محددة لكل مهمة جغرافية.',
          fr: 'L’entreprise doit obtenir l’agrément de prestataire de services aériens, disposer d’un télépilote certifié et solliciter une autorisation par mission.',
        },
      },
      {
        issue: {
          ar: 'عدم توفر فواتير قديمة لطائرة درون مملوكة قبل صدور التنظيم',
          fr: 'Absence de facture d’achat pour un appareil détenu antérieurement',
        },
        solution: {
          ar: 'احجز موعدا عبر المنصة للتصريح وتسوية الوضعية، وأحضر الجهاز كاملا بالرقم التسلسلي مع تصريح شرفي يوضح ظروف الحيازة لتسجيله وفق الضوابط.',
          fr: 'Prenez rendez-vous sur dronet.mdn.dz/ar/rendezvous pour présenter l’appareil avec son numéro de série et demander une régularisation.',
        },
      },
    ],
    extraFaqs: [],
  },
  emergency: {
    intro: {
      ar: [
        'تشكل منظومة أرقام الطوارئ والنجدة في الجزائر خط الدفاع الأول لحماية الأرواح والممتلكات وضمان التدخل الفوري في الأزمات والحوادث على مدار 24 ساعة وطوال أيام الأسبوع. وتمتاز هذه الخطوط المختصرة بمجانيتها المطلقة وإمكانية الاتصال بها من أي خط هاتف ثابت أو نقال حتى في غياب الرصيد.',
        'تشمل الأرقام السيادية الأساسية: رقم الشرطة 17 والخط الأخضر 1548 وتطبيق ألو الشرطة للمناطق الحضرية، والرقم 1055 ومنصة الشكاوى المسبقة PPGN (ppgn.mdn.dz) التابعة للدرك الوطني للمناطق الريفية والطرقات، إضافة إلى الرقم 14 و1021 للحماية المدنية والإسعاف، والرقم 104 للتنبيه الفوري عن اختطاف الأطفال، و1111 لحماية الطفولة، و1070 لحرائق الغابات، و3303 لطوارئ الكهرباء والغاز.',
        'وبالتوازي مع خطوط النجدة، وفرت الدولة هيئات ومنصات رقمية رسمية للتبليغ المواطني والرقابة الإدارية مثل منصة وسيط الجمهورية (wassit.dz)، ومنصة بلّغنا للسلطة العليا للشفافية ومكافحة الفساد (balighna.hatplc.dz)، ومنصة أشتكي لحماية المستهلك. يلخص هذا الدليل كل رقم ورابط في مكانه الصحيح مع إرشادات التصرف السليم وقت الأزمة.'
      ],
      fr: [
        "Le dispositif national des numéros d’urgence en Algérie garantit une assistance immédiate 24 heures sur 24 et 7 jours sur 7 pour protéger les personnes, sécuriser la voie publique et répondre aux crises sanitaires ou techniques. Ces lignes courtes sont intégralement gratuites et joignables depuis tout téléphone fixe ou mobile sans crédit de communication.",
        "Les principaux numéros vitaux comprennent le 17 et le 1548 pour la Police (complétés par l’application Allo Chorta), le 1055 et le portail de pré-plainte PPGN (ppgn.mdn.dz) pour la Gendarmerie Nationale, le 14 et le 1021 pour la Protection Civile et les secours médicaux, le 104 pour l’alerte enlèvement, le 1111 pour la protection de l’enfance, le 1070 pour les feux de forêts et le 3303 pour les urgences gaz et électricité.",
        "À ces numéros s’ajoutent des portails citoyens dédiés à la médiation et à l’intégrité publique tels que Wassit DZ (Médiateur de la République), Balighna (Haute Autorité de Transparence HATPLC) et Achki (protection du consommateur). Ce guide récapitule chaque canal officiel et les réflexes essentiels en situation critique."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'التحلي بالهدوء وتحديد الموقع الدقيق (الولاية، البلدية، الحي، المعلم القريب) قبل بدء المكالمة.',
        'حفظ الأرقام الحيوية الأساسية 17، 1055، 14، 104، 1111، و3303 في الهاتف لسرعة الوصول وقت الخطر.',
        'قصر استخدام خطوط الطوارئ على الحالات الحقيقية لأن المكالمات العبثية تعطل إنقاذ الأرواح ويعاقب عليها القانون.',
        'توثيق الأدلة (رقم الوصل، صور، فواتير) عند التبليغ الرقمي عبر PPGN أو وسيط الجمهورية أو بلّغنا.',
      ],
      fr: [
        'Garder son calme et préparer l’adresse exacte (wilaya, commune, repères visibles) avant d’appeler.',
        'Enregistrer les numéros vitaux (17, 1055, 14, 104, 1111, 3303) dans le répertoire téléphonique.',
        'Réserver strictement les lignes courtes aux urgences réelles (les appels abusifs sont passibles de poursuites).',
        'Rassembler pièces justificatives et références lors d’un signalement en ligne sur PPGN, Wassit ou Balighna.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الاتصال فورا بالخط المختص حسب طبيعة الحالة والمنطقة',
          fr: '1. Composer immédiatement le numéro adapté à l’urgence',
        },
        detail: {
          ar: 'اتصل بـ 14 للحماية المدنية والإسعاف، وبـ 17 للشرطة داخل المدن، أو 1055 للدرك الوطني على الطرق السريعة والأرياف.',
          fr: 'Appelez le 14 (Protection Civile/SAMU), le 17 (Police en ville) ou le 1055 (Gendarmerie sur routes et zones rurales).',
        },
      },
      {
        title: {
          ar: '2. تقديم معلومات دقيقة وموجزة لغرفة العمليات',
          fr: '2. Transmettre des informations claires à l’opérateur',
        },
        detail: {
          ar: 'اذكر موقعك بالضبط، عدد المصابين أو طبيعة التهديد، ولا تغلق الهاتف قبل تأكيد الموظف استلام كافة البيانات.',
          fr: 'Indiquez votre position précise, la nature de l’incident, le nombre de victimes et ne raccrochez qu’après accord de l’opérateur.',
        },
      },
      {
        title: {
          ar: '3. استخدام تطبيق ألو الشرطة أو منصة PPGN للتبليغ الموثق',
          fr: '3. Utiliser Allo Chorta ou PPGN pour les signalements numériques',
        },
        detail: {
          ar: 'في حالات الاعتداءات أو الحوادث غير العاجلة أو ضياع الوثائق، استعمل ppgn.mdn.dz أو ألو الشرطة لإرفاق الصور والموقع.',
          fr: 'Pour une pré-plainte ou un signalement documenté, utilisez ppgn.mdn.dz ou Allo Chorta avec géolocalisation.',
        },
      },
      {
        title: {
          ar: '4. اللجوء لوسيط الجمهورية أو بلّغنا أو حماية المستهلك للشكاوى المدنية',
          fr: '4. Saisir Wassit DZ, Balighna ou Achki pour les recours civils',
        },
        detail: {
          ar: 'للتظلم الإداري استعمل wassit.dz، ولمكافحة الفساد استعمل balighna.hatplc.dz، ولمخالفات الأسواق استعمل 1020 وأشتكي.',
          fr: 'Utilisez wassit.dz (blocages administratifs), balighna.hatplc.dz (corruption) et le 1020 / Achki (consommation).',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم استجابة الشبكة في منطقة نائية أو انقطاع التغطية لمتعاملك',
          fr: 'Absence de réseau opérateur lors d’une urgence en zone isolée',
        },
        solution: {
          ar: 'اطلب رقم الطوارئ القياسي 14 أو 17 أو 112 من الهاتف حيث تقوم الشبكات الأخرى المتاحة في المنطقة بتمرير مكالمة الطوارئ تلقائيا.',
          fr: 'Composez directement le 14, le 17 ou le 112 : les relais des autres opérateurs présents acheminent l’appel d’urgence.',
        },
      },
      {
        issue: {
          ar: 'الارتباك بين اختصاص الشرطة 17 والدرك الوطني 1055',
          fr: 'Hésitation entre la compétence Police (17) et Gendarmerie (1055)',
        },
        solution: {
          ar: 'بصفة عامة تغطي الشرطة المناطق الحضرية والمدن الكبرى (17)، بينما يغطي الدرك الوطني الطرق السريعة والطرق الوطنية والبلديات الريفية (1055)، وكلاهما ينسق فورا عند أي بلاغ.',
          fr: 'La Police intervient en milieu urbain (17) et la Gendarmerie sur les axes routiers et zones périurbaines/rurales (1055) ; les deux services se coordonnent automatiquement.',
        },
      },
      {
        issue: {
          ar: 'عدم تلقي رد على شكوى إدارية أو استهلاكية عبر الإنترنت',
          fr: 'Suivi bloqué après le dépôt d’une réclamation en ligne',
        },
        solution: {
          ar: 'احتفظ برقم الوصل الإلكتروني، وتأكد من وجود مرفقات واضحة ومقروءة، ثم استعمل قناة المندوب الولائي لوسيط الجمهورية لمتابعة الملف.',
          fr: 'Conservez l’accusé numérique et rapprochez-vous le cas échéant du délégué local de wilaya du Médiateur de la République.',
        },
      },
    ],
    extraFaqs: [],
  },
  enpi: {
    intro: {
      ar: [
        'تعد المؤسسة الوطنية للترقية العقارية (ENPI) الذراع العقاري العمومي المكلف بإنجاز وتسويق برامج السكن الترقوي العمومي (LPP) والسكن الترقوي الحر (LPL)، إلى جانب المحلات التجارية والمهنية المندمجة داخل الأحياء السكنية الجديدة في مختلف ولايات الوطن. وبفضل بوابة enpi-net.dz، أصبحت معظم مراحل الاكتتاب والاستعلام والمتابعة العقارية متاحة عن بعد.',
        'توفر المؤسسة فضاءات رقمية متخصصة لكل صيغة: بوابة التسجيل في سكنات LPP (لذوي الدخل بين 6 و30 مرة الأجر الأدنى المضمون)، بوابة التسجيل في سكنات LPL الحرة دون شروط سقف الدخل، منصة اقتناء المحلات التجارية LocauxEnpi، وفضاء الزبائن (lpp_consultation) لاستخراج أوامر الدفع ومتابعة التخصيص. كما طورت المؤسسة تطبيق إنشغال لمعالجة التحفظات التقنية للساكنين بعد استلام الشقق.',
        'يستعرض هذا الدليل كافة الفروقات بين صيغتي LPP وLPL، الوثائق والشروط المالية والبنكية المطلوبة لكل برنامج، خطوات التسجيل ومتابعة الملف في البوابة الرسمية، وطرق تسديد أعباء التسيير العقاري أو معالجة التأخر في تسليم العقود.'
      ],
      fr: [
        "L’Entreprise Nationale de Promotion Immobilière (ENPI) est l’opérateur public chargé de la réalisation et de la commercialisation des programmes de Logement Promotionnel Public (LPP), de Logement Promotionnel Libre (LPL) ainsi que des locaux commerciaux et professionnels implantés dans les nouveaux pôles urbains algériens. Son portail enpi-net.dz centralise l’ensemble des inscriptions et suivis clients.",
        "L’écosystème numérique de l’ENPI propose des guichets distincts selon le programme : inscription au LPP (réservé aux foyers dont le revenu se situe entre 6 et 30 fois le SNMG), souscription au LPL ouvert sans condition de plafond de revenu, soumission pour l’achat de locaux (LocauxEnpi) et espace client lpp_consultation pour éditer les ordres de versement. L’outil Inchighal permet en outre de signaler les réserves techniques après livraison.",
        "Ce guide complet détaille les critères d’éligibilité aux offres LPP et LPL, la composition du dossier financier et bancaire, le parcours d’inscription pas à pas et les démarches en cas de blocage technique ou de levée de réserves."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'استيفاء شرط الدخل بين 6 و30 مرة الأجر الأدنى (مع الزوج عند الاقتضاء) وعدم امتلاك عقار عند التسجيل في LPP.',
        'القدرة على التمويل الذاتي أو الحصول على قرض بنكي عقاري مدعم بالنسبة لصيغتي LPP وLPL.',
        'تجهيز بطاقة التعريف البيومترية، شهادة الميلاد، الشهادة العائلية، وكشف الراتب أو التصريح الضريبي C20.',
        'الاحتفاظ باسم المستخدم وكلمة المرور المسجلين للدخول إلى فضاء الزبائن وتطبيق إنشغال.',
      ],
      fr: [
        'Justifier d’un revenu compris entre 6 et 30 SNMG et ne pas posséder de bien immobilier pour la formule LPP.',
        'Capacité d’autofinancement ou dossier éligible au crédit immobilier bancaire (CPA / CNEP) pour LPP et LPL.',
        'Préparer CNIBE, acte de naissance, fiche familiale et justificatifs de revenus récents (fiches de paie / C20).',
        'Conserver vos identifiants d’inscription pour accéder à l’espace client lpp_consultation et à Inchighal.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار الصيغة السكنية المناسبة ومراقبة الحصص المفتوحة في enpi-net.dz',
          fr: '1. Choisir la formule (LPP, LPL ou local) sur enpi-net.dz',
        },
        detail: {
          ar: 'اطلع على البلاغات والمواقع المتوفرة عبر الولايات في الموقع الرئيسي للمؤسسة قبل بدء التسجيل.',
          fr: 'Consultez la carte des projets ouverts par wilaya sur le portail principal avant de soumettre votre demande.',
        },
      },
      {
        title: {
          ar: '2. ملء استمارة التسجيل الإلكتروني (LPP أو LPL أو LocauxEnpi)',
          fr: '2. Compléter le formulaire d’inscription en ligne',
        },
        detail: {
          ar: 'أدخل بياناتك الشخصية والمهنية والموقع المطلوب بدقة واحتفظ برقم التسجيل السري ووصول الإيداع.',
          fr: 'Renseignez vos informations civiles, votre wilaya/site souhaité et imprimez l’accusé d’inscription.',
        },
      },
      {
        title: {
          ar: '3. متابعة الملف وسحب أوامر الدفع عبر lpp_consultation',
          fr: '3. Suivre le dossier et éditer les ordres de versement',
        },
        detail: {
          ar: 'ادخل إلى فضاء الزبائن للتحقق من القبول الأولي، تحميل أمر الدفع الخاص بالشطر الأول، ومواعيد اختيار السكن.',
          fr: 'Accédez à l’espace lpp_consultation pour suivre la recevabilité et télécharger vos ordres de versement.',
        },
      },
      {
        title: {
          ar: '4. تسديد الأعباء عبر بريدي موب ورفع التحفظات في إنشغال',
          fr: '4. Payer les charges via BaridiMob et utiliser Inchighal',
        },
        detail: {
          ar: 'بعد استلام الشقة، سدد مستحقات التسيير عبر بريدي موب وأبلغ عن أي تحفظ تقني عبر enpi-net.dz/Inchighal.',
          fr: 'Réglez les frais de gestion immobilière via BaridiMob et signalez toute anomalie technique sur Inchighal.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'استلام رسالة "تم غلق التسجيل" أو عدم ظهور موقع سكني في ولايتي',
          fr: 'Message d’inscription clôturée ou site indisponible pour une wilaya',
        },
        solution: {
          ar: 'تفتح ENPI التسجيلات على شكل حصص محدودة حسب تقدم الأشغال في كل ولاية؛ راقب البلاغات الرسمية في enpi-net.dz لاغتنام الحصة الموالية.',
          fr: 'Les souscriptions s’ouvrent par tranches selon les quotas disponibles par wilaya ; surveillez les communiqués officiels sur enpi-net.dz.',
        },
      },
      {
        issue: {
          ar: 'عدم كفاية الدخل الفردي للوصول إلى عتبة 6 مرات الأجر الأدنى في LPP',
          fr: 'Revenu individuel inférieur au seuil minimum de 6 SNMG pour le LPP',
        },
        solution: {
          ar: 'يسمح التنظيم بجمع دخل الزوج والزوجة لإثبات استيفاء الحد الأدنى المطلوب، أو التوجه للتسجيل في صيغة الترقوي الحر LPL.',
          fr: 'Il est possible de cumuler les revenus des deux conjoints pour atteindre le seuil requis, ou d’opter pour la formule libre LPL.',
        },
      },
      {
        issue: {
          ar: 'عدم التمكن من الدخول لفضاء الزبائن lpp_consultation أو ضياع الرقم السري',
          fr: 'Mot de passe perdu ou erreur d’accès à l’espace lpp_consultation',
        },
        solution: {
          ar: 'استعمل خيار استرجاع كلمة المرور أو تقرب من المديرية الجهوية للمؤسسة مصحوبا بوصل التسجيل الأصلي وبطاقة التعريف لتحيين بياناتك.',
          fr: 'Utilisez la fonction de récupération ou adressez-vous à votre direction régionale ENPI muni de votre accusé et CNIBE.',
        },
      },
    ],
    extraFaqs: [],
  },
};
