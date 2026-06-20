import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema, SITE_URL } from '@/lib/seo';

const PATH = '/process';

export const metadata = pageMetadata({
  path: PATH,
  title: 'How to Register a Company in North Macedonia: Step-by-Step (2026)',
  description:
    'The company registration process in North Macedonia, step by step: choose a legal form, reserve a name, notarize founding documents, file with the Central Registry One-Stop-Shop, get your tax number.',
  keywords:
    'company registration process North Macedonia, how to register a company Macedonia, company formation steps, постапка регистрација фирма, Едношалтерски систем',
});

const STEPS = [
  {
    title: 'Choose legal form and capital',
    action:
      'Decide between TP, DOOEL, DOO, PDOO, or AD, and decide whether your capital contribution will be in cash or in kind.',
  },
  {
    title: 'Reserve company name and activity code',
    action:
      'Your company name must be unique and not misleading; it can be checked and reserved through the Central Registry. You also select your principal activity code from the National Classification of Activities (NKD) maintained by the State Statistical Office.',
  },
  {
    title: 'Prepare and notarize founding documents',
    action:
      'For a DOO this is the Articles of Incorporation (founding agreement); for a DOOEL it is the founding statement. You also prepare the decision appointing the manager and the statutory statements required under the Company Law. Documents are notarized.',
  },
  {
    title: 'Submit to the Central Registry (One-Stop-Shop)',
    action:
      'Documents are filed electronically with the Central Registry. The One-Stop-Shop System coordinates registration and the issuance of your tax number in one process.',
  },
  {
    title: 'Receive your registration decision and tax number',
    action:
      'The Central Registry reviews the application and, on approval, issues the registration decision and assigns your Unique Identification Number (EDB), the tax number you will use for all financial and legal operations.',
  },
  {
    title: 'Company seal and bank account',
    action:
      'After registration you produce the company seal and open a corporate bank account. The manager generally must appear in person at the bank to finalize the account.',
  },
];

