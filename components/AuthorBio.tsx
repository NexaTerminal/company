import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

const COPY = {
  mk: {
    eyebrow: 'За авторот',
    name: 'Мартин Бошкоски',
    tagline: 'Поранешен адвокат · магистер по право (LL.M.), со положен правосуден испит',
    summary:
      'Мартин Бошкоски е правник со работно искуство повеќе од 15 години, пред сè во граѓанското и корпоративното право.',
    more: 'Повеќе за авторот',
    bio:
      'Авторот беше основач и партнер во адвокатско друштво (2017–2025), со работа во работните односи, граѓанско право и стопански спорови. Пред овој ангажман, работел подолг период и во друго адвокатско друштво. Завршил магистерски студии по граѓанско право и граѓанска постапка на Правниот факултет „Јустинијан Први“ во Скопје и го положил правосудниот испит. Денес овие текстови ги пишува за да го направи македонското право појасно и подостапно за сите.',
    credentials: [
      'LL.M. — граѓанско материјално право и граѓанска постапка',
      'Положен правосуден испит',
      '15+ години правно искуство',
      'Корпоративно право, работните односи, граѓанско право',
    ],
    disclaimer:
      'Овие текстови се општа правна информација, а не правен совет. Авторот овде не дава правни совети ниту правни услуги — со надомест или бесплатно — и со самото читање или контактирање на авторот не воспоставува однос адвокат–клиент. За вашата конкретна ситуација - секогаш консултирајте лиценциран адвокат.',
  },
  en: {
    eyebrow: 'About the author',
    name: 'Martin Boshkoski',
    tagline: 'Former lawyer · Master of Laws (LL.M.), admitted to the Bar',
    summary:
      'Martin Boshkoski is a legal professional with more than 15 years of experience, primarily in civil and corporate law.',
    more: 'More about the author',
    bio:
      'The author was founding partner of a law firm (2017–2025), working in employment (labour) law, civil law and commercial litigation. Before that engagement, he also worked for a longer period at another law firm. He holds a master’s degree in Civil Law and Civil Procedure from the Iustinianus Primus Faculty of Law in Skopje and passed the Bar exam. Today he writes these texts to make Macedonian law clearer and more accessible for everyone.',
    credentials: [
      'LL.M. — Substantive Civil Law & Civil Procedure',
      'Passed the Bar exam',
      '15+ years of legal experience',
      'Corporate law, employment law, civil law',
    ],
    disclaimer:
      'These articles are general legal information, not legal advice. The author does not provide legal advice or legal services here — whether paid or free — and merely reading them or contacting the author creates no lawyer–client relationship and no duty of confidentiality. For your specific situation, always consult a licensed attorney.',
  },
} as const;

export default function AuthorBio({ locale, className = '' }: { locale: Locale; className?: string }) {
  const c = COPY[locale];

  return (
    <section aria-label={c.eyebrow} className={`${className} rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm p-5 sm:p-6`}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
        <Image
          src="/martin-boshkoski.jpg"
          alt={`${c.name} — ${c.tagline}`}
          width={72}
          height={72}
          className="h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full object-cover ring-1 ring-gray-200 shrink-0"
          loading="lazy"
        />
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{c.eyebrow}</p>
          <p className="text-lg font-semibold leading-tight text-gray-900">{c.name}</p>
          <p className="text-sm text-gray-500">{c.tagline}</p>
          <p className="mt-2 text-sm text-gray-700">{c.summary}</p>

          <details className="group mt-2">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-[#1E4DB7] hover:underline [&::-webkit-details-marker]:hidden">
              {c.more}
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{c.bio}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.credentials.map((item) => (
                <li key={item} className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>

      <p className="mt-4 border-t border-gray-200 pt-3 text-xs leading-relaxed text-gray-500">{c.disclaimer}</p>
    </section>
  );
}
