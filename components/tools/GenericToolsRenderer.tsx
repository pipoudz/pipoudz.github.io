'use client';

import React, { useState, useEffect } from 'react';
import {
  RotateCcw,
  Play,
  Pause,
  Moon,
  Fuel,
  Car,
  CreditCard,
} from 'lucide-react';
import { Language } from '@/lib/types';
import {
  ALGERIA_MAIN_WILAYAS,
  FUEL_PRICES_DZD,
  QIBLA_WILAYAS,
} from '@/lib/calculators';
import NumberToWordsTool from './NumberToWordsTool';
import SalaryCalculatorTool from './SalaryCalculatorTool';
import ElectricityCalculatorTool from './ElectricityCalculatorTool';
import CurrencyConverterTool from './CurrencyConverterTool';
import HealthToolsSuite from './HealthToolsSuite';
import StudyLifeToolsSuite from './StudyLifeToolsSuite';
import ProductivityToolsSuite from './ProductivityToolsSuite';

interface ToolRendererProps {
  slug: string;
  lang: Language;
}

const HEALTH_SLUGS = new Set([
  'health-tools',
  'calorie-calculator',
  'nutrition-calculator',
  'ideal-weight-calculator',
  'water-calculator',
  'child-bmi-calculator',
  'infant-growth-calculator',
  'medication-tracker',
  'vaccine-tracker',
  'pregnancy-due-date',
  'pregnancy-calorie-calculator',
  'fertile-window',
  'prediabetes-risk',
  'diabetes-awareness',
  'asthma-control',
  'anxiety-screening',
  'depression-screening',
  'eating-awareness',
  'sleep-assessment',
  'visual-acuity-screening',
  'pilgrim-health-checklist',
]);

const STUDY_LIFE_SLUGS = new Set([
  'calculator',
  'percentage-calculator',
  'average-calculator',
  'semester-calculator',
  'unit-converter',
  'flashcards',
  'exam-planner',
  'exam-study-planner',
  'research-plan',
  'apa-generator',
  'countdown',
  'notes-calendar',
  'points-ranking',
  'study-schedule',
  'budget-calculator',
  'budget-manager',
  'farm-planner',
  'maps',
  'meal-planner',
]);

const PRODUCTIVITY_SLUGS = new Set([
  'admin-procedures-assistant',
  'arabic-dictionary',
  'cv-builder',
  'invoice-generator',
  'inventory-manager',
  'pdf-tools',
  'qr-generator',
  'image-compressor',
  'text-tools',
]);

export default function GenericToolsRenderer({ slug, lang }: ToolRendererProps) {
  if (slug === 'number-to-words') return <NumberToWordsTool lang={lang} />;
  if (slug === 'salary-calculator') return <SalaryCalculatorTool lang={lang} />;
  if (slug === 'electricity-calculator') return <ElectricityCalculatorTool lang={lang} />;
  if (slug === 'currency-converter') return <CurrencyConverterTool lang={lang} />;

  if (slug === 'loan-calculator') return <LoanCalculatorComponent lang={lang} />;
  if (slug === 'car-cost-calculator') return <CarCostCalculatorComponent lang={lang} />;
  if (slug === 'fuel-calculator') return <FuelCalculatorComponent lang={lang} />;
  if (slug === 'age-calculator') return <AgeCalculatorComponent lang={lang} />;
  if (slug === 'date-difference') return <DateDifferenceComponent lang={lang} />;
  if (slug === 'pomodoro') return <PomodoroComponent lang={lang} />;
  if (slug === 'qibla-compass') return <QiblaCompassComponent lang={lang} />;
  if (slug === 'hijri-calendar') return <HijriCalendarComponent lang={lang} />;

  if (HEALTH_SLUGS.has(slug)) return <HealthToolsSuite slug={slug} lang={lang} />;
  if (STUDY_LIFE_SLUGS.has(slug)) return <StudyLifeToolsSuite slug={slug} lang={lang} />;
  if (PRODUCTIVITY_SLUGS.has(slug)) return <ProductivityToolsSuite slug={slug} lang={lang} />;

  // All 60 slugs are explicitly mapped above; keep a typed calculator safe guard
  return <StudyLifeToolsSuite slug="calculator" lang={lang} />;
}

