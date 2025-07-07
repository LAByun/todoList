import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({


  main: {
    plugins: [externalizeDepsPlugin()],
      base: './',

  },
  preload: {
    plugins: [externalizeDepsPlugin()],
      base: './',
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [vue()],
      base: './',

  }
})
