import react from '@vitejs/plugin-react-swc';
import path from "path";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@rtk": path.resolve(__dirname, "src/rtk"),
      "@assets": path.resolve(__dirname, "src/assets"),
    }
  }
})
