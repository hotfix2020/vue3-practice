import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置‘@’指向‘src’目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 3000,
    open: true, // 服务启动自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'http://xxx.com',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api/', '/')
      }
    }
  }
})
