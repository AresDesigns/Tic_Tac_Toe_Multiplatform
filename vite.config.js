import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Esto es importante para que las rutas sean relativas en producción
  server: {
    port: 3002
  },
  assets: {
    'flags/**': ['svg'], // Indica que los archivos SVG en el directorio flags serán procesados
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});