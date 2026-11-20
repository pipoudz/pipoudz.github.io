import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ExternalLink, CheckCircle2, MapPin, Phone, CreditCard, HelpCircle, FileCheck } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateFAQSchema, generateGovernmentServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { banksList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import RichGuideSections from '@/components/RichGuideSections';
import { getBankRichGuide } from '@/lib/data/guides-banks-insurance';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  ['ar', 'fr'].forEach((lang) => {
    banksList.forEach((b) => {
      params.push({ lang: lang as 'ar' | 'fr', slug: b.slug });
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
  const bank = banksList.find((b) => b.slug === slug);

  if (!bank) {
    return constructMetadata({
      title: validLang === 'ar' ? 'البنك غير موجود' : 'Banque Introuvable',
      description: '',
      path: `sectors/bank/${slug}`,
      lang: validLang,
    });
  }

  return constructMetadata({
    title:
      validLang === 'ar'
        ? `${bank.name.ar} (${bank.acronym}) - الخدمات والصيرفة الرقمية`
        : `${bank.name.fr} (${bank.acronym}) - Services & E-Banking`,
    description: bank.description[validLang],
    path: `sectors/bank/${slug}`,
    lang: validLang,
  });
}

export default async function BankDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const bank = banksList.find((b) => b.slug === slug);
  if (!bank) notFound();

  const govSchema = generateGovernmentServiceSchema({
    name: bank.name[validLang],
    description: bank.description[validLang],
    provider: bank.name[validLang],
    url: bank.website,
    lang: validLang,
  });

  const richGuide = getBankRichGuide(bank);
  const mergedFaqs = [...bank.faqs, ...richGuide.extraFaqs];

  const faqSchema = generateFAQSchema(
    mergedFaqs.map((f) => ({
      question: f.question[validLang],
      answer: f.answer[validLang],
    })),
    validLang
  );

  const getTypeLabel = (type: string) => {
    if (type === 'central') return validLang === 'ar' ? 'بنك مركزي' : 'Banque Centrale';
    if (type === 'islamic') return validLang === 'ar' ? 'صيرفة إسلامية' : 'Banque Islamique';
    if (type === 'public') return validLang === 'ar' ? 'بنك عمومي' : 'Banque Publique';
    return validLang === 'ar' ? 'بنك تجاري خاص' : 'Banque Privée';
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.banks, url: `/${validLang}/sectors/bank/` },
    { name: bank.name[validLang], url: `/${validLang}/sectors/bank/${slug}/` },
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
          { label: dict.nav.banks, href: `/${validLang}/sectors/bank/` },
          { label: bank.name[validLang] },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-3 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black text-base sm:text-lg flex items-center justify-center shrink-0">
              {bank.acronym}
            </span>
            <div className="min-w-0">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                {getTypeLabel(bank.type)}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                {bank.name[validLang]}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {bank.eBankingUrl && (
              <a
                href={bank.eBankingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm"
              >
                <span>E-Banking</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={bank.website}
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
          {bank.description[validLang]}
        </p>

        {/* Bank Meta Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">{bank.headquarters[validLang]}</span>
          </div>
          {bank.swiftCode && (
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>SWIFT: <strong className="font-mono">{bank.swiftCode}</strong></span>
            </div>
          )}
          {bank.contactPhone && (
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-mono">{bank.contactPhone}</span>
            </div>
          )}
        </div>
      </div>

      {/* GEO Quick Summary Box */}
      <QuickSummaryBox
        lang={validLang}
        targetAudience={validLang === 'ar' ? 'الأفراد، المهنيون، والمؤسسات في الجزائر' : 'Particuliers, professionnels et entreprises en Algérie'}
        processingTime={validLang === 'ar' ? 'فوري عبر الصيرفة الرقمية والوكالات' : 'Accès 24/7 via E-Banking et réseau d’agences'}
        fees={validLang === 'ar' ? 'حسب شروط البنك وتعريفة بنك الجزائر' : 'Selon barème bancaire et réglementation Algérie'}
        channel={bank.quickSummary.digitalBanking[validLang]}
        keyRequirement={`${bank.quickSummary.accountTypes[validLang]} — ${bank.quickSummary.islamicWindow[validLang]}`}
        officialUrl={bank.eBankingUrl || bank.website}
      />

      {/* Rich Human-Written Bank Guide */}
      <RichGuideSections lang={validLang} guide={richGuide} entityName={bank.name[validLang]} />

      {/* Services List with clickable URLs */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? `الخدمات والمنصات المصرفية الرسمية (${bank.services.length})`
              : `Portails & Services Bancaires (${bank.services.length})`}
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {bank.services.map((srv, idx) => {
            const href = srv.url || bank.website;
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
                      {srv[validLang]}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 mt-0.5" />
                </div>
                {srv.summary && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 ps-6">{srv.summary[validLang]}</p>
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
      {bank.requirements && bank.requirements.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? 'بيانات فتح الحساب والخدمات البنكية'
                : 'Conditions d’Ouverture & Spécifications'}
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
                {bank.requirements.map((req, idx) => (
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
