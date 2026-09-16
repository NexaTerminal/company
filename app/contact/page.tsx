import ContactView from '@/components/pages/ContactView';
import { buildMetadata } from '@/lib/seo';

const locale = 'en' as const;

export const metadata = buildMetadata({
  locale,
  basePath: '/contact',
  title: 'Contact an Expert — Company · Nexa',
  description: 'Connect with a verified expert from the Nexa network — anonymously and with no obligation.',
});

export default function Page({ searchParams }: { searchParams: { topic?: string } }) {
  return <ContactView locale={locale} defaultTopic={searchParams?.topic ?? ''} />;
}
