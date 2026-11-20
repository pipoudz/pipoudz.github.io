'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, ShieldAlert, HeartPulse, Zap, Droplets, ExternalLink, Globe } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const dict = getDictionary(lang);

  const emergencyNumbers = [
    { name: dict.emergency.protection, number: '14', icon: ShieldAlert, color: 'text-amber-500' },
    { name: dict.emergency.police, number: '17', icon: PhoneCall, color: 'text-blue-500' },
    { name: dict.emergency.gendarmerie, number: '1055', icon: PhoneCall, color: 'text-emerald-500' },
    { name: dict.emergency.samu, number: '1021', icon: HeartPulse, color: 'text-red-500' },
    { name: dict.emergency.sonelgaz, number: '3303', icon: Zap, color: 'text-yellow-500' },
    { name: dict.emergency.seaal, number: '1594', icon: Droplets, color: 'text-cyan-500' },
  ];

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Emergency Helpline Bar */}
      <div className="bg-slate-950 py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
            <PhoneCall className="w-4 h-4 text-red-400" />
            <span>{dict.emergency.title}:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            {emergencyNumbers.map((em, idx) => (
              <a
                key={idx}
                href={`tel:${em.number}`}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors text-slate-200"
              >
                <em.icon className={`w-3.5 h-3.5 ${em.color}`} />
                <span className="text-slate-400">{em.name}:</span>
                <span className="font-bold font-mono text-white">{em.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-emerald-900/50">
                DZ
              </div>
              <div>
                <h3 className="font-bold text-white text-lg tracking-tight">{dict.siteName}</h3>
                <p className="text-xs text-emerald-400">
                  {lang === 'ar'
                    ? 'الجمهورية الجزائرية الديمقراطية الشعبية'
                    : 'République Algérienne Démocratique et Populaire'}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              {dict.siteTagline}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {dict.common.disclaimer}
            </p>
          </div>

          {/* Quick Sectors */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3 uppercase tracking-wider text-emerald-400">
              {dict.nav.sectors}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link prefetch={false} href={`/${lang}/sectors/aadl/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'سكنات عدل AADL' : 'Logements AADL'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/sectors/cnas/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'الضمان الاجتماعي كناس CNAS' : 'Sécurité Sociale CNAS'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/sectors/anem/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'التشغيل ومنحة البطالة ANEM' : 'Emploi & Allocation ANEM'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/sectors/sonalgaz/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'توزيع الكهرباء والغاز سونلغاز' : 'Électricité & Gaz Sonelgaz'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/sectors/poste/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'بريد الجزائر والبطاقة الذهبية' : 'Algérie Poste & Edahabia'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/sectors/`} className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 mt-1">
                  <span>{dict.sections.viewAll}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Tools */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3 uppercase tracking-wider text-emerald-400">
              {dict.nav.tools}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link prefetch={false} href={`/${lang}/pages/tools/calculators/number-to-words/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'تحويل الأرقام إلى مبالغ (دينار)' : 'Nombres en Lettres Dinar'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/tools/calculators/salary-calculator/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'حاسبة الراتب الصافي واقتطاع IRG' : 'Calculateur Salaire Net & IRG'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/tools/calculators/electricity-calculator/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'حاسبة فاتورة سونلغاز بالأشطر' : 'Facture Sonelgaz par Tranches'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/tools/calculators/currency-converter/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'محول العملات والسكوار' : 'Devises & Marché Parallèle'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/sectors/sntf-schedule/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'جدول رحلات قطارات SNTF' : 'Horaires Trains SNTF'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/tools/`} className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 mt-1">
                  <span>{dict.sections.viewAll}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Legal */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3 uppercase tracking-wider text-emerald-400">
              {lang === 'ar' ? 'معلومات وبنود' : 'Informations'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link prefetch={false} href={`/${lang}/blog/`} className="hover:text-emerald-400 transition-colors">
                  {dict.nav.blog}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/guide/`} className="hover:text-emerald-400 transition-colors">
                  {dict.nav.guide}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/about/`} className="hover:text-emerald-400 transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/disclaimer/`} className="hover:text-emerald-400 transition-colors">
                  {dict.nav.disclaimer}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/contact/`} className="hover:text-emerald-400 transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/privacy/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'سياسة الخصوصية وحماية المعطيات' : 'Politique de Confidentialité'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/terms/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'شروط الاستخدام' : 'Conditions d\'Utilisation'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/favorites/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'مفضلاتي المحفوظة' : 'Mes Favoris'}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={`/${lang}/pages/statistics/`} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'إحصائيات الرقمنة في الجزائر' : 'Statistiques du Portail'}
                </Link>
              </li>
              <li>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sitemap.xml`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Sitemap XML</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {dict.common.allRightsReserved}.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span>{lang === 'ar' ? 'النسخة ثنائية اللغة (عربي / فرنسي)' : 'Édition Bilingue (Arabe / Français)'}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
