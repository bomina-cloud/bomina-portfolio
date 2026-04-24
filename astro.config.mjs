import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bominayoon.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/projects/mobility-media-platform-dice'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
