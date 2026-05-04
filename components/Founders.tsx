import Reveal from "./Reveal";

const founders = [
  {
    name: "Enrique Garcia",
    role: "Chief Executive Officer",
    initials: "EG",
    bio: "Steers Neo Mori Tech's vision and partnerships across the Philippine restaurant industry.",
    accent: "from-brand-400 to-ocean-400",
  },
  {
    name: "Il Shin Jeon",
    role: "Chief Technology Officer",
    initials: "IJ",
    bio: "Architects the tabOS platform end-to-end — from in-table tablets to the cloud admin layer.",
    accent: "from-brand-500 to-brand-700",
  },
  {
    name: "Miko Shimizutani",
    role: "Chief Operating Officer",
    initials: "MS",
    bio: "Owns deployment, training, and the Davao-based support operation that keeps every client live.",
    accent: "from-ocean-400 to-ocean-600",
  },
];

export default function Founders() {
  return (
    <section className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Leadership</span>
          <h2 className="h2 mt-5">The team behind tabOS.</h2>
          <p className="lede mt-5">
            Three founders. One mission: rebuild restaurant service for the
            digital floor.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${f.accent} opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60`}
                />
                <div
                  className={`relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} font-display text-2xl font-bold text-white shadow-glow`}
                >
                  {f.initials}
                </div>
                <div className="relative mt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {f.role}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink-900">
                    {f.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-600">
                    {f.bio}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-2 border-t border-ink-100 pt-6 text-xs font-medium text-ink-500">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Co-founder · Neo Mori Tech
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
