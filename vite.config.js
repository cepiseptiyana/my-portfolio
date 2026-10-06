import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/my-portfolio/",
  server: {
    host: true, // Mengizinkan akses dari luar container melalui IP local
    port: 5173,
    watch: {
      usePolling: true, // Wajib aktif agar perubahan file di Windows/WSL/macOS terbaca oleh Docker container
    },
    hmr: {
      clientPort: 5172, 
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@use "/src/styles_variable.sass" as g\n`,
      },
    },
  },
});
