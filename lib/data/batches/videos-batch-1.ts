import { VideoItem } from '../../types';

export const batch1Videos: VideoItem[] = [
  // 12. apostille-registration
  {
    id: 'vid-apostille',
    slug: 'apostille-registration',
    title: {
      ar: 'طريقة التسجيل في المنصة الوطنية الرقمية للأبوستيل (Apostille DZ)',
      fr: 'Tutoriel : Inscription sur la Plateforme Nationale e-Apostille DZ',
    },
    description: {
      ar: 'شرح مرئي رسمي خطوة بخطوة لطريقة التسجيل في المنصة الوطنية الرقمية للأبوستيل (apostille.hcn.dz)، تحميل الوثائق المراد تصديقها إلكترونيا بصيغة PDF، تسديد الطابع الجبائي عن بعد، واستخراج شهادة الأبوستيل الموثقة برمز التحقق QR دون تنقل.',
      fr: 'Tutoriel vidéo officiel expliquant pas à pas comment créer votre compte sur la plateforme nationale e-Apostille (apostille.hcn.dz), déposer vos actes officiels au format PDF, régler le timbre électronique et télécharger le certificat authentifié par QR Code.',
    },
    videoUrl: 'https://www.youtube.com/embed/Abph3zC5gZA',
    watchUrl: 'https://www.youtube.com/watch?v=Abph3zC5gZA',
    thumbnailUrl: 'https://img.youtube.com/vi/Abph3zC5gZA/hqdefault.jpg',
    platform: 'youtube',
    duration: '04:15',
    category: {
      ar: 'الأبوستيل والتصديق الرقمي',
      fr: 'Légalisation & e-Apostille',
    },
    officialUrl: 'https://apostille.hcn.dz/',
    relatedGuidePath: 'process/apostille',
    relatedGuideLabel: {
      ar: 'دليل إجراءات منصة الأبوستيل والملف المطلوب',
      fr: 'Guide complet des démarches e-Apostille',
    },
    guideParagraphs: {
      ar: [
        'يوضح هذا الفيديو الرسمي المسار الكامل للاستفادة من المنصة الوطنية الرقمية للأبوستيل التي أشرفت على تطويرها المحافظة السامية للرقمنة بالتعاون مع وزارة الشؤون الخارجية، لوضع حد للتنقل إلى المكاتب المركزية لتصديق الوثائق الموجهة إلى الخارج.',
        'يستعرض الشرح المرئي المراحل العملية بدءا من فتح حساب المواطن باستخدام رقم التعريف الوطني NIN، اختيار نوع الوثيقة (عقود الحالة المدنية، السوابق القضائية، الشهادات الجامعية)، وتحديد الدولة المستقبلة ضمن اتفاقية لاهاي.',
        'كما يبين الفيديو كيفية الدفع الإلكتروني الآمن بواسطة البطاقة الذهبية أو بطاقة CIB ثم تحميل الوثيقة المصادق عليها والمزودة بختم الأبوستيل الإلكتروني ورمز التحقق QR في مدة وجيزة.'
      ],
      fr: [
        'Cette vidéo explicative présente le parcours intégral sur la plateforme nationale e-Apostille pilotée par le Haut-Commissariat à la Numérisation et le Ministère des Affaires Étrangères afin d’éviter les déplacements physiques pour la légalisation des documents destinés à l’étranger.',
        'Vous y découvrirez l’ouverture de votre espace citoyen avec le numéro NIN, la sélection de la catégorie d’acte (état civil, casier judiciaire, diplôme universitaire) et la désignation du pays signataire de la Convention de La Haye.',
        'Le tutoriel détaille enfin le règlement électronique sécurisé par carte Edahabia ou CIB ainsi que le téléchargement du certificat e-Apostille doté d’un QR Code vérifiable instantanément à l’international.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'ولوج البوابة الرسمية apostille.hcn.dz وإنشاء حساب شخصي برقم التعريف الوطني NIN.',
        fr: 'Ouvrir apostille.hcn.dz et créer votre espace citoyen avec le numéro NIN.',
      },
      {
        ar: 'تحديد تصنيف الوثيقة، الهيئة المصدرة، وبلد الوجهة المنضم لاتفاقية لاهاي.',
        fr: 'Choisir la catégorie de document, l’autorité source et le pays de destination.',
      },
      {
        ar: 'رفع نسخة رقمية واضحة بصيغة PDF ممهورة بالختم الرسمي للمصلحة المصدرة.',
        fr: 'Téléverser un scan PDF haute qualité portant le sceau officiel d’origine.',
      },
      {
        ar: 'دفع رسم الطابع الجبائي إلكترونيا بالبطاقة الذهبية أو CIB وتحميل الشهادة برمز QR.',
        fr: 'Régler le timbre fiscal via Edahabia/CIB et récupérer le certificat muni du QR Code.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي الميزة الرئيسية لمنصة الأبوستيل الرقمية المشروحة في الفيديو؟',
          fr: 'Quel est le principal avantage du service e-Apostille présenté dans la vidéo ?',
        },
        answer: {
          ar: 'تمكن المواطن من طلب التصديق ودفع الرسوم واستلام شهادة الأبوستيل إلكترونيا عن بعد دون السفر إلى مصالح التصديق المركزية.',
          fr: 'Il permet d’accomplir toute la procédure de légalisation, du dépôt au paiement jusqu’au téléchargement final, 100 % à distance.',
        },
      },
      {
        question: {
          ar: 'هل يغني ختم الأبوستيل عن التصديق لدى السفارات للدول الأعضاء في اتفاقية لاهاي؟',
          fr: 'L’e-Apostille dispense-t-elle de la légalisation consulaire dans les pays membres ?',
        },
        answer: {
          ar: 'نعم، يعترف بختم الأبوستيل مباشرة لدى كافة الدول الموقعة على اتفاقية لاهاي دون حاجة لإجراءات تصديق إضافية.',
          fr: 'Oui, l’Apostille est directement reconnue par l’ensemble des États parties à la Convention de La Haye.',
        },
      },
      {
        question: {
          ar: 'ما هي صيغة الملف المطلوبة عند رفع الوثيقة في apostille.hcn.dz؟',
          fr: 'Quel format de fichier faut-il utiliser pour déposer une pièce ?',
        },
        answer: {
          ar: 'يشترط مسح الوثيقة الأصلية المختومة بجودة عالية وحفظها بصيغة PDF واضحة قبل رفعها في الاستمارة.',
          fr: 'Les documents originaux dûment cachetés doivent être numérisés lisiblement et importés au format PDF.',
        },
      },
    ],
  },

  // 13. arpce-777
  {
    id: 'vid-arpce-777',
    slug: 'arpce-777',
    title: {
      ar: 'برنامج جيل لجيل 777 للإدماج الرقمي وتطوير المهارات (ARPCE)',
      fr: 'Programme d’Inclusion Numérique Jil 777 (ARPCE / MPT)',
    },
    description: {
      ar: 'فيديو تعريفي رسمي يشرح مبادرة برنامج جيل لجيل 777 للتعلم والإدماج الرقمي وتطوير المهارات حضوريا وعن بعد في الجزائر، تحت إشراف سلطة ضبط البريد والاتصالات الإلكترونية ARPCE ووزارة البريد والمواصلات السلكية واللاسلكية.',
      fr: 'Vidéo officielle présentant le programme national d’inclusion numérique « Jil 777 » pour l’apprentissage digital et le développement des compétences en présentiel et à distance, encadré par l’ARPCE et le Ministère de la Poste et des Télécommunications.',
    },
    videoUrl: 'https://www.youtube.com/embed/opO1dEXGFDw',
    watchUrl: 'https://www.youtube.com/watch?v=opO1dEXGFDw',
    thumbnailUrl: 'https://img.youtube.com/vi/opO1dEXGFDw/hqdefault.jpg',
    platform: 'youtube',
    duration: '03:45',
    category: {
      ar: 'الاتصالات والإدماج الرقمي',
      fr: 'Inclusion Numérique & Télécoms',
    },
    officialUrl: 'https://777.mpt.gov.dz/calendar#cal-board',
    relatedGuidePath: 'process/arpce',
    relatedGuideLabel: {
      ar: 'دليل التسجيل في لوحة مواعيد جيل لجيل 777',
      fr: 'Guide d’inscription au calendrier Jil 777',
    },
    guideParagraphs: {
      ar: [
        'يسلط هذا الفيديو الضوء على أهداف المبادرة الوطنية "جيل لجيل 777"، المصممة لجسر الفجوة الرقمية ومرافقة المواطنين من عمر 7 سنوات إلى 77 سنة نحو استخدام آمن وفعال للتكنولوجيات الحديثة والخدمات الحكومية الرقمية.',
        'يشرح العرض كيف تجمع المبادرة بين الورشات الحضورية في الفضاءات المجهزة عبر الولايات والحصص الافتراضية التفاعلية عن بعد، في محاور تشمل حماية المعطيات الشخصية، الأمن السيبراني، والدفع الإلكتروني.',
        'بعد مشاهدة الفيديو، يمكنك الانتقال مباشرة إلى لوحة المواعيد على 777.mpt.gov.dz/calendar#cal-board لاختيار الورشة وحجز مقعدك مجانا.'
      ],
      fr: [
        'Cette vidéo met en avant l’initiative nationale « Jil 777 », conçue pour accompagner toutes les générations (de 7 à 77 ans) vers une maîtrise sûre et autonome des outils numériques et des services publics en ligne.',
        'La présentation détaille l’articulation entre les ateliers de proximité organisés à travers les wilayas et les séances interactives à distance couvrant la cybersécurité, la protection des données et le paiement électronique.',
        'Après le visionnage, accédez directement au calendrier officiel 777.mpt.gov.dz/calendar#cal-board pour réserver gratuitement votre séance.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'التعرف على رؤية برنامج جيل لجيل 777 لتطوير المهارات الرقمية من سن 7 إلى 77 سنة.',
        fr: 'Découvrir les objectifs du programme Jil 777 ouvert aux participants de 7 à 77 ans.',
      },
      {
        ar: 'استكشاف محاور التكوين: الأمن السيبراني، الدفع الإلكتروني، والخدمات الإدارية الرقمية.',
        fr: 'Explorer les modules clés : cybersécurité citoyenne, e-paiement et téléservices.',
      },
      {
        ar: 'الدخول إلى لوحة الرزنامة 777.mpt.gov.dz/calendar#cal-board لاختيار الدورة الحضورية أو عن بعد.',
        fr: 'Sélectionner une séance en présentiel ou à distance sur 777.mpt.gov.dz/calendar#cal-board.',
      },
      {
        ar: 'تأكيد التسجيل المجاني بالبريد الإلكتروني لحضور الورشة التطبيقية.',
        fr: 'Valider l’inscription gratuite par e-mail pour recevoir les accès de session.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'لماذا سمي البرنامج بمبادرة جيل لجيل 777؟',
          fr: 'Pourquoi l’initiative s’appelle-t-elle Jil 777 ?',
        },
        answer: {
          ar: 'يرمز الاسم إلى شمولية التدريب الرقمي لجميع الأجيال والمراحل العمرية من سن 7 إلى 77 سنة عبر مختلف ولايات الوطن.',
          fr: 'Ce nom symbolise l’accessibilité de la formation numérique pour toutes les générations, de 7 à 77 ans.',
        },
      },
      {
        question: {
          ar: 'هل يمكن المشاركة في دورات البرنامج مجانا وعن بعد؟',
          fr: 'Les ateliers 777 sont-ils gratuits et accessibles à distance ?',
        },
        answer: {
          ar: 'نعم، كافة الدورات الحضورية والحصص عن بعد في برنامج 777 مجانية ومفتوحة لجميع المواطنين.',
          fr: 'Oui, l’ensemble des séances en présentiel comme en visioconférence est entièrement gratuit.',
        },
      },
      {
        question: {
          ar: 'أين أجد جدول مواعيد الورشات القادمة لمبادرة 777؟',
          fr: 'Où consulter le planning des prochains ateliers 777 ?',
        },
        answer: {
          ar: 'ينشر الجدول المحدث باستمرار على الرابط الرسمي 777.mpt.gov.dz/calendar#cal-board.',
          fr: 'Le planning actualisé est publié en permanence sur 777.mpt.gov.dz/calendar#cal-board.',
        },
      },
    ],
  },

  // 14. awlyaa-registration
  {
    id: 'vid-awlyaa',
    slug: 'awlyaa-registration',
    title: {
      ar: 'طريقة التسجيل في فضاء الأولياء 2026 ومتابعة الأبناء دراسيا',
      fr: 'Tutoriel : Inscription sur l’Espace Parents Awlyaa 2026',
    },
    description: {
      ar: 'شرح مرئي تطبيقي لطريقة التسجيل في فضاء الأولياء 2026 عبر المنصة الرسمية لوزارة التربية الوطنية (awlyaa.education.dz/login)، خطوات إضافة الأبناء برقم التعريف المدرسي ذي الـ 16 رقما، وتفعيل الحساب عبر مدير المؤسسة التربوية لمتابعة النقاط والغيابات.',
      fr: 'Tutoriel vidéo pratique montrant comment créer un compte parent sur l’Espace Awlyaa 2026 (awlyaa.education.dz/login), rattacher vos enfants via l’identifiant scolaire à 16 chiffres et faire valider l’attestation auprès du directeur pour suivre notes et absences.',
    },
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D485913154242019&show_text=false',
    watchUrl: 'https://www.facebook.com/watch/?v=485913154242019',
    thumbnailUrl: 'https://picsum.photos/seed/awlyaa/800/450',
    platform: 'facebook',
    duration: '04:05',
    category: {
      ar: 'التربية والتعليم الوطني',
      fr: 'Éducation Nationale & Scolarité',
    },
    officialUrl: 'https://awlyaa.education.dz/login',
    relatedGuidePath: 'process/awlyaa-process',
    relatedGuideLabel: {
      ar: 'الدليل المكتوب للتسجيل في فضاء الأولياء 2026',
      fr: 'Guide étape par étape Espace Awlyaa 2026',
    },
    guideParagraphs: {
      ar: [
        'يرافق هذا الفيديو الأولياء خطوة بخطوة أثناء إنشاء حسابهم الجديد على بوابة فضاء الأولياء التابعة لوزارة التربية الوطنية لموسم 2026، موضحا كل الحقول المطلوبة لتفادي أخطاء التسجيل المتكررة.',
        'يركز الشرح التطبيقي على خطوة ربط التلاميذ المتمدرسين باستخدام رقم التعريف المدرسي المكون من 16 رقما وتحديد الولاية والمؤسسة التعليمية بدقة سواء في الابتدائي أو المتوسط أو الثانوي.',
        'يوضح المقطع في ختامه ضرورة طباعة استمارة التسجيل وتقديمها لمدير المؤسسة التربوية لإجراء المصادقة النهائية التي تفعل خدمة تحميل كشوف النقاط ومتابعة الغيابات إلكترونيا.'
      ],
      fr: [
        'Ce tutoriel vidéo accompagne les parents pas à pas dans la création de leur compte sur le portail Awlyaa du Ministère de l’Éducation Nationale pour l’année 2026, en évitant les erreurs de saisie courantes.',
        'L’explication met l’accent sur le rattachement de chaque élève à l’aide de son numéro d’identification scolaire à 16 chiffres et de la sélection exacte de son établissement dans les trois cycles.',
        'Enfin, la vidéo rappelle l’étape essentielle consistant à imprimer le formulaire d’inscription et à le déposer auprès du chef d’établissement pour activer l’accès aux bulletins et au suivi scolaire.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'ولوج awlyaa.education.dz/login وفتح استمارة إنشاء حساب ولي جديد.',
        fr: 'Ouvrir awlyaa.education.dz/login et lancer l’inscription d’un compte parent.',
      },
      {
        ar: 'إدخال البريد الإلكتروني النشط، رقم NIN، وبيانات الحالة المدنية للولي.',
        fr: 'Saisir l’e-mail actif, le numéro NIN et les coordonnées d’état civil du parent.',
      },
      {
        ar: 'إضافة الأبناء باختيار المؤسسة التربوية وإدخال رقم التعريف المدرسي (16 رقما).',
        fr: 'Rattacher chaque enfant via son établissement et son identifiant scolaire à 16 chiffres.',
      },
      {
        ar: 'طباعة الاستمارة وإيداعها لدى أمانة مدير المؤسسة لتفعيل الحساب فوريا.',
        fr: 'Imprimer l’attestation et la remettre au directeur d’établissement pour validation.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن متابعة الفيديو أثناء القيام بالتسجيل لأول مرة؟',
          fr: 'Peut-on suivre la vidéo en temps réel lors de la première inscription ?',
        },
        answer: {
          ar: 'نعم، يعرض الفيديو الواجهة الفعلية لمنصة awlyaa.education.dz بالترتيب الدقيق للحقول من البداية حتى طباعة الوصل.',
          fr: 'Oui, la vidéo montre les écrans réels de la plateforme awlyaa.education.dz dans l’ordre exact de la démarche.',
        },
      },
      {
        question: {
          ar: 'من أين أحصل على رقم التعريف المدرسي ذي الـ 16 رقما؟',
          fr: 'Où se trouve l’identifiant scolaire à 16 chiffres utilisé dans le tutoriel ?',
        },
        answer: {
          ar: 'يكون مدونا في أعلى الشهادة المدرسية أو كشف النقاط الفصلي، كما يمكن طلبه من أمانة المدرسة.',
          fr: 'Il est imprimé sur les certificats de scolarité et bulletins trimestriels ou remis par le secrétariat de l’école.',
        },
      },
      {
        question: {
          ar: 'كم يستغرق ظهور نقاط التلميذ بعد تسليم الاستمارة للمدير؟',
          fr: 'Sous quel délai les notes apparaissent-elles après dépôt du formulaire ?',
        },
        answer: {
          ar: 'تظهر النتائج والغيابات مباشرة فور قيام مدير المؤسسة بتأكيد طلب الربط عبر نظام المؤسسة الرقمي.',
          fr: 'Dès que le directeur valide votre attestation dans le système de gestion scolaire, l’accès aux résultats est immédiat.',
        },
      },
    ],
  },

  // 15. dronet.mdn (NEW ITEM!)
  {
    id: 'vid-dronet-mdn',
    slug: 'dronet.mdn',
    title: {
      ar: 'تعرف عن المركز الوطني لمنظومات الطائرات بدون طيار على المتن (MDN)',
      fr: 'Présentation du Centre National des Systèmes d’Aéronefs Sans Pilote à Bord (CNSAPB / MDN)',
    },
    description: {
      ar: 'شرح مرئي رسمي للتعريف بالمركز الوطني لمنظومات الطائرات بدون طيار على المتن (CNSAPB) التابع لوزارة الدفاع الوطني والبوابة الرقمية dronet.mdn.dz: تنظيم نشاطات الدرون وفق المرسوم الرئاسي 21-285، التصريح الإجباري بالأجهزة، رخص الاستيراد والتحليق، وحجز المواعيد إلكترونيا.',
      fr: 'Vidéo officielle présentant le Centre National des Systèmes d’Aéronefs Sans Pilote à Bord (CNSAPB) relevant du Ministère de la Défense Nationale et son portail dronet.mdn.dz : déclaration obligatoire des drones, agréments, autorisations d’acquisition/vol (Décret 21-285) et prise de rendez-vous en ligne.',
    },
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/4133914470240754&show_text=false',
    watchUrl: 'https://www.facebook.com/reel/4133914470240754',
    thumbnailUrl: 'https://picsum.photos/seed/dronetmdn/800/450',
    platform: 'facebook',
    duration: '02:45',
    category: {
      ar: 'الدفاع والتنظيم الجوي للدرون',
      fr: 'Réglementation Drones & CNSAPB',
    },
    officialUrl: 'https://dronet.mdn.dz/ar',
    relatedGuidePath: 'sectors/dronet.mdn',
    relatedGuideLabel: {
      ar: 'دليل بوابة المركز الوطني لمنظومات الطائرات بدون طيار',
      fr: 'Fiche complète du portail dronet.mdn.dz',
    },
    guideParagraphs: {
      ar: [
        'يعرف هذا الفيديو الرسمي بمهام المركز الوطني لمنظومات الطائرات بدون طيار على المتن (CNSAPB)، المنشأ بموجب المرسوم الرئاسي رقم 21-285 المؤرخ في 13 جويلية 2021، كجهة مرجعية وحيدة لتنظيم وضبط كافة النشاطات المتعلقة بالدرون في الجزائر.',
        'يبرز الشرح المرئي دور البوابة الرقمية الرسمية dronet.mdn.dz في رقمنة ملفات التصريح بالحيازة، طلبات الشراء والاستيراد، منح الاعتمادات المهنية وتكوين الطيارين عن بعد، إلى جانب خدمة حجز المواعيد المسبقة.',
        'للاطلاع على قائمة الوثائق المطلوبة لكل نوع من الطلبات وحجز موعد إيداع الملف أو المعاينة التقنية، انتقل إلى دليل الخدمة المرتبط في بوابتنا أو مباشرة نحو بوابة المركز.'
      ],
      fr: [
        'Cette vidéo officielle présente les missions du Centre National des Systèmes d’Aéronefs Sans Pilote à Bord (CNSAPB), institué par le Décret présidentiel n° 21-285 du 13 juillet 2021 sous tutelle du Ministère de la Défense Nationale.',
        'Elle expose l’architecture des téléservices disponibles sur dronet.mdn.dz : déclaration obligatoire de détention, demandes d’autorisation d’acquisition ou d’importation, agréments d’exploitation et formation des télépilotes, ainsi que la prise de rendez-vous en ligne.',
        'Pour consulter la liste complète des justificatifs exigés et préparer votre rendez-vous de conformité technique, accédez à la fiche service dédiée ou directement au portail du Centre.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'التعرف على الإطار القانوني للمرسوم الرئاسي 21-285 المنظم للطائرات بدون طيار.',
        fr: 'Comprendre le cadre réglementaire du Décret présidentiel n° 21-285 sur les drones.',
      },
      {
        ar: 'استعراض خدمات التصريح بالأجهزة المقتناة، التراخيص الجمركية، ورخص الاستغلال المهني.',
        fr: 'Découvrir les démarches de déclaration, dédouanement et agrément professionnel.',
      },
      {
        ar: 'حجز موعد رسمي مسبق عبر بوابة المواعيد dronet.mdn.dz/ar/rendezvous قبل التقدم للمركز.',
        fr: 'Prendre un rendez-vous préalable sur dronet.mdn.dz/ar/rendezvous avant tout dépôt.',
      },
      {
        ar: 'التواصل الرسمي عند الاستفسار عبر البريد المعتمد CONTACT-CNSAPB@MDN.DZ.',
        fr: 'Contacter le guichet officiel via CONTACT-CNSAPB@MDN.DZ pour toute précision.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي الجهة التي تشرف على المركز الوطني لمنظومات الطائرات بدون طيار؟',
          fr: 'De quelle tutelle relève le Centre National des Systèmes d’Aéronefs Sans Pilote à Bord ?',
        },
        answer: {
          ar: 'يشرف عليه وزارة الدفاع الوطني، وهو الهيئة الوطنية الوحيدة المخولة بضبط وتصريح واعتماد منظومات الطائرات بدون طيار في الجزائر وفق المرسوم الرئاسي 21-285.',
          fr: 'Le CNSAPB relève du Ministère de la Défense Nationale et constitue l’unique autorité habilitée à réguler les drones en Algérie.',
        },
      },
      {
        question: {
          ar: 'هل التصريح بحيازة طائرة بدون طيار إجباري لجميع الملاك في الجزائر؟',
          fr: 'La déclaration de détention d’un drone est-elle obligatoire en Algérie ?',
        },
        answer: {
          ar: 'نعم، يلزم التنظيم القانوني كل حائز أو مشتري أو مشغل لطائرة بدون طيار بالتصريح بها وحجز موعد لتسوية وضعيتها لدى مصالح المركز.',
          fr: 'Oui, tout détenteur ou exploitant doit obligatoirement déclarer son appareil et régulariser sa situation auprès du CNSAPB.',
        },
      },
      {
        question: {
          ar: 'كيف يتم حجز موعد لتقديم ملف أو جهاز لدى المركز؟',
          fr: 'Comment prendre rendez-vous auprès du CNSAPB ?',
        },
        answer: {
          ar: 'يتم الحجز إلكترونيا مسبقا من خلال بوابة المواعيد الرسمية dronet.mdn.dz/ar/rendezvous دون قبول الملفات دون موعد مسبق.',
          fr: 'La réservation s’effectue exclusivement en ligne via le module officiel dronet.mdn.dz/ar/rendezvous.',
        },
      },
    ],
  },

  // 16. e-declaration-registration
  {
    id: 'vid-edeclaration',
    slug: 'e-declaration-registration',
    title: {
      ar: 'طريقة التصريح بضياع الوثائق عن بعد (المديرية العامة للأمن الوطني DGSN)',
      fr: 'Tutoriel : Comment Déclarer la Perte de Documents en Ligne (DGSN)',
    },
    description: {
      ar: 'شرح مرئي رسمي لطريقة التسجيل والتصريح الإلكتروني بضياع الوثائق الشخصية والرسمية عبر بوابة المديرية العامة للأمن الوطني (dgsn.dz/e-declaration/)، مع توضيح البيانات اللازمة واستخراج الوصل لبدء إجراءات التجديد.',
      fr: 'Tutoriel vidéo officiel détaillant l’enregistrement et la soumission d’une déclaration de perte de pièces administratives sur le portail de la Police Algérienne (dgsn.dz/e-declaration/), jusqu’à l’obtention du récépissé de renouvellement.',
    },
    videoUrl: 'https://www.youtube.com/embed/PWTHYIOMKgE',
    watchUrl: 'https://www.youtube.com/watch?v=PWTHYIOMKgE',
    thumbnailUrl: 'https://img.youtube.com/vi/PWTHYIOMKgE/hqdefault.jpg',
    platform: 'youtube',
    duration: '02:55',
    category: {
      ar: 'الأمن الوطني DGSN',
      fr: 'Sûreté Nationale & État Civil',
    },
    officialUrl: 'https://www.dgsn.dz/e-declaration/',
    relatedGuidePath: 'process/e-declaration',
    relatedGuideLabel: {
      ar: 'دليل خدمة التصريح الإلكتروني بالضياع لدى الشرطة',
      fr: 'Guide complet de la e-Déclaration de perte DGSN',
    },
    guideParagraphs: {
      ar: [
        'يستعرض هذا الفيديو التوضيحي التابع للمديرية العامة للأمن الوطني خطوات الاستفادة من خدمة التصريح بضياع الوثائق عن بعد، وهي خدمة رقمية مجانية متاحة طيلة أيام الأسبوع لمساعدة المواطنين عند فقدان وثائقهم.',
        'يشاهد المستخدم عمليا طريقة اختيار الولاية ومقر الأمن الوطني القريب، إدخال بيانات الحالة المدنية والرقم الوطني NIN، ثم تحديد نوع الوثيقة المفقودة وتاريخ ومكان الضياع.',
        'يذكر الشرح المرئي بأن هذه البوابة مخصصة حصريا لحالات الضياع العرضي وتسمح بالحصول الفوري على وصل المتابعة، أما في حالات السرقة فيتوجب التوجه مباشرة لمركز الشرطة لتحرير محضر رسمي.'
      ],
      fr: [
        'Cette démonstration officielle de la Direction Générale de la Sûreté Nationale illustre l’utilisation du téléservice gratuit de déclaration de perte de documents, accessible 24h/24 et 7j/7 sans déplacement initial au commissariat.',
        'La vidéo détaille le choix de la wilaya et de la sûreté compétente, la saisie de votre identité avec numéro NIN, la sélection de la pièce perdue (CNI, passeport, permis, carte grise) ainsi que les circonstances de la perte.',
        'Elle rappelle enfin l’édition immédiate du récépissé nécessaire pour le renouvellement en mairie tout en soulignant que tout vol avéré exige un dépôt de plainte en personne.'
      ],
    },
    stepsHighlight: [
      {
        ar: 'الدخول إلى منصة التصريح بالضياع الرسمية عبر dgsn.dz/e-declaration/.',
        fr: 'Ouvrir le formulaire officiel de la Police Algérienne sur dgsn.dz/e-declaration/.',
      },
      {
        ar: 'تحديد الولاية ومقر الأمن الحضري أو الدائرة المختصة ومعلومات المصرح.',
        fr: 'Sélectionner la wilaya, le commissariat compétent et saisir votre état civil.',
      },
      {
        ar: 'اختيار نوع الوثيقة المفقودة وإدخال رقمها (إن توفر) مع تاريخ ومكان الضياع.',
        fr: 'Indiquer le type de document perdu, son numéro éventuel, le lieu et la date de perte.',
      },
      {
        ar: 'تأكيد الإرسال وحفظ وصل التصريح لاستخراج نسخة بدل ضائع.',
        fr: 'Valider la télédéclaration et télécharger le récépissé de renouvellement.',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل وصل التصريح بالضياع الإلكتروني معترف به لدى البلديات لتجديد الوثائق؟',
          fr: 'Le récépissé généré en ligne est-il accepté par les APC pour renouveler un titre ?',
        },
        answer: {
          ar: 'نعم، وصل التصريح المسجل عبر بوابة الأمن الوطني معتمد رسميا لمباشرة ملفات تجديد بطاقة التعريف أو جواز السفر أو رخصة السياقة.',
          fr: 'Oui, l’attestation émise sur le portail DGSN est reconnue pour instruire les demandes de duplicata.',
        },
      },
      {
        question: {
          ar: 'هل الخدمة مخصصة للسرقة أيضا أم للضياع فقط؟',
          fr: 'Ce téléservice couvre-t-il également les cas de vol de documents ?',
        },
        answer: {
          ar: 'الخدمة مخصصة لحالات الضياع فقط؛ عند السرقة يجب التبليغ حضوريا في مقر الشرطة أو الدرك الوطني.',
          fr: 'Non, il s’applique uniquement à la perte accidentelle ; un vol impose une plainte physique au commissariat.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تسجيل التصريح ليلا أو في أيام العطل؟',
          fr: 'Puis-je effectuer la e-déclaration la nuit ou le week-end ?',
        },
        answer: {
          ar: 'نعم، المنصة الرقمية تشتغل على مدار 24 ساعة وطوال أيام الأسبوع بما فيها العطل الرسمية.',
          fr: 'Oui, le portail fonctionne en continu 24h/24, week-ends et jours fériés compris.',
        },
      },
    ],
  },
];
