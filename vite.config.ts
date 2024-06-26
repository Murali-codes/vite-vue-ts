import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // <-- this object is added
    port: 8000,
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
