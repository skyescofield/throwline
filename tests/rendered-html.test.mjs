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
  assert.match(html, /More tree work/);
  assert.match(html, /Less chasing/);
  assert.match(html, /Local presence/);
  assert.match(html, /Lead response/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders the complete product and company routes", async () => {
  for (const [pathname, expected] of [
    ["/product/digital-presence", "Get found by the right homeowners"],
    ["/product/instant-response", "Answer every good lead"],
    ["/product/estimate-follow-up", "Turn more estimates into booked work"],
    ["/product/customer-reactivation", "Bring past customers back"],
    ["/how-it-works", "Watch. Act. Flag. Learn."],
    ["/pilot", "Fix the leak costing you jobs"],
    ["/about", "Built for the people doing the work"],
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(expected), pathname);
  }
});
