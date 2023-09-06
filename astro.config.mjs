import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  alias: {
    "@components/*": ["src/components/*"],
    "@models/*": ["src/types/models/*"],
    "@assets/*": ["src/assets/*"],
    "@shared/*": ["src/shared/*"],
  },
});
