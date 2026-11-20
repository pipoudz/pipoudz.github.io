import { SectorItem } from '../types';

export const sectorsPart1: SectorItem[] = [
  {
    "id": "aadl",
    "slug": "aadl",
    "category": "housing",
    "name": {
      "ar": "الوكالة الوطنية لتحسين السكن وتطويره (عدل)",
      "fr": "Agence Nationale de l'Amélioration du Logement (AADL)"
    },
    "acronym": "AADL",
    "ministry": {
      "ar": "وزارة السكن والعمران والمدينة",
      "fr": "Ministère de l'Habitat"
    },
    "description": {
      "ar": "خدمات وكالة عدل AADL الرقمية في الجزائر، تسجيل والدخول إلى منصة عدل 3، دفع فواتير الكراء إلكترونيا، متابعة الملفات السكنية، وخدمة الزبائن والتطبيقات الرسمية",
      "fr": "Portail détaillé des services publics pour Agence Nationale de l'Amélioration du Logement (AADL) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.aadl.com.dz/",
    "portalUrl": "https://aadl.dz/relogin",
    "iconName": "Building2",
    "isPopular": true,
    "services": [
      {
        "id": "aadl-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.aadl.com.dz/",
        "isOnline": true
      },
      {
        "id": "aadl-srv-2",
        "title": {
          "ar": "الدخول لمنصة وكالة عدل 3 تسجيل الدخول لمنصة وكالة عدل 3",
          "fr": "Connexion à la Plateforme AADL 3"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الدخول لمنصة وكالة عدل 3 تسجيل الدخول لمنصة وكالة عدل 3",
          "fr": "Accès direct au portail officiel : Connexion à la Plateforme AADL 3"
        },
        "url": "https://aadl.dz/relogin",
        "isOnline": true
      },
      {
        "id": "aadl-srv-3",
        "title": {
          "ar": "فاتورة الكراء تسديد الفاتورة الشهرية للسكن",
          "fr": "Paiement du Loyer Mensuel du Logement"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فاتورة الكراء تسديد الفاتورة الشهرية للسكن",
          "fr": "Accès direct au portail officiel : Paiement du Loyer Mensuel du Logement"
        },
        "url": "https://www.aadlgestimmo.dz/epayement/View/index.php",
        "isOnline": true
      },
      {
        "id": "aadl-srv-4",
        "title": {
          "ar": "تطبيق AADL تطبيق AADL Mobile",
          "fr": "Application Mobile AADL"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق AADL تطبيق AADL Mobile",
          "fr": "Accès direct au portail officiel : Application Mobile AADL"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.aadl.mobile",
        "isOnline": true
      },
      {
        "id": "aadl-srv-5",
        "title": {
          "ar": "تطبيق بريدي موب تحميل تطبيق بريدي موب الجزائر",
          "fr": "Télécharger l'Application BaridiMob"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق بريدي موب تحميل تطبيق بريدي موب الجزائر",
          "fr": "Accès direct au portail officiel : Télécharger l'Application BaridiMob"
        },
        "url": "https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ الوكالة الوطنية لتحسين السكن وتطويره (عدل)؟",
          "fr": "Comment accéder aux services officiels de Agence Nationale de l'Amélioration du Logement (AADL) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ الوكالة الوطنية لتحسين السكن وتطويره (عدل) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Agence Nationale de l'Amélioration du Logement (AADL) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "aapi",
    "slug": "aapi",
    "category": "finance_economy",
    "name": {
      "ar": "الوكالة الجزائرية لترقية الاستثمار (AAPI)",
      "fr": "Agence Algérienne de Promotion de l'Investissement (AAPI)"
    },
    "acronym": "AAPI",
    "ministry": {
      "ar": "الوزارة الأولى — الاستثمار",
      "fr": "Premier Ministère — Investissement"
    },
    "description": {
      "ar": "الوكالة الجزائرية لترقية الاستثمار AAPI، توفر خدمات مرافقة المستثمرين، إنشاء المشاريع والاطلاع على الفرص الاستثمارية والإجراءات القانونية",
      "fr": "Portail détaillé des services publics pour Agence Algérienne de Promotion de l'Investissement (AAPI) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://aapi.dz/",
    "portalUrl": "https://services.aapi.dz/login?Lang=AR",
    "iconName": "TrendingUp",
    "isPopular": true,
    "services": [
      {
        "id": "aapi-srv-1",
        "title": {
          "ar": "الموقع الرسمي للوكالة الجزائرية لترقية الاستثمار",
          "fr": "Site Officiel de l'AAPI"
        },
        "description": {
          "ar": "الولوج المباشر إلى بوابة الوكالة الجزائرية لترقية الاستثمار AAPI للاطلاع على القوانين والامتيازات الاستثمارية.",
          "fr": "Accès direct au portail officiel de l'AAPI : cadre juridique, avantages et opportunités d'investissement."
        },
        "url": "https://aapi.dz/",
        "isOnline": true
      },
      {
        "id": "aapi-srv-2",
        "title": {
          "ar": "المنصة الرقمية للمستثمر (الدخول)",
          "fr": "Connexion à la Plateforme Numérique de l'Investisseur"
        },
        "description": {
          "ar": "فضاء إلكتروني لإيداع ومتابعة المشاريع الاستثمارية والحصول على شهادات التسجيل عن بعد.",
          "fr": "Espace sécurisé pour déposer et suivre vos dossiers d'investissement à distance."
        },
        "url": "https://services.aapi.dz/login?Lang=AR",
        "isOnline": true
      },
      {
        "id": "aapi-srv-3",
        "title": {
          "ar": "بوابة المستثمر والتسجيل الجديد",
          "fr": "Inscription au Portail Investisseur (Invest DZ)"
        },
        "description": {
          "ar": "إنشاء حساب مستثمر جديد عبر البوابة الوطنية للاستثمار وتأكيد الهوية الرقمية.",
          "fr": "Création d'un compte investisseur sur le portail national unifié de l'investissement."
        },
        "url": "https://invest.gov.dz/",
        "isOnline": true
      },
      {
        "id": "aapi-srv-4",
        "title": {
          "ar": "حامل مشروع حامل مشروع",
          "fr": "Espace Porteur de Projet"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: حامل مشروع حامل مشروع",
          "fr": "Accès direct au portail officiel : Espace Porteur de Projet"
        },
        "url": "https://services.aapi.dz/index?service=porteur",
        "isOnline": true
      },
      {
        "id": "aapi-srv-5",
        "title": {
          "ar": "التبليغ عن مخالفة التبليغ عن مخالفة",
          "fr": "Signaler une Infraction"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: التبليغ عن مخالفة التبليغ عن مخالفة",
          "fr": "Accès direct au portail officiel : Signaler une Infraction"
        },
        "url": "https://services.aapi.dz/index?service=infraction",
        "isOnline": true
      },
      {
        "id": "aapi-srv-6",
        "title": {
          "ar": "طرح إنشغال طرح إنشغالات",
          "fr": "Soumettre une Préoccupation"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طرح إنشغال طرح إنشغالات",
          "fr": "Accès direct au portail officiel : Soumettre une Préoccupation"
        },
        "url": "https://services.aapi.dz/index?service=requete",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ الوكالة الجزائرية لترقية الاستثمار (AAPI)؟",
          "fr": "Comment accéder aux services officiels de Agence Algérienne de Promotion de l'Investissement (AAPI) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ الوكالة الجزائرية لترقية الاستثمار (AAPI) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Agence Algérienne de Promotion de l'Investissement (AAPI) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "ade",
    "slug": "ade",
    "category": "energy_water",
    "name": {
      "ar": "الجزائرية للمياه (ADE)",
      "fr": "Algérienne des Eaux (ADE)"
    },
    "acronym": "ADE",
    "ministry": {
      "ar": "وزارة الري والموارد المائية",
      "fr": "Ministère de l'Hydraulique"
    },
    "description": {
      "ar": "خدمات الجزائرية للمياه ADE، تشمل دفع فاتورة المياه إلكترونيا وطلبات الاشتراك والتوصيل ومتابعة الاستهلاك والتبليغ عن الأعطال والانقطاعات",
      "fr": "Portail détaillé des services publics pour Algérienne des Eaux (ADE) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.ade.dz/ar",
    "portalUrl": "https://play.google.com/store/apps/details?id=com.ade.adese&hl=ar",
    "iconName": "Droplets",
    "isPopular": true,
    "services": [
      {
        "id": "ade-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.ade.dz/ar",
        "isOnline": true
      },
      {
        "id": "ade-srv-2",
        "title": {
          "ar": "حمل الآن",
          "fr": "Télécharger l'Application"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: حمل الآن",
          "fr": "Accès direct au portail officiel : Télécharger l'Application"
        },
        "url": "https://play.google.com/store/apps/details?id=com.ade.adese&hl=ar",
        "isOnline": true
      },
      {
        "id": "ade-srv-3",
        "title": {
          "ar": "دفع فاتورة المياه دفع فاتورة المياه",
          "fr": "Paiement de la Facture d'Eau"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: دفع فاتورة المياه دفع فاتورة المياه",
          "fr": "Accès direct au portail officiel : Paiement de la Facture d'Eau"
        },
        "url": "https://www.ade.dz/e-paiement/",
        "isOnline": true
      },
      {
        "id": "ade-srv-4",
        "title": {
          "ar": "أحسب فاتورتك محاكاة الفاتورة عبر الانترنات",
          "fr": "Simulateur de Facture d'Eau en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أحسب فاتورتك محاكاة الفاتورة عبر الانترنات",
          "fr": "Accès direct au portail officiel : Simulateur de Facture d'Eau en Ligne"
        },
        "url": "https://www.ade.dz/simuler-votre-facture",
        "isOnline": true
      },
      {
        "id": "ade-srv-5",
        "title": {
          "ar": "إحصائيات إحصائيات الجزائرية للمياه",
          "fr": "Statistiques de l'Algérienne des Eaux (ADE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إحصائيات إحصائيات الجزائرية للمياه",
          "fr": "Accès direct au portail officiel : Statistiques de l'Algérienne des Eaux (ADE)"
        },
        "url": "https://www.ade.dz/leau-dans-ma-wilaya",
        "isOnline": true
      },
      {
        "id": "ade-srv-6",
        "title": {
          "ar": "فضاء الزبون الوكالة الرقمية - الجزائرية للمياه",
          "fr": "Agence Numérique Client — ADE"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء الزبون الوكالة الرقمية - الجزائرية للمياه",
          "fr": "Accès direct au portail officiel : Agence Numérique Client — ADE"
        },
        "url": "https://www.ade.dz/login",
        "isOnline": true
      },
      {
        "id": "ade-srv-7",
        "title": {
          "ar": "تواصل تواصل مع الجزائرية للمياه",
          "fr": "Contacter l'Algérienne des Eaux (ADE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تواصل تواصل مع الجزائرية للمياه",
          "fr": "Accès direct au portail officiel : Contacter l'Algérienne des Eaux (ADE)"
        },
        "url": "https://www.ade.dz/contact",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ الجزائرية للمياه (ADE)؟",
          "fr": "Comment accéder aux services officiels de Algérienne des Eaux (ADE) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ الجزائرية للمياه (ADE) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Algérienne des Eaux (ADE) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "algerietelecom",
    "slug": "algerietelecom",
    "category": "telecom",
    "name": {
      "ar": "اتصالات الجزائر (Algérie Télécom)",
      "fr": "Algérie Télécom (IDOOM & Fibre FTTH)"
    },
    "acronym": "AT",
    "ministry": {
      "ar": "وزارة البريد والمواصلات",
      "fr": "Ministère de la Poste et Télécoms"
    },
    "description": {
      "ar": "دليل خدمات اتصالات الجزائر الرقمية، يشمل فضاء الزبائن، تحويل خط هاتفي، تعبئة الإنترنت والهاتف، دفع الفواتير، متابعة الاشتراكات والخدمات الإلكترونية المتاحة",
      "fr": "Portail détaillé des services publics pour Algérie Télécom (IDOOM & Fibre FTTH) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.algerietelecom.dz/ar",
    "portalUrl": "https://www.algerietelecom.dz/ar/page/migration-p232",
    "iconName": "Wifi",
    "isPopular": true,
    "services": [
      {
        "id": "algerietelecom-srv-1",
        "title": {
          "ar": "الموقع الموقع الرسمي",
          "fr": "Site Officiel de l'Établissement"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel de l'Établissement"
        },
        "url": "https://www.algerietelecom.dz/ar",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-2",
        "title": {
          "ar": "حولها الآن",
          "fr": "Transférer Maintenant"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: حولها الآن",
          "fr": "Accès direct au portail officiel : Transférer Maintenant"
        },
        "url": "https://www.algerietelecom.dz/ar/page/migration-p232",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-3",
        "title": {
          "ar": "تعبئة الانترنت تعبئة الانترنت",
          "fr": "Rechargement Internet ADSL / Fibre"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تعبئة الانترنت تعبئة الانترنت",
          "fr": "Accès direct au portail officiel : Rechargement Internet ADSL / Fibre"
        },
        "url": "https://paiement.algerietelecom.dz/AR/index.php?p=voucher_internet&produit=in",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-4",
        "title": {
          "ar": "تعبئة IDOOM 4G LTE تعبئة IDOOM 4G LTE",
          "fr": "Rechargement IDOOM 4G LTE"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تعبئة IDOOM 4G LTE تعبئة IDOOM 4G LTE",
          "fr": "Accès direct au portail officiel : Rechargement IDOOM 4G LTE"
        },
        "url": "https://paiement.algerietelecom.dz/AR/index.php?p=voucher_internet&produit=4g",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-5",
        "title": {
          "ar": "فاتورة الهاتف الثابت دفع فاتورة الهاتف الثابت",
          "fr": "Paiement Facture Téléphone Fixe"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فاتورة الهاتف الثابت دفع فاتورة الهاتف الثابت",
          "fr": "Accès direct au portail officiel : Paiement Facture Téléphone Fixe"
        },
        "url": "https://paiement.algerietelecom.dz/AR/index.php?p=facture_paiement",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-6",
        "title": {
          "ar": "مستحقات الهاتف الثابت دفع مستحقات الهاتف الثابت",
          "fr": "Règlement des Créances Téléphone Fixe"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مستحقات الهاتف الثابت دفع مستحقات الهاتف الثابت",
          "fr": "Accès direct au portail officiel : Règlement des Créances Téléphone Fixe"
        },
        "url": "https://paiement.algerietelecom.dz/AR/index.php?p=dette_paiement",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-7",
        "title": {
          "ar": "تعبئة الانترنت تعبئة الانترنت",
          "fr": "Rechargement Internet ADSL / Fibre"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تعبئة الانترنت تعبئة الانترنت",
          "fr": "Accès direct au portail officiel : Rechargement Internet ADSL / Fibre"
        },
        "url": "https://paiement.algerietelecom.dz/AR/index.php?p=internet_recharge&pr=in",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-8",
        "title": {
          "ar": "تعبئة IDOOM 4G LTE تعبئة حساب IDOOM 4G LTE",
          "fr": "Rechargement Compte IDOOM 4G LTE"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تعبئة IDOOM 4G LTE تعبئة حساب IDOOM 4G LTE",
          "fr": "Accès direct au portail officiel : Rechargement Compte IDOOM 4G LTE"
        },
        "url": "https://paiement.algerietelecom.dz/AR/index.php?p=internet_recharge&pr=4g",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-9",
        "title": {
          "ar": "جديد تفعيل الإشتراك تفعيل الإشتراك تركيب مودم ألياف بصرية",
          "fr": "Activation Abonnement & Installation Fibre Optique"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جديد تفعيل الإشتراك تفعيل الإشتراك تركيب مودم ألياف بصرية",
          "fr": "Accès direct au portail officiel : Activation Abonnement & Installation Fibre Optique"
        },
        "url": "https://www.algerietelecom.dz/ar/page/formulaire-de-signalisation-pour-les-clients-raccordes-a-la-fibre-optique-sans-mise-en-service-p315",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-10",
        "title": {
          "ar": "فضاء الزبون فضاء الزبون - إنشاء حساب / تسجيل الدخول",
          "fr": "Espace Client — Créer un Compte / Connexion"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء الزبون فضاء الزبون - إنشاء حساب / تسجيل الدخول",
          "fr": "Accès direct au portail officiel : Espace Client — Créer un Compte / Connexion"
        },
        "url": "https://client.at.dz/ar",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-11",
        "title": {
          "ar": "طلب إلكتروني تقديم طلب إلكتروني",
          "fr": "Déposer une Demande en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب إلكتروني تقديم طلب إلكتروني",
          "fr": "Accès direct au portail officiel : Déposer une Demande en Ligne"
        },
        "url": "https://www.algerietelecom.dz/ar/demande-na",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-12",
        "title": {
          "ar": "الإبلاغ عن عطب الإبلاغ عن عطب",
          "fr": "Signaler une Panne Technique"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الإبلاغ عن عطب الإبلاغ عن عطب",
          "fr": "Accès direct au portail officiel : Signaler une Panne Technique"
        },
        "url": "https://www.algerietelecom.dz/ar/derangements",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-13",
        "title": {
          "ar": "تحويل خط هاتفي طلب تحويل الخط الهاتفي إلى عنوان آخر عبر الموقع الرسمي لاتصالات الجزائر",
          "fr": "Demande de Transfert de Ligne Téléphonique"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تحويل خط هاتفي طلب تحويل الخط الهاتفي إلى عنوان آخر عبر الموقع الرسمي لاتصالات الجزائر",
          "fr": "Accès direct au portail officiel : Demande de Transfert de Ligne Téléphonique"
        },
        "url": "https://www.algerietelecom.dz/ar/page/B7-p332",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-14",
        "title": {
          "ar": "إبحث عن وكالة البحث عن وكالتي - إتصالات الجزائر",
          "fr": "Trouver mon Agence — Algérie Télécom"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إبحث عن وكالة البحث عن وكالتي - إتصالات الجزائر",
          "fr": "Accès direct au portail officiel : Trouver mon Agence — Algérie Télécom"
        },
        "url": "https://www.algerietelecom.dz/ar/page/trouver-mon-agence-p256",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-15",
        "title": {
          "ar": "إكتشف رقم هاتفك الثابت FTTH إكتشف رقم هاتفك الثابت FTTH",
          "fr": "Consulter Votre Numéro Fixe FTTH"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إكتشف رقم هاتفك الثابت FTTH إكتشف رقم هاتفك الثابت FTTH",
          "fr": "Accès direct au portail officiel : Consulter Votre Numéro Fixe FTTH"
        },
        "url": "https://www.algerietelecom.dz/ar/page/trouver-votre-numero-de-fixe-p268",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-16",
        "title": {
          "ar": "WEEK-END Boost WEEK-END Boost",
          "fr": "Offre Week-End Boost Algérie Télécom"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: WEEK-END Boost WEEK-END Boost",
          "fr": "Accès direct au portail officiel : Offre Week-End Boost Algérie Télécom"
        },
        "url": "https://www.algerietelecom.dz/ar/particuliers/week-end-boost-prod227",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-17",
        "title": {
          "ar": "تطبيق E-paiement تطبيق E-paiement لإتصالات الجزائر",
          "fr": "Application E-Paiement Algérie Télécom"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق E-paiement تطبيق E-paiement لإتصالات الجزائر",
          "fr": "Accès direct au portail officiel : Application E-Paiement Algérie Télécom"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.algerietelecom.rd.e_paiement&hl=ar",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-18",
        "title": {
          "ar": "تطبيق My IDOOM تطبيق My IDOOM لإتصالات الجزائر",
          "fr": "Application My IDOOM Algérie Télécom"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق My IDOOM تطبيق My IDOOM لإتصالات الجزائر",
          "fr": "Accès direct au portail officiel : Application My IDOOM Algérie Télécom"
        },
        "url": "https://play.google.com/store/apps/details?id=com.at.dz&hl=ar",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-19",
        "title": {
          "ar": "منصة معلم منصة معلم لإتصالات الجزائر",
          "fr": "Plateforme Éducative Moalim"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: منصة معلم منصة معلم لإتصالات الجزائر",
          "fr": "Accès direct au portail officiel : Plateforme Éducative Moalim"
        },
        "url": "https://www.moalim-dz.net/moalim_v2/login/index.php",
        "isOnline": true
      },
      {
        "id": "algerietelecom-srv-20",
        "title": {
          "ar": "المعلم المعلم",
          "fr": "Portail Moalim Algérie Télécom"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: المعلم المعلم",
          "fr": "Accès direct au portail officiel : Portail Moalim Algérie Télécom"
        },
        "url": "https://inkidia.com.dz/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ اتصالات الجزائر (Algérie Télécom)؟",
          "fr": "Comment accéder aux services officiels de Algérie Télécom (IDOOM & Fibre FTTH) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ اتصالات الجزائر (Algérie Télécom) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Algérie Télécom (IDOOM & Fibre FTTH) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "anae",
    "slug": "anae",
    "category": "social_labor",
    "name": {
      "ar": "الوكالة الوطنية للمقاول الذاتي (ANAE)",
      "fr": "Agence Nationale de l'Auto-Entrepreneur (ANAE)"
    },
    "acronym": "ANAE",
    "ministry": {
      "ar": "وزارة اقتصاد المعرفة والمؤسسات الناشئة",
      "fr": "Ministère de l'Économie de la Connaissance"
    },
    "description": {
      "ar": "توفر البوابة الجزائرية للخدمات الرقمية منصة للوصول إلى خدمات الوكالة الوطنية للمقاول الذاتي، وتتيح طلب واستخراج بطاقة المقاول الذاتي إلكترونيا",
      "fr": "Portail détaillé des services publics pour Agence Nationale de l'Auto-Entrepreneur (ANAE) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://anae.dz/",
    "portalUrl": "https://anae.dz/user/ae/register/",
    "iconName": "Briefcase",
    "isPopular": true,
    "services": [
      {
        "id": "anae-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://anae.dz/",
        "isOnline": true
      },
      {
        "id": "anae-srv-2",
        "title": {
          "ar": "أطلبها الآن",
          "fr": "Commander en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أطلبها الآن",
          "fr": "Accès direct au portail officiel : Commander en Ligne"
        },
        "url": "https://anae.dz/user/ae/register/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ الوكالة الوطنية للمقاول الذاتي (ANAE)؟",
          "fr": "Comment accéder aux services officiels de Agence Nationale de l'Auto-Entrepreneur (ANAE) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ الوكالة الوطنية للمقاول الذاتي (ANAE) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Agence Nationale de l'Auto-Entrepreneur (ANAE) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "anem",
    "slug": "anem",
    "category": "social_labor",
    "name": {
      "ar": "الوكالة الوطنية للتشغيل (ANEM)",
      "fr": "Agence Nationale de l'Emploi (ANEM)"
    },
    "acronym": "ANEM",
    "ministry": {
      "ar": "وزارة العمل والتشغيل والضمان الاجتماعي",
      "fr": "Ministère du Travail et de l'Emploi"
    },
    "description": {
      "ar": "خدمات الوكالة الوطنية للتشغيل ANEM: التسجيل في منحة البطالة، عروض العمل، فرصتي، وتطبيقات التشغيل الرسمية في الجزائر",
      "fr": "Portail détaillé des services publics pour Agence Nationale de l'Emploi (ANEM) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.anem.dz/",
    "portalUrl": "https://minha.anem.dz/pre_inscription",
    "iconName": "Briefcase",
    "isPopular": true,
    "services": [
      {
        "id": "anem-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.anem.dz/",
        "isOnline": true
      },
      {
        "id": "anem-srv-2",
        "title": {
          "ar": "سجل الآن",
          "fr": "S'inscrire en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سجل الآن",
          "fr": "Accès direct au portail officiel : S'inscrire en Ligne"
        },
        "url": "https://minha.anem.dz/pre_inscription",
        "isOnline": true
      },
      {
        "id": "anem-srv-3",
        "title": {
          "ar": "منحة البطالة تمديد في منحة البطالة",
          "fr": "Prolongation de l'Allocation Chômage"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: منحة البطالة تمديد في منحة البطالة",
          "fr": "Accès direct au portail officiel : Prolongation de l'Allocation Chômage"
        },
        "url": "https://wassitonline.anem.dz/postulation/prolongationDemande",
        "isOnline": true
      },
      {
        "id": "anem-srv-4",
        "title": {
          "ar": "فرصتي فرصتي - التقدم لعروض العمل",
          "fr": "Forssati — Postuler aux Offres d'Emploi"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فرصتي فرصتي - التقدم لعروض العمل",
          "fr": "Accès direct au portail officiel : Forssati — Postuler aux Offres d'Emploi"
        },
        "url": "https://auth.anem.dz/Account/Login",
        "isOnline": true
      },
      {
        "id": "anem-srv-5",
        "title": {
          "ar": "فرص عمل وإعلانات فرص عمل وإعلانات",
          "fr": "Offres d'Emploi et Annonces ANEM"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فرص عمل وإعلانات فرص عمل وإعلانات",
          "fr": "Accès direct au portail officiel : Offres d'Emploi et Annonces ANEM"
        },
        "url": "https://www.anem.dz/opportunites/ar.html",
        "isOnline": true
      },
      {
        "id": "anem-srv-6",
        "title": {
          "ar": "تطبيق ANEM-Dz تطبيق ANEM-Dz",
          "fr": "Application Mobile ANEM-Dz"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق ANEM-Dz تطبيق ANEM-Dz",
          "fr": "Accès direct au portail officiel : Application Mobile ANEM-Dz"
        },
        "url": "https://www.anem.dz/app_mobile/Name.apk",
        "isOnline": true
      },
      {
        "id": "anem-srv-7",
        "title": {
          "ar": "تطبيق Mon Agence تطبيق Mon Agence للبحث عن وكالة",
          "fr": "Application Mon Agence ANEM"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق Mon Agence تطبيق Mon Agence للبحث عن وكالة",
          "fr": "Accès direct au portail officiel : Application Mon Agence ANEM"
        },
        "url": "https://www.anem.dz/app_mobile/Mon_agence.apk",
        "isOnline": true
      },
      {
        "id": "anem-srv-8",
        "title": {
          "ar": "تطبيق Mon Offre تطبيق Mon Offre لعروض العمل",
          "fr": "Application Mon Offre ANEM"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق Mon Offre تطبيق Mon Offre لعروض العمل",
          "fr": "Accès direct au portail officiel : Application Mon Offre ANEM"
        },
        "url": "https://www.anem.dz/app_mobile/Mon_offre.apk",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ الوكالة الوطنية للتشغيل (ANEM)؟",
          "fr": "Comment accéder aux services officiels de Agence Nationale de l'Emploi (ANEM) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ الوكالة الوطنية للتشغيل (ANEM) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Agence Nationale de l'Emploi (ANEM) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "anpdp",
    "slug": "anpdp",
    "category": "justice_interior",
    "name": {
      "ar": "السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP)",
      "fr": "Autorité Nationale de Protection des Données Personnelles (ANPDP)"
    },
    "acronym": "ANPDP",
    "ministry": {
      "ar": "رئاسة الجمهورية — هيئة مستقلة",
      "fr": "Autorité Nationale Indépendante"
    },
    "description": {
      "ar": "اكتشف خدمات السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي ANPDP في الجزائر، لتقديم الشكاوى والاحتجاجات وحماية البيانات الشخصية والتواصل والاستشارات القانونية والخدمات",
      "fr": "Portail détaillé des services publics pour Autorité Nationale de Protection des Données Personnelles (ANPDP) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://anpdp.dz/ar/",
    "portalUrl": "https://plaintes.anpdp.dz/",
    "iconName": "ShieldCheck",
    "isPopular": false,
    "services": [
      {
        "id": "anpdp-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://anpdp.dz/ar/",
        "isOnline": true
      },
      {
        "id": "anpdp-srv-2",
        "title": {
          "ar": "قدم الآن",
          "fr": "Déposer une Demande"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: قدم الآن",
          "fr": "Accès direct au portail officiel : Déposer une Demande"
        },
        "url": "https://plaintes.anpdp.dz/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP)؟",
          "fr": "Comment accéder aux services officiels de Autorité Nationale de Protection des Données Personnelles (ANPDP) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي (ANPDP) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Autorité Nationale de Protection des Données Personnelles (ANPDP) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "arpce",
    "slug": "arpce",
    "category": "telecom",
    "name": {
      "ar": "سلطة ضبط البريد والاتصالات الإلكترونية (ARPCE)",
      "fr": "Autorité de Régulation de la Poste et des Communications (ARPCE)"
    },
    "acronym": "ARPCE",
    "ministry": {
      "ar": "هيئة ضبط وطنية مستقلة",
      "fr": "Autorité de Régulation Nationale"
    },
    "description": {
      "ar": "مجموعة من الخدمات عن بعد وتطبيقات تحسين جودة الاتصالات، توطين، تطوير البنية التحتية، ودعم الابتكار في قطاع الاتصالات لضمان تجربة رقمية متطورة وآمنة للمواطن الجزائري",
      "fr": "Portail détaillé des services publics pour Autorité de Régulation de la Poste et des Communications (ARPCE) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.arpce.dz/ar",
    "portalUrl": "https://777.mpt.gov.dz/calendar#cal-board",
    "iconName": "Radio",
    "isPopular": false,
    "services": [
      {
        "id": "arpce-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.arpce.dz/ar",
        "isOnline": true
      },
      {
        "id": "arpce-srv-2",
        "title": {
          "ar": "أحجز في الدورةالأن",
          "fr": "Réserver une Session de Formation"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أحجز في الدورةالأن",
          "fr": "Accès direct au portail officiel : Réserver une Session de Formation"
        },
        "url": "https://777.mpt.gov.dz/calendar#cal-board",
        "isOnline": true
      },
      {
        "id": "arpce-srv-3",
        "title": {
          "ar": "طلب خدمة استمارة طلب خدمة عبر الموقع",
          "fr": "Formulaire de Demande de Service ARPCE"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب خدمة استمارة طلب خدمة عبر الموقع",
          "fr": "Accès direct au portail officiel : Formulaire de Demande de Service ARPCE"
        },
        "url": "https://www.arpce.dz/ar/service/request",
        "isOnline": true
      },
      {
        "id": "arpce-srv-4",
        "title": {
          "ar": "دفع فاتورة دفع فاتورة سلطة الضبط عبر الإنترنت",
          "fr": "Paiement Facture ARPCE en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: دفع فاتورة دفع فاتورة سلطة الضبط عبر الإنترنت",
          "fr": "Accès direct au portail officiel : Paiement Facture ARPCE en Ligne"
        },
        "url": "https://epay.arpce.dz/",
        "isOnline": true
      },
      {
        "id": "arpce-srv-5",
        "title": {
          "ar": "جودتي تحميل تطبيق جودتي",
          "fr": "Télécharger l'Application Jawdati (ARPCE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جودتي تحميل تطبيق جودتي",
          "fr": "Accès direct au portail officiel : Télécharger l'Application Jawdati (ARPCE)"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.arpce.jawdati",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ سلطة ضبط البريد والاتصالات الإلكترونية (ARPCE)؟",
          "fr": "Comment accéder aux services officiels de Autorité de Régulation de la Poste et des Communications (ARPCE) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ سلطة ضبط البريد والاتصالات الإلكترونية (ARPCE) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Autorité de Régulation de la Poste et des Communications (ARPCE) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "assurance",
    "slug": "assurance",
    "category": "finance_economy",
    "name": {
      "ar": "قطاع التأمينات الجزائري (دليل الشركات)",
      "fr": "Secteur des Assurances en Algérie"
    },
    "acronym": "ASSUR",
    "ministry": {
      "ar": "وزارة المالية — مديرية التأمينات",
      "fr": "Ministère des Finances — Assurances"
    },
    "description": {
      "ar": "اكتشف خدمات التأمين على الممتلكات الرقمية في الجزائر، من حجز التأمين إلى تتبع وسائل التأمين، كل ما تحتاجه لتسهيل حياتك اليومية",
      "fr": "Portail détaillé des services publics pour Secteur des Assurances en Algérie : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.mf.gov.dz/",
    "portalUrl": "https://www.mf.gov.dz/",
    "iconName": "Shield",
    "isPopular": false,
    "services": [
      {
        "id": "assurance-dir",
        "title": {
          "ar": "دليل شركات التأمين الجزائرية في البوابة",
          "fr": "Annuaire des 12 Compagnies d'Assurance"
        },
        "description": {
          "ar": "استعراض كافة شركات التأمين العمومية والخاصة والتكافلية المعتمدة",
          "fr": "Accéder aux fiches détaillées des 12 assureurs agréés en Algérie"
        },
        "url": "https://www.mf.gov.dz/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ قطاع التأمينات الجزائري (دليل الشركات)؟",
          "fr": "Comment accéder aux services officiels de Secteur des Assurances en Algérie ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ قطاع التأمينات الجزائري (دليل الشركات) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Secteur des Assurances en Algérie sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "awlyaa-education",
    "slug": "awlyaa-education",
    "category": "education_higher",
    "name": {
      "ar": "فضاء أولياء التلاميذ والمنصات التعليمية",
      "fr": "Espace Parents d'Élèves & Scolarité (Awlyaa)"
    },
    "acronym": "AWLYAA",
    "ministry": {
      "ar": "وزارة التربية الوطنية",
      "fr": "Ministère de l'Éducation Nationale"
    },
    "description": {
      "ar": "ادخل إلى فضاء الأولياء في الجزائر لمتابعة نتائج التلاميذ والغيابات والتواصل مع المدرسة والتسجيل في الامتحانات. روابط المنصة الرسمية وشرح خطوات الاستخدام.",
      "fr": "Portail détaillé des services publics pour Espace Parents d'Élèves & Scolarité (Awlyaa) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.education.gov.dz/",
    "portalUrl": "https://bac.onec.dz/",
    "iconName": "GraduationCap",
    "isPopular": true,
    "services": [
      {
        "id": "awlyaa-education-srv-1",
        "title": {
          "ar": "الموقع الرسمي للوزارة",
          "fr": "Site Officiel du Ministère"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي للوزارة",
          "fr": "Accès direct au portail officiel : Site Officiel du Ministère"
        },
        "url": "https://www.education.gov.dz/",
        "isOnline": true
      },
      {
        "id": "awlyaa-education-srv-2",
        "title": {
          "ar": "إستكشف الآن",
          "fr": "Explorer le Portail"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إستكشف الآن",
          "fr": "Accès direct au portail officiel : Explorer le Portail"
        },
        "url": "https://bac.onec.dz/",
        "isOnline": true
      },
      {
        "id": "awlyaa-education-srv-3",
        "title": {
          "ar": "فضاء أولياء التلاميذ متابعة أبنائك الدراسية، النتائج، الغيابات، والتواصل مع المدرسة",
          "fr": "Espace Parents d'Élèves (Notes, Absences, Communication)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء أولياء التلاميذ متابعة أبنائك الدراسية، النتائج، الغيابات، والتواصل مع المدرسة",
          "fr": "Accès direct au portail officiel : Espace Parents d'Élèves (Notes, Absences, Communication)"
        },
        "url": "https://awlyaa.education.dz/login",
        "isOnline": true
      },
      {
        "id": "awlyaa-education-srv-4",
        "title": {
          "ar": "DZ-Orientation منصة توجيه ودعم الطلاب المتحصلين على شهادة الباكالوريا، إختر مستقبلك",
          "fr": "DZ-Orientation — Portail d'Orientation des Bacheliers"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: DZ-Orientation منصة توجيه ودعم الطلاب المتحصلين على شهادة الباكالوريا، إختر مستقبلك",
          "fr": "Accès direct au portail officiel : DZ-Orientation — Portail d'Orientation des Bacheliers"
        },
        "url": "https://dzorientation.com",
        "isOnline": true
      },
      {
        "id": "awlyaa-education-srv-5",
        "title": {
          "ar": "إثبات المستوى استخراج شهادات إثبات المستوى",
          "fr": "Retrait de l'Attestation de Niveau (ONEFD)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إثبات المستوى استخراج شهادات إثبات المستوى",
          "fr": "Accès direct au portail officiel : Retrait de l'Attestation de Niveau (ONEFD)"
        },
        "url": "https://www.onefd.edu.dz/att_niv_2025/",
        "isOnline": true
      },
      {
        "id": "awlyaa-education-srv-6",
        "title": {
          "ar": "شهادة التعليم المتوسط BEM التسجيل في امتحان السنة الرابعة متوسط، الاطلاع على النتائج",
          "fr": "Inscription & Résultats Examen BEM"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة التعليم المتوسط BEM التسجيل في امتحان السنة الرابعة متوسط، الاطلاع على النتائج",
          "fr": "Accès direct au portail officiel : Inscription & Résultats Examen BEM"
        },
        "url": "https://bem.onec.dz/",
        "isOnline": true
      },
      {
        "id": "awlyaa-education-srv-7",
        "title": {
          "ar": "الدفع الإلكتروني للامتحانات تسديد مستحقات التسجيل في امتحانات BEM و BAC إلكترونيا",
          "fr": "Paiement Électronique des Frais BEM & BAC"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الدفع الإلكتروني للامتحانات تسديد مستحقات التسجيل في امتحانات BEM و BAC إلكترونيا",
          "fr": "Accès direct au portail officiel : Paiement Électronique des Frais BEM & BAC"
        },
        "url": "https://epay.education.dz/auth",
        "isOnline": true
      },
      {
        "id": "awlyaa-education-srv-8",
        "title": {
          "ar": "شهادة إثبات المستوى استخراج شهادة إثبات المستوى للتلاميذ المسجلين في التعليم عن بعد",
          "fr": "Attestation de Niveau — Enseignement à Distance"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة إثبات المستوى استخراج شهادة إثبات المستوى للتلاميذ المسجلين في التعليم عن بعد",
          "fr": "Accès direct au portail officiel : Attestation de Niveau — Enseignement à Distance"
        },
        "url": "https://www.onefd.edu.dz/att_niv_**/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ فضاء أولياء التلاميذ والمنصات التعليمية؟",
          "fr": "Comment accéder aux services officiels de Espace Parents d'Élèves & Scolarité (Awlyaa) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ فضاء أولياء التلاميذ والمنصات التعليمية مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Espace Parents d'Élèves & Scolarité (Awlyaa) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "bank",
    "slug": "bank",
    "category": "finance_economy",
    "name": {
      "ar": "قطاع البنوك والمؤسسات المصرفية في الجزائر",
      "fr": "Secteur Bancaire & Régulation Financière"
    },
    "acronym": "BANQUE",
    "ministry": {
      "ar": "بنك الجزائر ووزارة المالية",
      "fr": "Banque d'Algérie & Ministère des Finances"
    },
    "description": {
      "ar": "اكتشف خدمات البنوك والمالية الرقمية في الجزائر، من حجز القروض إلى تتبع وسائل الاستثمارات، كل ما تحتاجه لتسهيل حياتك اليومية",
      "fr": "Portail détaillé des services publics pour Secteur Bancaire & Régulation Financière : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.bank-of-algeria.dz/",
    "portalUrl": "https://www.mf.gov.dz/",
    "iconName": "Landmark",
    "isPopular": false,
    "services": [
      {
        "id": "bank-srv-1",
        "title": {
          "ar": "الموقع الرسمي لبنك الجزائر",
          "fr": "Site Officiel de la Banque d'Algérie"
        },
        "description": {
          "ar": "بوابة السلطة النقدية العليا للاطلاع على أسعار الصرف الرسمية، النصوص التنظيمية، وقائمة البنوك المعتمدة في الجزائر.",
          "fr": "Portail officiel de la Banque Centrale : cours des devises, réglementation bancaire et liste des établissements agréés."
        },
        "url": "https://www.bank-of-algeria.dz/",
        "isOnline": true
      },
      {
        "id": "bank-srv-2",
        "title": {
          "ar": "وزارة المالية الجزائرية",
          "fr": "Ministère des Finances"
        },
        "description": {
          "ar": "البوابة الرسمية لوزارة المالية لمتابعة الإصلاحات المصرفية وقوانين المالية والرقمنة البنكية.",
          "fr": "Portail officiel du Ministère des Finances et des réformes du secteur bancaire."
        },
        "url": "https://www.mf.gov.dz/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ قطاع البنوك والمؤسسات المصرفية في الجزائر؟",
          "fr": "Comment accéder aux services officiels de Secteur Bancaire & Régulation Financière ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ قطاع البنوك والمؤسسات المصرفية في الجزائر مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Secteur Bancaire & Régulation Financière sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "campuce.jobs",
    "slug": "campuce.jobs",
    "category": "education_higher",
    "name": {
      "ar": "منصة التوظيف الجامعي والتربصات (Campuce Jobs)",
      "fr": "Plateforme d'Emploi & Stages Étudiants (Campuce Jobs)"
    },
    "acronym": "CAMPUCE",
    "ministry": {
      "ar": "التعليم العالي والتشغيل",
      "fr": "Enseignement Supérieur & Emploi"
    },
    "description": {
      "ar": "فرص عمل للطلاب الوصول إلى وظائف بدوام جزئي، وفرص تدريب، ومهام تتناسب مع مسارك الدراسي. تقديم سريع. تقديم سريع تقدّم للوظائف في بضع نقرات فقط، عبر ملف شخصي موحد",
      "fr": "Portail détaillé des services publics pour Plateforme d'Emploi & Stages Étudiants (Campuce Jobs) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://jobs.student-campuce.dz/",
    "portalUrl": "https://jobs.student-campuce.dz/auth/login",
    "iconName": "Briefcase",
    "isPopular": false,
    "services": [
      {
        "id": "campuce.jobs-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://jobs.student-campuce.dz/",
        "isOnline": true
      },
      {
        "id": "campuce.jobs-srv-2",
        "title": {
          "ar": "سجل الآن",
          "fr": "S'inscrire en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سجل الآن",
          "fr": "Accès direct au portail officiel : S'inscrire en Ligne"
        },
        "url": "https://jobs.student-campuce.dz/auth/login",
        "isOnline": true
      },
      {
        "id": "campuce.jobs-srv-3",
        "title": {
          "ar": "عروض العمل إكتشف عروض العمل على المنصة",
          "fr": "Découvrir les Offres d'Emploi sur la Plateforme"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: عروض العمل إكتشف عروض العمل على المنصة",
          "fr": "Accès direct au portail officiel : Découvrir les Offres d'Emploi sur la Plateforme"
        },
        "url": "https://jobs.student-campuce.dz/job-offers",
        "isOnline": true
      },
      {
        "id": "campuce.jobs-srv-4",
        "title": {
          "ar": "الشركاء إكتشف شركاء CAMPUCE JOBs",
          "fr": "Partenaires Campuce Jobs"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الشركاء إكتشف شركاء CAMPUCE JOBs",
          "fr": "Accès direct au portail officiel : Partenaires Campuce Jobs"
        },
        "url": "https://jobs.student-campuce.dz/companies",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ منصة التوظيف الجامعي والتربصات (Campuce Jobs)؟",
          "fr": "Comment accéder aux services officiels de Plateforme d'Emploi & Stages Étudiants (Campuce Jobs) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ منصة التوظيف الجامعي والتربصات (Campuce Jobs) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Plateforme d'Emploi & Stages Étudiants (Campuce Jobs) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "casnos",
    "slug": "casnos",
    "category": "social_labor",
    "name": {
      "ar": "الصندوق الوطني للضمان الاجتماعي لغير الأجراء (CASNOS)",
      "fr": "Caisse Nationale des Non-Salariés (CASNOS)"
    },
    "acronym": "CASNOS",
    "ministry": {
      "ar": "وزارة العمل والتشغيل والضمان الاجتماعي",
      "fr": "Ministère du Travail et Sécurité Sociale"
    },
    "description": {
      "ar": "دليل خدمات CASNOS في الجزائر: فضاء المؤمن، الانتساب والتصريح عن بعد، استخراج الشهادات ومتابعة ملفات الضمان الاجتماعي للعمال غير الأجراء",
      "fr": "Portail détaillé des services publics pour Caisse Nationale des Non-Salariés (CASNOS) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://damancom.casnos.dz/",
    "portalUrl": "https://damancom.casnos.dz/auth/login/assure",
    "iconName": "ShieldCheck",
    "isPopular": true,
    "services": [
      {
        "id": "casnos-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://damancom.casnos.dz/",
        "isOnline": true
      },
      {
        "id": "casnos-srv-2",
        "title": {
          "ar": "شهادة الإنتساب إستخراج شهادة الإنتساب",
          "fr": "Télécharger l'Attestation d'Affiliation"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة الإنتساب إستخراج شهادة الإنتساب",
          "fr": "Accès direct au portail officiel : Télécharger l'Attestation d'Affiliation"
        },
        "url": "https://damancom.casnos.dz/auth/login/assure",
        "isOnline": true
      },
      {
        "id": "casnos-srv-3",
        "title": {
          "ar": "شهادة عدم الإنتساب إستخراج شهادة عدم الإنتساب",
          "fr": "Télécharger l'Attestation de Non-Affiliation"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة عدم الإنتساب إستخراج شهادة عدم الإنتساب",
          "fr": "Accès direct au portail officiel : Télécharger l'Attestation de Non-Affiliation"
        },
        "url": "https://damancom.casnos.dz/non-affiliation",
        "isOnline": true
      },
      {
        "id": "casnos-srv-4",
        "title": {
          "ar": "طلب الإنتساب عن بعد طلب الإنتساب عن بعد في الصندوق الوطني للضمان الاجتماعي للعمال الغير أجراء (CASNOS الجزائر | الضمان الاجتماعي للعمال غير الأجراء)، الدفع الإليكتروني عن بعد",
          "fr": "Affiliation et Télépaiement CASNOS à Distance"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب الإنتساب عن بعد طلب الإنتساب عن بعد في الصندوق الوطني للضمان الاجتماعي للعمال الغير أجراء (CASNOS الجزائر | الضمان الاجتماعي للعمال غير الأجراء)، الدفع الإليكتروني عن بعد",
          "fr": "Accès direct au portail officiel : Affiliation et Télépaiement CASNOS à Distance"
        },
        "url": "https://damancom.casnos.dz/affiliation",
        "isOnline": true
      },
      {
        "id": "casnos-srv-5",
        "title": {
          "ar": "جدبد حمايتي التغطية الاجتماعية للفلاحين، طلب الإنتساب عن بعد ، دفع عن بعد، نظام التقاعد",
          "fr": "Soutien Social, Famille & Femme Rurale (MSNFCF)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد حمايتي التغطية الاجتماعية للفلاحين، طلب الإنتساب عن بعد ، دفع عن بعد، نظام التقاعد",
          "fr": "Accès direct au portail officiel : Soutien Social, Famille & Femme Rurale (MSNFCF)"
        },
        "url": "https://damancom.casnos.dz/himayati/",
        "isOnline": true
      },
      {
        "id": "casnos-srv-6",
        "title": {
          "ar": "جدبد محاكاة محاكاة الإشتراك في نظام التقاعد",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد محاكاة محاكاة الإشتراك في نظام التقاعد",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://damancom.casnos.dz/simulation",
        "isOnline": true
      },
      {
        "id": "casnos-srv-7",
        "title": {
          "ar": "جدبد تقديم شكوى تقديم شكوى حول أي مشكلة",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد تقديم شكوى تقديم شكوى حول أي مشكلة",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "https://damancom.casnos.dz/doleances",
        "isOnline": true
      },
      {
        "id": "casnos-srv-8",
        "title": {
          "ar": "تطبيق الهناء تحميل تطبيق الهناء",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق الهناء تحميل تطبيق الهناء",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.cnas.mobile_elhanaa&hl=ar",
        "isOnline": true
      },
      {
        "id": "casnos-srv-9",
        "title": {
          "ar": "تطبيق المتقاعد تحميل تطبيق المتقاعد",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق المتقاعد تحميل تطبيق المتقاعد",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.cnr.cnr",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ الصندوق الوطني للضمان الاجتماعي لغير الأجراء (CASNOS)؟",
          "fr": "Comment accéder aux services officiels de Caisse Nationale des Non-Salariés (CASNOS) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ الصندوق الوطني للضمان الاجتماعي لغير الأجراء (CASNOS) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Caisse Nationale des Non-Salariés (CASNOS) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "cnas",
    "slug": "cnas",
    "category": "social_labor",
    "name": {
      "ar": "الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء (CNAS)",
      "fr": "Caisse Nationale des Assurances Sociales (CNAS)"
    },
    "acronym": "CNAS",
    "ministry": {
      "ar": "وزارة العمل والتشغيل والضمان الاجتماعي",
      "fr": "Ministère du Travail et Sécurité Sociale"
    },
    "description": {
      "ar": "دليل خدمات CNAS في الجزائر: فضاء الهناء، التصريح عن بعد، استخراج الشهادات ومتابعة ملفات الضمان الاجتماعي للعمال الأجراء",
      "fr": "Portail détaillé des services publics pour Caisse Nationale des Assurances Sociales (CNAS) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://cnas.dz/",
    "portalUrl": "https://play.google.com/store/apps/details?id=dz.cnas.mobile_elhanaa&hl=ar",
    "iconName": "HeartPulse",
    "isPopular": true,
    "services": [
      {
        "id": "cnas-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://cnas.dz/",
        "isOnline": true
      },
      {
        "id": "cnas-srv-2",
        "title": {
          "ar": "حمل الآن",
          "fr": "Télécharger l'Application"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: حمل الآن",
          "fr": "Accès direct au portail officiel : Télécharger l'Application"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.cnas.mobile_elhanaa&hl=ar",
        "isOnline": true
      },
      {
        "id": "cnas-srv-3",
        "title": {
          "ar": "البوابة الرقمية للتصريح عن بعد أرباب العمل (المستخدمين)",
          "fr": "Portail de Télédéclaration des Employeurs (CNAS)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: البوابة الرقمية للتصريح عن بعد أرباب العمل (المستخدمين)",
          "fr": "Accès direct au portail officiel : Portail de Télédéclaration des Employeurs (CNAS)"
        },
        "url": "https://teledeclaration.cnas.dz/",
        "isOnline": true
      },
      {
        "id": "cnas-srv-4",
        "title": {
          "ar": "خدمات فضاء الهناء المؤمن لهم اجتماعيا (الأجراء)",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: خدمات فضاء الهناء المؤمن لهم اجتماعيا (الأجراء)",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://elhanaa.cnas.dz",
        "isOnline": true
      },
      {
        "id": "cnas-srv-5",
        "title": {
          "ar": "فضاء الهناء التسجيل في فضاء الهناء",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء الهناء التسجيل في فضاء الهناء",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://elhanaa.cnas.dz/inscription.xhtml",
        "isOnline": true
      },
      {
        "id": "cnas-srv-6",
        "title": {
          "ar": "فضاء الهناء تحقق من شهادة الانتساب",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء الهناء تحقق من شهادة الانتساب",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://elhanaa.cnas.dz/affiliation.xhtml",
        "isOnline": true
      },
      {
        "id": "cnas-srv-7",
        "title": {
          "ar": "فضاء الهناء التحقق من شهادة أداء المستحقات",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء الهناء التحقق من شهادة أداء المستحقات",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://teledeclaration.cnas.dz/checkMAJ.jsp",
        "isOnline": true
      },
      {
        "id": "cnas-srv-8",
        "title": {
          "ar": "شهادة عدم الإنتساب إستخراج شهادة عدم الإنتساب",
          "fr": "Télécharger l'Attestation de Non-Affiliation"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة عدم الإنتساب إستخراج شهادة عدم الإنتساب",
          "fr": "Accès direct au portail officiel : Télécharger l'Attestation de Non-Affiliation"
        },
        "url": "https://elhanaa.cnas.dz/attestation_no_affiliation.xhtml",
        "isOnline": true
      },
      {
        "id": "cnas-srv-9",
        "title": {
          "ar": "تطبيق المتقاعد تحميل تطبيق المتقاعد",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق المتقاعد تحميل تطبيق المتقاعد",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.cnr.cnr",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء (CNAS)؟",
          "fr": "Comment accéder aux services officiels de Caisse Nationale des Assurances Sociales (CNAS) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ الصندوق الوطني للتأمينات الاجتماعية للعمال الأجراء (CNAS) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Caisse Nationale des Assurances Sociales (CNAS) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "cnr",
    "slug": "cnr",
    "category": "social_labor",
    "name": {
      "ar": "الصندوق الوطني للتقاعد (CNR)",
      "fr": "Caisse Nationale des Retraites (CNR)"
    },
    "acronym": "CNR",
    "ministry": {
      "ar": "وزارة العمل والتشغيل والضمان الاجتماعي",
      "fr": "Ministère du Travail et Sécurité Sociale"
    },
    "description": {
      "ar": "دليل خدمات الصندوق الوطني للتقاعد CNR في الجزائر: حساب التقاعد، متابعة الملف، صب المعاش، تثمين المعاش وخدمات المتقاعدين",
      "fr": "Portail détaillé des services publics pour Caisse Nationale des Retraites (CNR) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://dz.cnr.dz/",
    "portalUrl": "https://play.google.com/store/apps/details?id=dz.cnr.cnr",
    "iconName": "Clock",
    "isPopular": true,
    "services": [
      {
        "id": "cnr-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://dz.cnr.dz/",
        "isOnline": true
      },
      {
        "id": "cnr-srv-2",
        "title": {
          "ar": "حمل الآن",
          "fr": "Télécharger l'Application"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: حمل الآن",
          "fr": "Accès direct au portail officiel : Télécharger l'Application"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.cnr.cnr",
        "isOnline": true
      },
      {
        "id": "cnr-srv-3",
        "title": {
          "ar": "حساب المتقاعد حساب المتقاعد",
          "fr": "Connexion à l'Espace Utilisateur"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: حساب المتقاعد حساب المتقاعد",
          "fr": "Accès direct au portail officiel : Connexion à l'Espace Utilisateur"
        },
        "url": "https://retraite.cnr.dz/#/login",
        "isOnline": true
      },
      {
        "id": "cnr-srv-4",
        "title": {
          "ar": "تاريخ صب المعاش حساب تاريخ صب المعاش",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تاريخ صب المعاش حساب تاريخ صب المعاش",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://calccp.cnr.dz/",
        "isOnline": true
      },
      {
        "id": "cnr-srv-5",
        "title": {
          "ar": "التقاعد المنقول التقاعد المنقول",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: التقاعد المنقول التقاعد المنقول",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://mankoul.cnr.dz/",
        "isOnline": true
      },
      {
        "id": "cnr-srv-6",
        "title": {
          "ar": "متابعة ملف التقاعد متابعة ملف التقاعد، متقاعد، وضعية الملف، تقديم عريضة، شكوى",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: متابعة ملف التقاعد متابعة ملف التقاعد، متقاعد، وضعية الملف، تقديم عريضة، شكوى",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://suivi.cnr.dz/",
        "isOnline": true
      },
      {
        "id": "cnr-srv-7",
        "title": {
          "ar": "تثمين المعاش تثمين المعاش",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تثمين المعاش تثمين المعاش",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://reval.cnr.dz/",
        "isOnline": true
      },
      {
        "id": "cnr-srv-8",
        "title": {
          "ar": "التحقق من صحة الوثائق التحقق من صحة الوثائق، شهادة الدخل، شهادة عدم تقاضي المنحة",
          "fr": "Vérification d'Authenticité des Documents (CNR)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: التحقق من صحة الوثائق التحقق من صحة الوثائق، شهادة الدخل، شهادة عدم تقاضي المنحة",
          "fr": "Accès direct au portail officiel : Vérification d'Authenticité des Documents (CNR)"
        },
        "url": "https://retraite.cnr.dz/#/validate",
        "isOnline": true
      },
      {
        "id": "cnr-srv-9",
        "title": {
          "ar": "فضاء صاحب العمل فضاء صاحب العمل",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء صاحب العمل فضاء صاحب العمل",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://fel.cnr.dz/login",
        "isOnline": true
      },
      {
        "id": "cnr-srv-10",
        "title": {
          "ar": "فضاء العامل الأجير الحساب الفردي للأجير",
          "fr": "Services de Sécurité Sociale & Retraite"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء العامل الأجير الحساب الفردي للأجير",
          "fr": "Accès direct au portail officiel : Services de Sécurité Sociale & Retraite"
        },
        "url": "https://cis.cnr.dz/",
        "isOnline": true
      },
      {
        "id": "cnr-srv-11",
        "title": {
          "ar": "تطبيق الهناء تحميل تطبيق الهناء",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق الهناء تحميل تطبيق الهناء",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.cnas.mobile_elhanaa&hl=ar",
        "isOnline": true
      },
      {
        "id": "cnr-srv-12",
        "title": {
          "ar": "تطبيق الحساب الفردي للأجير (CIS) تحميل تطبيق الحساب الفردي للأجير",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق الحساب الفردي للأجير (CIS) تحميل تطبيق الحساب الفردي للأجير",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.cnr.mobi_cis&hl=ar",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ الصندوق الوطني للتقاعد (CNR)؟",
          "fr": "Comment accéder aux services officiels de Caisse Nationale des Retraites (CNR) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ الصندوق الوطني للتقاعد (CNR) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Caisse Nationale des Retraites (CNR) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "commerce",
    "slug": "commerce",
    "category": "finance_economy",
    "name": {
      "ar": "وزارة التجارة الداخلية وضبط السوق الوطنية",
      "fr": "Ministère du Commerce Intérieur et Régulation"
    },
    "acronym": "COMMERCE",
    "ministry": {
      "ar": "وزارة التجارة الداخلية وضبط السوق",
      "fr": "Ministère du Commerce"
    },
    "description": {
      "ar": "تقدم وزارة التجارة والجمارك مجموعة من الخدمات الرقمية التي تتيح للمواطنين الجزائريين الوصول إلى خدمات الوزارة بكل سهولة ويسر، دون الحاجة للتنقل",
      "fr": "Portail détaillé des services publics pour Ministère du Commerce Intérieur et Régulation : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.commerce.gov.dz/ar",
    "portalUrl": "https://play.google.com/store/apps/details?id=com.brenco.rafikcom",
    "iconName": "Store",
    "isPopular": false,
    "services": [
      {
        "id": "commerce-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.commerce.gov.dz/ar",
        "isOnline": true
      },
      {
        "id": "commerce-srv-2",
        "title": {
          "ar": "حمل الآن",
          "fr": "Télécharger l'Application"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: حمل الآن",
          "fr": "Accès direct au portail officiel : Télécharger l'Application"
        },
        "url": "https://play.google.com/store/apps/details?id=com.brenco.rafikcom",
        "isOnline": true
      },
      {
        "id": "commerce-srv-3",
        "title": {
          "ar": "الصندوق الخاص لترقية الصادرات المنصة الرقمية لتسيير الصندوق الخاص لترقية الصادرات",
          "fr": "Fonds Spécial pour la Promotion des Exportations (FSPE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الصندوق الخاص لترقية الصادرات المنصة الرقمية لتسيير الصندوق الخاص لترقية الصادرات",
          "fr": "Accès direct au portail officiel : Fonds Spécial pour la Promotion des Exportations (FSPE)"
        },
        "url": "https://fspe.commerce.gov.dz/",
        "isOnline": true
      },
      {
        "id": "commerce-srv-4",
        "title": {
          "ar": "التصريح والدفع - جباية تيك فضاء التصريح والدفع الإلكترونيين - جباية تيك",
          "fr": "Portail de Télédéclaration Jibaya'tic"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: التصريح والدفع - جباية تيك فضاء التصريح والدفع الإلكترونيين - جباية تيك",
          "fr": "Accès direct au portail officiel : Portail de Télédéclaration Jibaya'tic"
        },
        "url": "https://mfdgi.gov.dz/portailpublic_ar/",
        "isOnline": true
      },
      {
        "id": "commerce-srv-5",
        "title": {
          "ar": "المعلومة التعريفية الملزمة المعلومة التعريفية الملزمة - RTC",
          "fr": "Renseignement Tarifaire Contraignant (RTC — Douanes)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: المعلومة التعريفية الملزمة المعلومة التعريفية الملزمة - RTC",
          "fr": "Accès direct au portail officiel : Renseignement Tarifaire Contraignant (RTC — Douanes)"
        },
        "url": "https://douane.gov.dz/rtc/",
        "isOnline": true
      },
      {
        "id": "commerce-srv-6",
        "title": {
          "ar": "الجمارك الجزائرية الموقع الرسمي للجمارك الجزائرية",
          "fr": "Portail Numérique des Douanes (ALCES / RTC)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الجمارك الجزائرية الموقع الرسمي للجمارك الجزائرية",
          "fr": "Accès direct au portail officiel : Portail Numérique des Douanes (ALCES / RTC)"
        },
        "url": "https://www.douane.gov.dz/?lang=ar",
        "isOnline": true
      },
      {
        "id": "commerce-srv-7",
        "title": {
          "ar": "خلية الإصغاء خلية الإصغاء لوزارة التجارة",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: خلية الإصغاء خلية الإصغاء لوزارة التجارة",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "https://www.commerce.gov.dz/ar/ecrire-a-la-cellule-d-ecoute/",
        "isOnline": true
      },
      {
        "id": "commerce-srv-8",
        "title": {
          "ar": "جدبد منصة تواصل إرسال طلب أو تبليغ، طلب معلومات عامة، تبليغ عن مخالفة، فضاء المستهلك",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد منصة تواصل إرسال طلب أو تبليغ، طلب معلومات عامة، تبليغ عن مخالفة، فضاء المستهلك",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "https://tawassol.commerce.gov.dz/complaint/selecttype",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ وزارة التجارة الداخلية وضبط السوق الوطنية؟",
          "fr": "Comment accéder aux services officiels de Ministère du Commerce Intérieur et Régulation ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ وزارة التجارة الداخلية وضبط السوق الوطنية مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Ministère du Commerce Intérieur et Régulation sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "creg.gov",
    "slug": "creg.gov",
    "category": "energy_water",
    "name": {
      "ar": "لجنة ضبط الكهرباء والغاز (CREG)",
      "fr": "Commission de Régulation de l'Électricité et du Gaz (CREG)"
    },
    "acronym": "CREG",
    "ministry": {
      "ar": "وزارة الطاقة والمناجم",
      "fr": "Ministère de l'Énergie et des Mines"
    },
    "description": {
      "ar": "خدمات لجنة ضبط الكهرباء والغاز CREG في الجزائر: تسعيرة الكهرباء والغاز، محاكاة الفاتورة، منصة إلتماس للطعون وطلبات المعلومات، التوظيف وطرق التواصل",
      "fr": "Portail détaillé des services publics pour Commission de Régulation de l'Électricité et du Gaz (CREG) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://creg.gov.dz/",
    "portalUrl": "https://creg.gov.dz/%d8%a7%d9%84%d8%aa%d8%b3%d8%b9%d9%8a%d8%b1%d8%a9/?lang=ar",
    "iconName": "Zap",
    "isPopular": false,
    "services": [
      {
        "id": "creg.gov-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://creg.gov.dz/",
        "isOnline": true
      },
      {
        "id": "creg.gov-srv-2",
        "title": {
          "ar": "تعرف الآن",
          "fr": "Découvrir les Tarifs"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تعرف الآن",
          "fr": "Accès direct au portail officiel : Découvrir les Tarifs"
        },
        "url": "https://creg.gov.dz/%d8%a7%d9%84%d8%aa%d8%b3%d8%b9%d9%8a%d8%b1%d8%a9/?lang=ar",
        "isOnline": true
      },
      {
        "id": "creg.gov-srv-3",
        "title": {
          "ar": "تسجيل الدخول إلى منصة إلتماس تسجيل الدخول لمنصة إلتماس لإيداع ومتابعة الطعون",
          "fr": "Portail Régulation Électricité & Gaz (CREG)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تسجيل الدخول إلى منصة إلتماس تسجيل الدخول لمنصة إلتماس لإيداع ومتابعة الطعون",
          "fr": "Accès direct au portail officiel : Portail Régulation Électricité & Gaz (CREG)"
        },
        "url": "https://iltimess.creg.dz/register",
        "isOnline": true
      },
      {
        "id": "creg.gov-srv-4",
        "title": {
          "ar": "طلب معلومة عبر منصة إلتماس طلب معلومة، مواطن / مؤسسة",
          "fr": "Portail Régulation Électricité & Gaz (CREG)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب معلومة عبر منصة إلتماس طلب معلومة، مواطن / مؤسسة",
          "fr": "Accès direct au portail officiel : Portail Régulation Électricité & Gaz (CREG)"
        },
        "url": "https://iltimess.creg.dz/demande-information",
        "isOnline": true
      },
      {
        "id": "creg.gov-srv-5",
        "title": {
          "ar": "محاكاة فاتورة الكهرباء والغاز محاكاة فاتورة الكهرباء والغاز",
          "fr": "Simulateur Officiel de Facture Électricité & Gaz (CREG)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: محاكاة فاتورة الكهرباء والغاز محاكاة فاتورة الكهرباء والغاز",
          "fr": "Accès direct au portail officiel : Simulateur Officiel de Facture Électricité & Gaz (CREG)"
        },
        "url": "https://mouhakat.creg.dz/",
        "isOnline": true
      },
      {
        "id": "creg.gov-srv-6",
        "title": {
          "ar": "التوظيف في لجنة ضبط الكهرباء والغاز فرص التوظيف لدى لجنة ضبط الكهرباء والغاز",
          "fr": "Concours de Recrutement & Emploi Public"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: التوظيف في لجنة ضبط الكهرباء والغاز فرص التوظيف لدى لجنة ضبط الكهرباء والغاز",
          "fr": "Accès direct au portail officiel : Concours de Recrutement & Emploi Public"
        },
        "url": "https://creg.gov.dz/%D8%AA%D9%88%D8%B8%D9%8A%D9%81/",
        "isOnline": true
      },
      {
        "id": "creg.gov-srv-7",
        "title": {
          "ar": "منصة الاتصال تواصل مع لجنة ضبط الكهرباء والغاز عبر منصة الاتصال الرسمية.",
          "fr": "Plateforme Numérique Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: منصة الاتصال تواصل مع لجنة ضبط الكهرباء والغاز عبر منصة الاتصال الرسمية.",
          "fr": "Accès direct au portail officiel : Plateforme Numérique Officielle"
        },
        "url": "https://creg.gov.dz/%d8%a7%d8%aa%d8%b5%d8%a7%d9%84/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ لجنة ضبط الكهرباء والغاز (CREG)؟",
          "fr": "Comment accéder aux services officiels de Commission de Régulation de l'Électricité et du Gaz (CREG) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ لجنة ضبط الكهرباء والغاز (CREG) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Commission de Régulation de l'Électricité et du Gaz (CREG) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "dgfp.gov",
    "slug": "dgfp.gov",
    "category": "ministries",
    "name": {
      "ar": "المديرية العامة للوظيفة العمومية والإصلاح الإداري (DGFP)",
      "fr": "Direction Générale de la Fonction Publique (DGFP)"
    },
    "acronym": "DGFP",
    "ministry": {
      "ar": "الوزارة الأولى — الوظيفة العمومية",
      "fr": "Fonction Publique & Réforme Administrative"
    },
    "description": {
      "ar": "المنصة الرقمية الرسمية للمديرية العامة للوظيفة العمومية والإصلاح الإداري (DGAFP) بالجزائر، توفر خدمات إلكترونية للمواطنين والموظفين تشمل طلب المعادلات الإدارية، متابعة مس",
      "fr": "Portail détaillé des services publics pour Direction Générale de la Fonction Publique (DGFP) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.dgfp.gov.dz/",
    "portalUrl": "https://equivalence.dgfp.gov.dz/?page=home",
    "iconName": "Building2",
    "isPopular": false,
    "services": [
      {
        "id": "dgfp.gov-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.dgfp.gov.dz/",
        "isOnline": true
      },
      {
        "id": "dgfp.gov-srv-2",
        "title": {
          "ar": "أحصل عليها الآن",
          "fr": "Obtenir l'Attestation"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أحصل عليها الآن",
          "fr": "Accès direct au portail officiel : Obtenir l'Attestation"
        },
        "url": "https://equivalence.dgfp.gov.dz/?page=home",
        "isOnline": true
      },
      {
        "id": "dgfp.gov-srv-3",
        "title": {
          "ar": "إشهار عروض التوظيف الأرضية الرقمية لإشهار عروض التوظيف",
          "fr": "Concours de Recrutement & Emploi Public"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إشهار عروض التوظيف الأرضية الرقمية لإشهار عروض التوظيف",
          "fr": "Accès direct au portail officiel : Concours de Recrutement & Emploi Public"
        },
        "url": "http://www.concours-fonction-publique.gov.dz/",
        "isOnline": true
      },
      {
        "id": "dgfp.gov-srv-4",
        "title": {
          "ar": "اتصل بنا تواصل مع فريق الدعم للمديرية العامة للوظيفة العمومية و الإصلاح الإداري",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: اتصل بنا تواصل مع فريق الدعم للمديرية العامة للوظيفة العمومية و الإصلاح الإداري",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "http://www.concours-fonction-publique.gov.dz/?page=contact",
        "isOnline": true
      },
      {
        "id": "dgfp.gov-srv-5",
        "title": {
          "ar": "النصوص القانونية و التنظيمية تصفح وحمل النصوص القانونية المنظمة للوظيفة العمومية والإصلاح الإداري",
          "fr": "Textes Législatifs et Réglementaires de la Fonction Publique"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: النصوص القانونية و التنظيمية تصفح وحمل النصوص القانونية المنظمة للوظيفة العمومية والإصلاح الإداري",
          "fr": "Accès direct au portail officiel : Textes Législatifs et Réglementaires de la Fonction Publique"
        },
        "url": "http://www.concours-fonction-publique.gov.dz/?page=legal",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ المديرية العامة للوظيفة العمومية والإصلاح الإداري (DGFP)؟",
          "fr": "Comment accéder aux services officiels de Direction Générale de la Fonction Publique (DGFP) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ المديرية العامة للوظيفة العمومية والإصلاح الإداري (DGFP) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Direction Générale de la Fonction Publique (DGFP) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "dgsn",
    "slug": "dgsn",
    "category": "justice_interior",
    "name": {
      "ar": "المديرية العامة للأمن الوطني — الشرطة الجزائرية (DGSN)",
      "fr": "Direction Générale de la Sûreté Nationale (DGSN)"
    },
    "acronym": "DGSN",
    "ministry": {
      "ar": "وزارة الداخلية والجماعات المحلية",
      "fr": "Ministère de l'Intérieur"
    },
    "description": {
      "ar": "تقدم المديرية العامة العامة للأمن الوطني مجموعة من الخدمات الرقمية التي تهدف إلى تسهيل الوصول إلى الخدمات الأمنية للمواطنين، تطبيقات . هذه الخدمات تتيح للمواطنين الحصول ع",
      "fr": "Portail détaillé des services publics pour Direction Générale de la Sûreté Nationale (DGSN) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.algeriepolice.dz/qnss",
    "portalUrl": "https://www.dgsn.dz/",
    "iconName": "ShieldAlert",
    "isPopular": true,
    "services": [
      {
        "id": "dgsn-srv-1",
        "title": {
          "ar": "المشاركة في الاستبيان",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: المشاركة في الاستبيان",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "https://www.algeriepolice.dz/qnss",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-2",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.dgsn.dz/",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-3",
        "title": {
          "ar": "تقدم الآن",
          "fr": "Postuler Maintenant"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تقدم الآن",
          "fr": "Accès direct au portail officiel : Postuler Maintenant"
        },
        "url": "https://www.dgsn.dz/?-%D8%A5%D8%AF%D9%84%D8%A7%D8%A1-%D8%A8%D8%B4%D9%87%D8%A7%D8%AF%D8%A9,583-",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-4",
        "title": {
          "ar": "جدبد توظيف ضباط شرطة رئيسيين إعلان عن توظيف ضباط شرطة رئيسيين ذكور وإناث",
          "fr": "Concours de Recrutement & Emploi Public"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد توظيف ضباط شرطة رئيسيين إعلان عن توظيف ضباط شرطة رئيسيين ذكور وإناث",
          "fr": "Accès direct au portail officiel : Concours de Recrutement & Emploi Public"
        },
        "url": "https://www.dgsn.dz/24395",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-5",
        "title": {
          "ar": "الاستبيان الوطني حول الشعور بالأمن شارك في الاستبيان الوطني حول الشعور بالأمن وتحسين الخدمة",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الاستبيان الوطني حول الشعور بالأمن شارك في الاستبيان الوطني حول الشعور بالأمن وتحسين الخدمة",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "https://www.algeriepolice.dz/qnss/survey",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-6",
        "title": {
          "ar": "منصة التصريح بضياع الوثائق منصة التصريح بضياع الوثائق",
          "fr": "Plateforme Numérique Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: منصة التصريح بضياع الوثائق منصة التصريح بضياع الوثائق",
          "fr": "Accès direct au portail officiel : Plateforme Numérique Officielle"
        },
        "url": "https://www.dgsn.dz/e-declaration/",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-7",
        "title": {
          "ar": "بحث في فائدة العائلات بحث في فائدة العائلات",
          "fr": "Avis de Recherche dans l'Intérêt des Familles (DGSN)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: بحث في فائدة العائلات بحث في فائدة العائلات",
          "fr": "Accès direct au portail officiel : Avis de Recherche dans l'Intérêt des Familles (DGSN)"
        },
        "url": "https://www.dgsn.dz/?-%D8%A8%D8%AD%D8%AB-%D9%81%D9%8A-%D9%81%D8%A7%D8%A6%D8%AF%D8%A9-",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-8",
        "title": {
          "ar": "إستمارة الخدمة الشرطية إستمارة الخدمة الشرطية",
          "fr": "Questionnaire sur la Qualité du Service Policier (DGSN)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إستمارة الخدمة الشرطية إستمارة الخدمة الشرطية",
          "fr": "Accès direct au portail officiel : Questionnaire sur la Qualité du Service Policier (DGSN)"
        },
        "url": "https://www.algeriepolice.dz/qsc",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-9",
        "title": {
          "ar": "الدليــــل الهــــــاتفي الدليــــل الهــــــاتفي",
          "fr": "Annuaire Téléphonique des Services de Police (DGSN)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الدليــــل الهــــــاتفي الدليــــل الهــــــاتفي",
          "fr": "Accès direct au portail officiel : Annuaire Téléphonique des Services de Police (DGSN)"
        },
        "url": "https://www.dgsn.dz/?-%D8%AF%D9%84%D9%8A%D9%84-",
        "isOnline": true
      },
      {
        "id": "dgsn-srv-10",
        "title": {
          "ar": "تطبيق ألو الشرطة تطبيق ألو الشرطة",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق ألو الشرطة تطبيق ألو الشرطة",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=allochorta.algeriepolice.dz&hl=ar",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ المديرية العامة للأمن الوطني — الشرطة الجزائرية (DGSN)؟",
          "fr": "Comment accéder aux services officiels de Direction Générale de la Sûreté Nationale (DGSN) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ المديرية العامة للأمن الوطني — الشرطة الجزائرية (DGSN) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Direction Générale de la Sûreté Nationale (DGSN) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "djezzy",
    "slug": "djezzy",
    "category": "telecom",
    "name": {
      "ar": "جازي الجزائر للاتصالات (Djezzy)",
      "fr": "Opérateur Mobile Djezzy Algérie"
    },
    "acronym": "DJEZZY",
    "ministry": {
      "ar": "متعامل هاتف نقال معتمد",
      "fr": "Opérateur Télécom Agréé"
    },
    "description": {
      "ar": "خدمات جازي الجزائر Djezzy Algeria، تشمل تعبئة الرصيد ودفع الفواتير عبر الإنترنت وتطبيق My Djezzy وخدمة الزبائن والعروض والإنترنت وخدمات الهاتف النقال الرقمية",
      "fr": "Portail détaillé des services publics pour Opérateur Mobile Djezzy Algérie : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://moncompte.djezzy.dz/ar/guest/recharge",
    "portalUrl": "https://play.google.com/store/apps/details?id=com.djezzy.internet",
    "iconName": "Smartphone",
    "isPopular": false,
    "services": [
      {
        "id": "djezzy-srv-1",
        "title": {
          "ar": "تعبئة رصيد الهاتف وتخليص الفواتير تعبئة رصيد جازي بكل سهولة بإستخدام البطاقة الذهبية",
          "fr": "Rechargement de Crédit Mobile en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تعبئة رصيد الهاتف وتخليص الفواتير تعبئة رصيد جازي بكل سهولة بإستخدام البطاقة الذهبية",
          "fr": "Accès direct au portail officiel : Rechargement de Crédit Mobile en Ligne"
        },
        "url": "https://moncompte.djezzy.dz/ar/guest/recharge",
        "isOnline": true
      },
      {
        "id": "djezzy-srv-2",
        "title": {
          "ar": "تطبيق djezzy إستمتع مع تطبيق djezzy والخدمات الأخرى",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق djezzy إستمتع مع تطبيق djezzy والخدمات الأخرى",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=com.djezzy.internet",
        "isOnline": true
      },
      {
        "id": "djezzy-srv-3",
        "title": {
          "ar": "الموقع الرسمي الإطلاع على الموقع الرسمي لجازي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي الإطلاع على الموقع الرسمي لجازي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.djezzy.dz/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ جازي الجزائر للاتصالات (Djezzy)؟",
          "fr": "Comment accéder aux services officiels de Opérateur Mobile Djezzy Algérie ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ جازي الجزائر للاتصالات (Djezzy) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Opérateur Mobile Djezzy Algérie sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "douane",
    "slug": "douane",
    "category": "finance_economy",
    "name": {
      "ar": "المديرية العامة للجمارك الجزائرية (ALCES)",
      "fr": "Direction Générale des Douanes Algériennes (ALCES)"
    },
    "acronym": "DOUANE",
    "ministry": {
      "ar": "وزارة المالية — الجمارك",
      "fr": "Ministère des Finances — Douanes"
    },
    "description": {
      "ar": "دليل خدمات الجمارك الجزائرية الإلكترونية: منصة ALCES، التصريح الجمركي، محاكاة الرسوم، تسجيل الشركات والاستفسارات عن بعد",
      "fr": "Portail détaillé des services publics pour Direction Générale des Douanes Algériennes (ALCES) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.douane.gov.dz/?lang=ar",
    "portalUrl": "https://alces.douane.gov.dz/main",
    "iconName": "Globe",
    "isPopular": true,
    "services": [
      {
        "id": "douane-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.douane.gov.dz/?lang=ar",
        "isOnline": true
      },
      {
        "id": "douane-srv-2",
        "title": {
          "ar": "سجل الآن",
          "fr": "S'inscrire en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سجل الآن",
          "fr": "Accès direct au portail officiel : S'inscrire en Ligne"
        },
        "url": "https://alces.douane.gov.dz/main",
        "isOnline": true
      },
      {
        "id": "douane-srv-3",
        "title": {
          "ar": "المعلومة التعريفية الملزمة المعلومة التعريفية الملزمة - Consultation RTC",
          "fr": "Consultation Renseignement Tarifaire Contraignant (RTC)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: المعلومة التعريفية الملزمة المعلومة التعريفية الملزمة - Consultation RTC",
          "fr": "Accès direct au portail officiel : Consultation Renseignement Tarifaire Contraignant (RTC)"
        },
        "url": "https://douane.gov.dz/rtc/",
        "isOnline": true
      },
      {
        "id": "douane-srv-4",
        "title": {
          "ar": "جدبد ALCES Douane منصة ALCES douane للخدمات الرقمية عن بعد",
          "fr": "Portail Numérique des Douanes (ALCES / RTC)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد ALCES Douane منصة ALCES douane للخدمات الرقمية عن بعد",
          "fr": "Accès direct au portail officiel : Portail Numérique des Douanes (ALCES / RTC)"
        },
        "url": "https://alces.douane.gov.dz/login",
        "isOnline": true
      },
      {
        "id": "douane-srv-5",
        "title": {
          "ar": "جدبد تسجيل الشركة ALCES douane تسجيل الشركة",
          "fr": "Inscription Entreprise sur ALCES Douanes"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد تسجيل الشركة ALCES douane تسجيل الشركة",
          "fr": "Accès direct au portail officiel : Inscription Entreprise sur ALCES Douanes"
        },
        "url": "https://alces.douane.gov.dz/pot/mp/comgmt/pot0003-s1?menuParam=use",
        "isOnline": true
      },
      {
        "id": "douane-srv-6",
        "title": {
          "ar": "جدبد تسجيل فردي ALCES douane تسجيل فردي",
          "fr": "Inscription Individuelle sur ALCES Douanes"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد تسجيل فردي ALCES douane تسجيل فردي",
          "fr": "Accès direct au portail officiel : Inscription Individuelle sur ALCES Douanes"
        },
        "url": "https://alces.douane.gov.dz/pot/mp/psnuse/pot0001-s1",
        "isOnline": true
      },
      {
        "id": "douane-srv-7",
        "title": {
          "ar": "جدبد محاكاة تعريفة جمركية محاكاة تعريفة جمركية عند إقتناء سيارة",
          "fr": "Portail Numérique des Douanes (ALCES / RTC)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد محاكاة تعريفة جمركية محاكاة تعريفة جمركية عند إقتناء سيارة",
          "fr": "Accès direct au portail officiel : Portail Numérique des Douanes (ALCES / RTC)"
        },
        "url": "https://alces.douane.gov.dz/pot/mp/vhcl/pot0200-q1",
        "isOnline": true
      },
      {
        "id": "douane-srv-8",
        "title": {
          "ar": "تواصل معنا التواصل مع فريق عمل الجمارك الجزائرية",
          "fr": "Portail Numérique des Douanes (ALCES / RTC)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تواصل معنا التواصل مع فريق عمل الجمارك الجزائرية",
          "fr": "Accès direct au portail officiel : Portail Numérique des Douanes (ALCES / RTC)"
        },
        "url": "https://www.douane.gov.dz/?page=reclamation&type_service=information&lang=ar",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ المديرية العامة للجمارك الجزائرية (ALCES)؟",
          "fr": "Comment accéder aux services officiels de Direction Générale des Douanes Algériennes (ALCES) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ المديرية العامة للجمارك الجزائرية (ALCES) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Direction Générale des Douanes Algériennes (ALCES) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "dzexam1",
    "slug": "dzexam1",
    "category": "education_higher",
    "name": {
      "ar": "بنك الفروض والاختبارات DZExam1",
      "fr": "Banque d'Examens et Devoirs DZExam1"
    },
    "acronym": "DZEXAM1",
    "ministry": {
      "ar": "بوابة تعليمية موازية",
      "fr": "Ressources Pédagogiques Algérie"
    },
    "description": {
      "ar": "جميع فروض واختبارات شهادة التعليم المتوسط، البكالوريا، والابتدائي مع التصحيح النموذجي لجميع المواد والمستويات التعليمية في الجزائر",
      "fr": "Portail détaillé des services publics pour Banque d'Examens et Devoirs DZExam1 : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://dzexam1.com/index.html?p=subject&l=ep&g=0ap&s=mathematiques",
    "portalUrl": "https://dzexam1.com/index.html?p=subject&l=ep&g=1ap&s=mathematiques",
    "iconName": "BookOpen",
    "isPopular": false,
    "services": [
      {
        "id": "dzexam1-srv-1",
        "title": {
          "ar": "القسم التحضيري نماذج اختبارية للقسم التحضيري",
          "fr": "Classe Préparatoire — Sujets et Exercices"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القسم التحضيري نماذج اختبارية للقسم التحضيري",
          "fr": "Accès direct au portail officiel : Classe Préparatoire — Sujets et Exercices"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=ep&g=0ap&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-2",
        "title": {
          "ar": "السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "Accès direct au portail officiel : 1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=ep&g=1ap&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-3",
        "title": {
          "ar": "السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "Accès direct au portail officiel : 2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=ep&g=2ap&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-4",
        "title": {
          "ar": "السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "Accès direct au portail officiel : 3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=ep&g=3ap&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-5",
        "title": {
          "ar": "السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "Accès direct au portail officiel : 4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=ep&g=4ap&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-6",
        "title": {
          "ar": "السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "Accès direct au portail officiel : 5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=ep&g=5ap&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-7",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Accès direct au portail officiel : Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=ep&g=bep&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-8",
        "title": {
          "ar": "السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "Accès direct au portail officiel : 1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=em&g=1am&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-9",
        "title": {
          "ar": "السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "Accès direct au portail officiel : 2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=em&g=2am&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-10",
        "title": {
          "ar": "السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "Accès direct au portail officiel : 3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=em&g=3am&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-11",
        "title": {
          "ar": "السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "Accès direct au portail officiel : 4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=em&g=4am&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-12",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Accès direct au portail officiel : Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=em&g=bem&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-13",
        "title": {
          "ar": "السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "Accès direct au portail officiel : 1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=es&g=1as&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-14",
        "title": {
          "ar": "السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "Accès direct au portail officiel : 2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=es&g=2as&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-15",
        "title": {
          "ar": "السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "Accès direct au portail officiel : 3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=es&g=3as&s=mathematiques",
        "isOnline": true
      },
      {
        "id": "dzexam1-srv-16",
        "title": {
          "ar": "مواضيع وحلول شهادة البكالوريا مواضيع وحلول شهادة البكالوريا",
          "fr": "Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة البكالوريا مواضيع وحلول شهادة البكالوريا",
          "fr": "Accès direct au portail officiel : Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "url": "https://dzexam1.com/index.html?p=subject&l=es&g=bac&s=mathematiques",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ بنك الفروض والاختبارات DZExam1؟",
          "fr": "Comment accéder aux services officiels de Banque d'Examens et Devoirs DZExam1 ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ بنك الفروض والاختبارات DZExam1 مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Banque d'Examens et Devoirs DZExam1 sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "dzexams",
    "slug": "dzexams",
    "category": "education_higher",
    "name": {
      "ar": "موقع DZExams للامتحانات المدرسية والحلول",
      "fr": "Portail DZExams — Sujets BEM, BAC & Primaire"
    },
    "acronym": "DZEXAMS",
    "ministry": {
      "ar": "بوابة تعليمية جزائرية",
      "fr": "Ressources Pédagogiques Algérie"
    },
    "description": {
      "ar": "حمّل فروض واختبارات التعليم الابتدائي والمتوسط والثانوي في الجزائر، مع مواضيع شهادة التعليم المتوسط والبكالوريا والتصحيحات النموذجية حسب الطور والمادة.",
      "fr": "Portail détaillé des services publics pour Portail DZExams — Sujets BEM, BAC & Primaire : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.dzexams.com/ar/0ap",
    "portalUrl": "https://www.dzexams.com/ar/1ap",
    "iconName": "BookOpen",
    "isPopular": false,
    "services": [
      {
        "id": "dzexams-srv-1",
        "title": {
          "ar": "القسم التحضيري نماذج الإختبارات والتمارين للقسم التحضيري",
          "fr": "Classe Préparatoire — Sujets et Exercices"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القسم التحضيري نماذج الإختبارات والتمارين للقسم التحضيري",
          "fr": "Accès direct au portail officiel : Classe Préparatoire — Sujets et Exercices"
        },
        "url": "https://www.dzexams.com/ar/0ap",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-2",
        "title": {
          "ar": "السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "Accès direct au portail officiel : 1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.com/ar/1ap",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-3",
        "title": {
          "ar": "السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "Accès direct au portail officiel : 2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.com/ar/2ap",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-4",
        "title": {
          "ar": "السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "Accès direct au portail officiel : 3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.com/ar/3ap",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-5",
        "title": {
          "ar": "السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "Accès direct au portail officiel : 4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.com/ar/4ap",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-6",
        "title": {
          "ar": "السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "Accès direct au portail officiel : 5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.com/ar/5ap",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-7",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Accès direct au portail officiel : Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "url": "https://www.dzexams.com/ar/bep",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-8",
        "title": {
          "ar": "السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "Accès direct au portail officiel : 1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.com/ar/1im",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-9",
        "title": {
          "ar": "السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "Accès direct au portail officiel : 2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.com/ar/2im",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-10",
        "title": {
          "ar": "السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "Accès direct au portail officiel : 3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.com/ar/3im",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-11",
        "title": {
          "ar": "السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "Accès direct au portail officiel : 4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.com/ar/4im",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-12",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Accès direct au portail officiel : Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "url": "https://www.dzexams.com/ar/bem",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-13",
        "title": {
          "ar": "السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "Accès direct au portail officiel : 1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.com/ar/1as",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-14",
        "title": {
          "ar": "السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "Accès direct au portail officiel : 2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.com/ar/2as",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-15",
        "title": {
          "ar": "السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "Accès direct au portail officiel : 3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.com/ar/3as",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-16",
        "title": {
          "ar": "مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Accès direct au portail officiel : Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "url": "https://www.dzexams.com/ar/bac",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-17",
        "title": {
          "ar": "مكتبة تعليمية مكتبة تعليمية غنية بالقصص， الكتب، الألغاز، والمسائل اللغوية والرياضية للأطفال",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مكتبة تعليمية مكتبة تعليمية غنية بالقصص， الكتب، الألغاز، والمسائل اللغوية والرياضية للأطفال",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.com/ar/library",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-18",
        "title": {
          "ar": "القرآن الكريم القرآن الكريم",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القرآن الكريم القرآن الكريم",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.com/ar/quran",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-19",
        "title": {
          "ar": "وثائق بيداغوجية وثائق بيداغوجية للأساتذة",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: وثائق بيداغوجية وثائق بيداغوجية للأساتذة",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.com/ar/teacher",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-20",
        "title": {
          "ar": "قنوات تعليمية قنوات تعليمية متنوعة",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: قنوات تعليمية قنوات تعليمية متنوعة",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.com/ar/youtube",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-21",
        "title": {
          "ar": "نصائح و توجيهات نصائح و توجيهات تعليمية",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: نصائح و توجيهات نصائح و توجيهات تعليمية",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.com/ar/advices",
        "isOnline": true
      },
      {
        "id": "dzexams-srv-22",
        "title": {
          "ar": "أخبار قطاع التربية الأخبار الرسمية لقطاع التربية والتعليم في الجزائر",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أخبار قطاع التربية الأخبار الرسمية لقطاع التربية والتعليم في الجزائر",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.com/ar/news",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ موقع DZExams للامتحانات المدرسية والحلول؟",
          "fr": "Comment accéder aux services officiels de Portail DZExams — Sujets BEM, BAC & Primaire ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ موقع DZExams للامتحانات المدرسية والحلول مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Portail DZExams — Sujets BEM, BAC & Primaire sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "dzexams.pro",
    "slug": "dzexams.pro",
    "category": "education_higher",
    "name": {
      "ar": "منصة DZExams Pro للفروض والنماذج المصححة",
      "fr": "DZExams Pro — Annales et Corrigés Scolaires"
    },
    "acronym": "DZEXAMSPRO",
    "ministry": {
      "ar": "بوابة تعليمية جزائرية",
      "fr": "Ressources Pédagogiques Algérie"
    },
    "description": {
      "ar": "جميع فروض واختبارات شهادة التعليم المتوسط، البكالوريا، والابتدائي مع التصحيح النموذجي لجميع المواد والمستويات التعليمية في الجزائر",
      "fr": "Portail détaillé des services publics pour DZExams Pro — Annales et Corrigés Scolaires : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.dzexams.pro/ar/0ap.php",
    "portalUrl": "https://www.dzexams.pro/ar/1ap.php",
    "iconName": "BookOpen",
    "isPopular": false,
    "services": [
      {
        "id": "dzexams.pro-srv-1",
        "title": {
          "ar": "القسم التحضيري نماذج الإختبارات والتمارين للقسم التحضيري",
          "fr": "Classe Préparatoire — Sujets et Exercices"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القسم التحضيري نماذج الإختبارات والتمارين للقسم التحضيري",
          "fr": "Accès direct au portail officiel : Classe Préparatoire — Sujets et Exercices"
        },
        "url": "https://www.dzexams.pro/ar/0ap.php",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-2",
        "title": {
          "ar": "السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "Accès direct au portail officiel : 1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.pro/ar/1ap.php",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-3",
        "title": {
          "ar": "السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "Accès direct au portail officiel : 2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.pro/ar/2ap",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-4",
        "title": {
          "ar": "السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "Accès direct au portail officiel : 3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.pro/ar/3ap",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-5",
        "title": {
          "ar": "السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "Accès direct au portail officiel : 4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.pro/ar/4ap",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-6",
        "title": {
          "ar": "السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "Accès direct au portail officiel : 5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "url": "https://www.dzexams.pro/ar/5ap",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-7",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Accès direct au portail officiel : Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "url": "https://www.dzexams.pro/ar/bep",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-8",
        "title": {
          "ar": "السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "Accès direct au portail officiel : 1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.pro/ar/1am",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-9",
        "title": {
          "ar": "السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "Accès direct au portail officiel : 2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.pro/ar/2am",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-10",
        "title": {
          "ar": "السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "Accès direct au portail officiel : 3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.pro/ar/3am",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-11",
        "title": {
          "ar": "السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "Accès direct au portail officiel : 4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.pro/ar/4am",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-12",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Accès direct au portail officiel : Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "url": "https://www.dzexams.pro/ar/bem",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-13",
        "title": {
          "ar": "السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "Accès direct au portail officiel : 1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.pro/ar/1as",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-14",
        "title": {
          "ar": "السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "Accès direct au portail officiel : 2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.pro/ar/2as",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-15",
        "title": {
          "ar": "السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "Accès direct au portail officiel : 3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "url": "https://www.dzexams.pro/ar/3as",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-16",
        "title": {
          "ar": "مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Accès direct au portail officiel : Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "url": "https://www.dzexams.pro/ar/bac",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-17",
        "title": {
          "ar": "مكتبة تعليمية مكتبة تعليمية غنية بالقصص， الكتب، الألغاز، والمسائل اللغوية والرياضية للأطفال",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مكتبة تعليمية مكتبة تعليمية غنية بالقصص， الكتب، الألغاز، والمسائل اللغوية والرياضية للأطفال",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.pro/ar/library",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-18",
        "title": {
          "ar": "القرآن الكريم القرآن الكريم",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القرآن الكريم القرآن الكريم",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.pro/ar/quran",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-19",
        "title": {
          "ar": "وثائق بيداغوجية وثائق بيداغوجية للأساتذة",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: وثائق بيداغوجية وثائق بيداغوجية للأساتذة",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.pro/ar/teacher",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-20",
        "title": {
          "ar": "قنوات تعليمية قنوات تعليمية متنوعة",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: قنوات تعليمية قنوات تعليمية متنوعة",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.pro/ar/youtube",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-21",
        "title": {
          "ar": "نصائح و توجيهات نصائح و توجيهات تعليمية",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: نصائح و توجيهات نصائح و توجيهات تعليمية",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.pro/ar/advices",
        "isOnline": true
      },
      {
        "id": "dzexams.pro-srv-22",
        "title": {
          "ar": "أخبار قطاع التربية الأخبار الرسمية لقطاع التربية والتعليم في الجزائر",
          "fr": "Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أخبار قطاع التربية الأخبار الرسمية لقطاع التربية والتعليم في الجزائر",
          "fr": "Accès direct au portail officiel : Ressources Éducatives, Bibliothèque & Pédagogie"
        },
        "url": "https://www.dzexams.pro/ar/news",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ منصة DZExams Pro للفروض والنماذج المصححة؟",
          "fr": "Comment accéder aux services officiels de DZExams Pro — Annales et Corrigés Scolaires ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ منصة DZExams Pro للفروض والنماذج المصححة مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de DZExams Pro — Annales et Corrigés Scolaires sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "dztests",
    "slug": "dztests",
    "category": "education_higher",
    "name": {
      "ar": "بوابة DZTests للتقييم والنماذج التعليمية",
      "fr": "DZTests — Devoirs & Tests Scolaires Corrigés"
    },
    "acronym": "DZTESTS",
    "ministry": {
      "ar": "بوابة تعليمية جزائرية",
      "fr": "Ressources Pédagogiques Algérie"
    },
    "description": {
      "ar": "جميع فروض واختبارات شهادة التعليم المتوسط، البكالوريا، والابتدائي مع التصحيح النموذجي لجميع المواد والمستويات التعليمية في الجزائر",
      "fr": "Portail détaillé des services publics pour DZTests — Devoirs & Tests Scolaires Corrigés : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://dztests.com/0ap/",
    "portalUrl": "https://dztests.com/1ap/",
    "iconName": "BookOpen",
    "isPopular": false,
    "services": [
      {
        "id": "dztests-srv-1",
        "title": {
          "ar": "القسم التحضيري نماذج الإختبارات والتمارين للقسم التحضيري",
          "fr": "Classe Préparatoire — Sujets et Exercices"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القسم التحضيري نماذج الإختبارات والتمارين للقسم التحضيري",
          "fr": "Accès direct au portail officiel : Classe Préparatoire — Sujets et Exercices"
        },
        "url": "https://dztests.com/0ap/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-2",
        "title": {
          "ar": "السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "Accès direct au portail officiel : 1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "url": "https://dztests.com/1ap/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-3",
        "title": {
          "ar": "السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "Accès direct au portail officiel : 2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "url": "https://dztests.com/2ap/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-4",
        "title": {
          "ar": "السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "Accès direct au portail officiel : 3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "url": "https://dztests.com/3ap/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-5",
        "title": {
          "ar": "السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "Accès direct au portail officiel : 4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "url": "https://dztests.com/4ap/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-6",
        "title": {
          "ar": "السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "Accès direct au portail officiel : 5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "url": "https://dztests.com/5ap/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-7",
        "title": {
          "ar": "السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "Accès direct au portail officiel : 1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "url": "https://dztests.com/1am/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-8",
        "title": {
          "ar": "السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "Accès direct au portail officiel : 2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "url": "https://dztests.com/2am/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-9",
        "title": {
          "ar": "السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "Accès direct au portail officiel : 3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "url": "https://dztests.com/3am/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-10",
        "title": {
          "ar": "السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "Accès direct au portail officiel : 4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "url": "https://dztests.com/4am/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-11",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Accès direct au portail officiel : Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "url": "https://dztests.com/bem/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-12",
        "title": {
          "ar": "السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "Accès direct au portail officiel : 1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "url": "https://dztests.com/1as/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-13",
        "title": {
          "ar": "السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "Accès direct au portail officiel : 2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "url": "https://dztests.com/2as/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-14",
        "title": {
          "ar": "السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "Accès direct au portail officiel : 3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "url": "https://dztests.com/3as/",
        "isOnline": true
      },
      {
        "id": "dztests-srv-15",
        "title": {
          "ar": "مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Accès direct au portail officiel : Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "url": "https://dztests.com/bac/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ بوابة DZTests للتقييم والنماذج التعليمية؟",
          "fr": "Comment accéder aux services officiels de DZTests — Devoirs & Tests Scolaires Corrigés ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ بوابة DZTests للتقييم والنماذج التعليمية مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de DZTests — Devoirs & Tests Scolaires Corrigés sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "ecolerradja",
    "slug": "ecolerradja",
    "category": "education_higher",
    "name": {
      "ar": "مكتبة مدرسة الرجاء الإلكترونية للامتحانات",
      "fr": "École Erradja — Ressources & Annales Scolaires"
    },
    "acronym": "ERRADJA",
    "ministry": {
      "ar": "بوابة تعليمية جزائرية",
      "fr": "Ressources Pédagogiques Algérie"
    },
    "description": {
      "ar": "مواضيع الفروض والاختبارات لجميع الأطوار التعليمية في الجزائر مع دروس ومراجعات مفيدة للتلاميذ",
      "fr": "Portail détaillé des services publics pour École Erradja — Ressources & Annales Scolaires : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://ecolerradja.com/exams/1ap",
    "portalUrl": "https://ecolerradja.com/exams/2ap",
    "iconName": "BookOpen",
    "isPopular": false,
    "services": [
      {
        "id": "ecolerradja-srv-1",
        "title": {
          "ar": "السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "Accès direct au portail officiel : 1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "url": "https://ecolerradja.com/exams/1ap",
        "isOnline": true
      },
      {
        "id": "ecolerradja-srv-2",
        "title": {
          "ar": "السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "Accès direct au portail officiel : 2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "url": "https://ecolerradja.com/exams/2ap",
        "isOnline": true
      },
      {
        "id": "ecolerradja-srv-3",
        "title": {
          "ar": "السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "Accès direct au portail officiel : 3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "url": "https://ecolerradja.com/exams/3ap",
        "isOnline": true
      },
      {
        "id": "ecolerradja-srv-4",
        "title": {
          "ar": "السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "Accès direct au portail officiel : 4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "url": "https://ecolerradja.com/exams/4ap",
        "isOnline": true
      },
      {
        "id": "ecolerradja-srv-5",
        "title": {
          "ar": "السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "Accès direct au portail officiel : 5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "url": "https://ecolerradja.com/exams/5ap",
        "isOnline": true
      },
      {
        "id": "ecolerradja-srv-6",
        "title": {
          "ar": "السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "Accès direct au portail officiel : 1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "url": "https://ecolerradja.com/exams/1am",
        "isOnline": true
      },
      {
        "id": "ecolerradja-srv-7",
        "title": {
          "ar": "السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "Accès direct au portail officiel : 2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "url": "https://ecolerradja.com/exams/2am",
        "isOnline": true
      },
      {
        "id": "ecolerradja-srv-8",
        "title": {
          "ar": "السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "Accès direct au portail officiel : 3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "url": "https://ecolerradja.com/exams/3am",
        "isOnline": true
      },
      {
        "id": "ecolerradja-srv-9",
        "title": {
          "ar": "السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "Accès direct au portail officiel : 4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "url": "https://ecolerradja.com/exams/4am",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ مكتبة مدرسة الرجاء الإلكترونية للامتحانات؟",
          "fr": "Comment accéder aux services officiels de École Erradja — Ressources & Annales Scolaires ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ مكتبة مدرسة الرجاء الإلكترونية للامتحانات مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de École Erradja — Ressources & Annales Scolaires sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "eddirasa",
    "slug": "eddirasa",
    "category": "education_higher",
    "name": {
      "ar": "موقع الدراسة الجزائري (Eddirasa)",
      "fr": "Portail Eddirasa — Cours, Sujets & Examens"
    },
    "acronym": "EDDIRASA",
    "ministry": {
      "ar": "بوابة تعليمية جزائرية",
      "fr": "Ressources Pédagogiques Algérie"
    },
    "description": {
      "ar": "جميع فروض واختبارات شهادة التعليم المتوسط، البكالوريا، والابتدائي مع التصحيح النموذجي لجميع المواد والمستويات التعليمية في الجزائر",
      "fr": "Portail détaillé des services publics pour Portail Eddirasa — Cours, Sujets & Examens : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://eddirasa.com/ens-pri/preparatory/",
    "portalUrl": "https://eddirasa.com/ens-pri/first-primary/",
    "iconName": "BookOpen",
    "isPopular": false,
    "services": [
      {
        "id": "eddirasa-srv-1",
        "title": {
          "ar": "القسم التحضيري نماذج الإختبارات والتمارين للقسم التحضيري",
          "fr": "Classe Préparatoire — Sujets et Exercices"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القسم التحضيري نماذج الإختبارات والتمارين للقسم التحضيري",
          "fr": "Accès direct au portail officiel : Classe Préparatoire — Sujets et Exercices"
        },
        "url": "https://eddirasa.com/ens-pri/preparatory/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-2",
        "title": {
          "ar": "السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "Accès direct au portail officiel : 1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "url": "https://eddirasa.com/ens-pri/first-primary/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-3",
        "title": {
          "ar": "السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "Accès direct au portail officiel : 2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "url": "https://eddirasa.com/ens-pri/second-primary/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-4",
        "title": {
          "ar": "السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "Accès direct au portail officiel : 3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "url": "https://eddirasa.com/ens-pri/third-primary/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-5",
        "title": {
          "ar": "السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "Accès direct au portail officiel : 4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "url": "https://eddirasa.com/ens-pri/fourth-primary/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-6",
        "title": {
          "ar": "السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "Accès direct au portail officiel : 5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "url": "https://eddirasa.com/ens-pri/fifth-primary/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-7",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Accès direct au portail officiel : Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "url": "https://eddirasa.com/cinq-solutions/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-8",
        "title": {
          "ar": "السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "Accès direct au portail officiel : 1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "url": "https://eddirasa.com/ens-cm/1am/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-9",
        "title": {
          "ar": "السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "Accès direct au portail officiel : 2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "url": "https://eddirasa.com/ens-cm/2am/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-10",
        "title": {
          "ar": "السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "Accès direct au portail officiel : 3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "url": "https://eddirasa.com/ens-cm/3am/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-11",
        "title": {
          "ar": "السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "Accès direct au portail officiel : 4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "url": "https://eddirasa.com/ens-cm/4am/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-12",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Accès direct au portail officiel : Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "url": "https://eddirasa.com/bem-solutions/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-13",
        "title": {
          "ar": "السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "Accès direct au portail officiel : 1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "url": "https://eddirasa.com/ens-sec/1as/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-14",
        "title": {
          "ar": "السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "Accès direct au portail officiel : 2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "url": "https://eddirasa.com/ens-sec/2as/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-15",
        "title": {
          "ar": "السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "Accès direct au portail officiel : 3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "url": "https://eddirasa.com/ens-sec/3as/",
        "isOnline": true
      },
      {
        "id": "eddirasa-srv-16",
        "title": {
          "ar": "مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Accès direct au portail officiel : Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "url": "https://eddirasa.com/bac-solutions/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ موقع الدراسة الجزائري (Eddirasa)؟",
          "fr": "Comment accéder aux services officiels de Portail Eddirasa — Cours, Sujets & Examens ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ موقع الدراسة الجزائري (Eddirasa) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Portail Eddirasa — Cours, Sujets & Examens sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "education",
    "slug": "education",
    "category": "education_higher",
    "name": {
      "ar": "وزارة التربية الوطنية — المنصات الرسمية",
      "fr": "Ministère de l'Éducation Nationale (MEN)"
    },
    "acronym": "MEN",
    "ministry": {
      "ar": "وزارة التربية الوطنية",
      "fr": "Ministère de l'Éducation Nationale"
    },
    "description": {
      "ar": "دليل الخدمات الرقمية لوزارة التربية الوطنية في الجزائر: فضاء الأستاذ والأولياء، التسجيل في الامتحانات، النتائج، التعليم عن بعد والتوظيف",
      "fr": "Portail détaillé des services publics pour Ministère de l'Éducation Nationale (MEN) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.education.gov.dz/",
    "portalUrl": "https://tawdif.education.dz",
    "iconName": "GraduationCap",
    "isPopular": true,
    "services": [
      {
        "id": "education-srv-1",
        "title": {
          "ar": "الموقع الرسمي للوزارة",
          "fr": "Site Officiel du Ministère"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي للوزارة",
          "fr": "Accès direct au portail officiel : Site Officiel du Ministère"
        },
        "url": "https://www.education.gov.dz/",
        "isOnline": true
      },
      {
        "id": "education-srv-2",
        "title": {
          "ar": "إستكشف الآن",
          "fr": "Explorer le Portail"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إستكشف الآن",
          "fr": "Accès direct au portail officiel : Explorer le Portail"
        },
        "url": "https://tawdif.education.dz",
        "isOnline": true
      },
      {
        "id": "education-srv-3",
        "title": {
          "ar": "التعليم عن بعد التسجيل في برامج التعليم عن بعد",
          "fr": "Connexion à l'Espace Utilisateur"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: التعليم عن بعد التسجيل في برامج التعليم عن بعد",
          "fr": "Accès direct au portail officiel : Connexion à l'Espace Utilisateur"
        },
        "url": "https://awlyaa.education.dz/login",
        "isOnline": true
      },
      {
        "id": "education-srv-4",
        "title": {
          "ar": "إثبات المستوى استخراج شهادات إثبات المستوى",
          "fr": "Retrait de l'Attestation de Niveau (ONEFD)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إثبات المستوى استخراج شهادات إثبات المستوى",
          "fr": "Accès direct au portail officiel : Retrait de l'Attestation de Niveau (ONEFD)"
        },
        "url": "https://www.onefd.edu.dz/att_niv_2025/",
        "isOnline": true
      },
      {
        "id": "education-srv-5",
        "title": {
          "ar": "شهادة البكالوريا BAC التسجيل في امتحان شهادة البكالوريا، متابعة الطلب، وطبع الاستدعاء",
          "fr": "Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة البكالوريا BAC التسجيل في امتحان شهادة البكالوريا، متابعة الطلب، وطبع الاستدعاء",
          "fr": "Accès direct au portail officiel : Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "url": "https://bac.onec.dz/",
        "isOnline": true
      },
      {
        "id": "education-srv-6",
        "title": {
          "ar": "شهادة التعليم المتوسط BEM التسجيل في امتحان السنة الرابعة متوسط، الاطلاع على النتائج",
          "fr": "Inscription & Résultats Examen BEM"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة التعليم المتوسط BEM التسجيل في امتحان السنة الرابعة متوسط، الاطلاع على النتائج",
          "fr": "Accès direct au portail officiel : Inscription & Résultats Examen BEM"
        },
        "url": "https://bem.onec.dz/",
        "isOnline": true
      },
      {
        "id": "education-srv-7",
        "title": {
          "ar": "الدفع الإلكتروني للامتحانات تسديد مستحقات التسجيل في امتحانات BEM و BAC إلكترونيا",
          "fr": "Paiement Électronique des Frais BEM & BAC"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الدفع الإلكتروني للامتحانات تسديد مستحقات التسجيل في امتحانات BEM و BAC إلكترونيا",
          "fr": "Accès direct au portail officiel : Paiement Électronique des Frais BEM & BAC"
        },
        "url": "https://epay.education.dz/auth",
        "isOnline": true
      },
      {
        "id": "education-srv-8",
        "title": {
          "ar": "جدبد مسابقة التوظيف على أساس الإختبارات الاطلاع على نتائج مسابقة التوظيف على أساس الإختبارات",
          "fr": "Concours de Recrutement & Emploi Public"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد مسابقة التوظيف على أساس الإختبارات الاطلاع على نتائج مسابقة التوظيف على أساس الإختبارات",
          "fr": "Accès direct au portail officiel : Concours de Recrutement & Emploi Public"
        },
        "url": "https://tawdif.education.dz/",
        "isOnline": true
      },
      {
        "id": "education-srv-9",
        "title": {
          "ar": "جدبد الامتحانات المهنية الاطلاع على نتائج الامتحانات المهنية للاسلاك الخاصة",
          "fr": "Résultats des Examens Professionnels (Corps Spécifiques)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد الامتحانات المهنية الاطلاع على نتائج الامتحانات المهنية للاسلاك الخاصة",
          "fr": "Accès direct au portail officiel : Résultats des Examens Professionnels (Corps Spécifiques)"
        },
        "url": "https://mowadaf.education.dz/",
        "isOnline": true
      },
      {
        "id": "education-srv-10",
        "title": {
          "ar": "شهادة إثبات المستوى استخراج شهادة إثبات المستوى للتلاميذ المسجلين في التعليم عن بعد",
          "fr": "Attestation de Niveau — Enseignement à Distance"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة إثبات المستوى استخراج شهادة إثبات المستوى للتلاميذ المسجلين في التعليم عن بعد",
          "fr": "Accès direct au portail officiel : Attestation de Niveau — Enseignement à Distance"
        },
        "url": "https://www.onefd.edu.dz/att_niv_**/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ وزارة التربية الوطنية — المنصات الرسمية؟",
          "fr": "Comment accéder aux services officiels de Ministère de l'Éducation Nationale (MEN) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ وزارة التربية الوطنية — المنصات الرسمية مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Ministère de l'Éducation Nationale (MEN) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "educationdz",
    "slug": "educationdz",
    "category": "education_higher",
    "name": {
      "ar": "بوابة EducationDZ للملفات التعليمية والامتحانات",
      "fr": "EducationDZ — Sujets BEM, BAC et Cycles"
    },
    "acronym": "EDUDZ",
    "ministry": {
      "ar": "بوابة تعليمية جزائرية",
      "fr": "Ressources Pédagogiques Algérie"
    },
    "description": {
      "ar": "جميع فروض واختبارات شهادة التعليم المتوسط، البكالوريا، والابتدائي مع التصحيح النموذجي لجميع المواد والمستويات التعليمية في الجزائر",
      "fr": "Portail détaillé des services publics pour EducationDZ — Sujets BEM, BAC et Cycles : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://educationdz.com/primaire/0ap/",
    "portalUrl": "https://educationdz.com/primaire/1ap/",
    "iconName": "BookOpen",
    "isPopular": false,
    "services": [
      {
        "id": "educationdz-srv-1",
        "title": {
          "ar": "القسم التحضيري نماذج اختبارية للقسم التحضيري",
          "fr": "Classe Préparatoire — Sujets et Exercices"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القسم التحضيري نماذج اختبارية للقسم التحضيري",
          "fr": "Accès direct au portail officiel : Classe Préparatoire — Sujets et Exercices"
        },
        "url": "https://educationdz.com/primaire/0ap/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-2",
        "title": {
          "ar": "السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "Accès direct au portail officiel : 1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "url": "https://educationdz.com/primaire/1ap/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-3",
        "title": {
          "ar": "السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "Accès direct au portail officiel : 2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "url": "https://educationdz.com/primaire/2ap/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-4",
        "title": {
          "ar": "السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "Accès direct au portail officiel : 3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "url": "https://educationdz.com/primaire/3ap/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-5",
        "title": {
          "ar": "السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "Accès direct au portail officiel : 4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "url": "https://educationdz.com/primaire/4ap/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-6",
        "title": {
          "ar": "السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "Accès direct au portail officiel : 5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "url": "https://educationdz.com/primaire/5ap/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-7",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Accès direct au portail officiel : Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "url": "https://educationdz.com/%D9%85%D9%88%D8%A7%D8%B6%D9%8A%D8%B9-%D9%88%D8%AD%D9%84%D9%88%D9%84-%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-8",
        "title": {
          "ar": "السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "Accès direct au portail officiel : 1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "url": "https://educationdz.com/moyenne/1am/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-9",
        "title": {
          "ar": "السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "Accès direct au portail officiel : 2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "url": "https://educationdz.com/moyenne/2am/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-10",
        "title": {
          "ar": "السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "Accès direct au portail officiel : 3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "url": "https://educationdz.com/moyenne/3am/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-11",
        "title": {
          "ar": "السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "Accès direct au portail officiel : 4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "url": "https://educationdz.com/moyenne/4am/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-12",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Accès direct au portail officiel : Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "url": "https://educationdz.com/%D9%85%D9%88%D8%A7%D8%B6%D9%8A%D8%B9-%D9%88%D8%AD%D9%84%D9%88%D9%84-%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-13",
        "title": {
          "ar": "السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "Accès direct au portail officiel : 1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "url": "https://educationdz.com/secondaire/1as/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-14",
        "title": {
          "ar": "السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "Accès direct au portail officiel : 2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "url": "https://educationdz.com/secondaire/2as/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-15",
        "title": {
          "ar": "السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "Accès direct au portail officiel : 3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "url": "https://educationdz.com/secondaire/3as/",
        "isOnline": true
      },
      {
        "id": "educationdz-srv-16",
        "title": {
          "ar": "مواضيع وحلول شهادة البكالوريا مواضيع وحلول شهادة البكالوريا",
          "fr": "Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة البكالوريا مواضيع وحلول شهادة البكالوريا",
          "fr": "Accès direct au portail officiel : Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "url": "https://bacdz.net/bac-onec-dz/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ بوابة EducationDZ للملفات التعليمية والامتحانات؟",
          "fr": "Comment accéder aux services officiels de EducationDZ — Sujets BEM, BAC et Cycles ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ بوابة EducationDZ للملفات التعليمية والامتحانات مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de EducationDZ — Sujets BEM, BAC et Cycles sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "emergency",
    "slug": "emergency",
    "category": "health_civil",
    "name": {
      "ar": "منصات الطوارئ والتبليغ وحماية المستهلك والفساد",
      "fr": "Portails d'Urgence, Sécurité & Signalement Citoyen"
    },
    "acronym": "URGENCE",
    "ministry": {
      "ar": "الشرطة، الدرك، الحماية المدنية، الفساد",
      "fr": "Services Nationaux d'Urgence"
    },
    "description": {
      "ar": "تعرف على جميع أرقام الطوارئ والنجدة في الجزائر، بما في ذلك الشرطة والدرك الوطني والإسعاف والحماية المدنية وحراس السواحل وخطوط المساعدة والتبليغ الرقمية",
      "fr": "Portail détaillé des services publics pour Portails d'Urgence, Sécurité & Signalement Citoyen : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.algeriepolice.dz/",
    "portalUrl": "https://play.google.com/store/apps/details?id=allochorta.algeriepolice.dz&hl=ar",
    "iconName": "PhoneCall",
    "isPopular": true,
    "services": [
      {
        "id": "emergency-srv-1",
        "title": {
          "ar": "الموقع الرسمي للشرطة البوابة الإلكترونية للمديرية العامة للأمن الوطني",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي للشرطة البوابة الإلكترونية للمديرية العامة للأمن الوطني",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.algeriepolice.dz/",
        "isOnline": true
      },
      {
        "id": "emergency-srv-2",
        "title": {
          "ar": "ألو الشرطة تواصل والإبلاغ",
          "fr": "Portail de Signalement & Sécurité Citoyenne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: ألو الشرطة تواصل والإبلاغ",
          "fr": "Accès direct au portail officiel : Portail de Signalement & Sécurité Citoyenne"
        },
        "url": "https://play.google.com/store/apps/details?id=allochorta.algeriepolice.dz&hl=ar",
        "isOnline": true
      },
      {
        "id": "emergency-srv-3",
        "title": {
          "ar": "PPGN - الدرك الوطني شكاوى المسبقة للدرك الوطني",
          "fr": "Portail de Signalement & Sécurité Citoyenne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: PPGN - الدرك الوطني شكاوى المسبقة للدرك الوطني",
          "fr": "Accès direct au portail officiel : Portail de Signalement & Sécurité Citoyenne"
        },
        "url": "https://ppgn.mdn.dz/",
        "isOnline": true
      },
      {
        "id": "emergency-srv-4",
        "title": {
          "ar": "وسيط الجمهورية تواصل مع وسيط الجمهورية",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: وسيط الجمهورية تواصل مع وسيط الجمهورية",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "https://wassit.dz/ar/register#",
        "isOnline": true
      },
      {
        "id": "emergency-srv-5",
        "title": {
          "ar": "بلِّغْنـَا التصدي والحد من انتشار ظاهرة الفساد",
          "fr": "Plateforme Nationale de Prévention & Signalement"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: بلِّغْنـَا التصدي والحد من انتشار ظاهرة الفساد",
          "fr": "Accès direct au portail officiel : Plateforme Nationale de Prévention & Signalement"
        },
        "url": "https://balighna.hatplc.dz/account-choice",
        "isOnline": true
      },
      {
        "id": "emergency-srv-6",
        "title": {
          "ar": "نراكم المؤسسات وفعاليات المجتمع المدني",
          "fr": "Plateforme Narakom (Société Civile & Lutte Anti-Corruption)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: نراكم المؤسسات وفعاليات المجتمع المدني",
          "fr": "Accès direct au portail officiel : Plateforme Narakom (Société Civile & Lutte Anti-Corruption)"
        },
        "url": "https://hatplc.dz/declaration-form",
        "isOnline": true
      },
      {
        "id": "emergency-srv-7",
        "title": {
          "ar": "أشكي منصة تقديم الشكاوي - حماية المستهلك",
          "fr": "Plateforme Achki — Réclamations Protection du Consommateur"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أشكي منصة تقديم الشكاوي - حماية المستهلك",
          "fr": "Accès direct au portail officiel : Plateforme Achki — Réclamations Protection du Consommateur"
        },
        "url": "https://apoce.org/%d8%af%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%87%d9%84%d9%83-%d8%a7%d9%84%d8%ac%d8%b2%d8%a7%d8%a6%d8%b1%d9%8a/%d8%aa%d9%82%d8%af%d9%8a%d9%85-%d8%b4%d9%83%d9%88%d9%89/",
        "isOnline": true
      },
      {
        "id": "emergency-srv-8",
        "title": {
          "ar": "أشتكي منصة \"أشتكي\" لجمعية حماية المستهلك",
          "fr": "Connexion à l'Espace Utilisateur"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أشتكي منصة \"أشتكي\" لجمعية حماية المستهلك",
          "fr": "Accès direct au portail officiel : Connexion à l'Espace Utilisateur"
        },
        "url": "https://www.achki-apoce.org/login",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ منصات الطوارئ والتبليغ وحماية المستهلك والفساد؟",
          "fr": "Comment accéder aux services officiels de Portails d'Urgence, Sécurité & Signalement Citoyen ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ منصات الطوارئ والتبليغ وحماية المستهلك والفساد مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Portails d'Urgence, Sécurité & Signalement Citoyen sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "enpi",
    "slug": "enpi",
    "category": "housing",
    "name": {
      "ar": "المؤسسة الوطنية للترقية العقارية (ENPI)",
      "fr": "Entreprise Nationale de Promotion Immobilière (ENPI)"
    },
    "acronym": "ENPI",
    "ministry": {
      "ar": "وزارة السكن والعمران والمدينة",
      "fr": "Ministère de l'Habitat"
    },
    "description": {
      "ar": "المؤسسة الوطنية للترقية العقارية ENPI بالجزائر، التسجيل في سكنات LPP وLPL، متابعة الملفات، فضاء الزبائن، اقتناء المحلات التجارية والاستفادة من الخدمات العقارية الإلكتروني",
      "fr": "Portail détaillé des services publics pour Entreprise Nationale de Promotion Immobilière (ENPI) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.enpi-net.dz/",
    "portalUrl": "http://www.enpi-net.dz/LocauxEnpi/",
    "iconName": "Building2",
    "isPopular": false,
    "services": [
      {
        "id": "enpi-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.enpi-net.dz/",
        "isOnline": true
      },
      {
        "id": "enpi-srv-2",
        "title": {
          "ar": "سجل الآن",
          "fr": "S'inscrire en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سجل الآن",
          "fr": "Accès direct au portail officiel : S'inscrire en Ligne"
        },
        "url": "http://www.enpi-net.dz/LocauxEnpi/",
        "isOnline": true
      },
      {
        "id": "enpi-srv-3",
        "title": {
          "ar": "محل تجاري التسجل لاقتناء محل تجاري",
          "fr": "Inscription pour l'Acquisition d'un Local Commercial (ENPI)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: محل تجاري التسجل لاقتناء محل تجاري",
          "fr": "Accès direct au portail officiel : Inscription pour l'Acquisition d'un Local Commercial (ENPI)"
        },
        "url": "https://www.enpi-net.dz/LocauxEnpi/",
        "isOnline": true
      },
      {
        "id": "enpi-srv-4",
        "title": {
          "ar": "فضاء الزبائن فضاء الزبائن",
          "fr": "Espace Clients en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء الزبائن فضاء الزبائن",
          "fr": "Accès direct au portail officiel : Espace Clients en Ligne"
        },
        "url": "https://www.enpi-net.dz/lpp_consultation/",
        "isOnline": true
      },
      {
        "id": "enpi-srv-5",
        "title": {
          "ar": "سكن ترقوي عمومي LPP التسجيل لاقتناء سكن ترقوي عمومي LPP",
          "fr": "Inscription sur la Plateforme Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سكن ترقوي عمومي LPP التسجيل لاقتناء سكن ترقوي عمومي LPP",
          "fr": "Accès direct au portail officiel : Inscription sur la Plateforme Officielle"
        },
        "url": "https://www.enpi-net.dz/ENPI/Inscription.php",
        "isOnline": true
      },
      {
        "id": "enpi-srv-6",
        "title": {
          "ar": "سكن ترقوي حر LPL التسجيل لاقتناء سكن ترقوي حر LPL",
          "fr": "Inscription sur la Plateforme Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سكن ترقوي حر LPL التسجيل لاقتناء سكن ترقوي حر LPL",
          "fr": "Accès direct au portail officiel : Inscription sur la Plateforme Officielle"
        },
        "url": "https://www.enpi-net.dz/LPL/Inscription.php",
        "isOnline": true
      },
      {
        "id": "enpi-srv-7",
        "title": {
          "ar": "تطبيق إنشغال الدخول لتطبيق إنشغال",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق إنشغال الدخول لتطبيق إنشغال",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://www.enpi-net.dz/Inchighal/",
        "isOnline": true
      },
      {
        "id": "enpi-srv-8",
        "title": {
          "ar": "تطبيق بريدي موب تحميل تطبيق بريدي موب الجزائر",
          "fr": "Télécharger l'Application BaridiMob"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق بريدي موب تحميل تطبيق بريدي موب الجزائر",
          "fr": "Accès direct au portail officiel : Télécharger l'Application BaridiMob"
        },
        "url": "https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ المؤسسة الوطنية للترقية العقارية (ENPI)؟",
          "fr": "Comment accéder aux services officiels de Entreprise Nationale de Promotion Immobilière (ENPI) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ المؤسسة الوطنية للترقية العقارية (ENPI) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Entreprise Nationale de Promotion Immobilière (ENPI) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "etudpdf",
    "slug": "etudpdf",
    "category": "education_higher",
    "name": {
      "ar": "بوابة EtudPDF لتحميل مواضيع البكالوريا وBEM",
      "fr": "EtudPDF — Annales PDF BAC, BEM & 5AP"
    },
    "acronym": "ETUDPDF",
    "ministry": {
      "ar": "بوابة تعليمية جزائرية",
      "fr": "Ressources Pédagogiques Algérie"
    },
    "description": {
      "ar": "جميع فروض واختبارات شهادة التعليم المتوسط، البكالوريا، والابتدائي مع التصحيح النموذجي لجميع المواد والمستويات التعليمية في الجزائر",
      "fr": "Portail détaillé des services publics pour EtudPDF — Annales PDF BAC, BEM & 5AP : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.etudpdf.com/p/1ap_24.html",
    "portalUrl": "https://www.etudpdf.com/p/2ap.html",
    "iconName": "FileText",
    "isPopular": false,
    "services": [
      {
        "id": "etudpdf-srv-1",
        "title": {
          "ar": "السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى إبتدائي نماذج اختبارية للسنة الأولى إبتدائي",
          "fr": "Accès direct au portail officiel : 1re Année Primaire (1AP) — Sujets et Corrigés"
        },
        "url": "https://www.etudpdf.com/p/1ap_24.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-2",
        "title": {
          "ar": "السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية إبتدائي نماذج اختبارية للسنة الثانية إبتدائي",
          "fr": "Accès direct au portail officiel : 2e Année Primaire (2AP) — Sujets et Corrigés"
        },
        "url": "https://www.etudpdf.com/p/2ap.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-3",
        "title": {
          "ar": "السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة إبتدائي نماذج اختبارية للسنة الثالثة إبتدائي",
          "fr": "Accès direct au portail officiel : 3e Année Primaire (3AP) — Sujets et Corrigés"
        },
        "url": "https://www.etudpdf.com/p/3ap.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-4",
        "title": {
          "ar": "السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة إبتدائي نماذج اختبارية للسنة الرابعة إبتدائي",
          "fr": "Accès direct au portail officiel : 4e Année Primaire (4AP) — Sujets et Corrigés"
        },
        "url": "https://www.etudpdf.com/p/4ap.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-5",
        "title": {
          "ar": "السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الخامسة إبتدائي نماذج اختبارية للسنة الخامسة إبتدائي",
          "fr": "Accès direct au portail officiel : 5e Année Primaire (5AP) — Sujets et Corrigés"
        },
        "url": "https://www.etudpdf.com/p/5ap.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-6",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم الابتدائي مواضيع وحلول شهادة التعليم الابتدائي",
          "fr": "Accès direct au portail officiel : Examen Fin de Cycle Primaire (5AP) — Sujets & Corrigés"
        },
        "url": "https://www.etudpdf.com/2020/09/5apsubjects.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-7",
        "title": {
          "ar": "السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى متوسط نماذج الفروض والإختبارات للسنة الأولى متوسط",
          "fr": "Accès direct au portail officiel : 1re Année Moyenne (1AM) — Devoirs & Examens"
        },
        "url": "https://www.etudpdf.com/p/1am.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-8",
        "title": {
          "ar": "السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية متوسط نماذج الفروض والإختبارات للسنة الثانية متوسط",
          "fr": "Accès direct au portail officiel : 2e Année Moyenne (2AM) — Devoirs & Examens"
        },
        "url": "https://www.etudpdf.com/p/2am.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-9",
        "title": {
          "ar": "السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة متوسط نماذج الفروض والإختبارات للسنة الثالثة متوسط",
          "fr": "Accès direct au portail officiel : 3e Année Moyenne (3AM) — Devoirs & Examens"
        },
        "url": "https://www.etudpdf.com/p/3am.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-10",
        "title": {
          "ar": "السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الرابعة متوسط نماذج الفروض والإختبارات للسنة الرابعة متوسط",
          "fr": "Accès direct au portail officiel : 4e Année Moyenne (4AM / BEM) — Devoirs & Examens"
        },
        "url": "https://eddirasa.com/ens-cm/4am/",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-11",
        "title": {
          "ar": "مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول شهادة التعليم المتوسط مواضيع وحلول شهادة التعليم المتوسط",
          "fr": "Accès direct au portail officiel : Brevet d'Enseignement Moyen (BEM) — Sujets & Corrigés"
        },
        "url": "https://www.etudpdf.com/p/bem.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-12",
        "title": {
          "ar": "السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الأولى ثانوي نماذج الفروض والإختبارات للسنة الأولى ثانوي",
          "fr": "Accès direct au portail officiel : 1re Année Secondaire (1AS) — Devoirs & Examens"
        },
        "url": "https://www.etudpdf.com/p/1as.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-13",
        "title": {
          "ar": "السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثانية ثانوي نماذج الفروض والإختبارات للسنة الثانية ثانوي",
          "fr": "Accès direct au portail officiel : 2e Année Secondaire (2AS) — Devoirs & Examens"
        },
        "url": "https://www.etudpdf.com/p/2as.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-14",
        "title": {
          "ar": "السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السنة الثالثة ثانوي نماذج الفروض والإختبارات للسنة الثالثة ثانوي",
          "fr": "Accès direct au portail officiel : 3e Année Secondaire (3AS / BAC) — Devoirs & Examens"
        },
        "url": "https://www.etudpdf.com/p/3as.html",
        "isOnline": true
      },
      {
        "id": "etudpdf-srv-15",
        "title": {
          "ar": "مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: مواضيع وحلول إختبارات شهادة البكالوريا مواضيع وحلول إختبارات شهادة البكالوريا",
          "fr": "Accès direct au portail officiel : Baccalauréat (BAC) — Annales et Corrigés Officiels"
        },
        "url": "https://www.etudpdf.com/p/bac.html",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ بوابة EtudPDF لتحميل مواضيع البكالوريا وBEM؟",
          "fr": "Comment accéder aux services officiels de EtudPDF — Annales PDF BAC, BEM & 5AP ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ بوابة EtudPDF لتحميل مواضيع البكالوريا وBEM مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de EtudPDF — Annales PDF BAC, BEM & 5AP sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "exam-compos",
    "slug": "exam-compos",
    "category": "education_higher",
    "name": {
      "ar": "مجمع النتائج والتوجيه والامتحانات الوطنية",
      "fr": "Portail Central des Examens & Orientation BAC"
    },
    "acronym": "EXAM",
    "ministry": {
      "ar": "التعليم والتوجيه الجامعي",
      "fr": "Examens Nationaux & Orientation"
    },
    "description": {
      "ar": "جميع فروض واختبارات شهادة التعليم المتوسط، البكالوريا، والابتدائي مع التصحيح النموذجي لجميع المواد والمستويات التعليمية في الجزائر",
      "fr": "Portail détaillé des services publics pour Portail Central des Examens & Orientation BAC : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://dzorientation.com",
    "portalUrl": "https://dzorientation.com",
    "iconName": "GraduationCap",
    "isPopular": false,
    "services": [
      {
        "id": "exam-compos-srv-1",
        "title": {
          "ar": "إختر مستقبلك الآن",
          "fr": "Choisir Votre Orientation Universitaire"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إختر مستقبلك الآن",
          "fr": "Accès direct au portail officiel : Choisir Votre Orientation Universitaire"
        },
        "url": "https://dzorientation.com",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ مجمع النتائج والتوجيه والامتحانات الوطنية؟",
          "fr": "Comment accéder aux services officiels de Portail Central des Examens & Orientation BAC ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ مجمع النتائج والتوجيه والامتحانات الوطنية مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Portail Central des Examens & Orientation BAC sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "facteur",
    "slug": "facteur",
    "category": "energy_water",
    "name": {
      "ar": "دليل الفاتورات الرقمية والخدمات الإلكترونية",
      "fr": "Portail des Factures Électroniques & Paiement"
    },
    "acronym": "FACTURE",
    "ministry": {
      "ar": "الطاقة والمياه والاتصالات",
      "fr": "Énergie, Eau & Télécoms"
    },
    "description": {
      "ar": "دفع فواتير الماء والكهرباء والغاز عبر البوابة الجزائرية للخدمات الرقمية، مع خدمات سونلغاز والجزائرية للمياه وسيال وخيارات الدفع الإلكتروني",
      "fr": "Portail détaillé des services publics pour Portail des Factures Électroniques & Paiement : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://epayement.elit.dz/payementFacture.xhtml",
    "portalUrl": "https://fatourati.seaal.dz/",
    "iconName": "FileText",
    "isPopular": false,
    "services": [
      {
        "id": "facteur-sonalgaz",
        "title": {
          "ar": "دفع فاتورة الكهرباء والغاز (سونلغاز)",
          "fr": "Paiement Facture Sonelgaz"
        },
        "description": {
          "ar": "منصة التسديد الإلكتروني ELIT Sonelgaz",
          "fr": "Télépaiement officiel ELIT Sonelgaz"
        },
        "url": "https://epayement.elit.dz/payementFacture.xhtml",
        "isOnline": true
      },
      {
        "id": "facteur-seaal",
        "title": {
          "ar": "دفع فاتورة المياه (سيال SEAAL)",
          "fr": "Paiement Facture Eau SEAAL"
        },
        "description": {
          "ar": "منصة تسديد فواتير المياه لولايتي الجزائر وتيبازة",
          "fr": "Portail de paiement Fatourati SEAAL"
        },
        "url": "https://fatourati.seaal.dz/",
        "isOnline": true
      },
      {
        "id": "facteur-at",
        "title": {
          "ar": "تعبئة الإنترنت ودفع فاتورة الهاتف الثابت",
          "fr": "Paiement Facture Algérie Télécom"
        },
        "description": {
          "ar": "بوابة التسديد الإلكتروني لاتصالات الجزائر",
          "fr": "Portail client Algérie Télécom"
        },
        "url": "https://paiement.algerietelecom.dz/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ دليل الفاتورات الرقمية والخدمات الإلكترونية؟",
          "fr": "Comment accéder aux services officiels de Portail des Factures Électroniques & Paiement ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ دليل الفاتورات الرقمية والخدمات الإلكترونية مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Portail des Factures Électroniques & Paiement sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "facture_loyer",
    "slug": "facture_loyer",
    "category": "housing",
    "name": {
      "ar": "دفع فواتير الإيجار السكني (OPGI / AADL / ENPI)",
      "fr": "Paiement des Loyers OPGI, AADL et ENPI"
    },
    "acronym": "LOYER",
    "ministry": {
      "ar": "وزارة السكن والعمران والمدينة",
      "fr": "Ministère de l'Habitat"
    },
    "description": {
      "ar": "دليل دفع الفواتير والإيجار في الجزائر، يشمل تسديد فواتير الكهرباء والغاز والمياه والإنترنت والهاتف وخدمات الدفع الإلكتروني عبر البطاقة الذهبية",
      "fr": "Portail détaillé des services publics pour Paiement des Loyers OPGI, AADL et ENPI : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.aadl.com.dz/",
    "portalUrl": "https://www.opgi-alger.dz/",
    "iconName": "CreditCard",
    "isPopular": false,
    "services": [
      {
        "id": "loyer-aadl",
        "title": {
          "ar": "دفع إيجار سكنات عدل AADL",
          "fr": "Paiement Loyer AADL (Gest-Immo)"
        },
        "description": {
          "ar": "تحيين وتسديد أوامر الدفع الشهرية إلكترونيا",
          "fr": "Paiement électronique des loyers AADL"
        },
        "url": "https://www.aadl.com.dz/",
        "isOnline": true
      },
      {
        "id": "loyer-opgi",
        "title": {
          "ar": "دفع مستحقات دواوين الترقية والتسيير العقاري OPGI",
          "fr": "Paiement Loyers OPGI Alger"
        },
        "description": {
          "ar": "منصة التسديد عن بعد لمستأجري سكنات OPGI",
          "fr": "Portail client OPGI"
        },
        "url": "https://www.opgi-alger.dz/",
        "isOnline": true
      },
      {
        "id": "loyer-enpi",
        "title": {
          "ar": "بوابة تسديد أقساط السكن الترقوي العمومي ENPI",
          "fr": "Paiement Échéances Logements ENPI"
        },
        "description": {
          "ar": "فضاء المكتتبين ودفع الفواتير العقارية",
          "fr": "Portail souscripteurs ENPI"
        },
        "url": "https://www.enpi-net.dz/",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ دفع فواتير الإيجار السكني (OPGI / AADL / ENPI)؟",
          "fr": "Comment accéder aux services officiels de Paiement des Loyers OPGI, AADL et ENPI ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ دفع فواتير الإيجار السكني (OPGI / AADL / ENPI) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Paiement des Loyers OPGI, AADL et ENPI sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "fadaeldjazair",
    "slug": "fadaeldjazair",
    "category": "housing",
    "name": {
      "ar": "البوابة الجغرفضائية للأملاك الوطنية والحفظ العقاري (فضاء الجزائر)",
      "fr": "Portail Géospatial Foncier & Domaines (Fadaa El Djazaïr)"
    },
    "acronym": "FADAA",
    "ministry": {
      "ar": "وزارة المالية — الأملاك الوطنية",
      "fr": "Ministère des Finances — Domaines"
    },
    "description": {
      "ar": "اكتشف خدمات المالية والجباية الرقمية في الجزائر. تسجيل في مختلف الصيغ المالية، دفع الرسوم والضرائب، قسيمة السيارات، قسيمية بطاقة التعريف، رخصة السياقة، جواز السفر، عقود ا",
      "fr": "Portail détaillé des services publics pour Portail Géospatial Foncier & Domaines (Fadaa El Djazaïr) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://fadaeldjazair.mf.gov.dz/ar/",
    "portalUrl": "https://fadaeldjazair.mf.gov.dz/EDCFPUBLICHOME/",
    "iconName": "Compass",
    "isPopular": false,
    "services": [
      {
        "id": "fadaeldjazair-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/ar/",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-2",
        "title": {
          "ar": "المنصة الرقمية لمستخرجات الوثائق العقارية المنصة الرقمية لمستخرجات الوثائق العقارية، شهادة السلبية والعقود المشهرة",
          "fr": "Extraits Fonciers en Ligne (Certificat Négatif & Actes Publiés)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: المنصة الرقمية لمستخرجات الوثائق العقارية المنصة الرقمية لمستخرجات الوثائق العقارية، شهادة السلبية والعقود المشهرة",
          "fr": "Accès direct au portail officiel : Extraits Fonciers en Ligne (Certificat Négatif & Actes Publiés)"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/EDCFPUBLICHOME/",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-3",
        "title": {
          "ar": "معطايات مسحية معطايات مسحية",
          "fr": "Données Cadastrales Numériques (Fadaa El Djazaïr)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: معطايات مسحية معطايات مسحية",
          "fr": "Accès direct au portail officiel : Données Cadastrales Numériques (Fadaa El Djazaïr)"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/mission-documentaire/index_public_35.html",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-4",
        "title": {
          "ar": "طلب مستخرج CC11 طلب مستخرج المصفوفة المسحية CC11",
          "fr": "Demande d'Extrait de Matrice Cadastrale CC11"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب مستخرج CC11 طلب مستخرج المصفوفة المسحية CC11",
          "fr": "Accès direct au portail officiel : Demande d'Extrait de Matrice Cadastrale CC11"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/recherche2",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-5",
        "title": {
          "ar": "طلب مستخرج حالة القسم طلب مستخرج من حالة القسم CC12",
          "fr": "Demande d'Extrait d'État de Section CC12"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب مستخرج حالة القسم طلب مستخرج من حالة القسم CC12",
          "fr": "Accès direct au portail officiel : Demande d'Extrait d'État de Section CC12"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/delivrance_automatique/recherche.php",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-6",
        "title": {
          "ar": "طلب مستخرج CC15 طلب مستخرج المصفوفة المسحية CC15",
          "fr": "Demande d'Extrait Cadastral CC15"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب مستخرج CC15 طلب مستخرج المصفوفة المسحية CC15",
          "fr": "Accès direct au portail officiel : Demande d'Extrait Cadastral CC15"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/recherche4",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-7",
        "title": {
          "ar": "طلب الدفتر العقاري طلب الدفتر العقاري",
          "fr": "Demande du Livret Foncier en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب الدفتر العقاري طلب الدفتر العقاري",
          "fr": "Accès direct au portail officiel : Demande du Livret Foncier en Ligne"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/lf/demander_lf",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-8",
        "title": {
          "ar": "متابعة طلب الدفتر العقاري متابعة طلب الدفتر العقاري",
          "fr": "Suivi de la Demande du Livret Foncier"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: متابعة طلب الدفتر العقاري متابعة طلب الدفتر العقاري",
          "fr": "Accès direct au portail officiel : Suivi de la Demande du Livret Foncier"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/lf/suividemande",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-9",
        "title": {
          "ar": "تواصل معنا التواصل مع فريق عمل الاملاك العقارية",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تواصل معنا التواصل مع فريق عمل الاملاك العقارية",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/ar/contact/",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-10",
        "title": {
          "ar": "فضاء المحافظ العقاري فضاء المحافظ العقاري",
          "fr": "Espaces Professionnels Foncier & Domaines"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء المحافظ العقاري فضاء المحافظ العقاري",
          "fr": "Accès direct au portail officiel : Espaces Professionnels Foncier & Domaines"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/login2",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-11",
        "title": {
          "ar": "فضاء الموثق فضاء الموثق",
          "fr": "Espaces Professionnels Foncier & Domaines"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء الموثق فضاء الموثق",
          "fr": "Accès direct au portail officiel : Espaces Professionnels Foncier & Domaines"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/login",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-12",
        "title": {
          "ar": "فضاء المهندس المساحي فضاء المهندس المساحي",
          "fr": "Agrément Professionnel (Habitat / Urbanisme)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء المهندس المساحي فضاء المهندس المساحي",
          "fr": "Accès direct au portail officiel : Agrément Professionnel (Habitat / Urbanisme)"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/ar/geo_services/#",
        "isOnline": true
      },
      {
        "id": "fadaeldjazair-srv-13",
        "title": {
          "ar": "فضاء المفتش العقاري فضاء المفتش العقاري",
          "fr": "Espaces Professionnels Foncier & Domaines"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: فضاء المفتش العقاري فضاء المفتش العقاري",
          "fr": "Accès direct au portail officiel : Espaces Professionnels Foncier & Domaines"
        },
        "url": "https://fadaeldjazair.mf.gov.dz/login1",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ البوابة الجغرفضائية للأملاك الوطنية والحفظ العقاري (فضاء الجزائر)؟",
          "fr": "Comment accéder aux services officiels de Portail Géospatial Foncier & Domaines (Fadaa El Djazaïr) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ البوابة الجغرفضائية للأملاك الوطنية والحفظ العقاري (فضاء الجزائر) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Portail Géospatial Foncier & Domaines (Fadaa El Djazaïr) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "hatplc",
    "slug": "hatplc",
    "category": "justice_interior",
    "name": {
      "ar": "السلطة العليا للشفافية والوقاية من الفساد ومكافحته (HATPLC)",
      "fr": "Haute Autorité de Transparence et de Lutte contre la Corruption"
    },
    "acronym": "HATPLC",
    "ministry": {
      "ar": "هيئة دستورية مستقلة",
      "fr": "Institution Constitutionnelle"
    },
    "description": {
      "ar": "تقدم الموقع السلطة العليا للشفافية والوقاية من الفساد ومكافحته خدمات رقمية عن بعد دون الحاجة للتنقل وربح الوقت",
      "fr": "Portail détaillé des services publics pour Haute Autorité de Transparence et de Lutte contre la Corruption : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://play.google.com/store/apps/details?id=dz.hatplc.balighna&hl=ar",
    "portalUrl": "https://hatplc.dz/",
    "iconName": "ShieldCheck",
    "isPopular": false,
    "services": [
      {
        "id": "hatplc-srv-1",
        "title": {
          "ar": "معا ضد الفساد",
          "fr": "Plateforme Nationale de Prévention & Signalement"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: معا ضد الفساد",
          "fr": "Accès direct au portail officiel : Plateforme Nationale de Prévention & Signalement"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.hatplc.balighna&hl=ar",
        "isOnline": true
      },
      {
        "id": "hatplc-srv-2",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://hatplc.dz/",
        "isOnline": true
      },
      {
        "id": "hatplc-srv-3",
        "title": {
          "ar": "سجل الآن",
          "fr": "S'inscrire en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سجل الآن",
          "fr": "Accès direct au portail officiel : S'inscrire en Ligne"
        },
        "url": "https://naracom.hatplc.dz/login",
        "isOnline": true
      },
      {
        "id": "hatplc-srv-4",
        "title": {
          "ar": "التصريح بالممتلكات تحميل إستمارة التصريح بالممتلكات",
          "fr": "Téléchargement du Formulaire de Déclaration de Patrimoine"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: التصريح بالممتلكات تحميل إستمارة التصريح بالممتلكات",
          "fr": "Accès direct au portail officiel : Téléchargement du Formulaire de Déclaration de Patrimoine"
        },
        "url": "https://hatplc.dz/declaration-form",
        "isOnline": true
      },
      {
        "id": "hatplc-srv-5",
        "title": {
          "ar": "بلِّغْنـَا التصدي والحد من انتشار ظاهرة الفساد",
          "fr": "Plateforme Nationale de Prévention & Signalement"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: بلِّغْنـَا التصدي والحد من انتشار ظاهرة الفساد",
          "fr": "Accès direct au portail officiel : Plateforme Nationale de Prévention & Signalement"
        },
        "url": "https://balighna.hatplc.dz/account-choice",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ السلطة العليا للشفافية والوقاية من الفساد ومكافحته (HATPLC)؟",
          "fr": "Comment accéder aux services officiels de Haute Autorité de Transparence et de Lutte contre la Corruption ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ السلطة العليا للشفافية والوقاية من الفساد ومكافحته (HATPLC) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Haute Autorité de Transparence et de Lutte contre la Corruption sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "hcn",
    "slug": "hcn",
    "category": "telecom",
    "name": {
      "ar": "المحافظة السامية للرقمنة — البوابة الوطنية للخدمات الرقمية",
      "fr": "Haut-Commissariat à la Numérisation (DZDS)"
    },
    "acronym": "HCN",
    "ministry": {
      "ar": "رئاسة الجمهورية — الرقمنة",
      "fr": "Présidence — Numérisation"
    },
    "description": {
      "ar": "المحافظة السامية للرقمنة في الجزائر HCN، بوابة الخدمات الحكومية الرقمية dzds، منصة الأبوستيل، تطبيق الخدمات الرقمية، ومركز الاتصال 3017. خدمات رقمية شاملة للمواطنين",
      "fr": "Portail détaillé des services publics pour Haut-Commissariat à la Numérisation (DZDS) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.hcn.dz/",
    "portalUrl": "https://dzds.dz/ar-dz",
    "iconName": "Globe",
    "isPopular": true,
    "services": [
      {
        "id": "hcn-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.hcn.dz/",
        "isOnline": true
      },
      {
        "id": "hcn-srv-2",
        "title": {
          "ar": "إستكشف الآن",
          "fr": "Explorer le Portail"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إستكشف الآن",
          "fr": "Accès direct au portail officiel : Explorer le Portail"
        },
        "url": "https://dzds.dz/ar-dz",
        "isOnline": true
      },
      {
        "id": "hcn-srv-3",
        "title": {
          "ar": "تطبيق dzds التطبيقة البوابة الجزائرية للخدمات الرقمية \"dzds\"",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق dzds التطبيقة البوابة الجزائرية للخدمات الرقمية \"dzds\"",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=com.linewell.citizen.aljly&hl=ar",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ المحافظة السامية للرقمنة — البوابة الوطنية للخدمات الرقمية؟",
          "fr": "Comment accéder aux services officiels de Haut-Commissariat à la Numérisation (DZDS) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ المحافظة السامية للرقمنة — البوابة الوطنية للخدمات الرقمية مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Haut-Commissariat à la Numérisation (DZDS) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "ina-elections",
    "slug": "ina-elections",
    "category": "justice_interior",
    "name": {
      "ar": "السلطة الوطنية المستقلة للانتخابات (ANIE)",
      "fr": "Autorité Nationale Indépendante des Élections (ANIE)"
    },
    "acronym": "ANIE",
    "ministry": {
      "ar": "سلطة انتخابية دستورية مستقلة",
      "fr": "Autorité Électorale Indépendante"
    },
    "description": {
      "ar": "دليل خدمات الانتخابات والاستفتاءات في الجزائر، يشمل التسجيل في القوائم الانتخابية والتحقق من بطاقة الناخب وخدمات الهيئة الوطنية المستقلة للانتخابات",
      "fr": "Portail détaillé des services publics pour Autorité Nationale Indépendante des Élections (ANIE) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://ina-elections.dz/",
    "portalUrl": "https://services.ina-elections.dz/services/register",
    "iconName": "CheckCircle2",
    "isPopular": false,
    "services": [
      {
        "id": "ina-elections-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://ina-elections.dz/",
        "isOnline": true
      },
      {
        "id": "ina-elections-srv-2",
        "title": {
          "ar": "سجل الآن",
          "fr": "S'inscrire en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سجل الآن",
          "fr": "Accès direct au portail officiel : S'inscrire en Ligne"
        },
        "url": "https://services.ina-elections.dz/services/register",
        "isOnline": true
      },
      {
        "id": "ina-elections-srv-3",
        "title": {
          "ar": "بطاقة الناخب طلب نسخة من بطاقة الناخب",
          "fr": "Services Électoraux & Carte d'Électeur (ANIE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: بطاقة الناخب طلب نسخة من بطاقة الناخب",
          "fr": "Accès direct au portail officiel : Services Électoraux & Carte d'Électeur (ANIE)"
        },
        "url": "https://services.ina-elections.dz/services/duplicata",
        "isOnline": true
      },
      {
        "id": "ina-elections-srv-4",
        "title": {
          "ar": "سجل نفسك في حفاظ الأمانة سجل نفسك في حفاظ الأمانة",
          "fr": "Services Électoraux & Carte d'Électeur (ANIE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: سجل نفسك في حفاظ الأمانة سجل نفسك في حفاظ الأمانة",
          "fr": "Accès direct au portail officiel : Services Électoraux & Carte d'Électeur (ANIE)"
        },
        "url": "https://services.ina-elections.dz/services/hofad-amana",
        "isOnline": true
      },
      {
        "id": "ina-elections-srv-5",
        "title": {
          "ar": "هل أنت مسجل؟ هل أنت مسجل؟",
          "fr": "Vérifier Votre Inscription sur la Liste Électorale (ANIE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: هل أنت مسجل؟ هل أنت مسجل؟",
          "fr": "Accès direct au portail officiel : Vérifier Votre Inscription sur la Liste Électorale (ANIE)"
        },
        "url": "https://services.ina-elections.dz/services/orientation",
        "isOnline": true
      },
      {
        "id": "ina-elections-srv-6",
        "title": {
          "ar": "تغيير مكان الإقامة طلب تغيير مكان الإقامة",
          "fr": "Demande de Changement de Résidence Électorale"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تغيير مكان الإقامة طلب تغيير مكان الإقامة",
          "fr": "Accès direct au portail officiel : Demande de Changement de Résidence Électorale"
        },
        "url": "https://services.ina-elections.dz/services/residence",
        "isOnline": true
      },
      {
        "id": "ina-elections-srv-7",
        "title": {
          "ar": "تحيين وتصحيح المعلومات تحيين وتصحيح المعلومات",
          "fr": "Mise à Jour et Rectification des Données Électorales"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تحيين وتصحيح المعلومات تحيين وتصحيح المعلومات",
          "fr": "Accès direct au portail officiel : Mise à Jour et Rectification des Données Électorales"
        },
        "url": "https://services.ina-elections.dz/services/update-infos",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ السلطة الوطنية المستقلة للانتخابات (ANIE)؟",
          "fr": "Comment accéder aux services officiels de Autorité Nationale Indépendante des Élections (ANIE) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ السلطة الوطنية المستقلة للانتخابات (ANIE) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Autorité Nationale Indépendante des Élections (ANIE) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "interieur",
    "slug": "interieur",
    "category": "justice_interior",
    "name": {
      "ar": "وزارة الداخلية والجماعات المحلية والنقل",
      "fr": "Ministère de l'Intérieur et des Collectivités Locales"
    },
    "acronym": "MICLAT",
    "ministry": {
      "ar": "وزارة الداخلية والجماعات المحلية",
      "fr": "Ministère de l'Intérieur"
    },
    "description": {
      "ar": "اكتشف خدمات وزارة الداخلية والجماعات المحلية الرقمية: البطاقة بيوميترية جواز السفر، شهادة الميلاد، الشباك عن بعد، منحة رمضان، وأكثر من ذلك بكثير. الوصول السريع والآمن لجم",
      "fr": "Portail détaillé des services publics pour Ministère de l'Intérieur et des Collectivités Locales : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.interieur.gov.dz/index.php/ar/",
    "portalUrl": "https://etatcivil.interieur.gov.dz/",
    "iconName": "Landmark",
    "isPopular": true,
    "services": [
      {
        "id": "interieur-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.interieur.gov.dz/index.php/ar/",
        "isOnline": true
      },
      {
        "id": "interieur-srv-2",
        "title": {
          "ar": "إستخرجها الآن",
          "fr": "Extraire le Document en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: إستخرجها الآن",
          "fr": "Accès direct au portail officiel : Extraire le Document en Ligne"
        },
        "url": "https://etatcivil.interieur.gov.dz/",
        "isOnline": true
      },
      {
        "id": "interieur-srv-3",
        "title": {
          "ar": "بطاقة التعريف الوطنية البيومترية طلب بطاقة التعريف الوطنية البيومترية",
          "fr": "Carte Nationale d'Identité Biométrique (CNIBE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: بطاقة التعريف الوطنية البيومترية طلب بطاقة التعريف الوطنية البيومترية",
          "fr": "Accès direct au portail officiel : Carte Nationale d'Identité Biométrique (CNIBE)"
        },
        "url": "https://services.interieur.gov.dz/ar/2020/10/24/%d8%b7%d9%84%d8%a8-%d8%a8%d8%b7%d8%a7%d9%82%d8%a9-%d8%a7%d9%84%d8%aa%d8%b9%d8%b1%d9%8a%d9%81-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a%d8%a9-%d8%a7%d9%84%d8%a8%d9%8a%d9%88%d9%85%d8%aa%d8%b1%d9%8a%d8%a9/",
        "isOnline": true
      },
      {
        "id": "interieur-srv-4",
        "title": {
          "ar": "متابعة طلب بطاقة التعريف الوطنية البيومترية متابعة الطلب",
          "fr": "Carte Nationale d'Identité Biométrique (CNIBE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: متابعة طلب بطاقة التعريف الوطنية البيومترية متابعة الطلب",
          "fr": "Accès direct au portail officiel : Carte Nationale d'Identité Biométrique (CNIBE)"
        },
        "url": "https://passeport.interieur.gov.dz/Ar/SuiviCNIBE/Suivi%20la%20demande%20de%20la%20carte%20national%20d'identit%c3%a9%20biom%c3%a9trique%20%c3%a9lectronique",
        "isOnline": true
      },
      {
        "id": "interieur-srv-5",
        "title": {
          "ar": "جواز السفر الإلكتروني طلب جواز السفر الإلكتروني",
          "fr": "Passeport Biométrique Électronique"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جواز السفر الإلكتروني طلب جواز السفر الإلكتروني",
          "fr": "Accès direct au portail officiel : Passeport Biométrique Électronique"
        },
        "url": "https://passeport.interieur.gov.dz/Ar/Inscription/BaBou",
        "isOnline": true
      },
      {
        "id": "interieur-srv-6",
        "title": {
          "ar": "متابعة طلب جواز السفر البيومتري متابعة طلب جواز السفر البيومتري",
          "fr": "Passeport Biométrique Électronique"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: متابعة طلب جواز السفر البيومتري متابعة طلب جواز السفر البيومتري",
          "fr": "Accès direct au portail officiel : Passeport Biométrique Électronique"
        },
        "url": "https://passeport.interieur.gov.dz/Ar/Suivi/Suivi%20demande%20passeport",
        "isOnline": true
      },
      {
        "id": "interieur-srv-7",
        "title": {
          "ar": "صور بيوميترية مطابقة تحميل صور بيوميترية مطابقة",
          "fr": "Téléverser des Photos Biométriques Conformes"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: صور بيوميترية مطابقة تحميل صور بيوميترية مطابقة",
          "fr": "Accès direct au portail officiel : Téléverser des Photos Biométriques Conformes"
        },
        "url": "https://passeport.interieur.gov.dz/Ar/Rejet/Chargement_Photo",
        "isOnline": true
      },
      {
        "id": "interieur-srv-8",
        "title": {
          "ar": "عقد الزواج استخراج عقد الزواج",
          "fr": "Acte de Mariage en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: عقد الزواج استخراج عقد الزواج",
          "fr": "Accès direct au portail officiel : Acte de Mariage en Ligne"
        },
        "url": "https://etatcivil.interieur.gov.dz/ActeMariage/",
        "isOnline": true
      },
      {
        "id": "interieur-srv-9",
        "title": {
          "ar": "شهادة الوفاة استخراج شهادة الوفاة",
          "fr": "Acte de Décès en Ligne"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة الوفاة استخراج شهادة الوفاة",
          "fr": "Accès direct au portail officiel : Acte de Décès en Ligne"
        },
        "url": "https://etatcivil.interieur.gov.dz/ActeDeces/",
        "isOnline": true
      },
      {
        "id": "interieur-srv-10",
        "title": {
          "ar": "شهادة الميلاد S12 استخراج شهادة الميلاد S12",
          "fr": "Extrait de Naissance Spécial 12S"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة الميلاد S12 استخراج شهادة الميلاد S12",
          "fr": "Accès direct au portail officiel : Extrait de Naissance Spécial 12S"
        },
        "url": "https://demande12s.interieur.gov.dz/Ar/WFDemande.aspx",
        "isOnline": true
      },
      {
        "id": "interieur-srv-11",
        "title": {
          "ar": "شهادة الميلاد S12 متابعة طلب شهادة الميلاد S12",
          "fr": "Extrait de Naissance Spécial 12S"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة الميلاد S12 متابعة طلب شهادة الميلاد S12",
          "fr": "Accès direct au portail officiel : Extrait de Naissance Spécial 12S"
        },
        "url": "https://demande12s.interieur.gov.dz/Ar/WFSuivi.aspx",
        "isOnline": true
      },
      {
        "id": "interieur-srv-12",
        "title": {
          "ar": "الشباك عن بعد الدخول في الشباك عن بعد",
          "fr": "Guichet Administratif à Distance"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الشباك عن بعد الدخول في الشباك عن بعد",
          "fr": "Accès direct au portail officiel : Guichet Administratif à Distance"
        },
        "url": "https://prestations.interieur.gov.dz/guichet/",
        "isOnline": true
      },
      {
        "id": "interieur-srv-13",
        "title": {
          "ar": "جديد منحة التضامن لشهر رمضان 1448 هـ / 2027 فترة التسجيل المعلنة: من 11 أكتوبر إلى 09 نوفمبر 2026. انتقل إلى المنصة للاطلاع على الشروط وإيداع الطلب.",
          "fr": "Allocation de Solidarité Ramadan 1448H / 2027"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جديد منحة التضامن لشهر رمضان 1448 هـ / 2027 فترة التسجيل المعلنة: من 11 أكتوبر إلى 09 نوفمبر 2026. انتقل إلى المنصة للاطلاع على الشروط وإيداع الطلب.",
          "fr": "Accès direct au portail officiel : Allocation de Solidarité Ramadan 1448H / 2027"
        },
        "url": "https://prestations.interieur.gov.dz/solidariteramdhan/",
        "isOnline": true
      },
      {
        "id": "interieur-srv-14",
        "title": {
          "ar": "المنصة الشكاوي والعرائض الدخول للمنصة",
          "fr": "Formulaire de Contact et Assistance"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: المنصة الشكاوي والعرائض الدخول للمنصة",
          "fr": "Accès direct au portail officiel : Formulaire de Contact et Assistance"
        },
        "url": "https://www.interieur.gov.dz/index.php/ar/component/annuaire/?view=contacter_nous_ar",
        "isOnline": true
      },
      {
        "id": "interieur-srv-15",
        "title": {
          "ar": "القراءة الآلية لبطاقة التعريف الوطنية البيومترية القراءة الآلية لبطاقة التعريف الوطنية البيومترية",
          "fr": "Carte Nationale d'Identité Biométrique (CNIBE)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: القراءة الآلية لبطاقة التعريف الوطنية البيومترية القراءة الآلية لبطاقة التعريف الوطنية البيومترية",
          "fr": "Accès direct au portail officiel : Carte Nationale d'Identité Biométrique (CNIBE)"
        },
        "url": "https://macnibe.interieur.gov.dz/Files/DzaEidCard.msi",
        "isOnline": true
      },
      {
        "id": "interieur-srv-16",
        "title": {
          "ar": "تطبيق “ولايتي تطبيق “ولايتي”",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق “ولايتي تطبيق “ولايتي”",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "http://monographie.interieur.gov.dz/data/wilayati.apk",
        "isOnline": true
      },
      {
        "id": "interieur-srv-17",
        "title": {
          "ar": "تطبيق نظيف تطبيق نظيف",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق نظيف تطبيق نظيف",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=dz.and.ndif&hl=ar&gl=US",
        "isOnline": true
      },
      {
        "id": "interieur-srv-18",
        "title": {
          "ar": "تطبيق ألو الشرطة تطبيق ألو الشرطة",
          "fr": "Application Mobile Officielle"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تطبيق ألو الشرطة تطبيق ألو الشرطة",
          "fr": "Accès direct au portail officiel : Application Mobile Officielle"
        },
        "url": "https://play.google.com/store/apps/details?id=allochorta.algeriepolice.dz&hl=ar&gl=US",
        "isOnline": true
      },
      {
        "id": "interieur-srv-19",
        "title": {
          "ar": "شهادة الكفاءة لرخصة السياقة طلب شهادة الكفاءة لرخصة السياقة",
          "fr": "Certificat de Capacité du Permis de Conduire"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: شهادة الكفاءة لرخصة السياقة طلب شهادة الكفاءة لرخصة السياقة",
          "fr": "Accès direct au portail officiel : Certificat de Capacité du Permis de Conduire"
        },
        "url": "https://capacitepc.interieur.gov.dz/GET-STARTED",
        "isOnline": true
      },
      {
        "id": "interieur-srv-20",
        "title": {
          "ar": "طلب تسجيل التصريح تأسيس جمعية طلب طلب تسجيل التصريح التأسيسي للجمعيات البلدية و لجان الأحياء",
          "fr": "Déclaration de Création d'Associations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: طلب تسجيل التصريح تأسيس جمعية طلب طلب تسجيل التصريح التأسيسي للجمعيات البلدية و لجان الأحياء",
          "fr": "Accès direct au portail officiel : Déclaration de Création d'Associations"
        },
        "url": "https://prestations.interieur.gov.dz/Association/LOGIN",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ وزارة الداخلية والجماعات المحلية والنقل؟",
          "fr": "Comment accéder aux services officiels de Ministère de l'Intérieur et des Collectivités Locales ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ وزارة الداخلية والجماعات المحلية والنقل مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Ministère de l'Intérieur et des Collectivités Locales sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  },
  {
    "id": "madr",
    "slug": "madr",
    "category": "ministries",
    "name": {
      "ar": "وزارة الفلاحة والتنمية الريفية والصيد البحري (MADR)",
      "fr": "Ministère de l'Agriculture et du Développement Rural (MADR)"
    },
    "acronym": "MADR",
    "ministry": {
      "ar": "وزارة الفلاحة والتنمية الريفية",
      "fr": "Ministère de l'Agriculture"
    },
    "description": {
      "ar": "تقدم الموقع وزارة الفلاحة والتنمية الريفية والصيد البحري إليكترونية عن بعد دون الحاجة للتنقل وربح الوقت",
      "fr": "Portail détaillé des services publics pour Ministère de l'Agriculture et du Développement Rural (MADR) : accès direct aux téléservices officiels, conditions d'éligibilité et guides pratiques."
    },
    "officialUrl": "https://www.madr.gov.dz/ar",
    "portalUrl": "https://hassad.dz/",
    "iconName": "Compass",
    "isPopular": false,
    "services": [
      {
        "id": "madr-srv-1",
        "title": {
          "ar": "الموقع الرسمي",
          "fr": "Site Officiel"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: الموقع الرسمي",
          "fr": "Accès direct au portail officiel : Site Officiel"
        },
        "url": "https://www.madr.gov.dz/ar",
        "isOnline": true
      },
      {
        "id": "madr-srv-2",
        "title": {
          "ar": "أحجز الآن",
          "fr": "Réserver Maintenant"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: أحجز الآن",
          "fr": "Accès direct au portail officiel : Réserver Maintenant"
        },
        "url": "https://hassad.dz/",
        "isOnline": true
      },
      {
        "id": "madr-srv-3",
        "title": {
          "ar": "السلطة البيطرية الوطنية شهادة التسجيل لدى السلطة البيطرية الوطنية",
          "fr": "Services Vétérinaires & Autorisations Sanitaires"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: السلطة البيطرية الوطنية شهادة التسجيل لدى السلطة البيطرية الوطنية",
          "fr": "Accès direct au portail officiel : Services Vétérinaires & Autorisations Sanitaires"
        },
        "url": "https://pslar.madr.gov.dz/dsv/inscription-alautorite-nationale-veterinaire-avn/",
        "isOnline": true
      },
      {
        "id": "madr-srv-4",
        "title": {
          "ar": "رخصة ممارسة الطب البيطري طلب رخصة ممارسة الطب البيطري و جراحة الحيوانات في القطاع الخاص",
          "fr": "Services Vétérinaires & Autorisations Sanitaires"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: رخصة ممارسة الطب البيطري طلب رخصة ممارسة الطب البيطري و جراحة الحيوانات في القطاع الخاص",
          "fr": "Accès direct au portail officiel : Services Vétérinaires & Autorisations Sanitaires"
        },
        "url": "https://adhahi.dz/points-de-vente",
        "isOnline": true
      },
      {
        "id": "madr-srv-5",
        "title": {
          "ar": "استيراد الشتلات ترخيص تقني مسبق لاستيراد الشتلات",
          "fr": "Autorisations Techniques d'Importation Agricole"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: استيراد الشتلات ترخيص تقني مسبق لاستيراد الشتلات",
          "fr": "Accès direct au portail officiel : Autorisations Techniques d'Importation Agricole"
        },
        "url": "https://pslar.madr.gov.dz/procedure-de-demande-dautorisation-technique-prealable-dimportation-des-plants/",
        "isOnline": true
      },
      {
        "id": "madr-srv-6",
        "title": {
          "ar": "نشاطات معالجة مواد التعبئة الخشبية اعتماد ممارسة نشاطات معالجة مواد التعبئة الخشبية الموجهة للتصدير",
          "fr": "Agrément Traitement des Emballages en Bois à l'Export"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: نشاطات معالجة مواد التعبئة الخشبية اعتماد ممارسة نشاطات معالجة مواد التعبئة الخشبية الموجهة للتصدير",
          "fr": "Accès direct au portail officiel : Agrément Traitement des Emballages en Bois à l'Export"
        },
        "url": "https://pslar.madr.gov.dz/dpvct/agrement-pour-traitement-des-materiaux-demballages-en-bois-destines-a-lexportation/",
        "isOnline": true
      },
      {
        "id": "madr-srv-7",
        "title": {
          "ar": "استيراد البذور ترخيص تقني مسبق لاستيراد البذور",
          "fr": "Autorisations Techniques d'Importation Agricole"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: استيراد البذور ترخيص تقني مسبق لاستيراد البذور",
          "fr": "Accès direct au portail officiel : Autorisations Techniques d'Importation Agricole"
        },
        "url": "https://pslar.madr.gov.dz/dpvct/demande-dautorisation-technique-prealable-dimportation-des-semences/",
        "isOnline": true
      },
      {
        "id": "madr-srv-8",
        "title": {
          "ar": "استيراد بذور البطاطا ترخيص تقني مسبق لاستيراد البذور البطاطا",
          "fr": "Autorisations Techniques d'Importation Agricole"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: استيراد بذور البطاطا ترخيص تقني مسبق لاستيراد البذور البطاطا",
          "fr": "Accès direct au portail officiel : Autorisations Techniques d'Importation Agricole"
        },
        "url": "https://pslar.madr.gov.dz/importation-de-semences-de-pomme-de-terre/",
        "isOnline": true
      },
      {
        "id": "madr-srv-9",
        "title": {
          "ar": "استيراد منتجات الصحة النباتية ترخيص تقني مسبق لاستيراد منتجات الصحة النباتية للاستخدام الزراعي",
          "fr": "Autorisations Techniques d'Importation Agricole"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: استيراد منتجات الصحة النباتية ترخيص تقني مسبق لاستيراد منتجات الصحة النباتية للاستخدام الزراعي",
          "fr": "Accès direct au portail officiel : Autorisations Techniques d'Importation Agricole"
        },
        "url": "https://pslar.madr.gov.dz/dpvct/importation-des-produits-phytosanitaires-a-usage-agricole/",
        "isOnline": true
      },
      {
        "id": "madr-srv-10",
        "title": {
          "ar": "استيراد نبتات الزينة ترخيص تقني مسبق لاستيراد نبتات الزينة",
          "fr": "Autorisations Techniques d'Importation Agricole"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: استيراد نبتات الزينة ترخيص تقني مسبق لاستيراد نبتات الزينة",
          "fr": "Accès direct au portail officiel : Autorisations Techniques d'Importation Agricole"
        },
        "url": "https://pslar.madr.gov.dz/dpvct/demande-dautorisation-technique-prealable-dimportation-des-plants-ornementaux/",
        "isOnline": true
      },
      {
        "id": "madr-srv-11",
        "title": {
          "ar": "التسجيل في أضحية العيد التسجيل في أضحية العيد",
          "fr": "Plateforme Adhahi.dz (Sacrifice de l'Aïd)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: التسجيل في أضحية العيد التسجيل في أضحية العيد",
          "fr": "Accès direct au portail officiel : Plateforme Adhahi.dz (Sacrifice de l'Aïd)"
        },
        "url": "https://adhahi.dz/register",
        "isOnline": true
      },
      {
        "id": "madr-srv-12",
        "title": {
          "ar": "تسجيل الدخول تسجيل الدخول إلى حسابك",
          "fr": "Connexion à l'Espace Utilisateur"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: تسجيل الدخول تسجيل الدخول إلى حسابك",
          "fr": "Accès direct au portail officiel : Connexion à l'Espace Utilisateur"
        },
        "url": "https://adhahi.dz/login",
        "isOnline": true
      },
      {
        "id": "madr-srv-13",
        "title": {
          "ar": "اضاحي العيد بالأرقام متابعة وإحصائيات أضاحي العيد بالارقام",
          "fr": "Plateforme Adhahi.dz (Sacrifice de l'Aïd)"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: اضاحي العيد بالأرقام متابعة وإحصائيات أضاحي العيد بالارقام",
          "fr": "Accès direct au portail officiel : Plateforme Adhahi.dz (Sacrifice de l'Aïd)"
        },
        "url": "https://adhahi.dz/moutons-nationaux/",
        "isOnline": true
      },
      {
        "id": "madr-srv-14",
        "title": {
          "ar": "خلية الإصغاء والتوجيه توجيه الفلاحين والمستثمرين، إنشغالات، إرشادات وإصلاحات",
          "fr": "Cellule d'Écoute, Sondage & Réclamations"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: خلية الإصغاء والتوجيه توجيه الفلاحين والمستثمرين، إنشغالات، إرشادات وإصلاحات",
          "fr": "Accès direct au portail officiel : Cellule d'Écoute, Sondage & Réclamations"
        },
        "url": "https://pslar.madr.gov.dz/cellule-ecoute/",
        "isOnline": true
      },
      {
        "id": "madr-srv-15",
        "title": {
          "ar": "خلية إستقبال التبليغات عن الفساد التبليغ عن مخالفة أو فساد في القطاع",
          "fr": "Plateforme Nationale de Prévention & Signalement"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: خلية إستقبال التبليغات عن الفساد التبليغ عن مخالفة أو فساد في القطاع",
          "fr": "Accès direct au portail officiel : Plateforme Nationale de Prévention & Signalement"
        },
        "url": "https://madr.gov.dz/nazaha/",
        "isOnline": true
      },
      {
        "id": "madr-srv-16",
        "title": {
          "ar": "جدبد \"نافذة الشفافية\" تراخيص الاستيراد المتعلقة بالصحة النباتية والحيوانية",
          "fr": "Autorisations Techniques d'Importation Agricole"
        },
        "description": {
          "ar": "الانتقال المباشر إلى الخدمة عبر الرابط الرسمي المعتمد: جدبد \"نافذة الشفافية\" تراخيص الاستيراد المتعلقة بالصحة النباتية والحيوانية",
          "fr": "Accès direct au portail officiel : Autorisations Techniques d'Importation Agricole"
        },
        "url": "https://madr.gov.dz/transparency",
        "isOnline": true
      }
    ],
    "quickSummary": {
      "targetAudience": {
        "ar": "المواطنون المقيمون، الجالية، والمهنيون المعنيون بالخدمة",
        "fr": "Citoyens algériens, diaspora et professionnels concernés"
      },
      "processingTime": {
        "ar": "متابعة إلكترونية فورية عبر المنصات الرسمية المعتمدة",
        "fr": "Traitement et suivi en ligne selon le délai réglementaire"
      },
      "fees": {
        "ar": "مجانية التصفح وتخضع الرسوم للتسعيرة الرسمية للخدمة",
        "fr": "Accès gratuit ; frais réglementaires applicables selon la prestation"
      },
      "channel": {
        "ar": "المنصات الرقمية الرسمية للقطاع ومراكز الاستقبال الولائية",
        "fr": "Téléservices web officiels et guichets de proximité"
      },
      "keyRequirement": {
        "ar": "رقم التعريف الوطني NIN، وثيقة الهوية، أو رقم التسجيل حسب الخدمة",
        "fr": "NIN, pièce d'identité biométrique ou identifiant usager"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "الهوية الرقمية والولوج",
          "fr": "Identification usager"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية أو رقم التعريف الوطني NIN أو رقم التسجيل",
          "fr": "Carte d'identité biométrique, NIN ou identifiant sectoriel"
        }
      },
      {
        "label": {
          "ar": "قناة الدفع الإلكتروني",
          "fr": "Moyen de e-paiement"
        },
        "value": {
          "ar": "البطاقة الذهبية لبريد الجزائر أو بطاقة ما بين البنوك CIB عند الاقتضاء",
          "fr": "Carte Edahabia (Algérie Poste) ou carte interbancaire CIB si requis"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "كيف أصل إلى المنصة الرسمية لـ وزارة الفلاحة والتنمية الريفية والصيد البحري (MADR)؟",
          "fr": "Comment accéder aux services officiels de Ministère de l'Agriculture et du Développement Rural (MADR) ?"
        },
        "answer": {
          "ar": "تجد كافة الروابط الرسمية المباشرة والأقسام الرقمية المعتمدة لـ وزارة الفلاحة والتنمية الريفية والصيد البحري (MADR) مدرجة ومحدثة في هذه الصفحة لتفادي المواقع الوهمية.",
          "fr": "Tous les liens officiels et téléservices vérifiés de Ministère de l'Agriculture et du Développement Rural (MADR) sont regroupés directement dans les cartes ci-dessus."
        }
      }
    ]
  }
];
