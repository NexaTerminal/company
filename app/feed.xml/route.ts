import { getAllArticles } from '@/lib/blogData';
import { getCategoryById } from '@/lib/categories';
import { canonicalUrl, SITE_URL } from '@/lib/i18n';

export const dynamic = 'force-static';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const articles = getAllArticles('en').slice(0, 50);

  const items = articles
    .map((a) => {
      const url = canonicalUrl('en', `/blog/${a.slug}`);
      const category = getCategoryById(a.category_id, 'en')?.name ?? '';
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      ${category ? `<category>${escapeXml(category)}</category>` : ''}
      <pubDate>${new Date(a.publishedDate).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Company · Nexa — Guides for running a business in North Macedonia</title>
    <link>${SITE_URL}</link>
    <description>Registration, changes, tax, compliance, data protection and more.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
