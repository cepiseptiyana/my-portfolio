import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@use "/src/styles.sass" as g\n`,
      },
    },
  },
});
