/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="absolute inset-0 -z-20 grid-bg opacity-40" />
      <div
        className="glow-orb -z-10"
        style={{
          width: 520,
          height: 520,
          top: -120,
          left: -120,
          background: "radial-gradient(circle, #2bdcc0 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb -z-10"
        style={{
          width: 520,
          height: 520,
          top: -80,
          right: -160,
          background: "radial-gradient(circle, #42c8ff 0%, transparent 70%)",
        }}
      />

      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 animate-fadeUp">
            <h1 className="h1">
              The smarter way to{" "}
              <span className="gradient-text">order, serve</span>, and grow
              your restaurant.
            </h1>
            <p className="lede mt-5 max-w-xl">
              tabOS is a tablet-based digital ordering ecosystem that
              eliminates paper slips, removes order errors, and gives your
              team real-time control over every dish, table, and transaction.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Book a free demo
                <Arrow />
              </a>
              <a href="#solution" className="btn-ghost">
                See how it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Stat label="Order accuracy" value="100%" />
              <Divider />
              <Stat label="Onsite training" value="3 days" />
              <Divider />
              <Stat label="Davao support" value="24/7" />
            </div>
          </div>

          <div className="relative lg:col-span-6 lg:mt-16">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex flex-col">
      <span className="font-display text-2xl font-semibold text-ink-900">
        {value}
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
        {label}
      </span>
    </span>
  );
}

function Divider() {
  return <span className="hidden h-10 w-px bg-ink-200 sm:inline" />;
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <svg
        className="pointer-events-none absolute -inset-12 -z-10 animate-spinSlow"
        viewBox="0 0 400 400"
      >
        <defs>
          <linearGradient id="ring" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2bdcc0" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#1aabf0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0388ce" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1.5"
          strokeDasharray="2 6"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1"
          strokeDasharray="1 5"
        />
      </svg>

      <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-gradient opacity-20 blur-3xl" />

      <div className="tilt-card relative grid grid-cols-6 grid-rows-6 gap-3">
        <div className="col-span-4 row-span-4 overflow-hidden rounded-3xl border border-white/40 shadow-glow">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80&auto=format&fit=crop"
            alt="Restaurant interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-2 row-span-3 overflow-hidden rounded-3xl border border-white/40 shadow-card">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop"
            alt="Restaurant lights"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-3 overflow-hidden rounded-3xl border border-white/40 shadow-card">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format&fit=crop"
            alt="Dining scene"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-6 row-span-2 overflow-hidden rounded-3xl border border-white/40 bg-white shadow-glow">
          <SalesStrip />
        </div>
      </div>

      <div className="absolute -left-6 top-1/2 hidden w-56 -translate-y-1/2 sm:block">
        <FloatingCard
          title="New order · Table 12"
          line="Sinigang × 1, Iced Latte × 2"
          chip="Sent to kitchen"
        />
      </div>
      <div className="absolute -right-4 -top-3 hidden w-52 sm:block">
        <FloatingCard
          title="Today's revenue"
          line="₱48,720 · +18% vs. yesterday"
          chip="Live"
          accent
        />
      </div>
    </div>
  );
}

function SalesStrip() {
  return (
    <div className="flex h-full items-center justify-between gap-4 px-5 py-4">
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
          Live tabOS dashboard
        </div>
        <div className="mt-1 font-display text-lg font-semibold text-ink-900">
          12 active tables · 3 bills out
        </div>
      </div>
      <Sparkline />
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 200 50" className="h-12 w-40">
      <defs>
        <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#10c2a8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10c2a8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 35 L20 28 L40 32 L60 22 L80 26 L100 18 L120 22 L140 12 L160 18 L180 8 L200 14 L200 50 L0 50 Z"
        fill="url(#sg)"
      />
      <path
        d="M0 35 L20 28 L40 32 L60 22 L80 26 L100 18 L120 22 L140 12 L160 18 L180 8 L200 14"
        stroke="#0388ce"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatingCard({
  title,
  line,
  chip,
  accent,
}: {
  title: string;
  line: string;
  chip: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white/90 p-3 shadow-glow backdrop-blur-md animate-floaty">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
          {title}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
            accent
              ? "bg-ocean-100 text-ocean-700"
              : "bg-brand-50 text-brand-700"
          }`}
        >
          {chip}
        </span>
      </div>
      <div className="mt-1 text-xs font-medium text-ink-800">{line}</div>
    </div>
  );
}
