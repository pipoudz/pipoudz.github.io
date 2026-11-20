import { BankItem, InsuranceItem, RichGuideContent } from '@/lib/types';
import { batch1BankGuides } from './batches/banks-batch-1';
import { batch2BankGuides } from './batches/banks-batch-2';
import { batch3BankGuides } from './batches/banks-batch-3';
import { batch1InsuranceGuides } from './batches/insurance-batch-1';
import { batch2InsuranceGuides } from './batches/insurance-batch-2';

export function getBankRichGuide(bank: BankItem): RichGuideContent {
  const arName = bank.name.ar;
  const frName = bank.name.fr;
  const acronym = bank.acronym;
  const hqAr = bank.headquarters.ar;
  const hqFr = bank.headquarters.fr;
  const swift = bank.swiftCode || 'غير محدد';

  const bankOverrides: Record<string, Partial<RichGuideContent>> = {
    ...batch1BankGuides,
    ...batch2BankGuides,
    ...batch3BankGuides,
  };
  const override = bankOverrides[bank.slug];

  const typeIntros: Record<BankItem['type'], { ar: string[]; fr: string[] }> = {
    central: {
      ar: [
        `يمثل ${arName} (${acronym})، ومقره الرئيسي في ${hqAr}، السلطة النقدية العليا والهيئة الرقابية المنظمة للجهاز المصرفي والمالي في الجزائر. يضطلع البنك بمهام إصدار العملة الوطنية، إدارة الاحتياطات الرسمية، مراقبة البنوك التجارية، وتحديد أسعار الصرف الرسمية المرجعية.`,
        `تتيح البوابة الرقمية للمؤسسة للباحثين، المتعاملين الاقتصاديين، والمواطنين الوصول الفوري إلى النشرات الإحصائية، النصوص القانونية والنقدية، التقارير السنوية، ومؤشرات السيولة والتضخم، بالإضافة إلى خدمات التحقق من رموز السويفت (${swift}) ونظام المقاصة البنكية.`,
        `يعرض هذا الدليل النظرة المرجعية لخدمات ${arName}، شروط الاستفادة من المراجع والبيانات المالية المعتمدة، وخطوات التعامل مع التنظيمات المصرفية السارية في الجزائر.`
      ],
      fr: [
        `La ${frName} (${acronym}), basée à ${hqFr}, exerce le rôle d\'autorité monétaire nationale et de régulateur du système bancaire algérien. Elle assure l\'émission fiduciaire, la gestion des réserves de change, la supervision prudentielle des banques agréées ainsi que la publication des cours de change officiels.`,
        `Son portail institutionnel met à la disposition des entreprises, économistes et citoyens les règlements bancaires, les instructions relatives au commerce extérieur, les statistiques financières périodiques et les références de compensation interbancaire (SWIFT : ${swift}).`,
        `Retrouvez dans ce guide l\'essentiel des attributions de l\'institution, les modalités d\'accès à sa documentation réglementaire et les points de repère pratiques pour vos opérations financières.`
      ],
    },
    islamic: {
      ar: [
        `يعد ${arName} (${acronym})، انطلاقا من مقره في ${hqAr}، من المؤسسات الرائدة في مجال الصيرفة الإسلامية المطابقة لأحكام الشريعة في السوق الجزائرية. يوفر البنك باقة شاملة من الحسابات الجارية وحسابات التوفير الاستثمارية، إضافة إلى صيغ التمويل المتوافقة شرعيا مثل المرابحة لاقتناء السيارات والمساكن والمضاربة والمشاركة.`,
        `استثمر البنك بقوة في الرقمنة المصرفية عبر تطبيقات الهاتف ومنصة الدفع الإلكتروني (${bank.quickSummary.digitalBanking.ar})، مما يمنح الزبائن مرونة عالية لمتابعة أرصدتهم، طلب البطاقات البنكية CIB، تسديد الفواتير، وإجراء التحويلات اللحظية داخل الوطن بكل أمان.`,
        `يجمع هذا الدليل خطوات فتح حساب في ${arName}، الوثائق المطلوبة للأفراد والمؤسسات، أهم مزايا الشبابيك والمنتجات الإسلامية، وأجوبة عن أبرز الإشكالات الرقمية الشائعة.`
      ],
      fr: [
        `La banque ${frName} (${acronym}), dont le siège se trouve à ${hqFr}, figure parmi les établissements de référence de la finance islamique en Algérie. Ses offres certifiées conformes aux principes de la Charia couvrent les comptes courants et d\'épargne participatifs ainsi que les financements Mourabaha immobilier, automobile ou d\'équipement professionnel.`,
        `Grâce à ses solutions digitales (${bank.quickSummary.digitalBanking.fr}), les clients gèrent leurs opérations au quotidien sans déplacement en agence : consultation de solde, commande de carte CIB, virements interbancaires et paiement électronique.`,
        `Ce guide détaillé récapitule les justificatifs exigés pour ouvrir un compte chez ${frName}, les étapes d\'activation des services numériques et les conseils utiles pour vos démarches en agence.`
      ],
    },
    public: {
      ar: [
        `ينتمي ${arName} (${acronym})، المتمركز في ${hqAr}، إلى شبكة البنوك العمومية الوطنية التي تمول المشاريع التنموية وتقدم خدمات مصرفية واسعة للأفراد، المهنيين، والمستثمرين عبر مختلف ولايات الجزائر. يرتبط البنك بأنظمة التحويل الدولية عبر رمز السويفت ${swift}.`,
        `شهدت خدمات ${arName} تحولا رقميا ملموسا من خلال تعميم بوابة الصيرفة الإلكترونية E-Banking (${bank.quickSummary.digitalBanking.ar})، وإتاحة حسابات التوفير بالعملة الوطنية والعملة الصعبة، فضلا عن مواكبة نافذة الصيرفة الإسلامية (${bank.quickSummary.islamicWindow.ar}) لتلبية رغبات مختلف شرائح المجتمع.`,
        `نضع بين يديك في هذا الدليل قائمة المستندات اللازمة لفتح حساب بنكي جديد، مسار طلب بطاقة CIB والخدمات الإلكترونية، وحلولا فورية للتعامل مع تجميد الحساب أو بطاقة الدفع.`
      ],
      fr: [
        `La banque ${frName} (${acronym}), implantée à ${hqFr}, appartient au réseau des banques publiques nationales qui accompagnent les particuliers, artisans, PME et grands projets en Algérie. Connectée aux standards internationaux sous le code SWIFT ${swift}, elle dispose d\'un large maillage territorial d\'agences.`,
        `L\'établissement a accéléré sa transformation digitale avec le déploiement de ses services E-Banking (${bank.quickSummary.digitalBanking.fr}), l\'émission généralisée de cartes CIB et le développement de guichets dédiés à la finance islamique (${bank.quickSummary.islamicWindow.fr}).`,
        `Vous trouverez ci-dessous le dossier type pour ouvrir un compte courant ou épargne, la procédure d\'adhésion aux services en ligne et les solutions en cas de blocage de carte ou de code confidentiel.`
      ],
    },
    private: {
      ar: [
        `يعمل ${arName} (${acronym}) من مقره في ${hqAr} كبنك تجاري خاص مرخص من طرف بنك الجزائر، ويحمل رمز السويفت الدولي ${swift}. يتميز البنك بخدمات مصرفية موجهة للأفراد ذوي الدخل المنتظم وللشركات ذات النشاط التجاري والاستيراد والتصدير مع سرعة في المعالجة الرقمية.`,
        `تركز المنصة الرقمية لـ ${arName} (${bank.quickSummary.digitalBanking.ar}) على تمكين الزبائن من متابعة الحركات البنكية الفورية، إدارة الاعتمادات المستندية والتوطين البنكي إلكترونيا، وطلب بطاقات الدفع المحلية والدولية بمرونة عالية.`,
        `يلخص لك هذا الدليل شروط الانضمام إلى زبائن ${arName}، الأوراق المطلوبة لفتح الحسابات بالعملة المحلية أو الصعبة، وخطوات تفعيل التطبيق المصرفي على هاتفك بأمان.`
      ],
      fr: [
        `La banque ${frName} (${acronym}), basée à ${hqFr}, est une banque commerciale privée agréée par la Banque d\'Algérie et identifiée par le code SWIFT ${swift}. Elle propose aux particuliers, cadres et entreprises des solutions agiles de gestion de trésorerie, de financement et d\'opérations de commerce extérieur.`,
        `Son dispositif digital (${bank.quickSummary.digitalBanking.fr}) privilégie la réactivité : consultation en temps réel des mouvements, gestion sécurisée des virements, suivi de domiciliation bancaire et pilotage des cartes CIB ou internationales.`,
        `Consultez ci-après les conditions d\'ouverture de compte auprès de ${frName}, les étapes pratiques d\'activation du portail e-banking et les réponses aux incidents fréquents.`
      ],
    },
  };

  const defaultChecklist = {
      ar: [
        'بطاقة التعريف الوطنية البيومترية أو جواز سفر ساري المفعول لإثبات الهوية.',
        'شهادة إقامة حديثة صادرة عن البلدية أو فاتورة كهرباء وغاز باسم المعني (أقل من 3 أشهر).',
        'شهادة عمل أو كشف راتب حديث للموظفين، أو نسخة من السجل التجاري والبطاقة الجبائية للتجار والمهنيين.',
        'مبلغ الإيداع الأولي المحدد حسب نوع الحساب (جاري، توفير، أو حساب بالعملة الصعبة).',
        'تقديم رقم تعريف جبائي NIF وتفويض التوقيع بالنسبة لحسابات الشركات والمؤسسات الاقتصادية.',
      ],
      fr: [
        'Pièce d\'identité officielle en cours de validité (Carte Nationale Biométrique ou passeport).',
        'Certificat de résidence récent ou justificatif de domicile de moins de trois mois.',
        'Attestation de travail et fiche de paie pour les salariés, ou registre de commerce et carte fiscale pour les professionnels.',
        'Dépôt initial minimal conforme aux conditions tarifaires du compte choisi (courant, épargne ou devises).',
        'Statuts juridiques, numéro d\'identification fiscale NIF et spécimen de signature pour les comptes d\'entreprise.',
      ],
  };

  const defaultSteps: RichGuideContent['stepByStepGuide'] = [
      {
        title: {
          ar: `1. التحضير المسبق للملف والتواصل عبر موقع ${acronym}`,
          fr: `1. Préparer le dossier via le site officiel ${acronym}`,
        },
        detail: {
          ar: `راجع باقة الحسابات المتوفرة على الموقع الرسمي لـ ${arName} (${bank.website}) واحجز موعدا في أقرب وكالة بنكية لولايتك عند توفر خدمة الحجز الرقمي.`,
          fr: `Consultez les offres de comptes sur le site officiel de ${frName} (${bank.website}) et prenez rendez-vous en agence si la préinscription en ligne est proposée.`,
        },
      },
      {
        title: {
          ar: '2. إيداع الوثائق وتوقيع اتفاقية فتح الحساب بالوكالة',
          fr: '2. Déposer les justificatifs et signer la convention en agence',
        },
        detail: {
          ar: 'تقدم إلى المكلف بالزبائن بالوثائق الأصلية والنسخ، واطلب تفعيل باقة الصيرفة الرقمية E-Banking وإصدار بطاقة الدفع البنكية CIB في نفس الطلب.',
          fr: 'Présentez les originaux au chargé de clientèle, signez la convention d\'ouverture et demandez simultanément la souscription au service E-Banking et à la carte CIB.',
        },
      },
      {
        title: {
          ar: '3. استلام رقم التعريف البنكي RIB وتفعيل الصيرفة الإلكترونية',
          fr: '3. Récupérer votre RIB et activer votre accès E-Banking',
        },
        detail: {
          ar: 'فور تأكيد الحساب، ستحصل على كشف التعريف البنكي RIB المكون من 20 رقما وبيانات الدخول الأولية إلى بوابة الزبون أو التطبيق المحمول.',
          fr: 'Dès la validation du compte, vous recevez votre Relevé d\'Identité Bancaire (RIB à 20 chiffres) ainsi que vos identifiants d\'activation digitale.',
        },
      },
      {
        title: {
          ar: '4. تفعيل الدفع عبر الإنترنت على البطاقة البنكية CIB',
          fr: '4. Activer le paiement en ligne sur la carte CIB',
        },
        detail: {
          ar: 'بعد استلام بطاقة CIB والرقم السري PIN، تأكد من تفعيل خدمة الدفع الإلكتروني e-Paiement لربط البطاقة برقم هاتفك واستلام رمز التحقق 3D Secure أثناء التسوق أو دفع الفواتير.',
          fr: 'Une fois votre carte CIB et son code PIN remis, activez l\'option e-paiement liée à votre numéro mobile afin de recevoir les codes 3D Secure pour vos achats en ligne.',
        },
      },
  ];

  const defaultTroubleshooting: RichGuideContent['troubleshooting'] = [
      {
        issue: {
          ar: 'تعذر إتمام الدفع عبر الإنترنت برفض رمز 3D Secure',
          fr: 'Échec de paiement en ligne ou absence du SMS 3D Secure',
        },
        solution: {
          ar: 'تحقق من تفعيل خدمة الدفع الإلكتروني على بطاقتك عبر الوكالة، وتأكد من وجود رصيد كاف وعدم تجاوز السقف الأسبوعي المسموح به.',
          fr: 'Vérifiez en agence que l\'option e-paiement est activée sur votre numéro mobile actuel et contrôlez le solde disponible ainsi que les plafonds hebdomadaires.',
        },
      },
      {
        issue: {
          ar: 'حظر الدخول إلى تطبيق E-Banking بعد عدة محاولات خاطئة',
          fr: 'Blocage de l\'accès E-Banking après erreurs de mot de passe',
        },
        solution: {
          ar: 'لا تكرر إدخال كلمة المرور؛ اتصل بمصلحة الزبائن في ' + arName + (bank.contactPhone ? ` (${bank.contactPhone})` : '') + ' لإعادة ضبط الحساب بأمان.',
          fr: 'Interrompez les tentatives et contactez le support client de ' + frName + (bank.contactPhone ? ` (${bank.contactPhone})` : '') + ' pour débloquer votre identifiant.',
        },
      },
      {
        issue: {
          ar: 'تأخر استلام تحويل بنكي محلي أو دولي',
          fr: 'Retard de réception d\'un virement bancaire national ou international',
        },
        solution: {
          ar: 'تأكد من صحة الأرقام العشرين في رقم التعريف البنكي RIB ومن إدراج رمز السويفت ' + swift + ' بدقة في حالة التحويلات الدولية الواردة.',
          fr: 'Contrôlez l\'exactitude des 20 chiffres du RIB communiqué à l\'émetteur et, pour l\'international, la saisie correcte du code SWIFT ' + swift + '.',
        },
      },
  ];

  const defaultExtraFaqs: RichGuideContent['extraFaqs'] = [
      {
        question: {
          ar: `كم تستغرق مدة استخراج بطاقة CIB الجديدة لدى ${arName}؟`,
          fr: `Quel est le délai moyen de délivrance d\'une carte CIB chez ${frName} ?`,
        },
        answer: {
          ar: 'تتراوح مدة إصدار بطاقة CIB غالبا بين أسبوعين وأربعة أسابيع من تاريخ إيداع الطلب في الوكالة، مع إشعارك عبر رسالة نصية فور جاهزيتها للاستلام.',
          fr: 'La fabrication et la mise à disposition d\'une carte CIB prennent généralement entre 15 et 30 jours après dépôt de la demande en agence, avec notification dès réception.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تحويل الأموال من حسابي البنكي نحو بريدي موب أو حسابات بنوك أخرى؟',
          fr: 'Puis-je effectuer des virements vers d\'autres banques ou vers un compte CCP ?',
        },
        answer: {
          ar: 'نعم، تتيح شبكة المقاصة الإلكترونية والنظام المصرفي في الجزائر إجراء تحويلات بين حسابات مختلف البنوك وحسابات بريد الجزائر CCP باستخدام رقم RIB وRIP بدقة.',
          fr: 'Oui, la télécompensation nationale permet les virements interbancaires et vers les comptes CCP Algérie Poste dès lors que vous disposez du RIB/RIP valide du bénéficiaire.',
        },
      },
      {
        question: {
          ar: 'ما هي الوثيقة اللازمة لتلقي التحويلات المالية بالعملة الصعبة أو الشيكات؟',
          fr: 'Comment justifier la réception d\'un virement ou l\'ouverture d\'un compte devises ?',
        },
        answer: {
          ar: 'يجب فتح حساب عملة صعبة مخصص (يورو أو دولار) بالبطاقة البيومترية في الوكالة، وقد يطلب البنك مبررا لمصدر الأموال طبقا لقواعد الرقابة والامتثال المالي.',
          fr: 'Un compte devises dédié doit être ouvert en agence sur présentation de la carte biométrique ; des justificatifs d\'origine des fonds peuvent être exigés conformément à la réglementation de change.',
        },
      },
  ];

  return {
    intro: override?.intro || typeIntros[bank.type],
    eligibilityChecklist: override?.eligibilityChecklist || defaultChecklist,
    stepByStepGuide: override?.stepByStepGuide || defaultSteps,
    troubleshooting: override?.troubleshooting || defaultTroubleshooting,
    extraFaqs: override?.extraFaqs || defaultExtraFaqs,
  };
}

