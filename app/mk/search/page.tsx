import PortalHeader from '@/components/PortalHeader';
import PortalFooter from '@/components/PortalFooter';
import SearchClient from '@/components/SearchClient';
import { toSearchItems } from '@/lib/search';
import { getAllArticles } from '@/lib/blogData';
import { getCategoryById } from '@/lib/categories';
import { getDictionary } from '@/lib/dictionary';
import { buildMetadata } from '@/lib/seo';

const locale = 'mk' as const;

export const metadata = {
  ...buildMetadata({
    locale,
    basePath: '/search',
    title: 'Пребарување — Компанија · Nexa',
    description: getDictionary(locale).common.searchPlaceholder,
  }),
  robots: { index: false, follow: true },
};

export default function Page({ searchParams }: { searchParams: { q?: string } }) {
  const items = toSearchItems(
    getAllArticles(locale),
    (id) => getCategoryById(id, locale)?.name ?? ''
  );
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PortalHeader locale={locale} />
      <main id="main" className="flex-1">
        <SearchClient locale={locale} items={items} initialQuery={searchParams?.q ?? ''} />
      </main>
      <PortalFooter locale={locale} />
    </div>
  );
}
