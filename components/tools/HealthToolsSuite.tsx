'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  Baby,
  Droplets,
  ShieldCheck,
  CheckSquare,
  Square,
  AlertCircle,
  Eye,
  Moon,
  Activity,
  Scale,
  Compass,
} from 'lucide-react';
import { Language } from '@/lib/types';

interface Props {
  slug: string;
  lang: Language;
}

function MedicalDisclaimer({ lang }: { lang: Language }) {
  return (
    <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
      <span>
        {lang === 'ar'
          ? 'تنبيه صحي: هذه الأداة للتوعية والتقدير الأولي فقط ولا تغني بأي حال عن الفحص والاستشارة الطبية المتخصصة.'
          : 'Avertissement médical : cet outil est fourni à titre informatif et préventif et ne remplace pas un avis médical.'}
      </span>
    </div>
  );
}

export default function HealthToolsSuite({ slug, lang }: Props) {
  if (slug === 'health-tools') return <HealthHub lang={lang} />;
  if (slug === 'calorie-calculator' || slug === 'ideal-weight-calculator') return <CalorieIdealWeightTool lang={lang} mode={slug} />;
  if (slug === 'nutrition-calculator') return <NutritionMacroTool lang={lang} />;
  if (slug === 'water-calculator') return <WaterIntakeTool lang={lang} />;
  if (slug === 'child-bmi-calculator') return <ChildBmiTool lang={lang} />;
  if (slug === 'infant-growth-calculator') return <InfantGrowthTool lang={lang} />;
  if (slug === 'medication-tracker') return <MedicationTrackerTool lang={lang} />;
  if (slug === 'vaccine-tracker') return <VaccineTrackerTool lang={lang} />;
  if (slug === 'pregnancy-due-date') return <PregnancyDueDateTool lang={lang} />;
  if (slug === 'pregnancy-calorie-calculator') return <PregnancyCalorieTool lang={lang} />;
  if (slug === 'fertile-window') return <FertileWindowTool lang={lang} />;
  if (slug === 'prediabetes-risk') return <PrediabetesRiskTool lang={lang} />;
  if (slug === 'diabetes-awareness') return <DiabetesLogTool lang={lang} />;
  if (slug === 'asthma-control') return <AsthmaControlTool lang={lang} />;
  if (slug === 'anxiety-screening') return <MentalHealthScreener lang={lang} kind="gad7" />;
  if (slug === 'depression-screening') return <MentalHealthScreener lang={lang} kind="phq9" />;
  if (slug === 'eating-awareness') return <EatingAwarenessTool lang={lang} />;
  if (slug === 'sleep-assessment') return <SleepAssessmentTool lang={lang} />;
  if (slug === 'visual-acuity-screening') return <VisualAcuityTool lang={lang} />;
  return <PilgrimHealthChecklistTool lang={lang} />;
}

