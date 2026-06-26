import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages project site: https://andie-developer.github.io/portfolio/
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/',
})
