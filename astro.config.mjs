import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [vue(), react(), tailwind()],
  output: 'static',
  site: 'https://iic3585.github.io/2025-1-s1-g9-t5/',
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/styles/global.css"; @import "./src/styles/components.css";`
        }
      }
    }
  }
}); 