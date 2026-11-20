import { SectorItem, RichGuideContent } from '../../types';

export const batch9Sectors: SectorItem[] = [
  // 65. tabioucom
  {
    id: 'tabioucom',
    slug: 'tabioucom',
    category: 'finance_economy',
    name: {
      ar: 'منصة طابعكم لاقتناء الطوابع الجبائية إلكترونيا (Tabioucom)',
      fr: 'Plateforme Tabioucom — Timbre Fiscal Électronique (DGI)',
    },
    acronym: 'TABIOUCOM',
    ministry: {
      ar: 'وزارة المالية — المديرية العامة للضرائب (DGI)',
      fr: 'Ministère des Finances — Direction Générale des Impôts (DGI)',
    },
    description: {
      ar: 'البوابة الرسمية لوزارة المالية والمديرية العامة للضرائب لاقتناء حقوق الطابع الجبائي إلكترونيا في الجزائر: جواز السفر البيومتري، بطاقة التعريف الوطنية، رخصة السياقة، عقود النقل والسفر، إعادة إصدار الطابع، فضاء التوثيق والمصادقة للإدارات، وخدمة الدعم الإلكتروني.',
      fr: 'Portail officiel de la Direction Générale des Impôts (Ministère des Finances) dédié à l’achat et à la réédition du timbre fiscal électronique en Algérie : passeport biométrique, CNIBE, permis de conduire, contrats de transport, espace d’authentification administrative et assistance technique.',
    },
    officialUrl: 'https://tabioucom.mf.gov.dz/accueil',
    portalUrl: 'https://tabioucom.mf.gov.dz/acheter',
    iconName: 'FileCheck',
    isPopular: true,
    services: [
      {
        id: 'tabioucom-srv-1',
        title: {
          ar: 'الصفحة الرئيسية لبوابة طابعكم الرسمية',
          fr: 'Accueil Officiel du Portail Tabioucom (DGI)',
        },
        description: {
          ar: 'الواجهة الرسمية لمنصة طابعكم للتعرف على التعريفات الجبائية، أنواع الطوابع المتاحة، والإرشادات القانونية.',
          fr: 'Interface d’accueil de Tabioucom présentant la nomenclature des timbres électroniques, tarifs officiels et guides usagers.',
        },
        url: 'https://tabioucom.mf.gov.dz/accueil',
        isOnline: true,
      },
      {
        id: 'tabioucom-srv-2',
        title: {
          ar: 'اقتناء الطابع الجبائي الإلكتروني الآن',
          fr: 'Acheter un Timbre Fiscal Électronique en Ligne',
        },
        description: {
          ar: 'طلب ودفع الطابع الجبائي الخاص بجواز السفر، بطاقة التعريف الوطنية، رخصة السياقة، وعقود النقل عبر البطاقة الذهبية أو CIB.',
          fr: 'Souscription et règlement en ligne des timbres fiscaux pour passeport, carte d’identité, permis de conduire et titres de voyage.',
        },
        url: 'https://tabioucom.mf.gov.dz/acheter',
        isOnline: true,
      },
      {
        id: 'tabioucom-srv-3',
        title: {
          ar: 'إعادة اقتناء وإصدار وصل الطابع الجبائي',
          fr: 'Réédition et Reprise d’un Timbre Fiscal Électronique',
        },
        description: {
          ar: 'استرجاع أو إعادة تحميل وطباعة وصل الطابع الجبائي المقتنى مسبقا في حال ضياع الوثيقة أو عدم طباعتها.',
          fr: 'Réédition du récépissé de timbre fiscal déjà réglé en cas de perte du justificatif PDF ou d’incident d’impression.',
        },
        url: 'https://tabioucom.mf.gov.dz/edit',
        isOnline: true,
      },
      {
        id: 'tabioucom-srv-4',
        title: {
          ar: 'فضاء التوثيق والمصادقة على الطابع الجبائي',
          fr: 'Espace d’Authentification et de Validation des Timbres',
        },
        description: {
          ar: 'بوابة الدخول المخصصة لأعوان البلديات، الدوائر، والمؤسسات المخولة للتحقق من صلاحية الطابع واستهلاكه إلكترونيا.',
          fr: 'Portail réservé aux agents administratifs habilités (APC, daïras, institutions) pour vérifier et consommer les timbres.',
        },
        url: 'https://tabioucom.mf.gov.dz/login',
        isOnline: true,
      },
      {
        id: 'tabioucom-srv-5',
        title: {
          ar: 'التواصل مع فريق عمل طابعكم عبر البريد الإلكتروني',
          fr: 'Assistance et Contact de l’Équipe Tabioucom',
        },
        description: {
          ar: 'إرسال استفسار أو بلاغ تقني إلى الدعم المختص بالمديرية العامة للضرائب عند مواجهة تعثر في الدفع أو التحقق.',
          fr: 'Formulaire de support technique pour joindre les équipes de la DGI en cas de blocage de paiement ou de validation.',
        },
        url: 'https://tabioucom.mf.gov.dz/contact',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون الجزائريون الراغبون في استخراج الوثائق البيومترية وعقود النقل والسفر والموظفون الموثقون',
        fr: 'Citoyens algériens préparant des dossiers biométriques ou titres de transport, et agents administratifs habilités',
      },
      processingTime: {
        ar: 'فوري ومباشر عقب تأكيد الدفع الإلكتروني مع إصدار وصل رقمي بصيغة PDF',
        fr: 'Délivrance instantanée du récépissé numérique PDF dès validation du paiement électronique',
      },
      fees: {
        ar: 'التسعيرة الجبائية القانونية المقررة لكل نوع طابع دون أي رسوم إضافية على الدفع الإلكتروني',
        fr: 'Tarif fiscal réglementaire propre à chaque démarche sans majoration ni commission supplémentaire',
      },
      channel: {
        ar: 'بوابة tabioucom.mf.gov.dz على مدار الساعة مع الدفع بالبطاقة الذهبية أو CIB',
        fr: 'Portail tabioucom.mf.gov.dz accessible 24h/24 avec règlement par carte Edahabia ou CIB',
      },
      keyRequirement: {
        ar: 'رقم التعريف الوطني NIN، رقم هاتف نشط، وبطاقة دفع إلكتروني صالحة (الذهبية أو CIB)',
        fr: 'NIN à 18 chiffres, numéro de mobile actif et carte de paiement électronique valide (Edahabia ou CIB)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'أنواع الطوابع المتاحة على المنصة',
          fr: 'Catégories de timbres disponibles',
        },
        value: {
          ar: 'طابع جواز السفر البيومتري (28 أو 48 صفحة)، بطاقة التعريف الوطنية (عند الضياع أو التلف)، رخصة السياقة، وعقود النقل والسفر',
          fr: 'Passeport biométrique (28 ou 48 pages), CNIBE (renouvellement après perte/détérioration), permis de conduire et titres de transport',
        },
      },
      {
        label: {
          ar: 'البيانات المطلوبة في الاستمارة',
          fr: 'Informations exigées lors de l’achat',
        },
        value: {
          ar: 'الولاية، البلدية أو المصلحة المعنية، نوع الوثيقة، رقم التعريف الوطني NIN، البريد الإلكتروني، ورقم الهاتف',
          fr: 'Wilaya, commune/service destinataire, nature du document, NIN, adresse e-mail et téléphone portable',
        },
      },
      {
        label: {
          ar: 'وسائل التسديد المقبولة',
          fr: 'Moyens de paiement acceptés',
        },
        value: {
          ar: 'البطاقة النقدية الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB مفعلة بخدمة رمز التحقق OTP',
          fr: 'Carte Edahabia d’Algérie Poste ou carte interbancaire CIB activée pour le e-paiement sécurisé',
        },
      },
      {
        label: {
          ar: 'أداة التحقق في الإدارة',
          fr: 'Vérification au guichet',
        },
        value: {
          ar: 'وصل الطابع الإلكتروني الحامل للرمز المرجعي ورمز الاستجابة السريعة QR Code لإيداعه بالبلدية أو الدائرة',
          fr: 'Récépissé PDF comportant le numéro de référence unique et le code QR présenté au guichet administratif',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يغني الطابع الجبائي الإلكتروني في طابعكم عن شراء الطابع الورقي من قباضة الضرائب؟',
          fr: 'Le timbre fiscal électronique Tabioucom remplace-t-il le timbre papier de la recette des impôts ?',
        },
        answer: {
          ar: 'نعم، يعد الطابع الجبائي الإلكتروني الصادر عبر منصة tabioucom.mf.gov.dz معادلا قانونيا بالكامل للطابع الورقي ومعتمدا لدى جميع البلديات، الدوائر، ومصالح وزارة الداخلية والنقل.',
          fr: 'Oui, le timbre électronique délivré sur tabioucom.mf.gov.dz possède la même valeur légale que le timbre papier et est directement accepté par toutes les APC, daïras et administrations concernées.',
        },
      },
      {
        question: {
          ar: 'كيف أسترجع وصل الطابع الجبائي إذا أغلقت المتصفح قبل تحميل ملف PDF؟',
          fr: 'Comment récupérer mon reçu si le navigateur s’est fermé avant le téléchargement du PDF ?',
        },
        answer: {
          ar: 'توجه إلى صفحة إعادة الاقتناء على الرابط tabioucom.mf.gov.dz/edit وأدخل رقم المعاملة أو المرجع المسجل في وصل الدفع البنكي أو البريد الإلكتروني لإعادة تنزيل الطابع.',
          fr: 'Accédez à la rubrique tabioucom.mf.gov.dz/edit et saisissez votre référence de transaction ou numéro de reçu pour régénérer et télécharger le justificatif PDF.',
        },
      },
      {
        question: {
          ar: 'ما مدة صلاحية الطابع الجبائي المقتنى عبر الإنترنت؟',
          fr: 'Quelle est la durée de validité d’un timbre électronique acheté en ligne ?',
        },
        answer: {
          ar: 'يبقى الطابع الجبائي الإلكتروني صالحا للاستعمال في ملفك الإداري حتى يتم استهلاكه والتحقق منه إلكترونيا من طرف العون المختص عبر فضاء التوثيق والمصادقة.',
          fr: 'Le timbre reste valide tant qu’il n’a pas été utilisé et validé électroniquement par l’agent administratif lors du dépôt de votre dossier.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني شراء طابع جواز سفر لشخص آخر ببطاقتي الذهبية؟',
          fr: 'Puis-je acheter un timbre fiscal pour un proche avec ma propre carte Edahabia ou CIB ?',
        },
        answer: {
          ar: 'نعم، يمكن استعمال بطاقتك البنكية أو الذهبية لدفع طابع أحد أفراد العائلة، بشرط إدخال البيانات الشخصية ورقم التعريف الوطني الصحيح لصاحب الطلب المعني بالوثيقة.',
          fr: 'Oui, il est possible de régler avec votre carte pour un membre de votre famille, à condition de saisir exactement l’identité et le NIN du bénéficiaire final de la démarche.',
        },
      },
    ],
  },

  // 66. telephon
  {
    id: 'telephon',
    slug: 'telephon',
    category: 'telecom',
    name: {
      ar: 'خدمات الهاتف النقال في الجزائر — موبيليس وجازي وأوريدو',
      fr: 'Téléphonie Mobile en Algérie — Mobilis, Djezzy & Ooredoo',
    },
    acronym: 'TELECOM',
    ministry: {
      ar: 'متعاملو الهاتف النقال الوطنيون (القطاع الاتصالي)',
      fr: 'Opérateurs Nationaux de Téléphonie Mobile',
    },
    description: {
      ar: 'الدليل الجامع لخدمات متعاملي الهاتف النقال في الجزائر (موبيليس، جازي، وأوريدو): الشحن الإلكتروني للرصيد، دفع الفواتير الشهرية بالبطاقة الذهبية وCIB، تطبيقات خدمة الزبائن الرسمية، وتأمين الخطوط عبر خدمة التبليغ عن الرسائل الاحتيالية.',
      fr: 'Portail centralisé des services numériques des trois opérateurs mobiles algériens (Mobilis, Djezzy et Ooredoo) : rechargement en ligne par carte Edahabia/CIB, règlement des factures postpayées, applications officielles de suivi de consommation et signalement des SMS frauduleux.',
    },
    officialUrl: 'https://www.mobilis.dz/',
    portalUrl: 'https://e-paiement.mobilis.dz/',
    iconName: 'Smartphone',
    isPopular: false,
    services: [
      {
        id: 'telephon-srv-1',
        title: {
          ar: 'خدمات متعامل الهاتف النقال — موبيليس (الموقع الرسمي)',
          fr: 'Opérateur Mobilis — Portail Officiel & Offres',
        },
        description: {
          ar: 'استعراض عروض الدفع المسبق والبعدي، تغطية الجيل الرابع، والخدمات الرقمية لمؤسسة اتصالات الجزائر للهاتف النقال موبيليس.',
          fr: 'Accès aux offres prépayées et postpayées, couverture 4G et services clients d’ATM Mobilis.',
        },
        url: 'https://www.mobilis.dz/',
        isOnline: true,
      },
      {
        id: 'telephon-srv-2',
        title: {
          ar: 'موبيليس — تعبئة الرصيد ودفع الفواتير إلكترونيا',
          fr: 'Mobilis — Rechargement & Paiement en Ligne (E-Arselli)',
        },
        description: {
          ar: 'شحن رصيد أرسلي وتسديد فواتير خطوط الدفع البعدي لموبيليس مباشرة عبر البطاقة الذهبية أو CIB.',
          fr: 'Rechargement immédiat du crédit Arselli et règlement des factures Mobilis par carte Edahabia ou CIB.',
        },
        url: 'https://e-paiement.mobilis.dz/',
        isOnline: true,
      },
      {
        id: 'telephon-srv-3',
        title: {
          ar: 'موبيليس — التبليغ عن الرسائل النصية الاحتيالية',
          fr: 'Mobilis — Signaler un SMS Frauduleux (Anti-Phishing)',
        },
        description: {
          ar: 'بوابة الحماية للتبليغ الفوري عن أرقام ورسائل التصيد الاحتيالي المنتحلة لهوية المتعاملين أو البنوك.',
          fr: 'Guichet officiel permettant de déclarer les SMS suspects et tentatives d’hameçonnage.',
        },
        url: 'https://mobilis.dz/smsfraude',
        isOnline: true,
      },
      {
        id: 'telephon-srv-4',
        title: {
          ar: 'موبيليس — تطبيق خدمة الزبائن Mobilis Care',
          fr: 'Mobilis — Application Client Mobilis Care (Android)',
        },
        description: {
          ar: 'إدارة رصيد الإنترنت والمكالمات، تفعيل باقات Mobtasim وSama، وحل الإشكالات التقنية عبر الهاتف.',
          fr: 'Gestion des forfaits data et voix, suivi de consommation et assistance via smartphone.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.mobilis.mcare',
        isOnline: true,
      },
      {
        id: 'telephon-srv-5',
        title: {
          ar: 'خدمات متعامل الهاتف النقال — جازي (الموقع الرسمي)',
          fr: 'Opérateur Djezzy — Portail Officiel & Services',
        },
        description: {
          ar: 'البوابة الرسمية لشركة جازي للاطلاع على باقات الإنترنت، عروض المؤسسات، وخريطة الوكالات التجارية.',
          fr: 'Site officiel Djezzy : offres internet mobile, solutions entreprises et localisation des agences.',
        },
        url: 'https://www.djezzy.dz/',
        isOnline: true,
      },
      {
        id: 'telephon-srv-6',
        title: {
          ar: 'جازي — تعبئة الرصيد ودفع الفاتورة عن بعد',
          fr: 'Djezzy — Rechargement Rapide & Factures en Ligne',
        },
        description: {
          ar: 'شحن رصيد فليكسي أو تفعيل الباقات وتسديد الفواتير الشهرية لأرقام جازي عبر الدفع الإلكتروني الآمن.',
          fr: 'Rechargement Flexy et paiement des factures Djezzy en ligne sans frais via Edahabia ou CIB.',
        },
        url: 'https://moncompte.djezzy.dz/ar/guest/recharge',
        isOnline: true,
      },
      {
        id: 'telephon-srv-7',
        title: {
          ar: 'جازي — تطبيق Djezzy App لخدمة المشتركين',
          fr: 'Djezzy — Application Officielle Djezzy App (Android)',
        },
        description: {
          ar: 'تتبع الرصيد الحالي واستهلاك الجيغابايت، تركيب العروض اليومية والشهرية، وتقديم طلبات الدعم.',
          fr: 'Suivi instantané du solde data, activation des offres et espace client mobile Djezzy.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.djezzy.internet',
        isOnline: true,
      },
      {
        id: 'telephon-srv-8',
        title: {
          ar: 'خدمات متعامل الهاتف النقال — أوريدو (الموقع الرسمي)',
          fr: 'Opérateur Ooredoo — Portail Officiel & Offres',
        },
        description: {
          ar: 'الموقع الرسمي لأوريدو الجزائر للتعرف على عروض Dima وN’yooz وتجهيزات الإنترنت المنزلي والمهني.',
          fr: 'Portail institutionnel Ooredoo Algérie : forfaits Dima, offres internet et support commercial.',
        },
        url: 'https://www.ooredoo.dz/',
        isOnline: true,
      },
      {
        id: 'telephon-srv-9',
        title: {
          ar: 'أوريدو — بوابة شحن الرصيد ودفع الفواتير Estorm',
          fr: 'Ooredoo — Portail de Rechargement E-Storm',
        },
        description: {
          ar: 'بوابة الشحن الإلكتروني المباشر لأرصدة وباقات أوريدو وتسديد فواتير الخطوط عبر البطاقة الذهبية أو CIB.',
          fr: 'Plateforme directe de rechargement crédit et paiement de factures Ooredoo par carte bancaire ou Edahabia.',
        },
        url: 'http://estorm.ooredoo.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مشتركو شبكات الهاتف النقال موبيليس وجازي وأوريدو من الأفراد والشركات في جميع الولايات',
        fr: 'Abonnés particuliers et professionnels des réseaux Mobilis, Djezzy et Ooredoo à travers toute l’Algérie',
      },
      processingTime: {
        ar: 'فوري لتعبئة الرصيد وتفعيل باقات الإنترنت، ومعالجة سريعة لبلاغات الاحتيال والشكاوى',
        fr: 'Crédit et forfaits activés instantanément après validation ; traitement diligent des signalements',
      },
      fees: {
        ar: 'تصفح البوابات واستخدام التطبيقات مجاني، ولا تطبق أي عمولات إضافية على الشحن بالبطاقة البنكية',
        fr: 'Accès et applications gratuits ; aucune commission supplémentaire lors du rechargement par Edahabia/CIB',
      },
      channel: {
        ar: 'البوابات الرسمية للمتعاملين، تطبيقات Android/iOS، رموز USSD، وأرقام خدمة الزبائن (666 / 777 / 333)',
        fr: 'Portails web officiels, apps mobiles, codes USSD et centres d’appel clients (666 / 777 / 333)',
      },
      keyRequirement: {
        ar: 'رقم هاتف نقال فعال ومسجل بالهوية البيومترية، وبطاقة دفع إلكتروني (الذهبية أو CIB) للشحن عن بعد',
        fr: 'Ligne mobile identifiée par CNIBE et carte Edahabia ou CIB pour le rechargement électronique',
      },
    },
    requirements: [
      {
        label: {
          ar: 'موبيليس (Mobilis)',
          fr: 'Opérateur Mobilis',
        },
        value: {
          ar: 'مصلحة الزبائن 666 — رموز الاستعلام *222# و*600# — بوابة e-paiement.mobilis.dz',
          fr: 'Service client 666 — Codes USSD *222# et *600# — Portail e-paiement.mobilis.dz',
        },
      },
      {
        label: {
          ar: 'جازي (Djezzy)',
          fr: 'Opérateur Djezzy',
        },
        value: {
          ar: 'مصلحة الزبائن 777 — رموز الاستعلام *710# و*720# — بوابة moncompte.djezzy.dz',
          fr: 'Service client 777 — Codes USSD *710# et *720# — Portail moncompte.djezzy.dz',
        },
      },
      {
        label: {
          ar: 'أوريدو (Ooredoo)',
          fr: 'Opérateur Ooredoo',
        },
        value: {
          ar: 'مصلحة الزبائن 333 — رموز الاستعلام *200# و*151# — بوابة estorm.ooredoo.dz',
          fr: 'Service client 333 — Codes USSD *200# et *151# — Portail estorm.ooredoo.dz',
        },
      },
      {
        label: {
          ar: 'أمان الخطوط والدفع الإلكتروني',
          fr: 'Sécurité des lignes et paiements',
        },
        value: {
          ar: 'استعمال النطاقات الرسمية فقط وعدم مشاركة رموز التأكيد OTP مع أي جهة أو رقم مجهول',
          fr: 'Utiliser exclusivement les domaines certifiés et ne jamais partager vos codes OTP par SMS ou appel',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أشحن رصيد هاتفي النقال بالبطاقة الذهبية دون التنقل إلى نقاط البيع؟',
          fr: 'Comment recharger mon crédit mobile avec la carte Edahabia sans me déplacer ?',
        },
        answer: {
          ar: 'يمكنك اختيار بوابة الشحن الخاصة بمتعاملك (e-paiement.mobilis.dz لموبيليس، moncompte.djezzy.dz لجازي، أو estorm.ooredoo.dz لأوريدو) أو استعمال تطبيق بريدي موب BaridiMob مباشرة.',
          fr: 'Utilisez le portail officiel de votre opérateur (e-paiement.mobilis.dz, moncompte.djezzy.dz ou estorm.ooredoo.dz) ou passez directement par l’application BaridiMob d’Algérie Poste.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا وصلتني رسالة نصية تدعي ربحي جائزة أو تطلب بيانات بطاقتي البنكية؟',
          fr: 'Que faire si je reçois un SMS suspect réclamant mes coordonnées bancaires ou annonçant un gain ?',
        },
        answer: {
          ar: 'تجنب النقر على أي رابط أو مشاركة رمز OTP، وبلغ عن الرقم المرسل عبر بوابة mobilis.dz/smsfraude أو مصلحة الزبائن لدى متعاملك لحماية المشتركين وحظر الرقم.',
          fr: 'Ne cliquez sur aucun lien, ne divulguez jamais votre code OTP et signalez immédiatement le numéro sur mobilis.dz/smsfraude ou auprès de votre service client.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تعبئة رصيد أو تسديد فاتورة هاتف شخص آخر عبر هذه البوابات؟',
          fr: 'Puis-je recharger la ligne ou payer la facture d’un proche via ces plateformes ?',
        },
        answer: {
          ar: 'نعم، تتيح واجهات الدفع الإلكتروني لجميع المتعاملين إدخال أي رقم هاتف تابع لنفس الشبكة وإتمام عملية الشحن أو تسديد الفاتورة بالبطاقة الذهبية أو CIB.',
          fr: 'Oui, toutes les passerelles officielles permettent de saisir le numéro de votre choix sur le réseau concerné et de valider le règlement par Edahabia ou CIB.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من عدد الشرائح المسجلة باسمي لدى متعاملي الهاتف النقال؟',
          fr: 'Comment vérifier le nombre de cartes SIM enregistrées à mon nom ?',
        },
        answer: {
          ar: 'تفرض تنظيمات سلطة الضبط ARPCE التقرب من الوكالة التجارية للمتعامل مرفوقا ببطاقة التعريف البيومترية لمراجعة الشرائح النشطة باسمك وتوقيف أي شريحة غير معروفة.',
          fr: 'Conformément aux directives de l’ARPCE, présentez-vous en agence commerciale muni de votre carte d’identité biométrique pour consulter et résilier toute ligne non reconnue.',
        },
      },
    ],
  },

  // 67. transport
  {
    id: 'transport',
    slug: 'transport',
    category: 'transport',
    name: {
      ar: 'النقل والمواصلات الرقمية في الجزائر — الجوي والبحري والبري والسككي',
      fr: 'Transports & Mobilité Numérique en Algérie — Aérien, Maritime, Ferroviaire & Urbain',
    },
    acronym: 'TRANSPORT',
    ministry: {
      ar: 'وزارة النقل والمؤسسات الوطنية للنقل',
      fr: 'Ministère des Transports & Opérateurs Nationaux',
    },
    description: {
      ar: 'البوابة الشاملة لخدمات النقل والمواصلات الرقمية في الجزائر: حجز تذاكر الخطوط الجوية الجزائرية وطيران الطاسيلي والنقل البحري Algérie Ferries، مواقيت قطارات SNTF، تطبيق تواصل للترامواي، تطبيق محطتي لـ SOGRAL، حافلات ETUSA Mob، تتبع الرحلات الجوية، ومنصة Volz والتبليغ لدى وزارة النقل.',
      fr: 'Portail unifié des services numériques de transport en Algérie : réservation de billets Air Algérie, Tassili Airlines et Algérie Ferries, horaires ferroviaires SNTF, application Tawasol Tramway (SETRAM), Mahatati (SOGRAL), transport urbain ETUSA Mob, suivi aérien en direct, comparateur Volz et signalements Ministère des Transports.',
    },
    officialUrl: 'https://www.mt.gov.dz/',
    portalUrl: 'https://airalgerie.dz/ar/%d8%a7%d9%84%d8%ad%d8%ac%d8%b2/',
    iconName: 'Plane',
    isPopular: true,
    services: [
      {
        id: 'transport-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة النقل الجزائرية',
          fr: 'Site Officiel du Ministère des Transports',
        },
        description: {
          ar: 'البوابة الوزارية لمتابعة القرارات التنظيمية، برامج النقل الوطني، وتراخيص النشاطات اللوجستية والبحرية والجوية.',
          fr: 'Portail institutionnel regroupant les textes réglementaires, programmes sectoriels et agréments de transport.',
        },
        url: 'https://www.mt.gov.dz/',
        isOnline: true,
      },
      {
        id: 'transport-srv-2',
        title: {
          ar: 'الخطوط الجوية الجزائرية — حجز التذاكر إلكترونيا',
          fr: 'Air Algérie — Réservation et Gestion de Billets en Ligne',
        },
        description: {
          ar: 'حجز رحلات الطيران الداخلية والدولية، تعديل التذاكر، والدفع عبر البطاقة الذهبية وCIB أو البطاقات الدولية.',
          fr: 'Achat de billets nationaux et internationaux, modification de vols et paiement par carte Edahabia, CIB ou carte internationale.',
        },
        url: 'https://airalgerie.dz/ar/%d8%a7%d9%84%d8%ad%d8%ac%d8%b2/',
        isOnline: true,
      },
      {
        id: 'transport-srv-3',
        title: {
          ar: 'طيران الطاسيلي — حجز الرحلات الداخلية والدولية',
          fr: 'Tassili Airlines — Réservation de Vols en Ligne',
        },
        description: {
          ar: 'منصة الحجز الرسمية لشركة طيران الطاسيلي لتصفح مواعيد الرحلات نحو ولايات الجنوب والشمال وحجز المقاعد.',
          fr: 'Portail officiel de Tassili Airlines pour consulter les liaisons domestiques/internationales et réserver vos billets.',
        },
        url: 'https://tassiliairlines.dz/',
        isOnline: true,
      },
      {
        id: 'transport-srv-4',
        title: {
          ar: 'النقل البحري للمسافرين — حجز تذاكر Algérie Ferries',
          fr: 'Algérie Ferries (ENTMV) — Réservation des Traversées Maritimes',
        },
        description: {
          ar: 'حجز الرحلات البحرية بين الموانئ الجزائرية وموانئ المتوسط مع اختيار الكابينات والمركبات المرافقة.',
          fr: 'Plateforme officielle de réservation des traversées maritimes entre l’Algérie et l’Europe (passagers et véhicules).',
        },
        url: 'https://afs.algerieferries.dz/booking/step1',
        isOnline: true,
      },
      {
        id: 'transport-srv-5',
        title: {
          ar: 'الشركة الوطنية للنقل بالسكك الحديدية (SNTF)',
          fr: 'SNTF — Réseau Ferroviaire & Fiches Horaires Officielles',
        },
        description: {
          ar: 'متابعة مواقيت قطارات الضواحي والخطوط الكبرى كوراديا وقطارات الصحراء والتعرف على أسعار التذاكر ومحطات التوقف.',
          fr: 'Consultation des horaires de trains de banlieue, grandes lignes Coradia, trains de nuit et réseau des gares SNTF.',
        },
        url: 'https://www.sntf.dz/',
        isOnline: true,
      },
      {
        id: 'transport-srv-6',
        title: {
          ar: 'تتبع حركة الملاحة الجوية في الوقت الحقيقي (Flightradar24)',
          fr: 'Suivi du Trafic Aérien en Temps Réel (Flightradar24)',
        },
        description: {
          ar: 'خريطة مباشرة لمراقبة مسارات الرحلات الجوية القادمة والمغادرة من المطارات الجزائرية ومواعيد الهبوط الفعلية.',
          fr: 'Radar interactif en direct pour suivre les vols au départ et à l’arrivée des aéroports algériens.',
        },
        url: 'https://www.flightradar24.com/36.17,3.25/7',
        isOnline: true,
      },
      {
        id: 'transport-srv-7',
        title: {
          ar: 'تطبيق تواصل (Tawasol) لخطوط الترامواي SETRAM',
          fr: 'Application Tawasol — Tramway SETRAM (Android)',
        },
        description: {
          ar: 'تطبيق الترامواي في الجزائر العاصمة، وهران، قسنطينة، سطيف، سيدي بلعباس، ورقلة، ومستغانم لمعرفة المواقيت والمحطات والاشتراكات.',
          fr: 'Application officielle SETRAM pour consulter horaires, arrêts, tarifs et abonnements Tramway multi-wilayas.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.setram.AppEtwassel',
        isOnline: true,
      },
      {
        id: 'transport-srv-8',
        title: {
          ar: 'تطبيق محطتي (Mahatati) للخطوط البرية سوقرال SOGRAL',
          fr: 'Application Mahatati — Transport Routier SOGRAL (Android)',
        },
        description: {
          ar: 'الاستعلام عن مواعيد حافلات ما بين الولايات في المحطات البرية سوقرال عبر الوطن وتواريخ الانطلاق والوصول.',
          fr: 'Suivi des horaires et destinations de cars inter-wilayas au départ des gares routières SOGRAL.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.sogral.mobile&hl=ar',
        isOnline: true,
      },
      {
        id: 'transport-srv-9',
        title: {
          ar: 'منصة Volz لحجز تذاكر الطيران من الجزائر بالعملة الوطنية',
          fr: 'Plateforme Volz — Comparaison & Réservation de Vols depuis l’Algérie',
        },
        description: {
          ar: 'محرك حجز ومقارنة رحلات الطيران نحو الوجهات الدولية مع إتاحة الدفع بالدينار عبر البطاقة الذهبية وCIB.',
          fr: 'Comparateur et agence en ligne dédiés aux vols au départ d’Algérie avec règlement en dinars par CIB/Edahabia.',
        },
        url: 'https://volz.app/ar',
        isOnline: true,
      },
      {
        id: 'transport-srv-10',
        title: {
          ar: 'تطبيق التبليغ والشكاوى لدى وزارة النقل',
          fr: 'Application de Signalement — Ministère des Transports',
        },
        description: {
          ar: 'تطبيق موجه للمسافرين لتقديم التبليغات والملاحظات المتعلقة بقطاع النقل العمومي وجودة الخدمات عبر الولايات.',
          fr: 'Application citoyenne dédiée au signalement des incidents et à l’amélioration du service public de transport.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.sebrou.docts_guide.app&hl=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المسافرون عبر الرحلات الجوية والبحرية، ومستعملو القطارات والترامواي والحافلات ما بين الولايات',
        fr: 'Voyageurs aériens et maritimes, usagers des trains SNTF, tramways SETRAM et autocars inter-wilayas SOGRAL',
      },
      processingTime: {
        ar: 'إصدار فوري للتذاكر الإلكترونية ومتابعة لحظية لمواقيت الرحلات عبر التطبيقات الرسمية',
        fr: 'Émission immédiate des billets électroniques et consultation en temps réel des horaires',
      },
      fees: {
        ar: 'تطبيقات المتابعة والتبليغ مجانية، وتطبق تسعيرات التذاكر الرسمية الخاصة بكل شركة نقل',
        fr: 'Applications et outils de suivi gratuits ; tarification officielle propre à chaque transporteur',
      },
      channel: {
        ar: 'البوابات الرسمية لشركات النقل الوطنية، التطبيقات المحمولة (تواصل، محطتي، Etusa Mob)، وصفحات SNTF بالموقع',
        fr: 'Portails officiels des compagnies nationales, applications mobiles et explorateur horaire SNTF intégré',
      },
      keyRequirement: {
        ar: 'وثيقة الهوية أو جواز السفر للرحلات الجوية والبحرية، وبطاقة دفع إلكتروني (الذهبية أو CIB) للحجز عن بعد',
        fr: 'Pièce d’identité ou passeport valide pour les voyages aériens/maritimes, et carte Edahabia ou CIB pour payer en ligne',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الرحلات الجوية والبحرية',
          fr: 'Voyages aériens & maritimes',
        },
        value: {
          ar: 'جواز سفر ساري الصلاحية، بطاقة التعريف للرحلات الداخلية، وبيانات المركبة عند الحجز على متن الباخرة',
          fr: 'Passeport valide, CNIBE pour les vols intérieurs et carte grise du véhicule pour les traversées maritimes',
        },
      },
      {
        label: {
          ar: 'الدفع الإلكتروني للتذاكر',
          fr: 'E-paiement des billets',
        },
        value: {
          ar: 'البطاقة الذهبية أو بطاقة CIB للخطوط الداخلية ومنصة Volz، مع دعم البطاقات الدولية Visa/Mastercard عند الحجز من الخارج',
          fr: 'Carte Edahabia ou CIB pour les vols domestiques et Volz ; cartes Visa/Mastercard acceptées pour les trajets internationaux',
        },
      },
      {
        label: {
          ar: 'النقل السككي والحضري والبري',
          fr: 'Rail, urbain & routier',
        },
        value: {
          ar: 'مراجعة جداول القطارات SNTF، تطبيق تواصل للترامواي، محطتي لحافلات SOGRAL، وتطبيق Etusa Mob لحافلات العاصمة',
          fr: 'Consulter les fiches SNTF, Tawasol (tramway), Mahatati (SOGRAL) et Etusa Mob (lignes urbaines Alger)',
        },
      },
      {
        label: {
          ar: 'رقابة الجودة والتبليغ',
          fr: 'Signalement & qualité de service',
        },
        value: {
          ar: 'تطبيق التبليغ لدى وزارة النقل لتوثيق المخالفات أو النقائص المسجلة في خطوط النقل العمومي',
          fr: 'Application officielle du Ministère des Transports pour remonter tout dysfonctionnement sur le réseau public',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أبحث عن مواقيت قطارات SNTF بين محطتين أو حسب الولاية؟',
          fr: 'Comment rechercher les horaires des trains SNTF entre deux gares ?',
        },
        answer: {
          ar: 'يمكنك استخدام صفحات قطارات SNTF المخصصة داخل هذا الدليل (مكتشف الرحلات أو الجداول الرسمية المصورة) أو زيارة الموقع الرسمي sntf.dz للاطلاع على مواعيد الانطلاق والوصول.',
          fr: 'Utilisez les modules SNTF intégrés au portail (explorateur de trajets et fiches horaires officielles) ou consultez directement sntf.dz.',
        },
      },
      {
        question: {
          ar: 'هل تدعم الخطوط الجوية الجزائرية وطيران الطاسيلي الدفع بالبطاقة الذهبية وCIB؟',
          fr: 'Air Algérie et Tassili Airlines acceptent-elles le paiement par carte Edahabia ou CIB ?',
        },
        answer: {
          ar: 'نعم، تتيح كلتا الشركتين تسديد تذاكر الرحلات الداخلية وكذلك العديد من العروض بالدينار الجزائري عبر بوابة الدفع الإلكتروني بالبطاقة الذهبية أو CIB.',
          fr: 'Oui, les deux compagnies permettent le règlement en dinars par carte Edahabia et CIB notamment sur les liaisons domestiques et certaines offres en ligne.',
        },
      },
      {
        question: {
          ar: 'كيف أتابع أوقات مرور الترامواي أو حافلات النقل البري ما بين الولايات؟',
          fr: 'Comment connaître les horaires du tramway et des autocars inter-wilayas ?',
        },
        answer: {
          ar: 'للترامواي عبر مختلف المدن استعمل تطبيق تواصل SETRAM الرسمي، ولحافلات المحطات البرية بين الولايات استعمل تطبيق محطتي التابع لمؤسسة سوقرال SOGRAL، أما بالعاصمة فاستعمل تطبيق Etusa Mob.',
          fr: 'Téléchargez l’application Tawasol (SETRAM) pour le tramway multi-villes, Mahatati (SOGRAL) pour les autocars longue distance et Etusa Mob pour les lignes urbaines d’Alger.',
        },
      },
      {
        question: {
          ar: 'ما هي الوثائق الضرورية لحجز تذكرة باخرة مع سيارة عبر Algérie Ferries؟',
          fr: 'Quels documents faut-il pour réserver une traversée Algérie Ferries avec véhicule ?',
        },
        answer: {
          ar: 'يلزم إدخال بيانات جوازات سفر جميع المسافرين إضافة إلى معلومات البطاقة الرمادية للمركبة (النوع، الموديل، رقم التسجيل) أثناء ملء خطوات الحجز على منصة ENTMV.',
          fr: 'Vous devez renseigner les numéros de passeport de chaque passager ainsi que les données de la carte grise du véhicule (marque, modèle, immatriculation) lors de la réservation en ligne.',
        },
      },
    ],
  },
];

export const batch9Guides: Record<string, Partial<RichGuideContent>> = {
  tabioucom: {
    intro: {
      ar: [
        'جاءت منصة طابعكم (tabioucom.mf.gov.dz) التي أطلقتها المديرية العامة للضرائب التابعة لوزارة المالية لوضع حد نهائي للطوابير أمام قباضات الضرائب من أجل شراء الطابع الجبائي الورقي. تتيح هذه البوابة الوطنية للمواطنين اقتناء الطابع الجبائي إلكترونيا في بضع دقائق والحصول على وصل رقمي معتمد فورا.',
        'يشمل الطابع الإلكتروني على منصة طابعكم أبرز الوثائق الحيوية المطلوبة يوميا في الإدارات الجزائرية، مثل جواز السفر البيومتري (28 أو 48 صفحة)، بطاقة التعريف الوطنية البيومترية في حال الضياع أو التلف، رخصة السياقة، وكذا مختلف عقود النقل والسفر، مع إمكانية الدفع المباشر عبر البطاقة الذهبية أو البطاقة البنكية CIB.',
        'إلى جانب فضاء الشراء، توفر البوابة قسما خاصا لإعادة إصدار وصل الطابع في حال ضياعه، وفضاء للمصادقة والتحقق مخصص لموظفي البلديات والدوائر، مما يضمن تتبعا آمنا لكل طابع برقم مرجعي وحيد ورمز QR يمنع التزوير أو تكرار الاستخدام.'
      ],
      fr: [
        'Développée par la Direction Générale des Impôts (Ministère des Finances), la plateforme Tabioucom (tabioucom.mf.gov.dz) modernise l’acquisition du timbre fiscal en Algérie. Elle dispense les usagers de se déplacer aux recettes des impôts en permettant l’achat en ligne des quittances fiscales en quelques minutes.',
        'Le dispositif couvre les timbres les plus courants des démarches citoyennes : passeport biométrique (28 ou 48 pages), renouvellement de carte nationale d’identité après perte ou détérioration, permis de conduire et titres de transport ou de voyage, payables sans surcoût par carte Edahabia ou CIB.',
        'En plus du module d’achat, Tabioucom intègre un guichet de réédition de reçu, un formulaire d’assistance DGI et un espace sécurisé d’authentification réservé aux agents des APC et daïras pour valider et consommer chaque timbre via son code QR unique.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر رقم التعريف الوطني البيومتري (18 رقما) الخاص بصاحب الوثيقة الإدارية المطلوبة.',
        'امتلاك بطاقة دفع إلكتروني صالحة (البطاقة الذهبية لبريد الجزائر أو بطاقة CIB) مفعلة لاستقبال رمز OTP.',
        'بريد الكتروني صحيح ورقم هاتف نقال شخصي لاستلام إشعار المعاملة ونسخة وصل الطابع.',
        'التأكد المسبق من القيمة القانونية للطابع المطلوب وفق نوع الوثيقة وعدد الصفحات قبل الدفع.',
      ],
      fr: [
        'Disposer du Numéro d’Identification National (NIN à 18 chiffres) du titulaire de la demande administrative.',
        'Détenir une carte Edahabia ou CIB active avec fonction SMS OTP activée pour le paiement sur Internet.',
        'Saisir une adresse e-mail et un numéro de mobile valides afin de recevoir la confirmation de transaction.',
        'Vérifier au préalable le tarif exact correspondant à la démarche (ex. passeport 28 ou 48 pages).',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'فتح صفحة شراء الطابع الإلكتروني (tabioucom.mf.gov.dz/acheter)',
          fr: 'Accéder au formulaire d’achat (tabioucom.mf.gov.dz/acheter)',
        },
        detail: {
          ar: 'اختر الولاية والبلدية أو المصلحة الإدارية، ثم حدد نوع الوثيقة المطلوب استخراجها وقيمة الطابع الموافقة لها.',
          fr: 'Sélectionnez la wilaya, la commune ou administration concernée, puis choisissez la nature du document et le montant du timbre.',
        },
      },
      {
        title: {
          ar: 'إدخال البيانات الشخصية ورقم التعريف الوطني NIN',
          fr: 'Saisir les informations d’identité et le NIN',
        },
        detail: {
          ar: 'أدخل الاسم واللقب، رقم التعريف الوطني بدقة، البريد الإلكتروني، ورقم الهاتف وتأكد من صحتها قبل الانتقال للدفع.',
          fr: 'Complétez le nom, prénom, NIN exact, adresse courriel et téléphone portable puis contrôlez le récapitulatif.',
        },
      },
      {
        title: {
          ar: 'تسديد حقوق الطابع بالبطاقة الذهبية أو CIB',
          fr: 'Régler en ligne via carte Edahabia ou CIB',
        },
        detail: {
          ar: 'اختر وسيلة الدفع المناسبة، أدخل بيانات البطاقة وأكد العملية عبر رمز التحقق المرسل برسالة قصيرة SMS.',
          fr: 'Choisissez Edahabia ou CIB, renseignez les coordonnées de votre carte et validez par le code OTP reçu par SMS.',
        },
      },
      {
        title: {
          ar: 'تحميل وصل الطابع PDF وإرفاقه بملفك الإداري',
          fr: 'Télécharger le timbre PDF et le déposer au guichet',
        },
        detail: {
          ar: 'احتفظ بملف PDF الحامل للرمز المرجعي ورمز QR، واطبعه لتقديمه لدى البلدية أو الدائرة أو مصلحة الوثائق.',
          fr: 'Téléchargez le justificatif PDF muni du code QR et imprimez-le pour l’annexer à votre dossier en APC ou daïra.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'خصم المبلغ من الحساب البنكي أو البريدي دون ظهور وصل الطابع PDF',
          fr: 'Compte débité mais récépissé PDF du timbre non téléchargé',
        },
        solution: {
          ar: 'انتقل إلى صفحة إعادة الاقتناء tabioucom.mf.gov.dz/edit لاسترجاع الوصل برقم العملية، وإذا تعذر ذلك راسل الدعم عبر صفحة contact مرفقا بوصل الدفع.',
          fr: 'Utilisez l’outil de réédition tabioucom.mf.gov.dz/edit avec votre référence de paiement ; en dernier recours contactez la DGI via la page contact avec le justificatif bancaire.',
        },
      },
      {
        issue: {
          ar: 'خطأ في اختيار الولاية أو البلدية أو قيمة الطابع بعد الدفع',
          fr: 'Erreur sur le type de document ou la circonscription après règlement',
        },
        solution: {
          ar: 'تواصل فورا مع فريق عمل طابعكم عبر البوابة أو تقرب من قباضة الضرائب المختصة مرفقا بوصل الدفع ووثيقة الهوية للنظر في معالجة الحالة.',
          fr: 'Contactez rapidement le support Tabioucom via le formulaire officiel ou présentez-vous à la recette des impôts de rattachement avec le reçu.',
        },
      },
      {
        issue: {
          ar: 'تعذر قراءة رمز QR من طرف عون الإدارة عند إيداع الملف',
          fr: 'Code QR illisible lors du contrôle au guichet administratif',
        },
        solution: {
          ar: 'احرص على طباعة الوصل بجودة واضحة غير مشوشة، ويمكن للعون إدخال الرقم المرجعي التسلسلي للطابع يدويا في فضاء التوثيق والمصادقة.',
          fr: 'Imprimez le fichier PDF sans réduction excessive ; l’agent peut également saisir manuellement le numéro de référence imprimé sous le QR Code.',
        },
      },
    ],
    extraFaqs: [],
  },

  telephon: {
    intro: {
      ar: [
        'يمثل قطاع الهاتف النقال في الجزائر عصب الاتصال اليومي والوصول إلى الإنترنت والخدمات البنكية والحكومية عبر الهواتف الذكية. وينشط في السوق الوطنية ثلاثة متعاملين رئيسيين هم موبيليس (ATM Mobilis)، جازي (Djezzy)، وأوريدو (Ooredoo)، حيث طور كل منهم منظومة رقمية متكاملة لخدمة المشتركين عن بعد.',
        'بفضل الربط المباشر مع منظومة الدفع الإلكتروني بالبطاقة الذهبية وبطاقة CIB، لم يعد المشترك بحاجة للتنقل إلى الموزعين المعتمدين لشحن الرصيد أو تسديد الفواتير الشهرية؛ إذ يمكن إتمام التعبئة الفورية لأي رقم على الشبكة أو تفعيل باقات الإنترنت عبر المواقع الرسمية وتطبيقات Mobilis Care وDjezzy App وMy Ooredoo.',
        'يجمع هذا الدليل في صفحة واحدة الروابط الرسمية الموثقة للمتعاملين الثلاثة، رموز USSD المختصرة للاستعلام الفوري، إضافة إلى إرشادات الأمان الرقمي وبوابة التبليغ عن الرسائل الاحتيالية لحماية المشتركين من محاولات التصيد.'
      ],
      fr: [
        'Le marché algérien de la téléphonie mobile repose sur trois opérateurs nationaux majeurs : Mobilis (ATM Mobilis), Djezzy et Ooredoo. Chacun propose désormais un écosystème numérique complet permettant aux abonnés particuliers et entreprises de gérer leur ligne à distance.',
        'Grâce à l’intégration des cartes Edahabia et CIB, le rechargement de crédit prépayé (Arselli, Flexy, Storm), l’achat de forfaits data 4G et le règlement des factures postpayées s’effectuent instantanément via les portails officiels ou les applications Mobilis Care, Djezzy App et My Ooredoo.',
        'Cette fiche centralise les liens authentiques de chaque opérateur, les codes USSD indispensables et les bons réflexes de cybersécurité mobile, notamment pour signaler les SMS frauduleux.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'شريحة هاتف نقال نشطة ومسجلة بالهوية البيومترية لدى أحد المتعاملين الثلاثة (موبيليس، جازي، أوريدو).',
        'بطاقة دفع إلكتروني سارية المفعول (الذهبية أو CIB) في حال الشحن أو دفع الفاتورة عبر الإنترنت.',
        'تثبيت التطبيق الرسمي الخاص بمتعاملك من المتاجر الرسمية فقط (Google Play أو App Store).',
        'الالتزام بقواعد الحذر الرقمي وعدم فتح روابط مجهولة تطلب رموز التأكيد المصرفية.',
      ],
      fr: [
        'Disposer d’une carte SIM active et identifiée auprès de Mobilis, Djezzy ou Ooredoo.',
        'Posséder une carte Edahabia ou CIB valide avec code OTP pour les opérations de paiement en ligne.',
        'Télécharger les applications officielles exclusivement depuis Google Play ou l’App Store.',
        'Rester vigilant face aux campagnes de phishing et ne jamais transmettre vos codes OTP.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'تحديد المتعامل والانتقال إلى بوابته الرسمية الموثقة',
          fr: 'Choisir votre opérateur et ouvrir son portail officiel',
        },
        detail: {
          ar: 'اختر بطاقة موبيليس أو جازي أو أوريدو من هذه الصفحة للتأكد من الدخول إلى النطاق الرسمي الصحيح للمتعامل.',
          fr: 'Sélectionnez la carte Mobilis, Djezzy ou Ooredoo ci-dessus afin d’accéder au domaine officiel vérifié.',
        },
      },
      {
        title: {
          ar: 'تعبئة الرصيد أو تسديد الفاتورة إلكترونيا',
          fr: 'Recharger votre ligne ou régler une facture en ligne',
        },
        detail: {
          ar: 'أدخل رقم الهاتف المراد تعبئته مرتين، حدد المبلغ أو الباقة المطلوبة، ثم أكد الدفع برمز SMS عبر الذهبية أو CIB.',
          fr: 'Saisissez votre numéro de téléphone, choisissez le montant ou le forfait puis validez le paiement via Edahabia ou CIB.',
        },
      },
      {
        title: {
          ar: 'متابعة الاستهلاك وتفعيل الباقات عبر تطبيقات الزبائن',
          fr: 'Gérer vos forfaits via les applications et codes USSD',
        },
        detail: {
          ar: 'استعمل تطبيق Mobilis Care أو Djezzy App أو رموز الاستعلام (*222# / *710# / *200#) لمراقبة رصيد الإنترنت والمكالمات.',
          fr: 'Utilisez les applications clients officielles ou les codes USSD (*222#, *710#, *200#) pour suivre votre solde en temps réel.',
        },
      },
      {
        title: {
          ar: 'التبليغ عن الرسائل الاحتيالية والأرقام المزعجة',
          fr: 'Signaler immédiatement tout SMS frauduleux',
        },
        detail: {
          ar: 'عند تلقي رسالة مشبوهة تنتحل صفة مؤسسة أو تطلب بيانات بنكية، قم بالتبليغ عبر mobilis.dz/smsfraude أو مصلحة الزبائن.',
          fr: 'Déclarez toute tentative d’arnaque par SMS sur mobilis.dz/smsfraude ou auprès du service client de votre opérateur.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'خصم مبلغ الشحن من البطاقة البنكية دون وصول الرصيد للهاتف',
          fr: 'Débit bancaire effectué sans réception immédiate du crédit',
        },
        solution: {
          ar: 'انتظر بضع دقائق للتحديث، واحتفظ بوصل المعاملة الإلكترونية ثم تواصل مع خدمة الزبائن (666 لموبيليس، 777 لجازي، 333 لأوريدو) لتسوية الشحن.',
          fr: 'Patientez quelques minutes, conservez le reçu de transaction SATIM/Edahabia et contactez le service client (666, 777 ou 333) avec le numéro d’opération.',
        },
      },
      {
        issue: {
          ar: 'توقف شريحة الهاتف أو فقدان التغطية بشكل مفاجئ',
          fr: 'Perte de réseau ou carte SIM bloquée soudainement',
        },
        solution: {
          ar: 'أعد تشغيل الهاتف وتأكد من وضع الشبكة التلقائي؛ وفي حال استمرار الانقطاع أو ضياع الشريحة، تقرب من أقرب وكالة تجارية ببطاقة التعريف الوطنية لاستبدالها.',
          fr: 'Redémarrez l’appareil et vérifiez la sélection réseau ; si la SIM est défectueuse ou égarée, rendez-vous en agence muni de votre CNIBE pour la remplacer.',
        },
      },
      {
        issue: {
          ar: 'نفاد رصيد الإنترنت بسرعة دون استخدام مكثف للتطبيقات',
          fr: 'Consommation anormale ou trop rapide du forfait data',
        },
        solution: {
          ar: 'عطل التحديث التلقائي للتطبيقات وتشغيل الفيديوهات التلقائي عبر بيانات الهاتف، وراجع تفاصيل الاستهلاك من داخل تطبيق المتعامل.',
          fr: 'Désactivez les mises à jour automatiques et sauvegardes cloud sur données mobiles puis vérifiez le détail de consommation dans l’app opérateur.',
        },
      },
    ],
    extraFaqs: [],
  },

  transport: {
    intro: {
      ar: [
        'شهد قطاع النقل والمواصلات في الجزائر تحولا رقميا ملموسا يغطي مختلف وسائل التنقل الجوي، البحري، السككي، والبري الحضري وما بين الولايات. أصبحت كبريات المؤسسات الوطنية على غرار الخطوط الجوية الجزائرية، طيران الطاسيلي، المؤسسة الوطنية للنقل البحري Algérie Ferries، والشركة الوطنية للنقل بالسكك الحديدية SNTF توفر بوابات وتطبيقات رقمية تسهل التخطيط المسبق للرحلات.',
        'على مستوى التنقل الداخلي اليومي، يعتمد المسافرون على باقة من التطبيقات الرسمية المجانية: تطبيق تواصل (Tawasol) لمتابعة الترامواي عبر مختلف ولايات الوطن، تطبيق محطتي (Mahatati) لاستكشاف مواعيد الحافلات في المحطات البرية سوقرال SOGRAL، وتطبيق Etusa Mob لحافلات النقل الحضري وشبه الحضري بالعاصمة، فضلا عن محركات البحث عن مواقيت القطارات.',
        'كما يتيح قطاع النقل أدوات إضافية عالية الأهمية مثل تتبع حركة الطيران المباشرة عبر Flightradar24، منصة Volz لحجز الرحلات بالدينار الجزائري، وتطبيق التبليغ التابع لوزارة النقل لرفع انشغالات المسافرين وتعزيز جودة الخدمة العمومية.'
      ],
      fr: [
        'La digitalisation du secteur des transports en Algérie simplifie considérablement la préparation des déplacements aériens, maritimes, ferroviaires et urbains. Les compagnies nationales — Air Algérie, Tassili Airlines, Algérie Ferries et SNTF — mettent désormais à disposition des interfaces en ligne pour réserver des billets ou vérifier les horaires.',
        'Au quotidien, les voyageurs disposent d’applications mobiles pratiques et gratuites : Tawasol pour les lignes de tramway SETRAM multi-wilayas, Mahatati pour les autocars inter-wilayas des gares routières SOGRAL, Etusa Mob pour le réseau urbain algérois, ainsi que les fiches et explorateurs horaires ferroviaires SNTF.',
        'Ce portail rassemble également l’accès au radar aérien en temps réel Flightradar24, au comparateur Volz compatible Edahabia/CIB et à l’application de signalement du Ministère des Transports afin d’offrir une vue exhaustive et fiable de la mobilité nationale.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'جواز سفر ساري المفعول لمدة كافية للرحلات الدولية الجوية والبحرية وبطاقة تعريف وطنية للخطوط الداخلية.',
        'بطاقة دفع إلكتروني (الذهبية أو CIB) أو بطاقة بنكية دولية عند الحجز الإلكتروني لتذاكر الطيران أو البواخر.',
        'نسخة من البطاقة الرمادية للمركبة في حال حجز عبور بحري يتضمن سيارة عبر Algérie Ferries.',
        'تثبيت تطبيقات التنقل الرسمية (تواصل، محطتي، Etusa Mob) والتحقق المسبق من مواقيت القطارات عبر SNTF.',
      ],
      fr: [
        'Passeport valide pour les déplacements internationaux aériens/maritimes et CNIBE pour les trajets domestiques.',
        'Carte Edahabia, CIB ou carte internationale selon la devise de facturation du billet réservé en ligne.',
        'Carte grise du véhicule lors de la réservation d’une traversée maritime avec voiture sur Algérie Ferries.',
        'Installation des applications officielles (Tawasol, Mahatati, Etusa Mob) et vérification des horaires SNTF avant le départ.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'اختيار وسيلة النقل والمسار عبر البوابة المختصة',
          fr: 'Sélectionner le mode de transport et l’itinéraire',
        },
        detail: {
          ar: 'حدد شركة الطيران (الجوية الجزائرية، طيران الطاسيلي، Volz)، النقل البحري، أو تطبيقات القطارات والحافلات والترامواي.',
          fr: 'Accédez au portail adapté : compagnie aérienne, traversée maritime, réseau ferroviaire SNTF ou transport urbain/routier.',
        },
      },
      {
        title: {
          ar: 'مقارنة المواعيد والتحقق من شروط الأمتعة والتعديل',
          fr: 'Comparer les horaires et vérifier les conditions tarifaires',
        },
        detail: {
          ar: 'راجع أوقات الانطلاق والوصول، وزن الأمتعة المسموح به، وشروط إلغاء أو تغيير التذكرة قبل تأكيد الحجز.',
          fr: 'Contrôlez les horaires, franchises bagages et règles de modification ou remboursement avant de valider.',
        },
      },
      {
        title: {
          ar: 'إدخال بيانات المسافرين وإتمام الدفع الإلكتروني',
          fr: 'Renseigner les passagers et régler le titre en ligne',
        },
        detail: {
          ar: 'اكتب الأسماء مطابقة تماما لجواز السفر أو الهوية وأتمم الدفع الآمن مع حفظ نسخة التذكرة الإلكترونية E-Ticket.',
          fr: 'Saisissez les identités exactes conformément aux passeports, effectuez le paiement sécurisé et archivez votre E-Ticket.',
        },
      },
      {
        title: {
          ar: 'تتبع الرحلة في الموعد المحدد أو رفع التبليغات',
          fr: 'Suivre le trajet en temps réel ou signaler un incident',
        },
        detail: {
          ar: 'استخدم خريطة الملاحة Flightradar24 وتطبيقات تواصل ومحطتي لمتابعة المواعيد الفعلية أو التبليغ لوزارة النقل عند الضرورة.',
          fr: 'Suivez les vols via Flightradar24, consultez les horaires sur Tawasol/Mahatati ou remontez une réclamation au ministère.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم استلام التذكرة الإلكترونية في البريد بعد خصم مبلغ الحجز',
          fr: 'Billet électronique non reçu par e-mail après paiement confirmé',
        },
        solution: {
          ar: 'افحص مجلد الرسائل غير المرغوب فيها Spam، أو استعمل رقم مرجع الحجز PNR في صفحة إدارة الحجز بموقع الشركة، أو اتصل بمصلحة الزبائن.',
          fr: 'Vérifiez vos courriers indésirables, consultez votre dossier avec le code PNR dans la rubrique « Gérer ma réservation » ou contactez le support client.',
        },
      },
      {
        issue: {
          ar: 'فشل عملية الدفع بالبطاقة الذهبية أو CIB عند حجز تذكرة سفر',
          fr: 'Refus de transaction Edahabia ou CIB lors de l’achat d’un billet',
        },
        solution: {
          ar: 'تأكد من عدم تجاوز سقف السحب والدفع اليومي لبطاقتك وأن خدمة SMS OTP مفعلة، مع مراعاة استخدام الدفع بالعملة المحلية للرحلات المؤهلة.',
          fr: 'Vérifiez votre plafond quotidien de paiement, l’activation du SMS OTP et assurez-vous que le vol sélectionné autorise le règlement en dinars.',
        },
      },
      {
        issue: {
          ar: 'تغير توقيت رحلة القطار أو الحافلة مقارنة بالجدول الاعتيادي',
          fr: 'Horaire de train ou d’autocar modifié en période saisonnière',
        },
        solution: {
          ar: 'راجع آخر تحديثات الخطوط الصيفية والشتوية عبر موقع sntf.dz وتطبيق محطتي SOGRAL قبل التوجه إلى المحطة بساعات كافية.',
          fr: 'Consultez les fiches horaires actualisées sur sntf.dz et dans l’application Mahatati avant tout déplacement en gare.',
        },
      },
    ],
    extraFaqs: [],
  },

  sntf: {
    intro: {
      ar: [
        'يمثل دليل DZ Rail التفاعلي للشركة الوطنية للنقل بالسكك الحديدية (SNTF) مرجعا شاملا لمتابعة مواقيت قطارات الجزائر لعام 2026 عبر الشبكات الخمس: قطارات ضاحية الجزائر الكهربائية (الثنية، العفرون، زرالدة، ومطار هواري بومدين)، الخطوط الشرقية الكبرى نحو سطيف وبجاية وبرج بوعريريج وقسنطينة وعنابة، الخطوط الغربية نحو الشلف وغليزان ووهران وتلمسان، قطارات الصحراء والهضاب العليا نحو باتنة وبسكرة وتقرت وبشار، إضافة إلى القطار الدولي نحو تونس العاصمة.',
        'لا يقتصر الدليل على عرض مواعيد الانطلاق والوصول بتوقيت الجزائر الرسمي UTC+1، بل يدمج محرك بحث متقدما بين محطتين أو برقم القطار، مع لوحة مخصصة للمحطات تعرض المغادرات والوصول وتساعدك على تحديد أقرب محطة لموقعك عبر GPS.',
        'كما يجمع هذا القسم تفاصيل بطاقات السفر وعروض التخفيض الرسمية الـ 15 المعتمدة لدى SNTF، من بطاقة وقار للمتقاعدين (50%) والبطاقة الخضراء (40%) وبطاقة الشباب 12-28 سنة (20%) وصولا إلى الاشتراك الثنائي ساهلة (قطار + إيتوزا 50%) ومجانية الأطفال دون أربع سنوات.'
      ],
      fr: [
        'L’espace interactif DZ Rail dédié à la SNTF rassemble en un point unique les horaires et liaisons 2026 des cinq réseaux ferroviaires d’Algérie : la banlieue électrifiée d’Alger (Thénia, El Affroun, Zéralda et Aéroport Houari Boumediene), les axes Est (Bouira, Béjaïa, Bordj Bou Arréridj, Sétif, Constantine, Annaba), les axes Ouest (Chlef, Relizane, Oran, Tlemcen), le Sahara et les Hauts Plateaux (Batna, Biskra, Touggourt, Béchar) ainsi que la liaison internationale vers Tunis.',
        'Au-delà des horaires officiels à l’heure d’Algérie (UTC+1), le portail offre une recherche par gare de départ, gare d’arrivée ou numéro de train, une vue interactive de la carte ferroviaire et la détection de la gare la plus proche par géolocalisation.',
        'Vous retrouvez également ci-dessus le tableau complet des 15 cartes de réduction et abonnements officiels SNTF : carte Waqar (-50 %), Carte Verte (-40 %), tarif Jeunes (-20 %), carte bimodale Sahla SNTF-ETUSA (-50 %), tarifs groupes et gratuité totale pour les moins de 4 ans.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'التحقق المسبق من جدول الخط في عارض الجداول الرسمية ومراعاة أيام التشغيل (الرحلات الصحراوية والدولية تعمل أيام محددة في الأسبوع).',
        'اصطحاب بطاقة التعريف البيومترية أو جواز السفر للرحلات الطويلة والخط الدولي عنابة - تونس.',
        'تقديم الوثائق الثبوتية المطلوبة عند اقتناء تذاكر التخفيض (بطاقة التقاعد لوقار، شهادة سن الشباب 12-28 سنة، أو شهادة العمل والدراسة للاشتراكات).',
        'الحضور قبل موعد الانطلاق بـ 20 دقيقة لقطارات الضواحي و45 دقيقة على الأقل للقطارات الليلية والخط الدولي.'
      ],
      fr: [
        'Vérifier les jours de circulation sur la fiche horaire avant le départ, notamment pour les lignes sahariennes et internationales.',
        'Se munir d’une pièce d’identité nationale ou d’un passeport valide pour les grandes lignes et la liaison Annaba-Tunis.',
        'Présenter le justificatif réglementaire au guichet pour bénéficier des 15 formules de réduction (carte de retraite Waqar, carte étudiant, pièce d’âge).',
        'Se présenter en gare au moins 20 minutes avant le départ en banlieue et 45 minutes pour les trains de nuit ou internationaux.'
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'تحديد الشبكة أو البحث من محطة إلى محطة أو برقم القطار',
          fr: 'Filtrer par réseau, par trajet gare à gare ou par numéro de train',
        },
        detail: {
          ar: 'استعمل محرك البحث أعلاه لإدخال محطة المغادرة ومحطة الوصول أو رقم القطار، أو تصفح الشبكات الخمس للانتقال مباشرة إلى جدول الخط.',
          fr: 'Utilisez les champs départ, arrivée ou numéro de train dans l’explorateur, ou ouvrez directement l’une des 5 fiches réseaux.',
        },
      },
      {
        title: {
          ar: 'التحقق من بطاقة التخفيض المناسبة لرحلتك',
          fr: 'Choisir la carte de réduction adaptée parmi les 15 offres SNTF',
        },
        detail: {
          ar: 'راجع جدول بطاقات السفر الـ 15 للتحقق من شروط المسافة (>100 كم أو >200 كم أو >400 كم) ونسب الخصم من 20% إلى 100%.',
          fr: 'Consultez le tableau des 15 cartes tarifaires pour vérifier les seuils kilométriques (>100 km, >200 km, >400 km) et les remises applicables.',
        },
      },
      {
        title: {
          ar: 'اقتناء التذكرة من شباك المحطة ومتابعة التحديثات الموسمية',
          fr: 'Acheter votre titre en gare et surveiller les ajustements saisonniers',
        },
        detail: {
          ar: 'توجه لشباك المحطة لاقتناء التذكرة أو تجديد الاشتراك، وتابع بلاغات SNTF الرسمية في مواسم الصيف وشهر رمضان.' ,
          fr: 'Retirez votre billet ou abonnement au guichet et vérifiez les éventuels ajustements horaires d’été ou de Ramadan sur sntf.dz.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'ملاحظة اختلاف أو تعديل استثنائي في مواعيد القطار',
          fr: 'Modification exceptionnelle d’un horaire par rapport à la fiche publiée',
        },
        solution: {
          ar: 'تحقق من البلاغات الفورية عبر الموقع الرسمي sntf.dz أو مصلحة الاستعلامات بالمحطة، خاصة خلال أيام العطل والأشغال على السكة.',
          fr: 'Vérifiez les avis actualisés sur sntf.dz ou auprès du guichet d’information en gare en période de travaux ou jours fériés.',
        },
      },
      {
        issue: {
          ar: 'عدم توفر رحلة مباشرة بين ولايتين بعيدتين',
          fr: 'Absence de liaison directe entre deux wilayas éloignées',
        },
        solution: {
          ar: 'ابحث عن رحلة بتبديل واحد في المحطات المحورية (مثل أغا، الثنية، قسنطينة، أو وهران) مع مراعاة مهلة تبديل من 30 إلى 180 دقيقة.',
          fr: 'Optez pour une correspondance dans une gare pivot (Agha, Thénia, Constantine ou Oran) en veillant à conserver un délai de 30 à 180 minutes.',
        },
      },
      {
        issue: {
          ar: 'عدم قبول طلب التخفيض عند شباك التذاكر',
          fr: 'Refus d’application d’un tarif réduit au guichet',
        },
        solution: {
          ar: 'تأكد من استيفاء الحد الأدنى للمسافة (100 كم للشباب والفئة 03، و300 كم للجماعات العادية، و400 كم لتذكرة ذهاب-إياب) وإحضار البطاقة سارية المفعول.',
          fr: 'Vérifiez le respect du seuil kilométrique (100 km Jeunes/3ème Âge, 300 km Groupes, 400 km A/R) et présentez une carte en cours de validité.',
        },
      },
    ],
    extraFaqs: [],
  },

  'sntf-trains': {
    intro: {
      ar: [
        'صممت صفحة «رحلتك بالقطار، بخطوات واضحة» لتمنح المسافر الجزائري أداة عملية متكاملة لتخطيط التنقل بالسكك الحديدية عبر التراب الوطني. يمكنك الانطلاق بالبحث بين محطتين أو برقم القطار لمعرفة الرحلات المباشرة ذات مواعيد المغادرة المنشورة، أو رصد إمكانيات التبديل بين قطارين في نفس المحطة ضمن هامش انتظار آمن من 30 إلى 180 دقيقة.',
        'في الخطوة الثانية، توفر البوابة لوحة المحطات التي تقبل التحديد التلقائي عبر الرابط (?station=agha) أو عبر زر «أقرب محطة لموقعي» المعتمد على الإحداثيات الجغرافية، مع فصْل واضح بين قائمة المغادرات ↗ وقائمة الوصول ↙ وخريطة تفاعلية لشبكة المحطات الكبرى.',
        'ولضمان أعلى درجات الدقة المعرفية، نميز في هذه الصفحة بين محطات التوقف الموثقة التي لها توقيت فردي في جدول القطار وبين المحطات المرسومة على مسارات الممر دون توقيت فردي منشور.'
      ],
      fr: [
        'La page « Votre trajet en train étape par étape » centralise les trois outils essentiels pour préparer un déplacement SNTF : la recherche directe de gare à gare ou par numéro de train, le tableau détaillé d’une gare avec géolocalisation et la distinction entre gares à horaires publiés et haltes de corridor.',
        'Le module « Choisir une gare » prend en charge la présélection directe par paramètre d’URL (?station=agha), la recherche textuelle sur 26 gares majeures et le bouton « Gare la plus proche » calculant par GPS l’escale la plus accessible avec séparation nette entre Départs ↗ et Arrivées ↙.',
        'Lorsqu’aucun train direct ne relie votre origine et votre destination, l’outil calcule automatiquement les correspondances en gare dans un battement confortable de 30 à 180 minutes.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'اختيار محطة الانطلاق ومحطة الوصول أو إدخال رقم القطار في قسم «من محطة إلى محطة».',
        'تفعيل خدمة تحديد الموقع في المتصفح عند الرغبة في استخدام زر «أقرب محطة لموقعي».',
        'التحقق من زمن الانتظار عند التبديل في نفس المحطة (30 إلى 180 دقيقة كهامش أمان).',
        'مراجعة جدول الخط الأصلي في صفحة عارض الجداول قبل الانطلاق النهائي للمحطة.'
      ],
      fr: [
        'Indiquer la gare de départ, la gare d’arrivée ou le N° de train dans le moteur supérieur.',
        'Autoriser la géolocalisation si vous souhaitez utiliser le bouton « Gare la plus proche ».',
        'Respecter une marge de correspondance de 30 à 180 minutes en cas de changement de train.',
        'Confirmer l’horaire sur la fiche officielle via le visualiseur avant votre arrivée en gare.'
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'الخطوة 1: من محطة إلى محطة أو برقم القطار',
          fr: 'Étape 1 : Recherche de gare à gare ou par numéro de train',
        },
        detail: {
          ar: 'أدخل اسم محطة البداية والوصول أو رقم الرحلة لتظهر لك كل القطارات المباشرة ومخطط التوقف، أو بدائل التبديل في نفس المحطة.',
          fr: 'Saisissez vos deux gares ou le numéro du train pour afficher les liaisons directes, leurs arrêts et d’éventuelles correspondances.',
        },
      },
      {
        title: {
          ar: 'الخطوة 2: لوحة المحطة والمغادرات ↗ والوصول ↙',
          fr: 'Étape 2 : Ouvrir le tableau d’une gare (Départs & Arrivées)',
        },
        detail: {
          ar: 'اختر المحطة من القائمة أو اضغط على نقطتها في الخريطة التفاعلية أو استعمل زر «أقرب محطة لموقعي» لاستعراض قطاراتها.',
          fr: 'Sélectionnez une gare via la carte, la liste ou la géolocalisation afin de consulter séparément ses départs et arrivées.',
        },
      },
      {
        title: {
          ar: 'الخطوة 3: فحص محطات التوقف والجدول الأصلي',
          fr: 'Étape 3 : Vérifier les arrêts publiés et la fiche horaire',
        },
        detail: {
          ar: 'اعرض سلسلة المحطات الموثقة لكل رحلة وانتقل عند الحاجة إلى «عارض جداول القطارات» لقراءة البطاقة التفصيلية للخط.',
          fr: 'Dépliez les arrêts documentés de chaque trajet et ouvrez le visualiseur si vous souhaitez inspecter la fiche complète de la ligne.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم استجابة زر «أقرب محطة لموقعي» عند الضغط عليه',
          fr: 'Le bouton « Gare la plus proche » ne détecte pas ma position',
        },
        solution: {
          ar: 'تأكد من السماح للمتصفح بقراءة الموقع الجغرافي في إعدادات الخصوصية، أو اكتب اسم ولايتك مباشرة في خانة تصفية المحطات الـ 26.',
          fr: 'Vérifiez l’autorisation de géolocalisation dans votre navigateur ou saisissez directement votre wilaya dans le champ de recherche de gare.',
        },
      },
      {
        issue: {
          ar: 'عدم ظهور إحدى المحطات الفرعية الصغيرة في قائمة الرحلات المباشرة',
          fr: 'Une petite halte locale n’apparaît pas avec un horaire dédié',
        },
        solution: {
          ar: 'تظهر في جدول التوقيت فقط المحطات التي نشرت SNTF توقيت توقفها الرسمي، بينما تدرج التوقفات الوسيطة المرسومة في المخطط ضمن قسم الملاحظات المنفصل.',
          fr: 'Seules les gares disposant d’un horaire transcrit s’affichent dans le tableau horaire ; les haltes de schéma figurent dans la section dédiée.',
        },
      },
    ],
    extraFaqs: [],
  },

  'sntf-trip': {
    intro: {
      ar: [
        'يجمع دليل مسارات القطارات والمحطات الكبرى وبطاقات التخفيض SNTF النظرة الاستراتيجية الشاملة على الشبكة الحديدية الجزائرية الممتدة من الشرق إلى الغرب ومن الساحل المتوسطي إلى عمق الصحراء.',
        'يضم الدليل قاعدة تضم 26 محطة رئيسية مع إحداثياتها الجغرافية، إضافة إلى استعراض كامل لبطاقات السفر الـ 15 المخصصة للمتقاعدين (وقار)، الشباب، الجماعات، الطلبة، ذوي الاحتياجات الخاصة، ومستخدمي النقل المزدوج قطار + حافلة إيتوزا (ساهلة).',
        'استعمل الجداول والأدوات التفاعلية أعلاه لتحديد أنسب مسار وبطاقة تخفيض توفر عليك حتى 50% من تكاليف التنقل اليومي أو ما بين الولايات.'
      ],
      fr: [
        'Le guide des lignes, gares et cartes de réduction SNTF offre une vue complète du réseau ferroviaire algérien, des rames électriques suburbaines aux lignes rapides Coradia, trains de nuit sahariens et liaison transfrontalière vers Tunis.',
        'Il répertorie les 26 gares pivots du pays avec leurs dessertes ainsi que l’intégralité des 15 cartes tarifaires SNTF destinées aux retraités, jeunes, groupes associatifs ou sportifs, étudiants et navetteurs bimodaux.',
        'Consultez les tableaux ci-dessus pour associer le bon itinéraire à la formule d’abonnement la plus avantageuse.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'صورة شمسية حديثة ونسخة من بطاقة التعريف الوطنية عند طلب بطاقة اشتراك شهرية أو سنوية.',
        'شهادة التقاعد لبطاقة وقار، أو شهادة التمدرس/التكوين أو العمل للاشتراكات المهنية والطلابية.',
        'الالتزام بشروط المسافة القانونية لكل عرض تخفيض قبل طلب التذكرة من شباك المحطة.'
      ],
      fr: [
        'Une photo d’identité récente et une copie de la CNIBE pour établir une carte d’abonnement nominative.',
        'Attestation de retraite (Waqar), certificat de scolarité ou attestation de travail selon la formule demandée.',
        'Respect des conditions de distance minimale exigées pour chaque carte de réduction.'
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'استكشاف المحطات الـ 26 ومعرفة الخطوط المارة بها',
          fr: 'Explorer les 26 gares principales et leurs correspondances',
        },
        detail: {
          ar: 'حدد محطتك من القائمة المنسدلة أو الخريطة لمراجعة مواعيد المغادرة والوصول المرتبطة بها.',
          fr: 'Sélectionnez votre gare dans la liste ou sur la carte interactive pour afficher toutes ses liaisons.',
        },
      },
      {
        title: {
          ar: 'مقارنة عروض التخفيض الـ 15 وتجهيز ملف البطاقة',
          fr: 'Comparer les 15 cartes tarifaires et préparer le dossier au guichet',
        },
        detail: {
          ar: 'استخدم جدول البطاقات لتحديد العرض الأنسب لوضعك (وقار، الخضراء، الضواحي، ساهلة، الشباب، أو الجماعات).',
          fr: 'Comparez les conditions d’accès dans le tableau officiel des 15 cartes puis présentez vos justificatifs au guichet SNTF.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'الخلط بين بطاقة الضواحي في العاصمة والولايات الأخرى',
          fr: 'Confusion entre la Carte Verte d’Alger et la carte Banlieues régionales',
        },
        solution: {
          ar: 'البطاقة الخضراء تخص قطارات الضاحية الكهربائية بالجزائر العاصمة فقط بتخفيض 40%، أما بطاقة الضواحي فتشمل خطوط عنابة وقسنطينة ووهران بتخفيض 40% كذلك.',
          fr: 'La Carte Verte (-40 %) s’applique aux trains électriques de la banlieue d’Alger, tandis que la carte Banlieues (-40 %) couvre Annaba, Constantine et Oran.',
        },
      },
    ],
    extraFaqs: [],
  },
};
