import { Metadata } from 'next';
import { Language } from './types';

export const SITE_URL = (process.env.APP_URL && process.env.APP_URL.startsWith('http') && !process.env.APP_URL.includes('ais-dev-'))
  ? process.env.APP_URL.replace(/\/$/, '')
  : 'https://pipoudz.github.io';

export function getCanonicalUrl(path: string, lang: Language): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const trimmed = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
  const normalized = trimmed ? `${trimmed}/` : '';
  return `${SITE_URL}/${lang}/${normalized}`;
}

export function getAlternates(path: string) {
  return {
    canonical: getCanonicalUrl(path, 'ar'),
    languages: {
      ar: getCanonicalUrl(path, 'ar'),
      fr: getCanonicalUrl(path, 'fr'),
      'x-default': getCanonicalUrl(path, 'ar'),
    },
  };
}

export function constructMetadata({
  title,
  description,
  path = '',
  lang,
  image = '/assets/images/dz-portal-og.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  lang: Language;
  image?: string;
}): Metadata {
  const brandName = lang === 'ar' ? 'البوابة الجزائرية للخدمات الرقمية' : 'Portail Numérique Algérien';
  const alreadyBranded =
    title.includes('البوابة الجزائرية للخدمات الرقمية') ||
    title.includes('Portail Numérique Algérien') ||
    title.includes('Portail Algérien des Services Numériques') ||
    title.includes('Portail DZ');
  const fullTitle = alreadyBranded ? title : `${title} | ${brandName}`;
  const canonicalUrl = getCanonicalUrl(path, lang);
  const ogImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: getCanonicalUrl(path, 'ar'),
        fr: getCanonicalUrl(path, 'fr'),
        'x-default': getCanonicalUrl(path, 'ar'),
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: lang === 'ar' ? 'البوابة الجزائرية للخدمات الرقمية' : 'Portail des Services Numériques Algériens',
      locale: lang === 'ar' ? 'ar_DZ' : 'fr_DZ',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  };
}

export function generateWebsiteSchema(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: lang === 'ar' ? 'البوابة الجزائرية للخدمات الرقمية' : 'Portail Algérien des Services Numériques',
    alternateName: [
      'بوابة الرقمنة الجزائرية',
      'Portail DZ Services',
      'Portail des Services Numériques Algériens',
    ],
    url: `${SITE_URL}/`,
    inLanguage: ['ar', 'fr'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/${lang}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: lang === 'ar' ? 'البوابة الجزائرية للخدمات الرقمية' : 'Portail Algérien des Services Numériques',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/dz-portal-og.jpg`,
    email: 'tabaniimadeddine@gmail.com',
    description:
      lang === 'ar'
        ? 'مبادرة مدنية مستقلة تهدف إلى تبسيط المعاملات الإدارية والمالية وشرح المنصات الرقمية في الجزائر.'
        : 'Initiative citoyenne indépendante dédiée à la vulgarisation des démarches administratives et services numériques en Algérie.',
    areaServed: {
      '@type': 'Country',
      name: 'Algeria',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'tabaniimadeddine@gmail.com',
      availableLanguage: ['Arabic', 'French'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DZ',
      addressLocality: 'Alger',
    },
  };
}

export function generateCollectionPageSchema({
  name,
  description,
  path,
  numberOfItems,
  lang,
}: {
  name: string;
  description: string;
  path: string;
  numberOfItems: number;
  lang: Language;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: getCanonicalUrl(path, lang),
    inLanguage: lang,
    numberOfItems,
  };
}

export function generateGovernmentServiceSchema({
  name,
  description,
  provider,
  url,
  lang,
}: {
  name: string;
  description: string;
  provider: string;
  url: string;
  lang: Language;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    name,
    description,
    provider: {
      '@type': 'GovernmentOrganization',
      name: provider,
    },
    serviceUrl: url,
    inLanguage: lang,
    areaServed: {
      '@type': 'Country',
      name: 'Algeria',
    },
  };
}

export function generateHowToSchema({
  name,
  description,
  steps,
  lang,
}: {
  name: string;
  description: string;
  steps: { stepNumber: number; title: string; detail: string }[];
  lang: Language;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    inLanguage: lang,
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      position: s.stepNumber,
      name: s.title,
      text: s.detail,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
  lang: Language
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function generateWebApplicationSchema({
  name,
  description,
  url,
  category = 'UtilitiesApplication',
  lang,
}: {
  name: string;
  description: string;
  url: string;
  category?: string;
  lang: Language;
}) {
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}/${lang}/${url.replace(/^\//, '')}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: fullUrl,
    applicationCategory: category,
    operatingSystem: 'All',
    inLanguage: lang,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'DZD',
    },
  };
}

export function generateArticleSchema({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  lang,
}: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  lang: Language;
}) {
  const url = `${SITE_URL}/${lang}/blog/${slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished,
    dateModified,
    inLanguage: lang,
    author: {
      '@type': 'Organization',
      name: lang === 'ar' ? 'فريق التحرير - البوابة الجزائرية للخدمات الرقمية' : 'Rédaction — Portail DZ Services',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: lang === 'ar' ? 'البوابة الجزائرية للخدمات الرقمية' : 'Portail Algérien des Services Numériques',
      url: SITE_URL,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

