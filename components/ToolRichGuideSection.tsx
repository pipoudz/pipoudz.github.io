import React from 'react';
import { BookOpen, Calculator, Lightbulb, CheckCircle2, Table as TableIcon } from 'lucide-react';
import { Language, ToolRichGuide } from '@/lib/types';

interface ToolRichGuideSectionProps {
  lang: Language;
  guide: ToolRichGuide;
  toolName: string;
}

export default function ToolRichGuideSection({
  lang,
  guide,
  toolName,
}: ToolRichGuideSectionProps) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-6 pt-2">
      {/* Educational Explanation */}
      <section className="p-4 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
          <BookOpen className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            {isAr ? `شرح الأداة وكيفية استخدام ${toolName}` : `Comprendre et utiliser : ${toolName}`}
          </span>
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {guide.explanation[lang].map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* Formula & Practical Algerian Example */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base flex items-center gap-2">
            <Calculator className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{guide.formulaTitle[lang]}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {guide.formulaText[lang]}
          </p>
        </section>

        <section className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 space-y-2.5">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{guide.practicalExample.title[lang]}</span>
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {guide.practicalExample.scenario[lang]}
          </p>
          <p className="text-xs sm:text-sm font-medium text-emerald-900 dark:text-emerald-300 leading-relaxed">
            {guide.practicalExample.result[lang]}
          </p>
        </section>
      </div>

      {/* Optional Reference / Example Table */}
      {guide.comparisonTable && (
        <section className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base sm:text-lg flex items-center gap-2">
            <TableIcon className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{guide.comparisonTable.title[lang]}</span>
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <table className="w-full min-w-[460px] sm:min-w-0 text-xs sm:text-sm text-start">
              <thead className="bg-slate-50 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  {guide.comparisonTable.headers.map((header, idx) => (
                    <th key={idx} className="p-3 text-start font-bold text-slate-900 dark:text-slate-100">
                      {header[lang]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {guide.comparisonTable.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="p-3 text-slate-700 dark:text-slate-300 font-medium">
                        {cell[lang]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Tips Checklist */}
      <section className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
          {isAr ? 'إرشادات عملية للحصول على أدق نتيجة' : 'Conseils pratiques d’utilisation'}
        </h3>
        <ul className="space-y-2">
          {guide.tips[lang].map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
