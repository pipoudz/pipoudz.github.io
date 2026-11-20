import { ProcedureItem, RichGuideContent } from '../../types';

export const batch1Procedures: ProcedureItem[] = [
  // 1. adhahi.dz
  {
    id: 'proc-adhahi',
    slug: 'adhahi.dz',
    title: {
      ar: 'حجز أضحية العيد 2026 عبر المنصة الرقمية (أضاحي DZ)',
      fr: 'Réservation des Moutons de l’Aïd 2026 via la Plateforme Adhahi DZ',
    },
    sectorId: 'madr',
    responsibleEntity: {
      ar: 'وزارة الفلاحة والتنمية الريفية والصيد البحري',
      fr: 'Ministère de l’Agriculture, du Développement Rural et de la Pêche',
    },
    description: {
      ar: 'الدليل الشامل لاستخدام منصة أضاحي العيد DZ الرقمية التي توفرها وزارة الفلاحة والتنمية الريفية والصيد البحري، لتمكين المواطنين من التسجيل وحجز أضاحي العيد 2026 عن بعد عبر adhahi.dz/register واختيار نقاط البيع الرسمية المعتمدة والمراقبة بيطريا مع توفير شرح مرئي كامل.',
      fr: 'Guide complet de la plateforme numérique Adhahi DZ mise en place par le Ministère de l’Agriculture et du Développement Rural pour enregistrer votre compte sur adhahi.dz/register, réserver un mouton de l’Aïd 2026 à distance et retirer votre animal dans les points de vente agréés et contrôlés vétérinairement.',
    },
    officialLink: 'https://adhahi.dz/register',
    videoEmbedUrl: 'https://www.youtube.com/embed/pfYIDYoVE5g',
    videoWatchUrl: 'https://www.youtube.com/watch?v=pfYIDYoVE5g',
    targetAudience: {
      ar: 'المواطنون والأسر الراغبة في اقتناء أضحية من نقاط البيع المعتمدة',
      fr: 'Citoyens et ménages souhaitant réserver un mouton agréé',
    },
    channel: {
      ar: 'منصة adhahi.dz/register + الاستلام من نقطة البيع المعتمدة',
      fr: 'Portail adhahi.dz/register + retrait en point de vente officiel',
    },
    keyRequirement: {
      ar: 'رقم التعريف الوطني NIN، رقم الهاتف النشط، وتحديد الولاية ونقطة البيع',
      fr: 'Numéro d’identification national (NIN), téléphone actif et wilaya',
    },
    estimatedDuration: {
      ar: 'تسجيل وحجز فوري خلال الحملة الموسمية الرسمية',
      fr: 'Inscription et réservation immédiates durant la campagne officielle',
    },
    cost: {
      ar: 'مجاني للتسجيل الإلكتروني — التسعيرة المسقفة الرسمية للأضحية',
      fr: 'Inscription gratuite — Tarifs officiels plafonnés par catégorie',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'فتح حساب جديد على بوابة adhahi.dz/register',
          fr: 'Créer votre compte sur adhahi.dz/register',
        },
        detail: {
          ar: 'ادخل إلى صفحة التسجيل الرسمية وأدخل الاسم الكامل، رقم التعريف الوطني NIN، ورقم الهاتف النقال النشط لتأكيد الهوية.',
          fr: 'Accédez à adhahi.dz/register puis renseignez votre identité complète, le numéro NIN et un numéro de mobile actif pour validation.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'تحديد الولاية والبلدية ونقطة البيع المعتمدة',
          fr: 'Sélectionner la wilaya et le point de vente agréé',
        },
        detail: {
          ar: 'اختر ولاية إقامتك واطلع على قائمة نقاط البيع الرسمية الخاضعة لإشراف المصالح الفلاحية والبيطرية والدواوين العمومية.',
          fr: 'Choisissez votre wilaya de résidence puis sélectionnez le point de vente public le plus proche supervisé par les services vétérinaires.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'تأكيد حجز الأضحية واستخراج وصل الموعد',
          fr: 'Valider la réservation et télécharger le bon de retrait',
        },
        detail: {
          ar: 'حدد الفئة أو الصنف المتاح، أكد الحجز واحتفظ بوصل التأكيد الإلكتروني أو رمز الحجز المرسل عبر المنصة.',
          fr: 'Choisissez la catégorie disponible, confirmez votre demande et conservez précieusement le bon ou récépissé de réservation généré.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'التوجه إلى نقطة البيع لإتمام الشراء والفحص البيطري',
          fr: 'Se présenter au point de vente pour le paiement et le retrait',
        },
        detail: {
          ar: 'احضر في الموعد المحدد مرفقا ببطاقة التعريف الوطنية ووصل الحجز لإتمام التسديد (عبر الدفع الإلكتروني أو في عين المكان) واستلام الأضحية.',
          fr: 'Présentez votre pièce d’identité biométrique et le bon de réservation à la date fixée pour régler et récupérer le mouton certifié sain.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'بطاقة التعريف الوطنية البيومترية (رقم NIN)',
          fr: 'Carte Nationale d’Identité Biométrique (NIN)',
        },
        isMandatory: true,
        note: {
          ar: 'يستخدم رقم NIN للتحقق من أحقية الحجز ومنع التكرار أثناء الحملة.',
          fr: 'Requis pour l’authentification unique lors de l’inscription.',
        },
      },
      {
        name: {
          ar: 'رقم هاتف شخصي نشط لاستلام رمز التأكيد',
          fr: 'Numéro de téléphone mobile actif',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'وصل الحجز الإلكتروني الصادر من adhahi.dz',
          fr: 'Bon de réservation électronique généré sur adhahi.dz',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'البطاقة الذهبية أو بطاقة CIB للدفع المسبق إن أتيح',
          fr: 'Carte Edahabia ou CIB pour le règlement électronique',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن التسجيل في منصة أضاحي العيد DZ دون التنقل إلى المصالح الفلاحية؟',
          fr: 'L’inscription sur Adhahi DZ s’effectue-t-elle entièrement à distance ?',
        },
        answer: {
          ar: 'نعم، تتيح منصة وزارة الفلاحة (adhahi.dz/register) إنشاء الحساب واختيار نقطة البيع وحجز الأضحية إلكترونيا بالكامل توفيرا للوقت وتفاديا للاكتظاظ.',
          fr: 'Oui, la création de compte, le choix du point de vente et la réservation s’effectuent entièrement en ligne sur adhahi.dz/register sans déplacement préalable.',
        },
      },
      {
        question: {
          ar: 'هل جميع الأضاحي المعروضة في المنصة خاضعة للمراقبة البيطرية؟',
          fr: 'Les moutons réservés sur Adhahi DZ sont-ils contrôlés par des vétérinaires ?',
        },
        answer: {
          ar: 'نعم، كافة نقاط البيع الرسمية المرتبطة بوزارة الفلاحة والتنمية الريفية تخضع لفحص ومراقبة بيطرية مستمرة قبل التسليم.',
          fr: 'Oui, tous les points de vente agréés par le Ministère de l’Agriculture bénéficient d’un suivi vétérinaire permanent garantissant la santé du cheptel.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا لم أستطع الحضور في الموعد المحدد بنقطة البيع؟',
          fr: 'Que faire en cas d’empêchement le jour du retrait fixé ?',
        },
        answer: {
          ar: 'يفضل الالتزام بالتوقيت واليوم المحددين في الوصل لتفادي إلغاء الحجز تلقائيا، أو مراجعة تعليمات نقطة البيع عبر حسابك في adhahi.dz.',
          fr: 'Respectez impérativement le créneau indiqué sur votre bon afin d’éviter l’annulation automatique de votre réservation au profit des listes d’attente.',
        },
      },
      {
        question: {
          ar: 'هل يوجد فيديو توضيحي يشرح خطوات التسجيل في adhahi.dz؟',
          fr: 'Existe-t-il un tutoriel vidéo expliquant la réservation sur Adhahi DZ ?',
        },
        answer: {
          ar: 'نعم، أدرجنا في هذه الصفحة الفيديو التوضيحي الرسمي المرفق خطوة بخطوة لطريقة التسجيل وتأكيد حجز أضحية العيد 2026.',
          fr: 'Oui, le tutoriel vidéo officiel est intégré directement sur cette fiche pour vous guider étape par étape lors de votre inscription.',
        },
      },
    ],
  },

  // 2. anae
  {
    id: 'anae',
    slug: 'anae',
    title: {
      ar: 'طلب بطاقة المقاول الذاتي عبر الوكالة الوطنية للمقاول الذاتي (ANAE)',
      fr: 'Demande de Carte d’Auto-Entrepreneur via la Plateforme ANAE',
    },
    sectorId: 'anae',
    responsibleEntity: {
      ar: 'الوكالة الوطنية للمقاول الذاتي (ANAE)',
      fr: 'Agence Nationale de l’Auto-Entrepreneur (ANAE)',
    },
    description: {
      ar: 'الدليل الكامل للتسجيل في الوكالة الوطنية للمقاول الذاتي وطلب بطاقة المقاول الذاتي أونلاين عبر anae.dz/user/ae/register/، بما يشمل شروط الأهلية، الأنشطة الرقمية والخدماتية المعتمدة، مزايا الضريبة الجزافية 0.5% والتغطية لدى CASNOS، وشرح التسجيل بالفيديو.',
      fr: 'Guide complet pour demander la carte d’auto-entrepreneur sur anae.dz/user/ae/register/ : conditions d’éligibilité, activités numériques et prestations éligibles, régime fiscal simplifié à 0,5 %, affiliation sociale CASNOS et tutoriel vidéo pas à pas.',
    },
    officialLink: 'https://anae.dz/user/ae/register/',
    videoEmbedUrl: 'https://www.youtube.com/embed/WvoxK3nbYXQ',
    videoWatchUrl: 'https://www.youtube.com/watch?v=WvoxK3nbYXQ',
    targetAudience: {
      ar: 'المستقلون، المبرمجون، المصممون، المستشارون، ومقدمو الخدمات المربحة رقميا',
      fr: 'Travailleurs indépendants, freelances, consultants et prestataires',
    },
    channel: {
      ar: 'البوابة الإلكترونية الرسمية anae.dz/user/ae/register/',
      fr: 'Téléprocédure officielle anae.dz/user/ae/register/',
    },
    keyRequirement: {
      ar: 'السن القانونية للعمل، الجنسية الجزائرية أو الإقامة القانونية، ورقم NIN',
      fr: 'Âge légal de travail, NIN valide et activité non commerciale éligible',
    },
    estimatedDuration: {
      ar: '48 إلى 72 ساعة عمل لمعالجة الطلب وإصدار البطاقة الرقمية',
      fr: '48h à 72h ouvrables pour validation et délivrance numérique',
    },
    cost: {
      ar: 'مجاني للتسجيل وإصدار البطاقة (ضريبة IFU بنسبة 0.5% عند النشاط)',
      fr: 'Inscription gratuite — Régime IFU préférentiel de 0,5 % sur le CA',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'فتح حساب المترشح عبر anae.dz/user/ae/register/',
          fr: 'Créer votre espace candidat sur anae.dz/user/ae/register/',
        },
        detail: {
          ar: 'أدخل رقم التعريف الوطني NIN، الاسم واللقب، تاريخ ومكان الميلاد، ورقم الهاتف والبريد الإلكتروني لتفعيل الحساب.',
          fr: 'Renseignez votre NIN, état civil complet, téléphone et e-mail pour activer votre espace personnel sur la plateforme ANAE.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'اختيار مجال النشاط من القائمة الرسمية للأنشطة المؤهلة',
          fr: 'Sélectionner l’activité dans la nomenclature officielle',
        },
        detail: {
          ar: 'حدد نشاطك الرئيسي بدقة من بين المجالات المعتمدة (الرقمنة، الاستشارة والخبرة، التكوين، الخدمات المنزلية، أو خدمات الأفراد والمؤسسات).',
          fr: 'Choisissez le code activité correspondant parmi les filières éligibles : conseil, numérique, formation, communication ou services aux particuliers.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'رفع شهادة الإقامة والصورة الشمسية والمستندات الداعمة',
          fr: 'Téléverser les justificatifs d’identité et de résidence',
        },
        detail: {
          ar: 'أرفق نسخة واضحة من بطاقة الإقامة وصورة شخصية رسمية بخلفية بيضاء، ثم أكد التصريح الشرفي بعدم ممارسة نشاط تجاري مقيد.',
          fr: 'Importez un certificat de résidence valide, une photo d’identité conforme et validez la déclaration sur l’honneur.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'متابعة الملف واستلام بطاقة المقاول الذاتي الرقمية',
          fr: 'Suivre la validation et télécharger la carte numérique',
        },
        detail: {
          ar: 'بعد موافقة لجنة ANAE، قم بتنزيل بطاقة المقاول الذاتي المزودة برمز QR لفتح حساب بنكي تجاري والانتساب لصندوق CASNOS.',
          fr: 'Une fois le dossier approuvé, téléchargez votre carte munie d’un QR Code pour ouvrir un compte bancaire dédié et vous affilier à la CASNOS.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'بطاقة التعريف الوطنية البيومترية ورقم التعريف الوطني NIN',
          fr: 'Carte Nationale Biométrique et numéro NIN',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'شهادة الإقامة أو وثيقة تثبت عنوان الموطن بالجزائر',
          fr: 'Certificat de résidence en cours de validité',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'صورة شمسية رقمية حديثة مطابقة للمعايير الرسمية',
          fr: 'Photo d’identité numérique récente sur fond clair',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'شهادة جامعية أو مهنية (لبعض الأنشطة الاستشارية أو التقنية)',
          fr: 'Diplôme ou attestation de compétence (selon l’activité choisie)',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'من يحق له طلب بطاقة المقاول الذاتي عبر منصة ANAE؟',
          fr: 'Qui est éligible au statut d’auto-entrepreneur en Algérie ?',
        },
        answer: {
          ar: 'كل شخص طبيعي بلغ السن القانونية للعمل، يحمل الجنسية الجزائرية أو مقيما قانونيا، ويمارس نشاطا فرديا مربحا ضمن قائمة الأنشطة المعتمدة دون تجاوز سقف رقم الأعمال السنوي القانوني.',
          fr: 'Toute personne physique majeure, algérienne ou résidente régulière, exerçant à titre individuel une activité éligible (hors professions libérales réglementées et commerce classique) sous le plafond légal de chiffre d’affaires.',
        },
      },
      {
        question: {
          ar: 'ما هي الامتيازات الجبائية والاجتماعية لحامل بطاقة المقاول الذاتي؟',
          fr: 'Quels sont les avantages fiscaux et sociaux du statut ANAE ?',
        },
        answer: {
          ar: 'يستفيد المقاول الذاتي من نظام الضريبة الجزافية الوحيدة بنسبة 0.5% فقط من رقم الأعمال، الإعفاء من الإمساك المحاسبي المعقد، الحق في التغطية الاجتماعية عبر CASNOS، وإمكانية فتح حساب بنكي تجاري وإصدار فواتير قانونية.',
          fr: 'Vous bénéficiez d’un taux IFU préférentiel de 0,5 %, d’une comptabilité allégée (livre des recettes), de la couverture sociale CASNOS et du droit de facturer légalement clients et entreprises.',
        },
      },
      {
        question: {
          ar: 'هل يمكن للموظف أو الطالب الجامعي الحصول على بطاقة المقاول الذاتي؟',
          fr: 'Un salarié ou étudiant peut-il obtenir la carte ANAE ?',
        },
        answer: {
          ar: 'نعم للطلبة والمتقاعدين وفق الشروط المنظمة، أما الموظفون في القطاع العمومي فيخضعون لأحكام قانون الوظيف العمومي واللوائح الخاصة بالجمع بين النشاطين.',
          fr: 'Oui pour les étudiants majeurs ; les fonctionnaires restent soumis aux dispositions statutaires de la Fonction Publique encadrant le cumul d’activités.',
        },
      },
      {
        question: {
          ar: 'كيف يمكنني مشاهدة شرح طريقة طلب البطاقة بالصوت والصورة؟',
          fr: 'Où trouver la vidéo explicative d’inscription à l’ANAE ?',
        },
        answer: {
          ar: 'الفيديو الإرشادي الكامل مدمج مباشرة في هذه الصفحة لمتابعة كل خطوة من خطوات التسجيل في بوابة anae.dz.',
          fr: 'La vidéo explicative complète est intégrée sur cette page pour suivre étape par étape la soumission de votre dossier sur anae.dz.',
        },
      },
    ],
  },

  // 3. apostille
  {
    id: 'apostille',
    slug: 'apostille',
    title: {
      ar: 'التسجيل والتصديق الإلكتروني على الوثائق بالأبوستيل (Apostille DZ)',
      fr: 'Inscription et Légalisation Électronique sur la Plateforme e-Apostille DZ',
    },
    sectorId: 'hcn',
    responsibleEntity: {
      ar: 'المحافظة السامية للرقمنة ووزارة الشؤون الخارجية',
      fr: 'Haut-Commissariat à la Numérisation & Ministère des Affaires Étrangères',
    },
    description: {
      ar: 'الدليل التفصيلي للتسجيل في المنصة الوطنية الرقمية للأبوستيل (apostille.hcn.dz) بإشراف المحافظة السامية للرقمنة، لتصديق الوثائق الإدارية والقضائية والشهادات الموجهة للاستعمال بالخارج عن بعد دون تنقل مع الشرح المرئي خطوة بخطوة.',
      fr: 'Guide pas à pas pour s’inscrire sur la plateforme nationale numérique d’Apostille (apostille.hcn.dz) supervisée par le Haut-Commissariat à la Numérisation et certifier à distance vos actes administratifs, judiciaires et diplômes destinés à l’étranger.',
    },
    officialLink: 'https://apostille.hcn.dz/',
    videoEmbedUrl: 'https://www.youtube.com/embed/Abph3zC5gZA',
    targetAudience: {
      ar: 'المواطنون، الطلبة بالخارج، الجالية، والشركات المتعاملة دوليا',
      fr: 'Citoyens, étudiants internationaux, diaspora et entreprises exportatrices',
    },
    channel: {
      ar: 'البوابة الوطنية الرقمية للأبوستيل apostille.hcn.dz',
      fr: 'Plateforme nationale apostille.hcn.dz (100 % en ligne)',
    },
    keyRequirement: {
      ar: 'رقم التعريف الوطني NIN، الوثيقة الأصلية PDF، وبطاقة دفع إلكتروني',
      fr: 'Numéro NIN, document original scanné (PDF) et carte CIB/Edahabia',
    },
    estimatedDuration: {
      ar: 'معالجة إلكترونية خلال 24 إلى 48 ساعة عمل دون تنقل',
      fr: 'Traitement dématérialisé sous 24h à 48h ouvrables sans déplacement',
    },
    cost: {
      ar: 'رسوم الطابع الجبائي الإلكتروني وفق نوع الوثيقة',
      fr: 'Timbre fiscal électronique réglé par carte CIB ou Edahabia',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'الالتحاق والتسجيل في منصة apostille.hcn.dz',
          fr: 'Accéder à apostille.hcn.dz et créer votre compte',
        },
        detail: {
          ar: 'افتح الموقع الرسمي للمنصة الوطنية الرقمية للأبوستيل، وأنشئ حساب المواطن بإدخال رقم NIN، رقم الهاتف، والبريد الإلكتروني الشخصي.',
          fr: 'Ouvrez le portail officiel apostille.hcn.dz et enregistrez votre profil citoyen à l’aide de votre NIN, numéro de mobile et adresse e-mail.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'تحديد نوع الوثيقة والهيئة المصدرة وبلد الوجهة',
          fr: 'Choisir le type d’acte et le pays destinataire',
        },
        detail: {
          ar: 'اختر تصنيف الوثيقة (حالة مدنية، وثيقة قضائية، شهادة جامعية، أو عقد توثيقي) وحدد الدولة المستقبلة الموقعة على اتفاقية لاهاي.',
          fr: 'Sélectionnez la nature du document (état civil, justice, diplôme ou acte notarié) et le pays de destination membre de la Convention de La Haye.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'رفع النسخة الرقمية ودفع الطابع الإلكتروني',
          fr: 'Téléverser le scan PDF et régler le timbre fiscal',
        },
        detail: {
          ar: 'حمل نسخة PDF واضحة للوثيقة الأصلية الممهورة بالختم الرسمي ثم سدد رسم الطابع الإلكتروني باستخدام البطاقة الذهبية أو بطاقة CIB.',
          fr: 'Importez la copie numérisée lisible de l’acte original puis réglez les droits de timbre électronique par carte Edahabia ou CIB.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'تنزيل شهادة الأبوستيل الموثقة برمز التحقق QR',
          fr: 'Télécharger le certificat e-Apostille avec QR Code',
        },
        detail: {
          ar: 'بعد المصادقة الإلكترونية من الجهة المختصة، حمل شهادة الأبوستيل الجاهزة والمزودة برمز QR للمطابقة الدولية الفورية.',
          fr: 'Une fois la signature électronique validée, téléchargez votre attestation Apostille dotée d’un QR Code vérifiable à l’international.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'بطاقة التعريف الوطنية البيومترية (رقم NIN)',
          fr: 'Carte Nationale Biométrique et numéro NIN',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'الوثيقة الأصلية ممسوحة ضوئيا بدقة عالية بصيغة PDF',
          fr: 'Document original numérisé en PDF haute lisibilité',
        },
        isMandatory: true,
        note: {
          ar: 'يجب أن تحمل الوثيقة الختم وتوقيع المصلحة المصدرة قبل رفعها للأبوستيل.',
          fr: 'L’acte doit impérativement porter le sceau et la signature de l’autorité émettrice.',
        },
      },
      {
        name: {
          ar: 'بطاقة الدفع الذهبية (بريد الجزائر) أو CIB (SATIM)',
          fr: 'Carte Edahabia ou CIB pour le règlement du timbre fiscal',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'الترجمة الرسمية المنجزة عند مترجم معتمد عند طلب الجهة الأجنبية',
          fr: 'Traduction officielle assermentée (si exigée par le pays d’accueil)',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي أهمية التصديق بالأبوستيل عبر منصة apostille.hcn.dz؟',
          fr: 'À quoi sert la légalisation par Apostille sur apostille.hcn.dz ?',
        },
        answer: {
          ar: 'يعفي تصديق الأبوستيل المواطن من التصديقات القنصلية المتعددة، ويثبت أصالة التوقيع والختم على الوثائق الجزائرية لدى جميع الدول الأعضاء في اتفاقية لاهاي عن بعد.',
          fr: 'L’Apostille remplace la double légalisation consulaire et certifie l’authenticité de la signature officielle d’un acte algérien auprès des États parties à la Convention de La Haye.',
        },
      },
      {
        question: {
          ar: 'هل يمكن التصديق على الوثائق دون السفر إلى الجزائر العاصمة؟',
          fr: 'Puis-je obtenir l’Apostille sans me déplacer à Alger ?',
        },
        answer: {
          ar: 'نعم، هذه المنصة التي طورتها المحافظة السامية للرقمنة تتيح إتمام كامل الطلب والدفع واستلام الشهادة عن بعد من أي ولاية أو من الخارج.',
          fr: 'Oui, la plateforme déployée par le Haut-Commissariat à la Numérisation permet de déposer la demande, payer et télécharger l’Apostille à distance depuis n’importe quelle wilaya ou depuis l’étranger.',
        },
      },
      {
        question: {
          ar: 'هل يشمل الأبوستيل الشهادات الجامعية وصحيفة السوابق القضائية؟',
          fr: 'Les diplômes universitaires et le casier judiciaire sont-ils éligibles ?',
        },
        answer: {
          ar: 'نعم، تشمل الخدمة عقود الحالة المدنية، شهادات السوابق القضائية، الشهادات المدرسية والجامعية، والعقود العدلية والتوثيقية المستوفية للتأشيرات الأولية.',
          fr: 'Oui, l’état civil, le casier judiciaire, les diplômes et actes notariés dûment signés par l’administration source sont couverts.',
        },
      },
      {
        question: {
          ar: 'كيف تتأكد السفارة أو الجامعة الأجنبية من صحة الأبوستيل الإلكتروني؟',
          fr: 'Comment l’administration étrangère vérifie-t-elle la validité du document ?',
        },
        answer: {
          ar: 'تحمل كل شهادة رمز QR ورقم تسجيل موثقا يتيحان لأي جهة التحقق الفوري من مطابقة الوثيقة عبر السجل الإلكتروني الرسمي.',
          fr: 'Chaque e-Apostille comporte un QR Code et un numéro de registre permettant la vérification instantanée en ligne de l’authenticité de l’acte.',
        },
      },
    ],
  },

  // 4. arpce
  {
    id: 'arpce',
    slug: 'arpce',
    title: {
      ar: 'التسجيل في مبادرة جيل لجيل 777 للإدماج الرقمي (ARPCE)',
      fr: 'Inscription Programme d’Inclusion Numérique Jil 777 (ARPCE / MPT)',
    },
    sectorId: 'arpce',
    responsibleEntity: {
      ar: 'سلطة ضبط البريد والاتصالات الإلكترونية (ARPCE) ووزارة البريد والمواصلات',
      fr: 'Autorité de Régulation (ARPCE) & Ministère de la Poste et des Télécoms',
    },
    description: {
      ar: 'دليل المشاركة والتسجيل في المبادرة الوطنية للإدماج الرقمي "جيل لجيل 777" التي تشرف عليها سلطة ضبط البريد والاتصالات الإلكترونية ووزارة البريد والمواصلات لتطوير المهارات الرقمية حضوريا وعن بعد عبر منصة 777.mpt.gov.dz.',
      fr: 'Guide complet d’inscription à l’initiative nationale d’inclusion numérique « Jil 777 » portée par l’ARPCE et le Ministère de la Poste et des Télécommunications pour développer vos compétences numériques en présentiel et à distance sur 777.mpt.gov.dz.',
    },
    officialLink: 'https://777.mpt.gov.dz/calendar#cal-board',
    videoEmbedUrl: 'https://www.youtube.com/embed/opO1dEXGFDw',
    targetAudience: {
      ar: 'الطلبة، الشباب، كبار السن، والمواطنون الراغبون في تنمية المهارات الرقمية',
      fr: 'Jeunes, étudiants, familles et tout citoyen souhaitant se former au numérique',
    },
    channel: {
      ar: 'لوحة الرزنامة الرسمية 777.mpt.gov.dz/calendar#cal-board',
      fr: 'Calendrier officiel 777.mpt.gov.dz/calendar#cal-board',
    },
    keyRequirement: {
      ar: 'اختيار دورة من لوحة المواعيد، الاسم الكامل، وبريد إلكتروني فعال',
      fr: 'Sélection d’un créneau sur le calendrier, identité et e-mail actif',
    },
    estimatedDuration: {
      ar: 'تسجيل فوري وتأكيد آلي للمقعد حسب الدورات المبرمجة',
      fr: 'Inscription immédiate et confirmation selon le calendrier choisi',
    },
    cost: {
      ar: 'مجاني بالكامل لجميع المواطنين',
      fr: '100 % Gratuit pour l’ensemble des citoyens',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'فتح لوحة الدورات على 777.mpt.gov.dz/calendar#cal-board',
          fr: 'Consulter le calendrier sur 777.mpt.gov.dz/calendar#cal-board',
        },
        detail: {
          ar: 'استعرض برنامج الورشات المتاحة في لوحة المواعيد، ولاحظ الدورات الحضورية في ولايتك أو الحصص المفتوحة عن بعد.',
          fr: 'Parcourez le planning des sessions disponibles en distinguant les ateliers en présentiel dans votre wilaya et les webinaires en ligne.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'اختيار المحور التدريبي وتاريخ الحصة المناسب',
          fr: 'Choisir la thématique et le créneau horaire',
        },
        detail: {
          ar: 'انقر على الدورة المناسبة لمستواك (أساسيات الحاسوب، الأمن السيبراني، استخدام الخدمات الإدارية الرقمية، أو التجارة والدفع الإلكتروني).',
          fr: 'Cliquez sur la session adaptée à votre objectif (bureautique, cybersécurité citoyenne, téléservices publics ou paiement électronique).',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'تعبئة استمارة التسجيل وتأكيد حجز المقعد',
          fr: 'Compléter le formulaire et réserver votre place',
        },
        detail: {
          ar: 'أدخل بياناتك الشخصية، الفئة العمرية، وبريدك الإلكتروني لتسجيل طلب المشاركة وحجز المقعد التدريبي.',
          fr: 'Renseignez vos coordonnées, tranche d’âge et adresse e-mail afin de valider votre inscription à l’atelier sélectionné.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'حضور الورشة أو متابعة الشرح التفاعلي',
          fr: 'Participer à l’atelier en présentiel ou en visioconférence',
        },
        detail: {
          ar: 'احضر في الموعد إلى المركز المحدد أو انضم عبر الرابط الإلكتروني للاستفادة من المرافقة التطبيقية وتطوير مهاراتك الرقمية.',
          fr: 'Rejoignez le lieu d’accueil ou le lien de session à l’heure prévue pour bénéficier de l’accompagnement pratique.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'بيانات الهوية الشخصية الكاملة وتحديد الولاية',
          fr: 'Identité complète et wilaya de résidence',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'بريد إلكتروني نشط ورقم هاتف لاستلام التذكير بالموعد',
          fr: 'Adresse e-mail active et numéro de mobile',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'حاسوب أو هاتف ذكي متصل بالإنترنت (للحصص عن بعد)',
          fr: 'Ordinateur ou smartphone connecté (pour le format à distance)',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي مبادرة جيل لجيل 777 التي تنظمها ARPCE ووزارة البريد؟',
          fr: 'Quel est l’objectif du programme Jil 777 porté par l’ARPCE et le MPT ?',
        },
        answer: {
          ar: 'هي مبادرة وطنية مجانية للإدماج الرقمي تسعى لتمكين مختلف فئات المجتمع (من 7 إلى 77 سنة) من استخدام التكنولوجيا والمنصات الإدارية والدفع الإلكتروني بأمان.',
          fr: 'Il s’agit d’une initiative nationale gratuite d’inclusion numérique destinée aux citoyens de 7 à 77 ans pour maîtriser les outils digitaux, e-services et bonnes pratiques de sécurité.',
        },
      },
      {
        question: {
          ar: 'هل تشترط الدورات شهادة علمية أو خبرة مسبقة في الإعلام الآلي؟',
          fr: 'Faut-il des prérequis techniques pour rejoindre les ateliers 777 ?',
        },
        answer: {
          ar: 'لا، صممت الورشات لتلائم المبتدئين تماما إلى جانب مسارات تطوير المهارات للطلبة والمهنيين.',
          fr: 'Non, les sessions sont ouvertes à tous les niveaux, des débutants complets aux utilisateurs cherchant à approfondir leur culture numérique.',
        },
      },
      {
        question: {
          ar: 'كيف أتابع الدورات إذا لم تتوفر في بلديتي دورة حضورية؟',
          fr: 'Comment participer si aucun atelier présentiel n’est prévu près de chez moi ?',
        },
        answer: {
          ar: 'يمكنك اختيار الدورات المبرمجة "عن بعد" عبر لوحة 777.mpt.gov.dz/calendar#cal-board وحضورها مباشرة عبر الإنترنت من أي ولاية.',
          fr: 'Sélectionnez les créneaux « À distance » directement dans le calendrier 777.mpt.gov.dz/calendar#cal-board pour suivre la formation en ligne.',
        },
      },
      {
        question: {
          ar: 'هل رسوم المشاركة في برنامج جيل لجيل 777 مجانية؟',
          fr: 'La participation au programme 777 est-elle payante ?',
        },
        answer: {
          ar: 'المشاركة في كافة دورات وورشات مبادرة جيل لجيل 777 مجانية بالكامل ومفتوحة لجميع المواطنين.',
          fr: 'Toutes les sessions et ateliers du programme Jil 777 sont entièrement gratuits pour l’ensemble des participants.',
        },
      },
    ],
  },

  // 5. arpce2
  {
    id: 'arpce2',
    slug: 'arpce2',
    title: {
      ar: 'التعلم والإدماج الرقمي عن بعد — المبادرة الوطنية 7.77 (ARPCE)',
      fr: 'Parcours à Distance — Programme Inclusion Numérique 7.77 (ARPCE)',
    },
    sectorId: 'arpce',
    responsibleEntity: {
      ar: 'سلطة ضبط البريد والاتصالات الإلكترونية (ARPCE)',
      fr: 'Autorité de Régulation de la Poste et des Communications Électroniques (ARPCE)',
    },
    description: {
      ar: 'الدليل التطبيقي للمشاركة عن بعد في برنامج جيل لجيل 7.77 عبر الإنترنت، والموجه لتطوير المهارات الرقمية الفردية، التعرف على خدمات الدفع الإلكتروني والأمان الرقمي، ومتابعة الحصص التدريبية التفاعلية من المنزل عبر 777.mpt.gov.dz.',
      fr: 'Guide pratique dédié au volet à distance du programme d’inclusion numérique 7.77 : apprendre les compétences digitales essentielles, sécuriser sa navigation et maîtriser les services en ligne algériens depuis chez soi via 777.mpt.gov.dz.',
    },
    officialLink: 'https://777.mpt.gov.dz/calendar#cal-board',
    videoEmbedUrl: 'https://www.youtube.com/embed/opO1dEXGFDw',
    targetAudience: {
      ar: 'المتعلمون عن بعد من جميع الولايات والأعمار (من 7 إلى 77 سنة)',
      fr: 'Apprenants à distance de toutes les wilayas (7 à 77 ans)',
    },
    channel: {
      ar: 'جلسات تفاعلية عن بعد عبر 777.mpt.gov.dz/calendar#cal-board',
      fr: 'Webinaires en ligne sur 777.mpt.gov.dz/calendar#cal-board',
    },
    keyRequirement: {
      ar: 'بريد إلكتروني فعال واتصال مستقر بالإنترنت عبر الهاتف أو الحاسوب',
      fr: 'E-mail valide et connexion internet sur ordinateur ou smartphone',
    },
    estimatedDuration: {
      ar: 'حجز فوري للحصص التفاعلية الأسبوعية',
      fr: 'Réservation immédiate selon les sessions hebdomadaires en ligne',
    },
    cost: {
      ar: 'مجاني بالكامل دون رسوم',
      fr: '100 % Gratuit sans frais d’inscription',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'الدخول إلى لوحة الورشات 777.mpt.gov.dz/calendar#cal-board',
          fr: 'Ouvrir le tableau des ateliers 777.mpt.gov.dz/calendar#cal-board',
        },
        detail: {
          ar: 'استعرض جدول الحصص واضغط على التصفية الخاصة بالدورات المقدمة عن بعد عبر الإنترنت.',
          fr: 'Accédez au calendrier officiel et repérez les ateliers programmés en format distanciel (à distance).',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'اختيار المسار الرقمي وتثبيت الموعد',
          fr: 'Choisir le module thématique et réserver votre créneau',
        },
        detail: {
          ar: 'اختر الموضوع التدريبي (استخدام الخدمات الإلكترونية، حماية الحسابات، أو المهارات الأساسية) واملأ استمارة التأكيد.',
          fr: 'Sélectionnez le module souhaité (téléservices administratifs, cybersécurité familiale ou initiation web) et validez votre demande.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'استلام رابط الدخول التفاعلي عبر البريد الإلكتروني',
          fr: 'Recevoir le lien d’accès par courrier électronique',
        },
        detail: {
          ar: 'قبل بداية الجلسة، تحقق من بريدك الإلكتروني للحصول على رابط الانضمام وكلمة المرور الخاصة بالورشة الافتراضية.',
          fr: 'Vérifiez votre boîte e-mail avant l’heure de début pour récupérer le lien de visioconférence et vos identifiants.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'المشاركة المباشرة وطرح الأسئلة على المؤطرين',
          fr: 'Suivre la session en direct et poser vos questions',
        },
        detail: {
          ar: 'انضم إلى الحصة المباشرة، طبق التمارين العملية على منصات الدفع والخدمات الرقمية، واستفد من التوجيه الفوري للمكونين.',
          fr: 'Connectez-vous à l’atelier en direct, suivez les démonstrations pratiques et échangez avec les formateurs.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'بريد إلكتروني صحيح لاستلام دعوة الحصة الافتراضية',
          fr: 'Adresse e-mail valide pour recevoir l’invitation vidéo',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'هاتف ذكي، لوحة إلكترونية، أو حاسوب متصل بالإنترنت',
          fr: 'Smartphone, tablette ou ordinateur avec accès internet',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'سماعات أذن لمتابعة الشرح التفاعلي بوضوح',
          fr: 'Écouteurs ou haut-parleurs fonctionnels',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين المسار الحضوري والمسار عن بعد في مبادرة جيل لجيل 777؟',
          fr: 'Quelle différence entre le parcours présentiel et le parcours à distance 7.77 ?',
        },
        answer: {
          ar: 'المحتوى التدريبي موحد يركز على الإدماج الرقمي، غير أن المسار عن بعد يتيح المتابعة التفاعلية من المنزل عبر الإنترنت دون الحاجة للتنقل إلى المراكز.',
          fr: 'Les deux formats partagent les mêmes objectifs pédagogiques, le volet à distance offrant la liberté d’apprendre depuis votre domicile partout en Algérie.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تسجيل أكثر من فرد من العائلة في الدورات عن بعد؟',
          fr: 'Plusieurs membres d’une même famille peuvent-ils suivre les séances ?',
        },
        answer: {
          ar: 'نعم، تسمى المبادرة "جيل لجيل 777" لأنها تشجع مشاركة التلاميذ والطلبة والأولياء وكبار السن لاكتساب مهارات رقمية مشتركة.',
          fr: 'Oui, le programme Jil 777 encourage la participation intergénérationnelle des élèves, jeunes adultes, parents et seniors.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا لم يصلني رابط الحصة بعد التسجيل في منصة 777؟',
          fr: 'Que faire si le lien de connexion ne parvient pas dans ma boîte mail ?',
        },
        answer: {
          ar: 'افحص مجلد الرسائل غير المرغوب فيها (Spam) أولا، وتأكد من صحة البريد المدخل في لوحة الرزنامة قبل موعد الحصة بوقت كاف.',
          fr: 'Consultez votre dossier courrier indésirable (Spam) et vérifiez l’adresse e-mail saisie lors de votre inscription sur le portail.',
        },
      },
      {
        question: {
          ar: 'هل تتضمن هذه الصفحة الفيديو التعريفي ببرنامج جيل لجيل 777؟',
          fr: 'La vidéo officielle de présentation 777 est-elle disponible ici ?',
        },
        answer: {
          ar: 'نعم، الفيديو الرسمي الموضح لأهداف برنامج جيل لجيل 777 وطريقة الاستفادة منه مدمج للمشاهدة المباشرة في هذه الصفحة.',
          fr: 'Oui, la vidéo officielle présentant le programme Jil 777 est accessible directement sur cette fiche guide.',
        },
      },
    ],
  },

  // 6. awlyaa-process
  {
    id: 'awlyaa-process',
    slug: 'awlyaa-process',
    title: {
      ar: 'كيفية التسجيل في فضاء الأولياء 2026 | شرح خطوة بخطوة',
      fr: 'Inscription à l’Espace Parents Awlyaa 2026 | Guide Étape par Étape',
    },
    sectorId: 'awlyaa-education',
    responsibleEntity: {
      ar: 'وزارة التربية الوطنية',
      fr: 'Ministère de l’Éducation Nationale',
    },
    description: {
      ar: 'الشرح الكامل لكيفية التسجيل في فضاء الأولياء 2026 عبر منصة awlyaa.education.dz/login: خطوات إنشاء حساب ولي الأمر، إضافة الأبناء برقم التعريف المدرسي، طباعة الاستمارة للمصادقة في المؤسسة، متابعة كشوف النقاط والغيابات وطلبات التحويل، مع الفيديو التوضيحي.',
      fr: 'Guide détaillé pas à pas pour s’inscrire sur l’Espace Parents Awlyaa 2026 (awlyaa.education.dz/login) : création du compte parent, rattachement des élèves via l’identifiant scolaire à 16 chiffres, validation en établissement, suivi des bulletins et tutoriel vidéo officiel.',
    },
    officialLink: 'https://awlyaa.education.dz/login',
    videoEmbedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D485913154242019&show_text=false',
    targetAudience: {
      ar: 'أولياء أمور التلاميذ والأوصياء القانونيون في الأطوار التعليمية الثلاثة',
      fr: 'Parents et tuteurs légaux d’élèves des cycles primaire, moyen et secondaire',
    },
    channel: {
      ar: 'بوابة awlyaa.education.dz/login + مصادقة مدير المؤسسة التربوية',
      fr: 'Portail awlyaa.education.dz/login + validation par le chef d’établissement',
    },
    keyRequirement: {
      ar: 'رقم التعريف المدرسي للتلميذ (16 رقما) وبريد إلكتروني فعال للولي',
      fr: 'Identifiant scolaire de l’élève (16 chiffres) et e-mail actif du parent',
    },
    estimatedDuration: {
      ar: '10 دقائق للتسجيل الإلكتروني وتفعيل فوري بعد تأكيد مدير المؤسسة',
      fr: '10 min en ligne puis activation après validation du directeur d’école',
    },
    cost: {
      ar: 'مجاني بالكامل دون أي رسوم',
      fr: '100 % Gratuit',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'إنشاء حساب جديد على awlyaa.education.dz/login',
          fr: 'Créer un compte parent sur awlyaa.education.dz/login',
        },
        detail: {
          ar: 'اضغط على خيار تسجيل جديد، أدخل بريدك الإلكتروني وكلمة المرور، ثم استكمل بيانات الحالة المدنية ورقم التعريف الوطني NIN للولي أو الوصي.',
          fr: 'Cliquez sur nouvelle inscription, saisissez votre e-mail et mot de passe, puis complétez votre état civil et votre numéro NIN de tuteur.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'إدخال بيانات المهنة والولاية والعنوان الشخصي',
          fr: 'Renseigner les coordonnées professionnelles et de résidence',
        },
        detail: {
          ar: 'حدد صفة القرابة (أب، أم، وصي قانوني) وولاية الإقامة ورقم الهاتف الشخصي لضمان استلام إشعارات المؤسسة التربوية.',
          fr: 'Précisez le lien de parenté (père, mère ou tuteur légal), votre wilaya et votre numéro de mobile pour les notifications scolaires.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'إضافة الأبناء المتمدرسين برقم التعريف المدرسي (16 رقما)',
          fr: 'Rattacher vos enfants via l’identifiant scolaire à 16 chiffres',
        },
        detail: {
          ar: 'اختر ولاية التمدرس، بلدية المؤسسة، واسم المدرسة أو المتوسطة أو الثانوية، ثم أدخل رقم التعريف المدرسي الخاص بكل ابن أو ابنة.',
          fr: 'Sélectionnez la wilaya de scolarisation, l’établissement fréquenté et saisissez le numéro d’identification scolaire de chaque élève.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'طباعة الاستمارة وإيداعها لدى مدير المؤسسة للتفعيل',
          fr: 'Imprimer le formulaire et le déposer auprès de la direction',
        },
        detail: {
          ar: 'حمل واطبع استمارة التسجيل من المنصة ووقعها ثم قدمها لأمانة مدير المؤسسة التربوية ليتم تفعيل الحساب وظهور النقاط والغيابات فوريا.',
          fr: 'Téléchargez l’attestation d’inscription générée, signez-la et remettez-la au directeur d’établissement pour activer définitivement votre espace.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'رقم التعريف المدرسي للتلميذ المكون من 16 رقما',
          fr: 'Numéro d’identification scolaire à 16 chiffres de l’élève',
        },
        isMandatory: true,
        note: {
          ar: 'يدون أعلى كشف النقاط الفصلي أو الشهادة المدرسية الصادرة من المدرسة.',
          fr: 'Indiqué en haut des bulletins trimestriels ou certificats de scolarité.',
        },
      },
      {
        name: {
          ar: 'بطاقة التعريف الوطنية للولي وبريد إلكتروني شخصي فعال',
          fr: 'CNI du parent et adresse e-mail personnelle valide',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'استمارة التسجيل المطبوعة والموقعة للمصادقة في المؤسسة',
          fr: 'Formulaire d’inscription imprimé pour validation scolaire',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'وثيقة الكفالة أو الوصاية القانونية (عند التسجيل بصفة وصي)',
          fr: 'Acte de tutelle ou kafala (uniquement pour les tuteurs légaux)',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'أين أجد رقم التعريف المدرسي الخاص بابني لإضافته في فضاء الأولياء؟',
          fr: 'Où trouver l’identifiant scolaire à 16 chiffres pour rattacher mon enfant ?',
        },
        answer: {
          ar: 'يتوفر رقم التعريف المدرسي ذو الـ 16 رقما في الجزء العلوي من الشهادة المدرسية أو كشف النقاط الفصلي، ويمكن طلبه من أمانة المؤسسة التربوية.',
          fr: 'Ce code à 16 chiffres figure sur la fiche de scolarité et les bulletins de notes remis par l’école ; vous pouvez également le demander au secrétariat.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني متابعة أبناء يدرسون في مدارس مختلفة ضمن نفس الحساب؟',
          fr: 'Puis-je suivre plusieurs enfants scolarisés dans différents établissements sur un seul compte ?',
        },
        answer: {
          ar: 'نعم، يتيح حساب الولي الواحد ربط جميع الأبناء المتمدرسين في الابتدائي والمتوسط والثانوي حتى لو كانوا في مؤسسات مختلفة.',
          fr: 'Oui, un seul compte parent sur Awlyaa permet de rattacher l’ensemble de vos enfants quel que soit leur cycle ou leur établissement.',
        },
      },
      {
        question: {
          ar: 'لماذا لا تظهر كشوف النقاط رغم إتمام التسجيل الإلكتروني في فضاء الأولياء؟',
          fr: 'Pourquoi les bulletins n’apparaissent-ils pas après mon inscription en ligne ?',
        },
        answer: {
          ar: 'يتطلب التفعيل النهائي للربط طباعة الاستمارة وإيداعها لدى مدير المؤسسة التربوية ليقوم بالمصادقة الإلكترونية على علاقة القرابة.',
          fr: 'Le rattachement reste en attente jusqu’au dépôt de la fiche imprimée auprès du directeur d’école/collège/lycée qui valide techniquement le compte.',
        },
      },
      {
        question: {
          ar: 'ما هي أبرز الخدمات المتاحة بعد تفعيل حساب فضاء الأولياء 2026؟',
          fr: 'Quels services offre l’Espace Parents Awlyaa une fois activé ?',
        },
        answer: {
          ar: 'يتيح الفضاء الاطلاع على كشوف النقاط الفصلية، مراقبة الغيابات والتأخرات، التسجيل في السنة الأولى ابتدائي والتحضيرية، وتقديم طلبات التحويل الإلكتروني.',
          fr: 'Vous accédez aux bulletins trimestriels, au suivi des absences, aux demandes de transfert scolaire, à l’inscription en 1ère AP et aux recours d’orientation.',
        },
      },
    ],
  },

  // 7. e-declaration
  {
    id: 'e-declaration',
    slug: 'e-declaration',
    title: {
      ar: 'التصريح الإلكتروني بضياع الوثائق عن بعد مع الشرطة الجزائرية (DGSN)',
      fr: 'Déclaration de Perte de Documents en Ligne (DGSN)',
    },
    sectorId: 'dgsn',
    responsibleEntity: {
      ar: 'المديرية العامة للأمن الوطني (DGSN)',
      fr: 'Direction Générale de la Sûreté Nationale (DGSN)',
    },
    description: {
      ar: 'الدليل العملي لخدمة التصريح بالضياع عن بعد عبر منصة المديرية العامة للأمن الوطني dgsn.dz/e-declaration/، للإبلاغ الفوري عن فقدان بطاقة التعريف الوطنية، جواز السفر، رخصة السياقة، أو البطاقة الرمادية دون الحاجة للتنقل المبدئي إلى مركز الشرطة، مرفقا بفيديو الشرح الرسمي.',
      fr: 'Guide pratique du téléservice e-Déclaration de perte de la Sûreté Nationale (dgsn.dz/e-declaration/) pour signaler immédiatement à distance la perte de votre CNI, passeport, permis de conduire ou carte grise et obtenir votre récépissé officiel, avec tutoriel vidéo.',
    },
    officialLink: 'https://www.dgsn.dz/e-declaration/',
    videoEmbedUrl: 'https://www.youtube.com/embed/PWTHYIOMKgE',
    videoWatchUrl: 'https://www.youtube.com/watch?v=PWTHYIOMKgE',
    targetAudience: {
      ar: 'كافة المواطنين والمقيمين عند فقدان أو ضياع الوثائق الإدارية والرسمية',
      fr: 'Tout citoyen ou résident confronté à la perte de pièces officielles',
    },
    channel: {
      ar: 'البوابة الإلكترونية للشرطة الجزائرية dgsn.dz/e-declaration/',
      fr: 'Portail officiel de la Police Algérienne dgsn.dz/e-declaration/',
    },
    keyRequirement: {
      ar: 'البيانات الشخصية الدقيقة، نوع وتاريخ ومكان ضياع الوثيقة، واختيار مقر الأمن',
      fr: 'État civil exact, nature du document, lieu/date de perte et commissariat',
    },
    estimatedDuration: {
      ar: 'تصريح فوري متاح 24/7 واستخراج الوصل بعد التأكيد',
      fr: 'Service disponible 24h/24 et 7j/7 avec traitement prioritaire',
    },
    cost: {
      ar: 'مجاني بالكامل',
      fr: '100 % Gratuit',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'الدخول إلى منصة التصريح بالضياع dgsn.dz/e-declaration/',
          fr: 'Accéder au formulaire dgsn.dz/e-declaration/',
        },
        detail: {
          ar: 'افتح الخدمة الرقمية على موقع المديرية العامة للأمن الوطني واختر الولاية ومصلحة الأمن الحضري أو الدائرة المختصة بمكان الضياع أو الإقامة.',
          fr: 'Ouvrez la plateforme officielle DGSN et désignez la wilaya ainsi que le commissariat territorialement compétent.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'تعبئة هوية المصرح وتحديد الوثيقة الضائعة',
          fr: 'Renseigner votre identité et le document perdu',
        },
        detail: {
          ar: 'أدخل الاسم، اللقب، تاريخ الميلاد، رقم الهاتف، وحدد نوع الوثيقة المفقودة (بطاقة تعريف، جواز سفر، رخصة سياقة، بطاقة رمادية، أو بطاقة مقيم).',
          fr: 'Saisissez votre identité, numéro de téléphone et précisez la nature exacte de la pièce perdue (CNI, passeport, permis, carte grise...).',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'ذكر تاريخ ومكان وتفاصيل الضياع بدقة',
          fr: 'Préciser les circonstances, le lieu et la date de la perte',
        },
        detail: {
          ar: 'أضف رقم الوثيقة إن كان متوفرا لديك، وتاريخ الفقدان والمكان التقريبي مع التحقق التام من صحة المعطيات قبل الإرسال.',
          fr: 'Indiquez si possible le numéro du titre perdu, le lieu approximatif et la date exacte avant de valider la déclaration.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'تأكيد التصريح وحفظ وصل المتابعة لمباشرة التجديد',
          fr: 'Enregistrer le récépissé et engager le renouvellement',
        },
        detail: {
          ar: 'احتفظ برقم التسجيل أو اطبع وصل التصريح الإلكتروني واستعمله في إجراءات استخراج البديل لدى البلدية أو الجهة المصدرة.',
          fr: 'Téléchargez l’accusé ou notez la référence de votre déclaration pour engager l’émission du duplicata auprès de l’APC ou du service émetteur.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'بيانات الحالة المدنية الكاملة ورقم التعريف الوطني NIN',
          fr: 'Données complètes d’état civil et numéro NIN',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'رقم الهاتف النقال وبريد إلكتروني لتأكيد استلام التصريح',
          fr: 'Numéro de mobile et adresse e-mail de confirmation',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'نسخة أو رقم الوثيقة الضائعة (إن وجدت)',
          fr: 'Numéro ou ancienne copie du document perdu (si disponible)',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي الوثائق التي يمكن التصريح بضياعها عبر خدمة e-declaration للشرطة؟',
          fr: 'Quels titres peut-on déclarer perdus via le portail e-declaration DGSN ?',
        },
        answer: {
          ar: 'تشمل الخدمة بطاقة التعريف الوطنية، جواز السفر، رخصة السياقة، البطاقة الرمادية، البطاقة المهنية أو بطاقة الطالب، وشهادات رسمية أخرى.',
          fr: 'Le service couvre la carte d’identité, le passeport, le permis de conduire, la carte grise ainsi que diverses pièces administratives officielles.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني استخدام التصريح الإلكتروني إذا تعرضت وثائقي للسرقة؟',
          fr: 'Cette téléprocédure remplace-t-elle le dépôt de plainte en cas de vol ?',
        },
        answer: {
          ar: 'لا، التصريح الإلكتروني مخصص لحالات الضياع العرضي فقط؛ أما في حالات السرقة فيجب التوجه فورا إلى أقرب مقر أمن لتحرير محضر رسمي.',
          fr: 'Non, ce guichet concerne uniquement la perte accidentelle ; en cas de vol avéré, vous devez obligatoirement déposer plainte en personne au commissariat.',
        },
      },
      {
        question: {
          ar: 'ماذا يحدث إذا وجد مواطن آخر وثيقتي الضائعة وسلمها للشرطة؟',
          fr: 'Comment suis-je prévenu si ma pièce perdue est retrouvée par la police ?',
        },
        answer: {
          ar: 'يتيح إدخال رقم هاتفك الصحيح في الاستمارة للمصالح الأمنية الاتصال بك فورا في حال العثور على الوثيقة وتسليمها للمركز.',
          fr: 'Grâce au numéro de téléphone renseigné dans le formulaire, les services de police peuvent vous contacter rapidement dès qu’une pièce correspondante est restituée.',
        },
      },
      {
        question: {
          ar: 'هل يتوفر فيديو توضيحي لشرح طريقة ملء استمارة التصريح بالضياع؟',
          fr: 'Où regarder le tutoriel officiel d’utilisation d’e-declaration ?',
        },
        answer: {
          ar: 'نعم، فيديو المديرية العامة للأمن الوطني الذي يشرح كل الحقول والخطوات متوفر للمشاهدة المباشرة داخل هذه الصفحة.',
          fr: 'Oui, la vidéo officielle de la DGSN expliquant chaque étape de remplissage du formulaire est directement intégrée sur cette page.',
        },
      },
    ],
  },

  // 8. e-mahata.naftal
  {
    id: 'e-mahata.naftal',
    slug: 'e-mahata.naftal',
    title: {
      ar: 'التسجيل في منصة محطتي نفطال لاقتناء عجلات السيارات (E-Mahata)',
      fr: 'Inscription sur E-Mahata Naftal pour l’Achat de Pneumatiques',
    },
    sectorId: 'naftal',
    responsibleEntity: {
      ar: 'الشركة الوطنية لتسويق وتوزيع المنتجات البترولية (نفطال - Naftal)',
      fr: 'Entreprise Nationale Naftal SPA',
    },
    description: {
      ar: 'الدليل الكامل للتسجيل في منصة محطتي الإلكترونية التابعة لشركة نفطال (e-mahata.naftal.dz) لاقتناء عجلات السيارات (الإطارات المطاطية) والزيوت والخدمات في مراكز الصيانة المعتمدة بالأسعار الرسمية وبشفافية تامة، مع فيديو الشرح خطوة بخطوة.',
      fr: 'Guide complet d’inscription sur la plateforme officielle E-Mahata de Naftal (e-mahata.naftal.dz) pour réserver et acheter des pneumatiques automobiles et services d’entretien aux prix réglementés en station, accompagné du tutoriel vidéo officiel.',
    },
    officialLink: 'https://e-mahata.naftal.dz/',
    videoEmbedUrl: 'https://www.youtube.com/embed/U-3YSOxddEs',
    targetAudience: {
      ar: 'أصحاب المركبات والسيارات الفردية والمهنية في الجزائر',
      fr: 'Propriétaires de véhicules particuliers et professionnels en Algérie',
    },
    channel: {
      ar: 'بوابة e-mahata.naftal.dz + محطات الخدمات ونقاط نفطال المعتمدة',
      fr: 'Portail e-mahata.naftal.dz + stations-service et centres Naftal',
    },
    keyRequirement: {
      ar: 'البطاقة الرمادية للمركبة، تحديد أبعاد العجلة، ورقم هاتف نشط',
      fr: 'Carte grise du véhicule, dimensions exactes du pneu et mobile actif',
    },
    estimatedDuration: {
      ar: 'طلب وحجز إلكتروني فوري حسب توفر المخزون في المحطة المختارة',
      fr: 'Commande en ligne immédiate selon disponibilité en station Naftal',
    },
    cost: {
      ar: 'التسعيرة الرسمية المقننة المعتمدة من شركة نفطال',
      fr: 'Tarifs officiels réglementés par Naftal',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          ar: 'فتح حساب الزبون على منصة e-mahata.naftal.dz',
          fr: 'Créer un compte sur e-mahata.naftal.dz',
        },
        detail: {
          ar: 'ادخل إلى بوابة محطتي الرسمية وسجل حسابك باستخدام رقم الهاتف النقال وبيانات بطاقة التعريف الوطنية لتأكيد العضوية عبر SMS.',
          fr: 'Ouvrez le portail e-mahata.naftal.dz et créez votre compte personnel avec votre numéro de mobile vérifié par SMS et votre identité.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ar: 'تسجيل بيانات المركبة والبطاقة الرمادية',
          fr: 'Enregistrer les données de votre véhicule (carte grise)',
        },
        detail: {
          ar: 'أدخل رقم الترقيم والبيانات التقنية للمركبة وتأكد من مطابقة مقاس الإطارات المطلوب لمواصفات سيارتك.',
          fr: 'Saisissez l’immatriculation et les informations de la carte grise afin de garantir la compatibilité des pneumatiques demandés.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ar: 'اختيار مقاس العجلات وولاية ومحطة التوزيع',
          fr: 'Choisir la dimension des pneus et la station Naftal',
        },
        detail: {
          ar: 'حدد المقاس الدقيق للعجلات (العرض، الارتفاع، القطر مثل 195/65 R15) واختر محطة نفطال القريبة التي يتوفر بها المخزون.',
          fr: 'Sélectionnez les dimensions exactes (largeur, hauteur, diamètre) et la station-service Naftal disposant du stock dans votre wilaya.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ar: 'تأكيد الموعد والحضور بالمركبة للتركيب والتسديد',
          fr: 'Valider le rendez-vous et effectuer le montage en station',
        },
        detail: {
          ar: 'توجه إلى محطة نفطال المختارة في التاريخ المحدد مرفقا بالمركبة، البطاقة الرمادية، ووصل الحجز للاستفادة من التركيب والترصيص بالسعر الرسمي.',
          fr: 'Présentez le véhicule, la carte grise et le code de réservation au rendez-vous pour procéder au paiement et à la pose sur place.',
        },
      },
    ],
    documentsRequired: [
      {
        name: {
          ar: 'البطاقة الرمادية الأصلية للمركبة المسجلة في المنصة',
          fr: 'Carte grise originale du véhicule enregistré',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'بطاقة التعريف الوطنية ورقم الهاتف المسجل لاستلام رمز التأكيد',
          fr: 'CNI et numéro de téléphone utilisé lors de la commande',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'وصل أو رقم الحجز الصادر عن منصة محطتي e-mahata',
          fr: 'Référence ou bon de réservation E-Mahata',
        },
        isMandatory: true,
      },
      {
        name: {
          ar: 'بطاقة الدفع الذهبية أو CIB (لتسديد المستحقات عند الإتاحة)',
          fr: 'Carte Edahabia ou CIB pour le règlement sans espèces',
        },
        isMandatory: false,
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أعرف مقاس العجلات المناسب لسيارتي قبل التسجيل في منصة محطتي؟',
          fr: 'Comment connaître la bonne dimension de pneu avant de commander sur E-Mahata ?',
        },
        answer: {
          ar: 'تجد المقاس القياسي مطبوعا على جانب الإطار الحالي (مثل 205/55 R16) وكذلك على الملصق المثبت داخل إطار باب السائق.',
          fr: 'La référence figure sur le flanc de vos pneus actuels (ex. 205/55 R16) ainsi que sur l’étiquette technique située dans le montant de la portière conducteur.',
        },
      },
      {
        question: {
          ar: 'هل يشترط إحضار السيارة إلى محطة نفطال عند استلام العجلات؟',
          fr: 'Faut-il obligatoirement venir avec le véhicule pour retirer les pneus ?',
        },
        answer: {
          ar: 'نعم، تشترط معظم نقاط بيع نفطال حضور المركبة المطابقة للبطاقة الرمادية لضمان التركيب المباشر والشفافية في التوزيع للمستهلك النهائي.',
          fr: 'Oui, la présentation du véhicule correspondant à la carte grise enregistrée est exigée en station pour le montage direct sur place.',
        },
      },
      {
        question: {
          ar: 'كم عدد العجلات المسموح بحجزها عبر منصة e-mahata؟',
          fr: 'Combien de pneus peut-on réserver par véhicule sur E-Mahata ?',
        },
        answer: {
          ar: 'تضبط المنصة الحصة المسموحة لكل مركبة وفق الوفرة الدورية واللوائح التنظيمية لشركة نفطال لتغطية أكبر عدد من السائقين.',
          fr: 'Le quota autorisé par immatriculation est régulé automatiquement par Naftal selon la disponibilité des lots et l’historique d’achat.',
        },
      },
      {
        question: {
          ar: 'هل تتوفر طريقة التسجيل في منصة محطتي بالفيديو على هذه الصفحة؟',
          fr: 'Existe-t-il un tutoriel vidéo pour l’inscription sur E-Mahata ?',
        },
        answer: {
          ar: 'نعم، يتضمن الدليل الفيديو التوضيحي الكامل لخطوات إنشاء الحساب وطلب العجلات عبر e-mahata.naftal.dz.',
          fr: 'Oui, la vidéo explicative pas à pas est intégrée directement dans ce guide pour faciliter votre réservation.',
        },
      },
    ],
  },
];

