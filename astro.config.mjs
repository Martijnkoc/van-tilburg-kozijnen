// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vantilburgkozijnen.nl',
  integrations: [
    tailwind(),
    sitemap(),
    prefetch(),
  ],
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://*.google.com https://*.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: https://*.google.com https://*.googleapis.com https://*.gstatic.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-src 'self' https://*.google.com;"
    }
  },
  vite: {
    build: {
      // Improve performance by splitting chunks
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': [
              'react',
              'react-dom',
            ],
          },
        },
      },
    },
    ssr: {
      external: ["svgo"],
      noExternal: ['@astrojs/prefetch'],
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
