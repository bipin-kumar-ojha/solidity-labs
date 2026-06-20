"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    category: "AI",
    title: "AI Customer Support Agent",
    desc: "Automated support triage and response workflows that reduced manual support load by 60% in 30 days.",
    outcome: "60% support cost reduction",
    tech: ["GPT-4", "Node.js", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Blockchain",
    title: "DeFi Staking Platform",
    desc: "Secure staking product with wallet flows, contract deployment, admin controls, and frontend analytics.",
    outcome: "18-day delivery",
    tech: ["Solidity", "Ethereum", "Next.js"],
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-cyan-700">Our work</p>
            <h2 className="text-[34px] font-bold text-slate-950 md:text-[44px]">
              Real projects. Commercial outcomes.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A selection of builds delivered with measurable business impact, not just shipped code.
            </p>
          </div>
          <Link href="/portfolio/" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-500 hover:text-cyan-700">
            View full portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-colors hover:border-cyan-300"
            >
              <div className="relative flex min-h-[240px] items-end p-6">
                <Image
                  src={project.image}
                  alt={`${project.title} project visual`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/50" />
                <div className="relative">
                  <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {project.category}
                  </span>
                  <p className="mt-5 text-2xl font-semibold text-white">{project.outcome}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
