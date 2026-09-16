import ContactView from '@/components/pages/ContactView';
import { buildMetadata } from '@/lib/seo';

const locale = 'mk' as const;

export const metadata = buildMetadata({
  locale,
  basePath: '/contact',
  title: 'Поврзете се со експерт — Компанија · Nexa',
  description: 'Поврзете се со верифициран експерт од мрежата на Nexa — анонимно и без обврска.',
});

export default function Page({ searchParams }: { searchParams: { topic?: string } }) {
  return <ContactView locale={locale} defaultTopic={searchParams?.topic ?? ''} />;
}
