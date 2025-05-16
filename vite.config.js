import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src'),
      '@components': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src/components'),
      '@assets': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src/assets'),
      '@ui': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './@/components/ui'),
    }
  },
})
