# Rust + Wasm + Vite

A simple experiment with Wasm. Async requests provided by `reqwest` :)

You can use this repo as template by:
```bash
npx degit yaanno/wasm_experiment myapp
```

Install `wasm-pack`

```bash
cargo install wasm-pack
```

Install js modules
```bash
pnpm i
```

Edit the `lib.rs` and any other source files, then
```bash
cargo wasm-pack build
```

Then start Vite
```bash
pnpm dev
```

To build and serve your project
```bash
pnpm build
pnpm preview
```

There you go... I mean rust :)

The basic implementation is from https://github.com/seanmonstar/reqwest/tree/master/examples/wasm_github_fetch
