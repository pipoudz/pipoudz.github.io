import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Train, ExternalLink, HelpCircle } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateGovernmentServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import SntfScheduleViewer from '@/components/SntfScheduleViewer';
import SntfRailwayGuide from '@/components/SntfRailwayGuide';

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
        ? 'عارض جداول ومواقيت قطارات SNTF الجزائر 2026'
        : 'Visualiseur des Fiches Horaires Trains SNTF Algérie 2026',
    description:
      validLang === 'ar'
        ? 'راجع جداول مواقيت قطارات SNTF الرسمية مع التكبير والسحب وملء الشاشة: ضواحي الجزائر، خط برج بوعريريج والثنية إلى آغا، الخطوط الشرقية والغربية، الصحراء، والخط الدولي.'
        : "Consultez les fiches horaires officielles SNTF avec zoom, glissement et plein écran : banlieue d'Alger, axe ABTTBB-Agha, Coradia Est/Ouest, Sahara et Tunis.",
    path: 'sectors/sntf-schedule',
    lang: validLang,
  });
}

export default async function SntfSchedulePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const sntfFaqs = [
    {
      question:
        validLang === 'ar'
          ? 'كيف أستخدم عارض جداول قطارات SNTF وأحدد الخط مثل ABTTBB إلى آغا؟'
          : 'Comment utiliser le visualiseur de fiches horaires SNTF et choisir la ligne ABTTBB-Agha ?',
      answer:
        validLang === 'ar'
          ? 'اختر الخط المطلوب من القائمة المنسدلة أعلى العارض (مثل خط برج بوعريريج والثنية إلى آغا أو خط المطار أو وهران وقسنطينة)، ثم استخدم أزرار التكبير والسحب أو النقر المزدوج لقراءة التوقيت بتوقيت الجزائر UTC+1.'
          : 'Sélectionnez la ligne souhaitée dans le menu du visualiseur (par exemple ABTTBB ↔ Agha, Navette Aéroport, Oran ou Constantine), puis zoomez, glissez ou passez en plein écran pour lire les horaires à l’heure d’Algérie (UTC+1).',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف يمكنني البحث برقم القطار أو بين محطتين في شبكة SNTF؟'
          : 'Comment rechercher un trajet entre deux gares ou par numéro de train SNTF ?',
      answer:
        validLang === 'ar'
          ? 'يمكنك إدخال محطة الانطلاق ومحطة الوصول أو رقم القطار (مثل 1002 أو BL-101 أو AIR-01) في محرك البحث أسفل هذه الصفحة، مع إمكانية احتساب رحلات التبديل في نفس المحطة بمهلة 30 إلى 180 دقيقة.'
          : 'Renseignez votre gare de départ, votre gare d’arrivée ou le numéro du train (ex. 1002, BL-101, AIR-01) dans l’explorateur intégré ci-dessous ; les correspondances en gare entre 30 et 180 minutes sont également calculées.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل تشمل الشبكة خط القطار إلى مطار هواري بومدين الدولي؟'
          : "Le réseau SNTF dessert-il l'Aéroport International d'Alger ?",
      answer:
        validLang === 'ar'
          ? 'نعم، يوفر القطار السريع رابطا مباشرا من محطة آغا وباب الزوار نحو مطار هواري بومدين الدولي في زمن رحلة يقارب 22 دقيقة وبتسعيرة ثابتة قدرها 80 دج.'
          : "Oui, une navette ferroviaire directe relie Alger (Gare de l'Agha) et Bab Ezzouar à l'Aéroport Houari Boumediene en environ 22 minutes pour 80 DZD.",
    },
    {
      question:
        validLang === 'ar'
          ? 'ما هي بطاقات التخفيض المتاحة للمتقاعدين والشباب والموظفين على قطارات SNTF؟'
          : 'Quelles cartes de réduction SNTF existent pour les retraités, jeunes et abonnés ?',
      answer:
        validLang === 'ar'
          ? 'تمنح SNTF باقة من 15 عرضا وبطاقة تخفيض تشمل بطاقة وقار للمتقاعدين (50%)، البطاقة الخضراء لضاحية الجزائر (40%)، بطاقة الشباب 12-28 سنة (20%)، الاشتراك الثنائي ساهلة قطار+إيتوزا (50%)، ومجانية تامة للأطفال دون 4 سنوات.'
          : 'La SNTF propose 15 formules tarifaires dont la carte Waqar pour retraités (-50 %), la Carte Verte banlieue d’Alger (-40 %), la carte Jeunes 12-28 ans (-20 %), l’abonnement bimodal Sahla (-50 %) et la gratuité pour les moins de 4 ans.',
    },
  ];

  const govSchema = generateGovernmentServiceSchema({
    name:
      validLang === 'ar'
        ? 'عارض جداول قطارات الشركة الوطنية للنقل بالسكك الحديدية SNTF'
        : 'Visualiseur Officiel des Horaires SNTF Algérie',
    description:
      validLang === 'ar'
        ? 'جداول مواقيت قطارات SNTF حسب الخط والمحطة ورقم القطار مع بطاقات التخفيض الرسمية الـ 15.'
        : 'Fiches horaires SNTF par ligne, recherche par gare et numéro de train, et 15 cartes de réduction officielles.',
    provider: 'SNTF',
    url: 'https://www.sntf.dz/',
    lang: validLang,
  });

  const faqSchema = generateFAQSchema(sntfFaqs, validLang);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.sectors, url: `/${validLang}/sectors/` },
    { name: dict.nav.sntf, url: `/${validLang}/sectors/sntf-schedule/` },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(govSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        lang={validLang}
        items={[
          { label: dict.nav.sectors, href: `/${validLang}/sectors/` },
          { label: dict.nav.sntf, href: `/${validLang}/sectors/sntf-schedule/` },
        ]}
      />

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
            <Train className="w-4 h-4" />
            <span>SNTF · {validLang === 'ar' ? 'عارض الجداول والرحلات 2026' : 'Fiches Horaires & Réseau 2026'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
            {validLang === 'ar'
              ? 'عارض جداول ومواقيت قطارات SNTF الجزائر'
              : 'Visualiseur des Fiches Horaires SNTF Algérie'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {validLang === 'ar'
              ? 'تصفح جداول مواقيت قطارات SNTF حسب الخط مع إمكانية التكبير والسحب وملء الشاشة بتوقيت الجزائر، وابحث بين المحطات أو برقم القطار.'
              : "Consultez chaque fiche horaire SNTF avec zoom, glissement et plein écran à l'heure d'Algérie, et recherchez votre trajet par gare ou numéro de train."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.sntf.dz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
          >
            <span>{dict.common.officialWebsite} (sntf.dz)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href={`/${validLang}/sectors/sntf/`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-colors"
          >
            <span>{validLang === 'ar' ? 'دليل SNTF الشامل 2026' : 'Portail SNTF 2026'}</span>
          </Link>
        </div>
      </div>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'المسافرون عبر خطوط الضواحي، الخطوط الكبرى، الصحراء، والخط الدولي'
            : 'Voyageurs des banlieues, grandes lignes Coradia, Sahara et Tunis'
        }
        processingTime={
          validLang === 'ar'
            ? 'مواقيت يومية بتوقيت الجزائر UTC+1 (مهلة التبديل 30-180 دقيقة)'
            : 'Horaires quotidiens heure d’Algérie UTC+1 (correspondance 30-180 min)'
        }
        fees={
          validLang === 'ar'
            ? 'ابتداء من 30-80 دج للضواحي مع 15 بطاقة تخفيض تصل إلى 100% للأطفال دون 4 سنوات'
            : 'Dès 30-80 DZD en banlieue ; 15 cartes tarifaires jusqu’à -50 % et gratuité < 4 ans'
        }
        channel={
          validLang === 'ar'
            ? 'عارض الجداول التفاعلي وشبابيك محطات SNTF والموقع sntf.dz'
            : 'Visualiseur horaire en ligne, guichets en gare et site sntf.dz'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'تذكرة صالحة أو بطاقة تخفيض سارية (وقار، الخضراء، الشباب، ساهلة...)'
            : 'Billet valide ou carte tarifaire en cours de validité (Waqar, Verte, Jeunes, Sahla...)'
        }
        officialUrl="https://www.sntf.dz/"
      />

      {/* Interactive Schedule Sheet Viewer (?schedule=abttbb-to-agha) */}
      <SntfScheduleViewer lang={validLang} />

      {/* Interactive SNTF Railway, Station & 15 Tariff Cards Explorer */}
      <SntfRailwayGuide lang={validLang} />

      {/* FAQs */}
      <section className="space-y-4 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sntfFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-1.5">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
