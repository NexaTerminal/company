import type { Metadata } from 'next';
import ArticleView from '@/components/pages/ArticleView';
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/blogData';
import { buildMetadata } from '@/lib/seo';

const locale = 'mk' as const;

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticleBySlug(params.slug, locale);
  if (!a) return {};
  return buildMetadata({
    locale,
    basePath: `/blog/${a.slug}`,
    title: a.seo.metaTitle ?? `${a.title} — Компанија · Nexa`,
    description: a.seo.metaDescription,
    keywords: a.seo.keywords,
    image: a.image,
    type: 'article',
    publishedTime: a.publishedDate,
    modifiedTime: a.updatedDate ?? a.publishedDate,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticleView locale={locale} slug={params.slug} />;
}
