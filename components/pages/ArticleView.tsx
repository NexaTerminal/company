import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, ChevronRight } from 'lucide-react';
import PortalHeader from '@/components/PortalHeader';
import PortalFooter from '@/components/PortalFooter';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import {
  getArticleBySlug,
  getRelatedArticles,
  getArticleCategory,
  formatDate,
} from '@/lib/blogData';
import { getDictionary } from '@/lib/dictionary';
import { canonicalUrl, localizedHref, SITE_URL, type Locale } from '@/lib/i18n';

export default function ArticleView({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDictionary(locale);
  const article = getArticleBySlug(slug, locale);
  if (!article) notFound();

  const category = getArticleCategory(article, locale);
  const related = getRelatedArticles(article.relatedArticles ?? [], locale);
  const url = canonicalUrl(locale, `/blog/${article.slug}`);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seo.metaDescription,
    image: article.image ? [article.image.startsWith('http') ? article.image : SITE_URL + article.image] : undefined,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    inLanguage: locale,
    author: { '@type': 'Organization', name: article.author || 'Nexa' },
    publisher: {
      '@type': 'Organization',
      name: 'Nexa',
      logo: { '@type': 'ImageObject', url: 'https://nexa.mk/nexa-logo-navbar.png' },
    },
    mainEntityOfPage: url,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.common.backToHome, item: canonicalUrl(locale, '/') },
      category && { '@type': 'ListItem', position: 2, name: category.name, item: canonicalUrl(locale, `/category/${category.slug}`) },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ].filter(Boolean),
  };

  const faqSchema =
    article.faq && article.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faq.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <PortalHeader locale={locale} />

      <main id="main" className="flex-1">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href={localizedHref(locale, '/')} className="hover:text-[#1E4DB7]">
              {t.common.backToHome}
            </Link>
            {category && (
              <>
                <span className="mx-2">/</span>
                <Link href={localizedHref(locale, `/category/${category.slug}`)} className="hover:text-[#1E4DB7]">
                  {category.name}
                </Link>
              </>
            )}
          </nav>

          {category && (
            <Link
              href={localizedHref(locale, `/category/${category.slug}`)}
              className="text-xs font-bold text-[#1E4DB7] uppercase tracking-wider hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mt-3 mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 mb-8">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(article.updatedDate ?? article.publishedDate, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readingTime}
            </span>
            {article.author && <span>{article.author}</span>}
          </div>

          {article.image && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-lg ring-1 ring-black/5">
              <Image src={article.image} alt={article.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
          )}

          {/* Body */}
          <div
            className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#1E4DB7] prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content.introduction }}
          />
          {article.content.sections.map((s, i) => {
            const Heading = (s.level === 3 ? 'h3' : 'h2') as 'h2' | 'h3';
            return (
              <section key={i} className="mt-8">
                <Heading className="text-2xl font-bold text-gray-900 tracking-tight mb-3">{s.heading}</Heading>
                {s.paragraphs.map((p, j) => (
                  <div
                    key={j}
                    className="prose prose-slate max-w-none prose-a:text-[#1E4DB7] prose-p:leading-relaxed mb-3"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </section>
            );
          })}
          {article.content.conclusion && (
            <div
              className="prose prose-slate max-w-none prose-a:text-[#1E4DB7] mt-8"
              dangerouslySetInnerHTML={{ __html: article.content.conclusion }}
            />
          )}

          {/* FAQ */}
          {article.faq && article.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-5">
                {locale === 'mk' ? 'Често поставувани прашања' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-3">
                {article.faq.map((f, i) => (
                  <details key={i} className="group rounded-xl border border-gray-200 bg-slate-50 p-5">
                    <summary className="cursor-pointer font-semibold text-gray-900 list-none flex items-center justify-between">
                      {f.question}
                      <ChevronRight className="h-4 w-4 text-gray-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div
                      className="prose prose-slate max-w-none mt-3 text-gray-700 prose-a:text-[#1E4DB7]"
                      dangerouslySetInnerHTML={{ __html: f.answer }}
                    />
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Lead CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#1E4DB7] to-[#163d92] text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              {locale === 'mk' ? 'Потребна ви е помош со ова?' : 'Need help with this?'}
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              {locale === 'mk'
                ? 'Поврзете се со верифициран експерт од мрежата на Nexa — анонимно и без обврска.'
                : 'Connect with a verified expert from the Nexa network — anonymously and with no obligation.'}
            </p>
            <Button asChild size="lg" className="bg-white text-[#1E4DB7] hover:bg-blue-50">
              <Link href={localizedHref(locale, `/contact?topic=${category?.slug ?? ''}`)}>{t.nav.cta}</Link>
            </Button>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-14 bg-gradient-to-br from-slate-50 to-blue-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">{t.common.relatedArticles}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((a) => (
                  <ArticleCard key={a.id} article={a} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <PortalFooter locale={locale} />
    </div>
  );
}
