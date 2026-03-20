import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This version is designed to work even if your folder structure is complex
export default defineConfig({
  base: '/cute-class-register/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
