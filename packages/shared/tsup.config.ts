import { defineConfig } from 'tsup';

export default defineConfig({
  target: ['node18'],
  platform: 'node',
  dts: true,
  clean: true,
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
});
