import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
	build: {
		outDir: 'dist',
		target: 'es2020',
    lib:{
      entry: 'src/packges/index.ts',
      name: 'cascader-city-vue',
      fileName: 'cascader-city-vue'
    },
    rollupOptions:{
      external: ['vue'],
      output:{
        globals:{
          vue: 'Vue'
        }
      }
    }
	},
})
