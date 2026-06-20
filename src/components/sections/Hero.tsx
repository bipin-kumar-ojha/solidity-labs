"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const serviceAreas = [
  { title: "AI Development", detail: "Agents, chatbots, analytics", href: "/services/ai-development/ai-agent-development/" },
  { title: "Blockchain", detail: "Contracts, tokens, DeFi", href: "/services/blockchain-development/smart-contract-development/" },
  { title: "Automation", detail: "n8n, workflows, APIs", href: "/services/automation-development/n8n-workflow-automation/" },
  { title: "SaaS Platforms", detail: "MVPs, billing, dashboards", href: "/services/saas-development/saas-mvp-development/" },
];

const proofItems = ["50+ projects delivered", "15+ countries served", "2-hour response guarantee"];
const heroImage =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=85";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-slate-950 px-6 pb-12 pt-32 text-white">
      <Image
        src={heroImage}
        alt="Technology consultants planning a software product in a modern office"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/72" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.95),rgba(2,6,23,0.72),rgba(2,6,23,0.35))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-300" />
            <span className="text-xs font-semibold uppercase text-cyan-50">
              AI Development | Blockchain | SaaS | Automation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[42px] font-bold leading-[1.06] md:text-[66px]"
          >
            Software development company for modern digital businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg"
          >
            We design and build AI agents, smart contracts, SaaS platforms, and business automation systems with fixed scope, clear milestones, and accountable delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/contact/get-a-quote/"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio/"
              className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See our work
            </Link>
            <a
              href="https://wa.me/your-number"
              className="inline-flex items-center gap-2 rounded-md border border-green-400/30 px-5 py-3 text-sm font-semibold text-green-300 transition-colors hover:bg-green-400/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
            {proofItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-14 grid gap-4 border-t border-white/15 pt-8 md:grid-cols-4"
        >
          {serviceAreas.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur transition-colors hover:border-cyan-300/60 hover:bg-white/15"
            >
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 min-h-10 text-sm leading-5 text-white/62">{item.detail}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200">
                Explore
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
