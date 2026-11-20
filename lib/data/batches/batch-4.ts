import { SectorItem, RichGuideContent } from '../../types';

export const batch4Sectors: SectorItem[] = [
  // 25. facteur
  {
    id: 'facteur',
    slug: 'facteur',
    category: 'energy_water',
    name: {
      ar: 'بوابة تسديد الفواتير الإلكترونية (الكهرباء والغاز والمياه والاتصالات)',
      fr: 'Portail Unifié de Paiement des Factures (Énergie, Eau & Télécoms)',
    },
    acronym: 'FACTURE',
    ministry: {
      ar: 'قطاعات الطاقة والمياه والبريد والاتصالات',
      fr: 'Secteurs Énergie, Ressources en Eau & Télécommunications',
    },
    description: {
      ar: 'الدليل الرسمي الموحد لتسديد فواتير الكهرباء والغاز (سونلغاز)، فواتير المياه والتطهير (الجزائرية للمياه ADE، سيال SEAAL، سيوور SEOR)، وفواتير الهاتف والإنترنت عبر البطاقة الذهبية وCIB وتطبيق بريدي موب.',
      fr: "Guide unifié pour régler en ligne vos factures d'électricité et de gaz (Sonelgaz), d'eau potable et d'assainissement (ADE, SEAAL, SEOR) ainsi que vos abonnements télécoms via carte Edahabia, CIB ou BaridiMob.",
    },
    officialUrl: 'https://epayement.elit.dz/payementFacture.xhtml',
    portalUrl: 'https://fatourati.seaal.dz/',
    iconName: 'FileText',
    isPopular: false,
    services: [
      {
        id: 'facteur-srv-1',
        title: {
          ar: 'دفع فاتورة الكهرباء والغاز (سونلغاز ELIT)',
          fr: 'Paiement Facture Électricité & Gaz (Sonelgaz ELIT)',
        },
        description: {
          ar: 'المنصة الرسمية لسونلغاز لتسديد الفواتير الفصلية إلكترونيا عبر إدخال مرجع الفاتورة ومفتاح التحقق بالبطاقة الذهبية أو CIB.',
          fr: 'Portail officiel de Sonelgaz permettant de régler vos factures trimestrielles par référence de facture via Edahabia ou CIB.',
        },
        url: 'https://epayement.elit.dz/payementFacture.xhtml',
        isOnline: true,
      },
      {
        id: 'facteur-srv-2',
        title: {
          ar: 'دفع فاتورة المياه — الجزائرية للمياه (ADE)',
          fr: 'Paiement Facture Eau — Algérienne des Eaux (ADE)',
        },
        description: {
          ar: 'الخدمة الإلكترونية للجزائرية للمياه للاطلاع على الرصيد ودفع مستحقات استهلاك المياه في الولايات التابعة لـ ADE.',
          fr: "Service de télépaiement de l'ADE pour consulter et régler les factures d'eau potable à travers les wilayas couvertes.",
        },
        url: 'https://www.ade.dz/e-paiement/',
        isOnline: true,
      },
      {
        id: 'facteur-srv-3',
        title: {
          ar: 'منصة فاتورتي — شركة سيال للمياه والتطهير (SEAAL)',
          fr: 'Plateforme Fatourati — Paiement Eau SEAAL (Alger & Tipaza)',
        },
        description: {
          ar: 'فضاء تسديد فواتير المياه والتطهير لزبائن ولايتي الجزائر وتيبازة مع إمكانية تحميل وصل الدفع الإلكتروني فورا.',
          fr: 'Guichet numérique Fatourati dédié aux abonnés de SEAAL (Alger et Tipaza) avec édition instantanée du reçu de paiement.',
        },
        url: 'https://fatourati.seaal.dz/',
        isOnline: true,
      },
      {
        id: 'facteur-srv-4',
        title: {
          ar: 'خدمات ودفع فاتورة المياه — شركة سيوور وهران (SEOR)',
          fr: 'Portail Abonnés & Factures Eau — SEOR Oran',
        },
        description: {
          ar: 'البوابة الرسمية لشركة المياه والتطهير لوهران لمتابعة الاستهلاك وتقديم الشكاوى وتسديد الفواتير عن بعد.',
          fr: "Portail de la Société des Eaux et de l'Assainissement d'Oran pour le suivi client, les réclamations et le règlement des factures.",
        },
        url: 'https://www.seor.dz/',
        isOnline: true,
      },
      {
        id: 'facteur-srv-5',
        title: {
          ar: 'تعبئة الإنترنت ودفع فواتير اتصالات الجزائر',
          fr: 'Paiement Factures & Rechargement Algérie Télécom',
        },
        description: {
          ar: 'فضاء التسديد الإلكتروني لفواتير الهاتف الثابت واشتراكات الألياف البصرية والإنترنت Idoom عبر الويب دون رسوم إضافية.',
          fr: 'Espace officiel pour payer vos factures de téléphonie fixe et recharger vos abonnements Idoom ADSL / Fibre sans frais additionnels.',
        },
        url: 'https://paiement.algerietelecom.dz/',
        isOnline: true,
      },
      {
        id: 'facteur-srv-6',
        title: {
          ar: 'الدفع المجمع عبر تطبيق بريدي موب (BaridiMob)',
          fr: 'Paiement Mobile Multi-Factures via BaridiMob',
        },
        description: {
          ar: 'تسديد فواتير سونلغاز وسيال والجزائرية للمياه واتصالات الجزائر مباشرة من الهاتف الذكي عبر حساب CCP والبطاقة الذهبية.',
          fr: 'Application officielle d’Algérie Poste permettant de régler Sonelgaz, SEAAL, ADE et Algérie Télécom depuis votre smartphone.',
        },
        url: 'https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المشتركون المنزليون والتجاريون في شبكات الكهرباء والغاز والمياه والاتصالات في جميع الولايات',
        fr: "Abonnés particuliers et professionnels aux réseaux d'électricité, gaz, eau et télécoms en Algérie",
      },
      processingTime: {
        ar: 'تأكيد فوري للدفع وتحيين الرصيد إلكترونيا خلال ثوان معدودة مع إصدار وصل PDF',
        fr: 'Validation instantanée du règlement avec mise à jour immédiate et génération du reçu PDF',
      },
      fees: {
        ar: 'خدمة التسديد الإلكتروني مجانية بالكامل (0 دج عمولة إضافية على المواطن في المنصات الرسمية)',
        fr: 'Service de télépaiement gratuit (aucune commission supplémentaire appliquée sur les portails officiels)',
      },
      channel: {
        ar: 'بوابات الويب الرسمية للمؤسسات المعنية، تطبيق بريدي موب، وتطبيقات الدفع البنكي',
        fr: 'Portails web officiels des opérateurs, application BaridiMob et applications e-banking',
      },
      keyRequirement: {
        ar: 'مرجع الفاتورة أو رقم العقد الموجود على الفاتورة الورقية، وبطاقة دفع مفعلة (الذهبية أو CIB) برقم هاتف نشط',
        fr: 'Référence de facture ou code abonné, et carte Edahabia ou CIB activée pour le paiement en ligne (OTP SMS)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'مرجع الفاتورة ومفتاح التحقق',
          fr: 'Référence et clé de facture',
        },
        value: {
          ar: 'الرقم المرجعي المطبوع أعلى الفاتورة (رقم الفاتورة + المفتاح في سونلغاز أو رقم الزبون في المياه)',
          fr: 'Numéro de facture et clé de contrôle (Sonelgaz) ou référence client (ADE / SEAAL / SEOR)',
        },
      },
      {
        label: {
          ar: 'بطاقة الدفع الإلكتروني المفعلة',
          fr: 'Carte monétique activée',
        },
        value: {
          ar: 'بطاقة الذهبية (بريد الجزائر) أو بطاقة CIB سارية الصلاحية مع معرفة الرمز السري CVV2',
          fr: 'Carte Edahabia ou carte interbancaire CIB en cours de validité avec code CVV2',
        },
      },
      {
        label: {
          ar: 'رقم الهاتف لاستقبال رمز OTP',
          fr: 'Numéro mobile pour code OTP',
        },
        value: {
          ar: 'ضرورة ربط البطاقة برقم هاتف نشط لاستلام رمز التأكيد الأمني 3D Secure أثناء الدفع',
          fr: 'Téléphone associé à la carte bancaire ou CCP pour recevoir le mot de passe à usage unique (OTP)',
        },
      },
      {
        label: {
          ar: 'الاحتفاظ بوصل الدفع الرقمي',
          fr: 'Archivage du justificatif',
        },
        value: {
          ar: 'تنزيل وصل PDF أو حفظ رقم العملية المرجعي للاحتجاج به في حال تأخر التحيين المحاسبي',
          fr: 'Télécharger le reçu PDF ou noter l’identifiant de transaction en cas de vérification ultérieure',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'أين أجد مرجع الفاتورة ومفتاحها لدفع فاتورة سونلغاز إلكترونيا؟',
          fr: 'Où trouver la référence et la clé de paiement sur une facture Sonelgaz ?',
        },
        answer: {
          ar: 'تظهر بيانات الدفع الإلكتروني في الإطار العلوي أو في قسيمة الفاتورة الورقية تحت خانة رقم الفاتورة (Facture N°) ومفتاح الدفع الإلكتروني (Clé)، كما يمكنك الدفع عبر تطبيق بريدي موب بإدخال المرجع فقط.',
          fr: 'Ces identifiants figurent dans l’encadré supérieur et sur le talon de votre facture papier sous « Référence / N° Facture » et « Clé ». Sur BaridiMob, le numéro de référence principal suffit généralement.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين الجزائرية للمياه ADE وسيال SEAAL وسيوور SEOR؟',
          fr: 'Quelle différence entre ADE, SEAAL et SEOR pour payer sa facture d’eau ?',
        },
        answer: {
          ar: 'تغطي شركة SEAAL ولايتي الجزائر وتيبازة، وتغطي SEOR ولاية وهران، بينما تتولى الجزائرية للمياه ADE التوزيع والفوترة في باقي ولايات الوطن (إلى جانب شركات جهوية مثل SEACO بقسنطينة وSEATA بعنابة).',
          fr: 'SEAAL gère Alger et Tipaza, SEOR couvre la wilaya d’Oran, tandis que l’ADE assure la gestion dans la majorité des autres wilayas du pays (hors périmètres de gestion déléguée comme Constantine ou Annaba).',
        },
      },
      {
        question: {
          ar: 'تم خصم المبلغ من بطاقتي لكن الفاتورة لا تزال تظهر غير مدفوعة، ما العمل؟',
          fr: 'Le montant a été débité de ma carte mais la facture apparaît impayée, que faire ?',
        },
        answer: {
          ar: 'لا تعيد الدفع مباشرة؛ انتظر 24 ساعة للتحقق من التسوية البنكية التلقائية، وفي حال بقاء الإشكال تواصل مع الوكالة التجارية مرفوقا بوصل PDF أو رقم العملية المرجعي لاسترجاع المبلغ أو تثبيت التسديد.',
          fr: 'Ne relancez pas immédiatement un second paiement. Attendez 24 heures pour la compensation interbancaire ; si le statut reste inchangé, contactez votre agence ou votre banque avec le numéro d’autorisation de transaction.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني دفع فاتورة الكهرباء أو الماء لشخص آخر من بطاقتي الذهبية؟',
          fr: 'Puis-je régler la facture d’un proche avec ma propre carte Edahabia ou CIB ?',
        },
        answer: {
          ar: 'نعم، لا يشترط تطابق اسم صاحب البطاقة مع اسم المشترك في العداد، إذ يكفي إدخال مرجع الفاتورة الصحيح لإتمام عملية التسديد عن الغير بأمان.',
          fr: 'Oui, le titulaire de la carte de paiement n’a pas besoin d’être le titulaire du contrat d’abonnement. Il suffit de saisir correctement la référence de la facture concernée.',
        },
      },
    ],
  },

  // 26. facture_loyer
  {
    id: 'facture_loyer',
    slug: 'facture_loyer',
    category: 'housing',
    name: {
      ar: 'تسديد فواتير الإيجار السكني وأعباء التسيير العقاري (AADL / OPGI / ENPI)',
      fr: 'Paiement Électronique des Loyers & Charges (AADL, OPGI, ENPI)',
    },
    acronym: 'LOYER',
    ministry: {
      ar: 'وزارة السكن والعمران والمدينة',
      fr: "Ministère de l'Habitat, de l'Urbanisme et de la Ville",
    },
    description: {
      ar: 'الدليل الموحد لدفع إيجار سكنات البيع بالإيجار عدل (Gest-Immo)، السكنات العمومية الإيجارية (OPGI)، وأقساط وأعباء التسيير للمؤسسة الوطنية للترقية العقارية (ENPI) عبر البطاقة الذهبية وCIB وتطبيق بريدي موب.',
      fr: 'Guide pratique pour régler en ligne vos loyers AADL (Gest-Immo), les redevances locatives des OPGI et les échéances ou charges de gestion ENPI via carte Edahabia, CIB ou BaridiMob.',
    },
    officialUrl: 'https://www.aadlgestimmo.dz/epayement/View/index.php',
    portalUrl: 'https://www.opgi-alger.dz/',
    iconName: 'CreditCard',
    isPopular: false,
    services: [
      {
        id: 'facture_loyer-srv-1',
        title: {
          ar: 'تسديد إيجار سكنات عدل (AADL Gest-Immo)',
          fr: 'Paiement Loyer Mensuel AADL (Gest-Immo)',
        },
        description: {
          ar: 'المنصة الرسمية لفرع التسيير العقاري Gest-Immo لتحميل فواتير الإيجار الشهري وأعباء العمارة وتسديدها بالبطاقة الذهبية أو CIB.',
          fr: 'Portail e-paiement officiel d’AADL Gest-Immo pour consulter les avis d’échéance mensuels et régler votre loyer par carte Edahabia ou CIB.',
        },
        url: 'https://www.aadlgestimmo.dz/epayement/View/index.php',
        isOnline: true,
      },
      {
        id: 'facture_loyer-srv-2',
        title: {
          ar: 'دفع مستحقات دواوين الترقية والتسيير العقاري (OPGI)',
          fr: 'Paiement Loyers & Charges OPGI',
        },
        description: {
          ar: 'الفضاء الرقمي لمستأجري السكنات العمومية الإيجارية والمحلات التابعة لديوان الترقية والتسيير العقاري للاطلاع على الرصيد والتسديد عن بعد.',
          fr: 'Espace en ligne dédié aux locataires de logements et locaux OPGI pour consulter leur situation financière et payer à distance.',
        },
        url: 'https://www.opgi-alger.dz/',
        isOnline: true,
      },
      {
        id: 'facture_loyer-srv-3',
        title: {
          ar: 'بوابة تسديد الأقساط وأعباء سكنات ENPI',
          fr: 'Paiement Échéances & Charges Immobilières ENPI',
        },
        description: {
          ar: 'البوابة الإلكترونية للمؤسسة الوطنية للترقية العقارية لمتابعة أوامر الدفع الخاصة بسكنات LPP وLPL ودفع أعباء التسيير.',
          fr: 'Portail client de l’ENPI permettant aux acquéreurs LPP et LPL d’éditer leurs ordres de versement et de régler les frais de gestion.',
        },
        url: 'https://www.enpi-net.dz/',
        isOnline: true,
      },
      {
        id: 'facture_loyer-srv-4',
        title: {
          ar: 'دفع إيجار عدل عبر تطبيق بريدي موب (BaridiMob)',
          fr: 'Règlement du Loyer via BaridiMob',
        },
        description: {
          ar: 'تسديد الفواتير العقارية لوكالة عدل مباشرة من قسم المدفوعات في تطبيق بريدي موب باستعمال رقم المستفيد ومرجع الفاتورة.',
          fr: 'Fonctionnalité intégrée à l’application BaridiMob d’Algérie Poste pour payer les quittances AADL sans passer par les agences.',
        },
        url: 'https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc',
        isOnline: true,
      },
      {
        id: 'facture_loyer-srv-5',
        title: {
          ar: 'الربط مع تسديد فواتير الخدمات المنزلية (سونلغاز)',
          fr: 'Accès Associé : Paiement Énergie & Utilities',
        },
        description: {
          ar: 'بوابة سونلغاز المرافقة لتسديد فواتير الكهرباء والغاز للمسكن الجديد بالتزامن مع دفع الإيجار.',
          fr: 'Accès complémentaire au télépaiement Sonelgaz pour régler vos charges énergétiques résidentielles en parallèle du loyer.',
        },
        url: 'https://epayement.elit.dz/payementFacture.xhtml',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'مستفيدو سكنات عدل AADL، مستأجرو دواوين OPGI، وملاك ومكتتبو سكنات ENPI في جميع الولايات',
        fr: 'Souscripteurs AADL, locataires OPGI et acquéreurs ou résidents ENPI sur l’ensemble du territoire',
      },
      processingTime: {
        ar: 'تسوية إلكترونية فورية مع صدور وصل الإبراء الإلكتروني (Quittance) بصيغة PDF',
        fr: 'Encaissement instantané et délivrance immédiate de la quittance électronique en PDF',
      },
      fees: {
        ar: 'استعمال منصات الدفع الإلكتروني مجاني دون عمولة إضافية على مبلغ الإيجار أو الأعباء',
        fr: 'Service en ligne gratuit sans majoration sur le montant réglementaire du loyer ou des charges',
      },
      channel: {
        ar: 'منصة aadlgestimmo.dz، بوابات OPGI الولائية، موقع enpi-net.dz، وتطبيق بريدي موب',
        fr: 'Portail aadlgestimmo.dz, sites OPGI, enpi-net.dz et application BaridiMob',
      },
      keyRequirement: {
        ar: 'رمز المستفيد أو رقم العقد السكني (Code Locataire / Souscripteur) وبطاقة الذهبية أو CIB',
        fr: 'Code locataire ou souscripteur, référence de facture et carte Edahabia ou CIB activée',
      },
    },
    requirements: [
      {
        label: {
          ar: 'رقم العقد أو رمز المستفيد',
          fr: 'Code locataire / souscripteur',
        },
        value: {
          ar: 'المعرف الوحيد المطبوع على عقد الإيجار أو في وصل الشهر السابق (رقم الفاتورة ورمز الحي)',
          fr: 'Identifiant unique figurant sur le contrat de location-vente, le bail ou l’avis d’échéance',
        },
      },
      {
        label: {
          ar: 'البطاقة الذهبية أو بطاقة CIB',
          fr: 'Moyen de e-paiement valide',
        },
        value: {
          ar: 'بطاقة نقدية مفعلة للدفع عبر الإنترنت وبرصيد يغطي قيمة الإيجار وأعباء التسيير المشترك',
          fr: 'Carte Edahabia ou CIB activée avec plafond mensuel suffisant pour couvrir la mensualité',
        },
      },
      {
        label: {
          ar: 'تحديث بيانات الهاتف لدى البريد أو البنك',
          fr: 'Ligne mobile liée au compte',
        },
        value: {
          ar: 'استقبال رمز التأكيد SMS لإتمام المصادقة الثنائية أثناء الدفع على Gest-Immo أو OPGI',
          fr: 'Réception obligatoire du code SMS 3D-Secure pour valider la transaction immobilière',
        },
      },
      {
        label: {
          ar: 'أرشفة وصولات الدفع الشهرية',
          fr: 'Conservation des quittances',
        },
        value: {
          ar: 'الاحتفاظ بنسخة رقمية من كل وصل لتقديمها عند تسوية الوضعية المالية النهائية أو نقل الملكية',
          fr: 'Conserver les quittances PDF en vue du solde final ou de la délivrance de l’acte notarié',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أدفع إيجار عدل الشهري عبر منصة Gest-Immo أو بريدي موب؟',
          fr: 'Comment payer mon loyer AADL via Gest-Immo ou BaridiMob ?',
        },
        answer: {
          ar: 'ادخل إلى بوابة aadlgestimmo.dz وأدخل رمز المستفيد ورقم الفاتورة للاطلاع على المبلغ ثم اختر الدفع بالذهبية أو CIB، أو افتح تطبيق بريدي موب واختر المدفوعات ثم AADL Gest-Immo وأدخل رقم العقد.',
          fr: 'Connectez-vous sur aadlgestimmo.dz avec votre code client pour éditer et payer votre quittance par carte Edahabia/CIB, ou passez par BaridiMob > Paiements > AADL Gest-Immo.',
        },
      },
      {
        question: {
          ar: 'هل تشمل فاتورة إيجار عدل وOPGI مصاريف تسيير العمارة والنظافة؟',
          fr: 'Les frais de gestion et d’entretien des parties communes sont-ils inclus dans la facture ?',
        },
        answer: {
          ar: 'نعم، تتضمن الفاتورة الشهرية الصادرة عن فرع التسيير العقاري عادة القسط الشهري للسكن مضافا إليه أعباء التسيير المشترك (صيانة المصعد، الإنارة، النظافة والحراسة).',
          fr: 'Oui, l’avis d’échéance regroupe généralement la mensualité du logement ainsi que les charges communes (entretien ascenseur, éclairage, nettoyage et gardiennage).',
        },
      },
      {
        question: {
          ar: 'ماذا يترتب عن التأخر في دفع فواتير الإيجار الشهرية؟',
          fr: 'Quelles sont les conséquences d’un retard de paiement des loyers ?',
        },
        answer: {
          ar: 'تطبق غرامات تأخير قانونية عند تجاوز الآجال المحددة في العقد (عادة بعد شهر أو وفق نظام الفوترة المعتمد)، وقد يتراكم الدين ويعيق استخراج الوثائق الإدارية أو تسوية الملف لدى الوكالة.',
          fr: 'Tout retard au-delà de l’échéance contractuelle entraîne l’application de pénalités de retard et bloque la délivrance des attestations de mise à jour financière.',
        },
      },
      {
        question: {
          ar: 'لا أقطن في الجزائر العاصمة، كيف أدفع إيجار OPGI في ولايتي؟',
          fr: 'Comment payer un loyer OPGI dans une wilaya autre qu’Alger ?',
        },
        answer: {
          ar: 'خصصت معظم دواوين الترقية والتسيير العقاري الولائية روابط دفع إلكتروني عبر مواقعها الرسمية أو عبر تطبيق بريدي موب وبوابة الدفع البريدية E-Paiement لكل ولاية.',
          fr: 'La majorité des OPGI de wilaya disposent d’un portail e-paiement propre accessible par leur site wilayal ou sont référencés directement dans l’espace paiements de BaridiMob.',
        },
      },
    ],
  },

  // 27. fadaeldjazair
  {
    id: 'fadaeldjazair',
    slug: 'fadaeldjazair',
    category: 'housing',
    name: {
      ar: 'فضاء الجزائر — البوابة الجغرفضائية للأملاك الوطنية والحفظ العقاري',
      fr: 'Fadaa El Djazaïr — Portail Foncier, Cadastre & Domaines (MF)',
    },
    acronym: 'FADAA',
    ministry: {
      ar: 'وزارة المالية — المديرية العامة للأملاك الوطنية',
      fr: 'Ministère des Finances — Direction Générale des Domaines',
    },
    description: {
      ar: 'البوابة الرقمية الرسمية للمديرية العامة للأملاك الوطنية في الجزائر: طلب الدفتر العقاري ومتابعته، استخراج الشهادة السلبية والعقود المشهرة، مستخرجات المصفوفة المسحية CC11 وCC12 وCC15، وفضاءات المحترفين.',
      fr: "Portail numérique officiel des Domaines et de la Conservation Foncière (Ministère des Finances) : demande et suivi du livret foncier, certificat négatif, extraits cadastraux CC11/CC12/CC15 et espaces professionnels.",
    },
    officialUrl: 'https://fadaeldjazair.mf.gov.dz/ar/',
    portalUrl: 'https://fadaeldjazair.mf.gov.dz/EDCFPUBLICHOME/',
    iconName: 'Compass',
    isPopular: false,
    services: [
      {
        id: 'fadaeldjazair-srv-1',
        title: {
          ar: 'البوابة الرئيسية لفضاء الجزائر (الأملاك الوطنية)',
          fr: 'Portail Principal Fadaa El Djazaïr',
        },
        description: {
          ar: 'الواجهة الرسمية للوصول إلى جميع الخدمات الجغرفضائية والعقارية عن بعد التابعة لوزارة المالية.',
          fr: 'Interface centrale donnant accès à l’ensemble des téléservices fonciers et domaniaux du Ministère des Finances.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/ar/',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-2',
        title: {
          ar: 'منصة مستخرجات الوثائق العقارية والشهادة السلبية والعقود المشهرة',
          fr: 'Extraits Fonciers, Certificat Négatif & Actes Publiés (EDCF)',
        },
        description: {
          ar: 'تقديم طلب إلكتروني للحصول على شهادة السلبية العقارية، نسخ العقود المشهرة، ومستخرجات البطاقة العقارية عن بعد.',
          fr: 'Service en ligne pour solliciter un certificat négatif de propriété, la copie d’un acte publié ou un état hypothécaire.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/EDCFPUBLICHOME/',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-3',
        title: {
          ar: 'الاطلاع على المعطيات المسحية والبيانات المكانية',
          fr: 'Consultation des Données Cadastrales Numériques',
        },
        description: {
          ar: 'خرائط ومعطيات مسح الأراضي المرقمنة للتحقق من أرقام الأقسام ومجموعات الملكية عبر البلديات الممسوحة.',
          fr: 'Cartographie et base documentaire cadastrale permettant d’identifier sections, îlots et parcelles dans les communes cadastrées.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/mission-documentaire/index_public_35.html',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-4',
        title: {
          ar: 'طلب مستخرج المصفوفة المسحية CC11',
          fr: 'Demande d’Extrait de Matrice Cadastrale CC11',
        },
        description: {
          ar: 'خدمة إلكترونية لطلب مستخرج وثيقة CC11 الخاصة بوصف الملكية العقارية المسجلة في مسح الأراضي.',
          fr: 'Téléservice permettant d’obtenir l’extrait CC11 détaillant la consistance cadastrale d’une propriété bâtie ou non bâtie.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/recherche2',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-5',
        title: {
          ar: 'طلب مستخرج من حالة القسم CC12',
          fr: 'Demande d’Extrait d’État de Section CC12',
        },
        description: {
          ar: 'إصدار ومراجعة مستخرج حالة القسم CC12 للتأكد من الحدود والمجاورين ومراجع القطعة الأرضية.',
          fr: 'Délivrance dématérialisée de l’extrait CC12 identifiant la localisation, les limites et les références parcellaires.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/delivrance_automatique/recherche.php',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-6',
        title: {
          ar: 'طلب مستخرج المصفوفة المسحية CC15',
          fr: 'Demande d’Extrait Cadastral CC15',
        },
        description: {
          ar: 'خدمة استخراج وثيقة CC15 المخصصة للمعاملات العقارية والملفات الإدارية لدى مصالح المسح والحفظ العقاري.',
          fr: 'Demande en ligne de la fiche cadastrale CC15 requise dans les transactions immobilières et dossiers domaniaux.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/recherche4',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-7',
        title: {
          ar: 'طلب الدفتر العقاري إلكترونيا',
          fr: 'Demande du Livret Foncier en Ligne',
        },
        description: {
          ar: 'إيداع طلب إعداد واستخراج الدفتر العقاري عبر الإنترنت وتحديد موعد الاستلام في المحافظة العقارية المختصة.',
          fr: 'Dépôt numérique d’une demande de délivrance du livret foncier auprès de la conservation foncière compétente.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/lf/demander_lf',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-8',
        title: {
          ar: 'متابعة حالة طلب الدفتر العقاري',
          fr: 'Suivi de la Demande du Livret Foncier',
        },
        description: {
          ar: 'التحقق الفوري من مراحل معالجة طلب الدفتر العقاري وجاهزيته للسحب باستعمال رقم الوصل.',
          fr: 'Suivi en temps réel de l’état d’avancement et de disponibilité du livret foncier via le numéro de dossier.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/lf/suividemande',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-9',
        title: {
          ar: 'التواصل والدعم مع فريق عمل الأملاك الوطنية',
          fr: 'Contact & Assistance Domaines / Conservation Foncière',
        },
        description: {
          ar: 'توجيه الاستفسارات والشكاوى التقنية الخاصة بالطلبات العقارية عبر الاستمارة الرسمية للمنصة.',
          fr: 'Formulaire institutionnel pour soumettre une réclamation ou demande d’assistance technique sur vos dossiers fonciers.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/ar/contact/',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-10',
        title: {
          ar: 'فضاء المحافظ العقاري',
          fr: 'Espace Professionnel — Conservateur Foncier',
        },
        description: {
          ar: 'بوابة الولوج المؤمن الخاصة بالمحافظين العقاريين لمعالجة ملفات الشهر العقاري وإصدار الدفاتر.',
          fr: 'Accès sécurisé réservé aux conservateurs fonciers pour la validation des formalités et l’édition des livrets.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/login2',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-11',
        title: {
          ar: 'فضاء الموثق العمومي',
          fr: 'Espace Professionnel — Notaire',
        },
        description: {
          ar: 'الفضاء الرقمي للموثقين لإيداع العقود الرسمية ومتابعة إجراءات الشهر العقاري عن بعد.',
          fr: 'Portail dédié aux notaires pour la transmission dématérialisée des actes et le suivi de la publicité foncière.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/login',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-12',
        title: {
          ar: 'فضاء المهندس الخبير المساح',
          fr: 'Espace Professionnel — Géomètre-Expert Foncier',
        },
        description: {
          ar: 'بوابة الخدمات الهندسية والمسحية الخاصة بالمهندسين المساحين المعتمدين لإيداع وثائق القياس.',
          fr: 'Interface dédiée aux géomètres-experts agréés pour le dépôt des documents d’arpentage et plans cadastraux.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/ar/geo_services/',
        isOnline: true,
      },
      {
        id: 'fadaeldjazair-srv-13',
        title: {
          ar: 'فضاء المفتش العقاري',
          fr: 'Espace Professionnel — Inspecteur Foncier',
        },
        description: {
          ar: 'فضاء المراقبة والمتابعة المخصص لمفتشي أملاك الدولة ومسح الأراضي.',
          fr: 'Accès interne réservé aux inspecteurs des domaines et du cadastre pour le contrôle des dossiers.',
        },
        url: 'https://fadaeldjazair.mf.gov.dz/login1',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون وملاك العقارات، الموثقون، المهندسون المساحون، والمحافظون العقاريون',
        fr: 'Citoyens propriétaires, acquéreurs immobiliers, notaires, géomètres-experts et conservateurs',
      },
      processingTime: {
        ar: 'استخراج فوري لبعض الكشوف المسحية الإلكترونية؛ معالجة طلب الدفتر العقاري والشهادة السلبية وفق آجال المحافظة المختصة',
        fr: 'Délivrance rapide pour les extraits cadastraux numériques ; traitement du livret foncier selon les délais de la conservation',
      },
      fees: {
        ar: 'تخضع المستخرجات العقارية والدفاتر للرسوم الجبائية القانونية المقررة في قانون المالية وتسدد إلكترونيا أو بالمحافظة',
        fr: 'Soumis aux droits de timbre et taxes de publicité foncière fixés par la loi de finances',
      },
      channel: {
        ar: 'بوابة fadaeldjazair.mf.gov.dz، المحافظات العقارية الولائية، ومديريات مسح الأراضي',
        fr: 'Portail fadaeldjazair.mf.gov.dz, conservations foncières et directions du cadastre',
      },
      keyRequirement: {
        ar: 'رقم القسم ومجموعة الملكية (Section / Ilot)، العقد المشهر أو رقم التسجيل، وبطاقة التعريف الوطنية البيومترية',
        fr: 'Références cadastrales (section et îlot), acte publié ou récépissé et carte d’identité biométrique',
      },
    },
    requirements: [
      {
        label: {
          ar: 'المراجع المسحية للعقار',
          fr: 'Références cadastrales',
        },
        value: {
          ar: 'البلدية، رقم القسم (Section)، ورقم مجموعة الملكية (Îlot) لطلب وثائق CC11 وCC12 وCC15',
          fr: 'Commune de situation, numéro de section et numéro d’îlot indispensables pour CC11, CC12 et CC15',
        },
      },
      {
        label: {
          ar: 'مراجع الشهر العقاري',
          fr: 'Références de publicité foncière',
        },
        value: {
          ar: 'تاريخ الإيداع، رقم المجلد والرقم الترتيبي للعقد المشهر عند طلب نسخة عقد أو دفتر عقاري',
          fr: 'Date de dépôt, volume et numéro d’acte publié pour les extraits EDCF et demandes de livret foncier',
        },
      },
      {
        label: {
          ar: 'بطاقة التعريف ووسيلة الدفع',
          fr: 'Identité et paiement électronique',
        },
        value: {
          ar: 'رقم التعريف الوطني NIN وبطاقة الذهبية أو CIB لتسديد رسوم الوثائق العقارية عن بعد',
          fr: 'NIN biométrique et carte Edahabia ou CIB pour régler en ligne les redevances des extraits',
        },
      },
      {
        label: {
          ar: 'اعتماد المهنيين (للفضاءات المهنية)',
          fr: 'Accréditation professionnelle',
        },
        value: {
          ar: 'حساب مهني مفعل من المديرية العامة للأملاك الوطنية بالنسبة للموثقين والمهندسين المساحين',
          fr: 'Identifiant professionnel délivré par la DGDN pour l’accès aux espaces Notaire et Géomètre',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين مستخرجات CC11 وCC12 وCC15 في فضاء الجزائر؟',
          fr: 'Quelle est la différence entre les extraits cadastraux CC11, CC12 et CC15 ?',
        },
        answer: {
          ar: 'يمثل CC11 مستخرجا من المصفوفة المسحية يبين المالكين ومشتملات العقار، بينما يوضح CC12 حالة القسم والحدود والمجاورين للقطعة، أما CC15 فيستعمل كبطاقة تعريف مسحية معتمدة في ملفات التسوية والترقيم العقاري.',
          fr: 'Le CC11 est un extrait de matrice cadastrale (propriétaires et consistance), le CC12 présente l’état de section et les limites parcellaires, tandis que le CC15 sert de fiche cadastrale d’identification dans les procédures foncières.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني طلب شهادة السلبية العقارية دون التنقل إلى المحافظة العقارية؟',
          fr: 'Peut-on demander un certificat négatif de propriété à distance ?',
        },
        answer: {
          ar: 'نعم، تتيح منصة EDCF داخل فضاء الجزائر إيداع طلب الشهادة السلبية أو مستخرجات العقود المشهرة إلكترونيا ودفع الرسوم، مع متابعة جاهزية الوثيقة عبر البوابة.',
          fr: 'Oui, la plateforme EDCF intégrée à Fadaa El Djazaïr permet de déposer la demande de certificat négatif ou d’extrait d’acte publié en ligne et d’en suivre le traitement.',
        },
      },
      {
        question: {
          ar: 'كيف أتابع مراحل إعداد الدفتر العقاري الخاص بي؟',
          fr: 'Comment suivre l’avancement de mon livret foncier sur Fadaa El Djazaïr ?',
        },
        answer: {
          ar: 'ادخل إلى خدمة متابعة طلب الدفتر العقاري (lf/suividemande)، وأدخل الولاية والمحافظة العقارية ورقم الطلب الممنوح لك عند الإيداع لمعرفة الحالة الحالية للدفتر.',
          fr: 'Rendez-vous sur le service « Suivi du Livret Foncier », sélectionnez votre wilaya et conservation foncière puis saisissez votre numéro de demande figurant sur le récépissé.',
        },
      },
      {
        question: {
          ar: 'لماذا لا تظهر بعض البلديات عند البحث في المعطيات المسحية؟',
          fr: 'Pourquoi certaines zones ou communes n’apparaissent-elles pas dans la base cadastrale ?',
        },
        answer: {
          ar: 'تتم تغطية البلديات تدريجيا حسب تقدم عمليات مسح الأراضي العام والرقمنة العقارية؛ وفي المناطق غير المرقمنة بالكامل يتعين مراجعة مكتب مسح الأراضي الولائي مباشرة.',
          fr: 'L’intégration s’effectue progressivement selon l’achèvement des opérations de cadastre général et de numérisation ; pour les zones en cours de traitement, rapprochez-vous de la conservation locale.',
        },
      },
    ],
  },

  // 28. hatplc
  {
    id: 'hatplc',
    slug: 'hatplc',
    category: 'justice_interior',
    name: {
      ar: 'السلطة العليا للشفافية والوقاية من الفساد ومكافحته (HATPLC)',
      fr: 'Haute Autorité de Transparence, de Prévention et de Lutte contre la Corruption (HATPLC)',
    },
    acronym: 'HATPLC',
    ministry: {
      ar: 'هيئة دستورية مستقلة للرقابة والشفافية',
      fr: 'Institution Constitutionnelle Indépendante',
    },
    description: {
      ar: 'البوابة الرسمية للسلطة العليا للشفافية والوقاية من الفساد ومكافحته: منصة التبليغ الآمن بلغنا (Balighna)، تطبيق ألو بلغنا، الشبكة الجزائرية للشفافية نراكم (Narakom)، واستمارات التصريح بالممتلكات.',
      fr: 'Portail officiel de la HATPLC en Algérie : plateforme sécurisée de signalement Balighna, application Allo-Balighna, réseau de transparence Narakom et formulaires de déclaration de patrimoine.',
    },
    officialUrl: 'https://hatplc.dz/',
    portalUrl: 'https://balighna.hatplc.dz/account-choice',
    iconName: 'ShieldCheck',
    isPopular: false,
    services: [
      {
        id: 'hatplc-srv-1',
        title: {
          ar: 'الموقع الرسمي للسلطة العليا للشفافية (HATPLC)',
          fr: 'Site Officiel de la HATPLC',
        },
        description: {
          ar: 'البوابة المؤسساتية للسلطة العليا للشفافية والوقاية من الفساد ومكافحته للاطلاع على القوانين والتقارير والخدمات الرقمية.',
          fr: 'Portail institutionnel regroupant les missions constitutionnelles, textes réglementaires, rapports et services numériques de la HATPLC.',
        },
        url: 'https://hatplc.dz/',
        isOnline: true,
      },
      {
        id: 'hatplc-srv-2',
        title: {
          ar: 'منصة التبليغ عن الفساد — بلغنا (Balighna)',
          fr: 'Plateforme de Signalement Sécurisé — Balighna',
        },
        description: {
          ar: 'خدمة إلكترونية سرية ومؤمنة لإيداع التبليغات المتعلقة بأفعال الفساد أو شبهات مخالفة القوانين وإرفاق القرائن والمستندات.',
          fr: 'Téléservice confidentiel permettant aux citoyens et agents publics de signaler des faits de corruption avec pièces justificatives.',
        },
        url: 'https://balighna.hatplc.dz/account-choice',
        isOnline: true,
      },
      {
        id: 'hatplc-srv-3',
        title: {
          ar: 'تطبيق الهاتف المحمول ألو بلغنا (Allo Balighna)',
          fr: 'Application Mobile Officielle — Allo Balighna',
        },
        description: {
          ar: 'تطبيق الأندرويد الرسمي للتبليغ الفوري عن قضايا الفساد ومتابعة مآل البلاغات بأمان وسرية من الهاتف الذكي.',
          fr: 'Application mobile Android officielle permettant d’envoyer des signalements et de suivre leur traitement en toute confidentialité.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.hatplc.balighna&hl=ar',
        isOnline: true,
      },
      {
        id: 'hatplc-srv-4',
        title: {
          ar: 'الشبكة الجزائرية للشفافية — منصة نراكم (Narakom)',
          fr: 'Réseau Algérien de Transparence — Plateforme Narakom',
        },
        description: {
          ar: 'منصة رقمية مخصصة لتسجيل ومشاركة فعاليات المجتمع المدني والجمعيات والمؤسسات في برامج النزاهة والوقاية من الفساد.',
          fr: 'Espace participatif destiné aux associations, institutions et acteurs de la société civile engagés dans la prévention et la gouvernance.',
        },
        url: 'https://naracom.hatplc.dz/login',
        isOnline: true,
      },
      {
        id: 'hatplc-srv-5',
        title: {
          ar: 'التصريح بالممتلكات (تحميل الاستمارة الرسمية)',
          fr: 'Déclaration de Patrimoine — Formulaire Officiel',
        },
        description: {
          ar: 'تنزيل نماذج واستمارات التصريح بالممتلكات الخاصة بالإطارات والمنتخبين والموظفين الخاضعين للالتزام القانوني.',
          fr: 'Téléchargement des formulaires officiels de déclaration de patrimoine destinés aux cadres supérieurs, élus et assujettis légaux.',
        },
        url: 'https://hatplc.dz/declaration-form',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون والمبلغون عن قضايا الفساد، الموظفون الخاضعون للتصريح بالممتلكات، وجمعيات المجتمع المدني',
        fr: 'Citoyens lanceurs d’alerte, agents publics assujettis à la déclaration de patrimoine et associations civiles',
      },
      processingTime: {
        ar: 'استقبال فوري للبلاغات عبر بلغنا؛ معالجة ودراسة القرائن وفق السرية والإجراءات القانونية للسلطة',
        fr: 'Enregistrement immédiat sur Balighna ; instruction confidentielle et orientation selon les procédures légales',
      },
      fees: {
        ar: 'جميع خدمات التبليغ والاستعلام والتصريح والانضمام إلى منصة نراكم مجانية بالكامل',
        fr: 'Tous les services de signalement, formulaires et accès Narakom sont entièrement gratuits',
      },
      channel: {
        ar: 'منصة balighna.hatplc.dz، بوابة naracom.hatplc.dz، وتطبيق ألو بلغنا على الهاتف',
        fr: 'Portail balighna.hatplc.dz, plateforme naracom.hatplc.dz et application Allo Balighna',
      },
      keyRequirement: {
        ar: 'وقائع محددة وقرائن داعمة عند التبليغ، أو اعتماد الجمعية للانضمام إلى شبكة نراكم',
        fr: 'Faits précis et éléments probants pour un signalement ; agrément associatif pour l’inscription sur Narakom',
      },
    },
    requirements: [
      {
        label: {
          ar: 'شروط التبليغ عبر منصة بلغنا',
          fr: 'Conditions d’un signalement Balighna',
        },
        value: {
          ar: 'ذكر الوقائع والتواريخ والجهة المعنية بدقة مع إرفاق الوثائق أو القرائن المتوفرة بصيغة رقمية',
          fr: 'Exposé factuel précis (lieu, date, service concerné) accompagné si possible de pièces numériques',
        },
      },
      {
        label: {
          ar: 'الالتزام بالتصريح بالممتلكات',
          fr: 'Assujettis à la déclaration de patrimoine',
        },
        value: {
          ar: 'تعيين أو انتخاب في وظيفة عليا أو منصب عمومي خاضع للتصريح خلال الآجال القانونية',
          fr: 'Nomination ou élection à une fonction publique soumise à l’obligation légale de déclaration',
        },
      },
      {
        label: {
          ar: 'العضوية في شبكة نراكم Narakom',
          fr: 'Adhésion au réseau Narakom',
        },
        value: {
          ar: 'توفر الاعتماد القانوني للجمعية أو الهيئة وملء ملف الترشح عبر البوابة التفاعلية',
          fr: 'Justifier de l’agrément légal de l’association ou organisme et renseigner la fiche d’adhésion',
        },
      },
      {
        label: {
          ar: 'سرية المعطيات وحماية المبلغين',
          fr: 'Protection des données et du déclarant',
        },
        value: {
          ar: 'ضرورة الاحتفاظ برقم التتبع السري للبلاغ وعدم نشر تفاصيل القضية خارج القنوات الرسمية',
          fr: 'Conserver le code de suivi confidentiel du signalement et privilégier exclusivement les canaux sécurisés',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تحفظ منصة بلغنا هوية المبلغ عن قضايا الفساد؟',
          fr: 'La plateforme Balighna garantit-elle la confidentialité de l’auteur du signalement ?',
        },
        answer: {
          ar: 'نعم، تضمن السلطة العليا السرية التامة لهوية المبلغين وحمايتهم القانونية وفق التشريع ساري المفعول، مع توفير خيارات تبليغ مؤمنة داخل منصة بلغنا.',
          fr: 'Oui, la HATPLC assure le traitement confidentiel des signalements et la protection légale des dénonciateurs conformément à la loi relative à la prévention et à la lutte contre la corruption.',
        },
      },
      {
        question: {
          ar: 'ما الفرق بين منصة بلغنا ومنصة نراكم (Narakom)؟',
          fr: 'Quelle est la différence entre Balighna et Narakom ?',
        },
        answer: {
          ar: 'تختص منصة بلغنا (Balighna) باستقبال التبليغات الفردية عن أفعال الفساد والتحقيق فيها، بينما تعد منصة نراكم (Narakom) شبكة تشاركية للمجتمع المدني والمؤسسات من أجل التوعية وترقية النزاهة.',
          fr: 'Balighna est dédiée au dépôt et au suivi des signalements de faits de corruption, tandis que Narakom est la plateforme participative du Réseau Algérien de Transparence pour les associations et acteurs civiques.',
        },
      },
      {
        question: {
          ar: 'متى يجب إيداع استمارة التصريح بالممتلكات لدى HATPLC؟',
          fr: 'Quand faut-il déposer la déclaration de patrimoine auprès de la HATPLC ?',
        },
        answer: {
          ar: 'يجب التصريح بالممتلكات خلال الشهر الذي يلي التنصيب أو بداية العهدة الانتخابية، وعند أي زيادة جوهرية في الذمة المالية، وكذلك خلال شهرين من انتهاء المهام أو العهدة.',
          fr: 'La déclaration doit être déposée dans le mois suivant l’installation ou l’entrée en fonction, lors de toute modification substantielle du patrimoine, et dans les deux mois suivant la cessation des fonctions.',
        },
      },
      {
        question: {
          ar: 'هل يمكن تقديم شكوى إدارية عادية غير مرتبطة بالفساد في منصة بلغنا؟',
          fr: 'Peut-on déposer une simple réclamation administrative sur Balighna ?',
        },
        answer: {
          ar: 'تختص بلغنا بقضايا الفساد واستغلال النفوذ والرشوة وتبديد المال العام؛ أما التظلمات الإدارية وتأخر الملفات العادية فتوجه إلى وسيط الجمهورية (wassit.dz) أو الوزارة المعنية.',
          fr: 'Balighna traite spécifiquement les faits susceptibles de constituer une infraction de corruption. Les blocages administratifs ordinaires relèvent du Médiateur de la République (wassit.dz).',
        },
      },
    ],
  },

  // 29. hcn
  {
    id: 'hcn',
    slug: 'hcn',
    category: 'telecom',
    name: {
      ar: 'المحافظة السامية للرقمنة — البوابة الحكومية للخدمات الرقمية (DZDS)',
      fr: 'Haut-Commissariat à la Numérisation — Portail National DZDS',
    },
    acronym: 'HCN',
    ministry: {
      ar: 'رئاسة الجمهورية — المحافظة السامية للرقمنة',
      fr: 'Présidence de la République — Haut-Commissariat à la Numérisation',
    },
    description: {
      ar: 'دليل المحافظة السامية للرقمنة (HCN) في الجزائر: البوابة الحكومية الموحدة للخدمات الرقمية dzds.dz، تطبيق الخدمات الرقمية، منصة التصديق الأبوستيل (Apostille)، ومركز الاتصال الوطني 3017.',
      fr: 'Guide officiel du Haut-Commissariat à la Numérisation (HCN) en Algérie : portail gouvernemental unifié dzds.dz, application mobile DZDS, plateforme Apostille et centre d’appel d’assistance citoyenne 3017.',
    },
    officialUrl: 'https://www.hcn.dz/',
    portalUrl: 'https://dzds.dz/ar-dz',
    iconName: 'Globe',
    isPopular: true,
    services: [
      {
        id: 'hcn-srv-1',
        title: {
          ar: 'الموقع المؤسساتي للمحافظة السامية للرقمنة (HCN)',
          fr: 'Portail Institutionnel du HCN',
        },
        description: {
          ar: 'المرجع الرسمي للاستراتيجية الوطنية للتحول الرقمي، القابلية للتشغيل البيني بين الإدارات، والبيانات الرسمية للمحافظة.',
          fr: 'Site officiel présentant la stratégie nationale de transformation numérique, l’interopérabilité inter-sectorielle et les textes cadres.',
        },
        url: 'https://www.hcn.dz/',
        isOnline: true,
      },
      {
        id: 'hcn-srv-2',
        title: {
          ar: 'البوابة الوطنية للخدمات الحكومية الرقمية (dzds.dz)',
          fr: 'Portail Gouvernemental des Services Numériques (dzds.dz)',
        },
        description: {
          ar: 'منصة موحدة تجمع الخدمات العمومية الإلكترونية للوزارات والهيئات الجزائرية، بما في ذلك الولوج إلى خدمات الحالة المدنية والأبوستيل.',
          fr: 'Guichet unique fédérant les téléservices publics des ministères et organismes algériens, incluant les démarches d’état civil et d’Apostille.',
        },
        url: 'https://dzds.dz/ar-dz',
        isOnline: true,
      },
      {
        id: 'hcn-srv-3',
        title: {
          ar: 'التطبيق الرسمي للخدمات الرقمية الجزائرية (DZDS App)',
          fr: 'Application Mobile Officielle DZDS',
        },
        description: {
          ar: 'تطبيق الهاتف المحمول المعتمد للوصول السريع إلى البوابة الحكومية، متابعة الطلبات الرقمية، والتواصل مع الدعم التقني عبر الرقم 3017.',
          fr: 'Application Android officielle offrant un accès mobile unifié aux services gouvernementaux et à l’assistance du centre d’appel 3017.',
        },
        url: 'https://play.google.com/store/apps/details?id=com.linewell.citizen.aljly&hl=ar',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'جميع المواطنين المقيمين، أفراد الجالية بالخارج، والمؤسسات المتعاملة مع الإدارة العمومية',
        fr: 'Citoyens algériens, membres de la diaspora et usagers professionnels des administrations publiques',
      },
      processingTime: {
        ar: 'ولوج فوري للخدمات المجمعة على مدار الساعة؛ مرافقة تقنية مباشرة عبر الرقم الأخضر ومركز الاتصال 3017',
        fr: 'Accès continu 24h/24 aux téléservices agrégés ; assistance directe via le centre d’appel 3017',
      },
      fees: {
        ar: 'التصفح والاستعلام عبر بوابة dzds وتطبيق الهاتف والاتصال بمركز التوجيه مجاني تماما',
        fr: 'Consultation sur dzds.dz, utilisation de l’application mobile et orientation via le 3017 entièrement gratuites',
      },
      channel: {
        ar: 'بوابة dzds.dz، موقع hcn.dz، تطبيق DZDS، ومركز الاتصال 3017',
        fr: 'Portail web dzds.dz, site hcn.dz, application DZDS et centre d’appel 3017',
      },
      keyRequirement: {
        ar: 'بطاقة التعريف الوطنية البيومترية ورقم التعريف الوطني NIN للولوج إلى الحساب المواطني الموحد',
        fr: 'Numéro d’Identification Nationale (NIN) et carte d’identité biométrique pour l’authentification unique',
      },
    },
    requirements: [
      {
        label: {
          ar: 'رقم التعريف الوطني NIN',
          fr: 'Numéro d’Identification Nationale (NIN)',
        },
        value: {
          ar: 'المعرف الأساسي المؤلف من 18 رقما الموجود على بطاقة التعريف البيومترية لربط الحساب بالخدمات الحكومية',
          fr: 'Identifiant unique à 18 chiffres inscrit sur la CNIBE pour activer l’accès unifié aux téléservices',
        },
      },
      {
        label: {
          ar: 'رقم هاتف محمول نشط وبريد إلكتروني',
          fr: 'Coordonnées personnelles vérifiées',
        },
        value: {
          ar: 'استقبال رموز التحقق الثنائية والإشعارات عند الدخول إلى البوابة أو تتبع الطلبات مثل الأبوستيل',
          fr: 'Indispensables pour recevoir les codes de sécurité OTP et notifications de suivi (ex. Apostille)',
        },
      },
      {
        label: {
          ar: 'تثبيت تطبيق DZDS أو متصفح محدث',
          fr: 'Application DZDS ou navigateur compatible',
        },
        value: {
          ar: 'استعمال النسخة الرسمية من التطبيق على متجر Google Play أو الولوج المباشر عبر dzds.dz',
          fr: 'Télécharger exclusivement l’application officielle sur Google Play ou utiliser le portail dzds.dz',
        },
      },
      {
        label: {
          ar: 'التواصل مع الدعم عبر الرقم 3017',
          fr: 'Support technique national (3017)',
        },
        value: {
          ar: 'الاتصال بمركز المساعدة 3017 لتوجيه المستخدمين وحل صعوبات التوثيق أو الروابط القطاعية',
          fr: 'Joindre le 3017 pour obtenir une assistance guidée sur les services intégrés à la plateforme',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي بوابة DZDS وما علاقتها بالمحافظة السامية للرقمنة؟',
          fr: 'Qu’est-ce que le portail DZDS et quel est le rôle du HCN ?',
        },
        answer: {
          ar: 'DZDS هي البوابة الحكومية الموحدة للخدمات الرقمية التي تشرف عليها المحافظة السامية للرقمنة، وتهدف إلى جمع كافة الخدمات الإدارية للوزارات في نقطة ولوج واحدة ببيانات دخول موحدة.',
          fr: 'DZDS est le guichet national unifié des services publics numériques supervisé par le HCN, conçu pour regrouper les téléservices ministériels sous un accès citoyen unique.',
        },
      },
      {
        question: {
          ar: 'ما وظيفة رقم الاتصال 3017 التابع للمحافظة السامية للرقمنة؟',
          fr: 'À quoi sert le numéro 3017 du Haut-Commissariat à la Numérisation ?',
        },
        answer: {
          ar: 'يمثل الرقم 3017 مركز الاتصال المخصص لإرشاد المواطنين والإجابة عن استفساراتهم حول استخدام بوابة dzds والخدمات الحكومية الرقمية المدرجة فيها مثل التصديق الأبوستيل.',
          fr: 'Le 3017 est le centre d’appel officiel dédié à l’orientation des citoyens, à l’accompagnement sur le portail dzds.dz et à la résolution des incidents d’accès.',
        },
      },
      {
        question: {
          ar: 'هل يمكن الوصول إلى منصة التصديق الأبوستيل عبر بوابة DZDS؟',
          fr: 'La plateforme Apostille est-elle accessible depuis DZDS ?',
        },
        answer: {
          ar: 'نعم، تدمج البوابة الحكومية خدمات التصديق الإلكتروني والأبوستيل (بالتنسيق مع القطاعات المختصة كالعدل والخارجية) لتسهيل المصادقة على الوثائق الموجهة للاستعمال بالخارج.',
          fr: 'Oui, le portail gouvernemental intègre l’accès aux démarches de légalisation et d’Apostille dématérialisée en coordination avec les départements ministériels concernés.',
        },
      },
      {
        question: {
          ar: 'هل يغني التسجيل في dzds.dz عن المواقع الفردية للوزارات؟',
          fr: 'L’inscription sur dzds.dz remplace-t-elle les portails ministériels individuels ?',
        },
        answer: {
          ar: 'تعمل البوابة تدريجيا على توحيد الولوج (Single Sign-On) والربط البيني بين الأنظمة؛ وفي حال عدم إدراج خدمة قطاعية محددة بعد، يمكن الولوج إليها مباشرة عبر الروابط القطاعية الرسمية.',
          fr: 'DZDS déploie progressivement l’authentification unifiée et l’interopérabilité ; les téléservices non encore migrés restent accessibles via leurs liens ministériels directs.',
        },
      },
    ],
  },

  // 30. ina-elections
  {
    id: 'ina-elections',
    slug: 'ina-elections',
    category: 'justice_interior',
    name: {
      ar: 'السلطة الوطنية المستقلة للانتخابات (ANIE)',
      fr: 'Autorité Nationale Indépendante des Élections (ANIE)',
    },
    acronym: 'ANIE',
    ministry: {
      ar: 'سلطة دستورية مستقلة لتنظيم الانتخابات',
      fr: 'Autorité Constitutionnelle Indépendante',
    },
    description: {
      ar: 'الخدمات الرقمية للسلطة الوطنية المستقلة للانتخابات في الجزائر: التسجيل الأولي في القوائم الانتخابية، التحقق من مركز الاقتراع، طلب نسخة من بطاقة الناخب، تغيير مكان الإقامة، تحيين البيانات، ومنصة حفاظ الأمانة.',
      fr: 'Téléservices officiels de l’ANIE en Algérie : inscription sur les listes électorales, vérification du bureau de vote, duplicata de carte d’électeur, transfert de résidence, mise à jour et inscription au dispositif Hofad El Amana.',
    },
    officialUrl: 'https://ina-elections.dz/',
    portalUrl: 'https://services.ina-elections.dz/services/register',
    iconName: 'CheckCircle2',
    isPopular: false,
    services: [
      {
        id: 'ina-elections-srv-1',
        title: {
          ar: 'الموقع الرسمي للسلطة الوطنية المستقلة للانتخابات',
          fr: 'Portail Officiel de l’ANIE',
        },
        description: {
          ar: 'البوابة الرسمية للاطلاع على القوانين الانتخابية، مواعيد المراجعة الدورية والاستثنائية للقوائم، والبيانات الصحفية.',
          fr: 'Site officiel publiant les textes électoraux, calendriers de révision des listes et communiqués nationaux.',
        },
        url: 'https://ina-elections.dz/',
        isOnline: true,
      },
      {
        id: 'ina-elections-srv-2',
        title: {
          ar: 'التسجيل الأولي في القوائم الانتخابية',
          fr: 'Inscription Initiale sur les Listes Électorales',
        },
        description: {
          ar: 'خدمة إلكترونية للبالغين 18 سنة فما فوق لتسجيل أنفسهم في القائمة الانتخابية لبلدية إقامتهم عن بعد.',
          fr: 'Téléservice permettant aux citoyens âgés de 18 ans et plus de s’inscrire en ligne sur la liste électorale de leur commune.',
        },
        url: 'https://services.ina-elections.dz/services/register',
        isOnline: true,
      },
      {
        id: 'ina-elections-srv-3',
        title: {
          ar: 'طلب نسخة ثانية من بطاقة الناخب (Duplicata)',
          fr: 'Demande de Duplicata de la Carte d’Électeur',
        },
        description: {
          ar: 'إيداع طلب استخراج نسخة بديلة في حال ضياع أو تلف بطاقة الناخب عبر المنصة دون انتظار المراجعة اليدوية.',
          fr: 'Demande dématérialisée de réédition de votre carte d’électeur en cas de perte, vol ou détérioration.',
        },
        url: 'https://services.ina-elections.dz/services/duplicata',
        isOnline: true,
      },
      {
        id: 'ina-elections-srv-4',
        title: {
          ar: 'التسجيل في مبادرة حفاظ الأمانة (تأطير المكاتب)',
          fr: 'Inscription au Dispositif Hofad El Amana (Assesseurs)',
        },
        description: {
          ar: 'بوابة تطوع المواطنين والمؤطرين للمشاركة في تأطير ومراقبة مراكز ومكاتب التصويت خلال الاستحقاقات الوطنية.',
          fr: 'Plateforme permettant aux citoyens éligibles de postuler comme membres encadrants des bureaux et centres de vote.',
        },
        url: 'https://services.ina-elections.dz/services/hofad-amana',
        isOnline: true,
      },
      {
        id: 'ina-elections-srv-5',
        title: {
          ar: 'هل أنت مسجل؟ (التحقق من القوائم ومكان الاقتراع)',
          fr: 'Orientation — Vérifier Votre Inscription & Bureau de Vote',
        },
        description: {
          ar: 'الاستعلام الفوري برقم التعريف الوطني أو الاسم للتأكد من التسجيل ومعرفة عنوان مركز ومكتب التصويت.',
          fr: 'Vérification instantanée de votre inscription électorale avec localisation exacte de votre centre et bureau de vote.',
        },
        url: 'https://services.ina-elections.dz/services/orientation',
        isOnline: true,
      },
      {
        id: 'ina-elections-srv-6',
        title: {
          ar: 'طلب تغيير مكان الإقامة (شطب وتسجيل في بلدية جديدة)',
          fr: 'Demande de Transfert de Résidence Électorale',
        },
        description: {
          ar: 'تقديم طلب نقل القيد الانتخابي إلكترونيا عند الانتقال للإقامة في بلدية أو ولاية جديدة مع إرفاق إثبات الإقامة.',
          fr: 'Procédure en ligne de radiation de l’ancienne commune et réinscription dans votre nouvelle commune de résidence.',
        },
        url: 'https://services.ina-elections.dz/services/residence',
        isOnline: true,
      },
      {
        id: 'ina-elections-srv-7',
        title: {
          ar: 'تحيين وتصحيح المعلومات في البطاقة الانتخابية',
          fr: 'Mise à Jour et Rectification des Données Électorales',
        },
        description: {
          ar: 'طلب تصحيح الأخطاء المطبعية في الاسم أو اللقب أو تاريخ الميلاد أو العنوان ضمن السجل الانتخابي الوطني.',
          fr: 'Service permettant de corriger toute erreur matérielle (nom, date de naissance, adresse) sur la liste électorale.',
        },
        url: 'https://services.ina-elections.dz/services/update-infos',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون الجزائريون البالغون 18 سنة كاملة فما فوق، والمتمتعون بحقوقهم المدنية والسياسية (مقيمون وجالية)',
        fr: 'Citoyens algériens âgés de 18 ans révolus jouissant de leurs droits civils et politiques (résidents et diaspora)',
      },
      processingTime: {
        ar: 'استعلام فوري في خدمة التحقق؛ دراسة طلبات التسجيل والتحويل ضمن آجال المراجعة السنوية أو الاستثنائية للقوائم',
        fr: 'Consultation immédiate sur Orientation ; validation des inscriptions lors des périodes de révision des listes',
      },
      fees: {
        ar: 'كافة الخدمات الانتخابية الرقمية واستخراج بطاقة الناخب مجانية بالكامل للمواطن',
        fr: 'Toutes les démarches électorales et la délivrance de la carte d’électeur sont totalement gratuites',
      },
      channel: {
        ar: 'منصة services.ina-elections.dz، المندوبيات الولائية، والمندوبيات البلدية للسلطة الوطنية',
        fr: 'Portail services.ina-elections.dz, délégations de wilaya et antennes communales de l’ANIE',
      },
      keyRequirement: {
        ar: 'بطاقة التعريف الوطنية البيومترية (NIN)، وشهادة الإقامة أو فاتورة حديثة في حالة تغيير البلدية',
        fr: 'CNIBE (NIN) et justificatif de résidence récent pour tout transfert vers une nouvelle commune',
      },
    },
    requirements: [
      {
        label: {
          ar: 'السن القانوني والجنسية',
          fr: 'Âge légal et nationalité',
        },
        value: {
          ar: 'بلوغ 18 سنة كاملة يوم الاقتراع والتمتع بالجنسية الجزائرية والحقوق المدنية والسياسية',
          fr: 'Avoir 18 ans révolus au jour du scrutin, être de nationalité algérienne et jouir de ses droits civiques',
        },
      },
      {
        label: {
          ar: 'الوثيقة البيومترية (NIN)',
          fr: 'Pièce biométrique et NIN',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية البيومترية أو جواز السفر البيومتري لتعبئة المعطيات بدقة مطابقة للسجل المدني',
          fr: 'Carte d’identité biométrique ou passeport biométrique pour garantir l’exactitude des données d’état civil',
        },
      },
      {
        label: {
          ar: 'إثبات الإقامة عند التحويل',
          fr: 'Justificatif de résidence',
        },
        value: {
          ar: 'وثيقة تثبت الإقامة الفعلية بالبلدية الجديدة لمدة تفوق 6 أشهر (بطاقة إقامة أو عقد إيجار أو فاتورة باسم المعني)',
          fr: 'Certificat de résidence ou quittance justifiant l’établissement dans la nouvelle commune depuis plus de 6 mois',
        },
      },
      {
        label: {
          ar: 'رقم الهاتف للبلاغات والتأكيد',
          fr: 'Contact mobile de suivi',
        },
        value: {
          ar: 'استقبال إشعار تأكيد القيد وتحديد موعد سحب بطاقة الناخب الجديدة من المندوبية البلدية',
          fr: 'Nécessaire pour suivre la validation du dossier et le retrait de la carte d’électeur en délégation communale',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'متى تفتح خدمات التسجيل أو تغيير مكان الإقامة في منصة ANIE؟',
          fr: 'À quel moment les services d’inscription et de transfert de l’ANIE sont-ils ouverts ?',
        },
        answer: {
          ar: 'تفتح المنصة خلال فترات المراجعة الدورية السنوية للقوائم الانتخابية (عادة في الثلاثي الأخير من السنة) وكذلك أثناء المراجعات الاستثنائية التي تسبق أي استحقاق انتخابي أو استفتاء.',
          fr: 'Les téléservices d’inscription et de mutation sont actifs lors des révisions annuelles périodiques des listes électorales et durant les périodes de révision exceptionnelle précédant chaque scrutin.',
        },
      },
      {
        question: {
          ar: 'كيف أتأكد من مركز التصويت ورقم المكتب قبل يوم الانتخاب؟',
          fr: 'Comment connaître mon centre et mon numéro de bureau de vote en ligne ?',
        },
        answer: {
          ar: 'ادخل إلى خدمة «هل أنت مسجل؟» (services.ina-elections.dz/services/orientation) واختر الولاية والبلدية ثم أدخل رقم التعريف الوطني NIN أو الاسم وتاريخ الميلاد ليظهر المركز والمكتب فورا.',
          fr: 'Accédez à la rubrique « Orientation » sur services.ina-elections.dz, renseignez votre wilaya/commune et votre NIN ou état civil complet pour afficher votre bureau de vote.',
        },
      },
      {
        question: {
          ar: 'ضيعت بطاقة الناخب الخاصة بي، هل يمنعني ذلك من التصويت؟',
          fr: 'La perte de la carte d’électeur empêche-t-elle de voter le jour du scrutin ?',
        },
        answer: {
          ar: 'يمكنك طلب نسخة ثانية عبر خدمة Duplicata في البوابة قبل الموعد الانتخابي؛ وإذا تعذر استلامها في الوقت المناسب، يسمح النظام بالتحقق من وجودك في القائمة الانتخابية للمركز ببطاقة التعريف الوطنية أو جواز السفر.',
          fr: 'Vous pouvez demander un duplicata en ligne via la rubrique dédiée. À défaut de carte le jour du vote, la présentation d’une pièce d’identité officielle reste admise dès lors que vous figurez sur la liste d’émargement.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني التسجيل أو تغيير الإقامة إذا كنت مقيما بالخارج؟',
          fr: 'Les membres de la diaspora algérienne peuvent-ils utiliser les services de l’ANIE ?',
        },
        answer: {
          ar: 'نعم، تتكفل القنصليات والسفارات الجزائرية بالخارج بمراجعة القوائم الانتخابية لأفراد الجالية وبإتاحة خدمات التسجيل والتحقق بالتنسيق مع السلطة الوطنية المستقلة للانتخابات.',
          fr: 'Oui, les postes diplomatiques et consulaires gèrent les listes électorales de la communauté nationale à l’étranger en liaison directe avec les plateformes de l’ANIE.',
        },
      },
    ],
  },

  // 31. interieur
  {
    id: 'interieur',
    slug: 'interieur',
    category: 'justice_interior',
    name: {
      ar: 'وزارة الداخلية والجماعات المحلية والتهيئة العمرانية',
      fr: "Ministère de l'Intérieur, des Collectivités Locales et de l'Aménagement du Territoire",
    },
    acronym: 'MICLAT',
    ministry: {
      ar: 'وزارة الداخلية والجماعات المحلية',
      fr: "Ministère de l'Intérieur",
    },
    description: {
      ar: 'البوابة الشاملة لخدمات وزارة الداخلية الرقمية في الجزائر: استخراج وثائق الحالة المدنية وشهادة الميلاد S12، طلب ومتابعة بطاقة التعريف وجواز السفر البيومتريين، الشباك عن بعد، منحة التضامن لرمضان، شهادة الكفاءة لرخصة السياقة، وتصاريح الجمعيات.',
      fr: "Portail complet des téléservices du Ministère de l'Intérieur en Algérie : état civil et extrait 12S en ligne, CNIBE et passeport biométrique, guichet à distance, allocation Ramadan, capacité du permis de conduire et création d'associations.",
    },
    officialUrl: 'https://www.interieur.gov.dz/index.php/ar/',
    portalUrl: 'https://etatcivil.interieur.gov.dz/',
    iconName: 'Landmark',
    isPopular: true,
    services: [
      {
        id: 'interieur-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة الداخلية والجماعات المحلية',
          fr: "Site Officiel du Ministère de l'Intérieur",
        },
        description: {
          ar: 'البوابة المركزية للوزارة التي تجمع الأخبار الرسمية، المراسيم التنظيمية، ودليل جميع المنصات الإلكترونية للولايات والبلديات.',
          fr: 'Portail institutionnel central regroupant les textes réglementaires, annuaires des wilayas et accès aux guichets numériques.',
        },
        url: 'https://www.interieur.gov.dz/index.php/ar/',
        isOnline: true,
      },
      {
        id: 'interieur-srv-2',
        title: {
          ar: 'استخراج شهادة الميلاد عن بعد (الحالة المدنية)',
          fr: "Extrait d'Acte de Naissance en Ligne (État Civil)",
        },
        description: {
          ar: 'إصدار وتحميل شهادة الميلاد الممضى عليها إلكترونيا بصيغة PDF مجانا ودون التنقل إلى مصلحة الحالة المدنية بالبلدية.',
          fr: "Édition et téléchargement gratuit en PDF de l'acte de naissance certifié électroniquement sans passage en mairie.",
        },
        url: 'https://etatcivil.interieur.gov.dz/',
        isOnline: true,
      },
      {
        id: 'interieur-srv-3',
        title: {
          ar: 'طلب بطاقة التعريف الوطنية البيومترية (CNIBE)',
          fr: "Demande de Carte Nationale d'Identité Biométrique (CNIBE)",
        },
        description: {
          ar: 'خدمة إيداع الطلب الأولي أو التجديد عن بعد لبطاقة التعريف الوطنية البيومترية لحائزي جواز السفر البيومتري.',
          fr: 'Téléservice de demande en ligne de la CNIBE destiné aux titulaires d’un passeport biométrique valide.',
        },
        url: 'https://services.interieur.gov.dz/ar/2020/10/24/%d8%b7%d9%84%d8%a8-%d8%a8%d8%b7%d8%a7%d9%82%d8%a9-%d8%a7%d9%84%d8%aa%d8%b9%d8%b1%d9%8a%d9%81-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a%d8%a9-%d8%a7%d9%84%d8%a8%d9%8a%d9%88%d9%85%d8%aa%d8%b1%d9%8a%d8%a9/',
        isOnline: true,
      },
      {
        id: 'interieur-srv-4',
        title: {
          ar: 'متابعة طلب بطاقة التعريف الوطنية البيومترية',
          fr: 'Suivi de la Demande de CNIBE',
        },
        description: {
          ar: 'التحقق من مراحل معالجة وطبع بطاقة التعريف البيومترية وجاهزيتها للاستلام من البلدية باستعمال رقم الطلب.',
          fr: 'Suivi en temps réel de la fabrication et de la disponibilité de votre carte biométrique en commune.',
        },
        url: 'https://passeport.interieur.gov.dz/Ar/SuiviCNIBE/Suivi%20la%20demande%20de%20la%20carte%20national%20d\'identit%c3%a9%20biom%c3%a9trique%20%c3%a9lectronique',
        isOnline: true,
      },
      {
        id: 'interieur-srv-5',
        title: {
          ar: 'طلب جواز السفر الإلكتروني البيومتري',
          fr: 'Inscription en Ligne — Passeport Biométrique',
        },
        description: {
          ar: 'تسجيل الطلب الأولي لجواز السفر البيومتري، حجز موعد البصمة بالبلدية أو الدائرة، وملء الاستمارة إلكترونيا.',
          fr: 'Préinscription numérique au passeport biométrique avec édition du formulaire et prise de rendez-vous en daïra ou commune.',
        },
        url: 'https://passeport.interieur.gov.dz/Ar/Inscription/BaBou',
        isOnline: true,
      },
      {
        id: 'interieur-srv-6',
        title: {
          ar: 'متابعة طلب جواز السفر البيومتري',
          fr: 'Suivi de la Demande de Passeport Biométrique',
        },
        description: {
          ar: 'الاطلاع الفوري على وضعية ملف جواز السفر وموعد جاهزيته في البلدية عبر رقم الطلب أو بيانات الهوية.',
          fr: 'Vérification instantanée de l’état d’avancement du passeport et de sa réception par le guichet de retrait.',
        },
        url: 'https://passeport.interieur.gov.dz/Ar/Suivi/Suivi%20demande%20passeport',
        isOnline: true,
      },
      {
        id: 'interieur-srv-7',
        title: {
          ar: 'إعادة تحميل صور بيومترية مطابقة للمعايير',
          fr: 'Téléversement de Photo Biométrique Conforme',
        },
        description: {
          ar: 'منصة معالجة رفض الصورة في ملفات الجواز أو البطاقة البيومترية عبر رفع صورة رقمية مطابقة لمعايير الإيكاو عن بعد.',
          fr: 'Portail dédié à la correction en ligne d’une photo rejetée lors de l’instruction d’un dossier passeport ou CNIBE.',
        },
        url: 'https://passeport.interieur.gov.dz/Ar/Rejet/Chargement_Photo',
        isOnline: true,
      },
      {
        id: 'interieur-srv-8',
        title: {
          ar: 'استخراج عقد الزواج إلكترونيا',
          fr: 'Extrait d’Acte de Mariage en Ligne',
        },
        description: {
          ar: 'تحميل نسخة مصدقة إلكترونيا من عقد الزواج عبر بوابة الحالة المدنية دون الحاجة إلى التنقل للبلدية.',
          fr: 'Téléchargement immédiat en PDF d’un extrait d’acte de mariage certifié via le portail national d’état civil.',
        },
        url: 'https://etatcivil.interieur.gov.dz/ActeMariage/',
        isOnline: true,
      },
      {
        id: 'interieur-srv-9',
        title: {
          ar: 'استخراج شهادة الوفاة عن بعد',
          fr: 'Extrait d’Acte de Décès en Ligne',
        },
        description: {
          ar: 'خدمة رقمية لاستخراج شهادة الوفاة الخاصة بالأقارب المسجلين في السجل الوطني الآلي للحالة المدنية.',
          fr: 'Téléservice d’édition en ligne d’un acte de décès enregistré dans le registre national automatisé d’état civil.',
        },
        url: 'https://etatcivil.interieur.gov.dz/ActeDeces/',
        isOnline: true,
      },
      {
        id: 'interieur-srv-10',
        title: {
          ar: 'طلب شهادة الميلاد الخاصة S12 (للجالية بالخارج)',
          fr: 'Demande d’Extrait de Naissance Spécial 12S',
        },
        description: {
          ar: 'طلب استخراج شهادة الميلاد 12S الموجهة لأفراد الجالية الوطنية بالخارج والمولودين خارج الجزائر أو المسجلين في بلدية أخرى.',
          fr: 'Demande dématérialisée de l’acte spécial 12S destiné principalement aux ressortissants établis à l’étranger.',
        },
        url: 'https://demande12s.interieur.gov.dz/Ar/WFDemande.aspx',
        isOnline: true,
      },
      {
        id: 'interieur-srv-11',
        title: {
          ar: 'متابعة طلب شهادة الميلاد الخاصة S12',
          fr: 'Suivi de la Demande d’Extrait 12S',
        },
        description: {
          ar: 'مراقبة معالجة طلب 12S والتأكد من إرساله إلى المركز القنصلي أو البلدية المختصة.',
          fr: 'Suivi en ligne de l’édition et de l’acheminement de votre extrait 12S vers le consulat ou la commune.',
        },
        url: 'https://demande12s.interieur.gov.dz/Ar/WFSuivi.aspx',
        isOnline: true,
      },
      {
        id: 'interieur-srv-12',
        title: {
          ar: 'منصة الشباك عن بعد للخدمات الإدارية',
          fr: 'Guichet Administratif à Distance (Prestations)',
        },
        description: {
          ar: 'إيداع ملفات إدارية متعددة عن بعد (الشؤون الاجتماعية، التنظيم العام، تراخيص مختلفة) ومتابعة الرد إلكترونيا.',
          fr: 'Guichet numérique centralisé permettant le dépôt à distance des dossiers administratifs relevant des collectivités locales.',
        },
        url: 'https://prestations.interieur.gov.dz/guichet/',
        isOnline: true,
      },
      {
        id: 'interieur-srv-13',
        title: {
          ar: 'التسجيل في منحة التضامن لشهر رمضان',
          fr: 'Inscription à l’Allocation de Solidarité Ramadan',
        },
        description: {
          ar: 'البوابة الرسمية لإيداع طلب الاستفادة من منحة التضامن الخاصة بشهر رمضان للعائلات المعوزة وفق الآجال المعلنة سنويا.',
          fr: 'Plateforme officielle d’inscription des ménages éligibles à l’aide financière de solidarité du mois de Ramadan.',
        },
        url: 'https://prestations.interieur.gov.dz/solidariteramdhan/',
        isOnline: true,
      },
      {
        id: 'interieur-srv-14',
        title: {
          ar: 'منصة شكاوى وعرائض المواطنين والتواصل',
          fr: 'Portail des Réclamations Citoyennes & Contact',
        },
        description: {
          ar: 'قناة إلكترونية لتقديم الشكاوى والعرائض والانشغالات الإدارية مباشرة إلى مصالح وزارة الداخلية.',
          fr: 'Espace officiel pour transmettre vos doléances, réclamations ou demandes d’information aux services centraux.',
        },
        url: 'https://www.interieur.gov.dz/index.php/ar/component/annuaire/?view=contacter_nous_ar',
        isOnline: true,
      },
      {
        id: 'interieur-srv-15',
        title: {
          ar: 'برنامج القراءة الآلية لبطاقة التعريف البيومترية',
          fr: 'Logiciel de Lecture Électronique de la CNIBE (DzaEidCard)',
        },
        description: {
          ar: 'تحميل البرمجية الرسمية لقراءة البيانات المشفرة في شريحة بطاقة التعريف البيومترية للإدارات والمؤسسات.',
          fr: 'Téléchargement de l’utilitaire officiel destiné à la lecture sécurisée de la puce électronique des cartes CNIBE.',
        },
        url: 'https://macnibe.interieur.gov.dz/Files/DzaEidCard.msi',
        isOnline: true,
      },
      {
        id: 'interieur-srv-16',
        title: {
          ar: 'تطبيق ولايتي (Wilayati) للمؤشرات المحلية',
          fr: 'Application Mobile Wilayati (Monographies Locales)',
        },
        description: {
          ar: 'تطبيق لعرض المعطيات الإحصائية والتنموية والجغرافية الخاصة بكل ولايات الجزائر.',
          fr: 'Application officielle présentant les données monographiques, économiques et géographiques des wilayas d’Algérie.',
        },
        url: 'http://monographie.interieur.gov.dz/data/wilayati.apk',
        isOnline: true,
      },
      {
        id: 'interieur-srv-17',
        title: {
          ar: 'تطبيق نظيف (Ndif) للتبليغ عن النقاط السوداء للنظافة',
          fr: 'Application Mobile Ndif (Propreté Urbaine)',
        },
        description: {
          ar: 'تطبيق تشاركي يمكن المواطنين من التقاط صور للنفايات والنقاط السوداء وإرسالها للبلديات للتدخل الفوري.',
          fr: 'Application citoyenne permettant de signaler par photo géolocalisée les points noirs de propreté aux services communaux.',
        },
        url: 'https://play.google.com/store/apps/details?id=dz.and.ndif&hl=ar&gl=US',
        isOnline: true,
      },
      {
        id: 'interieur-srv-18',
        title: {
          ar: 'تطبيق ألو شرطة (Allo Chorta) للأمن الوطني',
          fr: 'Application Mobile Allo Chorta (DGSN)',
        },
        description: {
          ar: 'التطبيق الرسمي للأمن الوطني المرتبط بغرف العمليات للتبليغ السريع عن الحوادث والطوارئ الأمنية والمرورية.',
          fr: 'Application mobile officielle de la Sûreté Nationale dédiée aux signalements urgents et incidents routiers ou sécuritaires.',
        },
        url: 'https://play.google.com/store/apps/details?id=allochorta.algeriepolice.dz&hl=ar&gl=US',
        isOnline: true,
      },
      {
        id: 'interieur-srv-19',
        title: {
          ar: 'طلب شهادة الكفاءة لرخصة السياقة',
          fr: 'Demande de Certificat de Capacité du Permis de Conduire',
        },
        description: {
          ar: 'تقديم طلب إلكتروني للحصول على شهادة الكفاءة والأصالة الخاصة برخصة السياقة الجزائرية للاستعمال داخل الوطن أو بالخارج.',
          fr: 'Téléservice permettant d’obtenir l’attestation d’authenticité et de capacité de votre permis de conduire algérien.',
        },
        url: 'https://capacitepc.interieur.gov.dz/GET-STARTED',
        isOnline: true,
      },
      {
        id: 'interieur-srv-20',
        title: {
          ar: 'طلب تسجيل التصريح التأسيسي للجمعيات ولجان الأحياء',
          fr: 'Déclaration de Constitution des Associations & Comités de Quartier',
        },
        description: {
          ar: 'بوابة إيداع ملفات تأسيس الجمعيات المحلية والبلدية ولجان الأحياء ومتابعة وصل الإيداع أو الاعتماد رقميا.',
          fr: 'Guichet en ligne pour le dépôt des dossiers de déclaration constitutive des associations communales et comités de quartier.',
        },
        url: 'https://prestations.interieur.gov.dz/Association/LOGIN',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'كافة المواطنين المقيمين في الجزائر وأفراد الجالية بالخارج والجمعيات المحلية',
        fr: 'Tous les citoyens résidant en Algérie, la diaspora à l’étranger et les associations locales',
      },
      processingTime: {
        ar: 'فوري لوثائق الحالة المدنية الممضى عليها إلكترونيا؛ بين أيام وأسابيع للوثائق البيومترية وحسب جدول البرامج للجمعيات والمنح',
        fr: 'Instantané pour les actes d’état civil PDF ; délai variable selon le circuit de fabrication biométrique ou d’instruction',
      },
      fees: {
        ar: 'استخراج الحالة المدنية مجاني بالكامل؛ تخضع البطاقة البيومترية وجواز السفر لرسوم الطابع الجبائي القانونية',
        fr: 'Actes d’état civil gratuits ; droits de timbre fiscal applicables pour le passeport et le renouvellement de la CNIBE',
      },
      channel: {
        ar: 'بوابات etatcivil وpasseport وprestations.interieur.gov.dz وشبابيك البلديات والدوائر',
        fr: 'Portails etatcivil, passeport et prestations.interieur.gov.dz ainsi que les guichets communaux',
      },
      keyRequirement: {
        ar: 'رقم التعريف الوطني NIN، رقم عقد الميلاد أو الزواج، وصورة بيومترية مطابقة أو طابع جبائي إلكتروني',
        fr: 'NIN, numéro d’acte d’état civil, photo conforme aux normes OACI et timbre fiscal (tabioukom.mf.gov.dz)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'بيانات الحالة المدنية وNIN',
          fr: 'Données d’état civil & NIN',
        },
        value: {
          ar: 'البلدية والولاية، رقم عقد الميلاد أو الزواج، ورقم التعريف الوطني NIN للولوج السريع',
          fr: 'Commune et wilaya d’enregistrement, numéro d’acte et NIN pour les extraits certifiés',
        },
      },
      {
        label: {
          ar: 'مواصفات الصورة والملف البيومتري',
          fr: 'Conformité photo & biométrie',
        },
        value: {
          ar: 'صورة حديثة بخلفية بيضاء موحدة دون نظارات أو إضافات عند التقديم أو المعالجة عبر Chargement_Photo',
          fr: 'Photo récente sur fond blanc uni sans lunettes ni reflets respectant les normes biométriques',
        },
      },
      {
        label: {
          ar: 'الطابع الجبائي (عند تجديد الجواز أو البطاقة الضائعة)',
          fr: 'Timbre fiscal obligatoire',
        },
        value: {
          ar: 'دفع حقوق الطابع الجبائي إلكترونيا عبر منصة طابعكم أو قباضات الضرائب حسب نوع الجواز أو تجديد CNIBE',
          fr: 'Quittance de timbre fiscal (plateforme Tabioukom ou recette des impôts) selon la formule de passeport',
        },
      },
      {
        label: {
          ar: 'الملف التأسيسي للجمعيات والمنح',
          fr: 'Pièces pour associations ou solidarité',
        },
        value: {
          ar: 'نسخة القانون الأساسي ومحضر الجمعية العامة التأسيسية للجمعيات، أو كشف الوضعية الاجتماعية لمنحة رمضان',
          fr: 'Statuts et PV constitutif numérisés pour les associations, ou justificatifs sociaux pour l’aide Ramadan',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل شهادة الميلاد المستخرجة من موقع etatcivil.interieur.gov.dz مقبولة في كل الإدارات؟',
          fr: 'L’acte de naissance téléchargé sur etatcivil.interieur.gov.dz a-t-il valeur légale ?',
        },
        answer: {
          ar: 'نعم، تتضمن الوثيقة المستخرجة بصيغة PDF توقيعا إلكترونيا ورمز استجابة سريع QR للتحقق الفوري من صحتها، وهي معتمدة قانونا في جميع الإدارات والبنوك والجامعات دون ختم حبري إضافي.',
          fr: 'Oui, le document PDF généré comporte une signature électronique officielle et un QR Code vérifiable, lui conférant pleine valeur probante devant toutes les administrations algériennes.',
        },
      },
      {
        question: {
          ar: 'كيف أعرف أين وصل طلبي لاستلام جواز السفر أو بطاقة التعريف البيومترية؟',
          fr: 'Comment suivre la fabrication de mon passeport ou de ma CNIBE ?',
        },
        answer: {
          ar: 'استعمل خدمة المتابعة عبر passeport.interieur.gov.dz بإدخال رقم الطلب الموجود في وصل الإيداع وتاريخ الميلاد وولاية الإيداع، وسيظهر لك ما إذا تم الإرسال إلى البلدية للاستلام.',
          fr: 'Consultez la rubrique Suivi sur passeport.interieur.gov.dz en saisissant le numéro de dossier figurant sur votre récépissé et votre commune de dépôt.',
        },
      },
      {
        question: {
          ar: 'وصلتني رسالة برفض الصورة البيومترية، هل أعيد تقديم الملف في البلدية؟',
          fr: 'Ma photo biométrique a été rejetée, dois-je me déplacer en mairie ?',
        },
        answer: {
          ar: 'لا داعي لإعادة الملف كاملا؛ خصصت الوزارة رابط Chargement_Photo على بوابة جواز السفر لرفع صورة رقمية مطابقة للمعايير إلكترونيا واستئناف الطبع فورا.',
          fr: 'Non, le portail passeport.interieur.gov.dz propose le téléservice « Chargement_Photo » permettant de téléverser une nouvelle photo conforme directement en ligne.',
        },
      },
      {
        question: {
          ar: 'ما هي شهادة الكفاءة لرخصة السياقة وما فائدتها؟',
          fr: 'À quoi sert le certificat de capacité du permis de conduire (capacitepc) ?',
        },
        answer: {
          ar: 'هي وثيقة رسمية تثبت أصالة رخصة السياقة الجزائرية وصلاحيتها وتخلوها من التوقيف أو السحب، وتطلب غالبا عند تحويل رخصة السياقة في الخارج أو في بعض الملفات المهنية.',
          fr: 'C’est une attestation officielle confirmant l’authenticité et la validité du permis de conduire algérien, souvent exigée à l’étranger pour l’échange de permis ou certains emplois.',
        },
      },
    ],
  },

  // 32. madr
  {
    id: 'madr',
    slug: 'madr',
    category: 'ministries',
    name: {
      ar: 'وزارة الفلاحة والتنمية الريفية والصيد البحري (MADR)',
      fr: "Ministère de l'Agriculture, du Développement Rural et de la Pêche (MADR)",
    },
    acronym: 'MADR',
    ministry: {
      ar: 'وزارة الفلاحة والتنمية الريفية والصيد البحري',
      fr: "Ministère de l'Agriculture et du Développement Rural",
    },
    description: {
      ar: 'البوابة الرقمية لوزارة الفلاحة والتنمية الريفية والصيد البحري: منصة حصاد لمرافقة الفلاحين، بوابة أضاحي العيد Adhahi، بوابة التراخيص التقنية لاستيراد البذور والشتلات، تسجيل الأطباء البياطرة لدى السلطة البيطرية AVN، ونافذة الشفافية والنزاهة.',
      fr: "Portail numérique du MADR en Algérie : plateforme Hassad (récolte céréalière), dispositif Adhahi.dz, portail PSLAR d'autorisations d'importation agricole, inscription vétérinaire AVN, cellule d'écoute et fenêtre transparence.",
    },
    officialUrl: 'https://www.madr.gov.dz/ar',
    portalUrl: 'https://hassad.dz/',
    iconName: 'Compass',
    isPopular: false,
    services: [
      {
        id: 'madr-srv-1',
        title: {
          ar: 'الموقع الرسمي لوزارة الفلاحة والتنمية الريفية',
          fr: "Site Officiel du Ministère de l'Agriculture (MADR)",
        },
        description: {
          ar: 'البوابة الرئيسية لمتابعة البرامج الفلاحية الوطنية، إعلانات الحملات الموسمية، والتنظيمات الفلاحية.',
          fr: 'Portail institutionnel central regroupant actualités agricoles, textes réglementaires et plateformes sectorielles.',
        },
        url: 'https://www.madr.gov.dz/ar',
        isOnline: true,
      },
      {
        id: 'madr-srv-2',
        title: {
          ar: 'منصة حصاد (Hassad) لمرافقة حملة الحصاد والدرس',
          fr: 'Plateforme Hassad — Campagne Moisson-Battage',
        },
        description: {
          ar: 'حجز مواعيد تسليم محصول الحبوب لدى تعاونيات الحبوب والبقول الجافة (CCLS وAGRODRIVE) ومتابعة الملفات.',
          fr: 'Plateforme permettant aux céréaliculteurs de planifier le dépôt de leurs récoltes auprès des coopératives CCLS et AGRODRIVE.',
        },
        url: 'https://hassad.dz/',
        isOnline: true,
      },
      {
        id: 'madr-srv-3',
        title: {
          ar: 'التسجيل لدى السلطة البيطرية الوطنية (AVN)',
          fr: 'Inscription à l’Autorité Vétérinaire Nationale (AVN)',
        },
        description: {
          ar: 'إيداع طلب التسجيل والحصول على شهادة القيد لدى السلطة البيطرية الوطنية للأطباء البياطرة.',
          fr: 'Téléservice de demande d’inscription et de délivrance de l’attestation auprès de l’Autorité Vétérinaire Nationale.',
        },
        url: 'https://pslar.madr.gov.dz/dsv/inscription-alautorite-nationale-veterinaire-avn/',
        isOnline: true,
      },
      {
        id: 'madr-srv-4',
        title: {
          ar: 'نقاط بيع أضاحي العيد المعتمدة (Adhahi)',
          fr: 'Points de Vente Agréés — Plateforme Adhahi.dz',
        },
        description: {
          ar: 'عرض قائمة ومواقع نقاط البيع الرسمية المعتمدة لاقتناء أضاحي العيد عبر ولايات الوطن.',
          fr: 'Carte et liste officielle des points de vente agréés pour l’acquisition des moutons de l’Aïd par wilaya.',
        },
        url: 'https://adhahi.dz/points-de-vente',
        isOnline: true,
      },
      {
        id: 'madr-srv-5',
        title: {
          ar: 'ترخيص تقني مسبق لاستيراد الشتلات',
          fr: 'Autorisation Technique Préalable — Importation de Plants',
        },
        description: {
          ar: 'إيداع ملف طلب الترخيص التقني المسبق لاستيراد الشتلات الفلاحية عبر منصة التراخيص الصحية النباتية والحيوانية.',
          fr: 'Procédure en ligne auprès de la DPVCT pour solliciter l’autorisation technique d’importation de plants agricoles.',
        },
        url: 'https://pslar.madr.gov.dz/procedure-de-demande-dautorisation-technique-prealable-dimportation-des-plants/',
        isOnline: true,
      },
      {
        id: 'madr-srv-6',
        title: {
          ar: 'اعتماد معالجة مواد التعبئة الخشبية الموجهة للتصدير',
          fr: 'Agrément — Traitement des Emballages en Bois à l’Export',
        },
        description: {
          ar: 'طلب اعتماد المؤسسات المتخصصة في المعالجة الحرارية والمطابقة الصحية للمنصات والصناديق الخشبية التصديرية.',
          fr: 'Demande d’agrément sanitaire (norme NIMP15) pour les opérateurs traitant les emballages en bois destinés à l’exportation.',
        },
        url: 'https://pslar.madr.gov.dz/dpvct/agrement-pour-traitement-des-materiaux-demballages-en-bois-destines-a-lexportation/',
        isOnline: true,
      },
      {
        id: 'madr-srv-7',
        title: {
          ar: 'ترخيص تقني مسبق لاستيراد البذور',
          fr: 'Autorisation Technique — Importation de Semences',
        },
        description: {
          ar: 'خدمة رقمية موجهة لمستوردي البذور الزراعية للحصول على الموافقة التقنية والصحية قبل عملية الشحن.',
          fr: 'Téléservice dédié aux importateurs de semences agricoles pour l’obtention du visa technique préalable.',
        },
        url: 'https://pslar.madr.gov.dz/dpvct/demande-dautorisation-technique-prealable-dimportation-des-semences/',
        isOnline: true,
      },
      {
        id: 'madr-srv-8',
        title: {
          ar: 'ترخيص تقني مسبق لاستيراد بذور البطاطا',
          fr: 'Autorisation Technique — Importation de Semences de Pomme de Terre',
        },
        description: {
          ar: 'تقديم طلب استيراد بذور البطاطا وفق الحصص والمواصفات الصحية النباتية المعتمدة لدى الوزارة.',
          fr: 'Dépôt dématérialisé des demandes d’importation de plants et semences de pomme de terre selon les quotas réglementaires.',
        },
        url: 'https://pslar.madr.gov.dz/importation-de-semences-de-pomme-de-terre/',
        isOnline: true,
      },
      {
        id: 'madr-srv-9',
        title: {
          ar: 'ترخيص مسبق لاستيراد منتجات الصحة النباتية للاستخدام الزراعي',
          fr: 'Autorisation d’Importation — Produits Phytosanitaires Agricoles',
        },
        description: {
          ar: 'إيداع ملفات استيراد المبيدات والمنتجات المرخصة للصحة النباتية ومراقبة مطابقتها للقوائم المعتمدة.',
          fr: 'Guichet d’instruction des demandes d’importation de produits phytosanitaires homologués à usage agricole.',
        },
        url: 'https://pslar.madr.gov.dz/dpvct/importation-des-produits-phytosanitaires-a-usage-agricole/',
        isOnline: true,
      },
      {
        id: 'madr-srv-10',
        title: {
          ar: 'ترخيص تقني مسبق لاستيراد نبتات الزينة',
          fr: 'Autorisation Technique — Importation de Plantes Ornementales',
        },
        description: {
          ar: 'طلب الموافقة التقنية والصحية النباتية لاستيراد نباتات وأشجار الزينة عبر البوابة المخصصة.',
          fr: 'Demande en ligne d’autorisation préalable phytosanitaire pour l’importation de plantes ornementales.',
        },
        url: 'https://pslar.madr.gov.dz/dpvct/demande-dautorisation-technique-prealable-dimportation-des-plants-ornementaux/',
        isOnline: true,
      },
      {
        id: 'madr-srv-11',
        title: {
          ar: 'التسجيل في منصة أضاحي العيد (Adhahi Register)',
          fr: 'Inscription Citoyenne — Plateforme Adhahi.dz',
        },
        description: {
          ar: 'إنشاء حساب للمواطنين الراغبين في حجز واقتناء أضحية العيد إلكترونيا ضمن البرامج المنظمة موسميا.',
          fr: 'Création de compte sur la plateforme officielle pour réserver un mouton de l’Aïd dans les points de vente contrôlés.',
        },
        url: 'https://adhahi.dz/register',
        isOnline: true,
      },
      {
        id: 'madr-srv-12',
        title: {
          ar: 'تسجيل الدخول إلى حساب أضاحي العيد',
          fr: 'Connexion Espace Utilisateur — Adhahi.dz',
        },
        description: {
          ar: 'الدخول إلى الحساب الشخصي لمتابعة الحجز واختيار نقطة البيع وتأكيد الموعد.',
          fr: 'Accès à votre espace personnel Adhahi pour consulter votre réservation et votre bon de retrait.',
        },
        url: 'https://adhahi.dz/login',
        isOnline: true,
      },
      {
        id: 'madr-srv-13',
        title: {
          ar: 'لوحة إحصائيات ومتابعة أضاحي العيد بالأرقام',
          fr: 'Statistiques & Disponibilités Nationales — Adhahi.dz',
        },
        description: {
          ar: 'متابعة آنية لأعداد الرؤوس المتوفرة والكميات الموزعة عبر الولايات.',
          fr: 'Tableau de bord public indiquant les effectifs disponibles et la répartition nationale par wilaya.',
        },
        url: 'https://adhahi.dz/moutons-nationaux/',
        isOnline: true,
      },
      {
        id: 'madr-srv-14',
        title: {
          ar: 'خلية الإصغاء والتوجيه للفلاحين والمستثمرين',
          fr: 'Cellule d’Écoute & Orientation Agricole (PSLAR)',
        },
        description: {
          ar: 'منصة لتقديم الانشغالات الفلاحية، طلب الإرشادات التقنية، وطرح عوائق الاستثمار الفلاحي.',
          fr: 'Guichet dédié aux agriculteurs et investisseurs pour soumettre leurs préoccupations ou solliciter un accompagnement.',
        },
        url: 'https://pslar.madr.gov.dz/cellule-ecoute/',
        isOnline: true,
      },
      {
        id: 'madr-srv-15',
        title: {
          ar: 'خلية استقبال التبليغات عن الفساد (نزاهة MADR)',
          fr: 'Cellule de Signalement & Intégrité (Nazaha MADR)',
        },
        description: {
          ar: 'قناة سرية لاستقبال التبليغات حول أي تجاوزات أو مخالفات إدارية في القطاع الفلاحي والغابي.',
          fr: 'Canal confidentiel de signalement des irrégularités ou faits de corruption dans le secteur agricole et forestier.',
        },
        url: 'https://madr.gov.dz/nazaha/',
        isOnline: true,
      },
      {
        id: 'madr-srv-16',
        title: {
          ar: 'نافذة الشفافية لتراخيص الاستيراد النباتية والحيوانية',
          fr: 'Fenêtre Transparence — Autorisations Sanitaires d’Importation',
        },
        description: {
          ar: 'فضاء نشر ومتابعة تراخيص الاستيراد الممنوحة في مجال الصحة النباتية والحيوانية تكريسا لمبدأ الشفافية.',
          fr: 'Portail public publiant les autorisations techniques accordées dans le domaine phytosanitaire et vétérinaire.',
        },
        url: 'https://madr.gov.dz/transparency',
        isOnline: true,
      },
    ],
    quickSummary: {
      targetAudience: {
        ar: 'الفلاحون والمربون، الأطباء البياطرة، مستوردو المدخلات الفلاحية، والمواطنون في المواسم الفلاحية',
        fr: 'Agriculteurs, éleveurs, vétérinaires, importateurs d’intrants agricoles et citoyens (opérations saisonnières)',
      },
      processingTime: {
        ar: 'حجز فوري في منصة حصاد وأضاحي؛ دراسة التراخيص التقنية PSLAR خلال الآجال التنظيمية من قبل المصالح البيطرية والنباتية',
        fr: 'Réservation immédiate sur Hassad/Adhahi ; instruction des autorisations PSLAR selon les délais techniques DPVCT/DSV',
      },
      fees: {
        ar: 'إيداع الطلبات في المنصات الرقمية لوزارة الفلاحة مجاني بالكامل مع خضوع التراخيص التجارية للرسوم القانونية عند الاقتضاء',
        fr: 'L’accès aux téléservices MADR, PSLAR et Hassad est gratuit (taxes sanitaires réglementaires applicables selon le dossier)',
      },
      channel: {
        ar: 'منصات madr.gov.dz وpslar.madr.gov.dz وhassad.dz وadhahi.dz ومديريات المصالح الفلاحية الولائية DSA',
        fr: 'Portails madr.gov.dz, pslar.madr.gov.dz, hassad.dz, adhahi.dz et Directions des Services Agricoles (DSA)',
      },
      keyRequirement: {
        ar: 'بطاقة الفلاح أو السجل التجاري للمتعاملين، وشهادة المطابقة الصحية أو الدبلوم البيطري للخدمات المهنية',
        fr: 'Carte d’agriculteur ou registre du commerce selon la démarche, et justificatifs sanitaires ou diplôme vétérinaire',
      },
    },
    requirements: [
      {
        label: {
          ar: 'حملة الحصاد والدرس (منصة حصاد)',
          fr: 'Dépôt de récoltes (Hassad)',
        },
        value: {
          ar: 'بطاقة الفلاح أو وثيقة إثبات النشاط الزراعي وتصريح المساحة المزروعة لدى CCLS أو DSA',
          fr: 'Carte professionnelle d’agriculteur ou justificatif d’exploitation enregistré auprès de la DSA / CCLS',
        },
      },
      {
        label: {
          ar: 'ملف التراخيص التقنية للاستيراد (PSLAR)',
          fr: 'Autorisations techniques (PSLAR)',
        },
        value: {
          ar: 'السجل التجاري المطابق للنشاط، الفاتورة الشكلية، شهادة المنشأ والمطابقة الصحية النباتية',
          fr: 'Registre de commerce conforme, facture proforma, certificat d’origine et fiche phytosanitaire du produit',
        },
      },
      {
        label: {
          ar: 'التسجيل في السلطة البيطرية (AVN)',
          fr: 'Inscription vétérinaire (AVN)',
        },
        value: {
          ar: 'شهادة دكتور في الطب البيطري، شهادة الجنسية وبطاقة التعريف الوطنية لطلب القيد أو ممارسة النشاط',
          fr: 'Diplôme de docteur vétérinaire, pièce d’identité biométrique et justificatif de situation professionnelle',
        },
      },
      {
        label: {
          ar: 'حجز أضاحي العيد (Adhahi)',
          fr: 'Réservation sur Adhahi.dz',
        },
        value: {
          ar: 'رقم التعريف الوطني NIN، رقم الهاتف النشط، والالتزام بشروط الاستلام في نقطة البيع المحددة',
          fr: 'Numéro d’Identification Nationale (NIN), téléphone actif et respect du créneau de retrait en point de vente',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن للفلاح غير الحائز على بطاقة الفلاح بيع محصوله عبر منصة حصاد؟',
          fr: 'Un agriculteur sans carte d’agriculteur peut-il utiliser la plateforme Hassad ?',
        },
        answer: {
          ar: 'نعم، تتيح منصة حصاد مسارا مخصصا للفلاحين غير الحائزين على بطاقة الفلاح الراغبين في تسويق محصولهم من الحبوب، حيث تتكفل تعاونيات الحبوب CCLS وAGRODRIVE بدراسة طلبهم ميدانيا.',
          fr: 'Oui, Hassad prévoit un parcours dédié aux exploitants ne disposant pas encore de carte d’agriculteur, dont la demande est instruite directement par la coopérative CCLS ou AGRODRIVE.',
        },
      },
      {
        question: {
          ar: 'ما هي منصة PSLAR التابعة لوزارة الفلاحة؟',
          fr: 'À quoi sert la plateforme PSLAR du Ministère de l’Agriculture ?',
        },
        answer: {
          ar: 'هي البوابة الموحدة لتبسيط الإجراءات الإدارية والصحية (البيطرية والنباتية)، وتستعمل لإيداع طلبات التراخيص التقنية المسبقة لاستيراد البذور والشتلات والمبيدات والتسجيل لدى السلطة البيطرية AVN.',
          fr: 'PSLAR centralise les démarches phytosanitaires (DPVCT) et vétérinaires (DSV) : autorisations préalables d’importation de semences, plants et intrants, ainsi que l’inscription AVN.',
        },
      },
      {
        question: {
          ar: 'كيف أتحقق من قائمة المتعاملين الحاصلين على تراخيص الاستيراد الفلاحي؟',
          fr: 'Où consulter les autorisations sanitaires d’importation délivrées ?',
        },
        answer: {
          ar: 'أطلقت الوزارة «نافذة الشفافية» (madr.gov.dz/transparency) التي تنشر دوريا وضعية التراخيص الممنوحة في مجال الصحة النباتية والحيوانية للعموم والمتعاملين.',
          fr: 'La rubrique « Fenêtre Transparence » (madr.gov.dz/transparency) publie régulièrement les statistiques et informations relatives aux autorisations phytosanitaires et vétérinaires délivrées.',
        },
      },
      {
        question: {
          ar: 'كيف أستفيد من خدمات منصة أضاحي العيد عند فتحها موسميا؟',
          fr: 'Comment s’inscrire et acheter via Adhahi.dz pendant la campagne de l’Aïd ?',
        },
        answer: {
          ar: 'يجب التسجيل المسبق على adhahi.dz/register أثناء فترة فتح البوابة، ثم اختيار الولاية وأقرب نقطة بيع معتمدة من قائمة adhahi.dz/points-de-vente وتأكيد الموعد وفق الآليات المعلنة من الوزارة.',
          fr: 'Créez votre compte sur adhahi.dz/register dès l’ouverture saisonnière, consultez les points de vente agréés par wilaya sur adhahi.dz/points-de-vente et validez votre créneau selon les modalités annoncées.',
        },
      },
    ],
  },
];

export const batch4Guides: Record<string, RichGuideContent> = {
  facteur: {
    intro: {
      ar: [
        'يمثل الدفع الإلكتروني للفواتير المنزلية في الجزائر قفزة نوعية توفر على ملايين المواطنين عناء الانتظار أمام الوكالات التجارية ومكاتب البريد. وبفضل الربط البيني بين شبكة بريد الجزائر (البطاقة الذهبية وتطبيق بريدي موب) والشبكة البنكية (بطاقة CIB)، أصبحت كافة فواتير الكهرباء والغاز والمياه والإنترنت متاحة للتسوية عن بعد طوال أيام الأسبوع.',
        'يجمع هذا الدليل بوابات التسديد الرسمية المعتمدة حسب كل مؤسسة: منصة ELIT لتسديد فواتير سونلغاز، بوابة الجزائرية للمياه ADE لمعظم ولايات الوطن، منصة فاتورتي الخاصة بشركة سيال SEAAL لولايتي الجزائر وتيبازة، بوابة شركة سيوور SEOR لوهران، بالإضافة إلى بوابة اتصالات الجزائر لتعبئة الإنترنت ودفع الهاتف الثابت.',
        'تجد في الخطوات التالية الطريقة الموحدة للعثور على الأرقام المرجعية الصحيحة فوق فاتورتك الورقية، إتمام الدفع عبر الويب أو عبر تطبيق بريدي موب بأمان، وطرق التعامل التقني السليم مع حالات انقطاع الإنترنت أثناء لحظة تأكيد الدفع.'
      ],
      fr: [
        "La dématérialisation du règlement des factures domestiques en Algérie permet désormais aux ménages et entreprises d’éviter les files d’attente aux agences commerciales et bureaux de poste. Grâce à l’interopérabilité entre le réseau postal (Edahabia / BaridiMob) et le réseau interbancaire (CIB), le paiement des charges énergétiques, hydriques et télécoms s’effectue 24h/24.",
        "Cette page regroupe l’ensemble des portails officiels vérifiés selon votre fournisseur : télépaiement ELIT pour Sonelgaz, espace e-paiement de l’Algérienne des Eaux (ADE), plateforme Fatourati de SEAAL (Alger et Tipaza), portail client de SEOR (Oran) et espace de rechargement d’Algérie Télécom.",
        "Retrouvez ci-dessous la méthode pratique pour repérer vos références de facture, valider votre paiement en toute sécurité par code OTP et réagir efficacement en cas de coupure ou de latence bancaire."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'حيازة الفاتورة الورقية أو الرقمية لمعرفة الرقم المرجعي (Référence) ومفتاح التحقق.',
        'توفر بطاقة الذهبية أو بطاقة ما بين البنوك CIB سارية المفعول ومفعلة للدفع عبر الإنترنت.',
        'ربط البطاقة برقم هاتف محمول نشط لاستقبال رمز المصادقة الأمني SMS (3D Secure).',
        'التحقق من نطاق الموقع الإلكتروني الرسمي (.dz / .elit.dz / .seaal.dz) قبل إدخال بيانات البطاقة.',
      ],
      fr: [
        'Disposer de la facture papier ou numérique pour relever la référence client et la clé.',
        'Détenir une carte Edahabia ou CIB valide et activée pour le e-paiement.',
        'Avoir accès au numéro de téléphone mobile lié à la carte pour recevoir le code OTP.',
        'Vérifier systématiquement le domaine officiel (.dz / .elit.dz / .seaal.dz) avant de saisir vos coordonnées.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. تحديد المؤسسة الموزعة واستخراج المرجع من الفاتورة',
          fr: '1. Identifier votre opérateur et relever les références',
        },
        detail: {
          ar: 'اختر المنصة المطابقة لفاتورتك (سونلغاز للكهرباء والغاز، SEAAL أو ADE أو SEOR للمياه) وانقل رقم الفاتورة والمفتاح بدقة.',
          fr: 'Sélectionnez le guichet correspondant (Sonelgaz, ADE, SEAAL ou SEOR) et notez le numéro de facture ainsi que la clé de contrôle.',
        },
      },
      {
        title: {
          ar: '2. التحقق من المبلغ المستحق وفترة الاستهلاك على البوابة',
          fr: '2. Vérifier le montant dû et la période facturée',
        },
        detail: {
          ar: 'بعد إدخال المرجع، يظهر النظام المبلغ الإجمالي بالدينار وحالة الفاتورة (غير مدفوعة أو مدفوعة جزئيا) للمعاينة قبل الدفع.',
          fr: 'Après saisie de la référence, la plateforme affiche automatiquement le montant exact en dinars et le statut de la quittance.',
        },
      },
      {
        title: {
          ar: '3. إدخال بيانات البطاقة الذهبية أو CIB وتأكيد رمز OTP',
          fr: '3. Saisir les données Edahabia/CIB et valider par code OTP',
        },
        detail: {
          ar: 'اختر وسيلة الدفع عبر بوابة SATIM أو بريد الجزائر، أدخل رقم البطاقة وتاريخ الانتهاء وCVV2 ثم أكد العملية بالرمز الوارد عبر SMS.',
          fr: 'Choisissez le mode de règlement, complétez les informations de votre carte puis saisissez le mot de passe à usage unique reçu par SMS.',
        },
      },
      {
        title: {
          ar: '4. تحميل وصل الدفع الإلكتروني PDF أو الدفع عبر بريدي موب',
          fr: '4. Télécharger le reçu PDF (ou payer via BaridiMob)',
        },
        detail: {
          ar: 'احفظ وصل الإبراء فورا على هاتفك؛ ويمكنك كذلك اختصار الخطوات من قائمة المدفوعات داخل تطبيق بريدي موب.',
          fr: 'Téléchargez immédiatement votre justificatif PDF ; vous pouvez également régler directement depuis l’onglet Paiements de BaridiMob.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'رسالة «رقم الفاتورة غير موجود» أو «المرجع خاطئ»',
          fr: 'Message « Référence introuvable » ou « Clé invalide »',
        },
        solution: {
          ar: 'تأكد من عدم ترك فراغات أو أصفار زائدة، وتحقق من إدخال «رقم الفاتورة» المكون غالبا من 12 إلى 14 رقما وليس رقم العداد فقط.',
          fr: 'Vérifiez l’absence d’espaces superflus et assurez-vous d’indiquer le numéro de facture (et sa clé) plutôt que le numéro physique du compteur.',
        },
      },
      {
        issue: {
          ar: 'عدم وصول رمز التأكيد SMS عند الدفع بالبطاقة الذهبية أو CIB',
          fr: 'Non-réception du code de validation SMS (OTP)',
        },
        solution: {
          ar: 'تأكد من عدم تفعيل حظر الرسائل الدعائية وتأكد في بريد الجزائر من تحديث رقم الهاتف عبر الصراف الآلي GAB أو حساب ECCP.',
          fr: 'Vérifiez la couverture réseau et confirmez auprès d’un GAB Algérie Poste ou de votre agence bancaire que le numéro mobile rattaché à la carte est bien actif.',
        },
      },
      {
        issue: {
          ar: 'تجاوز المهلة الزمنية للصفحة أو فشل الدفع بعد الخصم',
          fr: 'Expiration de session ou débit sans confirmation immédiate',
        },
        solution: {
          ar: 'راجع كشف الحساب في ECCP أو بريدي موب بعد 30 دقيقة؛ إذا خصم المبلغ دون وصول PDF راجع الوكالة التجارية برقم المعاملة المرجعي.',
          fr: 'Consultez votre relevé BaridiMob ou e-banking après 30 minutes ; en cas de débit non répercuté sous 24h, présentez la référence de transaction à votre agence.',
        },
      },
    ],
    extraFaqs: [],
  },

  facture_loyer: {
    intro: {
      ar: [
        'أتاح قطاع السكن والعمران منظومة رقمية متكاملة لتسديد فواتير الإيجار الشهري وأعباء التسيير العقاري عن بعد، مما أنهى ظاهرة الطوابير الشهرية أمام مكاتب التحصيل التابعة لفرع التسيير العقاري لوكالة عدل (Gest-Immo) ودواوين الترقية والتسيير العقاري (OPGI) والمؤسسة الوطنية للترقية العقارية (ENPI).',
        'يرتكز نظام الدفع العقاري على منح كل مستفيد أو مستأجر رمز زبون وحيد يتيح له الاطلاع على كشف الإيجار، حساب أي مستحقات متراكمة أو أعباء مشتركة، وتوليد وصل إبراء رقمي معترف به محاسبيا بمجرد إتمام العملية عبر البطاقة الذهبية أو CIB أو تطبيق بريدي موب.',
        'يوضح هذا الدليل العملي شروط الولوج إلى بوابات التسديد العقاري، كيفية إتمام الدفع الشهري بانتظام لتجنب غرامات التأخير، والخطوات الواجب اتباعها عند ظهور خطأ في رمز المستأجر أو تأخر تحيين الفاتورة في الحساب.'
      ],
      fr: [
        "Le secteur de l’habitat en Algérie a généralisé le paiement dématérialisé des loyers et charges de gestion immobilière, mettant fin aux déplacements mensuels vers les régies d’encaissement d’AADL Gest-Immo, des Offices de Promotion et de Gestion Immobilière (OPGI) et de l’ENPI.",
        "Chaque locataire ou souscripteur dispose d’un identifiant client unique lui permettant de consulter ses avis d’échéance, de vérifier le détail des charges communes et de régler ses mensualités via Edahabia, CIB ou BaridiMob avec édition immédiate d’une quittance numérique.",
        "Ce guide détaille les identifiants nécessaires à l’accès aux portails locatifs, la procédure pas à pas pour régler à bonne date sans pénalité et les réflexes utiles en cas d’anomalie de facturation."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر رمز المستفيد أو رقم العقد السكني الخاص بـ AADL Gest-Immo أو OPGI أو ENPI.',
        'بطاقة دفع إلكتروني سارية (الذهبية أو CIB) برصيد يكفي لتغطية قيمة الفاتورة الشهرية.',
        'تفعيل خدمة الإشعارات بالرسائل القصيرة SMS على رقم الهاتف المرتبط بالبطاقة.',
        'مراقبة تاريخ الاستحقاق الشهري والاحتفاظ بنسخ الوصولات الإلكترونية بصيغة PDF.',
      ],
      fr: [
        'Disposer de son code locataire / souscripteur (Gest-Immo, OPGI ou ENPI).',
        'Détenir une carte Edahabia ou CIB valide avec provision suffisante.',
        'Avoir accès au numéro de mobile rattaché à la carte pour valider le code OTP.',
        'Archiver chaque quittance électronique PDF pour le suivi de votre solde immobilier.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الدخول إلى بوابة الهيئة العقارية (Gest-Immo أو OPGI أو ENPI)',
          fr: '1. Accéder au portail de votre organisme bailleur',
        },
        detail: {
          ar: 'افتح الرابط الرسمي المباشر لهيئتك السكنية وتأكد من صحة النطاق الأمني للموقع قبل إدخال أي بيانات.',
          fr: 'Ouvrez le portail officiel correspondant (aadlgestimmo.dz, site OPGI ou enpi-net.dz) en vérifiant le protocole sécurisé.',
        },
      },
      {
        title: {
          ar: '2. إدخال رمز المستفيد أو مرجع الفاتورة لمعاينة الرصيد',
          fr: '2. Saisir le code locataire pour afficher l’avis d’échéance',
        },
        detail: {
          ar: 'أدخل رمز الزبون الموجود في عقد الإيجار أو الفاتورة السابقة لتظهر لك الفواتير المستحقة ومجموع المبلغ الواجب دفعه.',
          fr: 'Renseignez votre identifiant client afin d’afficher la liste des loyers ou charges en attente de règlement.',
        },
      },
      {
        title: {
          ar: '3. إتمام الدفع عبر البطاقة الذهبية أو CIB أو عبر تطبيق بريدي موب',
          fr: '3. Régler par Edahabia, CIB ou via BaridiMob',
        },
        detail: {
          ar: 'أكمل خطوة التأكيد الثنائي برمز SMS في الموقع، أو افتح تطبيق بريدي موب واختر AADL Gest-Immo من قائمة دفع الفواتير.',
          fr: 'Validez l’opération via le code SMS sur le portail web, ou payez directement depuis BaridiMob > Paiements.',
        },
      },
      {
        title: {
          ar: '4. تنزيل وصل الإبراء الإلكتروني والتحقق من تصفير الدين',
          fr: '4. Télécharger la quittance PDF et vérifier la mise à jour',
        },
        detail: {
          ar: 'اطبع أو خزن وصل التسديد PDF وتأكد من تحول حالة الشهر المعني إلى «مدفوع» في حسابك.',
          fr: 'Enregistrez votre quittance numérique PDF et vérifiez que le mois concerné passe au statut réglé.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم تعرف بوابة Gest-Immo على رمز المستفيد الجديد بعد استلام المفاتيح',
          fr: 'Code client non reconnu après remise récente des clés',
        },
        solution: {
          ar: 'يتم تفعيل الحساب في قاعدة بيانات التسيير العقاري بعد أسابيع من محضر الاستلام؛ تقرب من خلية التسيير بالحي أو المصلحة التجارية لتفعيل رمزك.',
          fr: 'L’intégration dans la base Gest-Immo suit l’établissement du dossier de gestion ; rapprochez-vous du bureau de cité pour activer votre code.',
        },
      },
      {
        issue: {
          ar: 'ظهور غرامة تأخير رغم الدفع في الأيام الأولى من الشهر',
          fr: 'Application d’une pénalité malgré un paiement récent',
        },
        solution: {
          ar: 'تأكد من تاريخ الاستحقاق النهائي المحدد على الفاتورة؛ وفي حال وجود وصل دفع مسبق قبل الأجل قدم نسخة منه لدى مكتب التسيير العقاري لتسوية الفارق.',
          fr: 'Vérifiez la date limite figurant sur l’avis d’échéance ; en cas d’erreur, présentez votre quittance datée au service recouvrement de votre agence.',
        },
      },
      {
        issue: {
          ar: 'توقف منصة الدفع خلال أيام الذروة الشهرية',
          fr: 'Ralentissement ou indisponibilité temporaire en fin de mois',
        },
        solution: {
          ar: 'استعمل الدفع البديل عبر تطبيق بريدي موب في الساعات الأقل ضغطا أو بادر بالتسديد فور صدور الفاتورة الشهرية لتجنب الازدحام الرقمي.',
          fr: 'Privilégiez le règlement via BaridiMob hors heures de pointe ou effectuez le paiement dès l’émission de la facture mensuelle.',
        },
      },
    ],
    extraFaqs: [],
  },

  fadaeldjazair: {
    intro: {
      ar: [
        'تعد البوابة الجغرفضائية «فضاء الجزائر» (Fadaa El Djazaïr) المشروع الرقمي المرجعي التابع للمديرية العامة للأملاك الوطنية بوزارة المالية. تهدف المنصة إلى عصرنة التسيير العقاري في الجزائر من خلال ربط مصالح مسح الأراضي بالمحافظات العقارية وتوفير الولوج عن بعد إلى المستخرجات المسحية والعقارية دون عناء التنقل المتكرر.',
        'من خلال واجهة موحدة موجهة لكل من المواطنين والمهنيين، توفر المنصة خدمات حيوية تشمل استخراج الشهادة السلبية وصور العقود المشهرة عبر بوابة EDCF، طلب الدفتر العقاري ومتابعة إعداده، واستخراج المصفوفات والبيانات المسحية CC11 وCC12 وCC15، إلى جانب بوابات متخصصة للمحافظ العقاري والموثق والمهندس الخبير المساح والمفتش العقاري.',
        'يضع هذا الدليل المواطني بين يديك الشرح الدقيق للمراجع المسحية المطلوبة (القسم ومجموعة الملكية)، الفروق العملية بين وثائق CC11 وCC12 وCC15، خطوات طلب الشهادة السلبية أو الدفتر العقاري إلكترونيا، وكيفية معالجة نقص البيانات في البلديات قيد الرقمنة.'
      ],
      fr: [
        "Le portail géospatial « Fadaa El Djazaïr », piloté par la Direction Générale du Domaine National (Ministère des Finances), constitue la colonne vertébrale de la modernisation foncière et cadastrale en Algérie. Il interconnecte les services du cadastre et les conservations foncières pour offrir aux usagers des téléservices fiables à distance.",
        "La plateforme propose un guichet grand public permettant la demande de certificat négatif et de copies d’actes publiés (EDCF), le dépôt et le suivi du livret foncier, ainsi que l’obtention des extraits cadastraux CC11, CC12 et CC15. Elle intègre également des espaces sécurisés réservés aux notaires, géomètres-experts, conservateurs et inspecteurs fonciers.",
        "Ce guide vous explique comment réunir les références cadastrales indispensables (section et îlot), distinguer les différents extraits techniques, déposer une demande en ligne et résoudre les blocages fréquents liés à l’identification d’une parcelle."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'معرفة اسم الولاية والبلدية ومقر المحافظة العقارية المختصة إقليميا بالعقار.',
        'توفر المراجع المسحية (رقم القسم Section ورقم مجموعة الملكية Îlot) لاستخراج وثائق CC11/CC12/CC15.',
        'توفر مراجع الإيداع والشهر (التاريخ، المجلد، الرقم) أو بطاقة التعريف البيومترية لطلبات EDCF والدفتر العقاري.',
        'بطاقة الذهبية أو CIB لتسديد رسوم الطابع والمستخرجات العقارية عبر الإنترنت عند الاقتضاء.',
      ],
      fr: [
        'Connaître la wilaya, la commune et la conservation foncière territorialement compétente.',
        'Disposer des références cadastrales (Section et Îlot) pour les extraits CC11, CC12 et CC15.',
        'Détenir les références de publication de l’acte (volume, numéro) pour EDCF et le livret foncier.',
        'Disposer d’une carte Edahabia ou CIB pour régler en ligne les droits de timbre exigés.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. تحديد نوع الوثيقة العقارية أو المسحية المطلوبة في فضاء الجزائر',
          fr: '1. Choisir le téléservice foncier ou cadastral adapté',
        },
        detail: {
          ar: 'اختر EDCF للشهادة السلبية والعقود المشهرة، أو خدمة CC11/CC12/CC15 للبيانات المسحية، أو بوابة الدفتر العقاري.',
          fr: 'Sélectionnez EDCF (actes et certificat négatif), les extraits cadastraux CC11/CC12/CC15 ou la rubrique Livret Foncier.',
        },
      },
      {
        title: {
          ar: '2. إدخال الهوية الوطنية والمراجع المسحية أو الشهرية بدقة',
          fr: '2. Renseigner les données d’identité et références du bien',
        },
        detail: {
          ar: 'عبئ بياناتك الشخصية (NIN ورقم الهاتف) مع تحديد البلدية والقسم ومجموعة الملكية أو رقم العقد المشهر.',
          fr: 'Complétez votre NIN, vos coordonnées de contact ainsi que la localisation cadastrale exacte de la propriété.',
        },
      },
      {
        title: {
          ar: '3. تأكيد الطلب ودفع الرسوم القانونية أو حفظ رقم التتبع',
          fr: '3. Valider la requête et conserver le récépissé de suivi',
        },
        detail: {
          ar: 'سدد الرسم الجبائي الإلكتروني عند تفعيله في الخدمة المعنية واحتفظ برمز التتبع لمتابعة معالجة الملف.',
          fr: 'Réglez les droits applicables le cas échéant et notez votre code de demande pour consulter l’avancement.',
        },
      },
      {
        title: {
          ar: '4. تحميل الوثيقة الجاهزة أو التوجه للاستلام من المحافظة العقارية',
          fr: '4. Télécharger l’extrait ou retirer le livret en conservation',
        },
        detail: {
          ar: 'تُسلَّم بعض المستخرجات المسحية فوريا عبر البوابة، بينما يتم استلام الدفتر العقاري النهائي من المحافظة العقارية بعد إشعار الجاهزية.',
          fr: 'Certains extraits cadastraux sont délivrés en ligne ; le livret foncier original se retire auprès de votre conservation après avis.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم معرفة رقم القسم (Section) أو مجموعة الملكية (Îlot)',
          fr: 'Références cadastrales (Section / Îlot) inconnues',
        },
        solution: {
          ar: 'استعمل خدمة «معطايات مسحية» بالخرائط التفاعلية في فضاء الجزائر لتحديد موقع العقار والاطلاع على رقمه المسحي أو راجع عقدك التوثيقي.',
          fr: 'Utilisez la rubrique « Données Cadastrales » avec la cartographie en ligne sur Fadaa El Djazaïr ou vérifiez vos anciens actes notariés.',
        },
      },
      {
        issue: {
          ar: 'بقاء حالة طلب الدفتر العقاري «قيد الدراسة» لمدة طويلة',
          fr: 'Demande de livret foncier bloquée au statut « en cours »',
        },
        solution: {
          ar: 'قد يتطلب الدفتر مراجعة الترقيم العقاري المؤقت أو استكمال وثيقة مسحية؛ تواصل مع المحافظة العقارية المختصة أو عبر نموذج الاتصال في البوابة.',
          fr: 'Une vérification cadastrale complémentaire peut être requise ; contactez la conservation foncière concernée muni de votre accusé de dépôt.',
        },
      },
      {
        issue: {
          ar: 'رفض الدخول إلى فضاء الموثق أو المهندس المساح',
          fr: 'Erreur d’authentification sur les espaces Notaire ou Géomètre',
        },
        solution: {
          ar: 'تلك الفضاءات حصرية للمهنيين المعتمدين؛ يتعين التوجه إلى المديرية الولائية للأملاك الوطنية أو مسح الأراضي لتفعيل أو تجديد بيانات الاعتماد.',
          fr: 'Ces accès sont strictement réservés aux professionnels habilités ; adressez-vous à la direction de wilaya des Domaines pour réinitialiser votre compte.',
        },
      },
    ],
    extraFaqs: [],
  },

  hatplc: {
    intro: {
      ar: [
        'تشكل السلطة العليا للشفافية والوقاية من الفساد ومكافحته (HATPLC) مؤسسة دستورية رقابية مستقلة استحدثت لترسيخ النزاهة في تسيير الشأن العام وحماية المال العام. ولتسهيل وصول المواطنين والهيئات إلى آليات الرقابة التشاركية، طورت السلطة حزمة من البوابات الرقمية والتطبيقات المؤمنة.',
        'تتصدر هذه المنظومة منصة التبليغ السري «بلغنا» (Balighna) وتطبيقها المحمول «ألو بلغنا» اللذان يتيحان لكل مواطن أو موظف الإبلاغ الآمن عن شبهات الفساد أو الرشوة أو استغلال النفوذ. وبالتوازي مع ذلك، أطلقت السلطة منصة «نراكم» (Narakom) لتشبيك جمعيات المجتمع المدني وتنسيق مبادرات الشفافية، فضلا عن توفير استمارات التصريح بالممتلكات الموجهة للمسؤولين والمنتخبين.',
        'يفصل هذا الدليل المهام الدستورية لكل منصة تابعة لـ HATPLC، الضمانات القانونية لحماية المبلغين وسرية المعطيات، الشروط الموضوعية لقبول البلاغات، والآجال القانونية الملزمة لإيداع تصاريح الممتلكات.'
      ],
      fr: [
        "La Haute Autorité de Transparence, de Prévention et de Lutte contre la Corruption (HATPLC) est une institution constitutionnelle indépendante chargée d’ancrer l’intégrité dans la gestion publique. Afin de rapprocher la vigilance citoyenne des mécanismes de contrôle, elle a déployé plusieurs téléservices spécialisés.",
        "Au cœur de cet écosystème figurent la plateforme sécurisée « Balighna » et son application mobile « Allo Balighna », qui permettent à tout citoyen ou agent public de signaler confidentiellement des actes ou soupçons de corruption. En parallèle, la plateforme « Narakom » fédère les associations dans le cadre du Réseau Algérien de Transparence, tandis que le portail central met à disposition les formulaires légaux de déclaration de patrimoine.",
        "Ce guide pratique précise les attributions respectives de Balighna et Narakom, les critères de recevabilité d’un dossier de signalement, les garanties de protection des dénonciateurs ainsi que les délais légaux de déclaration patrimoniale."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'التأكد من وجود وقائع موضوعية تتعلق بفساد إداري أو مالي عند التسجيل في منصة بلغنا.',
        'تجهيز أي وثائق أو أدلة رقمية متوفرة (عقود، مراسلات، وصولات) لتعزيز ملف التبليغ.',
        'توفر اعتماد قانوني ساري للجمعيات الراغبة في الانضمام إلى الشبكة الجزائرية للشفافية «نراكم».',
        'الالتزام بالآجال القانونية (شهر عند التنصيب وشهران عند انتهاء المهام) لتقديم التصريح بالممتلكات.',
      ],
      fr: [
        'Disposer de faits concrets et circonstanciés relevant de la prévention ou de la lutte contre la corruption.',
        'Préparer les éventuelles pièces numériques probantes (documents, correspondances, justificatifs) pour Balighna.',
        'Détenir un agrément associatif valide pour inscrire votre organisme sur la plateforme Narakom.',
        'Respecter les délais légaux (1 mois après prise de fonction, 2 mois après cessation) pour déclarer le patrimoine.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار المنصة المناسبة (بلغنا للتبليغ أو نراكم للمجتمع المدني)',
          fr: '1. Sélectionner le portail adapté (Balighna ou Narakom)',
        },
        detail: {
          ar: 'انتقل إلى balighna.hatplc.dz للتبليغ عن مخالفة، أو إلى naracom.hatplc.dz للمشاركة الجمعوية، أو hatplc.dz للتصريح بالممتلكات.',
          fr: 'Accédez à balighna.hatplc.dz pour un signalement, naracom.hatplc.dz pour le réseau civil ou hatplc.dz pour le formulaire de patrimoine.',
        },
      },
      {
        title: {
          ar: '2. اختيار نمط الإيداع والتحقق من المعطيات على منصة بلغنا',
          fr: '2. Choisir le mode de dépôt et renseigner le formulaire Balighna',
        },
        detail: {
          ar: 'حدد صيغة الحساب المناسبة على البوابة، واكتب ملخصا واضحا للوقائع والأطراف المعنية والمكان والتاريخ.',
          fr: 'Sélectionnez le mode d’accès proposé puis rédigez un exposé clair et factuel précisant les circonstances et entités impliquées.',
        },
      },
      {
        title: {
          ar: '3. إرفاق المستندات الداعمة وتأكيد الإرسال السري',
          fr: '3. Joindre les pièces justificatives et soumettre en toute sécurité',
        },
        detail: {
          ar: 'حمل الأدلة المتوفرة بصيغة واضحة، ثم أرسل الاستمارة واحتفظ برمز المتابعة السري الذي يمنحه النظام.',
          fr: 'Téléversez les éléments probants disponibles, validez l’envoi chiffré et notez précieusement votre numéro de suivi.',
        },
      },
      {
        title: {
          ar: '4. متابعة مآل البلاغ عبر الموقع أو تطبيق ألو بلغنا',
          fr: '4. Suivre le traitement du dossier sur le web ou Allo Balighna',
        },
        detail: {
          ar: 'راقب حالة معالجة البلاغ أو أضف أي معطيات مكملة من حسابك دون الحاجة للتنقل الشخصي.',
          fr: 'Consultez régulièrement l’évolution de l’instruction ou complétez votre dossier à distance via votre espace sécurisé.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'التردد حول الجهة المختصة بين بلغنا ووسيط الجمهورية',
          fr: 'Hésitation entre Balighna (HATPLC) et le Médiateur (Wassit)',
        },
        solution: {
          ar: 'توجه لبلغنا عند وجود شبهة رشوة أو محسوبية أو تبديد للمال العام، واستعمل منصة وسيط الجمهورية (wassit.dz) لحل البطء الإداري أو رفض الملفات العادية.',
          fr: 'Saisissez Balighna pour les faits de corruption, favoritisme ou détournement ; orientez les litiges administratifs ordinaires vers wassit.dz.',
        },
      },
      {
        issue: {
          ar: 'صعوبة تحميل ملفات مرفقة كبيرة الحجم في التبليغ',
          fr: 'Échec d’envoi des pièces jointes trop volumineuses',
        },
        solution: {
          ar: 'اضغط الملفات إلى صيغة PDF أو صور خفيفة الحجم وحافظ على وضوح النصوص والأختام قبل إعادة الرفع.',
          fr: 'Compressez les documents au format PDF ou JPEG optimisé tout en préservant la lisibilité des mentions essentielles.',
        },
      },
      {
        issue: {
          ar: 'استفسار حول كيفية إيداع التصريح بالممتلكات بعد تحميل الاستمارة',
          fr: 'Modalités de dépôt effectif après téléchargement du formulaire de patrimoine',
        },
        solution: {
          ar: 'بعد ملء الاستمارة المحملة من hatplc.dz وتوقيعها وإرفاق الوثائق المطلوبة، يتم إيداعها وفق الإجراءات التنظيمية لدى الهيئة أو مصالح الأمانة المعنية.',
          fr: 'Une fois rempli et signé, le formulaire officiel téléchargé sur hatplc.dz est déposé selon le protocole réglementaire auprès de la HATPLC.',
        },
      },
    ],
    extraFaqs: [],
  },

  hcn: {
    intro: {
      ar: [
        'تمثل المحافظة السامية للرقمنة (HCN) الهيئة المركزية التابعة لرئاسة الجمهورية والمكلفة برسم وتنفيذ الاستراتيجية الوطنية للتحول الرقمي في الجزائر، ووضع معايير الربط البيني وقابلية التشغيل بين قواعد البيانات الوزارية، وبناء بنية تحتية سحابية ومؤمنة للخدمة العمومية.',
        'تتجلى ثمرة هذه الرؤية للمواطن مباشرة في البوابة الحكومية الموحدة للخدمات الرقمية «dzds.dz» وتطبيق الهاتف الذكي المرافق لها، اللذين يهدفان إلى تجميع المعاملات الإدارية لمختلف القطاعات ضمن فضاء رقمي واحد، بما يشمل الولوج إلى منصة التصديق الأبوستيل (Apostille) والخدمات المتكاملة، مع تخصيص مركز الاتصال الوطني 3017 لمرافقة المواطنين والإجابة عن استفساراتهم.',
        'يوضح هذا الدليل كيفية الاستفادة من البوابة الوطنية dzds.dz، متطلبات الهوية الرقمية وتفعيل الحساب باستعمال رقم التعريف الوطني NIN، وطرق التواصل التقني مع مركز المساعدة 3017 عند مواجهة أي صعوبة في الولوج.'
      ],
      fr: [
        "Le Haut-Commissariat à la Numérisation (HCN), rattaché à la Présidence de la République, pilote la stratégie nationale de transformation digitale en Algérie. Il supervise notamment l’interopérabilité entre les systèmes d’information ministériels, la souveraineté numérique et l’unification des guichets publics.",
        "Pour les citoyens et les entreprises, cette mission se concrétise à travers le Portail Gouvernemental des Services Numériques (dzds.dz) et son application mobile officielle DZDS, conçus pour centraliser les téléservices de l’État — dont l’accès aux démarches d’Apostille — avec un centre d’assistance dédié joignable au 3017.",
        "Ce guide vous présente le fonctionnement du portail dzds.dz, les conditions d’activation d’un profil citoyen à l’aide du Numéro d’Identification Nationale (NIN) et les modalités d’assistance via le 3017."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر بطاقة التعريف الوطنية البيومترية للحصول على رقم التعريف الوطني NIN ذي 18 رقما.',
        'رقم هاتف محمول شخصي نشط وبريد إلكتروني موثوق لتأكيد الهوية الرقمية.',
        'تثبيت النسخة الرسمية من تطبيق DZDS من متجر Google Play أو فتح الموقع الرسمي dzds.dz.',
        'تجهيز مراجع الوثائق المعنية بالتصديق أو المعاملة المراد إنجازها عبر البوابة.',
      ],
      fr: [
        'Détenir une carte nationale d’identité biométrique comportant votre NIN à 18 chiffres.',
        'Disposer d’une ligne mobile personnelle et d’une adresse e-mail valide pour la validation du compte.',
        'Utiliser exclusivement le portail officiel dzds.dz ou l’application mobile certifiée sur Google Play.',
        'Préparer les références des documents ou démarches sectorielles sollicitées (dont Apostille).',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. الولوج إلى البوابة الحكومية dzds.dz أو تحميل تطبيق DZDS',
          fr: '1. Accéder au portail dzds.dz ou installer l’application DZDS',
        },
        detail: {
          ar: 'افتح البوابة الرسمية واختر اللغة المفضلة (العربية أو الفرنسية) لاستعراض فهرس الخدمات المتاحة.',
          fr: 'Ouvrez le portail gouvernemental dzds.dz ou l’application mobile DZDS pour parcourir le catalogue des services publics.',
        },
      },
      {
        title: {
          ar: '2. إنشاء الحساب المواطني باستعمال رقم التعريف الوطني NIN',
          fr: '2. Créer votre espace citoyen avec le NIN',
        },
        detail: {
          ar: 'أدخل بياناتك الشخصية المطابقة لبطاقة التعريف البيومترية وأكد رقم هاتفك عبر رمز SMS.',
          fr: 'Renseignez vos informations biométriques exactes et validez votre ligne mobile par le code SMS reçu.',
        },
      },
      {
        title: {
          ar: '3. اختيار الخدمة الرقمية المطلوبة أو الولوج إلى منصة الأبوستيل',
          fr: '3. Sélectionner le téléservice souhaité (ou l’espace Apostille)',
        },
        detail: {
          ar: 'تصفح الفئات الوزارية أو استعمل شريط البحث للانتقال مباشرة إلى الخدمة أو التصديق الإلكتروني.',
          fr: 'Naviguez par ministère ou via la recherche interne pour accéder au guichet concerné ou aux démarches d’Apostille.',
        },
      },
      {
        title: {
          ar: '4. الاستعانة بمركز الاتصال 3017 عند أي إشكال تقني',
          fr: '4. Solliciter le centre d’appel 3017 en cas de besoin',
        },
        detail: {
          ar: 'اتصل بالرقم 3017 للحصول على توجيه فوري حول استخدام البوابة أو متابعة الصعوبات التقنية.',
          fr: 'Composez le 3017 pour bénéficier d’une assistance technique ou d’une orientation vers le service compétent.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم تطابق البيانات عند التسجيل برقم التعريف الوطني NIN',
          fr: 'Erreur de concordance lors de l’inscription par NIN',
        },
        solution: {
          ar: 'تحقق من إدخال الأرقام الـ 18 من اليسار إلى اليمين دون مسافات مع مطابقة تاريخ الميلاد والاسم اللاتيني المكتوب على البطاقة البيومترية.',
          fr: 'Vérifiez la saisie des 18 chiffres du NIN sans espaces ainsi que l’orthographe latine figurant sur votre carte biométrique.',
        },
      },
      {
        issue: {
          ar: 'تحويل المستخدم من البوابة إلى موقع قطاعي خارجي يطلب تسجيل دخول جديد',
          fr: 'Redirection vers un portail ministériel demandant une autre authentification',
        },
        solution: {
          ar: 'بعض الإدارات لا تزال في طور الدمج التدريجي؛ أنشئ حسابا في المنصة القطاعية المعنية أو اتصل بالرقم 3017 للتوجيه.',
          fr: 'Certains téléservices sont en phase d’intégration progressive ; suivez l’accès dédié du ministère concerné ou contactez le 3017.',
        },
      },
      {
        issue: {
          ar: 'عدم عمل تطبيق الهاتف بعد التحديث الجديد',
          fr: 'Dysfonctionnement ou fermeture inattendue de l’application DZDS',
        },
        solution: {
          ar: 'امسح ذاكرة التخزين المؤقت للتطبيق وحدثه من Google Play، أو استعمل نسخة الويب المباشرة عبر dzds.dz ريثما يثبت التحديث.',
          fr: 'Mettez à jour l’application depuis le store officiel, videz le cache ou utilisez directement l’interface web dzds.dz.',
        },
      },
    ],
    extraFaqs: [],
  },

  'ina-elections': {
    intro: {
      ar: [
        'تضطلع السلطة الوطنية المستقلة للانتخابات (ANIE) بمهمة تحضير وتنظيم وإدارة ومراقبة كافة الاستحقاقات الانتخابية والاستفتاءات في الجزائر بكل استقلالية وحياد. ولتعزيز المشاركة المدنية وتبسيط إجراءات القيد الانتخابي، أطلقت السلطة منصة الخدمات الرقمية services.ina-elections.dz.',
        'تغطي البوابة الإلكترونية للسلطة جميع حاجيات المواطن الانتخابية عن بعد: التسجيل الأولي في القوائم الانتخابية عند بلوغ السن القانونية، التحقق الفوري من القيد ومعرفة عنوان مركز ومكتب التصويت (هل أنت مسجل؟)، طلب نسخة ثانية من بطاقة الناخب، طلب نقل الإقامة الانتخابية بين البلديات، تحيين وتصحيح الأخطاء في البيانات، بالإضافة إلى فضاء التسجيل التطوعي لتأطير العملية الانتخابية ضمن «حفاظ الأمانة».',
        'يشمل هذا الدليل الشروط القانونية للتسجيل في القوائم الانتخابية، مواعيد المراجعة السنوية والاستثنائية، الوثائق المطلوبة لتغيير البلدية أو تصحيح المعطيات، وحلول الإشكالات الشائعة المتعلقة بعدم ظهور الاسم أو ضياع بطاقة الناخب.'
      ],
      fr: [
        "L’Autorité Nationale Indépendante des Élections (ANIE) est l’instance constitutionnelle chargée d’organiser, de superviser et de contrôler l’ensemble des scrutins et référendums en Algérie. Pour moderniser la gestion du corps électoral, elle met à la disposition des citoyens le portail services.ina-elections.dz.",
        "Cette plateforme regroupe sept démarches clés accessibles à distance : la première inscription sur la liste électorale dès 18 ans, la vérification instantanée de l’inscription et de la localisation du bureau de vote (Orientation), la demande de duplicata de carte d’électeur, le changement de résidence électorale, la rectification des données personnelles et la candidature au dispositif d’encadrement « Hofad El Amana ».",
        "Ce guide récapitule les conditions légales d’inscription, le calendrier des révisions périodiques ou exceptionnelles, les justificatifs de domiciliation à fournir et les solutions pratiques en cas de changement d’adresse ou de données erronées."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'التمتع بالجنسية الجزائرية وبلوغ 18 سنة كاملة فما فوق يوم الاستحقاق الانتخابي.',
        'التمتع بكامل الحقوق المدنية والسياسية وعدم وجود مانع قانوني يمنع القيد.',
        'توفر بطاقة التعريف الوطنية البيومترية (NIN) وتطابق بياناتها مع السجل المدني.',
        'إثبات الإقامة الفعلية بالبلدية لمدة تفوق 6 أشهر عند تقديم طلب تحويل المكان الانتخابي.',
      ],
      fr: [
        'Être de nationalité algérienne et âgé d’au moins 18 ans révolus à la date du scrutin.',
        'Jouir de ses droits civils et politiques sans incapacité légale.',
        'Disposer de sa CNIBE (NIN) afin de saisir des informations conformes à l’état civil.',
        'Fournir un justificatif de résidence d’au moins 6 mois en cas de demande de transfert de commune.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. التحقق المسبق من وجود قيدك في خدمة «هل أنت مسجل؟»',
          fr: '1. Vérifier votre situation préalable sur la rubrique « Orientation »',
        },
        detail: {
          ar: 'ادخل إلى services.ina-elections.dz/services/orientation لتتأكد مما إذا كنت مسجلا بالفعل ومكان مكتب تصويتك الحالي.',
          fr: 'Consultez services.ina-elections.dz/services/orientation pour vérifier si vous êtes déjà inscrit et connaître votre bureau de vote.',
        },
      },
      {
        title: {
          ar: '2. اختيار الخدمة المطلوبة (تسجيل أولي، تغيير إقامة، تصحيح، أو نسخة ثانية)',
          fr: '2. Sélectionner la démarche adaptée (inscription, transfert, mise à jour ou duplicata)',
        },
        detail: {
          ar: 'انتقل إلى الرابط الفرعي المطابق لحالتك أثناء فترة المراجعة المفتوحة وعبئ استمارة الطلب.',
          fr: 'Ouvrez le formulaire correspondant pendant la période d’ouverture des révisions et complétez vos données.',
        },
      },
      {
        title: {
          ar: '3. إرفاق بطاقة الإقامة أو الهوية عند تغيير البلدية وتأكيد الطلب',
          fr: '3. Joindre le justificatif requis (en cas de transfert) et valider',
        },
        detail: {
          ar: 'أدخل رقم التعريف الوطني، وارفق وثيقة الإقامة عند الانتقال إلى بلدية أخرى، ثم احفظ وصل الإيداع الإلكتروني.',
          fr: 'Téléversez la pièce justificative de résidence si demandée, validez l’envoi et conservez le récépissé numérique.',
        },
      },
      {
        title: {
          ar: '4. متابعة القيد واستلام بطاقة الناخب من المندوبية البلدية',
          fr: '4. Confirmer l’inscription et retirer la carte en délégation communale',
        },
        detail: {
          ar: 'بعد دراسة اللجنة البلدية للطلب، تحقق مجددا عبر خدمة الاستعلام وتوجه لاستلام بطاقة الناخب الجديدة.',
          fr: 'Après validation par la commission de révision, vérifiez votre bureau de vote en ligne et retirez votre carte d’électeur.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'ظهور رسالة «الخدمة مغلقة حاليا» عند محاولة التسجيل أو النقل',
          fr: 'Service d’inscription ou de transfert affiché comme indisponible',
        },
        solution: {
          ar: 'يغلق التعديل على القوائم خارج فترات المراجعة القانونية؛ راقب إعلانات السلطة في ina-elections.dz لمعرفة تاريخ المراجعة السنوية أو الاستثنائية القادمة.',
          fr: 'Les modifications sont légalement limitées aux périodes de révision périodique ou exceptionnelle ; suivez le calendrier officiel sur ina-elections.dz.',
        },
      },
      {
        issue: {
          ar: 'ظهور اسمي في بلدية السكن القديم رغم تقديم طلب التحويل',
          fr: 'Ancienne commune toujours affichée après demande de transfert',
        },
        solution: {
          ar: 'يتم التحيين النهائي بعد انقضاء مهلة الطعون والفصل في قوائم الشطب والتسجيل؛ تواصل مع المندوبية البلدية الجديدة برقم وصل الطلب للمتابعة.',
          fr: 'La mise à jour effective intervient à la clôture des opérations de radiation et de réinscription ; présentez votre récépissé à la délégation communale.',
        },
      },
      {
        issue: {
          ar: 'وجود خطأ في الاسم أو تاريخ الميلاد في بطاقة الناخب',
          fr: 'Erreur matérielle sur le nom ou la date de naissance',
        },
        solution: {
          ar: 'استعمل خدمة «تحيين وتصحيح المعلومات» (update-infos) على البوابة مع إدخال رقم التعريف الوطني البيومتري لتوحيد السجل.',
          fr: 'Utilisez le formulaire en ligne « update-infos » muni de votre NIN biométrique pour faire corriger la fiche électorale.',
        },
      },
    ],
    extraFaqs: [],
  },

  interieur: {
    intro: {
      ar: [
        'تعد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية أكبر بوابة لخدمات المواطن في الجزائر، حيث تشرف على السجل الوطني الآلي للحالة المدنية، الوثائق البيومترية المؤمنة (بطاقة التعريف الوطنية CNIBE وجواز السفر البيومتري)، التنظيم العام والجمعيات، والخدمات الاجتماعية والتضامنية عبر البلديات والدوائر والولايات.',
        'شهدت خدمات الوزارة تحولا رقميا شاملا مكن المواطنين داخل الوطن والجالية في الخارج من استخراج وثائق الحالة المدنية (شهادة الميلاد، عقد الزواج، شهادة الوفاة) مجانا بصيغة PDF موقعة إلكترونيا، طلب جواز السفر وبطاقة التعريف ومتابعة طبعها عن بعد، معالجة الصور المرفوضة إلكترونيا، طلب شهادة 12S، استخراج شهادة الكفاءة لرخصة السياقة، إيداع ملفات تأسيس الجمعيات المحلية، والتسجيل في منحة التضامن لرمضان وفي الشباك عن بعد.',
        'يجمع هذا الدليل المرجعي كافة الروابط الرسمية العشرين التابعة لوزارة الداخلية وتطبيقاتها (ولايتي، نظيف، ألو شرطة، وقارئ البطاقة البيومترية)، مع تفصيل شروط التسجيل، آجال المعالجة، الطابع الجبائي، والحلول العملية لأشهر العقبات التقنية.'
      ],
      fr: [
        "Le Ministère de l’Intérieur, des Collectivités Locales et de l’Aménagement du Territoire pilote les services publics les plus sollicités par les citoyens algériens, couvrant l’état civil national, la délivrance des titres biométriques (CNIBE et passeport), la gestion associative locale et les dispositifs de solidarité communale.",
        "L’écosystème numérique du ministère permet aujourd’hui d’obtenir gratuitement en ligne des actes d’état civil signés électroniquement (naissance, mariage, décès), de suivre la fabrication du passeport et de la CNIBE, de corriger une photo biométrique rejetée, de commander l’acte spécial 12S pour la diaspora, d’obtenir le certificat de capacité du permis de conduire, de déposer les dossiers d’associations ou de postuler à l’allocation de solidarité Ramadan via le Guichet à distance.",
        "Ce guide complet réunit l’ensemble des vingt téléservices et applications officielles du ministère (Wilayati, Ndif, Allo Chorta, utilitaire DzaEidCard), accompagné des pièces exigées, frais de timbre et solutions aux incidents courants."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر رقم التعريف الوطني NIN وبيانات الحالة المدنية المطابقة (البلدية، الولاية، رقم العقد).',
        'الالتزام بمعايير الصورة البيومترية (خلفية بيضاء، وضوح الوجه، دون نظارات) عند طلب الجواز أو تصحيحه.',
        'سداد حقوق الطابع الجبائي القانونية إلكترونيا أو بقباضة الضرائب في المعاملات الخاضعة للرسم.',
        'إعداد ملف رقمي واضح بصيغة PDF للشباك عن بعد، تأسيس الجمعيات، أو طلب شهادة الكفاءة.',
      ],
      fr: [
        'Disposer de son NIN et des références exactes d’état civil (commune, wilaya, numéro d’acte).',
        'Respecter strictement les normes OACI pour toute photo biométrique transmise en ligne.',
        'S’acquitter du timbre fiscal requis selon la nature du titre demandé (passeport, renouvellement CNIBE).',
        'Préparer les pièces numérisées en PDF pour le guichet à distance, les associations ou le certificat de capacité.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار البوابة القطاعية المناسبة من خدمات وزارة الداخلية',
          fr: '1. Accéder au téléservice ministériel correspondant à votre besoin',
        },
        detail: {
          ar: 'توجه إلى etatcivil للوثائق المدنية، أو passeport للوثائق البيومترية، أو prestations للشباك عن بعد ومنحة رمضان والجمعيات.',
          fr: 'Choisissez etatcivil (actes), passeport (CNIBE/passeport), capacitepc (permis) ou prestations (guichet à distance et associations).',
        },
      },
      {
        title: {
          ar: '2. تعبئة البيانات المدنية بدقة وتحديد مكان الاستلام',
          fr: '2. Saisir les informations d’état civil et la commune de retrait',
        },
        detail: {
          ar: 'أدخل الاسم واللقب وتاريخ الميلاد باللغتين أو رقم العقد ورقم التعريف الوطني بدقة مطابقة للوثائق الرسمية.',
          fr: 'Renseignez vos données exactes (état civil, NIN, commune et numéro d’acte) sans abréviation.',
        },
      },
      {
        title: {
          ar: '3. رفع الصورة أو الوثائق المرفقة وتأكيد رقم الهاتف',
          fr: '3. Téléverser les justificatifs requis et valider par téléphone',
        },
        detail: {
          ar: 'أكمل إرفاق الملفات المطلوبة في الشباك عن بعد أو الجمعيات، وأدخل رقم هاتف شخصي لاستقبال رمز التأكيد SMS.',
          fr: 'Joignez les pièces PDF demandées ou la photo conforme et confirmez votre numéro mobile pour le suivi SMS.',
        },
      },
      {
        title: {
          ar: '4. التحميل الفوري للوثائق PDF أو متابعة جاهزية البطاقة والجواز',
          fr: '4. Télécharger les actes PDF ou suivre l’avancement des titres',
        },
        detail: {
          ar: 'حمل وثائق الحالة المدنية فورا بصيغة PDF، وتابع مرحلة طبع جواز السفر والبطاقة البيومترية إلى غاية استلامها في البلدية.',
          fr: 'Téléchargez immédiatement vos actes signés en PDF et utilisez les modules de suivi avant de vous déplacer pour le retrait.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'تعذر إيجاد عقد الميلاد أو الزواج في بوابة etatcivil.interieur.gov.dz',
          fr: 'Acte introuvable lors de la saisie sur etatcivil.interieur.gov.dz',
        },
        solution: {
          ar: 'تحقق من اختيار «الولاية والبلدية الأم» المسجل بها العقد أصلا وليس بلدية الإقامة الحالية، وتأكد من عدم إضافة أصفار غير موجودة في رقم العقد.',
          fr: 'Assurez-vous de sélectionner la commune d’enregistrement de l’acte (lieu de naissance ou mariage) et vérifiez le numéro exact sans zéros superflus.',
        },
      },
      {
        issue: {
          ar: 'رفض صورة جواز السفر أو تعليق طباعة البطاقة البيومترية بسبب الجودة',
          fr: 'Dossier bloqué pour photo biométrique non conforme',
        },
        solution: {
          ar: 'افتح رابط Chargement_Photo على بوابة الجواز، وارفع صورة جديدة ملتقطة في إضاءة متوازنة بخلفية بيضاء نقية دون ظلال.',
          fr: 'Utilisez le portail Chargement_Photo avec une photo récente prise face caméra, sans ombre ni lunettes sur fond blanc uni.',
        },
      },
      {
        issue: {
          ar: 'تأخر التسليم رغم ظهور حالة «جاهز في البلدية» أو عدم وصول رسالة SMS',
          fr: 'Titre indiqué prêt en ligne mais non encore remis au guichet',
        },
        solution: {
          ar: 'تظهر رسالة «متوفر» أحيانا لحظة الإرسال البريدي من المركز الوطني؛ انتظر 48 ساعة ثم توجه للبلدية مصحوبا بوصل الإيداع والبطاقة القديمة.',
          fr: 'Un délai logistique de 48h peut séparer l’expédition du centre national et la réception physique au guichet ; présentez-vous muni du récépissé.',
        },
      },
    ],
    extraFaqs: [],
  },

  madr: {
    intro: {
      ar: [
        'تقود وزارة الفلاحة والتنمية الريفية والصيد البحري (MADR) عملية رقمنة واسعة تشمل الإنتاج النباتي والحيواني، سلاسل التموين بالحبوب، الرقابة الصحية البيطرية والنباتية، ومرافقة الفلاحين والمستثمرين. وتترجم هذه السياسة عبر عدة بوابات رقمية قطاعية متخصصة تقلص آجال المعالجة وتكرس الشفافية.',
        'من أبرز هذه المنصات: منصة «حصاد» (hassad.dz) المخصصة لتنظيم مواعيد تسليم محصول الحبوب لدى تعاونيات CCLS وAGRODRIVE، وبوابة الإجراءات الصحية النباتية والبيطرية «PSLAR» التي تعالج عن بعد طلبات التراخيص التقنية لاستيراد البذور والشتلات وبذور البطاطا ومبيدات الصحة النباتية واعتمادات معالجة الخشب، إلى جانب فضاء التسجيل لدى السلطة البيطرية الوطنية (AVN)، ونافذة الشفافية، وخليتي الإصغاء والنزاهة، ومنصة «أضاحي» الموسمية.',
        'يوضح هذا الدليل كيفية استعمال كل منصة فلاحية بشكل صحيح، شروط التسجيل بالنسبة للفلاحين الحائزين على بطاقة الفلاح أو غير الحائزين عليها، الوثائق المطلوبة لملفات الاستيراد عبر PSLAR، وطرق الإبلاغ أو طلب المرافقة الفلاحية.'
      ],
      fr: [
        "Le Ministère de l’Agriculture, du Développement Rural et de la Pêche (MADR) déploie un ensemble de plateformes numériques sectorielles couvrant l’organisation de la campagne moisson-battage, la délivrance des autorisations techniques d’importation agricole, l’enregistrement des vétérinaires et les dispositifs saisonniers à destination des citoyens.",
        "Cet écosystème repose notamment sur « Hassad » (hassad.dz) pour la prise de rendez-vous de livraison céréalière auprès des CCLS et d’AGRODRIVE, le guichet unique sanitaire « PSLAR » gérant les autorisations préalables d’importation (semences, plants, pomme de terre, produits phytosanitaires) ainsi que l’inscription à l’Autorité Vétérinaire Nationale (AVN), la plateforme « Adhahi.dz » pour les points de vente de l’Aïd, la cellule d’écoute agricole, la fenêtre transparence et la cellule Nazaha.",
        "Ce guide détaille les démarches requises sur chaque portail, les pièces justificatives exigées selon votre statut (agriculteur, importateur ou vétérinaire) et les réponses pratiques aux blocages courants."
      ],
    },
    eligibilityChecklist: {
      ar: [
        'توفر بطاقة الفلاح أو إثبات الاستغلال الفلاحي في حملة الحصاد عبر منصة حصاد.',
        'سجل تجاري مطابق ومفعل لنشاط استيراد البذور أو الشتلات أو المواد النباتية عبر بوابة PSLAR.',
        'شهادة جامعية في الطب البيطري للراغبين في القيد لدى السلطة البيطرية الوطنية AVN.',
        'رقم التعريف الوطني NIN ورقم هاتف نشط عند التسجيل المواطني في منصة أضاحي العيد.',
      ],
      fr: [
        'Détenir une carte d’agriculteur ou un justificatif d’exploitation pour la plateforme Hassad.',
        'Disposer d’un registre de commerce actif conforme à l’importation d’intrants agricoles sur PSLAR.',
        'Justifier d’un diplôme de docteur vétérinaire pour l’inscription auprès de l’AVN.',
        'Disposer du NIN et d’une ligne mobile active lors de l’ouverture saisonnière d’Adhahi.dz.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار البوابة الفلاحية المناسبة لنوع الطلب (حصاد، PSLAR، أضاحي)',
          fr: '1. Identifier la plateforme MADR adaptée à votre démarche',
        },
        detail: {
          ar: 'ادخل إلى hassad.dz للحبوب، أو pslar.madr.gov.dz للتراخيص والطب البيطري وخلية الإصغاء، أو adhahi.dz لأضاحي العيد.',
          fr: 'Accédez à hassad.dz (céréales), pslar.madr.gov.dz (importations, AVN, écoute) ou adhahi.dz (opération saisonnière Aïd).',
        },
      },
      {
        title: {
          ar: '2. إنشاء الحساب المهني أو المواطني وتحديد الولاية أو التخصص',
          fr: '2. Créer votre compte et sélectionner la wilaya ou le domaine',
        },
        detail: {
          ar: 'أدخل بيانات الهوية أو السجل التجاري واختر مديرية المصالح الفلاحية أو التعاونية المعنية بالمعالجة.',
          fr: 'Saisissez vos coordonnées professionnelles ou personnelles et rattachez le dossier à votre DSA ou coopérative locale.',
        },
      },
      {
        title: {
          ar: '3. إيداع الوثائق التقنية والصحية المطلوبة عبر النموذج الإلكتروني',
          fr: '3. Déposer les pièces techniques et sanitaires numérisées',
        },
        detail: {
          ar: 'ارفق الفواتير الشكلية والشهادات الصحية في طلبات PSLAR أو بيانات المحصول في حصاد، ثم أكد الإرسال.',
          fr: 'Téléversez les certificats phytosanitaires et factures proforma sur PSLAR ou les données de récolte sur Hassad.',
        },
      },
      {
        title: {
          ar: '4. متابعة دراسة الملف في البوابة أو عبر نافذة الشفافية',
          fr: '4. Suivre l’instruction et consulter la Fenêtre Transparence',
        },
        detail: {
          ar: 'راقب رد المصالح البيطرية أو حماية النباتات واستعمل خلية الإصغاء أو خلية نزاهة عند وجود تأخر غير مبرر.',
          fr: 'Suivez l’avis des directions techniques (DPVCT/DSV) et utilisez la cellule d’écoute en cas de besoin d’orientation.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم استلام موعد أو تأخر الرد من تعاونية الحبوب في منصة حصاد',
          fr: 'Délai d’attribution du rendez-vous CCLS sur Hassad',
        },
        solution: {
          ar: 'تأكد من استكمال كافة خانات المساحة والمنتج في ملفك على hassad.dz وتواصل مباشرة مع أقرب نقطة تجميع أو تعاونية CCLS في ولايتك.',
          fr: 'Vérifiez que votre déclaration de surface et de variété est complète sur hassad.dz puis rapprochez-vous de votre CCLS locale.',
        },
      },
      {
        issue: {
          ar: 'رفض ملف الترخيص التقني للاستيراد عبر PSLAR',
          fr: 'Rejet ou demande de complément sur un dossier PSLAR',
        },
        solution: {
          ar: 'تأكد من مطابقة رمز النشاط في السجل التجاري مع نوع المدخل المستورد ومن إدراج المنتجات في القائمة المسموح بها وطنيا قبل إعادة التقديم.',
          fr: 'Vérifiez l’adéquation du code d’activité du registre de commerce et assurez-vous que le produit figure sur la liste officielle homologuée.',
        },
      },
      {
        issue: {
          ar: 'عدم ظهور نقاط بيع أو إغلاق التسجيل في منصة أضاحي العيد',
          fr: 'Points de vente indisponibles ou inscriptions closes sur Adhahi.dz',
        },
        solution: {
          ar: 'تعمل منصة أضاحي موسميا فقط قبيل عيد الأضحى وضمن حصص ولائية محددة؛ تابع بلاغات وزارة الفلاحة لمعرفة تواريخ إعادة الفتح والولايات المعنية.',
          fr: 'La plateforme Adhahi fonctionne exclusivement de façon saisonnière avant l’Aïd selon des quotas par wilaya ; suivez les communiqués du MADR.',
        },
      },
    ],
    extraFaqs: [],
  },
};
