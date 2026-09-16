import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getCategories } from '@/lib/categories';
import { getDictionary } from '@/lib/dictionary';
import { localizedHref, type Locale } from '@/lib/i18n';

export default function PortalHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const categories = getCategories(locale);
  const siteName = locale === 'mk' ? 'Компанија' : 'Company';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link
            href={localizedHref(locale, '/')}
            className="flex items-center gap-3 shrink-0"
            aria-label={`Nexa — ${siteName}`}
          >
            <Image
              src="/nexa-logo-navbar.png"
              alt="Nexa"
              width={120}
              height={32}
              priority
              className="h-[22px] sm:h-[26px] w-auto"
            />
            <span aria-hidden="true" className="hidden sm:inline-block h-5 w-px bg-slate-300" />
            <span className="hidden sm:inline text-sm font-semibold text-gray-800 tracking-tight">
              {siteName}
            </span>
          </Link>

          <div className="flex items-center gap-3 lg:gap-4">
            <Link
              href={localizedHref(locale, '/search')}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#1E4DB7] transition-colors"
              aria-label={t.nav.search}
            >
              <Search className="h-4 w-4" />
              <span className="hidden md:inline">{t.nav.search}</span>
            </Link>

            <a
              href="https://nexa.mk"
              className="hidden md:inline text-xs text-gray-500 hover:text-[#1E4DB7] transition-colors whitespace-nowrap"
            >
              {t.nav.partOfNexa}
            </a>

            <LanguageSwitcher locale={locale} />

            <Button
              asChild
              size="sm"
              className="bg-[#1E4DB7] hover:bg-[#163d92] text-white text-xs sm:text-sm h-8 px-3 whitespace-nowrap"
            >
              <Link href={localizedHref(locale, '/contact')}>{t.nav.cta}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Topics bar */}
      <nav aria-label={t.nav.topics} className="border-t border-slate-100 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-x-5 gap-y-1 overflow-x-auto whitespace-nowrap py-2 text-sm scrollbar-none">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localizedHref(locale, `/category/${c.slug}`)}
                  className="text-gray-700 hover:text-[#1E4DB7] transition-colors font-medium"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
