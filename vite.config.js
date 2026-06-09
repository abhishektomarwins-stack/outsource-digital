import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  optimizeDeps: {
    include: [],
  },
  server: {
    warmup: {
      clientFiles: ['./index.html', './src/main.js', './src/input.css'],
    },
  },
})
