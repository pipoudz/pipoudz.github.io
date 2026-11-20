import { InsuranceItem, RichGuideContent } from '../../types';

export const batch1Insurances: InsuranceItem[] = [
  // 1. alliance-assurances
  {
    id: 'alliance-assurances',
    slug: 'alliance-assurances',
    name: {
      ar: 'أليانس للتأمينات (Alliance Assurances)',
      fr: 'Alliance Assurances Algérie',
    },
    acronym: 'ALLIANCE',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لخدمات أليانس للتأمينات في الجزائر: تطبيق الهاتف الذكي MyAlliance لإدارة العقود والتصريح بالحوادث وتحديد الوكالات، طلب عروض الأسعار أونلاين، خدمة الدفع بالتقسيط عبر بريد الجزائر لتأمينات السيارات، والرقم المختصر 3315.',
      fr: 'Guide complet des services numériques d’Alliance Assurances Algérie : application mobile MyAlliance (gestion des contrats, déclaration de sinistres, géolocalisation d’agences), devis en ligne, paiement fractionné Buy Now-Pay Later avec Algérie Poste et assistance 3315.',
    },
    website: 'https://allianceassurances.com.dz/',
    portalUrl: 'https://play.google.com/store/apps/details?id=com.blink.myalliance&hl=fr',
    headquarters: {
      ar: 'شوفالي / الشراقة، الجزائر العاصمة',
      fr: 'Chevalley / Chéraga, Alger',
    },
    products: [
      {
        ar: 'تطبيق الهاتف المحمول MyAlliance (Google Play)',
        fr: 'Application Mobile MyAlliance (Android)',
        url: 'https://play.google.com/store/apps/details?id=com.blink.myalliance&hl=fr',
        summary: {
          ar: 'إدارة عقود التأمين، التصريح الأولي بالحوادث، وتحديد مواقع وكالات أليانس القريبة بسهولة.',
          fr: 'Suivi de vos contrats d’assurance, pré-déclaration de sinistres et localisation des agences Alliance.',
        },
      },
      {
        ar: 'البوابة الرسمية وطلب عروض الأسعار أونلاين',
        fr: 'Portail Officiel & Devis en Ligne',
        url: 'https://allianceassurances.com.dz/',
        summary: {
          ar: 'تقديم طلب أولي لتسعيرة تأمين السيارات، السكن والكوارث الطبيعية CAT-NAT، والسفر الدولي وشنغن.',
          fr: 'Demande de tarification en ligne pour l’assurance auto, habitation CAT-NAT et voyage Schengen.',
        },
      },
      {
        ar: 'خدمة الدفع بالتقسيط لتأمين السيارات (Buy Now-Pay Later)',
        fr: 'Paiement Fractionné Assurance Auto (Buy Now-Pay Later)',
        url: 'https://allianceassurances.com.dz/',
        summary: {
          ar: 'تسهيل تسديد قسط تأمين السيارة عبر دفعات مجزأة بالشراكة مع مؤسسة بريد الجزائر.',
          fr: 'Solution de paiement échelonné développée en partenariat avec Algérie Poste pour l’assurance automobile.',
        },
      },
      {
        ar: 'دليل الوكالات ومركز خدمة الزبائن 3315',
        fr: 'Réseau d’Agences & Service Client 3315',
        url: 'https://allianceassurances.com.dz/',
        summary: {
          ar: 'العثور على أقرب نقطة خدمة عبر الولايات والتواصل مع الدعم عبر الرقم القصير 3315 أو 021 37 02 02.',
          fr: 'Localisateur d’agences de proximité et assistance directe au numéro court 3315 ou 021 37 02 02.',
        },
      },
    ],
    emergencyNumber: '3315 / 021 37 02 02',
    quickSummary: {
      autoInsurance: {
        ar: 'تأمين السيارات بالمسؤولية المدنية أو كل الأخطار مع إمكانية الدفع المجزأ بالتعاون مع بريد الجزائر والمساعدة على الطريق',
        fr: 'Assurance auto RC ou Tous Risques avec option de paiement échelonné Algérie Poste et assistance dépannage',
      },
      eDeclaration: {
        ar: 'تطبيق MyAlliance للتصريح السريع بالحوادث ومتابعة العقود، وبوابة allianceassurances.com.dz لطلب عروض الأسعار',
        fr: 'Application MyAlliance pour la déclaration de sinistres et suivi des contrats, plus devis en ligne sur allianceassurances.com.dz',
      },
      takafulOptions: {
        ar: 'تأمينات الأفراد والمهنيين: السيارات، السكن والكوارث الطبيعية CAT-NAT، السفر الدولي وشنغن، والحماية من الأخطار',
        fr: 'Couverture complète particuliers et entreprises : auto, multirisque habitation CAT-NAT, voyage Schengen et risques pros',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق اكتتاب تأمين السيارات أو التقسيط',
          fr: 'Dossier assurance automobile & paiement fractionné',
        },
        value: {
          ar: 'البطاقة الرمادية للمركبة، رخصة السياقة، بطاقة التعريف البيومترية، وبطاقة ذهبية/حساب CCP نشط للاستفادة من الدفع المجزأ',
          fr: 'Carte grise, permis de conduire, pièce d’identité et compte CCP/carte Edahabia éligible pour le paiement fractionné',
        },
      },
      {
        label: {
          ar: 'تأمين المسكن والكوارث الطبيعية CAT-NAT',
          fr: 'Assurance habitation & CAT-NAT obligatoire',
        },
        value: {
          ar: 'وثيقة الهوية، عقد الملكية أو عقد الإيجار، وتحديد المساحة الإجمالية والموقع الجغرافي للعقار السكني أو التجاري',
          fr: 'Pièce d’identité, acte de propriété ou bail de location et caractéristiques du bien immobilier (superficie et zone)',
        },
      },
      {
        label: {
          ar: 'تأمين السفر وملفات تأشيرة شنغن',
          fr: 'Assurance voyage internationale & visa Schengen',
        },
        value: {
          ar: 'جواز سفر ساري المفعول وتواريخ السفر الدقيقة لإصدار شهادة تغطية طبية مطابقة لمتطلبات السفارات',
          fr: 'Passeport biométrique en cours de validité et dates exactes de séjour pour émettre l’attestation consulaire',
        },
      },
      {
        label: {
          ar: 'الاتصال والدعم وتطبيق MyAlliance',
          fr: 'Assistance client & application MyAlliance',
        },
        value: {
          ar: 'الرقم القصير 3315 أو 021 37 02 02 — وتطبيق MyAlliance على متجر Google Play لتتبع الحوادث والوكالات',
          fr: 'Numéro court 3315 ou 021 37 02 02 — Application MyAlliance sur Google Play pour contrats et déclarations',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي خدمة الدفع المجزأ لتأمين السيارات لدى أليانس للتأمينات؟',
          fr: 'Comment fonctionne le paiement fractionné Buy Now-Pay Later chez Alliance Assurances ?',
        },
        answer: {
          ar: 'تتيح هذه الخدمة بالشراكة مع بريد الجزائر تقسيط تكلفة تأمين السيارة على دفعات ميسرة بدلا من تسديد المبلغ السنوي دفعة واحدة، بعد استيفاء شروط الأهلية في الوكالة.',
          fr: 'Développé avec Algérie Poste, ce dispositif permet d’échelonner le règlement de votre police d’assurance auto en plusieurs mensualités selon les critères d’éligibilité vérifiés en agence.',
        },
      },
      {
        question: {
          ar: 'ماذا يوفر تطبيق MyAlliance على الهاتف الذكي؟',
          fr: 'Que permet l’application mobile MyAlliance ?',
        },
        answer: {
          ar: 'يمكنك عبر تطبيق MyAlliance متابعة عقود التأمين السارية، إرسال التصريح الأولي بالحادث، وتحديد أقرب وكالة أليانس للتأمينات عبر الخريطة.',
          fr: 'MyAlliance permet de consulter vos polices actives, d’initier une déclaration de sinistre et de localiser les agences Alliance Assurances à proximité.',
        },
      },
      {
        question: {
          ar: 'هل تصدر أليانس للتأمينات شهادات السفر المعتمدة لتأشيرة شنغن؟',
          fr: 'Alliance Assurances délivre-t-elle l’attestation voyage pour visa Schengen ?',
        },
        answer: {
          ar: 'نعم، تقدم الشركة عقود تأمين سفر دولية مطابقة لشروط القنصليات والسفارات من حيث التغطية الطبية الطارئة والإجلاء الصحي.',
          fr: 'Oui, la compagnie propose des contrats d’assistance voyage conformes aux exigences consulaires pour la zone Schengen et les destinations internationales.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع مركز خدمة الزبائن لشركة أليانس للتأمينات؟',
          fr: 'Comment joindre le service client Alliance Assurances ?',
        },
        answer: {
          ar: 'يمكنك الاتصال مباشرة عبر الرقم القصير 3315 أو الرقم الأرضي 021 37 02 02، أو استخدام نموذج المراسلة عبر موقع allianceassurances.com.dz.',
          fr: 'Appelez le numéro court 3315 ou le 021 37 02 02, ou passez par le portail allianceassurances.com.dz.',
        },
      },
    ],
  },

  // 2. amana
  {
    id: 'amana',
    slug: 'amana',
    name: {
      ar: 'أمانة للتأمينات على الأشخاص (Amana Assurances)',
      fr: 'Amana Assurances des Personnes',
    },
    acronym: 'AMANA',
    type: 'public',
    description: {
      ar: 'الدليل الشامل لشركة أمانة للتأمينات (المتخصصة في تأمينات الأشخاص): اكتتاب تأمين السفر وشنغن أونلاين والدفع بالبطاقة الذهبية وCIB، التأمين التكميلي الصحي (Essentielle / Confort / Premium) وشبكة الدفع من قبل الغير Tiers-Payant، الادخار التقاعدي، فضاء الزبون، وتطبيق My Amana.',
      fr: 'Guide complet d’Amana Assurances des Personnes : souscription et paiement en ligne (Edahabia/CIB) de l’assurance voyage Schengen, complémentaire santé avec réseau Tiers-Payant, épargne retraite, espace client web, application My Amana et assurance collective entreprises.',
    },
    website: 'https://www.amana.dz/#/',
    portalUrl: 'https://espaceclient.amana.dz/',
    headquarters: {
      ar: 'ساحة أول ماي، الجزائر العاصمة',
      fr: 'Place du 1er Mai, Alger',
    },
    products: [
      {
        ar: 'الموقع الرسمي لأمانة للتأمينات (amana.dz)',
        fr: 'Site Officiel Amana Assurances',
        url: 'https://www.amana.dz/#/',
        summary: {
          ar: 'البوابة الرئيسية للتعرف على باقات تأمين الأشخاص، السفر، الصحة، التقاعد التكميلي والتأمين الجماعي.',
          fr: 'Portail officiel présentant l’ensemble des formules voyage, santé, prévoyance, retraite et contrats groupe.',
        },
      },
      {
        ar: 'اكتتاب تأمين السفر وشنغن أونلاين والدفع الإلكتروني',
        fr: 'Souscription Assurance Voyage Schengen & Paiement en Ligne',
        url: 'https://www.amana.dz/#/voyage',
        summary: {
          ar: 'حساب تسعيرة السفر (شنغن، تركيا، تونس) والدفع عبر البطاقة الذهبية أو CIB واستلام الشهادة فوريا.',
          fr: 'Calcul instantané de prime voyage (Schengen, Turquie, Tunisie), paiement Edahabia/CIB et attestation immédiate.',
        },
      },
      {
        ar: 'طلب عرض سعر التأمين التكميلي الصحي',
        fr: 'Devis Assurance Complémentaire Santé',
        url: 'https://www.amana.dz/#/sante',
        summary: {
          ar: 'حساب تسعيرة التأمين الصحي للأفراد والعائلات وفق الصيغ الثلاث Essentielle وConfort وPremium.',
          fr: 'Simulation des formules santé Essentielle, Confort et Premium adaptées aux particuliers et familles.',
        },
      },
      {
        ar: 'فضاء الزبون والمنخرطين المباشر',
        fr: 'Espace Client & Adhérents en Ligne',
        url: 'https://espaceclient.amana.dz/',
        summary: {
          ar: 'الولوج للحساب الشخصي، تتبع جداول الاسترداد المالي للرعاية الصحية، تحميل الشهادات وتجديد العقود.',
          fr: 'Accès sécurisé au suivi des contrats, bordereaux de remboursement médical, attestations et renouvellements.',
        },
      },
      {
        ar: 'التصريح بالحادث وطلب التكفل الطبي والمالي',
        fr: 'Déclaration de Sinistre & Prise en Charge',
        url: 'https://www.amana.dz/#/sinistre',
        summary: {
          ar: 'التبليغ الرقمي عن الحوادث الطبية أو التأمينية ومتابعة ملفات التعويض والاسترجاع المالي.',
          fr: 'Procédure numérique de déclaration de sinistre et suivi des demandes d’indemnisation ou remboursement.',
        },
      },
      {
        ar: 'شبكة الدفع من قبل الغير (Tiers-Payant) والوكالات',
        fr: 'Réseau Tiers-Payant (Cliniques, Pharmacies) & Agences',
        url: 'https://www.amana.dz/#/agences',
        summary: {
          ar: 'دليل البحث عن العيادات والمراكز الطبية والصيدليات الشريكة ومواقع وكالات أمانة للتأمينات.',
          fr: 'Annuaire géolocalisé des cliniques, centres médicaux, pharmacies conventionnées Tiers-Payant et agences Amana.',
        },
      },
      {
        ar: 'تطبيق الهاتف المحمول My Amana',
        fr: 'Application Mobile My Amana (Android)',
        url: 'https://play.google.com/store/apps/details?id=dz.amana.myamana',
        summary: {
          ar: 'تصوير وإرسال فواتير العلاج بالهاتف لمتابعة التعويض الصحي وتحديد مواقع الأطباء والصيدليات الشريكة.',
          fr: 'Envoi dématérialisé des feuilles de soins, suivi des remboursements et recherche des praticiens partenaires.',
        },
      },
      {
        ar: 'خدمات المؤسسات والشركات (التأمين الجماعي)',
        fr: 'Espace Entreprises & Assurance Collective',
        url: 'https://www.amana.dz/#/entreprise',
        summary: {
          ar: 'باقات التأمين الجماعي الصحي، الحماية والوفاة للموظفين وخطط الادخار المهني للشركات.',
          fr: 'Solutions d’assurance groupe santé, prévoyance décès/invalidité et épargne salariale pour les entreprises.',
        },
      },
      {
        ar: 'حلول الادخار والتقاعد التكميلي (Épargne Retraite)',
        fr: 'Solutions Épargne & Retraite Complémentaire',
        url: 'https://www.amana.dz/#/retraite',
        summary: {
          ar: 'خطط ادخار فردية طويلة المدى مع احتساب المخصصات التقاعدية التكميلية المستقبلية.',
          fr: 'Formules d’épargne individuelle à long terme permettant de constituer un complément de retraite.',
        },
      },
      {
        ar: 'مركز الاتصال والاستعلامات (contact@amana.dz)',
        fr: 'Contact & Assistance Client (023 05 44 75)',
        url: 'https://www.amana.dz/#/contact',
        summary: {
          ar: 'التواصل المباشر عبر الهاتف 023 05 44 75 / 021 65 40 40 أو البريد الإلكتروني الرسمي contact@amana.dz.',
          fr: 'Joindre les conseillers Amana au 023 05 44 75 / 021 65 40 40 ou par courriel à contact@amana.dz.',
        },
      },
    ],
    emergencyNumber: '023 05 44 75 / 021 65 40 40',
    quickSummary: {
      autoInsurance: {
        ar: 'شركة متخصصة حصرا في تأمينات الأشخاص (السفر، الصحة التكميلية، الحماية، الادخار والتقاعد) ولا تسوق تأمين السيارات',
        fr: 'Compagnie dédiée exclusivement aux assurances de personnes (Voyage, Santé, Prévoyance, Épargne Retraite — hors Auto)',
      },
      eDeclaration: {
        ar: 'اكتتاب فوري لتأمين السفر بالبطاقة الذهبية أو CIB + إرسال فواتير العلاج عبر تطبيق My Amana ومتابعتها في فضاء الزبون',
        fr: 'Souscription voyage en ligne par Edahabia/CIB, envoi des factures médicales sur My Amana et suivi via espaceclient.amana.dz',
      },
      takafulOptions: {
        ar: 'صيغ تأمين صحي للأفراد والعائلات (Essentielle / Confort / Premium) وشبكة Tiers-Payant والتأمين الجماعي للشركات',
        fr: 'Gammes santé Essentielle/Confort/Premium, réseau Tiers-Payant conventionné, épargne retraite et prévoyance collective',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الاكتتاب الإلكتروني لتأمين السفر (شنغن / تركيا / تونس)',
          fr: 'Souscription en ligne assurance voyage internationale',
        },
        value: {
          ar: 'جواز سفر ساري المفعول، تحديد بلد الوجهة وتواريخ السفر، وبطاقة ذهبية أو CIB للدفع الآمن واستلام الوثيقة فوريا',
          fr: 'Passeport valide, destination et dates exactes, plus carte Edahabia ou CIB pour régler en ligne et télécharger l’attestation',
        },
      },
      {
        label: {
          ar: 'الانتساب للتأمين التكميلي الصحي والاسترداد الطبي',
          fr: 'Adhésion complémentaire santé & remboursements',
        },
        value: {
          ar: 'استمارة التصريح الطبي، بطاقة التعريف الوطنية، كشف الهوية البنكية أو البريدية RIB/RIP لتلقي تحويلات التعويض الصحي',
          fr: 'Questionnaire médical, pièce d’identité et RIB/RIP pour le virement des remboursements via espaceclient.amana.dz ou My Amana',
        },
      },
      {
        label: {
          ar: 'الاستفادة من شبكة الدفع من قبل الغير Tiers-Payant',
          fr: 'Utilisation du réseau Tiers-Payant conventionné',
        },
        value: {
          ar: 'بطاقة المنخرط السارية والوصفة الطبية عند زيارة الصيدليات والعيادات والمراكز الطبية الشريكة المدرجة في amana.dz/#/agences',
          fr: 'Présentation de la carte d’adhérent et de l’ordonnance auprès des cliniques et pharmacies listées sur amana.dz/#/agences',
        },
      },
      {
        label: {
          ar: 'مركز الاتصال والبريد الإلكتروني الرسمي',
          fr: 'Support client & contacts officiels',
        },
        value: {
          ar: 'الهاتف 023 05 44 75 أو 021 65 40 40 — البريد الإلكتروني contact@amana.dz — المقر بساحة أول ماي، الجزائر',
          fr: 'Téléphone 023 05 44 75 / 021 65 40 40 — E-mail contact@amana.dz — Siège Place du 1er Mai, Alger',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن شراء وثيقة تأمين السفر لفيزا شنغن أونلاين من أمانة للتأمينات؟',
          fr: 'Peut-on payer son assurance voyage Schengen en ligne chez Amana Assurances ?',
        },
        answer: {
          ar: 'نعم، عبر رابط amana.dz/#/voyage يمكنك حساب السعر حسب الوجهة (شنغن، تركيا، تونس) والدفع مباشرة بالبطاقة الذهبية أو بطاقة CIB واستلام شهادة التأمين الرقمية فورا.',
          fr: 'Oui, sur amana.dz/#/voyage vous calculez votre tarif, réglez par carte Edahabia ou CIB et téléchargez immédiatement votre attestation officielle pour le dossier visa.',
        },
      },
      {
        question: {
          ar: 'كيف أرسل فواتير العلاج لمتابعة التعويض الصحي في أمانة للتأمينات؟',
          fr: 'Comment transmettre ses justificatifs de soins pour remboursement chez Amana ?',
        },
        answer: {
          ar: 'استعمل تطبيق الهاتف My Amana لتصوير الفواتير والوصفات الطبية وإرسالها إلكترونيا، كما يمكنك تتبع جداول الاسترداد المالي وحالة الملف عبر espaceclient.amana.dz.',
          fr: 'Utilisez l’application mobile My Amana pour scanner et envoyer vos factures médicales, puis suivez l’état des règlements sur espaceclient.amana.dz.',
        },
      },
      {
        question: {
          ar: 'ما هي صيغ التأمين الصحي التي تقدمها شركة أمانة؟',
          fr: 'Quelles formules d’assurance santé propose Amana ?',
        },
        answer: {
          ar: 'توفر الشركة ثلاث باقات رئيسية للأفراد والعائلات هي Essentielle وConfort وPremium، مع شبكة واسعة للدفع من قبل الغير Tiers-Payant لدى العيادات والصيدليات.',
          fr: 'La compagnie propose les gammes Essentielle, Confort et Premium pour les particuliers et familles, adossées au réseau Tiers-Payant conventionné.',
        },
      },
      {
        question: {
          ar: 'هل تغطي شركة أمانة تأمين السيارات والمنازل؟',
          fr: 'Amana Assurances propose-t-elle des contrats auto ou habitation ?',
        },
        answer: {
          ar: 'لا، أمانة هي شركة عمومية متخصصة حصرا في تأمينات الأشخاص (السفر، الصحة، التقاعد، الحماية، والتأمين الجماعي للشركات). لتأمين السيارات والمنازل يرجى مراجعة شركات تأمين الأضرار مثل SAA أو CAAR أو CAAT.',
          fr: 'Non, Amana est spécialisée dans les assurances de personnes ; pour les véhicules et l’habitation CAT-NAT, il convient de s’adresser aux assureurs dommages (SAA, CAAR, CAAT, AXA, GIG, etc.).',
        },
      },
    ],
  },

  // 3. axa
  {
    id: 'axa',
    slug: 'axa',
    name: {
      ar: 'أكسا للتأمينات الجزائر (AXA Assurances Algérie)',
      fr: 'AXA Assurances Algérie',
    },
    acronym: 'AXA',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لخدمات أكسا للتأمينات الجزائر: طلب عروض الأسعار والمحاكاة الفورية عبر الإنترنت (السيارات، المسكن CAT-NAT، السفر الدولي وشنغن)، التصريح المسبق بالحوادث ومتابعة الخبرة، فضاء الزبون الرقمي، تطبيق MyAXA DZ، وحلول الشركات.',
      fr: 'Guide complet des services numériques d’AXA Assurances Algérie : devis instantané en ligne (auto, multirisque habitation CAT-NAT, voyage Schengen), déclaration et suivi des sinistres, espace client web, application MyAXA DZ et solutions entreprises.',
    },
    website: 'https://www.axa.dz/',
    portalUrl: 'https://www.axa.dz/espace-client',
    headquarters: {
      ar: 'المحمدية، الجزائر العاصمة',
      fr: 'Mohammadia, Alger',
    },
    products: [
      {
        ar: 'الموقع الرسمي أكسا الجزائر (axa.dz)',
        fr: 'Site Officiel AXA Algérie',
        url: 'https://www.axa.dz/',
        summary: {
          ar: 'البوابة الشاملة لعروض التأمين للأفراد والشركات وخطط الحماية والخدمات الإلكترونية في الجزائر.',
          fr: 'Portail institutionnel regroupant toutes les offres particuliers, professionnels et entreprises d’AXA Algérie.',
        },
      },
      {
        ar: 'طلب عرض سعر فوري عبر الإنترنت (Devis en Ligne)',
        fr: 'Demande de Devis Instantané en Ligne',
        url: 'https://www.axa.dz/devis-en-ligne',
        summary: {
          ar: 'محاكاة وطلب تسعيرة مخصصة لتأمين السيارات، المنازل، وتأمين السفر الدولي في دقائق.',
          fr: 'Simulation rapide et demande de tarif personnalisé pour l’assurance auto, habitation ou voyage.',
        },
      },
      {
        ar: 'تأمين السفر الدولي وشنغن (Assurance Voyage)',
        fr: 'Assurance Voyage Internationale & Schengen',
        url: 'https://www.axa.dz/particuliers/assurance-voyage',
        summary: {
          ar: 'تغطية سفر معتمدة لتأشيرة شنغن وكافة الوجهات العالمية تشمل الرعاية الطبية والإجلاء الصحي.',
          fr: 'Couverture voyage conforme aux critères Schengen et internationaux incluant frais médicaux d’urgence et rapatriement.',
        },
      },
      {
        ar: 'تأمين المسكن والممتلكات والكوارث الطبيعية (CAT-NAT)',
        fr: 'Assurance Habitation & CAT-NAT',
        url: 'https://www.axa.dz/particuliers/habitation',
        summary: {
          ar: 'حماية الشقق والمنازل ضد الحرائق والسرقة وأضرار المياه بالإضافة إلى التأمين الإلزامي CAT-NAT.',
          fr: 'Protection multirisque des logements contre incendie, vol, dégâts des eaux et catastrophes naturelles CAT-NAT.',
        },
      },
      {
        ar: 'التصريح المسبق ومتابعة ملفات الحوادث (Sinistres)',
        fr: 'Déclaration & Suivi de Sinistres en Ligne',
        url: 'https://www.axa.dz/sinistres',
        summary: {
          ar: 'خدمة التصريح المسبق بالحوادث ومتابعة مراحل الخبرة التقنية وملفات التعويض عن بعد.',
          fr: 'Pré-déclaration des sinistres à distance et suivi des expertises et dossiers d’indemnisation.',
        },
      },
      {
        ar: 'فضاء الزبون الرقمي (Espace Client)',
        fr: 'Espace Client en Ligne AXA',
        url: 'https://www.axa.dz/espace-client',
        summary: {
          ar: 'دخول آمن للاطلاع على العقود السارية، الإيصالات، وتحديث البيانات الشخصية للمشتركين.',
          fr: 'Portail personnel sécurisé pour consulter vos contrats, quittances et mettre à jour vos coordonnées.',
        },
      },
      {
        ar: 'تطبيق الهاتف المحمول MyAXA DZ (Google Play)',
        fr: 'Application Mobile MyAXA DZ (Android)',
        url: 'https://play.google.com/store/apps/details?id=com.axa.myaxadz',
        summary: {
          ar: 'تطبيق رسمي لمتابعة التعويضات الصحية وإرسال الفواتير الطبية رقميا وإدارة التغطية الصحية.',
          fr: 'Application officielle pour déposer vos justificatifs médicaux et suivre vos remboursements santé sur smartphone.',
        },
      },
      {
        ar: 'خدمات الشركات وأساطيل المركبات والصحة الجماعية',
        fr: 'Solutions Entreprises, Flottes & Santé Collective',
        url: 'https://www.axa.dz/entreprises',
        summary: {
          ar: 'بوابة حلول تأمين أساطيل السيارات، المسؤولية المدنية المهنية، والتغطية الصحية الجماعية للمؤسسات.',
          fr: 'Offres corporate dédiées aux flottes automobiles, responsabilités civiles professionnelles et santé collective.',
        },
      },
      {
        ar: 'البحث عن أقرب وكالة (Trouver une Agence)',
        fr: 'Localisateur d’Agences AXA Algérie',
        url: 'https://www.axa.dz/trouver-une-agence',
        summary: {
          ar: 'دليل الوكالات ونقاط الخدمة التابعة لأكسا مع أرقام الهواتف ومواعيد العمل والمسارات.',
          fr: 'Annuaire géolocalisé des agences et points de vente AXA avec téléphones, horaires et itinéraires.',
        },
      },
      {
        ar: 'الشكاوى وطلبات المساعدة والأسئلة الشائعة',
        fr: 'Réclamations, Contact (021 98 00 20) & FAQ',
        url: 'https://www.axa.dz/reclamations',
        summary: {
          ar: 'توجيه الانشغالات والتظلمات عبر axa.dz/reclamations أو الاستفسار عبر axa.dz/contact وaxa.dz/faq.',
          fr: 'Suivi dédié des réclamations sur axa.dz/reclamations, service client 021 98 00 20 et base FAQ axa.dz/faq.',
        },
      },
    ],
    emergencyNumber: '021 98 00 20',
    quickSummary: {
      autoInsurance: {
        ar: 'تأمين المسؤولية المدنية الإجباري وصيغ الضمان الشامل Tous Risques وأساطيل الشركات مع المساعدة على الطريق',
        fr: 'Assurance auto RC obligatoire, Tous Risques, flottes d’entreprises et services d’assistance dépannage',
      },
      eDeclaration: {
        ar: 'محاكاة الأسعار عبر axa.dz/devis-en-ligne + تصريح مسبق بالحادث عبر axa.dz/sinistres + تتبع الفواتير الطبية عبر MyAXA DZ',
        fr: 'Devis en ligne, pré-déclaration des sinistres sur axa.dz/sinistres et remboursements santé via MyAXA DZ',
      },
      takafulOptions: {
        ar: 'تغطيات متكاملة للسفر الدولي وشنغن، السكن والكوارث الطبيعية CAT-NAT، التأمين الصحي التكميلي وحماية المؤسسات',
        fr: 'Couvertures voyage Schengen/monde, habitation CAT-NAT, complémentaire santé et multirisques professionnelles',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق اكتتاب تأمين السيارات أو طلب عرض السعر',
          fr: 'Pièces pour devis ou contrat automobile AXA',
        },
        value: {
          ar: 'البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية، مع إمكانية البدء بطلب التسعيرة عبر axa.dz/devis-en-ligne',
          fr: 'Carte grise, permis de conduire et pièce d’identité nationale, avec simulation préalable possible sur axa.dz/devis-en-ligne',
        },
      },
      {
        label: {
          ar: 'ملف التصريح بالحادث والخبرة عن بعد',
          fr: 'Dossier de déclaration de sinistre',
        },
        value: {
          ar: 'وثيقة المعاينة الودية Constat أو محضر الشرطة/الدرك، نسخة من عقد التأمين، وملء التصريح المسبق عبر axa.dz/sinistres',
          fr: 'Constat amiable signé ou PV officiel, numéro de police et pré-déclaration en ligne sur axa.dz/sinistres',
        },
      },
      {
        label: {
          ar: 'الاستفادة من تطبيق MyAXA DZ للتأمين الصحي',
          fr: 'Activation de MyAXA DZ (santé & contrats)',
        },
        value: {
          ar: 'رقم عقد التأمين الصحي الجماعي أو الفردي وبيانات المؤمن له لإرسال الفواتير الطبية ومتابعة التعويضات من الهاتف',
          fr: 'Numéro d’adhérent santé et identifiants personnels pour numériser les soins et suivre les remboursements sur MyAXA DZ',
        },
      },
      {
        label: {
          ar: 'الاتصال الموحد والشكاوى وفضاء الأسئلة',
          fr: 'Contact client, réclamations & FAQ officielle',
        },
        value: {
          ar: 'الهاتف الموحد 021 98 00 20 — صفحة التواصل axa.dz/contact — الشكاوى axa.dz/reclamations — الأسئلة axa.dz/faq',
          fr: 'Ligne unique 021 98 00 20 — axa.dz/contact — Réclamations axa.dz/reclamations — FAQ axa.dz/faq',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أطلب تسعيرة فورية لتأمين سيارتي أو سفري لدى أكسا الجزائر؟',
          fr: 'Comment obtenir un devis en ligne auprès d’AXA Assurances Algérie ?',
        },
        answer: {
          ar: 'ادخل إلى صفحة axa.dz/devis-en-ligne، اختر فرع التأمين المطلوب (السيارات، المسكن، السفر)، وأدخل خصائص المركبة أو العقار أو مدة السفر للحصول على عرض سعر مخصص.',
          fr: 'Rendez-vous sur axa.dz/devis-en-ligne, sélectionnez le produit souhaité (auto, habitation, voyage) et renseignez vos paramètres pour recevoir une estimation personnalisée.',
        },
      },
      {
        question: {
          ar: 'ما هي وظائف تطبيق MyAXA DZ مقارنة بفضاء الزبون عبر الويب؟',
          fr: 'À quoi sert l’application mobile MyAXA DZ ?',
        },
        answer: {
          ar: 'يركز تطبيق MyAXA DZ على تبسيط متابعة التعويضات الصحية وإرسال الفواتير الطبية رقميا عبر الهاتف، بينما يوفر axa.dz/espace-client الاطلاع على العقود والإيصالات وتحديث البيانات.',
          fr: 'MyAXA DZ facilite l’envoi des factures médicales et le suivi des remboursements santé sur smartphone, tandis que axa.dz/espace-client regroupe vos polices, quittances et informations.',
        },
      },
      {
        question: {
          ar: 'كيف أصرح بحادث مرور لدى أكسا للتأمينات؟',
          fr: 'Comment déclarer un sinistre automobile chez AXA Algérie ?',
        },
        answer: {
          ar: 'يمكنك إجراء التصريح المسبق إلكترونيا عبر axa.dz/sinistres خلال 7 أيام من تاريخ الحادث، ثم تقديم السيارة والملف إلى أقرب وكالة أو مركز خبرة محدد عبر axa.dz/trouver-une-agence.',
          fr: 'Effectuez une pré-déclaration sur axa.dz/sinistres dans les 7 jours ouvrables, puis présentez le dossier et le véhicule à l’agence ou au centre d’expertise indiqué.',
        },
      },
      {
        question: {
          ar: 'كيف أقدم شكوى أو تظلما بشأن ملف تأمين لدى شركة AXA؟',
          fr: 'Comment déposer une réclamation auprès d’AXA Algérie ?',
        },
        answer: {
          ar: 'خصصت الشركة مسارا رسميا للشكاوى عبر axa.dz/reclamations لتسجيل التظلمات ومتابعة الردود، إضافة إلى الخط الهاتفي المباشر 021 98 00 20.',
          fr: 'La compagnie met à disposition un portail dédié sur axa.dz/reclamations pour tracer votre demande, en complément de la ligne 021 98 00 20.',
        },
      },
    ],
  },

  // 4. caar
  {
    id: 'caar',
    slug: 'caar',
    name: {
      ar: 'الشركة الجزائرية للتأمين وإعادة التأمين (CAAR)',
      fr: 'Compagnie Algérienne d’Assurance et de Réassurance (CAAR)',
    },
    acronym: 'CAAR',
    type: 'public',
    description: {
      ar: 'الدليل الشامل للشركة الجزائرية للتأمين وإعادة التأمين CAAR: الاكتتاب والدفع الإلكتروني ببطاقة CIB والذهبية لتأمين المسكن MRH والكوارث الطبيعية CAT-NAT، تطبيق الهاتف الذكي CAAR+، منصة e-Transport لتأمين البضائع، طلب عروض أسعار السيارات والسفر، وخدمة النجدة 0982 301 19.',
      fr: 'Guide complet de la Compagnie Algérienne d’Assurance et de Réassurance (CAAR) : souscription et paiement en ligne (CIB/Edahabia) pour l’habitation MRH et les catastrophes naturelles CAT-NAT, application CAAR+, plateforme e-Transport, devis auto et voyage, réseau d’agences et assistance 0982 301 19.',
    },
    website: 'https://caar.dz/',
    portalUrl: 'https://play.google.com/store/apps/details?id=dz.caar.mobile',
    headquarters: {
      ar: 'أولاد فايت، الجزائر العاصمة',
      fr: 'Ouled Fayet, Alger',
    },
    products: [
      {
        ar: 'الموقع الرسمي للشركة (caar.dz)',
        fr: 'Site Officiel CAAR',
        url: 'https://caar.dz/',
        summary: {
          ar: 'البوابة الرسمية لعروض الأفراد والمهنيين والشركات الكبرى وخدمات التأمين وإعادة التأمين.',
          fr: 'Portail officiel de la CAAR présentant l’ensemble des garanties particuliers, professionnels et grands risques.',
        },
      },
      {
        ar: 'تطبيق الهاتف الذكي CAAR+ (Google Play)',
        fr: 'Application Mobile CAAR+ (Android)',
        url: 'https://play.google.com/store/apps/details?id=dz.caar.mobile',
        summary: {
          ar: 'إدارة العقود، الاكتتاب والدفع الإلكتروني، التصريح بالحادث ومتابعته، وتحميل الوثائق بصيغة PDF مباشرة.',
          fr: 'Gestion des polices, souscription et paiement en ligne, déclaration/suivi des sinistres et téléchargement PDF.',
        },
      },
      {
        ar: 'تأمين المسكن متعدد الأخطار (MRH) والدفع الإلكتروني',
        fr: 'Assurance Multirisque Habitation (MRH) & E-Paiement',
        url: 'https://caar.dz/produits/habitation/',
        summary: {
          ar: 'محاكاة أسعار التأمين المتعدد الأخطار على السكن والاكتتاب الفوري مع السداد ببطاقة CIB والذهبية.',
          fr: 'Simulation tarifaire, souscription directe et règlement par carte CIB ou Edahabia de votre police habitation.',
        },
      },
      {
        ar: 'تأمين الكوارث الطبيعية (CAT-NAT) أونلاين',
        fr: 'Assurance Catastrophes Naturelles (CAT-NAT)',
        url: 'https://caar.dz/produits/catastrophes-naturelles/',
        summary: {
          ar: 'استخراج وثيقة التأمين الإلزامي ضد الكوارث الطبيعية للخواص والتجار إلكترونيا والدفع الآمن.',
          fr: 'Émission en ligne de l’attestation obligatoire CAT-NAT pour particuliers et commerçants avec e-paiement sécurisé.',
        },
      },
      {
        ar: 'طلب عرض سعر تأمين السيارات (Devis Auto)',
        fr: 'Devis Assurance Automobile CAAR',
        url: 'https://caar.dz/produits/automobile/',
        summary: {
          ar: 'حساب تكلفة تأمين المركبات واختيار باقات الضمان التكميلية وخدمة النجدة والمساعدة.',
          fr: 'Tarification des polices auto et sélection des garanties complémentaires ainsi que de l’assistance dépannage.',
        },
      },
      {
        ar: 'طلب تسعيرة تأمين السفر والمساعدة الدولية',
        fr: 'Assurance Voyage & Assistance Internationale',
        url: 'https://caar.dz/produits/voyage/',
        summary: {
          ar: 'حساب تكلفة وثيقة التأمين على السفر الدولي والتغطيات الطبية لمختلف الوجهات والتأشيرات.',
          fr: 'Devis voyage en ligne avec garanties médicales et rapatriement conformes aux demandes de visas internationaux.',
        },
      },
      {
        ar: 'تأمين المهنيين والشركات الناشئة (Multirisque Pro & Startups)',
        fr: 'Assurance Professionnels & Startups',
        url: 'https://caar.dz/produits/professionnels/',
        summary: {
          ar: 'حلول تأمينية شاملة لحماية المنشآت الاقتصادية، المحلات التجارية، الشركات الناشئة والمهن الحرة.',
          fr: 'Couvertures adaptées aux commerces, locaux professionnels, professions libérales et jeunes entreprises innovantes.',
        },
      },
      {
        ar: 'منصة e-Transport للتأمين على البضائع المنقولة',
        fr: 'Plateforme e-Transport (Assurance Marchandises)',
        url: 'https://caar.dz/produits/transport/',
        summary: {
          ar: 'منصة رقمية مخصصة للشركات والمتعاملين للتصريح والتأمين على شحن ونقل البضائع إلكترونيا.',
          fr: 'Téléservice dédié aux opérateurs économiques pour déclarer et assurer en ligne les expéditions de marchandises.',
        },
      },
      {
        ar: 'محدد مواقع وكالات CAAR عبر الولايات',
        fr: 'Carte Interactive des Agences CAAR',
        url: 'https://caar.dz/agences/',
        summary: {
          ar: 'خريطة تفاعلية لتحديد أقرب وكالة تجارية أو نقطة بيع تابعة للشركة عبر كامل التراب الوطني.',
          fr: 'Localisateur des agences et points de vente CAAR répartis sur l’ensemble des wilayas.',
        },
      },
      {
        ar: 'فضاء الشكاوى والاستفسارات والأسئلة الشائعة',
        fr: 'Réclamations, Assistance (021 63 20 72) & FAQ',
        url: 'https://caar.dz/contact/',
        summary: {
          ar: 'نموذج موحد للشكاوى والطعون عبر caar.dz/contact ودليل المؤمن له في caar.dz/faq.',
          fr: 'Formulaire officiel de contact/réclamations (caar.dz/contact) et guide de l’assuré (caar.dz/faq).',
        },
      },
    ],
    emergencyNumber: '0982 301 19 / 021 63 20 72 / 023 30 96 00',
    quickSummary: {
      autoInsurance: {
        ar: 'تأمين السيارات الإجباري والتكميلي وخدمة النجدة والقطر المباشرة على الرقم 0982 301 19',
        fr: 'Assurance automobile RC et Tous Risques avec service de dépannage et remorquage joignable au 0982 301 19',
      },
      eDeclaration: {
        ar: 'اكتتاب ودفع إلكتروني ببطاقة CIB والذهبية لتأمين السكن وCAT-NAT + إدارة العقود وتصريح الحوادث عبر تطبيق CAAR+ ومنصة e-Transport',
        fr: 'Souscription/paiement CIB et Edahabia (MRH & CAT-NAT), application CAAR+ pour déclarer les sinistres et portail e-Transport',
      },
      takafulOptions: {
        ar: 'حلول متكاملة للأفراد، السفر الدولي، الشركات الناشئة، تأمين البضائع والنقل، وكبرى المخاطر الصناعية',
        fr: 'Couvertures étendues : voyage, multirisque startups/pro, transport de marchandises e-Transport et risques industriels',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الاكتتاب والدفع الإلكتروني لـ MRH وCAT-NAT',
          fr: 'Souscription & paiement en ligne MRH / CAT-NAT',
        },
        value: {
          ar: 'بيانات العقار (الولاية، المساحة، نوع البناية)، رقم الهاتف المسجل، وبطاقة CIB أو البطاقة الذهبية لتحميل الشهادة بصيغة PDF',
          fr: 'Caractéristiques du bien immobilier (wilaya, surface, usage) et carte CIB ou Edahabia pour régler et télécharger la police PDF',
        },
      },
      {
        label: {
          ar: 'ملف تأمين السيارات أو التصريح بحادث عبر CAAR+',
          fr: 'Assurance automobile & déclaration sur CAAR+',
        },
        value: {
          ar: 'البطاقة الرمادية، رخصة السياقة، المعاينة الودية وصور الأضرار عند التصريح الرقمي عبر تطبيق CAAR+',
          fr: 'Carte grise, permis de conduire, constat amiable et justificatifs photo en cas de sinistre déclaré via CAAR+',
        },
      },
      {
        label: {
          ar: 'استخدام منصة e-Transport لشحن البضائع',
          fr: 'Adhésion à e-Transport (entreprises)',
        },
        value: {
          ar: 'اتفاقية حساب شركة لدى CAAR، السجل التجاري والوثائق الجمركية أو فواتير الشحن للتصريح بكل رحلة إلكترونيا',
          fr: 'Compte entreprise ouvert auprès de la CAAR, registre de commerce et documents d’expédition/factures pour télédéclaration',
        },
      },
      {
        label: {
          ar: 'أرقام خدمة الزبائن والنجدة والشكاوى',
          fr: 'Assistance dépannage, service client & réclamations',
        },
        value: {
          ar: 'خدمة الزبائن 021 63 20 72 أو 023 30 96 00 — النجدة والقطر 0982 301 19 — البوابة caar.dz/contact',
          fr: 'Service client 021 63 20 72 / 023 30 96 00 — Assistance remorquage 0982 301 19 — Portail caar.dz/contact',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن دفع تأمين السكن والكوارث الطبيعية CAT-NAT إلكترونيا لدى CAAR؟',
          fr: 'Peut-on payer l’assurance habitation et CAT-NAT en ligne à la CAAR ?',
        },
        answer: {
          ar: 'نعم، تتيح بوابة caar.dz وتطبيق CAAR+ محاكاة الأسعار والاكتتاب المباشر في تأمين المسكن MRH وتأمين الكوارث الطبيعية CAT-NAT مع الدفع الفوري ببطاقة CIB أو البطاقة الذهبية وتحميل العقد PDF.',
          fr: 'Oui, caar.dz et l’application CAAR+ permettent de simuler, souscrire et régler votre assurance MRH ou CAT-NAT par carte CIB ou Edahabia avec téléchargement PDF immédiat.',
        },
      },
      {
        question: {
          ar: 'ما هي منصة e-Transport ومن يستفيد منها؟',
          fr: 'À qui s’adresse la plateforme e-Transport de la CAAR ?',
        },
        answer: {
          ar: 'e-Transport هي منصة رقمية مخصصة للشركات والمستوردين والمصدرين والمتعاملين الاقتصاديين لتصريح شحنات ونقل البضائع وتأمينها إلكترونيا عبر caar.dz/produits/transport.',
          fr: 'e-Transport est destinée aux entreprises, importateurs et transitaires pour déclarer et couvrir leurs opérations de transport et fret de marchandises en ligne.',
        },
      },
      {
        question: {
          ar: 'ما هو رقم خدمة النجدة والقطر في حالة عطل أو حادث مرور؟',
          fr: 'Quel est le numéro d’assistance et remorquage de la CAAR ?',
        },
        answer: {
          ar: 'خصصت الشركة الرقم المباشر 0982 301 19 لخدمة النجدة والقطر والمساعدة السريعة على الطريق، إلى جانب رقم مركز خدمة الزبائن 021 63 20 72.',
          fr: 'Le service d’assistance et de remorquage est joignable au 0982 301 19, en complément du centre de relation client au 021 63 20 72.',
        },
      },
      {
        question: {
          ar: 'هل توفر شركة CAAR عروضا خاصة للشركات الناشئة Startups؟',
          fr: 'La CAAR propose-t-elle des polices adaptées aux startups ?',
        },
        answer: {
          ar: 'نعم، تتضمن باقة caar.dz/produits/professionnels صيغا موجهة للمهن الحرة، المحلات التجارية، والشركات الناشئة لحماية التجهيزات والمكاتب والمسؤولية المدنية.',
          fr: 'Oui, la gamme caar.dz/produits/professionnels inclut des formules Multirisque dédiées aux startups, professions libérales et locaux commerciaux.',
        },
      },
    ],
  },

  // 5. caarama
  {
    id: 'caarama',
    slug: 'caarama',
    name: {
      ar: 'كرامة للتأمينات (CAARAMA Assurance)',
      fr: 'CAARAMA Assurance (Assurance des Personnes)',
    },
    acronym: 'CAARAMA',
    type: 'public',
    description: {
      ar: 'الدليل التعريفي لشركة كرامة للتأمينات CAARAMA (الفرع المتخصص في تأمينات الأشخاص التابع لمجمع CAAR): البوابة الرسمية caarama.dz لمتابعة خدمات التأمين الصحي وتأمين المقترضين والسفر والحماية الجماعية، ومقر دالي إبراهيم، وإرشادات التحقق من الروابط الفرعية المباشرة.',
      fr: 'Guide de référence sur CAARAMA Assurance (filiale d’assurance de personnes du groupe CAAR) : portail officiel caarama.dz, couverture santé, assurance emprunteur, assistance voyage, prévoyance collective, siège de Daly Ibrahim et recommandations pour accéder aux téléservices vérifiés.',
    },
    website: 'https://caarama.dz',
    portalUrl: 'https://caarama.dz',
    headquarters: {
      ar: 'دالي إبراهيم، الجزائر العاصمة',
      fr: 'Daly Ibrahim, Alger',
    },
    products: [
      {
        ar: 'البوابة الرسمية لشركة كرامة للتأمينات (caarama.dz)',
        fr: 'Portail Officiel CAARAMA Assurance',
        url: 'https://caarama.dz',
        summary: {
          ar: 'المرجع الرسمي لخدمات كرامة للتأمينات والتحقق من الروابط النشطة وعروض الأشخاص والمؤسسات.',
          fr: 'Point d’accès officiel et vérifié pour consulter les offres CAARAMA et vérifier les liens de téléservices.',
        },
      },
      {
        ar: 'تأمينات الأشخاص، الصحة التكميلية، والسفر الدولي',
        fr: 'Assurance Santé, Prévoyance & Assistance Voyage',
        url: 'https://caarama.dz',
        summary: {
          ar: 'عقود الحماية الفردية والعائلية، التأمين الصحي التكميلي، تأمين المقترض وتأمين السفر عبر الوكالات.',
          fr: 'Contrats santé individuelle et familiale, prévoyance emprunteur et assistance voyage souscrits via le réseau.',
        },
      },
      {
        ar: 'التصريح بالملفات ومتابعة التعويضات والشكاوى',
        fr: 'Suivi des Dossiers, Remboursements & Réclamations',
        url: 'https://caarama.dz',
        summary: {
          ar: 'توجيه ملفات الاسترداد الصحي والاستفسار حول التعويضات عبر الموقع الرسمي أو الهاتف 023 30 95 00.',
          fr: 'Dépôt et suivi des dossiers de remboursement ou réclamations via le site officiel ou le 023 30 95 00.',
        },
      },
      {
        ar: 'شبكة الوكالات وخدمة التأمين البنكي مع CAAR',
        fr: 'Réseau d’Agences & Partenariats Groupe CAAR',
        url: 'https://caarama.dz',
        summary: {
          ar: 'تغطية نقاط البيع التابعة لمجمع CAAR وشركائه عبر الولايات لخدمة الأفراد والشركات.',
          fr: 'Distribution à travers les agences dédiées et le réseau partenaire du groupe CAAR à travers les wilayas.',
        },
      },
    ],
    emergencyNumber: '023 30 95 00',
    quickSummary: {
      autoInsurance: {
        ar: 'تختص CAARAMA أساسا بتأمينات الأشخاص (الصحة، الحماية، السفر، المقترض) بينما تتولى الشركة الأم CAAR تأمين السيارات والممتلكات',
        fr: 'CAARAMA est spécialisée en assurances de personnes (santé, prévoyance, voyage), tandis que la maison-mère CAAR gère l’auto et les biens',
      },
      eDeclaration: {
        ar: 'إيداع ومتابعة الملفات عبر البوابة الرسمية caarama.dz أو الوكالات، مع التوصية بمراجعة الروابط الفرعية مباشرة من الموقع الرسمي',
        fr: 'Consultation et suivi des dossiers via caarama.dz et le réseau d’agences (toujours vérifier les sous-liens sur le domaine officiel)',
      },
      takafulOptions: {
        ar: 'عقود الحماية الصحية الجماعية والفردية، تأمين السفر، الحماية من الحوادث الجسمانية، والادخار والتقاعد',
        fr: 'Couvertures santé collective et individuelle, assistance voyage, accidents corporels et formules de prévoyance',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الاكتتاب في تأمين الأشخاص أو السفر أو الصحة',
          fr: 'Souscription santé, voyage ou prévoyance',
        },
        value: {
          ar: 'بطاقة التعريف الوطنية أو جواز سفر ساري (لتأمين السفر)، واستمارة التصريح الطبي عند الحاجة لعقود الصحة والحياة',
          fr: 'CNIBE ou passeport valide (voyage) et questionnaire médical / attestation d’adhésion pour les contrats santé et prévoyance',
        },
      },
      {
        label: {
          ar: 'إيداع ملف استرداد صحي أو تعويض مالي',
          fr: 'Dossier de remboursement médical ou sinistre',
        },
        value: {
          ar: 'الوصفات والفواتير الطبية الأصلية، ورقة العلاج المختومة، ونسخة من بطاقة المنخرط أو رقم العقد مع كشف RIB/RIP',
          fr: 'Factures et ordonnances originales, feuille de soins acquittée, carte d’adhérent et RIB/RIP bancaire ou postal',
        },
      },
      {
        label: {
          ar: 'التوجيه بين خدمات CAARAMA والشركة الأم CAAR',
          fr: 'Orientation entre CAARAMA et le groupe CAAR',
        },
        value: {
          ar: 'لعقود السيارات أو السكن CAT-NAT التوجه إلى بوابة caar.dz، ولعقود الصحة والأشخاص التوجه إلى caarama.dz',
          fr: 'Pour l’automobile et l’habitation CAT-NAT consulter caar.dz ; pour les assurances de personnes consulter caarama.dz',
        },
      },
      {
        label: {
          ar: 'عنوان المقر الرئيسي وخط الاتصال المعتمد',
          fr: 'Siège social & contact téléphonique',
        },
        value: {
          ar: 'دالي إبراهيم، الجزائر العاصمة — الهاتف الرسمي: 023 30 95 00 — البوابة الرسمية: caarama.dz',
          fr: 'Daly Ibrahim, Alger — Téléphone officiel : 023 30 95 00 — Site officiel : caarama.dz',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما الفرق بين شركة CAARAMA وشركة CAAR في مجال التأمين؟',
          fr: 'Quelle est la différence entre CAARAMA et CAAR ?',
        },
        answer: {
          ar: 'CAARAMA هي الفرع التابع لمجمع CAAR والمتخصص في تأمينات الأشخاص (الصحة، الحماية، الوفاة، القروض، والسفر)، في حين تغطي الشركة الأم CAAR تأمينات الأضرار مثل السيارات والسكن والكوارث الطبيعية والصناعة.',
          fr: 'CAARAMA est la filiale du groupe CAAR dédiée aux assurances de personnes (santé, prévoyance, emprunteur, voyage), tandis que la CAAR couvre les dommages (auto, habitation, CAT-NAT, industrie).',
        },
      },
      {
        question: {
          ar: 'لماذا ينصح بالدخول دائما عبر النطاق الرسمي caarama.dz؟',
          fr: 'Pourquoi privilégier systématiquement le domaine officiel caarama.dz ?',
        },
        answer: {
          ar: 'نظرا لتحديث بعض الروابط الفرعية لبوابات التأمين دوريا، يضمن الدخول من الصفحة الرسمية caarama.dz أو الاتصال بالهاتف 023 30 95 00 الوصول الآمن والصحيح إلى الخدمات دون روابط مؤقتة.',
          fr: 'Les liens internes des services pouvant être actualisés, l’accès direct via caarama.dz ou par téléphone au 023 30 95 00 garantit de consulter les pages officielles à jour.',
        },
      },
      {
        question: {
          ar: 'هل توفر شركة كرامة للتأمينات عقودا جماعية للمؤسسات والشركات؟',
          fr: 'CAARAMA propose-t-elle des assurances collectives pour les entreprises ?',
        },
        answer: {
          ar: 'نعم، تقدم CAARAMA حلول التأمين الصحي التكميلي والتأمين على الحياة والحوادث الجماعية لفائدة عمال وموظفي المؤسسات والشركات العمومية والخاصة.',
          fr: 'Oui, CAARAMA propose des contrats groupe santé complémentaire et prévoyance décès/incapacité pour les salariés des entreprises publiques et privées.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع المقر الرئيسي لشركة كرامة للتأمينات للاستفسار عن ملف؟',
          fr: 'Comment contacter le siège de CAARAMA Assurance ?',
        },
        answer: {
          ar: 'يمكنك الاتصال على الرقم 023 30 95 00 أو مراجعة قسم التواصل عبر الموقع الرسمي caarama.dz أو زيارة المقر في دالي إبراهيم بالجزائر العاصمة.',
          fr: 'Appelez le 023 30 95 00, consultez la rubrique contact sur caarama.dz ou adressez-vous au siège situé à Daly Ibrahim, Alger.',
        },
      },
    ],
  },

  // 6. caat
  {
    id: 'caat',
    slug: 'caat',
    name: {
      ar: 'الشركة الجزائرية للتأمينات (CAAT)',
      fr: 'Compagnie Algérienne des Assurances (CAAT)',
    },
    acronym: 'CAAT',
    type: 'public',
    description: {
      ar: 'الدليل الشامل للشركة الجزائرية للتأمينات CAAT: منصة E-Pack للاكتتاب الرقمي والدفع الإلكتروني ببطاقة CIB والذهبية (تأمين السكن، الكوارث الطبيعية CAT-NAT، الشركات الناشئة)، طلب عروض الأسعار للسيارات والسفر، فضاء الزبون، فضاء الوسطاء، وأكثر من 200 وكالة عبر 9 مديريات جهوية.',
      fr: 'Guide complet des services numériques de la CAAT : plateforme E-Pack de souscription et paiement en ligne CIB/Edahabia (habitation, CAT-NAT, startups et praticiens de santé), devis auto et voyage, espace client et courtiers, plus de 200 agences et support 021 60 59 11.',
    },
    website: 'https://www.caat.dz/index.php/ar/',
    portalUrl: 'https://epack.caat.dz/',
    headquarters: {
      ar: 'الأبيار، الجزائر العاصمة',
      fr: 'El Biar, Alger',
    },
    products: [
      {
        ar: 'منصة E-Pack CAAT للاكتتاب والدفع الإلكتروني',
        fr: 'Plateforme E-Pack CAAT (Souscription & Paiement CIB/Edahabia)',
        url: 'https://epack.caat.dz/',
        summary: {
          ar: 'اكتتاب فوري عبر الإنترنت لتأمين السكن، الكوارث الطبيعية CAT-NAT، الشركات الناشئة ومهنيي الصحة بالبطاقة الذهبية وCIB.',
          fr: 'Souscription 100 % en ligne avec règlement CIB ou Edahabia pour l’habitation, CAT-NAT, startups et professionnels de santé.',
        },
      },
      {
        ar: 'الموقع الرسمي CAAT وعروض السيارات والممتلكات (caat.dz)',
        fr: 'Site Officiel CAAT — Auto, Habitation & Voyage',
        url: 'https://www.caat.dz/index.php/ar/',
        summary: {
          ar: 'محاكاة أسعار السيارات Tous Risques والسفر لفيزا شنغن، وتصفح فضاء الزبون وفضاء الوسطاء والمؤسسات.',
          fr: 'Devis auto Tous Risques et voyage Schengen, espace assuré, espace intermédiaires et solutions entreprises.',
        },
      },
      {
        ar: 'تأمين الكوارث الطبيعية (CAT-NAT) وتأمين السكن',
        fr: 'Assurance Catastrophes Naturelles (CAT-NAT) & MRH',
        url: 'https://epack.caat.dz/',
        summary: {
          ar: 'استخراج وثيقة التأمين الإلزامي ضد الزلازل والفيضانات والعواصف وتغطية السكن ضد الحريق والسرقة وتلف المياه.',
          fr: 'Émission numérique de l’attestation obligatoire CAT-NAT et couverture habitation contre incendie, vol et dégâts des eaux.',
        },
      },
      {
        ar: 'التصريح بالحادث عبر الإنترنت وتتبع التعويضات',
        fr: 'Déclaration de Sinistre en Ligne & Suivi',
        url: 'https://www.caat.dz/index.php/ar/',
        summary: {
          ar: 'الإشعار بالحادث إلكترونيا وتتبع مسار دراسة ملف التعويضات لدى المصالح المختصة أو عبر فضاء الزبون.',
          fr: 'Pré-déclaration dématérialisée des sinistres et suivi du traitement des dossiers d’indemnisation.',
        },
      },
      {
        ar: 'شبكة الوكالات (+200 وكالة) وخدمة الزبائن 021 60 59 11',
        fr: 'Réseau (+200 Agences / 9 Régions) & Contact 021 60 59 11',
        url: 'https://www.caat.dz/index.php/ar/',
        summary: {
          ar: 'الوصول لأكثر من 200 وكالة و9 مديريات جهوية والتواصل عبر 021 60 59 11 / 021 92 22 02 أو contact@caat.dz.',
          fr: 'Annuaire de plus de 200 agences et 9 directions régionales ; assistance au 021 60 59 11 / 021 92 22 02 ou contact@caat.dz.',
        },
      },
    ],
    emergencyNumber: '021 60 59 11 / 021 92 22 02',
    quickSummary: {
      autoInsurance: {
        ar: 'تأمين السيارات والمركبات النفعية بصيغ المسؤولية المدنية، الحريق والسرقة، كسر الزجاج، والضمان الشامل Tous Risques',
        fr: 'Couvertures auto et véhicules utilitaires : RC obligatoire, vol/incendie, bris de glace et Tous Risques',
      },
      eDeclaration: {
        ar: 'منصة E-Pack CAAT للاكتتاب والدفع عبر بطاقة CIB والذهبية + فضاء الزبون + التصريح الإلكتروني وتتبع الملفات والشكاوى',
        fr: 'Portail E-Pack CAAT pour souscription/paiement CIB & Edahabia, espace assuré et suivi en ligne des sinistres et réclamations',
      },
      takafulOptions: {
        ar: 'باقات رقمية للشركات الناشئة Startups وممارسي قطاع الصحة، تأمين السكن وCAT-NAT، السفر وشنغن، والنقل والصناعة',
        fr: 'Formules dédiées startups et praticiens de santé sur E-Pack, multirisque habitation CAT-NAT, voyage Schengen et transport',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الاكتتاب عبر منصة E-Pack CAAT',
          fr: 'Souscription en ligne sur E-Pack CAAT',
        },
        value: {
          ar: 'إنشاء حساب على epack.caat.dz، إدخال بيانات العقار أو النشاط (CAT-NAT / سكن / شركة ناشئة)، والدفع ببطاقة CIB أو الذهبية',
          fr: 'Création de compte sur epack.caat.dz, saisie des données du bien ou de la startup, et règlement par carte CIB ou Edahabia',
        },
      },
      {
        label: {
          ar: 'ملف تأمين السيارات أو المركبات النفعية',
          fr: 'Contrat assurance automobile ou utilitaire',
        },
        value: {
          ar: 'البطاقة الرمادية، رخصة السياقة، وبطاقة التعريف الوطنية، مع إمكانية محاكاة التسعيرة عبر البوابة الرسمية قبل التوجه للوكالة',
          fr: 'Carte grise, permis de conduire et pièce d’identité, avec simulation indicative sur le portail caat.dz',
        },
      },
      {
        label: {
          ar: 'التأمين المخصص للشركات الناشئة ومهنيي الصحة',
          fr: 'Offres dédiées Startups & Praticiens de santé',
        },
        value: {
          ar: 'علامة شركة ناشئة أو الاعتماد المهني الصحي لحماية التجهيزات والمكاتب والمسؤولية المهنية رقميا عبر منصة E-Pack',
          fr: 'Label startup ou agrément médical pour couvrir locaux, équipements et responsabilité professionnelle via E-Pack',
        },
      },
      {
        label: {
          ar: 'الاتصال، الشكاوى، والشبكة الجهوية',
          fr: 'Contact client, réclamations & réseau régional',
        },
        value: {
          ar: 'الهاتف 021 60 59 11 أو 021 92 22 02 — البريد الإلكتروني contact@caat.dz — أكثر من 200 وكالة و9 مديريات جهوية',
          fr: 'Tél : 021 60 59 11 / 021 92 22 02 — E-mail : contact@caat.dz — Plus de 200 agences et 9 directions régionales',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما العقود التي يمكن شراؤها والدفع لها أونلاين عبر منصة E-Pack CAAT؟',
          fr: 'Quels contrats peut-on souscrire et payer en ligne sur E-Pack CAAT ?',
        },
        answer: {
          ar: 'تتيح منصة epack.caat.dz الاكتتاب والدفع الإلكتروني بالبطاقة الذهبية وCIB لعقود التأمين ضد الكوارث الطبيعية CAT-NAT، تأمين المسكن، وتأمين المؤسسات الناشئة وممارسي الصحة.',
          fr: 'La plateforme epack.caat.dz permet de souscrire et régler par carte CIB ou Edahabia les assurances CAT-NAT, multirisque habitation, startups et praticiens de santé.',
        },
      },
      {
        question: {
          ar: 'كم عدد وكالات الشركة الجزائرية للتأمينات CAAT في الجزائر؟',
          fr: 'Quelle est l’étendue du réseau d’agences CAAT en Algérie ?',
        },
        answer: {
          ar: 'تعتمد CAAT على شبكة وطنية تضم أكثر من 200 وكالة تجارية تشرف عليها 9 مديريات جهوية موزعة عبر ولايات الوطن.',
          fr: 'La CAAT dispose d’un réseau de plus de 200 agences encadrées par 9 directions régionales à travers tout le territoire.',
        },
      },
      {
        question: {
          ar: 'هل تتيح CAAT فضاء رقميا منفصلا للزبائن وآخر للوسطاء والمؤسسات؟',
          fr: 'Existe-t-il un espace client et un espace courtiers/entreprises chez CAAT ?',
        },
        answer: {
          ar: 'نعم، يتوفر فضاء للمؤمن لهم للاطلاع على العقود السارية وتنزيل الوثائق وتتبع الحساب، ومنصة خاصة للوسطاء المعتمدين والمؤسسات لتسيير العقود الجماعية.',
          fr: 'Oui, un espace assuré permet de consulter les polices actives et quittances, tandis qu’un portail dédié accompagne les intermédiaires et entreprises pour les contrats collectifs.',
        },
      },
      {
        question: {
          ar: 'كيف أتواصل مع خلية الإصغاء أو أقدم شكوى لشركة CAAT؟',
          fr: 'Comment contacter le support ou déposer une réclamation auprès de la CAAT ?',
        },
        answer: {
          ar: 'يمكنك الاتصال على الأرقام 021 60 59 11 أو 021 92 22 02، أو المراسلة عبر البريد الرسمي contact@caat.dz، أو استخدام استمارة الشكاوى على الموقع الرسمي caat.dz.',
          fr: 'Appelez le 021 60 59 11 ou le 021 92 22 02, écrivez à contact@caat.dz ou soumettez votre requête sur le formulaire officiel de caat.dz.',
        },
      },
    ],
  },

  // 7. cardif-algerie
  {
    id: 'cardif-algerie',
    slug: 'cardif-algerie',
    name: {
      ar: 'كارديف الجزائر للتأمينات (Cardif El Djazaïr)',
      fr: 'Cardif El Djazaïr (BNP Paribas Cardif)',
    },
    acronym: 'CARDIF',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لشركة كارديف للتأمينات الجزائر (فرع التأمين لمجموعة BNP Paribas): تأمين المقترض والقروض العقارية والاستهلاكية، التأمين على الحياة والحماية Prévoyance، تأمين السفر الدولي وشنغن والحج والعمرة، التأمين الصحي والاستشفاء، وشبكة التأمين البنكي مع CNEP-Banque وBNP Paribas El Djazaïr.',
      fr: 'Guide complet de Cardif El Djazaïr (filiale de BNP Paribas Cardif) : assurance emprunteur (crédits immobiliers, consommation et auto), assurance prévoyance et vie, assurance voyage Schengen/Turquie/Tunisie/Omra, assurance santé et réseau de bancassurance avec CNEP-Banque et BNP Paribas El Djazaïr.',
    },
    website: 'https://cardifeldjazair.dz/',
    portalUrl: 'https://cardifeldjazair.dz/particuliers/assurance-emprunteur',
    headquarters: {
      ar: 'المحمدية، الجزائر العاصمة',
      fr: 'Mohammadia, Alger',
    },
    products: [
      {
        ar: 'تأمين المقترض والقروض العقارية والاستهلاكية',
        fr: 'Assurance Emprunteur (Crédits Habitat, Conso & Auto)',
        url: 'https://cardifeldjazair.dz/particuliers/assurance-emprunteur',
        summary: {
          ar: 'حماية القروض العقارية والاستهلاكية وقروض السيارات بالشراكة مع CNEP-Banque وBNP Paribas لحماية العائلة وتسديد الأقساط.',
          fr: 'Couverture décès/invalidité des prêts immobiliers, consommation et auto distribuée avec CNEP-Banque et BNP Paribas.',
        },
      },
      {
        ar: 'تأمين الحماية والتأمين على الحياة (Assurance Prévoyance)',
        fr: 'Assurance Prévoyance & Protection Familiale',
        url: 'https://cardifeldjazair.dz/particuliers/assurance-prevoyance',
        summary: {
          ar: 'تأمين المستقبل المالي للعائلة والمستفيدين في حالات الوفاة أو العجز التام والمطلق IAD.',
          fr: 'Garantie d’un capital ou d’une protection financière aux proches en cas de décès ou d’invalidité absolue et définitive (IAD).',
        },
      },
      {
        ar: 'تأمين السفر والمساعدة الدولية (شنغن، تركيا، تونس، العمرة)',
        fr: 'Assurance Voyage & Assistance Internationale',
        url: 'https://cardifeldjazair.dz/particuliers/assurance-voyage',
        summary: {
          ar: 'صيغ متعددة للمسافرين تشمل تونس، شنغن والعالم، تركيا، والحج والعمرة مطابقة لمتطلبات التأشيرات.',
          fr: 'Formules adaptées aux séjours en Tunisie, espace Schengen, Turquie, Omra/Hadj et reste du monde.',
        },
      },
      {
        ar: 'تأمين الصحة والاستشفاء والبصريات والأسنان',
        fr: 'Assurance Santé, Hospitalisation, Optique & Dentaire',
        url: 'https://cardifeldjazair.dz/particuliers/assurance-sante',
        summary: {
          ar: 'تغطية النفقات العلاجية والاستشفاء والفحوصات الطبية والبصريات وطب الأسنان للمؤمن له وعائلته.',
          fr: 'Remboursement des soins médicaux, hospitalisations, examens, optique et soins dentaires pour l’assuré et sa famille.',
        },
      },
      {
        ar: 'الحماية والصحة الجماعية للمؤسسات والشركات',
        fr: 'Prévoyance & Santé Collective Entreprises',
        url: 'https://cardifeldjazair.dz/entreprises/',
        summary: {
          ar: 'باقات جماعية لحماية الأجراء والموظفين وتوفير التغطية الصحية التكميلية والتقاعد والحماية.',
          fr: 'Contrats collectifs sur mesure pour couvrir les salariés en santé complémentaire, prévoyance et retraite.',
        },
      },
      {
        ar: 'شبكة التأمين المصرفي (CNEP-Banque & BNP Paribas)',
        fr: 'Réseau Bancassurance & Partenaires Financiers',
        url: 'https://cardifeldjazair.dz/partenaires/',
        summary: {
          ar: 'دليل فروع البنوك الشريكة ونقاط التوزيع المعتمدة للاكتتاب المباشر في حلول كارديف بالجزائر.',
          fr: 'Localisation des agences bancaires partenaires (CNEP-Banque, BNP Paribas El Djazaïr) et distributeurs agréés.',
        },
      },
      {
        ar: 'مركز الاتصال وخدمة الزبائن (contact.cardifdz@cardif.com)',
        fr: 'Contact Client & Support (+213 21 99 58 07)',
        url: 'https://cardifeldjazair.dz/contact/',
        summary: {
          ar: 'التواصل المباشر مع مستشاري كارديف عبر 021 99 58 07 أو البريد contact.cardifdz@cardif.com.',
          fr: 'Joindre les équipes Cardif El Djazaïr au +213 21 99 58 07 ou via contact.cardifdz@cardif.com.',
        },
      },
      {
        ar: 'الموقع الرسمي ودليل الحوادث والأسئلة الشائعة',
        fr: 'Portail Principal, Procédures Sinistres & FAQ',
        url: 'https://cardifeldjazair.dz/',
        summary: {
          ar: 'دليل الوثائق اللازمة للتصريح بحوادث القروض والسفر والصحة والإجابات القانونية حول الضمانات.',
          fr: 'Informations complètes sur les pièces de déclaration de sinistre (emprunteur, voyage, santé) et FAQ assurés.',
        },
      },
    ],
    emergencyNumber: '021 99 58 07',
    quickSummary: {
      autoInsurance: {
        ar: 'شركة متخصصة في تأمينات الأشخاص والقروض والحماية والصحة والسفر (ولا تسوق تأمين السيارات أو العقار ضد الأضرار)',
        fr: 'Assureur spécialisé en personnes, assurance emprunteur, prévoyance, santé et voyage (ne commercialise pas de RC Auto)',
      },
      eDeclaration: {
        ar: 'مسارات رقمية عبر cardifeldjazair.dz لمتابعة ملفات تعويض القروض والسفر والصحة + فضاء خاص للشركاء والوسطاء',
        fr: 'Procédures guidées sur cardifeldjazair.dz pour les sinistres emprunteur/santé/voyage et portail dédié aux partenaires bancaires',
      },
      takafulOptions: {
        ar: 'تأمين المقترض بالتعاون مع CNEP-Banque وBNP Paribas، تأمين الحياة IAD، التأمين الصحي، وسفر شنغن والعمرة',
        fr: 'Bancassurance avec CNEP-Banque et BNP Paribas, prévoyance décès/IAD, santé et formules voyage Schengen/Omra',
      },
    },
    requirements: [
      {
        label: {
          ar: 'الاكتتاب في تأمين المقترض للقروض البنكية',
          fr: 'Dossier assurance emprunteur (bancassurance)',
        },
        value: {
          ar: 'طلب القرض من البنك الشريك (CNEP-Banque أو BNP Paribas)، بطاقة التعريف البيومترية، واستمارة التصريح الصحي المبسطة',
          fr: 'Offre de crédit de la banque partenaire (CNEP-Banque ou BNP Paribas), pièce d’identité et questionnaire de santé simplifié',
        },
      },
      {
        label: {
          ar: 'الاكتتاب في تأمين السفر الدولي أو العمرة',
          fr: 'Souscription assurance voyage Schengen / Omra',
        },
        value: {
          ar: 'جواز سفر ساري المفعول، تحديد الوجهة (تونس، شنغن، تركيا، البقاع المقدسة، أو العالم) وتواريخ الرحلة بدقة',
          fr: 'Passeport biométrique en cours de validité, zone géographique choisie et dates exactes de départ et de retour',
        },
      },
      {
        label: {
          ar: 'التصريح بحادث قرض أو استرداد نفقات صحية',
          fr: 'Déclaration de sinistre emprunteur ou santé',
        },
        value: {
          ar: 'شهادة العجز أو الملف الطبي الكامل، عقد القرض أو بطاقة التأمين، وكشف RIB لتحويل مبلغ التعويض أو تسوية القسط',
          fr: 'Justificatifs médicaux complets ou certificat IAD, référence du contrat/prêt et RIB pour le règlement de l’indemnité',
        },
      },
      {
        label: {
          ar: 'التواصل المباشر مع خدمة زبائن كارديف الجزائر',
          fr: 'Support client & contacts Cardif El Djazaïr',
        },
        value: {
          ar: 'الهاتف +213 21 99 58 07 — البريد contact.cardifdz@cardif.com — المقر المحمدية، الجزائر العاصمة',
          fr: 'Tél : +213 21 99 58 07 — E-mail : contact.cardifdz@cardif.com — Siège Mohammadia, Alger',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'أين أكتتب في تأمين المقترض التابع لشركة كارديف الجزائر؟',
          fr: 'Où souscrire à l’assurance emprunteur de Cardif El Djazaïr ?',
        },
        answer: {
          ar: 'يتم الاكتتاب مباشرة أثناء معالجة طلب القرض العقاري أو الاستهلاكي أو قرض السيارة لدى وكالات البنوك الشريكة، وفي مقدمتها بنك CNEP-Banque وبنك BNP Paribas El Djazaïr.',
          fr: 'La souscription s’effectue directement lors du montage de votre crédit auprès des agences bancaires partenaires, notamment CNEP-Banque et BNP Paribas El Djazaïr.',
        },
      },
      {
        question: {
          ar: 'ما هي وجهات السفر التي يغطيها تأمين السفر من كارديف؟',
          fr: 'Quelles destinations couvre l’assurance voyage Cardif El Djazaïr ?',
        },
        answer: {
          ar: 'توفر الشركة باقات مخصصة لتونس، دول فضاء شنغن والعالم، تركيا، إضافة إلى تغطية خاصة برحلات الحج والعمرة تشمل المساعدة الطبية والإجلاء الصحي.',
          fr: 'Les formules couvrent la Tunisie, l’espace Schengen et le monde entier, la Turquie ainsi que les séjours Omra et Hadj avec assistance médicale et rapatriement.',
        },
      },
      {
        question: {
          ar: 'هل تغطي صيغة التأمين الصحي لكارديف علاج الأسنان والبصريات؟',
          fr: 'L’assurance santé Cardif inclut-elle les frais dentaires et d’optique ?',
        },
        answer: {
          ar: 'نعم، تغطي باقة cardifeldjazair.dz/particuliers/assurance-sante النفقات العلاجية والاستشفاء والفحوصات الطبية بالإضافة إلى البصريات وطب الأسنان حسب سقف الباقة المختارة.',
          fr: 'Oui, selon la formule choisie, le contrat rembourse les consultations, hospitalisations, analyses médicales ainsi que les soins dentaires et d’optique.',
        },
      },
      {
        question: {
          ar: 'ما هي قنوات التواصل مع مصلحة الحوادث والزبائن في كارديف؟',
          fr: 'Comment joindre le service client et sinistres de Cardif El Djazaïr ?',
        },
        answer: {
          ar: 'يمكنك الاتصال على الرقم +213 21 99 58 07 أو إرسال ملفك واستفسارك عبر البريد الإلكتروني الرسمي contact.cardifdz@cardif.com أو صفحة cardifeldjazair.dz/contact.',
          fr: 'Appelez le +213 21 99 58 07 ou écrivez à contact.cardifdz@cardif.com / via la page cardifeldjazair.dz/contact.',
        },
      },
    ],
  },

  // 8. gig
  {
    id: 'gig',
    slug: 'gig',
    name: {
      ar: 'مجموعة الخليج للتأمين الجزائر (GIG Algeria)',
      fr: 'Gulf Insurance Group Algérie (GIG)',
    },
    acronym: 'GIG',
    type: 'private',
    description: {
      ar: 'الدليل الشامل لمجموعة الخليج للتأمين الجزائر GIG Algeria: طلب عروض الأسعار أونلاين، تأمين السيارات والدراجات النارية مع المساعدة 24/7، تأمين السكن والكوارث الطبيعية CAT-NAT، تأمين السفر وشنغن، تأمين قوارب النزهة، تأمين المصانع والفلاحة والنقل، وشبكة تتجاوز 210 وكالة عبر الوطن.',
      fr: 'Guide complet de Gulf Insurance Group Algérie (GIG) : devis instantané en ligne, assurance auto et moto avec assistance 24/7, habitation et CAT-NAT, voyage Schengen, plaisance et yachts, multirisque industrielle/agricole/transport et réseau de plus de 210 agences.',
    },
    website: 'https://gig.dz/ar/',
    portalUrl: 'https://gig.dz/ar/devis',
    headquarters: {
      ar: 'المحمدية، الجزائر العاصمة',
      fr: 'Mohammadia, Alger',
    },
    products: [
      {
        ar: 'طلب عرض سعر فوري أونلاين (GIG Devis)',
        fr: 'Demande de Devis Instantané en Ligne',
        url: 'https://gig.dz/ar/devis',
        summary: {
          ar: 'حساب وتسعير تأمين السيارة أو المسكن أو السفر أونلاين في خطوات بسيطة عبر الموقع الرسمي.',
          fr: 'Calcul et demande de devis en quelques clics pour votre assurance auto, habitation ou voyage.',
        },
      },
      {
        ar: 'تأمينات الأفراد: السيارات، الدراجات، السكن، السفر والقوارب',
        fr: 'Offres Particuliers : Auto/Moto, Habitation, Voyage & Plaisance',
        url: 'https://gig.dz/ar/particuliers/',
        summary: {
          ar: 'حماية المركبات مع المساعدة 24/7، السكن وCAT-NAT، السفر لفيزا شنغن، وتأمين قوارب النزهة واليخوت.',
          fr: 'Couvertures auto/moto avec dépannage 24h/24, multirisque habitation CAT-NAT, voyage Schengen et navigation de plaisance.',
        },
      },
      {
        ar: 'تأمينات المؤسسات والمهنيين والمصانع والفلاحة',
        fr: 'Solutions Entreprises, Industrie, Agriculture & Transport',
        url: 'https://gig.dz/ar/entreprises/',
        summary: {
          ar: 'تأمين المصانع والورشات والأخطار الصناعية، التأمين الفلاحي، ونقل البضائع البري والبحري.',
          fr: 'Protection des usines et risques industriels, assurances agricoles et couverture du fret terrestre et maritime.',
        },
      },
      {
        ar: 'دليل الوكالات وشبكة الفروع (+210 وكالة)',
        fr: 'Localisateur des +210 Agences GIG Algérie',
        url: 'https://gig.dz/ar/agences/',
        summary: {
          ar: 'خريطة ودليل تفاعلي للعثور على أقرب وكالة معتمدة من بين أكثر من 210 وكالة عبر مختلف الولايات.',
          fr: 'Annuaire géolocalisé pour trouver l’agence agréée GIG la plus proche parmi plus de 210 points de vente.',
        },
      },
      {
        ar: 'مركز الاتصال وخدمة الزبائن (contact@gig.dz)',
        fr: 'Service Client, Sinistres & Contact (023 77 21 12)',
        url: 'https://gig.dz/ar/contact/',
        summary: {
          ar: 'التواصل المباشر عبر 023 77 21 12 / 0770 25 00 00 أو البريد contact@gig.dz لمتابعة العقود والحوادث.',
          fr: 'Assistance directe au 023 77 21 12 / 0770 25 00 00 ou par courriel à contact@gig.dz.',
        },
      },
      {
        ar: 'الموقع الرسمي لمجموعة الخليج للتأمين (gig.dz/ar)',
        fr: 'Portail Principal & Guide FAQ GIG Algérie',
        url: 'https://gig.dz/ar/',
        summary: {
          ar: 'إرشادات الوثائق المطلوبة للتصريح بحوادث السيارات والسكن وتوضيحات احتساب التعويضات والضمانات.',
          fr: 'Portail principal présentant les démarches de déclaration de sinistres, garanties et foire aux questions.',
        },
      },
    ],
    emergencyNumber: '023 77 21 12 / 0770 25 00 00',
    quickSummary: {
      autoInsurance: {
        ar: 'تأمين السيارات والدراجات النارية ضد المسؤولية المدنية والحوادث والحريق والسرقة مع خدمة المساعدة على الطريق 24/7',
        fr: 'Assurance Auto & Moto (RC, Tous Risques, vol, incendie) avec service d’assistance routière 24h/24 et 7j/7',
      },
      eDeclaration: {
        ar: 'طلب عروض الأسعار أونلاين عبر gig.dz/ar/devis + متابعة الحوادث والتعويضات عبر الوكالات (+210 وكالة) والخط 0770 25 00 00',
        fr: 'Devis en ligne immédiat sur gig.dz/ar/devis et suivi des sinistres via les +210 agences ou la ligne 0770 25 00 00',
      },
      takafulOptions: {
        ar: 'باقات شاملة للأفراد (السكن، CAT-NAT، السفر لشنغن، قوارب النزهة) والمؤسسات (الأخطار الصناعية، الفلاحة، نقل البضائع)',
        fr: 'Gamme étendue particuliers (habitation CAT-NAT, voyage Schengen, plaisance) et pros (industrie, agriculture, transport)',
      },
    },
    requirements: [
      {
        label: {
          ar: 'وثائق تأمين السيارات أو الدراجات النارية',
          fr: 'Souscription assurance Auto ou Moto',
        },
        value: {
          ar: 'البطاقة الرمادية للمركبة أو الدراجة، رخصة السياقة السارية، وبطاقة التعريف الوطنية أو طلب عرض السعر عبر gig.dz/ar/devis',
          fr: 'Carte grise du véhicule/moto, permis de conduire valide et CNIBE après simulation éventuelle sur gig.dz/ar/devis',
        },
      },
      {
        label: {
          ar: 'وثائق تأمين قوارب النزهة أو السكن وCAT-NAT',
          fr: 'Assurance plaisance, habitation ou CAT-NAT',
        },
        value: {
          ar: 'عقد الملكية أو الإيجار للمسكن (لـ CAT-NAT وMRH)، أو دفتر الملاحة وشهادة تسجيل القارب لتأمين اليخوت وقوارب النزهة',
          fr: 'Titre de propriété/bail pour le logement, ou livret de circulation et certificat d’immatriculation pour bateaux de plaisance',
        },
      },
      {
        label: {
          ar: 'ملف التصريح بحادث سيارة أو أضرار منزلية',
          fr: 'Dossier de sinistre automobile ou habitation',
        },
        value: {
          ar: 'وثيقة المعاينة الودية أو محضر الأمن/الدرك، رقم البوليصة، وصور الأضرار لتقديمها للوكالة أو الخبير خلال الأجل القانوني',
          fr: 'Constat amiable ou PV officiel, numéro de police et justificatifs de dommages déposés en agence dans le délai légal',
        },
      },
      {
        label: {
          ar: 'الاتصال المباشر وشبكة الفروع الوطنية',
          fr: 'Service client & réseau national GIG',
        },
        value: {
          ar: 'الهاتف 023 77 21 12 أو 0770 25 00 00 — البريد contact@gig.dz — أكثر من 210 وكالة عبر gig.dz/ar/agences',
          fr: 'Tél : 023 77 21 12 / 0770 25 00 00 — E-mail : contact@gig.dz — Réseau de +210 agences sur gig.dz/ar/agences',
        },
      },
    ],
    faqs: [
      {
        question: {
          ar: 'كيف أحصل على تسعيرة أونلاين من مجموعة الخليج للتأمين GIG Algeria؟',
          fr: 'Comment obtenir un devis en ligne auprès de GIG Algérie ?',
        },
        answer: {
          ar: 'توجه إلى صفحة gig.dz/ar/devis، اختر نوع التأمين (سيارة، مسكن، أو سفر)، وأدخل البيانات الأساسية للمركبة أو العقار أو الرحلة ليتم حساب العرض وتوجيهك إلى أقرب وكالة لإتمام العقد.',
          fr: 'Accédez à gig.dz/ar/devis, sélectionnez le contrat souhaité (auto, habitation ou voyage) et renseignez les informations de base pour recevoir votre tarification.',
        },
      },
      {
        question: {
          ar: 'هل تغطي شركة GIG Algeria الدراجات النارية وقوارب النزهة؟',
          fr: 'GIG Algérie assure-t-elle les motos et les bateaux de plaisance ?',
        },
        answer: {
          ar: 'نعم، إلى جانب السيارات والسكن والسفر، توفر GIG باقات متخصصة لتأمين الدراجات النارية وتأمين قوارب النزهة واليخوت ضد الأخطار البحرية والإنقاذ والمسؤولية المدنية.',
          fr: 'Oui, en plus de l’auto, l’habitation et le voyage, GIG propose des contrats dédiés aux motos ainsi qu’aux bateaux de plaisance et yachts (risques maritimes et sauvetage).',
        },
      },
      {
        question: {
          ar: 'ما هي تغطيات المؤسسات المتاحة في مجموعة الخليج للتأمين؟',
          fr: 'Quelles garanties propose GIG Algérie aux entreprises ?',
        },
        answer: {
          ar: 'توفر الشركة حلولا صناعية وتجارية تشمل تأمين المصانع والورشات والأخطار الصناعية، التأمين الفلاحي للمحاصيل والمزارع، وتأمين نقل البضائع البري والبحري عبر gig.dz/ar/entreprises.',
          fr: 'La gamme corporate couvre les usines, ateliers et risques industriels, le secteur agricole ainsi que le transport terrestre et maritime de marchandises.',
        },
      },
      {
        question: {
          ar: 'ما هي أرقام الاتصال وعدد وكالات GIG Algeria؟',
          fr: 'Comment contacter GIG Algérie et combien d’agences compte le réseau ?',
        },
        answer: {
          ar: 'تمتلك الشركة أكثر من 210 وكالة معتمدة عبر مختلف الولايات (gig.dz/ar/agences)، ويمكن الاتصال بها عبر الرقم 023 77 21 12 أو 0770 25 00 00 أو البريد contact@gig.dz.',
          fr: 'GIG dispose de plus de 210 agences (gig.dz/ar/agences) et répond au 023 77 21 12, au 0770 25 00 00 et à l’adresse contact@gig.dz.',
        },
      },
    ],
  },
];

