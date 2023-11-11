import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

import path from "path";

export default defineConfig({
  plugins: [vue()],
  define: process.env.NODE_ENV === "development" ? { global: "window" } : {},
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "~@": path.resolve(__dirname, "/src")
    }
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false
  }
});
