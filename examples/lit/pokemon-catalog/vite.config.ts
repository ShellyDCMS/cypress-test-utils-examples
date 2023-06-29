import { resolve } from "path";
import postcssLit from "rollup-plugin-postcss-lit";
import { litScss } from "rollup-plugin-scss-lit";
import { defineConfig } from "vite";

const aliases = {
  "@services": "src/services",
  "@components": "src/components"
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    resolve(__dirname, value)
  ])
);

export default defineConfig({
  resolve: {
    alias: {
      ...resolvedAliases
    }
  },
  //@ts-ignore
  plugins: [litScss(), postcssLit()],

  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [
        /^tslib/,
        /^ramda/,
        /^@lit/,
        /^lit/,
        /^lit-html/,
        /^rxjs/,
        /^lit-element/,
        /^@edf\/test-utils/
      ]
    }
  }
});
