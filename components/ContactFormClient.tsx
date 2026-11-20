'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, ExternalLink, MessageSquare, Star } from 'lucide-react';
import { Language } from '@/lib/types';

interface ContactFormClientProps {
  lang: Language;
  contactFormUrl: string;
  ratingFormUrl: string;
  email: string;
}

export default function ContactFormClient({
  lang,
  contactFormUrl,
  ratingFormUrl,
  email,
}: ContactFormClientProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Direct Official Channels */}
      <div className="space-y-4">
        <a
          href={`mailto:${email}`}
          className="block p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors space-y-1"
        >
          <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'ar' ? 'البريد الإلكتروني الرسمي' : 'Courriel Officiel'}</span>
          </span>
          <p className="text-sm font-bold text-slate-900 dark:text-slate-100 break-all" dir="ltr">
            {email}
          </p>
        </a>

        <a
          href={contactFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800 hover:border-emerald-500 transition-colors space-y-2"
        >
          <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'نموذج الاتصال السريع (Google Forms)' : 'Formulaire Direct (Google Forms)'}</span>
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'أرسل استفسارك أو طلب إضافة رابط منصة رسمية مباشرة عبر الاستمارة الإلكترونية.'
              : 'Transmettez votre demande ou suggérez une nouvelle plateforme via le formulaire en ligne.'}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span>{lang === 'ar' ? 'فتح الاستمارة' : 'Ouvrir le formulaire'}</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </a>

        <a
          href={ratingFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors space-y-2"
        >
          <span className="text-xs text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'تقييم جودة البوابة' : 'Évaluation du Portail'}</span>
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'شاركنا تقييمك وملاحظاتك لتحسين التجربة والمحتوى.'
              : 'Partagez votre note et vos retours d’expérience.'}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span>{lang === 'ar' ? 'تقييم الآن' : 'Donner mon avis'}</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      </div>

      {/* Interactive Local Message Form */}
      <div className="md:col-span-2 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {lang === 'ar' ? 'شكرا لتواصلك معنا!' : 'Message préparé avec succès !'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'تم تسجيل رسالتك بنجاح. ولضمان أسرع استجابة رسمية يمكنك أيضا فتح البريد المباشر أو استمارة Google Forms أدناه.'
                : 'Votre message a bien été enregistré. Pour une prise en charge immédiate, vous pouvez également l’envoyer via votre messagerie ou le formulaire officiel.'}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`${formData.name} (${formData.email}):\n\n${formData.message}`)}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'إرسال عبر البريد الإلكتروني' : 'Envoyer par Email'}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
              >
                {lang === 'ar' ? 'رسالة جديدة' : 'Nouveau message'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  {lang === 'ar' ? 'الاسم واللقب:' : 'Nom complet :'}
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-hidden focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  {lang === 'ar' ? 'البريد الإلكتروني:' : 'Adresse Email :'}
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-hidden focus:border-emerald-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                {lang === 'ar' ? 'الموضوع:' : 'Objet :'}
              </label>
              <input
                required
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-hidden focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                {lang === 'ar' ? 'الرسالة:' : 'Message :'}
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-hidden focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'ar' ? 'إرسال الرسالة' : 'Envoyer le Message'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
