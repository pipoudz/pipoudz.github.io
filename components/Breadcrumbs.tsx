'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { Language } from '@/lib/types';
import { getDictionary } from '@/lib/dictionary';
import { SITE_URL } from '@/lib/seo';

interface BreadcrumbsProps {
  lang: Language;
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({ lang, items }: BreadcrumbsProps) {
  const dict = getDictionary(lang);
  const Separator = lang === 'ar' ? ChevronLeft : ChevronRight;

  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dict.common.homeBreadcrumb,
        item: `${SITE_URL}/${lang}/`,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `${SITE_URL}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <nav aria-label="Breadcrumb" className="my-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <li className="flex items-center">
            <Link
              href={`/${lang}/`}
              className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{dict.common.homeBreadcrumb}</span>
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1.5 min-w-0">
                <Separator className="w-3 h-3 text-slate-400 shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-slate-900 dark:text-slate-100 break-words">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
