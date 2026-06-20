import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/ad';

export const metadata = pageMetadata({
  path: PATH,
  title: 'Joint-Stock Company (AD) Registration in North Macedonia (2026)',
  description:
    'How to register a joint-stock company (AD) in North Macedonia: EUR 25,000 capital for a private AD, EUR 50,000 for a public AD, and stricter governance for raising capital.',
  keywords:
    'AD registration North Macedonia, joint-stock company Macedonia, акционерско друштво, регистрација на АД',
});

const enFaq = [
  {
    q: 'What is an AD in North Macedonia?',
    a: 'An AD (акционерско друштво) is a joint-stock company, suitable for larger businesses and those that may raise capital from many shareholders. Liability is limited to the shares held.',
  },
  {
    q: 'How much capital does an AD require?',
    a: 'Minimum capital is broadly EUR 25,000 for a private AD and EUR 50,000 for a public AD, and governance requirements are more demanding than for a DOO.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'AD (Joint-Stock)',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Register a Joint-Stock Company (AD) in North Macedonia',
    tldr:
      'A joint-stock company (AD) suits larger businesses and those that may raise capital from many shareholders. Minimum capital is broadly EUR 25,000 for a private AD and EUR 50,000 for a public AD, with more demanding governance than a DOO. Liability is limited to the shares held, and registration runs through the Central Registry.',
    intro:
      'The AD is the form for larger ventures and capital-raising in North Macedonia. Most small and medium businesses choose a DOO or DOOEL instead, but if you plan to issue shares to many investors, the AD is the right structure for company formation.',
    sections: [
      {
        h: 'What is an AD?',
        body:
          'Suitable for larger businesses and those that may raise capital from many shareholders. Minimum capital is higher — broadly EUR 25,000 for a private AD and EUR 50,000 for a public AD — and governance requirements are more demanding.',
      },
      {
        h: 'Capital and governance',
        body:
          'Compared with a DOO, an AD carries higher minimum capital and stricter governance: a management structure, shareholder meetings, and reporting obligations geared to companies that issue shares. The trade-off is the ability to raise equity from many shareholders and, for a public AD, to list and trade those shares.',
      },
      {
        h: 'How an AD compares',
        table: {
          head: ['Entity', 'Founders', 'Min. capital', 'Best for'],
          rows: [
            ['Joint-Stock Company (AD)', '1+ shareholders', 'EUR 25,000 private / 50,000 public', 'Large / capital-raising businesses'],
            ['Limited Liability Company (DOO)', '2–50', 'EUR 5,000 (within 1 yr)', 'SMEs, partnerships'],
            ['Single-Member LLC (DOOEL)', '1', 'EUR 5,000 (within 1 yr)', 'Solo entrepreneur, subsidiary'],
          ],
        },
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'DOO — limited liability company', href: '/doo' },
      { label: 'Company taxes in North Macedonia', href: '/taxes' },
      { label: 'Company registration process', href: '/process' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Planning a joint-stock company?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who handles AD incorporation and governance, with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'АД',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Регистрирајте акционерско друштво (АД) во Северна Македонија',
    tldr:
      'Акционерското друштво (АД) е соодветно за поголеми бизниси и за оние што сакаат да прибираат капитал од повеќе акционери. Минималниот капитал е начелно 25.000 евра за приватно АД и 50.000 евра за јавно АД, со построги барања за управување отколку кај ДОО. Одговорноста е ограничена до акциите, а регистрацијата се врши преку Централниот регистар.',
    intro:
      'АД е формата за поголеми потфати и прибирање капитал во Северна Македонија. Повеќето мали и средни бизниси избираат ДОО или ДООЕЛ, но ако планирате да издавате акции на многу инвеститори, АД е вистинската структура.',
    sections: [
      {
        h: 'Што е АД?',
        body:
          'Соодветно за поголеми бизниси и за оние што сакаат да прибираат капитал од повеќе акционери. Минималниот капитал е повисок — начелно 25.000 евра за приватно АД и 50.000 евра за јавно АД — а барањата за управување се построги.',
      },
      {
        h: 'Капитал и управување',
        body:
          'Во споредба со ДОО, АД носи повисок минимален капитал и построго управување: управувачка структура, собранија на акционери и обврски за известување прилагодени на друштва што издаваат акции. Замената е можноста за прибирање капитал од многу акционери, а кај јавно АД и за котирање и тргување со тие акции.',
      },
      {
        h: 'Споредба на АД',
        table: {
          head: ['Друштво', 'Основачи', 'Мин. капитал', 'Најсоодветно за'],
          rows: [
            ['АД', '1+ акционер', '25.000 € приватно / 50.000 € јавно', 'Поголеми бизниси, прибирање капитал'],
            ['ДОО', '2–50', '5.000 € (во рок од 1 год.)', 'МСП, партнерства'],
            ['ДООЕЛ', '1', '5.000 € (во рок од 1 год.)', 'Самостоен претприемач, подружница'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Што е АД во Северна Македонија?',
        a: 'АД (акционерско друштво) е соодветно за поголеми бизниси и за прибирање капитал од повеќе акционери. Одговорноста е ограничена до висината на акциите.',
      },
      {
        q: 'Колкав капитал бара АД?',
        a: 'Минималниот капитал е начелно 25.000 евра за приватно АД и 50.000 евра за јавно АД, а барањата за управување се построги отколку кај ДОО.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'ДОО — друштво со ограничена одговорност', href: '/doo' },
      { label: 'Даноци за фирмите', href: '/taxes' },
      { label: 'Постапка за регистрација', href: '/process' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Планирате акционерско друштво?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој работи на основање и управување со АД, со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'AD Registration'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
