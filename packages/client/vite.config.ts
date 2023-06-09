import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@coreui/coreui/dist/css/coreui.min.css";`,
      }
    }
  },
  plugins: [react(), vanillaExtractPlugin(), svgr()],
})
