import { InsuranceItem, RichGuideContent } from '../../types';

export const batch2Insurances: InsuranceItem[] = [
  // 9. macir-vie
  {
    id: 'macir-vie',
    slug: 'macir-vie',
    name: {
      ar: 'ماكير في للتأمين على الأشخاص (Macir Vie)',
      fr: 'Macir Vie — Assurance des Personnes',
    },
    acronym: 'MACIR VIE',
    type: 'private',
    description: {
      ar: 'الدليل الشامل للخدمات الرقمية والتأمينية لشركة ماكير في للتأمين على الحياة والأشخاص (Macir Vie): الاكتتاب الإلكتروني الفوري في تأمين السفر وشنغن مع بطاقة المساعدة الرقمية MyM Pass، تأمين المقترض والقروض البنكية MyMacir Crédits، تأمين الحج والعمرة، الحوادث المدرسية والشخصية، والتأمين الجماعي للمؤسسات.',
      fr: 'Guide complet des services numériques de Macir Vie (Assurance des Personnes) : souscription directe en ligne de l’assurance voyage Schengen avec carte digitale MyM Pass, assurance emprunteur MyMacir Crédits, couverture Hadj/Omra, accidents scolaires et individuels, application MyMacir et prévoyance collective.',
    },
    website: 'https://www.macirvie.com/',
    portalUrl: 'https://play.google.com/store/apps/details?id=com.macirvie.mymacir',
    headquarters: {
      ar: 'حيدرة، الجزائر العاصمة',
      fr: 'Hydra, Alger',
    },
    products: [
      {
        ar: 'تأمين السفر وشنغن وبطاقة MyM Pass (اكتتاب أونلاين)',
        fr: 'Assurance Voyage Schengen & Carte Digitale MyM Pass',
        url: 'https://www.macirvie.com/',
        summary: {
          ar: 'اكتتاب إلكتروني مباشر لتأمين السفر الدولي واستخراج الشهادة المعتمدة فوريا مع بطاقة المساعدة MyM Pass، وتأمين الحج والعمرة.',
          fr: 'Souscription 100 % en ligne d’attestations voyage Schengen avec délivrance instantanée et carte d’assistance MyM Pass, plus couverture Omra/Hadj.',
        },
      },
      {
        ar: 'تطبيق MyMacir للهاتف الذكي (Google Play)',
        fr: 'Application Mobile MyMacir (Android)',
        url: 'https://play.google.com/store/apps/details?id=com.macirvie.mymacir',
        summary: {
          ar: 'حساب تسعيرة وتجديد عقود السفر، تنزيل الشهادات وبطاقة MyM Pass على محفظة الهاتف، ومتابعة الوثائق عن بعد.',
          fr: 'Simulation et souscription voyage, téléchargement des attestations et intégration de la carte MyM Pass sur smartphone.',
        },
      },
      {
        ar: 'تأمين المقترض (MyMacir Crédits) والحوادث الفردية والمدرسية',
        fr: 'Assurance Emprunteur (MyMacir Crédits) & Accidents Scolaires',
        url: 'https://www.macirvie.com/',
        summary: {
          ar: 'حماية القروض العقارية والاستهلاكية ضد الوفاة والعجز، وتغطية الحوادث البدنية اليومية والتلاميذ والطلبة طيلة الموسم الدراسي.',
          fr: 'Protection des crédits immobiliers et à la consommation (décès/invalidité), plus couverture des accidents de la vie et scolaires.',
        },
      },
      {
        ar: 'التأمين الجماعي للشركات والمساعدة الدولية MAPFRE ASISTENCIA',
        fr: 'Prévoyance Collective Entreprises & Assistance 24/7',
        url: 'https://www.macirvie.com/',
        summary: {
          ar: 'باقات الصحة التكميلية والوفاة والعجز وسفر الوفود المهنية، مع مساعدة طبية دولية 24/7 بالشراكة مع MAPFRE ASISTENCIA.',
          fr: 'Contrats collectifs santé, prévoyance décès/invalidité et missions professionnelles avec assistance mondiale 24/7 MAPFRE ASISTENCIA.',
        },
      },
    ],
    emergencyNumber: '023 47 80 87 / 023 48 07 00',
    quickSummary: {
      autoInsurance: {
        ar: 'شركة متخصصة حصريا في التأمين على الأشخاص والحياة والسفر والقروض (لا تقدم تأمين السيارات أو العقارات)',
        fr: 'Compagnie dédiée exclusivement à l’assurance des personnes, voyage, prévoyance et emprunteur (ne couvre pas l’automobile)',
      },
      eDeclaration: {
        ar: 'اكتتاب فوري وتنزيل شهادات السفر وبطاقة MyM Pass عبر macirvie.com وتطبيق MyMacir، ومتابعة الحالات مع MAPFRE ASISTENCIA',
        fr: 'Souscription instantanée voyage et carte MyM Pass via macirvie.com ou MyMacir, avec plateau d’assistance internationale MAPFRE ASISTENCIA',
      },
      takafulOptions: {
        ar: 'السفر الدولي وشنغن، الحج والعمرة، تأمين القروض MyMacir Crédits، الحوادث المدرسية والشخصية، والتأمين الجماعي',
        fr: 'Voyage Schengen, Hadj/Omra, assurance crédits MyMacir Crédits, accidents scolaires/individuels et prévoyance collective',
      },
    },
    requirements: [
      {
        label: {
          ar: 'تأمين السفر وشنغن واستخراج MyM Pass',
          fr: 'Assurance voyage Schengen & carte MyM Pass',
        },
        value: {
          ar: 'جواز سفر ساري المفعول، تحديد بلد الوجهة وتواريخ الرحلة بدقة، ووسيلة دفع إلكتروني عبر تطبيق MyMacir أو الموقع',
          fr: 'Passeport biométrique valide, dates exactes du séjour, destination et paiement en ligne sur macirvie.com ou MyMacir',
        },
      },
      {
        label: {
          ar: 'تأمين المقترض والقروض (MyMacir Crédits)',
          fr: 'Assurance emprunteur (MyMacir Crédits)',
        },
        value: {
          ar: 'بطاقة التعريف البيومترية، نسخة من الموافقة المبدئية للقرض البنكي وجدول الاستهلاك، واستمارة التصريح الطبي',
          fr: 'CNIBE biométrique, accord bancaire de crédit avec tableau d’amortissement et questionnaire médical complété',
        },
      },
      {
        label: {
          ar: 'تأمين الحوادث المدرسية والفردية والحج والعمرة',
          fr: 'Accidents scolaires, individuels & Omra/Hadj',
        },
        value: {
          ar: 'شهادة مدرسية أو جامعية للتلاميذ والطلبة، أو جواز السفر وتأشيرة العمرة للحجاج والمعتمرين',
          fr: 'Certificat de scolarité pour les élèves/étudiants ou passeport et données de voyage pour les séjours Omra/Hadj',
        },
      },
      {
        label: {
          ar: 'الاتصال المباشر والمساعدة الطبية الدولية',
          fr: 'Contact client & assistance médicale internationale',
        },
        value: {
          ar: 'الهاتف 023 47 80 87 أو 023 48 07 00 — البريد courrier@macirvie.com — والمساعدة الدولية عبر MAPFRE ASISTENCIA',
          fr: 'Téléphone 023 47 80 87 / 023 48 07 00 — E-mail courrier@macirvie.com — Assistance 24/7 MAPFRE ASISTENCIA',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي بطاقة MyM Pass الرقمية التي تقدمها ماكير في للمسافرين؟',
          fr: 'Qu’est-ce que la carte digitale MyM Pass de Macir Vie ?',
        },
        answer: {
          ar: 'هي بطاقة مساعدة ذكية تصدر رقميا فور اكتتاب تأمين السفر عبر موقع macirvie.com أو تطبيق MyMacir، وتتيح حفظ بيانات البوليصة وأرقام النجدة الدولية مباشرة في محفظة الهاتف.',
          fr: 'MyM Pass est une carte d’assistance intelligente générée dès la souscription voyage sur macirvie.com ou MyMacir, regroupant vos références de police et les contacts d’urgence sur mobile.',
        },
      },
      {
        question: {
          ar: 'هل توفر شركة ماكير في تأمين السيارات أو السكن في الجزائر؟',
          fr: 'Macir Vie propose-t-elle des contrats d’assurance automobile ou habitation ?',
        },
        answer: {
          ar: 'لا، ماكير في شركة متخصصة في التأمين على الأشخاص والحياة فقط، وتشمل خدماتها السفر الدولي، القروض البنكية، الحوادث البدنية والمدرسية، والحج والعمرة.',
          fr: 'Non, Macir Vie est spécialisée uniquement dans l’assurance des personnes (voyage, prévoyance, crédits bancaires, accidents individuels et santé collective).',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع شريك المساعدة الدولية عند وقوع طارئ صحي بالخارج؟',
          fr: 'Comment activer l’assistance médicale à l’étranger avec Macir Vie ?',
        },
        answer: {
          ar: 'يجب الاتصال فورا برقم الطوارئ الخاص بالشريك العالمي MAPFRE ASISTENCIA المدون في شهادة السفر وبطاقة MyM Pass قبل مباشرة أي مصاريف علاجية كبرى.',
          fr: 'Contactez immédiatement la plateforme MAPFRE ASISTENCIA figurant sur votre attestation et carte MyM Pass avant d’engager des frais hospitaliers importants.',
        },
      },
      {
        question: {
          ar: 'ما هي قنوات التواصل الرسمية مع شركة ماكير في؟',
          fr: 'Quels sont les canaux de contact officiels de Macir Vie ?',
        },
        answer: {
          ar: 'يمكنك الاتصال على الرقمين 023 47 80 87 أو 023 48 07 00، أو المراسلة عبر البريد الإلكتروني courrier@macirvie.com.',
          fr: 'Joignez le siège au 023 47 80 87 / 023 48 07 00 ou écrivez à courrier@macirvie.com.',
        },
      },
    ],
  },

  // 10. saa
  {
    id: 'saa',
    slug: 'saa',
    name: {
      ar: 'الشركة الوطنية للتأمين (SAA)',
      fr: 'Société Nationale d’Assurance (SAA)',
    },
    acronym: 'SAA',
    type: 'public',
    description: {
      ar: 'الدليل الشامل للخدمات الرقمية والتأمينية للشركة الوطنية للتأمين (SAA): طلب عروض الأسعار أونلاين (Devis en Ligne SAA)، تأمين السيارات وباقة لالة LÂLLA المخصصة للسيدات، تأمين السكن والكوارث الطبيعية CAT-NAT، تأمين السفر وشنغن، التأمين الفلاحي والزراعي، وشبكة وطنية تضم أكثر من 540 وكالة عبر 58 ولاية.',
      fr: 'Guide complet des services de la Société Nationale d’Assurance (SAA) : demande de devis en ligne, assurance auto et pack féminin LÂLLA, multirisque habitation CAT-NAT, voyage Schengen, assurance des risques agricoles, solutions entreprises et réseau national de plus de 540 agences sur 58 wilayas.',
    },
    website: 'https://www.saa.dz/',
    portalUrl: 'https://www.saa.dz/particuliers/',
    headquarters: {
      ar: 'محمد بلوزداد، الجزائر العاصمة',
      fr: 'Mohamed Belouizdad, Alger',
    },
    products: [
      {
        ar: 'طلب عروض الأسعار أونلاين وتأمينات الأفراد (Devis en Ligne)',
        fr: 'Devis en Ligne & Assurances Particuliers SAA',
        url: 'https://www.saa.dz/particuliers/',
        summary: {
          ar: 'حساب تسعيرة تأمين السيارات، باقة لالة LÂLLA، السكن والكوارث الطبيعية CAT-NAT، وتأمين السفر الدولي وشنغن.',
          fr: 'Simulation tarifaire auto, pack LÂLLA, multirisque habitation CAT-NAT et attestations d’assurance voyage Schengen.',
        },
      },
      {
        ar: 'تأمين السيارات الشامل وباقة لالة (LÂLLA)',
        fr: 'Assurance Auto Tous Risques & Pack LÂLLA',
        url: 'https://www.saa.dz/particuliers/',
        summary: {
          ar: 'تغطية المسؤولية المدنية، كل الأخطار، كسر الزجاج، والباقة المخصصة للسائقات بمزايا مساعدة إضافية.',
          fr: 'Couverture Responsabilité Civile, Tous Risques, bris de glace et formule dédiée LÂLLA avec services d’assistance renforcés.',
        },
      },
      {
        ar: 'التأمين الفلاحي وتأمينات المؤسسات والأساطيل',
        fr: 'Risques Agricoles, Entreprises & Flottes',
        url: 'https://www.saa.dz/entreprises/',
        summary: {
          ar: 'حماية المحاصيل الزراعية، البيوت البلاستيكية، المواشي، العتاد الفلاحي، المصانع، المحلات، وأساطيل النقل.',
          fr: 'Protection des cultures, serres, cheptels et matériels agricoles, ainsi que des usines, commerces et flottes professionnelles.',
        },
      },
      {
        ar: 'شبكة الوكالات الوطنية (+540 وكالة عبر 58 ولاية)',
        fr: 'Réseau National d’Agences (+540 agences / 58 wilayas)',
        url: 'https://www.saa.dz/',
        summary: {
          ar: 'البحث عن أقرب وكالة ومندوبية معتمدة لشركة SAA في ولايتك لإبرام العقود أو إيداع ملفات الحوادث.',
          fr: 'Localisation de l’agence SAA la plus proche sur l’ensemble des 58 wilayas pour souscrire ou suivre un dossier sinistre.',
        },
      },
      {
        ar: 'مركز الإصغاء للزبائن ومعالجة الانشغالات',
        fr: 'Centre d’Écoute Client & Suivi Réclamations',
        url: 'https://www.saa.dz/',
        summary: {
          ar: 'التواصل المباشر عبر 021 22 50 12 أو 021 23 95 95 والبريد ecoute_client@saa.dz لمتابعة الشكاوى والتعويضات.',
          fr: 'Assistance directe au 021 22 50 12 / 021 23 95 95 et via ecoute_client@saa.dz pour réclamations et dossiers sinistres.',
        },
      },
    ],
    emergencyNumber: '021 22 50 12 / 021 23 95 95',
    quickSummary: {
      autoInsurance: {
        ar: 'مسؤولية مدنية، تأمين شامل، كسر الزجاج، وباقة لالة LÂLLA للسيدات عبر أكثر من 540 وكالة في 58 ولاية',
        fr: 'RC obligatoire, Tous Risques, bris de glace et pack LÂLLA via un maillage de plus de 540 agences sur 58 wilayas',
      },
      eDeclaration: {
        ar: 'طلب تسعيرة أولية عبر saa.dz/particuliers وتوجيه إجراءات التصريح بالحوادث ودعم الزبائن عبر ecoute_client@saa.dz',
        fr: 'Demande de devis sur saa.dz/particuliers, guidage de déclaration sinistre et écoute client via ecoute_client@saa.dz',
      },
      takafulOptions: {
        ar: 'الأفراد، السكن وCAT-NAT، السفر وشنغن، التأمين الفلاحي (محاصيل ومواشي)، والمؤسسات والأساطيل',
        fr: 'Particuliers, habitation CAT-NAT, voyage Schengen, risques agricoles complets et couvertures industrielles',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق تأمين السيارات وباقة لالة LÂLLA',
          fr: 'Dossier assurance auto & pack LÂLLA',
        },
        value: {
          ar: 'البطاقة الرمادية، رخصة السياقة، شهادة المراقبة التقنية السارية، وبطاقة التعريف الوطنية البيومترية',
          fr: 'Carte grise, permis de conduire, procès-verbal de contrôle technique valide et pièce d’identité biométrique',
        },
      },
      {
        label: {
          ar: 'تأمين الفلاحة والممتلكات والكوارث الطبيعية CAT-NAT',
          fr: 'Risques agricoles, habitation & CAT-NAT',
        },
        value: {
          ar: 'وثائق الحيازة أو الملكية، البطاقة الفلاحية أو السجل التجاري، وتقدير قيمة البنايات أو المعدات والمحاصيل',
          fr: 'Titre de propriété ou bail, carte d’agriculteur ou registre commercial, et descriptif des biens ou exploitations',
        },
      },
      {
        label: {
          ar: 'تأمين السفر الدولي وتأشيرة شنغن',
          fr: 'Assurance voyage internationale & Schengen',
        },
        value: {
          ar: 'جواز سفر ساري المفعول وتحديد البلد ومدة الإقامة بدقة لإصدار الشهادة المعتمدة لدى القنصليات',
          fr: 'Passeport valide, pays de destination et dates exactes pour obtenir l’attestation d’assistance consulaire',
        },
      },
      {
        label: {
          ar: 'التصريح بالحوادث والإصغاء للزبائن',
          fr: 'Déclaration de sinistres & écoute client',
        },
        value: {
          ar: 'الهاتف 021 22 50 12 أو 021 23 95 95 — البريد ecoute_client@saa.dz — وإيداع المعاينة الودية خلال 7 أيام عمل',
          fr: 'Lignes 021 22 50 12 / 021 23 95 95 — E-mail ecoute_client@saa.dz — Dépôt du constat dans le délai de 7 jours',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي باقة لالة (LÂLLA) التي توفرها الشركة الوطنية للتأمين SAA؟',
          fr: 'Que comprend la formule auto LÂLLA proposée par la SAA ?',
        },
        answer: {
          ar: 'هي باقة تأمين سيارات مصممة خصيصا للسيدات السائقات تشمل تغطيات الحماية الشاملة للمركبة إلى جانب خدمات مساعدة مرافقة وتسهيلات في التكفل.',
          fr: 'Il s’agit d’une offre d’assurance automobile dédiée aux conductrices combinant protection du véhicule et prestations d’assistance adaptées.',
        },
      },
      {
        question: {
          ar: 'هل تغطي SAA المحاصيل الزراعية والبيوت البلاستيكية والمواشي؟',
          fr: 'La SAA couvre-t-elle les exploitations agricoles, serres et cheptels ?',
        },
        answer: {
          ar: 'نعم، تقدم SAA فرعا متكاملا للتأمين الفلاحي يغطي المحاصيل، البيوت البلاستيكية، المواشي، والعتاد الزراعي ضد الحرائق والظروف المناخية عبر صفحاتها للمؤسسات ووكالاتها.',
          fr: 'Oui, le pôle Risques Agricoles de la SAA assure les récoltes, serres, troupeaux et équipements agricoles contre les aléas climatiques et incendies.',
        },
      },
      {
        question: {
          ar: 'كم عدد وكالات الشركة الوطنية للتأمين في الجزائر؟',
          fr: 'Quelle est l’étendue du réseau d’agences SAA en Algérie ?',
        },
        answer: {
          ar: 'تضم الشبكة الوطنية لشركة SAA أكثر من 540 وكالة ومندوبية منتشرة عبر كافة الولايات الـ 58، ويمكن طلب التسعيرة أولا عبر saa.dz/particuliers.',
          fr: 'La SAA dispose d’un réseau de plus de 540 agences réparties dans les 58 wilayas, complété par des demandes de devis sur saa.dz/particuliers.',
        },
      },
      {
        question: {
          ar: 'كيف أرسل شكوى أو أتابع ملف تعويض لدى SAA؟',
          fr: 'Comment transmettre une réclamation ou suivre un dossier SAA ?',
        },
        answer: {
          ar: 'يمكنك التواصل مع خلية الإصغاء للزبائن عبر البريد الإلكتروني ecoute_client@saa.dz أو الاتصال بالرقمين 021 22 50 12 و021 23 95 95.',
          fr: 'Contactez la cellule d’écoute client par e-mail à ecoute_client@saa.dz ou par téléphone au 021 22 50 12 / 021 23 95 95.',
        },
      },
    ],
  },

  // 11. salama
  {
    id: 'salama',
    slug: 'salama',
    name: {
      ar: 'سلامة للتأمينات الجزائر (Salama Assurances)',
      fr: 'Salama Assurances Algérie (Takaful)',
    },
    acronym: 'SALAMA',
    type: 'takaful',
    description: {
      ar: 'الدليل الشامل للخدمات الرقمية والتأمينية لشركة سلامة للتأمينات الجزائر (Salama Assurances): طلب عروض الأسعار السريعة والمخصصة أونلاين، التأمين التكافلي على السيارات، تأمين السكن متعدد الأخطار (Multirisque Habitation)، التأمين المهني للمعدات والأصول (Multirisque Pro)، النصائح والأسئلة الشائعة، وشبكة 260 نقطة بيع.',
      fr: 'Guide complet des services de Salama Assurances Algérie : demande de devis rapide ou personnalisé en ligne, assurance auto, Multirisque Habitation et CAT-NAT, Multirisque Pro pour équipements et actifs professionnels, espace Conseil/FAQ et réseau de 260 points de vente.',
    },
    website: 'https://salama-assurances.dz/',
    portalUrl: 'https://salama-assurances.dz/contactez-nous/',
    headquarters: {
      ar: 'الأبيار، الجزائر العاصمة',
      fr: 'El Biar, Alger',
    },
    products: [
      {
        ar: 'البوابة الرسمية وطلب عروض الأسعار أونلاين',
        fr: 'Portail Officiel & Demande de Devis en Ligne',
        url: 'https://salama-assurances.dz/',
        summary: {
          ar: 'إرسال طلب عرض سعر سريع أو مخصص لتأمين السيارات والأفراد والاطلاع على شبكة الـ 260 نقطة بيع.',
          fr: 'Demande de devis rapide ou personnalisé en ligne et consultation du réseau des 260 agences et points de vente.',
        },
      },
      {
        ar: 'تأمين السكن متعدد الأخطار (Multirisque Habitation)',
        fr: 'Assurance Multirisque Habitation',
        url: 'https://salama-assurances.dz/particuliers/multirisque-habitation/',
        summary: {
          ar: 'حماية الشقق والمنازل ومحتوياتها ضد الحرائق، السرقة، تسرب المياه، والكوارث الطبيعية CAT-NAT.',
          fr: 'Protection de votre logement et de ses biens contre l’incendie, le vol, les dégâts des eaux et les catastrophes naturelles.',
        },
      },
      {
        ar: 'التأمين المهني (Multirisque Pro)',
        fr: 'Assurance Professionnelle (Multirisque Pro)',
        url: 'https://salama-assurances.dz/particuliers/multirisque-pro/',
        summary: {
          ar: 'ضمان الأمان للنشاط المهني والتجاري والتأمين الشامل على المعدات والأصول والمحلات التجارية.',
          fr: 'Couverture complète de l’activité professionnelle, des locaux commerciaux, stocks et équipements de travail.',
        },
      },
      {
        ar: 'مركز الاتصال وخدمة الزبائن (Contactez-nous)',
        fr: 'Centre de Contact & Service Client',
        url: 'https://salama-assurances.dz/contactez-nous/',
        summary: {
          ar: 'التواصل المباشر مع مستشاري سلامة للتأمينات عبر الاستمارة الرسمية أو الخط الهاتفي 021 92 01 01.',
          fr: 'Prise de contact directe avec les conseillers Salama via le formulaire dédié ou au 021 92 01 01.',
        },
      },
      {
        ar: 'ركن النصائح والأسئلة الشائعة (Conseil)',
        fr: 'Espace Conseil & FAQ Assurance',
        url: 'https://salama-assurances.dz/conseil/',
        summary: {
          ar: 'توجيهات عملية ومعلومات واضحة حول عقود التأمين، التغطيات، وخطوات التعامل عند وقوع حادث.',
          fr: 'Guides pratiques, recommandations et réponses aux questions fréquentes sur les garanties et sinistres.',
        },
      },
    ],
    emergencyNumber: '021 92 01 01',
    quickSummary: {
      autoInsurance: {
        ar: 'تأمين السيارات بالمسؤولية المدنية وكل الأخطار لحماية المركبة والركاب عبر 260 نقطة بيع وطنية',
        fr: 'Assurance automobile RC et Tous Risques protégeant le véhicule et ses occupants dans 260 points de vente',
      },
      eDeclaration: {
        ar: 'طلب عرض أسعار سريع أو مخصص أونلاين عبر salama-assurances.dz والتواصل الفوري عبر صفحة Contactez-nous',
        fr: 'Demande de devis rapide ou personnalisé sur salama-assurances.dz et support via Contactez-nous',
      },
      takafulOptions: {
        ar: 'خيارات التأمين التكافلي: السيارات، السكن Multirisque Habitation، التأمين المهني Multirisque Pro، والأفراد',
        fr: 'Couverture Takaful : automobile, Multirisque Habitation CAT-NAT, Multirisque Pro et protection familiale',
      },
    },
    requirements: [
      {
        label: {
          ar: 'اكتتاب تأمين السيارات والمركبات',
          fr: 'Souscription assurance automobile',
        },
        value: {
          ar: 'البطاقة الرمادية، رخصة السياقة سارية المفعول، بطاقة التعريف الوطنية، ومحضر المراقبة التقنية للمركبات المعنية',
          fr: 'Carte grise, permis de conduire valide, CNIBE et procès-verbal de contrôle technique selon l’ancienneté du véhicule',
        },
      },
      {
        label: {
          ar: 'تأمين السكن (Multirisque Habitation)',
          fr: 'Assurance Multirisque Habitation',
        },
        value: {
          ar: 'عقد الملكية أو الإيجار، وثيقة الهوية، وتقييم تقريبي للمساحة ومحتويات السكن ضد الحريق والسرقة وتلف المياه',
          fr: 'Acte de propriété ou bail, pièce d’identité et estimation de la surface ainsi que du mobilier couvert',
        },
      },
      {
        label: {
          ar: 'التأمين المهني (Multirisque Pro)',
          fr: 'Assurance Multirisque Pro',
        },
        value: {
          ar: 'نسخة من السجل التجاري أو الاعتماد المهني، عقد استغلال المحل، وقائمة المعدات والأصول المؤمنة',
          fr: 'Registre de commerce ou agrément professionnel, bail ou titre du local et inventaire des équipements professionnels',
        },
      },
      {
        label: {
          ar: 'الدعم والاستشارات والنقاط المعتمدة',
          fr: 'Support client, conseils & points de vente',
        },
        value: {
          ar: 'الهاتف 021 92 01 01 — دليل النصائح salama-assurances.dz/conseil — وشبكة تضم 260 وكالة ونقطة بيع',
          fr: 'Téléphone 021 92 01 01 — Guide salama-assurances.dz/conseil — Réseau de 260 agences et points de vente',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أطلب عرض سعر سريع أو مخصص من شركة سلامة للتأمينات؟',
          fr: 'Comment obtenir un devis rapide ou personnalisé chez Salama Assurances ?',
        },
        answer: {
          ar: 'يمكنك إرسال طلب أولي أونلاين عبر الموقع الرسمي salama-assurances.dz أو صفحة contactez-nous ليقوم مستشار الوكالة بالرد عليك بالتسعيرة الملائمة.',
          fr: 'Soumettez votre demande de devis rapide ou personnalisé directement sur salama-assurances.dz ou via la rubrique contactez-nous.',
        },
      },
      {
        question: {
          ar: 'ماذا يغطي عقد Multirisque Habitation لدى سلامة للتأمينات؟',
          fr: 'Que couvre le contrat Multirisque Habitation de Salama Assurances ?',
        },
        answer: {
          ar: 'يحمي هذا العقد المسكن والممتلكات الشخصية من أخطار الحرائق، السرقة، أضرار وتسرب المياه، بالإضافة إلى الضمان الإلزامي ضد الكوارث الطبيعية.',
          fr: 'Il protège le logement et son contenu contre les incendies, vols, dégâts des eaux et intègre les garanties contre les catastrophes naturelles.',
        },
      },
      {
        question: {
          ar: 'لمن يوجه منتج التأمين المهني Multirisque Pro؟',
          fr: 'À qui s’adresse la formule Multirisque Pro ?',
        },
        answer: {
          ar: 'يوجه لأصحاب المهن الحرة والتجار والمؤسسات لحماية محلات العمل والمعدات التقنية والأصول التجارية ضد الأضرار المادية والمسؤولية المدنية.',
          fr: 'Elle s’adresse aux commerçants, artisans, professions libérales et PME souhaitant sécuriser leurs locaux, stocks et équipements professionnels.',
        },
      },
      {
        question: {
          ar: 'كم يبلغ عدد نقاط البيع والوكالات التابعة لشركة سلامة في الجزائر؟',
          fr: 'Combien de points de vente compte Salama Assurances en Algérie ?',
        },
        answer: {
          ar: 'تمتلك شركة سلامة للتأمينات شبكة واسعة تضم نحو 260 وكالة ونقطة بيع عبر الوطن، مع إمكانية الاتصال بالمركز الرئيسي على 021 92 01 01.',
          fr: 'Salama Assurances s’appuie sur un réseau d’environ 260 agences et points de vente, joignable également au 021 92 01 01.',
        },
      },
    ],
  },

  // 12. trust-algeria
  {
    id: 'trust-algeria',
    slug: 'trust-algeria',
    name: {
      ar: 'ترست الجزائر للتأمين وإعادة التأمين (Trust Algeria)',
      fr: 'Trust Algeria Assurances & Réassurance',
    },
    acronym: 'TRUST',
    type: 'private',
    description: {
      ar: 'الدليل الشامل للخدمات التأمينية والرقمية لشركة ترست الجزائر للتأمين وإعادة التأمين (Trust Algeria Assurances): طلب عروض الأسعار والاستشارة، تأمين السيارات الفردية وأساطيل النقل، تأمين السكن والكوارث الطبيعية CAT-NAT، تأمين السفر وشنغن والحج والعمرة، وتأمين المصانع والمشاريع الإنشائية.',
      fr: 'Guide complet de Trust Algeria Assurances & Réassurance : demande de devis personnalisé, assurance véhicules particuliers et flottes de transport, multirisque habitation CAT-NAT, assistance voyage Schengen et Omra/Hadj, et solutions pour usines, PME et chantiers de construction.',
    },
    website: 'https://www.trust-assurances.dz/',
    portalUrl: 'https://www.trust-assurances.dz/',
    headquarters: {
      ar: 'القبة، الجزائر العاصمة',
      fr: 'Kouba, Alger',
    },
    products: [
      {
        ar: 'طلب عرض سعر واستشارة تأمينية — Trust Assurances',
        fr: 'Demande de Devis & Conseil — Trust Assurances',
        url: 'https://www.trust-assurances.dz/',
        summary: {
          ar: 'تقديم طلب عرض سعر مخصص عبر البوابة الرسمية لتأمين سيارتك، سكنك، رحلتك، أو مشروعك الاستثماري.',
          fr: 'Obtention d’une tarification personnalisée via le portail officiel pour votre véhicule, logement, voyage ou entreprise.',
        },
      },
      {
        ar: 'تأمين السيارات الفردية وأساطيل النقل',
        fr: 'Assurance Auto Particuliers & Flottes de Transport',
        url: 'https://www.trust-assurances.dz/',
        summary: {
          ar: 'باقات المسؤولية المدنية والتأمين الشامل (Tous Risques) للمركبات الفردية والسيارات التجارية وأساطيل الشركات.',
          fr: 'Formules Responsabilité Civile et Tous Risques adaptées aux conducteurs particuliers et aux parcs automobiles d’entreprises.',
        },
      },
      {
        ar: 'تأمين السكن CAT-NAT والسفر الدولي (شنغن والحج والعمرة)',
        fr: 'Habitation CAT-NAT & Voyage Schengen / Hadj-Omra',
        url: 'https://www.trust-assurances.dz/',
        summary: {
          ar: 'حماية المساكن ضد الحرائق والسرقة والكوارث الطبيعية، وتغطية طبية فورية بالخارج لملفات شنغن والبقاع المقدسة.',
          fr: 'Couverture multirisque habitation CAT-NAT et prise en charge médicale urgente à l’étranger pour visas Schengen, Hadj et Omra.',
        },
      },
      {
        ar: 'تأمين المصانع والمشاريع الإنشائية والوكالات المعتمدة',
        fr: 'Industrie, Construction & Réseau d’Agences',
        url: 'https://www.trust-assurances.dz/',
        summary: {
          ar: 'حلول للمصانع والمؤسسات الصغرى والمتوسطة والمشاريع الإنشائية والمسؤولية المهنية، مع خط الدعم 021 29 88 88 / +213 98 230 96 05.',
          fr: 'Solutions pour usines, PME, chantiers BTP et responsabilité professionnelle, joignables au 021 29 88 88 / +213 98 230 96 05.',
        },
      },
    ],
    emergencyNumber: '021 29 88 88 / +213 98 230 96 05',
    quickSummary: {
      autoInsurance: {
        ar: 'تأمين السيارات الفردية وأساطيل النقل بالمسؤولية المدنية والتأمين الشامل Tous Risques',
        fr: 'Couverture RC et Tous Risques pour véhicules particuliers, utilitaires et flottes de transport',
      },
      eDeclaration: {
        ar: 'طلبات عروض الأسعار والاستشارات عبر trust-assurances.dz والخط الهاتفي المخصص +213 98 230 96 05',
        fr: 'Demandes de devis et orientation via trust-assurances.dz et la ligne dédiée +213 98 230 96 05',
      },
      takafulOptions: {
        ar: 'السيارات، السكن وCAT-NAT، السفر وشنغن والحج والعمرة، المصانع والمشاريع الإنشائية، والمسؤولية المهنية',
        fr: 'Auto, habitation CAT-NAT, voyage Schengen/Omra, PME, chantiers de construction et responsabilité civile pro',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق تأمين المركبات أو أساطيل الشركات',
          fr: 'Dossier véhicules particuliers ou flottes',
        },
        value: {
          ar: 'البطاقة الرمادية، رخصة السياقة، وثيقة الهوية، وقائمة المركبات والترقيم بالنسبة لأساطيل المؤسسات',
          fr: 'Carte grise, permis de conduire, pièce d’identité et état détaillé du parc automobile pour les flottes d’entreprise',
        },
      },
      {
        label: {
          ar: 'تأمين المساكن والكوارث الطبيعية CAT-NAT',
          fr: 'Multirisque habitation & CAT-NAT',
        },
        value: {
          ar: 'عقد الملكية أو الإيجار، بطاقة الهوية، وتحديد القيمة التقديرية للبناية والمحتويات ضد الحريق والسرقة',
          fr: 'Acte de propriété ou bail, pièce d’identité et descriptif technique/valeur du bien contre incendie, vol et CAT-NAT',
        },
      },
      {
        label: {
          ar: 'تأمين السفر وشنغن والحج والعمرة',
          fr: 'Assurance voyage Schengen, Hadj & Omra',
        },
        value: {
          ar: 'جواز سفر ساري المفعول وتواريخ الرحلة الدقيقة لتوفير التكفل الطبي الفوري وإعادة الترحيل عند الضرورة',
          fr: 'Passeport biométrique en cours de validité et dates précises du séjour pour l’attestation de couverture médicale',
        },
      },
      {
        label: {
          ar: 'الاستشارات والتواصل الهاتفي مع ترست الجزائر',
          fr: 'Assistance & ligne directe Trust Algeria',
        },
        value: {
          ar: 'الهاتف 021 29 88 88 أو الخط المخصص +213 98 230 96 05 والموقع الرسمي trust-assurances.dz',
          fr: 'Téléphone 021 29 88 88 ou ligne dédiée +213 98 230 96 05 et portail officiel trust-assurances.dz',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل تغطي ترست الجزائر المشاريع الإنشائية والمصانع إلى جانب تأمين الأفراد؟',
          fr: 'Trust Algeria assure-t-elle les chantiers de construction et les usines ?',
        },
        answer: {
          ar: 'نعم، تقدم ترست الجزائر للتأمين وإعادة التأمين حلولا متخصصة للمصانع، المؤسسات الصغرى والمتوسطة، ورشات البناء، والمسؤولية المهنية، إضافة إلى تأمينات السيارات والسكن.',
          fr: 'Oui, Trust Algeria couvre les risques industriels, PME, chantiers de construction et responsabilités professionnelles en complément des gammes particuliers.',
        },
      },
      {
        question: {
          ar: 'هل توفر الشركة تأمين الحج والعمرة وتأشيرة شنغن؟',
          fr: 'L’assureur délivre-t-il des polices pour Schengen et le Hadj / Omra ?',
        },
        answer: {
          ar: 'نعم، تمنح ترست الجزائر عقود تأمين السفر الدولي لفيزا شنغن وكذلك تغطية طبية شاملة للمعتمرين والحجاج أثناء إقامتهم في البقاع المقدسة.',
          fr: 'Oui, des contrats d’assistance voyage conformes aux visas Schengen ainsi que des couvertures médicales spécifiques Hadj/Omra sont proposés.',
        },
      },
      {
        question: {
          ar: 'ما هو رقم الهاتف المباشر للتواصل مع مستشاري ترست الجزائر؟',
          fr: 'Quel est le numéro de contact direct de Trust Algeria Assurances ?',
        },
        answer: {
          ar: 'يمكنك الاتصال على الخط المخصص +213 98 230 96 05 أو الرقم 021 29 88 88، أو زيارة البوابة trust-assurances.dz.',
          fr: 'Appelez la ligne dédiée au +213 98 230 96 05 ou le 021 29 88 88, ou consultez trust-assurances.dz.',
        },
      },
      {
        question: {
          ar: 'هل يمكن تأمين أسطول مركبات شركة لدى ترست الجزائر؟',
          fr: 'Peut-on assurer une flotte complète de véhicules professionnels chez Trust Algeria ?',
        },
        answer: {
          ar: 'نعم، توفر الشركة عقودا مخصصة لأساطيل النقل والمركبات التجارية للمؤسسات مع إدارة موحدة للحوادث والتجديد.',
          fr: 'Oui, des polices flottes sur mesure sont disponibles pour les parcs de transport et véhicules utilitaires d’entreprise.',
        },
      },
    ],
  },
];

