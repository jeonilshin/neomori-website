/* eslint-disable @next/next/no-img-element */
import Reveal from "./Reveal";

const rows = [
  {
    eyebrow: "01 — Brand-aligned interface",
    title: "Your menu. Your brand. Pixel-perfect.",
    desc: "Every tabOS deployment is custom-tailored to your branding — colors, typography, photography. Guests feel like they're in your restaurant, not on a generic app.",
    bullets: [
      "Custom interface built around your visual identity",
      "Professional menu photography handled by our team",
      "Easy seasonal refresh — promote what's hot in seconds",
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1100&q=80&auto=format&fit=crop",
    imageAlt: "Restaurant interior",
  },
  {
    eyebrow: "02 — Hardware that lasts",
    title: "Restaurant-grade tablets, ready for the floor.",
    desc: "Heavy-duty protective casings, screen protectors, and dedicated charging — every device is configured for the realities of a busy dining room.",
    bullets: [
      "Heavy-duty cases survive drops and spills",
      "Wall chargers and power banks included",
      "Zero-downtime swap if a unit ever fails",
    ],
    image:
      "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?w=1100&q=80&auto=format&fit=crop",
    imageAlt: "Tablet in a restaurant setting",
    flip: true,
  },
  {
    eyebrow: "03 — Live admin control",
    title: "Mark items sold out from anywhere.",
    desc: "Instantly toggle availability, push new items, and tag dishes as Popular or New from a single admin dashboard — changes go live across every tablet in real time.",
    bullets: [
      'Set "Sold Out", "New", or "Popular" with one tap',
      "Track per-staff actions via PIN-based accountability",
      "Centralized view of every order, every payment, every shift",
    ],
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1100&q=80&auto=format&fit=crop",
    imageAlt: "Restaurant manager view",
  },
];

export default function Showcase() {
  return (
    <section className="section relative bg-gradient-to-b from-white via-brand-50/30 to-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">In Action</span>
          <h2 className="h2 mt-5">Built for the way you actually serve.</h2>
          <p className="lede mt-5">
            tabOS isn't a one-size-fits-all platform. Every detail is tuned to
            your floor, your menu, and your guests.
          </p>
        </div>

        <div className="mt-14 space-y-16 sm:space-y-20">
          {rows.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
            <div
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={r.flip ? "lg:order-2" : ""}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  {r.eyebrow}
                </span>
                <h3 className="h2 mt-4 text-3xl sm:text-4xl">{r.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
                  {r.desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink-700">
                      <span className="mt-1.5 inline-block h-1.5 w-6 flex-none rounded-full bg-brand-gradient" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative ${r.flip ? "lg:order-1" : ""}`}>
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-brand-gradient opacity-15 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-ink-100 shadow-glow">
                  <img
                    src={r.image}
                    alt={r.imageAlt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/40 to-transparent" />
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
