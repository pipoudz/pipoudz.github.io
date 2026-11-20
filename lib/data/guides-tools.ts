import { ToolItem, ToolRichGuide, ProcedureItem, RichGuideContent } from '@/lib/types';
import { batch1ProcedureGuides } from './batches/procedures-batch-1';
import { batch2ProcedureGuides } from './batches/procedures-batch-2';
import { batch1ToolGuides } from './batches/tools-batch-1';
import { batch2ToolGuides } from './batches/tools-batch-2';
import { batch3ToolGuides } from './batches/tools-batch-3';
import { batch4ToolGuides } from './batches/tools-batch-4';
import { batch5ToolGuides } from './batches/tools-batch-5';
import { batch6ToolGuides } from './batches/tools-batch-6';
import { batch7ToolGuides } from './batches/tools-batch-7';
import { batch8ToolGuides } from './batches/tools-batch-8';

export function getToolRichGuide(tool: ToolItem): ToolRichGuide {
  const arName = tool.name.ar;
  const frName = tool.name.fr;

  const specificTools: Record<string, Partial<ToolRichGuide>> = {
    ...batch1ToolGuides,
    ...batch2ToolGuides,
    ...batch3ToolGuides,
    ...batch4ToolGuides,
    ...batch5ToolGuides,
    ...batch6ToolGuides,
    ...batch7ToolGuides,
    ...batch8ToolGuides,
  };

  // Rich category-specific fallbacks guaranteeing 400+ raw words (500+ total rendered words/page)
  const categoryFallbacks: Record<ToolItem['category'], ToolRichGuide> = {
    calculators: {
      explanation: {
        ar: [
          `تم تطوير أداة "${arName}" لتمنح المواطن، المحاسب، والطالب في الجزائر وسيلة حسابية سريعة ودقيقة تغني عن الحساب اليدوي المعرض للأخطاء أو استخدام تطبيقات تتطلب اشتراكا وإنترنت دائم. تعمل الأداة وفق معادلات رياضية ومالية مضبوطة على المعايير المعتمدة محليا.`,
          `تمتاز هذه الحاسبة بعملها الكامل داخل متصفحك عبر المعالجة المحلية Client-Side، ما يعني أن كل الأرقام والبيانات المالية أو الزمنية التي تدخلها تبقى سرية تماما ولا ترسل إلى أي خادم خارجي. كما تدعم النتائج الفورية إمكانية التعديل التجريبي السريع لمقارنة أكثر من سيناريو مالي أو قياسي.`,
          `للحصول على أدق نتيجة ممكنة من "${arName}"، تأكد من إدخال القيم بالوحدة الصحيحة ومراجعة التفاصيل التفسيرية والأمثلة الموضحة أسفل الواجهة التفاعلية، سواء كنت تخطط لميزانية عائلية، معاملة إدارية، أو مشروع مهني في الجزائر.`,
          `تتكامل هذه الأداة مع بقية المنصات والدلائل الإرشادية المتوفرة في البوابة، بحيث يستطيع المستخدم التحقق من التكاليف التقديرية أو النسب القانونية قبل التوجه إلى الوكالة البنكية أو المصلحة الإدارية المختصة لإتمام معاملاته بثقة تامة.`
        ],
        fr: [
          `L\'outil « ${frName} » a été conçu pour offrir aux citoyens, étudiants et professionnels en Algérie une solution de calcul fiable, instantanée et adaptée aux usages locaux. Il remplace avantageusement les calculs manuels fastidieux en appliquant des formules mathématiques vérifiées.`,
          `Exécutée intégralement en local dans votre navigateur, cette calculatrice garantit la confidentialité absolue de vos chiffres : aucune donnée financière, personnelle ou professionnelle n\'est transmise vers un serveur distant. Vous pouvez ajuster vos paramètres en temps réel pour tester plusieurs hypothèses.`,
          `Pour exploiter pleinement cet outil dans le cadre d\'une démarche administrative, financière ou scolaire en Algérie, vérifiez attentivement les unités de saisie demandées et comparez les résultats obtenus avec l\'exemple détaillé ci-dessous.`,
          `Pensé comme un compagnon pratique des portails publics et bancaires algériens, ce simulateur facilite vos estimations préalables avant toute signature de contrat, demande de financement ou dépôt de dossier officiel.`
        ],
      },
      formulaTitle: {
        ar: 'المبدأ الحسابي والمنهجية المطبقة',
        fr: 'Méthodologie et principe de calcul',
      },
      formulaText: {
        ar: 'تعتمد الحسابات على تطبيق المعادلات القياسية الدقيقة (النسب المئوية، المعاملات الجبائية أو الفوائد أو التحويلات العشرية) مع تقريب النتائج لأقرب رقمين عشريين لضمان الوضوح العملي في التعاملات اليومية بالدينار أو الوحدات الدولية المعتمدة.',
        fr: 'Les calculs s\'appuient sur les formules mathématiques et financières standard (proportions, tranches progressives, coefficients de conversion ou formules calendaires) avec arrondi pratique à deux décimales pour faciliter la lecture en dinars algériens ou unités métriques.',
      },
      practicalExample: {
        title: { ar: `مثال عملي لاستعمال ${arName}`, fr: `Cas pratique d'utilisation — ${frName}` },
        scenario: {
          ar: 'عند الحاجة إلى التحقق من قيمة مالية أو زمنية أو كمية قبل إيداع ملف إداري أو إبرام معاملة تجارية في الجزائر ومقارنة أكثر من خيار متاح.',
          fr: 'Avant de déposer un dossier administratif, d\'établir un devis commercial ou de planifier un budget personnel en Algérie et comparer plusieurs hypothèses.',
        },
        result: {
          ar: 'أدخل القيم الأساسية في الحقول المخصصة أعلى الصفحة لتحصل فورا على النتيجة النهائية والتفاصيل الجزئية القابلة للنسخ أو المراجعة الفورية دون انتظار.',
          fr: 'Saisissez simplement vos valeurs dans les champs ci-dessus pour obtenir instantanément le résultat détaillé, prêt à être vérifié ou recopié dans vos documents.',
        },
      },
      tips: {
        ar: [
          'تحقق من وحدة القياس (دينار، سنتيم، ساعة، كيلومتر) قبل اعتماد النتيجة في الوثائق الرسمية.',
          'يمكنك استخدام زر إعادة الضبط لمسح المدخلات وبدء محاكاة جديدة بنقرة واحدة.',
          'احفظ رابط الأداة في مفضلة المتصفح للرجوع إليها في أي وقت حتى عند ضعف الاتصال بالإنترنت.',
          'قارن نتائج المحاكاة مع الوثائق الرسمية الصادرة عن الإدارة أو البنك قبل الإمضاء النهائي.',
        ],
        fr: [
          'Vérifiez toujours l\'unité de saisie attendue (DZD, centimes, pourcentage ou unité métrique) avant d\'exploiter le résultat.',
          'Utilisez le bouton de réinitialisation pour comparer rapidement plusieurs scénarios chiffrés.',
          'Ajoutez cette page aux favoris de votre navigateur : l\'outil reste fluide même avec une connexion limitée.',
          'Confrontez systématiquement vos estimations avec le barème officiel de votre organisme avant signature.',
        ],
      },
      extraFaqs: [
        {
          question: {
            ar: `هل نتائج حاسبة ${arName} مطابقة للعمل الإداري والبنكي؟`,
            fr: `Les résultats de ${frName} sont-ils fiables pour mes démarches ?`,
          },
          answer: {
            ar: 'تقدم الأداة حسابات دقيقة واسترشادية مبنية على القوانين والمعادلات المعتمدة، ومع ذلك ينصح دائما باعتماد الوثائق الرسمية الصادرة عن المؤسسة المعنية عند توقيع العقود النهائية.',
            fr: 'L\'outil délivre des estimations rigoureuses conformes aux barèmes usuels ; pour toute signature contractuelle définitive, référez-vous aux pièces officielles de l\'organisme concerné.',
          },
        },
        {
          question: {
            ar: 'هل تعمل الحاسبة على الهاتف النقال بنفس كفاءة الحاسوب؟',
            fr: 'L\'outil est-il optimisé sur smartphone et tablette ?',
          },
          answer: {
            ar: 'نعم، صممت الواجهة بمرونة كاملة لتتكيف مع شاشات الهواتف الذكية والأجهزة اللوحية والحواسيب مع دعم تام للوحة المفاتيح الرقمية.',
            fr: 'Oui, l\'interface est entièrement responsive et s\'adapte parfaitement aux écrans mobiles pour une saisie rapide au clavier tactile.',
          },
        },
        {
          question: {
            ar: 'هل تتطلب هذه الحاسبة تسجيلا أو اشتراكا مدفوعا؟',
            fr: 'L\'utilisation de cette calculatrice nécessite-t-elle un compte ?',
          },
          answer: {
            ar: 'لا، جميع الحاسبات والأدوات في البوابة مجانية ومفتوحة كليا للزوار دون إنشاء حساب ودون حفظ أي معطيات شخصية.',
            fr: 'Non, tous les calculateurs du portail sont accessibles gratuitement, sans inscription et sans aucune collecte de données.',
          },
        },
      ],
    },
    study: {
      explanation: {
        ar: [
          `تندرج أداة "${arName}" ضمن منظومة الدعم الدراسي والجامعي المصممة لطلبة البكالوريا، التعليم المتوسط، وطلبة الجامعات الجزائرية (نظام LMD والمدارس العليا). تهدف هذه الأداة إلى تنظيم الجهد الدراسي، تتبع التقدم، وحساب المعاملات والمعدلات أو توثيق المراجع العلمية بدقة أكاديمية.`,
          `يواجه العديد من الطلبة صعوبة في توزيع أوقات المراجعة وتنسيق الأولويات بين المواد الأساسية والمواد الثانوية خلال السنة الدراسية، أو يضيعون وقتا ثمينا في حساب الأرصدة والمعدلات الفصلية يدويا. توفر هذه الأداة بيئة تفاعلية ذكية تساعد على التخطيط الهادئ والمنهجي بعيدا عن التشتت.`,
          `تعمل كافة خصائص "${arName}" داخل متصفحك مباشرة دون تسجيل حساب أو إعلانات مزعجة، مع حفظ تفضيلاتك محليا عندما تتطلب الأداة متابعة قوائم المهام والبطاقات التعليمية، مما يجعلها رفيقا عمليا في المكتبات والأحياء الجامعية.`,
          `سواء كنت تحضر لامتحانات نهاية السنة الوطنية أو تعد مذكرة التخرج في الماستر والدكتوراه أو تخطط لجدول المراجعة الفردية، تمنحك هذه الأداة هيكلية واضحة قابلة للتعديل والتطوير طوال الموسم البيداغوجي.`
        ],
        fr: [
          `L\'outil « ${frName} » fait partie de la suite d\'aide aux études dédiée aux lycéens (Baccalauréat, BEM) et aux étudiants universitaires algériens (système LMD et grandes écoles). Il vise à structurer la préparation aux examens, automatiser les calculs de moyennes ou de crédits et fiabiliser les travaux académiques.`,
          `En période de révisions intensives ou de préparation des mémoires de fin d\'études, la gestion rigoureuse du temps, le suivi des chapitres acquis et le formatage conforme des références bibliographiques font toute la différence sur les résultats finaux.`,
          `Accessible gratuitement sans création de compte, cet utilitaire fonctionne localement dans votre navigateur et s\'adapte aussi bien sur ordinateur portable que sur téléphone lors de vos séances de révision en bibliothèque universitaire.`,
          `Que vous soyez candidat libre aux examens nationaux, étudiant en licence/master ou chercheur rédigeant une bibliographie, l\'interface vous offre un cadre méthodique modulable tout au long de l\'année universitaire.`
        ],
      },
      formulaTitle: {
        ar: 'منهجية التنظيم والتقييم الدراسي المطبقة',
        fr: 'Principe pédagogique et méthode appliquée',
      },
      formulaText: {
        ar: 'تقوم الأداة على ربط المدخلات الدراسية (الساعات، المعاملات، النقاط، التواريخ، أو المراجع) بخوارزميات توزيع وتجميع منهجية مثل تقنية بومودورو، التكرار المتباعد، المعدل المرجح بالمعاملات، ومعيار APA الأكاديمي لتقديم مخرجات جاهزة للتطبيق الفوري.',
        fr: 'L\'outil structure vos paramètres scolaires ou universitaires (coefficients, notes, créneaux horaires, échéances ou citations APA) selon des méthodes éprouvées afin de générer un planning clair, une moyenne pondérée exacte ou une fiche prête à exploiter.',
      },
      practicalExample: {
        title: { ar: `مثال عملي للطالب مع ${arName}`, fr: `Scénario concret pour étudiant — ${frName}` },
        scenario: {
          ar: 'طالب جامعي أو مترشح للبكالوريا يستعد للامتحانات الفصلية خلال فترة أربعة أسابيع ويرغب في ضبط خطته وتقدير نتائجه المتوقعة.',
          fr: 'Un bachelier ou étudiant LMD prépare ses examens semestriels et souhaite organiser ses matières selon leur coefficient et suivre son avancement.',
        },
        result: {
          ar: 'من خلال إدخال المواد والأهداف في الحقول أعلاه، تحصل فورا على خطة متوازنة أو نتيجة دقيقة توضح ما يجب التركيز عليه لرفع التحصيل الدراسي وتفادي ضغط اللحظة الأخيرة.',
          fr: 'En renseignant les données demandées ci-dessus, vous obtenez immédiatement un indicateur précis ou un découpage optimisé pour prioriser vos révisions efficacement.',
        },
      },
      tips: {
        ar: [
          'ابدأ دائما بتخصيص وقت أكبر للمواد ذات المعامل الأعلى ثم خصص حصصا قصيرة للمواد المكملة.',
          'راجع مخرجات الأداة في بداية كل أسبوع بيداغوجي وقم بتعديلها حسب تقدمك الفعلي في الدروس.',
          'احتفظ بنسخة من خطتك أو مراجعك عبر النسخ أو الطباعة لتفادي الضياع أثناء فترة الامتحانات.',
          'امزج بين جلسات التركيز الزمني وحل حوليات المواضيع الرسمية السابقة لترسيخ الفهم.',
        ],
        fr: [
          'Accordez la priorité aux modules à fort coefficient tout en gardant des créneaux réguliers pour les matières complémentaires.',
          'Actualisez vos paramètres au début de chaque semaine selon votre avancement réel dans le programme.',
          'Exportez ou copiez vos résultats pour les conserver hors-ligne dans votre dossier de révision.',
          'Alternez les séquences de synthèse structurées avec la résolution d\'annales officielles des sessions précédentes.',
        ],
      },
      extraFaqs: [
        {
          question: {
            ar: 'هل الأداة متوافقة مع نظام التقييم الجامعي LMD والطور الثانوي في الجزائر؟',
            fr: 'L\'outil est-il adapté au système LMD et aux examens nationaux algériens ?',
          },
          answer: {
            ar: 'نعم، تم تصميم الحقول والقواعد بما يتماشى مع المعاملات والأرصدة والتقويم الدراسي المعمول به في المؤسسات التربوية والجامعات الجزائرية.',
            fr: 'Oui, les critères et coefficients sont pensés pour refléter fidèlement le fonctionnement des lycées et universités en Algérie.',
          },
        },
        {
          question: {
            ar: 'هل يتم فقدان البيانات المدخلة عند إغلاق الصفحة؟',
            fr: 'Mes notes ou plannings sont-ils sauvegardés sur mon appareil ?',
          },
          answer: {
            ar: 'الأدوات التخطيطية التي تتطلب الحفظ تعتمد على التخزين المحلي لمتصفحك (LocalStorage) على نفس الجهاز، مع إمكانية مسحها أو إعادة ضبطها في أي وقت.',
            fr: 'Les outils de suivi conservent vos données dans le stockage local de votre navigateur sur cet appareil uniquement, sans aucun transfert vers Internet.',
          },
        },
        {
          question: {
            ar: 'هل يمكن طباعة المخرجات أو مشاركتها مع زملاء الدراسة؟',
            fr: 'Puis-je imprimer ou exporter le planning et les résultats générés ?',
          },
          answer: {
            ar: 'نعم، يمكنك نسخ المخرجات أو طباعة الصفحة مباشرة عبر المتصفح بصيغة PDF لاستخدامها في مجموعات المراجعة.',
            fr: 'Oui, vous pouvez copier les résultats générés ou utiliser l\'impression navigateur en PDF pour les partager avec votre groupe d\'étude.',
          },
        },
      ],
    },
    'daily-life': {
      explanation: {
        ar: [
          `تهدف أداة "${arName}" إلى مساعدة المواطن والأسرة الجزائرية على تدبير شؤون الحياة اليومية بذكاء وواقعية، سواء تعلق الأمر بتنظيم الميزانية المنزلية مقابل المصاريف الشهرية، تخطيط الوجبات، متابعة المشاريع الفلاحية، أو استكشاف المواقع والخدمات الجغرافية.`,
          `تسمح لك هذه الواجهة التفاعلية بتحويل القرارات اليومية العشوائية إلى جداول وأرقام واضحة تسهل التوفير، التخطيط المسبق للموسم، وتفادي الهدر المالي أو الغذائي. وقد روعيت في صياغتها خصوصية السوق الجزائرية والاحتياجات العملية للمستخدم المحلي.`,
          `بفضل تصميمها البسيط واستجابتها السريعة دون اتصال بالإنترنت، تتيح "${arName}" لأي فرد في العائلة أو المستثمر الفلاحي الصغير استعمالها بسلاسة عبر الهاتف أو الحاسوب مع الحفاظ الكامل على سرية المعلومات العائلية والمالية.`,
          `من خلال المواظبة على تحديث المعطيات داخل الأداة في بداية كل شهر أو موسم، يصبح بإمكان الأسرة أو حامل المشروع بناء رؤية طويلة المدى تساعد على ضبط الأولويات ومواجهة التقلبات الاقتصادية بهدوء وتنظيم.`
        ],
        fr: [
          `L\'outil « ${frName} » accompagne le quotidien des ménages et porteurs de projets en Algérie sur des besoins concrets : pilotage du budget familial, organisation des repas hebdomadaires, suivi agricole saisonnier ou repérage géographique.`,
          `En transformant des estimations informelles en repères chiffrés et structurés, cette interface permet d\'éviter les dépassements budgétaires, de mieux planifier les achats courants et de gagner un temps précieux dans l\'organisation personnelle.`,
          `Exécutée directement dans le navigateur avec une ergonomie mobile intuitive, la solution garantit une confidentialité totale sur vos revenus, dépenses ou plans de gestion sans inscription préalable.`,
          `L\'actualisation régulière de vos postes en début de mois ou de saison agricole favorise une maîtrise durable des charges du foyer et optimise la rentabilité de vos ressources disponibles.`
        ],
      },
      formulaTitle: {
        ar: 'نموذج التخطيط والتوازن العملي',
        fr: 'Modèle d\'organisation et d\'équilibre pratique',
      },
      formulaText: {
        ar: 'تعتمد الأداة على توزيع المعطيات حسب الأولويات والفترات الزمنية (يومي، أسبوعي، أو موسمي) وحساب الفوارق والنسب التقديرية لتقديم توصيات فورية قابلة للتطبيق داخل البيت أو الورشة أو المزرعة.',
        fr: 'L\'algorithme classe vos saisies par postes prioritaires et par périodicité (quotidienne, hebdomadaire ou mensuelle), puis calcule automatiquement les soldes, ratios et besoins prévisionnels.',
      },
      practicalExample: {
        title: { ar: `تطبيق يومي لأداة ${arName}`, fr: `Exemple concret au quotidien — ${frName}` },
        scenario: {
          ar: 'عائلة جزائرية ترغب في ضبط مصاريف الشهر أو جدول الأسبوع بدقة وتفادي العجز أو الارتباك في نهاية الشهر.',
          fr: 'Un foyer souhaite anticiper ses postes de dépenses mensuelles ou organiser son programme hebdomadaire sans imprévu.',
        },
        result: {
          ar: 'بتعبئة البنود الأساسية، تظهر الأداة فورا الرصيد المتبقي أو الجدول الزمني الأمثل مما يسهل اتخاذ قرارات متوازنة ومريحة لكل أفراد العائلة.',
          fr: 'Une fois les postes saisis, l\'outil affiche immédiatement le solde disponible ou le planning détaillé, facilitant les arbitrages prioritaires.',
        },
      },
      tips: {
        ar: [
          'خصص هامشا للطوارئ بنسبة 10% على الأقل في خططك المالية الشهرية.',
          'حدث القيم أسبوعيا للحصول على نظرة حقيقية تطابق الأسعار والمتغيرات الميدانية.',
          'شارك النتائج أو اطبعها لمتابعتها مع أفراد الأسرة أو شركاء العمل.',
          'ركز في الميزانية على النفقات الأساسية الثابتة أولا قبل تحديد مخصصات الكماليات.',
        ],
        fr: [
          'Prévoyez toujours une marge de sécurité d\'environ 10 % pour les imprévus dans vos prévisions.',
          'Mettez à jour vos données chaque semaine afin de rester au plus près des prix réels du marché.',
          'Conservez ou imprimez vos tableaux récapitulatifs pour un suivi partagé et durable.',
          'Priorisez les charges fixes essentielles (logement, énergie, alimentation) avant toute dépense variable.',
        ],
      },
      extraFaqs: [
        {
          question: {
            ar: 'هل تناسب الأداة العملة والقياسات المعتمدة في الجزائر؟',
            fr: 'L\'outil est-il paramétré pour les unités et habitudes en Algérie ?',
          },
          answer: {
            ar: 'نعم، تم إعداد التصنيفات والعملة بالدينار الجزائري والأوزان المترية لتتوافق مباشرة مع الحياة اليومية في جميع الولايات.',
            fr: 'Oui, toutes les rubriques utilisent le Dinar Algérien (DZD) et le système métrique adaptés au contexte algérien.',
          },
        },
        {
          question: {
            ar: 'هل يمكن تعديل العناصر والبيانات بحرية؟',
            fr: 'Puis-je personnaliser librement mes postes et catégories ?',
          },
          answer: {
            ar: 'بالتأكيد، يمكنك إضافة أو تعديل الأرقام والبنود في أي لحظة ورؤية الأثر الحسابي أو التنظيمي فورا.',
            fr: 'Tout à fait : vous pouvez modifier ou ajuster chaque entrée en temps réel pour visualiser immédiatement le nouvel équilibre.',
          },
        },
        {
          question: {
            ar: 'هل تبقى معطياتي العائلية سرية داخل متصفحي؟',
            fr: 'Mes données personnelles restent-elles privées ?',
          },
          answer: {
            ar: 'نعم، لا تخرج أي بيانات مالية أو تخطيطية من جهازك وتبقى محفوظة محليا في متصفحك فقط.',
            fr: 'Oui, aucune information de budget ou de planning n\'est transmise sur un serveur externe.',
          },
        },
      ],
    },
    health: {
      explanation: {
        ar: [
          `صممت أداة "${arName}" كوسيلة للتوعية الصحية الأولية ومتابعة المؤشرات البدنية والغذائية بطريقة مبسطة ومنظمة للأسرة الجزائرية. تساعد هذه الحسابات والاختبارات الذاتية على رصد العلامات المبكرة، حساب الاحتياجات اليومية من السعرات والماء، أو متابعة نمو الأطفال ومواعيد التلقيح المعتمدة.`,
          `تستند المعايير المبرمجة في هذه الواجهة إلى معادلات طبية وتوصيات عالمية معترف بها من هيئات الصحة العمومية ومنظمة الصحة العالمية (مثل معادلة ميفلين سانت جوير للسعرات، مؤشرات نمو الأطفال، وجداول الفرز الاستبياني المعتمدة). وتساعد النتائج على تحضير أسئلة دقيقة قبل استشارة الطبيب المعالج.`,
          `نؤكد أن هذه الأداة التفاعلية ذات طابع توعوي وإرشادي فقط ولا تعوض التشخيص السريري أو الوصفة الطبية المختصة. يتم احتساب كافة إجاباتك محليا على جهازك بخصوصية تامة دون حفظ أي ملف طبي على الإنترنت.`,
          `تتيح المتابعة الدورية للمؤشرات الوقائية في البيت تكوين سجل واضح للتغيرات الصحية مع مرور الأسابيع، وهو ما ييسر عمل الطبيب العام أو المختص في العيادات الجوارية والمستشفيات العمومية عند الفحص السريري.`
        ],
        fr: [
          `L\'outil « ${frName} » est un assistant d\'information et de suivi préventif conçu pour aider les usagers et les familles en Algérie à mieux comprendre leurs indicateurs de santé, leurs besoins nutritionnels ou le calendrier de prévention vaccinale.`,
          `Les calculs et questionnaires intégrés s\'appuient sur des références médicales et recommandations internationales reconnues (équations nutritionnelles validées, courbes de référence OMS ou scores de dépistage standardisés), offrant une première lecture claire avant un rendez-vous médical.`,
          `À titre purement informatif et éducatif, cet outil ne remplace en aucun cas un avis médical, un diagnostic clinique ou une prescription de votre médecin traitant. Toutes vos réponses restent strictement locales sur votre appareil.`,
          `Le suivi régulier de ces repères de prévention contribue à adopter une meilleure hygiène de vie au quotidien et aide à préparer efficacement les consultations auprès des centres de santé de proximité.`
        ],
      },
      formulaTitle: {
        ar: 'المرجعية الصحية وضوابط الاستخدام الآمن',
        fr: 'Référentiel santé et cadre d\'interprétation',
      },
      formulaText: {
        ar: 'يتم تقييم المؤشرات عبر حساب النسبة المتوازنة (BMI، الاحتياج اليومي، عمر الحمل، أو نقاط الاستبيان التراكمية) ومقارنتها بالعتبات المرجعية الطبيعية مع توضيح متى ينبغي مراجعة طبيب مختص أو مركز صحي جواري.',
        fr: 'L\'outil évalue vos paramètres (IMC, besoins énergétiques, terme gestationnel ou score d\'auto-évaluation) face aux seuils cliniques usuels tout en précisant quand une consultation médicale est recommandée.',
      },
      practicalExample: {
        title: { ar: `مثال استرشادي مع ${arName}`, fr: `Illustration pratique — ${frName}` },
        scenario: {
          ar: 'مواطن أو ولي أمر يريد الاطمئنان على مؤشر صحي أو حساب الحاجات الغذائية قبل زيارة المركز الصحي.',
          fr: 'Un parent ou patient souhaite suivre un indicateur préventif ou préparer des repères chiffrés avant sa consultation.',
        },
        result: {
          ar: 'تظهر الأداة تقييما فوريا باللون والدرجة مع توصيات عملية للحفاظ على التوازن الصحي أو استشارة الطبيب عند اللزوم.',
          fr: 'L\'interface délivre immédiatement un niveau indicatif accompagné de repères hygiéno-diététiques ou d\'une recommandation d\'avis médical.',
        },
      },
      tips: {
        ar: [
          'خذ القياسات (الوزن، الطول، أو تواريخ الفحوصات) بدقة وفي ظروف مستقرة لضمان جودة التقدير.',
          'احتفظ بنتائج التقييم الدورية لمناقشتها مع طبيبك خلال المتابعة الصحية الروتينية.',
          'في حالات الأعراض الحادة أو المستعجلة، تواصل فورا مع المصالح الاستشفائية أو رقم الحماية المدنية 14.',
          'استشر طبيب الأسرة أو القابلة قبل تغيير أي نظام غذائي أو علاجي مزمن.',
        ],
        fr: [
          'Relevez vos mesures physiques avec précision et à heure fixe pour un suivi cohérent dans le temps.',
          'Notez vos résultats périodiques afin de les partager avec votre médecin lors de vos bilans.',
          'En cas de symptôme aigu ou d\'urgence vitale, contactez immédiatement les secours (SAMU 1021 ou Protection Civile 14).',
          'Consultez un médecin ou professionnel de santé avant toute modification d\'un traitement ou régime médical.',
        ],
      },
      extraFaqs: [
        {
          question: {
            ar: 'هل تغني نتيجة هذه الأداة عن استشارة الطبيب المختص؟',
            fr: 'Cet outil remplace-t-il une consultation chez le médecin ?',
          },
          answer: {
            ar: 'لا أبدا؛ توفر الأداة مؤشرا أوليا وتوعية علمية مبسطة فقط، ويبقى الفحص الطبي المباشر لدى الطبيب أو العيادة متعددة الخدمات هو المرجع الحصري للتشخيص والعلاج.',
            fr: 'Non, jamais : cet outil délivre uniquement une estimation éducative et préventive. Seul un médecin ou professionnel de santé agréé est habilité à poser un diagnostic.',
          },
        },
        {
          question: {
            ar: 'هل تحفظ الأداة بياناتي الصحية على خوادم البوابة؟',
            fr: 'Mes informations de santé sont-elles collectées ou stockées en ligne ?',
          },
          answer: {
            ar: 'لا، تحترم الأداة القانون الجزائري 18-07 بالكامل وتجري الحسابات داخل المتصفح فقط دون تسجيل أو إرسال أي معطيات صحية.',
            fr: 'Non, conformément à la loi 18-07, l\'intégralité des saisies demeure strictement privée dans votre navigateur sans aucune transmission serveur.',
          },
        },
        {
          question: {
            ar: 'متى يجب التوجه فورا إلى الطبيب بغض النظر عن النتيجة الرقمية؟',
            fr: 'Dans quels cas consulter sans attendre le résultat d\'un test en ligne ?',
          },
          answer: {
            ar: 'عند الشعور بألم حاد، ضيق تنفس، ارتفاع مستمر للحرارة، أو تغير مفاجئ في الوزن أو الأعراض، يجب مراجعة الطبيب فورا.',
            fr: 'En présence de douleurs aiguës, essoufflement, fièvre persistante ou aggravation rapide de l\'état général, consultez immédiatement un service médical.',
          },
        },
      ],
    },
    islamic: {
      explanation: {
        ar: [
          `تقدم أداة "${arName}" خدمة دينية وفلكية ميسرة تهم المواطن الجزائري طوال العام، خصوصا لتحديد التواريخ الهجرية الموافقة للمناسبات الدينية والأيام المباركة أو تحديد اتجاه القبلة بدقة جغرافية انطلاقا من أي ولاية جزائرية.`,
          `تعتمد الحسابات الفلكية في هذه الواجهة على التقاويم القياسية والمعادلات الكروية الجغرافية الدقيقة لربط خط الطول والعرض للمستخدم باتجاه الكعبة المشرفة في مكة المكرمة، أو لتحويل التواريخ بدقة بين التقويمين الهجري والميلادي.`,
          `مع ذلك، يظل إثبات دخول الأشهر القمرية مثل رمضان وشوال وذي الحجة في الجزائر خاضعا حصرا لبيانات اللجنة الوطنية للأهلة والمواقيت الشرعية التابعة لوزارة الشؤون الدينية والأوقاف.`,
          `صممت الواجهة لتعمل بسلاسة دون الحاجة لاتصال مستمر بالشبكة، سواء أثناء السفر داخل التراب الوطني أو عند توثيق المواعيد والعقود الإدارية بالتقويمين معا لدى مختلف المصالح الوطنية.`
        ],
        fr: [
          `L\'outil « ${frName} » répond aux besoins pratiques quotidiens liés au calendrier lunaire musulman et à l\'orientation vers la Qibla depuis n\'importe quelle wilaya d\'Algérie ou de l\'étranger.`,
          `Fondée sur les calculs astronomiques standards et la trigonométrie sphérique (calcul d\'azimut vers La Mecque à partir de la latitude et de la longitude), cette interface offre des repères fiables et instantanés sur mobile et ordinateur.`,
          `Il convient toutefois de rappeler que la validation officielle du début des mois lunaires (Ramadan, Chaoual, Dhou al-Hijja) en Algérie relève exclusivement des communiqués du ministère des Affaires religieuses et des Wakfs.`,
          `Accessible hors-ligne dès son chargement, cet utilitaire vous accompagne aussi bien dans vos déplacements inter-wilayas que dans la correspondance de dates officielles pour vos dossiers et événements familiaux.`
        ],
      },
      formulaTitle: {
        ar: 'الأساس الفلكي والشرعي للأداة',
        fr: 'Base astronomique et repères officiels',
      },
      formulaText: {
        ar: 'يحسب التحويل التاريخي وفق خوارزمية التقويم الهجري الحسابي (أم القرى / الكويت) بينما يعتمد اتجاه القبلة على زاوية السمت الجغرافي بين إحداثيات موقعك وموقع المسجد الحرام (21.4225 شمالا، 39.8262 شرقا).',
        fr: 'La conversion calendaire suit les tables astronomiques standards et l\'azimut Qibla utilise la formule géodésique du grand cercle vers les coordonnées exactes de la Kaaba (21.4225° N, 39.8262° E).',
      },
      practicalExample: {
        title: { ar: `مثال استخدام ${arName}`, fr: `Exemple d'utilisation — ${frName}` },
        scenario: {
          ar: 'تحديد تاريخ مناسبة هجرية لعقد إداري أو ضبط اتجاه الصلاة أثناء السفر بين الولايات الجزائرية.',
          fr: 'Vérifier une correspondance de date hégirienne ou trouver l\'orientation exacte de la Qibla en déplacement.',
        },
        result: {
          ar: 'تظهر النتيجة فورا سواء عبر اختيار الولاية أو تحديد التاريخ، مع وضوح كامل للزاوية الجغرافية أو اليوم المقابل.',
          fr: 'Le résultat s\'affiche instantanément avec la correspondance exacte ou l\'angle azimutal précis depuis votre position.',
        },
      },
      tips: {
        ar: [
          'عند استخدام بوصلة القبلة في الهاتف، ابتعد عن القطع المغناطيسية الكبيرة أو المعدنية للحصول على قراءة أدق.',
          'راجع دائما بيانات وزارة الشؤون الدينية والأوقاف لتأكيد أول أيام شهر رمضان وعيدي الفطر والأضحى.',
          'تأكد من تفعيل خدمة الموقع الجغرافي في المتصفح إذا رغبت في الضبط التلقائي لإحداثيات مدينتك.',
          'تحقق من تطابق اليوم الأسبوعي (الجمعة، السبت...) لتأكيد مطابقة التاريخ الهجري والميلادي.',
        ],
        fr: [
          'Éloignez le téléphone des masses métalliques ou aimantées lors de l\'utilisation d\'une boussole numérique.',
          'Suivez les annonces officielles algériennes pour les dates lunaires liées aux fêtes religieuses.',
          'Autorisez la géolocalisation ou sélectionnez directement votre wilaya pour un calcul immédiat.',
          'Vérifiez la concordance du jour de la semaine pour confirmer immédiatement votre correspondance calendaire.',
        ],
      },
      extraFaqs: [
        {
          question: {
            ar: 'لماذا قد يختلف التاريخ الهجري الحسابي بيوم واحد أحيانا؟',
            fr: 'Pourquoi le calendrier hégirien calculé peut-il varier d\'un jour ?',
          },
          answer: {
            ar: 'يعتمد التقويم الفلكي على الحسابات المسبقة، في حين تستند الرؤية الشرعية الرسمية في الجزائر على تحري الهلال بالعين المجردة والأجهزة البصرية في ليلة الشك.',
            fr: 'La conversion mathématique repose sur les calculs astronomiques, alors que les mois officiels dépendent de l\'observation effective du croissant lunaire.',
          },
        },
        {
          question: {
            ar: 'هل يمكن تحديد القبلة دون تفعيل GPS؟',
            fr: 'Puis-je connaître l\'angle de la Qibla sans activer le GPS ?',
          },
          answer: {
            ar: 'نعم، تتيح الأداة اختيار الولاية أو المدينة الجزائرية يدويا لحساب زاوية القبلة من الشمال الجغرافي بدقة.',
            fr: 'Oui, vous pouvez sélectionner directement votre wilaya ou ville afin d\'obtenir l\'angle exact par rapport au nord géographique.',
          },
        },
        {
          question: {
            ar: 'هل تعمل هذه الأداة في جميع الدول لأبناء الجالية؟',
            fr: 'L\'outil fonctionne-t-il également hors d\'Algérie pour la diaspora ?',
          },
          answer: {
            ar: 'نعم، تعمل الحسابات الفلكية والتقويمية عالميا دون أي قيود جغرافية.',
            fr: 'Oui, les algorithmes astronomiques et calendaires s\'appliquent partout dans le monde.',
          },
        },
      ],
    },
    productivity: {
      explanation: {
        ar: [
          `توفر أداة "${arName}" بيئة عمل مكتبية ورقمية مجانية موجهة للموظفين، المقاولين الذاتيين، أصحاب المتاجر، والطلبة في الجزائر لتسريع إنجاز المهام الإدارية والتقنية اليومية مباشرة من المتصفح دون الحاجة لتنصيب برامج مدفوعة أو ثقيلة.`,
          `تتنوع استخدامات هذه المجموعة الإنتاجية بين تحرير الفواتير المهنية المتوافقة مع البيانات الجبائية NIF/NIS، بناء السيرة الذاتية، معالجة ملفات PDF والصور قبل رفعها إلى المنصات الحكومية مثل عدل والوظيفة العمومية، وصولا إلى توليد رموز QR أو إدارة المخزون والقاموس العربي.`,
          `تعمل كافة المعالجات البرمجية على جهازك محليا وبأمان تام، مما يضمن بقاء مستنداتك الخاصة وفواتيرك وبيانات ملفاتك تحت سيطرتك الكاملة دون رفعها إلى أي خادم خارجي عبر الإنترنت.`,
          `صممت هذه الأدوات التفاعلية لتختصر ساعات من العمل اليدوي المتكرر وتساعد الشباب والمؤسسات المصغرة على إنتاج وثائق منظمة ونظيفة تلبي المتطلبات الشكلية للإدارات والبنوك والزبائن.`
        ],
        fr: [
          `L\'outil « ${frName} » offre aux auto-entrepreneurs, commerçants, employés et candidats en Algérie un utilitaire bureautique rapide et gratuit accessible directement dans le navigateur sans installation logicielle lourde.`,
          `Qu\'il s\'agisse de générer une facture conforme aux mentions fiscales algériennes (NIF, NIS, RC), de rédiger un CV clair, de compresser des justificatifs PDF/images pour les portails publics (AADL, Concours, ANEM) ou de créer un code QR, la productivité quotidienne est nettement renforcée.`,
          `Tout le traitement technique s\'effectue côté client sur votre poste ou smartphone : vos documents confidentiels, photos d\'identité et factures ne quittent jamais votre appareil.`,
          `Pensée pour les porteurs de projets et particuliers, cette interface vous aide à produire des livrables propres et structurés répondant aux standards des administrations et partenaires commerciaux.`
        ],
      },
      formulaTitle: {
        ar: 'خصائص المعالجة المكتبية وحماية الملفات',
        fr: 'Fonctionnement technique et sécurité des documents',
      },
      formulaText: {
        ar: 'تعالج الواجهة النصوص والملفات والنماذج محليا داخل ذاكرة المتصفح المؤقتة (HTML5 Canvas / PDF-Lib / Web APIs) لإخراج نسخ جاهزة للطباعة أو التحميل الفوري بالحجم والجودة المطلوبة في المنصات الوطنية.',
        fr: 'L\'interface exploite directement les capacités natives du navigateur pour formater, compresser ou exporter vos fichiers prêts à l\'impression ou au téléversement sur les guichets officiels.',
      },
      practicalExample: {
        title: { ar: `نموذج تطبيق عملي مع ${arName}`, fr: `Cas pratique en entreprise ou démarche — ${frName}` },
        scenario: {
          ar: 'مواطن أو مقاول ذاتي يريد تجهيز ملف إداري أو وثيقة تجارية في أقل من خمس دقائق.',
          fr: 'Un auto-entrepreneur ou candidat souhaite préparer un document propre et conforme en quelques minutes.',
        },
        result: {
          ar: 'بمجرد إدخال البيانات أو سحب الملف في المنطقة التفاعلية، تصدر النتيجة النهائية جاهزة للتحميل أو النسخ دون علامات مائية.',
          fr: 'Dès la saisie ou l\'importation effectuée, le rendu final est généré sans filigrane et prêt à être téléchargé ou imprimé.',
        },
      },
      tips: {
        ar: [
          'راجع دائما صحة الأرقام الجبائية والبيانات الشخصية قبل تصدير الفاتورة أو السيرة الذاتية بصيغة PDF.',
          'عند ضغط الصور والوثائق لمنصات التسجيل الحكومية، حافظ على وضوح النصوص والأختام لتفادي الرفض الإداري.',
          'استخدم ميزة المعاينة أو الطباعة لتأكيد تناسق الصفحة على مقاس A4 القياسي.',
          'احفظ نسخة احتياطية من ملفاتك النهائية على حاسوبك أو سحابتك الخاصة فور انتهاء المعالجة.',
        ],
        fr: [
          'Relisez attentivement vos identifiants fiscaux ou coordonnées avant l\'exportation finale en PDF.',
          'Veillez à conserver une lisibilité nette des tampons et écritures lorsque vous compressez des justificatifs administratifs.',
          'Utilisez l\'aperçu d\'impression A4 pour garantir une mise en page irréprochable.',
          'Sauvegardez immédiatement une copie de vos fichiers générés avant de fermer l\'onglet du navigateur.',
        ],
      },
      extraFaqs: [
        {
          question: {
            ar: 'هل يتم رفع ملفاتي أو صوري الشخصية إلى خادم خارجي عند استخدام الأداة؟',
            fr: 'Mes fichiers PDF ou images sont-ils envoyés vers un serveur externe ?',
          },
          answer: {
            ar: 'لا إطلاقا؛ تجري كافة عمليات التوليد والضغط والمعالجة محليا داخل جهازك عبر تقنيات المتصفح الحديثة دون نقل أي ملف عبر الشبكة.',
            fr: 'Jamais : toutes les opérations de conversion, compression ou génération s\'exécutent à 100 % en local dans la mémoire de votre navigateur.',
          },
        },
        {
          question: {
            ar: 'هل المخرجات مجانية وخالية من العلامات المائية؟',
            fr: 'Les documents générés contiennent-ils un filigrane ou des frais cachés ?',
          },
          answer: {
            ar: 'نعم، الأداة مجانية كليا دون أي قيود على عدد الاستخدامات ولا تضيف أي علامات مائية على ملفاتك.',
            fr: 'L\'outil est 100 % gratuit, illimité et génère des documents propres sans aucun filigrane.',
          },
        },
        {
          question: {
            ar: 'ما هي صيغ الملفات المدعومة عند التصدير والطباعة؟',
            fr: 'Quels formats sont compatibles lors de l\'exportation ?',
          },
          answer: {
            ar: 'تدعم الأدوات معايير الويب القياسية مثل PDF وPNG وSVG والنصوص المنسقة الجاهزة للرفع على المواقع الوطنية.',
            fr: 'Les utilitaires exploitent les formats standards PDF, PNG, SVG ou texte brut acceptés sur tous les portails publics.',
          },
        },
      ],
    },
  };

  const base = categoryFallbacks[tool.category];
  const ov = specificTools[tool.slug];

  return {
    quickSummary: ov?.quickSummary,
    explanation: ov?.explanation || base.explanation,
    formulaTitle: ov?.formulaTitle || base.formulaTitle,
    formulaText: ov?.formulaText || base.formulaText,
    practicalExample: ov?.practicalExample || base.practicalExample,
    comparisonTable: ov?.comparisonTable,
    tips: ov?.tips || base.tips,
    extraFaqs: ov?.extraFaqs ?? base.extraFaqs,
  };
}

