"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/solution", label: "Solution" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100 bg-white/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
            Neo Mori<span className="text-brand-600">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Book a demo
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container-x flex flex-col gap-1 pb-6 pt-2">
            {links.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" && pathname?.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary mt-3">
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="3"
          stroke="white"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="17.5" r="1.1" fill="white" />
        <path
          d="M8 7.5h8M8 11h5"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
