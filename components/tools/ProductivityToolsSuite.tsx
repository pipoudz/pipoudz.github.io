'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FileText,
  BookOpen,
  Printer,
  Plus,
  Trash2,
  Package,
  QrCode,
  Download,
  Image as ImageIcon,
  Type,
  Copy,
  Check,
  FilePlus2,
  ExternalLink,
} from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import QRCode from 'qrcode';
import { Language } from '@/lib/types';

interface Props {
  slug: string;
  lang: Language;
}

export default function ProductivityToolsSuite({ slug, lang }: Props) {
  if (slug === 'admin-procedures-assistant') return <AdminAssistantTool lang={lang} />;
  if (slug === 'arabic-dictionary') return <ArabicDictionaryTool lang={lang} />;
  if (slug === 'cv-builder') return <CvBuilderTool lang={lang} />;
  if (slug === 'invoice-generator') return <InvoiceGeneratorTool lang={lang} />;
  if (slug === 'inventory-manager') return <InventoryManagerTool lang={lang} />;
  if (slug === 'pdf-tools') return <PdfToolsOffline lang={lang} />;
  if (slug === 'qr-generator') return <QrGeneratorOffline lang={lang} />;
  if (slug === 'image-compressor') return <ImageCompressorOffline lang={lang} />;
  return <TextToolsClean lang={lang} />;
}

