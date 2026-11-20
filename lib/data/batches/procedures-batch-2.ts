import { ProcedureItem, RichGuideContent } from '../../types';

export const batch2Procedures: ProcedureItem[] = [
  // 9. idlaa
  {
    id: 'proc-idlaa',
    slug: 'idlaa',
    title: {
      ar: 'خدمة الإدلاء بشهادة أو تبليغ عن بعد مع الشرطة الجزائرية (DGSN)',
      fr: 'Témoignage & Signalement Citoyen en Ligne (Police Algérienne DGSN)',
    },
    sectorId: 'dgsn',
    responsibleEntity: {
      ar: 'المديرية العامة للأمن الوطني (DGSN)',
      fr: 'Direction Générale de la Sûreté Nationale (DGSN)',
    },
    description: {
      ar: 'الدليل الكامل لاستخدام خدمة الإدلاء بشهادة عن بعد على البوابة الرسمية للمديرية العامة للأمن الوطني (DGSN)، المخصصة لتمكين المواطنين والشهود من تقديم إفاداتهم أو التبليغ عن الحوادث والوقائع التي عاينوها بأمان وسرية تامة عبر الإنترنت دون تنقل مبدئي.',
      fr: 'Guide complet du téléservice « Idlaa bi Chahada » de la Direction Générale de la Sûreté Nationale (DGSN) permettant aux citoyens et témoins de transmettre en toute confidentialité un témoignage ou un signalement factuel en ligne.',
    },
    officialLink: 'https://www.dgsn.dz/?-%D8%A5%D8%AF%D9%84%D8%A7%D8%A1-%D8%A8%D8%B4%D9%87%D8%A7%D8%AF%D8%A9,583-',
    targetAudience: {
      ar: 'المواطنون والشهود الراغبون في الإدلاء بإفادات أو تبليغات أمنية ومرورية',
      fr: 'Citoyens et témoins souhaitant signaler un fait ou apporter un témoignage',
    },
    channel: {
      ar: 'البوابة الرسمية للمديرية العامة للأمن الوطني dgsn.dz',
      fr: 'Portail officiel sécurisé de la DGSN (dgsn.dz)',
    },
    keyRequirement: {
      ar: 'تحديد الولاية، توصيف دقيق للواقعة ومكانها وزمانها، ومعطيات التواصل عند الاقتضاء',
      fr: 'Wilaya, récit précis des faits (date, heure, lieu) et coordonnées optionnelles',
    },
    estimatedDuration: {
      ar: 'إرسال فوري ومتابعة سرية على مدار 24 ساعة',
      fr: 'Transmission cryptée instantanée et traitement 24h/24',
    },
    cost: {
      ar: 'مجاني بالكامل',
      fr: '100 % Gratuit',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'فتح صفحة الإدلاء بشهادة على الموقع الرسمي للشرطة dgsn.dz',
          fr: 'Accéder à la rubrique Idlaa sur le site officiel DGSN',
        },
        detail: {
          ar: 'انتقل إلى الرابط الرسمي لخدمة الإدلاء بشهادة على بوابة المديرية العامة للأمن الوطني للوصول إلى الاستمارة المخصصة.',
          fr: 'Ouvrez la page officielle du téléservice sur dgsn.dz afin d’accéder au formulaire sécurisé de témoignage en ligne.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'تحديد الولاية والجهة الأمنية المعنية بالواقعة',
          fr: 'Choisir la wilaya et les coordonnées de référence',
        },
        detail: {
          ar: 'اختر الولاية التي وقعت بها الحادثة، وأدخل بياناتك الأساسية عند الرغبة في متابعة الاتصال مع المصالح المختصة.',
          fr: 'Sélectionnez la wilaya concernée et indiquez vos coordonnées si vous acceptez d’être recontacté par les enquêteurs.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'كتابة الشهادة وتوصيف المعطيات بدقة وموضوعية',
          fr: 'Rédiger le témoignage de façon factuelle et détaillée',
        },
        detail: {
          ar: 'اذكر تاريخ وتوقيت ومكان الواقعة، وصف الأطراف أو المركبات المعنية بأقصى قدر ممكن من الدقة، وأرفق العناصر التوضيحية المتاحة.',
          fr: 'Précisez la date, l’heure, l’adresse exacte et tout détail utile (description, immatriculation ou circonstances) de manière objective.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'الإرسال المؤمن وتأكيد وصول الإفادات لمصالح الأمن',
          fr: 'Soumettre l’envoi sécurisé aux services de sûreté',
        },
        detail: {
          ar: 'تحقق من وضوح المعلومات وأرسل الاستمارة ليتم توجيهها فورا إلى الفرق المختصة في السرية التامة، وفي الطوارئ اتصل بالرقم الأخضر 1548.',
          fr: 'Validez l’envoi crypté vers les services compétents ; en cas d’urgence immédiate sur la voie publique, composez toujours le 1548.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'ملخص دقيق وموثق للواقعة (التاريخ، التوقيت، والمكان المحدد)',
          fr: 'Récit chronologique précis (date, heure et localisation exacte)',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'رقم الهاتف أو البريد الإلكتروني لتسهيل التواصل (اختياري وفق طبيعة البلاغ)',
          fr: 'Téléphone ou e-mail de contact (facultatif selon le signalement)',
        },
        isMandatory: false,
      },
      {
        name: {
          ar: 'أي قرائن مساعدة أو أرقام ترقيم أو مراجع متصلة بالحادثة',
          fr: 'Éléments descriptifs complémentaires (références ou immatriculations)',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الهدف من خدمة الإدلاء بشهادة عن بعد التي توفرها DGSN؟',
          fr: 'À quoi sert le téléservice « Idlaa bi Chahada » de la DGSN ?',
        },
        answer: {
          ar: 'تهدف الخدمة إلى إشراك المواطن كشريك فاعل في الوقاية الأمنية وتمكين الشهود من تقديم معلومات مفيدة حول حوادث المرور أو التجاوزات عن بعد بسرعة وسرية.',
          fr: 'Ce canal sécurisé permet aux citoyens et témoins d’aider les services de police en transmettant des informations utiles sur des faits ou accidents sans se déplacer.',
        },
      },
      {
        question: {
          ar: 'هل تضمن المديرية العامة للأمن الوطني حماية وسرية هوية المبلغ؟',
          fr: 'L’identité du témoin est-elle protégée lors de l’utilisation de ce service ?',
        },
        answer: {
          ar: 'نعم، تتعهد مصالح الشرطة الجزائرية بالحماية القانونية والسرية التامة للبيانات المرسلة عبر الاستمارة الإلكترونية.',
          fr: 'Oui, la DGSN garantit la confidentialité stricte des données transmises et la protection légale des témoins.',
        },
      },
      {
        question: {
          ar: 'متى أستخدم الاستمارة الإلكترونية ومتى أتصل بالرقم 1548؟',
          fr: 'Quand utiliser le formulaire en ligne plutôt que le numéro d’urgence 1548 ?',
        },
        answer: {
          ar: 'يستخدم الرقم الأخضر 1548 أو رقم النجدة 17 في الحالات الاستعجالية التي تستدعي تدخلا ميدانيا فوريا، بينما تصلح خدمة الإدلاء بشهادة عن بعد لنقل الإفادات والشهادات التفصيلية.',
          fr: 'Composez immédiatement le 1548 ou le 17 pour toute urgence nécessitant une intervention sur place ; utilisez le formulaire en ligne pour transmettre un témoignage détaillé.',
        },
      },
      {
        question: {
          ar: 'هل يمكن التصريح بضياع الوثائق الشخصية من نفس هذه الصفحة؟',
          fr: 'Cette rubrique sert-elle aussi à déclarer la perte d’une carte d’identité ?',
        },
        answer: {
          ar: 'لا، للتصريح بضياع بطاقة التعريف أو جواز السفر أو رخصة السياقة خصصت الشرطة رابطا مستقلا هو dgsn.dz/e-declaration.',
          fr: 'Non, pour signaler la perte de vos papiers personnels, utilisez le téléservice dédié e-declaration sur dgsn.dz/e-declaration/.',
        },
      },
    ],
  },

  // 10. markabatidz
  {
    id: 'proc-markabatidz',
    slug: 'markabatidz',
    title: {
      ar: 'مركبتي DZ: حجز موعد فحص ومطابقة المركبات إلكترونيا',
      fr: 'Markabati DZ : Prise de Rendez-vous Contrôle & Conformité des Véhicules',
    },
    sectorId: 'markabatidz',
    responsibleEntity: {
      ar: 'وزارة الطاقة والمناجم (مديرية المناجم)',
      fr: 'Ministère de l’Énergie et des Mines (Direction des Mines)',
    },
    description: {
      ar: 'الدليل الكامل لحجز موعد المراقبة التقنية ومطابقة المركبات عبر المنصة الرقمية الرسمية مركبتي DZ (markabatidz.energy.gov.dz) التابعة لوزارة الطاقة والمناجم، المخصصة للسيارات المستوردة أقل من 3 سنوات، المركبات المحولة للوقود الغازي GPL، وإجراءات التسجيل لدى مهندسي المناجم مع الفيديو التوضيحي.',
      fr: 'Guide complet pour prendre rendez-vous sur la plateforme nationale Markabati DZ (markabatidz.energy.gov.dz) du Ministère de l’Énergie et des Mines : homologation des véhicules importés de moins de 3 ans, conformité GPL/Sirghaz et procès-verbaux des ingénieurs des mines, avec tutoriel vidéo.',
    },
    officialLink: 'https://markabatidz.energy.gov.dz/',
    videoEmbedUrl: 'https://www.youtube.com/embed/GD3ymUiI2m0',
    videoWatchUrl: 'https://www.youtube.com/watch?v=GD3ymUiI2m0',
    targetAudience: {
      ar: 'مالكو السيارات المستوردة أو المعدلة والمركبات المجهزة بسيرغاز GPL',
      fr: 'Propriétaires de véhicules importés, neufs, modifiés ou équipés GPL',
    },
    channel: {
      ar: 'البوابة الرسمية markabatidz.energy.gov.dz + مركز المعاينة الولائي',
      fr: 'Portail officiel markabatidz.energy.gov.dz + contrôle des Mines en wilaya',
    },
    keyRequirement: {
      ar: 'رقم الهيكل التسلسلي (VIN)، وثيقة الجمركة Model 846 أو البطاقة الرمادية',
      fr: 'Numéro de châssis (VIN), modèle 846 douanier ou carte grise du véhicule',
    },
    estimatedDuration: {
      ar: 'حجز فوري عبر الإنترنت ومعاينة ميدانية في الموعد المحدد',
      fr: 'Réservation immédiate en ligne puis inspection au créneau choisi',
    },
    cost: {
      ar: 'حقوق الطابع الجبائي ومحضر المطابقة وفق التنظيم الساري',
      fr: 'Timbre fiscal et droits réglementaires d’homologation',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'فتح حساب المالك على منصة markabatidz.energy.gov.dz',
          fr: 'Créer votre espace utilisateur sur markabatidz.energy.gov.dz',
        },
        detail: {
          ar: 'سجل الدخول في البوابة باستخدام بيانات الهوية ورقم الهاتف والبريد الإلكتروني لتفعيل ملف مركبتك.',
          fr: 'Accédez à markabatidz.energy.gov.dz et créez votre compte propriétaire avec vos coordonnées vérifiées.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'إدخال بيانات المركبة ورقم الهيكل (VIN) ونوع الفحص',
          fr: 'Renseigner le numéro de châssis (VIN) et le motif du contrôle',
        },
        detail: {
          ar: 'أدخل الرقم التسلسلي في الهيكل المكون من 17 رمزا، الطراز، سنة الصنع، واختر سبب الفحص (مركبة مستوردة أقل من 3 سنوات، مطابقة سيرغاز، أو تغيير تقني).',
          fr: 'Saisissez les 17 caractères du VIN, la marque/modèle et choisissez le motif (importation moins de 3 ans, installation GPL ou transformation).',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'تحديد الولاية ومركز الفحص وحجز الموعد المناسب',
          fr: 'Choisir le centre de wilaya et réserver la date de visite',
        },
        detail: {
          ar: 'اختر مديرية الطاقة والمناجم لولايتك، وحدد التاريخ والساعة المتاحين من الرزنامة الرقمية للمعاينة.',
          fr: 'Sélectionnez le centre de contrôle des Mines de votre wilaya et validez un créneau disponible sur le calendrier.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'طباعة الاستدعاء وإحضار المركبة للفحص واستلام المحضر',
          fr: 'Télécharger la convocation et présenter le véhicule au rendez-vous',
        },
        detail: {
          ar: 'اطبع وصل الموعد وتوجه بالمركبة والوثائق الأصلية في الوقت المحدد لإجراء المعاينة من مهندس المناجم واستلام محضر المطابقة.',
          fr: 'Présentez la convocation imprimée et l’ensemble des originaux lors de l’inspection technique pour obtenir votre procès-verbal.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'بطاقة التعريف الوطنية للمالك أو توكيل موثق عند الاقتضاء',
          fr: 'Carte Nationale Biométrique du propriétaire (ou procuration notariée)',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'شهادة الجمركة (Model 846) للسيارات المستوردة أو البطاقة الرمادية',
          fr: 'Déclaration douanière Modèle 846 (import) ou carte grise originale',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'شهادة التركيب والمطابقة لنظام الغاز المميع GPL/Sirghaz (عند فحص الغاز)',
          fr: 'Attestation d’installation GPL/Sirghaz agréée (si contrôle GPL)',
        },
        isMandatory: false,
      },
      {
        name: {
          ar: 'وصل الموعد المطبوع من منصة مركبتي DZ',
          fr: 'Convocation imprimée depuis Markabati DZ',
        },
        isMandatory: true,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي السيارات المعنية بحجز موعد عبر منصة مركبتي DZ؟',
          fr: 'Quels véhicules nécessitent un rendez-vous sur Markabati DZ ?',
        },
        answer: {
          ar: 'تشمل المنصة مواعيد فحص المطابقة لدى مهندسي المناجم للسيارات المستوردة (أقل من 3 سنوات أو الجديدة)، المركبات المزودة بنظام سيرغاز GPL، والمركبات المعدلة تقنيا قبل الترقيم بالبطاقة الرمادية.',
          fr: 'La plateforme gère les visites d’homologation des véhicules importés (moins de 3 ans ou neufs), des conversions GPL/Sirghaz et des transformations techniques avant immatriculation.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني التوجه إلى مركز المناجم دون حجز موعد في مركبتي DZ؟',
          fr: 'Peut-on passer le contrôle des Mines sans réservation sur Markabati DZ ?',
        },
        answer: {
          ar: 'لا، تشترط مديريات الطاقة والمناجم الحجز الإلكتروني المسبق عبر markabatidz.energy.gov.dz وإحضار الاستدعاء لتنظيم استقبال الملفات.',
          fr: 'Non, la prise de rendez-vous préalable en ligne sur markabatidz.energy.gov.dz et la présentation de la convocation sont obligatoires.',
        },
      },
      {
        question: {
          ar: 'أين أستعمل محضر المطابقة المستلم بعد موعد مركبتي DZ؟',
          fr: 'À quoi sert le procès-verbal délivré après l’inspection Markabati DZ ?',
        },
        answer: {
          ar: 'يودع محضر المطابقة الصادر عن مصالح المناجم في ملف الترقيم واستخراج البطاقة الرمادية لدى مصلحة البطاقات الرمادية بالبلدية أو الدائرة.',
          fr: 'Le procès-verbal des Mines est une pièce obligatoire du dossier d’immatriculation et de délivrance de la carte grise à la commune ou daïra.',
        },
      },
      {
        question: {
          ar: 'هل يتوفر فيديو يشرح خطوات التسجيل وحجز الموعد في مركبتي DZ؟',
          fr: 'Existe-t-il une vidéo tutorielle pour réserver sur Markabati DZ ?',
        },
        answer: {
          ar: 'نعم، يتضمن هذا الدليل الفيديو التوضيحي الكامل لطريقة إنشاء الحساب وإدخال رقم الهيكل وحجز موعد الفحص في منصة مركبتي DZ.',
          fr: 'Oui, le tutoriel vidéo officiel détaillant la création de compte, la saisie du numéro VIN et le choix du créneau est intégré sur cette page.',
        },
      },
    ],
  },

  // 11. takwin
  {
    id: 'proc-takwin',
    slug: 'takwin',
    title: {
      ar: 'التسجيل في الدخول التكويني 2026 (منصة التكوين المهني / مهنتي)',
      fr: 'Inscription Formation Professionnelle 2026 (Plateforme Takwin / Mihnati)',
    },
    sectorId: 'mfp.gov',
    responsibleEntity: {
      ar: 'وزارة التكوين والتعليم المهنيين',
      fr: 'Ministère de la Formation et de l’Enseignement Professionnels',
    },
    description: {
      ar: 'الدليل الشامل للتسجيل في الدخول التكويني 2026 عبر منصة وزارة التكوين والتعليم المهنيين (takwin.dz/Offersinscription): اختيار الولاية والتخصص، أنماط التكوين (الحضوري، التمهين، التكوين عن بعد، والماكثات في البيت)، مواعيد الانتقاء والتوجيه، والملف الإداري الكامل مع الفيديو التوضيحي.',
      fr: 'Guide complet pour s’inscrire à la rentrée de la formation professionnelle 2026 via takwin.dz/Offersinscription : filtres par wilaya et niveau scolaire, modes résidentiel, apprentissage et à distance, calendrier d’orientation et tutoriel vidéo officiel.',
    },
    officialLink: 'https://takwin.dz/Offersinscription',
    videoEmbedUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1967640217271523&show_text=false',
    targetAudience: {
      ar: 'الشباب، التلاميذ المنقطعون أو المتخرجون، والراغبون في تعلم حرفة أو شهادة تقني سامي',
      fr: 'Jeunes, bacheliers, demandeurs d’emploi et candidats aux métiers qualifiants',
    },
    channel: {
      ar: 'بوابة takwin.dz/Offersinscription + مؤسسات ومعاهد التكوين المهني',
      fr: 'Portail takwin.dz/Offersinscription + CFPA et INSFP de wilaya',
    },
    keyRequirement: {
      ar: 'المستوى الدراسي المطلوب للتخصص، استمارة الرغبات، وملف التسجيل الإداري',
      fr: 'Niveau scolaire requis pour la spécialité, fiche de vœux et dossier civil',
    },
    estimatedDuration: {
      ar: '15 دقيقة للتسجيل الإلكتروني — دورتان سنويتان (فيفري وسبتمبر/أكتوبر)',
      fr: '15 min en ligne — deux rentrées annuelles (février et septembre/octobre)',
    },
    cost: {
      ar: 'مجاني بالكامل في جميع مراكز ومعاهد التكوين المهني العمومية',
      fr: '100 % Gratuit dans les établissements publics CFPA et INSFP',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'استعراض عروض التكوين المتوفرة على takwin.dz/Offersinscription',
          fr: 'Consulter la carte des formations sur takwin.dz/Offersinscription',
        },
        detail: {
          ar: 'افتح بوابة عروض التكوين وحدد ولايتك، مستواك الدراسي، ونمط التكوين المطلوب (حضوري، عن طريق التمهين، عن بعد، أو تكوين تأهيلي).',
          fr: 'Accédez au portail officiel et filtrez les spécialités ouvertes selon votre wilaya, niveau scolaire et mode souhaité (résidentiel, apprentissage, à distance).',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'ملء استمارة التسجيل الإلكتروني واختيار الرغبات',
          fr: 'Compléter le formulaire et classer vos vœux de formation',
        },
        detail: {
          ar: 'أدخل بياناتك الشخصية الدقيقة، عنوان الإقامة، واختر حتى 3 تخصصات ومؤسسات تكوينية مرتبة حسب الأولوية.',
          fr: 'Saisissez votre état civil complet, vos coordonnées et sélectionnez jusqu’à 3 spécialités dans les centres ou instituts les plus proches.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'تحميل وطباعة وصل التسجيل الإلكتروني',
          fr: 'Télécharger et imprimer le récépissé de préinscription',
        },
        detail: {
          ar: 'بعد تأكيد الطلب، اطبع استمارة التسجيل التي تحمل رقمك المرجعي وموعد إيداع الملف في المركز المختار.',
          fr: 'Imprimez immédiatement votre attestation comportant le numéro de dossier ainsi que la date d’entretien d’orientation.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'إيداع الملف وحضور أيام التوجيه والانتقاء بالمؤسسة',
          fr: 'Déposer le dossier administratif et passer l’orientation',
        },
        detail: {
          ar: 'تقدم إلى مركز أو معهد التكوين المهني مرفقا بالوثائق الورقية في الأيام المحددة لإجراء مقابلة التوجيه وتأكيد المقعد البيداغوجي.',
          fr: 'Présentez-vous à l’établissement aux dates fixées avec votre dossier complet pour l’entretien d’orientation et la confirmation d’admission.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'شهادة مدرسية أصلية أو كشف نقاط آخر مستوى دراسي',
          fr: 'Certificat de scolarité original ou relevé du dernier niveau',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'مستخرج عقد الميلاد وبطاقة التعريف الوطنية',
          fr: 'Extrait d’acte de naissance et pièce d’identité',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'صورتان شمسيتان حديثتان وظرفان بريديان',
          fr: 'Deux photos d’identité récentes et enveloppes timbrées',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'شهادة طبية تثبت الأهلية البدنية لمزاولة الحرفة المختارة',
          fr: 'Certificat médical d’aptitude (requis à l’admission définitive)',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي أبرز أنماط التكوين المتاحة عند التسجيل في منصة takwin.dz؟',
          fr: 'Quels sont les modes de formation accessibles via takwin.dz ?',
        },
        answer: {
          ar: 'تشمل المنصة التكوين الإقامي الحضوري، التكوين عن طريق التمهين لدى المؤسسات والحرفيين، التكوين عن بعد، الدروس المسائية، وتكوين المرأة الماكثة في البيت.',
          fr: 'La plateforme couvre la formation résidentielle, l’apprentissage en entreprise, la formation à distance, les cours du soir et les dispositifs passerelles.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني التسجيل في تخصص تقني سامي دون شهادة البكالوريا؟',
          fr: 'Quel niveau scolaire faut-il pour les diplômes de Technicien Supérieur (BTS) ?',
        },
        answer: {
          ar: 'يشترط لتكوين تقني سامي مستوى السنة الثالثة ثانوي كاملة على الأقل، بينما تقبل الشهادات المهنية الأخرى مستويات الرابعة متوسط وما دونها حسب الدليل.',
          fr: 'Le niveau 3ème année secondaire (3AS) est requis pour les formations de Technicien Supérieur en INSFP, tandis que de nombreux CAP/CMP sont accessibles dès la fin du cycle moyen ou primaire.',
        },
      },
      {
        question: {
          ar: 'متى تجرى دورات التسجيل للدخول التكويني 2026؟',
          fr: 'Quelles sont les périodes d’inscription pour la rentrée 2026 ?',
        },
        answer: {
          ar: 'تفتح وزارة التكوين والتعليم المهنيين باب التسجيل في دورتين أساسيتين سنويا: دورة فيفري ودورة سبتمبر-أكتوبر.',
          fr: 'Deux grandes campagnes nationales ont lieu chaque année pour les rentrées de février et de septembre-octobre.',
        },
      },
      {
        question: {
          ar: 'هل يوجد فيديو يوضح طريقة التسجيل في الدخول التكويني 2026؟',
          fr: 'Puis-je visionner le tutoriel vidéo d’inscription sur Takwin DZ ?',
        },
        answer: {
          ar: 'نعم، الفيديو الإرشادي الخاص بالتسجيل في الدخول التكويني 2026 مدمج للمشاهدة المباشرة أعلى هذا الدليل.',
          fr: 'Oui, la vidéo explicative complète de la rentrée 2026 est intégrée directement sur cette page.',
        },
      },
    ],
  },
];

