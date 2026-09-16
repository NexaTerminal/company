'use client';

import Link from 'next/link';
import Image from 'next/image';

type Lang = 'en' | 'mk';

const GUIDE_LINKS = [
  { href: '/category/registration', en: 'Company registration', mk: 'Регистрација на фирма' },
  { href: '/blog/company-legal-forms-north-macedonia', en: 'Legal forms (DOO, DOOEL, AD)', mk: 'Правни форми (ДОО, ДООЕЛ, АД)' },
  { href: '/blog/how-to-register-company-north-macedonia', en: 'Registration process', mk: 'Постапка за регистрација' },
  { href: '/blog/register-company-as-foreigner', en: 'For foreigners', mk: 'За странци' },
  { href: '/category/company-changes', en: 'Company changes', mk: 'Промени во фирма' },
  { href: '/category/tax', en: 'Taxes', mk: 'Даноци' },
  { href: '/category/compliance', en: 'Compliance', mk: 'Усогласеност' },
  { href: '/category/data-protection', en: 'Data protection (GDPR)', mk: 'Заштита на податоци' },
];

const SISTER_LINKS = [
  { href: 'https://nexa.mk', en: 'Nexa (Hub & Terminal)', mk: 'Nexa (Hub и Терминал)' },
  { href: 'https://samodaprasham.mk', en: 'SamoDaPrasham — Legal Q&A', mk: 'SamoDaPrasham — Правни прашања' },
  { href: 'https://immigration.mk', en: 'Immigration to North Macedonia', mk: 'Имиграција во Северна Македонија' },
  { href: 'https://macedoniancitizenship.mk', en: 'Macedonian Citizenship', mk: 'Македонско државјанство' },
  { href: 'https://iplaw.nexa.mk', en: 'IP Law (Trademarks & Patents)', mk: 'Право на интелектуална сопственост' },
  { href: 'https://topics.nexa.mk', en: 'Topics — Expert Q&A', mk: 'Topics — Експертски прашања' },
];

