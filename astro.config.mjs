// https://astro.build/config
import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://nanjakkun.github.io',
  base: '/hyattoku',
  integrations: [
    react(),
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
    plugins: [tailwindcss()],
  },
});