// 1. Algerian Administrative Procedures Assistant
function AdminAssistantTool({ lang }: { lang: Language }) {
  const [selected, setSelected] = useState<'passport' | 'cnibe' | 'casier' | 'anae'>('passport');
  const guide = {
    passport: {
      title: { ar: 'جواز السفر البيومتري الإلكتروني', fr: 'Passeport Biométrique Électronique' },
      fee: '6 000 DZD (28 pages) / 12 000 DZD (48 pages)',
      docs: [
        { ar: 'استمارة الطلب المملوءة عبر موقع وزارة الداخلية', fr: 'Formulaire rempli en ligne sur passeport.interieur.gov.dz' },
        { ar: 'وصل دفع الطابع الجبائي (طابكم Tabioucom أو القباضة)', fr: 'Quittance timbre fiscal (Tabioucom ou recette)' },
        { ar: 'نسخة من بطاقة التعريف الوطنية البيومترية أو بطاقة الإقامة', fr: 'Copie de la CNIBE + certificat de résidence' },
        { ar: 'شهادة الميلاد الخاصة 12S (إن لم تكن مستخرجة سابقا)', fr: 'Extrait 12S (si non numérisé auparavant)' },
      ],
      url: 'https://passeport.interieur.gov.dz/Ar/Inscription/BaBou',
    },
    cnibe: {
      title: { ar: 'بطاقة التعريف الوطنية البيومترية (CNIBE)', fr: 'Carte Nationale d\'Identité Biométrique (CNIBE)' },
      fee: { ar: 'مجانية عند أول طلب / 1 000 دج في حال الضياع', fr: 'Gratuite 1re demande / 1 000 DZD en cas de perte' },
      docs: [
        { ar: 'الطلب الرقمي عبر خدمات وزارة الداخلية لحاملي الجواز البيومتري', fr: 'Demande en ligne directe pour titulaires du passeport biométrique' },
        { ar: 'شهادة الإقامة حديثة وشهادة الميلاد 12S عند الطلب الأول', fr: 'Certificat de résidence récent + extrait 12S' },
      ],
      url: 'https://passeport.interieur.gov.dz/Ar/SuiviCNIBE/Suivi%20la%20demande%20de%20la%20carte%20national%20d%27identit%c3%a9%20biom%c3%a9trique%20%c3%a9lectronique',
    },
    casier: {
      title: { ar: 'صحيفة السوابق القضائية رقم 3 عبر الإنترنت', fr: 'Extrait du Casier Judiciaire (Bulletin N°3)' },
      fee: { ar: 'مجاني عبر الإنترنت بحساب الشباك الإلكتروني', fr: 'Gratuit en ligne via le portail Justice' },
      docs: [
        { ar: 'الحصول على اسم المستخدم وكلمة المرور من أي محكمة أو مجلس قضائي لمرة واحدة', fr: 'Identifiants délivrés une seule fois au greffe d\'un tribunal' },
        { ar: 'التحميل الفوري بختم إلكتروني موثق PDF', fr: 'Téléchargement immédiat en PDF authentifié QR' },
      ],
      url: 'https://portail.mjustice.dz/',
    },
    anae: {
      title: { ar: 'بطاقة المقاول الذاتي (ANAE)', fr: 'Carte d\'Auto-Entrepreneur (ANAE)' },
      fee: { ar: 'التسجيل مجاني + اشتراك سنوي CASNOS وضريبة جزايفية IFU 0.5%', fr: 'Inscription gratuite + affiliation CASNOS & IFU 0,5%' },
      docs: [
        { ar: 'رقم التعريف الوطني NIN ورقم الحساب البريدي أو البنكي', fr: 'NIN et relevé d\'identité CCP/RIB' },
        { ar: 'اختيار النشاط من القائمة الرسمية لـ +1300 نشاط مؤهل', fr: 'Sélection d\'activité dans la nomenclature officielle' },
      ],
      url: 'https://anae.dz/',
    },
  };

  const cur = guide[selected];
  const feeText = typeof cur.fee === 'string' ? cur.fee : cur.fee[lang];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-5">
      <div className="flex flex-wrap gap-2">
        {(Object.keys(guide) as Array<keyof typeof guide>).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setSelected(k)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border ${
              selected === k ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800'
            }`}
          >
            {guide[k].title[lang]}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 min-w-0 break-words">{cur.title[lang]}</h3>
          <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">{feeText}</span>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {cur.docs.map((d, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">{i + 1}.</span>
              <span>{d[lang]}</span>
            </li>
          ))}
        </ul>
        <a
          href={cur.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
        >
          <span>{lang === 'ar' ? 'فتح البوابة الرسمية للإجراء' : 'Ouvrir le Portail Officiel'}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

// 2. Bilingual Administrative & Legal Dictionary
function ArabicDictionaryTool({ lang }: { lang: Language }) {
  const [q, setQ] = useState('');
  const terms = [
    { ar: 'شهادة الميلاد الخاصة 12خ', fr: 'Extrait de naissance spécial 12S', note: { ar: 'تستخرج لجواز السفر وبطاقة التعريف البيومترية', fr: 'Requis pour passeport et CNIBE' } },
    { ar: 'صحيفة السوابق القضائية رقم 3', fr: 'Extrait du casier judiciaire (Bulletin N°3)', note: { ar: 'تثبت خلو السجل من السوابق للعمل والملفات', fr: 'Exigé pour concours et dossiers administratifs' } },
    { ar: 'شهادة الإقامة', fr: 'Certificat de résidence', note: { ar: 'تثبت عنوان السكن لدى البلدية', fr: 'Justificatif de domicile communal' } },
    { ar: 'رقم التعريف الوطني NIN', fr: 'Numéro d\'Identification Nationale (18 chiffres)', note: { ar: 'معرف وحيد لكل مواطن في السجل الوطني', fr: 'Identifiant unique biométrique à 18 chiffres' } },
    { ar: 'السجل التجاري الإلكتروني', fr: 'Registre de Commerce Électronique (RCE)', note: { ar: 'صادر عن CNRC مزود برمز QR', fr: 'Délivré par le CNRC avec QR code' } },
    { ar: 'الرقم الجبائي NIF', fr: 'Numéro d\'Identification Fiscale (NIF)', note: { ar: 'يستخرج من المديرية العامة للضرائب', fr: 'Délivré par la DGI (nifenligne.mf.gov.dz)' } },
    { ar: 'التصديق بالأبوستيل', fr: 'Apostille (Convention de La Haye)', note: { ar: 'توثيق دولي للوثائق العمومية لدى الخارجية', fr: 'Certification internationale MAE / Justice' } },
    { ar: 'كشف الهوية البريدية RIP / البنكية RIB', fr: 'Relevé d\'Identité Postale / Bancaire', note: { ar: 'رمز الحساب المكون من 20 رقما للتحويلات', fr: 'Identifiant à 20 chiffres pour virements' } },
  ];
  const filtered = terms.filter(
    (t) =>
      t.ar.includes(q.trim()) ||
      t.fr.toLowerCase().includes(q.trim().toLowerCase()) ||
      t.note[lang].toLowerCase().includes(q.trim().toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex items-center gap-2 font-bold text-sm">
        <BookOpen className="w-5 h-5 text-emerald-600 shrink-0" />
        <span>{lang === 'ar' ? 'المعجم الإداري والقانوني الموحد (عربي - فرنسي)' : 'Glossaire Administratif Algérien (Arabe / Français)'}</span>
      </div>
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={lang === 'ar' ? 'ابحث عن مصطلح أو وثيقة...' : 'Rechercher un terme ou document...'}
        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm"
      />
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {filtered.map((t, i) => (
          <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="min-w-0 break-words">
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.ar} · <span className="text-emerald-700 dark:text-emerald-400">{t.fr}</span></div>
              <p className="text-xs text-slate-500 mt-0.5">{t.note[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Multi-section CV Builder
function CvBuilderTool({ lang }: { lang: Language }) {
  const [name, setName] = useState(lang === 'ar' ? 'أمين بلقاسم' : 'Amine Belkacem');
  const [jobTitle, setJobTitle] = useState(lang === 'ar' ? 'مهندس إعلام آلي' : 'Ingénieur Informatique');
  const [phone, setPhone] = useState('+213 555 00 00 00');
  const [email, setEmail] = useState('amine@example.dz');
  const [exp, setExp] = useState(lang === 'ar' ? 'تطوير تطبيقات الويب وإدارة قواعد البيانات (2023 - 2026)' : 'Développement Web & Bases de Données (2023 - 2026)');
  const [edu, setEdu] = useState(lang === 'ar' ? 'ماستر في علوم الإعلام الآلي — جامعة هواري بومدين USTHB' : 'Master en Informatique — USTHB Alger');

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold" />
        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Titre" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold" />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950" />
        <textarea value={exp} onChange={(e) => setExp(e.target.value)} rows={2} className="sm:col-span-2 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950" />
        <input type="text" value={edu} onChange={(e) => setEdu(e.target.value)} className="sm:col-span-2 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950" />
      </div>

      <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-8 border border-slate-300 shadow-sm max-w-2xl mx-auto space-y-4">
        <div className="border-b-2 border-emerald-600 pb-4 flex flex-wrap justify-between items-start gap-3">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-black break-words">{name}</h2>
            <p className="text-emerald-700 font-bold text-sm">{jobTitle}</p>
            <p className="text-xs text-slate-500 mt-1 font-mono break-all">{phone} · {email}</p>
          </div>
          <button type="button" onClick={() => window.print()} className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-1 print:hidden shrink-0">
            <Printer className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طباعة PDF' : 'Imprimer'}</span>
          </button>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">{lang === 'ar' ? 'الخبرة المهنية' : 'Expérience Professionnelle'}</h4>
          <p className="text-sm text-slate-700">{exp}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">{lang === 'ar' ? 'الشهادات والمؤهلات' : 'Formation'}</h4>
          <p className="text-sm text-slate-700">{edu}</p>
        </div>
      </div>
    </div>
  );
}

// 4. Dynamic Invoice Generator (TVA 19% + Timbre + Print)
function InvoiceGeneratorTool({ lang }: { lang: Language }) {
  const [client, setClient] = useState('SARL El Djazaïr Services');
  const [nif, setNif] = useState('001916001234567');
  const [items, setItems] = useState([{ desc: 'Prestation / خدمة تقنية', qty: 1, price: 45000 }]);

  const totalHt = items.reduce((s, i) => s + i.qty * i.price, 0);
  const tva = totalHt * 0.19;
  const totalTtc = totalHt + tva;

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 space-y-3 print:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <input type="text" value={client} onChange={(e) => setClient(e.target.value)} placeholder="Client" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-bold" />
          <input type="text" value={nif} onChange={(e) => setNif(e.target.value)} placeholder="NIF" className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono font-bold" />
        </div>
        {items.map((it, idx) => (
          <div key={idx} className="grid grid-cols-3 sm:grid-cols-12 gap-2 text-xs">
            <input type="text" value={it.desc} onChange={(e) => setItems(items.map((x, i) => (i === idx ? { ...x, desc: e.target.value } : x)))} className="col-span-3 sm:col-span-6 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950" />
            <input type="number" min={1} value={it.qty} onChange={(e) => setItems(items.map((x, i) => (i === idx ? { ...x, qty: Number(e.target.value) } : x)))} className="col-span-1 sm:col-span-2 px-2 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-center font-mono" />
            <input type="number" value={it.price} onChange={(e) => setItems(items.map((x, i) => (i === idx ? { ...x, price: Number(e.target.value) } : x)))} className="col-span-1 sm:col-span-3 px-2 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-center font-mono" />
            <button type="button" onClick={() => setItems(items.filter((_, i) => i !== idx))} className="col-span-1 text-red-500 flex justify-center items-center"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
        <button type="button" onClick={() => setItems([...items, { desc: 'Service', qty: 1, price: 10000 }])} className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-1">
          <Plus className="w-3.5 h-3.5" />
          <span>{lang === 'ar' ? 'إضافة بند' : 'Ajouter ligne'}</span>
        </button>
      </div>

      <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-8 border border-slate-300 shadow-sm max-w-2xl mx-auto space-y-4">
        <div className="flex flex-wrap justify-between items-start gap-3 border-b pb-4">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-black text-emerald-800">FACTURE / فاتورة</h2>
            <p className="text-xs text-slate-500 font-mono">N° {new Date().getFullYear()}-001</p>
          </div>
          <button type="button" onClick={() => window.print()} className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 print:hidden shrink-0">
            <Printer className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طباعة' : 'Imprimer'}</span>
          </button>
        </div>
        <div className="text-xs space-y-1 break-words">
          <p><span className="font-bold">Client / العميل:</span> {client}</p>
          <p><span className="font-bold">NIF / الرقم الجبائي:</span> <span className="font-mono">{nif}</span></p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] sm:min-w-0 text-xs border border-slate-300">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-2 text-start border">{lang === 'ar' ? 'البيان' : 'Désignation'}</th>
                <th className="p-2 text-center border">{lang === 'ar' ? 'الكمية' : 'Qté'}</th>
                <th className="p-2 text-end border">HT (DZD)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, i) => (
                <tr key={i}>
                  <td className="p-2 border">{it.desc}</td>
                  <td className="p-2 text-center border font-mono">{it.qty}</td>
                  <td className="p-2 text-end border font-mono">{(it.qty * it.price).toLocaleString('fr-DZ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-end text-xs space-y-1 font-mono pt-2">
          <p>Total HT: {totalHt.toLocaleString('fr-DZ')} DZD</p>
          <p>TVA (19%): {tva.toLocaleString('fr-DZ')} DZD</p>
          <p className="text-base font-black text-emerald-700">Total TTC: {totalTtc.toLocaleString('fr-DZ')} DZD</p>
        </div>
      </div>
    </div>
  );
}

// 5. Inventory Manager (localStorage)
function InventoryManagerTool({ lang }: { lang: Language }) {
  const [items, setItems] = useState<{ id: number; name: string; qty: number; price: number }[]>([
    { id: 1, name: 'Article A', qty: 12, price: 3200 },
  ]);
  const [name, setName] = useState('');
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(1500);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const saved = localStorage.getItem('dz_inventory');
        if (saved) setItems(JSON.parse(saved));
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const add = () => {
    if (!name.trim()) return;
    const next = [{ id: Date.now(), name: name.trim(), qty, price }, ...items];
    setItems(next);
    setName('');
    try { localStorage.setItem('dz_inventory', JSON.stringify(next)); } catch {}
  };

  const totalValue = items.reduce((s, x) => s + x.qty * x.price, 0);

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={lang === 'ar' ? 'اسم المنتج...' : 'Nom article...'} className="col-span-2 sm:flex-1 sm:min-w-40 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs" />
        <input type="number" min={0} value={qty} onChange={(e) => setQty(Number(e.target.value))} className="w-full sm:w-20 px-2 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-mono" />
        <input type="number" min={0} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full sm:w-28 px-2 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-mono" />
        <button type="button" onClick={add} className="col-span-2 sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">{lang === 'ar' ? 'إضافة' : 'Ajouter'}</button>
      </div>

      <div className="p-4 rounded-xl bg-emerald-600 text-white flex flex-wrap justify-between items-center gap-2 text-sm font-mono">
        <span className="flex items-center gap-2"><Package className="w-4 h-4 shrink-0" />{lang === 'ar' ? 'قيمة المخزون الإجمالية:' : 'Valeur Totale du Stock :'}</span>
        <span className="text-xl font-black tabular-nums">{totalValue.toLocaleString('fr-DZ')} DZD</span>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
        {items.map((it) => (
          <div key={it.id} className="py-2.5 flex flex-wrap items-center justify-between gap-2">
            <span className="font-bold min-w-0 break-words">{it.name} <span className="text-slate-400 font-mono">× {it.qty}</span></span>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono font-bold text-emerald-600 tabular-nums">{(it.qty * it.price).toLocaleString('fr-DZ')} DZD</span>
              <button type="button" onClick={() => setItems(items.filter((x) => x.id !== it.id))} className="text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 6. Real Offline PDF Merge Tool (pdf-lib)
function PdfToolsOffline({ lang }: { lang: Language }) {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState('');

  const mergePdfs = async () => {
    if (files.length < 2) {
      setStatus(lang === 'ar' ? 'اختر ملفين PDF على الأقل للدمج.' : 'Sélectionnez au moins 2 fichiers PDF.');
      return;
    }
    try {
      setStatus(lang === 'ar' ? 'جاري دمج الملفات محليا على جهازك...' : 'Fusion en cours localement...');
      const merged = await PDFDocument.create();
      for (const f of files) {
        const bytes = await f.arrayBuffer();
        const doc = await PDFDocument.load(bytes);
        const copied = await merged.copyPages(doc, doc.getPageIndices());
        copied.forEach((p) => merged.addPage(p));
      }
      const outBytes = await merged.save();
      const blob = new Blob([new Uint8Array(outBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'merged-dz-portal.pdf';
      a.click();
      URL.revokeObjectURL(url);
      setStatus(lang === 'ar' ? `تم دمج ${files.length} ملفات وتحميل PDF بنجاح!` : `${files.length} PDF fusionnés et téléchargés !`);
    } catch {
      setStatus(lang === 'ar' ? 'تعذر قراءة أحد ملفات PDF (قد يكون محميا بكلمة مرور).' : 'Impossible de lire un fichier PDF (protégé ou invalide).');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex items-center gap-2 font-bold text-sm">
        <FilePlus2 className="w-5 h-5 text-emerald-600 shrink-0" />
        <span>{lang === 'ar' ? 'دمج ملفات PDF محليا دون رفعها للإنترنت (pdf-lib)' : 'Fusionner plusieurs fichiers PDF localement (100% privé)'}</span>
      </div>
      <input
        type="file"
        multiple
        accept="application/pdf"
        onChange={(e) => setFiles(Array.from(e.target.files || []))}
        className="block w-full text-xs text-slate-600 dark:text-slate-300 file:me-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-emerald-600 file:text-white file:font-bold cursor-pointer"
      />
      {files.length > 0 && (
        <ul className="text-xs text-slate-500 space-y-1">
          {files.map((f, i) => (
            <li key={i} className="font-mono break-all">{i + 1}. {f.name} ({Math.round(f.size / 1024)} KB)</li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={mergePdfs}
        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        <span>{lang === 'ar' ? 'دمج وتحميل الملف النهائي PDF' : 'Fusionner et Télécharger PDF'}</span>
      </button>
      {status && <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">{status}</p>}
    </div>
  );
}

// 7. Offline QR Code Generator (qrcode library)
function QrGeneratorOffline({ lang }: { lang: Language }) {
  const [text, setText] = useState('https://www.aadl.com.dz/');
  const [dataUrl, setDataUrl] = useState('');

  useEffect(() => {
    let active = true;
    QRCode.toDataURL(text || 'https://dz', { width: 240, margin: 2 })
      .then((url) => {
        if (active) setDataUrl(url);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [text]);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4 max-w-lg mx-auto text-center">
      <div className="flex items-center justify-center gap-2 font-bold text-sm">
        <QrCode className="w-5 h-5 text-emerald-600" />
        <span>{lang === 'ar' ? 'توليد رمز QR محليا دون إنترنت' : 'Générateur QR Code Hors-Ligne'}</span>
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={lang === 'ar' ? 'أدخل الرابط أو النص...' : 'Entrez URL ou texte...'}
        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono text-xs"
      />
      {dataUrl && (
        <div className="inline-block p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <Image src={dataUrl} alt="QR Code" width={200} height={200} unoptimized />
        </div>
      )}
      {dataUrl && (
        <div>
          <a
            href={dataUrl}
            download="dz-portal-qr.png"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تحميل الصورة PNG' : 'Télécharger PNG'}</span>
          </a>
        </div>
      )}
    </div>
  );
}

// 8. Offline Canvas Image Compressor
function ImageCompressorOffline({ lang }: { lang: Language }) {
  const [quality, setQuality] = useState(0.65);
  const [origSize, setOrigSize] = useState(0);
  const [newSize, setNewSize] = useState(0);
  const [outUrl, setOutUrl] = useState('');

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    setOrigSize(file.size);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.onload = () => {
        const maxW = 1400;
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => {
            if (!blob) return;
            setNewSize(blob.size);
            setOutUrl(URL.createObjectURL(blob));
          },
          'image/jpeg',
          quality
        );
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex items-center gap-2 font-bold text-sm">
        <ImageIcon className="w-5 h-5 text-emerald-600" />
        <span>{lang === 'ar' ? 'ضغط وتصغير حجم الصور والوثائق محليا' : 'Compresseur d\'Images pour Formulaires (Hors-Ligne)'}</span>
      </div>
      <div>
        <label className="block text-xs text-slate-500 mb-1">
          {lang === 'ar' ? `جودة الضغط (${Math.round(quality * 100)}%):` : `Qualité JPEG (${Math.round(quality * 100)}%) :`}
        </label>
        <input type="range" min={0.2} max={0.95} step={0.05} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-full accent-emerald-600" />
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files?.[0])}
        className="block w-full text-xs file:me-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-emerald-600 file:text-white file:font-bold cursor-pointer"
      />
      {outUrl && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="font-mono">
            {Math.round(origSize / 1024)} KB → <strong className="text-emerald-700 dark:text-emerald-400">{Math.round(newSize / 1024)} KB</strong>
          </div>
          <a href={outUrl} download="compressed-dz-doc.jpg" className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold inline-flex items-center gap-1.5">
            <Download className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تحميل الصورة المضغوطة' : 'Télécharger JPG'}</span>
          </a>
        </div>
      )}
    </div>
  );
}

// 9. Text Tools & Arabic Tanween Remover
function TextToolsClean({ lang }: { lang: Language }) {
  const [text, setText] = useState(
    lang === 'ar' ? 'أدخل النص هنا لعد الكلمات أو تنظيف التشكيل والتنوين...' : 'Saisissez votre texte ici pour compter les mots et le nettoyer...'
  );
  const [copied, setCopied] = useState(false);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;

  const stripArabicMarks = () => {
    setText(text.replace(/[\u064B-\u0652]/g, ''));
  };

  const dedupeLines = () => {
    const uniq = Array.from(new Set(text.split('\n').map((l) => l.trim()).filter(Boolean)));
    setText(uniq.join('\n'));
  };

  const copyOut = () => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 font-bold text-sm">
          <Type className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'ar' ? 'أدوات النصوص والعد وتنظيف التشكيل والتنوين' : 'Compteur de Mots & Outils Texte'}</span>
        </div>
        <div className="text-xs font-mono font-bold text-emerald-600">
          {words} {lang === 'ar' ? 'كلمة' : 'mots'} · {chars} {lang === 'ar' ? 'حرف' : 'car.'}
        </div>
      </div>

      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm"
      />

      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={stripArabicMarks} className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-emerald-600 text-xs font-bold">
          {lang === 'ar' ? 'إزالة التشكيل والتنوين' : 'Supprimer diacritiques arabes'}
        </button>
        <button type="button" onClick={dedupeLines} className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-emerald-600 text-xs font-bold">
          {lang === 'ar' ? 'حذف الأسطر المكررة' : 'Supprimer doublons'}
        </button>
        <button type="button" onClick={copyOut} className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-1">
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? (lang === 'ar' ? 'تم النسخ' : 'Copié') : (lang === 'ar' ? 'نسخ النتيجة' : 'Copier')}</span>
        </button>
      </div>
    </div>
  );
}