export default function SiteFooter({ language }: { language: Lang }) {
  const t = {
    en: {
      siteName: 'Company.Nexa.mk',
      sitePurpose: 'Plain-language guide to company registration in North Macedonia (DOO, AD, sole proprietor, branch).',
      aboutLink: 'About this site',
      ecosystem: 'Part of the Nexa ecosystem',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      about: 'About',
      contact: 'Contact',
      guides: 'Popular guides',
      mba: 'Find a licensed lawyer in the official MBA directory →',
      contactHeading: 'Contact',
      contactLine1: 'NEKSA AMD DOOEL',
      contactLine2: 'Skopje, North Macedonia',
      phone: '+389 78 534 258',
      email: 'info@nexa.mk',
      disclaimer:
        'The content on this site is general legal and informational material and does not constitute legal advice, an offer of services, or a commercial communication. Viewing or using this site does not create a lawyer-client relationship. For individual legal advice, contact a licensed attorney — the official directory of active attorneys in the Republic of North Macedonia is available at the',
      mbaLink: 'Macedonian Bar Association',
      copyright: '© 2026 NEKSA AMD DOOEL — part of the Nexa ecosystem.',
      poweredBy: 'Powered by Nexa',
      forPros: 'For lawyers and accountants: join the Nexa network →',
    },
    mk: {
      siteName: 'Company.Nexa.mk',
      sitePurpose: 'Водич со јасен јазик за регистрација на компанија во Северна Македонија (ДОО, АД, индивидуален претприемач, подружница).',
      aboutLink: 'За оваа страница',
      ecosystem: 'Дел од Nexa екосистемот',
      legal: 'Правно',
      privacy: 'Политика за приватност',
      terms: 'Услови за користење',
      about: 'За нас',
      contact: 'Контакт',
      guides: 'Популарни водичи',
      mba: 'Најдете лиценциран адвокат во официјалниот именик на АКРСМ →',
      contactHeading: 'Контакт',
      contactLine1: 'НЕКСА АМД ДООЕЛ',
      contactLine2: 'Скопје, Северна Македонија',
      phone: '078 534 258',
      email: 'info@nexa.mk',
      disclaimer:
        'Содржината на оваа страница претставува општи правни и информативни содржини и не претставува правен совет, понуда за услуги ниту комерцијална презентација. Прегледувањето или користењето на оваа страница не создава адвокатско-клиентски однос. За индивидуален правен совет, обратете се до лиценциран адвокат — официјалниот именик на активни адвокати во Република Северна Македонија е достапен на',
      mbaLink: 'Адвокатска комора на РСМ',
      copyright: '© 2026 НЕКСА АМД ДООЕЛ — дел од Nexa екосистемот.',
      poweredBy: 'Powered by Nexa',
      forPros: 'За адвокати и сметководители: придружете се на Nexa мрежата →',
    },
  }[language];

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About this site */}
          <div>
            <div className="mb-4">
              <Image src="/nexa-logo-navbar.png" alt="Nexa" width={120} height={32} className="h-8 w-auto" />
            </div>
            <h3 className="text-gray-900 text-sm font-semibold mb-2">{t.siteName}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.sitePurpose}</p>
            <Link href="/about" className="text-sm text-[#1E4DB7] hover:text-[#163d92] font-medium transition-colors">
              {t.aboutLink} →
            </Link>
          </div>

          {/* Col 2: Ecosystem */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">{t.ecosystem}</h4>
            <ul className="space-y-2 text-sm">
              {SISTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-600 hover:text-[#1E4DB7] transition-colors">
                    {language === 'mk' ? l.mk : l.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">{t.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-600 hover:text-[#1E4DB7] transition-colors">{t.privacy}</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-[#1E4DB7] transition-colors">{t.terms}</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#1E4DB7] transition-colors">{t.about}</Link></li>
              <li><a href="/#contact" className="text-gray-600 hover:text-[#1E4DB7] transition-colors">{t.contact}</a></li>
              <li className="pt-2">
                <a
                  href="https://mba.org.mk/index.php/mk/imenik-advokati/imenik-aktivni-advokati"
                  target="_blank"
                  rel="noopener"
                  className="text-[#1E4DB7] hover:text-[#163d92] transition-colors leading-snug inline-block font-medium"
                >
                  {t.mba}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://nexa.mk/for-professionals"
                  className="text-[#1E4DB7] hover:text-[#163d92] transition-colors leading-snug inline-block font-medium"
                >
                  {t.forPros}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">{t.contactHeading}</h4>
            <address className="not-italic text-sm text-gray-600 space-y-1 leading-relaxed">
              <p className="text-gray-900 font-medium">{t.contactLine1}</p>
              <p>{t.contactLine2}</p>
              <p>
                <a href="tel:+38978534258" className="hover:text-[#1E4DB7] transition-colors">{t.phone}</a>
              </p>
              <p>
                <a href={`mailto:${t.email}`} className="hover:text-[#1E4DB7] transition-colors">{t.email}</a>
              </p>
            </address>
          </div>
        </div>

        {/* Popular guides (internal-link network) */}
        <nav aria-label={t.guides} className="border-t border-gray-200 pt-6 mb-6">
          <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">{t.guides}</h4>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {GUIDE_LINKS.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="text-gray-600 hover:text-[#1E4DB7] transition-colors">
                  {language === 'mk' ? g.mk : g.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal disclaimer (E.1) */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <p className="text-xs text-gray-500 italic leading-relaxed max-w-5xl">
            {t.disclaimer}{' '}
            <a
              href="https://mba.org.mk/index.php/mk/imenik-advokati/imenik-aktivni-advokati"
              target="_blank"
              rel="noopener"
              className="text-gray-700 underline hover:text-[#1E4DB7]"
            >
              {t.mbaLink}
            </a>
            .
          </p>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">{t.copyright}</p>
          <a href="https://nexa.mk" className="text-xs text-gray-500 hover:text-[#1E4DB7] transition-colors">
            {t.poweredBy} →
          </a>
        </div>
      </div>
    </footer>
  );
}
