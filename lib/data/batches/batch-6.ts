import { SectorItem, RichGuideContent } from '../../types';

export const batch6Sectors: SectorItem[] = [
  // 41. mhuv.gov
  {
    id: 'mhuv.gov',
    slug: 'mhuv.gov',
    category: 'housing',
    name: {
      ar: 'وزارة السكن والعمران والمدينة — منصات الاعتماد والعقار',
      fr: 'Ministère de l’Habitat, de l’Urbanisme et de la Ville — Agréments & Foncier',
    },
    acronym: 'MHUV',
    ministry: {
      ar: 'وزارة السكن والعمران والمدينة',
      fr: 'Ministère de l’Habitat, de l’Urbanisme et de la Ville',
    },
    description: {
      ar: 'البوابة الرقمية المركزية لقطاع السكن والعمران والمدينة في الجزائر: تقديم طلبات الاعتماد المهني للمرقي العقاري والوكيل العقاري والمهندس المعتمد، مع ربط متكامل مع بوابات عدل AADL، دواوين الترقية والتسيير العقاري OPGI، والمؤسسة الوطنية للترقية العقارية ENPI.',
      fr: 'Portail numérique du secteur de l’Habitat, de l’Urbanisme et de la Ville : dépôt en ligne des demandes d’agrément pour promoteurs immobiliers, agents immobiliers et ingénieurs agréés, en articulation avec les dispositifs AADL, OPGI et ENPI.',
    },
    officialUrl: 'https://www.mhuv.gov.dz/',
    portalUrl: 'https://eagrement-pi.mhuv.gov.dz/',
    iconName: 'Building2',
    isPopular: false,
    services: [
      {
        id: 'mhuv.gov-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة السكن والعمران والمدينة',
          fr: 'Site Officiel du Ministère de l’Habitat (MHUV)',
        },
        description: {
          ar: 'البوابة المؤسساتية لنشر النصوص التنظيمية للعمران، المراسيم التنفيذية للسكن، ومستجدات البرامج السكنية عبر التراب الوطني.',
          fr: 'Portail institutionnel regroupant la réglementation d’urbanisme, les décrets exécutifs de l’habitat et les communiqués des programmes nationaux.',
        },
        url: 'https://www.mhuv.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mhuv.gov-srv-2',
        title: {
          ar: 'منصة طلب اعتماد مرقي عقاري',
          fr: 'Demande d’Agrément de Promoteur Immobilier',
        },
        description: {
          ar: 'خدمة رقمية مخصصة للمتعاملين والمؤسسات الراغبة في إيداع ملف الحصول على اعتماد مرقي عقاري أو تجديده ومتابعة دراسة الملف عن بعد.',
          fr: 'Téléservice dédié aux professionnels et sociétés pour déposer et suivre en ligne leur demande d’agrément de promoteur immobilier.',
        },
        url: 'https://eagrement-pi.mhuv.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mhuv.gov-srv-3',
        title: {
          ar: 'منصة طلب اعتماد وكيل عقاري',
          fr: 'Demande d’Agrément d’Agent Immobilier',
        },
        description: {
          ar: 'فضاء إلكتروني لتقديم ملفات اعتماد الوكلاء العقاريين وتسيير المعاملات العقارية وفق الضوابط القانونية السارية في الجزائر.',
          fr: 'Plateforme officielle pour solliciter l’agrément réglementaire d’agent immobilier et gérer le suivi administratif du dossier.',
        },
        url: 'https://e-agrement-agent.mhuv.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mhuv.gov-srv-4',
        title: {
          ar: 'منصة طلب اعتماد مهندس ومختص تقني',
          fr: 'Demande d’Agrément d’Ingénieur',
        },
        description: {
          ar: 'بوابة إلكترونية مخصصة للمهندسين في قطاع البناء والأشغال العمومية لإيداع ملفات الاعتماد التقني واستلام القرارات الإدارية.',
          fr: 'Guichet numérique permettant aux ingénieurs du bâtiment de soumettre leur dossier d’agrément technique auprès des commissions compétentes.',
        },
        url: 'https://e-agrement-ingenieur.mhuv.gov.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المتعاملون في الترقية العقارية، الوكلاء العقاريون، المهندسون المعتمدون، والمواطنون الباحثون عن أطر تنظيم البرامج السكنية',
        fr: 'Promoteurs immobiliers, agents immobiliers, ingénieurs du bâtiment et citoyens suivant le cadre réglementaire du logement',
      },
      processingTime: {
        ar: 'إيداع فوري للملفات الرقمية؛ دراسة ومصادقة اللجنة الوزارية أو الولائية وفق الآجال التنظيمية لكل اعتماد',
        fr: 'Dépôt numérique immédiat ; instruction par les commissions ministérielles ou de wilaya selon les délais réglementaires',
      },
      fees: {
        ar: 'التسجيل وإيداع الطلبات عبر المنصات مجاني؛ تطبق رسوم الطابع الضريبي أو الضمان المالي القانوني عند استلام الاعتماد',
        fr: 'Dépôt en ligne gratuit ; droits de timbre et cautions légales exigibles uniquement selon la nature de l’agrément délivré',
      },
      channel: {
        ar: 'منصات الاعتماد الإلكترونية التابعة لوزارة السكن ومديريات السكن والتعمير بالولايات',
        fr: 'Portails e-agrément du MHUV et Directions du Logement et de l’Urbanisme de wilaya',
      },
      keyRequirement: {
        ar: 'شهادة جامعية أو تأهيل مهني معترف به، السجل التجاري عند الاقتضاء، وصحيفة السوابق القضائية سارية المفعول',
        fr: 'Diplôme ou qualification requise, registre du commerce le cas échéant et casier judiciaire en cours de validité',
      },
    },
    requirements: [
      {
        label: {
          ar: 'ملف الهوية والأهلية القانونية',
          fr: 'Identité et aptitude juridique',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية، شهادة ميلاد، ومستخرج صحيفة السوابق القضائية رقم 3 تثبت التمتع بالحقوق المدنية',
          fr: 'CNIBE, extrait de naissance et bulletin du casier judiciaire n° 3 attestant de la pleine capacité civile',
        },
      },
      {
        label: {
          ar: 'المؤهلات العلمية والخبرة المهنية',
          fr: 'Diplômes et expérience professionnelle',
        },
        value: {
          ar: 'نسخة من الشهادة الجامعية في الهندسة أو القانون أو الاقتصاد أو التسيير العقاري مع شهادات العمل المطلوبة حسب فئة الاعتماد',
          fr: 'Copie du diplôme universitaire requis (architecture, génie civil, droit, gestion) et attestations d’expérience selon l’agrément',
        },
      },
      {
        label: {
          ar: 'مقر النشاط والضمانات المالية',
          fr: 'Local professionnel et garanties financières',
        },
        value: {
          ar: 'سند ملكية أو عقد إيجار لمحل مهني ملائم، بالإضافة إلى الملاءة المالية أو الضمان البنكي بالنسبة للمرقين العقاريين',
          fr: 'Titre de propriété ou bail commercial d’un local dédié et justificatifs de solvabilité ou garantie bancaire pour les promoteurs',
        },
      },
      {
        label: {
          ar: 'الالتزام بقواعد السكن العمومي والترقوي',
          fr: 'Conformité aux régimes AADL, OPGI et ENPI',
        },
        value: {
          ar: 'احترام دفتر الشروط المنظم للنشاط العقاري أو التوجه مباشرة إلى منصات عدل، دواوين OPGI، وENPI للاكتتاب السكني للأفراد',
          fr: 'Respect du cahier des charges réglementaire ou orientation vers AADL, OPGI et ENPI pour les demandes de logement des particuliers',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن للمواطن طلب سكن عدل أو الترقوي عبر منصات الاعتماد التابعة لوزارة السكن؟',
          fr: 'Un particulier peut-il demander un logement AADL ou LPP via les portails e-agrément du ministère ?',
        },
        answer: {
          ar: 'منصات الاعتماد الإلكترونية للوزارة مخصصة للمهنيين (مرقي عقاري، وكيل عقاري، مهندس)، أما الاكتتاب في البرامج السكنية فيتم عبر البوابات المتخصصة مثل عدل AADL أو المؤسسة الوطنية للترقية العقارية ENPI أو دواوين OPGI.',
          fr: 'Les plateformes e-agrément s’adressent exclusivement aux professionnels (promoteurs, agents, ingénieurs). Les demandes de logement des citoyens s’effectuent sur les portails dédiés : AADL, ENPI ou OPGI.',
        },
      },
      {
        question: {
          ar: 'كيف يتم تتبع طلب اعتماد مرقي عقاري أو وكيل عقاري بعد الإيداع؟',
          fr: 'Comment suivre l’avancement d’un dossier d’agrément après soumission ?',
        },
        answer: {
          ar: 'بعد إنشاء حساب على المنصة المعنية ورفع الوثائق بصيغة PDF، يحصل المترشح على رقم تتبع يتيح له متابعة حالة دراسة الملف وطلبات الاستكمال من لوحة التحكم الخاصة به.',
          fr: 'Après création du compte et dépôt des justificatifs au format PDF, un identifiant de suivi permet de consulter chaque étape d’instruction et les éventuels compléments depuis votre tableau de bord.',
        },
      },
      {
        question: {
          ar: 'ما هي المؤهلات المطلوبة للحصول على اعتماد وكيل عقاري؟',
          fr: 'Quelles qualifications sont exigées pour obtenir l’agrément d’agent immobilier ?',
        },
        answer: {
          ar: 'يشترط التنظيم المعمول به حيازة شهادة عليا في الاختصاصات القانونية أو الاقتصادية أو التقنية العقارية، أو شهادة تقني سامي في المجال مع خبرة مهنية مثبتة وتوفر محل مخصص للنشاط.',
          fr: 'La réglementation exige un diplôme d’enseignement supérieur (droit, économie, finance, immobilier) ou un diplôme de technicien supérieur avec expérience justifiée et un local professionnel conforme.',
        },
      },
      {
        question: {
          ar: 'ما هي الإجراءات عند طلب تجديد أو تعديل قرار اعتماد المهندس المعتمد؟',
          fr: 'Comment renouveler ou mettre à jour un agrément d’ingénieur ?',
        },
        answer: {
          ar: 'يتم الولوج إلى منصة اعتماد المهندس باستخدام بيانات الحساب المسجل ورفع الوثائق المحينة مثل شهادة الانتساب للصندوق الاجتماعي ووثائق المقر والنشاط قبل انتهاء مدة الصلاحية.',
          fr: 'Il suffit de vous connecter au portail dédié aux ingénieurs, d’actualiser vos justificatifs professionnels et d’affiliation sociale (CASNOS/CNAS), puis de soumettre la demande de renouvellement avant échéance.',
        },
      },
    ],
  },

  // 42. mjeunesse.gov
  {
    id: 'mjeunesse.gov',
    slug: 'mjeunesse.gov',
    category: 'ministries',
    name: {
      ar: 'وزارة الشباب — التكوين، القيادة، الهاكاثون والتخييم',
      fr: 'Ministère de la Jeunesse — Formation, Leadership, Hackathons & Séjours',
    },
    acronym: 'MJEUNESSE',
    ministry: {
      ar: 'وزارة الشباب',
      fr: 'Ministère de la Jeunesse',
    },
    description: {
      ar: 'المنظومة الرقمية الشاملة لوزارة الشباب في الجزائر: التسجيل في برامج القيادة الشبابية DZ Young Leaders وYouthConnect، مسابقات التوظيف والتكوين المتخصص بالمدرسة العليا لتأطير الشباب ESSTEJ، مخيمات العطل الصيفية وتكوينات الجالية بالخارج، وتطبيق دليل بيوت الشباب.',
      fr: 'Écosystème numérique du Ministère de la Jeunesse : programmes de leadership DZ Young Leaders et YouthConnect, formations et concours ESSTEJ, camps de vacances Moukhayami pour les jeunes et la diaspora, hackathons nationaux et application Auberges de Jeunesse.',
    },
    officialUrl: 'https://mjeunesse.gov.dz/',
    portalUrl: 'https://youthconnect.mjeunesse.gov.dz/signup',
    iconName: 'Users',
    isPopular: false,
    services: [
      {
        id: 'mjeunesse.gov-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة الشباب',
          fr: 'Portail Officiel du Ministère de la Jeunesse',
        },
        description: {
          ar: 'البوابة الوزارية الرئيسية للاطلاع على برامج دعم الشباب، المبادرات الجمعوية، والإعلانات الوطنية للمسابقات والتكوينات.',
          fr: 'Site officiel centralisant la stratégie nationale pour la jeunesse, les appels à projets associatifs et les annonces de programmes.',
        },
        url: 'https://mjeunesse.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-2',
        title: {
          ar: 'منصة التسجيل في الأنشطة الشبابية (YouthConnect)',
          fr: 'Inscription aux Activités Jeunesse — YouthConnect',
        },
        description: {
          ar: 'حساب شباني موحد للتسجيل في النوادي العلمية والثقافية والأنشطة القيادية ومشاريع الشباب عبر ولايات الوطن.',
          fr: 'Espace d’inscription unifié pour participer aux clubs scientifiques, activités culturelles et initiatives de leadership à travers les wilayas.',
        },
        url: 'https://youthconnect.mjeunesse.gov.dz/signup',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-3',
        title: {
          ar: 'دليل برنامج القيادة الشبابية DZ Young Leaders',
          fr: 'Guide du Programme DZ Young Leaders',
        },
        description: {
          ar: 'منصة تعريفية وتوجيهية حول شروط الانضمام إلى برنامج إعداد القيادات الشابة ومحاور التكوين في المبادرة والمواطنة.',
          fr: 'Portail d’information présentant les critères de participation, le parcours de mentorat et les modalités du programme DZ Young Leaders.',
        },
        url: 'https://youngleaders.mjeunesse.gov.dz/#participation',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-4',
        title: {
          ar: 'المدرسة العليا لعلوم وتقنيات تأطير الشباب (ESSTEJ)',
          fr: 'École Supérieure ESSTEJ — Encadrement de la Jeunesse',
        },
        description: {
          ar: 'منصة المدرسة العليا لتأهيل الكفاءات المسيرة لمؤسسات الشباب والتنشيط التربوي ومتابعة المسارات البيداغوجية.',
          fr: 'Plateforme académique dédiée à la formation des cadres supérieurs d’animation éducative et de gestion des établissements de jeunesse.',
        },
        url: 'https://esstej.mjeunesse.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-5',
        title: {
          ar: 'مسابقات التكوين المتخصص (مربي رئيسي لتنشيط الشباب)',
          fr: 'Concours de Formation Spécialisée — Éducateurs Principaux',
        },
        description: {
          ar: 'بوابة التسجيل في الاختبارات الوطنية للالتحاق بالتكوين المتخصص في رتبة مربي رئيسي لتنشيط الشباب ومتابعة القوائم.',
          fr: 'Portail d’inscription aux concours nationaux d’accès à la formation spécialisée au grade d’éducateur principal d’animation de jeunesse.',
        },
        url: 'https://takwin.mjeunesse.gov.dz/competitions/',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-6',
        title: {
          ar: 'التكوين التأهيلي الأولي في تركيب الهواتف الذكية',
          fr: 'Formation Qualifiante — Montage de Smartphones',
        },
        description: {
          ar: 'استمارة تسجيل إلكترونية للشباب في الدورة التأهيلية التخصصية لمهن تركيب وصيانة الهواتف الذكية عبر منصة تكوين.',
          fr: 'Formulaire d’inscription à la formation professionnelle qualifiante dans le domaine de l’assemblage et réparation de smartphones.',
        },
        url: 'https://takwin.dz/inscription/264797',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-7',
        title: {
          ar: 'منصة الهاكاثون الوطني للشباب',
          fr: 'Portail du Hackathon National de la Jeunesse',
        },
        description: {
          ar: 'بوابة المبتكرين والمطورين الشباب للاطلاع على تحديات الهاكاثون، قواعد المنافسة، وتقديم المشاريع الرقمية.',
          fr: 'Plateforme officielle dédiée aux développeurs et porteurs d’idées pour découvrir les défis du hackathon national et soumettre leurs projets.',
        },
        url: 'https://hackathon-2025.mjeunesse.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-8',
        title: {
          ar: 'مراكز العطل ومخيمات التخييم (مخيمي)',
          fr: 'Centres de Vacances et Camping — Moukhayami',
        },
        description: {
          ar: 'دليل مراكز العطل الساحلية والجبلية المعتمدة لاستقبال الأطفال والشباب خلال مواسم التخييم الرسمية.',
          fr: 'Annuaire interactif des centres de vacances côtiers et de montagne agréés pour les séjours de jeunesse.',
        },
        url: 'https://moukhayami.mjeunesse.gov.dz/center/',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-9',
        title: {
          ar: 'برامج التخييم والترفيه التربوي',
          fr: 'Programmes de Camps et d’Animation Éducative',
        },
        description: {
          ar: 'الاطلاع على الرزنامة الموسمية وبرامج الأنشطة التربوية والترفيهية المعتمدة داخل مخيمات الشباب.',
          fr: 'Consultation des programmes pédagogiques, culturels et sportifs planifiés dans les camps de vacances nationaux.',
        },
        url: 'https://moukhayami.mjeunesse.gov.dz/programme/',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-10',
        title: {
          ar: 'مخيمات أبناء الجالية الجزائرية بالخارج',
          fr: 'Centres Dédiés à la Communauté Algérienne à l’Étranger',
        },
        description: {
          ar: 'فضاء مخصص لتعريف أسر الجالية الوطنية بالخارج بمراكز الاستقبال وبرامج التبادل الصيفي لأبنائهم في أرض الوطن.',
          fr: 'Section réservée aux enfants de la diaspora algérienne présentant les centres d’accueil et programmes culturels d’été en Algérie.',
        },
        url: 'https://moukhayami.mjeunesse.gov.dz/communaute-algerienne-a-l-etranger/',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-11',
        title: {
          ar: 'التواصل مع فريق عمل وزارة الشباب ومخيمي',
          fr: 'Contact et Support — Plateforme Moukhayami & Jeunesse',
        },
        description: {
          ar: 'نموذج اتصال مباشر مع مصالح التخييم والشباب لطرح الاستفسارات حول المراكز، الجالية، أو شروط المشاركة.',
          fr: 'Formulaire de contact officiel permettant de joindre les équipes de gestion des camps de vacances et activités jeunesse.',
        },
        url: 'https://moukhayami.mjeunesse.gov.dz/contact/',
        isOnline: true,
      },
      {
        id: 'mjeunesse.gov-srv-12',
        title: {
          ar: 'تطبيق دليل بيوت الشباب في الجزائر (Android)',
          fr: 'Application Mobile Guide des Auberges de Jeunesse',
        },
        description: {
          ar: 'تطبيق هاتفي لتصفح شبكة بيوت الشباب عبر الولايات، الاطلاع على المواقع الجغرافية وخدمات الإيواء والتواصل.',
          fr: 'Application Android recensant le réseau des auberges de jeunesse en Algérie avec géolocalisation et informations pratiques d’hébergement.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.ouledmimounhostel.algeriahostels',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الشباب الجزائري داخل الوطن وأبناء الجالية بالخارج، الجمعيات الشبابية، الطلبة، والمترشحون لمسابقات التأطير والتكوين',
        fr: 'Jeunes résidant en Algérie ou issus de la diaspora, associations de jeunesse, étudiants et candidats aux concours d’encadrement',
      },
      processingTime: {
        ar: 'تسجيل إلكتروني فوري في البرامج المفتوحة؛ دراسة طلبات المسابقات والهاكاثون والمخيمات وفق الرزنامة المعلنة لكل دورة',
        fr: 'Inscription immédiate sur les portails ouverts ; sélection et convocation selon le calendrier propre à chaque session',
      },
      fees: {
        ar: 'التسجيل في منصات الشباب والهاكاثون وبرامج القيادة والمسابقات مجاني تماما',
        fr: 'Accès et inscription aux plateformes YouthConnect, hackathons, concours et programmes jeunesse entièrement gratuits',
      },
      channel: {
        ar: 'البوابات الرقمية الفرعية تحت نطاق mjeunesse.gov.dz وتطبيق دليل بيوت الشباب ودور الشباب الولائية',
        fr: 'Portails numériques sous mjeunesse.gov.dz, application Auberges de Jeunesse et maisons de jeunes de wilaya',
      },
      keyRequirement: {
        ar: 'بطاقة التعريف الوطنية أو جواز السفر، البريد الإلكتروني الشخصي، والوثائق التكميلية حسب الفئة العمرية أو المسابقة',
        fr: 'CNIBE ou passeport, adresse e-mail personnelle active et justificatifs d’âge ou de diplôme selon le programme',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الحساب الشخصي والهوية القانونية',
          fr: 'Compte personnel et identité',
        },
        value: {
          ar: 'التسجيل بالاسم الكامل وتاريخ الميلاد ورقم التعريف الوطني أو جواز السفر مع بريد إلكتروني فعال لاستقبال الإشعارات',
          fr: 'Inscription avec identité exacte, date de naissance, NIN ou passeport et messagerie électronique active',
        },
      },
      {
        label: {
          ar: 'الشروط العمرية والمؤهلات العلمية',
          fr: 'Conditions d’âge et diplômes requis',
        },
        value: {
          ar: 'الالتزام بالسن المحدد لمخيمات التخييم (الأطفال والشباب) أو الشهادة الجامعية والمستوى الدراسي لمسابقات ESSTEJ والتكوين المتخصص',
          fr: 'Respect de la tranche d’âge pour les camps de vacances et des niveaux académiques exigés pour les concours ESSTEJ ou formations',
        },
      },
      {
        label: {
          ar: 'الترخيص الأبوي للقصر (التخييم وبيوت الشباب)',
          fr: 'Autorisation parentale et dossier médical (mineurs)',
        },
        value: {
          ar: 'شهادة طبية تثبت اللياقة وموافقة الولي القانوني للمشاركين دون سن الرشد في مراكز العطل والأنشطة المخيمية',
          fr: 'Certificat médical d’aptitude et autorisation du tuteur légal pour les mineurs participant aux colonies et camps de vacances',
        },
      },
      {
        label: {
          ar: 'بطاقة الانخراط لبيوت الشباب والهاكاثون',
          fr: 'Adhésion auberges et dossiers de projets Hackathon',
        },
        value: {
          ar: 'تقديم بطاقة بيوت الشباب للإيواء في الرحلات، وتفاصيل الفريق والفكرة المبتكرة عند التقديم لتحديات الهاكاثون والقيادة',
          fr: 'Carte de membre des auberges de jeunesse pour l’hébergement et présentation synthétique de l’équipe et du projet pour les hackathons',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين منصة YouthConnect وبرنامج DZ Young Leaders؟',
          fr: 'Quelle différence entre YouthConnect et DZ Young Leaders ?',
        },
        answer: {
          ar: 'تمثل YouthConnect البوابة الشاملة للانخراط في الأنشطة والفضاءات الشبابية الوطنية، بينما يركز برنامج DZ Young Leaders على تأطير الشباب في مهارات القيادة، العمل التطوعي، والمبادرة المجتمعية.',
          fr: 'YouthConnect est le guichet général d’inscription aux activités et réseaux jeunesse, tandis que DZ Young Leaders est un parcours ciblé sur le leadership, l’engagement citoyen et la gestion de projets.',
        },
      },
      {
        question: {
          ar: 'كيف يسجل أبناء الجالية الجزائرية بالخارج في مخيمات العطل الصيفية؟',
          fr: 'Comment les enfants de la diaspora s’inscrivent-ils aux camps d’été Moukhayami ?',
        },
        answer: {
          ar: 'خصصت الوزارة قسما مستقلا على منصة مخيمي لأبناء الجالية في الخارج يتضمن المراكز المهيأة والبرنامج الثقافي، مع التنسيق عبر الممثليات القنصلية واستمارة التواصل الرسمية.',
          fr: 'Un espace spécifique du portail Moukhayami recense les centres réservés à la communauté à l’étranger, complété par les inscriptions auprès des consulats et le formulaire de contact dédié.',
        },
      },
      {
        question: {
          ar: 'هل يمكن التسجيل في مسابقة مربي رئيسي لتنشيط الشباب عن بعد؟',
          fr: 'L’inscription au concours d’éducateur principal d’animation se fait-elle en ligne ?',
        },
        answer: {
          ar: 'نعم، تتوفر بوابة مسابقات التكوين takwin.mjeunesse.gov.dz لملء الاستمارة الإلكترونية وإرفاق الوثائق المطلوبة عند فتح كل دورة توظيف أو تكوين.',
          fr: 'Oui, dès l’ouverture des sessions officielles, les candidats remplissent leur dossier et déposent les pièces requises directement sur takwin.mjeunesse.gov.dz.',
        },
      },
      {
        question: {
          ar: 'ماذا يقدم تطبيق دليل بيوت الشباب في الجزائر؟',
          fr: 'Que permet l’application mobile Guide des Auberges de Jeunesse ?',
        },
        answer: {
          ar: 'يوفر التطبيق قائمة محينة ببيوت الشباب ومراكز الإيواء عبر الولايات مع أرقام الهاتف، الموقع الجغرافي، وشروط الاستفادة من المبيت والرحلات المنظمة.',
          fr: 'Elle fournit la carte interactive, les coordonnées et les conditions d’accès de l’ensemble des auberges de jeunesse implantées à travers le pays.',
        },
      },
    ],
  },

  // 43. mjustice
  {
    id: 'mjustice',
    slug: 'mjustice',
    category: 'justice_interior',
    name: {
      ar: 'وزارة العدل — النيابة الإلكترونية، صحيفة السوابق والجنسية (عدالة تيك)',
      fr: 'Ministère de la Justice — E-Nyaba, Casier Judiciaire & Nationalité (AdalaTic)',
    },
    acronym: 'MJUSTICE',
    ministry: {
      ar: 'وزارة العدل',
      fr: 'Ministère de la Justice',
    },
    description: {
      ar: 'بوابة الخدمات القضائية الرقمية لوزارة العدل الجزائرية: استخراج صحيفة السوابق القضائية رقم 3 وشهادة الجنسية الجزائرية عن بعد، إيداع ومتابعة الشكاوى عبر النيابة الإلكترونية E-Nyaba، طلب نسخ عقود المحاكم ومستخرجات الأرشيف الثوري، وحجز رخص زيارة المحبوسين عبر زيارتي وتطبيق AdalaTic.',
      fr: 'Portail des services judiciaires en ligne du Ministère de la Justice : extraction à distance du casier judiciaire B3 et du certificat de nationalité, dépôt et suivi de plaintes via E-Nyaba, demandes de copies de jugements, archives historiques, visites aux détenus Ziyarati et application AdalaTic.',
    },
    officialUrl: 'https://www.mjustice.dz/ar/',
    portalUrl: 'https://e-nyaba.mjustice.dz/nouvelle_plainte.php',
    iconName: 'Scale',
    isPopular: true,
    services: [
      {
        id: 'mjustice-srv-1',
        title: {
          ar: 'البوابة الرسمية لوزارة العدل الجزائرية',
          fr: 'Site Officiel du Ministère de la Justice',
        },
        description: {
          ar: 'المنصة الرسمية التي تضم خريطة الجهات القضائية عبر الوطن، الترسانة التشريعية، وروابط كافة الخدمات القضائية عن بعد.',
          fr: 'Portail institutionnel regroupant l’annuaire des juridictions, les textes législatifs et l’ensemble des téléservices judiciaires.',
        },
        url: 'https://www.mjustice.dz/ar/',
        isOnline: true,
      },
      {
        id: 'mjustice-srv-2',
        title: {
          ar: 'النيابة الإلكترونية — إيداع شكوى أو عريضة عن بعد',
          fr: 'E-Nyaba — Dépôt d’une Nouvelle Plainte en Ligne',
        },
        description: {
          ar: 'خدمة رقمية تتيح للمواطن تقديم شكوى أو تبليغ إلى وكيل الجمهورية إلكترونيا من أي مكان مع الحصول على وصل تسجيل فوري.',
          fr: 'Téléservice permettant à tout citoyen de soumettre une plainte ou requête au procureur de la République avec récépissé immédiat.',
        },
        url: 'https://e-nyaba.mjustice.dz/nouvelle_plainte.php',
        isOnline: true,
      },
      {
        id: 'mjustice-srv-3',
        title: {
          ar: 'استخراج صحيفة السوابق القضائية رقم 3 (E-Casier)',
          fr: 'Extrait du Casier Judiciaire B3 en Ligne (E-Casier)',
        },
        description: {
          ar: 'تحميل صحيفة السوابق القضائية موقعة إلكترونيا بصيغة PDF فور المصادقة، سواء للمولودين داخل الجزائر أو الموثقين لدى المصالح القنصلية.',
          fr: 'Téléchargement du bulletin n° 3 du casier judiciaire signé électroniquement au format PDF après validation de l’identité.',
        },
        url: 'https://e-casier.mjustice.dz/',
        isOnline: true,
      },
      {
        id: 'mjustice-srv-4',
        title: {
          ar: 'بوابة استخراج شهادة الجنسية الجزائرية عن بعد',
          fr: 'Demande de Certificat de Nationalité Algérienne',
        },
        description: {
          ar: 'فضاء إلكتروني مؤمن لطلب واستلام شهادة الجنسية الجزائرية الأصلية موقعة إلكترونيا باستخدام حساب المواطن المسجل لدى العدالة.',
          fr: 'Portail sécurisé permettant de demander et télécharger le certificat de nationalité algérienne muni de la signature électronique.',
        },
        url: 'https://portail.mjustice.dz/remote/login?lang=fr',
        isOnline: true,
      },
      {
        id: 'mjustice-srv-5',
        title: {
          ar: 'طلب مستخرج الوجود بالسجن إبان الثورة التحريرية',
          fr: 'Extrait d’Incarcération durant la Révolution de Libération',
        },
        description: {
          ar: 'خدمة مخصصة لذوي الحقوق والباحثين لاستصدار شهادات الوجود بالسجون والمحتشدات إبان الثورة عبر أرشيف وزارة العدل.',
          fr: 'Service numérique de demande d’attestation historique de détention durant la guerre de libération nationale auprès des archives.',
        },
        url: 'https://www.mjustice.dz/ar/archive/',
        isOnline: true,
      },
      {
        id: 'mjustice-srv-6',
        title: {
          ar: 'طلب نسخة من الأحكام والقرارات وعقود المحاكم',
          fr: 'Demande de Copies de Jugements et Actes Judiciaires',
        },
        description: {
          ar: 'طلب نسخ الأحكام والقرارات القضائية المدنية أو الجزائية الصادرة عن المجالس القضائية والمحاكم عبر التراب الوطني.',
          fr: 'Service permettant aux parties et avocats de solliciter des expéditions de jugements et d’arrêts rendus par les juridictions.',
        },
        url: 'https://www.mjustice.dz/ar/tr-ch/',
        isOnline: true,
      },
      {
        id: 'mjustice-srv-7',
        title: {
          ar: 'منصة زيارتي — طلب رخص الاتصال وزيارة المحبوسين',
          fr: 'Plateforme Ziyarati — Permis de Visite et Contact Détenus',
        },
        description: {
          ar: 'تقديم طلبات رخص الزيارة العائلية أو الاتصال بالمؤسسات العقابية إلكترونيا دون الانتظار في شبابيك المحاكم.',
          fr: 'Téléservice de demande d’autorisation de visite familiale ou de communication avec les détenus au sein des établissements pénitentiaires.',
        },
        url: 'https://ziyarati.mjustice.dz/',
        isOnline: true,
      },
      {
        id: 'mjustice-srv-8',
        title: {
          ar: 'متابعة مآل الشكاوى في النيابة الإلكترونية',
          fr: 'Suivi des Plaintes — Espace E-Nyaba',
        },
        description: {
          ar: 'الاطلاع على مراحل معالجة الشكوى المودعة، رقم الملف القضائي، ومآل الإجراءات لدى النيابة العامة.',
          fr: 'Consultation de l’état d’avancement d’une plainte déposée et suivi de l’orientation décidée par le parquet.',
        },
        url: 'https://e-nyaba.mjustice.dz/login.php',
        isOnline: true,
      },
      {
        id: 'mjustice-srv-9',
        title: {
          ar: 'تطبيق العدالة الرقمية AdalaTic (Android)',
          fr: 'Application Mobile Officielle AdalaTic',
        },
        description: {
          ar: 'تطبيق وزارة العدل للهواتف الذكية للوصول السريع إلى بوابات السوابق، الجنسية، الشكاوى، ومواقع المحاكم.',
          fr: 'Application officielle du Ministère de la Justice offrant un accès mobile rapide aux téléservices et à l’annuaire judiciaire.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.mjustice.e_service&pcampaignid=web_share',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون داخل الجزائر والجالية بالخارج، المحامون، والمتقاضون في المحاكم والمجالس القضائية',
        fr: 'Citoyens en Algérie et à l’étranger, avocats, justiciables et familles des détenus',
      },
      processingTime: {
        ar: 'تسليم فوري إلكترونيا لصحيفة السوابق (بعد تفعيل الحساب)؛ دراسة ومعالجة الشكاوى وطلبات العقود في غضون أيام عمل',
        fr: 'Délivrance immédiate en ligne du B3 (compte validé) ; instruction des plaintes et actes sous quelques jours ouvrables',
      },
      fees: {
        ar: 'استخراج الوثائق الموقعة إلكترونيا (السوابق 3 والجنسية) وتقديم شكاوى النيابة الإلكترونية مجاني بالكامل',
        fr: 'L’extraction électronique du casier B3, de la nationalité et le dépôt de plainte E-Nyaba sont gratuits',
      },
      channel: {
        ar: 'بوابات mjustice.dz الفرعية، تطبيق AdalaTic، وشبابيك المحاكم والمجالس القضائية لتفعيل الحساب الأولي',
        fr: 'Portails web mjustice.dz, application AdalaTic et guichets des tribunaux pour la remise initiale des identifiants',
      },
      keyRequirement: {
        ar: 'حساب شخصي مفعل من شباك المحكمة (رقم المستخدم وكلمة المرور) للوثائق الموقعة، أو رقم التعريف الوطني NIN لخدمات النيابة',
        fr: 'Identifiants délivrés au guichet d’un tribunal pour les actes signés (B3/nationalité) ou NIN pour les dépôts E-Nyaba',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تفعيل حساب الوثائق عن بعد (شباك المحكمة)',
          fr: 'Activation du compte documents sécurisés',
        },
        value: {
          ar: 'التقدم مرة واحدة لأقرب محكمة أو مجلس قضائي مصحوبا ببطاقة التعريف والرقم الهاتفي لاستلام اسم المستخدم وكلمة المرور لخدمات السوابق والجنسية',
          fr: 'Passage unique au guichet d’un tribunal muni de la CNIBE et d’un mobile pour recevoir vos identifiants d’accès sécurisé B3 et nationalité',
        },
      },
      {
        label: {
          ar: 'بيانات الحالة المدنية والوثيقة الأصلية السابقة',
          fr: 'Données d’état civil et acte initial',
        },
        value: {
          ar: 'بالنسبة لشهادة الجنسية عن بعد، يشترط أن تكون الشهادة قد استصدرت ورقيا لمرة واحدة على الأقل سابقا لتتوفر قاعدة البيانات على بيانات النسب',
          fr: 'Pour le certificat de nationalité en ligne, une première délivrance physique préalable est nécessaire afin d’enregistrer la filiation',
        },
      },
      {
        label: {
          ar: 'وثائق ومؤيدات شكوى النيابة الإلكترونية',
          fr: 'Pièces justificatives pour plainte E-Nyaba',
        },
        value: {
          ar: 'رقم التعريف الوطني، تفاصيل الواقعة وتحديد الجهة القضائية المختصة، مع إرفاق الأدلة والمستندات الممسوحة ضوئيا بصيغة PDF',
          fr: 'Numéro d’identification national, exposé clair des faits, choix de la juridiction compétente et pièces jointes en PDF',
        },
      },
      {
        label: {
          ar: 'إثبات القرابة لمنصة زيارتي',
          fr: 'Justificatif de lien familial pour Ziyarati',
        },
        value: {
          ar: 'تقديم بطاقة التعريف الوطنية وصلة القرابة بالموقوف أو المحبوس واختيار المؤسسة العقابية عند تقديم طلب رخصة الزيارة',
          fr: 'CNIBE du demandeur, justification du lien de parenté avec le détenu et sélection de l’établissement pénitentiaire concerné',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تحمل صحيفة السوابق القضائية المستخرجة عبر الإنترنت نفس قيمة النسخة الورقية؟',
          fr: 'Le casier judiciaire B3 téléchargé en ligne a-t-il la même valeur légale que l’original papier ?',
        },
        answer: {
          ar: 'نعم، تتضمن الوثيقة المستخرجة عبر الإنترنت توقيعا إلكترونيا معتمدا ورمز تحقق QR Code يسمح لأي إدارة أو مؤسسة بالتحقق الفوري من صحتها، ولا تحتاج إلى تصديق إضافي.',
          fr: 'Oui, le document PDF généré comporte une signature électronique officielle et un QR code de vérification permettant à toute administration d’en contrôler l’authenticité sans légalisation supplémentaire.',
        },
      },
      {
        question: {
          ar: 'كيف أحصل على اسم المستخدم وكلمة المرور لاستخراج الجنسية والسوابق؟',
          fr: 'Comment obtenir les identifiants nécessaires pour le B3 et la nationalité en ligne ?',
        },
        answer: {
          ar: 'يتوجه المواطن شخصيا لمرة واحدة إلى شباك أي محكمة في الوطن (دون التقيد بمكان الميلاد أو الإقامة) ببطاقة التعريف الوطنية ورقم هاتفه، فيتلقى رسالة نصية SMS تحوي بيانات الدخول الدائمة.',
          fr: 'Le citoyen se présente une seule fois à n’importe quel tribunal du pays muni de sa CNIBE et d’un numéro de téléphone personnel afin de recevoir ses identifiants par SMS.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تقديم شكوى ضد شخص مجهول أو متابعة شكوى سابقة في E-Nyaba؟',
          fr: 'Peut-on déposer et suivre une plainte sur E-Nyaba sans se déplacer au parquet ?',
        },
        answer: {
          ar: 'تتيح النيابة الإلكترونية إيداع الشكوى ورفع الوثائق عن بعد، كما تمنحك حساب متابعة في بوابة الدخول يظهر لك رقم القيد القضائي وتاريخ تحويل الملف أو استدعائك من طرف الضبطية القضائية.',
          fr: 'Oui, E-Nyaba permet le dépôt complet avec pièces jointes et fournit un accès de suivi affichant le numéro de dossier et l’orientation ordonnée par le procureur.',
        },
      },
      {
        question: {
          ar: 'ما هي شروط طلب رخصة الزيارة عبر منصة زيارتي؟',
          fr: 'Quelles sont les conditions pour obtenir un permis de visite via Ziyarati ?',
        },
        answer: {
          ar: 'يجب أن يكون مقدم الطلب من ذوي القرابة المخولين قانونا، مع ملء استمارة الطلب وتحديد صفة المحبوس (محكوم عليه أو محبوس مؤقت) وانتظار المصادقة الإلكترونية قبل التوجه للمؤسسة العقابية.',
          fr: 'Le demandeur doit justifier d’un lien familial autorisé par la loi, remplir le formulaire correspondant au statut du détenu et attendre la validation numérique avant de se présenter.',
        },
      },
    ],
  },

  // 44. mobilis
  {
    id: 'mobilis',
    slug: 'mobilis',
    category: 'telecom',
    name: {
      ar: 'اتصالات الجزائر للهاتف النقال — موبيليس (ATM Mobilis)',
      fr: 'ATM Mobilis — Services Mobiles, E-Paiement & Applications',
    },
    acronym: 'MOBILIS',
    ministry: {
      ar: 'قطاع البريد والمواصلات السلكية واللاسلكية',
      fr: 'Secteur de la Poste et des Télécommunications',
    },
    description: {
      ar: 'الخدمات الرقمية لمتعامل الهاتف النقال موبيليس (ATM Mobilis): التعبئة الإلكترونية للرصيد ودفع فواتير الدفع البعدي بالبطاقة الذهبية وCIB عبر منصة Arselli، إدارة العروض والاستهلاك عبر تطبيقات Mobilis Care وMobiSpace، وخدمة التبليغ عن الرسائل الاحتيالية SMS Fraude.',
      fr: 'Services numériques de l’opérateur mobile ATM Mobilis : rechargement en ligne et paiement des factures postpayées par carte Edahabia ou CIB, gestion des forfaits et consommation via les applications Mobilis Care et MobiSpace, et portail de signalement des SMS frauduleux.',
    },
    officialUrl: 'https://www.mobilis.dz/',
    portalUrl: 'https://e-paiement.mobilis.dz/',
    iconName: 'Smartphone',
    isPopular: false,
    services: [
      {
        id: 'mobilis-srv-1',
        title: {
          ar: 'الموقع الرسمي لشركة موبيليس',
          fr: 'Site Officiel ATM Mobilis',
        },
        description: {
          ar: 'البوابة الرسمية للاطلاع على باقات الدفع المسبق والبعدي، عروض الإنترنت، شبكة الوكالات التجارية، وأسعار التجوال الدولي.',
          fr: 'Portail officiel présentant les offres prépayées et postpayées, forfaits internet, couverture réseau et agences commerciales.',
        },
        url: 'https://www.mobilis.dz/',
        isOnline: true,
      },
      {
        id: 'mobilis-srv-2',
        title: {
          ar: 'بوابة التعبئة الإلكترونية ودفع الفواتير (Arselli)',
          fr: 'E-Paiement Mobilis — Rechargement & Factures',
        },
        description: {
          ar: 'منصة شحن رصيد الخطوط المدفوعة مسبقا وتسديد فواتير الاشتراك الشهري بشكل فوري وآمن باستخدام البطاقة الذهبية أو CIB.',
          fr: 'Plateforme officielle de rechargement express (Arselli) et de règlement des factures mensuelles par carte Edahabia ou CIB.',
        },
        url: 'https://e-paiement.mobilis.dz/',
        isOnline: true,
      },
      {
        id: 'mobilis-srv-3',
        title: {
          ar: 'منصة التبليغ عن الرسائل الاحتيالية (SMS Fraude)',
          fr: 'Signalement des SMS Frauduleux',
        },
        description: {
          ar: 'فضاء رقمي مخصص لمشتركي موبيليس للإبلاغ عن رسائل النصب، الروابط المشبوهة، أو محاولات الاحتيال المالي عبر الهاتف.',
          fr: 'Espace officiel permettant aux abonnés Mobilis de signaler les tentatives d’hameçonnage, liens suspects et SMS frauduleux.',
        },
        url: 'https://mobilis.dz/smsfraude',
        isOnline: true,
      },
      {
        id: 'mobilis-srv-4',
        title: {
          ar: 'تطبيق Mobilis Care لإدارة الخط والعروض',
          fr: 'Application Mobilis Care',
        },
        description: {
          ar: 'متابعة الرصيد الصوتي والبيانات، تفعيل باقات الإنترنت والاتصال، الاستفادة من خدمات سلكني وكريديليس، وتلقي الدعم على مدار الساعة.',
          fr: 'Gestion complète du solde et des gigas, activation de forfaits, services d’avance de crédit et support client continu.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.mobilis.mcare',
        isOnline: true,
      },
      {
        id: 'mobilis-srv-5',
        title: {
          ar: 'تطبيق MobiSpace لخدمات المشتركين',
          fr: 'Application MobiSpace',
        },
        description: {
          ar: 'تطبيق هاتفي لمتابعة تفاصيل العروض، سجل التعبئة، والخدمات الترفيهية والاتصالية الموجهة لزبائن موبيليس.',
          fr: 'Application mobile dédiée au suivi du compte abonné, historique des recharges et services complémentaires Mobilis.',
        },
        url: 'https://play.google.com/store/search?q=mobispace&c=apps&hl=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مشتركو الهاتف النقال موبيليس في صيغ الدفع المسبق والبعدي (الأفراد، المهنيون، والشركات)',
        fr: 'Abonnés mobiles ATM Mobilis prépayés et postpayés (particuliers, professionnels et entreprises)',
      },
      processingTime: {
        ar: 'تفعيل فوري للرصيد والعروض وسداد الفواتير عبر منصة الدفع الإلكتروني أو تطبيق Mobilis Care',
        fr: 'Crédit instantané des recharges, forfaits et paiement des factures via la plateforme e-paiement ou Mobilis Care',
      },
      fees: {
        ar: 'استخدام تطبيقات Mobilis Care وMobiSpace والتبليغ عن الاحتيال والدفع الإلكتروني بدون أي عمولات إضافية على سعر الخدمة',
        fr: 'L’accès aux applications, le signalement anti-fraude et le règlement par Edahabia/CIB sont sans frais supplémentaires',
      },
      channel: {
        ar: 'بوابة e-paiement.mobilis.dz، تطبيق Mobilis Care، رموز USSD (#600* / #222*)، وخدمة الزبائن 666',
        fr: 'Portail e-paiement.mobilis.dz, app Mobilis Care, codes USSD (*600# / *222#) et service client 666',
      },
      keyRequirement: {
        ar: 'شريحة موبيليس نشطة ومسجلة باسم المشترك، وبطاقة دفع ذهبية أو بنكية CIB للعمليات المالية عبر الإنترنت',
        fr: 'Carte SIM Mobilis active enregistrée au nom du titulaire et carte Edahabia ou CIB pour le paiement en ligne',
      },
    },
    requirements: [
      {
        label: {
          ar: 'خط موبيليس مفعل باسم المشترك',
          fr: 'Ligne Mobilis identifiée et active',
        },
        value: {
          ar: 'رقم هاتف موبيليس مسجل ببطاقة التعريف الوطنية وفق قواعد سلطة الضبط ARPCE لاستعمال التطبيقات وخدمات التحويل',
          fr: 'Numéro Mobilis régulièrement identifié par CNIBE conformément aux règles de l’ARPCE pour accéder à l’espace client',
        },
      },
      {
        label: {
          ar: 'وسيلة دفع إلكتروني صالحة',
          fr: 'Moyen de paiement électronique valide',
        },
        value: {
          ar: 'بطاقة بريدية ذهبية (مع تفعيل رمز التحقق OTP عبر بريدي موب أو ECCP) أو بطاقة بنكية بينبنكية CIB',
          fr: 'Carte Edahabia (avec numéro de mobile rattaché pour le code OTP) ou carte interbancaire CIB active',
        },
      },
      {
        label: {
          ar: 'بيانات الفاتورة لخطوط الدفع البعدي',
          fr: 'Référence de facture pour lignes postpayées',
        },
        value: {
          ar: 'إدخال رقم الهاتف أو رقم العقد للاطلاع على المبلغ المستحق وسداده عن بعد دون التنقل للوكالة',
          fr: 'Numéro d’appel ou référence client pour consulter le montant exigible et procéder au règlement à distance',
        },
      },
      {
        label: {
          ar: 'بيانات التبليغ عن الرسائل الاحتيالية',
          fr: 'Preuves de signalement SMS Fraude',
        },
        value: {
          ar: 'رقم المرسل المشبوه، نص الرسالة الكامل أو لقطة الشاشة، وتاريخ الاستقبال عند الإبلاغ عبر بوابة smsfraude',
          fr: 'Numéro de l’expéditeur suspect, contenu intégral du message et date de réception lors du signalement en ligne',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أشحن رصيد موبيليس أو أدفع الفاتورة بالبطاقة الذهبية؟',
          fr: 'Comment recharger un numéro Mobilis ou payer une facture avec la carte Edahabia ?',
        },
        answer: {
          ar: 'ادخل إلى منصة e-paiement.mobilis.dz أو تطبيق Mobilis Care، أدخل رقم الهاتف المراد تعبئته والمبلغ المطلوب، اختر البطاقة الذهبية وأكد الدفع برمز التحقق المرسل عبر SMS.',
          fr: 'Rendez-vous sur e-paiement.mobilis.dz ou dans l’app Mobilis Care, saisissez le numéro et le montant, sélectionnez Edahabia puis validez la transaction avec le code OTP reçu par SMS.',
        },
      },
      {
        question: {
          ar: 'ما هي أهم خدمات تطبيق Mobilis Care؟',
          fr: 'Quelles fonctionnalités offre l’application Mobilis Care ?',
        },
        answer: {
          ar: 'يتيح التطبيق متابعة الرصيد المتبقي، حجم الإنترنت، وحدات الاتصال، تفعيل الباقات الشهرية واليومية، تحويل الرصيد، وطلب خدمات كريديليس وسلكني مباشرة من الهاتف.',
          fr: 'Elle permet de suivre en temps réel votre crédit, volume data et minutes, souscrire des forfaits, transférer du crédit et utiliser les services d’avance de crédit.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا وصلتني رسالة نصية مشبوهة تنتحل صفة موبيليس أو تطلب بيانات بطاقتي؟',
          fr: 'Que faire en cas de réception d’un SMS suspect usurpant l’identité de Mobilis ?',
        },
        answer: {
          ar: 'لا تضغط على أي رابط ولا تشارك رمز OTP أو رقم البطاقة البنكية، وقم فورا برفع بلاغ عبر صفحة mobilis.dz/smsfraude ليتم حظر الرقم المرسل وحماية المشتركين.',
          fr: 'Ne cliquez sur aucun lien, ne divulguez jamais vos codes bancaires ou OTP, et signalez immédiatement l’expéditeur sur mobilis.dz/smsfraude.',
        },
      },
      {
        question: {
          ar: 'كم رقم مصلحة خدمة الزبائن لموبيليس في حال تعطل الشريحة أو الفوترة؟',
          fr: 'Quel numéro contacter pour joindre le service client Mobilis ?',
        },
        answer: {
          ar: 'يمكن التواصل مع مركز الاتصال على الرقم 666 من خط موبيليس، أو الرقم الأرضي 0660666666 من الشبكات الأخرى على مدار الساعة.',
          fr: 'Vous pouvez composer le 666 depuis une ligne Mobilis ou le 0660666666 depuis les autres réseaux nationaux.',
        },
      },
    ],
  },

  // 45. msnfcf.gov
  {
    id: 'msnfcf.gov',
    slug: 'msnfcf.gov',
    category: 'health_civil',
    name: {
      ar: 'وزارة التضامن الوطني والأسرة وقضايا المرأة — المنصات الاجتماعية والحماية',
      fr: 'Ministère de la Solidarité Nationale, de la Famille et de la Condition de la Femme',
    },
    acronym: 'MSNFCF',
    ministry: {
      ar: 'وزارة التضامن الوطني والأسرة وقضايا المرأة',
      fr: 'Ministère de la Solidarité Nationale, de la Famille et de la Condition de la Femme',
    },
    description: {
      ar: 'المجموعة الرقمية لوزارة التضامن الوطني والأسرة وقضايا المرأة في الجزائر: برامج الأسرة المنتجة وتسويق منتجات المرأة الريفية (أسرتي)، حماية ومرافقة المرأة ضحية العنف (حمايتي)، الاستشارة الأسرية (سندكم)، مرافقة المسنين (مرافقة)، الدعم المالي للجمعيات، منصة الإصغاء (يصغي)، التبليغ (النزاهة)، ومنصة التوظيف والتجهيز.',
      fr: 'Écosystème numérique du Ministère de la Solidarité Nationale : programme famille productive et commercialisation Ousraty, protection des femmes victimes de violences Himayati, conseil familial Sanedcom, accompagnement des personnes âgées Mourafaka, subventions aux associations, écoute Yosghi, intégrité Nazaha et recrutement.',
    },
    officialUrl: 'https://www.msnfcf.gov.dz/',
    portalUrl: 'https://www.ousraty.dz/authentification',
    iconName: 'HeartPulse',
    isPopular: false,
    services: [
      {
        id: 'msnfcf.gov-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة التضامن الوطني والأسرة وقضايا المرأة',
          fr: 'Portail Officiel du Ministère de la Solidarité (MSNFCF)',
        },
        description: {
          ar: 'المنصة الرسمية التي تجمع بيانات المديريات الولائية للنشاط الاجتماعي DAS، المنح التضامنية، ومختلف المنصات الرقمية للقطاع.',
          fr: 'Site officiel fédérant les programmes d’aide sociale, l’annuaire des Directions de l’Action Sociale (DAS) et les portails thématiques.',
        },
        url: 'https://www.msnfcf.gov.dz/',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-2',
        title: {
          ar: 'منصة الدعم المالي العمومي للجمعيات ذات الطابع الاجتماعي',
          fr: 'Soutien Financier Public aux Associations',
        },
        description: {
          ar: 'بوابة إيداع ملفات المشاريع الجمعوية في المجال التضامني للاستفادة من التمويل العمومي ومتابعة قرارات اللجان.',
          fr: 'Plateforme permettant aux associations à caractère social et humanitaire de soumettre leurs dossiers de demande de subvention publique.',
        },
        url: 'https://www.solidarite-association.dz/',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-3',
        title: {
          ar: 'بوابة العمليات الاستثمارية وتجهيزات النشاط الاجتماعي',
          fr: 'Portail Opérations d’Investissement et Équipements (DAS)',
        },
        description: {
          ar: 'فضاء مهني لمديريات النشاط الاجتماعي والتضامن لإدارة مشاريع الاستثمار والتجهيز التابعة للقطاع.',
          fr: 'Espace d’authentification dédié aux gestionnaires des Directions de l’Action Sociale pour le suivi des équipements et investissements.',
        },
        url: 'https://portail-solidarite.gov.dz/equipements/authentification',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-4',
        title: {
          ar: 'منصة التوظيف الرقمية لقطاع التضامن الوطني',
          fr: 'Plateforme Numérique de Recrutement MSNFCF',
        },
        description: {
          ar: 'الأرضية الرقمية لتسجيل المترشحين في مسابقات التوظيف والتعاقد بمؤسسات ومراكز التضامن الوطني والتربية المتخصصة.',
          fr: 'Portail officiel dédié au dépôt de candidatures lors des campagnes de recrutement dans les établissements spécialisés du secteur.',
        },
        url: 'https://www.msnfcf.gov.dz/tawdif2026/',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-5',
        title: {
          ar: 'فضاء برنامج الأسرة المنتجة (أسرتي)',
          fr: 'Programme Famille Productive — Ousraty',
        },
        description: {
          ar: 'بوابة تسجيل ومتابعة ملفات الأسر المنتجة المستفيدة من تجهيزات وآليات المشاريع المصغرة المنزلية.',
          fr: 'Interface d’enregistrement et de gestion des dossiers pour les bénéficiaires du programme national de famille productive.',
        },
        url: 'https://www.ousraty.dz/Login_AD',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-6',
        title: {
          ar: 'منصة «تسويق» لمنتجات الأسرة المنتجة والمرأة الريفية',
          fr: 'Plateforme Taswiq — Commercialisation Femme Rurale',
        },
        description: {
          ar: 'سوق رقمي ومجال ترويجي لعرض منتجات الحرف التقليدية والمشاريع الأسرية والمرأة الريفية دون وسطاء.',
          fr: 'Espace numérique facilitant la promotion et la mise en relation commerciale des produits artisanaux des femmes rurales et familles productives.',
        },
        url: 'https://www.ousraty.dz/authentification',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-7',
        title: {
          ar: 'منصة «مرافقة» للأشخاص المسنين',
          fr: 'Plateforme Mourafaka — Accompagnement des Personnes Âgées',
        },
        description: {
          ar: 'نظام رقمي لتسجيل ومتابعة احتياجات الأشخاص المسنين في وضعية هشاشة وتنسيق الرعاية الاجتماعية والصحية المنزلية والمؤسساتية.',
          fr: 'Dispositif numérique de recensement, de prise en charge et de coordination sociale pour l’accompagnement des personnes âgées.',
        },
        url: 'https://www.mourafaka.dz/ad/authentification',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-8',
        title: {
          ar: 'منصة «النزاهة» — تطبيق التبليغ عن الفساد',
          fr: 'Plateforme Nazaha — Signalement & Prévention',
        },
        description: {
          ar: 'فضاء آمن ومشفر لإرسال التبليغات المتعلقة بالفساد أو التجاوزات داخل مؤسسات القطاع، مرفوقا بتطبيق هاتفي ونموذج مباشر.',
          fr: 'Canal confidentiel dédié au signalement des irrégularités et atteintes à l’intégrité au sein des structures relevant du secteur.',
        },
        url: 'https://www.solidarite-nazaha.dz/NazahaAPP',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-9',
        title: {
          ar: 'استمارة التبليغ الإلكترونية «النزاهة»',
          fr: 'Formulaire de Signalement Nazaha',
        },
        description: {
          ar: 'استمارة ويب مباشرة لتقديم بلاغات النزاهة والتواصل مع الخلية المركزية المكلفة بمعالجة الشكاوى.',
          fr: 'Formulaire web direct pour transmettre un signalement documenté à la cellule d’intégrité du ministère.',
        },
        url: 'https://www.solidarite-nazaha.dz/Formulaire',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-10',
        title: {
          ar: 'بوابة «حمايتي» للتبليغ وحماية المرأة ضحية العنف',
          fr: 'Portail Himayati — Protection des Femmes Victimes de Violences',
        },
        description: {
          ar: 'منصة وطنية للتكفل الشامل والتبليغ الفوري عن حالات العنف ضد المرأة وتوجيهها نحو الخلايا الجوارية للتضامن.',
          fr: 'Portail de signalement sécurisé assurant la prise en charge psychologique, sociale et juridique des femmes en situation de détresse.',
        },
        url: 'https://www.himayati.dz/himayati/authentification_AD',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-11',
        title: {
          ar: 'تطبيق «حمايتي» الهاتفي (APK)',
          fr: 'Application Mobile Himayati (APK Officiel)',
        },
        description: {
          ar: 'التطبيق الرسمي على أندرويد للتبليغ السريع والاستنجاد وتوفير الإرشاد الميداني للمرأة المعنفة.',
          fr: 'Application Android officielle d’alerte rapide et d’orientation vers les cellules de solidarité et de protection.',
        },
        url: 'https://www.himayati.dz/himayati/app/himayati.apk',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-12',
        title: {
          ar: 'منصة «سندكم» لطلب الاستشارة الأسرية والاجتماعية',
          fr: 'Plateforme Sanedcom — Conseil et Soutien Familial',
        },
        description: {
          ar: 'خدمة إلكترونية مجانية تتيح للأسر طلب الاستشارة النفسية، التربوية، والاجتماعية من أخصائيي خلايا الإصغاء.',
          fr: 'Service de consultation gratuite à distance offrant un appui psychologique, éducatif et social aux familles par des spécialistes.',
        },
        url: 'https://www.sanedcom.dz/authentification_ad',
        isOnline: true,
      },
      {
        id: 'msnfcf.gov-srv-13',
        title: {
          ar: 'منصة «يصغي» للإصغاء والمتابعة الاجتماعية',
          fr: 'Plateforme Yosghi — Écoute et Accompagnement Social',
        },
        description: {
          ar: 'أرضية للإصغاء والمتابعة النفسية والاجتماعية عبر فرق التضامن الولائية وخلايا الجوار.',
          fr: 'Outil numérique d’écoute active et de suivi psychosocial géré par les équipes des cellules de solidarité de proximité.',
        },
        url: 'https://service-solidarite.gov.dz/tadamoun/#plateforme/login_T2.php',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الأسر المنتجة والمرأة الريفية، النساء في وضعية صعبة، الأشخاص المسنون، الجمعيات الاجتماعية، والمترشحون للتوظيف',
        fr: 'Familles productives, femmes rurales, femmes victimes de violences, personnes âgées, associations et candidats à l’emploi',
      },
      processingTime: {
        ar: 'تدخل استعجالي فوري لبلاغات حمايتي؛ معالجة طلبات الاستشارة الأسرية خلال 24 إلى 48 ساعة؛ دراسة مشاريع الجمعيات حسب الدورات',
        fr: 'Traitement urgent immédiat sur Himayati ; réponse conseil sous 24–48 h ; instruction des subventions selon les sessions',
      },
      fees: {
        ar: 'جميع خدمات الإصغاء، الحماية، الاستشارة الأسرية، التسجيل في الأسرة المنتجة، والتوظيف مجانية بالكامل',
        fr: 'L’ensemble des services d’écoute, de protection, de conseil familial, de soutien associatif et d’inscription est gratuit',
      },
      channel: {
        ar: 'المنصات التضامنية المتخصصة (ousraty، himayati، sanedcom، mourafaka، nazaha) ومديريات النشاط الاجتماعي DAS بالولايات',
        fr: 'Portails thématiques (Ousraty, Himayati, Sanedcom, Mourafaka, Nazaha) et Directions de l’Action Sociale (DAS)',
      },
      keyRequirement: {
        ar: 'رقم التعريف الوطني وملف الحالة الاجتماعية أو شهادة الاعتماد الجمعوي حسب نوع المنصة المستعملة',
        fr: 'Numéro d’identification national, situation sociale documentée ou agrément associatif selon le téléservice sollicité',
      },
    },
    requirements: [
      {
        label: {
          ar: 'شروط الاستفادة من برنامج الأسرة المنتجة وتسويق',
          fr: 'Critères Famille Productive & Taswiq',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية، شهادة إقامة، شهادة عدم الانتساب للصناديق الاجتماعية أو وضعية دخل محدود مع تأهيل في الحرف المستهدفة',
          fr: 'CNIBE, certificat de résidence, attestation de non-affiliation ou justificatif de situation sociale et savoir-faire artisanal',
        },
      },
      {
        label: {
          ar: 'ملف الدعم المالي للجمعيات الاجتماعية',
          fr: 'Dossier de subvention pour associations',
        },
        value: {
          ar: 'وصل اعتماد الجمعية ساري المفعول، القانون الأساسي، التقرير المالي والأدبي المصادق عليه، وبطاقة تقنية للمشروع التضامني',
          fr: 'Agrément associatif valide, statuts, bilans moral et financier approuvés et fiche technique détaillée du projet social',
        },
      },
      {
        label: {
          ar: 'بلاغات الحماية والاستشارة (حمايتي وسندكم)',
          fr: 'Signalements Himayati et consultations Sanedcom',
        },
        value: {
          ar: 'تحديد الولاية ورقم هاتف للتواصل الآمن (أو الإبلاغ السري دون كشف الهوية في حالات النزاهة) ووصف موجز للوضعية',
          fr: 'Indication de la wilaya, moyen de contact sécurisé (ou anonymat possible pour Nazaha) et description succincte de la situation',
        },
      },
      {
        label: {
          ar: 'مسابقات التوظيف في المراكز المتخصصة',
          fr: 'Candidatures recrutement MSNFCF',
        },
        value: {
          ar: 'الشهادة الجامعية أو المهنية المطابقة للمنصب المطلوب في المراكز البيداغوجية والنفسية مرفقة بالسيرة الذاتية عبر منصة التوظيف',
          fr: 'Diplôme académique ou spécialisé conforme au poste ouvert (éducateur, psychologue, assistant social) déposé sur la plateforme',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف تستفيد المرأة الماكثة في البيت أو الريفية من منصة أسرتي وتسويق؟',
          fr: 'Comment bénéficier du programme Ousraty et vendre sur Taswiq ?',
        },
        answer: {
          ar: 'يتم إيداع ملف برنامج الأسرة المنتجة عبر مديرية النشاط الاجتماعي بالولاية أو البوابة المخصصة، وبعد التأهيل يمكن للمستفيدة ولوج منصة تسويق لعرض منتجاتها الحرفية والغذائية والترويج لها رقميا.',
          fr: 'Le dossier est validé via la Direction de l’Action Sociale (DAS) ; une fois l’activité enregistrée, la plateforme Taswiq permet d’exposer gratuitement les produits artisanaux auprès des acheteurs.',
        },
      },
      {
        question: {
          ar: 'هل تضمن منصة حمايتي وتطبيقها سرية بيانات المبلغة عن العنف؟',
          fr: 'L’application et le portail Himayati garantissent-ils la confidentialité ?',
        },
        answer: {
          ar: 'نعم، تعامل كافة البلاغات والطلبات على منصة حمايتي وسندكم بسرية تامة من قبل فرق متخصصة (أخصائيين نفسيين واجتماعيين وقانونيين) تابعة للخلايا الجوارية للتضامن.',
          fr: 'Oui, toutes les alertes sur Himayati et demandes sur Sanedcom sont traitées de manière strictement confidentielle par des psychologues, juristes et assistants sociaux habilités.',
        },
      },
      {
        question: {
          ar: 'ما هو دور منصة مرافقة الخاصة بالأشخاص المسنين؟',
          fr: 'Quel est le rôle du portail Mourafaka ?',
        },
        answer: {
          ar: 'تعمل المنصة على إحصاء الأشخاص المسنين الذين يعيشون بمفردهم أو في وضعيات هشاشة، وتوجيه فرق التضامن لتوفير الرعاية الصحية، المساعدات العينية، أو الإيواء في دور المسنين عند الضرورة.',
          fr: 'Mourafaka recense les seniors isolés ou vulnérables afin de coordonner les visites à domicile, les aides médicales et sociales ou l’orientation vers les établissements d’accueil.',
        },
      },
      {
        question: {
          ar: 'من يحق له الولوج إلى بوابات تسجيل الدخول الخاصة بالمديريات (Login_AD / Login_T2)؟',
          fr: 'Qui peut accéder aux espaces authentifiés administratifs (Login_AD / equipements) ?',
        },
        answer: {
          ar: 'خصصت بوابات المصادقة المرقمة بـ AD لإطارات مديريات النشاط الاجتماعي والخلايا الجوارية لتسجيل وحفظ ملفات المواطنين المستفيدين الذين يتقدمون بالطلبات محليا.',
          fr: 'Les accès authentifiés AD et équipements sont réservés aux agents des DAS et cellules de proximité qui instruisent localement les dossiers des citoyens.',
        },
      },
    ],
  },

  // 46. msport.gov
  {
    id: 'msport.gov',
    slug: 'msport.gov',
    category: 'ministries',
    name: {
      ar: 'وزارة الرياضة — التكوين الرياضي، الشهادات وفضاء الإصغاء',
      fr: 'Ministère des Sports — Formation Sportive, Attestations & Écoute',
    },
    acronym: 'MSPORT',
    ministry: {
      ar: 'وزارة الرياضة',
      fr: 'Ministère des Sports',
    },
    description: {
      ar: 'البوابة الرقمية لوزارة الرياضة في الجزائر: خدمات منصة التكوين الرياضي «تكسبورت» (التكوين الجزئي، تحميل شهادات المشاركة، ومتابعة الطلبات إلكترونيا)، ومنصة «اتصل» للإصغاء والتواصل المباشر مع الرياضيين، النوادي، والجمعيات الرياضية.',
      fr: 'Portail numérique du Ministère des Sports en Algérie : plateforme de formation Taksport (téléchargement des certificats de participation, suivi des dossiers de formation) et espace d’écoute et de contact Itassel destiné aux athlètes, entraîneurs et clubs sportifs.',
    },
    officialUrl: 'https://msport.gov.dz/ar/',
    portalUrl: 'https://taksport.msport.gov.dz/public/certificate',
    iconName: 'Users',
    isPopular: false,
    services: [
      {
        id: 'msport.gov-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة الرياضة',
          fr: 'Site Officiel du Ministère des Sports',
        },
        description: {
          ar: 'البوابة الوزارية لنشر أخبار الرياضة الوطنية، النصوص التنظيمية للاتحادات والنوادي، وبرامج دعم رياضيي النخبة والمستوى العالي.',
          fr: 'Portail institutionnel publiant l’actualité sportive nationale, les textes régissant les fédérations et clubs ainsi que les dispositifs pour l’élite.',
        },
        url: 'https://msport.gov.dz/ar/',
        isOnline: true,
      },
      {
        id: 'msport.gov-srv-2',
        title: {
          ar: 'منصة التكوين وتحميل شهادات المشاركة (Taksport)',
          fr: 'Plateforme Taksport — Formations & Certificats en Ligne',
        },
        description: {
          ar: 'خدمة رقمية موجهة للمؤطرين والمدربين والطلبة الرياضيين للالتحاق بالتكوين الجزئي، متابعة حالة الطلبات، وسحب شهادة المشاركة إلكترونيا.',
          fr: 'Téléservice destiné aux cadres sportifs et stagiaires pour suivre les formations partielles, vérifier l’avancement des dossiers et télécharger les certificats.',
        },
        url: 'https://taksport.msport.gov.dz/public/certificate',
        isOnline: true,
      },
      {
        id: 'msport.gov-srv-3',
        title: {
          ar: 'فضاء الإصغاء والتواصل «اتصل» (Itassel)',
          fr: 'Espace d’Écoute et de Contact — Itassel',
        },
        description: {
          ar: 'منصة تفاعلية لتقديم الانشغالات، الاستفسارات، والاقتراحات لفرق عمل وزارة الرياضة ومتابعة الردود الرسمية عن بعد.',
          fr: 'Canal officiel d’écoute citoyenne permettant aux sportifs, dirigeants de clubs et citoyens d’adresser leurs requêtes et d’en suivre le traitement.',
        },
        url: 'https://itassel.msport.gov.dz/public/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'رياضيو النخبة والمستوى العالي، المدربون والمؤطرون الرياضيون، مسيرو النوادي والاتحاديات، وطلبة المعاهد الرياضية',
        fr: 'Athlètes d’élite, entraîneurs, encadreurs sportifs, dirigeants de clubs/fédérations et étudiants des instituts sportifs',
      },
      processingTime: {
        ar: 'تحميل فوري لشهادة المشاركة في منصة Taksport فور تأكيد الدورة؛ معالجة شكاوى واستفسارات منصة اتصل خلال أيام عمل',
        fr: 'Téléchargement immédiat du certificat Taksport dès validation ; traitement des requêtes Itassel sous quelques jours ouvrables',
      },
      fees: {
        ar: 'الولوج إلى منصة الشهادات Taksport وفضاء الإصغاء Itassel مجاني تماما بدون أي رسوم',
        fr: 'L’accès au portail de certificats Taksport et au guichet d’écoute Itassel est entièrement gratuit',
      },
      channel: {
        ar: 'بوابات msport.gov.dz وتطبيقات الويب taksport وitassel، بالإضافة إلى مديريات الشباب والرياضة بالولايات DJS',
        fr: 'Portails msport.gov.dz (Taksport & Itassel) et Directions de la Jeunesse et des Sports (DJS) de wilaya',
      },
      keyRequirement: {
        ar: 'رقم الملف أو البريد الإلكتروني وبطاقة التعريف الوطنية لتحميل الشهادات، والانتماء لناد أو اتحاد أو صفة متربص للتكوين',
        fr: 'Numéro de dossier ou CNIBE pour récupérer les attestations et justification du statut sportif ou de stagiaire',
      },
    },
    requirements: [
      {
        label: {
          ar: 'معطيات متابعة الشهادات في Taksport',
          fr: 'Données de récupération Taksport',
        },
        value: {
          ar: 'الاسم الكامل، رقم التسجيل في الدورة التكوينية أو رقم التعريف الوطني والولاية لإصدار والتحقق من شهادة المشاركة',
          fr: 'Identité complète, numéro d’inscription à la session ou NIN et wilaya d’exercice pour générer ou vérifier le certificat',
        },
      },
      {
        label: {
          ar: 'ملف التكوين الجزئي للمدربين والمسيرين',
          fr: 'Dossier de formation partielle des encadreurs',
        },
        value: {
          ar: 'طلب مشاركة مؤشر عليه من النادي أو الرابطة الولائية، شهادة طبية للقدرة البدنية، ومستوى دراسي موافق لدرجة التأطير',
          fr: 'Demande visée par le club ou la ligue, certificat médical d’aptitude et justificatif de niveau académique ou technique',
        },
      },
      {
        label: {
          ar: 'استمارة الانشغال في منصة اتصل',
          fr: 'Formulaire de requête sur Itassel',
        },
        value: {
          ar: 'تحديد موضوع الطلب (تكوين، منشأة رياضية، دعم جمعوي، أو تظلم إداري)، إرفاق الوثائق إن وجدت، وتدوين رقم الهاتف للتواصل',
          fr: 'Sélection de la thématique (formation, infrastructure, subvention, doléance), pièces justificatives éventuelles et coordonnées de contact',
        },
      },
      {
        label: {
          ar: 'الاعتماد الرياضي للجمعيات والنوادي',
          fr: 'Agrément des clubs et associations sportives',
        },
        value: {
          ar: 'احترام دفتر الشروط وقوانين الجمعيات الرياضية لدى مصالح مديرية الشباب والرياضة المختصة إقليميا',
          fr: 'Conformité statutaire et enregistrement réglementaire auprès de la Direction de la Jeunesse et des Sports compétente',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف يمكنني تحميل شهادة المشاركة في التكوين عبر منصة Taksport؟',
          fr: 'Comment télécharger mon certificat de participation sur Taksport ?',
        },
        answer: {
          ar: 'ادخل إلى رابط الشهادات على taksport.msport.gov.dz/public/certificate، ثم أدخل بيانات التعريف أو رمز التسجيل الخاص بدورتك التكوينية ليتم عرض الشهادة بصيغة PDF جاهزة للطباعة.',
          fr: 'Accédez directement à taksport.msport.gov.dz/public/certificate, renseignez votre identifiant de session ou vos données personnelles puis téléchargez le certificat au format PDF.',
        },
      },
      {
        question: {
          ar: 'ما هي الخدمات التي توفرها منصة «اتصل» التابعة لوزارة الرياضة؟',
          fr: 'À quoi sert l’espace Itassel du Ministère des Sports ?',
        },
        answer: {
          ar: 'تعد منصة اتصل فضاء رقميا للإصغاء يمكن الرياضيين، المدربين، ورؤساء النوادي من إرسال انشغالاتهم وطلبات التوضيح مباشرة للمصالح المركزية ومتابعة الرد عليها.',
          fr: 'Itassel est une plateforme de médiation et d’écoute permettant aux acteurs du mouvement sportif de soumettre des requêtes officielles et d’en suivre le traitement.',
        },
      },
      {
        question: {
          ar: 'هل يمكن متابعة ملفات تسجيل رياضيي النخبة والمستوى العالي عن بعد؟',
          fr: 'Les demandes de statut d’élite ou de formation se suivent-elles en ligne ?',
        },
        answer: {
          ar: 'تتيح منظومة الوزارة متابعة حالة طلبات التكوين والشهادات إلكترونيا عبر Taksport، بينما ترفع ملفات رياضيي النخبة عبر الاتحاديات الوطنية بالتنسيق مع المصالح المركزية.',
          fr: 'Le suivi des dossiers de formation s’effectue sur Taksport ; les dossiers de sportifs d’élite sont instruits via les fédérations nationales en lien avec le ministère.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا لم أجد شهادتي مدرجة على بوابة Taksport؟',
          fr: 'Que faire si mon certificat n’apparaît pas sur le portail Taksport ?',
        },
        answer: {
          ar: 'تحقق أولا من مطابقة رقم التسجيل أو البريد الإلكتروني، وفي حال استمرار الخلل تواصل مع المعهد المشرف على الدورة أو ارفع طلبا عبر منصة اتصل مرفقا بوصل التسجيل.',
          fr: 'Vérifiez l’orthographe de vos identifiants de session ; si le problème persiste, contactez l’institut organisateur ou signalez l’anomalie sur Itassel avec votre justificatif.',
        },
      },
    ],
  },

  // 47. mtess
  {
    id: 'mtess',
    slug: 'mtess',
    category: 'social_labor',
    name: {
      ar: 'وزارة العمل والتشغيل والضمان الاجتماعي — تبليغ وتطبيقات الضمان',
      fr: 'Ministère du Travail, de l’Emploi et de la Sécurité Sociale — Tabligh & Apps',
    },
    acronym: 'MTESS',
    ministry: {
      ar: 'وزارة العمل والتشغيل والضمان الاجتماعي',
      fr: 'Ministère du Travail, de l’Emploi et de la Sécurité Sociale',
    },
    description: {
      ar: 'البوابة الرسمية لوزارة العمل والتشغيل والضمان الاجتماعي: منصة «تبليغ» المؤمنة للتبليغ عن مخالفات تشريع العمل والضمان الاجتماعي والفساد ومتابعة البلاغات بسرية، والتكامل مع صناديق CNAS وCASNOS وCNR وANEM وتطبيقات الهناء، المتقاعد، والحساب الفردي للأجير CIS.',
      fr: 'Portail officiel du Ministère du Travail, de l’Emploi et de la Sécurité Sociale : plateforme sécurisée Tabligh de signalement des infractions au droit du travail et à la sécurité sociale, coordination avec CNAS, CASNOS, CNR et ANEM, et applications officielles El Hanaa, Retraité et CIS.',
    },
    officialUrl: 'https://www.mtess.gov.dz/ar/',
    portalUrl: 'https://tabligh.mtess.gov.dz/home',
    iconName: 'Briefcase',
    isPopular: false,
    services: [
      {
        id: 'mtess-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة العمل والتشغيل والضمان الاجتماعي',
          fr: 'Site Officiel du Ministère du Travail (MTESS)',
        },
        description: {
          ar: 'البوابة المركزية للنصوص التشريعية للعمل، الاتفاقيات الجماعية، خدمات المفتشية العامة للعمل، وروابط الصناديق والوكالات تحت الوصاية.',
          fr: 'Portail institutionnel regroupant le code du travail, les services de l’Inspection du Travail et les liens vers les organismes sous tutelle.',
        },
        url: 'https://www.mtess.gov.dz/ar/',
        isOnline: true,
      },
      {
        id: 'mtess-srv-2',
        title: {
          ar: 'المنصة الرقمية «تبليغ» للمبلغين عن المخالفات',
          fr: 'Plateforme Tabligh — Signalement des Infractions',
        },
        description: {
          ar: 'منصة مؤمنة تتيح للعمال والمواطنين الإبلاغ عن المخالفات المرتبطة بالتصريح بالعمال، قوانين العمل، أو النزاهة ومتابعة مراحل المعالجة.',
          fr: 'Portail confidentiel permettant aux salariés et citoyens de signaler les infractions aux lois du travail et de suivre le traitement du dossier.',
        },
        url: 'https://tabligh.mtess.gov.dz/home',
        isOnline: true,
      },
      {
        id: 'mtess-srv-3',
        title: {
          ar: 'إنشاء حساب المبلغ في منصة تبليغ',
          fr: 'Création de Compte Sécurisé — Tabligh',
        },
        description: {
          ar: 'التسجيل السريع في فضاء المبلغ الآمن لرفع الشكاوى المهنية أو بلاغات مفتشية العمل بسرية كاملة.',
          fr: 'Inscription rapide à l’espace lanceur d’alerte sécurisé pour transmettre vos signalements en toute confidentialité.',
        },
        url: 'https://tabligh.mtess.gov.dz/auth/register',
        isOnline: true,
      },
      {
        id: 'mtess-srv-4',
        title: {
          ar: 'تسجيل الدخول ومتابعة البلاغات في تبليغ',
          fr: 'Connexion et Suivi des Signalements — Tabligh',
        },
        description: {
          ar: 'الولوج إلى لوحة المتابعة الخاصة بالمبلغ للتحقق من حالة معالجة التبليغ واستلام ردود الخلية المختصة ومفتشية العمل.',
          fr: 'Accès à l’espace personnel pour suivre l’instruction des signalements transmis aux services compétents.',
        },
        url: 'https://tabligh.mtess.gov.dz/auth/login',
        isOnline: true,
      },
      {
        id: 'mtess-srv-5',
        title: {
          ar: 'تطبيق الهناء التابع للضمان الاجتماعي (CNAS)',
          fr: 'Application El Hanaa — Assurance Sociale CNAS',
        },
        description: {
          ar: 'متابعة التعويضات الطبية، بطاقة الشفاء، قائمة الصيادلة والأطباء المتعاقدين، واستخراج شهادة الانتساب للعمال الأجراء.',
          fr: 'Application officielle CNAS pour consulter les remboursements, la carte Chifa, l’annuaire conventionné et l’attestation d’affiliation.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.cnas.mobile_elhanaa&hl=ar',
        isOnline: true,
      },
      {
        id: 'mtess-srv-6',
        title: {
          ar: 'تطبيق المتقاعد التابع للصندوق الوطني للتقاعد (CNR)',
          fr: 'Application Retraité — Caisse Nationale des Retraites (CNR)',
        },
        description: {
          ar: 'تجديد شهادة الحياة عن بعد عبر التعرف البيومتري، استخراج كشف المعاش الشهري، وتتبع ملفات التقاعد دون تنقل للوكالات.',
          fr: 'Renouvellement à distance du certificat de vie par reconnaissance faciale, téléchargement du relevé de pension et suivi de dossier CNR.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.cnr.cnr',
        isOnline: true,
      },
      {
        id: 'mtess-srv-7',
        title: {
          ar: 'تطبيق الحساب الفردي للأجير (CIS)',
          fr: 'Application Compte Individuel du Salarié (CIS)',
        },
        description: {
          ar: 'تطبيق ذكي يتيح للعمال الأجراء التحقق من سنوات العمل المصرح بها واشتراكاتهم المتراكمة تحضيرا لملف التقاعد.',
          fr: 'Application permettant à chaque salarié de vérifier la continuité de ses déclarations annuelles de salaires et cotisations en vue de la retraite.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.cnr.mobi_cis&hl=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'العمال الأجراء وغير الأجراء، المتقاعدون، طالبو الشغل، المبلغون عن مخالفات العمل، وأرباب العمل',
        fr: 'Salariés, travailleurs non-salariés, retraités, demandeurs d’emploi, lanceurs d’alerte et employeurs',
      },
      processingTime: {
        ar: 'إرسال فوري للبلاغات في تبليغ وتحديث لحظي لخدمات التطبيقات؛ دراسة البلاغات عبر مفتشية العمل وخلية النزاهة وفق الأولوية',
        fr: 'Envoi immédiat sur Tabligh et consultation instantanée sur les apps ; traitement des signalements par l’Inspection du Travail',
      },
      fees: {
        ar: 'جميع خدمات منصة تبليغ والتبليغ عن المخالفات وتطبيقات الهناء والمتقاعد والحساب الفردي للأجير مجانية بالكامل',
        fr: 'L’accès au portail Tabligh ainsi que le téléchargement et l’usage des applications El Hanaa, Retraité et CIS sont gratuits',
      },
      channel: {
        ar: 'بوابات mtess.gov.dz وتبليغ، بريد خلية النزاهة (cellule.nazaha@mtess.gov.dz)، وتطبيقات الهاتف المعتمدة',
        fr: 'Portails mtess.gov.dz et Tabligh, messagerie dédiée (cellule.nazaha@mtess.gov.dz) et applications Android officielles',
      },
      keyRequirement: {
        ar: 'حساب إلكتروني للتبليغ، أو رقم الضمان الاجتماعي بالنسبة لتطبيقات الهناء والمتقاعد والحساب الفردي للأجير',
        fr: 'Compte personnel pour Tabligh ou numéro de sécurité sociale (CNAS/CNR) pour les applications mobiles associées',
      },
    },
    requirements: [
      {
        label: {
          ar: 'متطلبات تقديم بلاغ في منصة تبليغ',
          fr: 'Prérequis pour signaler sur Tabligh',
        },
        value: {
          ar: 'تحديد طبيعة المخالفة (عدم التصريح في الضمان الاجتماعي، نزاع عمل، أو إخلال بالنزاهة)، اسم المؤسسة أو العنوان، وأي أدلة مساندة',
          fr: 'Description précise de l’infraction (non-déclaration sociale, droit du travail, éthique), identification de l’entité et justificatifs',
        },
      },
      {
        label: {
          ar: 'تفعيل تطبيقات الهناء والمتقاعد وCIS',
          fr: 'Activation des applications El Hanaa, Retraité et CIS',
        },
        value: {
          ar: 'رقم الضمان الاجتماعي المكون من 12 رقما، تاريخ الميلاد، والرمز السري المسلم من الوكالة أو المنشأ عبر التطبيق',
          fr: 'Numéro de sécurité sociale à 12 chiffres, date de naissance et mot de passe délivré par l’agence ou créé en ligne',
        },
      },
      {
        label: {
          ar: 'التنسيق مع الوكالات تحت الوصاية',
          fr: 'Accès aux organismes sous tutelle',
        },
        value: {
          ar: 'توجيه ملفات التقاعد نحو CNR، التأمين المرضي للأجراء نحو CNAS، غير الأجراء نحو CASNOS، وطلبات التوظيف نحو ANEM',
          fr: 'Orientation des dossiers selon l’organisme compétent : CNAS (salariés), CASNOS (non-salariés), CNR (retraite) et ANEM (emploi)',
        },
      },
      {
        label: {
          ar: 'قناة النزاهة بالبريد الإلكتروني',
          fr: 'Canal direct cellule d’intégrité',
        },
        value: {
          ar: 'إمكانية المراسلة المباشرة عبر البريد الإلكتروني الرسمي cellule.nazaha@mtess.gov.dz للاستفسارات الحساسة ومرافقة البلاغات',
          fr: 'Possibilité de transmission complémentaire par courriel officiel à cellule.nazaha@mtess.gov.dz pour les requêtes relevant de l’intégrité',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تحمي منصة تبليغ هوية العامل المبلغ عن عدم التصريح به في الضمان الاجتماعي؟',
          fr: 'La plateforme Tabligh garantit-elle la protection de l’identité du déclarant ?',
        },
        answer: {
          ar: 'نعم، صممت منصة تبليغ بآليات تشفير تحفظ سرية بيانات المبلغ أثناء إحالة التجاوزات إلى المفتشية العامة للعمل أو خلية النزاهة للتحقيق الميداني.',
          fr: 'Oui, Tabligh assure la confidentialité des données personnelles du salarié ou citoyen lors de la transmission du dossier aux inspecteurs du travail.',
        },
      },
      {
        question: {
          ar: 'ما فائدة تطبيق الحساب الفردي للأجير CIS مقارنة بتطبيق الهناء؟',
          fr: 'Quelle est l’utilité de l’application CIS par rapport à El Hanaa ?',
        },
        answer: {
          ar: 'يعنى تطبيق الهناء بالتعويضات الطبية وبطاقة الشفاء، بينما يركز تطبيق CIS التابع للصندوق الوطني للتقاعد على عرض سنوات الأجر المصرح بها لدى كل مشغل طوال المسار المهني.',
          fr: 'El Hanaa gère les soins, remboursements et la carte Chifa (CNAS), tandis que CIS (CNR) permet au salarié de contrôler toutes ses années cotisées en vue de sa future retraite.',
        },
      },
      {
        question: {
          ar: 'كيف يجدد المتقاعد وثيقته الدورية باستخدام تطبيق المتقاعد؟',
          fr: 'Comment renouveler son attestation à distance avec l’application Retraité ?',
        },
        answer: {
          ar: 'يوفر تطبيق المتقاعد خدمة R-Mob المعتمدة على التعرف على الوجه عبر كاميرا الهاتف الذكي لتأكيد الوجود على قيد الحياة وتجديد المعاش سنويا دون التنقل لوكالة CNR.',
          fr: 'L’application intègre la reconnaissance faciale via la caméra du smartphone, permettant de renouveler l’attestation de vie annuelle à distance sans passage au guichet CNR.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع خلية النزاهة في وزارة العمل إذا تعذر علي الدخول للمنصة؟',
          fr: 'Comment contacter la cellule d’intégrité en dehors du portail Tabligh ?',
        },
        answer: {
          ar: 'يمكنك توجيه مراسلة رسمية موثقة إلى البريد الإلكتروني المخصص لخلية النزاهة على العنوان cellule.nazaha@mtess.gov.dz.',
          fr: 'Vous pouvez envoyer directement votre signalement ou demande de précision à l’adresse dédiée : cellule.nazaha@mtess.gov.dz.',
        },
      },
    ],
  },

  // 48. mtpib
  {
    id: 'mtpib',
    slug: 'mtpib',
    category: 'ministries',
    name: {
      ar: 'وزارة الأشغال العمومية والمنشآت القاعدية — التأهيل والتصنيف المهني',
      fr: 'Ministère des Travaux Publics et des Infrastructures de Base — Qualification',
    },
    acronym: 'MTPIB',
    ministry: {
      ar: 'وزارة الأشغال العمومية والمنشآت القاعدية',
      fr: 'Ministère des Travaux Publics et des Infrastructures de Base',
    },
    description: {
      ar: 'البوابة الرقمية لوزارة الأشغال العمومية والمنشآت القاعدية في الجزائر: فضاء إيداع طلبات شهادة التأهيل والتصنيف المهنيين لمؤسسات الإنجاز، محاكي التصنيف المهني لتقدير الدرجة المؤهلة مسبقا، والخدمات الإدارية الخاصة باعتماد المهندسين ومكاتب الدراسات الخاصة، رخص شبكة الطرق، ووثائق تحديد المسافة.',
      fr: 'Portail numérique du Ministère des Travaux Publics et des Infrastructures de Base : dépôt en ligne des demandes de certificat de qualification et classification professionnelles des entreprises, simulateur officiel de classification, agréments d’ingénieurs et bureaux d’études, autorisations routières et certificats de distance.',
    },
    officialUrl: 'https://portail.mtpib.dz/',
    portalUrl: 'https://portail.mtpib.dz/demande-login.php',
    iconName: 'Building2',
    isPopular: false,
    services: [
      {
        id: 'mtpib-srv-1',
        title: {
          ar: 'البوابة الرئيسية لخدمات وزارة الأشغال العمومية عن بعد',
          fr: 'Portail Central des Téléservices MTPIB',
        },
        description: {
          ar: 'الواجهة الجامعة للخدمات الرقمية للوزارة، بما في ذلك فضاءات اعتماد المهندسين ومكاتب الدراسات الخاصة، رخص شبكة الطرق، ووثيقة تحديد المسافة.',
          fr: 'Guichet central donnant accès aux services numériques du secteur : agréments des ingénieurs et bureaux d’études, permis de voirie et attestations de distance.',
        },
        url: 'https://portail.mtpib.dz/',
        isOnline: true,
      },
      {
        id: 'mtpib-srv-2',
        title: {
          ar: 'فضاء طلب شهادة التأهيل والتصنيف المهنيين للمقاولات',
          fr: 'Demande de Certificat de Qualification et Classification',
        },
        description: {
          ar: 'منصة مخصصة لمؤسسات ومقاولات الأشغال العمومية لإيداع وتحيين ملفات الحصول على شهادة التأهيل والتصنيف من الدرجة 1 إلى 9.',
          fr: 'Espace réservé aux entreprises du secteur pour soumettre et suivre les dossiers d’obtention du certificat de qualification professionnelle.',
        },
        url: 'https://portail.mtpib.dz/demande-login.php',
        isOnline: true,
      },
      {
        id: 'mtpib-srv-3',
        title: {
          ar: 'محاكي التصنيف المهني لمؤسسات الأشغال العمومية',
          fr: 'Simulateur de Classification Professionnelle',
        },
        description: {
          ar: 'أداة حسابية رسمية تتيح لأصحاب المقاولات ومكاتب الدراسات اختبار الدرجة التأهيلية المتوقعة استنادا إلى التأطير البشري، العتاد، ورقم الأعمال.',
          fr: 'Simulateur officiel permettant aux entreprises d’estimer à l’avance leur catégorie de classification selon l’encadrement humain, le matériel et le chiffre d’affaires.',
        },
        url: 'https://portail.mtpib.dz/simul.php',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مؤسسات ومقاولات الأشغال العمومية، مكاتب الدراسات الهندسية، المهندسون، والهيئات الطالبة لرخص الطرق والمسافات',
        fr: 'Entreprises de travaux publics, bureaux d’études techniques, ingénieurs agréés et opérateurs sollicitant des permis routiers',
      },
      processingTime: {
        ar: 'نتائج فورية لمحاكاة التصنيف المهني؛ دراسة ملفات التأهيل والاعتماد عبر اللجان المختصة بالولايات والوزارة',
        fr: 'Résultat immédiat via le simulateur ; instruction des dossiers de qualification par les commissions compétentes',
      },
      fees: {
        ar: 'استعمال محاكي التصنيف وإيداع الطلبات الإلكترونية عبر البوابة مجاني؛ تطبق الرسوم الطابعية وفق القوانين السارية',
        fr: 'L’usage du simulateur et le dépôt de la demande en ligne sont gratuits ; droits de timbre réglementaires le cas échéant',
      },
      channel: {
        ar: 'البوابة الرقمية portail.mtpib.dz ومديريات الأشغال العمومية DTP عبر الولايات',
        fr: 'Portail portail.mtpib.dz et Directions des Travaux Publics (DTP) de wilaya',
      },
      keyRequirement: {
        ar: 'السجل التجاري في تخصصات الأشغال العمومية، الكشوف المحاسبية، قوائم التأطير الهندسي والتقني المصرح به في CNAS، وعتاد الإنجاز',
        fr: 'Registre de commerce TP, bilans fiscaux, liste du personnel technique déclaré CNAS et inventaire du matériel roulant/chantier',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الوثائق القانونية والجبائية للمؤسسة',
          fr: 'Justificatifs juridiques et fiscaux',
        },
        value: {
          ar: 'نسخة من السجل التجاري الإلكتروني، البطاقة الجبائية، القانون الأساسي للشركة، وشهادة أداء المستحقات الضريبية والاجتماعية',
          fr: 'Extrait du registre de commerce électronique, carte fiscale, statuts de la société et attestations de mise à jour fiscale et CNAS/CASNOS',
        },
      },
      {
        label: {
          ar: 'الموارد البشرية والتأطير الهندسي',
          fr: 'Encadrement humain et ingénieurs',
        },
        value: {
          ar: 'شهادات المهندسين والتقنيين السامين العاملين بالمؤسسة مرفقة بكشوف التصريح السنوي للأجور DAS لدى صندوق CNAS',
          fr: 'Diplômes des ingénieurs et techniciens employés accompagnés des états nominatifs annuels des salaires (DAS) validés par la CNAS',
        },
      },
      {
        label: {
          ar: 'العتاد التقني ووسائل الإنجاز والمشاريع',
          fr: 'Matériel technique et références professionnelles',
        },
        value: {
          ar: 'البطاقات الرمادية للآليات والشاحنات، فواتير التجهيزات، وشهادات حسن التنفيذ للمشاريع السابقة لتحديد الفئة',
          fr: 'Cartes grises des engins de chantier, factures d’équipements et attestations de bonne exécution de chantiers antérieurs',
        },
      },
      {
        label: {
          ar: 'ملفات رخص شبكة الطرق وتحديد المسافة والاعتماد',
          fr: 'Dossiers permis routiers, distances et agréments',
        },
        value: {
          ar: 'المخططات الهندسية للمقطع الطرقي أو المشروع وبطاقات الهوية التقنية عند طلب رخصة شبكة الطرق، وثيقة المسافة، أو اعتماد مكتب الدراسات',
          fr: 'Plans topographiques ou techniques pour les demandes d’autorisation routière, certificats de distance ou agréments des bureaux d’études',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أستعمل محاكي التصنيف المهني على بوابة الأشغال العمومية؟',
          fr: 'Comment utiliser le simulateur de classification professionnelle MTPIB ?',
        },
        answer: {
          ar: 'افتح رابط المحاكي simul.php، ثم أدخل عدد المهندسين والتقنيين، رقم الأعمال السنوي للسنوات الثلاث الأخيرة، وقائمة العتاد المتوفر لتحصل فورا على تقدير الفئة التي تستوفي شروطها.',
          fr: 'Ouvrez la page simul.php, saisissez votre effectif d’ingénieurs/techniciens, votre chiffre d’affaires des trois derniers exercices et la valeur du matériel pour connaître votre catégorie estimative.',
        },
      },
      {
        question: {
          ar: 'ما أهمية شهادة التأهيل والتصنيف المهنيين لمقاولات الأشغال العمومية؟',
          fr: 'Pourquoi le certificat de qualification et classification est-il indispensable ?',
        },
        answer: {
          ar: 'تشترط دفاتر الشروط الخاصة بالصفقات العمومية حيازة شهادة التأهيل والتصنيف المهنيين سارية المفعول، وتحدد الفئة الممنوحة سقف المبالغ والأشغال التي يحق للمؤسسة الترشح لإنجازها.',
          fr: 'Il est exigé par le code des marchés publics pour soumissionner aux appels d’offres nationaux et locaux, chaque catégorie déterminant la taille financière et technique des chantiers accessibles.',
        },
      },
      {
        question: {
          ar: 'أين تودع طلبات اعتماد مكاتب الدراسات الخاصة ورخص شبكة الطرق ووثيقة المسافة؟',
          fr: 'Où accéder aux demandes d’agrément de bureaux d’études, permis routiers et distance ?',
        },
        answer: {
          ar: 'تتوفر روابط الولوج إلى كل من فضاء اعتماد المهندسين ومكاتب الدراسات الخاصة، رخصة شبكة الطرق، ووثيقة تحديد المسافة انطلاقا من الواجهة الرئيسية للبوابة portail.mtpib.dz.',
          fr: 'Ces trois téléservices sont centralisés depuis l’accueil officiel de portail.mtpib.dz aux côtés de l’espace dédié à la qualification professionnelle.',
        },
      },
      {
        question: {
          ar: 'هل يمكن تعديل أو ترقية درجة التصنيف قبل انتهاء صلاحية الشهادة؟',
          fr: 'Peut-on demander une révision ou promotion de catégorie avant expiration ?',
        },
        answer: {
          ar: 'نعم، في حال ارتفاع رقم الأعمال أو تعزيز التأطير الهندسي والعتاد لدى المؤسسة، يمكن فتح طلب تحيين أو ترقية عبر فضاء الطلبات وتقديم الكشوف المحاسبية والتصريحات المحينة.',
          fr: 'Oui, dès lors que la société justifie d’une hausse de chiffre d’affaires, de nouveaux recrutements techniques ou d’acquisitions de matériel, une demande d’actualisation peut être soumise en ligne.',
        },
      },
    ],
  },
];

