import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          dataV: ["@jiaminghi/data-view-react"],
          echarts: ["echarts"],
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
