'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Train,
  Search,
  ArrowLeftRight,
  Clock,
  MapPin,
  ExternalLink,
  Navigation,
  Coins,
  Calendar,
  LocateFixed,
  TicketPercent,
  ArrowUpRight,
  ArrowDownLeft,
  Hash,
  FileText,
  Compass,
} from 'lucide-react';
import { Language } from '@/lib/types';
import {
  SNTF_CORRIDORS,
  SNTF_STATIONS,
  SNTF_NETWORK_GROUPS,
  SNTF_TARIFF_CARDS,
  SNTF_CORRIDOR_NOTES,
  trainTripsList,
  SntfStation,
} from '@/lib/data/sntf-rail';

interface Props {
  lang: Language;
  initialCorridor?: 'all' | 'suburb' | 'mainline' | 'sahara' | 'international';
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toMinutes(hhmm: string): number {
  const parts = hhmm.split(':').map((n) => parseInt(n, 10));
  if (parts.length !== 2 || Number.isNaN(parts[0]) || Number.isNaN(parts[1])) return -1;
  return parts[0] * 60 + parts[1];
}

export default function SntfRailwayGuide({ lang, initialCorridor = 'all' }: Props) {
  const isAr = lang === 'ar';
  const [corridor, setCorridor] = useState<'all' | 'suburb' | 'mainline' | 'sahara' | 'international'>(initialCorridor);
  const [fromQuery, setFromQuery] = useState<string>('');
  const [toQuery, setToQuery] = useState<string>('');
  const [trainNoQuery, setTrainNoQuery] = useState<string>('');
  const [selectedStationId, setSelectedStationId] = useState<string>('agha');
  const [stationSearchQuery, setStationSearchQuery] = useState<string>('');
  const [stationDirectionTab, setStationDirectionTab] = useState<'departures' | 'arrivals'>('departures');
  const [expandedTripId, setExpandedTripId] = useState<string | null>(trainTripsList[0]?.id || null);
  const [geoMessage, setGeoMessage] = useState<string>('');
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [tariffFilter, setTariffFilter] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const sp = new URLSearchParams(window.location.search);
        const st = sp.get('station');
        if (st && SNTF_STATIONS.some((item) => item.id === st)) {
          setSelectedStationId(st);
        }
        const tr = sp.get('train');
        if (tr) {
          setTrainNoQuery(tr);
        }
      } catch {
        // Ignore query parse failures in restricted contexts
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const selectedStation = useMemo(
    () => SNTF_STATIONS.find((s) => s.id === selectedStationId) || SNTF_STATIONS[0],
    [selectedStationId]
  );

  const filteredStationsDropdown = useMemo(() => {
    const q = stationSearchQuery.trim().toLowerCase();
    if (!q) return SNTF_STATIONS;
    return SNTF_STATIONS.filter(
      (s) =>
        s.name.ar.toLowerCase().includes(q) ||
        s.name.fr.toLowerCase().includes(q) ||
        s.wilaya.ar.toLowerCase().includes(q) ||
        s.wilaya.fr.toLowerCase().includes(q)
    );
  }, [stationSearchQuery]);

  const filteredTrips = useMemo(() => {
    const qFrom = fromQuery.trim().toLowerCase();
    const qTo = toQuery.trim().toLowerCase();
    const qNum = trainNoQuery.trim().toLowerCase();

    return trainTripsList.filter((t) => {
      if (corridor !== 'all' && t.corridor !== corridor) return false;

      if (qNum) {
        if (!t.tripCode.toLowerCase().includes(qNum)) return false;
      }

      if (qFrom) {
        const matchDep =
          t.departure.ar.toLowerCase().includes(qFrom) ||
          t.departure.fr.toLowerCase().includes(qFrom) ||
          t.stops.some((st) => st.ar.toLowerCase().includes(qFrom) || st.fr.toLowerCase().includes(qFrom));
        if (!matchDep) return false;
      }

      if (qTo) {
        const matchArr =
          t.arrival.ar.toLowerCase().includes(qTo) ||
          t.arrival.fr.toLowerCase().includes(qTo) ||
          t.stops.some((st) => st.ar.toLowerCase().includes(qTo) || st.fr.toLowerCase().includes(qTo));
        if (!matchArr) return false;
      }

      return true;
    });
  }, [corridor, fromQuery, toQuery, trainNoQuery]);

  // 1-stop connecting options (same station transfer within 30 to 180 minutes)
  const transferConnections = useMemo(() => {
    const qFrom = fromQuery.trim().toLowerCase();
    const qTo = toQuery.trim().toLowerCase();
    if (!qFrom || !qTo || filteredTrips.length > 0) return [];

    const firstLegs = trainTripsList.filter(
      (t) =>
        t.departure.ar.toLowerCase().includes(qFrom) ||
        t.departure.fr.toLowerCase().includes(qFrom) ||
        t.stops.some((st) => st.ar.toLowerCase().includes(qFrom) || st.fr.toLowerCase().includes(qFrom))
    );
    const secondLegs = trainTripsList.filter(
      (t) =>
        t.arrival.ar.toLowerCase().includes(qTo) ||
        t.arrival.fr.toLowerCase().includes(qTo) ||
        t.stops.some((st) => st.ar.toLowerCase().includes(qTo) || st.fr.toLowerCase().includes(qTo))
    );

    const results: Array<{
      leg1: (typeof trainTripsList)[number];
      leg2: (typeof trainTripsList)[number];
      hub: { ar: string; fr: string };
      waitMinutes: number;
    }> = [];

    firstLegs.forEach((leg1) => {
      const arrMin = toMinutes(leg1.arrivalTime);
      if (arrMin < 0) return;
      secondLegs.forEach((leg2) => {
        if (leg1.id === leg2.id) return;
        const depMin = toMinutes(leg2.departureTime);
        if (depMin < 0) return;
        const wait = depMin - arrMin;
        if (wait < 30 || wait > 180) return;
        // Check shared hub between leg1 arrival/stops and leg2 departure
        const sharedHub = leg1.stops.find(
          (st) =>
            leg2.departure.ar.includes(st.ar) ||
            leg2.departure.fr.toLowerCase().includes(st.fr.toLowerCase())
        );
        if (sharedHub) {
          results.push({ leg1, leg2, hub: sharedHub, waitMinutes: wait });
        }
      });
    });

    return results.slice(0, 4);
  }, [fromQuery, toQuery, filteredTrips.length]);

  const stationDepartures = useMemo(() => {
    const arName = selectedStation.name.ar.replace('محطة ', '');
    const frName = selectedStation.name.fr.replace('Gare ', '').toLowerCase();
    return trainTripsList.filter((t) => {
      const isOrigin =
        t.departure.ar.includes(arName) || t.departure.fr.toLowerCase().includes(frName);
      const isStopNotLast = t.stops.slice(0, -1).some(
        (st) => st.ar.includes(arName) || st.fr.toLowerCase().includes(frName)
      );
      return isOrigin || isStopNotLast;
    });
  }, [selectedStation]);

  const stationArrivals = useMemo(() => {
    const arName = selectedStation.name.ar.replace('محطة ', '');
    const frName = selectedStation.name.fr.replace('Gare ', '').toLowerCase();
    return trainTripsList.filter((t) => {
      const isDest =
        t.arrival.ar.includes(arName) || t.arrival.fr.toLowerCase().includes(frName);
      const isStopNotFirst = t.stops.slice(1).some(
        (st) => st.ar.includes(arName) || st.fr.toLowerCase().includes(frName)
      );
      return isDest || isStopNotFirst;
    });
  }, [selectedStation]);

  const filteredTariffs = useMemo(() => {
    const q = tariffFilter.trim().toLowerCase();
    if (!q) return SNTF_TARIFF_CARDS;
    return SNTF_TARIFF_CARDS.filter(
      (c) =>
        c.name.ar.toLowerCase().includes(q) ||
        c.name.fr.toLowerCase().includes(q) ||
        c.audience.ar.toLowerCase().includes(q) ||
        c.audience.fr.toLowerCase().includes(q) ||
        c.details.ar.toLowerCase().includes(q) ||
        c.details.fr.toLowerCase().includes(q)
    );
  }, [tariffFilter]);

  const handleSwap = () => {
    const tmp = fromQuery;
    setFromQuery(toQuery);
    setToQuery(tmp);
  };

  const handleFindNearestStation = () => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setGeoMessage(
        isAr
          ? 'خدمة تحديد الموقع غير مدعومة في هذا المتصفح. اختر المحطة يدويا من القائمة أو الخريطة.'
          : 'La géolocalisation n\'est pas disponible sur ce navigateur. Sélectionnez une gare ci-dessous.'
      );
      return;
    }

