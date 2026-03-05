import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // Gzip for broad compatibility
    compression({ algorithm: "gzip", ext: ".gz", threshold: 1024 }),
    // Brotli for modern browsers (smaller)
    compression({ algorithm: "brotliCompress", ext: ".br", threshold: 1024 }),
  ],
  build: {
    // Target modern browsers for smaller output
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          // Isolate Three.js ecosystem into its own chunk (loaded only on home)
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          // GSAP + Lenis in their own chunk
          animation: ["gsap", "lenis"],
          // Motion (used by marquee)
          motion: ["motion"],
        },
      },
    },
  },
});
