import {ConfigEnv, defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths';
import { z } from 'zod';
import {resolve} from "path";

// https://vitejs.dev/config/

export const ZViteMode = z.enum(['dev', 'production']);

export const ZConfigVars = z.object({
  CONFIG_SERVER_PORT: z.preprocess(Number, z.number().optional().default(7777)),
});

export default ({ mode, command }: ConfigEnv) => {
  const safeMode = ZViteMode.parse(mode);
  const envDir = resolve(__dirname, 'env');
  const isProd = safeMode === 'production';

  const realMode = command === 'serve' ? 'dev' : safeMode;
  const releaseName = `${process.env.npm_package_version}.${mode}`;

  return defineConfig({
    envDir,
    root: __dirname,
    server: {
      port: 7777,
      proxy: {
        '/api/': {
          target: 'http://localhost:3000'
        },
      },
    },

    define: {
      __REAL_MODE__: JSON.stringify(realMode),
    },

    build: {
      sourcemap: true,
      minify: isProd,
      outDir: resolve(__dirname, 'dist'),
      target: 'esnext',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          client: resolve(__dirname, 'index.html')
        },
      },
    },
    plugins: [react(),tsconfigPaths(), vanillaExtractPlugin({
      identifiers: isProd ? 'short' : 'debug',
    }), svgr()],
  })
}
