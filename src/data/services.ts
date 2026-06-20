// src/data/services.ts

export interface CoreService {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  phase: "A" | "B" | "C" | "D";
  icon: string;
  techStack?: string[];
  keyFeatures?: string[];
  startingPrice?: string;
  timeline?: string;
}

export interface ServiceHub {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  primaryKeyword: string;
  phase: "A" | "B" | "C" | "D";
  icon: string;
  type: "primary" | "secondary";
  coreServices: CoreService[];
}

// ── HUB 1: AI DEVELOPMENT ─────────────────────────────────────────────────────
const aiDevelopment: ServiceHub = {
  slug: "ai-development",
  title: "AI Development Services",
  tagline: "Custom AI agents, chatbots, and workflow automation built for your business.",
  description:
    "We design and build production-ready AI systems — from intelligent chatbots and autonomous agents to full workflow automation pipelines. Whether you need a ChatGPT integration or a custom LLM-powered product, our team delivers it end to end.",
  primaryKeyword: "AI Development Services India",
  phase: "A",
  icon: "🤖",
  type: "primary",
  coreServices: [
    {
      slug: "ai-agent-development",
      title: "AI Agent Development",
      tagline: "Autonomous AI agents that act, decide, and execute — without manual input.",
      description:
        "We build multi-step AI agents using LangChain, AutoGen, and custom architectures. From lead qualification bots to autonomous research agents, we deliver agents that work 24/7 inside your existing systems.",
      phase: "A",
      icon: "🧠",
      techStack: ["LangChain", "OpenAI", "Python", "FastAPI"],
      keyFeatures: [
        "Multi-step reasoning",
        "Tool use & API calling",
        "Memory & context management",
        "Human-in-the-loop flows",
      ],
      startingPrice: "$2,000",
      timeline: "3–6 weeks",
    },
    {
      slug: "ai-chatbot-development",
      title: "AI Chatbot Development",
      tagline: "Intelligent chatbots for support, sales, and lead capture.",
      description:
        "Custom AI chatbots trained on your data and deployed on your website, WhatsApp, or app. We build beyond template bots — our chatbots understand context, escalate to humans, and integrate with your CRM.",
      phase: "A",
      icon: "💬",
      techStack: ["OpenAI GPT-4", "Pinecone", "Crisp", "HubSpot"],
      keyFeatures: [
        "Trained on your content",
        "WhatsApp + web deploy",
        "CRM integration",
        "Handoff to human agent",
      ],
      startingPrice: "$1,500",
      timeline: "2–4 weeks",
    },
    {
      slug: "ai-workflow-automation",
      title: "AI Workflow Automation",
      tagline: "Replace repetitive manual work with intelligent automated pipelines.",
      description:
        "We design AI-powered automation workflows using n8n, Make.com, and custom Python pipelines. From document processing to automated reporting, we eliminate the busywork so your team focuses on high-value work.",
      phase: "A",
      icon: "⚙️",
      techStack: ["n8n", "Make.com", "Python", "OpenAI"],
      keyFeatures: [
        "Document parsing & extraction",
        "Multi-system data sync",
        "AI-triggered decisions",
        "Email & Slack notifications",
      ],
      startingPrice: "$1,000",
      timeline: "1–3 weeks",
    },
    {
      slug: "chatgpt-integration",
      title: "ChatGPT Integration Services",
      tagline: "Embed ChatGPT intelligence directly into your existing product or workflow.",
      description:
        "We integrate OpenAI's GPT models into your website, app, or internal tools via API. Custom prompting, fine-tuning guidance, token optimisation, and secure API key management included.",
      phase: "A",
      icon: "🔌",
      techStack: ["OpenAI API", "Node.js", "Next.js", "Python"],
      keyFeatures: [
        "Custom system prompts",
        "Streaming responses",
        "Context window management",
        "Rate limit handling",
      ],
      startingPrice: "$800",
      timeline: "1–2 weeks",
    },
    {
      slug: "ai-customer-support-bot",
      title: "AI Customer Support Bot",
      tagline: "24/7 AI support that resolves tickets, not just logs them.",
      description:
        "An AI support bot trained on your knowledge base, FAQs, and product docs. Resolves common queries instantly, escalates complex issues, and logs everything to your helpdesk automatically.",
      phase: "B",
      icon: "🎧",
      techStack: ["RAG", "Pinecone", "Zendesk API", "OpenAI"],
      startingPrice: "$2,500",
      timeline: "3–5 weeks",
    },
    {
      slug: "ai-voice-assistant-development",
      title: "AI Voice Assistant Development",
      tagline: "Custom voice agents for phone support, IVR, and hands-free automation.",
      description:
        "We build voice AI systems using Whisper, ElevenLabs, and Twilio. From phone support agents to voice-controlled internal tools, we deliver production-ready voice interfaces.",
      phase: "B",
      icon: "🎙️",
      techStack: ["Whisper", "ElevenLabs", "Twilio", "Python"],
      startingPrice: "$3,000",
      timeline: "4–6 weeks",
    },
    {
      slug: "ai-data-analysis-tools",
      title: "AI Data Analysis Tools",
      tagline: "Ask questions of your data in plain English — get instant insights.",
      description:
        "We build natural language interfaces for your databases and spreadsheets. Upload a CSV, connect a database, and ask questions — the AI returns answers, charts, and summaries without SQL knowledge.",
      phase: "B",
      icon: "📊",
      techStack: ["LangChain", "Pandas", "OpenAI", "Streamlit"],
      startingPrice: "$2,000",
      timeline: "3–5 weeks",
    },
    {
      slug: "ai-recommendation-systems",
      title: "AI Recommendation System",
      tagline: "Personalised recommendations that increase engagement and revenue.",
      description:
        "We build recommendation engines for ecommerce, content platforms, and SaaS products. Collaborative filtering, content-based, and hybrid models — all tuned to your specific data and goals.",
      phase: "B",
      icon: "🎯",
      techStack: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL"],
      startingPrice: "$3,000",
      timeline: "4–8 weeks",
    },
    {
      slug: "custom-ai-software-development",
      title: "Custom AI Software Development",
      tagline: "Bespoke AI-powered applications built to your exact specification.",
      description:
        "From ideation to deployment, we build custom AI software products. Whether it's an internal productivity tool or a client-facing AI product, we own the full stack — architecture, development, and launch.",
      phase: "B",
      icon: "🏗️",
      techStack: ["Python", "Next.js", "OpenAI", "AWS"],
      startingPrice: "$5,000",
      timeline: "6–12 weeks",
    },
    {
      slug: "ai-powered-saas-development",
      title: "AI-Powered SaaS Development",
      tagline: "Build a SaaS product with AI at its core, not bolted on.",
      description:
        "We design and build AI-first SaaS products from scratch. Multi-tenant architecture, subscription billing, usage-based pricing, and AI features that are deeply integrated into the product experience.",
      phase: "B",
      icon: "🚀",
      techStack: ["Next.js", "Supabase", "OpenAI", "Stripe"],
      startingPrice: "$8,000",
      timeline: "8–16 weeks",
    },
    {
      slug: "ai-business-intelligence-dashboard",
      title: "AI Business Intelligence Dashboard",
      tagline: "Live dashboards that explain your data, not just display it.",
      description:
        "We build BI dashboards powered by AI narrative engines. Not just charts — your dashboard tells you what changed, why it matters, and what to do next, in plain English.",
      phase: "C",
      icon: "📈",
      techStack: ["Next.js", "Recharts", "OpenAI", "PostgreSQL"],
      startingPrice: "$4,000",
      timeline: "5–8 weeks",
    },
  ],
};

