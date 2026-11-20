import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  Building2,
  Calculator,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';
import { blogArticles, sectorsList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  ['ar', 'fr'].forEach((lang) => {
    blogArticles.forEach((article) => {
      params.push({ lang, slug: article.slug });
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
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return constructMetadata({
      title: validLang === 'ar' ? 'المقال غير موجود' : 'Article Introuvable',
      description: '',
      path: `blog/${slug}`,
      lang: validLang,
    });
  }

  return constructMetadata({
    title: article.title[validLang],
    description: article.excerpt[validLang],
    path: `blog/${slug}`,
    lang: validLang,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const NextArrow = validLang === 'ar' ? ArrowLeft : ArrowRight;

  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleSchema = generateArticleSchema({
    headline: article.title[validLang],
    description: article.excerpt[validLang],
    slug: article.slug,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    lang: validLang,
  });

  const faqSchema = generateFAQSchema(
    article.faqs.map((f) => ({
      question: f.question[validLang],
      answer: f.answer[validLang],
    })),
    validLang
  );

  const otherArticles = blogArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.blog, url: `/${validLang}/blog/` },
    { name: article.title[validLang], url: `/${validLang}/blog/${slug}/` },
  ]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
          { label: dict.nav.blog, href: `/${validLang}/blog/` },
          { label: article.title[validLang] },
        ]}
      />

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {article.category[validLang]}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              {dict.common.lastUpdated} {article.updatedAt}
            </span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>
              {article.readTimeMinutes}{' '}
              {validLang === 'ar' ? 'دقائق للقراءة' : 'min de lecture'}
            </span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {article.title[validLang]}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {article.excerpt[validLang]}
        </p>
      </header>

      {/* Quick Summary / AI Citation Card */}
      <section className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/25 border border-emerald-200/80 dark:border-emerald-900/50 space-y-2">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
          <Sparkles className="w-4 h-4" />
          <span>{validLang === 'ar' ? 'ملخص سريع' : 'Résumé Rapide'}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
          {article.quickAnswer[validLang]}
        </p>
      </section>

      {/* Long-Form Sections */}
      <div className="space-y-8">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
              {sec.heading[validLang]}
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {sec.paragraphs[validLang].map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
            {sec.bullets && sec.bullets[validLang] && (
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 bg-emerald-50/50 dark:bg-slate-900/50 p-4 rounded-xl border border-emerald-100 dark:border-slate-800">
                {sec.bullets[validLang].map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Comparison Table if present */}
      {article.comparisonTable && (
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar' ? 'جدول المقارنة التفصيلي' : 'Tableau comparatif détaillé'}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[480px] sm:min-w-0 text-xs sm:text-sm text-start">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                <tr>
                  {article.comparisonTable.headers.map((h, hIdx) => (
                    <th key={hIdx} className="p-3 text-start font-bold">
                      {h[validLang]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {article.comparisonTable.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`p-3 leading-relaxed ${
                          cIdx === 0
                            ? 'font-semibold text-slate-900 dark:text-slate-100'
                            : 'text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {cell[validLang]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Related Sectors & Interactive Tools */}
      {((article.relatedSectors && article.relatedSectors.length > 0) ||
        (article.relatedTools && article.relatedTools.length > 0)) && (
        <section className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? 'منصات وأدوات مرتبطة بهذا الدليل'
                : 'Portails & Calculateurs Associés'}
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {article.relatedSectors?.map((secSlug) => {
              const secItem = sectorsList.find((s) => s.slug === secSlug);
              return (
                <Link
                  key={secSlug}
                  href={`/${validLang}/sectors/${secSlug}/`}
                  className="group p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 flex items-center justify-between gap-2 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-emerald-600">
                      {secItem ? secItem.name[validLang] : secSlug}
                    </span>
                  </div>
                  <NextArrow className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </Link>
              );
            })}
            {article.relatedTools?.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${validLang}/pages/tools/${tool.category}/${tool.slug}/`}
                className="group p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 flex items-center justify-between gap-2 transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Calculator className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-emerald-600">
                    {tool.label[validLang]}
                  </span>
                </div>
                <NextArrow className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {article.faqs.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>{dict.common.faqTitle}</span>
          </h2>
          <div className="space-y-3">
            {article.faqs.map((f, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
              >
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-1.5">
                  {f.question[validLang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {f.answer[validLang]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other Articles */}
      <section className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar' ? 'أدلة ومقالات أخرى تهمك' : 'Autres Guides Pratiques Recommandés'}
          </h2>
          <Link
            href={`/${validLang}/blog/`}
            className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            {dict.sections.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherArticles.map((other) => (
            <Link
              key={other.slug}
              href={`/${validLang}/blog/${other.slug}/`}
              className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between gap-2"
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                  {other.category[validLang]}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-emerald-600 line-clamp-2">
                  {other.title[validLang]}
                </h3>
              </div>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1">
                <span>{dict.sections.readMore}</span>
                <NextArrow className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
