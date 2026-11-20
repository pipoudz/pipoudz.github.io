'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, Building2, Landmark, Shield, FileText, Wrench, Video, Bell, Train, ArrowRight, ArrowLeft, Globe, BookOpen } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  sectorsList,
  banksList,
  insuranceList,
  proceduresList,
  videosList,
  noticesList,
  toolsList,
  trainTripsList,
  homeExternalServices,
  blogArticles,
} from '@/lib/sectors-data';

interface SearchBarModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBarModal({ lang, isOpen, onClose }: SearchBarModalProps) {
  const router = useRouter();
  const dict = getDictionary(lang);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setQuery('');
    setActiveCategory('all');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Keyboard navigation & Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Flattened searchable items
  const allItems = useMemo(() => {
    const items: Array<{
      id: string;
      title: string;
      subtitle: string;
      categoryKey: string;
      categoryLabel: string;
      url: string;
      icon: any;
      keywords: string;
    }> = [];

    // Sectors
    sectorsList.forEach((s) => {
      items.push({
        id: `sector-${s.slug}`,
        title: s.name[lang],
        subtitle: `${s.acronym ? s.acronym + ' • ' : ''}${s.ministry ? s.ministry[lang] : ''}`,
        categoryKey: 'sectors',
        categoryLabel: dict.nav.sectors,
        url: `/${lang}/sectors/${s.slug}/`,
        icon: Building2,
        keywords: `${s.name.ar} ${s.name.fr} ${s.acronym || ''} ${s.description.ar} ${s.description.fr}`,
      });
    });

    // Banks
    banksList.forEach((b) => {
      items.push({
        id: `bank-${b.slug}`,
        title: `${b.name[lang]} (${b.acronym})`,
        subtitle: b.headquarters[lang],
        categoryKey: 'banks',
        categoryLabel: dict.nav.banks,
        url: `/${lang}/sectors/bank/${b.slug}/`,
        icon: Landmark,
        keywords: `${b.name.ar} ${b.name.fr} ${b.acronym} banque bank بنك`,
      });
    });

    // Insurance
    insuranceList.forEach((i) => {
      items.push({
        id: `ins-${i.slug}`,
        title: `${i.name[lang]} (${i.acronym})`,
        subtitle: i.headquarters[lang],
        categoryKey: 'insurance',
        categoryLabel: dict.nav.insurance,
        url: `/${lang}/sectors/assurance/${i.slug}/`,
        icon: Shield,
        keywords: `${i.name.ar} ${i.name.fr} ${i.acronym} assurance تأمين`,
      });
    });

    // Procedures
    proceduresList.forEach((p) => {
      items.push({
        id: `proc-${p.slug}`,
        title: p.title[lang],
        subtitle: `${p.responsibleEntity[lang]} • ${p.estimatedDuration[lang]}`,
        categoryKey: 'procedures',
        categoryLabel: dict.nav.procedures,
        url: `/${lang}/process/${p.slug}/`,
        icon: FileText,
        keywords: `${p.title.ar} ${p.title.fr} ${p.description.ar} ${p.description.fr} إجراء وثيقة`,
      });
    });

    // Tools
    toolsList.forEach((t) => {
      items.push({
        id: `tool-${t.slug}`,
        title: t.name[lang],
        subtitle: t.description[lang],
        categoryKey: 'tools',
        categoryLabel: dict.nav.tools,
        url: `/${lang}/pages/tools/${t.category}/${t.slug}/`,
        icon: Wrench,
        keywords: `${t.name.ar} ${t.name.fr} ${t.description.ar} ${t.description.fr} حاسبة محول أداة`,
      });
    });

    // Videos
    videosList.forEach((v) => {
      items.push({
        id: `vid-${v.slug}`,
        title: v.title[lang],
        subtitle: v.category[lang],
        categoryKey: 'videos',
        categoryLabel: dict.nav.videos,
        url: `/${lang}/pages/video/${v.slug}/`,
        icon: Video,
        keywords: `${v.title.ar} ${v.title.fr} ${v.description.ar} فيديو شرح`,
      });
    });

    // Notices
    noticesList.forEach((n) => {
      items.push({
        id: `not-${n.slug}`,
        title: n.title[lang],
        subtitle: `${n.category[lang]} • ${n.date}`,
        categoryKey: 'notices',
        categoryLabel: dict.nav.education,
        url: `/${lang}/pages/education-notices/${n.slug}/`,
        icon: Bell,
        keywords: `${n.title.ar} ${n.title.fr} ${n.summary.ar} مذكرات إعلان بكالوريا`,
      });
    });

    // Trains
    trainTripsList.forEach((tt) => {
      items.push({
        id: `train-${tt.id}`,
        title: `${tt.departure[lang]} ➔ ${tt.arrival[lang]} (${tt.tripCode})`,
        subtitle: `${tt.departureTime} - ${tt.arrivalTime} • ${tt.price} • ${tt.trainType[lang]}`,
        categoryKey: 'trains',
        categoryLabel: dict.nav.sntf,
        url: `/${lang}/sectors/sntf-schedule/`,
        icon: Train,
        keywords: `${tt.departure.ar} ${tt.departure.fr} ${tt.arrival.ar} ${tt.arrival.fr} قطار SNTF رحلة`,
      });
    });

    // External National Portals (Mafqoudz, DZ-Orientation, JORADP, SGBV, etc.)
    homeExternalServices.forEach((ext) => {
      items.push({
        id: `ext-${ext.id}`,
        title: ext.title[lang],
        subtitle: ext.summary[lang],
        categoryKey: 'sectors',
        categoryLabel: ext.tag[lang],
        url: ext.officialUrl,
        icon: Globe,
        keywords: `${ext.title.ar} ${ext.title.fr} ${ext.summary.ar} ${ext.summary.fr} ${ext.tag.ar} ${ext.tag.fr}`,
      });
    });

    // Citizen Guides / Blog Articles
    blogArticles.forEach((art) => {
      items.push({
        id: `blog-${art.slug}`,
        title: art.title[lang],
        subtitle: art.excerpt[lang],
        categoryKey: 'blog',
        categoryLabel: dict.nav.blog,
        url: `/${lang}/blog/${art.slug}/`,
        icon: BookOpen,
        keywords: `${art.title.ar} ${art.title.fr} ${art.excerpt.ar} ${art.excerpt.fr} ${art.category.ar} ${art.category.fr} دليل مقال شرح`,
      });
    });

    return items;
  }, [lang, dict]);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.categoryKey === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
      );
    });
  }, [allItems, query, activeCategory]);

  const handleSelect = (url: string) => {
    handleClose();
    if (url.startsWith('http')) {
      window.location.assign(url);
    } else {
      router.push(url);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-2.5 sm:pt-16 px-2.5 sm:px-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90dvh] sm:max-h-[82dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.search.placeholder}
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-lg focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2 bg-slate-50/80 dark:bg-slate-950/50 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none">
          {[
            { id: 'all', label: dict.search.filterAll },
            { id: 'blog', label: dict.nav.blog },
            { id: 'sectors', label: dict.search.filterSectors },
            { id: 'banks', label: dict.search.filterBanks },
            { id: 'insurance', label: dict.search.filterInsurance },
            { id: 'procedures', label: dict.search.filterProcedures },
            { id: 'tools', label: dict.search.filterTools },
            { id: 'videos', label: dict.search.filterVideos },
            { id: 'notices', label: dict.search.filterNotices },
            { id: 'trains', label: dict.search.filterTrains },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-4 divide-y divide-slate-100 dark:divide-slate-800/60">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400">
              <p className="text-base font-medium">{dict.search.noResults} &ldquo;{query}&rdquo;</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                <span className="text-xs text-slate-400 w-full mb-1">{dict.search.popularSearches}</span>
                {dict.search.popularItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(item)}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            filteredItems.slice(0, 30).map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.url)}
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/70 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/50 text-slate-600 dark:text-slate-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-emerald-200/50 dark:group-hover:bg-emerald-900/50 shrink-0">
                          {item.categoryLabel}
                        </span>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base truncate min-w-0 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 ps-2">
                    {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>{filteredItems.length} {dict.search.resultsCount}</span>
          <span>{dict.siteName}</span>
        </div>
      </div>
    </div>
  );
}
