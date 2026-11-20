import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Bell,
  Calendar,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  ExternalLink,
  Compass,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
import { noticesList } from '@/lib/sectors-data';
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
        ? 'منشورات وبلاغات وزارة التربية الوطنية'
        : 'Communiqués & Circulaires du Ministère de l’Éducation Nationale',
    description:
      validLang === 'ar'
        ? 'البلاغات والمنشورات الرسمية لوزارة التربية الوطنية الجزائرية: التقويم البيداغوجي، نتائج مسابقات التوظيف، التحويلات عبر فضاء الأولياء، والدخول المدرسي 2026-2027.'
        : 'Suivi complet des communiqués du Ministère de l’Éducation Nationale : rentrée scolaire 2026-2027, calendrier pédagogique, concours et transferts Awlyaa.',
    path: 'pages/education-notices',
    lang: validLang,
  });
}

export default async function NoticesIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const NextArrow = validLang === 'ar' ? ArrowLeft : ArrowRight;

  const centralNotice = noticesList.find((n) => n.slug === 'index');
  const individualNotices = noticesList.filter((n) => n.slug !== 'index');

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.education, url: `/${validLang}/pages/education-notices/` },
  ]);

  const faqs = [
    {
      question:
        validLang === 'ar'
          ? 'كيف أتابع أحدث بلاغات وزارة التربية الوطنية للعام الدراسي 2026-2027؟'
          : 'Comment suivre les derniers communiqués du Ministère de l’Éducation Nationale ?',
      answer:
        validLang === 'ar'
          ? 'يجمع هذا القسم كافة البيانات الصادرة عن الوزارة مع أدوات قراءة مكبرة، مواعيد مضبوطة في جداول واضحة، وروابط مباشرة نحو البوابة الرسمية education.gov.dz وفضاء الأولياء.'
          : 'Cette rubrique regroupe les notes ministérielles avec lecteur zoomable, échéances structurées et accès directs vers education.gov.dz et Awlyaa.',
    },
    {
      question:
        validLang === 'ar'
          ? 'أين تُودع طلبات تحويل التلاميذ والتسجيل في الأقسام التحضيرية؟'
          : 'Où déposer les demandes de transfert scolaire ou d’inscription en préparatoire ?',
      answer:
        validLang === 'ar'
          ? 'تُعالج جميع طلبات التحويل والتسجيل الاستثنائي إلكترونيا عبر حساب الولي في فضاء الأولياء (awlyaa.education.dz).'
          : 'Les demandes de transfert et de dérogation s’effectuent exclusivement en ligne depuis le compte parent sur awlyaa.education.dz.',
    },
    {
      question:
        validLang === 'ar'
          ? 'ما هي الخدمات المكملة المرتبطة بالمسار التربوي والجامعي؟'
          : 'Quels services complémentaires accompagnent le parcours scolaire et universitaire ?',
      answer:
        validLang === 'ar'
          ? 'يوفر الدليل روابط سريعة لقطاع الخدمات الجامعية (PROGRES)، وثائق الحالة المدنية بوزارة الداخلية، وخدمات البطاقة الذهبية لبريد الجزائر.'
          : 'Retrouvez directement les portails PROGRES pour l’université, l’état civil en ligne (Intérieur) et Algérie Poste (Edahabia).',
    },
  ];

  const faqSchema = generateFAQSchema(faqs, validLang);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        lang={validLang}
        items={[{ label: dict.nav.education, href: `/${validLang}/pages/education-notices/` }]}
      />

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Bell className="w-8 h-8 text-emerald-600 shrink-0" />
          <span>
            {validLang === 'ar'
              ? 'منشورات وبلاغات وزارة التربية الوطنية'
              : 'Communiqués & Circulaires — Éducation Nationale'}
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? 'متابعة دقيقة ومحدثة لبيانات ومناشير وزارة التربية الوطنية الجزائرية: الرزنامة البيداغوجية للمراحل الثلاث، مسابقات التوظيف، التحويلات المدرسية، وإجراءات التصديق.'
            : 'Suivi structuré des communiqués officiels du Ministère de l’Éducation Nationale : calendrier des trois cycles, concours de recrutement, transferts et authentifications.'}
        </p>
      </header>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'أولياء التلاميذ، المتمدرسون، الأساتذة، والمترشحون لمسابقات التربية'
            : 'Parents d’élèves, scolaires, enseignants et candidats aux concours'
        }
        processingTime={
          validLang === 'ar'
            ? `أرشيف محدث يضم ${individualNotices.length} بلاغات رسمية للموسم 2026-2027`
            : `Archive actualisée de ${individualNotices.length} communiqués officiels 2026-2027`
        }
        fees={
          validLang === 'ar'
            ? 'اطلاع مجاني بالكامل مع أداة قراءة وتكبير النصوص'
            : 'Consultation gratuite avec lecteur zoomable intégré'
        }
        channel={
          validLang === 'ar'
            ? 'education.gov.dz وفضاء الأولياء awlyaa.education.dz'
            : 'Portail education.gov.dz et Espace Awlyaa'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'حساب ولي الأمر أو رقم التسجيل في الامتحانات والمسابقات'
            : 'Compte parent Awlyaa ou identifiant candidat'
        }
        officialUrl="https://www.education.gov.dz/"
      />

      {centralNotice && (
        <section className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              {validLang === 'ar' ? 'الدليل المركزي للبلاغات' : 'Synthèse Ministérielle'}
            </span>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100">
              {centralNotice.title[validLang]}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {centralNotice.summary[validLang]}
            </p>
          </div>
          <Link
            prefetch={false}
            href={`/${validLang}/pages/education-notices/index/`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shrink-0 transition-colors"
          >
            <span>{validLang === 'ar' ? 'فتح الدليل المركزي' : 'Lire la synthèse'}</span>
            <NextArrow className="w-4 h-4" />
          </Link>
        </section>
      )}

      {/* Notices Cards Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 dark:text-slate-100">
          {validLang === 'ar' ? 'بيانات صحفية ومنشورات رسمية' : 'Communiqués & Notes Officielles'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {individualNotices.map((notice) => (
            <Link
              prefetch={false}
              key={notice.slug}
              href={`/${validLang}/pages/education-notices/${notice.slug}/`}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40">
                    {notice.category[validLang]}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{notice.date}</span>
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {notice.title[validLang]}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {notice.summary[validLang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                <span>{dict.sections.viewNotice}</span>
                <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Chronological HTML Reference Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {validLang === 'ar'
            ? 'جدول المتابعة الزمنية للبلاغات المدرسية'
            : 'Tableau Chronologique des Communiqués Scolaires'}
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <table className="w-full text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'التاريخ' : 'Date'}</th>
                <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'التصنيف' : 'Catégorie'}</th>
                <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'موضوع البلاغ' : 'Objet du communiqué'}</th>
                <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'القراءة' : 'Lecture'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {individualNotices.map((notice) => (
                <tr key={notice.slug} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                    {notice.date}
                  </td>
                  <td className="p-3 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                    {notice.category[validLang]}
                  </td>
                  <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">
                    {notice.title[validLang]}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <Link
                      prefetch={false}
                      href={`/${validLang}/pages/education-notices/${notice.slug}/`}
                      className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline"
                    >
                      {validLang === 'ar' ? 'قراءة البلاغ' : 'Consulter'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Services Cross-links ("خدمات قد تحتاجها أيضا") */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Compass className="w-5 h-5 text-emerald-600" />
          <span>{validLang === 'ar' ? 'خدمات قد تحتاجها أيضا' : 'Services Complémentaires Utiles'}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              href: `/${validLang}/sectors/progres.mesrs/`,
              title: validLang === 'ar' ? 'الخدمات الجامعية (PROGRES)' : 'Services Universitaires (PROGRES)',
              desc:
                validLang === 'ar'
                  ? 'خدمات التسجيل الجامعي، التكوين، الإيواء ومتابعة المسار الدراسي.'
                  : 'Inscriptions universitaires, hébergement, bourses et suivi du cursus.',
            },
            {
              href: `/${validLang}/sectors/interieur/`,
              title: validLang === 'ar' ? 'الحالة المدنية والإدارة' : 'État Civil & Administration',
              desc:
                validLang === 'ar'
                  ? 'استخراج وثائق الحالة المدنية والخدمات الإدارية إلكترونيا.'
                  : 'Actes d’état civil, pièce d’identité biométrique et téléservices communaux.',
            },
            {
              href: `/${validLang}/sectors/poste/`,
              title: validLang === 'ar' ? 'بريد الجزائر (CCP / البطاقة الذهبية)' : 'Algérie Poste (CCP & Edahabia)',
              desc:
                validLang === 'ar'
                  ? 'البطاقة الذهبية وحساب CCP وتسديد حقوق التسجيل والامتحانات.'
                  : 'Carte Edahabia, compte CCP et paiement électronique des droits d’examen.',
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              prefetch={false}
              href={item.href}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all space-y-2"
            >
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center justify-between gap-2">
                <span>{item.title}</span>
                <NextArrow className="w-4 h-4 text-emerald-600 shrink-0" />
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        <div className="pt-2">
          <a
            href="https://www.education.gov.dz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            <span>{validLang === 'ar' ? 'البوابة الرسمية لوزارة التربية الوطنية' : 'Portail officiel education.gov.dz'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{faq.question}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