// 1. Health Hub
function HealthHub({ lang }: { lang: Language }) {
  const items = [
    { slug: 'calorie-calculator', ar: 'حاسبة السعرات الحرارية ومؤشر الكتلة', fr: 'Calculateur Calories & IMC' },
    { slug: 'nutrition-calculator', ar: 'حاسبة البروتينات والكربوهيدرات والدهون', fr: 'Calculateur Macronutriments' },
    { slug: 'ideal-weight-calculator', ar: 'حاسبة الوزن المثالي', fr: 'Calculateur Poids Idéal' },
    { slug: 'water-calculator', ar: 'حاسبة احتياج الماء اليومي', fr: 'Hydratation Quotidienne' },
    { slug: 'child-bmi-calculator', ar: 'مؤشر كتلة الجسم للأطفال (CDC)', fr: 'IMC Pédiatrique Enfant' },
    { slug: 'infant-growth-calculator', ar: 'تتبع نمو الرضيع (WHO)', fr: 'Suivi Croissance Nourrisson (OMS)' },
    { slug: 'medication-tracker', ar: 'متابعتي للأدوية ومواعيد الجرعات', fr: 'Suivi des Médicaments & Prises' },
    { slug: 'vaccine-tracker', ar: 'دفتر التلقيح الوطني للأطفال (2026)', fr: 'Calendrier Vaccinal Algérien' },
    { slug: 'pregnancy-due-date', ar: 'موعد الولادة وأسابيع الحمل', fr: 'Date d\'Accouchement & Trimestres' },
    { slug: 'pregnancy-calorie-calculator', ar: 'سعرات الحمل والرضاعة', fr: 'Besoins Caloriques Grossesse' },
    { slug: 'fertile-window', ar: 'حاسبة أيام التبويض والخصوبة', fr: 'Fenêtre de Fertilité & Ovulation' },
    { slug: 'prediabetes-risk', ar: 'تقييم خطر مقدمات السكري', fr: 'Dépistage Risque Prédiabète' },
    { slug: 'diabetes-awareness', ar: 'دفتر متابعة السكري اليومي', fr: 'Carnet Suivi Glycémie' },
    { slug: 'asthma-control', ar: 'اختبار التحكم في الربو (ACT)', fr: 'Test Contrôle de l\'Asthme (ACT)' },
    { slug: 'anxiety-screening', ar: 'مقياس القلق العام (GAD-7)', fr: 'Échelle d\'Anxiété (GAD-7)' },
    { slug: 'depression-screening', ar: 'مقياس الصحة النفسية (PHQ-9)', fr: 'Dépistage Humeur (PHQ-9)' },
    { slug: 'eating-awareness', ar: 'تقييم العادات الغذائية', fr: 'Habitudes Alimentaires' },
    { slug: 'sleep-assessment', ar: 'تقييم جودة النوم وتنفس النوم', fr: 'Qualité du Sommeil & Apnée' },
    { slug: 'visual-acuity-screening', ar: 'فحص أولي لحدة البصر', fr: 'Test d\'Acuité Visuelle' },
    { slug: 'pilgrim-health-checklist', ar: 'القائمة الصحية للحاج والمعتمر', fr: 'Check-list Santé Hadj & Omra' },
  ];

  return (
    <div className="space-y-6">
      <MedicalDisclaimer lang={lang} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((it) => (
          <Link
            key={it.slug}
            href={`/${lang}/pages/tools/health/${it.slug}/`}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors flex items-center justify-between gap-3"
          >
            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {lang === 'ar' ? it.ar : it.fr}
            </span>
            <HeartPulse className="w-4 h-4 text-emerald-600 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

// 2. Calories & Ideal Weight
function CalorieIdealWeightTool({ lang, mode }: { lang: Language; mode: string }) {
  const [weight, setWeight] = useState(72);
  const [height, setHeight] = useState(174);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState<'m' | 'f'>('m');
  const [activity, setActivity] = useState(1.55);

  const bmi = weight / Math.pow(height / 100, 2);
  const bmr =
    gender === 'm'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  const tdee = bmr * activity;
  const heightInches = height / 2.54;
  const devineIdeal =
    gender === 'm'
      ? 50 + 2.3 * Math.max(0, heightInches - 60)
      : 45.5 + 2.3 * Math.max(0, heightInches - 60);

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-base flex items-center gap-2">
          <Scale className="w-5 h-5 text-emerald-600" />
          <span>
            {mode === 'ideal-weight-calculator'
              ? (lang === 'ar' ? 'حاسبة الوزن المثالي ومؤشر كتلة الجسم' : 'Calculateur Poids Idéal & IMC')
              : (lang === 'ar' ? 'حاسبة السعرات الحرارية اليومية (Mifflin-St Jeor)' : 'Calculateur Calories Quotidiennes & IMC')}
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          <div>
            <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'الوزن (كغ):' : 'Poids (kg) :'}</label>
            <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'الطول (سم):' : 'Taille (cm) :'}</label>
            <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'العمر:' : 'Âge :'}</label>
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'الجنس:' : 'Sexe :'}</label>
            <select value={gender} onChange={(e) => setGender(e.target.value as 'm' | 'f')} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold">
              <option value="m">{lang === 'ar' ? 'ذكر' : 'Homme'}</option>
              <option value="f">{lang === 'ar' ? 'أنثى' : 'Femme'}</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'مستوى النشاط البدني:' : 'Niveau d\'activité :'}</label>
          <select value={activity} onChange={(e) => setActivity(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-semibold">
            <option value={1.2}>{lang === 'ar' ? 'خامل (بدون نشاط رياضي)' : 'Sédentaire (peu ou pas d\'exercice)'}</option>
            <option value={1.375}>{lang === 'ar' ? 'نشاط خفيف (1-3 أيام بالأسبوع)' : 'Activité légère (1-3 jours/semaine)'}</option>
            <option value={1.55}>{lang === 'ar' ? 'نشاط متوسط (3-5 أيام بالأسبوع)' : 'Activité modérée (3-5 jours/semaine)'}</option>
            <option value={1.725}>{lang === 'ar' ? 'نشاط عالي (6-7 أيام)' : 'Activité intense (6-7 jours/semaine)'}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-emerald-600 text-white">
          <span className="text-xs opacity-90 block">{lang === 'ar' ? 'الاحتياج اليومي للتثبيت' : 'Maintien Calorique (TDEE)'}</span>
          <div className="text-2xl font-black font-mono mt-1">{Math.round(tdee).toLocaleString()} kcal</div>
          <span className="text-[11px] opacity-85">{lang === 'ar' ? `لإنقاص الوزن: ${Math.round(tdee - 450)} سعرة` : `Perte poids : ${Math.round(tdee - 450)} kcal`}</span>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 block">{lang === 'ar' ? 'مؤشر كتلة الجسم (BMI)' : 'Indice de Masse Corporelle'}</span>
          <div className="text-2xl font-black font-mono mt-1 text-slate-900 dark:text-slate-100">{bmi.toFixed(1)}</div>
          <span className="text-[11px] text-emerald-600 font-semibold">
            {bmi < 18.5
              ? (lang === 'ar' ? 'نحافة' : 'Insuffisance pondérale')
              : bmi < 25
                ? (lang === 'ar' ? 'وزن صحي طبيعي' : 'Poids normal')
                : bmi < 30
                  ? (lang === 'ar' ? 'زيادة في الوزن' : 'Surpoids')
                  : (lang === 'ar' ? 'سمنة' : 'Obésité')}
          </span>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 block">{lang === 'ar' ? 'الوزن المثالي التقديري (Devine)' : 'Poids Idéal Estimé (Devine)'}</span>
          <div className="text-2xl font-black font-mono mt-1 text-slate-900 dark:text-slate-100">{devineIdeal.toFixed(1)} kg</div>
          <span className="text-[11px] text-slate-500">{lang === 'ar' ? `النطاق الصحي: ${(18.5 * Math.pow(height / 100, 2)).toFixed(0)} - ${(24.9 * Math.pow(height / 100, 2)).toFixed(0)} كغ` : `Plage saine : ${(18.5 * Math.pow(height / 100, 2)).toFixed(0)} - ${(24.9 * Math.pow(height / 100, 2)).toFixed(0)} kg`}</span>
        </div>
      </div>
    </div>
  );
}

// 3. Nutrition Macro Tool
function NutritionMacroTool({ lang }: { lang: Language }) {
  const [calories, setCalories] = useState(2200);
  const [goal, setGoal] = useState<'balance' | 'cut' | 'muscle'>('balance');

  const ratios =
    goal === 'balance'
      ? { p: 0.25, c: 0.5, f: 0.25 }
      : goal === 'cut'
        ? { p: 0.35, c: 0.35, f: 0.3 }
        : { p: 0.3, c: 0.48, f: 0.22 };

  const proteinG = Math.round((calories * ratios.p) / 4);
  const carbsG = Math.round((calories * ratios.c) / 4);
  const fatG = Math.round((calories * ratios.f) / 9);

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'السعرات الحرارية اليومية المستهدفة:' : 'Calories quotidiennes cibles :'}</label>
          <input type="number" step="50" value={calories} onChange={(e) => setCalories(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">{lang === 'ar' ? 'الهدف الغذائي:' : 'Objectif nutritionnel :'}</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value as 'balance' | 'cut' | 'muscle')} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold text-sm">
            <option value="balance">{lang === 'ar' ? 'توازن صحي عام (25/50/25)' : 'Équilibre standard (25/50/25)'}</option>
            <option value="cut">{lang === 'ar' ? 'تخفيض الدهون وحفظ العضل (35/35/30)' : 'Perte de poids (35/35/30)'}</option>
            <option value="muscle">{lang === 'ar' ? 'بناء الكتلة العضلية (30/48/22)' : 'Prise de masse (30/48/22)'}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-emerald-600 text-white">
          <span className="text-xs opacity-90">{lang === 'ar' ? 'البروتين اليومي' : 'Protéines'}</span>
          <div className="text-3xl font-black font-mono mt-1">{proteinG} g</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'الكربوهيدرات' : 'Glucides'}</span>
          <div className="text-3xl font-black font-mono mt-1 text-slate-900 dark:text-slate-100">{carbsG} g</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'الدهون الصحية' : 'Lipides'}</span>
          <div className="text-3xl font-black font-mono mt-1 text-slate-900 dark:text-slate-100">{fatG} g</div>
        </div>
      </div>
    </div>
  );
}

