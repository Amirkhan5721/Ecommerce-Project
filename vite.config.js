import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/Ecommerce-Project/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true 
  }
})
