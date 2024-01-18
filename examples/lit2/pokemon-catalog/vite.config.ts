import { resolve } from "path";
import postcssLit from "rollup-plugin-postcss-lit";
import { litScss } from "rollup-plugin-scss-lit";
import { defineConfig } from "vite";
import istanbul from "vite-plugin-istanbul";

const aliases = {
  "@services": "src/services",
  "@components": "src/components"
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, resolve(__dirname, value)])
);

export default defineConfig({
  optimizeDeps: {
    force: true
  },
  resolve: {
    alias: {
      ...resolvedAliases
    }
  },
  plugins: [
    //@ts-ignore
    litScss(),
    postcssLit(),
    istanbul({
      include: "src/**/*",
      exclude: ["node_modules", "test/"],
      extension: [".js", ".ts"],
      requireEnv: false,
      cypress: true,
      forceBuildInstrument: true
    })
  ],

  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [/^tslib/, /^ramda/, /^@lit/, /^lit/, /^lit-html/, /^rxjs/, /^lit-element/]
    }
  }
});