function LoanCalculatorComponent({ lang }: { lang: Language }) {
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [years, setYears] = useState<number>(20);
  const [rate, setRate] = useState<number>(5.5);

  const monthlyRate = rate / 100 / 12;
  const totalMonths = years * 12;
  const monthlyPayment =
    monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : loanAmount / totalMonths;
  const totalPaid = monthlyPayment * totalMonths;
  const totalInterest = totalPaid - loanAmount;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'ar' ? 'حاسبة القروض والتمويل العقاري والاستهلاكي' : 'Simulateur de Crédit & Financement'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              {lang === 'ar' ? 'مبلغ التمويل المطلوب (دج):' : 'Montant du Financement (DZD) :'}
            </label>
            <input type="number" step="100000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              {lang === 'ar' ? 'مدة السداد (سنوات):' : 'Durée de remboursement (Années) :'}
            </label>
            <input type="number" min="1" max="35" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              {lang === 'ar' ? 'نسبة الفائدة / هامش المرابحة (%):' : 'Taux d\'intérêt / Marge Mourabaha (%) :'}
            </label>
            <input type="number" step="0.25" min="0" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-700/20">
          <span className="text-xs uppercase tracking-wider block opacity-90 mb-1">
            {lang === 'ar' ? 'القسط الشهري المقدر (Mensualité)' : 'Mensualité Estimée'}
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono tabular-nums">
            {Math.round(monthlyPayment).toLocaleString('fr-DZ')} <span className="text-sm font-normal">DZD</span>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase tracking-wider block text-slate-500 mb-1">
            {lang === 'ar' ? 'إجمالي الأرباح / الفوائد' : 'Total Intérêts / Marge'}
          </span>
          <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
            {Math.round(totalInterest).toLocaleString('fr-DZ')} DZD
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase tracking-wider block text-slate-500 mb-1">
            {lang === 'ar' ? 'المبلغ الإجمالي المسدد' : 'Montant Total Remboursé'}
          </span>
          <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
            {Math.round(totalPaid).toLocaleString('fr-DZ')} DZD
          </div>
        </div>
      </div>
    </div>
  );
}

function CarCostCalculatorComponent({ lang }: { lang: Language }) {
  const [enginePowerCv, setEnginePowerCv] = useState<number>(6);
  const [carAgeCategory, setCarAgeCategory] = useState<'new' | 'mid' | 'old'>('mid');

  let vignetteCost = 3000;
  if (carAgeCategory === 'new') {
    if (enginePowerCv <= 6) vignetteCost = 2000;
    else if (enginePowerCv <= 9) vignetteCost = 4000;
    else vignetteCost = 10000;
  } else if (carAgeCategory === 'mid') {
    if (enginePowerCv <= 6) vignetteCost = 1500;
    else if (enginePowerCv <= 9) vignetteCost = 3000;
    else vignetteCost = 6000;
  } else {
    vignetteCost = 500;
  }

  const technicalControlCost = 1650;
  const averageInsuranceYear = enginePowerCv * 3500;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-4 flex items-center gap-2">
          <Car className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'ar' ? 'حساب ثمن قسيمة السيارات والتكاليف السنوية' : 'Calculateur Vignette Automobile & Coûts'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              {lang === 'ar' ? 'القوة الجبائية للمحرك (CV):' : 'Puissance Fiscale (Chevaux CV) :'}
            </label>
            <select value={enginePowerCv} onChange={(e) => setEnginePowerCv(Number(e.target.value))} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold">
              <option value={4}>4 CV (1.0 - 1.2L)</option>
              <option value={5}>5 CV (1.2 - 1.4L)</option>
              <option value={6}>6 CV (1.6L)</option>
              <option value={7}>7 CV (2.0 TDI)</option>
              <option value={9}>9 CV (SUV)</option>
              <option value={12}>12+ CV (4x4)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              {lang === 'ar' ? 'عمر وسنة صنع السيارة:' : 'Âge de Mise en Circulation :'}
            </label>
            <select value={carAgeCategory} onChange={(e) => setCarAgeCategory(e.target.value as 'new' | 'mid' | 'old')} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold">
              <option value="new">{lang === 'ar' ? 'أقل من 3 سنوات (جديدة)' : 'Moins de 3 ans (Récente)'}</option>
              <option value="mid">{lang === 'ar' ? 'بين 3 و 6 سنوات' : 'Entre 3 et 6 ans'}</option>
              <option value="old">{lang === 'ar' ? 'أكثر من 6 سنوات' : 'Plus de 6 ans (Ancienne)'}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-amber-600 text-white shadow-md">
          <span className="text-xs uppercase tracking-wider block opacity-90 mb-1">{lang === 'ar' ? 'ثمن قسيمة السيارات الرسمية' : 'Prix Vignette Officielle'}</span>
          <div className="text-2xl sm:text-3xl font-black font-mono tabular-nums">{vignetteCost.toLocaleString('fr-DZ')} <span className="text-sm font-normal">DZD</span></div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase tracking-wider block text-slate-500 mb-1">{lang === 'ar' ? 'الفحص الدوري التقني' : 'Contrôle Technique Annuel'}</span>
          <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">{technicalControlCost.toLocaleString('fr-DZ')} DZD</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase tracking-wider block text-slate-500 mb-1">{lang === 'ar' ? 'التأمين السنوي التقديري' : 'Assurance Annuelle Estimée'}</span>
          <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">{averageInsuranceYear.toLocaleString('fr-DZ')} DZD</div>
        </div>
      </div>
    </div>
  );
}

