"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

const trustItems = [
  "Trusted by founders in 15+ countries",
  "50% advance · 50% on delivery",
  "2-hour response guarantee",
  "NDA signed on every project",
  "Clutch verified agency",
];

const socialItems = ["in", "X", "W", "T", "G"];
const badges = ["Clutch Verified", "GoodFirms Listed", "ISO Ready"];

const footerColumns = [
  {
    title: "AI Services",
    links: [
      { label: "AI Agent Development", href: "/services/ai-development/ai-agent-development/", highlight: true },
      { label: "AI Chatbots", href: "/services/ai-development/ai-chatbot-development/" },
      { label: "Workflow Automation", href: "/services/ai-development/ai-workflow-automation/" },
      { label: "ChatGPT Integration", href: "/services/ai-development/chatgpt-integration/" },
      { label: "AI SaaS", href: "/services/saas-development/" },
      { label: "All AI services", href: "/services/", highlight: true, withArrow: true },
    ],
  },
  {
    title: "Blockchain",
    links: [
      { label: "RWA Tokenization", href: "/services/blockchain-development/rwa-tokenization/", highlight: true },
      { label: "Smart Contracts", href: "/services/blockchain-development/smart-contract-development/" },
      { label: "DeFi Platforms", href: "/services/blockchain-development/defi-platform-development/" },
      { label: "Token Creation", href: "/services/blockchain-development/token-creation/" },
      { label: "Web3 Development", href: "/services/blockchain-development/" },
      { label: "All blockchain", href: "/services/blockchain-development/", highlight: true, withArrow: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Portfolio", href: "/portfolio/" },
      { label: "Case Studies", href: "/portfolio/" },
      { label: "Blog", href: "/blog/" },
      { label: "Careers", href: "/about/" },
      { label: "FAQs", href: "/contact/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="border-y border-white/10 bg-white/[0.03] px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 text-xs text-white/62">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[1.25fr_2fr_1.15fr]">
        <div>
          <Link href="/" className="mb-5 inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-base font-bold text-slate-950">
              S
            </div>
            <div className="text-base font-semibold">
              Solidity<span className="text-cyan-300">Labs</span>
              <span className="ml-1 align-super text-[10px] text-cyan-400">.ai</span>
            </div>
          </Link>

          <p className="max-w-sm text-sm leading-6 text-white/60">
            We build AI agents, smart contracts, and automation systems for startups and businesses that mean business.
          </p>

          <div className="mt-6 flex gap-2">
            {socialItems.map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-xs font-semibold text-white/70 transition-colors hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/60"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-sm font-semibold text-white">{column.title}</p>
              <div className="flex flex-col gap-2.5">
                {column.links.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group inline-flex items-center gap-1.5 text-sm transition-colors ${
                      item.highlight
                        ? "font-semibold text-cyan-300 hover:text-cyan-100"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {item.withArrow && (
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/10">
          <p className="text-sm font-semibold text-white">Weekly insights on AI & Web3</p>
          <p className="mt-2 text-sm leading-6 text-white/55">
            Short product notes, build ideas, and useful technology updates.
          </p>

          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="min-w-0 flex-1 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-cyan-300/70"
            />
            <button
              type="button"
              className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              Subscribe
            </button>
          </div>

          <p className="mt-2 text-xs text-white/40">No spam. Unsubscribe anytime.</p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="mb-3 text-sm font-semibold text-white">Contact</p>
            <div className="space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                hello@soliditylabs.ai
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-cyan-300" />
                WhatsApp chat
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Mon-Sat | Global delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Solidity Labs. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {["Privacy Policy", "Terms", "Cookies", "Sitemap"].map((item) => (
              <Link key={item} href="#" className="transition-colors hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
