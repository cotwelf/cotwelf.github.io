import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: [/\.js$/, /\.jsx$/, /\.md$/]
    }),
    Markdown(),
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
