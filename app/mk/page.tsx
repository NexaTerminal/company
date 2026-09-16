import HomeView from '@/components/pages/HomeView';
import { getDictionary } from '@/lib/dictionary';
import { buildMetadata } from '@/lib/seo';

const locale = 'mk' as const;

export const metadata = buildMetadata({
  locale,
  basePath: '/',
  title: 'Водење бизнис во Северна Македонија — Водичи · Компанија · Nexa',
  description: getDictionary(locale).tagline,
  keywords: [
    'фирма Северна Македонија', 'бизнис Македонија', 'регистрација на фирма',
    'промени во фирма', 'данок на добивка', 'усогласеност', 'ГДПР', 'Централен регистар',
  ],
});

export default function Page() {
  return <HomeView locale={locale} />;
}
