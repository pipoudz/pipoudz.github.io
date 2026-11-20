import { SectorItem, RichGuideContent } from '@/lib/types';
import { batch1Guides } from './batches/batch-1';
import { batch2Guides } from './batches/batch-2';
import { batch3Guides } from './batches/batch-3';
import { batch4Guides } from './batches/batch-4';
import { batch5Guides } from './batches/batch-5';
import { batch6Guides } from './batches/batch-6';
import { batch7Guides } from './batches/batch-7';
import { batch8Guides } from './batches/batch-8';
import { batch9Guides } from './batches/batch-9';

export function getSectorRichGuide(sector: SectorItem): RichGuideContent {
  const arName = sector.name.ar;
  const frName = sector.name.fr;
  const acronym = sector.acronym || 'DZ';
  const arMinistry = sector.ministry?.ar || 'الوصاية الوزارية المختصة';
  const frMinistry = sector.ministry?.fr || 'la tutelle ministérielle compétente';

  // Sector-specific tailored overrides for the highest-demand Algerian citizen portals
  const specificOverrides: Record<string, Partial<RichGuideContent>> = {
    aadl: {
      intro: {
        ar: [
          'تعد الوكالة الوطنية لتحسين السكن وتطويره (عدل AADL) الركيزة الأساسية لبرامج السكن بصيغة البيع بالإيجار في الجزائر. أتاحت البوابة الرقمية الجديدة لبرنامج عدل 3 تحولا كاملا في معالجة الملفات، حيث أصبح المكتتب يقوم بالتسجيل الأولي، رفع الوثائق الثبوتية بصيغة PDF، وتتبع مسار دراسة ملفه والطعون دون التنقل إلى المديريات الولائية.',
          'تم ربط منصة عدل إلكترونيا بقاعدة بيانات الحالة المدنية والبطاقية الوطنية للسكن وصناديق الضمان الاجتماعي CNAS وCASNOS، مما يسمح بالتحقق التلقائي من شروط الدخل وعدم امتلاك عقار. كما توفر البوابة فضاء لتحميل أوامر الدفع وتسديد الأقساط الشهرية أو الشطور المالية عبر البطاقة الذهبية لبريد الجزائر أو بطاقة CIB البنكية.',
          'من خلال هذا الدليل المواطني، نضع بين يديك خلاصة عملية تشمل شروط الأهلية القانونية، الوثائق الواجب تجهيزها قبل فتح المنصة، خطوات تفعيل الحساب أو تقديم طعن إلكتروني، والحلول الميدانية للمشاكل التقنية الشائعة أثناء فترات الذروة.'
        ],
        fr: [
          'L\'Agence Nationale de l\'Amélioration et du Développement du Logement (AADL) pilote le programme de logement en location-vente le plus sollicité en Algérie. Avec le déploiement de la plateforme AADL 3, la quasi-totalité du parcours souscripteur est désormais dématérialisée : préinscription par NIN, téléversement du dossier numérisé, suivi de recevabilité et dépôt des recours en ligne.',
          'L\'infrastructure numérique de l\'AADL est directement interconnectée au fichier national du logement, à l\'état civil biométrique et aux caisses de sécurité sociale (CNAS, CASNOS, CNR). Cette interopérabilité automatise les contrôles d\'éligibilité de revenus et d\'absence de propriété immobilière sans exiger de multiples déplacements aux guichets de wilaya.',
          'Ce guide pratique rassemble les conditions réglementaires en vigueur, la liste exacte des justificatifs à numériser, le mode d\'emploi détaillé pour accéder à votre espace personnel ainsi que les solutions concrètes face aux messages de rejet ou blocages techniques.'
        ],
      },
      troubleshooting: [
        {
          issue: {
            ar: 'رسالة خطأ عند إدخال رقم التعريف الوطني NIN أو رقم الضمان الاجتماعي',
            fr: 'Erreur de correspondance entre le NIN et le numéro de sécurité sociale',
          },
          solution: {
            ar: 'تأكد من تطابق الحروف اللاتينية للاسم واللقب وتاريخ الميلاد بين بطاقة التعريف البيومترية وشهادة الانتساب للضمان الاجتماعي قبل إعادة المحاولة.',
            fr: 'Vérifiez l\'exacte concordance orthographique (nom, prénom, date de naissance) entre votre carte biométrique et votre attestation d\'affiliation CNAS ou CASNOS avant de soumettre à nouveau.',
          },
        },
        {
          issue: {
            ar: 'عدم قبول ملف PDF أثناء المرحلة الثانية من التسجيل',
            fr: 'Rejet des pièces justificatives PDF lors du téléversement',
          },
          solution: {
            ar: 'يجب مسح كل وثيقة ضوئيا بوضوح مع ضغط حجم الملف ليقل عن الحد المسموح به في المنصة وتجنب الصور الملتقطة بإضاءة ضعيفة.',
            fr: 'Numérisez chaque document en PDF lisible avec une taille compressée conforme aux limites de la plateforme et évitez les photos floues ou coupées.',
          },
        },
        {
          issue: {
            ar: 'فقدان كلمة المرور أو تعذر استقبال رسالة التفعيل SMS',
            fr: 'Mot de passe oublié ou non-réception du code de vérification SMS',
          },
          solution: {
            ar: 'استخدم نفس شريحة الهاتف المسجلة باسمك أثناء التسجيل الأولي واستعمل خيار استرجاع الحساب عبر رقم التعريف الوطني ورقم التسجيل.',
            fr: 'Utilisez impérativement la ligne mobile enregistrée lors de l\'inscription initiale et passez par la procédure de réinitialisation par NIN et numéro d\'inscription.',
          },
        },
      ],
    },
    cnas: {
      intro: {
        ar: [
          'يوفر الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء (CNAS) منظومة رقمية متكاملة تعرف بفضاء الهناء (El Hanaa) تهدف إلى تخفيف العبء الإداري عن المؤمن لهم اجتماعيا وذوي الحقوق. يتيح هذا الفضاء متابعة التغطية الصحية، مراقبة استهلاك الأدوية في إطار نظام الدفع من قبل الغير عبر بطاقة الشفاء، واستخراج شهادة الانتساب الإلكترونية عن بعد.',
          'إلى جانب خدمة الأفراد، خصص الصندوق بوابة التصريح عن بعد (Télédeclaration) للمستخدمين وأرباب العمل لتسديد الاشتراكات الفصلية أو الشهرية وإيداع الكشوف السنوية للأجور DAS دون طوابير. كما أصبحت عمليات تجديد وتحيين بطاقة الشفاء تتكامل مع الوكالات المحلية والصيدليات المتعاقدة.',
          'تجد في هذه الصفحة دليلا شاملا لخطوات التسجيل في تطبيق وفضاء الهناء، شروط الاستفادة من التعويضات الطبية والعطل المرضية، وطرق معالجة إشكالات التحيين أو تجميد البطاقة.'
        ],
        fr: [
          'La Caisse Nationale des Assurances Sociales des Travailleurs Salariés (CNAS) met à disposition des assurés sociaux l\'écosystème numérique El Hanaa, conçu pour centraliser le suivi de la couverture maladie et des droits familiaux. Depuis un ordinateur ou un smartphone, chaque salarié ou retraité affilié peut vérifier ses remboursements, consulter l\'historique de sa carte Chifa et télécharger son attestation d\'affiliation.',
          'Pour les employeurs et gestionnaires de paie, le portail de télédéclaration permet le dépôt sécurisé des déclarations d\'assiette de cotisations et le règlement électronique sans déplacement en agence de wilaya. L\'interconnexion avec la carte Chifa de deuxième génération facilite également l\'actualisation automatique chez le pharmacien conventionné.',
          'Retrouvez ci-dessous la procédure complète d\'activation de votre espace El Hanaa, les conditions d\'accès au tiers payant, ainsi que les démarches à suivre en cas de carte bloquée ou d\'affiliation non mise à jour.'
        ],
      },
    },
    poste: {
      intro: {
        ar: [
          'يشكل بريد الجزائر العصب الرئيسي للمعاملات المالية والبريدية اليومية لملايين المواطنين من خلال الحساب البريدي الجاري CCP والبطاقة النقدية الذهبية Edahabia. وبفضل تطبيق بريدي موب (BaridiMob) وبوابة ECCP، بات بالإمكان إجراء التحويلات المالية الفورية، دفع فواتير الكهرباء والماء والإنترنت، وتتبع الرصيد على مدار الساعة.',
          'تسمح المنصة الرقمية لبريد الجزائر أيضا بتقديم طلب الحصول على البطاقة الذهبية أول مرة، تتبع مسار طبعها واستلامها في المكتب البريدي، وطلب دفتر الصكوك البريدية أو تغير رقم الهاتف المرتبط بالحساب عبر الشبابيك أو الصرافات الآلية GAB.',
          'يستعرض هذا الدليل كافة الخطوات العملية لتفعيل خدمة بريدي موب بأمان، شروط طلب وتجديد البطاقة الذهبية، وأساليب التعامل مع الحالات الطارئة مثل نسيان الرمز السري أو تجميد البطاقة.'
        ],
        fr: [
          'Algérie Poste constitue le pilier des paiements de proximité et des services financiers grand public en Algérie via le Compte Courant Postal (CCP) et la carte monétique Edahabia. Grâce au portail ECCP et à l\'application mobile BaridiMob, les titulaires réalisent leurs virements instantanés, règlent leurs factures courantes et consultent leurs relevés en temps réel 24 heures sur 24.',
          'La plateforme officielle permet également de commander la carte Edahabia en ligne, de suivre l\'avancement de sa fabrication jusqu\'au bureau de poste distributeur, de demander un carnet de chèques ou d\'ajuster les plafonds de retrait et de paiement électronique.',
          'Ce guide récapitule les prérequis d\'activation BaridiMob, la démarche de commande ou de renouvellement de la carte Edahabia, et les réflexes essentiels en cas d\'oubli de code ou de blocage sécuritaire.'
        ],
      },
    },
    anem: {
      intro: {
        ar: [
          'تدير الوكالة الوطنية للتشغيل (ANEM) سوق العمل الرسمي في الجزائر عبر منصة وسيط أونلاين (Wassit Online) ومنصة منحة البطالة. تم تصميم هذه الخدمات لتوحيد عروض وطلبات الشغل بين طالبي العمل والمؤسسات الاقتصادية، وتمكين الشباب المؤهلين من التسجيل للحصول على منحة البطالة وحجز موعد المقابلة عن بعد.',
          'يتطلب الحفاظ على الاستفادة من منحة البطالة أو تجديد طلب العمل التزاما دوريا بتمديد التسجيل كل ستة أشهر عبر الفضاء الرقمي، مع الحرص على استجابة المستفيد لعروض التكوين المهني أو التوظيف الموجهة من الملحقة المحلية للتشغيل.',
          'يشرح هذا الدليل الشروط القانونية لمنحة البطالة، المستندات المطلوبة يوم المقابلة، خطوات تمديد البطاقة إلكترونيا، وكيفية رفع التعليق المؤقت في حال تغير الوضعية الإدارية.'
        ],
        fr: [
          'L\'Agence Nationale de l\'Emploi (ANEM) structure l\'intermédiation sur le marché du travail algérien à travers les portails Wassit Online et Minha. Ces interfaces numériques centralisent les offres d\'emploi des entreprises, gèrent les demandes de placement des diplômés et organisent la prise de rendez-vous en ligne pour l\'allocation chômage.',
          'Le maintien des droits sur Wassit impose au demandeur d\'emploi de renouveler périodiquement son inscription tous les six mois et de répondre aux convocations de formation ou de recrutement émises par l\'agence locale.',
          'Découvrez ci-après les critères d\'éligibilité à l\'allocation chômage, la composition exacte du dossier pour l\'entretien en agence et les gestes techniques pour prolonger votre demande sans interruption.'
        ],
      },
    },
    ...batch1Guides,
    ...batch2Guides,
    ...batch3Guides,
    ...batch4Guides,
    ...batch5Guides,
    ...batch6Guides,
    ...batch7Guides,
    ...batch8Guides,
    ...batch9Guides,
  };

  // Category-tailored fallback generators for rich uniqueness across all 10 categories
  const categoryIntros: Record<string, { ar: string[]; fr: string[] }> = {
    housing: {
      ar: [
        `تمثل منصة ${arName} (${acronym}) التابعة لـ ${arMinistry} حلقة مركزية في رقمنة قطاع السكن والعمران والتهيئة في الجزائر. تتيح هذه البوابة للمواطنين تتبع ملفات السكن، الاطلاع على نتائج الدراسة والطعون، وتنظيم مواعيد الدفع والأقساط بصفة إلكترونية دون تنقل متكرر بين المصالح الإدارية.`,
        `يرتكز النظام الرقمي لهذه المؤسسة على ربط المعطيات العقارية والمدنية لضمان الشفافية وتكافؤ الفرص في الاستفادة من البرامج السكنية أو التسيير العقاري. كما توفر البوابة فضاءات مخصصة للتحميل الفوري للوصولات، استمارات التسجيل، ومتابعة الحالة المالية للمستفيدين والمؤجرين.`,
        `يجمع هذا الدليل التحليلي كافة المعلومات الأساسية حول ${arName}: الجمهور المستهدف، شروط القبول والتكاليف، الخطوات العملية للتسجيل والمتابعة، وأبرز الحلول الميدانية لتجاوز العقبات التقنية أو الإدارية.`
      ],
      fr: [
        `La plateforme ${frName} (${acronym}), placée sous ${frMinistry}, joue un rôle majeur dans la modernisation des services de l\'habitat et de l\'urbanisme en Algérie. Elle permet aux demandeurs et locataires de suivre leur dossier, de consulter les décisions d\'affectation ou de recours et de gérer les ordres de versement en ligne.`,
        `Grâce à l\'interconnexion avec les bases d\'état civil et le fichier national du logement, ce téléservice assure une vérification rapide de l\'éligibilité et limite considérablement les files d\'attente aux guichets des directions régionales.`,
        `Ce dossier pratique détaille les critères réglementaires d\'accès, les pièces justificatives à préparer, le cheminement pas à pas sur le portail officiel ainsi que les solutions aux incidents courants.`
      ],
    },
    telecom: {
      ar: [
        `تشرف مؤسسة ${arName} (${acronym}) على خدمات حيوية في مجال الاتصالات السلكية واللاسلكية والخدمات البريدية الرقمية في الجزائر. توفر بوابتها الإلكترونية حلولا فورية لتعبئة الرصيد، دفع فواتير الإنترنت والهاتف، ومتابعة استهلاك العروض والخدمات ذات القيمة المضافة عن بعد.`,
        `ساهم تعميم الدفع الإلكتروني عبر البطاقة الذهبية وبطاقات CIB في جعل خدمات ${arName} متاحة على مدار الساعة من خلال الهواتف الذكية وأجهزة الحاسوب، مع توفير مساحات زبائن آمنة لتغيير الباقات، طلب الخطوط الجديدة، أو تقديم التبليغات التقنية عند انقطاع الخدمة.`,
        `نستعرض في هذا الدليل العملي متطلبات تفعيل حسابك لدى ${arName}، طريقة الاستفادة من كل خدمة رقمية موثقة، وخطوات التعامل مع الأعطال التقنية أو استرجاع بيانات الدخول.`
      ],
      fr: [
        `L\'organisme ${frName} (${acronym}) assure la gestion et la numérisation des services de télécommunications, d\'accès internet ou d\'exploitation postale à travers le territoire algérien. Son espace client en ligne permet le paiement des factures, le rechargement instantané et le suivi des abonnements sans passage en agence commerciale.`,
        `L\'intégration native des paiements par carte Edahabia et CIB offre aux abonnés particuliers et professionnels une autonomie complète, depuis l\'activation des offres jusqu\'au signalement des incidents techniques et le suivi des réclamations.`,
        `Vous trouverez dans cette fiche les conditions d\'accès, les étapes d\'utilisation des téléservices de ${frName} et les solutions recommandées en cas de blocage de compte ou d\'erreur de facturation.`
      ],
    },
    energy_water: {
      ar: [
        `تتولى ${arName} (${acronym}) مهام التسيير والتوزيع والرقابة في قطاع الطاقة أو الموارد المائية تحت إشراف ${arMinistry}. تهدف منصتها الرقمية إلى تمكين المشتركين من الاطلاع الفوري على فواتير الاستهلاك الدورية، تسديد المستحقات إلكترونيا دون رسوم إضافية، وتقديم طلبات الربط بالشبكات أو الصيانة.`,
        `يتيح التوجه نحو الرقمنة في مؤسسات الطاقة والمياه قراءة مؤشرات العدادات عن بعد أو التبليغ الذاتي عن الأرقام المسجلة لتفادي الفواتير التقديرية. كما توفر المنصة قنوات رسمية للإبلاغ السريع عن التسربات أو الأعطاب المفاجئة عبر أرقام الطوارئ الوطنية والمكاتب الافتراضية.`,
        `يتناول هذا الدليل كافة المراحل العملية لاستعمال فضاء الزبون في ${arName}، الوثائق الضرورية لملفات الربط أو التنازل عن العداد، وطرق معالجة الشكاوى المتعلقة بقراءة الفواتير.`
      ],
      fr: [
        `L\'entité ${frName} (${acronym}), rattachée à ${frMinistry}, gère la distribution, la facturation ou la régulation des services essentiels d\'énergie et d\'eau. Son portail numérique met à la disposition des abonnés la consultation détaillée des factures, le télépaiement sécurisé et les demandes de raccordement en ligne.`,
        `La digitalisation de ce service public permet également de transmettre ses relevés d\'index réels afin d\'éviter les estimations approximatives et de signaler rapidement toute fuite, coupure ou anomalie réseau auprès des équipes d\'intervention.`,
        `Ce guide complet récapitule les justificatifs exigés pour les dossiers d\'abonnement ou de mutation, la marche à suivre pas à pas sur le portail et les recours en cas d\'erreur de relevé.`
      ],
    },
    social_labor: {
      ar: [
        `تمثل ${arName} (${acronym}) هيئة عمومية محورية في منظومة العمل والتشغيل والحماية الاجتماعية التابعة لـ ${arMinistry}. تركز خدماتها الرقمية على تسهيل حصول العمال الأجراء، غير الأجراء، المتقاعدين، وطالبي الشغل على مستحقاتهم ووثائقهم الثبوتية مثل شهادات الانتساب والمعاشات دون تنقل شاق.`,
        `تعمل البوابات الاجتماعية على ربط المعطيات مع الإدارات المحلية وصناديق التقاعد والتأمين لتحديث المسار المهني تلقائيا، وتسهيل تسديد الاشتراكات السنوية أو الشهرية إلكترونيا، مع ضمان سرية البيانات الشخصية وفق التشريع المعمول به.`,
        `يعرض لك هذا الدليل المتطلبات النظامية للتسجيل في ${arName}، الخطوات الواضحة لاستغلال فضاء المؤمن له أو المستخدم، وأهم الإرشادات لحل مشكلات تطابق البيانات أو تأخر التحصيلات.`
      ],
      fr: [
        `L\'institution ${frName} (${acronym}) constitue un maillon essentiel du système algérien de travail, d\'emploi et de protection sociale sous ${frMinistry}. Ses téléservices permettent aux salariés, travailleurs indépendants, retraités et demandeurs d\'emploi d\'obtenir leurs attestations et de suivre leurs prestations à distance.`,
        `Grâce aux échanges dématérialisés entre caisses nationales et agences de wilaya, le suivi des cotisations, des pensions et des dossiers de prise en charge médicale s\'effectue dans un cadre plus rapide et sécurisé.`,
        `Consultez ci-dessous la liste des conditions d\'accès, la procédure détaillée pas à pas et les réponses aux incidents d\'immatriculation les plus fréquents.`
      ],
    },
    justice_interior: {
      ar: [
        `تندرج بوابة ${arName} (${acronym}) ضمن المسار الوطني لرقمنة مرفق العدالة أو الجماعات المحلية والحالة المدنية التابعة لـ ${arMinistry}. تتيح هذه الخدمات استخراج وثائق رسمية ذات حساسية قانونية عالية مثل الشهادات القضائية أو وثائق الهوية والمركبات والبلديات بكل موثوقية وفي آجال قياسية.`,
        `تعتمد هذه المنصات على معايير أمنية مشددة مثل رقم التعريف الوطني NIN، رمز الاستجابة السريعة QR Code للتحقق الإلكتروني من صحة الوثيقة دون حاجة للتصديق الورقي التقليدي، وربط مباشر بالسجل الوطني الآلي للحالة المدنية.`,
        `يوضح هذا الدليل المعتمد كل الشروط والوثائق الضرورية لإتمام طلبك عبر ${arName}، خطوات التقديم الإلكتروني والتتبع، والحلول العملية عند ظهور أخطاء في تهجئة الأسماء أو بيانات التسجيل.`
      ],
      fr: [
        `Le service ${frName} (${acronym}) s\'inscrit dans le programme national de modernisation de la justice, de l\'état civil et des collectivités locales relevant de ${frMinistry}. Il offre aux citoyens résidant en Algérie comme à l\'étranger l\'obtention rapide de documents officiels authentifiés et le dépôt sécurisé de demandes administratives.`,
        `L\'utilisation généralisée du Numéro d\'Identification National (NIN) et de codes de vérification QR sécurisés permet de contrôler l\'authenticité des actes extraits en ligne et de réduire fortement le besoin de légalisations papier en guichet.`,
        `Retrouvez dans ce guide la liste des pièces biométriques nécessaires, les étapes exactes de soumission et les solutions aux erreurs fréquentes de transcription sur les registres d\'état civil.`
      ],
    },
    transport: {
      ar: [
        `تشرف ${arName} (${acronym}) على خدمات النقل العمومي أو تنظيم حركة المركبات والتنقل تحت مظلة ${arMinistry}. تساهم منصاتها الرقمية في تنظيم مواعيد الرحلات، تسهيل الحصول على الرخص والبطاقات المهنية، وتمكين المواطن من حجز التذاكر أو تتبع الوثائق الإدارية للمركبات عن بعد.`,
        `من خلال الدمج بين التحديث اللحظي للبيانات والخدمات المحمولة، تسهل هذه البوابات التخطيط اليومي لتنقل المسافرين عبر الولايات وتخفف الضغط على الشبابيك التقليدية، مع توفير قنوات دعم ومرافقة مخصصة لذوي الاحتياجات الخاصة والطلبة.`,
        `يجمع هذا القسم الشروط العامة للاستفادة من خدمات ${arName}، مراحل الحجز أو تقديم الملفات الرقمية، وإجابات عملية لأكثر الأسئلة شيوعا حول التذاكر والبطاقات والتراخيص.`
      ],
      fr: [
        `L\'organisme ${frName} (${acronym}) supervise les infrastructures de transport, la mobilité des voyageurs ou la gestion administrative des véhicules sous ${frMinistry}. Ses portails numériques facilitent la consultation des horaires, l\'achat de titres ou abonnements et le traitement dématérialisé des cartes et autorisations de circulation.`,
        `En centralisant les informations tarifaires et les fiches de lignes ou de démarches, cette plateforme améliore la prévisibilité des déplacements inter-wilayas et simplifie les formalités des usagers et professionnels du transport.`,
        `Découvrez ci-dessous les conditions d\'utilisation des services en ligne de ${frName}, les étapes pratiques de démarche et la résolution des blocages courants.`
      ],
    },
    finance_economy: {
      ar: [
        `تعد ${arName} (${acronym}) مؤسسة سيادية أو خدمية رائدة في القطاع المالي والتجاري والجبائي المرتبط بـ ${arMinistry}. تعمل بوابتها الرقمية على عصرنة التصريحات الجبائية، ترقيم السجلات التجارية، تبسيط عمليات الجمركة والاستثمار، وإتاحة خدمات التسوية والدفع المالي عن بعد للمؤسسات والأفراد.`,
        `يسمح الانتقال إلى الأنظمة المالية الرقمية مثل Jibayatic وSidjilcom وSIGAD بتقليص الآجال الإدارية لتأسيس الشركات أو استخراج رقم التعريف الجبائي NIF، كما يمنح المتعاملين الاقتصاديين لوحات قيادة شفافة لتتبع التزاماتهم وحقوقهم الجمركية والضريبية.`,
        `يقدم هذا الدليل خلاصة مهنية تغطي المتطلبات القانونية والرقمية للانخراط في خدمات ${arName}، خطوات الولوج إلى الفضاء المالي أو التجاري، وتنبيهات مفيدة لتجنب الغرامات والتأخيرات.`
      ],
      fr: [
        `L\'institution ${frName} (${acronym}), rattachée à ${frMinistry}, intervient au cœur de l\'écosystème financier, fiscal, douanier ou commercial algérien. Ses plateformes dédiées accompagnent les entrepreneurs, contribuables et citoyens dans les télédéclarations fiscales, l\'immatriculation commerciale, le suivi douanier ou le pilotage d\'investissement.`,
        `La dématérialisation de ces formalités permet un gain de temps considérable lors de la création d\'entreprise, du règlement des impôts ou de l\'obtention du Numéro d\'Identification Fiscale (NIF), tout en sécurisant la traçabilité des opérations.`,
        `Ce guide détaillé passe en revue les prérequis documentaires pour utiliser les services de ${frName}, le parcours étape par étape sur le portail officiel et les précautions à observer lors du dépôt en ligne.`
      ],
    },
    education_higher: {
      ar: [
        `تسهر ${arName} (${acronym}) على تأطير المسار التعليمي والتربوي أو الجامعي والاختبارات الوطنية ضمن منظومة ${arMinistry}. تم تطوير منصاتها الإلكترونية لخدمة التلاميذ، الطلبة الجامعيين، الأساتذة، وأولياء الأمور في عمليات التسجيل، متابعة النقاط، التحويلات المدرسية، واستخراج الشهادات وكشوف النقاط.`,
        `تشكل هذه البوابات التعليمية جسر تواصل مستمر طوال السنة الدراسية والجامعية، بدءا من التوجيه الأولي والتحضير لامتحانات البكالوريا وشهادة التعليم المتوسط وصولا إلى التوظيف الأكاديمي والمنح والخدمات الجامعية والإيواء.`,
        `يستعرض هذا الدليل الوثائق البيداغوجية اللازمة، كيفية الولوج السليم دون أخطاء أثناء فترات التسجيل المكتظة، وكيفية استعادة بيانات الحساب المدرسي أو الجامعي عند فقدانها.`
      ],
      fr: [
        `La structure ${frName} (${acronym}), relevant de ${frMinistry}, accompagne les élèves, étudiants, parents d\'élèves et enseignants tout au long du parcours scolaire, universitaire ou des concours nationaux. Ses espaces numériques assurent l\'inscription aux examens, le suivi des bulletins et absences, les orientations universitaires ainsi que l\'accès aux ressources pédagogiques.`,
        `Pensées pour absorber les pics d\'affluence lors de la rentrée scolaire ou de la proclamation des résultats nationaux, ces plateformes offrent un accès continu aux documents de scolarité, transferts et demandes de bourses ou d\'hébergement.`,
        `Suivez ci-après la liste des pièces scolaires ou universitaires exigées, les étapes d\'authentification sécurisée et les solutions pratiques en cas d\'indisponibilité temporaire ou d\'oubli de mot de passe.`
      ],
    },
    health_civil: {
      ar: [
        `تعمل ${arName} (${acronym}) في صميم منظومة الصحة العمومية، التضامن الوطني، أو الوقاية والإغاثة تحت إشراف ${arMinistry}. تتيح قنواتها الرقمية والإرشادية للمواطنين الوصول السريع إلى الخدمات الصحية، متابعة حملات التلقيح والوقاية، طلب الدعم الاجتماعي أو بطاقات الحماية، والتبليغ الفوري في حالات الطوارئ.`,
        `تولي هذه المؤسسات أهمية قصوى لسرعة الاستجابة ودقة المعلومة الطبية والإنسانية، مع دعم التكفل بالمرضى، الأسر المعوزة، وذوي الهمم عبر بوابات تسجيل محلية ووطنية تحفظ كرامة المواطن وتختصر الإجراءات الميدانية.`,
        `يلخص هذا الدليل مجالات تدخل ${arName}، شروط الاستفادة من البرامج الصحية أو التضامنية، الخطوات العملية للتواصل أو التسجيل، وإرشادات هامة للحالات الاستعجالية.`
      ],
      fr: [
        `L\'organisme ${frName} (${acronym}), rattaché à ${frMinistry}, œuvre dans les domaines essentiels de la santé publique, de la solidarité nationale ou des secours d\'urgence. Ses dispositifs d\'information et téléservices facilitent l\'accès aux soins, les demandes d\'aide sociale, les campagnes de prévention et la coordination des appels de détresse.`,
        `L\'objectif prioritaire de cette structure est de garantir une prise en charge rapide, humaine et structurée des citoyens vulnérables, des patients et des personnes aux besoins spécifiques à travers toutes les wilayas.`,
        `Retrouvez ci-après les conditions d\'éligibilité aux aides ou prestations, le parcours pratique à suivre et les réflexes utiles en situation d\'urgence ou d\'erreur de dossier.`
      ],
    },
    ministries: {
      ar: [
        `تعد ${arName} (${acronym}) من الهيئات والمؤسسات الدستورية والوزارية الفاعلة في تسيير الشأن العام وتنظيم القطاعات الوطنية في الجزائر. تقدم بوابتها الرسمية مرجعا موثوقا للنصوص التنظيمية، المناقصات، المسابقات المهنية، والاستشارات القطاعية للمواطنين والباحثين والمستثمرين.`,
        `يعكس إطلاق الفضاءات الرقمية الوزارية التزاما بالشفافية الإدارية، حيث يمكن للمتعاملين إيداع الشكاوى أو طلبات التراخيص إلكترونيا وتتبع استجابة المصالح المركزية والولائية عبر أرقام تتبع واضحة.`,
        `يوفر هذا الدليل نظرة منظمة على المهام السيادية والخدمية لـ ${arName}، شروط الاستفادة من خدماتها المرقمنة، وكيفية التواصل الرسمي مع مديرياتها المختصة.`
      ],
      fr: [
        `L\'entité ${frName} (${acronym}) figure parmi les ministères et institutions nationales qui pilotent l\'action publique, la réglementation sectorielle et la relation usager en Algérie. Son portail institutionnel publie les textes réglementaires, les avis de concours ou appels d\'offres et propose des guichets de doléances en ligne.`,
        `La numérisation de ces services centraux renforce la transparence et permet aux citoyens comme aux opérateurs économiques de déposer leurs requêtes et de suivre les orientations officielles de manière structurée.`,
        `Ce guide présente le périmètre d\'action de ${frName}, les prérequis pour accéder à ses formulaires numériques, les étapes recommandées et des conseils pratiques d\'utilisation.`
      ],
    },
  };

  const baseCategoryIntro = categoryIntros[sector.category] || categoryIntros.ministries;
  const override = specificOverrides[sector.slug];

  const defaultChecklist = {
    ar: [
      'بطاقة التعريف الوطنية البيومترية سارية المفعول تتضمن رقم التعريف الوطني NIN المكون من 18 رقما.',
      'رقم هاتف نقال نشط ومسجل باسم صاحب الطلب لاستقبال رموز التحقق السرية OTP وإشعارات التتبع.',
      'بريد الكتروني شخصي فعال لتأكيد الحساب واستلام وصولات الإيداع والردود الإدارية.',
      'نسخ رقمية واضحة للوثائق الثبوتية بصيغة PDF أو JPG لا يتجاوز حجمها الحد التقني للمنصة.',
      'بطاقة الدفع الإلكتروني (الذهبية أو CIB) سارية الصلاحية في حال تضمنت الخدمة تسديد حقوق أو فواتير.',
    ],
    fr: [
      'Carte Nationale d\'Identité Biométrique et Électronique (CNIBE) valide comportant le NIN à 18 chiffres.',
      'Numéro de téléphone mobile personnel actif pour la réception des codes de validation OTP par SMS.',
      'Adresse courriel personnelle fonctionnelle pour activer le compte et archiver les récépissés.',
      'Copies numérisées nettes des justificatifs requis (format PDF ou JPG compressé selon les normes du portail).',
      'Carte bancaire CIB ou carte Edahabia activée pour le e-paiement lorsque la démarche implique des frais ou factures.',
    ],
  };

  const defaultSteps: RichGuideContent['stepByStepGuide'] = [
    {
      title: {
        ar: `1. الدخول إلى البوابة الرسمية لـ ${acronym} والتحقق من النطاق`,
        fr: `1. Accéder au portail officiel ${acronym} et vérifier l\'adresse`,
      },
      detail: {
        ar: `استخدم الرابط الرسمي الموثق (${sector.officialUrl}) وتأكد من وجود علامة التشفير HTTPS والنطاق الجزائري الصحيح لحماية معطياتك الشخصية من الصفحات المزورة.`,
        fr: `Cliquez sur le lien officiel certifié (${sector.officialUrl}) et vérifiez la présence du protocole sécurisé HTTPS avant de saisir vos informations personnelles.`,
      },
    },
    {
      title: {
        ar: '2. إنشاء الحساب الشخصي أو تسجيل الدخول الموحد',
        fr: '2. Créer un compte citoyen ou s\'authentifier',
      },
      detail: {
        ar: 'قم بتعبئة استمارة التسجيل الأولي بإدخال رقم التعريف الوطني NIN، الاسم واللقب بالحروف اللاتينية كما هو مدون في البطاقة البيومترية، ورقم الهاتف الشخصي.',
        fr: 'Remplissez le formulaire d\'inscription avec votre NIN, votre identité exacte telle qu\'inscrite sur la pièce biométrique et vos coordonnées de contact valides.',
      },
    },
    {
      title: {
        ar: '3. اختيار الخدمة المطلوبة وإرفاق الوثائق الثبوتية',
        fr: '3. Sélectionner la prestation et joindre les justificatifs',
      },
      detail: {
        ar: `حدد المعاملة المناسبة من قائمة خدمات ${arName}، ثم أرفق الملفات المطلوبة مع مراجعة الحقول الإلزامية بدقة لتجنب أي رفض شكلي للملف.`,
        fr: `Choisissez le téléservice souhaité dans votre espace ${frName}, importez les pièces numérisées demandées et relisez chaque champ avant validation.`,
      },
    },
    {
      title: {
        ar: '4. تأكيد الطلب وتسديد الرسوم عند الاقتضاء',
        fr: '4. Valider la demande et effectuer le paiement éventuel',
      },
      detail: {
        ar: 'في حال وجود رسوم إدارية أو مستحقات مالية، يتم التسديد فورا عبر منصة SATIM أو البطاقة الذهبية مع الاحتفاظ بنسخة رقمية لوصل الدفع الناجح.',
        fr: 'Si la procédure comporte des frais réglementaires, procédez au règlement en ligne via CIB ou Edahabia et conservez précieusement le justificatif de transaction.',
      },
    },
    {
      title: {
        ar: '5. تحميل وصل الإيداع وتتبع معالجة الملف',
        fr: '5. Télécharger le récépissé et suivre le traitement',
      },
      detail: {
        ar: 'احتفظ برقم التسجيل ووصل الاستلام الإلكتروني لمراقبة حالة تقدم ملفك عن بعد أو لتحميل الوثيقة النهائية المزودة برمز التحقق QR فور جاهزيتها.',
        fr: 'Sauvegardez le numéro de dossier et l\'accusé de réception PDF afin de suivre l\'avancement en temps réel et télécharger le document final dès sa délivrance.',
      },
    },
  ];

  const defaultTroubleshooting: RichGuideContent['troubleshooting'] = [
    {
      issue: {
        ar: 'بطء تصفح المنصة أو تعذر التحميل في ساعات الذروة',
        fr: 'Lenteurs d\'affichage ou saturation aux heures de pointe',
      },
      solution: {
        ar: 'ينصح بمحاولة الولوج في الفترات الصباحية الباكرة أو المساء المتأخر، مع تحديث المتصفح ومسح ذاكرة التخزين المؤقت دون تكرار النقر على زر الإرسال.',
        fr: 'Privilégiez un accès tôt le matin ou en soirée, videz le cache du navigateur et évitez de rafraîchir plusieurs fois pendant la soumission d\'un formulaire.',
      },
    },
    {
      issue: {
        ar: 'رفض الملف بحجة عدم وضوح الوثيقة المرفقة أو تجاوز الحجم',
        fr: 'Rejet pour document illisible ou taille de fichier dépassée',
      },
      solution: {
        ar: 'أعد المسح الضوئي بدقة متوسطة (150 إلى 200 DPI) واحفظ الملف بصيغة PDF واضحة الحواف بعيدا عن الظلال أو الانعكاسات الضوئية.',
        fr: 'Scannez le document à plat entre 150 et 200 DPI, recadrez proprement les bordures et compressez le fichier PDF sous la taille maximale autorisée.',
      },
    },
    {
      issue: {
        ar: 'اختلاف البيانات الشخصية المسجلة عن الحالة المدنية الفعلية',
        fr: 'Incohérence détectée avec les données de l\'état civil',
      },
      solution: {
        ar: 'تقرب من مصلحة الحالة المدنية ببلدية الإقامة أو المصلحة التقنية التابعة لـ ' + arName + ' لطلب تصحيح الرقم الوطني أو تهجئة الاسم في القاعدة المركزية.',
        fr: 'Rapprochez-vous du service d\'état civil de votre APC ou du guichet d\'accueil de ' + frName + ' pour procéder à la mise à jour de votre fiche dans le registre national.',
      },
    },
  ];

  const defaultExtraFaqs: RichGuideContent['extraFaqs'] = [
    {
      question: {
        ar: `هل الخدمات الرقمية عبر موقع ${arName} تغني عن التنقل للمقر؟`,
        fr: `Les téléservices de ${frName} évitent-ils tout déplacement physique ?`,
      },
      answer: {
        ar: 'في معظم الإجراءات الاستعلامية واستخراج الوثائق والدفع الإلكتروني، تغني البوابة كليا عن التنقل. أما المعاملات التي تتطلب فحصا ميدانيا أو بصمة بيومترية، فتسمح البوابة بحجز موعد منظم مسبقا.',
        fr: 'Pour la consultation, l\'extraction d\'attestations et les paiements en ligne, la démarche est 100 % dématérialisée. Seules certaines formalités exigeant une vérification physique ou biométrique nécessitent un passage sur rendez-vous.',
      },
    },
    {
      question: {
        ar: `كيف أتأكد من أن رابط ${acronym} المذكور هنا هو الرابط الرسمي الصحيح؟`,
        fr: `Comment vérifier que le lien ${acronym} référencé est bien officiel ?`,
      },
      answer: {
        ar: `نعتمد حصريا النطاقات الجزائرية الرسمية الموثقة (مثل ${sector.officialUrl.replace(/^https?:\/\//, '').split('/')[0]}) وتخضع كافة الروابط لمراجعة دورية لضمان مطابقتها لإعلانات الجريدة الرسمية والمؤسسات المعنية.`,
        fr: `Nous répertorions exclusivement les domaines officiels vérifiés (${sector.officialUrl.replace(/^https?:\/\//, '').split('/')[0]}) et effectuons un contrôle périodique des adresses institutionnelles.`,
      },
    },
    {
      question: {
        ar: 'ما العمل في حال نسيان كلمة المرور الخاصة بحسابي الإلكتروني؟',
        fr: 'Que faire si j\'ai oublié le mot de passe de mon espace personnel ?',
      },
      answer: {
        ar: 'استخدم رابط استرجاع كلمة المرور في واجهة الدخول الرئيسية عبر البريد الإلكتروني أو رمز SMS المرسل إلى رقم الهاتف الذي اعتمدته عند التسجيل الأولي.',
        fr: 'Utilisez la fonction « Mot de passe oublié » sur la page de connexion afin de recevoir un lien de réinitialisation par e-mail ou un code OTP par SMS.',
      },
    },
  ];

  return {
    intro: override?.intro || baseCategoryIntro,
    eligibilityChecklist: override?.eligibilityChecklist || defaultChecklist,
    stepByStepGuide: override?.stepByStepGuide || defaultSteps,
    troubleshooting: override?.troubleshooting || defaultTroubleshooting,
    extraFaqs: override?.extraFaqs || defaultExtraFaqs,
  };
}
