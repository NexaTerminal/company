import HomeView from '@/components/pages/HomeView';
import { getDictionary } from '@/lib/dictionary';
import { buildMetadata } from '@/lib/seo';

const locale = 'en' as const;

export const metadata = buildMetadata({
  locale,
  basePath: '/',
  title: 'Company Registration in North Macedonia & Business Guides | Nexa',
  description:
    'Register a company in North Macedonia (Macedonia) — DOO/DOOEL formation, cost, documents and process, plus guides on company changes, tax, compliance and GDPR for business owners.',
  keywords: [
    'company registration Macedonia', 'company registration North Macedonia', 'register a company Macedonia',
    'company formation Macedonia', 'open a company in Macedonia', 'start a business Macedonia',
    'LLC registration Macedonia', 'DOO registration', 'company registration Skopje', 'Central Registry',
  ],
});

export default function Page() {
  return <HomeView locale={locale} />;
}
