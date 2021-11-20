import resolve from "@rollup/plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs';

const basePlugins = [
  resolve(),
  commonjs()
]

export default [
  {
    external: ["morphdom"],
    input: "javascript/index.js",
    output: [
      {
        name: "CableReady",
        file: "dist/cable_ready.umd.js",
        format: "umd",
        sourcemap: true,
        exports: "named",
        globals: {morphdom: "morphdom"}, // UMD build wants a global...annoying.
      },
      {
        file: "dist/cable_ready.module.js",
        format: "es",
        sourcemap: true,
      }
    ],
    plugins: basePlugins,
    watch: {
      include: "javascript/**"
    }
  },
]
