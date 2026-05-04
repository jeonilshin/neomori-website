import Reveal from "./Reveal";

const results = [
  {
    metric: "Faster",
    title: "Enhanced speed",
    desc: "Real-time digital order transmission cuts processing time and shrinks customer wait times.",
  },
  {
    metric: "100%",
    title: "Superior accuracy",
    desc: "Eliminating manual encoding and paper slips drives order accuracy to near-perfect levels.",
  },
  {
    metric: "More tables",
    title: "Staff productivity",
    desc: "Waiters cover more tables; managers gain real-time visibility into every transaction.",
  },
  {
    metric: "+ Revenue",
    title: "Revenue growth",
    desc: "Improved table turnover, smarter inventory awareness, and natural upselling lift the top line.",
  },
];

export default function Results() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Expected Results</span>
            <h2 className="h2 mt-5">
              Outcomes restaurants feel from week one.
            </h2>
            <p className="lede mt-5">
              tabOS isn't a system upgrade. It's an operational reset — one
              that pays dividends on speed, accuracy, productivity, and revenue.
            </p>
            <a href="#contact" className="btn-primary mt-8 inline-flex">
              Start your rollout
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {results.map((r, i) => (
                <Reveal key={r.title} delay={i * 90}>
                <div
                  className="h-full rounded-3xl border border-ink-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="font-display text-3xl font-semibold gradient-text">
                    {r.metric}
                  </div>
                  <div className="mt-3 font-display text-lg font-semibold text-ink-900">
                    {r.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {r.desc}
                  </p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