export const batch2InsuranceGuides: Record<string, Partial<RichGuideContent>> = {
  'macir-vie': {
    intro: {
      ar: [
        'تعد شركة ماكير في للتأمين على الأشخاص والحياة (Macir Vie)، التي يقع مقرها الرئيسي في حيدرة بالجزائر العاصمة، أول شركة تأمين جزائرية خاصة متخصصة حصريا في التأمين على الأشخاص والادخار والحماية الصحية، كما تعد رائدة في رقمنة عقود السفر عبر الإنترنت.',
        'يتيح موقع الشركة الرسمي macirvie.com وتطبيق الهاتف الذكي MyMacir للزبائن اكتتاب تأمين السفر الدولي وشنغن إلكترونيا في دقائق معدودة، مع استخراج الشهادة الفورية وتنزيل بطاقة المساعدة الذكية MyM Pass على محفظة الهاتف لتسهيل التواصل على مدار الساعة.',
        'إلى جانب السفر والحج والعمرة، توفر ماكير في تأمين المقترض للقروض العقارية والاستهلاكية (MyMacir Crédits)، وتأمين الحوادث المدرسية والجامعية والفردية، والتأمين الجماعي للشركات، بدعم دولي مستمر عبر الشريك العالمي MAPFRE ASISTENCIA ورقم المرافقة 023 47 80 87.'
      ],
      fr: [
        'Basée à Hydra (Alger), Macir Vie est une compagnie privée algérienne dédiée exclusivement à l’assurance des personnes, à la prévoyance et à l’assurance voyage digitale, reconnue pour la simplicité de ses parcours de souscription en ligne.',
        'Depuis le portail macirvie.com ou l’application mobile MyMacir, les voyageurs souscrivent leur attestation conforme visa Schengen en quelques clics et téléchargent instantanément la carte intelligente d’assistance MyM Pass sur leur smartphone.',
        'Son portefeuille couvre également l’assurance emprunteur MyMacir Crédits, la protection Hadj & Omra, les accidents scolaires et domestiques ainsi que la prévoyance collective d’entreprise, avec une assistance médicale mondiale 24/7 assurée avec MAPFRE ASISTENCIA.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'جواز سفر ساري المفعول ووسيلة دفع إلكتروني سارية لاكتتاب تأمين السفر واستخراج بطاقة MyM Pass عبر الإنترنت.',
        'موافقة القرض البنكي وجدول السداد والتصريح الصحي للاكتتاب في تأمين المقترض MyMacir Crédits.',
        'شهادة التسجيل المدرسي أو الجامعي عند طلب تأمين الحوادث المدرسية للطلبة والتلاميذ.',
        'الوثائق الطبية والفواتير الأصلية أو تذاكر الإيواء الاستشفائي في الخارج لطلب التعويض لدى MAPFRE ASISTENCIA.',
        'كشف التعريف البنكي أو البريدي RIB/RIP للمستفيدين لصرف مستحقات التعويض المالي.',
      ],
      fr: [
        'Passeport biométrique en cours de validité et carte de paiement pour la souscription en ligne voyage et carte MyM Pass.',
        'Offre de prêt bancaire, tableau d’amortissement et questionnaire médical pour l’assurance emprunteur MyMacir Crédits.',
        'Attestation de scolarité ou carte d’étudiant pour les garanties accidents scolaires et universitaires.',
        'Justificatifs médicaux originaux, rapports d’hospitalisation ou reçus d’urgence pour les dossiers MAPFRE ASISTENCIA.',
        'RIB ou RIP bancaire/postal pour le versement des indemnisations et prestations.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار منتج التأمين على الأشخاص عبر macirvie.com أو MyMacir',
          fr: '1. Choisir votre formule sur macirvie.com ou l’app MyMacir',
        },
        detail: {
          ar: 'حدد الصيغة المطلوبة (سفر شنغن، عمرة وحج، تأمين قرض، أو حوادث فردية) واحسب التسعيرة إلكترونيا بإدخال التواريخ والبيانات الأساسية.',
          fr: 'Sélectionnez la garantie souhaitée (voyage Schengen, Omra, crédit bancaire ou accidents individuels) et simulez le tarif en renseignant vos dates.',
        },
      },
      {
        title: {
          ar: '2. تسديد القسط واستلام الشهادة وبطاقة MyM Pass',
          fr: '2. Valider le paiement et télécharger l’attestation & MyM Pass',
        },
        detail: {
          ar: 'بعد إتمام الاكتتاب والدفع، قم بتنزيل شهادة التأمين المرقمة مباشرة وأضف بطاقة MyM Pass الرقمية إلى محفظة هاتفك قبل السفر.',
          fr: 'Dès la confirmation du règlement, téléchargez votre attestation d’assurance et enregistrez votre carte d’assistance MyM Pass sur smartphone.',
        },
      },
      {
        title: {
          ar: '3. تفعيل المساعدة الطبية الدولية عند الطوارئ بالخارج',
          fr: '3. Contacter MAPFRE ASISTENCIA en cas d’urgence à l’étranger',
        },
        detail: {
          ar: 'اتصل فورا برقم الطوارئ المرفق في بطاقة MyM Pass للحصول على التوجيه الطبي والتكفل المباشر دون الانتظار حتى العودة.',
          fr: 'Appelez sans délai le plateau MAPFRE ASISTENCIA mentionné sur votre carte MyM Pass pour organiser la prise en charge médicale sur place.',
        },
      },
      {
        title: {
          ar: '4. إيداع ملف التعويض ومتابعته مع مصلحة الزبائن',
          fr: '4. Déposer les justificatifs et suivre le remboursement',
        },
        detail: {
          ar: 'أرسل الوثائق الطبية الأصلية ونسخة العقد عبر الوكالة أو البريد courrier@macirvie.com وتابع المعالجة عبر الرقم 023 47 80 87.',
          fr: 'Transmettez les pièces médicales originales et références de police à votre conseiller ou à courrier@macirvie.com (suivi au 023 47 80 87).',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم ظهور بطاقة MyM Pass أو تأخر وصول شهادة السفر عبر البريد الإلكتروني',
          fr: 'Attestation voyage ou carte MyM Pass non reçue après paiement',
        },
        solution: {
          ar: 'تحقق من مجلد الرسائل غير المرغوب فيها أو سجل الدخول في تطبيق MyMacir لإعادة تنزيلها، أو اتصل بالرقم 023 47 80 87 مع رقم المعاملة.',
          fr: 'Vérifiez vos spams, connectez-vous à l’application MyMacir pour la retélécharger ou appelez le 023 47 80 87 avec votre référence.',
        },
      },
      {
        issue: {
          ar: 'إلغاء أو تغيير تواريخ تأمين السفر بعد رفض التأشيرة أو تأجيل الرحلة',
          fr: 'Modifier les dates ou annuler une police suite à un report de vol ou refus de visa',
        },
        solution: {
          ar: 'تواصل قبل تاريخ سريان البوليصة مع مصلحة الزبائن عبر courrier@macirvie.com مع إرفاق الوثيقة الداعمة لطلب التعديل أو الإلغاء وفق شروط العقد.',
          fr: 'Contactez impérativement courrier@macirvie.com avant la date d’effet prévue en joignant le justificatif officiel pour modification ou résiliation.',
        },
      },
      {
        issue: {
          ar: 'الخلط بين تأمين السيارات والتأمين على الأشخاص لدى ماكير في',
          fr: 'Rechercher une assurance automobile auprès de Macir Vie',
        },
        solution: {
          ar: 'لا تصدر ماكير في عقود سيارات أو سكن؛ فهي متخصصة في الأشخاص والسفر والحياة، ويمكنك اللجوء لـ SAA أو CAAR أو ALLIANCE أو AXA لتأمين مركبتك.',
          fr: 'Macir Vie étant strictement spécialisée dans l’assurance des personnes, adressez-vous à la SAA, CAAR, ALLIANCE ou AXA pour l’assurance auto.',
        },
      },
    ],
    extraFaqs: [],
  },

  saa: {
    intro: {
      ar: [
        'تعد الشركة الوطنية للتأمين (SAA)، ومقرها في محمد بلوزداد بالجزائر العاصمة، أكبر شركة تأمين عمومية في الجزائر من حيث الانتشار الجغرافي، حيث تمتلك شبكة وطنية تفوق 540 وكالة ومندوبية معتمدة تغطي كافة الولايات الـ 58 لخدمة الأفراد والفلاحين والمؤسسات.',
        'توفر بوابة SAA الرسمية (saa.dz) خدمة طلب عروض الأسعار أونلاين لتأمين السيارات وباقة "لالة LÂLLA" المخصصة للسيدات، وتأمين السكن والكوارث الطبيعية CAT-NAT، وتأمين السفر الدولي وشنغن، إلى جانب التأمين الفلاحي الذي يحمي المحاصيل والبيوت البلاستيكية والمواشي والعتاد.',
        'كما تخصص الشركة خط الدعم والاستماع للزبائن عبر الهاتفين 021 22 50 12 و021 23 95 95 والبريد الإلكتروني ecoute_client@saa.dz لاستقبال الاستفسارات ومتابعة ملفات الحوادث والشكاوى بسرعة وشفافية.'
      ],
      fr: [
        'Implantée à Mohamed Belouizdad (Alger), la Société Nationale d’Assurance (SAA) constitue le premier réseau d’assurance public en Algérie avec plus de 540 agences et représentations réparties à travers les 58 wilayas du pays.',
        'Sur son portail saa.dz, la compagnie propose la simulation et demande de devis en ligne pour l’assurance automobile (y compris le pack LÂLLA dédié aux conductrices), la multirisque habitation CAT-NAT, l’assurance voyage Schengen ainsi que les garanties agricoles (récoltes, serres, cheptel et matériel) et industrielles.',
        'Son dispositif d’écoute client, joignable au 021 22 50 12 ou 021 23 95 95 et via ecoute_client@saa.dz, accompagne les assurés dans la gestion de leurs contrats, la déclaration de sinistres et le suivi des indemnisations.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'تحديد أقرب وكالة من بين 540 وكالة SAA لإيداع ملف حادث أو معاينة',
          fr: 'Localiser l’agence SAA compétente pour déposer un constat sinistre',
        },
        solution: {
          ar: 'تقدم بالملف إلى الوكالة التي أصدرت العقد، وفي حال وقوع الحادث في ولاية أخرى يمكنك الاستعانة بدليل الوكالات على saa.dz أو الاتصال بـ 021 22 50 12 للتوجيه.',
          fr: 'Déposez le constat auprès de votre agence souscriptrice ou consultez le réseau sur saa.dz / appelez le 021 22 50 12 en cas d’accident hors wilaya.',
        },
      },
      {
        issue: {
          ar: 'تأخر التسوية النهائية أو عدم رد الوكالة على شكوى تعويض',
          fr: 'Suivre un dossier d’indemnisation en retard ou déposer une réclamation SAA',
        },
        solution: {
          ar: 'أرسل رقم العقد ورقم ملف الحادث إلى خلية الإصغاء عبر ecoute_client@saa.dz أو اتصل على 021 23 95 95 لمتابعة المعالجة المركزية.',
          fr: 'Transmettez votre numéro de police et référence de sinistre à la cellule d’écoute ecoute_client@saa.dz ou au 021 23 95 95.',
        },
      },
      {
        issue: {
          ar: 'الالتباس حول الوثائق المطلوبة للتأمين الفلاحي أو المحاصيل',
          fr: 'Justificatifs nécessaires pour souscrire une assurance agricole SAA',
        },
        solution: {
          ar: 'تأكد من إحضار البطاقة الفلاحية ووثيقة استغلال الأرض وجرد التجهيزات والماشية قبل زيارة الوكالة أو تقديم الطلب عبر saa.dz/entreprises.',
          fr: 'Préparez votre carte d’agriculteur, titre d’exploitation et inventaire des serres, cultures ou cheptels via saa.dz/entreprises ou en agence.',
        },
      },
    ],
    extraFaqs: [],
  },

  salama: {
    intro: {
      ar: [
        'تنطلق شركة سلامة للتأمينات الجزائر (Salama Assurances Algérie) من مقرها في الأبيار بالجزائر العاصمة وتنتشر عبر شبكة تضم 260 وكالة ونقطة بيع، مقدمة حلول تأمين متكاملة للأفراد والمهنيين تجمع بين السرعة الرقمية وخيارات التأمين التكافلي.',
        'يتيح الموقع الرسمي salama-assurances.dz إرسال طلبات عروض الأسعار السريعة أو المخصصة عبر الإنترنت، واستكشاف تفاصيل تأمين السيارات، وتأمين السكن متعدد الأخطار (Multirisque Habitation)، والتأمين المهني الشامل (Multirisque Pro) للمحلات والمعدات والأصول.',
        'كما توفر الشركة ركنا إرشاديا متجددا (Conseil) يشرح شروط التغطيات وإجراءات الحوادث بلغة مبسطة، إلى جانب خدمة الاتصال المباشر عبر صفحة contactez-nous والهاتف 021 92 01 01.'
      ],
      fr: [
        'Basée à El Biar (Alger) et forte d’un réseau de 260 agences et points de vente, Salama Assurances Algérie déploie des couvertures dédiées aux particuliers et aux professionnels, incluant des solutions d’assurance Takaful conformes aux principes participatifs.',
        'Le portail salama-assurances.dz facilite la demande de devis rapide ou personnalisé en ligne et détaille les garanties phares telles que l’automobile, la Multirisque Habitation (incendie, vol, dégâts des eaux et CAT-NAT) et la Multirisque Pro pour commerçants et PME.',
        'Une rubrique Conseil dédiée éclaire les assurés sur les bonnes pratiques contractuelles, tandis que les conseillers restent accessibles via la page contactez-nous et le 021 92 01 01.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'الفرق بين طلب عرض السعر السريع وطلب العرض المخصص في موقع سلامة',
          fr: 'Choisir entre devis rapide et devis personnalisé sur salama-assurances.dz',
        },
        solution: {
          ar: 'استخدم العرض السريع لتسعيرة تقديرية سريعة للسيارة أو السكن، والعرض المخصص عند وجود ممتلكات أو معدات مهنية تتطلب تقييما تفصيليا.',
          fr: 'Utilisez le devis rapide pour un chiffrage standard auto/habitation, et le devis personnalisé pour les garanties Multirisque Pro ou sur mesure.',
        },
      },
      {
        issue: {
          ar: 'إثبات الأضرار في حالة تسرب المياه أو الحريق لعقد Multirisque Habitation',
          fr: 'Constituer le dossier sinistre Multirisque Habitation (dégâts des eaux ou incendie)',
        },
        solution: {
          ar: 'وثق الضرر بالصور واحتفظ بمحضر المعاينة أو تقرير الحماية المدنية، ثم اتصل فورا بالوكالة أو مركز الخدمة 021 92 01 01 قبل إصلاح التلف.',
          fr: 'Prenez des photos des dommages, joignez le rapport d’intervention le cas échéant et prévenez votre agence ou le 021 92 01 01 avant travaux.',
        },
      },
      {
        issue: {
          ar: 'تحديث قائمة المعدات والأصول في عقد التأمين المهني Multirisque Pro',
          fr: 'Mettre à jour la valeur des équipements assurés en Multirisque Pro',
        },
        solution: {
          ar: 'تواصل عبر salama-assurances.dz/contactez-nous أو مع وكالتك لتقديم ملحق عقد (Avenant) عند اقتناء تجهيزات جديدة حتى تبقى مغطاة بالكامل.',
          fr: 'Demandez un avenant au contrat via salama-assurances.dz/contactez-nous ou votre point de vente dès l’acquisition de nouveaux équipements.',
        },
      },
    ],
    extraFaqs: [],
  },

  'trust-algeria': {
    intro: {
      ar: [
        'تنشط شركة ترست الجزائر للتأمين وإعادة التأمين (Trust Algeria Assurances & Réassurance) انطلاقا من مقرها الرئيسي في القبة بالجزائر العاصمة، كواحدة من شركات التأمين وإعادة التأمين الخاصة المعتمدة التي تقدم تغطيات متنوعة للأفراد والشركات عبر شبكة وكالاتها الوطنية.',
        'تشمل باقة ترست الجزائر تأمين المركبات الفردية وأساطيل النقل بالمسؤولية المدنية والتأمين الشامل (Tous Risques)، وحماية المساكن والمباني ضد الأخطار المتعددة والكوارث الطبيعية CAT-NAT، إضافة إلى تأمين المسافرين لتأشيرة شنغن والحج والعمرة مع التكفل الطبي الفوري بالخارج.',
        'على مستوى قطاع الأعمال، توفر الشركة حلولا متخصصة للمصانع والمؤسسات الصغرى والمتوسطة والمشاريع الإنشائية والمسؤولية المهنية، ويمكن للزبائن طلب عروض الأسعار عبر trust-assurances.dz أو الاتصال بالخط المخصص +213 98 230 96 05 والرقم 021 29 88 88.'
      ],
      fr: [
        'Implantée à Kouba (Alger), Trust Algeria Assurances & Réassurance opère comme compagnie privée d’assurance et de réassurance offrant une gamme étendue de couvertures aux particuliers, voyageurs et opérateurs économiques.',
        'Son offre particuliers englobe l’assurance automobile (RC et Tous Risques), la multirisque habitation intégrant l’obligation CAT-NAT ainsi que l’assurance voyage internationale pour les visas Schengen, le Hadj et la Omra avec prise en charge médicale urgente.',
        'Pour les entreprises, Trust Algeria couvre les flottes de transport, usines, PME, chantiers de construction et responsabilités civiles professionnelles ; les demandes d’orientation et devis s’effectuent via trust-assurances.dz ou au +213 98 230 96 05 / 021 29 88 88.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'طلب عرض سعر مخصص لمشروع إنشائي أو مصنع لدى ترست الجزائر',
          fr: 'Obtenir une tarification pour un chantier de construction ou une unité industrielle',
        },
        solution: {
          ar: 'أعد الملف التقني للمشروع أو قائمة المعدات وتواصل مع الخط المخصص +213 98 230 96 05 أو الرقم 021 29 88 88 لترتيب دراسة الخطر في الوكالة.',
          fr: 'Préparez le descriptif technique du chantier ou du site industriel et contactez le +213 98 230 96 05 / 021 29 88 88 pour l’étude de risque.',
        },
      },
      {
        issue: {
          ar: 'إجراءات التبليغ الطبي الفوري لحاملي تأمين السفر وشنغن أو العمرة',
          fr: 'Déclencher la prise en charge médicale en voyage Schengen ou Omra',
        },
        solution: {
          ar: 'اتصل فورا برقم الطوارئ الدولية المطبوع في شهادة التأمين الصادرة عن ترست الجزائر وقدم رقم البوليصة وجواز السفر قبل سداد مصاريف الاستشفاء.',
          fr: 'Appelez immédiatement le numéro d’assistance imprimé sur votre attestation Trust Algeria en communiquant votre numéro de police avant paiement hospitalier.',
        },
      },
      {
        issue: {
          ar: 'الاستعلام عن أقرب نقطة بيع أو وكالة معتمدة في الولاية',
          fr: 'Trouver une agence ou un point de vente Trust Algeria en wilaya',
        },
        solution: {
          ar: 'راجع البوابة الرسمية trust-assurances.dz أو اتصل بالإدارة عبر 021 29 88 88 لمعرفة أقرب وكالة مخصصة لتجديد عقدك أو إيداع ملف حادث.',
          fr: 'Consultez trust-assurances.dz ou appelez le 021 29 88 88 pour obtenir les coordonnées de l’agence la plus proche de votre wilaya.',
        },
      },
    ],
    extraFaqs: [],
  },
};
