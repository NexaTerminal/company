import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/llc-registration';

export const metadata = pageMetadata({
  path: PATH,
  title: 'Register an LLC in North Macedonia: DOO vs DOOEL (2026)',
  description:
    'Registration of an LLC in Macedonia: an LLC is a DOO (multi-member) or DOOEL (single-member). EUR 5,000 capital payable within a year, limited liability, 100% foreign ownership.',
  keywords:
    'register an LLC North Macedonia, LLC registration Macedonia, registration of an LLC in Macedonia, DOO DOOEL, LLC formation Macedonia',
});

const enFaq = [
  {
    q: 'What is an LLC called in North Macedonia?',
    a: 'A limited liability company (LLC) in North Macedonia is a DOO when it has two or more members, or a DOOEL when it has a single member. Both give limited liability and require EUR 5,000 minimum capital.',
  },
  {
    q: 'How do I register an LLC in Macedonia?',
    a: 'Choose between a DOO (2–50 founders) and a DOOEL (one founder), reserve a name and activity code, notarize the founding documents, file with the Central Registry’s One-Stop-Shop System, and receive your registration decision and tax number. A decision usually arrives within five business days.',
  },
  {
    q: 'How much does it cost to register an LLC in North Macedonia?',
    a: 'Beyond administrative and notary fees, an LLC commits EUR 5,000 in share capital — your own money funding the business, payable within one year of registration.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'LLC Registration',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'How to Register an LLC in North Macedonia',
    tldr:
      'In North Macedonia, a limited liability company (LLC) is registered as a DOO (two to fifty members) or a DOOEL (a single member). Both require EUR 5,000 minimum share capital — payable within one year, in cash or in kind — and both limit liability to your contribution. Foreigners can own an LLC 100% with no residency requirement, and registration runs through the Central Registry’s One-Stop-Shop System.',
    intro:
      'If you searched for the registration of an LLC in Macedonia, you are looking for one of two forms: the DOO or the DOOEL. This page explains the difference and points you to the full guide for each.',
    sections: [
      {
        h: 'An LLC in Macedonia = DOO or DOOEL',
        body:
          'There is no entity literally called “LLC” in Macedonian law — the limited liability company is the DOO (друштво со ограничена одговорност). When it has a single founder it is a DOOEL (single-member LLC). Both forms give you limited liability, require EUR 5,000 minimum capital, and are the most common choice for LLC formation in Macedonia.',
      },
      {
        h: 'DOO vs DOOEL at a glance',
        table: {
          head: ['Form', 'Founders', 'Min. capital', 'Liability'],
          rows: [
            ['DOO (multi-member LLC)', '2–50', 'EUR 5,000 (within 1 yr)', 'Limited to contribution'],
            ['DOOEL (single-member LLC)', '1', 'EUR 5,000 (within 1 yr)', 'Limited to contribution'],
          ],
        },
      },
      {
        h: 'Which LLC should you register?',
        bullets: [
          'Register a DOOEL if you are the sole founder — it is the single-member LLC.',
          'Register a DOO if you have between two and fifty founders, individuals or companies, domestic or foreign.',
          'If you want the lowest entry capital, look at the PDOO (the €1 simplified LLC) instead.',
        ],
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'DOO — multi-member LLC', href: '/doo' },
      { label: 'DOOEL — single-member LLC', href: '/dooel' },
      { label: 'PDOO — the €1 simplified LLC', href: '/pdoo' },
      { label: 'Cost to register a company', href: '/cost' },
      { label: 'Company registration process', href: '/process' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Ready to register your LLC?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who incorporates DOO and DOOEL companies and will reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'Регистрација на LLC',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Како да регистрирате LLC (ДОО/ДООЕЛ) во Северна Македонија',
    tldr:
      'Во Северна Македонија, друштвото со ограничена одговорност (LLC) се регистрира како ДОО (од два до педесет члена) или ДООЕЛ (еден член). И двете бараат минимален влог од 5.000 евра — со рок од една година, во пари или во предмети и права — и ја ограничуваат одговорноста до висината на влогот. Странците можат целосно да поседуваат без обврска за престој, а регистрацијата се врши преку Едношалтерскиот систем на Централниот регистар.',
    intro:
      'Ако баравте регистрација на LLC во Македонија, станува збор за една од две форми: ДОО или ДООЕЛ. Оваа страница ја објаснува разликата и ве упатува кон целосниот водич за секоја.',
    sections: [
      {
        h: 'LLC во Македонија = ДОО или ДООЕЛ',
        body:
          'Во македонското право нема ентитет буквално наречен „LLC“ — друштвото со ограничена одговорност е ДОО. Кога има еден основач, тоа е ДООЕЛ. И двете форми даваат ограничена одговорност, бараат 5.000 евра минимален влог и се најчестиот избор за основање LLC во Македонија.',
      },
      {
        h: 'ДОО наспроти ДООЕЛ накратко',
        table: {
          head: ['Форма', 'Основачи', 'Мин. влог', 'Одговорност'],
          rows: [
            ['ДОО (LLC со повеќе членови)', '2–50', '5.000 € (во рок од 1 год.)', 'Ограничена до влогот'],
            ['ДООЕЛ (LLC на едно лице)', '1', '5.000 € (во рок од 1 год.)', 'Ограничена до влогот'],
          ],
        },
      },
      {
        h: 'Кое LLC да го регистрирате?',
        bullets: [
          'Регистрирајте ДООЕЛ ако сте единствен основач — тоа е LLC на едно лице.',
          'Регистрирајте ДОО ако имате од два до педесет основачи, физички или правни лица, домашни или странски.',
          'Ако сакате најнизок влог, погледнете го ПДОО (поедноставено LLC за 1 евро).',
        ],
      },
    ],
    faq: [
      {
        q: 'Како се вика LLC во Северна Македонија?',
        a: 'Друштвото со ограничена одговорност (LLC) во Северна Македонија е ДОО кога има двајца или повеќе членови, или ДООЕЛ кога има еден член. И двете даваат ограничена одговорност и бараат 5.000 евра минимален влог.',
      },
      {
        q: 'Како да регистрирам LLC во Македонија?',
        a: 'Изберете меѓу ДОО (2–50 основачи) и ДООЕЛ (еден основач), резервирајте име и шифра на дејност, заверете ги основачките документи, поднесете до Едношалтерскиот систем на Централниот регистар и добијте решение и даночен број. Решението обично пристигнува во рок од пет работни дена.',
      },
      {
        q: 'Колку чини регистрација на LLC во Северна Македонија?',
        a: 'Освен административни и нотарски трошоци, LLC издвојува 5.000 евра влог — ваши средства што го финансираат бизнисот, со рок од една година од регистрацијата.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'ДОО — LLC со повеќе членови', href: '/doo' },
      { label: 'ДООЕЛ — LLC на едно лице', href: '/dooel' },
      { label: 'ПДОО — поедноставено LLC за 1 евро', href: '/pdoo' },
      { label: 'Колку чини регистрација', href: '/cost' },
      { label: 'Постапка за регистрација', href: '/process' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Подготвени да регистрирате LLC?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој основа ДОО и ДООЕЛ и ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'LLC Registration'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
