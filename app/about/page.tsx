'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';

const copy = {
  en: {
    badge: 'Part of the Nexa ecosystem',
    title: 'About Nexa',
    whatTitle: 'What is Nexa',
    what: [
      'Nexa is the operational ecosystem for Macedonian business — a legal-tech SaaS terminal plus a network of guide sites that help individuals and companies navigate Macedonian law, taxes, and corporate formalities.',
      'The terminal automates document generation, contract analysis, AI-assisted legal research, and compliance health checks. The guide sites translate complex legal procedures into plain language so people can act with confidence — or get matched to a verified professional when they need help.',
    ],
    whyTitle: 'Why this site exists',
    why: 'company.nexa.mk is the company-registration guide within the Nexa ecosystem. It walks founders through entity selection (DOO, AD, sole proprietor, branch, representative office), the Central Registry process, document and notary requirements, AML/UBO obligations, and realistic timelines and costs — all sourced from current Macedonian regulation.',
    operatorTitle: 'Operator',
    operator: [
      'Legal entity: Company for Services NEKSA AMD DOOEL Skopje',
      'Address: Bulevar Partizanski Odredi 102/2-14, Skopje – Karposh',
      'Phone: +389 78 534 258',
      'Email: info@nexa.mk',
    ],
    sistersTitle: 'Other Nexa properties',
    sisters: [
      { name: 'nexa.mk', label: 'Terminal — the SaaS app for documents, AI, and compliance', url: 'https://nexa.mk' },
      { name: 'samodaprasham.mk', label: 'Consumer legal questions and answers', url: 'https://samodaprasham.mk' },
      { name: 'immigration.mk', label: 'Immigration guide for North Macedonia', url: 'https://immigration.mk' },
      { name: 'macedoniancitizenship.mk', label: 'Macedonian citizenship application guide', url: 'https://macedoniancitizenship.mk' },
      { name: 'iplaw.nexa.mk', label: 'IP, trademark and patent guide', url: 'https://iplaw.nexa.mk' },
      { name: 'topics.nexa.mk', label: 'Expert-authored Q&A platform', url: 'https://topics.nexa.mk' },
    ],
    forProsTitle: 'For lawyers and accountants',
    forProsText: 'Join the Nexa network as a Super User: get exclusive lead routing, sub-seats for your clients, and distribution through our newsletter and Topics platform.',
    forProsCta: 'For lawyers and accountants: join the Nexa network →',
    ctaTitle: 'Ready to start?',
    ctaText: 'Create a Nexa account to access the terminal, generate documents, and connect to verified professionals.',
    ctaButton: 'Open a Nexa account',
  },
  mk: {
    badge: 'Дел од Nexa екосистемот',
    title: 'За Nexa',
    whatTitle: 'Што е Nexa',
    what: [
      'Nexa е оперативен екосистем за македонскиот бизнис — правно-технолошки SaaS терминал заедно со мрежа од водич-сајтови што им помагаат на поединци и компании да се ориентираат низ македонското право, даноците и корпоративните формалности.',
      'Терминалот автоматизира изработка на документи, анализа на договори, правно истражување потпомогнато од вештачка интелигенција и проверки на усогласеност. Водич-сајтовите ги преведуваат сложените правни постапки на јасен јазик за луѓето да дејствуваат со сигурност — или да се поврзат со верифициран професионалец кога им треба помош.',
    ],
    whyTitle: 'Зошто постои овој сајт',
    why: 'company.nexa.mk е водичот за регистрација на компанија во Nexa екосистемот. Ги води основачите низ изборот на правен ентитет (ДОО, АД, индивидуален претприемач, подружница, претставништво), процесот на Централниот регистар, барањата за документи и нотар, AML/UBO обврските, како и реалните рокови и трошоци — сè базирано на актуелните македонски прописи.',
    operatorTitle: 'Оператор',
    operator: [
      'Правен субјект: Друштво за услуги НЕКСА АМД ДООЕЛ Скопје',
      'Адреса: Булевар Партизански Одреди 102/2-14, Скопје – Карпош',
      'Телефон: 078 534 258',
      'Е-пошта: info@nexa.mk',
    ],
    sistersTitle: 'Други Nexa имоти',
    sisters: [
      { name: 'nexa.mk', label: 'Терминал — SaaS апликација за документи, AI и усогласеност', url: 'https://nexa.mk' },
      { name: 'samodaprasham.mk', label: 'Прашања и одговори за потрошувачко право', url: 'https://samodaprasham.mk' },
      { name: 'immigration.mk', label: 'Водич за имиграција во Северна Македонија', url: 'https://immigration.mk' },
      { name: 'macedoniancitizenship.mk', label: 'Водич за барање за македонско државјанство', url: 'https://macedoniancitizenship.mk' },
      { name: 'iplaw.nexa.mk', label: 'Водич за интелектуална сопственост, трговски марки и патенти', url: 'https://iplaw.nexa.mk' },
      { name: 'topics.nexa.mk', label: 'Платформа за прашања и одговори од експерти', url: 'https://topics.nexa.mk' },
    ],
    forProsTitle: 'За адвокати и сметководители',
    forProsText: 'Придружете се на Nexa мрежата како Super User: ексклузивно насочување на потенцијални клиенти, под-седишта за вашите клиенти и дистрибуција преку нашиот newsletter и Topics платформа.',
    forProsCta: 'За адвокати и сметководители: придружете се на Nexa мрежата →',
    ctaTitle: 'Подготвени сте да започнете?',
    ctaText: 'Креирајте Nexa сметка за да пристапите до терминалот, да генерирате документи и да се поврзете со верифицирани професионалци.',
    ctaButton: 'Отворете Nexa сметка',
  },
};

