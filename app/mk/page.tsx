import HomeView from '@/components/pages/HomeView';
import { getDictionary } from '@/lib/dictionary';
import { buildMetadata } from '@/lib/seo';

const locale = 'mk' as const;

export const metadata = buildMetadata({
  locale,
  basePath: '/',
  title: 'Регистрација на компанија во Северна Македонија | Nexa',
  description:
    'Регистрација на компанија во Северна Македонија (Македонија) — основање на ДОО/ДООЕЛ, трошок, документи и постапка, плус водичи за промени во фирма, даноци, усогласеност и ГДПР.',
  keywords: [
    'регистрација на компанија Македонија', 'регистрација на фирма Македонија', 'регистрација на фирма Северна Македонија',
    'основање компанија Македонија', 'отворање компанија во Македонија', 'започнување бизнис Македонија',
    'регистрација на ДОО', 'регистрација на компанија Скопје', 'Централен регистар',
  ],
});

export default function Page() {
  return <HomeView locale={locale} />;
}
