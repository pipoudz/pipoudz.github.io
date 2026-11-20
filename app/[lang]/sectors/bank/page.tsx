import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Landmark, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/lib/seo';
import { banksList } from '@/lib/sectors-data';
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
        ? 'دليل البنوك والمصارف في الجزائر (18 مؤسسة)'
        : 'Guide des 18 Banques & Établissements Financiers en Algérie',
    description:
      validLang === 'ar'
        ? 'دليل شامل لجميع البنوك العمومية والخاصة والمصارف الإسلامية وبنك الجزائر: BNA, BEA, CPA, BDL, BADR, CNEP, بنك البركة، ومصرف السلام.'
        : "Répertoire complet des 18 banques publiques, privées et islamiques en Algérie : Banque d'Algérie, BNA, BEA, CPA, CNEP, Al Baraka, Al Salam et Natixis.",
    path: 'sectors/bank',
    lang: validLang,
  });
}

export default async function BankIndexPage({
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
    { name: dict.nav.banks, url: `/${validLang}/sectors/bank/` },
  ]);

  const collectionSchema = generateCollectionPageSchema({
    name: dict.nav.banks,
    description:
      validLang === 'ar'
        ? `دليل المصارف والبنوك المعتمدة من بنك الجزائر (${banksList.length} بنكا ومؤسسة مالية).`
        : `Annuaire des ${banksList.length} banques commerciales et islamiques agréées par la Banque d'Algérie.`,
    path: 'sectors/bank',
    numberOfItems: banksList.length,
    lang: validLang,
  });

  const getTypeLabel = (type: string) => {
    if (type === 'central') return validLang === 'ar' ? 'بنك مركزي' : 'Banque Centrale';
    if (type === 'islamic') return validLang === 'ar' ? 'صيرفة إسلامية' : 'Finance Islamique';
    if (type === 'public') return validLang === 'ar' ? 'بنك عمومي' : 'Banque Publique';
    return validLang === 'ar' ? 'بنك خاص' : 'Banque Privée';
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
          { label: dict.nav.banks, href: `/${validLang}/sectors/bank/` },
        ]}
      />

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Landmark className="w-8 h-8 text-emerald-600" />
          <span>{dict.nav.banks}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? `دليل المصارف والبنوك المعتمدة من بنك الجزائر (${banksList.length} بنكا ومؤسسة مالية): البنوك العمومية، البنوك الخاصة، ونوافذ الصيرفة الإسلامية.`
            : `Annuaire des ${banksList.length} banques commerciales et islamiques agréées par la Banque d'Algérie : comptes, e-banking, crédits et finance participative.`}
        </p>
      </div>

      {/* Banks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {banksList.map((bank) => (
          <Link
            key={bank.slug}
            href={`/${validLang}/sectors/bank/${bank.slug}/`}
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-black text-xs sm:text-sm flex items-center justify-center">
                  {bank.acronym}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {getTypeLabel(bank.type)}
                </span>
              </div>
              <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg group-hover:text-emerald-600 transition-colors">
                {bank.name[validLang]}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                {bank.description[validLang]}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
              <span>
                {validLang === 'ar'
                  ? `الخدمات والروابط (${bank.services.length})`
                  : `Services & Liens (${bank.services.length})`}
              </span>
              <NextArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
