'use client';

import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, FileText, ExternalLink } from 'lucide-react';
import { Language } from '@/lib/types';

interface Props {
  lang: Language;
  title: string;
  category: string;
  date: string;
  content: string;
  officialUrl?: string;
}

export default function NoticeReaderClient({
  lang,
  title,
  category,
  date,
  content,
  officialUrl,
}: Props) {
  const isAr = lang === 'ar';
  const [scale, setScale] = useState<number>(1);

  const zoomIn = () => setScale((s) => Math.min(1.5, Number((s + 0.15).toFixed(2))));
  const zoomOut = () => setScale((s) => Math.max(0.85, Number((s - 0.15).toFixed(2))));
  const resetZoom = () => setScale(1);

  return (
    <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
      <div className="px-4 sm:px-6 py-3.5 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
          <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            {isAr
              ? 'وزارة التربية الوطنية — قارئ البلاغ الرسمي'
              : 'Ministère de l’Éducation Nationale — Lecteur du Communiqué'}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={zoomOut}
            disabled={scale <= 0.85}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
            title={isAr ? 'تصغير النص' : 'Réduire le texte'}
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="px-2 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold tabular-nums min-w-[48px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            disabled={scale >= 1.5}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
            title={isAr ? 'تكبير النص' : 'Agrandir le texte'}
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={resetZoom}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            title={isAr ? 'الحجم الافتراضي' : 'Réinitialiser'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-4 overflow-x-auto">
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          {isAr
            ? 'استخدم أزرار التكبير والتصغير أعلاه ثم مرر لقراءة تفاصيل البلاغ الرسمي.'
            : 'Utilisez les boutons de zoom ci-dessus puis faites défiler pour consulter les détails du communiqué officiel.'}
        </p>

        <div
          style={{ fontSize: `${scale}rem` }}
          className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3 transition-all"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            <span className="font-bold text-emerald-700 dark:text-emerald-400">{category}</span>
            <span className="font-mono tabular-nums">{date}</span>
          </div>
          <h3 className="font-black text-slate-900 dark:text-slate-100 leading-snug">
            {title}
          </h3>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-[0.92em]">
            {content}
          </div>
          {officialUrl && (
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <span>{isAr ? 'الانتقال إلى المصدر الرسمي بالوزارة' : 'Consulter la source officielle ministérielle'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
