import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        work: 'work.html',
        about: 'about.html',
        photo: 'photo.html',
        between: 'feeling_in_between.html',
        hotel: 'finding-a-hotel.html',
      },
    },
  },
});
