import { NextResponse, type NextRequest } from 'next/server';
import { listArticles, getArticle, saveArticle } from '@/lib/admin/articles';
import { saveArticleSchema, toBlogArticle } from '@/lib/admin/schema';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Auth is enforced by middleware for all /api/admin/* routes.

export async function GET() {
  try {
    const articles = await listArticles();
    return NextResponse.json({ articles });
  } catch (err) {
    console.error('[api/admin/articles GET]', err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Internal error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
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

  const { targetCategorySlug, en, mk } = parsed.data;
  try {
    // Creating: reject if the slug already exists.
    const existing = await getArticle(en.slug);
    if (existing) {
      return NextResponse.json({ error: `An article with slug "${en.slug}" already exists.` }, { status: 409 });
    }
    const { slug } = await saveArticle({
      targetCategorySlug,
      en: toBlogArticle(en),
      mk: toBlogArticle(mk),
    });
    return NextResponse.json({ ok: true, slug }, { status: 201 });
  } catch (err) {
    console.error('[api/admin/articles POST]', err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Internal error' }, { status: 500 });
  }
}
