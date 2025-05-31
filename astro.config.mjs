// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    react(),
    mdx(),
    sitemap(),
  ],
  output: "static",
  trailingSlash: "never",
  site: "https://ixiptla.com",
});
