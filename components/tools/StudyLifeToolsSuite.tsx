'use client';

import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Percent,
  Ruler,
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  CheckSquare,
  Plus,
  Trash2,
  MapPin,
  Sprout,
  Utensils,
  Wallet,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { ALGERIA_MAIN_WILAYAS } from '@/lib/calculators';

interface Props {
  slug: string;
  lang: Language;
}

export default function StudyLifeToolsSuite({ slug, lang }: Props) {
  if (slug === 'calculator') return <ScientificCalculatorTool lang={lang} />;
  if (slug === 'percentage-calculator') return <PercentageTool lang={lang} />;
  if (slug === 'average-calculator' || slug === 'semester-calculator') return <AverageTool lang={lang} />;
  if (slug === 'unit-converter') return <UnitConverterTool lang={lang} />;
  if (slug === 'flashcards') return <FlashcardsTool lang={lang} />;
  if (slug === 'exam-planner' || slug === 'exam-study-planner' || slug === 'research-plan') return <ExamResearchPlannerTool lang={lang} mode={slug} />;
  if (slug === 'apa-generator') return <ApaGeneratorTool lang={lang} />;
  if (slug === 'countdown') return <CountdownTool lang={lang} />;
  if (slug === 'notes-calendar') return <NotesCalendarTool lang={lang} />;
  if (slug === 'points-ranking') return <PointsRankingTool lang={lang} />;
  if (slug === 'study-schedule') return <StudyScheduleTool lang={lang} />;
  if (slug === 'budget-calculator') return <Budget503020Tool lang={lang} />;
  if (slug === 'budget-manager') return <BudgetManagerTool lang={lang} />;
  if (slug === 'farm-planner') return <FarmPlannerTool lang={lang} />;
  if (slug === 'maps') return <AlgeriaMapsTool lang={lang} />;
  return <MealPlannerTool lang={lang} />;
}

// 1. Scientific & Standard Calculator
function ScientificCalculatorTool({ lang }: { lang: Language }) {
  const [expr, setExpr] = useState('0');

  const press = (val: string) => {
    if (val === 'C') {
      setExpr('0');
      return;
    }
    if (val === '=') {
      try {
        // Safe numeric expression evaluation (digits, operators, Math helpers only)
        const sanitized = expr.replace(/[^0-9+\-*/().%]/g, '');
        if (!sanitized) return;
        const result = Function(`"use strict"; return (${sanitized})`)();
        setExpr(String(Number(Number(result).toFixed(8))));
      } catch {
        setExpr('Error');
      }
      return;
    }
    setExpr((prev) => (prev === '0' || prev === 'Error' ? val : prev + val));
  };

  const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '(', ')', '+', '%', 'C', '='];

  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
        <Calculator className="w-4 h-4 text-emerald-600" />
        <span>{lang === 'ar' ? 'الحاسبة السريعة والعمليات الحسابية' : 'Calculatrice Rapide'}</span>
      </div>
      <div className="p-4 rounded-xl bg-slate-950 text-white font-mono text-2xl font-black text-end overflow-x-auto">
        {expr}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {keys.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => press(k)}
            className={`py-3 rounded-xl font-mono font-bold text-base border transition-colors ${
              k === '='
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600'
                : k === 'C'
                  ? 'bg-red-50 dark:bg-red-950/40 text-red-600 border-red-200 dark:border-red-900'
                  : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'
            }`}
          >
            {k}
          </button>
        ))}
      </div>
    </div>
  );
}

