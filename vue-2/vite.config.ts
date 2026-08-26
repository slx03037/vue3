import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名，@代表src目录，后期导入文件更方便
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 配置开发服务器，解决跨域问题（前端调用NodeJS接口必备）
  server: {
    port: 5173, // 启动端口，可修改
    open: true, // 启动后自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // NodeJS接口地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
