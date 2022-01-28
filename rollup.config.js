import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.js",
  output: {
    name: "upload.js",
    file:'dist/upload.js',
    format: "umd",
    sourcemap: true,
  },
  plugins: [nodeResolve(), commonjs()],
};
