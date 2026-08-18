"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "./product-data";

const menuGroups = [
  "Grow online discovery",
  "Respond to new work",
  "Close open work",
  "Grow repeat work",
];

export function ProductMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className={`product-menu${open ? " is-open" : ""}`} ref={menuRef}>
      <button type="button" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((current) => !current)}>
        Product <span aria-hidden="true">⌄</span>
      </button>
      <div className="product-menu-scrim" aria-hidden="true" hidden={!open} onClick={() => setOpen(false)} />
      <div className="product-menu-panel" role="menu" hidden={!open}>
        <div className="product-menu-groups">
          {products.map((product, index) => (
            <section className="product-menu-group" key={product.slug}>
              <p>{menuGroups[index]}</p>
              <Link href={`/product/${product.slug}`} role="menuitem" onClick={() => setOpen(false)}>
                <span className={`menu-product-icon menu-product-icon-${index + 1}`} aria-hidden="true"><i /></span>
                <span className="menu-product-copy"><strong>{product.navLabel}</strong><small>{product.eyebrow}</small></span>
              </Link>
            </section>
          ))}
        </div>
        <aside className="product-menu-features" aria-label="Featured Throwline links">
          <Link className="menu-feature menu-feature-dark" href="/how-it-works" role="menuitem" onClick={() => setOpen(false)}>
            <span>How it works</span>
            <strong>One system keeps every handoff clean.</strong>
            <i aria-hidden="true">↗</i>
          </Link>
          <Link className="menu-feature menu-feature-green" href="/pilot" role="menuitem" onClick={() => setOpen(false)}>
            <span>Free review</span>
            <strong>Find the leak costing you jobs.</strong>
            <i aria-hidden="true">↗</i>
          </Link>
        </aside>
      </div>
    </div>
  );
}
