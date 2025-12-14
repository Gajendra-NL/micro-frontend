import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    federation({
      name: 'app-shell',
      remotes: {
        'catalogApp': 'http://localhost:5101/assets/remoteEntry.js',
        'cartApp': 'http://localhost:5102/assets/remoteEntry.js',
        'userApp': 'http://localhost:5103/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
})
