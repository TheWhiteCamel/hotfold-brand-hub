import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// IMPORTANT: When deploying to GitHub Pages, set `base` to your repo name,
// e.g. base: "/repo-neve/". For root domain or local dev, "/" is fine.
export default defineConfig({
  base: "/repo-neve/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
});
