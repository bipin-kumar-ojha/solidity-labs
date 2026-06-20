// src/data/solutions.ts

export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  phase: "A" | "B" | "C";
  icon: string;
  problems: string[];      // Pain points this solution addresses
  deliverables: string[];  // What we actually build
  servicesUsed: string[];  // Which service hubs power this solution
  idealFor: string[];      // Target client types
}

const solutions: Solution[] = [
  {
    slug: "build-a-startup-product",
    title: "Build a Startup Product",
    tagline: "Go from idea to a live, fundable product — without a full-time tech team.",
    description:
      "You have the idea, the market knowledge, and the drive. We provide the technical execution. From architecture decisions to launch day, we build your startup product end to end — on time, on budget, and built to scale.",
    phase: "A",
    icon: "🚀",
    problems: [
      "You have an idea but no technical co-founder",
      "You've had bad experiences with freelancers disappearing mid-project",
      "You need an MVP fast but can't afford a full in-house team",
      "You're not sure what tech stack to use or how to architect it",
    ],
    deliverables: [
      "Full MVP with core feature set",
      "Clean, documented codebase you own 100%",
      "Deployed and live on your domain",
      "Post-launch support and handoff",
    ],
    servicesUsed: ["AI Development", "SaaS Development", "No-Code Development"],
    idealFor: ["First-time founders", "Bootstrapped startups", "Pre-seed stage companies"],
  },
  {
    slug: "launch-a-crypto-project",
    title: "Launch a Crypto Project",
    tagline: "Token creation, smart contracts, and DeFi platforms — built by Solidity experts.",
    description:
      "Solidity Labs is named after the language of Ethereum. Blockchain is not a sideline for us — it is our identity. Whether you need a token launch, a DeFi protocol, or a full Web3 application, we bring the technical depth your project demands.",
    phase: "A",
    icon: "⛓️",
    problems: [
      "You need a smart contract but can't verify if a freelancer's code is safe",
      "Your token launch needs contracts, a presale, and a frontend — all coordinated",
      "You want to build a DeFi product but don't know which chain to use",
      "You've been quoted wildly different prices with no explanation",
    ],
    deliverables: [
      "Audited smart contracts deployed on your chosen chain",
      "Token with full tokenomics implementation",
      "Frontend dApp or presale page",
      "Full documentation and ownership transfer",
    ],
    servicesUsed: ["Blockchain Development", "Web Development"],
    idealFor: ["Crypto founders", "Web3 startups", "DeFi protocol teams"],
  },
  {
    slug: "automate-your-business",
    title: "Automate Your Business Operations",
    tagline: "Eliminate manual work with intelligent automation — built on n8n, Make, and AI.",
    description:
      "Every hour your team spends on repetitive manual tasks is an hour not spent on growth. We map your existing workflows, identify automation opportunities, and build systems that run without human intervention — permanently.",
    phase: "A",
    icon: "🔄",
    problems: [
      "Your team spends hours on data entry, copy-paste, and manual reporting",
      "You've tried Zapier but it breaks when workflows get complex",
      "You have data in 5 different tools that never sync properly",
      "You want automation but don't know where to start",
    ],
    deliverables: [
      "Fully mapped automation workflow diagram",
      "n8n or Make.com pipelines built and tested",
      "AI decision layers where applicable",
      "Documentation so your team can maintain it",
    ],
    servicesUsed: ["Automation Development", "AI Development"],
    idealFor: ["Operations managers", "SME owners", "Agencies", "E-commerce businesses"],
  },
  {
    slug: "replace-manual-work-with-ai",
    title: "Replace Manual Work With AI",
    tagline: "Custom AI tools that do the work your team shouldn't have to do manually.",
    description:
      "AI is not just for big tech companies. We build practical, affordable AI tools that replace specific manual tasks in your business — document processing, customer support, data analysis, content generation, and more.",
    phase: "A",
    icon: "🤖",
    problems: [
      "You're manually processing documents, invoices, or reports",
      "Your support team answers the same 20 questions every day",
      "You spend hours generating reports that could be automated",
      "You know AI could help but don't know where to apply it",
    ],
    deliverables: [
      "AI tool scoped to your specific use case",
      "Integrated into your existing systems",
      "Staff training and handoff documentation",
      "30-day post-launch support",
    ],
    servicesUsed: ["AI Development", "Automation Development"],
    idealFor: ["SME owners", "Operations teams", "Customer support teams", "Finance teams"],
  },
  {
    slug: "build-an-online-store",
    title: "Build an Online Store",
    tagline: "Shopify and WooCommerce stores built to sell — not just look good.",
    description:
      "A beautiful store that doesn't convert is just an expensive brochure. We build ecommerce stores with conversion in mind — fast load times, clean checkout flows, and integrations with your fulfilment and marketing tools.",
    phase: "B",
    icon: "🛍️",
    problems: [],
    deliverables: [],
    servicesUsed: ["Ecommerce Development", "Web Development"],
    idealFor: ["Product businesses", "D2C brands", "Retail businesses going online"],
  },
  {
    slug: "create-a-mobile-app",
    title: "Create a Mobile App",
    tagline: "Flutter-powered mobile apps for iOS and Android — one codebase, both platforms.",
    description:
      "We build cross-platform mobile apps using Flutter — one codebase that runs natively on both iOS and Android. Faster delivery, lower cost, and no compromise on performance or design quality.",
    phase: "B",
    icon: "📱",
    problems: [],
    deliverables: [],
    servicesUsed: ["Mobile App Development"],
    idealFor: ["Startups needing mobile presence", "Businesses with field teams"],
  },
  {
    slug: "modernise-your-business-technology",
    title: "Modernise Your Business Technology",
    tagline: "Replace legacy systems with modern, maintainable technology — without downtime.",
    description:
      "Old systems slow your business down. We audit your current tech stack, plan a migration path, and modernise your systems piece by piece — without disrupting your operations.",
    phase: "B",
    icon: "⚡",
    problems: [],
    deliverables: [],
    servicesUsed: ["Custom Software Development", "Web Development"],
    idealFor: ["Established businesses", "Companies on legacy software"],
  },
  {
    slug: "white-label-development-partner",
    title: "White-Label Development Partner",
    tagline: "Reliable development capacity for agencies — delivered under your brand.",
    description:
      "We work as your silent technical partner. You manage the client relationship, we build the product. Full NDA, white-label delivery, and agency-friendly pricing.",
    phase: "B",
    icon: "🤝",
    problems: [],
    deliverables: [],
    servicesUsed: ["All Services"],
    idealFor: ["Digital agencies", "Marketing agencies", "Consultancies"],
  },
];

export default solutions;

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getPhaseSolutions(phase: "A" | "B" | "C"): Solution[] {
  return solutions.filter((s) => s.phase === phase);
}