export const batch2ProcedureGuides: Record<string, Partial<RichGuideContent>> = {
  idlaa: {
    intro: {
      ar: [
        'تندرج خدمة "الإدلاء بشهادة عن بعد" ضمن باقة الخدمات الأمنية الرقمية التي أطلقتها المديرية العامة للأمن الوطني (DGSN) لتسهيل تواصل المواطنين مع مصالح الشرطة وتعزيز الأمن المجتمعي عبر قنوات رقمية مؤمنة.',
        'تتيح الاستمارة الإلكترونية للشهود والمواطنين نقل مشاهداتهم أو إفاداتهم حول الحوادث المرورية أو الوقائع التي تستدعي لفت انتباه مصالح الأمن، مع ضمان سرية البيانات والخصوصية التامة للمبلغ.',
        'يوضح هذا الدليل كيفية ملء الاستمارة بطريقة موضوعية وصحيحة على بوابة dgsn.dz والتمييز الضروري بين قنوات التبليغ السري غير المستعجل وأرقام النجدة الفورية 1548 و17.'
      ],
      fr: [
        'Le téléservice « Idlaa bi Chahada » (témoignage en ligne) s’inscrit dans la stratégie de proximité numérique de la Direction Générale de la Sûreté Nationale (DGSN) visant à renforcer la sécurité citoyenne.',
        'Il permet aux témoins oculaires ou citoyens de signaler des faits, comportements dangereux ou informations utiles à une enquête en toute confidentialité, sans déplacement préalable.',
        'Ce guide récapitule les bonnes pratiques pour rédiger un signalement précis sur dgsn.dz et rappelle l’usage prioritaire des numéros verts 1548 et 17 en cas d’urgence immédiate.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر معلومات واقعية ومحددة (زمان، مكان، ووصف دقيق للحدث) بعيدا عن الشائعات غير المؤكدة.',
        'الدخول عبر الرابط الرسمي للمديرية العامة للأمن الوطني dgsn.dz والتأكد من أمان الاتصال HTTPS.',
        'إمكانية إدراج رقم هاتف للتواصل إذا رغب الشاهد في متابعة الإفادة مع الضبطية القضائية.',
        'في حالة الخطر الآني أو الاعتداء أو الحادث الذي يتطلب إسعافا فوريا يجب الاتصال فورا بالرقم 1548 أو 17.',
      ],
      fr: [
        'Disposer d’éléments factuels vérifiés (lieu exact, date, heure et description objective).',
        'Accéder exclusivement via le site officiel dgsn.dz sécurisé en HTTPS.',
        'Indiquer éventuellement un numéro de téléphone pour permettre aux enquêteurs d’obtenir des précisions.',
        'En situation de danger immédiat ou d’accident grave en cours, appeler sans délai le 1548 ou le 17.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'التساؤل حول ما إذا كان التبليغ يكشف هوية الشاهد للأطراف الأخرى',
          fr: 'Crainte que l’identité du témoin ne soit divulguée aux tiers',
        },
        solution: {
          ar: 'تعالج مصالح الأمن الوطني كافة البلاغات بسرية صارمة وفق الأطر القانونية لحماية المبلغين والشهود ولا تفصح عن هويتهم لأي طرف.',
          fr: 'Les services de la Sûreté Nationale traitent les témoignages sous le sceau du secret professionnel et garantissent la protection légale des témoins.',
        },
      },
      {
        issue: {
          ar: 'استخدام صفحة الإدلاء بشهادة عن طريق الخطأ للتبليغ عن ضياع بطاقة التعريف',
          fr: 'Confusion entre « Idlaa » et la déclaration de perte de papiers',
        },
        solution: {
          ar: 'لضياع الوثائق الشخصية الرسمية (CNI، جواز سفر، رخصة سياقة)، استخدم حصريا رابط خدمة التصريح بالضياع dgsn.dz/e-declaration.',
          fr: 'Pour déclarer la perte d’une pièce d’identité ou d’un permis, rendez-vous sur le téléservice distinct dgsn.dz/e-declaration/.',
        },
      },
      {
        issue: {
          ar: 'عدم ظهور نص أو رابط واضح بعد الإرسال أو بطء التحميل',
          fr: 'Formulaire lent ou absence d’accusé visible',
        },
        solution: {
          ar: 'تجنب إرفاق ملفات ثقيلة غير مدعومة، وتأكد من ملء كافة الحقول الإلزامية قبل الضغط مرة واحدة على زر الإرسال.',
          fr: 'Vérifiez que tous les champs obligatoires sont complétés et évitez de soumettre plusieurs fois de suite pendant le chargement.',
        },
      },
    ],
    extraFaqs: [],
  },

  markabatidz: {
    intro: {
      ar: [
        'أطلقت وزارة الطاقة والمناجم منصة "مركبتي DZ" (markabatidz.energy.gov.dz) لتنظيم ورقمنة مواعيد الفحص والمطابقة التقنية للمركبات لدى مهندسي المناجم عبر مختلف ولايات الجمهورية.',
        'أصبحت هذه البوابة محطة إلزامية لأصحاب المركبات المستوردة أقل من 3 سنوات، وكذا مالكي السيارات المجهزة بوقود الغاز المميع GPL/Sirghaz أو المركبات الخاضعة لتعديلات هيكلية، قبل إيداع ملف البطاقة الرمادية لدى البلدية أو الدائرة.',
        'يوفر هذا الدليل شرحا مرتبا لخطوات فتح الحساب، إدخال رقم الهيكل VIN بدقة، والوثائق اللازمة يوم الموعد، مع الفيديو التوضيحي الرسمي.'
      ],
      fr: [
        'Mise en service par le Ministère de l’Énergie et des Mines, la plateforme Markabati DZ (markabatidz.energy.gov.dz) dématérialise entièrement la prise de rendez-vous pour les contrôles de conformité assurés par les ingénieurs des mines.',
        'Elle concerne en priorité les véhicules de moins de 3 ans importés par des particuliers, les véhicules équipés du kit GPL/Sirghaz ainsi que toute transformation technique exigeant un procès-verbal avant établissement de la carte grise.',
        'Suivez les étapes détaillées ci-dessous pour enregistrer votre numéro de châssis VIN, choisir votre centre de wilaya et consulter la vidéo explicative officielle.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'رقم الهيكل التسلسلي للمركبة (VIN) المكون من 17 خانة مطابقا تماما لوثائق السيارة.',
        'شهادة الجمركة (Model 846) للمركبات المستوردة أو البطاقة الرمادية وشهادة تركيب GPL عند فحص الغاز.',
        'حساب إلكتروني مسجل باسم مالك المركبة أو وكيله القانوني على markabatidz.energy.gov.dz.',
        'طباعة استدعاء الموعد وإحضار المركبة نظيفة ومرقمة الهوية في التاريخ المحدد للمعاينة.',
      ],
      fr: [
        'Numéro de châssis VIN à 17 caractères identique aux documents douaniers ou à la carte grise.',
        'Déclaration en douane Modèle 846 (véhicules importés) ou certificat de montage GPL/Sirghaz agréé.',
        'Compte actif créé sur markabatidz.energy.gov.dz au nom du propriétaire.',
        'Impression de la convocation et présentation physique du véhicule au centre des Mines à l’heure prévue.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'رسالة خطأ في رقم الهيكل VIN عند تسجيل المركبة في مركبتي DZ',
          fr: 'Numéro de châssis VIN rejeté lors de l’enregistrement',
        },
        solution: {
          ar: 'تحقق من الحروف اللاتينية والأرقام (لا يستخدم حرف O ولا I في أرقام VIN القياسية بل الأرقام 0 و1) وطابقها مع وثيقة Model 846.',
          fr: 'Vérifiez l’absence de confusion entre les chiffres 0/1 et les lettres O/I (absentes du standard VIN) en comparant avec le document Modèle 846.',
        },
      },
      {
        issue: {
          ar: 'عدم توفر مواعيد قريبة في ولاية الإقامة عبر منصة مركبتي DZ',
          fr: 'Aucun créneau disponible dans l’immédiat pour ma wilaya',
        },
        solution: {
          ar: 'تضاف الحصص الأسبوعية للمعاينة بصفة دورية في بداية الأسبوع؛ راقب الرزنامة يوميا واختر أقرب موعد متاح دون الاعتماد على وسطاء.',
          fr: 'De nouveaux créneaux hebdomadaires sont ouverts régulièrement par les directions des Mines ; consultez le calendrier en début de matinée.',
        },
      },
      {
        issue: {
          ar: 'الحاجة لتعديل موعد الفحص بعد حجزه بسبب ظرف طارئ',
          fr: 'Comment reporter un rendez-vous déjà confirmé sur Markabati DZ ?',
        },
        solution: {
          ar: 'ادخل إلى لوحة مواعيدك في markabatidz.energy.gov.dz لإلغاء الموعد القديم قبل تاريخه ثم اختر يوما جديدا متاحا.',
          fr: 'Connectez-vous à votre espace sur markabatidz.energy.gov.dz pour annuler le créneau avant son échéance et en réserver un nouveau.',
        },
      },
    ],
    extraFaqs: [],
  },

  takwin: {
    intro: {
      ar: [
        'تعد بوابة التكوين المهني الرسمية (takwin.dz/Offersinscription) المنصة الرقمية الموحدة التي أطلقتها وزارة التكوين والتعليم المهنيين لتسهيل التحاق الشباب والمترشحين بمئات التخصصات المهنية والتقنية عبر المراكز والمعاهد الوطنية.',
        'تسمح المنصة بتصفح خريطة التكوين حسب كل ولاية ومستوى دراسي، مع إتاحة الاختيار بين التكوين الإقامي الحضوري، التكوين عن طريق التمهين داخل المؤسسات الاقتصادية، التكوين عن بعد، والتكوين التأهيلي القصير المدة.',
        'يشرح هذا الدليل مراحل التسجيل الإلكتروني لدورة 2026، قائمة الأوراق المطلوبة لملف الإدارة يوم الانتقاء والتوجيه، وكيفية متابعة الفيديو الإرشادي الرسمي.'
      ],
      fr: [
        'Déployée par le Ministère de la Formation et de l’Enseignement Professionnels, la plateforme Takwin / Mihnati (takwin.dz/Offersinscription) centralise toutes les préinscriptions aux centres (CFPA) et instituts nationaux spécialisés (INSFP).',
        'Les candidats filtrent en ligne les places pédagogiques disponibles dans leur wilaya selon leur niveau scolaire et optent pour la formation résidentielle, l’apprentissage rémunéré en entreprise, l’enseignement à distance ou les stages qualifiants.',
        'Retrouvez ci-après le calendrier annuel des deux rentrées 2026, les pièces du dossier administratif et le tutoriel vidéo officiel pas à pas.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'استيفاء السن الأدنى القانوني (16 سنة فما فوق للتكوين والتمهين وفق التخصص المختار).',
        'توفر المستوى الدراسي الموافق للتخصص (ابتدائي/متوسط للشهادات المهنية، والثالثة ثانوي لتقني سامي).',
        'ترتيب 1 إلى 3 رغبات تكوينية عبر البوابة وطباعة وصل التسجيل الإلكتروني.',
        'تجهيز الشهادة المدرسية الأصلية، عقد الميلاد، وصورتين شمسيتين لتسليمها في مركز التكوين عند التوجيه.',
      ],
      fr: [
        'Remplir la condition d’âge minimum légal (à partir de 16 ans selon la filière et le dispositif).',
        'Justifier du niveau scolaire exigé par la spécialité choisie (de la fin de primaire/moyen jusqu’à la 3AS pour les BTS).',
        'Valider jusqu’à 3 vœux sur takwin.dz/Offersinscription et imprimer la fiche de préinscription.',
        'Préparer le certificat de scolarité original, l’extrait de naissance et les photos pour la journée d’orientation.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم ظهور التخصص المرغوب ضمن عروض ولايتي على takwin.dz',
          fr: 'Spécialité souhaitée introuvable dans les offres de ma wilaya',
        },
        solution: {
          ar: 'بعض التخصصات الدقيقة تفتح في دورة واحدة فقط أو على مستوى المعاهد الوطنية INSFP بالولايات المجاورة، لذا جرب توسيع البحث لنمط التمهين أو المعاهد الجهوية.',
          fr: 'Certaines filières rares sont ouvertes par session ou en institut régional (INSFP) ; vérifiez les établissements voisins ou le mode apprentissage.',
        },
      },
      {
        issue: {
          ar: 'ضياع وصل التسجيل الإلكتروني قبل موعد مقابلة التوجيه',
          fr: 'Perte du récépissé de préinscription avant l’entretien d’orientation',
        },
        solution: {
          ar: 'أعد الدخول إلى حسابك على منصة takwin.dz باستخدام رقم التسجيل أو بيانات الهوية لإعادة تحميل وطباعة الاستمارة فورا.',
          fr: 'Reconnectez-vous à votre espace candidat sur takwin.dz afin de rééditer et imprimer votre attestation à tout moment.',
        },
      },
      {
        issue: {
          ar: 'تحويل الرغبة إلى التكوين عن طريق التمهين بعد التسجيل الحضوري',
          fr: 'Basculer vers l’apprentissage après une préinscription résidentielle',
        },
        solution: {
          ar: 'يمكنك إبداء رغبتك في التمهين أمام مستشار التوجيه بمؤسسة التكوين يوم المقابلة، مع تسهيل البحث عن مؤسسة مستقبلة أو حرفي معتمد.',
          fr: 'Signalez votre choix au conseiller d’orientation lors de l’entretien physique au CFPA/INSFP et présentez, si disponible, votre maître d’apprentissage.',
        },
      },
    ],
    extraFaqs: [],
  },
};
