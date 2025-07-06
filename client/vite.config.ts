import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  server: process.env.NODE_ENV === 'development' ? {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    proxy: {
      "/api": {
        target: "http://server:5000",
        changeOrigin: true,
      },
    },
  } : undefined,
  plugins: [react()],
})
