import Link from "next/link";
import { CTA, LogoMark, ProductVisual, SiteFooter, SiteHeader } from "../components";
import { products } from "../product-data";

export const metadata = { title: "How Throwline Works", description: "How Throwline handles leads, estimates, and repeat work for tree companies." };

export default function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subpage-hero simple-hero">
          <div className="subpage-copy"><p className="eyebrow">How Throwline works</p><h1>Hand off the follow-up. Keep control.</h1><p>Throwline connects to the tools you use, does the repeat work, and brings your team the decisions.</p><div className="hero-buttons"><Link href="/pilot" className="button button-dark">Get a free review</Link></div></div>
          <div className="system-diagram" aria-label="How Throwline connects to your tools">
            <div className="system-center"><LogoMark /><strong>Throwline</strong><small>Growth, handled</small></div>
            <span className="system-node node-one">Website</span><span className="system-node node-two">Phone & text</span><span className="system-node node-three">CRM</span><span className="system-node node-four">Calendar</span>
          </div>
        </section>

        <section className="operating-model section-shell">
          <div className="section-intro centered narrow"><p className="eyebrow">The loop</p><h2>Watch. Act. Flag. Learn.</h2><p>Throwline does the repetition. Your team keeps the judgment.</p></div>
          <div className="model-grid">
            <article><span>01</span><h3>Watch</h3><p>Spot new leads, open estimates, past customers, and search gaps.</p></article>
            <article><span>02</span><h3>Act</h3><p>Handle approved work using your rules.</p></article>
            <article><span>03</span><h3>Flag</h3><p>Send urgent jobs and ready buyers to the right person.</p></article>
            <article><span>04</span><h3>Learn</h3><p>Use every result to make the next move better.</p></article>
          </div>
        </section>

        <section className="workflow-map section-shell">
          <div className="workflow-sticky"><p className="eyebrow">Across the whole job</p><h2>One system keeps the handoffs clean.</h2><p>Start with one leak. Fix the next when you are ready.</p></div>
          <div className="workflow-list">
            {products.map((product, index) => <article key={product.slug}><div className={`workflow-visual mini-${product.visual}`}><ProductVisual type={product.visual} compact /></div><span>0{index + 1}</span><h3>{product.navLabel}</h3><p>{product.promise}</p><Link href={`/product/${product.slug}`}>Explore <i>↗</i></Link></article>)}
          </div>
        </section>

        <section className="guardrail-section section-shell">
          <div><p className="eyebrow">You set the boundaries</p><h2>Your rules. Every time.</h2></div>
          <ul><li><span>01</span><div><strong>You choose</strong><p>Pick what runs and what needs approval.</p></div></li><li><span>02</span><div><strong>People step in</strong><p>Safety, utility, complaints, and big opportunities go to your team.</p></div></li><li><span>03</span><div><strong>Nothing is hidden</strong><p>See what happened and why.</p></div></li></ul>
        </section>
        <CTA title="Start with the one thing costing you jobs." />
      </main>
      <SiteFooter />
    </>
  );
}
