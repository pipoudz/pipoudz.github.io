'use client';

import React, { useState } from 'react';
import { Copy, Check, Printer, FileText, ArrowRightLeft } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { tafqeetArabic, numberToWordsFrench } from '@/lib/calculators';

interface NumberToWordsToolProps {
  lang: Language;
}

export default function NumberToWordsTool({ lang }: NumberToWordsToolProps) {
  const dict = getDictionary(lang);
  const [amount, setAmount] = useState<string>('125000');
  const [inputUnit, setInputUnit] = useState<'dzd' | 'centimes'>('dzd');
  const [copied, setCopied] = useState(false);
  const [payee, setPayee] = useState<string>('');
  const [showCheque, setShowCheque] = useState(true);

  const numericValue = parseFloat(amount) || 0;
  // If user entered in centimes, convert to dinars: 1 DZD = 100 Centimes
  const amountInDinars = inputUnit === 'centimes' ? numericValue / 100 : numericValue;
  const amountInCentimes = inputUnit === 'dzd' ? numericValue * 100 : numericValue;

  const arabicWords = tafqeetArabic(amountInDinars);
  const frenchWords = numberToWordsFrench(amountInDinars);
  const currentWords = lang === 'ar' ? arabicWords : frenchWords;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentWords);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Input Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {lang === 'ar' ? 'المبلغ المراد تحويله كتابة:' : 'Montant à convertir en toutes lettres :'}
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="125000"
                className="w-full ps-4 pe-20 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-mono text-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
              <span className="absolute end-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                {inputUnit === 'dzd' ? 'DZD' : 'Centimes'}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {lang === 'ar' ? 'وحدة الإدخال المستخدمة:' : 'Unité de saisie :'}
            </label>
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setInputUnit('dzd')}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                  inputUnit === 'dzd'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {lang === 'ar' ? 'دينار جزائري (DZD)' : 'Dinar Algérien (DZD)'}
              </button>
              <button
                type="button"
                onClick={() => setInputUnit('centimes')}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                  inputUnit === 'centimes'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {lang === 'ar' ? 'سنتيم (السوق الشعبي)' : 'Centimes (Usage courant)'}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Amount Conversion Pills */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {amountInDinars.toLocaleString('fr-DZ')} {lang === 'ar' ? 'دج' : 'DZD'}
            </span>
            <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-emerald-700 dark:text-emerald-400 font-mono">
              {amountInCentimes.toLocaleString('fr-DZ')} {lang === 'ar' ? 'سنتيم' : 'Centimes'}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['10000', '50000', '100000', '500000', '1000000'].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => {
                  setAmount(val);
                  setInputUnit('dzd');
                }}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 font-mono"
              >
                {parseInt(val).toLocaleString()} DZD
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result Cards: Arabic and French */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Arabic Tafqeet Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-500/30 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                التفقيط باللغة العربية (دينار جزائري)
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(arabicWords);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-xs text-emerald-700 hover:text-emerald-900 dark:text-emerald-400 flex items-center gap-1 font-semibold shrink-0"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>نسخ</span>
              </button>
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed font-serif break-words">
              &laquo; {arabicWords} &raquo;
            </p>
          </div>
        </div>

        {/* French Text Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                En toutes lettres en Français (DZD)
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(frenchWords);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-xs text-slate-600 hover:text-slate-900 dark:text-slate-300 flex items-center gap-1 font-semibold shrink-0"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copier</span>
              </button>
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed font-sans break-words">
              &laquo; {frenchWords} &raquo;
            </p>
          </div>
        </div>
      </div>

      {/* Copy Alert */}
      {copied && (
        <div className="p-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md animate-in fade-in duration-150">
          <Check className="w-4 h-4" />
          <span>{dict.common.copied}</span>
        </div>
      )}

      {/* Official Cheque / Order Form Preview */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm print:shadow-none print:border-none">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="w-5 h-5 text-emerald-600 shrink-0" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              {lang === 'ar' ? 'معاينة الصك البريدي أو البنكي للطباعة' : 'Aperçu du Chèque Bancaire / Postal'}
            </h3>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{dict.common.print}</span>
          </button>
        </div>

        {/* Simulated Bank/CCP Check Design */}
        <div className="relative p-4 sm:p-6 rounded-xl border-2 border-dashed border-emerald-600/40 bg-emerald-50/20 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-4 font-mono text-sm">
          {/* Top header of check */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              CHÈQUE / صك بنكي - بريدي
            </span>
            <div className="px-3 py-1 bg-white dark:bg-slate-800 rounded-md border border-slate-300 dark:border-slate-700 text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              # {amountInDinars.toLocaleString('fr-DZ', { minimumFractionDigits: 2 })} DZD #
            </div>
          </div>

          {/* Amount in letters line */}
          <div className="space-y-1">
            <span className="text-xs text-slate-500 uppercase">
              {lang === 'ar' ? 'ادفعوا بموجب هذا الصك مبلغ قدره:' : 'Payez contre ce chèque la somme de :'}
            </span>
            <div className="p-2.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-serif font-bold text-slate-900 dark:text-white break-words">
              *** {currentWords} ***
            </div>
          </div>

          {/* Payee name */}
          <div className="space-y-1">
            <span className="text-xs text-slate-500 uppercase">
              {lang === 'ar' ? 'لأمر السيد(ة) / المؤسسة:' : 'À l\'ordre de :'}
            </span>
            <input
              type="text"
              value={payee}
              onChange={(e) => setPayee(e.target.value)}
              placeholder={lang === 'ar' ? 'اسم المستفيد...' : 'Nom du bénéficiaire...'}
              className="w-full px-3 py-2 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden"
            />
          </div>

          {/* Footer signature line */}
          <div className="pt-2 flex flex-wrap items-end justify-between text-xs text-slate-500 gap-4">
            <div>
              <span>{lang === 'ar' ? 'حرر بـ:' : 'Fait à :'} الجزائر العاصمة / Alger</span>
              <br />
              <span>{lang === 'ar' ? 'بتاريخ:' : 'Le :'} {new Date().toLocaleDateString(lang === 'ar' ? 'ar-DZ' : 'fr-DZ')}</span>
            </div>
            <div className="w-full sm:w-36 h-12 border border-slate-300 dark:border-slate-700 rounded-md flex items-center justify-center text-[10px] text-slate-400">
              {lang === 'ar' ? 'التوقيع والختم' : 'Signature'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
