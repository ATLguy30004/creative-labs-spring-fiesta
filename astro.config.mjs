import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// React + Cloudflare adapter are excluded for prototype viewing.
// Add them back before deploying to production.
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
