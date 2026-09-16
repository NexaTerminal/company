import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/lib/categories';
import { getDictionary } from '@/lib/dictionary';
import { localizedHref, type Locale } from '@/lib/i18n';

const SISTER_LINKS = [
  { href: 'https://nexa.mk', en: 'Nexa (Hub & Terminal)', mk: 'Nexa (Hub и Терминал)' },
  { href: 'https://samodaprasham.mk', en: 'SamoDaPrasham — Legal Q&A', mk: 'SamoDaPrasham — Правни прашања' },
  { href: 'https://immigration.mk', en: 'Immigration to North Macedonia', mk: 'Имиграција во Северна Македонија' },
  { href: 'https://macedoniancitizenship.mk', en: 'Macedonian Citizenship', mk: 'Македонско државјанство' },
  { href: 'https://iplaw.nexa.mk', en: 'IP Law (Trademarks & Patents)', mk: 'Право на интелектуална сопственост' },
  { href: 'https://topics.nexa.mk', en: 'Topics — Expert Q&A', mk: 'Topics — Експертски прашања' },
];

const MBA_URL = 'https://mba.org.mk/index.php/mk/imenik-advokati/imenik-aktivni-advokati';

export default function PortalFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const categories = getCategories(locale);

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
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.footer.sitePurpose}</p>
            <Link
              href={localizedHref(locale, '/about')}
              className="text-sm text-[#1E4DB7] hover:text-[#163d92] font-medium transition-colors"
            >
              {t.footer.about} →
            </Link>
          </div>

          {/* Col 2: Topics */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">{t.footer.topics}</h4>
            <ul className="space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={localizedHref(locale, `/category/${c.slug}`)}
                    className="text-gray-600 hover:text-[#1E4DB7] transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">{t.footer.ecosystem}</h4>
            <ul className="space-y-2 text-sm">
              {SISTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-600 hover:text-[#1E4DB7] transition-colors">
                    {locale === 'mk' ? l.mk : l.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal + Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href={localizedHref(locale, '/privacy')} className="text-gray-600 hover:text-[#1E4DB7] transition-colors">{t.footer.privacy}</Link></li>
              <li><Link href={localizedHref(locale, '/terms')} className="text-gray-600 hover:text-[#1E4DB7] transition-colors">{t.footer.terms}</Link></li>
              <li><Link href={localizedHref(locale, '/contact')} className="text-gray-600 hover:text-[#1E4DB7] transition-colors">{t.footer.contact}</Link></li>
            </ul>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">{t.footer.contactHeading}</h4>
            <address className="not-italic text-sm text-gray-600 space-y-1 leading-relaxed">
              <p className="text-gray-900 font-medium">{t.footer.company}</p>
              <p>{t.footer.city}</p>
              <p><a href="tel:+38978534258" className="hover:text-[#1E4DB7] transition-colors">+389 78 534 258</a></p>
              <p><a href="mailto:info@nexa.mk" className="hover:text-[#1E4DB7] transition-colors">info@nexa.mk</a></p>
            </address>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <p className="text-xs text-gray-500 italic leading-relaxed max-w-5xl">
            {t.footer.disclaimer}{' '}
            <a href={MBA_URL} target="_blank" rel="noopener" className="text-gray-700 underline hover:text-[#1E4DB7]">
              {t.footer.mbaLink}
            </a>
            .
          </p>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">{t.footer.copyright}</p>
          <a href="https://nexa.mk" className="text-xs text-gray-500 hover:text-[#1E4DB7] transition-colors">
            {t.footer.poweredBy} →
          </a>
        </div>
      </div>
    </footer>
  );
}
