import type { Metadata, Viewport } from 'next';
import { Cairo, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-cairo',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'البوابة الجزائرية للخدمات الرقمية | Portail des Services Numériques Algériens',
  description: 'دليل شامل وموحد للخدمات الرقمية، القطاعات الحكومية، البنوك، التأمينات، الإجراءات الإدارية، ومواعيد قطارات الجزائر SNTF.',
  metadataBase: new URL(
    (process.env.APP_URL && !process.env.APP_URL.includes('ais-dev-'))
      ? process.env.APP_URL
      : 'https://pipoudz.github.io'
  ),
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
    canonical: '/ar/',
    languages: {
      ar: '/ar/',
      fr: '/fr/',
      'x-default': '/ar/',
    },
  },
  openGraph: {
    title: 'البوابة الجزائرية للخدمات الرقمية | Portail Numérique Algérien',
    description: 'دليل شامل وموحد للخدمات الرقمية، القطاعات الحكومية، البنوك، التأمينات، والإجراءات الإدارية في الجزائر.',
    type: 'website',
    images: [
      {
        url: '/assets/images/dz-portal-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Portail Algérien des Services Numériques',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'البوابة الجزائرية للخدمات الرقمية | Portail Numérique Algérien',
    description: 'دليل شامل وموحد للخدمات الرقمية، القطاعات الحكومية، البنوك، والتأمينات في الجزائر.',
    images: ['/assets/images/dz-portal-og.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${cairo.variable} ${plusJakarta.variable}`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white transition-colors font-sans"
        style={{ fontFamily: 'var(--font-cairo), var(--font-jakarta), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
