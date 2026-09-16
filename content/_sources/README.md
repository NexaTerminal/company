# Source material for article drafting

Drop raw legal source material here, one subfolder per topic. Claude reads
these to draft accurate, fact-checked articles — nothing in here is published
or shipped; it's working material only.

Subfolders (match the category slugs):

- `registration/` — Company registration
- `company-changes/` — Company changes
- `tax/` — Tax
- `compliance/` — Compliance
- `data-protection/` — Data protection (GDPR)
- `other/` — General / Other

## What to drop in

Anything that carries the legal ground truth, in any of these forms:

- **Law text / official pages** — paste as `.txt`/`.md`, or drop PDFs/`.docx`
  (e.g. Закон за трговските друштва, Закон за ДДВ, Закон за заштита на личните податоци…).
- **Your notes / bullet points** — rough is fine; Claude expands them.
- **Existing Nexa material** — prior blog posts, client FAQs, internal explainers.
- **Links** — a `links.md` with URLs to official sources.

## Workflow

1. Drop material for one topic here.
2. Claude drafts 2–3 articles for that topic in the JSON schema (EN + MK), with FAQ + SEO.
3. You review/correct the legal facts; Claude fixes.
4. Move to the next topic.

> Everything in this folder except this README is git-ignored, so raw law dumps
> and drafts don't bloat the repo or get published.
