import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
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

// Cloudflare Pages advanced mode runs `_worker.js` before static asset routing.
// Serve Next's hashed browser assets explicitly, then hand application requests
// to vinext. Public files are already delegated by the vinext Worker itself.
await cp(path.join(serverRoot, "index.js"), path.join(pagesRoot, "index.js"));
await writeFile(
  path.join(pagesRoot, "_worker.js"),
  `import app from "./index.js";

export default {
  async fetch(request, env, context) {
    const pathname = new URL(request.url).pathname;

    if (pathname.startsWith("/_next/static/")) {
      return env.ASSETS.fetch(request);
    }

    return app.fetch(request, env, context);
  },
};
`,
);
await writeFile(
  path.join(pagesRoot, "_routes.json"),
  `${JSON.stringify(
    {
      version: 1,
      include: ["/*"],
      exclude: ["/_next/static/*"],
    },
    null,
    2,
  )}\n`,
);
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
