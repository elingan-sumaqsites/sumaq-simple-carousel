import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    outDir: path.resolve(__dirname, 'lib'),
    lib: {
      entry: path.resolve(__dirname, 'src/carousel.ts'),
      formats: ['umd', 'iife'],
      name: 'SumaqSimpleCarousel',
      // fileName: format => {
      //   const name = format === '.umd'?'':'.auto'
      //   return `sumaq-simple-carousel${name}.js`
      // },
    }
  }
})
