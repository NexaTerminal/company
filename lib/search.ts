import type { BlogArticle } from '@/lib/blogData';

export interface SearchItem {
  slug: string;
  title: string;
  excerpt: string;
  categoryName: string;
  readingTime: string;
  haystack: string;
}

export function toSearchItems(
  articles: BlogArticle[],
  categoryNameById: (id: string) => string
): SearchItem[] {
  return articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    categoryName: categoryNameById(a.category_id),
    readingTime: a.readingTime,
    haystack: `${a.title} ${a.excerpt} ${(a.seo?.keywords ?? []).join(' ')}`.toLowerCase(),
  }));
}
