import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdoc from 'vite-plugin-react-mdoc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: [/\.js$/, /\.jsx$/, /\.md$/]
    }),
    mdoc(options),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  root: './src/',
  build: {
    outDir: '../' // 1. 指定打包出口
  }
})