export default function AboutPage() {
  const [language, setLanguage] = useState<'en' | 'mk'>('mk');
  const t = copy[language];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Nexa', item: 'https://nexa.mk' },
      { '@type': 'ListItem', position: 2, name: 'Company Registration', item: 'https://company.nexa.mk' },
      { '@type': 'ListItem', position: 3, name: 'About', item: 'https://company.nexa.mk/about' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteNavbar language={language} onLanguageChange={setLanguage} showSiteNav={false} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <article>
          <header className="mb-12">
            <span className="inline-block bg-blue-50 text-[#1E4DB7] border border-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {t.badge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{t.title}</h1>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.whatTitle}</h2>
            {t.what.map((p, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed mb-4">{p}</p>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.whyTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.why}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.operatorTitle}</h2>
            <ul className="text-gray-700 space-y-2 bg-white rounded-xl p-6 border border-gray-200">
              {t.operator.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.sistersTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.sisters.map((s) => (
                <a key={s.name} href={s.url} className="group">
                  <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-base font-semibold text-[#1E4DB7] group-hover:underline">{s.name}</span>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.label}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          {/* For-professionals cross-link (B.1) */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-[#1E4DB7] to-[#2BB3C0] border-0 shadow-xl">
              <CardContent className="p-8 text-white">
                <h2 className="text-2xl font-bold mb-3">{t.forProsTitle}</h2>
                <p className="text-blue-100 mb-5 leading-relaxed">{t.forProsText}</p>
                <a href="https://nexa.mk/for-professionals" className="inline-flex items-center text-white font-semibold underline hover:no-underline">
                  {t.forProsCta}
                </a>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="bg-white border border-gray-200 shadow-md">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{t.ctaTitle}</h2>
                <p className="text-gray-700 mb-6 text-lg">{t.ctaText}</p>
                <a href="https://nexa.mk/signup">
                  <Button size="lg" className="bg-[#1E4DB7] hover:bg-[#163d92] text-white px-8 py-6 rounded-xl shadow-lg">
                    {t.ctaButton}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </section>
        </article>
      </main>

      <SiteFooter language={language} />
    </div>
  );
}
