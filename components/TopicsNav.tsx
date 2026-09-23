'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localizedHref, stripLocale, type Locale } from '@/lib/i18n';

type Item = { slug: string; name: string };

export default function TopicsNav({
  locale,
  categories,
  label,
}: {
  locale: Locale;
  categories: Item[];
  label: string;
}) {
  const pathname = usePathname() || '/';
  const base = stripLocale(pathname);

  return (
    <nav aria-label={label} className="border-t border-slate-100 bg-white/85 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <ul className="flex items-center gap-1 overflow-x-auto whitespace-nowrap py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => {
            const active = base === `/category/${c.slug}`;
            return (
              <li key={c.slug}>
                <Link
                  href={localizedHref(locale, `/category/${c.slug}`)}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                    active
                      ? 'bg-[#1E4DB7] text-white shadow-sm shadow-blue-500/20'
                      : 'text-gray-600 hover:text-[#1E4DB7] hover:bg-blue-50'
                  }`}
                >
                  {c.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
