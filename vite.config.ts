import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      assets: 'src/assets',
      types: '/src/types',
      routes: '/src/routes',
      utils: '/src/utils',
      store: '/src/store',
      api: '/src/api'
    }
  }
})
