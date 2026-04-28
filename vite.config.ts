import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Base path resolution:
//   - Lovable preview / local dev / root-domain hosting: "/" (default)
//   - GitHub Pages: set VITE_BASE=/hotfold-brand-hub/ at build time
//
// The GitHub Actions workflow sets VITE_BASE explicitly before `bun run build`.
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
