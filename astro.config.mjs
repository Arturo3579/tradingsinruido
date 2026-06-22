import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Asegúrate de que este site coincida con tu dominio real
  // Si usas el dominio de Vercel, actualiza aquí: https://tu-proyecto.vercel.app
  site: "https://www.tradingsinruido.com",
  integrations: [sitemap()],
});
