import HomeView from '@/components/pages/HomeView';
import { getDictionary } from '@/lib/dictionary';
import { buildMetadata } from '@/lib/seo';

const locale = 'en' as const;

export const metadata = buildMetadata({
  locale,
  basePath: '/',
  title: 'Running a Business in North Macedonia — Guides · Company · Nexa',
  description: getDictionary(locale).tagline,
  keywords: [
    'company North Macedonia', 'business North Macedonia', 'company registration',
    'company changes', 'corporate tax', 'compliance', 'GDPR', 'Central Registry',
  ],
});

export default function Page() {
  return <HomeView locale={locale} />;
}
