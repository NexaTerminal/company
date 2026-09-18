import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, ChevronRight } from 'lucide-react';
import PortalHeader from '@/components/PortalHeader';
import PortalFooter from '@/components/PortalFooter';
import ArticleCard from '@/components/ArticleCard';
import AuthorBio from '@/components/AuthorBio';
import BlogContactForm from '@/components/BlogContactForm';
import { SidebarContactCta, InContentCta, FloatingContactCta } from '@/components/ArticleCtas';
import {
  getArticleBySlug,
  getRelatedArticles,
  getArticleCategory,
  formatDate,
} from '@/lib/blogData';
import { getDictionary } from '@/lib/dictionary';
import { canonicalUrl, localizedHref, SITE_URL, type Locale } from '@/lib/i18n';

const AUTHOR = {
  name: 'Martin Boshkoski',
  image: `${SITE_URL}/martin-boshkoski.jpg`,
  jobTitle: 'Former lawyer (LL.M.)',
  sameAs: ['https://www.linkedin.com/in/martin-boskoski'],
};

export default function ArticleView({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDictionary(locale);
  const article = getArticleBySlug(slug, locale);
  if (!article) notFound();

  const category = getArticleCategory(article, locale);
  const related = getRelatedArticles(article.relatedArticles ?? [], locale);
  const url = canonicalUrl(locale, `/blog/${article.slug}`);
  const heroSrc = article.image || '/marketing-5.jpg';
  const imageAbs = article.image
    ? (article.image.startsWith('http') ? article.image : SITE_URL + article.image)
    : `${SITE_URL}/marketing-5.jpg`;

  // Mid-article CTA position (only for longer articles).
  const ctaIndex = article.content.sections.length >= 3
    ? Math.floor(article.content.sections.length * 0.66)
    : -1;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seo.metaDescription,
    image: { '@type': 'ImageObject', url: imageAbs, width: 1200, height: 630 },
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    inLanguage: locale,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      url: canonicalUrl(locale, '/about'),
      image: AUTHOR.image,
      jobTitle: AUTHOR.jobTitle,
      knowsAbout: ['corporate law', 'company registration', 'tax', 'compliance', 'data protection'],
      sameAs: AUTHOR.sameAs,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexa',
      logo: { '@type': 'ImageObject', url: 'https://nexa.mk/nexa-logo-navbar.png' },
    },
    mainEntityOfPage: url,
    keywords: article.seo.keywords.join(', '),
    articleSection: category?.name,
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

  const faqSchema = article.faq && article.faq.length > 0
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
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <PortalHeader locale={locale} />

      <main id="main" className="flex-1">
        {/* HERO */}
        <section className="relative h-[420px] sm:h-[500px] overflow-hidden">
          <Image src={heroSrc} alt={article.title} fill sizes="100vw" priority quality={85} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/55 to-gray-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/70 mb-3" aria-label="Breadcrumb">
              <Link href={localizedHref(locale, '/')} className="hover:text-white">{t.common.backToHome}</Link>
              {category && (
                <>
                  <span className="mx-2">/</span>
                  <Link href={localizedHref(locale, `/category/${category.slug}`)} className="hover:text-white">{category.name}</Link>
                </>
              )}
            </nav>
            {category && (
              <Link href={localizedHref(locale, `/category/${category.slug}`)}
                className="inline-flex w-fit items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25 mb-4 hover:bg-white/25">
                {category.name}
              </Link>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">{article.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
              <span className="flex items-center gap-1.5"><span className="font-medium">{AUTHOR.name}</span></span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={article.publishedDate}>{formatDate(article.publishedDate, locale)}</time>
              </span>
              {article.updatedDate && (
                <span className="flex items-center gap-1.5">
                  {t.common.updated}: <time dateTime={article.updatedDate}>{formatDate(article.updatedDate, locale)}</time>
                </span>
              )}
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readingTime}</span>
            </div>
          </div>
        </section>

        {/* CONTENT + SIDEBAR */}
        <section className="py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Main column */}
              <div className="lg:col-span-8 min-w-0">
                <article className="max-w-3xl">
                  {article.content.introduction && (
                    <div className="text-lg leading-relaxed text-gray-800 mb-8 [&_a]:text-[#1E4DB7] [&_a:hover]:underline"
                      dangerouslySetInnerHTML={{ __html: article.content.introduction }} />
                  )}

                  {article.content.sections.map((s, i) => {
                    const Heading = (s.level === 3 ? 'h3' : 'h2') as 'h2' | 'h3';
                    const headingClass = s.level === 3
                      ? 'text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-3 mt-8'
                      : 'text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4 mt-12';
                    return (
                      <Fragment key={i}>
                        <section className="mb-6">
                          <Heading className={headingClass}>{s.heading}</Heading>
                          <div className="space-y-4">
                            {s.paragraphs.map((p, j) => (
                              <div key={j}
                                className="text-base sm:text-lg leading-relaxed text-gray-700 [&_a]:text-[#1E4DB7] [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-semibold [&_th]:p-2 [&_th]:border-b [&_td]:p-2 [&_td]:border-b [&_td]:border-gray-100 [&_thead]:bg-slate-50"
                                dangerouslySetInnerHTML={{ __html: p }} />
                            ))}
                          </div>
                        </section>
                        {i === ctaIndex && <InContentCta locale={locale} />}
                      </Fragment>
                    );
                  })}

                  {article.content.conclusion && (
                    <div className="mt-10 pt-8 border-t border-gray-200 text-base sm:text-lg leading-relaxed text-gray-700 [&_a]:text-[#1E4DB7]"
                      dangerouslySetInnerHTML={{ __html: article.content.conclusion }} />
                  )}
                </article>

                {/* Visible FAQ */}
                {article.faq && article.faq.length > 0 && (
                  <section className="mt-12 max-w-3xl">
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
                          <div className="mt-3 text-gray-700 leading-relaxed [&_a]:text-[#1E4DB7]" dangerouslySetInnerHTML={{ __html: f.answer }} />
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {/* Inline contact form */}
                <div id="contact-form-section" className="scroll-mt-24 mt-10 max-w-3xl">
                  <BlogContactForm
                    locale={locale}
                    topicSlug={category?.slug ?? ''}
                    articleTitle={article.title}
                    placeholder={article.faq?.[0]?.question}
                  />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 lg:self-start">
                <SidebarContactCta locale={locale} />
                <AuthorBio locale={locale} />
              </aside>
            </div>
          </div>
        </section>

        <FloatingContactCta locale={locale} />

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
