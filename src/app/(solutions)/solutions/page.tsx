// src/app/(solutions)/solutions/page.tsx

import Link from "next/link";
import solutions from "@/data/solutions";

export const metadata = {
  title: "Technology Solutions | Solidity Labs",
  description:
    "We solve real business problems with AI, Blockchain, Automation, and SaaS. Find the solution that fits your challenge.",
};

export default function SolutionsPage() {
  const phaseASolutions = solutions.filter((s) => s.phase === "A");
  const otherSolutions = solutions.filter((s) => s.phase !== "A");

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            What Problem Are You Solving?
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            We don&apos;t sell services — we solve problems. Find your situation below
            and see exactly how we&apos;d approach it.
          </p>
        </div>
      </section>

      {/* ── Phase A Solutions ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Most Common Challenges We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phaseASolutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group border border-gray-200 rounded-xl p-7 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-3xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {solution.tagline}
                </p>
                {solution.idealFor.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {solution.idealFor.map((type) => (
                      <span
                        key={type}
                        className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Not sure section ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Not Sure Which Solution Fits?
          </h2>
          <p className="text-gray-600 mb-8">
            Book a free 30-minute discovery call. We&apos;ll listen to your challenge,
            ask the right questions, and tell you honestly what we&apos;d recommend — even
            if that means pointing you elsewhere.
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
              className="border border-gray-300 hover:border-blue-500 text-gray-700 px-8 py-4 rounded-lg transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}