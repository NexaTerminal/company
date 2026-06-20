import GuidePage, { type GuideContent } from '@/components/GuidePage';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';

const PATH = '/pdoo';

export const metadata = pageMetadata({
  path: PATH,
  title: 'PDOO — The €1 Company in North Macedonia: How to Register (2026)',
  description:
    'The PDOO (simplified LLC) lets up to three founders open a company in North Macedonia for just EUR 1. Learn the mandatory reserve rule and how to register the “1-euro company”.',
  keywords:
    'PDOO North Macedonia, 1 euro company Macedonia, simplified LLC, поедноставено ДОО, фирма за 1 евро',
});

const enFaq = [
  {
    q: 'What is the “1-euro company” in North Macedonia?',
    a: 'It is the simplified LLC (PDOO), which can be founded with just EUR 1 by up to three individuals. In exchange it must set aside one quarter of its annual profit into a mandatory reserve until that reserve reaches the level of standard share capital.',
  },
  {
    q: 'Who can register a PDOO?',
    a: 'A PDOO can be founded by up to three individuals (natural persons), one of whom is the manager. It is designed to lower the barrier for first-time founders with little starting capital.',
  },
  {
    q: 'What is the catch with the PDOO mandatory reserve?',
    a: 'Because the entry capital is only EUR 1, the company must build a reserve by setting aside one quarter of its annual profit each year until the reserve reaches the level of standard share capital (EUR 5,000).',
  },
];

