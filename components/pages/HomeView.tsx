import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PortalHeader from '@/components/PortalHeader';
import PortalFooter from '@/components/PortalFooter';
import CategoryCard from '@/components/CategoryCard';
import ArticleCard from '@/components/ArticleCard';
import { getCategories } from '@/lib/categories';
import { getAllArticles, getArticlesByCategory } from '@/lib/blogData';
import { getDictionary } from '@/lib/dictionary';
import { localizedHref, type Locale } from '@/lib/i18n';

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const categories = getCategories(locale);
  const latest = getAllArticles(locale).slice(0, 6);

  const heading =
    locale === 'mk'
      ? 'Водич за водење бизнис во Северна Македонија'
      : 'Your guide to running a business in North Macedonia';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <PortalHeader locale={locale} />

      <main id="main" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <Image
            src="/home-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
            className="object-cover opacity-[0.12] pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-slate-50/95 pointer-events-none" />
          <div className="absolute inset-0 bg-mesh pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-white text-[#1E4DB7] border border-blue-200 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm mb-6">
              {t.footer.ecosystem}
            </span>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              {heading}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
              {t.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1E4DB7] to-[#163d92] hover:from-[#163d92] hover:to-[#102d6e] text-white px-7 py-6 rounded-xl shadow-lg shadow-blue-500/20"
              >
                <Link href={localizedHref(locale, '/search')}>
                  <Search className="mr-2 h-5 w-5" />
                  {t.common.searchPlaceholder}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-900 hover:bg-white hover:border-[#1E4DB7] hover:text-[#1E4DB7] px-7 py-6 rounded-xl"
              >
                <Link href={localizedHref(locale, '/contact')}>{t.nav.cta}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight text-center">
              {t.common.allTopics}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {categories.map((c) => (
                <CategoryCard
                  key={c.slug}
                  category={c}
                  count={getArticlesByCategory(c.slug, locale).length}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LATEST */}
        {latest.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  {t.common.latestArticles}
                </h2>
                <Link
                  href={localizedHref(locale, '/search')}
                  className="hidden sm:inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium"
                >
                  {t.common.allTopics}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latest.map((a) => (
                  <ArticleCard key={a.id} article={a} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <PortalFooter locale={locale} />
    </div>
  );
}
