import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/browser-detection.ts'),
      name: 'BrowserDetection',
      // the proper extensions will be added
      fileName: 'browser-detection',
    },
    outDir: 'lib'
  },
})
