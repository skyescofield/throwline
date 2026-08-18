import Link from "next/link";
import { CTA, ProductVisual, SiteFooter, SiteHeader } from "../components";
import { products } from "../product-data";

export const metadata = { title: "How Throwline Works", description: "A managed growth system for independent tree care companies." };

export default function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subpage-hero simple-hero">
          <div className="subpage-copy"><p className="eyebrow">How Throwline works</p><h1>Give the repeatable growth work to an agent that knows tree care.</h1><p>Throwline connects the signals already scattered across your website, phone, inbox, calendar, and customer history—then turns them into action.</p><div className="hero-buttons"><Link href="/pilot" className="button button-dark">Start with a growth review</Link></div></div>
          <div className="system-diagram" aria-label="Throwline managed growth system diagram">
            <div className="system-center"><span className="brand-mark"><i /><b /></span><strong>Throwline</strong><small>Managed growth agent</small></div>
            <span className="system-node node-one">Website</span><span className="system-node node-two">Phone & text</span><span className="system-node node-three">CRM</span><span className="system-node node-four">Calendar</span>
          </div>
        </section>

        <section className="operating-model section-shell">
          <div className="section-intro centered narrow"><p className="eyebrow">The operating model</p><h2>Observe. Act. Escalate. Improve.</h2><p>Automation handles the repetition. Your team keeps control of the decisions that shape the customer relationship.</p></div>
          <div className="model-grid">
            <article><span>01</span><h3>Observe</h3><p>Throwline watches for new leads, open estimates, aging customer relationships, and gaps in your digital presence.</p></article>
            <article><span>02</span><h3>Act</h3><p>Your agent handles approved, repeatable work using your services, territory, timing, and communication rules.</p></article>
            <article><span>03</span><h3>Escalate</h3><p>Urgent jobs, qualified buyers, unusual requests, and important choices reach the right person with context.</p></article>
            <article><span>04</span><h3>Improve</h3><p>Outcomes feed the next decision so response, qualification, follow-up, and targeting become more useful over time.</p></article>
          </div>
        </section>

        <section className="workflow-map section-shell">
          <div className="workflow-sticky"><p className="eyebrow">Across the customer journey</p><h2>One agent keeps the handoffs connected.</h2><p>Start with the most urgent workflow. Add the next one after Throwline earns your trust.</p></div>
          <div className="workflow-list">
            {products.map((product, index) => <article key={product.slug}><div className={`workflow-visual mini-${product.visual}`}><ProductVisual type={product.visual} compact /></div><span>0{index + 1}</span><h3>{product.navLabel}</h3><p>{product.promise}</p><Link href={`/product/${product.slug}`}>Explore <i>↗</i></Link></article>)}
          </div>
        </section>

        <section className="guardrail-section section-shell">
          <div><p className="eyebrow">Your rules stay in charge</p><h2>Useful autonomy needs clear boundaries.</h2></div>
          <ul><li><span>01</span><div><strong>Approval where it matters</strong><p>You choose which actions run automatically and which require review.</p></div></li><li><span>02</span><div><strong>Clear escalation</strong><p>Safety, utility, complaint, and high-value opportunity rules route to a human.</p></div></li><li><span>03</span><div><strong>Visible work</strong><p>See what the agent did, why it acted, and what happened next.</p></div></li></ul>
        </section>
        <CTA title="Start with one workflow that should already be working better." />
      </main>
      <SiteFooter />
    </>
  );
}
