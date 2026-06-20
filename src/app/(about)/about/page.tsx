// src/app/(about)/about/page.tsx

import Link from "next/link";
import { processSteps, whyPoints } from "@/data/about";

export const metadata = {
  title: "About Solidity Labs | AI & Blockchain Development Company",
  description:
    "Solidity Labs is a specialist AI, Blockchain, Automation, and SaaS development company. Learn our story, how we work, and why clients choose us.",
};

const aboutPages = [
  {
    slug: "our-story",
    title: "Our Story",
    description: "How Solidity Labs was founded and what drives us.",
    icon: "📖",
  },
  {
    slug: "how-we-work",
    title: "How We Work",
    description: "Our 5-step delivery process — transparent from day one.",
    icon: "⚙️",
  },
  {
    slug: "why-choose-solidity-labs",
    title: "Why Choose Us",
    description: "What makes Solidity Labs different from every other agency.",
    icon: "🎯",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            We Build the Technology <br className="hidden md:block" />
            That Moves Businesses Forward
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Solidity Labs is a specialist development company focused on AI,
            Blockchain, Automation, and SaaS. We are not a generalist agency —
            we go deep on the technologies that create real competitive advantage.
          </p>
        </div>
      </section>

      {/* ── About Sub Pages ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutPages.map((page) => (
              <Link
                key={page.slug}
                href={`/about/${page.slug}`}
                className="group border border-gray-200 rounded-xl p-7 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-3xl mb-4">{page.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition mb-2">
                  {page.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Why Us snapshot ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Why Clients Choose Solidity Labs
          </h2>
          <p className="text-gray-500 mb-12">
            A quick look at what makes us different.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="text-2xl mb-3">{point.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-blue-100 mb-8">
          Start with a free 30-minute discovery call — no commitment, no sales pitch.
        </p>
        <Link
          href="/contact/book-consultation"
          className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
        >
          Book a Free Call →
        </Link>
      </section>
    </main>
  );
}