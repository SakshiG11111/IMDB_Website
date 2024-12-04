import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  fs: {
    allow: ["node_modules"], // Allow node_modules folder to be accessed
  }
});