const enFaq = [
  {
    q: 'How do I register a company in North Macedonia?',
    a: 'Choose a legal form and capital, reserve a unique name and activity code, notarize the founding documents, file electronically with the Central Registry’s One-Stop-Shop System, receive your registration decision and tax number (EDB), then produce a seal and open a bank account.',
  },
  {
    q: 'Where is a company registered in North Macedonia?',
    a: 'At the Central Registry of the Republic of North Macedonia, through its One-Stop-Shop System, which also issues your tax number (EDB).',
  },
  {
    q: 'How long does the process take?',
    a: 'The Central Registry usually issues its decision within five business days, and in straightforward cases within 24–48 hours.',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'Process',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Company Registration Process in North Macedonia',
    tldr:
      'Company formation in North Macedonia is coordinated by the Central Registry’s One-Stop-Shop System and runs in six steps: choose a legal form and capital, reserve a name and activity code, notarize the founding documents, file electronically, receive your registration decision and tax number (EDB), then produce a seal and open a bank account. A decision usually arrives within five business days.',
    intro:
      'This is the step-by-step process of opening a business in Macedonia, from picking an entity to a working bank account. Registration is coordinated by the Central Registry of the Republic of North Macedonia through its One-Stop-Shop System.',
    sections: [
      {
        h: 'The six steps',
        bullets: STEPS.map((s, i) => `${i + 1}. ${s.title} — ${s.action}`),
      },
      {
        h: 'How long it takes',
        body:
          'Once a complete set of documents is submitted, the Central Registry typically issues its decision within five business days, and in straightforward cases within 24 to 48 hours. From first consultation to a fully operational company — including the seal, a permanent bank account, and any initial VAT or employee registration — allow one to two weeks.',
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'Documents required', href: '/documents' },
      { label: 'Cost to register a company', href: '/cost' },
      { label: 'How long registration takes', href: '/timeline' },
      { label: 'Choose an entity: DOO', href: '/doo' },
      { label: 'Registering a company as a foreigner', href: '/for-foreigners' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Ready to start the process?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who runs the Central Registry process end to end and will reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'Процес',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Постапка за регистрација на фирма во Северна Македонија',
    tldr:
      'Основањето фирма во Северна Македонија го координира Едношалтерскиот систем на Централниот регистар и тече во шест чекори: избор на правна форма и влог, резервирање име и шифра на дејност, заверка на основачките документи, електронско поднесување, добивање решение и даночен број (ЕДБ), па изработка на печат и отворање банкарска сметка. Решението обично пристигнува во рок од пет работни дена.',
    intro:
      'Ова е постапката чекор по чекор за отворање бизнис во Македонија, од избор на форма до функционална банкарска сметка. Регистрацијата ја координира Централниот регистар на Република Северна Македонија преку Едношалтерскиот систем.',
    sections: [
      {
        h: 'Шесте чекори',
        bullets: [
          '1. Избор на правна форма и влог — Одлучете меѓу ТП, ДООЕЛ, ДОО, ПДОО или АД и дали влогот ќе биде во пари или во предмети и права.',
          '2. Резервирање име и шифра на дејност — Името мора да биде уникатно и да не доведува во заблуда; се проверува и резервира во Централниот регистар. Ја избирате и главната дејност според НКД.',
          '3. Подготовка и заверка на основачките документи — За ДОО тоа е договорот за основање; за ДООЕЛ изјавата за основање, заедно со одлуката за управител и законските изјави по ЗТД. Документите се заверуваат на нотар.',
          '4. Поднесување до Централниот регистар (Едношалтер) — Документите се поднесуваат електронски; Едношалтерскиот систем ја координира регистрацијата и издавањето на даночниот број.',
          '5. Решение за регистрација и даночен број — По одобрување, се издава решение и се доделува ЕДБ, даночниот број за сите финансиски и правни операции.',
          '6. Печат и банкарска сметка — Се изработува печатот и се отвора деловна сметка; управителот по правило лично се појавува во банката.',
        ],
      },
      {
        h: 'Колку трае',
        body:
          'Откако ќе се поднесе комплетна документација, Централниот регистар обично носи решение во рок од пет работни дена, а во едноставни случаи за 24 до 48 часа. Од првата консултација до целосно оперативна фирма — со печат, постојана сметка и евентуална почетна регистрација за ДДВ или вработени — предвидете една до две недели.',
      },
    ],
    faq: [
      {
        q: 'Како да регистрирам фирма во Северна Македонија?',
        a: 'Изберете правна форма и влог, резервирајте уникатно име и шифра на дејност, заверете ги основачките документи, поднесете електронски до Едношалтерскиот систем на Централниот регистар, добијте решение и даночен број (ЕДБ), па изработете печат и отворете банкарска сметка.',
      },
      {
        q: 'Каде се регистрира фирмата?',
        a: 'Во Централниот регистар на Република Северна Македонија, преку Едношалтерскиот систем, кој го издава и даночниот број (ЕДБ).',
      },
      {
        q: 'Колку трае постапката?',
        a: 'Централниот регистар обично носи решение во рок од пет работни дена, а во едноставни случаи за 24–48 часа.',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'Потребни документи', href: '/documents' },
      { label: 'Колку чини регистрација', href: '/cost' },
      { label: 'Колку трае регистрацијата', href: '/timeline' },
      { label: 'Изберете форма: ДОО', href: '/doo' },
      { label: 'Отворање фирма за странци', href: '/for-foreigners' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Подготвени да започнете?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој ја води постапката во Централниот регистар од почеток до крај и ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to register a company in North Macedonia',
  description: 'Step-by-step procedure through the Central Registry’s One-Stop-Shop System.',
  totalTime: 'P5D',
  inLanguage: 'en',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${PATH}` },
  step: STEPS.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.action,
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'Registration Process'),
          howToSchema,
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
