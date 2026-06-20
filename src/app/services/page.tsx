import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Boxes,
  Code2,
  Coins,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { serviceHubs } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Solidity Labs",
  description:
    "Explore Solidity Labs services across AI development, blockchain, SaaS, automation, no-code, and web development.",
};

const heroImage =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80";

const categoryImages: Record<string, string> = {
  "ai-development":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  "blockchain-development":
    "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1000&q=80",
  "automation-development":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  "saas-development":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  "no-code-development":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  "web-development":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
};

const categoryIcons = {
  "ai-development": Bot,
  "blockchain-development": Coins,
  "automation-development": Workflow,
  "saas-development": Layers3,
  "no-code-development": Boxes,
  "web-development": Code2,
};

const proofPoints = [
  "Fixed scope and milestone plan",
  "50% advance, 50% on delivery",
  "Proposal within 24 hours",
  "15 days post-launch support",
];

const deliverySteps = [
  {
    title: "Map the requirement",
    text: "We clarify the goal, users, integrations, technical constraints, and business outcome.",
  },
  {
    title: "Price the scope",
    text: "You receive a fixed-price proposal with milestones, timeline, and acceptance criteria.",
  },
  {
    title: "Build and review",
    text: "We ship in weekly cycles with demos, progress updates, and practical decision points.",
  },
  {
    title: "Launch and support",
    text: "We deploy, document, hand over, and support the product after launch.",
  },
];

export default function ServicesPage() {
  const totalServices = serviceHubs.reduce((total, hub) => total + hub.coreServices.length, 0);
  const featuredServices = serviceHubs.flatMap((hub) =>
    hub.coreServices.slice(0, 2).map((service) => ({
      ...service,
      hubTitle: hub.title,
      hubSlug: hub.slug,
    }))
  );

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#081321] px-6 pb-16 pt-32 text-white">
        <Image
          src={heroImage}
          alt="Technology team collaborating in a modern office"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-18"
        />
        <div className="absolute inset-0 bg-[#081321]/88" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              <span className="text-xs font-semibold uppercase text-cyan-100">
                Services built for production
              </span>
            </div>

            <h1 className="max-w-4xl text-[42px] font-bold leading-[1.04] tracking-[-0.03em] md:text-[64px]">
              Technical services for teams that need reliable execution.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              From AI agents and smart contracts to SaaS platforms and automation systems, Solidity Labs turns complex ideas into scoped, priced, production-ready builds.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact/get-a-quote/"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
              >
                Get a fixed-price proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio/"
                className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                View delivery examples
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/20">
            <div className="grid grid-cols-2 gap-3">
              {[
                [`${serviceHubs.length}`, "service hubs"],
                [`${totalServices}`, "services mapped"],
                ["24h", "proposal window"],
                ["50/50", "payment model"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-white/45">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
              {proofPoints.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/68">
                  <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
          {["AI", "Blockchain", "SaaS", "Automation", "No-code", "Web"].map((item) => (
            <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-4 py-2 font-semibold">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase text-indigo-600">Service categories</p>
            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.025em] text-slate-950 md:text-[46px]">
              Choose the build track that matches your business priority.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {serviceHubs.map((hub) => {
              const Icon = categoryIcons[hub.slug as keyof typeof categoryIcons] || Sparkles;
              const firstService = hub.coreServices[0];

              return (
                <article key={hub.slug} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src={categoryImages[hub.slug]}
                      alt={`${hub.title} visual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/35" />
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-md bg-white text-indigo-600 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-slate-950">{hub.title}</h3>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {hub.coreServices.length} services
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{hub.tagline}</p>

                    <div className="mt-5 space-y-2 border-t border-slate-200 pt-5">
                      {hub.coreServices.slice(0, 4).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${hub.slug}/${service.slug}/`}
                          className="group flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-indigo-600"
                        >
                          <span>{service.title}</span>
                          <ArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-indigo-500" />
                        </Link>
                      ))}
                    </div>

                    {firstService && (
                      <Link
                        href={`/services/${hub.slug}/${firstService.slug}/`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Explore {hub.title.replace(" Services", "")}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase text-indigo-600">Popular services</p>
              <h2 className="text-[34px] font-bold tracking-[-0.025em] text-slate-950 md:text-[44px]">
                High-demand builds clients ask for first.
              </h2>
            </div>
            <Link href="/contact/get-a-quote/" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
              Need help choosing?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.slice(0, 9).map((service) => (
              <Link
                key={`${service.hubSlug}-${service.slug}`}
                href={`/services/${service.hubSlug}/${service.slug}/`}
                className="group rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-300 hover:bg-slate-50"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-md bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                    {service.hubTitle.replace(" Services", "")}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    {service.startingPrice || "Custom"}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    {service.timeline || "Scoped timeline"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase text-indigo-300">Delivery model</p>
            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.025em] md:text-[44px]">
              Every service follows the same accountable delivery structure.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/55">
              Whether you choose AI, blockchain, SaaS, or automation, the process stays commercially clear and technically disciplined.
            </p>
          </div>

          <div className="grid gap-3">
            {deliverySteps.map((step, index) => (
              <div key={step.title} className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[72px_1fr]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/10 text-sm font-bold text-indigo-200">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1E1B4B] px-6 py-20 text-white">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
          alt="Business team planning a digital project"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#1E1B4B]/80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-2 text-xs font-bold uppercase text-indigo-200">Start here</p>
          <h2 className="text-[34px] font-bold leading-tight tracking-[-0.025em] md:text-[50px]">
            Tell us what you want to build. We will point you to the right service.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            Send your idea, workflow, or product requirement. We will respond with a practical scope, timeline, and fixed-price next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact/get-a-quote/"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-100"
            >
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact/book-consultation/"
              className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
