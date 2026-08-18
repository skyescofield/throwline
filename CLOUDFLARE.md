# Cloudflare Pages setup

Throwline is designed as a public, multi-page marketing site for `throwline.co`.

## Recommended production setup

- Project name: `throwline`
- Production branch: `main`
- Node.js version: `22`
- Build command: `npm ci && npm run build:pages`
- Build output: `pages-dist`

The repository includes the Cloudflare runtime and Wrangler locally, so no
global install is required. `build:pages` packages the vinext Worker and static
assets using Cloudflare Pages advanced mode. Enable the `nodejs_compat`
compatibility flag for both production and preview environments.

The custom apex domain should be attached through the Pages project's
**Custom domains** screen rather than by creating a DNS record manually.

## Local verification

```bash
npm ci
npm test
```
