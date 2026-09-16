import type { Metadata } from 'next';
import CategoryView from '@/components/pages/CategoryView';
import { getAllCategorySlugs, getCategoryBySlug } from '@/lib/categories';
import { buildMetadata } from '@/lib/seo';

const locale = 'mk' as const;

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCategoryBySlug(params.slug, locale);
  if (!c) return {};
  return buildMetadata({
    locale,
    basePath: `/category/${c.slug}`,
    title: `${c.name} — Компанија · Nexa`,
    description: c.description,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  return <CategoryView locale={locale} slug={params.slug} />;
}
