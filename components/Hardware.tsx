import Reveal from "./Reveal";

const items = [
  {
    title: "Hardware",
    desc: "Tablet devices serve as the primary tools for both customer ordering and administrative monitoring.",
    icon: (
      <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm7 16h.01" />
    ),
  },
  {
    title: "Software",
    desc: "The full tabOS interface — installed, maintained, and remotely updated by Neo Mori Tech.",
    icon: <path d="M4 6h16M4 12h16M4 18h12" />,
  },
  {
    title: "Accessories",
    desc: "Heavy-duty protective cases, screen protectors, and dedicated charging solutions for device longevity.",
    icon: (
      <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16z" />
    ),
  },
  {
    title: "Network",
    desc: "Just one infrastructure requirement: a stable, strong Wi-Fi connection to power real-time sync.",
    icon: (
      <path d="M5 12.55a11 11 0 0114 0M1.42 9A16 16 0 0122.58 9M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
    ),
  },
];

export default function Hardware() {
  return (
    <section className="section relative bg-gradient-to-b from-white via-ocean-50/30 to-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Materials & Equipment</span>
          <h2 className="h2 mt-5">Lightweight to deploy. Built to last.</h2>
          <p className="lede mt-5">
            tabOS is designed for minimal infrastructure — every piece is
            chosen for the realities of a busy dining room.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="card group relative h-full overflow-hidden">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient-soft text-brand-700">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {it.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {it.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
