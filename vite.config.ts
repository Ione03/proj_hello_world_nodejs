import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite({
        ssr: {
          input: "./src/entry.ssr.tsx",
        },
      }),
    ],
    optimizeDeps: {
      exclude: ["@builder.io/qwik", "@builder.io/qwik-city"],
    },
  };
});