export const batch1InsuranceGuides: Record<string, Partial<RichGuideContent>> = {
  'alliance-assurances': {
    intro: {
      ar: [
        'تعد شركة أليانس للتأمينات (Alliance Assurances) من أبرز شركات التأمين الخاصة المعتمدة في السوق الجزائرية، وتوفر تغطيات متكاملة للأفراد والمهنيين والمؤسسات في مجالات تأمين السيارات، المسكن والكوارث الطبيعية CAT-NAT، التأمين الصحي والسفر الدولي وشنغن.',
        'على الصعيد الرقمي، أطلقت الشركة تطبيق الهاتف المحمول MyAlliance الذي يمكن المؤمن لهم من متابعة عقودهم السارية، تقديم التصريح الأولي بالحوادث، وتحديد مواقع الوكالات التجارية القريبة، إلى جانب إمكانية طلب عرض سعر أولي مباشرة من البوابة الرسمية allianceassurances.com.dz.',
        'كما تميزت أليانس للتأمينات بإطلاق خدمة الدفع المجزأ لتأمينات السيارات (Buy Now-Pay Later) بالتعاون مع مؤسسة بريد الجزائر، مما يتيح للمؤمن لهم تسديد تكلفة التأمين عبر دفعات مريحة مع دعم هاتفي عبر الرقم القصير 3315.'
      ],
      fr: [
        'Acteur majeur du marché privé de l’assurance en Algérie, Alliance Assurances propose une large gamme de couvertures pour les particuliers et les entreprises : assurance automobile, multirisque habitation et CAT-NAT, voyage Schengen et protection des risques professionnels.',
        'Sa démarche de digitalisation repose sur l’application mobile MyAlliance, permettant de consulter ses contrats, d’initier une déclaration de sinistre et de localiser les agences de proximité, ainsi que sur la demande de devis en ligne via allianceassurances.com.dz.',
        'La compagnie se distingue également par son offre innovante de paiement fractionné pour l’assurance automobile (Buy Now-Pay Later) en partenariat avec Algérie Poste, soutenue par le centre de relation client joignable au 3315.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'التحقق من أهلية الاستفادة من خدمة الدفع المجزأ لتأمين السيارات',
          fr: 'Vérifier l’éligibilité au paiement fractionné (Buy Now-Pay Later)',
        },
        solution: {
          ar: 'تواصل مع أقرب وكالة أليانس أو الرقم القصير 3315 مع بطاقة التعريف والبطاقة الرمادية وحساب CCP للتأكد من شروط التقسيط المعتمدة مع بريد الجزائر.',
          fr: 'Contactez votre agence Alliance ou le 3315 avec votre carte grise, CNIBE et coordonnées CCP/Edahabia pour vérifier les conditions d’échelonnement.',
        },
      },
      {
        issue: {
          ar: 'صعوبة ربط عقد التأمين داخل تطبيق MyAlliance',
          fr: 'Contrat non affiché dans l’application MyAlliance',
        },
        solution: {
          ar: 'تأكد من تطابق رقم الهاتف المسجل في العقد مع حساب التطبيق وقم بتحديث التطبيق عبر Google Play أو التواصل مع الدعم على 3315.',
          fr: 'Assurez-vous que le numéro mobile utilisé correspond à celui figurant sur la police d’assurance et mettez à jour l’application ou appelez le 3315.',
        },
      },
      {
        issue: {
          ar: 'التصريح بحادث مرور في عطلة نهاية الأسبوع أو خارج ساعات العمل',
          fr: 'Déclarer un sinistre auto en dehors des horaires d’agence',
        },
        solution: {
          ar: 'املأ المعاينة الودية في مكان الحادث واستعمل تطبيق MyAlliance لإرسال التصريح الأولي مع الصور، ثم راجع الوكالة لإتمام الملف خلال مهلة 7 أيام.',
          fr: 'Établissez le constat amiable sur place, initiez la pré-déclaration via MyAlliance et déposez les originaux en agence dans le délai légal de 7 jours.',
        },
      },
    ],
    extraFaqs: [],
  },

  amana: {
    intro: {
      ar: [
        'تتخصص شركة أمانة للتأمينات (Amana Assurances) بوصفها شركة عمومية معتمدة في تأمينات الأشخاص والحماية الاجتماعية التكميلية، وتوفر تغطيات شاملة للأفراد والعائلات والمؤسسات في مجالات تأمين السفر الدولي، التأمين الصحي التكميلي، تأمين المقترضين، والادخار والتقاعد التكميلي.',
        'حققت الشركة حضورا رقميا قويا عبر إتاحة الاكتتاب والدفع الإلكتروني لتأمين السفر المعتمد لتأشيرة شنغن وتركيا وتونس مباشرة بالبطاقة الذهبية أو بطاقة CIB مع الاستلام الفوري للوثيقة، إضافة إلى بوابة الزبائن espaceclient.amana.dz وتطبيق الهاتف My Amana لإرسال فواتير العلاج وتتبع التعويضات.',
        'كما تدير أمانة شبكة واسعة للدفع من قبل الغير (Tiers-Payant) تضم عيادات ومراكز طبية وصيدليات شريكة، وثلاث باقات صحية مرنة (Essentielle وConfort وPremium)، مدعومة بخدمة الدعم على الرقم 023 05 44 75 والبريد contact@amana.dz.'
      ],
      fr: [
        'Compagnie publique spécialisée exclusivement dans les assurances de personnes, Amana Assurances accompagne les particuliers, familles et entreprises sur les segments du voyage international, de la complémentaire santé, de la prévoyance emprunteur et de l’épargne retraite.',
        'Son dispositif digital complet permet de calculer, souscrire et payer en ligne l’assurance voyage (Schengen, Turquie, Tunisie) par carte Edahabia ou CIB avec téléchargement immédiat de l’attestation, tout en gérant les remboursements santé via espaceclient.amana.dz et l’application My Amana.',
        'Amana s’appuie également sur un vaste réseau conventionné Tiers-Payant (cliniques, centres médicaux et pharmacies) et sur les formules santé Essentielle, Confort et Premium.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'جواز سفر ساري المفعول وتواريخ الرحلة الدقيقة لاكتتاب تأمين السفر وشنغن أونلاين عبر amana.dz/#/voyage.',
        'بطاقة ذهبية أو بطاقة CIB بنكية مفعلة للدفع الإلكتروني واستلام وثيقة تأمين السفر فوريا.',
        'استمارة الانضمام والتصريح الطبي للانتساب في صيغ التأمين التكميلي الصحي (Essentielle / Confort / Premium).',
        'الفواتير والوصفات الطبية المختومة وبطاقة المنخرط لإرسالها عبر تطبيق My Amana أو للاستفادة من شبكة Tiers-Payant.',
        'رقم الحساب البريدي أو البنكي RIB/RIP لتحويل مبالغ الاسترجاع الطبي أو مخصصات الادخار والتقاعد التكميلي.',
      ],
      fr: [
        'Passeport valide et dates précises de séjour pour souscrire en ligne à l’assurance voyage sur amana.dz/#/voyage.',
        'Carte Edahabia ou CIB active avec code e-paiement pour régler la prime voyage et recevoir l’attestation instantanément.',
        'Bulletin d’adhésion et questionnaire médical pour les formules santé Essentielle, Confort ou Premium.',
        'Factures médicales et ordonnances acquittées transmises sur My Amana ou carte d’adhérent pour le réseau Tiers-Payant.',
        'RIB ou RIP valide pour le virement direct des remboursements médicaux ou prestations d’épargne.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. حساب تسعيرة السفر أو التأمين الصحي على amana.dz',
          fr: '1. Simuler votre tarif voyage ou santé sur amana.dz',
        },
        detail: {
          ar: 'اختر خدمة تأمين السفر (amana.dz/#/voyage) أو التأمين الصحي (amana.dz/#/sante) وأدخل الوجهة والمدة أو الفئة المطلوبة لحساب القسط بدقة.',
          fr: 'Rendez-vous sur amana.dz/#/voyage ou amana.dz/#/sante, saisissez votre destination/durée ou votre formule familiale pour obtenir la tarification exacte.',
        },
      },
      {
        title: {
          ar: '2. الاكتتاب والدفع الإلكتروني وتحميل الوثيقة الفورية',
          fr: '2. Payer par Edahabia/CIB et télécharger l’attestation',
        },
        detail: {
          ar: 'بالنسبة لتأمين السفر، سدد القسط مباشرة عبر البطاقة الذهبية أو CIB لتصدر شهادة التأمين الرسمية المعتمدة لملف التأشيرة فورا.',
          fr: 'Réglez votre assurance voyage en toute sécurité par carte Edahabia ou CIB et récupérez immédiatement le document PDF officiel pour votre dossier visa.',
        },
      },
      {
        title: {
          ar: '3. إرسال فواتير العلاج عبر My Amana أو شبكة Tiers-Payant',
          fr: '3. Envoyer les soins via My Amana ou utiliser le Tiers-Payant',
        },
        detail: {
          ar: 'عند الحاجة للتغطية الصحية، راجع صيدلية أو عيادة شريكة من قائمة amana.dz/#/agences أو التقط صور الفواتير وأرسلها عبر تطبيق My Amana.',
          fr: 'Consultez un prestataire du réseau Tiers-Payant (amana.dz/#/agences) ou photographiez vos feuilles de soins directement depuis My Amana.',
        },
      },
      {
        title: {
          ar: '4. متابعة جداول التعويض وتجديد العقود في فضاء الزبون',
          fr: '4. Suivre les remboursements sur espaceclient.amana.dz',
        },
        detail: {
          ar: 'سجل الدخول إلى espaceclient.amana.dz لمراقبة حالة ملفات الاسترداد الطبي، كشوفات الحساب، وتجديد العقود عن بعد.',
          fr: 'Connectez-vous à espaceclient.amana.dz pour vérifier le détail des virements médicaux et gérer vos renouvellements.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'عدم استلام شهادة تأمين السفر PDF بعد الدفع بالبطاقة الذهبية أو CIB',
          fr: 'Attestation voyage PDF non reçue après paiement en ligne',
        },
        solution: {
          ar: 'تحقق من مجلد البريد غير المرغوب فيه أو ادخل إلى espaceclient.amana.dz، وإذا استمر التأخر اتصل بالرقم 023 05 44 75 أو راسل contact@amana.dz برقم المعاملة.',
          fr: 'Vérifiez vos courriers indésirables puis connectez-vous à espaceclient.amana.dz ; en cas de besoin, contactez le 023 05 44 75 ou contact@amana.dz avec le reçu de paiement.',
        },
      },
      {
        issue: {
          ar: 'رفض فاتورة علاج مرسلة عبر تطبيق My Amana بسبب عدم وضوح الصورة',
          fr: 'Rejet d’une facture médicale transmise sur My Amana',
        },
        solution: {
          ar: 'أعد تصوير الوصفة الطبية والفاتورة المفصلة في إضاءة واضحة مع إظهار ختم الطبيب أو الصيدلي والتاريخ الكامل وتقديم الأصل عند الطلب.',
          fr: 'Numérisez de nouveau l’ordonnance et la facture détaillée en haute netteté avec le cachet visible du praticien et conservez l’original.',
        },
      },
      {
        issue: {
          ar: 'التحقق من قبول صيدلية أو عيادة معينة لبطاقة Tiers-Payant أمانة',
          fr: 'Vérifier si une clinique ou pharmacie est conventionnée Tiers-Payant',
        },
        solution: {
          ar: 'راجع القائمة المحينة حسب الولاية والبلدية على amana.dz/#/agences أو عبر خريطة الشركاء داخل تطبيق My Amana قبل التوجه.',
          fr: 'Consultez la liste actualisée par wilaya sur amana.dz/#/agences ou directement via la carte intégrée à My Amana.',
        },
      },
    ],
    extraFaqs: [],
  },

  axa: {
    intro: {
      ar: [
        'تنشط شركة أكسا للتأمينات الجزائر (AXA Assurances Algérie) انطلاقا من مقرها الرئيسي بالمحمدية في الجزائر العاصمة وشبكة وكالاتها المنتشرة وطنيا، مقدمة باقات تأمينية معيارية للأفراد والشركات في تأمين السيارات، المسكن والكوارث الطبيعية CAT-NAT، تأمين السفر وشنغن، والتأمين الصحي الجماعي.',
        'يجمع الحضور الرقمي لشركة AXA بين بوابة طلب عروض الأسعار والمحاكاة الفورية (axa.dz/devis-en-ligne)، وخدمة التصريح المسبق بالحوادث ومتابعة ملفات الخبرة والتعويض عبر الإنترنت (axa.dz/sinistres)، إضافة إلى فضاء الزبون axa.dz/espace-client للاطلاع على العقود والإيصالات.',
        'كما توفر الشركة للمؤمن لهم في التأمين الصحي تطبيق الهاتف الذكي MyAXA DZ لإرسال الفواتير الطبية رقميا ومتابعة الاستردادات، مع مسار مخصص للشكاوى axa.dz/reclamations وخط دعم موحد على الرقم 021 98 00 20.'
      ],
      fr: [
        'Implantée à Mohammadia (Alger) et présente à travers un réseau national d’agences, AXA Assurances Algérie propose aux particuliers, professionnels et grands comptes des solutions en assurance automobile, habitation CAT-NAT, voyage Schengen et santé collective.',
        'Son dispositif digital comprend un module de devis en ligne instantané (axa.dz/devis-en-ligne), un portail de pré-déclaration et suivi de sinistres (axa.dz/sinistres), ainsi qu’un espace client sécurisé (axa.dz/espace-client) centralisant polices et quittances.',
        'Les assurés santé disposent également de l’application MyAXA DZ pour numériser leurs factures médicales, appuyée par une cellule dédiée aux réclamations (axa.dz/reclamations) et une ligne client au 021 98 00 20.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'تأخر تحديث حالة ملف حادث مسجل في خدمة التصريح المسبق',
          fr: 'Statut d’un dossier sinistre figé après pré-déclaration',
        },
        solution: {
          ar: 'تأكد من إرفاق جميع الوثائق المطلوبة للخبرة أو راجع وكالتك، وفي حال التأخر غير المبرر ارفع تذكرة متابعة عبر axa.dz/reclamations.',
          fr: 'Vérifiez que toutes les pièces d’expertise ont été remises en agence et déposez si nécessaire un suivi sur axa.dz/reclamations.',
        },
      },
      {
        issue: {
          ar: 'عدم التمكن من الدخول إلى فضاء الزبون axa.dz/espace-client',
          fr: 'Problème de connexion à l’espace client AXA',
        },
        solution: {
          ar: 'استعمل خيار استعادة كلمة المرور بالبريد الإلكتروني المسجل في العقد أو تواصل مع خدمة الزبائن على 021 98 00 20 لتحديث بياناتك.',
          fr: 'Réinitialisez votre mot de passe avec l’e-mail rattaché à votre police ou contactez le 021 98 00 20 pour mettre à jour votre fiche.',
        },
      },
      {
        issue: {
          ar: 'استفسار حول وثيقة تأمين السفر المطلوبة لسفارة معينة',
          fr: 'Vérifier les garanties voyage requises pour un visa',
        },
        solution: {
          ar: 'راجع تفاصيل باقة axa.dz/particuliers/assurance-voyage التي تتضمن الحد الأدنى الإلزامي لفيزا شنغن والإجلاء الطبي الطارئ.',
          fr: 'Consultez la rubrique axa.dz/particuliers/assurance-voyage confirmant la couverture médicale minimale de 30 000 EUR et le rapatriement.',
        },
      },
    ],
    extraFaqs: [],
  },

  caar: {
    intro: {
      ar: [
        'تعد الشركة الجزائرية للتأمين وإعادة التأمين (CAAR) أعرق شركة تأمين وإعادة تأمين عمومية في الجزائر، وتجمع بين تغطية المشاريع الصناعية الكبرى والطاقة ونقل البضائع وبين باقة متكاملة للأفراد والمهنيين والشركات الناشئة.',
        'حققت الشركة خطوة رقمية متقدمة بإطلاق تطبيق الهاتف الذكي CAAR+ وتفعيل الاكتتاب والدفع الإلكتروني ببطاقة CIB والبطاقة الذهبية عبر الموقع الرسمي caar.dz لعقود تأمين السكن متعدد الأخطار MRH وتأمين الكوارث الطبيعية CAT-NAT، مع إصدار فوري للوثائق بصيغة PDF.',
        'كما توفر CAAR منصة e-Transport للشركات والمتعاملين الاقتصاديين لتصريح وتأمين البضائع المنقولة إلكترونيا، وخدمة النجدة والقطر المباشرة على الطريق عبر الرقم 0982 301 19.'
      ],
      fr: [
        'Doyenne des compagnies publiques d’assurance en Algérie, la Compagnie Algérienne d’Assurance et de Réassurance (CAAR) couvre aussi bien les grands risques industriels et le transport de marchandises que les besoins quotidiens des particuliers, professionnels et startups.',
        'Sa transformation digitale s’appuie sur l’application mobile CAAR+ et sur la souscription avec paiement électronique CIB/Edahabia en ligne (caar.dz) pour les polices Multirisque Habitation (MRH) et Catastrophes Naturelles (CAT-NAT), avec téléchargement PDF immédiat.',
        'La CAAR déploie également la plateforme professionnelle e-Transport pour la télédéclaration des expéditions de fret et un service dédié de dépannage et remorquage au 0982 301 19.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'فشل عملية الدفع ببطاقة CIB أو الذهبية أثناء اكتتاب تأمين المسكن أو CAT-NAT',
          fr: 'Échec du paiement CIB ou Edahabia lors de la souscription MRH/CAT-NAT',
        },
        solution: {
          ar: 'تحقق من تفعيل الدفع الإلكتروني وكلمة المرور OTP على البطاقة ومن عدم تجاوز السقف اليومي، ثم أعد المحاولة من caar.dz أو تطبيق CAAR+.',
          fr: 'Vérifiez l’activation du e-paiement, la réception du code OTP SMS et votre plafond journalier avant de relancer le règlement sur caar.dz ou CAAR+.',
        },
      },
      {
        issue: {
          ar: 'الاحتياج لقطر السيارة بعد حادث مرور مفاجئ',
          fr: 'Demander un remorquage d’urgence après un accident',
        },
        solution: {
          ar: 'اتصل فورا برقم خدمة النجدة والقطر المباشر 0982 301 19 مع تحديد رقم عقد التأمين وموقع السيارة بدقة.',
          fr: 'Appelez immédiatement l’assistance routière au 0982 301 19 en communiquant votre numéro de police et votre localisation précise.',
        },
      },
      {
        issue: {
          ar: 'تسجيل تظلم أو طعن حول تقدير الخسائر بعد الخبرة',
          fr: 'Contester une évaluation d’expertise ou suivre une réclamation',
        },
        solution: {
          ar: 'قدم طلبا رسميا موثقا بالمرجع عبر استمارة caar.dz/contact أو تواصل مع خدمة الزبائن على الرقم 021 63 20 72.',
          fr: 'Soumettez une demande référencée via le formulaire caar.dz/contact ou contactez le service client au 021 63 20 72.',
        },
      },
    ],
    extraFaqs: [],
  },

  caarama: {
    intro: {
      ar: [
        'تعمل شركة كرامة للتأمينات (CAARAMA Assurance)، انطلاقا من مقرها بدالي إبراهيم في الجزائر العاصمة وبانتمائها إلى مجمع الشركة الجزائرية للتأمين وإعادة التأمين CAAR، على تقديم حلول تأمينات الأشخاص والحماية المالية للأفراد والمؤسسات.',
        'تغطي منتجات كرامة مجالات التأمين التكميلي الصحي، التأمين على الحياة والحماية الفردية والجماعية، تأمين المقترضين لحماية القروض، وتأمين السفر الدولي، بينما تتولى الشركة الأم CAAR تأمينات السيارات والمسكن والكوارث الطبيعية.',
        'نظرا لأن بعض الروابط الفرعية لخدمات الاستشارة أو المتابعة تمر عبر تحديثات تقنية في البوابة، ينصح دائما بالدخول حصرا عبر الموقع الرسمي الموثق caarama.dz أو التواصل مباشرة مع المقر الرئيسي عبر الرقم 023 30 95 00 للحصول على التوجيه والروابط المحدثة.'
      ],
      fr: [
        'Filiale du groupe public CAAR implantée à Daly Ibrahim (Alger), CAARAMA Assurance est spécialisée dans les assurances de personnes : complémentaire santé individuelle et collective, prévoyance décès/invalidité, assurance emprunteur et assistance voyage.',
        'Alors que la maison-mère CAAR gère les branches dommages (automobile, habitation CAT-NAT, industrie), CAARAMA se concentre sur la protection des assurés, salariés d’entreprises et bénéficiaires de crédits bancaires.',
        'Certains sous-liens techniques pouvant évoluer lors des mises à jour du portail, il convient d’accéder aux informations et formulaires exclusivement depuis le site officiel vérifié caarama.dz ou par téléphone au 023 30 95 00.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'بطاقة التعريف الوطنية البيومترية أو جواز سفر ساري المفعول عند طلب عقود الحماية أو السفر.',
        'استمارة الانضمام والتصريح الصحي لعقود التأمين الصحي التكميلي وتأمين المقترضين.',
        'ملف المؤسسة (السجل التجاري، قائمة العمال) عند اكتتاب التأمين الصحي الجماعي للشركات.',
        'الفواتير والوصفات الطبية المختومة وكشف RIB/RIP لملفات الاسترداد المالي.',
        'مراجعة النطاق الرسمي caarama.dz أو الرقم 023 30 95 00 للتحقق من روابط الخدمات الفرعية قبل إدخال البيانات.',
      ],
      fr: [
        'CNIBE biométrique ou passeport valide pour toute adhésion santé, prévoyance ou voyage.',
        'Bulletin d’adhésion et questionnaire médical pour les contrats emprunteur et santé individuelle.',
        'Dossier entreprise (registre de commerce et état nominatif du personnel) pour les polices groupe.',
        'Feuilles de soins acquittées, factures originales et RIB/RIP pour les remboursements médicaux.',
        'Vérification préalable des accès de services directement sur le portail officiel caarama.dz ou au 023 30 95 00.',
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم توفر رابط مباشر لطلب عرض السعر أو فضاء الزبون لخدمة معينة',
          fr: 'Lien direct de devis ou d’espace client non disponible',
        },
        solution: {
          ar: 'ادخل من البوابة الرئيسية الرسمية caarama.dz وتحقق من القائمة المحدثة أو اتصل بمصلحة الزبائن على 023 30 95 00 للحصول على الرابط المعتمد.',
          fr: 'Passez systématiquement par le domaine principal caarama.dz ou appelez le 023 30 95 00 pour obtenir le lien actualisé du téléservice.',
        },
      },
      {
        issue: {
          ar: 'الالتباس بين ملف تأمين سيارة وتأمين شخصي لدى مجموعة CAAR',
          fr: 'Confusion entre police automobile CAAR et contrat personnes CAARAMA',
        },
        solution: {
          ar: 'لتأمين السيارات والمركبات والكوارث الطبيعية راجع الشركة الأم CAAR (caar.dz)، أما عقود الصحة والسفر والحماية فمرجعها CAARAMA (caarama.dz).',
          fr: 'Les sinistres auto et habitation relèvent de caar.dz (CAAR), tandis que les remboursements santé et prévoyance relèvent de caarama.dz (CAARAMA).',
        },
      },
      {
        issue: {
          ar: 'تأخر صرف تعويض فاتورة علاجية أو عدم تطابق الحساب',
          fr: 'Retard de remboursement d’un dossier de soins médicaux',
        },
        solution: {
          ar: 'تحقق من تقديم كشف RIB/RIP صحيح ومن إرفاق جميع الفواتير المختومة، ثم راجع وكالتك أو اتصل على 023 30 95 00 برقم ملف الانضمام.',
          fr: 'Vérifiez l’exactitude de votre RIB/RIP et la complétude des justificatifs originaux, puis appelez le 023 30 95 00 avec votre numéro d’adhérent.',
        },
      },
    ],
    extraFaqs: [],
  },

  caat: {
    intro: {
      ar: [
        'تعتبر الشركة الجزائرية للتأمينات (CAAT) من كبريات شركات التأمين الوطنية العمومية في الجزائر، وتمتد شبكتها إلى أكثر من 200 وكالة تجارية تشرف عليها 9 مديريات جهوية لتغطية عقود الأفراد والمهنيين والصناعة والنقل.',
        'أحدثت CAAT نقلة رقمية نوعية عبر منصة E-Pack CAAT (epack.caat.dz) التي تتيح الاكتتاب الكامل والدفع الإلكتروني ببطاقة CIB والبطاقة الذهبية لتأمين المسكن والكوارث الطبيعية CAT-NAT وتأمين المؤسسات الناشئة Startups وممارسي قطاع الصحة.',
        'كما يجمع الموقع الرسمي caat.dz بين طلب عروض الأسعار للسيارات (Tous Risques) والسفر الدولي، والتصريح الإلكتروني بالحوادث، وفضاءات رقمية منفصلة للزبائن والوسطاء والمؤسسات مع دعم متواصل عبر 021 60 59 11 وcontact@caat.dz.'
      ],
      fr: [
        'Parmi les leaders publics du secteur des assurances en Algérie, la Compagnie Algérienne des Assurances (CAAT) s’appuie sur plus de 200 agences et 9 directions régionales pour couvrir particuliers, professionnels, transport et risques industriels.',
        'Sa plateforme digitale E-Pack CAAT (epack.caat.dz) permet la souscription et le paiement électronique en ligne par carte CIB ou Edahabia pour les contrats CAT-NAT, multirisque habitation, startups et praticiens de la santé.',
        'En parallèle, le portail officiel caat.dz propose la simulation de devis auto/voyage, la déclaration de sinistres en ligne ainsi que des espaces dédiés aux assurés, courtiers et grandes entreprises.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'عدم إمكانية استكمال اشتراك Startup أو CAT-NAT على منصة E-Pack CAAT',
          fr: 'Blocage lors de la souscription en ligne sur E-Pack CAAT',
        },
        solution: {
          ar: 'تأكد من صحة رقم التعريف الجبائي أو بيانات العقار ومن تفعيل خدمة الدفع عبر الإنترنت على بطاقة CIB أو الذهبية، أو راسل contact@caat.dz.',
          fr: 'Contrôlez les informations saisies (NIF, adresse du bien) ainsi que l’activation du e-paiement CIB/Edahabia, ou contactez contact@caat.dz.',
        },
      },
      {
        issue: {
          ar: 'الحاجة إلى رقم تتبع ملف حادث أو تظلم لدى خلية الإصغاء والنوعية',
          fr: 'Suivre un sinistre ou saisir la cellule d’écoute CAAT',
        },
        solution: {
          ar: 'استعمل فضاء الزبون أو استمارة الشكاوى على caat.dz أو اتصل على 021 60 59 11 / 021 92 22 02 مع ذكر الوكالة ومرجع العقد.',
          fr: 'Connectez-vous à l’espace client sur caat.dz ou appelez le 021 60 59 11 / 021 92 22 02 en précisant votre agence et numéro de police.',
        },
      },
      {
        issue: {
          ar: 'الخلط بين فضاء الزبائن الفرديين وفضاء الوسطاء والمؤسسات',
          fr: 'Accéder au bon portail entre espace assuré et espace courtier',
        },
        solution: {
          ar: 'الأفراد يستخدمون فضاء المؤمن لهم أو epack.caat.dz، بينما يدخل الوسطاء المعتمدون ومديرو العقود الجماعية من البوابة المخصصة للوسطاء والمؤسسات.',
          fr: 'Les particuliers utilisent l’espace assuré ou epack.caat.dz, tandis que les intermédiaires et entreprises passent par le portail dédié aux contrats collectifs.',
        },
      },
    ],
    extraFaqs: [],
  },

  'cardif-algerie': {
    intro: {
      ar: [
        'تعد شركة كارديف الجزائر (Cardif El Djazaïr) فرع مجموعة BNP Paribas Cardif المتخصصة في التأمين على الأشخاص والحماية المالية وتأمين القروض (Bancassurance)، وتعمل انطلاقا من مقرها بالمحمدية في الجزائر العاصمة بالشراكة الوثيقة مع شبكات البنوك مثل CNEP-Banque وBNP Paribas El Djazaïr.',
        'تغطي حلول الشركة أربعة محاور أساسية للأفراد: تأمين المقترض لحماية القروض العقارية والاستهلاكية وقروض السيارات، وتأمين الحياة والحماية في حالات الوفاة أو العجز التام والمطلق IAD، وتأمين السفر الدولي لتونس وشنغن وتركيا والحج والعمرة، إضافة إلى التأمين الصحي بما يشمل البصريات وطب الأسنان.',
        'كما تقدم كارديف باقات جماعية للمؤسسات والشركات لتغطية الأجراء والموظفين وتقاعدهم التكميلي، مدعومة ببوابة شركاء ووسطاء رقمية ومصلحة دعم على الهاتف +213 21 99 58 07 والبريد contact.cardifdz@cardif.com.'
      ],
      fr: [
        'Filiale de BNP Paribas Cardif implantée à Mohammadia (Alger), Cardif El Djazaïr est un spécialiste reconnu de l’assurance des personnes et de la bancassurance en Algérie, distribuant ses solutions notamment via CNEP-Banque et BNP Paribas El Djazaïr.',
        'Son catalogue particuliers couvre quatre piliers : l’assurance emprunteur (crédits immobiliers, consommation et auto), la prévoyance décès et invalidité absolue et définitive (IAD), l’assurance voyage (Tunisie, Schengen, Turquie, Omra/Hadj) et l’assurance santé incluant optique et dentaire.',
        'Pour les entreprises, Cardif propose des contrats collectifs de protection sociale et retraite complémentaire, soutenus par un portail partenaires et le service client joignable au +213 21 99 58 07.'
      ],
    },
    eligibilityChecklist: {
      ar: [
        'وثيقة موافقة القرض البنكي لدى CNEP-Banque أو BNP Paribas واستمارة التصريح الصحي لتأمين المقترض.',
        'بطاقة التعريف الوطنية البيومترية أو جواز سفر ساري المفعول للرحلات الدولية وملفات تأشيرة شنغن والعمرة.',
        'بيانات المستفيدين المعينين في عقد تأمين الحياة والحماية (Prévoyance) لضمان سرعة تسوية المستحقات.',
        'التقارير الطبية المختومة والفواتير العلاجية أو شهادات العجز عند طلب التعويض في فروع الصحة والقروض.',
        'كشف التعريف البنكي RIB لإيداع مستحقات التعويض أو تحويل الأقساط المؤمن عليها.',
      ],
      fr: [
        'Offre de prêt bancaire (CNEP-Banque ou BNP Paribas) et questionnaire de santé pour l’assurance emprunteur.',
        'CNIBE biométrique ou passeport valide pour les formules voyage Schengen, Turquie, Tunisie ou Omra.',
        'Désignation claire des bénéficiaires sur les contrats de prévoyance et protection familiale.',
        'Pièces médicales, factures de soins ou certificats IAD en cas de sinistre santé ou emprunteur.',
        'RIB bancaire pour le règlement des prestations et indemnisations.',
      ],
    },
    stepByStepGuide: [
      {
        title: {
          ar: '1. اختيار الغطاء المناسب عبر cardifeldjazair.dz أو البنك الشريك',
          fr: '1. Sélectionner la garantie via cardifeldjazair.dz ou votre banque',
        },
        detail: {
          ar: 'حدد المنتج المطلوب (تأمين القروض، الحماية، السفر، أو الصحة) وتحقق من أقرب فرع بنكي شريك عبر صفحة cardifeldjazair.dz/partenaires.',
          fr: 'Consultez les fiches produits sur cardifeldjazair.dz et identifiez l’agence CNEP-Banque ou BNP Paribas partenaire sur cardifeldjazair.dz/partenaires.',
        },
      },
      {
        title: {
          ar: '2. إيداع التصريح الصحي وتوقيع استمارة الانضمام',
          fr: '2. Compléter le dossier et le questionnaire d’adhésion',
        },
        detail: {
          ar: 'قدم بطاقة الهوية والتصريح الصحي المبسط والمستندات الداعمة (عقد القرض أو بيانات السفر) لاستصدار شهادة الضمان.',
          fr: 'Remettez votre pièce d’identité, le questionnaire de santé simplifié et les justificatifs de crédit ou de voyage pour valider l’adhésion.',
        },
      },
      {
        title: {
          ar: '3. التصريح الفوري بالحادث أو المرض لدى كارديف الجزائر',
          fr: '3. Déclarer tout sinistre emprunteur, voyage ou santé',
        },
        detail: {
          ar: 'عند وقوع طارئ طبي بالخارج اتصل برقم المساعدة المدون على الشهادة فورا، وفي حوادث القروض أو الصحة راسل contact.cardifdz@cardif.com.',
          fr: 'En voyage, appelez immédiatement le plateau d’assistance figurant sur l’attestation ; pour les autres dossiers, contactez contact.cardifdz@cardif.com.',
        },
      },
      {
        title: {
          ar: '4. متابعة دراسة الملف وصرف التعويض المالي',
          fr: '4. Suivre l’instruction et le versement des prestations',
        },
        detail: {
          ar: 'تابع حالة ملفك مع مصلحة التعويضات على الرقم +213 21 99 58 07 حتى تسوية الأقساط للبنك أو استلام المبلغ في حسابك.',
          fr: 'Suivez l’avancement auprès du service indemnisation au +213 21 99 58 07 jusqu’au règlement au bénéficiaire ou à l’établissement prêteur.',
        },
      },
    ],
    troubleshooting: [
      {
        issue: {
          ar: 'الالتباس حول جهة تقديم ملف تأمين القرض عند الوفاة أو العجز',
          fr: 'Où déposer un dossier de sinistre emprunteur (décès ou IAD) ?',
        },
        solution: {
          ar: 'يودع الملف لدى وكالة البنك المانح للقرض (CNEP-Banque أو BNP Paribas) بالتوازي مع التواصل مع مصلحة الحوادث لدى كارديف على +213 21 99 58 07.',
          fr: 'Le dossier est constitué avec l’agence bancaire prêteuse (CNEP-Banque ou BNP Paribas) et transmis à Cardif El Djazaïr (+213 21 99 58 07).',
        },
      },
      {
        issue: {
          ar: 'تعديل تواريخ السفر في شهادة التأمين بعد تأجيل موعد التأشيرة',
          fr: 'Modifier les dates de validité d’une attestation voyage Cardif',
        },
        solution: {
          ar: 'تقدم قبل تاريخ بدء سريان العقد إلى نقطة الاكتتاب أو راسل contact.cardifdz@cardif.com مرفقا بنسخة الوثيقة وجواز السفر.',
          fr: 'Formulez la demande avant la date d’effet initiale auprès du point de souscription ou à contact.cardifdz@cardif.com avec copie du passeport.',
        },
      },
      {
        issue: {
          ar: 'طلب مستشار موارد بشرية لعرض تأمين صحي جماعي للشركة',
          fr: 'Obtenir une offre de santé ou prévoyance collective pour entreprise',
        },
        solution: {
          ar: 'استخدم صفحة cardifeldjazair.dz/entreprises أو النموذج على cardifeldjazair.dz/contact لطلب تسعيرة مخصصة لعدد الأجراء.',
          fr: 'Soumettez les effectifs et garanties souhaitées via cardifeldjazair.dz/entreprises ou cardifeldjazair.dz/contact.',
        },
      },
    ],
    extraFaqs: [],
  },

  gig: {
    intro: {
      ar: [
        'تمثل مجموعة الخليج للتأمين الجزائر (GIG Algeria) إحدى أكبر شركات التأمين الخاصة في البلاد بفضل شبكة تتجاوز 210 وكالة تغطي مختلف الولايات وتنوع عروضها الموجهة للأفراد والمهنيين والمؤسسات الاقتصادية.',
        'على مستوى الخدمات الرقمية، توفر الشركة عبر gig.dz/ar/devis بوابة فورية لحساب وطلب عروض الأسعار أونلاين لتأمين السيارات، الدراجات النارية، السكن والكوارث الطبيعية CAT-NAT، السفر الدولي وشنغن، وحتى تأمين قوارب النزهة واليخوت، إلى جانب محدد الوكالات التفاعلي.',
        'كما تدعم GIG Algeria قطاع الأعمال والمؤسسات عبر تغطيات المصانع والورشات والأخطار الصناعية، والتأمين الفلاحي، ونقل البضائع البري والبحري، مع خدمة دعم ومساعدة عبر الهاتف 023 77 21 12 و0770 25 00 00 والبريد contact@gig.dz.'
      ],
      fr: [
        'Filiale d’un grand groupe régional, Gulf Insurance Group Algérie (GIG) s’appuie sur un réseau de plus de 210 agences à travers le pays et propose une offre complète pour les particuliers, artisans et grandes entreprises.',
        'Via son portail gig.dz/ar/devis, l’assureur permet d’obtenir rapidement un devis en ligne pour l’automobile, les motos, l’habitation CAT-NAT, le voyage Schengen et même les bateaux de plaisance, tout en localisant aisément l’agence la plus proche.',
        'Sur le segment corporate, GIG couvre les usines et risques industriels, l’agriculture ainsi que le transport terrestre et maritime de marchandises, avec un support accessible au 023 77 21 12 ou 0770 25 00 00.'
      ],
    },
    troubleshooting: [
      {
        issue: {
          ar: 'تأخر تلقي الرد على طلب عرض سعر مرسل عبر gig.dz/ar/devis',
          fr: 'Délai de retour suite à une demande de devis en ligne GIG',
        },
        solution: {
          ar: 'تحقق من البريد الإلكتروني المسجل أو تواصل مباشرة على الرقم 023 77 21 12 / 0770 25 00 00 لتحديد موعد في أقرب وكالة من شبكة الـ 210 وكالة.',
          fr: 'Vérifiez vos courriels ou appelez directement le 023 77 21 12 / 0770 25 00 00 pour finaliser la tarification auprès de l’agence de votre choix.',
        },
      },
      {
        issue: {
          ar: 'طلب المساعدة على الطريق عند تعطل المركبة في طريق سيار أو ولاية بعيدة',
          fr: 'Solliciter l’assistance routière GIG 24/7 en déplacement',
        },
        solution: {
          ar: 'احتفظ برقم المساعدة المدرج في عقد التأمين واتصل بالرقم 0770 25 00 00 أو 023 77 21 12 للتوجيه الفوري لسيارة الجر.',
          fr: 'Composez le numéro d’assistance indiqué sur votre attestation ou joignez le 0770 25 00 00 / 023 77 21 12 avec votre immatriculation.',
        },
      },
      {
        issue: {
          ar: 'معرفة الوثائق الإضافية لتأمين قوارب النزهة أو المصانع',
          fr: 'Pièces spécifiques pour assurer un bateau de plaisance ou une usine',
        },
        solution: {
          ar: 'يتطلب تأمين القوارب وثائق تسجيل السفينة ومعدات السلامة البحرية، بينما يتطلب تأمين المصانع معاينة تقنية للأخطار الصناعية قبل الإصدار.',
          fr: 'Les bateaux requièrent les titres de navigation et armement de sécurité, tandis que les sites industriels font l’objet d’une visite technique préalable.',
        },
      },
    ],
    extraFaqs: [],
  },
};
