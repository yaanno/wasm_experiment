import wasm from "vite-plugin-wasm";
import {defineConfig} from "vite"

export default defineConfig({
  plugins: [
    wasm(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  root: "."
});