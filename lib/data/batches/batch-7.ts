import { SectorItem, RichGuideContent } from '../../types';

export const batch7Sectors: SectorItem[] = [
  // 49. naftal
  {
    id: 'naftal',
    slug: 'naftal',
    category: 'energy_water',
    name: {
      ar: 'الشركة الوطنية لتسويق وتوزيع المنتجات البترولية (نفطال)',
      fr: 'Naftal — Distribution Pétrolière, GPL & Service Mahatati',
    },
    acronym: 'NAFTAL',
    ministry: {
      ar: 'قطاع الطاقة والمناجم (مجمع سوناطراك)',
      fr: 'Secteur de l’Énergie et des Mines (Groupe Sonatrach)',
    },
    description: {
      ar: 'الخدمات الرقمية للشركة الوطنية نفطال (Naftal): التسجيل والحجز المسبق في بوابة محطتي (E-Mahata) لاقتناء عجلات السيارات بأسعار مقننة، تحميل تطبيق نفطال خدمات لتحديد أقرب محطات الوقود ومراكز تحويل الغاز سيرغاز GPL، والتواصل مع مركز خدمة الزبائن عبر الرقم الأخضر 3305.',
      fr: 'Téléservices officiels de la société nationale Naftal : préinscription sur la plateforme E-Mahata pour l’achat de pneumatiques, géolocalisation des stations-service, bornes de recharge et centres GPL Sirghaz via l’application Naftal Khadamat, et assistance client au numéro court 3305.',
    },
    officialUrl: 'https://www.naftal.dz/',
    portalUrl: 'https://e-mahata.naftal.dz/',
    iconName: 'Fuel',
    isPopular: false,
    services: [
      {
        id: 'naftal-srv-1',
        title: {
          ar: 'الموقع الرسمي للشركة الوطنية نفطال',
          fr: 'Site Officiel de Naftal',
        },
        description: {
          ar: 'البوابة المؤسساتية للاطلاع على خدمات الوقود، زيوت التشحيم، بطاقات الدفع Naftal Card، ومراكز تحويل المركبات إلى غاز البترول المميع GPL.',
          fr: 'Portail officiel présentant les carburants, lubrifiants, cartes prépayées Naftal Card et centres de conversion GPL/Sirghaz.',
        },
        url: 'https://www.naftal.dz/',
        isOnline: true,
      },
      {
        id: 'naftal-srv-2',
        title: {
          ar: 'منصة «محطتي» لاقتناء عجلات السيارات (E-Mahata)',
          fr: 'Plateforme E-Mahata — Commande de Pneumatiques',
        },
        description: {
          ar: 'خدمة رقمية تتيح لأصحاب المركبات التسجيل عن بعد وحجز موعد لاقتناء إطارات السيارات في نقاط البيع المعتمدة لنفطال.',
          fr: 'Téléservice permettant aux automobilistes de s’inscrire en ligne et de réserver un créneau d’achat de pneus dans les points Naftal.',
        },
        url: 'https://e-mahata.naftal.dz/',
        isOnline: true,
      },
      {
        id: 'naftal-srv-3',
        title: {
          ar: 'تطبيق نفطال خدمات (Naftal Khadamat)',
          fr: 'Application Mobile Naftal Khadamat',
        },
        description: {
          ar: 'تطبيق هاتفي لتحديد موقع أقرب محطات الوقود والخدمات، نقاط بيع قارورات غاز البوتان، ومراكز التركيب والصيانة عبر ولايات الوطن.',
          fr: 'Application Android de géolocalisation des stations-service Naftal, dépôts de bouteilles de gaz et ateliers de conversion Sirghaz.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.naftal.apps.naftalkhadamat&hl=AR',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'ملاك السيارات والمركبات النفعية، المهنيون، سائقو النقل، والمؤسسات المتعاقدة ببطاقة الوقود نفطال',
        fr: 'Automobilistes particuliers, transporteurs professionnels et entreprises titulaires de la carte carburant Naftal',
      },
      processingTime: {
        ar: 'تأكيد فوري لحجز التسجيل في منصة محطتي وتحديد نقاط الخدمة؛ استلام العجلات أو تركيب سيرغاز وفق موعد المحطة المعنية',
        fr: 'Confirmation immédiate de l’inscription sur E-Mahata ; retrait des pneumatiques ou montage GPL selon le rendez-vous confirmé',
      },
      fees: {
        ar: 'التسجيل في بوابة محطتي وتطبيق نفطال خدمات والاتصال بالرقم 3305 مجاني؛ يدفع المواطن ثمن المنتج أو الخدمة فقط في المحطة',
        fr: 'Inscription E-Mahata et application Naftal Khadamat gratuites ; règlement uniquement des produits ou prestations en station',
      },
      channel: {
        ar: 'بوابة e-mahata.naftal.dz، تطبيق نفطال خدمات، ومركز الاتصال لخدمة الزبائن على الرقم 3305',
        fr: 'Portail e-mahata.naftal.dz, application Naftal Khadamat et centre d’appels client au 3305',
      },
      keyRequirement: {
        ar: 'البطاقة الرمادية للمركبة ومقاس العجلات المطلوب مع بطاقة التعريف الوطنية عند التسجيل في محطتي والاستلام',
        fr: 'Carte grise du véhicule, dimensions exactes des pneumatiques et CNIBE lors de la réservation et du retrait en station',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق المركبة لحجز العجلات عبر محطتي',
          fr: 'Documents du véhicule pour E-Mahata',
        },
        value: {
          ar: 'البطاقة الرمادية سارية المفعول، رقم اللوحة، رقم الهيكل، ومطابقة مقاسات العجلات المدخلة في المنصة',
          fr: 'Carte grise en cours de validité, numéro d’immatriculation, numéro de châssis et dimensions conformes des pneus',
        },
      },
      {
        label: {
          ar: 'بيانات التعريف والاتصال للمستفيد',
          fr: 'Identité et coordonnées du bénéficiaire',
        },
        value: {
          ar: 'رقم التعريف الوطني ورقم هاتف نشط لاستقبال رسالة تأكيد الموعد وتفاصيل المحطة المخصصة للاستلام',
          fr: 'Numéro d’identification national et ligne mobile active pour recevoir le SMS de convocation en point de vente',
        },
      },
      {
        label: {
          ar: 'شروط تركيب نظام الغاز المميع سيرغاز GPL',
          fr: 'Critères d’installation Sirghaz GPL',
        },
        value: {
          ar: 'توفر محرك بنزين سليم تقنيا وتقديم ملف السيارة لدى مركز تحويل معتمد لنفطال للاستفادة من التركيب والمطابقة',
          fr: 'Véhicule à motorisation essence en bon état mécanique présenté dans un centre de conversion agréé Naftal',
        },
      },
      {
        label: {
          ar: 'تحديد الموقع عبر تطبيق نفطال خدمات',
          fr: 'Géolocalisation sur Naftal Khadamat',
        },
        value: {
          ar: 'تفعيل خدمة تحديد الموقع GPS في الهاتف للبحث الآني عن المحطات المزودة بالوقود والغاز والخدمات الميكانيكية السريعة',
          fr: 'Activation du GPS mobile pour localiser instantanément les carburants disponibles, stations GPL et services rapides',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أسجل في منصة محطتي التابعة لنفطال لاقتناء عجلات السيارات؟',
          fr: 'Comment s’inscrire sur la plateforme E-Mahata de Naftal pour acheter des pneus ?',
        },
        answer: {
          ar: 'ادخل إلى e-mahata.naftal.dz، أدخل بيانات المركبة من البطاقة الرمادية، اختر قياس العجلات والولاية، ثم احتفظ بوصل التسجيل لانتظار إشعار موعد التركيب في المحطة.',
          fr: 'Accédez à e-mahata.naftal.dz, saisissez les références de la carte grise et le format des pneus, puis choisissez votre wilaya afin de recevoir la date de passage en station.',
        },
      },
      {
        question: {
          ar: 'هل يمكن دفع ثمن الوقود أو العجلات في محطات نفطال بالبطاقة البنكية أو الذهبية؟',
          fr: 'Les stations Naftal acceptent-elles le paiement électronique TPE par carte Edahabia ou CIB ?',
        },
        answer: {
          ar: 'نعم، جهزت أغلب محطات نفطال عبر الوطن بأجهزة الدفع الإلكتروني TPE التي تقبل البطاقة الذهبية لبريد الجزائر، بطاقات CIB البنكية، وبطاقات نفطال للمهنيين.',
          fr: 'Oui, la majorité du réseau Naftal est équipée de terminaux de paiement électronique (TPE) acceptant les cartes Edahabia, CIB et cartes prépayées Naftal.',
        },
      },
      {
        question: {
          ar: 'ما هي الخدمات التي يوفرها تطبيق نفطال خدمات على الهاتف؟',
          fr: 'À quoi sert l’application mobile Naftal Khadamat ?',
        },
        answer: {
          ar: 'يساعد التطبيق على إيجاد أقرب محطة وقود أو مركز تحويل سيرغاز GPL، معرفة أنواع الوقود والزيوت المتوفرة، وتحديد مواقيت العمل ومسار الوصول عبر الخريطة.',
          fr: 'Elle permet de trouver la station la plus proche selon le carburant recherché, localiser les ateliers Sirghaz GPL et consulter les services disponibles sur place.',
        },
      },
      {
        question: {
          ar: 'ما هو رقم خدمة الزبائن للتبليغ عن نقص التزويد أو الاستفسار لدى نفطال؟',
          fr: 'Quel numéro appeler pour joindre le service client de Naftal ?',
        },
        answer: {
          ar: 'خصصت الشركة الرقم القصير 3305 لاستقبال استفسارات الزبائن، ملاحظات الخدمة، والشكاوى المتعلقة بالمحطات ومراكز التوزيع.',
          fr: 'Naftal met à disposition le numéro court 3305 pour toute demande d’information, réclamation qualité ou assistance liée au réseau de distribution.',
        },
      },
    ],
  },

  // 50. nifenligne
  {
    id: 'nifenligne',
    slug: 'nifenligne',
    category: 'finance_economy',
    name: {
      ar: 'منصة الترقيم الجبائي عبر الإنترنت وبوابة جبايتيك (NIF En Ligne)',
      fr: 'Portail Numéro d’Identification Fiscale & Jibaya’tic (DGI)',
    },
    acronym: 'NIF DGI',
    ministry: {
      ar: 'المديرية العامة للضرائب — وزارة المالية',
      fr: 'Direction Générale des Impôts — Ministère des Finances',
    },
    description: {
      ar: 'البوابة الرقمية الرسمية للمديرية العامة للضرائب لطلب، متابعة، تعديل، وطباعة شهادة الترقيم الجبائي (NIF) عن بعد للأشخاص الطبيعيين والمعنويين، والتحقق من مصادقة الأرقام الجبائية، مع الربط المباشر ببوابة التصريح والدفع الضريبي عن بعد «جبايتيك Jibaya’tic».',
      fr: 'Téléservice officiel de la Direction Générale des Impôts (DGI) dédié à la demande, au suivi, à la modification et à l’impression de l’attestation du Numéro d’Identification Fiscale (NIF) pour personnes physiques et morales, avec vérification en ligne et accès à la télédéclaration Jibaya’tic.',
    },
    officialUrl: 'https://nifenligne.mf.gov.dz/DIDindexAr.asp',
    portalUrl: 'https://nifenligne.mf.gov.dz/DIDindexDemande2Ar.asp',
    iconName: 'FileCheck',
    isPopular: true,
    services: [
      {
        id: 'nifenligne-srv-1',
        title: {
          ar: 'البوابة الرئيسية للترقيم الجبائي عبر الإنترنت (NIF En Ligne)',
          fr: 'Accueil Officiel du Portail NIF En Ligne',
        },
        description: {
          ar: 'المدخل الموحد لجميع خدمات الترقيم الجبائي الإلكتروني، الأدلة التنظيمية، واستمارات الإجراءات الضريبية.',
          fr: 'Interface d’entrée centrale vers l’ensemble des démarches d’immatriculation fiscale de la DGI.',
        },
        url: 'https://nifenligne.mf.gov.dz/DIDindexAr.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-2',
        title: {
          ar: 'مركز طلبات الترقيم الجبائي للأشخاص الطبيعيين والمعنويين',
          fr: 'Espace Central des Demandes de NIF',
        },
        description: {
          ar: 'صفحة اختيار نوع الطلب الجبائي (شخص طبيعي أو شركة)، المتابعة، الطباعة، أو استرجاع رقم الطلب.',
          fr: 'Menu complet regroupant la création, le suivi, l’édition et la récupération des dossiers NIF.',
        },
        url: 'https://nifenligne.mf.gov.dz/DIDindexDemande2Ar.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-3',
        title: {
          ar: 'طلب رقم التعريف الجبائي لشخص معنوي (شركات ومؤسسات)',
          fr: 'Demande de NIF — Personne Morale (Sociétés)',
        },
        description: {
          ar: 'استمارة تسجيل الشركات التجارية، الجمعيات، والمؤسسات ذات الشخصية المعنوية للحصول على الرقم الجبائي NIF.',
          fr: 'Formulaire d’immatriculation fiscale réservé aux SARL, EURL, SPA, associations et entités morales.',
        },
        url: 'https://nifenligne.mf.gov.dz/PM/ChoixMorale.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-4',
        title: {
          ar: 'طلب رقم التعريف الجبائي لشخص طبيعي (تجار، مهن حرة ومقاولون)',
          fr: 'Demande de NIF — Personne Physique (Commerçants & Libéraux)',
        },
        description: {
          ar: 'نموذج طلب الرقم الجبائي للأفراد الممارسين لنشاط تجاري، حرفي، مهنة حرة، أو نشاط المقاول الذاتي.',
          fr: 'Formulaire dédié aux entrepreneurs individuels, artisans, professions libérales et auto-entrepreneurs.',
        },
        url: 'https://nifenligne.mf.gov.dz/PPH/FormulairePhysique.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-5',
        title: {
          ar: 'متابعة طلب الترقيم الجبائي لشخص معنوي',
          fr: 'Suivi de Demande NIF — Personne Morale',
        },
        description: {
          ar: 'مراقبة مرحلة معالجة ملف الترقيم الجبائي للشركات لدى مفتشية أو مديرية الضرائب المختصة.',
          fr: 'Vérification de l’état d’instruction d’un dossier d’immatriculation fiscale de personne morale.',
        },
        url: 'https://nifenligne.mf.gov.dz/PM/voirEtatPM.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-6',
        title: {
          ar: 'متابعة طلب الترقيم الجبائي لشخص طبيعي',
          fr: 'Suivi de Demande NIF — Personne Physique',
        },
        description: {
          ar: 'الاستعلام عن قبول أو جاهزية بطاقة الترقيم الجبائي للأشخاص الطبيعيين باستخدام رقم الطلب.',
          fr: 'Consultation de la validation et de la disponibilité du NIF pour les personnes physiques.',
        },
        url: 'https://nifenligne.mf.gov.dz/PPH/voiretatPNIF.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-7',
        title: {
          ar: 'طباعة شهادة الترقيم الجبائي لشخص معنوي',
          fr: 'Impression Attestation NIF — Personne Morale',
        },
        description: {
          ar: 'استخراج وطباعة البطاقة أو الشهادة المؤقتة والنهائية للترقيم الجبائي للمؤسسات والشركات.',
          fr: 'Édition et impression de l’attestation d’immatriculation fiscale des sociétés validées.',
        },
        url: 'https://nifenligne.mf.gov.dz/PM/editMorNIF.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-8',
        title: {
          ar: 'طباعة شهادة الترقيم الجبائي لشخص طبيعي',
          fr: 'Impression Attestation NIF — Personne Physique',
        },
        description: {
          ar: 'تحميل وطباعة شهادة رقم التعريف الجبائي للأشخاص الطبيعيين فور المصادقة عليها من مصلحة الضرائب.',
          fr: 'Téléchargement et impression du certificat NIF pour les entrepreneurs et professions indépendantes.',
        },
        url: 'https://nifenligne.mf.gov.dz/PPH/ChoixeditionPP.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-9',
        title: {
          ar: 'تعديل طلب رقم التعريف الجبائي لشخص معنوي',
          fr: 'Modification de Demande NIF — Personne Morale',
        },
        description: {
          ar: 'تصحيح أو تحيين معطيات الطلب الجبائي للشركات قبل المصادقة النهائية لدى مصلحة الجباية.',
          fr: 'Mise à jour des données d’une demande fiscale d’entreprise avant validation définitive.',
        },
        url: 'https://nifenligne.mf.gov.dz/PM/AutupPM.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-10',
        title: {
          ar: 'تعديل طلب رقم التعريف الجبائي لشخص طبيعي',
          fr: 'Modification de Demande NIF — Personne Physique',
        },
        description: {
          ar: 'تحيين معلومات النشاط أو العنوان في طلب الترقيم الجبائي المودع من طرف الشخص الطبيعي.',
          fr: 'Correction des informations d’état civil, d’adresse ou d’activité dans une demande personne physique.',
        },
        url: 'https://nifenligne.mf.gov.dz/PPH/AutupPH.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-11',
        title: {
          ar: 'استرجاع رقم طلب الترقيم الجبائي لشخص معنوي',
          fr: 'Récupération N° de Demande NIF — Personne Morale',
        },
        description: {
          ar: 'استعادة رقم الملف الضريبي المفقود للشركات قصد متابعة الطلب أو طباعة الشهادة.',
          fr: 'Service de récupération de la référence d’enregistrement perdue pour une société.',
        },
        url: 'https://nifenligne.mf.gov.dz/PM/AutrecpnumdemPM.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-12',
        title: {
          ar: 'استرجاع رقم طلب الترقيم الجبائي لشخص طبيعي',
          fr: 'Récupération N° de Demande NIF — Personne Physique',
        },
        description: {
          ar: 'استرجاع رمز التتبع الخاص بطلب الترقيم الجبائي المسجل لشخص طبيعي في حال ضياع الوصل.',
          fr: 'Outil permettant de retrouver un numéro de dossier NIF personne physique égaré.',
        },
        url: 'https://nifenligne.mf.gov.dz/PPH/AutrecpnumdemPH.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-13',
        title: {
          ar: 'استرجاع وصل استلام طلب الترقيم الجبائي لشخص معنوي',
          fr: 'Réédition Récépissé NIF — Personne Morale',
        },
        description: {
          ar: 'إعادة طباعة وصل إيداع الطلب الجبائي للشركات عند الحاجة إلى تقديمه للمصالح الضريبية أو البنوك.',
          fr: 'Réimpression du récépissé officiel de dépôt de demande NIF pour les sociétés.',
        },
        url: 'https://nifenligne.mf.gov.dz/PM/AuteditMacc.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-14',
        title: {
          ar: 'استرجاع وصل استلام طلب الترقيم الجبائي لشخص طبيعي',
          fr: 'Réédition Récépissé NIF — Personne Physique',
        },
        description: {
          ar: 'إعادة استخراج وصل تسجيل طلب الرقم الجبائي للشخص الطبيعي بصيغة جاهزة للطباعة.',
          fr: 'Réimpression du récépissé de dépôt NIF pour les commerçants et indépendants.',
        },
        url: 'https://nifenligne.mf.gov.dz/PPH/AuteditPHacc.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-15',
        title: {
          ar: 'التحقق من مصادقة وصحة رقم التعريف الجبائي (NIF)',
          fr: 'Vérification d’Authenticité d’un NIF',
        },
        description: {
          ar: 'أداة فورية للتحقق من سريان وصحة الرقم الجبائي لأي متعامل اقتصادي قبل إبرام العقود أو الفوترة.',
          fr: 'Module de contrôle instantané permettant de vérifier la validité fiscale d’un partenaire avant facturation.',
        },
        url: 'https://nifenligne.mf.gov.dz/nif.asp',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-16',
        title: {
          ar: 'بوابة الخدمات الضريبية الرقمية «جبايتيك» (Jibaya’tic)',
          fr: 'Portail de Télédéclaration et Télépaiement Jibaya’tic',
        },
        description: {
          ar: 'البوابة الإلكترونية للتصريح الجبائي الشهري والفصلي (G50) وتسديد الضرائب عن بعد للمؤسسات والمكلفين.',
          fr: 'Plateforme officielle de télédéclaration fiscale (G50, bilans) et de règlement électronique des impôts.',
        },
        url: 'https://jibayatic.mf.gov.dz/#/Logon',
        isOnline: true,
      },
      {
        id: 'nifenligne-srv-17',
        title: {
          ar: 'التواصل مع فريق دعم الترقيم الجبائي',
          fr: 'Support Technique — Équipe NIF DGI',
        },
        description: {
          ar: 'نموذج التواصل الرسمي مع مصالح المديرية العامة للضرائب لحل إشكالات الترقيم الجبائي وتطابق البيانات.',
          fr: 'Canal d’assistance officiel de la DGI pour résoudre les blocages d’immatriculation ou de modification NIF.',
        },
        url: 'https://nifenligne.mf.gov.dz/DIDindexContacterAr.asp',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الشركات والمؤسسات (أشخاص معنويون)، التجار، الحرفيون، المهن الحرة، المقاولون الذاتيون، والموثقون التجاريون',
        fr: 'Sociétés (personnes morales), commerçants, artisans, professions libérales, auto-entrepreneurs et partenaires économiques',
      },
      processingTime: {
        ar: 'تقديم فوري للطلب عبر الإنترنت؛ تصدر المصادقة النهائية للرقم الجبائي بعد مطابقة الوثائق في مفتشية الضرائب خلال أيام عمل قليلة',
        fr: 'Dépôt immédiat en ligne ; validation définitive et édition du NIF sous quelques jours après contrôle du service des impôts',
      },
      fees: {
        ar: 'طلب الترقيم الجبائي، التعديل، التحقق، والطباعة عبر بوابة NIF En Ligne مجاني بالكامل بدون أي رسوم',
        fr: 'L’ensemble des démarches d’immatriculation, modification, vérification et impression NIF en ligne est gratuit',
      },
      channel: {
        ar: 'بوابة nifenligne.mf.gov.dz، بوابة جبايتيك jibayatic.mf.gov.dz، ومراكز ومفتشيات الضرائب التابعة للمديرية العامة للضرائب DGI',
        fr: 'Portails nifenligne.mf.gov.dz, jibayatic.mf.gov.dz et inspections ou centres des impôts (CDI / CPI) de la DGI',
      },
      keyRequirement: {
        ar: 'السجل التجاري الإلكتروني أو الاعتماد المهني، بطاقة التعريف الوطنية أو القانون الأساسي للشركة، وعقد مقر النشاط',
        fr: 'Registre de commerce électronique ou agrément, CNIBE ou statuts de société, et justificatif d’adresse du siège professionnel',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق الشخص الطبيعي (التجار والحرفيون والمقاولون)',
          fr: 'Pièces pour Personne Physique',
        },
        value: {
          ar: 'السجل التجاري أو بطاقة الحرفي أو بطاقة المقاول الذاتي، شهادة الميلاد، بطاقة التعريف الوطنية، وعقد الإيجار أو الملكية لمقر النشاط',
          fr: 'Registre de commerce, carte d’artisan ou d’auto-entrepreneur, acte de naissance, CNIBE et justificatif de domiciliation',
        },
      },
      {
        label: {
          ar: 'وثائق الشخص المعنوي (الشركات والجمعيات)',
          fr: 'Pièces pour Personne Morale',
        },
        value: {
          ar: 'القانون الأساسي الموثق للشركة، السجل التجاري الإلكتروني، محضر تعيين المسير، وعقد ملكية أو إيجار المقر الاجتماعي',
          fr: 'Statuts notariés, registre de commerce électronique, mandat du gérant et bail commercial ou acte de propriété du siège social',
        },
      },
      {
        label: {
          ar: 'بيانات المتابعة والطباعة وإعادة الاسترجاع',
          fr: 'Références de suivi et d’édition',
        },
        value: {
          ar: 'الاحتفاظ برقم الطلب وتاريخ التسجيل ورقم السجل التجاري عند استخدام خدمات المتابعة أو استرجاع الوصل الضائع',
          fr: 'Conserver impérativement le numéro de demande, la date de saisie et la référence RC pour suivre ou rééditer l’attestation',
        },
      },
      {
        label: {
          ar: 'شروط الانخراط في بوابة جبايتيك',
          fr: 'Accès à Jibaya’tic après obtention du NIF',
        },
        value: {
          ar: 'استعمال الرقم الجبائي المصادق عليه NIF والمادة الضريبية لطلب تفعيل حساب التصريح الإلكتروني لدى مركز الضرائب التابع له',
          fr: 'Une fois le NIF validé, demander l’activation de votre compte télédéclaration G50 auprès de votre CDI ou CPI de rattachement',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين رقم التعريف الجبائي (NIF) ورقم المادة الضريبية؟',
          fr: 'Quelle différence entre le NIF et l’Article d’Imposition ?',
        },
        answer: {
          ar: 'رقم التعريف الجبائي NIF هو معرف وطني موحد مكون من 15 إلى 20 رقما يرافق المكلف طوال نشاطه، أما رقم المادة الضريبية (AI) فيرتبط بمكان ممارسة النشاط ومفتشية الضرائب الإقليمية.',
          fr: 'Le NIF est l’identifiant fiscal national unique de l’opérateur sur tout son parcours, tandis que l’Article d’Imposition rattache fiscalement l’établissement à sa circonscription locale.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من صحة الرقم الجبائي لمورد أو زبون قبل توقيع فاتورة؟',
          fr: 'Comment vérifier la validité du NIF d’un fournisseur ou client ?',
        },
        answer: {
          ar: 'تتيح البوابة خدمة التحقق الفوري عبر الرابط nif.asp؛ يكفي إدخال رقم التعريف الجبائي للتحقق من تفعيله القانوني واسم المتعامل المسجل.',
          fr: 'Rendez-vous sur la page nif.asp et saisissez le numéro NIF à contrôler : le système affiche immédiatement le statut d’immatriculation et la raison sociale enregistrée.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تعديل طلب الترقيم الجبائي بعد إرساله عبر الإنترنت؟',
          fr: 'Peut-on modifier une demande de NIF déjà soumise en ligne ?',
        },
        answer: {
          ar: 'نعم، ما دام الطلب قيد المعالجة ولم يتم تأكيده نهائيا، توفر المنصة روابط تعديل مخصصة للشخص الطبيعي والشخص المعنوي باستعمال رقم الطلب وكلمة العبور.',
          fr: 'Oui, tant que le dossier n’est pas validé définitivement par l’inspecteur, les modules AutupPH et AutupPM permettent de corriger les informations saisies.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا أضعت رقم الطلب أو وصل إيداع الترقيم الجبائي؟',
          fr: 'Comment retrouver un numéro de demande ou récépissé NIF égaré ?',
        },
        answer: {
          ar: 'استعمل خدمة استرجاع رقم الطلب أو خدمة إعادة طباعة وصل الاستلام المتوفرة لكل من الأشخاص الطبيعيين والمعنويين عبر إدخال رقم السجل التجاري أو رقم الهوية.',
          fr: 'Utilisez les formulaires dédiés de récupération de numéro de demande et de réédition de récépissé en saisissant votre numéro de registre de commerce ou identifiant civil.',
        },
      },
    ],
  },

  // 51. ocrc
  {
    id: 'ocrc',
    slug: 'ocrc',
    category: 'justice_interior',
    name: {
      ar: 'الديوان المركزي لقمع الفساد (OCRC)',
      fr: 'Office Central de Répression de la Corruption (OCRC)',
    },
    acronym: 'OCRC',
    ministry: {
      ar: 'العدالة والأمن المالي ومكافحة الفساد',
      fr: 'Justice & Sécurité Économique et Financière',
    },
    description: {
      ar: 'البوابة الرسمية للديوان المركزي لقمع الفساد في الجزائر (OCRC): إيداع البلاغات والشكاوى حول قضايا الرشوة، تبديد المال العام، الصفقات العمومية المشبوهة، والجرائم الاقتصادية والمالية مع ضمان السرية التامة وحماية المبلغين وفق التشريع الوطني.',
      fr: 'Portail officiel de l’Office Central de Répression de la Corruption (OCRC) en Algérie : dépôt confidentiel de signalements et plaintes liés aux faits de corruption, détournement de deniers publics, fraudes aux marchés publics et infractions financières.',
    },
    officialUrl: 'https://www.ocrc.gov.dz/ar',
    portalUrl: 'https://www.ocrc.gov.dz/ar/%D8%AA%D9%82%D8%AF%D9%8A%D9%85-%D8%B4%D9%83%D9%88%D9%89',
    iconName: 'ShieldAlert',
    isPopular: false,
    services: [
      {
        id: 'ocrc-srv-1',
        title: {
          ar: 'الموقع الرسمي للديوان المركزي لقمع الفساد',
          fr: 'Site Officiel de l’OCRC Algérie',
        },
        description: {
          ar: 'المنصة المؤسساتية للتعريف بمهام الديوان، آليات التحري في الجرائم الاقتصادية والمالية، والنصوص القانونية لحماية المبلغين والشهود.',
          fr: 'Portail institutionnel détaillant les attributions de l’office, les mécanismes d’enquête et le cadre légal de protection des lanceurs d’alerte.',
        },
        url: 'https://www.ocrc.gov.dz/ar',
        isOnline: true,
      },
      {
        id: 'ocrc-srv-2',
        title: {
          ar: 'منصة تقديم شكوى أو التبليغ عن الفساد',
          fr: 'Dépôt d’une Plainte ou Signalement en Ligne',
        },
        description: {
          ar: 'نموذج رقمي مؤمن لتقديم الشكاوى والبلاغات الموثقة حول وقائع الفساد والجرائم المرتبطة بالوظيفة والمال العام بسرية كاملة.',
          fr: 'Formulaire électronique sécurisé pour transmettre un signalement documenté portant sur des actes de corruption ou atteintes aux deniers publics.',
        },
        url: 'https://www.ocrc.gov.dz/ar/%D8%AA%D9%82%D8%AF%D9%8A%D9%85-%D8%B4%D9%83%D9%88%D9%89',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون، الموظفون العموميون، المتعاملون الاقتصاديون، والشهود المبلغون عن وقائع الفساد المالي والإداري',
        fr: 'Citoyens, agents publics, opérateurs économiques et témoins signalant des faits de corruption financière ou administrative',
      },
      processingTime: {
        ar: 'استلام فوري للبلاغ عبر المنصة؛ فرز ودراسة الوقائع وتحريك التحريات القانونية من طرف فرق الديوان المختصة حسب درجة الخطورة',
        fr: 'Réception immédiate en ligne ; analyse préliminaire et ouverture des investigations par les brigades spécialisées selon les éléments fournis',
      },
      fees: {
        ar: 'خدمة التبليغ وتقديم الشكاوى والمرافقة القانونية لدى الديوان المركزي لقمع الفساد مجانية تماما',
        fr: 'Le dépôt de plainte ou de signalement auprès de l’OCRC est entièrement gratuit',
      },
      channel: {
        ar: 'البوابة الإلكترونية ocrc.gov.dz، المقر المركزي بالجزائر العاصمة، والفروع الجهوية للديوان',
        fr: 'Portail ocrc.gov.dz, siège central à Alger et antennes régionales de l’office',
      },
      keyRequirement: {
        ar: 'وصف دقيق للوقائع وتاريخها ومكانها مع إرفاق أي مستندات أو قرائن متاحة تدعم جدية التبليغ',
        fr: 'Exposé factuel et précis des événements (dates, lieux, personnes ou entités) appuyé si possible par des pièces justificatives',
      },
    },
    requirements: [
      {
        label: {
          ar: 'بيانات المبلغ ووسيلة الاتصال (مع خيار الحماية)',
          fr: 'Coordonnées et protection du déclarant',
        },
        value: {
          ar: 'تحديد وسيلة اتصال آمنة عند الرغبة في متابعة الشكوى، مع التزام القانون بحماية هوية المبلغين والشهود في القضايا الحساسة',
          fr: 'Renseigner un canal de contact sécurisé pour le suivi, tout en bénéficiant des garanties légales de confidentialité et de protection',
        },
      },
      {
        label: {
          ar: 'طبيعة الجريمة أو التجاوز المبلغ عنه',
          fr: 'Qualification des faits signalés',
        },
        value: {
          ar: 'توضيح نوع الفعل المشتبه فيه (رشوة، محاباة في صفقات عمومية، اختلاس أموال، استغلال نفوذ، أو إثراء غير مشروع)',
          fr: 'Préciser la nature des faits (corruption active/passive, favoritisme dans les marchés publics, détournement, trafic d’influence)',
        },
      },
      {
        label: {
          ar: 'الأدلة والقرائن الداعمة للشكوى',
          fr: 'Éléments probants et documents annexes',
        },
        value: {
          ar: 'إرفاق نسخ من المراسلات، العقود، قرارات الترسية، أو تسجيلات ومستندات محاسبية تثبت جدية البلاغ وتفادي البلاغات الكيدية',
          fr: 'Joindre tout document utile (contrats, décisions, factures, correspondances) permettant d’étayer sérieusement l’alerte',
        },
      },
      {
        label: {
          ar: 'الالتزام بالمسؤولية القانونية وحسن النية',
          fr: 'Responsabilité et bonne foi du signalement',
        },
        value: {
          ar: 'التصريح بالوقائع الحقيقية بحسن نية؛ إذ يعاقب القانون على الوشاية الكاذبة أو التبليغ الكيدي دون مسوغات',
          fr: 'Déclaration effectuée de bonne foi sur des faits réels, la dénonciation calomnieuse étant sanctionnée par le code pénal',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي القضايا التي تدخل ضمن اختصاص الديوان المركزي لقمع الفساد (OCRC)؟',
          fr: 'Quelles infractions relèvent de la compétence de l’OCRC ?',
        },
        answer: {
          ar: 'يختص الديوان بالبحث والتحري في جرائم الفساد والجرائم الاقتصادية والمالية المرتبطة بها مثل الرشوة، اختلاس الأموال العمومية، تبييض الأموال، ومخالفات الصفقات العمومية.',
          fr: 'L’OCRC est un service central de police judiciaire spécialisé dans la lutte contre la corruption, le détournement de fonds publics, le blanchiment et les fraudes aux marchés publics.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين التبليغ لدى الديوان المركزي لقمع الفساد والهيئة الوطنية للوقاية من الفساد (HATPLC)؟',
          fr: 'Quelle différence entre saisir l’OCRC et la Haute Autorité (HATPLC) ?',
        },
        answer: {
          ar: 'يعد OCRC جهازا ميدانيا للضبطية القضائية يتولى التحقيق الجنائي تحت سلطة القضاء، بينما تركز السلطة العليا للشفافية والوقاية من الفساد ومكافحته (HATPLC) على التصريح بالممتلكات، الوقاية، والتبليغ الإداري والرقابي.',
          fr: 'L’OCRC mène directement des investigations judiciaires sous le contrôle des parquets, tandis que la HATPLC assure les missions de prévention, de contrôle patrimonial et de gouvernance.',
        },
      },
      {
        question: {
          ar: 'هل يكفل القانون حماية الموظف أو المواطن الذي يبلغ عن جريمة فساد؟',
          fr: 'La loi protège-t-elle les lanceurs d’alerte qui signalent des faits à l’OCRC ?',
        },
        answer: {
          ar: 'نعم، ينص قانون الوقاية من الفساد ومكافحته على حماية الشهود والمبلغين والخبراء من أي انتقام مهني أو تهديد، مع إمكانية إخفاء هويتهم في المحاضر القانونية عند الاقتضاء.',
          fr: 'Oui, la législation nationale relative à la lutte contre la corruption prévoit des mesures strictes de confidentialité et de protection contre toute mesure de représailles.',
        },
      },
      {
        question: {
          ar: 'هل يمكن متابعة التحقيق بعد إرسال شكوى عبر موقع OCRC؟',
          fr: 'Comment les signalements envoyés en ligne sont-ils exploités ?',
        },
        answer: {
          ar: 'يخضع كل بلاغ للدراسة والتقييم من قبل ضباط الديوان، وفي حال توفر معطيات جدية يتم استدعاء المبلغ لسماع أقواله وإحالة الملف على وكيل الجمهورية المختص.',
          fr: 'Chaque signalement est évalué par les enquêteurs ; lorsque les éléments sont caractérisés, le déclarant peut être contacté pour audition et le parquet compétent est saisi.',
        },
      },
    ],
  },

  // 52. onpo
  {
    id: 'onpo',
    slug: 'onpo',
    category: 'ministries',
    name: {
      ar: 'الديوان الوطني للحج والعمرة (ONPO)',
      fr: 'Office National du Pèlerinage et de la Omra (ONPO)',
    },
    acronym: 'ONPO',
    ministry: {
      ar: 'وزارة الشؤون الدينية والأوقاف',
      fr: 'Ministère des Affaires Religieuses et des Wakfs',
    },
    description: {
      ar: 'البوابة الرسمية لتنظيم مناسك الحج والعمرة في الجزائر: التسجيل الإلكتروني في قرعة الحج عبر موقع وزارة الداخلية، منصة البوابة الجزائرية للحج (حجز الرحلات، الغرف الفندقية، ودفع التكلفة)، ومنصة البوابة الجزائرية للعمرة لمتابعة الوكالات المعتمدة والتأشيرات.',
      fr: 'Portail officiel dédié au pèlerinage en Algérie (ONPO) : inscription au tirage au sort du Hadj, plateforme Bawabet El Hadj pour la gestion des vols, hébergements et règlements, et portail Bawabet El Omra recensant les agences agréées et formalités de voyage.',
    },
    officialUrl: 'https://onpo.dz/',
    portalUrl: 'https://pelerinage.interieur.gov.dz/Ar/Accueil/Accueil',
    iconName: 'Moon',
    isPopular: true,
    services: [
      {
        id: 'onpo-srv-1',
        title: {
          ar: 'الموقع الرسمي للديوان الوطني للحج والعمرة',
          fr: 'Site Officiel de l’ONPO',
        },
        description: {
          ar: 'المنصة الرسمية التي تنشر بيانات موسم الحج والعمرة، التكلفة المعتمدة، الفحوصات الطبية، وقائمة وكالات السياحة والأسفار المؤهلة.',
          fr: 'Portail officiel publiant les tarifs réglementés, calendriers sanitaires, circulaires officielles et listes d’agences agréées.',
        },
        url: 'https://onpo.dz/',
        isOnline: true,
      },
      {
        id: 'onpo-srv-2',
        title: {
          ar: 'التسجيل الإلكتروني في قرعة الحج (وزارة الداخلية)',
          fr: 'Inscription au Tirage au Sort du Hadj',
        },
        description: {
          ar: 'الاستمارة الوطنية للتسجيل عن بعد في قرعة الحج السنوية حسب البلدية ومقر الإقامة، مع احتساب عدد المشاركات السابقة تلقائيا.',
          fr: 'Téléservice d’inscription annuelle au tirage au sort du Hadj par commune de résidence avec comptabilisation automatique des participations.',
        },
        url: 'https://pelerinage.interieur.gov.dz/Ar/Accueil/Accueil',
        isOnline: true,
      },
      {
        id: 'onpo-srv-3',
        title: {
          ar: 'البوابة الجزائرية للحج (Bawabet El Hadj)',
          fr: 'Portail Algérien du Hadj — Bawabet El Hadj',
        },
        description: {
          ar: 'الفضاء الرقمي الخاص بالفائزين بقرعة الحج لإتمام ملف التأشيرة، حجز تذاكر السفر، اختيار الفنادق، ودفع المستحقات إلكترونيا.',
          fr: 'Plateforme réservée aux pèlerins retenus pour finaliser le dossier administratif, réserver les vols et hébergements et régler les frais.',
        },
        url: 'https://bawabetelhadj.dz/',
        isOnline: true,
      },
      {
        id: 'onpo-srv-4',
        title: {
          ar: 'البوابة الجزائرية للعمرة (Bawabet El Omra)',
          fr: 'Portail Algérien de la Omra — Bawabet El Omra',
        },
        description: {
          ar: 'منصة رقمية للتعريف بالوكالات السياحية المرخصة لتنظيم رحلات العمرة ومتابعة العقود والبرامج المعتمدة طوال السنة.',
          fr: 'Portail officiel de suivi et de contrôle des agences de voyages agréées pour l’organisation des séjours Omra.',
        },
        url: 'https://bawabetelomra.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون الراغبون في التسجيل بقرعة الحج، الحجاج الفائزون بالموسم، والمعتمرون المتوجهون عبر الوكالات المعتمدة',
        fr: 'Citoyens candidats au tirage au sort du Hadj, pèlerins retenus et voyageurs préparant une Omra via les agences agréées',
      },
      processingTime: {
        ar: 'تسجيل فوري في القرعة عبر البوابة؛ استكمال حجز التذاكر والفنادق وتأشيرة الحج وفق الرزنامة الموسمية المعلنة',
        fr: 'Inscription immédiate au tirage ; finalisation des vols, réservations et visas selon le calendrier saisonnier officiel',
      },
      fees: {
        ar: 'التسجيل في قرعة الحج مجاني بالكامل؛ تسدد تكلفة الحج الشاملة المعتمدة رسميا لدى فروع بنك الجزائر بعد الفوز بالقرعة',
        fr: 'Inscription au tirage gratuite ; règlement du forfait officiel Hadj auprès de la Banque d’Algérie uniquement après sélection',
      },
      channel: {
        ar: 'بوابات pelerinage.interieur.gov.dz وbawabetelhadj.dz وonpo.dz، وشبابيك البلديات وبنك الجزائر',
        fr: 'Portails pelerinage.interieur.gov.dz, bawabetelhadj.dz, onpo.dz, guichets communaux et Banque d’Algérie',
      },
      keyRequirement: {
        ar: 'جواز سفر بيومتري ساري المفعول لمدة لا تقل عن 6 أشهر، بطاقة التعريف البيومترية، والشهادة الطبية والدفتر الصحي للتلقيح',
        fr: 'Passeport biométrique valide au moins 6 mois, CNIBE, certificat médical d’aptitude et carnet de vaccination à jour',
      },
    },
    requirements: [
      {
        label: {
          ar: 'شروط التسجيل في قرعة الحج',
          fr: 'Conditions d’inscription au tirage au sort',
        },
        value: {
          ar: 'الجنسية الجزائرية، بلوغ سن 19 سنة فما فوق، عدم أداء فريضة الحج خلال السبع سنوات الماضية، والتسجيل ببطاقة التعريف البيومترية وبلدية الإقامة',
          fr: 'Nationalité algérienne, âge minimum de 19 ans, ne pas avoir accompli le Hadj durant les 7 dernières années et inscription dans la commune de résidence',
        },
      },
      {
        label: {
          ar: 'الملف الإداري والصحي بعد الفوز في القرعة',
          fr: 'Dossier administratif et sanitaire post-tirage',
        },
        value: {
          ar: 'شهادة الفوز بالقرعة، جواز سفر بيومتري ساري، شهادة تأهيل بدني وعقلي من اللجنة الطبية الولائية، ودفع وصل تكلفة الحج لدى بنك الجزائر',
          fr: 'Attestation de sélection, passeport biométrique valide, certificat d’aptitude médicale de wilaya et quittance de paiement Banque d’Algérie',
        },
      },
      {
        label: {
          ar: 'شروط الحجز الإلكتروني عبر البوابة الجزائرية للحج',
          fr: 'Prérequis de réservation sur Bawabet El Hadj',
        },
        value: {
          ar: 'تفعيل حساب الحاج برقم الاستمارة أو جواز السفر بعد إيداع الملف واستخراج التأشيرة الإلكترونية والمسار الصحي',
          fr: 'Activation du compte personnel dès validation du dossier et paiement pour sélectionner les créneaux de vol et l’hébergement',
        },
      },
      {
        label: {
          ar: 'التأكد من اعتماد وكالة العمرة عبر Bawabet El Omra',
          fr: 'Vérification des agences via Bawabet El Omra',
        },
        value: {
          ar: 'التحقق من إدراج الوكالة السياحية ضمن القائمة الرسمية السنوية للديوان وتوقيع عقد عمرة مفصل يوضح الفندق والرحلة',
          fr: 'S’assurer que l’agence choisie figure sur la liste officielle annuelle et exiger un contrat détaillant transport, hôtels et prestations',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن تسجيل المرأة دون محرم في قرعة الحج بالجزائر؟',
          fr: 'Une femme peut-elle s’inscrire au tirage au sort du Hadj sans mahram ?',
        },
        answer: {
          ar: 'وفقا للتنظيم الساري والتعديلات المعمول بها في البوابة، يحدد النظام الآلي لقرعة الحج الفئات العمرية المصرح لها بالتسجيل الفردي أو مع المحرم الشرعي وتنشر شروطه في بيان وزارة الداخلية سنويا.',
          fr: 'La réglementation applicable chaque saison précise sur le portail pelerinage.interieur.gov.dz les conditions d’âge et d’accompagnement (avec ou sans mahram) selon les directives officielles en vigueur.',
        },
      },
      {
        question: {
          ar: 'كيف يستفيد المواطن المسجل لعدة سنوات متتالية في قرعة الحج؟',
          fr: 'Comment sont prises en compte les inscriptions répétées au tirage au sort ?',
        },
        answer: {
          ar: 'يحتسب النظام المعلوماتي لوزارة الداخلية عدد السنوات المتتالية التي لم يحالف فيها الحظ المواطن، ويمنحه فرصا إضافية في سحب القرعة أو حصة مخصصة لكبار السن وفق القرارات السنوية.',
          fr: 'Le système comptabilise automatiquement l’historique des participations infructueuses afin d’attribuer des chances additionnelles ou un quota spécifique aux personnes âgées.',
        },
      },
      {
        question: {
          ar: 'ما هي خطوات اختيار الرحلة والفندق على البوابة الجزائرية للحج؟',
          fr: 'Comment réserver son vol et sa chambre sur Bawabet El Hadj ?',
        },
        answer: {
          ar: 'بعد دفع تكلفة الحج في بنك الجزائر والحصول على وصل الدفع، يدخل الحاج إلى bawabetelhadj.dz لتأكيد معلومات جواز السفر، اختيار تاريخ رحلة الخطوط الجوية أو المسار المعتمد، وتثبيت حجز الغرفة في مكة والمدينة.',
          fr: 'Après règlement auprès de la Banque d’Algérie, connectez-vous sur bawabetelhadj.dz avec votre référence pour associer votre passeport, sélectionner votre vol et réserver votre hébergement.',
        },
      },
      {
        question: {
          ar: 'كيف أتأكد أن وكالة السياحة معتمدة لتنظيم العمرة قبل الدفع؟',
          fr: 'Comment vérifier qu’une agence est agréée pour la Omra ?',
        },
        answer: {
          ar: 'يمكنك الولوج إلى موقع الديوان الوطني للحج والعمرة onpo.dz أو البوابة الجزائرية للعمرة bawabetelomra.dz للاطلاع على القائمة المحينة للوكالات الحاصلة على الترخيص الرسمي للموسم.',
          fr: 'Consultez l’annuaire officiel publié chaque saison sur onpo.dz et bawabetelomra.dz avant de verser tout acompte.',
        },
      },
    ],
  },

  // 53. ooredoo
  {
    id: 'ooredoo',
    slug: 'ooredoo',
    category: 'telecom',
    name: {
      ar: 'أوريدو الجزائر للاتصالات (Ooredoo Algérie)',
      fr: 'Ooredoo Algérie — Rechargement E-Storm, Factures & My Ooredoo',
    },
    acronym: 'OOREDOO',
    ministry: {
      ar: 'قطاع البريد والمواصلات السلكية واللاسلكية',
      fr: 'Secteur de la Poste et des Télécommunications',
    },
    description: {
      ar: 'الخدمات الرقمية لمتعامل الهاتف النقال أوريدو الجزائر (Ooredoo): التعبئة الإلكترونية الفورية ودفع الفواتير بالبطاقة الذهبية وCIB عبر منصة E-Storm، إدارة الخط وباقات الإنترنت والمكالمات عبر تطبيق My Ooredoo، والوصول إلى خدمات الأعمال والتجوال والدعم عبر الموقع الرسمي.',
      fr: 'Services numériques de l’opérateur mobile Ooredoo Algérie : rechargement instantané et règlement des factures par carte Edahabia ou CIB via E-Storm, gestion du compte, des forfaits internet et de la consommation sur l’application My Ooredoo, et assistance client officielle.',
    },
    officialUrl: 'https://www.ooredoo.dz/',
    portalUrl: 'http://estorm.ooredoo.dz/',
    iconName: 'Smartphone',
    isPopular: false,
    services: [
      {
        id: 'ooredoo-srv-1',
        title: {
          ar: 'الموقع الرسمي لأوريدو الجزائر',
          fr: 'Site Officiel Ooredoo Algérie',
        },
        description: {
          ar: 'استعراض عروض الدفع المسبق والبعدي، شرائح البيانات 4G، باقات المؤسسات، وعناوين فضاءات أوريدو عبر الولايات.',
          fr: 'Portail officiel présentant les offres mobiles prépayées et postpayées, forfaits internet, solutions entreprises et boutiques.',
        },
        url: 'https://www.ooredoo.dz/',
        isOnline: true,
      },
      {
        id: 'ooredoo-srv-2',
        title: {
          ar: 'بوابة التعبئة الإلكترونية ودفع الفواتير (E-Storm)',
          fr: 'E-Storm Ooredoo — Rechargement & Factures',
        },
        description: {
          ar: 'شحن رصيد خطوط أوريدو وتخليص فواتير الدفع البعدي مباشرة عبر الإنترنت باستخدام البطاقة الذهبية أو البطاقة البنكية CIB.',
          fr: 'Service officiel de rechargement en ligne et de paiement des factures mensuelles par carte Edahabia ou CIB.',
        },
        url: 'http://estorm.ooredoo.dz/',
        isOnline: true,
      },
      {
        id: 'ooredoo-srv-3',
        title: {
          ar: 'تطبيق My Ooredoo لإدارة الحساب والعروض',
          fr: 'Application Mobile My Ooredoo Algérie',
        },
        description: {
          ar: 'متابعة استهلاك الإنترنت والمكالمات، تفعيل العروض الحصرية (Dima / Gold)، تحويل الرصيد، والحصول على الدعم الرقمي المتواصل.',
          fr: 'Application client complète pour suivre le crédit et les gigas, activer des forfaits, transférer du solde et contacter l’assistance.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.algeria.selfcare.app.android&pli=1',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مشتركو خطوط أوريدو في صيغ الدفع المسبق والبعدي، شرائح الإنترنت 4G، وزبائن المؤسسات والشركات',
        fr: 'Abonnés Ooredoo prépayés, postpayés, détenteurs de puces data et clients entreprises',
      },
      processingTime: {
        ar: 'شحن فوري للرصيد وتفعيل آلي للباقات فور تأكيد الدفع عبر E-Storm أو تطبيق My Ooredoo',
        fr: 'Crédit instantané du solde et activation immédiate des forfaits dès validation sur E-Storm ou My Ooredoo',
      },
      fees: {
        ar: 'استعمال تطبيق My Ooredoo وبوابة التعبئة E-Storm مجاني دون رسوم إضافية على سعر الرصيد أو الفاتورة',
        fr: 'L’utilisation de My Ooredoo et du portail E-Storm est gratuite sans commission additionnelle sur le montant rechargé',
      },
      channel: {
        ar: 'بوابة estorm.ooredoo.dz، تطبيق My Ooredoo، قائمة USSD (#200* / #151*)، ومركز الاتصال 333',
        fr: 'Portail estorm.ooredoo.dz, application My Ooredoo, codes USSD (*200# / *151#) et service client 333',
      },
      keyRequirement: {
        ar: 'رقم خط أوريدو نشط ومسجل بالهوية، وبطاقة دفع إلكتروني (الذهبية أو CIB) مع خدمة OTP مفعلة للإنترنت',
        fr: 'Ligne Ooredoo active dûment identifiée et carte de paiement Edahabia ou CIB avec validation OTP par SMS',
      },
    },
    requirements: [
      {
        label: {
          ar: 'شريحة أوريدو مسجلة قانونيا',
          fr: 'Carte SIM Ooredoo identifiée',
        },
        value: {
          ar: 'خط أوريدو مفعل ببطاقة التعريف الوطنية وفق معايير الضبط والاتصال للاستفادة من كافة خدمات التطبيق والعمليات المالية',
          fr: 'Numéro Ooredoo enregistré par CNIBE conformément aux exigences réglementaires pour accéder à My Ooredoo',
        },
      },
      {
        label: {
          ar: 'وسيلة دفع إلكتروني معتمدة',
          fr: 'Carte monétique activée en ligne',
        },
        value: {
          ar: 'البطاقة الذهبية لبريد الجزائر أو بطاقة CIB صادرة عن بنك جزائري مع توفر رصيد كاف ورقم هاتف لاستقبال رمز OTP',
          fr: 'Carte Edahabia ou carte CIB émise par une banque algérienne, approvisionnée et liée au mobile pour le code OTP',
        },
      },
      {
        label: {
          ar: 'بيانات الحساب في My Ooredoo',
          fr: 'Connexion à My Ooredoo',
        },
        value: {
          ar: 'التسجيل برقم الهاتف وتأكيد الرمز المرسل عبر SMS (أو الدخول التلقائي عبر بيانات 4G الخاصة بالخط)',
          fr: 'Authentification par numéro de ligne et code SMS ou reconnaissance automatique via la connexion data mobile Ooredoo',
        },
      },
      {
        label: {
          ar: 'رقم العقد أو الفاتورة لخطوط الدفع البعدي',
          fr: 'Référence client pour factures postpayées',
        },
        value: {
          ar: 'إدخال رقم الهاتف أو رمز المشترك للاطلاع على الفواتير المفتوحة وسدادها عبر E-Storm أو التطبيق',
          fr: 'Saisie du numéro d’appel ou code abonné pour consulter le solde dû et procéder au règlement à distance',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أعبئ رصيد أوريدو أو أشتري باقة إنترنت عبر بوابة E-Storm؟',
          fr: 'Comment recharger un numéro Ooredoo via la plateforme E-Storm ?',
        },
        answer: {
          ar: 'افتح موقع estorm.ooredoo.dz، أدخل رقم هاتف أوريدو ومبلغ الشحن المطلوب، اختر الدفع بالبطاقة الذهبية أو CIB، ثم أدخل بيانات البطاقة ورمز التأكيد المرسل برسالة قصيرة.',
          fr: 'Accédez à estorm.ooredoo.dz, indiquez le numéro Ooredoo et le montant souhaité, choisissez Edahabia ou CIB puis validez par le code OTP reçu par SMS.',
        },
      },
      {
        question: {
          ar: 'هل يستهلك تطبيق My Ooredoo رصيد الإنترنت الخاص بي؟',
          fr: 'La navigation sur l’application My Ooredoo consomme-t-elle mon forfait internet ?',
        },
        answer: {
          ar: 'تتيح أوريدو عادة تصفح تطبيق My Ooredoo مجانا عبر شبكة بيانات الهاتف لمتابعة الرصيد وتفعيل العروض حتى في حال نفاد حزمة الإنترنت.',
          fr: 'L’accès à My Ooredoo via les données mobiles de la ligne est conçu pour consulter votre solde et recharger facilement même lorsque le volume internet est épuisé.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع مصلحة الزبائن في أوريدو أو أسترجع رمز PUK عند قفل الشريحة؟',
          fr: 'Comment joindre le service client Ooredoo ou récupérer le code PUK ?',
        },
        answer: {
          ar: 'اتصل بالرقم 333 من أي خط أوريدو (أو 0550000333 من الشبكات الأخرى)، كما يمكنك عرض رمز PUK لخطك مباشرة من إعدادات الحساب في تطبيق My Ooredoo.',
          fr: 'Composez le 333 depuis une ligne Ooredoo (ou le 0550000333 depuis un autre opérateur) ; le code PUK est également consultable dans l’espace My Ooredoo.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا أدخلت رقما خاطئا أو تأخر وصول رصيد E-Storm؟',
          fr: 'Que faire si le rechargement E-Storm tarde à être crédité ?',
        },
        answer: {
          ar: 'احتفظ برقم المعاملة الظاهر في وصل الدفع وتأكد من رسالة SMS البنكية، وفي حال مرور أكثر من 15 دقيقة دون استلام الرصيد تواصل مع الرقم 333 مع تقديم المرجع.',
          fr: 'Conservez la référence de transaction affichée sur le reçu de paiement et contactez le 333 si le crédit n’apparaît pas après quelques minutes.',
        },
      },
    ],
  },

  // 54. opgi
  {
    id: 'opgi',
    slug: 'opgi',
    category: 'housing',
    name: {
      ar: 'ديوان الترقية والتسيير العقاري (OPGI)',
      fr: 'Office de Promotion et de Gestion Immobilière (OPGI)',
    },
    acronym: 'OPGI',
    ministry: {
      ar: 'وزارة السكن والعمران والمدينة',
      fr: 'Ministère de l’Habitat, de l’Urbanisme et de la Ville',
    },
    description: {
      ar: 'الخدمات الرقمية لدواوين الترقية والتسيير العقاري (OPGI) عبر الولايات: الدفع الإلكتروني لفواتير إيجار السكنات العمومية الإيجارية (LPL) والمحلات، الاطلاع على الوضعية المالية، تطبيق OPGI Mobile لإدارة العقود والفواتير، والتكامل مع الدفع عبر بريدي موب والبطاقة الذهبية.',
      fr: 'Services numériques des Offices de Promotion et de Gestion Immobilière (OPGI) : paiement en ligne des loyers des logements publics locatifs (LPL) et locaux commerciaux, suivi des quittances, application mobile OPGI Mobile et règlement par carte Edahabia ou BaridiMob.',
    },
    officialUrl: 'https://www.opgi-alger.dz/',
    portalUrl: 'https://www.opgiconstantine.dz/',
    iconName: 'Building2',
    isPopular: false,
    services: [
      {
        id: 'opgi-srv-1',
        title: {
          ar: 'بوابة ديوان الترقية والتسيير العقاري (الجزائر والولايات)',
          fr: 'Portail Officiel OPGI (Réseau de Wilaya)',
        },
        description: {
          ar: 'الاطلاع على خدمات التسيير العقاري، ملفات التمليك، سكنات LPL وLPA، والوصول إلى البوابات الولائية للدفع والإدارة.',
          fr: 'Accès aux informations de gestion locative, dossiers de cession de biens immobiliers de l’État (LPL) et portails locaux.',
        },
        url: 'https://www.opgi-alger.dz/',
        isOnline: true,
      },
      {
        id: 'opgi-srv-2',
        title: {
          ar: 'بوابة الدفع الإلكتروني لفواتير كراء سكنات OPGI',
          fr: 'Paiement Électronique des Loyers OPGI',
        },
        description: {
          ar: 'منصة تسديد مستحقات الكراء الشهري إلكترونيا بالبطاقة الذهبية أو البنكية CIB مع استخراج وصل الدفع الفوري دون عناء التنقل.',
          fr: 'Plateforme permettant aux locataires de régler leurs échéances mensuelles de loyer en ligne et de télécharger la quittance.',
        },
        url: 'https://www.opgiconstantine.dz/',
        isOnline: true,
      },
      {
        id: 'opgi-srv-3',
        title: {
          ar: 'تطبيق OPGI Mobile الرسمي لمتابعة الإيجار',
          fr: 'Application Mobile Officielle OPGI Mobile',
        },
        description: {
          ar: 'تطبيق هاتفي يربط المستأجر بديوان الترقية والتسيير العقاري لمتابعة الفواتير المستحقة، سجل الدفعات، وطلبات الصيانة والشكاوى.',
          fr: 'Application Android facilitant la consultation des avis d’échéance, le suivi des paiements et l’envoi des réclamations locatives.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.opgi.mobile',
        isOnline: true,
      },
      {
        id: 'opgi-srv-4',
        title: {
          ar: 'تطبيق بريدي موب لتسديد مستحقات OPGI',
          fr: 'Application BaridiMob — Règlement des Quittances OPGI',
        },
        description: {
          ar: 'إجراء المدفوعات العقارية وفواتير السكن العمومي بسهولة عبر تطبيق بريدي موب المرتبط بالبطاقة الذهبية لبريد الجزائر.',
          fr: 'Paiement simplifié des avis de loyer et factures liées au logement via l’application BaridiMob et la carte Edahabia.',
        },
        url: 'https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المستفيدون والمستأجرون للسكنات العمومية الإيجارية (LPL) والمحلات المهنية التابعة لدواوين OPGI عبر الولايات',
        fr: 'Locataires de logements publics locatifs (LPL), acquéreurs en cession et occupants de locaux commerciaux gérés par les OPGI',
      },
      processingTime: {
        ar: 'تسجيل فوري لتسديد فاتورة الكراء مع إصدار وصل إلكتروني قابل للطباعة؛ معالجة طلبات الصيانة أو التمليك وفق آجال الديوان الولائي',
        fr: 'Validation instantanée du paiement de loyer avec quittance PDF ; instruction des demandes techniques ou de cession selon l’office de wilaya',
      },
      fees: {
        ar: 'الدفع الإلكتروني عبر بوابات OPGI وتطبيق الهاتف مجاني بدون عمولة إضافية على قيمة الإيجار أو الأعباء المقررة في العقد',
        fr: 'Aucun frais supplémentaire pour le paiement en ligne du loyer mensuel et des charges locatives contractuelles',
      },
      channel: {
        ar: 'المواقع الولائية لديوان OPGI، تطبيق OPGI Mobile، تطبيق بريدي موب، ووحدات التسيير الجوارية بالأحياء',
        fr: 'Portails web OPGI de wilaya, application OPGI Mobile, BaridiMob et unités de gestion de proximité',
      },
      keyRequirement: {
        ar: 'رقم العقد أو مرجع المستأجر المثبت في فاتورة الإيجار الشهرية، وبطاقة ذهبية أو CIB سارية للدفع عن بعد',
        fr: 'Code locataire ou numéro de contrat figurant sur l’avis d’échéance, et carte Edahabia ou CIB pour le règlement en ligne',
      },
    },
    requirements: [
      {
        label: {
          ar: 'بيانات المستأجر ورمز العقد',
          fr: 'Référence locataire et numéro de contrat',
        },
        value: {
          ar: 'إدخال رمز المستأجر ورقم المسكن أو الحي المبين على إشعار الإيجار الشهري للوصول إلى الفواتير غير المسددة',
          fr: 'Saisie du code client et du numéro de logement inscrits sur la quittance pour afficher les loyers exigibles',
        },
      },
      {
        label: {
          ar: 'وسيلة دفع إلكتروني صالحة',
          fr: 'Moyen de télépaiement valide',
        },
        value: {
          ar: 'البطاقة الذهبية لبريد الجزائر (مع تفعيل خدمة رمز التأكيد SMS) أو بطاقة بنكية CIB لسداد المستحقات إلكترونيا',
          fr: 'Carte Edahabia avec OTP actif ou carte interbancaire CIB pour valider la transaction sur la plateforme SATIM/Poste',
        },
      },
      {
        label: {
          ar: 'ملف التنازل والتمليك للسكنات المؤهلة',
          fr: 'Dossier de cession (acquisition du logement)',
        },
        value: {
          ar: 'تصفية جميع متأخرات الكراء، عقد الإيجار الأصلي، شهادة الحالة العائلية وبطاقة التعريف الوطنية عند التقدم لتمليك السكن',
          fr: 'Apurement préalable des arriérés de loyer, contrat initial, fiche familiale et CNIBE pour les logements éligibles à la cession',
        },
      },
      {
        label: {
          ar: 'حفظ وصولات الدفع الرقمية',
          fr: 'Conservation des quittances numériques',
        },
        value: {
          ar: 'تحميل والاحتفاظ بنسخة PDF من وصل الدفع الإلكتروني بعد كل عملية لتأكيد تسوية الوضعية المالية عند أي مراجعة',
          fr: 'Téléchargement et archivage des reçus PDF après chaque règlement en vue de toute mise à jour administrative',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أدفع فاتورة كراء سكن OPGI عن بعد دون التنقل لوحدة التسيير؟',
          fr: 'Comment payer mon loyer OPGI en ligne sans me déplacer à l’agence ?',
        },
        answer: {
          ar: 'ادخل إلى بوابة الدفع الإلكتروني الخاصة بديوان OPGI لولايتك أو عبر تطبيق OPGI Mobile، أدخل رقم عقد الإيجار أو رمز المستأجر، ثم اختر الدفع بالبطاقة الذهبية أو CIB واطبع الوصل فورا.',
          fr: 'Connectez-vous au portail web de l’OPGI de votre wilaya ou à l’application OPGI Mobile, renseignez votre code locataire puis réglez par carte Edahabia ou CIB pour obtenir votre quittance.',
        },
      },
      {
        question: {
          ar: 'هل تطبيق OPGI Mobile صالح لجميع الولايات أم لولاية واحدة؟',
          fr: 'L’application OPGI Mobile couvre-t-elle toutes les wilayas ?',
        },
        answer: {
          ar: 'يتيح التطبيق اختيار الديوان الولائي المعني عند التسجيل، كما تمتلك معظم دواوين الترقية والتسيير العقاري (الجزائر، قسنطينة، وهران وغيرها) بوابات إلكترونية مستقلة مرتبطة بالدفع البنكي والبريدي.',
          fr: 'L’application permet de sélectionner l’office concerné ; chaque OPGI de wilaya (Alger, Constantine, Oran, etc.) dispose également de son portail de paiement dédié.',
        },
      },
      {
        question: {
          ar: 'أين أجد رمز المستأجر المطلوب لتسجيل الدخول؟',
          fr: 'Où trouver mon identifiant locataire pour accéder au paiement en ligne ?',
        },
        answer: {
          ar: 'يظهر رمز المستأجر أو مرجع الفاتورة في أعلى إشعار الدفع الشهري الورقي المسلم سابقا، أو في عقد الإيجار المبرم مع ديوان الترقية والتسيير العقاري.',
          fr: 'Il est imprimé sur l’avis d’échéance mensuel (code locataire / référence client) ainsi que sur votre contrat de location OPGI.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا ظهر لي مبلغ متأخرات غير صحيح عند الدفع الإلكتروني؟',
          fr: 'Que faire si le montant affiché sur la plateforme comporte une erreur d’arriérés ?',
        },
        answer: {
          ar: 'أوقف عملية الدفع وراجع وحدة التسيير الجوارية أو مصلحة التحصيل بالديوان الولائي مصحوبا بوصولات الدفع السابقة لتسوية السجل المعلوماتي.',
          fr: 'Ne validez pas le paiement et présentez vos quittances antérieures au bureau de gestion de proximité ou à la direction financière de votre OPGI pour régularisation.',
        },
      },
    ],
  },

  // 55. ostad-education
  {
    id: 'ostad-education',
    slug: 'ostad-education',
    category: 'education_higher',
    name: {
      ar: 'فضاء الأستاذ الرقمي ومسابقات التوظيف والامتحانات التربوية',
      fr: 'Espace Enseignant (Ostad), Concours & Examens — Éducation Nationale',
    },
    acronym: 'OSTAD',
    ministry: {
      ar: 'وزارة التربية الوطنية',
      fr: 'Ministère de l’Éducation Nationale',
    },
    description: {
      ar: 'المنظومة الرقمية الشاملة لقطاع التربية الوطنية في الجزائر: فضاء الأستاذ (Ostad) لإدارة الدروس والنقاط، توظيف الأساتذة المتعاقدين، الامتحانات المهنية (Mowadaf)، تقييم المكتسبات، مسابقات الديوان الوطني للامتحانات ONEC، التعليم عن بعد ONEFD وشهادات إثبات المستوى، والتسجيل والدفع الإلكتروني لامتحاني BEM وBAC.',
      fr: 'Écosystème numérique complet du Ministère de l’Éducation Nationale : espace enseignant Ostad, recrutement des contractuels Tawdif, examens professionnels Mowadaf, évaluation des acquis Taqiim, concours ONEC, enseignement à distance ONEFD et inscriptions/paiements BEM & BAC.',
    },
    officialUrl: 'https://www.education.gov.dz/',
    portalUrl: 'https://ostad.education.dz/auth',
    iconName: 'GraduationCap',
    isPopular: false,
    services: [
      {
        id: 'ostad-education-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة التربية الوطنية',
          fr: 'Site Officiel du Ministère de l’Éducation Nationale',
        },
        description: {
          ar: 'البوابة الوزارية الرسمية للمناشير التربوية، رزنامة الامتحانات والعطل المدرسية، وبيانات التوظيف والامتحانات المهنية.',
          fr: 'Portail officiel regroupant les circulaires pédagogiques, le calendrier scolaire et les annonces nationales de recrutement.',
        },
        url: 'https://www.education.gov.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-2',
        title: {
          ar: 'الفضاء الرقمي للأستاذ (Ostad Education)',
          fr: 'Plateforme Numérique de l’Enseignant — Ostad',
        },
        description: {
          ar: 'حساب الأستاذ الرسمي لتسيير الكشوف الفصلية، حجز نقاط التلاميذ، متابعة الوثائق المهنية، والتواصل الإداري داخل الرقمنة.',
          fr: 'Espace professionnel permettant aux enseignants la saisie des notes trimestrielles, le suivi administratif et la gestion pédagogique.',
        },
        url: 'https://ostad.education.dz/auth',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-3',
        title: {
          ar: 'منصة تقييم مكتسبات مرحلة التعليم الابتدائي',
          fr: 'Plateforme d’Évaluation des Acquis — Taqiim',
        },
        description: {
          ar: 'فضاء تسجيل وتقييم مكتسبات التلاميذ في المواد الأساسية وفق المعايير التربوية الحديثة ومتابعة تحصيلهم الدراسي.',
          fr: 'Portail dédié à l’enregistrement et au suivi de l’évaluation des acquis des élèves du cycle primaire.',
        },
        url: 'https://taqiim.education.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-4',
        title: {
          ar: 'منصة توظيف الأساتذة المتعاقدين (Tawdif)',
          fr: 'Recrutement des Enseignants Contractuels — Tawdif',
        },
        description: {
          ar: 'بوابة إيداع ملفات المترشحين للتوظيف بصفة أستاذ متعاقد في الأطوار التعليمية الثلاثة ومتابعة نتائج الانتقاء والالتحاق.',
          fr: 'Téléservice de dépôt de candidature pour les postes d’enseignants contractuels et consultation des affectations.',
        },
        url: 'https://tawdif.education.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-5',
        title: {
          ar: 'نتائج الامتحانات المهنية للأسلاك الخاصة (Mowadaf)',
          fr: 'Examens Professionnels et Promotion — Mowadaf',
        },
        description: {
          ar: 'منصة متابعة التسجيلات ونتائج الامتحانات المهنية للترقية في رتب قطاع التربية الوطنية للأساتذة والإداريين.',
          fr: 'Portail de consultation des résultats des examens professionnels de promotion interne pour les corps de l’éducation.',
        },
        url: 'https://mowadaf.education.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-6',
        title: {
          ar: 'منصة مسابقات التوظيف على أساس الشهادة (ONEC Concours)',
          fr: 'Concours de Recrutement — Plateforme ONEC',
        },
        description: {
          ar: 'التسجيل وسحب الاستدعاءات والاطلاع على نتائج مسابقات التوظيف التربوية والإدارية المنظمة عبر الديوان الوطني للامتحانات.',
          fr: 'Portail des concours nationaux de recrutement organisés par l’ONEC (inscriptions, convocations et résultats).',
        },
        url: 'https://concours.onec.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-7',
        title: {
          ar: 'البوابة التكميلية لمسابقات التوظيف التربوي',
          fr: 'Portail Secondaire des Concours Éducation (ONEC)',
        },
        description: {
          ar: 'نقطة ولوج رسمية ثانية لمسابقات التوظيف في مختلف رتب ومناصب قطاع التربية الوطنية.',
          fr: 'Accès complémentaire dédié aux campagnes de recrutement dans les différentes filières de l’éducation.',
        },
        url: 'https://concour.onec.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-8',
        title: {
          ar: 'منصة «معلم» للموارد التعليمية والأساتذة',
          fr: 'Plateforme Pédagogique Moalim DZ',
        },
        description: {
          ar: 'بوابة تضم نماذج المذكرات التربوية، التوزيعات السنوية، ودروس الدعم الموجهة للأساتذة والتلاميذ عبر الأطوار.',
          fr: 'Ressource éducative en ligne regroupant fiches pédagogiques, progressions annuelles et supports pour enseignants et élèves.',
        },
        url: 'https://www.moalim-dz.net/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-9',
        title: {
          ar: 'فضاء الأولياء والتسجيلات التربوية (Awlyaa)',
          fr: 'Espace Parents et Suivi Scolaire — Awlyaa',
        },
        description: {
          ar: 'ربط أولياء الأمور والتلاميذ بالمؤسسات المدرسية لمتابعة الكشوف، الغيابات، والتسجيلات والتحويلات الرقمية.',
          fr: 'Portail officiel reliant les parents d’élèves aux établissements scolaires pour suivre relevés de notes, absences et orientations.',
        },
        url: 'https://awlyaa.education.dz/login',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-10',
        title: {
          ar: 'البوابة الرسمية للديوان الوطني للتعليم والتكوين عن بعد (ONEFD)',
          fr: 'Enseignement à Distance — Portail ONEFD',
        },
        description: {
          ar: 'الموقع المرجعي للتلاميذ الأحرار والمتمدرسين عن بعد لإتمام التسجيلات، متابعة الدروس، واستخراج الاستدعاءات والشهادات.',
          fr: 'Site officiel pour l’inscription aux cours par correspondance, suivi pédagogique et retrait des attestations scolaires à distance.',
        },
        url: 'https://www.onefd.edu.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-11',
        title: {
          ar: 'استخراج شهادات إثبات المستوى (ONEFD)',
          fr: 'Attestation de Niveau Scolaire — ONEFD',
        },
        description: {
          ar: 'سحب شهادة إثبات المستوى الرسمية إلكترونيا للتلاميذ المترشحين والناجحين في التعليم عن بعد.',
          fr: 'Téléchargement de l’attestation officielle de niveau pour les apprenants inscrits auprès de l’ONEFD.',
        },
        url: 'https://www.onefd.edu.dz/att_niv_2025/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-12',
        title: {
          ar: 'بوابة التسجيل والنتائج — شهادة البكالوريا (BAC ONEC)',
          fr: 'Baccalauréat (BAC) — Inscriptions, Convocations & Résultats',
        },
        description: {
          ar: 'المنصة الرسمية لتسجيل المترشحين المتمدرسين والأحرار في امتحان البكالوريا، طبع الاستدعاء، وسحب النتائج.',
          fr: 'Portail officiel ONEC pour l’inscription au Baccalauréat, le retrait des convocations et la publication des résultats.',
        },
        url: 'https://bac.onec.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-13',
        title: {
          ar: 'بوابة التسجيل والنتائج — شهادة التعليم المتوسط (BEM ONEC)',
          fr: 'Brevet d’Enseignement Moyen (BEM) — Inscription & Résultats',
        },
        description: {
          ar: 'التسجيل الإلكتروني لتلاميذ السنة الرابعة متوسط والأحرار في امتحان البيام، ومراقبة تأكيد المعلومات والنتائج النهائية.',
          fr: 'Portail ONEC dédié aux inscriptions, convocations et résultats de l’examen national du BEM.',
        },
        url: 'https://bem.onec.dz/',
        isOnline: true,
      },
      {
        id: 'ostad-education-srv-14',
        title: {
          ar: 'بوابة الدفع الإلكتروني لمستحقات الامتحانات الوطنية (E-Pay Education)',
          fr: 'Télépaiement des Frais d’Examens BEM & BAC',
        },
        description: {
          ar: 'تسديد حقوق التسجيل في امتحاني شهادة البكالوريا والتعليم المتوسط إلكترونيا باستخدام البطاقة الذهبية لبريد الجزائر.',
          fr: 'Guichet de règlement en ligne des droits d’inscription aux examens nationaux par carte Edahabia.',
        },
        url: 'https://epay.education.dz/auth',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الأساتذة المرسلون والمتعاقدون، المترشحون لمسابقات التوظيف والامتحانات المهنية، طلبة المراسلة ONEFD، وتلاميذ BEM وBAC',
        fr: 'Enseignants titulaires et contractuels, candidats aux concours/promotions, élèves à distance ONEFD et candidats BEM/BAC',
      },
      processingTime: {
        ar: 'تسجيل فوري عبر المنصات المفتوحة؛ إعلان قوائم الفائزين في التعاقد والمسابقات ونتائج الامتحانات وفق الرزنامة الوزارية',
        fr: 'Inscription immédiate en ligne ; publication des résultats d’affectation et d’examens selon le calendrier du ministère',
      },
      fees: {
        ar: 'استعمال فضاء الأستاذ وموعدف وتوظيف مجاني؛ تطبق رسوم تسجيل رمزية لامتحانات BEM وBAC وONEFD تسدد عبر epay.education.dz',
        fr: 'Accès Ostad, Mowadaf et Tawdif gratuit ; droits réglementaires d’examen BEM/BAC et ONEFD payables via epay.education.dz',
      },
      channel: {
        ar: 'بوابات education.gov.dz الفرعية وموقع الديوان الوطني للامتحانات والمسابقات onec.dz وموقع الديوان الوطني للتعليم عن بعد',
        fr: 'Sous-domaines education.gov.dz, portails onec.dz et site officiel onefd.edu.dz',
      },
      keyRequirement: {
        ar: 'رقم التعريف الوظيفي أو اسم المستخدم المسلم من المؤسسة لفضاء الأستاذ، والشهادة الجامعية المطابقة لتخصص التدريس في التوظيف',
        fr: 'Identifiants délivrés par l’établissement pour Ostad, et diplôme universitaire conforme à la matière pour le recrutement',
      },
    },
    requirements: [
      {
        label: {
          ar: 'دخول الأساتذة إلى فضاء Ostad وتقييم',
          fr: 'Accès professionnel Ostad et Taqiim',
        },
        value: {
          ar: 'الحصول على حساب التفعيل وكلمة المرور من مدير المؤسسة التربوية لربط الأستاذ بأقسامه والمواد المسندة إليه في الرقمنة',
          fr: 'Récupérer les identifiants de connexion auprès du chef d’établissement afin d’accéder aux classes et grilles d’évaluation',
        },
      },
      {
        label: {
          ar: 'ملف توظيف الأساتذة المتعاقدين (Tawdif)',
          fr: 'Dossier de candidature Tawdif',
        },
        value: {
          ar: 'نسخة من شهادة الليسانس أو الماستر أو مهندس دولة في التخصص المطلوب، بطاقة الإقامة في الولاية المعنية، والوضعية تجاه الخدمة الوطنية للذكور',
          fr: 'Diplôme de licence, master ou ingénieur dans la spécialité, justificatif de résidence et situation vis-à-vis du service national',
        },
      },
      {
        label: {
          ar: 'شروط التسجيل في امتحانات BEM وBAC والدفع الإلكتروني',
          fr: 'Inscription aux examens BEM/BAC et télépaiement',
        },
        value: {
          ar: 'شهادة مدرسية أو إثبات مستوى للمترشحين الأحرار، رقم التعريف المدرسي، وبطاقة ذهبية لتسديد حقوق الامتحان عبر epay.education.dz',
          fr: 'Certificat de scolarité ou attestation de niveau ONEFD, NIN scolaire et carte Edahabia pour régler les droits d’inscription',
        },
      },
      {
        label: {
          ar: 'استخراج شهادة إثبات المستوى ONEFD',
          fr: 'Retrait de l’attestation de niveau ONEFD',
        },
        value: {
          ar: 'توفر رقم التسجيل والولاية وتاريخ الميلاد الخاص بالمترشح في الديوان الوطني للتعليم والتكوين عن بعد لتحميل الشهادة الموقعة',
          fr: 'Numéro d’inscription ONEFD, wilaya et date de naissance pour éditer l’attestation de niveau réussie',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف يحصل الأستاذ الجديد على حسابه للدخول إلى فضاء الأستاذ Ostad؟',
          fr: 'Comment un nouvel enseignant obtient-il son accès à la plateforme Ostad ?',
        },
        answer: {
          ar: 'يتسلم الأستاذ بيانات الدخول الأولية من أمانة مدير المؤسسة التربوية التي عين بها بعد إتمام محضر التنصيب وإدراج اسمه في الأرضية الرقمية لوزارة التربية الوطنية.',
          fr: 'Les identifiants initiaux sont remis par la direction de l’établissement scolaire d’affectation après signature du procès-verbal d’installation.',
        },
      },
      {
        question: {
          ar: 'متى تفتح منصة توظيف الأساتذة المتعاقدين tawdif.education.dz؟',
          fr: 'Quand ouvre le portail Tawdif pour le recrutement des enseignants contractuels ?',
        },
        answer: {
          ar: 'تفتح المنصة عادة قبيل الدخول المدرسي سنويا وفق بيان رسمي من وزارة التربية الوطنية لتغطية المناصب الشاغرة حسب الأولوية والتخصص والولاية.',
          fr: 'La plateforme est activée chaque année avant la rentrée scolaire par communiqué du ministère afin de pourvoir les postes vacants par wilaya et matière.',
        },
      },
      {
        question: {
          ar: 'كيف يتم دفع حقوق التسجيل في البكالوريا وشهادة التعليم المتوسط إلكترونيا؟',
          fr: 'Comment régler en ligne les frais d’inscription au BAC et au BEM ?',
        },
        answer: {
          ar: 'بعد طباعة استمارة التسجيل من موقع bac.onec.dz أو bem.onec.dz، يدخل المترشح إلى epay.education.dz/auth باستخدام اسم المستخدم والرمز المدونين في الاستمارة ويدفع المستحقات بالبطاقة الذهبية.',
          fr: 'Après validation du formulaire sur bac.onec.dz ou bem.onec.dz, connectez-vous sur epay.education.dz/auth avec vos identifiants d’inscription et payez par carte Edahabia.',
        },
      },
      {
        question: {
          ar: 'هل يمكن للمترشح الحر التسجيل في البكالوريا بدون شهادة إثبات مستوى؟',
          fr: 'Faut-il obligatoirement une attestation de niveau pour s’inscrire au BAC en candidat libre ?',
        },
        answer: {
          ar: 'نعم، يشترط للمترشحين الأحرار الذين لم يبلغوا السنة الثالثة ثانوي في التعليم النظامي التسجيل أولا في الديوان الوطني للتعليم عن بعد ONEFD أو إرفاق شهادة مدرسية تثبت مستوى الثالثة ثانوي.',
          fr: 'Les candidats libres doivent justifier du niveau de 3e année secondaire soit par un certificat scolaire antérieur, soit via une inscription et attestation délivrée par l’ONEFD.',
        },
      },
    ],
  },

  // 56. poste
  {
    id: 'poste',
    slug: 'poste',
    category: 'telecom',
    name: {
      ar: 'بريد الجزائر — البطاقة الذهبية، بريدي موب وفضاء ECCP',
      fr: 'Algérie Poste — Carte Edahabia, BaridiMob & Espace ECCP',
    },
    acronym: 'POSTE',
    ministry: {
      ar: 'وزارة البريد والمواصلات السلكية واللاسلكية',
      fr: 'Ministère de la Poste et des Télécommunications',
    },
    description: {
      ar: 'المنظومة الرقمية المتكاملة لمؤسسة بريد الجزائر: فتح حساب بريدي جاري عن بعد (CCPNet)، طلب وتتبع البطاقة الذهبية، الولوج إلى فضاء ECCP وتحديث استمارة KYC، حساب التوفير E-CNEP، تتبع الطرود (AP Tracking)، تصديق الوثائق للخارجية (Tasdik)، خدمة خرائط المكاتب BaridiMap، فضاء المؤسسات (Tikka، Cashless، Port-Eco، Amantec)، الشكاوى، وتطبيقات بريدي موب وE-CCP.',
      fr: 'Écosystème numérique complet d’Algérie Poste : ouverture de compte CCP en ligne (CCPNet), commande de carte Edahabia, portail ECCP et KYC, consultation E-CNEP, suivi des colis (AP Tracking), légalisation Tasdik, localisation BaridiMap, services pro (Tikka, Cashless, Port-Eco, Amantec), réclamations et applications BaridiMob & E-CCP.',
    },
    officialUrl: 'https://www.poste.dz/',
    portalUrl: 'https://eccp.poste.dz/commande-edahabia',
    iconName: 'Mail',
    isPopular: true,
    services: [
      {
        id: 'poste-srv-1',
        title: {
          ar: 'الموقع الرسمي لمؤسسة بريد الجزائر',
          fr: 'Site Officiel d’Algérie Poste',
        },
        description: {
          ar: 'البوابة المؤسساتية لبريد الجزائر للاطلاع على الخدمات المالية والبريدية، تسعيرة التحويلات، ومستجدات الدفع الإلكتروني.',
          fr: 'Portail institutionnel regroupant les services postaux et financiers, grilles tarifaires et actualités monétiques.',
        },
        url: 'https://www.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-2',
        title: {
          ar: 'طلب البطاقة الذهبية وتتبع مسار إصدارها',
          fr: 'Commande et Suivi de la Carte Edahabia',
        },
        description: {
          ar: 'تقديم طلب الحصول على البطاقة النقدية الذهبية أول مرة، اختيار مكتب الاستلام، ومتابعة مراحل الطبع والتوزيع.',
          fr: 'Demande en ligne de la carte monétique Edahabia, choix du bureau distributeur et suivi de fabrication.',
        },
        url: 'https://eccp.poste.dz/commande-edahabia',
        isOnline: true,
      },
      {
        id: 'poste-srv-3',
        title: {
          ar: 'فتح حساب بريدي جاري عن بعد (CCPNet)',
          fr: 'Ouverture de Compte Courant Postal en Ligne — CCPNet',
        },
        description: {
          ar: 'حجز استمارة فتح حساب بريدي جاري جديد عن بعد وتحديد موعد لإتمام الإجراءات في المكتب البريدي.',
          fr: 'Pré-ouverture dématérialisée d’un compte courant postal (CCP) avant finalisation au bureau de poste.',
        },
        url: 'https://ccpnet.poste.dz/init',
        isOnline: true,
      },
      {
        id: 'poste-srv-4',
        title: {
          ar: 'فضاء ECCP — الاطلاع على الرصيد وتحديث بيانات KYC',
          fr: 'Espace Client ECCP — Consultation Solde & KYC',
        },
        description: {
          ar: 'متابعة رصيد الحساب البريدي الجاري، طلب دفتر الصكوك، تحميل كشف العمليات، وتحديث استمارة معرفة الزبون KYC.',
          fr: 'Accès sécurisé au relevé de compte CCP, commande de chéquiers, suivi des opérations et mise à jour KYC.',
        },
        url: 'https://eccp.poste.dz/login',
        isOnline: true,
      },
      {
        id: 'poste-srv-5',
        title: {
          ar: 'استرجاع أو إنشاء الرقم السري لحساب ECCP',
          fr: 'Activation ou Réinitialisation du Mot de Passe ECCP',
        },
        description: {
          ar: 'استعادة كلمة المرور المفقودة أو إنشاء وصول إلكتروني جديد لحسابك البريدي دون زيارة مكتب البريد.',
          fr: 'Procédure en ligne d’obtention ou de réinitialisation du code d’accès à votre compte ECCP.',
        },
        url: 'https://eccp.poste.dz/password/reset',
        isOnline: true,
      },
      {
        id: 'poste-srv-6',
        title: {
          ar: 'الاطلاع على رصيد صندوق التوفير والاحتياط (E-CNEP)',
          fr: 'Consultation Épargne CNEP — Service E-CNEP Poste',
        },
        description: {
          ar: 'متابعة حساب دفتر التوفير CNEP المفتوح لدى مكاتب بريد الجزائر والاطلاع على المعاملات والأرباح السنوية.',
          fr: 'Consultation en ligne du solde et des opérations du livret d’épargne CNEP géré via les bureaux de poste.',
        },
        url: 'https://ecnep.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-7',
        title: {
          ar: 'تتبع مسار الطرود والبعائث البريدية (AP Tracking)',
          fr: 'Suivi des Envois et Colis Postaux — AP Tracking',
        },
        description: {
          ar: 'معرفة مكان وجود الطرود المسجلة، الرسائل السريعة، والبعائث الدولية المرسلة أو المستقبلة برمز التتبع.',
          fr: 'Localisation en temps réel des colis recommandés, envois express et paquets internationaux via le numéro de suivi.',
        },
        url: 'https://aptracking.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-8',
        title: {
          ar: 'خدمة «تصديق» لتصديق الوثائق لدى وزارة الخارجية',
          fr: 'Service Tasdik — Légalisation de Documents (MAE)',
        },
        description: {
          ar: 'إرسال واستلام الوثائق الإدارية والمدرسية لتصديقها لدى وزارة الشؤون الخارجية عبر مكاتب بريد الجزائر.',
          fr: 'Acheminement postal sécurisé et suivi de la légalisation des documents auprès du Ministère des Affaires Étrangères.',
        },
        url: 'https://tasdik.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-9',
        title: {
          ar: 'دليل وخريطة مكاتب البريد والموزعات (BaridiMap)',
          fr: 'Carte des Bureaux de Poste et Distributeurs — BaridiMap',
        },
        description: {
          ar: 'البحث الجغرافي عن أقرب مكتب بريد أو موزع آلي للنقود GAB مع عرض ساعات العمل والخدمات المتاحة.',
          fr: 'Annuaire cartographique des bureaux de poste et guichets automatiques de billets (GAB) à proximité.',
        },
        url: 'https://baridimap.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-10',
        title: {
          ar: 'متجر الكتاب الوطني (Store ANEP Poste)',
          fr: 'Librairie en Ligne — Store ANEP Algérie Poste',
        },
        description: {
          ar: 'منصة لاقتناء الكتب والمؤلفات الوطنية والدفع بالبطاقة الذهبية مع خدمة التوصيل عبر الشبكة البريدية.',
          fr: 'Boutique officielle dédiée à l’achat en ligne d’ouvrages nationaux avec livraison assurée par Algérie Poste.',
        },
        url: 'https://store-anep.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-11',
        title: {
          ar: 'منصة الطوابع البريدية (E-Philatélie)',
          fr: 'Boutique Philatélique Officielle — E-Philatélie',
        },
        description: {
          ar: 'فضاء لهواة جمع الطوابع البريدية لاكتشاف الإصدارات الوطنية وشرائها إلكترونيا عبر الإنترنت.',
          fr: 'Espace officiel permettant de découvrir et commander en ligne les timbres-poste commémoratifs algériens.',
        },
        url: 'https://ephilatelie.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-12',
        title: {
          ar: 'منصة «تقة» للتحقق من صحة كشوف الحسابات البريدية (Tikka)',
          fr: 'Plateforme Tikka — Authentification des Relevés CCP',
        },
        description: {
          ar: 'خدمة للتحقق من مصداقية كشوف الحسابات البريدية والوثائق المالية الصادرة إلكترونيا عبر رمز التحقق.',
          fr: 'Outil officiel destiné aux institutions et entreprises pour vérifier l’authenticité des relevés de compte CCP.',
        },
        url: 'https://tikka.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-13',
        title: {
          ar: 'منصة الدفع الإلكتروني للأعمال والتجار (Cashless)',
          fr: 'Espace Commerçants et Entreprises — Cashless',
        },
        description: {
          ar: 'فتح الحساب الجاري البريدي للأعمال وطلب أجهزة الدفع الإلكتروني TPE أو رمز الاستجابة السريع BaridiPay للتجار.',
          fr: 'Guichet dédié aux commerçants et professionnels pour souscrire aux solutions TPE, BaridiPay et comptes pros.',
        },
        url: 'https://cashless.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-14',
        title: {
          ar: 'بوابة المناقصات ودفاتر الشروط لبريد الجزائر (Port-Eco)',
          fr: 'Portail des Marchés et Appels d’Offres — Port-Eco',
        },
        description: {
          ar: 'الاطلاع على المناقصات الوطنية وسحب دفاتر الشروط الخاصة بمشاريع وتجهيزات مؤسسة بريد الجزائر للمتعاملين.',
          fr: 'Plateforme économique réservée aux soumissionnaires pour consulter et retirer les cahiers des charges d’Algérie Poste.',
        },
        url: 'https://porteco.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-15',
        title: {
          ar: 'خدمة «أمانتك» لتوصيل طلبات التجارة الإلكترونية (Amantec)',
          fr: 'Solution Logistique E-Commerce — Amantec',
        },
        description: {
          ar: 'خدمة لوجستية موجهة للتجار الإلكترونيين والمؤسسات لتوصيل الطرود عبر التراب الوطني بتتبع مضمون.',
          fr: 'Service de livraison nationale dédié aux boutiques e-commerce avec suivi et remise contre remboursement ou paiement électronique.',
        },
        url: 'https://amantec.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-16',
        title: {
          ar: 'منصة إيداع شكاوى ومقترحات بريد الجزائر',
          fr: 'Portail de Réclamations Algérie Poste',
        },
        description: {
          ar: 'تقديم الشكاوى المتعلقة بالعمليات المالية، تأخر البطاقة الذهبية، الصرافات الآلية، أو الطرود ومتابعة الرد برقم ملف.',
          fr: 'Service client en ligne pour déposer une réclamation monétique, bancaire ou postale et suivre sa résolution.',
        },
        url: 'https://reclamation.poste.dz/',
        isOnline: true,
      },
      {
        id: 'poste-srv-17',
        title: {
          ar: 'تطبيق بريدي موب (BaridiMob) الرسمي على Android',
          fr: 'Application Mobile BaridiMob',
        },
        description: {
          ar: 'إجراء التحويلات الفورية بين البطاقات الذهبية، دفع الفواتير، تعبئة الهاتف، وتوليد رموز السحب بدون بطاقة Cardless.',
          fr: 'Application officielle de paiements mobiles, virements instantanés, règlement de factures et retraits sans carte.',
        },
        url: 'https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc',
        isOnline: true,
      },
      {
        id: 'poste-srv-18',
        title: {
          ar: 'تطبيق E-CCP الرسمي لمتابعة الحساب والعمليات',
          fr: 'Application Mobile E-CCP Algérie Poste',
        },
        description: {
          ar: 'الولوج السريع من الهاتف إلى كشف الرصيد البريدي، طلب الصكوك، ومتابعة البطاقة الذهبية.',
          fr: 'Application mobile dédiée à la consultation du compte CCP, suivi de la carte Edahabia et demande de chéquiers.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.poste.eccp',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'أصحاب الحسابات البريدية الجارية CCP، حاملو البطاقة الذهبية، المدخرون في CNEP، والتجار والمؤسسات الاقتصادية',
        fr: 'Titulaires de comptes CCP, détenteurs de la carte Edahabia, épargnants CNEP, commerçants et entreprises',
      },
      processingTime: {
        ar: 'عمليات فورية في بريدي موب وECCP؛ تسليم البطاقة الذهبية الجديدة خلال أسبوعين إلى 4 أسابيع في مكتب البريد المختار',
        fr: 'Transactions instantanées sur BaridiMob et ECCP ; délivrance de la carte Edahabia sous 2 à 4 semaines au bureau de poste',
      },
      fees: {
        ar: 'فتح الحساب وإجراء المعاملات في ECCP مجاني مع رسوم رمزية سنوية أو للتحويل عبر بريدي موب وفق التعريفة البريدية الرسمية',
        fr: 'Accès ECCP gratuit ; frais annuels de tenue de compte et commissions réduites de virement BaridiMob selon barème officiel',
      },
      channel: {
        ar: 'بوابات poste.dz الفرعية، تطبيقا بريدي موب وE-CCP، الصرافات الآلية GAB، ومكاتب البريد عبر الوطن',
        fr: 'Portails web poste.dz, applications BaridiMob & E-CCP, guichets automatiques GAB et bureaux de poste',
      },
      keyRequirement: {
        ar: 'حساب بريدي جاري CCP نشط، رقم هاتف مرتبط بالبطاقة لدى الموزع الآلي GAB، وبطاقة التعريف البيومترية للفتح الأولي',
        fr: 'Compte CCP actif, numéro de téléphone lié sur un GAB pour BaridiMob/OTP, et CNIBE lors de l’ouverture initiale',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق فتح حساب بريدي جاري عبر CCPNet',
          fr: 'Pièces pour ouverture de compte CCPNet',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية، شهادة إقامة، استمارة الفتح المحملة من المنصة، وشهادة عمل أو إثبات نشاط',
          fr: 'CNIBE, certificat de résidence, formulaire CCPNet imprimé et attestation de travail ou justificatif de situation',
        },
      },
      {
        label: {
          ar: 'شروط طلب البطاقة الذهبية وتفعيل بريدي موب',
          fr: 'Conditions carte Edahabia et activation BaridiMob',
        },
        value: {
          ar: 'حساب CCP ساري المفعول، ربط رقم الهاتف الشخصي بالحساب في شباك البريد أو الموزع الآلي GAB، ووجود بطاقة ذهبية سارية الصلاحية',
          fr: 'Compte CCP actif, association du numéro mobile sur un GAB ou au guichet postal et détention d’une carte Edahabia valide',
        },
      },
      {
        label: {
          ar: 'متطلبات إيداع طلب تصديق الوثائق (Tasdik)',
          fr: 'Prérequis du service postal Tasdik',
        },
        value: {
          ar: 'الوثائق الأصلية المؤشرة سابقا من الجهات الوصية المختصة (البلدية، التربية، الجامعات، أو العدل) مع دفع رسوم البريد المضمون والتمغ',
          fr: 'Documents originaux préalablement certifiés par les tutelles compétentes avant acheminement postal vers le MAE',
        },
      },
      {
        label: {
          ar: 'متطلبات فضاء الأعمال والتجار Cashless وAmantec',
          fr: 'Critères espace pro Cashless et Amantec',
        },
        value: {
          ar: 'السجل التجاري، رقم التعريف الجبائي NIF، وحساب بريدي أو تجاري فعال لطلب أجهزة الدفع أو عقود التوصيل البريدي',
          fr: 'Registre de commerce, NIF et compte postal commercial actif pour activer les terminaux TPE ou contrats de livraison',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أربط رقم هاتفي بالبطاقة الذهبية لتفعيل تطبيق بريدي موب والدفع الإلكتروني؟',
          fr: 'Comment lier mon numéro de téléphone à la carte Edahabia pour activer BaridiMob ?',
        },
        answer: {
          ar: 'أدخل بطاقتك الذهبية في أي صراف آلي GAB لبريد الجزائر، اختر «خدمات أخرى» ثم «خدمات النقال / تفعيل بريدي موب»، وأدخل رقم هاتفك الشخصي ثم حمل التطبيق وسجل الدخول.',
          fr: 'Insérez votre carte Edahabia dans un distributeur GAB d’Algérie Poste, sélectionnez le menu services mobiles / BaridiMob puis enregistrez votre numéro avant de finaliser dans l’application.',
        },
      },
      {
        question: {
          ar: 'كيف أعرف الرقم السري الخاص بحساب ECCP لأول مرة؟',
          fr: 'Comment obtenir le code confidentiel ECCP pour consulter mon solde en ligne ?',
        },
        answer: {
          ar: 'تقدم لشباك أي مكتب بريد حاملا بطاقة التعريف وصك بريد مشطوب لطلب رمز ECCP الأولي، أو استخدم رابط الاسترجاع على eccp.poste.dz/password/reset إذا كان رقم هاتفك مسجلا مسبقا.',
          fr: 'Demandez votre code initial au guichet postal muni de votre CNIBE, ou utilisez la réinitialisation sur eccp.poste.dz/password/reset si votre mobile est déjà enregistré.',
        },
      },
      {
        question: {
          ar: 'ما هي خدمة «تصديق» وما الفرق بينها وبين التنقل إلى وزارة الخارجية؟',
          fr: 'Quel est l’avantage du service Tasdik par rapport au déplacement au MAE ?',
        },
        answer: {
          ar: 'تتيح خدمة Tasdik للمواطن إيداع وثائقه في مكتب البريد القريب من سكنه لتتكفل مصالح بريد الجزائر بإرسالها إلى وزارة الشؤون الخارجية بالجزائر العاصمة وتصديقها ثم إعادتها في ظرف أيام.',
          fr: 'Tasdik permet de déposer vos documents au bureau de poste local qui assure l’aller-retour sécurisé jusqu’au Ministère des Affaires Étrangères à Alger pour légalisation.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل عند سحب المبلغ في الصراف الآلي أو الدفع عبر بريدي موب دون إتمام العملية؟',
          fr: 'Que faire en cas de débit non abouti sur un GAB ou sur BaridiMob ?',
        },
        answer: {
          ar: 'قم بتدوين توقيت العملية ومبلغها ورقم الموزع الآلي أو مرجع الدفع، ثم أودع شكوى رقمية فورية عبر reclamation.poste.dz ليتم التحقق وإرجاع المبلغ لحسابك تلقائيا بعد المطابقة.',
          fr: 'Notez l’heure exacte, le montant et le numéro du GAB ou référence de transaction puis déposez une réclamation sur reclamation.poste.dz pour régularisation automatique.',
        },
      },
    ],
  },
];

