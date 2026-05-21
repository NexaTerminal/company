'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const COOKIE_KEY = 'nexa_cookie_consent_v1';

type Consent = 'all' | 'essential' | null;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

function applyConsent(consent: Consent) {
  if (typeof window === 'undefined' || !window.gtag) return;
  if (consent === 'all') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  } else {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [language, setLanguage] = useState<'en' | 'mk'>('mk');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        setOpen(true);
      } else {
        const parsed = JSON.parse(stored) as { consent: Consent; ts: number };
        const oneYear = 1000 * 60 * 60 * 24 * 365;
        if (Date.now() - parsed.ts > oneYear) {
          setOpen(true);
        } else {
          applyConsent(parsed.consent);
        }
      }
    } catch {
      setOpen(true);
    }
    if (typeof navigator !== 'undefined' && navigator.language?.startsWith('en')) {
      setLanguage('en');
    }
  }, []);

  const persist = (consent: Consent) => {
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify({ consent, ts: Date.now() }));
    } catch {}
    applyConsent(consent);
    setOpen(false);
  };

  if (!open) return null;

  const t = language === 'mk'
    ? {
        heading: 'Колачиња и аналитика',
        body: 'Користиме само неопходни колачиња по дифолт. Со ваша согласност можеме да користиме Google Analytics за да го разбереме користењето на страницата. Не користиме рекламни колачиња.',
        learnMore: 'Прочитајте ја нашата Политика за приватност',
        acceptAll: 'Прифати ги сите',
        rejectAll: 'Одбиј ги сите',
        customize: 'Прилагоди',
        analytics: 'Аналитика (Google Analytics)',
        analyticsDesc: 'Помага да го разбереме сообраќајот на страницата. Опционално.',
        essential: 'Неопходни',
        essentialDesc: 'Потребни за работа на страницата. Секогаш активни.',
        save: 'Зачувај избор',
        back: 'Назад',
      }
    : {
        heading: 'Cookies and analytics',
        body: 'We use only essential cookies by default. With your consent we may use Google Analytics to understand site usage. We do not use advertising cookies.',
        learnMore: 'Read our Privacy Policy',
        acceptAll: 'Accept all',
        rejectAll: 'Reject all',
        customize: 'Customize',
        analytics: 'Analytics (Google Analytics)',
        analyticsDesc: 'Helps us understand site traffic. Optional.',
        essential: 'Essential',
        essentialDesc: 'Required for the site to function. Always on.',
        save: 'Save choices',
        back: 'Back',
      };

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="text-lg font-bold text-gray-900">{t.heading}</h2>
            <div className="flex items-center space-x-1 text-xs">
              <button
                onClick={() => setLanguage('mk')}
                className={`px-2 py-1 rounded ${language === 'mk' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                MK
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                EN
              </button>
            </div>
          </div>

          {!customizing ? (
            <>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {t.body}{' '}
                <Link href="/privacy" className="text-[#1E4DB7] underline hover:no-underline">
                  {t.learnMore}
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={() => persist('all')} className="flex-1 bg-[#1E4DB7] hover:bg-[#163d92] text-white">
                  {t.acceptAll}
                </Button>
                <Button onClick={() => persist('essential')} variant="outline" className="flex-1 border-gray-300">
                  {t.rejectAll}
                </Button>
                <Button onClick={() => setCustomizing(true)} variant="outline" className="flex-1 border-gray-300">
                  {t.customize}
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3 mb-4">
                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-900">{t.essential}</span>
                    <span className="text-xs text-gray-500 font-medium">ON</span>
                  </div>
                  <p className="text-xs text-gray-600">{t.essentialDesc}</p>
                </div>
                <label className="flex items-start space-x-3 border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1E4DB7] focus:ring-[#1E4DB7]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.analytics}</p>
                    <p className="text-xs text-gray-600">{t.analyticsDesc}</p>
                  </div>
                </label>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => persist(analytics ? 'all' : 'essential')} className="flex-1 bg-[#1E4DB7] hover:bg-[#163d92] text-white">
                  {t.save}
                </Button>
                <Button onClick={() => setCustomizing(false)} variant="outline" className="border-gray-300">
                  {t.back}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
