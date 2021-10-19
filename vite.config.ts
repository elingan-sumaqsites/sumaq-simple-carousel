import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    outDir: path.resolve(__dirname, 'lib'),
    lib: {
      entry: path.resolve(__dirname, 'src/carousel.ts'),
      formats: ['umd'],
      name: 'SumaqSimpleCarousel',
      fileName: format => 'sumaq-simple-carousel.js',
    }
  }
})
