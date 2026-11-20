import { ToolItem, ToolRichGuide } from '@/lib/types';

export const batch7Tools: ToolItem[] = [
  {
    id: 'tool-pdf',
    slug: 'pdf-tools',
    category: 'productivity',
    isPopular: true,
    name: {
      ar: 'أدوات ملفات PDF المحلية (دمج الملفات واستخراج الصفحات)',
      fr: 'Boîte à Outils PDF 100 % Locale (Fusionner & Extraire)',
    },
    description: {
      ar: 'ادمج عدة ملفات PDF في مستند واحد أو استخرج صفحات محددة من ملف مباشرة داخل متصفحك عبر مكتبة pdf-lib، دون رفع مستنداتك الحساسة لأي خادم خارجي أو تسجيل.',
      fr: 'Fusionnez plusieurs documents PDF en un seul fichier ou extrayez une sélection de pages directement dans votre navigateur sans jamais téléverser vos pièces sur un serveur.',
    },
    iconName: 'FileText',
    faqs: [
      {
        question: {
          ar: 'هل يتم رفع ملفاتي الإدارية أو شهاداتي إلى خادم خارجي عند الدمج أو الفصل؟',
          fr: 'Mes documents administratifs ou diplômes sont-ils envoyés sur un serveur ?',
        },
        answer: {
          ar: 'لا إطلاقا؛ تتم معالجة جميع ملفات PDF محليا داخل متصفحك باستخدام تقنيات JavaScript الآمنة، ولا ترسل أو تخزن مستنداتك الحساسة على أي خادم نهائيا.',
          fr: 'Jamais ; l’intégralité du traitement s’exécute localement dans votre navigateur via pdf-lib sans aucun transfert ni stockage externe.',
        },
      },
      {
        question: {
          ar: 'ما استخدامات هذه الأداة في الملفات الإدارية والجامعية بالجزائر؟',
          fr: 'Dans quels cas cet outil PDF est-il particulièrement utile en Algérie ?',
        },
        answer: {
          ar: 'يفيد في تجميع عدة وثائق (بطاقة التعريف، الشهادة، كشف النقاط، طلب خطي) في ملف PDF واحد عند اشتراط المنصات الرقمية لملف موحد، أو استخراج صفحة واحدة مطلوبة من وثيقة طويلة.',
          fr: 'Idéal pour réunir plusieurs pièces justificatives (CNI, diplôme, relevé de notes, demande) en un dossier PDF unique exigé par les portails d’inscription ou concours.',
        },
      },
      {
        question: {
          ar: 'هل تتطلب الأداة تثبيت برامج أو اشتراكا مدفوعا؟',
          fr: 'L’outil exige-t-il un abonnement ou un logiciel supplémentaire ?',
        },
        answer: {
          ar: 'لا؛ الأداة مجانية بالكامل وتعمل مباشرة عبر المتصفح على الحاسوب والهاتف دون حدود لعدد المرات.',
          fr: 'Non ; le service est entièrement gratuit dans votre navigateur sur ordinateur comme sur mobile, sans limitation d’usage.',
        },
      },
    ],
  },
  {
    id: 'tool-qr',
    slug: 'qr-generator',
    category: 'productivity',
    name: {
      ar: 'مولد رموز الاستجابة السريعة QR Code (روابط، نصوص، Wi-Fi)',
      fr: 'Générateur de Codes QR Hors-Ligne (Liens, Texte & Wi-Fi PNG)',
    },
    description: {
      ar: 'أنشئ رمز QR Code للروابط والمواقع أو النصوص أو شبكة Wi-Fi فورا داخل المتصفح، ثم حمله بصيغة صورة PNG عالية الوضوح للاستخدام والطباعة والمشاركة مجانا.',
      fr: 'Générez instantanément des QR Codes pour vos URL, textes libres ou accès Wi-Fi directement en local et téléchargez-les au format image PNG sans inscription.',
    },
    iconName: 'QrCode',
    faqs: [
      {
        question: {
          ar: 'ما أنواع المحتوى التي يمكن تحويلها إلى رمز QR في هذه الأداة؟',
          fr: 'Quels types de contenus puis-je encoder en QR Code ?',
        },
        answer: {
          ar: 'يمكنك إنشاء رموز لروابط المواقع الإلكترونية، النصوص التعريفية، معلومات الاتصال، أو بيانات الاتصال بشبكة Wi-Fi بصيغة قياسية قابلة للمسح عبر كاميرا أي هاتف.',
          fr: 'Vous pouvez générer des codes pour des adresses web (URL), textes courts, cartes de visite ou identifiants de réseau Wi-Fi lisibles par tout smartphone.',
        },
      },
      {
        question: {
          ar: 'هل تنتهي صلاحية رمز QR الذي أنشئه بعد مدة محددة؟',
          fr: 'Les QR Codes générés expirent-ils avec le temps ?',
        },
        answer: {
          ar: 'لا؛ تولد الأداة رموز QR ثابتة (Static) مرمزة مباشرة بالمحتوى الذي أدخلته دون الاعتماد على رابط وسيط، لذا تظل صالحة دائما ما دام الرابط أو النص المضمن صحيحا.',
          fr: 'Non ; ce sont des QR Codes statiques autonomes encodant directement votre contenu sans redirection tierce ni date d’expiration.',
        },
      },
      {
        question: {
          ar: 'بأي صيغة يتم تنزيل الرمز وكيف أضمن نجاح مسحه عند الطباعة؟',
          fr: 'Dans quel format le code est-il téléchargé et comment garantir une bonne lecture ?',
        },
        answer: {
          ar: 'ينزل الرمز كصورة PNG جاهزة للإدراج في الملصقات أو الفواتير أو السيرة الذاتية؛ احرص على إبقاء هامش أبيض محيط بالرمز وتباين قوي بين اللون الداكن والخلفية الفاتحة.',
          fr: 'Le code s’exporte en image PNG nette ; veillez à conserver une marge blanche tout autour et un contraste élevé lors de l’impression.',
        },
      },
    ],
  },
  {
    id: 'tool-text-tools',
    slug: 'text-tools',
    category: 'productivity',
    name: {
      ar: 'أدوات النصوص والبحوث (إحصاء الكلمات وتنسيق النصوص العربية)',
      fr: 'Boîte à Outils Texte & Recherche (Compteur, Diacritiques & Formatage)',
    },
    description: {
      ar: 'عالج النصوص العربية والبحثية فورا في المتصفح: احسب عدد الكلمات والحروف والأسطر، نظف المسافات والأسطر الفارغة، وأزل التشكيل لتجهيز البحوث والمراسلات بسرعة.',
      fr: 'Analysez et nettoyez vos textes arabes ou français dans le navigateur : compteur précis de mots, caractères et lignes, suppression des diacritiques et formatage rapide.',
    },
    iconName: 'AlignLeft',
    faqs: [
      {
        question: {
          ar: 'ما العمليات النصية التي توفرها أداة النصوص والبحوث؟',
          fr: 'Quelles opérations de traitement de texte propose l’outil ?',
        },
        answer: {
          ar: 'تشمل حساب عدد الكلمات والحروف (مع المسافات ودونها) والأسطر والفقرات، إضافة إلى تنظيف المسافات الزائدة وإزالة التشكيل وتنسيق النص الجاهز للنسخ.',
          fr: 'Comptage détaillé des mots, caractères (avec/sans espaces) et lignes, suppression des signes diacritiques arabes, nettoyage des espaces multiples et copie en un clic.',
        },
      },
      {
        question: {
          ar: 'متى تفيد ميزة إزالة التشكيل أو عد الكلمات للطلبة والباحثين؟',
          fr: 'Dans quelles situations utiliser le compteur ou la suppression des voyelles ?',
        },
        answer: {
          ar: 'تفيد عند الالتزام بعدد كلمات محدد في ملخصات مذكرات التخرج والمقالات الأكاديمية (Abstract)، وعند الرغبة في توحيد النصوص العربية الخالية من الحركات أو تنسيق المسودات المنسوخة.',
          fr: 'Indispensable pour respecter la limite de mots d’un résumé de mémoire, normaliser un texte arabe non vocalisé ou nettoyer un brouillon copié depuis un PDF.',
        },
      },
      {
        question: {
          ar: 'هل تحفظ النصوص التي ألصقها في المحرر على خادم الموقع؟',
          fr: 'Les textes collés dans l’éditeur sont-ils enregistrés en ligne ?',
        },
        answer: {
          ar: 'لا؛ تجري جميع عمليات التحليل والتعديل داخل ذاكرة متصفحك لحظيا دون إرسال أي نص خارج جهازك.',
          fr: 'Non ; toute l’analyse s’opère en mémoire locale dans votre navigateur sans aucune transmission serveur.',
        },
      },
    ],
  },
  {
    id: 'tool-apa-generator',
    slug: 'apa-generator',
    category: 'study',
    name: {
      ar: 'مولد المراجع الأكاديمية APA الإصدار السابع (APA 7)',
      fr: 'Générateur de Références Bibliographiques APA 7e Édition',
    },
    description: {
      ar: 'أنشئ مراجع علمية دقيقة وفق أسلوب APA الإصدار السابع للكتب والمقالات العلمية والمواقع الإلكترونية باللغتين العربية والفرنسية، ونظم قائمة مصادرك واحفظها محليا للبحث.',
      fr: 'Formatez facilement vos citations bibliographiques selon la norme APA 7e édition (livres, articles scientifiques, pages web) en arabe ou en français avec sauvegarde locale.',
    },
    iconName: 'BookMarked',
    faqs: [
      {
        question: {
          ar: 'ما أنواع المصادر التي يغطيها مولد المراجع APA 7؟',
          fr: 'Quels types de sources le générateur APA 7 prend-il en charge ?',
        },
        answer: {
          ar: 'يدعم توليد التوثيق القياسي للكتب المطبوعة والإلكترونية، والمقالات المنشورة في المجلات العلمية المحكمة، وصفحات ومقالات المواقع الإلكترونية الموثوقة باللغتين العربية والفرنسية.',
          fr: 'Il génère les références normalisées pour les ouvrages, articles de revues académiques et ressources web fiables, en français comme en arabe.',
        },
      },
      {
        question: {
          ar: 'هل تحفظ قائمة المراجع عند إغلاق الصفحة أم يجب تصديرها؟',
          fr: 'Ma liste de références reste-t-elle sauvegardée après fermeture ?',
        },
        answer: {
          ar: 'تحفظ قائمة مراجعك محليا داخل هذا المتصفح لتتمكن من إكمال البحث لاحقا، كما يمكنك نسخ القائمة الكاملة بضغطة زر لإدراجها في ملف Word أو مذكرة التخرج.',
          fr: 'Votre bibliographie est conservée localement dans le navigateur afin d’y revenir à tout moment, avec copie directe pour votre document Word ou mémoire.',
        },
      },
      {
        question: {
          ar: 'هل يلتزم المولد بقواعد الترقيم والخط المائل في الإصدار السابع لـ APA؟',
          fr: 'Le formatage respecte-t-il les règles de ponctuation APA 7 ?',
        },
        answer: {
          ar: 'نعم، يرتب المولد اسم المؤلف وسنة النشر وعنوان العمل والناشر أو المجلة والرابط الإلكتروني وفق بنية APA 7 المعتمدة في الجامعات، مع بقاء المراجعة النهائية حسب دليل الكلية المعتمد.',
          fr: 'Oui, il applique la séquence auteur, année, titre, éditeur/revue et URL/DOI de la 7e édition, tout en conseillant de vérifier les consignes propres à votre faculté.',
        },
      },
    ],
  },
  {
    id: 'tool-countdown',
    slug: 'countdown',
    category: 'study',
    name: {
      ar: 'عداد المواعيد الدراسية والتنازلية للامتحانات والتسجيلات',
      fr: 'Compte à Rebours des Examens, Inscriptions & Échéances',
    },
    description: {
      ar: 'أنشئ عدادات تنازلية مخصصة لمواعيد البكالوريا والبيام والامتحانات الجامعية والتسجيلات وإعلان النتائج والتخرج، وتابع الوقت المتبقي لكل حدث محليا حسب تخصصك وجامعتك.',
      fr: 'Créez des comptes à rebours personnalisés pour vos examens (BAC, BEM, partiels LMD), inscriptions universitaires, résultats et soutenances avec suivi local.',
    },
    iconName: 'Hourglass',
    faqs: [
      {
        question: {
          ar: 'كيف أضيف موعد امتحان أو تسليم مذكرة في عداد المواعيد؟',
          fr: 'Comment ajouter une échéance d’examen ou de soutenance ?',
        },
        answer: {
          ar: 'أدخل عنوان الحدث والتاريخ المستهدف وحدد الفئة الدراسية، ليبدأ العداد في احتساب الأيام والساعات المتبقية تلقائيا وينتقل الحدث إلى قسم المواعيد المنتهية بعد انقضائه.',
          fr: 'Saisissez l’intitulé et la date de votre échéance : le décompte en jours restants démarre aussitôt, puis bascule automatiquement dans les événements passés après la date.',
        },
      },
      {
        question: {
          ar: 'هل تعمل المواعيد المسجلة دون إنشاء حساب شخصي؟',
          fr: 'Faut-il créer un compte pour conserver mes comptes à rebours ?',
        },
        answer: {
          ar: 'لا؛ تحفظ رزنامة مواعيدك محليا داخل متصفحك مباشرة دون تسجيل، ما يتيح متابعتها فور فتح الصفحة من نفس الجهاز.',
          fr: 'Non ; vos échéances restent stockées localement dans votre navigateur sans inscription ni partage de données.',
        },
      },
      {
        question: {
          ar: 'كيف أربط العد التنازلي بتخطيط ساعات المذاكرة اليومية؟',
          fr: 'Comment associer le compte à rebours à un vrai planning de révision ?',
        },
        answer: {
          ar: 'بعد تحديد تاريخ الامتحان، انتقل إلى أداة "مخطط الامتحانات والمهام" أو "مخطط المراجعة الذكي" لتوزيع الساعات المتاحة بانتظام قبل حلول الموعد.',
          fr: 'Une fois la date connue, utilisez le planificateur d’examens ou le planning BAC/BEM pour répartir vos séances quotidiennes sans stress.',
        },
      },
    ],
  },
  {
    id: 'tool-exam-planner',
    slug: 'exam-planner',
    category: 'study',
    name: {
      ar: 'مخطط الامتحانات والمهام الجامعية والتنبيهات الداخلية',
      fr: 'Planificateur Universitaire d’Examens, Devoirs & Révisions',
    },
    description: {
      ar: 'اجمع مواعيد الامتحانات والفروض والبحوث والتسجيلات في تقويم جامعي موحد، مع توزيع ذكي لساعات المراجعة (بحد أقصى ساعتين يوميا لكل موعد) وتنبيهات داخل الصفحة دون أذونات.',
      fr: 'Centralisez examens, devoirs, remises de mémoires et inscriptions dans un calendrier unifié avec répartition automatique des révisions (max 2 h/jour par échéance) et alertes intégrées.',
    },
    iconName: 'CalendarDays',
    faqs: [
      {
        question: {
          ar: 'كيف يوزع المخطط ساعات المراجعة قبل موعد الامتحان أو البحث؟',
          fr: 'Comment les heures de révision sont-elles réparties avant un examen ?',
        },
        answer: {
          ar: 'يوزع المخطط الساعات المطلوبة لكل مادة على الأيام المتاحة قبل الموعد في التقويم، مع اقتراح جلسات يومية متوازنة لا تتجاوز ساعتين لكل موعد لتفادي الإرهاق وتراكم الساعات.',
          fr: 'L’outil répartit votre volume horaire sur les jours disponibles avant chaque date limite, en plafonnant les suggestions à 2 heures quotidiennes par échéance pour éviter la surcharge.',
        },
      },
      {
        question: {
          ar: 'هل تتطلب تنبيهات المواعيد تفعيل إشعارات المتصفح المزعجة؟',
          fr: 'Les rappels nécessitent-ils d’autoriser les notifications du navigateur ?',
        },
        answer: {
          ar: 'لا؛ تظهر التنبيهات داخل واجهة الصفحة نفسها وتتجدد تلقائيا أثناء إبقاء الصفحة مفتوحة، كما تشير النقاط أسفل الأيام في التقويم إلى وجود مواعيد مسجلة.',
          fr: 'Non ; les alertes s’affichent directement dans l’interface et s’actualisent tant que l’onglet reste ouvert, sans demande d’autorisation système.',
        },
      },
      {
        question: {
          ar: 'هل يمكن جمع الفروض وتسليم البحوث مع الامتحانات في تقويم واحد؟',
          fr: 'Puis-je combiner devoirs, projets et examens finaux au même endroit ?',
        },
        answer: {
          ar: 'نعم، يدعم المخطط تصنيف المواعيد بين امتحان، فرض، تسليم بحث أو مذكرة، ومواعيد التسجيلات الإدارية والجامعية مع الحفظ المحلي على الجهاز.',
          fr: 'Oui, chaque événement peut être catégorisé (examen, contrôle continu, exposé, inscription) et consulté par jour directement sur le calendrier.',
        },
      },
    ],
  },
  {
    id: 'tool-exam-study-planner',
    slug: 'exam-study-planner',
    category: 'study',
    isPopular: true,
    name: {
      ar: 'مخطط المراجعة الذكي للبكالوريا والبيام (BAC / BEM)',
      fr: 'Planificateur Intelligent de Révisions BAC & BEM',
    },
    description: {
      ar: 'حول الأيام المتبقية لامتحان البكالوريا أو التعليم المتوسط إلى برنامج مراجعة يومي متوازن حسب صعوبة وأولوية كل مادة، مع تتبع الإنجاز وإعادة جدولة الحصص المتأخرة والطباعة.',
      fr: 'Transformez les jours restants avant le BAC ou le BEM en programme quotidien équilibré selon la difficulté et priorité de chaque matière, avec suivi de progression et impression.',
    },
    iconName: 'GraduationCap',
    faqs: [
      {
        question: {
          ar: 'كيف أعطي المواد الأساسية أو الصعبة وقتا أكبر في خطة المراجعة؟',
          fr: 'Comment accorder davantage de temps aux matières difficiles ou à fort coefficient ?',
        },
        answer: {
          ar: 'عند إدخال موادك في جدول المواد ومستوى الصعوبة، حدد مستوى الصعوبة والأولوية لكل مادة ليخصص المخطط حصصا إضافية للمواد الأعلى أولوية بصورة تلقائية.',
          fr: 'Renseignez chaque matière avec son niveau de difficulté et sa priorité : le générateur alloue automatiquement plus de créneaux horaires aux disciplines prioritaires.',
        },
      },
      {
        question: {
          ar: 'ماذا أفعل إذا فاتتني حصة أو لم أنجز برنامج اليوم بالكامل؟',
          fr: 'Que faire si je prends du retard sur certaines séances prévues ?',
        },
        answer: {
          ar: 'تبقى الحصص غير المنجزة محفوظة، وينصح بإعادة توزيع الحصص المتأخرة تدريجيا على الأيام اللاحقة بدل محاولة تعويض كل المادة المتراكمة في يوم واحد مرهق.',
          fr: 'Les séances non cochées restent enregistrées : répartissez progressivement le retard sur les jours suivants plutôt que de tout concentrer en une seule journée.',
        },
      },
      {
        question: {
          ar: 'هل تغني خطة المخطط عن توجيهات الأساتذة والبرنامج الرسمي؟',
          fr: 'Ce planning se substitue-t-il au programme officiel ou aux conseils des enseignants ?',
        },
        answer: {
          ar: 'لا؛ الخطة تنظيمية مرنة لمساعدتك على الالتزام وتقليص القلق وليست بديلا عن توجيهات الأساتذة أو المنهاج الرسمي للامتحان. كما تحفظ البيانات في هذا الجهاز فقط وينصح بتصدير نسخة احتياطية.',
          fr: 'Non ; il s’agit d’un support d’organisation personnel qui complète les consignes de vos professeurs et le programme officiel. Pensez à exporter une copie de sauvegarde.',
        },
      },
    ],
  },
  {
    id: 'tool-flashcards',
    slug: 'flashcards',
    category: 'study',
    isPopular: true,
    name: {
      ar: 'البطاقات التعليمية والتكرار المتباعد والاختبارات (Flashcards)',
      fr: 'Cartes Mémoire (Flashcards), Répétition Espacée & Quiz QCM',
    },
    description: {
      ar: 'حول ملخصاتك إلى بطاقات سؤال وجواب يدويا أو دفعة واحدة (سؤال : إجابة)، وراجع بأسلوب التكرار المتباعد حيث تعود البطاقات الصعبة أسرع، مع اختبار متعدد الخيارات وتصدير محلي.',
      fr: 'Créez des flashcards manuellement ou par import en lot depuis vos résumés (Question : Réponse), révisez par répétition espacée et entraînez-vous en QCM avec export local.',
    },
    iconName: 'Layers',
    faqs: [
      {
        question: {
          ar: 'كيف أنشئ عشرات البطاقات التعليمية دفعة واحدة من ملخصاتي؟',
          fr: 'Comment importer plusieurs cartes rapidement depuis mes fiches de cours ?',
        },
        answer: {
          ar: 'استعمل تبويب الاستيراد السريع من ملخص، واكتب كل معلومة في سطر مستقل مع فصل السؤال عن الإجابة بنقطتين رأسيتين (:)، ثم راجع البطاقات المستخرجة قبل حفظها.',
          fr: 'Utilisez l’import depuis un résumé en plaçant une entrée par ligne et en séparant la question de la réponse par deux-points (:), puis prévisualisez avant d’enregistrer.',
        },
      },
      {
        question: {
          ar: 'كيف تعمل جلسة التكرار المتباعد أثناء المراجعة؟',
          fr: 'Comment fonctionne la séance de répétition espacée ?',
        },
        answer: {
          ar: 'اضغط على البطاقة لإظهار الإجابة ثم قيم مدى تذكرك؛ فتعود البطاقات التي واجهت فيها صعوبة في وقت أقرب مقارنة بالبطاقات التي أتقنتها.',
          fr: 'Retournez chaque carte pour vérifier la réponse puis évaluez votre niveau de rappel : les notions difficiles réapparaissent plus rapidement que celles déjà maîtrisées.',
        },
      },
      {
        question: {
          ar: 'هل يمكن نقل مجموعات البطاقات بين الهاتف والحاسوب؟',
          fr: 'Puis-je transférer mes paquets de cartes entre smartphone et ordinateur ?',
        },
        answer: {
          ar: 'نعم؛ تحفظ بياناتك محليا في المتصفح ولا ترسل لأي خادم، لذا يمكنك تصدير نسخة احتياطية من جهازك الأول واستيرادها في متصفح الجهاز الآخر فورا.',
          fr: 'Oui ; comme aucune donnée n’est envoyée sur un serveur, utilisez l’export JSON pour sauvegarder vos cartes et les réimporter sur un autre appareil.',
        },
      },
    ],
  },
];

