import React from 'react';
import { Metadata } from 'next';
import { Wrench, HelpCircle, Table2 } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  SITE_URL,
} from '@/lib/seo';
import { toolsList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import ToolsDirectoryClient, { ToolCategoryMeta } from '@/components/ToolsDirectoryClient';

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'fr' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  return constructMetadata({
    title:
      validLang === 'ar'
        ? 'الأدوات الرقمية المجانية للجزائريين | البوابة الجزائرية'
        : 'Outils Numériques Gratuits pour les Algériens | Portail DZ',
    description:
      validLang === 'ar'
        ? `مكتبة موحدة تضم ${toolsList.length} أداة وحاسبة رقمية مجانية للجزائريين: حاسبة الراتب IRG، تفقيط الدينار، فاتورة سونلغاز، متابعة التلقيح والأدوية، وأدوات الدراسة والإنتاجية.`
        : `Bibliothèque unifiée de ${toolsList.length} outils et simulateurs gratuits : salaire net IRG, conversion DZD en lettres, facture Sonelgaz, vaccination, études et productivité.`,
    path: 'pages/tools',
    lang: validLang,
  });
}

export default async function ToolsIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const categories: ToolCategoryMeta[] = [
    {
      id: 'calculators',
      label: {
        ar: 'الحاسبات المالية والإدارية',
        fr: 'Calculateurs Financiers & Fiscaux',
      },
      summary: {
        ar: 'حاسبة الراتب IRG، تفقيط الدينار والسنتيم، فاتورة الكهرباء سونلغاز، القروض، والوقود.',
        fr: 'Salaire net IRG, montant DZD en lettres, facture Sonelgaz, crédits, carburant et devises.',
      },
    },
    {
      id: 'health',
      label: {
        ar: 'الأدوات الصحية والتوعوية',
        fr: 'Santé, Prévention & Suivi Familial',
      },
      summary: {
        ar: 'متابعة الأدوية والتلقيح الوطني 2026، نمو الأطفال والرضع، السعرات، والاستبيانات التوعوية.',
        fr: 'Suivi médicamenteux et vaccinal 2026, croissance pédiatrique, grossesse, nutrition et repères médicaux.',
      },
    },
    {
      id: 'productivity',
      label: {
        ar: 'أدوات الإنتاجية والأعمال والوثائق',
        fr: 'Productivité, Gestion & Documents',
      },
      summary: {
        ar: 'منشئ الفواتير والسيرة الذاتية، إدارة المخزون، أدوات PDF وQR، وضغط الصور ومعالجة النصوص.',
        fr: 'Factures, CV, gestion de stock, PDF, QR code, compression d’images et dictionnaire arabe.',
      },
    },
    {
      id: 'study',
      label: {
        ar: 'أدوات الدراسة والمراجعة الجامعية',
        fr: 'Études, Examens & Recherche',
      },
      summary: {
        ar: 'حساب المعدل الفصلي، مخطط الامتحانات والبحث، مراجع APA 7، بومودورو، والبطاقات التعليمية.',
        fr: 'Moyennes LMD, planning de révision et recherche, bibliographie APA 7, Pomodoro et flashcards.',
      },
    },
    {
      id: 'daily-life',
      label: {
        ar: 'الحياة اليومية والميزانية والتنقل',
        fr: 'Vie Quotidienne, Budget & Mobilité',
      },
      summary: {
        ar: 'مدير الميزانية والمصاريف، مخطط الوجبات الأسبوعي، خريطة الطالب، ومخطط المشروع الزراعي.',
        fr: 'Budget familial, menus 7 jours, carte universitaire algérienne et planification agricole.',
      },
    },
    {
      id: 'islamic',
      label: {
        ar: 'التقويم الهجري وبوصلة القبلة',
        fr: 'Calendrier Hégirien & Boussole Qibla',
      },
      summary: {
        ar: 'الرزنامة الهجرية والميلادية مع جدول الأعياد الرسمية واتجاه القبلة لولايات الجزائر.',
        fr: 'Convertisseur Grégorien/Hégirien avec jours fériés et azimut Qibla pour les 58 wilayas.',
      },
    },
  ];

  const faqs = [
    {
      question:
        validLang === 'ar'
          ? 'هل تتطلب الأدوات الرقمية في البوابة اشتراكا مدفوعا أو إنشاء حساب؟'
          : 'Les outils du portail nécessitent-ils un abonnement ou un compte utilisateur ?',
      answer:
        validLang === 'ar'
          ? `لا؛ جميع الأدوات المدرجة في هذا الدليل (${toolsList.length} أداة) مجانية بالكامل ومفتوحة للاستخدام الفوري دون تسجيل حساب أو قيود استخدام.`
          : `Non ; l'ensemble des ${toolsList.length} outils du répertoire sont entièrement gratuits et accessibles immédiatement sans création de compte.`,
    },
    {
      question:
        validLang === 'ar'
          ? 'أين تحفظ بياناتي الحساسة مثل الرواتب، الأدوية، الفواتير، أو رزنامة اللقاحات؟'
          : 'Où sont conservées mes saisies (salaires, médicaments, factures ou vaccins) ?',
      answer:
        validLang === 'ar'
          ? 'تعالج كافة البيانات محليا داخل متصفحك فقط (Client-Side) دون إرسالها إلى أي خادم خارجي، وتوفر أدوات التتبع مثل متابعة الأدوية واللقاحات والميزانية خيار تصدير نسخة احتياطية JSON للاحتفاظ بها.'
          : 'Tous les calculs s’exécutent localement dans votre navigateur sans transfert vers un serveur distant. Les outils de suivi (médicaments, vaccins, budget, repas) proposent un export de sauvegarde JSON sur votre appareil.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل تغني الأدوات الصحية أو المالية عن الطبيب أو المصالح الرسمية المختصة؟'
          : 'Les résultats des outils santé ou financiers remplacent-ils un avis officiel ?',
      answer:
        validLang === 'ar'
          ? 'لا؛ تقدم الحاسبات المالية تقديرات استرشادية وفق القوانين المتاحة، كما تعد الأدوات الصحية توعوية وتنظيمية ولا تغني مطلقا عن التشخيص الطبي أو اعتماد الوثائق الرسمية الصادرة عن الإدارة أو البنك.'
          : 'Non ; les simulateurs financiers offrent des estimations indicatives et les outils de santé restent strictement éducatifs sans jamais remplacer une consultation médicale ou une pièce officielle.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل تدعم هذه الأدوات العمل عبر الهاتف النقال وعند ضعف الإنترنت؟'
          : 'La suite fonctionne-t-elle sur mobile et avec une connexion internet instable ?',
      answer:
        validLang === 'ar'
          ? 'نعم؛ صممت كافة الواجهات بتجاوب كامل مع شاشات الهواتف الذكية والأجهزة اللوحية والحواسيب، وتعمل الحسابات محليا فورا بمجرد فتح الصفحة.'
          : 'Oui ; toutes les interfaces sont responsives sur smartphone et ordinateur, et la logique de calcul s’exécute directement dans le navigateur après chargement.',
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.tools, url: `/${validLang}/pages/tools/` },
  ]);

  const faqSchema = generateFAQSchema(faqs, validLang);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name:
      validLang === 'ar'
        ? 'مكتبة الأدوات الرقمية والحاسبات الجزائرية'
        : 'Répertoire des Outils Numériques & Simulateurs Algériens',
    description:
      validLang === 'ar'
        ? `فهرس موحد يضم ${toolsList.length} أداة تفاعلية مجانية للحساب، الصحة، الدراسة، الإنتاجية، والحياة اليومية في الجزائر.`
        : `Index unifié regroupant ${toolsList.length} outils interactifs gratuits pour le calcul, la santé, les études, la productivité et la vie quotidienne en Algérie.`,
    url: `${SITE_URL}/${validLang}/pages/tools/`,
    inLanguage: validLang,
    numberOfItems: toolsList.length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        lang={validLang}
        items={[{ label: dict.nav.tools, href: `/${validLang}/pages/tools/` }]}
      />

      {/* Editorial Page Header */}
      <header className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>{validLang === 'ar' ? 'دليل الأدوات الرقمية' : 'Répertoire d’Outils'}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">
            {validLang === 'ar' ? `${toolsList.length} أداة تفاعلية` : `${toolsList.length} outils interactifs`}
          </span>
          <span aria-hidden="true">·</span>
          <span>{validLang === 'ar' ? '6 فئات متكاملة' : '6 domaines complets'}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3 text-balance">
          <Wrench className="w-8 h-8 text-emerald-600 shrink-0" />
          <span>{validLang === 'ar' ? 'الأدوات الرقمية والحاسبات الجزائرية' : dict.nav.tools}</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? `مكتبة موحدة تضم ${toolsList.length} أداة مجانية مصممة لاحتياجات المواطن والأسرة والطالب والمهني في الجزائر، تعمل محليا داخل المتصفح لمساعدتك في الحسابات المالية، المتابعة الصحية، التنظيم الدراسي، وإنتاجية العمل اليومي.`
            : `Bibliothèque unifiée de ${toolsList.length} outils gratuits conçus pour les citoyens, familles, étudiants et professionnels en Algérie : calcul financier, suivi santé, révisions académiques et productivité quotidienne, exécutés localement dans votre navigateur.`}
        </p>
      </header>

      {/* GEO Quick Summary Box */}
      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'المواطنون، الأسر، الطلبة، والمهنيون وأصحاب المشاريع في الجزائر'
            : 'Citoyens, familles, étudiants, professionnels et entrepreneurs en Algérie'
        }
        processingTime={
          validLang === 'ar'
            ? 'تشغيل فوري في المتصفح دون تحميل أو تسجيل'
            : 'Exécution instantanée dans le navigateur sans inscription'
        }
        fees={
          validLang === 'ar'
            ? '100% مجاني بدون إعلانات مزعجة أو اشتراكات'
            : '100 % gratuit sans abonnement ni frais cachés'
        }
        channel={
          validLang === 'ar'
            ? 'معالجة محلية كاملة (Client-Side) تحافظ على سرية البيانات'
            : 'Traitement local côté client garantissant la confidentialité'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'اختر الأداة أو استعمل التصفية السريعة حسب الفئة أو الكلمة المفتاحية'
            : 'Sélectionnez une catégorie ou utilisez la recherche instantanée ci-dessous'
        }
      />

      {/* Interactive Search & Category Directory */}
      <ToolsDirectoryClient
        lang={validLang}
        tools={toolsList}
        categories={categories}
        launchLabel={dict.sections.launchTool}
      />

      {/* Structured HTML Summary Table for GEO & Quick Comparison */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2.5">
          <Table2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar'
              ? 'توزيع الأدوات الرقمية حسب الفئات والخصوصية'
              : 'Répartition des Outils par Catégorie et Stockage'}
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <table className="w-full min-w-[480px] sm:min-w-0 text-sm text-start border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <th className="py-3 px-4 font-bold text-start">
                  {validLang === 'ar' ? 'الفئة' : 'Catégorie'}
                </th>
                <th className="py-3 px-4 font-bold text-start tabular-nums">
                  {validLang === 'ar' ? 'عدد الأدوات' : 'Nombre'}
                </th>
                <th className="py-3 px-4 font-bold text-start">
                  {validLang === 'ar' ? 'أبرز الاستخدامات' : 'Principaux usages'}
                </th>
                <th className="py-3 px-4 font-bold text-start">
                  {validLang === 'ar' ? 'حفظ البيانات' : 'Confidentialité'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {categories.map((cat) => {
                const count = toolsList.filter((t) => t.category === cat.id).length;
                return (
                  <tr key={cat.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                      {cat.label[validLang]}
                    </td>
                    <td className="py-3 px-4 font-mono tabular-nums text-emerald-700 dark:text-emerald-400 font-bold">
                      {count}
                    </td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                      {cat.summary[validLang]}
                    </td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                      {validLang === 'ar' ? 'معالجة وحفظ محلي فقط' : 'Exécution locale uniquement'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2.5">
          <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar'
              ? 'أسئلة شائعة حول مكتبة الأدوات الرقمية'
              : 'Questions Fréquentes sur la Suite d’Outils'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
