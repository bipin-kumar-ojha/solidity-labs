// src/app/(about)/about/how-we-work/page.tsx

import Link from "next/link";
import { processSteps } from "@/data/about";

export const metadata = {
  title: "How We Work | Solidity Labs",
  description:
    "Our 5-step delivery process — discovery, requirements, proposal, development, and launch. Transparent, milestone-based, and built around clear communication.",
};

export default function HowWeWorkPage() {
  return (
    <main>
      {/* ── Breadcrumb ── */}
      <div className="bg-gray-950 text-gray-400 text-sm px-6 py-3">
        <div className="max-w-6xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <span>/</span>
          <span className="text-white">How We Work</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            A Process Built Around Clarity
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Every project at Solidity Labs follows the same 5-step process.
            No surprises. No scope creep. No disappearing developers.
            Just a clear path from idea to working software.
          </p>
        </div>
      </section>

      {/* ── 5 Step Process ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="flex gap-6 p-7 border border-gray-200 rounded-xl hover:border-blue-200 transition"
              >
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-6 bg-blue-200 mx-auto mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantees ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Commitments to You
          </h2>
          <p className="text-gray-500 mb-10">
            These are not aspirations — they are standards we hold every project to.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "50% maximum advance", body: "We never ask for more than half upfront. The rest is split across milestones tied to delivered work." },
              { title: "Weekly Loom updates", body: "Every Friday you receive a video walkthrough of what was built that week. No chasing required." },
              { title: "WhatsApp direct line", body: "Your project lead is reachable on WhatsApp. Real answers from the people doing the work." },
              { title: "Full code ownership", body: "On final delivery you receive complete ownership of all code, assets, and accounts. No strings attached." },
              { title: "No surprise invoices", body: "Scope is agreed in writing before work begins. Any changes go through a formal change request." },
              { title: "30-day post-launch support", body: "After delivery we stay on for 30 days to fix any issues that arise in the live environment." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-5 bg-white border border-gray-200 rounded-xl"
              >
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-blue-100 mb-8">
          Step 1 is a free 30-minute discovery call. No commitment. No sales pitch.
        </p>
        <Link
          href="/contact/book-consultation"
          className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
        >
          Book Your Discovery Call →
        </Link>
      </section>
    </main>
  );
}