// ── HUB 2: BLOCKCHAIN DEVELOPMENT ─────────────────────────────────────────────
const blockchainDevelopment: ServiceHub = {
  slug: "blockchain-development",
  title: "Blockchain Development Services",
  tagline: "Smart contracts, DeFi platforms, and Web3 applications built by Solidity experts.",
  description:
    "Solidity Labs is named after the Solidity programming language — the language of Ethereum smart contracts. Blockchain is not a sideline for us; it is our identity. We build smart contracts, DeFi protocols, NFT platforms, and Web3 applications with the technical depth that serious projects require.",
  primaryKeyword: "Blockchain Development Services",
  phase: "A",
  icon: "⛓️",
  type: "primary",
  coreServices: [
    {
      slug: "smart-contract-development",
      title: "Smart Contract Development",
      tagline: "Auditable, gas-optimised smart contracts on Ethereum, BSC, and Solana.",
      description:
        "We write and deploy production-grade smart contracts in Solidity and Rust. Every contract is gas-optimised, internally reviewed, and delivered with full documentation and test coverage.",
      phase: "A",
      icon: "📜",
      techStack: ["Solidity", "Hardhat", "OpenZeppelin", "Ethers.js"],
      startingPrice: "$2,000",
      timeline: "2–4 weeks",
    },
    {
      slug: "token-creation",
      title: "Crypto Token Creation Services",
      tagline: "ERC20, BEP20, and SPL tokens — deployed and verified on-chain.",
      description:
        "We create and deploy custom cryptocurrency tokens with full tokenomics implementation — mint/burn functions, vesting schedules, presale contracts, and exchange listing preparation.",
      phase: "A",
      icon: "🪙",
      techStack: ["Solidity", "Hardhat", "BSC", "Ethereum"],
      startingPrice: "$1,500",
      timeline: "1–2 weeks",
    },
    {
      slug: "defi-platform-development",
      title: "DeFi Platform Development",
      tagline: "Decentralised finance protocols: DEXs, lending, staking, and yield farming.",
      description:
        "We architect and build DeFi platforms from the ground up — DEXs, lending protocols, staking pools, and yield farming systems. Every protocol is designed for security, gas efficiency, and user experience.",
      phase: "A",
      icon: "🏦",
      techStack: ["Solidity", "Uniswap V3", "Hardhat", "The Graph"],
      startingPrice: "$8,000",
      timeline: "8–16 weeks",
    },
  ],
};

