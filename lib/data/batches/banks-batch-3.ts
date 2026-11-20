import { BankItem, RichGuideContent } from '../../types';

export const batch3Banks: BankItem[] = [
  // 17. fransabank
  {
    id: 'fransabank',
    slug: 'fransabank',
    name: {
      ar: 'فرنسبنك الجزائر (Fransabank El Djazaïr)',
      fr: 'Fransabank El Djazaïr',
    },
    acronym: 'FRANSABANK',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لخدمات فرنسبنك الجزائر (Fransabank El Djazair): منصة الصيرفة الإلكترونية FSBKlic، تطبيق الهاتف الذكي Bank-In-App، خدمة التنبيهات الفورية Khebarni، بطاقات CIB وفيزا Classic وGold الدولية، قروض السكن والسيارات والاستهلاك، وحلول تمويل الشركات والتجارة الدولية.',
      fr: 'Guide complet des services numériques et commerciaux de Fransabank El Djazaïr : portail FSBKlic, application mobile Bank-In-App, alertes SMS Khebarni, cartes CIB et Visa Classic/Gold, crédits immobiliers et consommation, financement PME/entreprises et commerce international.',
    },
    website: 'https://www.fransabank.dz/ar/',
    eBankingUrl: 'https://www.fransabank.dz/ar/',
    swiftCode: 'FSABDZAL',
    headquarters: {
      ar: 'إقامة الصنوبر، عمارة أ، حصة رقم 994، الشراقة، 16014 الجزائر العاصمة',
      fr: 'Résidence des Pins, Bâtiment A, Lot n° 994, Chéraga, 16014 Alger',
    },
    services: [
      {
        ar: 'البوابة الرسمية ومنصة الصيرفة الإلكترونية FSBKlic',
        fr: 'Portail Officiel & E-Banking FSBKlic',
        url: 'https://www.fransabank.dz/ar/',
        summary: {
          ar: 'إدارة الحسابات البنكية عن بعد، الاطلاع الفوري على الأرصدة والكشوفات، وتنفيذ التحويلات المالية المحلية بأمان.',
          fr: 'Accès à distance aux comptes bancaires, consultation en temps réel des soldes/relevés et exécution de virements sécurisés.',
        },
      },
      {
        ar: 'تطبيق Bank-In-App وخدمة الرسائل الفورية Khebarni',
        fr: 'Application Mobile Bank-In-App & Alertes Khebarni',
        url: 'https://www.fransabank.dz/ar/',
        summary: {
          ar: 'متابعة دقيقة لحساباتك من الهاتف الذكي مع إشعارات SMS فورية عند كل عملية سحب، إيداع، أو دفع إلكتروني.',
          fr: 'Suivi mobile fluide de vos opérations associé aux notifications SMS instantanées Khebarni à chaque mouvement de compte.',
        },
      },
      {
        ar: 'بطاقات CIB وVisa الدولية وقروض السكن والسيارات',
        fr: 'Cartes CIB/Visa, Crédits Immobiliers & Consommation',
        url: 'https://www.fransabank.dz/ar/',
        summary: {
          ar: 'بطاقات CIB محلية وVisa Classic وGold دولية، إلى جانب تمويل شراء وبناء السكن، المركبات المجمعة محليا وحسابات الادخار.',
          fr: 'Cartes nationales CIB et internationales Visa Classic/Gold, financement logement, crédit auto/consommation et formules d’épargne.',
        },
      },
      {
        ar: 'تمويل المؤسسات الصغيرة والمتوسطة والتجارة الدولية',
        fr: 'Solutions PME/Entreprises, Cash Management & Commerce Extérieur',
        url: 'https://www.fransabank.dz/ar/',
        summary: {
          ar: 'قروض الاستثمار والاستغلال، التوطين البنكي والاعتمادات المستندية، خطابات الضمان، ودفع الرواتب الجماعي.',
          fr: 'Crédits d’investissement et d’exploitation, domiciliation, crédits documentaires, garanties bancaires et gestion de trésorerie.',
        },
      },
    ],
    contactPhone: '021 48 12 00',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية وحسابات بالعملة الصعبة، حسابات الادخار والاستثمار المرنة، وحسابات المؤسسات الصغيرة والمتوسطة والشركات',
        fr: 'Comptes courants DZD/Devises, comptes d’épargne/placement flexibles et comptes dédiés aux PME et grandes entreprises',
      },
      digitalBanking: {
        ar: 'منصة الويب FSBKlic + تطبيق الهاتف الذكي Bank-In-App + خدمة التنبيهات النصية الفورية Khebarni لحماية كل عملية',
        fr: 'Portail web FSBKlic, application mobile Bank-In-App et service d’alertes SMS en temps réel Khebarni',
      },
      islamicWindow: {
        ar: 'بنك تجاري خاص معتمد يقدم منتجات التمويل السكني والاستهلاكي والادخار وحلول التجارة الخارجية للشركات وفق نظام بنك الجزائر',
        fr: 'Banque commerciale privée agréée offrant crédits habitat/consommation, épargne et solutions corporate/trade finance',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق فتح حساب أفراد في فرنسبنك الجزائر',
          fr: 'Dossier d’ouverture de compte particulier',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية أو جواز السفر، شهادة إقامة حديثة، شهادة ميلاد، وكشف راتب أو سجل تجاري للمهنيين',
          fr: 'CNIBE ou passeport en cours de validité, certificat de résidence, acte de naissance et justificatif de revenus ou registre de commerce',
        },
      },
      {
        label: {
          ar: 'تفعيل منصة FSBKlic وتطبيق Bank-In-App وخدمة Khebarni',
          fr: 'Activation FSBKlic, Bank-In-App & Khebarni',
        },
        value: {
          ar: 'طلب الاشتراك في الباقة الرقمية في الوكالة وربط رقم الهاتف المحمول لتلقي تنبيهات Khebarni وبيانات الدخول الأولية',
          fr: 'Souscription aux services digitaux en agence avec enregistrement du numéro mobile pour recevoir les identifiants et alertes Khebarni',
        },
      },
      {
        label: {
          ar: 'شبكة الوكالات الموزعة عبر الولايات',
          fr: 'Réseau d’agences territoriales',
        },
        value: {
          ar: 'الجزائر العاصمة (الشراقة، باب الزوار، سيدي يحيى، الرويبة)، وهران، قسنطينة، سطيف، البليدة، بجاية، برج بوعريريج، وبسكرة',
          fr: 'Alger (Chéraga, Bab Ezzouar, Sidi Yahia, Rouïba), Oran, Constantine, Sétif, Blida, Béjaïa, Bordj Bou Arréridj et Biskra',
        },
      },
      {
        label: {
          ar: 'المقر الرئيسي ورمز السويفت والاتصال',
          fr: 'Siège social, SWIFT & contact client',
        },
        value: {
          ar: 'إقامة الصنوبر، عمارة أ، حصة 994، الشراقة 16014 الجزائر — الهاتف 021 48 12 00 — رمز السويفت FSABDZAL',
          fr: 'Résidence des Pins, Bât. A, Lot 994, Chéraga 16014 Alger — Tél : 021 48 12 00 — Code SWIFT : FSABDZAL',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي الخدمات الرقمية التي تشملها باقة فرنسبنك الجزائر؟',
          fr: 'Quels sont les services digitaux de Fransabank El Djazaïr ?',
        },
        answer: {
          ar: 'تضم الباقة بوابة الصيرفة الإلكترونية FSBKlic لإدارة الحسابات والتحويلات عبر الويب، تطبيق الهاتف Bank-In-App للمتابعة اللحظية، وخدمة الرسائل الفورية Khebarni للتنبيه عند كل عملية مالية.',
          fr: 'L’offre digitale réunit le portail web FSBKlic pour la gestion et les virements, l’application mobile Bank-In-App et les notifications SMS instantanées Khebarni.',
        },
      },
      {
        question: {
          ar: 'ما أنواع البطاقات البنكية المتاحة في فرنسبنك الجزائر؟',
          fr: 'Quelles cartes bancaires propose Fransabank El Djazaïr ?',
        },
        answer: {
          ar: 'يوفر البنك بطاقات CIB الوطنية للسحب والدفع عبر أجهزة TPE والمواقع المحلية، وبطاقات Visa Classic وVisa Gold الدولية المقبولة عالميا للسفر والتسوق عبر الإنترنت.',
          fr: 'La banque délivre la carte CIB pour le réseau national ainsi que les cartes internationales Visa Classic et Visa Gold pour vos déplacements et achats à l’étranger.',
        },
      },
      {
        question: {
          ar: 'هل يمنح فرنسبنك الجزائر قروضا للسكن واقتناء السيارات؟',
          fr: 'Fransabank propose-t-il des crédits immobiliers et consommation ?',
        },
        answer: {
          ar: 'نعم، يوفر البنك قروضا عقارية لشراء أو بناء أو تهيئة السكنات بنسب تنافسية وخطط سداد طويلة المدى، إضافة إلى قروض استهلاكية لتمويل المركبات المجمعة محليا والتجهيزات المنزلية.',
          fr: 'Oui, Fransabank propose des crédits habitat (achat, construction, aménagement) et des financements à la consommation pour véhicules assemblés localement et équipements.',
        },
      },
      {
        question: {
          ar: 'في أي ولايات توجد وكالات فرنسبنك الجزائر؟',
          fr: 'Dans quelles wilayas se trouvent les agences Fransabank ?',
        },
        answer: {
          ar: 'تنتشر وكالات البنك في الجزائر العاصمة (الشراقة، باب الزوار، سيدي يحيى، الرويبة)، وكذلك في وهران، قسنطينة، سطيف، البليدة، بجاية، برج بوعريريج، وبسكرة.',
          fr: 'Le réseau couvre Alger (Chéraga, Bab Ezzouar, Sidi Yahia, Rouïba), Oran, Constantine, Sétif, Blida, Béjaïa, Bordj Bou Arréridj et Biskra.',
        },
      },
    ],
  },

  // 18. societegenerale
  {
    id: 'societegenerale',
    slug: 'societegenerale',
    name: {
      ar: 'بنك سوسيتي جنرال الجزائر (Société Générale Algérie - SGA)',
      fr: 'Société Générale Algérie (SGA)',
    },
    acronym: 'SGA',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لبنك سوسيتي جنرال الجزائر SGA: تطبيق الصيرفة الذكية APPLI SGA، منصة الشركات Sogecash Net المزودة بالمصادقة الآمنة Access Secure، بطاقات CIB وفيزا اللاتلامسية، حسابات التوفير Tawfiri Classique وTawfiri Logement، الإيجار المالي Leasing، ومركز الاتصال 3331.',
      fr: 'Guide complet de Société Générale Algérie (SGA) : application mobile APPLI SGA, portail entreprises Sogecash Net avec authentification Access Secure, cartes CIB et Visa sans contact, comptes épargne Tawfiri Classique & Logement, crédit-bail Leasing et centre d’appels 3331.',
    },
    website: 'https://societegenerale.dz/fr/',
    eBankingUrl: 'https://societegenerale.dz/fr/',
    swiftCode: 'SOGEDZAL',
    headquarters: {
      ar: 'حي الأعمال، باب الزوار، 16024 الجزائر العاصمة',
      fr: 'Quartier d’Affaires, Bab Ezzouar, 16024 Alger',
    },
    services: [
      {
        ar: 'البوابة الرسمية وتطبيق الصيرفة الذكية APPLI SGA',
        fr: 'Portail Officiel & Application APPLI SGA',
        url: 'https://societegenerale.dz/fr/',
        summary: {
          ar: 'إدارة حسابات الأفراد على مدار 24 ساعة، متابعة الأرصدة اللحظية، التحويلات، طلب القروض والتحكم في البطاقات.',
          fr: 'Gestion 24h/24 des comptes particuliers, consultation temps réel des soldes, virements et pilotage des cartes CIB et Visa.',
        },
      },
      {
        ar: 'منصة الشركات Sogecash Net والمصادقة Access Secure',
        fr: 'Portail Entreprises Sogecash Net & Access Secure',
        url: 'https://societegenerale.dz/fr/',
        summary: {
          ar: 'الحل الرقمي للشركات لإدارة الحسابات، التحويلات الجماعية، دفع الرواتب والأوامر المالية بأعلى معايير الأمان.',
          fr: 'Solution corporate intégrée pour virements de masse, paiement de salaires et validation sécurisée par Access Secure.',
        },
      },
      {
        ar: 'حسابات التوفير Tawfiri وتمويل المشاريع والإيجار المالي Leasing',
        fr: 'Épargne Tawfiri, Crédits & Leasing Financier',
        url: 'https://societegenerale.dz/fr/',
        summary: {
          ar: 'حسابات Tawfiri Classique وTawfiri Logement، قروض استهلاك، تمويل مشاريع حتى 100%، وإيجار مالي للمركبات والعتاد الصناعي.',
          fr: 'Comptes Tawfiri Classique/Logement, crédits à la consommation, financement de projets et crédit-bail (Leasing) équipements.',
        },
      },
      {
        ar: 'بطاقات CIB وفيزا اللاتلامسية وحجز المواعيد والوكالات',
        fr: 'Cartes CIB/Visa Sans Contact & Réseau d’Agences',
        url: 'https://societegenerale.dz/fr/',
        summary: {
          ar: 'بطاقات CIB محلية وVisa دولية لاتلامسية، إشعارات فورية، وتحديد أقرب فرع أو صراف آلي وحجز موعد مع المستشار.',
          fr: 'Cartes CIB et Visa internationales sans contact, alertes instantanées, localisateur d’agences/GAB et prise de rendez-vous.',
        },
      },
    ],
    contactPhone: '3331 / +213 21 45 11 55',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية بالدينار والعملة الصعبة، حسابات التوفير Tawfiri Classique وTawfiri Logement، وحسابات الشركات والمستثمرين',
        fr: 'Comptes courants DZD/Devises, livrets d’épargne Tawfiri Classique & Logement et comptes entreprises/professionnels',
      },
      digitalBanking: {
        ar: 'تطبيق الهاتف الذكي APPLI SGA للأفراد + بوابة Sogecash Net للشركات مع المصادقة الآمنة Access Secure + إشعارات فورية',
        fr: 'Application APPLI SGA pour particuliers + portail corporate Sogecash Net sécurisé par Access Secure + alertes instantanées',
      },
      islamicWindow: {
        ar: 'بنك تجاري خاص عالمي مرخص في الجزائر يقدم حلول التمويل السكني والاستهلاكي والإيجار المالي Leasing والتجارة الدولية',
        fr: 'Banque commerciale privée offrant financements particuliers/projets, crédit-bail Leasing et solutions de commerce extérieur',
      },
    },
    requirements: [
      {
        label: {
          ar: 'ملف فتح حساب أفراد في سوسيتي جنرال الجزائر',
          fr: 'Ouverture de compte particulier SGA',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية أو جواز سفر ساري، شهادة إقامة حديثة، إثبات دخل (شهادة عمل وكشف راتب أو سجل تجاري)، وحجز موعد بالوكالة',
          fr: 'CNIBE ou passeport valide, certificat de résidence récent, justificatif de revenus/activité et prise de rendez-vous en agence',
        },
      },
      {
        label: {
          ar: 'تفعيل تطبيق APPLI SGA أو منصة Sogecash Net للشركات',
          fr: 'Activation APPLI SGA & Sogecash Net',
        },
        value: {
          ar: 'الاشتراك المجاني عبر مستشار الوكالة لتفعيل APPLI SGA للأفراد، وتعيين مفوضي Access Secure لعقود الشركات في Sogecash Net',
          fr: 'Adhésion auprès de votre conseiller pour APPLI SGA, et configuration des habilitations Access Secure pour Sogecash Net entreprises',
        },
      },
      {
        label: {
          ar: 'تمويل الإيجار المالي Leasing وتمويل المشاريع',
          fr: 'Crédit-bail Leasing & financement professionnel',
        },
        value: {
          ar: 'ملف الشركة القانوني، الحصيلة الجبائية والبيانات المالية، وفاتورة أولية للمركبة أو المعدات الصناعية المطلوب تمويلها',
          fr: 'Dossier juridique de la société, bilans comptables/fiscaux et facture proforma du véhicule ou matériel industriel',
        },
      },
      {
        label: {
          ar: 'مركز الاتصال متعدد الوسائط 3331 والخط الدولي',
          fr: 'Centre de relation client 3331 & ligne internationale',
        },
        value: {
          ar: 'الرقم 3331 من داخل الجزائر (7/7 من 08:30 إلى 20:30) — الخط الدولي +213 21 45 11 55 — المقر بباب الزوار 16024',
          fr: '3331 depuis l’Algérie (7j/7 de 08h30 à 20h30) — Ligne internationale +213 21 45 11 55 — Siège Bab Ezzouar 16024',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين تطبيق APPLI SGA ومنصة Sogecash Net في بنك سوسيتي جنرال؟',
          fr: 'Quelle différence entre APPLI SGA et Sogecash Net ?',
        },
        answer: {
          ar: 'APPLI SGA هو تطبيق الهاتف الذكي الموجه للأفراد لإدارة الحسابات والتحويلات وبطاقات CIB وفيزا، بينما تعد Sogecash Net منصة رقمية متكاملة للشركات تدعم التحويلات الجماعية ودفع الرواتب مع مصادقة Access Secure.',
          fr: 'APPLI SGA est l’application mobile destinée aux particuliers pour la gestion quotidienne et les cartes, tandis que Sogecash Net est le portail entreprises dédié aux virements de masse et salaires sous Access Secure.',
        },
      },
      {
        question: {
          ar: 'ما هي حسابات التوفير Tawfiri المتوفرة في سوسيتي جنرال الجزائر؟',
          fr: 'Que proposent les comptes d’épargne Tawfiri chez SGA ?',
        },
        answer: {
          ar: 'يقدم البنك صيغتي Tawfiri Classique للادخار العام بمردود سنوي وتوفر مرونة السحب، وTawfiri Logement المخصص لبناء ادخار سكن مع تسهيلات مستقبلية للتمويل العقاري.',
          fr: 'SGA propose Tawfiri Classique pour l’épargne rémunérée disponible à tout moment, et Tawfiri Logement conçu pour constituer un apport en vue d’un financement immobilier.',
        },
      },
      {
        question: {
          ar: 'هل يوفر سوسيتي جنرال الجزائر خدمة الإيجار المالي Leasing والبطاقات اللاتلامسية؟',
          fr: 'SGA propose-t-il le Leasing et les cartes sans contact ?',
        },
        answer: {
          ar: 'نعم، يوفر البنك حلول الإيجار المالي لتمويل المركبات والعتاد الصناعي للمؤسسات، كما يصدر بطاقات CIB الوطنية وبطاقات Visa الدولية المجهزة بتقنية الدفع اللاتلامسي.',
          fr: 'Oui, SGA offre des solutions de crédit-bail Leasing pour véhicules et équipements professionnels, ainsi que des cartes CIB et Visa internationales équipées du paiement sans contact.',
        },
      },
      {
        question: {
          ar: 'ما هي أوقات عمل مركز الاتصال 3331 وما رقم الجالية بالخارج؟',
          fr: 'Quels sont les horaires du 3331 et le numéro depuis l’étranger ?',
        },
        answer: {
          ar: 'يعمل مركز خدمة الزبائن على الرقم 3331 طيلة أيام الأسبوع (7/7) من الساعة 08:30 صباحا إلى 20:30 مساء، وللمقيمين بالخارج يتوفر الخط المباشر +213 (0) 21 45 11 55.',
          fr: 'Le centre d’appels 3331 est joignable 7j/7 de 08h30 à 20h30 depuis l’Algérie, et via le +213 (0) 21 45 11 55 depuis l’étranger.',
        },
      },
    ],
  },
];

