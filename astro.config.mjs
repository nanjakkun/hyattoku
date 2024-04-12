// https://astro.build/config
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://nanjakkun.github.io',
  base: '/juttoku',
  integrations: [react(), tailwind()]
});