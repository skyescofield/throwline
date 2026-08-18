import Link from "next/link";
import type { ProductVisual as ProductVisualName } from "./product-data";
import { products } from "./product-data";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Throwline home">
      <span className="brand-mark" aria-hidden="true"><i /><b /></span>
      <span>throwline</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <details className="product-menu">
            <summary>Product <span aria-hidden="true">⌄</span></summary>
            <div className="product-menu-panel">
              <p className="menu-kicker">One agent. Four growth workflows.</p>
              {products.map((product) => (
                <Link href={`/product/${product.slug}`} key={product.slug}>
                  <span>{product.navLabel}</span>
                  <small>{product.eyebrow}</small>
                </Link>
              ))}
            </div>
          </details>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/pilot">Pilot</Link>
          <Link href="/about">Company</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/how-it-works" className="text-link">See the system</Link>
          <Link href="/pilot" className="button button-dark button-small">Get a growth plan</Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {products.map((product) => <Link href={`/product/${product.slug}`} key={product.slug}>{product.navLabel}</Link>)}
            <Link href="/how-it-works">How it works</Link>
            <Link href="/pilot">Pilot</Link>
            <Link href="/about">Company</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Brand />
          <p>Managed growth for independent tree care companies.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Product</strong>
            {products.map((product) => <Link href={`/product/${product.slug}`} key={product.slug}>{product.navLabel}</Link>)}
          </div>
          <div>
            <strong>Throwline</strong>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/pilot">Pilot</Link>
            <Link href="/about">Company</Link>
          </div>
          <div>
            <strong>Contact</strong>
            <a href="mailto:info@comarca.ai">info@comarca.ai</a>
            <a href="https://www.unsplash.com/photos/a-tree-arborist-is-working-in-the-tree-C-g9MSA8dZ8" target="_blank" rel="noreferrer">Photo credit</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Throwline</span>
        <span>A Comarca company</span>
      </div>
    </footer>
  );
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`lead-form${compact ? " lead-form-compact" : ""}`} action="/pilot" method="get">
      <label className="sr-only" htmlFor={compact ? "company-compact" : "company-hero"}>Tree company name</label>
      <input id={compact ? "company-compact" : "company-hero"} name="company" placeholder="Enter your tree company name" autoComplete="organization" />
      <button type="submit">Get my growth plan <span aria-hidden="true">↗</span></button>
    </form>
  );
}

export function ProductVisual({ type, compact = false }: { type: ProductVisualName; compact?: boolean }) {
  if (type === "presence") {
    return (
      <div className={`product-visual visual-presence${compact ? " compact" : ""}`} aria-label="Local presence audit preview">
        <div className="browser-bar"><i /><i /><i /><span>throwline / local presence</span></div>
        <div className="presence-grid">
          <div className="score-ring"><strong>82</strong><span>visibility score</span></div>
          <div className="audit-list">
            <p><i className="status-good" /> Google Business Profile <b>Strong</b></p>
            <p><i className="status-warn" /> Emergency service page <b>Missing</b></p>
            <p><i className="status-good" /> Review velocity <b>Improving</b></p>
          </div>
        </div>
        <div className="visual-note"><span>Next action</span><strong>Publish storm cleanup page for North Austin</strong></div>
      </div>
    );
  }

  if (type === "response") {
    return (
      <div className={`product-visual visual-response${compact ? " compact" : ""}`} aria-label="New lead response preview">
        <div className="visual-topline"><span className="live-dot" /> New lead · 18 seconds ago <b>Qualified</b></div>
        <div className="lead-card">
          <div className="avatar">JM</div>
          <div><strong>Jordan M.</strong><span>Storm-damaged oak · Austin, TX</span></div>
          <em>Today</em>
        </div>
        <div className="message-thread">
          <p className="incoming">A large limb came down over our driveway. Can someone look today?</p>
          <p className="outgoing">Yes—we can help. Is the limb touching a structure or power line?</p>
          <p className="incoming short">No power line. I can send photos.</p>
        </div>
        <div className="visual-action"><span>Estimate visit</span><strong>Today · 3:30 PM</strong><b>Booked</b></div>
      </div>
    );
  }

  if (type === "followup") {
    return (
      <div className={`product-visual visual-followup${compact ? " compact" : ""}`} aria-label="Estimate follow-up pipeline preview">
        <div className="visual-topline">Estimate follow-up <b>4 need attention</b></div>
        <div className="pipeline-head"><span>Customer</span><span>Estimate</span><span>Signal</span></div>
        {[
          ["M. Reynolds", "$3,850", "Viewed 3×"],
          ["A. Patel", "$1,275", "Asked about timing"],
          ["Cedar Ridge HOA", "$8,400", "Ready for call"],
        ].map((row, index) => (
          <div className="pipeline-row" key={row[0]}><i>{index + 1}</i><strong>{row[0]}</strong><span>{row[1]}</span><b>{row[2]}</b></div>
        ))}
        <div className="visual-note"><span>Agent recommendation</span><strong>Call Cedar Ridge HOA before 2 PM</strong></div>
      </div>
    );
  }

  return (
    <div className={`product-visual visual-reactivation${compact ? " compact" : ""}`} aria-label="Customer reactivation campaign preview">
      <div className="visual-topline">Spring pruning campaign <b>Running</b></div>
      <div className="campaign-chart">
        <div><span style={{ height: "38%" }} /><small>Mon</small></div>
        <div><span style={{ height: "52%" }} /><small>Tue</small></div>
        <div><span style={{ height: "68%" }} /><small>Wed</small></div>
        <div><span style={{ height: "82%" }} /><small>Thu</small></div>
        <div><span style={{ height: "94%" }} /><small>Fri</small></div>
      </div>
      <div className="campaign-stats"><p><span>Interested</span><strong>24</strong></p><p><span>Estimate requests</span><strong>11</strong></p><p><span>Booked</span><strong>7</strong></p></div>
      <div className="visual-note"><span>Audience</span><strong>Customers due for structural pruning</strong></div>
    </div>
  );
}

export function CTA({ title = "Put your growth work on a line that runs." }: { title?: string }) {
  return (
    <section className="cta-section">
      <div className="cta-rope" aria-hidden="true" />
      <p className="eyebrow">Built for the first move</p>
      <h2>{title}</h2>
      <p>See where Throwline can find, respond to, and convert more of the demand already around your tree care business.</p>
      <LeadForm compact />
      <small>Free growth review · No software migration required</small>
    </section>
  );
}
