import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldAlert, ExternalLink, Calculator, Building2, Mail } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
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
        ? 'إخلاء المسؤولية والاستقلالية الإدارية'
        : 'Avis de Non-Responsabilité & Indépendance Éditoriale',
    description:
      validLang === 'ar'
        ? 'بيان شفاف يوضح الطبيعة المدنية المستقلة للبوابة الجزائرية للخدمات الرقمية وحدود استخدام الروابط الرسمية والحاسبات التقديرية.'
        : 'Déclaration de transparence précisant le caractère indépendant du portail et la portée indicative des calculateurs et liens externes.',
    path: 'pages/disclaimer',
    lang: validLang,
  });
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.disclaimer, url: `/${validLang}/pages/disclaimer/` },
  ]);

  const sections = [
    {
      icon: Building2,
      title:
        validLang === 'ar'
          ? '1. مبادرة مدنية مستقلة وليست جهة حكومية رسمية'
          : '1. Initiative Citoyenne Indépendante (Non Affiliée à l’État)',
      paragraphs:
        validLang === 'ar'
          ? [
              'تؤكد إدارة البوابة الجزائرية للخدمات الرقمية بوضوح تام أن هذا الموقع مبادرة معلوماتية وإرشادية مدنية مستقلة تماما، ولا يمثل أي وزارة أو هيئة حكومية أو مؤسسة عمومية جزائرية، ولا يتصرف نيابة عنها.',
              'تم تصميم هذا الدليل لتبسيط المعلومة الإدارية، وتجميع الروابط الرسمية الصحيحة في فضاء واحد منظم باللغتين العربية والفرنسية، وذلك لحماية المواطنين من الوقوع في مواقع التصيد الإلكتروني أو البحث العشوائي عن النطاقات الرسمية.',
            ]
          : [
              'Le Portail Algérien des Services Numériques déclare sans ambiguïté être une initiative éditoriale et citoyenne indépendante. Ce site ne représente aucun ministère, aucune institution publique algérienne et n’agit au nom d’aucune administration officielle.',
              'Sa vocation est exclusivement informative : centraliser et expliquer les téléservices officiels afin d’éviter aux citoyens de tomber sur des sites frauduleux ou des liens obsolètes.',
            ],
    },
    {
      icon: ExternalLink,
      title:
        validLang === 'ar'
          ? '2. المسؤولية عن المنصات والروابط الخارجية'
          : '2. Portails Officiels Externes et Domaines .dz',
      paragraphs:
        validLang === 'ar'
          ? [
              'كافة الروابط المباشرة نحو المنصات الوطنية (.dz و.gov.dz) والبنوك وشركات التأمين توجهك خارج نطاق موقعنا إلى الخوادم الرسمية الخاصة بكل مؤسسة. وبمجرد مغادرة موقعنا، تخضع تجربتك لشروط الاستخدام وسياسة الخصوصية والأمان الخاصة بتلك المؤسسة وحدها.',
              'لا تتحمل البوابة أي مسؤولية عن الأعطال المؤقتة في المنصات الحكومية، أو تغير عناوين الصفحات الفرعية من المصدر، أو أي قرار إداري يصدر بخصوص ملفك الشخصي. ومع ذلك، يراجع فريق التحرير الروابط أسبوعيا لتحديث أي عنوان متغير فورا.',
            ]
          : [
              'Tous les liens vers les plateformes publiques (.dz, .gov.dz), banques et assureurs redirigent hors de notre site vers les serveurs officiels des organismes concernés. Dès que vous quittez notre portail, les conditions d’utilisation et règles de sécurité de l’organisme destinataire s’appliquent exclusivement.',
              'Nous ne pouvons être tenus responsables d’une indisponibilité temporaire d’un portail tiers, d’une refonte d’URL institutionnelle ou de l’issue administrative d’un dossier déposé en ligne. Notre rédaction audite toutefois régulièrement l’ensemble des liens référencés.',
            ],
    },
    {
      icon: Calculator,
      title:
        validLang === 'ar'
          ? '3. حدود دقة الحاسبات والأدوات التفاعلية'
          : '3. Portée Indicative des Calculateurs & Simulateurs',
      paragraphs:
        validLang === 'ar'
          ? [
              'توفر البوابة 60 أداة وحاسبة تفاعلية تشمل محاكاة الأجر الصافي وضريبة الدخل الإجمالي IRG، تقدير فواتير الكهرباء والغاز لسونلغاز، التحويلات البنكية، المواعيد التقريبية، والحاسبات الصحية (مثل مؤشر كتلة الجسم BMI والسعرات الحرارية).',
              'تقدم هذه الأدوات نتائج تقديرية وإرشادية مبنية على القوانين والمراسيم المتاحة للعموم وقت النشر، ولا تعوض بأي حال من الأحوال كشف الراتب الرسمي الصادر عن المستخدم، أو الفاتورة الرسمية لسونلغاز، أو الاستشارة الطبية والقانونية المتخصصة من طبيب أو محاسب معتمد.',
            ]
          : [
              'Les 60 outils et simulateurs proposés (salaire net IRG, tranches Sonelgaz, conversions, indicateurs de santé IMC ou calendriers) fournissent des estimations à caractère strictement pédagogique et indicatif.',
              'Bien qu’élaborés à partir des textes réglementaires et barèmes publics en vigueur, ces résultats ne remplacent ni une fiche de paie officielle, ni une facture définitive d’un fournisseur, ni un avis médical, juridique ou fiscal délivré par un professionnel habilité.',
            ],
    },
    {
      icon: ShieldAlert,
      title:
        validLang === 'ar'
          ? '4. تنبيه أمني حول البيانات الشخصية والبطاقات البنكية'
          : '4. Vigilance Sécuritaire : NIN, CCP et Données Bancaires',
      paragraphs:
        validLang === 'ar'
          ? [
              'لا تطلب البوابة الجزائرية للخدمات الرقمية من زوارها مطلقا إدخال أرقام بطاقتهم الذهبية أو رموزها السرية أو كلمات مرور فضاءاتهم الحكومية في أي صفحة من صفحات الدليل. احرص دائما على التحقق من شريط العنوان والقفل الأمني HTTPS للموقع الرسمي قبل إدخال أي معطيات حساسة.',
            ]
          : [
              'Notre portail ne demande jamais la saisie de vos codes secrets Edahabia/CIB, mots de passe administratifs ou pièces d’identité pour consultation. Vérifiez systématiquement le domaine officiel et le cadenas HTTPS dans la barre de votre navigateur avant toute authentification sur un téléservice public.',
            ],
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        lang={validLang}
        items={[{ label: dict.nav.disclaimer, href: `/${validLang}/pages/disclaimer/` }]}
      />

      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-extrabold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>
            {validLang === 'ar'
              ? 'الشفافية التحريرية وإخلاء المسؤولية'
              : 'Transparence Éditoriale & Cadre Légal'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {dict.nav.disclaimer}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {validLang === 'ar'
            ? 'يرجى قراءة هذا البيان بعناية لفهم حدود استخدام المعلومات، الروابط الرسمية، والحاسبات الرقمية المتاحة على موقع البوابة الجزائرية للخدمات الرقمية.'
            : 'Veuillez consulter attentivement les présentes mentions précisant le statut indépendant du site et les limites d’usage de nos guides et simulateurs.'}
        </p>
      </header>

      <div className="space-y-6">
        {sections.map((sec, idx) => {
          const IconComp = sec.icon;
          return (
            <section
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <IconComp className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{sec.title}</span>
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            {validLang === 'ar'
              ? 'هل لاحظت رابطا متعطلا أو معلومة تحتاج لتحديث؟'
              : 'Vous avez repéré un lien obsolète ou une information à actualiser ?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {validLang === 'ar'
              ? 'راسل فريق التحرير مباشرة عبر صفحة الاتصال وسنقوم بمراجعة التعديل وتحديثه خلال 24 إلى 48 ساعة.'
              : 'Signalez-le à notre équipe éditoriale via la page contact pour une vérification et mise à jour sous 24 à 48 heures.'}
          </p>
        </div>
        <Link
          href={`/${validLang}/pages/contact/`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>{dict.nav.contact}</span>
        </Link>
      </section>
    </article>
  );
}
