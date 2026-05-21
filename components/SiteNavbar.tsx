'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NexaWordmark from '@/components/NexaWordmark';

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
  const navItems = language === 'mk'
    ? [
        { label: 'Ентитети', href: '/#entities' },
        { label: 'Процес', href: '/#process' },
        { label: 'Трошоци', href: '/#costs' },
        { label: 'Контакт', href: '/#contact' },
      ]
    : [
        { label: 'Entities', href: '/#entities' },
        { label: 'Process', href: '/#process' },
        { label: 'Costs', href: '/#costs' },
        { label: 'Contact', href: '/#contact' },
      ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo → nexa.mk (the hub) */}
          <a href="https://nexa.mk" className="flex items-center shrink-0" aria-label="Nexa — go to hub">
            <NexaWordmark size="md" />
          </a>

          {/* Right-aligned cluster */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/"
              className="hidden sm:inline text-sm font-semibold text-gray-700 hover:text-[#1E4DB7] transition-colors"
            >
              {siteName}
            </Link>

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

            <div className="flex items-center space-x-1 border-l border-gray-200 pl-3">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
