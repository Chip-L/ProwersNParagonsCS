import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
      provider: "istanbul",
      thresholds: {
        lines: 85,
        branches: 70,
        functions: 70,
        statements: 85,
      },
      include: ["src/**"],
      exclude: ["src/main.tsx", "src/App.tsx"],
    },
  },
});
