import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedService = {
  title: string;
  category: string;
  price: string;
  link: string;
};

type Props = {
  services: RelatedService[];
  eyebrow?: string;
  title?: string;
};

export default function ServiceRelated({
  services,
  eyebrow = "Related services",
  title = "You might also need",
}: Props) {
  return (
    <section className="bg-[#F7FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-cyan-700">{eyebrow}</p>
            <h2 className="text-[34px] font-bold text-slate-950 md:text-[44px]">
              {title}
            </h2>
          </div>
          <Link href="/services/" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-500 hover:text-cyan-700">
            Browse all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-cyan-300"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-md bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {item.category}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-cyan-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm font-medium text-slate-500">Starting from {item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
