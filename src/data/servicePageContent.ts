import { CoreService, ServiceHub, serviceHubs } from "@/data/services";

export type ServiceFeature = {
  title: string;
  description: string;
};

export type PricingPackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  ctaLabel: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TechCategory = {
  title: string;
  items: string[];
  highlightedItems?: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type RelatedService = {
  title: string;
  category: string;
  price: string;
  link: string;
};

export type ServicePageContent = CoreService & {
  category: string;
  categoryName: string;
  image: string;
  eyebrow: string;
  h1AccentWord: string;
  techTags: string[];
  features: ServiceFeature[];
  overview: {
    heading: string;
    body: string[];
    problems: string[];
    solutions: string[];
  };
  pricing: PricingPackage[];
  process: ProcessStep[];
  techStackSections: TechCategory[];
  faqs: FAQItem[];
  relatedServices: RelatedService[];
  finalCta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  startingPrice: string;
  deliveryTimeline: string;
  supportDays: string;
};

const defaultSupportDays = "15 days post-launch";

const serviceImages: Record<string, string> = {
  "ai-development":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  "blockchain-development":
    "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1400&q=80",
  "automation-development":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  "saas-development":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  "no-code-development":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  "web-development":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
};

const aiAgentOverride = {
  overview: {
    heading: "What is AI Agent Development?",
    body: [
      "An AI agent is software that uses large language models to perceive its environment, make decisions, and take actions autonomously without human intervention for each step.",
      "Unlike a basic chatbot that only answers questions, an AI agent can execute multi-step workflows: pull data from your CRM, send emails, update records, qualify leads, and book meetings automatically.",
    ],
    problems: [
      "Your team wastes 3+ hours daily on repetitive tasks",
      "Leads are not followed up fast enough, which loses sales",
      "Manual data entry creates errors and delays",
      "Customer queries wait hours for a response",
    ],
    solutions: [
      "Automates multi-step workflows 24/7 without errors",
      "Responds to leads within seconds, not hours",
      "Updates CRM, books meetings, and sends emails automatically",
      "ROI becomes visible within 2-4 weeks of deployment",
    ],
  },
  features: [
    {
      title: "Multi-step workflow execution",
      description: "Agent handles complex multi-step tasks end to end, not just single actions.",
    },
    {
      title: "CRM and tool integration",
      description: "Connects to HubSpot, Salesforce, Notion, Google Calendar, and 200+ tools.",
    },
    {
      title: "24/7 autonomous operation",
      description: "Runs continuously without human supervision and alerts you only when action is needed.",
    },
    {
      title: "Human-in-the-loop escalation",
      description: "Automatically escalates to a human when confidence is below threshold.",
    },
    {
      title: "Analytics dashboard",
      description: "Real-time dashboard showing tasks completed, time saved, and success rates.",
    },
    {
      title: "15-day post-launch support",
      description: "Monitoring, bug fixes, and adjustments included for 15 days after delivery.",
    },
  ],
  pricing: [
    {
      name: "Starter Agent",
      price: "$5,000",
      description: "Delivery: 2-3 weeks",
      features: [
        "Single workflow automation",
        "2 tool integrations",
        "Basic analytics dashboard",
        "15 days post-launch support",
      ],
      ctaLabel: "Get a quote",
    },
    {
      name: "Professional Agent",
      price: "$12,000",
      description: "Delivery: 3-5 weeks",
      features: [
        "Multi-step workflow up to 5 steps",
        "Up to 6 tool integrations",
        "Full analytics and reporting",
        "Human-in-the-loop escalation",
        "30 days post-launch support",
      ],
      highlight: true,
      badge: "Most popular",
      ctaLabel: "Start this package",
    },
    {
      name: "Enterprise Agent",
      price: "$25,000+",
      description: "Delivery: 5-8 weeks",
      features: [
        "Unlimited workflow complexity",
        "Unlimited tool integrations",
        "Multi-agent orchestration",
        "Custom model fine-tuning",
        "60 days support plus SLA",
      ],
      ctaLabel: "Contact for pricing",
    },
  ],
  techStackSections: [
    {
      title: "AI and LLMs",
      items: ["OpenAI GPT-4o", "Claude 3.5", "Gemini Pro"],
      highlightedItems: ["OpenAI GPT-4o", "Claude 3.5"],
    },
    {
      title: "Orchestration",
      items: ["LangChain", "LangGraph", "AutoGen"],
      highlightedItems: ["LangChain", "LangGraph"],
    },
    {
      title: "Automation tools",
      items: ["n8n", "Make.com", "Zapier"],
      highlightedItems: ["n8n"],
    },
    {
      title: "Backend and APIs",
      items: ["Python", "FastAPI", "REST APIs"],
      highlightedItems: [],
    },
  ],
};

function getCategoryNoun(hub: ServiceHub) {
  return hub.title.replace(/\s*Services\s*$/i, "").toLowerCase();
}

function buildDefaultOverview(service: CoreService, hub: ServiceHub) {
  const categoryNoun = getCategoryNoun(hub);

  return {
    heading: `What is ${service.title}?`,
    body: [
      `${service.title} helps businesses turn ${categoryNoun} requirements into production-ready systems with clear scope, clean implementation, and dependable delivery.`,
      service.description,
    ],
    problems: [
      "Manual processes slow your team down and create avoidable mistakes",
      "Off-the-shelf tools do not match your exact workflow or customer journey",
      "Projects stall because requirements, ownership, and timelines are unclear",
      "Your team needs a reliable implementation partner, not another unfinished experiment",
    ],
    solutions: [
      `A custom ${service.title.toLowerCase()} build aligned with your business goals`,
      "Fixed scope, fixed milestones, and transparent delivery communication",
      "Production-ready implementation with documentation and handover",
      "Post-launch support so your team can adopt the solution with confidence",
    ],
  };
}

function buildDefaultFeatures(service: CoreService) {
  const serviceFeatures = service.keyFeatures || [];
  const baseFeatures: ServiceFeature[] = serviceFeatures.map((feature) => ({
    title: feature,
    description: `${feature} is planned, implemented, tested, and documented as part of your ${service.title.toLowerCase()} engagement.`,
  }));

  return [
    ...baseFeatures,
    {
      title: "Discovery and workflow mapping",
      description: "We clarify the desired outcome, users, integrations, edge cases, and launch requirements before development starts.",
    },
    {
      title: "Production-ready implementation",
      description: "Your solution is built with maintainable architecture, secure configuration, and clean handover documentation.",
    },
    {
      title: "15-day post-launch support",
      description: "Monitoring, bug fixes, and practical adjustments are included after delivery.",
    },
  ].slice(0, 6);
}

function buildDefaultPricing(service: CoreService) {
  const startingPrice = service.startingPrice || "$1,000";
  const timeline = service.timeline || "2-4 weeks";

  return [
    {
      name: "Starter",
      price: startingPrice,
      description: `Delivery: ${timeline}`,
      features: [
        "Single core workflow or feature",
        "Requirements mapping",
        "Core implementation",
        "15 days post-launch support",
      ],
      ctaLabel: "Get a quote",
    },
    {
      name: "Professional",
      price: "Custom quote",
      description: "Best for multi-step builds",
      features: [
        "Multiple workflows or integrations",
        "Full implementation plan",
        "Testing and refinement",
        "30 days post-launch support",
      ],
      highlight: true,
      badge: "Most popular",
      ctaLabel: "Start this package",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For complex or high-scale requirements",
      features: [
        "Advanced architecture",
        "Complex integrations",
        "Priority delivery planning",
        "Extended support options",
      ],
      ctaLabel: "Contact for pricing",
    },
  ];
}

function buildDefaultProcess(service: CoreService) {
  return [
    {
      step: "1",
      title: "Discovery and workflow mapping",
      description: `We document your current workflow, target outcome, users, integrations, and success criteria for ${service.title.toLowerCase()}.`,
    },
    {
      step: "2",
      title: "Proposal and fixed price agreement",
      description: "Fixed scope, fixed price, and timeline are confirmed in writing. 50% advance starts the project.",
    },
    {
      step: "3",
      title: "Development and integration",
      description: "We build the solution, connect required tools, and share weekly progress updates.",
    },
    {
      step: "4",
      title: "Testing and refinement",
      description: "You test the solution in a staging environment. We refine based on feedback and edge cases.",
    },
    {
      step: "5",
      title: "Live deployment and handover",
      description: "The solution goes live with documentation, handover, and post-launch support included.",
    },
  ];
}

function buildDefaultTechStack(service: CoreService, hub: ServiceHub) {
  const items = service.techStack?.length ? service.techStack : ["Next.js", "APIs", "Cloud deployment"];

  return [
    {
      title: hub.title.replace(/\s*Services\s*$/i, ""),
      items,
      highlightedItems: items.slice(0, 2),
    },
    {
      title: "Backend and APIs",
      items: ["REST APIs", "Webhooks", "Database design"],
      highlightedItems: ["REST APIs"],
    },
    {
      title: "Delivery",
      items: ["Git", "Staging", "Documentation"],
      highlightedItems: ["Documentation"],
    },
    {
      title: "Support",
      items: ["Monitoring", "Bug fixes", "Handover"],
      highlightedItems: ["Monitoring"],
    },
  ];
}

function buildDefaultFaqs(service: CoreService) {
  const timeline = service.timeline || "2-4 weeks";

  return [
    {
      question: `How long does ${service.title.toLowerCase()} take?`,
      answer: `Most ${service.title.toLowerCase()} projects take ${timeline}, depending on scope, integrations, and review cycles. Timeline starts after the 50% advance and finalized requirements.`,
    },
    {
      question: "How is payment structured?",
      answer: "Payment is structured as 50% advance before development begins and 50% on final delivery and approval.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes. Every service page includes post-launch support for bug fixes, monitoring, and small adjustments after delivery.",
    },
    {
      question: "Can this connect to our existing tools?",
      answer: "Yes. We integrate with CRMs, internal tools, databases, APIs, automation platforms, and third-party services wherever technically possible.",
    },
    {
      question: "Will we receive documentation?",
      answer: "Yes. We provide handover notes, setup details, and practical documentation so your team understands how the solution works.",
    },
  ];
}

function buildRelatedServices(currentHub: ServiceHub, currentService: CoreService): RelatedService[] {
  const sameHub = currentHub.coreServices
    .filter((service) => service.slug !== currentService.slug)
    .slice(0, 2)
    .map((service) => ({
      title: service.title,
      category: currentHub.title.replace(/\s*Services\s*$/i, ""),
      price: service.startingPrice || "Custom",
      link: `/services/${currentHub.slug}/${service.slug}/`,
    }));

  const fallback = serviceHubs
    .flatMap((hub) =>
      hub.coreServices.map((service) => ({
        title: service.title,
        category: hub.title.replace(/\s*Services\s*$/i, ""),
        price: service.startingPrice || "Custom",
        link: `/services/${hub.slug}/${service.slug}/`,
      }))
    )
    .filter((service) => service.link !== `/services/${currentHub.slug}/${currentService.slug}/`);

  return [...sameHub, ...fallback].slice(0, 3);
}

function getOverride(service: CoreService) {
  if (service.slug === "ai-agent-development") {
    return aiAgentOverride;
  }

  return {};
}

export function buildServicePageContent(hub: ServiceHub, service: CoreService): ServicePageContent {
  const override = getOverride(service);
  const startingPrice = service.slug === "ai-agent-development" ? "$5,000" : service.startingPrice || "$1,000";
  const deliveryTimeline = service.slug === "ai-agent-development" ? "2-6 weeks" : service.timeline || "2-4 weeks";

  const overview = "overview" in override ? override.overview : buildDefaultOverview(service, hub);
  const features = "features" in override ? override.features : buildDefaultFeatures(service);
  const pricing = "pricing" in override ? override.pricing : buildDefaultPricing(service);
  const techStackSections =
    "techStackSections" in override ? override.techStackSections : buildDefaultTechStack(service, hub);

  return {
    ...service,
    category: hub.slug,
    categoryName: hub.title,
    image:
      serviceImages[hub.slug] ||
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    eyebrow: `${hub.title.replace(/\s*Services\s*$/i, "")} - S-Tier Service`,
    h1AccentWord: "for Businesses",
    techTags: service.techStack || [],
    features,
    overview,
    pricing,
    process: buildDefaultProcess(service),
    techStackSections,
    faqs: buildDefaultFaqs(service),
    relatedServices: buildRelatedServices(hub, service),
    finalCta: {
      title: `Start with a free consultation for ${service.title}.`,
      subtitle:
        "Tell us what you want to build. We will map the fastest path and send a fixed-price proposal within 24 hours.",
      primaryCta: "Get a free quote",
      secondaryCta: "Book 30-min call",
    },
    startingPrice,
    deliveryTimeline,
    supportDays: defaultSupportDays,
  };
}

export function getAllServicePageParams() {
  return serviceHubs.flatMap((hub) =>
    hub.coreServices.map((service) => ({
      category: hub.slug,
      slug: service.slug,
    }))
  );
}
