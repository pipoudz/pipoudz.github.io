import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  Video,
  Play,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Compass,
  HelpCircle,
  FileText,
  Landmark,
  Wrench,
  TrainFront,
  Bell,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { videosList } from '@/lib/sectors-data';
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
        ? 'فيديوهات تعليمية للخدمات الرقمية الجزائرية'
        : 'Vidéothèque & Tutoriels des Services Numériques Algériens',
    description:
      validLang === 'ar'
        ? 'مكتبة فيديوهات تعليمية تشرح التسجيل واستعمال المنصات الرقمية في الجزائر: الدخول التكويني 2026، فضاء الأولياء، منصة محطتي، مركبتي DZ، الأبوستيل، التصريح بالضياع، وبرنامج جيل لجيل 777.'
        : 'Vidéothèque officielle expliquant pas à pas l’inscription sur Takwin 2026, Awlyaa, E-Mahata Naftal, Markabati DZ, e-Apostille, e-Déclaration DGSN et le programme Jil 777.',
    path: 'pages/video',
    lang: validLang,
  });
}

export default async function VideoIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const NextArrow = validLang === 'ar' ? ArrowLeft : ArrowRight;

  const featuredVideo =
    videosList.find((v) => v.slug === 'takwin-registration') || videosList[0];

  const faqs = [
    {
      question:
        validLang === 'ar'
          ? 'ماذا تضم مكتبة الفيديوهات التعليمية للبوابة الجزائرية؟'
          : 'Que contient la vidéothèque des services numériques algériens ?',
      answer:
        validLang === 'ar'
          ? 'تضم شروحات مرئية رسمية لطريقة التسجيل في أبرز المنصات الوطنية مثل الدخول التكويني 2026، فضاء الأولياء، محطتي نفطال، مركبتي DZ، الأبوستيل الإلكتروني، التصريح بضياع الوثائق، الدرون MDN، والأشغال العمومية.'
          : 'Elle regroupe des tutoriels officiels pas à pas pour Takwin 2026, Awlyaa, E-Mahata Naftal, Markabati DZ, e-Apostille, e-Déclaration DGSN, CNSAPB Dronet et MTPIB.',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف أنتقل من مشاهدة الفيديو إلى رابط المنصة الرسمية أو الدليل المكتوب؟'
          : 'Comment accéder au portail officiel ou au guide écrit depuis chaque vidéo ?',
      answer:
        validLang === 'ar'
          ? 'تحتوي كل صفحة مشاهدة على الفيديو المدمج، رابط المنصة الحكومية الرسمية في الأعلى، قائمة الخطوات الأساسية، وبطاقة انتقال مباشر إلى دليل الخدمة والشروط المطلوبة.'
          : 'Chaque fiche vidéo intègre le lecteur, le lien officiel vers le téléservice public, les points clés et un accès direct à la fiche démarche complète.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل جميع الشروحات والروابط في صفحة الفيديوهات مجانية ومحدثة لموسم 2026؟'
          : 'Les guides vidéo et liens associés sont-ils gratuits et actualisés pour 2026 ?',
      answer:
        validLang === 'ar'
          ? 'نعم، كافة الفيديوهات التعليمية والروابط الرسمية مفتوحة مجانا للمواطنين ومحدثة وفق البوابات المعتمدة.'
          : 'Oui, l’ensemble des tutoriels et liens vers les portails officiels sont gratuits et actualisés.',
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.videos, url: `/${validLang}/pages/video/` },
  ]);

  const faqSchema = generateFAQSchema(faqs, validLang);

  const relatedPortals = [
    {
      href: `/${validLang}/sectors/`,
      icon: Compass,
      title:
        validLang === 'ar'
          ? 'دليل القطاعات والوزارات (67 مصلحة)'
          : 'Annuaire des Ministères & Secteurs (67)',
      desc:
        validLang === 'ar'
          ? 'استعراض كافة البوابات والمنصات الرقمية الرسمية مصنفة حسب القطاعات.'
          : 'Tous les portails publics officiels classés par ministère et domaine.',
    },
    {
      href: `/${validLang}/process/`,
      icon: FileText,
      title:
        validLang === 'ar'
          ? 'دليل المعاملات والإجراءات الإدارية'
          : 'Guide des Démarches Administratives',
      desc:
        validLang === 'ar'
          ? 'خطوات استخراج الوثائق، المواعيد، والملفات المطلوبة خطوة بخطوة.'
          : 'Dossiers requis, étapes détaillées, délais et coûts des démarches.',
    },
    {
      href: `/${validLang}/sectors/banks/`,
      icon: Landmark,
      title:
        validLang === 'ar'
          ? 'البنوك والمؤسسات المالية والتأمينات'
          : 'Banques Algériennes & Assurances',
      desc:
        validLang === 'ar'
          ? 'دليل الـ 18 بنكا والـ 12 شركة تأمين وخدمات الدفع الإلكتروني.'
          : 'Guide des 18 banques et 12 assureurs avec liens e-banking.',
    },
    {
      href: `/${validLang}/pages/tools/`,
      icon: Wrench,
      title:
        validLang === 'ar'
          ? 'الأدوات والحاسبات الذكية المجانية'
          : 'Outils & Calculateurs Pratiques',
      desc:
        validLang === 'ar'
          ? 'حاسبة الراتب IRG، فاتورة سونلغاز، تفقيط المبالغ، وضغط ملفات PDF.'
          : 'Simulateur salaire IRG, facture Sonelgaz, chiffrement et PDF.',
    },
    {
      href: `/${validLang}/sectors/sntf-trains/`,
      icon: TrainFront,
      title:
        validLang === 'ar'
          ? 'مواقيت قطارات SNTF التفاعلية'
          : 'Horaires Interactifs des Trains SNTF',
      desc:
        validLang === 'ar'
          ? 'ابحث عن رحلات القطارات الوطنية والضواحي عبر محطات الجزائر.'
          : 'Recherchez vos trajets ferroviaires par gare de départ et d’arrivée.',
    },
    {
      href: `/${validLang}/pages/education-notices/`,
      icon: Bell,
      title:
        validLang === 'ar'
          ? 'بلاغات وإعلانات وزارة التربية الوطنية'
          : 'Communiqués de l’Éducation Nationale',
      desc:
        validLang === 'ar'
          ? 'متابعة الرزنامات المدرسية، التحويلات عبر فضاء الأولياء، والمسابقات.'
          : 'Suivi du calendrier scolaire, transferts Awlyaa et concours.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
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
        items={[{ label: dict.nav.videos, href: `/${validLang}/pages/video/` }]}
      />

      {/* Page Intro */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Video className="w-8 h-8 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? 'فيديوهات تعليمية للخدمات الرقمية الجزائرية'
              : 'Vidéothèque des Services Numériques'}
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? 'شروحات مختارة تساعدك على فهم خطوات التسجيل واستعمال عدد من المنصات الرقمية الرسمية. افتح صفحة المشاهدة الخاصة بالفيديو ثم انتقل إلى صفحة الخدمة لمراجعة الروابط والتفاصيل.'
            : 'Tutoriels sélectionnés pour vous aider à comprendre pas à pas l’inscription et l’usage des plateformes publiques algériennes. Ouvrez la fiche vidéo puis accédez au guide complet du service.'}
        </p>
      </div>

      {/* GEO Quick Summary */}
      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'المواطنون، الأولياء، الطلبة، والمتربصون والمهنيون'
            : 'Citoyens, parents d’élèves, étudiants et professionnels'
        }
        processingTime={
          validLang === 'ar'
            ? `${videosList.length} شروحات مرئية فورية (2 إلى 4 دقائق للفيديو)`
            : `${videosList.length} tutoriels vidéo (2 à 4 min par guide)`
        }
        fees={validLang === 'ar' ? 'مشاهدة وإرشاد مجاني بالكامل' : 'Accès 100 % gratuit'}
        channel={
          validLang === 'ar'
            ? 'فيديوهات مضمنة + روابط مباشرة للبوابات الحكومية'
            : 'Vidéos intégrées + liens directs vers les portails officiels'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'اختيار المنصة ومتابعة الخطوات المرفقة بدليل الوثائق'
            : 'Sélectionnez un sujet pour suivre les étapes illustrées'
        }
        officialUrl={`/${validLang}/process/`}
      />

      {/* Featured Video Spotlight (Takwin 2026) */}
      {featuredVideo && (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>
                {validLang === 'ar'
                  ? 'شرح الدخول التكويني 2026'
                  : 'À la Une : Rentrée Formation Professionnelle 2026'}
              </span>
            </h2>
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              {validLang === 'ar'
                ? 'مرتبط بصفحة قطاع التكوين والتعليم المهنيين'
                : 'Lié au Ministère de la Formation Professionnelle'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 items-center">
            <Link
              href={`/${validLang}/pages/video/${featuredVideo.slug}/`}
              className="lg:col-span-5 relative aspect-video rounded-xl overflow-hidden bg-slate-900 group shadow-md"
            >
              <Image
                src={featuredVideo.thumbnailUrl}
                alt={featuredVideo.title[validLang]}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-85"
              />
              <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ms-0.5" />
                </div>
              </div>
              {featuredVideo.duration && (
                <span className="absolute bottom-2 end-2 px-2 py-0.5 rounded-md bg-slate-950/85 text-white text-[11px] font-mono font-bold">
                  {featuredVideo.duration}
                </span>
              )}
            </Link>

            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                {featuredVideo.category[validLang]}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
                {featuredVideo.title[validLang]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {featuredVideo.description[validLang]}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={`/${validLang}/pages/video/${featuredVideo.slug}/`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{dict.sections.watchVideo}</span>
                </Link>
                <Link
                  href={`/${validLang}/sectors/mfp.gov/`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm hover:border-emerald-500"
                >
                  <span>
                    {validLang === 'ar'
                      ? 'صفحة قطاع التكوين المهني'
                      : 'Fiche Ministère Takwin'}
                  </span>
                  <NextArrow className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Educational Videos */}
      <section className="space-y-5">
        <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar' ? 'كل الفيديوهات التعليمية' : 'Tous les Tutoriels Vidéo'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {validLang === 'ar'
              ? 'اختر موضوعا للانتقال إلى صفحة المشاهدة والفيديو المضمن والملف المطلوب.'
              : 'Sélectionnez une thématique pour accéder au lecteur vidéo intégré et à la fiche démarche.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosList.map((vid) => (
            <Link
              key={vid.slug}
              href={`/${validLang}/pages/video/${vid.slug}/`}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video bg-slate-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src={vid.thumbnailUrl}
                    alt={vid.title[validLang]}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ms-0.5" />
                    </div>
                  </div>
                  {vid.duration && (
                    <span className="absolute bottom-2 end-2 px-2 py-0.5 rounded-md bg-slate-950/80 text-white text-[11px] font-mono font-bold">
                      {vid.duration}
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    {vid.category[validLang]}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {vid.title[validLang]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {vid.description[validLang]}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                  <span>{dict.sections.watchVideo}</span>
                  <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="space-y-4">
        <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar' ? 'روابط مفيدة' : 'Liens & Rubriques Utiles'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {validLang === 'ar'
              ? 'انتقل من الشرح المرئي إلى الخدمات والبيانات المرتبطة في البوابة.'
              : 'Passez directement des tutoriels vidéo aux services et fiches détaillées du portail.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedPortals.map((item) => {
            const IconComp = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 transition-all flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                {f.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
