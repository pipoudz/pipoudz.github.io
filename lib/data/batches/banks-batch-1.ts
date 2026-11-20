import { BankItem, RichGuideContent } from '../../types';

export const batch1Banks: BankItem[] = [
  // 1. ag-bank
  {
    id: 'ag-bank',
    slug: 'ag-bank',
    name: {
      ar: 'بنك الخليج الجزائر (AGB)',
      fr: 'Gulf Bank Algérie (AGB)',
    },
    acronym: 'AGB',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لخدمات بنك الخليج الجزائر AGB: بوابة وتطبيق AGB Online لإدارة الحسابات والتحويلات الفورية، باقات الصيرفة والتمويل الإسلامي (المرابحة للعقار والسيارات والتجهيز)، بطاقات الدفع المحلية CIB والدولية Visa وMastercard، وشبكة تتجاوز 60 وكالة عبر الوطن.',
      fr: 'Guide complet des services bancaires numériques de Gulf Bank Algérie (AGB) : portail et application AGB Online, finance islamique (Mourabaha immobilière, auto et équipements), cartes CIB et internationales Visa/Mastercard, réseau de plus de 60 agences et support client.',
    },
    website: 'https://www.agb.dz/',
    eBankingUrl: 'https://mobileapp.agb.dz/',
    swiftCode: 'GUALDZAL',
    headquarters: {
      ar: 'دالي إبراهيم / الأبيار، الجزائر العاصمة',
      fr: 'Daly Ibrahim / El Biar, Alger',
    },
    services: [
      {
        ar: 'بوابة الصيرفة الإلكترونية AGB Online',
        fr: 'Portail E-Banking AGB Online',
        url: 'https://mobileapp.agb.dz/',
        summary: {
          ar: 'إدارة الحسابات البنكية عن بعد، متابعة كشوف العمليات الآنية، تنفيذ التحويلات وطلب دفاتر الصكوك.',
          fr: 'Gestion à distance des comptes, suivi des mouvements en temps réel, virements et commande de chéquiers.',
        },
      },
      {
        ar: 'الموقع الرسمي والصيرفة الإسلامية (AGB)',
        fr: 'Site Officiel & Finance Islamique AGB',
        url: 'https://www.agb.dz/',
        summary: {
          ar: 'الاطلاع على التمويلات المتوافقة مع الشريعة (المرابحة للعقار والسيارات والتجهيزات)، القروض، والودائع لأجل DAT.',
          fr: 'Offres conformes à la Charia (Mourabaha habitat, auto et équipement), dépôts à terme DAT et financement corporate.',
        },
      },
      {
        ar: 'تطبيق AGB Online لأجهزة أندرويد (Google Play)',
        fr: 'Application AGB Online (Google Play)',
        url: 'https://play.google.com/store/apps/details?id=com.agb.mobile',
        summary: {
          ar: 'متابعة الأرصدة، التحويلات الفورية، إدارة بطاقات CIB والبطاقات الدولية، وتحديد أقرب وكالة أو صراف آلي.',
          fr: 'Consultation de soldes, virements instantanés, gestion des cartes et localisation des 60+ agences et GAB.',
        },
      },
      {
        ar: 'تطبيق AGB Online لأجهزة آيفون وآيباد (App Store)',
        fr: 'Application AGB Online (App Store iOS)',
        url: 'https://apps.apple.com/dz/app/agb-online/id1527415174',
        summary: {
          ar: 'تطبيق الصيرفة الذكية لهواتف آبل على مدار الساعة مع المصادقة البيومترية وإشعارات العمليات.',
          fr: 'Expérience mobile sécurisée pour iPhone et iPad disponible 24h/24 avec authentification biométrique.',
        },
      },
    ],
    contactPhone: '3304 / 021 98 49 04',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية بالدينار والعملة الصعبة، حسابات ادخار وتوفير، ودائع لأجل DAT، وحسابات استثمار إسلامية',
        fr: 'Comptes courants DZD/Devises, comptes épargne, dépôts à terme DAT et comptes participatifs islamiques',
      },
      digitalBanking: {
        ar: 'بوابة AGB Online عبر الويب وتطبيق الهاتف للأندرويد وiOS لمتابعة الأرصدة والتحويلات وطلب البطاقات',
        fr: 'Portail web AGB Online et applications Android/iOS pour virements, relevés et pilotage des cartes',
      },
      islamicWindow: {
        ar: 'نافذة صيرفة إسلامية متكاملة بصيغ المرابحة للعقارات، السيارات، والتجهيزات وحسابات الاستثمار الشرعية',
        fr: 'Offre dédiée de finance islamique : Mourabaha immobilière, automobile, équipement et épargne participative',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الوثائق الأساسية لفتح حساب أفراد',
          fr: 'Dossier d’ouverture de compte particulier',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية أو جواز السفر، شهادة إقامة حديثة، شهادة عمل أو كشف راتب (أو سجل تجاري للمهنيين)',
          fr: 'CNIBE ou passeport valide, certificat de résidence récent, attestation de travail/fiche de paie ou registre de commerce',
        },
      },
      {
        label: {
          ar: 'البطاقات المتاحة محليا ودوليا',
          fr: 'Gamme de cartes bancaires',
        },
        value: {
          ar: 'بطاقة الدفع والسحب الوطنية CIB وبطاقات Visa وMastercard الدولية للسفر والتسوق الإلكتروني',
          fr: 'Carte interbancaire CIB nationale et cartes internationales Visa / Mastercard pour voyages et achats en ligne',
        },
      },
      {
        label: {
          ar: 'خدمات المؤسسات والتجارة الخارجية',
          fr: 'Solutions entreprises & commerce extérieur',
        },
        value: {
          ar: 'تمويل الاستثمار والاستغلال، التسهيلات الائتمانية، التوطين البنكي، والاعتمادات المستندية LCs',
          fr: 'Financement d’investissement et d’exploitation, lignes de crédit, domiciliation et crédits documentaires',
        },
      },
      {
        label: {
          ar: 'قنوات الاتصال والدعم الرسمي',
          fr: 'Canaux d’assistance & réclamations',
        },
        value: {
          ar: 'مركز الاتصال 3304 أو 021.984.904 — البريد CRC@agb.dz أو service.client@agb.dz — شبكة تضم أكثر من 60 وكالة',
          fr: 'Centre d’appels 3304 / 021.984.904 — E-mail CRC@agb.dz ou service.client@agb.dz — Plus de 60 agences',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أفعل حسابي على تطبيق وبوابة AGB Online؟',
          fr: 'Comment activer mon accès à l’application et au portail AGB Online ?',
        },
        answer: {
          ar: 'بعد فتح حسابك في إحدى وكالات بنك الخليج الجزائر، اطلب الاشتراك المجاني في خدمة AGB Online لتسلم اسم المستخدم وكلمة المرور الأولية عبر الهاتف المسجل وتدخل مباشرة من الموقع أو التطبيق.',
          fr: 'Après l’ouverture de votre compte en agence AGB, souscrivez au service AGB Online pour recevoir vos identifiants d’accès sécurisés sur votre numéro mobile enregistré.',
        },
      },
      {
        question: {
          ar: 'هل يوفر بنك الخليج الجزائر AGB بطاقات Visa وMastercard الدولية؟',
          fr: 'AGB délivre-t-il des cartes internationales Visa et Mastercard ?',
        },
        answer: {
          ar: 'نعم، يوفر البنك لزبائنه الحائزين على حسابات بالعملة الصعبة بطاقات Visa وMastercard للسحب الدولي والشراء عبر المواقع الأجنبية، إلى جانب بطاقة CIB الوطنية.',
          fr: 'Oui, en complément de la carte CIB nationale, les titulaires de comptes devises éligibles peuvent commander des cartes Visa ou Mastercard pour le paiement et retrait à l’étranger.',
        },
      },
      {
        question: {
          ar: 'ما هي صيغ الصيرفة الإسلامية المتاحة في بنك الخليج الجزائر؟',
          fr: 'Quelles sont les offres de finance islamique chez Gulf Bank Algérie ?',
        },
        answer: {
          ar: 'يقدم بنك الخليج الجزائر حلولا شرعية تشمل المرابحة لاقتناء العقارات والسيارات والتجهيزات، إضافة إلى حسابات الادخار والاستثمار المتوافقة مع ضوابط الهيئة الشرعية.',
          fr: 'AGB propose des produits conformes à la Charia incluant la Mourabaha immobilière, automobile et d’équipement, ainsi que des comptes d’épargne et d’investissement islamiques.',
        },
      },
      {
        question: {
          ar: 'ما هو رقم خدمة الزبائن وبريد الشكاوى المعتمد لبنك AGB؟',
          fr: 'Quel est le numéro du service client et l’adresse réclamations AGB ?',
        },
        answer: {
          ar: 'يمكنك الاتصال بالرقم المختصر 3304 أو الرقم 021.984.904، أو مراسلة خدمة الزبائن على CRC@agb.dz وservice.client@agb.dz.',
          fr: 'Vous pouvez appeler le numéro court 3304 ou le 021.984.904, ou écrire à CRC@agb.dz / service.client@agb.dz.',
        },
      },
    ],
  },

  // 2. albaraka-bank
  {
    id: 'albaraka-bank',
    slug: 'albaraka-bank',
    name: {
      ar: 'بنك البركة الجزائري (Al Baraka Bank Algeria)',
      fr: 'Banque Al Baraka d’Algérie',
    },
    acronym: 'ALBARAKA',
    type: 'islamic',
    description: {
      ar: 'الدليل الشامل للخدمات المصرفية والرقمية لبنك البركة الجزائري (أول مصرف إسلامي في الجزائر): تطبيق Al Baraka Dz، بوابة Al Baraka Net للأفراد والشركات، التمويل الإسلامي بصيغ المرابحة والاستصناع والإجارة الموصوفة في الذمة، بطاقات CIB وفيزا الدولية، وإشعارات SMS الفورية.',
      fr: 'Guide complet de la Banque Al Baraka d’Algérie, pionnière de la finance islamique : application Al Baraka Dz, portail Al Baraka Net, financements Mourabaha, Istisnaa et Ijara, cartes CIB et Visa internationales, alertes SMS et réseau d’agences national.',
    },
    website: 'https://www.albaraka-bank.dz/?lang=ar',
    eBankingUrl: 'https://www.albaraka-bank.dz/?lang=ar',
    swiftCode: 'BRKADZAL',
    headquarters: {
      ar: 'حي الأعمال، باب الزوار، الجزائر العاصمة (16024)',
      fr: 'Quartier d’Affaires, Bab Ezzouar, 16024 Alger',
    },
    services: [
      {
        ar: 'البوابة الرسمية لبنك البركة ومنصة Al Baraka Net',
        fr: 'Portail Officiel & Espace Web Al Baraka Net',
        url: 'https://www.albaraka-bank.dz/?lang=ar',
        summary: {
          ar: 'إدارة حسابات الأفراد والشركات، التحويلات الجماعية، تحميل الكشوف المالية، والوصول لتطبيق Al Baraka Dz.',
          fr: 'Accès aux téléservices Al Baraka Net, gestion de comptes particuliers/entreprises, virements et relevés.',
        },
      },
      {
        ar: 'التمويل الاستهلاكي والعقاري الإسلامي (مرابحة، استصناع، إجارة)',
        fr: 'Financements Islamiques Particuliers (Mourabaha, Istisnaa, Ijara)',
        url: 'https://www.albaraka-bank.dz/?lang=ar',
        summary: {
          ar: 'تمويل السيارات المجمعة محليا، التجهيزات المنزلية، وشراء السكن بصيغ شرعية معتمدة دون فوائد ربوية.',
          fr: 'Financement de véhicules assemblés en Algérie, équipements ménagers et immobilier selon des contrats conformes à la Charia.',
        },
      },
      {
        ar: 'حلول تمويل المؤسسات والتجارة الخارجية',
        fr: 'Financement Entreprises & Commerce Extérieur',
        url: 'https://www.albaraka-bank.dz/?lang=ar',
        summary: {
          ar: 'تمويل رأس المال العامل والمشاريع الاستثمارية، خطابات الضمان، والاعتمادات المستندية وفق قواعد الصيرفة الإسلامية.',
          fr: 'Financement du cycle d’exploitation et d’investissement, cautions et crédits documentaires participatifs.',
        },
      },
      {
        ar: 'البطاقات النقدية CIB وفيزا الدولية وخدمة SMS',
        fr: 'Cartes CIB, Visa Internationales & Alertes SMS',
        url: 'https://www.albaraka-bank.dz/?lang=ar',
        summary: {
          ar: 'سحب ودفع محلي عبر أجهزة TPE والتجارة الإلكترونية ببطاقة CIB، وبطاقات دولية للسفر والحجز عبر الإنترنت.',
          fr: 'Paiement TPE/e-commerce national par carte CIB, cartes Visa pour l’international et notifications SMS instantanées.',
        },
      },
    ],
    contactPhone: '0771 900 832 / 0771 900 834 / 0661 900 832',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية، حسابات توفير واستثمار إسلامية بالمضاربة، وحسابات بالعملة الصعبة',
        fr: 'Comptes courants, comptes épargne/investissement participatifs (Moudaraba) et comptes devises',
      },
      digitalBanking: {
        ar: 'تطبيق الهاتف الذكي Al Baraka Dz وبوابة الويب Al Baraka Net مع تنبيهات الرسائل القصيرة SMS',
        fr: 'Application mobile Al Baraka Dz, portail web Al Baraka Net et alertes SMS en temps réel',
      },
      islamicWindow: {
        ar: 'مصرف إسلامي متكامل 100% بإشراف هيئة رقابة شرعية (المرابحة، الإجارة، الاستصناع، المشاركة)',
        fr: 'Banque 100 % islamique supervisée par un Conseil Charia (Mourabaha, Ijara, Istisnaa, Moucharaka)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'شروط طلب التمويل الإسلامي للأفراد',
          fr: 'Conditions d’éligibilité aux financements islamiques',
        },
        value: {
          ar: 'دخل شهري مستقر ومصرح به، شهادة عمل وكشف راتب لآخر 3 أشهر (أو وثائق النشاط للمهنيين)، وفاتورة أولية من البائع المعتمد',
          fr: 'Revenu régulier justifié (attestation de travail, 3 fiches de paie ou bilan professionnel) et facture proforma du fournisseur agréé',
        },
      },
      {
        label: {
          ar: 'الخدمات المصرفية للشركات',
          fr: 'Services dédiés aux entreprises',
        },
        value: {
          ar: 'تحويلات جماعية عبر Al Baraka Net، تمويل الاستغلال والاستثمار، والاعتمادات المستندية للتجارة الخارجية',
          fr: 'Virements de masse sur Al Baraka Net, financement de trésorerie/investissement et opérations de commerce extérieur',
        },
      },
      {
        label: {
          ar: 'المقر الاجتماعي والفروع الرئيسية',
          fr: 'Siège social & réseau territorial',
        },
        value: {
          ar: 'حي الأعمال، باب الزوار، الجزائر العاصمة — وفرع بن عكنون (Lotissement Bouteldja Houidef) وفروع عبر الولايات',
          fr: 'Quartier d’Affaires Bab Ezzouar (Alger) — Agence Ben Aknoun (Lotissement Bouteldja Houidef) et agences régionales',
        },
      },
      {
        label: {
          ar: 'أرقام التواصل ومركز الاستماع',
          fr: 'Assistance client & réclamations',
        },
        value: {
          ar: 'أرقام خدمة العملاء المخصصة: 0771.900.832 / 0771.900.834 / 0661.900.832 أو البريد الرسمي لمركز الاستماع',
          fr: 'Service client joignable au 0771.900.832 / 0771.900.834 / 0661.900.832 et cellule d’écoute officielle',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي صيغ التمويل الإسلامي المتوفرة في بنك البركة الجزائري؟',
          fr: 'Quelles formules de financement islamique propose Al Baraka Bank Algeria ?',
        },
        answer: {
          ar: 'يوفر بنك البركة صيغ المرابحة لتمويل السيارات المجمعة محليا والتجهيزات المنزلية، والاستصناع والإجارة الموصوفة في الذمة للتمويل العقاري، إضافة إلى المضاربة والمشاركة للشركات.',
          fr: 'Al Baraka propose la Mourabaha pour les véhicules locaux et équipements, l’Istisnaa et l’Ijara pour le financement immobilier, ainsi que la Moudaraba et la Moucharaka pour les entreprises.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين تطبيق Al Baraka Dz ومنصة Al Baraka Net؟',
          fr: 'Quelle est la différence entre Al Baraka Dz et Al Baraka Net ?',
        },
        answer: {
          ar: 'تطبيق Al Baraka Dz مخصص لإدارة الحسابات والتحويلات عبر الهاتف الذكي للأفراد والمهنيين، بينما تتيح بوابة الويب Al Baraka Net خدمات أوسع للشركات مثل التحويلات الجماعية وتحميل الكشوف المالية.',
          fr: 'Al Baraka Dz est l’application mobile destinée au pilotage quotidien sur smartphone, tandis que Al Baraka Net est le portail web incluant les virements multiples et téléchargements comptables pour entreprises.',
        },
      },
      {
        question: {
          ar: 'هل يصدر بنك البركة بطاقات دفع دولية إلى جانب بطاقة CIB؟',
          fr: 'Al Baraka délivre-t-il des cartes internationales en plus de la carte CIB ?',
        },
        answer: {
          ar: 'نعم، يوفر البنك بطاقة CIB للسحب والدفع المحلي عبر نقاط البيع TPE والتجارة الإلكترونية، وبطاقات Visa الدولية للسفر وحجز الفنادق والشراء عبر الإنترنت من الحسابات بالعملة الصعبة.',
          fr: 'Oui, la banque propose la carte nationale CIB pour les paiements et retraits en Algérie ainsi que des cartes Visa internationales adossées aux comptes en devises.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع خدمة زبائن بنك البركة لمتابعة ملف تمويلي؟',
          fr: 'Comment joindre le service client Al Baraka pour suivre un dossier de financement ?',
        },
        answer: {
          ar: 'يمكنك الاتصال بأرقام خدمة العملاء (0771.900.832 أو 0771.900.834 أو 0661.900.832) أو مراجعة الوكالة التي أودعت فيها ملفك في باب الزوار أو بن عكنون أو الولايات.',
          fr: 'Appelez le 0771.900.832, 0771.900.834 ou 0661.900.832, ou adressez-vous à votre agence gestionnaire (Bab Ezzouar, Ben Aknoun ou wilayas).',
        },
      },
    ],
  },

  // 3. arabbank
  {
    id: 'arabbank',
    slug: 'arabbank',
    name: {
      ar: 'البنك العربي الجزائر (Arab Bank Algeria)',
      fr: 'Arab Bank PLC Algérie',
    },
    acronym: 'ARAB BANK',
    type: 'private',
    description: {
      ar: 'دليل الخدمات المصرفية والرقمية للبنك العربي الجزائر: منصة الصيرفة الإلكترونية عربي أونلاين (Arabi Online)، تطبيق عربي موبايل (Arabi Mobile) بالدخول بالبصمة والوجه، الحسابات الجارية وحسابات التوفير والودائع لأجل، صناديق الأمانات الحديدية، بطاقات CIB وفيزا الدولية، وحلول تمويل الشركات.',
      fr: 'Guide complet d’Arab Bank PLC Algérie : portail Arabi Online, application Arabi Mobile avec authentification biométrique, comptes courants et épargne, coffres-forts, cartes CIB et Visa internationales, financement immobilier et gestion de trésorerie corporate.',
    },
    website: 'https://arabbank.dz/ar',
    eBankingUrl: 'https://arabbank.dz/ar',
    swiftCode: 'ARABDZAL',
    headquarters: {
      ar: '12 إقامة شعباني، وادي حيدرة، حيدرة، الجزائر العاصمة',
      fr: '12 Résidence Chaabani, Val d’Hydra, Hydra, 16031 Alger',
    },
    services: [
      {
        ar: 'بوابة البنك العربي الجزائر ومنصة عربي أونلاين (Arabi Online)',
        fr: 'Portail Officiel & Arabi Online (E-Banking)',
        url: 'https://arabbank.dz/ar',
        summary: {
          ar: 'إدارة الحسابات عن بعد، التحويلات المالية المحلية، واستخراج كشوف الحساب الدورية بأمان عال.',
          fr: 'Accès sécurisé aux comptes, virements locaux et extraction périodique des relevés bancaires en ligne.',
        },
      },
      {
        ar: 'تطبيق عربي موبايل (Arabi Mobile) والبطاقات الدولية',
        fr: 'Application Arabi Mobile & Cartes CIB / Visa',
        url: 'https://arabbank.dz/ar',
        summary: {
          ar: 'تسجيل الدخول بالبصمة والوجه، التحويلات اللحظية، إدارة بطاقات CIB وفيزا الدولية، وإشعارات SMS.',
          fr: 'Connexion par empreinte/reconnaissance faciale, virements instantanés, gestion des cartes CIB/Visa et alertes mobiles.',
        },
      },
      {
        ar: 'الحسابات الجارية والتوفير والودائع وصناديق الأمانات',
        fr: 'Comptes, Épargne, DAT & Coffres-Forts',
        url: 'https://arabbank.dz/ar',
        summary: {
          ar: 'فتح الحسابات بالدينار والعملة الصعبة، الودائع لأجل DAT، القروض السكنية، واستئجار الصناديق الحديدية الآمنة.',
          fr: 'Ouverture de comptes DZD/Devises, dépôts à terme, crédits habitat et location de coffres-forts sécurisés.',
        },
      },
      {
        ar: 'تمويل الشركات والمشاريع والتجارة الخارجية',
        fr: 'Corporate Banking & Commerce Extérieur',
        url: 'https://arabbank.dz/ar',
        summary: {
          ar: 'تمويل الاستثمارات، خطابات الضمان، الاعتمادات المستندية وحلول إدارة السيولة بفروع حيدرة والقبة ووهران وعنابة وسطيف.',
          fr: 'Financement de projets, lettres de garantie, crédits documentaires et réseau d’agences (Alger, Oran, Annaba, Sétif).',
        },
      },
    ],
    contactPhone: '021 60 86 50 / 021 48 00 02 / 021 60 86 58',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية بالدينار والعملة الصعبة، حسابات التوفير، الودائع لأجل DAT، والقروض السكنية',
        fr: 'Comptes courants DZD/Devises, comptes épargne, dépôts à terme DAT et crédits immobiliers',
      },
      digitalBanking: {
        ar: 'منصة عربي أونلاين Arabi Online وتطبيق عربي موبايل Arabi Mobile بدعم الدخول بالبصمة والوجه',
        fr: 'Plateforme web Arabi Online et app Arabi Mobile avec authentification biométrique 24h/24',
      },
      islamicWindow: {
        ar: 'خدمات مصرفية تجارية وتسهيلات تمويلية للأفراد والشركات وفق أنظمة بنك الجزائر',
        fr: 'Services de banque commerciale et financements sur mesure agréés par la Banque d’Algérie',
      },
    },
    requirements: [
      {
        label: {
          ar: 'فتح حساب بنكي للأفراد والمقيمين',
          fr: 'Ouverture de compte particulier',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية أو جواز السفر، شهادة ميلاد، شهادة إقامة، ومبرر الدخل (شهادة عمل أو سجل تجاري)',
          fr: 'CNIBE ou passeport valide, acte de naissance, certificat de résidence et justificatif de revenus',
        },
      },
      {
        label: {
          ar: 'انتشار الفروع وأجهزة الصراف الآلي',
          fr: 'Réseau d’agences principales',
        },
        value: {
          ar: 'فروع مجهزة بصرافات آلية في الجزائر العاصمة (حيدرة، القبة)، وهران، عنابة، وسطيف',
          fr: 'Agences et GAB implantés à Alger (Hydra, Kouba), Oran, Annaba et Sétif',
        },
      },
      {
        label: {
          ar: 'خدمة العملاء والشكاوى الرسمية',
          fr: 'Contact client & réclamations',
        },
        value: {
          ar: 'الهاتف 021.60.86.50 / 021.48.00.02 / 021.60.86.58 — هاتف الشكاوى 023.47.19.72 — البريد Customer.Complaints@arabbank.dz',
          fr: 'Tél. 021.60.86.50 / 021.48.00.02 — Réclamations 023.47.19.72 — E-mail Customer.Complaints@arabbank.dz',
        },
      },
      {
        label: {
          ar: 'الأمان والبطاقات المصرفية',
          fr: 'Sécurité & moyens de paiement',
        },
        value: {
          ar: 'بطاقة CIB للتسوق والدفع عبر TPE محليا، بطاقات Visa الدولية، وإشعارات SMS فورية لكل حركة مالية',
          fr: 'Carte CIB nationale (GAB/TPE/web), cartes Visa internationales et alertes SMS instantanées',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي المزايا التي يقدمها تطبيق عربي موبايل (Arabi Mobile)؟',
          fr: 'Quelles fonctionnalités offre l’application Arabi Mobile ?',
        },
        answer: {
          ar: 'يتيح تطبيق عربي موبايل الدخول السريع ببصمة الإصبع أو الوجه، متابعة الحسابات والبطاقات على مدار 24 ساعة، تنفيذ التحويلات المحلية، والاطلاع على كشوف العمليات اللحظية.',
          fr: 'Arabi Mobile permet une connexion biométrique sécurisée, la consultation des comptes et cartes 24h/24, les virements locaux et le suivi des mouvements en temps réel.',
        },
      },
      {
        question: {
          ar: 'أين تتواجد فروع البنك العربي الجزائر خارج العاصمة؟',
          fr: 'Dans quelles wilayas se trouvent les agences d’Arab Bank Algérie ?',
        },
        answer: {
          ar: 'بالإضافة إلى المقر الرئيسي وفرعي حيدرة والقبة بالجزائر العاصمة، يمتلك البنك العربي فروعا وأجهزة صراف آلي في ولايات وهران، عنابة، وسطيف.',
          fr: 'Outre le siège et les agences d’Hydra et Kouba à Alger, Arab Bank est implantée à Oran, Annaba et Sétif.',
        },
      },
      {
        question: {
          ar: 'كيف أقدم شكوى أو ملاحظة للبنك العربي الجزائر؟',
          fr: 'Comment déposer une réclamation auprès d’Arab Bank PLC Algérie ?',
        },
        answer: {
          ar: 'يمكنك التواصل مباشرة مع خلية الشكاوى عبر البريد الإلكتروني Customer.Complaints@arabbank.dz أو عبر خط الهاتف المخصص 023.47.19.72.',
          fr: 'Adressez votre demande par courriel à Customer.Complaints@arabbank.dz ou contactez la ligne dédiée au 023.47.19.72.',
        },
      },
      {
        question: {
          ar: 'هل يوفر البنك العربي الجزائر خدمة استئجار صناديق الأمانات الحديدية؟',
          fr: 'La location de coffres-forts est-elle disponible chez Arab Bank ?',
        },
        answer: {
          ar: 'نعم، تتيح بعض الفروع الرئيسية للبنك العربي خدمة استئجار صناديق الأمانات الحديدية لزبائن البنك وفق الشروط والاتفاقية المعتمدة بالوكالة.',
          fr: 'Oui, Arab Bank propose un service de location de coffres-forts sécurisés dans ses principales agences selon disponibilité.',
        },
      },
    ],
  },

  // 4. badr
  {
    id: 'badr',
    slug: 'badr',
    name: {
      ar: 'بنك الفلاحة والتنمية الريفية (BADR)',
      fr: 'Banque de l’Agriculture et du Développement Rural (BADR)',
    },
    acronym: 'BADR',
    type: 'public',
    description: {
      ar: 'الدليل الشامل لبنك الفلاحة والتنمية الريفية BADR: بوابة الصيرفة الإلكترونية MyBADR وتطبيق الهاتف للأندرويد وiOS لاستخراج كشف RIB والتحويلات، شبابيك الصيرفة الإسلامية (مرابحة غراس وعتاد وعقار)، بطاقات الدفع الإلكتروني CIB، وشبكة تتجاوز 340 وكالة عبر كافة الولايات.',
      fr: 'Guide complet de la Banque de l’Agriculture et du Développement Rural (BADR) : portail MyBADR et applications Android/iOS avec téléchargement RIB, guichets de finance islamique (Mourabaha Ghirass, équipement, immobilier), cartes CIB et plus de 340 agences.',
    },
    website: 'https://badrbank.dz/',
    eBankingUrl: 'https://mybadr.badrbank.dz/',
    swiftCode: 'BADRDZAL',
    headquarters: {
      ar: '17 شارع العقيد عميروش، الجزائر العاصمة',
      fr: '17 Boulevard Colonel Amirouche, Alger',
    },
    services: [
      {
        ar: 'منصة الصيرفة الإلكترونية MyBADR',
        fr: 'Portail Banque en Ligne MyBADR',
        url: 'https://mybadr.badrbank.dz/',
        summary: {
          ar: 'إدارة الحسابات بالدينار والعملة الصعبة، استخراج الكشوف، إجراء التحويلات، وطلب البطاقات ودفاتر الصكوك.',
          fr: 'Accès direct aux comptes DZD/Devises, virements interbancaires, relevés et commande de cartes/chéquiers.',
        },
      },
      {
        ar: 'الصيرفة الإسلامية لبنك بدر (مرابحة غراس، عتاد، وعقار)',
        fr: 'Finance Islamique BADR (Ghirass, Équipement & Habitat)',
        url: 'https://badrbank.dz/banque-islamique/',
        summary: {
          ar: 'منتجات تمويل وادخار مطابقة للشريعة الإسلامية للفلاحين والأفراد وحسابات التوفير والاستثمار الإسلامية.',
          fr: 'Solutions de financement et d’épargne conformes à la Charia dédiées aux agriculteurs, particuliers et professionnels.',
        },
      },
      {
        ar: 'محدد مواقع أكثر من 340 وكالة وصرافات آلية GAB',
        fr: 'Localisateur des 340+ Agences & GAB BADR',
        url: 'https://badrbank.dz/trouver-une-agence/',
        summary: {
          ar: 'البحث الجغرافي عن أقرب وكالة بنكية، شباك صيرفة إسلامية، أو موزع نقد آلي عبر جميع الولايات.',
          fr: 'Recherche géolocalisée de l’agence, du guichet islamique ou du distributeur GAB le plus proche.',
        },
      },
      {
        ar: 'البطاقات النقدية والدفع الإلكتروني CIB وأجهزة TPE',
        fr: 'Cartes Bancaires CIB & Solutions TPE',
        url: 'https://badrbank.dz/particuliers/monetique/',
        summary: {
          ar: 'طلب بطاقات الدفع والسحب الوطنية، تفعيل الشراء عبر الإنترنت، وتوفير نهائيات الدفع للتجار.',
          fr: 'Gestion des cartes CIB, activation du paiement en ligne 3D Secure et terminaux de paiement TPE commerçants.',
        },
      },
      {
        ar: 'تطبيق MyBADR لهواتف أندرويد (Google Play)',
        fr: 'Application MyBADR (Android)',
        url: 'https://play.google.com/store/apps/details?id=com.badr.mybadr',
        summary: {
          ar: 'التطبيق الرسمي لتنفيذ التحويلات، تتبع الأرصدة، وتحميل كشف الهوية البنكية RIB بصيغة فورية.',
          fr: 'Application mobile officielle pour consulter les soldes, effectuer des virements et télécharger votre RIB.',
        },
      },
      {
        ar: 'تطبيق MyBADR لهواتف آيفون (App Store iOS)',
        fr: 'Application MyBADR (iOS / App Store)',
        url: 'https://apps.apple.com/app/mybadr/id1546949312',
        summary: {
          ar: 'نسخة أجهزة iPhone وiPad لمتابعة المعاملات المالية والحسابات البنكية لبنك BADR بأمان 24/7.',
          fr: 'Version iOS dédiée aux appareils Apple pour piloter vos comptes BADR à tout moment.',
        },
      },
      {
        ar: 'فضاء الاستفسارات والشكاوى والتواصل المباشر',
        fr: 'Contact, Réclamations & Support Client',
        url: 'https://badrbank.dz/contact/',
        summary: {
          ar: 'استمارة التواصل الرسمية مع إدارة البنك، مع البريد الإلكتروني المعتمد contact@badr.dz.',
          fr: 'Formulaire en ligne officiel pour contacter la banque ou transmettre une réclamation (contact@badr.dz).',
        },
      },
    ],
    contactPhone: '021 64 26 70 / 3014',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية، حسابات عملة صعبة، حسابات فلاحية ومهنية، وحسابات توفير واستثمار إسلامية',
        fr: 'Comptes courants, comptes devises, comptes professionnels agricoles et comptes islamiques',
      },
      digitalBanking: {
        ar: 'منصة MyBADR عبر الويب وتطبيقات Android وiOS لاستخراج كشف RIB وتنفيذ التحويلات 24/7',
        fr: 'Portail MyBADR et applications Android/iOS avec virements et édition de RIB instantanée',
      },
      islamicWindow: {
        ar: 'شبابيك صيرفة إسلامية منتشرة بالوكالات تشمل مرابحة غراس، مرابحة العتاد، والمرابحة العقارية',
        fr: 'Guichets islamiques déployés en agences : Mourabaha Ghirass (agricole), équipements et immobilier',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الانتشار الوطني والشبكة البنكية',
          fr: 'Maillage territorial national',
        },
        value: {
          ar: 'أكثر من 340 وكالة بنكية وموزعات سحب آلي وشبابيك صيرفة إسلامية في كل ولايات الجزائر',
          fr: 'Plus de 340 agences bancaires, distributeurs GAB et guichets islamiques à travers toutes les wilayas',
        },
      },
      {
        label: {
          ar: 'التمويل الفلاحي والريفي المخصص',
          fr: 'Financements agricoles & ruraux',
        },
        value: {
          ar: 'قرض رفيق RFIG الموسمي بدون فوائد للفلاحين، قرض التحدي، وتمويلات مرابحة غراس وعتاد الفلاحة',
          fr: 'Crédit saisonnier RFIG, crédit Ettahadi et solutions islamiques Mourabaha Ghirass et matériels',
        },
      },
      {
        label: {
          ar: 'فتح الحساب وتفعيل MyBADR',
          fr: 'Ouverture de compte & MyBADR',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية، شهادة إقامة، مبرر دخل أو بطاقة فلاح/سجل تجاري، مع طلب اشتراك MyBADR بالوكالة',
          fr: 'CNIBE biométrique, justificatif de domicile, carte d’agriculteur/fiche de paie et souscription MyBADR',
        },
      },
      {
        label: {
          ar: 'الدعم والاتصال الرسمي',
          fr: 'Support & contact officiel',
        },
        value: {
          ar: 'الهاتف 021.64.26.70 أو الرقم 3014 — البريد الرسمي contact@badr.dz واستمارة badrbank.dz/contact',
          fr: 'Téléphone 021.64.26.70 / 3014 — Courriel contact@badr.dz et formulaire badrbank.dz/contact',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أحمل كشف الهوية البنكية RIB من تطبيق MyBADR؟',
          fr: 'Comment télécharger mon RIB depuis l’application MyBADR ?',
        },
        answer: {
          ar: 'ادخل إلى حسابك عبر تطبيق MyBADR على الهاتف أو منصة mybadr.badrbank.dz، اختر الحساب المطلوب ثم انقر على خيار إصدار أو تحميل RIB للحصول عليه فوريا بصيغة PDF.',
          fr: 'Connectez-vous à l’application MyBADR ou à mybadr.badrbank.dz, sélectionnez le compte concerné puis cliquez sur éditer/télécharger le RIB en format PDF.',
        },
      },
      {
        question: {
          ar: 'ما هي منتجات الصيرفة الإسلامية المتاحة في بنك BADR؟',
          fr: 'Quels produits de finance islamique propose la banque BADR ?',
        },
        answer: {
          ar: 'تضم نافذة الصيرفة الإسلامية لبنك بدر منتجات مخصصة مثل مرابحة غراس للنشاط الفلاحي، مرابحة العتاد والتجهيز، المرابحة العقارية، وحسابات التوفير والاستثمار الشرعية.',
          fr: 'La finance islamique BADR inclut notamment Mourabaha Ghirass pour l’agriculture, Mourabaha équipements, Mourabaha immobilière et les comptes d’épargne islamiques.',
        },
      },
      {
        question: {
          ar: 'أين أجد أقرب وكالة أو صراف آلي GAB لبنك الفلاحة والتنمية الريفية؟',
          fr: 'Comment localiser l’agence ou le GAB BADR le plus proche ?',
        },
        answer: {
          ar: 'يوفر الموقع الرسمي أداة البحث الجغرافي على الرابط badrbank.dz/trouver-une-agence لاختيار الولاية والاطلاع على عناوين أكثر من 340 وكالة وصراف آلي.',
          fr: 'Utilisez le localisateur officiel sur badrbank.dz/trouver-une-agence pour filtrer par wilaya parmi plus de 340 agences et distributeurs GAB.',
        },
      },
      {
        question: {
          ar: 'كيف أبلغ عن مشكلة في بطاقة CIB أو خدمة MyBADR؟',
          fr: 'Comment signaler un incident sur une carte CIB ou sur MyBADR ?',
        },
        answer: {
          ar: 'تواصل فورا مع الوكالة التي يتبعها حسابك أو أرسل تذكرة عبر استمارة badrbank.dz/contact أو البريد contact@badr.dz أو الرقم 3014.',
          fr: 'Contactez votre agence gestionnaire, utilisez le formulaire badrbank.dz/contact, écrivez à contact@badr.dz ou appelez le 3014.',
        },
      },
    ],
  },

  // 5. bank-abc
  {
    id: 'bank-abc',
    slug: 'bank-abc',
    name: {
      ar: 'بنك ABC الجزائر — المؤسسة العربية المصرفية',
      fr: 'Bank ABC Algérie (Arab Banking Corporation)',
    },
    acronym: 'ABC',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لبنك المؤسسة العربية المصرفية الجزائر (Bank ABC Algeria): منصة ABC Digital للصيرفة عن بعد، نافذة الصيرفة والتمويل الإسلامي «البراق» (البراق سكنى للعقار والبراق كروسي للسيارات)، حسابات الصكوك والاستثمار الشرعي، بطاقات CIB والدولية، وحلول إدارة السيولة والتجارة الخارجية للشركات.',
      fr: 'Guide complet de Bank ABC Algérie : plateforme ABC Digital, guichet de finance islamique Al-Buraq (Al-Buraq Sakani immobilier et Al-Buraq Karoussi auto), cartes CIB et internationales, financement des entreprises, gestion de trésorerie et réseau d’agences.',
    },
    website: 'https://www.bank-abc.com/ar/CountrySites/Algeria',
    eBankingUrl: 'https://www.bank-abc.com/ar/CountrySites/Algeria',
    swiftCode: 'ABCODZAL',
    headquarters: {
      ar: '38 شارع الإخوة بوعدو، بئر مراد رايس، الجزائر العاصمة',
      fr: '38 Rue des Frères Bouadou, Bir Mourad Raïs, Alger',
    },
    services: [
      {
        ar: 'بوابة بنك ABC الجزائر ومنصة ABC Digital',
        fr: 'Portail Officiel Bank ABC Algérie & ABC Digital',
        url: 'https://www.bank-abc.com/ar/CountrySites/Algeria',
        summary: {
          ar: 'إدارة الحسابات عن بعد، كشوف العمليات الآنية، التحويلات المصرفية، واستكشاف عروض الأفراد والشركات.',
          fr: 'Accès aux services bancaires à distance ABC Digital, relevés instantanés, virements et offres commerciales.',
        },
      },
      {
        ar: 'نافذة الصيرفة الإسلامية «البراق» (البراق سكنى وكروسي)',
        fr: 'Fenêtre Islamique Al-Buraq (Sakani & Karoussi)',
        url: 'https://www.bank-abc.com/ar/CountrySites/Algeria',
        summary: {
          ar: 'المرابحة العقارية (البراق سكنى)، تمويل السيارات المجمعة (البراق كروسي)، وحسابات الصكوك والاستثمار الإسلامي.',
          fr: 'Financement immobilier Al-Buraq Sakani, financement auto Al-Buraq Karoussi et comptes d’investissement conformes à la Charia.',
        },
      },
      {
        ar: 'تمويل الشركات، التجارة الخارجية، وإدارة السيولة',
        fr: 'Financement Corporate, Commerce Extérieur & Cash Management',
        url: 'https://www.bank-abc.com/ar/CountrySites/Algeria',
        summary: {
          ar: 'الاعتمادات المستندية، خطابات الضمان، وإدارة التدفقات المالية عبر البريد المخصص abcalgeriacashmanagementcorpo@bank-abc.com.',
          fr: 'Crédits documentaires, lettres de garantie et solutions cash management corporate (abcalgeriacashmanagementcorpo@bank-abc.com).',
        },
      },
      {
        ar: 'مجموعة Bank ABC المصرفية الدولية',
        fr: 'Portail International du Groupe Bank ABC',
        url: 'https://www.bank-abc.com/',
        summary: {
          ar: 'التعرف على الشبكة العالمية للمؤسسة العربية المصرفية وتغطية أسواق المال الدولية.',
          fr: 'Présentation du réseau international du groupe Arab Banking Corporation et des solutions transfrontalières.',
        },
      },
    ],
    contactPhone: '021 98 76 00',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية وتوفير بالدينار والعملة الصعبة، ودائع لأجل DAT، وحسابات الصكوك والاستثمار «البراق»',
        fr: 'Comptes courants et épargne DZD/Devises, dépôts à terme DAT et comptes participatifs Al-Buraq',
      },
      digitalBanking: {
        ar: 'منصة ABC Digital للتحويلات وكشوف العمليات على مدار الساعة، مع تنبيهات الرسائل النصية SMS',
        fr: 'Portail ABC Digital accessible 24h/24 pour relevés et virements, avec notifications SMS en temps réel',
      },
      islamicWindow: {
        ar: 'نافذة الصيرفة والتمويل الإسلامي «البراق» (Al-Buraq): البراق سكنى للعقار والبراق كروسي للسيارات',
        fr: 'Fenêtre dédiée Al-Buraq : Mourabaha immobilière (Al-Buraq Sakani) et financement auto (Al-Buraq Karoussi)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'نافذة التمويل الإسلامي البراق',
          fr: 'Offre islamique Al-Buraq',
        },
        value: {
          ar: 'تشمل البراق سكنى (مرابحة عقارية)، البراق كروسي (تمويل السيارات)، وحسابات الصكوك والادخار الاستثماري',
          fr: 'Inclut Al-Buraq Sakani (habitat), Al-Buraq Karoussi (auto) ainsi que l’épargne et investissement conformes à la Charia',
        },
      },
      {
        label: {
          ar: 'شبكة الوكالات عبر الولايات',
          fr: 'Implantation territoriale',
        },
        value: {
          ar: 'وكالات وشبابيك صيرفة إسلامية في الجزائر العاصمة، وهران، سطيف، الشلف، وحاسي مسعود',
          fr: 'Agences et guichets islamiques à Alger, Oran, Sétif, Chlef et Hassi Messaoud',
        },
      },
      {
        label: {
          ar: 'قنوات الاتصال والدعم المباشر',
          fr: 'Contacts & assistance corporate',
        },
        value: {
          ar: 'الهاتف 021.98.76.00 — البريد العام contact.algeria@bank-abc.com — إدارة السيولة abcalgeriacashmanagementcorpo@bank-abc.com',
          fr: 'Tél. 021.98.76.00 — Contact contact.algeria@bank-abc.com — Trésorerie abcalgeriacashmanagementcorpo@bank-abc.com',
        },
      },
      {
        label: {
          ar: 'البطاقات البنكية المحلية والدولية',
          fr: 'Cartes de paiement CIB & internationales',
        },
        value: {
          ar: 'بطاقات CIB للسحب والدفع عبر TPE والتجارة الإلكترونية بالجزائر، وبطاقات دولية للسفر والحجز العالمي',
          fr: 'Cartes CIB nationales (GAB/TPE/web) et cartes internationales pour voyages et paiements à l’étranger',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي منتجات التمويل التي تقدمها نافذة «البراق» في بنك ABC الجزائر؟',
          fr: 'Quels produits propose la fenêtre Al-Buraq de Bank ABC Algérie ?',
        },
        answer: {
          ar: 'تضم نافذة البراق منتجات متوافقة مع الشريعة أبرزها البراق سكنى للتمويل العقاري، البراق كروسي لتمويل اقتناء السيارات، وحسابات الادخار والاستثمار الإسلامي.',
          fr: 'Al-Buraq propose des solutions conformes à la Charia dont Al-Buraq Sakani pour le logement, Al-Buraq Karoussi pour l’automobile et des comptes d’investissement.',
        },
      },
      {
        question: {
          ar: 'أين تقع وكالات بنك ABC الجزائر الرئيسية؟',
          fr: 'Où sont situées les agences de Bank ABC Algérie ?',
        },
        answer: {
          ar: 'يقع المقر الرئيسي في بئر مراد رايس بالجزائر العاصمة (38 شارع الإخوة بوعدو)، وتتوفر وكالات في وهران، سطيف، الشلف، وحاسي مسعود.',
          fr: 'Le siège se trouve au 38 rue des Frères Bouadou à Bir Mourad Raïs (Alger), avec des agences notamment à Oran, Sétif, Chlef et Hassi Messaoud.',
        },
      },
      {
        question: {
          ar: 'ما هي القنوات المخصصة لتواصل الشركات حول إدارة السيولة في بنك ABC؟',
          fr: 'Comment contacter le service Cash Management Entreprises de Bank ABC ?',
        },
        answer: {
          ar: 'يمكن للشركات الاتصال على 021.98.76.00 أو المراسلة مباشرة عبر البريد abcalgeriacashmanagementcorpo@bank-abc.com أو contact.algeria@bank-abc.com.',
          fr: 'Appelez le 021.98.76.00 ou écrivez à abcalgeriacashmanagementcorpo@bank-abc.com ou contact.algeria@bank-abc.com.',
        },
      },
      {
        question: {
          ar: 'هل يدعم بنك ABC الدفع الإلكتروني وبطاقات السحب الوطنية؟',
          fr: 'Bank ABC prend-il en charge les cartes CIB et les paiements internationaux ?',
        },
        answer: {
          ar: 'نعم، يوفر البنك بطاقات CIB للدفع عبر أجهزة TPE والشبكة الوطنية، إضافة إلى بطاقات دولية للسفر والتسوق مع تنبيهات SMS لكل عملية.',
          fr: 'Oui, Bank ABC délivre des cartes CIB pour le réseau national ainsi que des cartes internationales avec alertes SMS de sécurité.',
        },
      },
    ],
  },

  // 6. bankalgeriane
  {
    id: 'bankalgeriane',
    slug: 'bankalgeriane',
    name: {
      ar: 'البنوك العمومية الجزائرية وبنك الجزائر',
      fr: 'Banques Publiques Algériennes & Régulation Bancaire',
    },
    acronym: 'BANQUES DZ',
    type: 'central',
    description: {
      ar: 'الدليل الجامع للبنوك العمومية السبعة في الجزائر وهيئات الرقابة المالية: بنك الجزائر (المركزي)، وزارة المالية، بنك الجزائر الخارجي BEA، القرض الشعبي الجزائري CPA، بنك الفلاحة والتنمية الريفية BADR، بنك التنمية المحلية BDL، البنك الوطني الجزائري BNA، الصندوق الوطني للتوفير والاحتياط CNEP، والبنك الوطني للإسكان BNH.',
      fr: 'Annuaire centralisé des 7 banques publiques algériennes et des autorités financières : Banque d’Algérie, Ministère des Finances, BEA, CPA, BADR, BDL, BNA, CNEP Banque et Banque Nationale de l’Habitat (BNH), avec accès direct à leurs portails officiels.',
    },
    website: 'https://www.bank-of-algeria.dz/',
    eBankingUrl: 'https://www.bank-of-algeria.dz/',
    swiftCode: 'BALGDZAL',
    headquarters: {
      ar: 'شارع زيغود يوسف، الجزائر العاصمة',
      fr: 'Boulevard Zighoud Youcef, Alger',
    },
    services: [
      {
        ar: 'بنك الجزائر — البنك المركزي والرقابة المصرفية',
        fr: 'Banque d’Algérie — Autorité Monétaire',
        url: 'https://www.bank-of-algeria.dz/',
        summary: {
          ar: 'أسعار الصرف الرسمية، النشرات النقدية، وقائمة البنوك والمؤسسات المالية المعتمدة في الجزائر.',
          fr: 'Cours de change officiels, réglementation bancaire et registre des établissements agréés.',
        },
      },
      {
        ar: 'وزارة المالية — الخزينة العمومية والجباية',
        fr: 'Ministère des Finances (MF)',
        url: 'https://www.mf.gov.dz/',
        summary: {
          ar: 'البوابة الوزارية المشرفة على القطاع المالي والميزانية والضرائب والبنوك العمومية.',
          fr: 'Portail ministériel de tutelle des finances publiques, du Trésor et du secteur bancaire.',
        },
      },
      {
        ar: 'بنك الجزائر الخارجي (BEA)',
        fr: 'Banque Extérieure d’Algérie (BEA)',
        url: 'https://bea.dz/',
        summary: {
          ar: 'تمويل التجارة الخارجية وقطاع الطاقة والمؤسسات مع خدمات BEA E-Banking وتطبيق BEA Mobile.',
          fr: 'Commerce extérieur, financement corporate/particuliers, BEA E-Banking et appli BEA Mobile.',
        },
      },
      {
        ar: 'القرض الشعبي الجزائري (CPA)',
        fr: 'Crédit Populaire d’Algérie (CPA)',
        url: 'https://www.cpa-bank.dz/index.php/ar/',
        summary: {
          ar: 'دعم المهن الحرة والصناعة والسياحة والإسكان عبر بوابة ebanking.cpa-bank.dz وتطبيقات Mobile CPA وWimpay.',
          fr: 'Banque de proximité, professions libérales, e-banking et paiement mobile Wimpay CPA.',
        },
      },
      {
        ar: 'بنك الفلاحة والتنمية الريفية (BADR)',
        fr: 'Banque de l’Agriculture et du Développement Rural (BADR)',
        url: 'https://badrbank.dz/',
        summary: {
          ar: 'أكبر شبكة فلاحية بأكثر من 340 وكالة، مع منصة MyBADR وشبابيك الصيرفة الإسلامية.',
          fr: 'Réseau de 340+ agences, financement rural, portail MyBADR et guichets islamiques.',
        },
      },
      {
        ar: 'بنك التنمية المحلية (BDL)',
        fr: 'Banque de Développement Local (BDL)',
        url: 'https://www.bdl.dz/ar/',
        summary: {
          ar: 'تمويل المؤسسات الصغيرة والمتوسطة والجماعات المحلية مع تطبيق DIGIT BDL ونافذة البديل الإسلامية.',
          fr: 'PME/PMI, développement local, appli DIGIT BDL et fenêtre islamique Al-Badil.',
        },
      },
      {
        ar: 'البنك الوطني الجزائري (BNA)',
        fr: 'Banque Nationale d’Algérie (BNA)',
        url: 'https://www.bna.dz/ar/',
        summary: {
          ar: 'أول بنك تجاري وطني مع بوابة BNA e-Banking وتطبيقي BNAtic وWimpay BNA.',
          fr: 'Première banque commerciale nationale, BNA e-Banking, BNAtic et Wimpay BNA.',
        },
      },
      {
        ar: 'الصندوق الوطني للتوفير والاحتياط (CNEP Banque)',
        fr: 'CNEP Banque (Épargne & Habitat)',
        url: 'https://www.cnepbanque.dz/web/',
        summary: {
          ar: 'الرائد في دفاتر الادخار السكني والقروض العقارية مع منصة CNEP Market وتطبيق CNEP Connect.',
          fr: 'Spécialiste de l’épargne et du financement immobilier, CNEP Market et appli CNEP Connect.',
        },
      },
      {
        ar: 'البنك الوطني للإسكان (BNH)',
        fr: 'Banque Nationale de l’Habitat (BNH)',
        url: 'https://bnh.dz/',
        summary: {
          ar: 'البنك العمومي المتخصص في تمويل البرامج السكنية الوطنية واقتناء وبناء المساكن.',
          fr: 'Banque publique dédiée au financement du logement, de la promotion immobilière et de l’épargne habitat.',
        },
      },
    ],
    contactPhone: '021 63 14 27',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات التوفير، الحسابات الجارية، حسابات العملة الصعبة، وحسابات الصيرفة الإسلامية عبر 7 بنوك عمومية',
        fr: 'Comptes courants, épargne habitat, comptes devises et fenêtres islamiques dans les 7 banques publiques',
      },
      digitalBanking: {
        ar: 'بوابات E-Banking رسمية، تطبيقات الهاتف، ومنظومة الدفع الفوري بالرمز QR عبر Wimpay وبطاقة CIB',
        fr: 'Portails E-Banking nationaux, apps mobiles, paiement QR Wimpay et réseau interbancaire CIB',
      },
      islamicWindow: {
        ar: 'نوافذ صيرفة إسلامية معتمدة في جميع البنوك العمومية التجارية (BNA، CNEP، BADR، BDL، CPA، BEA)',
        fr: 'Guichets de finance islamique déployés dans les banques publiques commerciales algériennes',
      },
    },
    requirements: [
      {
        label: {
          ar: 'نطاق البنوك العمومية السبعة',
          fr: 'Périmètre des 7 banques publiques',
        },
        value: {
          ar: 'BNA، BEA، CPA، BADR، BDL، CNEP Banque، والبنك الوطني للإسكان BNH، تحت رقابة بنك الجزائر',
          fr: 'BNA, BEA, CPA, BADR, BDL, CNEP Banque et BNH sous la supervision de la Banque d’Algérie',
        },
      },
      {
        label: {
          ar: 'الوثائق المطلوبة لفتح حساب عمومي',
          fr: 'Pièces pour ouverture de compte',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، ومبرر الدخل أو النشاط، وتختلف رسوم الحد الأدنى حسب الصيغة',
          fr: 'CNIBE biométrique, acte de naissance, certificat de résidence et justificatif d’activité ou de revenu',
        },
      },
      {
        label: {
          ar: 'التكامل مع الدفع الإلكتروني الوطني',
          fr: 'Interopérabilité monétique nationale',
        },
        value: {
          ar: 'ربط مباشر مع شبكة SATIM لبطاقات CIB والتحويلات البينية RIB/RIP نحو البريد CCP والبنوك الأخرى',
          fr: 'Raccordement SATIM pour cartes CIB et virements interbancaires via RIB/RIP vers les banques et CCP',
        },
      },
      {
        label: {
          ar: 'خدمات قد تهمك بالموازاة',
          fr: 'Services complémentaires utiles',
        },
        value: {
          ar: 'الخدمات البريدية والبطاقة الذهبية (بريد الجزائر)، تطبيقات الدفع النقال، وقروض السكن والادخار العقاري',
          fr: 'Algérie Poste (Edahabia/BaridiMob), applications de paiement mobile et financements immobiliers',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كم عدد البنوك العمومية الجزائرية وما هي أبرز تخصصاتها؟',
          fr: 'Quelles sont les 7 banques publiques algériennes et leurs spécialités ?',
        },
        answer: {
          ar: 'تضم الشبكة العمومية 7 بنوك: BNA وCPA وBDL للتمويل التجاري والمؤسسات، BEA للتجارة الخارجية والطاقة، BADR للفلاحة والتنمية الريفية، وCNEP وBNH للادخار وتمويل السكن.',
          fr: 'Le secteur public compte 7 banques : BNA, CPA et BDL (banque universelle/PME), BEA (commerce extérieur/énergie), BADR (agriculture), CNEP et BNH (épargne et logement).',
        },
      },
      {
        question: {
          ar: 'هل توفر البنوك العمومية الجزائرية جميعها نوافذ للصيرفة الإسلامية؟',
          fr: 'Les banques publiques disposent-elles d’offres de finance islamique ?',
        },
        answer: {
          ar: 'نعم، أطلقت البنوك العمومية التجارية (BNA، CPA، BADR، BDL، CNEP، BEA) شبابيك ومصالح مخصصة للصيرفة الإسلامية بشهادات مطابقة شرعية معتمدة.',
          fr: 'Oui, les banques publiques commerciales ont déployé des guichets de finance islamique certifiés conformes pour l’épargne et la Mourabaha.',
        },
      },
      {
        question: {
          ar: 'هل يمكن التحويل من بنك عمومي إلى حساب بريدي CCP أو بنك خاص؟',
          fr: 'Peut-on effectuer un virement d’une banque publique vers un CCP ou une banque privée ?',
        },
        answer: {
          ar: 'نعم، عبر نظام المقاصة الوطنية باستخدام رقم الهوية البنكية RIB أو رقم RIP البريدي المكون من 20 رقما سواء من الوكالة أو تطبيق E-Banking.',
          fr: 'Oui, via le système national de télécompensation à l’aide du RIB/RIP à 20 chiffres, en agence ou depuis votre espace E-Banking.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من أسعار الصرف الرسمية للدينار الجزائري؟',
          fr: 'Où consulter les cours de change officiels du Dinar Algérien ?',
        },
        answer: {
          ar: 'ينشر بنك الجزائر (bank-of-algeria.dz) يوميا جدول أسعار الصرف الرسمية المرجعية للأورو والدولار ومختلف العملات الأجنبية.',
          fr: 'La Banque d’Algérie (bank-of-algeria.dz) publie quotidiennement les cours de change officiels de référence.',
        },
      },
    ],
  },

  // 7. banketranger
  {
    id: 'banketranger',
    slug: 'banketranger',
    name: {
      ar: 'البنوك الخاصة والأجنبية المعتمدة في الجزائر',
      fr: 'Banques Privées & Étrangères Agréées en Algérie',
    },
    acronym: 'BANQUES PR',
    type: 'private',
    description: {
      ar: 'الدليل الشامل للبنوك الخاصة والأجنبية العاملة والمرخصة في الجزائر: بنك الخليج الجزائر AGB، بنك ABC الجزائر، البنك العربي Arab Bank، سوسيتي جنرال الجزائر SGA، بنك البركة الجزائري، ناتيكسيس Natixis، سيتي بنك Citibank، فرنسبنك Fransabank، وإتش إس بي سي HSBC مع روابطها الرسمية.',
      fr: 'Annuaire complet des banques privées et internationales agréées par la Banque d’Algérie : AGB, Bank ABC, Arab Bank, Société Générale Algérie (SGA), Al Baraka, Natixis Algérie, Citibank, Fransabank El Djazaïr et HSBC Algérie.',
    },
    website: 'https://www.bank-of-algeria.dz/',
    eBankingUrl: 'https://www.bank-of-algeria.dz/',
    swiftCode: 'BALGDZAL',
    headquarters: {
      ar: 'أحياء الأعمال بحيدرة وباب الزوار وبن عكنون، الجزائر العاصمة',
      fr: 'Pôles d’affaires Hydra, Bab Ezzouar & Ben Aknoun, Alger',
    },
    services: [
      {
        ar: 'سجل البنوك المعتمدة لدى بنك الجزائر',
        fr: 'Registre des Banques Agréées — Banque d’Algérie',
        url: 'https://www.bank-of-algeria.dz/',
        summary: {
          ar: 'القائمة الرسمية المرجعية للمصارف والمؤسسات المالية المرخصة بالعمل في السوق الجزائرية.',
          fr: 'Répertoire officiel de la Banque d’Algérie recensant les établissements bancaires et financiers autorisés.',
        },
      },
      {
        ar: 'بنك الخليج الجزائر (AGB) — AGB Online والتمويل الإسلامي',
        fr: 'Gulf Bank Algérie (AGB)',
        url: 'https://www.agb.dz/',
        summary: {
          ar: 'بوابة AGB Online، بطاقات CIB وVisa وMastercard، وحلول المرابحة والتمويل التجاري.',
          fr: 'E-banking AGB Online, cartes CIB/Visa/Mastercard et offres de finance islamique.',
        },
      },
      {
        ar: 'بنك ABC الجزائر — ABC Digital ونافذة البراق',
        fr: 'Bank ABC Algérie',
        url: 'https://www.bank-abc.com/ar/CountrySites/Algeria',
        summary: {
          ar: 'الصيرفة الرقمية ونافذة التمويل الإسلامي البراق وبطاقات الدفع المحلية والدولية.',
          fr: 'Plateforme ABC Digital, finance islamique Al-Buraq et cartes CIB/internationales.',
        },
      },
      {
        ar: 'البنك العربي الجزائر — عربي أونلاين وعربي موبايل',
        fr: 'Arab Bank PLC Algérie',
        url: 'https://arabbank.dz/ar',
        summary: {
          ar: 'خدمات الأفراد والشركات، صناديق الأمانات، بطاقات CIB وفيزا، والتجارة الدولية.',
          fr: 'Arabi Online, Arabi Mobile, comptes particuliers/entreprises et financement du commerce extérieur.',
        },
      },
      {
        ar: 'سوسيتي جنرال الجزائر (SGA) — APPLI SGA وSogecash Net',
        fr: 'Société Générale Algérie (SGA)',
        url: 'https://societegenerale.dz/fr/',
        summary: {
          ar: 'التطبيق الذكي للأفراد، منصة الشركات Sogecash Net، بطاقات لاتلامسية، والإيجار المالي Leasing.',
          fr: 'Application APPLI SGA, portail corporate Sogecash Net, cartes sans contact et Leasing.',
        },
      },
      {
        ar: 'بنك البركة الجزائري — Al Baraka Dz وAl Baraka Net',
        fr: 'Banque Al Baraka d’Algérie',
        url: 'https://www.albaraka-bank.dz/?lang=ar',
        summary: {
          ar: 'حلول الصيرفة والتمويل الإسلامي (مرابحة، إجارة، استصناع) والخدمات الرقمية المتوافقة مع الشريعة.',
          fr: 'Financements conformes à la Charia (Mourabaha, Ijara, Istisnaa) et portail Al Baraka Net.',
        },
      },
      {
        ar: 'ناتيكسيس الجزائر (Natixis Algérie)',
        fr: 'Natixis Algérie',
        url: 'https://www.algerie.natixis.com/',
        summary: {
          ar: 'بنك التمويل والاستثمار وخدمات الشركات الكبرى والتجارة الدولية.',
          fr: 'Banque de financement, d’investissement et services bancaires dédiés aux grandes entreprises.',
        },
      },
      {
        ar: 'سيتي بنك الجزائر (Citibank N.A. Algeria)',
        fr: 'Citibank N.A. Algérie (Citigroup)',
        url: 'https://www.citigroup.com/global/about-us/global-presence/algeria',
        summary: {
          ar: 'منصة CitiDirect المؤسساتية، حلول الخزينة TTS، وتمويل الشركات متعددة الجنسيات.',
          fr: 'Portail CitiDirect, solutions de trésorerie TTS et financement des multinationales.',
        },
      },
      {
        ar: 'فرنسبنك الجزائر (Fransabank El Djazaïr)',
        fr: 'Fransabank El Djazaïr',
        url: 'https://www.fransabank.dz/ar/',
        summary: {
          ar: 'الصيرفة الإلكترونية FSBKlic، تطبيق Bank-In-App، خدمة Khebarni، وقروض السكن والسيارات.',
          fr: 'Portail FSBKlic, app Bank-In-App, alertes Khebarni, crédits habitat/auto et PME.',
        },
      },
      {
        ar: 'إتش إس بي سي الجزائر (HSBC Algeria)',
        fr: 'HSBC Algérie',
        url: 'https://www.business.algeria.hsbc.com/',
        summary: {
          ar: 'منصة HSBCnet العالمية، تمويل التجارة الدولية وسلاسل الإمداد وإدارة السيولة للشركات الكبرى.',
          fr: 'Portail HSBCnet, financement du commerce international (GTRF) et gestion de trésorerie GLCM.',
        },
      },
    ],
    contactPhone: '021 63 14 27',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات أفراد بالعملة الوطنية والصعبة، حسابات مؤسسات وشركات أجنبية، وحسابات ادخار واستثمار',
        fr: 'Comptes particuliers DZD/Devises, comptes corporate/multinationales et placements à terme',
      },
      digitalBanking: {
        ar: 'تطبيقات هاتف متطورة وبوابات مؤسساتية عالمية (Sogecash Net، CitiDirect، HSBCnet، AGB Online)',
        fr: 'Applications mobiles grand public et portails institutionnels (Sogecash Net, CitiDirect, HSBCnet, AGB Online)',
      },
      islamicWindow: {
        ar: 'مصارف ونوافذ إسلامية متخصصة ضمن القطاع الخاص (بنك البركة، نافذة البراق ABC، وصيرفة AGB)',
        fr: 'Offres islamiques dédiées dans le secteur privé : Al Baraka Bank, fenêtre Al-Buraq (ABC) et AGB',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الفرق بين بنوك التجزئة وبنوك الشركات',
          fr: 'Banques universelles vs Corporate',
        },
        value: {
          ar: 'تستقبل بنوك مثل AGB وSGA وAl Baraka وArab Bank وFransabank وABC الأفراد والشركات، بينما تختص Citibank وHSBC وNatixis في تمويل المؤسسات الكبرى والتجارة الدولية',
          fr: 'AGB, SGA, Al Baraka, Arab Bank, Fransabank et ABC servent particuliers et entreprises ; Citibank, HSBC et Natixis ciblent principalement le Corporate Banking',
        },
      },
      {
        label: {
          ar: 'الإشراف التنظيمي وضمان الودائع',
          fr: 'Agrément & régulation',
        },
        value: {
          ar: 'جميع المصارف الأجنبية والخاصة المدرجة حاصلة على اعتماد رسمي من مجلس النقد والقرض وتخضع لرقابة بنك الجزائر',
          fr: 'Tous ces établissements disposent de l’agrément du Conseil de la Monnaie et du Crédit et opèrent sous contrôle de la Banque d’Algérie',
        },
      },
      {
        label: {
          ar: 'البطاقات والعملة الصعبة',
          fr: 'Cartes CIB, Visa & Mastercard',
        },
        value: {
          ar: 'بطاقات CIB وطنية مع بطاقات Visa وMastercard الدولية المرتبطة بحسابات العملة الصعبة وفق شروط كل مصرف',
          fr: 'Émission de cartes CIB nationales et de cartes internationales Visa/Mastercard adossées aux comptes devises',
        },
      },
      {
        label: {
          ar: 'التمركز الجغرافي',
          fr: 'Implantation géographique',
        },
        value: {
          ar: 'تركز المقرات الاجتماعية في أحياء الأعمال بالعاصمة (باب الزوار، حيدرة، دالي إبراهيم) مع فروع بالمدن الكبرى',
          fr: 'Sièges regroupés dans les pôles d’affaires d’Alger (Bab Ezzouar, Hydra, Daly Ibrahim) et réseaux dans les grandes wilayas',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي البنوك الخاصة والأجنبية التي تفتح حسابات للأفراد في الجزائر؟',
          fr: 'Quelles banques privées ou étrangères ouvrent des comptes aux particuliers en Algérie ?',
        },
        answer: {
          ar: 'توفر بنوك سوسيتي جنرال SGA، بنك الخليج AGB، بنك البركة، البنك العربي، فرنسبنك، وبنك ABC خدمات فتح الحسابات الجارية والتوفير والعملة الصعبة للأفراد والمهنيين.',
          fr: 'SGA, AGB, Al Baraka, Arab Bank, Fransabank et Bank ABC proposent des comptes courants, d’épargne et en devises pour les particuliers et professionnels.',
        },
      },
      {
        question: {
          ar: 'هل تقبل سيتي بنك وإتش إس بي سي فتح حسابات للأفراد العاديين؟',
          fr: 'Citibank et HSBC Algérie ouvrent-ils des comptes pour les particuliers ?',
        },
        answer: {
          ar: 'يركز كل من Citibank وHSBC Algeria في السوق الجزائرية أساسا على الخدمات المصرفية للشركات الكبرى، المؤسسات متعددة الجنسيات، التجارة الدولية، وأسواق الصرف والخزينة.',
          fr: 'En Algérie, Citibank et HSBC s’adressent essentiellement aux grandes entreprises, multinationales et opérations de commerce international et trésorerie.',
        },
      },
      {
        question: {
          ar: 'هل البطاقات البنكية الصادرة عن البنوك الخاصة تعمل مع الدفع الإلكتروني الجزائري؟',
          fr: 'Les cartes CIB des banques privées fonctionnent-elles sur les sites algériens ?',
        },
        answer: {
          ar: 'نعم، ترتبط بطاقات CIB الصادرة عن البنوك الخاصة والأجنبية المعتمدة بشبكة النقديات SATIM وتعمل على جميع أجهزة TPE ومواقع الدفع الإلكتروني الجزائرية.',
          fr: 'Oui, toutes les cartes CIB émises par les banques privées agréées sont raccordées au réseau SATIM pour les paiements TPE et en ligne en Algérie.',
        },
      },
      {
        question: {
          ar: 'أين أجد روابط كل بنك أجنبي بالتفصيل داخل البوابة؟',
          fr: 'Où consulter la fiche détaillée de chaque banque étrangère sur le portail ?',
        },
        answer: {
          ar: 'تتوفر لكل بنك من البنوك التسعة صفحة مخصصة داخل قسم البنوك تتضمن رمز السويفت، المقر، خدمات الصيرفة الرقمية، وقنوات الاتصال المعتمدة.',
          fr: 'Chacune des 9 banques dispose de sa fiche dédiée dans l’annuaire bancaire avec code SWIFT, coordonnées du siège, liens E-Banking et guides pratiques.',
        },
      },
    ],
  },

  // 8. bdl
  {
    id: 'bdl',
    slug: 'bdl',
    name: {
      ar: 'بنك التنمية المحلية (BDL)',
      fr: 'Banque de Développement Local (BDL)',
    },
    acronym: 'BDL',
    type: 'public',
    description: {
      ar: 'الدليل الشامل للخدمات الرقمية لبنك التنمية المحلية BDL: بوابة الصيرفة الإلكترونية BDL E-Banking، تطبيق DIGIT BDL لهواتف أندرويد وآيفون، نافذة الصيرفة الإسلامية «البديل» (مرابحة وإجارة منتهية بالتمليك)، محاكي القروض والتمويلات، بطاقات CIB وMastercard وVisa، وشبكة الوكالات عبر الولايات.',
      fr: 'Guide complet des téléservices de la Banque de Développement Local (BDL) : portail BDL E-Banking, applications DIGIT BDL Android/iOS avec RIB instantané, fenêtre de finance islamique Al-Badil, simulateur de crédits, cartes CIB/Visa/Mastercard et réseau national d’agences.',
    },
    website: 'https://www.bdl.dz/ar/',
    eBankingUrl: 'https://ebanking.bdl.dz/',
    swiftCode: 'BDLODZAL',
    headquarters: {
      ar: '5 شارع غرمول، الجزائر العاصمة / المديرية بسطاوالي',
      fr: '5 Rue Gaci Amar, Staouéli / Alger',
    },
    services: [
      {
        ar: 'الموقع الرسمي لبنك التنمية المحلية BDL',
        fr: 'Site Officiel BDL',
        url: 'https://www.bdl.dz/ar/',
        summary: {
          ar: 'البوابة الرسمية للاطلاع على منتجات الأفراد، المهنيين، والمؤسسات الصغيرة والمتوسطة والأسعار المطبقة.',
          fr: 'Portail officiel présentant les offres particuliers, PME, collectivités locales et conditions bancaires.',
        },
      },
      {
        ar: 'بوابة الصيرفة الإلكترونية BDL E-Banking',
        fr: 'Portail E-Banking BDL',
        url: 'https://ebanking.bdl.dz/',
        summary: {
          ar: 'الدخول المباشر للحسابات بالدينار والعملة الصعبة، كشوف الحساب، والتحويلات المصرفية 24/7.',
          fr: 'Gestion sécurisée des comptes DZD/Devises, virements, relevés et commande de cartes/chéquiers 24h/24.',
        },
      },
      {
        ar: 'نافذة الصيرفة الإسلامية لبنك BDL (البديل)',
        fr: 'Finance Islamique BDL (Al-Badil)',
        url: 'https://www.bdl.dz/ar/banque-islamique/',
        summary: {
          ar: 'مرابحة استهلاكية، مرابحة سيارات وعقار، إجارة منتهية بالتمليك، وحسابات التوفير والاستثمار الشرعية.',
          fr: 'Mourabaha consommation, auto et habitat, Ijara Mountahia Bittamlik et comptes participatifs islamiques.',
        },
      },
      {
        ar: 'محاكي القروض والتمويلات وحساب الأقساط',
        fr: 'Simulateur de Crédits & Financements BDL',
        url: 'https://www.bdl.dz/ar/simulateur-de-credit.html',
        summary: {
          ar: 'حساب تقديري دقيق للأقساط الشهرية لقروض السكن، الاستهلاك، المشاريع، والتمويلات الإسلامية.',
          fr: 'Estimation précise des mensualités pour crédits immobiliers, consommation, projets et financements islamiques.',
        },
      },
      {
        ar: 'شبكة الوكالات وموزعات السحب الآلي GAB',
        fr: 'Réseau d’Agences & Distributeurs GAB',
        url: 'https://www.bdl.dz/ar/reseau-agences.html',
        summary: {
          ar: 'خريطة وكالات BDL وشبابيك الصيرفة الإسلامية وأجهزة الصراف الآلي في جميع ولايات الوطن.',
          fr: 'Localisation des agences BDL, guichets de finance islamique et distributeurs automatiques par wilaya.',
        },
      },
      {
        ar: 'البطاقات النقدية CIB وVisa وMastercard وأجهزة TPE',
        fr: 'Monétique — Cartes CIB, Visa, Mastercard & TPE',
        url: 'https://www.bdl.dz/ar/monetique.html',
        summary: {
          ar: 'إدارة بطاقات الدفع الوطنية والدولية وتفعيل الشراء عبر الإنترنت وخدمات التجار TPE.',
          fr: 'Gestion des cartes nationales et internationales, activation du e-paiement et terminaux TPE commerçants.',
        },
      },
      {
        ar: 'تطبيق DIGIT BDL لهواتف أندرويد (Google Play)',
        fr: 'Application DIGIT BDL (Android)',
        url: 'https://play.google.com/store/apps/details?id=com.aebs.p2bbdl',
        summary: {
          ar: 'إدارة الحسابات، تنفيذ التحويلات البنكية، طلب البطاقات، واستخراج كشف الهوية البنكية RIB فوريا.',
          fr: 'Application officielle Android : soldes, virements, demande de carte et édition instantanée du RIB.',
        },
      },
      {
        ar: 'تطبيق DIGIT BDL لهواتف آيفون (App Store iOS)',
        fr: 'Application DIGIT BDL (iOS / App Store)',
        url: 'https://apps.apple.com/app/digit-bdl/id1571424161',
        summary: {
          ar: 'الوصول السريع والآمن إلى خدمات BDL عبر أجهزة iPhone وiPad على مدار الساعة.',
          fr: 'Version iOS pour piloter vos comptes BDL et suivre vos opérations en temps réel 24h/24.',
        },
      },
      {
        ar: 'فضاء الاستفسارات والشكاوى — خدمة الزبائن',
        fr: 'Contact, Assistance & Réclamations Client',
        url: 'https://www.bdl.dz/ar/contact.html',
        summary: {
          ar: 'استمارة الاتصال الرسمية، إضافة إلى البريد الإلكتروني لمركز علاقات الزبائن clientele@bdl.dz.',
          fr: 'Formulaire officiel de réclamations et d’assistance, en complément du courriel clientele@bdl.dz.',
        },
      },
    ],
    contactPhone: '023 39 50 00 / 3312',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية بالدينار والعملة الصعبة، حسابات توفير، وحسابات البديل للصيرفة الإسلامية',
        fr: 'Comptes courants DZD/Devises, comptes épargne et comptes participatifs islamiques Al-Badil',
      },
      digitalBanking: {
        ar: 'بوابة BDL E-Banking وتطبيق DIGIT BDL (Android / iOS) للتحويلات واستخراج RIB الفوري',
        fr: 'Portail BDL E-Banking et application DIGIT BDL (Android/iOS) avec virements et RIB instantané',
      },
      islamicWindow: {
        ar: 'نافذة «البديل» للصيرفة الإسلامية: مرابحة استهلاكية، سيارات، عقار، وإجارة منتهية بالتمليك',
        fr: 'Fenêtre islamique Al-Badil : Mourabaha consommation, auto, habitat et Ijara Mountahia Bittamlik',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الوثائق المطلوبة لفتح حساب في BDL',
          fr: 'Dossier d’ouverture de compte BDL',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة حديثة، وكشف راتب أو سجل تجاري للمهنيين والتجار',
          fr: 'CNIBE biométrique, acte de naissance, certificat de résidence et justificatif d’activité ou de salaire',
        },
      },
      {
        label: {
          ar: 'التحقق المسبق بمحاكي القروض',
          fr: 'Simulation préalable en ligne',
        },
        value: {
          ar: 'استخدام صفحة simulateur-de-credit.html لاحتساب مبلغ القسط الشهري والقدرة على السداد قبل إيداع الملف',
          fr: 'Utiliser simulateur-de-credit.html pour calculer les échéances et la capacité d’endettement avant dépôt',
        },
      },
      {
        label: {
          ar: 'بطاقات الدفع المحلية والدولية',
          fr: 'Cartes CIB, Visa & Mastercard',
        },
        value: {
          ar: 'إصدار بطاقات CIB الوطنية إلى جانب بطاقات Visa وMastercard الدولية عبر فضاء النقديات',
          fr: 'Délivrance de cartes CIB nationales ainsi que de cartes internationales Visa et Mastercard',
        },
      },
      {
        label: {
          ar: 'قنوات الدعم ومركز علاقات الزبائن',
          fr: 'Centre de relation client',
        },
        value: {
          ar: 'الرقم 3312 أو 023.39.50.00 — البريد clientele@bdl.dz — استمارة bdl.dz/ar/contact.html',
          fr: 'Téléphone 3312 ou 023.39.50.00 — E-mail clientele@bdl.dz — Formulaire bdl.dz/ar/contact.html',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي ميزات تطبيق DIGIT BDL للهواتف الذكية؟',
          fr: 'Que permet l’application mobile DIGIT BDL ?',
        },
        answer: {
          ar: 'يتيح تطبيق DIGIT BDL الاطلاع اللحظي على الأرصدة وكشف العمليات، تنفيذ التحويلات البنكية، طلب البطاقات، واستخراج كشف الهوية البنكية RIB فوريا على أندرويد وiOS.',
          fr: 'DIGIT BDL permet de consulter vos soldes en temps réel, effectuer des virements, commander des cartes et éditer votre RIB sur Android et iOS.',
        },
      },
      {
        question: {
          ar: 'كيف أحسب قسط القرض العقاري أو التمويل الإسلامي في BDL؟',
          fr: 'Comment simuler un crédit immobilier ou islamique à la BDL ?',
        },
        answer: {
          ar: 'ادخل إلى محاكي القروض الرسمي على الرابط bdl.dz/ar/simulateur-de-credit.html واختر نوع القرض والمبلغ والمدة لمعرفة القسط الشهري التقريبي فورا.',
          fr: 'Accédez au simulateur officiel sur bdl.dz/ar/simulateur-de-credit.html, sélectionnez la formule, le montant et la durée pour estimer votre mensualité.',
        },
      },
      {
        question: {
          ar: 'ما هي صيغ الصيرفة الإسلامية التي يقدمها بنك التنمية المحلية؟',
          fr: 'Quelles sont les formules de finance islamique de la BDL ?',
        },
        answer: {
          ar: 'تقدم نافذة «البديل» مرابحة استهلاكية، مرابحة لاقتناء السيارات والعقارات، صيغة الإجارة المنتهية بالتمليك، إضافة إلى حسابات الادخار والاستثمار الإسلامي.',
          fr: 'La fenêtre Al-Badil offre la Mourabaha consommation, auto et habitat, l’Ijara Mountahia Bittamlik ainsi que les comptes d’épargne et d’investissement.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع مركز علاقات الزبائن لبنك BDL؟',
          fr: 'Comment contacter le service client de la BDL ?',
        },
        answer: {
          ar: 'اتصل عبر الرقم المختصر 3312 أو 023.39.50.00، أو راسل البريد الرسمي clientele@bdl.dz أو استعمل استمارة الاتصال في الموقع الرسمي.',
          fr: 'Appelez le 3312 ou le 023.39.50.00, écrivez à clientele@bdl.dz ou utilisez le formulaire bdl.dz/ar/contact.html.',
        },
      },
    ],
  },
];