export const batch3BankGuides: Record<string, Partial<RichGuideContent>> = {
  fransabank: {
    intro: {
      ar: [
        'يعمل فرنسبنك الجزائر (Fransabank El Djazaïr) انطلاقا من مقره الرئيسي بإقامة الصنوبر بالشراقة في الجزائر العاصمة وبشبكة وكالات تغطي ولايات رئيسية مثل الجزائر العاصمة ووهران وقسنطينة وسطيف والبليدة وبجاية وبرج بوعريريج وبسكرة، مقدما باقة مصرفية تجمع بين خدمات الأفراد وحلول تمويل الشركات.',
        'على الصعيد الرقمي، يعتمد البنك على ثلاث ركائز أساسية: بوابة الصيرفة الإلكترونية FSBKlic لإدارة الحسابات والتحويلات عبر الإنترنت، تطبيق الهاتف الذكي Bank-In-App لمتابعة الحركات المصرفية في أي وقت، وخدمة Khebarni لإرسال تنبيهات نصية فورية عند كل سحب أو إيداع أو دفع.',
        'كما يتيح فرنسبنك الجزائر بطاقات CIB الوطنية وبطاقات Visa Classic وVisa Gold الدولية، إضافة إلى قروض السكن والقروض الاستهلاكية لتمويل المركبات المجمعة محليا وحلول التجارة الخارجية وإدارة السيولة للمؤسسات الصغيرة والمتوسطة.'
      ],
      fr: [
        'Implantée à la Résidence des Pins à Chéraga (Alger) avec des agences à Alger, Oran, Constantine, Sétif, Blida, Béjaïa, Bordj Bou Arréridj et Biskra, Fransabank El Djazaïr combine proximité bancaire pour les particuliers et accompagnement structuré des PME et entreprises.',
        'Son dispositif digital repose sur le portail FSBKlic pour la banque à distance, l’application mobile Bank-In-App pour le suivi quotidien sur smartphone et le service d’alertes SMS Khebarni signalant chaque opération en temps réel.',
        'L’établissement propose également les cartes CIB et Visa Classic/Gold, les crédits immobiliers et à la consommation ainsi qu’une gamme complète d’outils de commerce extérieur (domiciliation, crédits documentaires, garanties bancaires) et de cash management.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم وصول رسائل التنبيه النصية Khebarni عند استخدام البطاقة أو الحساب',
          fr: 'Non-réception des alertes SMS Khebarni',
        },
        solution: {
          ar: 'تأكد في وكالتك من تسجيل رقم هاتفك الفعلي في خدمة Khebarni والتحقق من صلاحية شريحة الهاتف في تغطية الشبكة.',
          fr: 'Vérifiez auprès de votre agence Fransabank que votre numéro de mobile actuel est bien rattaché à l’abonnement Khebarni.',
        },
      },
      {
        issue: {
          ar: 'تعذر الولوج إلى بوابة FSBKlic أو تطبيق Bank-In-App',
          fr: 'Problème de connexion à FSBKlic ou Bank-In-App',
        },
        solution: {
          ar: 'راجع حالة كلمة المرور المؤقتة مع مكلف الزبائن في الوكالة أو اتصل بالإدارة العامة على الرقم 021 48 12 00 لإعادة التفعيل.',
          fr: 'Sollicitez votre chargé de clientèle en agence ou appelez le standard au 021 48 12 00 pour réinitialiser votre accès digital.',
        },
      },
      {
        issue: {
          ar: 'رفض بطاقة Visa Classic أو Gold عند الدفع على موقع أجنبي',
          fr: 'Refus d’une carte Visa Classic ou Gold lors d’un paiement international',
        },
        solution: {
          ar: 'تحقق من كفاية الرصيد بالعملة الصعبة ومن تفعيل خيار الشراء عبر الإنترنت والحد الأقصى الأسبوعي للبطاقة لدى وكالتك.',
          fr: 'Contrôlez la provision de votre compte devises ainsi que l’activation du e-paiement international et le plafond de la carte.',
        },
      },
    ],
    extraFaqs: [],
  },

  societegenerale: {
    intro: {
      ar: [
        'يعد بنك سوسيتي جنرال الجزائر (Société Générale Algérie - SGA) من أكبر البنوك الخاصة والأجنبية المعتمدة في البلاد انطلاقا من مقره الرئيسي بحي الأعمال في باب الزوار بالجزائر العاصمة وشبكة فروعه المنتشرة عبر مختلف الولايات، حيث يجمع بين خدمات الأفراد المتطورة وتمويل الشركات والاستثمار.',
        'تبرز المنظومة الرقمية للبنك من خلال تطبيق الهاتف الذكي APPLI SGA الذي يمنح الأفراد تحكما كاملا في الحسابات والتحويلات وطلب القروض وإدارة بطاقات CIB وفيزا اللاتلامسية، بينما تعتمد الشركات على منصة Sogecash Net المزودة بنظام المصادقة الآمنة Access Secure لإجراء التحويلات الجماعية ودفع الرواتب.',
        'كما يوفر البنك منتجات ادخار متخصصة مثل Tawfiri Classique وTawfiri Logement، وحلول الإيجار المالي Leasing لتمويل المركبات والمعدات الصناعية، مدعومة بمركز اتصال متعدد الوسائط يعمل 7/7 على الرقم 3331.'
      ],
      fr: [
        'Acteur majeur de la banque privée en Algérie depuis son siège du Quartier d’Affaires de Bab Ezzouar à Alger et son réseau national d’agences, Société Générale Algérie (SGA) propose une offre complète dédiée aux particuliers, professionnels et grandes entreprises.',
        'Son dispositif numérique s’articule autour d’APPLI SGA pour les particuliers (suivi temps réel, virements, demandes de crédit et gestion des cartes sans contact) et du portail Sogecash Net sécurisé par Access Secure pour les entreprises et paiements de masse.',
        'SGA se distingue également par ses formules d’épargne Tawfiri Classique et Tawfiri Logement, ses solutions de crédit-bail (Leasing) de véhicules et équipements industriels, et son centre relation client 3331 ouvert 7 jours sur 7.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'توقف مصادقة Access Secure عند اعتماد تحويل على منصة Sogecash Net',
          fr: 'Échec de validation Access Secure sur Sogecash Net',
        },
        solution: {
          ar: 'تأكد من مزامنة وقت الجهاز وتحديث تطبيق الأمان أو تواصل مع مستشار الشركات ومركز الدعم على الرقم 3331.',
          fr: 'Vérifiez la synchronisation horaire de votre appareil ou contactez votre conseiller entreprise / le support au 3331.',
        },
      },
      {
        issue: {
          ar: 'حاجة المقيم بالخارج للتواصل المباشر مع دعم سوسيتي جنرال الجزائر',
          fr: 'Contacter le support SGA depuis l’étranger',
        },
        solution: {
          ar: 'اتصل بالخط الدولي المباشر +213 (0) 21 45 11 55 أو احجز موعدا عبر الموقع الرسمي societegenerale.dz/fr.',
          fr: 'Composez le numéro international dédié +213 (0) 21 45 11 55 ou planifiez un rendez-vous depuis societegenerale.dz/fr.',
        },
      },
      {
        issue: {
          ar: 'تعطل الدفع اللاتلامسي أو الشراء عبر الإنترنت ببطاقة CIB أو Visa من SGA',
          fr: 'Paiement sans contact ou en ligne refusé sur carte CIB / Visa SGA',
        },
        solution: {
          ar: 'راجع إعدادات السقف وتفعيل الدفع الإلكتروني من داخل تطبيق APPLI SGA أو اتصل بالرقم 3331 طيلة أيام الأسبوع حتى 20:30.',
          fr: 'Vérifiez les plafonds et l’activation du e-paiement dans APPLI SGA ou appelez le 3331 (7j/7 de 08h30 à 20h30).',
        },
      },
    ],
    extraFaqs: [],
  },
};