export const batch6Guides: Record<string, RichGuideContent> = {
  'mhuv.gov': {
    intro: {
      ar: [
        'تمثل وزارة السكن والعمران والمدينة الجهة الوصية على تنظيم السوق العقاري وإطلاق الأقطاب الحضرية وبرامج السكن بمختلف صيغها في الجزائر. ولمواكبة التحول الرقمي، أطلقت الوزارة ثلاث منصات إلكترونية متخصصة للإجراءات المهنية الخاصة بالاعتمادات: منصة اعتماد المرقي العقاري، منصة اعتماد الوكيل العقاري، ومنصة اعتماد المهندس.',
        'تسمح هذه المنصات للمتعاملين الاقتصاديين والممارسين العقاريين بإيداع ملفاتهم عن بعد وتقليص آجال الدراسة لدى اللجان المركزية والولائية دون تنقل متكرر. وبالتوازي مع الخدمات المهنية، تشرف الوزارة على المنظومة السكنية الموجهة للمواطنين عبر الوكالات والدواوين التابعة لها مثل وكالة عدل AADL، دواوين الترقية والتسيير العقاري OPGI، والمؤسسة الوطنية للترقية العقارية ENPI.',
        'يجمع هذا الدليل العملي كل ما يحتاجه المهنيون والراغبون في الحصول على الاعتمادات العقارية أو متابعة المسار التنظيمي لقطاع السكن، بدءا من شروط التأهيل القانونية والمالية وصولا إلى خطوات التسجيل وحل المشكلات الرقمية الشائعة.'
      ],
      fr: [
        'Le Ministère de l’Habitat, de l’Urbanisme et de la Ville (MHUV) assure la régulation du secteur immobilier et le pilotage des grands programmes de logement en Algérie. Pour fluidifier les démarches professionnelles, le département ministériel a déployé trois téléservices dédiés aux agréments : promoteur immobilier, agent immobilier et ingénieur agréé.',
        'Ces guichets numériques suppriment les dépôts papier répétitifs en centralisant la transmission des pièces justificatives et le suivi des décisions devant les commissions nationales ou de wilaya. Parallèlement, le ministère encadre les organismes opérationnels destinés aux citoyens tels que l’AADL, les offices OPGI et l’ENPI.',
        'Ce guide complet rassemble les prérequis réglementaires, la constitution du dossier selon la nature de l’agrément souhaité, la procédure pas à pas sur les portails officiels et les solutions face aux motifs fréquents de rejet.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'التمتع بالحقوق المدنية وخلو صحيفة السوابق القضائية رقم 3 من الإدانات المانعة لممارسة النشاط العقاري.',
        'حيازة الشهادة الجامعية أو التقنية المعتمدة قانونا حسب فئة الاعتماد المطلوب (مرقي، وكيل عقاري، أو مهندس).',
        'إثبات الخبرة المهنية الميدانية المطلوبة وامتلاك محل تجاري أو مكتب مهني مهيأ لاستقبال الزبائن.',
        'الانتساب لدى صندوق الضمان الاجتماعي لغير الأجراء CASNOS وتقديم الضمانات المالية اللازمة للترقية العقارية.',
      ],
      fr: [
        'Jouir de ses droits civiques et présenter un casier judiciaire n° 3 vierge de toute incompatibilité légale.',
        'Détenir le diplôme universitaire ou la qualification technique exigée selon le type d’agrément sollicité.',
        'Justifier de l’expérience professionnelle requise et disposer d’un local dédié conforme aux normes.',
        'Être à jour auprès des caisses sociales (CASNOS) et fournir les garanties de solvabilité exigées pour la promotion immobilière.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'تحديد المنصة الموافقة لطبيعة الاعتماد المهني',
          fr: 'Choisir le portail correspondant à votre agrément',
        },
        detail: {
          ar: 'ادخل إلى بوابة المرقين العقاريين، أو بوابة الوكلاء العقاريين، أو بوابة المهندسين حسب صفتك المهنية المسجلة.',
          fr: 'Accédez selon votre profession à la plateforme e-agrément des promoteurs, des agents immobiliers ou des ingénieurs.',
        },
      },
      {
        title: {
          ar: 'إنشاء الحساب المهني وملء استمارة المعلومات',
          fr: 'Créer votre compte et compléter le formulaire',
        },
        detail: {
          ar: 'سجل بياناتك المدنية، المؤهل العلمي، عنوان المقر المهني، ورقم السجل التجاري أو الجبائي بدقة.',
          fr: 'Saisissez avec exactitude vos coordonnées civiles, diplômes, adresse du local professionnel et références fiscales ou commerciales.',
        },
      },
      {
        title: {
          ar: 'مسح وإرفاق الوثائق الثبوتية بصيغة PDF',
          fr: 'Numériser et téléverser le dossier en PDF',
        },
        detail: {
          ar: 'قم بمسح الدبلوم، السوابق القضائية، عقد الإيجار أو الملكية، وشهادات الخبرة بوضوح ورفعها في الخانات المخصصة.',
          fr: 'Téléversez des copies PDF nettes et lisibles du diplôme, casier B3, bail ou titre de propriété et justificatifs d’expérience.',
        },
      },
      {
        title: {
          ar: 'تتبع دراسة اللجنة وسحب قرار الاعتماد',
          fr: 'Suivre l’instruction et retirer la décision',
        },
        detail: {
          ar: 'راقب حالة الطلب عبر حسابك لاستكمال أي وثيقة ناقصة ثم التوجه للاستلام أو الطباعة بعد صدور الموافقة النهائية.',
          fr: 'Consultez régulièrement votre tableau de bord pour répondre aux éventuelles observations et récupérer l’agrément après avis favorable.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض ملف الاعتماد بسبب نقص أو عدم وضوح عقد المحل المهني',
          fr: 'Rejet du dossier pour défaut ou imprécision du justificatif de local',
        },
        solution: {
          ar: 'يجب أن يكون عقد الإيجار موثقا لمدة كافية أو عقد ملكية باسم طالب الاعتماد أو الشركة ومخصصا للاستعمال التجاري أو المهني.',
          fr: 'Fournissez un bail notarié à usage professionnel/commercial ou un acte de propriété établi au nom du demandeur ou de la société.',
        },
      },
      {
        issue: {
          ar: 'تعليق دراسة ملف المرقي العقاري في مرحلة إثبات الملاءة المالية',
          fr: 'Dossier de promoteur bloqué à l’étape des garanties financières',
        },
        solution: {
          ar: 'تأكد من إرفاق شهادة كشف الرصيد أو التزام الضمان البنكي الصادر عن مؤسسة مالية معتمدة مطابقا للشروط القانونية.',
          fr: 'Joignez une attestation bancaire récente de solvabilité ou d’engagement financier conforme au cahier des charges de la promotion immobilière.',
        },
      },
      {
        issue: {
          ar: 'عدم تطابق تخصص الشهادة الجامعية مع شروط الوكيل العقاري',
          fr: 'Inadéquation du diplôme avec la grille réglementaire d’agent immobilier',
        },
        solution: {
          ar: 'راجع القائمة المحددة للشهادات المقبولة في المرسوم التنفيذي (الحقوق، العلوم الاقتصادية، الهندسة، أو تقني سامي مع خبرة) أو أرفق شهادة معادلة عند الاقتضاء.',
          fr: 'Vérifiez l’éligibilité de votre filière dans le décret exécutif en vigueur (droit, économie, génie civil, gestion) ou ajoutez l’équivalence officielle.',
        },
      },
    ],
    extraFaqs: [],
  },

  'mjeunesse.gov': {
    intro: {
      ar: [
        'تشرف وزارة الشباب في الجزائر على منظومة رقمية متطورة موجهة لمرافقة الطاقات الشابة في مجالات التكوين القيادي، الابتكار التكنولوجي، والترفيه التربوي. تضم البوابة باقة واسعة من المنصات المتفاعلة أبرزها YouthConnect، برنامج DZ Young Leaders، بوابات الهاكاثون الوطني، إضافة إلى منصة التخييم ومراكز العطل «مخيمي».',
        'كما تواكب الوزارة مسار التأطير التربوي عبر المدرسة العليا لعلوم وتقنيات تأطير الشباب ESSTEJ ومنصة مسابقات التوظيف والتكوين المتخصص لرتب مربي تنشيط الشباب. وبالتنسيق مع قطاع التكوين المهني، توفر الوزارة أيضا بوابات تسجيل للشباب في تخصصات تقنية مطلوبة مثل تركيب وصيانة الهواتف الذكية.',
        'يضع هذا الدليل بين يدي الشباب، الجمعيات، وأولياء الأمور دليلا مرتبا لكيفية الاستفادة من كل منصة، شروط التسجيل لمخيمات الصيف بما فيها الموجهة لأبناء الجالية بالخارج، وطرق استخدام تطبيق بيوت الشباب.'
      ],
      fr: [
        'Le Ministère de la Jeunesse déploie en Algérie un ensemble complet de plateformes numériques dédiées à l’émancipation des jeunes, au leadership associatif, à l’innovation et aux loisirs éducatifs. Parmi ces outils figurent YouthConnect, le programme DZ Young Leaders, les challenges nationaux de type Hackathon ainsi que le portail des camps de vacances Moukhayami.',
        'Le ministère assure également la formation des cadres supérieurs et animateurs via l’École Supérieure ESSTEJ et la plateforme des concours de formation spécialisée. Des passerelles qualifiantes comme la formation en montage de smartphones ainsi que l’application mobile des Auberges de Jeunesse complètent ce maillage national.',
        'Ce guide pratique récapitule les conditions d’inscription à chaque dispositif, les modalités d’accès aux centres de vacances pour les jeunes résidents et ceux de la diaspora, et les démarches en cas de difficulté technique.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'استيفاء الفئة العمرية المحددة لكل برنامج (الأطفال والشباب في المخيمات، والشباب من 18 إلى 35 سنة في برامج القيادة والهاكاثون).',
        'امتلاك بريد إلكتروني شخصي فعال ورقم هاتف لتأكيد حساب YouthConnect واستلام الاستدعاءات.',
        'حيازة المؤهل الدراسي أو الشهادة الجامعية عند الترشح لمسابقات المدرسة العليا ESSTEJ أو رتبة مربي رئيسي.',
        'توفير الترخيص الأبوي والشهادة الطبية للمشاركين القصر في مراكز التخييم والأنشطة الصيفية.',
      ],
      fr: [
        'Respecter la tranche d’âge réglementaire propre à chaque programme (colonies de vacances, leadership ou hackathons).',
        'Disposer d’une adresse e-mail valide et d’un numéro de téléphone pour activer le compte YouthConnect.',
        'Justifier du niveau académique exigé lors des candidatures aux concours ESSTEJ ou d’éducateur principal.',
        'Fournir l’autorisation parentale et un certificat médical d’aptitude pour les mineurs inscrits aux séjours Moukhayami.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'اختيار البرنامج الشباني أو التكويني المناسب',
          fr: 'Sélectionner le programme ou l’activité ciblée',
        },
        detail: {
          ar: 'حدد ما إذا كنت ترغب في الأنشطة القيادية عبر YouthConnect، المنافسة في الهاكاثون، التكوين في ESSTEJ، أو حجز برامج مخيمي.',
          fr: 'Identifiez votre objectif : activités citoyennes YouthConnect, hackathon, concours ESSTEJ, formation technique ou séjours Moukhayami.',
        },
      },
      {
        title: {
          ar: 'إنشاء الحساب الرقمي وتعبئة الملف التعريفي',
          fr: 'Créer votre compte et renseigner votre profil',
        },
        detail: {
          ar: 'أدخل البيانات الشخصية، الولاية، المستوى التعليمي، والاهتمامات الشبابية أو فكرة المشروع عند التقديم للهاكاثون.',
          fr: 'Complétez vos données civiles, wilaya, parcours scolaire et thématiques d’intérêt ou description du projet.',
        },
      },
      {
        title: {
          ar: 'إرفاق الوثائق المطلوبة للمسابقات أو الدورات',
          fr: 'Déposer les justificatifs de concours ou formation',
        },
        detail: {
          ar: 'ارفع نسخا واضحة من بطاقة التعريف والشهادات العلمية عند فتح باب الترشح لمسابقات مربي رئيسي أو دورات تكوين.',
          fr: 'Joignez les scans des pièces d’identité et diplômes requis lors de l’ouverture des campagnes de concours ou formations.',
        },
      },
      {
        title: {
          ar: 'تأكيد المشاركة وتحميل الاستدعاء أو متابعة مراكز العطل',
          fr: 'Confirmer l’inscription et consulter les affectations',
        },
        detail: {
          ar: 'احفظ وصل التسجيل الإلكتروني وتابع بريدك الإلكتروني أو منصة التواصل الرسمية لمخيمي لاستلام موعد الالتحاق.',
          fr: 'Conservez le récépissé généré et suivez les notifications par e-mail ou via le portail Moukhayami pour les dates de départ.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم وصول رسالة تفعيل الحساب في منصة YouthConnect',
          fr: 'Non-réception du courriel d’activation sur YouthConnect',
        },
        solution: {
          ar: 'افحص مجلد الرسائل غير المرغوب فيها Spam وتأكد من عدم وجود أخطاء إملائية في عنوان البريد قبل طلب إعادة الإرسال.',
          fr: 'Vérifiez le dossier courrier indésirable (Spam) et assurez-vous de l’exactitude de votre adresse e-mail lors de la saisie.',
        },
      },
      {
        issue: {
          ar: 'ظهور رسالة انتهاء آجال التسجيل في دورة التكوين أو الهاكاثون',
          fr: 'Message de clôture des inscriptions sur les pages concours ou hackathon',
        },
        solution: {
          ar: 'تفتح هذه البوابات وفق فترات موسمية محددة؛ تابع الصفحة الرئيسية mjeunesse.gov.dz لمتابعة مواعيد الدورات الجديدة المقبلة.',
          fr: 'Ces portails fonctionnent par sessions datées ; consultez le site officiel mjeunesse.gov.dz pour connaître l’ouverture de la prochaine édition.',
        },
      },
      {
        issue: {
          ar: 'صعوبة التواصل بشأن مخيمات الجالية بالخارج',
          fr: 'Question spécifique sur les séjours dédiés à la diaspora',
        },
        solution: {
          ar: 'استخدم نموذج الاتصال المباشر على moukhayami.mjeunesse.gov.dz/contact أو تواصل مع القنصلية الجزائرية بمقر إقامتك.',
          fr: 'Utilisez le formulaire officiel sur moukhayami.mjeunesse.gov.dz/contact ou adressez-vous au consulat algérien de votre circonscription.',
        },
      },
    ],
    extraFaqs: [],
  },

  mjustice: {
    intro: {
      ar: [
        'حققت وزارة العدل الجزائرية قفزة نوعية في رقمنة المرفق القضائي عبر منظومة «عدالة تيك» والنيابة الإلكترونية، مما مكن المواطنين داخل الوطن والجالية المقيمة بالخارج من استخراج أهم الوثائق القضائية الحساسة في ثوان معدودة دون الحاجة لقطع مسافات طويلة أو الانتظار في المحاكم.',
        'تشمل البوابة خدمات جوهرية على رأسها استخراج صحيفة السوابق القضائية رقم 3 وشهادة الجنسية الجزائرية موقعتين إلكترونيا برمز QR قابل للتحقق الفوري، بالإضافة إلى بوابة النيابة الإلكترونية لإيداع الشكاوى ومتابعة مآلها لدى وكيل الجمهورية، ومنصة «زيارتي» لحجز رخص زيارة المحبوسين، فضلا عن طلب نسخ عقود المحاكم ومستخرجات الأرشيف الثوري.',
        'نشرح في هذا الدليل المرجعي الخطوات الواضحة لتفعيل حساب العدالة الشخصي في أي محكمة، كيفية التمييز بين خدمات الوثائق عن بعد وخدمات النيابة التي تستعمل رقم التعريف الوطني، وأهم النصائح لتفادي أخطاء الإدخال.'
      ],
      fr: [
        'Le Ministère de la Justice algérien figure parmi les secteurs les plus avancés en matière de transformation numérique grâce à l’écosystème AdalaTic et au portail E-Nyaba. Les citoyens résidant en Algérie comme à l’étranger peuvent désormais obtenir à distance des documents judiciaires authentiques en quelques clics.',
        'L’offre couvre l’extraction instantanée du bulletin n° 3 du casier judiciaire et du certificat de nationalité algérienne signés électroniquement avec QR code, le dépôt et le suivi de plaintes devant le parquet via E-Nyaba, la demande de copies d’actes judiciaires, les attestations d’archives historiques ainsi que les permis de visite pénitentiaire sur Ziyarati.',
        'Ce guide vous accompagne pas à pas pour obtenir vos identifiants sécurisés auprès d’un tribunal, déposer une requête en ligne et résoudre les blocages d’authentification les plus courants.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'التقدم لمرة واحدة فقط إلى أقرب محكمة ببطاقة التعريف الوطنية لاستلام اسم المستخدم وكلمة المرور (لخدمات السوابق والجنسية).',
        'بالنسبة لشهادة الجنسية عن بعد، يشترط أن يكون المواطن قد استصدرها ورقيا سابقا لمرة واحدة على الأقل لتسجيل بياناته.',
        'توفر رقم التعريف الوطني NIN ووثائق الإثبات بصيغة PDF عند إيداع شكوى عبر النيابة الإلكترونية E-Nyaba.',
        'تحديد صلة القرابة القانونية والبيانات الصحيحة للمحبوس عند حجز رخصة الزيارة عبر منصة زيارتي.',
      ],
      fr: [
        'Se présenter une seule fois au guichet de n’importe quel tribunal avec sa CNIBE pour retirer les identifiants permanents (casier B3 et nationalité).',
        'Pour le certificat de nationalité en ligne, avoir déjà obtenu au moins une version papier antérieure afin que la filiation soit numérisée.',
        'Disposer de son NIN et des pièces probantes numérisées en PDF lors d’un dépôt sur E-Nyaba.',
        'Justifier d’un lien familial légal avec le détenu lors d’une demande d’autorisation sur le portail Ziyarati.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'استلام مفاتيح الدخول من أي محكمة قريبة',
          fr: 'Activer vos identifiants au tribunal le plus proche',
        },
        detail: {
          ar: 'توجه لمرة واحدة إلى شباك أي محكمة بالوطن حاملا بطاقة التعريف ورقم هاتفك لتتسلم فورا بيانات حسابك السرية عبر رسالة SMS.',
          fr: 'Présentez-vous une unique fois au guichet d’un tribunal muni de votre carte d’identité et téléphone personnel pour recevoir votre accès par SMS.',
        },
      },
      {
        title: {
          ar: 'الدخول إلى بوابة الوثيقة المطلوبة (e-casier أو الجنسية)',
          fr: 'Se connecter au téléservice souhaité',
        },
        detail: {
          ar: 'أدخل اسم المستخدم وكلمة المرور واختر الوثيقة المطلوبة ثم أكد العملية عبر الرمز الأمني المرسل لهاتفك.',
          fr: 'Saisissez votre identifiant, sélectionnez le document souhaité (B3 ou nationalité) et validez par le code de confirmation SMS.',
        },
      },
      {
        title: {
          ar: 'تحميل النسخة الموقعة إلكترونيا أو إيداع شكوى E-Nyaba',
          fr: 'Télécharger l’acte signé ou déposer sur E-Nyaba',
        },
        detail: {
          ar: 'حمل ملف PDF الممضى إلكترونيا، أو انتقل إلى بوابة النيابة الإلكترونية لإيداع عريضة الشكوى برقم التعريف الوطني والمرفقات.',
          fr: 'Enregistrez le fichier PDF doté de la signature numérique ou remplissez directement votre plainte sur E-Nyaba avec votre NIN.',
        },
      },
      {
        title: {
          ar: 'متابعة مآل الطلبات في زيارتي أو تطبيق AdalaTic',
          fr: 'Suivre vos démarches sur Ziyarati ou AdalaTic',
        },
        detail: {
          ar: 'راجع بوابة المتابعة برقم الملف أو من خلال تطبيق AdalaTic للاطلاع على قبول رخص الزيارة أو مراحل معالجة الشكوى.',
          fr: 'Utilisez les espaces de suivi ou l’application AdalaTic pour vérifier la délivrance des permis de visite et l’orientation des plaintes.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'فقدان كلمة المرور أو تغيير رقم الهاتف المسجل لدى شباك المحكمة',
          fr: 'Mot de passe oublié ou changement du numéro de mobile lié au compte',
        },
        solution: {
          ar: 'تستوجب الحماية القضائية التوجه إلى أقرب محكمة لتحديث رقم الهاتف المسجل واستلام كلمة مرور جديدة عبر SMS في الحين.',
          fr: 'Pour des raisons de sécurité juridique, présentez-vous à n’importe quel tribunal pour mettre à jour votre numéro et réinitialiser l’accès.',
        },
      },
      {
        issue: {
          ar: 'تعذر تحميل شهادة الجنسية مع ظهور تنبيه بعدم توفر سجل مسبق',
          fr: 'Blocage de la demande de nationalité pour absence d’historique informatisé',
        },
        solution: {
          ar: 'يجب استخراج شهادة الجنسية بالطريقة العادية في المحكمة لمرة واحدة كي تدمج قاعدة البيانات رقمها، وبعدها تصبح متاحة عن بعد دائما.',
          fr: 'Demandez une première délivrance au guichet du tribunal afin d’enregistrer votre filiation dans la base nationale ; les renouvellements seront ensuite dématérialisés.',
        },
      },
      {
        issue: {
          ar: 'رفض شكوى النيابة الإلكترونية عند الإرسال',
          fr: 'Échec de soumission du formulaire E-Nyaba',
        },
        solution: {
          ar: 'تأكد من تحديد الجهة القضائية المختصة إقليميا بمكان الواقعة وضغط ملفات PDF المرفقة لتتوافق مع الحجم المسموح.',
          fr: 'Vérifiez que la juridiction choisie correspond au lieu de l’infraction et réduisez la taille des pièces jointes PDF si nécessaire.',
        },
      },
    ],
    extraFaqs: [],
  },

  mobilis: {
    intro: {
      ar: [
        'توفر شركة اتصالات الجزائر للهاتف النقال «موبيليس» باقة متكاملة من الحلول الرقمية الموجهة لتبسيط حياة الملايين من المشتركين وتفادي التنقل للوكالات التجارية. ومن خلال بوابة الدفع الإلكتروني Arselli وتطبيقي Mobilis Care وMobiSpace، يستطيع كل مستخدم شحن رصيده، تسديد فواتير الاشتراك البعدي، ومراقبة استهلاك الإنترنت والمكالمات في أي وقت.',
        'إلى جانب خدمات التعبئة وتفعيل باقات الجيل الرابع والاتصالات، أولت موبيليس اهتماما خاصا للأمن الرقمي عبر إطلاق منصة رسمية مخصصة للإبلاغ عن الرسائل القصيرة الاحتيالية (SMS Fraude) ومحاولات التصيد التي تستهدف المعاملات المالية للمواطنين.',
        'يجمع هذا الدليل الشامل الطرق الآمنة لتعبئة الرصيد بالبطاقة الذهبية وبنكية CIB، خطوات تفعيل حساب Mobilis Care على الهاتف الذكي، وأبرز الإرشادات العملية لمعالجة أعطال الدفع أو الإبلاغ عن محاولات الاحتيال.'
      ],
      fr: [
        'ATM Mobilis propose à ses millions d’abonnés un écosystème complet de services numériques permettant de gérer les lignes mobiles à distance sans passage en agence. Grâce au portail e-paiement (Arselli) et aux applications Mobilis Care et MobiSpace, le suivi des consommations, l’activation de forfaits et le règlement des factures deviennent instantanés.',
        'Soucieux de la sécurité numérique des usagers, l’opérateur a également mis en place une plateforme dédiée au signalement des SMS frauduleux et tentatives de phishing afin de protéger les titulaires de comptes bancaires et postaux.',
        'Ce guide détaille les méthodes officielles de rechargement par carte Edahabia ou CIB, l’utilisation optimale des applications mobiles de gestion de forfait et les bons réflexes face aux anomalies de transaction.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'امتلاك شريحة موبيليس نشطة ومسجلة بالهوية البيومترية الصحيحة لصاحب الخط.',
        'توفر بطاقة الدفع الذهبية لبريد الجزائر أو بطاقة بنكية CIB مفعلة لخدمات الدفع عبر الإنترنت.',
        'وجود رقم هاتف مرتبط بالبطاقة الذهبية أو البنكية لاستقبال رمز التأكيد السري OTP.',
        'تنزيل أحدث نسخة من تطبيق Mobilis Care عبر متجر Google Play على هاتف يعمل بنظام Android.',
      ],
      fr: [
        'Détenir une carte SIM Mobilis active et régulièrement identifiée au nom du titulaire.',
        'Disposer d’une carte Edahabia ou CIB activée pour les transactions de paiement électronique sur internet.',
        'Avoir un numéro mobile rattaché à la carte bancaire ou postale pour recevoir le code de validation OTP.',
        'Installer la version officielle de Mobilis Care depuis Google Play pour la gestion complète de la ligne.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'الولوج إلى بوابة الدفع الإلكتروني لموبيليس',
          fr: 'Accéder au portail e-paiement Mobilis',
        },
        detail: {
          ar: 'افتح الموقع الرسمي e-paiement.mobilis.dz واختر بين تعبئة الرصيد (Arselli) أو تسديد الفاتورة الشهرية.',
          fr: 'Rendez-vous sur e-paiement.mobilis.dz puis choisissez entre rechargement prépayé (Arselli) ou paiement de facture postpayée.',
        },
      },
      {
        title: {
          ar: 'إدخال رقم الهاتف ومبلغ التعبئة',
          fr: 'Saisir le numéro Mobilis et le montant',
        },
        detail: {
          ar: 'تحقق جيدا من رقم خط موبيليس المراد شحنه مرتين قبل الانتقال إلى مرحلة اختيار وسيلة الدفع.',
          fr: 'Vérifiez avec attention les dix chiffres du numéro bénéficiaire et le montant avant de sélectionner le mode de règlement.',
        },
      },
      {
        title: {
          ar: 'تأكيد المعاملة عبر البطاقة الذهبية أو CIB',
          fr: 'Valider le paiement par carte Edahabia ou CIB',
        },
        detail: {
          ar: 'أدخل أرقام البطاقة وتاريخ الصلاحية ثم رمز OTP المرسل عبر SMS لإتمام الشحن الفوري.',
          fr: 'Renseignez les coordonnées de votre carte puis saisissez le code sécurisé reçu par SMS pour créditer immédiatement la ligne.',
        },
      },
      {
        title: {
          ar: 'إدارة الباقات أو التبليغ عن الرسائل المشبوهة',
          fr: 'Piloter les offres ou signaler un SMS frauduleux',
        },
        detail: {
          ar: 'استعمل تطبيق Mobilis Care لتفعيل عروض الإنترنت، واستعمل بوابة smsfraude عند تلقي أي رسالة احتيالية.',
          fr: 'Utilisez Mobilis Care pour activer vos forfaits data et le portail mobilis.dz/smsfraude pour déclarer toute tentative d’arnaque.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'خصم المبلغ من البطاقة دون وصول الرصيد في الحال',
          fr: 'Débit bancaire ou postal effectué sans crédit immédiat du solde',
        },
        solution: {
          ar: 'احتفظ برقم العملية المعروض على شاشة الدفع وانتظر بضع دقائق للتحديث التلقائي؛ وفي حال استمرار التأخر اتصل بمركز 666 أو راسل البنك.',
          fr: 'Conservez l’identifiant de transaction affiché, patientez quelques minutes pour la synchronisation, puis contactez le 666 avec la référence de paiement.',
        },
      },
      {
        issue: {
          ar: 'رفض البطاقة الذهبية عند الدفع على بوابة موبيليس',
          fr: 'Refus de la carte Edahabia lors du règlement en ligne',
        },
        solution: {
          ar: 'تأكد من عدم تجاوز السقف اليومي للإنترنت وأن رقم الهاتف المرتبط ببريدي موب متطابق وصالح لاستقبال رمز التحقق.',
          fr: 'Vérifiez que votre plafond de paiement journalier n’est pas atteint et que le numéro lié à la carte reçoit bien les SMS OTP.',
        },
      },
      {
        issue: {
          ar: 'عدم تحديث استهلاك الإنترنت داخل تطبيق Mobilis Care',
          fr: 'Consommation data non actualisée dans Mobilis Care',
        },
        solution: {
          ar: 'قم بتحديث التطبيق عبر Google Play أو اطلب الرمز #222* من لوحة الاتصال للاطلاع المباشر على المتبقي من الباقة.',
          fr: 'Mettez l’application à jour depuis le Play Store ou composez le code USSD *222# pour obtenir le solde instantané.',
        },
      },
    ],
    extraFaqs: [],
  },

  'msnfcf.gov': {
    intro: {
      ar: [
        'تعتمد وزارة التضامن الوطني والأسرة وقضايا المرأة واحدة من أوسع الشبكات الرقمية ذات البعد الإنساني والاجتماعي في الجزائر، بهدف تقريب خدمات الدعم والحماية والتمكين الاقتصادي من الفئات الهشة والأسر المنتجة والجمعيات.',
        'تغطي المنصات المتخصصة مجالات دقيقة ومتكاملة: منصة «أسرتي» و«تسويق» لدعم مشاريع الأسر المنتجة والمرأة الريفية، منصة وتطبيق «حمايتي» للتبليغ الفوري وحماية المرأة ضحية العنف، منصة «سندكم» للاستشارات الأسرية المجانية، منصة «مرافقة» لرعاية الأشخاص المسنين، فضلا عن منصات دعم الجمعيات، الإصغاء «يصغي»، «النزاهة» للتبليغ عن التجاوزات، وبوابة التوظيف للقطاع.',
        'يوفر هذا الدليل مرجعا موثوقا يربط المواطن والمستفيد والجمعية مباشرة بالمنصة الصحيحة، مع توضيح الوثائق اللازمة للاستفادة من كل برنامج وشرح آليات التدخل السري والسريع للخلايا الجوارية للتضامن.'
      ],
      fr: [
        'Le Ministère de la Solidarité Nationale, de la Famille et de la Condition de la Femme anime un vaste réseau de plateformes numériques sociales destinées à l’inclusion économique, à l’accompagnement psychologique et à la protection des personnes vulnérables.',
        'Cet écosystème regroupe des dispositifs complémentaires : Ousraty et Taswiq pour les familles productives et femmes rurales, Himayati pour l’alerte et la protection des femmes victimes de violences, Sanedcom pour le conseil familial, Mourafaka pour l’accompagnement des seniors, Yosghi pour l’écoute, Nazaha pour l’intégrité ainsi que les guichets de financement associatif et de recrutement.',
        'Ce guide synthétise les conditions d’éligibilité propres à chaque dispositif, la constitution des dossiers auprès des Directions de l’Action Sociale (DAS) et les parcours d’accès en ligne.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'الانتماء إلى الفئات المعنية بكل برنامج تضامني (أسرة منتجة، مسن في وضعية هشاشة، جمعية معتمدة، أو طالب استشارة).',
        'تقديم الوثائق المثبتة للوضعية الاجتماعية أو القانونية لدى مصالح مديرية النشاط الاجتماعي DAS أو عبر المنصة المفتوحة.',
        'للمشاريع الجمعوية: التوفر على اعتماد ساري المفعول وبرامج عمل مصادق عليها في الجمعية العامة.',
        'في حالات التوظيف: مطابقة التخصص الأكاديمي لمناصب المراكز البيداغوجية والمؤسسات المتخصصة المفتوحة.',
      ],
      fr: [
        'Relever du public cible de la plateforme concernée (famille productive, senior vulnérable, femme en détresse ou association agréée).',
        'Justifier de sa situation sociale ou statutaire auprès de la Direction de l’Action Sociale (DAS) ou sur le portail dédié.',
        'Pour les associations : détenir un agrément en cours de validité et des bilans approuvés.',
        'Pour le recrutement : posséder le diplôme spécialisé conforme aux postes ouverts dans les établissements du secteur.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'اختيار المنصة التضامنية الملائمة للوضع',
          fr: 'Identifier le portail adapté à votre situation',
        },
        detail: {
          ar: 'استعمل «أسرتي» و«تسويق» للمشاريع، «حمايتي» أو «سندكم» للحماية والاستشارة، ومنصة الجمعيات للتمويل العمومي.',
          fr: 'Orientez-vous vers Ousraty/Taswiq pour l’activité économique, Himayati/Sanedcom pour la protection et solidarite-association pour les subventions.',
        },
      },
      {
        title: {
          ar: 'إعداد البيانات أو الاتصال بمديرية النشاط الاجتماعي DAS',
          fr: 'Préparer les pièces ou solliciter la DAS locale',
        },
        detail: {
          ar: 'تتم دراسة ملفات الأسرة المنتجة والمسنين والمرافقة محليا عبر الخلايا الجوارية لإدراج المستفيدين في البوابات الإدارية.',
          fr: 'Les demandes nécessitant une enquête sociale (Ousraty, Mourafaka) sont instruites avec les cellules de proximité des DAS de wilaya.',
        },
      },
      {
        title: {
          ar: 'إدخال الطلب أو البلاغ على المنصة المفتوحة للجمهور',
          fr: 'Soumettre votre demande ou alerte en ligne',
        },
        detail: {
          ar: 'املأ استمارات التوظيف، التمويل الجمعوي، التبليغ في نزاهة، أو تسويق المنتجات بكل دقة وأرفق الصور أو الملفات المطلوبة.',
          fr: 'Remplissez les formulaires publics de recrutement, subvention associative, commercialisation ou signalement confidentiel Nazaha.',
        },
      },
      {
        title: {
          ar: 'متابعة التوجيه الميداني والتكفل الاجتماعي',
          fr: 'Suivre la prise en charge par les équipes spécialisées',
        },
        detail: {
          ar: 'تتولى الفرق النفسية والقانونية والاجتماعية التواصل الآمن مع أصحاب الطلبات أو نشر نتائج الانتقاء على المواقع الرسمية.',
          fr: 'Les cellules pluridisciplinaires assurent un suivi confidentiel des alertes et publient les résultats des appels à projets et concours.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'ظهور صفحة تسجيل دخول خاصة بالموظفين في بعض بوابات الوزارة',
          fr: 'Accès limité par authentification administrative sur certains portails',
        },
        solution: {
          ar: 'بوابات التسيير مثل Login_AD وequipements مخصصة لأعوان التضامن؛ للتسجيل الفردي كمنتفع توجه إلى الخلية الجوارية أو مديرية النشاط الاجتماعي DAS بولايتك.',
          fr: 'Les interfaces Login_AD et équipements sont réservées aux agents des DAS ; les citoyens déposent leur demande auprès de la cellule de proximité ou de la DAS.',
        },
      },
      {
        issue: {
          ar: 'صعوبة تثبيت ملف تطبيق حمايتي بصيغة APK على أندرويد',
          fr: 'Blocage d’installation du fichier APK Himayati sur Android',
        },
        solution: {
          ar: 'اسمح بتثبيت التطبيقات من مصدر الموقع الرسمي في إعدادات الأمان بالهاتف بعد تحميل الملف مباشرة من نطاق himayati.dz.',
          fr: 'Autorisez ponctuellement l’installation depuis le navigateur dans les paramètres Android uniquement après téléchargement depuis le domaine officiel himayati.dz.',
        },
      },
      {
        issue: {
          ar: 'تأخر الرد على ملف دعم جمعوي مرفوع إلكترونيا',
          fr: 'Délai d’attente après soumission d’un dossier associatif',
        },
        solution: {
          ar: 'تأكد من إتمام إرسال الملف نهائيا وعدم بقائه في حالة مسودة وتحقق من تطابق التقرير المالي المصادق عليه مع شروط الدورة.',
          fr: 'Vérifiez que le dossier est bien validé définitivement (non laissé en brouillon) et que toutes les annexes financières sont signées.',
        },
      },
    ],
    extraFaqs: [],
  },

  'msport.gov': {
    intro: {
      ar: [
        'تحرص وزارة الرياضة الجزائرية على تطوير قنوات الاتصال والتكوين الرقمي لصالح الفاعلين في الحقل الرياضي من مدربين، مؤطرين، طلبة المعاهد، ورياضيين. وتعكس بوابتي «تكسبورت Taksport» و«اتصل Itassel» التوجه نحو تبسيط الإجراءات الإدارية وسحب الوثائق البيداغوجية عن بعد.',
        'من خلال منصة Taksport، يمكن للمشاركين في الدورات التكوينية الرياضية والتكوين الجزئي تتبع وضعيات ملفاتهم وتحميل شهادات المشاركة المعتمدة رقميا في أي وقت. كما يتيح فضاء «اتصل» جسرا مفتوحا لتقديم الانشغالات والاقتراحات من طرف النوادي والرياضيين ومعالجتها من طرف المصالح المركزية المختصة.',
        'يستعرض هذا الدليل طريقة استخدام هاتين البوابتين، الشروط اللازمة للاستفادة من التكوين الرياضي وسحب الشهادات، والخطوات العملية لحل إشكالات البحث عن الملفات المفقودة.'
      ],
      fr: [
        'Le Ministère des Sports veille à moderniser la gestion administrative et pédagogique du secteur sportif algérien grâce à deux services numériques majeurs : la plateforme de formation Taksport et le guichet d’écoute Itassel.',
        'Via Taksport, les stagiaires, entraîneurs et encadreurs engagés dans les sessions de formation partielle suivent l’avancement de leur dossier et téléchargent directement leurs certificats de participation certifiés. En parallèle, l’espace Itassel permet aux athlètes, dirigeants de clubs et citoyens de transmettre leurs doléances et demandes d’éclaircissement aux services centraux.',
        'Ce guide pratique détaille la procédure de récupération des attestations, les conditions d’accès aux formations sportives et la démarche de saisine en ligne.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'المشاركة الفعلية أو التسجيل الرسمي في دورة تكوين جزئي أو ملتقى معتمد من وزارة الرياضة والمعاهد التابعة لها.',
        'التوفر على رقم الملف أو بيانات الهوية المسجلة في الدورة لاستخراج الشهادة عبر Taksport.',
        'الانتماء إلى ناد أو رابطة أو امتلاك صفة رياضية أو مواطنية واضحة عند رفع انشغال في منصة اتصل.',
        'إرفاق الوثائق المؤيدة عند تقديم شكوى إدارية أو طلب مراجعة وضعية رياضية.',
      ],
      fr: [
        'Avoir participé ou être inscrit à une session de formation partielle validée par les structures du Ministère des Sports.',
        'Disposer de son numéro d’inscription ou des données d’état civil enregistrées pour générer le certificat sur Taksport.',
        'Indiquer clairement sa qualité (athlète, entraîneur, président de club ou citoyen) lors d’un signalement sur Itassel.',
        'Joindre les justificatifs pertinents en cas de requête administrative ou de réclamation.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'الدخول إلى منصة الشهادات Taksport',
          fr: 'Accéder au portail des certificats Taksport',
        },
        detail: {
          ar: 'انتقل إلى taksport.msport.gov.dz/public/certificate عبر المتصفح على الحاسوب أو الهاتف.',
          fr: 'Ouvrez taksport.msport.gov.dz/public/certificate depuis votre ordinateur ou smartphone.',
        },
      },
      {
        title: {
          ar: 'البحث عن شهادة المشاركة أو حالة الطلب',
          fr: 'Rechercher votre certificat ou suivre votre demande',
        },
        detail: {
          ar: 'أدخل رقم التسجيل أو معلوماتك الشخصية بدقة لعرض شهادة التكوين الجزئي وتحميلها بصيغة PDF.',
          fr: 'Renseignez votre identifiant de dossier ou vos données personnelles pour afficher et télécharger votre attestation au format PDF.',
        },
      },
      {
        title: {
          ar: 'الولوج إلى فضاء اتصل لرفع الاستفسارات',
          fr: 'Utiliser l’espace Itassel pour toute requête',
        },
        detail: {
          ar: 'في حال وجود انشغال يخص المنشآت، التكوين، أو الدعم، افتح itassel.msport.gov.dz/public واملأ النموذج المخصص.',
          fr: 'Rendez-vous sur itassel.msport.gov.dz/public pour soumettre une demande d’information, une doléance ou un recours administratif.',
        },
      },
      {
        title: {
          ar: 'حفظ رقم المتابعة والاطلاع على الرد الرسمي',
          fr: 'Conserver le numéro de suivi et consulter la réponse',
        },
        detail: {
          ar: 'احتفظ برقم التتبع الممنوح عند إرسال الطلب لمتابعة رد مصالح وزارة الرياضة إلكترونيا.',
          fr: 'Notez le code de suivi généré après soumission afin de vérifier l’avancement et la réponse officielle du ministère.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم ظهور الشهادة عند إدخال الاسم في منصة Taksport',
          fr: 'Certificat introuvable lors de la recherche sur Taksport',
        },
        solution: {
          ar: 'تأكد من تطابق كتابة الاسم بالفرنسية أو العربية مع وثيقة التسجيل الأصلية، وتواصل مع المعهد المشرف إذا لم ترفع قائمة الدورة بعد.',
          fr: 'Vérifiez l’orthographe exacte utilisée lors de votre inscription et contactez l’institut organisateur pour confirmer la clôture de la session.',
        },
      },
      {
        issue: {
          ar: 'صعوبة إرسال استمارة الانشغال في منصة اتصل',
          fr: 'Erreur lors de la validation du formulaire Itassel',
        },
        solution: {
          ar: 'تأكد من ملء كافة الحقول الإجبارية واستخدام رقم هاتف وبريد إلكتروني صحيحين دون رموز غير مدعومة في نص الرسالة.',
          fr: 'Assurez-vous de remplir tous les champs obligatoires avec un numéro valide et évitez les caractères spéciaux non pris en charge.',
        },
      },
      {
        issue: {
          ar: 'الحاجة إلى تصديق أو مطابقة شهادة رياضية للعمل بالخارج',
          fr: 'Besoin de certification complémentaire d’un diplôme sportif',
        },
        solution: {
          ar: 'راجع مديرية التكوين بالوزارة أو المعهد الوطني العالي للرياضة المعني لطلب المصادقة الرسمية بعد سحب النسخة الرقمية.',
          fr: 'Adressez-vous à la direction de la formation du ministère ou à l’institut supérieur ayant délivré le titre pour toute procédure d’authentification.',
        },
      },
    ],
    extraFaqs: [],
  },

  mtess: {
    intro: {
      ar: [
        'تشرف وزارة العمل والتشغيل والضمان الاجتماعي على منظومة شاملة لحماية حقوق العمال وتأمين التغطية الاجتماعية ومكافحة العمل غير الرسمي في الجزائر. وتتكامل بوابات الوزارة مباشرة مع الهيئات الكبرى تحت الوصاية مثل CNAS وCASNOS وCNR وANEM لتشكيل فضاء خدمات مترابط يخدم الأجراء، المتقاعدين، وطالبي العمل.',
        'أطلقت الوزارة منصة «تبليغ» الرقمية لتكريس الشفافية وحماية العمال، حيث تمكن المبلغين من إرسال الشكاوى والبلاغات حول مخالفات قانون العمل أو التهرب من التصريح لدى الضمان الاجتماعي ومتابعة معالجتها بسرية تامة. كما تدعم الوزارة حزمة من تطبيقات الهواتف الذكية الرسمية وعلى رأسها تطبيق الهناء، تطبيق المتقاعد، وتطبيق الحساب الفردي للأجير CIS.',
        'يوضح هذا الدليل كيفية التبليغ الآمن عبر منصة تبليغ والتواصل مع خلية النزاهة، بالإضافة إلى دور كل تطبيق رقمي من تطبيقات القطاع وشروط استخدامه اليومي بنجاح.'
      ],
      fr: [
        'Le Ministère du Travail, de l’Emploi et de la Sécurité Sociale (MTESS) pilote l’ensemble des dispositifs de protection des travailleurs, d’inspection du travail et de régulation de la sécurité sociale en Algérie, en articulation directe avec la CNAS, la CASNOS, la CNR et l’ANEM.',
        'Pour renforcer la transparence et la lutte contre le travail non déclaré, le ministère a déployé la plateforme sécurisée Tabligh permettant aux citoyens et salariés de signaler toute infraction au droit du travail en toute confidentialité. Il promeut également les applications mobiles officielles du secteur : El Hanaa (CNAS), Retraité (CNR) et Compte Individuel du Salarié (CIS).',
        'Ce guide décrit la procédure d’utilisation de Tabligh, le canal officiel de la cellule d’intégrité et les fonctionnalités clés de chaque application mobile de sécurité sociale.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'حساب إلكتروني شخصي على منصة تبليغ لتقديم البلاغات ومتابعتها عبر بوابة تسجيل الدخول.',
        'توفر رقم الضمان الاجتماعي (12 رقما) للاستفادة من خدمات تطبيقات الهناء، المتقاعد، والحساب الفردي للأجير.',
        'بيانات دقيقة حول المؤسسة أو المخالفة المبلغ عنها لدعم عمل مفتشية العمل وخلية النزاهة.',
        'بريد إلكتروني فعال للتواصل مع خلية النزاهة عند إرسال ملفات تكميلية عبر cellule.nazaha@mtess.gov.dz.',
      ],
      fr: [
        'Disposer d’un compte sécurisé sur Tabligh pour déposer un signalement et suivre son avancement.',
        'Connaître son numéro de sécurité sociale à 12 chiffres pour activer les applications El Hanaa, Retraité et CIS.',
        'Fournir des informations factuelles et précises sur l’entité ou l’infraction signalée.',
        'Utiliser une adresse mail valide pour échanger si besoin avec la cellule d’intégrité (cellule.nazaha@mtess.gov.dz).',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'فتح حساب آمن على منصة «تبليغ»',
          fr: 'Créer un compte sécurisé sur Tabligh',
        },
        detail: {
          ar: 'انتقل إلى tabligh.mtess.gov.dz/auth/register وأنشئ حسابك في دقائق لولوج فضاء المبلغ المحمي.',
          fr: 'Rendez-vous sur tabligh.mtess.gov.dz/auth/register pour ouvrir votre accès personnel protégé en quelques minutes.',
        },
      },
      {
        title: {
          ar: 'تحرير البلاغ وإرسال المؤيدات بسرية',
          fr: 'Rédiger le signalement et transmettre les preuves',
        },
        detail: {
          ar: 'اختر موضوع المخالفة، اذكر الولاية ومقر العمل المعني، وأرفق أي مستندات متوفرة قبل تأكيد الإرسال.',
          fr: 'Sélectionnez le motif de l’alerte, précisez la wilaya et le lieu d’activité concerné, puis joignez les pièces justificatives disponibles.',
        },
      },
      {
        title: {
          ar: 'متابعة مراحل المعالجة أو مراسلة خلية النزاهة',
          fr: 'Suivre l’instruction ou contacter la cellule Nazaha',
        },
        detail: {
          ar: 'سجل الدخول عبر tabligh.mtess.gov.dz/auth/login للاطلاع على حالة البلاغ أو راسل البريد الرسمي للخلية عند الحاجة.',
          fr: 'Connectez-vous sur tabligh.mtess.gov.dz/auth/login pour suivre les suites données ou écrivez à cellule.nazaha@mtess.gov.dz.',
        },
      },
      {
        title: {
          ar: 'تثبيت تطبيقات الضمان والتقاعد الرسمية',
          fr: 'Installer les applications mobiles CNAS et CNR',
        },
        detail: {
          ar: 'حمل تطبيق الهناء لمتابعة التغطية الصحية، تطبيق المتقاعد لتجديد المعاش، وتطبيق CIS لمراقبة سنوات اشتراكك.',
          fr: 'Téléchargez El Hanaa pour le suivi maladie, Retraité pour la pension CNR et CIS pour vérifier vos années cotisées.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم استلام كلمة المرور الخاصة بتطبيق الهناء أو CIS',
          fr: 'Mot de passe manquant pour les applications El Hanaa ou CIS',
        },
        solution: {
          ar: 'يمكنك إنشاء الحساب مباشرة من التطبيق برقم الضمان الاجتماعي وتاريخ الميلاد أو طلب الرمز من أقرب وكالة CNAS أو CNR.',
          fr: 'Utilisez la procédure de création de compte intégrée avec votre numéro de sécurité sociale ou sollicitez votre agence CNAS/CNR.',
        },
      },
      {
        issue: {
          ar: 'وجود نقص في سنوات العمل المصرح بها داخل تطبيق CIS',
          fr: 'Périodes de travail manquantes dans le relevé CIS',
        },
        solution: {
          ar: 'اجمع شهادات العمل وكشوف الراتب وتوجه إلى وكالة CNAS أو CNR لتسوية الفترات السابقة، كما يمكنك التبليغ في تبليغ عن التهرب من التصريح.',
          fr: 'Rassemblez vos attestations de travail et bulletins de paie pour régularisation en agence, ou signalez un défaut de déclaration sur Tabligh.',
        },
      },
      {
        issue: {
          ar: 'توقف التعرف على الوجه في تطبيق المتقاعد عند تجديد شهادة الحياة',
          fr: 'Échec de la reconnaissance faciale sur l’application Retraité',
        },
        solution: {
          ar: 'استعمل مكانا مضاء بشكل متوازن دون نظارات شمسية، ونظف عدسة الكاميرا الأمامية مع إبقاء الهاتف ثابتا أمام الوجه.',
          fr: 'Placez-vous dans un endroit bien éclairé sans contre-jour ni lunettes teintées et maintenez le téléphone stable durant la capture.',
        },
      },
    ],
    extraFaqs: [],
  },

  mtpib: {
    intro: {
      ar: [
        'تشكل البوابة الرقمية لوزارة الأشغال العمومية والمنشآت القاعدية المنصة المركزية لتأطير وتصنيف المؤسسات العاملة في مشاريع الطرق، الجسور، السكك الحديدية، والمنشآت الكبرى. وقد استبدلت هذه البوابة الإجراءات الورقية التقليدية في طلب وتجديد شهادة التأهيل والتصنيف المهنيين.',
        'إلى جانب فضاء طلب الشهادة (من الدرجة الأولى إلى الدرجة التاسعة)، توفر البوابة أداة عملية متميزة هي محاكي التصنيف المهني، الذي يسمح لأصحاب المقاولات بإجراء تقييم مسبق لدرجتهم بناء على المعايير الحقيقية للتأطير الهندسي، حظيرة العتاد، والأرقام المالية. كما تجمع البوابة مسارات طلب اعتماد المهندسين ومكاتب الدراسات الخاصة، رخص شبكة الطرق، ووثائق تحديد المسافة.',
        'يقدم هذا الدليل خلاصة مهنية دقيقة للشروط القانونية والتقنية المطلوبة لإعداد ملف تصنيف ناجح، كيفية استغلال المحاكي لتجنب الأخطاء، والحلول العملية لإشكالات تجديد الشهادات.'
      ],
      fr: [
        'Le portail numérique du Ministère des Travaux Publics et des Infrastructures de Base (MTPIB) constitue le guichet central pour la qualification et la classification professionnelles des entreprises intervenant sur les routes, ouvrages d’art, ports, aéroports et voies ferrées en Algérie.',
        'En plus du dépôt dématérialisé des demandes de certificat de qualification et de classification (catégories 1 à 9), le portail intègre un simulateur officiel permettant aux entrepreneurs d’évaluer en amont leur classement en fonction de leur encadrement technique, matériel et chiffre d’affaires. Il centralise également les demandes d’agrément des ingénieurs et bureaux d’études privés, les autorisations d’accès au réseau routier et les attestations de distance.',
        'Ce guide pratique détaille les pièces fiscales, sociales et matérielles indispensables pour constituer un dossier conforme et réussir l’évaluation devant les commissions compétentes.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'ممارسة نشاط مسجل في السجل التجاري ضمن رموز تخصصات الأشغال العمومية أو مكاتب الدراسات التقنية.',
        'الوضعية الجبائية وشبه الجبائية المسواة تجاه الضرائب وصناديق الضمان الاجتماعي CNAS وCASNOS وCACOBATPH.',
        'توفر كشوف الأجور السنوية DAS لإثبات توظيف المهندسين والتقنيين حسب الفئة المستهدفة.',
        'ملكية العتاد التقني والآليات المثبتة بالبطاقات الرمادية وفواتير الشراء أو شهادات التأجير القانونية عند السماح.',
      ],
      fr: [
        'Détenir un registre de commerce comportant les codes d’activité relevant des travaux publics ou des études techniques.',
        'Être à jour des obligations fiscales et parafiscales (impôts, CNAS, CASNOS et CACOBATPH).',
        'Fournir les déclarations annuelles de salaires (DAS) attestant l’effectif d’ingénieurs et techniciens exigé pour la catégorie.',
        'Justifier du parc matériel par cartes grises et factures d’acquisition correspondant à la spécialité demandée.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: 'إجراء محاكاة أولية للتصنيف المهني',
          fr: 'Effectuer une simulation préalable de classification',
        },
        detail: {
          ar: 'ادخل إلى أداة المحاكي simul.php وأدخل أرقام التأطير البشري، العتاد، ورقم الأعمال لمعرفة الفئة المتاحة لمؤسستك.',
          fr: 'Rendez-vous sur simul.php et renseignez vos effectifs techniques, matériel et bilans pour estimer la catégorie atteignable.',
        },
      },
      {
        title: {
          ar: 'تحضير الملف الإداري والتقني الممسوح ضوئيا',
          fr: 'Préparer le dossier administratif et technique numérisé',
        },
        detail: {
          ar: 'جهز السجل التجاري، الشهادات الجبائية، كشف DAS، شهادات المهندسين، والبطاقات الرمادية للعتاد في ملفات مرتبة.',
          fr: 'Numérisez votre registre de commerce, mises à jour CNAS/fiscales, DAS, diplômes des cadres et cartes grises des engins.',
        },
      },
      {
        title: {
          ar: 'الولوج إلى فضاء الطلبات وإيداع الملف',
          fr: 'Se connecter à l’espace demande et soumettre le dossier',
        },
        detail: {
          ar: 'افتح demande-login.php، اختر التخصصات التقنية بدقة، وارفع الوثائق لإحالتها على اللجنة المختصة.',
          fr: 'Connectez-vous sur demande-login.php, sélectionnez les spécialités souhaitées et validez le téléversement pour instruction.',
        },
      },
      {
        title: {
          ar: 'متابعة محضر اللجنة أو طلب الخدمات التكميلية',
          fr: 'Suivre la commission et accéder aux autres téléservices',
        },
        detail: {
          ar: 'تابع حالة طلبك عبر الحساب، واستفد من البوابة الرئيسية لتقديم طلبات رخص شبكة الطرق، وثيقة المسافة، أو اعتماد الدراسات.',
          fr: 'Suivez l’avis de la commission en ligne et utilisez portail.mtpib.dz pour vos demandes de permis routiers, distance ou agréments.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'حصول المؤسسة على درجة تصنيف أقل من نتيجة المحاكي',
          fr: 'Classement réel inférieur à l’estimation obtenue sur le simulateur',
        },
        solution: {
          ar: 'غالبا ما يحدث ذلك بسبب عدم احتساب مهندس غير مصرح به في كشف DAS أو عتاد غير مطابق لرمز النشاط المراد التصنيف فيه؛ راجع ملاحظات اللجنة وأودع استكمالا.',
          fr: 'Cet écart provient généralement d’un cadre non porté sur la dernière DAS ou d’un matériel non rattaché à la spécialité ; complétez les justificatifs en recours.',
        },
      },
      {
        issue: {
          ar: 'توقف قبول الملف بسبب انتهاء صلاحية شهادة التحيين الضريبي أو CNAS',
          fr: 'Rejet temporaire pour mise à jour CNAS ou fiscale expirée',
        },
        solution: {
          ar: 'تأكد من سريان صلاحية شهادات أداء المستحقات في تاريخ اجتماع اللجنة وارفع النسخ المجددة فورا في فضاء الطلب.',
          fr: 'Actualisez vos attestations fiscales et sociales avant la tenue de la commission et remplacez les pièces expirées dans votre espace.',
        },
      },
      {
        issue: {
          ar: 'الالتباس بين رموز التخصصات القديمة والحديثة في الأشغال العمومية',
          fr: 'Difficulté à choisir les codes de spécialités travaux publics',
        },
        solution: {
          ar: 'طابق التخصصات المطلوبة حرفيا مع الأنشطة المقيدة في السجل التجاري وشهادات حسن الإنجاز المقدمة مع الملف.',
          fr: 'Alignez vos choix de rubriques sur les intitulés exacts figurant au registre de commerce et sur vos attestations de bonne exécution.',
        },
      },
    ],
    extraFaqs: [],
  },
};
