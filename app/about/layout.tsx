import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/about',
  title: 'About Nexa — Company Registration Guide for North Macedonia',
  description:
    'About company.nexa.mk and its operator NEKSA AMD DOOEL: the company-registration guide within the Nexa ecosystem for North Macedonia.',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
