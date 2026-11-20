import { SectorItem, RichGuideContent } from '../../types';

export const batch2Sectors: SectorItem[] = [
  {
    id: 'assurance',
    slug: 'assurance',
    category: 'finance_economy',
    name: {
      ar: 'قطاع التأمينات وشركات التأمين في الجزائر',
      fr: 'Secteur des Assurances et Compagnies Agréées en Algérie',
    },
    acronym: 'ASSUR',
    ministry: {
      ar: 'وزارة المالية — مديرية التأمينات والمجلس الوطني للتأمينات',
      fr: 'Ministère des Finances — Direction des Assurances & CNA',
    },
    description: {
      ar: 'الدليل الشامل لخدمات شركات التأمين المعتمدة في الجزائر: التأمين الإلزامي للسيارات، تأمين الكوارث الطبيعية CAT-NAT، التأمين التكافلي، التصريح الإلكتروني بالحوادث، ومتابعة التعويضات.',
      fr: "Guide complet des compagnies d'assurance agréées en Algérie : assurance automobile obligatoire, multirisque habitation et catastrophes naturelles (CAT-NAT), assurance Takaful, télédéclaration de sinistres et suivi des indemnisations.",
    },
    officialUrl: 'https://www.mf.gov.dz/',
    portalUrl: 'https://www.cna.dz/',
    iconName: 'Shield',
    isPopular: false,
    services: [
      {
        id: 'assurance-srv-1',
        title: {
          ar: 'المجلس الوطني للتأمينات (CNA)',
          fr: 'Conseil National des Assurances (CNA)',
        },
        description: {
          ar: 'الهيئة الاستشارية والتنظيمية لنشاط التأمين في الجزائر، توفر النصوص القانونية وإحصائيات السوق وقائمة الشركات المعتمدة.',
          fr: 'Organe consultatif et de référence du marché algérien des assurances : textes réglementaires, statistiques sectorielles et répertoire officiel.',
        },
        url: 'https://www.cna.dz/',
        isOnline: true,
      },
      {
        id: 'assurance-srv-2',
          title: {
          ar: 'الشركة الوطنية للتأمين (SAA)',
          fr: "Société Nationale d'Assurance (SAA)",
        },
        description: {
          ar: 'بوابة أكبر شركة تأمين عمومية في الجزائر لاحتساب أقساط السيارات والممتلكات، طلب العقود، والتبليغ عن الحوادث.',
          fr: 'Portail du leader public de l’assurance en Algérie : simulation de devis auto/habitation, souscription et déclaration de sinistres.',
        },
        url: 'https://www.saa.dz/',
        isOnline: true,
      },
      {
        id: 'assurance-srv-3',
        title: {
          ar: 'الشركة الجزائرية للتأمينات (CAAT)',
          fr: 'Compagnie Algérienne des Assurances (CAAT)',
        },
        description: {
          ar: 'منصة الخدمات الرقمية لشركة CAAT لتغطية السيارات، الأخطار الصناعية، والنقل والتأمين عبر الإنترنت.',
          fr: 'Espace numérique de la CAAT dédié aux particuliers et entreprises : assurance auto, risques industriels et transport.',
        },
        url: 'https://www.caat.dz/',
        isOnline: true,
      },
      {
        id: 'assurance-srv-4',
        title: {
          ar: 'الشركة الجزائرية للتأمين وإعادة التأمين (CAAR)',
          fr: "Compagnie Algérienne d'Assurance et de Réassurance (CAAR)",
        },
        description: {
          ar: 'خدمات التأمين على الممتلكات، الكوارث الطبيعية، وتأمينات المؤسسات والمهنيين لدى شركة CAAR.',
          fr: 'Portail officiel de la CAAR pour les assurances dommages, catastrophes naturelles, engineering et professionnels.',
        },
        url: 'https://www.caar.dz/',
        isOnline: true,
      },
      {
        id: 'assurance-srv-5',
        title: {
          ar: 'وزارة المالية — مديرية التأمينات والرقابة',
          fr: 'Ministère des Finances — Tutelle des Assurances',
        },
        description: {
          ar: 'الجهة الوصية المكلفة باعتماد شركات التأمين، مراقبة الملاءة المالية، وإصدار التشريعات المنظمة للتأمين التكافلي.',
          fr: 'Autorité ministérielle chargée de l’agrément des assureurs, de la supervision du marché et du cadre juridique du Takaful.',
        },
        url: 'https://www.mf.gov.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'أصحاب المركبات، ملاك العقارات، المستأجرون، المسافرون، والمؤسسات الاقتصادية',
        fr: 'Automobilistes, propriétaires et locataires immobiliers, voyageurs et entreprises',
      },
      processingTime: {
        ar: 'إصدار فوري لعقود السيارات والسفر، و7 إلى 30 يوما لتسوية ملفات الحوادث بعد الخبرة',
        fr: 'Émission immédiate des contrats auto/voyage ; indemnisation sous 7 à 30 jours après expertise',
      },
      fees: {
        ar: 'تحدد الأقساط حسب التعريفة الرسمية لـ المسؤولية المدنية وقيمة الممتلكات المؤمن عليها',
        fr: 'Primes fixées selon le barème officiel RC automobile et la valeur déclarée des biens',
      },
      channel: {
        ar: 'الوكالات المعتمدة والمنصات الرقمية لشركات التأمين العمومية والخاصة والتكافلية',
        fr: 'Agences agréées et portails digitaux des compagnies publiques, privées et Takaful',
      },
      keyRequirement: {
        ar: 'البطاقة الرمادية ورخصة السياقة للسيارات، أو عقد الملكية/الإيجار لتأمين السكن CAT-NAT',
        fr: 'Carte grise et permis de conduire (auto) ou titre de propriété/bail (habitation CAT-NAT)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تأمين المركبات الإلزامي والاختياري',
          fr: 'Assurance automobile (RC & Tous Risques)',
        },
        value: {
          ar: 'البطاقة الرمادية، رخصة السياقة سارية المفعول، وشهادة المراقبة التقنية للمركبة',
          fr: 'Carte grise, permis de conduire valide et procès-verbal de contrôle technique à jour',
        },
      },
      {
        label: {
          ar: 'تأمين الكوارث الطبيعية (CAT-NAT)',
          fr: 'Assurance Catastrophes Naturelles (CAT-NAT)',
        },
        value: {
          ar: 'عقد الملكية أو الدفتر العقاري أو عقد الكراء مع رقم التعريف الوطني NIN للمكتتب',
          fr: 'Acte de propriété, livret foncier ou contrat de bail avec NIN du souscripteur',
        },
      },
      {
        label: {
          ar: 'التصريح بحادث مرور أو ضرر',
          fr: 'Déclaration de sinistre',
        },
        value: {
          ar: 'محضر المعاينة الودية (Constat) أو محضر الشرطة/الدرك خلال 7 أيام عمل من الحادث',
          fr: 'Constat amiable rempli ou PV de police/gendarmerie déposé dans les 7 jours ouvrables',
        },
      },
      {
        label: {
          ar: 'سداد الأقساط واستلام التعويض',
          fr: 'Règlement & indemnisation',
        },
        value: {
          ar: 'البطاقة الذهبية أو CIB للدفع الإلكتروني، وصك بنكي/بريدي (RIB/RIP) لصب التعويضات',
          fr: 'Carte Edahabia ou CIB pour le télépaiement ; RIB ou RIP pour le virement des indemnités',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي التأمينات الإلزامية بقوة القانون في الجزائر؟',
          fr: 'Quelles sont les assurances légalement obligatoires en Algérie ?',
        },
        answer: {
          ar: 'يعد تأمين المسؤولية المدنية للمركبات وتأمين الكوارث الطبيعية (CAT-NAT) للمباني السكنية والتجارية والمؤسسات من أبرز التأمينات الإلزامية، إلى جانب تأمين المسؤولية المدنية المهنية لبعض المهن الحرة والمقاولين.',
          fr: 'La responsabilité civile automobile et l’assurance contre les catastrophes naturelles (CAT-NAT) pour les biens immobiliers bâtis sont légalement obligatoires, ainsi que la RC professionnelle pour certaines activités réglementées.',
        },
      },
      {
        question: {
          ar: 'كم تبلغ المهلة القانونية للتصريح بحادث سيارة لدى شركة التأمين؟',
          fr: 'Quel est le délai légal pour déclarer un sinistre automobile à son assureur ?',
        },
        answer: {
          ar: 'يجب التصريح بالحادث لدى وكالتك في أجل أقصاه سبعة (7) أيام من وقوعه، وتنخفض المهلة إلى 48 ساعة في حال السرقة. يوصى بإرفاق المعاينة الودية أو محضر الضبطية القضائية لتسريع تعيين الخبير.',
          fr: 'Vous disposez de 7 jours ouvrables pour déclarer un accident matériel ou corporel, et de 48 heures en cas de vol. Le dépôt rapide du constat amiable accélère la désignation de l’expert.',
        },
      },
      {
        question: {
          ar: 'هل تتوفر خدمات التأمين التكافلي الإسلامي في الجزائر؟',
          fr: 'Existe-t-il des offres d’assurance Takaful en Algérie ?',
        },
        answer: {
          ar: 'نعم، تتيح شركات متخصصة ونوافذ تكافلية تابعة للشركات العمومية عقود التأمين التكافلي العام والعائلي المطابقة لأحكام الشريعة الإسلامية والمرخصة من وزارة المالية.',
          fr: 'Oui, des compagnies dédiées et des fenêtres Takaful adossées aux assureurs publics commercialisent des contrats Takaful général et familial agréés par le Ministère des Finances.',
        },
      },
      {
        question: {
          ar: 'كيف يمكن مقارنة عروض وشركات التأمين المعتمدة؟',
          fr: 'Comment comparer les compagnies d’assurance agréées en Algérie ?',
        },
        answer: {
          ar: 'يمكنك تصفح الدليل المخصص لشركات التأمين في بوابتنا للاطلاع على بطاقة كل شركة عمومية أو خاصة أو تكافلية وروابطها الرسمية ومحاكاة الأقساط قبل التعاقد.',
          fr: 'Consultez l’annuaire détaillé des 12 compagnies d’assurance sur notre portail pour comparer leurs couvertures auto, habitation, santé/voyage et accéder à leurs plateformes officielles.',
        },
      },
    ],
  },
  {
    id: 'awlyaa-education',
    slug: 'awlyaa-education',
    category: 'education_higher',
    name: {
      ar: 'فضاء أولياء التلاميذ والمنصات التعليمية الوطنية',
      fr: "Espace Parents d'Élèves & Portails Scolaires (Awlyaa)",
    },
    acronym: 'AWLYAA',
    ministry: {
      ar: 'وزارة التربية الوطنية',
      fr: "Ministère de l'Éducation Nationale",
    },
    description: {
      ar: 'البوابة الشاملة لخدمات وزارة التربية الوطنية: فضاء أولياء التلاميذ (awlyaa.education.dz) لاستخراج كشوف النقاط ومتابعة الغيابات، منصات تسجيل ونتائج البكالوريا والبيام، الدفع الإلكتروني، والتعليم عن بعد.',
      fr: "Portail complet des services de l'Éducation Nationale en Algérie : Espace Parents Awlyaa pour les bulletins et absences, inscriptions et résultats BAC/BEM, e-paiement des frais d'examen et enseignement à distance ONEFD.",
    },
    officialUrl: 'https://www.education.gov.dz/',
    portalUrl: 'https://awlyaa.education.dz/login',
    iconName: 'GraduationCap',
    isPopular: true,
    services: [
      {
        id: 'awlyaa-education-srv-1',
        title: {
          ar: 'فضاء أولياء التلاميذ (نتائج وغيابات)',
          fr: "Espace Parents d'Élèves (Awlyaa)",
        },
        description: {
          ar: 'البوابة الرسمية لمتابعة كشوف النقاط الفصلية، الغيابات، التسجيل في السنة الأولى ابتدائي، والتحويلات المدرسية.',
          fr: 'Portail officiel pour consulter les bulletins trimestriels, suivre les absences, inscrire en 1ère année primaire et gérer les transferts.',
        },
        url: 'https://awlyaa.education.dz/login',
        isOnline: true,
      },
      {
        id: 'awlyaa-education-srv-2',
        title: {
          ar: 'موقع البكالوريا (التسجيل والنتائج - ONEC)',
          fr: 'Portail du Baccalauréat (BAC - ONEC)',
        },
        description: {
          ar: 'المنصة الرسمية للديوان الوطني للامتحانات والمسابقات للتسجيل في البكالوريا وسحب الاستدعاء والنتائج.',
          fr: 'Plateforme officielle de l’ONEC pour l’inscription au Baccalauréat, le retrait de convocation et la consultation des résultats.',
        },
        url: 'https://bac.onec.dz/',
        isOnline: true,
      },
      {
        id: 'awlyaa-education-srv-3',
        title: {
          ar: 'موقع شهادة التعليم المتوسط (BEM - ONEC)',
          fr: 'Portail du Brevet d’Enseignement Moyen (BEM)',
        },
        description: {
          ar: 'بوابة التسجيل الإلكتروني لامتحان السنة الرابعة متوسط، تأكيد المعلومات، واستخراج الاستدعاء والنتائج.',
          fr: 'Portail dédié aux candidats du BEM pour l’inscription en ligne, la vérification des données et les résultats officiels.',
        },
        url: 'https://bem.onec.dz/',
        isOnline: true,
      },
      {
        id: 'awlyaa-education-srv-4',
        title: {
          ar: 'منصة الدفع الإلكتروني لحقوق الامتحانات',
          fr: 'E-Paiement des Droits d’Inscription BAC & BEM',
        },
        description: {
          ar: 'تسديد رسوم التسجيل في الامتحانات الوطنية عن بعد عبر البطاقة الذهبية لبريد الجزائر وطباعة وصل الدفع.',
          fr: 'Règlement en ligne des frais d’inscription aux examens nationaux par carte Edahabia avec téléchargement du reçu.',
        },
        url: 'https://epay.education.dz/auth',
        isOnline: true,
      },
      {
        id: 'awlyaa-education-srv-5',
        title: {
          ar: 'الديوان الوطني للتعليم والتكوين عن بعد (ONEFD)',
          fr: 'Enseignement à Distance & Attestation de Niveau (ONEFD)',
        },
        description: {
          ar: 'التسجيل في الدراسة بالمراسلة، تحميل الدروس والفروض، واستخراج شهادة إثبات المستوى.',
          fr: 'Portail officiel de l’ONEFD pour l’inscription par correspondance, le suivi des cours et le retrait des attestations de niveau.',
        },
        url: 'https://www.onefd.edu.dz/',
        isOnline: true,
      },
      {
        id: 'awlyaa-education-srv-6',
        title: {
          ar: 'منصة التوجيه الجامعي لحاملي البكالوريا',
          fr: 'Portail DZ-Orientation des Bacheliers',
        },
        description: {
          ar: 'دليل تفاعلي لمساعدة الناجحين في البكالوريا على استكشاف التخصصات الجامعية ومعدلات القبول.',
          fr: 'Plateforme d’accompagnement et de simulation des choix universitaires destinée aux nouveaux bacheliers.',
        },
        url: 'https://dzorientation.com',
        isOnline: true,
      },
      {
        id: 'awlyaa-education-srv-7',
        title: {
          ar: 'الموقع الرسمي لوزارة التربية الوطنية',
          fr: "Site Officiel du Ministère de l'Éducation Nationale",
        },
        description: {
          ar: 'البوابة الوزارية لنشر المناشير الرسمية، روزنامة العطل والاختبارات، ومسابقات التوظيف.',
          fr: 'Portail institutionnel publiant les circulaires officielles, le calendrier scolaire et les avis de recrutement.',
        },
        url: 'https://www.education.gov.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'أولياء التلاميذ، تلاميذ الأطوار الثلاثة، المترشحون الأحرار، وطلبة التعليم عن بعد',
        fr: 'Parents d’élèves, scolaires des trois paliers, candidats libres et apprenants ONEFD',
      },
      processingTime: {
        ar: 'تفعيل فوري بعد تأكيد مدير المؤسسة التربوية لطلب الانخراط في فضاء الأولياء',
        fr: 'Activation immédiate après validation du compte parent par le directeur d’établissement',
      },
      fees: {
        ar: 'فضاء الأولياء مجاني بالكامل؛ رسوم الامتحانات الوطنية والمراسلة تسدد عبر epay.education.dz',
        fr: 'Espace Awlyaa gratuit ; droits d’examens BAC/BEM payables par carte Edahabia sur epay.education.dz',
      },
      channel: {
        ar: 'بوابة awlyaa.education.dz، مواقع ONEC، وإدارة المؤسسة التربوية عند التفعيل الأول',
        fr: 'Portail awlyaa.education.dz, sites ONEC et secrétariat de l’établissement scolaire',
      },
      keyRequirement: {
        ar: 'رقم التعريف المدرسي للابن (16 رقما)، بطاقة هوية الولي، وعنوان بريد إلكتروني فعال',
        fr: 'Numéro d’identification scolaire de l’élève (16 chiffres), CNIBE du parent et e-mail actif',
      },
    },
    requirements: [
      {
        label: {
          ar: 'رقم التعريف المدرسي الموحد',
          fr: 'Numéro d’identification scolaire',
        },
        value: {
          ar: 'الرقم التعريفي المكون من 16 رقما المستخرج من شهادة التمدرس أو مديرية المؤسسة',
          fr: 'Identifiant scolaire unique à 16 chiffres figurant sur le certificat de scolarité',
        },
      },
      {
        label: {
          ar: 'استمارة الانخراط المصادق عليها',
          fr: 'Formulaire d’adhésion validé',
        },
        value: {
          ar: 'طباعة الاستمارة بعد التسجيل في awlyaa.education.dz وإيداعها لدى مدير المدرسة للمصادقة',
          fr: 'Impression du formulaire après préinscription et dépôt auprès du chef d’établissement',
        },
      },
      {
        label: {
          ar: 'التسجيل في الامتحانات الوطنية',
          fr: 'Inscription aux examens BAC / BEM',
        },
        value: {
          ar: 'حساب فضاء الأولياء أو اسم المستخدم الخاص بالمرشح مع تسديد الحقوق عبر البطاقة الذهبية',
          fr: 'Identifiants de candidature et paiement électronique des droits sur epay.education.dz',
        },
      },
      {
        label: {
          ar: 'تصديق الوثائق للخارج',
          fr: 'Authentification des relevés',
        },
        value: {
          ar: 'أصل كشف النقاط أو شهادة البكالوريا المؤقتة لمصالح التصديق بمديرية التربية والوزارة',
          fr: 'Originaux des relevés de notes ou attestation provisoire pour légalisation ministérielle',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أحصل على رقم التعريف المدرسي لتسجيل ابني في فضاء الأولياء؟',
          fr: 'Où trouver le numéro d’identification scolaire pour s’inscrire sur Awlyaa ?',
        },
        answer: {
          ar: 'يدون رقم التعريف المدرسي في أعلى شهادة التمدرس أو كشف النقاط الفصلي. في حال عدم توفره، يمكن طلبه مباشرة من إدارة المؤسسة التربوية التي يدرس بها التلميذ.',
          fr: 'Ce numéro figure sur le certificat de scolarité ou les anciens bulletins de notes. En cas de perte, demandez-le directement au secrétariat de l’établissement scolaire.',
        },
      },
      {
        question: {
          ar: 'لماذا لم تفعل حسابي رغم إتمام التسجيل الإلكتروني في awlyaa.education.dz؟',
          fr: 'Pourquoi mon compte Awlyaa reste-t-il inactif après l’inscription en ligne ?',
        },
        answer: {
          ar: 'يتطلب التفعيل الأولي طباعة استمارة التسجيل من المنصة وتسليمها مرفوقة بنسخة من بطاقة التعريف الوطنية لمدير المدرسة أو المتوسطة أو الثانوية ليقوم بالمصادقة الآلية على الارتباط العائلي.',
          fr: 'Après l’inscription en ligne, vous devez impérativement imprimer le formulaire généré et le remettre au directeur de l’école avec votre pièce d’identité pour qu’il active votre accès.',
        },
      },
      {
        question: {
          ar: 'كيف أسجل ابني في السنة الأولى ابتدائي عن بعد؟',
          fr: 'Comment inscrire un enfant en première année primaire via Awlyaa ?',
        },
        answer: {
          ar: 'تفتح وزارة التربية نافذة التسجيل الرقمي للسنة الأولى ابتدائي عبر حساب الولي في فضاء الأولياء خلال الفترة المحددة سنويا دون تقديم ملف ورقي، حيث يتم استخراج رقم التسجيل واختيار المدرسة القريبة إلكترونيا.',
          fr: 'Pendant la campagne annuelle d’inscription, connectez-vous à votre compte Awlyaa, renseignez les données d’état civil de l’enfant et sélectionnez l’école de secteur sans dossier papier.',
        },
      },
      {
        question: {
          ar: 'كيف يتم دفع حقوق التسجيل في شهادة البكالوريا أو التعليم المتوسط؟',
          fr: 'Comment régler les frais d’inscription aux examens du BAC ou du BEM ?',
        },
        answer: {
          ar: 'يتم الدفع حصريا عبر منصة epay.education.dz باستخدام البطاقة الذهبية لبريد الجزائر أو بطاقة CIB بعد تسجيل المترشح في موقع الديوان الوطني للامتحانات والمسابقات، مع ضرورة طباعة وصل الدفع.',
          fr: 'Le règlement s’effectue exclusivement en ligne sur epay.education.dz par carte Edahabia après validation de la préinscription sur bac.onec.dz ou bem.onec.dz.',
        },
      },
    ],
  },
  {
    id: 'bank',
    slug: 'bank',
    category: 'finance_economy',
    name: {
      ar: 'قطاع البنوك والمصارف في الجزائر',
      fr: 'Secteur Bancaire & Établissements Financiers en Algérie',
    },
    acronym: 'BANQUE',
    ministry: {
      ar: 'بنك الجزائر ووزارة المالية',
      fr: "Banque d'Algérie & Ministère des Finances",
    },
    description: {
      ar: 'الدليل المرجعي للقطاع المصرفي الجزائري: البنك المركزي، البنوك العمومية والخاصة، نوافذ الصيرفة الإسلامية، منظومة الدفع الإلكتروني SATIM وCIB، أسعار الصرف الرسمية، وإجراءات فتح الحسابات.',
      fr: "Portail de référence du secteur bancaire algérien : Banque d'Algérie, banques publiques et privées, finance islamique, écosystème monétique CIB/SATIM, taux de change officiels et ouverture de comptes.",
    },
    officialUrl: 'https://www.bank-of-algeria.dz/',
    portalUrl: 'https://www.satim.dz/',
    iconName: 'Landmark',
    isPopular: false,
    services: [
      {
        id: 'bank-srv-1',
        title: {
          ar: 'الموقع الرسمي لبنك الجزائر (البنك المركزي)',
          fr: "Site Officiel de la Banque d'Algérie",
        },
        description: {
          ar: 'نشر أسعار الصرف الرسمية للعملات الأجنبية، النصوص القانونية والنقدية، وقائمة البنوك والمؤسسات المالية المعتمدة.',
          fr: 'Publication quotidienne des cours officiels de change, réglementation bancaire et liste des banques agréées en Algérie.',
        },
        url: 'https://www.bank-of-algeria.dz/',
        isOnline: true,
      },
      {
        id: 'bank-srv-2',
        title: {
          ar: 'تجمع النقد الآلي (GIE Monétique)',
          fr: 'GIE Monétique Algérie',
        },
        description: {
          ar: 'الهيئة المكلفة بضبط وتأمين منظومة الدفع ما بين البنوك CIB والبطاقة الذهبية وخدمات الدفع عبر الإنترنت.',
          fr: 'Organisme de régulation de l’interopérabilité monétique nationale (CIB / Edahabia) et des services e-paiement.',
        },
        url: 'https://www.giemonetique.dz/',
        isOnline: true,
      },
      {
        id: 'bank-srv-3',
        title: {
          ar: 'شركة النقد الآلي والعلاقات التلقائية بين البنوك (SATIM)',
          fr: 'Réseau Monétique Interbancaire (SATIM)',
        },
        description: {
          ar: 'دليل مواقع التجار المقبولة عبر بطاقة CIB، تأمين المعاملات، ومراقبة خدمة الدفع الإلكتروني في الجزائر.',
          fr: 'Annuaire des web-marchands certifiés CIB, gestion du réseau GAB/TPE et assistance monétique interbancaire.',
        },
        url: 'https://www.satim.dz/',
        isOnline: true,
      },
      {
        id: 'bank-srv-4',
        title: {
          ar: 'جمعية البنوك والمؤسسات المالية (ABEF)',
          fr: 'Association des Banques et Établissements Financiers (ABEF)',
        },
        description: {
          ar: 'الاطلاع على تعميمات البنوك التجارية، برامج التكوين المصرفي، وشروط التمويل التجاري والاستثماري.',
          fr: 'Informations interbancaires, statistiques du crédit, notes de place et annuaire des directions bancaires.',
        },
        url: 'https://www.abef.dz/',
        isOnline: true,
      },
      {
        id: 'bank-srv-5',
        title: {
          ar: 'البوابة الرسمية لوزارة المالية',
          fr: 'Portail du Ministère des Finances',
        },
        description: {
          ar: 'متابعة قوانين المالية، التسهيلات القرضية المدعمة، واستراتيجية الشمول المالي والرقمنة المصرفية.',
          fr: 'Suivi des lois de finances, bonifications de taux d’intérêt, modernisation bancaire et inclusion financière.',
        },
        url: 'https://www.mf.gov.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الأفراد والموظفون، التجار والمقاولون الذاتيون، الجالية، والمستثمرون',
        fr: 'Particuliers, salariés, auto-entrepreneurs, diaspora et entreprises commerciales',
      },
      processingTime: {
        ar: 'فتح الحساب البنكي في 24 إلى 72 ساعة، وإصدار بطاقة CIB خلال 7 إلى 15 يوم عمل',
        fr: 'Ouverture de compte en 24 à 72 h ; délivrance de carte CIB sous 7 à 15 jours ouvrables',
      },
      fees: {
        ar: 'فتح الحساب بالدينار أو العملة الصعبة مجاني مع رسوم صيانة سنوية تختلف حسب المصرف',
        fr: 'Ouverture de compte gratuite ; frais de tenue annuels et commissions selon la grille tarifaire de chaque banque',
      },
      channel: {
        ar: 'الوكالات البنكية الولائية وتطبيقات الخدمات المصرفية عن بعد (E-Banking / Mobile)',
        fr: 'Agences bancaires physiques et applications E-Banking / Mobile Banking des banques agréées',
      },
      keyRequirement: {
        ar: 'بطاقة التعريف البيومترية، شهادة إقامة، شهادة عمل أو سجل تجاري/بطاقة مقاول ذاتي',
        fr: 'CNIBE, justificatif de résidence et justificatif de revenus (attestation de travail, RC ou carte ANAE)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'ملف فتح حساب شخصي (دينار أو عملة صعبة)',
          fr: 'Dossier compte particulier (DZD ou Devise)',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية، شهادة إقامة حديثة، صورتان، وإثبات دخل للموظفين أو التجار',
          fr: 'CNIBE, certificat de résidence récent, photos d’identité et justificatif d’activité ou de ressources',
        },
      },
      {
        label: {
          ar: 'تفعيل بطاقة CIB والدفع الإلكتروني',
          fr: 'Activation carte CIB & e-paiement',
        },
        value: {
          ar: 'تقديم طلب في الوكالة لتسليم البطاقة، استلام الرمز السري، وتفعيل كلمة مرور الدفع عبر الإنترنت SMS OTP',
          fr: 'Demande en agence, retrait du code PIN et activation du mot de passe dynamique OTP par SMS',
        },
      },
      {
        label: {
          ar: 'الحصول على حساب بنكي مهني أو تجاري',
          fr: 'Compte professionnel / commercial',
        },
        value: {
          ar: 'السجل التجاري الإلكتروني أو بطاقة المقاول الذاتي، رقم التعريف الجبائي NIF، وبطاقة التاجر/القانون الأساسي',
          fr: 'Registre de commerce ou carte d’auto-entrepreneur, numéro NIF, NIS et statuts pour les sociétés',
        },
      },
      {
        label: {
          ar: 'الاستفادة من منتجات الصيرفة الإسلامية',
          fr: 'Éligibilité finance islamique',
        },
        value: {
          ar: 'استيفاء شروط القدرة على السداد بالنسبة للمرابحة، الإجارة، أو السلم عبر النوافذ والمصارف الإسلامية',
          fr: 'Justificatifs de solvabilité régulière pour les financements Mourabaha, Ijara ou Salam conformes à la Charia',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين بطاقة CIB البنكية والبطاقة الذهبية لبريد الجزائر؟',
          fr: 'Quelle est la différence entre la carte CIB bancaire et la carte Edahabia ?',
        },
        answer: {
          ar: 'تعمل البطاقتان على نفس الشبكة البينية للدفع في أجهزة الدفع الإلكتروني TPE والمواقع الجزائرية والموزعات الآلية GAB بفضل الربط بين SATIM وبريد الجزائر، لكن بطاقة CIB ترتبط بحساب بنكي بينما ترتبط الذهبية بحساب CCP.',
          fr: 'Grâce à l’interopérabilité GIE Monétique, les cartes CIB et Edahabia fonctionnent sur les mêmes TPE, GAB et sites marchands en Algérie. La CIB est rattachée à un compte bancaire et l’Edahabia à un CCP.',
        },
      },
      {
        question: {
          ar: 'هل يمكن فتح حساب بالعملة الصعبة (الأورو أو الدولار) في البنوك الجزائرية؟',
          fr: 'Peut-on ouvrir un compte en devises (EUR / USD) auprès d’une banque algérienne ?',
        },
        answer: {
          ar: 'نعم، تتيح معظم البنوك العمومية والخاصة فتح حساب عملة صعبة للأفراد المقيمين عند تقديم بطاقة الهوية وشهادة الإقامة، مع إمكانية الحصول على بطاقة دولية مسبقة الدفع وفق الشروط التنظيمية.',
          fr: 'Oui, toute personne majeure résidente peut ouvrir un compte en devises avec sa CNIBE et un justificatif de domicile, et solliciter une carte Visa/Mastercard selon les conditions de chaque banque.',
        },
      },
      {
        question: {
          ar: 'كيف أحصل على منحة السفر السنوية بالعملة الصعبة؟',
          fr: 'Comment bénéficier de l’allocation touristique annuelle en devises ?',
        },
        answer: {
          ar: 'تتم العملية عبر البنك الوطني أو الوكالة المصرفية المعتمدة قبل السفر مع تقديم جواز السفر البيومتري، تذكرة السفر المؤكدة ذهابا وإيابا أو تصريح السفر البري، وتسديد المقابل بالدينار الجزائري حسب سعر الصرف الرسمي.',
          fr: 'Présentez-vous à votre banque avec votre passeport biométrique valide, un titre de transport aller-retour (ou justificatif de voyage) et le montant équivalent en dinars au cours officiel.',
        },
      },
      {
        question: {
          ar: 'أين أجد قائمة البنوك العمومية والخاصة والإسلامية وتفاصيل خدماتها؟',
          fr: 'Où consulter la liste détaillée des banques publiques, privées et islamiques ?',
        },
        answer: {
          ar: 'يوفر قسم البنوك في بوابتنا بطاقات مفصلة لـ 18 بنكا ومؤسسة مالية في الجزائر تتضمن رمز السويفت SWIFT، روابط الخدمات المصرفية عن بعد، وأرقام خدمة الزبائن.',
          fr: 'Notre annuaire bancaire dédié réunit 18 fiches complètes couvrant les banques publiques, privées et islamiques avec codes SWIFT, portails e-banking et contacts officiels.',
        },
      },
    ],
  },
  {
    id: 'campuce.jobs',
    slug: 'campuce.jobs',
    category: 'education_higher',
    name: {
      ar: 'منصة توظيف الطلبة والخريجين (Campuce Jobs)',
      fr: 'Plateforme Emploi & Stages Étudiants (Campuce Jobs)',
    },
    acronym: 'CAMPUCE',
    ministry: {
      ar: 'التعليم العالي والبحث العلمي والمؤسسات الشريكة',
      fr: 'Enseignement Supérieur & Entreprises Partenaires',
    },
    description: {
      ar: 'منصة توظيف رقمية مخصصة للطلبة الجزائريين وحاملي الشهادات الجامعية: البحث عن وظائف بدوام جزئي، التربصات الميدانية، المهام الحرة، والتقديم السريع للشركات الشريكة.',
      fr: 'Plateforme dédiée aux étudiants et jeunes diplômés algériens : offres d’emplois à temps partiel, stages pratiques en entreprise, missions flexibles et candidature simplifiée via un profil unifié.',
    },
    officialUrl: 'https://jobs.student-campuce.dz/',
    portalUrl: 'https://jobs.student-campuce.dz/auth/login',
    iconName: 'Briefcase',
    isPopular: false,
    services: [
      {
        id: 'campuce.jobs-srv-1',
        title: {
          ar: 'تسجيل الدخول وإنشاء الحساب الطلابي',
          fr: 'Connexion & Inscription Espace Étudiant',
        },
        description: {
          ar: 'إنشاء ملف شخصي موحد وتحديث السيرة الذاتية والمسار الجامعي للترشح السريع للوظائف والتربصات.',
          fr: 'Créer un compte candidat, compléter votre profil académique et déposer votre CV pour postuler en quelques clics.',
        },
        url: 'https://jobs.student-campuce.dz/auth/login',
        isOnline: true,
      },
      {
        id: 'campuce.jobs-srv-2',
        title: {
          ar: 'تصفح عروض العمل والتربصات الميدانية',
          fr: "Explorer les Offres d'Emploi et Stages",
        },
        description: {
          ar: 'قائمة العروض النشطة المصنفة حسب التخصص الجامعي، الولاية، ونوع العمل (دوام جزئي، تربص، عمل عن بعد).',
          fr: 'Catalogue des opportunités disponibles filtrées par filière, wilaya, type de contrat (temps partiel, stage, freelance).',
        },
        url: 'https://jobs.student-campuce.dz/job-offers',
        isOnline: true,
      },
      {
        id: 'campuce.jobs-srv-3',
        title: {
          ar: 'دليل الشركات والمؤسسات الشريكة',
          fr: 'Répertoire des Entreprises Partenaires',
        },
        description: {
          ar: 'التعرف على المؤسسات الاقتصادية والشركات الناشئة المعلنة عن فرص التربص والتوظيف على المنصة.',
          fr: 'Découvrir les entreprises, startups et employeurs partenaires qui recrutent via Campuce Jobs.',
        },
        url: 'https://jobs.student-campuce.dz/companies',
        isOnline: true,
      },
      {
        id: 'campuce.jobs-srv-4',
        title: {
          ar: 'الصفحة الرئيسية لمنصة Campuce Jobs',
          fr: 'Portail Principal Campuce Jobs',
        },
        description: {
          ar: 'الاطلاع على آلية عمل المنصة للطلبة والمؤسسات الموظفة وإحصائيات الفرص المتاحة.',
          fr: 'Présentation générale de la plateforme, rubriques d’aide et accès rapide aux services candidats et recruteurs.',
        },
        url: 'https://jobs.student-campuce.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة الجامعيون، المتربصون، وحديثو التخرج الباحثون عن خبرة ميدانية أو عمل مرن',
        fr: 'Étudiants universitaires, stagiaires et jeunes diplômés en quête d’expérience ou d’emploi flexible',
      },
      processingTime: {
        ar: 'تفعيل فوري للحساب عبر البريد الإلكتروني، والرد على الطلبات يخضع لآجال المؤسسة الموظفة',
        fr: 'Activation immédiate du profil ; réponse aux candidatures selon le calendrier du recruteur',
      },
      fees: {
        ar: 'مجانية بالكامل للطلبة والباحثين عن التربصات وفرص العمل الجزئي',
        fr: 'Service 100 % gratuit pour les étudiants et candidats à la recherche d’un stage ou emploi',
      },
      channel: {
        ar: 'منصة رقمية متكاملة 100 بالمئة عبر الويب دون الحاجة للتنقل الإداري',
        fr: 'Plateforme web 100 % dématérialisée accessible depuis PC et smartphone',
      },
      keyRequirement: {
        ar: 'بريد إلكتروني فعال، سيرة ذاتية محدثة بصيغة PDF، ومعلومات التخصص الجامعي',
        fr: 'Adresse e-mail active, CV à jour au format PDF et informations sur la filière universitaire',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الحالة الجامعية أو الشهادة',
          fr: 'Statut académique',
        },
        value: {
          ar: 'طالب جامعي مسجل (ليسانس، ماستر، دكتوراه، مدارس عليا) أو خريج حديث',
          fr: 'Étudiant inscrit dans l’enseignement supérieur ou jeune diplômé récemment sorti',
        },
      },
      {
        label: {
          ar: 'السيرة الذاتية الرقمية',
          fr: 'CV numérique professionnel',
        },
        value: {
          ar: 'ملف PDF منظم يوضح المهارات التقنية، اللغات، التربصات السابقة، والتفرغ الأسبوعي',
          fr: 'Fichier PDF synthétique précisant compétences, langues, expériences et disponibilités horaires',
        },
      },
      {
        label: {
          ar: 'التنسيق للعمل الحر أو المهام',
          fr: 'Option missions indépendantes',
        },
        value: {
          ar: 'يفضل امتلاك بطاقة المقاول الذاتي (ANAE) عند التعاقد على مهام استشارية أو رقمية مستقلة',
          fr: 'Carte d’auto-entrepreneur (ANAE) recommandée pour facturer des missions freelance aux entreprises',
        },
      },
      {
        label: {
          ar: 'التواصل المهني',
          fr: 'Coordonnées joignables',
        },
        value: {
          ar: 'رقم هاتف نشط وبريد إلكتروني مهني لاستلام دعوات المقابلات',
          fr: 'Numéro de téléphone joignable et e-mail professionnel consulté régulièrement',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل التقديم في منصة Campuce Jobs يغني عن التسجيل في الوكالة الوطنية للتشغيل ANEM؟',
          fr: "L'inscription sur Campuce Jobs remplace-t-elle celle de l'ANEM ?",
        },
        answer: {
          ar: 'لا، منصة Campuce Jobs موجهة أساسا لربط الطلبة الجامعيين بعروض العمل الجزئي والتربصات والمهام المرنة مع الشركات، بينما يظل التسجيل في ANEM (وسيط) إلزاميا لعقود العمل الكلاسيكية ومنحة البطالة.',
          fr: 'Non, Campuce Jobs cible les stages, jobs étudiants et missions à temps partiel. L’inscription à l’ANEM (Wassit) reste requise pour les contrats classiques et dispositifs publics d’insertion.',
        },
      },
      {
        question: {
          ar: 'هل يمكن للطلبة في جميع الولايات الاستفادة من العروض؟',
          fr: 'Les offres concernent-elles toutes les wilayas d’Algérie ?',
        },
        answer: {
          ar: 'نعم، تضم المنصة عروضا حضورية في مختلف الولايات الكبرى بالإضافة إلى مهام عن بعد متاحة للطلبة من أي ولاية عبر الوطن.',
          fr: 'Oui, la plateforme référence des offres en présentiel dans plusieurs wilayas ainsi que des missions en télétravail accessibles partout en Algérie.',
        },
      },
      {
        question: {
          ar: 'ما هي صيغة السيرة الذاتية المقبولة عند الترشح؟',
          fr: 'Quel format de CV faut-il télécharger sur le profil ?',
        },
        answer: {
          ar: 'ينصح برفع سيرة ذاتية بصيغة PDF واضحة ومن صفحة واحدة مع ذكر الساعات المتاحة للعمل بالتوازي مع الجدول الزمني للدراسة.',
          fr: 'Privilégiez un CV au format PDF d’une page, bien structuré, en indiquant clairement vos créneaux de disponibilité compatibles avec vos cours.',
        },
      },
      {
        question: {
          ar: 'هل تتقاضى المنصة أي رسوم على الطالب أو المتربص؟',
          fr: 'Y a-t-il des frais d’inscription ou de commission pour les étudiants ?',
        },
        answer: {
          ar: 'لا، إنشاء الحساب وتصفح العروض والتقدم للوظائف والتربصات مجاني تماما للطلبة والخريجين.',
          fr: 'Non, la création de compte, la consultation des annonces et l’envoi des candidatures sont entièrement gratuits pour les étudiants.',
        },
      },
    ],
  },
  {
    id: 'casnos',
    slug: 'casnos',
    category: 'social_labor',
    name: {
      ar: 'الصندوق الوطني للضمان الاجتماعي لغير الأجراء (CASNOS)',
      fr: 'Caisse Nationale de Sécurité Sociale des Non-Salariés (CASNOS)',
    },
    acronym: 'CASNOS',
    ministry: {
      ar: 'وزارة العمل والتشغيل والضمان الاجتماعي',
      fr: 'Ministère du Travail, de l’Emploi et de la Sécurité Sociale',
    },
    description: {
      ar: 'دليل خدمات بوابة ضمانكم (damancom.casnos.dz) للعمال غير الأجراء والتجار والحرفيين والفلاحين والمقاولين الذاتيين: الانتساب والتصريح عن بعد، استخراج شهادة الانتساب وعدم الانتساب، الدفع الإلكتروني، وحساب التقاعد.',
      fr: 'Guide complet du portail Damancom CASNOS pour commerçants, artisans, professions libérales, agriculteurs et auto-entrepreneurs : affiliation en ligne, attestations d’affiliation et de non-affiliation, télépaiement des cotisations et simulation retraite.',
    },
    officialUrl: 'https://damancom.casnos.dz/',
    portalUrl: 'https://damancom.casnos.dz/auth/login/assure',
    iconName: 'ShieldCheck',
    isPopular: true,
    services: [
      {
        id: 'casnos-srv-1',
        title: {
          ar: 'فضاء المؤمن والتقاعد (بوابة ضمانكم)',
          fr: 'Espace Assuré & Retraite (Portail Damancom)',
        },
        description: {
          ar: 'الدخول إلى الحساب الشخصي لمتابعة الوضعية السنوية للاشتراكات، تحميل الشهادات المرقمنة، وتقديم التصريحات.',
          fr: 'Connexion à votre compte personnel pour suivre les cotisations annuelles, télédéclarer vos revenus et éditer vos attestations.',
        },
        url: 'https://damancom.casnos.dz/auth/login/assure',
        isOnline: true,
      },
      {
        id: 'casnos-srv-2',
        title: {
          ar: 'طلب الانتساب والتصريح والدفع عن بعد',
          fr: 'Demande d’Affiliation & Télépaiement en Ligne',
        },
        description: {
          ar: 'تسجيل منتسب جديد من التجار وأصحاب المهن الحرة والمقاولين الذاتيين وتسديد الاشتراكات إلكترونيا.',
          fr: 'Service d’affiliation initiale à distance pour les nouveaux professionnels et paiement sécurisé par Edahabia ou CIB.',
        },
        url: 'https://damancom.casnos.dz/affiliation',
        isOnline: true,
      },
      {
        id: 'casnos-srv-3',
        title: {
          ar: 'استخراج شهادة عدم الانتساب (عن بعد)',
          fr: 'Attestation de Non-Affiliation en Ligne',
        },
        description: {
          ar: 'خدمة فورية لاستخراج شهادة تثبت عدم الانتساب إلى صندوق غير الأجراء المطلوبة في عدة ملفات إدارية.',
          fr: 'Obtention immédiate de l’attestation de non-affiliation au régime des non-salariés avec vérification QR.',
        },
        url: 'https://damancom.casnos.dz/non-affiliation',
        isOnline: true,
      },
      {
        id: 'casnos-srv-4',
        title: {
          ar: 'منصة حمايتي للتغطية الاجتماعية للفلاحين',
          fr: 'Plateforme Himayati (Couverture Sociale Agricole)',
        },
        description: {
          ar: 'خدمة مخصصة للفلاحين والمربين لتسهيل الانتساب عن بعد والاستفادة من بطاقة الشفاء ونظام التقاعد.',
          fr: 'Guichet numérique dédié aux agriculteurs et éleveurs pour l’affiliation, le télépaiement et les droits à la retraite.',
        },
        url: 'https://damancom.casnos.dz/himayati/',
        isOnline: true,
      },
      {
        id: 'casnos-srv-5',
        title: {
          ar: 'محاكي حساب اشتراك التقاعد',
          fr: 'Simulateur de Cotisation & Pension Retraite',
        },
        description: {
          ar: 'أداة تفاعلية لتقدير مبلغ الاشتراك السنوي ومعدل معاش التقاعد المستقبلي لغير الأجراء.',
          fr: 'Outil officiel permettant d’estimer le montant de votre cotisation annuelle et votre future pension CASNOS.',
        },
        url: 'https://damancom.casnos.dz/simulation',
        isOnline: true,
      },
      {
        id: 'casnos-srv-6',
        title: {
          ar: 'منصة الشكاوى والانشغالات',
          fr: 'Portail des Réclamations et Doléances',
        },
        description: {
          ar: 'إيداع عريضة أو شكوى إلكترونية ومتابعة الرد الإداري حول ملف الاشتراك أو التغطية الصحية.',
          fr: 'Dépôt et suivi en ligne de toute réclamation liée aux cotisations, à la carte Chifa ou au dossier retraite.',
        },
        url: 'https://damancom.casnos.dz/doleances',
        isOnline: true,
      },
      {
        id: 'casnos-srv-7',
        title: {
          ar: 'البوابة الرئيسية ضمانكم (Damancom)',
          fr: 'Portail Principal Damancom CASNOS',
        },
        description: {
          ar: 'واجهة الولوج العامة لجميع الخدمات الإلكترونية للصندوق الوطني للضمان الاجتماعي لغير الأجراء.',
          fr: 'Point d’entrée central vers l’ensemble des téléservices numériques de la CASNOS.',
        },
        url: 'https://damancom.casnos.dz/',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'التجار، الحرفيون، أصحاب المهن الحرة، الفلاحون، المسيرون، والمقاولون الذاتيون',
        fr: 'Commerçants, artisans, professions libérales, agriculteurs, gérants et auto-entrepreneurs',
      },
      processingTime: {
        ar: 'فوري لاستخراج الشهادات ومؤقت بـ 24-48 ساعة لاعتماد طلبات الانتساب الأولي',
        fr: 'Instantané pour les attestations et simulateurs ; 24 à 48 h pour la validation d’une nouvelle affiliation',
      },
      fees: {
        ar: 'نسبة 15 بالمئة من الدخل الخاضع للضريبة المصرح به، وأقساط تفضيلية للمقاول الذاتي',
        fr: 'Cotisation annuelle fixée à 15 % du revenu imposable déclaré (barème spécifique pour l’auto-entrepreneur)',
      },
      channel: {
        ar: 'بوابة ضمانكم الإلكترونية damancom.casnos.dz والوكالات الولائية للصندوق',
        fr: 'Portail numérique damancom.casnos.dz et agences CASNOS de wilaya',
      },
      keyRequirement: {
        ar: 'السجل التجاري أو الاعتماد المهني أو بطاقة الفلاح/المقاول الذاتي مع رقم التعريف الجبائي والوطني',
        fr: 'Registre de commerce, agrément, carte fellah ou carte ANAE avec NIF et NIN',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثيقة النشاط غير الأجير',
          fr: 'Justificatif d’activité non salariée',
        },
        value: {
          ar: 'نسخة من السجل التجاري، الاعتماد المهني، بطاقة الحرفي، بطاقة الفلاح، أو بطاقة المقاول الذاتي',
          fr: 'Copie du registre de commerce, agrément libéral, carte d’artisan, carte fellah ou carte d’auto-entrepreneur',
        },
      },
      {
        label: {
          ar: 'التصريح السنوي بالوعاء المالي',
          fr: 'Déclaration annuelle d’assiette',
        },
        value: {
          ar: 'وثيقة G12 أو التصريح الضريبي السنوي (C20 / G11) لتحديد مبلغ الاشتراك المستحق',
          fr: 'Déclaration fiscale annuelle (G12, C20 ou G11) permettant de calculer l’assiette de cotisation',
        },
      },
      {
        label: {
          ar: 'الهوية وشهادة الميلاد',
          fr: 'Identité et état civil',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية (NIN) وشهادة الإقامة عند الانتساب الأولي',
          fr: 'CNIBE comportant le NIN et certificat de résidence lors de la première immatriculation',
        },
      },
      {
        label: {
          ar: 'أجل التسديد السنوي الرسمي',
          fr: 'Échéance annuelle de paiement',
        },
        value: {
          ar: 'يسدد الاشتراك السنوي قبل 30 جوان من كل سنة عبر البطاقة الذهبية أو CIB لتجنب غرامات التأخير',
          fr: 'Date limite légale fixée au 30 juin de chaque année (paiement en ligne ou par échéancier)',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هو آخر أجل لتسديد اشتراكات CASNOS السنوية دون غرامات تأخير؟',
          fr: 'Quelle est la date limite pour payer les cotisations annuelles CASNOS sans pénalité ?',
        },
        answer: {
          ar: 'يحدد القانون تاريخ 30 جوان من كل سنة كآخر أجل لدفع الاشتراك السنوي العادي دون تطبيق زيادات التأخير، كما يتيح الصندوق جدولة الأقساط عبر بوابة ضمانكم عند الصعوبة.',
          fr: 'L’échéance annuelle est fixée au 30 juin de chaque année. Passé cette date, des majorations de retard s’appliquent, sauf demande d’échéancier déposée à temps.',
        },
      },
      {
        question: {
          ar: 'هل يمكن للمقاول الذاتي التسجيل في CASNOS عبر الإنترنت؟',
          fr: "L'auto-entrepreneur peut-il s'affilier à la CASNOS en ligne ?",
        },
        answer: {
          ar: 'نعم، بمجرد حصولك على بطاقة المقاول الذاتي من ANAE يمكنك التقدم بطلب الانتساب عن بعد في بوابة ضمانكم والاستفادة من التغطية الصحية ببطاقة الشفاء واشتراك سنوي مخفض.',
          fr: 'Oui, dès obtention de votre carte ANAE, vous pouvez initier votre affiliation en ligne sur Damancom et bénéficier de la carte Chifa et de la retraite avec un régime adapté.',
        },
      },
      {
        question: {
          ar: 'كيف أستخرج شهادة أداء المستحقات أو شهادة الانتساب المرقمنة؟',
          fr: 'Comment télécharger l’attestation de mise à jour ou d’affiliation CASNOS ?',
        },
        answer: {
          ar: 'بعد تسوية اشتراكك السنوي، ادخل إلى فضاء المؤمن على damancom.casnos.dz واختر تبويب الشهادات لتحميل الوثيقة المزودة برمز التحقق QR فورا بصيغة PDF.',
          fr: 'Une fois votre cotisation à jour, connectez-vous à votre espace assuré sur Damancom et téléchargez directement vos attestations authentifiées par QR code au format PDF.',
        },
      },
      {
        question: {
          ar: 'ما هي خدمة استخراج شهادة عدم الانتساب ولمن توجه؟',
          fr: 'À quoi sert l’attestation de non-affiliation CASNOS en ligne ?',
        },
        answer: {
          ar: 'تثبت هذه الوثيقة عدم ممارسة المواطن لأي نشاط تجاري أو حر مسجل لدى الصندوق، وتطلب غالبا في ملفات المنح الاجتماعية، التقاعد، السكن، أو المسابقات عبر رابط non-affiliation.',
          fr: 'Ce document atteste que le demandeur n’est pas affilié comme travailleur non salarié. Il est exigé dans de nombreux dossiers d’aides sociales, de logement ou de retraite.',
        },
      },
    ],
  },
  {
    id: 'cnas',
    slug: 'cnas',
    category: 'social_labor',
    name: {
      ar: 'الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء (CNAS)',
      fr: 'Caisse Nationale des Assurances Sociales des Travailleurs Salariés (CNAS)',
    },
    acronym: 'CNAS',
    ministry: {
      ar: 'وزارة العمل والتشغيل والضمان الاجتماعي',
      fr: 'Ministère du Travail, de l’Emploi et de la Sécurité Sociale',
    },
    description: {
      ar: 'البوابة المتكاملة لخدمات الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء: فضاء الهناء (El Hanaa) لاستخراج شهادة الانتساب ومتابعة بطاقة الشفاء، وبوابة التصريح عن بعد لأرباب العمل.',
      fr: 'Portail officiel des services numériques CNAS : espace El Hanaa pour les assurés sociaux (attestation d’affiliation, suivi carte Chifa et remboursements) et portail télédéclaration pour les employeurs.',
    },
    officialUrl: 'https://www.cnas.dz/',
    portalUrl: 'https://elhanaa.cnas.dz/',
    iconName: 'HeartPulse',
    isPopular: true,
    services: [
      {
        id: 'cnas-srv-1',
        title: {
          ar: 'فضاء الهناء للمؤمن لهم اجتماعيا (الأجراء)',
          fr: 'Espace El Hanaa des Assurés Sociaux',
        },
        description: {
          ar: 'متابعة التعويضات الطبية، استهلاك الأدوية، وضعية بطاقة الشفاء وذوي الحقوق، واستخراج الشهادات.',
          fr: 'Consultation des remboursements médicaux, suivi de la carte Chifa, des ayants droit et édition des attestations.',
        },
        url: 'https://elhanaa.cnas.dz/',
        isOnline: true,
      },
      {
        id: 'cnas-srv-2',
        title: {
          ar: 'التسجيل الأولي في فضاء الهناء',
          fr: 'Inscription à l’Espace El Hanaa',
        },
        description: {
          ar: 'إنشاء حساب رقمي جديد باستخدام رقم الضمان الاجتماعي وتاريخ الميلاد لتفعيل كافة خدمات الأجير عن بعد.',
          fr: 'Création de compte personnel assuré via le numéro de sécurité sociale pour accéder aux téléservices CNAS.',
        },
        url: 'https://elhanaa.cnas.dz/inscription.xhtml',
        isOnline: true,
      },
      {
        id: 'cnas-srv-3',
        title: {
          ar: 'بوابة التصريح عن بعد لأرباب العمل (Télédeclaration)',
          fr: 'Portail de Télédéclaration des Employeurs',
        },
        description: {
          ar: 'إيداع التصريحات الفصلية والشهرية للاشتراكات، كشف الأجور السنوي DAS، وتسديد المستحقات إلكترونيا.',
          fr: 'Dépôt des déclarations périodiques de cotisations, déclaration annuelle des salaires (DAS) et télépaiement employeur.',
        },
        url: 'https://teledeclaration.cnas.dz/',
        isOnline: true,
      },
      {
        id: 'cnas-srv-4',
        title: {
          ar: 'التحقق من شهادة الانتساب الإلكترونية',
          fr: 'Vérification de l’Attestation d’Affiliation',
        },
        description: {
          ar: 'أداة رسمية لفحص صحة شهادة الانتساب الصادرة عن فضاء الهناء عبر رمز المصادقة الإلكتروني.',
          fr: 'Service de contrôle de l’authenticité des attestations d’affiliation CNAS délivrées en ligne.',
        },
        url: 'https://elhanaa.cnas.dz/affiliation.xhtml',
        isOnline: true,
      },
      {
        id: 'cnas-srv-5',
        title: {
          ar: 'استخراج شهادة عدم الانتساب لـ CNAS',
          fr: 'Attestation de Non-Affiliation CNAS',
        },
        description: {
          ar: 'استخراج شهادة تثبت عدم وجود صفة مؤمن له أجير لدى الصندوق لملفات المنح أو الضمان.',
          fr: 'Téléchargement en ligne d’une attestation certifiant l’absence d’affiliation salariée active.',
        },
        url: 'https://elhanaa.cnas.dz/attestation_no_affiliation.xhtml',
        isOnline: true,
      },
      {
        id: 'cnas-srv-6',
        title: {
          ar: 'التحقق من شهادة أداء المستحقات لأرباب العمل',
          fr: 'Vérification Attestation de Mise à Jour (Employeurs)',
        },
        description: {
          ar: 'تأكيد صلاحية شهادة أداء مستحقات الضمان الاجتماعي الخاصة بالشركات المشاركة في الصفقات العمومية.',
          fr: 'Contrôle en ligne de la validité des attestations de mise à jour des cotisations patronales.',
        },
        url: 'https://teledeclaration.cnas.dz/checkMAJ.jsp',
        isOnline: true,
      },
      {
        id: 'cnas-srv-7',
        title: {
          ar: 'تطبيق الهناء الرسمي للأندرويد',
          fr: 'Application Mobile Officielle El Hanaa',
        },
        description: {
          ar: 'تحميل تطبيق الهناء على الهاتف الذكي لمتابعة الوصفات الطبية، التغطية، واستلام الإشعارات.',
          fr: 'Application Android officielle permettant aux assurés CNAS de suivre leurs dossiers depuis leur smartphone.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.cnas.mobile_elhanaa&hl=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'العمال الأجراء، الموظفون، المتقاعدون، الطلبة، وذوو الحقوق، إضافة إلى أرباب العمل',
        fr: 'Salariés, fonctionnaires, retraités, étudiants, ayants droit et employeurs',
      },
      processingTime: {
        ar: 'استخراج فوري للشهادات عبر فضاء الهناء؛ إصدار بطاقة الشفاء الأولى خلال 15 إلى 30 يوما',
        fr: 'Attestations générées instantanément sur El Hanaa ; première carte Chifa délivrée sous 15 à 30 jours',
      },
      fees: {
        ar: 'كافة الخدمات الرقمية عبر فضاء الهناء والتصريح عن بعد مجانية بالكامل',
        fr: 'Tous les téléservices El Hanaa et portails d’attestation sont 100 % gratuits',
      },
      channel: {
        ar: 'منصة elhanaa.cnas.dz للأفراد، بوابة teledeclaration.cnas.dz للمستخدمين، ومراكز الدفع الولائية',
        fr: 'Portail elhanaa.cnas.dz, plateforme teledeclaration.cnas.dz et centres de paiement de wilaya',
      },
      keyRequirement: {
        ar: 'رقم الضمان الاجتماعي (12 رقما)، بطاقة التعريف البيومترية (NIN)، ورقم هاتف مفعّل',
        fr: 'Numéro de sécurité sociale (12 chiffres), CNIBE (NIN) et numéro de téléphone actif',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تفعيل حساب فضاء الهناء',
          fr: 'Activation du compte El Hanaa',
        },
        value: {
          ar: 'رقم الضمان الاجتماعي المكون من 12 رقما، الاسم واللقب باللاتينية، وتاريخ الميلاد المطابق لبطاقة الشفاء',
          fr: 'Numéro d’assuré social à 12 chiffres, nom/prénom et date de naissance conformes au dossier CNAS',
        },
      },
      {
        label: {
          ar: 'طلب بطاقة الشفاء الجديدة أو المجددة',
          fr: 'Dossier carte Chifa (1ère demande / renouvellement)',
        },
        value: {
          ar: 'صورة شمسية بخلفية بيضاء، بطاقة فصيلة الدم، شهادة عمل حديثة، وبطاقة التعريف البيومترية',
          fr: 'Photo d’identité fond blanc, groupage sanguin, attestation de travail récente et CNIBE',
        },
      },
      {
        label: {
          ar: 'التصريح عن بعد للمستخدمين (DAS / DAC)',
          fr: 'Télédéclaration employeur (DAS / DAC)',
        },
        value: {
          ar: 'رقم المشترك لدى CNAS، بيانات دخول الوكالة، وملف الأجور الشهري أو السنوي بصيغة معتمدة',
          fr: 'Numéro employeur CNAS, identifiants portail et fichier déclaratif des salariés conforme',
        },
      },
      {
        label: {
          ar: 'تسجيل ذوي الحقوق والعطل المرضية',
          fr: 'Ayants droit & arrêts de travail',
        },
        value: {
          ar: 'شهادة عائلية وعقد الزواج للزوجة والأبناء؛ وشهادة طبية في أجل 48 ساعة للعطلة المرضية',
          fr: 'Fiche familiale pour conjoint/enfants ; dépôt de l’arrêt maladie sous 48 h ouvrables',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أحصل على الرقم السري للدخول إلى فضاء الهناء CNAS؟',
          fr: 'Comment obtenir son mot de passe pour accéder à l’espace El Hanaa ?',
        },
        answer: {
          ar: 'عند التسجيل لأول مرة على elhanaa.cnas.dz/inscription.xhtml، أدخل رقم الضمان الاجتماعي ورقم الهاتف والبريد الإلكتروني لتصلك رسالة التفعيل أو تتوجه إلى مركز الدفع التابع لك لتحديث رقم الهاتف.',
          fr: 'Lors de la première inscription sur elhanaa.cnas.dz/inscription.xhtml, saisissez votre numéro de sécurité sociale et vos coordonnées. En cas de blocage, faites actualiser votre mobile au centre de paiement CNAS.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تحيين بطاقة الشفاء مباشرة عند الصيدلي دون الذهاب إلى CNAS؟',
          fr: 'Peut-on mettre à jour la carte Chifa chez le pharmacien sans aller à l’agence ?',
        },
        answer: {
          ar: 'نعم، بمجرد تصريح رب العمل باشتراكاتك الفصلية أو الشهرية، يتم تحيين حقوقك آليا ويمكن تحديث شريحة بطاقة الشفاء مباشرة لدى الصيدلي المتعاقد مع الصندوق.',
          fr: 'Oui, dès que votre employeur valide sa télédéclaration de cotisations, la mise à jour de vos droits s’effectue automatiquement chez tout pharmacien conventionné.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من أن صاحب العمل يصرح بي فعليا لدى الضمان الاجتماعي؟',
          fr: 'Comment vérifier si mon employeur me déclare régulièrement à la CNAS ?',
        },
        answer: {
          ar: 'ادخل إلى فضاء الهناء عبر الموقع أو التطبيق، ثم انتقل إلى تبويب المسار المهني وشهادة الانتساب للتحقق من تاريخ بداية النشاط واستمرارية التصريحات الفصلية.',
          fr: 'Connectez-vous à votre espace El Hanaa et consultez la rubrique « Affiliation / Carrière » : vos périodes déclarées et votre statut d’assuré actif y apparaissent en temps réel.',
        },
      },
      {
        question: {
          ar: 'ما العمل عند ضياع بطاقة الشفاء أو تلف الشريحة الإلكترونية؟',
          fr: 'Que faire en cas de perte ou de puce endommagée sur la carte Chifa ?',
        },
        answer: {
          ar: 'يجب التصريح بضياع البطاقة إلكترونيا عبر بوابة المديرية العامة للأمن الوطني أو الدرك، ثم إيداع وصل التصريح بالضياع مرفوقا بصورة شمسية لدى مركز الدفع CNAS لإعادة طبعها.',
          fr: 'Effectuez d’abord une déclaration de perte auprès de la police/gendarmerie (ou en ligne sur DGSN), puis déposez le récépissé avec une photo auprès de votre centre CNAS.',
        },
      },
    ],
  },
  {
    id: 'cnr',
    slug: 'cnr',
    category: 'social_labor',
    name: {
      ar: 'الصندوق الوطني للتقاعد (CNR)',
      fr: 'Caisse Nationale des Retraites (CNR)',
    },
    acronym: 'CNR',
    ministry: {
      ar: 'وزارة العمل والتشغيل والضمان الاجتماعي',
      fr: 'Ministère du Travail, de l’Emploi et de la Sécurité Sociale',
    },
    description: {
      ar: 'الدليل الشامل لخدمات الصندوق الوطني للتقاعد في الجزائر: فضاء المتقاعد، حساب تاريخ صب المعاش (calccp)، متابعة ملف التقاعد، التقاعد المنقول، تثمين المعاش، والحساب الفردي للأجير (CIS).',
      fr: 'Guide complet des services numériques de la Caisse Nationale des Retraites (CNR) : Espace Retraité, calendrier de versement des pensions, suivi de dossier, pension de réversion, revalorisation et Compte Individuel du Salarié (CIS).',
    },
    officialUrl: 'https://dz.cnr.dz/',
    portalUrl: 'https://retraite.cnr.dz/#/login',
    iconName: 'Clock',
    isPopular: true,
    services: [
      {
        id: 'cnr-srv-1',
        title: {
          ar: 'فضاء وحساب المتقاعد (Retraite CNR)',
          fr: 'Espace Personnel du Retraité',
        },
        description: {
          ar: 'الاطلاع على كشف المعاش الشهري، تحميل شهادة الدخل أو عدم تقاضي منحة، وتقديم طلبات التجديد الإداري.',
          fr: 'Consultation des bulletins de pension, téléchargement de l’attestation de revenus ou de non-perception et suivi administratif.',
        },
        url: 'https://retraite.cnr.dz/#/login',
        isOnline: true,
      },
      {
        id: 'cnr-srv-2',
        title: {
          ar: 'تحديد تاريخ صب معاش التقاعد (CalCCP)',
          fr: 'Calendrier de Versement des Pensions (CalCCP)',
        },
        description: {
          ar: 'خدمة فورية لمعرفة يوم صب المعاش الشهري في الحساب البريدي الجاري CCP بناء على الرقم الأخير للحساب.',
          fr: 'Outil instantané indiquant le jour exact du virement mensuel sur votre compte CCP selon la clé de compte.',
        },
        url: 'https://calccp.cnr.dz/',
        isOnline: true,
      },
      {
        id: 'cnr-srv-3',
        title: {
          ar: 'الحساب الفردي للأجير (CIS - تتبع سنوات العمل)',
          fr: 'Compte Individuel du Salarié (CIS)',
        },
        description: {
          ar: 'منصة تسمح للعامل الأجير بمراقبة مساره المهني وعدد السنوات المصرح بها قبل بلوغ سن التقاعد.',
          fr: 'Portail permettant aux salariés actifs de vérifier leurs années d’assurance déclarées avant la liquidation de la retraite.',
        },
        url: 'https://cis.cnr.dz/',
        isOnline: true,
      },
      {
        id: 'cnr-srv-4',
        title: {
          ar: 'متابعة ملف التقاعد وتقديم العرائض',
          fr: 'Suivi du Dossier Retraite & Réclamations',
        },
        description: {
          ar: 'مراقبة مراحل دراسة ملف التقاعد المودع وتوجيه الاستفسارات أو العرائض للوكالة المحلية.',
          fr: 'Suivi en temps réel de l’état d’avancement du dossier de liquidation de pension et dépôt de requêtes.',
        },
        url: 'https://suivi.cnr.dz/',
        isOnline: true,
      },
      {
        id: 'cnr-srv-5',
        title: {
          ar: 'منصة التقاعد المنقول (لذوي الحقوق)',
          fr: 'Portail Pension de Réversion (Mankoul)',
        },
        description: {
          ar: 'تقديم ومتابعة ملفات معاش التقاعد المنقول للأرملة والأبناء القصر أو ذوي الحقوق المؤهلين قانونا.',
          fr: 'Dépôt et suivi des demandes de pension de réversion pour les ayants droit (conjoint survivant et orphelins).',
        },
        url: 'https://mankoul.cnr.dz/',
        isOnline: true,
      },
      {
        id: 'cnr-srv-6',
        title: {
          ar: 'منصة احتساب تثمين المعاش السنوي',
          fr: 'Calculateur de Revalorisation des Pensions',
        },
        description: {
          ar: 'معرفة قيمة الزيادة السنوية المطبقة على المعاشات وفق نسب التثمين المقررة من السلطات العمومية.',
          fr: 'Simulation directe de l’augmentation annuelle appliquée à votre pension selon les taux réglementaires.',
        },
        url: 'https://reval.cnr.dz/',
        isOnline: true,
      },
      {
        id: 'cnr-srv-7',
        title: {
          ar: 'فضاء صاحب العمل (إيداع ملفات التقاعد)',
          fr: 'Espace Employeur (Dépôt Électronique)',
        },
        description: {
          ar: 'بوابة أرباب العمل والمؤسسات لإعداد وإرسال ملفات إحالة العمال على التقاعد إلكترونيا.',
          fr: 'Guichet employeurs pour la transmission dématérialisée des dossiers de mise à la retraite des salariés.',
        },
        url: 'https://fel.cnr.dz/login',
        isOnline: true,
      },
      {
        id: 'cnr-srv-8',
        title: {
          ar: 'التحقق من صحة وثائق وشهادات CNR',
          fr: 'Vérification d’Authenticité des Attestations CNR',
        },
        description: {
          ar: 'منصة للتحقق الإلكتروني من شهادة الدخل وشهادة عدم تقاضي المنحة المودعة لدى الإدارات.',
          fr: 'Outil officiel de contrôle des attestations de revenu et de non-perception délivrées par la CNR.',
        },
        url: 'https://retraite.cnr.dz/#/validate',
        isOnline: true,
      },
      {
        id: 'cnr-srv-9',
        title: {
          ar: 'تطبيق الهاتف الرسمي (تقاعدي / RetraiteDz)',
          fr: 'Application Mobile Officielle RetraiteDz',
        },
        description: {
          ar: 'تطبيق المتقاعد على أندرويد لتجديد الوثائق الدورية عن بعد عبر تقنية التعرف على الوجه واستلام الشهادات.',
          fr: 'Application Android permettant le renouvellement biométrique annuel à distance par reconnaissance faciale et suivi du paiement.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.cnr.cnr',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المتقاعدون، ذوو الحقوق (التقاعد المنقول)، العمال المقبلون على التقاعد، وأرباب العمل',
        fr: 'Retraités, ayants droit (réversion), salariés actifs en fin de carrière et employeurs',
      },
      processingTime: {
        ar: 'فوري للشهادات وحساب تاريخ الصب؛ دراسة ملف التقاعد الجديد خلال 15 إلى 45 يوما قبل سن التقاعد',
        fr: 'Instantané pour attestations et calendrier ; traitement d’un nouveau dossier de liquidation en 15 à 45 jours',
      },
      fees: {
        ar: 'كافة الخدمات والشهادات الرقمية والتجديد عبر التطبيق مجانية بالكامل',
        fr: 'Tous les services en ligne, attestations et renouvellements via l’application sont gratuits',
      },
      channel: {
        ar: 'بوابة retraite.cnr.dz، تطبيق RetraiteDz، منصة cis.cnr.dz، والوكالات الولائية للصندوق',
        fr: 'Portail retraite.cnr.dz, app RetraiteDz, cis.cnr.dz et agences CNR de wilaya',
      },
      keyRequirement: {
        ar: 'رقم المعاش (أو رقم الضمان الاجتماعي في CIS)، بطاقة التعريف البيومترية، ورقم الحساب البريدي أو البنكي',
        fr: 'Numéro de pension (ou n° sécurité sociale pour CIS), CNIBE et RIB/RIP',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تجديد شهادة الحياة للمتقاعدين',
          fr: 'Renouvellement annuel des pièces',
        },
        value: {
          ar: 'تطبيق RetraiteDz للتحقق البيومتري عن بعد بالوجه في شهر الميلاد دون تنقل للبلدية أو الوكالة',
          fr: 'Renouvellement à distance via l’application RetraiteDz (reconnaissance faciale) durant le mois de naissance',
        },
      },
      {
        label: {
          ar: 'تصفية ملف التقاعد المباشر',
          fr: 'Liquidation de pension directe',
        },
        value: {
          ar: 'شهادات العمل المصرح بها (DAS/CNAS)، كشوف الأجور للسنوات المرجعية، وصك مشطوب CCP أو بنكي',
          fr: 'Attestations de travail, relevés des salaires des années de référence et chèque barré CCP/bancaire',
        },
      },
      {
        label: {
          ar: 'ملف التقاعد المنقول (Mankoul)',
          fr: 'Dossier pension de réversion',
        },
        value: {
          ar: 'شهادة وفاة المتقاعد، شهادة عائلية، شهادة عدم الزواج للأرملة أو عدم العمل للبنت، وشهادة تمدرس للقصر',
          fr: 'Acte de décès, fiche familiale, attestation de non-remariage/non-activité et certificat de scolarité',
        },
      },
      {
        label: {
          ar: 'الاستعلام عن المسار المهني (CIS)',
          fr: 'Consultation du compte CIS',
        },
        value: {
          ar: 'رقم الضمان الاجتماعي والاسم الكامل لتدقيق كافة سنوات الاشتراك قبل إيداع ملف التقاعد',
          fr: 'Numéro d’assuré social CNAS pour vérifier la complétude des trimestres validés avant la retraite',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'متى يتم صب معاش التقاعد الشهري في الجزائر وكيف أعرف يوم الصب الخاص بي؟',
          fr: 'À quelle date la pension de retraite est-elle virée chaque mois en Algérie ?',
        },
        answer: {
          ar: 'يتم صب المعاشات بين 15 و26 من كل شهر حسب آخر رقم في الحساب البريدي الجاري CCP. يمكنك التحقق من اليوم الدقيق عبر منصة calccp.cnr.dz بإدخال رقم حسابك.',
          fr: 'Les versements sont échelonnés entre le 15 et le 26 de chaque mois selon le dernier chiffre de votre compte CCP. Consultez le jour exact sur calccp.cnr.dz.',
        },
      },
      {
        question: {
          ar: 'كيف يقوم المتقاعد بتجديد وثائقه السنوية عبر الهاتف دون التنقل؟',
          fr: 'Comment effectuer le renouvellement annuel des documents via RetraiteDz ?',
        },
        answer: {
          ar: 'بمجرد حلول شهر ميلاد المتقاعد، يفتح تطبيق الهاتف الرسمي لـ CNR ويسجل الدخول برقم المعاش ثم يتبع خطوة مسح الوجه (التعرف البيومتري عن بعد) ليتم التجديد فورا دون إيداع أي ورقة.',
          fr: 'Durant votre mois de naissance, ouvrez l’application RetraiteDz, identifiez-vous et validez l’étape de reconnaissance faciale R-Face pour renouveler vos droits automatiquement.',
        },
      },
      {
        question: {
          ar: 'ما هي فائدة منصة الحساب الفردي للأجير CIS قبل التقاعد؟',
          fr: 'À quoi sert le Compte Individuel du Salarié (CIS) avant l’âge de la retraite ?',
        },
        answer: {
          ar: 'تتيح لك منصة cis.cnr.dz الاطلاع مبكرا على كامل سنوات العمل المصرح بها من طرف مستخدميك، والتبليغ الفوري عن أي فترة مفقودة أو غير مصرح بها قبل موعد إحالتك على التقاعد.',
          fr: 'La plateforme cis.cnr.dz permet de vérifier à l’avance toutes vos années cotisées et de signaler d’éventuelles lacunes de déclaration avant le dépôt du dossier final.',
        },
      },
      {
        question: {
          ar: 'كيف أستخرج شهادة الدخل للمتقاعد أو شهادة عدم تقاضي منحة؟',
          fr: 'Comment obtenir une attestation de revenu ou de non-perception CNR en ligne ?',
        },
        answer: {
          ar: 'توجه إلى بوابة retraite.cnr.dz واختر الوثيقة المطلوبة لتحميل نسخة PDF رسمية مختومة برمز QR، والتي يمكن لأي إدارة التحقق من صحتها عبر رابط التحقق.',
          fr: 'Connectez-vous à retraite.cnr.dz et téléchargez directement l’attestation PDF munie d’un QR code authentifiable par les administrations sur le portail CNR.',
        },
      },
    ],
  },
  {
    id: 'commerce',
    slug: 'commerce',
    category: 'finance_economy',
    name: {
      ar: 'وزارة التجارة الداخلية وضبط السوق والرقابة الاقتصادية',
      fr: 'Ministère du Commerce Intérieur et Régulation du Marché',
    },
    acronym: 'COMMERCE',
    ministry: {
      ar: 'وزارة التجارة الداخلية وضبط السوق الوطنية',
      fr: 'Ministère du Commerce Intérieur et de la Régulation du Marché',
    },
    description: {
      ar: 'البوابة الشاملة للخدمات الرقمية لوزارة التجارة وضبط السوق: تطبيق رفيقكوم لمعرفة المحلات المناوبة، منصة تواصل لتبليغات المستهلك، دعم الصادرات FSPE، والربط مع بوابة الجمارك وجباية تيك.',
      fr: 'Portail des services numériques du Ministère du Commerce : application Rafikcom (commerces de permanence et signalements), plateforme Tawassol consommateurs, fonds exportations FSPE et liens Douanes / Jibaya’tic.',
    },
    officialUrl: 'https://www.commerce.gov.dz/ar',
    portalUrl: 'https://tawassol.commerce.gov.dz/complaint/selecttype',
    iconName: 'Store',
    isPopular: false,
    services: [
      {
        id: 'commerce-srv-1',
        title: {
          ar: 'منصة تواصل للتبليغ والشكاوى (فضاء المستهلك)',
          fr: 'Plateforme Tawassol (Signalements & Espace Consommateur)',
        },
        description: {
          ar: 'تقديم تبليغ عن مخالفة تجارية، مضاربة في الأسعار، غش في السلعة، أو طلب معلومات عامة من الوزارة.',
          fr: 'Dépôt de réclamations consommateurs, signalement de pratiques commerciales illicites ou demandes d’information.',
        },
        url: 'https://tawassol.commerce.gov.dz/complaint/selecttype',
        isOnline: true,
      },
      {
        id: 'commerce-srv-2',
        title: {
          ar: 'تطبيق رفيقكوم (Rafikcom) للمحلات المناوبة والرقابة',
          fr: 'Application Mobile Officielle Rafikcom',
        },
        description: {
          ar: 'معرفة المخابز والمحلات التجارية المناوبة خلال الأعياد والعطل الرسمية والتبليغ عن المخالفين.',
          fr: 'Géolocalisation des boulangeries et commerces de permanence durant les jours fériés et signalement des manquements.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.brenco.rafikcom',
        isOnline: true,
      },
      {
        id: 'commerce-srv-3',
        title: {
          ar: 'المنصة الرقمية للصندوق الخاص لترقية الصادرات (FSPE)',
          fr: 'Fonds Spécial pour la Promotion des Exportations (FSPE)',
        },
        description: {
          ar: 'إيداع ومتابعة ملفات تعويض تكاليف النقل والمشاركة في المعارض الدولية للمصدرين الجزائريين.',
          fr: 'Dépôt et suivi des dossiers de subvention logistique et d’accompagnement destinés aux entreprises exportatrices.',
        },
        url: 'https://fspe.commerce.gov.dz/',
        isOnline: true,
      },
      {
        id: 'commerce-srv-4',
        title: {
          ar: 'خلية الإصغاء والاستعلام بوزارة التجارة',
          fr: "Cellule d'Écoute du Ministère du Commerce",
        },
        description: {
          ar: 'قناة تواصل رسمية للمتعاملين الاقتصاديين والمواطنين لطرح الاستفسارات القانونية والتجارية.',
          fr: 'Canal officiel de correspondance avec la cellule d’écoute centrale pour les opérateurs économiques et citoyens.',
        },
        url: 'https://www.commerce.gov.dz/ar/ecrire-a-la-cellule-d-ecoute/',
        isOnline: true,
      },
      {
        id: 'commerce-srv-5',
        title: {
          ar: 'منصة المعلومة التعريفية الملزمة (الجمارك - RTC)',
          fr: 'Renseignement Tarifaire Contraignant (RTC — Douanes)',
        },
        description: {
          ar: 'طلب التحديد المسبق للتعريفة الجمركية للبضائع المستوردة أو المصدرة عبر بوابة الجمارك.',
          fr: 'Demande de classement tarifaire officiel préalable des marchandises importées ou exportées.',
        },
        url: 'https://douane.gov.dz/rtc/',
        isOnline: true,
      },
      {
        id: 'commerce-srv-6',
        title: {
          ar: 'بوابة التصريح والدفع الجبائي (جباية تيك)',
          fr: "Portail Fiscal Jibaya'tic",
        },
        description: {
          ar: 'إتمام التصريحات الضريبية التجارية والمهنية ودفع المستحقات عن بعد لمتعاملي السجل التجاري.',
          fr: 'Télédéclaration et télépaiement des impôts des commerçants et sociétés rattachées aux centres des impôts.',
        },
        url: 'https://mfdgi.gov.dz/portailpublic_ar/',
        isOnline: true,
      },
      {
        id: 'commerce-srv-7',
        title: {
          ar: 'الموقع الرسمي لوزارة التجارة والجمارك الجزائرية',
          fr: 'Site Officiel du Ministère du Commerce & Douanes',
        },
        description: {
          ar: 'الاطلاع على اللوائح التنظيمية للأسعار، قوائم المواد المدعمة، وأخبار ضبط السوق الوطنية.',
          fr: 'Publication des arrêtés réglementaires, listes des produits soutenus et actualités du commerce extérieur et intérieur.',
        },
        url: 'https://www.commerce.gov.dz/ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المستهلكون والمواطنون، التجار، المستوردون، المصدرون، والمتعاملون الاقتصاديون',
        fr: 'Consommateurs, commerçants, importateurs, exportateurs et opérateurs économiques',
      },
      processingTime: {
        ar: 'معالجة سريعة لبلاغات المستهلك عبر رفيقكوم وتواصل، ودراسة ملفات FSPE حسب الدورة',
        fr: 'Traitement rapide des signalements consommateurs ; instruction des dossiers export FSPE selon session',
      },
      fees: {
        ar: 'جميع خدمات التبليغ والاستعلام ودعم الصادرات على المنصات الوزارية مجانية',
        fr: 'L’accès aux portails de signalement, d’écoute et de demande FSPE est entièrement gratuit',
      },
      channel: {
        ar: 'منصة tawassol.commerce.gov.dz، تطبيق رفيقكوم، والمديريات الولائية للتجارة DCP',
        fr: 'Portail tawassol.commerce.gov.dz, application Rafikcom et Directions du Commerce de wilaya (DCP)',
      },
      keyRequirement: {
        ar: 'معلومات الموقع والوثائق الثبوتية للمخالفة بالنسبة للمستهلك، والسجل التجاري للمصدرين',
        fr: 'Localisation et preuves du signalement (consommateur) ou registre de commerce et NIF (exportateur)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تقديم شكوى أو تبليغ مستهلك',
          fr: 'Signalement d’une infraction commerciale',
        },
        value: {
          ar: 'تحديد اسم المحل أو العنوان الدقيق، طبيعة المخالفة (أسعار، صلاحية، فاتورة)، وصورة إثبات عند التوفر',
          fr: 'Adresse précise du commerce, nature de l’infraction (prix, péremption, refus de vente) et photo justificative',
        },
      },
      {
        label: {
          ar: 'الاستفادة من دعم الصادرات FSPE',
          fr: 'Dossier soutien exportation FSPE',
        },
        value: {
          ar: 'السجل التجاري الإلكتروني لنشاط التصدير، التصريحات الجمركية D10، وفواتير الشحن والنقل المعتمدة',
          fr: 'Registre de commerce export, déclarations douanières D10 et factures de fret international acquittées',
        },
      },
      {
        label: {
          ar: 'برنامج المناوبة خلال الأعياد والعطل',
          fr: 'Suivi des commerces de permanence',
        },
        value: {
          ar: 'تفعيل خاصية تحديد الموقع الجغرافي في تطبيق رفيقكوم لاختيار الولاية والبلدية',
          fr: 'Activation de la géolocalisation dans Rafikcom pour afficher les boulangeries et commerces ouverts',
        },
      },
      {
        label: {
          ar: 'الربط الجمركي والجبائي للمتعاملين',
          fr: 'Conformité fiscale & douanière',
        },
        value: {
          ar: 'رقم التعريف الجبائي NIF، رمز النشاط التجاري من CNRC، وحساب فعال في بوابة جباية تيك والجمارك',
          fr: 'Numéro NIF, code d’activité CNRC et accès validé aux portails Jibaya’tic et Douanes ALCES',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أبلغ عن تاجر لم يلتزم بالأسعار المقننة أو بالمناوبة في العيد؟',
          fr: 'Comment signaler un commerçant ne respectant pas la permanence ou les prix réglementés ?',
        },
        answer: {
          ar: 'يمكنك التبليغ الفوري عبر تطبيق رفيقكوم (Rafikcom) بالهاتف أو عبر منصة تواصل (tawassol.commerce.gov.dz) مع تحديد الولاية والبلدية واسم المحل ليتم إيفاد أعوان الرقابة التابعين لمديرية التجارة.',
          fr: 'Utilisez l’application Rafikcom ou la plateforme Tawassol (tawassol.commerce.gov.dz) en précisant la wilaya, la commune et le nom du commerce pour déclencher l’intervention des inspecteurs DCP.',
        },
      },
      {
        question: {
          ar: 'ما هي الخدمات التي يقدمها الصندوق الخاص لترقية الصادرات FSPE؟',
          fr: 'Quelles aides propose le Fonds Spécial pour la Promotion des Exportations (FSPE) ?',
        },
        answer: {
          ar: 'يتكفل الصندوق عبر منصته الرقمية fspe.commerce.gov.dz بتعويض نسبة معتبرة من تكاليف النقل الدولي والشحن البحري والجوي والبري للبضائع المصدرة خارج المحروقات وتكاليف المعارض الدولية.',
          fr: 'Le FSPE rembourse via fspe.commerce.gov.dz une part importante des frais de transport international des marchandises hors hydrocarbures ainsi que les frais de participation aux salons à l’étranger.',
        },
      },
      {
        question: {
          ar: 'أين أجد قائمة المحلات المناوبة في بلديتي خلال أيام العيد؟',
          fr: 'Où trouver la liste des boulangeries et commerces ouverts pendant l’Aïd ?',
        },
        answer: {
          ar: 'حمل تطبيق رفيقكوم الرسمي على أندرويد واختر ولايتك وبلديتك لعرض خريطة وقائمة المخابز ومحلات التغذية العامة المسخرة للمناوبة الرسمية.',
          fr: 'Téléchargez l’application officielle Rafikcom et sélectionnez votre wilaya et commune pour consulter la liste géolocalisée des commerces réquisitionnés.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين منصة تواصل وخلية الإصغاء لوزارة التجارة؟',
          fr: 'Quelle est la différence entre la plateforme Tawassol et la cellule d’écoute ?',
        },
        answer: {
          ar: 'تختص منصة تواصل بمعالجة التبليغات والشكاوى الميدانية للمستهلكين مع رقم متابعة، بينما تستخدم خلية الإصغاء للاستفسارات العامة والمراسلات المؤسسية للمتعاملين الاقتصاديين.',
          fr: 'Tawassol est dédiée aux signalements et plaintes consommateurs avec suivi par ticket, tandis que la cellule d’écoute traite les requêtes administratives et sollicitations des opérateurs.',
        },
      },
    ],
  },
];

