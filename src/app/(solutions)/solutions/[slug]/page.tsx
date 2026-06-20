 import { notFound } from "next/navigation";
import Link from "next/link";
import solutions, { getSolutionBySlug } from "@/data/solutions";

interface SolutionPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | Solidity Labs`,
    description: solution.tagline,
  };
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  return (
    <main>
      {/* ── Breadcrumb ── */}
      <div className="bg-gray-950 text-gray-400 text-sm px-6 py-3">
        <div className="max-w-6xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-white transition">Solutions</Link>
          <span>/</span>
          <span className="text-white">{solution.title}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-4xl mb-4">{solution.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{solution.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
            {solution.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact/get-a-quote"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Start This Project
            </Link>
            <Link
              href="/contact/book-consultation"
              className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg transition"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problems We Solve ── */}
      {solution.problems.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Sound Familiar?
            </h2>
            <p className="text-gray-500 mb-10">
              These are the situations we hear most often from clients in your position.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 p-5 bg-red-50 border border-red-100 rounded-xl"
                >
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <span className="text-gray-700 text-sm">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── What We Deliver ── */}
      {solution.deliverables.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              What You Get
            </h2>
            <p className="text-gray-500 mb-10">
              Concrete deliverables — not vague promises.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-5 bg-green-50 border border-green-100 rounded-xl"
                >
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Ideal For ── */}
      {solution.idealFor.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Who This Is For
            </h2>
            <div className="flex flex-wrap gap-3">
              {solution.idealFor.map((type) => (
                <span
                  key={type}
                  className="bg-blue-50 text-blue-700 border border-blue-100 px-5 py-2 rounded-full font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Services Used ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Services Behind This Solution
          </h2>
          <p className="text-gray-500 mb-8">
            This solution draws from these areas of our practice.
          </p>
          <div className="flex flex-wrap gap-3">
            {solution.servicesUsed.map((service) => (
              <span
                key={service}
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Solutions ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions
              .filter((s) => s.slug !== solution.slug && s.phase === "A")
              .slice(0, 3)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/solutions/${other.slug}`}
                  className="group border border-gray-200 rounded-xl p-5 hover:border-blue-500 transition"
                >
                  <div className="text-2xl mb-2">{other.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition mb-1">
                    {other.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{other.tagline}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Solve This?</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Tell us about your project. We respond within 24 hours with a clear plan
          and honest pricing.
        </p>
        <Link
          href="/contact/get-a-quote"
          className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
        >
          Get a Free Quote →
        </Link>
      </section>
    </main>
  );
}