export const batch7ToolGuides: Record<string, Partial<ToolRichGuide>> = {
  'pdf-tools': {
    quickSummary: {
      targetAudience: {
        ar: 'المواطنون والطلبة والموظفون المجهزون لملفات المسابقات والتسجيلات الإدارية',
        fr: 'Citoyens, étudiants et candidats préparant des dossiers administratifs PDF',
      },
      processingTime: {
        ar: 'دمج واستخراج فوري في ثوان معدودة داخل المتصفح',
        fr: 'Fusion et extraction instantanées dans le navigateur',
      },
      fees: {
        ar: 'مجاني بالكامل ودون حد للعمليات أو علامات مائية',
        fr: 'Gratuit, illimité et sans filigrane publicitaire',
      },
      channel: {
        ar: 'معالجة محلية 100% (لا ترفع ملفات PDF إلى أي خادم)',
        fr: 'Traitement 100 % côté client sans aucun envoi serveur',
      },
      keyRequirement: {
        ar: 'اختيار ملفات PDF للدمج أو تحديد أرقام/نطاق الصفحات للاستخراج',
        fr: 'Sélection de fichiers PDF ou saisie de la plage de pages à extraire',
      },
    },
    explanation: {
      ar: [
        'توفر أداة ملفات PDF المحلية حلين عمليين لمعظم الطلبات الإدارية والجامعية في الجزائر: دمج عدة ملفات PDF متفرقة في ملف واحد مرتب، أو استخراج صفحات محددة من مستند PDF كبير الحجم.',
        'على عكس المواقع التقليدية التي ترفع مستنداتك الحساسة (مثل بطاقة التعريف، كشوف الراتب، شهادات الميلاد، والوثائق البنكية) إلى خوادم خارجية غير معروفة، تتم كافة العمليات هنا داخل متصفحك مباشرة باستخدام تقنيات JavaScript الحديثة.',
        'يمنحك هذا الأسلوب سرعة فائقة دون انتظار رفع الملفات الكبيرة أو استهلاك باقة الإنترنت، مع الحفاظ الكامل على سرية وثائقك الشخصية والمهنية.',
        'يمكنك بعد المعاينة تنزيل الملف المدمج أو الصفحات المستخرجة فورا بصيغة PDF قياسية جاهزة للطباعة أو الإيداع عبر المنصات الرقمية.'
      ],
      fr: [
        'Cette boîte à outils PDF locale répond aux deux besoins administratifs et universitaires les plus fréquents en Algérie : fusionner plusieurs justificatifs PDF en un seul dossier ordonné, ou extraire des pages précises d’un document volumineux.',
        'Contrairement aux convertisseurs en ligne qui transfèrent vos pièces sensibles (CNI, fiches de paie, relevés bancaires, diplômes) sur des serveurs distants, tout le traitement s’opère localement dans votre navigateur.',
        'Ce fonctionnement 100 % côté client assure une confidentialité totale tout en évitant les temps d’attente et la consommation de données mobiles liés au téléversement.',
        'Le fichier généré respecte le format PDF standard et se télécharge immédiatement pour dépôt sur les portails officiels ou impression.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ المعالجة الهيكلية لملفات PDF محليا',
      fr: 'Principe d’assemblage et d’extraction côté navigateur',
    },
    formulaText: {
      ar: 'الدمج = قراءة الصفحات الثنائية من الملفات المختارة بالترتيب المحدد ونسخها في مستند PDF موحد. الاستخراج = قراءة أرقام الصفحات المطلوبة (مثل 1-3 أو 2،5) وبناء مستند PDF مستقل مع إبقاء الملف الأصلي سليما.',
      fr: 'Fusion = copie séquentielle des pages de chaque PDF sélectionné dans un nouveau document unique. Extraction = copie ciblée des indices de pages demandés (ex. 1-3, 5) sans altérer le fichier source.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تجميع ملف توظيف أو تسجيل جامعي في PDF واحد',
        fr: 'Exemple pratique pour un dossier de concours ou d’inscription',
      },
      scenario: {
        ar: 'مترشح لمسابقة توظيف لديه شهادة التخرج، كشف النقاط، وبطاقة الإقامة في 3 ملفات PDF منفصلة والموقع يقبل ملفا واحدا فقط.',
        fr: 'Un candidat dispose de son diplôme, relevé de notes et certificat de résidence en 3 PDF distincts alors que le portail n’accepte qu’un fichier unique.',
      },
      result: {
        ar: 'يرفع الملفات الثلاثة في قسم الدمج ويرتبها ثم ينشئ ملفا موحدا في ثوان دون خروج أي وثيقة من جهازه.',
        fr: 'Il réunit les trois documents en quelques secondes dans l’ordre voulu sans jamais exposer ses justificatifs sur un serveur externe.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مقارنة وظائف أداة PDF المحلية وشروط الاستخدام',
        fr: 'Modes de traitement PDF et garanties de confidentialité',
      },
      headers: [
        { ar: 'العملية', fr: 'Opération' },
        { ar: 'المدخلات المطلوبة', fr: 'Entrées requises' },
        { ar: 'المخرج والأمان', fr: 'Résultat & sécurité' },
      ],
      rows: [
        [
          { ar: 'دمج عدة ملفات PDF', fr: 'Fusion multi-fichiers' },
          { ar: 'ملفان PDF فأكثر بالترتيب المرغوب', fr: '2 fichiers PDF ou plus ordonnés' },
          { ar: 'مستند PDF واحد مدمج محليا بالكامل', fr: 'PDF unique généré 100 % localement' },
        ],
        [
          { ar: 'استخراج صفحات محددة', fr: 'Extraction de pages' },
          { ar: 'ملف PDF واحد + تحديد الصفحات (مثل 1،3–5)', fr: '1 PDF source + numéros ou plage (ex. 1,3-5)' },
          { ar: 'ملف مستقل للصفحات المختارة دون مساس بالأصل', fr: 'Nouveau PDF ciblé sans modifier l’original' },
        ],
      ],
    },
    tips: {
      ar: [
        'تحقق من ترتيب الملفات قبل الضغط على زر الدمج كي يظهر الطلب أو الغلاف في الصفحة الأولى.',
        'إذا كان حجم ملف الصور الممسوحة كبيرا قبل تحويله، اضغط الصور أولا بأداة ضغط الصور.',
        'احتفظ بنسخة أصلية من مستنداتك قبل الاستخراج رغم أن الأداة لا تعدل ملفات المصدر أبدا.',
        'للوثائق الإدارية المحمية بكلمة مرور، قم بفك القفل من العارض أولا حتى يتسنى للنظام قراءتها.',
      ],
      fr: [
        'Vérifiez l’ordre de vos documents avant de lancer la fusion pour placer votre page de garde en premier.',
        'Si vos justificatifs sont encore au format photo (JPG/PNG), allégez-les d’abord via notre compresseur d’images.',
        'Retirez au préalable les éventuels mots de passe des PDF protégés avant de les importer.',
        'Votre document original reste toujours intact sur votre disque.',
      ],
    },
    extraFaqs: [],
  },

  'qr-generator': {
    quickSummary: {
      targetAudience: {
        ar: 'التجار، المعلمون، الطلبة، وأصحاب المشاريع لتوليد رموز QR للروابط وWi-Fi',
        fr: 'Commerçants, enseignants, étudiants et créateurs générant des QR Codes',
      },
      processingTime: {
        ar: 'توليد وتنزيل فوري بصيغة PNG عالية الدقة',
        fr: 'Génération et téléchargement PNG instantanés',
      },
      fees: {
        ar: 'مجاني بالكامل وبرموز دائمة لا تنتهي صلاحيتها',
        fr: 'Gratuit avec QR Codes statiques sans expiration',
      },
      channel: {
        ar: 'توليد محلي داخل المتصفح دون إرسال الروابط أو كلمات السر للخادم',
        fr: 'Encodage local dans le navigateur (confidentialité Wi-Fi / liens)',
      },
      keyRequirement: {
        ar: 'إدخال الرابط أو النص أو بيانات شبكة Wi-Fi واختيار التنزيل كصورة',
        fr: 'Saisie d’URL, texte ou identifiants Wi-Fi puis export PNG',
      },
    },
    explanation: {
      ar: [
        'يساعدك مولد رموز QR على تحويل أي رابط موقع إلكتروني، نص، رقم، أو بيانات شبكة Wi-Fi إلى رمز استجابة سريعة (QR Code) جاهز للمسح بكاميرا الهواتف الذكية.',
        'تولد الرموز محليا داخل متصفحك مباشرة، ما يعني أن بيانات الشبكات الخاصة أو الروابط السرية لا ترسل إلى أي طرف ثالث ولا تخزن في خادم.',
        'يدعم التنزيل الفوري بصيغة صورة PNG واضحة يسهل إدراجها في السيرة الذاتية، البطاقات المهنية، المذكرات الجامعية، لافتات المحلات، أو فواتير الزبائن.',
        'ولأن الترميز يتم بصيغة ثابتة مباشرة (Static QR Code)، فإن الرمز لا يتعطل ولا يفرض إعادة توجيه عبر مواقع إعلانية ولا تنتهي مدته.'
      ],
      fr: [
        'Le générateur de QR Codes convertit immédiatement toute adresse web, texte libre ou configuration Wi-Fi en image matricielle scannable par n’importe quelle caméra de smartphone.',
        'L’encodage s’effectue intégralement en local dans votre navigateur : vos mots de passe Wi-Fi ou liens internes ne transitent jamais par un serveur externe.',
        'Téléchargez le code en image PNG nette pour l’intégrer sur un CV, une affiche commerciale, une facture, un support de cours ou une carte de visite.',
        'Ces QR Codes statiques contiennent directement la donnée finale sans lien raccourci intermédiaire ni risque d’expiration.'
      ],
    },
    formulaTitle: {
      ar: 'الترميز القياسي للمحتوى والواي فاي (ISO/IEC 18004)',
      fr: 'Encodage matriciel standard et formatage Wi-Fi',
    },
    formulaText: {
      ar: 'للروابط: إدخال الرابط كاملا مع https://. لشبكة Wi-Fi: الصيغة القياسية WIFI:T:WPA;S:<اسم_الشبكة>;P:<كلمة_السر>;; مما يتيح للمستخدمين الاتصال تلقائيا بمجرد المسح.',
      fr: 'URL : lien complet avec https://. Wi-Fi : chaîne standard WIFI:T:WPA;S:<SSID>;P:<MotDePasse>;; permettant une connexion directe au scan.',
    },
    practicalExample: {
      title: {
        ar: 'مثال إنشاء رمز QR لرابط سيرة ذاتية أو شبكة Wi-Fi لمكتب',
        fr: 'Exemple pratique pour une carte commerciale ou accès Wi-Fi',
      },
      scenario: {
        ar: 'صاحب مقهى أو مكتب أو باحث يريد وضع رمز QR يسمح للزوار بالاتصال بالواي فاي أو فتح رابط ملف أبحاثه مباشرة.',
        fr: 'Un commerce souhaite afficher l’accès Wi-Fi invité ou un chercheur veut lier ses annexes PDF depuis un mémoire imprimé.',
      },
      result: {
        ar: 'ينشئ الرمز في ثوان ويحمله بصيغة PNG ثم يطبعه بعد اختباره بكاميرا الهاتف للتأكد من دقة المسح.',
        fr: 'Le PNG téléchargé est prêt à imprimer après un test rapide de lecture à la caméra du téléphone.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'أفضل الممارسات لاستخدام رموز QR المطبوعة والرقمية',
        fr: 'Bonnes pratiques de génération et d’impression QR',
      },
      headers: [
        { ar: 'نوع الاستخدام', fr: 'Usage visé' },
        { ar: 'التوصية الفنية', fr: 'Recommandation technique' },
        { ar: 'الأثر على القراءة', fr: 'Impact sur le scan' },
      ],
      rows: [
        [
          { ar: 'روابط طويلة أو مستندات', fr: 'URL longues ou documents' },
          { ar: 'التأكد من صحة https:// وتجنب الزيادات غير اللازمة', fr: 'Vérifier https:// et garder une URL propre' },
          { ar: 'مربعات أبسط وأسهل في المسح حتى عن بعد', fr: 'Motif moins dense, lecture plus rapide' },
        ],
        [
          { ar: 'طباعة على فواتير وبطاقات', fr: 'Impression papier / factures' },
          { ar: 'تباين أسود على خلفية بيضاء + هامش أبيض', fr: 'Contraste noir sur blanc + zone calme périphérique' },
          { ar: 'قراءة فورية لمختلف كاميرات الهواتف', fr: 'Reconnaissance fiable même sous faible lumière' },
        ],
      ],
    },
    tips: {
      ar: [
        'جرب مسح رمز QR بكاميرا هاتفك بعد تنزيله وقبل طباعته بكميات كبيرة.',
        'احرص على ألا يقل حجم الرمز المطبوع عن 2.5 × 2.5 سم للروابط الطويلة.',
        'استخدم ألوانا داكنة على خلفية بيضاء صافية لضمان أعلى نسبة نجاح في المسح.',
        'عند مشاركة رابط عبر QR، تأكد أن الصفحة المقصودة تعمل بصورة طبيعية على الهواتف.',
      ],
      fr: [
        'Testez toujours votre QR Code à l’écran avec un téléphone avant toute impression en série.',
        'Conservez une taille minimale d’environ 2,5 cm × 2,5 cm sur papier pour les URL denses.',
        'Privilégiez un motif sombre sur fond blanc pur avec une bordure dégagée.',
        'Vérifiez que la page liée s’affiche correctement sur écran mobile.',
      ],
    },
    extraFaqs: [],
  },

  'text-tools': {
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة والباحثون والصحفيون والمحررون باللغتين العربية والفرنسية',
        fr: 'Étudiants, chercheurs, rédacteurs et traducteurs (arabe / français)',
      },
      processingTime: {
        ar: 'تحليل ومعالجة فورية أثناء الكتابة أو اللصق في المتصفح',
        fr: 'Analyse et nettoyage instantanés à la saisie dans le navigateur',
      },
      fees: {
        ar: 'أداة مجانية كليا دون حد لعدد الكلمات',
        fr: 'Entièrement gratuit sans limite de longueur de texte',
      },
      channel: {
        ar: 'معالجة محلية في الذاكرة (لا تحفظ نصوصك على خادم)',
        fr: 'Traitement local en mémoire sans stockage serveur',
      },
      keyRequirement: {
        ar: 'إلصاق النص أو كتابته ثم اختيار عملية التحليل أو التنسيق المطلوبة',
        fr: 'Coller ou saisir le texte puis appliquer l’action de nettoyage souhaitée',
      },
    },
    explanation: {
      ar: [
        'تمنحك أدوات النصوص والبحوث مساحة تحرير سريعة لتحليل المحتوى العربي والفرنسي وتجهيز النصوص الأكاديمية والإدارية دون الحاجة لبرامج تحرير ثقيلة.',
        'تحسب الأداة بدقة عدد الكلمات، عدد الأحرف مع المسافات ودونها، وعدد الأسطر والفقرات للتحقق من التقيد بحدود الملخصات والمقالات العلمية والمراسلات.',
        'تتيح أيضا وظائف التنظيف والتنسيق السريع مثل إزالة علامات التشكيل، حذف المسافات الزائدة وتكرار الأسطر، وتوحيد شكل النص قبل نسخه إلى ملف البحث أو المنصة الإلكترونية.',
        'تجرى كافة العمليات داخل متصفحك مباشرة دون إرسال مسوداتك أو بحوثك إلى أي خادم خارجي، مما يحفظ سرية أعمالك البحثية والشخصية.'
      ],
      fr: [
        'La boîte à outils Texte & Recherche rassemble les utilitaires essentiels pour compter, nettoyer et formater rapidement vos écrits académiques, administratifs ou éditoriaux.',
        'Obtenez en temps réel le décompte exact des mots, caractères (avec et sans espaces), lignes et paragraphes afin de respecter les limites imposées aux résumés (abstracts) ou candidatures.',
        'Supprimez en un clic les signes diacritiques arabes superflus, éliminez les doubles espaces ou sauts de ligne parasites issus de copier-coller PDF et préparez un texte propre.',
        'Aucun texte saisi n’est envoyé vers un serveur distant : vos brouillons restent strictement confidentiels sur votre poste.'
      ],
    },
    formulaTitle: {
      ar: 'معيار الإحصاء النصي وتنظيف الحروف العربية',
      fr: 'Méthode de comptage lexical et normalisation de texte',
    },
    formulaText: {
      ar: 'عدد الكلمات = عدد المقاطع المفصولة بمسافات بعد تنظيف الفراغات المتكررة. إزالة التشكيل = ترشيح نطاق الحركات العربية القياسي في Unicode (U+064B إلى U+065F وU+0670) مع إبقاء الحروف الأصلية سليمة.',
      fr: 'Mots = segments non vides séparés par espaces/retours ligne. Suppression des diacritiques = filtrage des points Unicode U+064B–U+065F sans altérer les lettres de base.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تنقيح ملخص مذكرة ماستر أو نص منسوخ من PDF',
        fr: 'Exemple de nettoyage d’un résumé académique',
      },
      scenario: {
        ar: 'طالب ينسخ فقرة من ملف PDF فتظهر بأسطر مقطعة وتشكيل عشوائي ويريد ضبطها ضمن حد 250 كلمة للملخص.',
        fr: 'Un étudiant copie un extrait depuis un PDF contenant des retours à la ligne cassés et doit vérifier la limite de 250 mots.',
      },
      result: {
        ar: 'تنظف الأداة الفراغات والأسطر والزوائد وتظهر العدد الدقيق للكلمات فورا ليصبح النص جاهزا للإدراج في المذكرة.',
        fr: 'L’outil unifie les espaces, nettoie les lignes superflues et affiche le décompte exact prêt pour le copier-coller final.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'أبرز خصائص التحليل والمعالجة داخل أدوات النصوص',
        fr: 'Fonctions d’analyse et de formatage disponibles',
      },
      headers: [
        { ar: 'الوظيفة', fr: 'Fonctionnalité' },
        { ar: 'ما تعالجه', fr: 'Action appliquée' },
        { ar: 'حالة الاستخدام الشائعة', fr: 'Cas d’usage courant' },
      ],
      rows: [
        [
          { ar: 'عد الكلمات والأحرف والأسطر', fr: 'Compteur mots / caractères' },
          { ar: 'إحصاء آني للمقاطع والحروف', fr: 'Décompte instantané complet' },
          { ar: 'ضبط ملخصات البحوث والمنشورات واستمارات التسجيل', fr: 'Abstracts de mémoire et formulaires limités' },
        ],
        [
          { ar: 'تنظيف التشكيل والمسافات', fr: 'Nettoyage & diacritiques' },
          { ar: 'إزالة التشكيل والفراغات المكررة', fr: 'Suppression voyelles et doubles espaces' },
          { ar: 'تهيئة النصوص المنسوخة من ملفات PDF والمواقع', fr: 'Remise en forme d’extraits copiés' },
        ],
      ],
    },
    tips: {
      ar: [
        'تحقق من عداد الأحرف دون مسافات ومجمل الكلمات قبل لصق الملخص في بوابات النشر العلمي.',
        'استعمل ميزة تنظيف المسافات الزائدة بعد نسخ أي فقرة من ملفات PDF لتفادي تقطع الجمل.',
        'ادمج عملك مع القاموس العربي ومولد خطة البحث والمراجع APA 7 لإنتاج بحث متكامل.',
        'احتفظ بنسخة من النص قبل تطبيق إزالة التشكيل إذا كنت تحتاج للحركات في الشواهد الشعرية أو القرآنية.',
      ],
      fr: [
        'Vérifiez simultanément le nombre de mots et de caractères selon les consignes de votre revue.',
        'Appliquez le nettoyage des espaces après tout copier-coller depuis un document PDF.',
        'Enchaînez facilement avec le générateur APA 7 et le planificateur de recherche du portail.',
        'Conservez la version originale si certaines citations exigent le maintien de voyelles.',
      ],
    },
    extraFaqs: [],
  },

  'apa-generator': {
    quickSummary: {
      targetAudience: {
        ar: 'طلبة الليسانس والماستر والدكتوراه والباحثون في الجامعات الجزائرية',
        fr: 'Étudiants (Licence, Master, Doctorat) et chercheurs universitaires',
      },
      processingTime: {
        ar: 'توليد مرجعي فوري وحفظ لقائمة المصادر في المتصفح',
        fr: 'Génération immédiate et gestion de liste bibliographique locale',
      },
      fees: {
        ar: 'مجاني كليا ويدعم الصياغة العربية والفرنسية',
        fr: '100 % gratuit en français et en arabe',
      },
      channel: {
        ar: 'مولد مراجع APA 7 محلي + قائمة مراجع قابلة للنسخ',
        fr: 'Formateur APA 7 local avec copie de bibliographie',
      },
      keyRequirement: {
        ar: 'نوع المصدر (كتاب، مقال، موقع) وبيانات المؤلف والسنة والعنوان والناشر',
        fr: 'Type de source, auteur(s), année, titre, revue/éditeur et URL/DOI',
      },
    },
    explanation: {
      ar: [
        'يسهل مولد المراجع الأكاديمية وفق الإصدار السابع لجمعية علم النفس الأمريكية (APA 7th Edition) إعداد قائمة المصادر والمراجع في مذكرات التخرج، تقارير التربص، والأوراق العلمية دون أخطاء في الفواصل والأقواس وترتيب العناصر.',
        'يدعم المولد التوثيق باللغتين العربية والفرنسية لثلاثة أنماط رئيسية الأكثر طلبا في الجامعات الجزائرية: الكتب، المقالات المحكمة في المجلات العلمية، وصفحات المواقع الإلكترونية.',
        'بمجرد تعبئة بيانات المصدر في نموذج "بيانات المصدر"، يعرض المرجع المنسق فورا في حقل "المرجع الناتج"، ويمكنك إضافته إلى "قائمة مراجعي" المحفوظة محليا داخل المتصفح لجمع كل مصادرك في مكان واحد.',
        'تنبه الأداة الباحثين إلى ضرورة مطابقة التفاصيل الثانوية (مثل أسماء العائلات أو اختصارات الصفحات) مع الدليل المنهجي الرسمي المعتمد في الكلية أو المعهد.'
      ],
      fr: [
        'Le générateur APA 7e édition automatise la mise en forme normative des références bibliographiques de vos mémoires de Licence, Master, thèses et articles scientifiques, en évitant les oublis de ponctuation.',
        'Il couvre les trois grandes familles de sources académiques — ouvrages, articles de revues scientifiques et ressources web — avec prise en charge dédiée des champs en français et en arabe.',
        'Saisissez les métadonnées pour prévisualiser instantanément la citation formatée puis l’ajouter à votre liste « Mes références » mémorisée localement dans votre navigateur.',
        'Vérifiez toujours les consignes méthodologiques propres à votre département universitaire (ordre alphabétique final et retraits suspendus dans Word).'
      ],
    },
    formulaTitle: {
      ar: 'قوالب الصياغة القياسية في أسلوب APA 7',
      fr: 'Modèles normatifs APA 7e édition',
    },
    formulaText: {
      ar: 'الكتاب: اللقب، الاسم. (السنة). عنوان الكتاب. دار النشر. المقال: اللقب، الاسم. (السنة). عنوان المقال. اسم المجلة، المجلد(العدد)، الصفحات. الموقع: المؤلف أو المؤسسة. (السنة، الشهر اليوم). عنوان الصفحة. اسم الموقع. الرابط.',
      fr: 'Livre : Nom, P. (Année). Titre du livre. Éditeur. Article : Nom, P. (Année). Titre. Revue, Vol(N°), pp-pp. Web : Auteur/Org. (Date). Titre de la page. Site. URL.',
    },
    practicalExample: {
      title: {
        ar: 'مثال توثيق مقال أكاديمي ومرجع إلكتروني في قائمة مراجع الماستر',
        fr: 'Exemple pratique pour une bibliographie de mémoire',
      },
      scenario: {
        ar: 'طالب ماستر يوثق كتابا مرجعيا بالفرنسية ومقالا علميا من مجلة ASJP بالعربية.',
        fr: 'Un étudiant de Master cite un ouvrage méthodologique en français et un article scientifique issu d’une revue en arabe.',
      },
      result: {
        ar: 'يولد المولد الصياغتين بالترتيب الدقيق لكل منهما ويحفظهما في قائمة مراجعي لإعادة النسخ بنقرة واحدة إلى ملف المذكرة.',
        fr: 'Chaque citation est générée selon les conventions de sa langue et sauvegardée dans la liste personnelle prête à copier.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'عناصر الإدخال المطلوبة حسب نوع المصدر في APA 7',
        fr: 'Champs requis par type de document (APA 7)',
      },
      headers: [
        { ar: 'نوع المصدر', fr: 'Type de source' },
        { ar: 'الحقول الأساسية', fr: 'Champs principaux' },
        { ar: 'ملاحظة مهمة في APA 7', fr: 'Spécificité APA 7' },
      ],
      rows: [
        [
          { ar: 'كتاب (مطبوع أو رقمي)', fr: 'Ouvrage / Livre' },
          { ar: 'المؤلف، السنة، العنوان، دار النشر', fr: 'Auteur, année, titre, éditeur' },
          { ar: 'حُذف ذكر مدينة النشر في الإصدار السابع لـ APA', fr: 'La ville d’édition n’est plus mentionnée en APA 7' },
        ],
        [
          { ar: 'مقال في مجلة علمية', fr: 'Article scientifique' },
          { ar: 'المؤلف، السنة، العنوان، المجلة، المجلد/العدد، الصفحات، DOI/رابط', fr: 'Auteur, année, titre, revue, vol/n°, pages, DOI' },
          { ar: 'يفضل إدراج رابط DOI كاملا عند توفره', fr: 'Inclure le lien DOI complet lorsqu’il existe' },
        ],
        [
          { ar: 'صفحة موقع إلكتروني', fr: 'Page / Ressource web' },
          { ar: 'المؤلف/الهيئة، التاريخ، عنوان الصفحة، اسم الموقع، URL', fr: 'Auteur/organisme, date, titre, nom du site, URL' },
          { ar: 'توضع "د.ت" أو "s.d." عند غياب تاريخ النشر', fr: 'Indiquer (s.d.) si aucune date n’est publiée' },
        ],
      ],
    },
    tips: {
      ar: [
        'افصل مراجع اللغة العربية عن مراجع اللغات الأجنبية في قائمة المراجع النهائية ورتب كل قائمة هجائيا حسب اللقب.',
        'في حالة المؤلف المؤسساتي (مثل وزارة أو منظمة)، اكتب الاسم الكامل للهيئة في حقل المؤلف.',
        'استخدم الإزاحة المعلقة (Hanging Indent) في برنامج Word بعد لصق قائمة المراجع النهائية.',
        'اربط استخدامك بأداة مولد خطة البحث لتنظيم فصول المذكرة وإشكاليتها بالتوازي مع جمع المراجع.',
      ],
      fr: [
        'Classez la bibliographie finale par ordre alphabétique du premier nom d’auteur en séparant les langues si votre faculté le demande.',
        'Utilisez la mise en forme « retrait négatif de 1re ligne » dans Word lors du collage final.',
        'Pour les rapports institutionnels, renseignez le nom complet de l’organisme comme auteur.',
        'Associez vos références au générateur de plan de recherche pour structurer votre mémoire.',
      ],
    },
    extraFaqs: [],
  },

  'countdown': {
    quickSummary: {
      targetAudience: {
        ar: 'تلاميذ البكالوريا والبيام وطلبة الجامعات لمتابعة المواعيد المصيرية',
        fr: 'Candidats BAC/BEM et étudiants suivant leurs échéances clés',
      },
      processingTime: {
        ar: 'حساب وتحديث فوري للأيام والساعات المتبقية محليا',
        fr: 'Décompte en temps réel mis à jour dans le navigateur',
      },
      fees: {
        ar: 'مجاني بالكامل مع حفظ محلي دون تسجيل',
        fr: 'Gratuit avec mémorisation locale sans compte',
      },
      channel: {
        ar: 'رزنامة عدادات تنازلية محلية (المواعيد القادمة + المنتهية)',
        fr: 'Tableau de comptes à rebours (à venir et terminés)',
      },
      keyRequirement: {
        ar: 'تسمية الموعد الدراسي وتحديد تاريخه لإطلاق العد التنازلي',
        fr: 'Intitulé de l’événement et date cible',
      },
    },
    explanation: {
      ar: [
        'يتيح عداد المواعيد الدراسية للطلبة والتلاميذ في الجزائر بناء رزنامة شخصية لمتابعة كل التواريخ المهمة في مسارهم الدراسي: امتحانات البكالوريا وشهادة التعليم المتوسط، دورات الامتحانات السداسية والاستدراكية، آجال التسجيلات الجامعية، ومواعيد مناقشة المذكرات والتخرج.',
        'يعرض العداد الوقت المتبقي بوضوح بالأيام والساعات لكل حدث مسجل، ما يمنحك رؤية واقعية للوقت المتاح ويجنبك المفاجآت في الأيام الأخيرة قبل الاختبارات.',
        'عند انقضاء تاريخ أي حدث، ينتقل تلقائيا إلى تبويب "المواعيد المنتهية" ليبقى سجلك مرتبا ومركزا على الأهداف القادمة فقط.',
        'تحفظ جميع المواعيد داخل متصفحك على جهازك دون حاجة لتسجيل حساب، ويمكن تعديلها أو حذفها في أي وقت.'
      ],
      fr: [
        'Le compteur d’échéances académiques vous aide à garder sous les yeux les dates décisives de votre année : épreuves du BAC et du BEM, sessions LMD, dépôts de dossiers, inscriptions ou soutenances.',
        'Chaque événement affiche clairement le temps restant en jours et heures afin de matérialiser l’horizon réel et d’éviter le stress de dernière minute.',
        'Une fois la date dépassée, l’événement glisse proprement dans la section des échéances terminées pour garder votre tableau clair et lisible.',
        'Toutes vos échéances sont conservées localement dans votre navigateur sans création de compte ni partage externe.'
      ],
    },
    formulaTitle: {
      ar: 'حساب الفارق الزمني للموعد المستهدف',
      fr: 'Calcul dynamique du décompte temporel',
    },
    formulaText: {
      ar: 'الوقت المتبقي = التاريخ المستهدف للموعد − اللحظة الحالية، مقسما إلى أيام وساعات ودقائق؛ وإذا كان الناتج صفرا أو سالبا يصنف الحدث ضمن المواعيد المنتهية.',
      fr: 'Temps restant = Date cible − Horodatage actuel, décomposé en jours/heures/minutes ; bascule automatique en « Terminé » lorsque Δ ≤ 0.',
    },
    practicalExample: {
      title: {
        ar: 'مثال متابعة مواعيد امتحانات البكالوريا وإيداع ملف المنحة',
        fr: 'Exemple pratique de suivi de fin d’année',
      },
      scenario: {
        ar: 'طالب بكالوريا أو طالب جامعي يضيف ثلاثة تواريخ رئيسية: تاريخ آخر فرض، تاريخ تسليم البحث، وموعد الامتحان الوطني.',
        fr: 'Un étudiant ajoute trois échéances : remise d’exposé, début des partiels et date limite de réinscription.',
      },
      result: {
        ar: 'يظهر أمامه ترتيب زمني واضح لعدد الأيام المتبقية لكل حدث ليربطها فورا بجلسات المراجعة في مخطط الامتحانات.',
        fr: 'Il visualise d’un coup d’œil l’ordre d’urgence de chaque date avant de planifier ses révisions.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'تنظيم المواعيد داخل أداة العد التنازلي',
        fr: 'Organisation des états dans le compte à rebours',
      },
      headers: [
        { ar: 'حالة الموعد', fr: 'Statut de l’échéance' },
        { ar: 'طريقة العرض', fr: 'Affichage' },
        { ar: 'الأداة المكملة الموصى بها', fr: 'Outil complémentaire conseillé' },
      ],
      rows: [
        [
          { ar: 'موعد قادم (متبقي > 0)', fr: 'À venir (Δ > 0)' },
          { ar: 'عد تنازلي مستمر بالأيام والساعات', fr: 'Décompte actif en jours et heures' },
          { ar: 'مخطط الامتحانات أو مخطط المراجعة الذكي', fr: 'Planificateur d’examens ou planning BAC/BEM' },
        ],
        [
          { ar: 'موعد منتهي المدة (تم انقضاؤه)', fr: 'Terminé (Δ ≤ 0)' },
          { ar: 'يفرز في قسم المواعيد المنتهية للأرشفة', fr: 'Archivé dans la liste des événements passés' },
          { ar: 'حذفه أو إضافة الدورة اللاحقة (الاستدراك / التخرج)', fr: 'Suppression ou ajout de la session suivante' },
        ],
      ],
    },
    tips: {
      ar: [
        'سجل مواعيد الإجراءات الإدارية والمنح والتسجيلات الجامعية قبل أسبوع من آخر أجل فعلي لتفادي الضغط.',
        'راجع العداد أسبوعيا وحدث ساعات الدراسة في مخطط الامتحانات وفق الأيام المتبقية.',
        'تأكد من ضبط تاريخ وساعة جهازك بصورة صحيحة للحصول على عد تنازلي دقيق.',
        'استعمل مؤقت بومودورو عند بدء جلسات التحضير الفعلي لكل موعد قريب.',
      ],
      fr: [
        'Enregistrez vos dates limites administratives (bourses, inscriptions Progres) quelques jours avant la clôture réelle.',
        'Vérifiez l’exactitude de l’horloge système de votre appareil.',
        'Combinez le décompte avec le minuteur Pomodoro lors de vos séances de travail.',
        'Supprimez les anciens jalons terminés pour garder votre tableau épuré.',
      ],
    },
    extraFaqs: [],
  },

  'exam-planner': {
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة الجامعيون في نظام LMD والمدارس العليا لجمع كل الالتزامات في تقويم واحد',
        fr: 'Étudiants universitaires (LMD & grandes écoles) gérant examens et remises',
      },
      processingTime: {
        ar: 'جدولة آلية فورية لساعات المراجعة وتنبيهات داخل الصفحة',
        fr: 'Répartition horaire immédiate et rappels dans la page',
      },
      fees: {
        ar: 'مجاني كليا دون تسجيل ودون طلب أذونات إشعارات المتصفح',
        fr: 'Gratuit sans inscription et sans notification système intrusive',
      },
      channel: {
        ar: 'تقويم جامعي محلي + توزيع مراجعة بحد أقصى ساعتين يوميا لكل موعد',
        fr: 'Calendrier local + lissage des révisions (max 2 h/jour par date)',
      },
      keyRequirement: {
        ar: 'إدخال عنوان الحدث (امتحان/فرض/بحث/تسجيل) وتاريخه وعدد الساعات اللازمة',
        fr: 'Titre de l’échéance, date et volume d’heures de préparation souhaité',
      },
    },
    explanation: {
      ar: [
        'يجمع مخطط الامتحانات والمهام الجامعية جميع التزاماتك الأكاديمية في تقويم تفاعلي واحد: الامتحانات النهائية، الفروض، تسليمات البحوث والتقارير، ومواعيد التسجيلات الجامعية.',
        'يميز الأداة محرك التوزيع التلقائي لساعات المراجعة، الذي يوزع إجمالي الساعات المطلوبة لكل موعد على الأيام المتاحة قبله، مع تحديد سقف مقترح لا يتجاوز ساعتين يوميا لكل موعد حتى تبقى المراجعة مستدامة دون إرهاق.',
        'تظهر التنبيهات داخل الصفحة نفسها وتتجدد تلقائيا أثناء بقائك على الصفحة، فلا تحتاج لمنح المتصفح أذونات إشعارات منبثقة؛ كما توضح النقاط أسفل أيام التقويم وجود مواعيد لتستعرض تفاصيل أي يوم بنقرة واحدة.',
        'تحفظ جميع المواعيد المسجلة محليا داخل جهازك لترجع إليها طوال السداسي الدراسي.'
      ],
      fr: [
        'Le planificateur universitaire réunit dans un seul calendrier interactif tous vos impératifs du semestre : examens finaux, interrogations écrites, remises d’exposés/mémoires et délais d’inscription.',
        'Son répartiteur horaire distribue le volume de préparation nécessaire sur les jours précédant chaque échéance tout en plafonnant les séances suggérées à 2 heures par jour et par matière pour éviter le surmenage.',
        'Les rappels s’affichent directement dans l’interface et se mettent à jour automatiquement tant que la page reste ouverte, sans demander d’autorisation de notification navigateur ; des repères visuels sous les dates signalent les jours chargés.',
        'Toutes vos saisies restent stockées localement sur votre appareil.'
      ],
    },
    formulaTitle: {
      ar: 'خوارزمية توزيع ساعات التحضير على الأيام المتاحة',
      fr: 'Algorithme de lissage des séances de révision',
    },
    formulaText: {
      ar: 'الحصة اليومية المقترحة للموعد = أصغر قيمة بين (الساعات المتبقية ÷ عدد الأيام المتاحة قبل الموعد) وبين 2 ساعة/يوم، مع إبراز التنبيهات للمواعيد القريبة داخل الصفحة.',
      fr: 'Séance quotidienne suggérée = min(Heures requises ÷ Jours disponibles avant échéance, 2 heures/jour), avec mise en avant des échéances imminentes.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تخطيط سداسي به 3 امتحانات وتسليم بحث جامعي',
        fr: 'Exemple pratique pour une session d’examens LMD',
      },
      scenario: {
        ar: 'طالب لديه امتحان مادة أساسية بعد 10 أيام ويقدر حاجته بـ 14 ساعة مراجعة إلى جانب تسليم بحث بعد 5 أيام.',
        fr: 'Un étudiant prévoit 14 heures de révision pour un module dans 10 jours et un rendu d’exposé dans 5 jours.',
      },
      result: {
        ar: 'يقترح المخطط توزيع الساعات في جلسات يومية متوازنة (قرابة 1.5 ساعة يوميا للمادة دون تخطي حد الساعتين) مع إظهار الموعدين على التقويم.',
        fr: 'Le planificateur étale la charge sur environ 1,5 h par jour sans dépasser le seuil de 2 h, tout en signalant les deux dates sur le calendrier.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مقارنة خصائص مخطط الامتحانات والمهام الجامعية',
        fr: 'Composants du planificateur universitaire',
      },
      headers: [
        { ar: 'الوحدة', fr: 'Module' },
        { ar: 'الدور التنظيمي', fr: 'Fonction' },
        { ar: 'ملاحظة العمل', fr: 'Fonctionnement' },
      ],
      rows: [
        [
          { ar: 'التقويم والمؤشرات اليومية', fr: 'Calendrier & repères' },
          { ar: 'عرض الأيام ذات المواعيد عبر نقاط تحت التاريخ', fr: 'Repérage immédiat des jours avec échéances' },
          { ar: 'انقر على أي يوم لعرض مواعيده المسجلة', fr: 'Clic sur un jour pour afficher le détail' },
        ],
        [
          { ar: 'موزع ساعات المراجعة', fr: 'Répartiteur horaire' },
          { ar: 'توزيع الساعات المطلوبة قبل كل امتحان', fr: 'Lissage avant chaque date limite' },
          { ar: 'يقترح حصصا بحد أقصى ساعتين يوميا لكل موعد', fr: 'Plafonné à 2 h quotidiennes par événement' },
        ],
        [
          { ar: 'تنبيهات داخل الصفحة', fr: 'Alertes intégrées' },
          { ar: 'تحديث ذاتي للمواعيد القريبة أثناء الفتح', fr: 'Actualisation automatique à l’écran' },
          { ar: 'لا يتطلب أي إذن إشعارات من المتصفح', fr: 'Aucune permission système requise' },
        ],
      ],
    },
    tips: {
      ar: [
        'سجل جدول الامتحانات فور نشره من الإدارة لتعطي الخوارزمية هامش أيام أوسع للتوزيع.',
        'احرص على ألا يتجاوز مجموع ساعات المراجعة لكل المواد في اليوم الواحد طاقتك الحقيقية.',
        'استعمل البطاقات التعليمية لحفظ المفاهيم والتعريفات بالتوازي مع ساعات المراجعة المجدولة.',
        'راجع صفحة المواعيد في بداية كل أسبوع لإضافة الفروض المستجدة.',
      ],
      fr: [
        'Saisissez votre calendrier d’examens dès sa publication par le département pour maximiser l’étalement.',
        'Surveillez le cumul total d’heures par journée lorsque plusieurs examens se suivent.',
        'Utilisez les flashcards pour ancrer vos définitions pendant ces créneaux.',
        'Mettez à jour l’état de vos préparations chaque fin de semaine.',
      ],
    },
    extraFaqs: [],
  },

  'exam-study-planner': {
    quickSummary: {
      targetAudience: {
        ar: 'مترشحو البكالوريا (BAC) وشهادة التعليم المتوسط (BEM) في الجزائر',
        fr: 'Candidats au Baccalauréat (BAC) et au Brevet (BEM) en Algérie',
      },
      processingTime: {
        ar: 'توليد فوري لجدول المراجعة اليومي المتوازن قابل للطباعة والتعديل',
        fr: 'Génération immédiate du programme quotidien modifiable et imprimable',
      },
      fees: {
        ar: 'مجاني ويعمل محليا على الجهاز فقط مع خيار النسخ الاحتياطي',
        fr: 'Gratuit avec sauvegarde locale sur l’appareil et export',
      },
      channel: {
        ar: 'مخطط ذكي حسب صعوبة المادة وأولويتها + تتبع نسبة الإنجاز',
        fr: 'Planning pondéré par difficulté/priorité + suivi d’avancement',
      },
      keyRequirement: {
        ar: 'إضافة المواد وتحديد الصعوبة والأولوية ثم تأشير الحصص المنجزة يوميا',
        fr: 'Saisie des matières, niveau de difficulté/priorité et pointage des séances',
      },
    },
    explanation: {
      ar: [
        'صُمم مخطط المراجعة الذكي للبكالوريا والبيام لتحويل الأيام المتبقية قبل الامتحان الوطني إلى جدول يومي عملي ومنصف يراعي الفروق بين المواد.',
        'تبدأ بإدخال موادك الفعلية وتحديد مستوى الصعوبة والأولوية في جدول "المواد ومستوى الصعوبة"، فيقوم المخطط تلقائيا بتخصيص حصص أكبر للمواد الصعبة أو ذات المعامل العالي في شعبتك.',
        'مع كل حصة تنجزها وتعلم عليها، تتحدث مؤشرات تقدم المراجعة تلقائيا وتبقى الحصص غير المنجزة محفوظة لتعيد جدولتها بهدوء على الأيام المقبلة بدل محاولة تعويض كل التأخر في يوم واحد مرهق.',
        'تعمل الخطة بمرونة تنظيمية كاملة وتُحفظ البيانات على هذا الجهاز فقط (مع ميزة تصدير نسخة احتياطية والطباعة)، مع التذكير بأنها أداة تنظيم مساعدة وليست بديلا عن توجيهات الأساتذة أو المنهاج الرسمي للامتحان.'
      ],
      fr: [
        'Le planificateur intelligent BAC & BEM transforme le compte à rebours avant vos examens nationaux en un emploi du temps quotidien réaliste et équilibré.',
        'Vous commencez par lister vos matières réelles en précisant leur degré de difficulté et de priorité : l’algorithme attribue automatiquement davantage de temps aux disciplines exigeantes ou à fort coefficient.',
        'En cochant chaque séance accomplie, la barre de progression s’actualise immédiatement ; les séances non réalisées restent conservées pour être réparties sereinement sur les jours suivants sans jamais tout accumuler en une journée.',
        'Toutes les données restent enregistrées uniquement sur votre appareil (avec impression et sauvegarde locale). Ce programme souple complète — sans les remplacer — les conseils de vos enseignants et le programme officiel.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ توزيع الأولوية والأوزان في جدول المراجعة',
      fr: 'Pondération des séances selon difficulté et priorité',
    },
    formulaText: {
      ar: 'نصيب المادة من الحصص ∝ وزن الصعوبة × وزن الأولوية (أو المعامل)؛ مع تقسيم كل حصة متوازنة إلى فهم الدرس، حل التمارين، ومراجعة المواضيع السابقة مع فواصل راحة قصيرة.',
      fr: 'Volume de séances par matière ∝ Poids(Difficulté) × Poids(Priorité/Coefficient), avec alternance cours, exercices et annales.',
    },
    practicalExample: {
      title: {
        ar: 'مثال توازن مراجعة طالب علوم تجريبية في البكالوريا',
        fr: 'Exemple pratique pour un candidat au BAC Sciences',
      },
      scenario: {
        ar: 'طالب يضع الرياضيات والعلوم الطبيعية بأولوية مرتفعة وصعوبة عالية، واللغة الإنجليزية بصعوبة متوسطة مع الحفاظ على مراجعة دورية.',
        fr: 'Un élève classe Mathématiques et Sciences en priorité haute/difficile, et les langues en priorité modérée.',
      },
      result: {
        ar: 'ينال الطالب تكرارا أكثر للرياضيات والعلوم مع حصص منتظمة للمواد الأدبية وضغط يومي متزن وقابل للطباعة.',
        fr: 'Le planning programme plus fréquemment les matières scientifiques tout en conservant des créneaux réguliers pour les langues, prêt à imprimer.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'أركان الخطة الذكية وأسلوب الاستفادة القصوى قبل BAC / BEM',
        fr: 'Piliers d’utilisation du planning BAC & BEM',
      },
      headers: [
        { ar: 'الخطوة', fr: 'Étape' },
        { ar: 'الإجراء داخل الأداة', fr: 'Action dans l’outil' },
        { ar: 'التوجيه التربوي الموصى به', fr: 'Conseil méthodologique' },
      ],
      rows: [
        [
          { ar: '1. ضبط المواد والأوزان', fr: '1. Paramétrage des matières' },
          { ar: 'جدول: المادة | الصعوبة | الأولوية', fr: 'Tableau : Matière | Difficulté | Priorité' },
          { ar: 'امنح المواد الصعبة وذات المعامل العالي أولوية مرتفعة', fr: 'Prioriser les matières difficiles et à fort coefficient' },
        ],
        [
          { ar: '2. التنفيذ اليومي المتنوع', fr: '2. Exécution équilibrée' },
          { ar: 'تأشير كل حصة منجزة لتحديث التقدم', fr: 'Cocher chaque séance terminée' },
          { ar: 'وزع الحصة بين فهم الدرس، حل التمارين، وحل حوليات سابقة', fr: 'Alterner cours, exercices et sujets d’annales avec pauses' },
        ],
        [
          { ar: '3. التعامل مع التأخر والطباعة', fr: '3. Réajustement & sauvegarde' },
          { ar: 'إعادة جدولة المتبقي + طباعة وتصدير احتياطي', fr: 'Replanifier le retard + impression / sauvegarde' },
          { ar: 'وزع الحصص المتأخرة تدريجيا ولا تملأ يومك فوق طاقتك', fr: 'Lisser les séances manquées sans surcharger une seule journée' },
        ],
      ],
    },
    tips: {
      ar: [
        'اجعل المواد التي تجد صعوبة فيها أو معاملها مرتفع ذات أولوية عالية داخل الجدول.',
        'وزع كل حصة بين استيعاب الدرس، حل التمارين التطبيقية، ومراجعة اختبارات البكالوريا أو البيام السابقة.',
        'خذ فواصل راحة قصيرة بين الحصص (مثل نظام بومودورو)، ولا تملأ يومك بساعات تفوق طاقتك.',
        'أعد توزيع الحصص المتأخرة على بقية الأسبوع بدل محاولة تعويض كل شيء في يوم واحد، وصدّر نسخة احتياطية دوريا.',
      ],
      fr: [
        'Attribuez une priorité haute aux disciplines qui vous posent le plus de difficultés.',
        'Alternez compréhension du cours, exercices corrigés et résolution d’annales officielles.',
        'Respectez des pauses courtes entre blocs (méthode Pomodoro) pour maintenir la concentration.',
        'Exportez une copie de sauvegarde si vous consultez votre planning depuis un appareil partagé.',
      ],
    },
    extraFaqs: [],
  },

  'flashcards': {
    quickSummary: {
      targetAudience: {
        ar: 'تلاميذ الثانوي والطلبة الجامعيون لمراجعة التعريفات والقوانين واللغات بفعالية',
        fr: 'Lycéens et étudiants pour mémoriser définitions, formules et vocabulaires',
      },
      processingTime: {
        ar: 'إنشاء فوري يدويا أو دفعة واحدة من ملخص + اختبار QCM',
        fr: 'Création manuelle ou import en lot + séances QCM instantanées',
      },
      fees: {
        ar: 'مجاني بالكامل مع حفظ محلي وتصدير/استيراد بين الأجهزة',
        fr: 'Gratuit avec sauvegarde locale et export/import inter-appareils',
      },
      channel: {
        ar: 'بطاقات سؤال وجواب + نظام التكرار المتباعد الذكي',
        fr: 'Cartes question/réponse + algorithme de répétition espacée',
      },
      keyRequirement: {
        ar: 'فصل السؤال عن الإجابة بنقطتين (:) عند الاستيراد الجماعي من الملخصات',
        fr: 'Séparateur deux-points (:) entre question et réponse lors de l’import rapide',
      },
    },
    explanation: {
      ar: [
        'تساعد أداة البطاقات التعليمية والاختبارات على تحويل المراجعة السلبية من القراءة المتكررة إلى استدعاء نشط للمعلومة (Active Recall)، عبر بطاقات سؤال وجواب مصممة للثانوي والجامعة.',
        'يمكنك بناء بطاقاتك واحدة تلو الأخرى يدويا أو تسريع العمل عبر ميزة "إنشاء بطاقات من ملخص" بكتابة كل معلومة في سطر مستقل وفصل السؤال عن الإجابة بنقطتين رأسيتين (:)، مع معاينة البطاقات المستخرجة وتنقيحها قبل الحفظ.',
        'أثناء جلسة المراجعة بأسلوب التكرار المتباعد، تضغط على البطاقة لإظهار الإجابة ثم تقيم مدى تذكرك؛ فتعيد الخوارزمية البطاقات الصعبة في وقت أقرب وتباعد البطاقات المتقنة، كما يتوفر وضع "اختبار اختيار من متعدد" لقياس الجاهزية قبل الامتحان.',
        'تحفظ جميع مجموعات البطاقات محليا في متصفحك ولا ترسل لأي خادم، مع أزرار تصدير واستيراد كاملة لنقل بطاقاتك أو مشاركتها بين هاتفك وحاسوبك بسهولة.'
      ],
      fr: [
        'L’outil de flashcards transforme vos fiches de révision en séances de rappel actif bien plus efficaces que la simple relecture passive, tant au lycée qu’à l’université.',
        'Créez vos cartes une par une ou importez tout un résumé en une fois en séparant simplement chaque question de sa réponse par deux-points (:) sur une ligne dédiée, avec aperçu avant validation.',
        'En session de répétition espacée, vous révélez la réponse puis évaluez votre maîtrise : les cartes difficiles reviennent plus rapidement tandis que les notions acquises s’espacent, complétées par un mode quiz QCM.',
        'Vos paquets restent stockés localement dans votre navigateur sans serveur externe, et s’exportent/importent en un clic pour passer d’un appareil à l’autre.'
      ],
    },
    formulaTitle: {
      ar: 'صيغة الاستيراد الجماعي ومنطق التكرار المتباعد',
      fr: 'Syntaxe d’import rapide et logique de répétition espacée',
    },
    formulaText: {
      ar: 'صيغة السطر الواحد للاستيراد: [السؤال أو المصطلح] : [الإجابة أو التعريف]. منطق المراجعة: تقييم صعوبة التذكر يقلص الفاصل الزمني لإعادة عرض البطاقة، بينما تقييم الإتقان يمدد الفاصل التدريجي.',
      fr: 'Syntaxe par ligne : Question : Réponse. Logique SRS : un rappel difficile rapproche la prochaine révision ; un rappel aisé allonge progressivement l’intervalle.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تحويل ملخص قانون أو علوم طبيعية إلى 15 بطاقة في ثوان',
        fr: 'Exemple de conversion d’une fiche de cours en jeu de cartes',
      },
      scenario: {
        ar: 'طالب حقوق أو علوم يكتب قائمة مصطلحات بصيغة "المفهوم : التعريف الدقيق" في حقل الملخص.',
        fr: 'Un étudiant colle une liste de 15 notions structurées sous la forme « Terme : Définition » dans la zone d’import.',
      },
      result: {
        ar: 'تستخرج الأداة البطاقات الـ 15 تلقائيا للمراجعة ثم تجري له اختبار اختيار من متعدد للتأكد من عدم الخلط بين التعريفات.',
        fr: 'Les 15 flashcards sont générées immédiatement pour révision espacée puis testées en QCM multi-choix.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'أوضاع العمل داخل أداة البطاقات التعليمية',
        fr: 'Modes disponibles dans l’outil Flashcards',
      },
      headers: [
        { ar: 'الوضع', fr: 'Mode' },
        { ar: 'الآلية', fr: 'Fonctionnement' },
        { ar: 'الهدف البيداغوجي', fr: 'Objectif pédagogique' },
      ],
      rows: [
        [
          { ar: 'إنشاء يدوي أو من ملخص (:)', fr: 'Création & import (:)' },
          { ar: 'إدخال فردي أو تحليل سطور السؤال : الإجابة', fr: 'Ajout unitaire ou extraction par deux-points (:)' },
          { ar: 'تحويل سريع للملخصات إلى أسئلة اختبارية', fr: 'Transformation rapide de fiches en cartes' },
        ],
        [
          { ar: 'جلسة التكرار المتباعد', fr: 'Répétition espacée' },
          { ar: 'إظهار الإجابة ثم تقييم مستوى التذكر', fr: 'Révélation puis auto-évaluation de rappel' },
          { ar: 'تكثيف التركيز على البطاقات الصعبة فقط', fr: 'Prioriser les notions moins bien retenues' },
        ],
        [
          { ar: 'اختبار اختيار من متعدد + تصدير', fr: 'Quiz QCM & sauvegarde' },
          { ar: 'أسئلة تفاعلية من البطاقات + نقل JSON', fr: 'QCM auto-généré + export/import JSON' },
          { ar: 'قياس الجاهزية ونقل البطاقات بين الأجهزة', fr: 'Auto-test avant examen et portabilité locale' },
        ],
      ],
    },
    tips: {
      ar: [
        'احرص على أن تسأل كل بطاقة عن فكرة واحدة واضحة وقصيرة بدل حشر فقرة طويلة في بطاقة واحدة.',
        'تأكد من استخدام النقطتين الرأسيتين (:) كفاصل وحيد بين السؤال والإجابة عند الاستيراد من الملخص.',
        'راجع لمدة 10 إلى 15 دقيقة يوميا بالبطاقات بدل انتظار ليلة الامتحان للحصول على أفضل تثبيت في الذاكرة.',
        'صدّر نسخة احتياطية لبطاقاتك بصورة دورية إذا أردت نقلها لهاتفك أو الاحتفاظ بها.',
      ],
      fr: [
        'Limitez chaque carte à un concept précis (question courte, réponse nette) pour accélérer la mémorisation.',
        'Placez un seul séparateur deux-points (:) par ligne lors de l’import groupé.',
        'Pratiquez 10 à 15 minutes quotidiennes afin de tirer parti de l’espacement des rappels.',
        'Exportez vos paquets pour partager un jeu de révision avec vos camarades ou changer d’appareil.',
      ],
    },
    extraFaqs: [],
  },
};
