const items = [
  "Real-time orders",
  "Zero paper",
  "100% accuracy",
  "Live analytics",
  "Davao 24/7 support",
  "3-day onsite training",
  "Zero-downtime swap",
  "Brand-aligned design",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section
      aria-hidden
      className="relative isolate overflow-hidden bg-ink-900 py-6 text-white"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent"
      />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-12 font-display text-xl font-semibold tracking-tight sm:text-2xl"
          >
            {t}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-300" />
          </span>
        ))}
      </div>
    </section>
  );
}
