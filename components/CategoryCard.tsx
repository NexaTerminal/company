import Link from 'next/link';
import { Building2, RefreshCw, Receipt, ShieldCheck, Lock, FileText, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Category } from '@/lib/categories';
import { localizedHref, type Locale } from '@/lib/i18n';

const ICONS: Record<string, any> = {
  Building2, RefreshCw, Receipt, ShieldCheck, Lock, FileText,
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
  return (
    <Link href={localizedHref(locale, `/category/${category.slug}`)} className="group block">
      <Card className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
        <CardContent className="p-6">
          <div className="bg-gradient-to-br from-[#1E4DB7] to-[#2BB3C0] w-11 h-11 rounded-xl flex items-center justify-center shadow shadow-blue-500/20 mb-4">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#1E4DB7] transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
          <span className="mt-4 inline-flex items-center text-[#1E4DB7] text-sm font-medium">
            {typeof count === 'number' && count > 0
              ? `${count} ${count === 1 ? 'article' : 'articles'}`
              : ''}
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
