import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [vue(), react(), tailwind()],
  output: 'static',
  site: 'https://moviefan.com',
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