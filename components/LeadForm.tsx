'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Category } from '@/lib/categories';
import type { Locale } from '@/lib/i18n';

const COPY = {
  en: {
    topic: 'Topic',
    topicAny: 'General enquiry',
    email: 'Your email',
    emailPlaceholder: 'you@example.com',
    message: 'How can we help?',
    messagePlaceholder: 'Briefly describe your situation or question…',
    submit: 'Send request',
    sending: 'Sending…',
    success: 'Thank you for your message. We have sent an automatic confirmation to your e-mail with more details about the next steps.',
    error: 'Something went wrong. Please try again or email info@nexa.mk.',
  },
  mk: {
    topic: 'Тема',
    topicAny: 'Општо прашање',
    email: 'Вашата е-пошта',
    emailPlaceholder: 'vie@primer.com',
    message: 'Како можеме да помогнеме?',
    messagePlaceholder: 'Накратко опишете ја вашата ситуација или прашање…',
    submit: 'Испрати барање',
    sending: 'Се испраќа…',
    success: 'Ви благодариме за пораката. Ви испративме автоматска потврда на е-поштата со повеќе детали за следните чекори.',
    error: 'Нешто тргна наопаку. Обидете се повторно или пишете на info@nexa.mk.',
  },
};

export default function LeadForm({
  locale,
  categories,
  defaultTopic = '',
}: {
  locale: Locale;
  categories: Category[];
  defaultTopic?: string;
}) {
  const c = COPY[locale];
  const [topic, setTopic] = useState(defaultTopic);
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
        body: JSON.stringify({ topic, email, message, company, locale }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data?.error || c.error);
      }
    } catch {
      setStatus('error');
      setErrorMsg(c.error);
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-6 text-green-800">
        {c.success}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="lead-topic" className="block text-sm font-medium text-gray-700 mb-1.5">
          {c.topic}
        </label>
        <select
          id="lead-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base shadow-sm focus:border-[#1E4DB7] focus:outline-none focus:ring-2 focus:ring-[#1E4DB7]/20"
        >
          <option value="">{c.topicAny}</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1.5">
          {c.email}
        </label>
        <input
          id="lead-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={c.emailPlaceholder}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base shadow-sm focus:border-[#1E4DB7] focus:outline-none focus:ring-2 focus:ring-[#1E4DB7]/20"
        />
      </div>

      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          {c.message}
        </label>
        <textarea
          id="lead-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={c.messagePlaceholder}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base shadow-sm focus:border-[#1E4DB7] focus:outline-none focus:ring-2 focus:ring-[#1E4DB7]/20"
        />
      </div>

      {/* Honeypot: hidden from users, catches bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="lead-company">Company</label>
        <input
          id="lead-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {status === 'error' && <p className="text-sm text-red-600">{errorMsg || c.error}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={status === 'sending'}
        className="bg-[#1E4DB7] hover:bg-[#163d92] text-white w-full sm:w-auto"
      >
        {status === 'sending' ? c.sending : c.submit}
      </Button>
    </form>
  );
}
