import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // react({
    //   babel: {
    //     plugins: [['babel-plugin-react-compiler']],
    //   },
    // }),
    react(),
    federation({
      name: 'app-shell',
      // filename: 'remoteEntry.js',Fa
      remotes: {
        catalogApp: 'http://localhost:5101/assets/remoteEntry.js',
        cartApp: 'http://localhost:5102/assets/remoteEntry.js',
        userApp: 'http://localhost:5103/assets/remoteEntry.js'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
      },
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
  server: {
    port: 5100,
    strictPort: true
  }
})
