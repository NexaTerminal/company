import type { Metadata } from 'next';

export const SITE_URL = 'https://company.nexa.mk';

/** Named professional reviewer for E-E-A-T. Owner to confirm/replace. */
export const REVIEWER = {
  name: 'Nexa Legal Network',
  // TODO(owner): replace with a named licensed lawyer/accountant and their credentials.
  description: 'Reviewed by licensed professionals in the Nexa network',
};

/**
 * Per-page metadata. Canonical + hreflang are self-referential to the page URL
 * because the site serves EN and MK from the same URL (client-side toggle).
 */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: { en: url, mk: url, 'x-default': url },
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      locale: 'en_US',
      alternateLocale: ['mk_MK'],
      siteName: 'Company · Nexa',
      images: [{ url: `${SITE_URL}/marketing-5.jpg`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/marketing-5.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

const ORG = {
  '@type': 'Organization',
  name: 'Nexa',
  legalName: 'NEKSA AMD DOOEL',
  url: 'https://nexa.mk',
};

export function breadcrumbSchema(path: string, leafName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Nexa', item: 'https://nexa.mk' },
      { '@type': 'ListItem', position: 2, name: 'Company Registration', item: SITE_URL },
      { '@type': 'ListItem', position: 3, name: leafName, item: `${SITE_URL}${path}` },
    ],
  };
}

export function articleSchema({
  path,
  headline,
  description,
}: {
  path: string;
  headline: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    inLanguage: 'en',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
    datePublished: '2026-05-21',
    dateModified: '2026-06-19',
    author: ORG,
    publisher: { ...ORG, logo: { '@type': 'ImageObject', url: 'https://nexa.mk/nexa-logo-navbar.png' } },
    reviewedBy: { '@type': 'Organization', name: REVIEWER.name, description: REVIEWER.description },
    image: `${SITE_URL}/marketing-5.jpg`,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Renders an array of JSON-LD objects as <script> tags (server component friendly). */
export function jsonLdScripts(schemas: object[]): string[] {
  return schemas.map((s) => JSON.stringify(s));
}
