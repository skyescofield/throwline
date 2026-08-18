import Link from "next/link";
import { CTA, LeadForm, ProductVisual, SiteFooter, SiteHeader } from "./components";
import { products } from "./product-data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <p className="proof-line"><span className="proof-mark">T</span> Purpose-built for independent tree care companies</p>
          <h1>The managed growth platform tree companies use to <em>win more jobs.</em></h1>
          <p className="hero-copy">Throwline answers new leads, follows every estimate, sharpens your local presence, and brings past customers back—without another dashboard to babysit.</p>
          <LeadForm />
          <p className="hero-caption">Free growth review <span>•</span> Built around your current tools</p>
          <div className="hero-stage">
            <div className="hero-gradient" />
            <div className="hero-phone">
              <div className="phone-speaker" />
              <div className="phone-status"><strong>9:41</strong><span>● ● ●</span></div>
              <div className="phone-brand"><span className="mini-mark">T</span> Throwline</div>
              <h3>You have a new removal lead.</h3>
              <div className="phone-lead">
                <div><span>Qualified</span><b>Emergency removal</b></div>
                <p>Large red oak limb down across driveway. No utility contact. Photos received.</p>
                <dl><div><dt>Location</dt><dd>North Austin</dd></div><div><dt>Estimate</dt><dd>Today, 3:30 PM</dd></div></dl>
              </div>
              <button type="button">View lead <span>↗</span></button>
            </div>
            <div className="floating-card floating-card-left"><span>Response time</span><strong>18 sec</strong><small>Lead qualified and booked</small></div>
            <div className="floating-card floating-card-right"><span>Next best action</span><strong>Call Cedar Ridge HOA</strong><small>Estimate viewed 4 times</small></div>
          </div>
        </section>

        <section className="outcome-strip section-shell">
          <div className="section-intro centered">
            <p className="eyebrow">The work between the work</p>
            <h2>More demand. Faster response. Better follow-through.</h2>
          </div>
          <div className="outcome-cards">
            <article><span>01</span><strong>Every lead</strong><p>Gets a fast, useful response while your team stays focused on the job.</p></article>
            <article><span>02</span><strong>Every estimate</strong><p>Gets thoughtful follow-up until the customer decides or the timing changes.</p></article>
            <article><span>03</span><strong>Every relationship</strong><p>Becomes a chance for repeat work, reviews, and referrals.</p></article>
          </div>
        </section>

        <section className="field-section section-shell">
          <div className="field-image-wrap">
            {/* The direct asset keeps this Pages deployment independent of an image-optimization binding. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/arborist-climber.jpg" alt="Professional arborist preparing to climb a mature tree" />
            <div className="image-label"><span>Built for the field</span><strong>Your crew should not have to stop working to keep growth moving.</strong></div>
          </div>
          <div className="field-copy">
            <p className="eyebrow">Managed, not just installed</p>
            <h2>Your growth crew, without another team to manage.</h2>
            <p>Most software gives you a login and another list of things to do. Throwline’s agents do the ongoing work, learn your business rules, and bring your team the decisions that need a human.</p>
            <ul className="check-list">
              <li><span>✓</span> Works around the systems you already use</li>
              <li><span>✓</span> Learns your services, territory, and ideal jobs</li>
              <li><span>✓</span> Measures booked work—not clicks and activity</li>
            </ul>
            <Link className="inline-arrow" href="/how-it-works">See how Throwline works <span>↗</span></Link>
          </div>
        </section>

        <section className="product-section section-shell">
          <div className="section-intro split-intro">
            <div><p className="eyebrow">One connected system</p><h2>From first search to the next job.</h2></div>
            <p>Throwline focuses on the parts of growth that usually fall between people, vendors, and software.</p>
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
            <p className="eyebrow">Built around how tree work is sold</p>
            <h2>One clean handoff at every stage.</h2>
          </div>
          <div className="job-flow-line" aria-hidden="true" />
          <ol>
            <li><span>01</span><strong>Inquiry</strong><p>Capture the service, urgency, location, access, and photos.</p></li>
            <li><span>02</span><strong>Site visit</strong><p>Schedule the right estimator with the context already collected.</p></li>
            <li><span>03</span><strong>Estimate</strong><p>Stay close to the decision and surface genuine buying signals.</p></li>
            <li><span>04</span><strong>Next job</strong><p>Turn completed work into reviews, referrals, and future care.</p></li>
          </ol>
        </section>

        <section className="principle-section">
          <div className="principle-orbit" aria-hidden="true"><i /><i /><i /></div>
          <p className="eyebrow">Why Throwline</p>
          <h2>Independent companies deserve the same growth machinery as the national brands.</h2>
          <p>Tree care is local, skilled, high-trust work. The technology should strengthen the companies that do it well—not turn them into call centers.</p>
          <Link href="/about" className="button button-light">Our point of view</Link>
        </section>

        <section className="faq-section section-shell">
          <div><p className="eyebrow">Questions, answered</p><h2>Designed to be useful before it is complicated.</h2></div>
          <div className="faq-list">
            <details><summary>Is Throwline a CRM?<span>+</span></summary><p>No. Throwline is the managed growth layer around the systems you already use. It can work with a CRM, calendar, phone, email, and website rather than asking you to replace everything on day one.</p></details>
            <details><summary>Does it answer calls and texts?<span>+</span></summary><p>That is one of the first workflows being developed. Throwline is designed to respond, qualify, collect photos and job details, and book the right next step using your rules.</p></details>
            <details><summary>Will it sound like my company?<span>+</span></summary><p>Yes. Service areas, vocabulary, hours, escalation rules, and tone are configured around your business. You approve the important boundaries before anything runs.</p></details>
            <details><summary>Who is the pilot for?<span>+</span></summary><p>Independent tree care companies that already do strong work and want a more consistent way to find, respond to, and convert demand. The first pilot is intentionally hands-on.</p></details>
          </div>
        </section>

        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
