"use client";

const logos = ["Clutch", "GoodFirms", "DesignRush", "Upwork", "Fiverr Pro", "TechBehemoths"];

export default function ClientTrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-semibold text-slate-700">
          Trusted by founders, operators, and product teams across 15+ countries
        </p>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
