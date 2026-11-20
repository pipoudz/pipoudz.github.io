import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const disallowed = ['/assets/aistudio/', '/api/', '/*?*'];

  return {
    rules: [
      // 1. Main Search Engines (Google, Bing, Yahoo, DuckDuckGo, Yandex)
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: disallowed,
      },
      // 2. Monetization & Ad Network Crawlers (Google AdSense)
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        userAgent: 'Mediapartners-Google*',
        allow: '/',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
      {
        userAgent: 'Google-Display-Ads-Bot',
        allow: '/',
      },
      // 3. AI Search Engines & Generative Engine Optimization (GEO)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: disallowed,
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: disallowed,
      },
      // 4. Block SEO Spy Tools & Aggressive Scrapers
      ...[
        'AhrefsBot',
        'SemrushBot',
        'SemrushBot-SA',
        'MJ12bot',
        'DotBot',
        'MegaIndex.ru',
        'megaindex.com',
        'BLEXBot',
        'PetalBot',
        'Bytespider',
        'SEOkicks',
        'sistrix',
        'SISTRIX Crawler',
        'Screaming Frog SEO Spider',
      ].map((bot) => ({
        userAgent: bot,
        disallow: '/',
      })),
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-main.xml`,
      `${SITE_URL}/sitemap-sectors.xml`,
      `${SITE_URL}/sitemap-finance.xml`,
      `${SITE_URL}/sitemap-procedures.xml`,
      `${SITE_URL}/sitemap-tools.xml`,
    ],
  };
}
