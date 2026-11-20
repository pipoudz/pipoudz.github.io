import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, ArrowRight, ArrowLeft, Clock, Coins, CheckCircle2 } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/lib/seo';
import { proceduresList } from '@/lib/sectors-data';
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
    title: validLang === 'ar' ? 'دليل المعاملات والإجراءات الإدارية في الجزائر' : 'Guide des Démarches Administratives en Algérie',
    description:
      validLang === 'ar'
        ? 'دليل استخراج الوثائق الرسمية في الجزائر: الأبوستيل، شهادة السوابق القضائية، التصريح بضياع الوثائق، بطاقة المقاول الذاتي، وفضاء الأولياء.'
        : 'Guide pas à pas des démarches citoyennes : apostille, casier judiciaire, déclaration de perte, auto-entrepreneur et état civil.',
    path: 'process',
    lang: validLang,
  });
}

export default async function ProcessIndexPage({
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
    { name: dict.nav.procedures, url: `/${validLang}/process/` },
  ]);

  const collectionSchema = generateCollectionPageSchema({
    name: dict.nav.procedures,
    description:
      validLang === 'ar'
        ? `خطوات تفصيلية خطوة بخطوة لاستخراج ${proceduresList.length} من الوثائق الإدارية الرسمية.`
        : `${proceduresList.length} démarches administratives expliquées pas à pas en Algérie.`,
    path: 'process',
    numberOfItems: proceduresList.length,
    lang: validLang,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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
        items={[{ label: dict.nav.procedures, href: `/${validLang}/process/` }]}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <FileText className="w-8 h-8 text-emerald-600" />
          <span>{dict.nav.procedures}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? `خطوات تفصيلية خطوة بخطوة لاستخراج ${proceduresList.length} من الوثائق الإدارية الرسمية، الملفات المطلوبة، الرسوم، والمدة الزمنية للمعالجة.`
            : `${proceduresList.length} démarches administratives expliquées pas à pas : pièces requises, délais, coûts et liens directs vers les téléprocédures.`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {proceduresList.map((proc) => (
          <Link
            key={proc.slug}
            href={`/${validLang}/process/${proc.slug}/`}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 truncate">
                  {proc.responsibleEntity[validLang]}
                </span>
                <span className="flex items-center gap-1 font-mono shrink-0">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{proc.estimatedDuration[validLang]}</span>
                </span>
              </div>

              <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg group-hover:text-emerald-600 transition-colors">
                {proc.title[validLang]}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                {proc.description[validLang]}
              </p>

              {/* Steps count & cost badges */}
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {proc.steps.length} {validLang === 'ar' ? 'خطوات عملية' : 'étapes'}
                </span>
                <span>•</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                  {proc.cost[validLang]}
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
              <span>{dict.sections.readMore}</span>
              <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
