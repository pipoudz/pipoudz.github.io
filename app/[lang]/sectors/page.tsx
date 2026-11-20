import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Building2, Landmark, Shield, Train, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language, SectorCategory } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/lib/seo';
import { sectorsList } from '@/lib/sectors-data';
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
        ? 'دليل القطاعات والمؤسسات العمومية الجزائرية (81 قطاعا)'
        : 'Annuaire des 81 Secteurs & Institutions Publiques Algériennes',
    description:
      validLang === 'ar'
        ? 'دليل شامل لجميع القطاعات الحكومية والوزارات والمؤسسات العمومية في الجزائر مع أكثر من 650 رابطا مباشرا للخدمات الرقمية.'
        : 'Répertoire exhaustif des 81 ministères, organismes et entreprises publiques en Algérie avec accès direct à plus de 650 téléservices officiels.',
    path: 'sectors',
    lang: validLang,
  });
}

export default async function SectorsPage({
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
    { name: dict.nav.sectors, url: `/${validLang}/sectors/` },
  ]);

  const collectionSchema = generateCollectionPageSchema({
    name: dict.nav.sectors,
    description:
      validLang === 'ar'
        ? `دليل شامل يغطي ${sectorsList.length} من الوزارات والهيئات الوطنية والمؤسسات العمومية الجزائرية.`
        : `Annuaire exhaustif de ${sectorsList.length} ministères, organismes publics et entreprises nationales en Algérie.`,
    path: 'sectors',
    numberOfItems: sectorsList.length,
    lang: validLang,
  });

  const categories: SectorCategory[] = [
    'housing',
    'telecom',
    'energy_water',
    'social_labor',
    'justice_interior',
    'transport',
    'finance_economy',
    'education_higher',
    'health_civil',
    'ministries',
  ];

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
        items={[{ label: dict.nav.sectors, href: `/${validLang}/sectors/` }]}
      />

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {dict.nav.sectors}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? `دليل شامل يغطي ${sectorsList.length} من الوزارات والهيئات الوطنية والمؤسسات العمومية الجزائرية، مع وصول مباشر للخدمات الرقمية وشروط الاستفادة.`
            : `Annuaire exhaustif de ${sectorsList.length} ministères, organismes publics et entreprises nationales en Algérie avec accès direct aux téléservices.`}
        </p>

        {/* Quick Sector Shortcuts */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Link
                    prefetch={false}
            href={`/${validLang}/sectors/bank/`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 transition-colors"
          >
            <Landmark className="w-4 h-4 text-emerald-600" />
            <span>{dict.nav.banks}</span>
          </Link>
          <Link
                    prefetch={false}
            href={`/${validLang}/sectors/assurance/`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 transition-colors"
          >
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>{dict.nav.insurance}</span>
          </Link>
          <Link
                    prefetch={false}
            href={`/${validLang}/sectors/sntf-schedule/`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 transition-colors"
          >
            <Train className="w-4 h-4 text-emerald-600" />
            <span>{dict.nav.sntf}</span>
          </Link>
          <Link
                    prefetch={false}
            href={`/${validLang}/sectors/sonalgaz-bill-guide/`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 transition-colors"
          >
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>{validLang === 'ar' ? 'دليل فاتورة سونلغاز' : 'Guide Facture Sonelgaz'}</span>
          </Link>
          <Link
                    prefetch={false}
            href={`/${validLang}/pages/guide/`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 transition-colors"
          >
            <Building2 className="w-4 h-4 text-emerald-600" />
            <span>{dict.nav.guide}</span>
          </Link>
        </div>
      </div>

      {/* Grouped by Category (All 10 Categories) */}
      <div className="space-y-12">
        {categories.map((catKey) => {
          const categorySectors = sectorsList.filter((s) => s.category === catKey);
          if (categorySectors.length === 0) return null;

          return (
            <div key={catKey} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {dict.categories[catKey] || catKey}
                </h2>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {categorySectors.length}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categorySectors.map((sector) => (
                  <Link
                    prefetch={false}
                    key={sector.slug}
                    href={`/${validLang}/sectors/${sector.slug}/`}
                    className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="px-2.5 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                          {sector.acronym || 'DZ'}
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {sector.services.length}{' '}
                          {validLang === 'ar' ? 'خدمة' : 'services'}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base group-hover:text-emerald-600 transition-colors">
                        {sector.name[validLang]}
                      </h3>
                      {sector.ministry && (
                        <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-1">
                          {sector.ministry[validLang]}
                        </p>
                      )}
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {sector.description[validLang]}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                      <span>{dict.sections.readMore}</span>
                      <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
