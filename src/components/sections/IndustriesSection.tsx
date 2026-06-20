"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  "Fintech & Crypto",
  "Ecommerce & Retail",
  "Healthcare",
  "Real Estate",
  "EdTech",
  "Logistics",
  "HR & Staffing",
  "Food & Restaurant",
  "Travel Tech",
  "Legal Tech",
];
const industriesImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80";

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

export default function IndustriesSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-cyan-700">Industries we serve</p>
            <h2 className="text-[34px] font-bold text-slate-950 md:text-[44px]">
              Built around the workflows your industry actually uses.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              From fintech to healthcare, we shape technical decisions around business context, compliance pressure, and user behavior.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="relative h-56">
              <Image
                src={industriesImage}
                alt="Modern business office workspace"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <span className="text-sm font-semibold text-slate-700">20+ verticals covered</span>
              <Link href="/industries/" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                All industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <motion.a
              key={industry}
              href={`/industries/${slugify(industry)}/`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.025 }}
              className="group rounded-lg border border-slate-200 bg-[#F7FAFC] p-4 transition-colors hover:border-cyan-300 hover:bg-white"
            >
              <p className="text-sm font-semibold text-slate-950">{industry}</p>
              <p className="mt-3 flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-cyan-700">
                Explore
                <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
