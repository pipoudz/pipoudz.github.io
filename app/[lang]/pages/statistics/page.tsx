import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  Users,
  CheckCircle2,
  Landmark,
  Building2,
  Shield,
  Wrench,
  ExternalLink,
  HelpCircle,
  Layers,
} from 'lucide-react';
import { Language, SectorCategory } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
import {
  sectorsList,
  banksList,
  insuranceList,
  proceduresList,
  toolsList,
  videosList,
  noticesList,
  trainTripsList,
  contactPortalLinks,
} from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';

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
        ? 'إحصائيات ديناميكية حول عدد الخدمات الرقمية وتوزيعها على قطاعات البوابة'
        : 'Statistiques Dynamiques & Répartition par Secteur du Portail',
    description:
      validLang === 'ar'
        ? `لوحة إحصائيات محدثة لعدد الخدمات الرقمية وتوزيعها: ${sectorsList.length} قطاعا وهيئة، ${banksList.length} بنكا، ${insuranceList.length} شركة تأمين، و${toolsList.length} أداة تفاعلية.`
        : `Tableau de bord actualisé : ${sectorsList.length} secteurs publics, ${banksList.length} banques, ${insuranceList.length} assureurs et ${toolsList.length} outils interactifs.`,
    path: 'pages/statistics',
    lang: validLang,
  });
}

