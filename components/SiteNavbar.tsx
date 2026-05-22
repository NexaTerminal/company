'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Lang = 'en' | 'mk';

export default function SiteNavbar({
  language,
  onLanguageChange,
  showSiteNav = true,
}: {
  language: Lang;
  onLanguageChange: (lang: Lang) => void;
  showSiteNav?: boolean;
}) {
  const siteName = language === 'mk' ? 'Компанија' : 'Company';
  const partOfNexa = language === 'mk' ? 'Дел од Nexa ↗' : 'Part of Nexa ↗';
  const ctaLabel = language === 'mk' ? 'Поврзете се со експерт' : 'Contact an expert';
  const navItems = language === 'mk'
    ? [
        { label: 'Ентитети', href: '/#entities' },
        { label: 'Процес', href: '/#process' },
        { label: 'Трошоци', href: '/#costs' },
      ]
    : [
        { label: 'Entities', href: '/#entities' },
        { label: 'Process', href: '/#process' },
        { label: 'Costs', href: '/#costs' },
      ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Brand lockup: [Nexa logo] | Company → this site's home */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`Nexa — ${siteName}`}>
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

          {/* Right-aligned cluster */}
          <div className="flex items-center space-x-3 lg:space-x-5">
            {showSiteNav && (
              <div className="hidden lg:flex items-center space-x-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-gray-700 hover:text-[#1E4DB7] transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            <a
              href="https://nexa.mk"
              className="hidden md:inline text-xs text-gray-500 hover:text-[#1E4DB7] transition-colors whitespace-nowrap"
            >
              {partOfNexa}
            </a>

            <div className="flex items-center space-x-1 border-l border-gray-200 pl-3">
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onLanguageChange('en')}
                className="text-xs h-7 px-2"
                aria-label="English"
                aria-pressed={language === 'en'}
              >
                EN
              </Button>
              <Button
                variant={language === 'mk' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onLanguageChange('mk')}
                className="text-xs h-7 px-2"
                aria-label="Македонски"
                aria-pressed={language === 'mk'}
              >
                MK
              </Button>
            </div>

            <Button
              asChild
              size="sm"
              className="bg-[#1E4DB7] hover:bg-[#163d92] text-white text-xs sm:text-sm h-8 px-3 whitespace-nowrap"
            >
              <a href="/#contact">{ctaLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
