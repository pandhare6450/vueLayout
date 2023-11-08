import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
import path from "node:path"
export default defineConfig({
  plugins: [vue(), svgLoader(
    {
      svgoConfig: {
        multipass: true
      }
    }
  )],
  resolve: {
    extensions: [".ts", ".js", ".vue"],
    alias: {
        '@': path.resolve(__dirname,'src/'),
        "@assets": path.resolve(__dirname,'assets/'),
        "@svg": path.resolve(__dirname,'assets/svg'),
        "@pages": path.resolve(__dirname,'src/pages'),
        "@components": path.resolve(__dirname,'src/components'),
        "@layouts": path.resolve(__dirname,'src/layouts'),
    }
  },
})
