import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// GitHub Pages deploy:
//   Build with:  GITHUB_PAGES=1 VITE_BASE=/repo-neve/ bun run build
//   (replace /repo-neve/ with your actual repository name, keep the trailing slash)
//
// Lovable preview / local dev / root-domain hosting use base "/" automatically.
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
});
