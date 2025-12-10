// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],
  server: {
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "clan-lace-discounts-steps.trycloudflare.com",
    ],
  },
});