export default async function StatisticsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const totalSectorLinks = sectorsList.reduce((acc, s) => acc + s.services.length, 0);
  const totalBankLinks = banksList.reduce((acc, b) => acc + b.services.length, 0);
  const totalInsLinks = insuranceList.reduce((acc, i) => acc + i.products.length, 0);
  const totalOfficialLinks = totalSectorLinks + totalBankLinks + totalInsLinks;

  const categoryOrder: SectorCategory[] = [
    'ministries',
    'justice_interior',
    'education_higher',
    'finance_economy',
    'social_labor',
    'housing',
    'energy_water',
    'telecom',
    'transport',
    'health_civil',
  ];

  const categoryStats = categoryOrder.map((cat) => {
    const items = sectorsList.filter((s) => s.category === cat);
    const servicesCount = items.reduce((acc, s) => acc + s.services.length, 0);
    return {
      category: cat,
      label: dict.categories[cat],
      count: items.length,
      servicesCount,
      topSectors: items.slice(0, 4),
    };
  });

  const portalMetrics = [
    {
      title: validLang === 'ar' ? 'القطاعات والمؤسسات العمومية' : 'Secteurs & Organismes Publics',
      value: sectorsList.length.toString(),
      sub: `${totalSectorLinks} ${validLang === 'ar' ? 'رابط خدمة مباشرة' : 'liens directs vérifiés'}`,
      href: `/${validLang}/sectors/`,
      icon: Building2,
    },
    {
      title: validLang === 'ar' ? 'البنوك والمؤسسات المالية' : 'Banques & Établissements Financiers',
      value: banksList.length.toString(),
      sub: `${totalBankLinks} ${validLang === 'ar' ? 'منصة وتطبيق بنكي' : 'services e-banking'}`,
      href: `/${validLang}/sectors/bank/`,
      icon: Landmark,
    },
    {
      title: validLang === 'ar' ? 'شركات التأمين المعتمدة' : 'Compagnies d’Assurance',
      value: insuranceList.length.toString(),
      sub: `${totalInsLinks} ${validLang === 'ar' ? 'تغطية ومنصة إلكترونية' : 'portails et garanties'}`,
      href: `/${validLang}/sectors/assurance/`,
      icon: Shield,
    },
    {
      title: validLang === 'ar' ? 'الأدوات والحاسبات الذكية' : 'Outils & Calculateurs Hors-Ligne',
      value: toolsList.length.toString(),
      sub: validLang === 'ar' ? 'ضمن 6 فئات رئيسية' : 'répartis en 6 catégories',
      href: `/${validLang}/pages/tools/`,
      icon: Wrench,
    },
  ];

  const nationalIndicators = [
    {
      title: validLang === 'ar' ? 'إجمالي الروابط الرسمية المفهرسة' : 'Total des Liens Officiels Indexés',
      value: `${totalOfficialLinks}+`,
      change: validLang === 'ar' ? 'نطاقات .dz ومواقع رسمية' : 'Domaines institutionnels .dz',
      icon: CheckCircle2,
    },
    {
      title: validLang === 'ar' ? 'الأدلة، البلاغات، والخطوط الحديدية' : 'Procédures, Avis & Lignes SNTF',
      value: `${proceduresList.length + videosList.length + noticesList.length + trainTripsList.length}`,
      change: `${proceduresList.length} ${validLang === 'ar' ? 'إجراء' : 'démarches'} · ${videosList.length} ${validLang === 'ar' ? 'فيديو' : 'vidéos'} · ${noticesList.length} ${validLang === 'ar' ? 'بلاغ' : 'avis'} · ${trainTripsList.length} SNTF`,
      icon: TrendingUp,
    },
    {
      title: validLang === 'ar' ? 'بطاقات الدفع الذهبية في الجزائر' : 'Cartes Edahabia Actives en Algérie',
      value: '+14,500,000',
      change: validLang === 'ar' ? 'نمو متواصل في الدفع الإلكتروني' : 'Croissance du paiement électronique',
      icon: Landmark,
    },
    {
      title: validLang === 'ar' ? 'وثائق الحالة المدنية المستخرجة رقميا' : 'Actes d’État Civil Dématérialisés',
      value: '+65,000,000',
      change: validLang === 'ar' ? 'مجاني 100% عبر الشبكة' : '100 % gratuit via téléservices',
      icon: Users,
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    {
      name: validLang === 'ar' ? 'الإحصائيات' : 'Statistiques',
      url: `/${validLang}/pages/statistics/`,
    },
  ]);

  const statsFaqs = [
    {
      question:
        validLang === 'ar'
          ? 'كيف تُحتسب إحصائيات عدد القطاعات والخدمات المعروضة في هذه الصفحة؟'
          : 'Comment sont calculés les compteurs de secteurs et de services affichés ici ?',
      answer:
        validLang === 'ar'
          ? `تُجمع الأرقام مباشرة وبشكل تلقائي من قاعدة بيانات البوابة (${sectorsList.length} قطاعا و${banksList.length} بنكا و${insuranceList.length} شركة تأمين و${toolsList.length} أداة) عند بناء الصفحات.`
          : `Les chiffres sont calculés directement à partir de l’index réel du portail (${sectorsList.length} secteurs, ${banksList.length} banques, ${insuranceList.length} assureurs et ${toolsList.length} outils).`,
    },
    {
      question:
        validLang === 'ar'
          ? 'هل يمكنني الانتقال مباشرة إلى أي قطاع انطلاقا من جدول التوزيع؟'
          : 'Puis-je accéder directement à un secteur depuis le tableau de répartition ?',
      answer:
        validLang === 'ar'
          ? 'نعم، اضغط على اسم أي قطاع أو فئة في جدول توزيع الخدمات للانتقال فورا إلى صفحته التفصيلية وروابطه الرسمية.'
          : 'Oui, cliquez sur le nom de chaque institution dans le tableau ci-dessus pour ouvrir sa fiche complète et ses liens officiels.',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف أشارك في تقييم البوابة أو اقتراح تحديث الأرقام والروابط؟'
          : 'Comment évaluer le portail ou proposer un nouvel organisme à indexer ?',
      answer:
        validLang === 'ar'
          ? 'يمكنك إرسال تقييمك عبر رابط استمارة Google Forms الموجود أسفل هذه الصفحة أو مراسلتنا عبر صفحة اتصل بنا.'
          : 'Utilisez le bouton d’évaluation ci-dessous ou écrivez-nous depuis la page Contact.',
    },
  ];

  const faqSchema = generateFAQSchema(statsFaqs, validLang);

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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
        items={[
          {
            label: validLang === 'ar' ? 'الإحصائيات' : 'Statistiques',
            href: `/${validLang}/pages/statistics/`,
          },
        ]}
      />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          <BarChart3 className="w-4 h-4" />
          <span>
            {validLang === 'ar'
              ? 'مؤشرات البوابة والرقمنة الجزائرية'
              : 'Indicateurs du Portail & Transition Numérique'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {validLang === 'ar'
            ? 'إحصائيات ديناميكية حول الخدمات وتوزيع القطاعات'
            : 'Statistiques Dynamiques & Répartition Sectorielle'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {validLang === 'ar'
            ? 'رصد حي لحجم الخدمات الرقمية، المؤسسات العمومية، البنوك، وشركات التأمين المفهرسة في البوابة مع توزيعها التفاعلي على الفئات والقطاعات.'
            : 'Vue consolidée et exacte des services numériques, organismes publics, banques et assureurs répertoriés dans le portail bilingue.'}
        </p>
      </header>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'الباحثون، الإعلاميون، المواطنون، ومطورو المنصات الرقمية'
            : 'Citoyens, chercheurs, médias et observateurs de la numérisation'
        }
        processingTime={
          validLang === 'ar'
            ? 'احتساب ديناميكي متزامن مع كافة ملفات القطاعات والأدوات'
            : 'Calcul synchronisé avec l’ensemble des fiches du portail'
        }
        fees={
          validLang === 'ar'
            ? 'مؤشرات مفتوحة ومجانية للجميع'
            : 'Données statistiques en accès libre et gratuit'
        }
        channel={
          validLang === 'ar'
            ? `${sectorsList.length} قطاعا · ${totalOfficialLinks}+ رابط رسمي · ${toolsList.length} أداة`
            : `${sectorsList.length} secteurs · ${totalOfficialLinks}+ liens officiels · ${toolsList.length} outils`
        }
        keyRequirement={
          validLang === 'ar'
            ? 'اضغط على أي قطاع في جدول التوزيع أدناه للانتقال إلى صفحته مباشرة'
            : 'Cliquez sur n’importe quel secteur du tableau pour accéder à sa fiche'
        }
        officialUrl={contactPortalLinks.ratingFormUrl}
      />

      {/* Portal Catalog Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {portalMetrics.map((m, i) => {
          const IconComp = m.icon;
          return (
            <Link
              prefetch={false}
              key={i}
              href={m.href}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500 min-w-0">{m.title}</span>
                <IconComp className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
              <div className="text-3xl font-black font-mono text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                {m.value}
              </div>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 block">
                {m.sub}
              </span>
            </Link>
          );
        })}
      </div>

      {/* National Digitalization Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nationalIndicators.map((st, i) => {
          const IconComp = st.icon;
          return (
            <div
              key={i}
              className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500 min-w-0">{st.title}</span>
                <IconComp className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
              <div className="text-3xl font-black font-mono text-slate-900 dark:text-slate-100">
                {st.value}
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block">
                {st.change}
              </span>
            </div>
          );
        })}
      </div>

      {/* Distribution of Services by Sector HTML Table */}
      <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? 'توزيع الخدمات حسب القطاع'
                : 'Répartition des Services par Secteur'}
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {validLang === 'ar'
              ? 'اضغط على اسم القطاع أو الهيئة للانتقال مباشرة إلى صفحته التفصيلية.'
              : 'Cliquez sur le nom d’un organisme pour consulter directement sa page dédiée.'}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full min-w-[540px] sm:min-w-0 text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold">
                  {validLang === 'ar' ? 'المجال القطاعي' : 'Catégorie sectorielle'}
                </th>
                <th className="p-3 text-start font-bold">
                  {validLang === 'ar' ? 'الهيئات' : 'Organismes'}
                </th>
                <th className="p-3 text-start font-bold">
                  {validLang === 'ar' ? 'الروابط' : 'Téléservices'}
                </th>
                <th className="p-3 text-start font-bold">
                  {validLang === 'ar' ? 'روابط سريعة للقطاعات' : 'Accès direct aux fiches'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {categoryStats.map((row) => (
                <tr key={row.category} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-900 dark:text-slate-100">
                    {row.label}
                  </td>
                  <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                    {row.count}
                  </td>
                  <td className="p-3 font-mono text-slate-600 dark:text-slate-300">
                    {row.servicesCount}
                  </td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1.5">
                      {row.topSectors.map((sec) => (
                        <Link
                          key={sec.slug}
                          prefetch={false}
                          href={`/${validLang}/sectors/${sec.slug}/`}
                          className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-[11px] font-semibold transition-colors"
                        >
                          {sec.acronym || sec.name[validLang]}
                        </Link>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Feedback & Rating CTA */}
      <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar'
              ? 'تقييم الموقع والمساهمة في التطوير'
              : 'Évaluation du Site & Suggestions'}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            {validLang === 'ar'
              ? 'متوسط تقييمات الزوار الواردة من جدول التقييمات — أرسل تقييمك واقتراحاتك الآن.'
              : 'Partagez votre note via le formulaire d’évaluation officiel du portail.'}
          </p>
        </div>
        <a
          href={contactPortalLinks.ratingFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm"
        >
          <span>{validLang === 'ar' ? 'أرسل تقييمك' : 'Envoyer votre avis'}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* FAQs */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {statsFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                {faq.question}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
