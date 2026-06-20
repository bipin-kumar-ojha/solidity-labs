import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

type TechTag = {
  name: string;
  slug?: string;
};

type ServiceHeroProps = {
  slug: string;
  category: {
    name: string;
    slug: string;
  };
  eyebrow: string;
  h1Line1: string;
  h1AccentWord?: string;
  subHeadline: string;
  primaryCtaLabel: string;
  image: string;
  techTags: TechTag[];
  startingPrice: string;
  deliveryTimeline: string;
  supportDays: string;
};

export default function ServiceHero({
  slug,
  category,
  eyebrow,
  h1Line1,
  h1AccentWord,
  subHeadline,
  primaryCtaLabel,
  image,
  techTags,
  startingPrice,
  deliveryTimeline,
  supportDays,
}: ServiceHeroProps) {
  const estimateRows = [
    ["Service", h1Line1],
    ["Starting from", startingPrice],
    ["Timeline", deliveryTimeline],
    ["Advance", "50% to start"],
    ["Support", supportDays],
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pb-16 pt-28 text-white">
      <Image
        src={image}
        alt={`${h1Line1} service visual`}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(2,6,23,0.76),rgba(2,6,23,0.38))]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-white/55">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-white">Services</Link>
            <span>/</span>
            <Link href={`/services/${category.slug}/`} className="hover:text-white">
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-cyan-200">{h1Line1}</span>
          </div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-cyan-300" />
            <span className="text-xs font-semibold uppercase text-cyan-100">{eyebrow}</span>
          </div>

          <h1 className="max-w-4xl text-[42px] font-bold leading-[1.06] md:text-[62px]">
            {h1Line1}{" "}
            {h1AccentWord && <span className="text-cyan-300">{h1AccentWord}</span>}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            {subHeadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/contact/get-a-quote?service=${slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              {primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact/book-consultation/"
              className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              Book consultation
            </Link>
            <a
              href={`https://wa.me/?text=I want a quote for ${h1Line1}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-green-400/30 px-5 py-3 text-sm font-semibold text-green-300 transition-colors hover:bg-green-400/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {techTags?.map((tag) => (
              <Link
                key={tag.name}
                href={tag.slug ? `/technologies/${tag.slug}/` : "#"}
                className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="relative h-56">
              <Image
                src={image}
                alt={`${h1Line1} project preview`}
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/15 bg-slate-950/70 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase text-cyan-200">Instant estimate</p>
                <p className="mt-1 text-xl font-semibold">Scope, price, timeline.</p>
              </div>
            </div>

            <div className="p-5">
              <div className="space-y-3">
                {estimateRows.map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0">
                    <span className="text-sm text-white/55">{label}</span>
                    <span className={`max-w-[190px] text-right text-sm font-semibold ${label === "Starting from" ? "text-green-300" : "text-white"}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={`/contact/get-a-quote?service=${slug}`}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                Start your project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/55">
                <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                No commitment · NDA on request
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
