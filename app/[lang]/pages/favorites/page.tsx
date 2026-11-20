import React from 'react';
import { Metadata } from 'next';
import { Star, HelpCircle, ShieldCheck } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
import { sectorsList, toolsList, trainTripsList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import FavoritesClient, { FavoriteEntry } from '@/components/FavoritesClient';

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'fr' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  return constructMetadata({
    title:
      validLang === 'ar'
        ? 'مفضلاتي | البوابة الجزائرية للخدمات الرقمية'
        : 'Mes Favoris | Portail Algérien des Services Numériques',
    description:
      validLang === 'ar'
        ? 'اجمع القطاعات الحكومية والأدوات الرقمية وجداول قطارات SNTF المفضلة في مكان واحد على جهازك للوصول المباشر دون تسجيل.'
        : 'Regroupez vos secteurs publics, outils numériques et horaires de trains SNTF favoris en un seul endroit directement sur votre appareil.',
    path: 'pages/favorites',
    lang: validLang,
  });
}

export default async function FavoritesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const catalogSectors: FavoriteEntry[] = sectorsList.map((s) => ({
    id: `sector:${s.slug}`,
    type: 'sector',
    titleAr: s.name.ar,
    titleFr: s.name.fr,
    subtitleAr: s.ministry?.ar || s.description.ar,
    subtitleFr: s.ministry?.fr || s.description.fr,
    hrefAr: `/ar/sectors/${s.slug}/`,
    hrefFr: `/fr/sectors/${s.slug}/`,
  }));

  const catalogTools: FavoriteEntry[] = toolsList.map((t) => ({
    id: `tool:${t.category}:${t.slug}`,
    type: 'tool',
    titleAr: t.name.ar,
    titleFr: t.name.fr,
    subtitleAr: t.description.ar,
    subtitleFr: t.description.fr,
    hrefAr: `/ar/pages/tools/${t.category}/${t.slug}/`,
    hrefFr: `/fr/pages/tools/${t.category}/${t.slug}/`,
  }));

  const catalogTrains: FavoriteEntry[] = trainTripsList.map((tr) => ({
    id: `train:${tr.id}`,
    type: 'train',
    titleAr: `${tr.departure.ar} ◄ ${tr.arrival.ar} (${tr.tripCode})`,
    titleFr: `${tr.departure.fr} -> ${tr.arrival.fr} (${tr.tripCode})`,
    subtitleAr: `${tr.departureTime} - ${tr.arrivalTime} · ${tr.trainType.ar}`,
    subtitleFr: `${tr.departureTime} - ${tr.arrivalTime} · ${tr.trainType.fr}`,
    hrefAr: `/ar/sectors/sntf-schedule/?schedule=${encodeURIComponent(tr.id)}`,
    hrefFr: `/fr/sectors/sntf-schedule/?schedule=${encodeURIComponent(tr.id)}`,
  }));

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    {
      name: validLang === 'ar' ? 'مفضلاتي' : 'Mes Favoris',
      url: `/${validLang}/pages/favorites/`,
    },
  ]);

  const faqs = [
    {
      question:
        validLang === 'ar'
          ? 'أين تُحفظ القطاعات والأدوات وجداول القطارات المفضلة؟'
          : 'Où sont sauvegardés mes secteurs, outils et horaires favoris ?',
      answer:
        validLang === 'ar'
          ? 'تُخزن قائمة المفضلة محليا بالكامل داخل ذاكرة متصفحك (LocalStorage) على جهازك دون إرسال أي بيانات إلى خوادم خارجية أو الحاجة لتسجيل حساب.'
          : 'Vos favoris sont stockés localement dans le navigateur de votre appareil (LocalStorage), sans création de compte ni transfert vers un serveur distant.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل تتأثر المفضلة عند التبديل بين اللغة العربية والفرنسية؟'
          : 'Mes favoris restent-ils accessibles lors du passage entre Arabe et Français ?',
      answer:
        validLang === 'ar'
          ? 'نعم، تحفظ كل بطاقة التسمية والمسار باللغتين العربية والفرنسية بحيث تظهر مباشرة باللغة النشطة في البوابة.'
          : 'Oui, chaque élément mémorise ses intitulés et liens en arabe et en français pour s’afficher automatiquement dans la langue active.',
    },
    {
      question:
        validLang === 'ar'
          ? 'متى قد تفقد قائمة المفضلة المحفوظة؟'
          : 'Dans quel cas la liste de favoris peut-elle être réinitialisée ?',
      answer:
        validLang === 'ar'
          ? 'فقط عند مسح بيانات الموقع من إعدادات المتصفح أو استخدام التصفح الخاص؛ يمكنك دائما إعادة اختيار أي قطاع أو أداة بضغطة زر واحدة.'
          : 'Uniquement si vous videz les données de navigation de votre navigateur ou en mode navigation privée.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs, validLang);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        lang={validLang}
        items={[{ label: validLang === 'ar' ? 'مفضلاتي' : 'Mes Favoris' }]}
      />

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Star className="w-8 h-8 text-amber-500 fill-amber-500 shrink-0" />
          <span>{validLang === 'ar' ? 'مفضلاتي' : 'Mes Favoris'}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {validLang === 'ar'
            ? 'احتفظ بالقطاعات الحكومية والأدوات الرقمية وجداول القطارات التي تحتاج إليها باستمرار، وافتحها مباشرة في أي وقت على هذا الجهاز.'
            : 'Conservez à portée de main les secteurs publics, outils numériques et horaires ferroviaires SNTF que vous consultez régulièrement, directement sur cet appareil.'}
        </p>
      </header>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'المستخدمون الدائمون للبوابات الإدارية والحاسبات ورحلات القطارات'
            : 'Usagers réguliers des portails administratifs, calculateurs et lignes SNTF'
        }
        processingTime={
          validLang === 'ar'
            ? 'حفظ وفتح فوري دون اتصال أو تحميل إضافي'
            : 'Sauvegarde et accès instantanés sans chargement serveur'
        }
        fees={
          validLang === 'ar'
            ? 'خدمة محلية مجانية 100% دون اشتراك'
            : '100 % gratuit, local et sans inscription'
        }
        channel={
          validLang === 'ar'
            ? `متصفحك الشخصي (${sectorsList.length} قطاعا، ${toolsList.length} أداة، ${trainTripsList.length} خط قطار)`
            : `Votre navigateur (${sectorsList.length} secteurs, ${toolsList.length} outils, ${trainTripsList.length} lignes)`
        }
        keyRequirement={
          validLang === 'ar'
            ? 'تفعيل التخزين المحلي للمتصفح (LocalStorage) على نفس الجهاز'
            : 'Stockage local du navigateur actif sur cet appareil'
        }
      />

      <FavoritesClient
        lang={validLang}
        catalogSectors={catalogSectors}
        catalogTools={catalogTools}
        catalogTrains={catalogTrains}
      />

      {/* Structured Comparison / Feature Table */}
      <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? 'الأقسام المدعومة وخصوصية التخزين المحلي'
              : 'Catégories Prises en Charge & Confidentialité'}
          </span>
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full min-w-[440px] sm:min-w-0 text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold">
                  {validLang === 'ar' ? 'نوع المفضلة' : 'Type de ressource'}
                </th>
                <th className="p-3 text-start font-bold">
                  {validLang === 'ar' ? 'العناصر المتاحة' : 'Catalogue disponible'}
                </th>
                <th className="p-3 text-start font-bold">
                  {validLang === 'ar' ? 'مكان التخزين والخصوصية' : 'Stockage & Confidentialité'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold">
                  {validLang === 'ar' ? 'القطاعات والمؤسسات العمومية' : 'Secteurs & Ministères'}
                </td>
                <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                  {sectorsList.length}
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-400">
                  {validLang === 'ar' ? 'محلي على جهازك دون تتبع' : 'Local sur appareil, zéro pistage'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">
                  {validLang === 'ar' ? 'الأدوات والحاسبات الرقمية' : 'Outils & Calculateurs'}
                </td>
                <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                  {toolsList.length}
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-400">
                  {validLang === 'ar' ? 'فتح فوري باللغتين' : 'Ouverture directe bilingue'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">
                  {validLang === 'ar' ? 'خطوط وجداول قطارات SNTF' : 'Horaires Trains SNTF'}
                </td>
                <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                  {trainTripsList.length}
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-400">
                  {validLang === 'ar' ? 'ربط مباشر بعارض المحطات' : 'Lien direct vers la fiche ligne'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                {faq.question}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
