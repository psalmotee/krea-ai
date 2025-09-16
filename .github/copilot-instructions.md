# Copilot instructions (Netlify notes)

- Netlify notes: We disable Next.js server image optimization to avoid runtime lambdas on Netlify by setting `images.unoptimized = true` in `next.config.ts`.
- Add `netlify.toml` at the repo root and enable `@netlify/plugin-nextjs` to ensure Next.js is built and routed correctly.
- Pin Node with `.nvmrc` to a supported version (18) to match Netlify's runtime.

If a future deploy requires optimized images, switch back `unoptimized: false` and ensure Netlify has an image optimization adapter or build-time optimization in place.
