import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// GitHub Pages deploy:
//   Build with:  GITHUB_PAGES=1 VITE_BASE=/repo-neve/ bun run build
//   (replace /repo-neve/ with your actual repository name, keep the trailing slash)
//
// Lovable preview / local dev / root-domain hosting use base "/" automatically.
// On GitHub Pages the site is served from /hotfold-brand-hub/.
// Lovable preview / local dev override this with VITE_BASE=/ (set in dev script if needed),
// or you can build locally for root hosting with: VITE_BASE=/ bun run build
const base = process.env.VITE_BASE ?? (process.env.NODE_ENV === "production" ? "/hotfold-brand-hub/" : "/");

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
});
