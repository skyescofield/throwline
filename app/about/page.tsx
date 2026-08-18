import Link from "next/link";
import { CTA, SiteFooter, SiteHeader } from "../components";

export const metadata = { title: "About Throwline", description: "Why Throwline is built for independent tree companies." };

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="about-hero">
          <p className="eyebrow">About Throwline</p>
          <h1>Built for the people doing the work.</h1>
          <p>Throwline helps independent tree companies grow without becoming software companies.</p>
        </section>
        <section className="about-story section-shell">
          <div className="story-graphic" aria-label="A throwline creating a path into the canopy">
            <div className="story-canopy" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="story-rope" aria-hidden="true"><i /></div>
            <span>One precise first move creates a clear path up.</span>
          </div>
          <div className="story-copy"><p className="eyebrow">Why the name</p><h2>The first move matters.</h2><p>A throwline gives a climber access to the canopy. Place it well and the rest of the job can move.</p><p>We do the same for growth: find the best starting point and draw a clear line to booked work.</p></div>
        </section>
        <section className="beliefs-section section-shell">
          <div><p className="eyebrow">What we believe</p><h2>Built for independents.</h2></div>
          <div className="belief-list"><article><span>01</span><h3>Software should do the work.</h3><p>You need results, not another login.</p></article><article><span>02</span><h3>Tree care is different.</h3><p>The jobs, risks, seasons, and language matter.</p></article><article><span>03</span><h3>Local companies should win.</h3><p>Grow without losing the trust that made you valuable.</p></article></div>
        </section>
        <section className="comarca-note"><div><span>Built by Comarca</span><h2>Tools that do the work.</h2><p>Throwline is Comarca’s first product for independent service businesses.</p></div><Link href="https://comarca.ai" className="button button-outline">Visit Comarca <span>↗</span></Link></section>
        <CTA title="Help build the best growth tool in tree care." />
      </main>
      <SiteFooter />
    </>
  );
}
