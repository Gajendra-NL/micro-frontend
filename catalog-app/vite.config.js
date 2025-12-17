import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'catalogApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/ProductList.jsx',
      },
       shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5101,
    strictPort: true,
    origin: 'http://localhost:5101',
    cors: true
  }
})
