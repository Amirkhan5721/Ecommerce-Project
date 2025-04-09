import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Ecommerce-Project/',
  build: {
    outDir: 'build', // Make this match your gh-pages deploy directory
    assetsDir: 'assets', // Ensure assets go to the correct folder
    emptyOutDir: true // Cleans the directory before build
  }
})