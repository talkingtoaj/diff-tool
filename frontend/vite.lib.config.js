import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/entry.js'),
      name: 'DiffTool',
      fileName: (format) =>
        format === 'es' ? 'diff-tool-viewer.js' : `diff-tool-viewer.${format}.cjs`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'style.[ext]',
        globals: {},
        exports: 'named',
      },
    },
    cssCodeSplit: true,
    outDir: 'dist',
  },
});
