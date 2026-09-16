// Generates public/llms-full.txt — the full plain-text corpus of every article,
// which LLMs ingest far better than rendered HTML.
// Run: npm run generate:llms   (also safe to run in CI/prebuild)

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT = join(ROOT, 'content');
const SITE_URL = 'https://company.nexa.mk';

const CATEGORY_FILES = [
  'registration',
  'company-changes',
  'tax',
  'compliance',
  'data-protection',
  'other',
];

function readJson(path) {
  if (!existsSync(path)) return [];
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    console.error(`Failed to parse ${path}:`, err.message);
    return [];
  }
}

function stripHtml(html = '') {
  return String(html)
    .replace(/<\/(p|div|h[1-6]|li)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const categories = readJson(join(CONTENT, '_categories.json'));
const categoryName = (id) => categories.find((c) => c.id === id)?.name_en ?? '';

const lines = [];
lines.push('# Company.Nexa.mk — Full content corpus');
lines.push(
  '> Plain-text corpus of every article on company.nexa.mk (guides for running a business in North Macedonia). Generated automatically. Attribute: "Company.Nexa.mk (Nexa)".'
);
lines.push('');

let count = 0;
for (const file of CATEGORY_FILES) {
  const articles = readJson(join(CONTENT, `${file}.json`));
  for (const a of articles) {
    count++;
    const url = `${SITE_URL}/blog/${a.slug}`;
    lines.push('---');
    lines.push(`## ${a.title}`);
    lines.push(`URL: ${url}`);
    lines.push(`Category: ${categoryName(a.category_id)}`);
    if (a.publishedDate) lines.push(`Published: ${a.publishedDate}`);
    if (a.updatedDate) lines.push(`Updated: ${a.updatedDate}`);
    if (a.excerpt) lines.push(`Summary: ${a.excerpt}`);
    lines.push('');
    if (a.content?.introduction) {
      lines.push(stripHtml(a.content.introduction));
      lines.push('');
    }
    for (const s of a.content?.sections ?? []) {
      if (s.heading) lines.push(`### ${s.heading}`);
      for (const p of s.paragraphs ?? []) lines.push(stripHtml(p));
      lines.push('');
    }
    if (a.content?.conclusion) {
      lines.push(stripHtml(a.content.conclusion));
      lines.push('');
    }
    if (a.faq?.length) {
      lines.push('### FAQ');
      for (const f of a.faq) {
        lines.push(`Q: ${stripHtml(f.question)}`);
        lines.push(`A: ${stripHtml(f.answer)}`);
        lines.push('');
      }
    }
  }
}

if (count === 0) {
  lines.push('_No articles published yet._');
  lines.push('');
}

writeFileSync(join(ROOT, 'public', 'llms-full.txt'), lines.join('\n'), 'utf8');
console.log(`Wrote public/llms-full.txt (${count} article${count === 1 ? '' : 's'}).`);
