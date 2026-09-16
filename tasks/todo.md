# company.nexa.mk → "sister site" of samodaprasham.mk — Redesign Plan

Transform company.nexa.mk from a single deep company-registration guide into a
content-driven **corporate-law information portal** modeled on samodaprasham.mk
(category → article → search + lead form), while keeping company.nexa's own
brand (blue `#1E4DB7` + teal `#2BB3C0`, Inter). AI chat / DB / admin are dropped.

## Locked decisions

| Area | Decision |
|---|---|
| IA | Category → many articles (SDP model) |
| Content store | **JSON files** (no DB), imported at build — same as SDP |
| Hosting | **Vercel**, drop `output: 'export'` (enables API routes, sitemap, ISR) |
| Lead delivery | **Email only** (Resend) via one API route — no DB needed now |
| Language | **EN default** (root) + **MK** under `/mk`, path-based for SEO |
| Categories (6) | Registration · Company changes · Tax · Compliance · GDPR (data protection) · General/Other |
| Search | **Yes**, client-side over JSON |
| Lead form fields | Topic/category · Email · Message (anonymous-referral consent kept) |
| Registration content | **Reuse** current guide as the Registration category's articles |
| Brand | Keep **#1E4DB7 blue + #2BB3C0 teal**, **Inter** |
| Dropped from SDP | AI chat, embeddings/Qdrant, MongoDB, NextAuth, admin CMS |

> Leads are **email-only**, so we don't touch Mongo now. The earlier "same DB,
> prefixed collections" idea becomes a *future* option — keep a clean seam
> (`lib/leads.ts`) so a `company_leads` collection can be added later without rework.

## Target sitemap

```
/                         EN home  (hero + categories grid + latest articles)
/category/[slug]          category page → article cards
/blog/[slug]              article page (introduction + sections + FAQ + lead CTA)
/search                   client-side search
/about  /privacy  /terms  static pages (port existing)
/mk, /mk/category/..., /mk/blog/...   Macedonian mirror
/api/contact             lead form → Resend email (only server route)
sitemap.ts, robots.ts, feed.xml
```

## Categories (slugs)

| # | EN | MK | slug |
|---|---|---|---|
| 1 | Company Registration | Регистрација на фирма | `registration` |
| 2 | Company Changes | Промени во фирма | `company-changes` |
| 3 | Tax | Даноци | `tax` |
| 4 | Compliance | Усогласеност | `compliance` |
| 5 | Data Protection (GDPR) | Заштита на лични податоци | `data-protection` |
| 6 | General / Other | Друго | `other` |

## Article data model (per-category JSON, EN + MK)

Reuse SDP's `BlogArticle` schema verbatim so we can lift `blogData.ts`,
`BlogContent`, `BlogCard`, FAQ + JSON-LD wholesale:

```
id, title, slug, excerpt, category_id, author, publishedDate, updatedDate?,
readingTime, image, content{ introduction, sections[]{heading,level,paragraphs[]} },
seo{ metaTitle, metaDescription, keywords[] }, faq[], relatedArticles[]
```

Files: `content/registration.json`, `content/company-changes.json`, … +
`content/en/*.json`, plus `content/_categories.json`.

## Components

**Lift & adapt from SDP:** `HeroSection`, `LatestPosts`, `BlogCard`,
`CategoryCard`, `BlogContent`, `ArticleFaq`, `AuthorBio`, `SearchClient`,
`Header/Footer`, `LanguageSwitcher`, `LocalizedLink`, `blogData.ts`,
`blogUtils.ts`, `i18n.ts`, JSON-LD helpers.

**Reuse company.nexa's own:** `SiteNavbar`, `SiteFooter`, `NexaWordmark`,
`JsonLd`, `CookieBanner`, the shadcn `ui/` set, blue/teal gradient tokens.

**Drop entirely:** `ChatSidebar`, `AskAboutArticle`, `BlogChatSidebar`,
`BlogEmbeddingService`, `ChatBotService`, admin/auth/api-chat, Providers(NextAuth).

**Rewrite:** `LeadContactForm`/`BlogContactForm` → single lightweight form →
`POST /api/contact` → Resend. Keep the existing anonymous-referral consent copy.

## Brand adaptation

SDP's neutral shadcn theme → inject company.nexa's palette: set `--primary` to
the blue, reuse `from-[#1E4DB7] to-[#2BB3C0]` gradient on hero/badges/cards, keep
Inter via `next/font`. Result: SDP's layout & density, company.nexa's color identity.

