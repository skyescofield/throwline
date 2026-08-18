import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, ProductVisual, SiteFooter, SiteHeader } from "../../components";
import { getProduct, products } from "../../product-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: `${product.navLabel} | Throwline`, description: product.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        <section className={`subpage-hero product-hero product-hero-${product.visual}`}>
          <div className="subpage-copy">
            <p className="eyebrow">{product.eyebrow}</p>
            <h1>{product.title}</h1>
            <p>{product.summary}</p>
            <div className="hero-buttons"><Link href="/pilot" className="button button-dark">Get a growth plan</Link><Link href="/how-it-works" className="button button-outline">How it works</Link></div>
            <small>{product.promise}</small>
          </div>
          <div className="subpage-visual"><ProductVisual type={product.visual} /></div>
        </section>

        <section className="benefit-section section-shell">
          <div className="section-intro centered narrow"><p className="eyebrow">What changes</p><h2>Less leakage. More useful work.</h2></div>
          <div className="benefit-grid">
            {product.benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.copy}</p></article>)}
          </div>
        </section>

        <section className="steps-section section-shell">
          <div className="steps-copy"><p className="eyebrow">How it works</p><h2>A managed loop, not another static workflow.</h2><p>Your agent watches for the right signals, performs the repeatable work, and escalates the moments that need your judgment.</p></div>
          <ol className="steps-list">
            {product.steps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}
          </ol>
        </section>

        <section className="included-section section-shell">
          <div className="included-card">
            <p className="eyebrow">In this workflow</p>
            <h2>Everything needed to move the job forward.</h2>
            <ul>{product.details.map((detail) => <li key={detail}><span>✓</span>{detail}</li>)}</ul>
          </div>
          <div className="included-quote">
            <p>“The best growth system is the one that keeps working while your team is doing the work customers hired you for.”</p>
            <span>Throwline product principle</span>
          </div>
        </section>

        <section className="related-section section-shell">
          <div className="section-intro split-intro"><div><p className="eyebrow">Keep the line moving</p><h2>Explore the rest of Throwline.</h2></div></div>
          <div className="related-grid">
            {related.map((item) => <Link href={`/product/${item.slug}`} key={item.slug}><span>{item.eyebrow}</span><h3>{item.navLabel}</h3><p>{item.summary}</p><b>Explore <i>↗</i></b></Link>)}
          </div>
        </section>
        <CTA title={`Make ${product.navLabel.toLowerCase()} one less thing to chase.`} />
      </main>
      <SiteFooter />
    </>
  );
}
