import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-100 bg-white">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
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
              <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
                Neo Mori<span className="text-brand-600">.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-600">
              Neo Mori Tech Information Solutions Corp. builds tabOS — a
              tablet-based digital ordering ecosystem for modern restaurants
              across the Philippines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <FooterCol
              title="Product"
              links={[
                { label: "Solution", href: "/solution" },
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Process", href: "/process" },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Book a demo", href: "/contact" },
              ]}
            />
            <FooterCol
              title="Contact"
              links={[
                {
                  label: "test@neomoritech.com",
                  href: "mailto:test@neomoritech.com",
                },
                { label: "Davao City, PH", href: "/contact" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-100 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Neo Mori Tech Information Solutions
            Corp. All rights reserved.
          </span>
          <span>
            tabOS™ is a trademark of Neo Mori Tech Information Solutions Corp.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label + l.href}>
            <Link
              href={l.href}
              className="text-ink-700 transition-colors hover:text-brand-700"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
