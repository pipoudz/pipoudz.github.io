import { BankItem, InsuranceItem } from '../types';

export const banksList: BankItem[] = [
  {
    "id": "ag-bank",
    "slug": "ag-bank",
    "name": {
      "ar": "بنك الخليج الجزائر (AGB)",
      "fr": "Gulf Bank Algérie (AGB)"
    },
    "acronym": "AGB",
    "type": "private",
    "description": {
      "ar": "دليل الخدمات المصرفية لبنك الخليج الجزائر AGB: تطبيق AGB Online، منصة الصيرفة الإلكترونية، الصيرفة والتمويل الإسلامي، بطاقات CIB وVisa وMastercard، وقنوات الدعم.",
      "fr": "Guide complet des services numériques de Gulf Bank Algérie (AGB) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://mobileapp.agb.dz/",
    "eBankingUrl": "https://mobileapp.agb.dz/",
    "swiftCode": "GUALDZAL",
    "headquarters": {
      "ar": "دالي إبراهيم، الجزائر العاصمة",
      "fr": "Daly Ibrahim, Alger"
    },
    "services": [
      {
        "ar": "بوابة AGB Online",
        "fr": "Portail AGB Online",
        "url": "https://mobileapp.agb.dz/"
      },
      {
        "ar": "الموقع الرسمي (agb.dz)",
        "fr": "Site Officiel",
        "url": "https://www.agb.dz/"
      },
      {
        "ar": "تطبيق AGB Online (Google Play) تطبيق الصيرفة الذكية لأجهزة أندرويد: الاطلاع على الأرصدة، تحويل الأموال، إدارة البطاقات وطلب دفاتر الشيكات.",
        "fr": "Application Mobile Officielle",
        "url": "https://play.google.com/store/apps/details?id=com.agb.mobile"
      },
      {
        "ar": "تطبيق AGB Online (App Store) تطبيق الخدمات المصرفية لأجهزة آيفون وiPad لتجربة بنكية رقمية سلسة وآمنة تعمل على مدار الساعة.",
        "fr": "Application Mobile Officielle",
        "url": "https://apps.apple.com/dz/app/agb-online/id1527415174"
      }
    ],
    "contactPhone": "021 98 00 00 / 3311",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها بنك الخليج الجزائر (AGB)؟",
          "fr": "Quels sont les services en ligne proposés par Gulf Bank Algérie (AGB) ?"
        },
        "answer": {
          "ar": "يتيح بنك الخليج الجزائر (AGB) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Gulf Bank Algérie (AGB) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل بنك الخليج الجزائر (AGB) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez AGB ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "albaraka-bank",
    "slug": "albaraka-bank",
    "name": {
      "ar": "بنك البركة الجزائري (Al Baraka)",
      "fr": "Banque Al Baraka d'Algérie"
    },
    "acronym": "ALBARAKA",
    "type": "islamic",
    "description": {
      "ar": "دليل الخدمات المصرفية والحلول الرقمية لبنك البركة الجزائري (Al Baraka Bank Algeria): تطبيق الصيرفة Al Baraka Dz، منصة Al Baraka Net، صيغ التمويل الإسلامي (مرابحة، إجارة، استصناع)، بطاقات CIB وفيزا، وحسابات الاستثمار المتوافقة مع الشريعة.",
      "fr": "Guide complet des services numériques de Banque Al Baraka d'Algérie : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.albaraka-bank.dz/?lang=ar",
    "eBankingUrl": "https://www.albaraka-bank.dz/?lang=ar",
    "swiftCode": "BRKADZAL",
    "headquarters": {
      "ar": "حي بوتليليس، الرويبة، الجزائر العاصمة",
      "fr": "Haï Boutelilis, Rouiba, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (albaraka-bank.dz)",
        "fr": "Site Officiel",
        "url": "https://www.albaraka-bank.dz/?lang=ar"
      }
    ],
    "contactPhone": "023 85 52 52",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "مصرف إسلامي متكامل 100% وفق أحكام الشريعة",
        "fr": "Banque islamique conforme à 100% aux préceptes de la Charia"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها بنك البركة الجزائري (Al Baraka)؟",
          "fr": "Quels sont les services en ligne proposés par Banque Al Baraka d'Algérie ?"
        },
        "answer": {
          "ar": "يتيح بنك البركة الجزائري (Al Baraka) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Banque Al Baraka d'Algérie permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل بنك البركة الجزائري (Al Baraka) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez ALBARAKA ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "arabbank",
    "slug": "arabbank",
    "name": {
      "ar": "البنك العربي الجزائر (Arab Bank)",
      "fr": "Arab Bank PLC Algeria"
    },
    "acronym": "ARAB BANK",
    "type": "private",
    "description": {
      "ar": "دليل الخدمات المصرفية للبنك العربي الجزائر (Arab Bank Algeria): منصة الصيرفة الإلكترونية عربي أونلاين (Arabi Online)، تطبيق عربي موبايل (Arabi Mobile)، بطاقات CIB وفيزا الدولية، وخدمات تمويل الأفراد والشركات.",
      "fr": "Guide complet des services numériques de Arab Bank PLC Algeria : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://arabbank.dz/ar",
    "eBankingUrl": "https://arabbank.dz/ar",
    "swiftCode": "ARABDZAL",
    "headquarters": {
      "ar": "حيدرة، الجزائر العاصمة",
      "fr": "Hydra, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (arabbank.dz)",
        "fr": "Site Officiel",
        "url": "https://arabbank.dz/ar"
      }
    ],
    "contactPhone": "023 48 92 00",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها البنك العربي الجزائر (Arab Bank)؟",
          "fr": "Quels sont les services en ligne proposés par Arab Bank PLC Algeria ?"
        },
        "answer": {
          "ar": "يتيح البنك العربي الجزائر (Arab Bank) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Arab Bank PLC Algeria permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل البنك العربي الجزائر (Arab Bank) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez ARAB BANK ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "badr",
    "slug": "badr",
    "name": {
      "ar": "بنك الفلاحة والتنمية الريفية (BADR)",
      "fr": "Banque de l'Agriculture et du Développement Rural (BADR)"
    },
    "acronym": "BADR",
    "type": "public",
    "description": {
      "ar": "دليل الخدمات الرقمية لبنك الفلاحة والتنمية الريفية BADR: الدخول لمنصة الصيرفة الإلكترونية MyBADR، تطبيق الهاتف المحمول، الصيرفة الإسلامية، وأرقام الدعم المباشر.",
      "fr": "Guide complet des services numériques de Banque de l'Agriculture et du Développement Rural (BADR) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://badrbank.dz/",
    "eBankingUrl": "https://mybadr.badrbank.dz/",
    "swiftCode": "BADRDZAL",
    "headquarters": {
      "ar": "شارع العقيد عميروش، الجزائر العاصمة",
      "fr": "Boulevard Colonel Amirouche, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (badrbank.dz)",
        "fr": "Site Officiel",
        "url": "https://badrbank.dz/"
      },
      {
        "ar": "فضاء الصيرفة MyBADR",
        "fr": "Espace Banque en Ligne (E-Banking)",
        "url": "https://mybadr.badrbank.dz/"
      },
      {
        "ar": "الصيرفة الإسلامية لبنك بدر حلول التمويل والادخار المطابقة للشريعة (مرابحة غراس، عتاد، عقارية، حسابات استثمار وتوفير إسلامية).",
        "fr": "Services de Finance Islamique",
        "url": "https://badrbank.dz/banque-islamique/"
      },
      {
        "ar": "محدد مواقع الوكالات والصرافات (GAB) البحث وتحديد مواقع أكثر من 340 وكالة وموزعات السحب الآلي وشبابيك الصيرفة الإسلامية لبنك BADR.",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://badrbank.dz/trouver-une-agence/"
      },
      {
        "ar": "البطاقات النقدية والدفع الإلكتروني (CIB) إدارة بطاقات الدفع والسحب الوطنية، تفعيل الدفع عبر الإنترنت، وخدمات الدفع عبر أجهزة TPE لدى التجار.",
        "fr": "Cartes Bancaires & Monétique (CIB / Internationale)",
        "url": "https://badrbank.dz/particuliers/monetique/"
      },
      {
        "ar": "فضاء الاستفسارات والشكاوى إرسال طلبات الاستفسار والملاحظات والشكاوى مباشرة إلى إدارة البنك عبر الاستمارة الرقمية الرسمية.",
        "fr": "Espace Réclamations & Contact Client",
        "url": "https://badrbank.dz/contact/"
      },
      {
        "ar": "تطبيق MyBADR (Android) التطبيق الرسمي لإدارة الحسابات، التحويلات البنكية، تتبع العمليات، وتحميل كشف الهوية البنكية RIB فوريا.",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=com.badr.mybadr"
      },
      {
        "ar": "تطبيق MyBADR (iOS / App Store) نسخة هواتف آيفون وأجهزة آبل للوصول السريع والآمن إلى خدمات بنك BADR ومتابعة الأرصدة 24/7.",
        "fr": "Application Mobile Officielle (iOS / iPhone)",
        "url": "https://apps.apple.com/app/mybadr/id1546949312"
      }
    ],
    "contactPhone": "021 64 26 70 / 3014",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها بنك الفلاحة والتنمية الريفية (BADR)؟",
          "fr": "Quels sont les services en ligne proposés par Banque de l'Agriculture et du Développement Rural (BADR) ?"
        },
        "answer": {
          "ar": "يتيح بنك الفلاحة والتنمية الريفية (BADR) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Banque de l'Agriculture et du Développement Rural (BADR) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل بنك الفلاحة والتنمية الريفية (BADR) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez BADR ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "bank-abc",
    "slug": "bank-abc",
    "name": {
      "ar": "بنك المؤسسة العربية المصرفية الجزائر (Bank ABC)",
      "fr": "Arab Banking Corporation Algeria (Bank ABC)"
    },
    "acronym": "ABC",
    "type": "private",
    "description": {
      "ar": "دليل الخدمات المصرفية لبنك ABC الجزائر (المؤسسة العربية المصرفية): منصة ABC Digital للصيرفة الرقمية، نافذة الصيرفة والتمويل الإسلامي البراق (Al-Buraq)، بطاقات CIB وبطاقات الدفع الدولية.",
      "fr": "Guide complet des services numériques de Arab Banking Corporation Algeria (Bank ABC) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.bank-abc.com/ar/CountrySites/Algeria",
    "eBankingUrl": "https://www.bank-abc.com/ar/CountrySites/Algeria",
    "swiftCode": "ABCODZAL",
    "headquarters": {
      "ar": "بئر مراد رايس، الجزائر العاصمة",
      "fr": "Bir Mourad Raïs, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي لبنك ABC الجزائر",
        "fr": "Site Officiel",
        "url": "https://www.bank-abc.com/ar/CountrySites/Algeria"
      },
      {
        "ar": "مجموعة Bank ABC العالمية",
        "fr": "Groupe International Bank ABC",
        "url": "https://www.bank-abc.com/"
      }
    ],
    "contactPhone": "023 54 15 15",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها بنك المؤسسة العربية المصرفية الجزائر (Bank ABC)؟",
          "fr": "Quels sont les services en ligne proposés par Arab Banking Corporation Algeria (Bank ABC) ?"
        },
        "answer": {
          "ar": "يتيح بنك المؤسسة العربية المصرفية الجزائر (Bank ABC) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Arab Banking Corporation Algeria (Bank ABC) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل بنك المؤسسة العربية المصرفية الجزائر (Bank ABC) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez ABC ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "bankalgeriane",
    "slug": "bankalgeriane",
    "name": {
      "ar": "دليل البنوك الجزائرية العمومية وبنك الجزائر",
      "fr": "Banques Publiques Algériennes & Régulation Bancaire"
    },
    "acronym": "BANQUES DZ",
    "type": "central",
    "description": {
      "ar": "اكتشف خدمات البنوك العمومية الجزائرية والخدمات البنكية الرقمية كل ما تحتاجه لتسهيل حياتك اليومية",
      "fr": "Guide complet des services numériques de Banques Publiques Algériennes & Régulation Bancaire : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.bank-of-algeria.dz/",
    "eBankingUrl": "https://www.bank-of-algeria.dz/",
    "swiftCode": "BALGDZAL",
    "headquarters": {
      "ar": "شارع زيغود يوسف، الجزائر العاصمة",
      "fr": "Boulevard Zighoud Youcef, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي لبنك الجزائر",
        "fr": "Portail Officiel de la Banque d'Algérie",
        "url": "https://www.bank-of-algeria.dz/"
      },
      {
        "ar": "الموقع الرسمي لوزارة المالية",
        "fr": "Portail Officiel du Ministère des Finances",
        "url": "https://www.mf.gov.dz/"
      }
    ],
    "contactPhone": "021 63 14 27",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها دليل البنوك الجزائرية العمومية وبنك الجزائر؟",
          "fr": "Quels sont les services en ligne proposés par Banques Publiques Algériennes & Régulation Bancaire ?"
        },
        "answer": {
          "ar": "يتيح دليل البنوك الجزائرية العمومية وبنك الجزائر الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Banques Publiques Algériennes & Régulation Bancaire permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل دليل البنوك الجزائرية العمومية وبنك الجزائر التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez BANQUES DZ ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "banketranger",
    "slug": "banketranger",
    "name": {
      "ar": "البنوك الخاصة والأجنبية المعتمدة في الجزائر",
      "fr": "Banques Privées et Étrangères Agréées en Algérie"
    },
    "acronym": "BANQUES PR",
    "type": "private",
    "description": {
      "ar": "اكتشف خدمات البنوك الأجنبية في الجزائر، مشاريع، تمويل وكل ما تحتاجه لتسهيل حياتك اليومية. تعرف على البنوك الأجنبية المتاحة في الجزائر وكيفية الاستفادة من خدماتها الرقمية",
      "fr": "Guide complet des services numériques de Banques Privées et Étrangères Agréées en Algérie : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.bank-of-algeria.dz/",
    "eBankingUrl": "https://www.bank-of-algeria.dz/",
    "swiftCode": "AGREEDZ",
    "headquarters": {
      "ar": "حيدرة وبن عكنون، الجزائر العاصمة",
      "fr": "Hydra & Ben Aknoun, Alger"
    },
    "services": [
      {
        "ar": "سجل البنوك المعتمدة لدى بنك الجزائر",
        "fr": "Registre des Banques Agréées — Banque d'Algérie",
        "url": "https://www.bank-of-algeria.dz/"
      },
      {
        "ar": "البوابة الرسمية لوزارة المالية",
        "fr": "Portail Officiel du Ministère des Finances",
        "url": "https://www.mf.gov.dz/"
      }
    ],
    "contactPhone": "021 63 14 27",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها البنوك الخاصة والأجنبية المعتمدة في الجزائر؟",
          "fr": "Quels sont les services en ligne proposés par Banques Privées et Étrangères Agréées en Algérie ?"
        },
        "answer": {
          "ar": "يتيح البنوك الخاصة والأجنبية المعتمدة في الجزائر الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Banques Privées et Étrangères Agréées en Algérie permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل البنوك الخاصة والأجنبية المعتمدة في الجزائر التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez BANQUES PR ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "bdl",
    "slug": "bdl",
    "name": {
      "ar": "بنك التنمية المحلية (BDL)",
      "fr": "Banque de Développement Local (BDL)"
    },
    "acronym": "BDL",
    "type": "public",
    "description": {
      "ar": "دليل الخدمات الرقمية لبنك التنمية المحلية BDL: الدخول لمنصة الصيرفة الإلكترونية E-Banking، تطبيق الهاتف DIGIT BDL، الصيرفة الإسلامية، محاكي القروض، وأرقام الدعم المباشر.",
      "fr": "Guide complet des services numériques de Banque de Développement Local (BDL) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.bdl.dz/ar/",
    "eBankingUrl": "https://ebanking.bdl.dz/",
    "swiftCode": "BDLODZAL",
    "headquarters": {
      "ar": "سطاوالي، الجزائر العاصمة",
      "fr": "Staouéli, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (bdl.dz)",
        "fr": "Site Officiel",
        "url": "https://www.bdl.dz/ar/"
      },
      {
        "ar": "فضاء الصيرفة E-Banking",
        "fr": "Espace Banque en Ligne (E-Banking)",
        "url": "https://ebanking.bdl.dz/"
      },
      {
        "ar": "الصيرفة الإسلامية (البديل) حلول التمويل والادخار الموافقة للشريعة (مرابحة استهلاكية، مرابحة سيارات وعقار، إجارة منتهية بالتمليك، وحسابات الاستثمار).",
        "fr": "Services de Finance Islamique",
        "url": "https://www.bdl.dz/ar/banque-islamique/"
      },
      {
        "ar": "محاكي القروض والتمويلات محاكاة تمويل المشاريع، القروض العقارية، القروض الاستهلاكية والتمويلات الإسلامية وحساب الأقساط الشهرية بدقة.",
        "fr": "Simulateur de Crédits et Financements",
        "url": "https://www.bdl.dz/ar/simulateur-de-credit.html"
      },
      {
        "ar": "شبكة الوكالات وموزعات النقد (GAB) البحث وتحديد مواقع وكالات بنك التنمية المحلية، شبابيك الصيرفة الإسلامية وموزعات السحب الآلي عبر كافة الولايات.",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://www.bdl.dz/ar/reseau-agences.html"
      },
      {
        "ar": "البطاقات النقدية والدفع الإلكتروني إدارة بطاقات CIB و Mastercard و Visa، تفعيل الدفع عبر الإنترنت، وحلول الدفع عبر أجهزة TPE للتجار والمؤسسات.",
        "fr": "Cartes Bancaires & Monétique (CIB / Internationale)",
        "url": "https://www.bdl.dz/ar/monetique.html"
      },
      {
        "ar": "فضاء الاستفسارات والشكاوى إرسال طلبات الاستفسار والملاحظات والشكاوى مباشرة إلى إدارة البنك عبر الاستمارة الرقمية الرسمية.",
        "fr": "Espace Réclamations & Contact Client",
        "url": "https://www.bdl.dz/ar/contact.html"
      },
      {
        "ar": "تطبيق DIGIT BDL (Android) التطبيق الرسمي لإدارة الحسابات، التحويلات البنكية، تتبع العمليات، طلب البطاقات، واستخراج كشف الهوية البنكية RIB فوريا.",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=com.aebs.p2bbdl"
      },
      {
        "ar": "تطبيق DIGIT BDL (iOS / App Store) نسخة هواتف آيفون وأجهزة آبل للوصول السريع والآمن إلى خدمات بنك BDL وتتبع الأرصدة والتحويلات 24/7.",
        "fr": "Application Mobile Officielle (iOS / iPhone)",
        "url": "https://apps.apple.com/app/digit-bdl/id1571424161"
      }
    ],
    "contactPhone": "023 39 50 00 / 3312",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها بنك التنمية المحلية (BDL)؟",
          "fr": "Quels sont les services en ligne proposés par Banque de Développement Local (BDL) ?"
        },
        "answer": {
          "ar": "يتيح بنك التنمية المحلية (BDL) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Banque de Développement Local (BDL) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل بنك التنمية المحلية (BDL) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez BDL ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "bea",
    "slug": "bea",
    "name": {
      "ar": "بنك الجزائر الخارجي (BEA)",
      "fr": "Banque Extérieure d'Algérie (BEA)"
    },
    "acronym": "BEA",
    "type": "public",
    "description": {
      "ar": "دليل الخدمات الرقمية لبنك الجزائر الخارجي BEA: الدخول إلى منصة الصيرفة الإلكترونية E-Banking، تحميل تطبيق BEA MOBILE، محاكي القروض والتمويل الإسلامي، وأرقام مركز الاتصال المباشر.",
      "fr": "Guide complet des services numériques de Banque Extérieure d'Algérie (BEA) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://bea.dz/",
    "eBankingUrl": "https://ebanking.bea.dz/",
    "swiftCode": "BEXADZAL",
    "headquarters": {
      "ar": "الأبيار، الجزائر العاصمة",
      "fr": "El Biar, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (bea.dz)",
        "fr": "Site Officiel",
        "url": "https://bea.dz/"
      },
      {
        "ar": "فضاء الصيرفة الإلكترونية",
        "fr": "Espace Banque en Ligne (E-Banking)",
        "url": "https://ebanking.bea.dz/"
      },
      {
        "ar": "الصيرفة الإسلامية استكشاف حلول ومنتجات التمويل والادخار المتوافقة مع أحكام الشريعة الإسلامية للأفراد والمؤسسات.",
        "fr": "Services de Finance Islamique",
        "url": "https://bea.dz/index.php/finance-islamique"
      },
      {
        "ar": "محاكي القروض والتمويل حساب تقريبي لقيمة التمويل العقاري والاستهلاكي والأقساط الشهرية ونسب الاقتطاع بنقرة واحدة.",
        "fr": "Simulateur de Crédits et Financements",
        "url": "https://bea.dz/index.php/simulateur"
      },
      {
        "ar": "محدد مواقع الوكالات وموزعات النقد (GAB) العثور على أقرب وكالة بنكية، مكاتب الصيرفة الإسلامية، وأجهزة السحب الآلي التابعة للبنك عبر الخريطة.",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://bea.dz/index.php/agences"
      },
      {
        "ar": "فضاء الاستفسارات والشكاوى إرسال طلب استفسار أو شكوى رسمية عبر استمارة التواصل الرقمية على موقع البنك.",
        "fr": "Espace Réclamations & Contact Client",
        "url": "https://bea.dz/index.php/contact"
      },
      {
        "ar": "تطبيق BEA MOBILE (Android) الرابط الرسمي لتحميل تطبيق بنك الجزائر الخارجي على Google Play لإدارة الحسابات والتحويلات عبر الهاتف.",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=com.aebs.p2bbea"
      },
      {
        "ar": "تطبيق BEA MOBILE (iOS) تحميل التطبيق الرسمي على متجر App Store لأجهزة iPhone لمتابعة الرصيد والعمليات المصرفية لحظيا.",
        "fr": "Application Mobile Officielle (iOS / iPhone)",
        "url": "https://apps.apple.com/app/bea-mobile/id1534439062"
      }
    ],
    "contactPhone": "021 56 25 70",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها بنك الجزائر الخارجي (BEA)؟",
          "fr": "Quels sont les services en ligne proposés par Banque Extérieure d'Algérie (BEA) ?"
        },
        "answer": {
          "ar": "يتيح بنك الجزائر الخارجي (BEA) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Banque Extérieure d'Algérie (BEA) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل بنك الجزائر الخارجي (BEA) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez BEA ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "bna",
    "slug": "bna",
    "name": {
      "ar": "البنك الوطني الجزائري (BNA)",
      "fr": "Banque Nationale d'Algérie (BNA)"
    },
    "acronym": "BNA",
    "type": "public",
    "description": {
      "ar": "دليل الخدمات الرقمية للبنك الوطني الجزائري BNA: فضاء الصيرفة الإلكترونية BNA e-Banking، تطبيقي BNAtic و Wimpay BNA، الصيرفة الإسلامية، محاكي القروض، وأرقام الدعم المباشر.",
      "fr": "Guide complet des services numériques de Banque Nationale d'Algérie (BNA) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.bna.dz/ar/",
    "eBankingUrl": "https://ebanking.bna.dz/",
    "swiftCode": "BNALDZAL",
    "headquarters": {
      "ar": "شارع إرنستو شي غيفارا، الجزائر العاصمة",
      "fr": "Boulevard Ernesto Che Guevara, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (bna.dz)",
        "fr": "Site Officiel",
        "url": "https://www.bna.dz/ar/"
      },
      {
        "ar": "فضاء الصيرفة e-Banking",
        "fr": "Espace Banque en Ligne (E-Banking)",
        "url": "https://ebanking.bna.dz/"
      },
      {
        "ar": "الصيرفة الإسلامية BNA حلول التمويل والادخار الموافقة للشريعة الإسلامية (مرابحة عقار، مرابحة سيارات، مرابحة تجهيز، إجارة وحسابات الاستثمار).",
        "fr": "Services de Finance Islamique",
        "url": "https://www.bna.dz/ar/finance-islamique/"
      },
      {
        "ar": "محاكي القروض والتمويلات محاكاة تمويل المشاريع، القروض العقارية، القروض الاستهلاكية والتمويلات الإسلامية وحساب الأقساط الشهرية بدقة.",
        "fr": "Simulateur de Crédits et Financements",
        "url": "https://www.bna.dz/ar/simulateurs/"
      },
      {
        "ar": "شبكة الوكالات وموزعات النقد (GAB) البحث الجغرافي وتحديد مواقع وكالات البنك الوطني الجزائري وشبابيك الصيرفة الإسلامية وموزعات النقد الآلي عبر الولايات.",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://www.bna.dz/ar/trouver-une-agence/"
      },
      {
        "ar": "البطاقات النقدية والدفع الإلكتروني إدارة بطاقات CIB والبطاقات الدولية Visa، تفعيل خدمات الشراء عبر الإنترنت وحلول الدفع عبر أجهزة الدفع الإلكتروني TPE.",
        "fr": "Cartes Bancaires & Monétique (CIB / Internationale)",
        "url": "https://www.bna.dz/ar/monetique/"
      },
      {
        "ar": "فضاء الاستفسارات والشكاوى إرسال طلبات الاستفسار والملاحظات والشكاوى مباشرة إلى إدارة البنك عبر الاستمارة الرقمية الرسمية.",
        "fr": "Espace Réclamations & Contact Client",
        "url": "https://www.bna.dz/ar/contact/"
      },
      {
        "ar": "تطبيق BNAtic (Android) تطبيق الصيرفة الذكية من BNA لإدارة الحسابات البنكية، تتبع المعاملات، إجراء التحويلات المالية، وطلب البطاقات ودفاتر الشيكات.",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=dz.bna.matic"
      },
      {
        "ar": "تطبيق BNAtic (iOS / iPhone) نسخة هواتف آبل للوصول الآمن والسريع إلى خدمات البنك الوطني الجزائري وإدارة الحسابات لحظيا.",
        "fr": "Application Mobile Officielle (iOS / iPhone)",
        "url": "https://apps.apple.com/app/bn-tic/id1527787498"
      },
      {
        "ar": "تطبيق Wimpay BNA (Android) تطبيق الدفع عبر الهاتف المحمول وتقنية رمز الاستجابة السريعة QR code، تسديد الفواتير (سونلغاز، اتصالات الجزائر) والتحويل الفوري.",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=dz.bna.wimpay"
      },
      {
        "ar": "تطبيق Wimpay BNA (iOS / iPhone) تطبيق الدفع الإلكتروني الفوري للهواتف الذكية بنظام iOS لإجراء المعاملات المالية وتسديد المشتريات بسهولة.",
        "fr": "Application Mobile Officielle (iOS / iPhone)",
        "url": "https://apps.apple.com/app/wimpay-dz-bna/id1597845778"
      }
    ],
    "contactPhone": "021 43 99 98 / 3320",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها البنك الوطني الجزائري (BNA)؟",
          "fr": "Quels sont les services en ligne proposés par Banque Nationale d'Algérie (BNA) ?"
        },
        "answer": {
          "ar": "يتيح البنك الوطني الجزائري (BNA) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Banque Nationale d'Algérie (BNA) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل البنك الوطني الجزائري (BNA) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez BNA ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "bnh",
    "slug": "bnh",
    "name": {
      "ar": "البنك الوطني للإسكان (BNH)",
      "fr": "Banque Nationale de l'Habitat (BNH)"
    },
    "acronym": "BNH",
    "type": "public",
    "description": {
      "ar": "دليل الخدمات المصرفية والتمويلية للبنك الوطني للإسكان BNH: تمويل اقتناء وترميم السكنات، فتح الحسابات ودفاتر الادخار، البطاقات البنكية CIB، مرافقة برامج السكن وشبكة الوكالات.",
      "fr": "Guide complet des services numériques de Banque Nationale de l'Habitat (BNH) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://bnh.dz/",
    "eBankingUrl": "https://bnh.dz/",
    "swiftCode": "BNHADZAL",
    "headquarters": {
      "ar": "دار البيضاء، الجزائر العاصمة",
      "fr": "Dar El Beïda, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (bnh.dz)",
        "fr": "Site Officiel",
        "url": "https://bnh.dz/"
      },
      {
        "ar": "تمويل السكنات العقارية",
        "fr": "Financement Immobilier & Acquisition de Logement",
        "url": "https://bnh.dz/acquisition-dun-bien-immobilier/"
      },
      {
        "ar": "شبكة وكالات BNH",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://bnh.dz/liste-des-agences/"
      },
      {
        "ar": "فضاء الأفراد (الحسابات ودفاتر الادخار) فتح وإدارة الحسابات الجارية وحسابات الصكوك، دفاتر التوفير والادخار السكني، والودائع لأجل (DAT) ذات المردود المالي.",
        "fr": "Espace Particuliers & Comptes d'Épargne",
        "url": "https://bnh.dz/particuliers/"
      },
      {
        "ar": "تمويل الترقية العقارية والمهنيين حلول مصرفية مخصصة للمرقين العقاريين، مقاولي البناء والأشغال العمومية، وتمويل البرامج السكنية والاستثمارية الكبرى.",
        "fr": "Financement Promoteurs & Professionnels",
        "url": "https://bnh.dz/professionnels/"
      },
      {
        "ar": "استمارة الاستفسارات والمراسلة إرسال الرسائل والمقترحات وطلبات التوجيه مباشرة عبر نموذج الاتصال على الموقع الإلكتروني للبنك.",
        "fr": "Espace Réclamations & Contact Client",
        "url": "https://bnh.dz/contact/"
      }
    ],
    "contactPhone": "023 81 40 00",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها البنك الوطني للإسكان (BNH)؟",
          "fr": "Quels sont les services en ligne proposés par Banque Nationale de l'Habitat (BNH) ?"
        },
        "answer": {
          "ar": "يتيح البنك الوطني للإسكان (BNH) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Banque Nationale de l'Habitat (BNH) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل البنك الوطني للإسكان (BNH) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez BNH ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "business.algeria.hsbc",
    "slug": "business.algeria.hsbc",
    "name": {
      "ar": "بنك إتش إس بي سي الجزائر للأعمال (HSBC)",
      "fr": "HSBC Algérie (Corporate & Business Banking)"
    },
    "acronym": "HSBC",
    "type": "private",
    "description": {
      "ar": "دليل خدمات بنك إتش إس بي سي الجزائر (HSBC Algeria): منصة الصيرفة الرقمية المؤسساتية HSBCnet، تطبيق الهاتف HSBCnet Mobile، حلول تمويل التجارة الدولية وسلاسل الإمداد (GTRF)، إدارة السيولة النقدية والخزينة (GLCM)، وتمويل الشركات الكبرى والمشاريع الاستثمارية.",
      "fr": "Guide complet des services numériques de HSBC Algérie (Corporate & Business Banking) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.business.algeria.hsbc.com/",
    "eBankingUrl": "https://www.hsbcnet.com/",
    "swiftCode": "BBMEDZAL",
    "headquarters": {
      "ar": "باب الزوار، الجزائر العاصمة",
      "fr": "Bab Ezzouar, Alger"
    },
    "services": [
      {
        "ar": "بوابة الأعمال (business.hsbc)",
        "fr": "Portail Entreprises & Business",
        "url": "https://www.business.algeria.hsbc.com/"
      },
      {
        "ar": "عن البنك (about.hsbc)",
        "fr": "À Propos de la Banque",
        "url": "https://www.about.algeria.hsbc.com/"
      },
      {
        "ar": "منصة HSBCnet العالمية",
        "fr": "Plateforme Internationale HSBCnet",
        "url": "https://www.hsbcnet.com/"
      }
    ],
    "contactPhone": "021 98 52 00",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها بنك إتش إس بي سي الجزائر للأعمال (HSBC)؟",
          "fr": "Quels sont les services en ligne proposés par HSBC Algérie (Corporate & Business Banking) ?"
        },
        "answer": {
          "ar": "يتيح بنك إتش إس بي سي الجزائر للأعمال (HSBC) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "HSBC Algérie (Corporate & Business Banking) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل بنك إتش إس بي سي الجزائر للأعمال (HSBC) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez HSBC ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "citigroup",
    "slug": "citigroup",
    "name": {
      "ar": "سيتي بنك الجزائر (Citibank)",
      "fr": "Citibank N.A. Algérie (Citigroup)"
    },
    "acronym": "CITIBANK",
    "type": "private",
    "description": {
      "ar": "دليل خدمات سيتي بنك الجزائر (Citibank N.A. Algeria - Citigroup): أول بنك أجنبي معتمد في الجزائر، منصة الصيرفة الرقمية CitiDirect، حلول الخزينة والتجارة الدولية (TTS)، تمويل الشركات الكبرى، وأسواق المال وتداول العملات.",
      "fr": "Guide complet des services numériques de Citibank N.A. Algérie (Citigroup) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.citigroup.com/global/about-us/global-presence/algeria",
    "eBankingUrl": "https://www.citigroup.com/global/about-us/global-presence/algeria",
    "swiftCode": "CITIDZAL",
    "headquarters": {
      "ar": "دالي إبراهيم، الجزائر العاصمة",
      "fr": "Daly Ibrahim, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (citigroup.com)",
        "fr": "Site Officiel",
        "url": "https://www.citigroup.com/global/about-us/global-presence/algeria"
      }
    ],
    "contactPhone": "021 91 34 00",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها سيتي بنك الجزائر (Citibank)؟",
          "fr": "Quels sont les services en ligne proposés par Citibank N.A. Algérie (Citigroup) ?"
        },
        "answer": {
          "ar": "يتيح سيتي بنك الجزائر (Citibank) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Citibank N.A. Algérie (Citigroup) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل سيتي بنك الجزائر (Citibank) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez CITIBANK ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "cnep",
    "slug": "cnep",
    "name": {
      "ar": "الصندوق الوطني للتوفير والاحتياط (CNEP Banque)",
      "fr": "Caisse Nationale d'Épargne et de Prévoyance (CNEP Banque)"
    },
    "acronym": "CNEP",
    "type": "public",
    "description": {
      "ar": "دليل الخدمات الرقمية لبنك الصندوق الوطني للتوفير والاحتياط CNEP Banque: فضاء CNEP e-Banking، تطبيقي CNEP Connect و Wimpay، القروض العقارية، الصيرفة الإسلامية، ومحاكي الادخار.",
      "fr": "Guide complet des services numériques de Caisse Nationale d'Épargne et de Prévoyance (CNEP Banque) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.cnepbanque.dz/web/",
    "eBankingUrl": "https://ebanking.cnepbanque.dz/customer/",
    "swiftCode": "CNEPDZAL",
    "headquarters": {
      "ar": "شوفالي، دالي إبراهيم، الجزائر العاصمة",
      "fr": "Chevalley, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (cnepbanque.dz)",
        "fr": "Site Officiel",
        "url": "https://www.cnepbanque.dz/web/"
      },
      {
        "ar": "فضاء الصيرفة e-Banking",
        "fr": "Espace Banque en Ligne (E-Banking)",
        "url": "https://ebanking.cnepbanque.dz/customer/"
      },
      {
        "ar": "منصة CNEP Market للعقارات",
        "fr": "Plateforme Immobilière CNEP Market",
        "url": "https://cnepmarket.cnepbanque.dz/"
      },
      {
        "ar": "الصيرفة الإسلامية CNEP منتجات الادخار والتمويل المتوافقة مع أحكام الشريعة الإسلامية (مرابحة عقار، مرابحة تجهيز، إجارة تمليكية وحسابات الاستثمار).",
        "fr": "Services de Finance Islamique",
        "url": "https://www.cnepbanque.dz/web/finance-islamique/"
      },
      {
        "ar": "محاكي القروض والتمويلات العقارية محاكاة تمويل شراء السكنات، البناء والتوسيع، القروض الاستهلاكية والتمويلات الإسلامية لحساب مبالغ الأقساط الشهرية.",
        "fr": "Simulateur de Crédits et Financements",
        "url": "https://www.cnepbanque.dz/web/simulateur-de-credit/"
      },
      {
        "ar": "شبكة الوكالات وموزعات النقد (GAB) البحث الجغرافي وخريطة وكالات الصندوق الوطني للتوفير والاحتياط وشبابيك الصيرفة الإسلامية وموزعات النقد الآلي.",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://www.cnepbanque.dz/web/nos-agences/"
      },
      {
        "ar": "فضاء الاستفسارات والشكاوى تقديم المقترحات والشكاوى والاستفسارات عبر الاستمارة الإلكترونية الرسمية على موقع كناب بنك.",
        "fr": "Espace Réclamations & Contact Client",
        "url": "https://www.cnepbanque.dz/web/contactez-nous/"
      },
      {
        "ar": "تطبيق CNEP Connect (Android) التطبيق الرسمي لكناب بنك لإدارة الحسابات، الاطلاع على الرصيد، إجراء التحويلات، وتتبع القروض ودفاتر التوفير.",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=dz.cnep.connect"
      },
      {
        "ar": "تطبيق CNEP Connect (iOS / iPhone) نسخة هواتف آبل للوصول الآمن والسريع إلى خدمات كناب بنك وإجراء العمليات المصرفية في أي وقت.",
        "fr": "Application Mobile Officielle (iOS / iPhone)",
        "url": "https://apps.apple.com/app/cnep-connect/id6444005088"
      },
      {
        "ar": "تطبيق WIMPAY CNEP (Android) تطبيق الدفع عبر الهاتف المحمول وتقنية رمز QR، التحويلات المالية الفورية وتسديد المشتريات بدون تلامس.",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=com.aebs.cnep"
      },
      {
        "ar": "تطبيق WIMPAY CNEP (iOS / iPhone) تطبيق الدفع الإلكتروني الفوري لأجهزة iPhone لإجراء المدفوعات والتحويلات النقدية السريعة.",
        "fr": "Application Mobile Officielle (iOS / iPhone)",
        "url": "https://apps.apple.com/app/wimpay-cnep/id1612450849"
      }
    ],
    "contactPhone": "021 91 10 00 / 3315",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها الصندوق الوطني للتوفير والاحتياط (CNEP Banque)؟",
          "fr": "Quels sont les services en ligne proposés par Caisse Nationale d'Épargne et de Prévoyance (CNEP Banque) ?"
        },
        "answer": {
          "ar": "يتيح الصندوق الوطني للتوفير والاحتياط (CNEP Banque) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Caisse Nationale d'Épargne et de Prévoyance (CNEP Banque) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل الصندوق الوطني للتوفير والاحتياط (CNEP Banque) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez CNEP ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "cpa",
    "slug": "cpa",
    "name": {
      "ar": "القرض الشعبي الجزائري (CPA)",
      "fr": "Crédit Populaire d'Algérie (CPA)"
    },
    "acronym": "CPA",
    "type": "public",
    "description": {
      "ar": "دليل الخدمات الرقمية للقرض الشعبي الجزائري CPA: الدخول إلى منصة الصيرفة الإلكترونية E-Banking، تحميل تطبيق CPA Mobile وتطبيق الدفع Wimpay، الصيرفة الإسلامية، وأرقام الدعم المباشر.",
      "fr": "Guide complet des services numériques de Crédit Populaire d'Algérie (CPA) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.cpa-bank.dz/index.php/ar/",
    "eBankingUrl": "https://ebanking.cpa-bank.dz/",
    "swiftCode": "CPALDZAL",
    "headquarters": {
      "ar": "شارع العقيد عميروش، الجزائر العاصمة",
      "fr": "Boulevard Colonel Amirouche, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (cpa-bank.dz)",
        "fr": "Site Officiel",
        "url": "https://www.cpa-bank.dz/index.php/ar/"
      },
      {
        "ar": "فضاء الصيرفة الإلكترونية",
        "fr": "Espace Banque en Ligne (E-Banking)",
        "url": "https://ebanking.cpa-bank.dz/"
      },
      {
        "ar": "الصيرفة الإسلامية حلول التمويل والادخار المتوافقة مع الشريعة الإسلامية (مرابحة عقارية، استهلاكية، وحسابات استثمارية).",
        "fr": "Services de Finance Islamique",
        "url": "https://www.cpa-bank.dz/index.php/ar/finance-islamique"
      },
      {
        "ar": "محدد مواقع الوكالات والصرافات الآلية (GAB) البحث وتحديد مواقع وكالات القرض الشعبي الجزائري وموزعات السحب الآلي وشبابيك الصيرفة الإسلامية.",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://www.cpa-bank.dz/index.php/ar/nos-agences"
      },
      {
        "ar": "البطاقات النقدية والدفع الإلكتروني (CIB / Mastercard) إدارة بطاقات الدفع والسحب الوطنية والدولية وخدمات الدفع الآمن عبر الإنترنت عبر أجهزة TPE والمواقع المعتمدة.",
        "fr": "Cartes Bancaires & Monétique (CIB / Internationale)",
        "url": "https://www.cpa-bank.dz/index.php/ar/monetique"
      },
      {
        "ar": "فضاء الاستفسارات والشكاوى إرسال طلبات الاستفسار وتوجيه الشكاوى مباشرة لإدارة البنك عبر استمارة التواصل الرقمية الرسمية.",
        "fr": "Espace Réclamations & Contact Client",
        "url": "https://www.cpa-bank.dz/index.php/ar/contactez-nous"
      },
      {
        "ar": "تطبيق Mobile CPA (Android / iOS) التطبيق الرسمي لإدارة ومتابعة الحسابات البنكية، تنفيذ التحويلات، وطلب كشف الهوية البنكية RIB مباشرة.",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=com.cpa.mobile"
      },
      {
        "ar": "تطبيق WIMPAY CPA للدفع الإلكتروني تطبيق الدفع عبر الهاتف المحمول من حساب إلى حساب ومسح رموز الاستجابة السريعة QR لدفع المشتريات فوريا.",
        "fr": "Application Mobile de Paiement WIMPAY",
        "url": "https://play.google.com/store/apps/details?id=com.wimpay.cpa"
      }
    ],
    "contactPhone": "021 63 57 12 / 3318",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها القرض الشعبي الجزائري (CPA)؟",
          "fr": "Quels sont les services en ligne proposés par Crédit Populaire d'Algérie (CPA) ?"
        },
        "answer": {
          "ar": "يتيح القرض الشعبي الجزائري (CPA) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Crédit Populaire d'Algérie (CPA) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل القرض الشعبي الجزائري (CPA) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez CPA ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "ebanking.algerie.natixis",
    "slug": "ebanking.algerie.natixis",
    "name": {
      "ar": "ناتيكسيس الجزائر (Natixis Algérie)",
      "fr": "Natixis Algérie (Corporate & Digital Banking)"
    },
    "acronym": "NATIXIS",
    "type": "private",
    "description": {
      "ar": "اكتشف خدمات Natixis Algérie الرقمية، وخدمات الاتصال والدعم والتطبيقات البنكية، في صفحة موحدة داخل البوابة الجزائرية للخدمات الرقمية",
      "fr": "Guide complet des services numériques de Natixis Algérie (Corporate & Digital Banking) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.algerie.natixis.com/",
    "eBankingUrl": "https://ebanking.algerie.natixis.com/",
    "swiftCode": "NATXDZAL",
    "headquarters": {
      "ar": "باب الزوار، الجزائر العاصمة",
      "fr": "Bab Ezzouar, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي لبنك ناتيكسيس الجزائر (Natixis)",
        "fr": "Site Officiel Natixis Algérie",
        "url": "https://www.algerie.natixis.com/"
      },
      {
        "ar": "بوابة الصيرفة الإلكترونية للمؤسسات eBanking",
        "fr": "Portail Corporate eBanking Natixis Algérie",
        "url": "https://ebanking.algerie.natixis.com/"
      }
    ],
    "contactPhone": "021 98 11 11",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها ناتيكسيس الجزائر (Natixis Algérie)؟",
          "fr": "Quels sont les services en ligne proposés par Natixis Algérie (Corporate & Digital Banking) ?"
        },
        "answer": {
          "ar": "يتيح ناتيكسيس الجزائر (Natixis Algérie) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Natixis Algérie (Corporate & Digital Banking) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل ناتيكسيس الجزائر (Natixis Algérie) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez NATIXIS ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "fransabank",
    "slug": "fransabank",
    "name": {
      "ar": "فرنسبنك الجزائر (Fransabank El Djazaïr)",
      "fr": "Fransabank El Djazaïr"
    },
    "acronym": "FRANSABANK",
    "type": "private",
    "description": {
      "ar": "دليل خدمات فرنسبنك الجزائر (Fransabank El Djazair): الصيرفة الإلكترونية FSBKlic، تطبيق الهاتف Bank-In-App، خدمة الرسائل Khebarni، بطاقات CIB وفيزا الدولية، قروض السكن والاستهلاك، وحلول تمويل الشركات والتجارة الدولية.",
      "fr": "Guide complet des services numériques de Fransabank El Djazaïr : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://www.fransabank.dz/ar/",
    "eBankingUrl": "https://www.fransabank.dz/ar/",
    "swiftCode": "FSABDZAL",
    "headquarters": {
      "ar": "حيدرة، الجزائر العاصمة",
      "fr": "Hydra, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (fransabank.dz)",
        "fr": "Site Officiel",
        "url": "https://www.fransabank.dz/ar/"
      }
    ],
    "contactPhone": "021 48 12 00",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها فرنسبنك الجزائر (Fransabank El Djazaïr)؟",
          "fr": "Quels sont les services en ligne proposés par Fransabank El Djazaïr ?"
        },
        "answer": {
          "ar": "يتيح فرنسبنك الجزائر (Fransabank El Djazaïr) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Fransabank El Djazaïr permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل فرنسبنك الجزائر (Fransabank El Djazaïr) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez FRANSABANK ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  },
  {
    "id": "societegenerale",
    "slug": "societegenerale",
    "name": {
      "ar": "سوسيتي جنرال الجزائر (SGA)",
      "fr": "Société Générale Algérie (SGA)"
    },
    "acronym": "SGA",
    "type": "private",
    "description": {
      "ar": "دليل الخدمات المصرفية لبنك سوسيتي جنرال الجزائر (Société Générale Algérie - SGA): تطبيق الصيرفة الرقمية APPLI SGA، منصة Sogecash Net لإدارة حسابات الشركات، بطاقات CIB وفيزا اللاتلامسية، وحلول التمويل والإيجار المالي.",
      "fr": "Guide complet des services numériques de Société Générale Algérie (SGA) : banque en ligne (E-Banking), applications mobiles, cartes CIB, financement immobilier et solutions entreprises."
    },
    "website": "https://societegenerale.dz/fr/",
    "eBankingUrl": "https://societegenerale.dz/fr/",
    "swiftCode": "SOGEDZAL",
    "headquarters": {
      "ar": "المحمدية، الجزائر العاصمة",
      "fr": "Mohammadia, Alger"
    },
    "services": [
      {
        "ar": "الموقع الرسمي (societegenerale.dz)",
        "fr": "Site Officiel",
        "url": "https://societegenerale.dz/fr/"
      }
    ],
    "contactPhone": "021 45 11 55 / 3331",
    "quickSummary": {
      "accountTypes": {
        "ar": "حساب جاري بالدينار والعملة الصعبة، حسابات الادخار والصيرفة الإسلامية",
        "fr": "Comptes courants DZD/Devises, comptes épargne et produits islamiques"
      },
      "digitalBanking": {
        "ar": "بوابة ويب آمنة + تطبيق هاتف ذكي للتحويلات وطلب كشف الهوية البنكية RIB",
        "fr": "Portail E-Banking sécurisé et application mobile 24/7 avec téléchargement RIB"
      },
      "islamicWindow": {
        "ar": "تتوفر نوافذ وباقات للصيرفة الإسلامية حسب العروض المعتمدة",
        "fr": "Guichets ou offres de finance islamique disponibles selon agence"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "فتح حساب بنكي للأفراد",
          "fr": "Ouverture de compte particulier"
        },
        "value": {
          "ar": "بطاقة التعريف البيومترية، شهادة ميلاد، شهادة إقامة، وكشف راتب أو سجل تجاري",
          "fr": "CNIBE biométrique, acte de naissance, certificat de résidence et justificatif de revenus"
        }
      },
      {
        "label": {
          "ar": "تفعيل الصيرفة الإلكترونية",
          "fr": "Activation E-Banking"
        },
        "value": {
          "ar": "طلب التفعيل على مستوى الوكالة البنكية أو عبر رقم الهاتف المسجل",
          "fr": "Souscription gratuite en agence avec réception des identifiants sécurisés"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "ما هي الخدمات الرقمية التي يوفرها سوسيتي جنرال الجزائر (SGA)؟",
          "fr": "Quels sont les services en ligne proposés par Société Générale Algérie (SGA) ?"
        },
        "answer": {
          "ar": "يتيح سوسيتي جنرال الجزائر (SGA) الاطلاع على الرصيد لحظيا، تحميل كشف الهوية البنكية RIB، متابعة الحركات المالية، وطلب البطاقات المصرفية والتمويلات عبر فضاء الزبائن.",
          "fr": "Société Générale Algérie (SGA) permet de consulter vos comptes en temps réel, télécharger votre RIB, initier des virements et suivre vos financements via le portail E-Banking."
        }
      },
      {
        "question": {
          "ar": "هل يقبل سوسيتي جنرال الجزائر (SGA) التعامل ببطاقة CIB أو الدفع الإلكتروني؟",
          "fr": "La carte CIB et le paiement en ligne sont-ils disponibles chez SGA ?"
        },
        "answer": {
          "ar": "نعم، توفر معظم المصارف المعتمدة بالجزائر بطاقة الدفع والسحب الوطنية CIB أو خدمات الدفع عبر تطبيقات Wimpay، وتخضع شروط التفعيل لنوع الحساب.",
          "fr": "Oui, les banques agréées en Algérie émettent la carte interbancaire CIB et prennent en charge le e-paiement selon la formule de compte détenue."
        }
      }
    ]
  }
];

export const insuranceList: InsuranceItem[] = [
  {
    "id": "alliance-assurances",
    "slug": "alliance-assurances",
    "name": {
      "ar": "أليانس للتأمينات (Alliance Assurances)",
      "fr": "Alliance Assurances Algérie"
    },
    "acronym": "ALLIANCE",
    "type": "private",
    "description": {
      "ar": "استكشف الخدمات الرقمية لأليانس للتأمينات (Alliance Assurances) في الجزائر: طلب عرض سعر، خدمة الدفع بالتقسيط Buy Now-Pay Later، تطبيق MyAlliance لإدارة عقودك، وأرقام خدمة الزبائن 3315.",
      "fr": "Annuaire des solutions d'assurance de Alliance Assurances Algérie : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://allianceassurances.com.dz/",
    "portalUrl": "https://play.google.com/store/apps/details?id=com.blink.myalliance&hl=fr",
    "headquarters": {
      "ar": "شوفالي، الجزائر العاصمة",
      "fr": "Chéraga / Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي",
        "fr": "Site Officiel",
        "url": "https://allianceassurances.com.dz/"
      },
      {
        "ar": "تصفح الآن",
        "fr": "Consulter le Portail",
        "url": "https://play.google.com/store/apps/details?id=com.blink.myalliance&hl=fr"
      }
    ],
    "emergencyNumber": "021 37 02 02",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر أليانس للتأمينات (Alliance Assurances) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Alliance Assurances Algérie propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "amana",
    "slug": "amana",
    "name": {
      "ar": "أمانة للتأمينات على الأشخاص (Amana)",
      "fr": "Amana Assurances des Personnes"
    },
    "acronym": "AMANA",
    "type": "public",
    "description": {
      "ar": "الدليل الشامل للخدمات الرقمية لشركة أمانة للتأمينات (Amana Assurances): اكتتاب تأمين السفر أونلاين بالدفع الإلكتروني، فضاء الزبون والمنخرطين، تطبيق My Amana، وطلب عروض الأسعار والتكفل الصحي.",
      "fr": "Annuaire des solutions d'assurance de Amana Assurances des Personnes : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://www.amana.dz/#/",
    "portalUrl": "https://espaceclient.amana.dz/",
    "headquarters": {
      "ar": "ساحة أول ماي، الجزائر العاصمة",
      "fr": "Place du 1er Mai, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي Amana.dz",
        "fr": "Site Officiel",
        "url": "https://www.amana.dz/#/"
      },
      {
        "ar": "فضاء الزبون المباشر",
        "fr": "Espace Client en Ligne",
        "url": "https://espaceclient.amana.dz/"
      },
      {
        "ar": "اكتتاب تأمين السفر أونلاين",
        "fr": "Assurance Voyage & Assistance Internationale",
        "url": "https://www.amana.dz/#/voyage"
      },
      {
        "ar": "شبكة الوكالات والشركاء",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://www.amana.dz/#/agences"
      },
      {
        "ar": "الاتصال بالوكالة",
        "fr": "Contacter le Service Client",
        "url": "https://www.amana.dz/#/contact"
      },
      {
        "ar": "طلب عرض سعر التأمين الصحي (Devis Santé) حساب تسعيرة التأمين التكميلي الصحي واختيار الصيغ المناسبة للأفراد والعائلات (Essentielle / Confort / Premium).",
        "fr": "Devis Assurance Santé Complémentaire",
        "url": "https://www.amana.dz/#/sante"
      },
      {
        "ar": "التصريح بالحادث وطلب التكفل المالي التبليغ الرقمي عن الحوادث ومتابعة ملفات التعويض والاسترجاع مع مصالح أمانة للتأمينات.",
        "fr": "Déclaration & Suivi de Sinistres en Ligne",
        "url": "https://www.amana.dz/#/sinistre"
      },
      {
        "ar": "خدمات المؤسسات والشركات (Espace Entreprise) إدارة حلول التأمين الجماعي للشركات والموظفين وحماية المنشآت والادخار المهني.",
        "fr": "Solutions d'Assurance Entreprises & Professionnels",
        "url": "https://www.amana.dz/#/entreprise"
      },
      {
        "ar": "حلول الادخار والتقاعد التكميلي (Épargne Retraite) استكشاف خطط الادخار الفردي وحساب المخصصات التقاعدية المستقبلية.",
        "fr": "Épargne & Retraite Complémentaire",
        "url": "https://www.amana.dz/#/retraite"
      },
      {
        "ar": "تطبيق الهاتف My Amana إرسال فواتير العلاج بالهاتف لمتابعة التعويض الصحي وتحديد مواقع الأطباء والصيدليات الشريكة.",
        "fr": "Application Mobile Officielle",
        "url": "https://play.google.com/store/apps/details?id=dz.amana.myamana"
      }
    ],
    "emergencyNumber": "021 65 40 40",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر أمانة للتأمينات على الأشخاص (Amana) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Amana Assurances des Personnes propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "axa",
    "slug": "axa",
    "name": {
      "ar": "أكسا للتأمينات الجزائر (AXA Algérie)",
      "fr": "AXA Assurances Algérie"
    },
    "acronym": "AXA",
    "type": "private",
    "description": {
      "ar": "دليل الخدمات الرقمية لشركة أكسا للتأمينات الجزائر (AXA Assurances Algérie): طلب عروض الأسعار الفورية، تأمين السفر والمسكن، التصريح بالحادث، فضاء الزبون، وتطبيق MyAXA DZ.",
      "fr": "Annuaire des solutions d'assurance de AXA Assurances Algérie : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://www.axa.dz/",
    "portalUrl": "https://www.axa.dz/contact",
    "headquarters": {
      "ar": "المحمدية، الجزائر العاصمة",
      "fr": "Mohammadia, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي — AXA Algérie",
        "fr": "Site Officiel",
        "url": "https://www.axa.dz/"
      },
      {
        "ar": "الاتصال بالوكالة (021 98 00 20)",
        "fr": "Contacter le Service Client",
        "url": "https://www.axa.dz/contact"
      },
      {
        "ar": "طلب عرض سعر فوري",
        "fr": "Demande de Devis en Ligne",
        "url": "https://www.axa.dz/devis-en-ligne"
      },
      {
        "ar": "تأمين السفر الدولي (Assurance Voyage) تأمين السفر المعتمد لفيزا شنغن وجميع الوجهات الدولية مع التكفل الطبي والنقل الصحي.",
        "fr": "Assurance Voyage & Assistance Internationale",
        "url": "https://www.axa.dz/particuliers/assurance-voyage"
      },
      {
        "ar": "تأمين مسكن وممتلكات (Cat-Nat) الاطلاع على خيارات تأمين المنازل والشقق والتأمين الإلزامي ضد الكوارث الطبيعية.",
        "fr": "Assurance Multirisque Habitation & CAT-NAT",
        "url": "https://www.axa.dz/particuliers/habitation"
      },
      {
        "ar": "متابعة ملف أو تصريح حادث (Sinistres) الوصول إلى خدمة التصريح المسبق بالحوادث ومتابعة ملفات التعويض والخبرة عن بعد.",
        "fr": "Déclaration & Suivi de Sinistres en Ligne",
        "url": "https://www.axa.dz/sinistres"
      },
      {
        "ar": "البحث عن وكالة (Trouver une Agence) دليل العثور على أقرب وكالة أو نقطة خدمة تابعة لأكسا مع أرقام الهواتف والمسارات.",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://www.axa.dz/trouver-une-agence"
      },
      {
        "ar": "خدمات الشركات والمهنيين (Entreprises) بوابة حلول تأمين أساطيل المركبات، المسؤولية المدنية، والتغطية الصحية الجماعية للمؤسسات.",
        "fr": "Espace Entreprises & Professionnels (Flottes, RC & Santé Collective)",
        "url": "https://www.axa.dz/entreprises"
      },
      {
        "ar": "الشكاوى وطلبات المساعدة (Réclamations) إرسال انشغال أو تظلم ومتابعة معالجة الطلب لضمان جودة خدمة المشتركين.",
        "fr": "Espace Réclamations & Médiation",
        "url": "https://www.axa.dz/reclamations"
      },
      {
        "ar": "الأسئلة الشائعة (FAQ) الحصول على إجابات مفصلة حول إجراءات التأمين، الوثائق المطلوبة وشروط التعويض.",
        "fr": "Foire Aux Questions & Conseils",
        "url": "https://www.axa.dz/faq"
      },
      {
        "ar": "فضاء الزبون (Espace Client) الدخول الآمن إلى الفضاء الرقمي للزبائن للاطلاع على العقود والإيصالات وتحديث البيانات.",
        "fr": "Espace Client en Ligne",
        "url": "https://www.axa.dz/espace-client"
      },
      {
        "ar": "تطبيق الهاتف المحمول (MyAXA DZ) تطبيق رسمي للهواتف الذكية لمتابعة التعويضات الصحية وإرسال الفواتير الطبية رقميا.",
        "fr": "Application Mobile Officielle",
        "url": "https://play.google.com/store/apps/details?id=com.axa.myaxadz"
      }
    ],
    "emergencyNumber": "021 98 00 20",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر أكسا للتأمينات الجزائر (AXA Algérie) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "AXA Assurances Algérie propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "caar",
    "slug": "caar",
    "name": {
      "ar": "الشركة الجزائرية للتأمين وإعادة التأمين (CAAR)",
      "fr": "Compagnie Algérienne d'Assurance et de Réassurance (CAAR)"
    },
    "acronym": "CAAR",
    "type": "public",
    "description": {
      "ar": "دليل الخدمات الرقمية للشركة الجزائرية للتأمين وإعادة التأمين (CAAR): طلب عروض الأسعار، الاكتتاب والدفع الإلكتروني لتأمين السكن والكوارث الطبيعية CAT-NAT، تطبيق CAAR+، ومنصة e-Transport.",
      "fr": "Annuaire des solutions d'assurance de Compagnie Algérienne d'Assurance et de Réassurance (CAAR) : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://caar.dz/",
    "portalUrl": "https://play.google.com/store/apps/details?id=dz.caar.mobile",
    "headquarters": {
      "ar": "أولاد فايت، الجزائر العاصمة",
      "fr": "Ouled Fayet, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي لـ CAAR",
        "fr": "Site Officiel",
        "url": "https://caar.dz/"
      },
      {
        "ar": "تحميل تطبيق CAAR+",
        "fr": "Application Mobile Officielle (Android)",
        "url": "https://play.google.com/store/apps/details?id=dz.caar.mobile"
      },
      {
        "ar": "طلب تسعيرة واكتتاب تأمين المسكن (MRH) محاكاة أسعار التأمين المتعدد الأخطار على السكن والاكتتاب الفوري مع الدفع ببطاقة CIB والذهبية.",
        "fr": "Assurance Multirisque Habitation & CAT-NAT",
        "url": "https://caar.dz/produits/habitation/"
      },
      {
        "ar": "تأمين الكوارث الطبيعية (CAT-NAT) والدفع الإلكتروني استخراج وثيقة التأمين ضد الكوارث الطبيعية للخواص والتجار عبر الإنترنت والدفع الآمن.",
        "fr": "Assurance Catastrophes Naturelles (CAT-NAT)",
        "url": "https://caar.dz/produits/catastrophes-naturelles/"
      },
      {
        "ar": "طلب عرض سعر تأمين السيارات (Devis Auto) حساب تكلفة تأمين المركبات والسيارات واختيار باقات الضمان التكميلية والمساعدة.",
        "fr": "Devis Assurance Automobile & Assistance",
        "url": "https://caar.dz/produits/automobile/"
      },
      {
        "ar": "طلب تسعيرة تأمين السفر والمساعدة الدولية حساب تكلفة وثيقة التأمين على السفر الدولي والتغطيات الطبية لمختلف الوجهات والتأشيرات.",
        "fr": "Assurance Voyage & Assistance Internationale",
        "url": "https://caar.dz/produits/voyage/"
      },
      {
        "ar": "تأمين المهنيين والشركات الناشئة (Multirisque Pro & Startups) حلول تأمين شاملة لحماية المنشآت الاقتصادية، المحلات التجارية، والشركات الناشئة والمهن الحرة.",
        "fr": "Solutions d'Assurance Entreprises & Professionnels",
        "url": "https://caar.dz/produits/professionnels/"
      },
      {
        "ar": "منصة e-Transport للتأمين على البضائع المنقولة منصة رقمية موجهة للشركات والمتعاملين للتصريح والتأمين على شحن ونقل البضائع إلكترونيا.",
        "fr": "Plateforme Numérique Officielle",
        "url": "https://caar.dz/produits/transport/"
      },
      {
        "ar": "محدد مواقع وكالات CAAR خريطة تفاعلية لتحديد أقرب وكالة تجارية أو نقطة بيع تابعة لـ CAAR عبر كامل التراب الوطني.",
        "fr": "Localisateur d'Agences",
        "url": "https://caar.dz/agences/"
      },
      {
        "ar": "فضاء الشكاوى والاستفسارات نموذج إلكتروني موحد لتقديم الشكاوى أو الطعون أو المقترحات ومتابعة الردود رسميا.",
        "fr": "Espace Réclamations & Médiation",
        "url": "https://caar.dz/contact/"
      },
      {
        "ar": "الأسئلة الشائعة ودليل المؤمن له دليل إرشادي شامل للإجابة عن التساؤلات المتكررة حول شروط التأمين وحساب التعويضات.",
        "fr": "Foire Aux Questions & Conseils",
        "url": "https://caar.dz/faq/"
      }
    ],
    "emergencyNumber": "023 30 96 00",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر الشركة الجزائرية للتأمين وإعادة التأمين (CAAR) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Compagnie Algérienne d'Assurance et de Réassurance (CAAR) propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "caarama",
    "slug": "caarama",
    "name": {
      "ar": "كرامة للتأمينات على الأشخاص (CAARAMA)",
      "fr": "CAARAMA Assurance des Personnes"
    },
    "acronym": "CAARAMA",
    "type": "public",
    "description": {
      "ar": "الوصول السريع إلى خدمات التأمين على السيارات، طلب المعلومات، الدعم، وروابط التطبيقات الخاصة بـ CAARAMA | التأمين على السيارات في الجزائر",
      "fr": "Annuaire des solutions d'assurance de CAARAMA Assurance des Personnes : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://caarama.dz",
    "portalUrl": "https://caarama.dz",
    "headquarters": {
      "ar": "دالي إبراهيم، الجزائر العاصمة",
      "fr": "Daly Ibrahim, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي لشركة كرامة للتأمينات (CAARAMA)",
        "fr": "Site Officiel",
        "url": "https://caarama.dz"
      }
    ],
    "emergencyNumber": "023 30 95 00",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر كرامة للتأمينات على الأشخاص (CAARAMA) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "CAARAMA Assurance des Personnes propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "caat",
    "slug": "caat",
    "name": {
      "ar": "الشركة الجزائرية للتأمينات (CAAT)",
      "fr": "Compagnie Algérienne des Assurances Transport (CAAT)"
    },
    "acronym": "CAAT",
    "type": "public",
    "description": {
      "ar": "الدليل الشامل للخدمات الرقمية للشركة الجزائرية للتأمينات (CAAT): منصة E-Pack للاكتتاب الرقمي، طلب عروض الأسعار الفورية، تأمين السكن والكوارث الطبيعية CAT-NAT، الدفع الإلكتروني CIB/الذهبية، وفضاء الزبون.",
      "fr": "Annuaire des solutions d'assurance de Compagnie Algérienne des Assurances Transport (CAAT) : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://www.caat.dz/index.php/ar/",
    "portalUrl": "https://epack.caat.dz/",
    "headquarters": {
      "ar": "الأبيار، الجزائر العاصمة",
      "fr": "El Biar, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي caat.dz",
        "fr": "Site Officiel",
        "url": "https://www.caat.dz/index.php/ar/"
      },
      {
        "ar": "منصة E-Pack للاكتتاب",
        "fr": "Plateforme Numérique Officielle",
        "url": "https://epack.caat.dz/"
      }
    ],
    "emergencyNumber": "021 92 22 02",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر الشركة الجزائرية للتأمينات (CAAT) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Compagnie Algérienne des Assurances Transport (CAAT) propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "cardif-algerie",
    "slug": "cardif-algerie",
    "name": {
      "ar": "كارديف الجزائر للتأمينات (Cardif El Djazaïr)",
      "fr": "Cardif El Djazaïr (BNP Paribas Cardif)"
    },
    "acronym": "CARDIF",
    "type": "private",
    "description": {
      "ar": "الدليل الشامل للخدمات الرقمية والتأمينية لشركة كارديف للتأمينات الجزائر (Cardif El Djazaïr): تأمين المقترض والقروض العقارية، التأمين على الحياة والحماية، تأمين السفر الدولي وشنغن، التأمين الصحي، وشبكة التأمين المصرفي مع CNEP-Banque وBNP Paribas.",
      "fr": "Annuaire des solutions d'assurance de Cardif El Djazaïr (BNP Paribas Cardif) : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://cardifeldjazair.dz/",
    "portalUrl": "https://cardifeldjazair.dz/particuliers/assurance-emprunteur",
    "headquarters": {
      "ar": "المحمدية، الجزائر العاصمة",
      "fr": "Mohammadia, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي cardifeldjazair.dz",
        "fr": "Site Officiel",
        "url": "https://cardifeldjazair.dz/"
      },
      {
        "ar": "تأمين المقترض والقروض",
        "fr": "Assurance Emprunteur & Crédits",
        "url": "https://cardifeldjazair.dz/particuliers/assurance-emprunteur"
      },
      {
        "ar": "تأمين الحماية والتأمين على الحياة (Assurance Prévoyance) حلول تأمينية لحماية المستفيدين وتأمين المستقبل المالي للعائلة في حالات الوفاة أو العجز التام والمطلق (IAD).",
        "fr": "Assurance Prévoyance & Vie",
        "url": "https://cardifeldjazair.dz/particuliers/assurance-prevoyance"
      },
      {
        "ar": "تأمين السفر والمساعدة الدولية (Assurance Voyage) صيغ تأمينية متعددة للمسافرين (تونس، شنغن والعالم، تركيا، الحج والعمرة) مطابقة لمتطلبات التأشيرات الدولية.",
        "fr": "Assurance Voyage & Assistance Internationale",
        "url": "https://cardifeldjazair.dz/particuliers/assurance-voyage"
      },
      {
        "ar": "تأمين الصحة والاستشفاء (Assurance Santé) تغطية النفقات العلاجية والاستشفاء، الفحوصات الطبية، البصريات وطب الأسنان للمؤمن له وأفراد عائلته.",
        "fr": "Assurance Santé & Remboursements Médicaux",
        "url": "https://cardifeldjazair.dz/particuliers/assurance-sante"
      },
      {
        "ar": "الحماية والصحة الجماعية للمؤسسات (Entreprises & Collectivités) باقات تأمينية مصممة للمؤسسات والشركات لتغطية الأجراء والموظفين وتوفير مزايا الحماية الاجتماعية والتقاعد.",
        "fr": "Solutions d'Assurance Entreprises & Professionnels",
        "url": "https://cardifeldjazair.dz/entreprises/"
      },
      {
        "ar": "شبكة الشركاء المصرفيين والتأمين البنكي (Bancassurance) دليل نقاط التوزيع وفروع البنوك الشريكة (CNEP-Banque وBNP Paribas El Djazaïr) للاكتتاب في حلول كارديف في الجزائر.",
        "fr": "Réseau des Partenaires Bancassurance",
        "url": "https://cardifeldjazair.dz/partenaires/"
      },
      {
        "ar": "مركز الاتصال وخدمة الزبائن التواصل المباشر مع فريق الدعم والاستعلامات عبر الهاتف (+213 21 99 58 07) والبريد contact.cardifdz@cardif.com.",
        "fr": "Contacter le Service Client",
        "url": "https://cardifeldjazair.dz/contact/"
      }
    ],
    "emergencyNumber": "021 99 58 07",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر كارديف الجزائر للتأمينات (Cardif El Djazaïr) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Cardif El Djazaïr (BNP Paribas Cardif) propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "gig",
    "slug": "gig",
    "name": {
      "ar": "مجموعة الخليج للتأمين الجزائر (GIG)",
      "fr": "Gulf Insurance Group Algeria (GIG)"
    },
    "acronym": "GIG",
    "type": "private",
    "description": {
      "ar": "الدليل الشامل للخدمات الرقمية والتأمينية لمجموعة الخليج للتأمين الجزائر (GIG Algeria): طلب عروض الأسعار أونلاين (Devis en ligne)، تأمين السيارات والدراجات، تأمين السكن والكوارث الطبيعية CAT-NAT، تأمين السفر الدولي وشنغن، تأمين القوارب، وتأمين المؤسسات والمهنيين.",
      "fr": "Annuaire des solutions d'assurance de Gulf Insurance Group Algeria (GIG) : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://gig.dz/ar/",
    "portalUrl": "https://gig.dz/ar/devis",
    "headquarters": {
      "ar": "المحمدية، الجزائر العاصمة",
      "fr": "Mohammadia, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي gig.dz/ar",
        "fr": "Site Officiel",
        "url": "https://gig.dz/ar/"
      },
      {
        "ar": "طلب عرض سعر أونلاين",
        "fr": "Demande de Devis en Ligne",
        "url": "https://gig.dz/ar/devis"
      },
      {
        "ar": "تأمين السيارات والدراجات النارية (Assurance Auto & Moto) تغطية شاملة للمركبات ضد المسؤولية المدنية، الحوادث، الحريق، السرقة، مع خدمة المساعدة على الطريق 24/7.",
        "fr": "Devis Assurance Automobile & Assistance",
        "url": "https://gig.dz/ar/particuliers/"
      },
      {
        "ar": "تأمينات المؤسسات والمهنيين (Entreprises & Professionnels) حلول تأمينية للمصانع والورشات، الحرائق والأخطار الصناعية، التأمين الفلاحي وتأمين نقل البضائع البري والبحري.",
        "fr": "Solutions d'Assurance Entreprises & Professionnels",
        "url": "https://gig.dz/ar/entreprises/"
      },
      {
        "ar": "البحث عن وكالة وشبكة الفروع (Trouver une Agence) دليل تفاعلي للبحث عن أقرب وكالة من بين أكثر من 210 وكالة معتمدة لـ GIG Algeria موزعة عبر مختلف الولايات.",
        "fr": "Réseau d'Agences et Distributeurs GAB",
        "url": "https://gig.dz/ar/agences/"
      },
      {
        "ar": "مركز الاتصال وخدمة الزبائن التواصل المباشر مع فريق الدعم والاستعلامات عبر الهاتف (023 77 21 12 / 0770 25 00 00) والبريد contact@gig.dz.",
        "fr": "Contacter le Service Client",
        "url": "https://gig.dz/ar/contact/"
      }
    ],
    "emergencyNumber": "023 77 21 12",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر مجموعة الخليج للتأمين الجزائر (GIG) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Gulf Insurance Group Algeria (GIG) propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "macir-vie",
    "slug": "macir-vie",
    "name": {
      "ar": "ماكير في للتأمين على الأشخاص (Macir Vie)",
      "fr": "Macir Vie — Assurance des Personnes"
    },
    "acronym": "MACIR VIE",
    "type": "private",
    "description": {
      "ar": "الدليل الشامل للخدمات الرقمية والتأمينية لشركة ماكير في للتأمين على الحياة (Macir Vie): الاكتتاب الإلكتروني المباشر في تأمين السفر وبطاقة MyM Pass، تأمين المقترض والقروض المصرفية MyMacir Crédits، تأمين الحج والعمرة، تأمين الحوادث المدرسية، تطبيق MyMacir، وتأمينات المؤسسات.",
      "fr": "Annuaire des solutions d'assurance de Macir Vie — Assurance des Personnes : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://www.macirvie.com/",
    "portalUrl": "https://play.google.com/store/apps/details?id=com.macirvie.mymacir",
    "headquarters": {
      "ar": "حيدرة، الجزائر العاصمة",
      "fr": "Hydra, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي (macirvie.com)",
        "fr": "Site Officiel",
        "url": "https://www.macirvie.com/"
      },
      {
        "ar": "تطبيق الهاتف الذكي MyMacir اكتتاب أونلاين في تأمين السفر، تحميل الشهادة فوريا، وتنزيل بطاقة المساعدة MyM Pass على محفظة الهاتف الذكي.",
        "fr": "Application Mobile Officielle",
        "url": "https://play.google.com/store/apps/details?id=com.macirvie.mymacir"
      }
    ],
    "emergencyNumber": "023 48 07 00",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر ماكير في للتأمين على الأشخاص (Macir Vie) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Macir Vie — Assurance des Personnes propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "saa",
    "slug": "saa",
    "name": {
      "ar": "الشركة الوطنية للتأمين (SAA)",
      "fr": "Société Nationale d'Assurance (SAA)"
    },
    "acronym": "SAA",
    "type": "public",
    "description": {
      "ar": "الدليل الشامل للخدمات الرقمية والتأمينية للشركة الوطنية للتأمين (SAA): طلب عروض الأسعار أونلاين، تأمين السيارات وباقة لالة LÂLLA، تأمين السكن والكوارث الطبيعية CAT-NAT، تأمين السفر الدولي وشنغن، التأمين الفلاحي، وتأمينات المؤسسات والمهنيين.",
      "fr": "Annuaire des solutions d'assurance de Société Nationale d'Assurance (SAA) : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://www.saa.dz/",
    "portalUrl": "https://www.saa.dz/particuliers/",
    "headquarters": {
      "ar": "محمد بلوزداد، الجزائر العاصمة",
      "fr": "Mohamed Belouizdad, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي saa.dz",
        "fr": "Site Officiel",
        "url": "https://www.saa.dz/"
      },
      {
        "ar": "طلب تسعيرة الآن",
        "fr": "Demande de Devis en Ligne",
        "url": "https://www.saa.dz/particuliers/"
      },
      {
        "ar": "تأمين الأخطار الفلاحية والزراعية تأمين المحاصيل، البيوت البلاستيكية، المواشي، والعتاد الفلاحي ضد تقلبات المناخ والحرائق.",
        "fr": "Assurance des Risques Agricoles",
        "url": "https://www.saa.dz/entreprises/"
      }
    ],
    "emergencyNumber": "021 23 95 95",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر الشركة الوطنية للتأمين (SAA) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Société Nationale d'Assurance (SAA) propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "salama",
    "slug": "salama",
    "name": {
      "ar": "سلامة للتأمينات الجزائر (Salama Assurances)",
      "fr": "Salama Assurances Algérie (Takaful)"
    },
    "acronym": "SALAMA",
    "type": "takaful",
    "description": {
      "ar": "اكتشف الخدمات الرقمية لـ سلامة للتأمينات (Salama Assurances) في الجزائر. طلب عروض أسعار، تأمين السيارات، تأمين الممتلكات والتأمين المهني بأسهل الطرق.",
      "fr": "Annuaire des solutions d'assurance de Salama Assurances Algérie (Takaful) : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://salama-assurances.dz/",
    "portalUrl": "https://salama-assurances.dz/contactez-nous/",
    "headquarters": {
      "ar": "الأبيار، الجزائر العاصمة",
      "fr": "El Biar, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي",
        "fr": "Site Officiel",
        "url": "https://salama-assurances.dz/"
      },
      {
        "ar": "الاتصال بالوكالة",
        "fr": "Contacter le Service Client",
        "url": "https://salama-assurances.dz/contactez-nous/"
      },
      {
        "ar": "تأمين السكن (Multirisque Habitation) الاطلاع على خيارات حماية ممتلكاتك، وعروض التأمين ضد الحرائق والسرقة وتلف المياه.",
        "fr": "Assurance Multirisque Habitation & CAT-NAT",
        "url": "https://salama-assurances.dz/particuliers/multirisque-habitation/"
      },
      {
        "ar": "التأمين المهني (Multirisque Pro) ضمان الأمان لنشاطك المهني والتأمين الشامل على المعدات والأصول الخاصة بعملك.",
        "fr": "Solutions d'Assurance Entreprises & Professionnels",
        "url": "https://salama-assurances.dz/particuliers/multirisque-pro/"
      },
      {
        "ar": "نصائح والأسئلة الشائعة (Conseil) الحصول على إجابات مفيدة وتوجيهات عملية حول مختلف خدمات التأمين.",
        "fr": "Foire Aux Questions & Conseils",
        "url": "https://salama-assurances.dz/conseil/"
      }
    ],
    "emergencyNumber": "021 92 01 01",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "تغطيات تأمين تكافلي مطابقة للضوابط الشرعية",
        "fr": "Assurance Takaful conforme à la finance participative"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر سلامة للتأمينات الجزائر (Salama Assurances) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Salama Assurances Algérie (Takaful) propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  },
  {
    "id": "trust-algeria",
    "slug": "trust-algeria",
    "name": {
      "ar": "ترست الجزائر للتأمين وإعادة التأمين (Trust)",
      "fr": "Trust Algeria Assurances & Réassurance"
    },
    "acronym": "TRUST",
    "type": "private",
    "description": {
      "ar": "الدليل الشامل للخدمات التأمينية والرقمية لشركة ترست الجزائر للتأمينات وإعادة التأمين (Trust Algeria Assurances): طلب عروض الأسعار، تأمين السيارات، تأمين السكن والكوارث الطبيعية CAT-NAT، تأمين السفر الدولي، وتأمينات المؤسسات والمهنيين.",
      "fr": "Annuaire des solutions d'assurance de Trust Algeria Assurances & Réassurance : devis en ligne, assurance auto, multirisque habitation CAT-NAT, assurance voyage Schengen et couverture santé."
    },
    "website": "https://www.trust-assurances.dz/",
    "portalUrl": "https://www.trust-assurances.dz/",
    "headquarters": {
      "ar": "القبة، الجزائر العاصمة",
      "fr": "Kouba, Alger"
    },
    "products": [
      {
        "ar": "الموقع الرسمي — trust-assurances.dz",
        "fr": "Site Officiel — Trust Algeria Assurances",
        "url": "https://www.trust-assurances.dz/"
      }
    ],
    "emergencyNumber": "021 29 88 88",
    "quickSummary": {
      "autoInsurance": {
        "ar": "تأمين إجباري للمسؤولية المدنية، كل الأخطار، المساعدة على الطريق 24/7",
        "fr": "Responsabilité civile obligatoire, tous risques et assistance dépannage 24/7"
      },
      "eDeclaration": {
        "ar": "إمكانية طلب تسعيرة فورية ومتابعة ملفات الحوادث عبر المنصة أو الوكالة",
        "fr": "Demande de devis en ligne et déclaration / suivi des dossiers sinistres"
      },
      "takafulOptions": {
        "ar": "صيغ تأمين للأفراد والعائلات والسفر الدولي والكوارث الطبيعية",
        "fr": "Formules complètes particuliers, voyage Schengen, habitation et CAT-NAT"
      }
    },
    "requirements": [
      {
        "label": {
          "ar": "عقد تأمين السيارات",
          "fr": "Souscription Assurance Auto"
        },
        "value": {
          "ar": "البطاقة الرمادية للمركبة، رخصة السياقة، وبطاقة التعريف الوطنية",
          "fr": "Carte grise du véhicule, permis de conduire et pièce d'identité"
        }
      },
      {
        "label": {
          "ar": "تأمين السفر وشنغن",
          "fr": "Assurance Voyage Schengen"
        },
        "value": {
          "ar": "جواز سفر ساري المفعول وتحديد تواريخ الذهاب والإياب",
          "fr": "Passeport biométrique valide et dates précises du séjour"
        }
      }
    ],
    "faqs": [
      {
        "question": {
          "ar": "هل توفر ترست الجزائر للتأمين وإعادة التأمين (Trust) تسعيرة تأمين السفر وشنغن أونلاين؟",
          "fr": "Trust Algeria Assurances & Réassurance propose-t-elle des devis d'assurance voyage ou auto en ligne ?"
        },
        "answer": {
          "ar": "نعم، يمكنك طلب عرض سعر إلكتروني أو تحديد أقرب وكالة تجارية مباشرة من خلال الروابط الرسمية المعتمدة في هذه الصفحة.",
          "fr": "Oui, vous pouvez simuler un devis ou accéder à l'espace client directement via les liens officiels répertoriés sur cette fiche."
        }
      }
    ]
  }
];
