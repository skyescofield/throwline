import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata = { title: "Throwline Pilot", description: "Join the first Throwline pilot for independent tree care companies." };

export default async function Pilot({ searchParams }: { searchParams: Promise<{ company?: string }> }) {
  const { company } = await searchParams;
  const subject = encodeURIComponent(`Throwline pilot${company ? ` — ${company}` : ""}`);
  const body = encodeURIComponent(`Hi Throwline,\n\nI would like a growth review${company ? ` for ${company}` : ""}.\n\nThe part I most want to improve is:\n\n`);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="pilot-page">
          <div className="pilot-copy">
            <p className="eyebrow">Founding pilot</p>
            <h1>Fix the leak costing you jobs.</h1>
            <p>We find it, fix one part of the process, and measure the result. Small pilot. Hands-on help.</p>
            <div className="pilot-steps">
              <div><span>01</span><strong>Find the leak</strong><p>See where good work is getting lost.</p></div>
              <div><span>02</span><strong>Fix one thing</strong><p>Build it around your rules.</p></div>
              <div><span>03</span><strong>Measure it</strong><p>Track replies, estimates, and bookings.</p></div>
            </div>
          </div>
          <aside className="pilot-card">
            <p className="card-kicker">Free first step</p>
            <h2>{company ? `A free review for ${company}` : "A 30-minute growth review"}</h2>
            <ul><li><span>✓</span> Lead response check</li><li><span>✓</span> Estimate follow-up check</li><li><span>✓</span> Local search gaps</li><li><span>✓</span> One clear next move</li></ul>
            <a className="button button-green button-wide" href={`mailto:info@comarca.ai?subject=${subject}&body=${body}`}>Get my free review <span>↗</span></a>
            <small>No pitch. No migration. Just a clear next move.</small>
          </aside>
        </section>
        <section className="pilot-bottom"><p>Want to look around first?</p><h2>See how Throwline works.</h2><Link href="/how-it-works" className="button button-light">How it works</Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
