'use client';

import React, { useState } from 'react';
import { Zap, Calculator, ExternalLink, Info, Gauge } from 'lucide-react';
import { Language } from '@/lib/types';

interface Props {
  lang: Language;
}

export default function SonalgazBillGuide({ lang }: Props) {
  const [activeTab, setActiveTab] = useState<'header' | 'indexes' | 'coeff' | 'codes'>('header');
  const [oldIndex, setOldIndex] = useState<number>(12400);
  const [newIndex, setNewIndex] = useState<number>(13150);
  const [gasCoeff, setGasCoeff] = useState<number>(10.95);

  const diffUnits = Math.max(0, newIndex - oldIndex);
  const gasThermies = Math.round(diffUnits * gasCoeff);

  const tabs = [
    {
      id: 'header' as const,
      title: { ar: '1. بيانات الزبون والعداد', fr: '1. Référence & Compteur' },
      desc: {
        ar: 'يضم أعلى الفاتورة رقم المرجع (Référence) المكون من 11 إلى 15 رقما، رمز الوكالة التجارية، ورقم العداد الفعلي الذي يمكنك استخدامه للدفع الإلكتروني عبر منصة ELIT أو بريدي موب.',
        fr: 'L\'en-tête indique votre numéro de référence client, le code d\'agence commerciale et le numéro de série du compteur utilisé pour payer en ligne sur ELIT ou BaridiMob.',
      },
    },
    {
      id: 'indexes' as const,
      title: { ar: '2. المؤشر القديم والجديد', fr: '2. Ancien & Nouvel Index' },
      desc: {
        ar: 'يحسب الاستهلاك بطرح المؤشر القديم (Ancien Index) من المؤشر الجديد (Nouvel Index). يظهر رقم العداد بالكيلوواط ساعي للكهرباء وبالمتر المكعب للغاز.',
        fr: 'La consommation correspond à la différence (Nouvel Index − Ancien Index). Le compteur indique des kWh pour l\'électricité et des m³ pour le gaz naturel.',
      },
    },
    {
      id: 'coeff' as const,
      title: { ar: '3. معامل التحويل الحراري للغاز', fr: '3. Coefficient Thermique (PCS)' },
      desc: {
        ar: 'لتسعير الغاز الطبيعي بالوحدة الحرارية (Thermie)، يضرب الفرق المسجل بالمتر المكعب في معامل التحويل الحراري الذي يتراوح غالبا بين 9.8 و 11.2 حسب الضغط والمنطقة.',
        fr: 'Pour convertir les m³ de gaz naturel en thermies facturées, l\'index consommé est multiplié par un coefficient de conversion thermique (environ 9,8 à 11,2).',
      },
    },
    {
      id: 'codes' as const,
      title: { ar: '4. رموز القراءة (R / E / M)', fr: '4. Codes de Relève (R / E / M)' },
      desc: {
        ar: 'الحرف R (Réel) يعني قراءة حقيقية مباشرة من العداد، الرمز E (Estimé) يعني فاتورة تقديرية لغياب القراءة، والرمز M يشير إلى متوسط الاستهلاك أو تصحيح ربع سنوي.',
        fr: 'R (Réel) signale un relevé physique exact du compteur, E (Estimé) une facturation provisoire en cas d\'absence, et M un index moyen calculé.',
      },
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {lang === 'ar' ? 'الشرح التفاعلي لأقسام فاتورة سونلغاز' : 'Lecture Interactive de la Facture Sonelgaz'}
              </h2>
              <p className="text-xs text-slate-500">
                {lang === 'ar' ? 'مبني على دليل لجنة ضبط الكهرباء والغاز CREG الرسمي' : 'Basé sur le guide officiel de la CREG et de Sonelgaz'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href="https://creg.gov.dz/المستهلكون/كيف-تقرأ-فاتورتك/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-emerald-600 text-xs font-bold inline-flex items-center gap-1"
            >
              <span>{lang === 'ar' ? 'دليل CREG' : 'Guide CREG'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://consulter-factures.elit.dz/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-emerald-600 text-xs font-bold inline-flex items-center gap-1"
            >
              <span>{lang === 'ar' ? 'استعلام الفاتورة ELIT' : 'Consulter ELIT'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://epayement.elit.dz/payementFacture.xhtml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1"
            >
              <span>{lang === 'ar' ? 'دفع الفاتورة' : 'Payer en Ligne'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`p-3 rounded-xl text-xs font-bold text-start border transition-colors ${
                activeTab === t.id
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500/40'
              }`}
            >
              {t.title[lang]}
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{currentTab.title[lang]}</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{currentTab.desc[lang]}</p>
          </div>
        </div>

        {/* Interactive Index Difference Simulator */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'ar' ? 'محاكي حساب فارق العداد والتحويل الحراري' : 'Calculateur de Différence d\'Index & Thermies'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                {lang === 'ar' ? 'المؤشر القديم (Ancien Index):' : 'Ancien Index :'}
              </label>
              <input
                type="number"
                value={oldIndex}
                onChange={(e) => setOldIndex(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                {lang === 'ar' ? 'المؤشر الجديد (Nouvel Index):' : 'Nouvel Index :'}
              </label>
              <input
                type="number"
                value={newIndex}
                onChange={(e) => setNewIndex(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                {lang === 'ar' ? 'معامل الغاز (Coefficient PCS):' : 'Coefficient Gaz (PCS) :'}
              </label>
              <input
                type="number"
                step="0.05"
                value={gasCoeff}
                onChange={(e) => setGasCoeff(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Gauge className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'ar' ? 'كمية الاستهلاك (kWh أو m³)' : 'Volume Consommé (kWh ou m³)'}</span>
              </div>
              <span className="text-xl font-black font-mono text-slate-900 dark:text-slate-100">
                {diffUnits.toLocaleString('fr-DZ')}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-emerald-600 text-white flex items-center justify-between">
              <span className="text-xs font-semibold">
                {lang === 'ar' ? 'الوحدات الحرارية للغاز (Thermies)' : 'Équivalent Gaz (Thermies)'}
              </span>
              <span className="text-xl font-black font-mono">
                {gasThermies.toLocaleString('fr-DZ')} Th
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
