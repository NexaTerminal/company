'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_LIST, stripLocale, localizedHref, type Locale } from '@/lib/i18n';

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || '/';
  const basePath = stripLocale(pathname);

  return (
    <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
      {LOCALE_LIST.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localizedHref(l, basePath)}
            aria-current={active ? 'true' : undefined}
            className={`text-xs h-7 px-2 inline-flex items-center rounded-md font-medium transition-colors ${
              active
                ? 'bg-[#1E4DB7] text-white'
                : 'text-gray-600 hover:text-[#1E4DB7] hover:bg-gray-50'
            }`}
            aria-label={LOCALES[l].name}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
