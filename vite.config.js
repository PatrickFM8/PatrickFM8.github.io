import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import css from 'rollup-plugin-css-only';

export default defineConfig({
  plugins: [react(), css()],
  base: '/', // Set the base URL
  build: {
    outDir: 'dist' 
  }
})
