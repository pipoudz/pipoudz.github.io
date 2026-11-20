'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Calculator,
  Receipt,
  BookOpen,
  HeartPulse,
  Moon,
  Wallet,
  Wrench,
  ArrowLeft,
  ArrowRight,
  X,
} from 'lucide-react';
import { Language, ToolItem } from '@/lib/types';

export interface ToolCategoryMeta {
  id: ToolItem['category'];
  label: { ar: string; fr: string };
  summary: { ar: string; fr: string };
}

interface ToolsDirectoryClientProps {
  lang: Language;
  tools: ToolItem[];
  categories: ToolCategoryMeta[];
  launchLabel: string;
}

const CATEGORY_ICONS: Record<ToolItem['category'], React.ComponentType<{ className?: string }>> = {
  calculators: Calculator,
  productivity: Receipt,
  study: BookOpen,
  health: HeartPulse,
  islamic: Moon,
  'daily-life': Wallet,
};

export default function ToolsDirectoryClient({
  lang,
  tools,
  categories,
  launchLabel,
}: ToolsDirectoryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ToolItem['category']>('all');
  const [query, setQuery] = useState('');
  const NextArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesCat = selectedCategory === 'all' || tool.category === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      const haystack = `${tool.name.ar} ${tool.name.fr} ${tool.description.ar} ${tool.description.fr} ${tool.slug}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [tools, selectedCategory, query]);

  const groupedCategories = useMemo(() => {
    return categories
      .map((cat) => ({
        ...cat,
        items: filteredTools.filter((t) => t.category === cat.id),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, filteredTools]);

  return (
    <div className="space-y-8">
      {/* Interactive Filter & Search Controls */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'ابحث عن أداة: الراتب، سونلغاز، التلقيح، الفاتورة، المعدل...'
                  : 'Rechercher un outil : salaire, Sonelgaz, vaccins, facture, moyenne...'
              }
              aria-label={lang === 'ar' ? 'تصفية الأدوات بالاسم أو الوصف' : 'Filtrer les outils par nom ou description'}
              className="w-full ps-10 pe-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-600"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label={lang === 'ar' ? 'مسح البحث' : 'Effacer la recherche'}
                className="absolute top-1/2 -translate-y-1/2 end-2.5 p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums whitespace-nowrap shrink-0">
            {lang === 'ar'
              ? `عرض ${filteredTools.length} من أصل ${tools.length} أداة`
              : `${filteredTools.length} outil(s) affiché(s) sur ${tools.length}`}
          </div>
        </div>

        {/* Interactive Category Segmented Filter Buttons */}
        <div
          role="tablist"
          aria-label={lang === 'ar' ? 'تصفية الأدوات حسب الفئة' : 'Filtrer par catégorie d’outils'}
          className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-emerald-700 text-white shadow-2xs'
                : 'text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800'
            }`}
          >
            {lang === 'ar' ? `الكل (${tools.length})` : `Tous (${tools.length})`}
          </button>
          {categories.map((cat) => {
            const count = tools.filter((t) => t.category === cat.id).length;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label[lang]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {groupedCategories.length === 0 ? (
        <div className="p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
          <Wrench className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-base font-bold text-slate-900 dark:text-slate-100">
            {lang === 'ar'
              ? 'لم نعثر على أداة مطابقة لبحثك الحالي'
              : 'Aucun outil ne correspond à votre recherche'}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {lang === 'ar'
              ? 'جرب كلمة مفتاحية أخرى أو أعد ضبط الفئة إلى الكل.'
              : 'Essayez un autre mot-clé ou réinitialisez le filtre des catégories.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedCategory('all');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
          >
            {lang === 'ar' ? 'عرض جميع الأدوات' : 'Afficher tous les outils'}
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {groupedCategories.map((cat) => {
            const IconComp = CATEGORY_ICONS[cat.id];
            return (
              <section key={cat.id} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <IconComp className="w-5 h-5 text-emerald-600 shrink-0" />
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {cat.label[lang]}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {cat.summary[lang]}
                    </p>
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums whitespace-nowrap">
                    <span>{cat.items.length}</span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span>{lang === 'ar' ? 'أداة متاحة' : 'outils'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((tool) => (
                    <Link
                      prefetch={false}
                      key={tool.slug}
                      href={`/${lang}/pages/tools/${tool.category}/${tool.slug}/`}
                      className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-600/60 transition-colors flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-medium text-emerald-700 dark:text-emerald-400">
                            {cat.label[lang]}
                          </span>
                          <IconComp className="w-4 h-4 text-emerald-600 shrink-0" />
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {tool.name[lang]}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {tool.description[lang]}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                        <span>{launchLabel}</span>
                        <NextArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
