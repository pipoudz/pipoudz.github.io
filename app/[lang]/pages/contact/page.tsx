import React from 'react';
import { Metadata } from 'next';
import { MapPin, Clock, HelpCircle, ShieldAlert } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
import { contactPortalLinks } from '@/lib/sectors-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuickSummaryBox from '@/components/QuickSummaryBox';
import ContactFormClient from '@/components/ContactFormClient';

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
        ? 'اتصل بنا | البوابة الجزائرية للخدمات الرقمية'
        : 'Contact & Suggestions — Portail DZ',
    description:
      validLang === 'ar'
        ? 'تواصل مع فريق البوابة الجزائرية للخدمات الرقمية عبر نموذج Google Forms الآمن أو البريد الإلكتروني لإرسال استفسار أو اقتراح أو التبليغ عن رابط معطل.'
        : "Canaux de contact officiels du Portail Algérien des Services Numériques : Google Forms sécurisé, courriel et formulaires d'avis.",
    path: 'pages/contact',
    lang: validLang,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';
  const dict = getDictionary(validLang);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: dict.nav.home, url: `/${validLang}/` },
    { name: dict.nav.contact, url: `/${validLang}/pages/contact/` },
  ]);

  const contactFaqs = [
    {
      question:
        validLang === 'ar'
          ? 'هل تمثل البوابة الجزائرية للخدمات الرقمية جهة حكومية رسمية؟'
          : 'Le portail représente-t-il un organisme gouvernemental officiel ?',
      answer:
        validLang === 'ar'
          ? 'البوابة مبادرة مدنية تطوعية مستقلة تهدف إلى تسهيل الوصول إلى الخدمات الحكومية الرقمية. نحن لا نمثل جهة رسمية، لكننا نجمع ونحدث الروابط الرسمية من مصادر حكومية موثوقة.'
          : 'Non, le portail est une initiative citoyenne indépendante visant à orienter les usagers uniquement vers les liens officiels des institutions publiques.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل استخدام خدمات البوابة وإرسال المراسلات مجاني بالكامل؟'
          : 'L’utilisation du portail et le contact sont-ils gratuits ?',
      answer:
        validLang === 'ar'
          ? 'نعم، جميع خدمات البوابة وأدواتها وقنوات التواصل معها متاحة مجانا بالكامل دون أي رسوم أو اشتراكات.'
          : 'Oui, l’ensemble du portail, ses calculateurs et ses canaux de contact sont 100 % gratuits sans aucun frais.',
    },
    {
      question:
        validLang === 'ar'
          ? 'هل أحتاج إلى إنشاء حساب للتواصل أو استخدام الخدمات؟'
          : 'Dois-je créer un compte pour utiliser le portail ou contacter l’équipe ?',
      answer:
        validLang === 'ar'
          ? 'لا، البوابة مصممة للاستخدام المباشر دون تسجيل حساب؛ يمكنك فتح أي قطاع والانتقال مباشرة إلى الموقع الرسمي أو إرسال استفسارك عبر الاستمارة.'
          : 'Non, aucune inscription n’est requise pour consulter les fiches sectorielles ou nous envoyer un message.',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف أبلغ عن رابط معطل أو أقترح إضافة منصة جديدة؟'
          : 'Comment signaler un lien cassé ou suggérer un nouveau téléservice ?',
      answer:
        validLang === 'ar'
          ? 'استخدم استمارة Google Forms الموثقة في هذه الصفحة واختر موضوع التبليغ أو الاقتراح مع ذكر اسم الخدمة والرابط الرسمي لتتم مراجعتها خلال 24 إلى 48 ساعة.'
          : 'Utilisez le formulaire Google Forms ou la messagerie ci-dessus en précisant le nom de l’organisme et l’URL officielle afin que notre équipe la vérifie sous 24 à 48 heures.',
    },
    {
      question:
        validLang === 'ar'
          ? 'كيف تُعامل البيانات المرسلة عبر استمارة الاتصال؟'
          : 'Comment sont traitées les informations envoyées via le formulaire de contact ?',
      answer:
        validLang === 'ar'
          ? 'نستخدم البيانات التي ترسلها طوعا مثل الاسم والبريد وموضوع الرسالة للرد على استفسارك وتحسين البوابة فقط، ولا يُنصح بإرسال كلمات مرور أو معلومات شخصية حساسة.'
          : 'Les informations fournies (nom, courriel, message) servent uniquement à vous répondre et à améliorer le portail. Ne transmettez jamais de mots de passe ni de données sensibles.',
    },
  ];

  const faqSchema = generateFAQSchema(contactFaqs, validLang);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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
        items={[{ label: dict.nav.contact, href: `/${validLang}/pages/contact/` }]}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {dict.nav.contact}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {validLang === 'ar'
            ? 'تواصل مع فريق البوابة الجزائرية للخدمات الرقمية عبر البريد الإلكتروني أو منصة Google Forms الآمنة لإرسال استفسار أو اقتراح أو التبليغ عن رابط معطل.'
            : 'Contactez l’équipe du Portail Algérien des Services Numériques par courriel ou via Google Forms sécurisé pour toute question, suggestion ou signalement de lien.'}
        </p>
      </div>

      <QuickSummaryBox
        lang={validLang}
        targetAudience={
          validLang === 'ar'
            ? 'زوار البوابة، الطلبة، والمبلغون عن الروابط المحدثة أو المقترحات'
            : 'Usagers du portail, contributeurs et signalements de mises à jour'
        }
        processingTime={
          validLang === 'ar'
            ? 'متوسط الرد خلال 24 إلى 48 ساعة عمل'
            : 'Réponse habituelle sous 24 à 48 heures ouvrables'
        }
        fees={
          validLang === 'ar'
            ? 'تواصل ودعم مجاني بالكامل (استمارة متاحة 24/7)'
            : 'Assistance et signalements 100 % gratuits (formulaire 24h/24)'
        }
        channel={
          validLang === 'ar'
            ? 'نموذج Google Forms الآمن أو البريد الإلكتروني الرسمي'
            : 'Formulaire Google Forms sécurisé ou messagerie directe'
        }
        keyRequirement={
          validLang === 'ar'
            ? 'ذكر الاسم، البريد الإلكتروني، الموضوع، ورابط الخدمة المعنية دون إرسال بيانات سرية'
            : 'Nom, courriel, objet et URL concernée — sans données sensibles'
        }
        officialUrl={contactPortalLinks.contactFormUrl}
      />

      <ContactFormClient
        lang={validLang}
        contactFormUrl={contactPortalLinks.contactFormUrl}
        ratingFormUrl={contactPortalLinks.ratingFormUrl}
        email={contactPortalLinks.email}
      />

      {/* Safety Notice & Working Hours / Response SLA Table */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <h2 className="text-xl font-black text-slate-900 dark:text-slate-100">
          {validLang === 'ar'
            ? 'مواعيد التجاوب وقنوات الدعم'
            : 'Horaires de Réponse & Traitement des Demandes'}
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs sm:text-sm text-start">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'المعيار' : 'Paramètre'}</th>
                <th className="p-3 text-start font-bold">{validLang === 'ar' ? 'التفاصيل' : 'Détails'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{validLang === 'ar' ? 'أيام المتابعة والرد' : 'Jours de traitement'}</span>
                </td>
                <td className="p-3">
                  {validLang === 'ar'
                    ? 'من السبت إلى الخميس (الاستمارة الإلكترونية متاحة 24/7 والرد خلال 24-48 ساعة)'
                    : 'Du samedi au jeudi (formulaire en ligne ouvert 24h/24, réponse sous 24-48h)'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{validLang === 'ar' ? 'الموقع المرجعي' : 'Localisation de référence'}</span>
                </td>
                <td className="p-3">
                  {validLang === 'ar'
                    ? 'الجزائر العاصمة — بومرداس، الجمهورية الجزائرية الديمقراطية الشعبية'
                    : 'Alger — Boumerdès, République Algérienne Démocratique et Populaire'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{validLang === 'ar' ? 'تنبيه الأمان والخصوصية' : 'Consigne de sécurité'}</span>
                </td>
                <td className="p-3">
                  {validLang === 'ar'
                    ? 'لا ترسل أي كلمات مرور أو أرقام بنكية أو معلومات شخصية حساسة؛ تستخدم البيانات للرد وتحسين البوابة فقط.'
                    : 'Ne transmettez jamais de mots de passe ou données bancaires ; vos échanges servent uniquement à vous répondre.'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Embedded Location Map (Algiers / Boumerdès / Sidi Daoud) */}
        <div className="space-y-2 pt-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>{validLang === 'ar' ? 'الخريطة المرجعية (الجزائر - بومرداس)' : 'Carte de Référence (Alger — Boumerdès)'}</span>
          </h3>
          <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
            <iframe
              title={validLang === 'ar' ? 'خريطة الجزائر - بومرداس' : 'Carte Alger Boumerdès'}
              src="https://www.google.com/maps?q=Algiers,boumerdes,sidi+daoud&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <span>{dict.common.faqTitle}</span>
        </h2>
        <div className="space-y-3">
          {contactFaqs.map((faq, idx) => (
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
    </div>
  );
}
