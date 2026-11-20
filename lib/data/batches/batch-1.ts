import { SectorItem, RichGuideContent } from '../../types';

export const batch1Sectors: SectorItem[] = [
  {
    id: 'aadl',
    slug: 'aadl',
    category: 'housing',
    name: {
      ar: 'الوكالة الوطنية لتحسين السكن وتطويره (عدل)',
      fr: "Agence Nationale de l'Amélioration et du Développement du Logement (AADL)",
    },
    acronym: 'AADL',
    ministry: {
      ar: 'وزارة السكن والعمران والمدينة',
      fr: "Ministère de l'Habitat, de l'Urbanisme et de la Ville",
    },
    description: {
      ar: 'الدليل الشامل لخدمات وكالة عدل الرقمية في الجزائر: الدخول إلى منصة عدل 3، متابعة الملف السكني والطعون، تسديد فواتير الكراء الشهرية عبر الإنترنت، وتطبيقات الدفع الرسمية.',
      fr: "Guide complet des services numériques de l'AADL en Algérie : accès à la plateforme AADL 3, suivi des dossiers et recours, paiement en ligne des loyers mensuels via Gest-Immo et applications officielles.",
    },
    officialUrl: 'https://www.aadl.com.dz/',
    portalUrl: 'https://aadl.dz/relogin',
    iconName: 'Building2',
    isPopular: true,
    services: [
      {
        id: 'aadl-srv-1',
        title: {
          ar: 'الموقع الرسمي لوكالة عدل (AADL)',
          fr: "Site Officiel de l'AADL",
        },
        description: {
          ar: 'البوابة الإخبارية والإدارية الرسمية للوكالة الوطنية لتحسين السكن وتطويره لمتابعة البيانات والمناقصات.',
          fr: "Portail institutionnel de l'AADL regroupant les communiqués officiels, programmes et informations pratiques.",
        },
        url: 'https://www.aadl.com.dz/',
        isOnline: true,
      },
      {
        id: 'aadl-srv-2',
        title: {
          ar: 'منصة التسجيل والدخول عدل 3 (AADL 3)',
          fr: 'Connexion à la Plateforme AADL 3',
        },
        description: {
          ar: 'الفضاء الرقمي الخاص بمكتتبي عدل 3 لتأكيد البيانات، رفع الوثائق بصيغة PDF، ومتابعة دراسة الملف والطعون.',
          fr: 'Espace souscripteur AADL 3 pour se connecter, téléverser les pièces PDF, suivre l’étude du dossier et déposer un recours.',
        },
        url: 'https://aadl.dz/relogin',
        isOnline: true,
      },
      {
        id: 'aadl-srv-3',
        title: {
          ar: 'تسديد فاتورة الكراء الشهرية (AADL Gest-Immo)',
          fr: 'Paiement en Ligne du Loyer Mensuel (Gest-Immo)',
        },
        description: {
          ar: 'بوابة فرع التسيير العقاري لدفع مستحقات الإيجار والأعباء المشتركة إلكترونيا عبر البطاقة الذهبية أو CIB.',
          fr: 'Portail de la filiale AADL Gest-Immo pour régler vos avis d’échéance et charges mensuelles par carte Edahabia ou CIB.',
        },
        url: 'https://www.aadlgestimmo.dz/epayement/View/index.php',
        isOnline: true,
      },
      {
        id: 'aadl-srv-4',
        title: {
          ar: 'تطبيق الهاتف الرسمي AADL Mobile',
          fr: 'Application Mobile Officielle AADL Mobile',
        },
        description: {
          ar: 'تطبيق الأندرويد الرسمي لمتابعة إشعارات السكن، حالة الملف، واستلام المستجدات من وكالة عدل.',
          fr: 'Application Android officielle permettant de suivre votre dossier et de recevoir les notifications de l’agence.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.aadl.mobile',
        isOnline: true,
      },
      {
        id: 'aadl-srv-5',
        title: {
          ar: 'تطبيق بريدي موب لتسديد أقساط وكراء عدل',
          fr: 'Application BaridiMob pour le Paiement des Loyers AADL',
        },
        description: {
          ar: 'التطبيق الرسمي لبريد الجزائر الذي يتيح تسديد فواتير الكراء الشهرية وإيصالات الدفع مباشرة من الهاتف.',
          fr: 'Application officielle d’Algérie Poste permettant le règlement rapide des factures et loyers AADL depuis votre smartphone.',
        },
        url: 'https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون الجزائريون متوسطو الدخل (صيغة البيع بالإيجار) والمستفيدون المسجلون لدى فرع التسيير العقاري',
        fr: 'Citoyens algériens à revenu intermédiaire (location-vente) et bénéficiaires gérés par AADL Gest-Immo',
      },
      processingTime: {
        ar: 'معالجة آلية فورية لرفع الملفات، ودراسة ميدانية وإلكترونية حسب مراحل البرنامج والطعون',
        fr: 'Dépôt et paiement instantanés en ligne ; instruction administrative selon le calendrier du programme',
      },
      fees: {
        ar: 'التسجيل مجاني؛ تسديد الشطور المالية والأقساط الشهرية يتم حسب المساحة والموقع والمرسوم المعمول به',
        fr: 'Inscription gratuite ; versement des tranches et loyers mensuels selon le barème réglementaire du logement',
      },
      channel: {
        ar: 'منصة عدل 3 الإلكترونية، بوابة AADL Gest-Immo، وتطبيق بريدي موب',
        fr: 'Portail web AADL 3, espace e-paiement Gest-Immo et application BaridiMob',
      },
      keyRequirement: {
        ar: 'رقم التعريف الوطني NIN، رقم الضمان الاجتماعي، شروط الدخل (بين 24 ألف و12 ضعف الأجر القاعدي)، وعدم امتلاك سكن',
        fr: 'NIN à 18 chiffres, numéro de sécurité sociale, conditions de revenus et absence de propriété immobilière',
      },
    },
    requirements: [
      {
        label: {
          ar: 'شرط الجنسية وعدم الملكية',
          fr: 'Nationalité et non-propriété',
        },
        value: {
          ar: 'ألا يمتلك المكتتب أو زوجه ملكية تامة لعقار مخصص للسكن ولا قطعة أرض صالحة للبناء أو استفادة سابقة من إعانة الدولة',
          fr: 'Le souscripteur et son conjoint ne doivent posséder ni logement, ni terrain à bâtir, ni avoir bénéficié d’une aide publique',
        },
      },
      {
        label: {
          ar: 'سقف الدخل الشهري للأسرة',
          fr: 'Plafond des revenus du ménage',
        },
        value: {
          ar: 'أن يفوق الدخل الصافي المتراكم للزوجين 24.000 دج ولا يتجاوز 6 مرات الأجر الوطني الأدنى المضمون وفق الشروط السارية',
          fr: 'Revenu net mensuel cumulé du couple supérieur à 24 000 DZD et inférieur au plafond légal (6 fois le SNMG)',
        },
      },
      {
        label: {
          ar: 'معرفات التسجيل الرقمية',
          fr: 'Identifiants numériques requis',
        },
        value: {
          ar: 'رقم التعريف الوطني NIN ورقم التسجيل في الضمان الاجتماعي CNAS أو CASNOS أو CNR ورقم هاتف نقال شخصي',
          fr: 'NIN, numéro d’assuré social (CNAS, CASNOS ou CNR) et ligne téléphonique mobile personnelle active',
        },
      },
      {
        label: {
          ar: 'دفع الفواتير الشهرية (Gest-Immo)',
          fr: 'Règlement des loyers Gest-Immo',
        },
        value: {
          ar: 'رمز المستفيد أو مرجع فاتورة الكراء مع بطاقة ذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB مفعلة',
          fr: 'Référence locataire ou numéro d’avis d’échéance et carte Edahabia ou CIB activée pour le e-paiement',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أدخل إلى حسابي في منصة عدل 3 لمتابعة حالة ملفي أو رفع الوثائق؟',
          fr: 'Comment accéder à mon espace AADL 3 pour suivre mon dossier ou déposer des pièces ?',
        },
        answer: {
          ar: 'يمكنك الدخول مباشرة عبر بوابة aadl.dz/relogin بإدخال رقم التعريف الوطني NIN، رقم التسجيل الخاص بك، وكلمة المرور التي أنشأتها عند التفعيل، ثم استعراض خانة الإشعارات أو تحميل الوثائق المطلوبة بصيغة PDF.',
          fr: 'Rendez-vous sur aadl.dz/relogin et authentifiez-vous avec votre NIN, votre numéro d’inscription et votre mot de passe pour consulter l’état d’avancement ou téléverser vos justificatifs PDF.',
        },
      },
      {
        question: {
          ar: 'ما هي طريقة دفع فاتورة الكراء الشهرية لسكنات عدل عن بعد؟',
          fr: 'Comment payer mon loyer mensuel AADL en ligne sans me déplacer ?',
        },
        answer: {
          ar: 'توجه إلى بوابة الدفع الرسمية aadlgestimmo.dz، أدخل رمز الزبون المدون على وصل الإيجار، ثم اختر الدفع عبر البطاقة الذهبية أو بطاقة CIB واحتفظ بوصل التسديد الإلكتروني الذي يثبت العملية.',
          fr: 'Connectez-vous au portail aadlgestimmo.dz, saisissez votre code client figurant sur la quittance, puis validez le règlement par carte Edahabia ou CIB et téléchargez votre reçu.',
        },
      },
      {
        question: {
          ar: 'كيف أتصرف إذا تلقيت رسالة رفض مؤقت للملف في منصة عدل؟',
          fr: 'Que faire en cas de rejet temporaire ou de réserve sur mon dossier AADL ?',
        },
        answer: {
          ar: 'تتيح المنصة في فترة الطعون إيداع طعن إلكتروني مع إرفاق الوثائق التصحيحية المطلوبة (مثل كشف الراتب المحدث، شهادة عدم الملكية، أو وثيقة تثبت الوضعية العائلية) قبل انقضاء الأجل القانوني المحدد في الإشعار.',
          fr: 'La plateforme ouvre une fenêtre dédiée aux recours en ligne : consultez le motif exact dans votre espace, numérisez les justificatifs rectificatifs demandés et soumettez le recours avant la date limite.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تغيير رقم الهاتف المرتبط بحساب عدل في حالة ضياع الشريحة؟',
          fr: 'Puis-je modifier le numéro de téléphone associé à mon compte AADL ?',
        },
        answer: {
          ar: 'نعم، توفر المنصة في حال تعذر استقبال رسائل OTP خيار استعادة الحساب أو تحديث البيانات عبر نافذة خدمة الزبائن أو بالتقرب من المديرية الجهوية لعدل مرفوقا ببطاقة التعريف الوطنية ووصل التسجيل.',
          fr: 'Oui, si vous n’avez plus accès à votre numéro initial, contactez l’assistance via la plateforme ou présentez-vous à la direction régionale AADL muni de votre pièce d’identité et du récépissé d’inscription.',
        },
      },
    ],
  },
  {
    id: 'aapi',
    slug: 'aapi',
    category: 'finance_economy',
    name: {
      ar: 'الوكالة الجزائرية لترقية الاستثمار (AAPI)',
      fr: "Agence Algérienne de Promotion de l'Investissement (AAPI)",
    },
    acronym: 'AAPI',
    ministry: {
      ar: 'الوزارة الأولى — قطاع الاستثمار',
      fr: 'Premier Ministère — Promotion de l’Investissement',
    },
    description: {
      ar: 'الدليل الكامل لخدمات الوكالة الجزائرية لترقية الاستثمار AAPI: التسجيل في المنصة الرقمية للمستثمر، فضاء حامل المشروع، الحصول على شهادة تسجيل الاستثمار، الامتيازات الجبائية، والتبليغ عن العوائق.',
      fr: "Guide complet de l'Agence Algérienne de Promotion de l'Investissement (AAPI) : inscription sur la plateforme numérique de l'investisseur, espace porteur de projet, avantages fiscaux et suivi des requêtes.",
    },
    officialUrl: 'https://aapi.dz/',
    portalUrl: 'https://services.aapi.dz/login?Lang=AR',
    iconName: 'TrendingUp',
    isPopular: true,
    services: [
      {
        id: 'aapi-srv-1',
        title: {
          ar: 'الموقع الرسمي للوكالة الجزائرية لترقية الاستثمار',
          fr: "Site Officiel de l'AAPI",
        },
        description: {
          ar: 'البوابة المؤسساتية الرسمية للاطلاع على قانون الاستثمار الجديد 22-18، أنظمة التحفيز، ودليل الشباك الوحيد.',
          fr: 'Portail institutionnel présentant la loi sur l’investissement 22-18, les régimes d’incitation et les guichets uniques.',
        },
        url: 'https://aapi.dz/',
        isOnline: true,
      },
      {
        id: 'aapi-srv-2',
        title: {
          ar: 'الدخول إلى المنصة الرقمية للوكالة (Services AAPI)',
          fr: 'Connexion à la Plateforme Services AAPI',
        },
        description: {
          ar: 'فضاء المستثمر لتسجيل الدخول، إيداع طلبات تسجيل المشاريع الاستثمارية، والحصول على شهادة التسجيل إلكترونيا.',
          fr: 'Espace d’authentification pour enregistrer un projet d’investissement et suivre l’octroi des attestations en ligne.',
        },
        url: 'https://services.aapi.dz/login?Lang=AR',
        isOnline: true,
      },
      {
        id: 'aapi-srv-3',
        title: {
          ar: 'البوابة الوطنية للمستثمر (Invest.gov.dz)',
          fr: 'Portail National de l’Investisseur (Invest DZ)',
        },
        description: {
          ar: 'البوابة الرقمية الموحدة لطلب العقار الاقتصادي التابع للأملاك الخاصة للدولة ومتابعة العروض العقارية المتاحة.',
          fr: 'Guichet numérique unifié dédié à la demande de foncier économique relevant du domaine privé de l’État.',
        },
        url: 'https://invest.gov.dz/',
        isOnline: true,
      },
      {
        id: 'aapi-srv-4',
        title: {
          ar: 'فضاء حامل مشروع (Porteur de Projet)',
          fr: 'Espace Porteur de Projet AAPI',
        },
        description: {
          ar: 'نافذة مخصصة لحاملي أفكار المشاريع والمستثمرين الجدد لطلب المرافقة والتوجيه قبل تأسيس المشروع.',
          fr: 'Service en ligne destiné aux porteurs de projets pour solliciter un accompagnement et des orientations techniques.',
        },
        url: 'https://services.aapi.dz/index?service=porteur',
        isOnline: true,
      },
      {
        id: 'aapi-srv-5',
        title: {
          ar: 'منصة التبليغ عن مخالفة استثمارية',
          fr: "Signalement d'une Infraction ou Dysfonctionnement",
        },
        description: {
          ar: 'قناة رقمية رسمية للتبليغ عن أي تجاوزات أو عراقيل إدارية غير قانونية تواجه مسار المشروع الاستثماري.',
          fr: 'Canal officiel permettant de signaler tout dépassement ou blocage administratif affectant un projet.',
        },
        url: 'https://services.aapi.dz/index?service=infraction',
        isOnline: true,
      },
      {
        id: 'aapi-srv-6',
        title: {
          ar: 'طرح انشغال أو التماس إداري للمستثمرين',
          fr: 'Soumettre une Requête ou Préoccupation Investisseur',
        },
        description: {
          ar: 'استمارة إلكترونية لإرسال الاستفسارات القانونية والتقنية وطرح الانشغالات أمام مصالح الشباك الوحيد.',
          fr: 'Formulaire électronique pour adresser vos préoccupations et demandes de clarification aux services du guichet unique.',
        },
        url: 'https://services.aapi.dz/index?service=requete',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المستثمرون المحليون والأجانب، المؤسسات الاقتصادية، وأصحاب المشاريع الإنتاجية والخدماتية',
        fr: 'Investisseurs nationaux et étrangers, entreprises et porteurs de projets productifs en Algérie',
      },
      processingTime: {
        ar: 'تسجيل فوري لشهادة الاستثمار عبر المنصة، ومعالجة طلبات العقار الاقتصادي وفق الآجال التنظيمية',
        fr: 'Délivrance rapide de l’attestation d’enregistrement ; instruction des demandes de foncier selon les délais légaux',
      },
      fees: {
        ar: 'التسجيل عبر المنصة الرقمية مجاني، مع توفر أنظمة إعفاءات جبائية وجمركية بموجب القانون 22-18',
        fr: 'Enregistrement numérique gratuit ; accès aux régimes d’exonérations fiscales et douanières (Loi 22-18)',
      },
      channel: {
        ar: 'المنصة الرقمية للمستثمر AAPI، بوابة Invest.gov.dz، والشباك الوحيد الولائي',
        fr: 'Plateforme services.aapi.dz, portail foncier invest.gov.dz et Guichet Unique décentralisé',
      },
      keyRequirement: {
        ar: 'السجل التجاري، رقم التعريف الجبائي NIF، ودراسة تقنية واقتصادية للمشروع الاستثماري',
        fr: 'Registre de commerce, NIF et dossier technico-économique détaillé du projet',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الهوية القانونية والجبائية',
          fr: 'Identité juridique et fiscale',
        },
        value: {
          ar: 'مستخرج السجل التجاري الإلكتروني وبطاقة الترقيم الجبائي NIF (أو القانون الأساسي للشركة)',
          fr: 'Extrait du Registre de Commerce électronique, NIF et statuts de la société le cas échéant',
        },
      },
      {
        label: {
          ar: 'قائمة التجهيزات والتمويل',
          fr: 'Liste des équipements et financement',
        },
        value: {
          ar: 'قائمة السلع والخدمات القابلة للاستفادة من المزايا مع خطة التمويل (أموال خاصة أو قرض بنكي)',
          fr: 'Liste prévisionnelle des biens et services éligibles aux avantages ainsi que le plan de financement',
        },
      },
      {
        label: {
          ar: 'ملف طلب العقار الاقتصادي',
          fr: 'Dossier de foncier économique',
        },
        value: {
          ar: 'بطاقة تقنية للمشروع تحدد المساحة المطلوبة، طبيعة النشاط، وعدد مناصب الشغل المزمع استحداثها',
          fr: 'Fiche technique précisant la superficie sollicitée, la filière d’activité et les emplois prévus',
        },
      },
      {
        label: {
          ar: 'تأكيد الحساب الرقمي',
          fr: 'Validation du compte numérique',
        },
        value: {
          ar: 'بريد الكتروني مهني ورقم هاتف فعال للمصادقة على إيداع التصريح بالاستثمار',
          fr: 'Adresse courriel professionnelle et téléphone mobile actif pour la validation des notifications',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين منصة services.aapi.dz وبوابة invest.gov.dz؟',
          fr: 'Quelle est la différence entre services.aapi.dz et invest.gov.dz ?',
        },
        answer: {
          ar: 'تخصص بوابة invest.gov.dz لإنشاء حساب المستثمر واستعراض الأوعية العقارية الاقتصادية المتاحة وتقديم طلبات منح الامتياز، بينما تستخدم services.aapi.dz لإدارة خدمات المرافقة لحاملي المشاريع والشكاوى والطلبات المباشرة.',
          fr: 'Le portail invest.gov.dz gère l’offre publique de foncier économique et l’enregistrement des investissements, tandis que services.aapi.dz propose les formulaires d’accompagnement des porteurs de projets, requêtes et signalements.',
        },
      },
      {
        question: {
          ar: 'ما هي أبرز الامتيازات الممنوحة عبر شهادة تسجيل الاستثمار في AAPI؟',
          fr: 'Quels sont les avantages fiscaux liés à l’attestation d’enregistrement AAPI ?',
        },
        answer: {
          ar: 'يستفيد المشروع المسجل ضمن أنظمة القطاعات أو المناطق أو المشاريع المهيكلة من الإعفاء من الحقوق الجمركية والرسم على القيمة المضافة TVA أثناء مرحلة الإنجاز، ومن الإعفاء من الضريبة على أرباح الشركات IBS والرسم على النشاط خلال مرحلة الاستغلال.',
          fr: 'Selon le régime applicable (secteurs, zones ou projets structurants), l’investisseur bénéficie d’exonérations de droits de douane et de TVA en phase de réalisation, puis d’exonérations d’IBS et de taxe foncière en phase d’exploitation.',
        },
      },
      {
        question: {
          ar: 'هل يمكن للشباب حاملي الأفكار دون سجل تجاري التواصل مع الوكالة؟',
          fr: 'Un porteur de projet sans registre de commerce peut-il solliciter la plateforme ?',
        },
        answer: {
          ar: 'نعم، تتيح خدمة حامل مشروع (services.aapi.dz) توجيه المبادرين ومرافقتهم لمعرفة خطوات التأسيس والأنشطة المؤهلة قبل استكمال الإجراءات القانونية النهائية.',
          fr: 'Oui, l’espace « Porteur de Projet » permet d’orienter les promoteurs sur les formalités préalables et les dispositifs d’appui avant même la finalisation du dossier commercial.',
        },
      },
      {
        question: {
          ar: 'كيف تتم متابعة طلب العقار الاقتصادي المودع عبر المنصة؟',
          fr: 'Comment suivre une demande de foncier économique déposée en ligne ?',
        },
        answer: {
          ar: 'تتم دراسة الطلبات وفق شبكة تقييم رقمية شفافة داخل المنصة دون تدخل بشري مباشر في ترتيب النقاط، ويمكن للمستثمر الاطلاع على حالة طلبه ونتيجة التقييم والطعن إلكترونيا من حسابه.',
          fr: 'L’instruction s’effectue via une grille de notation numérique automatisée ; le suivi de l’état du dossier, la décision d’octroi et l’éventuel recours sont consultables directement depuis votre compte investisseur.',
        },
      },
    ],
  },
  {
    id: 'ade',
    slug: 'ade',
    category: 'energy_water',
    name: {
      ar: 'الجزائرية للمياه (ADE)',
      fr: 'Algérienne des Eaux (ADE)',
    },
    acronym: 'ADE',
    ministry: {
      ar: 'وزارة الري والموارد المائية',
      fr: "Ministère de l'Hydraulique",
    },
    description: {
      ar: 'دليل خدمات مؤسسة الجزائرية للمياه ADE في 44 ولاية: دفع فاتورة الماء إلكترونيا، محاكي حساب الفاتورة، الوكالة الرقمية للزبائن، تطبيق مياهي موب، والتبليغ عن التسربات والأعطاب.',
      fr: "Guide pratique des services de l'Algérienne des Eaux (ADE) : paiement en ligne de la facture d'eau, simulateur de consommation, agence numérique client, application Miyahi-Mob et signalement des fuites.",
    },
    officialUrl: 'https://www.ade.dz/ar',
    portalUrl: 'https://www.ade.dz/e-paiement/',
    iconName: 'Droplets',
    isPopular: true,
    services: [
      {
        id: 'ade-srv-1',
        title: {
          ar: 'الموقع الرسمي للجزائرية للمياه (ADE)',
          fr: "Site Officiel de l'Algérienne des Eaux (ADE)",
        },
        description: {
          ar: 'البوابة الرسمية لمؤسسة الجزائرية للمياه لمتابعة برامج التوزيع والأخبار والخدمات الإلكترونية.',
          fr: 'Portail officiel de l’ADE pour consulter les programmes de distribution, actualités et téléservices.',
        },
        url: 'https://www.ade.dz/ar',
        isOnline: true,
      },
      {
        id: 'ade-srv-2',
        title: {
          ar: 'الدفع الإلكتروني لفاتورة المياه (E-Paiement ADE)',
          fr: "Paiement en Ligne de la Facture d'Eau (ADE)",
        },
        description: {
          ar: 'تسديد فواتير استهلاك المياه الشروب عبر الإنترنت باستخدام البطاقة الذهبية أو البطاقة البنكية CIB دون رسوم إضافية.',
          fr: 'Règlement sécurisé des factures d’eau potable en ligne par carte Edahabia ou carte interbancaire CIB.',
        },
        url: 'https://www.ade.dz/e-paiement/',
        isOnline: true,
      },
      {
        id: 'ade-srv-3',
        title: {
          ar: 'محاكي حساب فاتورة المياه عبر الإنترنت',
          fr: "Simulateur de Facture d'Eau ADE",
        },
        description: {
          ar: 'أداة تفاعلية رسمية لتقدير قيمة الفاتورة استنادا إلى حجم الاستهلاك بالمتر المكعب ونوع الاشتراك.',
          fr: 'Outil officiel permettant d’estimer le montant de votre facture selon le volume consommé et la catégorie tarifaire.',
        },
        url: 'https://www.ade.dz/simuler-votre-facture',
        isOnline: true,
      },
      {
        id: 'ade-srv-4',
        title: {
          ar: 'الوكالة الرقمية — فضاء الزبون (ADE Login)',
          fr: 'Agence Numérique — Espace Client ADE',
        },
        description: {
          ar: 'حساب شخصي للاطلاع على سجل الفواتير السابقة، متابعة الاستهلاك، وتقديم طلبات الاشتراك أو التبليغ.',
          fr: 'Espace abonné pour consulter l’historique de facturation, suivre la consommation et gérer votre contrat.',
        },
        url: 'https://www.ade.dz/login',
        isOnline: true,
      },
      {
        id: 'ade-srv-5',
        title: {
          ar: 'إحصائيات وتغطية المياه في ولايتي',
          fr: "Indicateurs de l'Eau dans Ma Wilaya (ADE)",
        },
        description: {
          ar: 'متابعة مؤشرات الإنتاج والتوزيع والمنشآت المائية التابعة للجزائرية للمياه عبر مختلف الولايات.',
          fr: 'Consultation des statistiques de production, distribution et infrastructures hydrauliques par wilaya.',
        },
        url: 'https://www.ade.dz/leau-dans-ma-wilaya',
        isOnline: true,
      },
      {
        id: 'ade-srv-6',
        title: {
          ar: 'تطبيق مياهي موب الرسمي (Miyahi-Mob)',
          fr: 'Application Mobile Miyahi-Mob (ADE)',
        },
        description: {
          ar: 'تطبيق أندرويد لمتابعة الفواتير، الدفع الإلكتروني، والتبليغ الفوري بالصور عن تسربات المياه والانقطاعات.',
          fr: 'Application mobile pour régler vos factures et signaler en temps réel les fuites ou coupures sur le réseau.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.ade.adese&hl=ar',
        isOnline: true,
      },
      {
        id: 'ade-srv-7',
        title: {
          ar: 'الاتصال بمصلحة الزبائن والشكاوى (ADE Contact)',
          fr: 'Contact & Réclamations Clientèle ADE',
        },
        description: {
          ar: 'استمارة التواصل المباشر وقنوات الاتصال مع وحدات الجزائرية للمياه لمعالجة الشكاوى أو طلبات المعاينة.',
          fr: 'Formulaire officiel et coordonnées des unités de wilaya pour toute réclamation ou demande d’intervention.',
        },
        url: 'https://www.ade.dz/contact',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المشتركون المنزليون، التجار، والإدارات في الولايات المغطاة بشبكة الجزائرية للمياه ADE',
        fr: 'Abonnés domestiques, commerces et institutions des wilayas couvertes par le réseau ADE',
      },
      processingTime: {
        ar: 'تسديد فوري للفاتورة عبر الإنترنت، ومعاينة طلبات الربط أو الأعطال حسب برمجة الوحدة الولائية',
        fr: 'Validation immédiate du e-paiement ; traitement des raccordements et fuites selon le planning d’unité',
      },
      fees: {
        ar: 'استعمال البوابة والتطبيق مجاني؛ تحتسب الفاتورة وفق الأشطر التصاعدية الرسمية لاستهلاك المياه',
        fr: 'Portail gratuit ; facturation calculée selon les tranches progressives officielles (m3)',
      },
      channel: {
        ar: 'منصة الدفع ade.dz/e-paiement، تطبيق Miyahi-Mob، والوكالات التجارية الولائية (أو الرقم 1593)',
        fr: 'Portail ade.dz/e-paiement, application Miyahi-Mob et agences commerciales locales',
      },
      keyRequirement: {
        ar: 'رقم الفاتورة ومرجع الزبون المدونان على الفاتورة الورقية أو وصل الدفع السابق',
        fr: 'Numéro de facture et code client figurant sur une ancienne facture d’eau ADE',
      },
    },
    requirements: [
      {
        label: {
          ar: 'بيانات الدفع الإلكتروني',
          fr: 'Données pour le e-paiement',
        },
        value: {
          ar: 'رقم الفاتورة ورمز الزبون (Référence client) بالإضافة إلى بطاقة ذهبية أو CIB مفعلة',
          fr: 'Numéro de facture, code client et carte Edahabia ou CIB habilitée au paiement en ligne',
        },
      },
      {
        label: {
          ar: 'ملف طلب توصيل أو اشتراك جديد',
          fr: 'Dossier de nouveau branchement',
        },
        value: {
          ar: 'وثيقة تثبت الملكية أو عقد الكراء، نسخة من بطاقة التعريف الوطنية، وشهادة إقامة',
          fr: 'Titre de propriété ou bail de location, copie de la pièce d’identité et justificatif de domicile',
        },
      },
      {
        label: {
          ar: 'مراجعة الفاتورة التقديرية',
          fr: 'Rectification d’index estimé',
        },
        value: {
          ar: 'صورة واضحة لمؤشر العداد الحالي مع رقم العداد لتصحيح القراءة لدى الوكالة التجارية',
          fr: 'Photo nette de l’index affiché sur le compteur et numéro de compteur pour ajustement en agence',
        },
      },
      {
        label: {
          ar: 'التبليغ عن تسرب أو عطب',
          fr: 'Signalement de fuite réseau',
        },
        value: {
          ar: 'تحديد الموقع الدقيق (الولاية، البلدية، الحي) مع إمكانية إرفاق صورة عبر تطبيق Miyahi-Mob',
          fr: 'Localisation précise (wilaya, commune, rue) et photo facultative via l’application Miyahi-Mob',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'أين أجد رقم الفاتورة ورمز الزبون اللازمين للدفع في موقع ADE؟',
          fr: 'Où trouver le numéro de facture et le code client pour payer sur ade.dz ?',
        },
        answer: {
          ar: 'يظهر رقم الفاتورة ومرجع الزبون في الجزء العلوي من فاتورة المياه الورقية الصادرة عن الجزائرية للمياه، كما يمكنك حفظهما في تطبيق Miyahi-Mob لتسهيل الدفع الدوري.',
          fr: 'Ces deux identifiants figurent dans l’en-tête de votre facture papier ADE ; vous pouvez ensuite les enregistrer dans l’application Miyahi-Mob pour vos règlements futurs.',
        },
      },
      {
        question: {
          ar: 'هل تغطي الجزائرية للمياه ولايتي الجزائر العاصمة ووهران وقسنطينة؟',
          fr: 'L’ADE couvre-t-elle Alger, Oran et Constantine ?',
        },
        answer: {
          ar: 'لا، تتولى شركات فرعية مستقلة تسيير المياه في تلك الولايات الكبرى مثل سيال SEAAL (الجزائر وتيبازة) وسيور SEOR (وهران) وسيكو SEACO (قسنطينة)، بينما تغطي ADE باقي ولايات الوطن.',
          fr: 'Non, la gestion de l’eau dans ces grandes métropoles relève de sociétés dédiées (SEAAL à Alger/Tipaza, SEOR à Oran, SEACO à Constantine), tandis que l’ADE intervient dans les autres wilayas.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من صحة المبلغ المفوتر قبل تسديده؟',
          fr: 'Comment vérifier si le montant facturé correspond à ma consommation réelle ?',
        },
        answer: {
          ar: 'تحقق من رمز القراءة على الفاتورة لمعرفة إن كانت قراءة فعلية أو تقديرية، وقارن المؤشر الجديد بالرقم الظاهر على عداد منزلك، ثم استخدم محاكي الفاتورة على موقع ADE لحساب التكلفة التقريبية.',
          fr: 'Contrôlez l’index relevé sur la facture par rapport à l’afficheur physique de votre compteur et utilisez le simulateur officiel sur ade.dz/simuler-votre-facture.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا تم اقتطاع المبلغ من بطاقتي دون استخراج وصل الدفع في ADE؟',
          fr: 'Que faire si mon compte est débité sans affichage du reçu de paiement ?',
        },
        answer: {
          ar: 'انتظر بضع دقائق وتحقق من سجل العمليات في تطبيق بريدي موب أو ECCP، ثم تواصل مع الوكالة المحلية لـ ADE أو عبر صفحة الاتصال مرفوقا برقم المعاملة المالي لتأكيد التسوية.',
          fr: 'Vérifiez votre relevé bancaire ou BaridiMob après quelques minutes ; si l’opération apparaît débitée, transmettez la référence de transaction au service clientèle ADE via la page contact.',
        },
      },
    ],
  },
  {
    id: 'algerietelecom',
    slug: 'algerietelecom',
    category: 'telecom',
    name: {
      ar: 'اتصالات الجزائر (Algérie Télécom)',
      fr: 'Algérie Télécom (IDOOM ADSL, Fibre FTTH & 4G LTE)',
    },
    acronym: 'AT',
    ministry: {
      ar: 'وزارة البريد والمواصلات السلكية واللاسلكية',
      fr: 'Ministère de la Poste et des Télécommunications',
    },
    description: {
      ar: 'الدليل الشامل لخدمات اتصالات الجزائر الرقمية: تعبئة الإنترنت IDOOM Fibre وADSL و4G LTE، دفع فواتير الهاتف الثابت، فضاء الزبائن، طلب التحويل إلى الألياف البصرية، والإبلاغ عن الأعطال.',
      fr: "Guide complet des services en ligne d'Algérie Télécom : rechargement IDOOM Fibre, ADSL et 4G LTE, paiement des factures fixes, espace client, migration vers la fibre FTTH et signalement de pannes.",
    },
    officialUrl: 'https://www.algerietelecom.dz/ar',
    portalUrl: 'https://client.at.dz/ar',
    iconName: 'Wifi',
    isPopular: true,
    services: [
      {
        id: 'algerietelecom-srv-1',
        title: {
          ar: 'الموقع الرسمي لاتصالات الجزائر',
          fr: "Site Officiel d'Algérie Télécom",
        },
        description: {
          ar: 'البوابة الرئيسية لعروض الإنترنت المنزلي والمهني، خرائط التغطية، وخدمات الزبائن.',
          fr: 'Portail principal des offres internet résidentielles et professionnelles, promotions et services clients.',
        },
        url: 'https://www.algerietelecom.dz/ar',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-2',
        title: {
          ar: 'فضاء الزبون (تسجيل الدخول وإنشاء الحساب)',
          fr: 'Espace Client Algérie Télécom (Connexion & Inscription)',
        },
        description: {
          ar: 'إدارة اشتراكك في IDOOM، متابعة الأيام المتبقية، الاطلاع على الفواتير، وطلب خدمات الدعم.',
          fr: 'Gestion de votre abonnement IDOOM, suivi de validité, consultation des factures et demandes en ligne.',
        },
        url: 'https://client.at.dz/ar',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-3',
        title: {
          ar: 'طلب التحويل إلى الألياف البصرية (FTTH)',
          fr: 'Demande de Migration vers la Fibre Optique (FTTH)',
        },
        description: {
          ar: 'التحقق من أهلية الحي للألياف البصرية وتقديم طلب الانتقال من النحاسي ADSL إلى IDOOM Fibre.',
          fr: 'Vérification d’éligibilité de votre quartier et demande de basculement de l’ADSL vers la fibre optique.',
        },
        url: 'https://www.algerietelecom.dz/ar/page/migration-p232',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-4',
        title: {
          ar: 'الدفع الإلكتروني لتعبئة IDOOM Internet (ADSL / Fibre)',
          fr: 'Rechargement en Ligne IDOOM Internet (CIB / Edahabia)',
        },
        description: {
          ar: 'تعبئة اشتراك الإنترنت المنزلي فورا عبر البطاقة الذهبية أو بطاقة CIB دون تنقل.',
          fr: 'Rechargement instantané de votre abonnement internet fixe par carte Edahabia ou CIB.',
        },
        url: 'https://paiement.algerietelecom.dz/AR/index.php?p=internet_recharge&pr=in',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-5',
        title: {
          ar: 'الدفع الإلكتروني لتعبئة IDOOM 4G LTE',
          fr: 'Rechargement en Ligne IDOOM 4G LTE',
        },
        description: {
          ar: 'تعبئة رصيد مودم الجيل الرابع المنزلي بالباقات الشهرية عبر الدفع الإلكتروني.',
          fr: 'Rechargement direct de votre modem IDOOM 4G LTE via paiement électronique sécurisé.',
        },
        url: 'https://paiement.algerietelecom.dz/AR/index.php?p=internet_recharge&pr=4g',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-6',
        title: {
          ar: 'تعبئة الإنترنت عبر بطاقات التعبئة (Voucher)',
          fr: 'Rechargement Internet par Ticket / Carte',
        },
        description: {
          ar: 'تفعيل بطاقات وتذاكر تعبئة الإنترنت IDOOM ADSL وFibre إلكترونيا برقم الخط.',
          fr: 'Saisie des codes de cartes ou tickets de recharge IDOOM Internet en ligne.',
        },
        url: 'https://paiement.algerietelecom.dz/AR/index.php?p=voucher_internet&produit=in',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-7',
        title: {
          ar: 'تعبئة IDOOM 4G LTE ببطاقة التعبئة',
          fr: 'Rechargement IDOOM 4G LTE par Carte',
        },
        description: {
          ar: 'شحن اشتراك 4G LTE باستعمال الرمز المكون من 16 رقما المطبوع على بطاقة التعبئة.',
          fr: 'Activation des recharges 4G LTE à l’aide du code à 16 chiffres figurant sur votre carte.',
        },
        url: 'https://paiement.algerietelecom.dz/AR/index.php?p=voucher_internet&produit=4g',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-8',
        title: {
          ar: 'دفع فاتورة الهاتف الثابت',
          fr: 'Paiement de Facture Téléphone Fixe',
        },
        description: {
          ar: 'الاستعلام عن فواتير الهاتف الثابت وتسديدها إلكترونيا باستخدام رقم الهاتف ورقم الزبون.',
          fr: 'Consultation et règlement électronique des factures de téléphonie fixe.',
        },
        url: 'https://paiement.algerietelecom.dz/AR/index.php?p=facture_paiement',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-9',
        title: {
          ar: 'تسديد مستحقات وديون الهاتف الثابت',
          fr: 'Règlement des Créances Téléphone Fixe',
        },
        description: {
          ar: 'خدمة تسوية المتأخرات والمستحقات الهاتفية لتفادي تعليق الخط وإعادة تفعيله.',
          fr: 'Paiement des arriérés et créances sur ligne fixe pour rétablir le service.',
        },
        url: 'https://paiement.algerietelecom.dz/AR/index.php?p=dette_paiement',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-10',
        title: {
          ar: 'استمارة تفعيل اشتراك وتركيب مودم الألياف البصرية',
          fr: 'Signalement Raccordement Fibre Optique Sans Mise en Service',
        },
        description: {
          ar: 'استمارة خاصة بالزبائن الموصولين بشبكة الألياف البصرية دون تفعيل فعلي للخدمة أو المودم.',
          fr: 'Formulaire destiné aux clients déjà raccordés au boîtier fibre en attente d’activation du modem.',
        },
        url: 'https://www.algerietelecom.dz/ar/page/formulaire-de-signalisation-pour-les-clients-raccordes-a-la-fibre-optique-sans-mise-en-service-p315',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-11',
        title: {
          ar: 'تقديم طلب اشتراك جديد إلكترونيا',
          fr: "Demande de Nouvel Abonnement en Ligne",
        },
        description: {
          ar: 'التسجيل المسبق لطلب تركيب خط هاتف ثابت واشتراك إنترنت منزلي جديد.',
          fr: 'Pré-demande en ligne pour l’installation d’une nouvelle ligne fixe et accès internet.',
        },
        url: 'https://www.algerietelecom.dz/ar/demande-na',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-12',
        title: {
          ar: 'الإبلاغ عن عطب تقني (Dérangements)',
          fr: 'Signaler un Dérangement ou Panne Technique',
        },
        description: {
          ar: 'التصريح الإلكتروني بانقطاع الخط الهاتفي أو ضعف تدفق الإنترنت لبرمجة تدخل الفرق التقنية.',
          fr: 'Déclaration en ligne d’une coupure de ligne ou d’une panne internet pour intervention technique.',
        },
        url: 'https://www.algerietelecom.dz/ar/derangements',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-13',
        title: {
          ar: 'طلب تحويل الخط الهاتفي إلى عنوان آخر',
          fr: 'Demande de Transfert de Ligne vers une Nouvelle Adresse',
        },
        description: {
          ar: 'تقديم طلب نقل خط الهاتف والإنترنت عند تغيير مقر السكن نحو عنوان جديد في نفس الولاية.',
          fr: 'Procédure en ligne pour transférer votre ligne fixe et internet suite à un déménagement.',
        },
        url: 'https://www.algerietelecom.dz/ar/page/B7-p332',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-14',
        title: {
          ar: 'البحث عن الوكالة التجارية القريبة',
          fr: 'Trouver Mon Agence Commerciale (ACTEL)',
        },
        description: {
          ar: 'دليل جغرافي لعناوين ومواقيت عمل الوكالات التجارية لاتصالات الجزائر عبر جميع الولايات.',
          fr: 'Localisateur des agences commerciales ACTEL d’Algérie Télécom à travers les wilayas.',
        },
        url: 'https://www.algerietelecom.dz/ar/page/trouver-mon-agence-p256',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-15',
        title: {
          ar: 'اكتشف رقم هاتفك الثابت المرتبط بالألياف FTTH',
          fr: 'Retrouver Votre Numéro Fixe FTTH',
        },
        description: {
          ar: 'خدمة الاستعلام عن الرقم الهاتفي الثابت المسند لخط الألياف البصرية الخاص بك.',
          fr: 'Service permettant d’identifier le numéro de téléphone fixe attribué à votre ligne fibre.',
        },
        url: 'https://www.algerietelecom.dz/ar/page/trouver-votre-numero-de-fixe-p268',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-16',
        title: {
          ar: 'خدمة مضاعفة التدفق Week-End Boost',
          fr: 'Option Débit Week-End Boost',
        },
        description: {
          ar: 'تعرف على شروط وتفعيل عرض رفع سرعة التدفق خلال عطلة نهاية الأسبوع لمشتركي الألياف.',
          fr: 'Présentation et activation de l’option d’augmentation temporaire de débit pour le week-end.',
        },
        url: 'https://www.algerietelecom.dz/ar/particuliers/week-end-boost-prod227',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-17',
        title: {
          ar: 'تطبيق الدفع الإلكتروني E-Paiement لاتصالات الجزائر',
          fr: 'Application Mobile E-Paiement Algérie Télécom',
        },
        description: {
          ar: 'تطبيق الأندرويد الرسمي لتسديد الفواتير وشحن حسابات الإنترنت بالبطاقة البنكية أو الذهبية.',
          fr: 'Application Android dédiée au paiement des factures et recharges IDOOM par carte.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.algerietelecom.rd.e_paiement&hl=ar',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-18',
        title: {
          ar: 'تطبيق My IDOOM لإدارة الاشتراك',
          fr: 'Application Mobile My IDOOM',
        },
        description: {
          ar: 'متابعة استهلاك 4G LTE، رصيد الأيام المتبقية، تفعيل تعبئة الطوارئ Idoomly، وتقديم التبليغات.',
          fr: 'Suivi du forfait 4G LTE, jours restants, recharge de secours et signalement de pannes depuis mobile.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.at.dz&hl=ar',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-19',
        title: {
          ar: 'منصة معلم للدعم التعليمي (Moalim)',
          fr: 'Plateforme Éducative Moalim',
        },
        description: {
          ar: 'منصة رقمية لدعم التلاميذ في مختلف الأطوار الدراسية عبر دروس تفاعلية بشراكة مع اتصالات الجزائر.',
          fr: 'Plateforme de soutien scolaire numérique accessible aux élèves en partenariat avec Algérie Télécom.',
        },
        url: 'https://www.moalim-dz.net/moalim_v2/login/index.php',
        isOnline: true,
      },
      {
        id: 'algerietelecom-srv-20',
        title: {
          ar: 'بوابة المعلم / إينكيديا التعليمية',
          fr: 'Portail Éducatif Inkidia / Moalim',
        },
        description: {
          ar: 'خدمات المحتوى التعليمي والدورات التفاعلية المتاحة للزبائن عبر فضاء اتصالات الجزائر.',
          fr: 'Contenus pédagogiques numériques et formations en ligne partenaires d’Algérie Télécom.',
        },
        url: 'https://inkidia.com.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المشتركون الأفراد والمهنيون في الهاتف الثابت وIDOOM ADSL وVDSL وFibre و4G LTE',
        fr: 'Particuliers et professionnels abonnés au téléphone fixe, IDOOM ADSL/VDSL, Fibre FTTH et 4G LTE',
      },
      processingTime: {
        ar: 'تعبئة فورية في ثوان معدودة؛ دراسة طلبات التحويل للألياف والأعطال خلال أيام عمل حسب المنطقة',
        fr: 'Rechargement instantané 24h/24 ; traitement des migrations FTTH et pannes selon les équipes locales',
      },
      fees: {
        ar: 'الدفع الإلكتروني مجاني دون عمولات إضافية، وتختلف التسعيرة الشهرية حسب سرعة التدفق المختارة',
        fr: 'Paiement en ligne sans frais supplémentaires ; tarification mensuelle selon le palier de débit',
      },
      channel: {
        ar: 'فضاء الزبون client.at.dz، بوابة الدفع paiement.algerietelecom.dz، تطبيق My IDOOM، والرقم 12',
        fr: 'Espace client.at.dz, portail paiement.algerietelecom.dz, appli My IDOOM et service client 12',
      },
      keyRequirement: {
        ar: 'رقم الهاتف الثابت (أو رقم بطاقة SIM 4G)، رمز الزبون، وبطاقة الدفع الذهبية أو CIB',
        fr: 'Numéro de ligne fixe (ou numéro 4G LTE), code client et carte Edahabia ou CIB',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تعبئة الإنترنت ودفع الفواتير',
          fr: 'Rechargement et paiement',
        },
        value: {
          ar: 'رقم الهاتف الثابت المكون من 9 أرقام (أو معرف 4G LTE) مع بطاقة تعبئة أو بطاقة بنكية/ذهبية',
          fr: 'Numéro de téléphone fixe à 9 chiffres (ou identifiant 4G LTE) et carte de recharge ou CIB/Edahabia',
        },
      },
      {
        label: {
          ar: 'ملف طلب خط جديد أو نقل خط',
          fr: 'Dossier nouvelle ligne ou transfert',
        },
        value: {
          ar: 'نسخة من بطاقة التعريف الوطنية ووثيقة تثبت الإقامة (عقد ملكية، كراء، أو وصل كهرباء حديث)',
          fr: 'Copie de la pièce d’identité et justificatif de résidence (acte, bail ou facture récente)',
        },
      },
      {
        label: {
          ar: 'تفعيل خدمة تعبئة الطوارئ (Idoomly)',
          fr: 'Service de dépannage Idoomly',
        },
        value: {
          ar: 'الاتصال بالرقم 1500 أو عبر تطبيق My IDOOM للحصول على 96 ساعة إنترنت إضافية تخصم عند التعبئة القادمة',
          fr: 'Composition du 1500 ou passage par My IDOOM pour bénéficier de 96h de connexion de secours',
        },
      },
      {
        label: {
          ar: 'الإبلاغ عن الأعطال (Dérangements)',
          fr: 'Signalement de dérangement',
        },
        value: {
          ar: 'رقم الخط الثابت، رقم هاتف نقال للتواصل، وتوضيح حالة أضواء المودم (PON / LOS / DSL)',
          fr: 'Numéro de ligne fixe, téléphone de contact et état des voyants du modem (PON/LOS/DSL)',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أعبئ رصيد الإنترنت إذا انتهت صلاحية اشتراكي في وقت متأخر من الليل؟',
          fr: 'Comment recharger mon accès internet en dehors des heures d’ouverture des agences ?',
        },
        answer: {
          ar: 'يمكنك التعبئة على مدار الساعة عبر بوابة paiement.algerietelecom.dz أو تطبيق My IDOOM باستعمال البطاقة الذهبية أو CIB، كما يمكنك تفعيل تعبئة الطوارئ لمدة 96 ساعة عبر الاتصال بالرقم 1500 أو من تطبيق My IDOOM.',
          fr: 'Utilisez le portail paiement.algerietelecom.dz ou l’application My IDOOM 24h/24 avec votre carte Edahabia/CIB, ou activez le crédit de secours de 96 heures via le 1500.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من توفر خدمة الألياف البصرية FTTH في حيي؟',
          fr: 'Comment savoir si mon logement est éligible à la fibre optique FTTH ?',
        },
        answer: {
          ar: 'قم بالدخول إلى صفحة طلب التحويل نحو الألياف البصرية على موقع اتصالات الجزائر وأدخل ولايتك وعنوانك أو رقم خطك الثابت لمعرفة حالة التغطية وتقديم طلب الترقية إلكترونيا.',
          fr: 'Consultez la page de migration FTTH sur algerietelecom.dz, renseignez votre wilaya et votre ligne fixe pour vérifier l’éligibilité technique de votre secteur et déposer une demande.',
        },
      },
      {
        question: {
          ar: 'ما العمل عند انقطاع الإشارة وظهور الضوء الأحمر LOS في مودم الألياف البصرية؟',
          fr: 'Que faire lorsque le voyant rouge LOS clignote sur mon modem fibre optique ?',
        },
        answer: {
          ar: 'تأكد أولا من سلامة توصيل الكابل البصري دون ثنيه بحدة، ثم أعد تشغيل المودم. إذا استمر الوميض الأحمر، قدم تبليغا فوريا عبر صفحة الإبلاغ عن الأعطال أو اتصل بالرقم 12 لمعالجة انقطاع الخط.',
          fr: 'Vérifiez que la jarretière optique est bien enclenchée et non pliée, puis redémarrez l’équipement. Si le voyant LOS reste rouge, déclarez immédiatement le dérangement en ligne ou au 12.',
        },
      },
      {
        question: {
          ar: 'كيف أحصل على فاتورة الإنترنت الخاصة بمشترك مهني أو منزلي لطباعتها؟',
          fr: 'Comment télécharger mon reçu ou ma facture d’abonnement Algérie Télécom ?',
        },
        answer: {
          ar: 'سجل الدخول إلى فضاء الزبون client.at.dz برقم خطك الثابت وكلمة المرور، وستجد قسم الفواتير والتعبئات الذي يسمح بتحميل وصولات الدفع والفواتير بصيغة PDF.',
          fr: 'Connectez-vous à votre espace client.at.dz avec votre numéro fixe et mot de passe pour consulter et télécharger l’ensemble de vos factures et reçus PDF.',
        },
      },
    ],
  },
  {
    id: 'anae',
    slug: 'anae',
    category: 'social_labor',
    name: {
      ar: 'الوكالة الوطنية للمقاول الذاتي (ANAE)',
      fr: "Agence Nationale de l'Auto-Entrepreneur (ANAE)",
    },
    acronym: 'ANAE',
    ministry: {
      ar: 'وزارة اقتصاد المعرفة والمؤسسات الناشئة والمؤسسات المصغرة',
      fr: "Ministère de l'Économie de la Connaissance, des Start-up et des Micro-entreprises",
    },
    description: {
      ar: 'الدليل الكامل لاستخراج بطاقة المقاول الذاتي عبر منصة الوكالة الوطنية للمقاول الذاتي ANAE: شروط الأهلية، قائمة الأنشطة المؤهلة، نظام الضريبة الجزافية الوحيدة IFU 0.5%، والضمان الاجتماعي CASNOS.',
      fr: "Guide complet de la carte d'auto-entrepreneur via la plateforme officielle ANAE : critères d'éligibilité, nomenclature des activités, régime fiscal IFU 0,5 %, affiliation CASNOS et suivi de la demande.",
    },
    officialUrl: 'https://anae.dz/',
    portalUrl: 'https://anae.dz/user/ae/register/',
    iconName: 'Briefcase',
    isPopular: true,
    services: [
      {
        id: 'anae-srv-1',
        title: {
          ar: 'الموقع الرسمي للوكالة الوطنية للمقاول الذاتي (ANAE)',
          fr: "Portail Officiel de l'ANAE",
        },
        description: {
          ar: 'التعرف على القانون الأساسي للمقاول الذاتي، قائمة الأنشطة السبعة الكبرى، والتواصل مع الوكالة.',
          fr: 'Consultation du statut juridique de l’auto-entrepreneur, de la nomenclature des activités éligibles et de la FAQ officielle.',
        },
        url: 'https://anae.dz/',
        isOnline: true,
      },
      {
        id: 'anae-srv-2',
        title: {
          ar: 'منصة طلب واستخراج بطاقة المقاول الذاتي',
          fr: "Demande et Enregistrement de la Carte d'Auto-Entrepreneur",
        },
        description: {
          ar: 'بوابة التسجيل الإلكتروني بالرقم الوطني NIN لإنشاء ملف المقاول الذاتي واستلام البطاقة الرقمية.',
          fr: 'Portail d’inscription en ligne via le NIN pour déposer votre dossier et obtenir votre carte professionnelle.',
        },
        url: 'https://anae.dz/user/ae/register/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الشباب والمستقلون الممارسون لنشاط مربح بصفة فردية (الاستشارات، الرقمنة، الخدمات، التكوين، الثقافة)',
        fr: 'Travailleurs indépendants et freelances exerçant une activité individuelle dans les services numériques, conseil ou artisanat intellectuel',
      },
      processingTime: {
        ar: 'معالجة رقمية ميسرة للطلب بعد التحقق من البيانات واستيفاء الشروط خلال أيام عمل قليلة',
        fr: 'Instruction dématérialisée rapide du dossier avec délivrance numérique dès validation',
      },
      fees: {
        ar: 'التسجيل والبطاقة مجانيان؛ يخضع النشاط لضريبة جزافية وحيدة تفضيلية بنسبة 0.5% واشتراك CASNOS سنوي ميسر',
        fr: 'Inscription gratuite ; régime fiscal préférentiel IFU à 0,5 % du chiffre d’affaires et couverture CASNOS adaptée',
      },
      channel: {
        ar: 'البوابة الرقمية الرسمية للوكالة الوطنية للمقاول الذاتي anae.dz',
        fr: 'Plateforme officielle 100 % en ligne anae.dz',
      },
      keyRequirement: {
        ar: 'بلوغ سن العمل القانوني، الجنسية الجزائرية أو إقامة قانونية، NIN، ورقم أعمال سنوي لا يتجاوز 5 ملايين دج',
        fr: 'Majorité légale, nationalité algérienne ou résidence régulière, NIN et chiffre d’affaires annuel plafonné à 5 000 000 DZD',
      },
    },
    requirements: [
      {
        label: {
          ar: 'شروط الهوية والأهلية',
          fr: 'Conditions d’âge et de résidence',
        },
        value: {
          ar: 'بلوغ سن الرشد القانوني والتمتع بالجنسية الجزائرية أو الإقامة القانونية مع عدم ممارسة المهن الحرة المقننة (كالمحامي والطبيب)',
          fr: 'Être majeur de nationalité algérienne (ou résident légal) et ne pas exercer une profession libérale ou artisanale réglementée',
        },
      },
      {
        label: {
          ar: 'سقف رقم الأعمال السنوي',
          fr: 'Plafond de chiffre d’affaires',
        },
        value: {
          ar: 'ألا يتعدى رقم الأعمال السنوي المحقق من النشاط خمسة ملايين دينار جزائري (5.000.000 دج)',
          fr: 'Chiffre d’affaires annuel n’excédant pas 5 millions de dinars algériens (5 000 000 DZD)',
        },
      },
      {
        label: {
          ar: 'الوثائق الرقمية المطلوبة',
          fr: 'Pièces numériques à fournir',
        },
        value: {
          ar: 'رقم التعريف الوطني NIN، صورة شمسية رقمية بخلفية بيضاء، وتحديد رمز النشاط بدقة من قائمة ANAE',
          fr: 'Numéro NIN, photo d’identité numérique conforme et sélection du code d’activité dans la nomenclature ANAE',
        },
      },
      {
        label: {
          ar: 'الالتزامات الجبائية والاجتماعية',
          fr: 'Obligations fiscales et sociales',
        },
        value: {
          ar: 'طلب الترقيم الجبائي NIF وإصدار الفواتير قانونيا مع الانتساب الإلزامي لصندوق الضمان الاجتماعي CASNOS',
          fr: 'Obtention du NIF pour la facturation légale et affiliation obligatoire auprès de la caisse CASNOS',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن للموظف الأجير في القطاع العام أو الخاص الحصول على بطاقة المقاول الذاتي؟',
          fr: 'Un salarié peut-il obtenir la carte d’auto-entrepreneur en Algérie ?',
        },
        answer: {
          ar: 'نعم، يسمح القانون للموظفين والأجراء بالجمع بين الوظيفة ونشاط المقاول الذاتي في مجالات الاستشارة والرقمنة والخدمات وفق الضوابط التنظيمية التي تحفظ عدم تضارب المصالح أو استغلال أوقات العمل الرسمية.',
          fr: 'Oui, le dispositif permet aux salariés du secteur privé et à certaines catégories de cumuler une activité indépendante de services ou numérique, sous réserve de respecter la réglementation sur la non-concurrence et les horaires de travail.',
        },
      },
      {
        question: {
          ar: 'ما هي المزايا الجبائية لبطاقة المقاول الذاتي مقارنة بالسجل التجاري التقليدي؟',
          fr: 'Quels sont les avantages fiscaux par rapport à un registre de commerce classique ?',
        },
        answer: {
          ar: 'يعفى المقاول الذاتي من استئجار محل تجاري ومن مسك المحاسبة المعقدة، كما يستفيد من نظام الضريبة الجزافية الوحيدة IFU بنسبة مخفضة جدا تبلغ 0.5% فقط من رقم الأعمال السنوي المصرح به لدى مصالح الضرائب.',
          fr: 'L’auto-entrepreneur est dispensé de local commercial et de comptabilité lourde ; il bénéficie d’un taux d’Impôt Forfaitaire Unique (IFU) très avantageux de 0,5 % sur son chiffre d’affaires encaissé.',
        },
      },
      {
        question: {
          ar: 'هل تتيح البطاقة فتح حساب بنكي تجاري واستقبال عائدات التصدير بالعملة الصعبة؟',
          fr: 'La carte permet-elle d’ouvrir un compte commercial et de facturer des clients à l’étranger ?',
        },
        answer: {
          ar: 'نعم، تمكن بطاقة المقاول الذاتي صاحبها من فتح حساب بنكي تجاري بالدينار أو بالعملة الصعبة لدى البنوك الجزائرية واستقبال مستحقات تصدير الخدمات الرقمية بشكل قانوني كامل وفق تنظيم بنك الجزائر.',
          fr: 'Oui, elle donne droit à l’ouverture d’un compte bancaire commercial en DZD et en devises pour facturer légalement des prestations numériques en Algérie ou à l’export selon la réglementation de la Banque d’Algérie.',
        },
      },
      {
        question: {
          ar: 'كيف يتم حساب اشتراك الضمان الاجتماعي CASNOS لحاملي بطاقة المقاول الذاتي؟',
          fr: 'Comment fonctionne la cotisation CASNOS pour un auto-entrepreneur ?',
        },
        answer: {
          ar: 'بمجرد استخراج البطاقة والانتساب إلى CASNOS، يستفيد المقاول الذاتي من التغطية الصحية وبطاقة الشفاء والتقاعد وفق الحد الأدنى المعتمد للنظام السنوي مع إمكانية الدفع الإلكتروني عبر منصة ضمانكم.',
          fr: 'L’affiliation à la CASNOS ouvre droit à l’assurance maladie, à la carte Chifa et à la retraite avec un barème annuel adapté dont le règlement peut s’effectuer en ligne sur Damancom.',
        },
      },
    ],
  },
  {
    id: 'anem',
    slug: 'anem',
    category: 'social_labor',
    name: {
      ar: 'الوكالة الوطنية للتشغيل (ANEM)',
      fr: "Agence Nationale de l'Emploi (ANEM)",
    },
    acronym: 'ANEM',
    ministry: {
      ar: 'وزارة العمل والتشغيل والضمان الاجتماعي',
      fr: "Ministère du Travail, de l'Emploi et de la Sécurité Sociale",
    },
    description: {
      ar: 'الدليل الشامل لخدمات الوكالة الوطنية للتشغيل ANEM: التسجيل في منحة البطالة عبر منصة منحة، تمديد طلب العمل في وسيط أونلاين، منصة فرصتي، وتطبيقات التشغيل الرسمية.',
      fr: "Guide complet des services numériques de l'ANEM : préinscription à l'allocation chômage (Minha), prolongation de la demande d'emploi (Wassit Online), offres d'emploi Forssati et applications officielles.",
    },
    officialUrl: 'https://www.anem.dz/',
    portalUrl: 'https://minha.anem.dz/pre_inscription',
    iconName: 'Briefcase',
    isPopular: true,
    services: [
      {
        id: 'anem-srv-1',
        title: {
          ar: 'الموقع الرسمي للوكالة الوطنية للتشغيل (ANEM)',
          fr: "Site Officiel de l'ANEM",
        },
        description: {
          ar: 'البوابة الرسمية لعروض العمل، إعلانات التوظيف، والشبكة الوطنية للملحقات المحلية للتشغيل.',
          fr: 'Portail officiel regroupant les actualités de l’emploi, les dispositifs d’insertion et le réseau des agences.',
        },
        url: 'https://www.anem.dz/',
        isOnline: true,
      },
      {
        id: 'anem-srv-2',
        title: {
          ar: 'منصة التسجيل في منحة البطالة (منحة Minha)',
          fr: "Inscription à l'Allocation Chômage (Minha)",
        },
        description: {
          ar: 'التسجيل الأولي، التحقق من الأهلية الآلية، وحجز موعد المقابلة مع مستشار التشغيل.',
          fr: 'Préinscription en ligne, vérification automatique d’éligibilité et prise de rendez-vous en agence.',
        },
        url: 'https://minha.anem.dz/pre_inscription',
        isOnline: true,
      },
      {
        id: 'anem-srv-3',
        title: {
          ar: 'تمديد طلب العمل ومنحة البطالة (وسيط أونلاين)',
          fr: "Prolongation de la Demande d'Emploi (Wassit Online)",
        },
        description: {
          ar: 'التجديد الدوري لطلب العمل كل 6 أشهر إلكترونيا للحفاظ على فعالية التسجيل وصرف المنحة.',
          fr: 'Renouvellement semestriel en ligne de votre demande d’emploi pour maintenir vos droits actifs.',
        },
        url: 'https://wassitonline.anem.dz/postulation/prolongationDemande',
        isOnline: true,
      },
      {
        id: 'anem-srv-4',
        title: {
          ar: 'منصة فرصتي للتقدم لعروض العمل',
          fr: "Plateforme Forssati — Postuler aux Offres d'Emploi",
        },
        description: {
          ar: 'الدخول إلى فضاء طالب العمل للترشح إلكترونيا لعروض الشغل المطابقة لمؤهلاتك العلمية والمهنية.',
          fr: 'Espace candidat permettant de postuler directement aux offres d’emploi publiées par les entreprises.',
        },
        url: 'https://auth.anem.dz/Account/Login',
        isOnline: true,
      },
      {
        id: 'anem-srv-5',
        title: {
          ar: 'فضاء إعلانات وفرص العمل الوطنية',
          fr: "Annonces et Opportunités d'Emploi ANEM",
        },
        description: {
          ar: 'استعراض عروض الشغل المفتوحة في القطاعات الاقتصادية والمؤسسات العمومية والخاصة عبر الولايات.',
          fr: 'Consultation des offres d’emploi disponibles dans les secteurs public et privé par wilaya.',
        },
        url: 'https://www.anem.dz/opportunites/ar.html',
        isOnline: true,
      },
      {
        id: 'anem-srv-6',
        title: {
          ar: 'تطبيق ANEM-Dz الرسمي للأندرويد',
          fr: 'Application Mobile ANEM-Dz (APK Officiel)',
        },
        description: {
          ar: 'النسخة الرسمية المحمولة لتتبع ملف التسجيل في الوكالة الوطنية للتشغيل والإشعارات.',
          fr: 'Application Android officielle pour suivre votre inscription et recevoir les alertes ANEM.',
        },
        url: 'https://www.anem.dz/app_mobile/Name.apk',
        isOnline: true,
      },
      {
        id: 'anem-srv-7',
        title: {
          ar: 'تطبيق Mon Agence للبحث عن الملحقة المحلية',
          fr: 'Application Mon Agence ANEM (APK)',
        },
        description: {
          ar: 'تحديد موقع وعنوان الملحقة المحلية للتشغيل الأقرب إلى مقر إقامتك عبر التراب الوطني.',
          fr: 'Localisation géographique de l’agence locale pour l’emploi la plus proche de votre domicile.',
        },
        url: 'https://www.anem.dz/app_mobile/Mon_agence.apk',
        isOnline: true,
      },
      {
        id: 'anem-srv-8',
        title: {
          ar: 'تطبيق Mon Offre لمتابعة عروض العمل',
          fr: 'Application Mon Offre ANEM (APK)',
        },
        description: {
          ar: 'تصفح عروض العمل الجديدة وتلقي تنبيهات فورية حسب تخصصك المهني وولايتك.',
          fr: 'Consultation en temps réel des offres d’emploi adaptées à votre profil et votre wilaya.',
        },
        url: 'https://www.anem.dz/app_mobile/Mon_offre.apk',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'طالبو العمل الجزائريون المقيمون المسجلون كطالبي شغل لأول مرة أو المستفيدون من منحة البطالة (19-40 سنة)',
        fr: 'Demandeurs d’emploi algériens résidents inscrits à l’ANEM et candidats à l’allocation chômage (19-40 ans)',
      },
      processingTime: {
        ar: 'التحقق الأولي عبر منصة منحة فوري، وتحديد موعد المقابلة بالملحقة المحلية خلال أيام عمل',
        fr: 'Vérification automatique instantanée sur Minha ; rendez-vous en agence fixé sous quelques jours',
      },
      fees: {
        ar: 'كافة خدمات التسجيل والتمديد والوساطة مجانية بالكامل؛ قيمة منحة البطالة تصب شهريا في الحساب البريدي CCP',
        fr: 'Tous les services ANEM sont gratuits ; l’allocation chômage est versée mensuellement sur CCP',
      },
      channel: {
        ar: 'منصة منحة minha.anem.dz، منصة وسيط أونلاين، الملحقات المحلية للتشغيل، وتطبيقات ANEM',
        fr: 'Portail minha.anem.dz, Wassit Online, agences locales ALEM et applications mobiles ANEM',
      },
      keyRequirement: {
        ar: 'رقم بطاقة التعريف الوطنية، رقم التعريف الوطني NIN، رقم التسجيل في وسيط، وصك بريدي مشطوب',
        fr: 'NIN, numéro d’inscription Wassit actif, RIB/CCP personnel et absence d’autre source de revenu',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التسجيل الأولي في وسيط (Wassit)',
          fr: 'Inscription active sur Wassit',
        },
        value: {
          ar: 'يجب أن يكون طالب الشغل مسجلا كطالب عمل فعال في الوكالة المحلية والحصول على رقم التسجيل في وسيط',
          fr: 'Disposer d’une demande d’emploi active auprès de l’agence locale et de son numéro Wassit',
        },
      },
      {
        label: {
          ar: 'شروط الأهلية لمنحة البطالة',
          fr: 'Critères d’éligibilité Minha',
        },
        value: {
          ar: 'السن بين 19 و40 سنة، الجنسية والإقامة بالجزائر، عدم وجود أي دخل أو انتساب نشط لـ CNAS أو CASNOS، وتسوية الوضعية تجاه الخدمة الوطنية',
          fr: 'Âge entre 19 et 40 ans, résidence en Algérie, aucun revenu ni affiliation active CNAS/CASNOS et situation régulière vis-à-vis du service national',
        },
      },
      {
        label: {
          ar: 'الوثائق المطلوبة يوم المقابلة',
          fr: 'Pièces pour l’entretien en agence',
        },
        value: {
          ar: 'وصل الموعد المطبوع من المنصة، بطاقة التعريف البيومترية، شهادة المؤهل العلمي أو التكوين، وصك بريدي CCP مشطوب باسم المعني',
          fr: 'Convocation imprimée, pièce biométrique, copie du diplôme ou attestation de formation et chèque CCP barré',
        },
      },
      {
        label: {
          ar: 'شرط التمديد كل 6 أشهر',
          fr: 'Renouvellement tous les 6 mois',
        },
        value: {
          ar: 'تجديد طلب العمل في منصة وسيط أونلاين قبل انتهاء مدة 180 يوما لتجنب التوقف التلقائي للمنحة',
          fr: 'Prolongation obligatoire en ligne sur Wassit avant l’expiration des 180 jours sous peine de suspension',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أقوم بتمديد التسجيل في منحة البطالة وطلب العمل عن بعد؟',
          fr: 'Comment prolonger ma demande d’emploi et mon allocation chômage en ligne ?',
        },
        answer: {
          ar: 'ادخل إلى رابط التمديد في منصة وسيط أونلاين (wassitonline.anem.dz/postulation/prolongationDemande)، أدخل رقم بطاقة التعريف الوطنية ورقم التسجيل في الوكالة، ثم اضغط على تأكيد التمديد واحفظ الوصل الجديد.',
          fr: 'Accédez à wassitonline.anem.dz/postulation/prolongationDemande, renseignez votre NIN et votre numéro d’inscription ANEM, puis validez la prolongation et conservez l’attestation générée.',
        },
      },
      {
        question: {
          ar: 'ما أسباب تعليق منحة البطالة وكيف يمكنني تسوية الوضعية؟',
          fr: 'Quels sont les motifs de suspension de l’allocation chômage et comment régulariser ?',
        },
        answer: {
          ar: 'يحدث التعليق غالبا بسبب انتهاء صلاحية طلب العمل دون تمديده، رفض عرضي عمل مناسبين، التغيب عن دورة تكوين مهني، أو تسجيل دخل لدى الضمان الاجتماعي. للتسوية، تقرب من الملحقة المحلية للتشغيل مرفوقا بالوثائق المثبتة.',
          fr: 'La suspension survient généralement suite au non-renouvellement semestriel sur Wassit, au refus de deux offres d’emploi, à l’absence à une formation ou à une reprise d’activité déclarée. Présentez-vous à votre agence locale avec les justificatifs.',
        },
      },
      {
        question: {
          ar: 'هل يمكن للمتزوجين الاستفادة من منحة البطالة؟',
          fr: 'Une personne mariée peut-elle bénéficier de l’allocation chômage ?',
        },
        answer: {
          ar: 'لا يمكن الاستفادة إذا كان الزوج أو الزوجة يمتلك دخلا منتظما أو وظيفة أو نشاطا مهنيا مصرحا به، بينما تقبل الملفات التي يثبت فيها أن كلا الزوجين بدون أي دخل.',
          fr: 'L’allocation n’est pas accordée si le conjoint perçoit un revenu ou exerce une activité déclarée ; elle demeure accessible uniquement si aucun des deux conjoints ne dispose de ressources.',
        },
      },
      {
        question: {
          ar: 'كيف أتابع عروض العمل عبر منصة فرصتي دون زيارة الملحقة؟',
          fr: 'Comment postuler aux offres d’emploi via la plateforme Forssati ?',
        },
        answer: {
          ar: 'سجل الدخول إلى منصة auth.anem.dz باستعمال بيانات حساب وسيط، أكمل سيرتك الذاتية ومستواك الدراسي، ثم اختر العروض المتوفرة في ولايتك واضغط على الترشح المباشر.',
          fr: 'Connectez-vous sur auth.anem.dz avec vos identifiants Wassit, mettez à jour votre profil de compétences et postulez en un clic aux offres correspondant à votre wilaya.',
        },
      },
    ],
  },
  {
    id: 'anpdp',
    slug: 'anpdp',
    category: 'justice_interior',
    name: {
      ar: 'السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP)',
      fr: 'Autorité Nationale de Protection des Données à Caractère Personnel (ANPDP)',
    },
    acronym: 'ANPDP',
    ministry: {
      ar: 'هيئة وطنية مستقلة — القانون 18-07',
      fr: 'Autorité Administrative Indépendante — Loi 18-07',
    },
    description: {
      ar: 'دليل خدمات السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي ANPDP في الجزائر: تقديم الشكاوى والطعون حول استغلال البيانات بدون إذن، الامتثال لأحكام القانون 18-07، وطلبات المواعيد والاستشارة القانونية.',
      fr: "Guide complet de l'ANPDP en Algérie : dépôt de plaintes en cas d'utilisation abusive de vos données personnelles, mise en conformité à la loi 18-07, demandes de rendez-vous et assistance réglementaire.",
    },
    officialUrl: 'https://anpdp.dz/ar/',
    portalUrl: 'https://plaintes.anpdp.dz/',
    iconName: 'ShieldCheck',
    isPopular: false,
    services: [
      {
        id: 'anpdp-srv-1',
        title: {
          ar: 'الموقع الرسمي للسلطة الوطنية لحماية المعطيات (ANPDP)',
          fr: "Site Officiel de l'ANPDP",
        },
        description: {
          ar: 'البوابة المرجعية للاطلاع على نصوص القانون 18-07، المداولات، إجراءات التصريح بالمعالجة للمؤسسات، والأسئلة القانونية.',
          fr: 'Portail officiel regroupant les textes de la loi 18-07, les délibérations, les formulaires de déclaration et guides de conformité.',
        },
        url: 'https://anpdp.dz/ar/',
        isOnline: true,
      },
      {
        id: 'anpdp-srv-2',
        title: {
          ar: 'منصة تقديم الشكاوى والاحتجاجات الإلكترونية',
          fr: 'Portail de Dépôt de Plaintes et Réclamations',
        },
        description: {
          ar: 'خدمة إلكترونية لرفع شكوى أو طعن أو احتجاج ضد أي جهة استغلت معطياتك الشخصية دون موافقة صريحة، أو لطلب موعد وإرسال مراسلة ممسوحة ضوئيا.',
          fr: 'Téléservice permettant aux citoyens de déposer une plainte ou réclamation pour traitement illicite de données personnelles et de solliciter un rendez-vous.',
        },
        url: 'https://plaintes.anpdp.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'كافة المواطنين لحماية خصوصيتهم، والمؤسسات والهيئات العمومية والخاصة المعالجة للبيانات في الجزائر',
        fr: 'Citoyens souhaitant protéger leurs données personnelles, ainsi que les organismes publics et privés responsables de traitement',
      },
      processingTime: {
        ar: 'إيداع فوري للشكوى عبر البوابة، ودراسة قانونية وتقنية من مصالح السلطة مع إشعار المعني بالمآل',
        fr: 'Dépôt immédiat en ligne ; instruction juridique et technique par les services de l’ANPDP selon la nature du dossier',
      },
      fees: {
        ar: 'تقديم الشكاوى وطلبات الاستشارة القانونية والتوجيه مجاني بالكامل للمواطنين',
        fr: 'Le dépôt des plaintes et les demandes d’orientation juridique sont entièrement gratuits',
      },
      channel: {
        ar: 'بوابة الشكاوى plaintes.anpdp.dz والموقع الرسمي anpdp.dz',
        fr: 'Portail plaintes.anpdp.dz et plateforme institutionnelle anpdp.dz',
      },
      keyRequirement: {
        ar: 'بيانات الهوية الدقيقة، وصف الوقائع أو الاستغلال غير المشروع، وإرفاق الأدلة الرقمية الممسوحة ضوئيا',
        fr: 'Identité vérifiée du requérant, exposé précis des faits et pièces justificatives numérisées',
      },
    },
    requirements: [
      {
        label: {
          ar: 'موضوع الشكوى أو الاحتجاج',
          fr: 'Objet de la plainte ou requête',
        },
        value: {
          ar: 'تحديد الجهة المعنية ونوع المعطيات المستغلة دون إذن (صور، أرقام هواتف، بيانات صحية أو بنكية) وفق القانون 18-07',
          fr: 'Identification de l’organisme mis en cause et nature des données exploitées sans consentement selon la loi 18-07',
        },
      },
      {
        label: {
          ar: 'الوثائق والمراسلات الممسوحة ضوئيا',
          fr: 'Pièces et preuves numérisées',
        },
        value: {
          ar: 'لقطات شاشة، مراسلات ممسوحة ضوئيا (Scanned)، أو أي إثبات يفيد رفض الجهة تصحيح أو مسح بياناتك',
          fr: 'Captures d’écran, courriers scannés ou preuves de refus de rectification ou de suppression de vos données',
        },
      },
      {
        label: {
          ar: 'طلبات الموعد والاستشارات القانونية',
          fr: 'Demandes de rendez-vous et avis juridiques',
        },
        value: {
          ar: 'تحديد طبيعة الطلب (استشارة حول القانون 18-07، موعد إداري، أو تبليغ عن عطب تقني بالبوابة)',
          fr: 'Précision de l’objet : interrogation juridique sur la loi 18-07, demande de rendez-vous ou incident technique',
        },
      },
      {
        label: {
          ar: 'بيانات التواصل للتتبع',
          fr: 'Coordonnées de suivi',
        },
        value: {
          ar: 'رقم الهاتف الشخصي والبريد الإلكتروني الصحيح لتلقي رقم ملف الشكوى والردود الرسمية للسلطة',
          fr: 'Numéro de téléphone et courriel valides pour la réception du récépissé et des notifications de suivi',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'متى يحق للمواطن تقديم شكوى أمام السلطة الوطنية ANPDP؟',
          fr: 'Dans quels cas un citoyen peut-il saisir l’ANPDP ?',
        },
        answer: {
          ar: 'يحق لك رفع شكوى عند جمع أو نشر أو معالجة معطياتك الشخصية (مثل الصورة، رقم الهاتف، رقم الهوية أو الملف الطبي) دون موافقتك المسبقة، أو عند رفض جهة ما تمكينك من حق الولوج أو التصحيح أو الاعتراض المنصوص عليه في القانون 18-07.',
          fr: 'Vous pouvez saisir l’ANPDP si vos données personnelles (image, téléphone, numéro d’identité, données de santé) sont collectées ou diffusées sans votre consentement, ou si un organisme refuse votre droit d’accès, de rectification ou d’opposition prévu par la loi 18-07.',
        },
      },
      {
        question: {
          ar: 'هل تشمل بوابة ANPDP طرح الانشغالات القانونية حول تطبيق القانون 18-07؟',
          fr: 'Peut-on solliciter l’ANPDP pour des éclaircissements juridiques sur la loi 18-07 ?',
        },
        answer: {
          ar: 'نعم، تتيح البوابة قنوات رسمية لطرح الاستفسارات القانونية حول التزامات المسؤولين عن المعالجة وطرق الامتثال لأحكام القانون 18-07، بالإضافة إلى طلب المواعيد وإرسال المراسلات الرسمية الممسوحة ضوئيا.',
          fr: 'Oui, la plateforme permet d’adresser des demandes d’éclaircissement juridique concernant les obligations de conformité à la loi 18-07, de demander un rendez-vous ou de transmettre des correspondances scannées.',
        },
      },
      {
        question: {
          ar: 'ما هي التزامات الشركات والمواقع الإلكترونية الجزائرية تجاه القانون 18-07؟',
          fr: 'Quelles sont les obligations des entreprises et sites web algériens sous la loi 18-07 ?',
        },
        answer: {
          ar: 'يتعين على كل هيئة أو مؤسسة تعالج بيانات الزبائن أو الموظفين التصريح بالمعالجة لدى ANPDP، الحصول على الموافقة الصريحة للمعنيين، تأمين البيانات تقنيا، وعدم نقلها إلى خارج الجزائر دون ترخيص مسبق.',
          fr: 'Tout responsable de traitement doit déclarer ses fichiers auprès de l’ANPDP, recueillir le consentement explicite des usagers, sécuriser les bases de données et obtenir une autorisation avant tout transfert à l’étranger.',
        },
      },
      {
        question: {
          ar: 'كيف أبلغ عن مشكل تقني أثناء استخدام البوابة الرقمية للسلطة؟',
          fr: 'Comment signaler un problème technique sur le portail numérique de l’ANPDP ?',
        },
        answer: {
          ar: 'يمكنك عبر المنصة نفسها اختيار فئة المشاكل التقنية ووصف الخلل الذي واجهته مع إرفاق صورة للرسالة الظاهرة ليتم علاجه من طرف الفريق التقني للسلطة.',
          fr: 'Vous pouvez sélectionner la rubrique dédiée aux incidents techniques directement sur le portail, décrire l’anomalie rencontrée et joindre une capture d’écran pour prise en charge.',
        },
      },
    ],
  },
  {
    id: 'arpce',
    slug: 'arpce',
    category: 'telecom',
    name: {
      ar: 'سلطة ضبط البريد والاتصالات الإلكترونية (ARPCE)',
      fr: 'Autorité de Régulation de la Poste et des Communications Électroniques (ARPCE)',
    },
    acronym: 'ARPCE',
    ministry: {
      ar: 'هيئة ضبط وطنية مستقلة',
      fr: 'Autorité Indépendante de Régulation',
    },
    description: {
      ar: 'دليل خدمات سلطة ضبط البريد والاتصالات الإلكترونية ARPCE في الجزائر: المبادرة الوطنية للإدماج الرقمي 7.77، التحقق من شرائح SIM المسجلة باسمك، تطبيق جودتي لقياس جودة الشبكة، وطلبات الخدمات والدفع الإلكتروني.',
      fr: "Guide des services de l'ARPCE en Algérie : initiative nationale d'inclusion numérique 7.77, vérification des cartes SIM enregistrées à votre nom, application Jawdati de mesure de qualité réseau et demandes de services.",
    },
    officialUrl: 'https://www.arpce.dz/ar',
    portalUrl: 'https://www.arpce.dz/ar/service/request',
    iconName: 'Radio',
    isPopular: false,
    services: [
      {
        id: 'arpce-srv-1',
        title: {
          ar: 'الموقع الرسمي لسلطة ضبط البريد والاتصالات (ARPCE)',
          fr: "Site Officiel de l'ARPCE",
        },
        description: {
          ar: 'البوابة الرسمية للاطلاع على تقارير سوق الاتصالات، حقوق المشتركين، وتنظيم التجهيزات الراديوية.',
          fr: 'Portail officiel présentant les textes réglementaires, les droits des abonnés et les rapports sur le marché télécom.',
        },
        url: 'https://www.arpce.dz/ar',
        isOnline: true,
      },
      {
        id: 'arpce-srv-2',
        title: {
          ar: 'المبادرة الوطنية للإدماج الرقمي — مهارات 7.77',
          fr: 'Initiative Inclusion Numérique & Compétences 7.77',
        },
        description: {
          ar: 'حجز الدورات التكوينية المجانية لتطوير المهارات الرقمية والاستخدام الآمن للإنترنت حضوريا وعن بعد.',
          fr: 'Réservation de sessions gratuites d’initiation et de perfectionnement aux compétences numériques pour tous les âges.',
        },
        url: 'https://777.mpt.gov.dz/calendar#cal-board',
        isOnline: true,
      },
      {
        id: 'arpce-srv-3',
        title: {
          ar: 'استمارة طلب خدمة إلكترونية عبر ARPCE',
          fr: 'Formulaire de Demande de Service ARPCE',
        },
        description: {
          ar: 'إيداع طلبات التراخيص والاعتمادات ومطابقة التجهيزات أو شكاوى الجودة لدى مصالح السلطة.',
          fr: 'Dépôt en ligne de demandes d’agréments, d’homologation d’équipements ou de requêtes liées aux services télécoms.',
        },
        url: 'https://www.arpce.dz/ar/service/request',
        isOnline: true,
      },
      {
        id: 'arpce-srv-4',
        title: {
          ar: 'الدفع الإلكتروني لفواتير سلطة الضبط (E-Pay ARPCE)',
          fr: 'Paiement en Ligne des Redevances ARPCE',
        },
        description: {
          ar: 'بوابة التسديد الإلكتروني للمستحقات والرسوم الخاصة بطلبات المتعاملين والمؤسسات.',
          fr: 'Plateforme de règlement sécurisé des frais et redevances réglementaires auprès de l’ARPCE.',
        },
        url: 'https://epay.arpce.dz/',
        isOnline: true,
      },
      {
        id: 'arpce-srv-5',
        title: {
          ar: 'تطبيق جودتي (Jawdati) لقياس جودة التغطية',
          fr: 'Application Mobile Jawdati (Qualité Réseau ARPCE)',
        },
        description: {
          ar: 'تطبيق رسمي لقياس سرعة الإنترنت وجودة المكالمات لمتعاملي الهاتف النقال وإرسال التقارير التلقائية للسلطة.',
          fr: 'Application officielle pour mesurer le débit internet, évaluer la qualité de couverture mobile et remonter les mesures à l’ARPCE.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.arpce.jawdati',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مشتركو الهاتف النقال والإنترنت، الشباب والطلبة في دورات 7.77، ومتعاملو الاتصالات والبريد',
        fr: 'Abonnés mobiles et internet, citoyens participant au programme 7.77, et opérateurs télécoms/postaux',
      },
      processingTime: {
        ar: 'قياس فوري للجودة عبر جودتي وحجز فوري لدورات 7.77؛ معالجة طلبات الخدمة وفق الآجال التنظيمية',
        fr: 'Tests immédiats sur Jawdati et inscription instantanée 7.77 ; traitement administratif des requêtes selon le délai légal',
      },
      fees: {
        ar: 'دورات 7.77 وتطبيق جودتي واستمارة المواطن مجانية؛ تخضع تراخيص المتعاملين والأجهزة للرسوم القانونية',
        fr: 'Formations 7.77 et appli Jawdati gratuites ; homologations d’équipements soumises aux redevances réglementaires',
      },
      channel: {
        ar: 'الموقع arpce.dz، منصة 777.mpt.gov.dz، تطبيق جودتي، وبوابة الدفع epay.arpce.dz',
        fr: 'Site arpce.dz, portail 777.mpt.gov.dz, application Jawdati et guichet epay.arpce.dz',
      },
      keyRequirement: {
        ar: 'بيانات الهوية لطلبات التراخيص أو الدورات، ورقم الشريحة عند التحقق من خطوط SIM المسجلة باسمك',
        fr: 'Identité complète pour les demandes ou formations, et pièces d’identification pour le contrôle des cartes SIM',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التحقق من عدد شرائح SIM المسجلة باسمك',
          fr: 'Contrôle des cartes SIM enregistrées',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية للاستعلام لدى المتعاملين (موبيليس، جازي، أوريدو) أو عبر رموز التحقق المعتمدة',
          fr: 'Carte d’identité biométrique pour vérifier le nombre de lignes actives à votre nom chez Mobilis, Djezzy et Ooredoo',
        },
      },
      {
        label: {
          ar: 'المشاركة في دورات المهارات الرقمية 7.77',
          fr: 'Inscription aux ateliers numériques 7.77',
        },
        value: {
          ar: 'اختيار الولاية والتاريخ المتاح في الرزنامة عبر منصة 777.mpt.gov.dz مع التسجيل المسبق بالاسم والبريد',
          fr: 'Sélection de la wilaya et du créneau dans le calendrier 777.mpt.gov.dz avec inscription préalable',
        },
      },
      {
        label: {
          ar: 'استمارة طلب خدمة ومطابقة التجهيزات',
          fr: 'Homologation d’équipements ou requête',
        },
        value: {
          ar: 'البطاقة التقنية للجهاز اللاسلكي أو مرجع الشكوى السابقة لدى المتعامل في حال التظلم من جودة الخدمة',
          fr: 'Fiche technique de l’équipement radioélectrique ou référence de réclamation préalable auprès de l’opérateur',
        },
      },
      {
        label: {
          ar: 'استخدام تطبيق جودتي (Jawdati)',
          fr: 'Utilisation de l’application Jawdati',
        },
        value: {
          ar: 'تفعيل خدمة تحديد الموقع GPS واتصال البيانات لرفع قياسات التغطية الحقيقية بدقة في منطقتك',
          fr: 'Activation du GPS et des données mobiles afin de géolocaliser avec précision les tests de débit',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أتحقق من عدم وجود شرائح هاتف نقال SIM مسجلة باسمي دون علمي؟',
          fr: 'Comment vérifier si des cartes SIM sont enregistrées à mon insu sous mon identité ?',
        },
        answer: {
          ar: 'تفرض تعليمات ARPCE حصر امتلاك الشرائح وتوثيقها بالهوية؛ يمكنك التوجه إلى الوكالات التجارية لموبيليس وجازي وأوريدو ببطاقة التعريف الوطنية لطلب كشف شامل بجميع الأرقام المسجلة برقمك الوطني وإلغاء أي خط لم تقتنه.',
          fr: 'Conformément aux directives de l’ARPCE, présentez-vous dans les agences commerciales Mobilis, Djezzy et Ooredoo muni de votre carte d’identité pour obtenir la liste exacte des numéros rattachés à votre NIN et résilier toute ligne non reconnue.',
        },
      },
      {
        question: {
          ar: 'ما فائدة تطبيق جودتي (Jawdati) للمواطن الجزائري؟',
          fr: 'À quoi sert l’application mobile Jawdati lancée par l’ARPCE ?',
        },
        answer: {
          ar: 'يمكّنك تطبيق جودتي من قياس السرعة الحقيقية للرفع والتحميل وزمن الاستجابة لشبكة الإنترنت 3G و4G في مكان تواجدك، كما تصل نتائج القياس إلى سلطة الضبط لمراقبة التزام المتعاملين بدفتر الشروط.',
          fr: 'Jawdati permet de tester en conditions réelles vos débits ascendant/descendant et la latence de votre réseau mobile, tout en alimentant l’ARPCE en données objectives pour contrôler la qualité de service des opérateurs.',
        },
      },
      {
        question: {
          ar: 'من يمكنه التسجيل في مبادرة المهارات الرقمية 7.77؟',
          fr: 'Qui peut participer au programme d’inclusion numérique 7.77 ?',
        },
        answer: {
          ar: 'المبادرة مفتوحة مجانا لكافة شرائح المجتمع (الأطفال، الطلبة، الموظفون، وكبار السن) سواء حضوريا في مراكز التكوين أو عن بعد، لاكتساب أساسيات الأمن السيبراني واستعمال الخدمات الرقمية.',
          fr: 'L’initiative est ouverte gratuitement à toutes les générations (jeunes, étudiants, professionnels et seniors) en présentiel ou à distance pour acquérir les bases de la cybersécurité et des outils numériques.',
        },
      },
      {
        question: {
          ar: 'متى ألجأ إلى سلطة الضبط ARPCE لتقديم شكوى ضد متعامل هاتف أو إنترنت؟',
          fr: 'Quand saisir l’ARPCE pour un litige avec un opérateur télécom ou internet ?',
        },
        answer: {
          ar: 'يجب أولا إيداع شكوى رسمية لدى مصلحة الزبائن للمتعامل والاحتفاظ برقم التتبع؛ وفي حال عدم الرد أو بقاء المشكل دون حل بعد المهلة القانونية، يمكنك رفع تظلم عبر استمارة طلب الخدمة في موقع ARPCE.',
          fr: 'Déposez d’abord une réclamation écrite auprès du service client de votre opérateur et conservez son numéro de dossier ; en l’absence de solution satisfaisante dans les délais, saisissez l’ARPCE via son formulaire en ligne.',
        },
      },
    ],
  },
];

export const batch1Guides: Record<string, RichGuideContent> = {
  aadl: {
    intro: {
      ar: [
        'تعد الوكالة الوطنية لتحسين السكن وتطويره (عدل AADL) الذراع التنفيذية للدولة في تجسيد صيغة البيع بالإيجار الموجهة للطبقة الوسطى في الجزائر. ومع إطلاق المنصة الرقمية عدل 3، تم الانتقال الكامل إلى المعالجة الإلكترونية للملفات بدءا من التسجيل الأولي برقم التعريف الوطني NIN، وصولا إلى رفع الوثائق الثبوتية بصيغة PDF ومتابعة قرارات اللجان والطعون دون عناء التنقل إلى المديريات الولائية.',
        'تعتمد المنظومة الرقمية لوكالة عدل على الربط البيني المباشر مع البطاقية الوطنية للسكن، السجل الوطني للحالة المدنية، وصناديق الضمان الاجتماعي CNAS وCASNOS وCNR. يتيح هذا الربط التحقق التلقائي من شروط الدخل وعدم حيازة عقار سكني أو إعانة عمومية سابقة، مما يسرع دراسة الطلبات ويضمن الشفافية وتكافؤ الفرص بين جميع المكتتبين عبر 58 ولاية.',
        'وبالموازاة مع مرحلة الاكتتاب، يدير فرع التسيير العقاري (AADL Gest-Immo) بوابة إلكترونية مستقلة تتيح للمستفيدين القاطنين بالأحياء السكنية تسديد فواتير الكراء الشهرية وأعباء العمارات عبر البطاقة الذهبية لبريد الجزائر أو بطاقة CIB وتطبيق بريدي موب. نجمع لك في هذا الدليل جميع المتطلبات القانونية، الخطوات العملية، وحلول الأخطاء الشائعة.',
      ],
      fr: [
        "L'Agence Nationale de l'Amélioration et du Développement du Logement (AADL) met en œuvre le programme national de logement en location-vente. Avec le déploiement de la plateforme AADL 3, l'ensemble du parcours souscripteur a été dématérialisé : préinscription par NIN, téléversement des pièces justificatives au format PDF, suivi de recevabilité et dépôt des recours sans déplacement aux guichets.",
        "L'infrastructure informatique de l'AADL est interconnectée au fichier national du logement, aux registres biométriques de l'état civil ainsi qu'aux caisses de sécurité sociale (CNAS, CASNOS, CNR). Cette interopérabilité automatise la vérification des plafonds de revenus et l'absence de propriété immobilière à l'échelle nationale.",
        "Pour les bénéficiaires déjà installés, la filiale de gestion immobilière AADL Gest-Immo met à disposition un espace de paiement en ligne permettant de régler les loyers mensuels et charges de copropriété par carte Edahabia, CIB ou BaridiMob. Ce guide rassemble l'ensemble des prérequis, étapes et solutions pratiques.",
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بطاقة التعريف الوطنية البيومترية سارية الصلاحية تتضمن رقم التعريف الوطني NIN المكون من 18 رقما.',
        'شهادة انتساب حديثة أو رقم الضمان الاجتماعي (CNAS للأجراء، CASNOS لغير الأجراء، أو CNR للمتقاعدين).',
        'كشف الراتب أو تصريح الأرباح السنوي يثبت أن دخل الأسرة يقع ضمن النطاق القانوني المحدد لبرنامج عدل.',
        'رقم هاتف نقال نشط ومسجل باسم المكتتب لاستلام رموز التأكيد OTP وإشعارات المواعيد.',
        'بطاقة الدفع الذهبية أو بطاقة CIB سارية المفعول عند تسديد الشطور المالية أو فواتير الكراء عبر Gest-Immo.',
      ],
      fr: [
        "Carte Nationale d'Identité Biométrique (CNIBE) en cours de validité comportant le NIN à 18 chiffres.",
        'Numéro de sécurité sociale actif et justificatif de revenus (CNAS, CASNOS ou pension CNR).',
        'Justificatif de domicile récent et pièces d’état civil attestant de la situation familiale.',
        'Ligne téléphonique mobile personnelle active pour recevoir les codes OTP et notifications de suivi.',
        'Carte Edahabia ou carte bancaire CIB activée pour le règlement des ordres de versement et loyers mensuels.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الدخول إلى منصة عدل 3 عبر الرابط الرسمي',
          fr: '1. Accéder au portail officiel AADL 3',
        },
        detail: {
          ar: 'افتح رابط aadl.dz/relogin وتأكد من سلامة شهادة الأمان HTTPS قبل إدخال رقم التعريف الوطني وكلمة المرور الخاصة بحسابك.',
          fr: 'Ouvrez l’adresse officielle aadl.dz/relogin et vérifiez la connexion sécurisée HTTPS avant de saisir votre NIN et mot de passe.',
        },
      },
      {
        title: {
          ar: '2. مراجعة الإشعارات وتفعيل الحساب أو المرحلة الثانية',
          fr: '2. Consulter les notifications et activer votre dossier',
        },
        detail: {
          ar: 'بعد الولوج، راجع خانة الإشعارات لمعرفة حالة القبول الأولي أو الوثائق التكميلية المطلوبة في المرحلة الحالية من البرنامج.',
          fr: 'Consultez votre tableau de bord pour vérifier le statut d’éligibilité initiale et les justificatifs demandés à l’étape en cours.',
        },
      },
      {
        title: {
          ar: '3. مسح الوثائق ضوئيا ورفعها بصيغة PDF',
          fr: '3. Numériser et téléverser les justificatifs PDF',
        },
        detail: {
          ar: 'قم بمسح التصريح الشرفي المصادق عليه، شهادة الإقامة، وكشوف الراتب بدقة واضحة وحجم مضغوط مطابق لشروط المنصة ثم أرسل الملف.',
          fr: 'Scannez nettement la déclaration sur l’honneur légalisée, le justificatif de domicile et les fiches de paie en PDF compressé avant validation.',
        },
      },
      {
        title: {
          ar: '4. تسديد أوامر الدفع أو فواتير الكراء الشهرية',
          fr: '4. Régler les ordres de versement ou loyers mensuels',
        },
        detail: {
          ar: 'لسكان عدل الحاليين، افتح بوابة aadlgestimmo.dz وأدخل رمز المستفيد لتسديد الفاتورة الشهرية بالبطاقة الذهبية أو تطبيق بريدي موب.',
          fr: 'Pour les locataires-attributaires, accédez à aadlgestimmo.dz avec votre référence client et réglez la quittance par carte Edahabia, CIB ou BaridiMob.',
        },
      },
      {
        title: {
          ar: '5. حفظ الوصولات ومتابعة التخصيص عبر تطبيق AADL Mobile',
          fr: '5. Archiver les reçus et suivre l’affectation sur AADL Mobile',
        },
        detail: {
          ar: 'احتفظ بنسخة PDF من كل وصل دفع إلكتروني وتابع إشعارات اختيار المواقع ومفاتيح السكن عبر التطبيق الرسمي.',
          fr: 'Téléchargez chaque justificatif de transaction PDF et suivez les notifications d’affectation de site via l’application AADL Mobile.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم تطابق بيانات رقم التعريف الوطني مع الضمان الاجتماعي',
          fr: 'Erreur de correspondance entre le NIN et la sécurité sociale',
        },
        solution: {
          ar: 'تأكد من كتابة رقم التسجيل في CNAS أو CASNOS بدقة وتطابق اللقب والاسم باللاتينية مع البطاقة البيومترية قبل إعادة المحاولة.',
          fr: 'Vérifiez l’orthographe exacte de votre nom/prénom et votre numéro d’assuré social sur votre attestation CNAS/CASNOS.',
        },
      },
      {
        issue: {
          ar: 'رفض ملف PDF أثناء التحميل بسبب الحجم أو الصيغة',
          fr: 'Rejet du document PDF lors du téléversement',
        },
        solution: {
          ar: 'اضغط ملفات PDF بحيث لا يتجاوز كل ملف الحد التقني (عادة 2 ميغابايت) مع الحفاظ على وضوح النصوص والأختام دون تصوير مائل.',
          fr: 'Compressez chaque fichier PDF sous la limite autorisée (environ 2 Mo) tout en gardant les cachets et textes parfaitement lisibles.',
        },
      },
      {
        issue: {
          ar: 'تأخر ظهور تسديد فاتورة الكراء في حساب Gest-Immo',
          fr: 'Délai d’actualisation du paiement sur AADL Gest-Immo',
        },
        solution: {
          ar: 'احتفظ برقم المعاملة من بريدي موب أو SATIM؛ يتم تحديث الرصيد خلال 24 إلى 48 ساعة عمل دون حاجة لإعادة الدفع.',
          fr: 'Conservez le reçu BaridiMob ou SATIM ; la mise à jour comptable intervient sous 24 à 48h ouvrables sans nécessiter de second règlement.',
        },
      },
    ],
    extraFaqs: [],
  },
  aapi: {
    intro: {
      ar: [
        'تعتبر الوكالة الجزائرية لترقية الاستثمار (AAPI) الهيئة الوطنية الوحيدة المكلفة بتسجيل المشاريع الاستثمارية، مرافقة المستثمرين، ومنح الأوعية العقارية الاقتصادية بموجب قانون الاستثمار رقم 22-18. وقد أحدثت الوكالة تحولا رقميا جذريا بإطلاق المنصة الرقمية للمستثمر (invest.gov.dz) التي تنهي التدخل الإداري المباشر في معالجة الملفات وتضمن الشفافية الكاملة.',
        'من خلال المنصة الرقمية، يمكن للمستثمر المحلي أو الأجنبي أو حامل المشروع تسجيل استثماره عن بعد، الحصول على شهادة التسجيل المؤهلة للامتيازات الجبائية وشبه الجبائية، تقديم طلبات الاستفادة من العقار الاقتصادي التابع لأملاك الدولة، ومتابعة قائمة التجهيزات المعفاة من الحقوق الجمركية والرسم على القيمة المضافة.',
        'كما توفر الوكالة فضاء خدماتيا موازيا (services.aapi.dz) مخصصا لمرافقة حاملي المشاريع الناشئة، استقبال الانشغالات والالتماسات، والتبليغ الفوري عن أي عراقيل أو مخالفات إدارية. يضع هذا الدليل بين يديك الوثائق الضرورية، مراحل التسجيل خطوة بخطوة، وكيفية التعامل مع ملاحظات المنصة.',
      ],
      fr: [
        "L'Agence Algérienne de Promotion de l'Investissement (AAPI) constitue l'organe central chargé de l'enregistrement des projets, de l'accompagnement des porteurs et de l'octroi du foncier économique sous l'égide de la loi 22-18. Son guichet numérique unifié (invest.gov.dz) dématérialise intégralement les démarches tout en assurant une transparence totale sur les critères de sélection.",
        "Depuis la plateforme digitale, les promoteurs nationaux et étrangers peuvent déclarer un projet, obtenir leur attestation d'enregistrement ouvrant droit aux avantages fiscaux et douaniers, soumettre des demandes de concession foncière et suivre l'instruction en temps réel sans multiplication des déplacements.",
        "En complément, l'interface services.aapi.dz offre des modules dédiés à l'orientation des porteurs de projets, au dépôt des requêtes et au signalement d'éventuels blocages administratifs. Retrouvez ci-dessous la liste de contrôle, la procédure complète et le dépannage technique.",
      ],
    },
    eligibilityChecklist: {
      ar: [
        'مستخرج السجل التجاري الإلكتروني ساري المفعول مطابق لنشاط المشروع الاستثماري.',
        'بطاقة الترقيم الجبائي NIF والرقم الإحصائي NIS للمؤسسة أو الشخص الطبيعي المستثمر.',
        'بطاقة تقنية واقتصادية توضح طبيعة الاستثمار، قيمة التمويل، التجهيزات المطلوبة، ومناصب الشغل المستحدثة.',
        'شهادة الإيداع أو دراسة مبدئية في حالة الترشح للحصول على عقار اقتصادي عبر بوابة invest.gov.dz.',
        'بريد الكتروني مهني ورقم هاتف نقال شخصي لتفعيل حساب المستثمر واستلام إشعارات الشباك الوحيد.',
      ],
      fr: [
        'Extrait du Registre de Commerce électronique en cours de validité correspondant à l’objet du projet.',
        "Numéro d'Identification Fiscale (NIF) et Numéro d'Identification Statistique (NIS) de l'entreprise.",
        'Étude technico-économique précisant le montant d’investissement, les équipements et les emplois prévus.',
        'Dossier de capacité financière (fonds propres ou accord bancaire de principe) pour les demandes de foncier économique.',
        'Adresse courriel professionnelle et téléphone mobile actif pour la validation du compte investisseur.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. إنشاء حساب المستثمر على البوابة الوطنية',
          fr: '1. Créer un compte sur le portail national invest.gov.dz',
        },
        detail: {
          ar: 'توجه إلى بوابة invest.gov.dz أو services.aapi.dz وأنشئ حسابك بإدخال المعرفات القانونية للمؤسسة والبريد المهني وتأكيد التسجيل.',
          fr: 'Rendez-vous sur invest.gov.dz ou services.aapi.dz et créez votre espace avec les identifiants légaux de votre entité et votre courriel.',
        },
      },
      {
        title: {
          ar: '2. تحديد نظام الامتياز وتسجيل المشروع',
          fr: '2. Sélectionner le régime d’incitation et déclarer le projet',
        },
        detail: {
          ar: 'اختر نظام الاستثمار المناسب (القطاعات، المناطق، أو المشاريع المهيكلة) وأدخل بيانات الكلفة التقديرية وقائمة التجهيزات.',
          fr: 'Choisissez le régime applicable (secteurs prioritaires, zones ou projets structurants) et saisissez le devis ainsi que la liste des biens.',
        },
      },
      {
        title: {
          ar: '3. الترشح للعقار الاقتصادي (عند الحاجة)',
          fr: '3. Postuler à une assiette foncière économique',
        },
        detail: {
          ar: 'استعرض الأوعية العقارية المنشورة في ولاية المشروع وقدم ملف الترشح إلكترونيا لتقييمه وفق شبكة التنقيط الآلية.',
          fr: 'Consultez les offres foncières disponibles dans la wilaya cible et déposez votre dossier pour notation automatisée.',
        },
      },
      {
        title: {
          ar: '4. استلام شهادة التسجيل وتفعيل الإعفاءات',
          fr: '4. Obtenir l’attestation d’enregistrement et activer les avantages',
        },
        detail: {
          ar: 'حمل شهادة تسجيل الاستثمار المزودة برمز الاستجابة السريعة QR لتقديمها إلى الجمارك والضرائب والاستفادة من الإعفاءات.',
          fr: 'Téléchargez l’attestation d’enregistrement sécurisée par QR code afin d’activer vos exonérations auprès des impôts et douanes.',
        },
      },
      {
        title: {
          ar: '5. المتابعة أو تقديم التماس عبر خدمات AAPI',
          fr: '5. Suivre l’exécution ou déposer une requête sur services.aapi.dz',
        },
        detail: {
          ar: 'استخدم استمارات حامل مشروع أو طرح انشغال للتواصل مع مستشاري الشباك الوحيد وتذليل أي صعوبة ميدانية.',
          fr: 'Utilisez les modules « Porteur de projet » ou « Requête » pour solliciter les conseillers du guichet unique en cas de besoin.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'انتهاء صلاحية جلسة التسجيل في بوابة invest.gov.dz',
          fr: 'Expiration de session lors de l’authentification sur invest.gov.dz',
        },
        solution: {
          ar: 'لا تحفظ روابط الدخول المؤقتة التي تحتوي على رموز execution؛ ادخل دائما من الصفحة الرئيسية invest.gov.dz وأكمل الاستمارة دون إبقاء المتصفح خاملا لفترة طويلة.',
          fr: 'Évitez les URL expirées contenant des paramètres temporaires ; accédez toujours depuis invest.gov.dz et finalisez la saisie sans délai excessif.',
        },
      },
      {
        issue: {
          ar: 'رفض بعض السلع في قائمة التجهيزات المعفاة',
          fr: 'Exclusion de certains équipements de la liste des avantages',
        },
        solution: {
          ar: 'تحقق من أن رموز التعريفة الجمركية المدخلة لا تندرج ضمن القائمة السلبية للاستثمارات المستثناة في المراسيم التنفيذية للقانون 22-18.',
          fr: 'Vérifiez que les positions tarifaires douanières saisies ne figurent pas dans la liste négative des activités et biens exclus par décret.',
        },
      },
      {
        issue: {
          ar: 'الحاجة لتعديل مبلغ الاستثمار أو قائمة التجهيزات بعد التسجيل',
          fr: 'Modification du montant ou de la liste des biens après enregistrement',
        },
        solution: {
          ar: 'يتيح فضاء المستثمر تقديم طلب تعديل لشهادة التسجيل (Avenant) وإرفاق المبررات التقنية قبل استنفاد مرحلة الإنجاز.',
          fr: 'Déposez une demande d’avenant modificatif directement depuis votre tableau de bord investisseur avant la clôture de la phase de réalisation.',
        },
      },
    ],
    extraFaqs: [],
  },
  ade: {
    intro: {
      ar: [
        'تتولى مؤسسة الجزائرية للمياه (ADE) إنتاج ونقل وتوزيع المياه الصالحة للشرب لفائدة الملايين من المواطنين عبر 44 ولاية في الجزائر تحت إشراف وزارة الري والموارد المائية. وسعيا لتقريب الإدارة من المشترك، طورت المؤسسة منظومة رقمية متكاملة تشمل بوابة الوكالة الرقمية، خدمة الدفع الإلكتروني عبر البطاقة الذهبية وCIB، ومحاكاة الفاتورة عبر الإنترنت.',
        'كما أطلقت الجزائرية للمياه تطبيق مياهي موب (Miyahi-Mob) الذي يضع بين يدي المواطن أداة فورية لمتابعة استهلاكه، تسديد مستحقاته دون طوابير، والتبليغ المصور والمحدد جغرافيا عن أي تسرب مائي في الشبكة العمومية أو انقطاع غير مبرر للتزويد، وهو ما يساهم في الحفاظ على الثروة المائية وتحسين سرعة تدخل فرق الصيانة.',
        'يوضح هذا الدليل كيفية قراءة مرجع الفاتورة لتسديدها إلكترونيا بأمان، طريقة استعمال المحاكي الرسمي لمراقبة شرائح الاستهلاك، والوثائق اللازمة لملفات التوصيل الجديد أو تغيير اسم العداد في الوكالة التجارية.',
      ],
      fr: [
        "L'Algérienne des Eaux (ADE) assure la production, le traitement et la distribution de l'eau potable dans 44 wilayas sous la tutelle du Ministère de l'Hydraulique. Pour simplifier la relation usager, l'établissement propose une agence numérique complète permettant la consultation et le paiement sécurisé des factures en ligne par carte Edahabia ou CIB.",
        "L'application mobile officielle Miyahi-Mob complète ce dispositif en offrant aux abonnés un suivi direct de leur historique, un simulateur tarifaire transparent et un module de signalement géolocalisé des fuites ou casses sur la voirie publique afin d'accélérer l'intervention des équipes techniques.",
        "Ce guide détaille les étapes pour régler votre facture d'eau en quelques clics, les pièces exigées pour un nouveau branchement ou une mutation de compteur, ainsi que les recours en cas d'index estimé anormalement élevé.",
      ],
    },
    eligibilityChecklist: {
      ar: [
        'رقم الفاتورة ورمز الزبون المطبوعان أعلى آخر فاتورة ماء صادرة عن وحدة الجزائرية للمياه.',
        'بطاقة ذهبية لبريد الجزائر أو بطاقة بنكية CIB مفعلة للدفع الإلكتروني مع هاتف لاستقبال رمز OTP.',
        'عقد الملكية أو عقد الإيجار وبطاقة التعريف الوطنية عند التقدم بطلب ربط جديد أو تنازل عن اشتراك.',
        'قراءة فعلية مصورة من العداد المائي في حال الاعتراض على فاتورة تقديرية أو مغالاة في التقدير.',
      ],
      fr: [
        'Numéro de facture et code client imprimés dans l’en-tête de votre dernière facture ADE.',
        'Carte Edahabia ou carte CIB activée pour le télépaiement et téléphone mobile actif pour le code OTP.',
        'Titre de propriété (ou bail) et pièce d’identité biométrique pour toute demande de nouveau branchement.',
        'Photo datée du cadran du compteur en cas de réclamation suite à un index estimé.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الدخول إلى بوابة الدفع أو الوكالة الرقمية ADE',
          fr: '1. Accéder au portail e-paiement ou à l’Agence Numérique ADE',
        },
        detail: {
          ar: 'افتح رابط ade.dz/e-paiement/ للدفع المباشر السريع، أو سجل الدخول في ade.dz/login لاستعراض كافة فواتيرك السابقة.',
          fr: 'Ouvrez ade.dz/e-paiement/ pour un règlement direct, ou connectez-vous sur ade.dz/login pour consulter votre historique complet.',
        },
      },
      {
        title: {
          ar: '2. إدخال رقم الفاتورة ورمز الزبون',
          fr: '2. Saisir le numéro de facture et la référence client',
        },
        detail: {
          ar: 'اكتب الأرقام بدقة كما وردت في الفاتورة الورقية وتحقق من ظهور اسم المشترك والمبلغ المستحق على الشاشة.',
          fr: 'Recopiez fidèlement les identifiants depuis votre facture papier et vérifiez le nom de l’abonné ainsi que le montant affiché.',
        },
      },
      {
        title: {
          ar: '3. التحقق من الفاتورة عبر المحاكي الرسمي (اختياري)',
          fr: '3. Contrôler le calcul avec le simulateur ADE',
        },
        detail: {
          ar: 'إذا لاحظت ارتفاعا غير معتاد في المبلغ، قارن استهلاكك بالمتر المكعب عبر صفحة simuler-votre-facture للتأكد من الشريحة المطبقة.',
          fr: 'En cas de doute sur le montant, testez votre volume en m3 sur simuler-votre-facture pour vérifier l’application des tranches.',
        },
      },
      {
        title: {
          ar: '4. تأكيد الدفع عبر البطاقة الذهبية أو CIB',
          fr: '4. Valider le paiement par carte Edahabia ou CIB',
        },
        detail: {
          ar: 'اختر وسيلة الدفع، أدخل بيانات البطاقة ورمز التأكيد المرسل عبر SMS، ثم قم بتحميل وصل التسديد الإلكتروني بصيغة PDF.',
          fr: 'Sélectionnez votre carte, validez le code OTP reçu par SMS et téléchargez immédiatement le justificatif de paiement PDF.',
        },
      },
      {
        title: {
          ar: '5. التبليغ عن الأعطال عبر تطبيق Miyahi-Mob',
          fr: '5. Signaler une fuite ou panne sur Miyahi-Mob',
        },
        detail: {
          ar: 'عند ملاحظة تسرب مائي في الحي، استخدم التطبيق لالتقاط صورة وإرسال الإحداثيات لوحدة الولاية المختصة.',
          fr: 'Utilisez l’application Miyahi-Mob pour transmettre une photo et la géolocalisation d’une fuite directement à l’unité de wilaya.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'ظهور رسالة «الفاتورة غير موجودة» عند إدخال البيانات في موقع الدفع',
          fr: 'Message « Facture introuvable » lors de la saisie en ligne',
        },
        solution: {
          ar: 'تأكد من أن ولايتك تابعة لـ ADE وليس لـ SEAAL أو SEOR، وتحقق من عدم إدخال مسافات إضافية أو أصفار زائدة في رقم الفاتورة.',
          fr: 'Vérifiez que votre wilaya dépend bien de l’ADE (et non de SEAAL ou SEOR) et saisissez le numéro exact sans espace ni zéro superflu.',
        },
      },
      {
        issue: {
          ar: 'ارتفاع كبير في قيمة الفاتورة نتيجة التقدير الجزافي (Forfait)',
          fr: 'Montant élevé suite à une facturation par estimation',
        },
        solution: {
          ar: 'التقط صورة واضحة لأرقام العداد الفعلية وتوجه إلى الوكالة التجارية المحلية لطلب تسوية الرصيد وإعادة تحرير الفاتورة وفق القراءة الحقيقية.',
          fr: 'Prenez une photo nette de l’index réel du compteur et présentez-la à votre agence ADE pour obtenir un redressement immédiat.',
        },
      },
      {
        issue: {
          ar: 'تعذر إنشاء حساب في الوكالة الرقمية ADE',
          fr: 'Difficulté d’inscription à l’agence numérique ADE',
        },
        solution: {
          ar: 'استعمل رمز الزبون الموجود في أحدث فاتورة صادرة باسمك وتأكد من تطابق البريد الإلكتروني ورقم الهاتف المعتمدين لدى الوكالة.',
          fr: 'Utilisez le code client figurant sur votre dernière facture et vérifiez la validité de votre adresse courriel de confirmation.',
        },
      },
    ],
    extraFaqs: [],
  },
  algerietelecom: {
    intro: {
      ar: [
        'تمثل شركة اتصالات الجزائر (Algérie Télécom) المتعامل التاريخي والأكبر في مجال الهاتف الثابت والإنترنت عالي التدفق (ADSL وVDSL وIDOOM Fibre FTTH وIDOOM 4G LTE) في الجزائر. وبفضل استراتيجيتها الرقمية الشاملة، لم يعد الزبون بحاجة لزيارة الوكالات التجارية ACTEL لإجراء تعبئة الإنترنت أو دفع فواتير الهاتف الثابت أو متابعة حالة اشتراكه.',
        'توفر البوابة الرسمية للزبائن (client.at.dz) ومنصة الدفع الإلكتروني (paiement.algerietelecom.dz) خدمات متاحة 24 ساعة طوال أيام الأسبوع باستعمال البطاقة الذهبية أو بطاقة CIB أو تذاكر التعبئة. كما تتيح اتصالات الجزائر عبر موقعها الرسمي تقديم طلبات تركيب خطوط جديدة، طلب التحويل إلى الألياف البصرية في الأحياء المغطاة، طلب تحويل الخط عند تغيير السكن، والتصريح بالأعطال التقنية.',
        'إلى جانب ذلك، يدعم تطبيق My IDOOM وتطبيق E-Paiement المزايا الإضافية مثل تعبئة الطوارئ Idoomly (96 ساعة إنترنت إضافية)، مضاعفة التدفق الأسبوعية، واستكشاف المنصات التعليمية الشريكة مثل منصة معلم. نضع في هذا الدليل كافة الروابط الرسمية الموثقة والحلول العملية لأشهر الأعطال التقنية.',
      ],
      fr: [
        "Algérie Télécom (AT) est l'opérateur historique de téléphonie fixe et d'internet haut et très haut débit (IDOOM ADSL, VDSL, Fibre FTTH et 4G LTE) en Algérie. L'entreprise a développé un écosystème complet de téléservices permettant aux particuliers et aux professionnels de gérer leur ligne à distance sans passage en agence commerciale ACTEL.",
        "À travers l'espace client (client.at.dz) et le guichet de paiement sécurisé (paiement.algerietelecom.dz), les abonnés peuvent recharger leur forfait internet, régler leurs factures de téléphonie fixe, suivre leurs jours de validité et activer le dépannage d'urgence Idoomly 24h/24 par carte Edahabia, CIB ou ticket de recharge.",
        "Le portail officiel facilite également les démarches administratives : demande de raccordement neuf, migration vers la fibre optique FTTH, transfert de ligne lors d'un déménagement et signalement des dérangements. Retrouvez ci-après tous les liens officiels vérifiés et nos conseils de dépannage.",
      ],
    },
    eligibilityChecklist: {
      ar: [
        'رقم الهاتف الثابت المكون من 9 أرقام (أو رقم بطاقة 4G LTE) المرتبط باشتراك اتصالات الجزائر.',
        'كلمة مرور فضاء الزبون أو رقم الزبون المدون على عقد الاشتراك أو الفاتورة الدورية.',
        'بطاقة الدفع الذهبية أو بطاقة ما بين البنوك CIB مفعلة، أو بطاقة تعبئة صالحة من 16 رقما.',
        'نسخة من بطاقة التعريف الوطنية ووثيقة الإقامة عند إيداع طلب خط جديد أو نقل خط لعنوان آخر.',
      ],
      fr: [
        'Numéro de ligne fixe à 9 chiffres (ou identifiant du modem IDOOM 4G LTE).',
        'Code client et mot de passe pour accéder à l’espace abonné client.at.dz.',
        'Carte Edahabia ou CIB activée pour le e-paiement, ou code de recharge à 16 chiffres.',
        'Copie de la pièce d’identité et justificatif de domicile pour une nouvelle ligne ou un transfert d’adresse.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الدخول إلى فضاء الزبون أو بوابة الدفع السريع',
          fr: '1. Se connecter à l’Espace Client ou au portail e-paiement',
        },
        detail: {
          ar: 'افتح client.at.dz لمعرفة تفاصيل اشتراكك والأيام المتبقية، أو انتقل مباشرة إلى paiement.algerietelecom.dz للتعبئة الفورية.',
          fr: 'Rendez-vous sur client.at.dz pour consulter votre solde de jours, ou directement sur paiement.algerietelecom.dz pour recharger.',
        },
      },
      {
        title: {
          ar: '2. اختيار نوع الخدمة (تعبئة إنترنت / دفع فاتورة ثابت)',
          fr: '2. Choisir l’opération (Recharge Internet / Facture Fixe)',
        },
        detail: {
          ar: 'حدد ما إذا كنت تريد تعبئة ADSL/Fibre أو 4G LTE أو تسديد فاتورة الهاتف الثابت وأدخل رقم الهاتف بدقة.',
          fr: 'Sélectionnez le produit concerné (ADSL/Fibre, 4G LTE ou facture fixe) et renseignez correctement le numéro de ligne.',
        },
      },
      {
        title: {
          ar: '3. التحقق من التحويل نحو الألياف البصرية FTTH',
          fr: '3. Vérifier l’éligibilité et demander la Fibre FTTH',
        },
        detail: {
          ar: 'عبر صفحة Migration، أدخل ولايتك وعنوانك لطلب ترقية خطك النحاسي إلى الألياف البصرية عند تغطية الحي.',
          fr: 'Utilisez le formulaire de migration FTTH pour tester la couverture de votre quartier et solliciter le raccordement fibre.',
        },
      },
      {
        title: {
          ar: '4. الإبلاغ عن الأعطال التقنية أو عدم التفعيل',
          fr: '4. Déclarer un dérangement ou une attente de mise en service',
        },
        detail: {
          ar: 'عند انقطاع الخدمة، سجل التبليغ عبر صفحة Dérangements أو استعمل استمارة التفعيل لزبائن الألياف المربوطين دون خدمة.',
          fr: 'En cas de coupure, remplissez le formulaire Dérangements ou le signalement FTTH si votre boîtier est posé sans activation.',
        },
      },
      {
        title: {
          ar: '5. تحميل تطبيق My IDOOM لمتابعة الحساب بمرونة',
          fr: '5. Gérer votre compte depuis l’application My IDOOM',
        },
        detail: {
          ar: 'يتيح التطبيق شحن الحساب، تفعيل خدمة Idoomly للطوارئ، ومتابعة استهلاك حجم البيانات في عروض 4G LTE.',
          fr: 'L’appli mobile centralise le suivi conso 4G, la recharge rapide et l’activation de la connexion de secours Idoomly.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'إضاءة المؤشر الأحمر LOS في جهاز المودم للألياف البصرية',
          fr: 'Voyant rouge LOS allumé sur le modem fibre optique (ONT)',
        },
        solution: {
          ar: 'افحص الكابل الأصفر الرفيع (Jarretière) وتأكد من عدم انكساره أو ارتخائه من العلبة الحائطية، ثم بلغ عن العطب عبر الرقم 12 أو صفحة الأعطال.',
          fr: 'Vérifiez que la jarretière optique n’est ni débranchée ni pliée, redémarrez l’ONT, puis signalez l’incident au 12 ou en ligne.',
        },
      },
      {
        issue: {
          ar: 'توقف الإنترنت رغم إتمام الدفع الإلكتروني بنجاح',
          fr: 'Connexion toujours coupée après un rechargement en ligne réussi',
        },
        solution: {
          ar: 'أعد تشغيل المودم لمدة 30 ثانية لتحديث الجلسة لدى الخادم؛ وإن استمر الحجب تحقق من عدم وجود فاتورة هاتف ثابت غير مسددة.',
          fr: 'Redémarrez le modem pendant 30 secondes pour réinitialiser la session PPPoE, puis vérifiez qu’aucune facture fixe impayée ne bloque la ligne.',
        },
      },
      {
        issue: {
          ar: 'تركيب علبة الألياف البصرية في المنزل دون تفعيل الخط منذ مدة',
          fr: 'Boîtier fibre installé sans mise en service commerciale',
        },
        solution: {
          ar: 'املأ استمارة التبليغ المخصصة لزبائن الألياف دون تفعيل (رابط p315 المدرج في هذه الصفحة) ليتم برمجة تدخل الوكالة التقنية.',
          fr: 'Remplissez le formulaire officiel dédié aux clients raccordés sans mise en service (lien p315 ci-dessus) pour déclencher l’activation.',
        },
      },
    ],
    extraFaqs: [],
  },
  anae: {
    intro: {
      ar: [
        'استحدثت الوكالة الوطنية للمقاول الذاتي (ANAE) لتكون البوابة الرسمية لتأطير العمل الحر والنشاطات المستقلة في الجزائر تحت وصاية وزارة اقتصاد المعرفة والمؤسسات الناشئة والمؤسسات المصغرة. تمنح بطاقة المقاول الذاتي لأصحاب المهارات الرقمية، المطورين، المصممين، المستشارين، ومقدمي الخدمات الفردية إطارا قانونيا مرنا يعفيهم من تعقيدات السجل التجاري وتكاليف استئجار المحلات.',
        'يتم تقديم طلب البطاقة واستخراجها إلكترونيا بالكامل عبر منصة anae.dz دون أي وسطاء أو ملفات ورقية معقدة. وبموجب القانون 22-23، يستفيد حامل البطاقة من نظام ضريبي استثنائي يتمثل في الضريبة الجزافية الوحيدة (IFU) بنسبة 0.5% فقط من رقم الأعمال السنوي، مع حق إصدار الفواتير القانونية وفتح حساب بنكي تجاري وإمكانية توطين عائدات التصدير بالعملة الصعبة.',
        'كما ترتبط صفة المقاول الذاتي بالتغطية الاجتماعية والصحية لدى صندوق CASNOS، مما يضمن للمستقل الحصول على بطاقة الشفاء والتقاعد. يستعرض هذا الدليل شروط التسجيل، الوثائق الرقمية المطلوبة، خطوات ملء الاستمارة في منصة ANAE، وأبرز الحلول عند رفض النشاط أو تأخر المصادقة.',
      ],
      fr: [
        "L'Agence Nationale de l'Auto-Entrepreneur (ANAE), placée sous la tutelle du Ministère de l'Économie de la Connaissance, des Start-up et des Micro-entreprises, encadre l'exercice légal du travail indépendant en Algérie. Grâce au statut institué par la loi 22-23, les freelances, consultants, développeurs et prestataires de services individuels obtiennent une reconnaissance officielle sans obligation de local commercial ni registre de commerce.",
        "Toute la procédure de demande s'effectue en ligne via la plateforme officielle anae.dz. Ce statut ouvre droit à une fiscalité simplifiée très attractive (Impôt Forfaitaire Unique de 0,5 % du chiffre d'affaires annuel plafonné à 5 millions de DZD), à la facturation légale, à l'ouverture d'un compte bancaire commercial et au rapatriement des devises pour l'export de services.",
        "L'auto-entrepreneur bénéficie également d'une couverture sociale et maladie (carte Chifa et retraite) via la caisse CASNOS. Vous trouverez ci-dessous la liste des conditions d'éligibilité, les étapes exactes d'inscription et nos réponses aux blocages les plus fréquents.",
      ],
    },
    eligibilityChecklist: {
      ar: [
        'رقم التعريف الوطني NIN المدون على بطاقة التعريف البيومترية (18 رقما) مع بلوغ سن العمل القانوني.',
        'الإقامة القانونية في الجزائر (مواطن جزائري أو مقيم أجنبي بصفة قانونية).',
        'اختيار نشاط واحد أو أكثر من قائمة الأنشطة السبعة المعتمدة في دليل ANAE (الاستشارة، الخدمات الرقمية، الترفيه، التكوين، إلخ).',
        'صورة شمسية رقمية واضحة بخلفية بيضاء مطابقة لمعايير البطاقة البيومترية.',
        'شهادة الإقامة أو وثيقة إثبات العنوان، مع التحقق من عدم ممارسة نشاط تجاري مواز بسجل تجاري أو مهنة حرة مقننة.',
      ],
      fr: [
        'Numéro d’Identification National (NIN) à 18 chiffres figurant sur la carte biométrique et majorité légale.',
        'Nationalité algérienne ou titre de résidence légal en Algérie.',
        'Activité choisie exclusivement dans la nomenclature officielle des 7 domaines ANAE (numérique, conseil, services à la personne, communication, etc.).',
        'Photo d’identité numérique nette sur fond blanc conforme au format officiel.',
        'Absence de registre de commerce actif ou d’inscription à un ordre professionnel réglementé (médecin, avocat, notaire).',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الدخول إلى بوابة التسجيل الرسمية anae.dz',
          fr: '1. Accéder au portail d’inscription anae.dz',
        },
        detail: {
          ar: 'افتح رابط anae.dz/user/ae/register/ وأنشئ حسابك الشخصي عبر البريد الإلكتروني ورقم الهاتف الشخصي لتأكيد الهوية.',
          fr: 'Ouvrez anae.dz/user/ae/register/ et créez votre compte personnel avec un courriel et un numéro mobile actifs.',
        },
      },
      {
        title: {
          ar: '2. إدخال البيانات المدنية ورقم التعريف الوطني NIN',
          fr: '2. Renseigner votre identité civile et votre NIN',
        },
        detail: {
          ar: 'أدخل رقم التعريف الوطني، الاسم واللقب بالعربية واللاتينية مطابقين للبطاقة البيومترية، وعنوان الإقامة الدقيق.',
          fr: 'Saisissez votre NIN, votre identité exacte en arabe et en français telle qu’inscrite sur votre CNIBE et votre adresse.',
        },
      },
      {
        title: {
          ar: '3. اختيار رمز النشاط من قائمة ANAE المعتمدة',
          fr: '3. Sélectionner le code d’activité dans la nomenclature',
        },
        detail: {
          ar: 'تصفح الفئات السبع للأنشطة وحدد النشاط المطابق لمهنتك الحرة (مثل تطوير البرمجيات، التصميم، الاستشارات، أو الترجمة).',
          fr: 'Parcourez les domaines éligibles et sélectionnez le code exact correspondant à votre activité indépendante.',
        },
      },
      {
        title: {
          ar: '4. رفع الصورة الشمسية والوثائق وتأكيد التصريح',
          fr: '4. Importer la photo et valider la déclaration',
        },
        detail: {
          ar: 'قم بتحميل الصورة الرقمية المطلوبة، راجع جميع البيانات، ثم أرسل الطلب لمتابعة حالة المعالجة داخل لوحة التحكم.',
          fr: 'Téléversez votre photo d’identité, vérifiez l’exactitude des champs puis soumettez votre dossier pour instruction.',
        },
      },
      {
        title: {
          ar: '5. استخراج البطاقة والانتساب للضرائب وCASNOS',
          fr: '5. Télécharger la carte et finaliser NIF et CASNOS',
        },
        detail: {
          ar: 'فور الموافقة، حمل بطاقة المقاول الذاتي ثم اطلب الترقيم الجبائي NIF عبر nifenligne وانتسب إلى صندوق CASNOS.',
          fr: 'Dès validation, récupérez votre carte d’auto-entrepreneur, demandez votre NIF en ligne et affiliez-vous à la CASNOS.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض الطلب بسبب وجود سجل تجاري قديم أو نشاط غير مؤهل',
          fr: 'Rejet du dossier pour détention d’un ancien registre de commerce',
        },
        solution: {
          ar: 'يجب شطب السجل التجاري القديم لدى المركز الوطني للسجل التجاري CNRC والتأكد من تحديث الوضعية الجبائية قبل إعادة التقديم في ANAE.',
          fr: 'Procédez d’abord à la radiation de votre ancien registre de commerce auprès du CNRC et régularisez votre dossier fiscal.',
        },
      },
      {
        issue: {
          ar: 'رفض الصورة الشمسية المرفوعة في المنصة',
          fr: 'Refus de la photo d’identité lors de l’inscription',
        },
        solution: {
          ar: 'استعمل صورة حديثة ذات خلفية بيضاء ناصعة دون ظلال أو فلاتر، وبأبعاد وحجم خفيف (أقل من 1 ميغابايت بصيغة JPG أو PNG).',
          fr: 'Utilisez une photo récente sur fond blanc uni sans retouche ni ombre, au format JPG ou PNG de taille modérée.',
        },
      },
      {
        issue: {
          ar: 'عدم العثور على النشاط المهني الدقيق في قائمة الوكالة',
          fr: 'Activité spécifique introuvable dans la nomenclature ANAE',
        },
        solution: {
          ar: 'اختر أقرب نشاط تقني أو خدماتي شامل ضمن المجالات السبع الكبرى، أو راسل مصالح الوكالة لاقتراح إدراج التخصص في التحديثات الدورية.',
          fr: 'Sélectionnez le libellé générique le plus proche de votre prestation ou contactez l’ANAE pour suggérer son ajout lors des mises à jour.',
        },
      },
    ],
    extraFaqs: [],
  },
  anem: {
    intro: {
      ar: [
        'تشرف الوكالة الوطنية للتشغيل (ANEM) على وساطة سوق الشغل الرسمي في الجزائر وتسيير ملف منحة البطالة عبر المنظومة الرقمية المتكاملة التي تضم منصة وسيط أونلاين (Wassit Online)، منصة منحة (Minha)، ومنصة فرصتي (Forssati). وقد مكنت هذه الرقمنة ملايين الشباب من تسجيل طلبات العمل، الترشح لعروض التوظيف، وتمديد بطاقة طالب العمل كل ستة أشهر عن بعد دون طوابير أمام الملحقات المحلية.',
        'بالنسبة لمنحة البطالة، تعتمد منصة منحة على الربط اللحظي مع قواعد بيانات الضمان الاجتماعي CNAS وCASNOS والسجل التجاري ومديرية الضرائب والخدمة الوطنية للتأكد آليا من استيفاء المترشح لجميع الشروط القانونية قبل حجز موعد المقابلة الحضورية لإيداع الملف واستلام شهادة الاستفادة.',
        'كما أطلقت الوكالة حزمة تطبيقات محمولة رسمية (ANEM-Dz وMon Agence وMon Offre) لتمكين طالبي العمل من متابعة العروض حسب الولاية والتخصص. يشرح هذا الدليل المعايير القانونية لمنحة البطالة، الوثائق المطلوبة يوم المقابلة، وخطوات تمديد الطلب لتفادي التعليق.',
      ],
      fr: [
        "L'Agence Nationale de l'Emploi (ANEM) régule le marché du travail en Algérie et assure le pilotage numérique de l'allocation chômage à travers trois portails clés : Wassit Online (demandes d'emploi), Minha (allocation chômage) et Forssati (candidatures aux offres). Cette dématérialisation permet aux demandeurs d'emploi de gérer leur parcours à distance sans attente en agence locale.",
        "Lors de la préinscription sur minha.anem.dz, le système interroge automatiquement les fichiers des caisses de sécurité sociale (CNAS, CASNOS), du registre du commerce et des impôts afin de vérifier l'éligibilité réglementaire du candidat avant de lui délivrer un rendez-vous d'entretien en agence locale (ALEM).",
        "Pour compléter cet accès web, l'ANEM propose les applications Android ANEM-Dz, Mon Agence et Mon Offre afin de localiser les agences et recevoir les alertes de recrutement. Ce guide récapitule les conditions légales, la composition du dossier et les solutions aux motifs fréquents de suspension.",
      ],
    },
    eligibilityChecklist: {
      ar: [
        'التسجيل المسبق كطالب شغل فعال في منصة وسيط أونلاين للحصول على رقم التسجيل في الوكالة.',
        'بطاقة التعريف الوطنية البيومترية ورقم التعريف الوطني NIN (للمترشحين بين 19 و40 سنة لمنحة البطالة).',
        'صك بريدي مشطوب (Chèque CCP barré) لحساب شخصي باسم المترشح لصب المنحة شهريا.',
        'نسخة من الشهادة الجامعية أو شهادة التكوين المهني أو إثبات المستوى الدراسي.',
        'وثيقة تثبت تسوية الوضعية تجاه الخدمة الوطنية (أداء، إعفاء، أو تأجيل ساري المفعول) بالنسبة للذكور.',
      ],
      fr: [
        'Demande d’emploi active enregistrée sur Wassit Online avec son numéro d’inscription ANEM.',
        'Carte Nationale d’Identité Biométrique et NIN (tranche d’âge légale 19 à 40 ans pour Minha).',
        'Chèque postal CCP barré au nom personnel du demandeur pour le virement mensuel.',
        'Copie du diplôme universitaire, certificat de formation professionnelle ou attestation de scolarité.',
        'Justificatif de situation régulière vis-à-vis du Service National (accomplissement, dispense ou sursis valide).',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. التحقق من فعالية التسجيل في وسيط (Wassit)',
          fr: '1. Vérifier votre inscription active sur Wassit Online',
        },
        detail: {
          ar: 'تأكد قبل التقدم لمنحة البطالة من توفر رقم تسجيل ساري المفعول في الملحقة المحلية للتشغيل وأن بطاقتك غير منتهية الصلاحية.',
          fr: 'Assurez-vous de disposer d’un numéro Wassit actif auprès de votre agence locale avant toute démarche sur Minha.',
        },
      },
      {
        title: {
          ar: '2. التسجيل الأولي في منصة منحة (Minha)',
          fr: '2. Effectuer la préinscription sur minha.anem.dz',
        },
        detail: {
          ar: 'أدخل رقم بطاقة التعريف الوطنية ورقم التسجيل في وسيط على منصة minha.anem.dz ليجري النظام التحقق الفوري من شروط الأهلية.',
          fr: 'Saisissez votre NIN et votre numéro ANEM sur minha.anem.dz afin de lancer le contrôle automatique d’éligibilité.',
        },
      },
      {
        title: {
          ar: '3. حجز موعد المقابلة وطبع الاستدعاء',
          fr: '3. Choisir la date de rendez-vous et imprimer la convocation',
        },
        detail: {
          ar: 'عند قبول الطلب أوليا، اختر تاريخ المقابلة المتاح في ملحقتك واطبع وصل الموعد والتعهد للالتحاق بالملحقة في اليوم المحدد.',
          fr: 'Une fois éligible, sélectionnez un créneau disponible dans votre agence locale et imprimez votre convocation.',
        },
      },
      {
        title: {
          ar: '4. التمديد الدوري كل 6 أشهر عبر وسيط أونلاين',
          fr: '4. Prolonger la demande tous les 6 mois sur Wassit',
        },
        detail: {
          ar: 'ادخل كل 6 أشهر إلى رابط التمديد في wassitonline.anem.dz لتجديد طلب العمل والحفاظ على استمرارية منحة البطالة.',
          fr: 'Renouvelez votre inscription en ligne tous les 180 jours sur wassitonline.anem.dz pour éviter toute suspension.',
        },
      },
      {
        title: {
          ar: '5. متابعة عروض الشغل عبر منصة فرصتي',
          fr: '5. Postuler aux offres d’emploi sur Forssati',
        },
        detail: {
          ar: 'سجل الدخول في auth.anem.dz وتصفح عروض العمل المناسبة لشهادتك المهنية أو الجامعية وتقدم لها إلكترونيا.',
          fr: 'Connectez-vous sur auth.anem.dz pour consulter les offres adaptées à votre qualification et soumettre votre candidature.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض التسجيل في منحة بسبب «عدم وجود رقم تعريف وطني مطابق» أو تعليق قديم',
          fr: 'Erreur de NIN ou blocage dû à une ancienne affiliation CNAS/CASNOS',
        },
        solution: {
          ar: 'في حال إنهاء علاقة عمل سابقة ولم تسو بعد في قاعدة البيانات، استخرج شهادة شطب أو عدم الانتساب وتوجه إلى الملحقة المحلية للتشغيل.',
          fr: 'Si vous avez cessé une activité antérieure non encore radiée, procurez-vous une attestation de radiation CNAS/CASNOS et présentez-la à l’ALEM.',
        },
      },
      {
        issue: {
          ar: 'توقف صب المنحة شهريا دون سابق إنذار',
          fr: 'Interruption soudaine du versement de l’allocation',
        },
        solution: {
          ar: 'افحص حسابك في منصة منحة لمعرفة سبب التعليق (غالبا نسيان تمديد 6 أشهر أو التغيب عن استدعاء تكوين) وراجع المستشار المحلي.',
          fr: 'Consultez votre statut sur minha.anem.dz pour identifier le motif exact (prolongation expirée ou convocation manquée) et régularisez en agence.',
        },
      },
      {
        issue: {
          ar: 'مشكلة في إدخال رقم الحساب البريدي CCP في المنصة',
          fr: 'Erreur lors de la saisie du numéro de compte CCP',
        },
        solution: {
          ar: 'تأكد من أن الحساب البريدي جاري ومفتوح باسمك الشخصي وليس حساب توفير أو حسابا مشتركا، وأدخل الرقم مع المفتاح (Clé) بدقة.',
          fr: 'Vérifiez qu’il s’agit d’un compte courant postal CCP personnel actif et saisissez le numéro complet suivi de sa clé à 2 chiffres.',
        },
      },
    ],
    extraFaqs: [],
  },
  anpdp: {
    intro: {
      ar: [
        'تمثل السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP) الهيئة الدستورية المستقلة الساهرة على تطبيق القانون رقم 18-07 المؤرخ في 10 جوان 2018، والمتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي. تهدف السلطة إلى ضمان احترام الكرامة الإنسانية والحياة الخاصة والحريات العامة عند جمع أو تخزين أو تداول البيانات الشخصية للمواطنين.',
        'أطلقت السلطة بوابة إلكترونية مخصصة لتلقي الشكاوى والاحتجاجات والطعون (plaintes.anpdp.dz)، تمكن كل مواطن تعرض لاستغلال غير مشروع لبياناته الشخصية دون إذن مسبق، أو منع من ممارسة حقه في الاطلاع والتصحيح والمسح، من رفع شكوى رسمية ومرفقة بالأدلة الرقمية عن بعد.',
        'علاوة على ذلك، توفر البوابة قنوات لطلب المواعيد وإرسال المراسلات الرسمية الممسوحة ضوئيا، وطرح الانشغالات القانونية المتعلقة بأحكام القانون 18-07 أو التبليغ عن المشاكل التقنية. يوضح هذا الدليل حقوقك الرقمية كمواطن، المستندات اللازمة لتقديم شكوى مقبولة، وخطوات الامتثال بالنسبة للمؤسسات.',
      ],
      fr: [
        "L'Autorité Nationale de Protection des Données à Caractère Personnel (ANPDP) est l'autorité administrative indépendante chargée de veiller au respect de la loi n° 18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données personnelles en Algérie. Elle garantit que toute collecte ou exploitation de données s'effectue dans le respect de la vie privée et des libertés individuelles.",
        "Pour faciliter l'exercice des droits citoyens, l'ANPDP met à disposition le portail dédié plaintes.anpdp.dz permettant à toute personne victime d'une utilisation non autorisée de ses données (ou confrontée à un refus d'accès, de rectification ou de suppression) de déposer une plainte, un recours ou une réclamation documentée en ligne.",
        "La plateforme permet également aux professionnels et citoyens de solliciter un rendez-vous, de transmettre des courriers scannés, de poser des questions juridiques relatives à la loi 18-07 ou de signaler tout dysfonctionnement technique du portail. Ce guide résume les conditions de saisine et la procédure détaillée.",
      ],
    },
    eligibilityChecklist: {
      ar: [
        'وثيقة إثبات الهوية الوطنية لصاحب الشكوى أو تفويض قانوني في حال التمثيل.',
        'تحديد دقيق للجهة أو الموقع أو المؤسسة التي قامت بمعالجة أو نشر البيانات الشخصية بدون إذن.',
        'وثائق وإثباتات ممسوحة ضوئيا (Scanned) أو لقطات شاشة تثبت الاستغلال غير المشروع أو المراسلة السابقة مع الجهة المعنية.',
        'عنوان بريد الكتروني فعال ورقم هاتف لتلقي وصل الإيداع والاستفسارات التكميلية من مصالح السلطة.',
      ],
      fr: [
        'Pièce d’identité valide du plaignant (ou mandat légal en cas de représentation).',
        'Désignation précise de l’organisme, entreprise ou plateforme mis en cause.',
        'Pièces justificatives numérisées (captures d’écran, courriers scannés) démontrant le traitement illicite ou le refus de droit.',
        'Adresse courriel fonctionnelle et numéro de téléphone pour le suivi officiel de l’instruction.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الدخول إلى بوابة شكاوى السلطة الوطنية',
          fr: '1. Accéder au portail plaintes.anpdp.dz',
        },
        detail: {
          ar: 'افتح المنصة الرسمية plaintes.anpdp.dz وتعرف على تصنيف الطلبات المتاحة (شكوى، طلب موعد، استشارة قانونية، أو تبليغ تقني).',
          fr: 'Ouvrez plaintes.anpdp.dz et identifiez la catégorie adaptée (plainte, demande de rendez-vous, avis juridique ou incident technique).',
        },
      },
      {
        title: {
          ar: '2. تحديد موضوع الشكوى أو الاستفسار وفق القانون 18-07',
          fr: '2. Préciser l’objet de la saisine sous la loi 18-07',
        },
        detail: {
          ar: 'صف الواقعة بوضوح (استغلال بيانات بدون موافقة، رفض التصحيح أو الحذف، أو نقل غير مرخص للبيانات) مع ذكر التواريخ.',
          fr: 'Exposez chronologiquement les faits (collecte sans consentement, refus d’effacement, diffusion abusive) avec les dates précises.',
        },
      },
      {
        title: {
          ar: '3. إرفاق المراسلات والأدلة الممسوحة ضوئيا',
          fr: '3. Joindre les justificatifs et courriers scannés',
        },
        detail: {
          ar: 'حمل الملفات الثبوتية بصيغة واضحة ومقروءة لإثبات الضرر أو إرفاق المراسلة الرسمية في حال طلب موعد.',
          fr: 'Importez les preuves numérisées lisibles attestant de l’atteinte aux données ou votre demande écrite scannée pour un rendez-vous.',
        },
      },
      {
        title: {
          ar: '4. إرسال الملف والاحتفاظ برقم المتابعة',
          fr: '4. Valider l’envoi et conserver le récépissé',
        },
        detail: {
          ar: 'راجع كافة البيانات المدخلة ثم أرسل الاستمارة واحتفظ برمز المرجع لتتبع قرارات السلطة ومآل الشكوى.',
          fr: 'Relisez l’ensemble du formulaire, soumettez votre requête et archivez le numéro d’enregistrement attribué.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم قبول المرفقات بسبب حجم الوثائق الممسوحة ضوئيا',
          fr: 'Blocage lors de l’ajout des documents scannés',
        },
        solution: {
          ar: 'اجمع الأدلة في ملف PDF واحد مضغوط وواضح، مع تجنب الأسماء الطويلة أو الرموز الخاصة في اسم الملف المرفوع.',
          fr: 'Regroupez vos justificatifs dans un fichier PDF unique compressé et utilisez un nom de fichier court sans caractères spéciaux.',
        },
      },
      {
        issue: {
          ar: 'الخلط بين الجرائم السيبرانية العاجلة واختصاص ANPDP',
          fr: 'Confusion entre cybercriminalité urgente et compétence ANPDP',
        },
        solution: {
          ar: 'تختص ANPDP بمخالفات معالجة البيانات وفق القانون 18-07، أما حالات الابتزاز الإلكتروني والاختراق الفوري فتستوجب التبليغ السريع لدى مصالح الأمن DGSN أو الدرك PPGN بالتوازي.',
          fr: 'L’ANPDP traite les manquements à la loi 18-07 ; en cas de chantage, usurpation grave ou piratage actif, saisissez parallèlement les services DGSN ou PPGN.',
        },
      },
      {
        issue: {
          ar: 'استفسار شركة حول كيفية التصريح بقاعدة بيانات الموظفين أو الزبائن',
          fr: 'Demande d’entreprise sur la déclaration des traitements',
        },
        solution: {
          ar: 'استخدم الموقع الرئيسي anpdp.dz للاطلاع على نماذج التصريح المسبق وطرح الانشغالات القانونية عبر الفضاء المخصص للهيئات.',
          fr: 'Consultez les guides et formulaires de déclaration préalable sur anpdp.dz ou sollicitez un avis juridique via le canal dédié.',
        },
      },
    ],
    extraFaqs: [],
  },
  arpce: {
    intro: {
      ar: [
        'تضطلع سلطة ضبط البريد والاتصالات الإلكترونية (ARPCE) بدور تنظيمي ورقابي محوري لضمان جودة خدمات الاتصالات والمنافسة العادلة وحماية حقوق المشتركين لدى متعاملي الهاتف النقال والإنترنت ومشغلي الخدمات البريدية في الجزائر. وتتيح السلطة بوابة إلكترونية لتقديم طلبات الخدمة والاعتماد ومطابقة التجهيزات اللاسلكية ودفع الرسوم التنظيمية عن بعد.',
        'من أبرز المبادرات المواطنية التي تدعمها السلطة بالشراكة مع قطاع البريد والمواصلات، منصة المهارات الرقمية لكل جيل 7.77 (777.mpt.gov.dz) التي توفر دورات تدريبية مجانية حضوريا وعن بعد لتعزيز الإدماج الرقمي والأمان عبر الإنترنت. كما طورت السلطة تطبيق جودتي (Jawdati) لتمكين كل مواطن من قياس سرعة وجودة شبكات الجيل الثالث والرابع في منطقته وإرسال القياسات آليا للرقابة.',
        'كما تشرف ARPCE على ضوابط توثيق شرائح الهاتف النقال (SIM) لحماية هوية المواطنين، مما يتيح لكل مشترك التأكد من عدد الأرقام المسجلة باسمه لدى المتعاملين الثلاثة. تجد في هذا الدليل جميع الروابط الرسمية للسلطة، طريقة استخدام تطبيق جودتي، وإجراءات رفع التظلمات.',
      ],
      fr: [
        "L'Autorité de Régulation de la Poste et des Communications Électroniques (ARPCE) veille au bon fonctionnement du marché des télécommunications et des services postaux en Algérie, à la loyauté de la concurrence et à la protection des droits des abonnés. Son portail institutionnel propose le dépôt en ligne des demandes d'agrément, d'homologation d'équipements et le télépaiement des redevances via epay.arpce.dz.",
        "Sur le volet citoyen, le régulateur accompagne l'initiative nationale « Des compétences numériques pour chaque génération 7.77 » (777.mpt.gov.dz), offrant des ateliers gratuits d'inclusion numérique et de sécurité en ligne. L'application officielle Jawdati permet en outre aux usagers de tester en temps réel les performances des réseaux mobiles et de remonter les mesures de terrain.",
        "L'ARPCE encadre également l'identification rigoureuse des cartes SIM afin de protéger l'identité des abonnés. Ce guide regroupe l'ensemble des liens officiels, les démarches de contrôle des lignes enregistrées à votre nom et les recours possibles en cas de litige télécom.",
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بطاقة التعريف الوطنية البيومترية عند مراجعة وكالات المتعاملين للتحقق من شرائح SIM المسجلة باسمك.',
        'إثبات تقديم شكوى سابقة لدى المتعامل المعني (موبيليس، جازي، أوريدو، أو اتصالات الجزائر) قبل تصعيد التظلم إلى ARPCE.',
        'معلومات تقنية كاملة وملف المصنع عند التقدم عبر استمارة طلب خدمة لاعتماد تجهيز اتصالات.',
        'هاتف أندرويد مزود بنظام GPS واتصال إنترنت لتشغيل قياسات الجودة عبر تطبيق جودتي.',
      ],
      fr: [
        'Carte d’identité biométrique pour tout contrôle du nombre de cartes SIM actives auprès des opérateurs.',
        'Référence d’une réclamation préalable déposée chez votre opérateur avant toute saisine de recours à l’ARPCE.',
        'Dossier technique constructeur pour les demandes d’homologation d’équipements terminaux.',
        'Smartphone Android avec GPS activé pour exécuter les mesures de débit sur l’application Jawdati.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. التحقق من شرائح SIM وجودة الشبكة في منطقتك',
          fr: '1. Contrôler vos cartes SIM et tester la qualité réseau',
        },
        detail: {
          ar: 'استعمل تطبيق جودتي لقياس سرعة الإنترنت الفعلية، وتأكد لدى وكالات المتعاملين ببطاقتك البيومترية من عدم وجود خطوط مسجلة باسمك دون علمك.',
          fr: 'Lancez un test de débit via Jawdati et vérifiez auprès des agences opérateurs la liste des cartes SIM rattachées à votre identité.',
        },
      },
      {
        title: {
          ar: '2. حجز دورة تدريبية مجانية في مبادرة 7.77',
          fr: '2. Réserver une session de formation numérique 7.77',
        },
        detail: {
          ar: 'افتح رزنامة 777.mpt.gov.dz، اختر الولاية والمحور التدريبي المناسب لمستواك، وأكد الحجز إلكترونيا.',
          fr: 'Consultez le calendrier sur 777.mpt.gov.dz, choisissez votre wilaya et le module souhaité pour confirmer votre participation.',
        },
      },
      {
        title: {
          ar: '3. إيداع طلب خدمة أو تظلم عبر استمارة ARPCE',
          fr: '3. Soumettre une demande de service ou requête ARPCE',
        },
        detail: {
          ar: 'انتقل إلى arpce.dz/ar/service/request، حدد نوع الطلب أو الإشكال مع المتعامل، وأرفق الوثائق المؤيدة.',
          fr: 'Accédez à arpce.dz/ar/service/request, précisez la nature de la demande ou du litige et joignez les pièces justificatives.',
        },
      },
      {
        title: {
          ar: '4. تسديد الرسوم التنظيمية عبر epay.arpce.dz (للمهنيين)',
          fr: '4. Régler les redevances en ligne sur epay.arpce.dz',
        },
        detail: {
          ar: 'بالنسبة للمؤسسات وطالبي التراخيص، يتم تسديد الفواتير إلكترونيا بالبطاقة البنكية مع تحميل وصل الدفع الرسمي.',
          fr: 'Les entreprises et demandeurs d’agrément peuvent régler leurs factures réglementaires en ligne et archiver le reçu.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'ظهور أرقام هواتف نقال مسجلة باسمي لم أقم بشرائها',
          fr: 'Découverte de lignes mobiles enregistrées à mon nom sans autorisation',
        },
        solution: {
          ar: 'قدم طلبا كتابيا فوريا لدى الوكالة التجارية للمتعامل مرفوقا ببطاقة التعريف الوطنية لإلغاء الشرائح غير المعترف بها، واحتفظ بنسخة من وصل الإلغاء.',
          fr: 'Exigez immédiatement la résiliation des lignes inconnues auprès de l’agence commerciale de l’opérateur sur présentation de votre CNIBE et gardez un récépissé.',
        },
      },
      {
        issue: {
          ar: 'توقف قياس السرعة في تطبيق جودتي أو فشل تحديد الموقع',
          fr: 'Échec de test ou de géolocalisation dans l’application Jawdati',
        },
        solution: {
          ar: 'تأكد من منح التطبيق صلاحية الموقع الجغرافي والهاتف في إعدادات أندرويد وإيقاف تطبيقات VPN مؤقتا أثناء إجراء الاختبار.',
          fr: 'Autorisez la localisation GPS dans les paramètres Android et désactivez tout VPN actif durant la mesure sur Jawdati.',
        },
      },
      {
        issue: {
          ar: 'عدم استجابة المتعامل لشكوى ضعف التغطية أو الفوترة الخاطئة',
          fr: 'Absence de réponse de l’opérateur à une réclamation client',
        },
        solution: {
          ar: 'تقدم بشكوى رسمية إلى ARPCE عبر استمارة طلب الخدمة مرفوقا برقم التذكرة السابقة وتاريخ مراسلة المتعامل لإلزامه بالرد.',
          fr: 'Transmettez votre réclamation à l’ARPCE via arpce.dz/ar/service/request en joignant le numéro de ticket et la copie du courrier envoyé à l’opérateur.',
        },
      },
    ],
    extraFaqs: [],
  },
};