export function getInsuranceRichGuide(ins: InsuranceItem): RichGuideContent {
  const arName = ins.name.ar;
  const frName = ins.name.fr;
  const acronym = ins.acronym;
  const hqAr = ins.headquarters.ar;
  const hqFr = ins.headquarters.fr;
  const emergency = ins.emergencyNumber || 'الرقم الأخضر للشركة';

  const insuranceOverrides: Record<string, Partial<RichGuideContent>> = {
    ...batch1InsuranceGuides,
    ...batch2InsuranceGuides,
  };
  const override = insuranceOverrides[ins.slug];

  const typeIntros: Record<InsuranceItem['type'], { ar: string[]; fr: string[] }> = {
    takaful: {
      ar: [
        `تمثل شركة ${arName} (${acronym})، انطلاقا من مقرها في ${hqAr}، نموذجا وطنيا في قطاع التأمين التكافلي القائم على التعاون وتقاسم المخاطر وفق الضوابط الشرعية وهيئة الرقابة المختصة. تغطي منتجات الشركة تأمين السيارات، السكنات، الحوادث الشخصية، والتكافل العائلي.`,
        `يتيح التوجه الرقمي لدى ${arName} للمشتركين احتساب أقساط الاشتراك التقديرية، طلب العروض عن بعد، والتصريح بالحوادث عبر الفضاء الإلكتروني (${ins.quickSummary.eDeclaration.ar})، مع سرعة في دراسة ملفات التعويض.`,
        `نوضح في هذا الدليل كافة الوثائق الواجب توفيرها عند الاكتتاب في عقود التأمين التكافلي، خطوات التبليغ في حالة وقوع حادث، وأهم النقاط لضمان قبول التعويض دون عراقيل.`
      ],
      fr: [
        `La compagnie ${frName} (${acronym}), établie à ${hqFr}, propose des solutions d\'assurance Takaful fondées sur la solidarité mutualiste et validées sur le plan éthique et réglementaire en Algérie. Elle couvre l\'automobile, la multirisque habitation, les voyages ainsi que le Takaful familial.`,
        `Son espace numérique (${ins.quickSummary.eDeclaration.fr}) simplifie l\'estimation des cotisations, la souscription de contrats et la déclaration préalable des sinistres, améliorant la rapidité d\'indemnisation des adhérents.`,
        `Retrouvez ci-dessous la liste des documents de souscription et d\'indemnisation, les démarches détaillées en cas d\'accident et des conseils pratiques pour protéger vos droits.`
      ],
    },
    public: {
      ar: [
        `تعد ${arName} (${acronym})، المتمركزة في ${hqAr}، من كبريات شركات التأمين العمومية في الجزائر وتتمتع بانتشار واسع عبر وكالاتها في جميع الولايات. تشمل تغطياتها التأمين الإجباري والشامل للمركبات، التأمين الإلزامي ضد الكوارث الطبيعية CAT-NAT، وحماية المشاريع الصناعية والسفر.`,
        `بفضل منصتها الرقمية (${ins.quickSummary.eDeclaration.ar})، أصبح بإمكان المؤمن لهم حجز مواعيد الخبرة، تتبع ملفات التعويض، والقيام بمحاكاة تسعيرة تأمين السيارات، إضافة إلى التفاعل السريع مع خدمة النجدة والمساعدة عبر الرقم ${emergency}.`,
        `يتضمن هذا الدليل كل ما تحتاج معرفته لاختيار الصيغة التأمينية الملائمة لسيارتك أو سكنك لدى ${arName}، مع شرح خطوات الإبلاغ النظامي عن الحوادث خلال الآجال القانونية.`
      ],
      fr: [
        `La compagnie publique ${frName} (${acronym}), basée à ${hqFr}, occupe une place historique sur le marché algérien des assurances avec un vaste réseau d\'agences sur l\'ensemble du territoire. Elle assure les véhicules (RC et Tous Risques), les biens immobiliers (CAT-NAT), les voyageurs et les risques industriels.`,
        `Via son portail digital (${ins.quickSummary.eDeclaration.fr}), les assurés accèdent à la tarification indicative, à la pré-déclaration de sinistres et au suivi d\'expertise, tout en disposant d\'une assistance téléphonique dédiée (${ins.emergencyNumber || 'service client'}).`,
        `Ce guide pratique résume les documents nécessaires à l\'établissement de votre police d\'assurance, la marche à suivre en cas de sinistre automobile et les délais légaux à respecter impérativement.`
      ],
    },
    private: {
      ar: [
        `تنشط شركة ${arName} (${acronym})، ومقرها الرئيسي في ${hqAr}، كشركة تأمين خاصة معتمدة من وزارة المالية وتقدم حلولا مرنة ومبتكرة للأفراد والمهنيين والمؤسسات في الجزائر. تشمل عروضها التأمين على السيارات، التأمين الصحي التكميلي، تأمين السفر، وتغطيات السكن والأعمال.`,
        `تركز الشركة على تبسيط تجربة الزبون من خلال الخدمات الإلكترونية (${ins.quickSummary.eDeclaration.ar}) وتسريع آجال تسوية الحوادث الخفيفة والمادية البسيطة، إلى جانب توفر خدمة النجدة على مدار الساعة (${emergency}).`,
        `تجد في السطور الموالية إرشادات عملية حول شروط الاكتتاب والتجديد في ${arName}، المستندات المطلوبة لملفات الحوادث، وطرق متابعة التعويض حتى استلام الصك أو التحويل البنكي.`
      ],
      fr: [
        `La compagnie ${frName} (${acronym}), implantée à ${hqFr}, opère en tant qu\'assureur privé agréé en Algérie, offrant des contrats personnalisés aux automobilistes, voyageurs, ménages et entreprises. Son catalogue inclut l\'assurance auto, l\'assistance voyage, la multirisque professionnelle et la prévoyance.`,
        `Grâce à ses téléservices (${ins.quickSummary.eDeclaration.fr}) et à son centre d\'assistance (${ins.emergencyNumber || 'ligne dédiée'}), les assurés optimisent le traitement des devis et l\'instruction des sinistres matériels.`,
        `Découvrez ci-après les pièces à fournir pour assurer votre véhicule ou logement, les étapes exactes après un sinistre et les solutions en cas de contestation de rapport d\'expertise.`
      ],
    },
  };

  const defaultEligibility = {
      ar: [
        'البطاقة الرمادية للمركبة (أو وصل إيداع ساري المفعول) ورخصة السياقة بالنسبة لتأمين السيارات.',
        'محضر المراقبة التقنية للمركبات ساري الصلاحية للمركبات الخاضعة للفحص الدوري.',
        'بطاقة التعريف الوطنية البيومترية أو جواز السفر عند طلب تأمين السفر الخارجي.',
        'عقد الملكية أو عقد الإيجار والبطاقة التقنية للبناية عند اكتتاب تأمين الكوارث الطبيعية CAT-NAT.',
        'وثيقة المعاينة الودية للسيارات (Constat Amiable) موقعة من الطرفين في حالة وقوع حادث مرور.',
      ],
      fr: [
        'Carte grise du véhicule (ou récépissé valide) et permis de conduire pour l\'assurance automobile.',
        'Procès-verbal de contrôle technique en cours de validité pour les véhicules concernés.',
        'Carte d\'identité biométrique ou passeport en cours de validité pour les polices d\'assurance voyage.',
        'Acte de propriété ou bail de location pour l\'assurance obligatoire contre les catastrophes naturelles (CAT-NAT).',
        'Constat amiable dûment rempli et signé (ou procès-verbal de gendarmerie/police) en cas de sinistre.',
      ],
  };

  const defaultSteps: RichGuideContent['stepByStepGuide'] = [
      {
        title: {
          ar: `1. طلب تسعيرة ومقارنة باقات الحماية عبر ${acronym}`,
          fr: `1. Estimer votre prime et comparer les garanties ${acronym}`,
        },
        detail: {
          ar: `ادخل إلى الموقع الرسمي لـ ${arName} (${ins.website}) للاطلاع على تغطيات المسؤولية المدنية، السرقة، الحريق، وجميع الأخطار، وتأكد من مطابقة العرض لاحتياجاتك الحقيقية.`,
          fr: `Consultez le portail officiel de ${frName} (${ins.website}) pour comparer la Responsabilité Civile obligatoire et les garanties complémentaires (Vol, Incendie, Bris de glace, Tous Risques).`,
        },
      },
      {
        title: {
          ar: '2. الاكتتاب واستلام شهادة التأمين وإلصاقها على المركبة',
          fr: '2. Souscrire la police et récupérer l\'attestation d\'assurance',
        },
        detail: {
          ar: 'بعد تسديد قسط التأمين (نقدا أو إلكترونيا عند توفر الخدمة)، تحقق من دقة رقم الهيكل ولوحة الترقيم في العقد وفي شهادة التأمين الزجاجية.',
          fr: 'Après règlement de la prime, vérifiez minutieusement le numéro de châssis, l\'immatriculation et la durée de validité inscrits sur l\'attestation et le contrat.',
        },
      },
      {
        title: {
          ar: '3. التصريح الفوري بالحادث خلال الأجل القانوني (7 أيام)',
          fr: '3. Déclarer tout sinistre dans le délai légal de 7 jours',
        },
        detail: {
          ar: 'عند وقوع حادث مرور أو ضرر، صرح به لدى وكالة ' + arName + ' أو عبر منصة التصريح الإلكتروني خلال 7 أيام كحد أقصى (أو يومين في حالة السرقة).',
          fr: 'En cas d\'accident matériel ou sinistre, déclarez-le auprès de votre agence ' + frName + ' ou via l\'espace en ligne sous 7 jours ouvrables (48 heures en cas de vol).',
        },
      },
      {
        title: {
          ar: '4. إجراء الخبرة التقنية ومتابعة تسوية التعويض',
          fr: '4. Effectuer l\'expertise et suivre l\'indemnisation',
        },
        detail: {
          ar: 'تقدم للمعاينة لدى الخبير المعتمد من الشركة مع إحضار السيارة وملف الحادث، ثم تابع جاهزية صك التعويض أو التحويل المالي بعد إصلاح الأضرار.',
          fr: 'Présentez le véhicule à l\'expert mandaté par la compagnie avec le dossier complet, puis suivez l\'émission du chèque ou virement d\'indemnisation après validation du rapport.',
        },
      },
  ];

  const defaultTroubleshooting: RichGuideContent['troubleshooting'] = [
      {
        issue: {
          ar: 'الطرف الآخر يرفض توقيع المعاينة الودية (Constat) بعد حادث مرور',
          fr: 'Refus du tiers de signer le constat amiable sur place',
        },
        solution: {
          ar: 'لا تغادر مكان الحادث واطلب تدخل الشرطة أو الدرك الوطني لتحرير محضر معاينة رسمي يثبت المسؤولية ويحفظ حقك في التعويض.',
          fr: 'Maintenez le véhicule en sécurité et sollicitez les services de police ou de gendarmerie pour l\'établissement d\'un procès-verbal officiel indispensable au recours.',
        },
      },
      {
        issue: {
          ar: 'عدم كفاية مبلغ التقدير المبدئي للخبير مقارنة بفاتورة التصليح',
          fr: 'Écart entre l\'estimation initiale de l\'expert et le coût réel des réparations',
        },
        solution: {
          ar: 'يمكنك تقديم طلب إعادة خبرة (Contre-expertise) قبل الشروع في الإصلاح النهائي مع إرفاق فواتير قطع الغيار واليد العاملة المعتمدة.',
          fr: 'Déposez une demande de contre-expertise ou de complément d\'expertise avant achèvement des travaux en joignant les devis et factures conformes.',
        },
      },
      {
        issue: {
          ar: 'ضياع شهادة التأمين الأصلية أثناء سريان العقد',
          fr: 'Perte de l\'attestation d\'assurance en cours de validité',
        },
        solution: {
          ar: 'تقدم إلى نفس الوكالة المؤمنة مصحوبا بالتصريح بالضياع والبطاقة الرمادية لاستخراج نسخة طبق الأصل في نفس اليوم.',
          fr: 'Présentez-vous à votre agence émettrice avec une déclaration de perte et la carte grise pour obtenir immédiatement un duplicata de votre attestation.',
        },
      },
  ];

  const defaultExtraFaqs: RichGuideContent['extraFaqs'] = [
      {
        question: {
          ar: `ما هي المدة القانونية القصوى للتصريح بحادث لدى ${arName}؟`,
          fr: `Quel est le délai légal de déclaration d\'un sinistre chez ${frName} ?`,
        },
        answer: {
          ar: 'يحدد القانون الجزائري مهلة 7 أيام عمل للتصريح بحوادث المرور والأضرار المادية، ومهلة لا تتعدى 48 ساعة في حالات سرقة المركبات.',
          fr: 'Le Code des Assurances algérien fixe un délai maximal de 7 jours ouvrables pour les sinistres matériels courants et de 48 heures en cas de vol.',
        },
      },
      {
        question: {
          ar: 'هل التأمين ضد الكوارث الطبيعية CAT-NAT إجباري في الجزائر؟',
          fr: 'L\'assurance CAT-NAT contre les catastrophes naturelles est-elle obligatoire ?',
        },
        answer: {
          ar: 'نعم، يلزم القانون كل مالك لعقار سكني أو تجاري أو صناعي باكتتاب تأمين CAT-NAT سنويا لحماية الممتلكات وضمان التعويض السريع عند الزلازل والفيضانات.',
          fr: 'Oui, tout propriétaire d\'un bien immobilier construit (habitation, commerce, industrie) est légalement tenu de souscrire une couverture CAT-NAT annuelle.',
        },
      },
      {
        question: {
          ar: 'هل يشمل التأمين السياحي الدولي شروط الحصول على تأشيرة شنغن؟',
          fr: 'L\'assurance voyage couvre-t-elle les exigences des visas Schengen ?',
        },
        answer: {
          ar: 'نعم، توفر شركات التأمين في الجزائر عقود تأمين سفر دولية مطابقة لمعايير السفارات (تغطية طبية لا تقل عن 30 ألف يورو وإعادة الترحيل الصحي).',
          fr: 'Oui, les polices d\'assurance voyage délivrées respectent les critères consulaires internationaux, notamment la couverture médicale minimale de 30 000 EUR et le rapatriement.',
        },
      },
  ];

  return {
    intro: override?.intro || typeIntros[ins.type],
    eligibilityChecklist: override?.eligibilityChecklist || defaultEligibility,
    stepByStepGuide: override?.stepByStepGuide || defaultSteps,
    troubleshooting: override?.troubleshooting || defaultTroubleshooting,
    extraFaqs: override?.extraFaqs || defaultExtraFaqs,
  };
}
