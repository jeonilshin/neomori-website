import Reveal from "./Reveal";

const steps = [
  {
    title: "System preparation",
    desc: "On contract signing, we integrate your menu, branding, and configurations into tabOS.",
  },
  {
    title: "Network stability",
    desc: "A strong, stable Wi-Fi connection is established to ensure real-time data sync.",
  },
  {
    title: "Hardware installation",
    desc: "We deliver and install all tablets and components — fully functional out of the box.",
  },
  {
    title: "Onsite training",
    desc: "Comprehensive 3-day onsite training for staff: ordering, management, admin controls.",
  },
  {
    title: "Activation & go-live",
    desc: "Final testing followed by official go-live support from the Neo Mori Tech team.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Implementation</span>
          <h2 className="h2 mt-5">A structured rollout in five steps.</h2>
          <p className="lede mt-5">
            From contract signing to go-live, our team handles the heavy
            lifting — so your floor never misses a beat.
          </p>
        </div>

        <div className="mt-12">
          <ol className="relative grid gap-6 md:grid-cols-5">
            <div
              className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-ocean-300 md:block"
              aria-hidden
            />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
              <li
                className="relative h-full rounded-3xl border border-ink-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient font-display text-lg font-bold text-white shadow-glow">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {s.desc}
                </p>
              </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <ValueCard
            title="Ecosystem management"
            desc="Remote menu updates, secure cloud hosting, system-wide software improvements."
          />
          <ValueCard
            title="Active safeguarding"
            desc="24/7 monitoring, daily remote backups, proactive security maintenance."
          />
          <ValueCard
            title="Davao-based priority support"
            desc="Direct access to our local technical team with guaranteed resolution."
          />
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-ink-100 bg-gradient-to-br from-brand-50/40 to-ocean-50/40 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="font-display text-base font-semibold text-ink-900">
          {title}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-600">{desc}</p>
    </div>
  );
}
