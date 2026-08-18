import Link from "next/link";
import { products } from "./product-data";

const menuGroups = [
  "Grow online discovery",
  "Respond to new work",
  "Close open work",
  "Grow repeat work",
];

export function ProductMenu() {
  return (
    <details className="product-menu">
      <summary>Product <span aria-hidden="true">⌄</span></summary>
      <div className="product-menu-panel" role="menu">
        <div className="product-menu-groups">
          {products.map((product, index) => (
            <section className="product-menu-group" key={product.slug}>
              <p>{menuGroups[index]}</p>
              <Link href={`/product/${product.slug}`} role="menuitem">
                <span className={`menu-product-icon menu-product-icon-${index + 1}`} aria-hidden="true"><i /></span>
                <span className="menu-product-copy"><strong>{product.navLabel}</strong><small>{product.eyebrow}</small></span>
              </Link>
            </section>
          ))}
        </div>
        <aside className="product-menu-features" aria-label="Featured Throwline links">
          <Link className="menu-feature menu-feature-dark" href="/how-it-works" role="menuitem">
            <span>How it works</span>
            <strong>One system keeps every handoff clean.</strong>
            <i aria-hidden="true">↗</i>
          </Link>
          <Link className="menu-feature menu-feature-green" href="/pilot" role="menuitem">
            <span>Free review</span>
            <strong>Find the leak costing you jobs.</strong>
            <i aria-hidden="true">↗</i>
          </Link>
        </aside>
      </div>
    </details>
  );
}
