"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, [count, isInView, shouldReduceMotion, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 15, suffix: "+", label: "Countries served" },
  { value: 2, suffix: "hr", label: "Response guarantee" },
  { value: 800, prefix: "$", label: "Starting engagement" },
];

export default function StatsSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-b border-slate-200 p-6 md:border-b-0 md:border-r md:last:border-r-0">
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <div className="mt-3 text-4xl font-bold text-slate-950">
              {stat.prefix}
              <AnimatedNumber value={stat.value} />
              <span className="ml-1 text-cyan-600">{stat.suffix}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
