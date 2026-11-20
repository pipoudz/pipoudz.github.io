import { BlogArticle } from '@/lib/types';

export const blogArticlesPart2: BlogArticle[] = [
  {
    slug: 'sntf-train-travel-guide',
    category: { ar: 'النقل والسكك الحديدية', fr: 'Transports & Mobilité' },
    publishedAt: '2026-04-04',
    updatedAt: '2026-05-03',
    readTimeMinutes: 7,
    title: {
      ar: 'دليل السفر عبر قطارات الجزائر SNTF: الخطوط الكبرى، قطار المطار، والتعريفات المخفضة',
      fr: 'Guide complet des trains SNTF en Algérie : grandes lignes Coradia, navette aéroport et tarifs',
    },
    excerpt: {
      ar: 'دليلك العملي لتنظيم رحلاتك بالقطار عبر الشبكة الوطنية SNTF: البحث عن المواقيت، قطارات كوراديا، خط مطار هواري بومدين، والخطوط الصحراوية والبطاقات الشهرية.',
      fr: 'Organisez vos déplacements ferroviaires avec la SNTF : horaires banlieue d\'Alger, trains Coradia Est/Ouest, navette aéroport, lignes sahariennes et cartes d\'abonnement.',
    },
    quickAnswer: {
      ar: 'تشغل الشركة الوطنية للنقل بالسكك الحديدية SNTF أربعة محاور رئيسية: شبكة ضواحي الجزائر ومطار هواري بومدين كل نصف ساعة، القطارات السريعة كوراديا نحو وهران وقسنطينة وسطيف وعنابة وبجاية، القطارات الليلية الصحراوية نحو تقرت وبشار، والخط الدولي نحو تونس، بتسعيرات اقتصادية وتخفيضات هامة للطلبة والعائلات.',
      fr: 'La SNTF assure quatre réseaux complémentaires en Algérie : la banlieue d\'Alger incluant la navette directe vers l\'aéroport Houari Boumediene, les trains rapides Coradia reliant Alger à Oran, Constantine, Annaba, Sétif et Béjaïa, les trains couchettes sahariens vers Touggourt et Béchar, ainsi que la liaison internationale vers Tunis.',
    },
    sections: [
      {
        heading: {
          ar: 'خريطة الشبكة الوطنية للسكك الحديدية والخطوط الأكثر طلبا',
          fr: 'Présentation des grands axes ferroviaires et dessertes SNTF',
        },
        paragraphs: {
          ar: [
            'يشهد النقل بالسكك الحديدية في الجزائر توسعا ملحوظا بوصفه الخيار الأكثر أمانا واقتصادا للربط بين الحواضر الكبرى والولايات الداخلية مقارنة بسيارات الأجرة أو الحافلات عبر الطرق السيارة المزدحمة. وتنقسم شبكة الشركة الوطنية للنقل بالسكك الحديدية SNTF إلى قطارات الضواحي ذات التردد العالي حول الجزائر العاصمة ووهران وقسنطينة، وقطارات الخطوط الكبرى والجهوية السريعة المزودة بعربات كوراديا الحديثة.',
            'يمثل قطار مطار هواري بومدين الدولي من محطة آغا وباب الزوار حلا مثاليا للمسافرين لتجنب الازدحام المروري بتسعيرة ثابتة قدرها 80 دج وزمن رحلة لا يتجاوز 20 دقيقة. أما على المسافات الطويلة، فتصل القطارات المكيفة بين الجزائر ووهران في نحو أربع ساعات فقط مع خدمات إطعام مدمجة ومقاعد مرقمة مريحة.'
          ],
          fr: [
            'Le rail s\'impose aujourd\'hui comme une alternative fiable, sûre et très économique face aux encombrements routiers inter-wilayas. Le réseau exploité par la SNTF s\'articule autour de rames électriques de banlieue à cadencement fréquent (Alger, Oran, Constantine) et de trains rapides modernes de type Coradia desservant les grandes métropoles de l\'Est, de l\'Ouest et des Hauts Plateaux.',
            'Pour les voyageurs aériens, la navette directe reliant la gare de l\'Agha et Bab Ezzouar à l\'Aéroport International d\'Alger évite tout aléa de circulation en seulement vingt minutes pour un tarif symbolique de 80 DZD. Sur les grands trajets, les liaisons Alger-Oran ou Alger-Constantine offrent confort climatisé, places numérotées et voiture bar.'
          ],
        },
        bullets: {
          ar: [
            'قطارات الضواحي الكهربائية: نحو الثنية، البليدة، العفرون، زرالدة، وتيزي وزو.',
            'قطارات كوراديا السريعة: تربط العاصمة بكل من وهران، قسنطينة، عنابة، باتنة، وتبسة.',
            'الخطوط الصحراوية الليلية: رحلات مجهزة بمقصورات نوم نحو تقرت وبشار.',
          ],
          fr: [
            'Lignes de banlieue électrifiées : Thénia, Blida, El Affroun, Zéralda et Tizi Ouzou.',
            'Grandes lignes Coradia : liaisons quotidiennes vers Oran, Constantine, Annaba, Batna et Béjaïa.',
            'Trains de nuit sahariens : dessertes couchettes confortables vers Touggourt et Béchar.',
          ],
        },
      },
      {
        heading: {
          ar: 'كيفية البحث عن المواعيد وشراء التذاكر دون أخطاء',
          fr: 'Consulter les horaires officiels et réserver votre titre de transport',
        },
        paragraphs: {
          ar: [
            'للاطلاع الدقيق على مواعيد الانطلاق والوصول قبل التنقل إلى المحطة، وفرنا في بوابتنا أداة تفاعلية شاملة لاستكشاف رحلات SNTF تتيح اختيار محطة المغادرة ومحطة الوصول أو الفرز حسب الخط، مع إمكانية التحقق الدائم عبر الموقع الرسمي sntf.dz وتنبيهات التوقيت الصيفي أو الرمضاني.',
            'في قطارات الخطوط الكبرى وقطارات الصحراء الليلية، ينصح باقتناء التذكرة مسبقا من شباك المحطة قبل يوم السفر على الأقل، خاصة في عطلة نهاية الأسبوع والمواسم الدينية والجامعية. أما في قطارات الضواحي، فتباع التذاكر فورا قبل الصعود ويمكن الاستعانة بآلات البيع السريع في المحطات الكبرى.'
          ],
          fr: [
            'Avant chaque déplacement, notre explorateur ferroviaire SNTF intégré au portail vous permet de filtrer instantanément les trains disponibles entre deux gares et d\'identifier les horaires de départ, les arrêts intermédiaires et les durées moyennes de parcours. Pour les adaptations saisonnières (été ou Ramadan), vérifiez toujours les avis actualisés sur sntf.dz.',
            'Sur les lignes Coradia et les trains couchettes du Sud, il est vivement conseillé d\'acheter votre billet à l\'avance au guichet afin de garantir votre siège numéroté, notamment les jeudis, dimanches et périodes de vacances scolaires. Sur la banlieue, les billets s\'achètent directement avant l\'embarquement.'
          ],
        },
      },
      {
        heading: {
          ar: 'الاستفادة من بطاقات التخفيض والاشتراكات الشهرية والطلابية',
          fr: 'Réductions tarifaires et abonnements étudiants, salariés et familles',
        },
        paragraphs: {
          ar: [
            'تتيح الشركة الوطنية للنقل بالسكك الحديدية باقات تخفيض سخية تخفف العبء المالي عن المستعملين المنتظمين؛ إذ تمنح بطاقات الاشتراك الأسبوعية والشهرية والفصلية في ضواحي الجزائر والولايات الأخرى خصما يتراوح بين 40% و60% مقارنة بشراء التذاكر اليومية الفردية.',
            'كما يستفيد الطلبة الجامعيون والتلاميذ والمتقاعدون وأفراد الجيش والحماية المدنية من تخفيضات قانونية خاصة عند تقديم شهادة التسجيل الجامعي أو الوثيقة المهنية سارية الصلاحية عند شباك البطاقات بالمحطة الرئيسية.'
          ],
          fr: [
            'Pour les trajets domicile-travail ou universitaires réguliers, l\'abonnement rail représente une économie considérable. Les cartes hebdomadaires, mensuelles, trimestrielles ou annuelles offertes par la SNTF permettent de réduire le budget transport de 40 % à 60 % par rapport aux billets unitaires quotidiens.',
            'Des réductions tarifaires spécifiques s\'appliquent également aux étudiants munis de leur carte universitaire en cours de validité, aux seniors retraités, aux familles nombreuses ainsi qu\'aux jeunes voyageurs selon les barèmes affichés en gare.'
          ],
        },
      },
      {
        heading: {
          ar: 'قواعد الأمتعة والتنقل المريح للركاب عبر المحاور الطويلة',
          fr: 'Règles de bagages et conseils pratiques pour un voyage serein',
        },
        paragraphs: {
          ar: [
            'ينصح المسافرون على متن القطارات الكبرى بالوصول إلى المحطة قبل موعد الانطلاق بعشرين دقيقة على الأقل لإتمام مراقبة التذاكر والاستقرار في العربة المرقمة دون ارتباك. وتسمح القواعد التنظيمية باصطحاب الأمتعة الشخصية والحقائب المعتادة مجانا في رفوف العربة المخصصة.',
            'في حالات السفر نحو الولايات الصحراوية على متن القطارات الليلية، تتوفر درجة المقصورات المغلقة المزودة بأسرة وأغطية نظيفة، مما يمنح العائلات والطلبة راحة مثالية والوصول صباحا إلى تقرت أو بشار دون إرهاق الطريق الطويل.'
          ],
          fr: [
            'Lors d\'un voyage sur grande ligne, présentez-vous en gare au moins 20 minutes avant l\'heure affichée afin de passer le contrôle des titres d\'accès et de rejoindre sereinement le numéro de voiture inscrit sur votre billet. Les bagages à main et valises standards sont admis gratuitement dans les compartiments dédiés.',
            'Sur les dessertes nocturnes vers le Grand Sud (Touggourt ou Béchar), la réservation d\'une place en voiture-couchettes garantit repos et sécurité pour les familles et travailleurs, permettant d\'arriver à destination dès le matin.'
          ],
        },
      },
      {
        heading: {
          ar: 'الربط متعدد الوسائط بين القطار والترامواي والميترو وتوقيت الأعياد والمواسم',
          fr: 'Correspondances tramway/métro et organisation des départs en haute saison',
        },
        paragraphs: {
          ar: [
            'تتميز المحطات السككية الجزائرية الكبرى بارتباطها المباشر بشبكات النقل الحضري الحديث، مما يجعل التنقل من محطة القطار إلى وسط المدينة أو الأحياء الجامعية سريعا ومنخفض التكلفة. ففي الجزائر العاصمة ترتبط محطة آغا ومحطة الحراش وباب الزوار بخطوط الميترو والترامواي والحافلات الحضرية إيتوزا، كما يتكامل النقل بالسكك الحديدية في وهران وقسنطينة وسطيف وسيدي بلعباس وورقلة مع مسارات الترامواي.',
            'وخلال فترات الذروة مثل الأعياد الدينية وعطلة الصيف والدخول الجامعي في سبتمبر، قد تعمد الشركة الوطنية للنقل بالسكك الحديدية إلى برمجة رحلات إضافية أو تكييف ساعات الانطلاق. لذلك من الحكمة مراجعة مستجدات التوقيت عبر بوابتنا أو الموقع الرسمي للشركة قبل 24 ساعة من موعد السفر، والحضور باكرا في العطلات لتأمين مقاعد مريحة.'
          ],
          fr: [
            'Les principales gares ferroviaires du pays bénéficient désormais d\'une excellente intermodalité avec les réseaux urbains. À Alger, les pôles d\'Agha, d\'El Harrach et de Bab Ezzouar communiquent aisément avec le métro, le tramway et les lignes ETUSA, tandis qu\'à Oran, Constantine, Sétif ou Sidi Bel Abbès, les correspondances tramway permettent de rejoindre rapidement les centres universitaires et administratifs.',
            'À l\'approche des fêtes religieuses, des congés estivaux et de la rentrée universitaire de septembre, des trains supplémentaires ou aménagements horaires sont régulièrement mis en place. Pensez à consulter les avis actualisés 24 heures avant le départ et à réserver vos places numérotées en avance lors des week-ends prolongés.'
          ],
        },
        bullets: {
          ar: [
            'استغلال قطار مطار الجزائر للربط السريع مع محطة الحراش والميترو نحو قلب العاصمة.',
            'الاستعلام عن أوقات القطارات الليلية ومقصورات النوم قبل الرحلات الصحراوية بثلاثة أيام.',
            'الاحتفاظ بتذكرة السفر طوال الرحلة وحتى الخروج من بوابات المحطة النهائية.',
          ],
          fr: [
            'Combinez la navette aéroport d\'Alger avec le métro d\'El Harrach pour rejoindre le centre-ville rapidement.',
            'Réservez vos couchettes plusieurs jours à l\'avance pour les trajets vers Béchar ou Touggourt.',
            'Conservez votre titre de transport jusqu\'à la sortie définitive de la gare d\'arrivée.',
          ],
        },
      },
    ],
    comparisonTable: {
      headers: [
        { ar: 'نوع الخط', fr: 'Type de ligne' },
        { ar: 'أبرز المحطات', fr: 'Principales gares' },
        { ar: 'المدة التقريبية', fr: 'Durée moyenne' },
        { ar: 'التسعيرة الاسترشادية', fr: 'Tarif indicatif' },
      ],
      rows: [
        [
          { ar: 'قطار مطار الجزائر', fr: 'Navette Aéroport' },
          { ar: 'آغا - باب الزوار - المطار', fr: 'Agha - Bab Ezzouar - Aéroport' },
          { ar: '20 دقيقة', fr: '20 minutes' },
          { ar: '80 دج', fr: '80 DZD' },
        ],
        [
          { ar: 'الخط السريع غرب', fr: 'Grande Ligne Ouest' },
          { ar: 'الجزائر - الشلف - وهران', fr: 'Alger - Chlef - Oran' },
          { ar: '4 ساعات', fr: '4 heures' },
          { ar: '950 - 1,450 دج', fr: '950 à 1 450 DZD' },
        ],
        [
          { ar: 'الخط السريع شرق', fr: 'Grande Ligne Est' },
          { ar: 'الجزائر - سطيف - قسنطينة', fr: 'Alger - Sétif - Constantine' },
          { ar: '6 ساعات', fr: '6 heures' },
          { ar: '1,100 - 1,600 دج', fr: '1 100 à 1 600 DZD' },
        ],
        [
          { ar: 'الخط الصحراوي الليلي', fr: 'Ligne Sahara Couchettes' },
          { ar: 'المحمدية / وهران - بشار / تقرت', fr: 'Alger / Oran - Touggourt / Béchar' },
          { ar: 'ليلة كاملة', fr: 'Trajet de nuit' },
          { ar: '1,300 - 2,400 دج', fr: '1 300 à 2 400 DZD' },
        ],
      ],
    },
    relatedSectors: ['sntf-schedule', 'sntf', 'transport'],
    relatedTools: [
      { category: 'calculators', slug: 'fuel-calculator', label: { ar: 'مقارنة تكلفة القطار مع الوقود', fr: 'Comparer Coût Train vs Carburant' } },
      { category: 'daily-life', slug: 'maps', label: { ar: 'خرائط ومسارات المحطات', fr: 'Cartes & Localisation Gares' } },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن شراء تذكرة القطار إلكترونيا عبر الإنترنت في الجزائر؟',
          fr: 'L\'achat des billets SNTF est-il disponible en ligne ?',
        },
        answer: {
          ar: 'تركز خدمة الويب على نشر الجداول الزمنية الرسمية وإعلانات الخطوط، بينما تتم عملية اقتناء التذاكر أساسا في شبابيك المحطات مع التوسع التدريجي لحلول الحجز المرقمنة.',
          fr: 'La consultation des horaires s\'effectue librement en ligne sur sntf.dz et via notre explorateur, tandis que la délivrance des billets s\'opère principalement aux guichets et distributeurs en gare avec déploiement progressif de la billetterie numérique.',
        },
      },
      {
        question: {
          ar: 'كم تبلغ قيمة غرامة السفر دون تذكرة صالحة؟',
          fr: 'Que risque-t-on à voyager sans billet valable à bord ?',
        },
        answer: {
          ar: 'يفرض مراقبو القطار غرامة نظامية فورية تفوق ثمن التذكرة الأصلي إذا لم يتم اقتناؤها قبل الصعود من المحطة المزودة بشباك تذاكر مفتوح.',
          fr: 'Les contrôleurs à bord appliquent une majoration réglementaire immédiate sur le tarif du trajet lorsque la gare de départ disposait d\'un guichet ouvert.',
        },
      },
      {
        question: {
          ar: 'هل يسمح للأطفال بالسفر مجانا في قطارات SNTF؟',
          fr: 'Les enfants bénéficient-ils de la gratuité ou de tarifs réduits ?',
        },
        answer: {
          ar: 'يسافر الأطفال دون سن الرابعة مجانا دون مقعد منفرد، بينما يستفيد الأطفال من 4 إلى 12 سنة من تخفيض بنسبة 50% على سعر التذكرة العادية.',
          fr: 'Les enfants de moins de 4 ans voyagent gratuitement sans siège attribué, et ceux âgés de 4 à 12 ans bénéficient d\'un demi-tarif de 50 %.',
        },
      },
      {
        question: {
          ar: 'أين تتوقف قطارات المطار القادمة من وسط العاصمة؟',
          fr: 'Quelles sont les gares desservies par la navette aéroport d\'Alger ?',
        },
        answer: {
          ar: 'تنطلق الرحلات من محطة آغا مرورا بالحراش وباب الزوار وصولا إلى المحطة السفلية لمطار هواري بومدين الدولي بربط ميسر مع خط الترامواي.',
          fr: 'La navette relie Alger-Agha, El Harrach et Bab Ezzouar directement au terminal ferroviaire souterrain de l\'Aéroport International Houari Boumediene.',
        },
      },
    ],
  },
  {
    slug: 'casnos-damancom-guide',
    category: { ar: 'الضمان الاجتماعي والمهن الحرة', fr: 'Indépendants & CASNOS' },
    publishedAt: '2026-04-08',
    updatedAt: '2026-05-02',
    readTimeMinutes: 7,
    title: {
      ar: 'دليل كاسنوس CASNOS وبوابة ضمانكم Damancom: الاشتراكات، التقاعد، والدفع الإلكتروني',
      fr: 'Guide complet CASNOS et portail Damancom : cotisations annuelles, télépaiement et retraite',
    },
    excerpt: {
      ar: 'كل ما يخص العمال غير الأجراء والتجار والمقاولين الذاتيين مع صندوق CASNOS: طريقة التصريح عبر بوابة ضمانكم، احتساب الاشتراك السنوي قبل 30 جوان، وحقوق بطاقة الشفاء والتقاعد.',
      fr: 'Commerçants, artisans, professions libérales et auto-entrepreneurs : comment déclarer votre revenu sur Damancom, payer votre cotisation CASNOS avant le 30 juin et préserver vos droits.',
    },
    quickAnswer: {
      ar: 'تتيح بوابة ضمانكم (damancom.casnos.dz) لجميع التجار والحرفيين وأصحاب المهن الحرة والمقاولين الذاتيين التصريح برقم الأعمال أو الدخل السنوي ودفع اشتراكهم السنوي قبل 30 جوان من كل سنة بالبطاقة الذهبية أو البنكية CIB لتفادي غرامات التأخير وضمان تفعيل بطاقة الشفاء وحساب سنوات التقاعد.',
      fr: 'Le portail Damancom (damancom.casnos.dz) permet aux non-salariés (commerçants, artisans, professions libérales et auto-entrepreneurs) de télédéclarer leur assiette annuelle et de régler leurs cotisations par carte Edahabia ou CIB avant la date limite du 30 juin afin d\'éviter les pénalités de retard et maintenir la carte Chifa active.',
    },
    sections: [
      {
        heading: {
          ar: 'من هم الخاضعون للانخراط في صندوق CASNOS ولماذا يعد ضروريا؟',
          fr: 'Qui doit s\'affilier à la CASNOS et quels sont les droits ouverts ?',
        },
        paragraphs: {
          ar: [
            'يغطي الصندوق الوطني للضمان الاجتماعي لغير الأجراء CASNOS كافة الفئات التي تمارس نشاطا اقتصاديا أو مهنيا لحسابها الخاص دون رابطة أجرية. ويشمل ذلك التجار الحائزين على السجل التجاري، مسيري الشركات، الحرفيين، الفلاحين، الأطباء والمحامين والمهندسين المستقلين، وأيضا فئة حاملي بطاقة المقاول الذاتي.',
            'لا يقتصر الانتساب إلى كاسنوس على تفادي الملاحقات الإدارية عند استخراج شهادة أداء المستحقات اللازمة لتجديد السجل التجاري أو المناقصات؛ بل يضمن للمشترك وعائلته تغطية صحية شاملة عبر بطاقة الشفاء بنسبة 80% إلى 100% ومعاش تقاعد حقيقي بعد بلوغ السن القانونية واستيفاء 15 سنة من الاشتراك الفعلي.'
          ],
          fr: [
            'La Caisse Nationale de Sécurité Sociale des Non-Salariés (CASNOS) assure la protection sociale de toute personne exerçant une activité professionnelle indépendante en Algérie : commerçants immatriculés au CNRC, gérants d\'entreprises, artisans, agriculteurs, professions libérales et titulaires de la carte d\'auto-entrepreneur ANAE.',
            'L\'affiliation régulière ouvre droit au régime d\'assurance maladie via la carte Chifa pour le cotisant et sa famille, au capital décès ainsi qu\'à une pension de retraite proportionnelle après un minimum légal de 15 années de cotisations validées et l\'atteinte de l\'âge légal.'
          ],
        },
        bullets: {
          ar: [
            'شهادة انتساب وأداء مستحقات إلكترونية مطلوبة في السجل التجاري والصفقات والقروض.',
            'تغطية صحية ببطاقة الشفاء بنسبة تصل إلى 100% للأمراض المزمنة للمنخرط وذويه.',
            'أجل الدفع السنوي المعتاد يمتد من بداية السنة حتى تاريخ 30 جوان قبل تطبيق الزيادات.',
          ],
          fr: [
            'Attestation de mise à jour (Mise à jour CASNOS) indispensable aux marchés publics et banques.',
            'Couverture médicale par carte Chifa étendue aux ayants droit sans double cotisation.',
            'Échéance annuelle légale fixée au 30 juin de chaque exercice pour éviter les majorations de retard.',
          ],
        },
      },
      {
        heading: {
          ar: 'حساب الاشتراك السنوي والحد الأدنى للأنشطة الجديدة والمقاول الذاتي',
          fr: 'Calcul des cotisations : taux de 15 %, plancher et forfait auto-entrepreneur',
        },
        paragraphs: {
          ar: [
            'تحدد نسبة الاشتراك القانونية في كاسنوس بـ 15% من الدخل السنوي الصافي المصرح به لدى مصالح الضرائب، تتوزع بين 7.5% للتغطية الصحية الاجتماعية و7.5% لتكوين معاش التقاعد. ويحدد القانون وعاء أدنى وأقصى للاشتراك لضمان الحد الأدنى للمعاش وتوازن الصندوق.',
            'بالنسبة للتاجر أو المبتدئ الذي لم يبلغ رقما مرتفعا أو يطبق عليه الحد الأدنى السنوي، تبلغ القيمة المرجعية الدنيا المعتمدة 32,400 دج سنويا (بينما حددت تشريعات الدعم الخاصة بالمقاول الذاتي اشتراكا ميسرا عند 24,000 دج سنويا مع تقسيط اختياري عبر الوكالات في حال الدفع بالجدولة).'
          ],
          fr: [
            'La cotisation annuelle CASNOS correspond à 15 % du revenu annuel net déclaré auprès des services fiscaux, répartis à parts égales entre l\'assurance maladie-invalidité (7,5 %) et le fonds de retraite (7,5 %). La législation encadre ce calcul par un plancher annuel minimal et un plafond maximal.',
            'En pratique, la cotisation minimale légale pour un indépendant démarre à 32 400 DZD par an (hors dispositifs incitatifs spécifiques tels que le régime avantageux de 24 000 DZD dédié au statut d\'auto-entrepreneur). Le règlement en temps voulu évite une pénalité initiale de 5 % majorée de 1 % par mois de retard.'
          ],
        },
      },
      {
        heading: {
          ar: 'التصريح بالوعاء والدفع الإلكتروني خطوة بخطوة في ضمانكم Damancom',
          fr: 'Télédéclarer et payer sur Damancom sans se déplacer à l\'agence',
        },
        paragraphs: {
          ar: [
            'لإنهاء معاملتك من مكتبك دون طوابير جوان المزدحمة، سجل دخولك إلى بوابة ضمانكم damancom.casnos.dz باستخدام رقم الاشتراك في الصندوق وكلمة المرور التي فعلتها أول مرة. في تبويب التصريح السنوي، أدخل قيمة الدخل الخاضع المستخرج من التصريح الضريبي C20 أو شهادة رقم الأعمال.',
            'بعد تأكيد الوعاء، يحتسب النظام قيمة الاشتراك السنوي المطلوب بدقة ويظهر زر الدفع الإلكتروني. اختر الدفع بالبطاقة الذهبية أو CIB، أدخل رمز الأمان المرسل لهاتفك، لتحصل في الحال على وصل الدفع وشهادة أداء المستحقات المختومة رقميا برمز QR جاهزة للطباعة.'
          ],
          fr: [
            'Connectez-vous à votre espace personnel sur damancom.casnos.dz à l\'aide de votre numéro d\'assuré CASNOS. Dans le menu « Déclaration annuelle d\'assiette », saisissez le montant de votre revenu fiscal annuel certifié (tel que porté sur la déclaration G12 / C20) afin que l\'application calcule immédiatement votre cotisation exacte.',
            'Une fois la déclaration validée, sélectionnez le mode de paiement par carte bancaire CIB ou carte Edahabia via la passerelle sécurisée SATIM. Dès confirmation de la transaction, votre quittance officielle et votre attestation de mise à jour avec code QR sont instantanément téléchargeables au format PDF.'
          ],
        },
      },
      {
        heading: {
          ar: 'ماذا تفعل عند وجود ديون متراكمة أو توقف عن النشاط التجاري؟',
          fr: 'Régulariser d\'anciennes dettes ou radier son dossier en fin d\'activité',
        },
        paragraphs: {
          ar: [
            'في حال تراكم مستحقات لسنوات سابقة، لا تهمل الموقف لأن الفوائد والغرامات تواصل التزايد وتمنع تحيين بطاقة الشفاء. يتيح صندوق CASNOS طلب جدولة الديون (Échéancier) عبر تقسيط المبلغ الأصلي على دفعات شهرية أو فصلية ميسرة مع التمتع أحيانا بإعفاءات قانونية من الغرامات عند تفعيل تدابير التسهيل.',
            'كذلك، من الأخطاء المتكررة لدى كثير من المواطنين الاعتقاد بأن شطب السجل التجاري لدى CNRC يوقف اشتراك كاسنوس تلقائيا؛ الحقيقة أنك ملزم بإيداع نسخة من شهادة الشطب التجاري وشهادة التوقف الضريبي لدى وكالة CASNOS خلال فترة وجيزة لإيقاف احتساب سنوات جديدة دون حق.'
          ],
          fr: [
            'En cas d\'arriérés de cotisations cumulés sur plusieurs exercices, ne laissez pas les majorations s\'accumuler. La CASNOS propose des échéanciers de paiement étalés permettant d\'apurer la dette principale par mensualités adaptées et de débloquer immédiatement les droits médicaux de votre carte Chifa.',
            'Par ailleurs, attention à une idée reçue fréquente : la radiation au CNRC ou aux impôts n\'entraîne pas la clôture automatique de votre compte CASNOS. Pensez impérativement à déposer l\'attestation de radiation commerciale et fiscale auprès de votre agence pour arrêter la facturation des exercices suivants.'
          ],
        },
      },
      {
        heading: {
          ar: 'المزايا طويلة الأمد للانخراط المنتظم في التقاعد وتفادي نزاعات الرقابة',
          fr: 'Préparer sa retraite d\'indépendant et sécuriser la conformité fiscale et sociale',
        },
        paragraphs: {
          ar: [
            'يتعامل بعض أصحاب المهن الحرة والتجار مع اشتراك كاسنوس باعتباره عبئا ماليا سنويا يهدف فقط إلى استخراج شهادة أداء المستحقات، غير أن التخطيط التقاعدي السليم يثبت أهمية الانتظام في التصريح بالدخل الفعلي. فاحتساب معاش التقاعد في نهاية المسار المهني يعتمد على معدل الاشتراكات في السنوات المرجعية الأخيرة وعلى عدم وجود فجوات غير مبررة في المسار الوظيفي.',
            'كما يسهل الربط الإلكتروني الحديث بين مصالح الضرائب وصندوق CASNOS مطابقة التصريحات الجبائية السنوية C20 مع الوعاء المصرح به في بوابة ضمانكم، مما يقلص احتمالات المراجعة والتقويم المالي لاحقا. لذلك احرص على تطابق رقم الأعمال المصرح به في الجهتين وحفظ وصول الدفع السنوية في أرشيفك المحاسبي الشخصي.'
          ],
          fr: [
            'Beaucoup d\'indépendants perçoivent à tort la cotisation CASNOS comme une simple formalité pour obtenir l\'attestation de mise à jour. En réalité, la régularité et la sincérité de vos déclarations conditionnent directement le montant de votre future pension de retraite, calculée sur la moyenne des meilleures années de cotisation validées avant la liquidation.',
            'De plus, l\'échange automatisé d\'informations entre les services fiscaux et la CASNOS permet désormais de recouper facilement vos bilans C20 ou G12 avec les assiettes déclarées sur Damancom. Veillez à maintenir une parfaite cohérence entre vos déclarations fiscales et sociales et archivez chaque quittance électronique PDF.'
          ],
        },
        bullets: {
          ar: [
            'إتمام التصريح والدفع على بوابة ضمانكم قبل شهر جوان لتفادي ذروة الازدحام في الأسبوع الأخير.',
            'تقديم طلب استرداد أو تسوية فورية في حال وجود خطأ مادي في مبلغ الدخل المصرح به.',
            'الاحتفاظ بجميع وصلات الدفع الإلكترونية وشهادات أداء المستحقات كدليل للمسار التقاعدي.',
          ],
          fr: [
            'Finalisez votre déclaration et paiement dès le printemps afin d\'éviter la saturation de fin juin.',
            'Déclarez sans délai tout arrêt temporaire ou cessation définitive d\'activité auprès de l\'agence.',
            'Archivez vos attestations de mise à jour et quittances annuelles pour sécuriser vos annuités.',
          ],
        },
      },
    ],
    comparisonTable: {
      headers: [
        { ar: 'فئة المشترك', fr: 'Catégorie de cotisant' },
        { ar: 'الاشتراك السنوي التقديري', fr: 'Cotisation annuelle indicative' },
        { ar: 'التغطية الممنوحة', fr: 'Droits ouverts' },
      ],
      rows: [
        [
          { ar: 'الحد الأدنى لغير الأجراء', fr: 'Non-salarié au seuil minimum' },
          { ar: '32,400 دج سنويا', fr: '32 400 DZD / an' },
          { ar: 'بطاقة الشفاء + تقاعد بالحد الأدنى', fr: 'Chifa + validation annuité retraite' },
        ],
        [
          { ar: 'المقاول الذاتي (ANAE)', fr: 'Auto-entrepreneur (ANAE)' },
          { ar: '24,000 دج سنويا (نسبة تفضيلية)', fr: '24 000 DZD / an (régime incitatif)' },
          { ar: 'بطاقة الشفاء + تقاعد كامل الحقوق', fr: 'Chifa + protection retraite dédiée' },
        ],
        [
          { ar: 'أصحاب المداخيل المتوسطة والعليا', fr: 'Revenus intermédiaires et supérieurs' },
          { ar: '15% من الدخل المصرح به (بسقف قانوني)', fr: '15 % du revenu déclaré (plafonné)' },
          { ar: 'معاش تقاعد مرتفع متناسب مع الدخل', fr: 'Pension de retraite proportionnelle élevée' },
        ],
      ],
    },
    relatedSectors: ['casnos', 'anae', 'cnas'],
    relatedTools: [
      { category: 'productivity', slug: 'invoice-generator', label: { ar: 'مولد الفواتير بالتعريف الجبائي', fr: 'Générateur de Factures Pro (NIF/RC)' } },
      { category: 'calculators', slug: 'number-to-words', label: { ar: 'تحويل مبالغ الدفع بالحروف', fr: 'Montants en Lettres' } },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هي عقوبة التأخر عن دفع اشتراك كاسنوس بعد 30 جوان؟',
          fr: 'Quelles pénalités s\'appliquent en cas de paiement après le 30 juin ?',
        },
        answer: {
          ar: 'تطبق زيادة أولية قدرها 5% عن المبلغ السنوي الواجب دفعه فور انقضاء أجل 30 جوان، ويضاف إليها 1% عن كل شهر تأخير إضافي حتى إتمام التسوية.',
          fr: 'Une majoration immédiate de 5 % s\'applique dès le 1er juillet, augmentée de 1 % supplémentaire pour chaque mois de retard jusqu\'au règlement effectif.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني الجمع بين منصب عمل أجير وسجل تجاري دون دفع مزدوج؟',
          fr: 'Un salarié ayant aussi un registre de commerce cotise-t-il aux deux caisses ?',
        },
        answer: {
          ar: 'ينص القانون على مبدأ مساهمة كل نشاط، غير أنه إذا كان العمل المأجور أساسيا أو توقف النشاط التجاري فيجب تسوية الوضعية القانونية لدى الصندوقين حسب الحالة الفعلية للدخل.',
          fr: 'En droit algérien, chaque activité lucrative génère une assujettissement spécifique : déclarez vos justificatifs auprès de la CASNOS pour déterminer exactement la part due.',
        },
      },
      {
        question: {
          ar: 'كيف أحصل على رقم الاشتراك لتفعيل حسابي في بوابة ضمانكم لأول مرة؟',
          fr: 'Comment activer son espace Damancom sans mot de passe initial ?',
        },
        answer: {
          ar: 'ادخل إلى صفحة إنشاء الحساب في ضمانكم، أدخل رقم الانتساب المدون على بطاقة الشفاء أو شهادة التسجيل ورقم التعريف الوطني، وستصلك بيانات الدخول عبر البريد أو الهاتف.',
          fr: 'Utilisez l\'assistant d\'inscription sur damancom.casnos.dz avec votre numéro d\'affiliation et votre NIN ; vos accès sont vérifiés et validés automatiquement.',
        },
      },
      {
        question: {
          ar: 'ما هي السن القانونية للتقاعد لدى منتسبي CASNOS؟',
          fr: 'À quel âge le cotisant CASNOS peut-il liquider sa retraite ?',
        },
        answer: {
          ar: 'السن القانونية العادية هي 65 سنة للرجال و60 سنة للنساء مع شرط استيفاء 15 سنة من الاشتراك الفعلي على الأقل، ويمكن التقاعد المبكر قبل ذلك لمن جمع 32 سنة اشتراك في الحالات النظامية.',
          fr: 'L\'âge légal standard est fixé à 65 ans pour les hommes et 60 ans pour les femmes avec au moins 15 années validées, sous réserve des conditions de retraite anticipée après 32 ans de cotisation.',
        },
      },
    ],
  },
  {
    slug: 'biometric-id-passport-12s',
    category: { ar: 'الحالة المدنية والوثائق البيومترية', fr: 'État Civil & Biométrie' },
    publishedAt: '2026-04-12',
    updatedAt: '2026-05-03',
    readTimeMinutes: 7,
    title: {
      ar: 'دليل استخراج وتجديد بطاقة التعريف البيومترية، جواز السفر، وشهادة الميلاد 12خ عبر الإنترنت',
      fr: 'Guide complet : carte nationale biométrique (CNIBE), passeport et extrait 12S en ligne',
    },
    excerpt: {
      ar: 'تعرف على إجراءات وزارة الداخلية والجماعات المحلية لاستخراج شهادة الميلاد 12S، طلب بطاقة التعريف البيومترية إلكترونيا لمن يملك جواز سفر، وتتبع جاهزية الجواز عن بعد.',
      fr: 'Procédures du ministère de l\'Intérieur en Algérie : demande de l\'extrait de naissance 12S à distance, commande de la CNIBE sans dossier papier et suivi du passeport biométrique.',
    },
    quickAnswer: {
      ar: 'أصبح بإمكان كل مواطن يمتلك جواز سفر بيومتري تقديم طلب استخراج أو تجديد بطاقة التعريف الوطنية البيومترية CNIBE مجانا عبر بوابة وزارة الداخلية (interieur.gov.dz) دون إيداع أي ملف ورقي أو صورة جديدة؛ كما تتيح بوابة الحالة المدنية طلب شهادة 12S إلكترونيا وتتبع جاهزية الجواز قبل استلامه.',
      fr: 'Tout citoyen détenteur d\'un passeport biométrique peut commander gratuitement sa Carte Nationale d\'Identité Biométrique (CNIBE) en ligne sur le portail interieur.gov.dz sans fournir aucun dossier papier. Le portail de l\'état civil permet également de commander l\'extrait 12S et de suivre la fabrication de votre passeport avant retrait en APC.',
    },
    sections: [
      {
        heading: {
          ar: 'ثورة الرقم التعريفي الوطني NIN والوثائق البيومترية الموحدة',
          fr: 'Comment le NIN biométrique simplifie toutes vos démarches civiles',
        },
        paragraphs: {
          ar: [
            'انطلقت وزارة الداخلية والجماعات المحلية في ربط كافة البلديات والدوائر بالسجل الوطني الآلي للحالة المدنية، وهو ما أنتج منظومة رقمية متكاملة ترتكز على رقم التعريف الوطني NIN المكون من 18 رقما. وبفضل هذا الرقم الفريد، باتت البيانات البيومترية (الصورة، البصمات، والتوقيع الإلكتروني) محفوظة في قاعدة مركزية مؤمنة، مما ألغى تكرار إحضار ملفات الإقامة والجنسية والصور الشمسية عند تجديد الوثائق.',
            'سواء كنت داخل التراب الوطني أو مقيما بالخارج، تغنيك الخدمات الرقمية لوزارة الداخلية عن التنقل إلى بلدية الميلاد الأصلية في ولاية بعيدة؛ حيث تسحب شهادة الميلاد الخاصة 12خ من أقرب بلدية إقامة أو عبر البوابة القنصلية، ويتم تسليم البطاقة البيومترية والجواز عبر نظام تتبع دقيق بالرسائل النصية.'
          ],
          fr: [
            'L\'informatisation intégrale des communes algériennes autour du Registre National Automatisé de l\'État Civil (RNAEC) et du Numéro d\'Identification National (NIN) à 18 chiffres a radicalement simplifié l\'obtention des titres d\'identité. Dès lors que vos empreintes, photographie et signature ont déjà été enregistrées lors de l\'établissement d\'un titre biométrique, il n\'est plus nécessaire de reconstituer un dossier complet lors de vos renouvellements.',
            'De plus, la suppression de la contrainte territoriale permet à chaque citoyen né dans une autre wilaya de retirer ses actes d\'état civil directement auprès de la commune de résidence actuelle ou du consulat compétent à l\'étranger.'
          ],
        },
        bullets: {
          ar: [
            'حامل جواز السفر البيومتري يحصل على بطاقة التعريف البيومترية إلكترونيا بصفر وثائق.',
            'صلاحية بطاقة التعريف الوطنية البيومترية والجواز البالغ 10 سنوات كاملة.',
            'إمكانية تتبع مراحل الطبع واستلام إشعار SMS فور وصول الوثيقة للبلدية.',
          ],
          fr: [
            'Les titulaires d\'un passeport biométrique commandent la CNIBE en ligne sans aucune pièce papier.',
            'Validité portée à 10 ans pour la CNIBE et le passeport des citoyens majeurs (5 ans pour les mineurs).',
            'Notification automatique par SMS dès que la carte ou le passeport est disponible en mairie.',
          ],
        },
      },
      {
        heading: {
          ar: 'طلب بطاقة التعريف الوطنية البيومترية CNIBE عبر الإنترنت بخطوات واضحة',
          fr: 'Commander la Carte Nationale Biométrique (CNIBE) sur interieur.gov.dz',
        },
        paragraphs: {
          ar: [
            'إذا كنت تملك جواز سفر بيومتري، ادخل إلى منصة طلب بطاقة التعريف البيومترية على موقع وزارة الداخلية، أدخل رقم جواز السفر ورقم التعريف الوطني NIN، ثم تحقق من رقم هاتفك لاستقبال رمز التأكيد. يتيح لك النظام تأكيد عنوان الإقامة الفعلي واختيار الدائرة أو البلدية التي ترغب في استلام البطاقة منها.',
            'أما في حالة طلب البطاقة البيومترية لأول مرة لمن لا يملك جواز سفر، فيودع الملف الأولي لدى شباك البيومتري بالبلدية مع شهادة ميلاد 12S أصلية، شهادة إقامة، شهادة جنسية (للمرة الأولى)، صورتين شمسيتين مطابقتين للمعايير، وإجراء التقاط البصمة الإلكترونية في عين المكان.'
          ],
          fr: [
            'Si vous disposez déjà d\'un passeport biométrique valide ou récemment délivré, accédez à la téléprocédure dédiée sur le site du ministère de l\'Intérieur. Saisissez votre numéro de passeport, votre NIN et votre numéro de téléphone portable pour recevoir un code SMS de confirmation, puis validez la commune de retrait.',
            'Pour une toute première demande sans passeport biométrique préalable, la prise des empreintes et de la photo s\'effectue en présentiel au guichet biométrique de votre APC avec le formulaire signé, l\'acte 12S, le justificatif de résidence et le certificat de nationalité.'
          ],
        },
      },
      {
        heading: {
          ar: 'استخراج شهادة الميلاد الخاصة 12خ وتجديد جواز السفر',
          fr: 'Obtenir l\'extrait 12S à distance et suivre la fabrication du passeport',
        },
        paragraphs: {
          ar: [
            'تعد شهادة الميلاد الخاصة رقم 12خ (12S) وثيقة مرجعية تصدر مرة واحدة مبدئيا وتستخرج من أي بلدية متصلة بالشبكة الوطنية، كما توفر بوابة وزارة الداخلية خدمة الطلب الإلكتروني لها للمسجلين في القوائم الموثقة والمولودين بالجزائر أو المرقمنين في القنصليات مع تحويلها عند الضرورة إلى أقرب مصلحة.',
            'بالنسبة لتجديد جواز السفر البيومتري العادي من 28 صفحة أو 48 صفحة لكثيري السفر، يرتبط الأمر بدفع قسيمة الطابع الجبائي (6,000 دج للبالغين لمدة 10 سنوات لـ 28 صفحة و3,000 دج للقصر لمدة 5 سنوات، أو قسيمة إلكترونية عبر قسيمتكم Qassimatouka) مع حجز موعد أو إيداع الملف في المصلحة البيومترية واستخدام صفحة التتبع الإلكتروني لمعرفة يوم التسليم.'
          ],
          fr: [
            'L\'extrait de naissance spécial 12S, identifiable par son papier sécurisé et son numéro de référence unique, peut être sollicité via le portail dédié du ministère de l\'Intérieur ou retiré directement dans n\'importe quelle APC connectée au réseau national sans revenir dans la wilaya de naissance.',
            'Pour l\'établissement ou le renouvellement du passeport biométrique (28 ou 48 pages), acquittez-vous du timbre fiscal réglementaire (6 000 DZD pour le livret standard adulte de 10 ans, 3 000 DZD pour les mineurs, réglable en ligne via le service Qassimatouka) puis suivez l\'état d\'avancement de votre dossier sur la plateforme de suivi jusqu\'à réception du SMS de retrait.'
          ],
        },
      },
      {
        heading: {
          ar: 'التصريح الإلكتروني بضياع الوثائق وتحديث الرمز السري للبطاقة',
          fr: 'Que faire en cas de perte, vol ou oubli du code PIN de la CNIBE ?',
        },
        paragraphs: {
          ar: [
            'في حالة فقدان أو سرقة بطاقة التعريف البيومترية أو جواز السفر، أبلغ فورا مصالح الأمن الوطني DGSN أو الدرك الوطني لاستخراج شهادة التصريح بالضياع، حيث يتيح النظام الأمني الحديث تعطيل الوثيقة المفقودة فورا ومنع استغلالها، ثم قدم طلب تجديد مرفقا بطابع استبدال الضياع القانوني (1,000 دج لبطاقة التعريف المفقودة).',
            'تذكر أيضا أن كل بطاقة تعريف بيومترية مزودة بشريحة إلكترونية تتضمن رمزا سريا PIN يسلم في ظرف مختوم مع البطاقة لتفعيل الخدمات الحكومية المستقبلية عبر قارئات البطاقة الإلكترونية.'
          ],
          fr: [
            'En cas de perte ou de vol d\'une CNIBE ou d\'un passeport, effectuez sans délai une déclaration officielle auprès de la sûreté urbaine (DGSN) ou de la gendarmerie afin d\'invalider le titre dans le fichier national et prévenir toute usurpation d\'identité. Un timbre spécifique de remplacement (1 000 DZD pour la CNIBE) sera demandé lors du renouvellement.',
            'Conservez précieusement le code confidentiel PIN remis sous pli scellé lors du retrait de votre carte nationale biométrique : ce code sécurise votre signature électronique citoyenne pour l\'accès aux nouveaux téléservices publics.'
          ],
        },
      },
      {
        heading: {
          ar: 'معايير الصورة البيومترية ونصائح تحضير ملفات القصر وتغيير الإقامة',
          fr: 'Normes photo biométrique, dossiers pour mineurs et changement de résidence',
        },
        paragraphs: {
          ar: [
            'عند إيداع ملف أول مرة لاستخراج جواز السفر البيومتري أو بطاقة التعريف الوطنية، تعد جودة الصورة الشمسية ومطابقتها للمعايير الدولية السبب الأول لتسريع الطبع أو تأخيره. يجب أن تكون الصورة حديثة على خلفية بيضاء موحدة، بوجه واضح في المنتصف دون نظارات شمسية أو انعكاسات ضوئية، وبملامح طبيعية محايدة دون ابتسامة مبالغ فيها.',
            'وبالنسبة للأطفال القصر أقل من 19 سنة، يشترط حضور الأب أو الولي الشرعي مرفقا ببطاقة التعريف والوثيقة المثبتة للولاية في حالات الحضانة أو الوصاية القانونية. كما ينبغي عند الانتقال الدائم إلى ولاية أو بلدية أخرى استخراج شهادة إقامة محينة وتحديث العنوان في مصلحة الحالة المدنية لضمان وصول المراسلات الإدارية والبطاقات الجاهزة دون عوائق.'
          ],
          fr: [
            'Lors d\'un premier enrôlement biométrique en commune ou au consulat, le respect strict des normes de la photographie d\'identité accélère considérablement l\'édition du titre : visage parfaitement centré sur fond blanc uni sans ombre portée, expression neutre bouche fermée, et absence de lunettes teintées ou reflets sur les verres.',
            'Pour les enfants mineurs de moins de 19 ans, la présence du père, de la mère ou du tuteur légal muni de sa propre pièce d\'identité et du justificatif de tutelle le cas échéant reste indispensable au dépôt et au retrait. En cas de déménagement durable, pensez à actualiser votre justificatif de résidence auprès de votre nouvelle APC.'
          ],
        },
        bullets: {
          ar: [
            'مراجعة تاريخ انتهاء جواز السفر قبل حجز السفر بستة أشهر على الأقل لأن معظم الدول تشترط ذلك.',
            'التحقق من مطابقة التهجئة اللاتينية للاسم واللقب مع كل أفراد العائلة أثناء التسجيل الأولي.',
            'استخدام خاصية التتبع الإلكتروني على بوابة وزارة الداخلية قبل التنقل إلى البلدية للاستلام.',
          ],
          fr: [
            'Anticipez le renouvellement du passeport six mois avant son expiration pour vos voyages internationaux.',
            'Contrôlez la transcription latine exacte de votre nom dès l\'impression du récépissé de dépôt.',
            'Vérifiez le statut « Prêt pour retrait » en ligne avant de vous rendre à la mairie.',
          ],
        },
      },
    ],
    comparisonTable: {
      headers: [
        { ar: 'الوثيقة البيومترية', fr: 'Titre officiel' },
        { ar: 'المدة القانونية للصلاحية', fr: 'Durée de validité' },
        { ar: 'رسوم الطابع الجبائي العادي', fr: 'Timbre fiscal standard' },
      ],
      rows: [
        [
          { ar: 'بطاقة التعريف الوطنية البيومترية (أول مرة / تجديد عادي)', fr: 'CNIBE (1re demande ou expiration)' },
          { ar: '10 سنوات للبالغين', fr: '10 ans (majeurs)' },
          { ar: 'مجانية (1,000 دج في حالة الضياع)', fr: 'Gratuite (1 000 DZD si perte)' },
        ],
        [
          { ar: 'جواز السفر البيومتري 28 صفحة (بالغ)', fr: 'Passeport 28 pages (adulte)' },
          { ar: '10 سنوات', fr: '10 ans' },
          { ar: '6,000 دج (أو قسيمة إلكترونية)', fr: '6 000 DZD (ou e-timbre)' },
        ],
        [
          { ar: 'جواز السفر البيومتري 48 صفحة (بالغ)', fr: 'Passeport 48 pages (adulte)' },
          { ar: '10 سنوات', fr: '10 ans' },
          { ar: '9,000 دج', fr: '9 000 DZD' },
        ],
        [
          { ar: 'جواز السفر للقصر (أقل من 19 سنة)', fr: 'Passeport mineur (< 19 ans)' },
          { ar: '5 سنوات', fr: '5 ans' },
          { ar: '3,000 دج (28 صفحة)', fr: '3 000 DZD (28 pages)' },
        ],
      ],
    },
    relatedSectors: ['interieur', 'dgsn', 'mfa'],
    relatedTools: [
      { category: 'calculators', slug: 'age-calculator', label: { ar: 'حاسبة السن القانوني والأهلية', fr: 'Calculateur d\'Âge Légal' } },
      { category: 'productivity', slug: 'admin-procedures-assistant', label: { ar: 'مساعد ملفات الحالة المدنية', fr: 'Assistant Dossiers État Civil' } },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكنني سحب جواز السفر أو بطاقة التعريف البيومترية من طرف شخص آخر؟',
          fr: 'Un proche peut-il retirer ma CNIBE ou mon passeport à ma place ?',
        },
        answer: {
          ar: 'يشترط استلام الوثائق البيومترية الحضور الشخصي لصاحبها من أجل مطابقة البصمة الإلكترونية والتحقق من تفعيل الشريحة قبل التسليم، باستثناء القصر الذين يتقدم وليهم الشرعي.',
          fr: 'Non, le retrait exige la présence physique du titulaire afin d\'effectuer la vérification d\'empreintes biométriques sur lecteur et remettre le code PIN, hormis pour les mineurs représentés par leur tuteur légal.',
        },
      },
      {
        question: {
          ar: 'ما هي المدة المستغرقة لإصدار بطاقة التعريف البيومترية عبر الإنترنت؟',
          fr: 'Quel est le délai moyen après une commande de CNIBE sur interieur.gov.dz ?',
        },
        answer: {
          ar: 'تتراوح المدة عادة بين 10 و20 يوما من تاريخ تأكيد الطلب الإلكتروني، ويتم إخطار المواطن برسالة SMS فور استلام البلدية للبطاقة الجاهزة.',
          fr: 'Le traitement prend généralement entre 10 et 20 jours ouvrés ; un message SMS vous informe dès que la carte est disponible au guichet de votre commune.',
        },
      },
      {
        question: {
          ar: 'كيف أشتري الطابع الجبائي الإلكتروني دون الذهاب إلى قباضة الضرائب؟',
          fr: 'Où acheter le timbre fiscal dématérialisé sans passer par les impôts ?',
        },
        answer: {
          ar: 'توفر منصة قسيمتكم Qassimatouka التابعة لوزارة المالية شراء الطابع الجبائي إلكترونيا بالبطاقة الذهبية أو CIB واستلام رمز الدفع فورا عبر الهاتف.',
          fr: 'La plateforme officielle Qassimatouka du ministère des Finances permet l\'achat du e-timbre par carte Edahabia ou CIB avec génération immédiate d\'un code quittance.',
        },
      },
      {
        question: {
          ar: 'هل يشترط وجود فصيلة الدم المسجلة على شهادة 12S للبطاقة البيومترية؟',
          fr: 'La mention du groupe sanguin est-elle obligatoire pour le dossier biométrique ?',
        },
        answer: {
          ar: 'نعم، تدرج بطاقة فصيلة الدم ضمن بيانات الشريحة والبطاقة البيومترية لسلامة المواطن، ويفضل إحضار شهادة الفصيلة الطبية الصادرة عن مخبر معتمد عند أول تسجيل.',
          fr: 'Oui, le justificatif de groupe sanguin délivré par un laboratoire ou centre de soins agréé figure dans les pièces du dossier biométrique lors de la première immatriculation.',
        },
      },
    ],
  },
  {
    slug: 'auto-entrepreneur-anem-minha',
    category: { ar: 'التشغيل وريادة الأعمال', fr: 'Emploi & Auto-Entrepreneur' },
    publishedAt: '2026-04-16',
    updatedAt: '2026-05-03',
    readTimeMinutes: 8,
    title: {
      ar: 'دليل بطاقة المقاول الذاتي ANAE ومنصة منحة البطالة وسيط ANEM في الجزائر',
      fr: 'Guide complet : carte d\'auto-entrepreneur ANAE et allocation chômage ANEM (Wassit / Minha)',
    },
    excerpt: {
      ar: 'مقارنة شاملة وتطبيقية بين التسجيل في الوكالة الوطنية للمقاول الذاتي ANAE (الضريبة 0.5%، رقم الأعمال 5 ملايين دج، وبطاقة الشفاء) وبين مسار التسجيل والتمديد في منحة البطالة ANEM.',
      fr: 'Tout comprendre pour lancer votre activité d\'auto-entrepreneur ANAE (impôt 0,5 %, plafond 5M DZD, couverture CASNOS) ou gérer votre dossier demandeur d\'emploi et allocation sur Wassit/Minha.',
    },
    quickAnswer: {
      ar: 'تمنح الوكالة الوطنية للمقاول الذاتي (anae.dz) للشباب والمستقلين في الخدمات الرقمية والاستشارات بطاقة قانونية بنظام ضريبي مخفض (0.5% من رقم الأعمال، وسقف 5 ملايين دج سنويا) دون اشتراط مقر تجاري، بينما تدعم الوكالة الوطنية للتشغيل ANEM الباحثين عن الشغل عبر وسيط ومنحة البطالة لمن يستوفي الشروط القانونية.',
      fr: 'L\'Agence Nationale de l\'Auto-Entrepreneur (anae.dz) permet d\'exercer une activité indépendante de services ou conseil sans local commercial avec une fiscalité allégée (IFU 0,5 %, plafond 5 millions DZD/an) et couverture sociale CASNOS, tandis que l\'ANEM gère le placement emploi et l\'allocation chômage des primo-demandeurs via Wassit et Minha.',
    },
    sections: [
      {
        heading: {
          ar: 'مفهوم المقاول الذاتي في الجزائر والمزايا الضريبية والبنكية الاستثنائية',
          fr: 'Le statut d\'auto-entrepreneur ANAE : fiscalité 0,5 % et exercice sans local',
        },
        paragraphs: {
          ar: [
            'أحدث قانون المقاول الذاتي نقلة تاريخية للشباب المستقلين (Freelancers)، المصممين، المبرمجين، المترجمين، الأساتذة المكونين، ومقدمي الخدمات المنزلية أو التوجيه الرقمي. فقد أصبح بإمكان أي شاب ممارسة نشاطه بصفة شرعية كاملة وإصدار فواتير قانونية للعملاء والشركات والمؤسسات دون تحمل أعباء كراء محل تجاري أو التقييد بسجل تجاري تقليدي معقد.',
            'تكمن جاذبية بطاقة المقاول الذاتي في الامتيازات الجبائية الميسرة: إذ يخضع حامل البطاقة للضريبة الجزافية الوحيدة بنسبة 0.5% فقط من رقم الأعمال السنوي طالما لم يتجاوز سقف 5 ملايين دينار جزائري (500 مليون سنتيم) سنويا لمدة ثلاث سنوات متتالية، مع الإعفاء الكلي من مسك المحاسبة المعقدة والحق في فتح حساب بنكي تجاري والحصول على تغطية طبية وتقاعد عبر كاسنوس.'
          ],
          fr: [
            'Le statut national d\'auto-entrepreneur répond parfaitement aux besoins des freelances, développeurs, graphistes, formateurs, consultants digitaux et prestataires de services aux personnes ou entreprises. Il confère une reconnaissance juridique complète autorisant la facturation officielle sans exiger de bail commercial ni d\'inscription classique au registre du commerce.',
            'Sur le plan fiscal, l\'auto-entrepreneur bénéficie d\'un régime préférentiel exceptionnel : une imposition forfaitaire unique (IFU) limitée à 0,5 % du chiffre d\'affaires annuel tant que celui-ci reste inférieur au plafond légal de 5 millions DZD sur trois exercices consécutifs, avec comptabilité allégée, ouverture d\'un compte bancaire dédié et affiliation sociale CASNOS.'
          ],
        },
        bullets: {
          ar: [
            'الضريبة الجزافية الوحيدة بنسبة رمزية قدرها 0.5% فقط مع الإعفاء من الرسم على القيمة المضافة TVA.',
            'التغطية الصحية ببطاقة الشفاء ومعاش التقاعد باشتراك سنوي ميسر في CASNOS قدره 24,000 دج.',
            'التسجيل 100% رقميا عبر منصة anae.dz في دقائق واستلام البطاقة عبر البريد السريع أو الوكالة.',
          ],
          fr: [
            'Impôt forfaitaire unique ultra-compétitif de 0,5 % avec dispense de TVA dans le plafond légal.',
            'Protection sociale CASNOS et carte Chifa avec cotisation incitative réduite à 24 000 DZD par an.',
            'Immatriculation entièrement en ligne sur anae.dz à partir de votre NIN et votre carte biométrique.',
          ],
        },
      },
      {
        heading: {
          ar: 'قائمة الأنشطة المؤهلة وخطوات الحصول على بطاقة المقاول الذاتي عبر anae.dz',
          fr: 'Domaines éligibles et procédure d\'inscription sur la plateforme anae.dz',
        },
        paragraphs: {
          ar: [
            'تشمل المدونة الوطنية للأنشطة المؤهلة لبطاقة المقاول الذاتي سبعة مجالات كبرى: الاستشارات والخبرة والتكوين، الخدمات الرقمية والبرمجة والتسويق الإلكتروني، الخدمات المنزلية، الخدمات الموجهة للأشخاص، خدمات الترفيه والتسلية، الخدمات الموجهة للمؤسسات، والخدمات الثقافية والاتصالية والسمعية البصرية. في المقابل، تستثنى المهن الحرة المقننة مثل المحاماة والطب والموثقين التي تخضع لأطرها النقابية الخاصة.',
            'للتسجيل، ادخل إلى بوابة الوكالة الوطنية للمقاول الذاتي anae.dz، أدخل رقم التعريف الوطني NIN، اختر النشاط المطابق من القائمة المعتمدة، وحمل صورة شمسية مطابقة وشهادة الإقامة أو وثيقة التحقق. بعد دراسة الطلب إلكترونيا، تصدر البطاقة الرقمية وتتجه لاستخراج بطاقة التعريف الجبائي NIF من مديرية الضرائب المختصة.'
          ],
          fr: [
            'La nomenclature officielle regroupe sept grands pôles d\'activités : conseil et formation, services numériques et développement web, prestations aux entreprises, services à la personne, services domestiques, culture-communication et loisirs. Seules les professions libérales réglementées disposant déjà de leur propre ordre professionnel (médecins, avocats, notaires, experts-comptables) sont exclues du dispositif.',
            'Sur anae.dz, créez votre compte avec votre NIN, sélectionnez le code d\'activité correspondant à votre savoir-faire, joignez votre photo et votre adresse de domiciliation (domicile personnel accepté), puis validez. Une fois votre carte délivrée, demandez votre Numéro d\'Identification Fiscale (NIF) en ligne via nifenligne pour commencer à facturer légalement.'
          ],
        },
      },
      {
        heading: {
          ar: 'منحة البطالة ومنصة وسيط ANEM: شروط الاستحقاق وطريقة الحفاظ عليها',
          fr: 'Allocation chômage Minha et portail Wassit ANEM : conditions et renouvellement',
        },
        paragraphs: {
          ar: [
            'بالنسبة للشباب الباحثين عن عمل للمرة الأولى الذين تتراوح أعمارهم بين 19 و40 سنة، توفر الدولة منحة بطالة شهرية ريثما يتم إدماجهم في سوق الشغل أو التكوين المهني. ويشترط للاستفادة التسجيل المسبق والنشط في منصة وسيط (wassitonline.anem.dz) لمدة لا تقل عن التحيين الساري، وعدم امتلاك أي دخل منتظم أو سجل تجاري أو بطاقة مقاول ذاتي سارية، مع تسوية الوضعية تجاه الخدمة الوطنية للذكور.',
            'من أكثر أسباب توقف منحة البطالة شيوعا نسيان تجديد طلب العمل كل ستة أشهر في منصة وسيط أو التغيب عن عرضي عمل أو تكوين مهني موجهين من الملحقة المحلية للتشغيل دون مبرر مقبول. تتيح البوابة الرقمية الآن تمديد البطاقة بضغطة زر واحدة مع إرسال إشعار فوري بتأكيد الاستمرار.'
          ],
          fr: [
            'Pour les primo-demandeurs d\'emploi âgés de 19 à 40 ans, la plateforme Minha de l\'ANEM organise le versement mensuel de l\'allocation chômage ainsi que le suivi d\'insertion professionnelle. Le bénéficiaire doit justifier d\'une inscription active sur Wassit Online, n\'exercer aucune activité rémunérée ni détenir de registre de commerce ou carte d\'auto-entrepreneur, et être en situation régulière vis-à-vis du service national pour les hommes.',
            'Attention : la suspension de l\'allocation intervient fréquemment en cas d\'oubli du renouvellement semestriel (tous les 6 mois) de votre demande d\'emploi sur Wassit ou de refus injustifié de deux offres d\'emploi ou d\'une orientation en formation professionnelle qualifiante.'
          ],
        },
      },
      {
        heading: {
          ar: 'كيف تختار بين البقاء في منحة البطالة أو الانتقال إلى المقاولة الذاتية؟',
          fr: 'Arbitrer entre maintien de l\'allocation chômage et lancement ANAE',
        },
        paragraphs: {
          ar: [
            'ينبغي التوضيح أن الحصول على بطاقة المقاول الذاتي يعد ممارسة لنشاط اقتصادي مدر للدخل يترتب عليه تعليق منحة البطالة تلقائيا فور التفعيل والانتساب لدى كاسنوس، إذ لا يجوز قانونا الجمع بينهما. غير أن الانتقال إلى المقاول الذاتي يفتح آفاقا غير محدودة لبناء دخل مستقل والتعاقد القانوني مع الشركات الكبرى والحصول على القروض المصغرة وأجهزة دعم المقاولاتية.',
            'بإمكان المستفيد قبل اتخاذ القرار تجهيز محفظة أعماله أو الاستفادة من التكوين المهني المجاني المرافق، وعند جاهزية أول عقود العمل الحر، يمكنه الانتقال بسلاسة وإصدار فواتيره باحترافية مستعينا بأدوات الفوترة المجانية المتاحة في بوابتنا.'
          ],
          fr: [
            'Conformément à la réglementation, l\'obtention de la carte d\'auto-entrepreneur et l\'affiliation consécutive à la CASNOS caractérisent l\'exercice d\'une activité professionnelle génératrice de revenus, mettant fin au droit à l\'allocation chômage. Le cumul des deux dispositifs n\'est donc pas autorisé.',
            'Toutefois, dès lors que vos compétences génèrent des commandes régulières auprès d\'entreprises ou de clients particuliers, le passage au statut d\'auto-entrepreneur sécurise votre chiffre d\'affaires jusqu\'à 5 millions DZD/an, ouvre l\'accès à la retraite CASNOS et vous permet d\'émettre des factures conformes avec nos outils dédiés.'
          ],
        },
      },
      {
        heading: {
          ar: 'الالتزامات المحاسبية البسيطة والتصريح الضريبي السنوي للمقاول الذاتي',
          fr: 'Obligations déclaratives simplifiées et tenue de facturation pour l\'auto-entrepreneur',
        },
        paragraphs: {
          ar: [
            'بعد استلام بطاقة المقاول الذاتي والرقم الجبائي NIF، تصبح أمام التزامات تنظيمية خفيفة لكنها ضرورية للحفاظ على وضعيتك القانونية سليمة. تتمثل الخطوة الأولى في مسك سجل مرقم وبسيط للمداخيل والمبيعات، وإصدار فواتير تحمل اسمك الكامل، رقم بطاقة المقاول الذاتي، رقم NIF، وصف الخدمة المقدمة، والمبلغ الصافي المتفق عليه مع العميل.',
            'سنويا، تقدم لدى مفتشية الضرائب التابع لها التصريح الضريبي الخاص بنظام الضريبة الجزافية الوحيدة (نموذج G12) خلال الآجال القانونية المحددة لتحديد الضريبة الرمزية البالغة 0.5% من رقم الأعمال المحقق، مع الحد الأدنى القانوني المعمول به في التشريع الجبائي، مما يمنحك شهادة تسوية جبائية تفتح أمامك أبواب القروض البنكية والصفقات مع المتعاملين العموميين والخواص.'
          ],
          fr: [
            'Une fois votre carte ANAE et votre numéro NIF obtenus, quelques bonnes habitudes administratives suffisent à sécuriser durablement votre activité. Tenez un registre chronologique simple des encaissements et veillez à mentionner sur chaque facture votre nom complet, le numéro de carte d\'auto-entrepreneur, votre NIF ainsi que l\'exonération légale de TVA le cas échéant.',
            'Chaque année, déposez votre déclaration annuelle simplifiée au titre de l\'IFU (série G12) auprès du centre des impôts de rattachement dans les délais légaux pour acquitter le prélèvement réduit de 0,5 % (ou le minimum d\'imposition réglementaire). Cette conformité vous permet d\'obtenir les attestations fiscales exigées par les entreprises clientes et les banques partenaires.'
          ],
        },
        bullets: {
          ar: [
            'تضمين رقم البطاقة والرقم الجبائي NIF بوضوح في ترويسة كل فاتورة صادرة للعملاء.',
            'حفظ نسخ إلكترونية من كل العقود والفواتير المحصلة ومقارنتها مع كشف الحساب البنكي.',
            'متابعة آجال التصريح الضريبي G12 واشتراك كاسنوس قبل نهاية شهر جوان كل سنة.',
          ],
          fr: [
            'Faites figurer votre numéro de carte ANAE et votre NIF sur chaque devis et facture.',
            'Centralisez vos justificatifs bancaires et factures payées dans un dossier comptable mensuel.',
            'Respectez conjointement le calendrier fiscal IFU G12 et l\'échéance CASNOS du 30 juin.',
          ],
        },
      },
    ],
    comparisonTable: {
      headers: [
        { ar: 'وجه المقارنة', fr: 'Critère comparatif' },
        { ar: 'بطاقة المقاول الذاتي ANAE', fr: 'Statut Auto-Entrepreneur ANAE' },
        { ar: 'منحة البطالة ANEM', fr: 'Allocation Chômage ANEM' },
      ],
      rows: [
        [
          { ar: 'طبيعة الوضع القانوني', fr: 'Statut juridique' },
          { ar: 'نشاط مهني مستقل مدر للدخل', fr: 'Activité indépendante légale' },
          { ar: 'دعم اجتماعي مؤقت لطالب شغل', fr: 'Soutien social transitoire' },
        ],
        [
          { ar: 'الفئة العمرية', fr: 'Tranche d\'âge' },
          { ar: 'سن الرشد القانوني (18 سنة فما فوق)', fr: 'Âge légal de travail (18 ans et plus)' },
          { ar: 'من 19 إلى 40 سنة', fr: 'De 19 à 40 ans' },
        ],
        [
          { ar: 'إصدار الفواتير والتعاقد', fr: 'Droit de facturation' },
          { ar: 'نعم، بفواتير قانونية وعقد عمل حر', fr: 'Oui, facturation légale (NIF/CASNOS)' },
          { ar: 'ممنوع ممارسة أي نشاط مدر للدخل', fr: 'Tout revenu d\'activité est incompatible' },
        ],
        [
          { ar: 'الضمان الاجتماعي', fr: 'Sécurité sociale' },
          { ar: 'صندوق CASNOS باشتراك مخفض 24,000 دج', fr: 'Couverture CNAS prise en charge par l\'État' },
          { ar: 'تغطية صحية بالشفاء عبر الصندوق', fr: 'Couverture santé Chifa incluse' },
        ],
      ],
    },
    relatedSectors: ['anae', 'anem', 'commerce'],
    relatedTools: [
      { category: 'productivity', slug: 'invoice-generator', label: { ar: 'إنشاء فواتير المقاول الذاتي', fr: 'Créer une Facture Auto-Entrepreneur' } },
      { category: 'productivity', slug: 'cv-builder', label: { ar: 'بناء السيرة الذاتية لمنصة وسيط', fr: 'Générateur de CV Pro' } },
    ],
    faqs: [
      {
        question: {
          ar: 'هل يمكن للموظف في القطاع العام أو الخاص الحصول على بطاقة المقاول الذاتي؟',
          fr: 'Un salarié peut-il cumuler son emploi avec la carte d\'auto-entrepreneur ?',
        },
        answer: {
          ar: 'يسمح التنظيم الجزائري لبعض الفئات أو في حالات محددة غير متعارضة مع قانون الوظيف العمومي واللائحة الداخلية بمراجعة شروط التفرغ؛ فبالنسبة لموظفي القطاع العام تطبق قواعد منع الجمع بين الوظائف في غير النشاط العلمي والأكاديمي المرخص.',
          fr: 'Pour les fonctionnaires relevant de la fonction publique, le cumul d\'activités lucratives demeure strictement encadré par le statut général. Pour le secteur privé, vérifiez l\'absence de clause d\'exclusivité dans votre contrat de travail.',
        },
      },
      {
        question: {
          ar: 'ماذا يحدث إذا تجاوز رقم أعمال المقاول الذاتي 5 ملايين دج سنويا؟',
          fr: 'Que se passe-t-il si le chiffre d\'affaires dépasse le plafond de 5 millions DZD ?',
        },
        answer: {
          ar: 'إذا تجاوزت العتبة لثلاث سنوات متتالية، يلزم المتعامل بالانتقال إلى سجل تجاري نظامي أو شركة اقتصادية مع الاحتفاظ بحقوقه الجبائية والاجتماعية السابقة.',
          fr: 'En cas de dépassement du seuil de 5 millions DZD durant trois exercices consécutifs, l\'activité bascule vers l\'immatriculation classique au registre du commerce ou en société.',
        },
      },
      {
        question: {
          ar: 'كيف أجدد التسجيل كل 6 أشهر في منصة وسيط ANEM؟',
          fr: 'Comment prolonger son inscription Wassit tous les 6 mois en ligne ?',
        },
        answer: {
          ar: 'ادخل إلى موقع wassitonline.anem.dz واختر تمديد طلبي (Prolonger ma demande) بإدخال رقم بطاقة التعريف ورقم التسجيل ليتم التمديد فورا دون تنقل.',
          fr: 'Rendez-vous sur wassitonline.anem.dz, sélectionnez « Prolonger ma demande », saisissez votre numéro de pièce d\'identité et numéro d\'inscription pour valider la prolongation de 6 mois.',
        },
      },
      {
        question: {
          ar: 'هل يمكن لحامل شهادة التكوين المهني أو عدم الحامل لشهادة جامعية التسجيل في ANAE؟',
          fr: 'Un diplôme universitaire est-il exigé pour obtenir la carte ANAE ?',
        },
        answer: {
          ar: 'لا يشترط شهادة جامعية في معظم الأنشطة الحرفية والرقمية، بل يكفي إثبات المؤهل أو المهارة العملية في التخصص المختار ضمن المدونة الوطنية.',
          fr: 'Non, la majorité des activités numériques et de services restent ouvertes sans condition de diplôme universitaire, sur la base des compétences professionnelles déclarées.',
        },
      },
    ],
  },
  {
    slug: 'sonelgaz-bill-tariffs-guide',
    category: { ar: 'الطاقة وفواتير الخدمات', fr: 'Énergie & Facturation' },
    publishedAt: '2026-04-20',
    updatedAt: '2026-05-03',
    readTimeMinutes: 8,
    title: {
      ar: 'فهم فاتورة سونلغاز الكهرباء والغاز: الأشطر الأربعة، قراءة العداد، والدفع الإلكتروني',
      fr: 'Comprendre sa facture Sonelgaz : les 4 tranches tarifaires, relevé de compteur et e-paiement',
    },
    excerpt: {
      ar: 'شرح واضح لتفاصيل فاتورة سونلغاز الثلاثية في الجزائر: كيف تحتسب الشطور الأربعة للكهرباء والغاز، الفرق بين الاستهلاك الحقيقي والتقديري، وطريقة الدفع الإلكتروني دون رسوم.',
      fr: 'Décryptez chaque ligne de votre facture trimestrielle Sonelgaz : fonctionnement des 4 tranches progressives, relevé des index réels, TVA et règlement en ligne sans déplacement.',
    },
    quickAnswer: {
      ar: 'تحسب فاتورة سونلغاز كل ثلاثة أشهر وفق نظام الشطور التصاعدية الأربعة؛ حيث يستفيد الشطر الأول والثاني (حتى 250 كيلوواط ساعي في الكهرباء و2500 ثيرمية في الغاز) من تسعيرة مدعمة منخفضة، بينما تقفز تكلفة الوحدة في الشطرين الثالث والرابع، ويمكن دفع الفاتورة وتقديم قراءة العداد إلكترونيا عبر بوابة sge.sonelgaz.dz وبريدي موب.',
      fr: 'La facture trimestrielle Sonelgaz applique un barème progressif à 4 tranches : les deux premières bénéficient d\'un tarif fortement subventionné (jusqu\'à 250 kWh et 2 500 thermies), tandis que les tranches 3 et 4 augmentent sensiblement le coût du kWh. Vous pouvez transmettre votre auto-relevé d\'index et régler en ligne sur sge.sonelgaz.dz ou BaridiMob.',
    },
    sections: [
      {
        heading: {
          ar: 'لماذا ترتفع فاتورة سونلغاز فجأة؟ أسرار نظام الشطور الأربعة',
          fr: 'Pourquoi votre facture augmente brutalement : le système des 4 tranches',
        },
        paragraphs: {
          ar: [
            'يلاحظ الكثير من المواطنين في الجزائر تضاعف قيمة فاتورة سونلغاز خلال ذروة الصيف بسبب تشغيل المكيفات أو في فصل الشتاء مع التدفئة، رغم أن زيادة الاستهلاك تبدو محدودة نسبيا. يرجع السبب الرئيسي إلى نظام الأشطر التصاعدية الأربعة الذي تضبطه لجنة ضبط الكهرباء والغاز CREG لتوجيه الدعم الحكومي نحو الاستهلاك العائلي المعتدل.',
            'في الكهرباء المنزلية، يقسم الاستهلاك الثلاثي إلى أربعة شطور: الشطر الأول من 0 إلى 125 كيلوواط ساعي بسعر رمزي مدعم، والشطر الثاني من 126 إلى 250 كيلوواط ساعي بسعر متوسط مع تطبيق ضريبة TVA مخفضة بنسبة 9%. فور تخطي عتبة 250 كيلوواط ساعي، تدخل كل الكمية الزائدة في الشطر الثالث (من 251 إلى 1000 كيلوواط) والشطر الرابع (أكثر من 1000 كيلوواط) بتسعيرة غير مدعمة مضاف إليها ضريبة قيمة مضافة بنسبة 19%.'
          ],
          fr: [
            'De nombreux foyers constatent un bond soudain de leur facture Sonelgaz en plein été avec les climatiseurs ou en hiver avec le chauffage, parfois pour une hausse modérée des kWh consommés. Ce phénomène s\'explique par la structure progressive à quatre tranches réglementée par la CREG afin de concentrer les subventions sur la consommation domestique modérée.',
            'Pour l\'électricité basse tension, les 125 premiers kWh du trimestre (Tranche 1) et les 125 suivants (Tranche 2) profitent d\'un tarif très bas et d\'une TVA réduite à 9 %. Dès que le compteur dépasse 250 kWh cumulés sur le trimestre, chaque kWh supplémentaire bascule en Tranche 3 (251 à 1 000 kWh) puis en Tranche 4 (au-delà de 1 000 kWh) à un tarif nettement plus élevé assorti d\'une TVA à 19 %.'
          ],
        },
        bullets: {
          ar: [
            'الشطر 1 و2 (حتى 250 kWh / 2500 Th): تسعيرة مدعمة ورسم قيمة مضافة مخفض 9%.',
            'الشطر 3 و4 (فوق 250 kWh / 2500 Th): تسعيرة مرتفعة ورسم قيمة مضافة 19%.',
            'رسوم إضافية ثابتة: حق السكن وحق التلفزيون (100 دج) واشتراك العدادات.',
          ],
          fr: [
            'Tranches 1 & 2 (jusqu\'à 250 kWh / 2 500 Th) : tarifs aidés et TVA réduite de 9 %.',
            'Tranches 3 & 4 (au-delà) : tarification pleine et passage à la TVA à 19 %.',
            'Taxes annexes fixes : droit fixe, taxe d\'habitation et redevance TV réglementaire.',
          ],
        },
      },
      {
        heading: {
          ar: 'كيفية التبليغ الذاتي عن قراءة العداد لتفادي الفواتير التقديرية',
          fr: 'Éviter les factures estimées grâce à l\'auto-relevé des index',
        },
        paragraphs: {
          ar: [
            'في حال عدم تمكن عون القراءة التابع لسونلغاز من الدخول إلى عدادك المنزلي، تصدر الوكالة فاتورة تقديرية (Estimation) مبنية على متوسط استهلاك سابق، وقد تتراكم عند القراءة الفعلية التالية فجوة كبيرة تدفع بالكمية المجمعة فجأة إلى الشطرين الثالث والرابع المكلفين.',
            'لتفادي هذا الإشكال، تتيح بوابة سونلغاز الرقمية وتطبيق الشركة خدمة إرسال الأرقام الحقيقية للعداد (Auto-relève) في الفترة المحددة قبل إصدار الفاتورة، أو عبر الهاتف بالوكالة التجارية. احرص دائما على مراجعة المؤشر القديم والمؤشر الجديد المطبوعين على ورقة الفاتورة ومطابقتهما مع الأرقام الظاهرة في شاشة العداد.'
          ],
          fr: [
            'Lorsque l\'agent releveur ne peut accéder au compteur (absence du logement ou boîtier fermé), la facture est établie sur la base d\'une consommation estimée. Le risque majeur survient au trimestre suivant lors de la régularisation réelle : le rattrapage cumulé propulse d\'un seul coup votre volume facturé dans les tranches 3 et 4 beaucoup plus onéreuses.',
            'Pour prévenir ces écarts, relevez régulièrement les cinq premiers chiffres de votre compteur (hors décimales rouges) et transmettez votre auto-relevé directement depuis votre espace client en ligne Sonelgaz ou auprès de votre agence avant la date de clôture du cycle trimestriel.'
          ],
        },
      },
      {
        heading: {
          ar: 'التحقق المسبق من قيمة الفاتورة ودفعها إلكترونيا دون طوابير',
          fr: 'Estimer votre facture à l\'avance et la régler par e-paiement',
        },
        paragraphs: {
          ar: [
            'قبل وصول الموزع البريدي أو للتحقق من حساب الفاتورة الحالية، تمنحك حاسبة فاتورة سونلغاز التفاعلية في بوابتنا إمكانية إدخال رقم قراءة الكهرباء والغاز ومعرفة المبلغ التفصيلي شطرا بشطر مع جميع الضرائب والرسوم.',
            'وعند رغبتك في التسديد، يكفي الدخول إلى بوابة الدفع الإلكتروني على موقع سونلغاز وإدخال رقم الفاتورة والرمز المرجعي (Référence) الموجود في أعلى الفاتورة لإتمام الدفع عبر البطاقة الذهبية أو CIB، أو استخدام قائمة دفع الفواتير المدمجة في تطبيق بريدي موب BaridiMob مع الاحتفاظ بوصل الدفع الرقمي.'
          ],
          fr: [
            'Vous pouvez contrôler instantanément l\'exactitude de votre quittance ou simuler votre dépense trimestrielle en cours grâce à notre calculateur Sonelgaz interactif, qui détaille automatiquement la répartition sur les 4 tranches, la TVA par palier et les taxes annexes.',
            'Pour le règlement sans déplacement, utilisez soit la plateforme officielle de télépaiement Sonelgaz (avec votre référence client et le numéro de facture figurant en en-tête), soit directement l\'application BaridiMob avec génération immédiate d\'un justificatif de paiement électronique.'
          ],
        },
      },
      {
        heading: {
          ar: 'تسهيلات الدفع بالتقسيط ونصائح الترشيد الطاقوي في المنزل',
          fr: 'Demander un échéancier et réduire efficacement sa consommation',
        },
        paragraphs: {
          ar: [
            'في الحالات الاستثنائية التي تتراكم فيها مستحقات ضخمة بسبب فاتورة تسوية أو وضع اجتماعي خاص، تقبل الوكالات التجارية لسونلغاز طلب جدولة الدفع على أقساط شهرية دون قطع التموين طالما التزم المشترك بدفع القسط الأول وفي المواعيد المتفق عليها.',
            'ولإبقاء استهلاكك ضمن حدود الشطور المدعمة طوال السنة، يوصى بضبط درجة حرارة المكيفات الصيفية على 25 درجة مئوية بدلا من 18 درجة، استبدال المصابيح التقليدية بمصابيح LED منخفضة الاستهلاك، وإطفاء سخانات المياه الكهربائية والأجهزة الموضوعة في وضع الاستعداد ليلا.'
          ],
          fr: [
            'Si une régularisation importante ou une difficulté passagère empêche le paiement intégral avant la date limite, rapprochez-vous rapidement de votre agence commerciale Sonelgaz pour solliciter un échéancier amiable permettant d\'étaler la dette tout en évitant la coupure de fourniture.',
            'Au quotidien, quelques écogestes suffisent à rester dans les tranches modérées : régler la climatisation à 25°C en été, remplacer les ampoules halogènes par des LED basse consommation, entretenir régulièrement les chaudières gaz et couper les appareils électriques en veille.'
          ],
        },
      },
      {
        heading: {
          ar: 'الخدمات الرقمية لطلبات التوصيل الجديد، تغيير القدرة، والتعويض عن التجهيزات',
          fr: 'Raccordement en ligne, modification de puissance et réclamations en cas de surtension',
        },
        paragraphs: {
          ar: [
            'لم تعد علاقة المواطن بمسير الشبكة الكهربائية والغازية مقتصرة على تسديد الفواتير فقط، بل شملت المنصة الرقمية لسونلغاز خدمة إيداع طلبات التوصيل الجديد بالكهرباء أو الغاز للمساكن والمحلات، وكذا طلبات رفع قوة العداد في حال تركيب تجهيزات كهرومنزلية ثقيلة أو أجهزة تكييف متعددة، مع تتبع مسار الدراسة التقنية ومقايسة الأشغال عبر الإنترنت.',
            'كما يجهل كثير من المشتركين حقهم التنظيمي في تقديم شكوى رسمية مرفقة بتقرير تقني وفاتورة إصلاح معتمدة لدى الوكالة التجارية لسونلغاز في حال تعرضت أجهزتهم المنزلية لأعطال مثبتة ناجمة عن ارتفاع مفاجئ غير طبيعي في التوتر الكهربائي على مستوى الشبكة، وفق الشروط والإجراءات المنصوص عليها في دفتر شروط التوزيع العمومي.'
          ],
          fr: [
            'Au-delà de la simple facturation, l\'espace numérique Sonelgaz permet également d\'introduire des demandes de raccordement neuf à l\'électricité ou au gaz naturel, ainsi que des augmentations de puissance de compteur lorsque vous installez plusieurs climatiseurs ou équipements énergivores. Le suivi de l\'étude technique et du devis s\'effectue sans allers-retours inutiles.',
            'Enfin, en cas de dommage avéré sur vos appareils électroménagers consécutif à une surtension anormale du réseau de distribution, pensez à déposer rapidement une réclamation écrite auprès de l\'agence territoriale accompagnée d\'un constat technique et de factures de réparation afin de faire examiner votre demande d\'indemnisation selon le cahier des charges en vigueur.'
          ],
        },
        bullets: {
          ar: [
            'مقارنة الفاتورة عبر حاسبتنا التفاعلية قبل التسديد لاكتشاف أي قفزة غير معتادة في الشطور.',
            'استخدام الرقم الأخضر 3303 للتبليغ الفوري عن انقطاع التيار أو تذبذب الفولتية بالحي.',
            'تفعيل الإشعارات الإلكترونية عبر بوابة الزبائن لتلقي إشعار الفاتورة مبكرا.',
          ],
          fr: [
            'Simulez votre consommation sur notre calculateur avant réception pour anticiper le budget trimestriel.',
            'Signalez toute variation importante de tension au 3303 afin de protéger vos appareils domestiques.',
            'Activez la facture électronique dans votre espace client pour recevoir vos avis sans retard postal.',
          ],
        },
      },
    ],
    comparisonTable: {
      headers: [
        { ar: 'الشطر الاستهلاكي', fr: 'Tranche tarifaire' },
        { ar: 'نطاق الكهرباء (3 أشهر)', fr: 'Plage Électricité (trimestre)' },
        { ar: 'نطاق الغاز (3 أشهر)', fr: 'Plage Gaz (trimestre)' },
        { ar: 'ضريبة TVA المطبقة', fr: 'Taux de TVA appliqué' },
      ],
      rows: [
        [
          { ar: 'الشطر الأول (مدعم)', fr: 'Tranche 1 (Sociale)' },
          { ar: '0 إلى 125 kWh', fr: '0 à 125 kWh' },
          { ar: '0 إلى 1,125 Th', fr: '0 à 1 125 Th' },
          { ar: '9%', fr: '9 %' },
        ],
        [
          { ar: 'الشطر الثاني (مخفض)', fr: 'Tranche 2 (Modérée)' },
          { ar: '126 إلى 250 kWh', fr: '126 à 250 kWh' },
          { ar: '1,126 إلى 2,500 Th', fr: '1 126 à 2 500 Th' },
          { ar: '9%', fr: '9 %' },
        ],
        [
          { ar: 'الشطر الثالث (عادي)', fr: 'Tranche 3 (Standard)' },
          { ar: '251 إلى 1,000 kWh', fr: '251 à 1 000 kWh' },
          { ar: '2,501 إلى 7,500 Th', fr: '2 501 à 7 500 Th' },
          { ar: '19%', fr: '19 %' },
        ],
        [
          { ar: 'الشطر الرابع (مرتفع)', fr: 'Tranche 4 (Intensif)' },
          { ar: 'أكثر من 1,000 kWh', fr: 'Plus de 1 000 kWh' },
          { ar: 'أكثر من 7,500 Th', fr: 'Plus de 7 500 Th' },
          { ar: '19%', fr: '19 %' },
        ],
      ],
    },
    relatedSectors: ['sonalgaz', 'sonalgaz-bill-guide', 'seaal'],
    relatedTools: [
      { category: 'calculators', slug: 'electricity-calculator', label: { ar: 'تشغيل حاسبة فاتورة سونلغاز', fr: 'Lancer le Simulateur Facture Sonelgaz' } },
      { category: 'daily-life', slug: 'budget-calculator', label: { ar: 'حاسبة ميزانية البيت الشهرية', fr: 'Calculateur de Budget Familial' } },
    ],
    faqs: [
      {
        question: {
          ar: 'ما هو رقم الطوارئ عند انقطاع الكهرباء أو شم رائحة تسرب الغاز؟',
          fr: 'Quel numéro appeler en urgence en cas de coupure ou fuite de gaz ?',
        },
        answer: {
          ar: 'توفر سونلغاز الرقم الوطني الموحد 3303 المتاح 24 ساعة على 24 للتدخل السريع عند الأعطال الكهربائية أو تسربات الغاز في أي ولاية.',
          fr: 'Composez immédiatement le numéro vert national d\'urgence 3303 joignable 24h/24 et 7j/7 pour toute anomalie électrique ou suspicion de fuite de gaz.',
        },
      },
      {
        question: {
          ar: 'كيف أحول الفاتورة إلى اسمي عند شراء أو استئجار مسكن جديد؟',
          fr: 'Comment effectuer le transfert de contrat Sonelgaz lors d\'un emménagement ?',
        },
        answer: {
          ar: 'تقدم إلى الوكالة التجارية مرفوقا بعقد الملكية أو الإيجار، بطاقة التعريف البيومترية، وآخر فاتورة مسددة مع قراءة العداد الحالية لطلب التنازل وفتح الاشتراك باسمك.',
          fr: 'Présentez à votre agence commerciale l\'acte de propriété ou contrat de bail, votre carte biométrique, la dernière facture acquittée ainsi qu\'une photo de l\'index actuel du compteur.',
        },
      },
      {
        question: {
          ar: 'هل يمكن الاعتراض على فاتورة غير منطقية قبل قطع التزويد؟',
          fr: 'Comment contester une facture manifestement erronée ou surestimée ?',
        },
        answer: {
          ar: 'نعم، صور شاشة العداد بوضوح مع الرقم الظاهر وقدم طلبا للمراجعة (Réclamation) لدى مصلحة الزبائن أو عبر البوابة الرقمية ليتم تعديل الفاتورة فورا وفق الاستهلاك الفعلي.',
          fr: 'Prenez une photo nette du compteur affichant le relevé réel et déposez une réclamation au service clientèle ou en ligne afin d\'obtenir une facture rectificative.',
        },
      },
      {
        question: {
          ar: 'كم تستغرق المهلة القانونية بعد تسليم إشعار الدفع لتفادي القطع؟',
          fr: 'Quel est le délai réglementaire pour régler sa facture sans pénalité ?',
        },
        answer: {
          ar: 'يمهل المشترك عادة 15 يوما من تاريخ الاستلام والتبليغ لتسديد الفاتورة عبر البريد أو البنوك أو الإنترنت، ويضاف على الفواتير المؤداة نقدا في الوكالات طابع دمغة نسبي بسيط.',
          fr: 'Un délai usuel de 15 jours est accordé après réception de l\'avis ; le paiement en ligne par carte évite tout timbre fiscal de quittance en espèces et met à jour votre solde immédiatement.',
        },
      },
    ],
  },
];
