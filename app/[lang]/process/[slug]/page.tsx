import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  FileText,
  ExternalLink,
  CheckCircle2,
  Clock,
  Coins,
  Building,
  HelpCircle,
  FileCheck,
  ListOrdered,
  Video,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateHowToSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { proceduresList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import RichGuideSections from '@/components/RichGuideSections';
import { getProcedureRichGuide } from '@/lib/data/guides-tools';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  ['ar', 'fr'].forEach((lang) => {
    proceduresList.forEach((p) => {
      params.push({ lang: lang as 'ar' | 'fr', slug: p.slug });
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
  const proc = proceduresList.find((p) => p.slug === slug);

  if (!proc) {
    return constructMetadata({ title: 'Procedure Not Found', description: '', path: `process/${slug}`, lang: validLang });
  }

  return constructMetadata({
    title:
      validLang === 'ar'
        ? `${proc.title.ar} - الخطوات والملف المطلوب`
        : `${proc.title.fr} - Étapes & Dossier Requis`,
    description: proc.description[validLang],
    path: `process/${slug}`,
    lang: validLang,
  });
}

export default async function ProcedureDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const proc = proceduresList.find((p) => p.slug === slug);
  if (!proc) notFound();

  const howToSchema = generateHowToSchema({
    name: proc.title[validLang],
    description: proc.description[validLang],
    steps: proc.steps.map((s) => ({
      stepNumber: s.stepNumber,
      title: s.title[validLang],
      detail: s.detail[validLang],
    })),
    lang: validLang,
  });

  const richGuide = getProcedureRichGuide(proc);
  const mergedFaqs = [...proc.faqs, ...richGuide.extraFaqs];

  const faqSchema = generateFAQSchema(
    mergedFaqs.map((f) => ({
      question: f.question[validLang],
      answer: f.answer[validLang],
    })),
    validLang
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.procedures, url: `/${validLang}/process/` },
    { name: proc.title[validLang], url: `/${validLang}/process/${slug}/` },
  ]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        lang={validLang}
        items={[
          { label: dict.nav.procedures, href: `/${validLang}/process/` },
          { label: proc.title[validLang] },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {proc.responsibleEntity[validLang]}
          </span>
          <a
            href={proc.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm"
          >
            <span>{dict.common.officialWebsite}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {proc.title[validLang]}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {proc.description[validLang]}
        </p>
      </div>

      {/* Quick Summary Box */}
      <QuickSummaryBox
        lang={validLang}
        targetAudience={proc.targetAudience?.[validLang] || (validLang === 'ar' ? 'المواطنون الجزائريون والأجانب المقيمون' : 'Citoyens algériens et résidents')}
        processingTime={proc.estimatedDuration[validLang]}
        fees={proc.cost[validLang]}
        channel={proc.channel?.[validLang] || (validLang === 'ar' ? 'البوابة الإلكترونية المعتمدة' : 'Téléprocédure en ligne')}
        keyRequirement={proc.keyRequirement?.[validLang] || (validLang === 'ar' ? 'بطاقة التعريف الوطنية ورقم التعريف NIN' : 'Pièce biométrique et numéro NIN')}
        officialUrl={proc.officialLink}
      />

      {/* Embedded Official Tutorial Video */}
      {proc.videoEmbedUrl && (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Video className="w-5 h-5 text-emerald-600" />
              <span>{validLang === 'ar' ? 'الشرح التوضيحي بالفيديو' : 'Tutoriel Vidéo Explicatif'}</span>
            </h2>
            {proc.videoWatchUrl && (
              <a
                href={proc.videoWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <span>{validLang === 'ar' ? 'مشاهدة على يوتيوب' : 'Regarder sur YouTube'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-lg">
            <iframe
              src={proc.videoEmbedUrl}
              title={proc.title[validLang]}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </section>
      )}

      {/* Rich Human-Written Intro, Eligibility & Troubleshooting */}
      <RichGuideSections lang={validLang} guide={richGuide} entityName={proc.responsibleEntity[validLang]} includeSteps={false} />

      {/* Step by Step Guide (GEO semantic steps) */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <ListOrdered className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.stepsTitle}</span>
        </h2>

        <div className="space-y-4">
          {proc.steps.map((st) => (
            <div
              key={st.stepNumber}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                {st.stepNumber}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                  {st.title[validLang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {st.detail[validLang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Required Table */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <FileCheck className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.documentsTitle}</span>
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold">{dict.common.tableHeaders.item}</th>
                <th className="p-3 text-center font-bold w-32">{dict.common.tableHeaders.condition}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {proc.documentsRequired.map((doc, idx) => (
                <tr key={idx}>
                  <td className="p-3 font-medium text-slate-900 dark:text-slate-100">
                    {doc.name[validLang]}
                  </td>
                  <td className="p-3 text-center">
                    {doc.isMandatory ? (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        {validLang === 'ar' ? 'إجباري' : 'Obligatoire'}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {validLang === 'ar' ? 'اختياري' : 'Facultatif'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      {mergedFaqs.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>{dict.common.faqTitle}</span>
          </h2>
          <div className="space-y-3">
            {mergedFaqs.map((f, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{f.question[validLang]}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{f.answer[validLang]}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
