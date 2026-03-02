// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://devliftwill.github.io',
  base: '/debbie-s-dog-food-campaign-website/',
  vite: {
    plugins: [tailwindcss()],
  },
});
