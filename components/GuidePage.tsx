'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Home } from 'lucide-react';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';

type Lang = 'en' | 'mk';

export type GuideSection = {
  h: string;
  body?: string;
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
};

export type GuideLink = { label: string; href: string };

export type GuideLangContent = {
  /** Breadcrumb leaf label (Home → this) */
  crumb: string;
  badge: string;
  h1: string;
  /** Answer-first TL;DR box */
  tldr: string;
  intro?: string;
  sections: GuideSection[];
  faqTitle?: string;
  faq?: { q: string; a: string }[];
  relatedTitle: string;
  related: GuideLink[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export type GuideContent = {
  /** path after the domain, e.g. "/doo" — used for the breadcrumb home link */
  en: GuideLangContent;
  mk: GuideLangContent;
};

const LABELS = {
  en: { tldr: 'TL;DR', home: 'Home', readMore: 'Read more', relatedHome: 'Back to the full company registration guide' },
  mk: { tldr: 'Накратко', home: 'Дома', readMore: 'Прочитај повеќе', relatedHome: 'Назад кон целосниот водич за регистрација на фирма' },
};

export default function GuidePage({
  content,
  defaultLang = 'en',
}: {
  content: GuideContent;
  defaultLang?: Lang;
}) {
  const [language, setLanguage] = useState<Lang>(defaultLang);
  const t = content[language];
  const l = LABELS[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SiteNavbar language={language} onLanguageChange={setLanguage} showSiteNav={false} />

      <main id="main">
        {/* HERO */}
        <header className="relative overflow-hidden py-12 lg:py-16 border-b border-gray-100">
          <div className="absolute inset-0 bg-mesh pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
                <li>
                  <Link href="/" className="inline-flex items-center gap-1 hover:text-[#1E4DB7] transition-colors">
                    <Home className="h-3.5 w-3.5" />
                    {l.home}
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li className="font-medium text-gray-700" aria-current="page">{t.crumb}</li>
              </ol>
            </nav>

            <span className="inline-block bg-blue-50 text-[#1E4DB7] border border-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
              {t.badge}
            </span>

            <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.12] mb-6">
              {t.h1}
            </h1>

            {/* TL;DR answer-first box */}
            <div className="bg-white/80 backdrop-blur-sm border-l-4 border-[#2BB3C0] rounded-r-lg p-5 shadow-sm">
              <p className="text-xs font-semibold text-[#1E4DB7] uppercase tracking-wider mb-2">{l.tldr}</p>
              <p className="text-base text-gray-800 leading-relaxed">{t.tldr}</p>
            </div>
          </div>
        </header>

        {/* BODY */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {t.intro && <p className="text-lg text-gray-700 leading-relaxed mb-10">{t.intro}</p>}

          {t.sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight">{s.h}</h2>
              {s.body && <p className="text-lg text-gray-700 leading-relaxed mb-4">{s.body}</p>}

              {s.bullets && (
                <ul className="space-y-3 mt-4">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-[#2BB3C0] mt-0.5 shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {s.table && (
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mt-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          {s.table.head.map((h, k) => (
                            <th key={k} className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, r) => (
                          <tr key={r} className="border-b border-gray-100 hover:bg-slate-50">
                            {row.map((c, cIdx) => (
                              <td key={cIdx} className={`px-4 py-3 text-gray-700 ${cIdx === 0 ? 'font-semibold text-gray-900' : ''}`}>{c}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* FAQ */}
          {t.faq && t.faq.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                {t.faqTitle || (language === 'mk' ? 'Често поставувани прашања' : 'Frequently asked questions')}
              </h2>
              <div className="space-y-3">
                {t.faq.map((f, i) => (
                  <details key={i} className="group bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl border border-slate-200">
                    <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-900 flex items-center justify-between list-none">
                      <span className="pr-4">{f.q}</span>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                    </summary>
                    <div className="px-6 pb-5 text-gray-700 leading-relaxed">{f.a}</div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related / internal links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">{t.relatedTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.related.map((r, i) => {
                const internal = r.href.startsWith('/');
                const cls = 'group flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all px-5 py-4';
                const inner = (
                  <>
                    <span className="text-[#1E4DB7] font-medium group-hover:underline">{r.label}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </>
                );
                return internal ? (
                  <Link key={i} href={r.href} className={cls}>{inner}</Link>
                ) : (
                  <a key={i} href={r.href} className={cls}>{inner}</a>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <section>
            <Card className="bg-gradient-to-r from-[#1E4DB7] to-[#2BB3C0] border-0 shadow-xl">
              <CardContent className="p-8 text-white">
                <h2 className="text-2xl font-bold mb-3">{t.ctaTitle}</h2>
                <p className="text-blue-100 mb-5 leading-relaxed">{t.ctaText}</p>
                <a href="/#contact">
                  <Button size="lg" className="bg-white text-[#1E4DB7] hover:bg-blue-50 px-7 py-6 rounded-xl shadow-lg">
                    {t.ctaButton}
                    <ChevronRight className="ml-2 h-5 w-5" />
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
