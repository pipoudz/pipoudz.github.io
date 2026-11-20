'use client';

import { useEffect } from 'react';
import { Language } from '@/lib/types';

interface LanguageSyncProps {
  lang: Language;
}

export default function LanguageSync({ lang }: LanguageSyncProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang = '${lang}'; document.documentElement.dir = '${lang === 'ar' ? 'rtl' : 'ltr'}';`,
      }}
    />
  );
}
