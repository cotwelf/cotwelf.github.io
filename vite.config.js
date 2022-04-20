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
    outDir: '.'
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        additionalData: '$textColor: pink;'
      }
    }
  }
})
