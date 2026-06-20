'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import HeaderLogo from './HeaderLogo';
import NavDesktop from './NavDesktop';
import CTAButtons from './CTAButtons';

const mobileNavItems = [
  { label: 'Services', href: '/services/' },
  { label: 'Solutions', href: '/solutions/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Technologies', href: '/technologies/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[1000] border-b transition-all duration-200 ${
        isScrolled
          ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-slate-200/80 bg-white/95 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <HeaderLogo />
        <NavDesktop />
        <CTAButtons />

        <button
          type="button"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMobileOpen((value) => !value)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-800 transition-colors hover:border-cyan-500 hover:text-cyan-700 md:hidden"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-3 shadow-lg md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mx-auto mt-4 grid max-w-7xl gap-3 sm:grid-cols-2">
            <Link
              href="/contact/book-consultation/"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-md border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact/get-a-quote/"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-md bg-cyan-500 px-4 py-3 text-center text-sm font-bold text-slate-950"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
