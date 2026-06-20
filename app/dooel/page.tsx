import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/dooel';

export const metadata = pageMetadata({
  path: PATH,
  title: 'DOOEL Registration in North Macedonia: Single-Member LLC (2026)',
  description:
    'How to register a DOOEL (single-member LLC) in North Macedonia: one founder, EUR 5,000 capital payable within a year, full limited liability. The typical solo-entrepreneur structure.',
  keywords:
    'DOOEL registration North Macedonia, single member LLC Macedonia, регистрација на ДООЕЛ, друштво на едно лице',
});

const enFaq = [
  {
    q: 'What is a DOOEL?',
    a: 'A DOOEL (Друштво со ограничена одговорност на едно лице) is a single-member limited liability company — a DOO with exactly one founder. It carries the same EUR 5,000 minimum capital and the same limited-liability protection.',
  },
  {
    q: 'How much capital does a DOOEL need?',
    a: 'EUR 5,000 minimum share capital, the same as a DOO, payable in cash or in kind within one year of registration.',
  },
  {
    q: 'Can one person own a company in North Macedonia?',
    a: 'Yes — the DOOEL exists precisely for this. A single individual or a single legal entity can found and own the whole company while keeping liability limited to the capital contributed.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'DOOEL',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Register a DOOEL (Single-Member LLC) in North Macedonia',
    tldr:
      'A DOOEL is a single-member limited liability company — a DOO with exactly one founder. It requires the same EUR 5,000 minimum capital (payable within a year, in cash or in kind) and gives the same limited-liability protection. It is the standard structure for a solo entrepreneur or a wholly-owned subsidiary, and foreigners can own one 100% with no residency requirement.',
    intro:
      'If you are a single founder, the DOOEL is the form you will most often choose for company registration in North Macedonia. It is the one-person version of the DOO and works the same way in nearly every respect.',
    sections: [
      {
        h: 'What is a DOOEL?',
        body:
          'A DOO with exactly one founder. It carries the same EUR 5,000 minimum capital and the same limited-liability protection. This is the typical structure for a solo entrepreneur or a wholly-owned subsidiary.',
      },
      {
        h: 'Minimum capital and liability',
        body:
          'The minimum share capital is EUR 5,000 (in denar equivalent), which can be paid in cash or in kind and may be paid within one year of registration. Your liability as the sole member is limited to your contribution — your personal assets are protected, unlike a sole proprietor (TP) who is personally liable with their entire estate.',
      },
      {
        h: 'Steps to register a DOOEL',
        bullets: [
          'Decide on your capital contribution (cash or in kind) and reserve a unique company name plus activity code (NKD).',
          'Prepare and notarize the founding statement (izjava za osnovanje), the decision appointing the manager, and the statutory statements under the Law on Trade Companies.',
          'File electronically with the Central Registry through the One-Stop-Shop System.',
          'Receive your registration decision and tax number (EDB), then produce the seal and open a bank account.',
        ],
      },
      {
        h: 'Documents required for a DOOEL',
        bullets: [
          'Founding statement (izjava za osnovanje)',
          'Copy of the ID card or passport of the founder',
          'For a corporate founder: extract from its commercial register (apostilled and translated for foreign entities)',
          'Proof of the share-capital payment (or the agreement to pay within one year)',
          'Decision appointing the manager and the statutory statements under the Company Law',
        ],
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'DOO — multi-member LLC', href: '/doo' },
      { label: 'Register an LLC in North Macedonia (DOO vs DOOEL)', href: '/llc-registration' },
      { label: 'Cost to register a company', href: '/cost' },
      { label: 'Registering a company as a foreigner', href: '/for-foreigners' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Ready to register your DOOEL?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who incorporates single-member companies and will reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'ДООЕЛ',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Регистрирајте ДООЕЛ (друштво на едно лице) во Северна Македонија',
    tldr:
      'ДООЕЛ е друштво со ограничена одговорност на едно лице — ДОО со само еден основач. Бара ист минимален влог од 5.000 евра (со рок од една година, во пари или во предмети и права) и дава иста заштита со ограничена одговорност. Тоа е стандардната структура за самостоен претприемач или друштво во целосна сопственост, а странците можат целосно да го поседуваат без обврска за престој.',
    intro:
      'Ако сте единствен основач, ДООЕЛ е формата што најчесто ќе ја изберете за регистрација на фирма во Северна Македонија. Тоа е верзијата на ДОО за едно лице и функционира исто во речиси сите аспекти.',
    sections: [
      {
        h: 'Што е ДООЕЛ?',
        body:
          'ДОО со само еден основач. Има ист минимален влог од 5.000 евра и иста заштита со ограничена одговорност. Ова е типичната структура за претприемач кој работи сам или за друштво во целосна сопственост на едно лице.',
      },
      {
        h: 'Минимален влог и одговорност',
        body:
          'Минималниот основачки влог е 5.000 евра (во денарска противвредност), во пари или во предмети и права, и може да се уплати во рок од една година. Вашата одговорност како единствен член е ограничена до висината на влогот — личниот имот е заштитен, за разлика од трговец поединец (ТП) кој одговара со целиот свој имот.',
      },
      {
        h: 'Чекори за регистрација на ДООЕЛ',
        bullets: [
          'Одлучете за влогот (во пари или во предмети и права) и резервирајте уникатно име и шифра на дејност (НКД).',
          'Подгответе и заверете изјава за основање, одлука за избор на управител и законските изјави по ЗТД.',
          'Поднесете електронски до Централниот регистар преку Едношалтерскиот систем.',
          'Добијте решение и даночен број (ЕДБ), изработете печат и отворете банкарска сметка.',
        ],
      },
      {
        h: 'Потребни документи за ДООЕЛ',
        bullets: [
          'Изјава за основање',
          'Копија од лична карта или пасош на основачот',
          'За основач правно лице: извод од трговскиот регистар (апостилиран и преведен за странски лица)',
          'Доказ за уплата на влогот (или договор за уплата во рок од една година)',
          'Одлука за избор на управител и законските изјави по ЗТД',
        ],
      },
    ],
    faq: [
      {
        q: 'Што е ДООЕЛ?',
        a: 'ДООЕЛ (друштво со ограничена одговорност на едно лице) е ДОО со само еден основач. Има ист минимален влог од 5.000 евра и иста заштита со ограничена одговорност.',
      },
      {
        q: 'Колкав влог бара ДООЕЛ?',
        a: 'Минимален влог од 5.000 евра, исто како ДОО, во пари или во предмети и права, со рок од една година од регистрацијата.',
      },
      {
        q: 'Може ли едно лице да поседува фирма во Македонија?',
        a: 'Да — ДООЕЛ постои токму за тоа. Едно физичко или правно лице може да основа и поседува цела фирма, со одговорност ограничена до висината на влогот.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'ДОО — друштво со повеќе основачи', href: '/doo' },
      { label: 'Регистрација на ДОО/ДООЕЛ (LLC)', href: '/llc-registration' },
      { label: 'Колку чини регистрација на фирма', href: '/cost' },
      { label: 'Отворање фирма за странци', href: '/for-foreigners' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Подготвени да регистрирате ДООЕЛ?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој основа друштва на едно лице и ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'DOOEL Registration'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
