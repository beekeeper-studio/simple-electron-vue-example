import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // Set the base URL for the app
  build: {
    outDir: 'dist/renderer', // Output directory for the renderer process
    emptyOutDir: true, // Clears the directory before building
    rollupOptions: {
      input: './src/index.html' // Entry point for the renderer process
    }
  },
  server: {
    port: 3000 // Development server port
  }
});
