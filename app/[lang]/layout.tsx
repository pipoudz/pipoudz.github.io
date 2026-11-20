import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LanguageSync from '@/components/LanguageSync';
import { Language } from '@/lib/types';
import { generateWebsiteSchema, generateOrganizationSchema } from '@/lib/seo';

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'fr' }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === 'fr' ? 'fr' : 'ar';

  const websiteSchema = generateWebsiteSchema(validLang);
  const organizationSchema = generateOrganizationSchema(validLang);

  return (
    <div lang={validLang} dir={validLang === 'ar' ? 'rtl' : 'ltr'} className="flex flex-col min-h-screen">
      <LanguageSync lang={validLang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header lang={validLang} />
      <main className="flex-1 w-full">{children}</main>
      <Footer lang={validLang} />
    </div>
  );
}
