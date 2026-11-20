'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X, Globe, Building2, Landmark, Shield, FileText, Wrench, Train, Video, Bell, Smartphone, BookOpen, Star } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import ThemeToggle from './ThemeToggle';

const SearchBarModal = dynamic(() => import('./SearchBarModal'), { ssr: false });

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dict = getDictionary(lang);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Compute equivalent route for opposite language
  const targetLang: Language = lang === 'ar' ? 'fr' : 'ar';
  let targetPath = `/${targetLang}/`;

  if (pathname) {
    if (pathname.startsWith('/ar/')) {
      targetPath = pathname.replace(/^\/ar\//, '/fr/');
    } else if (pathname.startsWith('/fr/')) {
      targetPath = pathname.replace(/^\/fr\//, '/ar/');
    } else if (pathname === '/ar') {
      targetPath = '/fr/';
    } else if (pathname === '/fr') {
      targetPath = '/ar/';
    }
  }

  const handleLanguageSwitch = () => {
    router.push(targetPath);
  };

  const navLinks = [
    { href: `/${lang}/sectors/`, label: dict.nav.sectors, icon: Building2 },
    { href: `/${lang}/sectors/bank/`, label: dict.nav.banks, icon: Landmark },
    { href: `/${lang}/sectors/assurance/`, label: dict.nav.insurance, icon: Shield },
    { href: `/${lang}/process/`, label: dict.nav.procedures, icon: FileText },
    { href: `/${lang}/sectors/sntf-schedule/`, label: dict.nav.sntf, icon: Train },
    { href: `/${lang}/pages/tools/`, label: dict.nav.tools, icon: Wrench },
    { href: `/${lang}/blog/`, label: dict.nav.blog, icon: BookOpen },
    { href: `/${lang}/pages/video/`, label: dict.nav.videos, icon: Video },
    { href: `/${lang}/pages/education-notices/`, label: dict.nav.education, icon: Bell },
    { href: `/${lang}/pages/guide/`, label: dict.nav.guide, icon: Smartphone },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        {/* National Top Banner Accent */}
        <div className="h-1 w-full bg-linear-to-r from-emerald-600 via-white to-red-600" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            {/* Logo & National Badge */}
            <Link
              href={`/${lang}/`}
              className="flex items-center gap-2.5 sm:gap-3 group min-w-0 focus:outline-hidden"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform shrink-0">
                DZ
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-lg font-black tracking-tight text-slate-900 dark:text-slate-100 leading-tight truncate">
                  {lang === 'ar' ? 'بوابة الرقمنة الجزائرية' : 'Portail DZ Services'}
                </span>
                <span className="hidden min-[380px]:block text-[11px] font-medium text-emerald-700 dark:text-emerald-400 truncate">
                  {lang === 'ar' ? 'الدليل الوطني الموحد' : 'Services Publics Officiels'}
                </span>
              </div>
            </Link>

            {/* Live Search Trigger Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm transition-colors shadow-2xs group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{dict.nav.search}</span>
                </div>
                <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500">
                  {dict.nav.searchShortcut}
                </kbd>
              </button>
            </div>

            {/* Actions: Lang Switcher, Theme Toggle, Mobile Menu Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Mobile Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 touch-manipulation"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-emerald-600" />
              </button>

              {/* Seamless Language Switcher Button */}
              <button
                type="button"
                onClick={handleLanguageSwitch}
                className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors text-xs sm:text-sm font-semibold shadow-2xs touch-manipulation"
                title={dict.common.switchToOther}
              >
                <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{dict.common.switchLanguage}</span>
              </button>

              {/* Favorites Shortcut Button (Desktop/Tablet; mobile access is inside the drawer) */}
              <Link
                href={`/${lang}/pages/favorites/`}
                prefetch={false}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-xs font-semibold shadow-2xs"
                title={lang === 'ar' ? 'مفضلاتي المحفوظة' : 'Mes Favoris'}
              >
                <Star className="w-4 h-4 text-amber-500" />
                <span>{lang === 'ar' ? 'مفضلاتي' : 'Favoris'}</span>
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden touch-manipulation"
                aria-label="Toggle Navigation"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation Row */}
          <nav className="hidden lg:flex flex-wrap items-center gap-x-1 gap-y-1 pb-2 pt-1 text-xs font-medium border-t border-slate-100 dark:border-slate-900/60">
            {navLinks.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              const IconComp = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold shadow-2xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-4 duration-150">
            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const IconComp = link.icon;
                const isActive = pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-2 p-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span className="truncate">{link.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <Link prefetch={false} href={`/${lang}/pages/about/`} onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">
                {dict.nav.about}
              </Link>
              <Link prefetch={false} href={`/${lang}/pages/disclaimer/`} onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">
                {dict.nav.disclaimer}
              </Link>
              <Link prefetch={false} href={`/${lang}/pages/contact/`} onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">
                {dict.nav.contact}
              </Link>
              <Link prefetch={false} href={`/${lang}/pages/favorites/`} onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">
                {lang === 'ar' ? 'مفضلاتي' : 'Favoris'}
              </Link>
              <Link prefetch={false} href={`/${lang}/pages/statistics/`} onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">
                {lang === 'ar' ? 'الإحصائيات' : 'Statistiques'}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Bar Modal (lazy-loaded on open) */}
      {isSearchOpen && (
        <SearchBarModal
          lang={lang}
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
}
