import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    {
      "@tailwindcss/postcss": {},
    },
    addDynamicIconSelectors(),
  ],
};

export default config;
