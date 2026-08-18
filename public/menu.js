(() => {
  if (window.__throwlineMenuBound) return;
  window.__throwlineMenuBound = true;

  document.addEventListener("pointerdown", (event) => {
    const menu = document.querySelector(".product-menu[open]");
    if (menu && !menu.contains(event.target)) menu.removeAttribute("open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const menu = document.querySelector(".product-menu[open]");
    if (!menu) return;
    menu.removeAttribute("open");
    menu.querySelector("summary")?.focus();
  });
})();
