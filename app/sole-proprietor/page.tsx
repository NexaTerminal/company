import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/sole-proprietor';

export const metadata = pageMetadata({
  path: PATH,
  title: 'Sole Proprietor (TP) Registration in North Macedonia (2026)',
  description:
    'Register as a sole proprietor (Trgovec Poedinec, TP) in North Macedonia: no minimum capital, the simplest and cheapest form — but with unlimited personal liability.',
  keywords:
    'sole proprietor North Macedonia, Trgovec Poedinec, TP registration Macedonia, трговец поединец, регистрација ТП',
});

const enFaq = [
  {
    q: 'What is a sole proprietor (TP) in North Macedonia?',
    a: 'A TP (Trgovec Poedinec) is a business run by a single individual who is personally liable for all obligations of the business with their entire personal assets. There is no minimum capital — it is the simplest and cheapest form.',
  },
  {
    q: 'Does a sole proprietor need minimum capital?',
    a: 'No. A sole proprietor (TP) requires no minimum capital at all, unlike a DOO/DOOEL (EUR 5,000) or a PDOO (EUR 1).',
  },
  {
    q: 'What is the downside of registering as a TP?',
    a: 'Unlimited personal liability: the owner answers for all business obligations with their entire personal estate. For many founders, a DOOEL — which limits liability to the contribution — is worth the extra setup.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'Sole Proprietor (TP)',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Register as a Sole Proprietor (TP) in North Macedonia',
    tldr:
      'A sole proprietor (Trgovec Poedinec, TP) is the simplest and cheapest way to start a business in North Macedonia, with no minimum capital. The trade-off is unlimited personal liability: the owner is responsible for all business obligations with their entire personal assets. It is commonly used by craftspeople, freelancers, farmers, artists, carriers, and small service providers.',
    intro:
      'If you want the lightest-weight way to open a business in North Macedonia and you are comfortable with personal liability, the sole proprietor (TP) is it. Many founders compare it against the DOOEL, which costs more to set up but protects personal assets.',
    sections: [
      {
        h: 'What is a sole proprietor (TP)?',
        body:
          'A business run by a single individual who is personally liable for all obligations of the business with their entire personal assets. There is no minimum capital. It is the simplest and cheapest form, commonly used by craftspeople, farmers, artists, carriers, and small service providers — but the unlimited personal liability is a significant trade-off.',
      },
      {
        h: 'Documents required for a TP',
        bullets: [
          'Application for registration',
          'Copy of the ID card or passport',
          'The required statutory statement',
        ],
      },
      {
        h: 'TP vs the limited-liability forms',
        table: {
          head: ['Entity', 'Min. capital', 'Liability', 'Best for'],
          rows: [
            ['Sole Proprietor (TP)', 'None', 'Unlimited (personal)', 'Craftspeople, freelancers, micro-business'],
            ['Simplified LLC (PDOO)', 'EUR 1', 'Limited (with mandatory reserve)', 'First-time founders, low capital'],
            ['Single-Member LLC (DOOEL)', 'EUR 5,000 (within 1 yr)', 'Limited to contribution', 'Solo entrepreneur, subsidiary'],
          ],
        },
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'DOOEL — single-member LLC (limited liability)', href: '/dooel' },
      { label: 'PDOO — the €1 company', href: '/pdoo' },
      { label: 'Documents required', href: '/documents' },
      { label: 'Company taxes in North Macedonia', href: '/taxes' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Not sure between TP and DOOEL?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who can weigh liability and tax for your case and reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'Трговец поединец (ТП)',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Регистрирајте се како трговец поединец (ТП) во Северна Македонија',
    tldr:
      'Трговецот поединец (ТП) е наједноставниот и најевтин начин да започнете бизнис во Северна Македонија, без минимален влог. Замената е неограничена лична одговорност: сопственикот одговара за сите обврски на бизнисот со целиот свој личен имот. Често го користат занаетчии, фриленсери, земјоделци, уметници, превозници и мали даватели на услуги.',
    intro:
      'Ако сакате најлесен начин да отворите бизнис во Северна Македонија и прифаќате лична одговорност, трговецот поединец (ТП) е тоа. Многумина го споредуваат со ДООЕЛ, кој чини повеќе за основање но го заштитува личниот имот.',
    sections: [
      {
        h: 'Што е трговец поединец (ТП)?',
        body:
          'Бизнис воден од едно физичко лице кое одговара за сите обврски на бизнисот со целиот свој личен имот. Нема минимален влог. Тоа е наједноставната и најевтината форма, често користена од занаетчии, земјоделци, уметници, превозници и мали даватели на услуги — но неограничената лична одговорност е значителен компромис.',
      },
      {
        h: 'Потребни документи за ТП',
        bullets: [
          'Пријава за упис',
          'Копија од лична карта или пасош',
          'Потребната законска изјава',
        ],
      },
      {
        h: 'ТП наспроти формите со ограничена одговорност',
        table: {
          head: ['Друштво', 'Мин. влог', 'Одговорност', 'Најсоодветно за'],
          rows: [
            ['Трговец поединец (ТП)', 'Нема', 'Неограничена (лична)', 'Занаетчии, фриленсери, микро-бизнис'],
            ['ПДОО', '1 €', 'Ограничена (со задолжителна резерва)', 'Прв бизнис, низок влог'],
            ['ДООЕЛ', '5.000 € (во рок од 1 год.)', 'Ограничена до влогот', 'Самостоен претприемач, подружница'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Што е трговец поединец (ТП) во Северна Македонија?',
        a: 'ТП е бизнис воден од едно физичко лице кое одговара за сите обврски со целиот свој личен имот. Нема минимален влог — тоа е наједноставната и најевтина форма.',
      },
      {
        q: 'Дали трговец поединец бара минимален влог?',
        a: 'Не. ТП не бара никаков минимален влог, за разлика од ДОО/ДООЕЛ (5.000 евра) или ПДОО (1 евро).',
      },
      {
        q: 'Кој е недостатокот на ТП?',
        a: 'Неограничена лична одговорност: сопственикот одговара за сите обврски со целиот свој имот. За многумина, ДООЕЛ — кој ја ограничува одговорноста до влогот — вреди дополнителното основање.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'ДООЕЛ — друштво на едно лице (ограничена одговорност)', href: '/dooel' },
      { label: 'ПДОО — фирма за 1 евро', href: '/pdoo' },
      { label: 'Потребни документи', href: '/documents' },
      { label: 'Даноци за фирмите', href: '/taxes' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Не сте сигурни помеѓу ТП и ДООЕЛ?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој ќе ги измери одговорноста и данокот за вашиот случај и ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'Sole Proprietor Registration'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
