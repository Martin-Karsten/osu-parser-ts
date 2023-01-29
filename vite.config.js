// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'osu-parser-ts',
      fileName: 'osuParserTs',
    },
  },
  rollupOptions: {
    output: {
      sourcemapExcludeSources: true,
    },
  },
  sourcemap: true,
  target: 'esnext',
  plugins: [dts()],
});