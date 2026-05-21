import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const SITE_URL = 'https://company.nexa.mk';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Регистрација на фирма во Македонија (2026) · Nexa',
  description:
    'Чекор-по-чекор водич за регистрација на фирма во Македонија: видови друштва, трошоци, основачки влог, документи, даноци и отворање фирма за странци.',
  keywords:
    'регистрација на фирма, регистрација на фирма во Македонија, отворање фирма, ДОО, ДООЕЛ, ПДОО, АД, Централен регистар, фирма за 1 евро, company registration Macedonia, DOO registration, open company North Macedonia',
  alternates: {
    canonical: SITE_URL,
    languages: {
      mk: SITE_URL,
      en: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: 'Регистрација на фирма во Македонија (2026) · Nexa',
    description:
      'Чекор-по-чекор водич за регистрација на фирма во Македонија: видови друштва, трошоци, основачки влог, документи, даноци и отворање фирма за странци.',
    url: SITE_URL,
    type: 'website',
    locale: 'mk_MK',
    alternateLocale: ['en_US'],
    siteName: 'Company.Nexa.mk — Part of the Nexa ecosystem',
    images: [
      {
        url: '/marketing-5.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexa — Регистрација на компанија во Северна Македонија',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Регистрација на фирма во Македонија (2026) · Nexa',
    description:
      'Чекор-по-чекор водич за регистрација на фирма во Македонија. ДОО, ДООЕЛ, ПДОО, АД. Дел од Nexa екосистемот.',
    images: ['/marketing-5.jpg'],
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
    'ICBM': '41.9981, 21.4254',
  },
};

// Organization schema (with legal entity per Part E.0)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexa',
  legalName: 'Company for Services NEKSA AMD DOOEL Skopje',
  url: 'https://nexa.mk',
  logo: 'https://nexa.mk/assets/nexa-logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bulevar Partizanski Odredi 102/2-14',
    addressLocality: 'Skopje – Karposh',
    addressRegion: 'Karposh',
    addressCountry: 'MK',
  },
  telephone: '+389-78-534-258',
  email: 'info@nexa.mk',
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
  name: 'Company.Nexa.mk',
  url: SITE_URL,
  inLanguage: ['mk', 'en'],
  publisher: { '@type': 'Organization', name: 'Nexa', url: 'https://nexa.mk' },
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
    legalName: 'Company for Services NEKSA AMD DOOEL Skopje',
    url: 'https://nexa.mk',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bulevar Partizanski Odredi 102/2-14',
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
    <html lang="mk">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="mk" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="SH8MCq9C65aQVXL7qhi9CzkUJp9k7wOJ2sUkzXFRYiw" />

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
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
