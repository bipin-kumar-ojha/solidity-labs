"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  ["01", "Discovery call", "A focused 15-30 minute call to understand the project, constraints, and success criteria."],
  ["02", "Proposal", "A fixed scope, fixed timeline, and commercial structure delivered within 24 hours."],
  ["03", "Agreement", "Milestones, acceptance criteria, and payment terms confirmed before work begins."],
  ["04", "Development", "Weekly progress updates, demo links, and fast decisions to keep delivery moving."],
  ["05", "Delivery", "Final review, handover documentation, deployment support, and post-launch fixes."],
];
const processImage =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80";

export default function ProcessSection() {
  return (
    <section className="bg-[#F7FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-cyan-700">How we work</p>
            <h2 className="text-[34px] font-bold leading-tight text-slate-950 md:text-[44px]">
              A delivery process built for speed, control, and fewer surprises.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              From the first call to final handover, every step is designed to keep priorities visible and decisions moving.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src={processImage}
              alt="Developers collaborating around a project delivery plan"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {steps.map(([number, title, desc], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04 }}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-sm font-bold text-cyan-700">{number}</span>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
