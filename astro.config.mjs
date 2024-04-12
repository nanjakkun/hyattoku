// https://astro.build/config
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://nanjakkun.github.io',
  base: '/juttoku',
  integrations: [react()]
});