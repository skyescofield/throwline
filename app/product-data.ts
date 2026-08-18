export type ProductVisual = "presence" | "response" | "followup" | "reactivation";

export type Product = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  promise: string;
  visual: ProductVisual;
  benefits: Array<{ title: string; copy: string }>;
  steps: Array<{ number: string; title: string; copy: string }>;
  details: string[];
};

export const products: Product[] = [
  {
    slug: "digital-presence",
    navLabel: "Digital presence",
    eyebrow: "Get found",
    title: "Show up where homeowners are already looking.",
    summary:
      "Throwline keeps your website, local listings, reviews, and service pages working together so the right customers can find you first.",
    promise: "A sharper local presence without managing an agency.",
    visual: "presence",
    benefits: [
      {
        title: "Know what is costing you calls",
        copy: "See the missing pages, weak listings, and reputation gaps that make a good tree company hard to find.",
      },
      {
        title: "Turn expertise into useful content",
        copy: "Build service and location pages around the work you actually want: removals, pruning, PHC, storm response, and more.",
      },
      {
        title: "Keep every profile accurate",
        copy: "Business information, services, photos, and reviews stay consistent across the places homeowners make decisions.",
      },
    ],
    steps: [
      { number: "01", title: "Audit", copy: "Throwline maps your current search presence and finds the highest-value gaps." },
      { number: "02", title: "Improve", copy: "Your agent drafts and ships approved updates across the right surfaces." },
      { number: "03", title: "Compound", copy: "New jobs, reviews, and seasonal demand continuously sharpen the plan." },
    ],
    details: ["Local search audit", "Service and location pages", "Listing consistency", "Review workflows", "Monthly opportunity plan"],
  },
  {
    slug: "instant-response",
    navLabel: "Instant response",
    eyebrow: "Answer every lead",
    title: "Be first to every good job—even when the crew is working.",
    summary:
      "Throwline responds to calls, texts, and website inquiries, gathers the details your estimator needs, and gets qualified homeowners onto the calendar.",
    promise: "Every serious inquiry gets a fast, professional next step.",
    visual: "response",
    benefits: [
      {
        title: "Respond in seconds",
        copy: "New inquiries receive a helpful response while your team is climbing, driving, or speaking with another customer.",
      },
      {
        title: "Collect job-ready details",
        copy: "Service type, address, urgency, access, photos, and scheduling preferences arrive in one clean summary.",
      },
      {
        title: "Book the right next step",
        copy: "Qualified leads can schedule an estimate while emergency and out-of-area requests follow your rules.",
      },
    ],
    steps: [
      { number: "01", title: "Connect", copy: "Use your existing phone, forms, calendar, and CRM wherever possible." },
      { number: "02", title: "Teach", copy: "Set your services, service area, hours, tone, and qualification rules." },
      { number: "03", title: "Respond", copy: "Throwline handles the first exchange and hands your team a useful brief." },
    ],
    details: ["Call and text response", "Website lead capture", "Photo collection", "Service-area screening", "Estimate scheduling"],
  },
  {
    slug: "estimate-follow-up",
    navLabel: "Estimate follow-up",
    eyebrow: "Win more estimates",
    title: "Follow every estimate without chasing every customer.",
    summary:
      "Throwline keeps proposals moving with timely, personal follow-up—then tells your team when a homeowner is ready for a human conversation.",
    promise: "No good estimate quietly disappears into an inbox.",
    visual: "followup",
    benefits: [
      {
        title: "Stay present without being pushy",
        copy: "Follow-up timing and language adapt to the job, season, and customer response instead of firing the same generic reminder.",
      },
      {
        title: "Surface real buying signals",
        copy: "Replies, proposal views, timing changes, and objections become a short, prioritized call list for your team.",
      },
      {
        title: "Learn why work is lost",
        copy: "Price, timing, scope, trust, and no-response patterns give you a clearer picture of what to improve.",
      },
    ],
    steps: [
      { number: "01", title: "Watch", copy: "Throwline tracks open estimates and the signals around them." },
      { number: "02", title: "Follow up", copy: "Each homeowner gets the right message and next step at the right time." },
      { number: "03", title: "Escalate", copy: "High-intent replies reach the right person with full context." },
    ],
    details: ["Proposal reminders", "Personalized sequences", "Objection capture", "Priority call lists", "Win/loss insights"],
  },
  {
    slug: "customer-reactivation",
    navLabel: "Customer reactivation",
    eyebrow: "Grow from past work",
    title: "Turn yesterday’s jobs into tomorrow’s schedule.",
    summary:
      "Throwline organizes customer history and runs useful, well-timed outreach for pruning cycles, plant health care, reviews, referrals, and seasonal work.",
    promise: "More repeat work from relationships you have already earned.",
    visual: "reactivation",
    benefits: [
      {
        title: "Find the right customers",
        copy: "Group past work by service, species, neighborhood, job date, and likely next need—not one giant email list.",
      },
      {
        title: "Reach out for a reason",
        copy: "Storms, pruning windows, treatment cycles, and unfinished recommendations create timely conversations.",
      },
      {
        title: "Build reputation into the workflow",
        copy: "Happy customers are asked for reviews and referrals at the moment they are most likely to help.",
      },
    ],
    steps: [
      { number: "01", title: "Organize", copy: "Customer history becomes useful groups and clear opportunities." },
      { number: "02", title: "Reach out", copy: "Throwline drafts, sends, and monitors focused campaigns." },
      { number: "03", title: "Book", copy: "Interested customers flow back into your normal estimate process." },
    ],
    details: ["Past-customer segmentation", "Seasonal campaigns", "PHC and pruning reminders", "Review requests", "Referral outreach"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
