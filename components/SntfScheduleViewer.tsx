'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  Clock,
  Move,
  ExternalLink,
  Calendar,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { SNTF_LINE_SCHEDULES, SntfLineSchedule } from '@/lib/data/sntf-rail';

interface Props {
  lang: Language;
}

export default function SntfScheduleViewer({ lang }: Props) {
  const isAr = lang === 'ar';
  const [selectedScheduleId, setSelectedScheduleId] = useState<string>('abttbb-to-agha');
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOrigin, setDragOrigin] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [algeriaTime, setAlgeriaTime] = useState<string>('--:--');
  const [isHydrating, setIsHydrating] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat(isAr ? 'ar-DZ' : 'fr-DZ', {
          timeZone: 'Africa/Algiers',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(now);
        setAlgeriaTime(formatted);
      } catch {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const dz = new Date(utc + 3600000);
        setAlgeriaTime(
          `${String(dz.getHours()).padStart(2, '0')}:${String(dz.getMinutes()).padStart(2, '0')}`
        );
      }
    };

    const initTimer = setTimeout(() => {
      try {
        const sp = new URLSearchParams(window.location.search);
        const sched = sp.get('schedule');
        if (sched && SNTF_LINE_SCHEDULES.some((s) => s.id === sched)) {
          setSelectedScheduleId(sched);
        }
      } catch {
        // Fallback to default abttbb-to-agha
      }
      updateClock();
      setIsHydrating(false);
    }, 0);

    const interval = setInterval(updateClock, 30000);
    return () => {
      clearTimeout(initTimer);
      clearInterval(interval);
    };
  }, [isAr]);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const currentSchedule: SntfLineSchedule =
    SNTF_LINE_SCHEDULES.find((s) => s.id === selectedScheduleId) || SNTF_LINE_SCHEDULES[0];

  const handleScheduleChange = (id: string) => {
    setSelectedScheduleId(id);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleZoomIn = () => setZoom((z) => Math.min(1.8, Number((z + 0.2).toFixed(2))));
  const handleZoomOut = () => {
    setZoom((z) => {
      const next = Math.max(0.8, Number((z - 0.2).toFixed(2)));
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleToggleZoom = () => {
    if (zoom > 1) {
      handleResetView();
    } else {
      setZoom(1.4);
    }
  };

  const handleToggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && containerRef.current) {
        await containerRef.current.requestFullscreen();
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {
      setIsFullscreen((prev) => !prev);
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragOrigin({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || zoom <= 1) return;
    setPan({
      x: Math.max(-220, Math.min(220, e.clientX - dragOrigin.x)),
      y: Math.max(-180, Math.min(180, e.clientY - dragOrigin.y)),
    });
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <section
      ref={containerRef}
      className={`rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden ${
        isFullscreen ? 'p-6 overflow-y-auto bg-white dark:bg-slate-950' : ''
      }`}
    >
      {/* Top Toolbar */}
      <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {isAr ? 'عارض جداول القطارات الرسمية' : 'Visualiseur Officiel des Horaires SNTF'}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              {isAr
                ? 'راجع الجدول الرسمي ومواقيت الرحلات على الخط، مع دعم التكبير والسحب وملء الشاشة.'
                : 'Consultez la fiche horaire officielle par ligne avec zoom, déplacement et plein écran.'}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {isAr ? 'توقيت الجزائر:' : "Heure d'Algérie :"}
            </span>
            <span className="font-mono font-bold tabular-nums text-emerald-700 dark:text-emerald-400" dir="ltr">
              {algeriaTime} (UTC+1)
            </span>
          </div>
        </div>

        {/* Line Selector & Viewer Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <label htmlFor="sntf-schedule-select" className="sr-only">
              {isAr ? 'اختر الخط' : 'Choisir la ligne'}
            </label>
            <select
              id="sntf-schedule-select"
              value={selectedScheduleId}
              onChange={(e) => handleScheduleChange(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              {SNTF_LINE_SCHEDULES.map((sched) => (
                <option key={sched.id} value={sched.id}>
                  [{sched.code}] {sched.title[lang]}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoom <= 0.8}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
              title={isAr ? 'تصغير' : 'Dézoomer'}
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold tabular-nums min-w-[54px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoom >= 1.8}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
              title={isAr ? 'تكبير' : 'Zoomer'}
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleResetView}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              title={isAr ? 'إعادة ضبط العرض' : 'Réinitialiser'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleToggleFullscreen}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              <span>{isFullscreen ? (isAr ? 'خروج' : 'Quitter') : (isAr ? 'ملء الشاشة' : 'Plein écran')}</span>
            </button>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Move className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            {isAr
              ? 'كبر لقراءة المواقيت، ثم اسحب الجدول. على الهاتف: انقر مرتين أو استخدم أزرار التكبير.'
              : 'Zoomez pour agrandir les horaires, puis faites glisser la fiche. Sur mobile : double-tap ou boutons +/-.'}
          </span>
        </p>
      </div>

      {/* Interactive Zoomable & Pannable Schedule Canvas */}
      <div
        onDoubleClick={handleToggleZoom}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className={`relative overflow-hidden bg-slate-100/80 dark:bg-slate-950 p-4 sm:p-6 ${
          zoom > 1 ? 'cursor-grab active:cursor-grabbing select-none' : 'cursor-zoom-in'
        }`}
      >
        {isHydrating ? (
          <div className="py-12 text-center text-xs font-semibold text-slate-500">
            {isAr ? 'جار تحميل الجدول...' : 'Chargement de la fiche horaire...'}
          </div>
        ) : (
          <div
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center top',
              transition: isDragging ? 'none' : 'transform 160ms ease-out',
            }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-6 shadow-xs space-y-5"
          >
            {/* Sheet Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
                  SNTF · {currentSchedule.code}
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100">
                  {currentSchedule.title[lang]}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {currentSchedule.corridorSummary[lang]}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>{currentSchedule.operatingDays[lang]}</span>
              </div>
            </div>

            {/* Linear Corridor Schematic */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-3">
                {isAr ? 'مخطط المحطات الرئيسية للخط:' : 'Schéma des gares principales de la ligne :'}
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {currentSchedule.stations.map((station, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-bold text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                      {idx + 1}. {station[lang]}
                    </span>
                    {idx < currentSchedule.stations.length - 1 && (
                      <span className="text-emerald-600 font-mono">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Clean Semantic Timetable */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-xs sm:text-sm text-start">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="p-3 text-start font-bold">
                      {isAr ? 'رقم القطار' : 'N° Train'}
                    </th>
                    <th className="p-3 text-start font-bold">
                      {isAr ? 'نوع الرحلة والاتجاه' : 'Service & Direction'}
                    </th>
                    <th className="p-3 text-start font-bold">
                      {isAr ? 'وقت الانطلاق' : 'Départ'}
                    </th>
                    <th className="p-3 text-start font-bold">
                      {isAr ? 'وقت الوصول' : 'Arrivée'}
                    </th>
                    <th className="p-3 text-start font-bold">
                      {isAr ? 'ملاحظات التشغيل' : 'Observations'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {currentSchedule.departures.map((dep, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                      <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
                        {dep.trainNumber}
                      </td>
                      <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">
                        {dep.type[lang]}
                      </td>
                      <td className="p-3 font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100" dir="ltr">
                        {dep.departureTime}
                      </td>
                      <td className="p-3 font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100" dir="ltr">
                        {dep.arrivalTime}
                      </td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">
                        {dep.note ? dep.note[lang] : currentSchedule.operatingDays[lang]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Official Source Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
              <span>{currentSchedule.sourceNote[lang]}</span>
              <a
                href="https://www.sntf.dz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <span>{isAr ? 'التحقق عبر sntf.dz' : 'Vérifier sur sntf.dz'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Disclaimer Bar */}
      <div className="px-4 sm:px-5 py-3 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
        {isAr
          ? 'المواقيت المعروضة مأخوذة من الجدول المعتمد والمدرج في المنصة. يرجى مراعاة أيام التشغيل والتحديثات الاستثنائية عبر SNTF.'
          : 'Les horaires affichés proviennent des fiches SNTF intégrées au portail. Vérifiez les jours de circulation et adaptations saisonnières sur sntf.dz.'}
      </div>
    </section>
  );
}
