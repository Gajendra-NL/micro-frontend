import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cartApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/App.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
  server: {
    port: 5102,
  }
})
