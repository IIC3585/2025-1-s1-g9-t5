import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [vue(), react(), tailwind()],
  site: 'https://IIC3585.github.io/2025-1-s1-g9-t5/',
  base: '/2025-1-s1-g9-t5/',
  output: 'static',
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/2025-1-s1-g9-t5/'),
    }
    // css: {
    //   preprocessorOptions: {
    //     css: {
    //       additionalData: `@import "./src/styles/global.css"; @import "./src/styles/components.css";`
    //     }
    //   }
    // }
  }
}); 