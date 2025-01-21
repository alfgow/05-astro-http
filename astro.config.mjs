// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
//   output: 'server',
// Por default, Astro esta en output: "hybrid" asi que no es necesario ponerlo, salvo que quieras usar el servidor como primer instancia
  adapter: node({
    mode: 'standalone',
  }),
});