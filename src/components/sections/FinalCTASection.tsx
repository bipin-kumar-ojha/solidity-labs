"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const trustSignals = [
  "Proposal within 24 hours",
  "50% advance · 50% on delivery",
  "NDA available",
  "Milestone-protected",
];
const ctaImage =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      <Image
        src={ctaImage}
        alt="Business team planning a digital product"
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-slate-950/78" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-bold uppercase text-cyan-200">Ready to build?</p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-[36px] font-bold leading-tight md:text-[54px]"
        >
          Turn the project in your head into a scoped, priced, executable plan.
        </motion.h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
          Tell us what you want to build. We will respond with the right technical path, estimated timeline, and next step.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact/get-a-quote/"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            Start your project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact/book-consultation/"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Calendar className="h-4 w-4" />
            Book consultation
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/45">
          {trustSignals.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
