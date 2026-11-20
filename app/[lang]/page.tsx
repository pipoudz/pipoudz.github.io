import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Building2,
  Landmark,
  Shield,
  FileText,
  Wrench,
  Train,
  Video,
  Bell,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Calculator,
  Globe,
  Smartphone,
  BookOpen,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import {
  sectorsList,
  banksList,
  insuranceList,
  proceduresList,
  toolsList,
  videosList,
  noticesList,
  homeExternalServices,
  blogArticles,
} from '@/lib/sectors-data';

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
        ? 'البوابة الجزائرية للخدمات الرقمية'
        : 'Portail Algérien des Services Numériques',
    description:
      validLang === 'ar'
        ? `اكتشف الخدمات الرقمية الجزائرية في مكان واحد: ${sectorsList.length} قطاعا وهيئة عمومية، ${banksList.length} بنكا، ${insuranceList.length} شركة تأمين، ${proceduresList.length} إجراء إداريا، ${toolsList.length} أداة تفاعلية، ومواقيت قطارات الجزائر SNTF.`
        : `Découvrez tous les services numériques algériens en un seul portail : ${sectorsList.length} secteurs publics, ${banksList.length} banques, ${insuranceList.length} assureurs, ${proceduresList.length} démarches guidées, ${toolsList.length} outils et horaires SNTF.`,
    path: '',
    lang: validLang,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const NextArrow = validLang === 'ar' ? ArrowLeft : ArrowRight;

  const popularSectors = sectorsList.filter((s) => s.isPopular).slice(0, 8);
  const popularTools = toolsList.filter((t) => t.isPopular).slice(0, 6);
  const featuredProcedures = proceduresList.slice(0, 4);
  const featuredArticles = blogArticles.slice(0, 4);

  const homeFaqs = [
    {
      question:
        validLang === 'ar'
          ? 'ما هي أبرز الخدمات الرقمية التي يمكن إنجازها عبر الإنترنت في الجزائر؟'
          : 'Quels sont les principaux services numériques accessibles en Algérie ?',
      answer:
        validLang === 'ar'
          ? 'تشمل استخراج شهادة الميلاد الخاصة 12خ، صحيفة السوابق القضائية رقم 3، التصديق بالأبوستيل، متابعة ملفات سكنات عدل، الاستفادة من منحة البطالة، ودفع فواتير الكهرباء والماء إلكترونيا.'
          : "L'obtention d'actes d'état civil, le casier judiciaire n°3, l'apostille numérique, le suivi AADL, l'allocation chômage Wassit et le paiement de factures Sonelgaz et SEAAL.",
    },
    {
      question:
        validLang === 'ar'
          ? `هل تعمل الأدوات والحاسبات (${toolsList.length} أداة) في هذه البوابة دون اتصال بالإنترنت؟`
          : `Les ${toolsList.length} outils et simulateurs fonctionnent-ils hors-ligne ?`,
      answer:
        validLang === 'ar'
          ? 'نعم، جميع الحاسبات المالية والصحية والدراسية وأدوات PDF وQR تعمل محليا بالكامل داخل متصفحك دون إرسال أي بيانات خارجية.'
          : 'Oui, tous les calculateurs (salaire net IRG, facture Sonelgaz, dictionnaire, génération QR, fusion PDF) s’exécutent localement à 100 % dans votre navigateur.',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف أتحقق من صحة الروابط الرسمية للمنصات الحكومية والبنوك؟'
          : 'Comment vérifier l’authenticité des liens officiels répertoriés ?',
      answer:
        validLang === 'ar'
          ? 'تضم البوابة أكثر من 800 رابط رسمي معتمد نحو النطاقات الحكومية .dz ومواقع البنوك وشركات التأمين المرخصة من بنك الجزائر والهيئات الرقابية.'
          : 'Le portail référence plus de 800 liens directs vers les domaines institutionnels .dz, banques et assureurs agréés en Algérie.',
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
  ]);

  return (
    <div className="space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQSchema(
              homeFaqs.map((f) => ({ question: f.question, answer: f.answer })),
              validLang
            )
          ),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-linear-to-b from-emerald-500/10 via-slate-50 to-white dark:from-emerald-950/20 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Unboxed Structural Eyebrow */}
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4 flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
            <span>{dict.hero.badge}</span>
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight max-w-4xl mx-auto leading-tight">
            {dict.hero.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {dict.hero.subtitle}
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              prefetch={false}
              href={`/${validLang}/sectors/`}
              className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/25 transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>{dict.hero.ctaExplore}</span>
              <NextArrow className="w-4 h-4" />
            </Link>

            <Link
              prefetch={false}
              href={`/${validLang}/pages/tools/`}
              className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-sm sm:text-base shadow-xs transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-emerald-600" />
              <span>{dict.hero.ctaTools}</span>
            </Link>

            <Link
              prefetch={false}
              href={`/${validLang}/sectors/sntf-schedule/`}
              className="w-full sm:w-auto justify-center px-5 py-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold text-sm sm:text-base transition-all flex items-center gap-2"
            >
              <Train className="w-4 h-4 text-emerald-600" />
              <span>{dict.nav.sntf}</span>
            </Link>
          </div>

          {/* Quick Statistics Banner */}
          <div className="mt-12 grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-start">
            {[
              {
                label: dict.hero.statsServices,
                icon: Building2,
                desc: validLang === 'ar' ? 'منصة وقطاع عمومي' : 'Portails publics officiels',
                href: `/${validLang}/sectors/`,
              },
              {
                label: dict.hero.statsBanksIns,
                icon: Landmark,
                desc: validLang === 'ar' ? 'مصارف وتأمينات معتمدة' : 'Banques & assureurs agréés',
                href: `/${validLang}/sectors/bank/`,
              },
              {
                label: dict.hero.statsTools,
                icon: Calculator,
                desc: validLang === 'ar' ? 'حاسبة ومحول مباشر' : 'Calculateurs hors-ligne',
                href: `/${validLang}/pages/tools/`,
              },
              {
                label: dict.hero.statsLinks,
                icon: Globe,
                desc: validLang === 'ar' ? 'نحو البوابات الوطنية' : 'Liens institutionnels directs',
                href: `/${validLang}/process/`,
              },
            ].map((stat, idx) => (
              <Link
              prefetch={false}
                key={idx}
                href={stat.href}
                className="p-3.5 sm:p-4 rounded-xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xs border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 shadow-2xs transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100">
                    {stat.label}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {stat.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Quick Summary & Newly Added Services Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <QuickSummaryBox
          lang={validLang}
          targetAudience={
            validLang === 'ar'
              ? 'المواطنون المقيمون بالجزائر، الطلبة، المهنيون، والجالية بالخارج'
              : 'Citoyens résidents, étudiants, professionnels et diaspora algérienne'
          }
          processingTime={
            validLang === 'ar'
              ? 'وصول فوري 24/7 إلى أكثر من 800 رابط ومنصة عمومية معتمدة'
              : 'Accès immédiat 24h/24 à plus de 800 liens institutionnels vérifiés'
          }
          fees={
            validLang === 'ar'
              ? 'توجيه مجاني بالكامل دون تسجيل أو اشتراك'
              : 'Orientation et outils 100 % gratuits sans création de compte'
          }
          channel={
            validLang === 'ar'
              ? `${sectorsList.length} قطاعا، ${toolsList.length} أداة، قطارات SNTF، والأدلة الإرشادية`
              : `${sectorsList.length} secteurs, ${toolsList.length} outils, réseau SNTF et guides`
          }
          keyRequirement={
            validLang === 'ar'
              ? 'روابط مباشرة نحو النطاقات الرسمية المنتهية بـ .dz و .gov.dz'
              : 'Redirection directe vers les portails officiels .dz et .gov.dz'
          }
        />

        {/* Newly Added & Directory Overview Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 min-w-0 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
                  {validLang === 'ar' ? 'أضيفت حديثا للبوابة' : 'Nouveautés & Services Phares'}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {validLang === 'ar'
                    ? 'أحدث الخدمات والمنصات المضافة مرتبة لسهولة الوصول'
                    : 'Derniers portails et modules ajoutés pour un accès rapide'}
                </p>
              </div>
              <Link
                prefetch={false}
                href={`/${validLang}/pages/statistics/`}
                className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                {validLang === 'ar' ? 'إحصائيات البوابة' : 'Statistiques complètes'}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: `/${validLang}/sectors/sntf-schedule/`,
                  title: validLang === 'ar' ? 'مواقيت سير قطارات الجزائر SNTF' : 'Horaires des trains SNTF',
                  sub: validLang === 'ar' ? 'جداول الخطوط الكبرى والضواحي والتعريفات' : 'Grandes lignes, banlieues & tarifs',
                },
                {
                  href: `/${validLang}/sectors/markabatidz/`,
                  title: validLang === 'ar' ? 'منصة "مركبتي" لفحص المركبات' : 'Inspection Automobile Markabati DZ',
                  sub: validLang === 'ar' ? 'حجز مواعيد المراقبة والمطابقة عن بعد' : 'Contrôle technique et prise de rendez-vous',
                },
                {
                  href: `/${validLang}/sectors/awlyaa-education/`,
                  title: validLang === 'ar' ? 'فضاء أولياء التلاميذ وبلاغات التربية' : 'Espace Awlyaa & Avis Éducation',
                  sub: validLang === 'ar' ? 'النتائج المدرسية، التحويلات والمنشورات' : 'Bulletins scolaires, transferts & circulaires',
                },
                {
                  href: `/${validLang}/pages/tools/`,
                  title: validLang === 'ar' ? 'مكتبة الأدوات الرقمية (Tools-DZ)' : 'Bibliothèque Outils (Tools-DZ)',
                  sub: validLang === 'ar' ? `${toolsList.length} حاسبة وأداة تفاعلية مجانية` : `${toolsList.length} calculateurs gratuits hors-ligne`,
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  prefetch={false}
                  href={item.href}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors"
                >
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{item.sub}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Clean HTML Summary Table for GEO */}
          <div className="lg:col-span-5 min-w-0 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <table className="w-full min-w-[340px] sm:min-w-0 text-xs text-start">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'قسم البوابة' : 'Rubrique'}</th>
                  <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'العدد' : 'Total'}</th>
                  <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'المسار' : 'Accès'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">{validLang === 'ar' ? 'القطاعات والوزارات' : 'Secteurs & Ministères'}</td>
                  <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">{sectorsList.length}</td>
                  <td className="p-3"><Link prefetch={false} href={`/${validLang}/sectors/`} className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold">{validLang === 'ar' ? 'استعراض' : 'Ouvrir'}</Link></td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">{validLang === 'ar' ? 'البنوك والتأمينات' : 'Banques & Assurances'}</td>
                  <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">{banksList.length + insuranceList.length}</td>
                  <td className="p-3"><Link prefetch={false} href={`/${validLang}/sectors/bank/`} className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold">{validLang === 'ar' ? 'استعراض' : 'Ouvrir'}</Link></td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">{validLang === 'ar' ? 'الأدوات التفاعلية' : 'Outils & Calculateurs'}</td>
                  <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">{toolsList.length}</td>
                  <td className="p-3"><Link prefetch={false} href={`/${validLang}/pages/tools/`} className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold">{validLang === 'ar' ? 'استعراض' : 'Ouvrir'}</Link></td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">{validLang === 'ar' ? 'الإجراءات والبلاغات' : 'Démarches & Avis'}</td>
                  <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">{proceduresList.length + noticesList.length}</td>
                  <td className="p-3"><Link prefetch={false} href={`/${validLang}/process/`} className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold">{validLang === 'ar' ? 'استعراض' : 'Ouvrir'}</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 1: Featured Sectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{validLang === 'ar' ? 'المنصات العمومية' : 'Plateformes Officielles'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
              {dict.sections.featuredSectors}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {dict.sections.featuredSectorsDesc}
            </p>
          </div>
          <Link
              prefetch={false}
            href={`/${validLang}/sectors/`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:gap-2.5 transition-all"
          >
            <span>{dict.sections.viewAll} ({sectorsList.length})</span>
            <NextArrow className="w-4 h-4" />
          </Link>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularSectors.map((sector) => (
            <Link
              prefetch={false}
              key={sector.slug}
              href={`/${validLang}/sectors/${sector.slug}/`}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="px-2.5 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                    {sector.acronym || 'DZ'}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                    {dict.categories[sector.category] || sector.category}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {sector.name[validLang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {sector.description[validLang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                <span>{dict.sections.readMore}</span>
                <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banks & Insurance Quick Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
              prefetch={false}
            href={`/${validLang}/sectors/bank/`}
            className="group p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-xs transition-all flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase">
                <Landmark className="w-4 h-4 shrink-0" />
                <span>{banksList.length} {validLang === 'ar' ? 'بنوك ومؤسسات مالية' : 'Banques Agréées'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                {dict.nav.banks}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {validLang === 'ar'
                  ? 'البنوك العمومية والخاصة والصيرفة الإسلامية: بريد الجزائر، القرض الشعبي، بنك التنمية المحلية، البركة، السلام، والبنوك الأجنبية.'
                  : 'Banques publiques, privées et finance islamique : BNA, BEA, CPA, CNEP, BDL, Al Baraka, Al Salam et services e-banking.'}
              </p>
            </div>
            <NextArrow className="w-5 h-5 text-emerald-600 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
              prefetch={false}
            href={`/${validLang}/sectors/assurance/`}
            className="group p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-xs transition-all flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase">
                <Shield className="w-4 h-4" />
                <span>{insuranceList.length} {validLang === 'ar' ? 'شركات تأمين معتمدة' : 'Assureurs Agréés'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                {dict.nav.insurance}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {validLang === 'ar'
                  ? 'الشركة الوطنية للتأمين SAA، كات CAAT، كار CAAR، التأمين التكافلي، وتأمين السيارات والسفر والكوارث الطبيعية.'
                  : 'SAA, CAAT, CAAR, Takaful, assurances automobile, habitation, CAT-NAT et déclaration de sinistres en ligne.'}
              </p>
            </div>
            <NextArrow className="w-5 h-5 text-emerald-600 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Section 2: Featured Administrative Procedures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-8 rounded-3xl bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                {validLang === 'ar' ? 'إجراءات استخراج الوثائق' : 'Démarches & Documents'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {dict.sections.featuredProcedures}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {dict.sections.featuredProceduresDesc}
              </p>
            </div>
            <Link
              prefetch={false}
              href={`/${validLang}/process/`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>{dict.sections.viewAll} ({proceduresList.length})</span>
              <NextArrow className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProcedures.map((proc) => (
              <Link
              prefetch={false}
                key={proc.slug}
                href={`/${validLang}/process/${proc.slug}/`}
                className="group p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-emerald-400">{proc.responsibleEntity[validLang]}</span>
                    <span>{proc.estimatedDuration[validLang]}</span>
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                    {proc.title[validLang]}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {proc.description[validLang]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span>{validLang === 'ar' ? 'خطوات الإجراء والملف المطلوب' : 'Étapes & Pièces requises'}</span>
                  <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Popular Interactive Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Calculator className="w-4 h-4" />
              <span>{validLang === 'ar' ? 'حاسبات ذكية فورية' : 'Calculateurs Intelligents'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
              {dict.sections.interactiveTools}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {dict.sections.interactiveToolsDesc}
            </p>
          </div>
          <Link
              prefetch={false}
            href={`/${validLang}/pages/tools/`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:gap-2.5 transition-all"
          >
            <span>{dict.sections.viewAll} ({toolsList.length})</span>
            <NextArrow className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularTools.map((tool) => (
            <Link
              prefetch={false}
              key={tool.slug}
              href={`/${validLang}/pages/tools/${tool.category}/${tool.slug}/`}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base group-hover:text-emerald-600 transition-colors">
                  {tool.name[validLang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {tool.description[validLang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                <span>{dict.sections.launchTool}</span>
                <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 4: SNTF Train Schedule Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-8 rounded-3xl bg-linear-to-r from-emerald-800 to-teal-900 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-start max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-200 uppercase tracking-wider">
              <Train className="w-4 h-4" />
              <span>
                {validLang === 'ar'
                  ? 'SNTF · دليل مواعيد ومحطات قطارات الجزائر'
                  : 'SNTF · Guide des Lignes & Gares d’Algérie'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              {dict.sections.trainSchedule}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              {dict.sections.trainScheduleDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              prefetch={false}
              href={`/${validLang}/sectors/sntf-schedule/`}
              className="px-6 py-3 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>{validLang === 'ar' ? 'استعراض مواعيد القطارات التفاعلية' : 'Explorer les Horaires & Gares'}</span>
              <NextArrow className="w-4 h-4" />
            </Link>
            <Link
              prefetch={false}
              href={`/${validLang}/sectors/sntf/`}
              className="px-5 py-3 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 text-white font-bold text-sm border border-emerald-400/40 transition-colors"
            >
              {validLang === 'ar' ? 'دليل مؤسسة SNTF' : 'Fiche SNTF'}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured National External Portals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Globe className="w-4 h-4" />
              <span>{validLang === 'ar' ? 'خدمات رقمية مرافقة' : 'Ressources Complémentaires'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
              {dict.sections.featuredPortals}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {dict.sections.featuredPortalsDesc}
            </p>
          </div>
          <Link
              prefetch={false}
            href={`/${validLang}/pages/guide/`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:gap-2.5 transition-all"
          >
            <Smartphone className="w-4 h-4" />
            <span>{dict.nav.guide}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeExternalServices.map((ext) => (
            <a
              key={ext.id}
              href={ext.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between gap-3"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1.5">
                  {ext.tag[validLang]}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-emerald-600 transition-colors">
                  {ext.title[validLang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {ext.summary[validLang]}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span>{dict.sections.openService}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Section 4B: Citizen Guides / Blog Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>{validLang === 'ar' ? 'أدلة تحريرية معمقة' : 'Dossiers Pratiques'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
              {validLang === 'ar' ? 'أدلة المواطن ومقالات الشرح والتحليل' : 'Guides Citoyens & Analyses'}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {validLang === 'ar' ? 'مقالات إرشادية معمقة حول أهم المنصات والخدمات الرقمية في الجزائر' : 'Dossiers de fond pour maîtriser les téléservices et démarches en Algérie'}
            </p>
          </div>
          <Link
              prefetch={false}
            href={`/${validLang}/blog/`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:gap-2.5 transition-all"
          >
            <span>{dict.sections.viewAll} ({blogArticles.length})</span>
            <NextArrow className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredArticles.map((article) => (
            <Link
              prefetch={false}
              key={article.slug}
              href={`/${validLang}/blog/${article.slug}/`}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg transition-all flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold">
                  <span className="text-emerald-700 dark:text-emerald-400">{article.category[validLang]}</span>
                  <span className="text-slate-400">
                    {article.readTimeMinutes} {validLang === 'ar' ? 'دقائق' : 'min'}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {article.title[validLang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {article.excerpt[validLang]}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span>{dict.sections.readMore}</span>
                <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 5: Video Tutorials & Education Notices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Tutorials Box */}
          <div className="min-w-0 bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <Video className="w-4 h-4" />
                  <span>{dict.sections.videoGuides}</span>
                </div>
                <Link
              prefetch={false} href={`/${validLang}/pages/video/`} className="text-xs font-semibold text-emerald-600 hover:underline">
                  {dict.sections.viewAll} ({videosList.length})
                </Link>
              </div>
              <div className="space-y-3">
                {videosList.slice(0, 3).map((v) => (
                  <Link
              prefetch={false}
                    key={v.slug}
                    href={`/${validLang}/pages/video/${v.slug}/`}
                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-16 h-12 rounded-lg bg-slate-200 dark:bg-slate-800 shrink-0 overflow-hidden relative flex items-center justify-center">
                      <Video className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-emerald-600">
                        {v.title[validLang]}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">{v.description[validLang]}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Education Notices Box */}
          <div className="min-w-0 bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <Bell className="w-4 h-4" />
                  <span>{dict.sections.educationAlerts}</span>
                </div>
                <Link
              prefetch={false} href={`/${validLang}/pages/education-notices/`} className="text-xs font-semibold text-emerald-600 hover:underline">
                  {dict.sections.viewAll} ({noticesList.length})
                </Link>
              </div>
              <div className="space-y-3">
                {noticesList.slice(0, 3).map((n) => (
                  <Link
              prefetch={false}
                    key={n.slug}
                    href={`/${validLang}/pages/education-notices/${n.slug}/`}
                    className="group block p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 mb-1">
                      <span className="font-semibold text-emerald-600">{n.category[validLang]}</span>
                      <span>{n.date}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 truncate">
                      {n.title[validLang]}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Rich FAQ Section (GEO Optimized) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {dict.common.faqTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
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
