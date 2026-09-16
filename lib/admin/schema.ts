import { z } from 'zod';
import type { BlogArticle } from '@/lib/blogData';

// Validates the article payload coming from the admin editor, per locale.

const sectionSchema = z.object({
  heading: z.string(),
  level: z.union([z.literal(2), z.literal(3)]).optional(),
  paragraphs: z.array(z.string()),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const localeArticleSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase Latin with hyphens'),
  excerpt: z.string().default(''),
  category_id: z.string().default(''),
  author: z.string().default('Nexa Legal Network'),
  publishedDate: z.string().min(1),
  updatedDate: z.string().optional(),
  readingTime: z.string().default(''),
  image: z.string().default(''),
  content: z.object({
    introduction: z.string().default(''),
    sections: z.array(sectionSchema).default([]),
    conclusion: z.string().optional(),
  }),
  seo: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().default(''),
    keywords: z.array(z.string()).default([]),
  }),
  faq: z.array(faqSchema).default([]),
  relatedArticles: z.array(z.string()).default([]),
});

export const saveArticleSchema = z.object({
  targetCategorySlug: z.string().min(1),
  originalSlug: z.string().optional(),
  originalCategorySlug: z.string().optional(),
  en: localeArticleSchema,
  mk: localeArticleSchema,
});

export type SaveArticleBody = z.infer<typeof saveArticleSchema>;

/** Coerce a validated locale payload into a BlogArticle. */
export function toBlogArticle(input: z.infer<typeof localeArticleSchema>): BlogArticle {
  return input as BlogArticle;
}