// ── HUB 3: AUTOMATION DEVELOPMENT ─────────────────────────────────────────────
const automationDevelopment: ServiceHub = {
  slug: "automation-development",
  title: "Automation Development Services",
  tagline: "n8n, Make.com, and Zapier automation that eliminates manual work permanently.",
  description:
    "We design and implement business automation systems using no-code and custom-code tools. From simple Zapier workflows to complex multi-system n8n pipelines, we automate the repetitive so your team can do the valuable.",
  primaryKeyword: "Business Automation Services",
  phase: "A",
  icon: "🔄",
  type: "primary",
  coreServices: [
    {
      slug: "n8n-workflow-automation",
      title: "n8n Workflow Automation",
      tagline: "Self-hosted, enterprise-grade automation with n8n — no per-task fees.",
      description:
        "We design, build, and deploy complex automation workflows using n8n. From CRM syncing to AI-triggered multi-step pipelines, we deliver self-hosted automation that scales without Zapier's per-task pricing.",
      phase: "A",
      icon: "🔗",
      techStack: ["n8n", "Docker", "REST APIs", "Webhooks"],
      startingPrice: "$800",
      timeline: "1–2 weeks",
    },
  ],
};

// ── HUB 4: SAAS DEVELOPMENT ───────────────────────────────────────────────────
const saasDevelopment: ServiceHub = {
  slug: "saas-development",
  title: "SaaS Development Services",
  tagline: "From MVP to full-scale SaaS platform — built to retain users and generate MRR.",
  description:
    "We build SaaS products end to end — from initial MVP to full-featured multi-tenant platforms. Subscription billing, onboarding flows, usage dashboards, and AI features — we deliver products that users pay for and keep paying for.",
  primaryKeyword: "SaaS Development Services",
  phase: "A",
  icon: "☁️",
  type: "primary",
  coreServices: [
    {
      slug: "saas-mvp-development",
      title: "SaaS MVP Development",
      tagline: "Launch a working SaaS MVP in 6–10 weeks — ready for real users.",
      description:
        "We build SaaS MVPs fast without cutting corners on architecture. Authentication, billing, core feature set, and a design that won't embarrass you — delivered in weeks, not months.",
      phase: "A",
      icon: "🛸",
      techStack: ["Next.js", "Supabase", "Stripe", "Vercel"],
      startingPrice: "$5,000",
      timeline: "6–10 weeks",
    },
    {
      slug: "ai-powered-saas-development",
      title: "AI-Powered SaaS Development",
      tagline: "Build a SaaS with AI at its core — not bolted on as an afterthought.",
      description:
        "AI-first SaaS products built from the ground up. We architect the AI layer into the product from day one — not as a feature, but as the product's primary value driver.",
      phase: "A",
      icon: "🧬",
      techStack: ["Next.js", "OpenAI", "Supabase", "Stripe"],
      startingPrice: "$8,000",
      timeline: "8–14 weeks",
    },
  ],
};