## i18n

Path-based like SDP but inverted default: **EN at root, MK at `/mk`**. Replaces the
current `useState` toggle. `hreflang` alternates + per-locale canonicals.

## SEO (mandatory)

Per-article `metaTitle`/`metaDescription`/`keywords`; `Article` + `FAQPage` +
`BreadcrumbList` JSON-LD; one `<h1>`; `next/image`; Latin slugs;
`sitemap.ts`/`robots.ts`/`feed.xml`. Cross-link Nexa ecosystem (immigration.mk,
iplaw.nexa.mk) as today.

## Build/deploy changes

- `next.config`: remove `output:'export'` + `images.unoptimized`; add Vercel config.
- Upgrade Next 13.5 → align with SDP's version (app-router parity).
- Add `resend` dep + `RESEND_API_KEY` env. Add sitemap generation.
- Domain: keep `company.nexa.mk` now; structure is domain-agnostic so the future
  one-word domain is a DNS + canonical swap only.

## Phased execution

- [x] **Phase 1 — Scaffold**: deps, next.config, brand tokens, i18n, layout/nav/footer. ✅
- [x] **Phase 2 — Data layer**: categories + empty per-category JSON, `blogData.ts`, types. ✅
- [x] **Phase 3 — Routing**: home, `/category/[slug]`, `/blog/[slug]`, `/search`, `/mk` mirror. ✅ (build green, 38 pages)
- [ ] **Phase 4 — Content migration**: split existing registration guide into
      Registration-category articles (EN + MK).
- [ ] **Phase 5 — Lead form**: `/api/contact` + Resend, wire consent copy.
- [ ] **Phase 6 — SEO**: sitemap/robots/feed, JSON-LD, hreflang.
- [ ] **Phase 7 — Seed content**: a few starter articles per remaining category.
- [ ] **Phase 8 — QA**: build, Lighthouse/SEO check, verify on Vercel preview.

## Open items (not blockers)

- Author name/byline for articles (SDP uses a person + `AuthorBio`).
- `RESEND_API_KEY` for company.nexa domain, or reuse SDP's Resend account?
- Article hero images: reuse `/public` marketing images vs. Pexels like SDP.

## Review

### Phases 1–3 complete (build green, 38 pages, tsc clean)

**Working now**
- Bilingual portal shell: EN at `/`, MK at `/mk`. Path-based nav, real links.
- 6 topic categories wired (EN+MK) with category pages + empty article JSON files.
- Home (hero + topics grid + latest), `/category/[slug]`, `/blog/[slug]`
  (article + FAQ + JSON-LD + lead CTA), `/search` (client-side), `/contact` (placeholder).
- Brand tokens applied (blue primary/ring); SEO metadata + hreflang per route.
- `content/_sources/<topic>/` drop folders + README; git-ignored.

**Known limitations / deferred**
- `/mk` sets `<html lang>` via a client effect (SSR html still `en`). Fine for
  metadata-based SEO; revisit with a `[lang]` segment if we want SSR-correct lang.
- Lead form is email-placeholder (mailto) — real form + `/api/contact` in Phase 5.
- Legacy single-guide pages (`/doo`, `/cost`, …) still live with the OLD navbar;
  they get migrated into the Registration category in Phase 4, then removed.
- `resend` added to package.json but not yet `npm install`ed (nothing imports it yet).

### Phase 5 complete — lead form + email
- `components/LeadForm.tsx` (client): topic select (prefilled from `?topic=`), email,
  message, honeypot, success/error states, bilingual.
- `app/api/contact/route.ts`: validates, sends via Resend (email-only), graceful 503
  if `RESEND_API_KEY` missing. Wired into `ContactView` + article CTA.
- `.env.example` documents `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`.

### Phase 6 complete — sitemap / robots / feed
- `app/sitemap.ts` (EN+MK routes + legacy EN pages), `app/robots.ts` (disallow /api),
  `app/feed.xml/route.ts` (RSS of latest EN articles). Build emits /sitemap.xml,
  /robots.txt, /feed.xml.
- Note: sitemap hreflang alternates omitted (Next 13.5 sitemap type lacks it);
  hreflang still emitted per-page via metadata.

### Contact auto-reply complete (per contact-auto-reply-implementation.md)
- `app/api/contact/route.ts`: best-effort, locale-aware confirmation reply after the
  internal notification — explains anonymous referral, `mailto:` opt-out ("recall"),
  no-obligation. Sender = `AUTOREPLY_FROM_EMAIL` (default noreply@mail.nexa.mk; needs SPF+DKIM).
