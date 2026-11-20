import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  FileText,
  ShieldAlert,
  Scale,
  Calculator,
  Globe,
  CheckCircle2,
  Ban,
  HelpCircle,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
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
        ? 'شروط الاستخدام | البوابة الجزائرية للخدمات الرقمية'
        : 'Conditions d’Utilisation | Portail Algérien des Services Numériques',
    description:
      validLang === 'ar'
        ? 'اطلع على شروط الاستخدام والأحكام القانونية الخاصة بالبوابة الجزائرية للخدمات الرقمية، وحقوق المستخدمين والملكية الفكرية وسياسات الاستفادة من الموقع.'
        : 'Conditions générales régissant l’accès aux guides, calculateurs et liens officiels du Portail Algérien des Services Numériques.',
    path: 'pages/terms',
    lang: validLang,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    {
      name: validLang === 'ar' ? 'شروط الاستخدام' : 'Conditions d’Utilisation',
      url: `/${validLang}/pages/terms/`,
    },
  ]);

  const termsFaqs = [
    {
      question:
        validLang === 'ar'
          ? 'هل تتحمل البوابة مسؤولية توفر المواقع الحكومية الخارجية على مدار الساعة؟'
          : 'Le portail garantit-il la disponibilité continue des sites gouvernementaux externes ?',
      answer:
        validLang === 'ar'
          ? 'تبذل البوابة قصارى جهدها لفحص وتحديث الروابط دوريا، غير أن توفر المواقع الرسمية وصحة المعاملات داخلها يخضعان لإدارة وشروط تلك الهيئات، وينبغي التحقق من المصدر الرسمي عند أي معاملة.'
          : 'Nous vérifions régulièrement les liens officiels, mais la disponibilité technique et les procédures des portails externes relèvent exclusivement de leurs institutions respectives.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل يجوز إعادة مشاركة روابط البوابة وأدلتها مع المواطنين أو في المؤسسات التعليمية؟'
          : 'Puis-je partager les liens et guides du portail librement ?',
      answer:
        validLang === 'ar'
          ? 'نعم، يُسمح بالاستخدام الشخصي غير التجاري ومشاركة الروابط لتسهيل وصول المواطنين إلى الخدمات، مع حظر النسخ الآلي أو الاستغلال التجاري دون إذن.'
          : 'Oui, le partage non commercial des liens et guides est autorisé en citant la source ; toute exploitation commerciale ou extraction automatisée est interdite.',
    },
    {
      question:
        validLang === 'ar'
          ? 'ما القانون الواجب التطبيق والمهلة المعتادة للرد على الشكاوى؟'
          : 'Quel droit est applicable et quel est le délai de réponse aux réclamations ?',
      answer:
        validLang === 'ar'
          ? 'تخضع هذه الشروط لقوانين الجمهورية الجزائرية الديمقراطية الشعبية، ويسعى الفريق للرد على الاستفسارات والشكاوى عبر صفحة اتصل بنا خلال 48 ساعة عمل.'
          : 'Les présentes conditions sont régies par le droit algérien ; toute réclamation envoyée via la page Contact est traitée sous 48 heures ouvrables.',
    },
  ];

  const faqSchema = generateFAQSchema(termsFaqs, validLang);

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
        items={[
          {
            label: validLang === 'ar' ? 'شروط الاستخدام' : 'Conditions',
            href: `/${validLang}/pages/terms/`,
          },
        ]}
      />

      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>
            {validLang === 'ar'
              ? 'الأحكام التنظيمية والقانون الجزائري'
              : 'Règles d’Accès & Droit Algérien'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {validLang === 'ar'
            ? 'شروط الاستخدام والأحكام القانونية'
            : 'Conditions Générales d’Utilisation'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {validLang === 'ar'
            ? 'باستخدامك للبوابة الجزائرية للخدمات الرقمية وتصفحك لأدلتها أو حاسباتها التفاعلية، فإنك تقر بموافقتك على البنود الموضحة أدناه لضمان الاستخدام المسؤول والآمن.'
            : 'En accédant au Portail Algérien des Services Numériques et à ses calculateurs, vous acceptez les présentes conditions générales d’utilisation.'}
        </p>
      </header>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'جميع زوار البوابة ومستخدمي الروابط والحاسبات التفاعلية'
            : 'Tous les visiteurs et utilisateurs des liens et outils'
        }
        processingTime={
          validLang === 'ar'
            ? 'سارية فور التصفح مع رد على الاستفسارات خلال 48 ساعة عمل'
            : 'Applicable dès la navigation, support sous 48h ouvrables'
        }
        fees={
          validLang === 'ar'
            ? 'استخدام مجاني بالكامل للأغراض الشخصية والتوجيهية'
            : 'Usage gratuit à titre informatif et non commercial'
        }
        channel={
          validLang === 'ar'
            ? 'منصة توجيه إرشادية مستقلة غير تابعة لجهة حكومية'
            : 'Plateforme d’orientation citoyenne indépendante'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'الالتزام بالاستخدام المشروع والتحقق النهائي من المصادر الرسمية'
            : 'Usage loyal et vérification finale auprès des portails .dz'
        }
      />

      {/* Allowed vs Prohibited Uses HTML Table */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Scale className="w-4 h-4 text-emerald-600" />
          <span>
            {validLang === 'ar'
              ? 'جدول الضوابط: الاستخدام المسموح والممنوع'
              : 'Synthèse des Usages Autorisés et Interdits'}
          </span>
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold">
                  {validLang === 'ar' ? 'المجال' : 'Domaine'}
                </th>
                <th className="p-3 text-start font-bold text-emerald-700 dark:text-emerald-400">
                  {validLang === 'ar' ? 'الاستخدام المسموح' : 'Autorisé'}
                </th>
                <th className="p-3 text-start font-bold text-red-600 dark:text-red-400">
                  {validLang === 'ar' ? 'الاستخدام الممنوع' : 'Strictement interdit'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold">
                  {validLang === 'ar' ? 'الروابط والبحث' : 'Liens & Recherche'}
                </td>
                <td className="p-3">
                  <span className="inline-flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      {validLang === 'ar'
                        ? 'الوصول للمعلومات والروابط العمومية ومشاركتها مع الآخرين.'
                        : 'Consultation publique et partage citoyen des liens.'}
                    </span>
                  </span>
                </td>
                <td className="p-3">
                  <span className="inline-flex items-start gap-1.5">
                    <Ban className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>
                      {validLang === 'ar'
                        ? 'محاولة الاختراق أو التعطيل أو الدخول لأقسام غير مصرح بها.'
                        : 'Tentatives d’intrusion, surcharge ou accès non autorisé.'}
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">
                  {validLang === 'ar' ? 'المحتوى والتصنيف' : 'Contenus & Guides'}
                </td>
                <td className="p-3">
                  <span className="inline-flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      {validLang === 'ar'
                        ? 'الاستعمال الشخصي والتعليمي غير التجاري مع ذكر المصدر.'
                        : 'Usage personnel/éducatif en citant la source.'}
                    </span>
                  </span>
                </td>
                <td className="p-3">
                  <span className="inline-flex items-start gap-1.5">
                    <Ban className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>
                      {validLang === 'ar'
                        ? 'إعادة النشر دون إشارة للمصدر أو الاستغلال الاحتيالي.'
                        : 'Reproduction sans attribution ou usage frauduleux.'}
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">
                  {validLang === 'ar' ? 'التواصل والبيانات' : 'Support & Données'}
                </td>
                <td className="p-3">
                  <span className="inline-flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      {validLang === 'ar'
                        ? 'التبليغ عن الروابط المعطلة وإرسال المقترحات المشروعة.'
                        : 'Signalement de liens cassés et suggestions constructives.'}
                    </span>
                  </span>
                </td>
                <td className="p-3">
                  <span className="inline-flex items-start gap-1.5">
                    <Ban className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>
                      {validLang === 'ar'
                        ? 'جمع بيانات المستخدمين أو إرسال رسائل مزعجة (Spam).'
                        : 'Collecte de données d’usagers ou envoi de spams.'}
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Scale className="w-4 h-4 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? '1. قبول الشروط والغرض التوجيهي للبوابة'
                : '1. Acceptation des Conditions & Objet du Portail'}
            </span>
          </h2>
          <p>
            {validLang === 'ar'
              ? 'بدخولك واستخدامك للبوابة فإنك تقر بقبول هذه الأحكام؛ وإذا لم توافق على أي بند منها يرجى التوقف عن استخدام الموقع. البوابة هي منصة توجيهية ومعلوماتية مستقلة تجمع روابط الخدمات الحكومية والعمومية المصنفة وتشرح مساراتها دون تقديم الخدمات الإدارية نيابة عن الدولة أو مقابل أي عمولة.'
              : 'En utilisant le portail, vous acceptez sans réserve ces conditions. Le site est une plateforme d’orientation citoyenne indépendante qui classe et vulgarise les démarches officielles sans agir comme intermédiaire commercial.'}
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? '2. حدود المسؤولية وتوفر الخدمة والأدوات التقديرية'
                : '2. Limitation de Responsabilité, Disponibilité & Outils'}
            </span>
          </h2>
          <p>
            {validLang === 'ar'
              ? 'تُقدم البوابة وحاسباتها المالية والصحية والدراسية ومعلومات مسارات القطارات "كما هي" كأدوات تقديرية وإرشادية مجانية، وقد تخضع لفترات صيانة وتحديث دوري. تقع المسؤولية النهائية على المستخدم في التحقق من القوانين والجداول والمواعيد النهائية عبر المواقع الرسمية المختصة قبل اتخاذ أي قرار ملزم.'
              : 'Les informations, calculateurs et tableaux indicatifs sont fournis « en l’état » à titre d’aide gratuite et peuvent faire l’objet de maintenances techniques. L’utilisateur reste responsable de vérifier les barèmes définitifs sur les sites institutionnels.'}
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? '3. الملكية الفكرية والروابط الخارجية'
                : '3. Propriété Intellectuelle & Liens Externes'}
            </span>
          </h2>
          <p>
            {validLang === 'ar'
              ? 'تظل أسماء وشعارات الوزارات والبنوك وشركات التأمين ملكا حصريا لأصحابها وتذكر بغرض التوجيه الإخباري، كما يخضع انتقالك إلى أي رابط خارجي لشروط وسياسة خصوصية ذلك الموقع. أما التصميم ونظام التصنيف والصياغة التحريرية للبوابة فمحمية بحقوق الملكية الفكرية.'
              : 'Les sigles et marques des institutions restent leur propriété exclusive, et toute navigation vers un site externe relève de ses propres conditions. Le design, la taxonomie et la rédaction du portail sont protégés.'}
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? '4. القانون الواجب التطبيق وتعديل الشروط'
                : '4. Loi Applicable, Réclamations & Mises à Jour'}
            </span>
          </h2>
          <p>
            {validLang === 'ar'
              ? 'تخضع هذه الشروط لقوانين الجمهورية الجزائرية الديمقراطية الشعبية، ويُحال أي نزاع ينشأ عن استخدامها إلى المحاكم الجزائرية المختصة. تحتفظ البوابة بحق تعديل هذه الشروط مع تنبيه المستخدمين عند أي تحديث جوهري، ويلتزم الفريق بالرد على الشكاوى عبر صفحة اتصل بنا خلال 48 ساعة عمل.'
              : 'Ces conditions sont régies par la législation algérienne et tout litige relève des juridictions compétentes en Algérie. Les mises à jour substantielles font l’objet d’une mention visible et les réclamations reçoivent une réponse sous 48h ouvrables.'}
          </p>
        </section>
      </div>

      {/* FAQs */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {termsFaqs.map((faq, idx) => (
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

      <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-bold">
        <Link
          prefetch={false}
          href={`/${validLang}/pages/disclaimer/`}
          className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
        >
          {dict.nav.disclaimer}
        </Link>
        <Link
          prefetch={false}
          href={`/${validLang}/pages/privacy/`}
          className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
        >
          {validLang === 'ar' ? 'سياسة الخصوصية' : 'Politique de Confidentialité'}
        </Link>
        <Link
          prefetch={false}
          href={`/${validLang}/pages/contact/`}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >
          {dict.nav.contact}
        </Link>
      </div>
    </article>
  );
}
