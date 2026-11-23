import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const trips = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/trips' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      // The tour's id in FleetManager (the number in its /tours/<id>-name/ link), once it sells online.
      bookingId: z.number().optional(),
      code: z.string(),
      name: z.string(),
      city: z.string(),
      // The state or country, which the search shows under the name.
      region: z.string(),
      iata: z.string(),
      bestFor: z.string(),
      tags: z.array(z.enum(['snow', 'beach', 'adventure'])),
      color: z.string(),
      onColor: z.string(),
      background: z.string(),
      foreground: z.string(),
      stops: z.array(z.string()),
      busSeconds: z.number(),
      kicker: z.string(),
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
