import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Company Registration North Macedonia | Fast & Easy Business Setup - Nexa',
  description: 'Expert guide to company registration in North Macedonia. Learn about DOO, AD, process, documents, AML, and UBO. Start your business today with Nexa!',
  keywords: 'company registration North Macedonia, register company North Macedonia, start business North Macedonia, Macedonia company formation, how to open a company in North Macedonia, DOO registration, business setup Skopje, AML UBO North Macedonia company',
  openGraph: {
    title: 'Company Registration North Macedonia | Fast & Easy Business Setup - Nexa',
    description: 'Expert guide to company registration in North Macedonia. Learn about DOO, AD, process, documents, AML, and UBO. Start your business today with Nexa!',
    url: 'https://company.nexa.mk',
    type: 'website',
    images: [
      {
        url: 'https://placehold.co/1200x630/E0F2F7/000000?text=Company+Nexa+Open+Graph',
        width: 1200,
        height: 630,
        alt: 'Nexa Company Registration Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Registration North Macedonia | Fast & Easy Business Setup - Nexa',
    description: 'Expert guide to company registration in North Macedonia. Learn about DOO, AD, process, documents, AML, and UBO. Start your business today with Nexa!',
    images: ['https://placehold.co/1200x675/E0F2F7/000000?text=Company+Nexa+Twitter'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://company.nexa.mk" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Nexa" />
        <meta name="geo.region" content="MK" />
        <meta name="geo.placename" content="North Macedonia" />
        <meta name="ICBM" content="41.6086, 21.7453" />
        <meta name="DC.title" content="Company Registration North Macedonia - Nexa" />
        <meta name="DC.creator" content="Nexa" />
        <meta name="DC.subject" content="Company Registration, Business Setup, North Macedonia" />
        <meta name="DC.description" content="Expert guide to company registration in North Macedonia. Learn about DOO, AD, process, documents, AML, and UBO." />
        <meta name="DC.publisher" content="Nexa" />
        <meta name="DC.contributor" content="Nexa" />
        <meta name="DC.date" content="2025-01-08" />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://company.nexa.mk" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="North Macedonia" />
        <meta name="DC.rights" content="Copyright 2025 Nexa. All rights reserved." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Nexa Company Registration Services",
              "description": "Expert guide to company registration in North Macedonia. Learn about DOO, AD, process, documents, AML, and UBO.",
              "url": "https://company.nexa.mk",
              "telephone": "+389-xx-xxx-xxx",
              "email": "info@nexa.mk",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MK",
                "addressLocality": "Skopje"
              },
              "areaServed": {
                "@type": "Country",
                "name": "North Macedonia"
              },
              "serviceType": "Company Registration",
              "offers": {
                "@type": "Offer",
                "name": "Company Registration in North Macedonia",
                "description": "Complete company registration services including DOO, AD, and other legal entities"
              }
            })
          }}
        />
        <meta name="google-site-verification" content="SH8MCq9C65aQVXL7qhi9CzkUJp9k7wOJ2sUkzXFRYiw" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}