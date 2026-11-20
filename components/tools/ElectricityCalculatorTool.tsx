'use client';

import React, { useState } from 'react';
import { Zap, Flame, FileText, Printer, CheckCircle, Info } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { calculateSonelgazBill } from '@/lib/calculators';

interface ElectricityCalculatorToolProps {
  lang: Language;
}

export default function ElectricityCalculatorTool({ lang }: ElectricityCalculatorToolProps) {
  const dict = getDictionary(lang);
  const [elecKwh, setElecKwh] = useState<number>(380);
  const [gasTherms, setGasTherms] = useState<number>(2400);

  const bill = calculateSonelgazBill(Number(elecKwh) || 0, Number(gasTherms) || 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Inputs Form */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-500" />
          <span>{lang === 'ar' ? 'بيانات مؤشرات العداد والاستهلاك الفصلي' : 'Consommation Trimestrielle Électricité & Gaz'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Electricity Input */}
          <div className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>{lang === 'ar' ? 'استهلاك الكهرباء (كيلوواط ساعي - kWh):' : 'Consommation Électricité (kWh) :'}</span>
              </label>
              <span className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400">
                {elecKwh} kWh
              </span>
            </div>
            <input
              type="number"
              min="0"
              max="10000"
              value={elecKwh}
              onChange={(e) => setElecKwh(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-base font-bold focus:outline-hidden focus:ring-2 focus:ring-amber-500 mb-2"
            />
            <input
              type="range"
              min="0"
              max="2000"
              step="10"
              value={elecKwh}
              onChange={(e) => setElecKwh(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0 kWh</span>
              <span>500 kWh</span>
              <span>1000 kWh</span>
              <span>2000+ kWh</span>
            </div>
          </div>

          {/* Gas Input */}
          <div className="p-4 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Flame className="w-4 h-4 text-blue-500" />
                <span>{lang === 'ar' ? 'استهلاك الغاز (حريرة - Thermies):' : 'Consommation Gaz (Thermies) :'}</span>
              </label>
              <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-400">
                {gasTherms} Th
              </span>
            </div>
            <input
              type="number"
              min="0"
              max="20000"
              value={gasTherms}
              onChange={(e) => setGasTherms(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-base font-bold focus:outline-hidden focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="range"
              min="0"
              max="10000"
              step="50"
              value={gasTherms}
              onChange={(e) => setGasTherms(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0 Th</span>
              <span>2500 Th</span>
              <span>5000 Th</span>
              <span>10000+ Th</span>
            </div>
          </div>
        </div>
      </div>

      {/* Total Amount Due Banner */}
      <div className="p-6 rounded-2xl bg-linear-to-r from-amber-600 via-amber-700 to-amber-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider block opacity-90 mb-1">
            {lang === 'ar' ? 'المبلغ الإجمالي المستحق للدفع (SONELGAZ)' : 'Montant Total TTC de la Facture Sonelgaz'}
          </span>
          <div className="text-3xl sm:text-4xl font-black font-mono">
            {bill.grandTotal.toLocaleString('fr-DZ', { minimumFractionDigits: 2 })} <span className="text-sm font-normal">DZD</span>
          </div>
          <span className="text-xs opacity-85 mt-1 block">
            {lang === 'ar' ? 'شامل لجميع الأشطر، الرسوم الثابتة، وضريبة TVA وحق الطابع' : 'Toutes taxes comprises (TVA 9% & 19%, redevances et timbre)'}
          </span>
        </div>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition-colors"
        >
          <Printer className="w-4 h-4 text-amber-600" />
          <span>{dict.common.print}</span>
        </button>
      </div>

      {/* Tranches Detail Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'ar' ? 'تفصيل الأشطر والتعريفة الرسمية المطبقة' : 'Décomposition Officielle par Tranche'}</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-start">{lang === 'ar' ? 'الطاقة / الشطر' : 'Énergie / Tranche'}</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center">{lang === 'ar' ? 'الكمية المستهلكة' : 'Volume'}</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center">{lang === 'ar' ? 'سعر الوحدة (دج)' : 'Prix Unitaire (DZD)'}</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center">{lang === 'ar' ? 'نسبة TVA' : 'Taux TVA'}</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-end">{lang === 'ar' ? 'المبلغ بدون رسم (HT)' : 'Montant HT'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
              {/* Electricity Tranches */}
              {bill.elecTranches.map((t) => (
                <tr key={`elec-${t.tranche}`} className={t.kwh === 0 ? 'opacity-40' : ''}>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 font-sans font-medium flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>{lang === 'ar' ? `كهرباء - الشطر ${t.tranche}` : `Électricité - Tranche ${t.tranche}`}</span>
                  </td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-center">{t.kwh} kWh</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-center">{t.rate.toFixed(4)}</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-center text-xs font-semibold">{t.tvaRate * 100}%</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-end font-semibold">{t.amount.toFixed(2)} DZD</td>
                </tr>
              ))}
              {/* Gas Tranches */}
              {bill.gasTranches.map((t) => (
                <tr key={`gas-${t.tranche}`} className={t.therms === 0 ? 'opacity-40' : ''}>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 font-sans font-medium flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-blue-500" />
                    <span>{lang === 'ar' ? `غاز - الشطر ${t.tranche}` : `Gaz - Tranche ${t.tranche}`}</span>
                  </td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-center">{t.therms} Th</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-center">{t.rate.toFixed(4)}</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-center text-xs font-semibold">{t.tvaRate * 100}%</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-end font-semibold">{t.amount.toFixed(2)} DZD</td>
                </tr>
              ))}
              {/* Fixed charges & Taxes */}
              <tr className="bg-slate-50 dark:bg-slate-800/40 font-semibold font-sans">
                <td className="p-2.5 border border-slate-200 dark:border-slate-800" colSpan={4}>
                  {lang === 'ar' ? 'الرسوم الثابتة للكهرباء والغاز (Prime Fixe)' : 'Primes Fixes Réglementées'}
                </td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-end font-mono">
                  {(bill.fixedElecFee + bill.fixedGasFee).toFixed(2)} DZD
                </td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/40 font-semibold font-sans">
                <td className="p-2.5 border border-slate-200 dark:border-slate-800" colSpan={4}>
                  {lang === 'ar' ? 'مجموع ضريبة القيمة المضافة (TVA 9% + 19%)' : 'Total TVA (9% & 19%)'}
                </td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-end font-mono text-red-600">
                  +{(bill.tva9 + bill.tva19).toFixed(2)} DZD
                </td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/40 font-semibold font-sans">
                <td className="p-2.5 border border-slate-200 dark:border-slate-800" colSpan={4}>
                  {lang === 'ar' ? 'حقوق الطابع الجبائي (Droit de Timbre)' : 'Droit de Timbre'}
                </td>
                <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-end font-mono">
                  {bill.stampDuty.toFixed(2)} DZD
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-amber-50 dark:bg-amber-950/40 text-slate-900 dark:text-slate-100 font-bold text-sm sm:text-base">
                <td className="p-3.5 border border-slate-200 dark:border-slate-700 font-sans" colSpan={4}>
                  {lang === 'ar' ? 'المبلغ النهائي الواجب تسديده (TTC):' : 'NET À PAYER TTC :'}
                </td>
                <td className="p-3.5 border border-slate-200 dark:border-slate-700 text-end font-mono text-amber-700 dark:text-amber-400">
                  {bill.grandTotal.toLocaleString('fr-DZ', { minimumFractionDigits: 2 })} DZD
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
