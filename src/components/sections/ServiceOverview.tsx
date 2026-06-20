import { CheckCircle2, XCircle } from "lucide-react";

type ServiceOverviewProps = {
  whatIsH2: string;
  whatIsBody: string[];
  problems: string[];
  solutions: string[];
};

export default function ServiceOverview({
  whatIsH2,
  whatIsBody,
  problems,
  solutions,
}: ServiceOverviewProps) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-bold uppercase text-cyan-700">Service overview</p>
          <h2 className="text-[34px] font-bold leading-tight text-slate-950 md:text-[44px]">
            {whatIsH2}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            {whatIsBody.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-red-100 bg-red-50 p-6 shadow-sm">
            <p className="mb-4 font-semibold text-slate-950">The problem your business has today</p>
            <div className="space-y-3">
              {problems.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
            <p className="mb-4 font-semibold text-slate-950">What this service delivers</p>
            <div className="space-y-3">
              {solutions.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
