import { defineConfig } from 'astro/config';

// GitHub Pages serves a project site under /<repo>. Override both when a custom domain is set.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://tahseen09.github.io',
  base: process.env.BASE_PATH ?? '/KhusbooTours',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});
