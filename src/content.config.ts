import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    period: z.string(),
    order: z.number(),
    status: z.enum(['active', 'completed']).default('completed'),
    summary: z.string(),
    role: z.string(),
    partners: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    noindex: z.boolean().default(false),
    videos: z
      .array(
        z.object({
          url: z.string().url(),
          title: z.string().optional(),
          caption: z.string().optional(),
        })
      )
      .default([]),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    order: z.number(),
    type: z.enum(['dissertation', 'journal', 'thesis']).default('journal'),
  }),
});

export const collections = { projects, publications };
