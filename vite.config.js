import { defineConfig, loadEnv } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";


const env = loadEnv('development', process.cwd());
const api_url = env.VITE_API_URL
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    proxy: {
      '/api': {
        target: api_url,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
