import React from 'react';
import { BookOpen, CheckCircle2, ListChecks, Wrench, AlertTriangle } from 'lucide-react';
import { Language, RichGuideContent } from '@/lib/types';

interface RichGuideSectionsProps {
  lang: Language;
  guide: RichGuideContent;
  entityName: string;
  includeSteps?: boolean;
}

export default function RichGuideSections({
  lang,
  guide,
  entityName,
  includeSteps = true,
}: RichGuideSectionsProps) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-8 pt-2">
      {/* Contextual Human Guide Introduction */}
      <section className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
          <BookOpen className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            {isAr
              ? `الدليل الشامل لاستخدام خدمات ${entityName}`
              : `Guide pratique complet : ${entityName}`}
          </span>
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {guide.intro[lang].map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Eligibility & Required Documents Checklist */}
      <section className="p-5 sm:p-7 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <ListChecks className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            {isAr
              ? 'الوثائق والمتطلبات الأساسية قبل البدء'
              : 'Liste de contrôle : pièces et prérequis avant de commencer'}
          </span>
        </h2>
        <ul className="space-y-2.5">
          {guide.eligibilityChecklist[lang].map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Step-by-Step Usage Guide */}
      {includeSteps && guide.stepByStepGuide.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <Wrench className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              {isAr
                ? 'خطوات التسجيل والتقديم الإلكتروني خطوة بخطوة'
                : 'Procédure pratique étape par étape en ligne'}
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {guide.stepByStepGuide.map((step, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5"
              >
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                  {step.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Troubleshooting & Common Issues */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
          <span>
            {isAr
              ? 'حلول المشاكل التقنية والإدارية الشائعة'
              : 'Dépannage et solutions aux blocages fréquents'}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guide.troubleshooting.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/10 border border-amber-200/70 dark:border-amber-900/40 space-y-2"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm leading-snug">
                {item.issue[lang]}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.solution[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
