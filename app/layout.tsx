import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const SITE_URL = 'https://company.nexa.mk';

const TITLE_EN = 'Company Registration in North Macedonia (2026) · Nexa';
const DESC_EN =
  'Step-by-step guide to registering a company in North Macedonia: DOO, DOOEL, PDOO, AD, sole proprietor and branch — capital, fees, taxes, and incorporation for foreigners.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE_EN,
  description: DESC_EN,
  keywords:
    'company registration Macedonia, DOO registration, open company North Macedonia, регистрација на фирма, регистрација на фирма во Македонија, ДОО, ДООЕЛ, ПДОО, АД, Централен регистар',
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      mk: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: TITLE_EN,
    description: DESC_EN,
    url: SITE_URL,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['mk_MK'],
    siteName: 'Company · Nexa',
    images: [
      {
        url: `${SITE_URL}/marketing-5.jpg`,
        width: 1200,
        height: 630,
        alt: 'Nexa — Company Registration in North Macedonia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_EN,
    description: DESC_EN,
    images: [`${SITE_URL}/marketing-5.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  authors: [{ name: 'Nexa', url: 'https://nexa.mk' }],
  publisher: 'Nexa',
  other: {
    'geo.region': 'MK',
    'geo.placename': 'Skopje, North Macedonia',
    'geo.position': '41.9981;21.4254',
    'ICBM': '41.9981, 21.4254',
  },
};

// Organization (ecosystem-wide standard block)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexa',
  legalName: 'NEKSA AMD DOOEL',
  url: 'https://nexa.mk',
  logo: 'https://nexa.mk/nexa-logo-navbar.png',
  email: 'info@nexa.mk',
  telephone: '+389-78-534-258',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bul. Partizanski Odredi 102/2-14',
    addressLocality: 'Skopje',
    addressCountry: 'MK',
  },
  sameAs: [
    'https://samodaprasham.mk',
    'https://immigration.mk',
    'https://macedoniancitizenship.mk',
    'https://company.nexa.mk',
    'https://iplaw.nexa.mk',
    'https://topics.nexa.mk',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Company · Nexa',
  url: SITE_URL,
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'Nexa', legalName: 'NEKSA AMD DOOEL' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Nexa — Company Registration Services',
  description:
    'Guidance and lead routing for company registration (DOO, AD, sole proprietor, branch) in North Macedonia.',
  url: SITE_URL,
  image: `${SITE_URL}/marketing-5.jpg`,
  areaServed: { '@type': 'Country', name: 'North Macedonia' },
  provider: {
    '@type': 'Organization',
    name: 'Nexa',
    legalName: 'NEKSA AMD DOOEL',
    url: 'https://nexa.mk',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bul. Partizanski Odredi 102/2-14',
    addressLocality: 'Skopje',
    addressCountry: 'MK',
  },
  telephone: '+389-78-534-258',
  email: 'info@nexa.mk',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Canonical + hreflang are emitted per-page via the Metadata API (see metadata.alternates). */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="SH8MCq9C65aQVXL7qhi9CzkUJp9k7wOJ2sUkzXFRYiw" />
        <link rel="alternate" type="application/rss+xml" title="Company · Nexa — Latest articles" href={`${SITE_URL}/feed.xml`} />

        {/* GA4 with Consent Mode v2 — denied by default (GDPR) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              gtag('js', new Date());
              gtag('config', 'G-M42H6W2LGX', { 'anonymize_ip': true });
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M42H6W2LGX"></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-[#1E4DB7] focus:px-3 focus:py-2 focus:rounded focus:shadow focus:outline-2 focus:outline-[#1E4DB7]"
        >
          Skip to content
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
