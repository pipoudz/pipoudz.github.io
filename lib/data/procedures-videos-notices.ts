import {
  ProcedureItem,
  VideoItem,
  NoticeItem,
  ExternalPortalService,
} from '../types';

export const homeExternalServices: ExternalPortalService[] = [
  {
    id: 'mafqoudz',
    title: {
      ar: 'مفقودات الجزائر (Mafqoudz)',
      fr: 'Objets Trouvés & Perdus (Mafqoudz)',
    },
    summary: {
      ar: 'منصة وطنية للمساعدة في الإبلاغ عن الوثائق والمقتنيات الضائعة واسترجاع المفقودات لأصحابها بأمان.',
      fr: 'Plateforme citoyenne pour déclarer les documents et objets perdus et faciliter leur restitution en toute sécurité.',
    },
    officialUrl: 'https://mafqoudz.com/',
    tag: { ar: 'خدمة مجتمعية', fr: 'Service Citoyen' },
  },
  {
    id: 'dzorientation',
    title: {
      ar: 'منصة التوجيه الجامعي DZ-Orientation',
      fr: 'Orientation Universitaire DZ-Orientation',
    },
    summary: {
      ar: 'أداة ذكية لمرافقة حاملي شهادة البكالوريا في اختيار التخصصات الجامعية المناسبة حسب المعدل الموزون والشعبة.',
      fr: 'Outil d\'aide aux bacheliers pour découvrir et choisir les filières universitaires adaptées à leur moyenne.',
    },
    officialUrl: 'https://dzorientation.com',
    tag: { ar: 'التعليم العالي', fr: 'Supérieur' },
  },
  {
    id: 'joradp',
    title: {
      ar: 'الجريدة الرسمية للجمهورية الجزائرية (JORADP)',
      fr: 'Journal Officiel (JORADP)',
    },
    summary: {
      ar: 'الأرشيف الرسمي الكامل للقوانين، المراسيم الرئاسية والتنفيذية، القرارات الوزارية، والاتفاقيات.',
      fr: 'Archive officielle complète des lois, décrets présidentiels et exécutifs, arrêtés ministériels et textes réglementaires.',
    },
    officialUrl: 'https://www.joradp.dz/HAR/Index.htm',
    tag: { ar: 'تشريع وقانون', fr: 'Législation' },
  },
  {
    id: 'sgbv',
    title: {
      ar: 'بورصة الجزائر (SGBV)',
      fr: 'Bourse d\'Alger (SGBV)',
    },
    summary: {
      ar: 'متابعة أسعار الأسهم، السندات، وحجم التداولات والبيانات المالية الرسمية في السوق المالي الجزائري.',
      fr: 'Suivi officiel des cours des actions, obligations et volumes de transactions sur le marché financier algérien.',
    },
    officialUrl: 'https://www.sgbv.dz/ar/index.php',
    tag: { ar: 'الأسواق المالية', fr: 'Marché Financier' },
  },
  {
    id: 'infy-majors',
    title: {
      ar: 'محرك البحث عن التخصصات الجامعية (+6000 تخصص)',
      fr: 'Explorateur des Filières Universitaires (+6 000 spécialités)',
    },
    summary: {
      ar: 'قاعدة بيانات تفاعلية تضم أكثر من 6000 مسار وتخصص جامعي لجميع الشعب العلمية والأدبية والتقنية في الجزائر.',
      fr: 'Base de données interactive regroupant plus de 6 000 parcours universitaires pour toutes les séries du Baccalauréat.',
    },
    officialUrl: 'https://infy-majors-app-nexkg.ondigitalocean.app/',
    tag: { ar: 'البكالوريا والتوجيه', fr: 'Orientation Bac' },
  },
  {
    id: 'dz-portal-apk',
    title: {
      ar: 'تطبيق البوابة الجزائرية للأندرويد (DZ-Portal)',
      fr: 'Application Mobile Android (DZ-Portal)',
    },
    summary: {
      ar: 'الوصول السريع إلى كافة المنصات الحكومية، المصالح الرقمية، والأدوات التفاعلية عبر نسخة أندرويد الرسمية.',
      fr: 'Accès rapide aux plateformes publiques, démarches administratives et outils depuis l\'application mobile Android.',
    },
    officialUrl: 'https://drive.google.com/file/d/1HQDKbb2AKFmDCPdGGErDFE6lGpGSqzF9/view?usp=sharing',
    tag: { ar: 'تطبيق الهاتف', fr: 'App Mobile' },
  },
  {
    id: 'portal-feedback',
    title: {
      ar: 'استمارة تقييم الزوار واقتراح التحسينات',
      fr: 'Évaluation du Portail & Suggestions',
    },
    summary: {
      ar: 'شارك برأيك ومقترحاتك لتحسين جودة الروابط والمحتوى الرقمي وإضافة منصات خدمية جديدة.',
      fr: 'Partagez votre avis pour améliorer le portail et suggérer l\'ajout de nouveaux services publics numériques.',
    },
    officialUrl: 'https://forms.gle/yfMJqhsD3XDn9NaJ7',
    tag: { ar: 'تفاعل', fr: 'Avis Usagers' },
  },
];

export const contactPortalLinks = {
  contactFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeRxLhcUfyQChDG5-uI_Xz9AbFDfGqBzqk8Z0ZQ4Tym-iUynA/viewform',
  ratingFormUrl: 'https://forms.gle/yfMJqhsD3XDn9NaJ7',
  email: 'tabaniimadeddine@gmail.com',
  apkDriveUrl: 'https://drive.google.com/file/d/1HQDKbb2AKFmDCPdGGErDFE6lGpGSqzF9/view?usp=sharing',
};

