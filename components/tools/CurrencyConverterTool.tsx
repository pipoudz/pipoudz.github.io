'use client';

import React, { useState } from 'react';
import { ArrowRightLeft, TrendingUp, Landmark, AlertCircle, RefreshCw } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { ALGERIAN_CURRENCIES, convertAlgerianCurrency } from '@/lib/calculators';

interface CurrencyConverterToolProps {
  lang: Language;
}

export default function CurrencyConverterTool({ lang }: CurrencyConverterToolProps) {
  const dict = getDictionary(lang);
  const [amount, setAmount] = useState<number>(100);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('EUR');
  const [direction, setDirection] = useState<'to_dzd' | 'from_dzd'>('to_dzd');
  const [marketType, setMarketType] = useState<'square' | 'official'>('square');

  const { result, rate } = convertAlgerianCurrency(
    Number(amount) || 0,
    selectedCurrency,
    direction,
    marketType
  );

  const toggleDirection = () => {
    setDirection((prev) => (prev === 'to_dzd' ? 'from_dzd' : 'to_dzd'));
  };

  const curr = ALGERIAN_CURRENCIES.find((c) => c.code === selectedCurrency) || ALGERIAN_CURRENCIES[0];

  return (
    <div className="space-y-6">
      {/* Market Selector Tabs */}
      <div className="flex rounded-2xl bg-slate-100 dark:bg-slate-800 p-1.5 border border-slate-200 dark:border-slate-700 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setMarketType('square')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            marketType === 'square'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>{lang === 'ar' ? 'سوق السكوار (الموازي)' : 'Marché Parallèle (Square)'}</span>
        </button>
        <button
          type="button"
          onClick={() => setMarketType('official')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            marketType === 'official'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
          }`}
        >
          <Landmark className="w-4 h-4" />
          <span>{lang === 'ar' ? 'بنك الجزائر (الرسمي)' : 'Banque d\'Algérie (Officiel)'}</span>
        </button>
      </div>

      {/* Main Converter Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
          {/* From Input */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              {direction === 'to_dzd' ? curr.name[lang] : (lang === 'ar' ? 'دينار جزائري (DZD)' : 'Dinar Algérien (DZD)')}
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono text-lg font-bold focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
              <span className="absolute end-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                {direction === 'to_dzd' ? curr.symbol : 'DZD'}
              </span>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center sm:col-span-1 pt-2 sm:pt-4">
            <button
              type="button"
              onClick={toggleDirection}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700 shadow-xs"
              title={lang === 'ar' ? 'عكس اتجاه التحويل' : 'Inverser la conversion'}
            >
              <ArrowRightLeft className="w-5 h-5" />
            </button>
          </div>

          {/* To Input (Result) */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              {direction === 'to_dzd' ? (lang === 'ar' ? 'المبلغ بالدينار الجزائري (DZD)' : 'Montant en Dinars (DZD)') : curr.name[lang]}
            </label>
            <div className="relative">
              <input
                type="text"
                readOnly
                value={result.toLocaleString('fr-DZ', { minimumFractionDigits: 2 })}
                className="w-full px-4 py-3 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 font-mono text-lg font-black focus:outline-hidden"
              />
              <span className="absolute end-3 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-600">
                {direction === 'to_dzd' ? 'DZD' : curr.symbol}
              </span>
            </div>
          </div>
        </div>

        {/* Currency Selector Chips */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
            {lang === 'ar' ? 'اختر العملة الأجنبية:' : 'Sélectionner la devise :'}
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
            {ALGERIAN_CURRENCIES.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => setSelectedCurrency(c.code)}
                className={`py-2 px-1 rounded-xl text-center border font-bold text-xs transition-colors ${
                  selectedCurrency === c.code
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                <div>{c.code}</div>
                <div className="text-[10px] font-normal opacity-80">{c.symbol}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Rate Display */}
        <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span>{lang === 'ar' ? 'سعر الصرف المعتمد حاليا:' : 'Taux appliqué :'}</span>
          <span className="font-mono font-bold text-slate-900 dark:text-slate-100 text-sm">
            1 {curr.code} = {rate.toFixed(2)} DZD ({marketType === 'square' ? (lang === 'ar' ? 'السكوار' : 'Square') : (lang === 'ar' ? 'رسمي' : 'Officiel')})
          </span>
        </div>
      </div>

      {/* Comparison Table: Official vs Square for All Currencies */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl mx-auto">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'ar' ? 'جدول مقارنة أسعار العملات في الجزائر اليوم' : 'Tableau Comparatif des Cours de Change en Algérie'}</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-start">{lang === 'ar' ? 'العملة' : 'Devise'}</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center">{lang === 'ar' ? 'شراء (رسمي)' : 'Achat (Officiel)'}</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center">{lang === 'ar' ? 'بيع (رسمي)' : 'Vente (Officiel)'}</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center text-emerald-600 font-bold">{lang === 'ar' ? 'شراء (سكوار)' : 'Achat (Square)'}</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700 text-center text-emerald-600 font-bold">{lang === 'ar' ? 'بيع (سكوار)' : 'Vente (Square)'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono text-center">
              {ALGERIAN_CURRENCIES.map((c) => (
                <tr key={c.code} className={selectedCurrency === c.code ? 'bg-emerald-50/50 dark:bg-emerald-950/20 font-bold' : ''}>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-start font-sans">
                    <span className="font-bold">{c.code}</span> - {c.name[lang]}
                  </td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800">{c.officialBuy.toFixed(2)}</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800">{c.officialSell.toFixed(2)}</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-emerald-700 dark:text-emerald-400 font-semibold">{c.squareBuy.toFixed(2)}</td>
                  <td className="p-2.5 border border-slate-200 dark:border-slate-800 text-emerald-700 dark:text-emerald-400 font-semibold">{c.squareSell.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
