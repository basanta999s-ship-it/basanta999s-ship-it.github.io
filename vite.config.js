import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from the root of basanta999s-ship-it.github.io
  base: '/',
  plugins: [react()],
})