export const batch2Guides: Record<string, RichGuideContent> = {
  assurance: {
    intro: {
      ar: [
        'يمثل قطاع التأمينات في الجزائر ركيزة أساسية لحماية الأفراد والممتلكات والمشاريع الاقتصادية من المخاطر اليومية والكوارث غير المتوقعة، تحت إشراف وزارة المالية والمجلس الوطني للتأمينات (CNA). يضم السوق الوطني باقة متكاملة من الشركات العمومية الرائدة مثل SAA وCAAT وCAAR وCASH، إلى جانب شركات خاصة معتمدة ونوافذ متخصصة في التأمين التكافلي المطابق للشريعة الإسلامية.',
        'اتجهت شركات التأمين الجزائرية خلال السنوات الأخيرة نحو رقمنة خدماتها، مما أتاح للمؤمن لهم إمكانية محاكاة تسعيرة تأمين السيارات وتأمين الكوارث الطبيعية CAT-NAT عبر الإنترنت، تجديد عقود التأمين عن بعد والدفع بالبطاقة الذهبية أو بطاقة CIB، إضافة إلى التصريح الأولي بحوادث المرور وتتبع مسار ملف الخبرة والتعويض المالي دون تكرار التنقل إلى الوكالات.',
        'يوفر لك هذا الدليل المرجعي خريطة واضحة لأنواع التأمينات الإلزامية والاختيارية في الجزائر، الوثائق المطلوبة لاكتتاب كل عقد أو فتح ملف حادث، الخطوات العملية للمقارنة والاختيار الآمن، وطرق معالجة الخلافات حول تقييم الخبرة أو تأخر التعويضات.'
      ],
      fr: [
        "Le secteur des assurances en Algérie joue un rôle déterminant dans la protection financière des ménages, des automobilistes et des entreprises face aux aléas quotidiens et aux risques majeurs, sous la tutelle du Ministère des Finances et du Conseil National des Assurances (CNA). Le marché réunit des compagnies publiques historiques (SAA, CAAT, CAAR, CASH), des assureurs privés ainsi que des compagnies et fenêtres agréées en assurance Takaful.",
        "La digitalisation progressive des assureurs algériens permet désormais de réaliser des devis en ligne pour l’assurance automobile ou l’assurance obligatoire contre les catastrophes naturelles (CAT-NAT), de renouveler certaines polices à distance via Edahabia ou CIB, et de déclarer ou suivre l’indemnisation des sinistres depuis un espace client.",
        "Ce guide complet récapitule les garanties légalement obligatoires en Algérie, la composition exacte des dossiers de souscription et de sinistre, la démarche méthodique pour comparer les offres et les recours disponibles en cas de retard d’expertise ou d’indemnisation."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'البطاقة الرمادية للمركبة ورخصة السياقة ومحضر المراقبة التقنية ساري المفعول عند تأمين السيارات.',
        'عقد الملكية أو الدفتر العقاري أو عقد الكراء مع رقم التعريف الوطني NIN لاكتتاب تأمين الكوارث الطبيعية CAT-NAT.',
        'محضر المعاينة الودية موقعا من الطرفين أو محضر الضبطية القضائية عند التصريح بأي حادث مرور.',
        'بطاقة دفع إلكتروني (الذهبية أو CIB) لتسديد الأقساط عن بعد، وكشف الهوية البريدي أو البنكي (RIP/RIB) لاستلام التعويض.',
      ],
      fr: [
        'Carte grise du véhicule, permis de conduire et contrôle technique à jour pour toute souscription automobile.',
        'Acte de propriété, livret foncier ou contrat de bail avec NIN pour l’assurance obligatoire CAT-NAT.',
        'Constat amiable dûment signé par les parties ou PV officiel des forces de l’ordre pour déclarer un sinistre.',
        'Carte Edahabia/CIB pour le règlement en ligne et relevé RIB/RIP pour le virement des indemnités.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. تحديد نوع التغطية المطلوبة ومقارنة الشركات المعتمدة',
          fr: '1. Identifier le besoin de couverture et comparer les assureurs agréés',
        },
        detail: {
          ar: 'حدد ما إذا كان العقد إلزاميا (مسؤولية مدنية للسيارة أو CAT-NAT للسكن) أو شاملا، ثم قارن الشروط والأسقف عبر دليل الشركات في البوابة.',
          fr: 'Distinguez l’assurance obligatoire (RC auto ou CAT-NAT habitation) des garanties optionnelles, puis comparez les compagnies via notre annuaire dédié.',
        },
      },
      {
        title: {
          ar: '2. إجراء محاكاة القسط وتجهيز الوثائق الرقمية',
          fr: '2. Simuler le tarif en ligne et préparer les pièces justificatives',
        },
        detail: {
          ar: 'استخدم حاسبات الأقساط الرسمية عبر مواقع الشركات العمومية أو الخاصة وأعد نسخا واضحة للبطاقة الرمادية أو عقد العقار.',
          fr: 'Effectuez un devis gratuit sur le site de l’assureur choisi et numérisez la carte grise ou le titre immobilier.',
        },
      },
      {
        title: {
          ar: '3. إبرام العقد وتسديد القسط إلكترونيا أو في الوكالة',
          fr: '3. Souscrire la police et régler la prime par voie sécurisée',
        },
        detail: {
          ar: 'بعد مراجعة بنود العقد وحدود الإعفاء (Franchise)، سدد القسط بالبطاقة الذهبية أو CIB واحتفظ بشهادة التأمين السارية.',
          fr: 'Vérifiez les plafonds de garantie et franchises, réglez la cotisation et conservez votre attestation d’assurance.',
        },
      },
      {
        title: {
          ar: '4. التصريح الفوري بالحادث ومتابعة ملف الخبرة والتعويض',
          fr: '4. Déclarer tout sinistre dans les délais légaux et suivre l’expertise',
        },
        detail: {
          ar: 'أودع ملف الحادث خلال 7 أيام عمل من وقوعه (أو 48 ساعة للسرقة) واحصل على وصل الإيداع لمتابعة موعد الخبير وصرف الصك.',
          fr: 'Déposez le constat sous 7 jours ouvrables (48 h en cas de vol), présentez le bien à l’expert mandaté et suivez le règlement.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض الطرف المتسبب في الحادث التوقيع على المعاينة الودية',
          fr: 'Refus du tiers responsable de signer le constat amiable',
        },
        solution: {
          ar: 'اتصل فورا بمصالح الشرطة أو الدرك الوطني في موقع الحادث لتحرير محضر معاينة رسمي يثبت المسؤولية وتقدمه لوكالتك خلال المهلة القانونية.',
          fr: 'Sollicitez immédiatement l’intervention de la police ou de la gendarmerie pour établir un PV officiel permettant à votre assureur d’exercer le recours.',
        },
      },
      {
        issue: {
          ar: 'تأخر استلام مبلغ التعويض بعد إتمام الخبرة التقنية',
          fr: 'Retard de versement de l’indemnité après remise du rapport d’expertise',
        },
        solution: {
          ar: 'تابع حالة الملف عبر فضاء الزبون للشركة، وفي حال تجاوز الآجال التعاقدية أودع شكوى لدى المديرية الجهوية أو مصالح الوساطة التأمينية بوزارة المالية.',
          fr: 'Vérifiez l’avancement auprès de la direction régionale de votre assureur et saisissez au besoin le service de médiation ou la Direction des Assurances.',
        },
      },
      {
        issue: {
          ar: 'عدم قبول شهادة التأمين الرقمية أو خطأ في رقم الهيكل',
          fr: 'Erreur de numéro de châssis ou d’immatriculation sur l’attestation',
        },
        solution: {
          ar: 'اطلب فورا تحرير ملحق تعديل مجاني (Avenant) في وكالتك قبل وقوع أي حادث لأن الخطأ في البيانات قد يعطل التغطية.',
          fr: 'Demandez immédiatement l’émission d’un avenant rectificatif auprès de votre agence afin d’éviter toute contestation de garantie.',
        },
      },
    ],
    extraFaqs: [],
  },
  'awlyaa-education': {
    intro: {
      ar: [
        'يمثل فضاء أولياء التلاميذ (awlyaa.education.dz) التحول الرقمي الأبرز في قطاع التربية الوطنية بالجزائر، إذ وضع جسرا مباشرا بين الأسرة والمؤسسة التربوية. من خلال حساب واحد وموحد، يستطيع الولي متابعة كشوف النقاط الفصلية لأبنائه في الأطوار الثلاثة، مراقبة الغيابات والتأخرات المسجلة يوميا، تقديم طلبات التحويل المدرسي، وتسجيل التلاميذ الجدد في السنة الأولى ابتدائي عن بعد.',
        'إلى جانب فضاء الأولياء، يشرف الديوان الوطني للامتحانات والمسابقات (ONEC) على البوابات السيادية للتسجيل وسحب الاستدعاءات وإعلان نتائج شهادة التعليم المتوسط (bem.onec.dz) وشهادة البكالوريا (bac.onec.dz)، بالتكامل مع بوابة الدفع الإلكتروني للامتحانات (epay.education.dz) ومنصات التعليم عن بعد (ONEFD) والتوجيه الجامعي (DZ-Orientation).',
        'نلخص لك في هذا الدليل العملي كل ما يحتاجه الولي والتلميذ: طريقة استخراج رقم التعريف المدرسي ذي الـ 16 رقما، خطوات تفعيل الحساب لدى مدير المدرسة لتفادي تعليق الطلب، جدول الدفع الإلكتروني بالبطاقة الذهبية، وحلول مشاكل نسيان كلمة المرور أو تشبع السيرفر يوم إعلان النتائج.'
      ],
      fr: [
        "L’Espace Parents d’Élèves (awlyaa.education.dz) constitue la pierre angulaire de la numérisation au sein du Ministère de l’Éducation Nationale en Algérie. À partir d’un compte familial unique, les parents peuvent consulter les bulletins trimestriels de tous leurs enfants scolarisés, suivre les absences et retards en temps réel, soumettre des demandes de transfert et effectuer les préinscriptions en première année primaire sans dossier papier.",
        "En parallèle, l’Office National des Examens et Concours (ONEC) pilote les portails officiels d’inscription, de retrait des convocations et de proclamation des résultats du BEM (bem.onec.dz) et du Baccalauréat (bac.onec.dz). Ce dispositif est complété par la plateforme de paiement électronique epay.education.dz, les services d’enseignement à distance de l’ONEFD et le portail d’orientation universitaire DZ-Orientation.",
        "Ce guide pas à pas explique comment récupérer le numéro d’identification scolaire à 16 chiffres, activer définitivement votre compte auprès du chef d’établissement, régler les droits d’examen par carte Edahabia et résoudre les blocages fréquents lors des périodes de forte affluence."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'الحصول على رقم التعريف المدرسي المكون من 16 رقما من شهادة التمدرس أو من إدارة المؤسسة التربوية.',
        'بطاقة التعريف الوطنية البيومترية الخاصة بالولي الشرعي ومطابقة الاسم واللقب بالحروف اللاتينية والعربية.',
        'بريد إلكتروني شخصي فعال ورقم هاتف نشط لاستقبال بيانات الحساب وإشعارات المدرسة.',
        'البطاقة الذهبية لبريد الجزائر عند تسديد رسوم تسجيل المترشحين في امتحانات BEM وBAC عبر epay.education.dz.',
      ],
      fr: [
        'Numéro d’identification scolaire à 16 chiffres figurant sur le certificat de scolarité ou fourni par l’école.',
        'Carte Nationale d’Identité Biométrique du parent ou tuteur légal pour validation administrative.',
        'Adresse e-mail personnelle valide et numéro de mobile actif pour la création et récupération du compte.',
        'Carte Edahabia d’Algérie Poste activée pour régler en ligne les frais d’examens nationaux sur epay.education.dz.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. فتح حساب الولي في بوابة awlyaa.education.dz',
          fr: '1. Créer le compte parent sur awlyaa.education.dz',
        },
        detail: {
          ar: 'أدخل بريدك الإلكتروني واختر كلمة مرور، ثم سجل بياناتك المدنية والمهنية وأضف أبناءك المتمدرسين باستخدام أرقامهم المدرسية.',
          fr: 'Renseignez votre e-mail, complétez vos informations d’état civil et rattachez chaque enfant via son identifiant à 16 chiffres.',
        },
      },
      {
        title: {
          ar: '2. طباعة استمارة التسجيل والمصادقة عليها في المدرسة',
          fr: '2. Imprimer le formulaire et le faire valider par le directeur',
        },
        detail: {
          ar: 'اطبع الاستمارة التي تنشئها المنصة وأودعها مع نسخة من بطاقة التعريف لدى مدير المؤسسة ليقوم بتفعيل الحساب في النظام.',
          fr: 'Téléchargez le formulaire PDF généré et remettez-le avec votre CNIBE au chef d’établissement pour activer l’accès aux notes.',
        },
      },
      {
        title: {
          ar: '3. التسجيل في الامتحانات الرسمية والدفع عبر epay.education.dz',
          fr: '3. S’inscrire aux examens BEM/BAC et payer en ligne',
        },
        detail: {
          ar: 'عند فتح دورة ONEC، أكد استمارة الترشح في bac.onec.dz أو bem.onec.dz ثم سدد الحقوق إلكترونيا واطبع وصل الدفع.',
          fr: 'Pendant la fenêtre ONEC, validez l’inscription sur bac.onec.dz ou bem.onec.dz puis réglez les droits sur epay.education.dz.',
        },
      },
      {
        title: {
          ar: '4. متابعة كشوف النقاط وسحب الاستدعاءات والنتائج',
          fr: '4. Télécharger bulletins, convocations et résultats officiels',
        },
        detail: {
          ar: 'ادخل دوريا إلى فضاء الأولياء لتحميل كشف النقاط الفصلي، واستعمل موقعي ONEC في المواعيد المعلنة لسحب الاستدعاء والنتائج.',
          fr: 'Consultez les bulletins trimestriels sur Awlyaa et utilisez les portails ONEC aux dates officielles pour les convocations et résultats.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'ظهور رسالة "رقم التعريف المدرسي غير موجود" أو خطأ في ربط الابن',
          fr: 'Message « Numéro d’identification scolaire introuvable » ou erreur de rattachement',
        },
        solution: {
          ar: 'تأكد من نقل الأرقام الـ 16 بدقة دون مسافات، وراجع أمانة المؤسسة التربوية للتأكد من إدراج التلميذ وتحيين لقبه في الرقمنة المدرسية.',
          fr: 'Vérifiez l’absence d’espaces dans les 16 chiffres et demandez au secrétariat de l’école de contrôler l’enregistrement du dossier dans le système numérique.',
        },
      },
      {
        issue: {
          ar: 'تعذر تحميل كشف النقاط رغم تسجيل الدخول بنجاح في فضاء الأولياء',
          fr: 'Impossibilité d’afficher le bulletin malgré une connexion réussie',
        },
        solution: {
          ar: 'يظهر كشف النقاط فقط بعد تأشير مدير المؤسسة على غلق الفصل الدراسي إلكترونيا؛ انتظر استكمال عملية الحجز أو تأكد من تفعيل الابن في حسابك.',
          fr: 'Les bulletins ne deviennent téléchargeables qu’après la clôture officielle du trimestre par l’administration scolaire.',
        },
      },
      {
        issue: {
          ar: 'ثقل الموقع أو عدم تحميل الصفحة يوم إعلان نتائج البكالوريا والبيام',
          fr: 'Saturation des serveurs ONEC le jour de publication des résultats',
        },
        solution: {
          ar: 'استعمل متصفحا خفيفا وتجنب تكرار تحديث الصفحة في الثانية الواحدة، كما توفر وزارة التربية خدمة الاستعلام المجاني عبر الرسائل النصية القصيرة SMS.',
          fr: 'Évitez de rafraîchir frénétiquement la page ; privilégiez l’accès en dehors des premières minutes de pic ou le service officiel de résultats par SMS.',
        },
      },
    ],
    extraFaqs: [],
  },
  bank: {
    intro: {
      ar: [
        'يشهد القطاع المصرفي في الجزائر تحولا عمليا نحو تعميم الشمول المالي وتحديث خدمات الصيرفة الرقمية تحت إشراف بنك الجزائر ووزارة المالية. يتوزع المشهد البنكي الوطني بين البنوك العمومية الكبرى (مثل BNA وBEA وCPA وBDL وBADR وCNEP-Banque)، والمصارف الخاصة الدولية، والمصارف والنوافذ الإسلامية المتخصصة التي توفر حلول تمويل متوافقة مع أحكام الشريعة.',
        'أصبح بإمكان الزبون الجزائري اليوم الاستفادة من خدمات E-Banking وتطبيقات البنوك لمتابعة الرصيد، إجراء التحويلات ما بين الحسابات، طلب دفاتر الصكوك وبطاقات CIB، وتسديد الفواتير والاشتراكات إلكترونيا عبر منظومة الدفع المشتركة التي يديرها تجمع النقد الآلي GIE Monétique وشركة SATIM.',
        'يمنحك هذا الدليل نظرة شاملة على الهيئات الناظمة للقطاع المصرفي، خطوات فتح الحساب البنكي للأفراد والمقاولين الذاتيين والشركات، شروط تفعيل الدفع الإلكتروني عبر الإنترنت، والحلول الميدانية لمشكلات تجميد البطاقات أو استرجاع التحويلات.'
      ],
      fr: [
        "Le secteur bancaire algérien connaît une modernisation rapide axée sur l’inclusion financière, l’interopérabilité monétique et le développement des services numériques, sous la supervision de la Banque d’Algérie et du Ministère des Finances. Il regroupe les grandes banques publiques commerciales (BNA, BEA, CPA, BDL, BADR, CNEP), les banques privées à capitaux mixtes ou internationaux ainsi que les établissements et guichets dédiés à la finance islamique.",
        "Les usagers particuliers, commerçants et entreprises accèdent aujourd’hui à des plateformes d’E-Banking et applications mobiles permettant de consulter les soldes, d’initier des virements, de commander des chéquiers ou cartes CIB et d’effectuer des paiements en ligne sécurisés sur le réseau interbancaire géré par la SATIM et le GIE Monétique.",
        "Ce guide de synthèse vous éclaire sur les institutions de régulation bancaire, les pièces requises pour ouvrir un compte en dinars ou en devises, l’activation du e-paiement CIB et les démarches recommandées en cas d’incident de carte ou de virement."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بطاقة التعريف الوطنية البيومترية أو جواز السفر ساري المفعول مع شهادة إقامة محدثة لا تتجاوز ثلاثة أشهر.',
        'شهادة عمل أو كشف راتب للموظفين، أو السجل التجاري وبطاقة المقاول الذاتي للحسابات المهنية.',
        'رقم هاتف شخصي مسجل باسم الزبون لاستلام رموز الأمان OTP الخاصة بالدفع عبر الإنترنت وتطبيقات E-Banking.',
        'مبلغ الإيداع الأولي الرمزي (حسب شروط كل بنك) لتفعيل الحساب البنكي بالعملة الوطنية أو الصعبة.',
      ],
      fr: [
        'Carte Nationale d’Identité Biométrique (ou passeport valide) et certificat de résidence datant de moins de 3 mois.',
        'Attestation de travail/fiche de paie (particulier) ou registre de commerce/carte ANAE et NIF (compte professionnel).',
        'Numéro de mobile personnel pour recevoir les codes dynamiques OTP de validation e-banking et e-paiement.',
        'Versement initial d’ouverture conforme aux conditions tarifaires de l’établissement choisi.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار البنك ونوع الحساب المناسب لنشاطك',
          fr: '1. Choisir l’établissement bancaire et la formule de compte',
        },
        detail: {
          ar: 'قارن بين خدمات البنوك العمومية والخاصة والإسلامية في دليلنا البنكي وحدد الحساب المطلوب (جاري، توفير، عملة صعبة، أو تجاري).',
          fr: 'Comparez les frais et services e-banking dans notre annuaire des 18 banques et sélectionnez le type de compte adapté.',
        },
      },
      {
        title: {
          ar: '2. التقدم للوكالة البنكية وإيداع ملف فتح الحساب',
          fr: '2. Déposer le dossier d’ouverture en agence bancaire',
        },
        detail: {
          ar: 'قدم وثائق الهوية والإقامة وإثبات النشاط لدى مصلحة الزبائن، مع توقيع نموذج التوقيع واستلام رقم الحساب الكامل RIB.',
          fr: 'Remettez vos justificatifs au chargé de clientèle, signez le carton de spécimen de signature et récupérez votre RIB.',
        },
      },
      {
        title: {
          ar: '3. طلب بطاقة CIB وتفعيل خدمة E-Banking',
          fr: '3. Commander la carte CIB et activer l’E-Banking',
        },
        detail: {
          ar: 'اطلب إصدار بطاقة CIB المحلية وتفعيل الولوج للخدمات المصرفية عبر الإنترنت وخدمة OTP عبر الرسائل النصية.',
          fr: 'Sollicitez la délivrance de votre carte interbancaire CIB ainsi que l’abonnement au portail E-Banking et aux alertes SMS.',
        },
      },
      {
        title: {
          ar: '4. تفعيل الدفع الإلكتروني وإجراء المعاملات الآمنة',
          fr: '4. Activer le paiement en ligne et gérer vos opérations',
        },
        detail: {
          ar: 'استخدم رابط التفعيل الخاص ببنكك لتعيين كلمة سر الدفع عبر الإنترنت، وتحقق من السقوف اليومية قبل تسديد الفواتير أو التذاكر.',
          fr: 'Activez le mot de passe e-paiement sur le portail dédié de votre banque et vérifiez vos plafonds de retrait et d’achat.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض الدفع ببطاقة CIB على المواقع الجزائرية رغم توفر الرصيد',
          fr: 'Échec de paiement en ligne CIB malgré un solde suffisant',
        },
        solution: {
          ar: 'تأكد من تفعيل خدمة الدفع عبر الإنترنت لدى وكالتك ومن ربط رقم هاتفك الصحيح لاستقبال رمز التحقق SMS OTP دون حظر من الهاتف.',
          fr: 'Vérifiez que l’option e-paiement est bien activée sur votre carte auprès de l’agence et que votre numéro SMS OTP est à jour.',
        },
      },
      {
        issue: {
          ar: 'احتجاز بطاقة CIB داخل الموزع الآلي GAB أو سرقتها',
          fr: 'Capture de la carte CIB par un DAB ou perte/vol',
        },
        solution: {
          ar: 'قم بتجميد البطاقة فورا عبر تطبيق البنك أو رقم الطوارئ الخاص بالوكالة أو SATIM، ثم قدم طلب استرجاع أو إعادة إصدار.',
          fr: 'Faites opposition immédiatement via votre application bancaire ou la ligne d’urgence du réseau pour bloquer la carte sans délai.',
        },
      },
      {
        issue: {
          ar: 'تأخر وصول تحويل مالي بين بنكين مختلفين',
          fr: 'Délai inhabituel sur un virement interbancaire',
        },
        solution: {
          ar: 'تأكد من صحة الأرقام العشرين للـ RIB، وراجع وصل التحويل مع وكالتك لمتابعة التسوية عبر نظام المقاصة الإلكتروني للبنك المركزي.',
          fr: 'Contrôlez l’exactitude du RIB à 20 chiffres sur le bordereau et demandez à votre agence un suivi de compensation interbancaire.',
        },
      },
    ],
    extraFaqs: [],
  },
  'campuce.jobs': {
    intro: {
      ar: [
        'جاءت منصة Campuce Jobs (jobs.student-campuce.dz) لتسد فجوة حقيقية في سوق العمل الطلابي بالجزائر، عبر ربط الطلبة الجامعيين وحاملي الشهادات مباشرة بالمؤسسات الاقتصادية والشركات الناشئة الباحثة عن كفاءات شابة. توفر المنصة عروض عمل بدوام جزئي تتناسب مع التوقيت البيداغوجي للدراسة، إلى جانب فرص التربص التطبيقي والمهام الميدانية أو عن بعد.',
        'تتميز البوابة ببنية رقمية مبسطة تقوم على إنشاء ملف تعريفي جامعي موحد يحمل السيرة الذاتية، المهارات التقنية، واللغات المتقنة، مما يتيح للطالب التقدم لعشرات الفرص بنقرات معدودة وتتبع حالة ترشحه لدى الشركات الشريكة بشفافية تامة.',
        'يوضح هذا الدليل كيفية بناء ملف احترافي جذاب على منصة Campuce Jobs، المستندات والمهارات التي ترفع فرص القبول، طريقة التوفيق القانوني مع بطاقة المقاول الذاتي عند العمل على مهام مستقلة، وأبرز النصائح لتجنب الأخطاء الشائعة في الترشح.'
      ],
      fr: [
        "La plateforme Campuce Jobs (jobs.student-campuce.dz) répond au besoin concret d’insertion professionnelle précoce des étudiants algériens en les mettant directement en relation avec des entreprises, PME et startups partenaires. Elle centralise des offres d’emplois à temps partiel compatibles avec l’emploi du temps universitaire, des stages pratiques diplômants ainsi que des missions flexibles ou en télétravail.",
        "Son fonctionnement repose sur un profil candidat unifié regroupant parcours universitaire, compétences techniques, langues maîtrisées et CV téléversé, permettant de postuler rapidement en quelques clics et de suivre les retours des recruteurs depuis un tableau de bord dédié.",
        "Ce guide vous accompagne dans la création d’un dossier étudiant convaincant sur Campuce Jobs, la préparation des pièces utiles, l’articulation possible avec le statut d’auto-entrepreneur ANAE et les bonnes pratiques pour réussir vos premiers entretiens."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'أن يكون المترشح طالبا جامعيا مسجلا أو خريجا حديثا يبحث عن فرصة تربص أو عمل بدوام جزئي.',
        'بريد إلكتروني مهني باسم حقيقي ورقم هاتف نشط لتلقي إشعارات القبول ومواعيد المقابلات.',
        'ملف سيرة ذاتية محدث بصيغة PDF خال من الأخطاء الإملائية ويبرز المشاريع الجامعية والمهارات العملية.',
        'بطاقة التعريف الوطنية وشهادة التمدرس أو الدبلوم في حال طلبت الشركة المصادقة على اتفاقية التربص.',
      ],
      fr: [
        'Être étudiant inscrit dans un établissement d’enseignement supérieur ou jeune diplômé en recherche d’expérience.',
        'Disposer d’une adresse e-mail professionnelle et d’un numéro de téléphone joignable pour les entretiens.',
        'Préparer un CV actualisé au format PDF mettant en valeur projets académiques, outils maîtrisés et disponibilités.',
        'Carte d’identité et certificat de scolarité si l’employeur exige une convention de stage universitaire.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. إنشاء الحساب وتأكيد البريد الإلكتروني',
          fr: '1. Créer un compte candidat et confirmer votre e-mail',
        },
        detail: {
          ar: 'انتقل إلى jobs.student-campuce.dz/auth/login، سجل حسابا جديدا ببريدك الشخصي واضغط على رابط التفعيل المرسل لبريدك.',
          fr: 'Accédez à jobs.student-campuce.dz/auth/login, inscrivez-vous avec votre adresse e-mail et validez le lien reçu.',
        },
      },
      {
        title: {
          ar: '2. إكمال الملف الشخصي الجامعي ورفع السيرة الذاتية',
          fr: '2. Compléter le profil académique et importer votre CV',
        },
        detail: {
          ar: 'حدد جامعتك، التخصص، مستوى التكوين، وأرفق سيرتك الذاتية بصيغة PDF مع كتابة نبذة مركزة عن أهدافك المهنية.',
          fr: 'Indiquez votre université, filière et niveau, puis téléversez votre CV PDF accompagné d’une courte présentation.',
        },
      },
      {
        title: {
          ar: '3. تصفية عروض العمل والشركات الشريكة',
          fr: '3. Filtrer les offres d’emploi et entreprises partenaires',
        },
        detail: {
          ar: 'تصفح صفحة job-offers وصفحة companies واختر العروض المطابقة لولايتك أو المهام المتاحة عن بعد وتوقيت فراغك.',
          fr: 'Parcourez les rubriques job-offers et companies pour cibler les missions adaptées à votre wilaya et votre emploi du temps.',
        },
      },
      {
        title: {
          ar: '4. تقديم الترشح والاستعداد لمقابلة العمل',
          fr: '4. Postuler en un clic et préparer l’entretien',
        },
        detail: {
          ar: 'أرسل طلبك مرفوقا برسالة تحفيز قصيرة مخصصة لكل عرض، وتابع بريدك الإلكتروني لتأكيد موعد المقابلة التقنية.',
          fr: 'Soumettez votre candidature avec un message adapté au poste visé et surveillez vos notifications de convocation.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم وصول رسالة تفعيل الحساب إلى البريد الإلكتروني',
          fr: 'Non-réception du courriel d’activation lors de l’inscription',
        },
        solution: {
          ar: 'تفقد مجلد الرسائل غير المرغوب فيها (Spam/Promotions)، وتأكد من كتابة البريد الإلكتروني دون أخطاء قبل طلب إعادة الإرسال.',
          fr: 'Vérifiez le dossier Courrier indésirable (Spam) et assurez-vous qu’il n’y a aucune faute de frappe dans l’adresse saisie.',
        },
      },
      {
        issue: {
          ar: 'تعذر رفع ملف السيرة الذاتية على المنصة',
          fr: 'Erreur lors du téléversement du fichier CV',
        },
        solution: {
          ar: 'تأكد من حفظ السيرة الذاتية بصيغة PDF وبحجم أقل من 2 ميغابايت مع استخدام اسم ملف باللاتينية دون رموز خاصة.',
          fr: 'Convertissez le document en PDF léger (moins de 2 Mo) et nommez le fichier simplement sans accents ni symboles.',
        },
      },
      {
        issue: {
          ar: 'عدم تلقي ردود من الشركات بعد عدة ترشحات',
          fr: 'Absence de réponse des recruteurs après plusieurs candidatures',
        },
        solution: {
          ar: 'احرص على تخصيص سيرتك الذاتية لتتوافق مع كلمات العرض المفتاحية، وأرفق رابط أعمالك أو مشاريعك الطلابية مع تحديد ساعات التفرغ بوضوح.',
          fr: 'Adaptez votre profil aux mots-clés de l’annonce, ajoutez un lien vers vos réalisations/portfolio et précisez clairement vos disponibilités.',
        },
      },
    ],
    extraFaqs: [],
  },
  casnos: {
    intro: {
      ar: [
        'يضطلع الصندوق الوطني للضمان الاجتماعي لغير الأجراء (CASNOS) بدور حيوي في توفير الحماية الاجتماعية والتغطية الصحية ومعاش التقاعد لكافة المهنيين الأحرار، التجار، الحرفيين، الفلاحين، المسيرين، والمقاولين الذاتيين في الجزائر. بفضل إطلاق المنظومة الرقمية ضمانكم (damancom.casnos.dz)، أصبح بإمكان المنتسبين إنجاز معاملاتهم دون الانتظار في الطوابير.',
        'تغطي البوابة الإلكترونية لـ CASNOS دورة الاشتراك كاملة: من طلب الانتساب الأولي عن بعد والانتساب الفلاحي عبر منصة حمايتي، وصولا إلى محاكاة مبلغ التقاعد، التصريح السنوي بالدخل، تسديد الاشتراكات بالبطاقة الذهبية أو بطاقة CIB، واستخراج شهادات الانتساب أو أداء المستحقات وشهادات عدم الانتساب المزودة برمز الاستجابة السريعة QR.',
        'يقدم هذا الدليل المواطني تفاصيل النسب القانونية وآجال السداد قبل 30 جوان، الوثائق الواجب تجهيزها لكل فئة مهنية، الخطوات الواضحة لاستعمال بوابة ضمانكم، وحلول المشكلات المتعلقة بتأخر التحيين أو تجميد بطاقة الشفاء.'
      ],
      fr: [
        "La Caisse Nationale de Sécurité Sociale des Non-Salariés (CASNOS) assure la couverture maladie, les prestations familiales liées à la carte Chifa et la retraite de tous les travailleurs indépendants en Algérie : commerçants, artisans, professions libérales, gérants de sociétés, agriculteurs et auto-entrepreneurs. Son portail Damancom (damancom.casnos.dz) permet de gérer l’essentiel des formalités en ligne.",
        "L’écosystème numérique CASNOS couvre l’affiliation initiale à distance, l’espace spécifique agricole Himayati, la simulation de cotisation retraite, la télédéclaration annuelle d’assiette, le télépaiement par carte Edahabia ou CIB ainsi que le téléchargement instantané d’attestations officielles sécurisées par QR code (affiliation, mise à jour et non-affiliation).",
        "Vous trouverez dans cette fiche les délais réglementaires (échéance annuelle du 30 juin), les justificatifs exigés selon votre statut professionnel, le guide d’utilisation pas à pas de Damancom et les solutions pratiques aux incidents courants."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'وثيقة إثبات النشاط المهني غير الأجير: سجل تجاري، بطاقة حرفي، بطاقة فلاح، اعتماد مهني، أو بطاقة المقاول الذاتي.',
        'بطاقة التعريف الوطنية البيومترية المتضمنة لرقم التعريف الوطني NIN وشهادة الإقامة.',
        'التصريح الجبائي السنوي (C20 أو G12) لتحديد الوعاء السنوي لاشتراك الصندوق بدقة.',
        'بطاقة الذهبية أو CIB لتسديد الاشتراك السنوي أو الأقساط المجدولة إلكترونيا عبر ضمانكم.',
      ],
      fr: [
        'Justificatif d’activité non salariée : registre de commerce, carte d’artisan, carte fellah, agrément ou carte ANAE.',
        'Carte Nationale d’Identité Biométrique avec NIN à 18 chiffres et justificatif de résidence.',
        'Déclaration fiscale annuelle (G12 ou C20) servant au calcul de la cotisation annuelle.',
        'Carte Edahabia ou CIB activée pour le télépaiement sécurisé sur le portail Damancom.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. طلب الانتساب الأولي عبر damancom.casnos.dz/affiliation',
          fr: '1. Déposer une demande d’affiliation en ligne sur Damancom',
        },
        detail: {
          ar: 'بالنسبة للمنخرطين الجدد، أدخل معلوماتك الشخصية ورقم السجل أو البطاقة المهنية وأرفق الوثائق الممسوحة ضوئيا لتحديد موعد التوجيه أو التفعيل.',
          fr: 'Saisissez vos données d’identité et votre document professionnel sur l’espace affiliation pour recevoir votre numéro d’assuré.',
        },
      },
      {
        title: {
          ar: '2. تقدير الاشتراك ومعرفة حقوق التقاعد عبر المحاكي',
          fr: '2. Simuler la cotisation annuelle et la pension future',
        },
        detail: {
          ar: 'استخدم أداة المحاكاة (simulation) لحساب قيمة الاشتراك المطلوب وفق دخلك السنوي وعدد سنوات التغطية.',
          fr: 'Utilisez le simulateur officiel CASNOS afin d’estimer le montant exact de votre cotisation avant de procéder au paiement.',
        },
      },
      {
        title: {
          ar: '3. التصريح والدفع الإلكتروني قبل تاريخ 30 جوان',
          fr: '3. Télédéclarer et régler les cotisations avant le 30 juin',
        },
        detail: {
          ar: 'سجل الدخول إلى فضاء المؤمن، تحقق من كشف الاشتراك السنوي المستحق، ثم أتمم السداد عبر البطاقة الذهبية أو CIB.',
          fr: 'Connectez-vous à votre espace assuré Damancom, validez votre déclaration et effectuez le télépaiement sans pénalité avant le 30 juin.',
        },
      },
      {
        title: {
          ar: '4. تحميل الشهادات المرقمنة أو تقديم شكوى إلكترونية',
          fr: '4. Télécharger vos attestations ou déposer une doléance',
        },
        detail: {
          ar: 'استخرج فورا شهادة الانتساب وأداء المستحقات بصيغة PDF، أو استعمل منصة الشكاوى (doleances) لمعالجة أي خطأ في الرصيد.',
          fr: 'Éditez vos attestations PDF avec QR code en un clic, ou utilisez la rubrique doléances pour toute régularisation.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم ظهور التحيين في بطاقة الشفاء بعد الدفع الإلكتروني للاشتراك',
          fr: 'Carte Chifa non actualisée après paiement en ligne sur Damancom',
        },
        solution: {
          ar: 'انتظر 24 ساعة لمعالجة التحويل المالي ثم اطلب من الصيدلي تمرير البطاقة في قارئ الشفاء المربوط بالشبكة؛ وفي حال استمرار الإشكال تواصل عبر بوابة الشكاوى.',
          fr: 'Patientez 24 h pour la synchronisation financière puis demandez une mise à jour en pharmacie conventionnée ou signalez l’anomalie sur damancom.casnos.dz/doleances.',
        },
      },
      {
        issue: {
          ar: 'تراكم اشتراكات سنوات سابقة بعد توقف النشاط التجاري',
          fr: 'Accumulation de cotisations après cessation d’activité non déclarée',
        },
        solution: {
          ar: 'يجب إيداع شهادة شطب السجل التجاري أو شهادة التوقف عن النشاط لدى الوكالة الولائية لـ CASNOS لوقف احتساب الاشتراكات وطلب تسوية الوضعية.',
          fr: 'Déposez impérativement l’extrait de radiation du registre de commerce ou l’attestation de cessation d’activité fiscale à votre agence CASNOS.',
        },
      },
      {
        issue: {
          ar: 'رسالة خطأ عند استخراج شهادة عدم الانتساب للمتزوجين أو ذوي الحقوق',
          fr: 'Blocage lors de la demande d’attestation de non-affiliation',
        },
        solution: {
          ar: 'تحقق من إدخال الاسم واللقب بالحروف اللاتينية المطابقة تماما لشهادة الميلاد، أو راجع وجود تسجيل قديم باسمك غير مشطوب في قاعدة البيانات.',
          fr: 'Vérifiez l’orthographe exacte de votre état civil ; si un ancien dossier dormant subsiste, demandez sa clôture à l’agence locale.',
        },
      },
    ],
    extraFaqs: [],
  },
  cnas: {
    intro: {
      ar: [
        'يعد الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء (CNAS) المؤسسة المرجعية للتغطية الصحية والتأمين ضد حوادث العمل والأمراض المهنية لفائدة الموظفين والعمال الأجراء والمتقاعدين والطلبة وذوي الحقوق في الجزائر. ومن خلال البوابة الوطنية فضاء الهناء (elhanaa.cnas.dz) وتطبيق الهاتف الرسمي، نجح الصندوق في تقريب الخدمات الطبية والإدارية من المواطن دون عناء التنقل إلى مراكز الدفع.',
        'يتيح فضاء الهناء للمؤمن لهم اجتماعيا استخراج شهادة الانتساب الإلكترونية وشهادة عدم الانتساب في ثوان معدودة، تتبع تعويضات الوصفات الطبية والأدوية المصروفة عبر بطاقة الشفاء، مراجعة قائمة ذوي الحقوق (الزوجة والأبناء)، والتحقق من تصريحات صاحب العمل. بالتوازي، تتيح بوابة التصريح عن بعد (teledeclaration.cnas.dz) للمؤسسات وأرباب العمل إيداع الكشوف الشهرية والفصلية والسنوية (DAS) وتسديد الاشتراكات إلكترونيا.',
        'يجمع هذا الدليل الشامل جميع الخطوات المطلوبة لتفعيل حسابك في الهناء، الوثائق الضرورية لإصدار بطاقة الشفاء أو تعويض العطل المرضية، إجراءات استخراج الشهادات والتحقق من صحتها، وحلول الأعطال التقنية الشائعة.'
      ],
      fr: [
        "La Caisse Nationale des Assurances Sociales des Travailleurs Salariés (CNAS) garantit l’assurance maladie, la maternité, les indemnités journalières et la couverture des accidents du travail pour l’ensemble des salariés, fonctionnaires, étudiants et retraités en Algérie. Grâce à l’espace numérique El Hanaa (elhanaa.cnas.dz) et son application mobile dédiée, les démarches essentielles sont accessibles à distance 24 heures sur 24.",
        "Depuis El Hanaa, chaque assuré peut télécharger son attestation d’affiliation ou de non-affiliation sécurisée par QR code, suivre ses remboursements médicaux et sa consommation pharmaceutique sur carte Chifa, vérifier l’inscription de ses ayants droit et contrôler les déclarations périodiques de son employeur. De leur côté, les entreprises gèrent leurs déclarations trimestrielles, annuelles (DAS) et paiements sur teledeclaration.cnas.dz.",
        "Ce guide pratique détaille les prérequis pour ouvrir votre accès El Hanaa, le dossier exact pour obtenir la carte Chifa, la procédure de déclaration des arrêts maladie et les réponses aux blocages fréquents."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'رقم الضمان الاجتماعي (12 رقما) المسلم في بطاقة الشفاء أو من طرف المستخدم.',
        'بطاقة التعريف الوطنية البيومترية وتاريخ الميلاد بالصيغة المطابقة لسجل الحالة المدنية.',
        'رقم هاتف نقال شخصي مفعل ومرتبط بمركز الدفع لاستلام رمز التفعيل في فضاء الهناء.',
        'شهادة عمل، صورة شمسية بخلفية بيضاء، وبطاقة فصيلة الدم عند تقديم طلب بطاقة الشفاء لأول مرة.',
      ],
      fr: [
        'Numéro d’assurance sociale CNAS à 12 chiffres figurant sur la carte Chifa ou le bulletin de paie.',
        'Carte Nationale d’Identité Biométrique et date de naissance conforme au registre d’état civil.',
        'Numéro de téléphone portable personnel enregistré auprès du centre de paiement CNAS pour l’OTP.',
        'Attestation de travail, photo fond blanc et carte de groupage sanguin pour la première carte Chifa.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. التسجيل في فضاء الهناء عبر elhanaa.cnas.dz/inscription.xhtml',
          fr: '1. Créer votre compte sur elhanaa.cnas.dz/inscription.xhtml',
        },
        detail: {
          ar: 'أدخل رقم الضمان الاجتماعي، الاسم واللقب باللاتينية، البريد الإلكتروني، ورقم الهاتف لتفعيل حسابك الشخصي.',
          fr: 'Saisissez votre numéro de sécurité sociale, votre identité exacte, votre e-mail et votre numéro mobile pour activer l’accès.',
        },
      },
      {
        title: {
          ar: '2. تحميل شهادة الانتساب أو شهادة عدم الانتساب فورا',
          fr: '2. Télécharger vos attestations d’affiliation ou de non-affiliation',
        },
        detail: {
          ar: 'من لوحة التحكم، اختر الوثيقة المطلوبة لتحميل ملف PDF مزود برمز QR قابل للتحقق الإداري عبر بوابة CNAS.',
          fr: 'Depuis votre tableau de bord, éditez instantanément votre attestation PDF munie d’un code QR vérifiable en ligne.',
        },
      },
      {
        title: {
          ar: '3. مراقبة بطاقة الشفاء والتعويضات الطبية وذوي الحقوق',
          fr: '3. Suivre votre carte Chifa, vos ayants droit et remboursements',
        },
        detail: {
          ar: 'راجع حالة صلاحية التغطية الصحية، سقف استهلاك الأدوية، وسجل الزيارات الطبية دون الحاجة للاستفسار في الشباك.',
          fr: 'Contrôlez la validité de votre couverture, le suivi des vignettes pharmaceutiques et la liste des personnes à charge.',
        },
      },
      {
        title: {
          ar: '4. تسيير تصريحات أرباب العمل عبر teledeclaration.cnas.dz',
          fr: '4. Déclarer les cotisations employeurs sur teledeclaration.cnas.dz',
        },
        detail: {
          ar: 'يقوم المستخدم برفع قوائم الأجراء ودفع الاشتراكات عن بعد، والتحقق من شهادة أداء المستحقات عبر checkMAJ.jsp.',
          fr: 'Les entreprises déposent les déclarations DAC/DAS en ligne et contrôlent la validité des attestations de mise à jour.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رفض التسجيل في فضاء الهناء بسبب عدم تطابق رقم الهاتف المسجل',
          fr: 'Impossible de finaliser l’inscription El Hanaa à cause du numéro de mobile',
        },
        solution: {
          ar: 'توجه مرة واحدة إلى مركز الدفع CNAS التابع لإقامتك مرفوقا ببطاقة التعريف وبطاقة الشفاء لتسجيل أو تعديل رقم هاتفك في النظام المركزي.',
          fr: 'Présentez-vous une fois à votre centre payeur CNAS avec votre CNIBE pour enregistrer ou actualiser votre numéro de téléphone dans la base.',
        },
      },
      {
        issue: {
          ar: 'توقف بطاقة الشفاء عند الصيدلي رغم استمرار علاقة العمل',
          fr: 'Carte Chifa bloquée en pharmacie alors que le salarié est en poste',
        },
        solution: {
          ar: 'تحقق عبر فضاء الهناء من تاريخ آخر تصريح لرب العمل؛ واطلب من مصلحة المستخدمين استكمال التصريح الفصلي في بوابة التصريح عن بعد.',
          fr: 'Vérifiez sur El Hanaa la date de dernière déclaration de votre employeur et sollicitez le service RH pour la mise à jour DAC.',
        },
      },
      {
        issue: {
          ar: 'رفض تعويض شهادة العطلة المرضية بسبب التأخر',
          fr: 'Rejet d’un arrêt de travail pour dépôt hors délai',
        },
        solution: {
          ar: 'ينص القانون على إيداع شهادة التوقف عن العمل خلال 48 ساعة من تحريرها؛ احرص على إيداعها أو إرسالها في الأجل القانوني عبر الوكالة.',
          fr: 'Tout arrêt maladie doit impérativement être déposé au centre CNAS dans un délai maximal de 48 heures ouvrables.',
        },
      },
    ],
    extraFaqs: [],
  },
  cnr: {
    intro: {
      ar: [
        'يتكفل الصندوق الوطني للتقاعد (CNR) بتسيير معاشات ومنح التقاعد لفائدة ملايين المتقاعدين وذوي الحقوق في الجزائر، وقد نجح في بناء إحدى أكثر المنظومات الرقمية تكاملا على المستوى الوطني. بفضل بوابة المتقاعد (retraite.cnr.dz) وتطبيق الهاتف الرسمي RetraiteDz، بات المتقاعد قادرا على متابعة كشف معاشه، استخراج شهادات الدخل وعدم تقاضي المنحة المرقمنة، وإتمام التجديد السنوي عن بعد عبر التعرف البيومتري على الوجه (R-Face) دون مغادرة منزله.',
        'ولا تقتصر المنصة الرقمية لـ CNR على المتقاعدين فحسب، بل توفر خدمات دقيقة مخصصة لكل فئة: خدمة الحساب الفردي للأجير (cis.cnr.dz) لمراقبة سنوات العمل المصرح بها قبل بلوغ سن التقاعد، منصة حساب يوم صب المعاش في البريد (calccp.cnr.dz)، بوابة متابعة ملف التقاعد قيد الدراسة (suivi.cnr.dz)، منصة التقاعد المنقول لذوي الحقوق (mankoul.cnr.dz)، وحاسبة تثمين المعاشات (reval.cnr.dz)، بالإضافة إلى فضاء صاحب العمل لإرسال الملفات إلكترونيا.',
        'يرشدك هذا الدليل إلى كل رابط رسمي موثوق ضمن منظومة CNR، شروط وملفات التقاعد المباشر والمنقول، خطوات التجديد السنوي عن بعد في شهر الميلاد، وأساليب معالجة تأخر تسوية الملفات أو انقطاع المعاش المؤقت.'
      ],
      fr: [
        "La Caisse Nationale des Retraites (CNR) gère l’ensemble des pensions de retraite directe et de réversion des travailleurs salariés en Algérie à travers un écosystème numérique particulièrement complet. Via le portail Espace Retraité (retraite.cnr.dz) et l’application mobile RetraiteDz, les pensionnés peuvent consulter leurs bulletins mensuels, éditer leurs attestations sécurisées par QR code et effectuer le renouvellement annuel des justificatifs à distance grâce à la reconnaissance faciale (R-Face).",
        "L’offre digitale de la CNR accompagne également les actifs et ayants droit à chaque étape : vérification préalable de carrière via le Compte Individuel du Salarié (cis.cnr.dz), calendrier exact de virement CCP (calccp.cnr.dz), suivi de traitement des dossiers (suivi.cnr.dz), gestion des pensions de réversion (mankoul.cnr.dz), calculateur de revalorisation annuelle (reval.cnr.dz) et espace employeur dématérialisé.",
        "Ce guide complet détaille les conditions légales de liquidation de retraite, les pièces exigées pour les pensions directes et de réversion, le mode d’emploi de l’application mobile et la résolution des blocages courants."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'رقم تسجيل المعاش لدى CNR أو رقم الضمان الاجتماعي (12 رقما) عند استخدام فضاء العامل الأجير CIS.',
        'بطاقة التعريف الوطنية البيومترية وتثبيت تطبيق RetraiteDz لإجراء التحقق البيومتري السنوي عن بعد.',
        'ملف المسار المهني الكامل (شهادات العمل، كشوف الأجور المرجعية، وصك مشطوب CCP أو بنكي) قبل التقدم للتقاعد.',
        'شهادة الوفاة، الشهادة العائلية، والوثائق الثبوتية لعدم الزواج أو التمدرس عند إيداع ملف التقاعد المنقول.',
      ],
      fr: [
        'Numéro de pension CNR (ou numéro de sécurité sociale pour accéder au compte CIS).',
        'CNIBE et smartphone équipé de l’application RetraiteDz pour le renouvellement facial annuel.',
        'Dossier de carrière complet (attestations de travail, relevés de salaires, chèque barré) avant liquidation.',
        'Acte de décès et pièces familiales justificatives pour toute demande de pension de réversion.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. مراقبة سنوات العمل مبكرا في منصة CIS (للأجراء)',
          fr: '1. Vérifier votre carrière sur cis.cnr.dz avant la retraite',
        },
        detail: {
          ar: 'أدخل رقم الضمان الاجتماعي في cis.cnr.dz قبل التقاعد للتأكد من احتساب كل سنوات الاشتراك وتصحيح أي نقص إداري.',
          fr: 'Consultez régulièrement cis.cnr.dz afin de contrôler l’exhaustivité de vos trimestres déclarés avant de déposer votre dossier.',
        },
      },
      {
        title: {
          ar: '2. تتبع دراسة الملف ومعرفة يوم صب المعاش (Suivi & CalCCP)',
          fr: '2. Suivre le dossier et consulter la date de virement (CalCCP)',
        },
        detail: {
          ar: 'استعمل suivi.cnr.dz لمتابعة مراحل تصفية الملف، وافتح calccp.cnr.dz لتحديد يوم صب المعاش الشهري حسب مفتاح CCP.',
          fr: 'Suivez l’instruction sur suivi.cnr.dz et déterminez le jour précis de versement mensuel via calccp.cnr.dz.',
        },
      },
      {
        title: {
          ar: '3. التجديد السنوي عن بعد في شهر الميلاد عبر RetraiteDz',
          fr: '3. Effectuer le renouvellement annuel à distance sur RetraiteDz',
        },
        detail: {
          ar: 'خلال شهر ميلادك، سجل الدخول في تطبيق المتقاعد وأكمل التحقق البيومتري للوجه لتجديد شهادة الحياة تلقائيا دون تنقل.',
          fr: 'Durant votre mois de naissance, ouvrez RetraiteDz et validez la reconnaissance faciale pour maintenir vos versements sans interruption.',
        },
      },
      {
        title: {
          ar: '4. استخراج الشهادات والتثمين أو إيداع التقاعد المنقول',
          fr: '4. Télécharger les attestations et simuler la revalorisation',
        },
        detail: {
          ar: 'حمل شهادة الدخل أو عدم تقاضي المنحة من retraite.cnr.dz، أو تابع ملفات ذوي الحقوق على mankoul.cnr.dz.',
          fr: 'Téléchargez vos attestations certifiées QR sur retraite.cnr.dz ou déposez les dossiers ayants droit sur mankoul.cnr.dz.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'تعليق صب المعاش الشهري بشكل مؤقت',
          fr: 'Suspension temporaire du versement mensuel de la pension',
        },
        solution: {
          ar: 'يرتبط التعليق غالبا بعدم إتمام التجديد السنوي للوثائق في شهر الميلاد؛ افتح تطبيق RetraiteDz لإجراء مسح الوجه أو قدم الوثيقة في الوكالة ليتم فك التجميد واستدراك الأثر الرجعي.',
          fr: 'Cette suspension résulte le plus souvent d’un renouvellement annuel non effectué : validez votre identification sur RetraiteDz ou déposez votre pièce en agence.',
        },
      },
      {
        issue: {
          ar: 'فشل التعرف على الوجه (R-Face) في تطبيق المتقاعد',
          fr: 'Échec de la reconnaissance faciale dans l’application RetraiteDz',
        },
        solution: {
          ar: 'تأكد من الإضاءة الجيدة وخلع النظارات الطبية أو القبعة، وثبت الكاميرا أمام الوجه مباشرة؛ وفي حال تكرار الرفض يمكن لمدير أو موظف الوكالة الإرسال السريع للتجديد.',
          fr: 'Placez-vous face à une lumière naturelle, retirez lunettes et couvre-chef ; en cas d’échec répété, sollicitez la cellule d’accueil CNR.',
        },
      },
      {
        issue: {
          ar: 'نقص بعض سنوات العمل في كشف المسار المهني CIS',
          fr: 'Années de travail manquantes sur le relevé CIS',
        },
        solution: {
          ar: 'أحضر شهادات العمل الأصلية وتصريحات الأجور السنوية DAS الخاصة بتلك الفترة وأودع طلب تحيين المسار المهني عبر التطبيق أو مصلحة التصفية.',
          fr: 'Rassemblez les attestations de travail et relevés DAS de la période concernée pour demander une régularisation auprès de votre agence CNR.',
        },
      },
    ],
    extraFaqs: [],
  },
  commerce: {
    intro: {
      ar: [
        'تتولى وزارة التجارة الداخلية وضبط السوق الوطنية مسؤولية تنظيم النشاط التجاري، مراقبة جودة وسلامة المنتجات، مكافحة المضاربة غير المشروعة، وحماية القدرة الشرائية للمستهلك الجزائري، إلى جانب تنسيق آليات دعم الصادرات غير النفطية بالتكامل مع وزارة التجارة الخارجية وترقية الصادرات ومصالح الجمارك والضرائب.',
        'أطلقت الوزارة عدة منصات رقمية وتطبيقات ميدانية لتعزيز الشفافية وإشراك المواطن في الرقابة الاقتصادية، وفي مقدمتها منصة تواصل (tawassol.commerce.gov.dz) لاستقبال شكاوى المستهلكين وتبليغات المخالفات، وتطبيق الهاتف رفيقكوم (Rafikcom) الذي يحدد على الخريطة المخابز والمحلات المناوبة خلال أيام الأعياد والعطل الرسمية. كما توفر الوزارة المنصة الرقمية للصندوق الخاص لترقية الصادرات (FSPE) لتعويض تكاليف الشحن للمصدرين.',
        'يجمع هذا الدليل كافة الروابط الرسمية المعتمدة لوزارة التجارة وضبط السوق والمنصات الجمركية والجبائية المرافقة للمتعاملين، مع شرح متطلبات إيداع الشكاوى أو طلبات دعم الصادرات والحلول العملية لأكثر المشكلات التجارية تكرارا.'
      ],
      fr: [
        "Le Ministère du Commerce Intérieur et de la Régulation du Marché assure l’encadrement des activités commerciales, le contrôle de la qualité et de la conformité des produits, la lutte contre la spéculation et la protection du pouvoir d’achat des consommateurs algériens. Il agit également en synergie avec les dispositifs de promotion des exportations hors hydrocarbures, les Douanes Algériennes et l’administration fiscale.",
        "Pour renforcer la réactivité des contrôles et associer les citoyens, le secteur a déployé des services digitaux phares tels que la plateforme Tawassol (tawassol.commerce.gov.dz) pour le dépôt et le suivi des signalements consommateurs, ainsi que l’application mobile Rafikcom permettant de localiser les boulangeries et commerces ouverts durant les jours fériés. Les entreprises exportatrices bénéficient quant à elles du portail numérique FSPE dédié au remboursement des frais de transport.",
        "Ce guide complet récapitule les adresses officielles vérifiées, les pièces nécessaires pour déposer une réclamation ou un dossier de subvention FSPE et les démarches recommandées en cas d’infraction commerciale."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'معلومات دقيقة عن المحل المخالف (الولاية، البلدية، العنوان، نوع المخالفة) عند التبليغ عبر منصة تواصل أو تطبيق رفيقكوم.',
        'صور إثبات أو وصل شراء أو لقطة شاشة لإعلان تجاري مخالف لتدعيم ملف الشكوى المرسل لمديرية التجارة.',
        'سجل تجاري إلكتروني ساري المفعول لنشاط التصدير، وثيقة الجمركة D10، وفواتير الشحن لطلب تعويض الصادرات FSPE.',
        'رقم التعريف الجبائي NIF وحساب مفعل في جباية تيك وبوابة الجمارك بالنسبة للمستوردين والمصدرين.',
      ],
      fr: [
        'Coordonnées précises du commerce (wilaya, commune, adresse, nature du grief) pour tout signalement Tawassol ou Rafikcom.',
        'Justificatifs utiles (ticket de caisse, photo du prix affiché ou étiquetage) afin d’appuyer l’enquête DCP.',
        'Registre de commerce électronique export, déclaration douanière D10 et factures de transport acquittées pour le FSPE.',
        'Numéro d’Identification Fiscale (NIF) et accès validé aux portails Jibaya’tic et Douanes pour les opérateurs.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. تحديد المنصة المناسبة (شكوى مستهلك، مناوبة، أو تصدير)',
          fr: '1. Choisir le canal officiel adapté (Tawassol, Rafikcom ou FSPE)',
        },
        detail: {
          ar: 'للمستهلكين استعمل تواصل أو تطبيق رفيقكوم، وللمتعاملين الاقتصاديين والمصدرين استعمل بوابة FSPE أو خلية الإصغاء.',
          fr: 'Utilisez Tawassol/Rafikcom pour la protection du consommateur, ou le portail FSPE et la cellule d’écoute pour les entreprises.',
        },
      },
      {
        title: {
          ar: '2. تقديم التبليغ أو الاستفسار عبر tawassol.commerce.gov.dz',
          fr: '2. Soumettre votre requête ou plainte sur Tawassol',
        },
        detail: {
          ar: 'اختر نوع الطلب (تبليغ عن مخالفة، فضاء المستهلك، معلومات عامة)، املأ الحقول المطلوبة وأرفق الصور المؤيدة.',
          fr: 'Sélectionnez le type de requête, décrivez les faits avec exactitude et joignez vos pièces justificatives.',
        },
      },
      {
        title: {
          ar: '3. تفعيل تطبيق رفيقكوم خلال العطل الرسمية والأعياد',
          fr: '3. Consulter les commerces de permanence sur Rafikcom',
        },
        detail: {
          ar: 'حدد موقعك في التطبيق لمعرفة أقرب مخبزة أو محل مواد غذائية مفتوح في برنامج المناوبة الولائي.',
          fr: 'Activez le GPS dans Rafikcom pour repérer les boulangeries et commerces de proximité ouverts pendant les jours fériés.',
        },
      },
      {
        title: {
          ar: '4. إيداع ملفات الدعم الجمركي والتصدير (FSPE & RTC)',
          fr: '4. Déposer les dossiers exportation FSPE et classement RTC',
        },
        detail: {
          ar: 'يقوم المصدر بتحميل الفواتير والتصريحات الجمركية في fspe.commerce.gov.dz وطلب التعريفة الملزمة في douane.gov.dz/rtc.',
          fr: 'Les exportateurs soumettent leurs justificatifs sur fspe.commerce.gov.dz et vérifient la nomenclature douanière via RTC.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'تاجر يرفض تسليم الفاتورة أو يفرض زيادة غير مبررة على منتج مدعم',
          fr: 'Refus de facturation ou hausse illicite sur un produit réglementé',
        },
        solution: {
          ar: 'قدم تبليغا فوريا في منصة تواصل مع ذكر العنوان الدقيق، أو اتصل بالرقم الأخضر لوزارة التجارة (1020) للتدخل الميداني السريع.',
          fr: 'Signalez immédiatement l’adresse exacte sur Tawassol ou appelez le numéro vert de la protection du consommateur (1020).',
        },
      },
      {
        issue: {
          ar: 'عدم ظهور قائمة المحلات المناوبة لبلديتك داخل تطبيق رفيقكوم',
          fr: 'Liste des commerces de permanence vide pour une commune sur Rafikcom',
        },
        solution: {
          ar: 'قم بتحديث التطبيق إلى آخر إصدار واختر اسم الولاية والبلدية يدويا، كما تنشر مديريات التجارة الولائية قوائم المناوبة عبر صفحاتها الرسمية.',
          fr: 'Mettez à jour l’application Rafikcom et sélectionnez la commune manuellement, ou consultez la liste publiée par votre DCP locale.',
        },
      },
      {
        issue: {
          ar: 'تأخر ملف تعويض تكاليف النقل لدى الصندوق الخاص لترقية الصادرات FSPE',
          fr: 'Retard d’instruction d’un dossier de subvention export FSPE',
        },
        solution: {
          ar: 'تأكد من مطابقة تاريخ الفواتير لتصريح التصدير الجمركي D10 وإرفاق شهادة التوطين البنكي وعملية استرداد العائدات قبل مراسلة خلية الإصغاء.',
          fr: 'Vérifiez la concordance entre les factures de fret, la déclaration D10 et le justificatif de rapatriement des devises.',
        },
      },
    ],
    extraFaqs: [],
  },
};
