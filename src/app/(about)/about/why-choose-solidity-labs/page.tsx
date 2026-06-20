// src/app/(about)/about/why-choose-solidity-labs/page.tsx

import Link from "next/link";
import { whyPoints } from "@/data/about";

export const metadata = {
  title: "Why Choose Solidity Labs | AI & Blockchain Development",
  description:
    "Milestone payments, full code ownership, weekly updates, and direct WhatsApp access. Here is what makes Solidity Labs different.",
};

export default function WhyChoosePage() {
  return (
    <main>
      {/* ── Breadcrumb ── */}
      <div className="bg-gray-950 text-gray-400 text-sm px-6 py-3">
        <div className="max-w-6xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <span>/</span>
          <span className="text-white">Why Choose Us</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Solidity Labs
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            What Makes Us Different
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            There are thousands of development agencies. Here is a clear,
            honest answer to why clients choose Solidity Labs — and keep
            coming back.
          </p>
        </div>
      </section>

      {/* ── Why Points ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="border border-gray-200 rounded-xl p-7 hover:border-blue-200 hover:shadow-sm transition"
              >
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Solidity Labs vs. The Alternative
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">What you care about</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium">Typical Agency</th>
                  <th className="text-center py-3 px-4 text-blue-600 font-semibold">Solidity Labs</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Payment structure", "50–100% upfront", "Max 50% advance, rest on milestones"],
                  ["Communication", "Email tickets, slow replies", "Direct WhatsApp to project lead"],
                  ["Progress visibility", "Monthly status calls", "Weekly Loom video walkthroughs"],
                  ["Code ownership", "Retained until full payment", "Yours from day one"],
                  ["Specialisation", "Everything to everyone", "AI, Blockchain, Automation, SaaS only"],
                  ["Post-launch", "Extra cost", "30 days included"],
                ].map(([concern, typical, solidity]) => (
                  <tr key={concern} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">{concern}</td>
                    <td className="py-4 px-4 text-center text-gray-500">{typical}</td>
                    <td className="py-4 px-4 text-center text-blue-600 font-medium">{solidity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-950 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          See the Difference For Yourself
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Start with a no-commitment discovery call. Ask us anything — about our
          process, our team, or how we would approach your project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact/book-consultation"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Book a Free Call
          </Link>
          <Link
            href="/contact/get-a-quote"
            className="border border-gray-600 hover:border-white text-white px-8 py-4 rounded-lg transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}