"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    category: "AI",
    title: "How AI Agents Are Transforming SaaS Products",
    meta: "5 min read · March 2026",
    href: "/blog/ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Blockchain",
    title: "Smart Contracts: What Every Founder Should Know",
    meta: "6 min read · March 2026",
    href: "/blog/blockchain",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Automation",
    title: "Automating Business Workflows with AI Tools",
    meta: "4 min read · March 2026",
    href: "/blog/automation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-cyan-700">Latest insights</p>
            <h2 className="text-[34px] font-bold text-slate-950 md:text-[44px]">
              Practical thinking for AI, Web3, and automation leaders.
            </h2>
          </div>
          <Link href="/blog/" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-500 hover:text-cyan-700">
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04 }}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-colors hover:border-cyan-300"
            >
              <div className="relative h-44">
                <Image
                  src={post.image}
                  alt={`${post.category} article visual`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {post.category}
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-7 text-slate-950">{post.title}</h3>
                <p className="mt-4 text-sm text-slate-500">{post.meta}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
