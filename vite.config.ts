import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  build: {
    minify: false,
    rollupOptions: {
    },
    lib: {
      entry: path.resolve(__dirname, 'src/carousel.ts'),
      formats: ['umd'],
      name: 'SumaqSimpleCarousel',
      fileName: 'dist/sumaq-simple-carousel..js',
    }
  }
})
