import { CheckCircle2 } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

type Props = {
  features: Feature[];
  eyebrow?: string;
  title?: string;
};

export default function ServiceFeatures({ features, eyebrow = "What you get", title = "Everything included" }: Props) {
  return (
    <section className="bg-[#F7FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase text-cyan-700">{eyebrow}</p>
          <h2 className="text-[34px] font-bold leading-tight text-slate-950 md:text-[44px]">
            {title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-cyan-300">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
