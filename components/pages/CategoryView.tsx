import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import PortalHeader from '@/components/PortalHeader';
import PortalFooter from '@/components/PortalFooter';
import ArticleCard from '@/components/ArticleCard';
import { getCategoryBySlug } from '@/lib/categories';
import { getArticlesByCategory } from '@/lib/blogData';
import { getDictionary } from '@/lib/dictionary';
import { localizedHref, canonicalUrl, type Locale } from '@/lib/i18n';

const GRADIENTS: Record<string, string> = {
  registration: 'from-[#1E4DB7] to-[#2BB3C0]',
  'company-changes': 'from-[#2BB3C0] to-[#1E4DB7]',
  tax: 'from-[#163d92] to-[#2BB3C0]',
  compliance: 'from-[#1E4DB7] to-[#0f766e]',
  'data-protection': 'from-[#312e81] to-[#1E4DB7]',
  other: 'from-[#334155] to-[#1E4DB7]',
};

export default function CategoryView({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDictionary(locale);
  const category = getCategoryBySlug(slug, locale);
  if (!category) notFound();

  const articles = getArticlesByCategory(slug, locale);
  const categoryUrl = canonicalUrl(locale, `/category/${category.slug}`);
  const gradient = GRADIENTS[category.slug] || 'from-[#1E4DB7] to-[#2BB3C0]';

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: categoryUrl,
    inLanguage: locale,
    isPartOf: { '@type': 'WebSite', name: 'Company · Nexa', url: canonicalUrl(locale, '/') },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: canonicalUrl(locale, `/blog/${a.slug}`),
        name: a.title,
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.common.backToHome, item: canonicalUrl(locale, '/') },
      { '@type': 'ListItem', position: 2, name: category.name, item: categoryUrl },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PortalHeader locale={locale} />

      <main id="main" className="flex-1">
        {/* HERO */}
        <section className="relative h-[320px] sm:h-[380px] overflow-hidden">
          {category.image ? (
            <Image src={category.image} alt={category.name} fill sizes="100vw" priority className="object-cover" />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/45 to-gray-900/25" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
            <nav className="text-sm text-white/70 mb-3" aria-label="Breadcrumb">
              <Link href={localizedHref(locale, '/')} className="hover:text-white">{t.common.backToHome}</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">{category.name}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{category.name}</h1>
            <p className="mt-3 text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed">{category.description}</p>
            <p className="mt-3 text-sm text-white/70">
              {articles.length > 0
                ? `${articles.length} ${articles.length === 1 ? (locale === 'mk' ? 'статија' : 'article') : locale === 'mk' ? 'статии' : 'articles'}`
                : ''}
            </p>
          </div>
        </section>

        {/* ARTICLES */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-8">{t.common.articlesInCategory}</h2>
            {articles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((a) => (
                  <ArticleCard key={a.id} article={a} locale={locale} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl">
                <p className="text-gray-500 mb-4">{t.common.noResults}</p>
                <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] font-medium">
                  {t.nav.cta}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <PortalFooter locale={locale} />
    </div>
  );
}
