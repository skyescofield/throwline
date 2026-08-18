import Link from "next/link";
import { CTA, LeadForm, LogoMark, ProductVisual, SiteFooter, SiteHeader } from "./components";
import { products } from "./product-data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <p className="proof-line"><LogoMark small /> Built for tree companies</p>
          <h1>More tree work. <em>Less chasing.</em></h1>
          <p className="hero-copy">Throwline replies to leads, follows up on estimates, and brings past customers back—while your crew stays on the job.</p>
          <LeadForm />
          <p className="hero-caption">Free 30-minute review <span>•</span> Keep the tools you use</p>
          <div className="hero-stage">
            <div className="hero-gradient" />
            <div className="hero-phone">
              <div className="phone-speaker" />
              <div className="phone-status"><strong>9:41</strong><span>● ● ●</span></div>
              <div className="phone-brand"><LogoMark small /> Throwline</div>
              <h3>New removal lead.</h3>
              <div className="phone-lead">
                <div><span>Qualified</span><b>Emergency removal</b></div>
                <p>Large red oak limb down across driveway. No utility contact. Photos received.</p>
                <dl><div><dt>Location</dt><dd>North Austin</dd></div><div><dt>Estimate</dt><dd>Today, 3:30 PM</dd></div></dl>
              </div>
              <button type="button">View lead <span>↗</span></button>
            </div>
            <div className="floating-card floating-card-left"><span>Response time</span><strong>18 sec</strong><small>Lead qualified and booked</small></div>
            <div className="floating-card floating-card-right"><span>Call next</span><strong>Cedar Ridge HOA</strong><small>Estimate viewed 4 times</small></div>
          </div>
        </section>

        <section className="outcome-strip section-shell">
          <div className="section-intro centered">
            <p className="eyebrow">Never let good work go cold</p>
            <h2>Every lead. Every estimate. Every customer.</h2>
          </div>
          <div className="outcome-cards">
            <article><span>01</span><strong>New leads</strong><p>Answered in seconds.</p></article>
            <article><span>02</span><strong>Open estimates</strong><p>Followed up until there is an answer.</p></article>
            <article><span>03</span><strong>Past customers</strong><p>Brought back at the right time.</p></article>
          </div>
        </section>

        <section className="field-section section-shell">
          <div className="field-image-wrap">
            {/* The direct asset keeps this Pages deployment independent of an image-optimization binding. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/arborist-climber.jpg" alt="Professional arborist preparing to climb a mature tree" />
            <div className="image-label"><span>Made for working crews</span><strong>Growth keeps moving while your team does.</strong></div>
          </div>
          <div className="field-copy">
            <p className="eyebrow">We run it for you</p>
            <h2>It works. You do not babysit it.</h2>
            <p>Throwline handles the follow-up and flags only the calls that need you.</p>
            <ul className="check-list">
              <li><span>✓</span> Fits the tools you already use</li>
              <li><span>✓</span> Follows your services and service area</li>
              <li><span>✓</span> Measures booked work, not busywork</li>
            </ul>
            <Link className="inline-arrow" href="/how-it-works">See how Throwline works <span>↗</span></Link>
          </div>
        </section>

        <section className="product-section section-shell">
          <div className="section-intro split-intro">
            <div><p className="eyebrow">One system</p><h2>Find it. Win it. Keep it.</h2></div>
            <p>Throwline closes the gaps that cost tree companies jobs.</p>
          </div>
          <div className="product-stack">
            {products.map((product, index) => (
              <article className="product-row" key={product.slug}>
                <div className="product-row-copy">
                  <span className="product-number">0{index + 1}</span>
                  <p className="eyebrow">{product.eyebrow}</p>
                  <h3>{product.title}</h3>
                  <p>{product.summary}</p>
                  <Link className="inline-arrow" href={`/product/${product.slug}`}>Explore {product.navLabel.toLowerCase()} <span>↗</span></Link>
                </div>
                <div className={`product-row-visual visual-bg-${product.visual}`}><ProductVisual type={product.visual} compact /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="job-flow section-shell">
          <div className="section-intro centered narrow">
            <p className="eyebrow">From first call to repeat work</p>
            <h2>Keep every job moving.</h2>
          </div>
          <div className="job-flow-line" aria-hidden="true" />
          <ol>
            <li><span>01</span><strong>Inquiry</strong><p>Get the details and photos.</p></li>
            <li><span>02</span><strong>Site visit</strong><p>Book the right estimator.</p></li>
            <li><span>03</span><strong>Estimate</strong><p>Follow up until they decide.</p></li>
            <li><span>04</span><strong>Next job</strong><p>Earn the review and repeat work.</p></li>
          </ol>
        </section>

        <section className="principle-section">
          <div className="principle-orbit" aria-hidden="true"><i /><i /><i /></div>
          <p className="eyebrow">Built for independents</p>
          <h2>Local tree companies should win.</h2>
          <p>You do skilled, trusted work. Throwline gives you the follow-through of a national brand without turning you into one.</p>
          <Link href="/about" className="button button-light">Why we built it</Link>
        </section>

        <section className="faq-section section-shell">
          <div><p className="eyebrow">Good questions</p><h2>Straight answers.</h2></div>
          <div className="faq-list">
            <details><summary>Is Throwline a CRM?<span>+</span></summary><p>No. It works around your phone, calendar, CRM, email, and website.</p></details>
            <details><summary>Does it answer calls and texts?<span>+</span></summary><p>Yes. It can reply, qualify the job, collect photos, and book the next step using your rules.</p></details>
            <details><summary>Will it sound like my company?<span>+</span></summary><p>Yes. You set the tone, services, hours, territory, and handoff rules.</p></details>
            <details><summary>Who is the pilot for?<span>+</span></summary><p>Independent tree companies that do strong work and want fewer good jobs to slip.</p></details>
          </div>
        </section>

        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
