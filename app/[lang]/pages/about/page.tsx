import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Sparkles,
  Building2,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  BookOpen,
  Scale,
  Users,
  BarChart3,
  HelpCircle,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
import {
  sectorsList,
  banksList,
  insuranceList,
  toolsList,
  proceduresList,
  blogArticles,
} from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';

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
        ? 'من نحن | البوابة الجزائرية للخدمات الرقمية'
        : 'À Propos du Portail DZ Services - Initiative Citoyenne Indépendante',
    description:
      validLang === 'ar'
        ? 'تعرف على البوابة الجزائرية للخدمات الرقمية، أهدافها ومبادئها الستة منذ انطلاقها في يونيو 2025 وكيف تساعد المواطنين في الوصول السريع والآمن إلى المنصات الرسمية.'
        : 'Découvrez l’histoire du Portail Algérien des Services Numériques depuis juin 2025, ses six principes directeurs et sa méthodologie éditoriale indépendante.',
    path: 'pages/about',
    lang: validLang,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.about, url: `/${validLang}/pages/about/` },
  ]);

  const principles = [
    {
      title: validLang === 'ar' ? 'الموثوقية والمصادر المعتمدة' : 'Fiabilité & Sources Officielles',
      desc:
        validLang === 'ar'
          ? 'نقدم روابط رسمية من مصادر حكومية ومصرفية معتمدة فقط، مع التحقق المستمر من صحة وفعالية كل خدمة.'
          : 'Uniquement des liens officiels issus d’organismes publics et financiers agréés, contrôlés en continu.',
    },
    {
      title: validLang === 'ar' ? 'مجانية كاملة للجميع' : 'Gratuité Totale',
      desc:
        validLang === 'ar'
          ? 'جميع خدمات البوابة والأدوات الرقمية متاحة بالكامل دون أي رسوم أو اشتراكات.'
          : 'Tous les guides et simulateurs du portail sont accessibles gratuitement sans aucun abonnement.',
    },
    {
      title: validLang === 'ar' ? 'استخدام مباشر دون تسجيل' : 'Accès Sans Inscription',
      desc:
        validLang === 'ar'
          ? 'تصميم البوابة يسمح بالوصول الفوري دون الحاجة إلى إنشاء حساب أو إدخال بيانات شخصية.'
          : 'Utilisation immédiate des ressources sans création de compte ni collecte d’identité.',
    },
    {
      title: validLang === 'ar' ? 'تصميم متجاوب مع كل الأجهزة' : 'Interface Multi-Écrans',
      desc:
        validLang === 'ar'
          ? 'واجهة تتكيف بسلاسة مع الحاسوب والهاتف واللوحة الذكية لتجربة واضحة في أي مكان.'
          : 'Affichage adaptatif sur ordinateur, mobile et tablette pour naviguer partout facilement.',
    },
    {
      title: validLang === 'ar' ? 'تحديث مستمر للمحتوى' : 'Veille & Mise à Jour Continue',
      desc:
        validLang === 'ar'
          ? 'تحديث دوري للروابط والمواقيت والحاسبات لإضافة المنصات الجديدة وضمان دقة المعلومة.'
          : 'Actualisation régulière des liens, barèmes, calculateurs et fiches ferroviaires SNTF.',
    },
    {
      title: validLang === 'ar' ? 'إتاحة شاملة وسهولة وصول' : 'Accessibilité Citoyenne',
      desc:
        validLang === 'ar'
          ? 'تمكين كل الفئات من الوصول إلى الخدمات الإدارية بأسلوب مبسط وباللغتين العربية والفرنسية.'
          : 'Rédaction bilingue claire permettant à tous les publics de comprendre chaque démarche.',
    },
  ];

  const aboutFaqs = [
    {
      question:
        validLang === 'ar'
          ? 'متى انطلقت البوابة الجزائرية للخدمات الرقمية وما هدفها؟'
          : 'Quand le Portail Algérien des Services Numériques a-t-il été lancé et quel est son but ?',
      answer:
        validLang === 'ar'
          ? 'انطلقت المبادرة في يونيو 2025 بهدف تجميع الروابط الحكومية والعمومية الرسمية في منصة واحدة منظمة باللغتين العربية والفرنسية لتوفير الوقت والجهد على المواطن.'
          : 'Lancée en juin 2025, l’initiative vise à centraliser les liens des services publics algériens et des outils pratiques en un point d’accès bilingue clair et sécurisé.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل تمثل البوابة جهة حكومية رسمية أم هي مبادرة مدنية مستقلة؟'
          : 'Le portail est-il un site gouvernemental officiel ou une initiative indépendante ?',
      answer:
        validLang === 'ar'
          ? 'البوابة مبادرة مدنية تطوعية مستقلة ولا تمثل أي وزارة أو هيئة رسمية، لكنها تقتصر على توجيه الزائر نحو الروابط الحكومية والمؤسساتية الرسمية المعتمدة المنتهية بـ .dz و .gov.dz.'
          : 'Il s’agit d’une initiative citoyenne indépendante non affiliée à un ministère ; elle joue un rôle d’orientation vers les domaines institutionnels officiels (.dz / .gov.dz).',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف يمكن للمواطن أو المتطوعين المساهمة في تطوير البوابة؟'
          : 'Comment les citoyens peuvent-ils contribuer à l’amélioration du portail ?',
      answer:
        validLang === 'ar'
          ? 'يمكن إرسال رابط خدمة رسمية جديدة أو التبليغ عن رابط معطل أو اقتراح تعديل عبر صفحة اتصل بنا ليتم مراجعته من فريق العمل.'
          : 'Chaque usager peut proposer une nouvelle plateforme ou signaler un lien obsolète via la page Contact afin qu’il soit vérifié par l’équipe bénévole.',
    },
  ];

  const faqSchema = generateFAQSchema(aboutFaqs, validLang);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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
        items={[{ label: dict.nav.about, href: `/${validLang}/pages/about/` }]}
      />

      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>
            {validLang === 'ar'
              ? 'مبادرة إرشادية مدنية مستقلة · انطلقت في يونيو 2025'
              : 'Initiative Citoyenne Indépendante · Lancée en juin 2025'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {dict.nav.about}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {validLang === 'ar'
            ? 'انطلقت البوابة الجزائرية للخدمات الرقمية في يونيو 2025 من رؤية واضحة: تسهيل حياة المواطن الجزائري في الداخل والجالية بالخارج عبر توفير وصول سريع وآمن إلى جميع الخدمات الحكومية والعمومية الرقمية والأدوات المساعدة في مكان واحد.'
            : 'Lancée en juin 2025, la plateforme est née d’une vision claire : simplifier le quotidien des citoyens en Algérie et de la diaspora en centralisant l’accès rapide et sécurisé aux téléservices publics, bancaires et outils pratiques.'}
        </p>
      </header>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'المواطنون، الطلبة، المهنيون، وأفراد الجالية الجزائرية بالخارج'
            : 'Citoyens algériens, étudiants, professionnels et diaspora'
        }
        processingTime={
          validLang === 'ar'
            ? 'محتوى محدث باستمرار منذ الانطلاق الرسمي في يونيو 2025'
            : 'Veille et mises à jour continues depuis juin 2025'
        }
        fees={
          validLang === 'ar'
            ? 'مجانية 100% دون اشتراكات أو تسجيل حساب'
            : '100 % gratuit sans inscription ni abonnement'
        }
        channel={
          validLang === 'ar'
            ? 'منصة ويب ثنائية اللغة (العربية والفرنسية) متوافقة مع كل الأجهزة'
            : 'Portail web bilingue (Arabe / Français) multi-écrans'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'توجيه مباشر نحو البوابات الرسمية المعتمدة دون تخزين أي بيانات شخصية'
            : 'Orientation directe vers les sites .dz officiels sans collecte de données'
        }
      />

      {/* Independence Statement */}
      <section className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Scale className="w-5 h-5 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? 'رسالتنا، رؤيتنا، وتصريح الاستقلالية'
              : 'Mission, Vision & Déclaration d’Indépendance'}
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {validLang === 'ar'
            ? 'رسالتنا تمكين كل مواطن جزائري من الوصول السهل والآمن إلى الخدمات الرقمية وتبسيط الإجراءات الإدارية، ورؤيتنا بناء مرجع رقمي موحد يقوم على الموثوقية والشفافية. نؤكد أن البوابة مبادرة مدنية مستقلة لا تمثل أي جهة حكومية ولا تعالج الملفات نيابة عن الدولة، بل تقتصر على شرح المسارات وتوجيه الزائر نحو النطاق الرسمي الأصلي المنتهي بـ .dz أو .gov.dz.'
            : 'Notre mission est d’aider chaque usager à repérer facilement les services publics numériques en toute sécurité. Le portail est une initiative indépendante qui n’agit pas au nom d’un ministère mais vulgarise chaque démarche et oriente vers les adresses institutionnelles officielles (.dz / .gov.dz).'}
        </p>
      </section>

      {/* Core Coverage Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <Building2 className="w-8 h-8 text-emerald-600 mb-2" />
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
            {validLang === 'ar' ? 'أدلة قطاعية شاملة' : 'Guides Sectoriels Complets'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {validLang === 'ar'
              ? `تغطية تحليلية وإرشادية لـ ${sectorsList.length} قطاعا وهيئة عمومية، ${banksList.length} بنكا، ${insuranceList.length} شركة تأمين، و${proceduresList.length} إجراء عمليا باللغتين.`
              : `Couverture structurée de ${sectorsList.length} institutions, ${banksList.length} banques, ${insuranceList.length} assureurs et ${proceduresList.length} démarches détaillées.`}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <ShieldCheck className="w-8 h-8 text-emerald-600 mb-2" />
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
            {validLang === 'ar' ? 'خصوصية ومعالجة محلية' : 'Confidentialité Native'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {validLang === 'ar'
              ? 'توافق كامل مع القانون الجزائري 18-07، مع تشغيل جميع الحاسبات والأدوات محليا داخل متصفحك دون جمع أي أرقام أو وثائق شخصية.'
              : 'Respect strict de la loi algérienne 18-07 : tous nos simulateurs fonctionnent localement sur votre appareil sans collecte de données personnelles.'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <HeartHandshake className="w-8 h-8 text-emerald-600 mb-2" />
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
            {validLang === 'ar' ? 'أدوات ومقالات مجانية' : 'Outils & Guides Gratuits'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {validLang === 'ar'
              ? `${toolsList.length} أداة تفاعلية للرواتب والفواتير والدراسة والصحة بالإضافة إلى ${blogArticles.length} دليلا تحريريا طويلا بصياغة واضحة ومحدثة.`
              : `${toolsList.length} simulateurs pratiques accompagnés de ${blogArticles.length} dossiers éditoriaux approfondis en arabe et en français.`}
          </p>
        </div>
      </div>

      {/* 6 Core Principles */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
          {validLang === 'ar' ? 'مبادئنا الأساسية الستة' : 'Nos Six Principes Directeurs'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5"
            >
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                {idx + 1}. {p.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Statistics Link */}
      <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600" />
            <span>{validLang === 'ar' ? 'فريق العمل والمجتمع' : 'Équipe & Contribution Citoyenne'}</span>
          </h2>
          <Link
            href={`/${validLang}/pages/statistics/`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            <BarChart3 className="w-4 h-4" />
            <span>{validLang === 'ar' ? 'تفاصيل إحصائيات القطاعات والخدمات' : 'Statistiques détaillées du portail'}</span>
          </Link>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full min-w-[440px] sm:min-w-0 text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'الركيزة' : 'Pôle'}</th>
                <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'الدور والمسؤولية' : 'Rôle & Responsabilité'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">
                  {validLang === 'ar' ? 'التطوير والتصميم التقني' : 'Développement & Conception Web'}
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-300">
                  {validLang === 'ar'
                    ? 'هندسة واجهة ثنائية اللغة سريعة الاستجابة وآمنة تعمل بالكامل عبر الصفحات الثابتة.'
                    : 'Architecture bilingue rapide, accessible et optimisée pour un chargement instantané.'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">
                  {validLang === 'ar' ? 'فريق التوثيق والتدقيق' : 'Bénévoles & Veille Éditoriale'}
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-300">
                  {validLang === 'ar'
                    ? 'متابعة مستمرة للنصوص التنظيمية والمواقيت والروابط الرسمية وإزالة العناوين المعطلة.'
                    : 'Suivi permanent des communiqués officiels, horaires ferroviaires et vérification des liens .dz.'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100">
                  {validLang === 'ar' ? 'مساهمات المواطنين' : 'Retours des Citoyens'}
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-300">
                  {validLang === 'ar'
                    ? 'كل اقتراح أو تبليغ عن رابط جديد يرسله الزوار يساهم في توسيع البوابة ورفع دقتها.'
                    : 'Chaque signalement ou suggestion envoyée par les usagers enrichit et améliore le portail.'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? 'منهجية التحرير ومراجعة الروابط الرسمية'
              : 'Méthodologie Éditoriale & Vérification des Sources'}
          </span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            {validLang === 'ar'
              ? 'يعتمد فريق البوابة منهجية صارمة في كتابة وتحديث المحتوى تستند أولا إلى التحقق الميداني من النصوص التشريعية والبيانات الرسمية الصادرة عن الجريدة الرسمية والوزارات المعنية في الجزائر. كل دليل قطاعي يكتب بأسلوب مبسط يراعي الأسئلة الواقعية للمواطن.'
              : 'Chaque guide publié sur le portail fait l’objet d’une vérification rigoureuse à partir des communiqués officiels des ministères, du Journal Officiel (JORADP) et des portails institutionnels certifiés.'}
          </p>
          <ul className="space-y-2 pt-1">
            {[
              validLang === 'ar'
                ? 'فحص دوري أسبوعي للروابط الخارجية وإزالة أي عنوان معطل أو موقع غير رسمي فورا.'
                : 'Audit hebdomadaire des liens externes et suppression immédiate des adresses obsolètes ou non vérifiées.',
              validLang === 'ar'
                ? 'تحديث معادلات الحاسبات المالية (مثل سلم الضريبة على الدخل IRG وتعريفة سونلغاز) فور صدور القوانين المعدلة.'
                : 'Mise à jour des barèmes des calculateurs (IRG, tranches Sonelgaz, allocations) dès publication de nouveaux textes réglementaires.',
              validLang === 'ar'
                ? 'تقديم محتوى متكافئ عالي الجودة باللغتين العربية الفصحى الميسرة والفرنسية المهنية لتغطية حاجيات كل شرائح المجتمع.'
                : 'Rédaction bilingue arabe et français soignée pour servir aussi bien les usagers locaux que la communauté algérienne établie à l’étranger.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {aboutFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{faq.question}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-bold">
        <Link
          href={`/${validLang}/pages/disclaimer/`}
          className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
        >
          {dict.nav.disclaimer}
        </Link>
        <Link
          href={`/${validLang}/pages/privacy/`}
          className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
        >
          {validLang === 'ar' ? 'سياسة الخصوصية' : 'Politique de Confidentialité'}
        </Link>
        <Link
          href={`/${validLang}/pages/contact/`}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >
          {dict.nav.contact}
        </Link>
      </div>
    </article>
  );
}
