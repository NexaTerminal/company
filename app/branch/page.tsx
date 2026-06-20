import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/branch';

export const metadata = pageMetadata({
  path: PATH,
  title: 'Open a Branch or Representative Office in North Macedonia (2026)',
  description:
    'How a foreign company can open a branch (podružnica) or representative office (pretstavništvo) in North Macedonia — what each can do, and how they differ from a subsidiary.',
  keywords:
    'branch North Macedonia, representative office Macedonia, podružnica, pretstavništvo, foreign company branch registration',
});

const enFaq = [
  {
    q: 'What is the difference between a branch and a representative office?',
    a: 'A branch (podružnica) is not a separate legal entity but can conduct commercial activity. A representative office (pretstavništvo) is limited to market research and promotion and cannot trade.',
  },
  {
    q: 'Is a branch a separate company?',
    a: 'No. A branch is not a separate legal entity — the foreign parent company remains liable for its obligations. If you want a separate Macedonian legal entity, register a DOO or DOOEL instead.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'Branch & Rep Office',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Branch & Representative Office in North Macedonia',
    tldr:
      'A foreign company can enter North Macedonia by registering a branch (podružnica) — not a separate legal entity, but able to conduct commercial activity — or a representative office (pretstavništvo), which is limited to market research and promotion and cannot trade. If you need a separate Macedonian legal entity, a DOO or DOOEL is the alternative.',
    intro:
      'For an existing foreign company, opening a branch or representative office is often the fastest way into the Macedonian market without forming a new company. Here is what each can do and how they compare to a subsidiary.',
    sections: [
      {
        h: 'Branch vs representative office',
        body:
          'A foreign company can register a branch (podružnica), which is not a separate legal entity but can conduct commercial activity, or a representative office (pretstavništvo), which is limited to market research and promotion and cannot trade.',
      },
      {
        h: 'Which one fits your goal?',
        bullets: [
          'Choose a branch if you want to trade and invoice in North Macedonia under the foreign parent, without creating a separate entity.',
          'Choose a representative office if you only need a local presence for market research, promotion, and liaison — no commercial trading.',
          'Choose a DOO or DOOEL if you want a separate Macedonian legal entity with its own limited liability.',
        ],
      },
      {
        h: 'Documents for a foreign parent',
        body:
          'Foreign documents must generally be notarized and apostilled (unless a bilateral treaty waives this) and translated into Macedonian by a certified translator. An extract from the parent company’s commercial register is typically required.',
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'DOO — set up a Macedonian subsidiary', href: '/doo' },
      { label: 'Registering a company as a foreigner', href: '/for-foreigners' },
      { label: 'Documents required', href: '/documents' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Entering the market from abroad?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who handles branches, representative offices, and subsidiaries, with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'Подружница и претставништво',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Подружница и претставништво во Северна Македонија',
    tldr:
      'Странска компанија може да влезе во Северна Македонија со регистрација на подружница — која не е посебно правно лице, но може да врши комерцијална дејност — или претставништво, кое е ограничено на истражување на пазарот и промоција и не може да тргува. Ако ви треба посебно македонско правно лице, алтернатива е ДОО или ДООЕЛ.',
    intro:
      'За постоечка странска компанија, отворањето подружница или претставништво е често најбрзиот влез на македонскиот пазар без основање нова фирма. Еве што може секоја и како се споредуваат со подружница (subsidiary).',
    sections: [
      {
        h: 'Подружница наспроти претставништво',
        body:
          'Странска компанија може да регистрира подружница, која не е посебно правно лице но може да врши комерцијална дејност, или претставништво, кое е ограничено на истражување на пазарот и промоција и не може да тргува.',
      },
      {
        h: 'Која одговара на вашата цел?',
        bullets: [
          'Изберете подружница ако сакате да тргувате и фактурирате во Северна Македонија под странската матка, без посебно правно лице.',
          'Изберете претставништво ако ви треба само локално присуство за истражување, промоција и поврзување — без комерцијална трговија.',
          'Изберете ДОО или ДООЕЛ ако сакате посебно македонско правно лице со сопствена ограничена одговорност.',
        ],
      },
      {
        h: 'Документи за странска матка',
        body:
          'Странските документи по правило мора да бидат заверени на нотар и апостилирани (освен ако билатерален договор не го укинува тоа) и преведени на македонски од овластен преведувач. Обично е потребен извод од трговскиот регистар на матичното друштво.',
      },
    ],
    faq: [
      {
        q: 'Која е разликата помеѓу подружница и претставништво?',
        a: 'Подружницата не е посебно правно лице но може да врши комерцијална дејност. Претставништвото е ограничено на истражување на пазарот и промоција и не може да тргува.',
      },
      {
        q: 'Дали подружницата е посебна фирма?',
        a: 'Не. Подружницата не е посебно правно лице — странската матка останува одговорна за обврските. Ако сакате посебно македонско правно лице, регистрирајте ДОО или ДООЕЛ.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'ДОО — основајте македонска подружница (subsidiary)', href: '/doo' },
      { label: 'Отворање фирма за странци', href: '/for-foreigners' },
      { label: 'Потребни документи', href: '/documents' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Влегувате на пазарот од странство?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој работи со подружници, претставништва и друштва, со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'Branch & Representative Office'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
