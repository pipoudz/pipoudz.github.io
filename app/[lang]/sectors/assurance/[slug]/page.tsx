import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Shield, ExternalLink, CheckCircle2, PhoneCall, HelpCircle, MapPin, FileCheck } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateFAQSchema, generateGovernmentServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { insuranceList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import RichGuideSections from '@/components/RichGuideSections';
import { getInsuranceRichGuide } from '@/lib/data/guides-banks-insurance';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  ['ar', 'fr'].forEach((lang) => {
    insuranceList.forEach((ins) => {
      params.push({ lang: lang as 'ar' | 'fr', slug: ins.slug });
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
  const ins = insuranceList.find((i) => i.slug === slug);

  if (!ins) {
    return constructMetadata({
      title: validLang === 'ar' ? 'شركة التأمين غير موجودة' : 'Assureur Introuvable',
      description: '',
      path: `sectors/assurance/${slug}`,
      lang: validLang,
    });
  }

  return constructMetadata({
    title:
      validLang === 'ar'
        ? `${ins.name.ar} (${ins.acronym}) - عروض التأمين والتعويض`
        : `${ins.name.fr} (${ins.acronym}) - Assurances & Déclaration de Sinistres`,
    description: ins.description[validLang],
    path: `sectors/assurance/${slug}`,
    lang: validLang,
  });
}

export default async function InsuranceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const ins = insuranceList.find((i) => i.slug === slug);
  if (!ins) notFound();

  const govSchema = generateGovernmentServiceSchema({
    name: ins.name[validLang],
    description: ins.description[validLang],
    provider: ins.name[validLang],
    url: ins.website,
    lang: validLang,
  });

  const richGuide = getInsuranceRichGuide(ins);
  const mergedFaqs = [...ins.faqs, ...richGuide.extraFaqs];

  const faqSchema = generateFAQSchema(
    mergedFaqs.map((f) => ({
      question: f.question[validLang],
      answer: f.answer[validLang],
    })),
    validLang
  );

  const getTypeLabel = (type: string) => {
    if (type === 'takaful') return validLang === 'ar' ? 'تأمين تكافلي إسلامي' : 'Assurance Takaful';
    if (type === 'public') return validLang === 'ar' ? 'شركة وطنية عمومية' : 'Compagnie Publique';
    return validLang === 'ar' ? 'شركة خاصة' : 'Compagnie Privée';
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.insurance, url: `/${validLang}/sectors/assurance/` },
    { name: ins.name[validLang], url: `/${validLang}/sectors/assurance/${slug}/` },
  ]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(govSchema) }}
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
          { label: dict.nav.insurance, href: `/${validLang}/sectors/assurance/` },
          { label: ins.name[validLang] },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-3 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black text-base sm:text-lg flex items-center justify-center shrink-0">
              {ins.acronym}
            </span>
            <div className="min-w-0">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                {getTypeLabel(ins.type)}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                {ins.name[validLang]}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {ins.portalUrl && (
              <a
                href={ins.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm"
              >
                <span>{validLang === 'ar' ? 'فضاء الزبون' : 'Espace Client'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={ins.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm flex items-center gap-1.5"
            >
              <span>{dict.common.officialWebsite}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {ins.description[validLang]}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">{ins.headquarters[validLang]}</span>
          </div>
          {ins.emergencyNumber && (
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {validLang === 'ar' ? 'رقم النجدة والمساعدة:' : 'Assistance & Sinistres :'}{' '}
                <strong className="font-mono">{ins.emergencyNumber}</strong>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* GEO Quick Summary Box */}
      <QuickSummaryBox
        lang={validLang}
        targetAudience={validLang === 'ar' ? 'أصحاب المركبات، السكنات، المسافرون، والمؤسسات' : 'Automobilistes, particuliers, voyageurs et entreprises'}
        processingTime={ins.quickSummary.eDeclaration[validLang]}
        fees={validLang === 'ar' ? 'تسعيرة قانونية موحدة للضمان الإجباري وعروض اختيارية' : 'Tarification réglementée RC Auto et formules à la carte'}
        channel={validLang === 'ar' ? 'الاكتتاب الإلكتروني وشبكة الوكالات' : 'Souscription en ligne et réseau d’agences'}
        keyRequirement={`${ins.quickSummary.autoInsurance[validLang]} — ${ins.quickSummary.takafulOptions[validLang]}`}
        officialUrl={ins.portalUrl || ins.website}
      />

      {/* Rich Human-Written Insurance Guide */}
      <RichGuideSections lang={validLang} guide={richGuide} entityName={ins.name[validLang]} />

      {/* Insurance Products with clickable URLs */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <Shield className="w-5 h-5 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? `تغطيات ومنصات التأمين (${ins.products.length})`
              : `Solutions & Portails d'Assurance (${ins.products.length})`}
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ins.products.map((prd, idx) => {
            const href = prd.url || ins.website;
            return (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between gap-2"
              >
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex items-start gap-2.5 min-w-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 transition-colors">
                      {prd[validLang]}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 mt-0.5" />
                </div>
                {prd.summary && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 ps-6">{prd.summary[validLang]}</p>
                )}
                <div className="ps-6 flex items-center justify-between text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                  <span>{dict.sections.openService}</span>
                  <span className="font-mono text-slate-400 truncate max-w-[160px]" dir="ltr">
                    {href.replace(/^https?:\/\//, '').split('/')[0]}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Structured Specifications Table */}
      {ins.requirements && ins.requirements.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? 'الوثائق المطلوبة للتأمين والتعويض'
                : 'Pièces Requises pour Souscription & Sinistres'}
            </span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[440px] sm:min-w-0 text-xs sm:text-sm text-start">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-3 text-start font-bold w-1/3">{dict.common.tableHeaders.requirement}</th>
                  <th className="p-3 text-start font-bold">{dict.common.tableHeaders.detail}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {ins.requirements.map((req, idx) => (
                  <tr key={idx}>
                    <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">{req.label[validLang]}</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300 leading-relaxed">{req.value[validLang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

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
