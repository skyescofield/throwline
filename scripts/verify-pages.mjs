import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const pagesRoot = path.join(process.cwd(), "pages-dist");
const workerPath = path.join(pagesRoot, "_worker.js");
const routesPath = path.join(pagesRoot, "_routes.json");
const cssRoot = path.join(pagesRoot, "_next", "static", "css");
const assetsManifestPath = path.join(
  pagesRoot,
  "ssr",
  "__vite_rsc_assets_manifest.js",
);

const worker = await readFile(workerPath, "utf8");
if (!worker.includes('pathname.startsWith("/_next/static/")')) {
  throw new Error("Pages Worker does not route Next static assets to env.ASSETS.");
}

const routes = JSON.parse(await readFile(routesPath, "utf8"));
if (!routes.exclude?.includes("/_next/static/*")) {
  throw new Error("Pages routes do not bypass the Worker for Next static assets.");
}

const cssFiles = (await readdir(cssRoot)).filter((file) => file.endsWith(".css"));
if (cssFiles.length === 0) {
  throw new Error("Pages package contains no compiled stylesheet.");
}

const { default: assetsManifest } = await import(pathToFileURL(assetsManifestPath));
const referencedAssets = [];

function collectStaticAssets(value) {
  if (typeof value === "string") {
    for (const match of value.matchAll(/\/_next\/static\/[^"')]+/g)) {
      referencedAssets.push(match[0]);
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach(collectStaticAssets);
    return;
  }

  if (value && typeof value === "object") {
    Object.values(value).forEach(collectStaticAssets);
  }
}

collectStaticAssets(assetsManifest);

for (const asset of new Set(referencedAssets)) {
  await access(path.join(pagesRoot, asset.slice(1)));
}

console.log(
  `Verified Cloudflare Pages package (${cssFiles.length} stylesheet, ${new Set(referencedAssets).size} referenced assets).`,
);
