'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BlogArticle } from '@/lib/blogData';

type Cat = { slug: string; name: string };

interface LocaleFields {
  title: string;
  excerpt: string;
  readingTime: string;
  introduction: string;
  sections: { heading: string; level: 2 | 3; paragraphs: string[] }[];
  conclusion: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string; // comma-separated in the UI
  faq: { question: string; answer: string }[];
}

interface Shared {
  slug: string;
  categorySlug: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  image: string;
  relatedArticles: string; // comma-separated
}

function toLocaleFields(a: BlogArticle | null): LocaleFields {
  return {
    title: a?.title ?? '',
    excerpt: a?.excerpt ?? '',
    readingTime: a?.readingTime ?? '',
    introduction: a?.content?.introduction ?? '',
    sections: (a?.content?.sections ?? []).map((s) => ({
      heading: s.heading,
      level: (s.level ?? 2) as 2 | 3,
      paragraphs: s.paragraphs?.length ? [...s.paragraphs] : [''],
    })),
    conclusion: a?.content?.conclusion ?? '',
    metaTitle: a?.seo?.metaTitle ?? '',
    metaDescription: a?.seo?.metaDescription ?? '',
    keywords: (a?.seo?.keywords ?? []).join(', '),
    faq: (a?.faq ?? []).map((f) => ({ ...f })),
  };
}

const input =
  'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1E4DB7] focus:outline-none focus:ring-2 focus:ring-[#1E4DB7]/20';
const label = 'block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1';

