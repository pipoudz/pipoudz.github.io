import { BankItem, RichGuideContent } from '../../types';

export const batch2Banks: BankItem[] = [
  // 9. bea
  {
    id: 'bea',
    slug: 'bea',
    name: {
      ar: 'بنك الجزائر الخارجي (BEA)',
      fr: 'Banque Extérieure d’Algérie (BEA)',
    },
    acronym: 'BEA',
    type: 'public',
    description: {
      ar: 'الدليل الشامل لخدمات بنك الجزائر الخارجي BEA: بوابة الصيرفة الإلكترونية BEA E-Banking، تطبيق الهاتف الذكي BEA MOBILE، نافذة الصيرفة الإسلامية، محاكي القروض والتمويل العقاري والاستهلاكي، وخريطة الوكالات وموزعات النقد GAB.',
      fr: 'Guide complet des services numériques de la Banque Extérieure d’Algérie (BEA) : portail BEA E-Banking, application mobile BEA MOBILE (Android/iOS), guichets de finance islamique, simulateur de crédits, réseau d’agences et assistance client.',
    },
    website: 'https://bea.dz/',
    eBankingUrl: 'https://ebanking.bea.dz/',
    swiftCode: 'BEXADZAL',
    headquarters: {
      ar: 'الأبيار، الجزائر العاصمة',
      fr: 'El Biar, Alger',
    },
    services: [
      {
        ar: 'الموقع الرسمي لبنك الجزائر الخارجي (bea.dz)',
        fr: 'Site Officiel BEA Algérie',
        url: 'https://bea.dz/',
        summary: {
          ar: 'البوابة المؤسساتية الرسمية للتعرف على عروض الأفراد والمؤسسات والتجارة الخارجية والبيانات الدورية.',
          fr: 'Portail institutionnel regroupant les offres particuliers, entreprises, commerce extérieur et actualités.',
        },
      },
      {
        ar: 'منصة الصيرفة الإلكترونية BEA E-Banking',
        fr: 'Portail BEA E-Banking',
        url: 'https://ebanking.bea.dz/',
        summary: {
          ar: 'الولوج المباشر للحساب البنكي، الاطلاع على الأرصدة وكشوف العمليات وتنفيذ التحويلات المالية عبر الويب على مدار الساعة.',
          fr: 'Accès web sécurisé 24h/24 pour consulter vos soldes, éditer vos relevés et exécuter des virements bancaires.',
        },
      },
      {
        ar: 'الصيرفة الإسلامية لبنك الجزائر الخارجي',
        fr: 'Finance Islamique BEA',
        url: 'https://bea.dz/index.php/finance-islamique',
        summary: {
          ar: 'منتجات التمويل والادخار المتوافقة مع أحكام الشريعة الإسلامية للأفراد والمؤسسات عبر الشبابيك المعتمدة.',
          fr: 'Solutions d’épargne et de financement conformes aux préceptes de la Charia pour particuliers et entreprises.',
        },
      },
      {
        ar: 'محاكي القروض والتمويل الإلكتروني',
        fr: 'Simulateur de Crédits et Financements',
        url: 'https://bea.dz/index.php/simulateur',
        summary: {
          ar: 'حساب تقديري لقيمة التمويل العقاري والاستهلاكي والأقساط الشهرية ونسب الاقتطاع بنقرة واحدة قبل إيداع الملف.',
          fr: 'Estimation rapide de votre capacité d’emprunt immobilier ou consommation, mensualités et taux d’endettement.',
        },
      },
      {
        ar: 'محدد مواقع الوكالات وموزعات النقد (GAB)',
        fr: 'Localisateur d’Agences & Distributeurs GAB',
        url: 'https://bea.dz/index.php/agences',
        summary: {
          ar: 'العثور عبر الخريطة التفاعلية على أقرب وكالة بنكية ومكاتب الصيرفة الإسلامية وأجهزة السحب الآلي.',
          fr: 'Carte interactive pour localiser l’agence BEA, le guichet de finance islamique ou le GAB le plus proche.',
        },
      },
      {
        ar: 'فضاء الاستفسارات والشكاوى والتواصل الرسمي',
        fr: 'Espace Contact & Réclamations Client',
        url: 'https://bea.dz/index.php/contact',
        summary: {
          ar: 'توجيه طلبات الاستفسار أو الشكاوى الرسمية عبر الاستمارة الإلكترونية أو البريد contact@bea.dz.',
          fr: 'Formulaire officiel de prise de contact et de réclamation en ligne en complément de contact@bea.dz.',
        },
      },
      {
        ar: 'تطبيق BEA MOBILE لأجهزة أندرويد (Google Play)',
        fr: 'Application BEA MOBILE (Android)',
        url: 'https://play.google.com/store/apps/details?id=com.aebs.p2bbea',
        summary: {
          ar: 'إدارة الحسابات البنكية، متابعة الحركات اللحظية وتنفيذ التحويلات المالية بسهولة من هاتف أندرويد.',
          fr: 'Application Android officielle pour piloter vos comptes, suivre les mouvements et effectuer vos virements.',
        },
      },
      {
        ar: 'تطبيق BEA MOBILE لأجهزة آيفون (App Store)',
        fr: 'Application BEA MOBILE (iOS)',
        url: 'https://apps.apple.com/app/bea-mobile/id1534439062',
        summary: {
          ar: 'نسخة هواتف iPhone لمتابعة الأرصدة والعمليات المصرفية لحظيا وإدارة الخدمات عن بعد.',
          fr: 'Version iOS pour accéder à vos comptes BEA en temps réel et réaliser vos opérations mobiles en toute sécurité.',
        },
      },
    ],
    contactPhone: '021 56 25 70',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية بالدينار والعملة الصعبة، حسابات ادخار وتوفير، حسابات إسلامية، وحسابات شركات والتجارة الخارجية',
        fr: 'Comptes courants DZD/Devises, comptes épargne, comptes participatifs islamiques et comptes entreprises',
      },
      digitalBanking: {
        ar: 'منصة الويب BEA E-Banking وتطبيق الهاتف BEA MOBILE على أندرويد وiOS، إضافة إلى محاكي القروض وخريطة الوكالات',
        fr: 'Portail web BEA E-Banking, application mobile BEA MOBILE (Android/iOS), simulateur en ligne et carte des agences',
      },
      islamicWindow: {
        ar: 'شبابيك ومنتجات صيرفة إسلامية مطابقة للشريعة للتمويل والادخار للأفراد والمؤسسات',
        fr: 'Guichets dédiés de finance islamique proposant épargne et financements conformes à la Charia',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق فتح حساب بنكي للأفراد',
          fr: 'Dossier d’ouverture de compte particulier',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية أو جواز سفر ساري، شهادة ميلاد، شهادة إقامة حديثة، وإثبات دخل (شهادة عمل وكشف راتب أو سجل تجاري)',
          fr: 'CNIBE ou passeport en cours de validité, acte de naissance, certificat de résidence et justificatif de revenus ou registre de commerce',
        },
      },
      {
        label: {
          ar: 'تفعيل منصة BEA E-Banking وتطبيق الهاتف',
          fr: 'Activation BEA E-Banking & BEA MOBILE',
        },
        value: {
          ar: 'الاشتراك لدى الوكالة الموطن بها الحساب لتفعيل البوابة الرقمية وربط رقم الهاتف لاستلام رموز الأمان والتحويلات',
          fr: 'Souscription en agence domiciliataire pour obtenir vos identifiants web/mobile et activer les notifications sécurisées',
        },
      },
      {
        label: {
          ar: 'التجارة الخارجية وتوطين الشركات',
          fr: 'Commerce extérieur & domiciliation entreprises',
        },
        value: {
          ar: 'ملف الشركة القانوني، السجل التجاري، رقم التعريف الجبائي NIF، والفاتورة الأولية أو عقد الاستيراد والتصدير عبر رمز السويفت BEXADZAL',
          fr: 'Dossier juridique complet, RC, NIF et factures/contrats commerciaux pour les opérations internationales (SWIFT BEXADZAL)',
        },
      },
      {
        label: {
          ar: 'مركز الاتصال والبريد الإلكتروني المعتمد',
          fr: 'Support client & contact officiel',
        },
        value: {
          ar: 'الهاتف 021 56 25 70 — البريد الإلكتروني contact@bea.dz — واستمارة التواصل الرسمية bea.dz/index.php/contact',
          fr: 'Téléphone 021 56 25 70 — E-mail contact@bea.dz — Formulaire officiel bea.dz/index.php/contact',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أسجل الدخول إلى منصة BEA E-Banking وتطبيق BEA MOBILE؟',
          fr: 'Comment accéder à BEA E-Banking et à l’application BEA MOBILE ?',
        },
        answer: {
          ar: 'تقدم إلى وكالتك البنكية لطلب الاشتراك في خدمة الصيرفة الإلكترونية، وبعد استلام بيانات التفعيل تدخل عبر ebanking.bea.dz أو عبر تطبيق BEA MOBILE على أندرويد وآيفون لمتابعة حساباتك وإجراء التحويلات.',
          fr: 'Souscrivez au service E-Banking auprès de votre agence BEA afin de recevoir vos identifiants, puis connectez-vous sur ebanking.bea.dz ou depuis l’application BEA MOBILE (Android/iOS).',
        },
      },
      {
        question: {
          ar: 'هل يوفر بنك الجزائر الخارجي محاكيا إلكترونيا لحساب القروض قبل التقدم بالملف؟',
          fr: 'La BEA propose-t-elle un simulateur de crédit en ligne ?',
        },
        answer: {
          ar: 'نعم، يتيح البنك أداة محاكي القروض والتمويل عبر رابط bea.dz/index.php/simulateur لتقدير قيمة التمويل العقاري أو الاستهلاكي وقيمة الأقساط الشهرية ونسبة الاقتطاع مسبقا.',
          fr: 'Oui, l’outil officiel disponible sur bea.dz/index.php/simulateur permet d’estimer à l’avance le montant finançable, les mensualités et la capacité d’endettement.',
        },
      },
      {
        question: {
          ar: 'هل تتوفر منتجات الصيرفة الإسلامية في بنك الجزائر الخارجي BEA؟',
          fr: 'La finance islamique est-elle disponible à la BEA ?',
        },
        answer: {
          ar: 'نعم، يقدم البنك حلول تمويل وادخار مطابقة لأحكام الشريعة الإسلامية للأفراد والمؤسسات عبر شبابيك مخصصة، ويمكن الاطلاع على تفاصيلها وعناوين الوكالات من صفحة الصيرفة الإسلامية الرسمية.',
          fr: 'Oui, la BEA propose des produits d’épargne et de financement conformes à la Charia dans ses guichets dédiés, détaillés sur la rubrique Finance Islamique du site officiel.',
        },
      },
      {
        question: {
          ar: 'ما هي القنوات المعتمدة لتوجيه الاستفسارات أو الشكاوى إلى بنك BEA؟',
          fr: 'Comment adresser une réclamation ou demande d’information à la BEA ?',
        },
        answer: {
          ar: 'يمكنك مراسلة البنك عبر البريد الإلكتروني الرسمي contact@bea.dz، أو تعبئة استمارة التواصل الرقمية على bea.dz/index.php/contact، أو الاتصال الهاتفي على الرقم 021 56 25 70.',
          fr: 'Vous pouvez écrire à contact@bea.dz, utiliser le formulaire sur bea.dz/index.php/contact ou joindre la banque par téléphone au 021 56 25 70.',
        },
      },
    ],
  },

  // 10. bna
  {
    id: 'bna',
    slug: 'bna',
    name: {
      ar: 'البنك الوطني الجزائري (BNA)',
      fr: 'Banque Nationale d’Algérie (BNA)',
    },
    acronym: 'BNA',
    type: 'public',
    description: {
      ar: 'الدليل الكامل للخدمات الرقمية للبنك الوطني الجزائري BNA: فضاء BNA e-Banking عبر الويب، تطبيقي الهاتف BNAtic وWimpay BNA للدفع عبر رمز الاستجابة السريعة QR، الصيرفة الإسلامية (مرابحة عقار وسيارات وتجهيز وإجارة)، محاكي القروض، وإدارة بطاقات CIB وVisa.',
      fr: 'Guide complet des services numériques de la Banque Nationale d’Algérie (BNA) : portail BNA e-Banking, applications mobiles BNAtic et Wimpay BNA (paiement QR), finance islamique, simulateur de crédits, monétique CIB/Visa et réseau d’agences.',
    },
    website: 'https://www.bna.dz/ar/',
    eBankingUrl: 'https://ebanking.bna.dz/',
    swiftCode: 'BNALDZAL',
    headquarters: {
      ar: 'شارع إرنستو شي غيفارا، الجزائر العاصمة',
      fr: 'Boulevard Ernesto Che Guevara, Alger',
    },
    services: [
      {
        ar: 'الموقع الرسمي للبنك الوطني الجزائري (bna.dz)',
        fr: 'Site Officiel BNA (bna.dz)',
        url: 'https://www.bna.dz/ar/',
        summary: {
          ar: 'البوابة الرئيسية باللغة العربية والفرنسية لمتابعة عروض الحسابات والتمويلات ومستجدات البنك.',
          fr: 'Portail officiel présentant l’ensemble des offres particuliers, professionnels, entreprises et actualités.',
        },
      },
      {
        ar: 'منصة الصيرفة الإلكترونية BNA e-Banking',
        fr: 'Portail BNA e-Banking',
        url: 'https://ebanking.bna.dz/',
        summary: {
          ar: 'الولوج الآمن لحسابات الدينار والعملة الصعبة، مراقبة العمليات، التحويلات وطلب البطاقات ودفاتر الصكوك 24/7.',
          fr: 'Accès sécurisé 24h/24 aux comptes DZD et devises, virements, relevés et commande de chéquiers ou cartes.',
        },
      },
      {
        ar: 'الصيرفة الإسلامية BNA',
        fr: 'Finance Islamique BNA',
        url: 'https://www.bna.dz/ar/finance-islamique/',
        summary: {
          ar: 'حلول موافقة للشريعة الإسلامية تشمل مرابحة العقار والسيارات والتجهيز والإجارة وحسابات الاستثمار.',
          fr: 'Offre complète conforme à la Charia : Mourabaha immobilière, auto et équipement, Ijara et comptes d’investissement.',
        },
      },
      {
        ar: 'محاكي القروض والتمويلات BNA',
        fr: 'Simulateur de Crédits & Financements',
        url: 'https://www.bna.dz/ar/simulateurs/',
        summary: {
          ar: 'محاكاة تمويل المشاريع، القروض العقارية والاستهلاكية والتمويلات الإسلامية واحتساب الأقساط الشهرية.',
          fr: 'Outil en ligne pour simuler crédits immobiliers, consommation, investissement et financements islamiques.',
        },
      },
      {
        ar: 'شبكة الوكالات وموزعات النقد الآلي (GAB)',
        fr: 'Réseau d’Agences & Distributeurs GAB',
        url: 'https://www.bna.dz/ar/trouver-une-agence/',
        summary: {
          ar: 'البحث الجغرافي وتحديد مواقع وكالات BNA وشبابيك الصيرفة الإسلامية وأجهزة الصراف الآلي عبر الولايات.',
          fr: 'Annuaire géolocalisé des agences BNA, guichets de finance islamique et distributeurs GAB dans tout le pays.',
        },
      },
      {
        ar: 'البطاقات النقدية والدفع الإلكتروني (CIB / Visa)',
        fr: 'Monétique & Cartes Bancaires (CIB / Visa)',
        url: 'https://www.bna.dz/ar/monetique/',
        summary: {
          ar: 'إدارة بطاقات CIB الوطنية وبطاقات Visa الدولية وتفعيل الشراء عبر الإنترنت وحلول الدفع عبر أجهزة TPE.',
          fr: 'Gestion des cartes CIB et Visa internationales, activation du e-paiement et terminaux TPE pour commerçants.',
        },
      },
      {
        ar: 'فضاء الاستفسارات والشكاوى (CEC@bna.dz)',
        fr: 'Espace Réclamations & Contact Client',
        url: 'https://www.bna.dz/ar/contact/',
        summary: {
          ar: 'إرسال الاستفسارات والشكاوى عبر الاستمارة الرقمية أو عبر البريد CEC@bna.dz والرقم المختصر 3306.',
          fr: 'Formulaire officiel de contact client en complément du numéro court 3306 et de l’adresse CEC@bna.dz.',
        },
      },
      {
        ar: 'تطبيق BNAtic لأجهزة أندرويد (Google Play)',
        fr: 'Application BNAtic (Android)',
        url: 'https://play.google.com/store/apps/details?id=dz.bna.matic',
        summary: {
          ar: 'تطبيق الصيرفة الذكية لإدارة الحسابات، التحويلات المالية، تتبع المعاملات وطلب البطاقات ودفاتر الصكوك.',
          fr: 'Application mobile Android pour consulter vos comptes, effectuer des virements et commander vos cartes/chéquiers.',
        },
      },
      {
        ar: 'تطبيق BNAtic لأجهزة آيفون (App Store)',
        fr: 'Application BNAtic (iOS / iPhone)',
        url: 'https://apps.apple.com/app/bn-tic/id1527787498',
        summary: {
          ar: 'نسخة هواتف آبل للوصول الآمن والسريع إلى حسابات البنك الوطني الجزائري وإدارتها لحظيا.',
          fr: 'Application iPhone pour piloter vos comptes BNA, suivre les opérations en temps réel et réaliser des virements.',
        },
      },
      {
        ar: 'تطبيق Wimpay BNA للدفع عبر QR (Google Play)',
        fr: 'Application Wimpay BNA (Android)',
        url: 'https://play.google.com/store/apps/details?id=dz.bna.wimpay',
        summary: {
          ar: 'الدفع الفوري عبر الهاتف برمز QR وتسديد فواتير سونلغاز واتصالات الجزائر والتحويل بين الحسابات.',
          fr: 'Solution de paiement mobile par QR code sur Android : règlement de factures (Sonelgaz, Algérie Télécom) et achats.',
        },
      },
      {
        ar: 'تطبيق Wimpay BNA لأجهزة آيفون (App Store)',
        fr: 'Application Wimpay BNA (iOS / iPhone)',
        url: 'https://apps.apple.com/app/wimpay-dz-bna/id1597845778',
        summary: {
          ar: 'تطبيق الدفع الإلكتروني الفوري على iOS لإجراء المعاملات المالية وتسديد المشتريات دون تلامس.',
          fr: 'Version iOS pour payer sans contact par QR code et effectuer des transferts instantanés chez les commerçants agréés.',
        },
      },
    ],
    contactPhone: '3306 / 0770 20 33 06 / 021 43 99 98',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية وحسابات بالعملة الصعبة، دفاتر ادخار، ودائع لأجل، وحسابات استثمار وتوفير إسلامية',
        fr: 'Comptes chèques DZD/Devises, livrets d’épargne, dépôts à terme et comptes participatifs islamiques',
      },
      digitalBanking: {
        ar: 'بوابة BNA e-Banking + تطبيق الصيرفة الذكية BNAtic + تطبيق الدفع الفوري بالرمز QR المسمى Wimpay BNA',
        fr: 'Portail BNA e-Banking, application BNAtic (Android/iOS) et portefeuille mobile Wimpay BNA pour paiements QR',
      },
      islamicWindow: {
        ar: 'شبابيك صيرفة إسلامية متطورة تغطي مرابحة العقار والسيارات والتجهيزات والإجارة وحسابات الاستثمار الشرعية',
        fr: 'Réseau actif de guichets de finance islamique : Mourabaha habitat/auto/équipement, Ijara et comptes d’investissement',
      },
    },
    requirements: [
      {
        label: {
          ar: 'ملف فتح حساب أفراد أو مهنيين',
          fr: 'Ouverture de compte particulier ou professionnel',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية، شهادة ميلاد، شهادة إقامة حديثة، وكشف راتب أو سجل تجاري ووثيقة جبائية للمهنيين',
          fr: 'CNIBE biométrique, acte de naissance, justificatif de domicile, fiche de paie ou registre de commerce et NIF pour pros',
        },
      },
      {
        label: {
          ar: 'تفعيل BNA e-Banking وتطبيق BNAtic وWimpay',
          fr: 'Activation e-Banking, BNAtic & Wimpay BNA',
        },
        value: {
          ar: 'توقيع استمارة الاشتراك الرقمي على مستوى الوكالة وربط رقم الهاتف المحمول لتلقي كلمة المرور المؤقتة وتفعيل الدفع عبر QR',
          fr: 'Souscription gratuite en agence et enregistrement du numéro mobile pour recevoir vos codes d’accès et lier Wimpay BNA',
        },
      },
      {
        label: {
          ar: 'تسديد الفواتير والخدمات عبر Wimpay BNA',
          fr: 'Paiement de factures & QR sur Wimpay BNA',
        },
        value: {
          ar: 'حساب بنكي نشط في BNA وتطبيق Wimpay BNA المثبت لدفع فواتير سونلغاز واتصالات الجزائر والمشتريات لدى التجار',
          fr: 'Compte BNA actif relié à l’application Wimpay BNA pour régler Sonelgaz, Algérie Télécom et vos achats sans espèces',
        },
      },
      {
        label: {
          ar: 'مركز الاتصال الرسمي والشكاوى',
          fr: 'Centre d’appels & service réclamations',
        },
        value: {
          ar: 'الرقم المختصر 3306 أو 0770.20.33.06 أو 021.43.99.98 — البريد CEC@bna.dz — والاستمارة bna.dz/ar/contact',
          fr: 'Numéro court 3306 / 0770.20.33.06 / 021.43.99.98 — E-mail CEC@bna.dz — Portail bna.dz/ar/contact',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين تطبيق BNAtic وتطبيق Wimpay BNA؟',
          fr: 'Quelle différence entre BNAtic et Wimpay BNA ?',
        },
        answer: {
          ar: 'تطبيق BNAtic مخصص لإدارة الحساب البنكي (الرصيد، كشف الحساب، التحويلات البنكية، طلب البطاقات ودفاتر الشيكات)، بينما يركز تطبيق Wimpay BNA على الدفع الفوري بالهاتف عبر مسح رمز QR وتسديد الفواتير مثل سونلغاز واتصالات الجزائر.',
          fr: 'BNAtic sert à la gestion bancaire quotidienne (soldes, relevés, virements, commande de cartes/chéquiers), tandis que Wimpay BNA est dédié au paiement instantané par QR code et au règlement de factures.',
        },
      },
      {
        question: {
          ar: 'كيف أحصل على تمويل إسلامي من البنك الوطني الجزائري BNA؟',
          fr: 'Comment bénéficier de la finance islamique à la BNA ?',
        },
        answer: {
          ar: 'يمكنك محاكاة قيمة القسط عبر صفحة المحاكاة bna.dz/ar/simulateurs، ثم التوجه إلى أقرب وكالة تضم شباك الصيرفة الإسلامية لـ BNA مرفقا بملف الدخل والفاتورة الأولية للعقار أو السيارة أو التجهيز.',
          fr: 'Estimez d’abord votre capacité via bna.dz/ar/simulateurs, puis déposez votre dossier de revenus et facture proforma auprès d’une agence BNA dotée d’un guichet de finance islamique.',
        },
      },
      {
        question: {
          ar: 'هل يوفر البنك الوطني الجزائري بطاقات Visa دولية إلى جانب CIB؟',
          fr: 'La BNA délivre-t-elle des cartes Visa internationales en plus de la carte CIB ?',
        },
        answer: {
          ar: 'نعم، يوفر البنك بطاقة السحب والدفع الوطنية CIB وكذلك بطاقات Visa الدولية للحائزين على حسابات بالعملة الصعبة وفق الشروط المنشورة في قسم النقديات bna.dz/ar/monetique.',
          fr: 'Oui, la BNA émet la carte interbancaire CIB nationale ainsi que des cartes Visa internationales liées aux comptes en devises, selon les conditions détaillées dans la rubrique Monétique.',
        },
      },
      {
        question: {
          ar: 'ما هو رقم مركز خدمة زبائن البنك الوطني الجزائري وبريد الشكاوى؟',
          fr: 'Comment contacter le centre de relation client BNA ?',
        },
        answer: {
          ar: 'اتصل بالرقم المختصر 3306 أو الرقم 0770.20.33.06 أو 021.43.99.98، أو راسل البريد الرسمي لخدمة الزبائن CEC@bna.dz.',
          fr: 'Appelez le 3306, le 0770.20.33.06 ou le 021.43.99.98, ou écrivez directement à l’adresse CEC@bna.dz.',
        },
      },
    ],
  },

  // 11. bnh
  {
    id: 'bnh',
    slug: 'bnh',
    name: {
      ar: 'البنك الوطني للإسكان (BNH)',
      fr: 'Banque Nationale de l’Habitat (BNH)',
    },
    acronym: 'BNH',
    type: 'public',
    description: {
      ar: 'الدليل الشامل للبنك الوطني للإسكان BNH (الشريك المالي الأول لقطاع السكن في الجزائر): قروض اقتناء وترميم وبناء السكنات الفردية، فتح الحسابات ودفاتر الادخار السكني، تمويل المرقين العقاريين ومقاولي البناء، بطاقات CIB، ودفع أقساط السكن عبر بريدي موب.',
      fr: 'Guide complet de la Banque Nationale de l’Habitat (BNH) : crédits immobiliers (acquisition, construction, aménagement), comptes et livrets d’épargne logement, financement des promoteurs immobiliers, cartes CIB, paiement e-banking des loyers/échéances et réseau d’agences.',
    },
    website: 'https://bnh.dz/',
    eBankingUrl: 'https://bnh.dz/',
    swiftCode: 'BNHADZAL',
    headquarters: {
      ar: 'باب الزوار / دار البيضاء، الجزائر العاصمة',
      fr: 'Bab Ezzouar / Dar El Beïda, Alger',
    },
    services: [
      {
        ar: 'الموقع الرسمي للبنك الوطني للإسكان (bnh.dz)',
        fr: 'Portail Officiel BNH (bnh.dz)',
        url: 'https://bnh.dz/',
        summary: {
          ar: 'البوابة المركزية لبرامج التمويل السكني، محاكاة القروض العقارية، واتفاقيات الدفع الإلكتروني لأقساط السكن.',
          fr: 'Portail officiel regroupant les formules de financement immobilier, simulateurs et conventions de paiement électronique.',
        },
      },
      {
        ar: 'تمويل اقتناء وبناء وترميم السكنات العقارية',
        fr: 'Financement Acquisition, Construction & Aménagement Immobilier',
        url: 'https://bnh.dz/acquisition-dun-bien-immobilier/',
        summary: {
          ar: 'قروض وتمويلات سكنية ميسرة لاقتناء المساكن، البناء الذاتي، التوسيع أو التهيئة والترميم بفترات سداد طويلة.',
          fr: 'Crédits hypothécaires à conditions avantageuses pour l’achat, l’auto-construction, l’extension ou la réhabilitation de logement.',
        },
      },
      {
        ar: 'فضاء الأفراد (الحسابات ودفاتر الادخار السكني DAT)',
        fr: 'Espace Particuliers (Comptes, Épargne Logement & DAT)',
        url: 'https://bnh.dz/particuliers/',
        summary: {
          ar: 'فتح وإدارة الحسابات الجارية وحسابات الصكوك، دفاتر التوفير والادخار السكني، والودائع لأجل ذات المردود، مع بطاقات CIB.',
          fr: 'Ouverture de comptes courants, livrets d’épargne logement, dépôts à terme DAT rémunérés et délivrance de cartes CIB.',
        },
      },
      {
        ar: 'تمويل الترقية العقارية والمقاولين والمهنيين',
        fr: 'Financement Promoteurs Immobiliers & Professionnels BTP',
        url: 'https://bnh.dz/professionnels/',
        summary: {
          ar: 'حلول مصرفية مخصصة للمرقين العقاريين ومقاولي البناء والأشغال العمومية وتمويل البرامج السكنية الكبرى.',
          fr: 'Financements sur mesure pour promoteurs immobiliers, entreprises BTP et projets d’habitat collectifs ou promotionnels.',
        },
      },
      {
        ar: 'شبكة وكالات BNH عبر الولايات',
        fr: 'Annuaire des Agences BNH par Wilaya',
        url: 'https://bnh.dz/liste-des-agences/',
        summary: {
          ar: 'دليل العناوين وأرقام الهواتف لوكالات البنك الوطني للإسكان في الجزائر العاصمة ومختلف ولايات الوطن.',
          fr: 'Répertoire des adresses et coordonnées téléphoniques des agences BNH à Alger et dans les wilayas.',
        },
      },
      {
        ar: 'استمارة الاستفسارات والمراسلة الرسمية',
        fr: 'Formulaire de Contact & Réclamations BNH',
        url: 'https://bnh.dz/contact/',
        summary: {
          ar: 'توجيه الاستفسارات ومتابعة ملفات القروض عبر الاستمارة الرقمية أو البريد serviceclient@bnh.dz وcontact@bnh.dz.',
          fr: 'Envoi de demandes d’information et suivi de dossiers en ligne en plus des adresses serviceclient@bnh.dz et contact@bnh.dz.',
        },
      },
    ],
    contactPhone: '021 98 02 00 / 023 81 40 00',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية وحسابات صكوك، دفاتر التوفير والادخار السكني، ودائع لأجل DAT، وحسابات المرقين والمقاولين',
        fr: 'Comptes courants/chèques, livrets d’épargne logement, dépôts à terme DAT et comptes promoteurs/entrepreneurs',
      },
      digitalBanking: {
        ar: 'فضاء الرقمنة ومحاكاة القروض السكنية عبر bnh.dz، بطاقات CIB، واتفاقية دفع أقساط السكن إلكترونيا عبر بريدي موب',
        fr: 'Espace digital et simulateur immobilier sur bnh.dz, carte CIB et convention de paiement électronique des échéances via BaridiMob',
      },
      islamicWindow: {
        ar: 'بنك عمومي متخصص في التمويل العقاري والسكن وبرامج الصيرفة المواكبة لقطاع السكن في الجزائر',
        fr: 'Banque publique spécialisée dans l’habitat accompagnant les formules nationales de financement immobilier',
      },
    },
    requirements: [
      {
        label: {
          ar: 'ملف القرض العقاري لاقتناء سكن',
          fr: 'Dossier de crédit immobilier particulier',
        },
        value: {
          ar: 'وثيقة الهوية البيومترية، شهادة إقامة، كشوف الرواتب أو مداخيل المهنة، وعد بالبيع أو قرار استفادة، وشهادة عدم الملكية عند الاقتضاء',
          fr: 'Pièce d’identité, justificatif de résidence, justificatifs de revenus, promesse de vente ou décision d’attribution et pièces foncières',
        },
      },
      {
        label: {
          ar: 'فتح دفتر الادخار السكني أو حساب جاري',
          fr: 'Ouverture de livret d’épargne logement ou compte courant',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وإيداع أولي حسب نوع دفتر التوفير أو الحساب المطلوب في الوكالة',
          fr: 'CNIBE biométrique, acte de naissance, certificat de résidence et versement initial selon la formule choisie en agence',
        },
      },
      {
        label: {
          ar: 'دفع أقساط السكن بالوسائل الرقمية',
          fr: 'Paiement électronique des échéances & loyers',
        },
        value: {
          ar: 'بطاقة CIB بنكية أو البطاقة الذهبية عبر تطبيق بريدي موب ضمن اتفاقية الدفع الإلكتروني لمستحقات السكن',
          fr: 'Carte CIB ou Edahabia via BaridiMob dans le cadre de la convention nationale de règlement digital des échéances logement',
        },
      },
      {
        label: {
          ar: 'قنوات الدعم والاتصال بالمقر الرئيسي',
          fr: 'Coordonnées du siège & service client',
        },
        value: {
          ar: 'المقر الرئيسي باب الزوار: 021.98.02.00 / 023.81.40.00 — البريد serviceclient@bnh.dz وcontact@bnh.dz',
          fr: 'Siège Bab Ezzouar : 021.98.02.00 / 023.81.40.00 — E-mail serviceclient@bnh.dz / contact@bnh.dz',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي التمويلات التي يقدمها البنك الوطني للإسكان BNH للأفراد؟',
          fr: 'Quels crédits immobiliers la BNH propose-t-elle aux particuliers ?',
        },
        answer: {
          ar: 'يوفر البنك قروضا ميسرة لاقتناء سكن جاهز أو قيد الإنجاز، تمويل البناء الذاتي في قطعة أرض، وقروض التوسيع والتهيئة والترميم بفترات سداد مريحة، إضافة إلى مواكبة برامج السكن الوطنية.',
          fr: 'La BNH accorde des crédits pour l’acquisition de logements neufs ou anciens, l’auto-construction, l’extension ou la réhabilitation, et accompagne les programmes nationaux de logement.',
        },
      },
      {
        question: {
          ar: 'هل يمكن فتح حساب جاري ودفتر توفير عادي في البنك الوطني للإسكان دون طلب قرض؟',
          fr: 'Peut-on ouvrir un compte courant ou livret d’épargne BNH sans demander de crédit ?',
        },
        answer: {
          ar: 'نعم، يتيح فضاء الأفراد في BNH فتح الحسابات الجارية وحسابات الصكوك ودفاتر الادخار السكني والودائع لأجل DAT للاستفادة من المردود المالي وبطاقة CIB.',
          fr: 'Oui, l’espace particuliers permet d’ouvrir des comptes chèques, livrets d’épargne logement ou dépôts à terme rémunérés DAT et d’obtenir une carte CIB.',
        },
      },
      {
        question: {
          ar: 'كيف أسدد أقساط السكن التابعة لبرامج BNH إلكترونيا؟',
          fr: 'Comment régler ses échéances de logement BNH à distance ?',
        },
        answer: {
          ar: 'عقد البنك اتفاقية دفع إلكتروني تتيح تسديد مستحقات وأقساط السكن عبر بطاقات CIB البنكية وتطبيق بريدي موب من الهاتف دون انتظار في الطوابير.',
          fr: 'Grâce aux conventions e-paiement de la BNH, les bénéficiaires peuvent régler leurs échéances via la carte CIB ou l’application BaridiMob.',
        },
      },
      {
        question: {
          ar: 'أين تقع وكالات البنك الوطني للإسكان وكيف أتواصل مع خدمة الزبائن؟',
          fr: 'Où trouver les agences BNH et comment joindre le service client ?',
        },
        answer: {
          ar: 'تجد قائمة العناوين والهواتف في صفحة bnh.dz/liste-des-agences، كما يمكنك الاتصال بالمقر الرئيسي على 021.98.02.00 أو مراسلة serviceclient@bnh.dz.',
          fr: 'Consultez l’annuaire sur bnh.dz/liste-des-agences, appelez le siège au 021.98.02.00 ou écrivez à serviceclient@bnh.dz.',
        },
      },
    ],
  },

  // 12. business.algeria.hsbc
  {
    id: 'business.algeria.hsbc',
    slug: 'business.algeria.hsbc',
    name: {
      ar: 'بنك إتش إس بي سي الجزائر (HSBC Algeria)',
      fr: 'HSBC Algérie (Corporate & Business Banking)',
    },
    acronym: 'HSBC',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لبنك إتش إس بي سي الجزائر للأعمال HSBC Algeria: بوابة الصيرفة الرقمية المؤسساتية HSBCnet وتطبيق HSBCnet Mobile برموز الأمان الرقمية، تمويل التجارة الدولية وسلاسل الإمداد GTRF، إدارة السيولة والخزينة GLCM، وأسواق الصرف للشركات الكبرى.',
      fr: 'Guide complet de HSBC Algérie pour les grandes entreprises et multinationales : plateforme globale HSBCnet et HSBCnet Mobile (Digital Token), financement du commerce international (GTRF), gestion de trésorerie et liquidités (GLCM) et opérations de change corporate.',
    },
    website: 'https://www.business.algeria.hsbc.com/',
    eBankingUrl: 'https://www.hsbcnet.com/',
    swiftCode: 'BBMEDZAL',
    headquarters: {
      ar: 'أورينتال بيزنس بارك، حي الأعمال، باب الزوار، 16311 الجزائر العاصمة',
      fr: 'Oriental Business Park, Quartier d’Affaires, Bab Ezzouar, 16311 Alger',
    },
    services: [
      {
        ar: 'بوابة الأعمال والشركات HSBC Algeria',
        fr: 'Portail Corporate & Business HSBC Algérie',
        url: 'https://www.business.algeria.hsbc.com/',
        summary: {
          ar: 'البوابة الرسمية لحلول تمويل الشركات الكبرى، سلاسل الإمداد GTRF، إدارة الخزينة GLCM وأسواق الصرف.',
          fr: 'Portail dédié aux solutions de commerce international (GTRF), cash management (GLCM) et financement corporate.',
        },
      },
      {
        ar: 'منصة الصيرفة الرقمية العالمية HSBCnet وتطبيق Mobile',
        fr: 'Plateforme Globale HSBCnet & HSBCnet Mobile',
        url: 'https://www.hsbcnet.com/',
        summary: {
          ar: 'مراقبة الأرصدة اللحظية، تفويض التحويلات المحلية والدولية وتوليد رموز الأمان الرقمية Digital Token.',
          fr: 'Pilotage centralisé de la trésorerie en temps réel, validation des paiements et authentification par Digital Token.',
        },
      },
      {
        ar: 'البوابة التعريفية والمقر الرئيسي (باب الزوار، الجزائر)',
        fr: 'Présentation Institutionnelle & Siège Alger',
        url: 'https://www.about.algeria.hsbc.com/',
        summary: {
          ar: 'بيانات التأسيس والاعتماد لدى بنك الجزائر، التقارير التنظيمية، ومقر أورينتال بيزنس بارك بباب الزوار.',
          fr: 'Informations institutionnelles, agrément Banque d’Algérie, publications réglementaires et localisation à Bab Ezzouar.',
        },
      },
      {
        ar: 'حلول التجارة الدولية GTRF وإدارة السيولة GLCM',
        fr: 'Trade Finance (GTRF) & Cash Management (GLCM)',
        url: 'https://www.business.algeria.hsbc.com/',
        summary: {
          ar: 'فتح وتأكيد الاعتمادات المستندية LCs، خطابات الضمان، الدفع الجماعي للرواتب والموردين والتحوط من مخاطر الصرف.',
          fr: 'Crédits documentaires LCs, garanties bancaires, paiements de masse salaires/fournisseurs et couverture de change.',
        },
      },
    ],
    contactPhone: '021 98 52 00',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات مؤسساتية بالدينار والعملة الصعبة، حسابات تجميع السيولة، وتسهيلات استغلال ومشاريع للشركات الكبرى',
        fr: 'Comptes corporate DZD/Devises, comptes de centralisation de trésorerie et lignes de financement structurées',
      },
      digitalBanking: {
        ar: 'منصة HSBCnet العالمية وتطبيق HSBCnet Mobile مع رموز التشفير الرقمية Digital Token وإدارة المدفوعات المجمعة',
        fr: 'Plateforme globale HSBCnet et application HSBCnet Mobile avec Digital Token sécurisé et paiements de masse',
      },
      islamicWindow: {
        ar: 'مؤسسة مصرفية دولية متخصصة في تمويل الشركات الكبرى والتجارة الدولية وإدارة الخزينة (دون شبابيك تجزئة للأفراد)',
        fr: 'Banque internationale dédiée aux grandes entreprises, multinationales et commerce international (hors banque de détail)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الفئة المستهدفة وفتح الحسابات',
          fr: 'Clientèle éligible & ouverture de compte',
        },
        value: {
          ar: 'الشركات الكبرى، فروع المجموعات متعددة الجنسيات، والمؤسسات ذات النشاط التجاري والاستثماري الدولي المعتمدة في الجزائر',
          fr: 'Grandes entreprises, filiales de groupes multinationaux et opérateurs économiques actifs à l’international en Algérie',
        },
      },
      {
        label: {
          ar: 'الوثائق القانونية والمالية المطلوبة',
          fr: 'Dossier juridique & conformité KYC',
        },
        value: {
          ar: 'القانون الأساسي للشركة، السجل التجاري، رقم التعريف الجبائي NIF، القوائم المالية المدققة، وتفويضات المسيرين والمستفيدين الفعليين',
          fr: 'Statuts, registre de commerce, NIF, états financiers certifiés, délégations de pouvoirs et identification des bénéficiaires effectifs',
        },
      },
      {
        label: {
          ar: 'تفعيل منصة HSBCnet ورمز الأمان',
          fr: 'Accès HSBCnet & Digital Token',
        },
        value: {
          ar: 'تعيين مدير النظام ومفوضي التوقيع في اتفاقية الصيرفة الرقمية وتثبيت تطبيق HSBCnet Mobile لتوليد رموز الدخول',
          fr: 'Désignation des administrateurs et valideurs sur la convention HSBCnet avec activation du Digital Token mobile',
        },
      },
      {
        label: {
          ar: 'عنوان المقر الرئيسي وقناة الاتصال',
          fr: 'Siège social & contact corporate',
        },
        value: {
          ar: 'أورينتال بيزنس بارك، حي الأعمال، باب الزوار، 16311 الجزائر العاصمة — الهاتف: 021 98 52 00 — السويفت: BBMEDZAL',
          fr: 'Oriental Business Park, Bab Ezzouar, 16311 Alger — Tél : 021 98 52 00 — Code SWIFT : BBMEDZAL',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يفتح بنك HSBC الجزائر حسابات شخصية للأفراد العاديين؟',
          fr: 'HSBC Algérie propose-t-il des comptes personnels aux particuliers ?',
        },
        answer: {
          ar: 'لا، يركز نشاط بنك HSBC في الجزائر على قطاع الأعمال والشركات الكبرى والمؤسسات متعددة الجنسيات، ويوفر لها حلول التجارة الدولية وإدارة الخزينة والتمويل المهيكل.',
          fr: 'Non, l’activité de HSBC en Algérie est dédiée aux entreprises, grands comptes et filiales multinationales pour le commerce international, la trésorerie et le financement corporate.',
        },
      },
      {
        question: {
          ar: 'ما هي الخدمات التي توفرها منصة HSBCnet وتطبيق HSBCnet Mobile؟',
          fr: 'Quelles fonctionnalités offrent HSBCnet et HSBCnet Mobile ?',
        },
        answer: {
          ar: 'تتيح مراقبة أرصدة الحسابات وكشوفاتها لحظيا، تنفيذ واعتماد التحويلات المحلية والدولية، تنفيذ دفعات الرواتب والموردين المجمعة، واستعمال رمز الأمان الرقمي Digital Token لتسجيل الدخول.',
          fr: 'Ils permettent le suivi temps réel des soldes et flux, l’initiation et la validation mobile des virements locaux/internationaux, les paiements de masse et l’authentification par Digital Token.',
        },
      },
      {
        question: {
          ar: 'ما هي حلول التجارة الخارجية المتاحة عبر بنك HSBC الجزائر؟',
          fr: 'Quelles solutions de commerce extérieur propose HSBC Algérie ?',
        },
        answer: {
          ar: 'تشمل إصدار وتأكيد الاعتمادات المستندية LCs، خطابات الضمان المصرفية، التحصيلات المستندية، وتمويل الموردين والمشترين ضمن شبكة التجارة العالمية لـ HSBC.',
          fr: 'L’offre GTRF inclut l’émission et la confirmation de crédits documentaires (LCs), garanties bancaires, remises documentaires et financements de chaînes d’approvisionnement.',
        },
      },
      {
        question: {
          ar: 'أين يقع مقر HSBC الجزائر وما هو رمز السويفت المعتمد؟',
          fr: 'Où se situe le siège de HSBC Algérie et quel est son code SWIFT ?',
        },
        answer: {
          ar: 'يقع المقر الرئيسي في المجمع العقاري أورينتال بيزنس بارك، حي الأعمال، باب الزوار، 16311 الجزائر العاصمة، ويحمل رمز السويفت BBMEDZAL.',
          fr: 'Le siège est situé à Oriental Business Park, Quartier d’Affaires, Bab Ezzouar, 16311 Alger, avec le code SWIFT BBMEDZAL.',
        },
      },
    ],
  },

  // 13. citigroup
  {
    id: 'citigroup',
    slug: 'citigroup',
    name: {
      ar: 'سيتي بنك الجزائر (Citibank N.A. Algeria)',
      fr: 'Citibank N.A. Algérie (Citigroup)',
    },
    acronym: 'CITIBANK',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لخدمات سيتي بنك الجزائر (أول بنك أجنبي معتمد في الجزائر): منصة الصيرفة الرقمية المؤسساتية CitiDirect، حلول الخزينة والتجارة الدولية TTS، تمويل المشاريع الكبرى والقروض المشتركة، أسواق الصرف والتحوط، ومعالجة الاعتمادات المستندية.',
      fr: 'Guide complet de Citibank N.A. Algérie (Citigroup) : première banque étrangère agréée en Algérie, plateforme corporate CitiDirect, solutions Trésorerie & Commerce International (TTS), financements structurés, marchés des changes et réseau bancaire mondial.',
    },
    website: 'https://www.citigroup.com/global/about-us/global-presence/algeria',
    eBankingUrl: 'https://www.citigroup.com/global/about-us/global-presence/algeria',
    swiftCode: 'CITIDZAL',
    headquarters: {
      ar: 'عمارة القصر، 34/35 حي الأعمال، باب الزوار، 16311 الجزائر العاصمة',
      fr: 'Immeuble Le Ksar, 34/35 Quartier d’Affaires, Bab Ezzouar, 16311 Alger',
    },
    services: [
      {
        ar: 'بوابة سيتي بنك الجزائر (Citigroup Algeria) ومنصة CitiDirect',
        fr: 'Portail Citibank Algérie & Plateforme CitiDirect',
        url: 'https://www.citigroup.com/global/about-us/global-presence/algeria',
        summary: {
          ar: 'منصة رقمية مؤسساتية لإدارة الحسابات البنكية، تنفيذ التحويلات المحلية والدولية ومراقبة التدفقات النقدية بأعلى معايير الأمان.',
          fr: 'Portail institutionnel et accès CitiDirect pour le suivi en temps réel de la trésorerie et des flux de paiement.',
        },
      },
      {
        ar: 'حلول الخزينة والتجارة الدولية (TTS) وسلاسل التوريد',
        fr: 'Solutions Trésorerie & Trade (TTS / Supply Chain)',
        url: 'https://www.citigroup.com/global/about-us/global-presence/algeria',
        summary: {
          ar: 'إدارة السيولة النقدية، تمويل سلاسل التوريد، خطابات الضمان المصرفية والاعتمادات المستندية عبر السويفت CITIDZALTRD.',
          fr: 'Gestion de liquidité, financement de la chaîne d’approvisionnement, garanties bancaires et crédits documentaires.',
        },
      },
      {
        ar: 'تمويل المشاريع الكبرى والقروض المشتركة والتمويل المستدام',
        fr: 'Financement de Grands Projets & Finance Durable',
        url: 'https://www.citigroup.com/global/about-us/global-presence/algeria',
        summary: {
          ar: 'تمويل قطاعات الطاقة والصناعة والبنية التحتية والقروض المهيكلة والمبادرات الخضراء والطاقات المتجددة.',
          fr: 'Crédits syndiqués et financements structurés pour l’énergie, l’industrie, les infrastructures et la transition verte.',
        },
      },
      {
        ar: 'أسواق المال وتداول العملات الأجنبية والبنوك المراسلة',
        fr: 'Marchés des Changes (FX) & Banque Correspondante',
        url: 'https://www.citigroup.com/global/about-us/global-presence/algeria',
        summary: {
          ar: 'أدوات التحوط وإدارة تقلبات العملات الأجنبية للمصدرين والمستوردين وشبكة تسويات دولية عبر أكثر من 90 دولة.',
          fr: 'Couverture de change FX pour importateurs/exportateurs et règlements internationaux en devises via 90+ pays.',
        },
      },
    ],
    contactPhone: '021 91 34 00',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات مؤسساتية وحسابات خزينة للشركات متعددة الجنسيات، المؤسسات الوطنية الكبرى، والهيئات العمومية والبنوك المراسلة',
        fr: 'Comptes corporate et de trésorerie pour multinationales, grandes entreprises nationales, institutions publiques et banques',
      },
      digitalBanking: {
        ar: 'منصة CitiDirect العالمية لإدارة السيولة اللحظية، توقيع التحويلات عن بعد، وتقارير التدفقات النقدية المؤسساتية',
        fr: 'Plateforme globale CitiDirect pour la gestion de liquidité temps réel, validation des virements et reporting financier',
      },
      islamicWindow: {
        ar: 'فرع بنك أجنبي مؤسساتي متخصص في تمويل الشركات الكبرى والخزينة والتجارة الدولية والأسواق المالية',
        fr: 'Succursale bancaire institutionnelle dédiée aux grandes entreprises, à la trésorerie TTS et aux marchés financiers',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الفئة المستفيدة من خدمات سيتي بنك الجزائر',
          fr: 'Clientèle institutionnelle & corporate',
        },
        value: {
          ar: 'الشركات متعددة الجنسيات الناشطة في الجزائر، المؤسسات الوطنية الكبرى، الهيئات الحكومية والمؤسسات المالية المراسلة',
          fr: 'Entreprises multinationales, grands groupes algériens, organismes publics et banques partenaires',
        },
      },
      {
        label: {
          ar: 'الوثائق المعتمدة لفتح حساب شركة',
          fr: 'Dossier d’entrée en relation entreprise',
        },
        value: {
          ar: 'ملف التسجيل القانوني الكامل، السجل التجاري، الرقم الجبائي NIF، بيانات الملاك والمستفيدين، واعتماد التوقيعات وفق قواعد الامتثال KYC',
          fr: 'Statuts, registre de commerce, NIF, structure d’actionnariat KYC/AML et spécimens de signatures autorisées',
        },
      },
      {
        label: {
          ar: 'رموز السويفت والتجارة الدولية',
          fr: 'Références SWIFT & opérations documentaires',
        },
        value: {
          ar: 'رمز السويفت الرئيسي CITIDZAL ورمز وحدة الاعتمادات والتحصيلات المستندية CITIDZALTRD لتوطين التجارة الخارجية',
          fr: 'Code SWIFT principal CITIDZAL et identifiant dédié aux crédits documentaires CITIDZALTRD',
        },
      },
      {
        label: {
          ar: 'المقر الرئيسي والاتصال المباشر',
          fr: 'Siège social à Alger & contact',
        },
        value: {
          ar: 'عمارة القصر، 34/35 حي الأعمال، باب الزوار، 16311 الجزائر العاصمة — الهاتف الرسمي: 021 91 34 00',
          fr: 'Immeuble Le Ksar, 34/35 Quartier d’Affaires, Bab Ezzouar, 16311 Alger — Tél : 021 91 34 00',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يقدم سيتي بنك الجزائر خدمات مصرفية للأفراد وحسابات التوفير العادية؟',
          fr: 'Citibank Algérie ouvre-t-il des comptes particuliers ou d’épargne ?',
        },
        answer: {
          ar: 'لا، يقتصر عمل فرع Citibank N.A. Algeria على الخدمات المصرفية للشركات الكبرى والمؤسسات متعددة الجنسيات والهيئات العمومية والبنوك المراسلة في مجالات الخزينة والتجارة الدولية والتمويل المهيكل.',
          fr: 'Non, Citibank N.A. Algérie opère exclusivement sur le segment des grandes entreprises, multinationales, institutions et banques correspondantes.',
        },
      },
      {
        question: {
          ar: 'ما هي منصة CitiDirect التي يستخدمها زبائن سيتي بنك؟',
          fr: 'À quoi sert la plateforme CitiDirect ?',
        },
        answer: {
          ar: 'CitiDirect هي البوابة الرقمية العالمية لمجموعة Citi لإدارة حسابات الشركات عن بعد، تنفيذ التحويلات المحلية والدولية، مراقبة السيولة اللحظية، واستخراج التقارير المالية بأمان عال.',
          fr: 'CitiDirect est le portail corporate mondial de Citi permettant aux directions financières de piloter leurs comptes, virements, liquidités et reporting en temps réel.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين رمز السويفت CITIDZAL وCITIDZALTRD في سيتي بنك الجزائر؟',
          fr: 'Quelle distinction entre les codes SWIFT CITIDZAL et CITIDZALTRD ?',
        },
        answer: {
          ar: 'CITIDZAL هو رمز السويفت الرئيسي لفرع سيتي بنك الجزائر، بينما يخصص رمز CITIDZALTRD لمعالجة الاعتمادات المستندية والتحصيلات المرتبطة بالتجارة الدولية.',
          fr: 'CITIDZAL correspond au code BIC principal de la succursale d’Alger, tandis que CITIDZALTRD identifie spécifiquement le traitement des crédits et remises documentaires.',
        },
      },
      {
        question: {
          ar: 'أين يقع المقر الرئيسي لسيتي بنك الجزائر؟',
          fr: 'Où se trouve le siège de Citibank N.A. Algérie ?',
        },
        answer: {
          ar: 'يقع المقر في عمارة القصر (Immeuble Le Ksar)، 34/35 حي الأعمال، بلدية باب الزوار، 16311 الجزائر العاصمة.',
          fr: 'Il est implanté à l’Immeuble Le Ksar, 34/35 Quartier d’Affaires, commune de Bab Ezzouar, 16311 Alger.',
        },
      },
    ],
  },

  // 14. cnep
  {
    id: 'cnep',
    slug: 'cnep',
    name: {
      ar: 'الصندوق الوطني للتوفير والاحتياط (كناب بنك CNEP)',
      fr: 'Caisse Nationale d’Épargne et de Prévoyance (CNEP Banque)',
    },
    acronym: 'CNEP',
    type: 'public',
    description: {
      ar: 'الدليل الشامل لخدمات كناب بنك CNEP Banque: فضاء الصيرفة الإلكترونية CNEP e-Banking، تطبيق CNEP Connect لإدارة الحسابات والادخار والقروض، تطبيق الدفع بالرمز QR المسمى WIMPAY CNEP، منصة العقارات CNEP Market، الصيرفة الإسلامية، ومحاكي القروض العقارية.',
      fr: 'Guide complet des services numériques de CNEP Banque : portail CNEP e-Banking, applications mobiles CNEP Connect et WIMPAY CNEP (paiement QR), plateforme immobilière CNEP Market, finance islamique, simulateur de crédits et réseau national d’agences.',
    },
    website: 'https://www.cnepbanque.dz/web/',
    eBankingUrl: 'https://ebanking.cnepbanque.dz/customer/',
    swiftCode: 'CNEPDZAL',
    headquarters: {
      ar: 'شوفالي، دالي إبراهيم، الجزائر العاصمة',
      fr: 'Chevalley, Dély Ibrahim, Alger',
    },
    services: [
      {
        ar: 'الموقع الرسمي لكناب بنك (cnepbanque.dz)',
        fr: 'Site Officiel CNEP Banque',
        url: 'https://www.cnepbanque.dz/web/',
        summary: {
          ar: 'البوابة المؤسساتية الرسمية لصيغ الادخار السكني، القروض العقارية، الودائع وشروط الحسابات.',
          fr: 'Portail officiel regroupant les produits d’épargne, crédits immobiliers, placements et services aux particuliers.',
        },
      },
      {
        ar: 'منصة الصيرفة الإلكترونية CNEP e-Banking',
        fr: 'Portail CNEP e-Banking',
        url: 'https://ebanking.cnepbanque.dz/customer/',
        summary: {
          ar: 'مراقبة الحسابات ودفاتر الادخار، تتبع القروض، تنفيذ التحويلات المالية وطلب دفاتر الصكوك على مدار 24 ساعة.',
          fr: 'Gestion à distance 24h/24 des comptes courants, livrets d’épargne, prêts en cours et virements bancaires.',
        },
      },
      {
        ar: 'منصة CNEP Market للعقارات والسكنات',
        fr: 'Plateforme Immobilière CNEP Market',
        url: 'https://cnepmarket.cnepbanque.dz/',
        summary: {
          ar: 'البوابة الرقمية الرسمية لاستعراض وحجز وشراء السكنات والمحلات التجارية والمكاتب التابعة لكناب بنك.',
          fr: 'Portail officiel pour consulter, réserver et acquérir des logements, locaux commerciaux et bureaux CNEP en ligne.',
        },
      },
      {
        ar: 'الصيرفة الإسلامية CNEP Banque',
        fr: 'Finance Islamique CNEP Banque',
        url: 'https://www.cnepbanque.dz/web/finance-islamique/',
        summary: {
          ar: 'منتجات ادخار وتمويل مطابقة للشريعة الإسلامية: مرابحة العقار والتجهيز، الإجارة التمليكية، وحسابات الاستثمار.',
          fr: 'Offre participative conforme à la Charia : Mourabaha immobilière et équipement, Ijara Tamlikia et comptes d’investissement.',
        },
      },
      {
        ar: 'محاكي القروض والتمويلات العقارية',
        fr: 'Simulateur de Crédits Immobiliers CNEP',
        url: 'https://www.cnepbanque.dz/web/simulateur-de-credit/',
        summary: {
          ar: 'محاكاة تمويل شراء السكنات، البناء والتوسيع، القروض الاستهلاكية والتمويلات الإسلامية وحساب الأقساط الشهرية.',
          fr: 'Outil de calcul des mensualités et montants finançables pour achat de logement, construction, aménagement ou Mourabaha.',
        },
      },
      {
        ar: 'شبكة الوكالات وموزعات النقد (GAB)',
        fr: 'Réseau d’Agences & Distributeurs GAB',
        url: 'https://www.cnepbanque.dz/web/nos-agences/',
        summary: {
          ar: 'خريطة وكالات كناب بنك وشبابيك الصيرفة الإسلامية وأجهزة الصراف الآلي عبر كامل ولايات الوطن.',
          fr: 'Localisation géographique des agences CNEP, guichets de finance islamique et distributeurs automatiques GAB.',
        },
      },
      {
        ar: 'فضاء الاستفسارات والشكاوى (communication@cnepbanque.dz)',
        fr: 'Espace Contact & Réclamations CNEP',
        url: 'https://www.cnepbanque.dz/web/contactez-nous/',
        summary: {
          ar: 'تقديم المقترحات والشكاوى عبر الاستمارة الإلكترونية أو البريد communication@cnepbanque.dz.',
          fr: 'Formulaire de réclamation en ligne en complément de communication@cnepbanque.dz et du centre d’appels.',
        },
      },
      {
        ar: 'تطبيق CNEP Connect لأجهزة أندرويد (Google Play)',
        fr: 'Application CNEP Connect (Android)',
        url: 'https://play.google.com/store/apps/details?id=dz.cnep.connect',
        summary: {
          ar: 'إدارة الحسابات، الاطلاع على الرصيد، إجراء التحويلات، وتتبع القروض ودفاتر التوفير من الهاتف.',
          fr: 'Application Android pour suivre vos comptes, livrets d’épargne, échéances de prêts et initier vos virements.',
        },
      },
      {
        ar: 'تطبيق CNEP Connect لأجهزة آيفون (App Store)',
        fr: 'Application CNEP Connect (iOS)',
        url: 'https://apps.apple.com/app/cnep-connect/id6444005088',
        summary: {
          ar: 'نسخة هواتف آبل للوصول الآمن والسريع إلى خدمات كناب بنك وتنفيذ العمليات المصرفية في أي وقت.',
          fr: 'Version iPhone dédiée à la gestion sécurisée des comptes CNEP Banque et au suivi des crédits et dépôts.',
        },
      },
      {
        ar: 'تطبيق WIMPAY CNEP للدفع عبر QR (Google Play)',
        fr: 'Application WIMPAY CNEP (Android)',
        url: 'https://play.google.com/store/apps/details?id=com.aebs.cnep',
        summary: {
          ar: 'الدفع بالهاتف المحمول وتقنية رمز QR، التحويلات المالية الفورية وتسديد المشتريات دون تلامس.',
          fr: 'Paiement mobile sans contact par QR code et transferts instantanés pour les clients CNEP sur Android.',
        },
      },
      {
        ar: 'تطبيق WIMPAY CNEP لأجهزة آيفون (App Store)',
        fr: 'Application WIMPAY CNEP (iOS)',
        url: 'https://apps.apple.com/app/wimpay-cnep/id1612450849',
        summary: {
          ar: 'تطبيق الدفع الإلكتروني الفوري لأجهزة iPhone لإجراء المدفوعات والتحويلات النقدية السريعة.',
          fr: 'Application iPhone pour régler vos achats par QR code et envoyer des transferts instantanés en toute simplicité.',
        },
      },
    ],
    contactPhone: '023 36 60 07 / 023 36 60 08 / 021 54 20 30 / 3315',
    quickSummary: {
      accountTypes: {
        ar: 'دفاتر التوفير السكني والاحتياط (الشهيرة تاريخيا)، الحسابات الجارية بالدينار والعملة الصعبة، وحسابات التوفير والاستثمار الإسلامي',
        fr: 'Livrets d’épargne logement et prévoyance, comptes courants DZD/Devises et comptes participatifs islamiques',
      },
      digitalBanking: {
        ar: 'منصة CNEP e-Banking + تطبيق CNEP Connect + محفظة الدفع بالرمز QR المسماة WIMPAY CNEP + منصة العقارات CNEP Market',
        fr: 'Portail CNEP e-Banking, application CNEP Connect, portefeuille QR WIMPAY CNEP et marché immobilier CNEP Market',
      },
      islamicWindow: {
        ar: 'شبابيك صيرفة إسلامية نشطة توفر المرابحة العقارية ومرابحة التجهيز والإجارة التمليكية وحسابات الاستثمار الشرعية',
        fr: 'Guichets de finance islamique proposant Mourabaha immobilière/équipement, Ijara Tamlikia et comptes d’investissement',
      },
    },
    requirements: [
      {
        label: {
          ar: 'فتح دفتر توفير أو حساب بنكي للأفراد',
          fr: 'Ouverture de livret d’épargne ou compte courant',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية، شهادة ميلاد، شهادة إقامة حديثة، وكشف راتب أو إثبات نشاط عند طلب الحساب الجاري أو القرض',
          fr: 'CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus pour compte courant ou dossier crédit',
        },
      },
      {
        label: {
          ar: 'الاستفادة من التمويل العقاري أو منصة CNEP Market',
          fr: 'Dossier de financement immobilier & CNEP Market',
        },
        value: {
          ar: 'تقدير القسط عبر محاكي القروض، دفتر توفير CNEP أو إثبات دخل مستقر، واختيار السكن أو المحل عبر CNEP Market أو المرقين',
          fr: 'Simulation préalable en ligne, justificatifs de revenus ou livret d’épargne CNEP et dossier foncier du bien choisi',
        },
      },
      {
        label: {
          ar: 'تفعيل CNEP Connect وWIMPAY CNEP',
          fr: 'Activation CNEP Connect & WIMPAY CNEP',
        },
        value: {
          ar: 'تقديم طلب الاشتراك في الصيرفة الرقمية بالوكالة وتأكيد رقم الهاتف المحمول لتلقي بيانات الدخول وربط بطاقة الدفع',
          fr: 'Souscription au service e-Banking en agence avec validation du numéro mobile pour activer CNEP Connect et WIMPAY',
        },
      },
      {
        label: {
          ar: 'أرقام خلية خدمة الزبائن والبريد الرسمي',
          fr: 'Assistance client & contacts officiels',
        },
        value: {
          ar: 'الهاتف 023.36.60.07 / 023.36.60.08 / 021.54.20.30 أو الرقم المختصر 3315 — البريد communication@cnepbanque.dz',
          fr: 'Tél : 023.36.60.07 / 023.36.60.08 / 021.54.20.30 ou 3315 — E-mail : communication@cnepbanque.dz',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي منصة CNEP Market وكيف أستفيد منها؟',
          fr: 'Qu’est-ce que la plateforme CNEP Market ?',
        },
        answer: {
          ar: 'CNEP Market (cnepmarket.cnepbanque.dz) هي البوابة الرسمية لعرض السكنات والمحلات التجارية والمكاتب التي يسوقها كناب بنك، حيث يمكنك الاطلاع على المواصفات والأسعار وتقديم طلب الحجز عبر الإنترنت.',
          fr: 'CNEP Market (cnepmarket.cnepbanque.dz) est le portail officiel de commercialisation des logements, locaux et bureaux CNEP Banque permettant de consulter les biens et soumettre une réservation en ligne.',
        },
      },
      {
        question: {
          ar: 'هل يدعم تطبيق CNEP Connect متابعة دفاتر التوفير والقروض العقارية؟',
          fr: 'Peut-on suivre son livret d’épargne et son prêt immobilier sur CNEP Connect ?',
        },
        answer: {
          ar: 'نعم، يتيح تطبيق CNEP Connect وبوابة CNEP e-Banking مراقبة رصيد دفتر التوفير والحساب الجاري، متابعة وضعية القروض وأقساطها، وتنفيذ التحويلات المالية بسهولة.',
          fr: 'Oui, CNEP Connect et CNEP e-Banking donnent accès au suivi en temps réel des livrets d’épargne, comptes courants, tableaux d’amortissement de crédits et virements.',
        },
      },
      {
        question: {
          ar: 'ما هي صيغ الصيرفة الإسلامية المتاحة لدى كناب بنك CNEP؟',
          fr: 'Quels produits islamiques sont proposés par CNEP Banque ?',
        },
        answer: {
          ar: 'يوفر كناب بنك باقة شرعية تشمل المرابحة العقارية، مرابحة التجهيز، الإجارة التمليكية (الإيجار المنتهي بالتمليك)، وحسابات التوفير والاستثمار المتوافقة مع أحكام الشريعة الإسلامية.',
          fr: 'CNEP Banque propose la Mourabaha immobilière et d’équipement, l’Ijara Tamlikia (location avec option d’achat) ainsi que des comptes d’épargne et de placement islamiques.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع خلية خدمة الزبائن في كناب بنك؟',
          fr: 'Comment contacter le service client de CNEP Banque ?',
        },
        answer: {
          ar: 'يمكنك الاتصال على الأرقام 023.36.60.07 أو 023.36.60.08 أو 021.54.20.30 أو الرقم المختصر 3315، أو المراسلة عبر communication@cnepbanque.dz.',
          fr: 'Appelez le 023.36.60.07, 023.36.60.08, 021.54.20.30 ou le 3315, ou envoyez un e-mail à communication@cnepbanque.dz.',
        },
      },
    ],
  },

  // 15. cpa
  {
    id: 'cpa',
    slug: 'cpa',
    name: {
      ar: 'القرض الشعبي الجزائري (CPA)',
      fr: 'Crédit Populaire d’Algérie (CPA)',
    },
    acronym: 'CPA',
    type: 'public',
    description: {
      ar: 'الدليل الشامل لخدمات القرض الشعبي الجزائري CPA: منصة الصيرفة الإلكترونية CPA E-Banking، تطبيق Mobile CPA لإدارة الحسابات وطلب كشف الهوية البنكية RIB، تطبيق الدفع بالرمز QR المسمى WIMPAY CPA، الصيرفة الإسلامية، بطاقات CIB وMastercard، وشبكة الوكالات.',
      fr: 'Guide complet du Crédit Populaire d’Algérie (CPA) : portail CPA E-Banking, application Mobile CPA, solution de paiement QR WIMPAY CPA, finance islamique, cartes bancaires CIB et Mastercard internationales, réseau d’agences et support client.',
    },
    website: 'https://www.cpa-bank.dz/index.php/ar/',
    eBankingUrl: 'https://ebanking.cpa-bank.dz/',
    swiftCode: 'CPALDZAL',
    headquarters: {
      ar: 'شارع العقيد عميروش، الجزائر العاصمة',
      fr: 'Boulevard Colonel Amirouche, Alger',
    },
    services: [
      {
        ar: 'الموقع الرسمي للقرض الشعبي الجزائري (cpa-bank.dz)',
        fr: 'Site Officiel CPA (cpa-bank.dz)',
        url: 'https://www.cpa-bank.dz/index.php/ar/',
        summary: {
          ar: 'البوابة الرسمية لعروض الأفراد والمهنيين والشركات، والرسوم البنكية، وآخر أخبار المصرف.',
          fr: 'Portail officiel des offres particuliers, professionnels, PME/PMI, tarifs bancaires et actualités du CPA.',
        },
      },
      {
        ar: 'منصة الصيرفة الإلكترونية CPA E-Banking',
        fr: 'Portail CPA E-Banking',
        url: 'https://ebanking.cpa-bank.dz/',
        summary: {
          ar: 'ولوج مباشر للحسابات بالدينار والعملة الصعبة، متابعة الأرصدة، التحويلات البنكية وطلب دفاتر الصكوك عن بعد.',
          fr: 'Accès web sécurisé 24h/24 aux comptes DZD/Devises, virements, suivi des opérations et commande de chéquiers.',
        },
      },
      {
        ar: 'الصيرفة الإسلامية للقرض الشعبي الجزائري',
        fr: 'Finance Islamique CPA',
        url: 'https://www.cpa-bank.dz/index.php/ar/finance-islamique',
        summary: {
          ar: 'تمويلات وودائع موافقة للشريعة الإسلامية تشمل المرابحة العقارية والاستهلاكية وحسابات الادخار والاستثمار.',
          fr: 'Financements et placements conformes à la Charia : Mourabaha immobilière et consommation, comptes d’épargne et investissement.',
        },
      },
      {
        ar: 'محدد مواقع الوكالات والصرافات الآلية (GAB)',
        fr: 'Localisateur d’Agences & Distributeurs GAB',
        url: 'https://www.cpa-bank.dz/index.php/ar/nos-agences',
        summary: {
          ar: 'البحث عن وكالات القرض الشعبي الجزائري وموزعات السحب الآلي وشبابيك الصيرفة الإسلامية عبر الولايات.',
          fr: 'Annuaire géolocalisé des agences CPA, guichets de finance islamique et distributeurs GAB sur tout le territoire.',
        },
      },
      {
        ar: 'البطاقات النقدية والدفع الإلكتروني (CIB / Mastercard)',
        fr: 'Monétique & Cartes Bancaires (CIB / Mastercard)',
        url: 'https://www.cpa-bank.dz/index.php/ar/monetique',
        summary: {
          ar: 'بطاقات CIB الوطنية وبطاقات Mastercard الدولية والدفع الآمن عبر أجهزة TPE والمواقع الإلكترونية المعتمدة.',
          fr: 'Gestion des cartes CIB et Mastercard internationales, paiement en ligne sécurisé et terminaux TPE commerçants.',
        },
      },
      {
        ar: 'فضاء الاستفسارات والشكاوى (contact@cpa-bank.dz)',
        fr: 'Espace Contact & Réclamations Client',
        url: 'https://www.cpa-bank.dz/index.php/ar/contactez-nous',
        summary: {
          ar: 'إرسال الاستفسارات والشكاوى عبر الاستمارة الرقمية أو البريد contact@cpa-bank.dz وcpa@cpa-bank.dz.',
          fr: 'Formulaire en ligne de contact et réclamation en complément de contact@cpa-bank.dz et cpa@cpa-bank.dz.',
        },
      },
      {
        ar: 'تطبيق Mobile CPA لإدارة الحسابات',
        fr: 'Application Mobile CPA',
        url: 'https://play.google.com/store/apps/details?id=com.cpa.mobile',
        summary: {
          ar: 'متابعة الحسابات البنكية، تنفيذ التحويلات وطلب كشف الهوية البنكية RIB مباشرة من الهاتف الذكي.',
          fr: 'Application officielle pour suivre vos comptes CPA, réaliser des virements et obtenir votre RIB sur mobile.',
        },
      },
      {
        ar: 'تطبيق WIMPAY CPA للدفع الإلكتروني بالرمز QR',
        fr: 'Application WIMPAY CPA (Paiement QR)',
        url: 'https://play.google.com/store/apps/details?id=com.wimpay.cpa',
        summary: {
          ar: 'الدفع الفوري من حساب إلى حساب ومسح رموز الاستجابة السريعة QR لتسديد المشتريات دون تلامس.',
          fr: 'Paiement instantané de compte à compte et règlement sans contact par lecture de QR code chez les commerçants.',
        },
      },
    ],
    contactPhone: '021 63 57 12 / 3318',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية بالدينار والعملة الصعبة، حسابات التوفير والودائع لأجل، حسابات المهن الحرة والمقاولين، وحسابات إسلامية',
        fr: 'Comptes courants DZD/Devises, comptes épargne/DAT, comptes professions libérales/PME et comptes participatifs islamiques',
      },
      digitalBanking: {
        ar: 'بوابة CPA E-Banking + تطبيق Mobile CPA لإدارة الحساب وطلب RIB + تطبيق WIMPAY CPA للدفع السريع بالرمز QR',
        fr: 'Portail CPA E-Banking, application Mobile CPA (suivi comptes & RIB) et portefeuille de paiement QR WIMPAY CPA',
      },
      islamicWindow: {
        ar: 'نوافذ وشبابيك صيرفة إسلامية معتمدة تقدم المرابحة العقارية والاستهلاكية وحسابات الادخار والاستثمار الشرعية',
        fr: 'Guichets dédiés à la finance islamique offrant Mourabaha habitat/consommation et comptes d’épargne conformes à la Charia',
      },
    },
    requirements: [
      {
        label: {
          ar: 'ملف فتح حساب أفراد أو مهنيين لدى CPA',
          fr: 'Ouverture de compte particulier ou professionnel',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية، شهادة ميلاد، شهادة إقامة حديثة، وكشف راتب أو سجل تجاري/بطاقة مهنية للتجار والحرفيين',
          fr: 'CNIBE biométrique, acte de naissance, justificatif de domicile, fiche de paie ou registre de commerce/carte professionnelle',
        },
      },
      {
        label: {
          ar: 'تفعيل CPA E-Banking وMobile CPA وWIMPAY',
          fr: 'Activation E-Banking, Mobile CPA & WIMPAY',
        },
        value: {
          ar: 'تقديم طلب الاشتراك في الصيرفة عن بعد داخل الوكالة الموطنة وتوثيق رقم الهاتف المحمول لتفعيل رموز OTP والدفع بالرمز QR',
          fr: 'Adhésion gratuite en agence et enregistrement du numéro mobile pour recevoir les identifiants, codes OTP et lier WIMPAY CPA',
        },
      },
      {
        label: {
          ar: 'طلب بطاقة CIB أو Mastercard الدولية',
          fr: 'Commande des cartes CIB & Mastercard CPA',
        },
        value: {
          ar: 'حساب نشط بالدينار لبطاقة CIB الوطنية أو حساب بالعملة الصعبة مع الإيداع الأدنى المطلوب لبطاقة Mastercard الدولية',
          fr: 'Compte DZD actif pour la carte CIB nationale ou compte devises avec provision minimale pour la carte Mastercard internationale',
        },
      },
      {
        label: {
          ar: 'مركز الاتصال والبريد الإلكتروني الرسمي',
          fr: 'Support client & canaux de réclamation',
        },
        value: {
          ar: 'الرقم المختصر 3318 أو 021.63.57.12 — البريد الإلكتروني contact@cpa-bank.dz أو cpa@cpa-bank.dz',
          fr: 'Numéro court 3318 / 021.63.57.12 — E-mail contact@cpa-bank.dz ou cpa@cpa-bank.dz',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أستخدم تطبيق WIMPAY CPA للدفع عبر الهاتف؟',
          fr: 'Comment utiliser l’application WIMPAY CPA ?',
        },
        answer: {
          ar: 'بعد تفعيل خدمة الصيرفة الرقمية لدى وكالتك، حمل تطبيق WIMPAY CPA واربطه بحسابك البنكي بالرقم المسجل، لتتمكن من مسح رمز QR لدى التجار أو إرسال تحويل فوري من حساب إلى حساب.',
          fr: 'Après adhésion à la banque à distance en agence, téléchargez WIMPAY CPA et associez votre compte via votre numéro mobile pour régler par QR code ou virer de compte à compte.',
        },
      },
      {
        question: {
          ar: 'هل يصدر القرض الشعبي الجزائري بطاقات Mastercard إلى جانب CIB؟',
          fr: 'Le CPA propose-t-il des cartes Mastercard internationales en plus de la CIB ?',
        },
        answer: {
          ar: 'نعم، يصدر CPA بطاقة CIB الوطنية للتعاملات المحلية وبطاقات Mastercard الدولية المرتبطة بحسابات العملة الصعبة وفق الضوابط الموضحة في صفحة النقديات cpa-bank.dz/index.php/ar/monetique.',
          fr: 'Oui, le CPA émet la carte CIB pour le réseau national et des cartes Mastercard internationales adossées aux comptes en devises, détaillées sur la page Monétique.',
        },
      },
      {
        question: {
          ar: 'هل يوفر CPA صيغ تمويل متوافقة مع الشريعة الإسلامية؟',
          fr: 'La finance islamique est-elle disponible au Crédit Populaire d’Algérie ?',
        },
        answer: {
          ar: 'نعم، تشمل نافذة الصيرفة الإسلامية لدى CPA تمويلات المرابحة العقارية والاستهلاكية وحسابات الادخار والاستثمار الإسلامي عبر الوكالات المجهزة الموضحة في صفحة الوكالات.',
          fr: 'Oui, les guichets de finance islamique du CPA proposent la Mourabaha immobilière et consommation ainsi que des comptes d’épargne et de placement islamiques.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع دعم القرض الشعبي الجزائري عند مشكلة في الحساب أو البطاقة؟',
          fr: 'Comment joindre l’assistance CPA en cas d’incident sur compte ou carte ?',
        },
        answer: {
          ar: 'يمكنك الاتصال بالرقم المختصر 3318 أو الرقم 021.63.57.12، أو مراسلة contact@cpa-bank.dz وcpa@cpa-bank.dz أو تعبئة استمارة التواصل على الموقع.',
          fr: 'Appelez le 3318 ou le 021.63.57.12, écrivez à contact@cpa-bank.dz / cpa@cpa-bank.dz ou soumettez votre requête sur le formulaire officiel.',
        },
      },
    ],
  },

  // 16. ebanking.algerie.natixis
  {
    id: 'ebanking.algerie.natixis',
    slug: 'ebanking.algerie.natixis',
    name: {
      ar: 'ناتيكسيس الجزائر (Natixis Algérie)',
      fr: 'Natixis Algérie (Banque des Entreprises & Digital)',
    },
    acronym: 'NATIXIS',
    type: 'private',
    description: {
      ar: 'الدليل التعريفي لبنك ناتيكسيس الجزائر (Natixis Algérie): البوابة الرسمية وبوابة الصيرفة الإلكترونية eBanking للمؤسسات والزبائن، حلول التمويل والتجارة الدولية وإدارة النقد، بطاقات الدفع، ومعلومات التحقق من الروابط المعتمدة عبر الوكالة أو البوابة الرئيسية.',
      fr: 'Guide de référence sur Natixis Algérie : portail institutionnel officiel et accès eBanking pour la gestion à distance des comptes, paiements électroniques, financements d’entreprises, commerce extérieur et recommandations pour vérifier les liens de services via les canaux officiels.',
    },
    website: 'https://www.algerie.natixis.com/',
    eBankingUrl: 'https://ebanking.algerie.natixis.com/',
    swiftCode: 'NATXDZAL',
    headquarters: {
      ar: 'باب الزوار، الجزائر العاصمة',
      fr: 'Bab Ezzouar, Alger',
    },
    services: [
      {
        ar: 'البوابة المؤسساتية الرسمية ناتيكسيس الجزائر',
        fr: 'Portail Institutionnel Officiel Natixis Algérie',
        url: 'https://www.algerie.natixis.com/',
        summary: {
          ar: 'المرجع الرسمي لخدمات البنك وتحديثات الوكالات وشروط الحسابات والتحقق من أي رابط خدمة فرعي.',
          fr: 'Point d’entrée officiel pour consulter les offres, réseaux d’agences et vérifier tout lien de téléservice mis à jour.',
        },
      },
      {
        ar: 'منصة الصيرفة الإلكترونية eBanking Natixis Algérie',
        fr: 'Espace eBanking Natixis Algérie',
        url: 'https://ebanking.algerie.natixis.com/',
        summary: {
          ar: 'إدارة الحسابات البنكية عن بعد، الاطلاع على الأرصدة وكشف العمليات الأخيرة، وتنفيذ التحويلات المصرفية.',
          fr: 'Gestion à distance des comptes, suivi des soldes et derniers mouvements, et exécution des virements bancaires.',
        },
      },
      {
        ar: 'تمويل المؤسسات والتجارة الدولية وبطاقات الدفع',
        fr: 'Financement Entreprises, Trade Finance & Cartes',
        url: 'https://www.algerie.natixis.com/',
        summary: {
          ar: 'إيداع ومتابعة طلبات التمويل وخطابات الاعتماد وإدارة البطاقات البنكية والدفع الإلكتروني عبر القنوات المعتمدة.',
          fr: 'Solutions de crédit, commerce extérieur, gestion des cartes bancaires et paiement électronique via les canaux officiels.',
        },
      },
      {
        ar: 'الدعم المصرفي ومواقع الوكالات',
        fr: 'Support Client & Réseau d’Agences',
        url: 'https://www.algerie.natixis.com/',
        summary: {
          ar: 'التواصل مع مستشاري الزبائن في المقر الرئيسي بباب الزوار أو الوكالات المعتمدة عبر الهاتف 021 98 11 11.',
          fr: 'Assistance directe auprès de votre chargé d’affaires au siège de Bab Ezzouar ou au 021 98 11 11.',
        },
      },
    ],
    contactPhone: '021 98 11 11',
    quickSummary: {
      accountTypes: {
        ar: 'حسابات جارية وحسابات بالعملة الصعبة للمؤسسات والمهنيين والفئات المؤهلة، مع خدمات الخزينة والتجارة الدولية',
        fr: 'Comptes courants et comptes en devises dédiés aux entreprises, professionnels et segments éligibles',
      },
      digitalBanking: {
        ar: 'بوابة الصيرفة الإلكترونية ebanking.algerie.natixis.com وموقع algerie.natixis.com لمتابعة الأرصدة والعمليات والتنبيهات',
        fr: 'Accès en ligne via ebanking.algerie.natixis.com et portail officiel algerie.natixis.com pour le suivi des comptes et opérations',
      },
      islamicWindow: {
        ar: 'مؤسسة مصرفية خاصة معتمدة من بنك الجزائر تركز على تمويل الشركات والتجارة الخارجية والخدمات الرقمية (تحقق من الروابط الفرعية عبر البوابة الرسمية)',
        fr: 'Banque privée agréée spécialisée dans l’accompagnement des entreprises et le commerce international',
      },
    },
    requirements: [
      {
        label: {
          ar: 'فتح حساب للأفراد المؤهلين أو المهنيين',
          fr: 'Ouverture de compte professionnel ou particulier éligible',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية، شهادة إقامة حديثة، إثبات دخل منتظم أو ملف نشاط مهني ومالي مستوف للشروط',
          fr: 'CNIBE biométrique, certificat de résidence récent et justificatifs de revenus ou dossier professionnel complet',
        },
      },
      {
        label: {
          ar: 'ملف حسابات الشركات والتوطين التجاري',
          fr: 'Dossier comptes entreprises & domiciliation',
        },
        value: {
          ar: 'القانون الأساسي، السجل التجاري، رقم التعريف الجبائي NIF، القوائم المالية وتفويض التوقيع لاستخدام السويفت NATXDZAL',
          fr: 'Statuts, registre de commerce, NIF, bilans financiers et spécimens de signatures pour opérer sous le SWIFT NATXDZAL',
        },
      },
      {
        label: {
          ar: 'تفعيل الصيرفة الإلكترونية eBanking بأمان',
          fr: 'Activation sécurisée du portail eBanking',
        },
        value: {
          ar: 'توقيع عقد الاشتراك في الوكالة وتلقي بيانات الدخول الأولية مع التأكد دائما من الدخول عبر النطاق الرسمي algerie.natixis.com',
          fr: 'Souscription en agence et accès exclusif via le domaine officiel vérifié algerie.natixis.com / ebanking.algerie.natixis.com',
        },
      },
      {
        label: {
          ar: 'المقر الرئيسي ومركز الاتصال الرسمي',
          fr: 'Siège social & contact officiel',
        },
        value: {
          ar: 'باب الزوار، الجزائر العاصمة — الهاتف الرسمي: 021 98 11 11 — رمز السويفت: NATXDZAL',
          fr: 'Bab Ezzouar, Alger — Téléphone : 021 98 11 11 — Code SWIFT : NATXDZAL',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أتأكد من صحة الروابط الخاصة بخدمات ناتيكسيس الجزائر؟',
          fr: 'Comment vérifier l’authenticité des liens Natixis Algérie ?',
        },
        answer: {
          ar: 'نظرا لأن بعض الروابط الفرعية قد تتغير أثناء التحديثات البنكية، ننصح دائما بالبدء من البوابة الرسمية الرئيسية algerie.natixis.com أو بوابة ebanking.algerie.natixis.com، أو الاتصال بمركز الدعم على 021 98 11 11 قبل إدخال أي بيانات حساب.',
          fr: 'Certains sous-liens pouvant évoluer lors de mises à jour, accédez toujours depuis le portail principal algerie.natixis.com ou ebanking.algerie.natixis.com, ou contactez le 021 98 11 11 en cas de doute.',
        },
      },
      {
        question: {
          ar: 'ما هي الخدمات المتوفرة عبر منصة eBanking Natixis Algérie؟',
          fr: 'Quels services propose l’espace eBanking Natixis Algérie ?',
        },
        answer: {
          ar: 'تمكن المنصة الزبائن المفعلين من الاطلاع على الأرصدة وكشف العمليات الأخيرة، تحميل كشوف الحساب، وتنفيذ التحويلات المالية ومتابعة التنبيهات البنكية عن بعد.',
          fr: 'La plateforme permet aux clients abonnés de consulter leurs soldes, visualiser les derniers mouvements, éditer les relevés et exécuter des virements en ligne.',
        },
      },
      {
        question: {
          ar: 'ما هو رمز السويفت المعتمد لبنك ناتيكسيس الجزائر؟',
          fr: 'Quel est le code SWIFT de Natixis Algérie ?',
        },
        answer: {
          ar: 'رمز السويفت الدولي لبنك ناتيكسيس الجزائر هو NATXDZAL، ويستخدم في التحويلات الدولية وعمليات التجارة الخارجية والتوطين البنكي.',
          fr: 'Le code BIC/SWIFT officiel de Natixis Algérie est NATXDZAL pour les virements internationaux et opérations de commerce extérieur.',
        },
      },
      {
        question: {
          ar: 'أين يقع المقر الرئيسي وما رقم الاتصال ببنك ناتيكسيس الجزائر؟',
          fr: 'Où se trouve le siège social et quel est le numéro de téléphone ?',
        },
        answer: {
          ar: 'يقع المقر الرئيسي في حي الأعمال بباب الزوار في الجزائر العاصمة، ويمكن التواصل مع المصرف عبر الهاتف 021 98 11 11.',
          fr: 'Le siège social est basé à Bab Ezzouar (Alger) et joignable par téléphone au 021 98 11 11.',
        },
      },
    ],
  },
];

