import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/lib/seo';
import { insuranceList } from '@/lib/sectors-data';
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
        ? 'دليل شركات التأمين في الجزائر (12 شركة)'
        : "Guide des 12 Compagnies d'Assurance en Algérie",
    description:
      validLang === 'ar'
        ? 'دليل شامل لشركات التأمين في الجزائر: SAA, CAAR, CAAT, CASH, 2A، أليانس، أكسا، وتأمين التكافل والسيارات.'
        : "Répertoire complet des 12 assureurs en Algérie : SAA, CAAR, CAAT, CASH, Alliance, AXA, Salama, Takaful et déclaration de sinistres.",
    path: 'sectors/assurance',
    lang: validLang,
  });
}

export default async function InsuranceIndexPage({
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
    { name: dict.nav.insurance, url: `/${validLang}/sectors/assurance/` },
  ]);

  const collectionSchema = generateCollectionPageSchema({
    name: dict.nav.insurance,
    description:
      validLang === 'ar'
        ? `دليل شركات التأمين وإعادة التأمين المعتمدة في الجزائر (${insuranceList.length} شركة).`
        : `Annuaire des ${insuranceList.length} assureurs agréés en Algérie.`,
    path: 'sectors/assurance',
    numberOfItems: insuranceList.length,
    lang: validLang,
  });

  const getTypeLabel = (type: string) => {
    if (type === 'takaful') return validLang === 'ar' ? 'تأمين تكافلي' : 'Assurance Takaful';
    if (type === 'public') return validLang === 'ar' ? 'شركة وطنية عمومية' : 'Compagnie Publique';
    return validLang === 'ar' ? 'شركة خاصة' : 'Compagnie Privée';
  };

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
        items={[
          { label: dict.nav.sectors, href: `/${validLang}/sectors/` },
          { label: dict.nav.insurance, href: `/${validLang}/sectors/assurance/` },
        ]}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Shield className="w-8 h-8 text-emerald-600" />
          <span>{dict.nav.insurance}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? `دليل شركات التأمين وإعادة التأمين المعتمدة في الجزائر (${insuranceList.length} شركة): تأمين السيارات الشامل، الكوارث الطبيعية CAT-NAT، والتأمين التكافلي.`
            : `Annuaire des ${insuranceList.length} assureurs agréés en Algérie : assurance auto tous risques, multirisque habitation, catastrophes naturelles et takaful.`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {insuranceList.map((ins) => (
          <Link
            key={ins.slug}
            href={`/${validLang}/sectors/assurance/${ins.slug}/`}
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-black text-xs sm:text-sm flex items-center justify-center">
                  {ins.acronym}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {getTypeLabel(ins.type)}
                </span>
              </div>
              <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg group-hover:text-emerald-600 transition-colors">
                {ins.name[validLang]}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                {ins.description[validLang]}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
              <span>
                {validLang === 'ar'
                  ? `العروض والمنصات (${ins.products.length})`
                  : `Offres & Liens (${ins.products.length})`}
              </span>
              <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
