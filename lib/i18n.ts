// Locale configuration for company.nexa.mk
// English is the default and lives at the root ("/"); Macedonian lives under "/mk".

export const LOCALES = {
  en: { label: 'ENG', name: 'English', htmlLang: 'en', ogLocale: 'en_US' },
  mk: { label: 'МКД', name: 'Македонски', htmlLang: 'mk', ogLocale: 'mk_MK' },
  // Future languages can be added here; the switcher picks them up automatically.
} as const;

export type Locale = keyof typeof LOCALES;

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_LIST = Object.keys(LOCALES) as Locale[];

export const SITE_URL = 'https://company.nexa.mk';

/** Is this string a supported non-default locale segment? */
export function isLocale(segment: string | undefined): segment is Locale {
  return !!segment && (LOCALE_LIST as string[]).includes(segment);
}

/** Derive the active locale from a pathname (e.g. "/mk/blog/x" -> "mk"). */
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.replace(/^\/+/, '').split('/')[0];
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

/**
 * Build a locale-aware href.
 *   localizedHref('en', '/blog/x') -> '/blog/x'
 *   localizedHref('mk', '/blog/x') -> '/mk/blog/x'
 *   localizedHref('mk', '/')       -> '/mk'
 */
export function localizedHref(locale: Locale, path: string): string {
  const clean = '/' + path.replace(/^\/+/, '');
  if (locale === DEFAULT_LOCALE) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/mk' : `/mk${clean}`;
}

/** Strip a leading locale segment from a pathname, returning the base path. */
export function stripLocale(pathname: string): string {
  const first = pathname.replace(/^\/+/, '').split('/')[0];
  if (isLocale(first)) {
    const rest = pathname.replace(/^\/+/, '').split('/').slice(1).join('/');
    return '/' + rest;
  }
  return pathname;
}

/** Absolute canonical URL for a given locale + base path. */
export function canonicalUrl(locale: Locale, path: string): string {
  return SITE_URL + localizedHref(locale, path);
}
