import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 引入 path 模块

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(), vueJsx(), tailwindcss(), vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 将 @ 指向 src 目录
    }
  },
  server: {
    port: 8081,
    proxy: {
      '/modbus': {
        target: 'http://192.168.120.66:8081', // 目标服务器地址
        changeOrigin: true, // 是否改变源
        // rewrite: (path) => path.replace(/^\/modbus/, '') // 路径重写
      }
    }
  }
})
