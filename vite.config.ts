import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

import pkg from './package.json'

import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(() => {
  return {
    mode: process.env.NODE_ENV,
    root: __dirname,
    plugins: [
      react(),
      svgr()
    ],
    base: './',
    build: {
      emptyOutDir: true,
      outDir: './dist'
    },
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
        '@hooks': join(__dirname, 'src/hooks'),
        '@components': join(__dirname, 'src/components'),
        '@containers': join(__dirname, 'src/containers'),
        '@store': join(__dirname, 'src/store'),
        '@styles': join(__dirname, 'src/styles'),
        '@static': join(__dirname, 'src/static'),
        '@services': join(__dirname, 'src/services'),
        '@utils': join(__dirname, 'src/utils'),
        '@modules': join(__dirname, 'src/modules'),
        '@views': join(__dirname, 'src/views'),
        '@layouts': join(__dirname, 'src/layouts'),
        '@stitched': join(__dirname, 'src/stitched'),
        '@typings': join(__dirname, 'src/typings'),
      }
    },
    server: {
      host: pkg.env.HOST,
      port: pkg.env.PORT
    },
  }
})
