import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ListChecks, ExternalLink, HelpCircle, PlayCircle, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { videosList } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  ['ar', 'fr'].forEach((lang) => {
    videosList.forEach((v) => {
      params.push({ lang: lang as 'ar' | 'fr', slug: v.slug });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const vid = videosList.find((v) => v.slug === slug);

  if (!vid) {
    return constructMetadata({
      title: validLang === 'ar' ? 'الفيديو غير موجود' : 'Vidéo Introuvable',
      description: '',
      path: `pages/video/${slug}`,
      lang: validLang,
    });
  }

  return constructMetadata({
    title:
      validLang === 'ar'
        ? `${vid.title.ar} - شرح مرئي رسمي`
        : `${vid.title.fr} - Tutoriel Vidéo Officiel`,
    description: vid.description[validLang],
    path: `pages/video/${slug}`,
    lang: validLang,
  });
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const NextArrow = validLang === 'ar' ? ArrowLeft : ArrowRight;

  const vid = videosList.find((v) => v.slug === slug);
  if (!vid) notFound();

  const faqs =
    vid.faqs && vid.faqs.length > 0
      ? vid.faqs.map((f) => ({ question: f.question[validLang], answer: f.answer[validLang] }))
      : [];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.videos, url: `/${validLang}/pages/video/` },
    { name: vid.title[validLang], url: `/${validLang}/pages/video/${slug}/` },
  ]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs, validLang)) }}
        />
      )}

      <Breadcrumbs
        lang={validLang}
        items={[
          { label: dict.nav.videos, href: `/${validLang}/pages/video/` },
          { label: vid.title[validLang] },
        ]}
      />

      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
            {vid.category[validLang]}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {vid.watchUrl && (
              <a
                href={vid.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-100 dark:hover:bg-emerald-900/40"
              >
                <PlayCircle className="w-3.5 h-3.5" />
                <span>{validLang === 'ar' ? 'فتح الفيديو في المصدر' : 'Ouvrir sur la source'}</span>
              </a>
            )}
            {vid.officialUrl && (
              <a
                href={vid.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm"
              >
                <span>{dict.common.officialWebsite}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {vid.title[validLang]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {vid.description[validLang]}
        </p>
      </div>

      {/* Video Player Container */}
      <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-slate-800">
        {vid.platform === 'mp4' ? (
          <video
            controls
            src={vid.videoUrl}
            poster={vid.thumbnailUrl}
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={vid.videoUrl}
            title={vid.title[validLang]}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        )}
      </div>

      {/* Rich Contextual Overview Paragraphs */}
      {vid.guideParagraphs && vid.guideParagraphs[validLang]?.length > 0 && (
        <section className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>{validLang === 'ar' ? 'شرح مفصل للخدمة والخطوات' : 'Présentation Détaillée du Tutoriel'}</span>
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {vid.guideParagraphs[validLang].map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>
      )}

      {/* Steps Highlighted */}
      {vid.stepsHighlight.length > 0 && (
        <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-emerald-600" />
            <span>{validLang === 'ar' ? 'أهم النقاط والخطوات المشروحة في الفيديو' : 'Points Clés & Étapes Illustrées'}</span>
          </h2>
          <ul className="space-y-2.5">
            {vid.stepsHighlight.map((st, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{st[validLang]}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related Service / Procedure Link Card */}
      {vid.relatedGuidePath && (
        <Link
          href={`/${validLang}/${vid.relatedGuidePath.replace(/^\/+|\/+$/g, '')}/`}
          className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-500 transition-colors group"
        >
          <div className="space-y-1 min-w-0">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
              {validLang === 'ar' ? 'صفحة الخدمة والدليل الكامل' : 'Fiche Service & Dossier Associé'}
            </span>
            <span className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
              {vid.relatedGuideLabel?.[validLang] || (validLang === 'ar' ? 'الانتقال إلى الدليل الشامل للخدمة' : 'Consulter le guide complet du service')}
            </span>
          </div>
          <NextArrow className="w-5 h-5 text-emerald-600 shrink-0 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>{dict.common.faqTitle}</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{f.question}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
