import { SectorItem, RichGuideContent } from '../../types';

export const batch8Sectors: SectorItem[] = [
  // 57. progres.mesrs
  {
    id: 'progres.mesrs',
    slug: 'progres.mesrs',
    category: 'education_higher',
    name: {
      ar: 'نظام بروغرس للتسيير الجامعي والمنح والإيواء (PROGRES MESRS)',
      fr: 'Système PROGRES MESRS — Université, Bourses & Hébergement',
    },
    acronym: 'PROGRES',
    ministry: {
      ar: 'وزارة التعليم العالي والبحث العلمي',
      fr: 'Ministère de l’Enseignement Supérieur et de la Recherche Scientifique',
    },
    description: {
      ar: 'المنظومة الرقمية المركزية لوزارة التعليم العالي والبحث العلمي في الجزائر: التسجيل الأولي للناجحين الجدد في البكالوريا (Orientation)، التوجيه التفاعلي (DZ-Orientation)، فضاء الطالب والتحويلات الجامعية (WebEtu)، طلبات الإيواء (WebOnou)، تجديد المنح (Eminha)، دفع حقوق التسجيل والإيواء إلكترونيا، الإطار الوطني للمؤهلات CNC، وتطبيقات Progres وMYBUS.',
      fr: 'Écosystème numérique central de l’Enseignement Supérieur en Algérie (PROGRES MESRS) : préinscription des nouveaux bacheliers, aide à l’orientation DZ-Orientation, espace étudiant et transferts WebEtu, demandes d’hébergement WebOnou, renouvellement des bourses Eminha, télépaiement des droits universitaires, répertoire CNC et applications Progres & MYBUS.',
    },
    officialUrl: 'https://www.orientation-esi.dz/',
    portalUrl: 'https://progres.mesrs.dz/webfve/login.xhtml',
    iconName: 'GraduationCap',
    isPopular: true,
    services: [
      {
        id: 'progres.mesrs-srv-1',
        title: {
          ar: 'بوابة التسجيل الأولي الجامعي لحاملي البكالوريا',
          fr: 'Portail des Préinscriptions Universitaires',
        },
        description: {
          ar: 'المنصة الرسمية لتسجيل رغبات التوجيه الجامعي، تأكيد التخصص، والاطلاع على نتائج التوجيه للطلبة الجدد.',
          fr: 'Plateforme officielle de saisie des fiches de vœux, confirmation des affectations et suivi de l’orientation des nouveaux bacheliers.',
        },
        url: 'https://www.orientation-esi.dz/',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-2',
        title: {
          ar: 'بوابة الخدمات البيداغوجية والتسيير الجامعي (PROGRES WebFVE)',
          fr: 'Portail Central de Scolarité PROGRES (WebFVE)',
        },
        description: {
          ar: 'النظام المدمج لتسيير المسار البيداغوجي للطلبة، التقييمات، كشوف النقاط، والوضعية الإدارية عبر الجامعات.',
          fr: 'Interface centrale de gestion du cursus universitaire, inscriptions pédagogiques, relevés de notes et administration académique.',
        },
        url: 'https://progres.mesrs.dz/webfve/login.xhtml',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-3',
        title: {
          ar: 'منصة التوجيه ودعم حاملي البكالوريا (DZ-Orientation)',
          fr: 'Plateforme d’Aide au Choix Universitaire — DZ-Orientation',
        },
        description: {
          ar: 'أداة تفاعلية لاستكشاف الشعب الجامعية، معدلات القبول المرجعية، والآفاق المهنية قبل ملء بطاقة الرغبات.',
          fr: 'Outil d’accompagnement permettant d’explorer les filières, seuils de moyenne et débouchés avant le choix d’orientation.',
        },
        url: 'https://dzorientation.com',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-4',
        title: {
          ar: 'بوابة الحساب والمعلومات التوجيهية للبكالوريا (BAC MESRS)',
          fr: 'Simulateur & Calcul des Moyennes d’Accès (BAC MESRS)',
        },
        description: {
          ar: 'التعرف على شروط الترتيب واحتساب المعدلات الموزونة للالتحاق بالمدارس العليا والجامعات وفق المنشور الوزاري.',
          fr: 'Consultation des règles de classement, coefficients pondérés et critères d’accès aux écoles nationales supérieures et universités.',
        },
        url: 'https://bac.mesrs.dz/',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-5',
        title: {
          ar: 'منصة الخدمات الجامعية وطلبات الإيواء (WebOnou)',
          fr: 'Demandes d’Hébergement Universitaire — WebOnou',
        },
        description: {
          ar: 'تقديم طلبات الإقامة الجامعية عن بعد للطلبة المسجلين، اختيار الإقامة، ومتابعة قرار القبول والغرفة.',
          fr: 'Téléservice dédié aux demandes de logement en résidence universitaire, choix d’affectation et suivi d’admission.',
        },
        url: 'https://progres.mesrs.dz/webonou/',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-6',
        title: {
          ar: 'فضاء الطالب والتحويلات الجامعية (WebEtu)',
          fr: 'Espace Étudiant & Transferts Universitaires — WebEtu',
        },
        description: {
          ar: 'إيداع طلبات التحويل الجامعي الداخلي والخارجي إلكترونيا، والاطلاع على الجداول، النقاط، والوضعية البيداغوجية.',
          fr: 'Portail personnel permettant le dépôt des demandes de transfert universitaire, consultation des notes et emplois du temps.',
        },
        url: 'https://progres.mesrs.dz/webetu',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-7',
        title: {
          ar: 'منصة تجديد ومتابعة المنح الجامعية (Eminha)',
          fr: 'Renouvellement des Bourses Universitaires — Eminha',
        },
        description: {
          ar: 'خدمة رقمية لطلب وتجديد ملف المنحة الجامعية عن بعد دون إيداع الملفات الورقية في الإقامات أو الكليات.',
          fr: 'Guichet en ligne pour la demande initiale et le renouvellement annuel de la bourse universitaire sans dépôt papier.',
        },
        url: 'https://progres.mesrs.dz/eminha/',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-8',
        title: {
          ar: 'دفع حقوق التسجيل وإعادة التسجيل الجامعي إلكترونيا',
          fr: 'Télépaiement des Droits d’Inscription Universitaire',
        },
        description: {
          ar: 'بوابة تسديد رسوم التسجيل السنوي (200 دج أو الرسوم المقررة) عن بعد باستعمال البطاقة الذهبية لبريد الجزائر.',
          fr: 'Plateforme sécurisée de règlement en ligne des droits d’inscription et de réinscription par carte Edahabia.',
        },
        url: 'https://progres.mesrs.dz/epaiement/epaiementI.xhtml',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-9',
        title: {
          ar: 'دفع حقوق الإيواء الجامعي إلكترونيا',
          fr: 'Télépaiement des Droits d’Hébergement Universitaire',
        },
        description: {
          ar: 'تسديد رسوم الإقامة الجامعية السنوية إلكترونيا بالبطاقة الذهبية لتأكيد حجز الغرفة في الإقامة.',
          fr: 'Service de règlement en ligne des frais d’hébergement en résidence universitaire via carte Edahabia.',
        },
        url: 'https://progres.mesrs.dz/epaiement/epaiementH.xhtml',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-10',
        title: {
          ar: 'منصة الخبراء والمترشحين للمناصب العليا (DGRSDT)',
          fr: 'Portail des Experts & Postes Supérieurs (DGRSDT)',
        },
        description: {
          ar: 'تسجيل الباحثين والأساتذة الخبراء والمترشحين للمسؤوليات والمناصب العليا في البحث العلمي والتطوير التكنولوجي.',
          fr: 'Plateforme dédiée à l’inscription des experts chercheurs et candidatures aux postes supérieurs scientifiques.',
        },
        url: 'https://portal.dgrsdt.dz/',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-11',
        title: {
          ar: 'البحث في الإطار الوطني للمؤهلات والشهادات (CNC)',
          fr: 'Répertoire National des Certifications — CNC MESRS',
        },
        description: {
          ar: 'أداة رسمية للتحقق من تصنيف الشهادات الجامعية والمهنية ومستواها المرجعي ضمن الإطار الوطني للمؤهلات.',
          fr: 'Moteur de recherche officiel permettant d’identifier le niveau de classification des diplômes dans le Cadre National des Certifications.',
        },
        url: 'https://cnc.mesrs.dz/ar/outils-recherche',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-12',
        title: {
          ar: 'بوابة التسجيل الأولي للمدارس والمنشآت الوطنية (MDN FS)',
          fr: 'Portail Préinscription Formations Spécialisées (MDN FS)',
        },
        description: {
          ar: 'بوابة التسجيل الأولي لحاملي البكالوريا الجدد الراغبين في الالتحاق بمدارس التكوين والتخصصات المرتبطة.',
          fr: 'Portail dédié aux préinscriptions des nouveaux bacheliers vers les filières spécialisées partenaires.',
        },
        url: 'https://preinscription.mdn.dz/fs/',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-13',
        title: {
          ar: 'تطبيق WebEtu / PROGRES الرسمي للطلبة (Android)',
          fr: 'Application Mobile PROGRES WebEtu',
        },
        description: {
          ar: 'تطبيق الهاتف الرسمي لمتابعة علامات الامتحانات، بطاقة الطالب الرقمية، الجداول، وطلبات العطلة الأكاديمية والتحويل.',
          fr: 'Application officielle pour consulter les notes, l’emploi du temps, la carte étudiante numérique et l’assiduité.',
        },
        url: 'https://play.google.com/store/apps/details?id=app.progres.webetu&hl=ar',
        isOnline: true,
      },
      {
        id: 'progres.mesrs-srv-14',
        title: {
          ar: 'تطبيق MYBUS للنقل الجامعي عبر الولايات',
          fr: 'Application Mobile Transport Universitaire — MYBUS',
        },
        description: {
          ar: 'متابعة حافلات النقل الجامعي في الوقت الحقيقي، خطوط الربط بين الإقامات والكليات، والتسجيل في بطاقة النقل.',
          fr: 'Suivi en temps réel des bus universitaires, consultation des itinéraires entre résidences et campus et gestion de la carte transport.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.mesrs.mybus.mybusapp&hl=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'حاملو شهادة البكالوريا الجدد، طلبة الليسانس والماستر والدكتوراه، المقيمون بالأحياء الجامعية، والباحثون',
        fr: 'Nouveaux bacheliers, étudiants en Licence/Master/Doctorat, résidents universitaires et enseignants-chercheurs',
      },
      processingTime: {
        ar: 'دفع وتأكيد فوري لحقوق التسجيل والإيواء؛ معالجة التحويلات والمنح والطعون وفق الرزنامة السنوية لوزارة التعليم العالي',
        fr: 'Validation immédiate du paiement en ligne ; traitement des orientations, transferts et bourses selon le calendrier ministériel',
      },
      fees: {
        ar: 'استعمال البوابات وتطبيقات WebEtu وMYBUS مجاني؛ رسوم التسجيل السنوي (200 دج) والإيواء (400 دج) تسدد إلكترونيا بالبطاقة الذهبية',
        fr: 'Accès aux portails et applications gratuit ; droits annuels réglementaires d’inscription et d’hébergement payables par Edahabia',
      },
      channel: {
        ar: 'بوابات progres.mesrs.dz الفرعية، منصة orientation-esi.dz، وتطبيقات WebEtu وMYBUS للهواتف',
        fr: 'Sous-domaines progres.mesrs.dz, portail orientation-esi.dz et applications Android WebEtu & MYBUS',
      },
      keyRequirement: {
        ar: 'رقم تسجيل البكالوريا والرقم السري المدون في كشف النقاط، بطاقة التعريف البيومترية، والبطاقة الذهبية لدفع الحقوق',
        fr: 'Matricule et code secret du relevé de notes du Baccalauréat, CNIBE et carte Edahabia pour le télépaiement',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التسجيل الأولي لحاملي البكالوريا الجدد',
          fr: 'Préinscription des nouveaux bacheliers',
        },
        value: {
          ar: 'رقم التسجيل والرقم السري المرفق بكشف نقاط البكالوريا، ملء بطاقة الرغبات (من 6 إلى 10 اختيارات)، وتأكيد التوجيه في الآجال المحددة',
          fr: 'Numéro d’inscription et code confidentiel du relevé de notes BAC pour formuler et confirmer la fiche de vœux dans les délais',
        },
      },
      {
        label: {
          ar: 'ملف المنحة والإيواء الجامعي (Eminha / WebOnou)',
          fr: 'Dossier bourse et hébergement (Eminha / WebOnou)',
        },
        value: {
          ar: 'التحقق التلقائي أو رفع شهادة الدخل السنوي للأبوين، شهادة الإقامة تثبت البعد الجغرافي للإيواء، ورقم الحساب البريدي الجاري CCP للطالب',
          fr: 'Justificatifs de revenus parentaux, certificat de résidence pour l’éloignement géographique et numéro CCP personnel pour la bourse',
        },
      },
      {
        label: {
          ar: 'دفع حقوق التسجيل والإيواء إلكترونيا',
          fr: 'Télépaiement des droits universitaires',
        },
        value: {
          ar: 'بطاقة ذهبية سارية الصلاحية (أو بطاقة أحد الأقارب مع رمز التحقق OTP عبر الهاتف المرتبط بالبطاقة) لاستخراج وصل التسجيل النهائي',
          fr: 'Carte Edahabia valide (avec code SMS OTP actif) permettant d’acquitter les droits et de générer l’attestation d’inscription',
        },
      },
      {
        label: {
          ar: 'تفعيل تطبيق WebEtu وMYBUS',
          fr: 'Accès mobile WebEtu et MYBUS',
        },
        value: {
          ar: 'اسم المستخدم (سنة البكالوريا + رقم التسجيل) وكلمة المرور المسلمة أو المنشأة في بروغرس لتحديث بطاقة الطالب والنقل الرقمية',
          fr: 'Identifiant (année du BAC + matricule) et mot de passe PROGRES pour afficher la carte étudiante et la carte bus dématérialisées',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن دفع حقوق التسجيل والإيواء الجامعي بالبطاقة الذهبية لولي الأمر أو شخص آخر؟',
          fr: 'Peut-on payer les droits universitaires PROGRES avec la carte Edahabia d’un parent ?',
        },
        answer: {
          ar: 'نعم، تقبل منصة الدفع الإلكتروني لبروغرس البطاقة الذهبية الخاصة بالطالب أو بولي أمره أو أي شخص آخر، شريطة توفر الرصيد واستقبال رمز التحقق SMS على الهاتف المرتبط بالبطاقة.',
          fr: 'Oui, le guichet de paiement accepte la carte Edahabia de l’étudiant, d’un parent ou d’un tiers, sous réserve de recevoir le code OTP par SMS sur la ligne associée.',
        },
      },
      {
        question: {
          ar: 'كيف أجدد المنحة الجامعية عبر منصة Eminha أو بروغرس؟',
          fr: 'Comment renouveler la bourse universitaire via Eminha ?',
        },
        answer: {
          ar: 'بعد دفع حقوق إعادة التسجيل السنوي، ادخل إلى بوابة المنح على progres.mesrs.dz/eminha وتحقق من حالتك البيداغوجية ورقم حسابك البريدي CCP لتأكيد التجديد التلقائي.',
          fr: 'Après règlement de la réinscription universitaire, connectez-vous sur progres.mesrs.dz/eminha pour vérifier vos données académiques et confirmer votre RIB CCP.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا لم أتحصل على رغبتي الأولى وأردت تقديم طلب تحويل جامعي؟',
          fr: 'Comment déposer un recours ou une demande de transfert sur PROGRES ?',
        },
        answer: {
          ar: 'تفتح منصة WebEtu وتطبيق بروغرس نافذة مخصصة للتحويلات الجامعية الداخلية والخارجية بعد التسجيل النهائي؛ يتم إيداع الطلب إلكترونيا مع تبرير السبب (الإقامة أو التخصص) دون تنقل ورقي.',
          fr: 'Un module dédié aux transferts est ouvert dans WebEtu après les inscriptions ; le candidat saisit sa demande motivée en ligne et suit la décision de l’établissement d’accueil.',
        },
      },
      {
        question: {
          ar: 'لماذا لا تظهر علاماتي أو بطاقتي داخل تطبيق WebEtu بعد التسجيل؟',
          fr: 'Pourquoi mes notes ou ma carte n’apparaissent-elles pas encore dans WebEtu ?',
        },
        answer: {
          ar: 'يتم تفعيل البطاقة الرقمية بعد تأكيد مصلحة السكولاريتي لوصول دفع الحقوق، أما العلامات فتظهر فور صبها والمصادقة عليها من قبل الأساتذة ورؤساء الأقسام في نظام WebFVE.',
          fr: 'La carte numérique s’active dès la validation administrative du paiement, tandis que les notes s’affichent après délibération et saisie par les départements dans WebFVE.',
        },
      },
    ],
  },

  // 58. qassimatouka
  {
    id: 'qassimatouka',
    slug: 'qassimatouka',
    category: 'finance_economy',
    name: {
      ar: 'منصة «قسيمتك» لاقتناء قسيمة السيارات إلكترونيا (DGI)',
      fr: 'Plateforme Qassimatouka — E-Vignette Automobile en Ligne (DGI)',
    },
    acronym: 'QASSIMA',
    ministry: {
      ar: 'المديرية العامة للضرائب — وزارة المالية',
      fr: 'Direction Générale des Impôts — Ministère des Finances',
    },
    description: {
      ar: 'البوابة الرقمية الرسمية للمديرية العامة للضرائب لاقتناء قسيمة السيارات عن بعد في الجزائر: شراء القسيمة الإلكترونية بالبطاقة الذهبية أو CIB، إعادة طبع وتحميل القسيمة في حال الضياع، توثيق ومصادقة صحة القسائم برمز التحقق QR، والتواصل المباشر مع فريق الدعم.',
      fr: 'Téléservice officiel de la Direction Générale des Impôts (DGI) pour l’acquisition en ligne de la vignette automobile (Qassimatouka) : paiement sécurisé par carte Edahabia ou CIB, réédition du justificatif, vérification et authentification des vignettes et support usager.',
    },
    officialUrl: 'https://qassimatouka.mf.gov.dz/accueil',
    portalUrl: 'https://qassimatouka.mf.gov.dz/acheter',
    iconName: 'Car',
    isPopular: true,
    services: [
      {
        id: 'qassimatouka-srv-1',
        title: {
          ar: 'البوابة الرئيسية لمنصة قسيمتك',
          fr: 'Portail Officiel Qassimatouka',
        },
        description: {
          ar: 'الاطلاع على تعريفة قسيمة السيارات حسب قوة المحرك وعمر المركبة ونوع الاستعمال وآجال الحملة السنوية.',
          fr: 'Consultation des tarifs réglementaires de la vignette automobile selon la puissance fiscale, l’âge et la catégorie du véhicule.',
        },
        url: 'https://qassimatouka.mf.gov.dz/accueil',
        isOnline: true,
      },
      {
        id: 'qassimatouka-srv-2',
        title: {
          ar: 'اقتناء قسيمة السيارة إلكترونيا',
          fr: 'Acheter sa Vignette Automobile en Ligne',
        },
        description: {
          ar: 'شراء القسيمة الرقمية للمركبة عبر الإنترنت ودفع المستحقات بالبطاقة الذهبية أو البنكية CIB واستخراج القسيمة بصيغة PDF.',
          fr: 'Achat dématérialisé de la vignette annuelle et paiement par carte Edahabia ou CIB avec génération immédiate du PDF officiel.',
        },
        url: 'https://qassimatouka.mf.gov.dz/acheter',
        isOnline: true,
      },
      {
        id: 'qassimatouka-srv-3',
        title: {
          ar: 'إعادة تحميل واسترجاع قسيمة سيارة مقتناة',
          fr: 'Rééditer ou Modifier une Vignette Acquise',
        },
        description: {
          ar: 'استعادة وتحميل نسخة جديدة من قسيمة السيارة المقتناة عبر المنصة في حال ضياع النسخة المطبوعة أو تلفها.',
          fr: 'Service permettant de retrouver et réimprimer votre vignette électronique en cas de perte ou détérioration du document.',
        },
        url: 'https://qassimatouka.mf.gov.dz/edit',
        isOnline: true,
      },
      {
        id: 'qassimatouka-srv-4',
        title: {
          ar: 'فضاء التوثيق والمصادقة والتحقق من القسيمة',
          fr: 'Vérification et Authentification d’une Vignette',
        },
        description: {
          ar: 'التأكد من صحة ومصداقية قسيمة السيارة الإلكترونية المسحوبة أو المطبوعة عبر إدخال مرجع القسيمة ورقم التسجيل.',
          fr: 'Outil officiel permettant de contrôler la validité et l’authenticité d’une e-vignette grâce à ses références.',
        },
        url: 'https://qassimatouka.mf.gov.dz/autentifier',
        isOnline: true,
      },
      {
        id: 'qassimatouka-srv-5',
        title: {
          ar: 'التواصل مع فريق دعم منصة قسيمتك',
          fr: 'Contact & Assistance Technique Qassimatouka',
        },
        description: {
          ar: 'إرسال استفسار أو بلاغ تقني حول عملية شراء القسيمة أو مطابقة معلومات البطاقة الرمادية عبر استمارة الدعم.',
          fr: 'Formulaire d’assistance dédié au traitement des anomalies de saisie ou de paiement lors de l’achat en ligne.',
        },
        url: 'https://qassimatouka.mf.gov.dz/contact',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'ملاك السيارات السياحية، المركبات النفعية، مركبات نقل المسافرين، والمؤسسات الحائزة على حظيرة مركبات في الجزائر',
        fr: 'Propriétaires de véhicules de tourisme, utilitaires, transport en commun et flottes d’entreprises en Algérie',
      },
      processingTime: {
        ar: 'إصدار فوري للقسيمة الإلكترونية بصيغة PDF بمجرد تأكيد الدفع البنكي أو البريدي؛ لا يشترط لصقها على الزجاج الأمامي في الصيغة الرقمية',
        fr: 'Génération instantanée de la e-vignette PDF après validation du paiement ; aucun collage sur pare-brise exigé',
      },
      fees: {
        ar: 'حسب التسعيرة القانونية للسيارة (من 500 دج إلى 25,000 دج وفق القوة الجبائية وعمر المركبة) دون أي رسوم إضافية على الشراء الإلكتروني',
        fr: 'Montant réglementaire de la vignette selon la puissance fiscale et l’âge du véhicule, sans surcoût pour l’achat en ligne',
      },
      channel: {
        ar: 'بوابة qassimatouka.mf.gov.dz على مدار 24 ساعة خلال الحملة السنوية، إضافة لقباضات الضرائب ومكاتب البريد',
        fr: 'Portail qassimatouka.mf.gov.dz disponible 24h/24 durant la campagne, recettes des impôts et bureaux de poste',
      },
      keyRequirement: {
        ar: 'البطاقة الرمادية للمركبة (الترقيم، القوة الجبائية CV، وسنة أول وضع للسير) وبطاقة دفع ذهبية أو بنكية CIB',
        fr: 'Carte grise du véhicule (immatriculation, puissance fiscale CV, année de mise en circulation) et carte Edahabia ou CIB',
      },
    },
    requirements: [
      {
        label: {
          ar: 'معلومات البطاقة الرمادية الصحيحة',
          fr: 'Données exactes de la carte grise',
        },
        value: {
          ar: 'رقم الترقيم الكامل (10 أو 11 رقما)، صنف المركبة، القوة الجبائية بالحصان (CV)، والرقم التسلسلي للمركبة أو سنة السير',
          fr: 'Numéro d’immatriculation complet, catégorie, puissance fiscale en chevaux (CV) et année de première mise en circulation',
        },
      },
      {
        label: {
          ar: 'بطاقة الدفع الإلكتروني المفعلة',
          fr: 'Moyen de télépaiement actif',
        },
        value: {
          ar: 'البطاقة الذهبية لبريد الجزائر أو بطاقة بنكية CIB برصيد كاف وخدمة رمز التأكيد SMS OTP مفعلة',
          fr: 'Carte Edahabia ou carte CIB approvisionnée et habilitée à recevoir le code de validation SMS OTP',
        },
      },
      {
        label: {
          ar: 'الالتزام بالآجال القانونية للحملة',
          fr: 'Respect des délais légaux d’acquisition',
        },
        value: {
          ar: 'شراء القسيمة خلال الفترة السنوية المحددة من وزارة المالية (عادة شهر مارس) لتجنب غرامات التأخير المقررة قانونا',
          fr: 'Achat impératif durant la campagne annuelle fixée par la DGI (généralement mars) pour éviter la majoration légale de retard',
        },
      },
      {
        label: {
          ar: 'حفظ النسخة الرقمية والمطبوعة',
          fr: 'Conservation de la e-vignette PDF',
        },
        value: {
          ar: 'حفظ ملف PDF في الهاتف وطباعة نسخة احتياطية تحتوي على رمز QR لتقديمها عند مراقبة مصالح الأمن أو الدرك',
          fr: 'Sauvegarder le PDF sur smartphone et conserver une copie imprimée lisible portant le QR code lors des contrôles routiers',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يجب إلصاق القسيمة المشتراة عبر منصة قسيمتك على الزجاج الأمامي للسيارة؟',
          fr: 'Faut-il coller la vignette achetée sur Qassimatouka sur le pare-brise ?',
        },
        answer: {
          ar: 'لا، وفق توضيحات المديرية العامة للضرائب، تعفي القسيمة المقتناة عبر الإنترنت صاحب السيارة من إلصاقها على الزجاج، ويكفي الاحتفاظ بالنسخة الورقية المطبوعة أو الرقمية المزودة برمز QR لتقديمها عند المراقبة.',
          fr: 'Non, la e-vignette acquise sur Qassimatouka dispense de l’apposition sur le pare-brise ; il suffit de présenter le document imprimé ou numérique doté du QR code lors des contrôles.',
        },
      },
      {
        question: {
          ar: 'كيف أسترجع قسيمة سيارتي إذا أضعت الملف بعد الدفع؟',
          fr: 'Comment récupérer ma e-vignette si j’ai perdu le fichier PDF ?',
        },
        answer: {
          ar: 'توجه إلى صفحة الاسترجاع على qassimatouka.mf.gov.dz/edit، وأدخل رقم ترقيم السيارة وبيانات العملية أو البريد الإلكتروني المسجل لإعادة تحميل القسيمة مجانا.',
          fr: 'Rendez-vous sur qassimatouka.mf.gov.dz/edit et saisissez l’immatriculation du véhicule ainsi que vos coordonnées pour retélécharger votre justificatif gratuitement.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا أخطأت في رقم الترقيم أو القوة الجبائية أثناء الشراء؟',
          fr: 'Que faire en cas d’erreur de saisie sur l’immatriculation ou la puissance ?',
        },
        answer: {
          ar: 'يمكنك مراجعة صفحة التعديل أو مراسلة فريق الدعم عبر qassimatouka.mf.gov.dz/contact أو التوجه إلى قباضة الضرائب التابعة لمقر سكنك مصحوبا بالبطاقة الرمادية ووصل الدفع.',
          fr: 'Contactez immédiatement le support via qassimatouka.mf.gov.dz/contact ou présentez-vous à votre recette des impôts avec la carte grise et la quittance.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني التحقق من أن قسيمة سيارة مستعملة أصلية قبل شرائها؟',
          fr: 'Comment vérifier l’authenticité de la vignette d’un véhicule d’occasion ?',
        },
        answer: {
          ar: 'نعم، يوفر فضاء التوثيق والمصادقة qassimatouka.mf.gov.dz/autentifier إمكانية التحقق الفوري من سريان وصحة القسيمة الرقمية ومطابقتها للسيارة.',
          fr: 'Oui, le module qassimatouka.mf.gov.dz/autentifier permet de vérifier instantanément la validité et la correspondance d’une vignette électronique.',
        },
      },
    ],
  },

  // 59. sante
  {
    id: 'sante',
    slug: 'sante',
    category: 'health_civil',
    name: {
      ar: 'وزارة الصحة — معادلة الشهادات، التكوين الشبه طبي والعيادة الرقمية',
      fr: 'Ministère de la Santé — Équivalences, Paramédical & e-Santé',
    },
    acronym: 'SANTE',
    ministry: {
      ar: 'وزارة الصحة',
      fr: 'Ministère de la Santé',
    },
    description: {
      ar: 'الخدمات الرقمية لقطاع الصحة العمومية في الجزائر: المنصة الوطنية لإدارة معادلة الشهادات الطبية وشبه الطبية (فتح حساب وتسجيل الدخول)، بوابة التسجيل في معاهد التكوين الشبه طبي، منصة العيادة الرقمية للاستشارة الطبية عن بعد (eTabib)، وتطبيقات أطباء الجزائر والطبيب الجزائري وبنك الدم الجزائري.',
      fr: 'Services numériques du secteur de la Santé Publique en Algérie : plateforme nationale d’équivalence des diplômes de santé, portail d’inscription aux formations paramédicales, téléconsultation médicale via eTabib et applications de santé publique (annuaire médecins, don de sang).',
    },
    officialUrl: 'https://sante.gov.dz/ar/',
    portalUrl: 'https://equivalence.sante.gov.dz/auth?tab=login',
    iconName: 'HeartPulse',
    isPopular: true,
    services: [
      {
        id: 'sante-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة الصحة الجزائرية',
          fr: 'Site Officiel du Ministère de la Santé',
        },
        description: {
          ar: 'البوابة الوزارية لنشر النشرات الصحية، الخريطة الاستشفائية، مسابقات القطاع، والتوجيهات الوقائية الوطنية.',
          fr: 'Portail ministériel publiant les bulletins sanitaires, la carte hospitalière, les concours de santé et programmes de prévention.',
        },
        url: 'https://sante.gov.dz/ar/',
        isOnline: true,
      },
      {
        id: 'sante-srv-2',
        title: {
          ar: 'المنصة الوطنية لإدارة معادلة الشهادات — تسجيل الدخول',
          fr: 'Plateforme d’Équivalence des Diplômes — Connexion',
        },
        description: {
          ar: 'متابعة ملفات معادلة الشهادات الطبية، الصيدلانية، وشبه الطبية المحصل عليها في الخارج لدى اللجان المختصة.',
          fr: 'Espace de suivi des dossiers de reconnaissance et d’équivalence des diplômes médicaux et paramédicaux étrangers.',
        },
        url: 'https://equivalence.sante.gov.dz/auth?tab=login',
        isOnline: true,
      },
      {
        id: 'sante-srv-3',
        title: {
          ar: 'منصة إدارة معادلة الشهادات — فتح حساب جديد',
          fr: 'Plateforme d’Équivalence — Création de Compte',
        },
        description: {
          ar: 'إنشاء حساب المترشح لأول مرة لإيداع ملف طلب المعادلة العلمية والمهنية في تخصصات الصحة ورفع الوثائق.',
          fr: 'Inscription initiale permettant aux diplômés de constituer et soumettre en ligne leur dossier d’équivalence.',
        },
        url: 'https://equivalence.sante.gov.dz/auth?tab=signup',
        isOnline: true,
      },
      {
        id: 'sante-srv-4',
        title: {
          ar: 'منصة التكوين الشبه طبي (التسجيل والمسابقات)',
          fr: 'Portail de la Formation Paramédicale',
        },
        description: {
          ar: 'البوابة الإلكترونية للتسجيل في مسابقات الالتحاق بالمعاهد الوطنية للتكوين العالي الشبه طبي والتخصصات الصحية المساعدة.',
          fr: 'Plateforme officielle d’inscription aux concours d’accès aux instituts nationaux de formation supérieure paramédicale.',
        },
        url: 'https://formation.sante.gov.dz/index.html',
        isOnline: true,
      },
      {
        id: 'sante-srv-5',
        title: {
          ar: 'العيادة الرقمية للاستشارة الطبية عن بعد (eTabib)',
          fr: 'Clinique Numérique & Téléconsultation — eTabib',
        },
        description: {
          ar: 'منصة جزائرية معتمدة للتواصل مع الأطباء، حجز الاستشارات الطبية عن بعد، والبحث عن المختصين والعيادات.',
          fr: 'Plateforme de télémédecine algérienne facilitant la mise en relation avec des médecins spécialistes et téléconsultations.',
        },
        url: 'https://etabib.dz/',
        isOnline: true,
      },
      {
        id: 'sante-srv-6',
        title: {
          ar: 'تطبيق دليل أطباء الجزائر (Android)',
          fr: 'Application Mobile Guide des Médecins d’Algérie',
        },
        description: {
          ar: 'دليل هاتفي للبحث عن الأطباء العامين والأخصائيين، الصيدليات، والمخابر الطبية حسب الولاية والتخصص.',
          fr: 'Annuaire mobile permettant de localiser médecins spécialistes, pharmacies et laboratoires d’analyses par wilaya.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.sebrou.docts_guide.app&hl=ar',
        isOnline: true,
      },
      {
        id: 'sante-srv-7',
        title: {
          ar: 'تطبيق الطبيب الجزائري (Android)',
          fr: 'Application Mobile Le Médecin Algérien',
        },
        description: {
          ar: 'تطبيق طبي تثقيفي وتوجيهي يسهل الوصول إلى الإرشادات الصحية، الأدوية، ومراكز الرعاية الطبية عبر الوطن.',
          fr: 'Application d’information médicale et d’orientation sanitaire destinée aux citoyens et praticiens en Algérie.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.algerian.doctor&hl=ar',
        isOnline: true,
      },
      {
        id: 'sante-srv-8',
        title: {
          ar: 'تطبيق بنك الدم الجزائري (تضامن والتبرع بالدم)',
          fr: 'Application Mobile Banque de Sang Algérie',
        },
        description: {
          ar: 'منصة إنسانية تربط المتبرعين بالدم بالمحتاجين ومراكز حقن الدم في المستشفيات حسب الزمرة الدموية والولاية.',
          fr: 'Application solidaire mettant en lien les donneurs de sang volontaires et les centres hospitaliers selon le groupe sanguin.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.dz.bank.blood.nabilsoft.bankblooddz&hl=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'حاملو الشهادات الصحية الأجنبية، تلاميذ البكالوريا الراغبون في الشبه طبي، المواطنون الباحثون عن استشارة، والمتبرعون بالدم',
        fr: 'Diplômés de santé à l’étranger, candidats aux filières paramédicales, patients et donneurs de sang volontaires',
      },
      processingTime: {
        ar: 'إيداع فوري لملفات المعادلة والتكوين؛ تقييم اللجان العلمية لمعادلة الشهادات وإعلان نتائج الشبه طبي وفق الرزنامة السنوية',
        fr: 'Dépôt immédiat en ligne ; examen des dossiers d’équivalence par la commission nationale et résultats paramédicaux selon calendrier',
      },
      fees: {
        ar: 'التسجيل في منصات المعادلة والتكوين الشبه طبي وتطبيقات التبرع بالدم مجاني؛ خدمات العيادات الخاصة تحدد وفق التعريفة المعتمدة',
        fr: 'Inscription aux portails d’équivalence, formation et banque de sang gratuite ; téléconsultations privées tarifées selon le praticien',
      },
      channel: {
        ar: 'منصات sante.gov.dz (equivalence وformation)، منصة etabib.dz، ومديريات الصحة والسكان DSP بالولايات',
        fr: 'Portails sante.gov.dz (equivalence & formation), etabib.dz et Directions de la Santé et de la Population (DSP)',
      },
      keyRequirement: {
        ar: 'شهادة البكالوريا للتكوين الشبه طبي، أو الشهادة الأصلية وكشوف النقاط المترجمة والمصدقة لملف معادلة الشهادات',
        fr: 'Relevé du Baccalauréat pour le paramédical, ou diplôme original et relevés légalisés pour les demandes d’équivalence',
      },
    },
    requirements: [
      {
        label: {
          ar: 'ملف التسجيل في التكوين الشبه طبي',
          fr: 'Dossier concours de formation paramédicale',
        },
        value: {
          ar: 'شهادة البكالوريا للسنة الجارية (الشعب العلمية والرياضية وتقني رياضي حسب التخصص)، بطاقة التعريف الوطنية، واستمارة المنصة',
          fr: 'Baccalauréat de l’année en cours (séries scientifiques compatibles), CNIBE et fiche d’inscription générée sur formation.sante.gov.dz',
        },
      },
      {
        label: {
          ar: 'وثائق طلب معادلة الشهادات الصحية الأجنبية',
          fr: 'Pièces pour équivalence de diplôme médical',
        },
        value: {
          ar: 'الشهادة النهائية، كشوف النقاط لكامل المسار، البرنامج البيداغوجي، جواز السفر، وترجمة رسمية إلى العربية أو الفرنسية للوثائق الأجنبية',
          fr: 'Diplôme original, relevés de notes complets, programme d’études, passeport et traduction officielle légalisée des pièces étrangères',
        },
      },
      {
        label: {
          ar: 'شروط الاستفادة من التطبيب عن بعد (eTabib)',
          fr: 'Prérequis de téléconsultation eTabib',
        },
        value: {
          ar: 'إنشاء حساب مريض على المنصة مع وصف الأعراض أو رفع التحاليل الطبية السابقة لتوجيه الاستشارة للطبيب المختص',
          fr: 'Compte patient actif sur etabib.dz permettant de partager vos antécédents et résultats d’analyses avec le praticien',
        },
      },
      {
        label: {
          ar: 'ضوابط التبرع بالدم عبر تطبيق بنك الدم',
          fr: 'Critères pour le don de sang volontaire',
        },
        value: {
          ar: 'التمتع بصحة جيدة، السن بين 18 و65 سنة، تحديد الزمرة الدموية والولاية بدقة، وإتمام الفحص الطبي القبلي في مركز حقن الدم بالمستشفى',
          fr: 'Être en bonne santé, âgé de 18 à 65 ans, renseigner son groupe sanguin et effectuer l’examen médical préalable au centre hospitalier',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف يسجل خريجو كليات الطب أو الصيدلة الأجنبية لطلب المعادلة؟',
          fr: 'Comment demander l’équivalence d’un diplôme médical obtenu à l’étranger ?',
        },
        answer: {
          ar: 'يجب فتح حساب عبر equivalence.sante.gov.dz/auth?tab=signup، ثم مسح الشهادة وكشوف النقاط ومذكرة التخرج وجواز السفر ورفعها بصيغة PDF لمتابعة جدول لجنة المعادلات.',
          fr: 'Créez votre compte sur equivalence.sante.gov.dz, numérisez votre diplôme, relevés de notes, passeport et justificatifs légalisés au format PDF pour suivi par la commission.',
        },
      },
      {
        question: {
          ar: 'ما هي التخصصات المتاحة في منصة التكوين الشبه طبي لوزارة الصحة؟',
          fr: 'Quelles filières sont ouvertes sur le portail formation.sante.gov.dz ?',
        },
        answer: {
          ar: 'تشمل المنصة التسجيل في فروع الممرضين في الصحة العمومية، القابلات، مخبريي الصحة، مشغلي أجهزة التصوير الطبي، وأعوان رعاية الأطفال حسب المعدلات والاحتياجات الولائية.',
          fr: 'Le portail couvre notamment les formations d’infirmiers de santé publique, sages-femmes, manipulateurs en imagerie médicale, laborantins et auxiliaires de puériculture.',
        },
      },
      {
        question: {
          ar: 'هل تغني بوابة وزارة الصحة عن فضاء الهناء لبطاقة الشفاء؟',
          fr: 'La carte Chifa est-elle gérée par le Ministère de la Santé ou par la CNAS ?',
        },
        answer: {
          ar: 'تصدر وتحيين بطاقة الشفاء والتعويضات الدوائية يقع ضمن اختصاص الصندوق الوطني للتأمينات الاجتماعية CNAS (عبر تطبيق وفضاء الهناء)، بينما تتولى وزارة الصحة المستشفيات والتكوين الطبي والمعادلات.',
          fr: 'La carte Chifa et les remboursements relèvent de la CNAS (espace El Hanaa), tandis que le Ministère de la Santé administre les hôpitaux, formations paramédicales et équivalences.',
        },
      },
      {
        question: {
          ar: 'هل تطبيقات الأطباء وبنك الدم رسمية ومجانية للمواطنين؟',
          fr: 'Les applications annuaires médecins et banque de sang sont-elles gratuites ?',
        },
        answer: {
          ar: 'نعم، تحميل هذه التطبيقات والبحث عن الأطباء القريبين أو الاستجابة لنداءات التبرع بالدم مجاني بالكامل ويسهم في توجيه المرضى بسرعة.',
          fr: 'Oui, l’accès aux annuaires médicaux et aux alertes solidaires de don de sang est entièrement gratuit pour les usagers.',
        },
      },
    ],
  },

  // 60. seaal
  {
    id: 'seaal',
    slug: 'seaal',
    category: 'energy_water',
    name: {
      ar: 'شركة المياه والتطهير للجزائر العاصمة وتيبازة (SEAAL)',
      fr: 'Société des Eaux et de l’Assainissement d’Alger & Tipaza (SEAAL)',
    },
    acronym: 'SEAAL',
    ministry: {
      ar: 'وزارة الري — الجزائر العاصمة وتيبازة',
      fr: 'Ministère de l’Hydraulique (Alger & Tipaza)',
    },
    description: {
      ar: 'البوابة الرقمية الرسمية لشركة المياه والتطهير سيال (SEAAL) لولايتي الجزائر وتيبازة: طلب اشتراك جديد أو ربط بشبكة المياه في الوكالة الرقمية Wakalati، تسديد الفواتير إلكترونيا عبر منصتي Fatourati وبريد نت، استكشاف البوابة الجغرافية للتوزيع، التبليغ عن التسربات، وتطبيق SEAAL Mobile.',
      fr: 'Portail des services numériques de la SEAAL (wilayas d’Alger et Tipaza) : demande de nouvel abonnement dans l’agence digitale Wakalati, paiement de factures d’eau en ligne via Fatourati et BaridiNet, consultation du géoportail de distribution, signalement des fuites et application mobile SEAAL.',
    },
    officialUrl: 'https://www.seaal.dz',
    portalUrl: 'https://wakalati.seaal.dz/nouvel-abonnement',
    iconName: 'Droplets',
    isPopular: false,
    services: [
      {
        id: 'seaal-srv-1',
        title: {
          ar: 'الموقع الرسمي لشركة المياه والتطهير سيال',
          fr: 'Site Officiel de la SEAAL',
        },
        description: {
          ar: 'نشر برامج التوزيع اليومي للماء الشروب في الجزائر وتيبازة، البيانات التقنية للأشغال، ونصائح الترشيد.',
          fr: 'Portail institutionnel diffusant les programmes de distribution d’eau potable, avis de travaux et actualités.',
        },
        url: 'https://www.seaal.dz',
        isOnline: true,
      },
      {
        id: 'seaal-srv-2',
        title: {
          ar: 'طلب اشتراك وربط جديد عبر الوكالة الرقمية (Wakalati)',
          fr: 'Demande de Nouvel Abonnement — Wakalati SEAAL',
        },
        description: {
          ar: 'إيداع ملف الحصول على عداد مياه جديد أو تحويل عقد الاشتراك إلكترونيا دون التنقل للوكالات التجارية.',
          fr: 'Dépôt en ligne des dossiers de branchement neuf ou d’abonnement d’eau potable sans passage en agence.',
        },
        url: 'https://wakalati.seaal.dz/nouvel-abonnement',
        isOnline: true,
      },
      {
        id: 'seaal-srv-3',
        title: {
          ar: 'فضاء الزبائن الوكالة الرقمية لسيال (Wakalati)',
          fr: 'Espace Client Digital — Wakalati SEAAL',
        },
        description: {
          ar: 'متابعة استهلاك المياه الفصلي، تحميل نسخ الفواتير، إرسال قراءة العداد، وتقديم الطلبات والشكاوى التجارية.',
          fr: 'Gestion du compte client, consultation des index et factures, auto-relève de compteur et suivi des réclamations.',
        },
        url: 'https://wakalati.seaal.dz/',
        isOnline: true,
      },
      {
        id: 'seaal-srv-4',
        title: {
          ar: 'بوابة الدفع الإلكتروني «فاتورتي سيال» (Fatourati)',
          fr: 'Paiement en Ligne des Factures — Fatourati SEAAL',
        },
        description: {
          ar: 'تسديد فواتير المياه بشكل فوري وآمن باستخدام البطاقة الذهبية لبريد الجزائر أو بطاقة CIB البنكية.',
          fr: 'Règlement instantané des factures d’eau par carte Edahabia ou carte bancaire CIB avec reçu téléchargeable.',
        },
        url: 'https://fatourati.seaal.dz/',
        isOnline: true,
      },
      {
        id: 'seaal-srv-5',
        title: {
          ar: 'تسديد فاتورة سيال عبر بوابة بريد نت (BaridiNet)',
          fr: 'Paiement Facture SEAAL via BaridiNet Poste',
        },
        description: {
          ar: 'مسار بديل ومباشر عبر بريد الجزائر لدفع فواتير المياه التابعة لشركة سيال بالبطاقة الذهبية.',
          fr: 'Passerelle officielle d’Algérie Poste permettant d’acquitter les factures SEAAL par carte Edahabia.',
        },
        url: 'https://baridinet.poste.dz/seaal',
        isOnline: true,
      },
      {
        id: 'seaal-srv-6',
        title: {
          ar: 'البوابة الجغرافية للتوزيع ومراقبة الشبكة (Géoportail)',
          fr: 'Géoportail de Distribution d’Eau SEAAL',
        },
        description: {
          ar: 'خريطة تفاعلية للاطلاع على خريطة التوزيع المائي في بلديات العاصمة وتيبازة ومناطق التزويد والانقطاعات.',
          fr: 'Carte interactive des secteurs de distribution d’eau potable et planification horaire par commune.',
        },
        url: 'https://www.seaal.dz/geoportail/',
        isOnline: true,
      },
      {
        id: 'seaal-srv-7',
        title: {
          ar: 'تطبيق SEAAL Mobile على الهواتف الذكية',
          fr: 'Application Mobile SEAAL',
        },
        description: {
          ar: 'متابعة الفواتير، الدفع عبر الهاتف، إشعارات الأشغال والانقطاعات المبرمجة، والتبليغ عن تسربات المياه بالصور.',
          fr: 'Application Android de gestion des factures, réception des alertes coupures et signalement géolocalisé de fuites.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.seaal.mobile',
        isOnline: true,
      },
      {
        id: 'seaal-srv-8',
        title: {
          ar: 'التواصل وتقديم الانشغالات لدى سيال',
          fr: 'Contact & Réclamations Client SEAAL',
        },
        description: {
          ar: 'إرسال استفسار أو شكوى لفريق خدمة الزبائن، مع توفر الخط المباشر 1594 للإبلاغ عن التسربات والطوارئ.',
          fr: 'Formulaire de contact client en ligne, en complément du numéro court d’urgence et dépannage 1594.',
        },
        url: 'https://www.seaal.dz/contact-ar/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون والمؤسسات المشتركون في شبكة المياه والتطهير بولايتي الجزائر العاصمة وتيبازة',
        fr: 'Particuliers, commerçants et entreprises abonnés au réseau d’eau des wilayas d’Alger et de Tipaza',
      },
      processingTime: {
        ar: 'تسوية فورية للفاتورة عبر فاتورتي وبريد نت؛ معالجة طلبات الاشتراك الجديد في وكالتي وتبليغات الأعطال 1594 خلال أيام عمل',
        fr: 'Apurement immédiat de la facture sur Fatourati/BaridiNet ; instruction des raccordements Wakalati et interventions 1594 sous quelques jours',
      },
      fees: {
        ar: 'استعمال الوكالة الرقمية Wakalati والدفع الإلكتروني والتطبيقات مجاني؛ تطبق رسوم الاشتراك والربط وفق الكشف التقني القانوني',
        fr: 'Accès Wakalati, télépaiement et application gratuits ; frais de branchement neuf établis sur devis technique officiel',
      },
      channel: {
        ar: 'بوابات wakalati.seaal.dz وfatourati.seaal.dz، تطبيق SEAAL Mobile، والرقم الهاتفي 1594',
        fr: 'Portails wakalati.seaal.dz, fatourati.seaal.dz, application SEAAL et centre d’appels 1594',
      },
      keyRequirement: {
        ar: 'رقم الزبون ومرجع الفاتورة للدفع، وعقد الملكية أو الإيجار وبطاقة التعريف لطلبات الاشتراك الجديد في Wakalati',
        fr: 'Code client et référence facture pour payer, ou titre d’occupation et CNIBE pour ouvrir un abonnement Wakalati',
      },
    },
    requirements: [
      {
        label: {
          ar: 'مرجع الزبون ورقم الفاتورة للدفع الإلكتروني',
          fr: 'Références de facturation pour paiement',
        },
        value: {
          ar: 'إدخال رقم الفاتورة ورمز الزبون المطبوعين في أعلى فاتورة سيال للاطلاع على المبلغ المستحق وسداده عبر فاتورتي',
          fr: 'Saisie du numéro de facture et du code client imprimés sur l’avis d’échéance pour régler via Fatourati ou BaridiNet',
        },
      },
      {
        label: {
          ar: 'ملف طلب اشتراك جديد أو تحويل عقد (Wakalati)',
          fr: 'Dossier de nouvel abonnement sur Wakalati',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية، سند الملكية أو عقد الإيجار أو قرار الاستفادة، وموقع المسكن لتثبيت العداد الفردي',
          fr: 'CNIBE, titre de propriété, bail légal ou décision d’attribution ainsi que la localisation exacte du point de desserte',
        },
      },
      {
        label: {
          ar: 'التحقق من بطاقة الدفع الإلكتروني',
          fr: 'Moyen de paiement accepté',
        },
        value: {
          ar: 'بطاقة ذهبية أو بنكية CIB برمز OTP فعال عبر الهاتف لتأكيد الدفع وتحميل وصل التسديد الفوري',
          fr: 'Carte Edahabia ou CIB avec validation SMS OTP active pour finaliser l’opération et télécharger le reçu',
        },
      },
      {
        label: {
          ar: 'بيانات التبليغ عن التسربات والأعطال (1594)',
          fr: 'Signalement de fuite ou coupure (1594)',
        },
        value: {
          ar: 'تحديد البلدية والحي بدقة ونوع التسرب (شبكة رئيسية أو توصيل منزلي) مع صورة عبر تطبيق SEAAL Mobile عند الإمكان',
          fr: 'Préciser la commune, le quartier et la nature de l’incident avec photo géolocalisée si possible via l’application SEAAL',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أدفع فاتورة الماء لشركة سيال دون فاتورة ورقية في يدي؟',
          fr: 'Comment payer une facture SEAAL si je n’ai pas reçu l’avis papier ?',
        },
        answer: {
          ar: 'سجل الدخول في فضاء الوكالة الرقمية wakalati.seaal.dz أو تطبيق SEAAL Mobile برقم العقد والزبون لعرض الفواتير غير المدفوعة وتحميلها ثم تسديدها مباشرة عبر فاتورتي.',
          fr: 'Connectez-vous à votre espace client sur wakalati.seaal.dz ou sur l’app SEAAL afin de consulter votre historique de factures, télécharger le PDF et payer en ligne.',
        },
      },
      {
        question: {
          ar: 'ما هي الولايات التي تغطيها خدمات شركة سيال SEAAL؟',
          fr: 'Quelles wilayas sont couvertes par la SEAAL ?',
        },
        answer: {
          ar: 'تتولى شركة سيال خدمة تزويد وتسيير المياه والتطهير في ولايتي الجزائر العاصمة وتيبازة فقط، بينما تخدم SEOR ولاية وهران وSEACO قسنطينة والجزائرية للمياه ADE بقية الولايات.',
          fr: 'La SEAAL couvre exclusivement les wilayas d’Alger et de Tipaza (Oran relève de la SEOR, Constantine de la SEACO et le reste du pays de l’ADE).',
        },
      },
      {
        question: {
          ar: 'كيف أعرف أوقات التوزيع المبرمجة لحينا في العاصمة أو تيبازة؟',
          fr: 'Comment consulter le programme de distribution d’eau de mon quartier ?',
        },
        answer: {
          ar: 'افتح البوابة الجغرافية لسيال seaal.dz/geoportail أو تابع التنبيهات في تطبيق SEAAL Mobile، حيث تعرض فترات التوزيع وأشغال الصيانة المبرمجة لكل بلدية.',
          fr: 'Consultez le géoportail seaal.dz/geoportail ou activez les notifications de votre commune dans l’application SEAAL Mobile.',
        },
      },
      {
        question: {
          ar: 'ما الرقم المخصص للتبليغ عن انكسار قناة مياه أو انقطاع مفاجئ؟',
          fr: 'Quel numéro composer pour signaler une fuite d’eau ou coupure urgente ?',
        },
        answer: {
          ar: 'يعمل مركز الاستقبال الهاتفي لشركة سيال على الرقم 1594 على مدار الساعة لاستقبال بلاغات التسربات والأعطال وتوجيه فرق التدخل.',
          fr: 'Le centre d’appels opérationnel SEAAL répond 24h/24 au 1594 pour enregistrer les signalements de fuites et dépannages.',
        },
      },
    ],
  },

  // 61. seor
  {
    id: 'seor',
    slug: 'seor',
    category: 'energy_water',
    name: {
      ar: 'شركة المياه والتطهير لوهران (SEOR)',
      fr: 'Société de l’Eau et de l’Assainissement d’Oran (SEOR)',
    },
    acronym: 'SEOR',
    ministry: {
      ar: 'قطاع الموارد المائية — ولاية وهران',
      fr: 'Secteur des Ressources en Eau (Wilaya d’Oran)',
    },
    description: {
      ar: 'الخدمات الرقمية لمؤسسة المياه والتطهير بوهران (SEOR): الدفع الإلكتروني لفواتير استهلاك المياه، فضاء محاكاة وحساب الفاتورة وتفاصيل الاستهلاك، بوابة الحصول أو استرجاع كلمة مرور فضاء الزبائن، تطبيق SeorMob الهاتفي، والتواصل مع مصلحة زبائن وهران.',
      fr: 'Services en ligne de la Société de l’Eau et de l’Assainissement d’Oran (SEOR) : télépaiement des factures d’eau, consultation et simulation de facturation, récupération de mot de passe espace client, application mobile SeorMob et service réclamations.',
    },
    officialUrl: 'https://seor.dz/',
    portalUrl: 'https://seor.dz/espace-clients/e-paiement/',
    iconName: 'Droplets',
    isPopular: false,
    services: [
      {
        id: 'seor-srv-1',
        title: {
          ar: 'الموقع الرسمي لمؤسسة مياه وهران (SEOR)',
          fr: 'Site Officiel de la SEOR Oran',
        },
        description: {
          ar: 'البوابة الرسمية لمستجدات التزويد بالماء الشروب في ولاية وهران، الوكالات التجارية، ومشاريع التحلية والتطهير.',
          fr: 'Portail officiel regroupant les avis de distribution à Oran, coordonnées des agences et informations techniques.',
        },
        url: 'https://seor.dz/',
        isOnline: true,
      },
      {
        id: 'seor-srv-2',
        title: {
          ar: 'تسديد فاتورة المياه إلكترونيا (SEOR E-Paiement)',
          fr: 'Paiement en Ligne des Factures d’Eau SEOR',
        },
        description: {
          ar: 'دفع مستحقات فواتير الماء الشروب لمشتركي ولاية وهران بالبطاقة الذهبية أو بطاقة CIB البنكية عن بعد.',
          fr: 'Guichet sécurisé permettant aux abonnés oranais de régler leurs factures d’eau par carte Edahabia ou CIB.',
        },
        url: 'https://seor.dz/espace-clients/e-paiement/',
        isOnline: true,
      },
      {
        id: 'seor-srv-3',
        title: {
          ar: 'فضاء الاستعلام ومحاكاة فاتورة المياه',
          fr: 'Consultation & Simulation de Facture SEOR',
        },
        description: {
          ar: 'معاينة رصيد الفواتير السابقة والجارية وتقدير كلفة الاستهلاك عبر إدخال مؤشرات العداد مباشرة.',
          fr: 'Outil client pour consulter les factures en cours et simuler le montant selon le relevé du compteur.',
        },
        url: 'https://seor.dz/espace-clients/consultation/',
        isOnline: true,
      },
      {
        id: 'seor-srv-4',
        title: {
          ar: 'الحصول أو استعادة كلمة مرور فضاء الزبائن',
          fr: 'Activation ou Récupération Mot de Passe Espace Client',
        },
        description: {
          ar: 'إنشاء أو استرجاع رمز الدخول الخاص بحساب الزبون للاطلاع على كشوف الفوترة والوضعية المالية.',
          fr: 'Service permettant d’obtenir ou de réinitialiser le code d’accès à votre espace abonné SEOR.',
        },
        url: 'https://seor.dz/wp-content/seor/consultation/auth.php/',
        isOnline: true,
      },
      {
        id: 'seor-srv-5',
        title: {
          ar: 'تطبيق SeorMob الرسمي للهواتف الذكية',
          fr: 'Application Mobile SeorMob',
        },
        description: {
          ar: 'تطبيق زبائن سيور وهران لمتابعة الاستهلاك، استقبال إشعارات الصيانة والتوزيع، والتبليغ عن التسربات بالهاتف.',
          fr: 'Application Android pour suivre votre consommation d’eau à Oran, consulter les alertes réseau et déclarer les fuites.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.djm.seor',
        isOnline: true,
      },
      {
        id: 'seor-srv-6',
        title: {
          ar: 'التواصل وتقديم الشكاوى لدى مؤسسة SEOR',
          fr: 'Contact & Réclamations — Service Client SEOR',
        },
        description: {
          ar: 'استمارة الاتصال المباشر بمصالح زبائن شركة المياه والتطهير لوهران لطرح الاستفسارات ومراجعة الفواتير.',
          fr: 'Formulaire officiel pour adresser vos réclamations commerciales ou techniques à la SEOR.',
        },
        url: 'https://seor.dz/contact/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون، التجار، والمؤسسات المشتركون في شبكة المياه ببلديات ولاية وهران',
        fr: 'Ménages, commerçants et entreprises raccordés au réseau d’eau de la wilaya d’Oran',
      },
      processingTime: {
        ar: 'تأكيد فوري لدفع الفاتورة ومحاكاة الاستهلاك عبر البوابة؛ معالجة طلبات التبليغ والمراجعة الفوترية عبر الوكالات بوهران',
        fr: 'Règlement et simulation instantanés en ligne ; traitement des réclamations techniques et commerciales par les agences d’Oran',
      },
      fees: {
        ar: 'الدفع الإلكتروني ومحاكاة الفاتورة وتطبيق SeorMob مجانية تماما بدون رسوم إضافية على الفاتورة',
        fr: 'Consultation, simulateur, télépaiement et application SeorMob sans aucun frais supplémentaire',
      },
      channel: {
        ar: 'بوابة seor.dz، تطبيق SeorMob، ومركز الاتصال والوكالات التجارية لولاية وهران',
        fr: 'Portail seor.dz, application SeorMob et agences commerciales de la wilaya d’Oran',
      },
      keyRequirement: {
        ar: 'رمز الزبون ورقم الفاتورة المدونين على إشعار SEOR، وبطاقة دفع ذهبية أو CIB للدفع عن بعد',
        fr: 'Code abonné et numéro de facture SEOR, ainsi qu’une carte Edahabia ou CIB pour le règlement électronique',
      },
    },
    requirements: [
      {
        label: {
          ar: 'مرجع العقد ورقم الفاتورة',
          fr: 'Code abonné et référence facture',
        },
        value: {
          ar: 'توفير رقم المشترك ومرجع الفاتورة من الإشعار الورقي للدخول إلى بوابة المحاكاة والدفع الإلكتروني',
          fr: 'Disposer du numéro d’abonné et de la référence facture figurant sur votre avis SEOR pour consulter et payer',
        },
      },
      {
        label: {
          ar: 'تفعيل كلمة مرور فضاء الزبون',
          fr: 'Accès authentifié à l’espace client',
        },
        value: {
          ar: 'استعمال رقم الزبون والبريد الإلكتروني أو الهاتف المسجل عبر صفحة المصادقة auth.php لاستلام أو تغيير كلمة العبور',
          fr: 'Renseigner votre référence client et coordonnées via le module auth.php pour générer ou réinitialiser votre mot de passe',
        },
      },
      {
        label: {
          ar: 'وسيلة الدفع الإلكتروني',
          fr: 'Carte monétique Edahabia ou CIB',
        },
        value: {
          ar: 'بطاقة ذهبية لبريد الجزائر أو بطاقة CIB مفعلة بخدمة رمز التحقق OTP لاستخراج وصل السداد الإلكتروني',
          fr: 'Carte Edahabia ou CIB avec validation SMS OTP active afin de recevoir immédiatement la quittance de paiement',
        },
      },
      {
        label: {
          ar: 'تحديد الموقع عند التبليغ عبر SeorMob',
          fr: 'Signalement précis sur SeorMob',
        },
        value: {
          ar: 'إرفاق وصف العطل أو التسرب وعنوان البلدية والحي بوهران بدقة لتسريع تدخل الفرق التقنية',
          fr: 'Indiquer la commune, le quartier à Oran et la nature de la fuite ou coupure pour faciliter l’intervention',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أستعيد كلمة المرور الخاصة بحسابي في موقع SEOR وهران؟',
          fr: 'Comment obtenir ou réinitialiser mon mot de passe sur le portail SEOR ?',
        },
        answer: {
          ar: 'ادخل إلى صفحة المصادقة seor.dz/wp-content/seor/consultation/auth.php واختر استعادة أو طلب كلمة المرور بإدخال رقم العقد والبيانات المسجلة لدى الوكالة.',
          fr: 'Accédez à la page seor.dz/wp-content/seor/consultation/auth.php et suivez la procédure avec votre numéro d’abonné pour recevoir vos accès.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني حساب فاتورة المياه التقديرية قبل صدورها الرسمي؟',
          fr: 'Puis-je estimer le montant de ma facture d’eau SEOR à l’avance ?',
        },
        answer: {
          ar: 'نعم، تتيح صفحة المحاكاة seor.dz/espace-clients/consultation إدخال القراءة الحالية لعداد الماء ومعاينة الشرائح والتكلفة التقديرية للاستهلاك.',
          fr: 'Oui, l’outil seor.dz/espace-clients/consultation permet d’effectuer une simulation en saisissant l’index relevé sur votre compteur.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين خدمات SEOR والجزائرية للمياه ADE؟',
          fr: 'Quelle différence entre la SEOR et l’Algérienne des Eaux (ADE) ?',
        },
        answer: {
          ar: 'تختص مؤسسة SEOR بتسيير المياه والتطهير حصريا في ولاية وهران، في حين تتولى الجزائرية للمياه ADE تسيير أغلب ولايات الوطن الأخرى باستثناء العاصمة وتيبازة (سيال) وقسنطينة.',
          fr: 'La SEOR gère exclusivement la distribution et l’assainissement dans la wilaya d’Oran, alors que l’ADE couvre la majorité des autres wilayas.',
        },
      },
      {
        question: {
          ar: 'كيف أبلغ عن تسرب مائي أو ارتفاع غير طبيعي في فاتورة SEOR؟',
          fr: 'Comment signaler une fuite ou contester une facture élevée auprès de la SEOR ?',
        },
        answer: {
          ar: 'يمكنك رفع بلاغ عبر تطبيق SeorMob أو استمارة التواصل seor.dz/contact مع إرفاق قراءة العداد الفعلية وصورة للعداد ليتم فحص الحساب وإرسال فرقة المراقبة.',
          fr: 'Transmettez votre réclamation via SeorMob ou seor.dz/contact en joignant une photo claire du compteur et l’index relevé pour vérification.',
        },
      },
    ],
  },

  // 62. sonalgaz-bill-guide
  {
    id: 'sonalgaz-bill-guide',
    slug: 'sonalgaz-bill-guide',
    category: 'energy_water',
    name: {
      ar: 'الدليل التفاعلي لقراءة وحساب فاتورة سونلغاز (الكهرباء والغاز)',
      fr: 'Guide Interactif — Lire et Calculer sa Facture Sonelgaz',
    },
    acronym: 'FACTURE GAZ',
    ministry: {
      ar: 'لجنة ضبط الكهرباء والغاز CREG / سونلغاز',
      fr: 'CREG & Groupe Sonelgaz',
    },
    description: {
      ar: 'دليل تفاعلي مبسط وشامل لفهم مكونات فاتورة الكهرباء والغاز لسونلغاز في الجزائر بالاعتماد على مرجع لجنة ضبط الكهرباء والغاز CREG: قراءة المؤشر القديم والجديد، فهم رموز مصدر القراءة (R، E، M)، معامل التحويل الحراري للغاز PCS، الشرائح والرسوم الثابتة والضرائب، مع روابط الاستعلام والدفع المباشر.',
      fr: 'Guide explicatif et calculateur interactif pour comprendre votre facture d’électricité et de gaz Sonelgaz selon les standards de la CREG : lecture des index ancien et nouveau, signification des codes (R, E, M), coefficient PCS du gaz, tranches tarifaires, taxes et liens directs ELIT pour consulter et payer.',
    },
    officialUrl: 'https://creg.gov.dz/المستهلكون/كيف-تقرأ-فاتورتك/',
    portalUrl: 'https://consulter-factures.elit.dz/',
    iconName: 'Zap',
    isPopular: true,
    services: [
      {
        id: 'sonalgaz-bill-guide-srv-1',
        title: {
          ar: 'الدليل الرسمي «كيف تقرأ فاتورتك؟» (لجنة ضبط الكهرباء والغاز CREG)',
          fr: 'Guide Officiel CREG — Comment Lire Votre Facture',
        },
        description: {
          ar: 'المرجع التنظيمي الرسمي الصادر عن لجنة ضبط الكهرباء والغاز لشرح بنود الفاتورة وحقوق المستهلك وطرق الاعتراض.',
          fr: 'Documentation officielle de la Commission de Régulation de l’Électricité et du Gaz expliquant chaque rubrique de facturation.',
        },
        url: 'https://creg.gov.dz/المستهلكون/كيف-تقرأ-فاتورتك/',
        isOnline: true,
      },
      {
        id: 'sonalgaz-bill-guide-srv-2',
        title: {
          ar: 'بوابة الاستعلام عن فاتورة الكهرباء والغاز (ELIT)',
          fr: 'Consultation des Factures Sonelgaz en Ligne (ELIT)',
        },
        description: {
          ar: 'عرض وتحميل نسخة الفاتورة الثلاثية لسونلغاز ومعرفة المبلغ المستحق وآخر أجل للدفع برقم المرجع.',
          fr: 'Consultation directe du montant dû, de la date limite et téléchargement du duplicata de facture par référence.',
        },
        url: 'https://consulter-factures.elit.dz/',
        isOnline: true,
      },
      {
        id: 'sonalgaz-bill-guide-srv-3',
        title: {
          ar: 'دفع فاتورة سونلغاز إلكترونيا (E-Paiement ELIT)',
          fr: 'Paiement Électronique de la Facture Sonelgaz',
        },
        description: {
          ar: 'تسديد فاتورة الكهرباء والغاز فور التحقق من مكوناتها باستخدام البطاقة الذهبية أو البطاقة البنكية CIB.',
          fr: 'Règlement en ligne sécurisé par carte Edahabia ou CIB une fois vos index et montants vérifiés.',
        },
        url: 'https://epayement.elit.dz/payementFacture.xhtml',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'جميع مشتركي الكهرباء والغاز المنزلي والتجاري لدى سونلغاز الراغبين في التحقق من فواتيرهم واحتساب الاستهلاك بدقة',
        fr: 'Tous les abonnés domestiques et professionnels Sonelgaz souhaitant vérifier leurs index et comprendre leur facture',
      },
      processingTime: {
        ar: 'قراءة وفحص فوري لمؤشرات العداد في الدليل التفاعلي؛ استعلام ودفع إلكتروني لحظي عبر بوابة ELIT',
        fr: 'Calcul et analyse instantanés via le simulateur de la page ; consultation et paiement immédiats sur ELIT',
      },
      fees: {
        ar: 'استخدام الدليل التفاعلي وحاسبة الاستهلاك وخدمات الاستعلام مجاني بالكامل بدون أي تكلفة',
        fr: 'L’utilisation du guide interactif, du calculateur d’index et la consultation des factures sont gratuits',
      },
      channel: {
        ar: 'الدليل التفاعلي على هذه الصفحة، دليل المستهلك في creg.gov.dz، وبوابة فواتير سونلغاز elit.dz',
        fr: 'Calculateur interactif intégré ci-dessous, documentation creg.gov.dz et portails elit.dz',
      },
      keyRequirement: {
        ar: 'رقم العقد أو مرجع الفاتورة، المؤشر القديم والجديد من العداد، ورمز القراءة (R أو E أو M)',
        fr: 'Référence de la facture, index ancien et nouveau relevés sur les compteurs et code de lecture (R, E ou M)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'المؤشر القديم والمؤشر الجديد (Index)',
          fr: 'Index ancien et index nouveau',
        },
        value: {
          ar: 'طرح المؤشر القديم (بداية الفترة) من المؤشر الجديد (نهاية الفترة) دون احتساب الأرقام العشرية بعد الفاصلة لحساب الاستهلاك الخام',
          fr: 'Soustraire l’index ancien de l’index nouveau (sans tenir compte des décimales) pour obtenir la consommation brute de la période',
        },
      },
      {
        label: {
          ar: 'معامل التحويل (PCS للغاز الطبيعي)',
          fr: 'Coefficient de conversion (PCS gaz)',
        },
        value: {
          ar: 'يساوي معامل الكهرباء عادة 1، بينما يضرب حجم الغاز (م3) في معامل التحويل الحراري PCS (حوالي 9 إلى 11) لتحويله إلى وحدة طاقة مفوترة (Th)',
          fr: 'Le coefficient électrique vaut généralement 1 ; le volume de gaz (m³) est multiplié par le PCS figurant sur la facture pour calculer l’énergie (Th)',
        },
      },
      {
        label: {
          ar: 'رموز مصدر قراءة العداد (R / E / M)',
          fr: 'Codes d’origine du relevé (R / E / M)',
        },
        value: {
          ar: 'الرمز R يعني قراءة فعلية مباشرة، والرمز E قراءة مقدرة (تقديرية)، والرمز M قراءة خاصة بناء على طلب الزبون أو تسوية',
          fr: 'R désigne un relevé réel, E une estimation basée sur l’historique, et M un relevé exceptionnel hors cycle normal',
        },
      },
      {
        label: {
          ar: 'هيكل الشرائح والرسوم الثابتة والضرائب',
          fr: 'Tranches tarifaires, redevances fixes et taxes',
        },
        value: {
          ar: 'يقسم الاستهلاك على شرائح تصاعدية، وتضاف إليها الرسوم الثابتة للاشتراك، ضريبة القيمة المضافة TVA، وحقوق السكن أو البلدية والبيئة عند انطباقها',
          fr: 'La consommation est facturée par tranches progressives auxquelles s’ajoutent l’abonnement fixe, la TVA et les taxes réglementaires applicables',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'لماذا جاءت فاتورتي مرتفعة رغم أن استهلاكي في الفترة السابقة كان منخفضا؟',
          fr: 'Pourquoi ma facture actuelle est-elle élevée après une période de faible montant ?',
        },
        answer: {
          ar: 'غالبا ما يحدث ذلك عند صدور فواتير سابقة برمز القراءة المقدرة (E) بأقل من الاستهلاك الحقيقي، ثم تأتي فاتورة التسوية الفعلية (R) لتشمل الفارق المتراكم وتدخل الاستهلاك في الشرائح العليا.',
          fr: 'Cela survient souvent lorsqu’une ou plusieurs factures précédentes portaient le code estimé (E) et que le relevé réel (R) rattrape la différence en basculant dans les tranches supérieures.',
        },
      },
      {
        question: {
          ar: 'ماذا يعني الرمز E بجانب مؤشر العداد وكيف أصححه؟',
          fr: 'Que signifie le code E sur ma facture et comment le rectifier ?',
        },
        answer: {
          ar: 'الرمز E يعني أن المؤشر تقديري لتعذر وصول عون القراءة إلى العداد؛ يمكنك قراءة الرقم الحقيقي من عدادك وإرساله عبر خدمة الرفع الآلي لسونلغاز أو طلب مراجعة في الوكالة.',
          fr: 'Le code E indique une estimation faute d’accès au compteur ; relevez l’index réel et transmettez-le via le service d’auto-relève Sonelgaz ou en agence.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من رقم عدادي على الفاتورة لتجنب الخطأ مع عداد الجيران؟',
          fr: 'Comment vérifier que le numéro de compteur sur la facture correspond bien au mien ?',
        },
        answer: {
          ar: 'يوضح دليل CREG أن الأرقام الأربعة الأخيرة في أسفل واجهة العداد هي غالبا مرجع العداد المختصر؛ قارنها دائما بالرقم المسجل في خانة رقم العداد أعلى الفاتورة.',
          fr: 'Selon le guide CREG, les quatre derniers chiffres inscrits sur la plaque du compteur permettent généralement d’identifier votre appareil par rapport à la facture.',
        },
      },
      {
        question: {
          ar: 'ما هي الإجراءات القانونية للاعتراض على خطأ في فاتورة سونلغاز؟',
          fr: 'Quelle démarche suivre pour contester une erreur manifeste de facturation ?',
        },
        answer: {
          ar: 'صور مؤشر العداد الحالي وتقدم بوكالة التوزيع مرفقا بالفاتورة لطلب إعادة قراءة ومراجعة، وفي حال عدم التسوية يحق لك رفع تظلم إلى لجنة ضبط الكهرباء والغاز CREG.',
          fr: 'Relevez et photographiez votre compteur, déposez une réclamation à l’agence Sonelgaz et, en l’absence de solution, saisissez la CREG en recours.',
        },
      },
    ],
  },

  // 63. sonalgaz
  {
    id: 'sonalgaz',
    slug: 'sonalgaz',
    category: 'energy_water',
    name: {
      ar: 'مجمع سونلغاز — فواتير الكهرباء والغاز ومنصة E-Taqaty',
      fr: 'Sonelgaz — Paiement de Factures, E-Taqaty & Raccordement',
    },
    acronym: 'SONELGAZ',
    ministry: {
      ar: 'وزارة الطاقة والمناجم',
      fr: 'Ministère de l’Énergie et des Mines',
    },
    description: {
      ar: 'البوابة الشاملة للخدمات الرقمية لمجمع سونلغاز في الجزائر: الاطلاع على فواتير الكهرباء والغاز وتسديدها بالبطاقة الذهبية وCIB، الرفع الآلي لمؤشرات العداد، التسجيل برقم التعريف الوطني في فضاء E-Taqaty، إيداع وتتبع طلبات الربط بالكهرباء والغاز، الاطلاع على التسعيرات، التبليغ عن الأعطال، وطرح الانشغالات.',
      fr: 'Portail officiel des téléservices du Groupe Sonelgaz : consultation et télépaiement des factures d’électricité et de gaz, auto-relève d’index en ligne, espace client E-Taqaty avec enregistrement du NIN, demande et suivi de raccordement énergétique, grilles tarifaires et signalement des pannes.',
    },
    officialUrl: 'https://www.sonelgaz.dz/',
    portalUrl: 'https://e-taqaty.sonelgaz.dz/pages/application/collecteNin.xhtml',
    iconName: 'Zap',
    isPopular: true,
    services: [
      {
        id: 'sonalgaz-srv-1',
        title: {
          ar: 'الموقع الرسمي لمجمع سونلغاز',
          fr: 'Site Officiel du Groupe Sonelgaz',
        },
        description: {
          ar: 'البوابة المركزية لأخبار قطاع الطاقة، خدمات التوزيع، والبيانات الصحفية الرسمية بما فيها إجراءات تعويض الأضرار.',
          fr: 'Portail institutionnel regroupant les actualités du groupe, activités de distribution et communiqués officiels.',
        },
        url: 'https://www.sonelgaz.dz/',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-2',
        title: {
          ar: 'التسجيل برقم التعريف الوطني في خدمة E-Taqaty',
          fr: 'Enregistrement du NIN — Espace E-Taqaty',
        },
        description: {
          ar: 'ربط عقد الكهرباء والغاز برقم التعريف الوطني للزبون للاستفادة من التنبيهات والخدمات الرقمية الحديثة.',
          fr: 'Téléservice permettant d’associer votre numéro d’identification national (NIN) à votre compteur client Sonelgaz.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/application/collecteNin.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-3',
        title: {
          ar: 'دفع فاتورة الكهرباء والغاز إلكترونيا',
          fr: 'Paiement en Ligne de la Facture Sonelgaz',
        },
        description: {
          ar: 'تسديد فواتير سونلغاز بالبطاقة الذهبية أو بطاقة CIB البنكية فورا وعلى مدار الساعة دون تنقل للوكالة.',
          fr: 'Règlement instantané et sécurisé des factures d’énergie par carte Edahabia ou CIB 24h/24.',
        },
        url: 'https://epayement.elit.dz/payementFacture.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-4',
        title: {
          ar: 'تصفح والاستعلام عن فاتورة الكهرباء والغاز',
          fr: 'Consultation des Factures Sonelgaz (ELIT)',
        },
        description: {
          ar: 'معاينة رصيد الفاتورة الثلاثية، تواريخ الاستحقاق، وتحميل نسخة الفاتورة عن بعد برقم المرجع.',
          fr: 'Vérification en ligne du montant dû, des échéances et téléchargement du duplicata de facture.',
        },
        url: 'https://consulter-factures.elit.dz/',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-5',
        title: {
          ar: 'الرفع الآلي لقراءة العداد ومحاكاة الفاتورة',
          fr: 'Auto-Relève d’Index & Simulation de Facture',
        },
        description: {
          ar: 'إدخال القراءة الحقيقية لعداد الكهرباء والغاز عبر الإنترنت لتفادي الفوترة التقديرية ومحاكاة قيمة الفاتورة.',
          fr: 'Transmission en ligne du relevé réel de votre compteur afin d’éviter les factures estimées et simuler le coût.',
        },
        url: 'https://www.sonelgaz-distribution.dz/?option=form-auto-releve',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-6',
        title: {
          ar: 'تسجيل الدخول إلى فضاء الزبون E-Taqaty',
          fr: 'Connexion à l’Espace Client E-Taqaty',
        },
        description: {
          ar: 'ولوج الحساب الشخصي لإدارة عقود الكهرباء والغاز، متابعة سجل الفوترة، وإيداع الطلبات التقنية.',
          fr: 'Accès authentifié à votre tableau de bord pour gérer contrats, historique des factures et demandes techniques.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/application/se_connecter.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-7',
        title: {
          ar: 'الاطلاع على وثائق ملف طلب الربط بالكهرباء أو الغاز',
          fr: 'Composition du Dossier de Raccordement (E-Taqaty)',
        },
        description: {
          ar: 'معرفة القائمة الرسمية للوثائق التقنية والإدارية المطلوبة لطلب توصيل جديد بشبكة الكهرباء أو الغاز.',
          fr: 'Consultation des pièces administratives et plans requis avant de soumettre un dossier de raccordement.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/utilisateur/rcn-hord-espace-client/dossierRcn.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-8',
        title: {
          ar: 'تقديم طلب الربط بالكهرباء والغاز عن بعد',
          fr: 'Demande de Raccordement Électricité / Gaz en Ligne',
        },
        description: {
          ar: 'ملء استمارة طلب التوصيل المنزلي أو المهني بالكهرباء والغاز وإرفاق الوثائق إلكترونيا عبر منصة E-Taqaty.',
          fr: 'Dépôt dématérialisé des demandes de branchement électrique ou gazier pour particuliers et professionnels.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/utilisateur/rcn-hord-espace-client/demandRcnHespaceClient.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-9',
        title: {
          ar: 'الاستعلام عن حالة طلب الربط أو القضية',
          fr: 'Consultation de l’État d’une Demande de Raccordement',
        },
        description: {
          ar: 'التحقق من مرحلة دراسة ملف التوصيل أو صدور الكشف المالي الخاص بطلب الربط المودع مسبقا.',
          fr: 'Vérification rapide de l’avancement d’un dossier de raccordement et de la disponibilité du devis.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/utilisateur/rcn-hord-espace-client/consulterEtatDmdHespacClient.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-10',
        title: {
          ar: 'متابعة وتتبع ملفات التوصيل بالشبكة',
          fr: 'Suivi Détaillé des Travaux de Raccordement',
        },
        description: {
          ar: 'مراقبة مراحل الإنجاز الميداني، تسديد الكشف، وتركيب العداد الكهربائي أو الغازي خطوة بخطوة.',
          fr: 'Suivi complet des étapes techniques depuis l’étude jusqu’à la pose du compteur et mise en service.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/utilisateur/rcn-hord-espace-client/suiviRcnHEspaceClient.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-11',
        title: {
          ar: 'تسعيرات الكهرباء والغاز المعتمدة في الجزائر',
          fr: 'Grilles Tarifaires Électricité & Gaz (E-Taqaty)',
        },
        description: {
          ar: 'الاطلاع على شرائح التسعير الرسمية للاستهلاك المنزلي، الفلاحي، والتجاري والصناعي وفق التنظيم الوطني.',
          fr: 'Consultation des tarifs officiels par tranche selon les catégories d’usage domestique, agricole et industriel.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/utilisateur/tarification.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-12',
        title: {
          ar: 'التواصل مع مصالح الدعم في فضاء E-Taqaty',
          fr: 'Messagerie & Assistance — E-Taqaty',
        },
        description: {
          ar: 'إرسال استفسار أو طلب مساعدة تقنية وتجارية مباشرة إلى المديرية الولائية للتوزيع المعنية.',
          fr: 'Formulaire d’assistance en ligne pour joindre la direction de distribution de votre wilaya.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/application/contactMessage.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-13',
        title: {
          ar: 'الإبلاغ عن خلل أو عطب في شبكة الكهرباء أو الغاز',
          fr: 'Signalement de Panne ou Anomalie Réseau',
        },
        description: {
          ar: 'التبليغ السريع عن انقطاع التيار، تذبذب التوتر، تسرب الغاز، أو أعطال الإنارة والربط عبر E-Taqaty أو الرقم 3303.',
          fr: 'Déclaration immédiate des pannes électriques, chutes de tension ou fuites de gaz en ligne ou via le 3303.',
        },
        url: 'https://e-taqaty.sonelgaz.dz/pages/utilisateur/signalement.xhtml',
        isOnline: true,
      },
      {
        id: 'sonalgaz-srv-14',
        title: {
          ar: 'منصة انشغالات الزبائن والشكاوى — سونلغاز',
          fr: 'Portail des Requêtes & Réclamations Sonelgaz',
        },
        description: {
          ar: 'فضاء مخصص لتلقي انشغالات المواطنين وطلبات التعويض عن أضرار اضطرابات الشبكة وفق الإجراءات التنظيمية.',
          fr: 'Espace officiel pour transmettre vos requêtes commerciales ou déclarations de sinistres réseau.',
        },
        url: 'https://www.sonelgaz.dz/ar#requetes',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المشتركون المنزليون، التجار، الفلاحون، المستثمرون الصناعيون، وطالبو الربط الجديد بالكهرباء والغاز في الجزائر',
        fr: 'Particuliers, commerçants, exploitants agricoles, industriels et demandeurs de raccordement neuf en Algérie',
      },
      processingTime: {
        ar: 'دفع واستعلام فوري للفواتير؛ دراسة طلبات الربط بالكهرباء والغاز عبر E-Taqaty وإرسال فرق التدخل الطارئ عبر 3303 على مدار الساعة',
        fr: 'Paiement instantané des factures ; instruction des raccordements E-Taqaty selon devis et dépannage 3303 24h/24',
      },
      fees: {
        ar: 'الدفع الإلكتروني والاستعلام والرفع الآلي والتبليغ مجاني تماما؛ تحدد كلفة الربط الجديد وفق الكشف الهندسي للوكالة',
        fr: 'Consultation, télépaiement, auto-relève et signalement gratuits ; frais de raccordement établis sur devis officiel',
      },
      channel: {
        ar: 'منصة e-taqaty.sonelgaz.dz، بوابة الفواتير elit.dz، الوكالات التجارية، ومركز الاتصال الوطني 3303',
        fr: 'Portails e-taqaty.sonelgaz.dz et elit.dz, agences commerciales et centre d’appels national 3303',
      },
      keyRequirement: {
        ar: 'رقم المرجع (12 رقما) ومفتاح الفاتورة للدفع والاستعلام، ورقم التعريف الوطني NIN لخدمات E-Taqaty والربط',
        fr: 'Référence et clé figurant sur la facture pour consulter/payer, et NIN pour les démarches E-Taqaty',
      },
    },
    requirements: [
      {
        label: {
          ar: 'بيانات دفع ومعاينة الفاتورة (ELIT)',
          fr: 'Références de facturation ELIT',
        },
        value: {
          ar: 'المرجع المكون من 12 رقما، رمز المفتاح، والمبلغ الدقيق أو آخر فاتورة مسجلة لدفع المستحقات بالبطاقة الذهبية أو CIB',
          fr: 'Référence client à 12 chiffres et clé de contrôle inscrits en haut de la facture pour régler par carte Edahabia ou CIB',
        },
      },
      {
        label: {
          ar: 'التسجيل في فضاء E-Taqaty برقم التعريف الوطني',
          fr: 'Inscription E-Taqaty avec le NIN',
        },
        value: {
          ar: 'رقم التعريف الوطني NIN (18 رقما) من البطاقة البيومترية ومرجع العداد أو نقطة التوزيع لربط الحساب الشخصي',
          fr: 'Numéro d’identification national (NIN à 18 chiffres) issu de la CNIBE et référence du contrat de fourniture',
        },
      },
      {
        label: {
          ar: 'وثائق طلب الربط بالكهرباء أو الغاز (RCN)',
          fr: 'Dossier de demande de raccordement',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية، عقد الملكية أو قرار الاستفادة أو رخصة البناء، ومخطط الموقع أو الكتلة وفق دفتر الشروط',
          fr: 'CNIBE, acte de propriété ou permis de construire, et plan de situation/masse du local ou terrain à raccorder',
        },
      },
      {
        label: {
          ar: 'ملف التعويض عن أضرار اضطرابات الشبكة',
          fr: 'Déclaration de sinistre réseau électrique',
        },
        value: {
          ar: 'التبليغ خلال الآجال التنظيمية عبر الوكالة أو منصة الانشغالات مرفقا بوصف الأضرار وفاتورة الإصلاح أو الخبرة عند الاقتضاء',
          fr: 'Déclaration dans les délais réglementaires auprès de l’agence ou sur la plateforme requêtes avec justificatifs de dommages',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أربط رقم التعريف الوطني NIN بفاتورة سونلغاز في E-Taqaty؟',
          fr: 'Comment enregistrer son NIN sur la plateforme E-Taqaty de Sonelgaz ?',
        },
        answer: {
          ar: 'ادخل إلى رابط التسجيل e-taqaty.sonelgaz.dz/pages/application/collecteNin.xhtml، أدخل مرجع عدادك، ثم رقم التعريف الوطني المكون من 18 رقما ورقم هاتفك لتأكيد العملية.',
          fr: 'Ouvrez la page collecteNin.xhtml sur e-taqaty.sonelgaz.dz, saisissez la référence de votre compteur puis votre NIN à 18 chiffres et votre téléphone.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا لم أستلم الفاتورة الورقية أو خشيت من فواتير تقديرية عالية؟',
          fr: 'Comment éviter les factures estimées ou consulter une facture non reçue ?',
        },
        answer: {
          ar: 'يمكنك تصفح فاتورتك فورا على consulter-factures.elit.dz كما يمكنك إرسال قراءة عدادك الحقيقية بنفسك عبر استمارة الرفع الآلي على موقع سونلغاز للتوزيع.',
          fr: 'Consultez votre duplicata sur consulter-factures.elit.dz et transmettez votre index réel via le formulaire d’auto-relève en ligne.',
        },
      },
      {
        question: {
          ar: 'هل يمكن متابعة طلب توصيل الكهرباء والغاز المنزلي دون زيارة الوكالة؟',
          fr: 'Peut-on déposer et suivre une demande de raccordement sans se déplacer ?',
        },
        answer: {
          ar: 'نعم، تتيح بوابة E-Taqaty تقديم طلب الربط ورفع الوثائق إلكترونيا ثم تتبع حالة الطلب وصدور الكشف المالي خطوة بخطوة عبر رقم الطلب.',
          fr: 'Oui, E-Taqaty permet le dépôt numérique du dossier, la vérification des pièces et le suivi en ligne de l’avancement jusqu’à la pose du compteur.',
        },
      },
      {
        question: {
          ar: 'ما هو الرقم المجاني للتبليغ عن انقطاع الكهرباء أو تسرب الغاز ليلا؟',
          fr: 'Quel numéro d’urgence contacter en cas de coupure ou fuite de gaz ?',
        },
        answer: {
          ar: 'يعمل مركز الاتصال الوطني لسونلغاز على الرقم 3303 على مدار 24 ساعة وطوال أيام الأسبوع لتلقي بلاغات الأعطال والطوارئ وتوجيه فرق الصيانة.',
          fr: 'Le centre d’appels national Sonelgaz 3303 est joignable 24h/24 et 7j/7 pour toute urgence électrique ou gazière.',
        },
      },
    ],
  },

  // 64. t-onec
  {
    id: 't-onec',
    slug: 't-onec',
    category: 'education_higher',
    name: {
      ar: 'بنك الفروض والاختبارات والمواضيع المحلولة (T-ONEC)',
      fr: 'Banque de Devoirs, Examens & Annales Corrigées (T-ONEC)',
    },
    acronym: 'T-ONEC',
    ministry: {
      ar: 'بوابة الموارد التعليمية الجزائرية',
      fr: 'Portail des Ressources Pédagogiques Algérie',
    },
    description: {
      ar: 'البوابة التعليمية الجزائرية الأولى لجمع نماذج الفروض والاختبارات الفصلية مع التصحيح النموذجي لجميع الأطوار الدراسية: التحضيري والسنوات الخمس للتعليم الابتدائي، السنوات الأربع للتعليم المتوسط ومواضيع شهادة التعليم المتوسط BEM، والسنوات الثلاث للتعليم الثانوي ومواضيع وحلول شهادة البكالوريا.',
      fr: 'Banque pédagogique algérienne de référence regroupant devoirs, compositions trimestrielles et annales avec corrigés types pour tous les cycles : Préparatoire et Primaire (1re à 5e AP), Moyen (1re à 4e AM et annales BEM) ainsi que Secondaire (1re à 3e AS et sujets corrigés du Baccalauréat).',
    },
    officialUrl: 'https://www.t-onec.com/p/preparatory-education.html',
    portalUrl: 'https://www.t-onec.com/p/baccalaureate-subjects.html',
    iconName: 'BookOpen',
    isPopular: false,
    services: [
      {
        id: 't-onec-srv-1',
        title: {
          ar: 'نماذج التعليم التحضيري (أوراق عمل وأنشطة)',
          fr: 'Éducation Préparatoire — Exercices & Fiches',
        },
        description: {
          ar: 'أنشطة تمهيدية وتدريبات في القراءة والكتابة والحساب موجهة لأقسام التعليم التحضيري.',
          fr: 'Activités d’éveil, graphisme et calcul destinées aux classes préparatoires.',
        },
        url: 'https://www.t-onec.com/p/preparatory-education.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-2',
        title: {
          ar: 'نماذج اختبارات السنة الأولى ابتدائي',
          fr: 'Compositions 1re Année Primaire (1AP)',
        },
        description: {
          ar: 'بنك اختبارات الفصول الثلاثة في اللغة العربية والرياضيات والتربية الإسلامية والمدنية للسنة الأولى ابتدائي.',
          fr: 'Sujets trimestriels et exercices d’entraînement avec solutions pour la 1re année primaire.',
        },
        url: 'https://www.t-onec.com/p/first-primary.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-3',
        title: {
          ar: 'نماذج اختبارات السنة الثانية ابتدائي',
          fr: 'Compositions 2e Année Primaire (2AP)',
        },
        description: {
          ar: 'مجموعة اختبارات فصلية ومراجعات محلولة لتلاميذ السنة الثانية من التعليم الابتدائي.',
          fr: 'Banque d’évaluations trimestrielles et fiches de révision pour la 2e année primaire.',
        },
        url: 'https://www.t-onec.com/p/second-primary.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-4',
        title: {
          ar: 'نماذج اختبارات السنة الثالثة ابتدائي',
          fr: 'Compositions 3e Année Primaire (3AP)',
        },
        description: {
          ar: 'اختبارات محلولة في كافة المواد بما فيها اللغة الفرنسية والإنجليزية للسنة الثالثة ابتدائي.',
          fr: 'Devoirs et compositions corrigés incluant français et anglais pour la 3e année primaire.',
        },
        url: 'https://www.t-onec.com/p/third-grade-primary.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-5',
        title: {
          ar: 'نماذج اختبارات السنة الرابعة ابتدائي',
          fr: 'Compositions 4e Année Primaire (4AP)',
        },
        description: {
          ar: 'فروض واختبارات شاملة وفق المنهاج الدراسي للسنة الرابعة ابتدائي مع الحلول النموذجية.',
          fr: 'Sujets d’examens et corrigés conformes au programme officiel de 4e année primaire.',
        },
        url: 'https://www.t-onec.com/p/fourth-grade.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-6',
        title: {
          ar: 'نماذج اختبارات السنة الخامسة ابتدائي',
          fr: 'Compositions 5e Année Primaire (5AP)',
        },
        description: {
          ar: 'تمارين دعم ومواضيع اختبارات نهائية وتقييم المكتسبات لتلاميذ السنة الخامسة ابتدائي.',
          fr: 'Annales et sujets de préparation aux évaluations de fin de cycle primaire (5AP).',
        },
        url: 'https://www.t-onec.com/p/fifth-grade.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-7',
        title: {
          ar: 'بنك فروض واختبارات السنة الأولى متوسط',
          fr: 'Devoirs & Compositions 1re Année Moyenne (1AM)',
        },
        description: {
          ar: 'مئات النماذج المحلولة للفروض والاختبارات الفصلية لكافة مواد السنة الأولى متوسط.',
          fr: 'Collection complète de devoirs surveillés et compositions corrigés pour la 1re AM.',
        },
        url: 'https://www.t-onec.com/p/first-average.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-8',
        title: {
          ar: 'بنك فروض واختبارات السنة الثانية متوسط',
          fr: 'Devoirs & Compositions 2e Année Moyenne (2AM)',
        },
        description: {
          ar: 'فروض واختبارات مصنفة حسب المادة والفصل لتلاميذ السنة الثانية متوسط.',
          fr: 'Sujets classés par matière et trimestre avec barèmes pour la 2e année moyenne.',
        },
        url: 'https://www.t-onec.com/p/second-average.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-9',
        title: {
          ar: 'بنك فروض واختبارات السنة الثالثة متوسط',
          fr: 'Devoirs & Compositions 3e Année Moyenne (3AM)',
        },
        description: {
          ar: 'نماذج اختبارات محلولة في العلوم، الفيزياء، الرياضيات، اللغات، والاجتماعيات للسنة الثالثة متوسط.',
          fr: 'Banque d’épreuves corrigées couvrant l’ensemble des matières de 3e année moyenne.',
        },
        url: 'https://www.t-onec.com/p/third-average.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-10',
        title: {
          ar: 'بنك فروض واختبارات السنة الرابعة متوسط',
          fr: 'Devoirs & Compositions 4e Année Moyenne (4AM)',
        },
        description: {
          ar: 'اختبارات فصلية وبيام تجريبي مع الحلول النموذجية لتحضير امتحان التعليم المتوسط.',
          fr: 'Sujets trimestriels et examens blancs corrigés pour les élèves de 4e année moyenne.',
        },
        url: 'https://www.t-onec.com/p/fourth-average.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-11',
        title: {
          ar: 'مواضيع وحلول شهادة التعليم المتوسط (BEM)',
          fr: 'Annales & Corrigés Officiels du BEM',
        },
        description: {
          ar: 'أرشيف شامل لمواضيع امتحان شهادة التعليم المتوسط للدورات السابقة مع الحلول الوزارية المعتمدة.',
          fr: 'Archives complètes des sujets et corrigés types officiels du Brevet d’Enseignement Moyen.',
        },
        url: 'https://www.t-onec.com/p/subjects-4am.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-12',
        title: {
          ar: 'فروض واختبارات السنة الأولى ثانوي (علمي وأدبي)',
          fr: 'Devoirs & Compositions 1re Année Secondaire (1AS)',
        },
        description: {
          ar: 'نماذج الفروض والاختبارات الفصلية لجذعي العلوم والتكنولوجيا والآداب للسنة الأولى ثانوي.',
          fr: 'Épreuves trimestrielles corrigées pour les troncs communs Sciences et Lettres (1AS).',
        },
        url: 'https://www.t-onec.com/p/first-year-1-secondary.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-13',
        title: {
          ar: 'فروض واختبارات السنة الثانية ثانوي (جميع الشعب)',
          fr: 'Devoirs & Compositions 2e Année Secondaire (2AS)',
        },
        description: {
          ar: 'بنك مواضيع وملخصات السنة الثانية ثانوي لجميع الشعب العلمية، التقنية، التسيير، واللغات والآداب.',
          fr: 'Devoirs et compositions avec solutions pour toutes les filières de 2e année secondaire.',
        },
        url: 'https://www.t-onec.com/p/second-year-2-secondary.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-14',
        title: {
          ar: 'فروض واختبارات السنة الثالثة ثانوي (التحضير للبكالوريا)',
          fr: 'Devoirs & Compositions 3e Année Secondaire (3AS)',
        },
        description: {
          ar: 'اختبارات فصلية وبكالوريا تجريبية محلولة لجميع الشعب تحضيرا للامتحان النهائي.',
          fr: 'Banque d’examens blancs et sujets trimestriels corrigés pour les classes de Terminale.',
        },
        url: 'https://www.t-onec.com/p/third-year-3-secondary.html',
        isOnline: true,
      },
      {
        id: 't-onec-srv-15',
        title: {
          ar: 'مواضيع وحلول شهادة البكالوريا (جميع الشعب)',
          fr: 'Annales & Corrigés du Baccalauréat (Toutes Filières)',
        },
        description: {
          ar: 'حوليات شهادة البكالوريا الرسمية لجميع السنوات والشعب (علوم تجريبية، رياضيات، تقني رياضي، تسيير، آداب ولغات) مع سلم التنقيط.',
          fr: 'Archive complète des sujets officiels et barèmes de correction du Baccalauréat algérien par filière.',
        },
        url: 'https://www.t-onec.com/p/baccalaureate-subjects.html',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'تلاميذ الأطوار الثلاثة (ابتدائي، متوسط، ثانوي)، المترشحون الأحرار لامتحاني BEM وBAC، الأولياء، والأساتذة',
        fr: 'Élèves des trois cycles (primaire, moyen, secondaire), candidats libres BEM/BAC, parents et enseignants',
      },
      processingTime: {
        ar: 'تصفح وتحميل فوري ومباشر للنماذج والحلول بصيغة PDF أو صور على مدار الساعة',
        fr: 'Consultation et téléchargement immédiats des sujets et corrigés 24h/24 sans inscription préalable',
      },
      fees: {
        ar: 'الوصول إلى جميع المواضيع، الحوليات، والتصحيحات النموذجية مجاني ومفتوح للجميع بدون رسوم',
        fr: 'Accès intégralement gratuit à l’ensemble des devoirs, compositions et annales corrigées',
      },
      channel: {
        ar: 'الموقع التعليمي t-onec.com مصنف حسب الطور الدراسي والمستوى والمادة والفصل',
        fr: 'Portail web t-onec.com organisé par cycle, année scolaire, matière et trimestre',
      },
      keyRequirement: {
        ar: 'تحديد الطور والمستوى الدراسي والشعبة فقط لتحميل الموضوع ومقارنة الحل مع التصحيح النموذجي',
        fr: 'Sélectionner simplement le niveau, la filière et la matière pour télécharger les sujets et corrigés',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تحديد الطور والمستوى الدراسي',
          fr: 'Choix du cycle et de l’année scolaire',
        },
        value: {
          ar: 'اختيار المرحلة المناسبة (تحضيري، 1 إلى 5 ابتدائي، 1 إلى 4 متوسط، أو 1 إلى 3 ثانوي)',
          fr: 'Sélectionner le niveau exact (préparatoire, 1re à 5e AP, 1re à 4e AM ou 1re à 3e AS)',
        },
      },
      {
        label: {
          ar: 'تحديد الشعبة لمرحلة الثانوي والبكالوريا',
          fr: 'Sélection de la filière au secondaire',
        },
        value: {
          ar: 'اختيار الشعبة الصحيحة (علوم تجريبية، رياضيات، تقني رياضي، تسيير واقتصاد، آداب وفلسفة، أو لغات أجنبية)',
          fr: 'Préciser la filière (Sciences Expérimentales, Maths, Technique Math, Gestion, Lettres ou Langues Étrangères)',
        },
      },
      {
        label: {
          ar: 'استعمال قارئ ملفات PDF للتحميل والطباعة',
          fr: 'Lecteur PDF pour impression et révision',
        },
        value: {
          ar: 'توفر متصفح حديث أو قارئ PDF على الهاتف أو الحاسوب لحفظ المواضيع والحلول والمراجعة دون اتصال',
          fr: 'Navigateur ou lecteur PDF standard pour enregistrer et imprimer les sujets en vue de réviser hors ligne',
        },
      },
      {
        label: {
          ar: 'الالتزام بمنهجية الحل قبل قراءة التصحيح',
          fr: 'Méthodologie d’entraînement autonome',
        },
        value: {
          ar: 'إنجاز التمرين أو الموضوع في الوقت القانوني للاختبار قبل فتح ملف التصحيح النموذجي لتقييم المستوى بدقة',
          fr: 'Traiter le sujet en temps réel avant de consulter le corrigé type et le barème afin d’évaluer ses acquis',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تتوفر جميع الفروض والاختبارات في T-ONEC مع التصحيح النموذجي؟',
          fr: 'Les devoirs et compositions sur T-ONEC sont-ils accompagnés de corrigés ?',
        },
        answer: {
          ar: 'نعم، ترفق أغلبية النماذج بالإضافة إلى حوليات شهادتي البكالوريا والتعليم المتوسط بالتصحيح النموذجي وسلم التنقيط لمساعدة التلميذ على المراجعة الذاتية.',
          fr: 'Oui, la grande majorité des sujets trimestriels ainsi que toutes les annales officielles du BEM et du BAC incluent leur corrigé type détaillé.',
        },
      },
      {
        question: {
          ar: 'هل يتطلب التحميل من بنك الفروض T-ONEC إنشاء حساب أو دفع اشتراك؟',
          fr: 'Faut-il créer un compte ou payer un abonnement pour télécharger les sujets ?',
        },
        answer: {
          ar: 'لا، المنصة مفتوحة ومجانية بالكامل لجميع التلاميذ والأولياء والأساتذة ولا تتطلب تسجيل حساب أو رسوم تحميل.',
          fr: 'Non, l’accès aux ressources pédagogiques de T-ONEC est entièrement libre et gratuit sans inscription ni frais.',
        },
      },
      {
        question: {
          ar: 'هل تشمل المنصة مواضيع السنوات السابقة الرسمية للبكالوريا والبيام؟',
          fr: 'Peut-on y trouver les archives officielles des sessions précédentes du BAC et du BEM ?',
        },
        answer: {
          ar: 'نعم، يضم الموقع قسمين مخصصين لأرشيف مواضيع وحلول شهادة التعليم المتوسط BEM ومواضيع وحلول البكالوريا لمختلف الدورات والشعب.',
          fr: 'Oui, deux rubriques dédiées regroupent les archives complètes des examens nationaux officiels du BEM et du Baccalauréat par session et filière.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين موقع T-ONEC ومواقع الديوان الوطني للامتحانات ONEC؟',
          fr: 'Quelle différence entre T-ONEC et les portails officiels de l’ONEC ?',
        },
        answer: {
          ar: 'موقع T-ONEC هو بنك تعليمي للتدريب والمراجعة بالاختبارات والحلول، بينما تختص مواقع onec.dz (bac.onec.dz وbem.onec.dz) بالتسجيل الإداري الرسمي وسحب الاستدعاءات وإعلان النتائج.',
          fr: 'T-ONEC est une bibliothèque pédagogique de révision et d’annales, alors que bac.onec.dz et bem.onec.dz sont les portails officiels d’inscription, de convocations et de résultats.',
        },
      },
    ],
  },
];

export const batch8Guides: Record<string, RichGuideContent> = {
  'progres.mesrs': {
    intro: {
      ar: [
        'يمثل نظام المعلومات المدمج «بروغرس PROGRES» العمود الفقري لرقمنة الجامعة الجزائرية تحت إشراف وزارة التعليم العالي والبحث العلمي، إذ يوحد المسار التسجيلي والبيداغوجي والخدماتي للطالب منذ لحظة نجاحه في البكالوريا إلى غاية التخرج والدراسات العليا.',
        'ينطلق المسار الرقمي من التسجيل الأولي عبر orientation-esi.dz وتحديد الاختيارات بمساعدة منصتي DZ-Orientation وBAC MESRS، ثم تأكيد الدفع الإلكتروني لحقوق التسجيل والإيواء بالبطاقة الذهبية عبر بوابتي الدفع لبروغرس. وخلال السنة الجامعية، يتيح فضاء الطالب WebEtu، بوابة الخدمات الجامعية WebOnou، وبوابة المنح Eminha تقديم طلبات الإقامة، التحويلات، وتجديد المنح عن بعد، بالتكامل مع تطبيقي WebEtu وMYBUS للنقل الجامعي.',
        'نضع في هذا الدليل العملي خلاصة شاملة لكافة بوابات PROGRES، الوثائق المطلوبة لكل مرحلة، خطوات الدفع السليم للحقوق الجامعية، وأنجع الحلول للمشكلات الشائعة في تطبيق الهاتف ومنصات التحويل.'
      ],
      fr: [
        'Le système d’information intégré PROGRES constitue le cœur de la transformation numérique universitaire en Algérie sous l’égide du MESRS. Il centralise l’ensemble du parcours étudiant, depuis la préinscription des nouveaux bacheliers jusqu’au suivi des diplômes et certifications (CNC).',
        'L’écosystème englobe l’orientation sur orientation-esi.dz et DZ-Orientation, le règlement dématérialisé des droits d’inscription et d’hébergement par carte Edahabia, les demandes de résidence sur WebOnou, les transferts universitaires sur WebEtu et le renouvellement des bourses sur Eminha, complétés par les applications mobiles WebEtu et MYBUS.',
        'Ce guide pratique détaille la configuration d’accès, la composition des dossiers numériques et les solutions face aux blocages techniques durant les campagnes universitaires.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'النجاح في شهادة البكالوريا وتوفر رقم التسجيل والرقم السري المدون في كشف النقاط للتسجيل الأولي.',
        'امتلاك بطاقة ذهبية مفعلة لاستقبال رمز التحقق SMS من أجل دفع حقوق التسجيل (200 دج) والإيواء (400 دج).',
        'توفر رقم حساب بريدي جاري CCP باسم الطالب حصرا عند تقديم ملف المنحة الجامعية عبر Eminha.',
        'إثبات الإقامة البعيدة عن المؤسسة الجامعية عند طلب الإيواء في الإقامات الجامعية عبر WebOnou.',
      ],
      fr: [
        'Être titulaire du Baccalauréat avec le matricule et le code confidentiel du relevé de notes pour la préinscription.',
        'Disposer d’une carte Edahabia habilitée au paiement en ligne avec OTP actif pour acquitter les droits d’inscription et d’hébergement.',
        'Détenir un compte CCP ouvert au nom propre de l’étudiant pour le versement de la bourse universitaire via Eminha.',
        'Justifier de l’éloignement géographique réglementaire pour bénéficier d’une chambre sur WebOnou.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'إجراء التسجيل الأولي واختيار التخصص الجامعي',
          fr: 'Effectuer la préinscription et choisir son orientation',
        },
        detail: {
          ar: 'استعمل منصتي DZ-Orientation وorientation-esi.dz لترتيب رغباتك ثم تأكيد التخصص الممنوح في الآجال المعلنة.',
          fr: 'Explorez les filières sur DZ-Orientation puis saisissez et confirmez vos choix sur orientation-esi.dz selon le calendrier.',
        },
      },
      {
        title: {
          ar: 'دفع حقوق التسجيل والإيواء بالبطاقة الذهبية',
          fr: 'Régler les droits d’inscription et d’hébergement en ligne',
        },
        detail: {
          ar: 'ادخل إلى بوابات الدفع الإلكتروني لبروغرس وسدد حقوق التسجيل والإيواء وطبع وصل الدفع فورا.',
          fr: 'Connectez-vous aux modules epaiementI et epaiementH sur progres.mesrs.dz pour régler par carte Edahabia et obtenir votre reçu.',
        },
      },
      {
        title: {
          ar: 'طلب الإيواء، المنحة، أو التحويل عبر بروغرس',
          fr: 'Soumettre les demandes d’hébergement, bourse ou transfert',
        },
        detail: {
          ar: 'ارفع وثائق الدخل والإقامة عبر منصتي WebOnou وEminha أو قدم طلب التحويل في WebEtu دون ملف ورقي.',
          fr: 'Utilisez WebOnou pour la résidence, Eminha pour la bourse et WebEtu pour les transferts pédagogiques.',
        },
      },
      {
        title: {
          ar: 'متابعة المسار والبطاقة الرقمية عبر تطبيقات WebEtu وMYBUS',
          fr: 'Utiliser les applications mobiles WebEtu et MYBUS',
        },
        detail: {
          ar: 'حمل تطبيق WebEtu للاطلاع على النقاط والجداول وتطبيق MYBUS لمتابعة النقل والحافلات الجامعية.',
          fr: 'Suivez vos résultats et cartes numériques sur WebEtu et gérez vos déplacements campus sur MYBUS.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'فشل عملية الدفع الإلكتروني في بروغرس مع ظهور خطأ في البطاقة الذهبية',
          fr: 'Échec du paiement Edahabia sur les portails PROGRES',
        },
        solution: {
          ar: 'تحقق من تفعيل خدمة SMS OTP على البطاقة الذهبية وعدم ضغط زر التأكيد مرتين؛ وفي حال خصم المبلغ دون تأكيد التسجيل انتظر 24 ساعة للتحديث التلقائي.',
          fr: 'Vérifiez la réception du code OTP, évitez les doubles clics lors de la validation et patientez 24 h en cas de synchronisation bancaire différée.',
        },
      },
      {
        issue: {
          ar: 'رفض ملف المنحة الجامعية بسبب عدم تطابق رقم CCP',
          fr: 'Blocage du dossier de bourse Eminha lié au compte CCP',
        },
        solution: {
          ar: 'يجب أن يكون الحساب البريدي الجاري CCP مفتوحا باسم الطالب نفسه مع كتابة رقم الحساب دون المفتاح أو حسب التنسيق المطلوب في الحقل المحدد.',
          fr: 'Le compte CCP doit obligatoirement être au nom de l’étudiant ; vérifiez le format de saisie sans erreur de clé.',
        },
      },
      {
        issue: {
          ar: 'تعذر الدخول إلى تطبيق WebEtu بسبب تغيير كلمة المرور أو نسيانها',
          fr: 'Mot de passe WebEtu oublié ou compte bloqué',
        },
        solution: {
          ar: 'راجع خلية الإعلام الآلي أو مصلحة السكولاريتي في كليتك لإعادة تعيين كلمة المرور المرتبطة بسنة البكالوريا ورقم التسجيل.',
          fr: 'Adressez-vous au service scolarité ou à la cellule numérique de votre faculté pour réinitialiser votre accès PROGRES.',
        },
      },
    ],
    extraFaqs: [],
  },

  qassimatouka: {
    intro: {
      ar: [
        'تعد منصة «قسيمتك Qassimatouka» التي أطلقتها المديرية العامة للضرائب تحولا كبيرا في خدمة اقتناء قسيمة السيارات بالجزائر، إذ أنهت الطوابير الموسمية أمام مكاتب البريد وقباضات الضرائب عبر إتاحة الشراء الإلكتروني السريع طوال اليوم.',
        'من خلال واجهة بسيطة وآمنة، يتم إدخال معلومات البطاقة الرمادية وتحديد التسعيرة تلقائيا ثم الدفع بالبطاقة الذهبية أو البطاقة البنكية CIB، ليحصل صاحب المركبة على قسيمة رقمية بصيغة PDF مزودة برمز QR مشفر للمصادقة. كما تتيح المنصة إعادة تحميل القسيمة في حال الضياع والتحقق الفوري من صحتها عبر فضاء التوثيق والمصادقة.',
        'يوضح هذا الدليل خطوات الشراء الناجح عبر قسيمتك، القواعد القانونية المتعلقة بعدم إلصاق القسيمة الرقمية على الزجاج، وكيفية استرجاع الوثيقة أو تصحيح أخطاء الإدخال.'
      ],
      fr: [
        'Développée par la Direction Générale des Impôts (DGI), la plateforme Qassimatouka modernise l’acquisition annuelle de la vignette automobile en Algérie en supprimant les files d’attente dans les recettes des impôts et bureaux de poste.',
        'En quelques étapes, le propriétaire saisit les données de sa carte grise, vérifie le tarif calculé automatiquement et règle par carte Edahabia ou CIB pour obtenir sa e-vignette PDF dotée d’un QR code officiel d’authentification. Le portail intègre également un module de réédition en cas de perte et un outil de vérification publique.',
        'Ce guide pratique détaille le parcours d’achat sur Qassimatouka, les règles d’exemption de collage sur le pare-brise et les démarches d’assistance en cas d’erreur.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'امتلاك بطاقة رمادية سارية المفعول للمركبة تحمل رقم الترقيم والقوة الجبائية بالحصان وسنة أول وضع للسير.',
        'توفر بطاقة دفع إلكترونية (الذهبية أو CIB) برصيد كاف ومفعلة بخدمة التأكيد عبر SMS OTP.',
        'شراء القسيمة ضمن الفترة القانونية للحملة السنوية لتفادي الغرامة الجزافية المطبقة بعد الآجال.',
        'الاحتفاظ بنسخة رقمية أو مطبوعة واضحة من القسيمة أثناء السياقة لتقديمها عند نقاط المراقبة.',
      ],
      fr: [
        'Disposer de la carte grise du véhicule précisant l’immatriculation, la puissance fiscale (CV) et l’année de mise en circulation.',
        'Détenir une carte Edahabia ou CIB approvisionnée avec validation SMS OTP active.',
        'Effectuer l’achat dans la période réglementaire de la campagne annuelle pour éviter toute pénalité de retard.',
        'Conserver le justificatif PDF imprimé ou sur smartphone lors de vos trajets.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'الدخول إلى منصة قسيمتك واختيار الشراء الإلكتروني',
          fr: 'Accéder au module d’achat Qassimatouka',
        },
        detail: {
          ar: 'افتح موقع qassimatouka.mf.gov.dz/acheter واختر لغة العرض المناسبة ثم ابدأ ملء البيانات.',
          fr: 'Rendez-vous sur qassimatouka.mf.gov.dz/acheter puis lancez le formulaire d’acquisition.',
        },
      },
      {
        title: {
          ar: 'إدخال بيانات البطاقة الرمادية بدقة',
          fr: 'Saisir les informations de la carte grise',
        },
        detail: {
          ar: 'أدخل رقم اللوحة الكامل، صنف المركبة، قوة المحرك (CV)، والسنة ليحتسب النظام السعر القانوني فورا.',
          fr: 'Renseignez l’immatriculation, la catégorie, la puissance fiscale et l’année afin d’afficher automatiquement le tarif dû.',
        },
      },
      {
        title: {
          ar: 'دفع المستحقات عبر البطاقة الذهبية أو CIB',
          fr: 'Valider le paiement par carte Edahabia ou CIB',
        },
        detail: {
          ar: 'أدخل بيانات بطاقتك البنكية أو البريدية ثم رمز التأكيد السري المرسل إلى هاتفك لإتمام المعاملة.',
          fr: 'Complétez vos coordonnées monétiques et confirmez avec le code SMS OTP reçu sur votre mobile.',
        },
      },
      {
        title: {
          ar: 'تحميل القسيمة الرقمية والتحقق منها',
          fr: 'Télécharger la e-vignette et vérifier son authenticité',
        },
        detail: {
          ar: 'احفظ ملف PDF فورا؛ ويمكنك إعادة طباعته من صفحة edit أو التحقق من صحته عبر صفحة autentifier.',
          fr: 'Enregistrez immédiatement le PDF généré ; les modules edit et autentifier permettent la réédition ou le contrôle en ligne.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'خصم المبلغ من الحساب دون ظهور زر تحميل القسيمة بسبب انقطاع الإنترنت',
          fr: 'Débit effectué mais coupure réseau avant téléchargement du PDF',
        },
        solution: {
          ar: 'انتقل مباشرة إلى صفحة الاسترجاع qassimatouka.mf.gov.dz/edit وأدخل رقم ترقيم السيارة ومعطيات العملية لاستخراج قسيمتك بنجاح.',
          fr: 'Accédez à qassimatouka.mf.gov.dz/edit et saisissez l’immatriculation du véhicule pour récupérer et imprimer votre vignette déjà réglée.',
        },
      },
      {
        issue: {
          ar: 'خطأ في رقم اللوحة أو القوة الجبائية بعد إتمام الدفع',
          fr: 'Erreur de saisie détectée sur la vignette après paiement',
        },
        solution: {
          ar: 'تواصل فورا عبر استمارة الدعم qassimatouka.mf.gov.dz/contact أو تقدم لقباضة الضرائب المختصة لتصحيح المعطيات.',
          fr: 'Utilisez sans délai le formulaire de contact qassimatouka.mf.gov.dz/contact ou présentez-vous à votre recette des impôts.',
        },
      },
      {
        issue: {
          ar: 'تعذر قراءة رمز QR أو عدم وضوح الطباعة الورقية',
          fr: 'QR code illisible sur la copie imprimée',
        },
        solution: {
          ar: 'أعد تحميل ملف PDF الأصلي بجودة عالية واطبعه على ورقة نظيفة مع الاحتفاظ بالملف الأصلي على هاتفك الذكي.',
          fr: 'Retéléchargez le PDF original et imprimez-le en haute qualité tout en gardant la version numérique sur votre smartphone.',
        },
      },
    ],
    extraFaqs: [],
  },

  sante: {
    intro: {
      ar: [
        'توفر وزارة الصحة الجزائرية ومنصات الصحة الرقمية المرتبطة بها جملة من الخدمات الإلكترونية الأساسية الموجهة للطلبة، المهنيين الطبيين، والمواطنين. وتشمل هذه الخدمات المنصة الوطنية لمعادلة الشهادات الطبية وشبه الطبية المحصل عليها بالخارج، وبوابة التسجيل في معاهد التكوين الشبه طبي.',
        'وعلى مستوى الرعاية التفاعلية والتضامن الصحي، يبرز دور العيادة الرقمية eTabib لتسهيل الاستشارة الطبية عن بعد، بالإضافة إلى تطبيقات مجتمعية ومهنية مهمة مثل دليل أطباء الجزائر، تطبيق الطبيب الجزائري، وتطبيق بنك الدم الجزائري لتنسيق التبرع التطوعي بالدم عبر المستشفيات.',
        'يستعرض هذا الدليل شروط وإجراءات إيداع ملف معادلة الشهادات الصحية، شروط الالتحاق بمسابقات الشبه طبي، وسبل الاستفادة المثلى من خدمات الطب الرقمي وبنك الدم.'
      ],
      fr: [
        'Le Ministère de la Santé et l’écosystème e-santé en Algérie mettent à disposition plusieurs téléservices clés destinés aux futurs professionnels de santé, aux diplômés de l’étranger ainsi qu’aux patients. Parmi eux figurent la plateforme nationale d’équivalence des diplômes médicaux et le portail des formations paramédicales.',
        'En parallèle, les citoyens bénéficient de solutions de santé connectée telles que la plateforme de téléconsultation eTabib, les annuaires médicaux mobiles et l’application solidaire Banque de Sang Algérie pour faciliter l’accès rapide aux donneurs compatibles.',
        'Ce guide rassemble les critères d’admissibilité aux concours paramédicaux, la composition complète d’un dossier d’équivalence de diplôme et les bonnes pratiques d’utilisation des plateformes de santé.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'للمعادلات الطبية: حيازة شهادة نهائية وكشوف نقاط رسمية مترجمة ومصدقة من الجامعة الأجنبية ووزارة الخارجية.',
        'للتكوين الشبه طبي: شهادة بكالوريا حديثة في الشعب العلمية المناسبة واستيفاء معدل القبول المعلن بالولاية.',
        'للتبرع بالدم عبر التطبيق: السن بين 18 و65 سنة والتمتع باللياقة الصحية وعدم وجود موانع طبية.',
        'للاستشارة الطبية عبر العيادة الرقمية: إنشاء حساب دقيق وتحديد التخصص الطبي المطلوب.',
      ],
      fr: [
        'Pour les équivalences : détenir un diplôme médical étranger original, relevés de notes et traduction officielle légalisée.',
        'Pour le paramédical : posséder un Baccalauréat scientifique compatible et répondre au seuil de wilaya.',
        'Pour le don de sang : avoir entre 18 et 65 ans et satisfaire aux critères médicaux de dépistage en centre hospitalier.',
        'Pour eTabib : disposer d’un compte patient et décrire clairement vos symptômes lors de la prise de rendez-vous.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'فتح حساب المترشح في منصة المعادلات أو التكوين',
          fr: 'Créer un compte sur le portail équivalence ou formation',
        },
        detail: {
          ar: 'ادخل إلى equivalence.sante.gov.dz لطلب المعادلة أو formation.sante.gov.dz عند فتح مسابقات الشبه طبي.',
          fr: 'Inscrivez-vous sur equivalence.sante.gov.dz pour les diplômes étrangers ou formation.sante.gov.dz pour les concours paramédicaux.',
        },
      },
      {
        title: {
          ar: 'مسح الوثائق الطبية والأكاديمية بدقة ورفعها',
          fr: 'Numériser et déposer les pièces justificatives',
        },
        detail: {
          ar: 'ارفع الشهادات المصدقة، كشوف النقاط، وجواز السفر أو كشف البكالوريا بصيغة PDF واضحة.',
          fr: 'Téléversez des fichiers PDF lisibles de vos diplômes, relevés de notes, traductions légales et pièces d’identité.',
        },
      },
      {
        title: {
          ar: 'متابعة دراسة الملف أو استدعاء المسابقة',
          fr: 'Suivre l’instruction ou retirer sa convocation',
        },
        detail: {
          ar: 'تفقد حسابك بانتظام لمعرفة قرار لجنة المعادلات أو تاريخ إجراء مسابقة الالتحاق بالمعهد الشبه طبي.',
          fr: 'Consultez régulièrement votre espace pour suivre l’avis de la commission ou télécharger votre convocation.',
        },
      },
      {
        title: {
          ar: 'الاستفادة من العيادة الرقمية وتطبيقات الصحة والدم',
          fr: 'Accéder à la téléconsultation et aux applications santé',
        },
        detail: {
          ar: 'استخدم etabib.dz للاستشارة عن بعد، وتطبيق بنك الدم الجزائري لتسجيل فصيلة دمك والمساعدة في الحالات المستعجلة.',
          fr: 'Utilisez etabib.dz pour joindre un praticien en ligne et l’application Banque de Sang pour l’entraide médicale.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض ملف معادلة الشهادة بسبب نقص في الترجمة أو التصديق القنصلي',
          fr: 'Dossier d’équivalence renvoyé pour défaut de légalisation ou traduction',
        },
        solution: {
          ar: 'تأكد من ختم الشهادات الأجنبية من القنصلية الجزائرية ببلد الدراسة ووزارة الخارجية، وإرفاق ترجمة رسمية مختومة لكل وثيقة بغير العربية أو الفرنسية.',
          fr: 'Faites viser les originaux par le consulat algérien du pays d’obtention et joignez une traduction assermentée pour toute langue étrangère.',
        },
      },
      {
        issue: {
          ar: 'صعوبة التسجيل في منصة الشبه طبي رغم الحصول على البكالوريا',
          fr: 'Blocage d’inscription au concours paramédical malgré le Baccalauréat',
        },
        solution: {
          ar: 'تحقق من أن شعبة البكالوريا مطابقة للتخصص المختار ومن فتح التسجيلات الرسمية في الولاية، واستعمل رقم التسجيل وسنة البكالوريا الصحيحين.',
          fr: 'Vérifiez la compatibilité de votre série BAC avec la filière demandée et assurez-vous que la session de votre wilaya est ouverte.',
        },
      },
      {
        issue: {
          ar: 'تأخر تأكيد موعد الاستشارة عن بعد عبر العيادة الرقمية',
          fr: 'Délai de confirmation sur la plateforme eTabib',
        },
        solution: {
          ar: 'في الحالات الطبية الطارئة لا تنتظر الاستشارة الرقمية وتوجه فورا إلى أقرب مصلحة استعجالات أو اتصل بأرقام الحماية المدنية 14 / 1021 أو الإسعاف.',
          fr: 'En cas d’urgence médicale aiguë, rendez-vous immédiatement aux urgences hospitalières ou appelez la Protection Civile (14 / 1021).',
        },
      },
    ],
    extraFaqs: [],
  },

  seaal: {
    intro: {
      ar: [
        'تتكفل شركة المياه والتطهير للجزائر العاصمة (SEAAL) بتسيير خدمة الماء الشروب والتطهير لفائدة ملايين السكان والهيئات في ولايتي الجزائر العاصمة وتيبازة. وقد طورت المؤسسة فضاء رقميا متكاملا تحت اسم «وكالتي Wakalati» لتسهيل إجراءات المشتركين دون عناء التنقل إلى الوكالات المحلية.',
        'تشمل باقة الخدمات الرقمية لشركة سيال تقديم طلبات الاشتراك الجديد وربط العدادات، متابعة الاستهلاك وإيداع الشكاوى في Wakalati، التسديد الآمن للفواتير عبر منصتي Fatourati وبريد نت، استكشاف البوابة الجغرافية لتوقيت توزيع المياه، واستخدام تطبيق SEAAL Mobile للتبليغ المصور عن التسربات بالإضافة إلى خط الطوارئ 1594.',
        'يوضح هذا الدليل كيفية تسديد الفواتير إلكترونيا، شروط فتح عقد اشتراك جديد عبر وكالتي، وأساليب استخدام الخريطة الجغرافية والتعامل مع أعطال العداد أو الفواتير المرتفعة.'
      ],
      fr: [
        'La Société des Eaux et de l’Assainissement d’Alger (SEAAL) assure la distribution d’eau potable et la gestion de l’assainissement pour les wilayas d’Alger et de Tipaza. Grâce à son guichet digital Wakalati et à son portail Fatourati, les abonnés gèrent l’essentiel de leurs démarches sans se déplacer en agence.',
        'Les téléservices couvrent les demandes d’abonnement neuf en ligne, le suivi des consommations, le paiement sécurisé des factures par carte Edahabia ou CIB (sur Fatourati et BaridiNet), la consultation du géoportail de distribution horaire par commune ainsi que l’application mobile SEAAL et la ligne d’urgence 1594.',
        'Ce guide pratique détaille la procédure de règlement électronique, les pièces exigées pour un nouveau raccordement Wakalati et la marche à suivre en cas d’anomalie de facturation ou de fuite.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'الإقامة أو ممارسة النشاط ضمن إقليم ولاية الجزائر العاصمة أو ولاية تيبازة الخاضع لـ SEAAL.',
        'توفر مرجع الزبون ورقم الفاتورة للدفع الإلكتروني عبر فاتورتي أو بريد نت.',
        'تجهيز بطاقة التعريف الوطنية ووثيقة ملكية أو إيجار لطلب اشتراك جديد في وكالتي.',
        'بطاقة دفع إلكترونية (الذهبية أو CIB) مفعلة لاستقبال رمز التأكيد SMS عند السداد عن بعد.',
      ],
      fr: [
        'Résider ou exercer dans les wilayas d’Alger ou de Tipaza desservies par la SEAAL.',
        'Disposer de son code abonné et numéro de facture pour régler en ligne sur Fatourati ou BaridiNet.',
        'Présenter la CNIBE et un titre de propriété ou bail pour demander un nouvel abonnement sur Wakalati.',
        'Détenir une carte Edahabia ou CIB activée avec OTP par SMS pour le paiement électronique.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'فتح حساب في الوكالة الرقمية أو الدخول لبوابة الدفع',
          fr: 'Ouvrir Wakalati ou accéder à Fatourati SEAAL',
        },
        detail: {
          ar: 'استعمل wakalati.seaal.dz لإدارة العقد وطلب اشتراك جديد، أو fatourati.seaal.dz لدفع الفاتورة مباشرة.',
          fr: 'Utilisez wakalati.seaal.dz pour gérer votre contrat ou demander un branchement, et fatourati.seaal.dz pour payer.',
        },
      },
      {
        title: {
          ar: 'إدخال رقم الزبون والفاتورة ومعاينة الاستحقاق',
          fr: 'Saisir les références de la facture à régler',
        },
        detail: {
          ar: 'أدخل رمز الزبون ورقم الفاتورة بدقة للتحقق من الفترة المفوترة والمبلغ المستحق دفعه.',
          fr: 'Renseignez le code client et le numéro de facture pour afficher le montant exact à acquitter.',
        },
      },
      {
        title: {
          ar: 'تأكيد الدفع بالبطاقة الذهبية أو CIB وطبع الوصل',
          fr: 'Régler par Edahabia ou CIB et télécharger le reçu',
        },
        detail: {
          ar: 'اختر الدفع عبر فاتورتي أو بريد نت وأتمم المعاملة برمز OTP ثم احفظ وصل السداد PDF.',
          fr: 'Validez votre transaction avec le code OTP reçu par SMS puis archivez votre quittance PDF.',
        },
      },
      {
        title: {
          ar: 'مراقبة التوزيع والتبليغ عن التسربات عبر التطبيق أو 1594',
          fr: 'Suivre la distribution et signaler les fuites (App / 1594)',
        },
        detail: {
          ar: 'استشر البوابة الجغرافية لمعرفة ساعات التزويد وبلغ عن أي تسرب مائي عبر تطبيق SEAAL أو الرقم 1594.',
          fr: 'Consultez le géoportail SEAAL pour les horaires d’eau et signalez tout incident via l’application mobile ou le 1594.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'ارتفاع مفاجئ في فاتورة سيال مقارنة بالفصول السابقة',
          fr: 'Hausse inhabituelle de la facture d’eau SEAAL',
        },
        solution: {
          ar: 'راقب العداد عند إغلاق كافة الحنفيات للتحقق من عدم وجود تسرب داخلي، وارسل قراءة العداد وصورة واضحة له عبر وكالتي أو تطبيق SEAAL لمراجعة الفوترة.',
          fr: 'Vérifiez l’absence de fuite après compteur (robinets fermés), puis transmettez votre relevé photographié via Wakalati ou l’app SEAAL pour révision.',
        },
      },
      {
        issue: {
          ar: 'رفض الدفع على بوابة fatourati.seaal.dz',
          fr: 'Erreur de transaction sur Fatourati SEAAL',
        },
        solution: {
          ar: 'تأكد من صحة كتابة رمز الزبون دون فراغات، وجرب المسار البديل للدفع عبر بريد نت baridinet.poste.dz/seaal بالبطاقة الذهبية.',
          fr: 'Vérifiez la saisie exacte du numéro de facture sans espaces ou utilisez la passerelle alternative baridinet.poste.dz/seaal.',
        },
      },
      {
        issue: {
          ar: 'تأخر استجابة طلب ربط جديد في وكالتي',
          fr: 'Délai de traitement d’une demande de nouvel abonnement Wakalati',
        },
        solution: {
          ar: 'تحقق من إرفاق جميع الوثائق المطلوبة بوضوح في الحساب ومن تلقي بريد تأكيد الدراسة الميدانية، أو تواصل عبر seaal.dz/contact-ar.',
          fr: 'Assurez-vous que toutes les pièces PDF sont lisibles dans Wakalati et contactez le support via seaal.dz/contact-ar en précisant votre numéro de dossier.',
        },
      },
    ],
    extraFaqs: [],
  },

  seor: {
    intro: {
      ar: [
        'تتولى شركة المياه والتطهير لوهران (SEOR) مهمة إنتاج وتوزيع الماء الشروب وتسيير شبكة التطهير عبر كافة بلديات ولاية وهران. وسعيا لتقريب الإدارة من المواطن الوهراني، وفرت المؤسسة بوابة رقمية شاملة تسمح بدفع الفواتير ومحاكاة الاستهلاك دون الحاجة للوقوف في شبابيك الوكالات.',
        'من خلال فضاء الزبائن على موقع SEOR وتطبيق الهاتف SeorMob، يتمكن المشترك من استعراض فواتيره السابقة والحالية، استخدام أداة المحاكاة لحساب كلفة الاستهلاك وفق شرائح التسعير، استرجاع أو إنشاء كلمة مرور الحساب إلكترونيا، وسداد المستحقات بالبطاقة الذهبية أو CIB بكل أمان.',
        'يجمع هذا الدليل تفاصيل خدمات سيور لوهران، خطوات تفعيل كلمة مرور فضاء الزبون والدفع عن بعد، وكيفية معالجة الإشكالات التقنية والتجارية عبر التطبيق والموقع.'
      ],
      fr: [
        'La Société de l’Eau et de l’Assainissement d’Oran (SEOR) gère l’alimentation en eau potable et l’assainissement à travers l’ensemble des communes de la wilaya d’Oran. Son portail client et son application SeorMob facilitent la gestion quotidienne des abonnements à distance.',
        'Les usagers peuvent consulter leur historique de facturation, simuler le montant de leur consommation directement à partir de l’index du compteur, activer ou réinitialiser leur mot de passe d’accès en ligne et régler leurs factures par carte Edahabia ou CIB.',
        'Ce guide pratique explique comment accéder à votre espace abonné SEOR, estimer votre facture d’eau et signaler rapidement tout dysfonctionnement technique ou commercial.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'الانتماء إلى مشتركي شبكة الماء الشروب التابعة لمؤسسة SEOR في ولاية وهران.',
        'معرفة رقم الزبون ومرجع الفاتورة المسجلين على فاتورة الماء الورقية.',
        'توفر بطاقة دفع إلكترونية صالحة (الذهبية أو CIB) مفعلة برمز التحقق SMS.',
        'تثبيت تطبيق SeorMob على الهاتف الذكي لمتابعة الإشعارات والتبليغ عن التسربات.',
      ],
      fr: [
        'Être abonné au réseau d’eau potable géré par la SEOR dans la wilaya d’Oran.',
        'Connaître son code client et sa référence de facture inscrits sur l’avis papier.',
        'Détenir une carte Edahabia ou CIB activée avec réception des codes SMS OTP.',
        'Disposer de l’application SeorMob pour recevoir les alertes réseau et déclarer les fuites.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'تفعيل حساب الزبون والحصول على كلمة المرور',
          fr: 'Activer ou récupérer l’accès à votre espace client SEOR',
        },
        detail: {
          ar: 'افتح رابط المصادقة auth.php على موقع seor.dz للحصول على كلمة المرور الأولى أو استرجاعها باستخدام رقم العقد.',
          fr: 'Rendez-vous sur le module auth.php de seor.dz afin d’obtenir ou de réinitialiser votre mot de passe client.',
        },
      },
      {
        title: {
          ar: 'معاينة الفاتورة أو إجراء محاكاة للاستهلاك',
          fr: 'Consulter la facture ou simuler sa consommation',
        },
        detail: {
          ar: 'ادخل إلى صفحة الاستعلام والمحاكاة لمراجعة فواتيرك السابقة أو إدخال قراءة العداد لتقدير الفاتورة المقبلة.',
          fr: 'Utilisez la page consultation sur seor.dz pour afficher les factures impayées ou estimer le coût d’après votre index.',
        },
      },
      {
        title: {
          ar: 'دفع فاتورة SEOR عبر الإنترنت',
          fr: 'Régler sa facture d’eau en ligne',
        },
        detail: {
          ar: 'انتقل إلى بوابة e-paiement، أدخل مراجع الفاتورة، وسدد المبلغ بالبطاقة الذهبية أو CIB واحتفظ بالوصل.',
          fr: 'Accédez au guichet e-paiement, saisissez votre référence et validez la transaction par carte Edahabia ou CIB.',
        },
      },
      {
        title: {
          ar: 'استخدام تطبيق SeorMob وبوابة الشكاوى',
          fr: 'Utiliser l’app SeorMob et contacter le service client',
        },
        detail: {
          ar: 'حمل تطبيق SeorMob لمتابعة خدمات المياه أو استخدم صفحة seor.dz/contact لرفع أي شكوى تخص العداد أو التوزيع.',
          fr: 'Téléchargez SeorMob pour suivre les actualités réseau ou transmettez vos demandes via seor.dz/contact.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض تسجيل الدخول في بوابة الاستعلام رغم إدخال رقم الزبون',
          fr: 'Échec de connexion à l’espace consultation SEOR',
        },
        solution: {
          ar: 'تأكد من تفعيل الحساب مسبقا عبر رابط auth.php أو مراجعة الوكالة التجارية التابعة لك بوهران لتحديث رقم الهاتف والبريد في ملف المشترك.',
          fr: 'Passez par la procédure d’activation auth.php ou vérifiez auprès de votre agence commerciale à Oran que votre numéro de mobile est bien enregistré.',
        },
      },
      {
        issue: {
          ar: 'اختلاف تقدير محاكي الفاتورة عن المبلغ النهائي للفاتورة',
          fr: 'Écart entre la simulation en ligne et le montant réel facturé',
        },
        solution: {
          ar: 'يحسب المحاكي كلفة استهلاك الماء الصافي بالدرجة الأولى، بينما قد تضاف على الفاتورة النهائية رسوم التطهير، الاشتراكات الثابتة، وضريبة القيمة المضافة.',
          fr: 'La simulation estime principalement la part consommation ; la facture finale inclut également les redevances d’assainissement, frais fixes et TVA.',
        },
      },
      {
        issue: {
          ar: 'انقطاع أو ضعف ضغط المياه في أحد أحياء وهران',
          fr: 'Coupure ou baisse de pression dans un quartier d’Oran',
        },
        solution: {
          ar: 'تفقد إشعارات الصيانة عبر تطبيق SeorMob وموقع seor.dz، وبلغ عن الحالة عبر صفحة التواصل لتوجيه فرق الصيانة.',
          fr: 'Consultez les avis d’intervention dans l’app SeorMob ou sur seor.dz et signalez la situation via la rubrique contact.',
        },
      },
    ],
    extraFaqs: [],
  },

  'sonalgaz-bill-guide': {
    intro: {
      ar: [
        'تعد فاتورة الكهرباء والغاز لسونلغاز وثيقة مالية وتقنية تتضمن عدة خانات ورموز قد تبدو معقدة للمستهلك عند قراءتها لأول مرة. واستنادا إلى الدليل التوعوي الرسمي للجنة ضبط الكهرباء والغاز (CREG)، يتيح هذا الدليل التفاعلي تفكيك كل قسم من أقسام الفاتورة وشرحه بأسلوب مبسط وواضح.',
        'من أهم العناصر التي ينبغي لكل مشترك فهمها: التمييز بين المؤشر القديم والمؤشر الجديد للعداد، فهم معامل التحويل الحراري للغاز الطبيعي (PCS) الذي يحول الحجم المستهلك بالمتر المكعب إلى طاقة مفوترة بالوحدة الحرارية، ومعرفة دلالات رموز القراءة الثلاثة (R للقراءة الفعلية، E للتقديرية، وM للقراءة الاستثنائية).',
        'علاوة على الحاسبة التفاعلية المدمجة أعلى هذه الصفحة لتقدير استهلاكك، يقدم هذا الدليل شرحا دقيقا لكيفية حساب الشرائح التصاعدية، الرسوم الثابتة والضرائب، والخطوات العملية للتحقق من صحة الفاتورة وتسديدها إلكترونيا عبر بوابة ELIT.'
      ],
      fr: [
        'La facture trimestrielle d’électricité et de gaz Sonelgaz regroupe de nombreuses données techniques et financières qui suscitent souvent des interrogations chez les ménages. Conçu sur la base du guide officiel de la Commission de Régulation de l’Électricité et du Gaz (CREG), ce guide interactif décrypte chaque rubrique avec clarté.',
        'Pour maîtriser votre consommation, il est essentiel de vérifier la différence entre l’ancien et le nouvel index, de comprendre le rôle du coefficient thermique (PCS) appliqué au gaz naturel, et d’identifier les codes d’origine du relevé : R (relevé réel), E (relevé estimé) et M (relevé particulier).',
        'En complément du calculateur interactif et du schéma visuel affichés ci-dessus, ce guide détaille la structure des tranches tarifaires progressives, les redevances fixes et taxes légales, ainsi que les démarches en cas d’anomalie ou d’estimation excessive.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر الفاتورة الأخيرة لسونلغاز للتحقق من المؤشر القديم المسجل ورقم العداد ومرجع الدفع.',
        'الوصول إلى عداد الكهرباء وعداد الغاز لقراءة الأرقام الصحيحة الظاهرة قبل الفاصلة العشرية.',
        'معرفة رمز مصدر القراءة المطبوع بجانب المؤشر (R، E، أو M) لتفسير ارتفاع أو انخفاض الفاتورة.',
        'بطاقة ذهبية أو بنكية CIB في حال الرغبة في الدفع الإلكتروني المباشر بعد مراجعة الفاتورة.',
      ],
      fr: [
        'Disposer de votre dernière facture Sonelgaz afin de vérifier l’ancien index, le numéro de compteur et la référence.',
        'Accéder à vos compteurs d’électricité et de gaz pour lire les chiffres entiers avant la virgule.',
        'Repérer le code de lecture imprimé (R, E ou M) afin de comprendre l’évolution du montant facturé.',
        'Posséder une carte Edahabia ou CIB pour régler en ligne après vérification.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'مطابقة بيانات الزبون ورقم العداد',
          fr: 'Vérifier les coordonnées client et le numéro de compteur',
        },
        detail: {
          ar: 'راجع رقم العداد، عنوان الاستهلاك، وفترة الفوترة وتأكد من تطابق الأرقام الأربعة الأخيرة مع عدادك.',
          fr: 'Contrôlez la référence du point de consommation, la période facturée et les derniers chiffres du compteur.',
        },
      },
      {
        title: {
          ar: 'حساب الاستهلاك بالاعتماد على المؤشرين والمعامل',
          fr: 'Calculer l’énergie consommée (Index et Coefficient)',
        },
        detail: {
          ar: 'اطرح المؤشر القديم من الجديد واضربه في المعامل (1 للكهرباء ومعامل PCS للغاز) باستخدام الحاسبة التفاعلية.',
          fr: 'Soustrayez l’ancien index du nouveau et multipliez par le coefficient (1 pour l’électricité, PCS pour le gaz) via le calculateur.',
        },
      },
      {
        title: {
          ar: 'فحص رمز القراءة ومكونات السعر النهائي',
          fr: 'Identifier le code R/E/M et les taxes applicables',
        },
        detail: {
          ar: 'تحقق من أن القراءة فعلية R وليست مقدرة E، ثم راجع الشرائح، الرسوم الثابتة، والضرائب المضافة.',
          fr: 'Vérifiez si l’index est réel (R) ou estimé (E) et inspectez les tranches tarifaires, frais fixes et TVA.',
        },
      },
      {
        title: {
          ar: 'الاستعلام والتسديد الإلكتروني أو تقديم مراجعة',
          fr: 'Consulter, payer sur ELIT ou demander une révision',
        },
        detail: {
          ar: 'استعمل روابط ELIT المباشرة للاستعلام والدفع، أو التقط صورة لعدادك وارسل الرفع الآلي عند وجود تقدير غير دقيق.',
          fr: 'Utilisez les liens officiels ELIT pour payer votre facture ou transmettez votre index réel en cas d’estimation inexacte.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'اختلاف الناتج في الحاسبة عن المبلغ الإجمالي المكتوب في أسفل الفاتورة',
          fr: 'Différence entre le résultat du calculateur et le total à payer en dinars',
        },
        solution: {
          ar: 'تحسب الحاسبة كمية الطاقة المستهلكة (kWh أو Thermie) فقط للتحقق من المؤشرات، بينما يطبق نظام سونلغاز الشرائح التصاعدية المتعددة والرسوم الثابتة والضرائب لاحتساب المبلغ المالي.',
          fr: 'Le calculateur vérifie uniquement la quantité d’énergie (kWh ou Th) ; le montant financier dépend ensuite du découpage par tranches progressives, des taxes et frais fixes.',
        },
      },
      {
        issue: {
          ar: 'تسجيل استهلاك في الفاتورة رغم غياب العائلة عن المنزل طوال الفترة',
          fr: 'Facture positive malgré un logement inoccupé durant le trimestre',
        },
        solution: {
          ar: 'تأكد من وجود الرمز E (فاتورة تقديرية) ومن قيمة الرسوم الثابتة للاشتراك؛ إذ تستحق رسوم الاشتراك حتى عند استهلاك صفر كيلوواط، بينما يصحح التقدير بإرسال القراءة الفعلية.',
          fr: 'Vérifiez si le code E (estimation) figure sur la facture et tenez compte des redevances fixes d’abonnement qui restent dues même à consommation nulle.',
        },
      },
      {
        issue: {
          ar: 'صعوبة تحديد الأرقام المطلوبة في عداد الكهرباء الرقمي الحديث',
          fr: 'Difficulté à lire les chiffres sur un compteur numérique moderne',
        },
        solution: {
          ar: 'تجاهل الأرقام الموجودة بعد الفاصلة أو داخل الإطار الأحمر، وسجل فقط الأرقام الصحيحة الموافقة لرمز الاستهلاك الإجمالي.',
          fr: 'Ne retenez que les chiffres entiers situés avant la virgule (en ignorant les décimales ou chiffres encadrés en rouge).',
        },
      },
    ],
    extraFaqs: [],
  },

  sonalgaz: {
    intro: {
      ar: [
        'يقود مجمع سونلغاز (Sonelgaz) جهود الرقمنة الطاقوية في الجزائر لربط ملايين المشتركين بالخدمات عن بعد وتقليص الاعتماد على المعاملات الورقية. من خلال بوابة فواتير ELIT ومنصة E-Taqaty، أصبح بإمكان الزبون تصفح فواتيره الثلاثية، سدادها إلكترونيا، تسجيل رقمه التعريفي الوطني، وإرسال القراءة الحقيقية لعداده بيسر تام.',
        'كما تمثل منصة E-Taqaty بوابة مهنية ومواطنية متكاملة لإجراءات التوصيل الجديد بشبكتي الكهرباء والغاز: التعرف على ملف الربط المطلوب، إيداع طلب التوصيل عن بعد، الاستعلام عن حالة الطلب، وتتبع مراحل الإنجاز حتى تركيب العداد، إلى جانب الاطلاع على التسعيرات والتبليغ الفوري عن الأعطال والانقطاعات.',
        'يوفر هذا الدليل مرجعا متكاملا لكافة روابط سونلغاز وE-Taqaty، الوثائق القانونية لطلب الربط بالشبكة، وأنجع الخطوات لحل إشكالات التسجيل أو المطالبة بالتعويض عن أضرار الشبكة.'
      ],
      fr: [
        'Le Groupe Sonelgaz pilote la modernisation des services de l’électricité et du gaz en Algérie à travers deux pôles numériques majeurs : les passerelles ELIT dédiées à la consultation et au paiement des factures, et le portail multiservices E-Taqaty.',
        'Sur E-Taqaty, les citoyens et entreprises peuvent enregistrer leur Numéro d’Identification National (NIN), vérifier la liste des pièces requises pour un raccordement, déposer une demande de branchement neuf en ligne, suivre son instruction étape par étape, consulter les grilles tarifaires officielles et signaler les incidents réseau en appui au numéro national 3303.',
        'Ce guide pratique récapitule l’ensemble des téléservices Sonelgaz, les documents exigés pour chaque démarche et les solutions face aux blocages techniques les plus fréquents.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر مرجع الفاتورة (12 رقما) ومفتاح التحقق للاستعلام والسداد عبر بوابات ELIT.',
        'رقم التعريف الوطني البيومتري (18 رقما) للتسجيل في فضاء E-Taqaty وربط العداد بهوية المشترك.',
        'سند الملكية أو عقد الإيجار أو رخصة البناء عند إيداع طلب ربط جديد بالكهرباء أو الغاز.',
        'بطاقة دفع ذهبية أو بنكية CIB برصيد كاف وخدمة OTP مفعلة للدفع عبر الإنترنت.',
      ],
      fr: [
        'Connaître la référence à 12 chiffres et la clé de la facture pour consulter et payer sur ELIT.',
        'Disposer du NIN biométrique à 18 chiffres pour s’enregistrer et accéder à l’espace E-Taqaty.',
        'Fournir un titre de propriété, bail légal ou permis de construire lors d’une demande de raccordement neuf.',
        'Détenir une carte Edahabia ou CIB active avec code OTP pour les règlements en ligne.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'الاستعلام عن الفاتورة وسدادها أو رفع قراءة العداد',
          fr: 'Consulter, payer la facture ou transmettre l’auto-relève',
        },
        detail: {
          ar: 'استعمل consulter-factures.elit.dz لمعاينة الفاتورة وepayement.elit.dz للدفع، أو أرسل قراءة العداد عبر الرفع الآلي.',
          fr: 'Utilisez les portails ELIT pour visualiser et régler votre facture, ou le module d’auto-relève pour saisir votre index.',
        },
      },
      {
        title: {
          ar: 'تسجيل رقم التعريف الوطني وفتح حساب E-Taqaty',
          fr: 'Associer votre NIN et activer E-Taqaty',
        },
        detail: {
          ar: 'ادخل إلى صفحة collecteNin.xhtml لربط عقدك برقمك الوطني ثم سجل الدخول إلى فضاء الزبائن.',
          fr: 'Rendez-vous sur collecteNin.xhtml pour enregistrer votre NIN puis connectez-vous à votre espace E-Taqaty.',
        },
      },
      {
        title: {
          ar: 'تقديم وتتبع طلب الربط بالكهرباء والغاز',
          fr: 'Déposer et suivre un dossier de raccordement (RCN)',
        },
        detail: {
          ar: 'راجع قائمة الوثائق عبر dossierRcn، ثم أودع طلب التوصيل وتابعه عبر روابط المتابعة المخصصة في E-Taqaty.',
          fr: 'Consultez les pièces exigées dans dossierRcn, soumettez votre demande en ligne et suivez son avancement jusqu’à la pose.',
        },
      },
      {
        title: {
          ar: 'التبليغ عن الأعطال والانشغالات الطارئة',
          fr: 'Signaler une panne réseau ou déposer une requête',
        },
        detail: {
          ar: 'أرسل بلاغ العطل عبر نموذج signalement في E-Taqaty أو اتصل فورا بالرقم الوطني 3303 على مدار الساعة.',
          fr: 'Signalez tout incident sur le portail signalement E-Taqaty ou appelez immédiatement le 3303 disponible 24h/24.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'ظهور خطأ «مرجع غير موجود» عند محاولة دفع الفاتورة في ELIT',
          fr: 'Message « Référence introuvable » sur la passerelle ELIT',
        },
        solution: {
          ar: 'تأكد من نقل المرجع المكون من 12 رقما والمفتاح من آخر فاتورة صادرة دون مسافات أو أخطاء في الصفر الأول، وتأكد من عدم دفع الفاتورة مسبقا.',
          fr: 'Recopiez exactement les 12 chiffres et la clé depuis la dernière facture émise sans espaces ni oubli des zéros initiaux.',
        },
      },
      {
        issue: {
          ar: 'تأخر معالجة طلب ربط الكهرباء أو الغاز في E-Taqaty',
          fr: 'Délai prolongé sur une demande de raccordement E-Taqaty',
        },
        solution: {
          ar: 'استعمل رابط consulterEtatDmdHespacClient للتحقق من وجود ملاحظة نقص في الوثائق التقنية أو صدور كشف الدفع المالي لدى الوكالة.',
          fr: 'Vérifiez via consulterEtatDmdHespacClient si un complément de dossier est attendu ou si le devis financier est prêt à être réglé.',
        },
      },
      {
        issue: {
          ar: 'تعرض أجهزة منزلية للتلف بسبب تذبذب أو عودة مفاجئة للتيار الكهربائي',
          fr: 'Dommages d’appareils suite à une surtension du réseau électrique',
        },
        solution: {
          ar: 'أبلغ فورا عبر منصة الانشغالات sonelgaz.dz/ar#requetes أو الوكالة التجارية ضمن المهلة القانونية لتسجيل المعاينة التقنية وملف التعويض.',
          fr: 'Déclarez le sinistre sans délai via sonelgaz.dz/ar#requetes ou à votre agence afin d’ouvrir un dossier d’expertise et d’indemnisation.',
        },
      },
    ],
    extraFaqs: [],
  },

  't-onec': {
    intro: {
      ar: [
        'يعد موقع T-ONEC من أبرز المنصات التعليمية الجزائرية المتخصصة في توفير بنك شامل ومنظم للفروض والاختبارات الفصلية والنماذج المحلولة للتلاميذ في جميع المستويات الدراسية، بدءا من الطور التحضيري والابتدائي، مرورا بالتعليم المتوسط، ووصولا إلى المرحلة الثانوية وامتحان البكالوريا.',
        'تتميز المنصة بتصنيف دقيق للمحتوى حسب السنة والمادة والفصل الدراسي مع إرفاق الحلول النموذجية وسلالم التنقيط، لا سيما في أقسام الأرشيف المخصصة لمواضيع وحلول شهادة التعليم المتوسط BEM وشهادة البكالوريا لجميع الشعب العلمية والأدبية والتقنية.',
        'يستعرض هذا الدليل طريقة الاستغلال التربوي الأمثل لبنك الفروض T-ONEC خلال فترات المراجعة والامتحانات، والفارق بينه وبين البوابات الإدارية الرسمية للديوان الوطني للامتحانات والمسابقات ONEC.'
      ],
      fr: [
        'T-ONEC est une plateforme pédagogique algérienne très consultée par les élèves, parents et enseignants pour préparer les devoirs surveillés, compositions trimestrielles et examens nationaux. Elle rassemble des milliers de sujets classés pour chaque niveau, du préparatoire jusqu’à la Terminale.',
        'Le portail met particulièrement l’accent sur les épreuves officielles avec corrigés types et barèmes détaillés dans ses archives consacrées au Brevet d’Enseignement Moyen (BEM) et au Baccalauréat toutes filières confondues (sciences expérimentales, mathématiques, technique mathématique, gestion et lettres).',
        'Ce guide pratique aide les apprenants à tirer le meilleur parti des ressources de T-ONEC et rappelle la distinction avec les sites administratifs officiels de l’ONEC.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'مفتوح لجميع التلاميذ في التعليم النظامي والتعليم عن بعد (ONEFD) والمترشحين الأحرار.',
        'معرفة السنة الدراسية والشعبة بدقة قبل تصفح وتنزيل المواضيع الملائمة للمنهاج.',
        'توفر اتصال عادي بالإنترنت وقارئ ملفات PDF للطباعة أو المراجعة عبر الهاتف والحاسوب.',
        'الجمع بين المراجعة عبر بنك الفروض ومتابعة الدروس الرسمية المقررة من وزارة التربية الوطنية.',
      ],
      fr: [
        'Accessible librement aux élèves scolarisés, apprenants à distance (ONEFD) et candidats libres.',
        'Connaître son niveau scolaire et sa filière exacte afin de sélectionner les épreuves conformes au programme.',
        'Disposer d’un navigateur web ou lecteur PDF pour imprimer et archiver les sujets.',
        'Compléter l’entraînement par les cours officiels et manuels du Ministère de l’Éducation Nationale.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'اختيار الطور والمستوى الدراسي من القائمة',
          fr: 'Sélectionner votre cycle et niveau scolaire',
        },
        detail: {
          ar: 'انقر على رابط سنتك الدراسية (من التحضيري والابتدائي إلى المتوسط والثانوي) أو صفحة حوليات BEM والبكالوريا.',
          fr: 'Accédez à la rubrique correspondant à votre classe (1AP à 5AP, 1AM à 4AM, 1AS à 3AS) ou aux archives BEM/BAC.',
        },
      },
      {
        title: {
          ar: 'تحديد المادة الدراسية والفصل المطلوب',
          fr: 'Choisir la matière et le trimestre',
        },
        detail: {
          ar: 'تصفح المواضيع المصنفة حسب المادة (رياضيات، فيزياء، علوم، لغة عربية، لغات) وحمل نماذج الفروض والاختبارات.',
          fr: 'Parcourez les devoirs et compositions classés par discipline et trimestre scolaire.',
        },
      },
      {
        title: {
          ar: 'حل الموضوع في ظروف الامتحان الحقيقية',
          fr: 'Traiter le sujet en conditions réelles d’examen',
        },
        detail: {
          ar: 'خصص المدة الزمنية المحددة للامتحان وأجب على كافة التمارين قبل الاطلاع على ملف الحل النموذجي.',
          fr: 'Respectez la durée réglementaire de l’épreuve pour rédiger vos réponses avant d’ouvrir le corrigé.',
        },
      },
      {
        title: {
          ar: 'مراجعة الأخطاء وفق التصحيح النموذجي وسلالم التنقيط',
          fr: 'Analyser ses erreurs grâce au barème de correction',
        },
        detail: {
          ar: 'قارن إجابتك بالتصحيح المرفق لتحديد نقاط الضعف والتركيز على المفاهيم المتكررة في امتحانات BEM وBAC.',
          fr: 'Comparez votre copie au corrigé officiel afin d’identifier les notions à renforcer pour l’examen final.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم فتح بعض ملفات المواضيع أو ظهور صفحة غير متوفرة',
          fr: 'Lien de fichier ou sujet temporairement indisponible',
        },
        solution: {
          ar: 'تحقق من تثبيت تطبيق قارئ PDF محدث في هاتفك، أو اختر نموذجا بديلا من نفس المادة والفصل المدرج ضمن نفس الصفحة.',
          fr: 'Assurez-vous de disposer d’un lecteur PDF à jour ou sélectionnez un autre sujet équivalent de la même matière sur la page.',
        },
      },
      {
        issue: {
          ar: 'وجود اختلافات طفيفة في بعض التمارين القديمة مقارنة بالمنهاج الحالي',
          fr: 'Décalage d’un ancien sujet d’archive par rapport au programme récent',
        },
        solution: {
          ar: 'أعط الأولوية لمواضيع السنوات الأخيرة المحينة، واستشر أستاذ المادة للتأكد من الدروس المحذوفة أو المعدلة.',
          fr: 'Privilégiez les sessions et compositions les plus récentes et vérifiez avec vos enseignants les éventuels allègements du programme.',
        },
      },
      {
        issue: {
          ar: 'الخلط بين موقع T-ONEC وموقع سحب استدعاء البكالوريا ONEC',
          fr: 'Confusion entre le site d’annales T-ONEC et le portail officiel ONEC',
        },
        solution: {
          ar: 'تذكر أن الاستدعاءات والنتائج الرسمية تسحب حصرا من بوابتي bac.onec.dz وbem.onec.dz وليس من مواقع التحضير والدروس.',
          fr: 'Les inscriptions officielles, convocations et résultats se gèrent exclusivement sur bac.onec.dz et bem.onec.dz.',
        },
      },
    ],
    extraFaqs: [],
  },
};
