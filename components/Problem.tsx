import Reveal from "./Reveal";

const problems = [
  {
    title: "Order inaccuracy",
    desc: "Handwritten slips lead to wrong dishes and frustrated guests.",
    icon: (
      <path d="M9 12l2 2 4-4M12 22a10 10 0 110-20 10 10 0 010 20z" />
    ),
  },
  {
    title: "Operational delays",
    desc: "Diners wait too long to flag down a waiter, slowing turnover.",
    icon: <path d="M12 8v4l3 3M12 22a10 10 0 110-20 10 10 0 010 20z" />,
  },
  {
    title: "Communication gaps",
    desc: "Paper creates lag between floor, cashier, and kitchen.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    ),
  },
  {
    title: "Static menu management",
    desc: "Manually updating paper menus is slow, costly, and error-prone.",
    icon: (
      <path d="M4 6h16M4 12h10M4 18h7M18 14l4 4-4 4M22 18h-8" />
    ),
  },
  {
    title: "Financial strain",
    desc: "Labor costs stay high just to cover manual order-taking.",
    icon: (
      <path d="M12 1v22M17 5H9.5A3.5 3.5 0 006 8.5 3.5 3.5 0 009.5 12h5a3.5 3.5 0 010 7H6" />
    ),
  },
  {
    title: "Limited visibility",
    desc: "Owners can't see what's selling, who's serving, or where revenue is leaking without manual end-of-day reports.",
    icon: (
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 100-6 3 3 0 000 6z" />
    ),
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Problem</span>
          <h2 className="h2 mt-5">
            Traditional service creates friction at every step.
          </h2>
          <p className="lede mt-5">
            In high-traffic dining rooms, the smallest manual handoff becomes
            the largest bottleneck. tabOS removes those bottlenecks.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
            >
            <div
              className="card group relative h-full overflow-hidden"
            >
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
                    {p.icon}
                  </svg>
                </div>
                <h3 className="h3 mt-5 text-xl">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  {p.desc}
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
