import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 1993,
    proxy: {
      '/api/': 'http://localhost:3000',
    },
  },
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `
        @import "@/styles/variables";
        `,
      },
    },
  },
})