export const batch2BankGuides: Record<string, Partial<RichGuideContent>> = {
  bea: {
    intro: {
      ar: [
        'يعد بنك الجزائر الخارجي (BEA) من أعرق وأكبر البنوك العمومية الجزائرية، وقد ارتبط تاريخيا بمرافقة قطاع الطاقة والتجارة الخارجية وتمويل المؤسسات الكبرى، بالتوازي مع تقديم باقة مصرفية واسعة للأفراد والمهنيين عبر شبكته المنتشرة في كافة ولايات الوطن.',
        'على الصعيد الرقمي، يتيح البنك بوابة الصيرفة الإلكترونية BEA E-Banking عبر الويب وتطبيق الهاتف الذكي BEA MOBILE المتوفر على نظامي أندرويد وiOS، مما يسمح للزبون بمتابعة الرصيد وكشف العمليات لحظيا وتنفيذ التحويلات البنكية بسهولة دون التوجه إلى الوكالة.',
        'كما يوفر الموقع الرسمي لبنك BEA أدوات مساعدة عملية تشمل محاكي القروض والتمويل لتقدير الأقساط الشهرية ونسب الاقتطاع، وخريطة الوكالات وموزعات النقد GAB، ونافذة الصيرفة الإسلامية المتوافقة مع أحكام الشريعة.'
      ],
      fr: [
        'La Banque Extérieure d’Algérie (BEA) figure parmi les plus importantes banques publiques du pays. Acteur historique du financement du secteur énergétique, industriel et du commerce international, elle sert également les particuliers, cadres et PME sur tout le territoire.',
        'Son dispositif digital repose sur le portail BEA E-Banking et l’application BEA MOBILE (disponible sur Google Play et App Store), offrant un accès continu pour consulter les soldes, suivre les mouvements et exécuter des virements en toute sécurité.',
        'Le site officiel met également à disposition un simulateur en ligne de crédits immobiliers et à la consommation, une carte interactive des agences et GAB ainsi qu’une rubrique complète dédiée à la finance islamique.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'فشل الدخول إلى BEA E-Banking أو تطبيق BEA MOBILE بعد التسجيل الجديد',
          fr: 'Impossible de se connecter à BEA E-Banking ou BEA MOBILE après activation',
        },
        solution: {
          ar: 'تأكد من استلام رمز التفعيل وتغيير كلمة المرور الأولية عبر البوابة ebanking.bea.dz، أو تواصل مع وكالتك أو البريد contact@bea.dz لإعادة ضبط الحساب.',
          fr: 'Finalisez la première connexion sur ebanking.bea.dz pour modifier le mot de passe provisoire, ou demandez une réinitialisation auprès de votre agence ou via contact@bea.dz.',
        },
      },
      {
        issue: {
          ar: 'الاستعلام عن أقرب مكتب صيرفة إسلامية تابع لبنك BEA',
          fr: 'Trouver un guichet de finance islamique BEA dans votre wilaya',
        },
        solution: {
          ar: 'استخدم محدد المواقع التفاعلي bea.dz/index.php/agences مع مراجعة تفاصيل المنتجات على bea.dz/index.php/finance-islamique قبل الحضور.',
          fr: 'Consultez la carte officielle bea.dz/index.php/agences et les conditions des offres sur bea.dz/index.php/finance-islamique.',
        },
      },
      {
        issue: {
          ar: 'حاجة الشركة إلى تأكيد معاملة توطين أو تحويل دولي عبر السويفت BEXADZAL',
          fr: 'Suivi d’une domiciliation ou opération internationale sous SWIFT BEXADZAL',
        },
        solution: {
          ar: 'جهز مرجع العملية والفاتورة الموطنة وتواصل مباشرة مع خلية التجارة الخارجية في وكالتك أو عبر استمارة bea.dz/index.php/contact.',
          fr: 'Préparez la référence de domiciliation et contactez le service commerce extérieur de votre agence domiciliataire ou via bea.dz/index.php/contact.',
        },
      },
    ],
    extraFaqs: [],
  },

  bna: {
    intro: {
      ar: [
        'يمثل البنك الوطني الجزائري (BNA) أول بنك تجاري وطني في الجزائر وأحد أوسعها انتشارا، ويجمع في خدماته بين مواكبة الشركات والمؤسسات الاقتصادية في التمويل والتجارة الخارجية وبين تقديم خدمات ميسرة للأفراد في الادخار، القروض العقارية، والصيرفة الإسلامية.',
        'أطلق البنك منظومة رقمية متكاملة تجمع بين بوابة الويب BNA e-Banking وتطبيق الصيرفة الذكية BNAtic لإدارة الحسابات بالدينار والعملة الصعبة وطلب البطاقات ودفاتر الصكوك، إلى جانب تطبيق الدفع الفوري عبر الهاتف وتقنية رمز الاستجابة السريعة QR المسمى Wimpay BNA لتسديد فواتير سونلغاز واتصالات الجزائر والمشتريات لدى التجار.',
        'وتتكامل هذه الخدمات مع محاكي القروض الإلكتروني لتقدير الأقساط بدقة، وخريطة البحث عن الوكالات وموزعات النقد GAB وشبابيك الصيرفة الإسلامية عبر كافة الولايات.'
      ],
      fr: [
        'Première banque commerciale créée en Algérie, la Banque Nationale d’Algérie (BNA) accompagne aussi bien les grands projets économiques et PME que les ménages grâce à un réseau dense d’agences dans les 58 wilayas.',
        'L’écosystème numérique de la BNA associe le portail web BNA e-Banking, l’application mobile BNAtic (suivi de comptes DZD/devises, virements, commande de chéquiers/cartes) et l’application Wimpay BNA pour le paiement par QR code et le règlement des factures Sonelgaz et Algérie Télécom.',
        'Le site officiel propose en outre des simulateurs en ligne de crédits et financements islamiques, un espace monétique CIB/Visa et un localisateur d’agences et distributeurs GAB.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'تعذر ربط الحساب بتطبيق Wimpay BNA للدفع عبر QR',
          fr: 'Échec d’association du compte sur Wimpay BNA',
        },
        solution: {
          ar: 'تأكد من أن رقم الهاتف المسجل في الوكالة البنكية يطابق شريحة الهاتف المستخدمة في تطبيق Wimpay وتأكد من تفعيل خدمة BNA e-Banking مسبقا.',
          fr: 'Vérifiez que le numéro de mobile utilisé sur Wimpay BNA correspond exactement à celui enregistré dans votre agence BNA et que le service e-Banking est actif.',
        },
      },
      {
        issue: {
          ar: 'تأخر أو عدم استلام رمز التفعيل في تطبيق BNAtic',
          fr: 'Code de validation non reçu lors de la connexion à BNAtic',
        },
        solution: {
          ar: 'تحقق من تحديث رقم الهاتف لدى مستشار الزبائن واتصل بالرقم المختصر 3306 أو 0770.20.33.06 أو راسل CEC@bna.dz عند استمرار المشكلة.',
          fr: 'Faites vérifier votre numéro de mobile en agence ou contactez le 3306 / 0770.20.33.06 ou CEC@bna.dz pour assistance.',
        },
      },
      {
        issue: {
          ar: 'رغبة الزبون في تفعيل الشراء عبر الإنترنت على بطاقة CIB أو Visa',
          fr: 'Activer le e-paiement sur une carte CIB ou Visa BNA',
        },
        solution: {
          ar: 'راجع شروط التفعيل في صفحة bna.dz/ar/monetique واطلب تفعيل كلمة المرور المؤقتة للإنترنت عبر الوكالة أو الشبابيك الإلكترونية المعتمدة.',
          fr: 'Consultez bna.dz/ar/monetique et assurez-vous auprès de votre agence que la fonctionnalité 3D Secure / mot de passe e-paiement est activée.',
        },
      },
    ],
    extraFaqs: [],
  },

  bnh: {
    intro: {
      ar: [
        'تأسس البنك الوطني للإسكان (BNH) ليكون الشريك المالي الأول لقطاع السكن والعقار في الجزائر، حيث يتولى تمويل البرامج السكنية الكبرى، مرافقة المرقين العقاريين ومقاولي البناء والأشغال العمومية، وتوفير القروض الفردية لاقتناء أو بناء أو تهيئة وترميم المساكن.',
        'إلى جانب القروض العقارية، يفتح البنك أبوابه للأفراد لإيداع أموالهم عبر الحسابات الجارية وحسابات الصكوك، دفاتر التوفير والادخار السكني، والودائع لأجل DAT ذات المردود المالي، مع إصدار بطاقات الدفع والسحب الوطنية CIB.',
        'كما اعتمد البنك اتفاقية حديثة للدفع الإلكتروني تتيح للمستفيدين تسديد مستحقات وأقساط السكن عن بعد عبر تطبيق بريدي موب والبطاقات البنكية الوطنية، مدعوما بفضاء رقمي للاستفسارات والبحث عن الوكالات عبر الولايات.'
      ],
      fr: [
        'Institution publique dédiée au secteur de l’habitat, la Banque Nationale de l’Habitat (BNH) finance les programmes nationaux de logement, accompagne les promoteurs immobiliers et entreprises BTP, et octroie des crédits aux particuliers pour acheter, construire ou réhabiliter leur logement.',
        'Son offre particuliers comprend également les comptes courants et chèques, les livrets d’épargne logement, les dépôts à terme DAT rémunérés ainsi que la carte interbancaire CIB.',
        'La BNH facilite en parallèle la dématérialisation des règlements via la convention nationale permettant de payer les échéances de logement à distance par BaridiMob et carte CIB.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم وضوح الوثائق المطلوبة بين شراء سكن جاهز أو البناء الذاتي',
          fr: 'Différence de dossier entre achat de logement et auto-construction',
        },
        solution: {
          ar: 'راجع تفاصيل كل صيغة في bnh.dz/acquisition-dun-bien-immobilier؛ فالبناء الذاتي يتطلب عقد ملكية القطعة الأرضية ورخصة البناء والكشف الكمي والتقديري للأشغال.',
          fr: 'Consultez bnh.dz/acquisition-dun-bien-immobilier : l’auto-construction exige l’acte de propriété du terrain, le permis de construire et le devis estimatif.',
        },
      },
      {
        issue: {
          ar: 'فشل تسديد قسط السكن عبر تطبيق بريدي موب أو بطاقة CIB',
          fr: 'Incident lors du règlement d’une échéance de logement via BaridiMob ou CIB',
        },
        solution: {
          ar: 'تأكد من إدخال المرجع الدقيق لملف المستفيد وتوفر الرصيد والحد الأقصى للسحب اليومي، ثم احتفظ بوصل العملية أو تواصل مع serviceclient@bnh.dz.',
          fr: 'Vérifiez la référence exacte du contrat bénéficiaire ainsi que le plafond de la carte, conservez le reçu et contactez serviceclient@bnh.dz si besoin.',
        },
      },
      {
        issue: {
          ar: 'الاستعلام عن حالة ملف مرق عقاري أو قرض سكني قيد الدراسة',
          fr: 'Suivre l’avancement d’un dossier promoteur ou crédit habitat',
        },
        solution: {
          ar: 'تواصل مع الوكالة المودع لديها الملف (عبر دليل bnh.dz/liste-des-agences) أو اتصل بالمقر الرئيسي بباب الزوار على 021.98.02.00.',
          fr: 'Adressez-vous à l’agence dépositaire (annuaire bnh.dz/liste-des-agences) ou appelez le siège au 021.98.02.00.',
        },
      },
    ],
    extraFaqs: [],
  },

  'business.algeria.hsbc': {
    intro: {
      ar: [
        'ينشط بنك إتش إس بي سي الجزائر (HSBC Algeria) من مقره الرئيسي بأورينتال بيزنس بارك في حي الأعمال بباب الزوار بالجزائر العاصمة، مخصصا خدماته للشركات الكبرى، المجموعات متعددة الجنسيات، والمؤسسات ذات النشاط التجاري والمالي الدولي.',
        'تربط المنصة الرقمية المؤسساتية HSBCnet وتطبيق HSBCnet Mobile إدارات الخزينة والمالية في الشركات بشبكة HSBC العالمية، لتتيح مراقبة الأرصدة اللحظية، توقيع وتفويض التحويلات المحلية والدولية، وتوليد رموز الأمان الرقمية Digital Token بأعلى مستويات التشفير.',
        'كما تغطي حلول البنك محاور رئيسية تشمل تمويل التجارة الدولية وسلاسل الإمداد (GTRF) عبر الاعتمادات المستندية وخطابات الضمان، وإدارة السيولة النقدية والمدفوعات المجمعة للرواتب والموردين (GLCM)، وأسواق الصرف والتحوط.'
      ],
      fr: [
        'Implanté à Oriental Business Park dans le quartier d’affaires de Bab Ezzouar à Alger, HSBC Algérie accompagne les grandes entreprises, filiales multinationales et acteurs majeurs du commerce international.',
        'Sa plateforme globale HSBCnet et l’application HSBCnet Mobile permettent aux directions financières de piloter leurs soldes en temps réel, de valider les paiements locaux et internationaux et de sécuriser les accès grâce au générateur Digital Token.',
        'L’établissement déploie une expertise spécialisée en Trade Finance et chaînes d’approvisionnement (GTRF), en gestion centralisée des liquidités et paiements de masse (GLCM), ainsi qu’en opérations de change et de couverture.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'تعطل رمز الأمان الرقمي Digital Token على تطبيق HSBCnet Mobile',
          fr: 'Problème avec le Digital Token sur HSBCnet Mobile',
        },
        solution: {
          ar: 'تواصل مع مسؤول النظام داخل شركتك أو مكتب المساعدة التقني المخصص لمستخدمي HSBCnet في الجزائر لإعادة مزامنة الجهاز.',
          fr: 'Contactez l’administrateur système de votre entreprise ou le Helpdesk HSBCnet Algérie pour réinitialiser et resynchroniser votre jeton numérique.',
        },
      },
      {
        issue: {
          ar: 'تأخر معالجة اعتماد مستندي LC أو عملية توطين عبر السويفت BBMEDZAL',
          fr: 'Suivi d’un crédit documentaire LC ou domiciliation sous SWIFT BBMEDZAL',
        },
        solution: {
          ar: 'أرسل مرجع المعاملة إلى مستشار التجارة الدولية (GTRF) المخصص لشركتك أو اتصل بالمقر الرئيسي على 021.98.52.00.',
          fr: 'Transmettez la référence documentaire à votre conseiller Trade Finance GTRF dédié ou appelez le siège au 021.98.52.00.',
        },
      },
      {
        issue: {
          ar: 'طلب فتح حساب شخصي في بنك HSBC الجزائر',
          fr: 'Demande d’ouverture de compte particulier chez HSBC Algérie',
        },
        solution: {
          ar: 'يقتصر نشاط HSBC الجزائر على قطاع الشركات والمؤسسات؛ للأفراد يرجى التوجه إلى البنوك التجارية الشاملة مثل AGB أو SGA أو Arab Bank أو البنوك العمومية.',
          fr: 'HSBC Algérie opère exclusivement sur le segment Corporate & Business ; pour un compte personnel, orientez-vous vers les banques universelles agréées.',
        },
      },
    ],
    extraFaqs: [],
  },

  citigroup: {
    intro: {
      ar: [
        'يعد سيتي بنك الجزائر (Citibank N.A. Algeria) أول بنك أجنبي يحصل على الاعتماد في الجزائر، ويمارس نشاطه انطلاقا من عمارة القصر بحي الأعمال في باب الزوار بالجزائر العاصمة لخدمة الشركات متعددة الجنسيات، المؤسسات الوطنية الكبرى، والهيئات الحكومية والبنوك المراسلة.',
        'يوفر البنك لزبائنه من المؤسسات منصة CitiDirect الرقمية العالمية لإدارة الحسابات والتحويلات المحلية والدولية ومتابعة السيولة والتدفقات النقدية اللحظية، مدعومة بشبكة Citigroup الممتدة عبر أكثر من 90 دولة حول العالم.',
        'وتغطي خدمات البنك حلول الخزينة والتجارة الدولية TTS، تمويل المشاريع الكبرى والقروض المشتركة في قطاعات الطاقة والصناعة والبنية التحتية والطاقات المتجددة، وأدوات التحوط وإدارة العملات الأجنبية، ومعالجة الاعتمادات المستندية.'
      ],
      fr: [
        'Première banque étrangère agréée en Algérie, Citibank N.A. Algérie opère depuis l’Immeuble Le Ksar à Bab Ezzouar (Alger) auprès des groupes multinationaux, grandes entreprises nationales, institutions publiques et banques correspondantes.',
        'Grâce à la plateforme mondiale CitiDirect et au réseau Citigroup présent dans plus de 90 pays, les directions financières bénéficient d’un pilotage centralisé de leurs liquidités, paiements domestiques et règlements internationaux en devises.',
        'L’établissement intervient dans les solutions Trésorerie & Trade (TTS), le financement structuré et syndiqué des secteurs de l’énergie, de l’industrie et des infrastructures, la finance verte ainsi que la couverture des risques de change.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'تحديد رمز السويفت الصحيح بين التحويلات العامة والاعتمادات المستندية',
          fr: 'Choisir le bon code SWIFT entre CITIDZAL et CITIDZALTRD',
        },
        solution: {
          ar: 'استعمل CITIDZAL للتحويلات المصرفية والعمليات العامة للمؤسسة، واستعمل CITIDZALTRD لرسائل الاعتمادات المستندية والتحصيلات التجارية.',
          fr: 'Utilisez CITIDZAL pour les virements généraux de trésorerie et CITIDZALTRD pour les opérations documentaires et lettres de crédit.',
        },
      },
      {
        issue: {
          ar: 'مشكلة صلاحيات أو توقيع إلكتروني داخل منصة CitiDirect',
          fr: 'Incident d’habilitation ou de signature sur CitiDirect',
        },
        solution: {
          ar: 'تواصل مع مسؤول الأمن الإداري في شركتك (Security Manager) ومستشار العلاقة المؤسساتية لدى سيتي بنك الجزائر أو عبر الهاتف 021.91.34.00.',
          fr: 'Sollicitez le Security Manager interne de votre société ainsi que votre chargé de relation Citibank Algérie au 021.91.34.00.',
        },
      },
      {
        issue: {
          ar: 'التحقق من إمكانية فتح حساب للأفراد في سيتي بنك الجزائر',
          fr: 'Éligibilité des particuliers aux comptes Citibank Algérie',
        },
        solution: {
          ar: 'يركز الفرع حصرا على خدمات الشركات الكبرى والمؤسسات؛ ولا تتوفر شبابيك تجزئة للأفراد.',
          fr: 'La succursale se consacre exclusivement à la clientèle institutionnelle et aux grandes entreprises, sans activité de banque de détail.',
        },
      },
    ],
    extraFaqs: [],
  },

  cnep: {
    intro: {
      ar: [
        'يرتبط اسم الصندوق الوطني للتوفير والاحتياط (كناب بنك CNEP Banque) في الذاكرة الاقتصادية والاجتماعية الجزائرية بالادخار العائلي وبتمويل السكن والعقار، قبل أن يوسع نطاق خدماته ليشمل الصيرفة الشاملة للأفراد والمهنيين والمؤسسات عبر شبكة واسعة من الوكالات في جميع الولايات.',
        'أطلق كناب بنك حزمة خدمات رقمية متطورة تضم بوابة CNEP e-Banking، تطبيق CNEP Connect لإدارة الحسابات ودفاتر التوفير وتتبع الأقساط والقروض عبر أندرويد وآيفون، وتطبيق الدفع الفوري بالرمز QR المسمى WIMPAY CNEP، إضافة إلى بوابة CNEP Market المخصصة لعرض وحجز السكنات والمحلات والمكاتب عبر الإنترنت.',
        'كما يتيح البنك محاكي القروض والتمويلات العقارية لاحتساب الأقساط قبل إيداع الملف، ويدير شبابيك الصيرفة الإسلامية لتمويل العقار والتجهيز بصيغ المرابحة والإجارة التمليكية وحسابات الاستثمار الشرعية.'
      ],
      fr: [
        'Acteur emblématique de l’épargne des ménages et du financement de l’habitat en Algérie, la Caisse Nationale d’Épargne et de Prévoyance (CNEP Banque) propose aujourd’hui une offre bancaire universelle à travers son vaste réseau d’agences.',
        'Sa transformation digitale s’appuie sur le portail CNEP e-Banking, l’application mobile CNEP Connect (gestion de comptes, livrets et suivi des crédits), le portefeuille QR WIMPAY CNEP sur Android et iOS, ainsi que le portail immobilier CNEP Market pour réserver logements et locaux en ligne.',
        'La banque met aussi en ligne un simulateur de prêts immobiliers et développe ses guichets de finance islamique (Mourabaha immobilière et d’équipement, Ijara Tamlikia et épargne participative).'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم ظهور دفتر التوفير أو جدول القرض في تطبيق CNEP Connect',
          fr: 'Livret d’épargne ou crédit non visible sur CNEP Connect',
        },
        solution: {
          ar: 'اطلب من وكالتك ربط جميع حساباتك ودفاترك بنفس ملف المشترك في CNEP e-Banking، أو تواصل مع خلية خدمة الزبائن على 3315 أو communication@cnepbanque.dz.',
          fr: 'Demandez à votre agence de rattacher l’ensemble de vos comptes et livrets à votre profil CNEP e-Banking ou contactez le 3315 / communication@cnepbanque.dz.',
        },
      },
      {
        issue: {
          ar: 'الاستعلام عن توفر شقق أو محلات للحجز في منصة CNEP Market',
          fr: 'Vérifier la disponibilité des biens sur CNEP Market',
        },
        solution: {
          ar: 'تصفح العروض المحينة حسب الولاية مباشرة على cnepmarket.cnepbanque.dz وتحقق من آجال إيداع ملف التمويل أو التخصيص.',
          fr: 'Consultez les offres actualisées par wilaya sur cnepmarket.cnepbanque.dz et vérifiez les modalités de réservation en ligne.',
        },
      },
      {
        issue: {
          ar: 'تعطل الدفع أو التحويل عبر تطبيق WIMPAY CNEP',
          fr: 'Échec de paiement QR ou de virement sur WIMPAY CNEP',
        },
        solution: {
          ar: 'تحقق من تحديث التطبيق لأحدث إصدار من Google Play أو App Store وتأكد من كفاية الرصيد وربط الحساب الجاري بالخدمة.',
          fr: 'Mettez à jour WIMPAY CNEP sur Google Play ou App Store et vérifiez que votre compte courant est bien rattaché avec un solde suffisant.',
        },
      },
    ],
    extraFaqs: [],
  },

  cpa: {
    intro: {
      ar: [
        'يعد القرض الشعبي الجزائري (CPA) أحد أعمدة القطاع المصرفي العمومي في الجزائر، ويشتهر بخدماته الموجهة للمؤسسات الصغيرة والمتوسطة، الحرفيين، التجار، المهن الحرة، والأفراد، عبر شبكة واسعة من الوكالات وموزعات النقد GAB.',
        'على مستوى الرقمنة، يجمع البنك بين بوابة الويب CPA E-Banking وتطبيق الهاتف Mobile CPA لمتابعة الحسابات وتنفيذ التحويلات وطلب كشف الهوية البنكية RIB، وتطبيق الدفع الفوري WIMPAY CPA الذي يسهل الدفع من حساب إلى حساب وعبر مسح رموز QR لدى التجار.',
        'كما يتيح CPA باقة بطاقات الدفع المحلية CIB والبطاقات الدولية Mastercard وخدمة الدفع عبر الإنترنت، إلى جانب نافذة متنامية للصيرفة الإسلامية تشمل المرابحة العقارية والاستهلاكية وحسابات الادخار والاستثمار الشرعية.'
      ],
      fr: [
        'Banque publique de référence pour l’accompagnement des PME/PMI, artisans, professions libérales, commerçants et particuliers, le Crédit Populaire d’Algérie (CPA) s’appuie sur un large réseau territorial et des services numériques complets.',
        'Les clients disposent du portail CPA E-Banking, de l’application Mobile CPA (suivi de comptes, virements et édition de RIB) et de l’application de paiement instantané WIMPAY CPA pour régler leurs achats sans contact par QR code.',
        'Le CPA émet également les cartes CIB nationales et Mastercard internationales pour le e-paiement et développe des guichets de finance islamique couvrant la Mourabaha immobilière, la consommation et l’épargne participative.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'الحاجة إلى رقم RIB عاجل دون التمكن من زيارة الوكالة',
          fr: 'Obtenir rapidement son RIB CPA sans se déplacer en agence',
        },
        solution: {
          ar: 'ادخل إلى بوابة ebanking.cpa-bank.dz أو تطبيق Mobile CPA لتحميل كشف الهوية البنكية RIB بصيغة رقمية فورية.',
          fr: 'Connectez-vous à ebanking.cpa-bank.dz ou à l’application Mobile CPA pour générer et télécharger votre RIB à 20 chiffres.',
        },
      },
      {
        issue: {
          ar: 'توقف بطاقة CIB أو Mastercard عند الدفع عبر الإنترنت أو TPE',
          fr: 'Refus d’une carte CIB ou Mastercard CPA en ligne ou sur TPE',
        },
        solution: {
          ar: 'تأكد من تفعيل خدمة الدفع عبر الإنترنت ومن سقف السحب اليومي، أو اتصل بالرقم المختصر 3318 أو راسل contact@cpa-bank.dz.',
          fr: 'Vérifiez l’activation du e-paiement et les plafonds de la carte auprès de votre agence ou en appelant le 3318 / contact@cpa-bank.dz.',
        },
      },
      {
        issue: {
          ar: 'تحديد الوكالات المجهزة بشباك الصيرفة الإسلامية للقرض الشعبي الجزائري',
          fr: 'Localiser une agence CPA proposant la finance islamique',
        },
        solution: {
          ar: 'استخدم محدد المواقع الرسمي cpa-bank.dz/index.php/ar/nos-agences واطلع على المنتجات الشرعية في صفحة الصيرفة الإسلامية.',
          fr: 'Consultez l’annuaire officiel cpa-bank.dz/index.php/ar/nos-agences et la rubrique Finance Islamique du site CPA.',
        },
      },
    ],
    extraFaqs: [],
  },

  'ebanking.algerie.natixis': {
    intro: {
      ar: [
        'ينشط بنك ناتيكسيس الجزائر (Natixis Algérie) انطلاقا من مقره في حي الأعمال بباب الزوار بالجزائر العاصمة كفرع مصرفي دولي مرخص من بنك الجزائر، ويركز أساسا على مرافقة المؤسسات الاقتصادية والشركات التجارية والصناعية وتقديم خدمات إدارة الخزينة والتجارة الدولية والتمويل.',
        'يوفر المصرف للزبائن بوابة الصيرفة الإلكترونية ebanking.algerie.natixis.com وموقعه المؤسساتي الرئيسي algerie.natixis.com لمتابعة الأرصدة، استعراض العمليات الأخيرة، إدارة التحويلات، ومتابعة ملفات التمويل والبطاقات البنكية.',
        'نظرا لأن عددا من الروابط الفرعية لبعض الخدمات قيد المراجعة والتأكيد التقني، ينصح دائما بالولوج عبر البوابة الرئيسية الرسمية algerie.natixis.com أو بوابة الصيرفة الإلكترونية المعتمدة أو الاتصال مباشرة بالهاتف 021 98 11 11 للحصول على الروابط والتوجيهات المحدثة.'
      ],
      fr: [
        'Filiale bancaire agréée par la Banque d’Algérie et basée à Bab Ezzouar à Alger, Natixis Algérie accompagne principalement les entreprises, opérateurs économiques et clients éligibles dans le financement, la gestion de trésorerie et le commerce international.',
        'Ses services numériques s’appuient sur le portail institutionnel algerie.natixis.com et l’espace ebanking.algerie.natixis.com permettant la consultation à distance des soldes, le suivi des opérations, les paiements électroniques et la gestion des financements.',
        'Certains sous-liens de services faisant l’objet de mises à jour périodiques, il est recommandé de toujours passer par le portail officiel algerie.natixis.com ou de joindre l’assistance au 021 98 11 11 avant toute démarche en ligne.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'توقف رابط فرعي أو ظهور تنبيه مراجعة الروابط لخدمات ناتيكسيس الجزائر',
          fr: 'Sous-lien indisponible ou en cours de vérification sur Natixis Algérie',
        },
        solution: {
          ar: 'اعتمد دائما على البوابة الرسمية الرئيسية algerie.natixis.com أو بوابة ebanking.algerie.natixis.com، وتأكد هاتفيا من الوكالة على الرقم 021 98 11 11.',
          fr: 'Accédez exclusivement via algerie.natixis.com ou ebanking.algerie.natixis.com et confirmez tout nouveau lien auprès du 021 98 11 11.',
        },
      },
      {
        issue: {
          ar: 'استعادة بيانات الدخول إلى منصة eBanking بعد نسيان كلمة المرور',
          fr: 'Mot de passe oublié ou accès bloqué sur eBanking Natixis Algérie',
        },
        solution: {
          ar: 'اتصل بمكلف الحسابات أو مركز الدعم على الرقم 021 98 11 11 لإعادة إصدار كلمة المرور المؤقتة وتوثيق رقم الهاتف المرتبط.',
          fr: 'Contactez votre chargé d’affaires ou le support au 021 98 11 11 pour réinitialiser vos accès et vérifier le numéro de téléphone associé.',
        },
      },
      {
        issue: {
          ar: 'تتبع تحويل دولي أو توطين بنكي باستخدام رمز السويفت NATXDZAL',
          fr: 'Suivi d’un virement international ou domiciliation sous SWIFT NATXDZAL',
        },
        solution: {
          ar: 'زود الوكالة بالمرجع البنكي والفاتورة الموطنة وتأكد من مطابقة رمز السويفت NATXDZAL في أوامر الدفع الواردة من المراسل الأجنبي.',
          fr: 'Présentez la référence SWIFT et les pièces de domiciliation à votre agence en vérifiant que le code BIC utilisé est bien NATXDZAL.',
        },
      },
    ],
    extraFaqs: [],
  },
};