export const batch7Guides: Record<string, RichGuideContent> = {
  naftal: {
    intro: {
      ar: [
        'تعد الشركة الوطنية لتسويق وتوزيع المنتجات البترولية «نفطال» العمود الفقري لتوزيع الوقود وغاز البترول المميع وزيوت التشحيم عبر شبكة واسعة تغطي كافة ولايات الجزائر. ومواكبة لاحتياجات السائقين، أطلقت الشركة بوابة «محطتي» E-Mahata لتنظيم اقتناء عجلات السيارات بأسعار مضبوطة دون طوابير، إلى جانب تطبيق «نفطال خدمات» للهواتف الذكية.',
        'تسمح منصة E-Mahata لأصحاب السيارات بحجز دورهم لاقتناء الإطارات المطابقة لمقاس مركباتهم في نقاط البيع المعتمدة، بينما يقدم تطبيق نفطال خدمات خريطة تفاعلية لمحطات الوقود، مراكز تحويل السيارات إلى نظام سيرغاز GPL، ومستودعات الغاز المنزلي، مدعومة بخط خدمة الزبائن السريع 3305.',
        'يستعرض هذا الدليل خطوات التسجيل الصحيح في بوابة محطتي، شروط الحضور والاستلام من المحطة، نصائح الاستفادة من خدمات الدفع الإلكتروني عبر TPE، وحلول المشاكل الشائعة عند البحث عن العجلات أو الحجز.'
      ],
      fr: [
        'Naftal, filiale du groupe Sonatrach, assure la distribution nationale des carburants, gaz de pétrole liquéfié (GPL/Sirghaz), lubrifiants et pneumatiques sur l’ensemble du territoire algérien. Pour simplifier l’accès aux produits très demandés, l’entreprise a déployé la plateforme numérique E-Mahata ainsi que l’application mobile Naftal Khadamat.',
        'E-Mahata permet aux propriétaires de véhicules de s’enregistrer en ligne et de réserver un créneau d’achat de pneumatiques dans le réseau agréé, tandis que Naftal Khadamat localise instantanément les stations-service, les carburants disponibles et les centres de conversion au GPL Sirghaz, avec le support du numéro court 3305.',
        'Ce guide pratique détaille la procédure de préinscription sur E-Mahata, les documents requis lors du retrait en station et les solutions face aux blocages techniques.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'امتلاك سيارة مسجلة قانونيا ببطاقة رمادية سارية المفعول باسم المتقدم أو بموجب وكالة موثقة.',
        'التحقق الدقيق من أبعاد ومقاسات العجلات المكتوبة على إطار السيارة قبل إدخالها في استمارة محطتي.',
        'توفر رقم هاتف شخصي نشط لاستقبال رسالة تأكيد الموعد من نقطة بيع نفطال المختارة.',
        'حمل بطاقة التعريف الوطنية والبطاقة الرمادية الأصلية يوم الحضور للمحطة للدفع والتركيب.',
      ],
      fr: [
        'Posséder un véhicule régulièrement immatriculé avec carte grise valide au nom du demandeur.',
        'Vérifier exactement les dimensions inscrites sur le flanc des pneus avant de remplir le formulaire E-Mahata.',
        'Disposer d’un numéro de téléphone actif pour recevoir la notification de disponibilité en point de vente.',
        'Présenter l’original de la carte grise et la CNIBE le jour du passage en station Naftal.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'الدخول إلى منصة محطتي والبحث عن خدمة العجلات',
          fr: 'Accéder à la plateforme E-Mahata',
        },
        detail: {
          ar: 'افتح الموقع الرسمي e-mahata.naftal.dz عبر المتصفح واختر الولاية ونقطة البيع الأقرب إليك.',
          fr: 'Ouvrez e-mahata.naftal.dz puis sélectionnez votre wilaya et le point de vente Naftal le plus proche.',
        },
      },
      {
        title: {
          ar: 'إدخال بيانات المركبة واختيار مقاس العجلات',
          fr: 'Saisir les références du véhicule et les dimensions',
        },
        detail: {
          ar: 'اكتب رقم اللوحة، رقم الهيكل، طراز السيارة، ومقاسات الإطارات بدقة، ثم أضف رقم التعريف والهاتف.',
          fr: 'Renseignez l’immatriculation, le numéro de châssis, le format exact des pneumatiques ainsi que vos coordonnées.',
        },
      },
      {
        title: {
          ar: 'حفظ وصل التسجيل وانتظار رسالة التأكيد',
          fr: 'Enregistrer le récépissé et attendre la convocation',
        },
        detail: {
          ar: 'اطبع استمارة التسجيل أو احتفظ برمزها إلى غاية إخطارك عبر رسالة SMS بموعد التوجه إلى المحطة.',
          fr: 'Téléchargez le bon d’inscription et attendez la notification SMS confirmant la disponibilité de votre commande.',
        },
      },
      {
        title: {
          ar: 'استلام العجلات أو تحديد المحطات عبر نفطال خدمات',
          fr: 'Retirer les pneus et utiliser Naftal Khadamat',
        },
        detail: {
          ar: 'تقدم للمحطة في الموعد بالوثائق الأصلية، واستخدم تطبيق نفطال خدمات للوصول السريع لمحطات الوقود وسيرغاز.',
          fr: 'Présentez-vous à la date fixée muni des originaux et appuyez-vous sur Naftal Khadamat pour localiser les stations.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم توفر مقاس العجلات المطلوب في ولايتك عند التسجيل',
          fr: 'Dimensions de pneumatiques indisponibles dans la wilaya choisie',
        },
        solution: {
          ar: 'تحقق من المحطات المجاورة ضمن نفس الولاية أو الولايات القريبة، وتابع التحديثات الدورية للمخزون على بوابة محطتي.',
          fr: 'Testez d’autres points de vente de votre wilaya ou des wilayas limitrophes et vérifiez régulièrement les réapprovisionnements.',
        },
      },
      {
        issue: {
          ar: 'خطأ في رقم الهيكل أو مقاس العجلة بعد تأكيد الاستمارة',
          fr: 'Erreur saisie sur le numéro de châssis ou le format après validation',
        },
        solution: {
          ar: 'اتصل بخدمة الزبائن على الرقم 3305 لطلب التوضيح قبل موعد التركيب، إذ تطابق المحطة البيانات مع البطاقة الرمادية عند التسليم.',
          fr: 'Contactez le support client au 3305 avant la date de passage afin d’éviter un refus lors du contrôle de la carte grise sur place.',
        },
      },
      {
        issue: {
          ar: 'توقف خريطة محطات الوقود في تطبيق نفطال خدمات',
          fr: 'Carte des stations non affichée dans Naftal Khadamat',
        },
        solution: {
          ar: 'فعل إذن الموقع الجغرافي GPS في إعدادات الهاتف وحدث التطبيق إلى آخر نسخة من متجر Google Play.',
          fr: 'Activez la géolocalisation GPS dans les paramètres du smartphone et mettez à jour l’application depuis Google Play.',
        },
      },
    ],
    extraFaqs: [],
  },

  nifenligne: {
    intro: {
      ar: [
        'يمثل رقم التعريف الجبائي (NIF) حجر الأساس لكل نشاط تجاري، اقتصادي، حرفي أو مهني في الجزائر، إذ يشترط لإبرام الصفقات العمومية، فتح الحسابات البنكية التجارية، التصريح الجبائي عبر جبايتيك، وممارسة الاستيراد والتصدير. وقد وفرت المديرية العامة للضرائب بوابة NIF En Ligne لرقمنة دورة حياة هذا الرقم بالكامل.',
        'تغطي المنصة جميع العمليات الضرورية لكل من الأشخاص المعنويين (الشركات والجمعيات) والأشخاص الطبيعيين (التجار، الحرفيين، أصحاب المهن الحرة والمقاولين الذاتيين): تقديم طلب جديد، متابعة دراسة الملف، تعديل البيانات قبل الاعتماد، استرجاع رقم الطلب أو الوصل الضائع، طباعة شهادة الترقيم الجبائي، وأداة التحقق الفوري من صحة أي رقم جبائي.',
        'يشرح هذا الدليل خطوة بخطوة الفروق بين مسار الشخص الطبيعي والمعنوي، الوثائق الواجب تجهيزها قبل ملء الاستمارة، كيفية الانتقال السلس إلى بوابة التصريح عن بعد «جبايتيك»، وأساليب معالجة أخطاء الإدخال أو تأخر المصادقة.'
      ],
      fr: [
        'Le Numéro d’Identification Fiscale (NIF) est le sésame indispensable de toute activité économique, commerciale, artisanale ou libérale en Algérie : il conditionne la facturation légale, la soumission aux marchés publics, l’ouverture de comptes bancaires professionnels et l’accès à la télédéclaration sur Jibaya’tic.',
        'Le portail NIF En Ligne de la Direction Générale des Impôts (DGI) dématérialise l’ensemble du cycle pour les personnes morales (sociétés, associations) et les personnes physiques (commerçants, artisans, auto-entrepreneurs) : dépôt initial, suivi de traitement, rectification, récupération des numéros de dossier ou récépissés, impression du certificat NIF et vérification publique d’authenticité.',
        'Ce guide pratique détaille la procédure complète selon votre statut juridique, les pièces à fournir à l’inspection des impôts et les solutions aux difficultés fréquentes d’immatriculation.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'امتلاك سجل تجاري إلكتروني حديث أو بطاقة حرفي أو بطاقة مقاول ذاتي أو اعتماد مهنة حرة ساري المفعول.',
        'تجهيز رقم التعريف الوطني NIN للمسير أو الشخص الطبيعي وتحديد مفتشية أو مركز الضرائب التابع له إقليميا.',
        'توفر عقد إيجار موثق أو سند ملكية يثبت عنوان المقر المهني أو الاجتماعي بدقة.',
        'عدم وجود ترقيم جبائي سابق فعال لنفس الشخص الطبيعي، إذ يحتفظ الفرد برقم جبائي واحد مدى الحياة المهنية.',
      ],
      fr: [
        'Détenir un registre de commerce électronique, carte d’artisan, carte d’auto-entrepreneur ou agrément professionnel en cours de validité.',
        'Connaître le NIN du gérant ou de l’entrepreneur et identifier l’inspection ou centre des impôts (CDI/CPI) territorialement compétent.',
        'Disposer d’un bail commercial notarié ou titre de propriété justifiant l’adresse exacte d’activité.',
        'Vérifier l’absence de doublon pour une personne physique, le NIF étant unique et personnel.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'اختيار استمارة الطلب حسب الصفة القانونية',
          fr: 'Sélectionner le formulaire Personne Physique ou Morale',
        },
        detail: {
          ar: 'ادخل إلى nifenligne.mf.gov.dz واختر مسار الشخص المعنوي للشركات أو الشخص الطبيعي للتجار والمهن الحرة.',
          fr: 'Rendez-vous sur nifenligne.mf.gov.dz et ouvrez ChoixMorale pour les sociétés ou FormulairePhysique pour les indépendants.',
        },
      },
      {
        title: {
          ar: 'تعبئة بيانات السجل التجاري والهوية وطبع الوصل',
          fr: 'Renseigner les informations RC et imprimer le récépissé',
        },
        detail: {
          ar: 'أدخل رقم السجل التجاري، النشاط، العنوان، وكلمة مرور خاصة بالطلب ثم احفظ رقم التتبع واطبع وصل الاستلام.',
          fr: 'Complétez le numéro RC, les codes d’activité, l’adresse exacte et un mot de passe de suivi, puis imprimez l’accusé de réception.',
        },
      },
      {
        title: {
          ar: 'متابعة المصادقة وطباعة شهادة الترقيم الجبائي',
          fr: 'Suivre la validation et éditer l’attestation NIF',
        },
        detail: {
          ar: 'تحقق من حالة الطلب عبر بوابة المتابعة؛ وفور ظهور الموافقة يمكنك طباعة شهادة NIF مباشرة أو سحبها لدى المفتشية.',
          fr: 'Consultez l’état d’avancement en ligne ; une fois validé par les services fiscaux, éditez le certificat NIF depuis le module d’impression.',
        },
      },
      {
        title: {
          ar: 'التحقق والربط مع بوابة جبايتيك للتصريح الضريبي',
          fr: 'Contrôler le NIF et activer Jibaya’tic',
        },
        detail: {
          ar: 'تأكد من ظهور الرقم في أداة الفحص nif.asp ثم فعل حساب التصريح عن بعد على jibayatic.mf.gov.dz.',
          fr: 'Vérifiez l’activation publique sur nif.asp puis finalisez votre adhésion à la télédéclaration sur jibayatic.mf.gov.dz.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'بقاء الطلب في حالة «قيد الدراسة» لمدة طويلة دون مصادقة',
          fr: 'Dossier bloqué en statut « En cours de traitement »',
        },
        solution: {
          ar: 'غالبا ما يتطلب التفعيل الأولي تقديم النسخة الورقية من وصل الاستلام مرفقة بالسجل التجاري وعقد المحل لدى مكتب الترقيم الجبائي بمفتشية الضرائب.',
          fr: 'Dans la majorité des circonscriptions, il convient de déposer le récépissé imprimé accompagné des pièces originales au bureau NIF du CDI/CPI pour validation finale.',
        },
      },
      {
        issue: {
          ar: 'رسالة وجود ترقيم جبائي سابق عند تسجيل شخص طبيعي',
          fr: 'Message signalant un NIF déjà attribué pour une personne physique',
        },
        solution: {
          ar: 'لا يطلب رقم جديد إذا كنت قد حصلت على NIF سابقا؛ استخدم نفس الرقم الجبائي الأولي مع إيداع تصريح بالتعديل أو إضافة النشاط الجديد لدى المفتشية.',
          fr: 'Un seul NIF est attribué à vie pour une personne physique : conservez votre numéro existant et déclarez simplement la reprise ou modification d’activité.',
        },
      },
      {
        issue: {
          ar: 'ضياع رقم الطلب وكلمة المرور الخاصة بطلب الترقيم الجبائي',
          fr: 'Perte du numéro de dossier ou du mot de passe de suivi',
        },
        solution: {
          ar: 'استعمل روابط استرجاع رقم الطلب (AutrecpnumdemPM / AutrecpnumdemPH) وإعادة طباعة الوصل أو راسل الدعم عبر صفحة التواصل.',
          fr: 'Utilisez les utilitaires officiels de récupération de référence et de réédition de récépissé disponibles sur le portail.',
        },
      },
    ],
    extraFaqs: [],
  },

  ocrc: {
    intro: {
      ar: [
        'يمثل الديوان المركزي لقمع الفساد (OCRC) مصلحة عملياتية للشرطة القضائية متخصصة في التحري والبحث عن الجرائم المرتبطة بالفساد المالي والإداري والاقتصادي في الجزائر. وقد خصص الديوان بوابة إلكترونية مباشرة لاستقبال شكاوى المواطنين والمتعاملين الاقتصاديين وتسهيل التبليغ عن التجاوزات بسرية وأمان.',
        'يغطي نطاق عمل الديوان قضايا الرشوة في القطاعين العام والخاص، الاختلاس وتبديد الأموال العمومية، منح امتيازات غير مبررة في الصفقات العمومية، استغلال النفوذ، وتبييض عائدات الفساد. ويضمن التشريع الجزائري حماية قانونية صارمة للمبلغين والشهود لتشجيع المواطنة الإيجابية وكشف الفساد.',
        'يقدم هذا الدليل التوضيحي شروط صياغة شكوى جدية ومؤيدة عبر موقع الديوان، التمييز بين صلاحيات OCRC والسلطة العليا HATPLC، والخطوات العملية لرفع البلاغ بأمان.'
      ],
      fr: [
        'L’Office Central de Répression de la Corruption (OCRC) constitue un service opérationnel de police judiciaire spécialisé dans la recherche et la constatation des infractions de corruption et de délinquance économique et financière en Algérie. Son portail officiel intègre un guichet numérique permettant aux citoyens et opérateurs de déposer une plainte ou un signalement en ligne.',
        'Les investigations de l’office portent notamment sur la corruption active et passive, le détournement de deniers publics, le favoritisme dans les marchés publics, l’enrichissement illicite et le blanchiment de capitaux. La législation algérienne garantit par ailleurs la protection de l’identité et de l’intégrité des lanceurs d’alerte agissant de bonne foi.',
        'Ce guide pratique précise les éléments indispensables pour rédiger un signalement exploitable, la différence entre la saisine de l’OCRC et celle de la HATPLC, ainsi que les bonnes pratiques de confidentialité.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر وقائع محددة ومؤشرات جدية تتعلق بجريمة فساد أو مخالفة مالية وإدارية تمس المال العام أو المرفق العمومي.',
        'تضمين الشكوى أسماء أو صفات الجهات المعنية، التواريخ، ومكان وقوع التجاوز المشتبه فيه.',
        'إرفاق الوثائق أو القرائن المتاحة (قرارات، عقود، وصولات، أو مراسلات) لدعم الفحص الأولي من الضبطية القضائية.',
        'التحلي بحسن النية وتجنب الادعاءات الكيدية أو الخلافات الشخصية الخارجة عن اختصاص قمع الفساد.',
      ],
      fr: [
        'Disposer de faits précis, datés et circonstanciés relevant d’une atteinte à l’intégrité financière ou publique.',
        'Identifier autant que possible les entités, services, dates et lieux concernés par les agissements signalés.',
        'Joindre les documents ou preuves disponibles pour faciliter l’évaluation préliminaire par les enquêteurs.',
        'Agir de bonne foi, les litiges purement civils ou dénonciations calomnieuses ne relevant pas des compétences de l’office.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'تحضير ملخص الوقائع والمستندات الداعمة',
          fr: 'Structurer l’exposé des faits et pièces jointes',
        },
        detail: {
          ar: 'اكتب سردا واضحا ومرتبا زمنيا للأحداث، وجهز نسخا رقمية من الوثائق أو العقود التي تثبت التجاوز.',
          fr: 'Rédigez un récit chronologique factuel des événements et numérisez les justificatifs en votre possession.',
        },
      },
      {
        title: {
          ar: 'الدخول إلى استمارة تقديم شكوى لدى OCRC',
          fr: 'Accéder au formulaire de plainte officiel de l’OCRC',
        },
        detail: {
          ar: 'انتقل إلى صفحة تقديم شكوى عبر الموقع الرسمي ocrc.gov.dz وتحقق من قفل الأمان HTTPS في المتصفح.',
          fr: 'Ouvrez la page de dépôt de plainte sur le domaine officiel ocrc.gov.dz en vérifiant la connexion sécurisée HTTPS.',
        },
      },
      {
        title: {
          ar: 'تعبئة بيانات البلاغ وتحديد وسيلة التواصل',
          fr: 'Remplir le formulaire et les coordonnées de contact',
        },
        detail: {
          ar: 'أدخل تفاصيل الشكوى بدقة وأرفق الملفات المطلوبة مع اختيار طريقة التواصل الملائمة لمتابعة التحري.',
          fr: 'Complétez l’ensemble des champs requis, téléversez vos annexes et indiquez un moyen de contact fiable.',
        },
      },
      {
        title: {
          ar: 'إرسال البلاغ والتعاون عند الاستدعاء القانوني',
          fr: 'Transmettre le dossier et coopérer à l’instruction',
        },
        detail: {
          ar: 'بعد الإرسال، تتولى المصالح المختصة دراسة المعطيات وإحالتها للتحقيق القضائي أو الاستماع للشاهد في إطار السرية.',
          fr: 'Après validation, le dossier est analysé par les enquêteurs qui peuvent solliciter des précisions complémentaires sous couvert de confidentialité.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'اختلاط التبليغ بين النزاعات العمالية العادية وقضايا الفساد',
          fr: 'Signalement relevant plutôt du droit du travail ou d’un litige privé',
        },
        solution: {
          ar: 'إذا كان الإشكال يخص الأجور أو عدم التصريح بالضمان الاجتماعي فتوجه لمنصة «تبليغ» بوزارة العمل، بينما تختص OCRC بقضايا الرشوة والمال العام والصفقات.',
          fr: 'Les litiges salariaux relèvent de la plateforme Tabligh (MTESS) ; l’OCRC traite exclusivement les faits pénaux de corruption et malversations financières.',
        },
      },
      {
        issue: {
          ar: 'تخوف المبلغ من كشف هويته أو تعرضه لمضايقات',
          fr: 'Crainte de représailles lors du signalement',
        },
        solution: {
          ar: 'يكفل القانون حماية المبلغين؛ كما يمكن تقديم البلاغات الإدارية والوقائية أيضا عبر بوابة السلطة العليا للشفافية HATPLC أو خلية النزاهة بالوزارة المعنية.',
          fr: 'La confidentialité est encadrée par la loi ; des canaux complémentaires existent également via la HATPLC ou les cellules ministérielles d’intégrité.',
        },
      },
      {
        issue: {
          ar: 'كبر حجم الملفات المرفقة بالشكوى عند الرفع',
          fr: 'Refus de téléversement pour taille excessive des pièces jointes',
        },
        solution: {
          ar: 'قم بضغط ملفات PDF والصور إلى صيغة خفيفة واضحة وأرفق الوثائق الأساسية أولا، مع الاحتفاظ ببقية الأرشيف لتقديمه عند الاستماع.',
          fr: 'Compressez vos PDF tout en préservant leur lisibilité et joignez les pièces maîtresses en priorité.',
        },
      },
    ],
    extraFaqs: [],
  },

  onpo: {
    intro: {
      ar: [
        'يتولى الديوان الوطني للحج والعمرة (ONPO) تحت وصاية وزارة الشؤون الدينية والأوقاف التنظيم الشامل لموسمي الحج والعمرة في الجزائر. وقد شهد هذا القطاع تحولا رقميا جوهريا يبدأ من التسجيل الإلكتروني في قرعة الحج عبر موقع وزارة الداخلية، ويمتد إلى حجز التذاكر والفنادق واستخراج التأشيرة الإلكترونية عبر البوابة الجزائرية للحج.',
        'بالتكامل بين البوابة الجزائرية للحج (Bawabet El Hadj) والبوابة الجزائرية للعمرة (Bawabet El Omra)، بات بإمكان الحاج الفائز في القرعة إتمام إجراءات سفره وإقامته في البقاع المقدسة بمرونة وشفافية، كما يتمكن المعتمرون من التحقق المسبق من اعتماد وكالات السياحة والأسفار قبل التعاقد معها.',
        'يجمع هذا الدليل شروط المشاركة في قرعة الحج، الوثائق الطبية والإدارية اللازمة بعد الفوز، خطوات الحجز على البوابة الرسمية، وأبرز النصائح لتفادي الأخطاء عند الدفع أو اختيار الوكالة.'
      ],
      fr: [
        'L’Office National du Pèlerinage et de la Omra (ONPO), placé sous la tutelle du Ministère des Affaires Religieuses et des Wakfs, coordonne l’ensemble du parcours des pèlerins algériens. La dématérialisation couvre désormais chaque étape, de la préinscription au tirage au sort du Hadj sur le portail du Ministère de l’Intérieur jusqu’à la réservation des vols et chambres sur Bawabet El Hadj.',
        'À travers Bawabet El Hadj et Bawabet El Omra, les pèlerins sélectionnés finalisent leurs formalités de voyage, de visa et d’hébergement à La Mecque et Médine en toute transparence, tandis que les candidats à la Omra vérifient la liste officielle des agences de voyages agréées pour la saison.',
        'Ce guide pratique rassemble les conditions légales du tirage au sort, le calendrier des démarches post-sélection et les solutions face aux blocages techniques.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بلوغ سن 19 سنة كاملة على الأقل عند التسجيل في قرعة الحج وعدم أداء الفريضة خلال السنوات السبع الأخيرة.',
        'التسجيل عبر بلدية الإقامة الفعلية باستخدام بطاقة التعريف الوطنية البيومترية.',
        'حيازة جواز سفر بيومتري ساري المفعول لمدة تغطي السفر والعودة بستة أشهر على الأقل عند الفوز بالقرعة.',
        'اجتياز الفحص الطبي المعتمد من اللجنة الطبية الولائية وأداء التلقيحات الوقائية المقررة.',
      ],
      fr: [
        'Être âgé d’au moins 19 ans révolus lors du tirage au sort du Hadj et ne pas avoir accompli le pèlerinage durant les 7 années précédentes.',
        'S’inscrire dans sa commune de résidence réelle à l’aide de la carte nationale d’identité biométrique (CNIBE).',
        'Détenir un passeport biométrique valide au moins six mois après la date prévue du voyage.',
        'Obtenir le certificat d’aptitude médicale délivré par la commission de wilaya et effectuer les vaccinations obligatoires.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'التسجيل في قرعة الحج السنوية عن بعد',
          fr: 'S’inscrire en ligne au tirage au sort du Hadj',
        },
        detail: {
          ar: 'ادخل إلى pelerinage.interieur.gov.dz عند فتح فترة التسجيلات، واملأ استمارتك برقم التعريف الوطني وبيانات البلدية.',
          fr: 'Rendez-vous sur pelerinage.interieur.gov.dz durant la campagne annuelle et saisissez vos données biométriques et communales.',
        },
      },
      {
        title: {
          ar: 'إتمام الفحص الطبي ودفع تكلفة الحج بعد الفوز',
          fr: 'Passer la visite médicale et régler les frais après sélection',
        },
        detail: {
          ar: 'في حال الفوز بالقرعة، أتمم الدفتر الصحي لدى اللجنة الطبية ثم سدد تكلفة الحج في فرع بنك الجزائر لاستلام وصل الدفع.',
          fr: 'Si vous êtes sélectionné, complétez l’examen médical puis réglez le montant officiel du Hadj auprès de la Banque d’Algérie.',
        },
      },
      {
        title: {
          ar: 'حجز الرحلة والغرفة على البوابة الجزائرية للحج',
          fr: 'Réserver le vol et l’hôtel sur Bawabet El Hadj',
        },
        detail: {
          ar: 'أنشئ حسابك على bawabetelhadj.dz، اربط جواز سفرك بوصل الدفع، واختر تاريخ الرحلة ونوع الغرفة في البقاع المقدسة.',
          fr: 'Connectez-vous sur bawabetelhadj.dz, associez votre passeport et quittance bancaire puis sélectionnez votre vol et hébergement.',
        },
      },
      {
        title: {
          ar: 'التحقق من الوكالات المعتمدة لبرامج العمرة',
          fr: 'Vérifier les agences agréées sur Bawabet El Omra',
        },
        detail: {
          ar: 'راجع قائمة الوكالات المرخصة على onpo.dz وبوابة العمرة bawabetelomra.dz قبل حجز أي رحلة عمرة.',
          fr: 'Consultez l’annuaire officiel des agences autorisées sur onpo.dz et bawabetelomra.dz avant de contracter votre séjour Omra.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم قبول التسجيل في القرعة بسبب سبق الحج قبل أقل من 7 سنوات',
          fr: 'Rejet d’inscription lié à un précédent Hadj récent',
        },
        solution: {
          ar: 'يقوم النظام آليا بالتحقق من قاعدة بيانات الحجاج؛ لا يمكن إعادة التسجيل إلا بعد استيفاء المدة القانونية الفاصلة المحددة بسبع سنوات.',
          fr: 'Le contrôle automatisé bloque toute nouvelle participation tant que le délai réglementaire de sept années depuis le dernier Hadj n’est pas écoulé.',
        },
      },
      {
        issue: {
          ar: 'عدم تفعيل حساب الحاج على بوابة bawabetelhadj.dz بعد دفع التكلفة',
          fr: 'Compte non activé sur Bawabet El Hadj après paiement à la banque',
        },
        solution: {
          ar: 'تأكد من إيداع الملف الورقي وجواز السفر لدى مصالح الدائرة أو الولاية لإرسال التأكيد الإداري، وانتظر تحديث الربط البنكي في غضون 24 ساعة.',
          fr: 'Assurez-vous que votre passeport et le reçu bancaire ont bien été validés au guichet de daïra/wilaya pour débloquer l’accès en ligne.',
        },
      },
      {
        issue: {
          ar: 'صعوبة حجز تذكرة الرحلة للمرافق أو الزوجين في نفس الطائرة',
          fr: 'Difficulté à regrouper les réservations de vol d’un couple ou accompagnant',
        },
        solution: {
          ar: 'قم بربط ملفات المجموعة العائلية أولا داخل حساب البوابة الجزائرية للحج قبل اختيار موعد الرحلة والغرفة لضمان الحجز المشترك.',
          fr: 'Utilisez la fonction d’association des dossiers familiaux sur Bawabet El Hadj avant de valider les vols et chambres.',
        },
      },
    ],
    extraFaqs: [],
  },

  ooredoo: {
    intro: {
      ar: [
        'يقدم متعامل الهاتف النقال أوريدو الجزائر (Ooredoo Algérie) مجموعة متكاملة من الخدمات الرقمية الموجهة لتبسيط تعاملات المشتركين اليومية، سواء على مستوى خطوط الدفع المسبق أو خطوط الفوترة الشهرية. ومن خلال منصة التعبئة الإلكترونية E-Storm وتطبيق My Ooredoo، يمكن لكل زبون التحكم الكامل في رصيده وباقاته دون التوجه إلى نقاط البيع.',
        'توفر بوابة E-Storm خدمة شحن الرصيد وتخليص فواتير أوريدو على مدار الساعة باستخدام البطاقة الذهبية لبريد الجزائر أو البطاقة البنكية CIB بأعلى معايير الأمان. كما يتيح تطبيق My Ooredoo متابعة دقيقة لاستهلاك الإنترنت والدقائق، الاشتراك في العروض المخصصة، تحويل الرصيد، والحصول على الدعم المباشر.',
        'تجد في هذا الدليل خطوات الشحن الآمن عبر بوابة E-Storm، طريقة تفعيل حساب My Ooredoo واسترجاع رمز PUK، وأبرز الحلول العملية في حال تعثر الدفع الإلكتروني.'
      ],
      fr: [
        'Ooredoo Algérie met à la disposition de ses abonnés des interfaces numériques fluides permettant de gérer chaque aspect de la ligne mobile à distance. Grâce au portail officiel E-Storm et à l’application My Ooredoo, le rechargement de crédit, le paiement des factures et la personnalisation des forfaits deviennent instantanés.',
        'La plateforme E-Storm fonctionne 24h/24 avec les cartes Edahabia et CIB pour créditer les lignes prépayées ou apurer les factures mensuelles. Parallèlement, My Ooredoo centralise le suivi de consommation data et voix, les transferts de solde et l’accès rapide aux options de service client.',
        'Ce guide décrit la marche à suivre pour recharger sans erreur sur E-Storm, configurer l’application mobile My Ooredoo et résoudre les incidents courants de transaction.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'امتلاك شريحة أوريدو نشطة ومسجلة باسم المشترك ببطاقة التعريف الوطنية.',
        'توفر بطاقة الدفع الذهبية لبريد الجزائر أو بطاقة بنكية CIB مفعلة للتجارة الإلكترونية.',
        'وجود رقم هاتف مرتبط بالبطاقة لاستلام رمز التأكيد السري OTP عند الدفع عبر E-Storm.',
        'تثبيت تطبيق My Ooredoo الرسمي على الهاتف الذكي من متجر Google Play.',
      ],
      fr: [
        'Détenir une carte SIM Ooredoo active et régulièrement enregistrée au nom du titulaire.',
        'Disposer d’une carte Edahabia ou CIB activée pour les paiements sur internet.',
        'Recevoir les SMS OTP sur le numéro associé à la carte lors des transactions E-Storm.',
        'Installer l’application officielle My Ooredoo depuis Google Play.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'فتح بوابة E-Storm الإلكترونية لأوريدو',
          fr: 'Accéder au portail de paiement E-Storm',
        },
        detail: {
          ar: 'انتقل إلى estorm.ooredoo.dz واختر خدمة تعبئة الرصيد أو تسديد فاتورة الهاتف.',
          fr: 'Ouvrez estorm.ooredoo.dz puis choisissez le rechargement de crédit ou le règlement de facture.',
        },
      },
      {
        title: {
          ar: 'إدخال رقم هاتف أوريدو وتحديد المبلغ',
          fr: 'Renseigner le numéro Ooredoo et le montant',
        },
        detail: {
          ar: 'اكتب رقم الخط المكون من عشرة أرقام بدقة، حدد قيمة التعبئة، ثم اختر الدفع بالبطاقة الذهبية أو CIB.',
          fr: 'Saisissez les dix chiffres du numéro bénéficiaire, sélectionnez le montant puis le type de carte.',
        },
      },
      {
        title: {
          ar: 'تأكيد عملية الدفع برمز الحماية OTP',
          fr: 'Valider la transaction par code SMS OTP',
        },
        detail: {
          ar: 'أدخل معلومات البطاقة ورمز التأكيد المرسل عبر SMS لإتمام العملية واستلام الرصيد في الحين.',
          fr: 'Complétez les champs bancaires et confirmez avec le code reçu par SMS pour un crédit immédiat.',
        },
      },
      {
        title: {
          ar: 'متابعة الباقات والاستهلاك عبر تطبيق My Ooredoo',
          fr: 'Piloter vos forfaits via My Ooredoo',
        },
        detail: {
          ar: 'افتح تطبيق My Ooredoo لتفعيل عروض الإنترنت والمكالمات والاطلاع على الفواتير والخدمات الإضافية.',
          fr: 'Consultez votre solde data/voix, activez vos offres Dima ou Gold et gérez vos options dans My Ooredoo.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض عملية الدفع عبر بوابة E-Storm عند إدخال رمز البطاقة',
          fr: 'Échec de transaction E-Storm lors de la validation bancaire',
        },
        solution: {
          ar: 'تأكد من كتابة رمز CVV2 الموجود خلف البطاقة وتاريخ الصلاحية بدقة، وتحقق من تفعيل خدمة الدفع الإلكتروني على بطاقتك لدى البريد أو البنك.',
          fr: 'Vérifiez le code CVV2, la date d’expiration et assurez-vous auprès de votre banque ou d’Algérie Poste que le paiement en ligne est actif.',
        },
      },
      {
        issue: {
          ar: 'تأخر تحديث الرصيد داخل تطبيق My Ooredoo بعد الشحن',
          fr: 'Solde rechargé non affiché immédiatement dans My Ooredoo',
        },
        solution: {
          ar: 'قم بسحب الشاشة للأسفل لتحديث التطبيق أو اطلب الرمز #200* عبر الهاتف للتحقق الفوري من الرصيد المضاف.',
          fr: 'Actualisez l’écran d’accueil de l’application ou composez le code USSD *200# pour vérifier le crédit instantanément.',
        },
      },
      {
        issue: {
          ar: 'قفل الشريحة وطلب رمز PUK',
          fr: 'Carte SIM bloquée demandant le code PUK',
        },
        solution: {
          ar: 'يمكنك استخراج رمز PUK مجانا من داخل تطبيق My Ooredoo عبر خط آخر أو بالاتصال بخدمة الزبائن 333 وتقديم بيانات الهوية.',
          fr: 'Consultez votre code PUK directement dans l’espace My Ooredoo ou contactez le 333 muni de vos informations d’identité.',
        },
      },
    ],
    extraFaqs: [],
  },

  opgi: {
    intro: {
      ar: [
        'يتولى ديوان الترقية والتسيير العقاري (OPGI) في كل ولاية تسيير حظيرة السكنات العمومية الإيجارية (LPL) والمحلات التجارية التابعة للقطاع العمومي. ولمعالجة الاكتظاظ في وحدات التسيير الجوارية، أطلقت الدواوين بوابات إلكترونية وتطبيق OPGI Mobile لتمكين المستأجرين من تسديد فواتير الكراء الشهري عن بعد.',
        'من خلال التكامل مع أنظمة الدفع البريدي والبنكي (البطاقة الذهبية وCIB وتطبيق بريدي موب)، يستطيع المستأجر الاطلاع على رصيد كرائه، تسديد الأقساط الشهرية أو المتأخرات في ثوان، وتحميل وصل الدفع الرسمي فوريا. كما توفر المنصات متابعة لطلبات الصيانة، إعادة تهيئة الأجزاء المشتركة، وملفات التنازل عن أملاك الدولة العقارية للمستفيدين المؤهلين.',
        'يشرح هذا الدليل خطوات الدفع الإلكتروني لفاتورة كراء OPGI، كيفية استخدام تطبيق الهاتف الرسمي، وأساليب تسوية الأخطاء الفوترية أو التحضير لملف التمليك.'
      ],
      fr: [
        'L’Office de Promotion et de Gestion Immobilière (OPGI) assure dans chaque wilaya la gestion administrative, financière et technique du parc de logements publics locatifs (LPL) ainsi que des locaux à usage commercial. Pour faciliter le règlement des loyers sans déplacement en unité de proximité, les offices proposent des guichets de télépaiement et l’application OPGI Mobile.',
        'Grâce à l’interconnexion avec les systèmes Edahabia, CIB et BaridiMob, les locataires consultent leurs avis d’échéance, règlent leurs mensualités ou régularisations en quelques instants et téléchargent immédiatement leur quittance officielle. Ces portails relayent également les annonces relatives à la maintenance et aux dispositifs de cession des logements publics.',
        'Ce guide pratique précise la marche à suivre pour payer votre loyer OPGI en ligne, retrouver votre référence locataire et corriger d’éventuelles anomalies d’arriérés.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'حيازة عقد إيجار رسمي ساري المفعول صادر عن ديوان الترقية والتسيير العقاري للولاية المعنية.',
        'معرفة رمز المستأجر أو مرجع الفاتورة الشهرية المدون على إشعار الكراء السابق.',
        'توفر بطاقة دفع إلكترونية (الذهبية أو CIB) مفعلة لاستقبال رمز التأكيد SMS.',
        'تحديث بيانات العقد لدى وحدة التسيير في حال التحويل العائلي أو طلب التنازل والتمليك.',
      ],
      fr: [
        'Détenir un bail locatif régulier établi par l’OPGI de votre wilaya.',
        'Disposer du code locataire ou numéro de contrat figurant sur les quittances mensuelles.',
        'Posséder une carte Edahabia ou CIB active avec code de validation OTP par SMS.',
        'Maintenir sa situation contractuelle à jour auprès de l’unité de gestion en cas de cession ou transfert de bail.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'الولوج إلى بوابة الدفع لولايتك أو تطبيق OPGI Mobile',
          fr: 'Accéder au portail OPGI de wilaya ou OPGI Mobile',
        },
        detail: {
          ar: 'افتح الموقع الإلكتروني لديوان OPGI لولايتك أو شغل تطبيق OPGI Mobile على الهاتف الذكي.',
          fr: 'Rendez-vous sur le portail en ligne de votre OPGI de wilaya ou ouvrez l’application OPGI Mobile.',
        },
      },
      {
        title: {
          ar: 'إدخال رمز المستأجر والتحقق من الفواتير',
          fr: 'Saisir le code locataire et vérifier l’échéance',
        },
        detail: {
          ar: 'أدخل مرجع العقد للاطلاع على الشهر المستحق ومبلغ الكراء والأعباء المشتركة بدقة.',
          fr: 'Renseignez la référence client pour afficher la mensualité due et les éventuelles charges.',
        },
      },
      {
        title: {
          ar: 'إتمام الدفع بالبطاقة الذهبية أو CIB',
          fr: 'Valider le paiement par carte Edahabia ou CIB',
        },
        detail: {
          ar: 'اختر وسيلة الدفع وأدخل بيانات البطاقة ثم أكد العملية برمز التحقق المرسل عبر SMS أو عبر بريدي موب.',
          fr: 'Procédez au règlement électronique sur la passerelle sécurisée et confirmez avec le code SMS OTP.',
        },
      },
      {
        title: {
          ar: 'تحميل وحفظ وصل الدفع الإلكتروني',
          fr: 'Télécharger et archiver la quittance de loyer',
        },
        detail: {
          ar: 'احفظ وصل التسديد بصيغة PDF أو التقط صورة لمرجع العملية لاستخدامه عند تجديد الملفات أو التمليك.',
          fr: 'Enregistrez le justificatif PDF généré pour toute future démarche administrative ou demande de cession.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم ظهور بيانات المسكن عند إدخال رقم العقد في بوابة الدفع',
          fr: 'Référence locataire non reconnue sur le portail web',
        },
        solution: {
          ar: 'تحقق من إدخال الرمز الكامل مع الأصفار البادئة كما هو مطبوع على فاتورة الكراء الورقية أو استعلم لدى وحدة التسيير بالحي.',
          fr: 'Veillez à saisir le code complet incluant les zéros initiaux tel qu’il figure sur votre avis papier, ou vérifiez-le auprès de votre unité de gestion.',
        },
      },
      {
        issue: {
          ar: 'عدم تطابق رصيد المتأخرات بعد سداد فاتورة في البريد سابقا',
          fr: 'Paiement postal antérieur non encore imputé sur votre solde',
        },
        solution: {
          ar: 'احتفظ بوصل الدفع البريدي وقدمه لمصلحة المحاسبة بوحدة التسيير لتحديث قاعدة البيانات وحذف الفارق.',
          fr: 'Présentez votre reçu postal au service recouvrement de l’OPGI afin d’actualiser la comptabilité de votre dossier.',
        },
      },
      {
        issue: {
          ar: 'توقف صفحة الدفع قبل تحميل وصل تسديد الكراء',
          fr: 'Coupure de connexion avant le téléchargement de la quittance',
        },
        solution: {
          ar: 'راجع سجل العمليات في تطبيق بريدي موب أو ECCP للتأكد من خصم المبلغ، ويمكنك إعادة طباعة الوصل لاحقا من حساب المستأجر.',
          fr: 'Contrôlez le débit dans BaridiMob ou ECCP et rééditez la quittance depuis l’historique de votre compte locataire.',
        },
      },
    ],
    extraFaqs: [],
  },

  'ostad-education': {
    intro: {
      ar: [
        'تشهد منظومة التربية الوطنية في الجزائر تحولا رقميا شاملا يربط بين الأستاذ، التلميذ، الولي، والإدارة المدرسية عبر باقة متكاملة من البوابات الرسمية. ويقع «فضاء الأستاذ Ostad» في قلب هذه الرقمنة، حيث يمكن المربين من حجز النقاط، متابعة كشوف التلاميذ، وإدارة تقييم المكتسبات عبر منصة Taqiim دون المعاملات الورقية المرهقة.',
        'كما تشمل هذه المنظومة كافة مسارات التوظيف والامتحانات الوطنية: توظيف الأساتذة المتعاقدين عبر Tawdif، الامتحانات المهنية للأسلاك الخاصة عبر Mowadaf، مسابقات الديوان الوطني للامتحانات والمسابقات ONEC، فضلا عن بوابات التسجيل، الدفع الإلكتروني E-Pay، ونتائج امتحاني البكالوريا BAC وشهادة التعليم المتوسط BEM، ومسار التعليم عن بعد وشهادات إثبات المستوى عبر ONEFD.',
        'يجمع هذا الدليل التعليمي المرجعي كافة الروابط الرسمية الفعالة، شروط استخدام فضاء الأستاذ وملفات التوظيف بالتعاقد، وخطوات الدفع وسحب الاستدعاءات للامتحانات الرسمية.'
      ],
      fr: [
        'Le Ministère de l’Éducation Nationale structure la vie scolaire et professionnelle autour d’un réseau complet de plateformes numériques interconnectées. L’espace Ostad constitue l’interface de référence des enseignants pour la saisie des notes trimestrielles, le suivi pédagogique et l’évaluation des acquis sur la plateforme Taqiim.',
        'L’écosystème englobe également l’ensemble des parcours de recrutement et d’examens : dépôt des candidatures d’enseignants contractuels sur Tawdif, examens professionnels de promotion sur Mowadaf, concours nationaux de l’ONEC, inscriptions et résultats du BAC et du BEM avec règlement en ligne sur E-Pay Education, ainsi que la scolarité à distance et les attestations de niveau via l’ONEFD.',
        'Ce guide rassemble les modalités d’accès à chaque service officiel, les pièces exigées pour le recrutement contractuel et les solutions aux difficultés techniques durant les campagnes d’inscription.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بالنسبة لفضاء الأستاذ Ostad: صفة أستاذ ممارس وحساب مفعل مسلم من مدير المؤسسة التربوية.',
        'بالنسبة للتوظيف كأستاذ متعاقد Tawdif: حيازة شهادة جامعية مطابقة لقائمة التخصصات الوزارية وشهادة إقامة.',
        'بالنسبة لامتحانات BEM وBAC والدفع الإلكتروني: توفر رقم التسجيل والبطاقة الذهبية لبريد الجزائر.',
        'بالنسبة لـ ONEFD: تسجيل مسبق في التعليم عن بعد لاستخراج شهادة إثبات المستوى.',
      ],
      fr: [
        'Pour Ostad : exercer en établissement scolaire et disposer des identifiants fournis par la direction.',
        'Pour Tawdif : détenir un diplôme universitaire conforme aux spécialités requises et un justificatif de résidence.',
        'Pour BEM, BAC et E-Pay : posséder son code d’inscription ONEC et une carte Edahabia.',
        'Pour l’ONEFD : être régulièrement inscrit à l’enseignement à distance pour éditer l’attestation de niveau.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'ولوج فضاء الأستاذ أو بوابة التوظيف المعنية',
          fr: 'Se connecter à Ostad ou à la plateforme souhaitée',
        },
        detail: {
          ar: 'ادخل إلى ostad.education.dz لعمل الأساتذة اليومي، أو tawdif.education.dz وconcours.onec.dz لمسابقات التوظيف.',
          fr: 'Accédez à ostad.education.dz pour les enseignants en poste, ou à tawdif.education.dz et concours.onec.dz pour le recrutement.',
        },
      },
      {
        title: {
          ar: 'إدخال البيانات ورفع الوثائق في فترة الفتح الرسمي',
          fr: 'Compléter le dossier durant les campagnes officielles',
        },
        detail: {
          ar: 'أرفق الشهادات بصيغة PDF عند الترشح للتوظيف، أو احجز نقاط التلاميذ ومكتسباتهم قبل غلق الآجال الفصلية.',
          fr: 'Téléversez les diplômes requis pour les candidatures ou saisissez les notes trimestrielles avant la clôture des conseils de classe.',
        },
      },
      {
        title: {
          ar: 'تسديد رسوم امتحانات BEM وBAC عبر epay.education.dz',
          fr: 'Régler les frais d’examen sur E-Pay Education',
        },
        detail: {
          ar: 'بعد التسجيل في مواقع ONEC، سدد المستحقات بالبطاقة الذهبية على epay.education.dz وطبع وصل الدفع فورا.',
          fr: 'Après préinscription sur bac.onec.dz ou bem.onec.dz, acquittez les droits en ligne par Edahabia et conservez le reçu.',
        },
      },
      {
        title: {
          ar: 'سحب الاستدعاءات، النتائج، وشهادات إثبات المستوى',
          fr: 'Retirer convocations, résultats et attestations ONEFD',
        },
        detail: {
          ar: 'عد إلى مواقع ONEC أو بوابة ONEFD لتحميل الاستدعاء الرسمي والاطلاع على نتائج الامتحانات والشهادات.',
          fr: 'Revenez sur les portails ONEC ou ONEFD pour télécharger les convocations, relevés et attestations de niveau.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'تعذر الدخول إلى فضاء الأستاذ Ostad أو نسيان كلمة المرور',
          fr: 'Identifiant Ostad bloqué ou mot de passe oublié',
        },
        solution: {
          ar: 'تواصل مع مدير المؤسسة التربوية لإعادة ضبط كلمة المرور من حساب الإدارة المدرسية في الأرضية الرقمية.',
          fr: 'Seule la direction de votre établissement scolaire est habilitée à réinitialiser l’accès Ostad via son interface administrateur.',
        },
      },
      {
        issue: {
          ar: 'رفض الدفع الإلكتروني لحقوق البكالوريا أو البيام في epay.education.dz',
          fr: 'Échec de paiement des frais d’examen sur E-Pay Education',
        },
        solution: {
          ar: 'تحقق من تفعيل رمز OTP للبطاقة الذهبية وتأكد من إدخال اسم المستخدم وكلمة المرور المطبوعين على استمارة ONEC وليس حساب ولي الأمر.',
          fr: 'Assurez-vous que votre carte Edahabia reçoit bien les SMS OTP et connectez-vous avec les identifiants de la fiche ONEC (et non ceux d’Awlyaa).',
        },
      },
      {
        issue: {
          ar: 'ازدحام الموقع أثناء إعلان نتائج البكالوريا أو البيام أو فتح التعاقد',
          fr: 'Saturation du serveur lors des résultats ou ouvertures de recrutement',
        },
        solution: {
          ar: 'حاول الولوج في الساعات الصباحية المبكرة أو المسائية المتأخرة مع تجنب تحديث الصفحة بشكل متكرر خلال الثواني الأولى للفتح.',
          fr: 'Privilégiez les plages horaires creuses (tôt le matin ou tard le soir) et évitez les rafraîchissements répétés.',
        },
      },
    ],
    extraFaqs: [],
  },

  poste: {
    intro: {
      ar: [
        'يشكل بريد الجزائر العصب الرئيسي للمعاملات المالية والبريدية اليومية لملايين المواطنين من خلال الحساب البريدي الجاري CCP والبطاقة النقدية الذهبية Edahabia. وبفضل تطبيق بريدي موب (BaridiMob) وبوابة ECCP، بات بالإمكان إجراء التحويلات المالية الفورية، دفع فواتير الكهرباء والماء والإنترنت، وتتبع الرصيد على مدار الساعة.',
        'توسعت المنظومة الرقمية لبريد الجزائر لتشمل خدمات نوعية للأفراد والمؤسسات: فتح الحساب البريدي عن بعد عبر CCPNet، طلب وتتبع البطاقة الذهبية، الاطلاع على حساب التوفير E-CNEP، تتبع الطرود عبر AP Tracking، تصديق الوثائق للخارجية عبر خدمة تصديق Tasdik، تحديد المكاتب عبر خريطة BaridiMap، فضلا عن منصات التجار والمقاولات مثل Cashless وTikka وPort-Eco وAmantec.',
        'يستعرض هذا الدليل الشامل كافة الخطوات العملية لتفعيل خدمة بريدي موب وبوابة ECCP بأمان، شروط طلب البطاقة الذهبية وفتح الحساب، وأساليب التعامل مع الحالات الطارئة مثل نسيان الرمز السري، تأخر البطاقة، أو تقديم شكوى رسمية.'
      ],
      fr: [
        'Algérie Poste constitue le pilier des paiements de proximité et des services financiers grand public en Algérie via le Compte Courant Postal (CCP) et la carte monétique Edahabia. Grâce au portail ECCP et aux applications mobiles BaridiMob et E-CCP, les titulaires réalisent leurs virements instantanés, règlent leurs factures courantes et consultent leurs relevés en temps réel 24h/24.',
        'L’infrastructure numérique postale couvre également un large éventail de téléservices complémentaires : pré-ouverture de compte via CCPNet, commande et suivi de la carte Edahabia, consultation E-CNEP, suivi des colis AP Tracking, légalisation de documents auprès du MAE via Tasdik, géolocalisation BaridiMap ainsi que les plateformes professionnelles Cashless, Tikka, Port-Eco et Amantec.',
        'Ce guide complet récapitule les prérequis d’activation de BaridiMob et ECCP, la démarche de commande de la carte Edahabia, et les réflexes essentiels en cas d’oubli de code, d’incident GAB ou de réclamation en ligne.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'امتلاك حساب بريدي جاري CCP نشط ومحدث البيانات وفق استمارة معرفة الزبون KYC.',
        'ربط رقم الهاتف الشخصي بالبطاقة الذهبية عبر الصراف الآلي GAB لتفعيل بريدي موب ورموز الحماية OTP.',
        'توفر بطاقة التعريف البيومترية عند فتح الحساب عبر CCPNet أو سحب البطاقة الذهبية والرمز السري الأولي من المكتب.',
        'امتلاك السجل التجاري والرقم الجبائي NIF للتسجيل في بوابات التجار Cashless وAmantec وPort-Eco.',
      ],
      fr: [
        'Détenir un compte courant postal (CCP) actif avec fiche KYC à jour.',
        'Associer son numéro mobile personnel à la carte Edahabia sur un distributeur GAB pour activer BaridiMob et les codes OTP.',
        'Présenter la CNIBE lors de la finalisation CCPNet ou du retrait de la carte Edahabia et du code ECCP.',
        'Justifier d’un registre de commerce et d’un NIF pour accéder aux espaces professionnels Cashless, Amantec et Port-Eco.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'فتح الحساب أو طلب البطاقة الذهبية عن بعد',
          fr: 'Ouvrir un compte CCPNet ou commander la carte Edahabia',
        },
        detail: {
          ar: 'استعمل ccpnet.poste.dz لطلب فتح حساب جديد، أو eccp.poste.dz/commande-edahabia لطلب وتجديد البطاقة الذهبية.',
          fr: 'Utilisez ccpnet.poste.dz pour une ouverture de compte ou eccp.poste.dz/commande-edahabia pour commander votre carte.',
        },
      },
      {
        title: {
          ar: 'ربط رقم الهاتف في الموزع الآلي وتفعيل ECCP وبريدي موب',
          fr: 'Lier votre mobile au GAB et activer ECCP / BaridiMob',
        },
        detail: {
          ar: 'أدخل البطاقة الذهبية في صراف GAB لربط رقم هاتفك، ثم حمل تطبيق بريدي موب وأنشئ حسابك في دقائق.',
          fr: 'Enregistrez votre numéro sur un GAB avec votre carte Edahabia, puis activez votre compte sur l’application BaridiMob.',
        },
      },
      {
        title: {
          ar: 'استغلال الخدمات البريدية اليومية (التتبع، التصديق، والشكاوى)',
          fr: 'Utiliser les téléservices postaux (Suivi, Tasdik, E-CNEP)',
        },
        detail: {
          ar: 'تتبع طرودك عبر aptracking.poste.dz، أرسل وثائق التصديق عبر tasdik.poste.dz، وحدد أقرب مكتب في BaridiMap.',
          fr: 'Suivez vos colis sur aptracking.poste.dz, envoyez vos légalisations sur tasdik.poste.dz et localisez les guichets sur BaridiMap.',
        },
      },
      {
        title: {
          ar: 'معالجة أي خلل مالي عبر بوابة الشكاوى الرسمية',
          fr: 'Signaler tout incident sur reclamation.poste.dz',
        },
        detail: {
          ar: 'في حال تأخر البطاقة أو خطأ في السحب أو التحويل، أودع بلاغا مفصلا على reclamation.poste.dz برقم المرجع.',
          fr: 'En cas de retard de carte ou d’incident sur GAB/BaridiMob, ouvrez un ticket de réclamation muni de la référence exacte.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم وصول رسالة OTP عند محاولة تفعيل بريدي موب أو الدفع الإلكتروني',
          fr: 'Non-réception du code OTP lors du paiement en ligne ou de l’activation BaridiMob',
        },
        solution: {
          ar: 'تأكد من أن شريحة الهاتف هي نفسها المربوطة بالبطاقة في الصراف الآلي GAB، وأنه لا يوجد حظر للرسائل القصيرة الإشعارية في الهاتف.',
          fr: 'Vérifiez que la ligne utilisée est bien celle rattachée sur le GAB et répétez l’association du numéro sur un distributeur postal si vous avez changé de puce.',
        },
      },
      {
        issue: {
          ar: 'بقاء طلب البطاقة الذهبية في مرحلة التصنيع لأكثر من شهر',
          fr: 'Carte Edahabia en attente de livraison au-delà du délai habituel',
        },
        solution: {
          ar: 'تابع حالة البطاقة في فضاء ECCP وتحقق من وصولها لمكتب البريد المختار عبر BaridiMap أو أودع استفسارا في reclamation.poste.dz.',
          fr: 'Consultez le statut de fabrication sur ECCP, vérifiez au bureau de poste distributeur choisi ou signalez le retard sur reclamation.poste.dz.',
        },
      },
      {
        issue: {
          ar: 'توقف تطبيق بريدي موب أو ظهور خطأ تجميد البطاقة بعد إدخال رمز خاطئ',
          fr: 'Blocage de la carte Edahabia ou de l’accès BaridiMob après erreurs de code',
        },
        solution: {
          ar: 'في حال قفل الرمز السري PIN في الصراف أو التطبيق، تقدم لأقرب مكتب بريد بطلب رفع التجميد أو إعادة تعيين الدخول عبر بوابة ECCP.',
          fr: 'En cas de blocage sécuritaire, présentez-vous à votre bureau de poste avec votre CNIBE pour lever la restriction ou réinitialiser l’accès.',
        },
      },
    ],
    extraFaqs: [],
  },
};