const content: GuideContent = {
  en: {
    crumb: 'PDOO (€1 company)',
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Register a PDOO (€1 Company) in North Macedonia',
    tldr:
      'The PDOO is a simplified limited liability company you can found in North Macedonia for just EUR 1, with up to three individual founders. In exchange for the low entry capital it must set aside a quarter of its annual profit into a mandatory reserve until that reserve reaches the level of standard share capital. It is designed to lower the barrier for first-time founders.',
    intro:
      'The PDOO — often called the “1-euro company” — is the lowest-capital way to register a company in North Macedonia. It suits first-time founders who want limited liability without committing EUR 5,000 up front.',
    sections: [
      {
        h: 'What is a PDOO?',
        body:
          'A simplified limited liability company can be founded by up to three individuals, one of whom is the manager. The minimum share capital is just EUR 1 (in denar equivalent), with a minimum nominal share of 10 cents. In exchange for the low entry capital, a PDOO must build a mandatory reserve by setting aside one quarter of its annual profit until the reserve reaches the level of standard share capital. It is designed to lower the barrier for first-time founders.',
      },
      {
        h: 'The mandatory reserve rule',
        body:
          'Because a PDOO starts with only EUR 1, the law requires it to retain one quarter of its annual profit in a mandatory reserve each year until that reserve reaches the level of standard share capital (EUR 5,000). Once it does, the company effectively operates like a standard DOO. This trade-off keeps the entry barrier low while still building real capital over time.',
      },
      {
        h: 'PDOO vs DOO / DOOEL',
        table: {
          head: ['Entity', 'Founders', 'Min. capital', 'Note'],
          rows: [
            ['Simplified LLC (PDOO)', 'Up to 3 individuals', 'EUR 1', 'Mandatory profit reserve until EUR 5,000'],
            ['Single-Member LLC (DOOEL)', '1', 'EUR 5,000 (within 1 yr)', 'No reserve requirement'],
            ['Limited Liability Company (DOO)', '2–50', 'EUR 5,000 (within 1 yr)', 'No reserve requirement'],
          ],
        },
      },
    ],
    faq: enFaq,
    relatedTitle: 'Related guides',
    related: [
      { label: 'DOO — standard LLC', href: '/doo' },
      { label: 'DOOEL — single-member LLC', href: '/dooel' },
      { label: 'Cost to register a company', href: '/cost' },
      { label: 'Company registration process', href: '/process' },
      { label: 'Back to the full company registration guide', href: '/' },
    ],
    ctaTitle: 'Want to start with a PDOO?',
    ctaText:
      'We will connect you with a verified expert from the Nexa ecosystem who can set up your simplified LLC and reply with a clear, fixed-fee quote.',
    ctaButton: 'Connect with a company registration expert',
  },
  mk: {
    crumb: 'ПДОО',
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Регистрирајте ПДОО („фирма за 1 евро“) во Северна Македонија',
    tldr:
      'ПДОО е поедноставено друштво со ограничена одговорност што можете да го основате во Северна Македонија за само 1 евро, со најмногу тројца основачи (физички лица). Како замена за нискиот влог, мора да издвојува една четвртина од годишната добивка во задолжителна резерва додека таа не го достигне нивото на стандарден основачки капитал. Целта е да се намали бариерата за првите претприемачи.',
    intro:
      'ПДОО — често нарекувано „фирма за 1 евро“ — е најевтиниот начин по влог да се регистрира фирма во Северна Македонија. Соодветно е за прв бизнис со ограничена одговорност, без потреба од 5.000 евра однапред.',
    sections: [
      {
        h: 'Што е ПДОО?',
        body:
          'Поедноставено ДОО може да основаат најмногу тројца основачи (физички лица), од кои еден е управител. Минималниот основачки влог е само 1 евро (во денарска противвредност), со најмал номинален износ на удел од 10 центи. Како замена за нискиот влог, ПДОО мора да формира задолжителна резерва со издвојување на една четвртина од годишната добивка додека резервата не го достигне нивото на стандарден основачки капитал.',
      },
      {
        h: 'Правило за задолжителна резерва',
        body:
          'Бидејќи ПДОО започнува со само 1 евро, законот бара да задржи една четвртина од годишната добивка во задолжителна резерва секоја година додека таа не го достигне нивото на стандарден основачки капитал (5.000 евра). Откако ќе го достигне, друштвото фактички работи како стандардно ДОО.',
      },
      {
        h: 'ПДОО наспроти ДОО / ДООЕЛ',
        table: {
          head: ['Друштво', 'Основачи', 'Мин. влог', 'Забелешка'],
          rows: [
            ['ПДОО', 'До 3 физички лица', '1 €', 'Задолжителна резерва до 5.000 €'],
            ['ДООЕЛ', '1', '5.000 € (во рок од 1 год.)', 'Без обврска за резерва'],
            ['ДОО', '2–50', '5.000 € (во рок од 1 год.)', 'Без обврска за резерва'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Што е „фирма за 1 евро“ во Северна Македонија?',
        a: 'Тоа е поедноставеното ДОО (ПДОО), кое можат да го основаат најмногу тројца со само 1 евро. За возврат, мора да издвојува една четвртина од годишната добивка во задолжителна резерва додека таа не го достигне нивото на стандарден основачки капитал.',
      },
      {
        q: 'Кој може да регистрира ПДОО?',
        a: 'ПДОО можат да основаат најмногу тројца физички лица, од кои еден е управител. Целта е да се намали бариерата за прв бизнис со малку почетен капитал.',
      },
      {
        q: 'Која е „замката“ со задолжителната резерва?',
        a: 'Бидејќи влогот е само 1 евро, друштвото мора да издвојува една четвртина од годишната добивка секоја година додека резервата не достигне ниво на стандарден капитал (5.000 евра).',
      },
    ],
    relatedTitle: 'Поврзани водичи',
    related: [
      { label: 'ДОО — стандардно друштво', href: '/doo' },
      { label: 'ДООЕЛ — друштво на едно лице', href: '/dooel' },
      { label: 'Колку чини регистрација на фирма', href: '/cost' },
      { label: 'Постапка за регистрација', href: '/process' },
      { label: 'Назад кон целосниот водич за регистрација', href: '/' },
    ],
    ctaTitle: 'Сакате да започнете со ПДОО?',
    ctaText:
      'Ќе ве поврземе со верифициран експерт од Nexa екосистемот кој може да го основа вашето поедноставено ДОО и ќе ви одговори со јасна, фиксна понуда.',
    ctaButton: 'Поврзете се со експерт за регистрација',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({ path: PATH, headline: content.en.h1, description: content.en.tldr }),
          breadcrumbSchema(PATH, 'PDOO Registration'),
          faqSchema(enFaq),
        ]}
      />
      <GuidePage content={content} />
    </>
  );
}
