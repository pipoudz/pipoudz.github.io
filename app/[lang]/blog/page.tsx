import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/lib/seo';
import { blogArticles } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';

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
        ? 'مقالات وأدلة المواطن الشاملة في الجزائر'
        : 'Blog & Guides Pratiques des Démarches en Algérie',
    description:
      validLang === 'ar'
        ? 'موسوعة شروحات عملية طويلة باللغتين العربية والفرنسية حول السوابق القضائية، بطاقة الشفاء، بريدي موب، عدل 3، الضرائب والرواتب، وقطارات SNTF.'
        : 'Dossiers complets rédigés pour les citoyens : casier judiciaire, carte Chifa CNAS, BaridiMob, calcul salaire net IRG, AADL 3 et réseau SNTF.',
    path: 'blog',
    lang: validLang,
  });
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const NextArrow = validLang === 'ar' ? ArrowLeft : ArrowRight;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.blog, url: `/${validLang}/blog/` },
  ]);
  const collectionSchema = generateCollectionPageSchema({
    name: validLang === 'ar' ? 'دليل المواطن والمقالات التحليلية' : 'Guides Citoyens & Analyses',
    description:
      validLang === 'ar'
        ? 'مقالات معمقة ومحينة تشرح للمواطن الجزائري مختلف المنصات العمومية والخدمات المالية.'
        : 'Guides de fond actualisés expliquant les formalités administratives et téléservices algériens.',
    path: 'blog',
    numberOfItems: blogArticles.length,
    lang: validLang,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Breadcrumbs
        lang={validLang}
        items={[{ label: dict.nav.blog, href: `/${validLang}/blog/` }]}
      />

      {/* Editorial Header */}
      <header className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          <BookOpen className="w-4 h-4" />
          <span>
            {validLang === 'ar'
              ? 'الأدلة التحريرية المرجعية · الجزائر'
              : 'Dossiers Éditoriaux de Référence · Algérie'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {validLang === 'ar' ? 'دليل المواطن والمقالات التحليلية' : 'Guides Citoyens & Analyses'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? 'مقالات معمقة ومحينة تشرح للمواطن الجزائري والمقيم بالخارج كل الخطوات العملية، التكاليف القانونية، الجداول المقارنة، والحلول الميدانية لمختلف المنصات العمومية والخدمات المالية.'
            : 'Guides de fond actualisés expliquant pas à pas les formalités administratives, frais légaux, tableaux comparatifs et astuces terrain pour maîtriser les téléservices algériens.'}
        </p>
      </header>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogArticles.map((article) => (
          <Link
            prefetch={false}
            key={article.slug}
            href={`/${validLang}/blog/${article.slug}/`}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-bold text-emerald-700 dark:text-emerald-400">
                  {article.category[validLang]}
                </span>
                <div className="flex items-center gap-3 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.updatedAt}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {article.readTimeMinutes}{' '}
                      {validLang === 'ar' ? 'دقائق للقراءة' : 'min de lecture'}
                    </span>
                  </span>
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors leading-snug">
                {article.title[validLang]}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {article.excerpt[validLang]}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
              <span>{dict.sections.readMore}</span>
              <NextArrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
