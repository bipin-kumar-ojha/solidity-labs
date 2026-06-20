import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export default function ServiceCTA({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-bold uppercase text-cyan-200">Ready to build?</p>
        <h2 className="text-[36px] font-bold leading-tight md:text-[54px]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact/get-a-quote/"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            {primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact/book-consultation/"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Calendar className="h-4 w-4" />
            {secondaryCta}
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/45">
          <span>No commitment</span>
          <span>Proposal within 24 hours</span>
          <span>50% advance · 50% on delivery</span>
        </div>
      </div>
    </section>
  );
}
