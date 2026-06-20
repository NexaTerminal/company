import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/doo';

export const metadata = pageMetadata({
  path: PATH,
  title: 'DOO Registration in North Macedonia: LLC Setup, Capital & Steps (2026)',
  description:
    'How to register a DOO (limited liability company) in North Macedonia: 2–50 founders, EUR 5,000 capital payable within a year, limited liability, and the steps to incorporate.',
  keywords:
    'DOO registration North Macedonia, register LLC Macedonia, limited liability company Macedonia, друштво со ограничена одговорност, ДОО регистрација',
});

const enFaq = [
  {
    q: 'What is a DOO in North Macedonia?',
    a: 'A DOO (Друштво со ограничена одговорност) is a limited liability company — the most common business form in North Macedonia. It can have between 2 and 50 founders, who may be individuals or legal entities, domestic or foreign, with liability limited to each member’s capital contribution.',
  },
  {
    q: 'How much capital do I need to register a DOO?',
    a: 'The minimum share capital is EUR 5,000 (in denar equivalent). You do not have to deposit it all up front — it can be paid in cash or in kind and may be paid within one year of registration.',
  },
  {
    q: 'Can a foreigner register a DOO in Macedonia?',
    a: 'Yes. Foreign individuals and companies can own and manage a DOO 100%, with no residency requirement. Foreign documents must be notarized, apostilled, and translated into Macedonian.',
  },
  {
    q: 'What is the difference between a DOO and a DOOEL?',
    a: 'A DOO has between two and fifty founders; a DOOEL is the single-member version with exactly one founder. Both require EUR 5,000 minimum capital and both limit liability to the amount contributed.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'DOO (LLC)',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'How to Register a DOO (LLC) in North Macedonia',
    tldr:
      'A DOO is the limited liability company used by most businesses in North Macedonia. It can have 2 to 50 founders (individuals or companies, domestic or foreign), requires EUR 5,000 minimum share capital that can be paid within one year, and limits each member’s liability to their contribution. Registration runs through the Central Registry’s One-Stop-Shop System and a decision usually arrives within 5 business days.',
    intro:
      'The DOO (друштво со ограничена одговорност) is the workhorse of company registration in North Macedonia. If you are weighing company formation options as an SME or a partnership, this is almost always the form you will compare first. Below is what a DOO is, what it costs to set up, and the steps to register one.',
    sections: [
      {
        h: 'What is a DOO?',
        body:
          'The most common choice for small and medium businesses. A DOO can have between 2 and 50 founders, who may be individuals or legal entities, domestic or foreign. Liability is limited to each member’s capital contribution. The minimum share capital is EUR 5,000, which may be contributed in cash or in kind and may be paid within one year of registration.',
      },
      {
        h: 'Minimum capital for a DOO',
        body:
          'For a DOO the minimum share capital is EUR 5,000 (in denar equivalent). An important practical point: you do not have to deposit the full amount before the company exists. The capital can be paid in cash or contributed in kind (equipment, vehicles, real estate), and the law allows it to be paid within one year of registration. In-kind contributions must be independently valued.',
      },
      {
        h: 'How a DOO compares to other entities',
        table: {
          head: ['Entity', 'Founders', 'Min. capital', 'Liability'],
          rows: [
            ['Limited Liability Company (DOO)', '2–50', 'EUR 5,000 (within 1 yr)', 'Limited to contribution'],
            ['Single-Member LLC (DOOEL)', '1', 'EUR 5,000 (within 1 yr)', 'Limited to contribution'],
            ['Simplified LLC (PDOO)', 'Up to 3 individuals', 'EUR 1', 'Limited (with mandatory reserve)'],
            ['Sole Proprietor (TP)', '1 individual', 'None', 'Unlimited (personal)'],
          ],
        },
      },
      {
        h: 'Steps to register a DOO',
        bullets: [
          'Choose the legal form and decide whether your capital contribution will be in cash or in kind.',
          'Reserve a unique company name and select your principal activity code (NKD) at the Central Registry.',
          'Prepare and notarize the founding agreement, the decision appointing the manager, and the statutory statements under the Law on Trade Companies.',
          'Submit the documents electronically to the Central Registry through the One-Stop-Shop System.',
          'Receive your registration decision and tax number (EDB).',
          'Produce the company seal and open a corporate bank account.',
        ],
      },
      {
        h: 'Documents required for a DOO',
        bullets: [
          'Founding agreement (DOO) or founding statement (DOOEL)',
          'Copies of the ID card or passport of each founder',
          'For a corporate founder: extract from its commercial register (apostilled and translated for foreign entities)',
          'Proof of the share-capital payment (or the agreement to pay within one year)',
          'Valuation report and contribution agreement for any in-kind contribution',
          'Decision appointing the manager',
          'Statutory statements required of the manager and founders under the Company Law',
        ],
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'DOOEL — single-member LLC', href: '/dooel' },
      { label: 'Register an LLC in North Macedonia (DOO vs DOOEL)', href: '/llc-registration' },
      { label: 'Cost to register a company', href: '/cost' },
      { label: 'Company registration process, step by step', href: '/process' },
      { label: 'Registering a company as a foreigner', href: '/for-foreigners' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Ready to register your DOO?',
    ctaText:
      'We will help you connect with a verified expert from the Nexa ecosystem — lawyers, accountants, and registration agents who incorporate DOO companies — who will reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'ДОО',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Како да регистрирате ДОО во Северна Македонија',
    tldr:
      'ДОО е друштвото со ограничена одговорност што го користат повеќето бизниси во Северна Македонија. Може да има од 2 до 50 основачи (физички или правни лица, домашни или странски), бара минимален основачки влог од 5.000 евра што може да се уплати во рок од една година, и ја ограничува одговорноста на секој член до висината на влогот. Регистрацијата се врши преку Едношалтерскиот систем на Централниот регистар, а решението обично пристигнува во рок од 5 работни дена.',
    intro:
      'ДОО (друштво со ограничена одговорност) е најчестата форма за регистрација на фирма во Северна Македонија. Ако разгледувате опции за основање како мал или среден бизнис или партнерство, ова е речиси секогаш првата форма што ќе ја споредите. Подолу е што е ДОО, колку чини да се основа и чекорите за регистрација.',
    sections: [
      {
        h: 'Што е ДОО?',
        body:
          'Најчест избор за мали и средни бизниси. ДОО може да има од 2 до 50 основачи, физички или правни лица, домашни или странски. Одговорноста е ограничена до висината на влогот на секој член. Минималниот основачки влог е 5.000 евра, во пари или во предмети и права, и може да се уплати во рок од една година од регистрацијата.',
      },
      {
        h: 'Минимален влог за ДОО',
        body:
          'За ДОО минималниот основачки влог е 5.000 евра (во денарска противвредност). Важна практична работа: не морате да го уплатите целиот износ пред да постои фирмата. Влогот може да биде во пари или во предмети и права (опрема, возила, недвижности) и законот дозволува да се уплати во рок од една година од регистрацијата. Непаричните влогови мора да се проценат од независен проценувач.',
      },
      {
        h: 'Споредба на ДОО со други форми',
        table: {
          head: ['Друштво', 'Основачи', 'Мин. влог', 'Одговорност'],
          rows: [
            ['ДОО', '2–50', '5.000 € (во рок од 1 год.)', 'Ограничена до влогот'],
            ['ДООЕЛ', '1', '5.000 € (во рок од 1 год.)', 'Ограничена до влогот'],
            ['ПДОО', 'До 3 физички лица', '1 €', 'Ограничена (со задолжителна резерва)'],
            ['Трговец поединец (ТП)', '1 физичко лице', 'Нема', 'Неограничена (лична)'],
          ],
        },
      },
      {
        h: 'Чекори за регистрација на ДОО',
        bullets: [
          'Изберете ја правната форма и одлучете дали влогот ќе биде во пари или во предмети и права.',
          'Резервирајте уникатно име на фирмата и изберете ја главната дејност (НКД) во Централниот регистар.',
          'Подгответе и заверете го договорот за основање, одлуката за избор на управител и законските изјави по ЗТД.',
          'Поднесете ги документите електронски до Централниот регистар преку Едношалтерскиот систем.',
          'Добијте решение за регистрација и даночен број (ЕДБ).',
          'Изработете печат и отворете деловна банкарска сметка.',
        ],
      },
      {
        h: 'Потребни документи за ДОО',
        bullets: [
          'Договор за основање (ДОО) или изјава за основање (ДООЕЛ)',
          'Копија од лична карта или пасош за секој основач',
          'За основач правно лице: извод од трговскиот регистар (апостилиран и преведен за странски лица)',
          'Доказ за уплата на основачкиот влог (или договор за уплата во рок од една година)',
          'Извештај за проценка и договор за непаричен влог',
          'Одлука за избор на управител',
          'Законски изјави на управителот и основачите по ЗТД',
        ],
      },
    ],
    faq: [
      {
        q: 'Што е ДОО во Северна Македонија?',
        a: 'ДОО (друштво со ограничена одговорност) е најчестата форма на фирма во Северна Македонија. Може да има од 2 до 50 основачи, физички или правни лица, домашни или странски, со одговорност ограничена до висината на влогот на секој член.',
      },
      {
        q: 'Колкав влог е потребен за регистрација на ДОО?',
        a: 'Минималниот основачки влог е 5.000 евра (во денарска противвредност). Не мора да го уплатите целиот веднаш — може во пари или во предмети и права, и во рок од една година од регистрацијата.',
      },
      {
        q: 'Може ли странец да регистрира ДОО во Македонија?',
        a: 'Да. Странски физички и правни лица можат целосно да поседуваат и управуваат ДОО, без обврска за престој. Странските документи мора да бидат заверени, апостилирани и преведени на македонски.',
      },
      {
        q: 'Која е разликата помеѓу ДОО и ДООЕЛ?',
        a: 'ДОО има од два до педесет основачи; ДООЕЛ е верзијата со еден основач. И двете бараат 5.000 евра минимален влог и ја ограничуваат одговорноста до висината на влогот.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'ДООЕЛ — друштво на едно лице', href: '/dooel' },
      { label: 'Регистрација на ДОО/ДООЕЛ (LLC) во Македонија', href: '/llc-registration' },
      { label: 'Колку чини регистрација на фирма', href: '/cost' },
      { label: 'Постапка за регистрација, чекор по чекор', href: '/process' },
      { label: 'Отворање фирма за странци', href: '/for-foreigners' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Подготвени да регистрирате ДОО?',
    ctaText:
      'Ќе ви помогнеме да се поврзете со верифициран експерт од Nexa екосистемот — адвокати, сметководители и агенти за регистрација кои основаат ДОО — кој ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'DOO Registration'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
