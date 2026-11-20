import { ToolItem, ToolRichGuide } from '@/lib/types';

export const batch1Tools: ToolItem[] = [
  {
    id: 'tool-age',
    slug: 'age-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة العمر بدقة وسن التقاعد القانوني',
      fr: 'Calculateur d\'Âge Exact & Départ en Retraite (CNR)',
    },
    description: {
      ar: 'احسب عمرك بدقة من تاريخ الميلاد بالسنوات والأشهر والأيام، مع معرفة إجمالي الأيام والمدة المتبقية لعيد ميلادك القادم وسن التقاعد القانوني في الجزائر بالكامل داخل المتصفح.',
      fr: 'Calculez votre âge exact en années, mois et jours depuis votre date de naissance, le total de jours vécus, le décompte jusqu\'au prochain anniversaire et la projection de retraite CNR en local.',
    },
    iconName: 'Calendar',
    faqs: [
      {
        question: {
          ar: 'هل يتم إرسال تاريخ ميلادي إلى أي خادم عند استخدام حاسبة العمر؟',
          fr: 'Ma date de naissance est-elle transmise à un serveur lors du calcul ?',
        },
        answer: {
          ar: 'لا، تجري جميع الحسابات محليا داخل متصفحك مباشرة دون إرسال أو تخزين تاريخ ميلادك عبر الإنترنت.',
          fr: 'Non, tous les calculs s\'exécutent intégralement en local dans votre navigateur sans aucun envoi ni sauvegarde externe.',
        },
      },
      {
        question: {
          ar: 'كيف تتعامل الحاسبة مع مواليد يوم 29 فبراير والسنوات الكبيسة؟',
          fr: 'Comment l\'outil gère-t-il les personnes nées un 29 février ?',
        },
        answer: {
          ar: 'تعتمد الحاسبة التقويم الميلادي المحلي للجهاز مع مراعاة عدد أيام كل شهر والسنوات الكبيسة، مع الإشارة إلى أن بعض النماذج الإدارية تحتسب 28 فبراير أو 1 مارس في السنوات البسيطة.',
          fr: 'Le calcul suit le calendrier grégorien local en tenant compte des mois de 28 à 31 jours et des années bissextiles ; certains actes administratifs retiennent le 28 février ou le 1er mars les années non bissextiles.',
        },
      },
      {
        question: {
          ar: 'هل تفيد الحاسبة في التحقق من شروط السن للمسابقات والتقاعد؟',
          fr: 'Cet outil aide-t-il à vérifier l\'âge réglementaire pour les concours ou la retraite CNR ?',
        },
        answer: {
          ar: 'نعم، تمنحك الحاسبة العمر الدقيق باليوم والشهر والسنة، وهو ما يساعدك على التحقق من شرط السن في مسابقات التوظيف ومن السنوات المتبقية لبلوغ سن التقاعد القانوني في الجزائر.',
          fr: 'Oui, connaître votre âge exact au jour près facilite le contrôle des limites d\'âge dans les concours publics et l\'estimation des années restantes avant l\'âge légal de retraite CNR.',
        },
      },
    ],
  },
  {
    id: 'tool-average',
    slug: 'average-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة معدل السداسي الجامعي والمعدل الموزون',
      fr: 'Calculateur de Moyenne Semestrielle Universitaire (LMD)',
    },
    description: {
      ar: 'احسب معدل السداسي الجامعي في الجزائر انطلاقا من علامات الامتحان والأعمال الموجهة أو التطبيقية (TD/TP) ومعاملات المقاييس وفق الصيغة الموزونة 60% امتحان و40% تقييم مستمر.',
      fr: 'Calculez votre moyenne semestrielle universitaire algérienne (LMD) à partir des notes d\'examen, des notes de TD/TP (60 % / 40 %) et des coefficients de chaque matière avec exemple détaillé.',
    },
    iconName: 'GraduationCap',
    faqs: [
      {
        question: {
          ar: 'كيف تحسب الأداة معدل المقياس الذي لا يحتوي على علامة TD/TP؟',
          fr: 'Comment la moyenne d\'un module sans note de TD/TP est-elle calculée ?',
        },
        answer: {
          ar: 'عند ترك حقل علامة TD/TP فارغا، تعتمد الحاسبة علامة الامتحان النهائي وحدها بنسبة 100% في احتساب معدل ذلك المقياس.',
          fr: 'Lorsque le champ TD/TP est laissé vide, l\'outil retient uniquement la note d\'examen final à 100 % pour ce module.',
        },
      },
      {
        question: {
          ar: 'هل نسبة 60% للامتحان و40% للأعمال الموجهة موحدة في كل الجامعات الجزائرية؟',
          fr: 'La pondération 60 % examen et 40 % TD/TP s\'applique-t-elle à toutes les universités ?',
        },
        answer: {
          ar: 'هذه هي النسبة الأكثر شيوعا في نظام LMD، غير أن بعض التخصصات أو المدارس العليا تعتمد نسبا مختلفة مثل 50/50 أو 67/33؛ لذا يجب مراجعة دليل مؤسستك الجامعية واعتبار النتيجة تقديرا.',
          fr: 'C\'est la règle la plus répandue en LMD, mais certaines facultés ou écoles supérieures appliquent 50/50 ou d\'autres coefficients : vérifiez toujours le règlement pédagogique de votre établissement.',
        },
      },
      {
        question: {
          ar: 'كيف أحسب المعدل السنوي انطلاقا من معدلات السداسيات؟',
          fr: 'Comment passer de la moyenne du semestre au calcul de la moyenne annuelle ?',
        },
        answer: {
          ar: 'بعد حساب معدل كل سداسي بهذه الأداة، يمكنك الانتقال إلى حاسبة المعدل السنوي أو حاسبة النسبة المئوية لدمج معدلي السداسي الأول والثاني ومعرفة حالة النجاح والإنقاذ.',
          fr: 'Une fois vos moyennes semestrielles calculées ici, utilisez le calculateur de moyenne annuelle pour combiner les deux semestres et vérifier votre passage ou rachat.',
        },
      },
    ],
  },
  {
    id: 'tool-calculator',
    slug: 'calculator',
    category: 'calculators',
    name: {
      ar: 'الآلة الحاسبة الذكية مع سجل العمليات المحفوظة',
      fr: 'Calculatrice Intelligente avec Historique Local',
    },
    description: {
      ar: 'آلة حاسبة تفاعلية سريعة لإجراء المعادلات والعمليات الحسابية اليومية والعلمية، مع حفظ تلقائي للعمليات المهمة داخل متصفحك فقط للرجوع إليها في أي وقت.',
      fr: 'Calculatrice rapide et complète pour vos opérations et équations du quotidien, dotée d\'un historique local (« Mes opérations sauvegardées ») conservé uniquement dans votre navigateur.',
    },
    iconName: 'Calculator',
    faqs: [
      {
        question: {
          ar: 'أين تحفظ قائمة عملياتي المحفوظة في الآلة الحاسبة الذكية؟',
          fr: 'Où est stocké l\'historique de mes calculs sauvegardés ?',
        },
        answer: {
          ar: 'تحفظ جميع المعادلات والنتائج محليا داخل متصفح جهازك فقط (LocalStorage) ولا ترسل إلى أي خادم خارجي، ويمكنك مسحها في أي وقت.',
          fr: 'Toutes vos équations sont enregistrées localement dans le stockage de votre navigateur sur cet appareil et ne sont jamais envoyées vers un serveur.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني استخدام الآلة الحاسبة الذكية بلوحة مفاتيح الحاسوب؟',
          fr: 'La calculatrice prend-elle en charge le clavier physique sur ordinateur ?',
        },
        answer: {
          ar: 'نعم، تدعم الواجهة الإدخال المباشر عبر أزرار الشاشة اللمسية في الهاتف وعبر لوحة المفاتيح الرقمية على الحاسوب لسرعة الإنجاز.',
          fr: 'Oui, vous pouvez saisir vos chiffres et opérateurs aussi bien au pavé tactile qu\'au clavier numérique de votre ordinateur.',
        },
      },
    ],
  },
  {
    id: 'tool-car-cost',
    slug: 'car-cost-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة مصاريف السيارة الشهرية والسنوية في الجزائر',
      fr: 'Calculateur des Coûts Auto Mensuels, Annuels & Prix au Km',
    },
    description: {
      ar: 'قدر التكلفة الحقيقية لامتلاك السيارة في الجزائر بالدينار شهريا وسنويا ولكل كيلومتر، بدمج مصاريف الوقود والتأمين السنوي والصيانة الدورية وقسيمة السيارات والرسوم.',
      fr: 'Estimez le coût réel de possession d\'un véhicule en Algérie (par mois, par an et par kilomètre) en additionnant carburant, assurance, entretien périodique et vignette automobile.',
    },
    iconName: 'Car',
    faqs: [
      {
        question: {
          ar: 'كيف أحسب تكلفة الكيلومتر الواحد لسيارتي بدقة؟',
          fr: 'Comment calculer avec précision le coût réel par kilomètre parcouru ?',
        },
        answer: {
          ar: 'اجمع كافة مصاريف السيارة للفترة المختارة (الوقود، التأمين، الصيانة، القسيمة)، ثم اقسم المجموع على المسافة المقطوعة بالكيلومتر خلال الفترة نفسها مع مراعاة عدم احتساب أي مصروف مرتين.',
          fr: 'Additionnez l\'ensemble des dépenses de la période (carburant, assurance, révisions, vignette) puis divisez ce total par le kilométrage parcouru sur la même durée sans double comptabilisation.',
        },
      },
      {
        question: {
          ar: 'هل تشمل النتيجة الإصلاحات الطارئة والمصاريف غير المتوقعة؟',
          fr: 'L\'estimation intègre-t-elle les réparations imprévues ?',
        },
        answer: {
          ar: 'تعتمد النتيجة على البنود التي تدخلها في الحاسبة فقط؛ لذلك يوصى بإضافة هامش احتياطي للأعطال المفاجئة أو استبدال الإطارات وقطع الغيار للحصول على تقدير أكثر شمولية.',
          fr: 'Le résultat dépend exclusivement des montants saisis ; il est conseillé d\'ajouter manuellement une provision annuelle pour pannes imprévues ou pneumatiques.',
        },
      },
      {
        question: {
          ar: 'لماذا تفوق التكلفة الحقيقية للسيارة مجرد ثمن البنزين؟',
          fr: 'Pourquoi le coût réel d\'une voiture dépasse-t-il largement le budget carburant ?',
        },
        answer: {
          ar: 'تشكل النفقات السنوية الثابتة مثل التأمين، المراقبة التقنية، قسيمة السيارات، وتغيير الزيوت والفلاتر نسبة معتبرة من الميزانية السنوية قد توازي أو تفوق مصروف الوقود لدى ذوي التنقل المتوسط.',
          fr: 'Les charges fixes et périodiques (assurance, contrôle technique, vignette, vidanges et pneus) représentent souvent une part majeure du budget annuel au-delà du seul plein de carburant.',
        },
      },
    ],
  },
  {
    id: 'tool-currency',
    slug: 'currency-converter',
    category: 'calculators',
    isPopular: true,
    name: {
      ar: 'محول العملات الأجنبية والدينار الجزائري',
      fr: 'Convertisseur de Devises & Dinar Algérien (Cours de Référence)',
    },
    description: {
      ar: 'حول الدينار الجزائري إلى العملات العالمية الرئيسية (الأورو والدولار والجنيه الإسترليني) والعكس بأسعار صرف مرجعية، مع متابعة مخطط تغير قيمة العملات عبر فترات زمنية مختلفة.',
      fr: 'Convertissez le Dinar Algérien (DZD) vers les devises mondiales et inversement selon les taux de référence officiels, avec graphique d\'évolution historique et option de taux personnalisé.',
    },
    iconName: 'Coins',
    references: [
      {
        label: {
          ar: 'المرجع الدولي لأسعار الصرف: Frankfurter',
          fr: 'Source des taux de référence internationaux : Frankfurter',
        },
        url: 'https://frankfurter.dev/',
      },
    ],
    faqs: [
      {
        question: {
          ar: 'ما مصدر أسعار الصرف المعروضة في محول العملات ومخطط التغير؟',
          fr: 'Quelle est la source des taux affichés dans le convertisseur et le graphique ?',
        },
        answer: {
          ar: 'تعتمد الأسعار المرجعية على بيانات Frankfurter المجمعة من مصادر نقدية رسمية، وتمثل نقاط المخطط أيام توفر البيانات المرجعية وليست تداولا لحظيا مباشرا في البورصة.',
          fr: 'Les données de référence proviennent de Frankfurter (agrégat de sources officielles) ; les points du graphique correspondent aux jours ouvrés publiés et non à une cotation boursière en direct.',
        },
      },
      {
        question: {
          ar: 'هل تشمل الأسعار الرسمية عمولات البنوك أو سعر السوق الموازية (السكوار)؟',
          fr: 'Les taux officiels reflètent-ils les frais bancaires ou le marché parallèle ?',
        },
        answer: {
          ar: 'لا، الأسعار المعروضة هي أسعار صرف مرجعية رسمية قد تختلف عن سعر البيع والشراء الفعلي وعمولات التحويل لدى البنوك التجارية، ولا تعكس تلقائيا أسعار السوق الموازية ما لم تدخل السعر يدويا.',
          fr: 'Non, il s\'agit de taux de référence officiels pouvant différer des marges et commissions bancaires ; ils n\'incluent pas les cotations du marché parallèle (Square) sauf saisie manuelle de votre part.',
        },
      },
      {
        question: {
          ar: 'كيف أستخدم المحول لتقدير ميزانية السفر أو منحة الدراسة؟',
          fr: 'Comment estimer efficacement un budget de voyage ou de frais d\'études ?',
        },
        answer: {
          ar: 'قارن أولا القيمة المرجعية الرسمية لتكاليف التأشيرة والتذاكر والمنحة السياحية، ويمكنك تعديل سعر الصرف يدويا لاختبار سيناريوهات الميزانية بالدينار الجزائري بدقة.',
          fr: 'Utilisez d\'abord le taux de référence officiel pour les frais bancaires ou universitaires, puis ajustez librement le taux si besoin pour simuler votre budget complet en dinars.',
        },
      },
    ],
  },
  {
    id: 'tool-date-diff',
    slug: 'date-difference',
    category: 'calculators',
    name: {
      ar: 'حاسبة الفرق بين تاريخين بالأيام والأسابيع',
      fr: 'Calculateur de Durée et d\'Écart entre Deux Dates',
    },
    description: {
      ar: 'احسب المدة الزمنية الدقيقة بين تاريخين بالأيام الكاملة وما يعادلها من أسابيع وأيام، سواء كان التاريخ الثاني قبل الأول أو بعده لحساب آجال الطعون والعقود والإجازات.',
      fr: 'Calculez instantanément l\'intervalle exact en jours complets, semaines et jours restants entre deux dates (dans n\'importe quel ordre) pour vos délais légaux, contrats ou congés.',
    },
    iconName: 'Clock',
    faqs: [
      {
        question: {
          ar: 'هل يشترط إدخال التاريخ الأقدم أولا في حاسبة الفرق بين تاريخين؟',
          fr: 'Dois-je obligatoirement saisir la date la plus ancienne en premier ?',
        },
        answer: {
          ar: 'لا، تحسب الأداة الفارق الزمني المطلق بين التاريخين بدقة سواء كان التاريخ الثاني قبل التاريخ الأول أو بعده، مع عرض عدد الأيام الكاملة والأسابيع.',
          fr: 'Non, l\'outil calcule automatiquement l\'écart absolu entre les deux dates quel que soit leur ordre de saisie.',
        },
      },
      {
        question: {
          ar: 'هل تشمل المدة المحتسبة أيام العطل الأسبوعية والرسمية؟',
          fr: 'La durée calculée inclut-elle les week-ends et jours fériés ?',
        },
        answer: {
          ar: 'نعم، تحسب الأداة الأيام التقويمية الكاملة بين التاريخين (بما فيها نهاية الأسبوع والعطل)، وهو ما يناسب مدد الإيجار والإجازات وحساب الآجال القانونية المفتوحة.',
          fr: 'Oui, le résultat indique le nombre de jours calendaires complets (week-ends et jours fériés inclus) entre les deux dates sélectionnées.',
        },
      },
    ],
  },
  {
    id: 'tool-electricity',
    slug: 'electricity-calculator',
    category: 'calculators',
    isPopular: true,
    name: {
      ar: 'حاسبة استهلاك الكهرباء وتقدير فاتورة سونلغاز',
      fr: 'Calculateur de Consommation Électrique & Estimation Sonelgaz',
    },
    description: {
      ar: 'احسب استهلاك أجهزتك المنزلية بالكيلوواط ساعي وتكلفتها اليومية والشهرية بالدينار، وقدر فاتورة سونلغاز حسب القدرة بالواط وساعات التشغيل والتعريفة أو الشطور المطبقة.',
      fr: 'Calculez la consommation en kWh et le coût journalier/mensuel de vos appareils en dinars algériens, et estimez votre facture Sonelgaz selon la puissance (W), les heures d\'usage et les tranches.',
    },
    iconName: 'Zap',
    faqs: [
      {
        question: {
          ar: 'هل تعوض هذه الحاسبة فاتورة شركة سونلغاز الرسمية؟',
          fr: 'Ce calculateur remplace-t-il la facture officielle émise par Sonelgaz ?',
        },
        answer: {
          ar: 'لا، إنها أداة تقديرية توعوية لا تحل محل فاتورة سونلغاز الرسمية؛ فقد تختلف الفاتورة الفعلية بسبب شرائح التسعير التصاعدية الأربعة والرسوم والضرائب وقراءة العداد الدورية.',
          fr: 'Non, il s\'agit d\'un simulateur indicatif qui ne remplace pas la quittance officielle Sonelgaz, la facture finale intégrant les 4 tranches progressives, les taxes fixes et le relevé réel du compteur.',
        },
      },
      {
        question: {
          ar: 'كيف يتم حساب استهلاك أي جهاز كهربائي منزلي؟',
          fr: 'Quelle est la formule pour calculer la consommation d\'un appareil électrique ?',
        },
        answer: {
          ar: 'تقسم قدرة الجهاز بالواط على 1000 لتحويلها إلى كيلوواط، ثم تضرب في عدد ساعات التشغيل اليومية للحصول على الكيلوواط ساعي (kWh)، وبعدها يضرب الناتج في سعر الكيلوواط.',
          fr: 'Divisez la puissance en watts par 1 000 pour obtenir des kilowatts (kW), multipliez par le nombre d\'heures de fonctionnement (kWh), puis multipliez par le prix unitaire du kWh.',
        },
      },
      {
        question: {
          ar: 'ما أفضل طريقة عملية لخفض قيمة فاتورة الكهرباء في البيت؟',
          fr: 'Comment réduire concrètement le montant de sa facture d\'électricité ?',
        },
        answer: {
          ar: 'ابدأ بالأجهزة الأعلى قدرة أو الأكثر تشغيلا مثل المكيفات والسخانات والمجففات، وسجل ساعات استخدامها لمقارنة تكلفتها اليومية والشهرية وتفادي القفز إلى الشطرين الثالث والرابع.',
          fr: 'Ciblez en priorité les appareils les plus énergivores ou allumés longtemps (climatiseurs, chauffe-eau, radiateurs) afin de limiter le passage vers les tranches tarifaires supérieures.',
        },
      },
    ],
  },
  {
    id: 'tool-fuel',
    slug: 'fuel-calculator',
    category: 'calculators',
    name: {
      ar: 'حاسبة البنزين والوقود وتكلفة الرحلة',
      fr: 'Calculateur de Carburant & Coût de Trajet (Essence, Gasoil, GPL)',
    },
    description: {
      ar: 'احسب كمية الوقود المطلوبة باللتر والتكلفة الإجمالية للرحلة وتكلفة كل 100 كم بالدينار الجزائري لأنواع البنزين والمازوت وغاز سيرغاز GPL حسب المسافة واستهلاك السيارة.',
      fr: 'Calculez le volume de carburant en litres, le budget total du trajet et le coût aux 100 km en dinars algériens (Sans Plomb, Gasoil, GPL/C) selon la distance, la consommation et le prix au litre.',
    },
    iconName: 'Fuel',
    faqs: [
      {
        question: {
          ar: 'كيف أحسب كمية البنزين أو المازوت المطلوبة لرحلة بين ولايتين؟',
          fr: 'Comment calculer la quantité de carburant nécessaire pour un trajet ?',
        },
        answer: {
          ar: 'تطبق المعادلة: كمية الوقود (لتر) = مسافة الرحلة (كم) × معدل استهلاك السيارة (لتر/100 كم) ÷ 100، ثم تضرب الكمية في سعر اللتر لمعرفة التكلفة الإجمالية.',
          fr: 'On applique la formule : Litres = Distance (km) × Consommation moyenne (L/100 km) ÷ 100, puis on multiplie ce volume par le prix du litre pour obtenir le coût total.',
        },
      },
      {
        question: {
          ar: 'هل السعر المعروض داخل الحاسبة محدث تلقائيا في كل محطات الوقود؟',
          fr: 'Le tarif affiché par défaut est-il toujours identique partout ?',
        },
        answer: {
          ar: 'قد تتغير أسعار الوقود أو تختلف حسب نوعه (بنزين بدون رصاص، مازوت، غاز GPL)؛ لذلك راجع السعر الظاهر وأدخل السعر الصحيح يدويا عند الحاجة، علما أن الاستهلاك الفعلي يتأثر بالازدحام والسرعة والحمولة.',
          fr: 'Les tarifs ou types de carburant peuvent évoluer ; vérifiez et saisissez manuellement le prix au litre au besoin. La consommation réelle varie aussi selon le trafic, la vitesse, la climatisation et la charge.',
        },
      },
      {
        question: {
          ar: 'كيف أستفيد من معرفة تكلفة كل 100 كم؟',
          fr: 'À quoi sert l\'indicateur de coût par 100 km ?',
        },
        answer: {
          ar: 'تسهل عليك هذه القيمة مقارنة تكلفة السفر بسيارتك مع تكلفة القطار أو النقل الجماعي، وكذا حساب التوفير المتحقق عند التحويل إلى غاز السيارات سيرغاز GPL.',
          fr: 'Ce repère permet de comparer immédiatement le coût de la voiture individuelle aux transports collectifs (SNTF, autocar) ou de mesurer l\'économie réalisée en passant au GPL/C.',
        },
      },
    ],
  },
];

