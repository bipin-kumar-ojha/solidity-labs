type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type Props = {
  steps: ProcessStep[];
  eyebrow?: string;
  title?: string;
};

export default function ServiceProcess({
  steps,
  eyebrow = "How it works",
  title = "Your project delivered in 5 steps",
}: Props) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase text-cyan-700">{eyebrow}</p>
          <h2 className="text-[34px] font-bold leading-tight text-slate-950 md:text-[44px]">
            {title}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {steps.map((item) => (
            <div key={item.step} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-cyan-300">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-sm font-bold text-cyan-700">
                {item.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
