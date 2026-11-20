import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  Sparkles,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Info,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateWebApplicationSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { toolsList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import GenericToolsRenderer from '@/components/tools/GenericToolsRenderer';
import ToolRichGuideSection from '@/components/ToolRichGuideSection';
import { getToolRichGuide } from '@/lib/data/guides-tools';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ lang: string; category: string; slug: string }> = [];
  ['ar', 'fr'].forEach((lang) => {
    toolsList.forEach((tool) => {
      params.push({
        lang: lang as 'ar' | 'fr',
        category: tool.category,
        slug: tool.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, category, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const tool = toolsList.find((t) => t.slug === slug);

  if (!tool) {
    return constructMetadata({
      title: validLang === 'ar' ? 'الأداة غير موجودة' : 'Outil Introuvable',
      description: '',
      path: `pages/tools/${category}/${slug}`,
      lang: validLang,
    });
  }

  return constructMetadata({
    title:
      validLang === 'ar'
        ? `${tool.name.ar} - أداة وحاسبة تفاعلية مباشرة`
        : `${tool.name.fr} - Outil Interactif Hors-Ligne`,
    description: tool.description[validLang],
    path: `pages/tools/${category}/${slug}`,
    lang: validLang,
  });
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ lang: string; category: string; slug: string }>;
}) {
  const { lang, category, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const NextArrow = validLang === 'ar' ? ArrowLeft : ArrowRight;

  const tool = toolsList.find((t) => t.slug === slug);
  if (!tool) notFound();

  const richGuide = getToolRichGuide(tool);
  const quickSummary = richGuide.quickSummary || {
    targetAudience: {
      ar: 'المواطنون والطلبة والمهنيون في الجزائر',
      fr: 'Citoyens, étudiants et professionnels en Algérie',
    },
    processingTime: {
      ar: 'فوري ومباشر داخل المتصفح',
      fr: 'Instantané en local dans le navigateur',
    },
    fees: {
      ar: 'مجاني بالكامل دون تسجيل',
      fr: 'Gratuit sans inscription',
    },
    channel: {
      ar: 'تطبيق ويب تفاعلي يعمل دون خوادم',
      fr: 'Application web interactive côté client',
    },
    keyRequirement: {
      ar: 'إدخال المعطيات الأساسية بالوحدات المطلوبة فقط',
      fr: 'Saisie des paramètres numériques de base uniquement',
    },
  };

  const existingFaqs =
    tool.faqs?.map((f) => ({
      question: f.question[validLang],
      answer: f.answer[validLang],
    })) || [];

  const guideFaqs = richGuide.extraFaqs.map((f) => ({
    question: f.question[validLang],
    answer: f.answer[validLang],
  }));

  const toolFaqs = [
    ...existingFaqs,
    ...guideFaqs.filter(
      (gf) => !existingFaqs.some((ef) => ef.question === gf.question)
    ),
    {
      question:
        validLang === 'ar'
          ? `هل تحفظ أداة ${tool.name.ar} أي بيانات شخصية على خوادم خارجية؟`
          : `L'outil ${tool.name.fr} enregistre-t-il mes données sur un serveur ?`,
      answer:
        validLang === 'ar'
          ? 'لا، تعمل الأداة بالكامل داخل متصفحك عبر المعالجة المحلية (Client-Side) دون إرسال أي أرقام أو ملفات خارج جهازك.'
          : "Non, l'outil s'exécute à 100 % localement dans votre navigateur sans envoi ni stockage de vos données sur des serveurs externes.",
    },
  ];

  const webAppSchema = generateWebApplicationSchema({
    name: tool.name[validLang],
    description: tool.description[validLang],
    url: `/pages/tools/${category}/${slug}/`,
    lang: validLang,
  });

  const faqSchema = generateFAQSchema(toolFaqs, validLang);

  const relatedTools = toolsList
    .filter((t) => t.category === category && t.slug !== slug)
    .slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.tools, url: `/${validLang}/pages/tools/` },
    { name: tool.name[validLang], url: `/${validLang}/pages/tools/${category}/${slug}/` },
  ]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
          { label: dict.nav.tools, href: `/${validLang}/pages/tools/` },
          { label: tool.name[validLang] },
        ]}
      />

      {/* Header Info */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{validLang === 'ar' ? 'أداة تفاعلية مباشرة · بدون إنترنت' : 'Outil Interactif · 100% Hors-Ligne'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {tool.name[validLang]}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {tool.description[validLang]}
        </p>
      </div>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={quickSummary.targetAudience[validLang]}
        processingTime={quickSummary.processingTime[validLang]}
        fees={quickSummary.fees[validLang]}
        channel={quickSummary.channel[validLang]}
        keyRequirement={quickSummary.keyRequirement[validLang]}
        officialUrl={tool.references?.[0]?.url}
      />

      {/* Interactive Tool Component */}
      <div className="py-2">
        <GenericToolsRenderer slug={slug} lang={validLang} />
      </div>

      {/* Rich Written Educational Guide, Formula, Example & Tips */}
      <ToolRichGuideSection lang={validLang} guide={richGuide} toolName={tool.name[validLang]} />

      {/* Tool Specifications Table (GEO) */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <Info className="w-5 h-5 text-emerald-600" />
          <span>{validLang === 'ar' ? 'بطاقة خصائص الأداة' : 'Fiche Technique de l’Outil'}</span>
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs sm:text-sm text-start">
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <th className="p-3 text-start font-bold bg-slate-50 dark:bg-slate-900 w-1/3">
                  {validLang === 'ar' ? 'التصنيف' : 'Catégorie'}
                </th>
                <td className="p-3 text-slate-700 dark:text-slate-300 font-medium">{tool.category}</td>
              </tr>
              <tr>
                <th className="p-3 text-start font-bold bg-slate-50 dark:bg-slate-900">
                  {validLang === 'ar' ? 'الخصوصية والأمان' : 'Confidentialité'}
                </th>
                <td className="p-3 text-slate-700 dark:text-slate-300">
                  {validLang === 'ar' ? 'معالجة محلية 100% في المتصفح دون خوادم' : 'Traitement 100 % local côté client sans serveur'}
                </td>
              </tr>
              <tr>
                <th className="p-3 text-start font-bold bg-slate-50 dark:bg-slate-900">
                  {validLang === 'ar' ? 'الاستخدام' : 'Accès'}
                </th>
                <td className="p-3 text-slate-700 dark:text-slate-300">
                  {validLang === 'ar' ? 'مجاني ومفتوح باللغتين العربية والفرنسية' : 'Gratuit, bilingue (Arabe / Français), instantané'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Official References (if present on tool) */}
      {tool.references && tool.references.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>{validLang === 'ar' ? 'المراجع والمصادر الرسمية المعتمدة' : 'Références & Sources Officielles'}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tool.references.map((ref, idx) => (
              <a
                key={idx}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between gap-2"
              >
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600">
                  {ref.label[validLang]}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {toolFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{faq.question}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar' ? 'أدوات وحاسبات أخرى ذات صلة:' : 'Autres outils similaires :'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedTools.map((rel) => (
              <Link
                key={rel.slug}
                href={`/${validLang}/pages/tools/${rel.category}/${rel.slug}/`}
                className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-emerald-600 transition-colors">
                    {rel.name[validLang]}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {rel.description[validLang]}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                  <span>{dict.sections.launchTool}</span>
                  <NextArrow className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
