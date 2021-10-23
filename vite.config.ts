import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    outDir: path.resolve(__dirname, 'lib'),
    lib: {
      entry: path.resolve(__dirname, 'src/carousel.ts'),
      formats: ['umd', 'iife', 'cjs'],
      name: 'initSumaqSimpleCarousel',
      // fileName: (format) => {
      //   // const name = format === '.umd'?'':'.auto'
      //   return `sumaq-simple-carousel.${format}.js`
      // },

    },
    rollupOptions: {
      output: {
        exports: 'named',
        // globals: {
        //   window: 'Window',
        // }
      }
    }
  }
})
