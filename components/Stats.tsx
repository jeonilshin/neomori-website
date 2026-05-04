import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
      <div
        className="glow-orb"
        style={{
          width: 700,
          height: 700,
          top: -240,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #2bdcc0 0%, transparent 60%)",
          opacity: 0.2,
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          bottom: -240,
          right: -180,
          background: "radial-gradient(circle, #42c8ff 0%, transparent 60%)",
          opacity: 0.18,
        }}
      />
      <div className="absolute inset-0 dot-bg opacity-50" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            Outcomes
          </span>
          <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            The numbers our partners feel.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Faster service, fewer mistakes, smarter decisions — every shift,
            every day.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <StatCell value={<Counter to={100} suffix="%" />} label="Order accuracy" />
          <StatCell
            value={<Counter to={30} prefix="+" suffix="%" />}
            label="Table turnover"
          />
          <StatCell
            value={<Counter to={45} prefix="−" suffix="%" />}
            label="Order-taking time"
          />
          <StatCell
            value={<Counter to={0.8} decimals={1} suffix=" day" />}
            label="Avg. issue resolution"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-white/50">
          Indicative figures based on average gains observed by tabOS-deployed
          establishments. Actual outcomes vary by venue, traffic, and menu mix.
        </p>
      </div>
    </section>
  );
}

function StatCell({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="group relative bg-ink-900 px-6 py-10 text-center transition-colors hover:bg-ink-800">
      <div className="font-display text-5xl font-semibold leading-none tracking-tight gradient-text sm:text-6xl">
        {value}
      </div>
      <div className="mt-4 text-sm font-medium uppercase tracking-wider text-white/70">
        {label}
      </div>
      <span className="absolute left-1/2 top-4 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-300 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}
