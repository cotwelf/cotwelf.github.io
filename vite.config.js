import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: 'docs', // 1. 指定打包出口
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/style/main.scss';`
      }
    }
  }
})
