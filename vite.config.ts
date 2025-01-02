import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hot: true, // Enable hot refresh
    watch: {
      usePolling: true // This might be needed in some environments
    }
  }
})
