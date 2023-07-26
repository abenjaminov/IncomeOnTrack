import { defineConfig } from 'tsup';

export default defineConfig({
  treeshake: true,
  tsconfig: './tsconfig.json',
  entry: ['./src/app.ts'],
  format: ['cjs', 'esm'],
  clean: true,
});
