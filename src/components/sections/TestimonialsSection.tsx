"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Founder, Dubai",
    text: "Solidity Labs delivered exactly what we needed, on time and with full transparency. The weekly updates were incredibly helpful.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Sarah Williams",
    role: "Startup Owner, London",
    text: "They understood our AI requirements quickly and turned them into a practical, working product without unnecessary complexity.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Michael Chen",
    role: "CTO, San Francisco",
    text: "Clear communication, strong technical judgment, and zero surprises. A dependable development partner for serious work.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F7FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase text-cyan-700">Client feedback</p>
          <h2 className="text-[34px] font-bold text-slate-950 md:text-[44px]">
            Trusted by founders who need clarity as much as code.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 text-sm font-semibold text-amber-500">5.0 rating</div>
              <blockquote className="text-sm leading-7 text-slate-600">&quot;{item.text}&quot;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <Image src={item.image} alt={item.name} width={44} height={44} className="rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-slate-950">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
