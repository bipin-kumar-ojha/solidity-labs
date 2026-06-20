type TechCategory = {
  title: string;
  items: string[];
  highlightedItems?: string[];
};

type Props = {
  categories: TechCategory[];
  eyebrow?: string;
  title?: string;
};

export default function ServiceTechStack({
  categories,
  eyebrow = "Technology stack",
  title = "We use the right tools for your build",
}: Props) {
  return (
    <section className="bg-[#F7FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase text-cyan-700">{eyebrow}</p>
          <h2 className="text-[34px] font-bold leading-tight text-slate-950 md:text-[44px]">
            {title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase text-slate-500">{cat.title}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      cat.highlightedItems?.includes(item)
                        ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                        : "border-slate-200 bg-slate-50 text-slate-600"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