    setIsLocating(true);
    setGeoMessage('');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let closest: SntfStation = SNTF_STATIONS[0];
        let minDist = Infinity;

        SNTF_STATIONS.forEach((st) => {
          const d = haversineKm(latitude, longitude, st.lat, st.lng);
          if (d < minDist) {
            minDist = d;
            closest = st;
          }
        });

        setSelectedStationId(closest.id);
        setIsLocating(false);
        setGeoMessage(
          isAr
            ? `أقرب محطة هي ${closest.name.ar} (${closest.wilaya.ar}) على مسافة تقريبية ${minDist.toFixed(1)} كم.`
            : `Gare la plus proche : ${closest.name.fr} (${closest.wilaya.fr}), à environ ${minDist.toFixed(1)} km.`
        );
      },
      () => {
        setIsLocating(false);
        setGeoMessage(
          isAr
            ? 'تعذر الوصول إلى إحداثيات موقعك. يرجى اختيار المحطة بالبحث أو بالنقر على الخريطة.'
            : 'Impossible de récupérer votre position GPS. Choisissez votre gare via la liste ou la carte.'
        );
      },
      { enableHighAccuracy: false, timeout: 7000 }
    );
  };

  // Map coordinate projection bounds for Algeria major rail network
  const projectToSvg = (lat: number, lng: number) => {
    // lng: -2.5 to +10.5 ; lat: 31.2 to 37.2
    const x = ((lng + 2.6) / 13.4) * 620 + 40;
    const y = ((37.2 - lat) / 6.0) * 240 + 30;
    return { x, y };
  };

  const activeStationList =
    stationDirectionTab === 'departures' ? stationDepartures : stationArrivals;

  return (
    <div className="space-y-10">
      {/* 1. Point-to-Point & Train Number Search */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {isAr ? 'من محطة إلى محطة — البحث برقم القطار والمحطات' : 'De Gare à Gare — Recherche par Trajet ou N° de Train'}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isAr
                  ? 'تظهر الرحلات المباشرة ذات وقت مغادرة منشور، والتبديل في المحطة نفسها بمهلة 30 إلى 180 دقيقة بين القطارين.'
                  : 'Affiche les trajets directs avec départ publié ; correspondance en gare dans un intervalle de 30 à 180 minutes.'}
              </p>
            </div>
          </div>

          <a
            href="https://www.sntf.dz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
          >
            <span>{isAr ? 'الموقع الرسمي SNTF' : 'Portail Officiel SNTF'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Search & Swap Inputs (Departure + Swap + Arrival + Train Number) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_0.75fr] gap-3 items-end">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {isAr ? 'محطة الانطلاق أو العبور:' : 'Gare de départ :'}
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
              <input
                type="text"
                value={fromQuery}
                onChange={(e) => setFromQuery(e.target.value)}
                placeholder={isAr ? 'مثال: الجزائر، أغا، وهران...' : 'Ex : Alger, Agha, Oran...'}
                className="w-full ps-9 pe-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSwap}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 self-center md:self-end transition-colors"
            title={isAr ? 'عكس الوجهتين' : 'Inverser les gares'}
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {isAr ? 'محطة الوصول أو الوسطى:' : 'Gare d\'arrivée :'}
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
              <input
                type="text"
                value={toQuery}
                onChange={(e) => setToQuery(e.target.value)}
                placeholder={isAr ? 'مثال: المطار، قسنطينة، بشار...' : 'Ex : Aéroport, Constantine, Béchar...'}
                className="w-full ps-9 pe-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {isAr ? 'رقم القطار:' : 'N° de train :'}
            </label>
            <div className="relative">
              <Hash className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
              <input
                type="text"
                value={trainNoQuery}
                onChange={(e) => setTrainNoQuery(e.target.value)}
                placeholder={isAr ? 'مثال: 1002، BL-101' : 'Ex : 1002, BL-101'}
                dir="ltr"
                className="w-full ps-9 pe-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Corridor Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-1">
          <button
            type="button"
            onClick={() => setCorridor('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
              corridor === 'all'
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-500/40'
            }`}
          >
            {isAr ? `جميع الخطوط (${trainTripsList.length})` : `Toutes les lignes (${trainTripsList.length})`}
          </button>
          {SNTF_CORRIDORS.map((c) => {
            const count = trainTripsList.filter((t) => t.corridor === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCorridor(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                  corridor === c.id
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-500/40'
                }`}
              >
                {c.title[lang]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Matching Routes List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
            {isAr ? `الرحلات المطابقة (${filteredTrips.length})` : `Trajets Disponibles (${filteredTrips.length})`}
          </h3>
          {(fromQuery || toQuery || trainNoQuery || corridor !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setFromQuery('');
                setToQuery('');
                setTrainNoQuery('');
                setCorridor('all');
              }}
              className="text-xs font-semibold text-emerald-600 hover:underline"
            >
              {isAr ? 'إعادة ضبط البحث' : 'Réinitialiser'}
            </button>
          )}
        </div>

        {filteredTrips.length === 0 ? (
          <div className="space-y-3">
            {transferConnections.length > 0 ? (
              <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-3">
                <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                  {isAr
                    ? 'لا توجد رحلة مباشرة، إليك خيارات التبديل في نفس المحطة (مهلة 30 إلى 180 دقيقة):'
                    : 'Aucun train direct ; correspondances possibles en gare (battement 30 à 180 min) :'}
                </p>
                <div className="space-y-2">
                  {transferConnections.map((conn, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 flex flex-wrap items-center justify-between gap-2 text-xs"
                    >
                      <div className="font-semibold text-slate-800 dark:text-slate-200">
                        <span className="font-mono font-bold text-emerald-700">{conn.leg1.tripCode}</span>{' '}
                        {conn.leg1.departure[lang]} ({conn.leg1.departureTime}) →{' '}
                        <span className="font-bold underline">{conn.hub[lang]}</span> ({conn.leg1.arrivalTime})
                        {' · '}
                        <span className="text-amber-700 dark:text-amber-400 font-bold">
                          {isAr ? `انتظار ${conn.waitMinutes} د` : `attente ${conn.waitMinutes} min`}
                        </span>
                        {' · '}
                        <span className="font-mono font-bold text-emerald-700">{conn.leg2.tripCode}</span>{' '}
                        ({conn.leg2.departureTime}) → {conn.leg2.arrival[lang]} ({conn.leg2.arrivalTime})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {isAr ? 'لا توجد رحلة مطابقة لهذا البحث.' : 'Aucun trajet ne correspond à votre filtre.'}
                </p>
                <p className="text-xs text-slate-500">
                  {isAr
                    ? 'جرب محطة أخرى أو رقم قطار مختلف أو تحقق من الجداول المحدثة عبر الموقع الرسمي SNTF.'
                    : 'Essayez une autre gare, un autre numéro de train ou vérifiez les horaires officiels sur sntf.dz.'}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {filteredTrips.map((trip) => {
              const isOpen = expandedTripId === trip.id;
              return (
                <div
                  key={trip.id}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 transition-colors hover:border-emerald-500/40"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
                          #{trip.tripCode}
                        </span>
                        <span>·</span>
                        <span>{trip.trainType[lang]}</span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {trip.frequency[lang]}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-base sm:text-lg font-black text-slate-900 dark:text-slate-100">
                        <span>{trip.departure[lang]}</span>
                        <span className="text-emerald-600 font-mono text-sm">→</span>
                        <span>{trip.arrival[lang]}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                      <div className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                        <span className="block text-[10px] text-slate-500">{isAr ? 'الانطلاق - الوصول' : 'Départ - Arrivée'}</span>
                        <span className="font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100" dir="ltr">
                          {trip.departureTime} — {trip.arrivalTime}
                        </span>
                      </div>

                      <div className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                        <span className="block text-[10px] text-slate-500">{isAr ? 'المدة' : 'Durée'}</span>
                        <span className="font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100 inline-flex items-center gap-1" dir="ltr">
                          <Clock className="w-3 h-3 text-emerald-600" />
                          {trip.duration}
                        </span>
                      </div>

                      <div className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-center">
                        <span className="block text-[10px] text-emerald-700 dark:text-emerald-400">{isAr ? 'التسعيرة' : 'Tarif'}</span>
                        <span className="font-mono font-black tabular-nums text-emerald-700 dark:text-emerald-300 inline-flex items-center gap-1" dir="ltr">
                          <Coins className="w-3 h-3" />
                          {trip.price}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setExpandedTripId(isOpen ? null : trip.id)}
                        className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline px-2 py-1"
                      >
                        {isOpen
                          ? (isAr ? 'إخفاء المحطات' : 'Masquer les arrêts')
                          : (isAr ? `المحطات (${trip.stops.length})` : `Arrêts (${trip.stops.length})`)}
                      </button>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2.5">
                        {isAr ? 'مسار التوقف والمحطات الرئيسية على الخط:' : 'Dessertes et gares principales de l\'itinéraire :'}
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        {trip.stops.map((st, idx) => (
                          <React.Fragment key={idx}>
                            <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700">
                              {idx + 1}. {st[lang]}
                            </span>
                            {idx < trip.stops.length - 1 && (
                              <span className="text-slate-400 font-mono">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. Choose Station + Nearest Station GPS + Interactive Rail Map + Departures/Arrivals */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-emerald-600" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                {isAr ? 'اختر محطة — لوحة المغادرات والوصول والخريطة' : 'Choisir une Gare — Départs, Arrivées & Carte'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isAr
                ? 'اضغط «أقرب محطة لموقعي» أو اختر محطة بالبحث أو بالنقر مباشرة على الخريطة التفاعلية.'
                : 'Cliquez sur « Gare la plus proche », recherchez par nom ou cliquez sur une gare sur la carte.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleFindNearestStation}
            disabled={isLocating}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold transition-colors shrink-0"
          >
            <LocateFixed className="w-4 h-4" />
            <span>
              {isLocating
                ? (isAr ? 'جار تحديد الموقع...' : 'Localisation en cours...')
                : (isAr ? 'أقرب محطة لموقعي' : 'Gare la plus proche')}
            </span>
          </button>
        </div>

        {geoMessage && (
          <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-xl px-3.5 py-2.5">
            {geoMessage}
          </p>
        )}

        {/* Station Search + Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
            <input
              type="text"
              value={stationSearchQuery}
              onChange={(e) => setStationSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث عن محطة أو ولاية (26 محطة رئيسية)...' : 'Filtrer parmi les 26 gares principales...'}
              className="w-full ps-9 pe-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <select
            value={selectedStationId}
            onChange={(e) => setSelectedStationId(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm font-bold"
          >
            {filteredStationsDropdown.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name[lang]} — {s.wilaya[lang]}
              </option>
            ))}
          </select>
        </div>

        {/* Station Dashboard + Departures / Arrivals Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-slate-500 text-xs block">{isAr ? 'المحطة المحددة' : 'Gare sélectionnée'}</span>
            <p className="font-bold text-slate-900 dark:text-slate-100 text-base">{selectedStation.name[lang]}</p>
            <p className="text-emerald-700 dark:text-emerald-400 font-semibold">{selectedStation.wilaya[lang]}</p>
            <p className="font-mono text-[11px] text-slate-500 pt-1 tabular-nums" dir="ltr">
              GPS: {selectedStation.lat.toFixed(3)}, {selectedStation.lng.toFixed(3)}
            </p>
            <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-200 dark:border-slate-800">
              {isAr
                ? `الخطوط المتوفرة: ${selectedStation.lines.join(' · ')}`
                : `Réseaux : ${selectedStation.lines.join(' · ')}`}
            </div>
          </div>

          <div className="md:col-span-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-slate-700 dark:text-slate-300 text-xs font-bold">
                {isAr
                  ? `الخطوط التي تتوقف في ${selectedStation.name.ar}:`
                  : `Lignes desservant ${selectedStation.name.fr} :`}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setStationDirectionTab('departures')}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${
                    stationDirectionTab === 'departures'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>{isAr ? `المغادرات (${stationDepartures.length})` : `Départs (${stationDepartures.length})`}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStationDirectionTab('arrivals')}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${
                    stationDirectionTab === 'arrivals'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <ArrowDownLeft className="w-3.5 h-3.5" />
                  <span>{isAr ? `الوصول (${stationArrivals.length})` : `Arrivées (${stationArrivals.length})`}</span>
                </button>
              </div>
            </div>

            {activeStationList.length === 0 ? (
              <p className="text-xs text-slate-500 py-3">
                {isAr
                  ? 'لا توجد رحلات مصنفة في هذا الاتجاه ضمن الجداول الموثقة الحالية.'
                  : 'Aucune circulation répertoriée dans ce sens pour le moment.'}
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeStationList.map((st) => (
                  <div
                    key={st.id}
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs gap-2"
                  >
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400 block">
                        #{st.tripCode}
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                        {st.departure[lang]} → {st.arrival[lang]}
                      </span>
                    </div>
                    <span className="font-mono font-bold tabular-nums text-emerald-700 dark:text-emerald-400 shrink-0" dir="ltr">
                      {stationDirectionTab === 'departures' ? st.departureTime : st.arrivalTime}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Interactive Algeria Rail Network Map */}
        <div className="rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? 'خريطة السكك الحديدية التفاعلية (انقر على المحطة)' : 'Carte Interactive du Réseau SNTF (cliquez une gare)'}</span>
            </h3>
            <span className="text-[11px] font-semibold text-slate-500">
              {isAr ? `${SNTF_STATIONS.length} محطة رئيسية` : `${SNTF_STATIONS.length} gares principales`}
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 700 300"
              className="w-full min-w-[540px] h-auto rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              role="img"
              aria-label={isAr ? 'خريطة شبكة السكك الحديدية SNTF في الجزائر' : 'Carte du réseau ferroviaire SNTF en Algérie'}
            >
              {/* Schematic Rail Spine Lines */}
              <g stroke="#cbd5e1" strokeWidth="2" fill="none" strokeDasharray="4 3">
                {/* Tlemcen -> Oran -> Chlef -> Blida -> Agha */}
                <polyline points="99,123 130,90 222,72 292,59 302,48" />
                {/* Agha -> Bouira -> BBA -> Setif -> Constantine -> Annaba -> Tunis */}
                <polyline points="302,48 342,63 382,75 412,70 468,63 521,42 633,46" />
                {/* Constantine -> Batna -> Biskra -> Touggourt */}
                <polyline points="468,63 447,96 427,124 442,194" />
                {/* Oran -> Mecheria -> Bechar */}
                <polyline points="130,90 147,176 57,254" />
              </g>

              {/* Station Nodes */}
              {SNTF_STATIONS.filter(
                (st) => !['el-harrach', 'bab-ezzouar', 'el-affroun', 'relizane'].includes(st.id)
              ).map((st) => {
                const { x, y } = projectToSvg(st.lat, st.lng);
                const isSelected = st.id === selectedStationId;
                return (
                  <g
                    key={st.id}
                    onClick={() => setSelectedStationId(st.id)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 7.5 : 5}
                      fill={isSelected ? '#059669' : '#1e293b'}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text
                      x={x}
                      y={y - 10}
                      textAnchor="middle"
                      fontSize={isSelected ? '11' : '9.5'}
                      fontWeight={isSelected ? '700' : '600'}
                      fill={isSelected ? '#047857' : '#475569'}
                    >
                      {st.name[lang].replace('محطة ', '').replace('Gare ', '')}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Five Official SNTF Network Categories + Documented vs Corridor Diagram Stops */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            {isAr
              ? 'شبكات قطارات SNTF الخمس وجداول الرحلات الرسمية'
              : 'Les 5 Réseaux SNTF & Fiches Horaires par Ligne'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {isAr
              ? 'استكشف مواقيت ضاحية الجزائر، الخطوط الشرقية، الخطوط الغربية، الصحراء والهضاب العليا، والخط الدولي نحو تونس.'
              : 'Accédez directement aux fiches horaires de la banlieue d\'Alger, des axes Est et Ouest, du Sahara et de la ligne internationale.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SNTF_NETWORK_GROUPS.map((grp) => (
            <div
              key={grp.id}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  {grp.title[lang]}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {grp.subtitle[lang]}
                </p>
                <ul className="space-y-1 pt-1 text-xs text-slate-700 dark:text-slate-300">
                  {grp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">·</span>
                      <span>{h[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setCorridor(grp.corridorRef)}
                  className="font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600"
                >
                  {isAr ? 'تصفية الرحلات' : 'Filtrer trajets'}
                </button>
                <Link
                  href={`/${lang}/sectors/sntf-schedule/?schedule=${grp.scheduleId}`}
                  className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <span>{isAr ? 'عرض الجدول' : 'Ouvrir la fiche'}</span>
                  <FileText className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Documented Stops vs Corridor Halts Notice */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
              {isAr ? 'الخطوط ومحطات التوقف الموثقة والمحطات الوسيطة' : 'Arrêts Horaires Documentés & Haltes de Corridor'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {isAr
                ? 'تظهر محطات التوقف التي لها توقيت موثق في جدول القطار المدخل؛ أما المحطات المرسومة على مسار الخط دون توقيت فردي منشور فتعرض منفصلة ولا تستنتج افتراضيا.'
                : 'Seules les gares disposant d\'un horaire publié figurent dans les fiches ; les haltes intermédiaires tracées sur les schémas de ligne sont indiquées séparément sans extrapolation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {SNTF_CORRIDOR_NOTES.map((note, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <p className="font-bold text-slate-900 dark:text-slate-100">{note.lineTitle[lang]}</p>
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">
                    {isAr ? `توقفات بتوقيت منشور (${note.documentedStops.length}): ` : `Arrêts publiés (${note.documentedStops.length}) : `}
                  </span>
                  {note.documentedStops.map((s) => s[lang]).join(' · ')}
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  <span className="font-semibold">
                    {isAr ? 'محطات وسيطة على المخطط: ' : 'Haltes de schéma : '}
                  </span>
                  {note.diagramOnlyHalts.map((s) => s[lang]).join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. All 15 Official SNTF Fare & Discount Cards */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <TicketPercent className="w-5 h-5 text-emerald-600" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                {isAr
                  ? `بطاقات السفر وعروض التخفيض الرسمية SNTF (${SNTF_TARIFF_CARDS.length} بطاقة)`
                  : `Cartes de Réduction & Offres Tarifaires SNTF (${SNTF_TARIFF_CARDS.length} formules)`}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isAr
                  ? 'القائمة الكاملة لبطاقات الاشتراك والتخفيض المعتمدة في شبابيك الشركة الوطنية للنقل بالسكك الحديدية.'
                  : 'Référentiel complet des abonnements et cartes tarifaires délivrés aux guichets SNTF.'}
              </p>
            </div>
          </div>

          <input
            type="text"
            value={tariffFilter}
            onChange={(e) => setTariffFilter(e.target.value)}
            placeholder={isAr ? 'تصفية: وقار، الشباب، ساهلة...' : 'Filtrer : Waqar, Jeunes, Sahla...'}
            className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500 sm:w-64"
          />
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold">{isAr ? 'البطاقة أو العرض' : 'Carte / Tarif'}</th>
                <th className="p-3 text-start font-bold">{isAr ? 'نسبة التخفيض' : 'Avantage'}</th>
                <th className="p-3 text-start font-bold">{isAr ? 'الفئة المستفيدة' : 'Bénéficiaires'}</th>
                <th className="p-3 text-start font-bold">{isAr ? 'الشروط والخطوط المعنية' : 'Portée & Conditions'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredTariffs.map((card) => (
                <tr key={card.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-900 dark:text-slate-100">{card.name[lang]}</td>
                  <td className="p-3 font-mono font-black text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                    {card.discount[lang]}
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300">{card.audience[lang]}</td>
                  <td className="p-3 text-slate-600 dark:text-slate-400 leading-relaxed">{card.details[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Cross-Links Across SNTF Pages & Related Citizen Portals */}
      <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {isAr ? 'تنقل سريع داخل بوابة السكك الحديدية:' : 'Navigation rapide SNTF :'}
          </span>
          <div className="flex flex-wrap gap-2">
            <Link href={`/${lang}/sectors/sntf/`} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:text-emerald-600 font-semibold">
              {isAr ? 'دليل مواقيت SNTF 2026' : 'Guide SNTF 2026'}
            </Link>
            <Link href={`/${lang}/sectors/sntf-trains/`} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:text-emerald-600 font-semibold">
              {isAr ? 'رحلتك بالقطار خطوة بخطوة' : 'Recherche Trajets & Gares'}
            </Link>
            <Link href={`/${lang}/sectors/sntf-schedule/`} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:text-emerald-600 font-semibold">
              {isAr ? 'عارض الجداول الرسمية' : 'Visualiseur Horaires'}
            </Link>
            <Link href={`/${lang}/sectors/sntf-trip/`} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:text-emerald-600 font-semibold">
              {isAr ? 'دليل الخطوط والبطاقات' : 'Lignes & Cartes'}
            </Link>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <h3 className="text-xs font-bold text-slate-600 dark:text-slate-400">
            {isAr ? 'خدمات قد تحتاجها أيضا أثناء السفر أو التنقل:' : 'Autres services utiles pour vos déplacements :'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <Link
              href={`/${lang}/sectors/poste/`}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 font-semibold text-slate-800 dark:text-slate-200"
            >
              {isAr ? 'الخدمات البريدية والحسابات والدفع الإلكتروني عن بعد' : 'Services postaux, comptes CCP & e-paiement Edahabia'}
            </Link>
            <Link
              href={`/${lang}/sectors/education/`}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 font-semibold text-slate-800 dark:text-slate-200"
            >
              {isAr ? 'كل ما يحتاجه الطالب الجزائري في مكان واحد' : 'Portail étudiant & bourses universitaires en Algérie'}
            </Link>
            <Link
              href={`/${lang}/pages/tools/`}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 font-semibold text-slate-800 dark:text-slate-200"
            >
              {isAr ? 'كل الأدوات الرقمية التي تحتاجها في مكان واحد' : 'Tous les outils numériques gratuits en un seul endroit'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
