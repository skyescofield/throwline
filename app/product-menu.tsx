import Link from "next/link";
import { products } from "./product-data";

const menuGroups = [
  "Grow online discovery",
  "Respond to new work",
  "Close open work",
  "Grow repeat work",
];

function ChevronIcon() {
  return (
    <svg className="menu-chevron" viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function ProductIcon({ index }: { index: number }) {
  const icons = [
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M3.75 12h16.5M12 3.75c2.1 2.25 3.15 5 3.15 8.25S14.1 18 12 20.25C9.9 18 8.85 15.25 8.85 12S9.9 6 12 3.75Z" />
    </>,
    <>
      <path d="M5.25 5.25h13.5v9.5h-7.5l-4.5 3v-3h-1.5a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2Z" />
      <path d="M7.5 10h.01M11 10h.01M14.5 10h.01" />
    </>,
    <>
      <rect x="5.25" y="4.25" width="13.5" height="16" rx="2.25" />
      <path d="M9 3.25h6v3.5H9zM8.75 13l2.1 2.1 4.4-4.45" />
    </>,
    <>
      <path d="M19.25 8.75A7.75 7.75 0 0 0 6.2 5.1L4.25 7M4.25 3.75V7h3.25M4.75 15.25A7.75 7.75 0 0 0 17.8 18.9l1.95-1.9M19.75 20.25V17H16.5" />
    </>,
  ];

  return (
    <span className="menu-product-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{icons[index]}</svg>
    </span>
  );
}

export function ProductMenu() {
  return (
    <details className="product-menu">
      <summary>Product <ChevronIcon /></summary>
      <div className="product-menu-panel" role="menu">
        <div className="product-menu-groups">
          {products.map((product, index) => (
            <section className="product-menu-group" key={product.slug}>
              <p>{menuGroups[index]}</p>
              <Link href={`/product/${product.slug}`} role="menuitem">
                <ProductIcon index={index} />
                <span className="menu-product-copy"><strong>{product.navLabel}</strong><small>{product.summary}</small></span>
                <ArrowIcon className="menu-product-arrow" />
              </Link>
            </section>
          ))}
        </div>
        <aside className="product-menu-features" aria-label="Featured Throwline links">
          <Link className="menu-feature menu-feature-dark" href="/how-it-works" role="menuitem">
            <span>How it works</span>
            <strong>One system keeps every handoff clean.</strong>
            <span className="menu-feature-arrow"><ArrowIcon className="menu-feature-arrow-icon" /></span>
          </Link>
          <Link className="menu-feature menu-feature-green" href="/pilot" role="menuitem">
            <span>Free review</span>
            <strong>Find the leak costing you jobs.</strong>
            <span className="menu-feature-arrow"><ArrowIcon className="menu-feature-arrow-icon" /></span>
          </Link>
        </aside>
      </div>
    </details>
  );
}
