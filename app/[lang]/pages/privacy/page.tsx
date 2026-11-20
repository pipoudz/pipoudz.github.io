import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  Lock,
  Cookie,
  Globe,
  UserCheck,
  HelpCircle,
} from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
import { toolsList } from '@/lib/sectors-data';
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
        ? 'سياسة الخصوصية وحماية المعطيات | البوابة الجزائرية للخدمات الرقمية'
        : 'Politique de Confidentialité & Cookies (Loi 18-07 & AdSense)',
    description:
      validLang === 'ar'
        ? 'تعرف على سياسة الخصوصية وحماية المعطيات الشخصية في البوابة الجزائرية للخدمات الرقمية طبقا للقانون 18-07، وتوضيح ملفات تعريف الارتباط وإعلانات Google AdSense.'
        : 'Politique complète de protection des données personnelles (Loi algérienne 18-07), exécution locale des outils et gestion des cookies Google AdSense.',
    path: 'pages/privacy',
    lang: validLang,
  });
}

export default async function PrivacyPage({
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
      name: validLang === 'ar' ? 'سياسة الخصوصية' : 'Confidentialité',
      url: `/${validLang}/pages/privacy/`,
    },
  ]);

  const privacyFaqs = [
    {
      question:
        validLang === 'ar'
          ? 'هل تجمع البوابة الجزائرية للخدمات الرقمية بيانات الهوية أو البطاقة الذهبية؟'
          : 'Le portail collecte-t-il des numéros NIN, CCP ou données bancaires ?',
      answer:
        validLang === 'ar'
          ? 'لا، لا نطلب إنشاء حساب ولا نجمع أي رقم هوية أو معلومات بنكية؛ كافة الحاسبات والأدوات تعمل محليا على جهازك دون إرسال بيانات إلى الخادم.'
          : 'Non, aucune inscription ni coordonnée bancaire ou NIN n’est demandée ; tous nos simulateurs fonctionnent localement sur votre navigateur.',
    },
    {
      question:
        validLang === 'ar'
          ? 'ما نوع المعلومات المخزنة محليا في المتصفح وكيف يمكن حذفها؟'
          : 'Quelles données sont conservées localement et comment les effacer ?',
      answer:
        validLang === 'ar'
          ? 'يحفظ المتصفح فقط تفضيل المظهر (ليلي/نهاري) وقائمة مفضلاتك وملاحظات أدوات الإنتاجية داخل LocalStorage، ويمكنك مسحها في أي وقت من إعدادات المتصفح أو صفحة مفضلاتي.'
          : 'Seuls votre thème visuel, vos favoris et vos notes d’outils sont stockés dans le LocalStorage de votre appareil ; vous pouvez les effacer à tout moment.',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف أتحكم في ملفات تعريف الارتباط الخاصة بإعلانات Google AdSense؟'
          : 'Comment gérer ou désactiver les cookies publicitaires Google AdSense ?',
      answer:
        validLang === 'ar'
          ? 'يمكنك تعطيل الإعلانات المخصصة في أي وقت عبر صفحة إعدادات إعلانات Google أو مبادرة AboutAds، كما يمكنك رفض ملفات تعريف الارتباط مباشرة من إعدادات متصفحك.'
          : 'Vous pouvez désactiver la publicité personnalisée à tout moment via les Paramètres des annonces Google ou AboutAds, ou bloquer les cookies depuis votre navigateur.',
    },
    {
      question:
        validLang === 'ar'
          ? 'ما هي حقوقي بخصوص المعطيات المرسلة طوعا عبر نموذج الاتصال؟'
          : 'Quels sont mes droits sur les messages envoyés via le formulaire de contact ?',
      answer:
        validLang === 'ar'
          ? 'طبقا للقانون 18-07، يحق لك طلب الوصول إلى رسالتك أو تصحيحها أو حذفها في أي وقت عبر التواصل مع إدارة البوابة.'
          : 'Conformément à la loi 18-07, vous disposez d’un droit d’accès, de rectification et d’effacement de tout message transmis volontairement.',
    },
  ];

  const faqSchema = generateFAQSchema(privacyFaqs, validLang);

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
            label: validLang === 'ar' ? 'سياسة الخصوصية' : 'Confidentialité',
            href: `/${validLang}/pages/privacy/`,
          },
        ]}
      />

      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>
            {validLang === 'ar'
              ? 'القانون الجزائري 18-07 ومعايير Google AdSense'
              : 'Conformité Loi N° 18-07 & Google AdSense'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {validLang === 'ar'
            ? 'سياسة الخصوصية وحماية المعطيات الشخصية'
            : 'Politique de Confidentialité & Protection des Données'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {validLang === 'ar'
            ? 'تلتزم البوابة الجزائرية للخدمات الرقمية بحماية خصوصية زوارها بالكامل، وتوضح هذه السياسة قواعد المعالجة المحلية للأدوات، وملفات تعريف الارتباط، والإعلانات، وحقوق المواطن طبقا للقانون الجزائري رقم 18-07.'
            : 'Le Portail Algérien des Services Numériques respecte pleinement votre vie privée et présente de manière transparente ses règles d’exécution locale, cookies publicitaires et garanties issues de la loi algérienne n° 18-07.'}
        </p>
      </header>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'جميع زوار البوابة ومستخدمي الحاسبات والأدوات التفاعلية'
            : 'Tous les visiteurs et utilisateurs des calculateurs et guides'
        }
        processingTime={
          validLang === 'ar'
            ? 'معالجة فورية 100% داخل جهاز المستخدم دون خوادم وسيطة'
            : 'Traitement 100 % local dans le navigateur sans serveur tiers'
        }
        fees={
          validLang === 'ar'
            ? 'تصفح حر دون تسجيل حساب أو رسوم'
            : 'Navigation libre sans compte ni collecte obligatoire'
        }
        channel={
          validLang === 'ar'
            ? 'تخزين محلي اختياري (LocalStorage) وتشفير SSL/TLS قياسي'
            : 'Stockage local optionnel (LocalStorage) et chiffrement HTTPS/TLS'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'التحكم الكامل للمستخدم في ملفات تعريف الارتباط والمفضلة'
            : 'Contrôle complet de l’usager sur les cookies et favoris locaux'
        }
      />

      <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? '1. عدم جمع المعطيات الحساسة والمعالجة المحلية للأدوات'
                : '1. Zéro Collecte Administrative & Exécution Locale'}
            </span>
          </h2>
          <p>
            {validLang === 'ar'
              ? `لا يتطلب تصفح البوابة أو استخدام أي من أدواتها (${toolsList.length} أداة) إنشاء حساب ولا تقديم رقم التعريف الوطني NIN أو أرقام الحسابات البريدية CCP أو البطاقات البنكية. جميع الحاسبات التفاعلية تعمل حصرا داخل متصفحك دون إرسال المدخلات إلى أي خادم خارجي. عند إرسال رسالة طوعية عبر استمارة الاتصال (الاسم، البريد، موضوع الرسالة)، تستخدم فقط للرد على استفسارك وتحسين البوابة.`
              : `La navigation et l’utilisation de nos ${toolsList.length} simulateurs ne requièrent aucune création de compte ni saisie de NIN, numéro CCP ou carte bancaire. Tous les calculs s’exécutent exclusivement dans votre navigateur. Seules les informations volontairement soumises via Google Forms (nom, courriel, message) sont utilisées pour vous répondre.`}
          </p>
        </section>

        <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Cookie className="w-4 h-4 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? '2. ملفات تعريف الارتباط (Cookies) والتخزين المحلي وشبكة Google AdSense'
                : '2. Cookies, Stockage Local & Publicité Google AdSense'}
            </span>
          </h2>

          <p>
            {validLang === 'ar'
              ? 'قد تستخدم البوابة خدمة Google AdSense كطرف ثالث لعرض الإعلانات التي تساعد في تغطية تكاليف التشغيل وإبقاء المحتوى مجانيا للجميع. تستخدم Google وشركاؤها ملفات تعريف الارتباط (بما في ذلك ملف DoubleClick DART) لعرض إعلانات ملائمة بناء على زياراتك السابقة لهذا الموقع أو مواقع أخرى على شبكة الإنترنت.'
              : 'Ce site peut recourir à Google AdSense en tant que fournisseur tiers pour diffuser des annonces permettant de financer la maintenance et la gratuité du portail. Google et ses partenaires utilisent des cookies (notamment le cookie DART / DoubleClick) pour adapter les annonces en fonction de vos visites antérieures sur ce site ou d’autres sites web.'}
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[480px] sm:min-w-0 text-xs sm:text-sm text-start">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-3 text-start font-bold">
                    {validLang === 'ar' ? 'الفئة' : 'Catégorie'}
                  </th>
                  <th className="p-3 text-start font-bold">
                    {validLang === 'ar' ? 'الغرض الوظيفي' : 'Finalité'}
                  </th>
                  <th className="p-3 text-start font-bold">
                    {validLang === 'ar' ? 'التحكم والمدة' : 'Contrôle & Durée'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">
                    {validLang === 'ar' ? 'تفضيلات الواجهة والمفضلة' : 'Préférences & Favoris'}
                  </td>
                  <td className="p-3">
                    {validLang === 'ar'
                      ? 'حفظ الوضع الليلي، والمفضلات، وملاحظات أدوات الإنتاجية على جهازك.'
                      : 'Mémorisation du thème visuel, favoris et notes locales.'}
                  </td>
                  <td className="p-3 text-emerald-700 dark:text-emerald-400 font-semibold">
                    {validLang === 'ar' ? 'محلي بالكامل — قابل للمسح فورا' : '100 % local — effaçable'}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">
                    {validLang === 'ar' ? 'ملفات الأمان والأداء القياسية' : 'Journaux Techniques'}
                  </td>
                  <td className="p-3">
                    {validLang === 'ar'
                      ? 'تأمين النقل عبر SSL/TLS وضمان سرعة استجابة الصفحات الثابتة.'
                      : 'Sécurisation HTTPS/TLS et performance d’affichage.'}
                  </td>
                  <td className="p-3">
                    {validLang === 'ar' ? 'تلقائي ومجهول الهوية' : 'Automatique anonymisé'}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">
                    {validLang === 'ar' ? 'ملفات الإعلانات (Google AdSense)' : 'Cookies AdSense'}
                  </td>
                  <td className="p-3">
                    {validLang === 'ar'
                      ? 'تغطية تكاليف التشغيل وإبقاء البوابة مجانية دون اشتراك.'
                      : 'Financement de la gratuité du service public citoyen.'}
                  </td>
                  <td className="p-3">
                    {validLang === 'ar' ? 'خيار تعطيل متاح عبر المتصفح و Google' : 'Désactivable à tout moment'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-3 pt-1 text-xs font-bold">
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              {validLang === 'ar' ? 'إعدادات إعلانات Google ↗' : 'Paramètres des annonces Google ↗'}
            </a>
            <a
              href="https://optout.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              {validLang === 'ar' ? 'إدارة تفضيلات الإعلانات (AboutAds) ↗' : 'Gestion des préférences (AboutAds) ↗'}
            </a>
          </div>
        </section>

        <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? '3. حقوق المواطن وفق القانون 18-07 ومدة الاحتفاظ بالبيانات'
                : '3. Droits des Citoyens (Loi 18-07) & Conservation'}
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            {[
              validLang === 'ar'
                ? 'الحق في الوصول إلى أي معطيات أرسلتها طوعا ومعرفة كيفية استخدامها.'
                : 'Droit d’accès aux messages transmis volontairement.',
              validLang === 'ar'
                ? 'الحق في تصحيح المعلومات غير الدقيقة أو طلب حذفها (الحق في النسيان).'
                : 'Droit de rectification et d’effacement (droit à l’oubli).',
              validLang === 'ar'
                ? 'الحق في الاعتراض على المعالجة أو سحب الموافقة في أي وقت.'
                : 'Droit d’opposition et de retrait du consentement.',
              validLang === 'ar'
                ? 'الاحتفاظ برسائل الدعم فقط للمدة اللازمة للرد عليها وحل المشكلة التقنية.'
                : 'Conservation limitée uniquement à la durée de traitement du support.',
            ].map((item, idx) => (
              <li
                key={idx}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-600" />
            <span>
              {validLang === 'ar'
                ? '4. الروابط نحو البوابات الرسمية وتحديثات السياسة'
                : '4. Liens Vers les Portails Officiels & Mises à Jour'}
            </span>
          </h2>
          <p>
            {validLang === 'ar'
              ? 'عند الانتقال عبر الروابط الرسمية نحو المواقع الحكومية (.dz / .gov.dz) أو المصرفية، تخضع زيارتك لسياسة الخصوصية الخاصة بتلك المؤسسات. نراجع هذه السياسة دوريا ونحدثها عند صدور أي نصوص تنظيمية جديدة.'
              : 'Tout clic vers un domaine institutionnel (.dz / .gov.dz) ou bancaire vous soumet aux règles de confidentialité de l’organisme concerné. La présente politique est actualisée régulièrement.'}
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
          {privacyFaqs.map((faq, idx) => (
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
          href={`/${validLang}/pages/terms/`}
          className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
        >
          {validLang === 'ar' ? 'شروط الاستخدام' : 'Conditions d’Utilisation'}
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
