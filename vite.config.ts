import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue3-particles', 'tsparticles', 'canvas-confetti'],
        }
      }
    }
  },
  optimizeDeps: {
    include: ['vue3-particles', 'tsparticles', 'canvas-confetti']
  }
})