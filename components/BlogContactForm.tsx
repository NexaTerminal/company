'use client';

import { useState } from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/i18n';

const COPY = {
  en: {
    badge: 'Verified Nexa network · anonymous',
    heading: 'Need help with this?',
    sub: 'Tell us a little about your situation and we will connect you with a verified expert from the Nexa network.',
    email: 'Your email',
    emailPh: 'you@example.com',
    message: 'How can we help?',
    submit: 'Send request',
    sending: 'Sending…',
    success: 'Thank you — your request has been sent. We have emailed you a confirmation with the next steps.',
    error: 'Something went wrong. Please try again or email info@nexa.mk.',
    consent:
      'Your request is presented to the verified Nexa network anonymously — without your name. We share your contact only if a professional expresses interest, and you can withdraw at any time via info@nexa.mk. You have no financial obligation toward Nexa.',
  },
  mk: {
    badge: 'Верифицирана Nexa мрежа · анонимно',
    heading: 'Потребна ви е помош со ова?',
    sub: 'Кажете ни накратко за вашата ситуација и ќе ве поврземе со верифициран експерт од Nexa мрежата.',
    email: 'Вашата е-пошта',
    emailPh: 'vie@primer.com',
    message: 'Како можеме да помогнеме?',
    submit: 'Испрати барање',
    sending: 'Се испраќа…',
    success: 'Ви благодариме — барањето е испратено. Ви испративме потврда на е-пошта со следните чекори.',
    error: 'Нешто тргна наопаку. Обидете се повторно или пишете на info@nexa.mk.',
    consent:
      'Вашето барање се презентира пред верифицираната Nexa мрежа анонимно — без вашето име. Контактот го споделуваме само ако професионалец изрази интерес, а барањето можете да го повлечете на info@nexa.mk. Кон Nexa немате финансиски обврски.',
  },
} as const;

const field =
  'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base shadow-sm focus:border-[#1E4DB7] focus:outline-none focus:ring-2 focus:ring-[#1E4DB7]/20';

export default function BlogContactForm({
  locale,
  topicSlug,
  articleTitle,
  placeholder,
}: {
  locale: Locale;
  topicSlug: string;
  articleTitle: string;
  placeholder?: string;
}) {
  const c = COPY[locale];
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: topicSlug,
          email,
          message: message + `\n\n— sent from article: ${articleTitle}`,
          company,
          locale,
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) setStatus('success');
      else {
        setStatus('error');
        setErrorMsg(data?.error || c.error);
      }
    } catch {
      setStatus('error');
      setErrorMsg(c.error);
    }
  }

  return (
    <div className="rounded-2xl border-2 border-[#1E4DB7]/20 bg-gradient-to-br from-blue-50 via-white to-white shadow-lg overflow-hidden">
      <div className="h-1.5 bg-gradient-to-r from-[#1E4DB7] to-[#2BB3C0]" />
      <div className="p-6 sm:p-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-600/20 mb-4">
          <ShieldCheck className="h-3.5 w-3.5" />
          {c.badge}
        </span>
        <h2 className="text-2xl font-bold text-gray-900">{c.heading}</h2>
        <p className="text-gray-600 mt-1.5 mb-6">{c.sub}</p>

        {status === 'success' ? (
          <div className="rounded-xl bg-green-50 border border-green-200 p-5 text-green-800">{c.success}</div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="bcf-email" className="block text-sm font-medium text-gray-700 mb-1.5">{c.email}</label>
              <input id="bcf-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={c.emailPh} className={field} />
            </div>
            <div>
              <label htmlFor="bcf-message" className="block text-sm font-medium text-gray-700 mb-1.5">{c.message}</label>
              <textarea id="bcf-message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={placeholder} className={field} />
            </div>
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="bcf-company">Company</label>
              <input id="bcf-company" type="text" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            {status === 'error' && <p className="text-sm text-red-600">{errorMsg || c.error}</p>}
            <Button type="submit" size="lg" disabled={status === 'sending'} className="bg-[#1E4DB7] hover:bg-[#163d92] text-white gap-2">
              <Mail className="h-4 w-4" />
              {status === 'sending' ? c.sending : c.submit}
            </Button>
            <p className="text-xs text-gray-500 leading-relaxed pt-2">{c.consent}</p>
          </form>
        )}
      </div>
    </div>
  );
}