export function getProcedureRichGuide(proc: ProcedureItem): RichGuideContent {
  const arTitle = proc.title.ar;
  const frTitle = proc.title.fr;
  const entityAr = proc.responsibleEntity.ar;
  const entityFr = proc.responsibleEntity.fr;

  const procedureOverrides: Record<string, Partial<RichGuideContent>> = {
    ...batch1ProcedureGuides,
    ...batch2ProcedureGuides,
  };
  const ov = procedureOverrides[proc.slug];

  return {
    intro: ov?.intro || {
      ar: [
        `تمثل معاملة "${arTitle}" التي تشرف عليها ${entityAr} واحدة من أهم الإجراءات الإدارية التي يحتاجها المواطن في مساره المهني أو العائلي بالجزائر. وقد سمح الانتقال الرقمي عبر البوابة المعتمدة باختصار مسافة التنقل وتقليص آجال المعالجة إلى (${proc.estimatedDuration.ar}) بتكلفة (${proc.cost.ar}).`,
        `لضمان قبول ملفك من المرة الأولى دون تعطيل، يجب تجهيز المستندات الأساسية والتحقق من تطابق بيانات الحالة المدنية مع رقم التعريف الوطني NIN، مع احترام الخطوات التسلسلية الموضحة بدقة على المنصة الرسمية.`,
        `يجمع لك هذا الدليل الإرشادي خلاصة عملية تتضمن قائمة الأهلية والجاهزية، كيفية تخطي الأخطاء الشائعة أثناء التسجيل الإلكتروني، والوثائق اللازمة في الحالات الإجبارية والاختيارية دون اللجوء إلى وسطاء غير معتمدين.`,
        `ننصح دائما بطباعة وصل الإيداع الإلكتروني أو حفظ نسخة PDF منه بمجرد تأكيد الطلب في المنصة، حيث يضم هذا الوصل الرقم المرجعي الذي يسهل متابعة الملف أو استخراج النسخة النهائية المزودة برمز التحقق QR.`
      ],
      fr: [
        `La démarche « ${frTitle} », placée sous la responsabilité de ${entityFr}, compte parmi les formalités administratives essentielles pour les citoyens algériens. Sa mise en ligne sur le guichet officiel permet désormais d\'optimiser le délai d\'obtention (${proc.estimatedDuration.fr}) pour un coût transparent (${proc.cost.fr}).`,
        `Pour garantir une validation dès le premier dépôt sans aller-retour inutile en agence ou en mairie, il est primordial de vérifier l\'exactitude de votre numéro d\'identification national (NIN), la lisibilité des pièces jointes et le respect de l\'ordre des étapes.`,
        `Ce guide récapitulatif complète la fiche officielle avec les prérequis de préparation, la résolution des incidents courants et des réponses précises aux interrogations fréquentes.`,
        `Conservez systématiquement l\'accusé de réception PDF généré à l\'issue de la téléprocédure : son numéro de suivi permet de vérifier l\'état d\'avancement à distance et de télécharger le justificatif authentifié par code QR dès validation.`
      ],
    },
    eligibilityChecklist: ov?.eligibilityChecklist || {
      ar: [
        'حيازة بطاقة التعريف الوطنية البيومترية أو جواز سفر ساري الصلاحية مع رقم NIN صحيح.',
        'توفر رقم هاتف شخصي نشط وبريد الكتروني صحيح لتلقي إشعارات الحالة ورموز التأكيد.',
        'التحقق المسبق من مطابقة تهجئة الاسم واللقب بالحروف اللاتينية في حالة الوثائق الموجهة للخارج أو الأبوستيل.',
        'تجهيز البطاقة الذهبية أو بطاقة CIB إذا كانت المعاملة تتطلب دفع طابع جبائي إلكتروني.',
        'مسح المرفقات الثبوتية بوضوح بصيغة PDF وتفادي الملفات المضغوطة المشوهة أو غير المقروءة.',
      ],
      fr: [
        'Détenir une carte nationale biométrique ou un passeport valide avec NIN exact.',
        'Disposer d\'un numéro de téléphone mobile actif et d\'une adresse e-mail personnelle pour le suivi.',
        'Contrôler l\'orthographe en caractères latins de l\'état civil, en particulier pour les actes destinés à l\'international ou à l\'apostille.',
        'Disposer d\'une carte Edahabia ou CIB si la procédure implique le paiement d\'un timbre fiscal dématérialisé.',
        'Préparer des copies PDF nettes et lisibles respectant la taille maximale autorisée par le guichet.',
      ],
    },
    stepByStepGuide: ov?.stepByStepGuide || proc.steps.map((s) => ({
      title: s.title,
      detail: s.detail,
    })),
    troubleshooting: ov?.troubleshooting || [
      {
        issue: {
          ar: 'عدم تطابق البيانات المدخلة مع سجل الحالة المدنية أو المنصة الوطنية',
          fr: 'Non-concordance détectée avec le fichier national ou l\'état civil',
        },
        solution: {
          ar: 'تأكد من تاريخ الميلاد ورقم الشهادة كما يظهر في مستخرج 12S، أو تقدم لأقرب مصلحة مختصة لـ ' + entityAr + ' لتصحيح التقييد الإلكتروني.',
          fr: 'Vérifiez le numéro d\'acte sur votre extrait 12S ou rapprochez-vous du guichet compétent de ' + entityFr + ' pour mettre à jour votre fiche.',
        },
      },
      {
        issue: {
          ar: 'عدم التمكن من استكمال خطوة الدفع أو طباعة وصل الإيداع',
          fr: 'Impossible de finaliser le paiement ou d\'éditer l\'accusé de réception',
        },
        solution: {
          ar: 'تحقق من السماح بفتح النوافذ المنبثقة (Pop-ups) في المتصفح وتأكد من رصيد البطاقة ثم قم بتحديث صفحة حالة الطلب بعد دقيقتين.',
          fr: 'Autorisez les fenêtres pop-up pour le téléchargement du récépissé PDF, vérifiez votre plafond bancaire et actualisez l\'historique de votre dossier.',
        },
      },
      {
        issue: {
          ar: 'انتهاء مهلة سحب الوثيقة أو تأخر التعيين في الموعد',
          fr: 'Délai dépassé ou attente prolongée de validation du rendez-vous',
        },
        solution: {
          ar: 'تابع حالة الطلب برقم التتبع عبر المنصة الرسمية، وفي حال تعذر التحميل توجه للمصلحة المعنية مرفوقا بنسخة من وصل التسجيل.',
          fr: 'Consultez l\'état d\'avancement à l\'aide de votre numéro de dossier en ligne et présentez l\'accusé imprimé au guichet d\'accueil en cas de blocage prolongé.',
        },
      },
    ],
    extraFaqs: ov?.extraFaqs ?? [
      {
        question: {
          ar: `كم تستغرق معالجة طلب "${arTitle}" في الظروف العادية؟`,
          fr: `Quel est le délai habituel pour finaliser la démarche « ${frTitle} » ?`,
        },
        answer: {
          ar: `تتراوح المدة الاعتيادية للمعالجة حوالي (${proc.estimatedDuration.ar}) عند تقديم ملف مكتمل وصحيح، وقد تختلف طفيفا خلال فترات الضغط الموسمي.`,
          fr: `Le délai standard constaté est d\'environ (${proc.estimatedDuration.fr}) lorsque le dossier est complet et conforme.`,
        },
      },
      {
        question: {
          ar: 'هل يمكن متابعة الإجراء بالنيابة عن أحد أفراد العائلة؟',
          fr: 'Un membre de la famille peut-il suivre ou retirer le dossier par procuration ?',
        },
        answer: {
          ar: 'في الخدمات الرقمية المحمولة يفضل تقديم الطلب باسم المعني مباشرة، أما السحب الحضوري لبعض الوثائق الحساسة فيشترط الحضور الشخصي أو توكيلا رسميا ساري المفعول.',
          fr: 'Le dépôt en ligne doit être initié au nom du demandeur ; pour un retrait physique de document sensible, la présence du titulaire ou une procuration légalisée est généralement requise.',
        },
      },
      {
        question: {
          ar: 'هل للوثيقة الإلكترونية المستخرجة نفس القوة القانونية للوثيقة الورقية؟',
          fr: 'Le document électronique téléchargé a-t-il la même valeur légale que l\'original papier ?',
        },
        answer: {
          ar: 'نعم، تمنح التشريعات الجزائرية للوثائق الإدارية المزودة بالتوقيع الرقمي ورمز الاستجابة السريعة QR حجية قانونية كاملة أمام جميع الإدارات والمؤسسات.',
          fr: 'Oui, la réglementation algérienne reconnaît pleinement la validité des actes électroniques munis d\'une signature numérique et d\'un code QR de vérification.',
        },
      },
    ],
  };
}
