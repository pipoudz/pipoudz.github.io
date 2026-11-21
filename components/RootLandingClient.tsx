'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function RootLandingClient() {
  const router = useRouter();

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('dz_portal_lang');
    } catch {
      saved = null;
    }
    if (saved === 'fr') {
      router.replace('/fr/');
    } else {
      router.replace('/ar/');
    }
  }, [router]);

  const saveLang = (l: 'ar' | 'fr') => {
    try {
      localStorage.setItem('dz_portal_lang', l);
    } catch {
      // Ignore storage access errors in restricted iframes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white font-black text-2xl mx-auto shadow-lg shadow-emerald-700/25">
          DZ
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
            البوابة الجزائرية للخدمات الرقمية
          </h1>
          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-1">
            Portail Algérien des Services Numériques
          </p>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          اختر لغة التصفح المفضلة للمتابعة • Choisissez votre langue de navigation :
        </p>

        <div className="grid grid-cols-1 min-[340px]:grid-cols-2 gap-3 pt-2">
          <Link
            href="/ar/"
            onClick={() => saveLang('ar')}
            className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex flex-col items-center gap-1 group"
          >
            <span className="text-base">العربية</span>
            <span className="text-[10px] opacity-80 flex items-center gap-1">
              <span>الدخول بالعربية</span>
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/fr/"
            onClick={() => saveLang('fr')}
            className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all flex flex-col items-center gap-1 group"
          >
            <span className="text-base">Français</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <span>Continuer</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