function FuelCalculatorComponent({ lang }: { lang: Language }) {
  const [selectedWilaya, setSelectedWilaya] = useState<number>(31);
  const [fuelType, setFuelType] = useState<'gpl' | 'gasoil' | 'sansPlomb'>('sansPlomb');
  const [consumption, setConsumption] = useState<number>(7.0);

  const wilaya = ALGERIA_MAIN_WILAYAS.find((w) => w.code === selectedWilaya) || ALGERIA_MAIN_WILAYAS[1];
  const distanceKm = wilaya.distFromAlgiers || 415;
  const fuel = FUEL_PRICES_DZD[fuelType];
  const totalLiters = (distanceKm * consumption) / 100;
  const totalCost = totalLiters * fuel.pricePerLiter;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-4 flex items-center gap-2">
          <Fuel className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'ar' ? 'حاسبة استهلاك وتكلفة الوقود بين الولايات' : 'Calculateur Carburant Inter-Wilayas'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'المقصد من الجزائر العاصمة إلى:' : 'Destination depuis Alger :'}</label>
            <select value={selectedWilaya} onChange={(e) => setSelectedWilaya(Number(e.target.value))} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold">
              {ALGERIA_MAIN_WILAYAS.filter((w) => w.code !== 16).map((w) => (
                <option key={w.code} value={w.code}>{w.code} - {w.name[lang]} ({w.distFromAlgiers} km)</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'نوع الوقود المستعمل:' : 'Type de Carburant :'}</label>
            <select value={fuelType} onChange={(e) => setFuelType(e.target.value as 'gpl' | 'gasoil' | 'sansPlomb')} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold">
              <option value="sansPlomb">{lang === 'ar' ? 'بنزين بدون رصاص (45.62 دج/لتر)' : 'Essence Sans Plomb (45,62 DZD/L)'}</option>
              <option value="gasoil">{lang === 'ar' ? 'مازوت / ديزل (29.01 دج/لتر)' : 'Gasoil / Diesel (29,01 DZD/L)'}</option>
              <option value="gpl">{lang === 'ar' ? 'سيرغاز GPL/C (9.00 دج/لتر)' : 'GPL Carburant (9,00 DZD/L)'}</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'معدل الاستهلاك (L/100km):' : 'Consommation (L/100km) :'}</label>
            <input type="number" step="0.5" min="3" max="25" value={consumption} onChange={(e) => setConsumption(Number(e.target.value))} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase tracking-wider block text-slate-500 mb-1">{lang === 'ar' ? 'المسافة الإجمالية ذهابا' : 'Distance Aller'}</span>
          <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">{distanceKm} km</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase tracking-wider block text-slate-500 mb-1">{lang === 'ar' ? 'حجم الوقود المستهلك' : 'Carburant Consommé'}</span>
          <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">{totalLiters.toFixed(1)} L</div>
        </div>
        <div className="p-5 rounded-2xl bg-emerald-600 text-white shadow-md">
          <span className="text-xs uppercase tracking-wider block opacity-90 mb-1">{lang === 'ar' ? 'تكلفة الرحلة الإجمالية' : 'Coût Total du Trajet'}</span>
          <div className="text-2xl sm:text-3xl font-black font-mono tabular-nums">{Math.round(totalCost).toLocaleString('fr-DZ')} <span className="text-sm font-normal">DZD</span></div>
        </div>
      </div>
    </div>
  );
}

