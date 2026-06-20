'use client';

import { useState } from 'react';
import Link from 'next/link';
import MegaMenuServices from './MegaMenu/MegaMenuServices';

const navLinkClassName =
  'rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-cyan-50 hover:text-cyan-700';

export default function NavDesktop() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="ml-4 hidden items-center gap-1 lg:flex">
      <div
        className="relative"
        onMouseEnter={() => setOpenMenu('services')}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <button
          className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors
            ${openMenu === 'services'
              ? 'bg-cyan-50 text-cyan-700'
              : 'text-slate-700 hover:bg-cyan-50 hover:text-cyan-700'
            }`}
        >
          Services
        </button>

        {openMenu === 'services' && (
          <MegaMenuServices
            onMouseEnter={() => setOpenMenu('services')}
            onMouseLeave={() => setOpenMenu(null)}
          />
        )}
      </div>

      <Link href="/solutions/" className={navLinkClassName}>
        Solutions
      </Link>

      <Link href="/industries/" className={navLinkClassName}>
        Industries
      </Link>

      <Link href="/technologies/" className={navLinkClassName}>
        Technologies
      </Link>

      <Link href="/portfolio/" className={navLinkClassName}>
        Portfolio
      </Link>

      <Link href="/blog/" className={navLinkClassName}>
        Blog
      </Link>

      <Link href="/about/" className={navLinkClassName}>
        About
      </Link>
    </nav>
  );
}
