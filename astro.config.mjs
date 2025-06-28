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
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'three-core': ['three', '@react-three/fiber'],
            'three-helpers': ['@react-three/drei'],
            'animations': ['gsap'],
            'vendor': ['react', 'react-dom']
          }
        }
      },
      chunkSizeWarningLimit: 1000
    },
    ssr: {
      noExternal: ['three', '@react-three/fiber', '@react-three/drei']
    }
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
