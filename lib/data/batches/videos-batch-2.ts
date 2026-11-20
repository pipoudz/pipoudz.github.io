import { VideoItem } from '../../types';

export const batch2Videos: VideoItem[] = [
  // 18. markabatidz-registration
  {
    id: 'vid-markabati',
    slug: 'markabatidz-registration',
    title: {
      ar: 'طريقة حجز موعد فحص المركبات عبر منصة مركبتي DZ',
      fr: 'Tutoriel : Réservation Visite Technique et Conformité sur Markabati DZ',
    },
    description: {
      ar: 'شرح مرئي رسمي لخطوات التسجيل وحجز موعد المراقبة التقنية ومطابقة المركبات عبر منصة مركبتي DZ التابعة لوزارة الطاقة والمناجم (markabatidz.energy.gov.dz)، وإدخال رقم الهيكل VIN وطباعة الاستدعاء للمركبات المستوردة والمجهزة بسيرغاز GPL.',
      fr: 'Tutoriel vidéo officiel expliquant étape par étape la création de compte sur Markabati DZ (markabatidz.energy.gov.dz), la saisie du numéro de châssis VIN et la prise de rendez-vous auprès des ingénieurs des mines pour les véhicules importés ou équipés GPL.',
    },
    videoUrl: 'https://www.youtube.com/embed/GD3ymUiI2m0',
    watchUrl: 'https://www.youtube.com/watch?v=GD3ymUiI2m0',
    thumbnailUrl: 'https://img.youtube.com/vi/GD3ymUiI2m0/hqdefault.jpg',
    platform: 'youtube',
    duration: '03:50',
    category: {
      ar: 'الطاقة والمركبات',
      fr: 'Énergie, Mines & Véhicules',
    },
    officialUrl: 'https://markabatidz.energy.gov.dz/',
    relatedGuidePath: 'process/markabatidz',
    relatedGuideLabel: {
      ar: 'الدليل الكامل لإجراءات منصة مركبتي DZ والملف المطلوب',
      fr: 'Guide complet des démarches Markabati DZ',
    },
    guideParagraphs: {
      ar: [
        'يشرح هذا الفيديو الرسمي مسار استخدام البوابة الرقمية مركبتي DZ (markabatidz.energy.gov.dz)، التي طورتها وزارة الطاقة والمناجم لتسهيل مواعيد الفحص والمطابقة التقنية للمركبات لدى مهندسي المناجم عبر كافة ولايات الوطن.',
        'يوضح الشرح كيفية فتح حساب مالك المركبة، تسجيل الرقم التسلسلي في الهيكل (VIN) المكون من 17 رمزا، وتحديد نوع الفحص المطلوب سواء للسيارات المستوردة أقل من 3 سنوات، السيارات المجهزة بالغاز المميع GPL/Sirghaz، أو المركبات المعدلة.',
        'كما يبين المقطع خطوة اختيار مديرية الطاقة والمناجم الولائية واليوم المتاح في الرزنامة ثم طباعة الاستدعاء الرسمي اللازم لإتمام المعاينة والحصول على محضر المطابقة.'
      ],
      fr: [
        'Cette vidéo officielle illustre le fonctionnement complet de la plateforme Markabati DZ (markabatidz.energy.gov.dz) développée par le Ministère de l’Énergie et des Mines pour organiser les visites de conformité assurées par les ingénieurs des mines.',
        'Le guide montre concrètement comment créer votre espace propriétaire, saisir les 17 caractères du numéro de châssis (VIN) et sélectionner la nature du contrôle : véhicule importé de moins de 3 ans, installation GPL/Sirghaz ou transformation technique.',
        'Vous y verrez enfin la sélection du centre de contrôle de votre wilaya, le choix du créneau horaire et l’impression de la convocation obligatoire pour retirer le procès-verbal d’homologation.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'الدخول إلى منصة مركبتي DZ عبر markabatidz.energy.gov.dz وإنشاء حساب المالك.',
        fr: 'Ouvrir markabatidz.energy.gov.dz et créer votre compte propriétaire.',
      },
      {
        ar: 'إدخال رقم الهيكل التسلسلي (VIN) وبيانات البطاقة الرمادية أو شهادة الجمركة 846.',
        fr: 'Renseigner le numéro de châssis VIN et les références du Modèle 846 ou carte grise.',
      },
      {
        ar: 'تحديد الولاية، مركز الفحص التابع للمناجم، والموعد المتاح في الجدول.',
        fr: 'Choisir la wilaya, le centre des Mines et réserver la date disponible.',
      },
      {
        ar: 'طباعة الاستدعاء وإحضار المركبة بالوثائق الأصلية لاستلام محضر المطابقة.',
        fr: 'Télécharger la convocation et présenter le véhicule au rendez-vous fixé.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل الموعد عبر مركبتي DZ إلزامي قبل فحص السيارات المستوردة أقل من 3 سنوات؟',
          fr: 'Le rendez-vous Markabati DZ est-il obligatoire pour les véhicules importés moins de 3 ans ?',
        },
        answer: {
          ar: 'نعم، لا تستقبل مصالح المناجم ملفات مطابقة السيارات المستوردة أو المجهزة بسيرغاز دون استدعاء محجوز مسبقا عبر مركبتي DZ.',
          fr: 'Oui, la convocation générée en ligne sur markabatidz.energy.gov.dz est impérative pour accéder au contrôle des Mines.',
        },
      },
      {
        question: {
          ar: 'أين أجد رقم الهيكل VIN المطلوب في استمارة مركبتي DZ؟',
          fr: 'Où trouver le numéro VIN demandé lors de l’inscription ?',
        },
        answer: {
          ar: 'يدون رقم الهيكل المكون من 17 رمزا في شهادة الجمركة (Model 846) والبطاقة الرمادية، كما يظهر على الصفيحة المعدنية وأسفل الزجاج الأمامي للمركبة.',
          fr: 'Les 17 caractères du VIN figurent sur le Modèle 846, la carte grise ainsi que sur la plaque constructeur du véhicule.',
        },
      },
      {
        question: {
          ar: 'هل يمكن تغيير موعد الفحص المحجوز في حال تعذر الحضور؟',
          fr: 'Peut-on modifier une date de visite déjà réservée sur Markabati DZ ?',
        },
        answer: {
          ar: 'نعم، ادخل إلى حسابك قبل موعد الزيارة لإلغاء الحجز السابق واختيار موعد جديد متاح في الولاية.',
          fr: 'Oui, connectez-vous à votre compte avant l’échéance pour annuler le créneau et en réserver un autre.',
        },
      },
    ],
  },

  // 19. mtpib-presentation
  {
    id: 'vid-mtpib',
    slug: 'mtpib-presentation',
    title: {
      ar: 'تعريف بالبوابة الرقمية لوزارة الأشغال العمومية والمنشآت القاعدية (MTPIB)',
      fr: 'Présentation du Portail Numérique du Ministère des Travaux Publics (MTPIB)',
    },
    description: {
      ar: 'فيديو تعريفي رسمي للبوابة الرقمية لوزارة الأشغال العمومية والمنشآت القاعدية (portail.mtpib.dz): رقمنة طلبات شهادة التأهيل والتصنيف المهني للمقاولين، اعتماد المهندسين ومكاتب الدراسات، رخص استغلال شبكة الطرق، ووثيقة تحديد المسافة.',
      fr: 'Vidéo institutionnelle présentant le portail numérique officiel du Ministère des Travaux Publics et des Infrastructures de Base (portail.mtpib.dz) : certificats de qualification et de classification, agréments des bureaux d’études, autorisations routières et attestation de distance.',
    },
    videoUrl: 'https://portail.mtpib.dz/portail_v.mp4',
    thumbnailUrl: 'https://picsum.photos/seed/mtpib/800/450',
    platform: 'mp4',
    duration: '03:20',
    category: {
      ar: 'الأشغال العمومية والمنشآت',
      fr: 'Travaux Publics & Infrastructures',
    },
    officialUrl: 'https://portail.mtpib.dz/',
    relatedGuidePath: 'sectors/mtpib',
    relatedGuideLabel: {
      ar: 'دليل البوابة الرقمية لوزارة الأشغال العمومية والمنشآت القاعدية',
      fr: 'Fiche complète des services numériques MTPIB',
    },
    guideParagraphs: {
      ar: [
        'يستعرض هذا الفيديو المؤسساتي البوابة الرقمية الموحدة لوزارة الأشغال العمومية والمنشآت القاعدية (portail.mtpib.dz)، المصممة لعصرنة الإجراءات الموجهة لشركات الإنجاز، المقاولين، ومكاتب الدراسات الهندسية عبر التراب الوطني.',
        'يسلط العرض الضوء على مسار طلب شهادة التأهيل والتصنيف المهني عن بعد عبر فضاء إيداع الطلبات (demande-login.php)، بما يسمح بمتابعة دراسة الملف من اللجنة الولائية أو الوطنية وتقليص آجال استلام الاعتماد.',
        'كما يعرف المقطع بالخدمات الرقمية المرافقة، من بينها محاكاة المعايير، تقديم طلبات رخص استعمال شبكة الطرق، واستخراج وثيقة تحديد المسافة، مع ربط مباشر بدليل خدمات القطاع في بوابتنا.'
      ],
      fr: [
        'Cette vidéo institutionnelle présente l’écosystème numérique déployé sur portail.mtpib.dz par le Ministère des Travaux Publics et des Infrastructures de Base pour accompagner les entreprises de réalisation, maîtres d’œuvre et bureaux d’études.',
        'Elle met en lumière la téléprocédure de demande et de renouvellement du certificat de qualification et de classification professionnelles, permettant aux soumissionnaires de suivre l’instruction de leur dossier à distance.',
        'La présentation aborde également les services associés tels que l’outil de simulation, les autorisations liées au réseau routier et les attestations de distance.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'استكشاف بوابة وزارة الأشغال العمومية portail.mtpib.dz وتصنيف خدمات المقاولين والمهندسين.',
        fr: 'Découvrir l’accueil portail.mtpib.dz et ses téléservices dédiés aux professionnels.',
      },
      {
        ar: 'ولوج فضاء إيداع طلبات شهادة التأهيل والتصنيف المهني دون تنقل.',
        fr: 'Accéder à l’espace de dépôt en ligne des dossiers de qualification professionnelle.',
      },
      {
        ar: 'استعمال أداة المحاكاة المبدئية والتحقق من مستويات التصنيف والمستندات المطلوبة.',
        fr: 'Utiliser le simulateur de critères pour préparer les pièces justificatives conformes.',
      },
      {
        ar: 'متابعة رأي اللجنة المختصة وطلب رخص شبكة الطرق أو الاعتماد المهني عن بعد.',
        fr: 'Suivre les avis de commission et solliciter les autorisations routières en ligne.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي أبرز الخدمات الرقمية المتاحة في بوابة portail.mtpib.dz؟',
          fr: 'Quels téléservices sont accessibles depuis portail.mtpib.dz ?',
        },
        answer: {
          ar: 'تشمل البوابة طلبات شهادة التأهيل والتصنيف المهني للمقاولات، اعتماد مكاتب الدراسات والمهندسين، رخص شبكة الطرق، ومحاكاة التصنيف.',
          fr: 'Le portail regroupe les certificats de qualification professionnelle, l’agrément des bureaux d’études et ingénieurs, les permis routiers et les simulateurs.',
        },
      },
      {
        question: {
          ar: 'من يستفيد من شهادة التأهيل والتصنيف المهني في قطاع الأشغال العمومية؟',
          fr: 'Qui est concerné par le certificat de qualification et classification ?',
        },
        answer: {
          ar: 'تعد الشهادة وثيقة أساسية لمؤسسات الأشغال العمومية والبناء ومكاتب الدراسات للمشاركة في الصفقات العمومية ومشاريع المنشآت القاعدية.',
          fr: 'Ce document est indispensable aux entreprises de travaux publics et bureaux d’études souhaitant soumissionner aux marchés publics.',
        },
      },
      {
        question: {
          ar: 'هل يمكن متابعة حالة الملف بعد إيداعه في بوابة MTPIB؟',
          fr: 'Le suivi du dossier est-il dématérialisé après le dépôt ?',
        },
        answer: {
          ar: 'نعم، يتيح الفضاء المؤمن على البوابة تتبع مراحل فحص الملف وإشعارات الاستكمال أو الموافقة عبر الإنترنت.',
          fr: 'Oui, l’espace authentifié permet de suivre l’avancement de l’instruction et les compléments éventuels.',
        },
      },
    ],
  },

  // 20. naftal-tyres
  {
    id: 'vid-naftal',
    slug: 'naftal-tyres',
    title: {
      ar: 'طريقة التسجيل في منصة محطتي لاقتناء عجلات السيارات (نفطال)',
      fr: 'Tutoriel : Inscription sur E-Mahata Naftal pour Acheter des Pneus',
    },
    description: {
      ar: 'شرح مرئي تطبيقي لطريقة التسجيل في منصة محطتي الإلكترونية التابعة للشركة الوطنية نفطال (e-mahata.naftal.dz) لاقتناء عجلات السيارات المطاطية بالأسعار الرسمية المقننة، تحديد مقاس الإطار، واختيار محطة الخدمة للتركيب.',
      fr: 'Tutoriel vidéo complet détaillant l’inscription sur la plateforme E-Mahata de Naftal (e-mahata.naftal.dz), la saisie de la carte grise, le choix des dimensions de pneumatiques et la réservation du montage en station aux tarifs officiels.',
    },
    videoUrl: 'https://www.youtube.com/embed/U-3YSOxddEs',
    watchUrl: 'https://www.youtube.com/watch?v=U-3YSOxddEs',
    thumbnailUrl: 'https://img.youtube.com/vi/U-3YSOxddEs/hqdefault.jpg',
    platform: 'youtube',
    duration: '04:10',
    category: {
      ar: 'نفطال والمحروقات والسيارات',
      fr: 'Naftal & Entretien Auto',
    },
    officialUrl: 'https://e-mahata.naftal.dz/',
    relatedGuidePath: 'process/e-mahata.naftal',
    relatedGuideLabel: {
      ar: 'الدليل الكامل للتسجيل وطلب العجلات عبر منصة محطتي نفطال',
      fr: 'Guide pas à pas de commande sur E-Mahata Naftal',
    },
    guideParagraphs: {
      ar: [
        'يوضح هذا الشرح المرئي كيفية الاستفادة من منصة محطتي (e-mahata.naftal.dz) التي أطلقتها شركة نفطال لتوفير العجلات المطاطية والزيوت وخدمات الصيانة السريعة للسيارات بأسعار رسمية شفافة بعيدا عن المضاربة.',
        'يتابع المشاهد خطوة بخطوة عملية إنشاء الحساب بالهاتف النقال وتأكيده عبر الرسائل النصية، ثم إدخال معطيات البطاقة الرمادية للمركبة والتحقق من الأبعاد الصحيحة للإطارات المناسبة.',
        'كما يبين الفيديو كيفية انتقاء الولاية ومحطة نفطال القريبة التي يتوفر فيها المقاس المطلوب، ثم تأكيد الموعد للتوجه بالسيارة وإجراء التركيب المباشر.'
      ],
      fr: [
        'Cette vidéo explique l’utilisation de la plateforme E-Mahata (e-mahata.naftal.dz) lancée par Naftal pour permettre aux automobilistes d’acquérir des pneumatiques neufs aux tarifs officiels sans intermédiaires.',
        'Le tutoriel détaille la création du compte personnel avec validation SMS, l’enregistrement de la carte grise du véhicule ainsi que la sélection rigoureuse des dimensions constructeur des pneus.',
        'Il montre enfin comment choisir la station-service Naftal de votre wilaya disposant du stock requis et confirmer le rendez-vous pour le montage sur véhicule.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'فتح موقع e-mahata.naftal.dz وإنشاء حساب الزبون برقم الهاتف وتأكيد SMS.',
        fr: 'Accéder à e-mahata.naftal.dz et valider votre compte mobile par SMS.',
      },
      {
        ar: 'تسجيل المركبة بإدخال رقم الترقيم والبيانات المطابقة للبطاقة الرمادية.',
        fr: 'Enregistrer votre véhicule à l’aide de la carte grise et de l’immatriculation.',
      },
      {
        ar: 'اختيار مقاس العجلات الدقيق (مثال 195/65 R15) ومحطة نفطال المتوفرة في الولاية.',
        fr: 'Sélectionner la dimension exacte des pneus et la station Naftal de retrait.',
      },
      {
        ar: 'استلام رمز التأكيد والتوجه بالسيارة والبطاقة الرمادية لتركيب العجلات في المحطة.',
        fr: 'Se présenter avec le véhicule et la carte grise pour le paiement et la pose.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن شراء الإطارات من منصة محطتي دون إحضار السيارة للمحطة؟',
          fr: 'Peut-on retirer des pneus E-Mahata sans présenter le véhicule ?',
        },
        answer: {
          ar: 'تشترط إجراءات التوزيع في محطات نفطال حضور المركبة المطابقة للبطاقة الرمادية المسجلة لإجراء التركيب وضمان التوزيع العادل.',
          fr: 'La présentation du véhicule correspondant à la carte grise est requise en station pour le contrôle de conformité et le montage.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من مقاس إطارات سيارتي قبل ملء الاستمارة؟',
          fr: 'Comment vérifier la bonne taille de pneus avant de commander ?',
        },
        answer: {
          ar: 'اقرأ الرمز الثلاثي المطبوع على جانب الإطار الحالي أو في ملصق باب السائق مثل 205/55 R16.',
          fr: 'Relevez la mention complète inscrite sur le flanc du pneu actuel ou sur l’étiquette de portière conducteur.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا نفد مقاس العجلات في المحطة الأقرب إلي؟',
          fr: 'Que faire en cas de rupture de stock sur une station ?',
        },
        answer: {
          ar: 'اختر محطة نفطال أخرى مجاورة في نفس الولاية أو راقب المنصة عند تزويد المحطات بالحصص الجديدة.',
          fr: 'Consultez les autres stations Naftal de la même wilaya ou vérifiez à nouveau après réapprovisionnement.',
        },
      },
    ],
  },

  // 21. takwin-registration
  {
    id: 'vid-takwin',
    slug: 'takwin-registration',
    title: {
      ar: 'طريقة التسجيل في الدخول التكويني 2026 (التكوين المهني)',
      fr: 'Tutoriel : Inscription à la Rentrée Formation Professionnelle 2026 (Takwin)',
    },
    description: {
      ar: 'شرح مرئي رسمي لطريقة التسجيل في الدخول التكويني 2026 وخدمات وزارة التكوين والتعليم المهنيين عبر منصة takwin.dz/Offersinscription، استعراض التخصصات المتاحة في المراكز والمعاهد حسب الولاية، وطباعة استمارة المترشح.',
      fr: 'Tutoriel vidéo officiel expliquant comment s’inscrire à la rentrée de la formation professionnelle 2026 sur takwin.dz/Offersinscription, consulter les spécialités disponibles par wilaya et imprimer votre fiche de préinscription.',
    },
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1967640217271523&show_text=false',
    watchUrl: 'https://www.facebook.com/reel/1967640217271523',
    thumbnailUrl: 'https://picsum.photos/seed/takwin/800/450',
    platform: 'facebook',
    duration: '02:30',
    category: {
      ar: 'التكوين والتعليم المهنيين',
      fr: 'Formation Professionnelle 2026',
    },
    officialUrl: 'https://takwin.dz/Offersinscription',
    relatedGuidePath: 'process/takwin',
    relatedGuideLabel: {
      ar: 'دليل التسجيل في التكوين المهني 2026 والملف المطلوب',
      fr: 'Guide complet des inscriptions Takwin 2026',
    },
    guideParagraphs: {
      ar: [
        'يعرض هذا الفيديو الإرشادي خطوات التسجيل الإلكتروني للالتحاق بمراكز التكوين المهني والتمهين (CFPA) والمعاهد الوطنية المتخصصة (INSFP) لدورتي 2026 عبر بوابة وزارة التكوين والتعليم المهنيين.',
        'يبرز الشرح سهولة البحث عن عروض التكوين المفتوحة حسب كل ولاية، المستوى الدراسي المطلوب، ونمط التكوين المرغوب بين التكوين الإقامي الحضوري، التمهين في المؤسسات، أو التكوين عن بعد.',
        'في نهاية التسجيل، يوضح المقطع ضرورة استخراج وطباعة استمارة الرغبات للالتحاق بأيام التوجيه والانتقاء وتقديم الملف الإداري لدى المؤسسة المستقبلة.'
      ],
      fr: [
        'Cette vidéo guide les futurs stagiaires et apprentis à travers les étapes de préinscription en ligne aux centres (CFPA) et instituts nationaux (INSFP) pour les rentrées 2026 sur le portail du Ministère de la Formation Professionnelle.',
        'Elle met en avant les filtres pratiques permettant de cibler les spécialités disponibles par wilaya, niveau scolaire et dispositif (résidentiel, apprentissage ou à distance).',
        'La séquence conclut sur le téléchargement de la fiche de vœux, indispensable lors du dépôt du dossier administratif et de l’entretien d’orientation.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'ولوج بوابة عروض التكوين الرسمية عبر takwin.dz/Offersinscription.',
        fr: 'Ouvrir le portail des offres sur takwin.dz/Offersinscription.',
      },
      {
        ar: 'تحديد الولاية، المستوى الدراسي، ونمط التكوين (حضوري، تمهين، أو عن بعد).',
        fr: 'Filtrer par wilaya, niveau scolaire et mode de formation souhaité.',
      },
      {
        ar: 'إدخال البيانات الشخصية واختيار حتى 3 رغبات وتخصصات متاحة.',
        fr: 'Saisir votre état civil et classer jusqu’à 3 vœux de spécialités.',
      },
      {
        ar: 'طباعة الاستمارة الإلكترونية وحضور أيام الانتقاء والتوجيه في المركز المختار.',
        fr: 'Imprimer l’attestation et déposer le dossier lors des journées d’orientation.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل التسجيل عبر takwin.dz مفتوح لمتعلمي التمهين والتكوين عن بعد؟',
          fr: 'L’inscription sur takwin.dz couvre-t-elle l’apprentissage et le distanciel ?',
        },
        answer: {
          ar: 'نعم، تجمع البوابة كافة أنماط التكوين بما فيها الإقامي الحضوري، التمهين، التكوين عن بعد، والدروس المسائية.',
          fr: 'Oui, la plateforme centralise le résidentiel, l’apprentissage, la formation à distance et les cours du soir.',
        },
      },
      {
        question: {
          ar: 'كم رغبة يمكنني ترتيبها في استمارة الدخول التكويني 2026؟',
          fr: 'Combien de vœux peut-on saisir lors de la préinscription ?',
        },
        answer: {
          ar: 'يسمح النظام للمترشح باختيار وترتيب حتى 3 رغبات وتخصصات حسب الأولوية والمستوى الدراسي.',
          fr: 'Le portail autorise jusqu’à 3 choix classés par ordre de préférence selon votre niveau scolaire.',
        },
      },
      {
        question: {
          ar: 'هل التسجيل في مراكز التكوين المهني العمومية مجاني؟',
          fr: 'La formation dans les établissements publics CFPA et INSFP est-elle gratuite ?',
        },
        answer: {
          ar: 'نعم، التعليم والتكوين المهنيان في كافة المؤسسات العمومية بالجزائر مجاني بالكامل مع توفير نظام المنحة أو التمهين المأجور.',
          fr: 'Oui, l’ensemble des formations publiques est totalement gratuit, avec possibilité de bourse ou de présalaire en apprentissage.',
        },
      },
    ],
  },
];
