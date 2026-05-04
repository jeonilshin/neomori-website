const groups = [
  {
    title: "Sales & Order Management",
    desc: "Every order tracked from tap to plate.",
    items: [
      {
        name: "Real-time tracking",
        desc: "See instantly which orders are served and which are pending.",
      },
      {
        name: "Automated staff alerts",
        desc: "Notifications for new orders, follow-ups, and bill-out requests.",
      },
      {
        name: "Transaction monitoring",
        desc: "Complete payment history through a centralized admin dashboard.",
      },
    ],
    icon: (
      <path d="M3 3v18h18M7 14l3-3 4 4 6-6" />
    ),
  },
  {
    title: "Menu & Staff Management",
    desc: "Update the menu in seconds. Hold staff accountable in real time.",
    items: [
      {
        name: "Real-time availability",
        desc: 'Mark items as "Sold Out", "New", or "Popular" instantly.',
      },
      {
        name: "Professional updates",
        desc: "Neo Mori manages menu changes and photo updates upon request.",
      },
      {
        name: "Staff accountability",
        desc: "Unique PIN access identifies who handled each action.",
      },
    ],
    icon: (
      <path d="M4 4h16v16H4z M4 9h16 M9 4v16" />
    ),
  },
  {
    title: "Analytics & Insights",
    desc: "Decisions backed by data, not guesswork.",
    items: [
      {
        name: "Live sales dashboard",
        desc: "Monitor restaurant performance as it happens.",
      },
      {
        name: "Detailed reporting",
        desc: "Trends on best-sellers vs. least-performing items.",
      },
      {
        name: "Smarter decisions",
        desc: "Drop dead weight from the menu. Double down on winners.",
      },
    ],
    icon: <path d="M21 21H3V3 M7 17l4-4 4 4 5-5" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Features</span>
          <h2 className="h2 mt-5">
            One platform. Every operational lever.
          </h2>
          <p className="lede mt-5">
            From the dining floor to the back office, tabOS gives you instant
            visibility and control over the moments that matter.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="grid items-start gap-8 rounded-3xl border border-ink-100 bg-white p-8 shadow-card lg:grid-cols-12 lg:p-12"
            >
              <div className="lg:col-span-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {g.icon}
                  </svg>
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  0{i + 1}
                </div>
                <h3 className="h3 mt-2">{g.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  {g.desc}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
                {g.items.map((it) => (
                  <div
                    key={it.name}
                    className="rounded-2xl border border-ink-100 bg-ink-50/40 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white hover:shadow-card"
                  >
                    <div className="font-display text-base font-semibold text-ink-900">
                      {it.name}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-ink-600">
                      {it.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
