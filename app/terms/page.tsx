'use client';

import { useState } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';

const LAST_UPDATED = '2026-06-21';

const copy = {
  mk: {
    title: 'Услови за користење',
    lastUpdated: 'Последно ажурирано',
    sections: [
      {
        h: '1. Оператор',
        body: [
          'Оваа страница (company.nexa.mk) ја управува: Друштво за услуги НЕКСА АМД ДООЕЛ Скопје.',
          'Адреса: Ул. Булевар Партизански Одреди бр. 102/2-14, Скопје – Карпош, Карпош.',
          'Телефон: +389 78 534 258. Е-пошта: info@nexa.mk.',
          'Страницата е дел од Nexa екосистемот (nexa.mk).',
        ],
      },
      {
        h: '2. Цел на страницата',
        body: [
          'company.nexa.mk е информативно-образовна платформа за регистрација на компании во Северна Македонија и за насочување на корисниците кон верифицирани професионалци. Не е комерцијална реклама за определен адвокат или фирма.',
        ],
      },
      {
        h: '3. Не претставува правен совет',
        body: [
          'Содржината на оваа страница претставува општи правни и информативни содржини и не претставува правен совет, понуда за услуги ниту комерцијална презентација. Прегледувањето или користењето на оваа страница не создава адвокатско-клиентски однос.',
          'Односот помеѓу корисникот и кој било професионалец контактиран преку оваа страница се формира одделно и надвор од Nexa.',
          'За индивидуален правен совет обратете се до лиценциран адвокат. Официјалниот именик на активни адвокати во РСМ е достапен на mba.org.mk.',
        ],
      },
      {
        h: '4. Насочување на барања и споделување со експерти од трета страна',
        body: [
          'Nexa самата не врши регистрација на фирми. company.nexa.mk е информативна и поврзувачка платформа: кога ќе нѐ контактирате, вашето барање се презентира пред независни експерти од трета страна во верифицираната Nexa мрежа — адвокати, сметководители, агенти за регистрација и консултанти чија дејност одговара на темата на вашето барање. Тие експерти работат независно од Nexa, во свое име и под своја одговорност.',
          'Вашето барање се презентира пред мрежата анонимно — без вашето име, контакт детали или други податоци по кои би можеле да бидете идентификувани. Во оваа фаза се споделуваат само темата и краток опис на тоа што ви треба.',
          'Вашите контакт податоци се споделуваат со експерт единствено доколку тој експерт изрази интерес да помогне со вашето барање, и само за да може директно да ве контактира. Слободни сте сами да одлучите дали ќе соработувате.',
          'Кон Nexa и кон company.nexa.mk немате никакви финансиски или материјални обврски. Евентуалната соработка, нејзините услови и цена ги договарате исклучиво и директно со експертот кој ве контактира; Nexa не е страна во тој однос.',
          'Согласноста можете да ја повлечете (да го отповикате барањето) во секое време со порака на info@nexa.mk. По повлекувањето ќе го избришеме вашето барање од нашите евиденции и нема да го проследиме на ниту еден експерт.',
          'Важно: при првичниот контакт преку оваа страница не споделувајте чувствителни лични или деловни податоци (на пр. лични документи, банкарски детали, лозинки, медицински податоци, копии од договори, или какви било доверливи документи). За такви детали почекајте докажан и безбеден канал директно со одбраниот експерт, по идентификација.',
        ],
      },
      {
        h: '5. Интелектуална сопственост',
        body: [
          'Содржината на страницата е © Nexa освен ако не е поинаку наведено. Дозволено е цитирање со јасна атрибуција и врска кон изворот. Не е дозволено комерцијално препечатување без претходна писмена согласност.',
        ],
      },
      {
        h: '6. Линкови кон трети страни',
        body: [
          'Страницата содржи врски кон надворешни извори (закони, Централен регистар, Адвокатска комора, други јавни регистри). Nexa не одговара за содржината на надворешните страници.',
        ],
      },
      {
        h: '7. Ограничување на одговорност',
        body: [
          'До максималната мера дозволена според законодавството на Република Северна Македонија, Nexa не одговара за одлуки или дејствија преземени врз основа на информациите на оваа страница.',
        ],
      },
      {
        h: '8. Измени на условите',
        body: [
          'Овие услови може да се менуваат. Датумот на последното ажурирање е прикажан на дното на оваа страница.',
        ],
      },
      {
        h: '9. Применливо право',
        body: [
          'Применливо право е законодавството на Република Северна Македонија. За евентуални спорови надлежни се судовите во Скопје.',
        ],
      },
      {
        h: '10. Контакт',
        body: ['info@nexa.mk'],
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    lastUpdated: 'Last updated',
    sections: [
      {
        h: '1. Operator',
        body: [
          'This site (company.nexa.mk) is operated by: Company for Services NEKSA AMD DOOEL Skopje.',
          'Address: Str. Bulevar Partizanski Odredi no. 102/2-14, Skopje – Karposh, Karposh.',
          'Phone: +389 78 534 258. Email: info@nexa.mk.',
          'The site is part of the Nexa ecosystem (nexa.mk).',
        ],
      },
      {
        h: '2. Purpose of the site',
        body: [
          'company.nexa.mk is an informational and educational platform for company registration in North Macedonia and for routing users to verified professionals. It is not commercial advertising for any specific lawyer or firm.',
        ],
      },
      {
        h: '3. Not legal advice',
        body: [
          'The content on this site is general legal and informational material and does not constitute legal advice, an offer of services, or a commercial communication. Viewing or using this site does not create a lawyer-client relationship.',
          'The relationship between a user and any professional contacted via this site is formed separately and outside Nexa.',
          'For individual legal advice, contact a licensed attorney. The official directory of active attorneys in the Republic of North Macedonia is available at mba.org.mk.',
        ],
      },
      {
        h: '4. Lead routing and sharing with third-party experts',
        body: [
          'Nexa itself does not perform company registration. company.nexa.mk is an informational and matchmaking platform: when you contact us, your request is presented to independent third-party experts in the verified Nexa network — lawyers, accountants, registration agents, and consultants whose practice matches the topic of your inquiry. Those experts operate independently from Nexa, in their own name and under their own responsibility.',
          'Your request is presented to the network anonymously — without your name, contact details, or any other data by which you could be identified. At this stage only the topic and a short description of what you need are shared.',
          'Your contact details are shared with an expert only if that expert expresses interest in helping with your request, and solely so they can reach out to you directly. You are free to decide whether to engage them.',
          'You have no financial or material obligation toward Nexa or company.nexa.mk. Any cooperation, its terms, and its price are agreed exclusively and directly with the expert who contacts you; Nexa is not a party to that relationship.',
          'You can withdraw your consent (recall your request) at any time by emailing info@nexa.mk. After withdrawal we will delete your request from our records and will not forward it to any expert.',
          'Important: do not share sensitive personal or business data in your initial contact through this site (for example, ID documents, bank details, passwords, medical information, copies of contracts, or any confidential documents). Save those details for a verified, secure channel directly with the chosen expert, after identification.',
        ],
      },
      {
        h: '5. Intellectual property',
        body: [
          'Content on the site is © Nexa unless otherwise noted. Quoting with attribution and a link is permitted. Commercial republishing requires prior written consent.',
        ],
      },
      {
        h: '6. Third-party links',
        body: [
          'The site links to external sources (laws, Central Registry, Macedonian Bar Association, other public registries). Nexa is not responsible for the content of external sites.',
        ],
      },
      {
        h: '7. Limitation of liability',
        body: [
          'To the maximum extent permitted under the laws of the Republic of North Macedonia, Nexa is not liable for decisions or actions taken based on information on the site.',
        ],
      },
      {
        h: '8. Changes',
        body: [
          'These terms may be updated. The date of the last update is shown at the bottom of this page.',
        ],
      },
      {
        h: '9. Governing law',
        body: [
          'Governing law is that of the Republic of North Macedonia. Competent courts for any disputes are the courts in Skopje.',
        ],
      },
      {
        h: '10. Contact',
        body: ['info@nexa.mk'],
      },
    ],
  },
};

export default function TermsPage() {
  const [language, setLanguage] = useState<'en' | 'mk'>('mk');
  const t = copy[language];

  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar language={language} onLanguageChange={setLanguage} showSiteNav={false} />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose-like">
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
