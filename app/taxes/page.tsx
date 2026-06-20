import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/taxes';

export const metadata = pageMetadata({
  path: PATH,
  title: 'Company Taxes in North Macedonia: 10% Profit Tax Explained (2026)',
  description:
    'Company taxes in North Macedonia: a flat 10% corporate profit tax, flat 10% personal income tax, 18% standard VAT with reduced 10%/5% rates, and the MKD 2,000,000 VAT threshold.',
  keywords:
    'company taxes North Macedonia, corporate profit tax Macedonia, VAT Macedonia, даноци фирма, данок на добивка',
});

const enFaq = [
  {
    q: 'What taxes will my company pay in North Macedonia?',
    a: 'Corporate profit tax is a flat 10% and personal income tax is a flat 10%. VAT is 18% standard, with reduced rates of 10% and 5%. VAT registration becomes mandatory above MKD 2,000,000 in annual turnover.',
  },
  {
    q: 'Do I need to register for VAT immediately?',
    a: 'Not necessarily. VAT registration is mandatory once your taxable turnover exceeds MKD 2,000,000 a year, but you can register voluntarily, generally within 15 days of incorporation, if it benefits your business.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'Taxes',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Company Taxes in North Macedonia',
    tldr:
      'North Macedonia’s tax regime is simple and low: a flat 10% corporate profit tax and a flat 10% personal income tax — among the lowest in Europe. VAT is 18% standard, with reduced rates of 10% and 5%. VAT registration becomes mandatory once taxable turnover exceeds MKD 2,000,000 in a calendar year.',
    intro:
      'Tax is one of the main reasons founders choose North Macedonia for company formation. Here are the headline rates your company will deal with, plus when VAT registration kicks in.',
    sections: [
      {
        h: 'Headline rates',
        body:
          'The corporate profit tax is a flat 10%. The personal income tax is also a flat 10%. VAT has a standard rate of 18%, with reduced rates of 10% and 5%. Salaries are subject to social contributions. Withholding tax may apply to certain payments to non-residents (such as dividends, interest, and royalties), subject to applicable double-tax treaties.',
        table: {
          head: ['Tax', 'Rate / threshold'],
          rows: [
            ['Corporate profit tax', '10% (flat)'],
            ['Personal income tax', '10% (flat)'],
            ['VAT — standard', '18%'],
            ['VAT — reduced', '10% (catering, some food) / 5% (basic food, water, pharma, books)'],
            ['VAT registration threshold', 'MKD 2,000,000 turnover (mandatory)'],
          ],
        },
      },
      {
        h: 'When VAT registration applies',
        body:
          'VAT registration becomes mandatory once your taxable turnover exceeds MKD 2,000,000 in a calendar year (or is expected to). You may also register voluntarily — useful if you trade with VAT-registered partners and want to reclaim input VAT — by applying to the Public Revenue Office (UJP), generally within 15 days of registration. Note the annual registration/deregistration window closes on 15 January.',
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'Cost to register a company', href: '/cost' },
      { label: 'Company registration process', href: '/process' },
      { label: 'Registering a company as a foreigner', href: '/for-foreigners' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Questions about tax setup?',
    ctaText:
      'We will connect you with a verified accountant from the Nexa ecosystem who can set up your tax and VAT registration and reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'Даноци',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Даноци за фирмите во Северна Македонија',
    tldr:
      'Даночниот систем на Северна Македонија е едноставен и низок: рамен данок на добивка од 10% и рамен персонален данок на доход од 10% — меѓу најниските во Европа. ДДВ е 18% стандарден, со намалени стапки од 10% и 5%. Регистрацијата за ДДВ станува задолжителна штом оданочивиот промет надмине 2.000.000 денари во календарска година.',
    intro:
      'Данокот е една од главните причини зошто основачите избираат Северна Македонија. Еве ги главните стапки со кои ќе работи вашата фирма, плус кога настапува обврската за ДДВ.',
    sections: [
      {
        h: 'Главни стапки',
        body:
          'Данокот на добивка е рамни 10%. Персоналниот данок на доход е исто така рамни 10%. ДДВ има стандардна стапка од 18%, со намалени стапки од 10% и 5%. Платите подлежат на социјални придонеси. На определени плаќања кон нерезиденти (дивиденди, камати, авторски надоместоци) може да се применува задршка на данок, согласно договорите за одбегнување двојно оданочување.',
        table: {
          head: ['Данок', 'Стапка / праг'],
          rows: [
            ['Данок на добивка', '10% (рамни)'],
            ['Персонален данок на доход', '10% (рамни)'],
            ['ДДВ — стандарден', '18%'],
            ['ДДВ — намален', '10% (угостителство, одредени прехранбени) / 5% (основни прехранбени, вода, лекови, книги)'],
            ['Праг за регистрација за ДДВ', '2.000.000 ден. промет (задолжително)'],
          ],
        },
      },
      {
        h: 'Кога настапува обврската за ДДВ',
        body:
          'Регистрацијата за ДДВ станува задолжителна штом оданочивиот промет надмине 2.000.000 денари во календарска година (или се очекува да надмине). Можете и доброволно да се регистрирате — корисно ако работите со ДДВ-обврзници и сакате да го одбивате влезниот ДДВ — со барање до Управата за јавни приходи (УЈП), вообичаено во рок од 15 дена од регистрацијата. Имајте предвид дека годишниот рок за регистрација/одрегистрација е 15 јануари.',
      },
    ],
    faq: [
      {
        q: 'Кои даноци ќе ги плаќа мојата фирма во Северна Македонија?',
        a: 'Данокот на добивка е рамни 10%, а персоналниот данок на доход е рамни 10%. ДДВ е 18% стандарден, со намалени стапки од 10% и 5%. Регистрацијата за ДДВ е задолжителна над 2.000.000 денари годишен промет.',
      },
      {
        q: 'Дали морам веднаш да се регистрирам за ДДВ?',
        a: 'Не нужно. Регистрацијата за ДДВ е задолжителна штом оданочивиот промет надмине 2.000.000 денари годишно, но може и доброволно, вообичаено во рок од 15 дена од основањето, ако тоа е корисно за бизнисот.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'Колку чини регистрација', href: '/cost' },
      { label: 'Постапка за регистрација', href: '/process' },
      { label: 'Отворање фирма за странци', href: '/for-foreigners' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Прашања за даночно поставување?',
    ctaText:
      'Ќе ве поврземе со верифициран сметководител од Nexa екосистемот кој ќе ја постави вашата даночна и ДДВ регистрација и ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'Company Taxes'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
