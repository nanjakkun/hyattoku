// https://astro.build/config
import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://nanjakkun.github.io',
  base: '/hyattoku',
  integrations: [
    react(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["qrcode.react"],
    },
  },
});