function AgeCalculatorComponent({ lang }: { lang: Language }) {
  const [birthDate, setBirthDate] = useState<string>('1990-05-15');
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const bDate = new Date(birthDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - bDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const ageYears = Math.floor(diffDays / 365.25);
  const ageMonths = Math.floor((diffDays % 365.25) / 30.44);

  const retirementAge = gender === 'male' ? 60 : 55;
  const yearsToRetirement = Math.max(0, retirementAge - ageYears);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'تاريخ الميلاد بالميلادي:' : 'Date de Naissance :'}</label>
          <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'الجنس (لحساب سن التقاعد CNR):' : 'Genre (Retraite CNR) :'}</label>
          <div className="grid grid-cols-1 min-[340px]:grid-cols-2 gap-2">
            <button type="button" onClick={() => setGender('male')} className={`py-2.5 px-3 rounded-xl border text-xs font-bold ${gender === 'male' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
              {lang === 'ar' ? 'ذكر (60 سنة)' : 'Homme (60 ans)'}
            </button>
            <button type="button" onClick={() => setGender('female')} className={`py-2.5 px-3 rounded-xl border text-xs font-bold ${gender === 'female' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
              {lang === 'ar' ? 'أنثى (55 سنة)' : 'Femme (55 ans)'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-emerald-600 text-white shadow-md">
          <span className="text-xs uppercase tracking-wider block opacity-90 mb-1">{lang === 'ar' ? 'العمر الدقيق' : 'Âge Exact'}</span>
          <div className="text-2xl font-black">{ageYears} {lang === 'ar' ? 'سنة' : 'ans'}, {ageMonths} {lang === 'ar' ? 'شهر' : 'mois'}</div>
          <span className="text-xs opacity-90 block mt-1">({diffDays.toLocaleString('fr-DZ')} {lang === 'ar' ? 'يوم' : 'jours'})</span>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase tracking-wider block text-slate-500 mb-1">{lang === 'ar' ? 'السن القانوني للتقاعد' : 'Âge Légal Retraite'}</span>
          <div className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100">{retirementAge} {lang === 'ar' ? 'سنة' : 'ans'}</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase tracking-wider block text-slate-500 mb-1">{lang === 'ar' ? 'المتبقي على التقاعد' : 'Années Restantes'}</span>
          <div className="text-2xl font-bold font-mono text-emerald-600">{yearsToRetirement > 0 ? `${yearsToRetirement}` : (lang === 'ar' ? 'مؤهل' : 'Éligible')}</div>
        </div>
      </div>
    </div>
  );
}

function DateDifferenceComponent({ lang }: { lang: Language }) {
  const [d1, setD1] = useState<string>('2026-01-01');
  const [d2, setD2] = useState<string>('2026-11-12');

  const diffDays = Math.ceil(Math.abs(new Date(d2).getTime() - new Date(d1).getTime()) / 86400000);
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'التاريخ الأول:' : 'Date de début :'}</label>
          <input type="date" value={d1} onChange={(e) => setD1(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'التاريخ الثاني:' : 'Date de fin :'}</label>
          <input type="date" value={d2} onChange={(e) => setD2(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/30 text-center">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'الأيام' : 'Jours'}</span>
          <div className="text-2xl font-bold font-mono text-emerald-700 dark:text-emerald-400">{diffDays}</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'الأسابيع' : 'Semaines'}</span>
          <div className="text-2xl font-bold font-mono">{(diffDays / 7).toFixed(1)}</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'الشهور' : 'Mois'}</span>
          <div className="text-2xl font-bold font-mono">{(diffDays / 30.44).toFixed(1)}</div>
        </div>
      </div>
    </div>
  );
}

