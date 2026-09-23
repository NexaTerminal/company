import type { MetadataRoute } from 'next';
import { canonicalUrl, LOCALE_LIST } from '@/lib/i18n';
import { getAllCategorySlugs } from '@/lib/categories';
import { getAllArticles, getAllArticleSlugs } from '@/lib/blogData';

// Portal routes exist in every locale (EN at "/", MK at "/mk").
// hreflang alternates are emitted per-page via the Metadata API (alternates.languages).
// Legacy single-guide pages are EN-only and self-canonical.

// High-value commercial articles (P1 keywords) crawled/indexed first.
const PRIORITY_SLUGS = new Set([
  'register-company-north-macedonia',
  'company-legal-forms-north-macedonia',
  'how-to-register-company-north-macedonia',
  'register-company-as-foreigner',
  'company-taxes-north-macedonia',
  'vat-north-macedonia',
  'change-company-manager-north-macedonia',
  'transfer-sale-company-share-north-macedonia',
  'company-liquidation-north-macedonia',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Article lastmod lookup (slugs are shared across locales).
  const lastModBySlug = new Map<string, string>();
  for (const a of getAllArticles('en')) {
    lastModBySlug.set(a.slug, a.updatedDate ?? a.publishedDate);
  }

  const localisedPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/search', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
    ...getAllCategorySlugs().map((slug) => ({
      path: `/category/${slug}`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    })),
    ...getAllArticleSlugs().map((slug) => ({
      path: `/blog/${slug}`,
      priority: PRIORITY_SLUGS.has(slug) ? 0.9 : 0.7,
      changeFrequency: 'monthly' as const,
    })),
  ];

  for (const { path, priority, changeFrequency } of localisedPaths) {
    for (const locale of LOCALE_LIST) {
      const slug = path.startsWith('/blog/') ? path.replace('/blog/', '') : undefined;
      entries.push({
        url: canonicalUrl(locale, path),
        lastModified: slug ? new Date(lastModBySlug.get(slug) ?? now) : now,
        changeFrequency,
        priority,
      });
    }
  }

  // Legacy EN-only static/guide pages.
  for (const path of ['/about', '/privacy', '/terms']) {
    entries.push({
      url: canonicalUrl('en', path),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    });
  }

  return entries;
}
