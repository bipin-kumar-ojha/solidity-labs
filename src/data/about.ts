// src/data/about.ts

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyPoint {
  title: string;
  description: string;
  icon: string;
}

// ── HOW WE WORK — 5 step process (from document) ─────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We start with a free 30-minute call to understand your project, goals, and timeline. No sales pitch — just honest questions and straight answers.",
    icon: "📞",
  },
  {
    step: 2,
    title: "Requirement Gathering",
    description:
      "After the call, we go deep. We document every feature, every integration, every edge case. You review and approve before any work begins.",
    icon: "📋",
  },
  {
    step: 3,
    title: "Proposal + Milestone Agreement",
    description:
      "You receive a clear proposal: scope, timeline, tech stack, and milestone-based payment schedule. No large upfront commitment. You pay as we deliver.",
    icon: "📝",
  },
  {
    step: 4,
    title: "Development with Weekly Updates",
    description:
      "We build in sprints with weekly Loom video walkthroughs showing exactly what was built. Direct WhatsApp access to your project lead at all times.",
    icon: "⚙️",
  },
  {
    step: 5,
    title: "QC + Delivery + Post-Launch Support",
    description:
      "Every deliverable goes through quality checks before handoff. You receive full code ownership, documentation, and 30 days of post-launch support.",
    icon: "🚀",
  },
];

// ── WHY CHOOSE SOLIDITY LABS ──────────────────────────────────────────────────
export const whyPoints: WhyPoint[] = [
  {
    title: "Specialists, Not Generalists",
    description:
      "We focus on AI, Blockchain, Automation, and SaaS. These are not services we added to a list — they are the only things we do, which means we do them better.",
    icon: "🎯",
  },
  {
    title: "Milestone-Based Payments",
    description:
      "You never pay for work that hasn't been done. Every project is broken into clear milestones. You approve and pay per milestone — never upfront in full.",
    icon: "💰",
  },
  {
    title: "You Own Everything",
    description:
      "All code, all assets, all accounts — 100% yours from day one. No vendor lock-in. No monthly fees to access your own product. Full transfer on final delivery.",
    icon: "🔑",
  },
  {
    title: "Weekly Video Updates",
    description:
      "Every week you receive a Loom video walkthrough of exactly what was built. No chasing for updates. No guessing where the project stands.",
    icon: "🎥",
  },
  {
    title: "Direct WhatsApp Access",
    description:
      "You message your project lead directly on WhatsApp. No ticket queues. No 48-hour response windows. Real communication with the people building your product.",
    icon: "💬",
  },
  {
    title: "50% Advance Protection",
    description:
      "We never ask for more than 50% upfront — ever. The remaining balance is split across milestones so your money is always tied to delivered work.",
    icon: "🛡️",
  },
];