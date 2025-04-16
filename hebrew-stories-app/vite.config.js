import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "https://meir-b.github.io/HebrewStories/hebrew-stories-app/dist/",
  plugins: [vue()],
})
