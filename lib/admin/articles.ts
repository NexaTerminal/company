import { getStorage } from '@/lib/admin/storage';
import { getAllCategorySlugs, getCategoryBySlug } from '@/lib/categories';
import type { BlogArticle } from '@/lib/blogData';

// company.nexa stores one JSON array per category, per locale:
//   content/<cat>.json         (EN, default)
//   content/mk/<cat>.json       (MK)
// This service reads/writes individual articles inside those arrays.

function enPath(catSlug: string) {
  return `content/${catSlug}.json`;
}
function mkPath(catSlug: string) {
  return `content/mk/${catSlug}.json`;
}

type FileState = { articles: BlogArticle[]; sha: string | null };

async function readArray(relPath: string): Promise<FileState> {
  try {
    const { content, sha } = await getStorage().readFile(relPath);
    const parsed = JSON.parse(content);
    return { articles: Array.isArray(parsed) ? (parsed as BlogArticle[]) : [], sha };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    // A genuinely missing file is fine (empty topic). But an auth/config error
    // (missing GITHUB_TOKEN, 401/403, etc.) must surface, not look like "no articles".
    if (msg.includes('404') || msg.includes('ENOENT') || msg.includes('no such file')) {
      return { articles: [], sha: null };
    }
    throw new Error(`Storage read failed for ${relPath}: ${msg}`);
  }
}

async function writeArray(relPath: string, articles: BlogArticle[], sha: string | null, message: string) {
  const json = JSON.stringify(articles, null, 2);
  return getStorage().writeFile(relPath, json, message, sha);
}

export interface ArticleSummary {
  slug: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  publishedDate: string;
  updatedDate?: string;
  readingTime: string;
  locales: ('en' | 'mk')[];
}

/** Dashboard listing across every category, both locales. */
export async function listArticles(): Promise<ArticleSummary[]> {
  const slugs = getAllCategorySlugs();
  const out: ArticleSummary[] = [];

  for (const catSlug of slugs) {
    const cat = getCategoryBySlug(catSlug, 'en');
    const [en, mk] = await Promise.all([readArray(enPath(catSlug)), readArray(mkPath(catSlug))]);
    const mkSlugs = new Set(mk.articles.map((a) => a.slug));

    for (const a of en.articles) {
      out.push({
        slug: a.slug,
        title: a.title,
        categorySlug: catSlug,
        categoryName: cat?.name ?? catSlug,
        publishedDate: a.publishedDate,
        updatedDate: a.updatedDate,
        readingTime: a.readingTime,
        locales: mkSlugs.has(a.slug) ? ['en', 'mk'] : ['en'],
      });
    }
  }

  out.sort((a, b) => new Date(b.updatedDate ?? b.publishedDate).getTime() - new Date(a.updatedDate ?? a.publishedDate).getTime());
  return out;
}

export interface ArticlePair {
  categorySlug: string;
  en: BlogArticle;
  mk: BlogArticle | null;
}

/** Find an article (both locales) by slug across all categories. */
export async function getArticle(slug: string): Promise<ArticlePair | null> {
  for (const catSlug of getAllCategorySlugs()) {
    const en = await readArray(enPath(catSlug));
    const found = en.articles.find((a) => a.slug === slug);
    if (found) {
      const mk = await readArray(mkPath(catSlug));
      return {
        categorySlug: catSlug,
        en: found,
        mk: mk.articles.find((a) => a.slug === slug) ?? null,
      };
    }
  }
  return null;
}

export interface SaveInput {
  targetCategorySlug: string;
  originalSlug?: string;
  originalCategorySlug?: string;
  en: BlogArticle;
  mk: BlogArticle;
}

/**
 * Create or update an article. Writes the EN and MK category files, moving the
 * article between category files if the category changed. Returns the slug.
 */
export async function saveArticle(input: SaveInput): Promise<{ slug: string }> {
  const { targetCategorySlug, originalSlug, originalCategorySlug, en, mk } = input;
  const cat = getCategoryBySlug(targetCategorySlug, 'en');
  if (!cat) throw new Error(`Unknown category: ${targetCategorySlug}`);

  // Force consistency: id + category_id derive from slug/target category.
  en.id = en.id || en.slug;
  mk.id = en.id;
  en.category_id = cat.id;
  mk.category_id = cat.id;

  const slug = en.slug;
  const movedFile = originalCategorySlug && originalCategorySlug !== targetCategorySlug;
  const renamed = originalSlug && originalSlug !== slug;
  const commitMsg = `admin: ${originalSlug ? 'update' : 'create'} article ${slug}`;

  for (const [locale, article, target] of [
    ['en', en, enPath(targetCategorySlug)] as const,
    ['mk', mk, mkPath(targetCategorySlug)] as const,
  ]) {
    // Remove the old copy from its previous file if it moved or was renamed.
    if ((movedFile || renamed) && originalCategorySlug && originalSlug) {
      const oldRel = locale === 'en' ? enPath(originalCategorySlug) : mkPath(originalCategorySlug);
      if (oldRel !== target) {
        const old = await readArray(oldRel);
        const next = old.articles.filter((a) => a.slug !== originalSlug && a.slug !== slug);
        if (next.length !== old.articles.length) {
          await writeArray(oldRel, next, old.sha, `${commitMsg} (move out ${locale})`);
        }
      }
    }

    // Upsert into the target file.
    const state = await readArray(target);
    const idx = state.articles.findIndex((a) => a.slug === slug || a.slug === originalSlug);
    if (idx >= 0) state.articles[idx] = article;
    else state.articles.push(article);
    await writeArray(target, state.articles, state.sha, `${commitMsg} (${locale})`);
  }

  return { slug };
}

/** Delete an article (both locales) from its category files. */
export async function deleteArticle(slug: string): Promise<boolean> {
  let removed = false;
  for (const catSlug of getAllCategorySlugs()) {
    for (const rel of [enPath(catSlug), mkPath(catSlug)]) {
      const state = await readArray(rel);
      const next = state.articles.filter((a) => a.slug !== slug);
      if (next.length !== state.articles.length) {
        await writeArray(rel, next, state.sha, `admin: delete article ${slug}`);
        removed = true;
      }
    }
  }
  return removed;
}
