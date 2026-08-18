import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const clientRoot = path.join(projectRoot, "dist", "client");
const serverRoot = path.join(projectRoot, "dist", "server");
const pagesRoot = path.join(projectRoot, "pages-dist");
const redirectedWranglerConfig = path.join(projectRoot, ".wrangler", "deploy", "config.json");

await rm(pagesRoot, { recursive: true, force: true });
await rm(redirectedWranglerConfig, { force: true });
await mkdir(pagesRoot, { recursive: true });
await cp(clientRoot, pagesRoot, { recursive: true });

// Cloudflare Pages advanced mode accepts a module Worker named `_worker.js`.
// vinext already emits a Cloudflare-compatible Worker; place it alongside the
// public assets and preserve the modules it imports.
await cp(path.join(serverRoot, "index.js"), path.join(pagesRoot, "_worker.js"));
await cp(path.join(serverRoot, "index.js"), path.join(pagesRoot, "index.js"));
await cp(path.join(serverRoot, "_next"), path.join(pagesRoot, "_next"), {
  recursive: true,
  force: true,
});
await cp(path.join(serverRoot, "ssr"), path.join(pagesRoot, "ssr"), {
  recursive: true,
});

for (const entry of await readdir(serverRoot, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".js") && entry.name !== "index.js") {
    await cp(path.join(serverRoot, entry.name), path.join(pagesRoot, entry.name));
  }
}

console.log(`Prepared Cloudflare Pages output at ${pagesRoot}`);