function PomodoroComponent({ lang }: { lang: Language }) {
  const [seconds, setSeconds] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => (s <= 1 ? (setIsActive(false), 0) : s - 1));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const switchMode = (newMode: 'work' | 'break') => {
    setMode(newMode);
    setIsActive(false);
    setSeconds(newMode === 'work' ? 25 * 60 : 5 * 60);
  };

  return (
    <div className="max-w-md mx-auto p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        <button type="button" onClick={() => switchMode('work')} className={`px-4 py-1.5 rounded-lg text-xs font-bold ${mode === 'work' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>
          {lang === 'ar' ? 'جلسة تركيز (25 د)' : 'Focus (25 min)'}
        </button>
        <button type="button" onClick={() => switchMode('break')} className={`px-4 py-1.5 rounded-lg text-xs font-bold ${mode === 'break' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>
          {lang === 'ar' ? 'استراحة (5 د)' : 'Pause (5 min)'}
        </button>
      </div>
      <div className="text-5xl sm:text-6xl font-black font-mono tabular-nums text-slate-900 dark:text-slate-100 tracking-wider">
        {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => setIsActive(!isActive)} className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-2">
          {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span>{isActive ? (lang === 'ar' ? 'إيقاف مؤقت' : 'Pause') : (lang === 'ar' ? 'ابدأ التركيز' : 'Démarrer')}</span>
        </button>
        <button type="button" onClick={() => { setIsActive(false); setSeconds(mode === 'work' ? 25 * 60 : 5 * 60); }} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function QiblaCompassComponent({ lang }: { lang: Language }) {
  const [selectedWilaya, setSelectedWilaya] = useState<number>(16);
  const currentWilaya = QIBLA_WILAYAS.find((w) => w.code === selectedWilaya) || QIBLA_WILAYAS[15];

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-2">
          {lang === 'ar' ? 'اختر ولايتك من 58 ولاية جزائرية:' : 'Sélectionnez votre wilaya (58 wilayas) :'}
        </label>
        <select value={selectedWilaya} onChange={(e) => setSelectedWilaya(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold text-center text-sm">
          {QIBLA_WILAYAS.map((w) => (
            <option key={w.code} value={w.code}>{w.code} - {w.name[lang]} ({w.angle}°)</option>
          ))}
        </select>
      </div>
      <div className="relative w-44 h-44 min-[360px]:w-56 min-[360px]:h-56 mx-auto rounded-full border-4 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <span className="absolute top-2 text-xs font-bold text-red-500">N</span>
        <span className="absolute bottom-2 text-xs font-bold text-slate-400">S</span>
        <span className="absolute end-3 text-xs font-bold text-slate-400">E</span>
        <span className="absolute start-3 text-xs font-bold text-slate-400">W</span>
        <div className="absolute w-1.5 h-32 min-[360px]:h-40 transition-transform duration-500" style={{ transform: `rotate(${currentWilaya.angle}deg)` }}>
          <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[20px] border-b-emerald-600 mx-auto" />
          <div className="w-1 bg-emerald-600 h-16 mx-auto" />
        </div>
        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold z-10">DZ</div>
      </div>
      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20">
        <span className="text-xs text-slate-500 block mb-1">{lang === 'ar' ? 'زاوية انحراف القبلة:' : 'Azimut Qibla :'}</span>
        <span className="text-3xl font-black font-mono text-emerald-700 dark:text-emerald-400">{currentWilaya.angle}°</span>
      </div>
    </div>
  );
}

function HijriCalendarComponent({ lang }: { lang: Language }) {
  const [gDate, setGDate] = useState(new Date().toISOString().slice(0, 10));
  let hijriDisplay = '';
  try {
    hijriDisplay = new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA-u-ca-islamic-umalqura' : 'fr-FR-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    }).format(new Date(gDate));
  } catch {
    hijriDisplay = gDate;
  }

  const holidays = [
    { date: '12 Janvier / جانفي', name: { ar: 'رأس السنة الأمازيغية (Yennayer)', fr: 'Nouvel An Amazigh (Yennayer)' } },
    { date: '1er Mai / ماي', name: { ar: 'عيد العمال العالمي', fr: 'Fête du Travail' } },
    { date: '1er Chawwal / شوال', name: { ar: 'عيد الفطر المبارك (يومان)', fr: 'Aïd El Fitr (2 jours)' } },
    { date: '5 Juillet / جويلية', name: { ar: 'عيد الاستقلال والشباب', fr: 'Fête de l\'Indépendance' } },
    { date: '10 Dhou El Hijja / ذو الحجة', name: { ar: 'عيد الأضحى المبارك (3 أيام)', fr: 'Aïd El Adha (3 jours)' } },
    { date: '1er Moharram / محرم', name: { ar: 'رأس السنة الهجرية', fr: 'Nouvel An Hégirien' } },
    { date: '10 Moharram / عاشوراء', name: { ar: 'يوم عاشوراء', fr: 'Achoura' } },
    { date: '12 Rabie El Awal / ربيع الأول', name: { ar: 'المولد النبوي الشريف', fr: 'Mawlid Ennabawi' } },
    { date: '1er Novembre / نوفمبر', name: { ar: 'ذكرى اندلاع الثورة التحريرية', fr: 'Déclenchement du 1er Novembre' } },
  ];

  return (
    <div className="space-y-5">
      <div className="bg-emerald-600 text-white rounded-2xl p-4 sm:p-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase opacity-90">{lang === 'ar' ? 'محول التاريخ الميلادي إلى الهجري (أم القرى):' : 'Convertisseur Grégorien vers Hégirien :'}</span>
          <input type="date" value={gDate} onChange={(e) => setGDate(e.target.value)} className="px-3 py-1.5 rounded-xl bg-white text-slate-900 font-mono text-xs font-bold" />
        </div>
        <div className="text-xl sm:text-2xl font-black">{hijriDisplay}</div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base flex items-center gap-2">
          <Moon className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{lang === 'ar' ? 'جدول العطل والأعياد الرسمية في الجزائر' : 'Jours Fériés & Fêtes Officielles en Algérie'}</span>
        </h3>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {holidays.map((h, i) => (
            <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
              <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{h.name[lang]}</span>
              <span className="self-start sm:self-auto text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">{h.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
