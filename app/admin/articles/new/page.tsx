import AdminHeader from '@/components/admin/AdminHeader';
import ArticleEditor from '@/components/admin/ArticleEditor';
import { getCategories } from '@/lib/categories';

export const dynamic = 'force-dynamic';

export default function NewArticlePage() {
  const categories = getCategories('en').map((c) => ({ slug: c.slug, name: c.name }));
  return (
    <>
      <AdminHeader title="New article" />
      <ArticleEditor categories={categories} initial={null} mode="new" />
    </>
  );
}
