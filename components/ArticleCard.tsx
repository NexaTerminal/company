import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate, type BlogArticle } from '@/lib/blogData';
import { getCategoryById } from '@/lib/categories';
import { getDictionary } from '@/lib/dictionary';
import { localizedHref, type Locale } from '@/lib/i18n';

export default function ArticleCard({
  article,
  locale,
}: {
  article: BlogArticle;
  locale: Locale;
}) {
  const t = getDictionary(locale);
  const category = getCategoryById(article.category_id, locale);

  return (
    <Card className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
      <Link href={localizedHref(locale, `/blog/${article.slug}`)} className="block">
        <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E4DB7] to-[#2BB3C0] opacity-90" />
          )}
        </div>
      </Link>
      <CardContent className="p-6 flex flex-col flex-1">
        {category && (
          <Link
            href={localizedHref(locale, `/category/${category.slug}`)}
            className="text-xs font-bold text-[#1E4DB7] uppercase tracking-wider mb-2 hover:underline"
          >
            {category.name}
          </Link>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
          <Link
            href={localizedHref(locale, `/blog/${article.slug}`)}
            className="hover:text-[#1E4DB7] transition-colors"
          >
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
          <span>{formatDate(article.publishedDate, locale)}</span>
          <span>{article.readingTime}</span>
        </div>
        <Link
          href={localizedHref(locale, `/blog/${article.slug}`)}
          className="mt-4 inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium"
        >
          {t.common.readMore}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
