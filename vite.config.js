// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // این خط حتماً باشه

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // این خط رو اضافه کن یا چک کن که باشه
  ],
})