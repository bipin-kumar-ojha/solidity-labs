import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type PricingPackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  ctaLabel?: string;
};

type Props = {
  packages: PricingPackage[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function ServicePricing({
  packages,
  eyebrow = "Transparent pricing",
  title = "Choose the right package for your needs",
  subtitle = "All prices are fixed around agreed scope, so you know what is included before development starts.",
}: Props) {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase text-cyan-200">{eyebrow}</p>
          <h2 className="text-[34px] font-bold leading-tight md:text-[44px]">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">{subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-lg border p-6 ${
                pkg.highlight
                  ? "border-cyan-300 bg-cyan-400/10 shadow-xl shadow-cyan-950/20"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              {pkg.badge && (
                <span className="mb-4 inline-flex rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                  {pkg.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="mt-3 text-3xl font-bold">{pkg.price}</p>
              <p className="mt-2 text-sm text-white/55">{pkg.description}</p>

              <div className="mt-6 space-y-3">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm leading-6 text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/get-a-quote/"
                className={`mt-7 flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
                  pkg.highlight
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                {pkg.ctaLabel || "Get started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
