import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        logiciel: resolve(import.meta.dirname, "logiciel.html"),
        secteurs: resolve(import.meta.dirname, "secteurs.html"),
        offres: resolve(import.meta.dirname, "offres.html"),
        module: resolve(import.meta.dirname, "module.html"),
        faq: resolve(import.meta.dirname, "faq.html"),
        contact: resolve(import.meta.dirname, "contact.html")
      }
    }
  }
});
