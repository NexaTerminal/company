import { notFound } from 'next/navigation';
import AdminHeader from '@/components/admin/AdminHeader';
import ArticleEditor from '@/components/admin/ArticleEditor';
import { getArticle } from '@/lib/admin/articles';
import { getCategories } from '@/lib/categories';

export const dynamic = 'force-dynamic';

export default async function EditArticlePage({ params }: { params: { slug: string } }) {
  const pair = await getArticle(params.slug);
  if (!pair) notFound();

  const categories = getCategories('en').map((c) => ({ slug: c.slug, name: c.name }));
  return (
    <>
      <AdminHeader title="Edit article" />
      <ArticleEditor categories={categories} initial={pair} mode="edit" />
    </>
  );
}
