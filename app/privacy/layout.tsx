import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/privacy',
  title: 'Privacy Policy · Company.Nexa.mk',
  description:
    'Privacy policy for company.nexa.mk, the company-registration guide for North Macedonia operated by NEKSA AMD DOOEL.',
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