- `LeadForm` success copy mentions the confirmation email (EN+MK).
- Terms already carry anonymity/withdrawal language (verified) — no change needed.

### SEO/GEO playbook applied (per nexa-seo-geo-playbook.md)
- Deleted stale `public/robots.txt` + `public/sitemap.xml` (were shadowing app routes,
  listed old `/doo…` URLs, no `/mk`/categories).
- `app/robots.ts`: explicitly welcomes 15 AI crawlers (GPTBot, ClaudeBot, Google-Extended…).
- `public/llms.txt` refreshed for the portal (6 topic hubs, /mk, feed, sources).
- `scripts/generate-llms.mjs` + `npm run generate:llms` + `prebuild` hook → `public/llms-full.txt`.
- `layout.tsx`: RSS `<link rel=alternate>` + `SearchAction` on WebSite schema.
- `/search` accepts `?q=` (valid SearchAction) and is `noindex, follow`.
- Category pages emit `CollectionPage` + `ItemList` + `BreadcrumbList` JSON-LD.
- Verified: all routes 200; robots/sitemap/feed/llms serve correctly.

### Phase 4 complete — registration content migrated (build green)
- Reused the vetted guide copy (no invented legal facts) into 4 Registration articles
  (EN+MK, shared slugs): `register-company-north-macedonia`,
  `company-legal-forms-north-macedonia`, `how-to-register-company-north-macedonia`,
  `register-company-as-foreigner` — plus 1 Tax article `company-taxes-north-macedonia`.
- Deleted 13 legacy guide pages + `GuidePage.tsx`; added **301 redirects** in
  next.config.js from every old URL (/doo, /taxes, /process…) to its new article.
- Updated `SiteFooter` popular-guides links to new URLs; regenerated `llms-full.txt` (5 articles).
- Verified: articles + categories 200 (EN+MK); legacy paths 308→new article.
- Note: `about`/`privacy`/`terms` still use the OLD SiteNavbar/SiteFooter (functional);
  migrate them to PortalHeader/PortalFooter in a cleanup pass if desired.

### Admin CMS complete (login → add/edit/delete articles) — verified end-to-end
Mirrors nexa.guides. All routes gated by middleware; tested: unauth redirect/401,
login (wrong→401, right→200+cookie), list, create (201, writes EN+MK), get,
duplicate→409, delete (removes both), logout→401. Build 49 pages, green.
- Auth: `lib/admin/session.ts` (Web Crypto HMAC signed cookie), `middleware.ts`,
  `/api/admin/login` (rate-limited) + `/logout`.
- Storage: `lib/admin/storage.ts` — fs (dev) / GitHub Contents API (prod, since
  Vercel fs is read-only; commit → auto-redeploy). `lib/admin/articles.ts` +
  `lib/admin/schema.ts` (zod).
- API: `/api/admin/articles` (GET/POST), `/api/admin/articles/[slug]` (GET/PUT/DELETE).
- UI: `/admin/login`, `/admin` dashboard (grouped by topic), `/admin/articles/new`
  + `/admin/articles/[slug]` bilingual editor (EN/MK tabs, repeatable sections/FAQ/keywords).
- `.env.local` wired (admin/M@rt1n990 + generated SESSION_SECRET, STORAGE_DRIVER=fs);
  `.env.example` documents prod vars. `/admin` noindex + robots-disallowed.

**PROD SETUP NEEDED before /admin works on Vercel:**
1. Set env vars in Vercel: ADMIN_USER, ADMIN_PASSWORD, SESSION_SECRET,
   STORAGE_DRIVER=github, GITHUB_TOKEN (fine-grained PAT, Contents R/W on
   NexaTerminal/company), GITHUB_REPO=NexaTerminal/company, GITHUB_BRANCH=main.
2. Without the GitHub PAT, edits can't persist in production (read-only fs).

### Remaining
- [ ] Phase 7 — seed articles for tax (deeper), compliance, data-protection, other
      (sources available in "0sources for the new website/" for tax + GDPR).
- [ ] Phase 8 — QA on Vercel preview.
- [ ] Optional cleanup — migrate about/privacy/terms to PortalHeader/Footer + /mk versions.
- Before deploy: set Vercel env vars (`RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`,
  `AUTOREPLY_FROM_EMAIL`); verify SPF+DKIM for `mail.nexa.mk` in Resend.
