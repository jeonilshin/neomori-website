import Reveal from "./Reveal";

const coverage = [
  {
    title: "Zero-downtime swap",
    desc: "If a tablet's system fails due to battery, screen, or connectivity issues, a fully configured temporary unit is supplied immediately to ensure service continuity.",
  },
  {
    title: "Priority onsite dispatch",
    desc: "As a Davao-based partner, we dispatch a technician on priority to handle hardware issues — your team focuses entirely on guest service.",
  },
  {
    title: "Accessories protection",
    desc: "All chargers, power banks, and cables include a one-month replacement guarantee should they fail.",
  },
];

const exclusions = [
  "Physical, accidental & liquid damage from drops, bent frames, or heavy liquid/steam exposure",
  'Security & tampering — unauthorized third-party repairs or software "jailbreaking"',
  "Theft or loss of units",
  "Cosmetic wear — minor scuffs or scratches that don't affect operation",
];

export default function Warranty() {
  return (
    <section className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Hardware Warranty</span>
          <h2 className="h2 mt-5">Two years of comprehensive protection.</h2>
          <p className="lede mt-5">
            Applies for the full contract duration under Option 1 (purchase)
            and Option 3 (rental). Designed so a hardware issue never costs
            you a service.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {coverage.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="card h-full">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-ink-100 bg-ink-50/40 p-8 lg:grid-cols-2 lg:p-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              Warranty exclusions
            </div>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              {exclusions.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-ink-200 text-ink-600">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 6l12 12M6 18L18 6"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              Repair & replacement
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              For damages listed in the exclusions, repair costs are 100%
              shouldered by the client. If a unit requires full replacement
              due to excluded damage, the client is charged a fee of{" "}
              <span className="font-semibold text-ink-900">
                ₱16,000 per tablet
              </span>{" "}
              (subject to current market pricing and availability).
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Even in cases of accidental damage, we still provide a fully
              configured temporary replacement unit immediately to keep your
              operations running until the new unit is secured.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