// ── HUB 5: NO-CODE DEVELOPMENT ────────────────────────────────────────────────
const noCodeDevelopment: ServiceHub = {
  slug: "no-code-development",
  title: "No-Code / Low-Code Development",
  tagline: "Full-featured apps and platforms built without traditional coding overhead.",
  description:
    "We build production-ready applications using Bubble, Webflow, FlutterFlow, and Retool. No-code reduces cost and delivery time without sacrificing functionality — ideal for MVPs, internal tools, and rapid prototypes.",
  primaryKeyword: "No-Code Development Services",
  phase: "A",
  icon: "⚡",
  type: "primary",
  coreServices: [
    {
      slug: "bubble-app-development",
      title: "Bubble App Development",
      tagline: "Full-stack web apps on Bubble — fast, functional, and scalable.",
      description:
        "We build complex web applications on Bubble.io — marketplaces, SaaS tools, client portals, and internal systems. Our Bubble apps are architected for performance with proper database design and API integrations.",
      phase: "B",
      icon: "🫧",
      techStack: ["Bubble.io", "REST APIs", "Stripe", "Airtable"],
      startingPrice: "$2,000",
      timeline: "3–6 weeks",
    },
  ],
};

// ── HUB 6: WEB DEVELOPMENT (secondary) ───────────────────────────────────────
const webDevelopment: ServiceHub = {
  slug: "web-development",
  title: "Web Development Services",
  tagline: "Professional websites and web apps built to perform and convert.",
  description:
    "Custom web development including WordPress, Shopify, and bespoke web applications. Built for speed, SEO, and conversion.",
  primaryKeyword: "Web Development Services India",
  phase: "B",
  icon: "🌐",
  type: "secondary",
  coreServices: [
    {
      slug: "wordpress-development",
      title: "WordPress Development Services",
      tagline: "Custom WordPress sites with performance, security, and SEO built in.",
      description:
        "Custom WordPress development — from business sites to WooCommerce stores. Performance-optimised, mobile-first, and SEO-ready from day one.",
      phase: "B",
      icon: "📝",
    },
    {
      slug: "shopify-development",
      title: "Shopify Development Services",
      tagline: "Custom Shopify stores built to convert browsers into buyers.",
      description:
        "Shopify theme customisation, app integration, and bespoke feature development. From simple stores to complex multi-currency operations.",
      phase: "B",
      icon: "🛍️",
    },
    {
      slug: "landing-page-development",
      title: "Landing Page Development",
      tagline: "High-converting landing pages built for campaigns and product launches.",
      description:
        "Conversion-focused landing pages built in Next.js or Webflow. A/B testing ready, fast-loading, and optimised for your campaign goal.",
      phase: "B",
      icon: "📄",
    },
    {
      slug: "custom-web-application-development",
      title: "Custom Web Application Development",
      tagline: "Bespoke web applications built to your exact workflow requirements.",
      description:
        "Full-stack custom web application development. From internal business tools to customer-facing platforms — built on modern, maintainable architecture.",
      phase: "B",
      icon: "💻",
    },
  ],
};

// ── MASTER EXPORT ─────────────────────────────────────────────────────────────
export const serviceHubs: ServiceHub[] = [
  aiDevelopment,
  blockchainDevelopment,
  automationDevelopment,
  saasDevelopment,
  noCodeDevelopment,
  webDevelopment,
];

export function getHubBySlug(slug: string): ServiceHub | undefined {
  return serviceHubs.find((h) => h.slug === slug);
}

export function getCoreServiceBySlug(
  hubSlug: string,
  serviceSlug: string
): CoreService | undefined {
  const hub = getHubBySlug(hubSlug);
  return hub?.coreServices.find((s) => s.slug === serviceSlug);
}

export function getPhaseAHubs(): ServiceHub[] {
  return serviceHubs.filter((h) => h.phase === "A");
}