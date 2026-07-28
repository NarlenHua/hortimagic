import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from './package.json' with { type: 'json' };
import { hortimagicPostBuild } from "./script/build-plugin";

export default defineConfig({
  define: {
    __NAME__: JSON.stringify(pkg.name),
    __VERSION__: JSON.stringify(pkg.version),
    __DESCRIPTION__: JSON.stringify(pkg.description),
    __AUTHOR__: JSON.stringify(pkg.author),
    __LICENSE__: JSON.stringify(pkg.license),
    __REPOSITORY__: JSON.stringify(pkg.repository),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  plugins: [
    dts({
      include: ["src", "types"],
      rollupTypes: true,
      insertTypesEntry: true,
    }),
    hortimagicPostBuild(),
  ],
  build: {
    target: ["edge130", "firefox130", "chrome130", "safari18.0"],
    lib: {
      entry: "./src/main.ts",
      name: pkg.name,
      formats: ["iife"],
      fileName: (_format) => `${pkg.name}.iife.js`,
    },
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});