export const batch1ToolGuides: Record<string, Partial<ToolRichGuide>> = {
  'age-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'كافة المواطنين والطلبة والموظفين والمترشحين للمسابقات والتقاعد',
        fr: 'Citoyens, candidats aux concours, étudiants et salariés (CNR)',
      },
      processingTime: {
        ar: 'فوري داخل المتصفح بمجرد اختيار تاريخ الميلاد',
        fr: 'Instantané dans le navigateur dès la saisie de la date',
      },
      fees: {
        ar: 'مجاني بالكامل دون إرسال أو حفظ للبيانات',
        fr: '100 % gratuit sans collecte ni envoi de données',
      },
      channel: {
        ar: 'معالجة محلية كاملة عبر تقنية الويب في جهازك',
        fr: 'Traitement local 100 % côté client sur votre appareil',
      },
      keyRequirement: {
        ar: 'إدخال تاريخ الميلاد بالتقويم الميلادي كما يظهر في الحالة المدنية',
        fr: 'Date de naissance grégorienne conforme à votre acte d\'état civil',
      },
    },
    explanation: {
      ar: [
        'تتيح لك حاسبة العمر بدقة معرفة عمرك الكامل انطلاقا من تاريخ ميلادك بالسنوات والأشهر والأيام، إضافة إلى إجمالي عدد الأيام التي عشتها والمدة المتبقية لعيد ميلادك القادم.',
        'تجرى كافة العمليات الحسابية داخل متصفحك مباشرة دون إرسال تاريخ ميلادك إلى أي خادم خارجي، مما يضمن حماية خصوصيتك الكاملة في الاستعمال الشخصي أو عند التحقق من ملفات عائلية.',
        'يعتمد الحساب على التاريخ الميلادي المحلي المضبوط على جهازك وعدد أيام الشهور الميلادية بدقة؛ مع التنبيه إلى أن مواليد 29 فبراير قد تعامل تواريخهم بطرق مختلفة في بعض الأنظمة الإدارية في السنوات غير الكبيسة (28 فبراير أو 1 مارس).',
        'تفيد هذه الأداة بشكل خاص في الجزائر عند التحقق من شروط السن القصوى أو الدنيا في مسابقات التوظيف، تسجيلات التمدرس، استخراج الوثائق البيومترية، أو حساب السنوات المتبقية لسن التقاعد القانوني في الصندوق الوطني للتقاعد CNR.'
      ],
      fr: [
        'Le calculateur d\'âge exact permet de déterminer instantanément votre âge détaillé en années, mois et jours à partir de votre date de naissance, ainsi que le cumul total de jours vécus et le compte à rebours jusqu\'au prochain anniversaire.',
        'Toutes les opérations s\'effectuent localement dans la mémoire de votre navigateur : votre date de naissance n\'est jamais envoyée vers un serveur distant, assurant une confidentialité absolue.',
        'Le moteur de calcul s\'appuie sur le calendrier grégorien local de votre appareil en tenant compte de la durée réelle des mois et des années bissextiles (avec un rappel utile pour les personnes nées un 29 février selon les conventions administratives).',
        'En Algérie, cet outil s\'avère particulièrement pratique pour vérifier les conditions d\'âge lors des concours administratifs, inscriptions scolaires, démarches biométriques ou pour estimer l\'horizon légal du départ en retraite CNR.'
      ],
    },
    formulaTitle: {
      ar: 'منهجية احتساب العمر والسنوات الكبيسة',
      fr: 'Principe de calcul calendaire et années bissextiles',
    },
    formulaText: {
      ar: 'العمر الدقيق = التاريخ الحالي (المضبوط في الجهاز) - تاريخ الميلاد مع احتساب طول كل شهر (28، 29، 30، أو 31 يوما)؛ وإجمالي الأيام = الفارق التراكمي باليوم بين التاريخين.',
      fr: 'Âge exact = Date locale actuelle − Date de naissance en tenant compte des mois de 28 à 31 jours et des années bissextiles ; Total de jours = Écart calendaire exact en jours complets.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي للتحقق من العمر والتقاعد',
        fr: 'Exemple pratique de vérification d\'âge et de retraite',
      },
      scenario: {
        ar: 'مواطن مولود بتاريخ 15 أوت 1986 يريد معرفة عمره الدقيق باليوم والتأكد من أهليته لشرط سن تحت 40 سنة في مسابقة توظيف.',
        fr: 'Un candidat né le 15 août 1986 souhaite connaître son âge exact au jour près et vérifier s\'il respecte la limite d\'âge d\'un concours administratif.',
      },
      result: {
        ar: 'تعرض الحاسبة العمر فورا بالسنوات والأشهر والأيام الكاملة مع حساب إجمالي الأيام المتبقية لعيد الميلاد المقبل لتجنب أي لبس إداري.',
        fr: 'L\'outil affiche instantanément l\'âge exact en années, mois et jours, permettant de confirmer immédiatement l\'éligibilité administrative sans erreur manuelle.',
      },
    },
    tips: {
      ar: [
        'تأكد من ضبط تاريخ وساعة جهازك بشكل صحيح قبل الاعتماد على النتيجة اليومية.',
        'اعتمد تاريخ الميلاد المدون في عقد الميلاد (12 أو 12S) عند التحقق من شروط المسابقات الرسمية.',
        'لمواليد 29 فبراير، راجع النظام الداخلي للمسابقة أو الهيئة الإدارية للتأكد من يوم اعتماد السن في السنوات البسيطة.',
        'استكشف أيضا حاسبة الفرق بين تاريخين لاحتساب مدد العمل والخبرة المهنية المطلوبة في ملفات التوظيف.',
      ],
      fr: [
        'Vérifiez que la date système de votre téléphone ou ordinateur est correctement réglée.',
        'Utilisez la date officielle figurant sur votre extrait d\'acte de naissance pour les concours et dossiers publics.',
        'Si vous êtes né un 29 février, contrôlez la règle appliquée par l\'organisme lors des années non bissextiles.',
        'Complétez ce calcul avec l\'outil d\'écart entre deux dates pour totaliser vos périodes d\'expérience professionnelle.',
      ],
    },
    extraFaqs: [],
  },

  'average-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'طلبة الجامعات الجزائرية (نظام LMD)، الأقسام التحضيرية والمدارس العليا',
        fr: 'Étudiants des universités algériennes (LMD), classes préparatoires et grandes écoles',
      },
      processingTime: {
        ar: 'حساب فوري للمعدل الموزون عند إدخال النقاط والمعاملات',
        fr: 'Calcul instantané de la moyenne pondérée à la saisie',
      },
      fees: {
        ar: 'مجاني بالكامل مع حفظ محلي غير مرسل لأي خادم',
        fr: 'Gratuit à 100 % sans envoi de notes sur serveur',
      },
      channel: {
        ar: 'أداة تفاعلية في المتصفح مع حاسبة الأرصدة والمعدل السنوي',
        fr: 'Outil web local connecté aux calculateurs annuels et de pourcentages',
      },
      keyRequirement: {
        ar: 'علامة الامتحان على 20 ومعامل كل مقياس (وTD/TP إن وجد)',
        fr: 'Note d\'examen sur 20, coefficient de chaque module (et note TD/TP si applicable)',
      },
    },
    explanation: {
      ar: [
        'تمكنك أداة حساب معدل السداسي الجامعي من احتساب معدلك الفصلي الموزون بدقة وسرعة من خلال إدخال كل مقياس في سطر مستقل وتحديد معامله وعلامة الامتحان النهائي على 20.',
        'عند إدخال علامة الأعمال الموجهة أو التطبيقية (TD/TP)، تقوم الحاسبة بدمجها وفق الصيغة الأكثر اعتمادا: 60% لعلامة الامتحان و40% لعلامة TD/TP، أما إذا تركت خانة TD/TP فارغة فتعتمد الحاسبة علامة الامتحان وحدها.',
        'يحسب المعدل السداسي العام بجمع حاصل ضرب معدل كل مقياس في معامله ثم القسمة على مجموع معاملات المقاييس التي أدخلت لها علامة الامتحان.',
        'تنبيه مهم: قد تختلف نسب احتساب TD/TP وطريقة احتساب المعدل حسب الجامعة والتخصص ونظام التقييم المعتمد في كليتك أو مدرستك العليا؛ لذلك تحقق دائما من دليل مؤسستك الجامعية واستخدم النتيجة هنا كتقدير إرشادي منظم.'
      ],
      fr: [
        'Le calculateur de moyenne semestrielle universitaire vous permet d\'obtenir instantanément votre moyenne générale pondérée sur 20 en saisissant chaque matière sur une ligne dédiée avec son coefficient et sa note d\'examen.',
        'Lorsque vous renseignez une note de travaux dirigés ou pratiques (TD/TP), l\'outil applique la pondération standard : 60 % pour l\'examen et 40 % pour le contrôle continu (TD/TP). Si le champ TD/TP reste vide, seule la note d\'examen est retenue.',
        'La moyenne semestrielle est ensuite calculée en divisant la somme des (moyenne du module × coefficient) par la somme totale des coefficients des modules évalués.',
        'Avertissement pédagogique : les coefficients et ratios entre contrôle continu et examen peuvent varier selon les universités, facultés et écoles supérieures en Algérie ; référez-vous toujours au guide officiel de votre établissement.'
      ],
    },
    formulaTitle: {
      ar: 'صيغة حساب معدل المقياس والمعدل السداسي العام',
      fr: 'Formule de pondération des modules et du semestre',
    },
    formulaText: {
      ar: 'معدل المقياس مع TD/TP = (علامة الامتحان × 0.6) + (علامة TD/TP × 0.4). المعدل العام = مجموع (معدل كل مقياس × معامله) ÷ مجموع معاملات المقاييس المدخلة.',
      fr: 'Moyenne module (avec TD/TP) = (Examen × 0,6) + (TD/TP × 0,4). Moyenne générale = Somme(moyenne module × coefficient) ÷ Somme des coefficients renseignés.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي: حساب معدل مقياسين بمعاملات مختلفة',
        fr: 'Exemple appliqué : calcul semestriel sur deux modules',
      },
      scenario: {
        ar: 'طالب تحصل في مقياس الرياضيات (معامل 2) على 14 في TD/TP و16 في الامتحان، وفي مقياس الإعلام الآلي (معامل 1) على 12 في الامتحان دون TD/TP.',
        fr: 'Un étudiant obtient en Mathématiques (coeff. 2) 14 en TD/TP et 16 à l\'examen, et en Informatique (coeff. 1) 12 à l\'examen sans TD/TP.',
      },
      result: {
        ar: 'معدل الرياضيات = (16 × 0.6) + (14 × 0.4) = 15.20، ومعدل الإعلام الآلي = 12.00. وبالتالي المعدل العام = (15.20 × 2 + 12 × 1) ÷ (2 + 1) = 14.13 / 20.',
        fr: 'Moyenne Mathématiques = (16 × 0,6) + (14 × 0,4) = 15,20 ; Informatique = 12,00. Moyenne générale = (15,20 × 2 + 12 × 1) ÷ 3 = 14,13 / 20.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'جدول مثال تطبيقي لحساب معدل السداسي الجامعي',
        fr: 'Tableau d’exemple chiffré de moyenne semestrielle',
      },
      headers: [
        { ar: 'المقياس', fr: 'Module / Matière' },
        { ar: 'المعامل', fr: 'Coefficient' },
        { ar: 'TD/TP', fr: 'TD/TP' },
        { ar: 'الامتحان', fr: 'Examen' },
        { ar: 'معدل المقياس', fr: 'Moyenne Module' },
      ],
      rows: [
        [
          { ar: 'رياضيات', fr: 'Mathématiques' },
          { ar: '2', fr: '2' },
          { ar: '14', fr: '14' },
          { ar: '16', fr: '16' },
          { ar: '15.20', fr: '15.20' },
        ],
        [
          { ar: 'إعلام آلي', fr: 'Informatique' },
          { ar: '1', fr: '1' },
          { ar: '—', fr: '—' },
          { ar: '12', fr: '12' },
          { ar: '12.00', fr: '12.00' },
        ],
        [
          { ar: 'المعدل السداسي العام', fr: 'Moyenne Semestrielle Totale' },
          { ar: 'مجموع المعاملات: 3', fr: 'Total Coeff. : 3' },
          { ar: 'صيغة 60/40', fr: 'Règle 60/40' },
          { ar: 'محسوب تلقائيا', fr: 'Calcul pondéré' },
          { ar: '14.13 / 20', fr: '14,13 / 20' },
        ],
      ],
    },
    tips: {
      ar: [
        'تحقق أولا من نسب احتساب TD/TP في كشف النقاط أو دليل التخصص بجامعتك قبل اعتماد الصيغة الافتراضية.',
        'انتقل إلى حاسبة المعدل السنوي لاحتساب المعدل السنوي الكلي انطلاقا من معدلات السداسيين.',
        'استخدم حاسبة النسبة المئوية لتحويل النقاط أو معرفة أثر ارتفاع علامة مقياس ذي معامل مرتفع.',
        'ركز جهود المراجعة والتعويض على المقاييس الأساسية ذات المعامل 2 أو 3 فما فوق لرفع المعدل بأكبر قدر.',
      ],
      fr: [
        'Vérifiez d\'abord les règles exactes de pondération (60/40 ou 50/50) dans le règlement de votre faculté.',
        'Enchaînez avec le calculateur de moyenne annuelle pour regrouper le semestre 1 et le semestre 2.',
        'Servez-vous du calculateur de pourcentage pour mesurer le poids réel des matières à fort coefficient.',
        'Priorisez les modules fondamentaux à coefficient élevé lorsque vous planifiez vos révisions ou rattrapages.',
      ],
    },
    extraFaqs: [],
  },

  'calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'الطلبة والمحاسبون والمستخدمون اليوميون عبر الهاتف والحاسوب',
        fr: 'Étudiants, comptables et utilisateurs quotidiens sur mobile et PC',
      },
      processingTime: {
        ar: 'استجابة فورية في الحساب مع سجل فوري للعمليات',
        fr: 'Calcul instantané avec sauvegarde immédiate en historique',
      },
      fees: {
        ar: 'مجاني كليا دون إعلانات أو تسجيل',
        fr: 'Totalement gratuit, sans publicité ni compte requis',
      },
      channel: {
        ar: 'سجل محلي في متصفحك لا يرسل إلى أي خادم',
        fr: 'Historique local enregistré uniquement dans votre navigateur',
      },
      keyRequirement: {
        ar: 'كتابة العملية أو الضغط على الأزرار لحفظها في «عملياتي المحفوظة»',
        fr: 'Saisir votre équation puis consulter « Mes opérations sauvegardées »',
      },
    },
    explanation: {
      ar: [
        'تمنحك الآلة الحاسبة الذكية بيئة عملية وسريعة لإجراء المعادلات والعمليات الحسابية اليومية والعلمية دون تشتيت، سواء أثناء المراجعة الدراسية أو مراجعة الفواتير والميزانية المنزلية.',
        'الميزة الأساسية لهذه الأداة هي قسم «عملياتي المحفوظة» الذي يسمح لك بالاحتفاظ بالمعادلات والنتائج المهمة والعودة إليها لاحقا دون إعادة الكتابة في كل مرة.',
        'تحفظ جميع البيانات والعمليات المحفوظة محليا داخل ذاكرة متصفحك على نفس الجهاز ولا ترسل إلى أي خادم خارجي، مما يحمي خصوصية أرقامك المالية والشخصية.',
        'سواء كنت تستخدم الهاتف الذكي بنظام اللمس أو لوحة المفاتيح على الحاسوب، تستجيب الأداة بسرعة وتتيح لك نسخ النتائج ومراجعة سجل الحسابات بنقرة واحدة.'
      ],
      fr: [
        'La calculatrice intelligente offre une interface épurée et rapide pour exécuter vos calculs quotidiens et équations, que ce soit pour vos révisions, vos achats ou la vérification d\'une facture.',
        'Son atout majeur réside dans le bloc « Mes opérations sauvegardées », qui vous permet de conserver vos calculs clés et d\'y revenir plus tard sans tout ressaisir.',
        'L\'ensemble des données conservées reste strictement stocké en local dans votre navigateur sur cet appareil et n\'est jamais transféré vers un serveur distant.',
        'Adaptée aussi bien au clavier tactile des smartphones qu\'au pavé numérique d\'un PC, elle permet une consultation et une réutilisation fluides à tout moment.'
      ],
    },
    formulaTitle: {
      ar: 'مبدأ العمل والحفظ المحلي للسجل',
      fr: 'Fonctionnement des calculs et stockage local',
    },
    formulaText: {
      ar: 'تعالج الواجهة الأولويات الرياضية القياسية (الأقواس، الضرب والقسمة، ثم الجمع والطرح) وتخزن المعادلات المؤكدة في LocalStorage الخاص بالمتصفح.',
      fr: 'Le moteur respecte les priorités opératoires mathématiques (parenthèses, multiplication/division, addition/soustraction) et archive vos expressions confirmées dans le stockage local du navigateur.',
    },
    practicalExample: {
      title: {
        ar: 'مثال لاستعمال سجل العمليات المحفوظة',
        fr: 'Cas d\'usage de l\'historique sauvegardé',
      },
      scenario: {
        ar: 'تاجر أو طالب يحسب عدة فواتير أو مجموع معاملات مواد متفرقة ويرغب في مقارنة كل نتيجة مع السابقة.',
        fr: 'Un commerçant ou étudiant vérifie plusieurs montants successifs et souhaite conserver trace de chaque sous-total.',
      },
      result: {
        ar: 'بحفظ كل عملية، يظهر السجل أسفل الحاسبة لتمكينك من مراجعة المجموع الكلي والعودة إلى كل معادلة متى شئت.',
        fr: 'Chaque calcul validé reste consultable dans le journal local, évitant les oublis et les erreurs de recopie.',
      },
    },
    tips: {
      ar: [
        'احفظ العمليات متعددة الخطوات ضمن سجل «عملياتي المحفوظة» لتفادي ضياعها عند إغلاق الصفحة.',
        'تأكد من مسح السجل يدويا إذا كنت تستخدم جهاز حاسوب مشتركا في مقهى إنترنت أو جامعة.',
        'استخدم الآلة الحاسبة للتحقق السريع قبل إدخال الأرقام النهائية في مولد الفواتير أو حاسبة الميزانية.',
        'راجع ترتيب الأقواس في المعادلات المركبة لضمان دقة النتائج المالية أو العلمية.',
      ],
      fr: [
        'Sauvegardez vos calculs importants pour les retrouver instantanément lors de la prochaine session.',
        'Pensez à vider l\'historique local si vous travaillez depuis un poste informatique partagé.',
        'Utilisez-la en complément rapide avant de reporter un montant dans le générateur de factures.',
        'Employez des parenthèses explicites pour vos équations complexes afin d\'éviter toute erreur d\'ordre opératoire.',
      ],
    },
    extraFaqs: [],
  },

  'car-cost-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'ملاك السيارات والمقبلون على شراء سيارة في الجزائر',
        fr: 'Propriétaires de véhicules et futurs acquéreurs en Algérie',
      },
      processingTime: {
        ar: 'تقدير فوري للتكلفة الشهرية والسنوية ولكل كيلومتر',
        fr: 'Estimation immédiate par mois, par an et au kilomètre',
      },
      fees: {
        ar: 'مجاني كليا داخل المتصفح',
        fr: 'Gratuit et sans inscription dans le navigateur',
      },
      channel: {
        ar: 'محاكي ميزانية السيارات بالدينار الجزائري',
        fr: 'Simulateur de budget automobile en Dinars Algériens',
      },
      keyRequirement: {
        ar: 'مصاريف الوقود والتأمين السنوي والصيانة وقسيمة السيارات',
        fr: 'Dépenses de carburant, assurance annuelle, entretien et vignette auto',
      },
    },
    explanation: {
      ar: [
        'امتلاك سيارة في الجزائر لا يقتصر على تكلفة تعبئة الوقود وحدها؛ إذ تشكل المصاريف الثابتة والخفية مثل التأمين السنوي الإلزامي أو التكميلي، الصيانة الدورية (تغيير الزيت والفلاتر والإطارات)، والضرائب السنوية (قسيمة السيارات والمراقبة التقنية) جزءا رئيسيا من ميزانية المركبة.',
        'تساعدك حاسبة مصاريف السيارة على تجميع كافة هذه البنود في شاشة واحدة لتحصل على ثلاثة مؤشرات عملية واضحة: التكلفة الشهرية الإجمالية، التكلفة السنوية الكاملة، وتكلفة الكيلومتر الواحد بالدينار الجزائري.',
        'للحصول على أدق تقدير عملي، تأكد من إدخال كل بند وفق المدة الزمنية الصحيحة (الوقود الشهري مقابل التأمين والقسيمة السنوية) حتى لا يتم احتساب المصروف نفسه مرتين.',
        'تعتمد النتيجة التقديرية حصريا على الأرقام التي تدخلها، وبالتالي يمكنك إضافة مبلغ احتياطي سنوي للإصلاحات غير المتوقعة أو مقارنة مصاريف سيارتك الحالية مع تكلفة التنقل البديل.'
      ],
      fr: [
        'Posséder une voiture en Algérie implique bien plus que le seul budget carburant : les charges cachées ou annuelles telles que l\'assurance automobile, l\'entretien périodique (vidange, filtres, pneumatiques), le contrôle technique et la vignette automobile pèsent lourdement sur le budget.',
        'Ce calculateur regroupe l\'ensemble de vos frais pour dégager trois repères financiers immédiats : le coût mensuel global, le coût annuel total et le coût réel au kilomètre en dinars algériens.',
        'Pour éviter tout biais, veillez à saisir chaque dépense selon sa périodicité réelle afin de ne pas compter un même poste deux fois.',
        'L\'estimation reflétant strictement vos saisies, l\'ajout d\'une réserve annuelle pour réparations imprévues vous aide à comparer sereinement votre budget auto avec vos revenus mensuels.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة التكلفة الشاملة وتكلفة الكيلومتر الواحد',
      fr: 'Calcul du budget global et du prix de revient kilométrique',
    },
    formulaText: {
      ar: 'التكلفة السنوية = (الوقود الشهري × 12) + التأمين السنوي + قسيمة السيارات + الصيانة السنوية. تكلفة الكيلومتر = مجموع المصاريف السنوية ÷ المسافة السنوية المقطوعة (كم).',
      fr: 'Coût annuel = (Carburant mensuel × 12) + Assurance + Vignette + Entretien annuel. Coût/km = Coût annuel total ÷ Kilométrage annuel parcouru.',
    },
    practicalExample: {
      title: {
        ar: 'مثال لتكلفة سيارة سياحية في الجزائر (15,000 كم/سنة)',
        fr: 'Exemple de budget annuel en Algérie (15 000 km/an)',
      },
      scenario: {
        ar: 'سائق ينفق 7,000 دج وقودا شهريا، 18,000 دج تأمينا سنويا، 25,000 دج صيانة وزيوتا، و3,000 دج قسيمة ومراقبة تقنية لمسافة 15,000 كم سنويا.',
        fr: 'Un conducteur dépense 7 000 DZD/mois en carburant, 18 000 DZD d\'assurance, 25 000 DZD d\'entretien et 3 000 DZD de taxes pour 15 000 km par an.',
      },
      result: {
        ar: 'يصل الإجمالي السنوي إلى نحو 130,000 دج (حوالي 10,833 دج شهريا)، أي ما يعادل قرابة 8.67 دج لكل كيلومتر مقطوع.',
        fr: 'Le total annuel s\'élève à 130 000 DZD (soit ~10 833 DZD/mois), ce qui correspond à environ 8,67 DZD par kilomètre parcouru.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'مكونات ميزانية السيارة الأساسية في الجزائر',
        fr: 'Postes clés d’un budget automobile annuel en Algérie',
      },
      headers: [
        { ar: 'بند المصروف', fr: 'Poste de dépense' },
        { ar: 'الدورية المعتادة', fr: 'Périodicité' },
        { ar: 'المؤشر المرجعي', fr: 'Éléments inclus' },
      ],
      rows: [
        [
          { ar: 'الوقود (بنزين / مازوت / GPL)', fr: 'Carburant (Essence / Gasoil / GPL)' },
          { ar: 'أسبوعي / شهري', fr: 'Hebdomadaire / Mensuelle' },
          { ar: 'حسب المسافة واستهلاك كل 100 كم', fr: 'Selon distance et conso aux 100 km' },
        ],
        [
          { ar: 'التأمين على المركبة', fr: 'Assurance automobile' },
          { ar: 'سنوي أو سداسي', fr: 'Annuelle / Semestrielle' },
          { ar: 'المسؤولية المدنية أو التأمين الشامل', fr: 'RC obligatoire ou Tous Risques' },
        ],
        [
          { ar: 'الصيانة الدورية وقطع الغيار', fr: 'Entretien et pièces d\'usure' },
          { ar: 'موسمي / كل 10,000 كم', fr: 'Périodique / Tous les 10 000 km' },
          { ar: 'الزيوت، الفلاتر، المكابح، الإطارات', fr: 'Vidange, filtres, freins, pneus' },
        ],
        [
          { ar: 'الرسوم القانونية', fr: 'Taxes et conformité' },
          { ar: 'سنوي', fr: 'Annuelle' },
          { ar: 'قسيمة السيارات والمراقبة التقنية', fr: 'Vignette auto et contrôle technique' },
        ],
      ],
    },
    tips: {
      ar: [
        'اربط نتائج هذه الحاسبة مع حاسبة الراتب الصافي ومدير الميزانية الشهرية لتقدير نسبة مصروف السيارة من دخلك.',
        'أدخل قسيمة السيارات وفق القوة الجبائية (CV) وسنة الصنع بدقة لضبط التكلفة السنوية.',
        'لا تنس احتساب مصاريف المراقبة التقنية الدورية وتجديد الإطارات ضمن المتوسط السنوي للصيانة.',
        'جرب حاسبة تكلفة البنزين والوقود للرحلة إذا كنت تريد مقارنة التنقل الشخصي بالقطار بين الولايات.',
      ],
      fr: [
        'Intégrez le coût mensuel estimé dans le gestionnaire de budget pour évaluer son poids sur votre salaire net.',
        'Vérifiez le tarif exact de votre vignette selon la puissance fiscale (CV) et l\'âge du véhicule.',
        'Lissez les dépenses pluriannuelles (pneus, batterie, courroie) sur 12 mois pour une estimation réaliste.',
        'Utilisez également le calculateur carburant pour estimer vos trajets ponctuels inter-wilayas.',
      ],
    },
    extraFaqs: [],
  },

  'currency-converter': {
    quickSummary: {
      targetAudience: {
        ar: 'المسافرون والطلبة والمستوردون وأبناء الجالية في الجزائر',
        fr: 'Voyageurs, étudiants boursiers, professionnels et diaspora algérienne',
      },
      processingTime: {
        ar: 'تحويل فوري بين الدينار وأبرز العملات العالمية',
        fr: 'Conversion instantanée entre DZD et devises internationales',
      },
      fees: {
        ar: 'أداة مجانية مع رابط المصدر الرسمي Frankfurter',
        fr: 'Gratuit avec lien direct vers la source Frankfurter',
      },
      channel: {
        ar: 'محول أسعار صرف مرجعية مع مخطط التغير التاريخي',
        fr: 'Convertisseur de taux de référence et graphique d\'évolution',
      },
      keyRequirement: {
        ar: 'تمييز السعر الرسمي المرجعي عن عمولات البنوك والسوق الموازية',
        fr: 'Distinguer le cours officiel de référence des frais bancaires et du marché parallèle',
      },
    },
    explanation: {
      ar: [
        'يوفر محول العملات وسيلة عملية للتحويل السريع بين الدينار الجزائري (DZD) والعملات العالمية الرئيسية مثل الأورو والدولار والجنيه الإسترليني، مع متابعة تطور أسعار الصرف المرجعية عبر فترات زمنية مختلفة.',
        'تعتمد البيانات التاريخية ومخطط تغير سعر الصرف على واجهة Frankfurter التي تجمع أسعار الصرف المرجعية من مصادر نقدية رسمية؛ حيث تمثل نقاط الرسم البياني أيام توفر النشر المرجعي وليست تداولا لحظيا مباشرا في السوق المالية.',
        'يجب الانتباه إلى أن الأسعار المعروضة هي أسعار صرف مرجعية رسمية وقد تختلف عن أسعار الشراء والبيع الفعلية والعمولات المطبقة داخل البنوك أو مكاتب الصرف.',
        'كما لا تشمل القيم الرسمية أسعار السوق الموازية (السكوار)؛ لذلك يمكنك دائما التحقق من السعر الرسمي هنا أو إدخال سعر مخصص عند التخطيط لمصاريف السفر، التبادل التجاري، أو الحسابات الدراسية بالخارج.'
      ],
      fr: [
        'Le convertisseur de devises offre une conversion bidirectionnelle rapide entre le Dinar Algérien (DZD) et les principales devises mondiales (Euro, Dollar USD, Livre Sterling GBP), complétée par un historique d\'évolution.',
        'Les cotations de référence et le graphique s\'appuient sur Frankfurter, un service agrégeant les taux de référence de sources officielles : les points tracés reflètent les jours de cotation publiés et non un carnet d\'ordres en temps réel.',
        'Les cours affichés constituent des taux indicatifs officiels qui peuvent différer des cours acheteur/vendeur et des commissions appliqués au guichet des banques commerciales.',
        'Ils n\'incluent pas non plus les cotations du marché parallèle (« Square ») : veillez donc à vérifier la date des données affichée et, au besoin, à saisir un taux personnalisé pour simuler un budget de voyage ou d\'importation.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة التحويل وقراءة سعر الصرف المرجعي',
      fr: 'Formule de change et lecture des cours de référence',
    },
    formulaText: {
      ar: 'المبلغ المحول = المبلغ الأصلي × سعر الصرف المرجعي ليوم النشر؛ وعند وجود عمولة بنكية أو هامش صرف، يضاف الفارق المئوي إلى التكلفة الإجمالية بالدينار.',
      fr: 'Montant converti = Montant source × Taux de change de référence ; en pratique bancaire, la commission ou marge de change s\'ajoute au coût réel en dinars.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لتحويل مبلغ باليورو إلى الدينار الجزائري',
        fr: 'Exemple pratique de conversion EUR / DZD',
      },
      scenario: {
        ar: 'مقارنة قيمة 500 أورو بسعر الصرف المرجعي الرسمي عند التحضير لمعاملة بنكية أو دفع رسم تأشيرة ودراسة.',
        fr: 'Conversion de 500 EUR au taux de référence officiel pour préparer une opération bancaire ou des frais de scolarité.',
      },
      result: {
        ar: 'يظهر المحول المقابل الفوري بالدينار مع تاريخ البيانات المرجعية، بينما تنبه الحاسبة إلى مراجعة عمولة البنك أو فارق السوق الموازية حسب قناة التحويل الفعلية.',
        fr: 'L\'outil indique aussitôt l\'équivalent indicatif en DZD avec rappel de la date de cotation, tout en précisant l\'écart possible avec les frais de banque ou le marché parallèle.',
      },
    },
    tips: {
      ar: [
        'راجع دائما تاريخ تحديث سعر الصرف الظاهر في الواجهة قبل اعتماد أي تقدير مالي.',
        'لا تخلط بين سعر الصرف المرجعي الرسمي في المعاملات البنكية وأسعار السوق الموازية (السكوار).',
        'استعمل القيمة المحولة لاحقا مع مولد الفواتير أو كتابة المبالغ بالحروف لتجهيز عقودك وعروض الأسعار.',
        'استشر وكالتك البنكية لمعرفة العمولات والمصاريف الفعلية على الحوالات الخارجية أو البطاقات الدولية.',
      ],
      fr: [
        'Vérifiez systématiquement la date de référence des données affichée avant de valider un devis.',
        'Distinguez bien les taux bancaires officiels des cotations parallèles selon votre canal réel de change.',
        'Exportez vos estimations vers le générateur de factures ou le convertisseur chiffres en lettres si vous établissez un document.',
        'Demandez toujours le barème exact des commissions de virement à votre banque avant d\'initier une transaction.',
      ],
    },
    extraFaqs: [],
  },

  'date-difference': {
    quickSummary: {
      targetAudience: {
        ar: 'الموظفون والمحامون والإداريون ومعدو عقود الكراء والعمل',
        fr: 'Salariés, juristes, gestionnaires RH et particuliers',
      },
      processingTime: {
        ar: 'فوري بمجرد تحديد تاريخ البداية وتاريخ النهاية',
        fr: 'Instantané dès la sélection des deux dates',
      },
      fees: {
        ar: 'مجاني بالكامل دون قيود',
        fr: 'Entièrement gratuit et illimité',
      },
      channel: {
        ar: 'تطبيق محلي في المتصفح لحساب الأيام والأسابيع الكاملة',
        fr: 'Calculateur web local en jours complets et semaines',
      },
      keyRequirement: {
        ar: 'إدخال تاريخين في أي ترتيب (أقدم أولا أو أحدث أولا)',
        fr: 'Deux dates valides, quel que soit l\'ordre chronologique',
      },
    },
    explanation: {
      ar: [
        'تساعدك حاسبة الفرق بين تاريخين على حساب المدة الزمنية الدقيقة الفاصلة بين أي تاريخين بالأيام الكاملة، مع تحويل النتيجة مباشرة إلى ما يعادلها من أسابيع كاملة وأيام متبقية.',
        'تمتاز الأداة بمرونة الإدخال حيث يمكنك وضع التاريخ الثاني قبل التاريخ الأول أو بعده، لتعطيك المدة المطلقة الصحيحة دون أخطاء في الإشارات السالبة.',
        'تستخدم هذه الحسابات يوميا في الجزائر لضبط مدد الإجازات السنوية والمرضية، حساب آجال الطعون الإدارية والقضائية، متابعة عقود العمل محددة المدة (CDD)، ومراقبة تواريخ انتهاء صلاحية الوثائق وعقود الإيجار.',
        'تتم كافة العمليات في ذاكرة المتصفح دون اتصال بالشبكة ودون حفظ أي تواريخ شخصية مرتبطة بملفاتك.'
      ],
      fr: [
        'Le calculateur d\'écart entre deux dates permet de déterminer avec certitude la durée exacte qui sépare deux repères du calendrier en jours complets, tout en convertissant le résultat en semaines et jours restants.',
        'Souple à l\'usage, l\'outil gère automatiquement l\'intervalle que la seconde date soit postérieure ou antérieure à la première.',
        'Cet utilitaire s\'avère précieux au quotidien pour calculer des durées de contrat de travail (CDD), contrôler les délais légaux de recours administratif, planifier des congés ou suivre l\'échéance d\'un bail ou passeport.',
        'L\'ensemble du traitement reste 100 % local dans votre navigateur sans sauvegarde de vos dates.'
      ],
    },
    formulaTitle: {
      ar: 'طريقة حساب الأيام الكاملة والأسابيع',
      fr: 'Formule de calcul en jours calendaires et semaines',
    },
    formulaText: {
      ar: 'المدة بالأيام الكاملة = القيمة المطلقة للفارق الزمني بين التاريخين ÷ (86,400 ثانية/اليوم)؛ عدد الأسابيع = القسمة الصحيحة للأيام على 7 مع إظهار الباقي بالأيام.',
      fr: 'Jours complets = Valeur absolue (Date 2 − Date 1) en jours calendaires ; Semaines = Quotient entier (Jours ÷ 7) + Jours restants.',
    },
    practicalExample: {
      title: {
        ar: 'مثال تطبيقي لحساب مدة عقد أو أجل إداري',
        fr: 'Exemple de calcul pour un contrat ou délai de recours',
      },
      scenario: {
        ar: 'احتساب المدة الفاصلة بين 1 مارس و15 ماي لمعرفة عدد الأيام الكاملة والأسابيع الفعلية.',
        fr: 'Détermination de la durée comprise entre le 1er mars et le 15 mai.',
      },
      result: {
        ar: 'تعطي الحاسبة 75 يوما كاملا، أي ما يعادل 10 أسابيع و5 أيام بدقة متناهية.',
        fr: 'L\'outil indique exactement 75 jours complets, soit 10 semaines et 5 jours.',
      },
    },
    tips: {
      ar: [
        'انتبه في الآجال القانونية والإدارية إن كان المشرع يحتسب الأيام الكاملة (Francs) أو الأيام التقويمية العادية.',
        'لا يلزم إعادة ترتيب التاريخين يدويا؛ الأداة تتعرف على المدة المطلقة في الاتجاهين.',
        'للمدد المرتبطة بالمناسبات الدينية، استكمل الحساب باستخدام أداة الرزنامة الهجرية والميلادية.',
        'احسب عمرك أو مدة خدمتك المتبقية بالاستعانة كذلك بحاسبة العمر الدقيق في نفس القسم.',
      ],
      fr: [
        'En matière juridique, vérifiez toujours si le délai légal s\'entend en jours calendaires ou en jours francs.',
        'Vous n\'avez pas besoin d\'inverser vos dates si la plus récente a été saisie en premier.',
        'Pour les échéances incluant le calendrier lunaire, croisez votre suivi avec le convertisseur Hégirien / Grégorien.',
        'Utilisez également le calculateur d\'âge exact si vous devez vérifier un âge limite à une date précise.',
      ],
    },
    extraFaqs: [],
  },

  'electricity-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'الأسر والمنازل والمحلات المشتركة في شبكة سونلغاز بالجزائر',
        fr: 'Ménages, familles et locaux raccordés au réseau Sonelgaz',
      },
      processingTime: {
        ar: 'تقدير فوري للاستهلاك اليومي والشهري والثلاثي',
        fr: 'Estimation instantanée journalière, mensuelle et trimestrielle',
      },
      fees: {
        ar: 'أداة توعوية مجانية (ليست فاتورة سونلغاز رسمية)',
        fr: 'Simulateur gratuit à titre indicatif (non officiel)',
      },
      channel: {
        ar: 'حاسبة قدرة الأجهزة بالواط ومحاكاة أشطر سونلغاز',
        fr: 'Calculateur de puissance en Watts et simulation des tranches Sonelgaz',
      },
      keyRequirement: {
        ar: 'قدرة الجهاز بالواط (W) وساعات التشغيل وسعر الكيلوواط أو قراءة العداد',
        fr: 'Puissance (Watts), heures d\'utilisation et tarif kWh ou index du compteur',
      },
    },
    explanation: {
      ar: [
        'تساعدك حاسبة استهلاك الكهرباء وفاتورة سونلغاز على فهم تكلفة تشغيل أجهزتك الكهربائية اليومية والشهرية بدقة عبر تحويل قدرتها بالواط إلى كيلوواط ساعي وضربها في مدة الاستخدام والتعريفة المدخلة.',
        'وفق طريقة الحساب القياسية، يقسم استطاعة الجهاز بالواط (W) على 1000 للحصول على القدرة بالكيلوواط (kW)، ثم يضرب الناتج في عدد ساعات التشغيل للحصول على الاستهلاك بالـ (kWh)، وأخيرا في سعر الكيلوواط.',
        'وبالنسبة للمنازل الجزائرية، تعرض الأداة أيضا بنية فاتورة سونلغاز الثلاثية القائمة على أربعة أشطر تصاعدية للكهرباء والغاز إلى جانب الرسم على القيمة المضافة TVA وحقوق الطابع ورسم السكن ورسوم التلفزيون.',
        'تنبيه صريح: هذه أداة تقديرية مساعدة ولا تحل محل الفاتورة الرسمية الصادرة عن سونلغاز؛ إذ قد تختلف الفاتورة الفعلية نتيجة انتقال الاستهلاك بين الشرائح أو احتساب الرسوم والاشتراكات الثابتة وقراءة العداد الدورية.'
      ],
      fr: [
        'Le calculateur de consommation électrique et facture Sonelgaz estime le coût journalier et mensuel de vos appareils en convertissant leur puissance en kilowattheures (kWh) selon la durée de fonctionnement saisie.',
        'Selon la méthode standard, la puissance en Watts (W) est divisée par 1 000 pour obtenir des kilowatts (kW), multipliée par les heures d\'usage (kWh), puis multipliée par le tarif unitaire appliqué.',
        'La simulation intègre également la structure trimestrielle de Sonelgaz en Algérie avec ses 4 tranches tarifaires progressives, la TVA (9 % et 19 %), la taxe d\'habitation et la redevance fixe.',
        'Avertissement important : cet outil purement estimatif ne remplace en aucun cas la facture officielle de Sonelgaz, dont le montant final dépend des tranches franchies, des taxes réglementaires et du relevé physique du compteur.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة تحويل الواط وحساب التكلفة بالدينار',
      fr: 'Formule W en kWh et structure tarifaire Sonelgaz',
    },
    formulaText: {
      ar: 'الاستهلاك (kWh) = (القدرة بالواط ÷ 1000) × عدد ساعات التشغيل. التكلفة = الاستهلاك × التعريفة، وتخضع فواتير سونلغاز لأربعة أشطر تصاعدية مع TVA 9% و19%.',
      fr: 'Consommation (kWh) = (Watts ÷ 1 000) × Heures d\'usage. Coût = kWh × Tarif, avec barème progressif à 4 tranches et TVA réglementaire (9 % / 19 %) sur la facture trimestrielle.',
    },
    practicalExample: {
      title: {
        ar: 'مثال استهلاك مكيف أو جهاز منزلي (2000 واط)',
        fr: 'Exemple d\'un appareil de 2 000 Watts fonctionnant 5h/jour',
      },
      scenario: {
        ar: 'تشغيل مكيف أو مسخن مائي بقدرة 2000 واط لمدة 5 ساعات يوميا على مدار شهر (30 يوما).',
        fr: 'Utilisation d\'un climatiseur ou chauffage de 2 000 W durant 5 heures par jour pendant 30 jours.',
      },
      result: {
        ar: 'الاستهلاك اليومي = (2000 ÷ 1000) × 5 = 10 kWh، أي 300 kWh شهريا، ما يدفع جزءا معتبرا من استهلاك الثلاثي نحو الشطرين الثالث والرابع الأعلى تسعيرا.',
        fr: 'La consommation atteint 10 kWh/jour soit 300 kWh/mois pour cet appareil seul, faisant basculer une part importante de la facture trimestrielle dans les tranches 3 et 4 plus onéreuses.',
      },
    },
    comparisonTable: {
      title: {
        ar: 'جدول مرجعي لقدرة أبرز الأجهزة المنزلية ومؤشر الترشيد',
        fr: 'Repères indicatifs de puissance des appareils courants',
      },
      headers: [
        { ar: 'الجهاز الكهربائي', fr: 'Appareil électroménager' },
        { ar: 'القدرة التقريبية (واط)', fr: 'Puissance indicative (W)' },
        { ar: 'ملاحظة الترشيد', fr: 'Conseil d\'économie' },
      ],
      rows: [
        [
          { ar: 'مكيف هواء منزلي', fr: 'Climatiseur split' },
          { ar: '1,200 إلى 2,500 واط', fr: '1 200 à 2 500 W' },
          { ar: 'اضبطه على 24-26 درجة لتفادي الشطر الرابع', fr: 'Régler sur 24-26 °C pour éviter la tranche 4' },
        ],
        [
          { ar: 'سخان مائي كهربائي', fr: 'Chauffe-eau électrique' },
          { ar: '1,500 إلى 2,000 واط', fr: '1 500 à 2 000 W' },
          { ar: 'افصل التشغيل المستمر خارج أوقات الحاجة', fr: 'Couper hors besoins ou programmer' },
        ],
        [
          { ar: 'ثلاجة منزلية', fr: 'Réfrigérateur' },
          { ar: '150 إلى 300 واط', fr: '150 à 300 W' },
          { ar: 'تأكد من سلامة مطاط الباب والتهوية الخلفية', fr: 'Vérifier l\'étanchéité du joint de porte' },
        ],
        [
          { ar: 'مصباح LED اقتصادي', fr: 'Ampoule LED' },
          { ar: '9 إلى 15 واط', fr: '9 à 15 W' },
          { ar: 'بديل عملي يخفض إنارة البيت بأكثر من 80%', fr: 'Réduit la consommation d\'éclairage de > 80 %' },
        ],
      ],
    },
    tips: {
      ar: [
        'ابدأ حصر الاستهلاك بالأجهزة الأعلى قدرة بالواط والأطول تشغيلا كالمكيفات والمدافئ الكهربائية.',
        'قارن أرقام العداد الحالية مع قراءات الفاتورة السابقة لتفادي التقديرات الجزافية المرتفعة.',
        'ادخل قيمة التعريفة الموافقة لشطرك الحالي للتحقق من التكلفة التقريبية بدقة أكبر.',
        'خصص بندا شهريا لتكلفة الكهرباء والغاز ضمن مدير الميزانية الشهرية لتجنب ضغط نهاية الثلاثي.',
      ],
      fr: [
        'Identifiez d\'abord les équipements les plus puissants (climatiseur, radiateur, four) pour agir efficacement.',
        'Comparez les index du compteur avec votre dernière quittance Sonelgaz pour contrôler tout relevé estimatif.',
        'Utilisez la tarification réelle de votre tranche actuelle pour affiner le coût journalier calculé.',
        'Provisionnez mensuellement un tiers de la facture trimestrielle dans votre suivi budgétaire.',
      ],
    },
    extraFaqs: [],
  },

  'fuel-calculator': {
    quickSummary: {
      targetAudience: {
        ar: 'السائقون والمسافرون بين الولايات وناقلو البضائع والأفراد',
        fr: 'Conducteurs, voyageurs inter-wilayas et professionnels de la route',
      },
      processingTime: {
        ar: 'تقدير فوري للوقود باللتر والتكلفة بالدينار',
        fr: 'Calcul instantané des litres requis et du coût en DZD',
      },
      fees: {
        ar: 'أداة مجانية مع دعم تعديل سعر اللتر يدويا',
        fr: 'Gratuit avec personnalisation manuelle du tarif au litre',
      },
      channel: {
        ar: 'حاسبة رحلات تدعم البنزين والمازوت وسيرغاز GPL',
        fr: 'Simulateur multi-carburants (Sans Plomb, Gasoil, GPL/C)',
      },
      keyRequirement: {
        ar: 'المسافة بالكيلومتر ومعدل استهلاك السيارة (لتر/100 كم)',
        fr: 'Distance du trajet (km) et consommation moyenne (L/100 km)',
      },
    },
    explanation: {
      ar: [
        'تساعدك حاسبة البنزين والوقود وتكلفة الرحلة على التخطيط الدقيق لميزانية التنقل قبل الانطلاق بين الولايات أو في المسارات اليومية، من خلال حساب ثلاث نتائج فورية: كمية الوقود المطلوبة باللتر، التكلفة الإجمالية بالدينار الجزائري، وتكلفة كل 100 كيلومتر.',
        'يدعم المحاكي أشهر أنواع الوقود المعتمدة في محطات نفطال بالجزائر (البنزين بدون رصاص، المازوت/الديازل، وغاز السيارات سيرغاز GPL/C) مع إتاحة تعديل سعر اللتر يدويا لمواكبة أي تحديث أو فارق.',
        'تستند الحاسبة إلى علاقة تناسب مباشرة بين المسافة المقطوعة ومتوسط استهلاك السيارة لكل 100 كم، مما يتيح لك التبديل بسهولة بين مسارات المدينة والطرق السريعة.',
        'ننبه إلى أن النتيجة تظل تقديرية؛ فقد يرتفع الاستهلاك الفعلي بنسبة معتبرة بسبب الازدحام المروري، تشغيل المكيف، السرعة الزائدة، الحمولة الثقيلة، أو المنحدرات الجبلية.'
      ],
      fr: [
        'Le calculateur de carburant et coût de trajet vous aide à budgétiser vos déplacements inter-wilayas ou quotidiens en estimant immédiatement : le volume de carburant nécessaire (en litres), le coût total en dinars algériens et le coût de revient par 100 km.',
        'L\'interface intègre les principaux carburants disponibles dans les stations Naftal en Algérie (Essence Sans Plomb, Gasoil, GPL/C Sirghaz) tout en autorisant la modification manuelle du prix au litre.',
        'En ajustant simplement la consommation moyenne aux 100 km de votre véhicule selon qu\'il s\'agisse de conduite urbaine ou autoroutière, vous obtenez une prévision fiable en quelques secondes.',
        'Gardez à l\'esprit que la consommation réelle peut varier sensiblement selon la fluidité du trafic, l\'utilisation de la climatisation, la vitesse, le dénivelé routier et le chargement du véhicule.'
      ],
    },
    formulaTitle: {
      ar: 'معادلة احتساب الوقود وتكلفة المسار',
      fr: 'Formule du volume de carburant et coût aux 100 km',
    },
    formulaText: {
      ar: 'كمية الوقود (لتر) = المسافة (كم) × الاستهلاك (لتر/100 كم) ÷ 100. التكلفة الإجمالية = كمية الوقود × سعر اللتر. تكلفة كل 100 كم = الاستهلاك × سعر اللتر.',
      fr: 'Litres = Distance (km) × Consommation (L/100 km) ÷ 100. Coût total = Litres × Prix du litre. Coût/100 km = Consommation × Prix du litre.',
    },
    practicalExample: {
      title: {
        ar: 'مثال رحلة الجزائر العاصمة — وهران ذهابا (حوالي 430 كم)',
        fr: 'Exemple de trajet Alger — Oran (430 km aller simple)',
      },
      scenario: {
        ar: 'سيارة تستهلك 7 لترات لكل 100 كم من البنزين (بسعر 45.62 دج للتر كمثال) تقطع مسافة 430 كم.',
        fr: 'Un véhicule consommant 7 L/100 km d\'essence (exemple à 45,62 DZD/L) parcourt une distance de 430 km.',
      },
      result: {
        ar: 'الوقود المطلوب = 430 × 7 ÷ 100 = 30.1 لترا، والتكلفة التقديرية تناهز 1,373 دج (أي قرابة 319 دج لكل 100 كم).',
        fr: 'Le besoin est de 30,1 litres pour un budget estimé à environ 1 373 DZD (soit ~319 DZD par tranche de 100 km).',
      },
    },
    tips: {
      ar: [
        'تحقق دائما من السعر المعمول به لنوع الوقود وأدخله يدويا في حال طرأ أي تغيير.',
        'أضف هامشا يتراوح بين 10% و15% في الرحلات الجبلية أو عند تشغيل المكيف صيفا.',
        'قارن نتائج رحلاتك الطويلة مع مصاريف السيارة الشهرية والسنوية أو مع مواعيد قطارات SNTF.',
        'افحص ضغط الإطارات قبل السفر، إذ يرفع نقص الضغط استهلاك الوقود بنسبة ملحوظة.',
      ],
      fr: [
        'Contrôlez et ajustez manuellement le prix au litre si les tarifs de carburant évoluent.',
        'Prévoyez une marge de 10 à 15 % supplémentaire en trajet montagneux, urbain dense ou avec climatisation.',
        'Comparez votre coût de trajet avec le calculateur global du véhicule ou le tarif des trains SNTF.',
        'Vérifiez la pression des pneus avant un long déplacement pour éviter toute surconsommation inutile.',
      ],
    },
    extraFaqs: [],
  },
};