export default function ArticleEditor({
  categories,
  initial,
  mode,
}: {
  categories: Cat[];
  initial: { categorySlug: string; en: BlogArticle; mk: BlogArticle | null } | null;
  mode: 'new' | 'edit';
}) {
  const router = useRouter();
  const today = new Date().toISOString().slice(0, 10);

  const [shared, setShared] = useState<Shared>({
    slug: initial?.en.slug ?? '',
    categorySlug: initial?.categorySlug ?? categories[0]?.slug ?? '',
    author: initial?.en.author ?? 'Nexa Legal Network',
    publishedDate: initial?.en.publishedDate ?? today,
    updatedDate: initial?.en.updatedDate ?? today,
    image: initial?.en.image ?? '',
    relatedArticles: (initial?.en.relatedArticles ?? []).join(', '),
  });

  const [en, setEn] = useState<LocaleFields>(toLocaleFields(initial?.en ?? null));
  const [mk, setMk] = useState<LocaleFields>(toLocaleFields(initial?.mk ?? null));
  const [tab, setTab] = useState<'en' | 'mk'>('en');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const originalSlug = initial?.en.slug;
  const originalCategorySlug = initial?.categorySlug;

  const cur = tab === 'en' ? en : mk;
  const setCur = tab === 'en' ? setEn : setMk;

  function patch(p: Partial<LocaleFields>) {
    setCur((prev) => ({ ...prev, ...p }));
  }

  function buildArticle(fields: LocaleFields): BlogArticle {
    return {
      id: shared.slug,
      slug: shared.slug,
      category_id: '',
      title: fields.title,
      excerpt: fields.excerpt,
      author: shared.author,
      publishedDate: shared.publishedDate,
      updatedDate: shared.updatedDate || undefined,
      readingTime: fields.readingTime,
      image: shared.image,
      content: {
        introduction: fields.introduction,
        sections: fields.sections.map((s) => ({
          heading: s.heading,
          level: s.level,
          paragraphs: s.paragraphs.filter((p) => p.trim() !== ''),
        })),
        conclusion: fields.conclusion || undefined,
      },
      seo: {
        metaTitle: fields.metaTitle || undefined,
        metaDescription: fields.metaDescription,
        keywords: fields.keywords.split(',').map((k) => k.trim()).filter(Boolean),
      },
      faq: fields.faq.filter((f) => f.question.trim() && f.answer.trim()),
      relatedArticles: shared.relatedArticles.split(',').map((s) => s.trim()).filter(Boolean),
    };
  }

  async function save() {
    setError('');
    if (!shared.slug.trim()) return setError('Slug is required.');
    if (!en.title.trim() || !mk.title.trim()) return setError('Both EN and MK titles are required.');

    setSaving(true);
    const body = {
      targetCategorySlug: shared.categorySlug,
      originalSlug,
      originalCategorySlug,
      en: buildArticle(en),
      mk: buildArticle(mk),
    };
    try {
      const url = mode === 'new' ? '/api/admin/articles' : `/api/admin/articles/${originalSlug}`;
      const res = await fetch(url, {
        method: mode === 'new' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok && data.ok !== false && (data.ok || data.slug)) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data?.error || 'Save failed.' + (data?.issues ? ' ' + data.issues.map((i: any) => `${i.path}: ${i.message}`).join('; ') : ''));
        setSaving(false);
      }
    } catch {
      setError('Save failed. Please try again.');
      setSaving(false);
    }
  }

  async function remove() {
    if (!originalSlug || !confirm(`Delete "${en.title || originalSlug}"? This removes both languages.`)) return;
    setSaving(true);
    const res = await fetch(`/api/admin/articles/${originalSlug}`, { method: 'DELETE' });
    if (res.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      setError('Delete failed.');
      setSaving(false);
    }
  }

  // ---- section + faq mutators (operate on the active locale) ----
  const setSections = (fn: (s: LocaleFields['sections']) => LocaleFields['sections']) =>
    patch({ sections: fn(cur.sections) });
  const setFaq = (fn: (f: LocaleFields['faq']) => LocaleFields['faq']) => patch({ faq: fn(cur.faq) });

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 pb-24">
      <button onClick={() => router.push('/admin')} className="inline-flex items-center text-sm text-gray-500 hover:text-[#1E4DB7] mb-4">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to articles
      </button>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">{mode === 'new' ? 'New article' : 'Edit article'}</h1>

      {/* Shared metadata */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 mb-6 grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Slug (URL) *</label>
          <input className={input} value={shared.slug} disabled={mode === 'edit'}
            onChange={(e) => setShared({ ...shared, slug: e.target.value })}
            placeholder="change-company-manager-north-macedonia" />
          {mode === 'edit' && <p className="text-xs text-gray-400 mt-1">Slug can't be changed after creation.</p>}
        </div>
        <div>
          <label className={label}>Category *</label>
          <select className={input} value={shared.categorySlug} onChange={(e) => setShared({ ...shared, categorySlug: e.target.value })}>
            {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Author</label>
          <input className={input} value={shared.author} onChange={(e) => setShared({ ...shared, author: e.target.value })} />
        </div>
        <div>
          <label className={label}>Image (path or URL)</label>
          <input className={input} value={shared.image} onChange={(e) => setShared({ ...shared, image: e.target.value })} placeholder="/marketing-5.jpg" />
        </div>
        <div>
          <label className={label}>Published date</label>
          <input className={input} type="date" value={shared.publishedDate} onChange={(e) => setShared({ ...shared, publishedDate: e.target.value })} />
        </div>
        <div>
          <label className={label}>Updated date</label>
          <input className={input} type="date" value={shared.updatedDate} onChange={(e) => setShared({ ...shared, updatedDate: e.target.value })} />
        </div>
        <div className="sm:col-span-2">
          <label className={label}>Related article slugs (comma-separated)</label>
          <input className={input} value={shared.relatedArticles} onChange={(e) => setShared({ ...shared, relatedArticles: e.target.value })} />
        </div>
      </section>

      {/* Locale tabs */}
      <div className="flex gap-1 mb-4">
        {(['en', 'mk'] as const).map((l) => (
          <button key={l} onClick={() => setTab(l)}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${tab === l ? 'bg-[#1E4DB7] text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
            {l === 'en' ? 'English' : 'Македонски'}
          </button>
        ))}
      </div>

      {/* Per-locale fields */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <div>
          <label className={label}>Title *</label>
          <input className={input} value={cur.title} onChange={(e) => patch({ title: e.target.value })} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={label}>Reading time</label>
            <input className={input} value={cur.readingTime} onChange={(e) => patch({ readingTime: e.target.value })} placeholder={tab === 'en' ? '5 min read' : '5 мин читање'} />
          </div>
        </div>
        <div>
          <label className={label}>Excerpt</label>
          <textarea className={input} rows={2} value={cur.excerpt} onChange={(e) => patch({ excerpt: e.target.value })} />
        </div>
        <div>
          <label className={label}>Introduction (HTML)</label>
          <textarea className={`${input} font-mono text-xs`} rows={4} value={cur.introduction} onChange={(e) => patch({ introduction: e.target.value })} placeholder="<p>…</p>" />
        </div>

        {/* Sections */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className={label + ' mb-0'}>Sections</label>
            <Button type="button" variant="ghost" size="sm" className="text-[#1E4DB7]"
              onClick={() => setSections((s) => [...s, { heading: '', level: 2, paragraphs: [''] }])}>
              <Plus className="h-4 w-4 mr-1" /> Add section
            </Button>
          </div>
          <div className="space-y-4">
            {cur.sections.map((s, si) => (
              <div key={si} className="rounded-lg border border-gray-200 p-3 bg-slate-50">
                <div className="flex gap-2 items-start mb-2">
                  <input className={input} value={s.heading} placeholder="Heading"
                    onChange={(e) => setSections((secs) => secs.map((x, i) => i === si ? { ...x, heading: e.target.value } : x))} />
                  <select className="rounded-lg border border-gray-300 px-2 py-2 text-sm" value={s.level}
                    onChange={(e) => setSections((secs) => secs.map((x, i) => i === si ? { ...x, level: Number(e.target.value) as 2 | 3 } : x))}>
                    <option value={2}>H2</option>
                    <option value={3}>H3</option>
                  </select>
                  <button onClick={() => setSections((secs) => secs.filter((_, i) => i !== si))} className="p-2 text-gray-400 hover:text-red-600" title="Remove section">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                {s.paragraphs.map((p, pi) => (
                  <div key={pi} className="flex gap-2 items-start mb-2">
                    <textarea className={`${input} font-mono text-xs`} rows={3} value={p} placeholder="<p>…</p> or <table>…</table>"
                      onChange={(e) => setSections((secs) => secs.map((x, i) => i === si ? { ...x, paragraphs: x.paragraphs.map((y, j) => j === pi ? e.target.value : y) } : x))} />
                    <button onClick={() => setSections((secs) => secs.map((x, i) => i === si ? { ...x, paragraphs: x.paragraphs.filter((_, j) => j !== pi) } : x))} className="p-2 text-gray-400 hover:text-red-600" title="Remove paragraph">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <Button type="button" variant="ghost" size="sm" className="text-gray-500"
                  onClick={() => setSections((secs) => secs.map((x, i) => i === si ? { ...x, paragraphs: [...x.paragraphs, ''] } : x))}>
                  <Plus className="h-3 w-3 mr-1" /> Add paragraph
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className={label}>Conclusion (HTML, optional)</label>
          <textarea className={`${input} font-mono text-xs`} rows={3} value={cur.conclusion} onChange={(e) => patch({ conclusion: e.target.value })} />
        </div>

        {/* SEO */}
        <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
          <div>
            <label className={label}>SEO meta title</label>
            <input className={input} value={cur.metaTitle} onChange={(e) => patch({ metaTitle: e.target.value })} />
          </div>
          <div>
            <label className={label}>SEO keywords (comma-separated)</label>
            <input className={input} value={cur.keywords} onChange={(e) => patch({ keywords: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <label className={label}>SEO meta description</label>
            <textarea className={input} rows={2} value={cur.metaDescription} onChange={(e) => patch({ metaDescription: e.target.value })} />
          </div>
        </div>

        {/* FAQ */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <label className={label + ' mb-0'}>FAQ</label>
            <Button type="button" variant="ghost" size="sm" className="text-[#1E4DB7]" onClick={() => setFaq((f) => [...f, { question: '', answer: '' }])}>
              <Plus className="h-4 w-4 mr-1" /> Add question
            </Button>
          </div>
          <div className="space-y-3">
            {cur.faq.map((f, fi) => (
              <div key={fi} className="rounded-lg border border-gray-200 p-3 bg-slate-50">
                <div className="flex gap-2 items-start mb-2">
                  <input className={input} value={f.question} placeholder="Question"
                    onChange={(e) => setFaq((arr) => arr.map((x, i) => i === fi ? { ...x, question: e.target.value } : x))} />
                  <button onClick={() => setFaq((arr) => arr.filter((_, i) => i !== fi))} className="p-2 text-gray-400 hover:text-red-600" title="Remove">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <textarea className={input} rows={2} value={f.answer} placeholder="Answer"
                  onChange={(e) => setFaq((arr) => arr.map((x, i) => i === fi ? { ...x, answer: e.target.value } : x))} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {error && <p className="text-sm text-red-600 mt-4">{error}</p>}

      {/* Sticky action bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {mode === 'edit' ? (
            <Button variant="ghost" onClick={remove} disabled={saving} className="text-red-600 hover:bg-red-50">
              <Trash2 className="h-4 w-4 mr-1.5" /> Delete
            </Button>
          ) : <span />}
          <Button onClick={save} disabled={saving} className="bg-[#1E4DB7] hover:bg-[#163d92] text-white">
            {saving ? 'Saving…' : mode === 'new' ? 'Create article' : 'Save changes'}
          </Button>
        </div>
      </div>
    </main>
  );
}
