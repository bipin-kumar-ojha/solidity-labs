"use client";

import Image from "next/image";
import { BarChart3, CalendarCheck, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Commercially safe payment structure",
    desc: "50% advance and 50% on approved delivery keeps incentives aligned from day one.",
  },
  {
    icon: CalendarCheck,
    title: "Milestones agreed in writing",
    desc: "Scope, timelines, deliverables, and acceptance criteria are documented before development starts.",
  },
  {
    icon: Clock,
    title: "Weekly delivery rhythm",
    desc: "You get structured progress updates with demo links and next-step decisions every Friday.",
  },
  {
    icon: BarChart3,
    title: "Transparent pricing signals",
    desc: "Every core service starts with a pricing range, so you can decide quickly and confidently.",
  },
];

const metrics = [
  ["Active projects", "4"],
  ["Average delivery", "18 days"],
  ["Client rating", "4.9 / 5"],
  ["Response SLA", "< 2 hours"],
];
const dashboardImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80";

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
        >
          <div className="relative h-72">
            <Image
              src={dashboardImage}
              alt="Project team reviewing delivery dashboard"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 border-t border-slate-200">
            {metrics.map(([label, value]) => (
              <div key={label} className="border-b border-r border-slate-200 p-5 even:border-r-0 last:border-b-0 md:last:border-r">
                <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
                <p className="mt-2 text-xl font-bold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase text-cyan-700">Why choose us</p>
          <h2 className="text-[34px] font-bold leading-tight text-slate-950 md:text-[44px]">
            Senior engineering discipline without enterprise procurement drag.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Solidity Labs is built for founders and teams who need technical confidence, fast decision-making, and clear accountability.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-lg border border-slate-200 bg-[#F7FAFC] p-5 transition-colors hover:border-cyan-300"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white text-cyan-700 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
