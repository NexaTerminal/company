import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/timeline';

export const metadata = pageMetadata({
  path: PATH,
  title: 'How Long Does It Take to Register a Company in Macedonia? (2026)',
  description:
    'How long company registration takes in North Macedonia: the Central Registry usually decides within 5 business days (often 24–48 hours), and a fully operational company takes 1–2 weeks.',
  keywords:
    'how long to register a company North Macedonia, company registration time Macedonia, колку трае регистрација фирма',
});

const enFaq = [
  {
    q: 'How long does it take to register a company in North Macedonia?',
    a: 'The Central Registry usually issues its decision within five business days, and in straightforward cases within 24–48 hours. Allow one to two weeks from first consultation to a fully operational company including bank account and seal.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'Timeline',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'How Long Company Registration Takes in North Macedonia',
    tldr:
      'Registration is one of the faster processes in the region. Once a complete set of documents is submitted, the Central Registry typically issues its decision within five business days, and in straightforward cases within 24 to 48 hours. From first consultation to a fully operational company — including the seal, a permanent bank account, and any initial VAT or employee registration — allow one to two weeks.',
    intro:
      'Speed is a real advantage of opening a business in Macedonia. Here is what to expect on timing, from filing to a fully operational company.',
    sections: [
      {
        h: 'Expected timing',
        body:
          'Once a complete set of documents is submitted, the Central Registry typically issues its decision within five business days, and in straightforward cases within 24 to 48 hours. Realistically, from first consultation to a fully operational company — including the seal, a permanent bank account, and any initial VAT or employee registration — allow one to two weeks.',
        table: {
          head: ['Milestone', 'Typical time'],
          rows: [
            ['Central Registry decision', '5 business days (often 24–48h)'],
            ['Fully operational (seal + bank + registrations)', '1–2 weeks'],
          ],
        },
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'Company registration process', href: '/process' },
      { label: 'Documents required', href: '/documents' },
      { label: 'Cost to register a company', href: '/cost' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Want to move fast?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who can compress the timeline and reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'Рокови',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Колку трае регистрацијата на фирма во Северна Македонија',
    tldr:
      'Регистрацијата е една од најбрзите во регионот. Откако ќе се поднесе комплетна документација, Централниот регистар обично носи решение во рок од пет работни дена, а во едноставни случаи за 24 до 48 часа. Од првата консултација до целосно оперативна фирма — со печат, постојана банкарска сметка и евентуална почетна регистрација за ДДВ или вработени — предвидете една до две недели.',
    intro:
      'Брзината е вистинска предност на отворањето бизнис во Македонија. Еве што да очекувате за роковите, од поднесување до целосно оперативна фирма.',
    sections: [
      {
        h: 'Очекувани рокови',
        body:
          'Откако ќе се поднесе комплетна документација, Централниот регистар обично носи решение во рок од пет работни дена, а во едноставни случаи за 24 до 48 часа. Реално, од првата консултација до целосно оперативна фирма — со печат, постојана банкарска сметка и евентуална почетна регистрација за ДДВ или вработени — предвидете една до две недели.',
        table: {
          head: ['Етапа', 'Вообичаено време'],
          rows: [
            ['Решение на Централен регистар', '5 работни дена (често 24–48ч)'],
            ['Целосно оперативна (печат + сметка + регистрации)', '1–2 недели'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Колку трае регистрацијата на фирма во Македонија?',
        a: 'Централниот регистар обично носи решение во рок од пет работни дена, а во едноставни случаи за 24–48 часа. Од првата консултација до целосно оперативна фирма со сметка и печат, предвидете една до две недели.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'Постапка за регистрација', href: '/process' },
      { label: 'Потребни документи', href: '/documents' },
      { label: 'Колку чини регистрација', href: '/cost' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Сакате да дејствувате брзо?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој може да го скрати рокот и ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'Registration Timeline'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
