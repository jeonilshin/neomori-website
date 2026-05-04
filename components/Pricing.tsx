const plans = [
  {
    badge: "Option 1",
    title: "Outright Hardware Purchase",
    summary:
      "Own your tablets outright. Lower recurring monthly cost, long-term asset ownership.",
    bestFor: "Establishments seeking long-term ownership and lean monthly fees.",
    includes: [
      "Tablets, heavy-duty cases, wall chargers, power banks",
      "Monthly subscription per device for system access",
      "2-year hardware warranty (zero-downtime swap)",
    ],
    term: "2-Year lock-in period",
  },
  {
    badge: "Option 2",
    title: "Client-Supplied Hardware",
    summary:
      "Use your own tablets. Pay only the per-device subscription for the tabOS ecosystem.",
    bestFor: "Businesses with existing tablets or who prefer to source their own.",
    includes: [
      "Full access to the tabOS platform",
      "Devices must meet Neo Mori minimum specs",
      "Davao-based priority support",
    ],
    term: "2-Year lock-in period",
    highlighted: true,
  },
  {
    badge: "Option 3",
    title: "Tablet Rental & Subscription",
    summary:
      "Minimize upfront capex. Rent tablets and pay a combined monthly fee.",
    bestFor: "Operators who want full hardware support with minimal upfront cost.",
    includes: [
      "Monthly rental + monthly subscription per device",
      "Full hardware support and replacements covered",
      "2-year hardware warranty (zero-downtime swap)",
    ],
    term: "2-Year lock-in period",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section relative bg-gradient-to-b from-white via-ocean-50/40 to-white"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Investment Options</span>
          <h2 className="h2 mt-5">
            Three flexible ways to roll out tabOS.
          </h2>
          <p className="lede mt-5">
            Pricing scales with the number of tablet units required. Each
            option includes a one-time onboarding fee covering full setup,
            menu digitization, and 3-day onsite training.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p, idx) => (
            <div
              key={p.title}
              style={{ transitionDelay: `${idx * 80}ms` }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                p.highlighted
                  ? "border-transparent bg-brand-gradient text-white shadow-glow lg:-translate-y-4"
                  : "border-ink-100 bg-white text-ink-900 shadow-card hover:-translate-y-1 hover:shadow-glow"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700 shadow-card">
                  Most flexible
                </span>
              )}
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                  p.highlighted
                    ? "bg-white/20 text-white"
                    : "bg-brand-50 text-brand-700"
                }`}
              >
                {p.badge}
              </span>
              <h3
                className={`mt-4 font-display text-2xl font-semibold tracking-tight ${
                  p.highlighted ? "text-white" : "text-ink-900"
                }`}
              >
                {p.title}
              </h3>
              <p
                className={`mt-3 text-base leading-relaxed ${
                  p.highlighted ? "text-white/85" : "text-ink-600"
                }`}
              >
                {p.summary}
              </p>
              <div
                className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
                  p.highlighted
                    ? "bg-white/15 text-white/90"
                    : "bg-ink-50 text-ink-700"
                }`}
              >
                <span className="font-semibold">Best for:</span> {p.bestFor}
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.includes.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span
                      className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full ${
                        p.highlighted ? "bg-white/25" : "bg-brand-gradient"
                      }`}
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className={
                        p.highlighted ? "text-white/95" : "text-ink-700"
                      }
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between border-t pt-6 text-xs font-semibold uppercase tracking-wider">
                <span
                  className={p.highlighted ? "text-white/80" : "text-ink-500"}
                >
                  {p.term}
                </span>
                <a
                  href="#contact"
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    p.highlighted
                      ? "bg-white text-brand-700 hover:bg-brand-50"
                      : "bg-ink-900 text-white hover:bg-brand-700"
                  }`}
                >
                  Talk to sales
                </a>
              </div>
              <div
                className={`absolute inset-x-0 bottom-0 h-px ${
                  p.highlighted ? "bg-white/30" : "bg-ink-100"
                }`}
                aria-hidden
              />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-brand-100 bg-brand-50/60 p-8 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Onboarding fee · all options</span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
                Starting at
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-ink-700">
              One-time fee — final amount confirmed in your tailored quote.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Covers full deployment of tabOS — from menu integration to
              onsite training and go-live support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            <OnboardingItem
              title="Digital construction"
              desc="Menu integration & brand-aligned interface customization."
            />
            <OnboardingItem
              title="Delivery & install"
              desc="Secure transport, setup, and system installation."
            />
            <OnboardingItem
              title="Training & manual"
              desc="3-day onsite staff training plus the full tabOS user manual."
            />
          </div>
          <div className="lg:col-span-12">
            <p className="text-xs text-ink-500">
              Delivery timeline: 2–4 weeks upon contract signing. Timeline may
              vary based on tablet availability and completeness of menu
              details, pricing, and images.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OnboardingItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm">
      <div className="font-display text-base font-semibold text-ink-900">
        {title}
      </div>
      <div className="mt-1.5 text-sm leading-relaxed text-ink-600">{desc}</div>
    </div>
  );
}