// 4. Water Intake Calculator
function WaterIntakeTool({ lang }: { lang: Language }) {
  const [weight, setWeight] = useState(70);
  const [exerciseMin, setExerciseMin] = useState(30);
  const [hotWeather, setHotWeather] = useState(false);

  const liters = weight * 0.033 + (exerciseMin / 30) * 0.35 + (hotWeather ? 0.5 : 0);
  const cups = Math.round((liters * 1000) / 250);

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'الوزن (كغ):' : 'Poids (kg) :'}</label>
            <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'دقائق النشاط البدني اليومي:' : 'Activité physique (min/jour) :'}</label>
            <input type="number" value={exerciseMin} onChange={(e) => setExerciseMin(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
        </div>
        <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
          <input type="checkbox" checked={hotWeather} onChange={(e) => setHotWeather(e.target.checked)} className="w-4 h-4 accent-emerald-600" />
          <span>{lang === 'ar' ? 'الطقس حار أو منطقة صحراوية (+0.5 لتر)' : 'Climat chaud / estival (+0.5 L)'}</span>
        </label>
      </div>

      <div className="p-4 sm:p-6 rounded-2xl bg-sky-600 text-white flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Droplets className="w-8 h-8" />
          <div>
            <span className="text-xs opacity-90 block">{lang === 'ar' ? 'الاحتياج اليومي الموصى به من الماء' : 'Hydratation quotidienne recommandée'}</span>
            <span className="text-3xl font-black font-mono">{liters.toFixed(2)} L</span>
          </div>
        </div>
        <div className="text-end">
          <span className="text-xs opacity-90 block">{lang === 'ar' ? 'عدد الأكواب (250 مل)' : 'Nombre de verres (250 ml)'}</span>
          <span className="text-2xl font-black font-mono">≈ {cups}</span>
        </div>
      </div>
    </div>
  );
}

// 5. Child BMI Tool
function ChildBmiTool({ lang }: { lang: Language }) {
  const [ageYears, setAgeYears] = useState(8);
  const [weight, setWeight] = useState(26);
  const [height, setHeight] = useState(128);
  const bmi = weight / Math.pow(height / 100, 2);

  // Reference approximate median BMI for age 2..19 (WHO/CDC simplified reference curve)
  const expectedMedian = ageYears < 6 ? 15.6 : ageYears < 10 ? 16.2 + (ageYears - 6) * 0.45 : 18.0 + (ageYears - 10) * 0.55;
  const status =
    bmi < expectedMedian - 2.5
      ? { ar: 'أقل من المعدل المتوقع للسن', fr: 'En dessous de la moyenne pour l\'âge' }
      : bmi <= expectedMedian + 3.2
        ? { ar: 'ضمن النطاق الطبيعي المتوقع', fr: 'Dans la plage normale pour l\'âge' }
        : { ar: 'أعلى من المعدل الطبيعي (يستحسن المتابعة)', fr: 'Au-dessus de la normale (avis pédiatrique conseillé)' };

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'عمر الطفل (2-19 سنة):' : 'Âge (2-19 ans) :'}</label>
          <input type="number" min={2} max={19} value={ageYears} onChange={(e) => setAgeYears(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'الوزن (كغ):' : 'Poids (kg) :'}</label>
          <input type="number" step="0.5" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'الطول (سم):' : 'Taille (cm) :'}</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-emerald-600 text-white flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs opacity-90 block">{lang === 'ar' ? 'مؤشر كتلة الجسم للطفل (BMI)' : 'IMC de l\'Enfant'}</span>
          <span className="text-3xl font-black font-mono">{bmi.toFixed(1)} kg/m²</span>
        </div>
        <div className="text-sm font-bold">{status[lang]}</div>
      </div>
    </div>
  );
}

