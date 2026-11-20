import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Smartphone,
  Download,
  ExternalLink,
  CheckCircle2,
  Compass,
  HelpCircle,
  MessageSquare,
  Star,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateWebApplicationSchema,
  generateFAQSchema,
} from '@/lib/seo';
import { contactPortalLinks, homeExternalServices } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';

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
        ? 'تطبيق البوابة والدليل الشامل للاستخدام'
        : 'Application Mobile & Guide d’Utilisation du Portail',
    description:
      validLang === 'ar'
        ? 'تحميل تطبيق البوابة الجزائرية للخدمات الرقمية للأندرويد APK، ودليل الاستخدام خطوة بخطوة للوصول إلى القطاعات والحاسبات.'
        : 'Téléchargement de l’application Android DZ-Portal APK et guide pratique d’utilisation des téléservices et simulateurs.',
    path: 'pages/guide',
    lang: validLang,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);

  const appSchema = generateWebApplicationSchema({
    name: validLang === 'ar' ? 'تطبيق البوابة الجزائرية للخدمات الرقمية DZ-Portal' : 'Application Mobile DZ-Portal Algérie',
    description:
      validLang === 'ar'
        ? 'دليل تطبيقي متكامل للوصول السريع إلى كافة المنصات الحكومية والأدوات الرقمية في الجزائر.'
        : 'Application d’accès rapide aux portails gouvernementaux algériens, démarches administratives et outils hors-ligne.',
    url: '/pages/guide/',
    category: 'ReferenceApplication',
    lang: validLang,
  });

  const faqs = [
    {
      question:
        validLang === 'ar'
          ? 'كيف يمكنني تثبيت تطبيق البوابة الجزائرية على هاتف أندرويد؟'
          : 'Comment installer l’application mobile DZ-Portal sur Android ?',
      answer:
        validLang === 'ar'
          ? 'يمكنك تحميل ملف التثبيت الرسمي بصيغة APK مباشرة عبر رابط Google Drive المرفق أدناه، ثم السماح بتثبيت التطبيقات عند الطلب وفتح الواجهة ثنائية اللغة فورا.'
          : 'Téléchargez le fichier APK officiel via le lien Google Drive ci-dessous, autorisez l’installation sur votre appareil Android et profitez d’un accès rapide.',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف أستخدم البحث السريع (Ctrl+K) للعثور على أي خدمة؟'
          : 'Comment trouver rapidement une démarche ou un outil sur le portail ?',
      answer:
        validLang === 'ar'
          ? 'اضغط على شريط البحث في أعلى الصفحة (أو اختصار Ctrl + K) واكتب اسم القطاع أو البنك أو الأداة بالعربية أو الفرنسية لتظهر النتائج فورا مع تصفية حسب الفئة.'
          : 'Cliquez sur la barre de recherche en haut de page (raccourci Ctrl+K) et saisissez le nom du service, de la banque ou du calculateur en arabe ou en français.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs, validLang);

  const guideSteps = [
    {
      title: validLang === 'ar' ? '1. اختيار اللغة المناسبة (عربي / فرنسي)' : '1. Choisir votre langue (Arabe / Français)',
      detail:
        validLang === 'ar'
          ? 'استعمل زر اللغة في الشريط العلوي للتبديل الفوري بين النسخة العربية (RTL) والنسخة الفرنسية (LTR) مع الحفاظ على نفس الصفحة.'
          : 'Utilisez le sélecteur de langue en haut de page pour basculer instantanément entre la version arabe (RTL) et française (LTR).',
    },
    {
      title: validLang === 'ar' ? '2. تصفح 81 قطاعا و18 بنكا و12 شركة تأمين' : '2. Explorer 81 secteurs, 18 banques et 12 assureurs',
      detail:
        validLang === 'ar'
          ? 'تحتوي صفحة كل قطاع أو بنك أو شركة تأمين على ملخص سريع، جدول شروط، وروابط مباشرة للمنصات الرسمية المعتمدة.'
          : 'Chaque fiche contient un résumé structuré, un tableau de prérequis et tous les liens directs vers les plateformes officielles.',
    },
    {
      title: validLang === 'ar' ? '3. استخدام 60 أداة وحاسبة تعمل دون إنترنت' : '3. Utiliser les 60 outils hors-ligne',
      detail:
        validLang === 'ar'
          ? 'من حاسبة الراتب الصافي IRG وفاتورة سونلغاز إلى محول PDF وQR والقاموس، جميعها تعمل محليا دون إرسال بياناتك.'
          : 'Simulateurs IRG, facture Sonelgaz, générateur QR, fusion PDF et outils de santé s’exécutent localement sur votre navigateur.',
    },
    {
      title: validLang === 'ar' ? '4. استكشاف مواعيد قطارات SNTF والوثائق' : '4. Consulter les horaires SNTF et démarches',
      detail:
        validLang === 'ar'
          ? 'ابحث بين المحطات الجزائرية وتعرف على خطوات استخراج الوثائق الرسمية خطوة بخطوة مع جدول المرفقات.'
          : 'Filtrez les corridors ferroviaires SNTF par gare et suivez les procédures administratives étape par étape.',
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        lang={validLang}
        items={[{ label: dict.nav.guide, href: `/${validLang}/pages/guide/` }]}
      />

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          <Smartphone className="w-4 h-4" />
          <span>{validLang === 'ar' ? 'الدليل الشامل وتطبيق الأندرويد' : 'Guide Utilisateur & App Android'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {dict.nav.guide}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {validLang === 'ar'
            ? 'دليل عملي لاستغلال كافة مزايا البوابة الجزائرية للخدمات الرقمية، مع روابط تحميل نسخة الهاتف (APK) واستمارات التفاعل والاقتراحات.'
            : 'Guide pratique pour exploiter toutes les rubriques du portail avec téléchargement de l’application Android (APK) et liens utiles.'}
        </p>
      </div>

      {/* App Download & Feedback Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href={contactPortalLinks.apkDriveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-2xl bg-linear-to-br from-emerald-600 to-emerald-800 text-white shadow-lg flex flex-col justify-between gap-4 hover:scale-[1.01] transition-transform"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase">
              <Download className="w-4 h-4" />
              <span>Android APK · Google Drive</span>
            </div>
            <h2 className="text-xl font-black">
              {validLang === 'ar' ? 'تحميل تطبيق البوابة (DZ-Portal APK)' : 'Télécharger l’Application DZ-Portal (APK)'}
            </h2>
            <p className="text-xs text-emerald-100 leading-relaxed">
              {validLang === 'ar'
                ? 'نسخة الهاتف الخفيفة لتصفح جميع القطاعات والمؤسسات والأدوات بسرعة فائقة.'
                : 'Version mobile dédiée pour accéder rapidement à tous les organismes et calculateurs.'}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider">
            <span>{validLang === 'ar' ? 'رابط التحميل المباشر' : 'Télécharger l’APK'}</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase">
              <Compass className="w-4 h-4" />
              <span>{validLang === 'ar' ? 'مشاركة وتقييم الخدمة' : 'Évaluation & Contact'}</span>
            </div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100">
              {validLang === 'ar' ? 'قنوات الدعم والمساهمة' : 'Support & Suggestions'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {validLang === 'ar'
                ? 'ساعدنا في تحسين الدليل عبر تقييم التجربة أو اقتراح منصات حكومية جديدة.'
                : 'Évaluez le portail ou proposez l’ajout de nouveaux portails publics algériens.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={contactPortalLinks.ratingFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold"
            >
              <Star className="w-3.5 h-3.5" />
              <span>{validLang === 'ar' ? 'تقييم الزوار' : 'Évaluer'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={contactPortalLinks.contactFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>{validLang === 'ar' ? 'اقتراح خدمة' : 'Suggérer'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>{validLang === 'ar' ? 'خطوات استخدام البوابة بكفاءة' : 'Mode d’Emploi du Portail'}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guideSteps.map((st, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">{st.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{st.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Essential External Portals */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
          {dict.sections.featuredPortals}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {homeExternalServices.map((ext) => (
            <a
              key={ext.id}
              href={ext.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm truncate group-hover:text-emerald-600">
                  {ext.title[validLang]}
                </h3>
                <p className="text-xs text-slate-500 truncate mt-0.5">{ext.summary[validLang]}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{faq.question}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Blog Guides Cross-Link & Transparency Note */}
      <section className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {validLang === 'ar'
            ? 'مقالات وأدلة إضافية لمرافقتك في معاملاتك'
            : 'Approfondissez vos Démarches via notre Blog Citoyen'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {validLang === 'ar'
            ? 'إذا كنت تبحث عن شرح تفصيلي مدعوم بجداول مقارنة وأمثلة رقمية لملفات السوابق القضائية، بطاقة الشفاء، بريدي موب، عدل 3، أو حساب الراتب الصافي IRG، تصفح قسم المقالات والأدلة الشاملة. ونذكر بأن البوابة مبادرة مدنية مستقلة توجهك حصرا نحو المواقع الرسمية المعتمدة.'
            : 'Pour des dossiers complets sur le casier judiciaire, la carte Chifa, BaridiMob, AADL 3 ou le calcul du salaire net IRG, explorez nos articles détaillés. Ce portail reste une initiative citoyenne indépendante vous orientant vers les sites officiels accrédités.'}
        </p>
        <div className="flex flex-wrap gap-3 text-xs font-bold pt-1">
          <Link
            href={`/${validLang}/blog/`}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            {dict.nav.blog}
          </Link>
          <Link
            href={`/${validLang}/pages/disclaimer/`}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
          >
            {dict.nav.disclaimer}
          </Link>
        </div>
      </section>
    </article>
  );
}