export const proceduresList: ProcedureItem[] = [
  {
    id: 'proc-apostille',
    slug: 'apostille',
    title: {
      ar: 'التصديق الإلكتروني على الوثائق بالأبوستيل (Apostille DZ)',
      fr: 'Légalisation Électronique Apostille (Apostille DZ)',
    },
    sectorId: 'hcn',
    responsibleEntity: {
      ar: 'المحافظة السامية للرقمنة ووزارة الشؤون الخارجية',
      fr: 'Haut-Commissariat à la Numérisation & MAE',
    },
    description: {
      ar: 'إجراء رقمي موحد يتيح تصديق الوثائق الإدارية والقضائية والشهادات الجامعية الموجهة للاستعمال بالخارج عبر المنصة الوطنية للأبوستيل دون الحاجة إلى التنقل.',
      fr: 'Téléprocédure officielle permettant de certifier par Apostille les actes administratifs, judiciaires et diplômes destinés à l\'étranger sans déplacement.',
    },
    officialLink: 'https://apostille.hcn.dz/',
    estimatedDuration: { ar: 'فوري إلى 48 ساعة عمل', fr: 'Instantané à 48h ouvrables' },
    cost: { ar: 'طابع جبائي إلكتروني حسب نوع الوثيقة', fr: 'Timbre fiscal électronique selon l\'acte' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'ولوج المنصة الوطنية للأبوستيل', fr: 'Accéder à la plateforme Apostille' },
        detail: {
          ar: 'فتح الموقع الرسمي apostille.hcn.dz وإنشاء حساب شخصي عبر رقم التعريف الوطني NIN.',
          fr: 'Ouvrir apostille.hcn.dz et créer un espace personnel avec le numéro d\'identification national (NIN).',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'رفع الوثيقة وتحديد بلد الوجهة', fr: 'Téléverser le document et choisir le pays' },
        detail: {
          ar: 'اختيار نوع الوثيقة ورفع نسخة رقمية واضحة بصيغة PDF وتحديد الدولة المستقبلة الموقعة على اتفاقية لاهاي.',
          fr: 'Sélectionner la catégorie d\'acte, joindre le scan PDF et désigner le pays destinataire signataire de la Convention de La Haye.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'الدفع الإلكتروني وتحميل الختم الموثق', fr: 'Paiement en ligne et téléchargement du certificat' },
        detail: {
          ar: 'تسديد الرسم بالبطاقة الذهبية أو CIB وتحميل شهادة الأبوستيل المرفقة برمز الاستجابة السريعة QR.',
          fr: 'Régler les frais via Edahabia ou CIB et télécharger le certificat Apostille muni d\'un QR Code de vérification.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'بطاقة التعريف الوطنية البيومترية (NIN)', fr: 'Carte Nationale d\'Identité Biométrique (NIN)' }, isMandatory: true },
      { name: { ar: 'الوثيقة الأصلية ممسوحة ضوئيا (PDF)', fr: 'Document original numérisé (PDF haute qualité)' }, isMandatory: true },
      { name: { ar: 'بطاقة الدفع الذهبية أو CIB لتسديد الطابع', fr: 'Carte Edahabia ou CIB pour le timbre fiscal' }, isMandatory: false },
    ],
    faqs: [
      {
        question: { ar: 'ما هي الوثائق المعنية بالتصديق عبر منصة الأبوستيل؟', fr: 'Quels documents sont éligibles à l\'e-Apostille ?' },
        answer: {
          ar: 'تشمل عقود الحالة المدنية، السوابق القضائية، الشهادات الجامعية والمدرسية، والوكالات التوثيقية الموجهة لدول اتفاقية لاهاي.',
          fr: 'Actes d\'état civil, casier judiciaire, diplômes universitaires et actes notariés destinés aux États membres de la Convention de La Haye.',
        },
      },
      {
        question: { ar: 'كيف تتحقق الجهة الأجنبية من صحة الشهادة؟', fr: 'Comment l\'organisme étranger vérifie-t-il l\'authenticité ?' },
        answer: {
          ar: 'يتضمن كل تصديق رمز QR ورقم تحقق فريد يتيح المطابقة الفورية عبر السجل الإلكتروني الرسمي.',
          fr: 'Chaque certificat dispose d\'un QR Code et d\'un identifiant unique consultable en ligne sur le registre public officiel.',
        },
      },
    ],
  },
  {
    id: 'proc-e-declaration',
    slug: 'e-declaration',
    title: {
      ar: 'التصريح الإلكتروني بضياع الوثائق لدى الشرطة (DGSN)',
      fr: 'E-Déclaration de Perte de Documents (DGSN)',
    },
    sectorId: 'dgsn',
    responsibleEntity: {
      ar: 'المديرية العامة للأمن الوطني (DGSN)',
      fr: 'Direction Générale de la Sûreté Nationale (DGSN)',
    },
    description: {
      ar: 'خدمة إلكترونية من المديرية العامة للأمن الوطني تتيح للمواطنين التصريح الفوري بضياع بطاقة التعريف أو جواز السفر أو رخصة السياقة عبر الإنترنت وتحميل وصل التصريح مباشرة.',
      fr: 'Téléservice officiel de la DGSN permettant de déclarer en ligne la perte de vos pièces officielles et d\'éditer l\'attestation sans vous déplacer immédiatement au commissariat.',
    },
    officialLink: 'https://www.dgsn.dz/e-declaration/',
    estimatedDuration: { ar: 'فوري (24/7)', fr: 'Immédiat (24h/24 et 7j/7)' },
    cost: { ar: 'مجاني بالكامل', fr: '100% Gratuit' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'تحديد الولاية وأقرب مركز شرطة', fr: 'Choisir la wilaya et le commissariat' },
        detail: {
          ar: 'الدخول إلى منصة e-declaration واختيار الولاية ومقر الأمن الحضري أو الدائرة المختصة.',
          fr: 'Accéder à la plateforme e-declaration et sélectionner votre wilaya ainsi que la sûreté territoriale compétente.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'تحديد نوع الوثيقة الضائعة وتاريخ الفقدان', fr: 'Renseigner le document perdu et les circonstances' },
        detail: {
          ar: 'إدخال رقم الوثيقة إن توفر، مع تاريخ ومكان الضياع التقريبي والبيانات الشخصية الدقيقة.',
          fr: 'Indiquer le type de pièce, son numéro si connu, la date et le lieu approximatif de la perte.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'حفظ وصل التصريح ومباشرة التجديد', fr: 'Télécharger le récépissé officiel' },
        detail: {
          ar: 'طباعة وصل التصريح الصادر أو الاحتفاظ برقمه لمتابعة إجراءات استخراج البديل لدى البلدية أو المركز.',
          fr: 'Imprimer le récépissé généré afin d\'engager le renouvellement du document auprès de l\'APC ou du service concerné.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'رقم التعريف الوطني NIN وتاريخ الميلاد', fr: 'Numéro d\'Identification National (NIN)' }, isMandatory: true },
      { name: { ar: 'رقم الوثيقة المفقودة (إن توفر)', fr: 'Numéro du document perdu (si disponible)' }, isMandatory: false },
    ],
    faqs: [
      {
        question: { ar: 'هل يغني الوصل الإلكتروني عن التوجه إلى مقر الأمن في حالات السرقة؟', fr: 'Le formulaire s\'applique-t-il en cas de vol ?' },
        answer: {
          ar: 'البوابة مخصصة للتصريح بالضياع؛ أما حالات السرقة المؤكدة فتستدعي الحضور الشخصي لتحرير محضر رسمي بمقر الشرطة.',
          fr: 'Ce téléservice concerne uniquement la perte. En cas de vol, un dépôt de plainte en personne au commissariat est obligatoire.',
        },
      },
    ],
  },
  {
    id: 'proc-idlaa',
    slug: 'idlaa',
    title: {
      ar: 'خدمة الإدلاء بشهادة أو تبليغ عن بعد (الأمن الوطني)',
      fr: 'Témoignage & Signalement en Ligne (DGSN)',
    },
    sectorId: 'dgsn',
    responsibleEntity: {
      ar: 'المديرية العامة للأمن الوطني (DGSN)',
      fr: 'Direction Générale de la Sûreté Nationale (DGSN)',
    },
    description: {
      ar: 'فضاء رقمي مؤمن توفره الشرطة الجزائرية لتمكين المواطنين والشهود من الإدلاء بمعلومات أو التبليغ عن الحوادث والوقائع الأمنية عن بعد بسرية تامة.',
      fr: 'Plateforme sécurisée mise en place par la Sûreté Nationale permettant aux citoyens et témoins de transmettre des témoignages ou signalements en toute confidentialité.',
    },
    officialLink: 'https://www.dgsn.dz/?-%D8%A5%D8%AF%D9%84%D8%A7%D8%A1-%D8%A8%D8%B4%D9%87%D8%A7%D8%AF%D8%A9,583-',
    estimatedDuration: { ar: 'معالجة فورية وسرية', fr: 'Traitement confidentiel immédiat' },
    cost: { ar: 'مجاني بالكامل', fr: '100% Gratuit' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'فتح استمارة الإدلاء بشهادة عبر موقع DGSN', fr: 'Ouvrir le formulaire officiel DGSN' },
        detail: {
          ar: 'الانتقال إلى الصفحة المخصصة على الموقع الرسمي للمديرية العامة للأمن الوطني.',
          fr: 'Accéder à la rubrique dédiée sur le portail officiel de la Sûreté Nationale.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'توصيف الواقعة وإرفاق الأدلة', fr: 'Décrire les faits et joindre les éléments' },
        detail: {
          ar: 'كتابة ملخص دقيق للملاحظات أو الواقعة مع تحديد الزمان والمكان بدقة.',
          fr: 'Rédiger un récit précis des faits observés en précisant la date, l\'heure et la localisation.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'الإرسال والاحتفاظ برقم المتابعة', fr: 'Valider l\'envoi sécurisé' },
        detail: {
          ar: 'إرسال الاستمارة بسرية تامة ليتم تحويلها إلى المصالح المختصة فورا.',
          fr: 'Soumettre la déclaration transmise de façon cryptée aux services compétents.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'وصف دقيق للواقعة وموقعها الجغرافي', fr: 'Description factuelle précise et localisation' }, isMandatory: true },
      { name: { ar: 'معلومات التواصل (اختيارية في حالات التبليغ السري)', fr: 'Coordonnées de contact (facultatif)' }, isMandatory: false },
    ],
    faqs: [
      {
        question: { ar: 'هل تضمن المنصة سرية هوية المبلغ؟', fr: 'La confidentialité du témoin est-elle garantie ?' },
        answer: {
          ar: 'نعم، تتعهد مصالح الأمن الوطني بالحماية القانونية الكاملة والسرية الصارمة لمعطيات المبلغين والشهود.',
          fr: 'Oui, la DGSN garantit la protection et la confidentialité absolue des informations transmises.',
        },
      },
    ],
  },
  {
    id: 'proc-anae',
    slug: 'anae',
    title: {
      ar: 'طلب واستخراج بطاقة المقاول الذاتي (ANAE)',
      fr: 'Demande de Carte d\'Auto-Entrepreneur (ANAE)',
    },
    sectorId: 'anae',
    responsibleEntity: {
      ar: 'الوكالة الوطنية للمقاول الذاتي (ANAE)',
      fr: 'Agence Nationale de l\'Auto-Entrepreneur (ANAE)',
    },
    description: {
      ar: 'إجراء إلكتروني متكامل للتسجيل في السجل الوطني للمقاول الذاتي، والحصول على البطاقة المهنية الرقمية التي تمنح تغطية اجتماعية لدى CASNOS وإعفاءات ضريبية مبسطة (0.5%).',
      fr: 'Téléprocédure complète pour obtenir le statut légal et la carte numérique d\'auto-entrepreneur ouvrant droit à l\'affiliation CASNOS et à un régime fiscal simplifié (IFU 0,5%).',
    },
    officialLink: 'https://anae.dz/user/ae/register/',
    estimatedDuration: { ar: '48 إلى 72 ساعة للمعاينة', fr: '48h à 72h de validation' },
    cost: { ar: 'مجاني (بدون رسوم تسجيل)', fr: 'Gratuit (Frais d\'inscription nuls)' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'فتح حساب على منصة ANAE', fr: 'Créer un compte sur anae.dz' },
        detail: {
          ar: 'الولوج إلى رابط التسجيل وتعبئة الاسم، رقم التعريف الوطني NIN، وبيانات البريد والهاتف.',
          fr: 'S\'inscrire sur l\'espace dédié en saisissant le NIN, l\'état civil et les coordonnées vérifiées.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'اختيار النشاط من قائمة الأنشطة المؤهلة', fr: 'Choisir l\'activité éligible' },
        detail: {
          ar: 'انتقاء رمز النشاط الموافق من بين المهن الاستشارية، الرقمية، الخدماتية، أو المنزلية المعتمدة.',
          fr: 'Sélectionner le code d\'activité parmi les secteurs numériques, conseil, formation ou services aux entreprises.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'رفع شهادة الإقامة وتحميل البطاقة', fr: 'Joindre les pièces et obtenir la carte' },
        detail: {
          ar: 'إرفاق بطاقة الإقامة وصورة شمسية حديثة لتتم دراسة الطلب وإتاحة تحميل البطاقة الرقمية وفواتير الدفع.',
          fr: 'Importer la résidence et la photo d\'identité afin de recevoir la carte numérique validée.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'رقم التعريف الوطني NIN ونسخة من بطاقة التعريف', fr: 'NIN et copie de la CNI biométrique' }, isMandatory: true },
      { name: { ar: 'شهادة الإقامة أو وثيقة تثبت الموطن', fr: 'Certificat de résidence' }, isMandatory: true },
      { name: { ar: 'شهادة مهنية أو جامعية (لبعض الأنشطة المقننة)', fr: 'Diplôme ou attestation (selon l\'activité)' }, isMandatory: false },
    ],
    faqs: [
      {
        question: { ar: 'ما هي المزايا الضريبية والاجتماعية للمقاول الذاتي في الجزائر؟', fr: 'Quels sont les avantages fiscaux de l\'auto-entrepreneur ?' },
        answer: {
          ar: 'الاستفادة من الضريبة الجزافية الوحيدة بنسبة 0.5% من رقم الأعمال، الإعفاء من الإمساك المحاسبي، إمكانية فتح حساب بنكي تجاري، والتغطية الاجتماعية لدى CASNOS.',
          fr: 'Régime IFU préférentiel à 0,5% du chiffre d\'affaires, exonération de comptabilité complexe, compte bancaire professionnel et couverture CASNOS.',
        },
      },
    ],
  },
  {
    id: 'proc-awlyaa',
    slug: 'awlyaa-process',
    title: {
      ar: 'التسجيل في فضاء الأولياء ومتابعة التلاميذ 2026',
      fr: 'Inscription Espace Parents Awlyaa 2026',
    },
    sectorId: 'awlyaa-education',
    responsibleEntity: {
      ar: 'وزارة التربية الوطنية',
      fr: 'Ministère de l\'Éducation Nationale',
    },
    description: {
      ar: 'دليل التسجيل خطوة بخطوة في منصة فضاء الأولياء للاطلاع على كشوف النقاط الفصلية، تسجيل الأبناء في السنة الأولى ابتدائي، طلبات التحويل المدرسي، ومتابعة الغيابات.',
      fr: 'Guide complet d\'inscription sur awlyaa.education.dz pour consulter les bulletins trimestriels, suivre l\'assiduité et gérer les transferts et inscriptions en 1ère AP.',
    },
    officialLink: 'https://awlyaa.education.dz/login',
    estimatedDuration: { ar: '10 دقائق للتفعيل', fr: '10 min (validation par le directeur)' },
    cost: { ar: 'مجاني بالكامل', fr: '100% Gratuit' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'إنشاء حساب ولي أمر جديد', fr: 'Créer un compte parent' },
        detail: {
          ar: 'الدخول إلى awlyaa.education.dz وإدخال البريد الإلكتروني ورقم التعريف الوطني والصفة (أب، أم، وصي).',
          fr: 'Accéder à awlyaa.education.dz et renseigner votre email, NIN et lien de parenté.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'إضافة الأبناء برقم التعريف المدرسي', fr: 'Rattacher les élèves via le NIN scolaire' },
        detail: {
          ar: 'اختيار ولاية التمدرس والمؤسسة التعليمية وإدخال رقم التعريف المدرسي المكون من 16 رقما لكل تلميذ.',
          fr: 'Saisir la wilaya, l\'établissement scolaire et l\'identifiant scolaire à 16 chiffres de chaque enfant.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'طباعة الاستمارة والمصادقة من المؤسسة', fr: 'Imprimer et faire valider le formulaire' },
        detail: {
          ar: 'طبع وصل التسجيل وتقديمه لمدير المؤسسة التربوية لتفعيل الربط وظهور كشوف النقاط فوريا.',
          fr: 'Remettre l\'attestation imprimée au directeur d\'école/collège/lycée pour activer le compte.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'رقم التعريف المدرسي (متوفر في الشهادة المدرسية)', fr: 'Identifiant scolaire à 16 chiffres' }, isMandatory: true },
      { name: { ar: 'بطاقة التعريف الوطنية للولي وبريد إلكتروني فعال', fr: 'CNI du parent et adresse email valide' }, isMandatory: true },
    ],
    faqs: [
      {
        question: { ar: 'من أين أستخرج رقم التعريف المدرسي للتلميذ؟', fr: 'Où trouver l\'identifiant scolaire de mon enfant ?' },
        answer: {
          ar: 'يظهر رقم التعريف المدرسي المكون من 16 رقما أعلى كشف النقاط الفصلي أو الشهادة المدرسية المستخرجة من أمانة المؤسسة.',
          fr: 'Il figure en en-tête des bulletins trimestriels ou sur le certificat de scolarité délivré par l\'établissement.',
        },
      },
    ],
  },
  {
    id: 'proc-markabatidz',
    slug: 'markabatidz',
    title: {
      ar: 'حجز موعد فحص ومطابقة المركبات (منصة مركبتي DZ)',
      fr: 'Prise de Rendez-vous Contrôle & Conformité (Markabati DZ)',
    },
    sectorId: 'markabatidz',
    responsibleEntity: {
      ar: 'وزارة الطاقة والمناجم (مصلحة المناجم)',
      fr: 'Ministère de l\'Énergie et des Mines (Direction des Mines)',
    },
    description: {
      ar: 'منصة مركبتي DZ الرقمية المخصصة لحجز مواعيد المراقبة التقنية ومطابقة المركبات المستوردة أو المحولة لدى مهندسي المناجم عبر مختلف ولايات الوطن.',
      fr: 'Portail unifié Markabati DZ permettant de réserver un créneau de contrôle de conformité des véhicules importés, neufs ou modifiés auprès des ingénieurs des mines.',
    },
    officialLink: 'https://markabatidz.energy.gov.dz/',
    estimatedDuration: { ar: 'حجز فوري حسب الجدول الولائي', fr: 'Réservation immédiate selon calendrier' },
    cost: { ar: 'رسوم المحضر والطوابع الجبائية النظامية', fr: 'Frais réglementaires d\'homologation' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'تسجيل الدخول وإنشاء ملف المركبة', fr: 'Créer votre compte propriétaire' },
        detail: {
          ar: 'الولوج إلى markabatidz.energy.gov.dz وإدخال بيانات المالك ورقم الهيكل التسلسلي (VIN).',
          fr: 'Se connecter sur markabatidz.energy.gov.dz et saisir le numéro de châssis (VIN) du véhicule.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'اختيار مديرية الطاقة والمنجم والموعد', fr: 'Sélectionner la wilaya et le créneau' },
        detail: {
          ar: 'تحديد مركز الفحص في ولايتك واختيار اليوم والتوقيت المتاحين للمعاينة الميدانية.',
          fr: 'Choisir le centre d\'inspection de votre wilaya et réserver une date disponible.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'طباعة الاستدعاء والحضور للمعاينة', fr: 'Télécharger la convocation et présenter le véhicule' },
        detail: {
          ar: 'طبع وصل الحجز والتوجه بالمركبة والوثائق الأصلية في التاريخ المحدد لاستلام محضر المطابقة.',
          fr: 'Présenter la convocation et le dossier d\'origine au rendez-vous pour obtenir le procès-verbal.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'البطاقة الرمادية أو شهادة الجمركة (Model 846)', fr: 'Carte grise ou déclaration douanière (Modèle 846)' }, isMandatory: true },
      { name: { ar: 'محضر المراقبة التقنية أو شهادة تركيب سيرغاز (عند الاقتضاء)', fr: 'Certificat de conformité ou PV GPL (le cas échéant)' }, isMandatory: false },
    ],
    faqs: [
      {
        question: { ar: 'هل تشمل المنصة المركبات المستوردة أقل من 3 سنوات؟', fr: 'Les véhicules importés moins de 3 ans sont-ils concernés ?' },
        answer: {
          ar: 'نعم، تتطلب إجراءات ترقيم المركبات المستوردة حجز موعد مسبق عبر منصة مركبتي DZ لإصدار محضر المطابقة من مصالح المناجم.',
          fr: 'Oui, l\'immatriculation définitive des véhicules importés nécessite le procès-verbal des Mines réservé via Markabati DZ.',
        },
      },
    ],
  },
  {
    id: 'proc-mahata',
    slug: 'e-mahata.naftal',
    title: {
      ar: 'التسجيل في منصة محطتي لاقتناء عجلات السيارات (نفطال)',
      fr: 'Réservation Pneus & Lubrifiants (E-Mahata Naftal)',
    },
    sectorId: 'naftal',
    responsibleEntity: {
      ar: 'الشركة الوطنية لتسويق وتوزيع المنتجات البترولية (نفطال)',
      fr: 'Entreprise Nationale Naftal SPA',
    },
    description: {
      ar: 'منصة إلكترونية تابعة لشركة نفطال تمكن السائقين من طلب واقتناء العجلات المطاطية، الزيوت، وملحقات الصيانة في نقاط البيع المعتمدة بالأسعار الرسمية وبشفافية تامة.',
      fr: 'Plateforme officielle de Naftal permettant aux automobilistes de réserver leurs pneumatiques, lubrifiants et services d\'entretien aux tarifs réglementés sans rupture de stock.',
    },
    officialLink: 'https://e-mahata.naftal.dz/',
    estimatedDuration: { ar: 'تأكيد فوري حسب الوفرة في المحطة', fr: 'Confirmation selon disponibilité en station' },
    cost: { ar: 'التسعيرة الرسمية لشركة نفطال', fr: 'Tarifs officiels Naftal' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'الدخول لمنصة e-mahata.naftal.dz', fr: 'Accéder à e-mahata.naftal.dz' },
        detail: {
          ar: 'فتح البوابة وإنشاء حساب بالهاتف النقال وإدخال رقم ترقيم المركبة وبيانات البطاقة الرمادية.',
          fr: 'Créer un compte avec votre numéro de téléphone et renseigner l\'immatriculation du véhicule.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'اختيار مقاس العجلة ومحطة التوزيع', fr: 'Choisir la dimension et la station Naftal' },
        detail: {
          ar: 'تحديد أبعاد الإطارات المطابقة للمركبة واختيار محطة الخدمة أو مركز الصيانة الأقرب بولايتك.',
          fr: 'Sélectionner les dimensions exactes des pneumatiques et la station-service de retrait dans votre wilaya.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'الحصول على الموعد والتركيب في المحطة', fr: 'Se présenter au rendez-vous de montage' },
        detail: {
          ar: 'التوجه في التاريخ المحدد بالبطاقة الرمادية للاستفادة من التركيب والترصيص بالمحطة المختارة.',
          fr: 'Présenter le code de confirmation et la carte grise à la station choisie pour le paiement et la pose.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'البطاقة الرمادية للمركبة (مقاس الإطار)', fr: 'Carte grise du véhicule' }, isMandatory: true },
      { name: { ar: 'بطاقة التعريف الوطنية ورقم الهاتف لتأكيد SMS', fr: 'CNI et numéro de téléphone actif' }, isMandatory: true },
    ],
    faqs: [
      {
        question: { ar: 'هل يلتزم الزبون بإظهار المركبة عند استلام العجلات؟', fr: 'Le montage sur place est-il obligatoire ?' },
        answer: {
          ar: 'نعم، في اغلب مراكز نفطال يتم تقديم المركبة وتركيب العجلات في عين المكان لضمان وصول المنتج إلى المستهلك المستحق.',
          fr: 'Oui, la présence du véhicule correspondant à la carte grise enregistrée est requise lors du retrait et du montage.',
        },
      },
    ],
  },
  {
    id: 'proc-takwin',
    slug: 'takwin',
    title: {
      ar: 'التسجيل في الدخول التكويني 2026 (منصة مهنتي / تكوين)',
      fr: 'Inscription Formation Professionnelle 2026 (Mihnati / Takwin)',
    },
    sectorId: 'mfp.gov',
    responsibleEntity: {
      ar: 'وزارة التكوين والتعليم المهنيين',
      fr: 'Ministère de la Formation et de l\'Enseignement Professionnels',
    },
    description: {
      ar: 'بوابة التسجيل الإلكتروني الموحدة للالتحاق بمراكز ومعاهد التكوين المهني عبر مختلف التخصصات (التكوين الحضوري، التمهين، التكوين عن بعد، وتأهيل الماكثات بالبيت).',
      fr: 'Portail officiel d\'inscription à la rentrée de la formation professionnelle : formation résidentielle, apprentissage, formation à distance et passerelles qualifiantes.',
    },
    officialLink: 'https://takwin.dz/Offersinscription',
    estimatedDuration: { ar: '15 دقيقة للتسجيل الإلكتروني', fr: '15 min en ligne + entretien d\'orientation' },
    cost: { ar: 'مجاني في المؤسسات العمومية', fr: 'Gratuit dans les établissements publics' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'تصفح عروض التكوين المتاحة بالولاية', fr: 'Consulter les offres de formation par wilaya' },
        detail: {
          ar: 'ولوج بوابة takwin.dz واختيار الولاية ونمط التكوين والشعبة المرغوبة حسب المستوى الدراسي.',
          fr: 'Ouvrir takwin.dz et filtrer les spécialités par wilaya, niveau scolaire et mode de formation.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'ملء استمارة الرغبات وإدخال البيانات', fr: 'Remplir le formulaire de préinscription' },
        detail: {
          ar: 'إدخال رقم التعريف الوطني واختيار حتى 3 رغبات تكوينية في المعاهد أو المراكز القريبة.',
          fr: 'Saisir les informations d\'état civil, le niveau scolaire et classer jusqu\'à 3 vœux de formation.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'طباعة الاستمارة وحضور يوم التوجيه والانتقاء', fr: 'Imprimer la fiche et passer l\'entretien' },
        detail: {
          ar: 'طبع وصل التسجيل والتوجه إلى المركز المعني لاستكمال الملف وإجراء مقابلة التوجيه.',
          fr: 'Télécharger l\'attestation et se présenter à l\'établissement avec le dossier administratif aux dates fixées.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'شهادة مدرسية أو كشف نقاط آخر مستوى دراسي', fr: 'Certificat de scolarité du dernier niveau' }, isMandatory: true },
      { name: { ar: 'مستخرج عقد الميلاد وصورتان شمسيتان', fr: 'Extrait de naissance et 2 photos d\'identité' }, isMandatory: true },
    ],
    faqs: [
      {
        question: { ar: 'ما هي دورتا التسجيل الرئيسيتان في التكوين المهني؟', fr: 'Quelles sont les deux sessions annuelles de rentrée ?' },
        answer: {
          ar: 'تنظم وزارة التكوين والتعليم المهنيين دورتين رئيسيتين في السنة: دورة فيفري ودورة سبتمبر-أكتوبر.',
          fr: 'Deux sessions principales sont organisées chaque année : la rentrée de février et la rentrée d\'automne (septembre-octobre).',
        },
      },
    ],
  },
  {
    id: 'proc-adhahi',
    slug: 'adhahi.dz',
    title: {
      ar: 'منصة الحجز والبيع المنظم للأضاحي ونقاط البيع المعتمدة',
      fr: 'Plateforme Officielle de Vente de Moutons (Adhahi DZ)',
    },
    sectorId: 'madr',
    responsibleEntity: {
      ar: 'وزارة الفلاحة والتنمية الريفية والصيد البحري',
      fr: 'Ministère de l\'Agriculture et du Développement Rural',
    },
    description: {
      ar: 'خدمة رقمية تتيح للمواطنين تحديد نقاط البيع الرسمية المعتمدة والمراقبة بيطريا لاقتناء أضاحي العيد والحجز الإلكتروني المنظم بالتعاون مع الدواوين الوطنية.',
      fr: 'Téléservice permettant de localiser les points de vente officiels contrôlés vétérinairement et d\'effectuer la réservation en ligne durant les campagnes réglementées.',
    },
    officialLink: 'https://adhahi.dz/register',
    estimatedDuration: { ar: 'فوري أثناء موسم الحملات الموسمية', fr: 'Immédiat pendant les campagnes officielles' },
    cost: { ar: 'الأسعار المسقفة المعتمدة رسميا', fr: 'Tarifs officiels réglementés' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'التسجيل على بوابة adhahi.dz', fr: 'S\'inscrire sur adhahi.dz' },
        detail: {
          ar: 'إنشاء حساب عبر الموقع باستخدام رقم التعريف الوطني NIN ورقم الهاتف وتحديد الولاية.',
          fr: 'Créer un compte sur adhahi.dz à l\'aide du NIN, numéro de téléphone et wilaya de résidence.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'اختيار نقطة البيع المعتمدة والموعد', fr: 'Choisir le point de vente officiel' },
        detail: {
          ar: 'انتقاء الفئة ونقطة البيع الأقرب من القائمة المعتمدة لدى المصالح الفلاحية والبيطرية.',
          fr: 'Sélectionner le point de vente agréé le plus proche sur la carte communale.',
        },
      },
      {
        stepNumber: 3,
        title: { ar: 'استلام الوصل والحضور للشراء والدفع', fr: 'Retirer le bon de réservation' },
        detail: {
          ar: 'تقديم وصل الحجز الإلكتروني يوم الموعد لاستلام الأضحية المصحوبة بالشهادة البيطرية.',
          fr: 'Présenter le bon généré au point de vente pour procéder au paiement et au retrait.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'بطاقة التعريف الوطنية البيومترية (NIN)', fr: 'CNI biométrique (NIN)' }, isMandatory: true },
      { name: { ar: 'بطاقة الدفع الذهبية أو CIB (إن أتيح الدفع المسبق)', fr: 'Carte Edahabia ou CIB (le cas échéant)' }, isMandatory: false },
    ],
    faqs: [
      {
        question: { ar: 'هل تخضع جميع نقاط البيع المدرجة للمراقبة البيطرية؟', fr: 'Les points de vente sont-ils contrôlés ?' },
        answer: {
          ar: 'نعم، كافة نقاط البيع الرسمية المدرجة تخضع لإشراف المصالح الفلاحية والبيطرية لوزارة الفلاحة.',
          fr: 'Oui, chaque point de vente agréé dispose d\'un suivi permanent des services vétérinaires officiels.',
        },
      },
    ],
  },
  {
    id: 'proc-arpce',
    slug: 'arpce',
    title: {
      ar: 'التسجيل في مبادرة جيل لجيل 777 للإدماج الرقمي (ARPCE / MPT)',
      fr: 'Inscription Programme Inclusion Numérique 777 (ARPCE / MPT)',
    },
    sectorId: 'arpce',
    responsibleEntity: {
      ar: 'وزارة البريد والمواصلات السلكية واللاسلكية وسلطة الضبط',
      fr: 'Ministère de la Poste & Télécoms · ARPCE',
    },
    description: {
      ar: 'برنامج وطني مفتوح للتدريب على المهارات الرقمية، التوعية بالأمن السيبراني، وتمكين الفئات الشبانية والأسر من الأدوات التكنولوجية حضوريا وعن بعد.',
      fr: 'Initiative nationale d\'inclusion numérique offrant des ateliers gratuits en présentiel et à distance sur les compétences numériques et la cybersécurité.',
    },
    officialLink: 'https://777.mpt.gov.dz/calendar#cal-board',
    estimatedDuration: { ar: 'التحاق فوري بالرزنامة المختارة', fr: 'Accès immédiat selon le calendrier' },
    cost: { ar: 'مجاني بالكامل', fr: '100% Gratuit' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'فتح لوحة المواعيد على منصة 777.mpt.gov.dz', fr: 'Consulter le calendrier sur 777.mpt.gov.dz' },
        detail: {
          ar: 'تصفح الدورات المتوفرة بالولاية أو الدورات المفتوحة عن بعد واختر التاريخ المناسب.',
          fr: 'Parcourir les sessions planifiées par wilaya ou en visioconférence sur le tableau des ateliers.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'تسجيل البيانات وحجز المقعد', fr: 'Réserver sa place en ligne' },
        detail: {
          ar: 'تعبئة الاسم والبريد الإلكتروني ومستوى الخبرة لتأكيد الانضمام إلى الورشة التدريبية.',
          fr: 'Renseigner ses coordonnées et recevoir le lien d\'accès ou la convocation de session.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'بيانات الهوية والبريد الإلكتروني الفعال', fr: 'Identité et adresse email active' }, isMandatory: true },
    ],
    faqs: [
      {
        question: { ar: 'هل التدريب متاح للمبتدئين وعن بعد؟', fr: 'Les sessions sont-elles adaptées aux débutants à distance ?' },
        answer: {
          ar: 'نعم، توفر المبادرة مسارات حضورية في المراكز الولائية وجلسات تفاعلية عن بعد لمختلف المستويات.',
          fr: 'Oui, des ateliers en présentiel et en ligne couvrent tous les niveaux sans prérequis.',
        },
      },
    ],
  },
  {
    id: 'proc-arpce2',
    slug: 'arpce2',
    title: {
      ar: 'مسار التكوين عن بعد ضمن المبادرة الرقمية 7.77',
      fr: 'Parcours E-Learning Initiative Numérique 7.77',
    },
    sectorId: 'arpce',
    responsibleEntity: {
      ar: 'سلطة ضبط البريد والاتصالات ووزارة البريد والمواصلات',
      fr: 'ARPCE & Ministère de la Poste et des Télécommunications',
    },
    description: {
      ar: 'دليل الانخراط عن بعد في حصص الإدماج الرقمي 7.77 لاكتساب مهارات استخدام المنصات الإدارية والدفع الإلكتروني والأمان الرقمي من المنزل.',
      fr: 'Guide d\'inscription au volet à distance du programme 7.77 pour maîtriser les téléservices publics, le paiement électronique et la sécurité en ligne depuis chez soi.',
    },
    officialLink: 'https://777.mpt.gov.dz/calendar#cal-board',
    estimatedDuration: { ar: 'تسجيل فوري للحصص التفاعلية', fr: 'Inscription instantanée aux sessions en ligne' },
    cost: { ar: 'مجاني لجميع المواطنين', fr: 'Gratuit pour tous les citoyens' },
    steps: [
      {
        stepNumber: 1,
        title: { ar: 'تصفح الجدول الشهري للدورات عن بعد', fr: 'Sélectionner une session à distance' },
        detail: {
          ar: 'الدخول إلى منصة 777 وفلترة الورشات المبرمجة عبر الإنترنت.',
          fr: 'Filtrer les ateliers marqués "À distance" sur le portail officiel.',
        },
      },
      {
        stepNumber: 2,
        title: { ar: 'التسجيل واستلام رابط الحصة', fr: 'Valider l\'inscription et rejoindre la classe' },
        detail: {
          ar: 'تأكيد التسجيل واستخدام الرابط المرسل للمشاركة في الورشة التدريبية.',
          fr: 'Confirmer votre participation et accéder au webinaire aux horaires prévus.',
        },
      },
    ],
    documentsRequired: [
      { name: { ar: 'بريد إلكتروني واتصال إنترنت', fr: 'Adresse email et connexion internet' }, isMandatory: true },
    ],
    faqs: [
      {
        question: { ar: 'ما الفرق بين المسار الحضوري والمسار عن بعد في مبادرة 777؟', fr: 'Quelle différence entre les volets présentiel et à distance ?' },
        answer: {
          ar: 'كلا المسارين يتيحان نفس المحتوى التطبيقي مع مرونة المتابعة من المنزل في المسار عن بعد.',
          fr: 'Le contenu pédagogique est identique, le format à distance offrant une flexibilité totale depuis tout le territoire.',
        },
      },
    ],
  },
];

export const videosList: VideoItem[] = [
  {
    id: 'vid-apostille',
    slug: 'apostille-registration',
    title: {
      ar: 'شرح التسجيل في المنصة الوطنية الرقمية للأبوستيل',
      fr: 'Tutoriel : Inscription sur la Plateforme e-Apostille DZ',
    },
    description: {
      ar: 'فيديو توضيحي رسمي يشرح طريقة فتح حساب، رفع الوثائق المراد تصديقها، والدفع الإلكتروني للحصول على ختم الأبوستيل عن بعد.',
      fr: 'Guide vidéo officiel détaillant la création de compte, le dépôt des documents PDF et l\'obtention du certificat Apostille à distance.',
    },
    videoUrl: 'https://www.youtube.com/embed/Abph3zC5gZA',
    thumbnailUrl: 'https://img.youtube.com/vi/Abph3zC5gZA/hqdefault.jpg',
    platform: 'youtube',
    duration: '04:15',
    category: { ar: 'الأبوستيل والتصديق الرقمي', fr: 'Légalisation & Apostille' },
    officialUrl: 'https://apostille.hcn.dz/',
    stepsHighlight: [
      { ar: 'ولوج المنصة الوطنية apostille.hcn.dz وإنشاء الحساب برقم NIN.', fr: 'Créer son espace personnel sur apostille.hcn.dz avec le NIN.' },
      { ar: 'إدخال بيانات الوثيقة وتحميل الملف الممسوح ضوئيا بصيغة PDF.', fr: 'Téléverser le document officiel numérisé au format PDF.' },
      { ar: 'تسديد الرسوم بالبطاقة الذهبية أو CIB وتحميل الشهادة المختومة برمز QR.', fr: 'Payer via Edahabia/CIB et télécharger le certificat avec QR Code.' },
    ],
  },
  {
    id: 'vid-mtpib',
    slug: 'mtpib-presentation',
    title: {
      ar: 'تعريف بالبوابة الرقمية لوزارة الأشغال العمومية والمنشآت القاعدية',
      fr: 'Présentation du Portail Numérique du MTPIB',
    },
    description: {
      ar: 'عرض مرئي تعريفي للخدمات الرقمية المقدمة من طرف وزارة الأشغال العمومية للمقاولين والمكاتب الهندسية، بما فيها طلبات التأهيل والتصنيف المهني.',
      fr: 'Vidéo institutionnelle présentant les services en ligne du Ministère des Travaux Publics pour les entreprises, certificats de qualification et marchés.',
    },
    videoUrl: 'https://portail.mtpib.dz/portail_v.mp4',
    thumbnailUrl: 'https://picsum.photos/seed/mtpib/800/450',
    platform: 'mp4',
    duration: '03:20',
    category: { ar: 'الأشغال العمومية والمنشآت', fr: 'Travaux Publics' },
    officialUrl: 'https://portail.mtpib.dz/',
    stepsHighlight: [
      { ar: 'استعراض بوابة إيداع ملفات شهادة التأهيل والتصنيف المهني.', fr: 'Dépôt en ligne des dossiers de qualification professionnelle.' },
      { ar: 'متابعة حالة الاعتماد والصفقات عبر الفضاء المؤمن للشركات.', fr: 'Suivi dématérialisé du traitement et retrait des agréments.' },
    ],
  },
  {
    id: 'vid-arpce-777',
    slug: 'arpce-777',
    title: {
      ar: 'برنامج جيل لجيل 777 للإدماج الرقمي وتطوير المهارات',
      fr: 'Programme Inclusion Numérique 777 (ARPCE / MPT)',
    },
    description: {
      ar: 'شرح مرئي لمبادرة جيل لجيل 777 الموجهة لتطوير المهارات الرقمية، التوعية التكنولوجية، وحجز المقاعد في الدورات المجانية عبر المنصة.',
      fr: 'Présentation de l\'initiative nationale 777 dédiée à l\'apprentissage du numérique, aux ateliers gratuits et à la réservation en ligne.',
    },
    videoUrl: 'https://www.youtube.com/embed/opO1dEXGFDw',
    thumbnailUrl: 'https://img.youtube.com/vi/opO1dEXGFDw/hqdefault.jpg',
    platform: 'youtube',
    duration: '03:45',
    category: { ar: 'الاتصالات والإدماج الرقمي', fr: 'Inclusion Numérique' },
    officialUrl: 'https://777.mpt.gov.dz/calendar#cal-board',
    stepsHighlight: [
      { ar: 'التعرف على محاور البرنامج والمحتوى التدريبي لمختلف الفئات.', fr: 'Découverte des parcours de formation numérique gratuits.' },
      { ar: 'حجز موعد في الورشة الحضورية أو الحصة عن بعد عبر الرزنامة الرسمية.', fr: 'Réservation de créneau en présentiel ou à distance sur 777.mpt.gov.dz.' },
    ],
  },
  {
    id: 'vid-awlyaa',
    slug: 'awlyaa-registration',
    title: {
      ar: 'طريقة التسجيل في فضاء الأولياء 2026 ومتابعة التلاميذ',
      fr: 'Tutoriel : Inscription Espace Parents Awlyaa 2026',
    },
    description: {
      ar: 'شرح عملي لخطوات إنشاء حساب ولي الأمر، ربط الأبناء برقم التعريف المدرسي، وطباعة استمارة التسجيل للمصادقة في المؤسسة التربوية.',
      fr: 'Guide complet pour créer un compte parent sur Awlyaa, associer les enfants via le NIN scolaire et consulter les résultats trimestriels.',
    },
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D485913154242019&show_text=false',
    thumbnailUrl: 'https://picsum.photos/seed/awlyaa/800/450',
    platform: 'facebook',
    duration: '04:05',
    category: { ar: 'التربية والتعليم', fr: 'Éducation Nationale' },
    officialUrl: 'https://awlyaa.education.dz/login',
    stepsHighlight: [
      { ar: 'ملء استمارة الولي وإدخال البريد الإلكتروني النشط.', fr: 'Saisie des coordonnées du parent et de l\'email actif.' },
      { ar: 'إضافة التلميذ باستخدام رقم التعريف المدرسي ذي الـ 16 رقما.', fr: 'Rattachement de l\'élève via son identifiant scolaire à 16 chiffres.' },
      { ar: 'تقديم وصل التسجيل للإدارة لتفعيل كشوف النقاط والتحويلات.', fr: 'Dépôt du formulaire signé au secrétariat de l\'établissement.' },
    ],
  },
  {
    id: 'vid-edeclaration',
    slug: 'e-declaration-registration',
    title: {
      ar: 'طريقة التصريح بضياع الوثائق عن بعد مع الشرطة الجزائرية (DGSN)',
      fr: 'Tutoriel : Déclaration de Perte en Ligne (DGSN)',
    },
    description: {
      ar: 'شرح كامل لخطوات استعمال خدمة التصريح الإلكتروني بضياع الوثائق الرسمية على موقع المديرية العامة للأمن الوطني واستخراج الوصل.',
      fr: 'Démonstration détaillée de la e-déclaration de perte de documents sur le portail officiel de la Police Algérienne.',
    },
    videoUrl: 'https://www.youtube.com/embed/PWTHYIOMKgE',
    thumbnailUrl: 'https://img.youtube.com/vi/PWTHYIOMKgE/hqdefault.jpg',
    platform: 'youtube',
    duration: '02:55',
    category: { ar: 'الأمن الوطني DGSN', fr: 'Sûreté Nationale DGSN' },
    officialUrl: 'https://www.dgsn.dz/e-declaration/',
    stepsHighlight: [
      { ar: 'اختيار الولاية ومقر الأمن الوطني القريب.', fr: 'Sélection de la wilaya et du commissariat compétent.' },
      { ar: 'تحديد نوع الوثيقة الضائعة واستخراج وصل الإيداع الفوري.', fr: 'Saisie des infos de la pièce et génération immédiate du récépissé.' },
    ],
  },
  {
    id: 'vid-markabati',
    slug: 'markabatidz-registration',
    title: {
      ar: 'طريقة حجز موعد فحص المركبات عبر منصة مركبتي DZ',
      fr: 'Tutoriel : Réservation Visite Technique sur Markabati DZ',
    },
    description: {
      ar: 'فيديو إرشادي لخطوات التسجيل وحجز موعد مراقبة ومطابقة المركبات لدى مصالح المناجم عبر منصة markabatidz.energy.gov.dz.',
      fr: 'Explication étape par étape de la création de compte et de la prise de rendez-vous pour le contrôle des véhicules sur Markabati DZ.',
    },
    videoUrl: 'https://www.youtube.com/embed/GD3ymUiI2m0',
    thumbnailUrl: 'https://img.youtube.com/vi/GD3ymUiI2m0/hqdefault.jpg',
    platform: 'youtube',
    duration: '03:50',
    category: { ar: 'الطاقة والمركبات', fr: 'Énergie & Véhicules' },
    officialUrl: 'https://markabatidz.energy.gov.dz/',
    stepsHighlight: [
      { ar: 'إدخال بيانات المركبة ورقم الهيكل (VIN) ومعلومات المالك.', fr: 'Enregistrement du véhicule via le numéro de châssis (VIN).' },
      { ar: 'اختيار موعد الحضور للمراقبة التقنية وطباعة الاستدعاء.', fr: 'Choix du créneau de visite et impression de la convocation.' },
    ],
  },
  {
    id: 'vid-naftal',
    slug: 'naftal-tyres',
    title: {
      ar: 'طريقة التسجيل في منصة محطتي التابعة لنفطال لاقتناء عجلات السيارات',
      fr: 'Tutoriel : Commander ses Pneus sur E-Mahata Naftal',
    },
    description: {
      ar: 'شرح مرئي مبسط لخطوات التسجيل في منصة محطتي e-mahata.naftal.dz، تحديد مقاس الإطارات، وحجز موعد التركيب في محطات نفطال.',
      fr: 'Tutoriel complet sur l\'utilisation d\'E-Mahata Naftal pour commander des pneumatiques au tarif officiel et réserver le montage.',
    },
    videoUrl: 'https://www.youtube.com/embed/U-3YSOxddEs',
    thumbnailUrl: 'https://img.youtube.com/vi/U-3YSOxddEs/hqdefault.jpg',
    platform: 'youtube',
    duration: '04:10',
    category: { ar: 'نفطال والمحروقات', fr: 'Naftal & Automobile' },
    officialUrl: 'https://e-mahata.naftal.dz/',
    stepsHighlight: [
      { ar: 'إدخال رقم الترقيم والبطاقة الرمادية عبر منصة محطتي.', fr: 'Inscription avec la carte grise et l\'immatriculation du véhicule.' },
      { ar: 'اختيار مقاس العجلة ومحطة التوزيع القريبة وتأكيد الموعد.', fr: 'Choix de la dimension et prise de rendez-vous en station Naftal.' },
    ],
  },
  {
    id: 'vid-takwin',
    slug: 'takwin-registration',
    title: {
      ar: 'طريقة التسجيل في الدخول التكويني 2026 عبر منصة مهنتي / تكوين',
      fr: 'Tutoriel : Inscription Formation Professionnelle 2026',
    },
    description: {
      ar: 'دليل مرئي للتعريف بآلية التسجيل الإلكتروني في تخصصات التكوين والتعليم المهنيين لدورة 2026 واستخراج استمارة التوجيه.',
      fr: 'Présentation pratique des inscriptions à la rentrée 2026 sur takwin.dz et sélection des spécialités.',
    },
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1967640217271523&show_text=false',
    thumbnailUrl: 'https://picsum.photos/seed/takwin/800/450',
    platform: 'facebook',
    duration: '02:30',
    category: { ar: 'التكوين المهني', fr: 'Formation Professionnelle' },
    officialUrl: 'https://takwin.dz/Offersinscription',
    stepsHighlight: [
      { ar: 'تصفح عروض التكوين في المعاهد ومراكز التكوين حسب الولاية.', fr: 'Consultation des places disponibles par wilaya sur takwin.dz.' },
      { ar: 'تأكيد التسجيل الأولي وتحميل استمارة المترشح.', fr: 'Validation des vœux et impression de la fiche de candidature.' },
    ],
  },
];

export const noticesList: NoticeItem[] = [
  {
    id: 'notice-index',
    slug: 'index',
    title: {
      ar: 'دليل البلاغات والمناشير الرسمية لوزارة التربية الوطنية 2026-2027',
      fr: 'Portail des Communiqués Officiels du Ministère de l\'Éducation 2026-2027',
    },
    category: { ar: 'البلاغات المركزية', fr: 'Communiqués Officiels' },
    date: '2026-09-28',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'المرجع الموحد للبلاغات والمنشورات الرسمية لوزارة التربية الوطنية الخاصة بالتقويم البيداغوجي، نتائج مسابقات التوظيف، التحويلات المدرسية، والتسجيل الاستثنائي.',
      fr: 'Répertoire centralisé des communiqués officiels du Ministère de l\'Éducation Nationale : calendrier scolaire 2026-2027, résultats de concours, transferts et inscriptions.',
    },
    content: {
      ar: `تجمع هذه الصفحة المرجعية كافة البيانات الرسمية الصادرة عن وزارة التربية الوطنية للجمهورية الجزائرية الديمقراطية الشعبية بعنوان السنة الدراسية 2026-2027.

يتيح هذا الأرشيف للأولياء، التلاميذ، والأساتذة الاطلاع المباشر على الرزنامات البيداغوجية للفصول الثلاثة، شروط التسجيل في الأقسام التحضيرية، إجراءات التصديق على كشوف النقاط بالخارج، نتائج مسابقات التوظيف، وآجال التحويل الإلكتروني عبر فضاء الأولياء.`,
      fr: `Cette page centralise l'ensemble des communiqués et circulaires officiels publiés par le Ministère de l'Éducation Nationale pour l'année scolaire 2026-2027.

Parents d'élèves, enseignants et candidats peuvent y consulter le calendrier pédagogique des trois cycles, les modalités d'authentification des diplômes pour l'étranger, les résultats des concours de recrutement et les procédures de transfert sur Awlyaa.`,
    },
    importantDates: [
      { label: { ar: 'انطلاق الترتيبات البيداغوجية للدخول 2026-2027', fr: 'Lancement des dispositions pédagogiques 2026-2027' }, date: '2026-08-05' },
      { label: { ar: 'تعديل رزنامة الدخول المدرسي 2026-2027', fr: 'Rentrée scolaire réaménagée 2026-2027' }, date: '2026-08-30' },
      { label: { ar: 'مسابقة التوظيف على أساس الاختبارات', fr: 'Concours de recrutement sur épreuves' }, date: '2026-09-26' },
      { label: { ar: 'فتح طلبات التحويل عبر فضاء الأولياء', fr: 'Transferts en ligne via Awlyaa' }, date: '2026-09-12' },
    ],
    faqs: [
      {
        question: {
          ar: 'أين تُنشر البلاغات الرسمية الموثقة لوزارة التربية الوطنية؟',
          fr: 'Où sont publiés les communiqués officiels vérifiés du Ministère ?',
        },
        answer: {
          ar: 'تنشر الوزارة بياناتها عبر بوابتها الرسمية education.gov.dz وعبر فضاء الأولياء awlyaa.education.dz لمتابعة التسجيلات والتحويلات.',
          fr: 'Les notes officielles sont diffusées sur le portail education.gov.dz et exécutées numériquement via l’espace parents awlyaa.education.dz.',
        },
      },
      {
        question: {
          ar: 'كيف يتابع الأولياء ملفات التلاميذ والتحويلات المدرسية؟',
          fr: 'Comment les parents suivent-ils les transferts et relevés de leurs enfants ?',
        },
        answer: {
          ar: 'يتم التقديم والمتابعة إلكترونيا من خلال حساب الولي المسجل في فضاء الأولياء دون الحاجة للتنقل في المرحلة الأولى.',
          fr: 'Toutes les demandes de transfert et consultations de notes s’effectuent depuis le compte parent vérifié sur Awlyaa.',
        },
      },
    ],
  },
  {
    id: 'notice-10',
    slug: 'notice-10',
    title: {
      ar: 'بلاغ 10: الإعلان عن النتائج النهائية لمسابقة التوظيف في منصب مشرف تربية، مقتصد ونائب مقتصد، ومستشار محلل',
      fr: 'Communiqué 10 : Résultats Définitifs du Concours (Superviseur d’Éducation, Économe, Adjoint & Conseiller)',
    },
    category: { ar: 'مسابقات التوظيف', fr: 'Concours & Recrutement' },
    date: '2026-10-12',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'إعلان وزارة التربية الوطنية عن النتائج النهائية لمسابقة التوظيف الخارجية في رتب مشرف تربية، مقتصد، نائب مقتصد، ومستشار محلل وإجراءات استلام التعيينات.',
      fr: 'Publication par le Ministère de l’Éducation Nationale des résultats définitifs du concours externe aux grades de superviseur d’éducation, économe, sous-économe et conseiller.',
    },
    content: {
      ar: `أعلنت وزارة التربية الوطنية عن النتائج النهائية لمسابقة التوظيف الخاصة برتب التأطير الإداري والتربوي في المؤسسات التعليمية، وتشمل مناصب: مشرف تربية، مقتصد، نائب مقتصد، ومستشار محلل.

يتيح البلاغ للمترشحين المعنيين التحقق من وضعيتهم الفردية عبر المنصة الرقمية المخصصة للامتحانات والمسابقات، مع دعوة المقبولين نهائيا إلى استكمال الملف الإداري بمديرية التربية الولائية المختصة واستلام قرارات التعيين للالتحاق بمناصب عملهم.`,
      fr: `Le Ministère de l'Éducation Nationale a proclamé les résultats définitifs du concours de recrutement aux grades d'encadrement administratif et éducatif : superviseur d'éducation, économe, sous-économe et conseiller analyste.

Les candidats sont invités à consulter leur admission en ligne sur la plateforme officielle des concours et à se présenter à la Direction de l'Éducation de leur wilaya pour déposer le dossier d'installation et retirer leur affectation.`,
    },
    importantDates: [
      { label: { ar: 'إعلان القوائم النهائية للناجحين', fr: 'Publication des résultats définitifs' }, date: '2026-10-12' },
      { label: { ar: 'استكمال ملف التنصيب بمديرية التربية', fr: 'Dépôt du dossier administratif en wilaya' }, date: '2026-10-18' },
    ],
    faqs: [
      {
        question: {
          ar: 'ما المناصب المشمولة في البلاغ رقم 10 لوزارة التربية الوطنية؟',
          fr: 'Quels grades sont concernés par le communiqué n° 10 ?',
        },
        answer: {
          ar: 'يشمل الإعلان النتائج النهائية لرتب مشرف تربية، مقتصد، نائب مقتصد، ومستشار محلل وفق الاحتياجات الولائية المضبوطة.',
          fr: 'Les postes de superviseur d’éducation, économe, sous-économe et conseiller analyste dans les directions de l’éducation.',
        },
      },
      {
        question: {
          ar: 'أين يُسلم ملف التنصيب الإداري للناجحين؟',
          fr: 'Où les lauréats déposent-ils leur dossier d’installation ?',
        },
        answer: {
          ar: 'يُودع ملف التنصيب لدى مصلحة المستخدمين والتكوين بمديرية التربية للولاية التي ترشح فيها المعني ضمن الآجال المحددة في الإشعار.',
          fr: 'Auprès du service des personnels de la Direction de l’Éducation de la wilaya d’affectation dans les délais fixés.',
        },
      },
    ],
  },
  {
    id: 'notice-09',
    slug: 'notice-09',
    title: {
      ar: 'بلاغ 09: بخصوص التقويم البيداغوجي للمراحل التعليمية الثلاث للسنة الدراسية 2026-2027',
      fr: 'Communiqué 09 : Calendrier Pédagogique des Trois Cycles Scolaires 2026-2027',
    },
    category: { ar: 'التقويم البيداغوجي', fr: 'Calendrier Pédagogique' },
    date: '2026-09-24',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'يضبط البيان الرسمي التوزيع السنوي للفصول الدراسية الثلاثة، وتواريخ الاختبارات الفصلية والعطل في التعليم الابتدائي والمتوسط والثانوي بعنوان 2026-2027.',
      fr: 'Le communiqué fixe le découpage annuel des trimestres, les périodes d\'évaluation et le calendrier des vacances scolaires pour les cycles primaire, moyen et secondaire en 2026-2027.',
    },
    content: {
      ar: `أصدرت وزارة التربية الوطنية البلاغ الرسمي الخاص بالتقويم البيداغوجي السنوي للمراحل التعليمية الثلاث (الابتدائي، المتوسط، والثانوي) للسنة الدراسية 2026-2027.

يتضمن التقويم تنظيم الأسابيع البيداغوجية، فترات الفروض والاختبارات الفصلية، أيام التصحيح ومجالس الأقسام، وكذا المواعيد المضبوطة للعطل الفصلية المدرسية (الخريف، الشتاء، الربيع، والصيف) عبر كافة المناطق والولايات.`,
      fr: `Le Ministère de l'Éducation Nationale a publié le calendrier pédagogique annuel encadrant les trois cycles d'enseignement (Primaire, Moyen et Secondaire) pour l'année 2026-2027.

Le document détaille la répartition des semaines de cours, les fenêtres d'évaluation trimestrielle, les conseils de classe ainsi que les dates unifiées des vacances scolaires d'automne, d'hiver, de printemps et d'été.`,
    },
    importantDates: [
      { label: { ar: 'بداية الفصل الدراسي الأول', fr: 'Début du 1er trimestre' }, date: '2026-09' },
      { label: { ar: 'اختبارات الفصل الدراسي الأول', fr: 'Compositions 1er trimestre' }, date: '2026-12' },
      { label: { ar: 'اختبارات الفصل الدراسي الثاني', fr: 'Compositions 2e trimestre' }, date: '2027-03' },
      { label: { ar: 'اختبارات الفصل الدراسي الثالث', fr: 'Compositions 3e trimestre' }, date: '2027-05' },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يشمل التقويم البيداغوجي جميع المراحل التعليمية؟',
          fr: 'Ce calendrier couvre-t-il l’ensemble des cycles scolaires ?',
        },
        answer: {
          ar: 'نعم، يضبط المواعيد الموحدة للاختبارات ومجالس الأقسام والعطل المدرسية في الابتدائي والمتوسط والثانوي.',
          fr: 'Oui, il s’applique aux cycles primaire, moyen et secondaire sur tout le territoire national.',
        },
      },
      {
        question: {
          ar: 'أين يتابع الأولياء علامات التلاميذ في كل فصل؟',
          fr: 'Où les parents consultent-ils les relevés de notes trimestriels ?',
        },
        answer: {
          ar: 'تُنشر كشوف النقاط الفصلية رقميا فور غلق مجالس الأقسام عبر فضاء الأولياء (awlyaa.education.dz).',
          fr: 'Les bulletins trimestriels sont accessibles en ligne dès la clôture des conseils de classe sur awlyaa.education.dz.',
        },
      },
    ],
  },
  {
    id: 'notice-08',
    slug: 'notice-08',
    title: {
      ar: 'بلاغ 08: بخصوص نتائج مسابقة التوظيف على أساس الاختبارات (26 سبتمبر 2026)',
      fr: 'Communiqué 08 : Résultats du Concours de Recrutement du 26 Septembre 2026',
    },
    category: { ar: 'مسابقات التوظيف', fr: 'Concours & Recrutement' },
    date: '2026-10-05',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'إعلان رسمي حول صدور قوائم الناجحين في مسابقة التوظيف على أساس الاختبارات التي جرت بتاريخ 26 سبتمبر 2026 وإجراءات استلام مقررات التعيين.',
      fr: 'Publication officielle des résultats du concours de recrutement sur épreuves du 26 septembre 2026 et modalités d\'affectation des lauréats.',
    },
    content: {
      ar: `تعلن وزارة التربية الوطنية عن إتاحة الاطلاع على النتائج النهائية لمسابقة التوظيف على أساس الاختبارات الكتابية المنظمة بتاريخ 26 سبتمبر 2026 عبر المنصة الرقمية المخصصة للامتحانات والمسابقات.

يدعى المترشحون المقبولون إلى التقرب من مديريات التربية الولائية مصحوبين بملف التنصيب واستمارة القبول في الآجال المحددة لاستلام قرارات التعيين والالتحاق بمناصب عملهم.`,
      fr: `Le Ministère de l'Éducation Nationale informe l'ensemble des candidats de la publication des résultats définitifs du concours sur épreuves tenu le 26 septembre 2026 sur la plateforme dédiée.

Les lauréats sont invités à consulter leur statut individuel et à se rapprocher de la Direction de l'Éducation de leur wilaya pour retirer leur décision d'affectation et compléter le dossier administratif d'installation.`,
    },
    importantDates: [
      { label: { ar: 'تاريخ إجراء الاختبارات الكتابية', fr: 'Date des épreuves écrites' }, date: '2026-09-26' },
      { label: { ar: 'نشر القوائم النهائية للناجحين', fr: 'Proclamation des résultats' }, date: '2026-10-05' },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أعرف نتيجتي في مسابقة 26 سبتمبر 2026؟',
          fr: 'Comment vérifier mon admission au concours du 26 septembre 2026 ?',
        },
        answer: {
          ar: 'تُسحب النتيجة الفردية وإشعار القبول من نفس منصة التسجيل الإلكترونية باستخدام رقم الملف وكلمة المرور.',
          fr: 'Le relevé individuel de résultat se télécharge depuis la plateforme officielle à l’aide de votre identifiant candidat.',
        },
      },
      {
        question: {
          ar: 'ما الوثائق المطلوبة عند التوجه إلى مديرية التربية؟',
          fr: 'Quelles pièces préparer pour la Direction de l’Éducation ?',
        },
        answer: {
          ar: 'أصل الشهادة العلمية، بطاقة التعريف الوطنية، إشعار النجاح المستخرج، والشهادات الطبية المطلوبة للتعيين.',
          fr: 'Original du diplôme, carte nationale d’identité, relevé d’admission imprimé et certificats médicaux réglementaires.',
        },
      },
    ],
  },
  {
    id: 'notice-07',
    slug: 'notice-07',
    title: {
      ar: 'بلاغ 07: بخصوص تحويل التلاميذ بين المؤسسات التربوية للسنة الدراسية 2026-2027',
      fr: 'Communiqué 07 : Transfert Électronique des Élèves 2026-2027',
    },
    category: { ar: 'فضاء الأولياء والتحويل', fr: 'Transferts Scolaires' },
    date: '2026-09-12',
    officialUrl: 'https://awlyaa.education.dz/login',
    summary: {
      ar: 'تعليمة تنظيمية تشرح مراحل تقديم طلبات تحويل التلاميذ بين المؤسسات التعليمية إلكترونيا عبر منصة فضاء الأولياء للموسم الدراسي 2026-2027.',
      fr: 'Note officielle fixant la procédure 100% dématérialisée de demande de transfert d\'élèves entre établissements via l\'Espace Parents Awlyaa.',
    },
    content: {
      ar: `تنهي وزارة التربية الوطنية إلى علم كافة الأولياء أن معالجة طلبات تحويل التلاميذ من مؤسسة تربوية إلى أخرى للسنة الدراسية 2026-2027 تتم حصريا عبر منصة فضاء الأولياء (awlyaa.education.dz).

يقوم الولي باختيار المؤسسة المستقبلة مع إرفاق المبرر النظامي (تغيير مقر الإقامة أو أسباب صحية أو بيداغوجية)، ويتم الرد إلكترونيا بعد دراسة القدرة الاستيعابية من طرف مدير المؤسسة ومصالح التنظيم التربوي دون أي تنقل للمديرية.`,
      fr: `Les demandes de changement d'établissement scolaire pour l'année 2026-2027 s'effectuent exclusivement en ligne via l'interface Awlyaa.

Le parent sélectionne l'établissement souhaité et téléverse les pièces justificatives (changement de résidence, motif médical ou pédagogique). La validation s'opère numériquement selon la capacité d'accueil disponible.`,
    },
    importantDates: [
      { label: { ar: 'فتح منصة التحويلات على فضاء الأولياء', fr: 'Ouverture des demandes Awlyaa' }, date: '2026-09-08' },
      { label: { ar: 'آخر أجل لمعالجة الملفات', fr: 'Clôture des validations' }, date: '2026-09-25' },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن تقديم طلب تحويل التلميذ ورقيا داخل المؤسسة؟',
          fr: 'Peut-on déposer un dossier de transfert au format papier ?',
        },
        answer: {
          ar: 'لا، تودع وتُعالج جميع طلبات التحويل رقميا عبر فضاء الأولياء فقط لضمان الشفافية وسرعة البت.',
          fr: 'Non, la procédure est entièrement dématérialisée via le compte parent sur awlyaa.education.dz.',
        },
      },
      {
        question: {
          ar: 'متى يصبح قرار التحويل ساري المفعول؟',
          fr: 'Quand la décision de transfert prend-elle effet ?',
        },
        answer: {
          ar: 'فور تأشير المؤسسة المستقبلة وظهور إشعار القبول في حساب الولي، حيث يسجل التلميذ تلقائيا في قوائم المؤسسة الجديدة.',
          fr: 'Dès validation par le chef de l’établissement d’accueil, avec notification directe sur le compte Awlyaa.',
        },
      },
    ],
  },
  {
    id: 'notice-06',
    slug: 'notice-06',
    title: {
      ar: 'بلاغ 06: بخصوص التسجيل في أقسام التربية التحضيرية والتسجيل الاستثنائي في السنة الأولى ابتدائي',
      fr: 'Communiqué 06 : Inscriptions en Préparatoire et Dérogation 1ère Année Primaire',
    },
    category: { ar: 'التعليم الابتدائي', fr: 'Cycle Primaire' },
    date: '2026-09-10',
    officialUrl: 'https://awlyaa.education.dz/login',
    summary: {
      ar: 'توضيحات وزارة التربية الوطنية حول شروط وآجال تسجيل الأطفال في أقسام التربية التحضيرية وكذا التسجيل الاستثنائي للسنة الأولى ابتدائي.',
      fr: 'Précisions officielles sur le dépôt des demandes en classe préparatoire et l\'inscription dérogatoire en première année primaire via le portail Awlyaa.',
    },
    content: {
      ar: `أوضحت وزارة التربية الوطنية إجراءات التسجيل الإلكتروني في أقسام التربية التحضيرية وكذا الترتيبات الخاصة بالتسجيل الاستثنائي في السنة الأولى ابتدائي عبر النظام المعلوماتي للقطاع (فضاء الأولياء).

يودع الأولياء طلباتهم عبر الحساب الإلكتروني دون تنقل في المرحلة الأولى، مع ترتيب الملفات حسب توفر المقاعد البيداغوجية في المدارس الابتدائية الأقرب لمقر السكن والسن القانونية المعتمدة.`,
      fr: `Le Ministère précise le calendrier et les critères d'âge applicables aux demandes d'admission en classe préparatoire et aux demandes de dérogation pour la 1ère année primaire.

Les dossiers sont soumis via le compte parent sur le Système d'Information du Secteur de l'Éducation Nationale sans déplacement préalable.`,
    },
    importantDates: [
      { label: { ar: 'إيداع الطلبات عبر فضاء الأولياء', fr: 'Dépôt des demandes en ligne' }, date: '2026-09-10' },
      { label: { ar: 'الإعلان عن نتائج القبول في المؤسسات', fr: 'Affichage des admissions' }, date: '2026-09-20' },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي شروط السن للتسجيل الاستثنائي في السنة الأولى ابتدائي؟',
          fr: 'Quels enfants sont éligibles à la dérogation en 1ère année primaire ?',
        },
        answer: {
          ar: 'يُمنح التسجيل الاستثنائي للأطفال المولودين في الفترة القانونية التي تلي تاريخ 31 ديسمبر وفق المعايير التربوية والمقاعد الشاغرة بكل مدرسة.',
          fr: 'Les enfants nés dans la fenêtre dérogatoire immédiate après le 31 décembre, selon les places pédagogiques disponibles.',
        },
      },
      {
        question: {
          ar: 'كيف يتم اختيار المدرسة الابتدائية أثناء التسجيل؟',
          fr: 'Comment s’effectue le choix de l’école primaire ?',
        },
        answer: {
          ar: 'يحدد النظام المدارس الأقرب إلى عنوان الإقامة المسجل في ملف الولي عبر فضاء الأولياء.',
          fr: 'L’espace Awlyaa propose automatiquement les écoles rattachées au secteur de résidence déclaré.',
        },
      },
    ],
  },
  {
    id: 'notice-05',
    slug: 'notice-05',
    title: {
      ar: 'بلاغ 05: بخصوص التصديق على كشوف النقاط وشهادة البكالوريا الموجهة للاستعمال بالخارج',
      fr: 'Communiqué 05 : Authentification des Relevés de Notes & Diplômes du Bac pour l\'Étranger',
    },
    category: { ar: 'التصديق والشهادات', fr: 'Authentification & Diplômes' },
    date: '2026-09-05',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'دليل الإجراءات المعتمدة للتصديق الرسمي على الشهادات المدرسية وكشوف النقاط وشهادة البكالوريا المعدة للدراسة أو التوظيف بالخارج.',
      fr: 'Note encadrant la procédure officielle d\'authentification des bulletins scolaires et du diplôme du Baccalauréat destinés à l\'étranger.',
    },
    content: {
      ar: `حددت وزارة التربية الوطنية الإجراءات والشروط المطلوبة للمصادقة على كشوف النقاط الأصلية وشهادات البكالوريا وشهادات التعليم المتوسط الموجهة للاستعمال لدى الهيئات والجامعات الأجنبية.

يتعين على المعنيين التأكد من مطابقة الوثائق الأصلية وأختام المؤسسة التعليمية، ثم إيداعها أو حجز موعد على مستوى مصالح التصديق بمديرية التربية الولائية قبل إتمام المصادقة لدى وزارة الشؤون الخارجية أو المنصة الرقمية للأبوستيل.`,
      fr: `Les titulaires souhaitant utiliser leurs relevés de notes ou leur attestation du Baccalauréat à l'étranger doivent suivre le circuit d'authentification validé par la Direction de l'Éducation puis par le Ministère des Affaires Étrangères (ou via l'e-Apostille).

Les documents originaux doivent comporter les cachets réglementaires du chef d'établissement et de l'inspecteur ou directeur académique compétent.`,
    },
    importantDates: [
      { label: { ar: 'فتح مصالح التصديق بمديريات التربية', fr: 'Accueil authentification en wilaya' }, date: '2026-09-05' },
      { label: { ar: 'ربط المسار مع منصة الأبوستيل e-Apostille', fr: 'Finalisation via e-Apostille MAE' }, date: '2026-2027' },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن التصديق على النسخ المصورة فقط دون الأصل؟',
          fr: 'Peut-on authentifier de simples photocopies sans l’original ?',
        },
        answer: {
          ar: 'لا، يجب تقديم الشهادة الأصلية وكشوف النقاط الأصلية الممهورة بختم مدير المؤسسة والمديرية المختصة.',
          fr: 'Non, la présentation des originaux dûment cachetés par l’établissement est obligatoire.',
        },
      },
      {
        question: {
          ar: 'ما الخطوة النهائية بعد تأشيرة مديرية التربية؟',
          fr: 'Quelle est l’étape finale après la Direction de l’Éducation ?',
        },
        answer: {
          ar: 'توجيه الوثائق إلى مصلحة الحالة المدنية والتصديق بوزارة الشؤون الخارجية أو المنصة الرقمية للأبوستيل عند الحاجة للخارج.',
          fr: 'Validation finale au Ministère des Affaires Étrangères ou via le guichet numérique Apostille DZ selon le pays de destination.',
        },
      },
    ],
  },
  {
    id: 'notice-04',
    slug: 'notice-04',
    title: {
      ar: 'بلاغ 04: تعديل رزنامة الدخول المدرسي للسنة الدراسية 2026-2027',
      fr: 'Communiqué 04 : Réaménagement du Calendrier de la Rentrée Scolaire 2026-2027',
    },
    category: { ar: 'الدخول المدرسي', fr: 'Rentrée Scolaire' },
    date: '2026-08-30',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'بيان رسمي يتضمن التعديل المعتمد على مواعيد التحاق الأساتذة والإداريين والتلاميذ بمقاعد الدراسة للموسم الدراسي 2026-2027.',
      fr: 'Communiqué officialisant les dates ajustées de reprise des personnels administratifs, enseignants et de la rentrée des élèves pour 2026-2027.',
    },
    content: {
      ar: `أعلنت وزارة التربية الوطنية عن التعديل المحين لرزنامة الدخول المدرسي لسنة 2026-2027، محددة تواريخ استئناف العمل بالنسبة للموظفين الإداريين، الأساتذة، والتحاق التلاميذ عبر كافة التراب الوطني.

دعت الوزارة كافة المديرين والإدارات الولائية إلى التقيد الصارم بالتواريخ الجديدة وضمان جاهزية المؤسسات التربوية والكتب والمطاعم والنقل المدرسي لاستقبال المتمدرسين في أحسن الظروف.`,
      fr: `Le Ministère de l'Éducation Nationale informe la communauté éducative des nouvelles dates fixées pour la reprise du personnel administratif, des enseignants ainsi que de la rentrée effective des élèves pour l'année scolaire 2026-2027.

L'ensemble des directions académiques est appelé à veiller à la disponibilité des manuels scolaires, de la restauration et de l'accueil pédagogique dès le premier jour.`,
    },
    importantDates: [
      { label: { ar: 'تطبيق الرزنامة المعدلة للإداريين والأساتذة', fr: 'Entrée en vigueur du calendrier ajusté' }, date: '2026-09-01' },
      { label: { ar: 'موعد الالتحاق الرسمي الموحد للتلاميذ', fr: 'Date officielle de rentrée des élèves' }, date: '2026-09-21' },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يلغي البلاغ 04 المواعيد السابقة للدخول المدرسي؟',
          fr: 'Le communiqué 04 remplace-t-il les dates antérieures de rentrée ?',
        },
        answer: {
          ar: 'نعم، التواريخ الواردة في البلاغ التعديلي رقم 04 هي المعتمدة رسميا لكافة أطوار التعليم الوطني.',
          fr: 'Oui, les échéances fixées par ce réaménagement prévalent sur le planning initial pour tous les cycles.',
        },
      },
      {
        question: {
          ar: 'هل يشمل التعديل المدارس الخاصة والعمومية على حد سواء؟',
          fr: 'Ce réaménagement concerne-t-il les écoles privées et publiques ?',
        },
        answer: {
          ar: 'نعم، تخضع جميع المؤسسات التربوية العمومية والخاصة المعتمدة في الجزائر للتقويم المدرسي الرسمي الموحد.',
          fr: 'Oui, tous les établissements publics et privés agréés en Algérie suivent le calendrier unifié du Ministère.',
        },
      },
    ],
  },
  {
    id: 'notice-03',
    slug: 'notice-03',
    title: {
      ar: 'بلاغ 03: حول إعلان نتائج الامتحانات المهنية ومسابقة التوظيف على أساس الشهادة للأساتذة',
      fr: 'Communiqué 03 : Résultats des Examens Professionnels & Concours sur Titres des Enseignants',
    },
    category: { ar: 'الترقية والتوظيف', fr: 'Examens Professionnels' },
    date: '2026-08-22',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'إعلان وزارة التربية الوطنية الخاص بنشر نتائج الامتحانات المهنية للترقية ومسابقة توظيف الأساتذة على أساس الشهادة وآليات استخراج الإشعارات.',
      fr: 'Publication officielle des résultats des examens professionnels de promotion interne et du concours sur titres pour les postes d\'enseignants.',
    },
    content: {
      ar: `أفرجت وزارة التربية الوطنية عن قوائم الناجحين في الامتحانات المهنية الخاصة بمختلف رتب الأسلاك التربوية وكذا مسابقة التوظيف على أساس الشهادة للأساتذة في الأطوار التعليمية الثلاثة.

يمكن للمترشحين المعنيين الاطلاع على نتائجهم الفردية عبر الحسابات الرقمية على المنصة الرسمية الخاصة بالموارد البشرية (تحت إشراف مديريات التربية)، ثم استلام إشعارات النجاح ومقررات التعيين أو الترقية لاستكمال إجراءات التنصيب الإداري والتربوي.`,
      fr: `Le Ministère de l'Éducation Nationale a publié les listes des admis aux examens professionnels de promotion interne dans les différents corps éducatifs ainsi qu'au concours de recrutement sur titres des enseignants.

Les candidats concernés peuvent vérifier leurs résultats individuels via leur espace numérique dédié, puis retirer leurs arrêtés d'affectation ou de promotion auprès de la Direction de l'Éducation de wilaya.`,
    },
    importantDates: [
      { label: { ar: 'نشر قوائم الناجحين عبر المنصة الرقمية', fr: 'Mise en ligne des listes d’admission' }, date: '2026-08-22' },
      { label: { ar: 'استلام مقررات التعيين بمديريات التربية', fr: 'Retrait des arrêtés en wilaya' }, date: '2026-08-25' },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف يتحقق المترشح من نتيجته في مسابقة التوظيف على أساس الشهادة؟',
          fr: 'Comment le candidat consulte-t-il son résultat au concours sur titres ?',
        },
        answer: {
          ar: 'يتم الاطلاع إلكترونيا بإدخال رقم التسجيل والرقم السري على المنصة المخصصة لمديريات التربية والديوان الوطني للامتحانات والمسابقات.',
          fr: 'La consultation s’effectue en ligne avec le numéro d’inscription et le mot de passe sur la plateforme officielle du ministère.',
        },
      },
      {
        question: {
          ar: 'ما الخطوة التالية بعد إعلان النجاح في الامتحان المهني؟',
          fr: 'Quelle est la démarche après l’admission à l’examen professionnel ?',
        },
        answer: {
          ar: 'التقرب من مصلحة المستخدمين بمديرية التربية الولائية لاستلام محضر التنصيب أو قرار الترقية قبل الدخول المدرسي.',
          fr: 'Se présenter au service des personnels de la Direction de l’Éducation pour signer le procès-verbal d’installation ou de promotion.',
        },
      },
    ],
  },
  {
    id: 'notice-02',
    slug: 'notice-02',
    title: {
      ar: 'بلاغ 02: حول الرزنامة الرسمية للدخول المدرسي 2026 - 2027',
      fr: 'Communiqué 02 : Calendrier Officiel de la Rentrée Scolaire 2026 - 2027',
    },
    category: { ar: 'الدخول المدرسي', fr: 'Rentrée Scolaire' },
    date: '2026-08-15',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'البيان التأطيري لرزنامة الدخول المدرسي 2026-2027 وتواريخ استئناف الموظفين الإداريين، الأساتذة، والتحاق التلاميذ بمقاعد الدراسة.',
      fr: 'Circulaire encadrant les étapes de la rentrée scolaire 2026-2027 pour l’administration, les équipes pédagogiques et les élèves.',
    },
    content: {
      ar: `تحدد الرزنامة الرسمية للدخول المدرسي 2026-2027 المحطات التنظيمية الأساسية لاستقبال الموسم التربوي الجديد عبر كافة ولايات الوطن، بدءا بعودة الإدارة المركزية والمحلية لتجهيز المؤسسات وضبط القوائم الرقمية في الأرضية التربوية.

يلتحق الأساتذة بعد ذلك لتنظيم المجالس البيداغوجية وتوزيع الجداول الزمنية، ليُختتم البرنامج بالالتحاق الرسمي للتلاميذ في الأطوار الثلاثة مع إلقاء الدرس الافتتاحي الموحد عبر المؤسسات التعليمية.`,
      fr: `Ce communiqué officiel détaille le programme complet de préparation de la rentrée scolaire 2026-2027 sur l'ensemble du territoire national.

Il prévoit successivement la reprise des personnels administratifs pour l'aménagement des établissements, le retour des enseignants pour les conseils pédagogiques, puis la rentrée effective des élèves accompagnée du cours inaugural.`,
    },
    importantDates: [
      { label: { ar: 'استئناف الموظفين الإداريين للعمل', fr: 'Reprise des personnels administratifs' }, date: '2026-09-01' },
      { label: { ar: 'عودة الطواقم البيداغوجية والأساتذة', fr: 'Reprise des enseignants' }, date: '2026-09-08' },
      { label: { ar: 'الدخول الرسمي للتلاميذ في الأطوار الثلاثة', fr: 'Rentrée effective des élèves' }, date: '2026-09-21' },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تختلف تواريخ الالتحاق بين الموظفين الإداريين والأساتذة والتلاميذ؟',
          fr: 'Les dates de reprise diffèrent-elles entre administration, enseignants et élèves ?',
        },
        answer: {
          ar: 'نعم، تبدأ الإدارة أولا لضبط التحضيرات المادية والبيداغوجية، يليها الأساتذة لتنظيم الجداول، ثم يلتحق التلاميذ في الموعد الوطني الموحد.',
          fr: 'Oui, l’échelonnement commence par l’administration, suivi du corps enseignant pour les conseils de rentrée, puis des élèves.',
        },
      },
      {
        question: {
          ar: 'هل يمكن تعديل تاريخ الدخول المدرسي بقرار لاحق؟',
          fr: 'Le calendrier initial peut-il être ajusté par un communiqué ultérieur ?',
        },
        answer: {
          ar: 'نعم، في حال وجود مقتضيات تنظيمية تصدر الوزارة بلاغا تعديليا محينا (كما في البلاغ رقم 04).',
          fr: 'Oui, en cas de besoin organisationnel, le ministère publie un communiqué rectificatif officiel (voir Communiqué 04).',
        },
      },
    ],
  },
  {
    id: 'notice-01',
    slug: 'notice-01',
    title: {
      ar: 'بلاغ 01: حول الترتيبات البيداغوجية المتخذة للموسم الدراسي 2026 - 2027',
      fr: 'Communiqué 01 : Dispositions Pédagogiques pour la Saison Scolaire 2026 - 2027',
    },
    category: { ar: 'التوجيه البيداغوجي', fr: 'Dispositions Pédagogiques' },
    date: '2026-08-05',
    officialUrl: 'https://www.education.gov.dz/',
    summary: {
      ar: 'حزمة الترتيبات البيداغوجية المعتمدة في البرامج التعليمية، تخفيف وزن المحفظة، وتوسيع الرقمنة التربوية للموسم الدراسي 2026-2027.',
      fr: 'Ensemble des mesures pédagogiques adoptées pour l\'année 2026-2027 : allègement du cartable, programmes modernisés et généralisation des outils numériques.',
    },
    content: {
      ar: `أقرت وزارة التربية الوطنية حزمة من الترتيبات البيداغوجية والتنظيمية الموجهة لرفع جودة التعليم والتحصيل العلمي للموسم الدراسي 2026-2027 في التعليم الابتدائي والمتوسط والثانوي.

تشمل هذه الإجراءات توسيع استعمال الألواح الإلكترونية والكتاب المدرسي الرقمي لتخفيف وزن المحفظة في الطور الابتدائي، وتحديث مناهج التقييم المستمر والمرافقة البيداغوجية، وتكريس الرقمنة الكاملة للعمليات الإدارية داخل المؤسسات التربوية.`,
      fr: `Les nouvelles orientations pédagogiques arrêtées pour la saison scolaire 2026-2027 visent à consolider les apprentissages fondamentaux et à moderniser le fonctionnement des établissements.

Elles portent notamment sur l'extension des tablettes numériques et du manuel scolaire digital afin d'alléger le cartable au primaire, l'amélioration du suivi continu des acquis et la dématérialisation intégrale de la gestion scolaire.`,
    },
    importantDates: [
      { label: { ar: 'توزيع المناشير التوجيهية على مديريات التربية', fr: 'Diffusion des directives aux wilayas' }, date: '2026-08-05' },
      { label: { ar: 'تفعيل الكتب الرقمية عبر الفضاء التربوي', fr: 'Activation des manuels numériques' }, date: '2026-09-21' },
    ],
    faqs: [
      {
        question: {
          ar: 'ما أبرز أهداف الترتيبات البيداغوجية الجديدة لموسم 2026-2027؟',
          fr: 'Quels sont les principaux axes des dispositions pédagogiques 2026-2027 ?',
        },
        answer: {
          ar: 'تهدف إلى تخفيف المحفظة المدرسية عبر الكتاب الرقمي والألواح الإلكترونية، وتجويد التقييم المستمر ورقمنة التسيير التربوي.',
          fr: 'Alléger le cartable grâce aux outils numériques, renforcer l’évaluation continue et numériser la gestion des établissements.',
        },
      },
      {
        question: {
          ar: 'أين يطلع الأولياء على الكتاب المدرسي الرقمي؟',
          fr: 'Comment accéder aux manuels scolaires numériques ?',
        },
        answer: {
          ar: 'يوفر الديوان الوطني للمطبوعات المدرسية وفضاء الأولياء رابط تحميل الكتب الرقمية مجانا للتلاميذ المسجلين.',
          fr: 'Le téléchargement gratuit des manuels numériques est mis à disposition via l’ONPS et l’Espace Parents Awlyaa.',
        },
      },
    ],
  },
];
