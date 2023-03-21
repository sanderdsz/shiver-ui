import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as packageJson from './package.json'
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dtsPlugin({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'Shiver UI',
      formats: ['es', 'umd'],
      fileName: (format) => `shiver-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'shiver-design-system': 'Shiver'
        }
      }
    }
  }
})
