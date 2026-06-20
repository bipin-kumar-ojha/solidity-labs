import Link from 'next/link';

export default function CTAButtons() {
  return (
    <div className="ml-auto hidden items-center gap-3 md:flex">
      <Link
        href="/contact/book-consultation/"
        className="rounded-md border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-700"
      >
        Book Consultation
      </Link>

      <Link
        href="/contact/get-a-quote/"
        className="rounded-md bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-sm transition-colors hover:bg-cyan-400"
      >
        Get a Quote
      </Link>
    </div>
  );
}