export const batch1ProcedureGuides: Record<string, Partial<RichGuideContent>> = {
  'adhahi.dz': {
    intro: {
      ar: [
        'تهدف منصة أضاحي العيد الرقمية (adhahi.dz)، التي تشرف عليها وزارة الفلاحة والتنمية الريفية والصيد البحري، إلى تنظيم عملية اقتناء الأضاحي بأسعار مسقفة ومدروسة وحماية القدرة الشرائية للأسر الجزائرية بعيدا عن المضاربة.',
        'تتيح البوابة للمواطنين إنشاء حساب شخصي في دقائق معدودة عبر رقم التعريف الوطني NIN، ثم اختيار الولاية ونقطة البيع المعتمدة الأقرب إليهم من قائمة الفضاءات التي تسهر على تسييرها الدواوين العمومية والمصالح الفلاحية.',
        'تضمن جميع نقاط البيع المدرجة في adhahi.dz إشرافا بيطريا مستمرا قبل وخلال عملية التسليم، كما يرافق هذا الدليل الفيديو الرسمي الموضح لكل خطوة منذ التسجيل وحتى استلام وصل الحجز.'
      ],
      fr: [
        'Déployée par le Ministère de l’Agriculture et du Développement Rural, la plateforme Adhahi DZ (adhahi.dz) permet aux ménages algériens de réserver leur mouton de l’Aïd en ligne à des tarifs encadrés et transparents.',
        'En quelques minutes via votre numéro d’identification national (NIN), vous créez un compte personnel, choisissez votre wilaya et sélectionnez le point de vente officiel le plus proche géré par les offices publics agréés.',
        'Chaque animal proposé sur le réseau fait l’objet d’un contrôle vétérinaire rigoureux ; ce guide regroupe les étapes clés, les pièces exigées lors du retrait et le tutoriel vidéo officiel complet.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'حيازة بطاقة التعريف الوطنية البيومترية ورقم التعريف الوطني NIN صحيح غير مستخدم في حجز مسبق.',
        'توفر رقم هاتف شخصي نشط لاستقبال رموز التأكيد وتنبيهات موعد الحضور إلى نقطة البيع.',
        'الالتزام باختيار نقطة البيع الواقعة ضمن نطاق ولاية الإقامة أو المحيط القريب المحدد في المنصة.',
        'حفظ وصل الحجز الإلكتروني أو طباعته وإحضار البطاقة البنكية أو الذهبية إذا كان الدفع إلكترونيا.',
      ],
      fr: [
        'Détenir une carte nationale biométrique avec NIN valide n’ayant pas déjà fait l’objet d’une réservation sur la campagne.',
        'Disposer d’un numéro de téléphone mobile actif pour recevoir les codes de confirmation.',
        'Sélectionner un point de vente rattaché à votre wilaya selon les disponibilités affichées.',
        'Télécharger le bon de réservation officiel et préparer sa carte CIB/Edahabia le cas échéant.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم ظهور نقاط بيع متاحة في ولايتي أو نفاد الحصة اليومية',
          fr: 'Aucun point de vente disponible dans ma wilaya ou quota temporairement épuisé',
        },
        solution: {
          ar: 'تفتح وزارة الفلاحة الحصص بشكل تدريجي حسب وصول الدفعات إلى نقاط البيع؛ أعد المحاولة في أوقات التحديث الصباحية أو اختر نقطة مجاورة مفتوحة.',
          fr: 'Les lots sont débloqués progressivement selon l’approvisionnement des centres ; réessayez aux heures d’ouverture ou vérifiez un point de vente voisin.',
        },
      },
      {
        issue: {
          ar: 'رفض رقم التعريف الوطني NIN أو ظهور رسالة أن الحساب مسجل مسبقا',
          fr: 'Message d’erreur indiquant que le NIN est déjà enregistré',
        },
        solution: {
          ar: 'تحقق من إدخال الـ 18 رقما بدقة كما في البطاقة البيومترية، أو استخدم خيار استرجاع كلمة المرور إذا كنت قد فتحت حسابا سابقا.',
          fr: 'Contrôlez les 18 chiffres de votre NIN et utilisez la récupération de mot de passe si un compte existe déjà avec votre identifiant.',
        },
      },
      {
        issue: {
          ar: 'بطء تحميل الموقع بسبب الضغط الكبير لحظة فتح التسجيلات',
          fr: 'Ralentissement du portail adhahi.dz lors des pics d’affluence',
        },
        solution: {
          ar: 'انتظر بضع دقائق دون إرسال طلبات متكررة بالزر نفسه وتجنب تحديث الصفحة أثناء تأكيد عملية الدفع أو إصدار الوصل.',
          fr: 'Évitez de rafraîchir la page en pleine soumission ou lors du règlement pour ne pas interrompre la génération du bon.',
        },
      },
    ],
    extraFaqs: [],
  },

  anae: {
    intro: {
      ar: [
        'تمثل الوكالة الوطنية للمقاول الذاتي (ANAE) الذراع المؤسساتي الرسمي لتأطير أصحاب المهن المستقلة والخدمات الرقمية والاستشارية في الجزائر، ومنحهم وضعا قانونيا واجتماعيا وضريبيا مبسطا دون أعباء السجل التجاري التقليدي.',
        'من خلال بوابة التسجيل الإلكتروني anae.dz/user/ae/register/، يستطيع المصممون، المطورون، صناع المحتوى، المترجمون، ومقدمو الخدمات المنزلية والتقنية طلب بطاقة المقاول الذاتي الرقمية مجانا في خطوات واضحة.',
        'بمجرد استلام البطاقة، يفتح المقاول الذاتي حسابا بنكيا مهنيا ويصدر فواتير قانونية لزبائنه في الداخل والخارج، مع الانتساب لصندوق الضمان الاجتماعي لغير الأجراء CASNOS والاستفادة من ضريبة جزافية مخفضة تقدر بـ 0.5%.'
      ],
      fr: [
        'L’Agence Nationale de l’Auto-Entrepreneur (ANAE) encadre officiellement les travailleurs indépendants, freelances et prestataires de services en Algérie en leur offrant un cadre juridique, fiscal et social adapté sans passer par le registre de commerce classique.',
        'Sur le guichet en ligne anae.dz/user/ae/register/, développeurs, graphistes, formateurs, consultants et artisans digitaux déposent gratuitement leur dossier pour obtenir leur carte d’auto-entrepreneur.',
        'Ce statut ouvre droit à la facturation légale, à l’ouverture d’un compte bancaire commercial dédié, à la couverture sociale CASNOS et au régime fiscal avantageux de l’IFU fixé à 0,5 % du chiffre d’affaires.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بلوغ السن القانونية للعمل مع التمتع بالجنسية الجزائرية أو إقامة قانونية سارية المفعول بالجزائر.',
        'ممارسة أحد الأنشطة الفردية المدرجة ضمن القائمة الرسمية لأنشطة المقاول الذاتي (الرقمنة، الاستشارة، الخدمات).',
        'عدم تجاوز سقف رقم الأعمال السنوي المحدد قانونا بـ 5 ملايين دينار جزائري.',
        'توفر رقم التعريف الوطني NIN، شهادة إقامة، وصورة شمسية رقمية واضحة بدون مؤثرات.',
      ],
      fr: [
        'Avoir atteint l’âge légal du travail et être de nationalité algérienne ou résident légal en Algérie.',
        'Exercer une activité individuelle figurant dans la nomenclature officielle ANAE (numérique, conseil, formation, services).',
        'Respecter le plafond annuel légal de chiffre d’affaires fixé à 5 millions de dinars.',
        'Disposer du NIN, d’un certificat de résidence récent et d’une photo d’identité numérique conforme.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم إيجاد تخصصي الحر بالاسم الدقيق ضمن قائمة أنشطة ANAE',
          fr: 'Mon métier freelance exact n’apparaît pas sous ce libellé dans la liste',
        },
        solution: {
          ar: 'ابحث بالكلمات المفتاحية الشاملة بالفرنسية أو العربية داخل تصنيفات الرقمنة والخدمات الاستشارية، واختر الرمز الأقرب لطبيعة عملك الفعلي.',
          fr: 'Effectuez la recherche par mots-clés généraux dans les catégories numérique, conseil ou prestation de services afin de retenir le code le plus proche.',
        },
      },
      {
        issue: {
          ar: 'رفض الملف بسبب عدم وضوح الصورة الشمسية أو وثيقة الإقامة',
          fr: 'Rejet du dossier pour photo ou certificat de résidence non conforme',
        },
        solution: {
          ar: 'أعد رفع صورة رسمية بخلفية بيضاء متساوية الإضاءة ونسخة واضحة مكتملة الحواف لشهادة الإقامة بصيغة JPG أو PDF.',
          fr: 'Téléversez une photo d’identité nette sur fond uni clair et un scan complet, bien cadré et lisible de votre certificat de résidence.',
        },
      },
      {
        issue: {
          ar: 'تساؤل حول توقيت التسجيل في الضرائب وصندوق CASNOS بعد قبول البطاقة',
          fr: 'Quand effectuer les démarches auprès des impôts (IFU) et de la CASNOS ?',
        },
        solution: {
          ar: 'مباشرة بعد تنزيل بطاقة المقاول الذاتي النهائية، تقدم بنسخة منها إلى مفتشية الضرائب ووكالة CASNOS لولايتك لتفعيل رقم التعريف الجبائي والتغطية.',
          fr: 'Dès la délivrance numérique de la carte ANAE, présentez-la au centre des impôts et à l’agence CASNOS de votre wilaya pour activer votre statut fiscal et social.',
        },
      },
    ],
    extraFaqs: [],
  },

  apostille: {
    intro: {
      ar: [
        'أطلقت المحافظة السامية للرقمنة بالتنسيق مع وزارة الشؤون الخارجية والجهات المعنية المنصة الوطنية الرقمية للأبوستيل (apostille.hcn.dz)، مما أحدث نقلة نوعية في تصديق الوثائق الجزائرية الموجهة إلى الخارج دون عناء السفر إلى المصالح المركزية.',
        'بموجب اتفاقية لاهاي، يغني ختم الأبوستيل الإلكتروني عن سلسلة التصديقات القنصلية التقليدية عند تقديم عقود الحالة المدنية أو الشهادات الجامعية أو صحف السوابق القضائية لدى الجامعات والهيئات في الدول الموقعة على الاتفاقية.',
        'يوضح هذا الدليل كيفية التسجيل برقم NIN، تحميل المستندات بصيغة PDF، تسديد رسم الطابع الجبائي إلكترونيا، وتنزيل شهادة الأبوستيل الموثقة برمز الاستجابة السريعة QR، إلى جانب الفيديو الإرشادي الرسمي.'
      ],
      fr: [
        'Développée par le Haut-Commissariat à la Numérisation en coordination avec les départements ministériels concernés, la plateforme nationale e-Apostille (apostille.hcn.dz) supprime les déplacements physiques pour la légalisation des documents destinés à l’étranger.',
        'Conformément à la Convention de La Haye, le certificat Apostille dématérialisé atteste de la véracité des signatures et cachets officiels apposés sur les actes algériens (état civil, justice, diplômes, actes notariés).',
        'Ce guide récapitule les étapes de dépôt numérique via votre NIN, les règles de préparation des fichiers PDF, le paiement du timbre électronique et le tutoriel vidéo officiel.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'حيازة بطاقة التعريف الوطنية البيومترية ورقم التعريف الوطني NIN لفتح الحساب الشخصي.',
        'أن تكون الوثيقة أصلية ومختومة وموقعة من الهيئة المصدرة (البلدية، المحكمة، الجامعة، أو الموثق).',
        'التأكد من أن البلد المستقبل للوثيقة منخرط في اتفاقية لاهاي الخاصة بالأبوستيل.',
        'مسح الوثيقة بوضوح بصيغة PDF وتوفر بطاقة الذهبية أو CIB لتسديد الطابع الجبائي الإلكتروني.',
      ],
      fr: [
        'Détenir un numéro NIN valide pour créer votre profil citoyen sur apostille.hcn.dz.',
        'Présenter un acte original dûment revêtu du sceau et de la signature de l’autorité émettrice.',
        'Vérifier que l’État destinataire est bien partie à la Convention de La Haye sur l’Apostille.',
        'Préparer un fichier PDF net et disposer d’une carte CIB ou Edahabia pour le timbre fiscal.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'رفض الوثيقة بسبب غياب المصادقة الأولية للجهة الإدارية المصدرة',
          fr: 'Rejet pour défaut de visa ou signature préalable de l’autorité source',
        },
        solution: {
          ar: 'تأكد من ختم الشهادة الجامعية لدى مديرية التعليم العالي أو المصادقة الأولية المطلوبة لوثائق المحاكم والبلديات قبل رفعها في منصة الأبوستيل.',
          fr: 'Assurez-vous que le document comporte la signature officielle requise par le ministère ou l’organisme source avant de déposer la demande.',
        },
      },
      {
        issue: {
          ar: 'البلد الذي أسافر إليه غير مدرج في قائمة دول الأبوستيل',
          fr: 'Le pays de destination n’apparaît pas dans la liste Apostille',
        },
        solution: {
          ar: 'تطبق اتفاقية الأبوستيل على الدول المنضمة إليها فقط؛ أما الدول غير الأعضاء فتخضع للمسار العادي للتصديق عبر وزارة الشؤون الخارجية والسفارة المعنية.',
          fr: 'L’Apostille ne s’applique qu’aux États signataires ; pour les pays non membres, la légalisation classique au MAE et au consulat reste applicable.',
        },
      },
      {
        issue: {
          ar: 'تجاوز حجم ملف PDF الحد المسموح به في منصة apostille.hcn.dz',
          fr: 'Fichier PDF trop volumineux lors du téléversement',
        },
        solution: {
          ar: 'استعمل أداة ضغط PDF المتوفرة في قسم الأدوات ببوابتنا لتخفيض حجم الملف مع الحفاظ الكامل على وضوح الأختام والنصوص.',
          fr: 'Utilisez notre outil de compression PDF afin de réduire la taille du fichier tout en préservant la lisibilité des tampons et écritures.',
        },
      },
    ],
    extraFaqs: [],
  },

  arpce: {
    intro: {
      ar: [
        'تعد مبادرة "جيل لجيل 777" للإدماج الرقمي، التي ترعاها سلطة ضبط البريد والاتصالات الإلكترونية (ARPCE) ووزارة البريد والمواصلات السلكية واللاسلكية، برنامجا وطنيا طموحا لنشر الثقافة التكنولوجية الآمنة عبر كافة ولايات الوطن.',
        'صممت هذه المبادرة لتواكب جميع الفئات العمرية من سن 7 إلى 77 سنة، حيث تقدم ورشات تطبيقية مجانية حضوريا وعن بعد في أساسيات استخدام الحاسوب، الأمن السيبراني، حماية الأطفال على الإنترنت، واستخدام المنصات الرقمية الوطنية.',
        'من خلال لوحة الرزنامة الرسمية على 777.mpt.gov.dz/calendar#cal-board، يمكنك تصفح المواعيد الأسبوعية وحجز مقعدك بسهولة، مع متابعة الفيديو التوضيحي المدمج في هذه الصفحة.'
      ],
      fr: [
        'Portée par l’Autorité de Régulation de la Poste et des Communications Électroniques (ARPCE) et le Ministère de la Poste et des Télécommunications, l’initiative « Jil 777 » vise à démocratiser les compétences numériques sur tout le territoire algérien.',
        'Ouvert aux citoyens de 7 à 77 ans, le programme déploie des ateliers gratuits en présentiel et en ligne couvrant la sécurité numérique, l’usage des téléservices publics, la protection des mineurs en ligne et l’initiation aux paiements électroniques.',
        'Consultez le calendrier des séances sur 777.mpt.gov.dz/calendar#cal-board pour réserver votre place et visionnez la vidéo de présentation intégrée ci-dessous.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'الاهتمام بتعلم المهارات الرقمية والانضمام لمجتمع المبادرة (مفتوحة لجميع الأعمار من 7 إلى 77 سنة).',
        'تحديد الولاية ونوع الحصة (حضورية في المراكز المعتمدة أو تفاعلية عن بعد عبر الإنترنت).',
        'توفر بريد إلكتروني فعال ورقم هاتف لتأكيد المقعد واستلام إشعار الورشة.',
        'الالتزام بحضور الموعد المحجوز في لوحة 777.mpt.gov.dz لضمان مقعدك.',
      ],
      fr: [
        'Aucun prérequis académique : le programme est ouvert à tout citoyen âgé de 7 à 77 ans.',
        'Choisir entre les ateliers en présentiel dans votre wilaya ou les webinaires en ligne.',
        'Disposer d’une adresse e-mail active et d’un numéro de téléphone pour la confirmation.',
        'Respecter l’horaire de la session réservée sur le calendrier 777.mpt.gov.dz.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم وجود مقاعد شاغرة في الورشة الحضورية بولايتك',
          fr: 'Atelier présentiel complet dans votre wilaya',
        },
        solution: {
          ar: 'راقب الرزنامة في بداية الأسبوع لإضافة حصص جديدة، أو اختر إحدى الدورات التفاعلية عن بعد المفتوحة للجميع في 777.mpt.gov.dz.',
          fr: 'Consultez les nouvelles planifications hebdomadaires ou inscrivez-vous à une session équivalente proposée à distance.',
        },
      },
      {
        issue: {
          ar: 'عدم ظهور لوحة التواريخ مباشرة عند فتح رابط منصة 777',
          fr: 'Le tableau du calendrier ne s’affiche pas immédiatement',
        },
        solution: {
          ar: 'انتقل مباشرة إلى الرابط الكامل مع الوسم 777.mpt.gov.dz/calendar#cal-board وانتظر بضع ثوان لتحميل جدول الورشات التفاعلي.',
          fr: 'Accédez bien à l’URL complète incluant l’ancre #cal-board et laissez quelques secondes au calendrier interactif pour charger.',
        },
      },
      {
        issue: {
          ar: 'تسجيل الأبناء القصر في حصص جيل لجيل 777',
          fr: 'Inscrire des enfants ou élèves aux ateliers Jil 777',
        },
        solution: {
          ar: 'يفضل إدخال بريد إلكتروني ورقم هاتف لولي الأمر عند تسجيل التلاميذ صغار السن ومرافقتهم أثناء الورشات المخصصة لهم.',
          fr: 'Renseignez l’e-mail et le téléphone d’un parent ou tuteur lors de l’inscription d’un mineur aux sessions dédiées.',
        },
      },
    ],
    extraFaqs: [],
  },

  arpce2: {
    intro: {
      ar: [
        'يركز هذا المسار التكميلي من برنامج جيل لجيل 7.77 على تمكين المواطنين في مختلف ولايات الجزائر من الاستفادة من ورشات الإدماج الرقمي عن بعد دون التقيد بالموقع الجغرافي أو الحاجة إلى التنقل.',
        'تغطي الحصص التفاعلية عن بعد موضوعات عملية تمس الحياة اليومية للمواطن، منها طرق التسجيل في المنصات الحكومية، حماية الحسابات الشخصية من التصيد والاحتيال، واكتساب المهارات الأساسية في التواصل الرقمي.',
        'يوفر هذا الدليل خطوات الانتقاء من رزنامة 777.mpt.gov.dz/calendar#cal-board واستلام رابط البث المباشر، إلى جانب الفيديو التوضيحي الرسمي.'
      ],
      fr: [
        'Ce volet dédié du programme Jil 7.77 permet aux citoyens de toutes les wilayas d’accéder aux formations d’inclusion numérique à distance sans contrainte de déplacement.',
        'Les sessions en ligne abordent des thématiques concrètes du quotidien : utilisation autonome des téléservices administratifs, prévention contre les arnaques en ligne, sécurité des mots de passe et bases bureautiques.',
        'Suivez les étapes ci-dessous pour filtrer les créneaux distanciels sur 777.mpt.gov.dz/calendar#cal-board et recevez votre accès directement par courriel.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'وجود اتصال بالإنترنت وجهاز هاتف ذكي أو لوحة رقمية أو حاسوب لمتابعة الحصة المباشرة.',
        'بريد إلكتروني صحيح ونشط لاستقبال رابط الدخول وتنبيه التوقيت قبل انطلاق الورشة.',
        'اختيار الحصص المصنفة عن بعد من خلال لوحة المواعيد في 777.mpt.gov.dz.',
        'الاستعداد للتطبيق العملي أثناء الورشة بطرح الأسئلة على الفريق المؤطر.',
      ],
      fr: [
        'Disposer d’une connexion internet stable sur smartphone, tablette ou ordinateur.',
        'Fournir un e-mail valide pour recevoir le lien de connexion avant le démarrage.',
        'Sélectionner explicitement les sessions marquées « À distance » sur le calendrier.',
        'Prendre quelques notes pratiques pour appliquer les conseils de cybersécurité au quotidien.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'تقطع الصوت أو بطء البث أثناء متابعة الحصة الرقمية عن بعد',
          fr: 'Coupures audio ou lenteur vidéo pendant le webinaire',
        },
        solution: {
          ar: 'أغلق التطبيقات المستهلكة للإنترنت في الخلفية وأعد الانضمام عبر رابط الدعوة، أو شاهد الشرح التعريفي المسجل المرفق في هذه الصفحة.',
          fr: 'Fermez les téléchargements en arrière-plan, vérifiez votre débit ou visionnez la vidéo récapitulative disponible sur cette fiche.',
        },
      },
      {
        issue: {
          ar: 'عدم وصول بريد التأكيد قبل ساعة من انطلاق الورشة',
          fr: 'Absence de courriel de confirmation à l’approche de la séance',
        },
        solution: {
          ar: 'راجع مجلد الرسائل الترويجية وغير المرغوب فيها (Spam)، وتأكد من كتابة امتداد البريد الإلكتروني بشكل سليم عند التسجيل.',
          fr: 'Vérifiez vos dossiers Spam et Promotions et assurez-vous qu’aucune faute de frappe n’a affecté votre adresse e-mail.',
        },
      },
      {
        issue: {
          ar: 'الالتباس بين الدورات الحضورية والدورات عن بعد في اللوحة',
          fr: 'Confondre les créneaux présentiels et à distance dans le tableau',
        },
        solution: {
          ar: 'اقرأ تفاصيل البطاقة المنبثقة عند النقر على الدورة في #cal-board للتأكد من وجود إشارة الحصة عن بعد والرابط الرقمي.',
          fr: 'Ouvrez la fiche de la session dans le calendrier #cal-board pour vérifier la mention de modalité avant de confirmer.',
        },
      },
    ],
    extraFaqs: [],
  },

  'awlyaa-process': {
    intro: {
      ar: [
        'يمثل فضاء الأولياء (awlyaa.education.dz) المنصة الرقمية الرسمية لوزارة التربية الوطنية المخصصة لربط الأولياء بالمؤسسات التربوية في الأطوار الثلاثة: الابتدائي، المتوسط، والثانوي.',
        'عبر حساب واحد فقط، يتمكن ولي الأمر من استعراض كشوف النقاط الفصلية للأبناء فور رصدها، تتبع المواظبة والغيابات، تقديم طلبات التحويل الإلكتروني بين المؤسسات، وكذا تسجيل التلاميذ في السنة الأولى ابتدائي والتربية التحضيرية.',
        'يشرح هذا الدليل المراحل الدقيقة لفتح الحساب في موسم 2026 بدءا من التسجيل عبر الإنترنت وإدخال رقم التعريف المدرسي ذي الـ 16 رقما وصولا إلى خطوة المصادقة الحاسمة لدى مدير المؤسسة، مع الفيديو التوضيحي الكامل.'
      ],
      fr: [
        'L’Espace Parents Awlyaa (awlyaa.education.dz) est le portail officiel du Ministère de l’Éducation Nationale reliant les familles aux établissements scolaires des trois cycles (primaire, moyen et secondaire).',
        'À partir d’un seul compte validé, les parents consultent les bulletins trimestriels dès leur publication, surveillent l’assiduité de leurs enfants, initient les demandes de transfert scolaire et gèrent les inscriptions en 1ère année primaire.',
        'Ce guide 2026 détaille l’inscription en ligne étape par étape, le rattachement via l’identifiant scolaire à 16 chiffres et la validation indispensable auprès du chef d’établissement.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'صفة الأب أو الأم أو الوصي القانوني لتلميذ متمدرس في مؤسسة تربوية عمومية أو خاصة معتمدة.',
        'حيازة رقم التعريف المدرسي المكون من 16 رقما لكل تلميذ (متوفر في كشف النقاط أو الشهادة المدرسية).',
        'بريد إلكتروني شخصي صحيح ورقم تعريف وطني NIN لإنشاء حساب الولي على awlyaa.education.dz/login.',
        'طباعة استمارة التسجيل وتقديمها لمدير المؤسسة التربوية لإتمام المصادقة النهائية.',
      ],
      fr: [
        'Être père, mère ou tuteur légal d’un élève scolarisé dans un établissement public ou privé agréé.',
        'Disposer du numéro d’identification scolaire à 16 chiffres de chaque enfant.',
        'Utiliser une adresse e-mail active et le NIN du parent lors de la création du compte sur awlyaa.education.dz/login.',
        'Imprimer la fiche d’inscription et la remettre au directeur de l’établissement pour activation finale.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'رسالة خطأ عند إدخال رقم التعريف المدرسي للتلميذ في فضاء الأولياء',
          fr: 'Erreur ou élève introuvable lors de la saisie de l’identifiant scolaire',
        },
        solution: {
          ar: 'تحقق من تطابق الـ 16 رقما حرفيا مع كشف النقاط، وتأكد من اختيار الولاية والبلدية والمؤسسة التعليمية الحالية التي يدرس بها التلميذ.',
          fr: 'Vérifiez l’exactitude des 16 chiffres sans espace ainsi que le bon choix de la wilaya, commune et établissement actuel.',
        },
      },
      {
        issue: {
          ar: 'عدم القدرة على دخول الحساب بسبب نسيان كلمة المرور في المواسم السابقة',
          fr: 'Mot de passe oublié d’un compte Awlyaa déjà créé l’an passé',
        },
        solution: {
          ar: 'استخدم رابط استرجاع كلمة المرور عبر بريدك الإلكتروني المسجل سابقا بدلا من محاولة إنشاء حساب جديد بنفس رقم التعريف الوطني.',
          fr: 'Utilisez l’option de réinitialisation par e-mail sur la page de connexion au lieu de recréer un doublon avec votre NIN.',
        },
      },
      {
        issue: {
          ar: 'ظهور حالة الحساب "قيد الانتظار" دون إمكانية تحميل كشف النقاط',
          fr: 'Statut « En attente de validation » bloquant l’accès aux notes',
        },
        solution: {
          ar: 'يجب تسليم وصل التسجيل المطبوع لمدير المدرسة أو المتوسطة أو الثانوية ليقوم بالتأكيد عبر نظام الرقمنة الخاص بالمؤسسة.',
          fr: 'Tant que le directeur d’école n’a pas validé votre attestation imprimée dans le système interne, le rattachement demeure en attente.',
        },
      },
    ],
    extraFaqs: [],
  },

  'e-declaration': {
    intro: {
      ar: [
        'أطلقت المديرية العامة للأمن الوطني (DGSN) خدمة التصريح الإلكتروني بضياع الوثائق (dgsn.dz/e-declaration/) لتخفيف العبء الإداري عن المواطنين وتجنيبهم عناء التنقل الأولي إلى مقرات الأمن الحضري عند فقدان أوراقهم الثبوتية.',
        'تمكن هذه الخدمة الرقمية المجانية، المتوفرة على مدار الساعة طيلة أيام الأسبوع، من تبليغ مصالح الشرطة فورا بفقدان بطاقة التعريف الوطنية أو جواز السفر أو رخصة السياقة أو البطاقة الرمادية، وحجز رقم تسجيل متسلسل للوثيقة المفقودة.',
        'يوضح هذا الدليل كيفية ملء كل خانة في استمارة التصريح بدقة، الفرق الضروري بين الضياع والسرقة، والوثائق اللازمة بعد استلام الوصل لمباشرة إجراءات التجديد، إلى جانب الفيديو الإرشادي الرسمي للشرطة الجزائرية.'
      ],
      fr: [
        'La Direction Générale de la Sûreté Nationale (DGSN) propose le téléservice gratuit e-Déclaration (dgsn.dz/e-declaration/) afin de simplifier le signalement de perte de documents officiels sans déplacement initial au commissariat.',
        'Accessible 24h/24 et 7j/7, la plateforme enregistre immédiatement la perte de votre carte nationale d’identité, passeport, permis de conduire ou carte grise auprès de la sûreté compétente.',
        'Ce guide pratique détaille la saisie complète du formulaire en ligne, la distinction légale entre perte et vol et la procédure suivante de renouvellement, avec le tutoriel vidéo officiel de la Police Algérienne.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'وقوع ضياع عرضي لإحدى الوثائق الرسمية (وليست سرقة، لأن السرقة تستوجب محضرا حضوريا).',
        'معرفة بيانات الهوية الكاملة للمصرح ورقم هاتفه الشخصي والولاية ومقر الأمن الأقرب.',
        'تحديد نوع الوثيقة المفقودة وتاريخ ومكان الفقدان التقريبي (مع إرفاق رقم الوثيقة إن أمكن).',
        'الاحتفاظ بالوصل أو رقم المتابعة الإلكتروني لتقديمه عند استخراج بدل ضائع.',
      ],
      fr: [
        'Concerne exclusivement une perte accidentelle de document (en cas de vol, le dépôt de plainte sur place reste obligatoire).',
        'Disposer de votre identité complète, d’un numéro de mobile et identifier le commissariat territorialement compétent.',
        'Préciser la catégorie du titre perdu ainsi que la date et le lieu approximatif de la perte.',
        'Conserver le récépissé ou numéro de référence pour lancer le renouvellement du document.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم تذكر رقم الوثيقة الضائعة أو تاريخ إصدارها أثناء ملء الاستمارة',
          fr: 'Numéro du document perdu inconnu lors de la déclaration',
        },
        solution: {
          ar: 'تحقق من وجود صور قديمة في هاتفك أو بريدك الإلكتروني؛ وفي حال عدم توفر الرقم نهائيا اترك الحقل الاختياري فارغا واذكر التفاصيل المتوفرة بدقة.',
          fr: 'Vérifiez si vous disposez d’un ancien scan dans votre téléphone ou e-mail ; sinon, renseignez au mieux les circonstances et champs obligatoires.',
        },
      },
      {
        issue: {
          ar: 'تعرضت الوثائق للسرقة في الطريق العام أو ضمن حقيبة مسروقة',
          fr: 'Les documents ont été dérobés suite à un vol',
        },
        solution: {
          ar: 'لا تكتف بالتصريح الإلكتروني؛ تقدم فورا إلى أقرب مركز شرطة أو درك وطني لتقييد شكوى رسمية ضد مجهول وحماية نفسك من أي استغلال للوثائق.',
          fr: 'Déplacez-vous immédiatement au commissariat ou à la brigade de gendarmerie la plus proche pour déposer plainte officielle contre vol.',
        },
      },
      {
        issue: {
          ar: 'الحاجة إلى التصريح بالضياع في منطقة يغطيها الدرك الوطني',
          fr: 'Perte survenue dans une commune couverte par la Gendarmerie Nationale',
        },
        solution: {
          ar: 'يخصص موقع DGSN لمصالح الأمن الحضري التابعة للشرطة؛ في المناطق الريفية التي يشرف عليها الدرك الوطني تقدم إلى فرقة الدرك أو عبر بوابة الشكاوى المسبقة PPN.',
          fr: 'Le portail dgsn.dz couvre les zones urbaines de la Sûreté Nationale ; en zone rurale, adressez-vous à la brigade de Gendarmerie Nationale ou au portail PPN.',
        },
      },
    ],
    extraFaqs: [],
  },

  'e-mahata.naftal': {
    intro: {
      ar: [
        'أطلقت الشركة الوطنية لتسويق وتوزيع المنتجات البترولية (نفطال) منصة "محطتي" الرقمية (e-mahata.naftal.dz) لضمان التوزيع العادل والشفاف لعجلات السيارات بمختلف مقاساتها، إلى جانب الزيوت والخدمات الميكانيكية السريعة في محطات نفطال بالأسعار الرسمية.',
        'أنهت هذه المنصة البحث العشوائي في الأسواق والمضاربة، إذ تتيح لكل سائق حجز الإطارات المطابقة تماما لمواصفات بطاقته الرمادية واختيار نقطة التوزيع والتركيب الأقرب إليه داخل ولايته.',
        'يقدم لك هذا الدليل المراحل العملية للتسجيل في محطتي، كيفية قراءة مقاس العجلة الصحيح، والوثائق اللازمة يوم التركيب، مرفقا بفيديو الشرح الرسمي لطريقة الطلب.'
      ],
      fr: [
        'La société nationale Naftal a lancé le portail numérique E-Mahata (e-mahata.naftal.dz) afin de faciliter l’achat de pneumatiques neufs aux tarifs officiels réglementés et de lutter contre la spéculation.',
        'En liant chaque réservation à la carte grise du véhicule, la plateforme garantit une distribution transparente et permet aux automobilistes de choisir la station Naftal de retrait et de montage dans leur wilaya.',
        'Retrouvez ci-après le guide détaillé pour créer votre compte, identifier vos dimensions de pneus, préparer votre dossier pour le rendez-vous en station et visionner le tutoriel vidéo officiel.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'حيازة البطاقة الرمادية للمركبة باسم طالب الحجز أو برقم الترقيم المسجل بدقة في المنصة.',
        'معرفة المقاس الدقيق للعجلات المعتمد للسيارة (العرض / الارتفاع / قطر العجلة).',
        'رقم هاتف نقال نشط لتلقي رمز التحقق وإشعارات توفر المخزون والموعد.',
        'إحضار المركبة شخصيا إلى محطة نفطال المختارة يوم الموعد لإجراء التركيب والترصيص.',
      ],
      fr: [
        'Disposer de la carte grise valide du véhicule à immatriculer sur la plateforme E-Mahata.',
        'Connaître les dimensions réglementaires des pneumatiques du véhicule.',
        'Utiliser un numéro de téléphone personnel actif pour la validation SMS et le suivi.',
        'Présenter physiquement le véhicule à la station Naftal sélectionnée pour le montage sur place.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم توفر مقاس العجلات المطلوب في المحطة القريبة حاليا',
          fr: 'Dimension de pneus temporairement indisponible dans votre station',
        },
        solution: {
          ar: 'جرب التحقق من محطات ومراكز صيانة نفطال الأخرى داخل نفس الولاية عبر القائمة، أو أعد الفحص بعد تزويد المحطات بالدفعات الأسبوعية.',
          fr: 'Vérifiez les stocks des autres stations et centres d’entretien Naftal de votre wilaya ou consultez de nouveau la plateforme lors des réapprovisionnements.',
        },
      },
      {
        issue: {
          ar: 'خطأ في اختيار مقاس الإطار بعد إتمام الحجز الأولي',
          fr: 'Erreur de dimension constatée après validation de la commande',
        },
        solution: {
          ar: 'قم بإلغاء الطلب من لوحة حسابك إن كان لا يزال في حالة الانتظار قبل تأكيد المحطة، وأنشئ طلبا جديدا بالمقاس المدون على إطار السيارة الأصلي.',
          fr: 'Annulez la demande en attente depuis votre espace client et saisissez une nouvelle commande correspondant strictement au marquage constructeur.',
        },
      },
      {
        issue: {
          ar: 'عدم وصول رمز التأكيد عبر الرسائل النصية SMS عند التسجيل',
          fr: 'Code de vérification SMS non reçu lors de l’inscription E-Mahata',
        },
        solution: {
          ar: 'تأكد من كتابة رقم الهاتف المحلي المكون من 10 أرقام دون إضافة +213، وتفقد تغطية الشبكة قبل طلب إعادة الإرسال.',
          fr: 'Saisissez le numéro à 10 chiffres au format national (0X XX XX XX XX) et patientez quelques instants avant de solliciter un nouvel envoi.',
        },
      },
    ],
    extraFaqs: [],
  },
};
