// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  site: 'https://vantilburgkozijnen.nl',
  integrations: [
    tailwind(),
    sitemap(),
    prefetch()
  ]
});