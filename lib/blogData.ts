import { getCategoryBySlug, getCategoryById } from '@/lib/categories';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n';

// EN is the default locale and lives in content/*.json.
// MK translations live in content/mk/*.json (same filenames + schema).

// English (default)
import registrationData from '@/content/registration.json';
import companyChangesData from '@/content/company-changes.json';
import taxData from '@/content/tax.json';
import complianceData from '@/content/compliance.json';
import dataProtectionData from '@/content/data-protection.json';
import otherData from '@/content/other.json';

// Macedonian
import registrationMk from '@/content/mk/registration.json';
import companyChangesMk from '@/content/mk/company-changes.json';
import taxMk from '@/content/mk/tax.json';
import complianceMk from '@/content/mk/compliance.json';
import dataProtectionMk from '@/content/mk/data-protection.json';
import otherMk from '@/content/mk/other.json';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  level?: 2 | 3;
}

export interface BlogContent {
  introduction: string;
  sections: ContentSection[];
  conclusion?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category_id: string;
  author: string;
  publishedDate: string;
  /** Optional last-updated date (ISO). Used for dateModified + a visible "updated" label. */
  updatedDate?: string;
  readingTime: string;
  image: string;
  content: BlogContent;
  seo: {
    metaTitle?: string;
    metaDescription: string;
    keywords: string[];
  };
  relatedArticles?: string[];
  faq?: FAQItem[];
}

const POOLS: Record<Locale, BlogArticle[]> = {
  en: [
    ...(registrationData as unknown as BlogArticle[]),
    ...(companyChangesData as unknown as BlogArticle[]),
    ...(taxData as unknown as BlogArticle[]),
    ...(complianceData as unknown as BlogArticle[]),
    ...(dataProtectionData as unknown as BlogArticle[]),
    ...(otherData as unknown as BlogArticle[]),
  ],
  mk: [
    ...(registrationMk as unknown as BlogArticle[]),
    ...(companyChangesMk as unknown as BlogArticle[]),
    ...(taxMk as unknown as BlogArticle[]),
    ...(complianceMk as unknown as BlogArticle[]),
    ...(dataProtectionMk as unknown as BlogArticle[]),
    ...(otherMk as unknown as BlogArticle[]),
  ],
};

function pool(locale: Locale): BlogArticle[] {
  return POOLS[locale] ?? POOLS[DEFAULT_LOCALE];
}

/** All articles for a locale, newest first. */
export function getAllArticles(locale: Locale = DEFAULT_LOCALE): BlogArticle[] {
  return [...pool(locale)].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export function getArticleBySlug(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): BlogArticle | undefined {
  return pool(locale).find((a) => a.slug === slug);
}

export function getArticlesByCategory(
  categorySlug: string,
  locale: Locale = DEFAULT_LOCALE
): BlogArticle[] {
  const category = getCategoryBySlug(categorySlug, locale);
  if (!category) return [];
  return getAllArticles(locale).filter((a) => a.category_id === category.id);
}

export function getRelatedArticles(
  slugs: string[] = [],
  locale: Locale = DEFAULT_LOCALE
): BlogArticle[] {
  return pool(locale).filter((a) => slugs.includes(a.slug));
}

/** Slugs are shared across locales (Latin, SEO-safe). Used for static params. */
export function getAllArticleSlugs(): string[] {
  return POOLS.en.map((a) => a.slug);
}

/** Resolve the (localised) category for an article. */
export function getArticleCategory(article: BlogArticle, locale: Locale = DEFAULT_LOCALE) {
  return getCategoryById(article.category_id, locale);
}

/** Locale-aware date formatting. */
export function formatDate(isoDate: string, locale: Locale = DEFAULT_LOCALE): string {
  const date = new Date(isoDate);
  if (locale === 'mk') {
    const months = [
      'јануари', 'февруари', 'март', 'април', 'мај', 'јуни',
      'јули', 'август', 'септември', 'октомври', 'ноември', 'декември',
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
