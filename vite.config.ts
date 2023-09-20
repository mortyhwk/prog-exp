import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'progexp',
      fileName: 'progexp',
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
})