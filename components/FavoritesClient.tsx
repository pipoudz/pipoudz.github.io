'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Star, Trash2, Plus, Search, Building2, Wrench, Train, ExternalLink, RotateCcw } from 'lucide-react';
import { Language } from '@/lib/types';

export interface FavoriteEntry {
  id: string;
  type: 'sector' | 'tool' | 'train';
  titleAr: string;
  titleFr: string;
  subtitleAr: string;
  subtitleFr: string;
  hrefAr: string;
  hrefFr: string;
}

const STORAGE_KEY = 'dz_portal_favorites_v1';
const FAVORITES_EVENT = 'dz_portal_favorites_updated';

export function readStoredFavorites(): FavoriteEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeStoredFavorites(items: FavoriteEntry[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(FAVORITES_EVENT));
  } catch {
    // Ignore storage quota errors silently
  }
}

interface FavoritesClientProps {
  lang: Language;
  catalogSectors: FavoriteEntry[];
  catalogTools: FavoriteEntry[];
  catalogTrains: FavoriteEntry[];
}

export default function FavoritesClient({
  lang,
  catalogSectors,
  catalogTools,
  catalogTrains,
}: FavoritesClientProps) {
  const isAr = lang === 'ar';
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'sector' | 'tool' | 'train'>('all');
  const [catalogTab, setCatalogTab] = useState<'sector' | 'tool' | 'train'>('sector');
  const [searchQuery, setSearchQuery] = useState('');

  const syncFromStorage = useCallback(() => {
    setFavorites(readStoredFavorites());
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      syncFromStorage();
      setHydrated(true);
    }, 0);
    window.addEventListener(FAVORITES_EVENT, syncFromStorage);
    window.addEventListener('storage', syncFromStorage);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(FAVORITES_EVENT, syncFromStorage);
      window.removeEventListener('storage', syncFromStorage);
    };
  }, [syncFromStorage]);

  const isSaved = (id: string) => favorites.some((f) => f.id === id);

  const toggleFavorite = (entry: FavoriteEntry) => {
    const next = isSaved(entry.id)
      ? favorites.filter((f) => f.id !== entry.id)
      : [entry, ...favorites];
    setFavorites(next);
    writeStoredFavorites(next);
  };

  const clearAll = () => {
    setFavorites([]);
    writeStoredFavorites([]);
  };

  const visibleFavorites =
    activeTab === 'all' ? favorites : favorites.filter((f) => f.type === activeTab);

  const sourceList =
    catalogTab === 'sector'
      ? catalogSectors
      : catalogTab === 'tool'
        ? catalogTools
        : catalogTrains;

  const q = searchQuery.trim().toLowerCase();
  const filteredCatalog = sourceList
    .filter((item) => {
      if (!q) return true;
      return (
        item.titleAr.toLowerCase().includes(q) ||
        item.titleFr.toLowerCase().includes(q) ||
        item.subtitleAr.toLowerCase().includes(q) ||
        item.subtitleFr.toLowerCase().includes(q)
      );
    })
    .slice(0, 12);

  const getTypeIcon = (type: FavoriteEntry['type']) => {
    if (type === 'tool') return <Wrench className="w-4 h-4 text-emerald-600 shrink-0" />;
    if (type === 'train') return <Train className="w-4 h-4 text-emerald-600 shrink-0" />;
    return <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />;
  };

  const getTypeLabel = (type: FavoriteEntry['type']) => {
    if (type === 'tool') return isAr ? 'أداة رقمية' : 'Outil numérique';
    if (type === 'train') return isAr ? 'قطار SNTF' : 'Train SNTF';
    return isAr ? 'قطاع حكومي' : 'Secteur public';
  };

  return (
    <div className="space-y-8">
      {/* Saved Favorites Dashboard */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
              {isAr ? 'العناصر المحفوظة على هذا الجهاز' : 'Éléments enregistrés sur cet appareil'}
            </h2>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
              {hydrated ? favorites.length : 0}
            </span>
          </div>

          {hydrated && favorites.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 text-xs font-bold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isAr ? 'إفراغ القائمة' : 'Tout effacer'}</span>
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all' as const, label: isAr ? `الكل (${favorites.length})` : `Tous (${favorites.length})` },
            {
              id: 'sector' as const,
              label: isAr
                ? `القطاعات (${favorites.filter((f) => f.type === 'sector').length})`
                : `Secteurs (${favorites.filter((f) => f.type === 'sector').length})`,
            },
            {
              id: 'tool' as const,
              label: isAr
                ? `الأدوات (${favorites.filter((f) => f.type === 'tool').length})`
                : `Outils (${favorites.filter((f) => f.type === 'tool').length})`,
            },
            {
              id: 'train' as const,
              label: isAr
                ? `القطارات (${favorites.filter((f) => f.type === 'train').length})`
                : `Trains SNTF (${favorites.filter((f) => f.type === 'train').length})`,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Favorites Grid or Empty State */}
        {!hydrated || visibleFavorites.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-dashed border-slate-300 dark:border-slate-700 text-center space-y-2">
            <Star className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {isAr ? 'لم تضف أي مفضلات بعد' : 'Aucun favori enregistré pour le moment'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
              {isAr
                ? 'أضف القطاعات والأدوات وجداول القطارات التي تستخدمها باستمرار لتصل إليها مباشرة من القائمة أدناه.'
                : 'Ajoutez vos secteurs publics, calculateurs et lignes SNTF fréquents depuis le sélecteur ci-dessous pour y accéder en un clic.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleFavorites.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                    <span className="inline-flex items-center gap-1.5">
                      {getTypeIcon(item.type)}
                      <span>{getTypeLabel(item.type)}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(item)}
                      className="text-slate-400 hover:text-red-500 p-1 rounded-md transition-colors"
                      title={isAr ? 'حذف من المفضلة' : 'Retirer des favoris'}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 line-clamp-2">
                    {isAr ? item.titleAr : item.titleFr}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {isAr ? item.subtitleAr : item.subtitleFr}
                  </p>
                </div>

                <Link
                  prefetch={false}
                  href={isAr ? item.hrefAr : item.hrefFr}
                  className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                >
                  <span>{isAr ? 'فتح مباشرة' : 'Ouvrir directement'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quick Picker to Add Sectors, Tools & SNTF Lines */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-xs">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
            {isAr ? 'إضافة قطاعات وأدوات وجداول قطارات إلى مفضلاتي' : 'Ajouter des services, outils et trains à vos favoris'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isAr
              ? 'اختر التصنيف أو ابحث بالاسم ثم اضغط على زر الإضافة لحفظ العنصر في متصفحك فورا.'
              : 'Sélectionnez une catégorie ou recherchez par nom pour épingler vos ressources sur cet appareil.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'sector' as const, label: isAr ? 'القطاعات الحكومية' : 'Secteurs Publics', icon: Building2 },
              { id: 'tool' as const, label: isAr ? 'الأدوات الرقمية' : 'Outils Numériques', icon: Wrench },
              { id: 'train' as const, label: isAr ? 'جداول قطارات SNTF' : 'Lignes Trains SNTF', icon: Train },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setCatalogTab(t.id);
                  setSearchQuery('');
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  catalogTab === t.id
                    ? 'bg-slate-900 dark:bg-emerald-600 text-white border-slate-900 dark:border-emerald-600'
                    : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث للإضافة السريعة...' : 'Filtrer par nom...'}
              className="w-full ps-9 pe-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredCatalog.map((entry) => {
            const saved = isSaved(entry.id);
            return (
              <div
                key={entry.id}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <Link
                    prefetch={false}
                    href={isAr ? entry.hrefAr : entry.hrefFr}
                    className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 hover:text-emerald-600 truncate block"
                  >
                    {isAr ? entry.titleAr : entry.titleFr}
                  </Link>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {isAr ? entry.subtitleAr : entry.subtitleFr}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleFavorite(entry)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 inline-flex items-center gap-1 transition-colors ${
                    saved
                      ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  {saved ? (
                    <>
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{isAr ? 'محفوظ' : 'Ajouté'}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>{isAr ? 'حفظ' : 'Ajouter'}</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
