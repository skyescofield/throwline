import Link from "next/link";
import { CTA, SiteFooter, SiteHeader } from "../components";

export const metadata = { title: "About Throwline", description: "Why Throwline is building managed growth agents for tree care companies." };

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="about-hero">
          <p className="eyebrow">About Throwline</p>
          <h1>Technology should give independent tree companies a stronger line to growth.</h1>
          <p>Throwline is building managed agents for the skilled local businesses that keep our communities running—starting with tree care.</p>
        </section>
        <section className="about-story section-shell">
          <div className="story-image">
            {/* The direct asset keeps this Pages deployment independent of an image-optimization binding. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/arborist-climber.jpg" alt="Tree care crew working with climbing equipment" />
            <span>The throwline is the first precise move that makes the rest of a climb possible.</span>
          </div>
          <div className="story-copy"><p className="eyebrow">Why the name</p><h2>Start with the right first move.</h2><p>Before a climber leaves the ground, a throwline establishes access to the canopy. It is simple, specific, and consequential: place it well and the rest of the job can move.</p><p>That is the role we want Throwline to play for an independent tree company. Find the highest-leverage starting point, connect the pieces already there, and create a reliable line from demand to booked work.</p></div>
        </section>
        <section className="beliefs-section section-shell">
          <div><p className="eyebrow">What we believe</p><h2>Built around independent operators.</h2></div>
          <div className="belief-list"><article><span>01</span><h3>Software should do work.</h3><p>Small business owners do not need another interface to learn. They need useful outcomes with clear accountability.</p></article><article><span>02</span><h3>Vertical knowledge matters.</h3><p>Tree care has its own jobs, risks, seasons, language, and customer expectations. Generic automation misses the important details.</p></article><article><span>03</span><h3>Local companies should compound.</h3><p>Independent businesses should gain leverage from technology without giving up the relationships and reputation that make them valuable.</p></article></div>
        </section>
        <section className="comarca-note"><div><span>Built by Comarca</span><h2>Managed agents for service businesses.</h2><p>Throwline is the first vertical product from Comarca, a company building a higher-productivity future around independent business owners.</p></div><Link href="https://comarca.ai" className="button button-outline">Visit Comarca <span>↗</span></Link></section>
        <CTA title="Help shape the first managed growth agent for tree care." />
      </main>
      <SiteFooter />
    </>
  );
}
