import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/terms',
  title: 'Terms of Use · Company.Nexa.mk',
  description:
    'Terms of use for company.nexa.mk, the company-registration guide for North Macedonia operated by NEKSA AMD DOOEL.',
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
