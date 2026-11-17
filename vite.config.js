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
        faq: resolve(import.meta.dirname, "faq.html"),
        contact: resolve(import.meta.dirname, "contact.html"),
        dashboard: resolve(import.meta.dirname, "tableau-de-bord.html"),
        catalogueProduits: resolve(import.meta.dirname, "catalogue-produits.html"),
        ventes: resolve(import.meta.dirname, "ventes.html"),
        achats: resolve(import.meta.dirname, "achats.html"),
        stock: resolve(import.meta.dirname, "stock.html"),
        tarifsProduits: resolve(import.meta.dirname, "tarifs-produits.html"),
        applicationMobile: resolve(import.meta.dirname, "application-mobile.html"),
        stockMedical: resolve(import.meta.dirname, "stock-medical.html")
      }
    }
  }
});
