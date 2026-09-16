import { NextResponse, type NextRequest } from 'next/server';
import { getArticle, saveArticle, deleteArticle } from '@/lib/admin/articles';
import { saveArticleSchema, toBlogArticle } from '@/lib/admin/schema';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Auth is enforced by middleware for all /api/admin/* routes.

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const pair = await getArticle(params.slug);
    if (!pair) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(pair);
  } catch (err) {
    console.error('[api/admin/articles/[slug] GET]', err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Internal error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const parsed = saveArticleSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.issues.map((i) => ({ path: i.path.join('.'), message: i.message })) },
      { status: 400 }
    );
  }

  const { targetCategorySlug, originalCategorySlug, en, mk } = parsed.data;
  const originalSlug = params.slug;

  try {
    const existing = await getArticle(originalSlug);
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // If the slug changed, make sure the new one is free.
    if (en.slug !== originalSlug) {
      const clash = await getArticle(en.slug);
      if (clash) return NextResponse.json({ error: `An article with slug "${en.slug}" already exists.` }, { status: 409 });
    }

    const { slug } = await saveArticle({
      targetCategorySlug,
      originalSlug,
      originalCategorySlug: originalCategorySlug ?? existing.categorySlug,
      en: toBlogArticle(en),
      mk: toBlogArticle(mk),
    });
    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    console.error('[api/admin/articles/[slug] PUT]', err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Internal error' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const removed = await deleteArticle(params.slug);
    if (!removed) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/admin/articles/[slug] DELETE]', err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Internal error' }, { status: 500 });
  }
}
