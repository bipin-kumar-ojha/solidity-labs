"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Coins, Code2, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const serviceGroups = [
  {
    icon: Bot,
    label: "AI Development",
    summary: "Production AI agents, chatbots, analytics tools, and AI-native SaaS features.",
    href: "/services/ai-development/ai-agent-development/",
    items: ["AI Agent Development", "AI Chatbot Development", "ChatGPT Integration"],
    price: "From $800",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Coins,
    label: "Blockchain & Web3",
    summary: "Smart contracts, tokens, DeFi platforms, and Web3 applications built with audit-ready discipline.",
    href: "/services/blockchain-development/smart-contract-development/",
    items: ["Smart Contracts", "Token Creation", "DeFi Platform Development"],
    price: "From $1,500",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Workflow,
    label: "Automation & SaaS",
    summary: "Workflow automation, SaaS MVPs, and API integrations that remove operational drag.",
    href: "/services/automation-development/n8n-workflow-automation/",
    items: ["n8n Automation", "SaaS MVP Development", "API Integrations"],
    price: "From $800",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Code2,
    label: "Web & App Engineering",
    summary: "Fast, maintainable websites, dashboards, portals, and app experiences for growth teams.",
    href: "/services/web-development/custom-web-development/",
    items: ["Next.js Development", "Admin Dashboards", "API Integrations"],
    price: "From $800",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-[#F7FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-cyan-700">Our services</p>
            <h2 className="max-w-3xl text-[34px] font-bold leading-tight text-slate-950 md:text-[46px]">
              Digital product development with clear scope and enterprise-level execution.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Strategy, design, engineering, integrations, and launch support for companies building serious software.
            </p>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-500 hover:text-cyan-700"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-colors hover:border-cyan-300"
              >
                <div className="relative h-36">
                  <Image
                    src={group.image}
                    alt={`${group.label} service preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>

                <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {group.price}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-950">{group.label}</h3>
                <p className="mt-3 min-h-[78px] text-sm leading-6 text-slate-600">{group.summary}</p>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <div className="grid gap-2">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={group.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-600"
                >
                  Explore service
                  <ArrowRight className="h-4 w-4" />
                </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
