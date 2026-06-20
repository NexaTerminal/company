import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/for-foreigners';

export const metadata = pageMetadata({
  path: PATH,
  title: 'Company Formation in North Macedonia for Foreigners (2026)',
  description:
    'Registering a company in North Macedonia as a foreigner: 100% foreign ownership with no residency requirement, a residence permit through your company, and FDI registration.',
  keywords:
    'company formation North Macedonia for foreigners, foreign ownership company Macedonia, residence permit through company, странци отворање фирма',
});

const enFaq = [
  {
    q: 'Can a foreigner register a company in North Macedonia?',
    a: 'Yes. Foreign individuals and companies can own and manage a company 100%, with no residency requirement. Company directors may also apply for a residence permit on the basis of their role.',
  },
  {
    q: 'Can the company give me residence in North Macedonia?',
    a: 'Yes — directors may apply for a renewable residence permit based on their role, and family members may join under family reunification.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'For Foreigners',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Opening a Company in North Macedonia as a Foreigner',
    tldr:
      'Foreign nationals — individuals or legal entities — can own and manage a company in North Macedonia 100%, with no requirement to be a resident. Because directors may apply for a residence permit on the basis of their role, company formation can also be a route to legal residence. Where founders are foreign, the company is also recorded in the Foreign Direct Investment (FDI) register, normally as part of incorporation.',
    intro:
      'North Macedonia is genuinely open to foreign founders. This page covers the three things foreigners ask about most: ownership, residence, and FDI registration.',
    sections: [
      {
        h: '100% foreign ownership',
        body:
          'Foreign nationals — whether individuals or legal entities — can fully own and manage a company in North Macedonia, with no requirement to be a resident. Both founders and directors may be foreign.',
      },
      {
        h: 'Residence permit through your company',
        body:
          'Because company directors may apply for a residence permit on the basis of their role, forming a company can be a route to legal residence. Permits are typically issued for one year and are renewable, and family members may join under family reunification. This makes the DOO/DOOEL attractive not only for commercial expansion but also for relocation. See the dedicated immigration guide at immigration.mk.',
      },
      {
        h: 'Foreign Direct Investment (FDI) registration',
        body:
          'Where the founders are foreign, the company must also be recorded in the Foreign Direct Investment register. This is normally handled as part of the incorporation process. Foreign documents must be notarized, apostilled, and translated into Macedonian.',
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'Immigration to North Macedonia (residence permits)', href: 'https://immigration.mk' },
      { label: 'DOO — limited liability company', href: '/doo' },
      { label: 'DOOEL — single-member LLC', href: '/dooel' },
      { label: 'Documents required', href: '/documents' },
      { label: 'Company registration process', href: '/process' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Registering from abroad?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who handles foreign-owned incorporation and FDI registration, with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'За странци',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Отворање фирма во Северна Македонија за странци',
    tldr:
      'Странските државјани — физички или правни лица — можат целосно да поседуваат и управуваат фирма во Северна Македонија, без обврска да бидат резиденти. Бидејќи управителите можат да аплицираат за дозвола за престој врз основа на функцијата, основањето фирма може да биде и пат до законски престој. Кога основачите се странци, фирмата се запишува и во регистарот за странски директни инвестиции (СДИ), вообичаено како дел од основањето.',
    intro:
      'Северна Македонија е навистина отворена за странски основачи. Оваа страница ги покрива трите работи за кои странците најчесто прашуваат: сопственост, престој и регистрација на СДИ.',
    sections: [
      {
        h: 'Целосна странска сопственост',
        body:
          'Странските државјани — физички или правни лица — можат целосно да поседуваат и управуваат фирма во Македонија, без обврска да бидат резиденти. И основачите и управителите може да бидат странци.',
      },
      {
        h: 'Дозвола за престој преку вашата фирма',
        body:
          'Бидејќи управителите можат да аплицираат за дозвола за престој врз основа на својата функција, основањето фирма може да биде пат до законски престој. Дозволите обично се издаваат за една година и се обновливи, а членовите на семејството можат да се приклучат по основ на семејно обединување. Тоа го прави ДОО/ДООЕЛ привлечно не само за комерцијално проширување туку и за преселба. Погледнете го водичот за имиграција на immigration.mk.',
      },
      {
        h: 'Регистрација на странски директни инвестиции (СДИ)',
        body:
          'Кога основачите се странци, фирмата мора да се запише и во регистарот за странски директни инвестиции. Ова вообичаено се решава како дел од постапката за основање. Странските документи мора да бидат заверени, апостилирани и преведени на македонски.',
      },
    ],
    faq: [
      {
        q: 'Може ли странец да регистрира фирма во Македонија?',
        a: 'Да. Странски физички и правни лица можат целосно да поседуваат и управуваат фирма, без обврска за престој. Управителите можат да аплицираат и за дозвола за престој врз основа на функцијата.',
      },
      {
        q: 'Може ли фирмата да ми обезбеди престој во Македонија?',
        a: 'Да — управителите можат да аплицираат за обновлива дозвола за престој врз основа на функцијата, а членовите на семејството можат да се приклучат по основ на семејно обединување.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'Имиграција во Северна Македонија (дозволи за престој)', href: 'https://immigration.mk' },
      { label: 'ДОО — друштво со ограничена одговорност', href: '/doo' },
      { label: 'ДООЕЛ — друштво на едно лице', href: '/dooel' },
      { label: 'Потребни документи', href: '/documents' },
      { label: 'Постапка за регистрација', href: '/process' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Регистрирате од странство?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој работи со фирми во странска сопственост и СДИ регистрација, со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'Company Formation for Foreigners'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