export const batch1BankGuides: Record<string, Partial<RichGuideContent>> = {
  'ag-bank': {
    intro: {
      ar: [
        'يعد بنك الخليج الجزائر (Gulf Bank Algérie - AGB)، الذي انطلق مقره من دالي إبراهيم والأبيار بالجزائر العاصمة، أحد أبرز المصارف الخاصة الرائدة في السوق الجزائرية بفضل شبكته الواسعة التي تتجاوز 60 وكالة موزعة عبر التراب الوطني. يجمع البنك بين الصيرفة التجارية التقليدية وباقة متكاملة من حلول الصيرفة والتمويل الإسلامي.',
        'على الصعيد الرقمي، توفر بوابة وتطبيق AGB Online (على أندرويد وiOS) إدارة كاملة للحسابات الجارية وحسابات الادخار والعملة الصعبة، تنفيذ التحويلات الفورية بين الحسابات والبنوك، استخراج كشوف العمليات، طلب دفاتر الشيكات، والتحكم في بطاقات الدفع المحلية CIB والدولية Visa وMastercard بأمان تام على مدار الساعة.',
        'يستعرض هذا الدليل خطوات فتح حساب في بنك الخليج الجزائر، شروط طلب التمويل الإسلامي بصيغة المرابحة للعقار والسيارات والتجهيز، وطرق التواصل المباشر مع مركز الاتصال 3304 لمعالجة أي إشكال تقني أو مصرفي.'
      ],
      fr: [
        'Implanté à Daly Ibrahim / El Biar à Alger et fort d’un réseau de plus de 60 agences à travers le pays, Gulf Bank Algérie (AGB) occupe une place de premier plan parmi les banques privées agréées en Algérie. L’établissement propose aussi bien des produits bancaires classiques qu’une offre structurée de finance islamique.',
        'Son dispositif numérique AGB Online (portail web et applications Android/iOS) permet de piloter ses comptes courants, d’épargne et en devises à distance : virements instantanés, suivi des mouvements, commande de chéquiers et gestion sécurisée des cartes CIB, Visa et Mastercard 24h/24.',
        'Ce guide pratique détaille les pièces requises pour ouvrir un compte chez AGB, l’accès aux financements Mourabaha ainsi que les canaux d’assistance (centre d’appels 3304 et support e-mail) en cas de besoin.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'توقف الدخول إلى تطبيق AGB Online بعد تغيير الهاتف أو تحديث النظام',
          fr: 'Accès bloqué à l’application AGB Online après changement de téléphone',
        },
        solution: {
          ar: 'تواصل مع مركز الاتصال 3304 أو وكالتك المسيرة لإعادة ربط الجهاز وإرسال رمز التفعيل على رقم هاتفك الشخصي المسجل لدى البنك.',
          fr: 'Contactez le centre d’appels au 3304 ou votre agence gestionnaire pour réassocier votre nouvel appareil mobile et réinitialiser l’accès.',
        },
      },
      {
        issue: {
          ar: 'رفض الدفع الإلكتروني ببطاقة CIB أو Visa الدولية في المواقع المعتمدة',
          fr: 'Refus de transaction e-paiement sur carte CIB ou Visa AGB',
        },
        solution: {
          ar: 'تأكد من تفعيل خدمة الدفع عبر الإنترنت على البطاقة ووجود رصيد كاف وعدم تجاوز السقف المسموح به، مع التحقق من استقبال رسالة OTP.',
          fr: 'Vérifiez l’activation du e-paiement, le solde disponible, les plafonds autorisés et la bonne réception du code 3D Secure par SMS.',
        },
      },
      {
        issue: {
          ar: 'تأخر معالجة طلب تمويل إسلامي أو قرض استثماري للشركات',
          fr: 'Délai d’instruction d’un dossier de financement Mourabaha ou corporate',
        },
        solution: {
          ar: 'تابع حالة الملف مع المكلف بالزبائن في وكالتك أو عبر البريد المعتمد CRC@agb.dz مع إرفاق رقم الطلب وتاريخ الإيداع.',
          fr: 'Suivez l’avancement auprès de votre chargé de clientèle en agence ou écrivez à CRC@agb.dz en mentionnant la référence du dossier.',
        },
      },
    ],
    extraFaqs: [],
  },

  'albaraka-bank': {
    intro: {
      ar: [
        'يمثل بنك البركة الجزائري (Al Baraka Bank Algeria) الركيزة التاريخية والرائدة للصيرفة الإسلامية في الجزائر منذ تأسيسه عام 1991، انطلاقا من مقره الاجتماعي بحي الأعمال بباب الزوار وانتشارا عبر عشرات الفروع والشبابيك الآلية في مختلف الولايات. يلتزم البنك التزاما تاما بأحكام الشريعة الإسلامية في جميع معاملات الادخار والاستثمار والتمويل.',
        'على مستوى الرقمنة البنكية، يتيح البنك للأفراد والمهنيين تطبيق Al Baraka Dz لمتابعة الأرصدة وتحويل الأموال فوريا عبر الهاتف الذكي، إلى جانب بوابة الويب Al Baraka Net الموجهة للأفراد والشركات لتنفيذ التحويلات الجماعية وتحميل الكشوف المالية، مع خدمة الإشعار الفوري عبر الرسائل القصيرة SMS عند كل حركة حساب.',
        'يتناول هذا الدليل المتكامل صيغ التمويل الإسلامي لدى بنك البركة (المرابحة للسيارات المجمعة محليا والتجهيزات، الاستصناع، والإجارة الموصوفة في الذمة للعقارات)، شروط فتح الحسابات، واستعمال بطاقات CIB وفيزا الدولية.'
      ],
      fr: [
        'Première banque à vocation islamique implantée en Algérie, la Banque Al Baraka d’Algérie rayonne depuis son siège du quartier d’affaires de Bab Ezzouar à travers un large réseau d’agences et de distributeurs automatiques. L’ensemble de ses comptes et financements respecte strictement les principes de la Charia.',
        'Côté services digitaux, l’application Al Baraka Dz et le portail Al Baraka Net offrent une gestion complète à distance : consultation de comptes, virements unitaires ou groupés pour entreprises, téléchargement des relevés et alertes SMS à chaque opération.',
        'Découvrez dans ce guide les modalités d’accès aux financements islamiques (Mourabaha auto/équipement, Istisnaa et Ijara habitat), les justificatifs d’ouverture de compte et l’assistance clientèle.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم وصول إشعارات SMS الفورية عند إجراء عمليات السحب أو الدفع',
          fr: 'Absence de notifications SMS lors des mouvements sur le compte',
        },
        solution: {
          ar: 'تأكد من تفعيل خدمة SMS Banking لدى وكالتك وتحديث رقم هاتفك الشخصي في ملف الزبون دون تغيير الرقم المسجل.',
          fr: 'Vérifiez auprès de votre agence l’activation de l’alerte SMS et la mise à jour de votre numéro de téléphone mobile.',
        },
      },
      {
        issue: {
          ar: 'رفض ملف تمويل السيارات المجمعة محليا أو العقار بصيغة المرابحة',
          fr: 'Pièces manquantes lors d’une demande Mourabaha automobile ou habitat',
        },
        solution: {
          ar: 'احرص على إحضار فاتورة شكلية حديثة من الوكيل أو المرقى المعتمد وكشوف راتب منتظمة تغطي نسبة الاقتطاع القانونية المقررة.',
          fr: 'Fournissez une facture proforma actualisée du fournisseur agréé ainsi que vos trois derniers bulletins de paie ou justificatifs fiscaux.',
        },
      },
      {
        issue: {
          ar: 'صعوبة الولوج إلى حساب الشركات في بوابة Al Baraka Net',
          fr: 'Incident de connexion au portail entreprise Al Baraka Net',
        },
        solution: {
          ar: 'تواصل مع خلية الدعم على الأرقام 0771.900.832 أو 0771.900.834 للتحقق من صلاحية مفاتيح التوقيع الرقمي وتفعيل الحساب.',
          fr: 'Contactez le support client au 0771.900.832 ou 0771.900.834 pour vérifier les autorisations de signature et réactiver l’accès.',
        },
      },
    ],
    extraFaqs: [],
  },

  arabbank: {
    intro: {
      ar: [
        'ينشط البنك العربي الجزائر (Arab Bank PLC Algeria) انطلاقا من مقره الرئيسي بحيدرة في الجزائر العاصمة وشبكة فروعه في حيدرة والقبة ووهران وعنابة وسطيف، مقدما تجربة مصرفية تجمع بين المعايير الدولية لمجموعة البنك العربي والامتثال التام لتنظيمات بنك الجزائر.',
        'يرتكز العرض الرقمي للبنك على منصة الصيرفة الإلكترونية «عربي أونلاين» (Arabi Online) عبر الويب وتطبيق «عربي موبايل» (Arabi Mobile) الذي يدعم الدخول الآمن ببصمة الإصبع والوجه، ليتيح للزبائن الاطلاع الفوري على الأرصدة، تنفيذ التحويلات بين الحسابات والبنوك المحلية، إدارة بطاقات CIB وفيزا الدولية، واستلام تنبيهات فورية لكل حركة مالية.',
        'كما يغطي البنك احتياجات الأفراد عبر الحسابات الجارية وحسابات التوفير والودائع لأجل DAT والقروض السكنية وصناديق الأمانات الحديدية، إلى جانب خدمات الشركات الكبرى في التمويل وخطابات الضمان والاعتمادات المستندية وإدارة السيولة.'
      ],
      fr: [
        'Présent en Algérie depuis son siège d’Hydra à Alger et ses agences à Kouba, Oran, Annaba et Sétif, Arab Bank PLC Algérie déploie l’expertise d’un grand groupe bancaire régional au service des particuliers et des entreprises algériennes.',
        'Sur le volet numérique, le portail Arabi Online et l’application Arabi Mobile (dotée de l’authentification biométrique par empreinte et reconnaissance faciale) assurent une autonomie complète 24h/24 : suivi de comptes, virements locaux, gestion des cartes CIB et Visa et alertes SMS.',
        'L’établissement propose également des comptes d’épargne, dépôts à terme DAT, crédits immobiliers et location de coffres-forts pour les particuliers, ainsi que le financement de projets et le commerce extérieur pour les sociétés.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'تعطل الدخول ببصمة الإصبع أو الوجه في تطبيق عربي موبايل',
          fr: 'Dysfonctionnement de la connexion biométrique sur Arabi Mobile',
        },
        solution: {
          ar: 'سجل الدخول مؤقتا بكلمة المرور ثم أعد تفعيل خيار البصمة من إعدادات الأمان داخل التطبيق بعد تحديث نظام الهاتف.',
          fr: 'Authentifiez-vous avec votre mot de passe puis réactivez la biométrie dans les paramètres de sécurité de l’application.',
        },
      },
      {
        issue: {
          ar: 'استفسار حول بطاقة فيزا الدولية أو تحويل تجاري وارد',
          fr: 'Suivi d’une carte Visa internationale ou d’un virement commercial',
        },
        solution: {
          ar: 'اتصل بخدمة العملاء على الرقم 021.60.86.50 أو 021.48.00.02 مع تزويد الموظف برقم الحساب أو المرجع المصرفي.',
          fr: 'Appelez le service client au 021.60.86.50 ou 021.48.00.02 en vous munissant de votre numéro de compte ou référence SWIFT.',
        },
      },
      {
        issue: {
          ar: 'تقديم شكوى رسمية بشأن عملية مصرفية أو رسوم',
          fr: 'Déposer une réclamation formelle sur une opération bancaire',
        },
        solution: {
          ar: 'ارفع الشكوى مباشرة إلى البريد المخصص Customer.Complaints@arabbank.dz أو الخط 023.47.19.72 لتسجيل رقم تتبع رسمي.',
          fr: 'Transmettez votre réclamation à Customer.Complaints@arabbank.dz ou au 023.47.19.72 afin d’obtenir un suivi formel.',
        },
      },
    ],
    extraFaqs: [],
  },

  badr: {
    intro: {
      ar: [
        'يمثل بنك الفلاحة والتنمية الريفية (BADR) أحد أكبر البنوك العمومية في الجزائر وأوسعها انتشارا جغرافيا بفضل شبكة تتجاوز 340 وكالة منتشرة في كل ولايات الوطن. إلى جانب دوره المحوري في مرافقة الفلاحين والصناعات الغذائية والريفية، يقدم البنك خدمات مصرفية شاملة للأفراد والمهنيين والمؤسسات.',
        'حققت الرقمنة في بنك BADR نقلة نوعية عبر بوابة الصيرفة الإلكترونية MyBADR وتطبيق الهاتف الذكي على Google Play وApp Store، حيث أصبح بإمكان الزبون متابعة حساباته بالدينار والعملة الصعبة، إجراء التحويلات المصرفية، طلب البطاقات ودفاتر الصكوك، وتحميل كشف الهوية البنكية RIB بصيغة رقمية فورية.',
        'كما يضم البنك شبابيك مخصصة للصيرفة الإسلامية (مرابحة غراس، مرابحة العتاد، المرابحة العقارية، وحسابات التوفير والاستثمار الشرعية)، مدعومة بمحرك البحث الجغرافي للوكالات والموزعات الآلية وبوابة النقديات لبطاقات CIB وأجهزة TPE.'
      ],
      fr: [
        'Avec plus de 340 agences réparties sur l’ensemble des wilayas, la Banque de l’Agriculture et du Développement Rural (BADR) dispose de l’un des plus vastes réseaux bancaires publics en Algérie. Partenaire historique du monde agricole et agroalimentaire, elle sert également les ménages, professions libérales et PME.',
        'Sa plateforme digitale MyBADR (portail web et applications mobiles Android et iOS) permet de gérer les comptes en dinars et en devises, d’exécuter des virements, de suivre les opérations et de télécharger instantanément son RIB à tout moment.',
        'La BADR a également déployé des guichets de finance islamique (Mourabaha Ghirass, équipement, immobilier et épargne participative) ainsi qu’un espace monétique complet pour les cartes CIB et les terminaux TPE.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم تطابق بيانات الدخول عند استخدام منصة MyBADR لأول مرة',
          fr: 'Identifiant invalide lors de la première connexion à MyBADR',
        },
        solution: {
          ar: 'تأكد من تفعيل اشتراك MyBADR في وكالتك وتغيير كلمة المرور المؤقتة من بوابة الويب mybadr.badrbank.dz قبل الدخول من التطبيق.',
          fr: 'Vérifiez en agence que votre abonnement MyBADR est actif et initialisez votre mot de passe sur le portail web mybadr.badrbank.dz avant d’utiliser l’application.',
        },
      },
      {
        issue: {
          ar: 'تأخر استلام بطاقة CIB أو تعطل الدفع عبر الإنترنت',
          fr: 'Retard de retrait de carte CIB ou échec de paiement en ligne',
        },
        solution: {
          ar: 'راجع حالة البطاقة في وكالتك أو تحقق من تفعيل خيار الدفع الإلكتروني 3D Secure المرتبط برقم هاتفك عبر قسم النقديات.',
          fr: 'Contrôlez la disponibilité de la carte auprès de votre agence et demandez l’activation de l’option 3D Secure sur votre ligne mobile.',
        },
      },
      {
        issue: {
          ar: 'صعوبة العثور على وكالة تحتوي على شباك صيرفة إسلامية',
          fr: 'Localiser un guichet de finance islamique BADR dans votre wilaya',
        },
        solution: {
          ar: 'استعمل محدد مواقع الوكالات badrbank.dz/trouver-une-agence أو اتصل بالرقم 3014 لمعرفة الوكالات المجهزة بشباك الصيرفة الإسلامية.',
          fr: 'Utilisez le localisateur officiel badrbank.dz/trouver-une-agence ou appelez le 3014 pour identifier les agences équipées.',
        },
      },
    ],
    extraFaqs: [],
  },

  'bank-abc': {
    intro: {
      ar: [
        'يعمل بنك المؤسسة العربية المصرفية الجزائر (Bank ABC Algeria) انطلاقا من مقره الرئيسي ببئر مراد رايس بالجزائر العاصمة وبفروعه في مدن استراتيجية مثل وهران وسطيف والشلف وحاسي مسعود، مستندا إلى الخبرة المصرفية الدولية لمجموعة Bank ABC في التمويل والتجارة الخارجية وإدارة السيولة.',
        'يجمع البنك بين الحلول الرقمية الحديثة عبر منصة ABC Digital لإدارة الحسابات والتحويلات والاطلاع الآني على الكشوفات، وبين نافذة رائدة للصيرفة والتمويل الإسلامي تحمل علامة «البراق» (Al-Buraq)، والتي توفر منتجات البراق سكنى للتمويل العقاري، البراق كروسي لتمويل اقتناء السيارات، وحسابات الصكوك والاستثمار الإسلامي.',
        'كما يواكب البنك الشركات والمستثمرين عبر حلول الاعتمادات المستندية، خطابات الضمان، تمويل المشاريع، وبطاقات الدفع المحلية CIB والدولية المصحوبة بتنبيهات الرسائل النصية الفورية.'
      ],
      fr: [
        'Filiale du groupe bancaire international Arab Banking Corporation, Bank ABC Algérie opère depuis son siège de Bir Mourad Raïs à Alger et son réseau d’agences à Oran, Sétif, Chlef et Hassi Messaoud. L’établissement accompagne aussi bien les particuliers que les grandes entreprises et opérateurs du commerce extérieur.',
        'La banque associe les téléservices de la plateforme ABC Digital (suivi de comptes, relevés temps réel et virements) à une offre complète de finance islamique sous la marque Al-Buraq : financement immobilier Al-Buraq Sakani, crédit auto Al-Buraq Karoussi et comptes d’épargne et d’investissement islamiques.',
        'Pour les entreprises, Bank ABC met à disposition des solutions dédiées de gestion de trésorerie (Cash Management), crédits documentaires, lettres de garantie et financements d’investissement.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'استفسار حول شروط قبول ملف البراق سكنى أو البراق كروسي',
          fr: 'Vérifier l’éligibilité aux financements Al-Buraq Sakani ou Karoussi',
        },
        solution: {
          ar: 'تواصل مع مستشاري الوكالة أو أرسل استفسارك إلى contact.algeria@bank-abc.com مع تحديد الدخل الشهري الصافي والولاية.',
          fr: 'Écrivez à contact.algeria@bank-abc.com ou rapprochez-vous d’une agence ABC pour réaliser une étude de capacité de financement.',
        },
      },
      {
        issue: {
          ar: 'تأخر معالجة تحويل بنكي أو اعتماد مستندي للشركات',
          fr: 'Suivi d’une opération de trésorerie ou de commerce extérieur corporate',
        },
        solution: {
          ar: 'راسل الخلية المخصصة لإدارة السيولة للشركات عبر البريد abcalgeriacashmanagementcorpo@bank-abc.com أو اتصل بالرقم 021.98.76.00.',
          fr: 'Contactez la cellule dédiée à abcalgeriacashmanagementcorpo@bank-abc.com ou par téléphone au 021.98.76.00.',
        },
      },
      {
        issue: {
          ar: 'عدم تفعيل إشعارات SMS على العمليات المصرفية',
          fr: 'Non-réception des alertes SMS sur les mouvements de compte',
        },
        solution: {
          ar: 'تحقق في الوكالة من تسجيل رقم هاتفك الصحيح وطلب تفعيل باقة التنبيهات النصية المرتبطة بحسابك أو بطاقتك.',
          fr: 'Faites vérifier votre numéro de mobile en agence et demandez l’activation de l’option d’alertes SMS sur votre compte.',
        },
      },
    ],
    extraFaqs: [],
  },

  bankalgeriane: {
    intro: {
      ar: [
        'يشكل الجهاز المصرفي العمومي في الجزائر العمود الفقري لتمويل الاقتصاد الوطني وتقديم الخدمات البنكية اليومية للملايين من المواطنين والمتعاملين الاقتصاديين. وتعمل البنوك العمومية السبعة تحت الرقابة التنظيمية لبنك الجزائر (البنك المركزي) وإشراف وزارة المالية.',
        'تضم هذه المجموعة سبعة مصارف كبرى لكل منها بصمته التاريخية وتخصصاته: البنك الوطني الجزائري BNA، بنك الجزائر الخارجي BEA، القرض الشعبي الجزائري CPA، بنك الفلاحة والتنمية الريفية BADR، بنك التنمية المحلية BDL، الصندوق الوطني للتوفير والاحتياط CNEP Banque، والبنك الوطني للإسكان BNH.',
        'تسارعت وتيرة الرقمنة داخل جميع البنوك العمومية عبر إطلاق بوابات E-Banking، تطبيقات الهواتف الذكية (BNAtic، BEA Mobile، MyBADR، DIGIT BDL، CNEP Connect، Mobile CPA)، تعميم الدفع بالرمز QR عبر تطبيقات Wimpay، وتوسيع شبابيك الصيرفة الإسلامية عبر الوطن.'
      ],
      fr: [
        'Le réseau des banques publiques constitue l’ossature du système financier algérien et assure le financement de l’économie nationale ainsi que l’accès bancaire de proximité dans les 58 wilayas. L’ensemble de ce secteur opère sous la supervision réglementaire de la Banque d’Algérie et du Ministère des Finances.',
        'Ce pôle regroupe sept institutions majeures : la BNA, la BEA, le CPA, la BADR, la BDL, la CNEP Banque et la Banque Nationale de l’Habitat (BNH), chacune disposant de guichets dédiés aux particuliers, professionnels et grands projets.',
        'Ces dernières années, les banques publiques ont massivement déployé leurs téléservices E-Banking, leurs applications mobiles, le paiement QR instantané Wimpay, les cartes CIB et des fenêtres certifiées de finance islamique.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'الحيرة في اختيار البنك العمومي الأنسب حسب نوع المشروع أو الطلب',
          fr: 'Quelle banque publique choisir selon votre projet ?',
        },
        solution: {
          ar: 'للنشاط الفلاحي يفضل BADR، للتجارة الخارجية BEA، للمقاولات والمهن الحرة CPA أو BDL أو BNA، وللادخار وتمويل السكن CNEP أو BNH.',
          fr: 'Orientez-vous vers la BADR pour l’agriculture, la BEA pour le commerce extérieur, CPA/BDL/BNA pour les PME et professions libérales, et CNEP/BNH pour l’habitat.',
        },
      },
      {
        issue: {
          ar: 'عدم نجاح التحويل بين حساب بنكي عمومي وحساب بريدي CCP',
          fr: 'Rejet d’un virement entre une banque publique et un compte CCP',
        },
        solution: {
          ar: 'تأكد من إدخال رقم RIP المكون من 20 رقما بالكامل مع المفتاح الصحيح دون خلطه برقم الحساب البريدي العادي.',
          fr: 'Saisissez impérativement le numéro RIP complet à 20 chiffres avec sa clé exacte et vérifiez l’orthographe du bénéficiaire.',
        },
      },
      {
        issue: {
          ar: 'طلب التحقق من سعر الصرف الرسمي أو قانونية تعامل مالي',
          fr: 'Vérifier un taux de change officiel ou une instruction de la Banque d’Algérie',
        },
        solution: {
          ar: 'ارجع حصرا إلى النشرات اليومية الرسمية المنشورة في موقع بنك الجزائر bank-of-algeria.dz قبل إجراء التحويلات أو التوطين.',
          fr: 'Référez-vous exclusivement aux publications officielles de la Banque d’Algérie sur bank-of-algeria.dz.',
        },
      },
    ],
    extraFaqs: [],
  },

  banketranger: {
    intro: {
      ar: [
        'ينشط في الجزائر تسعة بنوك خاصة وأجنبية معتمدة من طرف مجلس النقد والقرض وبنك الجزائر، وتسهم في تنويع العرض المصرفي وتحفيز المنافسة في جودة الخدمات الرقمية وتمويل المؤسسات والتجارة الدولية.',
        'تتوزع هذه المصارف بين بنوك تجارية شاملة للأفراد والشركات مثل بنك الخليج الجزائر AGB، سوسيتي جنرال الجزائر SGA، البنك العربي Arab Bank، بنك البركة الجزائري، بنك ABC، وفرنسبنك الجزائر، وبين بنوك مؤسساتية كبرى موجهة بالأساس للشركات متعددة الجنسيات وتمويل التجارة العالمية مثل Citibank وHSBC Algeria وNatixis Algérie.',
        'يجمع هذا الدليل في بطاقة واحدة الروابط الرسمية الموثقة لهذه المؤسسات التسع مع ملخص لتخصصات كل مصرف ومنصاته الرقمية لتمكين المواطن والمستثمر من اختيار الشريك البنكي المناسب.'
      ],
      fr: [
        'Neuf banques privées et filiales de groupes bancaires internationaux agréées par la Banque d’Algérie complètent le paysage financier national en apportant des solutions digitales avancées, des produits participatifs et une expertise internationale.',
        'Ces établissements se répartissent entre banques universelles accessibles aux particuliers et PME (AGB, Société Générale Algérie, Al Baraka, Arab Bank, Bank ABC, Fransabank) et banques d’affaires ou institutionnelles tournées vers les grandes entreprises et le commerce international (Citibank, HSBC Algérie, Natixis Algérie).',
        'Ce répertoire regroupe leurs liens officiels vérifiés et présente leurs plateformes E-Banking (AGB Online, Sogecash Net, Arabi Online, HSBCnet, CitiDirect) afin de faciliter votre orientation.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'الخلط بين البنوك التي تفتح حسابات للأفراد وتلك المخصصة للشركات الكبرى',
          fr: 'Distinguer les banques accessibles aux particuliers des banques uniquement corporate',
        },
        solution: {
          ar: 'توجه إلى AGB أو SGA أو Al Baraka أو Arab Bank أو Fransabank أو ABC لحسابات الأفراد، بينما تقتصر Citibank وHSBC عموما على الشركات الكبرى.',
          fr: 'Adressez-vous à AGB, SGA, Al Baraka, Arab Bank, Fransabank ou ABC pour un compte particulier ; Citibank et HSBC visent les entreprises.',
        },
      },
      {
        issue: {
          ar: 'التحقق من اعتماد أي مؤسسة بنكية أو تمويلية قبل إيداع الأموال',
          fr: 'Vérifier l’agrément officiel d’un établissement financier en Algérie',
        },
        solution: {
          ar: 'راجع دائما سجل البنوك والمؤسسات المالية المعتمدة على البوابة الرسمية لبنك الجزائر bank-of-algeria.dz لتفادي أي جهات غير مرخصة.',
          fr: 'Consultez systématiquement la liste officielle des banques agréées sur bank-of-algeria.dz avant tout dépôt.',
        },
      },
      {
        issue: {
          ar: 'رسوم الصيانة أو شروط الحد الأدنى في الحسابات بالبنوك الخاصة',
          fr: 'Conditions tarifaires et seuils de solde en banque privée',
        },
        solution: {
          ar: 'اطلب جدول الشروط البنكية العام (Conditions Générales de Banque) المنشور سنويا على موقع كل بنك لمقارنة عمولات التحويل والبطاقات الدولية.',
          fr: 'Consultez les plaquettes tarifaires annuelles publiées sur chaque site bancaire officiel pour comparer les frais de tenue de compte et cartes.',
        },
      },
    ],
    extraFaqs: [],
  },

  bdl: {
    intro: {
      ar: [
        'يضطلع بنك التنمية المحلية (Banque de Développement Local - BDL) بدور مركزي في تمويل المشاريع الاستثمارية، المؤسسات الصغيرة والمتوسطة، الجماعات المحلية، والأفراد عبر شبكة وكالات منتشرة في كامل ولايات الجزائر. كما يعد البنك من المؤسسات السباقة في إطلاق الخدمات الرقمية وتحديث بطاقات الدفع.',
        'تجمع المنظومة الرقمية للبنك بين بوابة الويب BDL E-Banking وتطبيق الهاتف الذكي DIGIT BDL المتوفر على أندرويد وآيفون، مما يتيح إدارة الحسابات بالدينار والعملة الصعبة، استخراج كشف الهوية البنكية RIB فوريا، وإجراء التحويلات البنكية، بالإضافة إلى محاكي القروض الإلكتروني لاحتساب الأقساط قبل التوجه إلى الوكالة.',
        'كما يتيح بنك التنمية المحلية نافذة الصيرفة الإسلامية «البديل» التي تشمل المرابحة الاستهلاكية ومرابحة السيارات والعقار والإجارة المنتهية بالتمليك، إلى جانب إصدار بطاقات CIB الوطنية وبطاقات Visa وMastercard الدولية.'
      ],
      fr: [
        'Acteur bancaire public de premier plan, la Banque de Développement Local (BDL) finance les PME/PMI, les collectivités locales, les professions libérales et les particuliers grâce à un vaste réseau d’agences et de distributeurs automatiques dans les 58 wilayas.',
        'Son écosystème digital s’articule autour du portail BDL E-Banking et de l’application mobile DIGIT BDL (Android et iOS), permettant le suivi des comptes DZD/Devises, l’exécution de virements, le téléchargement immédiat du RIB ainsi que la simulation préalable des crédits en ligne.',
        'La BDL déploie également sa fenêtre de finance islamique Al-Badil (Mourabaha consommation, auto et habitat, Ijara Mountahia Bittamlik) et une offre monétique complète regroupant cartes CIB, Visa et Mastercard.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'توقف تسجيل الدخول إلى بوابة BDL E-Banking أو تطبيق DIGIT BDL',
          fr: 'Problème de connexion à BDL E-Banking ou DIGIT BDL',
        },
        solution: {
          ar: 'تأكد من عدم حظر الحساب بسبب تكرار كلمة مرور خاطئة، وتواصل مع خدمة الزبائن على الرقم 3312 أو البريد clientele@bdl.dz لإعادة التفعيل.',
          fr: 'Vérifiez que l’accès n’est pas verrouillé après des essais erronés et contactez le 3312 ou clientele@bdl.dz pour le déblocage.',
        },
      },
      {
        issue: {
          ar: 'اختلاف تقدير محاكي القروض الإلكتروني عن العرض النهائي في الوكالة',
          fr: 'Écart entre la simulation en ligne et l’offre de financement en agence',
        },
        solution: {
          ar: 'يعطي المحاكي تقديرا أوليا للأقساط حسب المدة والمبلغ، بينما تحدد الشروط النهائية بعد دراسة الوثائق الفعلية للدخل والتأمين والضمانات في الوكالة.',
          fr: 'Le simulateur fournit une estimation indicative ; les conditions définitives dépendent de l’étude complète du dossier de revenus et assurances en agence.',
        },
      },
      {
        issue: {
          ar: 'تفعيل بطاقة CIB أو الدولية على مواقع الشراء عبر الإنترنت',
          fr: 'Activer le paiement en ligne sur une carte CIB, Visa ou Mastercard BDL',
        },
        solution: {
          ar: 'راجع شروط كل بطاقة في صفحة bdl.dz/ar/monetique.html واطلب ربط البطاقة برقم هاتفك في الوكالة لتلقي رموز التأكيد OTP.',
          fr: 'Consultez la rubrique bdl.dz/ar/monetique.html et faites associer votre numéro de mobile en agence pour recevoir les codes OTP.',
        },
      },
    ],
    extraFaqs: [],
  },
};
