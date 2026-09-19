import Link from 'next/link';
import Image from 'next/image';
import { Building2, RefreshCw, Receipt, ShieldCheck, Lock, FileText } from 'lucide-react';
import type { Category } from '@/lib/categories';
import { localizedHref, type Locale } from '@/lib/i18n';

const ICONS: Record<string, any> = {
  Building2, RefreshCw, Receipt, ShieldCheck, Lock, FileText,
};

// Distinct on-brand gradient per topic, so the six cards read as intentional
// even before real category photos are supplied.
const GRADIENTS: Record<string, string> = {
  registration: 'from-[#1E4DB7] to-[#2BB3C0]',
  'company-changes': 'from-[#2BB3C0] to-[#1E4DB7]',
  tax: 'from-[#163d92] to-[#2BB3C0]',
  compliance: 'from-[#1E4DB7] to-[#0f766e]',
  'data-protection': 'from-[#312e81] to-[#1E4DB7]',
  other: 'from-[#334155] to-[#1E4DB7]',
};

export default function CategoryCard({
  category,
  count,
  locale,
}: {
  category: Category;
  count?: number;
  locale: Locale;
}) {
  const Icon = ICONS[category.icon] || FileText;
  const gradient = GRADIENTS[category.slug] || 'from-[#1E4DB7] to-[#2BB3C0]';
  const countLabel =
    typeof count === 'number' && count > 0
      ? `${count} ${count === 1 ? (locale === 'mk' ? 'статија' : 'article') : locale === 'mk' ? 'статии' : 'articles'}`
      : locale === 'mk' ? 'Наскоро' : 'Coming soon';

  return (
    <Link href={localizedHref(locale, `/category/${category.slug}`)} className="group block">
      <div className="relative h-56 rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Background: image if provided, else branded gradient */}
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        {/* Icon chip */}
        <div className="absolute top-4 left-4 bg-white/15 backdrop-blur w-11 h-11 rounded-xl flex items-center justify-center ring-1 ring-white/25">
          <Icon className="h-5 w-5 text-white" />
        </div>

        {/* Text */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">{countLabel}</span>
          <h3 className="text-lg font-bold leading-snug mt-1">{category.name}</h3>
          <p className="text-sm text-white/85 leading-relaxed mt-1 line-clamp-2">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
