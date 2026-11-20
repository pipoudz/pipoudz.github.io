'use client';

import React from 'react';
import { Sparkles, Users, Clock, Coins, Monitor, FileCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';

interface QuickSummaryBoxProps {
  lang: Language;
  targetAudience: string;
  processingTime: string;
  fees: string;
  channel: string;
  keyRequirement: string;
  officialUrl?: string;
}

export default function QuickSummaryBox({
  lang,
  targetAudience,
  processingTime,
  fees,
  channel,
  keyRequirement,
  officialUrl,
}: QuickSummaryBoxProps) {
  const dict = getDictionary(lang);

  return (
    <section
      aria-label={dict.quickSummary.title}
      className="my-6 p-5 sm:p-6 rounded-2xl bg-linear-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 dark:border-emerald-500/20 shadow-md relative overflow-hidden"
    >
      {/* Structural GEO Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-2.5 border-b border-emerald-500/20">
        <div className="inline-flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-black tracking-wide uppercase">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>{dict.quickSummary.title}</span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{dict.quickSummary.verifiedService}</span>
        </div>
      </div>

      {/* Grid of Key Facts for AI Engines and Quick Reading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        {/* Target Audience */}
        <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>{dict.quickSummary.targetAudience}</span>
          </div>
          <p className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            {targetAudience}
          </p>
        </div>

        {/* Processing Time */}
        <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{dict.quickSummary.processingTime}</span>
          </div>
          <p className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            {processingTime}
          </p>
        </div>

        {/* Fees */}
        <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">
            <Coins className="w-3.5 h-3.5 text-emerald-600" />
            <span>{dict.quickSummary.fees}</span>
          </div>
          <p className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            {fees}
          </p>
        </div>

        {/* Channel */}
        <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">
            <Monitor className="w-3.5 h-3.5 text-emerald-600" />
            <span>{dict.quickSummary.channel}</span>
          </div>
          <p className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            {channel}
          </p>
        </div>

        {/* Key Requirement */}
        <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs sm:col-span-2">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">
            <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{dict.quickSummary.keyRequirement}</span>
          </div>
          <p className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            {keyRequirement}
          </p>
        </div>
      </div>

      {/* Official Portal Button */}
      {officialUrl && (
        <div className="mt-4 pt-3 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {lang === 'ar' ? 'الوصول المباشر للمنصة الرسمية المعنية' : 'Accès direct à la plateforme publique concernée'}
          </span>
          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all hover:gap-2.5"
          >
            <span>{dict.quickSummary.officialPortal}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </section>
  );
}
