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
    navLabel: "Local presence",
    eyebrow: "Get found",
    title: "Get found by the right homeowners.",
    summary:
      "Keep your website, listings, reviews, and service pages working together.",
    promise: "Look sharp. Rank better. Skip the agency.",
    visual: "presence",
    benefits: [
      {
        title: "Find the gaps",
        copy: "See what is costing you calls.",
      },
      {
        title: "Build the right pages",
        copy: "Publish clear pages for the work and areas you want.",
      },
      {
        title: "Stay accurate",
        copy: "Keep your services, photos, and business details consistent.",
      },
    ],
    steps: [
      { number: "01", title: "Audit", copy: "Find the gaps that matter most." },
      { number: "02", title: "Fix", copy: "Ship the right updates." },
      { number: "03", title: "Grow", copy: "Use new jobs and reviews to keep improving." },
    ],
    details: ["Local search audit", "Service and location pages", "Listing consistency", "Review requests", "Monthly growth plan"],
  },
  {
    slug: "instant-response",
    navLabel: "Lead response",
    eyebrow: "Answer every lead",
    title: "Answer every good lead. Fast.",
    summary:
      "Reply in seconds, collect the job details, and book the next step.",
    promise: "Your crew works. Throwline answers.",
    visual: "response",
    benefits: [
      {
        title: "Reply in seconds",
        copy: "Answer while your team is climbing, driving, or with a customer.",
      },
      {
        title: "Get the full picture",
        copy: "Collect the address, urgency, access, photos, and timing.",
      },
      {
        title: "Book the right jobs",
        copy: "Schedule good fits and route the rest by your rules.",
      },
    ],
    steps: [
      { number: "01", title: "Connect", copy: "Keep your phone, forms, calendar, and CRM." },
      { number: "02", title: "Set the rules", copy: "Choose your services, area, hours, and tone." },
      { number: "03", title: "Respond", copy: "Throwline replies and hands your team a clear brief." },
    ],
    details: ["Call and text response", "Website lead capture", "Photo collection", "Service-area screening", "Estimate scheduling"],
  },
  {
    slug: "estimate-follow-up",
    navLabel: "Estimate follow-up",
    eyebrow: "Win more estimates",
    title: "Turn more estimates into booked work.",
    summary:
      "Follow up at the right time and flag homeowners who are ready to talk.",
    promise: "No good estimate goes quiet.",
    visual: "followup",
    benefits: [
      {
        title: "Stay on their radar",
        copy: "Follow up without sounding pushy or canned.",
      },
      {
        title: "Know who is ready",
        copy: "Turn replies and proposal views into a short call list.",
      },
      {
        title: "Learn what loses work",
        copy: "See whether price, timing, scope, or trust is getting in the way.",
      },
    ],
    steps: [
      { number: "01", title: "Watch", copy: "Track every open estimate." },
      { number: "02", title: "Follow up", copy: "Send the right message at the right time." },
      { number: "03", title: "Hand off", copy: "Send ready buyers to the right person." },
    ],
    details: ["Proposal reminders", "Personalized sequences", "Objection capture", "Priority call lists", "Win/loss insights"],
  },
  {
    slug: "customer-reactivation",
    navLabel: "Repeat work",
    eyebrow: "Grow from past work",
    title: "Bring past customers back.",
    summary:
      "Reach out when pruning, plant health, or seasonal work is due.",
    promise: "More work from customers who already trust you.",
    visual: "reactivation",
    benefits: [
      {
        title: "Find the right customers",
        copy: "Group past work by service, area, date, and likely next need.",
      },
      {
        title: "Reach out for a reason",
        copy: "Use storms, pruning windows, and treatment cycles to time it right.",
      },
      {
        title: "Ask at the right time",
        copy: "Turn happy customers into reviews and referrals.",
      },
    ],
    steps: [
      { number: "01", title: "Organize", copy: "Turn customer history into useful groups." },
      { number: "02", title: "Reach out", copy: "Send timely, focused messages." },
      { number: "03", title: "Book", copy: "Move interested customers into estimates." },
    ],
    details: ["Past-customer segmentation", "Seasonal campaigns", "PHC and pruning reminders", "Review requests", "Referral outreach"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
