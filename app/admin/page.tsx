import Link from 'next/link';
import { Plus, Pencil, Globe } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import { Button } from '@/components/ui/button';
import { listArticles } from '@/lib/admin/articles';
import { getCategories } from '@/lib/categories';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const [articles, categories] = await Promise.all([
    listArticles().catch(() => []),
    Promise.resolve(getCategories('en')),
  ]);

  const byCategory = categories.map((c) => ({
    category: c,
    items: articles.filter((a) => a.categorySlug === c.slug),
  }));

  return (
    <>
      <AdminHeader title="Articles" />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Articles</h1>
            <p className="text-sm text-gray-500 mt-1">{articles.length} total across {categories.length} topics</p>
          </div>
          <Button asChild className="bg-[#1E4DB7] hover:bg-[#163d92] text-white">
            <Link href="/admin/articles/new"><Plus className="h-4 w-4 mr-1.5" /> New article</Link>
          </Button>
        </div>

        <div className="space-y-8">
          {byCategory.map(({ category, items }) => (
            <section key={category.slug}>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                {category.name} <span className="text-gray-400 font-normal">({items.length})</span>
              </h2>
              {items.length === 0 ? (
                <p className="text-sm text-gray-400 italic">No articles yet.</p>
              ) : (
                <ul className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                  {items.map((a) => (
                    <li key={a.slug} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50">
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 truncate">{a.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                          <span className="font-mono">{a.slug}</span>
                          <span className="inline-flex items-center gap-1">
                            <Globe className="h-3 w-3" />{a.locales.join(', ').toUpperCase()}
                          </span>
                          <span>· {a.updatedDate ?? a.publishedDate}</span>
                        </p>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="text-[#1E4DB7]">
                        <Link href={`/admin/articles/${a.slug}`}><Pencil className="h-4 w-4 mr-1.5" /> Edit</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
