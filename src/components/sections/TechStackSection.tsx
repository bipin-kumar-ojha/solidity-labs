"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techCategories = [
  ["Blockchain", ["Solidity", "Ethereum", "BNB Chain", "Solana", "Polygon", "Ethers.js"]],
  ["AI & Automation", ["OpenAI GPT-4", "Claude API", "LangChain", "n8n", "Make.com", "Python"]],
  ["Frontend & Mobile", ["React", "Next.js", "Flutter", "React Native", "Tailwind CSS", "Webflow"]],
  ["Backend & Database", ["Node.js", "Laravel", "Supabase", "MongoDB", "Firebase", "AWS"]],
];
const techImage =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";

export default function TechStackSection() {
  return (
    <section className="bg-[#F7FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-cyan-700">Technology expertise</p>
            <h2 className="text-[34px] font-bold text-slate-950 md:text-[44px]">
              We choose the stack around your product, not our comfort zone.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Architecture decisions are based on budget, timeline, team skill, scale expectations, and maintenance reality.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src={techImage}
              alt="Software code on a developer workstation"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {techCategories.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="mb-4 text-sm font-semibold text-slate-950">{category}</p>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      techIndex < 2
                        ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                        : "border-slate-200 bg-slate-50 text-slate-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
