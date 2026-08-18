import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Throwline homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /The managed growth platform tree companies use to/);
  assert.match(html, /win more jobs/);
  assert.match(html, /Digital presence/);
  assert.match(html, /Instant response/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders the complete product and company routes", async () => {
  for (const [pathname, expected] of [
    ["/product/digital-presence", "Show up where homeowners"],
    ["/product/instant-response", "Be first to every good job"],
    ["/product/estimate-follow-up", "Follow every estimate"],
    ["/product/customer-reactivation", "Turn yesterday’s jobs"],
    ["/how-it-works", "Observe. Act. Escalate. Improve."],
    ["/pilot", "Founding pilot"],
    ["/about", "Why the name"],
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(expected), pathname);
  }
});
