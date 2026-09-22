'use client';

import { useEffect, useState } from 'react';
import { Mail, ArrowDown, ArrowRight, MessageSquareText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/i18n';

const COPY = {
  en: {
    sidebarHeading: 'Have a question about your business?',
    sidebarText: 'Connect with a verified expert from the Nexa network — anonymously.',
    sidebarButton: 'Contact an expert',
    inEyebrow: 'Not sure how this applies to you?',
    inText: 'Get a clear answer from a verified expert.',
    inButton: 'Ask an expert',
    floating: 'Contact an expert',
  },
  mk: {
    sidebarHeading: 'Имате прашање за вашиот бизнис?',
    sidebarText: 'Поврзете се со верифициран експерт од Nexa мрежата — анонимно.',
    sidebarButton: 'Поврзете се со експерт',
    inEyebrow: 'Не сте сигурни како ова се однесува на вас?',
    inText: 'Добијте јасен одговор од верифициран експерт.',
    inButton: 'Прашајте експерт',
    floating: 'Поврзете се со експерт',
  },
} as const;

function scrollToForm() {
  document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export function SidebarContactCta({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <div className="hidden lg:block">
      <div className="relative overflow-hidden rounded-2xl border-2 border-[#1E4DB7]/25 bg-gradient-to-br from-blue-50 via-white to-white shadow-lg">
        <div className="h-1.5 bg-gradient-to-r from-[#1E4DB7] to-[#2BB3C0]" />
        <div className="p-5 space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-bold leading-tight text-gray-900">{c.sidebarHeading}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{c.sidebarText}</p>
          </div>
          <Button onClick={scrollToForm} size="lg" className="w-full h-11 gap-2 bg-[#1E4DB7] hover:bg-[#163d92] text-white">
            <Mail className="h-4 w-4" />
            {c.sidebarButton}
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function InContentCta({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <div className="my-10">
      <div className="relative overflow-hidden rounded-2xl border border-[#1E4DB7]/25 bg-gradient-to-br from-blue-50 via-white to-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E4DB7]/15">
              <MessageSquareText className="h-5 w-5 text-[#1E4DB7]" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight text-gray-900">{c.inEyebrow}</p>
              <p className="mt-1 text-sm text-gray-600 leading-snug">{c.inText}</p>
            </div>
          </div>
          <button type="button" onClick={scrollToForm}
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1E4DB7] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 sm:w-auto">
            {c.inButton}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FloatingContactCta({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const formEl = document.getElementById('contact-form-section');
    let formInView = false;
    const update = () => setVisible(window.scrollY > 500 && !formInView);
    const observer = formEl
      ? new IntersectionObserver(([entry]) => { formInView = entry.isIntersecting; update(); }, { rootMargin: '0px 0px -120px 0px' })
      : null;
    if (formEl) observer?.observe(formEl);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', update); observer?.disconnect(); };
  }, []);

  return (
    <button onClick={scrollToForm} aria-label={c.floating}
      className={`lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E4DB7] text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <Mail className="h-4 w-4" />
      {c.floating}
    </button>
  );
}
