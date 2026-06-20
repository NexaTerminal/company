import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/cost';

export const metadata = pageMetadata({
  path: PATH,
  title: 'How Much Does It Cost to Register a Company in Macedonia? (2026)',
  description:
    'The cost to register a company in North Macedonia: Central Registry fee, notary fees, seal, bank account, translation/apostille, and the EUR 5,000 DOO/DOOEL capital (payable within a year).',
  keywords:
    'cost to register a company Macedonia, company registration fees North Macedonia, notary fees, трошоци регистрација фирма',
});

const enFaq = [
  {
    q: 'How much does it cost to register a company in North Macedonia?',
    a: 'The total is made up of several components — Central Registry/One-Stop-Shop fee, notary fees, the company seal, bank account opening, and (for foreigners) translation and apostille — rather than a single fee. Separately, a DOO/DOOEL commits EUR 5,000 share capital, which is your own money funding the business and can be paid within one year.',
  },
  {
    q: 'Is the EUR 5,000 a fee?',
    a: 'No. The EUR 5,000 minimum share capital for a DOO/DOOEL is your own funds that capitalize the business, not a fee. It can be paid in cash or in kind within one year of registration.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'Cost',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Cost to Register a Company in North Macedonia',
    tldr:
      'The cost of company registration in North Macedonia is made up of several components, not a single fee: the Central Registry/One-Stop-Shop fee, notary fees, the company seal, bank account opening, and — for foreign founders — translation and apostille. Separately, a DOO/DOOEL commits EUR 5,000 in share capital, which is your own money funding the business and can be paid within one year.',
    intro:
      'How much does it cost to register a company in Macedonia? Plan for the items below. The biggest number — the EUR 5,000 capital for a DOO/DOOEL — is not a fee at all; it is your own money that stays in the business.',
    sections: [
      {
        h: 'What makes up the cost',
        table: {
          head: ['Component', 'Notes'],
          rows: [
            ['Central Registry / One-Stop-Shop fee', 'Low, fixed administrative cost'],
            ['Notary fees', 'Depend on capital and number of documents'],
            ['Company seal', 'One-off'],
            ['Bank account opening', 'Varies by bank'],
            ['Translation & apostille (foreign docs)', 'Only for foreign founders/documents'],
            ['Professional / agent fees', 'Optional but recommended'],
            ['Share capital (DOO/DOOEL)', 'EUR 5,000 — your funds, payable within 1 year'],
          ],
        },
      },
      {
        h: 'Capital is not a fee',
        body:
          'For a DOO or DOOEL the minimum share capital is EUR 5,000 (in denar equivalent). You do not have to deposit the full amount before the company exists: it can be paid in cash or contributed in kind and may be paid within one year of registration. A simplified LLC (PDOO) requires only EUR 1, and a sole proprietor (TP) requires no minimum capital at all — so your entity choice strongly affects the up-front cost.',
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'Company registration process', href: '/process' },
      { label: 'Documents required', href: '/documents' },
      { label: 'Company taxes in North Macedonia', href: '/taxes' },
      { label: 'PDOO — the €1 company', href: '/pdoo' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Want an itemized quote?',
    ctaText:
      'For a precise, itemized quote, we will help you connect with a verified registration expert from the Nexa ecosystem who can review your case.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'Трошоци',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Трошоци за регистрација на фирма во Северна Македонија',
    tldr:
      'Трошокот за регистрација на фирма во Македонија се состои од повеќе ставки, а не од една такса: такса на Централниот регистар/Едношалтер, нотарски трошоци, печат, отворање банкарска сметка и — за странски основачи — превод и апостил. Одделно, ДОО/ДООЕЛ издвојува основачки влог од 5.000 евра, кој се ваши средства што го финансираат бизнисот и може да се уплати во рок од една година.',
    intro:
      'Колку чини регистрација на фирма во Македонија? Предвидете ги ставките подолу. Најголемата бројка — влогот од 5.000 евра за ДОО/ДООЕЛ — воопшто не е такса; тоа се ваши средства што остануваат во бизнисот.',
    sections: [
      {
        h: 'Од што се состои трошокот',
        table: {
          head: ['Ставка', 'Забелешка'],
          rows: [
            ['Такса Централен регистар / Едношалтер', 'Низок, фиксен административен трошок'],
            ['Нотарски трошоци', 'Зависат од влогот и бројот на документи'],
            ['Печат', 'Еднократно'],
            ['Отворање банкарска сметка', 'Зависно од банка'],
            ['Превод и апостил (странски документи)', 'Само за странски основачи/документи'],
            ['Хонорар адвокат/агент', 'Опционално, но препорачано'],
            ['Основачки влог (ДОО/ДООЕЛ)', '5.000 € — ваши средства, со рок од 1 година'],
          ],
        },
      },
      {
        h: 'Влогот не е такса',
        body:
          'За ДОО или ДООЕЛ минималниот основачки влог е 5.000 евра (во денарска противвредност). Не морате да го уплатите целиот пред да постои фирмата: може во пари или во предмети и права, и во рок од една година од регистрацијата. Поедноставеното ДОО (ПДОО) бара само 1 евро, а трговецот поединец (ТП) не бара минимален влог — па изборот на форма силно влијае на почетниот трошок.',
      },
    ],
    faq: [
      {
        q: 'Колку чини регистрација на фирма во Северна Македонија?',
        a: 'Вкупниот трошок се состои од повеќе ставки — такса на Централниот регистар/Едношалтер, нотарски трошоци, печат, отворање сметка и (за странци) превод и апостил — а не една такса. Одделно, ДОО/ДООЕЛ издвојува 5.000 евра влог, кој се ваши средства и може да се уплати во рок од една година.',
      },
      {
        q: 'Дали 5.000 евра е такса?',
        a: 'Не. Минималниот влог од 5.000 евра за ДОО/ДООЕЛ се ваши средства што го капитализираат бизнисот, не такса. Може во пари или во предмети и права, во рок од една година.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'Постапка за регистрација', href: '/process' },
      { label: 'Потребни документи', href: '/documents' },
      { label: 'Даноци за фирмите', href: '/taxes' },
      { label: 'ПДОО — фирма за 1 евро', href: '/pdoo' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Сакате детална понуда?',
    ctaText:
      'За прецизна понуда по ставки, ќе ви помогнеме да се поврзете со верифициран експерт од Nexa екосистемот кој ќе го разгледа вашиот случај.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'Cost to Register a Company'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
