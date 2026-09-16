import type { Locale } from '@/lib/i18n';

// UI chrome strings (navigation, footer, shared labels). Article/category
// content lives in the JSON content files, not here.

export interface Dictionary {
  siteName: string;
  tagline: string;
  nav: {
    topics: string;
    search: string;
    about: string;
    contact: string;
    partOfNexa: string;
    cta: string;
  };
  common: {
    readMore: string;
    latestArticles: string;
    allTopics: string;
    articlesInCategory: string;
    relatedArticles: string;
    updated: string;
    published: string;
    backToHome: string;
    searchPlaceholder: string;
    noResults: string;
  };
  footer: {
    sitePurpose: string;
    topics: string;
    ecosystem: string;
    legal: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
    contactHeading: string;
    company: string;
    city: string;
    disclaimer: string;
    mbaLink: string;
    copyright: string;
    poweredBy: string;
    forPros: string;
  };
}

const en: Dictionary = {
  siteName: 'Company · Nexa',
  tagline: 'A plain-language guide to running a business in North Macedonia — registration, changes, tax, compliance, data protection and more.',
  nav: {
    topics: 'Topics',
    search: 'Search',
    about: 'About',
    contact: 'Contact an expert',
    partOfNexa: 'Part of Nexa ↗',
    cta: 'Contact an expert',
  },
  common: {
    readMore: 'Read more',
    latestArticles: 'Latest articles',
    allTopics: 'All topics',
    articlesInCategory: 'Articles in this topic',
    relatedArticles: 'Related articles',
    updated: 'Updated',
    published: 'Published',
    backToHome: 'Back to home',
    searchPlaceholder: 'Search articles…',
    noResults: 'No articles found.',
  },
  footer: {
    sitePurpose: 'Practical, plain-language guidance for founders and business owners in North Macedonia. Reviewed by licensed professionals in the Nexa network.',
    topics: 'Topics',
    ecosystem: 'Part of the Nexa ecosystem',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    about: 'About',
    contact: 'Contact',
    contactHeading: 'Contact',
    company: 'NEKSA AMD DOOEL',
    city: 'Skopje, North Macedonia',
    disclaimer: 'The content on this site is general legal and informational material and does not constitute legal advice, an offer of services, or a commercial communication. Viewing or using this site does not create a lawyer-client relationship. For individual legal advice, contact a licensed attorney — the official directory of active attorneys in the Republic of North Macedonia is available at the',
    mbaLink: 'Macedonian Bar Association',
    copyright: '© 2026 NEKSA AMD DOOEL — part of the Nexa ecosystem.',
    poweredBy: 'Powered by Nexa',
    forPros: 'For lawyers and accountants: join the Nexa network →',
  },
};

const mk: Dictionary = {
  siteName: 'Компанија · Nexa',
  tagline: 'Водич со јасен јазик за водење бизнис во Северна Македонија — регистрација, промени, даноци, усогласеност, заштита на податоци и повеќе.',
  nav: {
    topics: 'Теми',
    search: 'Пребарување',
    about: 'За нас',
    contact: 'Поврзете се со експерт',
    partOfNexa: 'Дел од Nexa ↗',
    cta: 'Поврзете се со експерт',
  },
  common: {
    readMore: 'Прочитај повеќе',
    latestArticles: 'Најнови статии',
    allTopics: 'Сите теми',
    articlesInCategory: 'Статии во оваа тема',
    relatedArticles: 'Поврзани статии',
    updated: 'Ажурирано',
    published: 'Објавено',
    backToHome: 'Назад на почетна',
    searchPlaceholder: 'Пребарувајте статии…',
    noResults: 'Не се пронајдени статии.',
  },
  footer: {
    sitePurpose: 'Практични совети со јасен јазик за основачи и сопственици на бизниси во Северна Македонија. Прегледано од лиценцирани професионалци во мрежата на Nexa.',
    topics: 'Теми',
    ecosystem: 'Дел од Nexa екосистемот',
    legal: 'Правно',
    privacy: 'Политика за приватност',
    terms: 'Услови за користење',
    about: 'За нас',
    contact: 'Контакт',
    contactHeading: 'Контакт',
    company: 'НЕКСА АМД ДООЕЛ',
    city: 'Скопје, Северна Македонија',
    disclaimer: 'Содржината на оваа страница претставува општи правни и информативни содржини и не претставува правен совет, понуда за услуги ниту комерцијална презентација. Прегледувањето или користењето на оваа страница не создава адвокатско-клиентски однос. За индивидуален правен совет, обратете се до лиценциран адвокат — официјалниот именик на активни адвокати во Република Северна Македонија е достапен на',
    mbaLink: 'Адвокатска комора на РСМ',
    copyright: '© 2026 НЕКСА АМД ДООЕЛ — дел од Nexa екосистемот.',
    poweredBy: 'Powered by Nexa',
    forPros: 'За адвокати и сметководители: придружете се на Nexa мрежата →',
  },
};

const DICTIONARIES: Record<Locale, Dictionary> = { en, mk };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
}