// 2. Percentage Calculator
function PercentageTool({ lang }: { lang: Language }) {
  const [percent, setPercent] = useState(19);
  const [total, setTotal] = useState(50000);
  const [fromVal, setFromVal] = useState(10000);
  const [toVal, setToVal] = useState(12500);

  const partVal = (percent / 100) * total;
  const pctChange = fromVal > 0 ? ((toVal - fromVal) / fromVal) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <Percent className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{lang === 'ar' ? 'حساب نسبة مئوية من مبلغ (مثل TVA 19%)' : 'Pourcentage d\'un montant (ex : TVA 19%)'}</span>
        </h3>
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-slate-500 block mb-1">{lang === 'ar' ? 'النسبة (%)' : 'Taux (%)'}</label>
            <input type="number" value={percent} onChange={(e) => setPercent(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
          <div>
            <label className="text-xs text-slate-500 block mb-1">{lang === 'ar' ? 'المبلغ الأساسي' : 'Montant'}</label>
            <input type="number" value={total} onChange={(e) => setTotal(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
        </div>
        <div className="p-4 rounded-xl bg-emerald-600 text-white font-mono">
          <span className="text-xs opacity-90 block">{lang === 'ar' ? 'القيمة الناتجة:' : 'Valeur calculée :'}</span>
          <span className="text-2xl font-black">{partVal.toLocaleString('fr-DZ')}</span>
          <span className="text-xs block opacity-85 mt-1">{lang === 'ar' ? `الإجمالي مع الإضافة: ${(total + partVal).toLocaleString('fr-DZ')}` : `Total TTC : ${(total + partVal).toLocaleString('fr-DZ')}`}</span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <Percent className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{lang === 'ar' ? 'نسبة التغير بين قيمتين' : 'Variation en pourcentage'}</span>
        </h3>
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-slate-500 block mb-1">{lang === 'ar' ? 'القيمة القديمة' : 'Ancienne valeur'}</label>
            <input type="number" value={fromVal} onChange={(e) => setFromVal(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
          <div>
            <label className="text-xs text-slate-500 block mb-1">{lang === 'ar' ? 'القيمة الجديدة' : 'Nouvelle valeur'}</label>
            <input type="number" value={toVal} onChange={(e) => setToVal(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
          </div>
        </div>
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono">
          <span className="text-xs text-slate-500 block">{lang === 'ar' ? 'نسبة الزيادة / النقصان:' : 'Variation :'}</span>
          <span className={`text-2xl font-black ${pctChange >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
            {pctChange >= 0 ? '+' : ''}{pctChange.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}

// 3. School & LMD Average Calculator
function AverageTool({ lang }: { lang: Language }) {
  const [modules, setModules] = useState([
    { name: lang === 'ar' ? 'الرياضيات / مقياس 1' : 'Mathématiques / Module 1', coef: 5, note: 14.5 },
    { name: lang === 'ar' ? 'الفيزياء / مقياس 2' : 'Physique / Module 2', coef: 4, note: 13.0 },
    { name: lang === 'ar' ? 'العلوم / مقياس 3' : 'Sciences / Module 3', coef: 3, note: 15.0 },
    { name: lang === 'ar' ? 'اللغة العربية' : 'Langue Arabe', coef: 2, note: 14.0 },
  ]);

  const totalCoef = modules.reduce((s, m) => s + Number(m.coef || 0), 0);
  const totalPts = modules.reduce((s, m) => s + Number(m.coef || 0) * Number(m.note || 0), 0);
  const avg = totalCoef > 0 ? totalPts / totalCoef : 0;

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-bold text-sm flex items-center gap-2 min-w-0">
            <GraduationCap className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{lang === 'ar' ? 'إدخال المواد والمعاملات (سلم /20)' : 'Matières, Coefficients et Notes (/20)'}</span>
          </h3>
          <button
            type="button"
            onClick={() => setModules([...modules, { name: lang === 'ar' ? 'مادة إضافية' : 'Nouvelle matière', coef: 2, note: 12 }])}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-1 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'إضافة مادة' : 'Ajouter'}</span>
          </button>
        </div>

        <div className="space-y-2.5">
          {modules.map((m, idx) => (
            <div key={idx} className="grid grid-cols-4 sm:grid-cols-12 gap-2 items-center">
              <input
                type="text"
                value={m.name}
                onChange={(e) => setModules(modules.map((x, i) => (i === idx ? { ...x, name: e.target.value } : x)))}
                className="col-span-4 sm:col-span-6 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-semibold"
              />
              <input
                type="number"
                min={1}
                value={m.coef}
                onChange={(e) => setModules(modules.map((x, i) => (i === idx ? { ...x, coef: Number(e.target.value) } : x)))}
                title="Coefficient"
                className="col-span-1 sm:col-span-2 px-2 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-mono font-bold text-center"
              />
              <input
                type="number"
                step="0.25"
                min={0}
                max={20}
                value={m.note}
                onChange={(e) => setModules(modules.map((x, i) => (i === idx ? { ...x, note: Number(e.target.value) } : x)))}
                title="Note"
                className="col-span-2 sm:col-span-3 px-2 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-mono font-bold text-center"
              />
              <button
                type="button"
                onClick={() => setModules(modules.filter((_, i) => i !== idx))}
                className="col-span-1 text-red-500 flex justify-center"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={`p-4 sm:p-5 rounded-2xl text-white flex flex-wrap items-center justify-between gap-3 ${avg >= 10 ? 'bg-emerald-600' : 'bg-amber-600'}`}>
        <div>
          <span className="text-xs opacity-90 block">{lang === 'ar' ? `مجموع المعاملات: ${totalCoef} · المجموع: ${totalPts.toFixed(2)}` : `Total Coeff : ${totalCoef} · Points : ${totalPts.toFixed(2)}`}</span>
          <span className="text-2xl sm:text-3xl font-black font-mono tabular-nums">{avg.toFixed(2)} / 20</span>
        </div>
        <span className="text-sm font-bold">
          {avg >= 16
            ? (lang === 'ar' ? 'امتياز' : 'Très Bien')
            : avg >= 14
              ? (lang === 'ar' ? 'جيد جدا' : 'Bien')
              : avg >= 12
                ? (lang === 'ar' ? 'جيد' : 'Assez Bien')
                : avg >= 10
                  ? (lang === 'ar' ? 'ناجح' : 'Admis')
                  : (lang === 'ar' ? 'دون المعدل' : 'Ajourné')}
        </span>
      </div>
    </div>
  );
}

// 4. Unit & Algerian Area Converter
function UnitConverterTool({ lang }: { lang: Language }) {
  const [val, setVal] = useState(1);
  const [cat, setCat] = useState<'area' | 'length' | 'weight'>('area');

  const conversions =
    cat === 'area'
      ? [
          { unit: lang === 'ar' ? 'هكتار (Hectare)' : 'Hectares (ha)', factor: 1 },
          { unit: lang === 'ar' ? 'آر (Are - الوحدة العقارية)' : 'Ares (a)', factor: 100 },
          { unit: lang === 'ar' ? 'متر مربع (m²)' : 'Mètres carrés (m²)', factor: 10000 },
        ]
      : cat === 'length'
        ? [
            { unit: lang === 'ar' ? 'كيلومتر (km)' : 'Kilomètres (km)', factor: 1 },
            { unit: lang === 'ar' ? 'متر (m)' : 'Mètres (m)', factor: 1000 },
            { unit: lang === 'ar' ? 'سنتيمتر (cm)' : 'Centimètres (cm)', factor: 100000 },
          ]
        : [
            { unit: lang === 'ar' ? 'طن (Tonne)' : 'Tonnes (t)', factor: 1 },
            { unit: lang === 'ar' ? 'قنطار (Quintal - 100 كغ)' : 'Quintaux (q)', factor: 10 },
            { unit: lang === 'ar' ? 'كيلوغرام (kg)' : 'Kilogrammes (kg)', factor: 1000 },
          ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-5">
      <div className="flex flex-wrap gap-2">
        {(['area', 'length', 'weight'] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`px-4 py-2 rounded-xl text-xs font-bold border ${
              cat === c ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
            }`}
          >
            {c === 'area'
              ? (lang === 'ar' ? 'المساحات والعقار (هكتار/آر)' : 'Surface (Hectare / Are / m²)')
              : c === 'length'
                ? (lang === 'ar' ? 'الأطوال والمسافات' : 'Longueur')
                : (lang === 'ar' ? 'الأوزان (طن/قنطار/كغ)' : 'Poids (Tonne / Quintal / kg)')}
          </button>
        ))}
      </div>

      <div>
        <label className="block text-xs text-slate-500 mb-1">
          {lang === 'ar' ? `القيمة الأساسية بـ (${conversions[0].unit}):` : `Valeur de base (${conversions[0].unit}) :`}
        </label>
        <input type="number" value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full sm:w-64 px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {conversions.map((c, i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-500 block">{c.unit}</span>
            <span className="text-xl font-black font-mono text-emerald-700 dark:text-emerald-400">
              {(val * c.factor).toLocaleString('fr-DZ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. Flashcards Study Tool
function FlashcardsTool({ lang }: { lang: Language }) {
  const [cards, setCards] = useState([
    { q: lang === 'ar' ? 'عاصمة الجزائر؟' : 'Capitale de l\'Algérie ?', a: lang === 'ar' ? 'الجزائر العاصمة' : 'Alger' },
    { q: lang === 'ar' ? 'تاريخ اندلاع الثورة التحريرية؟' : 'Déclenchement de la Révolution ?', a: lang === 'ar' ? '1 نوفمبر 1954' : '1er Novembre 1954' },
    { q: lang === 'ar' ? 'السقف الجديد لبطاقة الشفاء؟' : 'Nouveau plafond Carte Chifa ?', a: '5 000 DZD' },
  ]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [newQ, setNewQ] = useState('');
  const [newA, setNewA] = useState('');

  const addCard = () => {
    if (!newQ.trim() || !newA.trim()) return;
    setCards([...cards, { q: newQ.trim(), a: newA.trim() }]);
    setNewQ('');
    setNewA('');
  };

  const active = cards[idx] || cards[0];

  return (
    <div className="max-w-lg mx-auto space-y-5">
      <button
        type="button"
        onClick={() => setFlipped(!flipped)}
        className="w-full min-h-48 p-5 sm:p-8 rounded-2xl bg-emerald-600 text-white shadow-lg flex flex-col items-center justify-center text-center gap-3 transition-transform active:scale-99"
      >
        <span className="text-xs uppercase opacity-80">{flipped ? (lang === 'ar' ? 'الإجابة' : 'Réponse') : (lang === 'ar' ? 'السؤال (اضغط للقلب)' : 'Question (Cliquer)')}</span>
        <span className="text-xl sm:text-2xl font-black break-words">{flipped ? active.a : active.q}</span>
      </button>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <button type="button" onClick={() => { setFlipped(false); setIdx((idx - 1 + cards.length) % cards.length); }} className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold">
          {lang === 'ar' ? 'السابق' : 'Précédent'}
        </button>
        <span className="font-mono text-xs font-bold">{idx + 1} / {cards.length}</span>
        <button type="button" onClick={() => { setFlipped(false); setIdx((idx + 1) % cards.length); }} className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold">
          {lang === 'ar' ? 'التالي' : 'Suivant'}
        </button>
      </div>

      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
        <span className="text-xs font-bold text-slate-500 block">{lang === 'ar' ? 'أضف بطاقة مراجعة جديدة:' : 'Ajouter une carte :'}</span>
        <input type="text" placeholder={lang === 'ar' ? 'السؤال...' : 'Question...'} value={newQ} onChange={(e) => setNewQ(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs" />
        <input type="text" placeholder={lang === 'ar' ? 'الإجابة...' : 'Réponse...'} value={newA} onChange={(e) => setNewA(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs" />
        <button type="button" onClick={addCard} className="w-full py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold">{lang === 'ar' ? 'إضافة البطاقة' : 'Ajouter'}</button>
      </div>
    </div>
  );
}

// 6. Exam & Research Planner
function ExamResearchPlannerTool({ lang, mode }: { lang: Language; mode: string }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: mode === 'research-plan' ? (lang === 'ar' ? 'مراجعة الدراسات السابقة والإشكالية' : 'Revue de littérature & Problématique') : (lang === 'ar' ? 'مراجعة المحور الأول + حل 5 مواضيع' : 'Révision Chapitre 1 + Annales'), done: false },
    { id: 2, title: mode === 'research-plan' ? (lang === 'ar' ? 'جمع المعطيات والتحليل التطبيقي' : 'Collecte de données & Analyse') : (lang === 'ar' ? 'ملخص القوانين والتواريخ الأساسية' : 'Fiches de synthèse'), done: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const add = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask.trim(), done: false }]);
    setNewTask('');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder={lang === 'ar' ? 'أضف مهمة مراجعة أو فصل بحث...' : 'Ajouter une tâche...'} className="w-full sm:flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm" />
        <button type="button" onClick={add} className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shrink-0">{lang === 'ar' ? 'إضافة' : 'Ajouter'}</button>
      </div>
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {tasks.map((t) => (
          <div key={t.id} className="py-2.5 flex items-center justify-between gap-2">
            <label className="flex items-center gap-2.5 cursor-pointer text-sm min-w-0">
              <input type="checkbox" checked={t.done} onChange={() => setTasks(tasks.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)))} className="w-4 h-4 accent-emerald-600 shrink-0" />
              <span className={`break-words ${t.done ? 'line-through text-slate-400' : ''}`}>{t.title}</span>
            </label>
            <button type="button" onClick={() => setTasks(tasks.filter((x) => x.id !== t.id))} className="text-red-500 shrink-0"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 7. APA 7th Citation Generator
function ApaGeneratorTool({ lang }: { lang: Language }) {
  const [author, setAuthor] = useState('Benali, K.');
  const [year, setYear] = useState('2025');
  const [title, setTitle] = useState('Transformation numérique des services publics en Algérie');
  const [publisher, setPublisher] = useState('Éditions Universitaires');
  const citation = `${author} (${year}). ${title}. ${publisher}.`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className="px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-semibold" />
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" className="px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-semibold" />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="sm:col-span-2 px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-semibold" />
        <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} placeholder="Publisher / Journal" className="sm:col-span-2 px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-semibold" />
      </div>
      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 font-mono text-xs sm:text-sm break-words">
        <span className="block text-[11px] text-emerald-700 dark:text-emerald-400 font-bold mb-1">APA 7th Edition:</span>
        {citation}
      </div>
    </div>
  );
}

// 8. Countdown Tool
function CountdownTool({ lang }: { lang: Language }) {
  const [target, setTarget] = useState('2026-06-14');
  const [label, setLabel] = useState(lang === 'ar' ? 'امتحان شهادة البكالوريا' : 'Examen du Baccalauréat');
  const [nowMs, setNowMs] = useState<number>(() => Date.parse('2026-01-01T00:00:00Z'));

  useEffect(() => {
    const t = setTimeout(() => setNowMs(Date.now()), 0);
    return () => clearTimeout(t);
  }, [target]);

  const diffDays = Math.ceil((new Date(target).getTime() - nowMs) / 86400000);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-bold" />
        <input type="date" value={target} onChange={(e) => setTarget(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-bold" />
      </div>
      <div className="p-4 sm:p-6 rounded-2xl bg-emerald-600 text-white text-center">
        <span className="text-xs opacity-90 block">{label}</span>
        <div className="text-3xl sm:text-4xl font-black font-mono tabular-nums mt-1">{Math.max(0, diffDays)} {lang === 'ar' ? 'يوم متبقي' : 'jours restants'}</div>
      </div>
    </div>
  );
}

// 9. Notes & Calendar (localStorage)
function NotesCalendarTool({ lang }: { lang: Language }) {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [note, setNote] = useState('');
  const [entries, setEntries] = useState<{ date: string; text: string }[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const saved = localStorage.getItem('dz_study_notes');
        if (saved) setEntries(JSON.parse(saved));
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const save = () => {
    if (!note.trim()) return;
    const next = [{ date, text: note.trim() }, ...entries];
    setEntries(next);
    setNote('');
    try {
      localStorage.setItem('dz_study_notes', JSON.stringify(next));
    } catch {}
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full sm:w-auto px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-bold" />
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder={lang === 'ar' ? 'أضف ملاحظة أو تذكير...' : 'Nouvelle note...'} className="w-full sm:flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm" />
        <button type="button" onClick={save} className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shrink-0">{lang === 'ar' ? 'حفظ' : 'Enregistrer'}</button>
      </div>
      <div className="space-y-2">
        {entries.map((e, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="min-w-0 break-words"><strong className="font-mono text-emerald-600">{e.date}</strong> · {e.text}</span>
            <button type="button" onClick={() => setEntries(entries.filter((_, idx) => idx !== i))} className="text-red-500 shrink-0"><Trash2 className="w-3.5 h-3.5" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 10. Points Ranking
function PointsRankingTool({ lang }: { lang: Language }) {
  const [rows, setRows] = useState([
    { name: lang === 'ar' ? 'الإقامة الجامعية / التخصص 1' : 'Choix 1', score: 15.8 },
    { name: lang === 'ar' ? 'التخصص 2' : 'Choix 2', score: 14.2 },
    { name: lang === 'ar' ? 'التخصص 3' : 'Choix 3', score: 16.4 },
  ]);
  const sorted = [...rows].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <h3 className="font-bold text-sm">{lang === 'ar' ? 'الترتيب التلقائي التنازلي حسب النقاط:' : 'Classement automatique par score :'}</h3>
      <div className="space-y-2">
        {sorted.map((r, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-sm">
            <span className="font-bold min-w-0 break-words">#{i + 1} · {r.name}</span>
            <span className="font-mono font-black text-emerald-600 shrink-0">{r.score}</span>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setRows([...rows, { name: `${lang === 'ar' ? 'عنصر' : 'Item'} ${rows.length + 1}`, score: Number((10 + Math.random() * 8).toFixed(2)) }])} className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">
        {lang === 'ar' ? 'إضافة عنصر للمقارنة' : 'Ajouter un élément'}
      </button>
    </div>
  );
}

// 11. Study Schedule (Weekly Timetable)
function StudyScheduleTool({ lang }: { lang: Language }) {
  const days = lang === 'ar' ? ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'السبت'] : ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Sam'];
  const [slots, setSlots] = useState<string[]>(['الرياضيات', 'الفيزياء', 'العلوم', 'اللغات', 'مراجعة حرة', 'اختبار تجريبي']);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
      <h3 className="font-bold text-sm">{lang === 'ar' ? 'جدول المراجعة الأسبوعي القابل للتعديل:' : 'Emploi du temps hebdomadaire :'}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {days.map((d, i) => (
          <div key={d} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-xs font-bold text-emerald-600">{d}</span>
            <input
              type="text"
              value={slots[i]}
              onChange={(e) => setSlots(slots.map((s, idx) => (idx === i ? e.target.value : s)))}
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// 12. Monthly Budget 50/30/20
function Budget503020Tool({ lang }: { lang: Language }) {
  const [income, setIncome] = useState(80000);
  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800">
        <label className="block text-xs font-semibold text-slate-500 mb-2">{lang === 'ar' ? 'الدخل الشهري الصافي للأسرة (دج):' : 'Revenu mensuel net (DZD) :'}</label>
        <input type="number" step="1000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xl font-mono font-black" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/30">
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">50% ({lang === 'ar' ? 'الأساسيات' : 'Besoins'})</span>
          <div className="text-2xl font-black font-mono mt-1">{(income * 0.5).toLocaleString()} DZD</div>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400">30% ({lang === 'ar' ? 'الرغبات' : 'Envies'})</span>
          <div className="text-2xl font-black font-mono mt-1">{(income * 0.3).toLocaleString()} DZD</div>
        </div>
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-500/30">
          <span className="text-xs font-bold text-blue-700 dark:text-blue-400">20% ({lang === 'ar' ? 'الادخار' : 'Épargne'})</span>
          <div className="text-2xl font-black font-mono mt-1">{(income * 0.2).toLocaleString()} DZD</div>
        </div>
      </div>
    </div>
  );
}

// 13. Budget Manager (CRUD + localStorage)
function BudgetManagerTool({ lang }: { lang: Language }) {
  const [txs, setTxs] = useState<{ id: number; label: string; amount: number; kind: 'in' | 'out' }[]>([]);
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState(2500);
  const [kind, setKind] = useState<'in' | 'out'>('out');

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const saved = localStorage.getItem('dz_budget_txs');
        if (saved) setTxs(JSON.parse(saved));
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const add = () => {
    if (!label.trim()) return;
    const next = [{ id: Date.now(), label: label.trim(), amount, kind }, ...txs];
    setTxs(next);
    setLabel('');
    try { localStorage.setItem('dz_budget_txs', JSON.stringify(next)); } catch {}
  };

  const totalIn = txs.filter((t) => t.kind === 'in').reduce((s, t) => s + t.amount, 0);
  const totalOut = txs.filter((t) => t.kind === 'out').reduce((s, t) => s + t.amount, 0);

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:items-center">
        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder={lang === 'ar' ? 'البند (مثال: تسوق / راتب)...' : 'Libellé...'} className="w-full sm:flex-1 sm:min-w-40 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-semibold" />
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full sm:w-32 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-mono font-bold" />
        <select value={kind} onChange={(e) => setKind(e.target.value as 'in' | 'out')} className="w-full sm:w-auto px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-bold">
          <option value="out">{lang === 'ar' ? 'مصروف (-)' : 'Dépense (-)'}</option>
          <option value="in">{lang === 'ar' ? 'مدخول (+)' : 'Revenu (+)'}</option>
        </select>
        <button type="button" onClick={add} className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">{lang === 'ar' ? 'تسجيل' : 'Ajouter'}</button>
      </div>

      <div className="p-4 rounded-xl bg-emerald-600 text-white flex flex-wrap justify-between items-center gap-2 text-sm font-mono">
        <span>{lang === 'ar' ? 'الرصيد الصافي:' : 'Solde Net :'}</span>
        <span className="text-xl font-black tabular-nums">{(totalIn - totalOut).toLocaleString()} DZD</span>
      </div>
    </div>
  );
}

// 14. Farm Planner
function FarmPlannerTool({ lang }: { lang: Language }) {
  const [hectares, setHectares] = useState(5);
  const [crop, setCrop] = useState<'wheat' | 'olive' | 'potato'>('wheat');
  const rates = crop === 'wheat' ? { seedKg: 140, waterM3: 1800, yieldQ: 32 } : crop === 'olive' ? { seedKg: 0, waterM3: 2200, yieldQ: 45 } : { seedKg: 2000, waterM3: 4500, yieldQ: 280 };

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'المساحة الفلاحية (هكتار):' : 'Surface (Hectares) :'}</label>
          <input type="number" min={0.5} step="0.5" value={hectares} onChange={(e) => setHectares(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">{lang === 'ar' ? 'المحصول:' : 'Culture :'}</label>
          <select value={crop} onChange={(e) => setCrop(e.target.value as 'wheat' | 'olive' | 'potato')} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-bold">
            <option value="wheat">{lang === 'ar' ? 'القمح الصلب / الشعير' : 'Blé dur / Orge'}</option>
            <option value="olive">{lang === 'ar' ? 'الزيتون' : 'Oliviers'}</option>
            <option value="potato">{lang === 'ar' ? 'البطاطا' : 'Pomme de terre'}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-emerald-600 text-white">
          <span className="text-xs opacity-90 block">{lang === 'ar' ? 'المردود التقديري' : 'Rendement estimé'}</span>
          <span className="text-2xl font-black font-mono">{(hectares * rates.yieldQ).toFixed(0)} {lang === 'ar' ? 'قنطار' : 'Qx'}</span>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 block">{lang === 'ar' ? 'احتياج البذور' : 'Besoins semences'}</span>
          <span className="text-2xl font-black font-mono">{(hectares * rates.seedKg).toLocaleString()} kg</span>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 block">{lang === 'ar' ? 'احتياج السقي المقدر' : 'Besoin irrigation'}</span>
          <span className="text-2xl font-black font-mono">{(hectares * rates.waterM3).toLocaleString()} m³</span>
        </div>
      </div>
    </div>
  );
}

// 15. Algeria Wilayas Directory & Distance Finder
function AlgeriaMapsTool({ lang }: { lang: Language }) {
  const [q, setQ] = useState('');
  const filtered = ALGERIA_MAIN_WILAYAS.filter(
    (w) =>
      String(w.code).includes(q.trim()) ||
      w.name.ar.includes(q.trim()) ||
      w.name.fr.toLowerCase().includes(q.trim().toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex items-center gap-2 font-bold text-sm">
        <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
        <span>{lang === 'ar' ? 'دليل الولايات والرموز البريدية والمسافات عن الجزائر العاصمة' : 'Annuaire Wilayas, Codes & Distances depuis Alger'}</span>
      </div>
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={lang === 'ar' ? 'ابحث باسم الولاية أو الرقم (مثال: 16، وهران، قسنطينة)...' : 'Rechercher une wilaya ou un code (16, Oran...)...'}
        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
        {filtered.map((w) => (
          <div key={w.code} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <span className="font-mono font-black text-emerald-600 me-2">{String(w.code).padStart(2, '0')}</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">{w.name[lang]}</span>
            </div>
            <span className="font-mono text-slate-500 shrink-0">{w.distFromAlgiers} km</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 16. Meal Planner
function MealPlannerTool({ lang }: { lang: Language }) {
  const days = lang === 'ar' ? ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'] : ['Sam', 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
  const [meals, setMeals] = useState([
    'كسكس بالخضر / Couscous',
    'شوربة فريك + بوراك',
    'طاجين زيتون',
    'عدس بالخضر',
    'سمك مشوي + سلطة',
    'شخشوخة / مقرونة',
    'رشتة عاصمية',
  ]);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex items-center gap-2 font-bold text-sm">
        <Utensils className="w-5 h-5 text-emerald-600" />
        <span>{lang === 'ar' ? 'مخطط الوجبات الأسبوعي للأسرة الجزائرية' : 'Menu Hebdomadaire Familial'}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {days.map((d, i) => (
          <div key={d} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-xs font-bold text-emerald-600">{d}</span>
            <input type="text" value={meals[i]} onChange={(e) => setMeals(meals.map((m, idx) => (idx === i ? e.target.value : m)))} className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold" />
          </div>
        ))}
      </div>
    </div>
  );
}
