'use client';

import { useState } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';

const LAST_UPDATED = '2026-05-21';

const copy = {
  mk: {
    title: 'Политика за приватност',
    lastUpdated: 'Последно ажурирано',
    sections: [
      {
        h: '1. Контролор на податоци',
        body: [
          'Контролор: Друштво за услуги НЕКСА АМД ДООЕЛ Скопје.',
          'Адреса: Ул. Булевар Партизански Одреди бр. 102/2-14, Скопје – Карпош, Карпош.',
          'Телефон: +389 78 534 258. Е-пошта: info@nexa.mk.',
          'Офицер за заштита на лични податоци (DPO): Мартин Бошкоски — контакт: info@nexa.mk.',
        ],
      },
      {
        h: '2. Податоци што ги собираме',
        body: [
          'Податоци доставени преку форми: име, е-пошта, телефон, опис на барањето, согласности.',
          'Стандардни серверски логови: IP адреса, user agent, временска ознака.',
          'Колачиња и аналитика: Google Analytics (GA4) се вчитува само ако корисникот изречно се согласи. По дифолт сите non-essential колачиња се исклучени.',
        ],
      },
      {
        h: '3. Цел на обработката',
        body: [
          'Одговарање на барања и прашања на корисниците.',
          'Споделување на барањето со независен експерт од трета страна во рамки на Nexa мрежата (адвокат, сметководител, агент за регистрација или консултант) кој може да ја регистрира вашата фирма или да ви помогне со конкретното прашање. Nexa самата не врши регистрација — нашата улога е да ве поврземе со вистинскиот експерт.',
          'Анализа на користење на страницата заради подобрување (само со согласност).',
        ],
      },
      {
        h: '4. Правна основа',
        body: [
          'Согласност (член 6(1)(а) ГДПР) за поднесувања преку форми и аналитика.',
          'Легитимен интерес (член 6(1)(ф) ГДПР) за серверски логови потребни за безбедност и стабилност.',
        ],
      },
      {
        h: '5. Приматели на вашите податоци',
        body: [
          'Независни експерти од трета страна во рамки на Nexa мрежата (адвокати, сметководители, агенти за регистрација, консултанти). Тие се посебни контролери на личните податоци за натамошната комуникација со вас и работат во свое име и под своја одговорност. На нив им се споделува само она што самите ќе го наведете при првичниот контакт (име, контакт и краток опис на барањето).',
          'Внимание — заштитете се: при првичниот контакт преку оваа страница не споделувајте чувствителни лични или деловни податоци (на пр. лични документи, банкарски детали, лозинки, медицински податоци, копии од договори или други доверливи документи). За такви детали почекајте безбеден канал директно со одбраниот експерт, откако ќе го верификувате неговиот идентитет.',
          'Провајдер за е-пошта: Resend (само за пренос на пораки).',
          'Hosting провајдер: Vercel.',
          'Аналитика (само со согласност): Google Analytics 4.',
          'Нема да го продаваме вашиот контакт ниту ќе го споделуваме надвор од Nexa мрежата или горенаведените процесори.',
        ],
      },
      {
        h: '6. Период на чување',
        body: [
          'Поднесувања: до 24 месеци по затворање на барањето, освен ако корисникот не побара пораничен бришење.',
          'Серверски логови: 90 дена.',
        ],
      },
      {
        h: '7. Права на корисниците',
        body: [
          'Имате право на пристап, исправка, бришење, ограничување на обработката, приговор и преносливост на личните податоци.',
          'За остварување на правата контактирајте на info@nexa.mk.',
          'Имате право да поднесете жалба до Агенцијата за заштита на личните податоци на РСМ.',
        ],
      },
      {
        h: '8. Колачиња',
        body: [
          'Неопходни колачиња: за функционалност на страницата (секогаш активни).',
          'Аналитика (Google Analytics): се вчитува само со ваша изречна согласност преку банерот за колачиња. Изборот се памти 12 месеци.',
        ],
      },
      {
        h: '9. Меѓународни преноси',
        body: [
          'Некои од нашите процесори (на пр. Google Analytics, Resend, Vercel) обработуваат податоци надвор од ЕУ. Тие применуваат стандардни договорни клаузули (SCC) како заштитни мерки.',
        ],
      },
      {
        h: '10. Ажурирања',
        body: [
          'Оваа политика може да се ажурира. Датумот на последното ажурирање е прикажан на дното на оваа страница.',
        ],
      },
      {
        h: '11. Контакт',
        body: ['info@nexa.mk'],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated',
    sections: [
      {
        h: '1. Data controller',
        body: [
          'Controller: Company for Services NEKSA AMD DOOEL Skopje.',
          'Address: Str. Bulevar Partizanski Odredi no. 102/2-14, Skopje – Karposh, Karposh.',
          'Phone: +389 78 534 258. Email: info@nexa.mk.',
          'Data Protection Officer (DPO): Martin Boshkoski — contact: info@nexa.mk.',
        ],
      },
      {
        h: '2. Data we collect',
        body: [
          'Data submitted via forms: name, email, phone, request description, consents.',
          'Standard server logs: IP address, user agent, timestamp.',
          'Cookies and analytics: Google Analytics (GA4) is loaded only if the user explicitly consents. By default all non-essential cookies are disabled.',
        ],
      },
      {
        h: '3. Purpose of processing',
        body: [
          'Answering user inquiries and questions.',
          'Sharing your request with an independent third-party expert within the Nexa network (a lawyer, accountant, registration agent, or consultant) who can incorporate your company or help with your specific question. Nexa itself does not perform the registration — our role is to connect you with the right expert.',
          'Site usage analysis for improvement (with consent only).',
        ],
      },
      {
        h: '4. Legal basis',
        body: [
          'Consent (Art. 6(1)(a) GDPR) for form submissions and analytics.',
          'Legitimate interest (Art. 6(1)(f) GDPR) for server logs needed for security and stability.',
        ],
      },
      {
        h: '5. Recipients of your data',
        body: [
          'Independent third-party experts within the Nexa network (lawyers, accountants, registration agents, consultants). They are separate controllers of personal data for any subsequent communication with you and operate in their own name and under their own responsibility. They receive only what you provide in your initial contact (your name, contact details, and a short description of your request).',
          'Important — protect yourself: do not share sensitive personal or business data in your initial contact through this site (for example, ID documents, bank details, passwords, medical information, copies of contracts, or any confidential documents). Save those details for a secure channel directly with the chosen expert, after you have verified their identity.',
          'Email service provider: Resend (for message delivery only).',
          'Hosting provider: Vercel.',
          'Analytics (with consent only): Google Analytics 4.',
          'We will not sell your contact details and will not share them outside the Nexa network or the processors listed above.',
        ],
      },
      {
        h: '6. Retention',
        body: [
          'Submissions: up to 24 months after the inquiry is closed, unless the user requests earlier erasure.',
          'Server logs: 90 days.',
        ],
      },
      {
        h: '7. User rights',
        body: [
          'You have the right to access, rectification, erasure, restriction of processing, objection, and data portability.',
          'To exercise your rights, contact info@nexa.mk.',
          'You have the right to lodge a complaint with the Macedonian Personal Data Protection Agency.',
        ],
      },
      {
        h: '8. Cookies',
        body: [
          'Essential cookies: for site functionality (always on).',
          'Analytics (Google Analytics): loaded only with your explicit consent via the cookie banner. Choice is stored for 12 months.',
        ],
      },
      {
        h: '9. International transfers',
        body: [
          'Some of our processors (e.g. Google Analytics, Resend, Vercel) process data outside the EU. They apply Standard Contractual Clauses (SCCs) as safeguards.',
        ],
      },
      {
        h: '10. Updates',
        body: [
          'This policy may be updated. The date of the last update is shown at the bottom of this page.',
        ],
      },
      {
        h: '11. Contact',
        body: ['info@nexa.mk'],
      },
    ],
  },
};

export default function PrivacyPage() {
  const [language, setLanguage] = useState<'en' | 'mk'>('mk');
  const t = copy[language];

  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar language={language} onLanguageChange={setLanguage} showSiteNav={false} />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-sm text-gray-500 mb-10">
            {t.lastUpdated}: {LAST_UPDATED}
          </p>
          {t.sections.map((s, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{s.h}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="text-gray-700 leading-relaxed mb-3">{p}</p>
              ))}
            </section>
          ))}
        </article>
      </main>
      <SiteFooter language={language} />
    </div>
  );
}
