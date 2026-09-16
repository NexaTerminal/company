'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import { localizedHref, type Locale } from '@/lib/i18n';
import type { SearchItem } from '@/lib/search';

export default function SearchClient({
  locale,
  items,
  initialQuery = '',
}: {
  locale: Locale;
  items: SearchItem[];
  initialQuery?: string;
}) {
  const t = getDictionary(locale);
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => it.haystack.includes(q));
  }, [query, items]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">{t.nav.search}</h1>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.common.searchPlaceholder}
          className="w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 py-3.5 text-base shadow-sm focus:border-[#1E4DB7] focus:outline-none focus:ring-2 focus:ring-[#1E4DB7]/20"
          aria-label={t.common.searchPlaceholder}
        />
      </div>

      {results.length === 0 ? (
        <p className="text-gray-500 py-10 text-center">{t.common.noResults}</p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {results.map((it) => (
            <li key={it.slug} className="py-5">
              <Link href={localizedHref(locale, `/blog/${it.slug}`)} className="group block">
                <span className="text-xs font-bold text-[#1E4DB7] uppercase tracking-wider">
                  {it.categoryName}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-[#1E4DB7] transition-colors">
                  {it.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{it.excerpt}</p>
                <span className="text-xs text-gray-400 mt-1 inline-block">{it.readingTime}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
