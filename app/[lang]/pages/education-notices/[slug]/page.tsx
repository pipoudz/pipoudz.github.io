import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  Calendar,
  CalendarDays,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
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
import NoticeReaderClient from '@/components/NoticeReaderClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  ['ar', 'fr'].forEach((lang) => {
    noticesList.forEach((n) => {
      params.push({ lang: lang as 'ar' | 'fr', slug: n.slug });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const notice = noticesList.find((n) => n.slug === slug);

  if (!notice) {
    return constructMetadata({
      title: validLang === 'ar' ? 'الإعلان غير موجود' : 'Avis Introuvable',
      description: '',
      path: `pages/education-notices/${slug}`,
      lang: validLang,
    });
  }

  return constructMetadata({
    title:
      validLang === 'ar'
        ? `${notice.title.ar} - وزارة التربية الوطنية`
        : `${notice.title.fr} - Éducation Nationale`,
    description: notice.summary[validLang],
    path: `pages/education-notices/${slug}`,
    lang: validLang,
  });
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const NextArrow = validLang === 'ar' ? ArrowLeft : ArrowRight;

  const notice = noticesList.find((n) => n.slug === slug);
  if (!notice) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.education, url: `/${validLang}/pages/education-notices/` },
    { name: notice.title[validLang], url: `/${validLang}/pages/education-notices/${slug}/` },
  ]);

  const faqs =
    notice.faqs && notice.faqs.length > 0
      ? notice.faqs.map((f) => ({
          question: f.question[validLang],
          answer: f.answer[validLang],
        }))
      : [
          {
            question:
              validLang === 'ar'
                ? 'ما هي المنصة الرسمية لمتابعة هذا البلاغ التربوي؟'
                : 'Quelle plateforme officielle permet de suivre cet avis éducatif ?',
            answer:
              validLang === 'ar'
                ? 'تعلن وزارة التربية الوطنية كافة الترتيبات عبر فضاء الأولياء (awlyaa.education.dz) والبوابة الرسمية المرفقة في هذه الصفحة.'
                : 'Le Ministère de l’Éducation Nationale publie l’ensemble des modalités via l’espace parents Awlyaa et le portail officiel référencé.',
          },
          {
            question:
              validLang === 'ar'
                ? 'هل توجد رسوم مالية للاطلاع على البلاغات أو التقديم عبر فضاء الأولياء؟'
                : 'Y a-t-il des frais pour consulter les avis ou soumettre un dossier sur Awlyaa ?',
            answer: {
              ar: 'الخدمة مجانية بالكامل للطلبة والأولياء وفق الأطر النظامية لوزارة التربية الوطنية.',
              fr: 'La consultation et le dépôt de dossiers sur les plateformes ministérielles sont entièrement gratuits.',
            }[validLang],
          },
        ];

  const faqSchema = generateFAQSchema(faqs, validLang);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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
          { label: dict.nav.education, href: `/${validLang}/pages/education-notices/` },
          { label: notice.title[validLang] },
        ]}
      />

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              {notice.category[validLang]}
            </span>
            <span className="flex items-center gap-1 font-mono text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>{notice.date}</span>
            </span>
          </div>

          {notice.officialUrl && (
            <a
              href={notice.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm"
            >
              <span>{dict.common.officialWebsite}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {notice.title[validLang]}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          {notice.summary[validLang]}
        </p>
      </header>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'الأولياء، التلاميذ، والأساتذة'
            : 'Parents d’élèves, candidats et enseignants'
        }
        processingTime={notice.date}
        fees={
          validLang === 'ar'
            ? 'مجاني وفق التنظيم التربوي المعمول به'
            : 'Gratuit selon la réglementation scolaire'
        }
        channel={
          validLang === 'ar'
            ? 'فضاء الأولياء والمؤسسات التربوية'
            : 'Espace Awlyaa et établissements scolaires'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'حساب ولي الأمر أو رقم التسجيل المدرسي'
            : 'Compte parent Awlyaa ou numéro d’identification scolaire'
        }
        officialUrl={notice.officialUrl}
      />

      {/* Important Dates Schedule as Semantic HTML Table */}
      {notice.importantDates && notice.importantDates.length > 0 && (
        <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-emerald-600" />
            <span>
              {validLang === 'ar' ? 'الرزنامة والمواعيد المحددة' : 'Calendrier des Échéances'}
            </span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[360px] sm:min-w-0 text-xs sm:text-sm text-start">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-3 text-start font-bold">
                    {validLang === 'ar' ? 'المحطة أو الإجراء' : 'Étape ou Échéance'}
                  </th>
                  <th className="p-3 text-start font-bold">
                    {validLang === 'ar' ? 'التاريخ' : 'Date'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {notice.importantDates.map((d, i) => (
                  <tr key={i}>
                    <td className="p-3 font-semibold text-slate-800 dark:text-slate-200">
                      {d.label[validLang]}
                    </td>
                    <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                      {d.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Interactive Zoomable Circular Reader */}
      <NoticeReaderClient
        lang={validLang}
        title={notice.title[validLang]}
        category={notice.category[validLang]}
        date={notice.date}
        content={notice.content[validLang]}
        officialUrl={notice.officialUrl}
      />

      {/* FAQs */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
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
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross Links */}
      <div className="flex flex-wrap gap-3 pt-2 text-xs font-bold">
        <Link
          prefetch={false}
          href={`/${validLang}/pages/education-notices/`}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
        >
          <span>{validLang === 'ar' ? 'جميع بلاغات التربية' : 'Tous les communiqués'}</span>
          <NextArrow className="w-3.5 h-3.5" />
        </Link>
        <Link
          prefetch={false}
          href={`/${validLang}/sectors/awlyaa-education/`}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >
          <span>{validLang === 'ar' ? 'دليل فضاء الأولياء' : 'Guide Espace Awlyaa'}</span>
          <NextArrow className="w-3.5 h-3.5" />
        </Link>
        <Link
          prefetch={false}
          href={`/${validLang}/sectors/education/`}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
        >
          <span>{validLang === 'ar' ? 'قطاع التربية والتعليم' : 'Secteur Éducation'}</span>
          <NextArrow className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
