import categoriesData from '@/content/_categories.json';
import type { Locale } from '@/lib/i18n';
import { DEFAULT_LOCALE } from '@/lib/i18n';

export interface RawCategory {
  id: string;
  slug: string;
  icon: string;
  image?: string;
  name_en: string;
  name_mk: string;
  description_en: string;
  description_mk: string;
}

export interface Category {
  id: string;
  slug: string;
  icon: string;
  image?: string;
  name: string;
  description: string;
}

const RAW = categoriesData as RawCategory[];

function localise(c: RawCategory, locale: Locale): Category {
  return {
    id: c.id,
    slug: c.slug,
    icon: c.icon,
    image: c.image,
    name: locale === 'mk' ? c.name_mk : c.name_en,
    description: locale === 'mk' ? c.description_mk : c.description_en,
  };
}

export function getCategories(locale: Locale = DEFAULT_LOCALE): Category[] {
  return RAW.map((c) => localise(c, locale));
}

export function getCategoryBySlug(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): Category | undefined {
  const found = RAW.find((c) => c.slug === slug);
  return found ? localise(found, locale) : undefined;
}

export function getCategoryById(
  id: string,
  locale: Locale = DEFAULT_LOCALE
): Category | undefined {
  const found = RAW.find((c) => c.id === id);
  return found ? localise(found, locale) : undefined;
}

export function getAllCategorySlugs(): string[] {
  return RAW.map((c) => c.slug);
}
