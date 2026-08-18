import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata = { title: "Throwline Pilot", description: "Join the first Throwline pilot for independent tree care companies." };

export default async function Pilot({ searchParams }: { searchParams: Promise<{ company?: string }> }) {
  const { company } = await searchParams;
  const subject = encodeURIComponent(`Throwline pilot${company ? ` — ${company}` : ""}`);
  const body = encodeURIComponent(`Hi Throwline,\n\nI would like a growth review${company ? ` for ${company}` : ""}.\n\nThe workflow I most want to improve is:\n\n`);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="pilot-page">
          <div className="pilot-copy">
            <p className="eyebrow">Founding pilot</p>
            <h1>Build the growth system your tree company actually needs.</h1>
            <p>The first Throwline pilot is intentionally small and hands-on. We start with the workflow costing you the most good jobs, connect it to the way your business already runs, and measure whether it works.</p>
            <div className="pilot-steps">
              <div><span>01</span><strong>Growth review</strong><p>Map your current lead flow and find the clearest opportunity.</p></div>
              <div><span>02</span><strong>Working pilot</strong><p>Configure one managed workflow around your real business rules.</p></div>
              <div><span>03</span><strong>Measured outcome</strong><p>Track response, estimates, bookings, and the work your team saves.</p></div>
            </div>
          </div>
          <aside className="pilot-card">
            <p className="card-kicker">Your free starting point</p>
            <h2>{company ? `A growth review for ${company}` : "A 30-minute growth review"}</h2>
            <ul><li><span>✓</span> Lead-response teardown</li><li><span>✓</span> Estimate follow-up audit</li><li><span>✓</span> Local presence opportunities</li><li><span>✓</span> One recommended pilot workflow</li></ul>
            <a className="button button-green button-wide" href={`mailto:info@comarca.ai?subject=${subject}&body=${body}`}>Request my review <span>↗</span></a>
            <small>No obligation. No system migration. The point is to find out whether Throwline can create measurable value.</small>
          </aside>
        </section>
        <section className="pilot-bottom"><p>Not ready for a pilot?</p><h2>See the system before we talk.</h2><Link href="/how-it-works" className="button button-light">How Throwline works</Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
