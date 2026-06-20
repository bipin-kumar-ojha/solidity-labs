"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQItem[];
  eyebrow?: string;
  title?: string;
};

export default function ServiceFAQ({
  faqs,
  eyebrow = "Frequently asked questions",
  title = "Everything you need to know",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase text-cyan-700">{eyebrow}</p>
          <h2 className="text-[34px] font-bold leading-tight text-slate-950 md:text-[44px]">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Clear answers on timeline, payment, integrations, support, and delivery expectations.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-slate-200 last:border-b-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-slate-950">{item.question}</span>
                  <ChevronRight
                    className={`h-4 w-4 flex-shrink-0 text-cyan-700 transition-transform ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