// 6. Infant Growth Tool
function InfantGrowthTool({ lang }: { lang: Language }) {
  const [months, setMonths] = useState(6);
  const [weightKg, setWeightKg] = useState(7.6);
  const [lengthCm, setLengthCm] = useState(67);
  // WHO simplified median references (0-24m)
  const expectedWeight = 3.3 + (months <= 6 ? months * 0.72 : 4.32 + (months - 6) * 0.28);
  const expectedLength = 50 + (months <= 12 ? months * 2.1 : 25.2 + (months - 12) * 1.0);

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'العمر بالأشهر (0-24):' : 'Âge en mois (0-24) :'}</label>
          <input type="number" min={0} max={24} value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'الوزن الحالي (كغ):' : 'Poids actuel (kg) :'}</label>
          <input type="number" step="0.1" value={weightKg} onChange={(e) => setWeightKg(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'الطول الحالي (سم):' : 'Taille actuelle (cm) :'}</label>
          <input type="number" value={lengthCm} onChange={(e) => setLengthCm(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'مقارنة الوزن بالوسيط المرجعي WHO' : 'Comparaison Poids vs Médiane OMS'}</span>
          <div className="text-xl font-black font-mono text-emerald-700 dark:text-emerald-400">
            {weightKg} kg <span className="text-xs font-normal text-slate-500">({lang === 'ar' ? `الوسيط: ${expectedWeight.toFixed(1)} كغ` : `Médiane : ${expectedWeight.toFixed(1)} kg`})</span>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'مقارنة الطول بالوسيط المرجعي WHO' : 'Comparaison Taille vs Médiane OMS'}</span>
          <div className="text-xl font-black font-mono text-emerald-700 dark:text-emerald-400">
            {lengthCm} cm <span className="text-xs font-normal text-slate-500">({lang === 'ar' ? `الوسيط: ${expectedLength.toFixed(1)} سم` : `Médiane : ${expectedLength.toFixed(1)} cm`})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 7. Algerian National Vaccine Tracker (with localStorage)
function VaccineTrackerTool({ lang }: { lang: Language }) {
  const schedule = [
    { id: 'v0', age: { ar: 'عند الولادة', fr: 'À la naissance' }, name: { ar: 'BCG + شلل الأطفال الفموي + التهاب الكبد ب', fr: 'BCG + Polio Oral + Hépatite B (HBV)' } },
    { id: 'v2', age: { ar: 'الشهر الثاني (2 أشهر)', fr: '2e mois' }, name: { ar: 'الخماسي + المكورات الرئوية + شلل الأطفال', fr: 'Pentavalent (DTC-Hib-HBV) + Pneumocoque + Polio' } },
    { id: 'v4', age: { ar: 'الشهر الرابع (4 أشهر)', fr: '4e mois' }, name: { ar: 'الخماسي 2 + المكورات الرئوية 2 + شلل الأطفال', fr: 'Pentavalent 2 + Pneumocoque 2 + Polio' } },
    { id: 'v11', age: { ar: 'الشهر 11', fr: '11e mois' }, name: { ar: 'ROR (الحصبة والنكاف والحميراء) 1', fr: 'ROR (Rougeole, Oreillons, Rubéole) 1' } },
    { id: 'v12', age: { ar: 'الشهر 12', fr: '12e mois' }, name: { ar: 'اللقاح المدعم الخماسي + المكورات الرئوية 3', fr: 'Rappel Pentavalent + Pneumocoque 3' } },
    { id: 'v18', age: { ar: 'الشهر 18', fr: '18e mois' }, name: { ar: 'ROR الجرعة الثانية + تذكير شلل الأطفال', fr: 'ROR 2e dose + Rappel Polio' } },
    { id: 'v6y', age: { ar: '6 سنوات (الدخول المدرسي)', fr: '6 ans (Entrée scolaire)' }, name: { ar: 'DTCa للأطفال + شلل الأطفال', fr: 'DTCa Enfant + Polio Oral' } },
  ];

  const [doneIds, setDoneIds] = useState<string[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const saved = localStorage.getItem('dz_vaccines_done');
        if (saved) setDoneIds(JSON.parse(saved));
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const toggle = (id: string) => {
    const next = doneIds.includes(id) ? doneIds.filter((x) => x !== id) : [...doneIds, id];
    setDoneIds(next);
    try {
      localStorage.setItem('dz_vaccines_done', JSON.stringify(next));
    } catch {}
  };

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 min-w-0">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{lang === 'ar' ? 'رزنامة التلقيح الوطنية الجزائرية' : 'Calendrier National de Vaccination (Algérie)'}</span>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-600 shrink-0">
            {doneIds.length} / {schedule.length}
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {schedule.map((item) => {
            const checked = doneIds.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full py-3 flex items-center justify-between gap-3 text-start hover:bg-slate-50 dark:hover:bg-slate-800/40 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  {checked ? <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" /> : <Square className="w-5 h-5 text-slate-400 shrink-0" />}
                  <div>
                    <div className={`text-sm font-bold ${checked ? 'line-through text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                      {item.name[lang]}
                    </div>
                    <div className="text-xs text-emerald-700 dark:text-emerald-400">{item.age[lang]}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 8. Pregnancy Due Date (Naegele)
function PregnancyDueDateTool({ lang }: { lang: Language }) {
  const [lmp, setLmp] = useState('2026-06-01');
  const d = new Date(lmp);
  const due = new Date(d.getTime() + 280 * 86400000);
  const today = new Date();
  const weeks = Math.max(0, Math.min(42, Math.floor((today.getTime() - d.getTime()) / (7 * 86400000))));
  const trimester = weeks < 13 ? 1 : weeks < 27 ? 2 : 3;

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800">
        <label className="block text-xs font-semibold text-slate-500 mb-2">
          {lang === 'ar' ? 'تاريخ أول يوم من آخر دورة شهرية (LMP):' : 'Date du 1er jour des dernières règles :'}
        </label>
        <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} className="w-full sm:w-72 px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-emerald-600 text-white">
          <span className="text-xs opacity-90">{lang === 'ar' ? 'تاريخ الولادة المتوقع (40 أسبوع)' : 'Date d\'accouchement prévue'}</span>
          <div className="text-2xl font-black font-mono mt-1">{due.toISOString().slice(0, 10)}</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'أسابيع الحمل الحالية' : 'Semaines d\'aménorrhée'}</span>
          <div className="text-2xl font-black font-mono mt-1">{weeks} {lang === 'ar' ? 'أسبوع' : 'sem.'}</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'الثلث الحالي من الحمل' : 'Trimestre actuel'}</span>
          <div className="text-2xl font-black mt-1 text-emerald-600">{lang === 'ar' ? `الثلث ${trimester}` : `Trimestre ${trimester}`}</div>
        </div>
      </div>
    </div>
  );
}

// 9. Pregnancy Calorie Calculator
function PregnancyCalorieTool({ lang }: { lang: Language }) {
  const [baseCal, setBaseCal] = useState(1950);
  const [stage, setStage] = useState<'t1' | 't2' | 't3' | 'lact1' | 'lact2'>('t2');
  const bonus = stage === 't1' ? 0 : stage === 't2' ? 340 : stage === 't3' ? 452 : stage === 'lact1' ? 500 : 400;

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'السعرات الأساسية قبل الحمل:' : 'Besoins caloriques avant grossesse :'}</label>
          <input type="number" step="50" value={baseCal} onChange={(e) => setBaseCal(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'المرحلة الحالية:' : 'Phase actuelle :'}</label>
          <select value={stage} onChange={(e) => setStage(e.target.value as 't1' | 't2' | 't3' | 'lact1' | 'lact2')} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-bold">
            <option value="t1">{lang === 'ar' ? 'الثلث الأول (لا زيادة +0)' : '1er Trimestre (+0 kcal)'}</option>
            <option value="t2">{lang === 'ar' ? 'الثلث الثاني (+340 سعرة)' : '2e Trimestre (+340 kcal)'}</option>
            <option value="t3">{lang === 'ar' ? 'الثلث الثالث (+452 سعرة)' : '3e Trimestre (+452 kcal)'}</option>
            <option value="lact1">{lang === 'ar' ? 'الرضاعة الطبيعية 0-6 أشهر (+500 سعرة)' : 'Allaitement 0-6 mois (+500 kcal)'}</option>
            <option value="lact2">{lang === 'ar' ? 'الرضاعة الطبيعية 7-12 شهر (+400 سعرة)' : 'Allaitement 7-12 mois (+400 kcal)'}</option>
          </select>
        </div>
      </div>

      <div className="p-4 sm:p-6 rounded-2xl bg-emerald-600 text-white flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-xs opacity-90 block">{lang === 'ar' ? 'الاحتياج اليومي الإجمالي' : 'Total quotidien recommandé'}</span>
          <span className="text-2xl sm:text-3xl font-black font-mono tabular-nums">{baseCal + bonus} kcal</span>
        </div>
        <span className="text-sm font-mono font-bold bg-emerald-700 px-3 py-1 rounded-lg">+{bonus} kcal</span>
      </div>
    </div>
  );
}

// 10. Fertile Window Tool
function FertileWindowTool({ lang }: { lang: Language }) {
  const [lastPeriod, setLastPeriod] = useState('2026-11-01');
  const [cycleLen, setCycleLen] = useState(28);
  const start = new Date(lastPeriod);
  const ovulation = new Date(start.getTime() + (cycleLen - 14) * 86400000);
  const winStart = new Date(ovulation.getTime() - 4 * 86400000);
  const winEnd = new Date(ovulation.getTime() + 1 * 86400000);

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'بداية آخر دورة شهرية:' : 'Début des dernières règles :'}</label>
          <input type="date" value={lastPeriod} onChange={(e) => setLastPeriod(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'متوسط طول الدورة (بالأيام):' : 'Durée moyenne du cycle (jours) :'}</label>
          <input type="number" min={21} max={38} value={cycleLen} onChange={(e) => setCycleLen(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-emerald-600 text-white">
          <span className="text-xs opacity-90">{lang === 'ar' ? 'يوم الإباضة المتوقع' : 'Jour d\'ovulation estimé'}</span>
          <div className="text-2xl font-black font-mono mt-1">{ovulation.toISOString().slice(0, 10)}</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">{lang === 'ar' ? 'نافذة الخصوبة العالية' : 'Fenêtre fertile'}</span>
          <div className="text-lg font-black font-mono mt-1 text-emerald-700 dark:text-emerald-400">
            {winStart.toISOString().slice(0, 10)} → {winEnd.toISOString().slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
}

// 11. Prediabetes Risk (CDC style score)
function PrediabetesRiskTool({ lang }: { lang: Language }) {
  const [checks, setChecks] = useState<boolean[]>([false, false, false, false, false]);
  const questions = [
    { ar: 'العمر 40 سنة أو أكثر', fr: 'Âge égal ou supérieur à 40 ans', pts: 2 },
    { ar: 'وجود إصابة بالسكري لدى أحد الوالدين أو الإخوة', fr: 'Antécédents familiaux de diabète (parent/fratrie)', pts: 1 },
    { ar: 'ممارسة النشاط البدني أقل من 3 مرات أسبوعيا', fr: 'Activité physique inférieure à 3 fois/semaine', pts: 1 },
    { ar: 'زيادة الوزن أو السمنة (BMI >= 25)', fr: 'Surpoids ou obésité (IMC >= 25)', pts: 2 },
    { ar: 'ارتفاع ضغط الدم المشخص أو سكري الحمل سابقا', fr: 'Hypertension artérielle ou diabète gestationnel passé', pts: 1 },
  ];

  const score = checks.reduce((sum, c, idx) => sum + (c ? questions[idx].pts : 0), 0);

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
        {questions.map((q, i) => (
          <label key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40">
            <input
              type="checkbox"
              checked={checks[i]}
              onChange={() => setChecks(checks.map((v, idx) => (idx === i ? !v : v)))}
              className="w-4 h-4 accent-emerald-600 shrink-0"
            />
            <span className="text-sm font-medium">{q[lang]}</span>
          </label>
        ))}
      </div>

      <div className={`p-4 sm:p-5 rounded-2xl text-white flex flex-wrap items-center justify-between gap-3 ${score >= 5 ? 'bg-amber-600' : 'bg-emerald-600'}`}>
        <div>
          <span className="text-xs opacity-90 block">{lang === 'ar' ? 'النتيجة التقييمية' : 'Score évalué'}</span>
          <span className="text-2xl font-black font-mono">{score} / 7</span>
        </div>
        <span className="text-sm font-bold">
          {score >= 5
            ? (lang === 'ar' ? 'خطر مرتفع — ينصح بفحص HbA1c عند الطبيب' : 'Risque élevé — Bilan HbA1c conseillé')
            : (lang === 'ar' ? 'خطر منخفض إلى متوسط' : 'Risque faible à modéré')}
        </span>
      </div>
    </div>
  );
}

// 12. Diabetes Awareness Log (with localStorage)
function DiabetesLogTool({ lang }: { lang: Language }) {
  const [glucose, setGlucose] = useState(110);
  const [timing, setTiming] = useState<'fasting' | 'post'>('fasting');
  const [logs, setLogs] = useState<{ date: string; val: number; timing: string }[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const saved = localStorage.getItem('dz_glucose_logs');
        if (saved) setLogs(JSON.parse(saved));
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const addLog = () => {
    const next = [{ date: new Date().toLocaleDateString('fr-DZ'), val: glucose, timing }, ...logs].slice(0, 10);
    setLogs(next);
    try {
      localStorage.setItem('dz_glucose_logs', JSON.stringify(next));
    } catch {}
  };

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:flex-wrap sm:items-end gap-3">
        <div className="w-full sm:flex-1">
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'قياس سكر الدم (mg/dL):' : 'Glycémie (mg/dL) :'}</label>
          <input type="number" value={glucose} onChange={(e) => setGlucose(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <div className="w-full sm:flex-1">
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'التوقيت:' : 'Moment :'}</label>
          <select value={timing} onChange={(e) => setTiming(e.target.value as 'fasting' | 'post')} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-bold">
            <option value="fasting">{lang === 'ar' ? 'صائم (قبل الأكل)' : 'À jeun'}</option>
            <option value="post">{lang === 'ar' ? 'بعد الأكل بساعتين' : '2h après repas'}</option>
          </select>
        </div>
        <button type="button" onClick={addLog} className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold">
          {lang === 'ar' ? 'حفظ القراءة' : 'Enregistrer'}
        </button>
      </div>

      {logs.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 space-y-2">
          <span className="text-xs font-bold text-slate-500 block">{lang === 'ar' ? 'سجل القياسات المحفوظ على جهازك:' : 'Historique local :'}</span>
          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {logs.map((l, i) => (
              <div key={i} className="py-2 flex flex-wrap items-center justify-between gap-2">
                <span>{l.date} · {l.timing === 'fasting' ? (lang === 'ar' ? 'صائم' : 'À jeun') : (lang === 'ar' ? 'بعد الأكل' : 'Post-prandial')}</span>
                <span className="font-mono font-bold text-emerald-600">{l.val} mg/dL</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 13. Asthma Control Test (ACT 5 items)
function AsthmaControlTool({ lang }: { lang: Language }) {
  const [scores, setScores] = useState([4, 4, 4, 4, 4]);
  const total = scores.reduce((a, b) => a + b, 0);
  const items = [
    { ar: 'هل أعاق الربو نشاطك في العمل أو الدراسة أو البيت آخر 4 أسابيع؟', fr: 'L\'asthme a-t-il limité vos activités ces 4 dernières semaines ?' },
    { ar: 'كم مرة عانيت من ضيق في التنفس؟', fr: 'À quelle fréquence avez-vous eu des essoufflements ?' },
    { ar: 'كم مرة أيقظتك أعراض الربو ليلا؟', fr: 'Les symptômes vous ont-ils réveillé la nuit ?' },
    { ar: 'كم مرة احتجت لاستعمال البخاخ الإسعافي؟', fr: 'Combien de fois avez-vous utilisé votre inhalateur de secours ?' },
    { ar: 'كيف تقيم درجة تحكمك بالربو عموما؟', fr: 'Comment évaluez-vous le contrôle global de votre asthme ?' },
  ];

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        {items.map((it, idx) => (
          <div key={idx} className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold block">{it[lang]}</label>
            <input
              type="range"
              min={1}
              max={5}
              value={scores[idx]}
              onChange={(e) => setScores(scores.map((s, i) => (i === idx ? Number(e.target.value) : s)))}
              className="w-full accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>1 ({lang === 'ar' ? 'دائما / ضعيف' : 'Toujours / Faible'})</span>
              <span className="font-mono font-bold text-emerald-600">{scores[idx]}</span>
              <span>5 ({lang === 'ar' ? 'أبدا / تحكم ممتاز' : 'Jamais / Optimal'})</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`p-4 sm:p-5 rounded-2xl text-white flex flex-wrap items-center justify-between gap-3 ${total >= 20 ? 'bg-emerald-600' : 'bg-amber-600'}`}>
        <div>
          <span className="text-xs opacity-90 block">Score ACT</span>
          <span className="text-3xl font-black font-mono">{total} / 25</span>
        </div>
        <span className="text-sm font-bold">
          {total >= 20
            ? (lang === 'ar' ? 'الربو تحت السيطرة الجيدة' : 'Asthme bien contrôlé')
            : (lang === 'ar' ? 'تحكم غير كاف — راجع طبيبك المعالج' : 'Contrôle insuffisant — consultez votre médecin')}
        </span>
      </div>
    </div>
  );
}

// 14 & 15. GAD-7 & PHQ-9 Mental Health Screeners
function MentalHealthScreener({ lang, kind }: { lang: Language; kind: 'gad7' | 'phq9' }) {
  const count = kind === 'gad7' ? 7 : 9;
  const [vals, setVals] = useState<number[]>(Array(count).fill(0));
  const total = vals.reduce((a, b) => a + b, 0);

  const questions =
    kind === 'gad7'
      ? [
          { ar: 'الشعور بالتوتر أو القلق الشديد', fr: 'Sentiment de nervosité ou d\'anxiété' },
          { ar: 'صعوبة التوقف عن التفكير والقلق', fr: 'Incapacité d\'arrêter de s\'inquiéter' },
          { ar: 'القلق الزائد حيال أمور متعددة', fr: 'Inquiétude excessive pour divers sujets' },
          { ar: 'صعوبة الاسترخاء والهدوء', fr: 'Difficulté à se détendre' },
          { ar: 'التملل وعدم القدرة على الجلوس بهدوء', fr: 'Agitation rendant difficile de tenir en place' },
          { ar: 'سرعة الغضب أو الانزعاج', fr: 'Irritabilité ou agacement facile' },
          { ar: 'الشعور بالخوف وكأن أمرا سيئا سيحدث', fr: 'Peur qu\'un événement grave arrive' },
        ]
      : [
          { ar: 'قلة الاهتمام أو الاستمتاع بالأنشطة المعتادة', fr: 'Manque d\'intérêt ou de plaisir' },
          { ar: 'الشعور بالحزن أو الإحباط', fr: 'Sentiment de tristesse ou découragement' },
          { ar: 'صعوبة النوم أو النوم المفرط', fr: 'Troubles du sommeil' },
          { ar: 'الشعور بالتعب وانخفاض الطاقة', fr: 'Fatigue ou manque d\'énergie' },
          { ar: 'ضعف الشهية أو الإفراط في الأكل', fr: 'Perte d\'appétit ou hyperphagie' },
          { ar: 'عدم الرضا عن النفس', fr: 'Dévalorisation de soi' },
          { ar: 'صعوبة التركيز في القراءة أو العمل', fr: 'Difficultés de concentration' },
          { ar: 'بطء الحركة أو تململ ملحوظ', fr: 'Lenteur ou agitation psychomotrice' },
          { ar: 'أفكار متكررة بالإرهاق النفسي الشديد', fr: 'Détresse psychologique sévère' },
        ];

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
        {questions.map((q, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800 last:border-b-0">
            <span className="text-xs sm:text-sm font-medium">{q[lang]}</span>
            <select
              value={vals[i]}
              onChange={(e) => setVals(vals.map((v, idx) => (idx === i ? Number(e.target.value) : v)))}
              className="w-full sm:w-auto px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-semibold shrink-0"
            >
              <option value={0}>{lang === 'ar' ? 'أبدا (0)' : 'Jamais (0)'}</option>
              <option value={1}>{lang === 'ar' ? 'عدة أيام (1)' : 'Plusieurs jours (1)'}</option>
              <option value={2}>{lang === 'ar' ? 'أكثر من نصف الأيام (2)' : 'Plus de la moitié (2)'}</option>
              <option value={3}>{lang === 'ar' ? 'تقريبا كل يوم (3)' : 'Presque chaque jour (3)'}</option>
            </select>
          </div>
        ))}
      </div>

      <div className={`p-4 sm:p-5 rounded-2xl text-white flex flex-wrap items-center justify-between gap-3 ${total >= 15 ? 'bg-amber-600' : 'bg-emerald-600'}`}>
        <div>
          <span className="text-xs opacity-90 block">{kind.toUpperCase()} Score</span>
          <span className="text-3xl font-black font-mono">{total} / {count * 3}</span>
        </div>
        <span className="text-sm font-bold">
          {total < 5
            ? (lang === 'ar' ? 'مستوى طبيعي / خفيف جدا' : 'Niveau minimal')
            : total < 10
              ? (lang === 'ar' ? 'مؤشر خفيف' : 'Léger')
              : total < 15
                ? (lang === 'ar' ? 'مؤشر متوسط — ينصح باستشارة مختص' : 'Modéré — Avis professionnel conseillé')
                : (lang === 'ar' ? 'مؤشر مرتفع — تواصل مع طبيب أو أخصائي نفسي' : 'Élevé — Consultez un professionnel')}
        </span>
      </div>
    </div>
  );
}

// 16. Eating Awareness
function EatingAwarenessTool({ lang }: { lang: Language }) {
  const [habits, setHabits] = useState([true, true, false, true, false]);
  const labels = [
    { ar: 'تناول 3 وجبات منتظمة يوميا دون تخطي الإفطار', fr: '3 repas réguliers sans sauter le petit-déjeuner' },
    { ar: 'إدراج الخضر والفواكه يوميا في النظام الغذائي', fr: 'Consommation quotidienne de légumes et fruits' },
    { ar: 'تقليل السكريات والمشروبات الغازية', fr: 'Limitation des sucres ajoutés et sodas' },
    { ar: 'شرب كاف من الماء بين الوجبات', fr: 'Hydratation régulière hors repas' },
    { ar: 'مضغ الطعام ببطء وتجنب الأكل المتأخر ليلا', fr: 'Repas pris calmement et dîner tôt le soir' },
  ];
  const pts = habits.filter(Boolean).length;

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-2.5">
        {labels.map((l, i) => (
          <label key={i} className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 cursor-pointer">
            <input type="checkbox" checked={habits[i]} onChange={() => setHabits(habits.map((h, idx) => (idx === i ? !h : h)))} className="w-4 h-4 accent-emerald-600 shrink-0" />
            <span className="text-sm">{l[lang]}</span>
          </label>
        ))}
      </div>
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-600 text-white flex flex-wrap items-center justify-between gap-2">
        <span className="font-bold text-sm">{lang === 'ar' ? 'درجة التوازن الغذائي:' : 'Score d\'équilibre alimentaire :'}</span>
        <span className="text-2xl font-black font-mono">{pts} / {labels.length}</span>
      </div>
    </div>
  );
}

// 17. Sleep Assessment
function SleepAssessmentTool({ lang }: { lang: Language }) {
  const [hours, setHours] = useState(7.5);
  const [snoring, setSnoring] = useState(false);
  const [tired, setTired] = useState(false);
  const [screens, setScreens] = useState(true);

  const score = (hours >= 7 && hours <= 9 ? 40 : 20) + (!snoring ? 25 : 0) + (!tired ? 20 : 0) + (!screens ? 15 : 5);

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'متوسط ساعات النوم ليلا:' : 'Heures de sommeil par nuit :'}</label>
          <input type="number" step="0.5" min={2} max={14} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full sm:w-40 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="checkbox" checked={snoring} onChange={(e) => setSnoring(e.target.checked)} className="w-4 h-4 accent-emerald-600 shrink-0" />
          <span>{lang === 'ar' ? 'وجود شخير مرتفع أو انقطاع نفس ملحوظ أثناء النوم' : 'Ronflements fréquents ou pauses respiratoires'}</span>
        </label>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="checkbox" checked={tired} onChange={(e) => setTired(e.target.checked)} className="w-4 h-4 accent-emerald-600 shrink-0" />
          <span>{lang === 'ar' ? 'نعاس وإرهاق واضح خلال النهار' : 'Somnolence ou fatigue diurne'}</span>
        </label>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="checkbox" checked={screens} onChange={(e) => setScreens(e.target.checked)} className="w-4 h-4 accent-emerald-600 shrink-0" />
          <span>{lang === 'ar' ? 'استعمال الهاتف أو الشاشات قبل النوم مباشرة' : 'Écrans juste avant le coucher'}</span>
        </label>
      </div>

      <div className="p-4 sm:p-5 rounded-2xl bg-indigo-700 text-white flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Moon className="w-5 h-5 shrink-0" />
          <span className="font-bold text-sm">{lang === 'ar' ? 'مؤشر جودة النوم التقديري' : 'Indice Qualité de Sommeil'}</span>
        </div>
        <span className="text-2xl sm:text-3xl font-black font-mono tabular-nums">{score} / 100</span>
      </div>
    </div>
  );
}

// 18. Visual Acuity Screening (Snellen / Tumbling E interactive)
function VisualAcuityTool({ lang }: { lang: Language }) {
  const levels = [
    { label: '20/200', px: 56, dir: 'E' },
    { label: '20/100', px: 40, dir: '∃' },
    { label: '20/50', px: 28, dir: 'E' },
    { label: '20/30', px: 18, dir: 'M' },
    { label: '20/20', px: 12, dir: 'W' },
  ];
  const [selected, setSelected] = useState(levels.length - 1);

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-center space-y-5">
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
          <Eye className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{lang === 'ar' ? 'اختر أصغر سطر يمكنك تمييز اتجاه حروفه بوضوح من مسافة ذراع:' : 'Sélectionnez la plus petite ligne lisible nettement à bout de bras :'}</span>
        </div>

        <div className="space-y-3 py-4 border-y border-slate-100 dark:border-slate-800 overflow-x-auto">
          {levels.map((lv, idx) => (
            <button
              key={lv.label}
              type="button"
              onClick={() => setSelected(idx)}
              className={`block w-full py-2 rounded-xl transition-colors ${
                selected === idx ? 'bg-emerald-50 dark:bg-emerald-950/50 ring-2 ring-emerald-500' : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
              }`}
            >
              <span className="font-mono font-black tracking-[0.2em] sm:tracking-[0.4em] text-slate-900 dark:text-slate-100" style={{ fontSize: `${lv.px}px` }}>
                {lv.dir} {lv.dir === 'E' ? '∃' : 'E'} {lv.dir}
              </span>
              <span className="block text-[11px] font-mono text-slate-400 mt-1">{lv.label}</span>
            </button>
          ))}
        </div>

        <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
          {lang === 'ar' ? `المستوى المختار: ${levels[selected].label}` : `Palier sélectionné : ${levels[selected].label}`}
        </p>
      </div>
    </div>
  );
}

// 19. Pilgrim Health Checklist (Hadj / Omra - 12 Items)
function PilgrimHealthChecklistTool({ lang }: { lang: Language }) {
  const items = [
    { ar: 'تطعيم الحمى الشوكية الرباعي (ACWY) قبل السفر بـ 10 أيام على الأقل', fr: 'Vaccin méningococcique tétravalent ACWY (10+ jours avant le départ)' },
    { ar: 'تطعيم الإنفلونزا الموسمية وفق التوصيات الصحية المعتمدة', fr: 'Vaccination contre la grippe saisonnière recommandée' },
    { ar: 'إصدار الدفتر الصحي وشهادة التأهيل من اللجنة الطبية الولائية', fr: 'Carnet sanitaire et certificat d\'aptitude médicale de wilaya' },
    { ar: 'تحضير تقارير طبية محدثة ووصفات واضحة للأمراض المزمنة', fr: 'Comptes rendus médicaux récents et ordonnances détaillées' },
    { ar: 'تجهيز كمية كافية من الأدوية المزمنة لتغطية كامل مدة الرحلة مع احتياط إضافي', fr: 'Réserve suffisante de traitements chroniques pour toute la durée du voyage' },
    { ar: 'حقيبة إسعافات أولية شخصية (مسكنات، مطهر، ضمادات، أملاح الإرواء)', fr: 'Trousse de secours personnelle (antalgiques, antiseptique, pansements, SRO)' },
    { ar: 'معدات الوقاية من الشمس والحر: مظلة بيضاء، نظارات شمسية، وواقي شمس غير معطر', fr: 'Protection solaire : ombrelle claire, lunettes de soleil et écran sans parfum' },
    { ar: 'قارورة ماء قابلة لإعادة التعبئة مع خطة شرب منتظمة طوال اليوم', fr: 'Gourde réutilisable pour maintenir une hydratation régulière' },
    { ar: 'حذاء طبي مريح ومشرب قطني لتفادي التقرحات والالتهابات أثناء المشي الطويل', fr: 'Chaussures souples confortables adaptées aux longues marches' },
    { ar: 'ملابس قطنية فضفاضة وفاتحة اللون تتناسب مع درجات الحرارة المرتفعة', fr: 'Vêtements en coton amples et clairs adaptés aux fortes chaleurs' },
    { ar: 'بطاقة تعريف شخصية تتضمن فصيلة الدم، الحساسية الدوائية، ورقم مرافق أو بعثة', fr: 'Fiche personnelle indiquant groupe sanguin, allergies et contact d\'urgence' },
    { ar: 'معرفة مواقع العيادات القريبة وأرقام البعثة الصحية الجزائرية والطوارئ', fr: 'Repérage des postes médicaux sur place et numéros d\'urgence de la mission' },
  ];
  const [checked, setChecked] = useState<boolean[]>(Array(items.length).fill(false));

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2 font-bold min-w-0">
            <Compass className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{lang === 'ar' ? 'القائمة الصحية للحاج والمعتمر (12 بندا)' : 'Check-list Médicale Pèlerin (12 Points)'}</span>
          </div>
          <span className="font-mono text-xs font-bold text-emerald-600 shrink-0">{checked.filter(Boolean).length} / {items.length}</span>
        </div>

        {items.map((it, i) => (
          <label key={i} className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40">
            <input type="checkbox" checked={checked[i]} onChange={() => setChecked(checked.map((c, idx) => (idx === i ? !c : c)))} className="w-4 h-4 mt-0.5 accent-emerald-600" />
            <span className="text-sm">{it[lang]}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

interface MedEntry {
  id: string;
  name: string;
  doseTime: string;
  status: 'pending' | 'taken' | 'missed';
  correctedAt?: string;
}

interface MedProfile {
  id: string;
  label: string;
  meds: MedEntry[];
}

const MED_STORAGE_KEY = 'dz_portal_med_tracker_v1';

// 20. Medication Tracker (Max 3 Independent Profiles, Local Storage & JSON Backup)
function MedicationTrackerTool({ lang }: { lang: Language }) {
  const isAr = lang === 'ar';
  const defaultProfiles: MedProfile[] = [
    { id: 'prof-1', label: isAr ? 'الملف الشخصي 1' : 'Profil Famille 1', meds: [] },
  ];
  const [profiles, setProfiles] = useState<MedProfile[]>(defaultProfiles);
  const [activeId, setActiveId] = useState<string>('prof-1');
  const [newProfileName, setNewProfileName] = useState('');
  const [medName, setMedName] = useState('');
  const [medTime, setMedTime] = useState('08:00');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(MED_STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setProfiles(parsed.slice(0, 3));
            setActiveId(parsed[0].id);
          }
        }
      } catch {
        // Ignore storage error
      }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const persist = (next: MedProfile[]) => {
    setProfiles(next);
    try {
      window.localStorage.setItem(MED_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage error
    }
  };

  const activeProfile = profiles.find((p) => p.id === activeId) || profiles[0];

  const handleAddProfile = () => {
    if (profiles.length >= 3 || !newProfileName.trim()) return;
    const created: MedProfile = {
      id: `prof-${Date.now()}`,
      label: newProfileName.trim(),
      meds: [],
    };
    const next = [...profiles, created];
    persist(next);
    setActiveId(created.id);
    setNewProfileName('');
  };

  const handleAddMed = () => {
    if (!medName.trim()) return;
    const entry: MedEntry = {
      id: `med-${Date.now()}`,
      name: medName.trim(),
      doseTime: medTime || '08:00',
      status: 'pending',
    };
    const next = profiles.map((p) =>
      p.id === activeProfile.id ? { ...p, meds: [...p.meds, entry] } : p
    );
    persist(next);
    setMedName('');
    setFeedback('');
  };

  const updateMedStatus = (medId: string, status: MedEntry['status']) => {
    const nowLabel = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const next = profiles.map((p) =>
      p.id === activeProfile.id
        ? {
            ...p,
            meds: p.meds.map((m) =>
              m.id === medId
                ? {
                    ...m,
                    status,
                    correctedAt: m.status === 'missed' && status === 'taken' ? nowLabel : m.correctedAt,
                  }
                : m
            ),
          }
        : p
    );
    persist(next);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(profiles, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'medication-tracker-backup.json';
    a.click();
    URL.revokeObjectURL(url);
    setFeedback(isAr ? 'تم تنزيل نسخة JSON الاحتياطية بنجاح.' : 'Sauvegarde JSON téléchargée.');
  };

  const takenCount = activeProfile.meds.filter((m) => m.status === 'taken').length;
  const missedCount = activeProfile.meds.filter((m) => m.status === 'missed').length;

  return (
    <div className="space-y-5">
      <MedicalDisclaimer lang={lang} />

      <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
        {isAr
          ? 'تنبيه تنظيمي: أدخل الجرعات والأوقات كما وردت في وصفة الطبيب أو الصيدلي فقط، ولا تغير الجرعة أو تعوض الجرعة الفائتة اعتمادا على الأداة.'
          : 'Rappel de sécurité : saisissez uniquement les doses prescrites par votre médecin ou pharmacien ; ne modifiez ni ne doublez jamais une prise sans avis médical.'}
      </div>

      {/* Profiles (Max 3) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            {isAr ? 'ملفات أفراد العائلة (3 ملفات كحد أقصى)' : 'Profils familiaux (3 profils maximum)'}
          </h3>
          <span className="text-xs font-mono text-emerald-600 font-bold">{profiles.length} / 3</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {profiles.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                p.id === activeProfile.id
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {profiles.length < 3 && (
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
            <input
              type="text"
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
              placeholder={isAr ? 'اسم الملف الجديد...' : 'Nom du profil...'}
              className="w-full sm:flex-1 sm:min-w-[180px] px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
            />
            <button
              type="button"
              onClick={handleAddProfile}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold"
            >
              {isAr ? 'إضافة ملف' : 'Ajouter un profil'}
            </button>
          </div>
        )}
      </div>

      {/* Add medication */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
          {isAr ? `إضافة علاج لـ (${activeProfile.label})` : `Ajouter un traitement (${activeProfile.label})`}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            value={medName}
            onChange={(e) => setMedName(e.target.value)}
            placeholder={isAr ? 'اسم الدواء والجرعة الموصوفة' : 'Nom du médicament et dose'}
            className="sm:col-span-2 px-3 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
          <input
            type="time"
            value={medTime}
            onChange={(e) => setMedTime(e.target.value)}
            className="px-3 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <button
          type="button"
          onClick={handleAddMed}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
        >
          {isAr ? 'حفظ العلاج في الجدول المحلي' : 'Enregistrer le traitement localement'}
        </button>

        {/* Meds list */}
        <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          {activeProfile.meds.length === 0 ? (
            <p className="text-xs text-slate-500">
              {isAr ? 'لا توجد أدوية مضافة لهذا الملف بعد.' : 'Aucun traitement enregistré pour ce profil.'}
            </p>
          ) : (
            activeProfile.meds.map((m) => (
              <div
                key={m.id}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100 break-words">{m.name}</p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {m.doseTime}
                    {m.correctedAt ? ` · ${isAr ? 'تم التصحيح' : 'Corrigé à'} ${m.correctedAt}` : ''}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => updateMedStatus(m.id, 'taken')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                      m.status === 'taken'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {isAr ? 'تم تناولها' : 'Prise effectuée'}
                  </button>
                  <button
                    type="button"
                    onClick={() => updateMedStatus(m.id, 'missed')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                      m.status === 'missed'
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {isAr ? 'جرعة فائتة' : 'Oubli / Manquée'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Individual Profile Report & JSON Backup */}
      <div className="bg-slate-50 dark:bg-slate-900/70 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs space-y-1">
          <p className="font-bold text-slate-900 dark:text-slate-100">
            {isAr ? `تقرير الفرد: ${activeProfile.label}` : `Rapport individuel : ${activeProfile.label}`}
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            {isAr
              ? `الجرعات المنفذة: ${takenCount} | الفائتة: ${missedCount} | الإجمالي: ${activeProfile.meds.length}`
              : `Prises validées : ${takenCount} | Manquées : ${missedCount} | Total : ${activeProfile.meds.length}`}
          </p>
        </div>
        <button
          type="button"
          onClick={handleExport}
          className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold hover:border-emerald-500"
        >
          {isAr ? 'تنزيل نسخة احتياطية JSON' : 'Exporter sauvegarde JSON'}
        </button>
      </div>
      {feedback && <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">{feedback}</p>}
    </div>
  );
}
