import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  ExternalLink,
  CheckCircle2,
  FileCheck,
  HelpCircle,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateGovernmentServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';
import { sectorsList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import RichGuideSections from '@/components/RichGuideSections';
import SntfRailwayGuide from '@/components/SntfRailwayGuide';
import SonalgazBillGuide from '@/components/SonalgazBillGuide';
import { getSectorRichGuide } from '@/lib/data/guides-sectors';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  ['ar', 'fr'].forEach((lang) => {
    sectorsList.forEach((sector) => {
      params.push({ lang: lang as 'ar' | 'fr', slug: sector.slug });
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
  const sector = sectorsList.find((s) => s.slug === slug);

  if (!sector) {
    return constructMetadata({
      title: validLang === 'ar' ? 'القطاع غير موجود' : 'Secteur Introuvable',
      description: '',
      path: `sectors/${slug}`,
      lang: validLang,
    });
  }

  return constructMetadata({
    title:
      validLang === 'ar'
        ? `${sector.name.ar} (${sector.acronym || 'DZ'}) - المنصة والخدمات`
        : `${sector.name.fr} (${sector.acronym || 'DZ'}) - Services Officiels`,
    description: sector.description[validLang],
    path: `sectors/${slug}`,
    lang: validLang,
  });
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const sector = sectorsList.find((s) => s.slug === slug);
  if (!sector) {
    notFound();
  }

  const govServiceSchema = generateGovernmentServiceSchema({
    name: sector.name[validLang],
    description: sector.description[validLang],
    provider: sector.ministry ? sector.ministry[validLang] : sector.name[validLang],
    url: sector.officialUrl,
    lang: validLang,
  });

  const richGuide = getSectorRichGuide(sector);
  const mergedFaqs = [...sector.faqs, ...richGuide.extraFaqs];

  const faqSchema = generateFAQSchema(
    mergedFaqs.map((f) => ({
      question: f.question[validLang],
      answer: f.answer[validLang],
    })),
    validLang
  );

  const showSntfGuide = slug === 'sntf' || slug === 'sntf-trains' || slug === 'sntf-trip';
  const showSonalgazGuide = slug === 'sonalgaz-bill-guide';
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.sectors, url: `/${validLang}/sectors/` },
    { name: sector.name[validLang], url: `/${validLang}/sectors/${slug}/` },
  ]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(govServiceSchema) }}
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
          { label: dict.nav.sectors, href: `/${validLang}/sectors/` },
          { label: sector.name[validLang] },
        ]}
      />

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-black text-base shrink-0">
              {sector.acronym || 'DZ'}
            </span>
            <div>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                {sector.ministry ? sector.ministry[validLang] : dict.categories[sector.category]}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 leading-tight">
                {sector.name[validLang]}
              </h1>
            </div>
          </div>

          <a
            href={sector.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <span>{dict.common.officialWebsite}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {sector.description[validLang]}
        </p>
      </div>

      {/* GEO Quick Summary Box */}
      <QuickSummaryBox
        lang={validLang}
        targetAudience={sector.quickSummary.targetAudience[validLang]}
        processingTime={sector.quickSummary.processingTime[validLang]}
        fees={sector.quickSummary.fees[validLang]}
        channel={sector.quickSummary.channel[validLang]}
        keyRequirement={sector.quickSummary.keyRequirement[validLang]}
        officialUrl={sector.portalUrl || sector.officialUrl}
      />

      {/* Interactive SNTF Railway Explorer for SNTF pages */}
      {showSntfGuide && (
        <section className="space-y-3">
          <SntfRailwayGuide lang={validLang} />
        </section>
      )}

      {/* Interactive Sonalgaz Bill Guide */}
      {showSonalgazGuide && (
        <section className="space-y-3">
          <SonalgazBillGuide lang={validLang} />
        </section>
      )}

      {/* Rich Human-Written Sector Guide */}
      <RichGuideSections lang={validLang} guide={richGuide} entityName={sector.name[validLang]} />

      {/* E-Services & Official Links Section */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? `الخدمات الرقمية والروابط الرسمية (${sector.services.length})`
              : `Téléservices & Liens Officiels (${sector.services.length})`}
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sector.services.map((srv) => {
            const targetHref = srv.url || sector.officialUrl;
            return (
              <a
                key={srv.id}
                href={targetHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between gap-3"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-emerald-600 transition-colors">
                      {srv.title[validLang]}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {srv.description[validLang]}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-emerald-700 dark:text-emerald-400">
                    {dict.sections.openService}
                  </span>
                  <span className="text-slate-400 font-mono truncate max-w-[160px]" dir="ltr">
                    {targetHref.replace(/^https?:\/\//, '').split('/')[0]}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Semantic Requirements & Conditions Table */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <FileCheck className="w-5 h-5 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? 'شروط الاستفادة والوثائق الأساسية'
              : "Conditions d'Éligibilité & Dossier Requis"}
          </span>
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold w-1/3">
                  {dict.common.tableHeaders.requirement}
                </th>
                <th className="p-3 text-start font-bold">
                  {dict.common.tableHeaders.detail}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {sector.requirements.map((req, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                  <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">
                    {req.label[validLang]}
                  </td>
                  <td className="p-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {req.value[validLang]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Rich FAQ Section */}
      {mergedFaqs.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>{dict.common.faqTitle}</span>
          </h2>

          <div className="space-y-3">
            {mergedFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
              >
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-1.5">
                  {faq.question[validLang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer[validLang]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
