import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/documents';

export const metadata = pageMetadata({
  path: PATH,
  title: 'Documents to Register a Company in North Macedonia (2026 Checklist)',
  description:
    'The documents required to register a company in North Macedonia: founding act, ID/passport copies, manager appointment, statutory statements, and notarized/apostilled foreign documents.',
  keywords:
    'documents to register a company North Macedonia, company registration checklist, потребни документи фирма, founding act',
});

const enFaq = [
  {
    q: 'What documents do I need to register a company in North Macedonia?',
    a: 'For a DOO/DOOEL: the founding act, ID/passport copies, the manager appointment decision, statutory statements, and proof of (or commitment to) the capital. Foreign documents must be notarized, apostilled, and translated into Macedonian.',
  },
  {
    q: 'Do foreign documents need to be apostilled?',
    a: 'Yes. Foreign documents must generally be notarized and apostilled (unless a bilateral treaty waives this) and translated into Macedonian by a certified translator.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'Documents',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Documents Required to Register a Company in North Macedonia',
    tldr:
      'To register a DOO or DOOEL in North Macedonia you need the founding act, ID/passport copies of each founder, the decision appointing the manager, the statutory statements under the Company Law, and proof of (or a commitment to) the share-capital payment. A sole proprietor (TP) needs far less. Foreign documents must be notarized, apostilled, and translated into Macedonian.',
    intro:
      'Use this checklist to assemble the documents required for company registration in North Macedonia. What you need depends on your entity type and whether any founder is foreign.',
    sections: [
      {
        h: 'For a DOO or DOOEL',
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
      {
        h: 'For a sole proprietor (TP)',
        bullets: [
          'Application for registration',
          'Copy of the ID card or passport',
          'The required statutory statement',
        ],
      },
      {
        h: 'Foreign documents',
        body:
          'Foreign documents must generally be notarized and apostilled (unless a bilateral treaty waives this) and translated into Macedonian by a certified translator. Build extra time into your plan for translation and apostille if any founder or corporate parent is based abroad.',
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'Company registration process', href: '/process' },
      { label: 'Cost to register a company', href: '/cost' },
      { label: 'Registering a company as a foreigner', href: '/for-foreigners' },
      { label: 'DOO — limited liability company', href: '/doo' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Want your documents reviewed?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who can prepare and notarize your founding documents and reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'Документи',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Потребни документи за регистрација на фирма во Северна Македонија',
    tldr:
      'За регистрација на ДОО или ДООЕЛ во Северна Македонија ви требаат основачкиот акт, копии од лична карта/пасош за секој основач, одлуката за избор на управител, законските изјави по ЗТД и доказ за (или обврска за) уплата на влогот. Трговец поединец (ТП) бара многу помалку. Странските документи мора да бидат заверени, апостилирани и преведени на македонски.',
    intro:
      'Користете ја оваа листа за да ги соберете документите потребни за регистрација на фирма во Северна Македонија. Што ви треба зависи од формата и дали некој основач е странец.',
    sections: [
      {
        h: 'За ДОО или ДООЕЛ',
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
      {
        h: 'За трговец поединец (ТП)',
        bullets: [
          'Пријава за упис',
          'Копија од лична карта или пасош',
          'Потребната законска изјава',
        ],
      },
      {
        h: 'Странски документи',
        body:
          'Странските документи по правило мора да бидат заверени на нотар и апостилирани (освен ако билатерален договор не го укинува тоа) и преведени на македонски од овластен преведувач. Предвидете дополнително време за превод и апостил ако некој основач или матично друштво е во странство.',
      },
    ],
    faq: [
      {
        q: 'Кои документи ми се потребни за регистрација на фирма?',
        a: 'За ДОО/ДООЕЛ: основачки акт, копии од лична карта/пасош, одлука за управител, законски изјави и доказ за (или обврска за) влогот. Странските документи мора да бидат заверени, апостилирани и преведени на македонски.',
      },
      {
        q: 'Дали странските документи треба да бидат апостилирани?',
        a: 'Да. Странските документи по правило мора да бидат заверени и апостилирани (освен ако билатерален договор не го укинува тоа) и преведени на македонски од овластен преведувач.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'Постапка за регистрација', href: '/process' },
      { label: 'Колку чини регистрација', href: '/cost' },
      { label: 'Отворање фирма за странци', href: '/for-foreigners' },
      { label: 'ДОО — друштво со ограничена одговорност', href: '/doo' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Сакате преглед на документите?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој може да ги подготви и завери основачките документи и ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'Documents Required'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
