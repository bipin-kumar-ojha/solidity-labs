import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link href="/" className="mr-8 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white shadow-sm">
        S
      </div>

      <div className="text-sm font-bold text-slate-950">
        Solidity<span className="text-cyan-700">Labs</span>
        <span className="ml-1 align-super text-[10px] font-semibold text-cyan-600">.ai</span>
      </div>
    </Link>
  );
}
