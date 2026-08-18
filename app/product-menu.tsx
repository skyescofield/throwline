"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "./product-data";

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
      <div className="product-menu-panel" role="menu" hidden={!open}>
        <p className="menu-kicker">Four ways to win more work.</p>
        {products.map((product) => (
          <Link href={`/product/${product.slug}`} key={product.slug} role="menuitem" onClick={() => setOpen(false)}>
            <span>{product.navLabel}</span>
            <small>{product.eyebrow}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}
