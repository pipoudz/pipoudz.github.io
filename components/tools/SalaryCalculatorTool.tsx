'use client';

import React, { useState } from 'react';
import { Calculator, Printer, Shield, Receipt, HelpCircle, CheckCircle } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { calculateAlgerianSalary } from '@/lib/calculators';

interface SalaryCalculatorToolProps {
  lang: Language;
}

export default function SalaryCalculatorTool({ lang }: SalaryCalculatorToolProps) {
  const dict = getDictionary(lang);
  const [baseSalary, setBaseSalary] = useState<number>(45000);
  const [bonuses, setBonuses] = useState<number>(12000);
  const [allowances, setAllowances] = useState<number>(5000);
  const [employeeName, setEmployeeName] = useState<string>('محمد أمين / Amine');
  const [companyName, setCompanyName] = useState<string>('مؤسسة وطنية / Entreprise');

  const result = calculateAlgerianSalary({
    baseSalary: Number(baseSalary) || 0,
    bonuses: Number(bonuses) || 0,
    allowances: Number(allowances) || 0,
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Input Parameters Form */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'ar' ? 'عناصر الأجر والراتب الشهري' : 'Éléments de Rémunération Mensuelle'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {lang === 'ar' ? 'الراتب الأساسي (Salaire de Base):' : 'Salaire de Base :'}
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="500"
                value={baseSalary}
                onChange={(e) => setBaseSalary(Number(e.target.value))}
                className="w-full ps-3.5 pe-14 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono text-base font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
              <span className="absolute end-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                DZD
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {lang === 'ar' ? 'العلاوات والمنح (المردودية، النقل):' : 'Primes & Indemnités (IEP, Panier) :'}
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="500"
                value={bonuses}
                onChange={(e) => setBonuses(Number(e.target.value))}
                className="w-full ps-3.5 pe-14 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono text-base font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
              <span className="absolute end-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                DZD
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {lang === 'ar' ? 'تعويضات أخرى خاضعة للاقتطاع:' : 'Autres Indemnités Imposables :'}
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="500"
                value={allowances}
                onChange={(e) => setAllowances(Number(e.target.value))}
                className="w-full ps-3.5 pe-14 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono text-base font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
              <span className="absolute end-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                DZD
              </span>
            </div>
          </div>
        </div>

        {/* Informative Note */}
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            {lang === 'ar'
              ? 'الحساب متوافق 100% مع قانون المالية الجزائري: اقتطاع 9% للضمان الاجتماعي كناس، وإعفاء كامل للرواتب الأقل من 30,000 دج من ضريبة IRG.'
              : 'Calcul conforme à la Loi de Finances algérienne : 9% CNAS sécurité sociale, exonération totale de l\'IRG pour les salaires ≤ 30 000 DZD.'}
          </span>
        </p>
      </div>

      {/* Main KPI Summary Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Gross */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
            {lang === 'ar' ? 'الأجر الخام الإجمالي (Brut)' : 'Salaire Brut Global'}
          </span>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 font-mono tabular-nums">
            {result.grossSalary.toLocaleString('fr-DZ')} <span className="text-xs font-normal">DZD</span>
          </div>
          <span className="text-xs text-slate-400 mt-1 block">
            {lang === 'ar' ? 'الأساسي + العلاوات والمنح' : 'Base + Primes cumulées'}
          </span>
        </div>

        {/* Deductions (CNAS + IRG) */}
        <div className="p-5 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 shadow-sm">
          <span className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider block mb-1">
            {lang === 'ar' ? 'مجموع الاقتطاعات (CNAS + IRG)' : 'Total Retenues'}
          </span>
          <div className="text-xl sm:text-2xl font-black text-red-600 dark:text-red-400 font-mono tabular-nums">
            -{(result.cnasDeduction + result.irgNet).toLocaleString('fr-DZ')} <span className="text-xs font-normal">DZD</span>
          </div>
          <span className="text-xs text-red-600/80 dark:text-red-400/80 mt-1 block">
            CNAS: {result.cnasDeduction.toLocaleString()} | IRG: {result.irgNet.toLocaleString()}
          </span>
        </div>

        {/* Net Salary Highlight */}
        <div className="p-5 rounded-2xl bg-linear-to-br from-emerald-600 to-emerald-800 text-white shadow-lg shadow-emerald-700/20">
          <span className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-90">
            {lang === 'ar' ? 'الراتب الصافي للدفع (Net à Payer)' : 'Salaire Net à Payer'}
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono tabular-nums">
            {result.netSalary.toLocaleString('fr-DZ')} <span className="text-sm font-normal">DZD</span>
          </div>
          <span className="text-xs opacity-90 mt-1 block">
            {lang === 'ar' ? 'المبلغ الفعلي المحول للحساب البنكي أو CCP' : 'Montant viré sur compte CCP ou bancaire'}
          </span>
        </div>
      </div>

      {/* Official Printable Payslip (Fiche de Paie) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <Receipt className="w-5 h-5 text-emerald-600 shrink-0" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              {lang === 'ar' ? 'بيان تفصيلي للأجر (كشف الراتب - Fiche de Paie)' : 'Bulletin de Paie Détaillé'}
            </h3>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition-colors shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{dict.common.print}</span>
          </button>
        </div>

        {/* Semantic Table for Calculation Breakdown */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px] sm:min-w-0 text-xs sm:text-sm text-start border-collapse border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-start">
                  {lang === 'ar' ? 'الرمز والبيان' : 'Code & Désignation'}
                </th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center">
                  {lang === 'ar' ? 'الأساس (Base)' : 'Base'}
                </th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center">
                  {lang === 'ar' ? 'النسبة (Taux)' : 'Taux'}
                </th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-end">
                  {lang === 'ar' ? 'المستحقات (Gains)' : 'Gains'}
                </th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-end">
                  {lang === 'ar' ? 'الاقتطاعات (Retenues)' : 'Retenues'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-800 font-sans font-medium">
                  {lang === 'ar' ? '100 - الراتب الأساسي' : '100 - Salaire de Base'}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">{result.baseSalary.toLocaleString()}</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">100%</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end font-semibold text-emerald-600">
                  {result.baseSalary.toLocaleString()}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end">-</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-800 font-sans font-medium">
                  {lang === 'ar' ? '200 - علاوة المردودية والمنح' : '200 - Primes et Indemnités'}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">{bonuses.toLocaleString()}</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end font-semibold text-emerald-600">
                  {bonuses.toLocaleString()}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end">-</td>
              </tr>
              {allowances > 0 && (
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-sans font-medium">
                    {lang === 'ar' ? '250 - تعويضات أخرى' : '250 - Autres Primes'}
                  </td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">{allowances.toLocaleString()}</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">-</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 text-end font-semibold text-emerald-600">
                    {allowances.toLocaleString()}
                  </td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 text-end">-</td>
                </tr>
              )}
              {/* Gross row */}
              <tr className="bg-slate-50/50 dark:bg-slate-800/30 font-semibold">
                <td className="p-3 border border-slate-200 dark:border-slate-800 font-sans" colSpan={3}>
                  {lang === 'ar' ? 'الأجر الخام الإجمالي (Salaire Brut)' : 'Total Brut'}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end text-emerald-700 dark:text-emerald-400">
                  {result.grossSalary.toLocaleString()}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end">-</td>
              </tr>
              {/* CNAS */}
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-800 font-sans font-medium">
                  {lang === 'ar' ? '500 - اشتراك الضمان الاجتماعي (CNAS)' : '500 - Sécurité Sociale (CNAS)'}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">{result.grossSalary.toLocaleString()}</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-center text-red-500 font-semibold">9.00%</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end">-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end text-red-600 font-semibold">
                  {result.cnasDeduction.toLocaleString()}
                </td>
              </tr>
              {/* Taxable row */}
              <tr className="bg-slate-50/50 dark:bg-slate-800/30 font-semibold">
                <td className="p-3 border border-slate-200 dark:border-slate-800 font-sans" colSpan={3}>
                  {lang === 'ar' ? 'الأجر الخاضع للضريبة (Salaire Imposable)' : 'Base Imposable IRG'}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end">
                  {result.taxableSalary.toLocaleString()}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end">-</td>
              </tr>
              {/* IRG */}
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-800 font-sans font-medium">
                  {lang === 'ar' ? '600 - الضريبة على الدخل الإجمالي (IRG Net)' : '600 - Impôt sur le Revenu (IRG)'}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">{result.taxableSalary.toLocaleString()}</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-center">
                  {lang === 'ar' ? 'تدريجي' : 'Barème'}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end">-</td>
                <td className="p-3 border border-slate-200 dark:border-slate-800 text-end text-red-600 font-semibold">
                  {result.irgNet.toLocaleString()}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-emerald-50 dark:bg-emerald-950/40 text-slate-900 dark:text-slate-100 font-bold text-sm sm:text-base">
                <td className="p-3.5 border border-slate-200 dark:border-slate-700 font-sans" colSpan={3}>
                  {lang === 'ar' ? 'الصافي للدفع (NET À PAYER EN DZD):' : 'NET À PAYER (DZD) :'}
                </td>
                <td className="p-3.5 border border-slate-200 dark:border-slate-700 text-end font-mono text-emerald-700 dark:text-emerald-400" colSpan={2}>
                  {result.netSalary.toLocaleString('fr-DZ')} DZD
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
