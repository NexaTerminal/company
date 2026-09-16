'use client';

import { useEffect } from 'react';

/** Sets <html lang> at runtime for the Macedonian subtree (root layout is EN). */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = 'en';
    };
  }, [lang]);
  return null;
}
