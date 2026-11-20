import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const trips = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/trips' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      code: z.string(),
      name: z.string(),
      city: z.string(),
      iata: z.string(),
      nights: z.string(),
      price: z.number(),
      bestFor: z.string(),
      tags: z.array(z.enum(['snow', 'beach', 'adventure', 'budget'])),
      color: z.string(),
      page: z.number(),
      summary: z.string(),
      best: z.string(),
      highest: z.string(),
      stops: z.array(z.string()),
      title: z.string(),
      dek: z.string(),
      hero: image(),
      heroAlt: z.string(),
      place: z.string(),
      includes: z.array(z.string()),
      days: z.array(z.object({ place: z.string(), title: z.string(), text: z.string() })),
      gallery: z.array(z.object({ src: image(), alt: z.string(), caption: z.string() })),
    }),
});

export const collections = { trips };
