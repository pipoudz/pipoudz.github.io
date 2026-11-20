import { SectorItem, RichGuideContent } from '../../types';

export const batch5Sectors: SectorItem[] = [
  // 33. markabatidz
  {
    id: 'markabatidz',
    slug: 'markabatidz',
    category: 'transport',
    name: {
      ar: 'منصة فحص ومراقبة مطابقة المركبات — مركبتي DZ',
      fr: 'Plateforme d’Inspection & Conformité Automobile — Markabati DZ',
    },
    acronym: 'MARKABATI',
    ministry: {
      ar: 'قطاع الطاقة والمناجم والطاقات المتجددة',
      fr: 'Secteur de l’Énergie, des Mines et des Énergies Renouvelables',
    },
    description: {
      ar: 'البوابة الرقمية الرسمية لحجز مواعيد فحص مطابقة المركبات (منصة مركبتي DZ): تسجيل المركبات المستوردة أو المحولة (سيرغاز GPL)، متابعة ملفات المراقبة التقنية لدى مهندسي المناجم، وتنظيم مواعيد المعاينة عبر الولاية.',
      fr: 'Portail officiel de prise de rendez-vous pour le contrôle de conformité des véhicules (Markabati DZ) : inspection par les ingénieurs des mines, véhicules importés, équipements GPL et suivi des dossiers par wilaya.',
    },
    officialUrl: 'https://markabatidz.energy.gov.dz/',
    portalUrl: 'https://www.energy.gov.dz/',
    iconName: 'Car',
    isPopular: false,
    services: [
      {
        id: 'markabatidz-srv-1',
        title: {
          ar: 'منصة حجز مواعيد فحص مطابقة المركبات (مركبتي DZ)',
          fr: 'Prise de Rendez-vous — Contrôle de Conformité Markabati DZ',
        },
        description: {
          ar: 'البوابة الإلكترونية الرسمية لحجز موعد معاينة المركبة لدى مصالح المناجم بالولاية ومتابعة حالة الطلب إلكترونيا.',
          fr: 'Téléservice officiel pour réserver votre créneau d’inspection de conformité auprès des services des mines de wilaya et suivre votre dossier.',
        },
        url: 'https://markabatidz.energy.gov.dz/',
        isOnline: true,
      },
      {
        id: 'markabatidz-srv-2',
        title: {
          ar: 'البوابة الرسمية لوزارة الطاقة والمناجم',
          fr: 'Site Officiel du Ministère de l’Énergie et des Mines',
        },
        description: {
          ar: 'الموقع الوزاري المرجعي للاطلاع على المراسيم التنظيمية الخاصة بمطابقة المركبات، تجهيز الغاز المميع GPL، وعناوين المديريات الولائية.',
          fr: 'Portail ministériel publiant les textes réglementaires relatifs à la conformité automobile, aux installations GPL et aux directions de wilaya.',
        },
        url: 'https://www.energy.gov.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'ملاك المركبات المستوردة (أقل من 3 سنوات أو جديدة)، المركبات المحولة لنظام الغاز GPL، والهياكل الخاضعة لإعادة المطابقة',
        fr: 'Propriétaires de véhicules importés, véhicules équipés au GPL/GNC ou carrosseries soumises à réception technique',
      },
      processingTime: {
        ar: 'تأكيد فوري لموعد الفحص عبر المنصة حسب التوفر بالولاية؛ تسليم محضر المطابقة بعد إتمام المعاينة التقنية بنجاح',
        fr: 'Confirmation immédiate du créneau en ligne selon les disponibilités ; délivrance du PV de conformité après visite technique',
      },
      fees: {
        ar: 'الحجز عبر منصة مركبتي DZ مجاني بالكامل مع استيفاء حقوق الطابع أو رسوم الخبرة المقررة قانونا عند الفحص',
        fr: 'Prise de rendez-vous en ligne gratuite ; frais réglementaires de réception technique applicables selon la catégorie du véhicule',
      },
      channel: {
        ar: 'منصة markabatidz.energy.gov.dz ومراكز المراقبة التابعة لمديريات الطاقة والمناجم بالولايات',
        fr: 'Portail web markabatidz.energy.gov.dz et centres de contrôle des Directions de l’Énergie et des Mines (DEM)',
      },
      keyRequirement: {
        ar: 'رقم الهيكل (VIN)، البطاقة الرمادية أو شهادة الجمركة (846)، وبطاقة التعريف الوطنية البيومترية عند الحجز والحضور',
        fr: 'Numéro de châssis (VIN), carte grise ou titre douanier (846) et CNIBE obligatoires lors de la réservation et du contrôle',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق ملكية وجمركة المركبة',
          fr: 'Justificatifs de propriété et dédouanement',
        },
        value: {
          ar: 'البطاقة الرمادية أو شهادة الجمركة 846 للمركبات المستوردة وبطاقة المراقبة أو شهادة المنشأ',
          fr: 'Carte grise ou certificat douanier 846 (véhicules importés), notice descriptive et certificat d’origine',
        },
      },
      {
        label: {
          ar: 'المعلومات التقنية ورقم الهيكل VIN',
          fr: 'Identification technique et numéro de châssis (VIN)',
        },
        value: {
          ar: 'إدخال رقم الهيكل المكون من 17 خانة بدقة وطراز المركبة وتاريخ أول وضع للسير في الاستمارة الإلكترونية',
          fr: 'Saisie exacte du numéro VIN à 17 caractères, de la marque, du type et de la date de première mise en circulation',
        },
      },
      {
        label: {
          ar: 'ملف التركيب (لحالات الغاز GPL أو التحويل)',
          fr: 'Dossier d’installation (GPL ou modification)',
        },
        value: {
          ar: 'شهادة التركيب الصادرة عن مرخص معتمد (GPL) أو رخصة التعديل التقني عند تغيير خصائص المركبة',
          fr: 'Attestation de montage délivrée par un installateur agréé (GPL/Sirghaz) ou justificatif de transformation technique',
        },
      },
      {
        label: {
          ar: 'إثبات الهوية والوصل الإلكتروني للموعد',
          fr: 'Pièce d’identité et convocation de rendez-vous',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية لمالك المركبة أو الوكيل القانوني مرفقة باستمارة الموعد المطبوعة',
          fr: 'CNIBE du propriétaire (ou mandat légalisé) accompagnée du bon de rendez-vous téléchargé depuis la plateforme',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'من هم المعنيون بحجز موعد فحص المطابقة عبر منصة مركبتي DZ؟',
          fr: 'Qui doit obligatoirement prendre rendez-vous sur la plateforme Markabati DZ ?',
        },
        answer: {
          ar: 'تستعمل المنصة من طرف ملاك المركبات المستوردة التي تحتاج محضر مطابقة للترقيم الولائي، والمركبات المجهزة بنظام الغاز المميع GPL أو التي خضعت لتعديل في الهيكل أو المحرك وتتطلب معاينة مهندس المناجم.',
          fr: 'Le portail s’adresse aux propriétaires de véhicules importés nécessitant un PV de réception pour l’immatriculation, aux véhicules équipés au GPL/Sirghaz ainsi qu’aux véhicules ayant subi une modification technique notable.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين فحص المطابقة في مركبتي DZ والمراقبة التقنية الدورية للسيارات؟',
          fr: 'Quelle est la différence entre Markabati DZ et le contrôle technique périodique ordinaire ?',
        },
        answer: {
          ar: 'المراقبة التقنية الدورية (ENACTA) تجرى كل سنتين للسلامة المرورية في مراكز المراقبة المعتمدة، بينما يختص فحص المطابقة على مركبتي DZ بمهندسي المناجم لإصدار محضر القبول التقني الفردي للمركبات المستوردة أو المحولة.',
          fr: 'Le contrôle technique périodique (ENACTA) porte sur la sécurité routière courante, tandis que l’inspection Markabati DZ relève des ingénieurs des mines pour la réception à titre isolé et la conformité réglementaire.',
        },
      },
      {
        question: {
          ar: 'أين أجد رقم الهيكل VIN المطلوب عند التسجيل في المنصة؟',
          fr: 'Où trouver le numéro de châssis (VIN) demandé lors de la réservation ?',
        },
        answer: {
          ar: 'يظهر رقم الهيكل المكون من 17 حرفا ورقما في البطاقة الرمادية أو شهادة الجمركة 846، كما يكون محفورا على هيكل المركبة وأسفل الزجاج الأمامي.',
          fr: 'Le code VIN à 17 caractères figure sur votre carte grise ou attestation douanière 846, ainsi que sur la plaque constructeur et le pare-brise du véhicule.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تغيير موعد الفحص أو إلغاؤه بعد التأكيد في مركبتي DZ؟',
          fr: 'Peut-on modifier ou reporter un rendez-vous confirmé sur Markabati DZ ?',
        },
        answer: {
          ar: 'نعم، ادخل إلى حسابك على المنصة باستعمال بيانات التسجيل لتعديل أو إلغاء الموعد قبل تاريخه المحدد، مما يتيح لك حجز تاريخ بديل دون تعليق رقم الهيكل.',
          fr: 'Oui, connectez-vous à votre espace personnel sur Markabati DZ pour annuler ou reprogrammer votre créneau avant l’échéance afin de libérer le numéro de châssis.',
        },
      },
    ],
  },

  // 34. mdn
  {
    id: 'mdn',
    slug: 'mdn',
    category: 'ministries',
    name: {
      ar: 'وزارة الدفاع الوطني — التجنيد وأشبال الأمة والمنصات الرقمية (MDN)',
      fr: 'Ministère de la Défense Nationale — Recrutement & Portails MDN',
    },
    acronym: 'MDN',
    ministry: {
      ar: 'وزارة الدفاع الوطني',
      fr: 'Ministère de la Défense Nationale',
    },
    description: {
      ar: 'البوابة الرسمية لوزارة الدفاع الوطني الجزائرية: التسجيل الأولي عبر الإنترنت في صفوف الجيش الوطني الشعبي (الضباط، ضباط الصف، رجال الصف، ومدارس أشبال الأمة)، دليل التجنيد الرسمي، الصفقات العمومية، المجلات العسكرية، وتطبيق MDNews.',
      fr: 'Portail officiel du Ministère de la Défense Nationale (MDN) : préinscription en ligne aux écoles de l’ANP (Officiers, Sous-officiers, Hommes du rang et Cadets de la Nation), guide du recrutement, appels d’offres, revues et application MDNews.',
    },
    officialUrl: 'https://www.mdn.dz/',
    portalUrl: 'https://preinscription.mdn.dz/bac/',
    iconName: 'Shield',
    isPopular: false,
    services: [
      {
        id: 'mdn-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة الدفاع الوطني',
          fr: 'Site Officiel du Ministère de la Défense Nationale',
        },
        description: {
          ar: 'البوابة المؤسساتية الرسمية لمتابعة البيانات الصحفية، النشاطات، والنصوص التنظيمية لوزارة الدفاع الوطني.',
          fr: 'Portail officiel publiant les communiqués institutionnels, bilans opérationnels et textes réglementaires du MDN.',
        },
        url: 'https://www.mdn.dz/',
        isOnline: true,
      },
      {
        id: 'mdn-srv-2',
        title: {
          ar: 'دليل التجنيد الرسمي لوزارة الدفاع الوطني (PDF)',
          fr: 'Guide Officiel du Recrutement de l’ANP (PDF)',
        },
        description: {
          ar: 'تحميل الدليل الكامل لشروط السن والمؤهلات العلمية والبدنية والتخصصات المفتوحة لكل فئات التجنيد.',
          fr: 'Téléchargement du guide annuel détaillant les conditions d’âge, niveaux académiques, spécialités et filières de recrutement.',
        },
        url: 'https://www.mdn.dz/site_principal/sommaire/recrutement/images/guide2026_Ar.pdf',
        isOnline: true,
      },
      {
        id: 'mdn-srv-3',
        title: {
          ar: 'التسجيل الأولي في مدارس أشبال الأمة',
          fr: 'Préinscription — Écoles des Cadets de la Nation',
        },
        description: {
          ar: 'منصة إيداع ملفات الترشح لمدارس أشبال الأمة (الطورين المتوسط والثانوي) ومتابعة الانتقاء الأولي.',
          fr: 'Portail dédié aux inscriptions aux Écoles des Cadets de la Nation (cycles moyen et secondaire) et suivi de présélection.',
        },
        url: 'https://preinscription.mdn.dz/cadets/',
        isOnline: true,
      },
      {
        id: 'mdn-srv-4',
        title: {
          ar: 'تجنيد الطلبة الضباط العاملين على أساس الشهادة الجامعية',
          fr: 'Recrutement Officiers d’Active — Sur Titre Universitaire (FS)',
        },
        description: {
          ar: 'التسجيل الإلكتروني لحاملي شهادات الليسانس والماستر والدكتوراه الراغبين في الالتحاق برتبة ضابط عامل.',
          fr: 'Téléservice d’inscription destiné aux diplômés universitaires (Licence, Master, Doctorat) candidats au corps des officiers.',
        },
        url: 'https://preinscription.mdn.dz/fs/',
        isOnline: true,
      },
      {
        id: 'mdn-srv-5',
        title: {
          ar: 'التجنيد المباشر للطلبة الضباط العاملين (شهادة البكالوريا)',
          fr: 'Recrutement Direct Officiers d’Active — Bacheliers (BAC)',
        },
        description: {
          ar: 'بوابة التسجيل لحائزي شهادة البكالوريا للتكوين في الأكاديمية العسكرية لشرشال والمدارس العليا العسكرية.',
          fr: 'Portail d’inscription pour les nouveaux bacheliers souhaitant intégrer les écoles supérieures et académies militaires.',
        },
        url: 'https://preinscription.mdn.dz/bac/',
        isOnline: true,
      },
      {
        id: 'mdn-srv-6',
        title: {
          ar: 'التجنيد في فئة ضباط الصف المتعاقدين',
          fr: 'Recrutement — Sous-officiers Contractuels (SOFF)',
        },
        description: {
          ar: 'إيداع استمارة التسجيل الأولي لفئة ضباط الصف المتعاقدين بمختلف القوات والأسلحة والتخصصات.',
          fr: 'Préinscription en ligne pour la filière des sous-officiers contractuels au sein des différentes forces armées.',
        },
        url: 'https://preinscription.mdn.dz/soff/',
        isOnline: true,
      },
      {
        id: 'mdn-srv-7',
        title: {
          ar: 'التجنيد في فئة رجال الصف المتعاقدين',
          fr: 'Recrutement — Hommes du Rang Contractuels (HDR)',
        },
        description: {
          ar: 'منصة التسجيل الأولي عبر الإنترنت للالتحاق بصفوف رجال الصف المتعاقدين في مختلف التخصصات الميدانية.',
          fr: 'Guichet de préinscription numérique destiné aux candidats au recrutement dans la catégorie des hommes du rang.',
        },
        url: 'https://preinscription.mdn.dz/hdr/',
        isOnline: true,
      },
      {
        id: 'mdn-srv-8',
        title: {
          ar: 'تصفح مجلة الجيش الرسمية (El Djeich)',
          fr: 'Revue Officielle El Djeïch (MDN)',
        },
        description: {
          ar: 'الأرشيف الرقمي الكامل والأعداد الشهرية لمجلة الجيش بصيغة PDF.',
          fr: 'Consultation et téléchargement en ligne des éditions mensuelles et archives de la revue El Djeïch.',
        },
        url: 'https://www.mdn.dz/site_principal/sommaire/revues/revue_el_djeich_ar.php',
        isOnline: true,
      },
      {
        id: 'mdn-srv-9',
        title: {
          ar: 'المجلات العلمية المحكمة لوزارة الدفاع الوطني',
          fr: 'Revues Scientifiques et Académiques du MDN',
        },
        description: {
          ar: 'بوابة البحوث والدراسات الأكاديمية المحكمة الصادرة عن المؤسسات العلمية والبحثية العسكرية.',
          fr: 'Portail regroupant les revues scientifiques à comité de lecture éditées par les établissements du MDN.',
        },
        url: 'https://www.mdn.dz/site_principal/sommaire/revues/revues_science_ar.php',
        isOnline: true,
      },
      {
        id: 'mdn-srv-10',
        title: {
          ar: 'منشورات ومجلات المتحف المركزي للجيش',
          fr: 'Publications du Musée Central de l’Armée',
        },
        description: {
          ar: 'الإصدارات التاريخية والوثائقية الصادرة عن المتحف المركزي للجيش الوطني الشعبي.',
          fr: 'Accès numérique aux publications historiques et documentaires du Musée Central de l’Armée.',
        },
        url: 'https://www.mdn.dz/site_principal/sommaire/revues/revue_mca_ar.php',
        isOnline: true,
      },
      {
        id: 'mdn-srv-11',
        title: {
          ar: 'بوابة طلبات العروض والصفقات العمومية',
          fr: 'Appels d’Offres & Marchés Publics du MDN',
        },
        description: {
          ar: 'الاطلاع على إعلانات طلبات العروض الوطنية والدولية والمناقصات المفتوحة للمتعاملين الاقتصاديين.',
          fr: 'Rubrique officielle publiant les avis d’appels d’offres nationaux et internationaux destinés aux entreprises.',
        },
        url: 'https://www.mdn.dz/site_principal/sommaire/appels/appels_ar.php',
        isOnline: true,
      },
      {
        id: 'mdn-srv-12',
        title: {
          ar: 'تطبيق الأخبار المحمول الرسمي (MDNews APK)',
          fr: 'Application Mobile Officielle MDNews (APK)',
        },
        description: {
          ar: 'تنزيل التطبيقة الرسمية لوزارة الدفاع الوطني لمتابعة المستجدات العسكرية والبيانات على هاتف الأندرويد.',
          fr: 'Téléchargement direct de l’application mobile officielle MDNews pour suivre les actualités et communiqués sur Android.',
        },
        url: 'https://www.mdn.dz/site_principal/sommaire/mdnews/app/MDNews.apk',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الشباب الجزائري المرشح للتجنيد (أشبال الأمة، البكالوريا، الجامعيون، ضباط ورجال الصف) والمتعاملون في الصفقات',
        fr: 'Jeunes citoyens candidats à l’engagement (Cadets, Bacheliers, Universitaires, SOFF/HDR) et soumissionnaires publics',
      },
      processingTime: {
        ar: 'إيداع فوري لوصل التسجيل الأولي عبر الإنترنت؛ إعلان نتائج الانتقاء الأولي وسحب الاستدعاءات حسب الرزنامة السنوية',
        fr: 'Édition immédiate du récépissé de préinscription ; publication des listes de présélection selon le calendrier annuel',
      },
      fees: {
        ar: 'التسجيل الأولي في كافة مسابقات التجنيد وتحميل دليل التجنيد والمجلات الرقمية مجاني بالكامل',
        fr: 'L’ensemble des préinscriptions de recrutement, le guide officiel et les revues numériques sont gratuits',
      },
      channel: {
        ar: 'منصات preinscription.mdn.dz، موقع mdn.dz، ومراكز الاختيار والتوجيه الجهوية للناحيات العسكرية',
        fr: 'Portails preinscription.mdn.dz, mdn.dz et Centres de Sélection et d’Orientation des Régions Militaires',
      },
      keyRequirement: {
        ar: 'استيفاء شرط الجنسية الجزائرية، السن القانوني، العزوبة، اللياقة البدنية، والشهادة التعليمية المطابقة لكل فئة',
        fr: 'Nationalité algérienne, critère d’âge réglementaire, célibat, aptitude physique et diplôme ou niveau scolaire requis',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الالتزام بالشروط الأساسية للتجنيد',
          fr: 'Conditions générales d’engagement',
        },
        value: {
          ar: 'الجنسية الجزائرية، التمتع بالحقوق المدنية، العزوبة، اللياقة البدنية والصحية، والنجاح في اختبارات الانتقاء',
          fr: 'Nationalité algérienne, célibat, aptitude médicale et physique et réussite aux concours d’admission',
        },
      },
      {
        label: {
          ar: 'الشهادات والمستوى الدراسي لكل مسار',
          fr: 'Niveau académique selon la filière',
        },
        value: {
          ar: 'كشف النقاط والنجاح في البكالوريا للضباط، الليسانس أو الماستر للتجنيد على أساس الشهادة، أو السنة النهائية/الأولى ثانوي لضباط الصف',
          fr: 'Baccalauréat (Officiers), Licence/Master (Sur titre FS), ou niveaux moyen/secondaire requis pour Cadets, SOFF et HDR',
        },
      },
      {
        label: {
          ar: 'حدود السن القانونية لكل فئة',
          fr: 'Tranches d’âge réglementaires',
        },
        value: {
          ar: 'تختلف حسب الدليل السنوي (عادة من 18 إلى 21 سنة لحاملي البكالوريا، وحتى 24-26 سنة للشهادات الجامعية والتخصصات)',
          fr: 'Définies dans le guide annuel MDN (généralement 18–21 ans pour BAC, jusqu’à 24–26 ans pour diplômés universitaires)',
        },
      },
      {
        label: {
          ar: 'وصل التسجيل الأولي والملف الأصلي عند الاستدعاء',
          fr: 'Récépissé en ligne et dossier d’aptitude',
        },
        value: {
          ar: 'طباعة استمارة التسجيل من preinscription.mdn.dz وإحضار الوثائق الأصلية يوم الموعد الطبي والرياضي',
          fr: 'Imprimer l’attestation de préinscription et présenter le dossier physique complet lors de la convocation médicale',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'متى تفتح منصة preinscription.mdn.dz للتسجيل في التجنيد وأشبال الأمة؟',
          fr: 'À quelle période ouvrent les préinscriptions sur preinscription.mdn.dz ?',
        },
        answer: {
          ar: 'تفتح روابط التسجيل الأولي عادة مباشرة بعد إعلان نتائج شهادة البكالوريا وشهادة التعليم المتوسط في شهر جويلية من كل سنة، وتستمر لعدة أسابيع وفق الآجال المحددة في دليل التجنيد.',
          fr: 'Les plateformes ouvrent généralement dès la proclamation des résultats du BEM et du Baccalauréat au mois de juillet, selon le calendrier officiel publié par le MDN.',
        },
      },
      {
        question: {
          ar: 'هل يمكن تعديل المعلومات أو سحب الاستمارة بعد التسجيل في منصة التجنيد؟',
          fr: 'Comment récupérer ou réimprimer mon récépissé après la préinscription ?',
        },
        answer: {
          ar: 'نعم، تتيح كل بوابة فرعية (bac، fs، soff، hdr، cadets) خيار الدخول برقم التسجيل ورقم التعريف الوطني لإعادة تحميل الاستمارة أو الاطلاع على نتائج الانتقاء الأولي وسحب الاستدعاء.',
          fr: 'Chaque sous-portail permet de consulter l’état de votre candidature, d’imprimer votre fiche d’inscription et de télécharger la convocation en cas de présélection.',
        },
      },
      {
        question: {
          ar: 'كيف يتم معرفة نتائج الانتقاء الأولي بعد التسجيل الإلكتروني؟',
          fr: 'Comment savoir si ma candidature a été retenue en présélection ?',
        },
        answer: {
          ar: 'يتم الإعلان عن القوائم عبر نفس رابط التسجيل الأولي لكل فئة، حيث يطبع المترشح المقبول استدعاء الفحص الطبي والاختبارات النفسية والبدنية متضمنا التاريخ والمركز الجهوي.',
          fr: 'Les candidats présélectionnés consultent leur statut sur le même portail de préinscription et éditent directement leur convocation au centre de sélection régional.',
        },
      },
      {
        question: {
          ar: 'أين أجد شروط القبول بالتفصيل لكل قوة (القوات البرية، البحرية، الجوية، والدرك الوطني)؟',
          fr: 'Où consulter les conditions spécifiques par arme (Terre, Air, Marine, Gendarmerie) ?',
        },
        answer: {
          ar: 'يتضمن دليل التجنيد الرسمي بصيغة PDF المتاح على موقع mdn.dz جدولا مفصلا لكل سلاح، الفروع، المعدلات الدنيا المطلوبة، ومقرات مراكز التكوين عبر كامل النواحي العسكرية.',
          fr: 'Le Guide du Recrutement PDF officiel disponible sur mdn.dz répertorie pour chaque corps les moyennes exigées, limites d’âge, spécialités et écoles de formation.',
        },
      },
    ],
  },

  // 35. me.gov
  {
    id: 'me.gov',
    slug: 'me.gov',
    category: 'ministries',
    name: {
      ar: 'وزارة البيئة وجودة الحياة — المنصات البيئية وبورصة النفايات (AND)',
      fr: 'Ministère de l’Environnement et de la Qualité de la Vie (ME & AND)',
    },
    acronym: 'ME',
    ministry: {
      ar: 'وزارة البيئة وجودة الحياة',
      fr: 'Ministère de l’Environnement et de la Qualité de la Vie',
    },
    description: {
      ar: 'الدليل الرقمي لخدمات وزارة البيئة وجودة الحياة والوكالة الوطنية للنفايات (AND): بورصة النفايات الصناعية للتثمين وإعادة التدوير، بوابة المستثمر، تطبيق نظيف (Ndif) للتبليغ عن النقاط السوداء، وقنوات التواصل البيئي.',
      fr: 'Portail des services numériques du Ministère de l’Environnement et de l’Agence Nationale des Déchets (AND) : Bourse des Déchets Industriels, accompagnement investisseurs, application citoyenne Ndif et contact environnemental.',
    },
    officialUrl: 'https://www.me.gov.dz/',
    portalUrl: 'https://bourse.and.dz/inscriptionar.php',
    iconName: 'Compass',
    isPopular: false,
    services: [
      {
        id: 'me.gov-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة البيئة وجودة الحياة',
          fr: 'Site Officiel du Ministère de l’Environnement',
        },
        description: {
          ar: 'البوابة الوزارية الرسمية للتشريع البيئي، دراسات الأثر البيئي، البرامج الخضراء، وإعلانات التراخيص المصنفة.',
          fr: 'Portail ministériel regroupant réglementation environnementale, études d’impact, établissements classés et actualités.',
        },
        url: 'https://www.me.gov.dz/',
        isOnline: true,
      },
      {
        id: 'me.gov-srv-2',
        title: {
          ar: 'التسجيل في بورصة النفايات الصناعية (AND)',
          fr: 'Inscription — Bourse des Déchets Industriels (AND)',
        },
        description: {
          ar: 'إنشاء حساب مجاني للمؤسسات المنتجة للنفايات الصناعية ومتعاملي الرسكلة والتثمين لعرض وطلب المواد القابلة للتدوير.',
          fr: 'Création de compte pour les entreprises industrielles et recycleurs souhaitant céder ou acquérir des déchets valorisables.',
        },
        url: 'https://bourse.and.dz/inscriptionar.php',
        isOnline: true,
      },
      {
        id: 'me.gov-srv-3',
        title: {
          ar: 'الدخول إلى فضاء الأعضاء في بورصة النفايات الصناعية',
          fr: 'Connexion Membre — Bourse des Déchets Industriels',
        },
        description: {
          ar: 'إدارة إعلانات النفايات القابلة للتثمين (بلاستيك، معادن، ورق، زيوت) والتواصل مع المتعاملين المعتمدين.',
          fr: 'Accès à votre tableau de bord pour gérer les annonces de matières recyclables et les mises en relation industrielles.',
        },
        url: 'https://bourse.and.dz/seconnecterar.php',
        isOnline: true,
      },
      {
        id: 'me.gov-srv-4',
        title: {
          ar: 'البوابة الوطنية للاستثمار الأخضر والمشاريع (Invest DZ)',
          fr: 'Portail National de l’Investisseur (Invest DZ)',
        },
        description: {
          ar: 'البوابة الموحدة لتسجيل مشاريع الاستثمار بما فيها مشاريع الرسكلة وتثمين النفايات والطاقات النظيفة.',
          fr: 'Guichet national d’enregistrement des projets d’investissement, y compris dans les filières de recyclage et d’économie verte.',
        },
        url: 'https://invest.gov.dz/',
        isOnline: true,
      },
      {
        id: 'me.gov-srv-5',
        title: {
          ar: 'الموقع الرسمي للوكالة الوطنية للنفايات (AND)',
          fr: 'Site Officiel de l’Agence Nationale des Déchets (AND)',
        },
        description: {
          ar: 'المرجع التقني والإحصائي حول تسيير النفايات المنزلية والصناعية والطبية وقوائم شركات الجمع والفرز المعتمدة.',
          fr: 'Portail technique de l’AND publiant données nationales, guides de gestion des déchets et annuaire des opérateurs agréés.',
        },
        url: 'https://and.dz/',
        isOnline: true,
      },
      {
        id: 'me.gov-srv-6',
        title: {
          ar: 'تطبيق نظيف (Ndif) للتبليغ عن النقاط السوداء للنظافة',
          fr: 'Application Citoyenne Ndif (Signalement Propreté)',
        },
        description: {
          ar: 'تطبيق الهاتف المحمول المعتمد لإرسال بلاغات مصورة ومحددة جغرافيا حول تراكم النفايات أو الرمي العشوائي.',
          fr: 'Application Android officielle permettant de signaler par photo géolocalisée les dépôts sauvages et points noirs.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.and.ndif',
        isOnline: true,
      },
      {
        id: 'me.gov-srv-7',
        title: {
          ar: 'التواصل والدعم في بورصة النفايات الصناعية',
          fr: 'Contact & Assistance — Bourse des Déchets (AND)',
        },
        description: {
          ar: 'استمارة الاتصال المباشر بفريق عمل الوكالة الوطنية للنفايات لطرح الاستفسارات التقنية حول التثمين والتسجيل.',
          fr: 'Formulaire de contact technique de l’AND pour accompagner les industriels et porteurs de projets de valorisation.',
        },
        url: 'https://bourse.and.dz/contactar.php',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المؤسسات الصناعية، مستثمرو إعادة التدوير والرسكلة، المكاتب الاستشارية البيئية، والمواطنون عبر تطبيق نظيف',
        fr: 'Entreprises industrielles, opérateurs de recyclage et valorisation, bureaux d’études et citoyens via Ndif',
      },
      processingTime: {
        ar: 'تفعيل سريع لحساب بورصة النفايات الصناعية بعد مراجعة السجل التجاري؛ معالجة فورية لبلاغات تطبيق نظيف وتوجيهها للبلديات',
        fr: 'Validation rapide des comptes Bourse des Déchets ; transmission géolocalisée instantanée des signalements Ndif',
      },
      fees: {
        ar: 'استخدام بورصة النفايات الصناعية، تصفح تقارير الوكالة الوطنية للنفايات، وتطبيق نظيف مجاني تماما للمواطن والمتعامل',
        fr: 'L’accès à la Bourse des Déchets Industriels, aux guides AND et à l’application Ndif est entièrement gratuit',
      },
      channel: {
        ar: 'مواقع me.gov.dz وand.dz وبورصة النفايات bourse.and.dz وتطبيق نظيف Ndif ومديريات البيئة الولائية',
        fr: 'Portails me.gov.dz, and.dz, bourse.and.dz, application Ndif et Directions de l’Environnement de wilaya',
      },
      keyRequirement: {
        ar: 'السجل التجاري ورمز النشاط للانضمام لبورصة النفايات الصناعية، أو تحديد الموقع الجغرافي GPS لبلاغات تطبيق نظيف',
        fr: 'Registre du commerce pour les opérateurs de la bourse AND, ou géolocalisation GPS pour les alertes Ndif',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التسجيل في بورصة النفايات الصناعية',
          fr: 'Adhésion Bourse des Déchets (AND)',
        },
        value: {
          ar: 'السجل التجاري، رقم التعريف الجبائي NIF، وتحديد طبيعة النفايات المنتجة أو المطلوبة لإعادة التدوير',
          fr: 'Registre de commerce, NIF et qualification précise du gisement ou de la filière de valorisation traitée',
        },
      },
      {
        label: {
          ar: 'التراخيص والاعتمادات البيئية',
          fr: 'Agréments environnementaux',
        },
        value: {
          ar: 'اعتماد نقل وجمع النفايات الخاصة أو رخصة استغلال المنشأة المصنفة للمتعاملين في معالجة النفايات الخطرة',
          fr: 'Agrément de collecte/transport de déchets spéciaux et arrêté d’exploitation d’installation classée selon l’activité',
        },
      },
      {
        label: {
          ar: 'شروط التبليغ في تطبيق نظيف (Ndif)',
          fr: 'Conditions de signalement sur Ndif',
        },
        value: {
          ar: 'تفعيل نظام تحديد المواقع GPS والتقاط صورة واضحة للنقطة السوداء أو النفايات الملقاة عشوائيا',
          fr: 'Activer le GPS du smartphone et joindre une photographie claire permettant l’identification du site',
        },
      },
      {
        label: {
          ar: 'مشاريع الاقتصاد الأخضر والرسكلة',
          fr: 'Projets d’investissement vert',
        },
        value: {
          ar: 'دراسة الجدوى التقنية والاقتصادية والتسجيل الأولي عبر البوابة الوطنية للمستثمر Invest DZ أو لدى الوكالة الوطنية AND',
          fr: 'Étude technico-économique préalable et dépôt réglementaire via Invest DZ ou auprès de la direction de wilaya',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي بورصة النفايات الصناعية وكيف تستفيد منها المؤسسات؟',
          fr: 'À quoi sert la Bourse des Déchets Industriels gérée par l’AND ?',
        },
        answer: {
          ar: 'هي سوق إلكترونية مجانية تشرف عليها الوكالة الوطنية للنفايات لربط المصانع التي تفرز بقايا قابلة للتثمين (مثل الخردة، البلاستيك، الورق، أو النفايات العضوية) بمؤسسات الرسكلة التي تستعملها كمواد أولية.',
          fr: 'C’est une plateforme officielle d’intermédiation mettant en relation les industriels producteurs de déchets valorisables avec les recycleurs qui les transforment en matières premières secondaires.',
        },
      },
      {
        question: {
          ar: 'هل يمكن للشباب حاملي المشاريع الدخول في مجال جمع وتثمين النفايات دون مصنع ضخم؟',
          fr: 'Les jeunes entrepreneurs peuvent-ils accéder aux activités de tri et recyclage ?',
        },
        answer: {
          ar: 'نعم، تفتح مديريات البيئة والوكالة الوطنية للنفايات أبواب المرافقة لحاملي المشاريع والمؤسسات المصغرة (عبر NESDA أو ANGEM أو ANAE) للاستثمار في فرز وجمع البلاستيك والكرتون والرسكلة الأولية.',
          fr: 'Oui, l’AND et les directions de wilaya accompagnent les micro-entreprises et porteurs de projets dans la collecte sélective, le tri et la pré-valorisation des déchets ménagers et assimilés.',
        },
      },
      {
        question: {
          ar: 'كيف أستخدم تطبيق نظيف للتبليغ عن تراكم القمامة في الحي؟',
          fr: 'Comment signaler une décharge sauvage avec l’application Ndif ?',
        },
        answer: {
          ar: 'حمل تطبيق نظيف من متجر Google Play، شغل GPS في هاتفك، التقط صورة لمكان النفايات وحدد الوصف المختصر ليتم إشعار مصلحة النظافة في البلدية ومؤسسة التنظيف الولائية.',
          fr: 'Téléchargez Ndif sur Google Play, activez la géolocalisation, prenez une photo du dépôt sauvage et validez l’envoi : l’alerte est routée vers la commune ou l’établissement de nettoiement compétent.',
        },
      },
      {
        question: {
          ar: 'أين أتقدم للحصول على رخصة استغلال منشأة مصنفة بيئيا؟',
          fr: 'Où déposer un dossier d’étude d’impact ou d’établissement classé ?',
        },
        answer: {
          ar: 'تودع ملفات دراسة التأثير على البيئة وتقارير الخطر لدى الشباك الموحد لمديرية البيئة بالولاية أو المصلحة التقنية المختصة حسب تصنيف المنشأة في المرسوم التنفيذي ساري المفعول.',
          fr: 'Les demandes d’autorisation d’exploitation d’établissement classé sont déposées auprès de la Direction de l’Environnement de votre wilaya selon la nomenclature réglementaire.',
        },
      },
    ],
  },

  // 36. medjedel
  {
    id: 'medjedel',
    slug: 'medjedel',
    category: 'education_higher',
    name: {
      ar: 'بنك الفروض والاختبارات والمواضيع المحلولة — مجدل (Medjedel)',
      fr: 'Medjedel — Banque Nationale des Devoirs, Examens & Annales Corrigées',
    },
    acronym: 'MEDJEDEL',
    ministry: {
      ar: 'موارد تعليمية وتربوية رقمية — الجزائر',
      fr: 'Ressources Éducatives Numériques — Algérie',
    },
    description: {
      ar: 'الدليل التعليمي الكامل لموقع مجدل Medjedel في الجزائر: فروض واختبارات الفصول الثلاثة مع التصحيح النموذجي لجميع سنوات التعليم الابتدائي (1AP–5AP)، التعليم المتوسط (1AM–4AM)، التعليم الثانوي (1AS–3AS)، وأرشيف شهادتي BEM والباكالوريا.',
      fr: 'Portail éducatif algérien Medjedel : banque complète de devoirs, compositions trimestrielles et sujets corrigés pour le Primaire (1AP–5AP), le Moyen (1AM–4AM / BEM) et le Secondaire (1AS–3AS / BAC).',
    },
    officialUrl: 'https://www.medjedel.com/',
    portalUrl: 'https://www.medjedel.com/%E2%80%8B%D9%85%D9%88%D8%A7%D8%B6%D9%8A%D8%B9-%D8%AA%D8%B5%D8%AD%D9%8A%D8%AD%D8%A7%D8%AA-%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D8%A7/',
    iconName: 'BookOpen',
    isPopular: false,
    services: [
      {
        id: 'medjedel-srv-1',
        title: {
          ar: 'نماذج اختبارية للسنة الأولى ابتدائي (1AP)',
          fr: '1re Année Primaire (1AP) — Devoirs & Sujets',
        },
        description: {
          ar: 'فروض وتقويمات فصلية ومطويات تعليمية مصممة لبرنامج السنة الأولى ابتدائي مع الحلول.',
          fr: 'Recueil de tests, évaluations trimestrielles et fiches d’exercices conformes au programme de 1re année primaire.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89-%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-2',
        title: {
          ar: 'نماذج اختبارية للسنة الثانية ابتدائي (2AP)',
          fr: '2e Année Primaire (2AP) — Devoirs & Sujets',
        },
        description: {
          ar: 'اختبارات الفصول الثلاثة في اللغة العربية والرياضيات والتربية الإسلامية والمدنية للسنة الثانية ابتدائي.',
          fr: 'Compositions des trois trimestres et corrigés types pour les élèves de 2e année primaire.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-3',
        title: {
          ar: 'نماذج اختبارية للسنة الثالثة ابتدائي (3AP)',
          fr: '3e Année Primaire (3AP) — Devoirs & Sujets',
        },
        description: {
          ar: 'نماذج اختبارات شاملة تشمل بداية تعلم اللغة الفرنسية والرياضيات والعلوم للسنة الثالثة ابتدائي.',
          fr: 'Sujets d’évaluation et exercices corrigés incluant français, mathématiques et éducation scientifique en 3AP.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9-%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-4',
        title: {
          ar: 'نماذج اختبارية للسنة الرابعة ابتدائي (4AP)',
          fr: '4e Année Primaire (4AP) — Devoirs & Sujets',
        },
        description: {
          ar: 'مجموعة واسعة من المواضيع والتمارين التحضيرية المحلولة لجميع مواد السنة الرابعة ابتدائي.',
          fr: 'Banque d’épreuves et fiches de révision pour toutes les matières de la 4e année primaire.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9-%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-5',
        title: {
          ar: 'نماذج اختبارية للسنة الخامسة ابتدائي (5AP)',
          fr: '5e Année Primaire (5AP) — Devoirs & Sujets',
        },
        description: {
          ar: 'اختبارات فصلية وتقويمات المكتسبات التحضيرية للانتقال إلى الطور المتوسط مع التصحيح النموذجي.',
          fr: 'Sujets d’entraînement et épreuves de fin de cycle primaire avec barèmes de correction.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%A9-%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-6',
        title: {
          ar: 'فروض واختبارات السنة الأولى متوسط (1AM)',
          fr: '1re Année Moyenne (1AM) — Devoirs & Compositions',
        },
        description: {
          ar: 'بنك فروض واختبارات جميع المواد للسنة الأولى متوسط بصيغة PDF مع الحلول التفصيلية.',
          fr: 'Devoirs surveillés et compositions corrigées en PDF pour l’ensemble des matières de 1AM.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89-%D9%85%D8%AA%D9%88%D8%B3%D8%B7-%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-7',
        title: {
          ar: 'فروض واختبارات السنة الثانية متوسط (2AM)',
          fr: '2e Année Moyenne (2AM) — Devoirs & Compositions',
        },
        description: {
          ar: 'مواضيع مقترحة ومحلولة في الرياضيات، الفيزياء، اللغات، والعلوم للسنة الثانية متوسط.',
          fr: 'Sujets types de devoirs et examens corrigés pour consolider les acquis de la 2e année moyenne.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-%D9%85%D8%AA%D9%88%D8%B3%D8%B7-%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-8',
        title: {
          ar: 'فروض واختبارات السنة الثالثة متوسط (3AM)',
          fr: '3e Année Moyenne (3AM) — Devoirs & Compositions',
        },
        description: {
          ar: 'نماذج فروض واختبارات مصنفة حسب الفصول والمواد لتلاميذ السنة الثالثة متوسط.',
          fr: 'Ressources d’entraînement classées par trimestre et discipline pour la 3e année moyenne.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9-%D9%85%D8%AA%D9%88%D8%B3%D8%B7-%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-9',
        title: {
          ar: 'فروض واختبارات السنة الرابعة متوسط (4AM)',
          fr: '4e Année Moyenne (4AM) — Devoirs & Compositions',
        },
        description: {
          ar: 'اختبارات تجريبية وفروض محلولة للتحضير المستمر خلال السنة الرابعة متوسط.',
          fr: 'Sujets blancs, devoirs et compositions corrigées pour préparer efficacement le passage au BEM.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9-%D9%85%D8%AA%D9%88%D8%B3%D8%B7-%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-10',
        title: {
          ar: 'مواضيع وحلول شهادة التعليم المتوسط (BEM)',
          fr: 'Annales & Corrigés Officiels du BEM',
        },
        description: {
          ar: 'الأرشيف الكامل لدورات شهادة التعليم المتوسط السابقة مع سلم التنقيط الرسمي والحلول النموذجية.',
          fr: 'Archives officielles de toutes les sessions du Brevet d’Enseignement Moyen (BEM) avec corrigés ministériels.',
        },
        url: 'https://www.medjedel.com/%d8%b4%d9%87%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a7%d9%84%d9%85%d8%aa%d9%88%d8%b3%d8%b7/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-11',
        title: {
          ar: 'فروض واختبارات السنة الأولى ثانوي (1AS)',
          fr: '1re Année Secondaire (1AS) — Sciences & Lettres',
        },
        description: {
          ar: 'نماذج اختبارات جذع مشترك علوم وتكنولوجيا وجذع مشترك آداب لجميع المواد.',
          fr: 'Devoirs et compositions pour les troncs communs Sciences/Technologie et Lettres en 1AS.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89-%D8%AB%D8%A7%D9%86%D9%88%D9%8A-%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-12',
        title: {
          ar: 'فروض واختبارات السنة الثانية ثانوي (2AS)',
          fr: '2e Année Secondaire (2AS) — Toutes Filières',
        },
        description: {
          ar: 'فروض واختبارات جميع الشعب الثانوية (علوم، تقني رياضي، تسيير واقتصاد، لغات وآداب) مع الحل.',
          fr: 'Banque complète de sujets corrigés pour toutes les séries de 2e année secondaire.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-%D8%AB%D8%A7%D9%86%D9%88%D9%8A-%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-13',
        title: {
          ar: 'فروض واختبارات السنة الثالثة ثانوي (3AS)',
          fr: '3e Année Secondaire (3AS) — Préparation BAC',
        },
        description: {
          ar: 'اختبارات فصلية وبكالوريا تجريبية محلولة ومصنفة حسب الشعب السبع في السنة الثالثة ثانوي.',
          fr: 'Sujets d’entraînement et bacs blancs corrigés couvrant les différentes filières de Terminale.',
        },
        url: 'https://www.medjedel.com/%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9-%D8%AB%D8%A7%D9%86%D9%88%D9%8A-%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF/',
        isOnline: true,
      },
      {
        id: 'medjedel-srv-14',
        title: {
          ar: 'مواضيع وحلول شهادة البكالوريا (BAC)',
          fr: 'Annales & Corrigés Officiels du Baccalauréat (BAC)',
        },
        description: {
          ar: 'أرشيف مواضيع شهادة البكالوريا الرسمية مع الإجابات النموذجية وسلم التنقيط لمختلف الشعب.',
          fr: 'Sujets officiels et corrigés ministériels des sessions antérieures du Baccalauréat algérien.',
        },
        url: 'https://www.medjedel.com/%E2%80%8B%D9%85%D9%88%D8%A7%D8%B6%D9%8A%D8%B9-%D8%AA%D8%B5%D8%AD%D9%8A%D8%AD%D8%A7%D8%AA-%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D8%A7/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'التلاميذ في الأطوار التعليمية الثلاثة، المترشحون الأحرار للباكالوريا وBEM، الأساتذة وأولياء الأمور',
        fr: 'Élèves des trois cycles (Primaire, Moyen, Secondaire), candidats libres au BEM/BAC, enseignants et parents',
      },
      processingTime: {
        ar: 'تصفح وتحميل فوري ومباشر لكافة الملفات والمواضيع بصيغة PDF دون انتظار أو اشتراك مدفوع',
        fr: 'Consultation et téléchargement immédiat des sujets et corrigés PDF sans délai d’attente',
      },
      fees: {
        ar: 'جميع النماذج الاختبارية والمواضيع الرسمية وسلاسل المراجعة متاحة مجانا بالكامل',
        fr: 'Accès libre et entièrement gratuit à l’ensemble des devoirs, compositions et annales corrigées',
      },
      channel: {
        ar: 'موقع medjedel.com عبر الويب من الهاتف الذكي أو الحاسوب للطباعة والمراجعة المنزلية',
        fr: 'Site web medjedel.com accessible sur ordinateur et mobile avec fichiers PDF prêts à imprimer',
      },
      keyRequirement: {
        ar: 'تحديد المستوى الدراسي، الشعبة، المادة، والفصل الدراسي لاختيار النموذج المناسب للمراجعة',
        fr: 'Sélectionner simplement le cycle, la classe, la série, la matière et le trimestre souhaité',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تحديد المستوى والشعبة',
          fr: 'Choix du niveau et de la filière',
        },
        value: {
          ar: 'الابتدائي (1AP-5AP)، المتوسط (1AM-4AM)، أو الثانوي مع تحديد الشعبة العلمية أو الأدبية',
          fr: 'Cycle primaire, moyen ou secondaire (Sciences, Maths, Tech-Maths, Gestion, Lettres, Langues)',
        },
      },
      {
        label: {
          ar: 'قارئ ملفات PDF',
          fr: 'Lecteur de documents PDF',
        },
        value: {
          ar: 'متصفح حديث أو قارئ PDF لفتح وطباعة مواضيع الفروض والحلول النموذجية بوضوح',
          fr: 'Navigateur ou lecteur PDF permettant de consulter et d’imprimer les épreuves avec leurs barèmes',
        },
      },
      {
        label: {
          ar: 'منهجية المراجعة الفعالة',
          fr: 'Méthodologie de révision',
        },
        value: {
          ar: 'حل الموضوع أولا في الوقت المحدد للامتحان قبل الاطلاع على التصحيح النموذجي ومقارنة الخطوات',
          fr: 'Traiter le sujet en conditions réelles d’examen avant de consulter le corrigé type',
        },
      },
      {
        label: {
          ar: 'مطابقة التدرج البيداغوجي',
          fr: 'Conformité au programme annuel',
        },
        value: {
          ar: 'التأكد من توافق دروس الفصل الأول أو الثاني أو الثالث مع المنهج الرسمي لوزارة التربية الوطنية',
          fr: 'Vérifier la correspondance des chapitres abordés avec la progression officielle du trimestre',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تتوفر مواضيع موقع مجدل Medjedel مرفوقة بالحلول والتصحيح النموذجي؟',
          fr: 'Les devoirs et examens proposés sur Medjedel incluent-ils les corrigés ?',
        },
        answer: {
          ar: 'نعم، تضم معظم أقسام الموقع ملفات تدمج الموضوع مع التصحيح النموذجي، خاصة حوليات شهادتي البكالوريا والتعليم المتوسط التي تحتوي على سلم التنقيط المفصل.',
          fr: 'Oui, la majorité des fiches proposent les sujets accompagnés de leur correction type, notamment les annales du BEM et du Baccalauréat avec le barème officiel.',
        },
      },
      {
        question: {
          ar: 'هل يحتاج التلميذ إلى إنشاء حساب أو دفع اشتراك لتحميل المواضيع من مجدل؟',
          fr: 'Faut-il créer un compte ou payer un abonnement pour télécharger sur Medjedel ?',
        },
        answer: {
          ar: 'لا، جميع أقسام بنك الفروض والاختبارات مجدل مفتوحة للعموم ومجانية بالكامل دون الحاجة إلى تسجيل دخول أو اشتراكات مالية.',
          fr: 'Non, toutes les ressources pédagogiques du portail sont accessibles librement et gratuitement sans inscription obligatoire.',
        },
      },
      {
        question: {
          ar: 'كيف أستفيد من بنك المواضيع في التحضير لامتحان شهادة البكالوريا أو BEM؟',
          fr: 'Comment exploiter au mieux ces annales pour réussir le BEM ou le BAC ?',
        },
        answer: {
          ar: 'ينصح بتخصيص حصة أسبوعية لحل مواضيع السنوات السابقة (من 2008 إلى آخر دورة) دون الاستعانة بالملخصات، ثم تصحيح الإجابة وفق المنهجية الوزارية لتفادي أخطاء التنقيط.',
          fr: 'Travaillez les annales des sessions précédentes en temps limité, puis comparez minutieusement votre rédaction aux barèmes officiels pour maîtriser la méthodologie attendue.',
        },
      },
      {
        question: {
          ar: 'ما هي المنصات الرسمية المكملة لبنك الفروض للتلاميذ والأولياء؟',
          fr: 'Quelles autres plateformes officielles complètent la révision scolaire en Algérie ?',
        },
        answer: {
          ar: 'إلى جانب مجدل وt-onec، يستعمل التلاميذ والأولياء فضاء الأولياء التابع لوزارة التربية الوطنية لمتابعة الكشوف، ومنصات الديوان الوطني للتعليم والتكوين عن بعد ONEFD ومنصة الديوان الوطني للامتحانات ONEC.',
          fr: 'En complément, les parents et élèves utilisent l’espace Awlyaa du Ministère de l’Éducation pour les bulletins, l’ONEFD pour la scolarité à distance et l’ONEC pour les examens nationaux.',
        },
      },
    ],
  },

  // 37. mesrs.dz
  {
    id: 'mesrs.dz',
    slug: 'mesrs.dz',
    category: 'education_higher',
    name: {
      ar: 'وزارة التعليم العالي والبحث العلمي — المنصات الجامعية الموحدة (MESRS)',
      fr: 'Ministère de l’Enseignement Supérieur et de la Recherche Scientifique (MESRS)',
    },
    acronym: 'MESRS',
    ministry: {
      ar: 'وزارة التعليم العالي والبحث العلمي',
      fr: 'Ministère de l’Enseignement Supérieur et de la Recherche Scientifique',
    },
    description: {
      ar: 'الدليل الكامل للـ 24 منصة رسمية التابعة لوزارة التعليم العالي والبحث العلمي في الجزائر: منصة بروغرس PROGRES للطلبة، دفع حقوق التسجيل والإيواء، التعليم عن بعد Dual-MESRS، المجلات العلمية ASJP، مشاريع البحث PRFU والابتكار SGPI، المنح والتنقل DCEU، وتطبيقات Progres وMyBus.',
      fr: 'Répertoire officiel des 24 plateformes numériques du MESRS en Algérie : PROGRES Étudiant, e-paiement inscription et hébergement, e-learning Dual-MESRS, revues ASJP, recherche PRFU/SGPI, bourses DCEU, doléances et applications WebEtu / MyBus.',
    },
    officialUrl: 'https://www.mesrs.dz/plateformes-mesrs-ar/',
    portalUrl: 'https://progres.mesrs.dz/webetu/login.xhtml',
    iconName: 'GraduationCap',
    isPopular: true,
    services: [
      {
        id: 'mesrs.dz-srv-1',
        title: {
          ar: 'البوابة المركزية لجميع المنصات الرقمية للوزارة (MESRS)',
          fr: 'Annuaire Officiel des Plateformes Numériques MESRS',
        },
        description: {
          ar: 'الدليل الجامع الصادر عن وزارة التعليم العالي للوصول إلى كافة الأنظمة والمنصات الجامعية المعتمدة.',
          fr: 'Portail central répertoriant l’ensemble des plateformes universitaires, pédagogiques et de recherche du MESRS.',
        },
        url: 'https://www.mesrs.dz/plateformes-mesrs-ar/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-2',
        title: {
          ar: 'أرضية قدامى الخريجين والتربص والإدماج المهني',
          fr: 'Plateforme Alumni — Diplômés & Insertion Professionnelle',
        },
        description: {
          ar: 'فضاء متابعة الخريجين الجامعيين، توثيق المسار، وربط حاملي الشهادات بفرص التربص والعمل.',
          fr: 'Espace dédié au suivi des anciens diplômés universitaires, récits de réussite et opportunités de stage ou d’emploi.',
        },
        url: 'http://ancients.mesrs.dz/public/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-3',
        title: {
          ar: 'أرضية تمدرس الطالب بروغرس (PROGRES WebEtu)',
          fr: 'Portail Étudiant PROGRES (WebEtu)',
        },
        description: {
          ar: 'استخراج الشهادات المدرسية، الاطلاع على كشوف النقاط، جداول التوقيت، النتائج، وتقديم التحويلات الجامعية.',
          fr: 'Accès aux certificats de scolarité, relevés de notes, emplois du temps, délibérations et demandes de transfert.',
        },
        url: 'https://progres.mesrs.dz/webetu/login.xhtml',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-4',
        title: {
          ar: 'أرضية التعليم عبر الخط والتكوين عن بعد (Dual-MESRS)',
          fr: 'Plateforme E-Learning & Enseignement à Distance (Dual-MESRS)',
        },
        description: {
          ar: 'الدروس الرقمية التفاعلية والمحاضرات عن بعد لمختلف التخصصات بما فيها العلوم الطبية واللغات.',
          fr: 'Plateforme pédagogique de cours en ligne, y compris pour les filières médicales et formations hybrides.',
        },
        url: 'https://dual-mesrs.dz/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-5',
        title: {
          ar: 'أرضية الطلبة الجدد والاستفسارات الجامعية (Ask MESRS)',
          fr: 'Portail Nouveaux Bacheliers & FAQ (Ask MESRS)',
        },
        description: {
          ar: 'إجابات وتوجيهات عملية للطلبة الجدد والمهتمين بالتخصصات والتسجيلات والخدمات الجامعية.',
          fr: 'Guichet d’information et foire aux questions orientant les nouveaux bacheliers et étudiants.',
        },
        url: 'https://ask.mesrs.dz/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-6',
        title: {
          ar: 'التوجيه نحو التخصصات والحياة العملية (CRAFE)',
          fr: 'Orientation vers les Filières & Vie Professionnelle (CRAFE)',
        },
        description: {
          ar: 'معلومات ونصائح لاختيار الشعب الجامعية ودليل المؤسسات والتكوينات لفائدة الخريجين والطلبة.',
          fr: 'Guide des filières universitaires, conseils d’orientation académique et préparation à l’insertion professionnelle.',
        },
        url: 'https://www.mesrs.dz/crafe/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-7',
        title: {
          ar: 'منصة مشاريع البحث التكويني الجامعي (PRFU)',
          fr: 'Plateforme des Projets de Recherche PRFU',
        },
        description: {
          ar: 'سجل مشاريع البحث القائمة والمنجزة ومتابعة أشغال الباحثين والمخابر عبر الجامعات الوطنية.',
          fr: 'Gestion, soumission et suivi des projets de recherche formation universitaire (PRFU) et activités des laboratoires.',
        },
        url: 'https://www.prfu-mesrs.dz/index.php?lng=fr',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-8',
        title: {
          ar: 'منصة دعم الابتكار وحاضنات الأعمال (SGPI)',
          fr: 'Plateforme Innovation, Incubateurs & Startups (SGPI)',
        },
        description: {
          ar: 'مرافقة مشاريع المؤسسات الناشئة وبراءات الاختراع للطلبة (قرار 1275) وإجراءات اعتماد المخابر.',
          fr: 'Accompagnement de l’innovation universitaire, incubation de projets startups et gestion des laboratoires.',
        },
        url: 'https://sgpi.mesrs.dz/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-9',
        title: {
          ar: 'أرضية المنشورات الجزائرية في الطب (PubMed MESRS)',
          fr: 'Base des Publications Médicales Algériennes',
        },
        description: {
          ar: 'مكتبة رقمية وبحثية متخصصة للأبحاث والدوريات الطبية الصادرة في الجزائر.',
          fr: 'Répertoire spécialisé donnant accès aux publications et travaux scientifiques nationaux dans le domaine médical.',
        },
        url: 'http://pubmed.mesrs.dz/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-10',
        title: {
          ar: 'أرضية تسيير الموارد البشرية الجامعية (WebGRH)',
          fr: 'Gestion des Ressources Humaines Universitaires (WebGRH)',
        },
        description: {
          ar: 'التسيير الإداري لأساتذة ومستخدمي القطاع، متابعة العطل، الساعات الإضافية، والقرارات التنظيمية.',
          fr: 'Portail RH destiné aux enseignants-chercheurs et personnels administratifs (carrière, congés, heures supplémentaires).',
        },
        url: 'https://progres.mesrs.dz/webgrh/login.xhtml',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-11',
        title: {
          ar: 'منصة متابعة وصيانة الممتلكات الجامعية (WebPLHS)',
          fr: 'Suivi du Patrimoine & Maintenance Universitaire (WebPLHS)',
        },
        description: {
          ar: 'تسيير وصيانة الممتلكات والمرافق الجامعية ورصد النزاعات المرتبطة بها داخل المؤسسات.',
          fr: 'Système de suivi, inventaire et maintenance des biens immobiliers et équipements des établissements universitaires.',
        },
        url: 'https://progres.mesrs.dz/webplhs/login.xhtml',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-12',
        title: {
          ar: 'البوابة الرئيسية للنظام المعلوماتي المدمج (PROGRES)',
          fr: 'Portail Central du Système Intégré PROGRES',
        },
        description: {
          ar: 'الواجهة الشاملة لمنظومة PROGRES التي تربط الإدارة البيداغوجية والخدمات الجامعية والدراسات.',
          fr: 'Point d’entrée central de l’écosystème PROGRES interconnectant pédagogie, œuvres universitaires et administration.',
        },
        url: 'https://progres.mesrs.dz/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-13',
        title: {
          ar: 'البوابة الجزائرية للمجلات العلمية (ASJP CERIST)',
          fr: 'Algerian Scientific Journal Platform (ASJP CERIST)',
        },
        description: {
          ar: 'المنصة الوطنية لإيداع ونشر وتحميل المقالات والمجلات العلمية المحكمة للجامعات ومراكز البحث.',
          fr: 'Plateforme nationale hébergeant les revues scientifiques académiques algériennes en libre accès et soumission d’articles.',
        },
        url: 'https://www.asjp.cerist.dz/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-14',
        title: {
          ar: 'بوابة متابعة الطلبة الدوليين في الجزائر',
          fr: 'Portail de Suivi des Étudiants Internationaux',
        },
        description: {
          ar: 'إدارة ومتابعة المسار البيداغوجي والإداري للطلبة الأجانب الدارسين في الجامعات الجزائرية.',
          fr: 'Interface dédiée au suivi académique et administratif des étudiants étrangers inscrits en Algérie.',
        },
        url: 'https://progres.mesrs.dz/international-students/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-15',
        title: {
          ar: 'منصة التكوين والتنقل نحو الخارج (DCEU)',
          fr: 'Formation Résidentielle & Mobilité à l’Étranger (DCEU)',
        },
        description: {
          ar: 'المعالجة الآلية لملفات المنح، التربصات بالخارج، وتحسين المستوى لفائدة الطلبة والأساتذة.',
          fr: 'Gestion numérique des bourses, stages de perfectionnement et programmes de mobilité internationale.',
        },
        url: 'https://services.mesrs.dz/DCEU/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-16',
        title: {
          ar: 'فضاء تسجيل وملفات الطلبة الأجانب (DCEU Login)',
          fr: 'Espace d’Inscription des Étudiants Étrangers (DCEU)',
        },
        description: {
          ar: 'بوابة تسجيل الدخول لمتابعة ملفات الترشح والقبول والمنح الدراسية للطلبة الأجانب.',
          fr: 'Authentification sur le portail DCEU pour le dépôt et le suivi des candidatures d’étudiants internationaux.',
        },
        url: 'https://services.mesrs.dz/DCEU/login/index.php',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-17',
        title: {
          ar: 'المنصة الرقمية لتجديد المنح الدراسية بالخارج',
          fr: 'Renouvellement Numérique des Bourses d’Études (DCEU)',
        },
        description: {
          ar: 'إيداع ملفات تجديد المنح الدراسية ومتابعة تقارير التقدم السنوية للطلبة المبتعثين.',
          fr: 'Téléservice de renouvellement annuel des bourses et dépôt des attestations de réussite à l’étranger.',
        },
        url: 'https://services.mesrs.dz/DCEU/course/index.php?categoryid=17',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-18',
        title: {
          ar: 'منصة التعاون الجامعي والأساتذة الضيوف (CEU)',
          fr: 'Plateforme de Coopération Universitaire (CEU)',
        },
        description: {
          ar: 'متابعة استضافة الأساتذة الضيوف، الإشراف المشترك على أطروحات الدكتوراه، وتنقل الموظفين.',
          fr: 'Suivi des professeurs associés, cotutelles de thèses de doctorat et programmes d’échanges inter-universitaires.',
        },
        url: 'https://ceu.mesrs.dz/accounts/login/?next=/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-19',
        title: {
          ar: 'دفع حقوق التسجيل وإعادة التسجيل الجامعي إلكترونيا',
          fr: 'E-Paiement des Droits d’Inscription Universitaire',
        },
        description: {
          ar: 'تسديد رسوم التسجيل الجامعي السنوي (200 دج) عبر البطاقة الذهبية لبريد الجزائر أو بطاقة CIB.',
          fr: 'Règlement en ligne des frais d’inscription ou de réinscription universitaire via carte Edahabia ou CIB.',
        },
        url: 'https://progres.mesrs.dz/epaiement/epaiementI.xhtml',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-20',
        title: {
          ar: 'دفع حقوق الإيواء في الإقامات الجامعية إلكترونيا',
          fr: 'E-Paiement des Frais d’Hébergement Universitaire',
        },
        description: {
          ar: 'تسديد رسوم الغرفة الجامعية السنوية (400 دج) للطلبة المقيمين عبر بوابة PROGRES المدمجة.',
          fr: 'Paiement électronique de la redevance annuelle de résidence universitaire via le portail PROGRES.',
        },
        url: 'https://progres.mesrs.dz/epaiement/epaiementH.xhtml',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-21',
        title: {
          ar: 'بوابة البريد الإلكتروني المهني الرسمي للوزارة',
          fr: 'Messagerie Électronique Officielle MESRS',
        },
        description: {
          ar: 'الولوج إلى البريد المؤسساتي الخاص بإطارات وباحثي قطاع التعليم العالي والبحث العلمي.',
          fr: 'Accès au webmail officiel destiné aux personnels, chercheurs et cadres du secteur de l’enseignement supérieur.',
        },
        url: 'https://mail.mesrs.dz/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-22',
        title: {
          ar: 'منصة المواعيد والشكاوى والمراسلات الجامعية',
          fr: 'Portail des Rendez-vous & Doléances (MESRS)',
        },
        description: {
          ar: 'إرسال المراسلات الرسمية، طلب مواعيد الاستقبال، أو رفع الشكاوى الإدارية لوزارة التعليم العالي.',
          fr: 'Guichet officiel permettant de solliciter un rendez-vous ou de soumettre une doléance administrative en ligne.',
        },
        url: 'https://progres.mesrs.dz/rdvdoleance/',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-23',
        title: {
          ar: 'تطبيق الهاتف الرسمي للطلبة (WebEtu PROGRES)',
          fr: 'Application Mobile Étudiant — WebEtu PROGRES',
        },
        description: {
          ar: 'الاطلاع السريع من الهاتف على علامات الامتحانات، العطل، البطاقة الجامعية الرقمية، والإيواء والنقل.',
          fr: 'Application Android officielle donnant accès aux notes, carte d’étudiant numérique, bourse et hébergement.',
        },
        url: 'https://play.google.com/store/apps/details?id=app.progres.webetu&hl=ar',
        isOnline: true,
      },
      {
        id: 'mesrs.dz-srv-24',
        title: {
          ar: 'تطبيق النقل الجامعي للطلبة (MyBus)',
          fr: 'Application Mobile Transport Universitaire — MyBus',
        },
        description: {
          ar: 'متابعة مسارات وخطوط حافلات النقل الجامعي وتوقيت الرحلات واشتراك النقل عبر الهاتف.',
          fr: 'Application dédiée au suivi des lignes, horaires des bus universitaires et gestion de l’abonnement transport.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.mesrs.mybus.mybusapp&hl=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'طلبة البكالوريا الجدد، طلبة الليسانس والماستر والدكتوراه، الأساتذة الباحثون، والطلبة الدوليون في الجزائر',
        fr: 'Nouveaux bacheliers, étudiants (LMD/Doctorat), enseignants-chercheurs, personnel universitaire et étudiants étrangers',
      },
      processingTime: {
        ar: 'ولوج فوري لمنصة بروغرس وتطبيق WebEtu؛ معالجة التسجيلات الجامعية والمنح والتنقل وفق الرزنامة السنوية للوزارة',
        fr: 'Accès instantané à WebEtu et ASJP ; traitement des inscriptions, bourses et recours selon le calendrier universitaire',
      },
      fees: {
        ar: 'التصفح والدروس الرقمية والمجلات مجانية؛ تخضع حقوق التسجيل السنوية (200 دج) والإيواء (400 دج) والنقل (150 دج) للدفع الإلكتروني',
        fr: 'Plateformes gratuites ; droits annuels réglementaires payables en ligne (200 DA inscription, 400 DA hébergement)',
      },
      channel: {
        ar: 'منصة progres.mesrs.dz، بوابة mesrs.dz، تطبيقات WebEtu وMyBus، وإدارات الجامعات والإقامات',
        fr: 'Portails progres.mesrs.dz, mesrs.dz, applications WebEtu / MyBus et scolarités universitaires',
      },
      keyRequirement: {
        ar: 'رقم تسجيل البكالوريا والسنة، الرقم السري، وبطاقة الذهبية أو CIB لتسديد حقوق التسجيل والخدمات الجامعية',
        fr: 'Matricule et année du BAC (ou identifiant PROGRES) et carte Edahabia ou CIB pour le règlement des droits',
      },
    },
    requirements: [
      {
        label: {
          ar: 'بيانات الولوج إلى PROGRES وWebEtu',
          fr: 'Identifiants PROGRES / WebEtu',
        },
        value: {
          ar: 'تشكيل رقم السنة + رقم تسجيل البكالوريا (مثال: 2026310...) مع الرمز السري المدون في كشف النقاط الأصلي',
          fr: 'Combinaison année + numéro d’inscription BAC et mot de passe initial (ou identifiant fourni par la scolarité)',
        },
      },
      {
        label: {
          ar: 'دفع حقوق التسجيل والإيواء والنقل',
          fr: 'Paiement des droits universitaires',
        },
        value: {
          ar: 'البطاقة الذهبية لبريد الجزائر أو بطاقة CIB مفعلة لإتمام التسجيل النهائي في epaiementI وepaiementH',
          fr: 'Carte Edahabia ou CIB activée avec solde suffisant pour valider l’inscription et l’hébergement',
        },
      },
      {
        label: {
          ar: 'ملف البحث العلمي والمجلات (ASJP / PRFU)',
          fr: 'Accès chercheurs & publications (ASJP / PRFU)',
        },
        value: {
          ar: 'حساب باحث أو طالب دكتوراه مربوط بالبريد المهني أو المؤسسة الجامعية لنشر المقالات أو تسيير المشاريع',
          fr: 'Compte institutionnel d’enseignant-chercheur ou doctorant pour soumettre des articles ou projets PRFU',
        },
      },
      {
        label: {
          ar: 'الترشح للتكوين بالخارج والمنح (DCEU)',
          fr: 'Dossiers de mobilité et bourses (DCEU)',
        },
        value: {
          ar: 'رسالة استقبال جامعية أو شهادة مدرسية مع كشوف النقاط الممسوحة ضوئيا لإيداعها عبر services.mesrs.dz/DCEU',
          fr: 'Lettre d’accueil, relevés de notes et attestations numérisés en PDF pour les programmes de mobilité',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أدفع حقوق التسجيل الجامعي أو الإيواء إذا لم أمتلك بطاقة ذهبية باسمي؟',
          fr: 'Puis-je payer mes frais universitaires sur PROGRES avec la carte Edahabia d’un proche ?',
        },
        answer: {
          ar: 'نعم، يسمح نظام الدفع الإلكتروني في بروغرس باستعمال البطاقة الذهبية أو بطاقة CIB الخاصة بأحد الوالدين أو الأقارب بعد إدخال رقم تسجيل الطالب ثم تحميل وصل الدفع باسم الطالب مباشرة.',
          fr: 'Oui, le paiement sur epaiementI / epaiementH peut être effectué avec la carte Edahabia ou CIB d’un parent ou tiers ; la quittance est éditée automatiquement au nom de l’étudiant.',
        },
      },
      {
        question: {
          ar: 'نسيت كلمة المرور للدخول إلى منصة WebEtu أو تطبيق بروغرس، ما الحل؟',
          fr: 'Comment récupérer l’accès à WebEtu en cas d’oubli du mot de passe ?',
        },
        answer: {
          ar: 'تواصل مع مصلحة التدريس (Scolarité) في كليتك أو المعهد التابع لك لإعادة ضبط كلمة المرور الأولية في نظام PROGRES خلال دقائق.',
          fr: 'Adressez-vous au service de la scolarité de votre faculté ou institut muni de votre carte d’étudiant pour réinitialiser votre mot de passe sur PROGRES.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين منصة ASJP ومنصة PRFU؟',
          fr: 'Quelle distinction faire entre ASJP et PRFU ?',
        },
        answer: {
          ar: 'منصة ASJP هي البوابة الوطنية لتصفح ونشر المقالات العلمية المحكمة في المجلات الجزائرية المفتوحة للجميع، بينما تخصص منصة PRFU لإدارة ومتابعة مشاريع البحث التكويني الجامعي الممولة للفرق البحثية.',
          fr: 'ASJP héberge et diffuse les revues scientifiques algériennes (accès libre aux articles), tandis que PRFU gère l’évaluation et le suivi administratif des projets de recherche universitaires.',
        },
      },
      {
        question: {
          ar: 'كيف أتابع حافلات النقل الجامعي أو أجدد اشتراكي؟',
          fr: 'Comment consulter les trajets des bus universitaires et valider le transport ?',
        },
        answer: {
          ar: 'يتم دفع حقوق النقل الجامعي عبر بروغرس واستخدام تطبيق MyBus الرسمي على الأندرويد لمعرفة الخطوط والمحطات ومواعيد انطلاق الحافلات.',
          fr: 'Après avoir validé les droits sur PROGRES, téléchargez l’application MyBus pour consulter les itinéraires, arrêts et horaires des lignes universitaires.',
        },
      },
    ],
  },

  // 38. mf.gov
  {
    id: 'mf.gov',
    slug: 'mf.gov',
    category: 'finance_economy',
    name: {
      ar: 'وزارة المالية — البوابة الوطنية للجباية والأملاك والصفقات العمومية',
      fr: 'Ministère des Finances — Portail National, Fiscalité & Marchés Publics',
    },
    acronym: 'MF',
    ministry: {
      ar: 'وزارة المالية',
      fr: 'Ministère des Finances',
    },
    description: {
      ar: 'البوابة الشاملة للخدمات الرقمية لوزارة المالية في الجزائر: طابعكم لاقتناء الطابع الجبائي الإلكتروني، قسيمتك لقسيمة السيارات، بوابة الصفقات العمومية (DGB)، نظام الترقيم الجبائي NIF عن بعد، بوابة جبايتك للتصريح الضريبي، وفضاء الجزائر للأملاك الوطنية.',
      fr: 'Portail des services numériques du Ministère des Finances en Algérie : timbre fiscal en ligne Tabioucom, vignette automobile Qassimatouka, portail des Marchés Publics, télédéclaration Jibayatic, NIF en ligne et Fadaa El Djazaïr.',
    },
    officialUrl: 'https://www.mf.gov.dz/index.php/ar/',
    portalUrl: 'https://marches-publics.gov.dz/',
    iconName: 'Landmark',
    isPopular: false,
    services: [
      {
        id: 'mf.gov-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة المالية',
          fr: 'Site Officiel du Ministère des Finances',
        },
        description: {
          ar: 'البوابة المركزية لقوانين المالية، الميزانية العامة، والمستجدات الجبائية والمالية في الجزائر.',
          fr: 'Portail central regroupant les lois de finances, notes réglementaires, budget et directions générales du ministère.',
        },
        url: 'https://www.mf.gov.dz/index.php/ar/',
        isOnline: true,
      },
      {
        id: 'mf.gov-srv-2',
        title: {
          ar: 'البوابة الإلكترونية للصفقات العمومية (DGB)',
          fr: 'Portail des Marchés Publics (DGB)',
        },
        description: {
          ar: 'منصة التسجيل والمشاركة في الصفقات العمومية، الإعلان عن المناقصات، وإيداع العروض إلكترونيا.',
          fr: 'Plateforme officielle de dématérialisation des marchés publics : inscription des opérateurs, avis et soumissions.',
        },
        url: 'https://marches-publics.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mf.gov-srv-3',
        title: {
          ar: 'فضاء المحافظ العقاري والخدمات المهنية للأملاك الوطنية',
          fr: 'Espace Professionnel Foncier & Domaines (Fadaa El Djazaïr)',
        },
        description: {
          ar: 'الولوج المؤمن للموثقين والمحافظين العقاريين لمعالجة عقود الشهر العقاري والمستخرجات الرسمية.',
          fr: 'Portail dédié aux professionnels (conservateurs, notaires) pour la publicité foncière et les extraits domaniaux.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/login2',
        isOnline: true,
      },
      {
        id: 'mf.gov-srv-4',
        title: {
          ar: 'منصة طابعكم لاقتناء الطابع الجبائي إلكترونيا',
          fr: 'Plateforme Tabioucom — Timbre Fiscal Électronique',
        },
        description: {
          ar: 'شراء الطوابع الجبائية عن بعد لبطاقة التعريف، جواز السفر، رخصة السياقة، وعقود النقل بالبطاقة الذهبية أو CIB.',
          fr: 'Achat en ligne des timbres fiscaux dématérialisés (passeport, CNIBE, permis de conduire, documents administratifs).',
        },
        url: 'https://tabioucom.mf.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mf.gov-srv-5',
        title: {
          ar: 'منصة قسيمتك لاقتناء قسيمة السيارات عن بعد',
          fr: 'Plateforme Qassimatouka — Vignette Automobile en Ligne',
        },
        description: {
          ar: 'تسديد رسم قسيمة السيارات إلكترونيا وتحميل الوصل الرقمي برمز QR دون الوقوف في طوابير قباضات الضرائب.',
          fr: 'Téléservice permettant d’acquérir votre vignette automobile par Edahabia ou CIB avec édition du justificatif QR.',
        },
        url: 'https://qassimatouka.mf.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mf.gov-srv-6',
        title: {
          ar: 'بوابة الترقيم الجبائي عن بعد (NIF en Ligne)',
          fr: 'Numéro d’Identification Fiscale (NIF en Ligne)',
        },
        description: {
          ar: 'طلب واستخراج والتحقق من شهادة رقم التعريف الجبائي NIF للمكلفين والمؤسسات والمقاولين الذاتيين.',
          fr: 'Demande, consultation et vérification en ligne du Numéro d’Identification Fiscale (NIF) auprès de la DGI.',
        },
        url: 'https://nif.mfdgi.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mf.gov-srv-7',
        title: {
          ar: 'بوابة جبايتك للتصريح والدفع الضريبي عن بعد (Jibayatic)',
          fr: 'Portail de Télédéclaration Fiscale Jibayatic (DGI)',
        },
        description: {
          ar: 'تقديم التصريحات الضريبية الشهرية G50 والسنوية ودفع الضرائب والرسوم إلكترونيا للمؤسسات والمهنيين.',
          fr: 'Espace professionnel de télédéclaration et télépaiement des impôts et taxes (G50, bilans) pour les contribuables.',
        },
        url: 'https://jibayatic.mfdgi.gov.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون وملاك المركبات، التجار والشركات، المقاولون الذاتيون، والمتعهدون في الصفقات العمومية',
        fr: 'Citoyens, automobilistes, entreprises, auto-entrepreneurs, contribuables et soumissionnaires aux marchés publics',
      },
      processingTime: {
        ar: 'إصدار فوري لوصل الطابع الجبائي وقسيمة السيارات؛ معالجة الترقيم الجبائي NIF والتصريحات الضريبية خلال أيام العمل الرسمية',
        fr: 'Édition instantanée des timbres Tabioucom et vignettes Qassimatouka ; traitement des dossiers NIF et Jibayatic sous jours ouvrés',
      },
      fees: {
        ar: 'الولوج للمنصات مجاني؛ تطبق فقط مبالغ الطوابع والرسوم والضرائب المنصوص عليها في قانون المالية',
        fr: 'Accès gratuit aux portails ; seuls les montants légaux des timbres, vignettes et impôts sont exigibles',
      },
      channel: {
        ar: 'بوابات mf.gov.dz وtabioucom وqassimatouka وmarches-publics.gov.dz وmfdgi.gov.dz',
        fr: 'Portails mf.gov.dz, tabioucom, qassimatouka, marches-publics.gov.dz, nif.mfdgi.gov.dz et jibayatic',
      },
      keyRequirement: {
        ar: 'بطاقة الذهبية أو CIB للمدفوعات الفردية، ورقم التعريف الجبائي NIF والسجل التجاري للمتعاملين الاقتصاديين',
        fr: 'Carte Edahabia ou CIB pour les particuliers ; NIF et registre de commerce pour les opérateurs économiques',
      },
    },
    requirements: [
      {
        label: {
          ar: 'طابعكم وقسيمتك (للأفراد)',
          fr: 'Tabioucom & Qassimatouka (particuliers)',
        },
        value: {
          ar: 'البطاقة الرمادية للسيارة (لقسيمتك)، بطاقة التعريف الوطنية، وبطاقة الدفع الذهبية أو CIB',
          fr: 'Carte grise du véhicule (vignette), CNIBE et carte de paiement Edahabia ou CIB activée',
        },
      },
      {
        label: {
          ar: 'طلب الترقيم الجبائي NIF',
          fr: 'Demande de NIF en ligne',
        },
        value: {
          ar: 'السجل التجاري أو بطاقة المقاول الذاتي أو الاعتماد المهني، بطاقة التعريف، وعقد الإيجار أو الملكية',
          fr: 'Registre de commerce (ou carte ANAE / agrément), pièce d’identité et justificatif d’adresse professionnelle',
        },
      },
      {
        label: {
          ar: 'التسجيل في بوابة الصفقات العمومية',
          fr: 'Portail des Marchés Publics',
        },
        value: {
          ar: 'رقم التعريف الجبائي NIF، السجل التجاري الإلكتروني، حساب بريد إلكتروني مهني، وتأكيد الاشتراك السنوي عند التقديم',
          fr: 'NIF valide, extrait du registre de commerce, adresse mail professionnelle et pièces fiscales/parafiscales à jour',
        },
      },
      {
        label: {
          ar: 'الانخراط في جبايتك Jibayatic',
          fr: 'Adhésion télédéclaration Jibayatic',
        },
        value: {
          ar: 'إيداع طلب الانضمام لدى مركز الضرائب التابع له المكلف لتفعيل الحساب البنكي والرقم السري',
          fr: 'Dépôt du formulaire d’adhésion auprès du CDI / DGE de rattachement avec RIB pour prélèvement fiscal',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يغني الطابع الجبائي الإلكتروني (طابعكم) عن شراء الطابع الورقي في قباضة الضرائب؟',
          fr: 'Le timbre électronique Tabioucom remplace-t-il le timbre papier traditionnel ?',
        },
        answer: {
          ar: 'نعم، يحمل وصل الطابع الإلكتروني المستخرج من tabioucom.mf.gov.dz رمزا رقميا ومرجعا وحيدا معتمدا لدى البلديات والدوائر لإصدار جواز السفر وبطاقة التعريف ورخصة السياقة وعقود النقل.',
          fr: 'Oui, le reçu généré sur tabioucom.mf.gov.dz comporte une référence unique et un QR Code directement validés par les communes et daïras pour les passeports, CNIBE et permis.',
        },
      },
      {
        question: {
          ar: 'كيف أستعمل قسيمة السيارات الإلكترونية بعد شرائها من منصة قسيمتك؟',
          fr: 'Comment présenter la vignette automobile achetée sur Qassimatouka lors d’un contrôle ?',
        },
        answer: {
          ar: 'بعد الدفع بالبطاقة الذهبية أو CIB، يصدر الموقع وصلا رقميا PDF يحتوي على QR Code قابل للطباعة أو الحفظ في الهاتف ولا يشترط إلصاق قسيمة ورقية على الزجاج الأمامي في الصيغة الإلكترونية.',
          fr: 'Après paiement, téléchargez l’attestation PDF comportant le QR Code : elle peut être conservée sur smartphone ou imprimée à bord du véhicule sans vignette papier à coller.',
        },
      },
      {
        question: {
          ar: 'من يمكنه التسجيل في بوابة الصفقات العمومية marches-publics.gov.dz؟',
          fr: 'Qui peut s’inscrire sur le portail national des Marchés Publics ?',
        },
        answer: {
          ar: 'البوابة مفتوحة لكل المتعاملين الاقتصاديين والمقاولات ومكاتب الدراسات الحائزين على سجل تجاري أو اعتماد قانوني ورقم تعريف جبائي NIF، إلى جانب المصالح المتعاقدة العمومية.',
          fr: 'L’accès est ouvert à toute entreprise, prestataire ou bureau d’études doté d’un NIF et d’un registre de commerce (ou agrément) ainsi qu’aux services contractants publics.',
        },
      },
      {
        question: {
          ar: 'أين أستخرج مستخرجات الأملاك الوطنية مثل الدفتر العقاري والشهادة السلبية؟',
          fr: 'Où effectuer les démarches foncières et cadastrales dépendant du Ministère des Finances ?',
        },
        answer: {
          ar: 'تتم جميع خدمات المسح والحفظ العقاري عبر بوابة «فضاء الجزائر» (fadaeldjazair.mf.gov.dz) التابعة للمديرية العامة للأملاك الوطنية بوزارة المالية.',
          fr: 'Toutes les demandes de livret foncier, certificat négatif et extraits cadastraux CC11/CC12/CC15 s’effectuent via le portail dédié Fadaa El Djazaïr (fadaeldjazair.mf.gov.dz).',
        },
      },
    ],
  },

  // 39. mfa
  {
    id: 'mfa',
    slug: 'mfa',
    category: 'justice_interior',
    name: {
      ar: 'وزارة الشؤون الخارجية والجالية الوطنية بالخارج (الأبوستيل والقنصليات)',
      fr: 'Ministère des Affaires Étrangères & Communauté à l’Étranger (MAE)',
    },
    acronym: 'MAE',
    ministry: {
      ar: 'وزارة الشؤون الخارجية والجالية الوطنية بالخارج',
      fr: 'Ministère des Affaires Étrangères et de la Communauté Nationale à l’Étranger',
    },
    description: {
      ar: 'البوابة الرسمية لخدمات وزارة الشؤون الخارجية في الجزائر: منصة التصديق الإلكتروني الأبوستيل (Apostille)، خدمة ترحيل الوثائق للتصديق عبر بريد الجزائر (Tasdik Poste)، دليل السفارات والقنصليات الجزائرية بالخارج والبعثات الأجنبية، ومراسلة كتابة الدولة للجالية.',
      fr: 'Portail des services numériques du Ministère des Affaires Étrangères (MAE) en Algérie : plateforme officielle Apostille, acheminement postal des documents à légaliser (Tasdik Poste), annuaire des ambassades et consulats et contact pour la diaspora.',
    },
    officialUrl: 'https://www.mfa.gov.dz/ar',
    portalUrl: 'http://apostille.gov.dz/',
    iconName: 'Globe',
    isPopular: true,
    services: [
      {
        id: 'mfa-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة الشؤون الخارجية',
          fr: 'Site Officiel du Ministère des Affaires Étrangères (MAE)',
        },
        description: {
          ar: 'البوابة المؤسساتية الرسمية لمتابعة البيانات الدبلوماسية، شؤون الجالية الوطنية، والنصوص المتعلقة بالخدمات القنصلية.',
          fr: 'Portail officiel regroupant les communiqués diplomatiques, dispositifs dédiés à la diaspora et informations consulaires.',
        },
        url: 'https://www.mfa.gov.dz/ar',
        isOnline: true,
      },
      {
        id: 'mfa-srv-2',
        title: {
          ar: 'منصة التصديق الإلكتروني الأبوستيل (Apostille DZ)',
          fr: 'Plateforme Nationale de Certification Apostille (MAE)',
        },
        description: {
          ar: 'تسجيل الدخول وطلب التصديق بشهادة الأبوستيل على الوثائق العمومية الجزائرية الموجهة للاستعمال في الدول الأعضاء بالاتفاقية.',
          fr: 'Téléservice officiel pour solliciter le cachet Apostille sur les actes publics algériens destinés aux pays signataires.',
        },
        url: 'http://apostille.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mfa-srv-3',
        title: {
          ar: 'منصة ترحيل الوثائق للتصديق عبر بريد الجزائر (Tasdik)',
          fr: 'Acheminement Postal des Documents à Légaliser — Tasdik Poste',
        },
        description: {
          ar: 'خدمة بريد الجزائر المخصصة لإرسال الوثائق من أي مكتب بريدي للتصديق بوزارة الخارجية واستلامها دون عناء التنقل للعاصمة.',
          fr: 'Service d’Algérie Poste permettant de déposer vos documents en bureau de poste pour légalisation au MAE et retour sécurisé.',
        },
        url: 'https://tasdik.poste.dz/',
        isOnline: true,
      },
      {
        id: 'mfa-srv-4',
        title: {
          ar: 'دليل الممثليات الدبلوماسية والقنصلية الجزائرية بالخارج',
          fr: 'Annuaire des Ambassades et Consulats d’Algérie à l’Étranger',
        },
        description: {
          ar: 'قائمة عناوين وأرقام ومواقع السفارات والقنصليات العامة الجزائرية عبر قارات العالم لخدمات الجالية.',
          fr: 'Répertoire officiel des coordonnées et sites web des représentations diplomatiques et consulaires algériennes.',
        },
        url: 'https://www.mfa.gov.dz/ar/embassys-locations-list',
        isOnline: true,
      },
      {
        id: 'mfa-srv-5',
        title: {
          ar: 'التواصل ومراسلة كتابة الدولة المكلفة بالجالية الوطنية بالخارج',
          fr: 'Contact & Requêtes — Secrétariat d’État à la Communauté à l’Étranger',
        },
        description: {
          ar: 'استمارة مراسلة إلكترونية موجهة لأفراد الجالية لطرح الانشغالات القنصلية وطلبات المرافقة الإدارية.',
          fr: 'Formulaire officiel permettant aux ressortissants à l’étranger d’adresser leurs requêtes et sollicitations consulaires.',
        },
        url: 'https://www.mfa.gov.dz/ar/contact',
        isOnline: true,
      },
      {
        id: 'mfa-srv-6',
        title: {
          ar: 'دليل الممثليات الدبلوماسية والقنصلية الأجنبية في الجزائر',
          fr: 'Représentations Diplomatiques & Consulaires Étrangères en Algérie',
        },
        description: {
          ar: 'قائمة السفارات والقنصليات الأجنبية المعتمدة لدى الجمهورية الجزائرية وعناوينها الرسمية.',
          fr: 'Liste et coordonnées des ambassades et consulats étrangers accrédités en Algérie.',
        },
        url: 'https://emblibreville.mfa.gov.dz/ar/foreign-diplomatic-and-consular-representations-in-algeria',
        isOnline: true,
      },
      {
        id: 'mfa-srv-7',
        title: {
          ar: 'دليل المنظمات الدولية والإقليمية المعتمدة بالجزائر',
          fr: 'Organisations Internationales & Régionales en Algérie',
        },
        description: {
          ar: 'بيانات ومكاتب الهيئات الأممية والإقليمية والمنظمات الدولية العاملة في الجزائر.',
          fr: 'Annuaire officiel des agences onusiennes, organisations internationales et délégations régionales basées en Algérie.',
        },
        url: 'https://www.mfa.gov.dz/ar/international-and-regional-organizations-in-algeria',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون الراغبون في تصديق وثائقهم للخارج (أبوستيل أو تصديق قنصلي)، الطلبة، وأفراد الجالية الجزائرية بالخارج',
        fr: 'Citoyens faisant légaliser des documents pour l’étranger (Apostille/Légalisation), étudiants et diaspora algérienne',
      },
      processingTime: {
        ar: 'إيداع فوري على منصة الأبوستيل؛ 48 إلى 96 ساعة عادة لترحيل وإرجاع الوثائق عبر خدمة Tasdik لبريد الجزائر',
        fr: 'Enregistrement immédiat sur Apostille ; délai postal moyen de 48h à 96h via le circuit sécurisé Tasdik Poste',
      },
      fees: {
        ar: 'الخدمات الدبلوماسية الأساسية مجانية أو تخضع لرسوم الطابع الجبائي/القنصلي؛ وتُدفع تعريفة البريد المضمون فقط عند استخدام Tasdik',
        fr: 'Timbres fiscaux/consulaires réglementaires applicables selon l’acte ; tarif postal d’acheminement applicable pour Tasdik',
      },
      channel: {
        ar: 'منصة apostille.gov.dz، خدمة tasdik.poste.dz، مكاتب بريد الجزائر، مصلحة الحالة المدنية والتصديق بالوزارة والقنصليات',
        fr: 'Portails apostille.gov.dz, tasdik.poste.dz, bureaux d’Algérie Poste, guichet central MAE et consulats',
      },
      keyRequirement: {
        ar: 'توقيع وختم مسبق للوثيقة من الجهة المصدرة (بلدية، جامعة، محكمة) وطابع جبائي عند التصديق أو بطاقة الهوية عند السحب',
        fr: 'Document original préalablement signé/visé par l’autorité d’origine (mairie, ministère, cour) et pièce d’identité',
      },
    },
    requirements: [
      {
        label: {
          ar: 'التصديق المسبق من الجهة الوصية قبل الخارجية',
          fr: 'Visa préalable obligatoire avant le MAE',
        },
        value: {
          ar: 'ختم وزارة العدل للوثائق القضائية، وختم التعليم العالي للشهادات الجامعية، أو الدائرة/البلدية لوثائق الحالة المدنية',
          fr: 'Certification préalable du Ministère de la Justice (actes judiciaires), du MESRS (diplômes) ou de la daïra/commune',
        },
      },
      {
        label: {
          ar: 'الوثائق المقبولة في الأبوستيل والتصديق',
          fr: 'Actes éligibles à l’Apostille et légalisation',
        },
        value: {
          ar: 'عقود الميلاد والزواج، السوابق العدلية، الشهادات المدرسية والجامعية، الوكالات والعقود الموثقة الأصلية',
          fr: 'Actes d’état civil originaux, casiers judiciaires, diplômes et relevés visés, procurations et actes notariés',
        },
      },
      {
        label: {
          ar: 'شروط استخدام خدمة ترحيل الوثائق Tasdik',
          fr: 'Utilisation de la navette postale Tasdik',
        },
        value: {
          ar: 'تقديم ظرف الوثائق الأصلية في مكتب بريد معتمد، دفع رسوم البريد السريع، والاحتفاظ برمز التتبع EMS/Tasdik',
          fr: 'Dépôt des originaux au guichet postal habilité, règlement du tarif d’envoi et conservation du numéro de suivi Tasdik',
        },
      },
      {
        label: {
          ar: 'التسجيل القنصلي للجالية بالخارج',
          fr: 'Immatriculation consulaire de la diaspora',
        },
        value: {
          ar: 'جواز السفر البيومتري، إثبات الإقامة القانونية في بلد المهجر، وشهادة الميلاد 12S للحصول على البطاقة القنصلية',
          fr: 'Passeport biométrique, justificatif de résidence régulière à l’étranger et acte 12S pour la carte consulaire',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هو التصديق الأبوستيل (Apostille) ومتى أحتاجه بدل التصديق التقليدي؟',
          fr: 'Qu’est-ce que l’Apostille et dans quel cas remplace-t-elle la légalisation consulaire ?',
        },
        answer: {
          ar: 'شهادة الأبوستيل هي مصادقة دولية مبسطة بموجب اتفاقية لاهاي تغنيك عن التصديق في السفارات الأجنبية بالجزائر، وتطلب عندما تكون الوثيقة موجهة لدولة عضو في الاتفاقية مثل فرنسا وإسبانيا وإيطاليا وتركيا وألمانيا وغيرها.',
          fr: 'L’Apostille est une certification internationale simplifiée (Convention de La Haye) qui supprime la sur-légalisation en ambassade étrangère pour les documents destinés aux pays signataires.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تصديق وثائقي لدى وزارة الخارجية دون السفر إلى الجزائر العاصمة؟',
          fr: 'Peut-on faire légaliser ses documents au MAE sans se déplacer à Alger ?',
        },
        answer: {
          ar: 'نعم، أطلقت وزارة الخارجية بالتعاون مع بريد الجزائر خدمة «تصديق» (tasdik.poste.dz) التي تسمح بإيداع الوثائق في أي مكتب بريد قريب بولايتك ليتم إرسالها وتصديقها وإرجاعها إليك بأمان.',
          fr: 'Oui, grâce à la convention Tasdik avec Algérie Poste (tasdik.poste.dz), vous déposez vos documents dans un bureau de poste de votre wilaya qui se charge de l’envoi aller-retour sécurisé.',
        },
      },
      {
        question: {
          ar: 'هل تصادق وزارة الخارجية مباشرة على الشهادة الجامعية أو كشف النقاط؟',
          fr: 'Le MAE légalise-t-il directement un diplôme universitaire brut ?',
        },
        answer: {
          ar: 'لا، يجب أولا التصديق على الشهادة الجامعية لدى مديرية الجامعة ثم لدى وزارة التعليم العالي والبحث العلمي (أو ممثليها المعتمدين)، وبعدها تُعرض على وزارة الشؤون الخارجية أو منصة الأبوستيل.',
          fr: 'Non, tout diplôme ou relevé universitaire doit d’abord recevoir le visa de l’université et du MESRS avant d’être soumis à la légalisation MAE ou à l’Apostille.',
        },
      },
      {
        question: {
          ar: 'كيف أتوجه بشكوى أو استفسار قنصلي وأنا مقيم خارج الجزائر؟',
          fr: 'Comment contacter les services consulaires ou le Secrétariat d’État depuis l’étranger ?',
        },
        answer: {
          ar: 'يمكنك التواصل مباشرة مع القنصلية المسجل بها عبر دليل الممثليات الدبلوماسية على موقع الوزارة، أو مراسلة كتابة الدولة المكلفة بالجالية الوطنية بالخارج عبر mfa.gov.dz/ar/contact.',
          fr: 'Vous pouvez joindre votre poste consulaire via l’annuaire diplomatique du MAE ou adresser directement votre requête en ligne sur mfa.gov.dz/ar/contact.',
        },
      },
    ],
  },

  // 40. mfp.gov
  {
    id: 'mfp.gov',
    slug: 'mfp.gov',
    category: 'education_higher',
    name: {
      ar: 'وزارة التكوين والتعليم المهنيين (MFP — منصة تكوين والمركز الوطني CNEPD)',
      fr: 'Ministère de la Formation et de l’Enseignement Professionnels (MFP & Takwin)',
    },
    acronym: 'MFP',
    ministry: {
      ar: 'وزارة التكوين والتعليم المهنيين',
      fr: 'Ministère de la Formation et de l’Enseignement Professionnels',
    },
    description: {
      ar: 'البوابة الشاملة لخدمات التكوين والتعليم المهنيين في الجزائر: التسجيل في الدخول التكويني عبر منصة تكوين (takwin.dz)، برامج تعلم صنعة وتركيب الهواتف الذكية، الامتحانات المهنية، وبرامج التكوين عن بعد والدفع الإلكتروني عبر CNEPD.',
      fr: 'Portail officiel de la Formation Professionnelle en Algérie : inscription aux rentrées via Takwin.dz, dispositifs San3a et métiers numériques, examens professionnels et enseignement à distance (CNEPD e-learning & e-paiement).',
    },
    officialUrl: 'https://mfp.gov.dz/',
    portalUrl: 'https://takwin.dz/Offersinscription',
    iconName: 'Wrench',
    isPopular: false,
    services: [
      {
        id: 'mfp.gov-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة التكوين والتعليم المهنيين',
          fr: 'Site Officiel du Ministère de la Formation Professionnelle',
        },
        description: {
          ar: 'البوابة الوزارية الرسمية للاطلاع على المدونة الوطنية للشعب المهنية، مواعيد الدورتين التكوينيين، ودليل المعاهد والمراكز.',
          fr: 'Portail ministériel publiant la nomenclature des spécialités, le calendrier des sessions de formation et la carte des centres.',
        },
        url: 'https://mfp.gov.dz/',
        isOnline: true,
      },
      {
        id: 'mfp.gov-srv-2',
        title: {
          ar: 'التسجيل في عروض الدخول التكويني (Takwin Offers)',
          fr: 'Inscription aux Offres de Formation Professionnelle (Takwin.dz)',
        },
        description: {
          ar: 'استعراض التخصصات المفتوحة في المعاهد الوطنية ومراكز التكوين حسب الولاية وإيداع بطاقة الرغبات إلكترونيا.',
          fr: 'Plateforme permettant de consulter les places disponibles par wilaya et de soumettre votre demande d’inscription en ligne.',
        },
        url: 'https://takwin.dz/Offersinscription',
        isOnline: true,
      },
      {
        id: 'mfp.gov-srv-3',
        title: {
          ar: 'برنامج «تعلّم صنعة واصنع مستقبلك» (من 15 إلى 26 سنة)',
          fr: 'Programme « Taalam San3a » — Jeunes de 15 à 26 Ans',
        },
        description: {
          ar: 'تكوينات سريعة وتأهيلية في 6 تخصصات مهنية وحرفية للشباب الباحثين عن مهارة عملية ولوجا إلى سوق الشغل.',
          fr: 'Dispositif de formation qualifiante ouverte aux jeunes de 15 à 26 ans dans six spécialités de métiers porteurs.',
        },
        url: 'https://takwin.dz/san3a',
        isOnline: true,
      },
      {
        id: 'mfp.gov-srv-4',
        title: {
          ar: 'التكوين التأهيلي في تركيب وصيانة الهواتف الذكية',
          fr: 'Formation Qualifiante — Réparation & Assemblage Smartphones',
        },
        description: {
          ar: 'تسجيل إلكتروني مباشر في مسار التكوين التأهيلي الأولي المتخصص في تكنولوجيا وتركيب الهواتف الذكية.',
          fr: 'Parcours dédié de formation initiale qualifiante aux techniques de montage et maintenance des smartphones.',
        },
        url: 'https://takwin.dz/inscription/264797',
        isOnline: true,
      },
      {
        id: 'mfp.gov-srv-5',
        title: {
          ar: 'البوابة الرئيسية لمنصة تكوين (Takwin.dz)',
          fr: 'Portail Principal Takwin.dz (MFP)',
        },
        description: {
          ar: 'الفضاء الموحد لمختلف أنماط التكوين (الإقامي، التمهين، عن بعد، الدروس المسائية، وتكوين المرأة الماكثة في البيت).',
          fr: 'Guichet central couvrant la formation présentielle, par apprentissage, en cours du soir et pour femmes au foyer.',
        },
        url: 'https://www.takwin.dz/',
        isOnline: true,
      },
      {
        id: 'mfp.gov-srv-6',
        title: {
          ar: 'التسجيلات والاطلاع على رزنامة الامتحانات المهنية',
          fr: 'Inscriptions aux Examens Professionnels (Takwin)',
        },
        description: {
          ar: 'تقديم طلبات الترشح الأحرار أو المسجلين للامتحانات المهنية الوطنية ومتابعة المواعيد الرسمية.',
          fr: 'Téléservice dédié aux inscriptions aux examens professionnels sanctionnant les qualifications de métier.',
        },
        url: 'https://takwin.dz/ProfessionalExams',
        isOnline: true,
      },
      {
        id: 'mfp.gov-srv-7',
        title: {
          ar: 'البرامج والتخصصات التكوينية عن بعد (CNEPD)',
          fr: 'Catalogue des Formations à Distance — CNEPD',
        },
        description: {
          ar: 'استكشاف كافة الشعب المعتمدة في التكوين والتعليم المهنيين عن بعد (تسيير، محاسبة، إعلام آلي، وتقنيات).',
          fr: 'Répertoire officiel des spécialités proposées en formation professionnelle à distance par le CNEPD.',
        },
        url: 'https://cnepd.edu.dz/programs.html',
        isOnline: true,
      },
      {
        id: 'mfp.gov-srv-8',
        title: {
          ar: 'أرضية التعليم والتكوين المهني عن بعد (E-Learning CNEPD)',
          fr: 'Plateforme E-Learning du CNEPD',
        },
        description: {
          ar: 'الدخول إلى الفضاء التعليمي للمتربصين عن بعد لتحميل الدروس، التمارين، ومتابعة الفروض الإلكترونية.',
          fr: 'Espace numérique de cours, tutoriels et devoirs à distance destiné aux stagiaires inscrits au CNEPD.',
        },
        url: 'https://elearningdz.cnepd.edu.dz/my/',
        isOnline: true,
      },
      {
        id: 'mfp.gov-srv-9',
        title: {
          ar: 'الدفع الإلكتروني لمستحقات التسجيل عن بعد (CNEPD)',
          fr: 'E-Paiement des Frais d’Inscription CNEPD',
        },
        description: {
          ar: 'تسديد حقوق التسجيل السنوية للتكوين المهني عن بعد بالبطاقة الذهبية لبريد الجزائر أو بطاقة CIB.',
          fr: 'Portail de paiement électronique sécurisé des frais de scolarité à distance par carte Edahabia ou CIB.',
        },
        url: 'https://inscription-epaiement.cnepd.edu.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الشباب الراغب في التكوين المهني (ابتداء من 15 سنة)، المتمهنون، الموظفون، والطلبة عن بعد (CNEPD)',
        fr: 'Jeunes dès 15 ans, apprentis, travailleurs en perfectionnement, femmes au foyer et stagiaires à distance CNEPD',
      },
      processingTime: {
        ar: 'تسجيل أولي فوري على takwin.dz؛ الإعلان عن نتائج التوجيه والقبول وفق رزنامة الدورتين (سبتمبر/أكتوبر وفيفري)',
        fr: 'Préinscription immédiate sur Takwin.dz ; orientation et confirmation selon les sessions nationales (février et septembre)',
      },
      fees: {
        ar: 'التكوين الإقامي والتمهين في المراكز والمعاهد العمومية مجاني تماما؛ وتحدد رسوم سنوية رمزية للتكوين عن بعد عبر CNEPD',
        fr: 'Formation présentielle et apprentissage gratuits dans les centres publics ; frais d’inscription modiques pour le CNEPD',
      },
      channel: {
        ar: 'منصة takwin.dz، بوابة cnepd.edu.dz، تطبيق مهنتي (Mihnati)، ومراكز التكوين CFPA والمعاهد الوطنية INSFP',
        fr: 'Portails takwin.dz, cnepd.edu.dz, centres CFPA et instituts nationaux spécialisés INSFP',
      },
      keyRequirement: {
        ar: 'السن الأدنى (15 أو 16 سنة حسب النمط)، كشف النقاط أو الشهادة المدرسية لتحديد المستوى، وبطاقة التعريف الوطنية',
        fr: 'Âge minimum légal (15–16 ans selon la filière), certificat de scolarité ou relevé de notes et pièce d’identité',
      },
    },
    requirements: [
      {
        label: {
          ar: 'المستوى الدراسي المطلوب حسب الشهادة',
          fr: 'Niveau scolaire requis selon le diplôme',
        },
        value: {
          ar: 'السنة الثالثة ثانوي للتقني السامي (BTS)، الرابعة متوسط أو الأولى/الثانية ثانوي للتقني والأهلية (CAP / CMP)، ودون شرط مستوى للتأهيلي',
          fr: '3AS pour Technicien Supérieur (BTS), 4AM à 2AS pour CAP/CMP/BT, et sans niveau exigé pour les formations qualifiantes',
        },
      },
      {
        label: {
          ar: 'الوثائق الثبوتية للتسجيل النهائي',
          fr: 'Dossier administratif d’inscription',
        },
        value: {
          ar: 'شهادة مدرسية أصلية أو كشف نقاط، شهادة ميلاد، صورتان شمسيتان، وشهادة طبية عند التأكيد في المركز',
          fr: 'Certificat de scolarité ou dernier relevé, extrait de naissance, 2 photos et certificat médical de bonne santé',
        },
      },
      {
        label: {
          ar: 'شروط برنامج التمهين (Apprentissage)',
          fr: 'Conditions du mode Apprentissage',
        },
        value: {
          ar: 'إبرام عقد تمهين مع مؤسسة اقتصادية أو حرفي معتمد مع استفادة المتمهن من شبه أجر وتغطية اجتماعية',
          fr: 'Signature d’un contrat d’apprentissage avec une entreprise ou artisan ouvrant droit au présalaire et à la couverture sociale',
        },
      },
      {
        label: {
          ar: 'الالتحاق بالتكوين عن بعد (CNEPD)',
          fr: 'Inscription à distance au CNEPD',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية، إثبات المستوى الدراسي، وتسديد حقوق التسجيل إلكترونيا بالبطاقة الذهبية أو CIB',
          fr: 'Pièce d’identité, justificatif de niveau académique et paiement en ligne des droits sur inscription-epaiement.cnepd.edu.dz',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي الدورات السنوية المفتوحة للتسجيل في منصة تكوين (takwin.dz)؟',
          fr: 'Quelles sont les sessions annuelles d’inscription sur la plateforme Takwin.dz ?',
        },
        answer: {
          ar: 'ينظم قطاع التكوين والتعليم المهنيين دورتين رئيسيتين كل سنة: دورة فيفري ودورة سبتمبر/أكتوبر، إضافة إلى فتح تسجيلات خاصة ببرامج التأهيل السريع مثل «تعلّم صنعة» طوال السنة حسب التوفر.',
          fr: 'Le secteur organise deux rentrées nationales majeures chaque année (février et septembre/octobre), complétées par des sessions continues pour les formations qualifiantes rapides comme San3a.',
        },
      },
      {
        question: {
          ar: 'هل يمكن التسجيل في التكوين المهني للمتحصلين على السنة الرابعة متوسط أو دون مستوى ثانوي؟',
          fr: 'Quelles formations sont accessibles avec un niveau 4AM ou sans niveau secondaire ?',
        },
        answer: {
          ar: 'نعم، تتوفر عشرات التخصصات المطلوبة في سوق العمل مثل الكهرباء المعمارية، الترصيص الصحي، ميكانيك السيارات، الحلاقة، الطبخ، الخياطة، وتركيب الهواتف عبر شهادات الكفاءة المهنية CAP أو الشهادات التأهيلية.',
          fr: 'De nombreuses spécialités très demandées (électricité bâtiment, plomberie, mécanique, couture, hôtellerie, maintenance mobile) sont accessibles dès le niveau moyen ou en formation qualifiante CAP/CFPS.',
        },
      },
      {
        question: {
          ar: 'هل شهادة المركز الوطني للتكوين المهني عن بعد (CNEPD) معترف بها في التوظيف؟',
          fr: 'Les diplômes délivrés par le CNEPD (formation à distance) sont-ils reconnus par l’État ?',
        },
        answer: {
          ar: 'نعم، المركز الوطني CNEPD مؤسسة عمومية تابعة لوزارة التكوين والتعليم المهنيين، وتتم المصادقة على شهاداته (مثل تقني وتقني سامي في المحاسبة والتسيير والإعلام الآلي) كباقي المعاهد العمومية في التوظيف والوظيفة العمومية.',
          fr: 'Oui, le CNEPD est un établissement public sous tutelle du MFP ; ses diplômes d’État (CAP, CMP, BT, BTS) ont exactement la même valeur réglementaire dans les secteurs public et privé.',
        },
      },
      {
        question: {
          ar: 'كيف يستفيد الشباب من برنامج «تعلّم صنعة» أو دورات تركيب الهواتف الذكية؟',
          fr: 'Comment intégrer le programme Taalam San3a ou la formation smartphones ?',
        },
        answer: {
          ar: 'يكفي اختيار التخصص عبر رابط takwin.dz/san3a أو رابط الدورة المتخصصة وإدخال المعلومات الشخصية والولاية، ثم التوجه إلى أقرب مركز تكوين مهني لاستكمال القيد والانطلاق في التكوين التطبيقي.',
          fr: 'Sélectionnez simplement la filière souhaitée sur takwin.dz/san3a ou via le lien dédié, renseignez vos coordonnées et votre wilaya, puis finalisez l’inscription au CFPA choisi.',
        },
      },
    ],
  },
];

export const batch5Guides: Record<string, RichGuideContent> = {
  markabatidz: {
    intro: {
      ar: [
        'استحدثت وزارة الطاقة والمناجم المنصة الرقمية الموحدة «مركبتي DZ» (markabatidz.energy.gov.dz) لتنظيم وتبسيط إجراءات المعاينة التقنية وفحص مطابقة المركبات من قبل مهندسي المناجم عبر مختلف ولايات الوطن. وقد جاءت هذه البوابة لإنهاء عناء الطوابير الصباحية أمام مديريات الطاقة والمناجم وتسهيل تتبع ملفات ترقيم السيارات المستوردة والمجهزة بنظام الغاز المميع.',
        'تتيح المنصة لمالك المركبة أو وكيله القانوني حجز موعد دقيق في الولاية المعنية بناء على رقم الهيكل (VIN) ومراجع البطاقة الرمادية أو شهادة الجمركة (846)، مما يضمن توزيعا عادلا للملفات وحصول المواطن على محضر القبول التقني أو شهادة المطابقة اللازمة لإعداد البطاقة الرمادية أو تسوية الوضعية الإدارية.',
        'يستعرض هذا الدليل كافة الفئات المعنية بفحص المطابقة على مركبتي DZ، الفروق الأساسية بينها وبين المراقبة التقنية الدورية (ENACTA)، الوثائق التقنية والإدارية الواجب إحضارها يوم المعاينة، وطرق حل مشكلة تعذر حجز الموعد أو ظهور رقم الهيكل مسجلا مسبقا.'
      ],
      fr: [
        "Développée sous l’égide du Ministère de l’Énergie et des Mines, la plateforme nationale « Markabati DZ » (markabatidz.energy.gov.dz) digitalise la prise de rendez-vous pour le contrôle de conformité et la réception technique des véhicules effectués par les ingénieurs des mines dans chaque wilaya.",
        "Ce téléservice évite les files d’attente matinales devant les Directions de l’Énergie et des Mines (DEM) en permettant aux automobilistes — qu’il s’agisse de véhicules importés, de véhicules équipés au GPL/Sirghaz ou de modifications techniques de carrosserie — de planifier leur visite sur la base du numéro de châssis (VIN) et de suivre la délivrance du procès-verbal de conformité.",
        "Ce guide vous présente la liste complète des justificatifs exigés le jour de l’inspection, la distinction avec le contrôle technique périodique classique, les étapes de réservation pas à pas ainsi que les solutions en cas de blocage de créneau."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'مركبة خاضعة لمراقبة المطابقة (سيارة مستوردة بشهادة 846، مركبة مجهزة بغاز GPL، أو مركبة معدلة تقنيا).',
        'توفر رقم الهيكل (VIN) المكون من 17 خانة مطابقا تماما لما هو محفور على المركبة والوثائق.',
        'تحضير الوثائق الأصلية: البطاقة الرمادية أو شهادة الجمركة، وشهادة التركيب المعتمدة لحالات الغاز.',
        'الحضور في الوقت والمكان المحددين في استمارة الموعد المطبوعة مع بطاقة التعريف البيومترية.',
      ],
      fr: [
        'Véhicule concerné par la réception technique (importation 846, installation GPL ou modification carrossière).',
        'Numéro de châssis (VIN) à 17 caractères rigoureusement identique sur le véhicule et les documents.',
        'Dossier physique complet : carte grise ou titre douanier 846 et attestation d’installateur agréé pour le GPL.',
        'Présentation ponctuelle au centre désigné avec la convocation imprimée et la carte nationale biométrique.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الدخول إلى منصة مركبتي DZ وإنشاء حساب المالك',
          fr: '1. Accéder à Markabati DZ et créer un compte propriétaire',
        },
        detail: {
          ar: 'افتح markabatidz.energy.gov.dz وأدخل بياناتك الشخصية ورقم التعريف الوطني ورقم الهاتف لتفعيل الحساب.',
          fr: 'Ouvrez markabatidz.energy.gov.dz et enregistrez vos informations d’identité ainsi que votre numéro de mobile.',
        },
      },
      {
        title: {
          ar: '2. إدخال معلومات المركبة ورقم الهيكل (VIN) ونوع الفحص',
          fr: '2. Saisir les caractéristiques du véhicule et le numéro VIN',
        },
        detail: {
          ar: 'اختر طبيعة الفحص (مطابقة سيارة مستوردة، مراقبة تجهيز GPL، أو تعديل) ثم أدخل رقم الهيكل بدقة.',
          fr: 'Sélectionnez le motif de visite (réception véhicule importé, contrôle GPL ou transformation) et saisissez le VIN.',
        },
      },
      {
        title: {
          ar: '3. اختيار الولاية والمركز والموعد المتاح ثم طباعة الوصل',
          fr: '3. Choisir le créneau par wilaya et imprimer le bon de rendez-vous',
        },
        detail: {
          ar: 'حدد الموعد المناسب ضمن الرزنامة المفتوحة وحمل استمارة الاستدعاء التي تتضمن عنوان مركز المعاينة.',
          fr: 'Validez la date disponible selon votre wilaya et téléchargez la convocation indiquant le lieu d’inspection.',
        },
      },
      {
        title: {
          ar: '4. إجراء الفحص الميداني لدى مهندس المناجم واستلام محضر المطابقة',
          fr: '4. Effectuer l’inspection physique et retirer le PV de conformité',
        },
        detail: {
          ar: 'تقدم بالمركبة والملف الأصلي في الموعد لاستلام محضر القبول التقني الموجه لترقيم المركبة في الولاية أو الدائرة.',
          fr: 'Présentez le véhicule et le dossier original à l’ingénieur des mines pour obtenir le PV nécessaire à la carte grise.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم وجود مواعيد شاغرة في الولاية عند البحث في المنصة',
          fr: 'Aucun créneau disponible affiché dans votre wilaya',
        },
        solution: {
          ar: 'تفتح الحصص الدورية عادة في ساعات الصباح الأولى أو بداية كل أسبوع؛ راقب المنصة في الأوقات الأقل ضغطا أو تحقق من المراكز الفرعية المفتوحة في ولايتك.',
          fr: 'De nouveaux créneaux sont libérés périodiquement chaque semaine ; consultez la plateforme tôt le matin ou vérifiez les annexes disponibles.',
        },
      },
      {
        issue: {
          ar: 'رسالة خطأ تفيد بأن رقم الهيكل VIN محجوز مسبقا',
          fr: 'Message d’erreur indiquant que le numéro VIN est déjà enregistré',
        },
        solution: {
          ar: 'قد يكون البائع أو الوكيل السابق قد سجل الرقم في محاولة سابقة؛ تواصل مع مديرية الطاقة والمناجم بالولاية مصحوبا بأصل البطاقة الجمركية 846 لفك الارتباط.',
          fr: 'Une précédente tentative de réservation peut bloquer le châssis ; rapprochez-vous de votre Direction de l’Énergie et des Mines avec le dossier original.',
        },
      },
      {
        issue: {
          ar: 'اختلاف بسيط في بيانات الطراز أو القوة الجبائية أثناء المعاينة',
          fr: 'Discordance mineure sur la puissance ou la dénomination technique',
        },
        solution: {
          ar: 'احرص على إحضار البطاقة التقنية الوصفية للمصنع (Notice descriptive) أو شهادة المطابقة الأوروبية لتسهيل توثيق الخصائص لدى مهندس المناجم.',
          fr: 'Munissez-vous impérativement de la fiche technique constructeur ou du certificat de conformité d’origine pour accélérer la validation.',
        },
      },
    ],
    extraFaqs: [],
  },

  mdn: {
    intro: {
      ar: [
        'توفر وزارة الدفاع الوطني الجزائرية (MDN) منظومة رقمية شاملة ومؤمنة عبر بوابة التسجيل الأولي preinscription.mdn.dz وموقعها المؤسساتي الرسمي mdn.dz، لتسهيل التحاق الشباب الجزائري بمختلف صفوف وهياكل الجيش الوطني الشعبي بشفافية وتكافؤ فرص في كافة النواحي العسكرية.',
        'تغطي المنصة جميع فئات التجنيد السنوية: مدارس أشبال الأمة (التعليم المتوسط والثانوي)، التجنيد المباشر للطلبة الضباط العاملين الحائزين على شهادة البكالوريا، التجنيد على أساس الشهادة الجامعية (ليسانس وماستر ودكتوراه)، وفئتي ضباط الصف ورجال الصف المتعاقدين. كما تضع الوزارة في متناول المواطنين والمهنيين دليل التجنيد السنوي PDF، الأعداد الدورية لمجلة الجيش والمجلات العلمية المحكمة، بوابة الصفقات العمومية وطلبات العروض، بالإضافة إلى تطبيق MDNews للأخبار العسكرية.',
        'يشرح هذا الدليل المعايير الأساسية للقبول في كل فئة من فئات التجنيد، كيفية ملء استمارة التسجيل الأولي دون أخطاء، مراحل الانتقاء الأولي وسحب الاستدعاء للفحوص الطبية والبدنية، وأبرز النصائح العملية لتجهيز الملف الورقي الأصلي بعد القبول الأولي.'
      ],
      fr: [
        "Le Ministère de la Défense Nationale (MDN) centralise ses campagnes annuelles d’engagement et ses publications officielles à travers le portail institutional mdn.dz et la plateforme dédiée preinscription.mdn.dz, offrant aux jeunes candidats de toutes les régions militaires un accès transparent et uniformisé.",
        "Le dispositif numérique couvre l’ensemble des filières de recrutement de l’Armée Nationale Populaire : Écoles des Cadets de la Nation, Officiers d’active sur recrutement direct (Bacheliers) ou sur titre universitaire (Licence, Master, Doctorat), Sous-officiers contractuels et Hommes du rang. Le site donne également accès au Guide annuel du recrutement en PDF, aux revues El Djeïch et publications scientifiques, aux appels d’offres publics ainsi qu’à l’application mobile MDNews.",
        "Ce guide récapitule les conditions d’éligibilité propres à chaque catégorie, la démarche d’inscription en ligne pas à pas, le suivi de la présélection et du retrait de convocation, ainsi que les solutions aux erreurs fréquentes lors de la saisie."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'التمتع بالجنسية الجزائرية والحقوق المدنية والعزوبة للانخراط في مدارس التكوين العسكرية.',
        'استيفاء شرط السن القانوني المحدد في دليل التجنيد السنوي لوزارة الدفاع الوطني حسب كل فئة.',
        'النجاح في شهادة التعليم المتوسط/البكالوريا أو حيازة الشهادة الجامعية بالمعدل والتخصص المطلوبين.',
        'التمتع باللياقة البدنية والصحية الجيدة لاجتياز الفحص الطبي والاختبارات النفسية والرياضية.',
      ],
      fr: [
        'Être de nationalité algérienne, célibataire et jouir pleinement de ses droits civiques.',
        'Respecter strictement la limite d’âge définie dans le Guide du Recrutement annuel pour la filière choisie.',
        'Détenir le diplôme ou le relevé de notes exigé (BEM, BAC ou diplôme universitaire dans la spécialité ouverte).',
        'Répondre aux critères d’aptitude médicale, psychotechnique et physique lors des épreuves régionales.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. تحميل ومطالعة دليل التجنيد السنوي PDF لاختيار الفئة والتخصص',
          fr: '1. Consulter le Guide Officiel du Recrutement (PDF)',
        },
        detail: {
          ar: 'حمل الدليل من موقع mdn.dz وتأكد من تطابق معدلك وشعبتك وتاريخ ميلادك مع شروط السلاح المختار.',
          fr: 'Téléchargez le guide officiel sur mdn.dz pour vérifier votre adéquation (moyenne, série, âge) avec l’arme visée.',
        },
      },
      {
        title: {
          ar: '2. الدخول إلى بوابة التسجيل الأولي المطابقة لمؤهلك (bac / fs / soff / hdr / cadets)',
          fr: '2. Accéder au sous-portail de préinscription adapté à votre profil',
        },
        detail: {
          ar: 'افتح الرابط الفرعي الصحيح على preinscription.mdn.dz خلال فترة فتح التسجيلات الرسمية.',
          fr: 'Ouvrez le portail correspondant sur preinscription.mdn.dz durant la fenêtre officielle d’ouverture des inscriptions.',
        },
      },
      {
        title: {
          ar: '3. ملء الاستمارة بدقة وطباعة وصل التسجيل الأولي فورا',
          fr: '3. Compléter le formulaire et imprimer le récépissé',
        },
        detail: {
          ar: 'أدخل الاسم واللقب، رقم شهادة البكالوريا أو المستوى الدراسي، والناحية العسكرية بدقة ثم احفظ الوصل برقم التسجيل.',
          fr: 'Saisissez soigneusement vos données d’état civil, votre région militaire et votre diplôme, puis téléchargez la fiche générée.',
        },
      },
      {
        title: {
          ar: '4. متابعة نتائج الانتقاء الأولي وسحب الاستدعاء للفحص والاختبار',
          fr: '4. Vérifier la présélection et éditer la convocation',
        },
        detail: {
          ar: 'عند ظهور النتائج على البوابة، اطبع الاستدعاء وتوجه في الموعد إلى مركز الاختيار والتوجيه مرفوقا بالملف الكامل.',
          fr: 'Dès publication des listes retenues, imprimez votre convocation et présentez-vous au centre régional avec le dossier original.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم التمكن من الدخول أو ظهور رسالة خطأ أثناء ساعات إعلان النتائج',
          fr: 'Saturation du serveur lors de l’ouverture des inscriptions ou résultats',
        },
        solution: {
          ar: 'تشهد البوابة إقبالا كبيرا في الأيام الأولى بعد البكالوريا؛ جرب الدخول في الأوقات الهادئة (الصباح الباكر أو ليلا) وتجنب تكرار التسجيل بنفس الرقم.',
          fr: 'En raison d’une forte affluence post-BAC, privilégiez les créneaux creux (tôt le matin ou tard le soir) sans créer de doublons.',
        },
      },
      {
        issue: {
          ar: 'ارتكاب خطأ مطبعي في اختيار الشعبة أو المعلومات الشخصية في الاستمارة',
          fr: 'Erreur de saisie dans la spécialité ou les données civiles',
        },
        solution: {
          ar: 'تحقق من توفر زر التعديل قبل الإغلاق على نفس البوابة؛ وإذا تم قفل الاستمارة احضر الوثائق الصحيحة يوم الاستدعاء إن تم انتقاؤك أو تواصل مع خلية التوجيه.',
          fr: 'Vérifiez si l’édition reste ouverte avant la clôture sur le portail ; à défaut, signalez toute correction mineure lors de la visite de sélection.',
        },
      },
      {
        issue: {
          ar: 'تجاهل شروط القامة أو حدة البصر أو المعدل في بعض الأسلحة التخصصية',
          fr: 'Non-conformité aux critères d’acuité visuelle ou de moyenne spécifique',
        },
        solution: {
          ar: 'راجع بدقة المعايير الطبية والمعدلات الدنيا لكل قوة (جوية، بحرية، دفاع جوي، درك) في دليل التجنيد قبل تثبيت خياراتك الأولى.',
          fr: 'Consultez impérativement les seuils médicaux et académiques propres à chaque arme (Aviation, Marine, Gendarmerie) dans le guide PDF.',
        },
      },
    ],
    extraFaqs: [],
  },

  'me.gov': {
    intro: {
      ar: [
        'تضطلع وزارة البيئة وجودة الحياة بمهمة حماية النظم البيئية، تقليص الانبعاثات والتلوث الصناعي، وترقية الاقتصاد الدائري في الجزائر، مستندة في جانبها التنفيذي والرقمي إلى الوكالة الوطنية للنفايات (AND) والمرصد الوطني للبيئة والتنمية المستدامة.',
        'أثمرت جهود الرقمنة القطاعية عن إطلاق «بورصة النفايات الصناعية» (bourse.and.dz) التي تربط المصانع والمؤسسات الاقتصادية المنتجة لبقايا قابلة للتثمين بمتعاملي الرسكلة وإعادة التدوير دون وسطاء، فضلا عن البوابة المعلوماتية للوكالة الوطنية للنفايات وتطبيق الهاتف المواطني «نظيف» (Ndif) الذي يشرك المواطن مباشرة في التبليغ الجغرافي عن النقاط السوداء والرمي العشوائي للنفايات في الأحياء.',
        'يوضح هذا الدليل كيفية تسجيل المؤسسات والمستثمرين في بورصة النفايات الصناعية، الاعتمادات المطلوبة لنشاط جمع وتثمين النفايات، خطوات إيداع مشاريع الاستثمار الأخضر، والطريقة السليمة لاستعمال تطبيق نظيف لتنظيف المحيط.'
      ],
      fr: [
        "Le Ministère de l’Environnement et de la Qualité de la Vie pilote la politique nationale de protection écologique, d’économie circulaire et de contrôle des installations classées, en s’appuyant sur des opérateurs techniques clés tels que l’Agence Nationale des Déchets (AND).",
        "Sur le volet numérique, la plateforme « Bourse des Déchets Industriels » (bourse.and.dz) met gratuitement en relation les unités productrices de matières résiduelles valorisables avec les entreprises de collecte et de recyclage. Parallèlement, l’application mobile citoyenne « Ndif » permet à chaque citoyen de signaler par photo géolocalisée les points noirs et dépôts sauvages pour une prise en charge communale.",
        "Ce guide récapitule les conditions d’adhésion à la bourse des déchets, les agréments nécessaires dans les métiers de la valorisation, l’orientation des projets verts via Invest DZ ainsi que l’utilisation pratique de l’application Ndif."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'امتلاك سجل تجاري ورقم تعريف جبائي NIF للانضمام كمؤسسة عارضة أو طالبة في بورصة النفايات الصناعية.',
        'حيازة الاعتماد البيئي أو رخصة الاستغلال عند ممارسة نشاط جمع أو معالجة النفايات الخاصة أو الخطرة.',
        'تجهيز بيانات الكميات، التصنيف، وموقع التوفر قبل نشر أي إعلان على بوابة bourse.and.dz.',
        'تفعيل خدمة الموقع GPS على الهاتف الذكي لإرسال بلاغات دقيقة عبر تطبيق نظيف (Ndif).',
      ],
      fr: [
        'Disposer d’un registre du commerce et d’un NIF actifs pour inscrire votre entreprise sur la Bourse des Déchets.',
        'Détenir l’agrément requis pour la collecte, le transport ou le traitement des déchets spéciaux ou dangereux.',
        'Préciser la nature, le volume et la localisation des matières valorisables avant publication sur bourse.and.dz.',
        'Activer la géolocalisation sur smartphone pour transmettre un signalement valide via l’application Ndif.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار المسار الرقمي (بورصة النفايات للشركات أو تطبيق نظيف للمواطنين)',
          fr: '1. Choisir le canal adapté (Bourse AND ou application Ndif)',
        },
        detail: {
          ar: 'توجه إلى bourse.and.dz لإدارة وتبادل النفايات القابلة للرسكلة، أو ثبت تطبيق نظيف للمشاركة في حماية نظافة الأحياء.',
          fr: 'Ouvrez bourse.and.dz pour les transactions industrielles de recyclage, ou installez Ndif pour signaler les points noirs.',
        },
      },
      {
        title: {
          ar: '2. التسجيل المهني في بورصة النفايات الصناعية وإدخال بيانات النشاط',
          fr: '2. S’inscrire comme opérateur sur la Bourse des Déchets',
        },
        detail: {
          ar: 'املأ استمارة التسجيل في bourse.and.dz/inscriptionar.php محددين الولاية، رقم السجل التجاري، وتخصص المؤسسة.',
          fr: 'Renseignez le formulaire sur bourse.and.dz/inscriptionar.php avec vos coordonnées d’entreprise et votre secteur.',
        },
      },
      {
        title: {
          ar: '3. نشر عرض نفايات قابلة للتثمين أو البحث عن مواد أولية للرسكلة',
          fr: '3. Publier une offre ou rechercher des matières recyclables',
        },
        detail: {
          ar: 'بعد الدخول للحساب، أضف نوع النفايات (بلاستيك، كرتون، خردة، زجاج) والكمية الدورية لتلقي عروض المهنيين.',
          fr: 'Depuis votre espace connecté, publiez la nature et la quantité des matières disponibles ou contactez les cédants.',
        },
      },
      {
        title: {
          ar: '4. التنسيق التقني مع الوكالة الوطنية للنفايات أو مديرية البيئة بالولاية',
          fr: '4. Coordonner avec l’AND ou la Direction de l’Environnement',
        },
        detail: {
          ar: 'استعمل استمارة الاتصال contacter في البورصة أو مراجعة مديرية البيئة الولائية لمتابعة ملفات الاعتماد والمشاريع الخضراء.',
          fr: 'Sollicitez l’équipe technique via le formulaire de contact AND ou la direction de wilaya pour les projets et agréments.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'تأخر تفعيل حساب المؤسسة في بورصة النفايات الصناعية',
          fr: 'Délai de validation d’un compte sur bourse.and.dz',
        },
        solution: {
          ar: 'تتحقق الوكالة من صحة بيانات السجل التجاري والاتصال قبل التفعيل؛ تأكد من صحة البريد الإلكتروني أو راسل فريق البورصة عبر contactar.php.',
          fr: 'L’AND vérifie la conformité du profil industriel avant activation ; vérifiez vos spams ou contactez l’assistance via contactar.php.',
        },
      },
      {
        issue: {
          ar: 'توقف تحديد الموقع تلقائيا في تطبيق نظيف (Ndif)',
          fr: 'Échec de géolocalisation lors d’un signalement dans Ndif',
        },
        solution: {
          ar: 'امنح التطبيق صلاحية الوصول إلى الموقع الجغرافي والكاميرا من إعدادات الهاتف وأعد المحاولة في مكان مفتوح.',
          fr: 'Autorisez l’accès au GPS et à l’appareil photo dans les paramètres Android avant de soumettre la photo.',
        },
      },
      {
        issue: {
          ar: 'تداخل الصلاحيات بين مشاريع الاستثمار البيئي وبوابة Invest DZ',
          fr: 'Orientation d’un dossier de projet de recyclage vers Invest DZ',
        },
        solution: {
          ar: 'لطلب عقار صناعي أو امتيازات استثمارية لمصنع رسكلة، يودع الملف أولا في بوابة المستثمر Invest DZ أو لدى الوكالة الجزائرية لترقية الاستثمار AAPI بالتوازي مع دراسة الأثر البيئي.',
          fr: 'Pour solliciter du foncier économique ou des incitations, enregistrez d’abord le projet sur Invest DZ / AAPI en parallèle de l’étude d’impact.',
        },
      },
    ],
    extraFaqs: [],
  },

  medjedel: {
    intro: {
      ar: [
        'يعد موقع «مجدل» (Medjedel) من أشهر البوابات التعليمية الجزائرية المساندة للتلاميذ والأولياء والأساتذة على مدار السنة الدراسية، حيث يجمع في أرشيف منظم ومصنف آلاف نماذج الفروض والاختبارات الفصلية مرفقة بالتصحيح النموذجي لجميع المستويات التعليمية في المنظومة التربوية الجزائرية.',
        'يمتد المحتوى التعليمي على الموقع من السنة الأولى ابتدائي إلى السنة الثالثة ثانوي عبر جميع الشعب العلمية والأدبية والتقنية، مع إفراد أقسام خاصة بحوليات ومواضيع وتصحيحات شهادتي التعليم المتوسط (BEM) والباكالوريا (BAC) وفق المنهج الرسمي لوزارة التربية الوطنية.',
        'يقدم هذا الدليل خارطة وصول مباشرة لجميع أقسام الموقع حسب كل سنة دراسية، والمنهجية التربوية الصحيحة لاستثمار بنك الفروض في المراجعة المنزلية، إلى جانب التكامل مع المنصات التربوية الرسمية مثل فضاء الأولياء وبنك الفروض t-onec.'
      ],
      fr: [
        "La plateforme « Medjedel » constitue l’une des bibliothèques pédagogiques en ligne les plus consultées en Algérie par les élèves, les parents et les enseignants. Elle regroupe, par année scolaire et par matière, des milliers de sujets de devoirs, de compositions trimestrielles et d’annales corrigées.",
        "L’arborescence couvre intégralement les trois paliers d’enseignement : le cycle primaire (1AP à 5AP), le cycle moyen (1AM à 4AM) et le cycle secondaire toutes séries (1AS à 3AS), avec des dossiers complets dédiés aux archives officielles et corrigés types du Brevet d’Enseignement Moyen (BEM) et du Baccalauréat (BAC).",
        "Ce guide met à disposition les liens directs classés par niveau, la méthode conseillée pour exploiter ces épreuves efficacement à la maison et les recommandations d’usage avec les plateformes éducatives institutionnelles."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'تحديد المستوى الدراسي والشعبة التربوية بدقة قبل تحميل مواضيع المراجعة.',
        'مقارنة محتوى الفرض مع الدروس المنجزة فعليا في القسم خلال الفصل المعني.',
        'حل التمارين والوضعيات الإدماجية فرديا قبل فتح ملف التصحيح النموذجي.',
        'الجمع بين المراجعة عبر مجدل ومواضيع الديوان الوطني للامتحانات والمسابقات ONEC.',
      ],
      fr: [
        'Identifier exactement votre classe et votre série scolaire avant de sélectionner les sujets.',
        'Vérifier la concordance des chapitres abordés avec le programme du trimestre en cours.',
        'Rédiger le sujet en autonomie complète avant de consulter le barème et la correction type.',
        'Compléter l’entraînement avec les ressources officielles de l’ONEC et de l’ONEFD.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار الطور التعليمي والمستوى الدراسي (ابتدائي، متوسط، ثانوي)',
          fr: '1. Sélectionner le palier et le niveau scolaire souhaité',
        },
        detail: {
          ar: 'استعمل الروابط المباشرة أعلاه للانتقال فورا إلى صفحة السنة المعنية أو أرشيف شهادة BEM والباكالوريا.',
          fr: 'Cliquez directement sur le niveau visé (1AP–5AP, 1AM–4AM, 1AS–3AS) ou sur les archives BEM/BAC.',
        },
      },
      {
        title: {
          ar: '2. تصفية المادة الدراسية والفصل (الأول، الثاني، أو الثالث)',
          fr: '2. Choisir la discipline et la période trimestrielle',
        },
        detail: {
          ar: 'اختر المادة المطلوبة (الرياضيات، الفيزياء، العربية، اللغات، العلوم) ثم انتق النموذج الموافق لفصل الاختبار.',
          fr: 'Parcourez les onglets par matière et sélectionnez le devoir ou la composition du trimestre concerné.',
        },
      },
      {
        title: {
          ar: '3. تحميل أو طباعة الموضوع والعمل عليه في ظروف اختبار حقيقية',
          fr: '3. Télécharger ou imprimer le sujet pour s’entraîner en temps limité',
        },
        detail: {
          ar: 'اطبع الورقة أو اقرأها دون تصفح الحل، واضبط المؤقت الزمني وفق مدة الامتحان الرسمية.',
          fr: 'Travaillez le sujet sans aide extérieure en respectant la durée réglementaire de l’épreuve.',
        },
      },
      {
        title: {
          ar: '4. مقارنة الإجابة بالتصحيح النموذجي وسد الثغرات المعرفية',
          fr: '4. Vérifier ses réponses à l’aide du corrigé type',
        },
        detail: {
          ar: 'راجع طريقة صياغة الإجابة وتوزيع النقاط، وأعد حل التمارين التي أخطأت فيها لتثبيت المنهجية.',
          fr: 'Contrôlez la rédaction attendue, repérez les erreurs récurrentes et reprenez les notions non maîtrisées.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'وجود اختلاف بين موضوع قديم والتعديل السنوي في المنهج',
          fr: 'Décalage ponctuel d’un ancien sujet avec les allègements récents',
        },
        solution: {
          ar: 'اختر النماذج المؤرخة بالسنوات الأخيرة واعتمد كراس التلميذ والتدرج السنوي لتجاوز الدروس غير المقررة في الفصل الحالي.',
          fr: 'Privilégiez les épreuves des dernières sessions et vérifiez toujours les chapitres au programme avec les cahiers de classe.',
        },
      },
      {
        issue: {
          ar: 'عدم فتح ملف PDF على الهاتف الذكي بعد التنزيل',
          fr: 'Impossible d’ouvrir un sujet PDF téléchargé sur mobile',
        },
        solution: {
          ar: 'تأكد من تثبيت تطبيق قارئ PDF قياسي على الهاتف وتحقق من اكتمال تنزيل الملف في مجلد Downloads.',
          fr: 'Installez un lecteur PDF standard et vérifiez dans le dossier Téléchargements que le fichier n’est pas corrompu.',
        },
      },
      {
        issue: {
          ar: 'البحث عن الكشوف المدرسية الرسمية أو استدعاء الامتحانات الوطنية',
          fr: 'Recherche des bulletins officiels ou convocations aux examens',
        },
        solution: {
          ar: 'مجدل موقع للمراجعة التربوية فقط؛ لاستخراج الكشوف الرسمية استخدم فضاء الأولياء (awlyaa-education)، ولسحب استدعاءات BEM وBAC استخدم موقع ONEC.',
          fr: 'Medjedel est un portail de révision ; utilisez Awlyaa pour les bulletins scolaires officiels et les portails ONEC pour les convocations.',
        },
      },
    ],
    extraFaqs: [],
  },

  'mesrs.dz': {
    intro: {
      ar: [
        'شهد قطاع التعليم العالي والبحث العلمي في الجزائر تحولا رقميا رائدا شمل أكثر من عشرين منصة إلكترونية مترابطة تخدم الطالب منذ حصوله على شهادة البكالوريا إلى غاية مناقشة أطروحة الدكتوراه والإدماج المهني، إلى جانب فضاءات متكاملة للأساتذة الباحثين والإداريين والطلبة الدوليين.',
        'يتمركز هذا النظام حول الأرضية المدمجة «بروغرس» (PROGRES) وبوابة الطالب WebEtu (والدفع الإلكتروني لحقوق التسجيل والإيواء epaiementI وepaiementH)، معززا بمنصة التعليم عن بعد Dual-MESRS، منصة الاستفسارات Ask MESRS، حاضنات الأعمال والابتكار SGPI، مشاريع البحث PRFU، البوابة الوطنية للمجلات العلمية ASJP (CERIST)، بوابة المنشورات الطبية، ومنصة التكوين بالخارج والمنح DCEU، فضلا عن تطبيقي WebEtu وMyBus للهواتف الذكية.',
        'يجمع هذا الدليل الرسمي كافة الروابط الـ 24 المعتمدة لوزارة التعليم العالي والبحث العلمي في تصنيف واضح، مع تفصيل خطوات الولوج بحساب بروغرس، دفع الحقوق الجامعية إلكترونيا، تقديم الشكاوى والمواعيد، ومعالجة أبرز المشكلات التقنية خلال فترات التسجيل.'
      ],
      fr: [
        "Le secteur de l’Enseignement Supérieur et de la Recherche Scientifique en Algérie a opéré une transformation numérique majeure reposant sur plus de vingt plateformes interconnectées, couvrant tout le parcours universitaire : orientation des nouveaux bacheliers, scolarité LMD, paiement des droits, enseignement hybride, recherche scientifique, innovation et coopération internationale.",
        "Au cœur de cet écosystème se trouve le progiciel intégré PROGRES et son portail étudiant WebEtu (avec les modules e-paiement d’inscription et d’hébergement), appuyé par la plateforme e-learning Dual-MESRS, les revues scientifiques ASJP (CERIST), la gestion des projets PRFU, les incubateurs SGPI, les bourses DCEU, les ressources RH (WebGRH), le guichet de doléances rdvdoleance ainsi que les applications mobiles WebEtu et MyBus.",
        "Ce répertoire exhaustif rassemble les 24 liens officiels vérifiés du MESRS, accompagné des modalités de connexion par matricule, de règlement des droits en ligne et de résolution des incidents courants."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر رقم تسجيل البكالوريا والسنة والرقم السري للدخول إلى فضاء الطالب بروغرس WebEtu.',
        'بطاقة ذهبية أو بطاقة بنكية CIB مفعلة لإتمام دفع حقوق التسجيل (200 دج) والإيواء (400 دج) والنقل.',
        'بريد إلكتروني مهني جامعي للباحثين والأساتذة الراغبين في الولوج إلى ASJP وPRFU وSGPI وCEU.',
        'تحميل التطبيقات الرسمية من متجر Google Play فقط (WebEtu PROGRES وMyBus).',
      ],
      fr: [
        'Disposer de son matricule et mot de passe pour accéder à l’espace étudiant PROGRES / WebEtu.',
        'Détenir une carte Edahabia ou CIB activée pour régler les frais d’inscription, hébergement et transport.',
        'Disposer d’une adresse institutionnelle universitaire pour les espaces chercheurs (ASJP, PRFU, SGPI, CEU).',
        'Télécharger exclusivement les applications officielles certifiées (WebEtu PROGRES et MyBus).',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار المنصة الجامعية المناسبة من دليل MESRS (طالب، باحث، موظف)',
          fr: '1. Identifier la plateforme MESRS correspondant à votre profil',
        },
        detail: {
          ar: 'يستخدم الطلبة بوابة WebEtu وبوابات الدفع epaiement، بينما يعتمد الباحثون والأساتذة على ASJP وPRFU وWebGRH وDCEU.',
          fr: 'Les étudiants accèdent à WebEtu et aux modules e-paiement ; les chercheurs et personnels utilisent ASJP, PRFU, WebGRH ou DCEU.',
        },
      },
      {
        title: {
          ar: '2. تسجيل الدخول إلى بروغرس WebEtu واستعراض المسار الدراسي',
          fr: '2. Se connecter à PROGRES WebEtu pour le suivi pédagogique',
        },
        detail: {
          ar: 'ادخل إلى progres.mesrs.dz/webetu لمراجعة كشوف النقاط، التسجيل البيداغوجي، جدول الحصص، ووضعية المنحة والإيواء.',
          fr: 'Authentifiez-vous sur progres.mesrs.dz/webetu pour consulter vos notes, attestations, emploi du temps et œuvres sociales.',
        },
      },
      {
        title: {
          ar: '3. تسديد حقوق التسجيل والإيواء إلكترونيا عبر بوابة PROGRES',
          fr: '3. Régler les frais d’inscription et d’hébergement en ligne',
        },
        detail: {
          ar: 'استعمل epaiementI.xhtml لحقوق التسجيل وepaiementH.xhtml للإيواء، سدد بالبطاقة الذهبية أو CIB، واحفظ وصل الدفع PDF.',
          fr: 'Passez par epaiementI (inscription) et epaiementH (hébergement), payez par Edahabia/CIB et téléchargez la quittance.',
        },
      },
      {
        title: {
          ar: '4. متابعة الدروس والأبحاث أو رفع المراسلات عبر rdvdoleance',
          fr: '4. Accéder au e-learning, aux revues ASJP ou aux doléances',
        },
        detail: {
          ar: 'استعمل Dual-MESRS للدروس عن بعد، وASJP للأبحاث، وبوابة المواعيد والشكاوى rdvdoleance لطرح الانشغالات الإدارية.',
          fr: 'Utilisez Dual-MESRS pour les cours en ligne, ASJP pour la recherche et rdvdoleance pour toute requête administrative.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'بطء أو تعذر فتح منصة بروغرس أثناء التسجيلات الجامعية في جويلية وأوت',
          fr: 'Ralentissements de PROGRES durant la période des inscriptions d’été',
        },
        solution: {
          ar: 'تفتح المنصة وفق رزنامة مضبوطة بالساعة لكل دفعة؛ التزم بالموعد المخصص لك وتفاد محاولات الدخول المتزامنة في الساعات الأولى.',
          fr: 'Respectez les créneaux horaires dédiés publiés par le MESRS et privilégiez les connexions hors heures de pointe.',
        },
      },
      {
        issue: {
          ar: 'خصم مبلغ التسجيل بالبطاقة الذهبية مع بقاء الحالة «غير مسدد» في WebEtu',
          fr: 'Frais débités mais statut indiqué non payé sur WebEtu',
        },
        solution: {
          ar: 'انتظر التزامن المحاسبي الآلي بين SATIM وبروغرس، واحتفظ بوصل الدفع البنكي أو البريدي لتقديمه عند الضرورة إلى مصلحة التسجيلات بالجامعة.',
          fr: 'Attendez la synchronisation interbancaire et conservez le justificatif PDF pour le présenter à votre scolarité si le statut tarde à évoluer.',
        },
      },
      {
        issue: {
          ar: 'عدم قبول تسجيل الدخول في منصة ASJP أو PRFU رغم امتلاك حساب طالب',
          fr: 'Accès refusé sur ASJP ou PRFU avec des identifiants étudiants',
        },
        solution: {
          ar: 'لكل من ASJP وPRFU وDCEU نظام تسجيل حساب مستقل مخصص للنشر والبحث؛ أنشئ حسابا خاصا على كل منصة ببريدك الأكاديمي.',
          fr: 'ASJP, PRFU et DCEU utilisent des authentifications distinctes de WebEtu ; créez votre compte dédié sur chacune via votre mail académique.',
        },
      },
    ],
    extraFaqs: [],
  },

  'mf.gov': {
    intro: {
      ar: [
        'تمثل وزارة المالية (MF) العصب التنظيمي للجباية الوطنية، الميزانية، الأملاك العمومية، والصفقات في الجزائر، وقد قطعت أشواطا كبيرة في رقمنة الخدمات الجبائية والعقارية والمالية لتقليص التعامل الورقي وتبسيط إجراءات المواطن والمتعامل الاقتصادي.',
        'تتيح منظومة وزارة المالية وبواباتها التابعة إنجاز معاملات يومية حيوية عن بعد: شراء الطوابع الجبائية الإلكترونية عبر منصة «طابعكم» (tabioucom.mf.gov.dz)، اقتناء قسيمة السيارات عبر «قسيمتك» (qassimatouka.mf.gov.dz)، استخراج والتحقق من رقم التعريف الجبائي عن بعد (nif.mfdgi.gov.dz)، تقديم التصريحات والدفع الضريبي للمؤسسات عبر «جبايتك» (jibayatic.mfdgi.gov.dz)، المشاركة في المناقصات عبر بوابة الصفقات العمومية (marches-publics.gov.dz)، ومعالجة الوثائق العقارية في «فضاء الجزائر» للأملاك الوطنية.',
        'يجمع هذا الدليل كافة البوابات الرسمية لوزارة المالية في نافذة واحدة، مع توضيح الشروط والوثائق الخاصة بالأفراد والشركات، وقواعد الدفع الإلكتروني والأرشفة الضريبية.'
      ],
      fr: [
        "Le Ministère des Finances (MF) supervise la fiscalité nationale, le trésor public, les marchés publics et les domaines de l’État. Sa stratégie de dématérialisation offre aujourd’hui aux citoyens et aux entreprises des guichets électroniques fiables qui suppriment l’usage systématique des guichets physiques.",
        "Cet écosystème fédère les principaux téléservices financiers : achat des timbres fiscaux dématérialisés sur « Tabioucom », règlement en ligne de la vignette automobile sur « Qassimatouka », délivrance et vérification du Numéro d’Identification Fiscale sur « NIF en Ligne », télédéclaration fiscale des professionnels sur « Jibayatic », dématérialisation des appels d’offres sur le portail des « Marchés Publics » et publicité foncière via « Fadaa El Djazaïr ».",
        "Ce guide vous oriente vers chaque portail officiel selon votre besoin, détaille les prérequis pour les particuliers comme pour les sociétés et répond aux questions pratiques sur la valeur légale des quittances numériques."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بطاقة الذهبية أو بطاقة ما بين البنوك CIB مفعلة لشراء الطوابع الإلكترونية وقسيمة السيارات.',
        'البطاقة الرمادية للمركبة لمعرفة العمر والقدرة الجبائية عند استخدام منصة قسيمتك.',
        'السجل التجاري أو بطاقة المقاول الذاتي لطلب رقم التعريف الجبائي NIF أو الانخراط في الصفقات العمومية.',
        'رقم الحساب البنكي RIB وطلب الاعتماد لدى مركز الضرائب CDI للعمل على منصة جبايتك.',
      ],
      fr: [
        'Carte Edahabia ou CIB activée pour l’achat des timbres Tabioucom et vignettes Qassimatouka.',
        'Carte grise du véhicule pour renseigner correctement la puissance fiscale et l’année de mise en circulation.',
        'Registre du commerce ou carte ANAE pour solliciter un NIF en ligne ou soumissionner aux marchés publics.',
        'Dossier d’adhésion validé par votre CDI / DGE pour télé-déclarer et payer sur Jibayatic.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار المنصة المالية المطابقة للمعاملة (طابعكم، قسيمتك، NIF، الصفقات، جبايتك)',
          fr: '1. Sélectionner le guichet financier adapté à votre démarche',
        },
        detail: {
          ar: 'استعمل الروابط الرسمية المباشرة أعلاه لتجنب أي مواقع وسيطة أو غير رسمية.',
          fr: 'Utilisez les liens directs officiels listés ci-dessus pour accéder au bon portail sans intermédiaire.',
        },
      },
      {
        title: {
          ar: '2. إدخال المعلومات المطلوبة بدقة (بيانات الوثيقة، السيارة، أو المؤسسة)',
          fr: '2. Saisir les références exactes (titre, véhicule ou entreprise)',
        },
        detail: {
          ar: 'تحقق من نوع الجواز في طابعكم، رقم التسجيل والقدرة في قسيمتك، أو السجل التجاري في NIF والصفقات العمومية.',
          fr: 'Vérifiez le tarif du timbre, la immatriculation/puissance du véhicule ou les identifiants fiscaux de votre société.',
        },
      },
      {
        title: {
          ar: '3. إتمام الدفع الإلكتروني عبر SATIM / بريد الجزائر وتأكيد الرمز',
          fr: '3. Valider le règlement sécurisé par Edahabia ou CIB',
        },
        detail: {
          ar: 'أدخل بيانات البطاقة وأكد العملية برمز OTP الوارد في رسالة قصيرة SMS.',
          fr: 'Renseignez les coordonnées monétiques et confirmez la transaction grâce au code OTP envoyé par SMS.',
        },
      },
      {
        title: {
          ar: '4. تحميل الوصل الإلكتروني برمز QR والاحتفاظ به كسند قانوني',
          fr: '4. Télécharger et archiver votre quittance ou attestation QR',
        },
        detail: {
          ar: 'خزن ملف PDF على هاتفك أو اطبعه لتقديمه لدى البلدية، قباضة الضرائب، أو أثناء المراقبة المرورية.',
          fr: 'Enregistrez le document PDF certifié pour le présenter en mairie, en contrôle routier ou dans votre comptabilité.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'نسيان رقم القسيمة أو ضياع وصل الطابع الإلكتروني بعد شرائه',
          fr: 'Perte du reçu PDF après achat sur Tabioucom ou Qassimatouka',
        },
        solution: {
          ar: 'توفر البوابتان خيار استرجاع الوصل بإدخال رقم المعاملة أو البريد الإلكتروني ورقم التعريف الوطني الذي استعملته وقت الشراء.',
          fr: 'Les portails proposent une rubrique de réédition via l’adresse e-mail, le NIN et la référence de transaction.',
        },
      },
      {
        issue: {
          ar: 'تأخر المصادقة على طلب رقم التعريف الجبائي في منصة NIF en Ligne',
          fr: 'Demande de NIF en ligne bloquée en cours de traitement',
        },
        solution: {
          ar: 'راجع مفتشية أو مركز الضرائب المختص إقليميا للتأكد من مطابقة عقد الإيجار أو مقر النشاط لاستكمال الترقيم النهائي.',
          fr: 'Rapprochez-vous de votre inspection des impôts de rattachement pour valider le justificatif de domiciliation fiscale.',
        },
      },
      {
        issue: {
          ar: 'صعوبة التسجيل في بوابة الصفقات العمومية للمقاولين الجدد',
          fr: 'Difficulté d’enrôlement sur marches-publics.gov.dz',
        },
        solution: {
          ar: 'تأكد من سريان مفعول رقم التعريف الجبائي NIF ومن استخدام بريد إلكتروني مهني صحيح لتفعيل رابط التوثيق Keycloak.',
          fr: 'Vérifiez la validité préalable de votre NIF sur nif.mfdgi.gov.dz et utilisez une messagerie professionnelle active pour valider le lien.',
        },
      },
    ],
    extraFaqs: [],
  },

  mfa: {
    intro: {
      ar: [
        'تتولى وزارة الشؤون الخارجية والجالية الوطنية بالخارج (MAE) إدارة العلاقات الدبلوماسية ورعاية شؤون المواطنين الجزائريين المقيمين بالخارج عبر شبكة واسعة من السفارات والقنصليات العامة، إلى جانب الإشراف على مصادقة وتصديق الوثائق الإدارية والقضائية والشهادات الموجهة للاستعمال الدولي.',
        'وشهدت خدمات الوزارة نقلة عملية كبرى لفائدة المواطنين في جميع الولايات بفضل إطلاق منصة التصديق الدولي الأبوستيل (apostille.gov.dz) التي تسهل الاعتراف بالوثائق وفق اتفاقية لاهاي، والشراكة مع بريد الجزائر عبر خدمة «تصديق» (tasdik.poste.dz) التي تسمح بإرسال الوثائق من أي ولاية للتصديق واسترجاعها عبر البريد السريع، بالإضافة إلى بوابة الاتصال المباشر بكتابة الدولة المكلفة بالجالية الوطنية بالخارج ودليل البعثات الدبلوماسية.',
        'يوضح هذا الدليل الفرق الدقيق بين شهادة الأبوستيل والتصديق القنصلي التقليدي، ترتيب الأختام المسبقة المطلوبة قبل الوصول للخارجية، خطوات إرسال الوثائق عبر خدمة تصديق، وطرق التواصل القنصلي للجالية.'
      ],
      fr: [
        "Le Ministère des Affaires Étrangères et de la Communauté Nationale à l’Étranger (MAE) assure la gestion du réseau diplomatique et consulaire algérien dans le monde ainsi que la légalisation et la certification internationale des actes publics destinés à être produits à l’étranger.",
        "Pour simplifier ces démarches sur l’ensemble du territoire national, le ministère s’appuie désormais sur deux leviers numériques majeurs : la plateforme nationale « Apostille » (apostille.gov.dz) qui remplace la légalisation complexe pour les pays membres de la Convention de La Haye, et le service « Tasdik » opéré avec Algérie Poste (tasdik.poste.dz) permettant l’acheminement sécurisé des documents depuis n’importe quel bureau de poste de wilaya.",
        "Ce guide pratique précise l’ordre obligatoire des visas préalables selon la nature du document (état civil, diplôme universitaire, acte judiciaire), la marche à suivre pour l’Apostille ou l’envoi Tasdik ainsi que l’accès aux annuaires consulaires."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'الحصول على الأختام المسبقة من الجهة الوصية (وزارة العدل أو التعليم العالي أو الدائرة/البلدية) قبل طلب التصديق.',
        'التحقق من انضمام البلد المستقبِل للوثيقة إلى اتفاقية لاهاي لاختيار الأبوستيل بدل التصديق التقليدي.',
        'تقديم الوثائق الأصلية الواضحة والموقعة رسميا مع نسخة بطاقة التعريف عند استخدام خدمة Tasdik.',
        'الاحتفاظ برقم التسجيل القنصلي وجواز السفر البيومتري لأفراد الجالية بالخارج عند التواصل مع السفارات.',
      ],
      fr: [
        'Obtenir préalablement les visas ministériels ou locaux compétents (Justice, MESRS, Daïra/Mairie) sur l’original.',
        'Vérifier si le pays destinataire est signataire de la Convention de La Haye (Apostille) ou relève de la légalisation classique.',
        'Présenter des documents originaux lisibles avec pièce d’identité lors du dépôt postal Tasdik.',
        'Disposer de votre numéro d’immatriculation consulaire pour toute démarche auprès des consulats à l’étranger.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. المصادقة المسبقة على الوثيقة لدى القطاع المصدر لها',
          fr: '1. Faire viser le document par l’autorité sectorielle d’origine',
        },
        detail: {
          ar: 'صدق الشهادة الجامعية في التعليم العالي، والوثائق القضائية في وزارة العدل، والحالة المدنية لدى الدائرة أو البلدية أولا.',
          fr: 'Obtenez d’abord la certification du MESRS pour les diplômes, de la Justice pour les actes judiciaires ou de la daïra pour l’état civil.',
        },
      },
      {
        title: {
          ar: '2. التقديم عبر منصة الأبوستيل أو التوجه لمكتب بريد الجزائر (Tasdik)',
          fr: '2. Déposer sur Apostille.gov.dz ou via un bureau de poste Tasdik',
        },
        detail: {
          ar: 'سجل طلب الأبوستيل على apostille.gov.dz، أو أودع الظرف مباشرة في مكتب البريد عبر خدمة تصديق لتفادي التنقل للعاصمة.',
          fr: 'Initiez votre demande sur apostille.gov.dz ou confiez vos originaux au guichet postal Tasdik de votre wilaya.',
        },
      },
      {
        title: {
          ar: '3. دفع تعريفة البريد السريع أو الطابع وتتبع مسار الملف',
          fr: '3. Régler les frais postaux/timbres et suivre l’acheminement',
        },
        detail: {
          ar: 'احتفظ برقم التتبع الممنوح في البريد وتابع وصول الوثيقة إلى مصلحة التصديق بالخارجية وعودتها.',
          fr: 'Conservez votre numéro de suivi Tasdik pour contrôler en ligne le traitement au MAE et le retour postal.',
        },
      },
      {
        title: {
          ar: '4. الاستلام والمباشرة بإجراءات السفارة الأجنبية عند الحاجة',
          fr: '4. Retirer l’acte certifié et poursuivre les formalités finales',
        },
        detail: {
          ar: 'استلم وثيقتك الحاملة لختم الأبوستيل أو التصديق بالخارجية لتكون صالحة رسميا في الخارج.',
          fr: 'Récupérez votre document muni du cachet Apostille ou MAE, désormais valable auprès des autorités étrangères.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض تصديق وثيقة في وزارة الخارجية أو إرجاعها عبر Tasdik دون ختم',
          fr: 'Document retourné non légalisé par le service du MAE',
        },
        solution: {
          ar: 'السبب الأكثر شيوعا هو نقص ختم الوزارة الوصية المسبق (مثل غياب ختم التعليم العالي على الشهادة أو ختم وزارة العدل على التوكيل) أو كون الوثيقة نسخة غير أصلية.',
          fr: 'La cause principale est l’absence du visa préalable de la tutelle (MESRS, Justice, Formation) ou l’envoi d’une photocopie au lieu de l’original.',
        },
      },
      {
        issue: {
          ar: 'تساؤل حول ترجمة الوثيقة قبل أم بعد ختم الأبوستيل',
          fr: 'Faut-il traduire le document avant ou après l’Apostille ?',
        },
        solution: {
          ar: 'يجب المصادقة بالخارجية/الأبوستيل على الوثيقة الأصلية أولا، ثم ترجمتها لدى مترجم رسمي معتمد، وفي حال تطلب البلد المستقبِل يتم التصديق على توقيع المترجم لدى العدل والخارجية أيضا.',
          fr: 'Faites certifier le document original en premier, puis procédez à la traduction officielle ; si exigé par le pays d’accueil, la signature du traducteur est également certifiée.',
        },
      },
      {
        issue: {
          ar: 'صعوبة حجز موعد قنصلي في إحدى السفارات بالخارج',
          fr: 'Difficulté d’obtention de rendez-vous dans un consulat à l’étranger',
        },
        solution: {
          ar: 'تحقق من البوابة الإلكترونية الخاصة بالقنصلية المعنية عبر دليل السفارات في mfa.gov.dz، وفي الحالات الاستعجالية تواصل عبر استمارة الاتصال بكتابة الدولة للجالية.',
          fr: 'Consultez les créneaux sur le site dédié de votre consulat via l’annuaire du MAE et signalez toute urgence humanitaire via mfa.gov.dz/ar/contact.',
        },
      },
    ],
    extraFaqs: [],
  },

  'mfp.gov': {
    intro: {
      ar: [
        'يضطلع قطاع التكوين والتعليم المهنيين في الجزائر بدور استراتيجي في تأهيل الشباب وإدماجهم في الحياة العملية عبر شبكة واسعة من مراكز التكوين المهني والتمهين (CFPA) والمعاهد الوطنية المتخصصة (INSFP). وقد انتقل القطاع إلى الرقمنة الشاملة عبر منصة «تكوين» (takwin.dz) وبوابات المركز الوطني للتكوين والتعليم المهنيين عن بعد (CNEPD).',
        'تسمح البوابات الرقمية للقطاع بالاطلاع على كافة العروض التكوينية المفتوحة حسب الولاية في التخصصات الصناعية، البناء، الفلاحة، التكنولوجيا، والخدمات، والتسجيل الأولي في الدورتين السنويتين (فيفري وسبتمبر)، إضافة إلى البرامج السريعة الجديدة مثل مبادرة «تعلّم صنعة» الموجهة للشباب من 15 إلى 26 سنة ومسار تركيب وصيانة الهواتف الذكية، فضلا عن التسجيل في الامتحانات المهنية ومنصة التعليم والدفع الإلكتروني لـ CNEPD.',
        'يوضح هذا الدليل أنماط التكوين الأربعة المعتمدة (الإقامي، التمهين، الدروس المسائية، وعن بعد)، المستويات الدراسية المطلوبة لكل شهادة (من التأهيلي إلى التقني السامي BTS)، خطوات التسجيل في منصة تكوين، والمنح وشبه الأجر الممنوح للمتمهنين.'
      ],
      fr: [
        "Le secteur de la Formation et de l’Enseignement Professionnels (MFP) constitue le principal levier de qualification pratique et d’insertion des jeunes en Algérie, grâce à un réseau dense de CFPA et d’Instituts Nationaux Spécialisés (INSFP). L’accès aux offres est entièrement dématérialisé sur le portail national « Takwin.dz » et sur les plateformes du CNEPD pour la formation à distance.",
        "Les candidats peuvent consulter en temps réel les places pédagogiques disponibles dans leur wilaya, s’inscrire aux sessions nationales de février et septembre, postuler aux parcours qualifiants rapides comme « Taalam San3a » (15–26 ans) et « Maintenance Smartphones », s’inscrire aux examens professionnels ou suivre une formation diplômante à distance via le portail e-learning et e-paiement du CNEPD.",
        "Ce guide détaille les prérequis scolaires correspondant à chaque niveau de diplôme (du CFPS jusqu’au BTS), le mode d’inscription pas à pas sur Takwin.dz et CNEPD, ainsi que les solutions face aux blocages fréquents lors de l’orientation."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'الالتزام بالسن القانوني الأدنى (15 سنة للتكوين الإقامي والتمهين، ومن 15 إلى 26 سنة لبرنامج تعلم صنعة).',
        'توفر الشهادة المدرسية الأصلية أو كشف النقاط لتحديد المستوى المؤهل للشعبة (CAP، CMP، BT، أو BTS).',
        'تجهيز ملف التسجيل النهائي لإيداعه في المركز المختار بعد التوجيه الإلكتروني على takwin.dz.',
        'بطاقة الذهبية أو CIB عند الرغبة في تسديد حقوق التكوين عن بعد عبر بوابة CNEPD.',
      ],
      fr: [
        'Respecter l’âge minimum requis (15 ans pour la formation résidentielle/apprentissage ; 15–26 ans pour San3a).',
        'Détenir un certificat de scolarité ou relevé de notes attestant le niveau requis (CAP, CMP, BT ou BTS).',
        'Préparer le dossier papier complet pour la validation physique au CFPA ou INSFP après orientation sur Takwin.',
        'Disposer d’une carte Edahabia ou CIB pour régler les frais annuels en cas de cursus à distance CNEPD.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. استعراض التخصصات المفتوحة حسب الولاية في منصة takwin.dz',
          fr: '1. Consulter les offres disponibles par wilaya sur Takwin.dz',
        },
        detail: {
          ar: 'ادخل إلى takwin.dz/Offersinscription واختر الولاية، نمط التكوين (إقامي، تمهين، تأهيلي) والتخصصات الملائمة لمستواك.',
          fr: 'Rendez-vous sur takwin.dz/Offersinscription, sélectionnez votre wilaya et filtrez les spécialités selon votre niveau scolaire.',
        },
      },
      {
        title: {
          ar: '2. ملء استمارة التسجيل الإلكتروني وطباعة وصل التسجيل الأولي',
          fr: '2. Remplir le formulaire en ligne et éditer la fiche de préinscription',
        },
        detail: {
          ar: 'أدخل بيانات الهوية ورقم الهاتف واختر الرغبات بالترتيب، ثم احفظ وصل التسجيل المطبوع.',
          fr: 'Complétez vos données civiles, classez vos vœux de spécialités et téléchargez votre attestation d’inscription.',
        },
      },
      {
        title: {
          ar: '3. إتمام الاختبار التوجيهي وإيداع الملف في المركز أو المعهد',
          fr: '3. Valider l’entretien d’orientation et déposer le dossier au centre',
        },
        detail: {
          ar: 'توجه خلال أيام التوجيه والانتقاء إلى المركز التكويني مرفوقا بالشهادة المدرسية وبطاقة التعريف وشهادة الميلاد لتثبيت المقعد.',
          fr: 'Présentez-vous aux journées de sélection/orientation muni des originaux pour confirmer votre affectation.',
        },
      },
      {
        title: {
          ar: '4. متابعة الدروس عبر CNEPD (لمسار التكوين عن بعد) ودفع المستحقات',
          fr: '4. Accéder au e-learning CNEPD (pour les formations à distance)',
        },
        detail: {
          ar: 'للمسجلين في التعليم عن بعد، ادفع الرسوم في inscription-epaiement.cnepd.edu.dz ثم ادخل لحسابك على منصة elearningdz.',
          fr: 'Réglez votre inscription sur inscription-epaiement.cnepd.edu.dz puis connectez-vous sur elearningdz.cnepd.edu.dz.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم ظهور تخصص تقني سامي BTS في منطقتي عند التسجيل',
          fr: 'Spécialité BTS souhaitée introuvable dans une commune donnée',
        },
        solution: {
          ar: 'تُدرّس تخصصات التقني السامي في المعاهد الوطنية INSFP وليس في كل مراكز CFPA؛ وسّع البحث على مستوى كامل الولاية أو اختر التخصصات المتاحة بنمط الإقامة الداخلية.',
          fr: 'Les filières BTS sont dispensées dans les instituts INSFP de wilaya ; élargissez votre recherche à toute la wilaya (avec internat disponible).',
        },
      },
      {
        issue: {
          ar: 'انقطاع الدراسة في سن مبكرة وعدم حيازة مستوى السنة الرابعة متوسط',
          fr: 'Niveau scolaire inférieur à la 4AM pour intégrer une formation',
        },
        solution: {
          ar: 'تفتح الوزارة برامج التكوين المهني التأهيلي ومبادرة «تعلّم صنعة» (takwin.dz/san3a) دون اشتراط مستوى دراسي مرتفع لتمكين الشباب من اكتساب حرفة معتمدة.',
          fr: 'Optez pour les formations qualifiantes initiales ou le programme Taalam San3a accessibles sans prérequis scolaire élevé.',
        },
      },
      {
        issue: {
          ar: 'نسيان بيانات الدخول إلى منصة الدروس عن بعد elearningdz.cnepd.edu.dz',
          fr: 'Perte d’identifiant sur la plateforme e-learning CNEPD',
        },
        solution: {
          ar: 'راجع البريد الإلكتروني المستخدم عند الدفع الإلكتروني للعثور على رقم التسجيل، أو تواصل مع المركز الجهوي لـ CNEPD التابع لولايتك لإعادة تفعيل الحساب.',
          fr: 'Vérifiez l’e-mail de confirmation reçu après paiement ou contactez votre centre régional CNEPD pour réinitialiser vos accès.',
        },
      },
    ],
    extraFaqs: [],
  },
};
