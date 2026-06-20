// src/app/(about)/about/our-story/page.tsx

import Link from "next/link";

export const metadata = {
  title: "Our Story | Solidity Labs",
  description:
    "How Solidity Labs was founded in March 2026 and what makes us different from every other development agency.",
};

export default function OurStoryPage() {
  return (
    <main>
      {/* ── Breadcrumb ── */}
      <div className="bg-gray-950 text-gray-400 text-sm px-6 py-3">
        <div className="max-w-6xl mx-auto flex gap-2">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <span>/</span>
          <span className="text-white">Our Story</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Why We Built Solidity Labs
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Founded in March 2026 — not because the market needed another agency,
            but because it needed a different kind of one.
          </p>
        </div>
      </section>

      {/* ── Story Content ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-gray-600 leading-relaxed mb-6">
            Solidity Labs was not built by someone who spent their career writing
            code. It was built by someone who spent years coordinating technical
            projects — working alongside developers, designers, and clients —
            watching the same problems repeat themselves over and over.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Across 13 to 14 projects, the pattern was always the same: clients
            would come with a clear idea, find a developer, and somewhere between
            the first call and the final delivery, things would go wrong.
            Timelines would slip. Scope would expand without explanation.
            Communication would drop off. The client would end up with something
            that half-worked, or nothing at all.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The problem was never the technology. The technology always existed.
            The problem was process, communication, and accountability. And those
            are not technical problems — they are human ones.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Why &apos;Solidity Labs&apos;?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Solidity is the programming language used to write Ethereum smart
            contracts — the foundation of the blockchain economy. Choosing that
            name was deliberate. It signals technical depth before a visitor
            reads a single word. It says: we are not here to build brochure
            websites. We are here to build the technology that the next decade
            runs on.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            But &apos;Solidity&apos; also means something else — firmness, reliability,
            substance. That is the other half of what the name represents. Not
            just technical expertise, but the kind of partner you can actually
            count on.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What We Are Building
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Solidity Labs is a specialist development company focused on the four
            technologies that are reshaping how businesses operate: AI, Blockchain,
            Automation, and SaaS. We are not trying to be everything to everyone.
            We go deep on these four areas because depth is where real value is
            created.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every client we work with gets direct access to the people building
            their product. Every project runs on milestone-based payments so you
            never pay for work that has not been delivered. Every line of code is
            yours — no lock-in, no ongoing fees, no strings.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That is the mission. Build great technology, communicate like adults,
            and deliver what we say we will deliver. It should not be a
            differentiator — but in this industry, it still is.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-gray-500 mb-8">
            Start with a free discovery call — no commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/book-consultation"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
            >
              Book a Free Call
            </Link>
            <Link
              href="/about/how-we-work"
              className="border border-gray-300 hover:border-blue-500 text-gray-700 px-8 py-4 rounded-lg transition"
            >
              See How We Work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}